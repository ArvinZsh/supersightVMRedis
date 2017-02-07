/**
 * @Title: OrgInfo.java
 * @Package: com.zsh.bean
 * @Description: TODO
 * @author zsh
 * @data 2017年2月5日上午10:12:39
 * @version V1.0
 */
package com.zsh.bean;

/**
 * @ClassName: OrgInfo
 * @Description: TODO
 * @author: zsh
 * @data 2017年2月5日上午10:12:39
 */
public class OrgInfo {
	private String itemId;
	private String orgName;

	public OrgInfo() {
	}

	public OrgInfo(String itemId, String orgName) {
		this.itemId = itemId;
		this.orgName = orgName;
	}

	public String getItemId() {
		return itemId;
	}

	public void setItemId(String itemId) {
		this.itemId = itemId;
	}

	public String getOrgName() {
		return orgName;
	}

	public void setOrgName(String orgName) {
		this.orgName = orgName;
	}

	@Override
	public String toString() {
		return "OrgInfo [itemId=" + itemId + ", orgName=" + orgName + "]";
	}
}
