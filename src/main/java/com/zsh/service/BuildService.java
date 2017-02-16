package com.zsh.service;

import java.util.Map;

import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.zsh.bean.Page;
import com.zsh.util.CommonUtil;

@Service
public class BuildService extends AbstractBaseService implements IBuildService {

	@Override
	public Object list(Map<String, Object> params) {
		
		// 排序字段
		String orderKey = params.get("orderForHarmfuleCode") + "";
		if(!CommonUtil.isStrVoidValue(orderKey)) {
			params.put("orderName", "find_in_set(harmfulCode,(select group_concat(CodeName) from CommonCode where TypeId = 'HarmfulCode')),DiscoverTime");
		} else {
			params.put("orderName", "DiscoverTime");
		}
		
		Page result = dao.getPage("build.list", "build.count", params);
		
		return JSONObject.toJSON(result);
	}
}
