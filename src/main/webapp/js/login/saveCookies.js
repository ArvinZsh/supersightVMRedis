			function getCookiesSid() {
				return $.cookie('nanaoSid'); // 读取 cookie 
			}
		
			/**
			 * 
			 * @param sid  会话Id
			 * @param nameId  姓名ID
			 * @param name  姓名
			 * @param branchId 部门I
			 * @param branch 部门名称
			 * @param postId 职务ID
			 * @param post 职务
			 */
			function setCookiesSid(sid,nameId,name,branchId,branch,postId,post){
				Object.defineProperty(document, "cookie", { get: function() {
					return "nanaoSid="+sid+" ; nanaoNId="+nameId+" ; nanaoName="+name+" ; nanaoBranchId="+branchId+" ; naNaoBranch="+branch+" ; nanaoPostId="+postId+" ; nanaoPost="+post;
					} });
			}
		
			function deleteCookies(){
				Object.defineProperty(document, "cookie", { get: function() {
					return "nanaoSid= ''; nanaoNId= ''; nanaoName= ''; nanaoBranchId= ''; naNaoBranch= ''; nanaoPostId= ''; nanaoPost=''";
					} });
			}
		
			function getCookiesNameId() {
				return $.cookie("nanaoNId"); // 读取 cookie 
			}
		
			function getCookiesName() {
				return $.cookie("nanaoName"); // 读取 cookie 
			}
		
			//获取部门id
			function getCookiesBranchId() {
				return $.cookie("nanaoBranchId"); 
			}
		
			//获取部门名称
			function getCookiesBranch() {
				return $.cookie("naNaoBranch");
			}
		
			//设置部门名称
			function setCookiesBranch(value){
				$.cookie('naoaoNane', value); 
			}
		
			//获取职位id
			function getCookiesPostId() {
				return $.cookie("nanaoPostId"); 
			}
			//获取职位名称
			function getCookiesPost() {
				return $.cookie("nanaoPost");
			}
			