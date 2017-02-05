package com.zsh.serviceDemo;

/**
 * 取得applicationContext,获取被反射而配置在spring中的bean
 * */

import org.springframework.context.ApplicationContext;

public class ApplicationContextUtil {

	private static ApplicationContext applicationContext;

	public static void setApplicationContext(ApplicationContext applicationContext) {
		ApplicationContextUtil.applicationContext = applicationContext;
	}

	public static ApplicationContext getApplicationContext() {
		return applicationContext;
	}

}
