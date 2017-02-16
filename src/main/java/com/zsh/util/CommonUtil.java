package com.zsh.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.zsh.controller.BaseRet;

public class CommonUtil {
	
	public static boolean isStrVoidValue(Object obj) {
		if(obj == null) {
			return true;
		}
		String str = (String)obj;
		if(str.length() <= 0) {
			return true;
		}
		return false;
	}

	public static BaseRet initErrorRet(String errorMsg) {
		BaseRet ret = new BaseRet();
		ret.setSuccessFlag(false);
		ret.setErrorMsg(errorMsg);
		return ret;
	}
	
	public static void initSuccessRet(BaseRet instance) {
		instance.setSuccessFlag(true);
	}
	
	public static boolean isNumeric(String str) {
		Pattern pattern = Pattern.compile("-?[0-9]+.*[0-9]*");
		Matcher isNUm = pattern.matcher(str);
		if(!isNUm.matches()) {
			return false;
		}
		return true;
	}
}
