package com.zsh.service;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.alibaba.druid.sql.ast.statement.SQLWithSubqueryClause.Entry;
import com.alibaba.fastjson.JSONObject;
import com.zsh.controller.role.RoleCmd;
import com.zsh.controller.role.RoleRet;


@Service
public class RoleService extends AbstractBaseService implements IRoleService {
	
	@Override
	public Object listNoRoleModule(RoleCmd cmd) {
		Map<String, String> map = new HashMap<String, String>();
		map.put("roleId", cmd.getRoleId());
		List<Map<String, Object>> list = dao.getList("role.listNoRoleModule", map);

		List<String> pageNames = new ArrayList<String>();
		Map<String, List<String>> tempMap = new HashMap<String, List<String>>();
		for(Map<String, Object> obj : list) {
			String objModule = (String) obj.get("module");
			List<String> pageNameArr = tempMap.get(objModule);
			
            String objPageNames = (String) obj.get("pageName");
            if(null == pageNameArr) {
                pageNames.clear();
                pageNames.add(objPageNames);
                tempMap.put(objModule, pageNames);
            } else {
            	pageNameArr.add(objPageNames);
            }
		}
		
		RoleRet result = new RoleRet();
		for(Map.Entry<String, List<String>> module : tempMap.entrySet()) {
			Map<String, Object> moduleTempMap = new HashMap<String, Object>();
			moduleTempMap.put("module", module.getValue());
			moduleTempMap.put("pageNames", module.getValue());
			result.getModules().add(moduleTempMap);
		}
		result.setSuccessFlag(true);
		
		return JSONObject.toJSON(result);
	}

	@Override
	public Object getRoleBtn(RoleCmd cmd) {
		
		
		
		return null;
	}
	
}
