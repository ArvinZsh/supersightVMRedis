package com.zsh.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zsh.bean.UserInfo;
import com.zsh.bean.dto.UserDto;
import com.zsh.controller.BaseRet;
import com.zsh.controller.login.LoginCmd;
import com.zsh.controller.login.LoginRet;
import com.zsh.dao.AbstractBaseDao;
import com.zsh.dao.IUserDao;
import com.zsh.util.ApplicationCtxUtil;
import com.zsh.util.CommonUtil;

@Service
public class UserService implements IUserService {
	
	@Autowired
	private IUserDao userDao;
	
	public List<UserInfo> find() {
		IUserDao proxyDao = (IUserDao) AbstractBaseDao.getProxy(IUserDao.class, userDao);
		List<UserInfo> list = proxyDao.findAll();
		return list;
	}
	
	public LoginRet valiteData(LoginCmd cmd) {
		
		LoginRet loginRet = null;
		if(!CommonUtil.isStrVoidValue(cmd.getLoginUid()) ||
				!CommonUtil.isStrVoidValue(cmd.getPwd())) {
			loginRet = (LoginRet) CommonUtil.initErrorRet("账号或密码错误或该账号没有权限");
		}
		UserDto user = ApplicationCtxUtil.getBean(UserDto.class);
		user.setLoginUid(cmd.getLoginUid());
		user.setLoginPwd(cmd.getPwd());
		user = userDao.valiteData(user);
		loginRet = ApplicationCtxUtil.getBean(LoginRet.class);
		loginRet.setSuccessFlag(true);
		loginRet.setUser(user);
		
		return loginRet;
	}
	
}
