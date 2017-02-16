/**
 * 
 */
package com.zsh.bean;

import java.util.List;
import java.util.Map;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

/**
 * @author Administrator
 *
 */
public class Page {
	/** 当前页码 */
	private int pageNow;
	/** 一页显示数量 */
	private int pageSize;
	/** 总数 */
	private int totalCount;
	/** 总页数 */
	private int totalPage;
	/** 第一页 */
	private int firstPage;
	/** 上一页 */
	private int prePage;
	/** 下一页 */
	private int nextPage;
	/** 最后一页 */
	private int lastPage;
	/** 是否为第一页 */
	private boolean firstFlag;
	/** 是否为最后一页 */
	private boolean lastFlag;
	/** 查询结果 */
	private List<Map<String, Object>> list;

	public Page() {
	}

	public int getPageNow() {
		return pageNow;
	}

	public void setPageNow(int pageNow) {
		this.pageNow = pageNow;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	public int getTotalPage() {
		return totalPage;
	}

	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}

	public int getFirstPage() {
		return firstPage;
	}

	public void setFirstPage(int firstPage) {
		this.firstPage = firstPage;
	}

	public int getPrePage() {
		return prePage;
	}

	public void setPrePage(int prePage) {
		this.prePage = prePage;
	}

	public int getNextPage() {
		return nextPage;
	}

	public void setNextPage(int nextPage) {
		this.nextPage = nextPage;
	}

	public int getLastPage() {
		return lastPage;
	}

	public void setLastPage(int lastPage) {
		this.lastPage = lastPage;
	}

	public boolean isFirstFlag() {
		return firstFlag;
	}

	public void setFirstFlag(boolean firstFlag) {
		this.firstFlag = firstFlag;
	}

	public boolean isLastFlag() {
		return lastFlag;
	}

	public void setLastFlag(boolean lastFlag) {
		this.lastFlag = lastFlag;
	}

	public List<Map<String, Object>> getList() {
		return list;
	}

	public void setList(List<Map<String, Object>> list) {
		this.list = list;
	}

}
