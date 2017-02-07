/**
 *	@author  zsh  
 * 	@date    2017年1月25日 下午10:57:48 
 *	@version 1.0 
 * 	
*/
package com.zsh.test;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zsh.bean.OrgInfo;
import com.zsh.bean.UserInfo;
import com.zsh.service.OrgService;
import com.zsh.service.UserService;
import com.zsh.util.ApplicationCtxUtil;

import redis.clients.jedis.JedisCluster;

/**
 * @author zhengshenghui
 *
 */
@Controller
@RequestMapping("/user")
public class TestController {

	@Autowired
	private OrgService orgSer;
	
	@Autowired
	private UserService userSer;

	@RequestMapping("/findAll")
	public @ResponseBody String test() {
		List<UserInfo> users = userSer.find();

		return users.toString();
	}
}
