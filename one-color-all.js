(function(e,t,n,r,i,s,o,u,a,f,l){function g(t){if(l.apply(t)==="[object Array]"){if(typeof t[0]=="string"&&typeof g[t[0]]=="function")return new g[t[0]](t.slice(1,t.length));if(t.length===4)return new g.RGB(t[0]/255,t[1]/255,t[2]/255,t[3]/255)}else{if(l.apply(t)==="[object Number]"){var n=o(t/65536),s=o((t-n*65536)/256),u=t-n*65536-s*256;return new g.RGB(n/255,s/255,u/255)}if(typeof t=="string"){var a=t.toLowerCase();h[a]&&(t="#"+h[a]);var f=t.match(m);if(f){var c=f[1].toUpperCase(),d=p(f[8])?f[8]:r(f[8]),v=c[0]==="H",y=f[3]?100:v?360:255,b=f[5]||v?100:255,w=f[7]||v?100:255;if(p(g[c]))throw new Error("one.color."+c+" is not installed.");return new g[c](r(f[2])/y,r(f[4])/b,r(f[6])/w,d)}t.length<6&&(t=t.replace(/^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i,"$1$1$2$2$3$3"));var E=t.match(/^#?([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])$/i);if(E)return new g.RGB(i(E[1],16)/255,i(E[2],16)/255,i(E[3],16)/255);var S=t.match(/^([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])$/i);if(S)return new g.RGB(i(S[4],16)/255,i(S[3],16)/255,i(S[2],16)/255,i(S[1],16)/255)}else{if(typeof t=="object"&&t.isColor)return t;if(!e(t))return new g.RGB((t&255)/255,((t&65280)>>8)/255,((t&16711680)>>16)/255)}}return!1}function y(e,t,r){function a(e,t){var n={};n[t.toLowerCase()]=new s("return this.rgb()."+t.toLowerCase()+"();"),g[t].propertyNames.forEach(function(e,r){n[e]=n[e==="black"?"k":e[0]]=new s("value","isDelta","return this."+t.toLowerCase()+"()."+e+"(value, isDelta);")});for(var r in n)n.hasOwnProperty(r)&&g[e].prototype[r]===undefined&&(g[e].prototype[r]=n[r])}g[e]=new s(t.join(","),"if (Object.prototype.toString.apply("+t[0]+") === '[object Array]') {"+t.map(function(e,n){return e+"="+t[0]+"["+n+"];"}).reverse().join("")+"}"+"if ("+t.filter(function(e){return e!=="alpha"}).map(function(e){return"isNaN("+e+")"}).join("||")+"){"+'throw new Error("['+e+']: Invalid color: ("+'+t.join('+","+')+'+")");}'+t.map(function(e){return e==="hue"?"this._hue=hue<0?hue-Math.floor(hue):hue%1":e==="alpha"?"this._alpha=(isNaN(alpha)||alpha>1)?1:(alpha<0?0:alpha);":"this._"+e+"="+e+"<0?0:("+e+">1?1:"+e+")"}).join(";")+";"),g[e].propertyNames=t;var i=g[e].prototype;["valueOf","hex","hexa","css","cssa","threejs","toNumber","kml"].forEach(function(t){i[t]=i[t]||(e==="RGB"?i.hex:new s("return this.rgb()."+t+"();"))}),i.isColor=!0,i.equals=function(r,i){p(i)&&(i=1e-10),r=r[e.toLowerCase()]();for(var s=0;s<t.length;s+=1)if(n.abs(this["_"+t[s]]-r["_"+t[s]])>i)return!1;return!0},i.toJSON=new s("return ['"+e+"', "+t.map(function(e){return"this._"+e},this).join(", ")+"];");for(var o in r)if(r.hasOwnProperty(o)){var u=o.match(/^from(.*)$/);u?g[u[1].toUpperCase()].prototype[e.toLowerCase()]=r[o]:i[o]=r[o]}i[e.toLowerCase()]=function(){return this},i.toString=new s('return "[one.color.'+e+':"+'+t.map(function(e,n){return'" '+t[n]+'="+this._'+e}).join("+")+'+"]";'),t.forEach(function(e,n){i[e]=i[e==="black"?"k":e[0]]=new s("value","isDelta","if (typeof value === 'undefined') {return this._"+e+";"+"}"+"if (isDelta) {"+"return new this.constructor("+t.map(function(t,n){return"this._"+t+(e===t?"+value":"")}).join(", ")+");"+"}"+"return new this.constructor("+t.map(function(t,n){return e===t?"value":"this._"+t}).join(", ")+");")}),c.forEach(function(t){a(e,t),a(t,e)}),c.push(e)}function b(){var e=this.rgb(),t=e._red*.3+e._green*.59+e._blue*.11;return new g.RGB(t,t,t,this._alpha)}var c=[],h={},p=function(e){return typeof e=="undefined"},d=/\s*(\.\d+|\d+(?:\.\d+)?)(%)?\s*/,v=/\s*(\.\d+|\d+(?:\.\d+)?)\s*/,m=new RegExp("^(rgb|hsl|hsv)a?\\("+d.source+","+d.source+","+d.source+"(?:,"+v.source+")?"+"\\)$","i");g.installMethod=function(e,t){c.forEach(function(n){g[n].prototype[e]=t})},y("RGB",["red","green","blue","alpha"],{hex:function(){var e=(u(255*this._red)*65536+u(255*this._green)*256+u(255*this._blue)).toString(16);return"#"+"00000".substr(0,6-e.length)+e},hexa:function(){var e=u(this._alpha*255).toString(16);return"#"+"00".substr(0,2-e.length)+e+this.hex().substr(1,6)},css:function(){return"rgb("+u(255*this._red)+","+u(255*this._green)+","+u(255*this._blue)+")"},cssa:function(){return"rgba("+u(255*this._red)+","+u(255*this._green)+","+u(255*this._blue)+","+this._alpha+")"},threejs:function(){return u(255*this._red)*65536+u(255*this._green)*256+u(255*this._blue)},toNumber:function(){return u(255*this._red)*65536+u(255*this._green)*256+u(255*this._blue)},kml:function(){var e=(u(255*this._alpha)*16777216+u(255*this._blue)*65536+u(255*this._green)*256+u(255*this._red)).toString(16);return"0000000".substr(0,8-e.length)+e}}),typeof module!="undefined"?module.exports=g:typeof define=="function"&&!p(define.amd)?define([],function(){return g}):typeof jQuery!="undefined"&&p(jQuery.color)?jQuery.color=g:(one=window.one||{},one.color=g),h={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},y("HSV",["hue","saturation","value","alpha"],{rgb:function(){var e=this._hue,t=this._saturation,n=this._value,r=f(5,o(e*6)),i=e*6-r,s=n*(1-t),u=n*(1-i*t),a=n*(1-(1-i)*t),l,c,h;switch(r){case 0:l=n,c=a,h=s;break;case 1:l=u,c=n,h=s;break;case 2:l=s,c=n,h=a;break;case 3:l=s,c=u,h=n;break;case 4:l=a,c=s,h=n;break;case 5:l=n,c=s,h=u}return new g.RGB(l,c,h,this._alpha)},hsl:function(){var e=(2-this._saturation)*this._value,t=this._saturation*this._value,n=e<=1?e:2-e,r;return n<1e-9?r=0:r=t/n,new g.HSL(this._hue,r,e/2,this._alpha)},fromRgb:function(){var e=this._red,t=this._green,r=this._blue,i=n.max(e,t,r),s=f(e,t,r),o=i-s,u,a=i===0?0:o/i,l=i;if(o===0)u=0;else switch(i){case e:u=(t-r)/o/6+(t<r?1:0);break;case t:u=(r-e)/o/6+1/3;break;case r:u=(e-t)/o/6+2/3}return new g.HSV(u,a,l,this._alpha)}}),y("HSL",["hue","saturation","lightness","alpha"],{hsv:function(){var e=this._lightness*2,t=this._saturation*(e<=1?e:2-e),n;return e+t<1e-9?n=0:n=2*t/(e+t),new g.HSV(this._hue,n,(e+t)/2,this._alpha)},rgb:function(){return this.hsv().rgb()},fromRgb:function(){return this.hsv().hsl()}}),y("CMYK",["cyan","magenta","yellow","black","alpha"],{rgb:function(){return new g.RGB(1-this._cyan*(1-this._black)-this._black,1-this._magenta*(1-this._black)-this._black,1-this._yellow*(1-this._black)-this._black,this._alpha)},fromRgb:function(){var e=this._red,t=this._green,n=this._blue,r=1-e,i=1-t,s=1-n,o=1;return e||t||n?(o=f(r,f(i,s)),r=(r-o)/(1-o),i=(i-o)/(1-o),s=(s-o)/(1-o)):o=1,new g.CMYK(r,i,s,o,this._alpha)}}),g.installMethod("clearer",function(t){return this.alpha(e(t)?-0.1:-t,!0)}),g.installMethod("darken",function(t){return this.lightness(e(t)?-0.1:-t,!0)}),g.installMethod("desaturate",function(t){return this.saturation(e(t)?-0.1:-t,!0)}),g.installMethod("greyscale",b),g.installMethod("grayscale",b),g.installMethod("lighten",function(t){return this.lightness(e(t)?.1:t,!0)}),g.installMethod("mix",function(t,n){t=g(t).rgb(),n=1-(e(n)?.5:n);var r=n*2-1,i=this._alpha-t._alpha,s=((r*i===-1?r:(r+i)/(1+r*i))+1)/2,o=1-s,u=this.rgb();return new g.RGB(u._red*s+t._red*o,u._green*s+t._green*o,u._blue*s+t._blue*o,u._alpha*n+t._alpha*(1-n))}),g.installMethod("negate",function(){var e=this.rgb();return new g.RGB(1-e._red,1-e._green,1-e._blue,this._alpha)}),g.installMethod("opaquer",function(t){return this.alpha(e(t)?.1:t,!0)}),g.installMethod("rotate",function(e){return this.hue((e||0)/360,!0)}),g.installMethod("saturate",function(t){return this.saturation(e(t)?.1:t,!0)}),g.installMethod("toAlpha",function(e){var t=this.rgb(),n=g(e).rgb(),r=1e-10,i=new g.RGB(0,0,0,t._alpha),s=["_red","_green","_blue"];return s.forEach(function(e){t[e]<r?i[e]=t[e]:t[e]>n[e]?i[e]=(t[e]-n[e])/(1-n[e]):t[e]>n[e]?i[e]=(n[e]-t[e])/n[e]:i[e]=0}),i._red>i._green?i._red>i._blue?t._alpha=i._red:t._alpha=i._blue:i._green>i._blue?t._alpha=i._green:t._alpha=i._blue,t._alpha<r?t:(s.forEach(function(e){t[e]=(t[e]-n[e])/t._alpha+n[e]}),t._alpha*=i._alpha,t)})})(isNaN,Object,Math,parseFloat,parseInt,Function,Math.floor,Math.round,Object.prototype,Math.min,Object.prototype.toString)
