 <
    script > //<![CDATA[
    //crash reporter code block
    ! function () {
        ! function e(t, n, r) {
            function o(a, i) {
                if (!n[a]) {
                    if (!t[a]) {
                        var f = "function" == typeof require && require;
                        if (!i && f) return f(a, !0);
                        if (u) return u(a, !0);
                        var s = Error("Cannot find module '" + a + "'");
                        throw s.code = "MODULE_NOT_FOUND", s
                    }
                    var p = n[a] = {
                        exports: {}
                    };
                    t[a][0].call(p.exports, function (e) {
                        var n = t[a][1][e];
                        return o(n ? n : e)
                    }, p, p.exports, e, t, n, r)
                }
                return n[a].exports
            }
            for (var u = "function" == typeof require && require, a = 0; a < r.length; a++) o(r[a]);
            return o
        }({
            1: [function (require, module, exports) {
                "object" != typeof JSON && (JSON = {}),
                    function () {
                        "use strict";

                        function f(e) {
                            return 10 > e ? "0" + e : e
                        }

                        function this_value() {
                            return this.valueOf()
                        }

                        function quote(e) {
                            return rx_escapable.lastIndex = 0, rx_escapable.test(e) ? '"' + e.replace(rx_escapable, function (e) {
                                var t = meta[e];
                                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                            }) + '"' : '"' + e + '"'
                        }

                        function str(e, t) {
                            var n, r, o, u, a, i = gap,
                                f = t[e];
                            switch (f && "object" == typeof f && "function" == typeof f.toJSON && (f = f.toJSON(e)), "function" == typeof rep && (f = rep.call(t, e, f)), typeof f) {
                                case "string":
                                    return quote(f);
                                case "number":
                                    return isFinite(f) ? f + "" : "null";
                                case "boolean":
                                case "null":
                                    return f + "";
                                case "object":
                                    if (!f) return "null";
                                    if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(f)) {
                                        for (u = f.length, n = 0; u > n; n += 1) a[n] = str(n, f) || "null";
                                        return o = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + i + "]" : "[" + a.join(",") + "]", gap = i, o
                                    }
                                    if (rep && "object" == typeof rep)
                                        for (u = rep.length, n = 0; u > n; n += 1) "string" == typeof rep[n] && (r = rep[n], o = str(r, f), o && a.push(quote(r) + (gap ? ": " : ":") + o));
                                    else
                                        for (r in f) Object.prototype.hasOwnProperty.call(f, r) && (o = str(r, f), o && a.push(quote(r) + (gap ? ": " : ":") + o));
                                    return o = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + i + "}" : "{" + a.join(",") + "}", gap = i, o
                            }
                        }
                        var rx_one = /^[\],:{}\s]*$/,
                            rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                            rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                            rx_four = /(?:^|:|,)(?:\s*\[)+/g,
                            rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                            rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
                            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
                        }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value);
                        var gap, indent, meta, rep;
                        "function" != typeof JSON.stringify && (meta = {
                            "\b": "\\b",
                            "  ": "\\t",
                            "\n": "\\n",
                            "\f": "\\f",
                            "\r": "\\r",
                            '"': '\\"',
                            "\\": "\\\\"
                        }, JSON.stringify = function (e, t, n) {
                            var r;
                            if (gap = "", indent = "", "number" == typeof n)
                                for (r = 0; n > r; r += 1) indent += " ";
                            else "string" == typeof n && (indent = n);
                            if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw Error("JSON.stringify");
                            return str("", {
                                "": e
                            })
                        }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
                            function walk(e, t) {
                                var n, r, o = e[t];
                                if (o && "object" == typeof o)
                                    for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (r = walk(o, n), void 0 !== r ? o[n] = r : delete o[n]);
                                return reviver.call(e, t, o)
                            }
                            var j;
                            if (text += "", rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (e) {
                                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                            })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                                "": j
                            }, "") : j;
                            throw new SyntaxError("JSON.parse")
                        })
                    }()
            }, {}],
            2: [function (e, t, n) {
                (function (e) {
                    function t(t) {
                        return t && e.XDomainRequest && !/MSIE 1/.test(navigator.userAgent) ? new XDomainRequest : e.XMLHttpRequest ? new XMLHttpRequest : void 0
                    }

                    function r(e, t, n) {
                        e[t] = e[t] || n
                    }
                    var o = ["responseType", "withCredentials", "timeout", "onprogress"];
                    n.ajax = function (n, u) {
                        function a(e, t) {
                            return function () {
                                p || u(void 0 === c.status ? e : c.status, c.response || c.responseText || t, c), p = !0
                            }
                        }
                        var i = n.headers || {},
                            f = n.body,
                            s = n.method || (f ? "POST" : "GET"),
                            p = !1,
                            c = t(n.cors);
                        c.open(s, n.url, !0);
                        var l = c.onload = a(200);
                        c.onreadystatechange = function () {
                            4 === c.readyState && l()
                        }, c.onerror = a(null, "Error"), c.ontimeout = a(null, "Timeout"), c.onabort = a(null, "Abort"), f && (r(i, "X-Requested-With", "XMLHttpRequest"), e.FormData && f instanceof e.FormData || r(i, "Content-Type", "application/x-www-form-urlencoded"));
                        for (var d, g = 0, v = o.length; v > g; g++) d = o[g], void 0 !== n[d] && (c[d] = n[d]);
                        for (var d in i) c.setRequestHeader(d, i[d]);
                        return c.send(f), c
                    }
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            3: [function (e) {
                var t = window.JSON || e("json2"),
                    n = e("nanoajax");
                (function () {
                    "use strict";
                    var e = "/events/analytics/public/v1/events/raw/",
                        r = function (e, t, n) {
                            e.attachEvent ? (e["e" + t + n] = n, e[t + n] = function () {
                                e["e" + t + n](window.event)
                            }, e.attachEvent("on" + t, e[t + n])) : e.addEventListener(t, n, !1)
                        },
                        o = function (e) {
                            var t = RegExp(e + "=([^;]+)"),
                                n = t.exec(document.cookie);
                            return null != n ? decodeURIComponent(n[1]) : null
                        },
                        u = {
                            site: "chase3.0",
                            app: {
                                name: "CPO",
                                language: "en",
                                version: "3.0"
                            },
                            vistor: {
                                eci: o("v1st"),
                                profileId: "",
                                visitorId: ""
                            },
                            screen: {
                                id: "",
                                currentURL: window.location.href
                            },
                            payload: {
                                eventType: "log",
                                logger: "crash-reporter"
                            }
                        },
                        a = function (e, t) {
                            var n = t || {};
                            for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
                            return n
                        },
                        i = o("authcsrftoken");
                    window.crashreporter = {
                        initialize: function () {
                            r(window, "error", function () {
                                window.crashreporter.report.apply(window.crashreporter, arguments)
                            })
                        },
                        report: function (r) {
                            var o = a(u),
                                f = {
                                    events: []
                                };
                            o.timestamp = (new Date).valueOf(), o.payload.data = {
                                level: "FATAL",
                                message: {
                                    message: r.message,
                                    source: r.filename,
                                    lineno: r.lineno,
                                    colno: r.colno,
                                    stack: r.stack
                                }
                            }, f.events.push(o), n.ajax({
                                url: e,
                                method: "POST",
                                body: t.stringify(f),
                                headers: {
                                    "Content-Type": "application/json",
                                    "x-jpmc-csrf-token": i
                                }
                            }, function () { })
                        }
                    }
                }).call(this)
            }, {
                json2: 1,
                nanoajax: 2
            }]
        }, {}, [3])
    }();
window.crashreporter.initialize();

//]]></script>

 
