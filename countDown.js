//倒计时
function countDown(iTime){
	var res = '';
	var oneDay = 3600*24,
		oneHour = 3600,
		oneMin = 60;

	var iDay = parseInt(iTime/oneDay);
	iTime %= oneDay;
	
	var iHour = parseInt(iTime/oneHour);
	iTime %= oneHour;

	var iMin = parseInt(iTime/oneMin);

	var iSec = iTime%oneMin;

	res = iDay +'天'+ iHour +'小时'+ iMin +'分'+ iSec +'秒';
	if( iDay<=0 )res = iHour +'小时'+ iMin +'分'+ iSec +'秒';
	if( iDay<=0 && iHour<=0 )res = iMin +'分'+ iSec +'秒';
	if( iDay<=0 && iHour<=0 && iMin<=0 )res = iSec +'秒';

	//补零
	res = res.replace(/(\d+)(\D+)/g, function($0, $1){
		return $1.length===1 ? ('0'+$0) : $0; 
	});
	return res;
}

var time = 123456;

var timer = setInterval(function () {
	if(time<=0){
		clearInterval(timer);
	}
	console.log(countDown(time));
	time--;
}, 1000);


/**
 * 微信，微博，发布文章之类的距离现在的时间
 * @param  {[string]} iTime ['2015-4-24 13:45:10']
 * @return {[string]}       [距离现在的时间]
 */
function getDis(iTime){
  var iNow = +new Date;
  var iDis = iNow - new Date(iTime);
  if( iDis < 0 )return '';

  var res = 0;
  if( (res = parseInt( iDis/3.1536e10 )) > 0 )return res+'年前';  
  if( (res = parseInt( iDis/2.592e9 )) > 0 )return res+'个月前';
  if( (res = parseInt( iDis/8.64e7 )) > 0 )return res+'天前';  
  if( (res = parseInt( iDis/3.6e6 )) > 0 )return res+'小时前';
  if( (res = parseInt( iDis/6e4 )) > 0 )return res+'分钟前'; 
  return '刚刚'; 

}
console.log( getDis('2012-3-23 10:10:10') );
console.log( getDis('2014-8-23 10:10:10') );
console.log( getDis('2015-4-24 10:10:10') );
console.log( getDis('2015-4-24 13:30:10') );
console.log( getDis('2015-4-24 13:39:10') );
console.log( getDis('2015-4-24 13:45:10') );
