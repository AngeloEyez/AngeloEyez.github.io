postSeries.labelSet = [];
postSeries.titleSet = [];
postSeries.urlSet = [];
postSeries.totalPost = 0;
postSeries.startNo = 1;
if (!Array.indexOf) {
    Array.prototype.indexOf = function(b) {
        for (var a = 0; a < this.length; a++) {
            if (this[a] == b) {
                return a
            }
        }
        return -1
    }
}
postSeries.showPost = function() {
    var f = jQuery,
        c = postSeries.urlSet.length,
        k = postSeries.titleSet,
        h = postSeries.urlSet,
        j = location.pathname,
        a = postSeries.pointer,
        np = postSeries.numPost,
        g = "",
        d = [],
        b, e;
eval(function(d,f,a,c,b,e){b=function(a){return(62>a?"":b(parseInt(a/62)))+(35<(a%=62)?String.fromCharCode(a+29):a.toString(36))};if(0=="0".replace(0,b)){for(;a--;)e[b(a)]=c[a];c=[function(a){return e[a]||a}];b=function(){return"([6-9filmo-tv-zA-Z]|1\\w)"};a=1}for(;a--;)c[a]&&(d=d.replace(new RegExp("\\b"+b(a)+"\\b","g"),c[a]));return d}('M(e=0;e<c;e++)d[e]=[k[e],h[e]];d[\'\\o\\9\\f\\7\']();a=0>a[\'\\o\\6\\i\\f\\y\\r\']("\\r\\7\\7\\B")?a:"\\t\\q\\N\\p \\o\\f\\y\\z\\l"+a+"\\l\\v\\w";s=3>=s?3:s;C=window["\\x4d\\i\\7\\r"][\'\\f\\9\\T\\x\\U\'](s/2)-1;A=0==s%2?s/2:(s-1)/2;O=!1;ee=0;g+="\\t\\T\\8\\w";M(e=0;e<c;e++){b=d[e][1];var m="\\o\\6\\i\\f\\y\\r\\D\\t\\8\\q\\w\\t\\i \\r\\f\\6\\F\\z\\l\\D\\l \\7\\i\\f\\p\\6\\7\\z\\l\\V\\E\\8\\i\\x\\P\\l\\w\\D\\t\\v\\i\\w\\t\\v\\8\\q\\w\\D\\t\\8\\q\\w\\D\\x26\\x23\\I\\J\\J\\K\\K\\W\\t\\i \\r\\f\\6\\F\\z\\l\\r\\7\\7\\B\\X\\v\\v\\i\\x\\p\\6\\8\\9\\6\\L\\6\\Y\\Q\\E\\8\\9\\p\\o\\B\\9\\7\\Q\\y\\9\\N\\v\\J\\Z\\I\\K\\v\\Z\\10\\v\\E\\8\\9\\p\\p\\6\\f\\G\\o\\6\\f\\q\\6\\o\\G\\B\\9\\o\\7\\G\\r\\i\\y\\P\\G\\E\\q\\p\\R\\Q\\r\\7\\N\\8\\l \\7\\i\\f\\p\\6\\7\\z\\l\\V\\E\\8\\i\\x\\P\\l \\o\\7\\L\\8\\6\\z\\l\\7\\6\\x78\\7\\G\\U\\6\\y\\9\\f\\i\\7\\q\\9\\x\\X \\x\\9\\x\\6\\W\\l \\7\\q\\7\\8\\6\\z\\l\\11\\8\\9\\p\\p\\6\\f \\B\\9\\o\\7\\x53\\6\\f\\q\\6\\o\\u\\S\\y\\F\\E\\u\\R\\J\\I\\S\\u\\10\\R\\K\\S\\n\\11\\L\\u\\F\\F\\I\\i\\x41\\x\\p\\6\\8\\9\\x45\\L\\6\\Y\\l\\w"[\'\\o\\B\\8\\q\\7\']("\\D");if(0>b[m[0]](j))O&&0<A?(g+=m[1]+b+m[2]+d[e][0]+m[3],A--):s>=c&&(g+=m[1]+b+m[2]+d[e][0]+m[3]);else{O=!0;if(s<c)M(0<C-e&&(A+=C-e,C=e),c-e<=A&&(C+=A-(c-e-1),A=c-e-1),H=C;0<H;H--)g+=m[1]+d[e-H][1]+m[2]+d[e-H][0]+m[3];g+=m[4]+d[e][0]+m[5]+a+m[3]}};',
[],64,"      x65 x74 x6c x6f      x72   x61   x27 nUI1  x73 x67 x69 x68 np x3c  x2f x3e x6e x63 x3d npb x70 npt x2c x62 x66 x2d nn x31 x32 x38 x79 for x6d pfd x6b x2e x35 x37 x75 x64 x5f x3b x3a x7a x30 x36 x42".split(" "),0,{}));
    g += "</ul>";
    f("#postSeries")
        .append(g)
        .attr("title", "")
};
postSeries.init = function() {
    var c = jQuery,
        b = c("#postSeries")
        .attr("title"),
        a;
    a = "/feeds/posts/summary?q=" + b + "&alt=json-in-script&start-index=" + postSeries.startNo + "&max-results=500&callback=?";
    c.getJSON(a, function(u) {
        var m = u.feed.entry.length,
            h = postSeries.labelSet,
            q = postSeries.urlSet,
            t = postSeries.titleSet,
            s, r, e, g, p, o, n, d, f;
        postSeries.totalPost = u.feed.openSearch$totalResults.$t;
        b = b.split(" ");
        d = b.length;
        for (p = 0; p < m; p++) {
            s = u.feed.entry[p];
            r = unescape(s.title.$t);
            f = 1;
            for (o = 0; o < d; o++) {
                if (r.search(b[o]) < 0) {
                    f = 0;
                    break
                }
            }
            if (f) {
                n = s.link.length;
                for (o = 0; o < n; o++) {
                    if (s.link[o].rel == "alternate") {
                        e = s.link[o].href;
                        break
                    }
                }
                if (!s.category) {
                    continue
                }
                g = s.category;
                n = g.length;
                for (o = 0; o < n; o++) {
                    if (h.indexOf(unescape(g[o].term)) > -1 && q.indexOf(e) < 0) {
                        q.push(e);
                        t.push(r)
                    }
                }
            }
        }
        if (postSeries.totalPost >= postSeries.startNo + 500) {
            postSeries.startNo += 500;
            postSeries.init()
        } else {
            postSeries.showPost()
        }
    })
};
(function() {
    var f = function() {
            var h = jQuery,
                i = h("link[rel='service.post']")
                .attr("href")
                .replace("default", "summary"),
                j = h(".post-body")
                .attr("id")
                .replace("post-body-", ""),
                g = i + "/" + j + "?alt=json-in-script&callback=?";
            h.getJSON(g, function(o) {
                var p = o.entry.category,
                    k = p.length,
                    m = postSeries.labelSet,
                    n;
                for (n = 0; n < k; n++) {
                    m[n] = p[n].term
                }
                postSeries.init()
            })
        },
        a = function(g, h) {
            var i = document.createElement("script");
            if (i.readyState) {
                i.onreadystatechange = function() {
                    if (i.readyState == "loaded" || i.readyState == "complete") {
                        i.onreadystatechange = null;
                        if (h) {
                            h()
                        }
                    }
                }
            } else {
                i.onload = function() {
                    if (h) {
                        h()
                    }
                }
            }
            i.src = g;
            document.documentElement.firstChild.appendChild(i)
        },
        c = function() {
            a("http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js", f)
        };
    if (typeof jQuery === "undefined") {
        c()
    } else {
        var b = jQuery()
            .jquery,
            e = b.split("."),
            d = "1.08.2";
        if (e[1] < 10) {
            e[1] = "0" + e[1]
        }
        b = e.join(".");
        if (b < d) {
            c()
        } else {
            f()
        }
    }
})();