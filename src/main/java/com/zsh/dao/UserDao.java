/**
 * @Title: UserDao.java
 * @Package: com.zsh.dao
 * @Description: TODO
 * @author zsh
 * @data 2017年2月5日上午10:17:52
 * @version V1.0
 */
package com.zsh.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.zsh.bean.UserInfo;

/**
 * @ClassName: UserDao
 * @Description: TODO
 * @author: zsh
 * @data 2017年2月5日上午10:17:52
 */
@Repository
public class UserDao extends AbstractBaseDao implements IUserDao {
	
	/* (non-Javadoc)
	 * @see com.zsh.dao.IUserDao#queryUser()
	 */
	@Override
	public List<UserInfo> findAll() {
		return null;
	}

	@Override
	public int update() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int save() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int delete() {
		// TODO Auto-generated method stub
		return 0;
	}

}
