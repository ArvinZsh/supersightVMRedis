package com.zsh.controller.login;

import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.zsh.service.IUserService;
import com.zsh.service.UserService;

@Controller
public class LoginController {
	
	@Autowired
	IUserService userSer;

	@RequestMapping("/login.do")
	public @ResponseBody Object process(@RequestBody LoginCmd cmd, HttpServletResponse resp) throws UnsupportedEncodingException {

		return userSer.valiteData(cmd);
		
	}
	
}
