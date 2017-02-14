/**
 * 
 */
package com.zsh.dao;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;

/**
 * @author Administrator
 *
 */
public class BaseDao extends AbstractBaseDao {
	
	@Override
	@Resource(name = "sqlSessionTemplate")
	protected void setSqlSessionTemplate(SqlSessionTemplate sqlSessionTemplate) {
		this.sqlSessionTemplate = sqlSessionTemplate;
	}
}
