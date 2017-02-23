/**
 * @Title: CacheHandler.java
 * @Package: com.zsh.service
 * @Description: TODO
 * @author zsh
 * @data 2017年2月5日下午2:12:40
 * @version V1.0
 */
package com.zsh.cache;

import java.lang.reflect.Method;
import java.util.Map;

/**
 * @ClassName: CacheHandler
 * @Description: TODO
 * @author: zsh
 * @data 2017年2月5日下午2:12:40
 */
public interface CacheHandler {

	Object process(Object[] args, Method method, Object instance);
	
}
