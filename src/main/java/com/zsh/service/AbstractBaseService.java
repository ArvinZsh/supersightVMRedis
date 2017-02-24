package com.zsh.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.zsh.cache.ICacheTemplate;
import com.zsh.cache.RedisCacheTemplate;
import com.zsh.dao.BaseDao;

@Service
public abstract class AbstractBaseService {
	
	@Autowired
	protected BaseDao dao;
	
	@Autowired
	@Qualifier("redisCacheTemplate")
	protected ICacheTemplate cacheTemplate;
	
}
