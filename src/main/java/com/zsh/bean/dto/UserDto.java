package com.zsh.bean.dto;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;

@Component
public class UserDto {
	private String userId;
	private String userName;
	private String orgId;
	private String orgName;
	private String dutyId;
	private String dutyName;
	private String mobile;
	private boolean serviceFlag;
	private boolean loginableFlag;
	private String loginUid;
	private String loginPwd;
	private Date hireTime;
	private Date fireTime;
	private String gridId;
	private String roleId;
	private String roleName;

	public UserDto() {
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getOrgId() {
		return orgId;
	}

	public void setOrgId(String orgId) {
		this.orgId = orgId;
	}

	public String getOrgName() {
		return orgName;
	}

	public void setOrgName(String orgName) {
		this.orgName = orgName;
	}

	public String getDutyId() {
		return dutyId;
	}

	public void setDutyId(String dutyId) {
		this.dutyId = dutyId;
	}

	public String getDutyName() {
		return dutyName;
	}

	public void setDutyName(String dutyName) {
		this.dutyName = dutyName;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public boolean isServiceFlag() {
		return serviceFlag;
	}

	public void setServiceFlag(boolean serviceFlag) {
		this.serviceFlag = serviceFlag;
	}

	public boolean isLoginableFlag() {
		return loginableFlag;
	}

	public void setLoginableFlag(boolean loginableFlag) {
		this.loginableFlag = loginableFlag;
	}

	public String getLoginUid() {
		return loginUid;
	}

	public void setLoginUid(String loginUid) {
		this.loginUid = loginUid;
	}

	public String getLoginPwd() {
		return loginPwd;
	}

	public void setLoginPwd(String loginPwd) {
		this.loginPwd = loginPwd;
	}

	public Date getHireTime() {
		return hireTime;
	}

	public void setHireTime(Date hireTime) {
		this.hireTime = hireTime;
	}

	public Date getFireTime() {
		return fireTime;
	}

	public void setFireTime(Date fireTime) {
		this.fireTime = fireTime;
	}

	public String getGridId() {
		return gridId;
	}

	public void setGridId(String gridId) {
		this.gridId = gridId;
	}

	public String getRoleId() {
		return roleId;
	}

	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
}
