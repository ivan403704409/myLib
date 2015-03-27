/**
 * 常用函数
 */

//滑动方向
function getSwipeDirection(x1, x2, y1, y2)
{
	return Math.abs(x2 - x1) > Math.abs(y2 - y1) ? (x2 > x1 ? 'right' : 'left') : (y2 > y1 ? 'down' : 'up');
}

//opts参数覆盖defaults，如果key在defaults里没，但在opts里有，key是不会被加到defaults里的
function extend(defaults, opts)
{
	for (var key in defaults)
	{
		if (opts[key] !== undefined) defaults[key] = opts[key];
	}
}

