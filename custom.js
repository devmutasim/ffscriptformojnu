var floatPanel=new McFloatPanel;function McFloatPanel(){var t,n,e,i=[],o=[],a="className",r="getElementsByClassName",l="length",c="display",s="transition",u="style",f="height",d="scrollTop",p="offsetHeight",m="fixed",v=document,g=document.documentElement,h=function(t,n,e){t.addEventListener?t.addEventListener(n,e,!1):t.attachEvent&&t.attachEvent("on"+n,e)},w=function(t,n){if("undefined"!=typeof getComputedStyle)var e=getComputedStyle(t,null);else e=t.currentStyle;return e?e[n]:m},T=function(){var t=v.body;return Math.max(t.scrollHeight,t[p],g.clientHeight,g.scrollHeight,g[p])},H=function(t,n){return function(t,n){for(var e=t[l];e--;)if(t[e]===n)return!0;return!1}(t[a].split(" "),n)},y=function(t,n){H(t,n)||(t[a]?t[a]+=" "+n:t[a]=n)},S=function(t,n){if(t[a]&&H(t,n)){for(var e="",i=t[a].split(" "),o=0,r=i[l];o<r;o++)i[o]!==n&&(e+=i[o]+" ");t[a]=e.replace(/^\s+|\s+$/g,"")}},b=function(){return window.pageYOffset||g[d]},E=function(t){return t.getBoundingClientRect().top},x=function(t){var n=b();n>t.oS&&!H(t,m)?y(t,m):H(t,m)&&n<t.oS&&S(t,m)},I=function(){for(var t=0;t<o[l];t++)P(o[t])},P=function(t){t.oS?(t.fT&&clearTimeout(t.fT),t.fT=setTimeout(function(){t.aF?x(t):D(t)},50)):D(t)},B=function(t,n,e){S(t,m),n[c]="none",e.position=e.top=""},D=function(t){var n=E(t),e=t[p],i=t[u],o=t.pH[u],a=b();if(n<t.oT&&a>t.oS&&!H(t,m)&&(window.innerHeight||g.clientHeight)>e){if(t.tP=a+n-t.oT,e>T()-t.tP-e)var r=e;else r=0;o[c]="block",o[s]="none",o[f]=e+1+"px",t.pH[p],o[s]="height .3s",o[f]=r+"px",y(t,m),i.position=m,i.top=t.oT+"px",w(t,"position")!=m&&(o[c]="none")}else if(H(t,m)&&(a<t.tP||a<t.oS)){var l=w(t,"animation");if(t.oS&&t.classList&&-1!=l.indexOf("slide-down")){var d=w(t,"animationDuration");t.classList.remove(m),i.animationDirection="reverse",i.animationDuration="300ms",t[p],t.classList.add(m),setTimeout(function(){B(t,o,i),i.animationDirection="normal",i.animationDuration=d},300)}else B(t,o,i)}},L=200,k=0,C=function(){return window.innerWidth||g.clientWidth||v.body.clientWidth};function F(){n||(n=setInterval(function(){var t=v.body;t[d]<3?t[d]=0:t[d]=t[d]/1.3,g[d]<3?g[d]=0:g[d]=g[d]/1.3,b()||(clearInterval(n),n=null)},14))}function N(){clearTimeout(e),b()>L&&C()>k?(e=setTimeout(function(){S(t,"mcOut")},60),t[u][c]="block"):(y(t,"mcOut"),e=setTimeout(function(){t[u][c]="none"},500))}var O=function(){for(var t,n=b(),e=n+window.innerHeight,o=i[l],a=0;a<o;a++)(t=n+E(i[a]))+i[a][p],t<e?y(i[a],"slide"):S(i[a],"slide")};h(window,"load",function(){!function(){var t,n,e=[];if(v[r])e=v[r]("float-panel"),i=v[r]("slideanim");else{var a=v.getElementsByTagName("*");for(t=a[l];t--;)H(a[t],"float-panel")&&e.push(a[t])}t=e[l];for(var s=0;s<t;s++)(n=o[s]=e[s]).oT=parseInt(n.getAttribute("data-top")||0),n.oS=parseInt(n.getAttribute("data-scroll")||0),n.oS>20&&w(n,"position")==m&&(n.aF=1),n.pH=v.createElement("div"),n.pH[u].width=n.offsetWidth+"px",n.pH[u][c]="none",n.parentNode.insertBefore(n.pH,n.nextSibling);o[l]&&(setTimeout(I,160),h(window,"scroll",I))}(),function(){if(t=v.getElementById("backtop")){var n=t.getAttribute("data-v-w");n&&(n=n.replace(/\s/g,"").split(","),L=parseInt(n[0]),n[l]>1&&(k=parseInt(n[1]))),h(t,"click",F),h(window,"scroll",N),N()}}(),i[l]&&(h(window,"scroll",O),O())}),h(document,"touchstart",function(){})}