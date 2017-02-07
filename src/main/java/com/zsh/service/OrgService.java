package com.zsh.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zsh.bean.OrgInfo;
import com.zsh.dao.AbstractBaseDao;
import com.zsh.dao.IOrgDao;

@Service
public class OrgService {
	
	@Autowired
	private IOrgDao orgDao;
	
	public List<OrgInfo> queryAll() {
		IOrgDao proxyDao = (IOrgDao) AbstractBaseDao.getProxy(IOrgDao.class, orgDao);
		return proxyDao.findAll();
	}
	
}
