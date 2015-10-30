/*
 CSS Browser Selector 0.81
 Originally written by Rafael Lima (http://rafael.adm.br)
 http://rafael.adm.br/css_browser_selector
 License: http://creativecommons.org/licenses/by/2.5/

 Co-maintained by:
 https://github.com/ridjohansen/css_browser_selector
 https://github.com/delka/css_browser_selector
 https://github.com/verbatim/css_browser_selector
 */
(function() {
var uaInfo = {
	ua : '',
	is : function (t) {
		return RegExp(t, "i").test(uaInfo.ua);
	},
	version : function (p, n) {
		n = n.replace(".", "_");
		var i = n.indexOf('_'),
			ver = "";
		while (i > 0) {
			ver += " " + p + n.substring(0, i);
			i = n.indexOf('_', i + 1);
		}
		ver += " " + p + n;
		return ver;
	},
	getBrowser : function() {
		var g = 'gecko',
			w = 'webkit',
			c = 'chrome',
			f = 'firefox',
			s = 'safari',
			o = 'opera',

			ua = uaInfo.ua,
			is = uaInfo.is;

		return [
			(!(/opera|webtv/i.test(ua)) && /msie\s(\d+)/.test(ua)) ? ('ie ie' + (/trident\/4\.0/.test(ua) ? '8' : RegExp.$1))
				:is('edge\/') ? 'edge ie' + (/edge\/(\d+)\.(\d+)/.test(ua) ? RegExp.$1 + ' ie' + RegExp.$1 + '_' + RegExp.$2 : '') // IE Edge
				:is('trident\/') ? 'ie ie'+ (/trident\/.+rv:(\d+)/i.test(ua) ? RegExp.$1 : '') //ie11+
				:is('firefox/') ? g + " " + f + (/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua) ? ' ' + f + RegExp.$2 + ' ' + f + RegExp.$2 + "_" + RegExp.$4 : '')
				:is('gecko/') ? g
				:is('opera') ? o + (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua) ? ' ' + o + RegExp.$2 + ' ' + o + RegExp.$2 + "_" + RegExp.$4 : (/opera(\s|\/)(\d+)\.(\d+)/.test(ua) ? ' ' + o + RegExp.$2 + " " + o + RegExp.$2 + "_" + RegExp.$3 : ''))
				:is('konqueror') ? 'konqueror'
				:is('chrome') ? w + ' ' + c + (/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua) ? ' ' + c + RegExp.$2 + ((RegExp.$4 > 0) ? ' ' + c + RegExp.$2 + "_" + RegExp.$4 : '') : '')
				:is('iron') ? w + ' iron'
				:is('applewebkit/') ? (w + ' ' + s + (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua) ? ' ' + s + RegExp.$2 + " " + s + RegExp.$2 + RegExp.$3.replace('.', '_') : (/ Safari\/(\d+)/i.test(ua) ? ((RegExp.$1 == "419" || RegExp.$1 == "417" || RegExp.$1 == "416" || RegExp.$1 == "412") ? ' ' + s + '2_0' : RegExp.$1 == "312" ? ' ' + s + '1_3' : RegExp.$1 == "125" ? ' ' + s + '1_2' : RegExp.$1 == "85" ? ' ' + s + '1_0' : '') : ''))) //applewebkit
				:is('mozilla/') ? g : ''
		];
	},
	getPlatform : function() {
		var wp = 'winphone',
			a  = 'android',
			bb = 'blackberry',
			dv = 'device_',

			ua = uaInfo.ua,
			version = uaInfo.version,
			is = uaInfo.is;

		return [
			is('j2me') ? 'j2me'
			:is('windows phone') ? (wp + (/Windows Phone (\d+)(\.(\d+))+/i.test(ua) ? " " + wp + RegExp.$1 + " " + wp + RegExp.$1 + RegExp.$2.replace('.', '_') : (/Windows Phone OS (\d+)(\.(\d+))+/i.test(ua) ? " " + wp + RegExp.$1 + " " + wp + RegExp.$1 + RegExp.$2.replace('.', '_') : ''))) // Windows Phone
			:is('blackberry') ? (bb + (/Version\/(\d+)(\.(\d+)+)/i.test(ua) ? " " + bb + RegExp.$1 + " " + bb + RegExp.$1 + RegExp.$2.replace('.', '_') : (/Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(ua) ? ' ' + bb + RegExp.$2 + (RegExp.$3 ? ' ' + bb + RegExp.$2 + RegExp.$3 : '') : ''))) // blackberry
			:is('android') ? (a + (/Version\/(\d+)(\.(\d+))+/i.test(ua) ? " " + a + RegExp.$1 + " " + a + RegExp.$1 + RegExp.$2.replace('.', '_') : '') + (/Android (.+); (.+) Build/i.test(ua) ? ' ' + dv + ((RegExp.$2).replace(/ /g, "_")).replace(/-/g, "_") : '')) //android
			:is('ipad|ipod|iphone') ? (
			(/CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(ua) ? 'ios' + version('ios', RegExp.$2) : '') + ' ' + (/(ip(ad|od|hone))/gi.test(ua) ? RegExp.$1 : "")) //'iphone'
			//:is('ipod')?'ipod'
			//:is('ipad')?'ipad'
			:is('playbook') ? 'playbook'
			:is('kindle|silk') ? 'kindle'
			:is('playbook') ? 'playbook'
			:is('mac') ? 'mac' + (/mac os x ((\d+)[.|_](\d+))/.test(ua) ? (' mac' + (RegExp.$2) + ' mac' + (RegExp.$1).replace('.', "_")) : '')
			:is('win') ? 'win' + (is('windows nt 10.0') ? ' win10'
			:is('windows nt 6.3') ? ' win8_1'
			:is('windows nt 6.2') ? ' win8'
			:is('windows nt 6.1') ? ' win7'
			:is('windows nt 6.0') ? ' vista'
			:is('windows nt 5.2') || is('windows nt 5.1') ? ' win_xp'
			:is('windows nt 5.0') ? ' win_2k'
			:is('windows nt 4.0') || is('WinNT4.0') ? ' win_nt' : '')
			:is('freebsd') ? 'freebsd'
			:is('x11|linux') ? 'linux' : ''
		];
	},
	getMobile : function() {
		var is = uaInfo.is;
		return [
			is("android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|winphone|playbook|kindle|silk") ? 'mobile' : ''
		];
	},
	getIpadApp : function() {
		var is = uaInfo.is;
		return [
			(is('ipad|iphone|ipod') && !is('safari')) ? 'ipad_app' : ''
		];
	},
	getLang : function() {
		var ua = uaInfo.ua;

		return [
			/[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(ua) ? ('lang_' + RegExp.$2).replace("-", "_") + (RegExp.$3 != '' ? (' ' + 'lang_' + RegExp.$1).replace("-", "_") : '') : ''
		];
	}
}

