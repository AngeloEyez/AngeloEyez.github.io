postSeries.labelSet=[];postSeries.titleSet=[];postSeries.urlSet=[];postSeries.totalPost=0;postSeries.startNo=1;Array.indexOf||(Array.prototype.indexOf=function(c){for(var e=0;e<this.length;e++)if(this[e]==c)return e;return-1});
eval(function(c,e,d,a,h,l){h=function(b){return(62>b?"":h(parseInt(b/62)))+(35<(b%=62)?String.fromCharCode(b+29):b.toString(36))};if(0=="0".replace(0,h)){for(;d--;)l[h(d)]=a[d];a=[function(b){return l[b]||b}];h=function(){return"([6-9b-fil-wyzA-Z]|1\\w)"};d=1}for(;d--;)a[d]&&(c=c.replace(new RegExp("\\b"+h(d)+"\\b","g"),a[d]));return c}("y['\\e\\m\\b\\x77\\S\\b\\e\\6']=function(){T U=jQuery,u=y['\\z\\c\\9\\D\\7\\6']['\\9\\7\\i\\n\\6\\m'],k=y['\\6\\l\\6\\9\\7\\D\\7\\6'],h=y['\\z\\c\\9\\D\\7\\6'],j=location['\\o\\d\\6\\m\\i\\d\\E\\7'],a=y['\\o\\b\\l\\i\\6\\7\\c'],p=y['\\i\\z\\E\\S\\b\\e\\6'],g=\"\",q=[],F,8;K(8=0;8<u;8++){q[8]=[k[8],h[8]]}q['\\e\\b\\c\\6']();a=(a['\\e\\7\\d\\c\\A\\m'](\"\\m\\6\\6\\o\")<0)?a:\"\\r\\l\\E\\n \\e\\c\\A\\v\\V\"+a+\"\\V\\s\\t\";p=(p<=3)?3:p;B=window[\"\\x4d\\d\\6\\m\"]['\\c\\b\\z\\i\\L'](p/2)-1;w=(p%2==0)?p/2:(p-1)/2;M=false;ee=0;g+=\"\\r\\z\\9\\t\";K(8=0;8<u;8++){F=q[8][1];T f=[\"\\e\\7\\d\\c\\A\\m\",\"\\r\\9\\l\\t\\r\\d \\m\\c\\7\\W\\v\\'\",\"\\' \\6\\d\\c\\n\\7\\6\\v\\'\\X\\G\\9\\d\\i\\N\\'\\t\",\"\\r\\s\\d\\t\\r\\s\\9\\l\\t\",\"\\r\\9\\l\\t\",\"\\x26\\Y\\Z\\O\\O\\P\\P\\10\\r\\d \\m\\c\\7\\W\\v\\'\\m\\6\\6\\o\\11\\s\\s\\d\\i\\n\\7\\9\\b\\7\\J\\7\\12\\Q\\G\\9\\b\\n\\e\\o\\b\\6\\Q\\A\\b\\E\\s\\O\\R\\Z\\P\\s\\R\\x36\\s\\G\\9\\b\\n\\n\\7\\c\\H\\e\\7\\c\\l\\7\\e\\H\\o\\b\\e\\6\\H\\m\\d\\A\\N\\H\\G\\l\\n\\x35\\Q\\m\\6\\E\\9\\' \\6\\d\\c\\n\\7\\6\\v\\'\\X\\G\\9\\d\\i\\N\\' \\e\\6\\J\\9\\7\\v\\'\\6\\7\\x78\\6\\H\\L\\7\\A\\b\\c\\d\\6\\l\\b\\i\\11 \\i\\b\\i\\7\\10\\' \\6\\l\\6\\9\\7\\v\\'\\13\\9\\b\\n\\n\\7\\c \\o\\b\\e\\6\\D\\7\\c\\l\\7\\e\\u7cfb\\u5217\\u6587\\x\\R\\14\\13\\J\\uff1a\\14\\i\\n\\7\\9\\b\\x45\\J\\7\\12\\'\\t\"];C(F[f[0]](j)<0){C(M&&w>0){g+=f[1]+F+f[2]+q[8][0]+f[3];w--}15 C(p>=u)g+=f[1]+F+f[2]+q[8][0]+f[3]}15{M=true;C(p<u){C((B-8)>0){w+=B-8;B=8}C(u-8<=w){B+=w-(u-8-1);w=u-8-1}K(I=B;I>0;I--){g+=f[1]+q[8-I][1]+f[2]+q[8-I][0]+f[3]}}g+=f[4]+q[8][0]+f[5]+a+f[3]}}g+=\"\\r\\s\\z\\9\\t\";U(\"\\Y\\o\\b\\e\\6\\D\\7\\c\\l\\7\\e\")['\\d\\o\\o\\7\\i\\L'](g)['\\d\\6\\6\\c'](\"\\6\\l\\6\\9\\7\",\"\")};",
[],68,"      x74 x65 L5 x6c  x6f x72 x61 x73 _TfO6   x6e   x69 x68 x67 x70 np BASnazfM3 x3c x2f x3e ERN2 x3d npb  postSeries x75 x63 npt if x53 x6d rLv4 x62 x2d nn x79 for x64 pfd x6b x32 x38 x2e x30 x50 var IspLfnj1 x27 x66 x5f x23 x31 x3b x3a x7a x42 x41 else".split(" "),0,{}));
postSeries.init=function(){var c=jQuery,e=c("#postSeries").attr("title");c.getJSON("/feeds/posts/summary?q="+e+"&alt=json-in-script&start-index="+postSeries.startNo+"&max-results=500&callback=?",function(d){var a=d.feed.entry.length,h=postSeries.labelSet,l=postSeries.urlSet,b=postSeries.titleSet,c,f;postSeries.totalPost=d.feed.openSearch$totalResults.$t;e=e.split(" ");var p=e.length;for(c=0;c<a;c++){var g=d.feed.entry[c];var m=unescape(g.title.$t);var k=1;for(f=0;f<p;f++)if(0>m.search(e[f])){k=0;
break}if(k){k=g.link.length;for(f=0;f<k;f++)if("alternate"==g.link[f].rel){var n=g.link[f].href;break}if(g.category)for(g=g.category,k=g.length,f=0;f<k;f++)-1<h.indexOf(unescape(g[f].term))&&0>l.indexOf(n)&&(l.push(n),b.push(m))}}postSeries.totalPost>=postSeries.startNo+500?(postSeries.startNo+=500,postSeries.init()):postSeries.showPost()})};
(function(){var c=function(){var c=jQuery,d=c("link[rel='service.post']").attr("href").replace("default","summary"),b=c(".post-body").attr("id").replace("post-body-","");c.getJSON(d+"/"+b+"?alt=json-in-script&callback=?",function(b){b=b.entry.category;var c=b.length,d=postSeries.labelSet,a;for(a=0;a<c;a++)d[a]=b[a].term;postSeries.init()})},e=function(c,a){var b=document.createElement("script");b.readyState?b.onreadystatechange=function(){if("loaded"==b.readyState||"complete"==b.readyState)b.onreadystatechange=
null,a&&a()}:b.onload=function(){a&&a()};b.src=c;document.documentElement.firstChild.appendChild(b)},d=function(){e("http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js",c)};if("undefined"===typeof jQuery)d();else{var a=jQuery().jquery;a=a.split(".");10>a[1]&&(a[1]="0"+a[1]);a=a.join(".");"1.08.2">a?d():c()}})();