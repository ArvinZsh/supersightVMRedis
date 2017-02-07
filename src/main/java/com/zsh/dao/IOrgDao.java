/**
 * @Title: IOrgDao.java
 * @Package: com.zsh.dao
 * @Description: TODO
 * @author zsh
 * @data 2017年2月5日上午10:11:52
 * @version V1.0
 */
package com.zsh.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.zsh.bean.OrgInfo;

/**
 * @ClassName: IOrgDao
 * @Description: TODO
 * @author: zsh
 * @data 2017年2月5日上午10:11:52
 */
public interface IOrgDao {
	List<OrgInfo> findAll();
	
	List<OrgInfo> findByName(String orgName);
	
	OrgInfo findById(String itemId);
	
	int save(OrgInfo org);
	
	int update(OrgInfo org);
	
	int delete(String itemId);
}
