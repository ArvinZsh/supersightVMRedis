/**
 * @Title: UserCacheHandler.java
 * @Package: com.zsh.cache
 * @Description: TODO
 * @author zsh
 * @data 2017年2月6日上午11:07:40
 * @version V1.0
 */
package com.zsh.cache;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;

import com.alibaba.fastjson.JSONObject;
import com.zsh.bean.OrgInfo;
import com.zsh.bean.UserInfo;
import com.zsh.dao.IUserDao;
import com.zsh.util.ApplicationCtxUtil;
import com.zsh.util.CacheFilterMethodName;

import redis.clients.jedis.JedisCluster;

/**
 * @ClassName: UserCacheHandler
 * @Description: TODO
 * @author: zsh
 * @data 2017年2月6日上午11:07:40
 */
@Component
@CacheFilterMethodName(type = IUserDao.class, methodName = "findAll")
public class UserCacheHandler implements CacheHandler{
	
	@Override
	public Object process(Object[] args, Method method, Object instance) {
		
		final String key = IUserDao.class.getSimpleName() + "->" + method.getName();
		
		JedisCluster jedisCluster = (JedisCluster) ApplicationCtxUtil.getBean("jedisCluster");
		
		Object result = null;
		if(jedisCluster.exists(key)) { // 缓存中有数据
			List<String> redisList = jedisCluster.lrange(key, 0, -1);
			if(redisList.size() > 1) {
				List<UserInfo> resultList = new ArrayList<UserInfo>();
				for(String jsonStr : redisList) {
					UserInfo user = JSONObject.parseObject(jsonStr, UserInfo.class);
					resultList.add(user);
				}
				result = resultList;
			} else {
				if(!"null".equals(redisList.get(0))) {
					result = JSONObject.parseObject(redisList.get(0), OrgInfo.class);
				} else { // 缓存数据有误,重新放入缓存
					result = saveToCache(key, jedisCluster, args, method, instance);
				}
			}
			
		} else { // 缓存中无数据
			result = saveToCache(key, jedisCluster, args, method, instance);
		}
		
		return result;
	}
	
	private Object saveToCache(String key, JedisCluster jedisCluster, Object[] args, Method method, Object instance) {
		Object result = null;
		try {
			result = method.invoke(instance, args);
			if(result instanceof List) { // 数组
				List<UserInfo> list = (List) result;
				for(UserInfo user : list) {
					jedisCluster.lpush(key, JSONObject.toJSONString(user));
				}
			} else { // 单个对象
				jedisCluster.lpush(key, JSONObject.toJSONString(result));
			}
		} catch (IllegalAccessException | IllegalArgumentException | InvocationTargetException e) {
			ApplicationCtxUtil.getBean(Logger.class).error(e);
		}
		return result;
	}
	
}
