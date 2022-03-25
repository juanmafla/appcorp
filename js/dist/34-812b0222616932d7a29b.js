/*!
 * Premium Cryptocurrency Widgets
 * ------------------------------
 * Version 2.18.0, built on Friday, April 30, 2021
 * Copyright (c) Financial Apps and Plugins <info@financialplugins.com>. All rights reserved.
 * Demo: https://cryptowidgets.financialplugins.com/
 * Purchase (WordPress version): https://1.envato.market/mvJYM
 * Purchase (JavaScript version): https://1.envato.market/xvjY1
 * Like: https://www.facebook.com/financialplugins/
 * 
 */
(window.webpackJsonp42050=window.webpackJsonp42050||[]).push([[34],{510:function(t,e,i){"use strict";var a=i(517),s=i(518);function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var i=[],a=!0,s=!1,n=void 0;try{for(var r,o=t[Symbol.iterator]();!(a=(r=o.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){s=!0,n=t}finally{try{a||null==o.return||o.return()}finally{if(s)throw n}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}var o={data:function(){return{display:!1}},computed:{config:function(){return this.$store.getters[this.code+"/config"]},text:function(){return this.$store.getters[this.code+"/text"]},globalStaticData:function(){return this.$store.getters[this.code+"/staticData"]},globalMarketData:function(){return this.$store.getters[this.code+"/marketData"]},code:function(){return this.$root.code},type:function(){return this.$attrs.type},api:function(){return this.$attrs.api},realtime:function(){return this.checkBoolean(this.$attrs.realtime)},assets:function(){var t=[];if(this.config.assetRecognitionRegexp){var e=new RegExp(this.config.assetRecognitionRegexp,"i"),i=location.href.replace(this.config.websiteUrl+"/","").match(e);i&&void 0!==i[1]&&void 0!==i[2]&&(t=[i[1].toUpperCase()+"~"+i[2].toUpperCase()])}return 0==t.length&&void 0!==this.$attrs.assets&&(t=this.$attrs.assets.toString().split(",")),t},from:function(){return this.assets.length?this.assets.map((function(t){return t.split("~")[0]})):[]},to:function(){return this.assets.length?this.assets.map((function(t){return t.split("~")[1]})):[]},assetsSubscription:function(){var t={type:this.marketDataType,subType:this.marketDataSubType,assets:this.assets,api:this.api,realtime:this.realtime};return"order-book"==this.marketDataType?t.exchange=this.$attrs.exchange:"rankings"==this.marketDataType&&"table-rankings"==this.type?(t.currency=this.$attrs.currency,t.page=1,t.limit=parseInt(this.$attrs.rows_per_page,10)):"rankings"==this.marketDataType&&"treemap"==this.type&&(t.page=1,t.limit=2e3),t},fields:function(){return this.$attrs.fields?this.$attrs.fields.split(","):[]},animation:function(){return this.$attrs.animation},classes:function(){return[this.code+"-"+this.$attrs.type,this.code+"-"+this.$attrs.template,this.code+"-"+this.$attrs.color]},classesWithIndicator:function(){var t=this.classes,e=this.quoteValue(this.assets[0],"change_abs_24h"),i=e<0?this.code+"-down":e>0?this.code+"-up":"";return i&&-1==t.indexOf(i)&&t.push(i),t},marketDataLoaded:function(){var t=this,e=!1;if("table-history"==this.type||"chart"==this.type){var i=this.marketData(this.assets[0]);e=!!(i&&i.length>1&&i[0].period==this.$attrs.period)}else if("table-trades"==this.type||"table-exchanges-quotes"==this.type)e=!!this.marketData(this.assets[0]);else if(["table-rankings","table-exchanges","table-wallets","table-mining-pools","order-book","treemap","ticker-news","typed-news","news-block"].indexOf(this.type)>-1)e=!!this.marketData();else if("button-link"==this.type&&"rankings"==this.marketDataType)e=!0;else if("info"==this.type)e=!0;else if("geomap"==this.type){var a=0;this.assets.forEach((function(e){a+=t.quoteValue(e,"asset")==e?1:0})),e=a>100}else{a=0;this.assets.forEach((function(e){a+=t.quoteValue(e,"asset")==e?1:0})),e=a==this.assets.length}return e},isChildWidget:function(){return void 0!==this.$parent.$parent.$parent&&void 0!==this.$parent.$parent.$parent.api},marketDataType:function(){return"table-history"==this.type||"chart"==this.type?"history":"table-trades"==this.type?"trades":"table-rankings"==this.type||"treemap"==this.type?"rankings":"table-exchanges"==this.type?"exchanges":"table-exchanges-quotes"==this.type?"exchanges-quotes":"table-wallets"==this.type?"wallets":"table-mining-pools"==this.type?"mining-pools":"order-book"==this.type?"order-book":"ticker-news"==this.type||"typed-news"==this.type||"news-block"==this.type?"news":"button-link"==this.type&&this.isChildWidget?this.$parent.$parent.$parent.marketDataType:"quotes"},marketDataSubType:function(){return"history"==this.marketDataType?this.$attrs.period:"live"}},methods:{checkBoolean:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return void 0===t&&e||"boolean"==typeof t&&t||"string"==typeof t&&"true"==t},symbolFrom:function(t){var e=n(t.split("~"),2),i=e[0];e[1];return i},symbolTo:function(t){var e=n(t.split("~"),2);e[0];return e[1]},staticData:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?this.globalStaticData[t][e]||{}:this.globalStaticData[t]},staticDataValue:function(t,e,i){var a=this.staticData(t,e);return a&&void 0!==a[i]?a[i]:""},coinValue:function(t,e){return this.staticDataValue("coins",t,e)},marketData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=null;return void 0!==this.globalMarketData[this.api]&&void 0!==this.globalMarketData[this.api][this.marketDataType]&&void 0!==this.globalMarketData[this.api][this.marketDataType][this.marketDataSubType]&&(e=null!==t?this.globalMarketData[this.api][this.marketDataType][this.marketDataSubType][t]||null:this.globalMarketData[this.api][this.marketDataType][this.marketDataSubType]),e},quoteValue:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=this.marketData(t);return a?null!==i&&void 0!==a[i]?a[i][e]||"":a[e]:""},quoteValueFormatted:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=new a.a,r=new s.a,o=this.quoteValue(t,e,i);return["price","change_abs","change_abs_24h","open","high","low","close","open_24h","high_24h","low_24h","last_volume_from","volume_from","vwap"].indexOf(e)>-1?o=n.variableDecimal(o):["change_pct","change_pct_24h","total_volume_pct"].indexOf(e)>-1?o=n.percentage(o):["supply","market_cap","volume_day_to","volume_24h_to","volume_to","total_volume_24h_to"].indexOf(e)>-1?o=n.bigNumber(o):["last_volume_to","volume_day_from","volume_24h_from","volume_from","total_volume_24h_from"].indexOf(e)>-1?o=n.decimal(o):"last_update"==e?o=r.long(1e3*o):"date_time"==e?o=r.date(1e3*o):"last_update_ago"==e&&(o=r.ago(1e3*this.quoteValue(t,"last_update",i))),o},sortValue:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return["name","logo_name","logo_name_link"].indexOf(e)>-1?this.coinValue(this.symbolFrom(t),"name"):e.match(/^portfolio_/)?this.portfolioValue(t,i,e):"last_update_ago"==e?this.quoteValue(t,"last_update",i):this.quoteValue(t,e,i)},subscribeMarketData:function(t){this.$store.dispatch(this.code+"/subscribeMarketData",t||this.assetsSubscription)},unsubscribeMarketData:function(t){this.$store.dispatch(this.code+"/unsubscribeMarketData",{type:this.marketDataType,subType:this.marketDataSubType,assets:t,api:this.api})},disconnectDataSourcesAndClearMarketData:function(){this.$store.dispatch(this.code+"/disconnectDataSourcesAndClearMarketData")},translate:function(t){return void 0!==this.text[t]?this.text[t]:t}},created:function(){var t=this;this.$on("data-loaded",(function(){t.display=!0,t.$nextTick((function(){"function"==typeof t.onDataLoaded&&t.onDataLoaded()}))})),this.marketDataLoaded?this.$emit("data-loaded",{widgetType:this.type,eventType:"WIDGET_INIT_DATA_AVAILABLE"}):this.subscribeMarketData(),this.$watch("marketDataLoaded",(function(e,i){!i&&e&&t.$emit("data-loaded",{widgetType:t.type,eventType:"WIDGET_INIT_DATA_LOADED"})})),this.$watch("$attrs.assets",(function(e,i){t.marketDataLoaded?t.$emit("data-loaded",{widgetType:t.type,eventType:"ASSETS_CHANGE_DATA_AVAILABLE"}):(t.display=!1,!t.api||t.isChildWidget&&"button-link"==t.type||(t.unsubscribeMarketData(i.split(",")),t.subscribeMarketData()))})),this.$watch("$attrs.realtime",(function(e,i){i&&t.unsubscribeMarketData(t.assets),t.subscribeMarketData()})),this.$watch("$attrs.currency",(function(){"table-rankings"==t.type&&t.subscribeMarketData()})),this.$watch("$attrs.rows_per_page",(function(){"table-rankings"==t.type&&(t.disconnectDataSourcesAndClearMarketData(),t.subscribeMarketData())}))}},l=i(1),c=Object(l.a)(o,void 0,void 0,!1,null,null,null);c.options.__file="assets/js/src/components/widgets/_mixins/template.vue";e.a=c.exports},511:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{"enter-class":t.animationEnterClass,"enter-active-class":t.animationEnterActiveClass,mode:"out-in"}},[i("span",{key:t.animationEnabled?t.animation+"|"+t.value:"",class:t.classes},[t._v(t._s(t.$parent.quoteValueFormatted(t.asset,t.field,t.index)))])])};a._withStripped=!0;var s={props:["asset","field","i","color-indicator","animation"],data:function(){return{diffToPreviousValue:0}},computed:{animationEnabled:function(){return this.animation&&"disabled"!=this.animation},animationEnterClass:function(){return this.animationEnabled&&"backgroundRedGreen"==this.animation?this.diffToPreviousValue>0?this.$parent.code+"-animation-green-bg-enter":this.diffToPreviousValue<0?this.$parent.code+"-animation-red-bg-enter":"":""},animationEnterActiveClass:function(){return this.animationEnabled?"backgroundRedGreen"==this.animation?this.diffToPreviousValue>0?this.$parent.code+"-animation-green-bg-enter-active":this.diffToPreviousValue<0?this.$parent.code+"-animation-red-bg-enter-active":"":"animated "+this.animation:""},classes:function(){var t=[this.$parent.code+"-field",this.$parent.code+"-field-"+this.field.replace(/_/g,"-")],e=this.value;return this.colorIndicator&&t.push(e<0?this.$parent.code+"-down":e>0?this.$parent.code+"-up":""),t},index:function(){return void 0!==this.i?parseFloat(this.i):null},value:function(){return this.$parent.quoteValue(this.asset,this.field,this.index)}},created:function(){var t=this;this.animationEnabled&&this.$watch("value",(function(e,i){isNaN(parseFloat(i))||isNaN(parseFloat(e))||(t.diffToPreviousValue=e-i)}))}},n=i(1),r=Object(n.a)(s,a,[],!1,null,null,null);r.options.__file="assets/js/src/components/widgets/_parts/quote.vue";e.a=r.exports},516:function(t,e,i){"use strict";var a={computed:{template:function(){return this.$attrs.template}}},s=i(1),n=Object(s.a)(a,void 0,void 0,!1,null,null,null);n.options.__file="assets/js/src/components/widgets/_mixins/widget-type.vue";e.a=n.exports},517:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var a=i(74),s=i.n(a);function n(){var t=function(t){var e=s()(t).format("0,0.00");return"NaN"!==e?e:parseFloat(t).toFixed(2)};return{integer:function(t){return s()(t).format("0,0")},decimal:t,percentage:function(e){return t(e)+"%"},variableDecimal:function(t){var e,i=s()(t),a=Math.abs(i.value());a>=10?e="0,0.00":0==a?e="0.00":.1<=a&&a<10?e="0.0000":a<.1&&(e="0.00000000");var n=i.format(e);return"NaN"!==n?n:parseFloat(t).toFixed(8)},bigNumber:function(t){return s()(t).format("0,0.00a").toUpperCase()},compareNumbers:function(t,e){var i,a;if("number"==typeof t&&"number"==typeof e)i=t,a=e;else{var n=s()(1.1).format("0.0").substring(1,2),r=s()(1e3).format("0,0").substring(1,2);"."==r&&(t=t.replace(r,""),e=e.replace(r,"")),"."!=n&&(t=t.replace(n,"."),e=e.replace(n,".")),i=parseFloat(t.replace(/[^0-9.-]/g,"")),a=parseFloat(e.replace(/[^0-9.-]/g,""))}return t&&e&&!isNaN(i)&&!isNaN(a)?i>a?1:i<a?-1:0:t.localeCompare(e)}}}},518:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var a=i(104),s=i.n(a);function n(){return{date:function(t){return s()(t).format("ll")},time:function(t){return s()(t).format("H:mm")},long:function(t){return s()(t).format("LLL")},ago:function(t){return s()(t).fromNow()}}}},521:function(t,e,i){"use strict";var a=i(58),s=i.n(a),n=(i(526),{computed:{key:function(){return this.$attrs.template+"a"+(this.$attrs.assets?this.$attrs.assets.length:0)+(this.$attrs.pause?"p1":"p0")+this.$attrs.direction+this.$attrs.speed}},methods:{onDataLoaded:function(){var t=this;setTimeout((function(){s()(t.$root.$el).find("."+t.code+"-"+t.type+" ul").webTicker({speed:t.$attrs.speed,hoverpause:t.$attrs.pause,direction:t.$attrs.direction,duplicate:!0,startEmpty:!1})}),1)}},created:function(){var t=this;this.$watch("$attrs.speed",(function(){t.onDataLoaded()})),this.$watch("$attrs.pause",(function(){t.onDataLoaded()})),this.$watch("$attrs.direction",(function(){t.onDataLoaded()}))}}),r=i(1),o=Object(r.a)(n,void 0,void 0,!1,null,null,null);o.options.__file="assets/js/src/components/widgets/_mixins/widget-ticker.vue";e.a=o.exports},526:function(t,e){!function(t){function e(e){var i=0;return e.children("li").each((function(){i+=t(this).outerWidth(!0)})),i}function i(e){return Math.max.apply(Math,e.children().map((function(){return t(this).width()})).get())}function a(t){var e=t.data("settings")||{direction:"left",speed:50},i=t.children().first(),a=Math.abs(-t.css(e.direction).replace("px","").replace("auto","0")-i.outerWidth(!0)),s=1e3*a/e.speed,n={};return n[e.direction]=t.css(e.direction).replace("px","").replace("auto","0")-a,{css:n,time:s}}function s(t){var e=t.data("settings")||{direction:"left"};t.css("transition-duration","0s").css(e.direction,"0");var i=t.children().first();i.hasClass("webticker-init")?i.remove():t.children().last().after(i)}function n(t,e){var i=t.data("settings")||{direction:"left"};void 0===e&&(e=!1),e&&s(t);var r=a(t);t.animate(r.css,r.time,"linear",(function(){t.css(i.direction,"0"),n(t,!0)}))}function r(t,e){void 0===e&&(e=!1),e&&s(t);var i=a(t),n=i.time/1e3;n+="s",t.css(i.css).css("transition-duration",n)}function o(e,i,a){var s=[];t.get(e,(function(e){t(e).find("item").each((function(){var e=t(this),i=e.find("title").text(),a=e.find("link").text();s+='<li><a href="'+a+'"">'+i+"</a></li>"})),a.webTicker("update",s,i)}))}function l(a,s){if(a.children("li").length<1)return window.console,!1;var n=a.data("settings");n.duplicateLoops=n.duplicateLoops||0,a.width("auto");var r=0;a.children("li").each((function(){r+=t(this).outerWidth(!0)}));var o,l=a.find("li:first").height();if(n.duplicate){o=i(a);for(var c=0;r-o<a.parent().width()||1===a.children().length||c<n.duplicateLoops;){var u=a.children().clone();a.append(u),r=0,r=e(a),o=i(a),c++}n.duplicateLoops=c}else{var d=a.parent().width()-r;d+=a.find("li:first").width(),a.find(".ticker-spacer").length>0?a.find(".ticker-spacer").width(d):a.append('<li class="ticker-spacer" style="float: '+n.direction+";width:"+d+"px;height:"+l+'px;"></li>')}n.startEmpty&&s&&a.prepend('<li class="webticker-init" style="float: '+n.direction+";width:"+a.parent().width()+"px;height:"+l+'px;"></li>'),r=0,r=e(a),a.width(r+200);var h=0;for(h=e(a);h>=a.width();)a.width(a.width()+200),h=0,h=e(a);return!0}var c=function(){var t=document.createElement("p").style,e=["ms","O","Moz","Webkit"];if(""===t.transition)return!0;for(;e.length;)if(e.pop()+"Transition"in t)return!0;return!1}(),u={init:function(e){return e=jQuery.extend({speed:50,direction:"left",moving:!0,startEmpty:!0,duplicate:!1,rssurl:!1,hoverpause:!0,rssfrequency:0,updatetype:"reset",transition:"linear",height:"30px",maskleft:"",maskright:"",maskwidth:0},e),this.each((function(){jQuery(this).data("settings",e);var i=jQuery(this),a=i.wrap('<div class="mask"></div>');a.after('<span class="tickeroverlay-left">&nbsp;</span><span class="tickeroverlay-right">&nbsp;</span>');var s,u=i.parent().wrap('<div class="tickercontainer"></div>');if(t(window).resize((function(){clearTimeout(s),s=setTimeout((function(){console.log("window was resized"),l(i,!1)}),500)})),i.children("li").css("white-space","nowrap"),i.children("li").css("float",e.direction),i.children("li").css("padding","0 7px"),i.children("li").css("line-height",e.height),a.css("position","relative"),a.css("overflow","hidden"),i.closest(".tickercontainer").css("height",e.height),i.closest(".tickercontainer").css("overflow","hidden"),i.css("float",e.direction),i.css("position","relative"),i.css("font","bold 10px Verdana"),i.css("list-style-type","none"),i.css("margin","0"),i.css("padding","0"),""!==e.maskleft&&""!==e.maskright){var d='url("'+e.maskleft+'")';u.find(".tickeroverlay-left").css("background-image",d),u.find(".tickeroverlay-left").css("display","block"),u.find(".tickeroverlay-left").css("pointer-events","none"),u.find(".tickeroverlay-left").css("position","absolute"),u.find(".tickeroverlay-left").css("z-index","30"),u.find(".tickeroverlay-left").css("height",e.height),u.find(".tickeroverlay-left").css("width",e.maskwidth),u.find(".tickeroverlay-left").css("top","0"),u.find(".tickeroverlay-left").css("left","-2px"),d='url("'+e.maskright+'")',u.find(".tickeroverlay-right").css("background-image",d),u.find(".tickeroverlay-right").css("display","block"),u.find(".tickeroverlay-right").css("pointer-events","none"),u.find(".tickeroverlay-right").css("position","absolute"),u.find(".tickeroverlay-right").css("z-index","30"),u.find(".tickeroverlay-right").css("height",e.height),u.find(".tickeroverlay-right").css("width",e.maskwidth),u.find(".tickeroverlay-right").css("top","0"),u.find(".tickeroverlay-right").css("right","-2px")}else u.find(".tickeroverlay-left").css("display","none"),u.find(".tickeroverlay-right").css("display","none");i.children("li").last().addClass("last");var h=l(i,!0);e.rssurl&&(o(e.rssurl,e.type,i),e.rssfrequency>0&&window.setInterval((function(){o(e.rssurl,e.type,i)}),1e3*e.rssfrequency*60)),c?(i.css("transition-timing-function",e.transition),i.css("transition-duration","0s").css(e.direction,"0"),h&&r(i,!1),i.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend",(function(e){return!!i.is(e.target)&&void r(t(this),!0)}))):h&&n(t(this)),e.hoverpause&&i.hover((function(){if(c){var i=t(this).css(e.direction);t(this).css("transition-duration","0s").css(e.direction,i)}else jQuery(this).stop()}),(function(){jQuery(this).data("settings").moving&&(c?r(t(this),!1):n(i))}))}))},stop:function(){var e=t(this).data("settings");if(e.moving)return e.moving=!1,this.each((function(){if(c){var i=t(this).css(e.direction);t(this).css("transition-duration","0s").css(e.direction,i)}else t(this).stop()}))},cont:function(){var e=t(this).data("settings");if(!e.moving)return e.moving=!0,this.each((function(){c?r(t(this),!1):n(t(this))}))},transition:function(e){var i=t(this);c&&i.css("transition-timing-function",e)},update:function(i,a,s,n){a=a||"reset",void 0===s&&(s=!0),void 0===n&&(n=!1),"string"==typeof i&&(i=t(i));var r=t(this);r.webTicker("stop");var o=t(this).data("settings");if("reset"===a)r.html(i),l(r,!0);else if("swap"===a){var c,u,d;if(window.console,r.children("li").length<1)r.html(i),r.css(o.direction,"0"),l(r,!0);else if(!0===o.duplicate){r.children("li").addClass("old");for(var h=i.length-1;h>=0;h--)c=t(i[h]).data("update"),r.find('[data-update="'+c+'"]').length<1?s&&(0===r.find(".ticker-spacer:first-child").length&&r.find(".ticker-spacer").length>0?r.children("li.ticker-spacer").before(i[h]):(u=t(i[h]),h===i.length-1&&u.addClass("last"),r.find("last").after(u),r.find("last").removeClass("last"))):r.find('[data-update="'+c+'"]').replaceWith(i[h]);r.children("li.webticker-init, li.ticker-spacer").removeClass("old"),n&&r.children("li").remove(".old"),d=0,d=e(r),r.width(d+200),r.find("li.webticker-init").length<1&&(o.startEmpty=!1),r.html(i),r.children("li").css("white-space","nowrap"),r.children("li").css("float",o.direction),r.children("li").css("padding","0 7px"),r.children("li").css("line-height",o.height),l(r,!0)}else{r.children("li").addClass("old");for(var p=0;p<i.length;p++)c=t(i[p]).data("update"),r.find('[data-update="'+c+'"]').length<1?s&&(0===r.find(".ticker-spacer:first-child").length&&r.find(".ticker-spacer").length>0?r.children("li.ticker-spacer").before(i[p]):(u=t(i[p]),p===i.length-1&&u.addClass("last"),r.find(".old.last").after(u),r.find(".old.last").removeClass("last"))):r.find('[data-update="'+c+'"]').replaceWith(i[p]);r.children("li.webticker-init, li.ticker-spacer").removeClass("old"),r.children("li").css("white-space","nowrap"),r.children("li").css("float",o.direction),r.children("li").css("padding","0 7px"),r.children("li").css("line-height",o.height),n&&r.children("li").remove(".old"),d=0,d=e(r),r.width(d+200)}}r.webTicker("cont")}};t.fn.webTicker=function(e){return u[e]?u[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.webTicker"):u.init.apply(this,arguments)}}(jQuery)},541:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this.$createElement;return(this._self._c||t)(this.template,this._b({tag:"component"},"component",this.$attrs,!1))};a._withStripped=!0;var s=i(516),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.display?i("div",{key:t.key,class:t.classes},[i("ul",t._l(t.marketData(),(function(e,a){return i("li",[i("a",{attrs:{href:e.url,target:"_blank"}},[t._v("\n                "+t._s(e.title)+"\n            ")])])})),0)]):t._e()};n._withStripped=!0;var r=i(510),o=i(521),l=i(511),c={mixins:[r.a,o.a],components:{Quote:l.a}},u=i(1),d=Object(u.a)(c,n,[],!1,null,null,null);d.options.__file="assets/js/src/components/widgets/ticker-news/basic/template.vue";var h=d.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.display?i("div",{key:t.key,class:t.classes},[i("ul",t._l(t.marketData(),(function(e,a){return i("li",[i("span",[i("a",{attrs:{href:e.url,target:"_blank"}},[t._v("\n                    "+t._s(e.title)+"\n                ")])]),t._v(" "),i("span",{class:t.code+"-source"},[t._v("\n                "+t._s(t.translate("source"))+": "+t._s(e.source)+"\n            ")])])})),0)]):t._e()};p._withStripped=!0;var f={mixins:[r.a,o.a],components:{Quote:l.a}},m=Object(u.a)(f,p,[],!1,null,null,null);m.options.__file="assets/js/src/components/widgets/ticker-news/basic2/template.vue";var v=m.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.display?i("div",{key:t.key,class:t.classes},[i("ul",t._l(t.marketData(),(function(e,a){return i("li",[i("a",{attrs:{href:e.url,target:"_blank"}},[t._v("\n                "+t._s(e.title)+"\n            ")])])})),0)]):t._e()};g._withStripped=!0;var y={mixins:[r.a,o.a],components:{Quote:l.a}},k=Object(u.a)(y,g,[],!1,null,null,null);k.options.__file="assets/js/src/components/widgets/ticker-news/background/template.vue";var b=k.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.display?i("div",{key:t.key,class:t.classes},[i("ul",t._l(t.marketData(),(function(e,a){return i("li",[i("a",{attrs:{href:e.url,target:"_blank"}},[t._v("\n                "+t._s(e.title)+"\n            ")])])})),0)]):t._e()};_._withStripped=!0;var w={mixins:[r.a,o.a],components:{Quote:l.a}},$=Object(u.a)(w,_,[],!1,null,null,null);$.options.__file="assets/js/src/components/widgets/ticker-news/black-background/template.vue";var D=$.exports,x={mixins:[s.a],components:{Basic:h,Basic2:v,Background:b,BlackBackground:D}},T=Object(u.a)(x,a,[],!1,null,null,null);T.options.__file="assets/js/src/components/widgets/ticker-news/ticker-news.vue";e.default=T.exports}}]);