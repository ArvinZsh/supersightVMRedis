/**
 * @Title: ApplicationCtxUtil.java
 * @Package: com.zsh.util
 * @Description: TODO
 * @author zsh
 * @data 2017年2月5日下午2:05:23
 * @version V1.0
 */
package com.zsh.util;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

/**
 * @ClassName: ApplicationCtxUtil
 * @Description: TODO
 * @author: zsh
 * @data 2017年2月5日下午2:05:23
 */
public class ApplicationCtxUtil implements ApplicationContextAware  {
	
	private static ApplicationContext ctx;

	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		ctx = applicationContext;
	}

	public static ApplicationContext getApplicationContext() {
		return ctx;
	}
}
