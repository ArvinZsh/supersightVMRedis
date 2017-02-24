/**
 * 
 */
package com.zsh.cache;

import com.alibaba.fastjson.TypeReference;

/**
 * @author Administrator
 *
 */
public interface ICacheTemplate {
	public <T> T findCache(String key, TypeReference<T> clazz, int seconds, CacheDBLoad load);
}
