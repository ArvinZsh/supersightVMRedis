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

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.alibaba.fastjson.JSONArray;
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
@CacheFilterMethodName(type = IOrgDao.class, methodName = "queryOrg")
public class OrgCacheHandler implements CacheHandler {
	
	@Autowired
	Logger logger;

	/* (non-Javadoc)
	 * @see com.zsh.cache.CacheHandler#process(java.lang.Object[], java.lang.reflect.Method, java.lang.Object)
	 */
	@Override
	public Object process(Object[] args, Method method, Object instance) {
		
		JedisCluster jedisCluster = (JedisCluster) ApplicationCtxUtil.getApplicationContext().getBean("jedisCluster");
		
		Object result = null;
		if(jedisCluster.exists(method.getName())) {
			List<String> redisList = jedisCluster.lrange(method.getName(), 0, -1);
			if(redisList.size() > 1) {
				List<OrgInfo> resultList = new ArrayList<OrgInfo>();
				for(String jsonStr : redisList) {
					OrgInfo org = JSONObject.parseObject(jsonStr, OrgInfo.class);
					resultList.add(org);
				}
				result = resultList;
			} else if(redisList.size() > 0) {
				result = JSONObject.parseObject(redisList.get(0), OrgInfo.class);
			}
			
		} else {
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
				logger.error(e);
			}
		}
		
		return result;
	}

}
