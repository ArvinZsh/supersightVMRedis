/**
 * @Title: UserInfo.java
 * @Package: com.zsh.bean
 * @Description: TODO
 * @author zsh
 * @data 2017年2月5日上午10:12:51
 * @version V1.0
 */
package com.zsh.bean;

/**
 * @ClassName: UserInfo
 * @Description: TODO
 * @author: zsh
 * @data 2017年2月5日上午10:12:51
 */
public class UserInfo {
	private String itemId;
	private String userName;

	public String getItemId() {
		return itemId;
	}

	public void setItemId(String itemId) {
		this.itemId = itemId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	@Override
	public String toString() {
		return "UserInfo [itemId=" + itemId + ", userName=" + userName + "]";
	}

}
