/**
 * @Title: CacheInvocationHandler.java
 * @Package: com.zsh.service1
 * @Description: TODO
 * @author zsh
 * @data 2017年2月5日上午10:38:05
 * @version V1.0
 */
package com.zsh.dao;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.util.Map;

import com.zsh.cache.CacheHandler;
import com.zsh.util.ApplicationCtxUtil;
import com.zsh.util.CacheFilterMethodName;

/**
 * @ClassName: CacheInvocationHandler
 * @Description: TODO
 * @author: zsh
 * @data 2017年2月5日上午10:38:05
 */
public class CacheInvocationHandler implements InvocationHandler {

	private Object instance;

	public CacheInvocationHandler(Object instance) {
		this.instance = instance;
	}
	
	@Override
	public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
		
		Map<String, CacheHandler> heandler = ApplicationCtxUtil.getBeansOfType(CacheHandler.class);
		for(Map.Entry<String, CacheHandler> interceprter : heandler.entrySet()) {
			CacheFilterMethodName filterMethodNames = interceprter.getClass().getAnnotation(CacheFilterMethodName.class);
			
			// 1. 对应接口类
			// 2. 对应方法名
			if(method.getDeclaringClass().getName().equals(filterMethodNames.type().getName()) && filterMethodNames.methodName().contains(method.getName())) {
				// 走缓存
				return interceprter.getValue().process(args, method, instance);
			}
		}
		
		// 不需要缓存
		return method.invoke(instance, args);
	}

}
