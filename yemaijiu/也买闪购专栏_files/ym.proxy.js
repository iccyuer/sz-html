$.extend(String.prototype, {
	'escapeReg': function() {
		return this.replace(new RegExp("([.*+?^=!:\x24{}()|[\\]\/\\\\])", "g"), '\\\x241');
	},
	'getQueryValue': function(name) {
		var reg = new RegExp("(^|&|\\?|#)" + name.escapeReg() + "=([^&]*)(&|\x24)", "");
		var match = this.match(reg);
		return (match) ? match[2] : '';
	},
	'isIP': function() {
		var re = /^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/;
		return re.test(this);
	}
});
YMProxy = {};
YMProxy.pagelink = document.location.href;
YMProxy.setDomain = function() {
	var d = document.domain;
	if (d.indexOf('.')<0 || d.isIP()) return;
	var k = d.split('.'), d1=k[k.length-1], d2=k[k.length-2], d3=k[k.length-3];
	document.domain = (d2=='com' || d2=='net')?(d3+'.'+d2+'.'+d1):(d2+'.'+d1);
};
YMProxy.init = function() {
	var proxyType = this.pagelink.getQueryValue('type') || 'data';
	switch(proxyType) {
		case 'data':
			if (this.pagelink.getQueryValue('crossdomain')) YMProxy.setDomain();
			if (parent.YM && parent.YM.dataproxy) parent.YM.dataproxy.setJquery(jQuery);
			break;
	}
};
YMProxy.init();