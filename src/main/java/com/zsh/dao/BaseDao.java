/**
 * 
 */
package com.zsh.dao;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

/**
 * @author Administrator
 *
 */
@Repository
public class BaseDao extends AbstractBaseDao {
	
	@Override
	@Resource(name = "sqlSessionTemplate")
	protected void setSqlSessionTemplate(SqlSessionTemplate sqlSessionTemplate) {
		this.sqlSessionTemplate = sqlSessionTemplate;
	}
}
