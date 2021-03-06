package com.zsh.controller.role;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zsh.service.IRoleService;



@Controller
public class RoleController {
	
	@Autowired
	IRoleService roleSer;
	
	@RequestMapping("role.do")
	public @ResponseBody Object execute(@RequestBody RoleCmd cmd, @RequestParam("action") String action) {
		
		Object obj = null;
		if("listNoRoleModule".equals(action)) {
			obj = roleSer.listNoRoleModule(cmd);
		} else if("getRoleBtn".equals(action)) {
			obj = roleSer.getRoleBtn(cmd);
		}
		
		return obj;
	}
}
