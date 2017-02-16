/**
 * @Title: AbstractBaseService.java
 * @Package: com.zsh.service1
 * @Description: TODO
 * @author zsh
 * @data 2017年2月5日上午10:30:36
 * @version V1.0
 */
package com.zsh.dao;

import java.lang.reflect.Proxy;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.math.NumberUtils;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.zsh.bean.Page;
import com.zsh.cache.CacheInvocationHandler;
import com.zsh.util.ApplicationCtxUtil;
import com.zsh.util.CommonUtil;

/**
 * @ClassName: AbstractBaseService
 * @Description: TODO
 * @author: zsh
 * @data 2017年2月5日上午10:30:36
 */
@Repository
public abstract class AbstractBaseDao {

	protected SqlSessionTemplate sqlSessionTemplate;

	public SqlSessionTemplate getSqlSessionTemplate() {
		return sqlSessionTemplate;
	}

	protected void setSqlSessionTemplate(SqlSessionTemplate sqlSessionTemplate) {
		this.sqlSessionTemplate = sqlSessionTemplate;
	}

	public static Object getProxy(Class<?> intfCls, Object mapperInstance) {
		CacheInvocationHandler handler = (CacheInvocationHandler) ApplicationCtxUtil
				.getBean(CacheInvocationHandler.class);
		handler.setInstance(mapperInstance);
		return Proxy.newProxyInstance(intfCls.getClassLoader(), new Class[] { intfCls }, handler);
	}
	
	/**
	 * 取得分页
	 * @param queryStr
	 * @param countStr
	 * @param params
	 * @return
	 */
	public Page getPage(String queryStr, String countStr, Map<String, Object> params) {
		Page p = new Page();
		
		if(params.containsKey("pagesize")) {
			// 查询总数
			int totalCount = 0;
			totalCount = this.getSize(countStr, params);
			p.setTotalCount(totalCount);
			
			if(totalCount > 0) {
				// 一页多少行
				Object pageRowCountS = params.get("pagesize") != null ? params.get("pagesize") : null;
				int pageRowCount = 0;
				if (null != pageRowCountS && CommonUtil.isNumeric(pageRowCountS+"")) {
					pageRowCount = Integer.parseInt(pageRowCountS+"");
					if (pageRowCount > 0) {
						p.setPageSize(pageRowCount);
					}
				}
				
				// 总页数
				int totalPage = totalCount / p.getPageSize() + (totalCount % p.getPageSize() == 0 ? 0 : 1);
				p.setTotalPage(totalPage);
				
				// 当前页
				Object currentPageS = params.get("pageNo") != null ? params.get("pageNo").toString() : null;
				int currentPage = 0;
				if (CommonUtil.isNumeric(currentPageS+"")) {
					currentPage = Integer.parseInt(currentPageS+"");
					if (currentPage > 0 && currentPage <= totalPage) {
						p.setPageNow(currentPage);
					}

					if(currentPage > 1) {
			            p.setPrePage(currentPage - 1);
			            p.setFirstFlag(false);
			        } else { // 若当前页是第一页
			        	p.setPrePage(1);
			            p.setFirstFlag(true);
			        }

			        if(currentPage < totalPage) {
			            p.setNextPage(currentPage - 1);
			            p.setLastFlag(false);
			        } else { // 若当前页是最后一页
			            p.setNextPage(totalPage);
			            p.setLastFlag(true);
			        }
				}
				
				// 排序及分页
				Object orderName = params.get("orderName");
				orderName = orderName == null ? "" : " order by " + orderName;
//				String start = (String) (params.get("start") == null ? "0" : params.get("start"));
//				String length = (String) (params.get("length") == null ? "10" : params.get("length"));
//				String limit = " limit " + start + "," + Integer.parseInt(length);
				
				int start = (currentPage-1)*pageRowCount;
				int end = pageRowCount;
				String limit = "limit " + start + "," + end;
				
				params.put("limit", limit);
				
				// 数据
				List<Map<String, Object>> list = getList(queryStr, params);
				p.setList(list);
			}
		}
		
		return p;
	}

	/**
	 * 查询List
	 * 
	 * @param queryStr
	 * @param params
	 * @return
	 */
	public <T> List<T> getObjList(String queryStr, Object params) {
		return sqlSessionTemplate.selectList(queryStr, params);
	}

	/**
	 * 查询List
	 * 
	 * @param queryStr
	 * @param params
	 * @return
	 */
	public List<Map<String, Object>> getList(String queryStr, Object params) {
		List<Map<String, Object>> list = sqlSessionTemplate.selectList(queryStr, params);
		return list;
	}

	/**
	 * 计算表总数
	 * 
	 * @param countStr
	 * @param params
	 * @return
	 */
	public int getSize(String countStr, Object params) {
		int totalCount = 0;
		List<Map<String, Object>> list = sqlSessionTemplate.selectList(countStr, params);
		if (list.size() > 0) {
			totalCount = Integer.parseInt(list.get(0).get("totalCount").toString());
		}
		return totalCount;
	}

	/**
	 * 插入SQL执行
	 * 
	 * @param insertStr
	 * @param params
	 * @return
	 */
	public int insert(String insertStr, Object params) {
		return sqlSessionTemplate.insert(insertStr, params);
	}

	/**
	 * 更新SQL执行
	 * 
	 * @param updateStr
	 * @param params
	 * @return
	 */
	public int update(String updateStr, Object params) {
		return sqlSessionTemplate.update(updateStr, params);
	}

	/**
	 * 删除SQL执行
	 * 
	 * @param updateStr
	 * @param params
	 * @return
	 */
	public int delete(String updateStr, Object params) {
		return sqlSessionTemplate.delete(updateStr, params);
	}

	/**
	 * 根据条件返回单个对象
	 * 
	 * @param queryStr
	 * @param params
	 * @return
	 */
	public <T> T getOneInfo(String queryStr, Object params) {
		return sqlSessionTemplate.selectOne(queryStr, params);
	}
}
