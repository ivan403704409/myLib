//类型判断
function isType (type) {
	return function (obj){
		return Object.prototype.toString.call(obj) == '[object '+ type +']';
	}
}
var isNull = isType('Null');
var isUndefined = isType('Undefined');
var isBoolean = isType('Boolean');
var isNumber = isType('Number');
var isString = isType('String');
var isArray = Array.isArray || isType('Array');
var isObject = isType('Object');
var isFunction = isType('Function');
var isNaN = Number.isNaN || function(obj){
	return typeof obj==='number'&& obj!==obj ? true : false;
}

