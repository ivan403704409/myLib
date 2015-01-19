;(function (window) {
	
	//一些规则
	var regNumber = /^\d+$/,
		regTel    = /^1[3|5|7|8|][0-9]{9}$/,
		regEmail  = /^([a-z0-9A-Z]+[-|\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/,
		regPrice  = /^(0|([1-9]\d*))(\.\d+)*$/;

	/**
	 * 字符串格式验证功能集合
	 * @type {Object}
	 */
	var oVerify = {

		//空
		isEmpty: function (str) {
			return '' === str;
		},

		//数字
		isNumber: function (str) {
			return regNumber.test(str);
		},

		//电话
		//支持13, 15, 17, 18开头的11位数字
		isTel: function (str) {
			return regTel.test(str);
		},

		//邮箱
		isEmail: function (str) {
			return regEmail.test(str);
		},

		//价格
		//0,  0.12,   10,  10.12
		isPrice: function (str) {
			return regPrice.test(str);
		}

		//补充中...
	};

	window.oVerify = oVerify;

})(window);