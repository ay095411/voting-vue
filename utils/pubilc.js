const publicMethod = {
	
	//把时间日期转成时间戳
	getTimestamp(time) {
		//兼容ios android
		let date = time.replace(/-/g, "/");
		return (new Date(date)).getTime() / 1000
	},
	//时间戳转换日期
	formatDate(value) {
		let date = new Date(value);
		let y = date.getFullYear();
		let MM = date.getMonth() + 1;
		MM = MM < 10 ? ('0' + MM) : MM;
		let d = date.getDate();
		d = d < 10 ? ('0' + d) : d;
		let h = date.getHours();
		h = h < 10 ? ('0' + h) : h;
		let m = date.getMinutes();
		m = m < 10 ? ('0' + m) : m;
		let s = date.getSeconds();
		s = s < 10 ? ('0' + s) : s;
		return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
	},
	//计算相差时间
	computedResidualTime(game) {
		//这里需要后台返回当前时间，避免用户修改时间
		var timestamp = Date.parse(new Date()) / 1000;
		//获取距离1970年1月1日00:00:00的毫秒数，并转换成秒数，通过parseInt转成整秒数；
		let residualTime = game - timestamp;
		//这是剩余的所有秒数（规定时间过期时间－（本机距离1970年1月1日00:00:00的秒数－后台的创建时间））
		let day = parseInt(residualTime / (24 * 3600)); //剩余天数
		let hour = parseInt((residualTime) % (24 * 3600) / 3600); //剩余小时
		let minute = parseInt((residualTime) % 3600 / 60); //剩余分钟
		let second = parseInt((residualTime) % 60); //剩余秒数
		let timer = `${day}天${hour}小时${minute}分${second}秒`;
		if(timer.indexOf('-') != -1) {
			timer = '活动结束';
			return timer;
		}
		return timer;
	},
	// 手机号码验证
	phone(phone) {
		if (/^[1][2,3,4,5,6,7,8,9][0-9]{9}$/.test(phone)) {
			return true
		}

		return false
	},
	// 截取url里面的属性值
	getParam() {
		var qs = location.search.substr(1),
			args = {},
			items = qs.length ? qs.split("&") : [],
			item = null,
			len = items.length;
		for (var i = 0; i < len; i++) {
			item = items[i].split("=");
			var name = decodeURIComponent(item[0]),
				value = decodeURIComponent(item[1]);
			if (name) {
				args[name] = value;
			}
		}
		return args;
	},

}
export {
	publicMethod
}
