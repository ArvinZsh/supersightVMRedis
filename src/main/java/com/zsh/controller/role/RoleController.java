package com.zsh.controller.role;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class RoleController {
	
	@RequestMapping("role.do")
	public @ResponseBody Object execute(@RequestBody RoleCmd cmd, @RequestParam("action") String action) {
		
		Object obj = null;
		if("listNoRoleModule".equals(action)) {
			obj = listNoRoleModule();
		}
		
		return obj;
	}
	
	private Object listNoRoleModule() {
		return null;
	}
}
