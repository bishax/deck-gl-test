(this["webpackJsonpdeck-gl-test"]=this["webpackJsonpdeck-gl-test"]||[]).push([[0],{108:function(e,t){},148:function(e,t,n){e.exports=n(161)},153:function(e,t,n){},156:function(e,t){},161:function(e,t,n){"use strict";n.r(t);var o=n(8),a=n.n(o),i=n(124),r=n.n(i),s=(n(153),n(134)),c=n(130),l=n(177),u=n(183),d=n(184),g=n(179),h=n(182),b=n(129),m=[166,3,3],p=[35,181,184],f=new h.a;function w(e){var t=e.object;return t&&{html:"<h3>".concat(t.name,"</h3><p>Number of collaborations: ").concat(t.net,"</p>"),style:{fontSize:"0.8em"}}}function v(e){var t=e.data,n=e.enableBrushing,i=void 0===n||n,r=e.brushRadius,h=void 0===r?100:r,v=e.strokeWidth,k=void 0===v?2:v,y=e.opacity,S=void 0===y?.7:y,x=e.mapStyle,E=void 0===x?"mapbox://styles/mapbox/light-v9":x,j=Object(o.useState)({longitude:-2.9,latitude:56.1,zoom:5.5,maxZoom:15,pitch:0,bearing:0}),C=Object(s.a)(j,2),P=C[0],W=C[1],z=Object(o.useCallback)((function(e){var t=e.viewState;console.log("zoom"),console.log(t.zoom),W(t)}),[]),J=Object(o.useMemo)((function(){return t}),[t]),O=J.arcs,R=J.targets,T=(J.sources,Object(b.a)().exponent(3).domain([P.maxZoom,5]).range([10,550])(P.zoom));console.log(T);var I=O&&R&&[new u.a({id:"targets-base",data:R,brushingRadius:h,brushingEnabled:!1,pickable:!0,radiusScale:T,getFillColor:p}),new u.a({id:"targets-ring",data:R,brushingRadius:h,lineWidthMinPixels:2,stroked:!0,filled:!1,brushingEnabled:i,radiusScale:i?1e3:0,getLineColor:m,extensions:[f]}),new u.a({id:"targets",data:R,brushingRadius:h,brushingEnabled:i,pickable:!0,radiusScale:500,getFillColor:m,extensions:[f]}),new g.a({data:R,id:"heatmap",pickable:!1,getPosition:function(e){return e.position},getWeight:function(e){return e.net},radiusPixels:100,intensity:1,threshold:.02}),new d.a({id:"arc-reverse",data:O,getWidth:k,opacity:S,brushingRadius:h,brushingEnabled:i,getSourcePosition:function(e){return e.target},getTargetPosition:function(e){return e.source},getSourceColor:m,getTargetColor:p,extensions:[f]}),new d.a({id:"arc",data:O,getWidth:k,opacity:S,brushingRadius:h,brushingEnabled:i,getSourcePosition:function(e){return e.source},getTargetPosition:function(e){return e.target},getSourceColor:m,getTargetColor:p,extensions:[f]})];return a.a.createElement(l.a,{layers:I,viewState:P,onViewStateChange:z,controller:!0,getTooltip:w},a.a.createElement("div",null,a.a.createElement("p",null,"Hello")),a.a.createElement(c.a,{reuseMaps:!0,mapStyle:E,preventStyleDiffing:!0,mapboxApiAccessToken:"pk.eyJ1IjoiYWxleGJpc2hvcCIsImEiOiJja2c3dXlyMGwwNGo1MndteW82dG9zeXJlIn0._DAKpeBrXy5oKPPKhpddHw"}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=document.getElementById("root");fetch("https://nesta-test.s3.eu-west-2.amazonaws.com/gtr-deck-gl-test.json").then((function(e){return e.json()})).then((function(e){r.a.render(a.a.createElement(v,{data:e}),k)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[148,1,2]]]);
//# sourceMappingURL=main.0a4945c1.chunk.js.map