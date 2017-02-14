package com.zsh.controller.login;

import com.zsh.controller.BaseCmd;

public class LoginCmd extends BaseCmd {
	private String loginUid;
	private String pwd;

	public LoginCmd() {
	}

	public String getLoginUid() {
		return loginUid;
	}

	public void setLoginUid(String loginUid) {
		this.loginUid = loginUid;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

}
