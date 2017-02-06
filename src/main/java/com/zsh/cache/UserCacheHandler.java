/**
 * @Title: UserCacheHandler.java
 * @Package: com.zsh.cache
 * @Description: TODO
 * @author zsh
 * @data 2017年2月6日上午11:07:40
 * @version V1.0
 */
package com.zsh.cache;

import java.lang.reflect.Method;

import org.springframework.stereotype.Component;

import com.zsh.dao.IUserDao;
import com.zsh.util.CacheFilterMethodName;

/**
 * @ClassName: UserCacheHandler
 * @Description: TODO
 * @author: zsh
 * @data 2017年2月6日上午11:07:40
 */
@Component
@CacheFilterMethodName(type = IUserDao.class, methodName = "findAll")
public class UserCacheHandler implements CacheHandler{

	@Override
	public Object process(Object[] args, Method method, Object instance) {
		return null;
	}
	
}
