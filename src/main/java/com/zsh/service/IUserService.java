package com.zsh.service;

import java.util.List;

import com.zsh.bean.UserInfo;
import com.zsh.controller.login.LoginCmd;
import com.zsh.controller.login.LoginRet;

public interface IUserService {

	List<UserInfo> find();
	LoginRet valiteData(LoginCmd cmd);
}
