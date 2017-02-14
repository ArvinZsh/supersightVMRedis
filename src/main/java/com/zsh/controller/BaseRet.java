/**
 * 
 */
package com.zsh.controller;

import org.springframework.stereotype.Component;

/**
 * @author Administrator
 *
 */
@Component
public class BaseRet {
	private boolean successFlag;
	private String errorMsg;

	public BaseRet() {
	}

	public boolean getSuccessFlag() {
		return successFlag;
	}

	public void setSuccessFlag(boolean successFlag) {
		this.successFlag = successFlag;
	}

	public String getErrorMsg() {
		return errorMsg;
	}

	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}

}
