﻿function RGBToHex(a,b){var c,d,e,f,g,h,i,j;if(!a)return b||""==b?b:"#000000";if(a.indexOf("rgb")>=0){for(c=/^rgb\(([0-9]{0,3})\,\s([0-9]{0,3})\,\s([0-9]{0,3})\)/g,d=a.replace(c,"$1 $2 $3").split(" "),e="#",b=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],f=0;3>f;f++){for(g=null,h=d[f],i=[],j=h;h>15;)g=h%16,h=h/16>>0,i.push(b[g]);i.push(b[h]),15>=j&&i.push(0),e+=i.reverse().join("")}return"#"==e&&(e=""),e}return"#"!=a.charAt(0)||a.length<4?"":a}function checkUrl(a,b){return a?a.length<20||a.indexOf("cnzoom.com")>=0||a.indexOf("127.1")>=0||a.indexOf("127.0.0.1")>=0?!1:!0:b?b:!1}function UrlRegEx(a){var b=/(\w+): \/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i,c=a.match(b);return c}function getImgNaturalDimensions(a,b){var c,d,e;return a.naturalWidth?(c=a.naturalWidth,d=a.naturalHeight):(e=new Image,e.src=a.src,e.onload=function(){b(e.width,e.height)}),[c,d]}function tooltipimgLoaded(){$(".june-tooltipimg").each(function(a,b){var c=getImgNaturalDimensions(b,function(a,b){a&&$(this).next("div.june-tooltipdiv").children("i").html(a+"X"+b)});c[0]&&$(this).next("div.june-tooltipdiv").children("i").html(c[0]+"X"+c[1])})}function quickSort(a){var b,c,d,e,f;if(a.length<=1)return a;for(b=Math.floor(a.length/2),c=a.splice(b,1)[0],d=[],e=[],f=0;f<a.length;f++)a[f]<c?d.push(a[f]):e.push(a[f]);return quickSort(d).concat([c],quickSort(e))}function IsURL(a){var b="^((https|http|ftp|rtsp|mms)?://)?(([0-9a-z_!~*'().&=+$%-]+:)?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}/.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+/.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]/.[a-z]{2,6})(:[0-9]{1,4})?((/?)|(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$",c=new RegExp(b);return c.test(a)?!0:!1}function setPage(a,b,c,d){function f(){e[e.length]=c==g?'<a rel="'+g+'" href="#" class="on">'+g+"</a>":'<a rel="'+g+'" href="#">'+g+"</a>"}var e,g;if(d=d||["上一页","下一页"],a=a,b=b,c=c,e=[],e[e.length]=1==c?'<a href="#" class="prev unclick">'+d[0]+"</a>":'<a href="#" class="prev">'+d[0]+"</a>",10>=b)for(g=1;b>=g;g++)f();else if(4>=c){for(g=1;5>=g;g++)f();e[e.length]='<span class="dian">...</span><a rel="'+b+'" href="#">'+b+"</a>"}else if(c>=b-3)for(e[e.length]='<a rel="1" href="#">1</a><span class="dian">...</span>',g=b-4;b>=g;g++)f();else{for(e[e.length]='<a rel="1" href="#">1</a><span class="dian">...</span>',g=c-2;c+2>=g;g++)f();e[e.length]='<span class="dian">...</span><a rel="'+b+'" href="#">'+b+"</a>"}e[e.length]=c==b?'<a href="#" class="next unclick">'+d[1]+"</a>":'<a href="#" class="next">'+d[1]+"</a>",a.innerHTML=e.join(""),function(){var g,e=a.getElementsByTagName("a"),f=c;for(e[0].onclick=function(){return 1==f?!1:(f--,setPage(a,b,f,d),!1)},g=1;g<e.length-1;g++)e[g].onclick=function(){return f=parseInt(this.innerHTML),setPage(a,b,f,d),!1};e[e.length-1].onclick=function(){return f==b?!1:(f++,setPage(a,b,f,d),!1)}}()}function defaultStyleConfigList(){}function juneSimpleSlider(){}var Sys={},ua=navigator.userAgent.toLowerCase();window.ActiveXObject?Sys.ie=ua.match(/msie ([\d.]+)/)[1]:document.getBoxObjectFor?Sys.firefox=ua.match(/firefox\/([\d.]+)/)[1]:window.MessageEvent&&!document.getBoxObjectFor?Sys.chrome=ua.match(/chrome\/([\d.]+)/)&&ua.match(/chrome\/([\d.]+)/)[1]:window.opera?Sys.opera=ua.match(/opera.([\d.]+)/)[1]:window.openDatabase&&(Sys.safari=ua.match(/version\/([\d.]+)/)[1]),function(a){a.fn.addGroup=function(b){if(b&&b.length>0){var c=this.toArray();return c.push(b[0]),a(c)}return a()}}(jQuery),function(a){a.fn.jqScale=function(b,c){var f,g,e="getScale";return"number"==typeof b?(e="setScale",f=b,g="number"==typeof c?c:b):"boolean"==typeof b&&b===!0&&(e="calculateScale"),a.fn.jqScale.setScale=function(b){var c=a.fn.jqScale.getElementTransformMatrix(b);c[0]=f,c[3]=g,a(b).css("transform-origin","0 0"),a(b).css("transform","matrix("+c.toString(",")+")"),a(b).attr("data-jqscale",f+","+g)},a.fn.jqScale.getScale=function(b){var c=a.fn.jqScale.getElementTransformMatrix(b);return a(b).attr("data-jqscale",c[0]+","+c[3]),[c[0],c[3]]},a.fn.jqScale.calculateScale=function(b){var i,c=a(b).parents(),d=c.length,e=[],f=1,g=1,h=a.fn.jqScale.getScale(b);for(e.push(h),f*=h[0],g=f*h[1],i=0;d>i;i++)h=a.fn.jqScale.getScale(c[i]),e.push(h),f*=h[0],g=f*h[1];return a(b).attr("data-aggregated-jqscale",f+","+g),[f,g]},a.fn.jqScale.getElementTransformMatrix=function(b){var e,f,g,c=[],d=a(b).css("transform");if(null===d&&(d=a(b).css("-webkit-transform")),"undefined"==typeof d||null===d||0!==d.indexOf("matrix"))return[1,0,0,1,0,0];for(d=d.split("(")[1].split(")")[0].split(","),e=d.length,f=0;e>f;f++)g=isNaN(Number(d[f]))?0:Number(d[f]),c.push(g);return c},this.each(function(){var b=a.fn.jqScale[e](this);return b})}}(jQuery),function(a){function c(){window.console&&window.console.log}var b;a.fn.tResize=function(d){c(this);var e;return e=d&&"object"!=typeof d?d:a.extend({},a.fn.tResize.defaults,d),this.each(function(){var c;b=a(this),"object"==typeof e?(c=a.meta?a.extend({},e,b.data()):e,a.fn.tResize.relive(c)):a.fn.tResize[e]()})},a.fn.tResize.relive=function(c){var d,e,f,g,h,i;for(b.children(".ui-resizable-handle").remove(),d={n:"",e:"",s:"",w:"",se:"",sw:"",ne:"",nw:""},e={n:" ui-sesizable-notactive",e:" ui-sesizable-notactive",s:" ui-sesizable-notactive",w:" ui-sesizable-notactive",se:" ui-sesizable-notactive",sw:" ui-sesizable-notactive",ne:" ui-sesizable-notactive",nw:" ui-sesizable-notactive"},f="",f="all"==c.tHandles?"n,e,s,w,se,sw,ne,nw":c.tHandles,g=f.split(","),h=0;h<g.length;h++)i=a.trim(g[h]),d[i]=' data-direction="'+i+'"',e[i]="";b.append('<div class="ui-resizable-handle ui-resizable-n'+e.n+'"'+d.n+' style="z-index: 101;"></div>'+'<div class="ui-resizable-handle ui-resizable-e'+e.e+'"'+d.e+' style="z-index: 101;"></div>'+'<div class="ui-resizable-handle ui-resizable-s'+e.s+'"'+d.s+' style="z-index: 101;"></div>'+'<div class="ui-resizable-handle ui-resizable-w'+e.w+'"'+d.w+' style="z-index: 101;"></div>'+'<div class="ui-resizable-handle ui-resizable-se'+e.se+'"'+d.se+' style="z-index: 101;"></div>'+'<div class="ui-resizable-handle ui-resizable-sw'+e.sw+'"'+d.sw+' style="z-index: 101;"></div>'+'<div class="ui-resizable-handle ui-resizable-ne'+e.ne+'"'+d.ne+' style="z-index: 101;"></div>'+'<div class="ui-resizable-handle ui-resizable-nw'+e.nw+'"'+d.nw+' style="z-index: 101;"></div>'),c.tSwitch||(b.addClass("t-na-resize"),b.children(".ui-resizable-handle").css({zIndex:0}))},a.fn.tResize.destory=function(){b&&b.length>0&&b.children(".ui-resizable-handle").length>0&&b.children(".ui-resizable-handle").remove()},a.fn.tResize.defaults={tSwitch:!0,tHandles:"all"}}(jQuery),function(a){function i(a,b,c,d,e,f){var g,h,i,j,k,l,m;for(a=String(a),g=0,h=0,i=a.length,j="",k=0;i>h;){for(l=a.charCodeAt(h),l=256>l?c[l]:-1,g=(g<<e)+l,k+=e;k>=f;)k-=f,m=g>>k,j+=d.charAt(m),g^=m<<k;++h}return!b&&k>0&&(j+=d.charAt(g<<f-k)),j}for(var h,j,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c="",d=[256],e=[256],f=0,g={encode:function(a){var b=a.replace(/[\u0080-\u07ff]/g,function(a){var b=a.charCodeAt(0);return String.fromCharCode(192|b>>6,128|63&b)}).replace(/[\u0800-\uffff]/g,function(a){var b=a.charCodeAt(0);return String.fromCharCode(224|b>>12,128|63&b>>6,128|63&b)});return b},decode:function(a){var b=a.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(a){var b=(15&a.charCodeAt(0))<<12|(63&a.charCodeAt(1))<<6|63&a.charCodeAt(2);return String.fromCharCode(b)}).replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(a){var b=(31&a.charCodeAt(0))<<6|63&a.charCodeAt(1);return String.fromCharCode(b)});return b}};256>f;)h=String.fromCharCode(f),c+=h,e[f]=f,d[f]=b.indexOf(h),++f;j=a.base64=function(a,b,c){return b?j[a](b,c):a?null:this},j.btoa=j.encode=function(a,c){return a=j.raw===!1||j.utf8encode||c?g.encode(a):a,a=i(a,!1,e,b,8,6),a+"====".slice(a.length%4||4)},j.atob=j.decode=function(a,b){a=String(a).split("=");var e=a.length;do--e,a[e]=i(a[e],!0,d,c,6,8);while(e>0);return a=a.join(""),j.raw===!1||j.utf8decode||b?g.decode(a):a}}(jQuery),function(a,b,c){function l(){f=b[g](function(){d.each(function(){var b=a(this),c=b.width(),d=b.height(),e=a.data(this,i);(c!==e.w||d!==e.h)&&b.trigger(h,[e.w=c,e.h=d])}),l()},e[j])}var f,d=a([]),e=a.resize=a.extend(a.resize,{}),g="setTimeout",h="resize",i=h+"-special-event",j="delay",k="throttleWindow";e[j]=500,e[k]=!0,a.event.special[h]={setup:function(){if(!e[k]&&this[g])return!1;var b=a(this);d=d.add(b),a.data(this,i,{w:b.width(),h:b.height()}),1===d.length&&l()},teardown:function(){if(!e[k]&&this[g])return!1;var b=a(this);d=d.not(b),b.removeData(i),d.length||clearTimeout(f)},add:function(b){function f(b,e,f){var g=a(this),h=a.data(this,i);h.w=e!==c?e:g.width(),h.h=f!==c?f:g.height(),d.apply(this,arguments)}if(!e[k]&&this[g])return!1;var d;return a.isFunction(b)?(d=b,f):(d=b.handler,b.handler=f,void 0)}}}(jQuery,this);