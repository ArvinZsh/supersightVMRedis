/**
 * 
 */
package com.zsh.controller.login;

import java.util.Map;

import org.springframework.stereotype.Component;

import com.zsh.bean.UserInfo;
import com.zsh.bean.dto.UserDto;
import com.zsh.controller.BaseRet;

/**
 * @author Administrator
 *
 */
@Component
public class LoginRet extends BaseRet {
	private String uid;
	private String sid;
	private Map user;

	public LoginRet() {
	}

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public String getSid() {
		return sid;
	}

	public void setSid(String sid) {
		this.sid = sid;
	}

	public Map getUser() {
		return user;
	}

	public void setUser(Map user) {
		this.user = user;
	}

}
