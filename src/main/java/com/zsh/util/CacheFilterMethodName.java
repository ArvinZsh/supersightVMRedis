/**
 * @Title: CacheFilterMethodName.java
 * @Package: com.zsh.util
 * @Description: TODO
 * @author zsh
 * @data 2017年2月5日下午1:47:29
 * @version V1.0
 */
package com.zsh.util;



import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import org.springframework.stereotype.Component;

/**
 * @ClassName: CacheFilterMethodName
 * @Description: TODO
 * @author: zsh
 * @data 2017年2月5日下午1:47:29
 */
@Target({ElementType.TYPE})  
@Retention(RetentionPolicy.RUNTIME)  
@Documented  
@Component
public @interface CacheFilterMethodName {
	
	String methodName();
	
	Class<?> type();
	
}
