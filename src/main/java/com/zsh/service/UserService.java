package com.zsh.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.zsh.bean.UserInfo;
import com.zsh.bean.dto.UserDto;
import com.zsh.controller.BaseRet;
import com.zsh.controller.login.LoginCmd;
import com.zsh.controller.login.LoginRet;
import com.zsh.dao.AbstractBaseDao;
import com.zsh.dao.IUserDao;
import com.zsh.util.ApplicationCtxUtil;
import com.zsh.util.CommonUtil;

import redis.clients.jedis.JedisCluster;

@Service
public class UserService extends AbstractBaseService implements IUserService {
	
	public List<UserInfo> find() {
//		IUserDao proxyDao = (IUserDao) AbstractBaseDao.getProxy(IUserDao.class, userDao);
//		List<UserInfo> list = proxyDao.findAll();
		return null;
	}
	
	public Object valiteData(LoginCmd cmd) {
		
		LoginRet loginRet = new LoginRet();
		if(CommonUtil.isStrVoidValue(cmd.getLoginUid()) ||
				CommonUtil.isStrVoidValue(cmd.getPwd())) {
			loginRet.setSuccessFlag(false);
			loginRet.setErrorMsg("账号或密码错误或该账号没有权限");
		}
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("loginUid", cmd.getLoginUid());
		params.put("loginPwd", cmd.getPwd());
		
		Map<String, Object> user = dao.getOneInfo("user.valiteData", params);

		if(user == null) {
			loginRet.setSuccessFlag(false);
			loginRet.setErrorMsg("账号或密码错误或该账号没有权限");
		} else {
			loginRet.setSuccessFlag(true);
			loginRet.setUser(user);
			loginRet.setUid((String)user.get("userId"));
		}
		
		return JSONObject.toJSON(loginRet);
	}
	
}
