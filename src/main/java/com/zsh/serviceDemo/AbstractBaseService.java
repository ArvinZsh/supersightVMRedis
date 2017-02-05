/**
 * 
 */
package com.zsh.serviceDemo;
import java.lang.reflect.Proxy;


/**
 * @author Administrator
 * 基层service,提供取得代理类的方法,需要被继承
 */
public abstract class AbstractBaseService {
	
	public Object getProxy(Class<?> daoClass, Object instance) {
		return Proxy.newProxyInstance(daoClass.getClassLoader(), new Class<?>[]{daoClass}, new DaoInvocationHandler(instance));
	}
	
}
