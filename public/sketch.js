"use strict";function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,i){for(var s=0;s<i.length;s++){var e=i[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function _createClass(t,i,s){return i&&_defineProperties(t.prototype,i),s&&_defineProperties(t,s),t}var Pillar=function(){function s(t,i){_classCallCheck(this,s),this.s=20,this.x=t*this.s,this.y=i*this.s,this.shift=0}return _createClass(s,[{key:"update",value:function(){var t=this.x+this.y;this.shift=30*sin(millis()/7+t)}},{key:"show",value:function(){var t=this.x+this.y,i=360*sin(millis()/7+t)/2+180;translate(this.x,this.y,this.shift),fill(color(i,100,100)),box(this.s),translate(-this.x,-this.y,-this.shift)}}]),s}();
"use strict";var pillars=[];function setup(){createCanvas(500,500,WEBGL);for(var r=-5;r<5;++r)for(var o=-5;o<5;++o)pillars.push(new Pillar(o,r));angleMode(DEGREES)}function draw(){background(127,127,255),orbitControl(8,8),colorMode(HSB,360,100,100);for(var r=pillars,o=0;o<r.length;o++){var a=r[o];a.update(),a.show()}colorMode(RGB,255)}