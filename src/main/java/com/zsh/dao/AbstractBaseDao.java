/**
 * @Title: AbstractBaseService.java
 * @Package: com.zsh.service1
 * @Description: TODO
 * @author zsh
 * @data 2017年2月5日上午10:30:36
 * @version V1.0
 */
package com.zsh.dao;

import java.lang.reflect.Proxy;

/**
 * @ClassName: AbstractBaseService
 * @Description: TODO
 * @author: zsh
 * @data 2017年2月5日上午10:30:36
 */
public abstract class AbstractBaseDao {
	
	public abstract int update();
	public abstract int save();
	public abstract int delete();
	
	public static Object getProxy(Class<?> intfCls, Object mapperInstance) {
		return Proxy.newProxyInstance(intfCls.getClassLoader(), new Class[]{intfCls}, new CacheInvocationHandler(mapperInstance));
	}
}
