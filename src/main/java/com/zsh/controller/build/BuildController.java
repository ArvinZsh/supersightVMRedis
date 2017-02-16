/**
 * 
 */
package com.zsh.controller.build;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zsh.service.IBuildService;

/**
 * @author Administrator
 *
 */
@Controller
public class BuildController {
	
	@Autowired
	private IBuildService buildSer;

	@RequestMapping("/buildings.do")
	public @ResponseBody Object execute(@RequestBody Map<String, Object> cmd, @RequestParam("action") String action) {
		Object obj = null;
		if("list".equals(action)) {
			obj = buildSer.list(cmd);
		}
		return obj;
	}
}
