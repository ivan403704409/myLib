var Paginator = (function () {
	
	function Paginator(argument) {
		
	}

	Paginator.prototype = {

		getHtml: function (total, iPage) {
			var self = this;
			if( (self.total = total) < 1 )return '';
			self.iPage = iPage || 1;

			return self._getHead() + self._getPrev() + self._getCenter() + self._getNext() + self._getLast();
		},

		//首页
		_getHead: function () {
			var res = '', self = this;
			res = self.iPage > 1 ? '首页 ' : '';
			return res;
		},


		//上一页
		_getPrev: function () {
			var res = '', self = this;
			res = self.iPage > 2 ? '上一页 ' : '';
			return res;			
		},

		//中间
		_getCenter: function () {
			var res = '', 
				self = this,
				total = self.total,
				iPage = self.iPage;
			//少于10页
			var len = total;
			if( len <= 10 ){
				for( var i=1; i<=len; i++ ){
					res += ' ' + i;
				}
			}else{
				len = 10;
				if( iPage <=5 ){
					for( var i=1; i<=len; i++ ){	//前10页
						res += ' ' + i;
					}
				}else if( iPage+4 >= total ){	//最后10页
					for( var i=total-len; i<=total; i++ ){
						res += ' ' + i;
					}	
				}else{	//中间的页面
					for( var i=iPage-len/2 + 1; i<iPage; i++ ){
						res += ' ' + i;
					}
					res += ' ' + iPage;
					for( var j=iPage + 1; j<iPage + len/2 + 1; j++ ){
						res += ' ' + j;
					}
				}

			}						

			return res;			
		},

		//下一页
		_getNext: function () {
			var res = '', self = this;
			res = self.iPage <= self.total-2 ? ' 下一页' : '';
			return res;			
		},

		//最后一页
		_getLast: function () {
			var res = '', self = this;
			res = self.iPage <= self.total-1 ? ' 尾页' : '';
			return res;			
		},

		constructor: Paginator

	};

	return Paginator;

})();