/*!
 * Premium Cryptocurrency Widgets
 * ------------------------------
 * Version 2.19.0, built on Monday, June 7, 2021
 * Copyright (c) Financial Apps and Plugins <info@financialplugins.com>. All rights reserved.
 * Demo: https://cryptowidgets.financialplugins.com/
 * Purchase (WordPress version): https://1.envato.market/mvJYM
 * Purchase (JavaScript version): https://1.envato.market/xvjY1
 * Like: https://www.facebook.com/financialplugins/
 * 
 */
(window.webpackJsonp23775=window.webpackJsonp23775||[]).push([[51],{383:function(_,e,s){!function(_){"use strict";
//! moment.js locale configuration
function e(_,e,s){var t,a;return"m"===s?e?"хвіліна":"хвіліну":"h"===s?e?"гадзіна":"гадзіну":_+" "+(t=+_,a={ss:e?"секунда_секунды_секунд":"секунду_секунды_секунд",mm:e?"хвіліна_хвіліны_хвілін":"хвіліну_хвіліны_хвілін",hh:e?"гадзіна_гадзіны_гадзін":"гадзіну_гадзіны_гадзін",dd:"дзень_дні_дзён",MM:"месяц_месяцы_месяцаў",yy:"год_гады_гадоў"}[s].split("_"),t%10==1&&t%100!=11?a[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?a[1]:a[2])}_.defineLocale("be",{months:{format:"студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),standalone:"студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")},monthsShort:"студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),weekdays:{format:"нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),standalone:"нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),isFormat:/\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/},weekdaysShort:"нд_пн_ат_ср_чц_пт_сб".split("_"),weekdaysMin:"нд_пн_ат_ср_чц_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сёння ў] LT",nextDay:"[Заўтра ў] LT",lastDay:"[Учора ў] LT",nextWeek:function(){return"[У] dddd [ў] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[У мінулую] dddd [ў] LT";case 1:case 2:case 4:return"[У мінулы] dddd [ў] LT"}},sameElse:"L"},relativeTime:{future:"праз %s",past:"%s таму",s:"некалькі секунд",m:e,mm:e,h:e,hh:e,d:"дзень",dd:e,M:"месяц",MM:e,y:"год",yy:e},meridiemParse:/ночы|раніцы|дня|вечара/,isPM:function(_){return/^(дня|вечара)$/.test(_)},meridiem:function(_,e,s){return _<4?"ночы":_<12?"раніцы":_<17?"дня":"вечара"},dayOfMonthOrdinalParse:/\d{1,2}-(і|ы|га)/,ordinal:function(_,e){switch(e){case"M":case"d":case"DDD":case"w":case"W":return _%10!=2&&_%10!=3||_%100==12||_%100==13?_+"-ы":_+"-і";case"D":return _+"-га";default:return _}},week:{dow:1,doy:7}})}(s(104))}}]);