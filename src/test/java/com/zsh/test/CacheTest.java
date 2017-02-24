package com.zsh.test;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CountDownLatch;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.test.context.ContextConfiguration;

import com.alibaba.fastjson.TypeReference;
import com.zsh.cache.CacheDBLoad;
import com.zsh.cache.ICacheTemplate;
import com.zsh.cache.RedisCacheTemplate;
import com.zsh.dao.BaseDao;
import com.zsh.util.ApplicationCtxUtil;

import redis.clients.jedis.JedisCluster;

@RunWith(org.springframework.test.context.junit4.SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:application-test.xml"})
public class CacheTest {
	
	CountDownLatch latch = new CountDownLatch(1000);
	
	@Autowired
	@Qualifier("redisCacheTemplate")
	ICacheTemplate cacheTemplate;
	
	@Autowired
	JedisCluster jedisCluster;
	
	@Test
	public void test() throws InterruptedException {
		for(int i=0; i<1000; i++) {
			Thread t = new Thread(new RunClass());
			t.start();
			
			latch.countDown(); // 减1,1000减到0就从等待处并发开始并发开始
		}
		Thread.currentThread().sleep(5000); // 主线程睡眠
	}
	
	private class RunClass implements Runnable {

		public void run() {
			try {
				latch.await(); // 线程等待
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			
			String key = "test";
			// 测试读数据库次数
			cacheTemplate.findCache(key, new TypeReference<Map<String, Object>>(){}, 1, new CacheDBLoad() {
				@Override
				public Map<String, Object> load() {
					System.out.println("=============使用数据库==========");
					try {
						Thread.sleep(300);
					} catch (InterruptedException e) {
						e.printStackTrace();
					} // 睡300毫秒模拟去数据库取
					Map<String, Object> map = new HashMap<String, Object>();
					map.put("name", "zsh");
					return map;
				}
			});
		}
		
	}
}
