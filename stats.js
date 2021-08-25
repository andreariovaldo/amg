var wau_w_col = wau_w_col || "c4302bffffff";
var wau_w_siz = wau_w_siz || "big";
(function(f, a) {
    f = f || "docReady";
    a = a || window;
    var g = [];
    var b = false;
    var e = false;

    function d() {
        if (!b) {
            b = true;
            for (var h = 0; h < g.length; h++) {
                g[h].fn.call(window, g[h].ctx)
            }
            g = []
        }
    }

    function c() {
        if (document.readyState === "complete") {
            d()
        }
    }
    a[f] = function(i, h) {
        if (typeof i !== "function") {
            throw new TypeError("callback for docReady(fn) must be a function")
        }
        if (b) {
            setTimeout(function() {
                i(h)
            }, 1);
            return
        } else {
            g.push({
                fn: i,
                ctx: h
            })
        }
        if (document.readyState === "complete" || (!document.attachEvent && document.readyState === "interactive")) {
            setTimeout(d, 1)
        } else {
            if (!e) {
                if (document.addEventListener) {
                    document.addEventListener("DOMContentLoaded", d, false);
                    window.addEventListener("load", d, false)
                } else {
                    document.attachEvent("onreadystatechange", c);
                    window.attachEvent("onload", d)
                }
                e = true
            }
        }
    }
})("docReady", window);
if (typeof _wau !== "undefined") {
    var WAU_ren = WAU_ren || [];
    docReady(function() {
        WAU_la()
    })
}

function WAU_dynamic(d, b, c, f) {
    if (typeof f === "undefined") {
        var f = -1;
        wau_w_col = b;
        wau_w_siz = c
    }
    var a = "";
    if (document.title) {
        a = encodeURIComponent(document.title.substr(0, 80).replace(/(\?=)|(\/)/g, ""))
    }
    var e = document.getElementsByTagName("script")[0];
    (function() {
        var h = encodeURIComponent(document.referrer);
        var g = document.createElement("script");
        g.async = "async";
        g.type = "text/javascript";
        g.src = "//whos.amung.us/pingjs/?k=" + d + "&t=" + a + "&c=d&y=" + h + "&a=" + f + "&r=" + Math.ceil(Math.random() * 9999);
        e.parentNode.insertBefore(g, e)
    })()
}


function WAU_r_d(t, y, j) {
    if (typeof j === "undefined") {
        var j = -1;
        var e = wau_w_col;
        var o = wau_w_siz
    } else {
        if (j != -1) {
            var e = _wau[j][3];
            var o = _wau[j][4]
        }
    }
    t = parseInt(t.replace(/,/g, ""));
    t = WAU_addCommas(t);
    if (o == "big") {
        var v = 175;
        var g = 40;
        var f = 24;
        var l = 32;
        var b = 44;
        var s = "0 0 0 75px"
    } else {
        var v = 110;
        var g = 30;
        var f = 18;
        var l = 23;
        var b = 32;
        var s = "0 0 0 55px"
    }
    var h = "";
    var k = '',
        d = document.head || document.getElementsByTagName("head")[0],
        q = document.createElement("style");
    q.type = "text/css";
    if (q.styleSheet) {
        q.styleSheet.cssText = k
    } else {
        q.appendChild(document.createTextNode(k))
    }
    d.appendChild(q);
    var u = document.createElement("a");
    u.href = "//whos.amung.us/stats/" + y + "/";
    u.className = "waubutton wau push";
    u.style.backgroundColor = "#" + e.substring(0, 6);
    u.style.width = v + "px";
    u.style.height = g + "px";
    u.style.lineHeight = g + "px";
    u.style.textAlign = "left";
    u.title = "Click to see what's popular on this site!";
    var n = document.createElement("span");
    var m = document.createElement("p");
    m.style.fontSize = f + "px";
    m.style.margin = s;
    m.style.color = "#" + e.substring(6, 12);
    var w = document.createElement("img");
    w.src = h;
    w.style.height = l + "px";
    w.style.width = b + "px";
    var i = document.createTextNode(t);
    m.appendChild(i);
    n.appendChild(w);
    u.appendChild(n);
    u.appendChild(m);
    if (j >= 0) {
        var r = document.getElementById("_wau" + _wau[j][2]);
        r.parentNode.insertBefore(u, r.nextSibling)
    } else {
        WAU_insert(u, "amung.us/dynamic.js")
    }
    if (typeof WAU_cps_d == "undefined") {
        //WAU_cps(y)
    }}


function WAU_insert(c, d) {
    var a = document.getElementsByTagName("script");
    for (var b = 0; b < a.length; b++) {
        if (a[b].src.indexOf(d) > 0) {
            a[b].parentNode.insertBefore(c, a[b].nextSibling)
        }
    }
}

function WAU_la() {
    for (var a = 0; a < _wau.length; a++) {
        if (typeof WAU_ren[a] === "undefined" || WAU_ren[a] == false) {
            if (typeof window["WAU_" + _wau[a][0]] === "function") {
                WAU_ren[a] = true;
                if (_wau[a][0] == "map") {
                    window.WAU_map(_wau[a][1], _wau[a][3], _wau[a][4], _wau[a][5], _wau[a][6], a)
                } else {
                    if (_wau[a][0] == "dynamic") {
                        window.WAU_dynamic(_wau[a][1], _wau[a][3], _wau[a][4], a)
                    } else {
                        if (typeof _wau[a][3] !== "undefined") {
                            window["WAU_" + _wau[a][0]](_wau[a][1], _wau[a][3], a)
                        } else {
                            window["WAU_" + _wau[a][0]](_wau[a][1], a)
                        }
                    }
                }
            } else {
                setTimeout(WAU_la, 1000)
            }
        }
    }
}

function WAU_addCommas(b) {
    b += "";
    x = b.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? "." + x[1] : "";
    var a = /(\d+)(\d{3})/;
    while (a.test(x1)) {
        x1 = x1.replace(a, "$1,$2")
    }
    return x1 + x2
}

function WAU_lrd() {
    var f = new Date();
    var a = f.getTimezoneOffset();
    var b = f._isDstObserved();
    if (typeof Intl === "undefined" || typeof Intl.DateTimeFormat === "undefined") {
        if ((b && a >= -120 && a <= -60) || (!b && a >= -60 && a <= 0)) {
            return false
        }
    } else {
        var e = Intl.DateTimeFormat();
        var g = e.resolvedOptions().timeZone;
        var c = g.toLowerCase().split("/");
        if (c[0] == "europe" && ((b && a >= -120 && a <= -60) || (!b && a >= -60 && a <= 0))) {
            return false
        }
    }
    return true
}
Date.prototype._stdTimezoneOffset = function() {
    var a = new Date(this.getFullYear(), 0, 1);
    var b = new Date(this.getFullYear(), 6, 1);
    return Math.max(a.getTimezoneOffset(), b.getTimezoneOffset())
};
Date.prototype._isDstObserved = function() {
    return this.getTimezoneOffset() < this._stdTimezoneOffset()
};