if (typeof html =='undefined') { 
	html=document.documentElement;
}

var screenInfo = {
	width : (window.outerWidth || html.clientWidth) - 15,
	height : window.outerHeight || html.clientHeight,
	screens : [0, 768, 980, 1200],
	
	screenSize : function () {
		screenInfo.width = (window.outerWidth || html.clientWidth) - 15;
		screenInfo.height = window.outerHeight || html.clientHeight;
			
		var screens = screenInfo.screens,
			i = screens.length,
			arr = [],
			maxw, 
			minw;
		
		while(i--) {
			if (screenInfo.width >= screens[i]) {
				if(i) {
					arr.push("minw_" + screens[(i)]);
				}
				if (i <= 2) {
					arr.push("maxw_" + (screens[(i) + 1] - 1));
				}
				break;
			}
		}
		return arr;
	},
	getOrientation : function() {
		return screenInfo.width < screenInfo.height ? ["orientation_portrait"] : ["orientation_landscape"];
	},
	getInfo : function() {
		var arr = [];
		arr = arr.concat(screenInfo.screenSize());
		arr = arr.concat(screenInfo.getOrientation());
		return  arr;
	},
	getPixelRatio : function() {
		var arr = [],
			pixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;

		if(pixelRatio > 1) {
			arr.push('retina_' + parseInt(pixelRatio) + 'x');
			arr.push('hidpi');
		} else {
			arr.push('no-hidpi');
		}
		return arr;
	}
}

