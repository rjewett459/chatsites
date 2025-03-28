/*!
 * jQuery JavaScript Library v1.11.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:42Z
 */
function executePPGA() {
    (function(e, t, n, i, r, o, s) {
        e.GoogleAnalyticsObject = r,
        e[r] = e[r] || function() {
            (e[r].q = e[r].q || []).push(arguments)
        }
        ,
        e[r].l = 1 * new Date,
        o = t.createElement(n),
        s = t.getElementsByTagName(n)[0],
        o.async = 1,
        o.src = i,
        s.parentNode.insertBefore(o, s)
    }
    )(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"),
    ga("create", "UA-17500630-1", "iubenda.com"),
    ga("set", "anonymizeIp", !0),
    ga("send", "pageview"),
    window.onerror = function(e, t, n) {
        var i = "[" + t + " (" + n + ")] " + e;
        ga("send", "event", "Exceptions", "Application", i, opt_value, {
            nonInteraction: 1
        })
    }
}
function executeOtherTrackingAnalytics(e) {
    var e = e || {}
      , t = e.kissmetrics != 0
      , n = e.piwik != 0;
    if (t) {
        var i = document.createElement("script");
        i.type = "test/javascript",
        i.text = "var _kmq = _kmq || [];(function(){function _kms(u,d){if(navigator.appName.indexOf(\"Microsoft\")==0 && d)document.write(\"<scr\"+\"ipt defer='defer' async='true' src='\"+u+\"'></scr\"+\"ipt>\");else{var s=document.createElement('script');s.type='text/javascript';s.async=true;s.src=u;(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(s);}}_kms('https://i.kissmetrics.com/i.js');_kms('http'+('https:'==document.location.protocol ? 's://s3.amazonaws.com/' : '://')+'scripts.kissmetrics.com/5b10867d44c6f53e91021bcf35bf0044e6607d57.1.js',1);})();",
        $("head").append(i)
    }
    if (n) {
        var i = document.createElement("script");
        i.type = "test/javascript",
        i.text = "var _paq = _paq || [];		_paq.push([\"setDocumentTitle\", document.domain + \"/\" + document.title]);		_paq.push([\"setCookieDomain\", \"*.iubenda.com\"]);		_paq.push([\"setDomains\", [\"*.iubenda.com\"]]);		_paq.push(['trackPageView']);		_paq.push(['enableLinkTracking']);		(function() {		var u=\"//athena.iubenda.com/\";		_paq.push(['setTrackerUrl', u+'piwik.php']);		_paq.push(['setSiteId', 1]);		var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];		g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);		})();",
        $("body").append(i)
    }
}
function getParameterByName(e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var t = new RegExp("[\\?&]" + e + "=([^&#]*)")
      , n = t.exec(location.search);
    return null == n ? null : decodeURIComponent(n[1].replace(/\+/g, " "))
}
function insertStylesheet(e) {
    var t = document.getElementsByTagName("head")[0]
      , n = document.createElement("style");
    n.type = "text/css",
    n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e)),
    t.appendChild(n)
}
function isMobile() {
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())
}
(function(e, t) {
    "object" == typeof module && typeof module.exports == "object" ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}
)("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length
          , n = rt.type(e);
        return "function" === n || rt.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function i(e, t, n) {
        if (rt.isFunction(t))
            return rt.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
        if (t.nodeType)
            return rt.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (pt.test(t))
                return rt.filter(t, e, n);
            t = rt.filter(t, e)
        }
        return rt.grep(e, function(e) {
            return rt.inArray(e, t) >= 0 !== n
        })
    }
    function r(e, t) {
        do
            e = e[t];
        while (e && e.nodeType !== 1);
        return e
    }
    function o(e) {
        var t = xt[e] = {};
        return rt.each(e.match(bt) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function s() {
        ft.addEventListener ? (ft.removeEventListener("DOMContentLoaded", a, !1),
        e.removeEventListener("load", a, !1)) : (ft.detachEvent("onreadystatechange", a),
        e.detachEvent("onload", a))
    }
    function a() {
        (ft.addEventListener || event.type === "load" || ft.readyState === "complete") && (s(),
        rt.ready())
    }
    function l(e, t, n) {
        if (void 0 === n && e.nodeType === 1) {
            var i = "data-" + t.replace(St, "-$1").toLowerCase();
            if (n = e.getAttribute(i),
            "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : kt.test(n) ? rt.parseJSON(n) : n
                } catch (r) {}
                rt.data(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    function c(e) {
        var t;
        for (t in e)
            if (("data" !== t || !rt.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function u(e, t, n, i) {
        if (rt.acceptData(e)) {
            var r, o, s = rt.expando, a = e.nodeType, l = a ? rt.cache : e, c = a ? e[s] : e[s] && s;
            if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t)
                return c || (c = a ? e[s] = V.pop() || rt.guid++ : s),
                l[c] || (l[c] = a ? {} : {
                    toJSON: rt.noop
                }),
                ("object" == typeof t || "function" == typeof t) && (i ? l[c] = rt.extend(l[c], t) : l[c].data = rt.extend(l[c].data, t)),
                o = l[c],
                i || (o.data || (o.data = {}),
                o = o.data),
                void 0 !== n && (o[rt.camelCase(t)] = n),
                "string" == typeof t ? (r = o[t],
                null == r && (r = o[rt.camelCase(t)])) : r = o,
                r
        }
    }
    function d(e, t, n) {
        if (rt.acceptData(e)) {
            var i, r, o = e.nodeType, s = o ? rt.cache : e, a = o ? e[rt.expando] : rt.expando;
            if (s[a]) {
                if (t && (i = n ? s[a] : s[a].data)) {
                    rt.isArray(t) ? t = t.concat(rt.map(t, rt.camelCase)) : t in i ? t = [t] : (t = rt.camelCase(t),
                    t = t in i ? [t] : t.split(" ")),
                    r = t.length;
                    for (; r--; )
                        delete i[t[r]];
                    if (n ? !c(i) : !rt.isEmptyObject(i))
                        return
                }
                (n || (delete s[a].data,
                c(s[a]))) && (o ? rt.cleanData([e], !0) : nt.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
            }
        }
    }
    function p() {
        return !0
    }
    function h() {
        return !1
    }
    function f() {
        try {
            return ft.activeElement
        } catch (e) {}
    }
    function m(e) {
        var t = qt.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    function g(e, t) {
        var n, i, r = 0, o = typeof e.getElementsByTagName !== Et ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Et ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [],
            n = e.childNodes || e; (i = n[r]) != null; r++)
                !t || rt.nodeName(i, t) ? o.push(i) : rt.merge(o, g(i, t));
        return void 0 === t || t && rt.nodeName(e, t) ? rt.merge([e], o) : o
    }
    function v(e) {
        Dt.test(e.type) && (e.defaultChecked = e.checked)
    }
    function y(e, t) {
        return rt.nodeName(e, "table") && rt.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function b(e) {
        return e.type = (rt.find.attr(e, "type") !== null) + "/" + e.type,
        e
    }
    function x(e) {
        var t = Ut.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function w(e, t) {
        for (var n, i = 0; (n = e[i]) != null; i++)
            rt._data(n, "globalEval", !t || rt._data(t[i], "globalEval"))
    }
    function T(e, t) {
        if (t.nodeType === 1 && rt.hasData(e)) {
            var n, i, r, o = rt._data(e), s = rt._data(t, o), a = o.events;
            if (a) {
                delete s.handle,
                s.events = {};
                for (n in a)
                    for (i = 0,
                    r = a[n].length; r > i; i++)
                        rt.event.add(t, n, a[n][i])
            }
            s.data && (s.data = rt.extend({}, s.data))
        }
    }
    function E(e, t) {
        var n, i, r;
        if (t.nodeType === 1) {
            if (n = t.nodeName.toLowerCase(),
            !nt.noCloneEvent && t[rt.expando]) {
                r = rt._data(t);
                for (i in r.events)
                    rt.removeEvent(t, i, r.handle);
                t.removeAttribute(rt.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text,
            x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            nt.html5Clone && e.innerHTML && !rt.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Dt.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function k(t, n) {
        var i, r = rt(n.createElement(t)).appendTo(n.body), o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : rt.css(r[0], "display");
        return r.detach(),
        o
    }
    function S(e) {
        var t = ft
          , n = Zt[e];
        return n || (n = k(e, t),
        "none" !== n && n || (Qt = (Qt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
        t = (Qt[0].contentWindow || Qt[0].contentDocument).document,
        t.write(),
        t.close(),
        n = k(e, t),
        Qt.detach()),
        Zt[e] = n),
        n
    }
    function C(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n)
                    return n ? (delete this.get,
                    void 0) : (this.get = t).apply(this, arguments)
            }
        }
    }
    function N(e, t) {
        if (t in e)
            return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = hn.length; r--; )
            if (t = hn[r] + n,
            t in e)
                return t;
        return i
    }
    function A(e, t) {
        for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++)
            i = e[s],
            i.style && (o[s] = rt._data(i, "olddisplay"),
            n = i.style.display,
            t ? (o[s] || "none" !== n || (i.style.display = ""),
            i.style.display === "" && At(i) && (o[s] = rt._data(i, "olddisplay", S(i.nodeName)))) : (r = At(i),
            (n && "none" !== n || !r) && rt._data(i, "olddisplay", r ? n : rt.css(i, "display"))));
        for (s = 0; a > s; s++)
            i = e[s],
            i.style && (t && i.style.display !== "none" && i.style.display !== "" || (i.style.display = t ? o[s] || "" : "none"));
        return e
    }
    function _(e, t, n) {
        var i = cn.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    function D(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)
            "margin" === n && (s += rt.css(e, n + Nt[o], !0, r)),
            i ? ("content" === n && (s -= rt.css(e, "padding" + Nt[o], !0, r)),
            "margin" !== n && (s -= rt.css(e, "border" + Nt[o] + "Width", !0, r))) : (s += rt.css(e, "padding" + Nt[o], !0, r),
            "padding" !== n && (s += rt.css(e, "border" + Nt[o] + "Width", !0, r)));
        return s
    }
    function P(e, t, n) {
        var i = !0
          , r = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = en(e)
          , s = nt.boxSizing && rt.css(e, "boxSizing", !1, o) === "border-box";
        if (0 >= r || null == r) {
            if (r = tn(e, t, o),
            (0 > r || null == r) && (r = e.style[t]),
            rn.test(r))
                return r;
            i = s && (nt.boxSizingReliable() || r === e.style[t]),
            r = parseFloat(r) || 0
        }
        return r + D(e, t, n || (s ? "border" : "content"), i, o) + "px"
    }
    function j(e, t, n, i, r) {
        return new j.prototype.init(e,t,n,i,r)
    }
    function L() {
        return setTimeout(function() {
            fn = void 0
        }),
        fn = rt.now()
    }
    function H(e, t) {
        var n, i = {
            height: e
        }, r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)
            n = Nt[r],
            i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function M(e, t, n) {
        for (var i, r = (xn[t] || []).concat(xn["*"]), o = 0, s = r.length; s > o; o++)
            if (i = r[o].call(n, t, e))
                return i
    }
    function q(e, t, n) {
        var i, r, o, s, a, l, c, u, d = this, p = {}, h = e.style, f = e.nodeType && At(e), m = rt._data(e, "fxshow");
        n.queue || (a = rt._queueHooks(e, "fx"),
        a.unqueued == null && (a.unqueued = 0,
        l = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || l()
        }
        ),
        a.unqueued++,
        d.always(function() {
            d.always(function() {
                a.unqueued--,
                rt.queue(e, "fx").length || a.empty.fire()
            })
        })),
        e.nodeType === 1 && ("height"in t || "width"in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
        c = rt.css(e, "display"),
        u = "none" === c ? rt._data(e, "olddisplay") || S(e.nodeName) : c,
        "inline" === u && rt.css(e, "float") === "none" && (nt.inlineBlockNeedsLayout && S(e.nodeName) !== "inline" ? h.zoom = 1 : h.display = "inline-block")),
        n.overflow && (h.overflow = "hidden",
        nt.shrinkWrapBlocks() || d.always(function() {
            h.overflow = n.overflow[0],
            h.overflowX = n.overflow[1],
            h.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i],
            gn.exec(r)) {
                if (delete t[i],
                o = o || "toggle" === r,
                r === (f ? "hide" : "show")) {
                    if ("show" !== r || !m || m[i] === void 0)
                        continue;
                    f = !0
                }
                p[i] = m && m[i] || rt.style(e, i)
            } else
                c = void 0;
        if (rt.isEmptyObject(p))
            ("none" === c ? S(e.nodeName) : c) === "inline" && (h.display = c);
        else {
            m ? "hidden"in m && (f = m.hidden) : m = rt._data(e, "fxshow", {}),
            o && (m.hidden = !f),
            f ? rt(e).show() : d.done(function() {
                rt(e).hide()
            }),
            d.done(function() {
                var t;
                rt._removeData(e, "fxshow");
                for (t in p)
                    rt.style(e, t, p[t])
            });
            for (i in p)
                s = M(f ? m[i] : 0, i, d),
                i in m || (m[i] = s.start,
                f && (s.end = s.start,
                s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function O(e, t) {
        var n, i, r, o, s;
        for (n in e)
            if (i = rt.camelCase(n),
            r = t[i],
            o = e[n],
            rt.isArray(o) && (r = o[1],
            o = e[n] = o[0]),
            n !== i && (e[i] = o,
            delete e[n]),
            s = rt.cssHooks[i],
            s && "expand"in s) {
                o = s.expand(o),
                delete e[i];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = r)
            } else
                t[i] = r
    }
    function F(e, t, n) {
        var i, r, o = 0, s = bn.length, a = rt.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (r)
                return !1;
            for (var t = fn || L(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, s = 0, l = c.tweens.length; l > s; s++)
                c.tweens[s].run(o);
            return a.notifyWith(e, [c, o, n]),
            1 > o && l ? n : (a.resolveWith(e, [c]),
            !1)
        }, c = a.promise({
            elem: e,
            props: rt.extend({}, t),
            opts: rt.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: fn || L(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = rt.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , i = t ? c.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; i > n; n++)
                    c.tweens[n].run(1);
                return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]),
                this
            }
        }), u = c.props;
        for (O(u, c.opts.specialEasing); s > o; o++)
            if (i = bn[o].call(c, e, u, c.opts))
                return i;
        return rt.map(u, M, c),
        rt.isFunction(c.opts.start) && c.opts.start.call(e, c),
        rt.fx.timer(rt.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function B(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var i, r = 0, o = t.toLowerCase().match(bt) || [];
            if (rt.isFunction(n))
                for (; i = o[r++]; )
                    i.charAt(0) === "+" ? (i = i.slice(1) || "*",
                    (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function z(e, t, n, i) {
        function r(a) {
            var l;
            return o[a] = !0,
            rt.each(e[a] || [], function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                r(c),
                !1)
            }),
            l
        }
        var o = {}
          , s = e === In;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }
    function R(e, t) {
        var n, i, r = rt.ajaxSettings.flatOptions || {};
        for (i in t)
            t[i] !== void 0 && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && rt.extend(!0, e, n),
        e
    }
    function W(e, t, n) {
        for (var i, r, o, s, a = e.contents, l = e.dataTypes; l[0] === "*"; )
            l.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (s in a)
                if (a[s] && a[s].test(r)) {
                    l.unshift(s);
                    break
                }
        if (l[0]in n)
            o = l[0];
        else {
            for (s in n) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    o = s;
                    break
                }
                i || (i = s)
            }
            o = o || i
        }
        return o ? (o !== l[0] && l.unshift(o),
        n[o]) : void 0
    }
    function X(e, t, n, i) {
        var r, o, s, a, l, c = {}, u = e.dataTypes.slice();
        if (u[1])
            for (s in e.converters)
                c[s.toLowerCase()] = e.converters[s];
        for (o = u.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = o,
            o = u.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (s = c[l + " " + o] || c["* " + o],
                    !s)
                        for (r in c)
                            if (a = r.split(" "),
                            a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0],
                                u.unshift(a[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && e["throws"])
                            t = s(t);
                        else
                            try {
                                t = s(t)
                            } catch (d) {
                                return {
                                    state: "parsererror",
                                    error: s ? d : "No conversion from " + l + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function I(e, t, n, i) {
        var r;
        if (rt.isArray(t))
            rt.each(t, function(t, r) {
                n || Vn.test(e) ? i(e, r) : I(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
        else if (n || rt.type(t) !== "object")
            i(e, t);
        else
            for (r in t)
                I(e + "[" + r + "]", t[r], n, i)
    }
    function $() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function Y() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function U(e) {
        return rt.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var V = []
      , K = V.slice
      , J = V.concat
      , G = V.push
      , Q = V.indexOf
      , Z = {}
      , et = Z.toString
      , tt = Z.hasOwnProperty
      , nt = {}
      , it = "1.11.1"
      , rt = function(e, t) {
        return new rt.fn.init(e,t)
    }
      , ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , st = /^-ms-/
      , at = /-([\da-z])/gi
      , lt = function(e, t) {
        return t.toUpperCase()
    };
    rt.fn = rt.prototype = {
        jquery: it,
        constructor: rt,
        selector: "",
        length: 0,
        toArray: function() {
            return K.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : K.call(this)
        },
        pushStack: function(e) {
            var t = rt.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return rt.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(rt.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(K.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: G,
        sort: V.sort,
        splice: V.splice
    },
    rt.extend = rt.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || rt.isFunction(s) || (s = {}),
        a === l && (s = this,
        a--); l > a; a++)
            if ((r = arguments[a]) != null)
                for (i in r)
                    e = s[i],
                    n = r[i],
                    s !== n && (c && n && (rt.isPlainObject(n) || (t = rt.isArray(n))) ? (t ? (t = !1,
                    o = e && rt.isArray(e) ? e : []) : o = e && rt.isPlainObject(e) ? e : {},
                    s[i] = rt.extend(c, o, n)) : void 0 !== n && (s[i] = n));
        return s
    }
    ,
    rt.extend({
        expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return rt.type(e) === "function"
        },
        isArray: Array.isArray || function(e) {
            return rt.type(e) === "array"
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !rt.isArray(e) && e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || rt.type(e) !== "object" || e.nodeType || rt.isWindow(e))
                return !1;
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            if (nt.ownLast)
                for (t in e)
                    return tt.call(e, t);
            for (t in e)
                ;
            return void 0 === t || tt.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[et.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && rt.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(st, "ms-").replace(at, lt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var r, o = 0, s = e.length, a = n(e);
            if (i) {
                if (a)
                    for (; s > o && (r = t.apply(e[o], i),
                    r !== !1); o++)
                        ;
                else
                    for (o in e)
                        if (r = t.apply(e[o], i),
                        r === !1)
                            break
            } else if (a)
                for (; s > o && (r = t.call(e[o], o, e[o]),
                r !== !1); o++)
                    ;
            else
                for (o in e)
                    if (r = t.call(e[o], o, e[o]),
                    r === !1)
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ot, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? rt.merge(i, "string" == typeof e ? [e] : e) : G.call(i, e)),
            i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (Q)
                    return Q.call(t, e, n);
                for (i = t.length,
                n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i; )
                e[r++] = t[i++];
            if (n !== n)
                for (; t[i] !== void 0; )
                    e[r++] = t[i++];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            for (var i, r = [], o = 0, s = e.length, a = !n; s > o; o++)
                i = !t(e[o], o),
                i !== a && r.push(e[o]);
            return r
        },
        map: function(e, t, i) {
            var r, o = 0, s = e.length, a = n(e), l = [];
            if (a)
                for (; s > o; o++)
                    r = t(e[o], o, i),
                    null != r && l.push(r);
            else
                for (o in e)
                    r = t(e[o], o, i),
                    null != r && l.push(r);
            return J.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (r = e[t],
            t = e,
            e = r),
            rt.isFunction(e) ? (n = K.call(arguments, 2),
            i = function() {
                return e.apply(t || this, n.concat(K.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || rt.guid++,
            i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: nt
    }),
    rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ct = /*!
 * Sizzle CSS Selector Engine v1.10.19
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-04-18
 */
    function(e) {
        function t(e, t, n, i) {
            var r, o, s, a, l, c, d, h, f, m;
            if ((t ? t.ownerDocument || t : z) !== j && P(t),
            t = t || j,
            n = n || [],
            !e || "string" != typeof e)
                return n;
            if ((a = t.nodeType) !== 1 && 9 !== a)
                return [];
            if (H && !i) {
                if (r = yt.exec(e))
                    if (s = r[1]) {
                        if (9 === a) {
                            if (o = t.getElementById(s),
                            !o || !o.parentNode)
                                return n;
                            if (o.id === s)
                                return n.push(o),
                                n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && F(t, o) && o.id === s)
                            return n.push(o),
                            n
                    } else {
                        if (r[2])
                            return Z.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((s = r[3]) && w.getElementsByClassName && t.getElementsByClassName)
                            return Z.apply(n, t.getElementsByClassName(s)),
                            n
                    }
                if (w.qsa && (!M || !M.test(e))) {
                    if (h = d = B,
                    f = t,
                    m = 9 === a && e,
                    1 === a && t.nodeName.toLowerCase() !== "object") {
                        for (c = S(e),
                        (d = t.getAttribute("id")) ? h = d.replace(xt, "\\$&") : t.setAttribute("id", h),
                        h = "[id='" + h + "'] ",
                        l = c.length; l--; )
                            c[l] = h + p(c[l]);
                        f = bt.test(e) && u(t.parentNode) || t,
                        m = c.join(",")
                    }
                    if (m)
                        try {
                            return Z.apply(n, f.querySelectorAll(m)),
                            n
                        } catch (g) {} finally {
                            d || t.removeAttribute("id")
                        }
                }
            }
            return N(e.replace(lt, "$1"), t, n, i)
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()],
                e[n + " "] = i
            }
            var t = [];
            return e
        }
        function i(e) {
            return e[B] = !0,
            e
        }
        function r(e) {
            var t = j.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), i = e.length; i--; )
                T.attrHandle[n[i]] = t
        }
        function s(e, t) {
            var n = t && e
              , i = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function c(e) {
            return i(function(t) {
                return t = +t,
                i(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--; )
                        n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function u(e) {
            return e && typeof e.getElementsByTagName !== U && e
        }
        function d() {}
        function p(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++)
                i += e[t].value;
            return i
        }
        function h(e, t, n) {
            var i = t.dir
              , r = n && "parentNode" === i
              , o = W++;
            return t.first ? function(t, n, o) {
                for (; t = t[i]; )
                    if (t.nodeType === 1 || r)
                        return e(t, n, o)
            }
            : function(t, n, s) {
                var a, l, c = [R, o];
                if (s) {
                    for (; t = t[i]; )
                        if ((t.nodeType === 1 || r) && e(t, n, s))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (t.nodeType === 1 || r) {
                            if (l = t[B] || (t[B] = {}),
                            (a = l[i]) && a[0] === R && a[1] === o)
                                return c[2] = a[2];
                            if (l[i] = c,
                            c[2] = e(t, n, s))
                                return !0
                        }
            }
        }
        function f(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--; )
                    if (!e[r](t, n, i))
                        return !1;
                return !0
            }
            : e[0]
        }
        function m(e, n, i) {
            for (var r = 0, o = n.length; o > r; r++)
                t(e, n[r], i);
            return i
        }
        function g(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; l > a; a++)
                (o = e[a]) && (!n || n(o, i, r)) && (s.push(o),
                c && t.push(a));
            return s
        }
        function v(e, t, n, r, o, s) {
            return r && !r[B] && (r = v(r)),
            o && !o[B] && (o = v(o, s)),
            i(function(i, s, a, l) {
                var c, u, d, p = [], h = [], f = s.length, v = i || m(t || "*", a.nodeType ? [a] : a, []), y = !e || !i && t ? v : g(v, p, e, a, l), b = n ? o || (i ? e : f || r) ? [] : s : y;
                if (n && n(y, b, a, l),
                r)
                    for (c = g(b, h),
                    r(c, [], a, l),
                    u = c.length; u--; )
                        (d = c[u]) && (b[h[u]] = !(y[h[u]] = d));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (c = [],
                            u = b.length; u--; )
                                (d = b[u]) && c.push(y[u] = d);
                            o(null, b = [], c, l)
                        }
                        for (u = b.length; u--; )
                            (d = b[u]) && (c = o ? tt.call(i, d) : p[u]) > -1 && (i[c] = !(s[c] = d))
                    }
                } else
                    b = g(b === s ? b.splice(f, b.length) : b),
                    o ? o(null, s, b, l) : Z.apply(s, b)
            })
        }
        function y(e) {
            for (var t, n, i, r = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, l = h(function(e) {
                return e === t
            }, s, !0), c = h(function(e) {
                return tt.call(t, e) > -1
            }, s, !0), u = [function(e, n, i) {
                return !o && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
            }
            ]; r > a; a++)
                if (n = T.relative[e[a].type])
                    u = [h(f(u), n)];
                else {
                    if (n = T.filter[e[a].type].apply(null, e[a].matches),
                    n[B]) {
                        for (i = ++a; r > i && !T.relative[e[i].type]; i++)
                            ;
                        return v(a > 1 && f(u), a > 1 && p(e.slice(0, a - 1).concat({
                            value: e[a - 2].type === " " ? "*" : ""
                        })).replace(lt, "$1"), n, i > a && y(e.slice(a, i)), r > i && y(e = e.slice(i)), r > i && p(e))
                    }
                    u.push(n)
                }
            return f(u)
        }
        function b(e, n) {
            var r = n.length > 0
              , o = e.length > 0
              , s = function(i, s, a, l, c) {
                var u, d, p, h = 0, f = "0", m = i && [], v = [], y = A, b = i || o && T.find.TAG("*", c), x = R += null == y ? 1 : Math.random() || .1, w = b.length;
                for (c && (A = s !== j && s); f !== w && (u = b[f]) != null; f++) {
                    if (o && u) {
                        for (d = 0; p = e[d++]; )
                            if (p(u, s, a)) {
                                l.push(u);
                                break
                            }
                        c && (R = x)
                    }
                    r && ((u = !p && u) && h--,
                    i && m.push(u))
                }
                if (h += f,
                r && f !== h) {
                    for (d = 0; p = n[d++]; )
                        p(m, v, s, a);
                    if (i) {
                        if (h > 0)
                            for (; f--; )
                                m[f] || v[f] || (v[f] = G.call(l));
                        v = g(v)
                    }
                    Z.apply(l, v),
                    c && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                }
                return c && (R = x,
                A = y),
                m
            };
            return r ? i(s) : s
        }
        var x, w, T, E, k, S, C, N, A, _, D, P, j, L, H, M, q, O, F, B = "sizzle" + -new Date, z = e.document, R = 0, W = 0, X = n(), I = n(), $ = n(), Y = function(e, t) {
            return e === t && (D = !0),
            0
        }, U = "undefined", V = 1 << 31, K = {}.hasOwnProperty, J = [], G = J.pop, Q = J.push, Z = J.push, et = J.slice, tt = J.indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
        , nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", it = "[\\x20\\t\\r\\n\\f]", rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ot = rt.replace("w", "w#"), st = "\\[" + it + "*(" + rt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + it + "*\\]", at = ":(" + rt + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|" + ".*" + ")\\)|)", lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$","g"), ct = new RegExp("^" + it + "*," + it + "*"), ut = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"), dt = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]","g"), pt = new RegExp(at), ht = new RegExp("^" + ot + "$"), ft = {
            ID: new RegExp("^#(" + rt + ")"),
            CLASS: new RegExp("^\\.(" + rt + ")"),
            TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + st),
            PSEUDO: new RegExp("^" + at),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)","i"),
            bool: new RegExp("^(?:" + nt + ")$","i"),
            needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)","i")
        }, mt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/, yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, bt = /[+~]/, xt = /'|\\/g, wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)","ig"), Tt = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
        };
        try {
            Z.apply(J = et.call(z.childNodes), z.childNodes),
            J[z.childNodes.length].nodeType
        } catch (Et) {
            Z = {
                apply: J.length ? function(e, t) {
                    Q.apply(e, et.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        w = t.support = {},
        k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }
        ,
        P = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : z, i = n.defaultView;
            return n !== j && n.nodeType === 9 && n.documentElement ? (j = n,
            L = n.documentElement,
            H = !k(n),
            i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                P()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                P()
            })),
            w.attributes = r(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            w.getElementsByTagName = r(function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            w.getElementsByClassName = vt.test(n.getElementsByClassName) && r(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                e.getElementsByClassName("i").length === 2
            }),
            w.getById = r(function(e) {
                return L.appendChild(e).id = B,
                !n.getElementsByName || !n.getElementsByName(B).length
            }),
            w.getById ? (T.find.ID = function(e, t) {
                if (typeof t.getElementById !== U && H) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            T.filter.ID = function(e) {
                var t = e.replace(wt, Tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete T.find.ID,
            T.filter.ID = function(e) {
                var t = e.replace(wt, Tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            T.find.TAG = w.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== U ? t.getElementsByTagName(e) : void 0
            }
            : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++]; )
                        n.nodeType === 1 && i.push(n);
                    return i
                }
                return o
            }
            ,
            T.find.CLASS = w.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== U && H ? t.getElementsByClassName(e) : void 0
            }
            ,
            q = [],
            M = [],
            (w.qsa = vt.test(n.querySelectorAll)) && (r(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowclip^='']").length && M.push("[*^$]=" + it + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || M.push("\\[" + it + "*(?:value|" + nt + ")"),
                e.querySelectorAll(":checked").length || M.push(":checked")
            }),
            r(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && M.push("name" + it + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                M.push(",.*:")
            })),
            (w.matchesSelector = vt.test(O = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(e) {
                w.disconnectedMatch = O.call(e, "div"),
                O.call(e, "[s!='']:x"),
                q.push("!=", at)
            }),
            M = M.length && new RegExp(M.join("|")),
            q = q.length && new RegExp(q.join("|")),
            t = vt.test(L.compareDocumentPosition),
            F = t || vt.test(L.contains) ? function(e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || i.nodeType !== 1 || !(n.contains ? n.contains(i) : e.compareDocumentPosition && e.compareDocumentPosition(i) & 16))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            Y = t ? function(e, t) {
                if (e === t)
                    return D = !0,
                    0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & i || !w.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === z && F(z, e) ? -1 : t === n || t.ownerDocument === z && F(z, t) ? 1 : _ ? tt.call(_, e) - tt.call(_, t) : 0 : 4 & i ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return D = !0,
                    0;
                var i, r = 0, o = e.parentNode, a = t.parentNode, l = [e], c = [t];
                if (!o || !a)
                    return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : _ ? tt.call(_, e) - tt.call(_, t) : 0;
                if (o === a)
                    return s(e, t);
                for (i = e; i = i.parentNode; )
                    l.unshift(i);
                for (i = t; i = i.parentNode; )
                    c.unshift(i);
                for (; l[r] === c[r]; )
                    r++;
                return r ? s(l[r], c[r]) : l[r] === z ? -1 : c[r] === z ? 1 : 0
            }
            ,
            n) : j
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== j && P(e),
            n = n.replace(dt, "='$1']"),
            !(!w.matchesSelector || !H || q && q.test(n) || M && M.test(n)))
                try {
                    var i = O.call(e, n);
                    if (i || w.disconnectedMatch || e.document && e.document.nodeType !== 11)
                        return i
                } catch (r) {}
            return t(n, j, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== j && P(e),
            F(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== j && P(e);
            var n = T.attrHandle[t.toLowerCase()]
              , i = n && K.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== i ? i : w.attributes || !H ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (D = !w.detectDuplicates,
            _ = !w.sortStable && e.slice(0),
            e.sort(Y),
            D) {
                for (; t = e[r++]; )
                    t === e[r] && (i = n.push(r));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return _ = null,
            e
        }
        ,
        E = t.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if (typeof e.textContent == "string")
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += E(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += E(t);
            return n
        }
        ,
        T = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(wt, Tt),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(wt, Tt),
                    e[2] === "~=" && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    e[1].slice(0, 3) === "nth" ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")),
                    e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return ft.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pt.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(wt, Tt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = X[e + " "];
                    return t || (t = new RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && X(e, function(e) {
                        return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : n ? (o += "",
                        "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && o.indexOf(i) === 0 : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = e.slice(0, 3) !== "nth"
                      , s = e.slice(-4) !== "last"
                      , a = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var c, u, d, p, h, f, m = o !== s ? "nextSibling" : "previousSibling", g = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a;
                        if (g) {
                            if (o) {
                                for (; m; ) {
                                    for (d = t; d = d[m]; )
                                        if (a ? d.nodeName.toLowerCase() === v : d.nodeType === 1)
                                            return !1;
                                    f = m = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? g.firstChild : g.lastChild],
                            s && y) {
                                for (u = g[B] || (g[B] = {}),
                                c = u[e] || [],
                                h = c[0] === R && c[1],
                                p = c[0] === R && c[2],
                                d = h && g.childNodes[h]; d = ++h && d && d[m] || (p = h = 0) || f.pop(); )
                                    if (d.nodeType === 1 && ++p && d === t) {
                                        u[e] = [R, h, p];
                                        break
                                    }
                            } else if (y && (c = (t[B] || (t[B] = {}))[e]) && c[0] === R)
                                p = c[1];
                            else
                                for (; (d = ++h && d && d[m] || (p = h = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : d.nodeType !== 1) || !++p || (y && ((d[B] || (d[B] = {}))[e] = [R, p]),
                                d !== t)); )
                                    ;
                            return p -= r,
                            p === i || 0 === p % i && p / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[B] ? o(n) : o.length > 1 ? (r = [e, e, "", n],
                    T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), s = r.length; s--; )
                            i = tt.call(e, r[s]),
                            e[i] = !(t[i] = r[s])
                    }) : function(e) {
                        return o(e, 0, r)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = []
                      , n = []
                      , r = C(e.replace(lt, "$1"));
                    return r[B] ? i(function(e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--; )
                            (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return ht.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(wt, Tt).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || n.indexOf(e + "-") === 0;
                        while ((t = t.parentNode) && t.nodeType === 1);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === L
                },
                focus: function(e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return gt.test(e.nodeName)
                },
                input: function(e) {
                    return mt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && e.type === "button" || "button" === t
                },
                text: function(e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0; )
                        e.push(i);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        },
        T.pseudos.nth = T.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            T.pseudos[x] = a(x);
        for (x in {
            submit: !0,
            reset: !0
        })
            T.pseudos[x] = l(x);
        return d.prototype = T.filters = T.pseudos,
        T.setFilters = new d,
        S = t.tokenize = function(e, n) {
            var i, r, o, s, a, l, c, u = I[e + " "];
            if (u)
                return n ? 0 : u.slice(0);
            for (a = e,
            l = [],
            c = T.preFilter; a; ) {
                (!i || (r = ct.exec(a))) && (r && (a = a.slice(r[0].length) || a),
                l.push(o = [])),
                i = !1,
                (r = ut.exec(a)) && (i = r.shift(),
                o.push({
                    value: i,
                    type: r[0].replace(lt, " ")
                }),
                a = a.slice(i.length));
                for (s in T.filter)
                    !(r = ft[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(),
                    o.push({
                        value: i,
                        type: s,
                        matches: r
                    }),
                    a = a.slice(i.length));
                if (!i)
                    break
            }
            return n ? a.length : a ? t.error(e) : I(e, l).slice(0)
        }
        ,
        C = t.compile = function(e, t) {
            var n, i = [], r = [], o = $[e + " "];
            if (!o) {
                for (t || (t = S(e)),
                n = t.length; n--; )
                    o = y(t[n]),
                    o[B] ? i.push(o) : r.push(o);
                o = $(e, b(r, i)),
                o.selector = e
            }
            return o
        }
        ,
        N = t.select = function(e, t, n, i) {
            var r, o, s, a, l, c = "function" == typeof e && e, d = !i && S(e = c.selector || e);
            if (n = n || [],
            d.length === 1) {
                if (o = d[0] = d[0].slice(0),
                o.length > 2 && (s = o[0]).type === "ID" && w.getById && t.nodeType === 9 && H && T.relative[o[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(wt, Tt), t) || [])[0],
                    !t)
                        return n;
                    c && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (r = ft.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r],
                !T.relative[a = s.type]); )
                    if ((l = T.find[a]) && (i = l(s.matches[0].replace(wt, Tt), bt.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(r, 1),
                        e = i.length && p(o),
                        !e)
                            return Z.apply(n, i),
                            n;
                        break
                    }
            }
            return (c || C(e, d))(i, t, !H, n, bt.test(e) && u(t.parentNode) || t),
            n
        }
        ,
        w.sortStable = B.split("").sort(Y).join("") === B,
        w.detectDuplicates = !!D,
        P(),
        w.sortDetached = r(function(e) {
            return e.compareDocumentPosition(j.createElement("div")) & 1
        }),
        r(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            e.firstChild.getAttribute("href") === "#"
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }),
        w.attributes && r(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            e.firstChild.getAttribute("value") === ""
        }) || o("value", function(e, t, n) {
            return n || e.nodeName.toLowerCase() !== "input" ? void 0 : e.defaultValue
        }),
        r(function(e) {
            return e.getAttribute("disabled") == null
        }) || o(nt, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        t
    }(e);
    rt.find = ct,
    rt.expr = ct.selectors,
    rt.expr[":"] = rt.expr.pseudos,
    rt.unique = ct.uniqueSort,
    rt.text = ct.getText,
    rt.isXMLDoc = ct.isXML,
    rt.contains = ct.contains;
    var ut = rt.expr.match.needsContext
      , dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , pt = /^.[^:#\[\.,]*$/;
    rt.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        t.length === 1 && i.nodeType === 1 ? rt.find.matchesSelector(i, e) ? [i] : [] : rt.find.matches(e, rt.grep(t, function(e) {
            return e.nodeType === 1
        }))
    }
    ,
    rt.fn.extend({
        find: function(e) {
            var t, n = [], i = this, r = i.length;
            if ("string" != typeof e)
                return this.pushStack(rt(e).filter(function() {
                    for (t = 0; r > t; t++)
                        if (rt.contains(i[t], this))
                            return !0
                }));
            for (t = 0; r > t; t++)
                rt.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? rt.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e : e,
            n
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && ut.test(e) ? rt(e) : e || [], !1).length
        }
    });
    var ht, ft = e.document, mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, gt = rt.fn.init = function(e, t) {
        var n, i;
        if (!e)
            return this;
        if ("string" == typeof e) {
            if (n = e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? [null, e, null] : mt.exec(e),
            !n || !n[1] && t)
                return !t || t.jquery ? (t || ht).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof rt ? t[0] : t,
                rt.merge(this, rt.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ft, !0)),
                dt.test(n[1]) && rt.isPlainObject(t))
                    for (n in t)
                        rt.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            if (i = ft.getElementById(n[2]),
            i && i.parentNode) {
                if (i.id !== n[2])
                    return ht.find(e);
                this.length = 1,
                this[0] = i
            }
            return this.context = ft,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : rt.isFunction(e) ? typeof ht.ready != "undefined" ? ht.ready(e) : e(rt) : (e.selector !== void 0 && (this.selector = e.selector,
        this.context = e.context),
        rt.makeArray(e, this))
    }
    ;
    gt.prototype = rt.fn,
    ht = rt(ft);
    var vt = /^(?:parents|prev(?:Until|All))/
      , yt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    rt.extend({
        dir: function(e, t, n) {
            for (var i = [], r = e[t]; r && r.nodeType !== 9 && (void 0 === n || r.nodeType !== 1 || !rt(r).is(n)); )
                r.nodeType === 1 && i.push(r),
                r = r[t];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    }),
    rt.fn.extend({
        has: function(e) {
            var t, n = rt(e, this), i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (rt.contains(this, n[t]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], s = ut.test(e) || "string" != typeof e ? rt(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : n.nodeType === 1 && rt.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? rt.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? rt.inArray(this[0], rt(e)) : rt.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(rt.unique(rt.merge(this.get(), rt(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    rt.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(e) {
            return rt.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return rt.dir(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return rt.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return rt.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return rt.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return rt.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return rt.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return rt.sibling(e.firstChild)
        },
        contents: function(e) {
            return rt.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : rt.merge([], e.childNodes)
        }
    }, function(e, t) {
        rt.fn[e] = function(n, i) {
            var r = rt.map(this, t, n);
            return e.slice(-5) !== "Until" && (i = n),
            i && "string" == typeof i && (r = rt.filter(i, r)),
            this.length > 1 && (yt[e] || (r = rt.unique(r)),
            vt.test(e) && (r = r.reverse())),
            this.pushStack(r)
        }
    });
    var bt = /\S+/g
      , xt = {};
    rt.Callbacks = function(e) {
        e = "string" == typeof e ? xt[e] || o(e) : rt.extend({}, e);
        var t, n, i, r, s, a, l = [], c = !e.once && [], u = function(o) {
            for (n = e.memory && o,
            i = !0,
            s = a || 0,
            a = 0,
            r = l.length,
            t = !0; l && r > s; s++)
                if (l[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                    n = !1;
                    break
                }
            t = !1,
            l && (c ? c.length && u(c.shift()) : n ? l = [] : d.disable())
        }, d = {
            add: function() {
                if (l) {
                    var i = l.length;
                    (function o(t) {
                        rt.each(t, function(t, n) {
                            var i = rt.type(n);
                            "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                        })
                    }
                    )(arguments),
                    t ? r = l.length : n && (a = i,
                    u(n))
                }
                return this
            },
            remove: function() {
                return l && rt.each(arguments, function(e, n) {
                    for (var i; (i = rt.inArray(n, l, i)) > -1; )
                        l.splice(i, 1),
                        t && (r >= i && r--,
                        s >= i && s--)
                }),
                this
            },
            has: function(e) {
                return e ? rt.inArray(e, l) > -1 : !(!l || !l.length)
            },
            empty: function() {
                return l = [],
                r = 0,
                this
            },
            disable: function() {
                return l = c = n = void 0,
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return c = void 0,
                n || d.disable(),
                this
            },
            locked: function() {
                return !c
            },
            fireWith: function(e, n) {
                return !l || i && !c || (n = n || [],
                n = [e, n.slice ? n.slice() : n],
                t ? c.push(n) : u(n)),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return d
    }
    ,
    rt.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", rt.Callbacks("once memory"), "resolved"], ["reject", "fail", rt.Callbacks("once memory"), "rejected"], ["notify", "progress", rt.Callbacks("memory")]]
              , n = "pending"
              , i = {
                state: function() {
                    return n
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return rt.Deferred(function(n) {
                        rt.each(t, function(t, o) {
                            var s = rt.isFunction(e[t]) && e[t];
                            r[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && rt.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? rt.extend(e, i) : i
                }
            }
              , r = {};
            return i.pipe = i.then,
            rt.each(t, function(e, o) {
                var s = o[2]
                  , a = o[3];
                i[o[1]] = s.add,
                a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock),
                r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments),
                    this
                }
                ,
                r[o[0] + "With"] = s.fireWith
            }),
            i.promise(r),
            e && e.call(r, r),
            r
        },
        when: function(e) {
            var t, n, i, r = 0, o = K.call(arguments), s = o.length, a = 1 !== s || e && rt.isFunction(e.promise) ? s : 0, l = 1 === a ? e : rt.Deferred(), c = function(e, n, i) {
                return function(r) {
                    n[e] = this,
                    i[e] = arguments.length > 1 ? K.call(arguments) : r,
                    i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                }
            };
            if (s > 1)
                for (t = new Array(s),
                n = new Array(s),
                i = new Array(s); s > r; r++)
                    o[r] && rt.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, t)) : --a;
            return a || l.resolveWith(i, o),
            l.promise()
        }
    });
    var wt;
    rt.fn.ready = function(e) {
        return rt.ready.promise().done(e),
        this
    }
    ,
    rt.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? rt.readyWait++ : rt.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--rt.readyWait : !rt.isReady) {
                if (!ft.body)
                    return setTimeout(rt.ready);
                rt.isReady = !0,
                e !== !0 && --rt.readyWait > 0 || (wt.resolveWith(ft, [rt]),
                rt.fn.triggerHandler && (rt(ft).triggerHandler("ready"),
                rt(ft).off("ready")))
            }
        }
    }),
    rt.ready.promise = function(t) {
        if (!wt)
            if (wt = rt.Deferred(),
            ft.readyState === "complete")
                setTimeout(rt.ready);
            else if (ft.addEventListener)
                ft.addEventListener("DOMContentLoaded", a, !1),
                e.addEventListener("load", a, !1);
            else {
                ft.attachEvent("onreadystatechange", a),
                e.attachEvent("onload", a);
                var n = !1;
                try {
                    n = e.frameElement == null && ft.documentElement
                } catch (i) {}
                n && n.doScroll && function r() {
                    if (!rt.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(r, 50)
                        }
                        s(),
                        rt.ready()
                    }
                }()
            }
        return wt.promise(t)
    }
    ;
    var Tt, Et = "undefined";
    for (Tt in rt(nt))
        break;
    nt.ownLast = "0" !== Tt,
    nt.inlineBlockNeedsLayout = !1,
    rt(function() {
        var e, t, n, i;
        n = ft.getElementsByTagName("body")[0],
        n && n.style && (t = ft.createElement("div"),
        i = ft.createElement("div"),
        i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(i).appendChild(t),
        typeof t.style.zoom !== Et && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        nt.inlineBlockNeedsLayout = e = t.offsetWidth === 3,
        e && (n.style.zoom = 1)),
        n.removeChild(i))
    }),
    function() {
        var e = ft.createElement("div");
        if (nt.deleteExpando == null) {
            nt.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                nt.deleteExpando = !1
            }
        }
        e = null
    }(),
    rt.acceptData = function(e) {
        var t = rt.noData[(e.nodeName + " ").toLowerCase()]
          , n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    }
    ;
    var kt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , St = /([A-Z])/g;
    rt.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? rt.cache[e[rt.expando]] : e[rt.expando],
            !!e && !c(e)
        },
        data: function(e, t, n) {
            return u(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return u(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }),
    rt.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = rt.data(o),
                o.nodeType === 1 && !rt._data(o, "parsedAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && (i = s[n].name,
                        i.indexOf("data-") === 0 && (i = rt.camelCase(i.slice(5)),
                        l(o, i, r[i])));
                    rt._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                rt.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                rt.data(this, e, t)
            }) : o ? l(o, e, rt.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                rt.removeData(this, e)
            })
        }
    }),
    rt.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue",
            i = rt._data(e, t),
            n && (!i || rt.isArray(n) ? i = rt._data(e, t, rt.makeArray(n)) : i.push(n)),
            i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = rt.queue(e, t)
              , i = n.length
              , r = n.shift()
              , o = rt._queueHooks(e, t)
              , s = function() {
                rt.dequeue(e, t)
            };
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, s, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return rt._data(e, n) || rt._data(e, n, {
                empty: rt.Callbacks("once memory").add(function() {
                    rt._removeData(e, t + "queue"),
                    rt._removeData(e, n)
                })
            })
        }
    }),
    rt.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? rt.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = rt.queue(this, e, t);
                rt._queueHooks(this, e),
                "fx" === e && n[0] !== "inprogress" && rt.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                rt.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, r = rt.Deferred(), o = this, s = this.length, a = function() {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                n = rt._data(o[s], e + "queueHooks"),
                n && n.empty && (i++,
                n.empty.add(a));
            return a(),
            r.promise(t)
        }
    });
    var Ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Nt = ["Top", "Right", "Bottom", "Left"]
      , At = function(e, t) {
        return e = t || e,
        rt.css(e, "display") === "none" || !rt.contains(e.ownerDocument, e)
    }
      , _t = rt.access = function(e, t, n, i, r, o, s) {
        var a = 0
          , l = e.length
          , c = null == n;
        if (rt.type(n) === "object") {
            r = !0;
            for (a in n)
                rt.access(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== i && (r = !0,
        rt.isFunction(i) || (s = !0),
        c && (s ? (t.call(e, i),
        t = null) : (c = t,
        t = function(e, t, n) {
            return c.call(rt(e), n)
        }
        )),
        t))
            for (; l > a; a++)
                t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
    }
      , Dt = /^(?:checkbox|radio)$/i;
    (function() {
        var e = ft.createElement("input")
          , t = ft.createElement("div")
          , n = ft.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        nt.leadingWhitespace = t.firstChild.nodeType === 3,
        nt.tbody = !t.getElementsByTagName("tbody").length,
        nt.htmlSerialize = !!t.getElementsByTagName("link").length,
        nt.html5Clone = ft.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
        e.type = "checkbox",
        e.checked = !0,
        n.appendChild(e),
        nt.appendChecked = e.checked,
        t.innerHTML = "<textarea>x</textarea>",
        nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
        n.appendChild(t),
        t.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        nt.noCloneEvent = !0,
        t.attachEvent && (t.attachEvent("onclick", function() {
            nt.noCloneEvent = !1
        }),
        t.cloneNode(!0).click()),
        nt.deleteExpando == null) {
            nt.deleteExpando = !0;
            try {
                delete t.test
            } catch (i) {
                nt.deleteExpando = !1
            }
        }
    }
    )(),
    function() {
        var t, n, i = ft.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + t,
            (nt[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"),
            nt[t + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var Pt = /^(?:input|select|textarea)$/i
      , jt = /^key/
      , Lt = /^(?:mouse|pointer|contextmenu)|click/
      , Ht = /^(?:focusinfocus|focusoutblur)$/
      , Mt = /^([^.]*)(?:\.(.+)|)$/;
    rt.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, c, u, d, p, h, f, m, g = rt._data(e);
            if (g) {
                for (n.handler && (l = n,
                n = l.handler,
                r = l.selector),
                n.guid || (n.guid = rt.guid++),
                (s = g.events) || (s = g.events = {}),
                (u = g.handle) || (u = g.handle = function(e) {
                    return typeof rt === Et || e && rt.event.triggered === e.type ? void 0 : rt.event.dispatch.apply(u.elem, arguments)
                }
                ,
                u.elem = e),
                t = (t || "").match(bt) || [""],
                a = t.length; a--; )
                    o = Mt.exec(t[a]) || [],
                    h = m = o[1],
                    f = (o[2] || "").split(".").sort(),
                    h && (c = rt.event.special[h] || {},
                    h = (r ? c.delegateType : c.bindType) || h,
                    c = rt.event.special[h] || {},
                    d = rt.extend({
                        type: h,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && rt.expr.match.needsContext.test(r),
                        namespace: f.join(".")
                    }, l),
                    (p = s[h]) || (p = s[h] = [],
                    p.delegateCount = 0,
                    c.setup && c.setup.call(e, i, f, u) !== !1 || (e.addEventListener ? e.addEventListener(h, u, !1) : e.attachEvent && e.attachEvent("on" + h, u))),
                    c.add && (c.add.call(e, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                    r ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                    rt.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, c, u, d, p, h, f, m, g = rt.hasData(e) && rt._data(e);
            if (g && (u = g.events)) {
                for (t = (t || "").match(bt) || [""],
                c = t.length; c--; )
                    if (a = Mt.exec(t[c]) || [],
                    h = m = a[1],
                    f = (a[2] || "").split(".").sort(),
                    h) {
                        for (d = rt.event.special[h] || {},
                        h = (i ? d.delegateType : d.bindType) || h,
                        p = u[h] || [],
                        a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        l = o = p.length; o--; )
                            s = p[o],
                            !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (p.splice(o, 1),
                            s.selector && p.delegateCount--,
                            d.remove && d.remove.call(e, s));
                        l && !p.length && (d.teardown && d.teardown.call(e, f, g.handle) !== !1 || rt.removeEvent(e, h, g.handle),
                        delete u[h])
                    } else
                        for (h in u)
                            rt.event.remove(e, h + t[c], n, i, !0);
                rt.isEmptyObject(u) && (delete g.handle,
                rt._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, r) {
            var o, s, a, l, c, u, d, p = [i || ft], h = tt.call(t, "type") ? t.type : t, f = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = u = i = i || ft,
            i.nodeType !== 3 && i.nodeType !== 8 && !Ht.test(h + rt.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."),
            h = f.shift(),
            f.sort()),
            s = h.indexOf(":") < 0 && "on" + h,
            t = t[rt.expando] ? t : new rt.Event(h,"object" == typeof t && t),
            t.isTrigger = r ? 2 : 3,
            t.namespace = f.join("."),
            t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            n = null == n ? [t] : rt.makeArray(n, [t]),
            c = rt.event.special[h] || {},
            r || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                if (!r && !c.noBubble && !rt.isWindow(i)) {
                    for (l = c.delegateType || h,
                    Ht.test(l + h) || (a = a.parentNode); a; a = a.parentNode)
                        p.push(a),
                        u = a;
                    u === (i.ownerDocument || ft) && p.push(u.defaultView || u.parentWindow || e)
                }
                for (d = 0; (a = p[d++]) && !t.isPropagationStopped(); )
                    t.type = d > 1 ? l : c.bindType || h,
                    o = (rt._data(a, "events") || {})[t.type] && rt._data(a, "handle"),
                    o && o.apply(a, n),
                    o = s && a[s],
                    o && o.apply && rt.acceptData(a) && (t.result = o.apply(a, n),
                    t.result === !1 && t.preventDefault());
                if (t.type = h,
                !r && !t.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), n) === !1) && rt.acceptData(i) && s && i[h] && !rt.isWindow(i)) {
                    u = i[s],
                    u && (i[s] = null),
                    rt.event.triggered = h;
                    try {
                        i[h]()
                    } catch (m) {}
                    rt.event.triggered = void 0,
                    u && (i[s] = u)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = rt.event.fix(e);
            var t, n, i, r, o, s = [], a = K.call(arguments), l = (rt._data(this, "events") || {})[e.type] || [], c = rt.event.special[e.type] || {};
            if (a[0] = e,
            e.delegateTarget = this,
            !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = rt.event.handlers.call(this, e, l),
                t = 0; (r = s[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = r.elem,
                    o = 0; (i = r.handlers[o++]) && !e.isImmediatePropagationStopped(); )
                        (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i,
                        e.data = i.data,
                        n = ((rt.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a),
                        void 0 !== n && (e.result = n) === !1 && (e.preventDefault(),
                        e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s = [], a = t.delegateCount, l = e.target;
            if (a && l.nodeType && (!e.button || e.type !== "click"))
                for (; l != this; l = l.parentNode || this)
                    if (l.nodeType === 1 && (l.disabled !== !0 || e.type !== "click")) {
                        for (r = [],
                        o = 0; a > o; o++)
                            i = t[o],
                            n = i.selector + " ",
                            r[n] === void 0 && (r[n] = i.needsContext ? rt(n, this).index(l) >= 0 : rt.find(n, this, null, [l]).length),
                            r[n] && r.push(i);
                        r.length && s.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }),
            s
        },
        fix: function(e) {
            if (e[rt.expando])
                return e;
            var t, n, i, r = e.type, o = e, s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Lt.test(r) ? this.mouseHooks : jt.test(r) ? this.keyHooks : {}),
            i = s.props ? this.props.concat(s.props) : this.props,
            e = new rt.Event(o),
            t = i.length; t--; )
                n = i[t],
                e[n] = o[n];
            return e.target || (e.target = o.srcElement || ft),
            e.target.nodeType === 3 && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button, s = t.fromElement;
                return e.pageX == null && t.clientX != null && (i = e.target.ownerDocument || ft,
                r = i.documentElement,
                n = i.body,
                e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0),
                e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return rt.nodeName(this, "input") && this.type === "checkbox" && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(e) {
                    return rt.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== void 0 && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = rt.extend(new rt.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? rt.event.trigger(r, null, t) : rt.event.dispatch.call(t, r),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
    rt.removeEvent = ft.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === Et && (e[i] = null),
        e.detachEvent(i, n))
    }
    ,
    rt.Event = function(e, t) {
        return this instanceof rt.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === void 0 && e.returnValue === !1 ? p : h) : this.type = e,
        t && rt.extend(this, t),
        this.timeStamp = e && e.timeStamp || rt.now(),
        this[rt.expando] = !0,
        void 0) : new rt.Event(e,t)
    }
    ,
    rt.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = p,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = p,
            e && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    rt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        rt.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, r = e.relatedTarget, o = e.handleObj;
                return (!r || r !== i && !rt.contains(i, r)) && (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    nt.submitBubbles || (rt.event.special.submit = {
        setup: function() {
            return rt.nodeName(this, "form") ? !1 : (rt.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target
                  , n = rt.nodeName(t, "input") || rt.nodeName(t, "button") ? t.form : void 0;
                n && !rt._data(n, "submitBubbles") && (rt.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                rt._data(n, "submitBubbles", !0))
            }),
            void 0)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && rt.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return rt.nodeName(this, "form") ? !1 : (rt.event.remove(this, "._submit"),
            void 0)
        }
    }),
    nt.changeBubbles || (rt.event.special.change = {
        setup: function() {
            return Pt.test(this.nodeName) ? ((this.type === "checkbox" || this.type === "radio") && (rt.event.add(this, "propertychange._change", function(e) {
                e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
            }),
            rt.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                rt.event.simulate("change", this, e, !0)
            })),
            !1) : (rt.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Pt.test(t.nodeName) && !rt._data(t, "changeBubbles") && (rt.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || rt.event.simulate("change", this.parentNode, e, !0)
                }),
                rt._data(t, "changeBubbles", !0))
            }),
            void 0)
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox" ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return rt.event.remove(this, "._change"),
            !Pt.test(this.nodeName)
        }
    }),
    nt.focusinBubbles || rt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            rt.event.simulate(t, e.target, rt.event.fix(e), !0)
        };
        rt.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , r = rt._data(i, t);
                r || i.addEventListener(e, n, !0),
                rt._data(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , r = rt._data(i, t) - 1;
                r ? rt._data(i, t, r) : (i.removeEventListener(e, n, !0),
                rt._removeData(i, t))
            }
        }
    }),
    rt.fn.extend({
        on: function(e, t, n, i, r) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t,
                t = void 0);
                for (o in e)
                    this.on(o, t, n, e[o], r);
                return this
            }
            if (null == n && null == i ? (i = t,
            n = t = void 0) : null == i && ("string" == typeof t ? (i = n,
            n = void 0) : (i = n,
            n = t,
            t = void 0)),
            i === !1)
                i = h;
            else if (!i)
                return this;
            return 1 === r && (s = i,
            i = function(e) {
                return rt().off(e),
                s.apply(this, arguments)
            }
            ,
            i.guid = s.guid || (s.guid = rt.guid++)),
            this.each(function() {
                rt.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                rt(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (r in e)
                    this.off(r, t, e[r]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t,
            t = void 0),
            n === !1 && (n = h),
            this.each(function() {
                rt.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                rt.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? rt.event.trigger(e, t, n, !0) : void 0
        }
    });
    var qt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , Ot = / jQuery\d+="(?:null|\d+)"/g
      , Ft = new RegExp("<(?:" + qt + ")[\\s/>]","i")
      , Bt = /^\s+/
      , zt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Rt = /<([\w:]+)/
      , Wt = /<tbody/i
      , Xt = /<|&#?\w+;/
      , It = /<(?:script|style|link)/i
      , $t = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Yt = /^$|\/(?:java|ecma)script/i
      , Ut = /^true\/(.*)/
      , Vt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , Kt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , Jt = m(ft)
      , Gt = Jt.appendChild(ft.createElement("div"));
    Kt.optgroup = Kt.option,
    Kt.tbody = Kt.tfoot = Kt.colgroup = Kt.caption = Kt.thead,
    Kt.th = Kt.td,
    rt.extend({
        clone: function(e, t, n) {
            var i, r, o, s, a, l = rt.contains(e.ownerDocument, e);
            if (nt.html5Clone || rt.isXMLDoc(e) || !Ft.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Gt.innerHTML = e.outerHTML,
            Gt.removeChild(o = Gt.firstChild)),
            !(nt.noCloneEvent && nt.noCloneChecked || e.nodeType !== 1 && e.nodeType !== 11 || rt.isXMLDoc(e)))
                for (i = g(o),
                a = g(e),
                s = 0; (r = a[s]) != null; ++s)
                    i[s] && E(r, i[s]);
            if (t)
                if (n)
                    for (a = a || g(e),
                    i = i || g(o),
                    s = 0; (r = a[s]) != null; s++)
                        T(r, i[s]);
                else
                    T(e, o);
            return i = g(o, "script"),
            i.length > 0 && w(i, !l && g(e, "script")),
            i = a = r = null,
            o
        },
        buildFragment: function(e, t, n, i) {
            for (var r, o, s, a, l, c, u, d = e.length, p = m(t), h = [], f = 0; d > f; f++)
                if (o = e[f],
                o || 0 === o)
                    if (rt.type(o) === "object")
                        rt.merge(h, o.nodeType ? [o] : o);
                    else if (Xt.test(o)) {
                        for (a = a || p.appendChild(t.createElement("div")),
                        l = (Rt.exec(o) || ["", ""])[1].toLowerCase(),
                        u = Kt[l] || Kt._default,
                        a.innerHTML = u[1] + o.replace(zt, "<$1></$2>") + u[2],
                        r = u[0]; r--; )
                            a = a.lastChild;
                        if (!nt.leadingWhitespace && Bt.test(o) && h.push(t.createTextNode(Bt.exec(o)[0])),
                        !nt.tbody)
                            for (o = "table" !== l || Wt.test(o) ? u[1] !== "<table>" || Wt.test(o) ? 0 : a : a.firstChild,
                            r = o && o.childNodes.length; r--; )
                                rt.nodeName(c = o.childNodes[r], "tbody") && !c.childNodes.length && o.removeChild(c);
                        for (rt.merge(h, a.childNodes),
                        a.textContent = ""; a.firstChild; )
                            a.removeChild(a.firstChild);
                        a = p.lastChild
                    } else
                        h.push(t.createTextNode(o));
            for (a && p.removeChild(a),
            nt.appendChecked || rt.grep(g(h, "input"), v),
            f = 0; o = h[f++]; )
                if ((!i || rt.inArray(o, i) === -1) && (s = rt.contains(o.ownerDocument, o),
                a = g(p.appendChild(o), "script"),
                s && w(a),
                n))
                    for (r = 0; o = a[r++]; )
                        Yt.test(o.type || "") && n.push(o);
            return a = null,
            p
        },
        cleanData: function(e, t) {
            for (var n, i, r, o, s = 0, a = rt.expando, l = rt.cache, c = nt.deleteExpando, u = rt.event.special; (n = e[s]) != null; s++)
                if ((t || rt.acceptData(n)) && (r = n[a],
                o = r && l[r])) {
                    if (o.events)
                        for (i in o.events)
                            u[i] ? rt.event.remove(n, i) : rt.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r],
                    c ? delete n[a] : typeof n.removeAttribute !== Et ? n.removeAttribute(a) : n[a] = null,
                    V.push(r))
                }
        }
    }),
    rt.fn.extend({
        text: function(e) {
            return _t(this, function(e) {
                return void 0 === e ? rt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ft).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? rt.filter(e, this) : this, r = 0; (n = i[r]) != null; r++)
                t || n.nodeType !== 1 || rt.cleanData(g(n)),
                n.parentNode && (t && rt.contains(n.ownerDocument, n) && w(g(n, "script")),
                n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; (e = this[t]) != null; t++) {
                for (e.nodeType === 1 && rt.cleanData(g(e, !1)); e.firstChild; )
                    e.removeChild(e.firstChild);
                e.options && rt.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e : t,
            this.map(function() {
                return rt.clone(this, e, t)
            })
        },
        html: function(e) {
            return _t(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e)
                    return t.nodeType === 1 ? t.innerHTML.replace(Ot, "") : void 0;
                if (!("string" != typeof e || It.test(e) || !nt.htmlSerialize && Ft.test(e) || !nt.leadingWhitespace && Bt.test(e) || Kt[(Rt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(zt, "<$1></$2>");
                    try {
                        for (; i > n; n++)
                            t = this[n] || {},
                            t.nodeType === 1 && (rt.cleanData(g(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode,
                rt.cleanData(g(this)),
                e && e.replaceChild(t, this)
            }),
            e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = J.apply([], e);
            var n, i, r, o, s, a, l = 0, c = this.length, u = this, d = c - 1, p = e[0], h = rt.isFunction(p);
            if (h || c > 1 && "string" == typeof p && !nt.checkClone && $t.test(p))
                return this.each(function(n) {
                    var i = u.eq(n);
                    h && (e[0] = p.call(this, n, i.html())),
                    i.domManip(e, t)
                });
            if (c && (a = rt.buildFragment(e, this[0].ownerDocument, !1, this),
            n = a.firstChild,
            a.childNodes.length === 1 && (a = n),
            n)) {
                for (o = rt.map(g(a, "script"), b),
                r = o.length; c > l; l++)
                    i = a,
                    l !== d && (i = rt.clone(i, !0, !0),
                    r && rt.merge(o, g(i, "script"))),
                    t.call(this[l], i, l);
                if (r)
                    for (s = o[o.length - 1].ownerDocument,
                    rt.map(o, x),
                    l = 0; r > l; l++)
                        i = o[l],
                        Yt.test(i.type || "") && !rt._data(i, "globalEval") && rt.contains(s, i) && (i.src ? rt._evalUrl && rt._evalUrl(i.src) : rt.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Vt, "")));
                a = n = null
            }
            return this
        }
    }),
    rt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        rt.fn[e] = function(e) {
            for (var n, i = 0, r = [], o = rt(e), s = o.length - 1; s >= i; i++)
                n = i === s ? this : this.clone(!0),
                rt(o[i])[t](n),
                G.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Qt, Zt = {};
    (function() {
        var e;
        nt.shrinkWrapBlocks = function() {
            if (null != e)
                return e;
            e = !1;
            var t, n, i;
            return n = ft.getElementsByTagName("body")[0],
            n && n.style ? (t = ft.createElement("div"),
            i = ft.createElement("div"),
            i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            n.appendChild(i).appendChild(t),
            typeof t.style.zoom !== Et && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            t.appendChild(ft.createElement("div")).style.width = "5px",
            e = t.offsetWidth !== 3),
            n.removeChild(i),
            e) : void 0
        }
    }
    )();
    var en, tn, nn = /^margin/, rn = new RegExp("^(" + Ct + ")(?!px)[a-z%]+$","i"), on = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (en = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    }
    ,
    tn = function(e, t, n) {
        var i, r, o, s, a = e.style;
        return n = n || en(e),
        s = n ? n.getPropertyValue(t) || n[t] : void 0,
        n && ("" !== s || rt.contains(e.ownerDocument, e) || (s = rt.style(e, t)),
        rn.test(s) && nn.test(t) && (i = a.width,
        r = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = i,
        a.minWidth = r,
        a.maxWidth = o)),
        void 0 === s ? s : s + ""
    }
    ) : ft.documentElement.currentStyle && (en = function(e) {
        return e.currentStyle
    }
    ,
    tn = function(e, t, n) {
        var i, r, o, s, a = e.style;
        return n = n || en(e),
        s = n ? n[t] : void 0,
        null == s && a && a[t] && (s = a[t]),
        rn.test(s) && !on.test(t) && (i = a.left,
        r = e.runtimeStyle,
        o = r && r.left,
        o && (r.left = e.currentStyle.left),
        a.left = "fontSize" === t ? "1em" : s,
        s = a.pixelLeft + "px",
        a.left = i,
        o && (r.left = o)),
        void 0 === s ? s : s + "" || "auto"
    }
    ),
    function() {
        function t() {
            var t, n, i, r;
            n = ft.getElementsByTagName("body")[0],
            n && n.style && (t = ft.createElement("div"),
            i = ft.createElement("div"),
            i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            n.appendChild(i).appendChild(t),
            t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
            o = s = !1,
            l = !0,
            e.getComputedStyle && (o = (e.getComputedStyle(t, null) || {}).top !== "1%",
            s = (e.getComputedStyle(t, null) || {
                width: "4px"
            }).width === "4px",
            r = t.appendChild(ft.createElement("div")),
            r.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
            r.style.marginRight = r.style.width = "0",
            t.style.width = "1px",
            l = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)),
            t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            r = t.getElementsByTagName("td"),
            r[0].style.cssText = "margin:0;border:0;padding:0;display:none",
            a = r[0].offsetHeight === 0,
            a && (r[0].style.display = "",
            r[1].style.display = "none",
            a = r[0].offsetHeight === 0),
            n.removeChild(i))
        }
        var n, i, r, o, s, a, l;
        n = ft.createElement("div"),
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        r = n.getElementsByTagName("a")[0],
        i = r && r.style,
        i && (i.cssText = "float:left;opacity:.5",
        nt.opacity = i.opacity === "0.5",
        nt.cssFloat = !!i.cssFloat,
        n.style.backgroundClip = "content-box",
        n.cloneNode(!0).style.backgroundClip = "",
        nt.clearCloneStyle = n.style.backgroundClip === "content-box",
        nt.boxSizing = i.boxSizing === "" || i.MozBoxSizing === "" || i.WebkitBoxSizing === "",
        rt.extend(nt, {
            reliableHiddenOffsets: function() {
                return null == a && t(),
                a
            },
            boxSizingReliable: function() {
                return null == s && t(),
                s
            },
            pixelPosition: function() {
                return null == o && t(),
                o
            },
            reliableMarginRight: function() {
                return null == l && t(),
                l
            }
        }))
    }(),
    rt.swap = function(e, t, n, i) {
        var r, o, s = {};
        for (o in t)
            s[o] = e.style[o],
            e.style[o] = t[o];
        r = n.apply(e, i || []);
        for (o in t)
            e.style[o] = s[o];
        return r
    }
    ;
    var sn = /alpha\([^)]*\)/i
      , an = /opacity\s*=\s*([^)]*)/
      , ln = /^(none|table(?!-c[ea]).+)/
      , cn = new RegExp("^(" + Ct + ")(.*)$","i")
      , un = new RegExp("^([+-])=(" + Ct + ")","i")
      , dn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , pn = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , hn = ["Webkit", "O", "Moz", "ms"];
    rt.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": nt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && e.nodeType !== 3 && e.nodeType !== 8 && e.style) {
                var r, o, s, a = rt.camelCase(t), l = e.style;
                if (t = rt.cssProps[a] || (rt.cssProps[a] = N(l, a)),
                s = rt.cssHooks[t] || rt.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && (r = s.get(e, !1, i)) !== void 0 ? r : l[t];
                if (o = typeof n,
                "string" === o && (r = un.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(rt.css(e, t)),
                o = "number"),
                null != n && n === n && ("number" !== o || rt.cssNumber[a] || (n += "px"),
                nt.clearCloneStyle || "" !== n || t.indexOf("background") !== 0 || (l[t] = "inherit"),
                !(s && "set"in s && (n = s.set(e, n, i)) === void 0)))
                    try {
                        l[t] = n
                    } catch (c) {}
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = rt.camelCase(t);
            return t = rt.cssProps[a] || (rt.cssProps[a] = N(e.style, a)),
            s = rt.cssHooks[t] || rt.cssHooks[a],
            s && "get"in s && (o = s.get(e, !0, n)),
            void 0 === o && (o = tn(e, t, i)),
            "normal" === o && t in pn && (o = pn[t]),
            "" === n || n ? (r = parseFloat(o),
            n === !0 || rt.isNumeric(r) ? r || 0 : o) : o
        }
    }),
    rt.each(["height", "width"], function(e, t) {
        rt.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? ln.test(rt.css(e, "display")) && e.offsetWidth === 0 ? rt.swap(e, dn, function() {
                    return P(e, t, i)
                }) : P(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var r = i && en(e);
                return _(e, n, i ? D(e, t, i, nt.boxSizing && rt.css(e, "boxSizing", !1, r) === "border-box", r) : 0)
            }
        }
    }),
    nt.opacity || (rt.cssHooks.opacity = {
        get: function(e, t) {
            return an.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , i = e.currentStyle
              , r = rt.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , o = i && i.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && rt.trim(o.replace(sn, "")) === "" && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || i && !i.filter) || (n.filter = sn.test(o) ? o.replace(sn, r) : o + " " + r)
        }
    }),
    rt.cssHooks.marginRight = C(nt.reliableMarginRight, function(e, t) {
        return t ? rt.swap(e, {
            display: "inline-block"
        }, tn, [e, "marginRight"]) : void 0
    }),
    rt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        rt.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                    r[e + Nt[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        },
        nn.test(e) || (rt.cssHooks[e + t].set = _)
    }),
    rt.fn.extend({
        css: function(e, t) {
            return _t(this, function(e, t, n) {
                var i, r, o = {}, s = 0;
                if (rt.isArray(t)) {
                    for (i = en(e),
                    r = t.length; r > s; s++)
                        o[t[s]] = rt.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? rt.style(e, t, n) : rt.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                At(this) ? rt(this).show() : rt(this).hide()
            })
        }
    }),
    rt.Tween = j,
    j.prototype = {
        constructor: j,
        init: function(e, t, n, i, r, o) {
            this.elem = e,
            this.prop = n,
            this.easing = r || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (rt.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = j.propHooks[this.prop];
            return this.pos = t = this.options.duration ? rt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : j.propHooks._default.set(this),
            this
        }
    },
    j.prototype.init.prototype = j.prototype,
    j.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return e.elem[e.prop] == null || e.elem.style && e.elem.style[e.prop] != null ? (t = rt.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                rt.fx.step[e.prop] ? rt.fx.step[e.prop](e) : e.elem.style && (e.elem.style[rt.cssProps[e.prop]] != null || rt.cssHooks[e.prop]) ? rt.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    rt.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    rt.fx = j.prototype.init,
    rt.fx.step = {};
    var fn, mn, gn = /^(?:toggle|show|hide)$/, vn = new RegExp("^(?:([+-])=|)(" + Ct + ")([a-z%]*)$","i"), yn = /queueHooks$/, bn = [q], xn = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
              , i = n.cur()
              , r = vn.exec(t)
              , o = r && r[3] || (rt.cssNumber[e] ? "" : "px")
              , s = (rt.cssNumber[e] || "px" !== o && +i) && vn.exec(rt.css(n.elem, e))
              , a = 1
              , l = 20;
            if (s && s[3] !== o) {
                o = o || s[3],
                r = r || [],
                s = +i || 1;
                do
                    a = a || ".5",
                    s /= a,
                    rt.style(n.elem, e, s + o);
                while (a !== (a = n.cur() / i) && 1 !== a && --l)
            }
            return r && (s = n.start = +s || +i || 0,
            n.unit = o,
            n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]),
            n
        }
        ]
    };
    rt.Animation = rt.extend(F, {
        tweener: function(e, t) {
            rt.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; r > i; i++)
                n = e[i],
                xn[n] = xn[n] || [],
                xn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? bn.unshift(e) : bn.push(e)
        }
    }),
    rt.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? rt.extend({}, e) : {
            complete: n || !n && t || rt.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !rt.isFunction(t) && t
        };
        return i.duration = rt.fx.off ? 0 : typeof i.duration == "number" ? i.duration : i.duration in rt.fx.speeds ? rt.fx.speeds[i.duration] : rt.fx.speeds._default,
        (i.queue == null || i.queue === !0) && (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            rt.isFunction(i.old) && i.old.call(this),
            i.queue && rt.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    rt.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(At).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = rt.isEmptyObject(e)
              , o = rt.speed(t, n, i)
              , s = function() {
                var t = F(this, rt.extend({}, e), o);
                (r || rt._data(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , r = null != e && e + "queueHooks"
                  , o = rt.timers
                  , s = rt._data(this);
                if (r)
                    s[r] && s[r].stop && i(s[r]);
                else
                    for (r in s)
                        s[r] && s[r].stop && yn.test(r) && i(s[r]);
                for (r = o.length; r--; )
                    o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n),
                    t = !1,
                    o.splice(r, 1));
                (t || !n) && rt.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = rt._data(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = rt.timers, s = i ? i.length : 0;
                for (n.finish = !0,
                rt.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; s > t; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    rt.each(["toggle", "show", "hide"], function(e, t) {
        var n = rt.fn[t];
        rt.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(H(t, !0), e, i, r)
        }
    }),
    rt.each({
        slideDown: H("show"),
        slideUp: H("hide"),
        slideToggle: H("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        rt.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }),
    rt.timers = [],
    rt.fx.tick = function() {
        var e, t = rt.timers, n = 0;
        for (fn = rt.now(); n < t.length; n++)
            e = t[n],
            e() || t[n] !== e || t.splice(n--, 1);
        t.length || rt.fx.stop(),
        fn = void 0
    }
    ,
    rt.fx.timer = function(e) {
        rt.timers.push(e),
        e() ? rt.fx.start() : rt.timers.pop()
    }
    ,
    rt.fx.interval = 13,
    rt.fx.start = function() {
        mn || (mn = setInterval(rt.fx.tick, rt.fx.interval))
    }
    ,
    rt.fx.stop = function() {
        clearInterval(mn),
        mn = null
    }
    ,
    rt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    rt.fn.delay = function(e, t) {
        return e = rt.fx ? rt.fx.speeds[e] || e : e,
        t = t || "fx",
        this.queue(t, function(t, n) {
            var i = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(i)
            }
        })
    }
    ,
    function() {
        var e, t, n, i, r;
        t = ft.createElement("div"),
        t.setAttribute("className", "t"),
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        i = t.getElementsByTagName("a")[0],
        n = ft.createElement("select"),
        r = n.appendChild(ft.createElement("option")),
        e = t.getElementsByTagName("input")[0],
        i.style.cssText = "top:1px",
        nt.getSetAttribute = t.className !== "t",
        nt.style = /top/.test(i.getAttribute("style")),
        nt.hrefNormalized = i.getAttribute("href") === "/a",
        nt.checkOn = !!e.value,
        nt.optSelected = r.selected,
        nt.enctype = !!ft.createElement("form").enctype,
        n.disabled = !0,
        nt.optDisabled = !r.disabled,
        e = ft.createElement("input"),
        e.setAttribute("value", ""),
        nt.input = e.getAttribute("value") === "",
        e.value = "t",
        e.setAttribute("type", "radio"),
        nt.radioValue = e.value === "t"
    }();
    var wn = /\r/g;
    rt.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            {
                if (arguments.length)
                    return i = rt.isFunction(e),
                    this.each(function(n) {
                        var r;
                        this.nodeType === 1 && (r = i ? e.call(this, n, rt(this).val()) : e,
                        null == r ? r = "" : "number" == typeof r ? r += "" : rt.isArray(r) && (r = rt.map(r, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        t = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()],
                        t && "set"in t && t.set(this, r, "value") !== void 0 || (this.value = r))
                    });
                if (r)
                    return t = rt.valHooks[r.type] || rt.valHooks[r.nodeName.toLowerCase()],
                    t && "get"in t && (n = t.get(r, "value")) !== void 0 ? n : (n = r.value,
                    "string" == typeof n ? n.replace(wn, "") : null == n ? "" : n)
            }
        }
    }),
    rt.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = rt.find.attr(e, "value");
                    return null != t ? t : rt.trim(rt.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = e.type === "select-one" || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                        if (n = i[l],
                        !(!n.selected && l !== r || (nt.optDisabled ? n.disabled : n.getAttribute("disabled") !== null) || n.parentNode.disabled && rt.nodeName(n.parentNode, "optgroup"))) {
                            if (t = rt(n).val(),
                            o)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = rt.makeArray(t), s = r.length; s--; )
                        if (i = r[s],
                        rt.inArray(rt.valHooks.option.get(i), o) >= 0)
                            try {
                                i.selected = n = !0
                            } catch (a) {
                                i.scrollHeight
                            }
                        else
                            i.selected = !1;
                    return n || (e.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    rt.each(["radio", "checkbox"], function() {
        rt.valHooks[this] = {
            set: function(e, t) {
                return rt.isArray(t) ? e.checked = rt.inArray(rt(e).val(), t) >= 0 : void 0
            }
        },
        nt.checkOn || (rt.valHooks[this].get = function(e) {
            return e.getAttribute("value") === null ? "on" : e.value
        }
        )
    });
    var Tn, En, kn = rt.expr.attrHandle, Sn = /^(?:checked|selected)$/i, Cn = nt.getSetAttribute, Nn = nt.input;
    rt.fn.extend({
        attr: function(e, t) {
            return _t(this, rt.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                rt.removeAttr(this, e)
            })
        }
    }),
    rt.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o)
                return typeof e.getAttribute === Et ? rt.prop(e, t, n) : (1 === o && rt.isXMLDoc(e) || (t = t.toLowerCase(),
                i = rt.attrHooks[t] || (rt.expr.match.bool.test(t) ? En : Tn)),
                void 0 === n ? i && "get"in i && (r = i.get(e, t)) !== null ? r : (r = rt.find.attr(e, t),
                null == r ? void 0 : r) : null !== n ? i && "set"in i && (r = i.set(e, n, t)) !== void 0 ? r : (e.setAttribute(t, n + ""),
                n) : (rt.removeAttr(e, t),
                void 0))
        },
        removeAttr: function(e, t) {
            var n, i, r = 0, o = t && t.match(bt);
            if (o && e.nodeType === 1)
                for (; n = o[r++]; )
                    i = rt.propFix[n] || n,
                    rt.expr.match.bool.test(n) ? Nn && Cn || !Sn.test(n) ? e[i] = !1 : e[rt.camelCase("default-" + n)] = e[i] = !1 : rt.attr(e, n, ""),
                    e.removeAttribute(Cn ? n : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!nt.radioValue && "radio" === t && rt.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        }
    }),
    En = {
        set: function(e, t, n) {
            return t === !1 ? rt.removeAttr(e, n) : Nn && Cn || !Sn.test(n) ? e.setAttribute(!Cn && rt.propFix[n] || n, n) : e[rt.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    rt.each(rt.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = kn[t] || rt.find.attr;
        kn[t] = Nn && Cn || !Sn.test(t) ? function(e, t, i) {
            var r, o;
            return i || (o = kn[t],
            kn[t] = r,
            r = n(e, t, i) != null ? t.toLowerCase() : null,
            kn[t] = o),
            r
        }
        : function(e, t, n) {
            return n ? void 0 : e[rt.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }),
    Nn && Cn || (rt.attrHooks.value = {
        set: function(e, t, n) {
            return rt.nodeName(e, "input") ? (e.defaultValue = t,
            void 0) : Tn && Tn.set(e, t, n)
        }
    }),
    Cn || (Tn = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)),
            i.value = t += "",
            "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    },
    kn.id = kn.name = kn.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && i.value !== "" ? i.value : null
    }
    ,
    rt.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: Tn.set
    },
    rt.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Tn.set(e, "" === t ? !1 : t, n)
        }
    },
    rt.each(["width", "height"], function(e, t) {
        rt.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"),
                n) : void 0
            }
        }
    })),
    nt.style || (rt.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var An = /^(?:input|select|textarea|button|object)$/i
      , _n = /^(?:a|area)$/i;
    rt.fn.extend({
        prop: function(e, t) {
            return _t(this, rt.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = rt.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = void 0,
                    delete this[e]
                } catch (t) {}
            })
        }
    }),
    rt.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, r, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
                return o = 1 !== s || !rt.isXMLDoc(e),
                o && (t = rt.propFix[t] || t,
                r = rt.propHooks[t]),
                void 0 !== n ? r && "set"in r && (i = r.set(e, n, t)) !== void 0 ? i : e[t] = n : r && "get"in r && (i = r.get(e, t)) !== null ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = rt.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : An.test(e.nodeName) || _n.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    nt.hrefNormalized || rt.each(["href", "src"], function(e, t) {
        rt.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    nt.optSelected || (rt.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        rt.propFix[this.toLowerCase()] = this
    }),
    nt.enctype || (rt.propFix.enctype = "encoding");
    var Dn = /[\t\r\n\f]/g;
    rt.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a = 0, l = this.length, c = "string" == typeof e && e;
            if (rt.isFunction(e))
                return this.each(function(t) {
                    rt(this).addClass(e.call(this, t, this.className))
                });
            if (c)
                for (t = (e || "").match(bt) || []; l > a; a++)
                    if (n = this[a],
                    i = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(Dn, " ") : " ")) {
                        for (o = 0; r = t[o++]; )
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        s = rt.trim(i),
                        n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a = 0, l = this.length, c = arguments.length === 0 || "string" == typeof e && e;
            if (rt.isFunction(e))
                return this.each(function(t) {
                    rt(this).removeClass(e.call(this, t, this.className))
                });
            if (c)
                for (t = (e || "").match(bt) || []; l > a; a++)
                    if (n = this[a],
                    i = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(Dn, " ") : "")) {
                        for (o = 0; r = t[o++]; )
                            for (; i.indexOf(" " + r + " ") >= 0; )
                                i = i.replace(" " + r + " ", " ");
                        s = e ? rt.trim(i) : "",
                        n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : rt.isFunction(e) ? this.each(function(n) {
                rt(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, i = 0, r = rt(this), o = e.match(bt) || []; t = o[i++]; )
                        r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else
                    (n === Et || "boolean" === n) && (this.className && rt._data(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : rt._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(Dn, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        }
    }),
    rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        rt.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    rt.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Pn = rt.now()
      , jn = /\?/
      , Ln = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    rt.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse)
            return e.JSON.parse(t + "");
        var n, i = null, r = rt.trim(t + "");
        return r && !rt.trim(r.replace(Ln, function(e, t, r, o) {
            return n && t && (i = 0),
            0 === i ? e : (n = r || t,
            i += !o - !r,
            "")
        })) ? Function("return " + r)() : rt.error("Invalid JSON: " + t)
    }
    ,
    rt.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t)
            return null;
        try {
            e.DOMParser ? (i = new DOMParser,
            n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"),
            n.async = "false",
            n.loadXML(t))
        } catch (r) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + t),
        n
    }
    ;
    var Hn, Mn, qn = /#.*$/, On = /([?&])_=[^&]*/, Fn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Bn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, zn = /^(?:GET|HEAD)$/, Rn = /^\/\//, Wn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Xn = {}, In = {}, $n = "*/".concat("*");
    try {
        Mn = location.href
    } catch (Yn) {
        Mn = ft.createElement("a"),
        Mn.href = "",
        Mn = Mn.href
    }
    Hn = Wn.exec(Mn.toLowerCase()) || [],
    rt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Mn,
            type: "GET",
            isLocal: Bn.test(Hn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $n,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": rt.parseJSON,
                "text xml": rt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? R(R(e, rt.ajaxSettings), t) : R(rt.ajaxSettings, e)
        },
        ajaxPrefilter: B(Xn),
        ajaxTransport: B(In),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var r, u, v, y, x, T = t;
                2 !== b && (b = 2,
                a && clearTimeout(a),
                c = void 0,
                s = i || "",
                w.readyState = e > 0 ? 4 : 0,
                r = e >= 200 && 300 > e || 304 === e,
                n && (y = W(d, w, n)),
                y = X(d, y, w, r),
                r ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"),
                x && (rt.lastModified[o] = x),
                x = w.getResponseHeader("etag"),
                x && (rt.etag[o] = x)),
                204 === e || d.type === "HEAD" ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state,
                u = y.data,
                v = y.error,
                r = !v)) : (v = T,
                (e || !T) && (T = "error",
                0 > e && (e = 0))),
                w.status = e,
                w.statusText = (t || T) + "",
                r ? f.resolveWith(p, [u, T, w]) : f.rejectWith(p, [w, T, v]),
                w.statusCode(g),
                g = void 0,
                l && h.trigger(r ? "ajaxSuccess" : "ajaxError", [w, d, r ? u : v]),
                m.fireWith(p, [w, T]),
                l && (h.trigger("ajaxComplete", [w, d]),
                --rt.active || rt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var i, r, o, s, a, l, c, u, d = rt.ajaxSetup({}, t), p = d.context || d, h = d.context && (p.nodeType || p.jquery) ? rt(p) : rt.event, f = rt.Deferred(), m = rt.Callbacks("once memory"), g = d.statusCode || {}, v = {}, y = {}, b = 0, x = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!u)
                            for (u = {}; t = Fn.exec(s); )
                                u[t[1].toLowerCase()] = t[2];
                        t = u[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? s : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = y[n] = y[n] || e,
                    v[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return b || (d.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > b)
                            for (t in e)
                                g[t] = [g[t], e[t]];
                        else
                            w.always(e[w.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || x;
                    return c && c.abort(t),
                    n(0, t),
                    this
                }
            };
            if (f.promise(w).complete = m.add,
            w.success = w.done,
            w.error = w.fail,
            d.url = ((e || d.url || Mn) + "").replace(qn, "").replace(Rn, Hn[1] + "//"),
            d.type = t.method || t.type || d.method || d.type,
            d.dataTypes = rt.trim(d.dataType || "*").toLowerCase().match(bt) || [""],
            d.crossDomain == null && (i = Wn.exec(d.url.toLowerCase()),
            d.crossDomain = !(!i || i[1] === Hn[1] && i[2] === Hn[2] && (i[3] || (i[1] === "http:" ? "80" : "443")) === (Hn[3] || (Hn[1] === "http:" ? "80" : "443")))),
            d.data && d.processData && typeof d.data != "string" && (d.data = rt.param(d.data, d.traditional)),
            z(Xn, d, t, w),
            2 === b)
                return w;
            l = d.global,
            l && rt.active++ === 0 && rt.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !zn.test(d.type),
            o = d.url,
            d.hasContent || (d.data && (o = d.url += (jn.test(o) ? "&" : "?") + d.data,
            delete d.data),
            d.cache === !1 && (d.url = On.test(o) ? o.replace(On, "$1_=" + Pn++) : o + (jn.test(o) ? "&" : "?") + "_=" + Pn++)),
            d.ifModified && (rt.lastModified[o] && w.setRequestHeader("If-Modified-Since", rt.lastModified[o]),
            rt.etag[o] && w.setRequestHeader("If-None-Match", rt.etag[o])),
            (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType),
            w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + $n + "; q=0.01" : "") : d.accepts["*"]);
            for (r in d.headers)
                w.setRequestHeader(r, d.headers[r]);
            if (d.beforeSend && (d.beforeSend.call(p, w, d) === !1 || 2 === b))
                return w.abort();
            x = "abort";
            for (r in {
                success: 1,
                error: 1,
                complete: 1
            })
                w[r](d[r]);
            if (c = z(In, d, t, w)) {
                w.readyState = 1,
                l && h.trigger("ajaxSend", [w, d]),
                d.async && d.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    b = 1,
                    c.send(v, n)
                } catch (T) {
                    if (!(2 > b))
                        throw T;
                    n(-1, T)
                }
            } else
                n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return rt.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return rt.get(e, void 0, t, "script")
        }
    }),
    rt.each(["get", "post"], function(e, t) {
        rt[t] = function(e, n, i, r) {
            return rt.isFunction(n) && (r = r || i,
            i = n,
            n = void 0),
            rt.ajax({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            })
        }
    }),
    rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        rt.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    rt._evalUrl = function(e) {
        return rt.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    rt.fn.extend({
        wrapAll: function(e) {
            if (rt.isFunction(e))
                return this.each(function(t) {
                    rt(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = rt(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && e.firstChild.nodeType === 1; )
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return rt.isFunction(e) ? this.each(function(t) {
                rt(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = rt(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = rt.isFunction(e);
            return this.each(function(n) {
                rt(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    rt.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && (e.style && e.style.display || rt.css(e, "display")) === "none"
    }
    ,
    rt.expr.filters.visible = function(e) {
        return !rt.expr.filters.hidden(e)
    }
    ;
    var Un = /%20/g
      , Vn = /\[\]$/
      , Kn = /\r?\n/g
      , Jn = /^(?:submit|button|image|reset|file)$/i
      , Gn = /^(?:input|select|textarea|keygen)/i;
    rt.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            t = rt.isFunction(t) ? t() : null == t ? "" : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = rt.ajaxSettings && rt.ajaxSettings.traditional),
        rt.isArray(e) || e.jquery && !rt.isPlainObject(e))
            rt.each(e, function() {
                r(this.name, this.value)
            });
        else
            for (n in e)
                I(n, e[n], t, r);
        return i.join("&").replace(Un, "+")
    }
    ,
    rt.fn.extend({
        serialize: function() {
            return rt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = rt.prop(this, "elements");
                return e ? rt.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !rt(this).is(":disabled") && Gn.test(this.nodeName) && !Jn.test(e) && (this.checked || !Dt.test(e))
            }).map(function(e, t) {
                var n = rt(this).val();
                return null == n ? null : rt.isArray(n) ? rt.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Kn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Kn, "\r\n")
                }
            }).get()
        }
    }),
    rt.ajaxSettings.xhr = e.ActiveXObject !== void 0 ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $() || Y()
    }
    : $;
    var Qn = 0
      , Zn = {}
      , ei = rt.ajaxSettings.xhr();
    e.ActiveXObject && rt(e).on("unload", function() {
        for (var e in Zn)
            Zn[e](void 0, !0)
    }),
    nt.cors = !!ei && "withCredentials"in ei,
    ei = nt.ajax = !!ei,
    ei && rt.ajaxTransport(function(e) {
        if (!e.crossDomain || nt.cors) {
            var t;
            return {
                send: function(n, i) {
                    var r, o = e.xhr(), s = ++Qn;
                    if (o.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                        for (r in e.xhrFields)
                            o[r] = e.xhrFields[r];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                    e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n)
                        n[r] !== void 0 && o.setRequestHeader(r, n[r] + "");
                    o.send(e.hasContent && e.data || null),
                    t = function(n, r) {
                        var a, l, c;
                        if (t && (r || o.readyState === 4))
                            if (delete Zn[s],
                            t = void 0,
                            o.onreadystatechange = rt.noop,
                            r)
                                o.readyState !== 4 && o.abort();
                            else {
                                c = {},
                                a = o.status,
                                typeof o.responseText == "string" && (c.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (u) {
                                    l = ""
                                }
                                a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                            }
                        c && i(a, l, c, o.getAllResponseHeaders())
                    }
                    ,
                    e.async ? o.readyState === 4 ? setTimeout(t) : o.onreadystatechange = Zn[s] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }),
    rt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return rt.globalEval(e),
                e
            }
        }
    }),
    rt.ajaxPrefilter("script", function(e) {
        e.cache === void 0 && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    rt.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = ft.head || rt("head")[0] || ft.documentElement;
            return {
                send: function(i, r) {
                    t = ft.createElement("script"),
                    t.async = !0,
                    e.scriptCharset && (t.charset = e.scriptCharset),
                    t.src = e.url,
                    t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null,
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null,
                        n || r(200, "success"))
                    }
                    ,
                    n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var ti = []
      , ni = /(=)\?(?=&|$)|\?\?/;
    rt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = ti.pop() || rt.expando + "_" + Pn++;
            return this[e] = !0,
            e
        }
    }),
    rt.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, s, a = t.jsonp !== !1 && (ni.test(t.url) ? "url" : typeof t.data == "string" && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
        return a || t.dataTypes[0] === "jsonp" ? (r = t.jsonpCallback = rt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
        a ? t[a] = t[a].replace(ni, "$1" + r) : t.jsonp !== !1 && (t.url += (jn.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
        t.converters["script json"] = function() {
            return s || rt.error(r + " was not called"),
            s[0]
        }
        ,
        t.dataTypes[0] = "json",
        o = e[r],
        e[r] = function() {
            s = arguments
        }
        ,
        i.always(function() {
            e[r] = o,
            t[r] && (t.jsonpCallback = n.jsonpCallback,
            ti.push(r)),
            s && rt.isFunction(o) && o(s[0]),
            s = o = void 0
        }),
        "script") : void 0
    }),
    rt.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || ft;
        var i = dt.exec(e)
          , r = !n && [];
        return i ? [t.createElement(i[1])] : (i = rt.buildFragment([e], t, r),
        r && r.length && rt(r).remove(),
        rt.merge([], i.childNodes))
    }
    ;
    var ii = rt.fn.load;
    rt.fn.load = function(e, t, n) {
        if ("string" != typeof e && ii)
            return ii.apply(this, arguments);
        var i, r, o, s = this, a = e.indexOf(" ");
        return a >= 0 && (i = rt.trim(e.slice(a, e.length)),
        e = e.slice(0, a)),
        rt.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        s.length > 0 && rt.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments,
            s.html(i ? rt("<div>").append(rt.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            s.each(n, r || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    rt.expr.filters.animated = function(e) {
        return rt.grep(rt.timers, function(t) {
            return e === t.elem
        }).length
    }
    ;
    var ri = e.document.documentElement;
    rt.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, c, u = rt.css(e, "position"), d = rt(e), p = {};
            "static" === u && (e.style.position = "relative"),
            a = d.offset(),
            o = rt.css(e, "top"),
            l = rt.css(e, "left"),
            c = ("absolute" === u || "fixed" === u) && rt.inArray("auto", [o, l]) > -1,
            c ? (i = d.position(),
            s = i.top,
            r = i.left) : (s = parseFloat(o) || 0,
            r = parseFloat(l) || 0),
            rt.isFunction(t) && (t = t.call(e, n, a)),
            t.top != null && (p.top = t.top - a.top + s),
            t.left != null && (p.left = t.left - a.left + r),
            "using"in t ? t.using.call(e, p) : d.css(p)
        }
    },
    rt.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    rt.offset.setOffset(this, e, t)
                });
            var t, n, i = {
                top: 0,
                left: 0
            }, r = this[0], o = r && r.ownerDocument;
            if (o)
                return t = o.documentElement,
                rt.contains(t, r) ? (typeof r.getBoundingClientRect !== Et && (i = r.getBoundingClientRect()),
                n = U(o),
                {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, i = this[0];
                return rt.css(i, "position") === "fixed" ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                rt.nodeName(e[0], "html") || (n = e.offset()),
                n.top += rt.css(e[0], "borderTopWidth", !0),
                n.left += rt.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - rt.css(i, "marginTop", !0),
                    left: t.left - n.left - rt.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || ri; e && !rt.nodeName(e, "html") && rt.css(e, "position") === "static"; )
                    e = e.offsetParent;
                return e || ri
            })
        }
    }),
    rt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        rt.fn[e] = function(i) {
            return _t(this, function(e, i, r) {
                var o = U(e);
                return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : (o ? o.scrollTo(n ? rt(o).scrollLeft() : r, n ? r : rt(o).scrollTop()) : e[i] = r,
                void 0)
            }, e, i, arguments.length, null)
        }
    }),
    rt.each(["top", "left"], function(e, t) {
        rt.cssHooks[t] = C(nt.pixelPosition, function(e, n) {
            return n ? (n = tn(e, t),
            rn.test(n) ? rt(e).position()[t] + "px" : n) : void 0
        })
    }),
    rt.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        rt.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            rt.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i)
                  , s = n || (i === !0 || r === !0 ? "margin" : "border");
                return _t(this, function(t, n, i) {
                    var r;
                    return rt.isWindow(t) ? t.document.documentElement["client" + e] : t.nodeType === 9 ? (r = t.documentElement,
                    Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? rt.css(t, n, s) : rt.style(t, n, i, s)
                }, t, o ? i : void 0, o, null)
            }
        })
    }),
    rt.fn.size = function() {
        return this.length
    }
    ,
    rt.fn.andSelf = rt.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return rt
    });
    var oi = e.jQuery
      , si = e.$;
    return rt.noConflict = function(t) {
        return e.$ === rt && (e.$ = si),
        t && e.jQuery === rt && (e.jQuery = oi),
        rt
    }
    ,
    typeof t === Et && (e.jQuery = e.$ = rt),
    rt
}),
function(e, t, n) {
    function i(n, i) {
        this.wrapper = "string" == typeof n ? t.querySelector(n) : n,
        this.scroller = this.wrapper.children[0],
        this.scrollerStyle = this.scroller.style,
        this.options = {
            disablePointer: !o.hasPointer,
            disableTouch: o.hasPointer || !o.hasTouch,
            disableMouse: o.hasPointer || o.hasTouch,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0,
            bindToWrapper: typeof e.onmousedown == "undefined"
        };
        for (var r in i)
            this.options[r] = i[r];
        this.translateZ = this.options.HWCompositing && o.hasPerspective ? " translateZ(0)" : "",
        this.options.useTransition = o.hasTransition && this.options.useTransition,
        this.options.useTransform = o.hasTransform && this.options.useTransform,
        this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough,
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
        this.options.scrollY = this.options.eventPassthrough == "vertical" ? !1 : this.options.scrollY,
        this.options.scrollX = this.options.eventPassthrough == "horizontal" ? !1 : this.options.scrollX,
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
        this.options.bounceEasing = typeof this.options.bounceEasing == "string" ? o.ease[this.options.bounceEasing] || o.ease.circular : this.options.bounceEasing,
        this.options.resizePolling = this.options.resizePolling === void 0 ? 60 : this.options.resizePolling,
        this.options.tap === !0 && (this.options.tap = "tap"),
        this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"),
        this.x = 0,
        this.y = 0,
        this.directionX = 0,
        this.directionY = 0,
        this._events = {},
        this._init(),
        this.refresh(),
        this.scrollTo(this.options.startX, this.options.startY),
        this.enable()
    }
    var r = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
        e.setTimeout(t, 1e3 / 60)
    }
      , o = function() {
        function i(e) {
            return s === !1 ? !1 : "" === s ? e : s + e.charAt(0).toUpperCase() + e.substr(1)
        }
        var r = {}
          , o = t.createElement("div").style
          , s = function() {
            for (var e, t = ["t", "webkitT", "MozT", "msT", "OT"], n = 0, i = t.length; i > n; n++)
                if (e = t[n] + "ransform",
                e in o)
                    return t[n].substr(0, t[n].length - 1);
            return !1
        }();
        r.getTime = Date.now || function() {
            return (new Date).getTime()
        }
        ,
        r.extend = function(e, t) {
            for (var n in t)
                e[n] = t[n]
        }
        ,
        r.addEvent = function(e, t, n, i) {
            e.addEventListener(t, n, !!i)
        }
        ,
        r.removeEvent = function(e, t, n, i) {
            e.removeEventListener(t, n, !!i)
        }
        ,
        r.prefixPointerEvent = function(t) {
            return e.MSPointerEvent ? "MSPointer" + t.charAt(7).toUpperCase() + t.substr(8) : t
        }
        ,
        r.momentum = function(e, t, i, r, o, s) {
            var a, l, c = e - t, u = n.abs(c) / i;
            return s = void 0 === s ? 6e-4 : s,
            a = e + u * u / (2 * s) * (0 > c ? -1 : 1),
            l = u / s,
            r > a ? (a = o ? r - o / 2.5 * (u / 8) : r,
            c = n.abs(a - e),
            l = c / u) : a > 0 && (a = o ? o / 2.5 * (u / 8) : 0,
            c = n.abs(e) + a,
            l = c / u),
            {
                destination: n.round(a),
                duration: l
            }
        }
        ;
        var a = i("transform");
        return r.extend(r, {
            hasTransform: a !== !1,
            hasPerspective: i("perspective")in o,
            hasTouch: "ontouchstart"in e,
            hasPointer: !(!e.PointerEvent && !e.MSPointerEvent),
            hasTransition: i("transition")in o
        }),
        r.isBadAndroid = function() {
            var t = e.navigator.appVersion;
            if (/Android/.test(t) && !/Chrome\/\d/.test(t)) {
                var n = t.match(/Safari\/(\d+.\d)/);
                return n && "object" == typeof n && n.length >= 2 ? parseFloat(n[1]) < 535.19 : !0
            }
            return !1
        }(),
        r.extend(r.style = {}, {
            transform: a,
            transitionTimingFunction: i("transitionTimingFunction"),
            transitionDuration: i("transitionDuration"),
            transitionDelay: i("transitionDelay"),
            transformOrigin: i("transformOrigin"),
            touchAction: i("touchAction")
        }),
        r.hasClass = function(e, t) {
            var n = new RegExp("(^|\\s)" + t + "(\\s|$)");
            return n.test(e.className)
        }
        ,
        r.addClass = function(e, t) {
            if (!r.hasClass(e, t)) {
                var n = e.className.split(" ");
                n.push(t),
                e.className = n.join(" ")
            }
        }
        ,
        r.removeClass = function(e, t) {
            if (r.hasClass(e, t)) {
                var n = new RegExp("(^|\\s)" + t + "(\\s|$)","g");
                e.className = e.className.replace(n, " ")
            }
        }
        ,
        r.offset = function(e) {
            for (var t = -e.offsetLeft, n = -e.offsetTop; e = e.offsetParent; )
                t -= e.offsetLeft,
                n -= e.offsetTop;
            return {
                left: t,
                top: n
            }
        }
        ,
        r.preventDefaultException = function(e, t) {
            for (var n in t)
                if (t[n].test(e[n]))
                    return !0;
            return !1
        }
        ,
        r.extend(r.eventType = {}, {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        }),
        r.extend(r.ease = {}, {
            quadratic: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fn: function(e) {
                    return e * (2 - e)
                }
            },
            circular: {
                style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                fn: function(e) {
                    return n.sqrt(1 - --e * e)
                }
            },
            back: {
                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                fn: function(e) {
                    var t = 4;
                    return (e -= 1) * e * ((t + 1) * e + t) + 1
                }
            },
            bounce: {
                style: "",
                fn: function(e) {
                    return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }
            },
            elastic: {
                style: "",
                fn: function(e) {
                    var t = .22
                      , i = .4;
                    return 0 === e ? 0 : 1 == e ? 1 : i * n.pow(2, -10 * e) * n.sin((e - t / 4) * 2 * n.PI / t) + 1
                }
            }
        }),
        r.tap = function(e, n) {
            var i = t.createEvent("Event");
            i.initEvent(n, !0, !0),
            i.pageX = e.pageX,
            i.pageY = e.pageY,
            e.target.dispatchEvent(i)
        }
        ,
        r.click = function(n) {
            var i, r = n.target;
            /(SELECT|INPUT|TEXTAREA)/i.test(r.tagName) || (i = t.createEvent(e.MouseEvent ? "MouseEvents" : "Event"),
            i.initEvent("click", !0, !0),
            i.view = n.view || e,
            i.detail = 1,
            i.screenX = r.screenX || 0,
            i.screenY = r.screenY || 0,
            i.clientX = r.clientX || 0,
            i.clientY = r.clientY || 0,
            i.ctrlKey = !!n.ctrlKey,
            i.altKey = !!n.altKey,
            i.shiftKey = !!n.shiftKey,
            i.metaKey = !!n.metaKey,
            i.button = 0,
            i.relatedTarget = null,
            i._constructed = !0,
            r.dispatchEvent(i))
        }
        ,
        r.getTouchAction = function(e, t) {
            var n = "none";
            return "vertical" === e ? n = "pan-y" : "horizontal" === e && (n = "pan-x"),
            t && "none" != n && (n += " pinch-zoom"),
            n
        }
        ,
        r.getRect = function(e) {
            if (e instanceof SVGElement) {
                var t = e.getBoundingClientRect();
                return {
                    top: t.top,
                    left: t.left,
                    width: t.width,
                    height: t.height
                }
            }
            return {
                top: e.offsetTop,
                left: e.offsetLeft,
                width: e.offsetWidth,
                height: e.offsetHeight
            }
        }
        ,
        r
    }();
    i.prototype = {
        version: "5.2.0-snapshot",
        _init: function() {
            this._initEvents()
        },
        destroy: function() {
            this._initEvents(!0),
            clearTimeout(this.resizeTimeout),
            this.resizeTimeout = null,
            this._execEvent("destroy")
        },
        _transitionEnd: function(e) {
            e.target == this.scroller && this.isInTransition && (this._transitionTime(),
            this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1,
            this._execEvent("scrollEnd")))
        },
        _start: function(e) {
            if (o.eventType[e.type] != 1) {
                var t;
                if (t = e.which ? e.button : e.button < 2 ? 0 : e.button == 4 ? 1 : 2,
                0 !== t)
                    return
            }
            if (this.enabled && (!this.initiated || o.eventType[e.type] === this.initiated)) {
                !this.options.preventDefault || o.isBadAndroid || o.preventDefaultException(e.target, this.options.preventDefaultException) || e.preventDefault();
                var i, r = e.touches ? e.touches[0] : e;
                this.initiated = o.eventType[e.type],
                this.moved = !1,
                this.distX = 0,
                this.distY = 0,
                this.directionX = 0,
                this.directionY = 0,
                this.directionLocked = 0,
                this.startTime = o.getTime(),
                this.options.useTransition && this.isInTransition ? (this._transitionTime(),
                this.isInTransition = !1,
                i = this.getComputedPosition(),
                this._translate(n.round(i.x), n.round(i.y)),
                this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1,
                this._execEvent("scrollEnd")),
                this.startX = this.x,
                this.startY = this.y,
                this.absStartX = this.x,
                this.absStartY = this.y,
                this.pointX = r.pageX,
                this.pointY = r.pageY,
                this._execEvent("beforeScrollStart")
            }
        },
        _move: function(e) {
            if (this.enabled && o.eventType[e.type] === this.initiated) {
                this.options.preventDefault && e.preventDefault();
                var t, i, r, s, a = e.touches ? e.touches[0] : e, l = a.pageX - this.pointX, c = a.pageY - this.pointY, u = o.getTime();
                if (this.pointX = a.pageX,
                this.pointY = a.pageY,
                this.distX += l,
                this.distY += c,
                r = n.abs(this.distX),
                s = n.abs(this.distY),
                !(u - this.endTime > 300 && 10 > r && 10 > s)) {
                    if (this.directionLocked || this.options.freeScroll || (this.directionLocked = r > s + this.options.directionLockThreshold ? "h" : s >= r + this.options.directionLockThreshold ? "v" : "n"),
                    this.directionLocked == "h") {
                        if (this.options.eventPassthrough == "vertical")
                            e.preventDefault();
                        else if (this.options.eventPassthrough == "horizontal")
                            return this.initiated = !1,
                            void 0;
                        c = 0
                    } else if (this.directionLocked == "v") {
                        if (this.options.eventPassthrough == "horizontal")
                            e.preventDefault();
                        else if (this.options.eventPassthrough == "vertical")
                            return this.initiated = !1,
                            void 0;
                        l = 0
                    }
                    l = this.hasHorizontalScroll ? l : 0,
                    c = this.hasVerticalScroll ? c : 0,
                    t = this.x + l,
                    i = this.y + c,
                    (t > 0 || t < this.maxScrollX) && (t = this.options.bounce ? this.x + l / 3 : t > 0 ? 0 : this.maxScrollX),
                    (i > 0 || i < this.maxScrollY) && (i = this.options.bounce ? this.y + c / 3 : i > 0 ? 0 : this.maxScrollY),
                    this.directionX = l > 0 ? -1 : 0 > l ? 1 : 0,
                    this.directionY = c > 0 ? -1 : 0 > c ? 1 : 0,
                    this.moved || this._execEvent("scrollStart"),
                    this.moved = !0,
                    this._translate(t, i),
                    u - this.startTime > 300 && (this.startTime = u,
                    this.startX = this.x,
                    this.startY = this.y)
                }
            }
        },
        _end: function(e) {
            if (this.enabled && o.eventType[e.type] === this.initiated) {
                this.options.preventDefault && !o.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
                var t, i, r = (e.changedTouches ? e.changedTouches[0] : e,
                o.getTime() - this.startTime), s = n.round(this.x), a = n.round(this.y), l = n.abs(s - this.startX), c = n.abs(a - this.startY), u = 0, d = "";
                if (this.isInTransition = 0,
                this.initiated = 0,
                this.endTime = o.getTime(),
                !this.resetPosition(this.options.bounceTime))
                    return this.scrollTo(s, a),
                    this.moved ? this._events.flick && 200 > r && 100 > l && 100 > c ? (this._execEvent("flick"),
                    void 0) : (this.options.momentum && 300 > r && (t = this.hasHorizontalScroll ? o.momentum(this.x, this.startX, r, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                        destination: s,
                        duration: 0
                    },
                    i = this.hasVerticalScroll ? o.momentum(this.y, this.startY, r, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                        destination: a,
                        duration: 0
                    },
                    s = t.destination,
                    a = i.destination,
                    u = n.max(t.duration, i.duration),
                    this.isInTransition = 1),
                    s != this.x || a != this.y ? ((s > 0 || s < this.maxScrollX || a > 0 || a < this.maxScrollY) && (d = o.ease.quadratic),
                    this.scrollTo(s, a, u, d),
                    void 0) : (this._execEvent("scrollEnd"),
                    void 0)) : (this.options.tap && o.tap(e, this.options.tap),
                    this.options.click && o.click(e),
                    this._execEvent("scrollCancel"),
                    void 0)
            }
        },
        _resize: function() {
            var e = this;
            clearTimeout(this.resizeTimeout),
            this.resizeTimeout = setTimeout(function() {
                e.refresh()
            }, this.options.resizePolling)
        },
        resetPosition: function(e) {
            var t = this.x
              , n = this.y;
            return e = e || 0,
            !this.hasHorizontalScroll || this.x > 0 ? t = 0 : this.x < this.maxScrollX && (t = this.maxScrollX),
            !this.hasVerticalScroll || this.y > 0 ? n = 0 : this.y < this.maxScrollY && (n = this.maxScrollY),
            t == this.x && n == this.y ? !1 : (this.scrollTo(t, n, e, this.options.bounceEasing),
            !0)
        },
        disable: function() {
            this.enabled = !1
        },
        enable: function() {
            this.enabled = !0
        },
        refresh: function() {
            o.getRect(this.wrapper),
            this.wrapperWidth = this.wrapper.clientWidth,
            this.wrapperHeight = this.wrapper.clientHeight;
            var e = o.getRect(this.scroller);
            this.scrollerWidth = e.width,
            this.scrollerHeight = e.height,
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
            this.hasHorizontalScroll || (this.maxScrollX = 0,
            this.scrollerWidth = this.wrapperWidth),
            this.hasVerticalScroll || (this.maxScrollY = 0,
            this.scrollerHeight = this.wrapperHeight),
            this.endTime = 0,
            this.directionX = 0,
            this.directionY = 0,
            o.hasPointer && !this.options.disablePointer && (this.wrapper.style[o.style.touchAction] = o.getTouchAction(this.options.eventPassthrough, !0),
            this.wrapper.style[o.style.touchAction] || (this.wrapper.style[o.style.touchAction] = o.getTouchAction(this.options.eventPassthrough, !1))),
            this.wrapperOffset = o.offset(this.wrapper),
            this._execEvent("refresh"),
            this.resetPosition()
        },
        on: function(e, t) {
            this._events[e] || (this._events[e] = []),
            this._events[e].push(t)
        },
        off: function(e, t) {
            if (this._events[e]) {
                var n = this._events[e].indexOf(t);
                n > -1 && this._events[e].splice(n, 1)
            }
        },
        _execEvent: function(e) {
            if (this._events[e]) {
                var t = 0
                  , n = this._events[e].length;
                if (n)
                    for (; n > t; t++)
                        this._events[e][t].apply(this, [].slice.call(arguments, 1))
            }
        },
        scrollBy: function(e, t, n, i) {
            e = this.x + e,
            t = this.y + t,
            n = n || 0,
            this.scrollTo(e, t, n, i)
        },
        scrollTo: function(e, t, n, i) {
            i = i || o.ease.circular,
            this.isInTransition = this.options.useTransition && n > 0;
            var r = this.options.useTransition && i.style;
            !n || r ? (r && (this._transitionTimingFunction(i.style),
            this._transitionTime(n)),
            this._translate(e, t)) : this._animate(e, t, n, i.fn)
        },
        scrollToElement: function(e, t, i, r, s) {
            if (e = e.nodeType ? e : this.scroller.querySelector(e)) {
                var a = o.offset(e);
                a.left -= this.wrapperOffset.left,
                a.top -= this.wrapperOffset.top;
                var l = o.getRect(e)
                  , c = o.getRect(this.wrapper);
                i === !0 && (i = n.round(l.width / 2 - c.width / 2)),
                r === !0 && (r = n.round(l.height / 2 - c.height / 2)),
                a.left -= i || 0,
                a.top -= r || 0,
                a.left = a.left > 0 ? 0 : a.left < this.maxScrollX ? this.maxScrollX : a.left,
                a.top = a.top > 0 ? 0 : a.top < this.maxScrollY ? this.maxScrollY : a.top,
                t = void 0 === t || null === t || "auto" === t ? n.max(n.abs(this.x - a.left), n.abs(this.y - a.top)) : t,
                this.scrollTo(a.left, a.top, t, s)
            }
        },
        _transitionTime: function(e) {
            if (this.options.useTransition) {
                e = e || 0;
                var t = o.style.transitionDuration;
                if (t && (this.scrollerStyle[t] = e + "ms",
                !e && o.isBadAndroid)) {
                    this.scrollerStyle[t] = "0.0001ms";
                    var n = this;
                    r(function() {
                        n.scrollerStyle[t] === "0.0001ms" && (n.scrollerStyle[t] = "0s")
                    })
                }
            }
        },
        _transitionTimingFunction: function(e) {
            this.scrollerStyle[o.style.transitionTimingFunction] = e
        },
        _translate: function(e, t) {
            this.options.useTransform ? this.scrollerStyle[o.style.transform] = "translate(" + e + "px," + t + "px)" + this.translateZ : (e = n.round(e),
            t = n.round(t),
            this.scrollerStyle.left = e + "px",
            this.scrollerStyle.top = t + "px"),
            this.x = e,
            this.y = t
        },
        _initEvents: function(t) {
            var n = t ? o.removeEvent : o.addEvent
              , i = this.options.bindToWrapper ? this.wrapper : e;
            n(e, "orientationchange", this),
            n(e, "resize", this),
            this.options.click && n(this.wrapper, "click", this, !0),
            this.options.disableMouse || (n(this.wrapper, "mousedown", this),
            n(i, "mousemove", this),
            n(i, "mousecancel", this),
            n(i, "mouseup", this)),
            o.hasPointer && !this.options.disablePointer && (n(this.wrapper, o.prefixPointerEvent("pointerdown"), this),
            n(i, o.prefixPointerEvent("pointermove"), this),
            n(i, o.prefixPointerEvent("pointercancel"), this),
            n(i, o.prefixPointerEvent("pointerup"), this)),
            o.hasTouch && !this.options.disableTouch && (n(this.wrapper, "touchstart", this),
            n(i, "touchmove", this),
            n(i, "touchcancel", this),
            n(i, "touchend", this)),
            n(this.scroller, "transitionend", this),
            n(this.scroller, "webkitTransitionEnd", this),
            n(this.scroller, "oTransitionEnd", this),
            n(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function() {
            var t, n, i = e.getComputedStyle(this.scroller, null);
            return this.options.useTransform ? (i = i[o.style.transform].split(")")[0].split(", "),
            t = +(i[12] || i[4]),
            n = +(i[13] || i[5])) : (t = +i.left.replace(/[^-\d.]/g, ""),
            n = +i.top.replace(/[^-\d.]/g, "")),
            {
                x: t,
                y: n
            }
        },
        _animate: function(e, t, n, i) {
            function s() {
                var p, h, f, m = o.getTime();
                return m >= d ? (a.isAnimating = !1,
                a._translate(e, t),
                a.resetPosition(a.options.bounceTime) || a._execEvent("scrollEnd"),
                void 0) : (m = (m - u) / n,
                f = i(m),
                p = (e - l) * f + l,
                h = (t - c) * f + c,
                a._translate(p, h),
                a.isAnimating && r(s),
                void 0)
            }
            var a = this
              , l = this.x
              , c = this.y
              , u = o.getTime()
              , d = u + n;
            this.isAnimating = !0,
            s()
        },
        handleEvent: function(e) {
            switch (e.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
                this._start(e);
                break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
                this._move(e);
                break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
                this._end(e);
                break;
            case "orientationchange":
            case "resize":
                this._resize();
                break;
            case "transitionend":
            case "webkitTransitionEnd":
            case "oTransitionEnd":
            case "MSTransitionEnd":
                this._transitionEnd(e);
                break;
            case "wheel":
            case "DOMMouseScroll":
            case "mousewheel":
                this._wheel(e);
                break;
            case "keydown":
                this._key(e);
                break;
            case "click":
                this.enabled && !e._constructed && (e.preventDefault(),
                e.stopPropagation())
            }
        }
    },
    i.utils = o,
    "undefined" != typeof module && module.exports ? module.exports = i : "function" == typeof define && define.amd ? define(function() {
        return i
    }) : e.IScroll = i
}(window, document, Math),
String.prototype.addUrlParameter = function(e, t) {
    return t ? this + (this.indexOf("?") != -1 ? "&" : "?") + e + "=" + t : this + ""
}
;
var PrivacyPolicy = function(e) {
    e = e || {},
    this.id = e.id,
    this.inIframe = e.inIframe,
    this.wHeight = e.wHeight,
    this.noBrand = e.noBrand,
    this.skipAnalytics = !1,
    this.phantomJs = !1,
    this.myScroll = null,
    this.cssString = ""
};
PrivacyPolicy.prototype.start = function() {
    this.readConfFromUrl(),
    this.updateStyles(),
    (this.isOldMarkup() || isMobile()) && this.checkForMobile(),
    this.checkAnchors(),
    this.checkAnalyticsMode()
}
,
PrivacyPolicy.prototype.readConfFromUrl = function() {
    this.newMarkupValue = getParameterByName("newmarkup"),
    this.inIframe = getParameterByName("ifr") == "true",
    this.wHeight = getParameterByName("height") ? parseInt(getParameterByName("height")) : this.inIframe ? 600 : null,
    this.skipAnalytics = getParameterByName("an") == "no",
    this.phantomJs = getParameterByName("phantomjs") == "true"
}
,
PrivacyPolicy.prototype.isOldMarkup = function() {
    return this.newMarkupValue === "no" || this.newMarkupValue === null
}
,
PrivacyPolicy.prototype.updateStyles = function() {
    this.inIframe ? ((this.isOldMarkup() || isMobile()) && (this.cssString += "#i_policy #wbars {height:" + (this.noBrand ? this.wHeight : (this.wHeight || 0) - 81) + "px;}\n"),
    this.cssString += "#i_policy .iub_container > .iub_footer {  -webkit-box-shadow: none;  -moz-box-shadow: none;  box-shadow: none;  border-top: 1px solid #DDD; position: sticky; bottom: 0;}\n",
    this.cssString += "#i_policy.iubenda_vip_policy.iubenda_fixed_policy .iub_container {max-width: none; padding-top: 0;}") : (this.cssString += "#i_policy .close {display: none;}\n",
    this.cssString += "#i_policy #wbars {   overflow-y: auto;   -webkit-box-shadow: none;   -moz-box-shadow: none;   box-shadow: none;   height: auto; }\n",
    this.cssString += "#i_policy .iub_container {  margin-top: 30px;  margin-bottom: 30px; }\n",
    this.cssString += "#i_policy .iub_container > .iub_footer {  -webkit-box-shadow: none;  -moz-box-shadow: none;  box-shadow: none;  -webkit-border-radius: none;  -moz-border-radius: none;  border-radius: none; }\n"),
    insertStylesheet(this.cssString)
}
,
PrivacyPolicy.prototype.checkForMobile = function() {
    var e = this;
    if (e.inIframe) {
        var t = isMobile();
        t && (window.addEventListener("load", e.loadedForMobile, !1),
        $(".expand .expand-click").click(function() {
            setTimeout(function() {
                window.myScroll.refresh()
            }, 500)
        }))
    }
}
,
PrivacyPolicy.prototype.loadedForMobile = function() {
    var e = this;
    setTimeout(function() {
        window.myScroll ? window.myScroll.destroy() : null,
        window.myScroll = null;
        var t = e.inIframe ? document.getElementById("wbars_all") : document.getElementById("wbars");
        window.myScroll = new IScroll(t,{
            useTransition: !0,
            click: !0
        })
    }, 0)
}
,
PrivacyPolicy.prototype.checkAnchors = function() {
    var e = this;
    $(".iub_container").find("a").each(function() {
        $(this).hasClass("iframe-preserve") ? e.inIframe && $(this).attr("href", function(t, n) {
            return n.addUrlParameter("ifr", "true").addUrlParameter("height", e.wHeight || null).addUrlParameter("newmarkup", e.isOldMarkup() ? "no" : "yes")
        }) : $(this).attr("target") || ($(this).attr("target", "_blank"),
        $(this).attr("rel") !== "noopener" && $(this).attr("rel", "noopener"))
    })
}
,
PrivacyPolicy.prototype.checkAnalyticsMode = function() {
    this.skipAnalytics && $("a.an-preserve").attr("href", function(e, t) {
        return t.addUrlParameter("an", "no")
    })
}
;
