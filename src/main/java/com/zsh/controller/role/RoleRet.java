package com.zsh.controller.role;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.zsh.controller.BaseRet;

public class RoleRet extends BaseRet {
	private List<Map<String, Object>> roleInfos = new ArrayList<Map<String, Object>>();
	private List<Map<String, Object>> pageRoles = new ArrayList<Map<String, Object>>();
	private List<String> buttons = new ArrayList<String>();
	private List<Map<String, Object>> modules = new ArrayList<Map<String, Object>>();

	public RoleRet() {
	}

	public List<Map<String, Object>> getRoleInfos() {
		return roleInfos;
	}

	public void setRoleInfos(List<Map<String, Object>> roleInfos) {
		this.roleInfos = roleInfos;
	}

	public List<Map<String, Object>> getPageRoles() {
		return pageRoles;
	}

	public void setPageRoles(List<Map<String, Object>> pageRoles) {
		this.pageRoles = pageRoles;
	}

	public List<String> getButtons() {
		return buttons;
	}

	public void setButtons(List<String> buttons) {
		this.buttons = buttons;
	}

	public List<Map<String, Object>> getModules() {
		return modules;
	}

	public void setModules(List<Map<String, Object>> modules) {
		this.modules = modules;
	}

}
