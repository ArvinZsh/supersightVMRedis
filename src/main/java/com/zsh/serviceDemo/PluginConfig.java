/**
 * 
 */
package com.zsh.serviceDemo;

/**
 * 读取配置参数是否使用缓存
 * */

import java.util.List;

/**
 * @author Administrator
 *
 */
public class PluginConfig {

	private Boolean isUseCache;

	public PluginConfig(Boolean isUseCache) {
		this.isUseCache = isUseCache;
	}

	public Boolean getIsUseCache() {
		return isUseCache;
	}

	public void setIsUseCache(Boolean isUseCache) {
		this.isUseCache = isUseCache;
	}

}
