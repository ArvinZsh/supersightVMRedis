/**
 * 
 */
package com.zsh.cache;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

import redis.clients.jedis.JedisCluster;

/**
 * @author Administrator
 * 缓存模板
 */
@Component
public class CacheTemplate {
	
	@Autowired
	JedisCluster jedisCluster;

	public <T> T findCache(String key, TypeReference<T> clazz, int seconds, CacheDBLoad load) { // 防止缓存击穿
		String jsonStr = jedisCluster.get(key);
		if(StringUtils.isBlank(jsonStr) && StringUtils.equalsIgnoreCase(jsonStr, "null")) { // 没有取到缓存
			synchronized(this) { // 其他线程都在等待,等待后如果没有加缓存判断的话,则还是会走数据库,所以还要加这段代码
				if(StringUtils.isBlank(jsonStr) && StringUtils.equalsIgnoreCase(jsonStr, "null")) { // 没有取到缓存,读取数据库并塞入缓存
					T result = load.load();
					jedisCluster.set(key, JSON.toJSONString(result));
					jedisCluster.expire(key, seconds); // 存活时间
					return result;
				} else { // 其他同步等待的线程直接取缓存
					jsonStr = jedisCluster.get(key);
					return JSON.parseObject(jsonStr, clazz);
				}
			}
		}
		return JSON.parseObject(jsonStr, clazz);
	}
	
}
