package com.zsh.service;

/**
 * 拦截器接口,具体的缓存方法
 * */
public interface CacheHandler {
	
	Object process(Invocation invocation);
	
}