var dataUriInfo = {
	data : new Image(),
	div : document.createElement("div"),
	isIeLessThan9 : false,
	getImg : function() {

		dataUriInfo.data.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
		dataUriInfo.div.innerHTML = "<!--[if lt IE 9]><i></i><![endif]-->";
		dataUriInfo.isIeLessThan9 = dataUriInfo.div.getElementsByTagName("i").length == 1;

		return dataUriInfo.data;
	},
	checkSupport : function() {
		if(dataUriInfo.data.width != 1 || dataUriInfo.data.height != 1 || dataUriInfo.isIeLessThan9) {
			return ["no-datauri"];
		}
		else {
			return ["datauri"];
		}
	}

}

function css_browser_selector(u, ns) {
	var html = document.documentElement,
		b = []
		ns = ns ? ns : "";

	/* ua */
	uaInfo.ua = u.toLowerCase();
	b = b.concat(uaInfo.getBrowser());
	b = b.concat(uaInfo.getPlatform());
	b = b.concat(uaInfo.getMobile());
	b = b.concat(uaInfo.getIpadApp());
	b = b.concat(uaInfo.getLang());


	/* js */
	b = b.concat(['js']);

	/* pixel ratio */
	b = b.concat(screenInfo.getPixelRatio());

	/* screen */
	b = b.concat(screenInfo.getInfo());

	var updateScreen = function() {
		html.className = html.className.replace(/ ?orientation_\w+/g, "").replace(/ [min|max|cl]+[w|h]_\d+/g, "");
		html.className = html.className + ' ' + screenInfo.getInfo().join(' ');
	}

	if (window.addEventListener) {
		window.addEventListener('resize', updateScreen);
		window.addEventListener('orientationchange', updateScreen);
	} else if (window.attachEvent) {
		window.attachEvent('onresize', updateScreen);
	}

	/* dataURI */
	var data = dataUriInfo.getImg();
	data.onload = data.onerror = function(){
		html.className += ' ' + dataUriInfo.checkSupport().join(' ');
	}


	/* save & add existing html classes */
	var classes = html.className;
	var classesArray = classes.split(/ /);

	/* merge existing classes on html tag */
	b = b.concat(classesArray);

	/* removendo itens invalidos do array */
	/* add filter function polyfill for IE8 */
	if (!Array.prototype.filter) {
		Array.prototype.filter = function(fun/*, thisArg*/) {
			'use strict';

			if (this === void 0 || this === null) {
				throw new TypeError();
			}

			var t = Object(this);
			var len = t.length >>> 0;
			if (typeof fun !== 'function') {
				throw new TypeError();
			}

			var res = [];
			var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
			for (var i = 0; i < len; i++) {
				if (i in t) {
					var val = t[i];

					// NOTE: Technically this should Object.defineProperty at
					//			 the next index, as push can be affected by
					//			 properties on Object.prototype and Array.prototype.
					//			 But that method's new, and collisions should be
					//			 rare, so use the more-compatible alternative.
					if (fun.call(thisArg, val, i, t)) {
						res.push(val);
					}
				}
			}

			return res;
		};
	}

	b = b.filter(function(e){
		/* if no-js class exists, remove it */
		if (e === 'no-js') {
			return false;
        }
		return e;
	});

	/* prefixo do namespace */
	b[0] = ns ? ns + b[0] : b[0];
	html.className = b.join(' ' + ns);
	return html.className;
}

// Add css_browser_selector as a global object.
window.css_browser_selector = css_browser_selector;
})();

// define css_browser_selector_ns before loading this script to assign a namespace
var css_browser_selector_ns = css_browser_selector_ns || "";

// init
css_browser_selector(navigator.userAgent, css_browser_selector_ns);
