/**
 * @Title: OrgCacheHandler.java
 * @Package: com.zsh.cache
 * @Description: TODO
 * @author zsh
 * @data 2017年2月5日下午2:32:19
 * @version V1.0
 */
package com.zsh.cache;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;

import com.alibaba.fastjson.JSONObject;
import com.zsh.bean.OrgInfo;
import com.zsh.dao.IOrgDao;
import com.zsh.util.ApplicationCtxUtil;
import com.zsh.util.CacheFilterMethodName;

import redis.clients.jedis.JedisCluster;

/**
 * @ClassName: OrgCacheHandler
 * @Description: TODO
 * @author: zsh
 * @data 2017年2月5日下午2:32:19
 */
@Component
@CacheFilterMethodName(type = IOrgDao.class, methodName = "findAll")
public class OrgCacheHandler implements CacheHandler {
	
	@Override
	public Object process(Object[] args, Method method, Object instance) {
		
		JedisCluster jedisCluster = (JedisCluster) ApplicationCtxUtil.getBean("jedisCluster");
		
		Object result = null;
		if(jedisCluster.exists(method.getName())) { // 缓存中有数据
			List<String> redisList = jedisCluster.lrange(method.getName(), 0, -1);
			if(redisList.size() > 1) {
				List<OrgInfo> resultList = new ArrayList<OrgInfo>();
				for(String jsonStr : redisList) {
					OrgInfo org = JSONObject.parseObject(jsonStr, OrgInfo.class);
					resultList.add(org);
				}
				result = resultList;
			} else {
				if(!"null".equals(redisList.get(0))) {
					result = JSONObject.parseObject(redisList.get(0), OrgInfo.class);
				} else { // 缓存数据有误,重新放入缓存
					result = saveToCache(jedisCluster, args, method, instance);
				}
			}
			
		} else { // 缓存中无数据
			result = saveToCache(jedisCluster, args, method, instance);
		}
		
		return result;
	}

	private Object saveToCache(JedisCluster jedisCluster, Object[] args, Method method, Object instance) {
		Object result = null;
		try {
			result = method.invoke(instance, args);
			if(result instanceof List) { // 数组
				List<OrgInfo> list = (List) result;
				for(OrgInfo org : list) {
					jedisCluster.lpush(method.getName(), JSONObject.toJSONString(org));
				}
			} else { // 单个对象
				jedisCluster.lpush(method.getName(), JSONObject.toJSONString(result));
			}
		} catch (IllegalAccessException | IllegalArgumentException | InvocationTargetException e) {
			ApplicationCtxUtil.getBean(Logger.class).error(e);
		}
		return result;
	}
	
}
