;(function (window) {
	
	//一些规则
	var oReg = {
		Number : /^\d+$/,
		Tel    : /^1[3|5|7|8|][0-9]{9}$/,
		Email  : /^([a-z0-9A-Z]+[-|\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/,
		Price  : /^(0|([1-9]\d*))(\.\d+)*$/
	};

	/**
	 * 字符串格式验证功能集合
	 * @type {Object}
	 */
	var oVerify = {	},
		aMethod = ['Number', 'Tel', 'Email', 'Price'];
	for(var i=0, len=aMethod.length; i<len; i++){
		var method = aMethod[i];
		oVerify['is' + method] = function (str) {
			return oReg[method].test(str);
		}
	}

	oVerify.isEmpty = function (str) {	return '' === str;	};	//空

	window.oVerify = oVerify;

})(window);