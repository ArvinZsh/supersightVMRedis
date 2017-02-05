/**
 * 
 */
package com.zsh.serviceDemo;

/**
 * 自定义注解,确定dao中需要被缓存的方法以及匹配dao是否需要缓存
 * */

/**
 * @author Administrator
 *
 */
public @interface FilterMethodName {
	String methodName();
	
	Class<?> type();
}
