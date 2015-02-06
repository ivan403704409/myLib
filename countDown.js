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

