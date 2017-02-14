package com.zsh.util;

import com.zsh.controller.BaseRet;

public class CommonUtil {
	
	public static boolean isStrVoidValue(String str) {
		if(str == null) {
			return false;
		}
		if(str.length() <= 0) {
			return false;
		}
		return true;
	}

	public static BaseRet initErrorRet(String errorMsg) {
		BaseRet ret = ApplicationCtxUtil.getBean(BaseRet.class);
		ret.setSuccessFlag(false);
		ret.setErrorMsg(errorMsg);
		return ret;
	}
	
	public static BaseRet initSuccessRet() {
		BaseRet ret = ApplicationCtxUtil.getBean(BaseRet.class);
		ret.setSuccessFlag(true);
		return ret;
	}
}
