package com.zsh.serviceDemo;

/**
 * 具体的缓存dao实现类
 * */

import java.lang.reflect.InvocationTargetException;
import java.util.List;

import org.codehaus.jackson.JsonFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.alibaba.druid.support.json.JSONParser;
import com.dongnao.jack.dao.CommonMapper;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import redis.clients.jedis.JedisCluster;

@FilterMethodName(methodName = "query1,query2,query3", type = CommonMapper.class)
@Component
public class CommonDaoCacheHandler implements CacheHandler {

	public Object process(Invocation invocation) {
		
		JedisCluster jedisCluster = (JedisCluster) ApplicationContextUtil.getApplicationContext().getBean("jedisCluster"); 
		Object result = null;
		
		if(jedisCluster.exists("key")) {
			// 从缓存取出
			result = jedisCluster.lrange("key", 0, -1);
			
		} else {
			// 从数据库读出,存入缓存(转化为Json)
			try {
				result = invocation.getMethod().invoke(invocation.getInstance(), invocation.getParams());

				JSONArray jsonArray = JSONArray.fromObject(result); 
				
				jedisCluster.lpush("key", jsonArray.toString());
			} catch (IllegalAccessException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IllegalArgumentException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (InvocationTargetException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		return result;
	}

}
