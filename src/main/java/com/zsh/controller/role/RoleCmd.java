package com.zsh.controller.role;

import com.zsh.controller.BaseCmd;

public class RoleCmd extends BaseCmd {
	private String roleId;
	private String pageLink;

	public RoleCmd() {
	}

	public String getRoleId() {
		return roleId;
	}

	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}

	public String getPageLink() {
		return pageLink;
	}

	public void setPageLink(String pageLink) {
		this.pageLink = pageLink;
	}

}
