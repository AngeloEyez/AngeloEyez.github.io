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
    for (e = 0; e < c; e++) {
        d[e] = [k[e], h[e]]
    }
    d.sort();
    a = (a.search("http") < 0) ? a : "<img src='" + a + "'/>";
    np = (np <= 3) ? 3 : np; //文章數至少3
    npt = Math.round(np/2)-1; //pointer上方文章數
    npb = (np%2 == 0) ? np/2 : (np-1)/2; //pointer下方文章數
    pointerfound = false; 
    ee=0;

    g += "<ul>";
    for (e = 0; e < c; e++) {
        b = d[e][1];
        var _0x9e96 = ["search", "<li><a href=\'", "\' target=\'_blank\'>", "</a></li>", "<li>", "&#12288;<a href=\'http://www.wfublog.com/2014/06/blogger-post-series.html\' target=\'_blank\' style=\'text-decoration: none;\' title=\'Blogger 系列文\x0A程式設計：WFU BLOG\'>"];
        if (b[_0x9e96[0]](j) < 0) {
            if (pointerfound && npb >0) {
                g += _0x9e96[1] + b + _0x9e96[2] + d[e][0] + _0x9e96[3];
                npb--;
            }            
        } else {
            pointerfound = true;
            if ((npt-e) > 0){npb += npt-e; npt = e;} //前面文章數不夠就用後面的補齊
            if (c-e <= npb){npt+=npb-(c-e-1); npb = c-e-1;} //後面文章數不夠，用前面補齊
            for (nn = npt; nn>0; nn--) {
                g += _0x9e96[1] + d[e-nn][1] + _0x9e96[2] + d[e-nn][0] + _0x9e96[3];
            }
            g += _0x9e96[4] + d[e][0] + _0x9e96[5] + a + _0x9e96[3];
        };
    }
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