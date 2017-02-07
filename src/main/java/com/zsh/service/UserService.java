package com.zsh.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zsh.bean.UserInfo;
import com.zsh.dao.AbstractBaseDao;
import com.zsh.dao.IUserDao;

@Service
public class UserService {
	
	@Autowired
	private IUserDao userDao;
	
	public List<UserInfo> find() {
		IUserDao proxyDao = (IUserDao) AbstractBaseDao.getProxy(IUserDao.class, userDao);
		List<UserInfo> list = proxyDao.findAll();
		return list;
	}
	
}
