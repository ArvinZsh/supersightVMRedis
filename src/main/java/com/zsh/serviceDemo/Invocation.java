package com.zsh.serviceDemo;

/**
 * 封装类, 代理类调用的参数
 * */

import java.lang.reflect.Method;

public class Invocation {
	private Object instance;
	private Object[] params;
	private Method method;

	public Invocation(Object instance, Object[] params, Method method) {
		this.instance = instance;
		this.params = params;
		this.method = method;
	}

	public Object getInstance() {
		return instance;
	}

	public void setInstance(Object instance) {
		this.instance = instance;
	}

	public Object[] getParams() {
		return params;
	}

	public void setParams(Object[] params) {
		this.params = params;
	}

	public Method getMethod() {
		return method;
	}

	public void setMethod(Method method) {
		this.method = method;
	}

}
