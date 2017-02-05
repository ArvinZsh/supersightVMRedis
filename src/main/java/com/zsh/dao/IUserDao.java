/**
 * @Title: IUserDao.java
 * @Package: com.zsh.dao
 * @Description: TODO
 * @author zsh
 * @data 2017年2月5日上午10:10:14
 * @version V1.0
 */
package com.zsh.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.zsh.bean.UserInfo;


/**
 * @ClassName: IUserDao
 * @Description: TODO
 * @author: zsh
 * @data 2017年2月5日上午10:10:14
 */
@Repository
public interface IUserDao {
	List<UserInfo> findAll();
}
