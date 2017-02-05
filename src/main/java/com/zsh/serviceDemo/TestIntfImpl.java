/**
 * 
 */
package com.zsh.serviceDemo;

/**
 * 某service,只是调用了代理类的方法(和普通service一样),解耦
 * */

import java.lang.reflect.InvocationHandler;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dongnao.jack.dao.CommonMapper;

/**
 * @author Administrator
 *
 */
@Service
public class TestIntfImpl extends AbstractBaseService implements TestIntf {
	
	@Autowired
	CommonMapper mapper;

	/* (non-Javadoc)
	 * @see com.zsh.service.TestIntf#todo(java.lang.String)
	 */
	public void todo(String param) {
		CommonMapper commonMapper = (CommonMapper) getProxy(CommonMapper.class, mapper);
		
		commonMapper.queryRecords(new HashMap<String, String>());
	}

}
