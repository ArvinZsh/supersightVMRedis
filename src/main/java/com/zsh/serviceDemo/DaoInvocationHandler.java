package com.zsh.serviceDemo;

/**
 * 拦截链及代理类所在,判断是否使用缓存
 * */

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.util.Map;

import org.springframework.context.ApplicationContext;

import com.dongnao.jack.dao.CommonMapper;

public class DaoInvocationHandler implements InvocationHandler {

	private Object instance;
	
	private PluginConfig config;

	public DaoInvocationHandler(Object instance) {
		this.instance = instance;
	}

	public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {

		Map<String, CacheHandler> interceprters = ApplicationContextUtil.getApplicationContext().getBeansOfType(CacheHandler.class);
		
		if(config.getIsUseCache()) {
			for(Map.Entry<String, CacheHandler> interceprter: interceprters.entrySet()) {
				FilterMethodName filterNames = interceprter.getClass().getAnnotation(FilterMethodName.class);
				
				// 1. 某个具体的dao方法
				// 2. 该dao的某些具体的方法需要缓存
				if(method.getDeclaringClass().getName().equals(filterNames.type().getName()) && filterNames.methodName().contains(method.getName())) {
					interceprter.getValue().process(new Invocation(instance, args, method));
				}
			}
			return method.invoke(interceprters, args);
		}
		return method.invoke(interceprters, args);
	}

}
