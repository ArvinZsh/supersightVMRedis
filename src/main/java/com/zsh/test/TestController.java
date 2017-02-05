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
import com.zsh.service.OrgService;

import redis.clients.jedis.JedisCluster;

/**
 * @author zhengshenghui
 *
 */
@Controller
@RequestMapping("/org")
public class TestController {

	@Autowired
	private OrgService orgSer;
	
	@RequestMapping("/queryAll")
	public @ResponseBody String test() {
		
		List<OrgInfo> org = orgSer.queryAll();
		
		return org.toString();
	}
}
