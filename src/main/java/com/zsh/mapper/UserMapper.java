/**
 * @Title: UserMapper.java
 * @Package: com.zsh.mapper
 * @Description: TODO
 * @author zsh
 * @data 2017年2月5日下午3:37:36
 * @version V1.0
 */
package com.zsh.mapper;

import java.util.List;

import com.zsh.bean.UserInfo;

/**
 * @ClassName: UserMapper
 * @Description: TODO
 * @author: zsh
 * @data 2017年2月5日下午3:37:36
 */
public interface UserMapper {

	List<UserInfo> findAll();
	
}
