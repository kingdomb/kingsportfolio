/* Modernizr 2.0.6 (Custom Build) | MIT & BSD */
window.Modernizr = (function(e, t, n) {
  function r(e) {
    b.cssText = e;
  }
  function o(e, t) {
    return r(S.join(e + ";") + (t || ""));
  }
  function a(e, t) {
    return typeof e === t;
  }
  function i(e, t) {
    return !!~("" + e).indexOf(t);
  }
  function c(e, t) {
    for (var r in e) {
      var o = e[r];
      if (!i(o, "-") && b[o] !== n) return "pfx" == t ? o : !0;
    }
    return !1;
  }
  function s(e, t, r) {
    for (var o in e) {
      var i = t[e[o]];
      if (i !== n)
        return r === !1 ? e[o] : a(i, "function") ? i.bind(r || t) : i;
    }
    return !1;
  }
  function u(e, t, n) {
    var r = e.charAt(0).toUpperCase() + e.slice(1),
      o = (e + " " + k.join(r + " ") + r).split(" ");
    return a(t, "string") || a(t, "undefined")
      ? c(o, t)
      : ((o = (e + " " + T.join(r + " ") + r).split(" ")), s(o, t, n));
  }
  function l() {
    (p.input = (function(n) {
      for (var r = 0, o = n.length; o > r; r++) j[n[r]] = !!(n[r] in E);
      return (
        j.list &&
          (j.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)),
        j
      );
    })(
      "autocomplete autofocus list placeholder max min multiple pattern required step".split(
        " "
      )
    )),
      (p.inputtypes = (function(e) {
        for (var r, o, a, i = 0, c = e.length; c > i; i++)
          E.setAttribute("type", (o = e[i])),
            (r = "text" !== E.type),
            r &&
              ((E.value = x),
              (E.style.cssText = "position:absolute;visibility:hidden;"),
              /^range$/.test(o) && E.style.WebkitAppearance !== n
                ? (g.appendChild(E),
                  (a = t.defaultView),
                  (r =
                    a.getComputedStyle &&
                    "textfield" !==
                      a.getComputedStyle(E, null).WebkitAppearance &&
                    0 !== E.offsetHeight),
                  g.removeChild(E))
                : /^(search|tel)$/.test(o) ||
                  (r = /^(url|email)$/.test(o)
                    ? E.checkValidity && E.checkValidity() === !1
                    : E.value != x)),
            (P[e[i]] = !!r);
        return P;
      })(
        "search tel url email datetime date month week time datetime-local number range color".split(
          " "
        )
      ));
  }
  var d,
    f,
    m = "2.8.3",
    p = {},
    h = !0,
    g = t.documentElement,
    v = "modernizr",
    y = t.createElement(v),
    b = y.style,
    E = t.createElement("input"),
    x = ":)",
    w = {}.toString,
    S = " -webkit- -moz- -o- -ms- ".split(" "),
    C = "Webkit Moz O ms",
    k = C.split(" "),
    T = C.toLowerCase().split(" "),
    N = { svg: "http://www.w3.org/2000/svg" },
    M = {},
    P = {},
    j = {},
    $ = [],
    D = $.slice,
    F = function(e, n, r, o) {
      var a,
        i,
        c,
        s,
        u = t.createElement("div"),
        l = t.body,
        d = l || t.createElement("body");
      if (parseInt(r, 10))
        for (; r--; )
          (c = t.createElement("div")),
            (c.id = o ? o[r] : v + (r + 1)),
            u.appendChild(c);
      return (
        (a = ["&#173;", '<style id="s', v, '">', e, "</style>"].join("")),
        (u.id = v),
        ((l ? u : d).innerHTML += a),
        d.appendChild(u),
        l ||
          ((d.style.background = ""),
          (d.style.overflow = "hidden"),
          (s = g.style.overflow),
          (g.style.overflow = "hidden"),
          g.appendChild(d)),
        (i = n(u, e)),
        l
          ? u.parentNode.removeChild(u)
          : (d.parentNode.removeChild(d), (g.style.overflow = s)),
        !!i
      );
    },
    z = function(t) {
      var n = e.matchMedia || e.msMatchMedia;
      if (n) return (n(t) && n(t).matches) || !1;
      var r;
      return (
        F("@media " + t + " { #" + v + " { position: absolute; } }", function(
          t
        ) {
          r =
            "absolute" ==
            (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle)
              .position;
        }),
        r
      );
    },
    A = (function() {
      function e(e, o) {
        (o = o || t.createElement(r[e] || "div")), (e = "on" + e);
        var i = e in o;
        return (
          i ||
            (o.setAttribute || (o = t.createElement("div")),
            o.setAttribute &&
              o.removeAttribute &&
              (o.setAttribute(e, ""),
              (i = a(o[e], "function")),
              a(o[e], "undefined") || (o[e] = n),
              o.removeAttribute(e))),
          (o = null),
          i
        );
      }
      var r = {
        select: "input",
        change: "input",
        submit: "form",
        reset: "form",
        error: "img",
        load: "img",
        abort: "img"
      };
      return e;
    })(),
    L = {}.hasOwnProperty;
  (f =
    a(L, "undefined") || a(L.call, "undefined")
      ? function(e, t) {
          return t in e && a(e.constructor.prototype[t], "undefined");
        }
      : function(e, t) {
          return L.call(e, t);
        }),
    Function.prototype.bind ||
      (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError();
        var n = D.call(arguments, 1),
          r = function() {
            if (this instanceof r) {
              var o = function() {};
              o.prototype = t.prototype;
              var a = new o(),
                i = t.apply(a, n.concat(D.call(arguments)));
              return Object(i) === i ? i : a;
            }
            return t.apply(e, n.concat(D.call(arguments)));
          };
        return r;
      }),
    (M.flexbox = function() {
      return u("flexWrap");
    }),
    (M.flexboxlegacy = function() {
      return u("boxDirection");
    }),
    (M.canvas = function() {
      var e = t.createElement("canvas");
      return !(!e.getContext || !e.getContext("2d"));
    }),
    (M.canvastext = function() {
      return !(
        !p.canvas ||
        !a(t.createElement("canvas").getContext("2d").fillText, "function")
      );
    }),
    (M.webgl = function() {
      return !!e.WebGLRenderingContext;
    }),
    (M.touch = function() {
      var n;
      return (
        "ontouchstart" in e || (e.DocumentTouch && t instanceof DocumentTouch)
          ? (n = !0)
          : F(
              [
                "@media (",
                S.join("touch-enabled),("),
                v,
                ")",
                "{#modernizr{top:9px;position:absolute}}"
              ].join(""),
              function(e) {
                n = 9 === e.offsetTop;
              }
            ),
        n
      );
    }),
    (M.geolocation = function() {
      return "geolocation" in navigator;
    }),
    (M.postmessage = function() {
      return !!e.postMessage;
    }),
    (M.websqldatabase = function() {
      return !!e.openDatabase;
    }),
    (M.indexedDB = function() {
      return !!u("indexedDB", e);
    }),
    (M.hashchange = function() {
      return A("hashchange", e) && (t.documentMode === n || t.documentMode > 7);
    }),
    (M.history = function() {
      return !(!e.history || !history.pushState);
    }),
    (M.draganddrop = function() {
      var e = t.createElement("div");
      return "draggable" in e || ("ondragstart" in e && "ondrop" in e);
    }),
    (M.websockets = function() {
      return "WebSocket" in e || "MozWebSocket" in e;
    }),
    (M.rgba = function() {
      return (
        r("background-color:rgba(150,255,150,.5)"), i(b.backgroundColor, "rgba")
      );
    }),
    (M.hsla = function() {
      return (
        r("background-color:hsla(120,40%,100%,.5)"),
        i(b.backgroundColor, "rgba") || i(b.backgroundColor, "hsla")
      );
    }),
    (M.multiplebgs = function() {
      return (
        r("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(b.background)
      );
    }),
    (M.backgroundsize = function() {
      return u("backgroundSize");
    }),
    (M.borderimage = function() {
      return u("borderImage");
    }),
    (M.borderradius = function() {
      return u("borderRadius");
    }),
    (M.boxshadow = function() {
      return u("boxShadow");
    }),
    (M.textshadow = function() {
      return "" === t.createElement("div").style.textShadow;
    }),
    (M.opacity = function() {
      return o("opacity:.55"), /^0.55$/.test(b.opacity);
    }),
    (M.cssanimations = function() {
      return u("animationName");
    }),
    (M.csscolumns = function() {
      return u("columnCount");
    }),
    (M.cssgradients = function() {
      var e = "background-image:",
        t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        n = "linear-gradient(left top,#9f9, white);";
      return (
        r(
          (e + "-webkit- ".split(" ").join(t + e) + S.join(n + e)).slice(
            0,
            -e.length
          )
        ),
        i(b.backgroundImage, "gradient")
      );
    }),
    (M.cssreflections = function() {
      return u("boxReflect");
    }),
    (M.csstransforms = function() {
      return !!u("transform");
    }),
    (M.csstransforms3d = function() {
      var e = !!u("perspective");
      return (
        e &&
          "webkitPerspective" in g.style &&
          F(
            "@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
            function(t) {
              e = 9 === t.offsetLeft && 3 === t.offsetHeight;
            }
          ),
        e
      );
    }),
    (M.csstransitions = function() {
      return u("transition");
    }),
    (M.fontface = function() {
      var e;
      return (
        F('@font-face {font-family:"font";src:url("https://")}', function(
          n,
          r
        ) {
          var o = t.getElementById("smodernizr"),
            a = o.sheet || o.styleSheet,
            i = a
              ? a.cssRules && a.cssRules[0]
                ? a.cssRules[0].cssText
                : a.cssText || ""
              : "";
          e = /src/i.test(i) && 0 === i.indexOf(r.split(" ")[0]);
        }),
        e
      );
    }),
    (M.generatedcontent = function() {
      var e;
      return (
        F(
          [
            "#",
            v,
            "{font:0/0 a}#",
            v,
            ':after{content:"',
            x,
            '";visibility:hidden;font:3px/1 a}'
          ].join(""),
          function(t) {
            e = t.offsetHeight >= 3;
          }
        ),
        e
      );
    }),
    (M.video = function() {
      var e = t.createElement("video"),
        n = !1;
      try {
        (n = !!e.canPlayType) &&
          ((n = new Boolean(n)),
          (n.ogg = e
            .canPlayType('video/ogg; codecs="theora"')
            .replace(/^no$/, "")),
          (n.h264 = e
            .canPlayType('video/mp4; codecs="avc1.42E01E"')
            .replace(/^no$/, "")),
          (n.webm = e
            .canPlayType('video/webm; codecs="vp8, vorbis"')
            .replace(/^no$/, "")));
      } catch (r) {}
      return n;
    }),
    (M.audio = function() {
      var e = t.createElement("audio"),
        n = !1;
      try {
        (n = !!e.canPlayType) &&
          ((n = new Boolean(n)),
          (n.ogg = e
            .canPlayType('audio/ogg; codecs="vorbis"')
            .replace(/^no$/, "")),
          (n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, "")),
          (n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "")),
          (n.m4a = (
            e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")
          ).replace(/^no$/, "")));
      } catch (r) {}
      return n;
    }),
    (M.localstorage = function() {
      try {
        return localStorage.setItem(v, v), localStorage.removeItem(v), !0;
      } catch (e) {
        return !1;
      }
    }),
    (M.sessionstorage = function() {
      try {
        return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0;
      } catch (e) {
        return !1;
      }
    }),
    (M.webworkers = function() {
      return !!e.Worker;
    }),
    (M.applicationcache = function() {
      return !!e.applicationCache;
    }),
    (M.svg = function() {
      return (
        !!t.createElementNS && !!t.createElementNS(N.svg, "svg").createSVGRect
      );
    }),
    (M.inlinesvg = function() {
      var e = t.createElement("div");
      return (
        (e.innerHTML = "<svg/>"),
        (e.firstChild && e.firstChild.namespaceURI) == N.svg
      );
    }),
    (M.smil = function() {
      return (
        !!t.createElementNS &&
        /SVGAnimate/.test(w.call(t.createElementNS(N.svg, "animate")))
      );
    }),
    (M.svgclippaths = function() {
      return (
        !!t.createElementNS &&
        /SVGClipPath/.test(w.call(t.createElementNS(N.svg, "clipPath")))
      );
    });
  for (var H in M)
    f(M, H) &&
      ((d = H.toLowerCase()), (p[d] = M[H]()), $.push((p[d] ? "" : "no-") + d));
  return (
    p.input || l(),
    (p.addTest = function(e, t) {
      if ("object" == typeof e) for (var r in e) f(e, r) && p.addTest(r, e[r]);
      else {
        if (((e = e.toLowerCase()), p[e] !== n)) return p;
        (t = "function" == typeof t ? t() : t),
          "undefined" != typeof h &&
            h &&
            (g.className += " " + (t ? "" : "no-") + e),
          (p[e] = t);
      }
      return p;
    }),
    r(""),
    (y = E = null),
    (function(e, t) {
      function n(e, t) {
        var n = e.createElement("p"),
          r = e.getElementsByTagName("head")[0] || e.documentElement;
        return (
          (n.innerHTML = "x<style>" + t + "</style>"),
          r.insertBefore(n.lastChild, r.firstChild)
        );
      }
      function r() {
        var e = y.elements;
        return "string" == typeof e ? e.split(" ") : e;
      }
      function o(e) {
        var t = v[e[h]];
        return t || ((t = {}), g++, (e[h] = g), (v[g] = t)), t;
      }
      function a(e, n, r) {
        if ((n || (n = t), l)) return n.createElement(e);
        r || (r = o(n));
        var a;
        return (
          (a = r.cache[e]
            ? r.cache[e].cloneNode()
            : p.test(e)
            ? (r.cache[e] = r.createElem(e)).cloneNode()
            : r.createElem(e)),
          !a.canHaveChildren || m.test(e) || a.tagUrn
            ? a
            : r.frag.appendChild(a)
        );
      }
      function i(e, n) {
        if ((e || (e = t), l)) return e.createDocumentFragment();
        n = n || o(e);
        for (
          var a = n.frag.cloneNode(), i = 0, c = r(), s = c.length;
          s > i;
          i++
        )
          a.createElement(c[i]);
        return a;
      }
      function c(e, t) {
        t.cache ||
          ((t.cache = {}),
          (t.createElem = e.createElement),
          (t.createFrag = e.createDocumentFragment),
          (t.frag = t.createFrag())),
          (e.createElement = function(n) {
            return y.shivMethods ? a(n, e, t) : t.createElem(n);
          }),
          (e.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              r()
                .join()
                .replace(/[\w\-]+/g, function(e) {
                  return (
                    t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                  );
                }) +
              ");return n}"
          )(y, t.frag));
      }
      function s(e) {
        e || (e = t);
        var r = o(e);
        return (
          !y.shivCSS ||
            u ||
            r.hasCSS ||
            (r.hasCSS = !!n(
              e,
              "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
            )),
          l || c(e, r),
          e
        );
      }
      var u,
        l,
        d = "3.7.0",
        f = e.html5 || {},
        m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        h = "_html5shiv",
        g = 0,
        v = {};
      !(function() {
        try {
          var e = t.createElement("a");
          (e.innerHTML = "<xyz></xyz>"),
            (u = "hidden" in e),
            (l =
              1 == e.childNodes.length ||
              (function() {
                t.createElement("a");
                var e = t.createDocumentFragment();
                return (
                  "undefined" == typeof e.cloneNode ||
                  "undefined" == typeof e.createDocumentFragment ||
                  "undefined" == typeof e.createElement
                );
              })());
        } catch (n) {
          (u = !0), (l = !0);
        }
      })();
      var y = {
        elements:
          f.elements ||
          "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
        version: d,
        shivCSS: f.shivCSS !== !1,
        supportsUnknownElements: l,
        shivMethods: f.shivMethods !== !1,
        type: "default",
        shivDocument: s,
        createElement: a,
        createDocumentFragment: i
      };
      (e.html5 = y), s(t);
    })(this, t),
    (p._version = m),
    (p._prefixes = S),
    (p._domPrefixes = T),
    (p._cssomPrefixes = k),
    (p.mq = z),
    (p.hasEvent = A),
    (p.testProp = function(e) {
      return c([e]);
    }),
    (p.testAllProps = u),
    (p.testStyles = F),
    (p.prefixed = function(e, t, n) {
      return t ? u(e, t, n) : u(e, "pfx");
    }),
    (g.className =
      g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
      (h ? " js " + $.join(" ") : "")),
    p
  );
})(this, this.document);

/* Circular Bar */
(function(t) {
  t.fn.circliful = function(i) {
    var e = t.extend(
      {
        startdegree: 0,
        fgcolor: "#556b2f",
        bgcolor: "#eee",
        fill: !1,
        width: 15,
        dimension: 200,
        fontsize: 15,
        percent: 50,
        animationstep: 1,
        iconsize: "20px",
        iconcolor: "#999",
        border: "default",
        complete: null,
        bordersize: 10
      },
      i
    );
    return this.each(function() {
      function a(i, e, a) {
        t("<span></span>")
          .appendTo(i)
          .addClass(e)
          .text(s)
          .prepend(l)
          .css({ "line-height": a + "px", "font-size": h.fontsize + "px" });
      }
      function n(i, e) {
        t("<span></span>")
          .appendTo(i)
          .addClass("circle-info-half")
          .css("line-height", h.dimension * e + "px")
          .text(r);
      }
      function o(i) {
        t.each(c, function(a, n) {
          (h[n] = void 0 != i.data(n) ? i.data(n) : t(e).attr(n)),
            "fill" == n && void 0 != i.data("fill") && (m = !0);
        });
      }
      function d(e) {
        u.clearRect(0, 0, g.width, g.height),
          u.beginPath(),
          u.arc(x, b, w, z, y, !1),
          (u.lineWidth = h.width + 1),
          (u.strokeStyle = h.bgcolor),
          u.stroke(),
          m && ((u.fillStyle = h.fill), u.fill()),
          u.beginPath(),
          u.arc(x, b, w, -k + T, C * e - k + T, !1),
          "outline" == h.border
            ? (u.lineWidth = h.width + 13)
            : "inline" == h.border && (u.lineWidth = h.width - 13),
          (u.strokeStyle = h.fgcolor),
          u.stroke(),
          p > M &&
            ((M += I),
            requestAnimationFrame(function() {
              d(Math.min(M, p) / 100);
            }, f)),
          M == p &&
            S &&
            i !== void 0 &&
            t.isFunction(i.complete) &&
            (i.complete(), (S = !1));
      }
      var s,
        r,
        c = [
          "fgcolor",
          "bgcolor",
          "fill",
          "width",
          "dimension",
          "fontsize",
          "animationstep",
          "endPercent",
          "icon",
          "iconcolor",
          "iconsize",
          "border",
          "startdegree",
          "bordersize"
        ],
        h = {},
        l = "",
        p = 0,
        f = t(this),
        m = !1;
      if (
        (f.addClass("circliful"),
        o(f),
        void 0 != f.data("text") &&
          ((s = f.data("text")),
          void 0 != f.data("icon") &&
            (l = t("<i></i>")
              .addClass("fa " + t(this).data("icon"))
              .css({ color: h.iconcolor, "font-size": h.iconsize })),
          void 0 != f.data("type")
            ? ((F = t(this).data("type")),
              "half" == F
                ? a(f, "circle-text-half", h.dimension / 1.45)
                : a(f, "circle-text", h.dimension))
            : a(f, "circle-text", h.dimension)),
        void 0 != t(this).data("total") && void 0 != t(this).data("part"))
      ) {
        var v = t(this).data("total") / 100;
        (percent = (t(this).data("part") / v / 100).toFixed(3)),
          (p = (t(this).data("part") / v).toFixed(3));
      } else void 0 != t(this).data("percent") ? ((percent = t(this).data("percent") / 100), (p = t(this).data("percent"))) : (percent = e.percent / 100);
      void 0 != t(this).data("info") &&
        ((r = t(this).data("info")),
        void 0 != t(this).data("type")
          ? ((F = t(this).data("type")), "half" == F ? n(f, 0.9) : n(f, 1.25))
          : n(f, 1.25)),
        t(this).width(h.dimension + "px");
      var g = t("<canvas></canvas>")
          .attr({ width: h.dimension, height: h.dimension })
          .appendTo(t(this))
          .get(0),
        u = g.getContext("2d");
      t(g).parent();
      var x = g.width / 2,
        b = g.height / 2,
        P = 360 * h.percent;
      P * (Math.PI / 180);
      var w = g.width / 2.5,
        y = 2.3 * Math.PI,
        z = 0,
        M = 0 === h.animationstep ? p : 0,
        I = Math.max(h.animationstep, 0),
        C = 2 * Math.PI,
        k = Math.PI / 2,
        F = "",
        S = !0,
        T = (h.startdegree / 180) * Math.PI;
      void 0 != t(this).data("type") &&
        ((F = t(this).data("type")),
        "half" == F &&
          ((y = 2 * Math.PI),
          (z = 3.13),
          (C = Math.PI),
          (k = Math.PI / 0.996))),
        d(M / 100);
    });
  };
})(jQuery);

/*
 * MIXITUP - A CSS3 and JQuery Filter & Sort Plugin
 * Version: 1.5.4
 * License: Creative Commons Attribution-NoDerivs 3.0 Unported - CC BY-ND 3.0
 * http://creativecommons.org/licenses/by-nd/3.0/
 * This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
 * Author: Patrick Kunka
 * Copyright 2012-2013 Patrick Kunka, Barrel LLC, All Rights Reserved
 *
 * http://mixitup.io
 */

(function(e) {
  function q(c, b, g, d, a) {
    function k() {
      l.unbind(
        "webkitTransitionEnd transitionend otransitionend oTransitionEnd"
      );
      b && w(b, g, d, a);
      a.startOrder = [];
      a.newOrder = [];
      a.origSort = [];
      a.checkSort = [];
      r.removeStyle(
        a.prefix +
          "filter, filter, " +
          a.prefix +
          "transform, transform, opacity, display"
      )
        .css(a.clean)
        .removeAttr("data-checksum");
      window.atob || r.css({ display: "none", opacity: "0" });
      l.removeStyle(
        a.prefix +
          "transition, transition, " +
          a.prefix +
          "perspective, perspective, " +
          a.prefix +
          "perspective-origin, perspective-origin, " +
          (a.resizeContainer ? "height" : "")
      );
      "list" == a.layoutMode
        ? (n.css({ display: a.targetDisplayList, opacity: "1" }),
          (a.origDisplay = a.targetDisplayList))
        : (n.css({ display: a.targetDisplayGrid, opacity: "1" }),
          (a.origDisplay = a.targetDisplayGrid));
      a.origLayout = a.layoutMode;
      setTimeout(function() {
        r.removeStyle(a.prefix + "transition, transition");
        a.mixing = !1;
        if ("function" == typeof a.onMixEnd) {
          var b = a.onMixEnd.call(this, a);
          a = b ? b : a;
        }
      });
    }
    clearInterval(a.failsafe);
    a.mixing = !0;
    a.filter = c;
    if ("function" == typeof a.onMixStart) {
      var f = a.onMixStart.call(this, a);
      a = f ? f : a;
    }
    for (var h = a.transitionSpeed, f = 0; 2 > f; f++) {
      var j = 0 == f ? (j = a.prefix) : "";
      a.transition[j + "transition"] = "all " + h + "ms linear";
      a.transition[j + "transform"] = j + "translate3d(0,0,0)";
      a.perspective[j + "perspective"] = a.perspectiveDistance + "px";
      a.perspective[j + "perspective-origin"] = a.perspectiveOrigin;
    }
    var s = a.targetSelector,
      r = d.find(s);
    r.each(function() {
      this.data = {};
    });
    var l = r.parent();
    l.css(a.perspective);
    a.easingFallback = "ease-in-out";
    "smooth" == a.easing && (a.easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)");
    "snap" == a.easing && (a.easing = "cubic-bezier(0.77, 0, 0.175, 1)");
    "windback" == a.easing &&
      ((a.easing = "cubic-bezier(0.175, 0.885, 0.320, 1.275)"),
      (a.easingFallback = "cubic-bezier(0.175, 0.885, 0.320, 1)"));
    "windup" == a.easing &&
      ((a.easing = "cubic-bezier(0.6, -0.28, 0.735, 0.045)"),
      (a.easingFallback = "cubic-bezier(0.6, 0.28, 0.735, 0.045)"));
    f =
      "list" == a.layoutMode && null != a.listEffects
        ? a.listEffects
        : a.effects;
    Array.prototype.indexOf &&
      ((a.fade = -1 < f.indexOf("fade") ? "0" : ""),
      (a.scale = -1 < f.indexOf("scale") ? "scale(.01)" : ""),
      (a.rotateZ = -1 < f.indexOf("rotateZ") ? "rotate(180deg)" : ""),
      (a.rotateY = -1 < f.indexOf("rotateY") ? "rotateY(90deg)" : ""),
      (a.rotateX = -1 < f.indexOf("rotateX") ? "rotateX(90deg)" : ""),
      (a.blur = -1 < f.indexOf("blur") ? "blur(8px)" : ""),
      (a.grayscale = -1 < f.indexOf("grayscale") ? "grayscale(100%)" : ""));
    var n = e(),
      t = e(),
      u = [],
      q = !1;
    "string" === typeof c
      ? (u = y(c))
      : ((q = !0),
        e.each(c, function(a) {
          u[a] = y(this);
        }));
    "or" == a.filterLogic
      ? ("" == u[0] && u.shift(),
        1 > u.length
          ? (t = t.add(d.find(s + ":visible")))
          : r.each(function() {
              var a = e(this);
              if (q) {
                var b = 0;
                e.each(u, function() {
                  this.length
                    ? a.is("." + this.join(", .")) && b++
                    : 0 < b && b++;
                });
                b == u.length ? (n = n.add(a)) : (t = t.add(a));
              } else a.is("." + u.join(", .")) ? (n = n.add(a)) : (t = t.add(a));
            }))
      : ((n = n.add(l.find(s + "." + u.join(".")))),
        (t = t.add(l.find(s + ":not(." + u.join(".") + "):visible"))));
    c = n.length;
    var v = e(),
      p = e(),
      m = e();
    t.each(function() {
      var a = e(this);
      "none" != a.css("display") && ((v = v.add(a)), (m = m.add(a)));
    });
    if (n.filter(":visible").length == c && !v.length && !b) {
      if (a.origLayout == a.layoutMode) return k(), !1;
      if (1 == n.length)
        return (
          "list" == a.layoutMode
            ? (d.addClass(a.listClass),
              d.removeClass(a.gridClass),
              m.css("display", a.targetDisplayList))
            : (d.addClass(a.gridClass),
              d.removeClass(a.listClass),
              m.css("display", a.targetDisplayGrid)),
          k(),
          !1
        );
    }
    a.origHeight = l.height();
    if (n.length) {
      d.removeClass(a.failClass);
      n.each(function() {
        var a = e(this);
        "none" == a.css("display") ? (p = p.add(a)) : (m = m.add(a));
      });
      if (a.origLayout != a.layoutMode && !1 == a.animateGridList)
        return (
          "list" == a.layoutMode
            ? (d.addClass(a.listClass),
              d.removeClass(a.gridClass),
              m.css("display", a.targetDisplayList))
            : (d.addClass(a.gridClass),
              d.removeClass(a.listClass),
              m.css("display", a.targetDisplayGrid)),
          k(),
          !1
        );
      if (!window.atob) return k(), !1;
      r.css(a.clean);
      m.each(function() {
        this.data.origPos = e(this).offset();
      });
      "list" == a.layoutMode
        ? (d.addClass(a.listClass),
          d.removeClass(a.gridClass),
          p.css("display", a.targetDisplayList))
        : (d.addClass(a.gridClass),
          d.removeClass(a.listClass),
          p.css("display", a.targetDisplayGrid));
      p.each(function() {
        this.data.showInterPos = e(this).offset();
      });
      v.each(function() {
        this.data.hideInterPos = e(this).offset();
      });
      m.each(function() {
        this.data.preInterPos = e(this).offset();
      });
      "list" == a.layoutMode
        ? m.css("display", a.targetDisplayList)
        : m.css("display", a.targetDisplayGrid);
      b && w(b, g, d, a);
      if ((c = b))
        a: if (((c = a.origSort), (f = a.checkSort), c.length != f.length))
          c = !1;
        else {
          for (j = 0; j < f.length; j++)
            if ((c[j].compare && !c[j].compare(f[j])) || c[j] !== f[j]) {
              c = !1;
              break a;
            }
          c = !0;
        }
      if (c) return k(), !1;
      v.hide();
      p.each(function() {
        this.data.finalPos = e(this).offset();
      });
      m.each(function() {
        this.data.finalPrePos = e(this).offset();
      });
      a.newHeight = l.height();
      b && w("reset", null, d, a);
      p.hide();
      m.css("display", a.origDisplay);
      "block" == a.origDisplay
        ? (d.addClass(a.listClass), p.css("display", a.targetDisplayList))
        : (d.removeClass(a.listClass), p.css("display", a.targetDisplayGrid));
      a.resizeContainer && l.css("height", a.origHeight + "px");
      c = {};
      for (f = 0; 2 > f; f++)
        (j = 0 == f ? (j = a.prefix) : ""),
          (c[j + "transform"] =
            a.scale + " " + a.rotateX + " " + a.rotateY + " " + a.rotateZ),
          (c[j + "filter"] = a.blur + " " + a.grayscale);
      p.css(c);
      m.each(function() {
        var b = this.data,
          c = e(this);
        c.hasClass("mix_tohide")
          ? ((b.preTX = b.origPos.left - b.hideInterPos.left),
            (b.preTY = b.origPos.top - b.hideInterPos.top))
          : ((b.preTX = b.origPos.left - b.preInterPos.left),
            (b.preTY = b.origPos.top - b.preInterPos.top));
        for (var d = {}, f = 0; 2 > f; f++) {
          var j = 0 == f ? (j = a.prefix) : "";
          d[j + "transform"] = "translate(" + b.preTX + "px," + b.preTY + "px)";
        }
        c.css(d);
      });
      "list" == a.layoutMode
        ? (d.addClass(a.listClass), d.removeClass(a.gridClass))
        : (d.addClass(a.gridClass), d.removeClass(a.listClass));
      setTimeout(function() {
        if (a.resizeContainer) {
          for (var b = {}, c = 0; 2 > c; c++) {
            var d = 0 == c ? (d = a.prefix) : "";
            b[d + "transition"] = "all " + h + "ms ease-in-out";
            b.height = a.newHeight + "px";
          }
          l.css(b);
        }
        v.css("opacity", a.fade);
        p.css("opacity", 1);
        p.each(function() {
          var b = this.data;
          b.tX = b.finalPos.left - b.showInterPos.left;
          b.tY = b.finalPos.top - b.showInterPos.top;
          for (var c = {}, d = 0; 2 > d; d++) {
            var f = 0 == d ? (f = a.prefix) : "";
            c[f + "transition-property"] =
              f + "transform, " + f + "filter, opacity";
            c[f + "transition-timing-function"] = a.easing + ", linear, linear";
            c[f + "transition-duration"] = h + "ms";
            c[f + "transition-delay"] = "0";
            c[f + "transform"] = "translate(" + b.tX + "px," + b.tY + "px)";
            c[f + "filter"] = "none";
          }
          e(this)
            .css("-webkit-transition", "all " + h + "ms " + a.easingFallback)
            .css(c);
        });
        m.each(function() {
          var b = this.data;
          b.tX =
            0 != b.finalPrePos.left
              ? b.finalPrePos.left - b.preInterPos.left
              : 0;
          b.tY =
            0 != b.finalPrePos.left ? b.finalPrePos.top - b.preInterPos.top : 0;
          for (var c = {}, d = 0; 2 > d; d++) {
            var f = 0 == d ? (f = a.prefix) : "";
            c[f + "transition"] = "all " + h + "ms " + a.easing;
            c[f + "transform"] = "translate(" + b.tX + "px," + b.tY + "px)";
          }
          e(this)
            .css("-webkit-transition", "all " + h + "ms " + a.easingFallback)
            .css(c);
        });
        b = {};
        for (c = 0; 2 > c; c++)
          (d = 0 == c ? (d = a.prefix) : ""),
            (b[d + "transition"] =
              "all " +
              h +
              "ms " +
              a.easing +
              ", " +
              d +
              "filter " +
              h +
              "ms linear, opacity " +
              h +
              "ms linear"),
            (b[d + "transform"] =
              a.scale + " " + a.rotateX + " " + a.rotateY + " " + a.rotateZ),
            (b[d + "filter"] = a.blur + " " + a.grayscale),
            (b.opacity = a.fade);
        v.css(b);
        l.bind(
          "webkitTransitionEnd transitionend otransitionend oTransitionEnd",
          function(b) {
            if (
              -1 < b.originalEvent.propertyName.indexOf("transform") ||
              -1 < b.originalEvent.propertyName.indexOf("opacity")
            )
              -1 < s.indexOf(".")
                ? e(b.target).hasClass(s.replace(".", "")) && k()
                : e(b.target).is(s) && k();
          }
        );
      }, 10);
      a.failsafe = setTimeout(function() {
        a.mixing && k();
      }, h + 400);
    } else {
      a.resizeContainer && l.css("height", a.origHeight + "px");
      if (!window.atob) return k(), !1;
      v = t;
      setTimeout(function() {
        l.css(a.perspective);
        if (a.resizeContainer) {
          for (var b = {}, c = 0; 2 > c; c++) {
            var e = 0 == c ? (e = a.prefix) : "";
            b[e + "transition"] = "height " + h + "ms ease-in-out";
            b.height = a.minHeight + "px";
          }
          l.css(b);
        }
        r.css(a.transition);
        if (t.length) {
          b = {};
          for (c = 0; 2 > c; c++)
            (e = 0 == c ? (e = a.prefix) : ""),
              (b[e + "transform"] =
                a.scale + " " + a.rotateX + " " + a.rotateY + " " + a.rotateZ),
              (b[e + "filter"] = a.blur + " " + a.grayscale),
              (b.opacity = a.fade);
          v.css(b);
          l.bind(
            "webkitTransitionEnd transitionend otransitionend oTransitionEnd",
            function(b) {
              if (
                -1 < b.originalEvent.propertyName.indexOf("transform") ||
                -1 < b.originalEvent.propertyName.indexOf("opacity")
              )
                d.addClass(a.failClass), k();
            }
          );
        } else a.mixing = !1;
      }, 10);
    }
  }
  function w(c, b, g, d) {
    function a(b, a) {
      var d = isNaN(1 * b.attr(c)) ? b.attr(c).toLowerCase() : 1 * b.attr(c),
        e = isNaN(1 * a.attr(c)) ? a.attr(c).toLowerCase() : 1 * a.attr(c);
      return d < e ? -1 : d > e ? 1 : 0;
    }
    function k(a) {
      "asc" == b ? f.prepend(a).prepend(" ") : f.append(a).append(" ");
    }
    g.find(d.targetSelector).wrapAll('<div class="mix_sorter"/>');
    var f = g.find(".mix_sorter");
    d.origSort.length ||
      f.find(d.targetSelector + ":visible").each(function() {
        e(this).wrap("<s/>");
        d.origSort.push(
          e(this)
            .parent()
            .html()
            .replace(/\s+/g, "")
        );
        e(this).unwrap();
      });
    f.empty();
    if ("reset" == c)
      e.each(d.startOrder, function() {
        f.append(this).append(" ");
      });
    else if ("default" == c)
      e.each(d.origOrder, function() {
        k(this);
      });
    else if ("random" == c) {
      if (!d.newOrder.length) {
        for (var h = d.startOrder.slice(), j = h.length, s = j; s--; ) {
          var r = parseInt(Math.random() * j),
            l = h[s];
          h[s] = h[r];
          h[r] = l;
        }
        d.newOrder = h;
      }
      e.each(d.newOrder, function() {
        f.append(this).append(" ");
      });
    } else if ("custom" == c)
      e.each(b, function() {
        k(this);
      });
    else {
      if ("undefined" === typeof d.origOrder[0].attr(c))
        return console.log("No such attribute found. Terminating"), !1;
      d.newOrder.length ||
        (e.each(d.origOrder, function() {
          d.newOrder.push(e(this));
        }),
        d.newOrder.sort(a));
      e.each(d.newOrder, function() {
        k(this);
      });
    }
    d.checkSort = [];
    f.find(d.targetSelector + ":visible").each(function(b) {
      var a = e(this);
      0 == b && a.attr("data-checksum", "1");
      a.wrap("<s/>");
      d.checkSort.push(
        a
          .parent()
          .html()
          .replace(/\s+/g, "")
      );
      a.unwrap();
    });
    g.find(d.targetSelector).unwrap();
  }
  function y(c) {
    c = c.replace(/\s{2,}/g, " ");
    var b = c.split(" ");
    e.each(b, function(c) {
      "all" == this && (b[c] = "mix_all");
    });
    "" == b[0] && b.shift();
    return b;
  }
  var x = {
    init: function(c) {
      return this.each(function() {
        var b = {
          targetSelector: ".mix",
          filterSelector: ".filter",
          sortSelector: ".sort",
          buttonEvent: "click",
          effects: ["fade", "scale"],
          listEffects: null,
          easing: "smooth",
          layoutMode: "grid",
          targetDisplayGrid: "inline-block",
          targetDisplayList: "block",
          listClass: "",
          gridClass: "",
          transitionSpeed: 600,
          showOnLoad: "all",
          sortOnLoad: !1,
          multiFilter: !1,
          filterLogic: "or",
          resizeContainer: !0,
          minHeight: 0,
          failClass: "fail",
          perspectiveDistance: "3000",
          perspectiveOrigin: "50% 50%",
          animateGridList: !0,
          onMixLoad: null,
          onMixStart: null,
          onMixEnd: null,
          container: null,
          origOrder: [],
          startOrder: [],
          newOrder: [],
          origSort: [],
          checkSort: [],
          filter: "",
          mixing: !1,
          origDisplay: "",
          origLayout: "",
          origHeight: 0,
          newHeight: 0,
          isTouch: !1,
          resetDelay: 0,
          failsafe: null,
          prefix: "",
          easingFallback: "ease-in-out",
          transition: {},
          perspective: {},
          clean: {},
          fade: "1",
          scale: "",
          rotateX: "",
          rotateY: "",
          rotateZ: "",
          blur: "",
          grayscale: ""
        };
        c && e.extend(b, c);
        this.config = b;
        e.support.touch = "ontouchend" in document;
        e.support.touch && ((b.isTouch = !0), (b.resetDelay = 350));
        b.container = e(this);
        var g = b.container,
          d;
        a: {
          d = g[0];
          for (var a = ["Webkit", "Moz", "O", "ms"], k = 0; k < a.length; k++)
            if (a[k] + "Transition" in d.style) {
              d = a[k];
              break a;
            }
          d = "transition" in d.style ? "" : !1;
        }
        b.prefix = d;
        b.prefix = b.prefix ? "-" + b.prefix.toLowerCase() + "-" : "";
        g.find(b.targetSelector).each(function() {
          b.origOrder.push(e(this));
        });
        if (b.sortOnLoad) {
          var f;
          e.isArray(b.sortOnLoad)
            ? ((d = b.sortOnLoad[0]),
              (f = b.sortOnLoad[1]),
              e(
                b.sortSelector +
                  "[data-sort=" +
                  b.sortOnLoad[0] +
                  "][data-order=" +
                  b.sortOnLoad[1] +
                  "]"
              ).addClass("active"))
            : (e(b.sortSelector + "[data-sort=" + b.sortOnLoad + "]").addClass(
                "active"
              ),
              (d = b.sortOnLoad),
              (b.sortOnLoad = "desc"));
          w(d, f, g, b);
        }
        for (f = 0; 2 > f; f++)
          (d = 0 == f ? (d = b.prefix) : ""),
            (b.transition[d + "transition"] =
              "all " + b.transitionSpeed + "ms ease-in-out"),
            (b.perspective[d + "perspective"] = b.perspectiveDistance + "px"),
            (b.perspective[d + "perspective-origin"] = b.perspectiveOrigin);
        for (f = 0; 2 > f; f++)
          (d = 0 == f ? (d = b.prefix) : ""),
            (b.clean[d + "transition"] = "none");
        "list" == b.layoutMode
          ? (g.addClass(b.listClass), (b.origDisplay = b.targetDisplayList))
          : (g.addClass(b.gridClass), (b.origDisplay = b.targetDisplayGrid));
        b.origLayout = b.layoutMode;
        f = b.showOnLoad.split(" ");
        e.each(f, function() {
          e(b.filterSelector + '[data-filter="' + this + '"]').addClass(
            "active"
          );
        });
        g.find(b.targetSelector).addClass("mix_all");
        "all" == f[0] && ((f[0] = "mix_all"), (b.showOnLoad = "mix_all"));
        var h = e();
        e.each(f, function() {
          h = h.add(e("." + this));
        });
        h.each(function() {
          var a = e(this);
          "list" == b.layoutMode
            ? a.css("display", b.targetDisplayList)
            : a.css("display", b.targetDisplayGrid);
          a.css(b.transition);
        });
        setTimeout(function() {
          b.mixing = !0;
          h.css("opacity", "1");
          setTimeout(function() {
            "list" == b.layoutMode
              ? h
                  .removeStyle(b.prefix + "transition, transition")
                  .css({ display: b.targetDisplayList, opacity: 1 })
              : h
                  .removeStyle(b.prefix + "transition, transition")
                  .css({ display: b.targetDisplayGrid, opacity: 1 });
            b.mixing = !1;
            if ("function" == typeof b.onMixLoad) {
              var a = b.onMixLoad.call(this, b);
              b = a ? a : b;
            }
          }, b.transitionSpeed);
        }, 10);
        b.filter = b.showOnLoad;
        e(b.sortSelector).bind(b.buttonEvent, function() {
          if (!b.mixing) {
            var a = e(this),
              c = a.attr("data-sort"),
              d = a.attr("data-order");
            if (a.hasClass("active")) {
              if ("random" != c) return !1;
            } else
              e(b.sortSelector).removeClass("active"), a.addClass("active");
            g.find(b.targetSelector).each(function() {
              b.startOrder.push(e(this));
            });
            q(b.filter, c, d, g, b);
          }
        });
        e(b.filterSelector).bind(b.buttonEvent, function() {
          if (!b.mixing) {
            var a = e(this);
            if (!1 == b.multiFilter)
              e(b.filterSelector).removeClass("active"),
                a.addClass("active"),
                (b.filter = a.attr("data-filter")),
                e(
                  b.filterSelector + '[data-filter="' + b.filter + '"]'
                ).addClass("active");
            else {
              var c = a.attr("data-filter");
              a.hasClass("active")
                ? (a.removeClass("active"),
                  (b.filter = b.filter.replace(RegExp("(\\s|^)" + c), "")))
                : (a.addClass("active"), (b.filter = b.filter + " " + c));
            }
            q(b.filter, null, null, g, b);
          }
        });
      });
    },
    toGrid: function() {
      return this.each(function() {
        var c = this.config;
        "grid" != c.layoutMode &&
          ((c.layoutMode = "grid"), q(c.filter, null, null, e(this), c));
      });
    },
    toList: function() {
      return this.each(function() {
        var c = this.config;
        "list" != c.layoutMode &&
          ((c.layoutMode = "list"), q(c.filter, null, null, e(this), c));
      });
    },
    filter: function(c) {
      return this.each(function() {
        var b = this.config;
        b.mixing ||
          (e(b.filterSelector).removeClass("active"),
          e(b.filterSelector + '[data-filter="' + c + '"]').addClass("active"),
          q(c, null, null, e(this), b));
      });
    },
    sort: function(c) {
      return this.each(function() {
        var b = this.config,
          g = e(this);
        if (!b.mixing) {
          e(b.sortSelector).removeClass("active");
          if (e.isArray(c)) {
            var d = c[0],
              a = c[1];
            e(
              b.sortSelector +
                '[data-sort="' +
                c[0] +
                '"][data-order="' +
                c[1] +
                '"]'
            ).addClass("active");
          } else
            e(b.sortSelector + '[data-sort="' + c + '"]').addClass("active"),
              (d = c),
              (a = "desc");
          g.find(b.targetSelector).each(function() {
            b.startOrder.push(e(this));
          });
          q(b.filter, d, a, g, b);
        }
      });
    },
    multimix: function(c) {
      return this.each(function() {
        var b = this.config,
          g = e(this);
        multiOut = {
          filter: b.filter,
          sort: null,
          order: "desc",
          layoutMode: b.layoutMode
        };
        e.extend(multiOut, c);
        b.mixing ||
          (e(b.filterSelector)
            .add(b.sortSelector)
            .removeClass("active"),
          e(
            b.filterSelector + '[data-filter="' + multiOut.filter + '"]'
          ).addClass("active"),
          "undefined" !== typeof multiOut.sort &&
            (e(
              b.sortSelector +
                '[data-sort="' +
                multiOut.sort +
                '"][data-order="' +
                multiOut.order +
                '"]'
            ).addClass("active"),
            g.find(b.targetSelector).each(function() {
              b.startOrder.push(e(this));
            })),
          (b.layoutMode = multiOut.layoutMode),
          q(multiOut.filter, multiOut.sort, multiOut.order, g, b));
      });
    },
    remix: function(c) {
      return this.each(function() {
        var b = this.config,
          g = e(this);
        b.origOrder = [];
        g.find(b.targetSelector).each(function() {
          var c = e(this);
          c.addClass("mix_all");
          b.origOrder.push(c);
        });
        !b.mixing &&
          "undefined" !== typeof c &&
          (e(b.filterSelector).removeClass("active"),
          e(b.filterSelector + '[data-filter="' + c + '"]').addClass("active"),
          q(c, null, null, g, b));
      });
    }
  };
  e.fn.mixitup = function(c, b) {
    if (x[c]) return x[c].apply(this, Array.prototype.slice.call(arguments, 1));
    if ("object" === typeof c || !c) return x.init.apply(this, arguments);
  };
  e.fn.removeStyle = function(c) {
    return this.each(function() {
      var b = e(this);
      c = c.replace(/\s+/g, "");
      var g = c.split(",");
      e.each(g, function() {
        var c = RegExp(this.toString() + "[^;]+;?", "g");
        b.attr("style", function(a, b) {
          if (b) return b.replace(c, "");
        });
      });
    });
  };
})(jQuery);

/*!
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === "undefined") {
  throw new Error("Bootstrap's JavaScript requires jQuery");
}
+(function(e) {
  var t = e.fn.jquery.split(" ")[0].split(".");
  if ((t[0] < 2 && t[1] < 9) || (t[0] == 1 && t[1] == 9 && t[2] < 1)) {
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher"
    );
  }
})(jQuery);
+(function(e) {
  "use strict";
  function t() {
    var e = document.createElement("bootstrap");
    var t = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };
    for (var n in t) {
      if (e.style[n] !== undefined) {
        return { end: t[n] };
      }
    }
    return false;
  }
  e.fn.emulateTransitionEnd = function(t) {
    var n = false;
    var r = this;
    e(this).one("bsTransitionEnd", function() {
      n = true;
    });
    var i = function() {
      if (!n) e(r).trigger(e.support.transition.end);
    };
    setTimeout(i, t);
    return this;
  };
  e(function() {
    e.support.transition = t();
    if (!e.support.transition) return;
    e.event.special.bsTransitionEnd = {
      bindType: e.support.transition.end,
      delegateType: e.support.transition.end,
      handle: function(t) {
        if (e(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      }
    };
  });
})(jQuery);
+(function(e) {
  "use strict";
  function r(t) {
    return this.each(function() {
      var r = e(this);
      var i = r.data("bs.alert");
      if (!i) r.data("bs.alert", (i = new n(this)));
      if (typeof t == "string") i[t].call(r);
    });
  }
  var t = '[data-dismiss="alert"]';
  var n = function(n) {
    e(n).on("click", t, this.close);
  };
  n.VERSION = "3.3.1";
  n.TRANSITION_DURATION = 150;
  n.prototype.close = function(t) {
    function o() {
      s.detach()
        .trigger("closed.bs.alert")
        .remove();
    }
    var r = e(this);
    var i = r.attr("data-target");
    if (!i) {
      i = r.attr("href");
      i = i && i.replace(/.*(?=#[^\s]*$)/, "");
    }
    var s = e(i);
    if (t) t.preventDefault();
    if (!s.length) {
      s = r.closest(".alert");
    }
    s.trigger((t = e.Event("close.bs.alert")));
    if (t.isDefaultPrevented()) return;
    s.removeClass("in");
    e.support.transition && s.hasClass("fade")
      ? s.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION)
      : o();
  };
  var i = e.fn.alert;
  e.fn.alert = r;
  e.fn.alert.Constructor = n;
  e.fn.alert.noConflict = function() {
    e.fn.alert = i;
    return this;
  };
  e(document).on("click.bs.alert.data-api", t, n.prototype.close);
})(jQuery);
+(function(e) {
  "use strict";
  function n(n) {
    return this.each(function() {
      var r = e(this);
      var i = r.data("bs.button");
      var s = typeof n == "object" && n;
      if (!i) r.data("bs.button", (i = new t(this, s)));
      if (n == "toggle") i.toggle();
      else if (n) i.setState(n);
    });
  }
  var t = function(n, r) {
    this.$element = e(n);
    this.options = e.extend({}, t.DEFAULTS, r);
    this.isLoading = false;
  };
  t.VERSION = "3.3.1";
  t.DEFAULTS = { loadingText: "loading..." };
  t.prototype.setState = function(t) {
    var n = "disabled";
    var r = this.$element;
    var i = r.is("input") ? "val" : "html";
    var s = r.data();
    t = t + "Text";
    if (s.resetText == null) r.data("resetText", r[i]());
    setTimeout(
      e.proxy(function() {
        r[i](s[t] == null ? this.options[t] : s[t]);
        if (t == "loadingText") {
          this.isLoading = true;
          r.addClass(n).attr(n, n);
        } else if (this.isLoading) {
          this.isLoading = false;
          r.removeClass(n).removeAttr(n);
        }
      }, this),
      0
    );
  };
  t.prototype.toggle = function() {
    var e = true;
    var t = this.$element.closest('[data-toggle="buttons"]');
    if (t.length) {
      var n = this.$element.find("input");
      if (n.prop("type") == "radio") {
        if (n.prop("checked") && this.$element.hasClass("active")) e = false;
        else t.find(".active").removeClass("active");
      }
      if (e)
        n.prop("checked", !this.$element.hasClass("active")).trigger("change");
    } else {
      this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
    }
    if (e) this.$element.toggleClass("active");
  };
  var r = e.fn.button;
  e.fn.button = n;
  e.fn.button.Constructor = t;
  e.fn.button.noConflict = function() {
    e.fn.button = r;
    return this;
  };
  e(document)
    .on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
      var r = e(t.target);
      if (!r.hasClass("btn")) r = r.closest(".btn");
      n.call(r, "toggle");
      t.preventDefault();
    })
    .on(
      "focus.bs.button.data-api blur.bs.button.data-api",
      '[data-toggle^="button"]',
      function(t) {
        e(t.target)
          .closest(".btn")
          .toggleClass("focus", /^focus(in)?$/.test(t.type));
      }
    );
})(jQuery);
+(function(e) {
  "use strict";
  function n(n) {
    return this.each(function() {
      var r = e(this);
      var i = r.data("bs.carousel");
      var s = e.extend({}, t.DEFAULTS, r.data(), typeof n == "object" && n);
      var o = typeof n == "string" ? n : s.slide;
      if (!i) r.data("bs.carousel", (i = new t(this, s)));
      if (typeof n == "number") i.to(n);
      else if (o) i[o]();
      else if (s.interval) i.pause().cycle();
    });
  }
  var t = function(t, n) {
    this.$element = e(t);
    this.$indicators = this.$element.find(".carousel-indicators");
    this.options = n;
    this.paused = this.sliding = this.interval = this.$active = this.$items = null;
    this.options.keyboard &&
      this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this));
    this.options.pause == "hover" &&
      !("ontouchstart" in document.documentElement) &&
      this.$element
        .on("mouseenter.bs.carousel", e.proxy(this.pause, this))
        .on("mouseleave.bs.carousel", e.proxy(this.cycle, this));
  };
  t.VERSION = "3.3.1";
  t.TRANSITION_DURATION = 600;
  t.DEFAULTS = { interval: 5e3, pause: "hover", wrap: true, keyboard: true };
  t.prototype.keydown = function(e) {
    if (/input|textarea/i.test(e.target.tagName)) return;
    switch (e.which) {
      case 37:
        this.prev();
        break;
      case 39:
        this.next();
        break;
      default:
        return;
    }
    e.preventDefault();
  };
  t.prototype.cycle = function(t) {
    t || (this.paused = false);
    this.interval && clearInterval(this.interval);
    this.options.interval &&
      !this.paused &&
      (this.interval = setInterval(
        e.proxy(this.next, this),
        this.options.interval
      ));
    return this;
  };
  t.prototype.getItemIndex = function(e) {
    this.$items = e.parent().children(".item");
    return this.$items.index(e || this.$active);
  };
  t.prototype.getItemForDirection = function(e, t) {
    var n = e == "prev" ? -1 : 1;
    var r = this.getItemIndex(t);
    var i = (r + n) % this.$items.length;
    return this.$items.eq(i);
  };
  t.prototype.to = function(e) {
    var t = this;
    var n = this.getItemIndex(
      (this.$active = this.$element.find(".item.active"))
    );
    if (e > this.$items.length - 1 || e < 0) return;
    if (this.sliding)
      return this.$element.one("slid.bs.carousel", function() {
        t.to(e);
      });
    if (n == e) return this.pause().cycle();
    return this.slide(e > n ? "next" : "prev", this.$items.eq(e));
  };
  t.prototype.pause = function(t) {
    t || (this.paused = true);
    if (this.$element.find(".next, .prev").length && e.support.transition) {
      this.$element.trigger(e.support.transition.end);
      this.cycle(true);
    }
    this.interval = clearInterval(this.interval);
    return this;
  };
  t.prototype.next = function() {
    if (this.sliding) return;
    return this.slide("next");
  };
  t.prototype.prev = function() {
    if (this.sliding) return;
    return this.slide("prev");
  };
  t.prototype.slide = function(n, r) {
    var i = this.$element.find(".item.active");
    var s = r || this.getItemForDirection(n, i);
    var o = this.interval;
    var u = n == "next" ? "left" : "right";
    var a = n == "next" ? "first" : "last";
    var f = this;
    if (!s.length) {
      if (!this.options.wrap) return;
      s = this.$element.find(".item")[a]();
    }
    if (s.hasClass("active")) return (this.sliding = false);
    var l = s[0];
    var c = e.Event("slide.bs.carousel", { relatedTarget: l, direction: u });
    this.$element.trigger(c);
    if (c.isDefaultPrevented()) return;
    this.sliding = true;
    o && this.pause();
    if (this.$indicators.length) {
      this.$indicators.find(".active").removeClass("active");
      var h = e(this.$indicators.children()[this.getItemIndex(s)]);
      h && h.addClass("active");
    }
    var p = e.Event("slid.bs.carousel", { relatedTarget: l, direction: u });
    if (e.support.transition && this.$element.hasClass("slide")) {
      s.addClass(n);
      s[0].offsetWidth;
      i.addClass(u);
      s.addClass(u);
      i.one("bsTransitionEnd", function() {
        s.removeClass([n, u].join(" ")).addClass("active");
        i.removeClass(["active", u].join(" "));
        f.sliding = false;
        setTimeout(function() {
          f.$element.trigger(p);
        }, 0);
      }).emulateTransitionEnd(t.TRANSITION_DURATION);
    } else {
      i.removeClass("active");
      s.addClass("active");
      this.sliding = false;
      this.$element.trigger(p);
    }
    o && this.cycle();
    return this;
  };
  var r = e.fn.carousel;
  e.fn.carousel = n;
  e.fn.carousel.Constructor = t;
  e.fn.carousel.noConflict = function() {
    e.fn.carousel = r;
    return this;
  };
  var i = function(t) {
    var r;
    var i = e(this);
    var s = e(
      i.attr("data-target") ||
        ((r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""))
    );
    if (!s.hasClass("carousel")) return;
    var o = e.extend({}, s.data(), i.data());
    var u = i.attr("data-slide-to");
    if (u) o.interval = false;
    n.call(s, o);
    if (u) {
      s.data("bs.carousel").to(u);
    }
    t.preventDefault();
  };
  e(document)
    .on("click.bs.carousel.data-api", "[data-slide]", i)
    .on("click.bs.carousel.data-api", "[data-slide-to]", i);
  e(window).on("load", function() {
    e('[data-ride="carousel"]').each(function() {
      var t = e(this);
      n.call(t, t.data());
    });
  });
})(jQuery);
+(function(e) {
  "use strict";
  function n(t) {
    var n;
    var r =
      t.attr("data-target") ||
      ((n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
    return e(r);
  }
  function r(n) {
    return this.each(function() {
      var r = e(this);
      var i = r.data("bs.collapse");
      var s = e.extend({}, t.DEFAULTS, r.data(), typeof n == "object" && n);
      if (!i && s.toggle && n == "show") s.toggle = false;
      if (!i) r.data("bs.collapse", (i = new t(this, s)));
      if (typeof n == "string") i[n]();
    });
  }
  var t = function(n, r) {
    this.$element = e(n);
    this.options = e.extend({}, t.DEFAULTS, r);
    this.$trigger = e(this.options.trigger).filter(
      '[href="#' + n.id + '"], [data-target="#' + n.id + '"]'
    );
    this.transitioning = null;
    if (this.options.parent) {
      this.$parent = this.getParent();
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger);
    }
    if (this.options.toggle) this.toggle();
  };
  t.VERSION = "3.3.1";
  t.TRANSITION_DURATION = 350;
  t.DEFAULTS = { toggle: true, trigger: '[data-toggle="collapse"]' };
  t.prototype.dimension = function() {
    var e = this.$element.hasClass("width");
    return e ? "width" : "height";
  };
  t.prototype.show = function() {
    if (this.transitioning || this.$element.hasClass("in")) return;
    var n;
    var i =
      this.$parent &&
      this.$parent.find("> .panel").children(".in, .collapsing");
    if (i && i.length) {
      n = i.data("bs.collapse");
      if (n && n.transitioning) return;
    }
    var s = e.Event("show.bs.collapse");
    this.$element.trigger(s);
    if (s.isDefaultPrevented()) return;
    if (i && i.length) {
      r.call(i, "hide");
      n || i.data("bs.collapse", null);
    }
    var o = this.dimension();
    this.$element
      .removeClass("collapse")
      .addClass("collapsing")
      [o](0)
      .attr("aria-expanded", true);
    this.$trigger.removeClass("collapsed").attr("aria-expanded", true);
    this.transitioning = 1;
    var u = function() {
      this.$element
        .removeClass("collapsing")
        .addClass("collapse in")
        [o]("");
      this.transitioning = 0;
      this.$element.trigger("shown.bs.collapse");
    };
    if (!e.support.transition) return u.call(this);
    var a = e.camelCase(["scroll", o].join("-"));
    this.$element
      .one("bsTransitionEnd", e.proxy(u, this))
      .emulateTransitionEnd(t.TRANSITION_DURATION)
      [o](this.$element[0][a]);
  };
  t.prototype.hide = function() {
    if (this.transitioning || !this.$element.hasClass("in")) return;
    var n = e.Event("hide.bs.collapse");
    this.$element.trigger(n);
    if (n.isDefaultPrevented()) return;
    var r = this.dimension();
    this.$element[r](this.$element[r]())[0].offsetHeight;
    this.$element
      .addClass("collapsing")
      .removeClass("collapse in")
      .attr("aria-expanded", false);
    this.$trigger.addClass("collapsed").attr("aria-expanded", false);
    this.transitioning = 1;
    var i = function() {
      this.transitioning = 0;
      this.$element
        .removeClass("collapsing")
        .addClass("collapse")
        .trigger("hidden.bs.collapse");
    };
    if (!e.support.transition) return i.call(this);
    this.$element[r](0)
      .one("bsTransitionEnd", e.proxy(i, this))
      .emulateTransitionEnd(t.TRANSITION_DURATION);
  };
  t.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  };
  t.prototype.getParent = function() {
    return e(this.options.parent)
      .find(
        '[data-toggle="collapse"][data-parent="' + this.options.parent + '"]'
      )
      .each(
        e.proxy(function(t, r) {
          var i = e(r);
          this.addAriaAndCollapsedClass(n(i), i);
        }, this)
      )
      .end();
  };
  t.prototype.addAriaAndCollapsedClass = function(e, t) {
    var n = e.hasClass("in");
    e.attr("aria-expanded", n);
    t.toggleClass("collapsed", !n).attr("aria-expanded", n);
  };
  var i = e.fn.collapse;
  e.fn.collapse = r;
  e.fn.collapse.Constructor = t;
  e.fn.collapse.noConflict = function() {
    e.fn.collapse = i;
    return this;
  };
  e(document).on(
    "click.bs.collapse.data-api",
    '[data-toggle="collapse"]',
    function(t) {
      var i = e(this);
      if (!i.attr("data-target")) t.preventDefault();
      var s = n(i);
      var o = s.data("bs.collapse");
      var u = o ? "toggle" : e.extend({}, i.data(), { trigger: this });
      r.call(s, u);
    }
  );
})(jQuery);
+(function(e) {
  "use strict";
  function i(r) {
    if (r && r.which === 3) return;
    e(t).remove();
    e(n).each(function() {
      var t = e(this);
      var n = s(t);
      var i = { relatedTarget: this };
      if (!n.hasClass("open")) return;
      n.trigger((r = e.Event("hide.bs.dropdown", i)));
      if (r.isDefaultPrevented()) return;
      t.attr("aria-expanded", "false");
      n.removeClass("open").trigger("hidden.bs.dropdown", i);
    });
  }
  function s(t) {
    var n = t.attr("data-target");
    if (!n) {
      n = t.attr("href");
      n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "");
    }
    var r = n && e(n);
    return r && r.length ? r : t.parent();
  }
  function o(t) {
    return this.each(function() {
      var n = e(this);
      var i = n.data("bs.dropdown");
      if (!i) n.data("bs.dropdown", (i = new r(this)));
      if (typeof t == "string") i[t].call(n);
    });
  }
  var t = ".dropdown-backdrop";
  var n = '[data-toggle="dropdown"]';
  var r = function(t) {
    e(t).on("click.bs.dropdown", this.toggle);
  };
  r.VERSION = "3.3.1";
  r.prototype.toggle = function(t) {
    var n = e(this);
    if (n.is(".disabled, :disabled")) return;
    var r = s(n);
    var o = r.hasClass("open");
    i();
    if (!o) {
      if (
        "ontouchstart" in document.documentElement &&
        !r.closest(".navbar-nav").length
      ) {
        e('<div class="dropdown-backdrop"/>')
          .insertAfter(e(this))
          .on("click", i);
      }
      var u = { relatedTarget: this };
      r.trigger((t = e.Event("show.bs.dropdown", u)));
      if (t.isDefaultPrevented()) return;
      n.trigger("focus").attr("aria-expanded", "true");
      r.toggleClass("open").trigger("shown.bs.dropdown", u);
    }
    return false;
  };
  r.prototype.keydown = function(t) {
    if (
      !/(38|40|27|32)/.test(t.which) ||
      /input|textarea/i.test(t.target.tagName)
    )
      return;
    var r = e(this);
    t.preventDefault();
    t.stopPropagation();
    if (r.is(".disabled, :disabled")) return;
    var i = s(r);
    var o = i.hasClass("open");
    if ((!o && t.which != 27) || (o && t.which == 27)) {
      if (t.which == 27) i.find(n).trigger("focus");
      return r.trigger("click");
    }
    var u = " li:not(.divider):visible a";
    var a = i.find('[role="menu"]' + u + ', [role="listbox"]' + u);
    if (!a.length) return;
    var f = a.index(t.target);
    if (t.which == 38 && f > 0) f--;
    if (t.which == 40 && f < a.length - 1) f++;
    if (!~f) f = 0;
    a.eq(f).trigger("focus");
  };
  var u = e.fn.dropdown;
  e.fn.dropdown = o;
  e.fn.dropdown.Constructor = r;
  e.fn.dropdown.noConflict = function() {
    e.fn.dropdown = u;
    return this;
  };
  e(document)
    .on("click.bs.dropdown.data-api", i)
    .on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
      e.stopPropagation();
    })
    .on("click.bs.dropdown.data-api", n, r.prototype.toggle)
    .on("keydown.bs.dropdown.data-api", n, r.prototype.keydown)
    .on("keydown.bs.dropdown.data-api", '[role="menu"]', r.prototype.keydown)
    .on(
      "keydown.bs.dropdown.data-api",
      '[role="listbox"]',
      r.prototype.keydown
    );
})(jQuery);
+(function(e) {
  "use strict";
  function n(n, r) {
    return this.each(function() {
      var i = e(this);
      var s = i.data("bs.modal");
      var o = e.extend({}, t.DEFAULTS, i.data(), typeof n == "object" && n);
      if (!s) i.data("bs.modal", (s = new t(this, o)));
      if (typeof n == "string") s[n](r);
      else if (o.show) s.show(r);
    });
  }
  var t = function(t, n) {
    this.options = n;
    this.$body = e(document.body);
    this.$element = e(t);
    this.$backdrop = this.isShown = null;
    this.scrollbarWidth = 0;
    if (this.options.remote) {
      this.$element.find(".modal-content").load(
        this.options.remote,
        e.proxy(function() {
          this.$element.trigger("loaded.bs.modal");
        }, this)
      );
    }
  };
  t.VERSION = "3.3.1";
  t.TRANSITION_DURATION = 300;
  t.BACKDROP_TRANSITION_DURATION = 150;
  t.DEFAULTS = { backdrop: true, keyboard: true, show: true };
  t.prototype.toggle = function(e) {
    return this.isShown ? this.hide() : this.show(e);
  };
  t.prototype.show = function(n) {
    var r = this;
    var i = e.Event("show.bs.modal", { relatedTarget: n });
    this.$element.trigger(i);
    if (this.isShown || i.isDefaultPrevented()) return;
    this.isShown = true;
    this.checkScrollbar();
    this.setScrollbar();
    this.$body.addClass("modal-open");
    this.escape();
    this.resize();
    this.$element.on(
      "click.dismiss.bs.modal",
      '[data-dismiss="modal"]',
      e.proxy(this.hide, this)
    );
    this.backdrop(function() {
      var i = e.support.transition && r.$element.hasClass("fade");
      if (!r.$element.parent().length) {
        r.$element.appendTo(r.$body);
      }
      r.$element.show().scrollTop(0);
      if (r.options.backdrop) r.adjustBackdrop();
      r.adjustDialog();
      if (i) {
        r.$element[0].offsetWidth;
      }
      r.$element.addClass("in").attr("aria-hidden", false);
      r.enforceFocus();
      var s = e.Event("shown.bs.modal", { relatedTarget: n });
      i
        ? r.$element
            .find(".modal-dialog")
            .one("bsTransitionEnd", function() {
              r.$element.trigger("focus").trigger(s);
            })
            .emulateTransitionEnd(t.TRANSITION_DURATION)
        : r.$element.trigger("focus").trigger(s);
    });
  };
  t.prototype.hide = function(n) {
    if (n) n.preventDefault();
    n = e.Event("hide.bs.modal");
    this.$element.trigger(n);
    if (!this.isShown || n.isDefaultPrevented()) return;
    this.isShown = false;
    this.escape();
    this.resize();
    e(document).off("focusin.bs.modal");
    this.$element
      .removeClass("in")
      .attr("aria-hidden", true)
      .off("click.dismiss.bs.modal");
    e.support.transition && this.$element.hasClass("fade")
      ? this.$element
          .one("bsTransitionEnd", e.proxy(this.hideModal, this))
          .emulateTransitionEnd(t.TRANSITION_DURATION)
      : this.hideModal();
  };
  t.prototype.enforceFocus = function() {
    e(document)
      .off("focusin.bs.modal")
      .on(
        "focusin.bs.modal",
        e.proxy(function(e) {
          if (
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length
          ) {
            this.$element.trigger("focus");
          }
        }, this)
      );
  };
  t.prototype.escape = function() {
    if (this.isShown && this.options.keyboard) {
      this.$element.on(
        "keydown.dismiss.bs.modal",
        e.proxy(function(e) {
          e.which == 27 && this.hide();
        }, this)
      );
    } else if (!this.isShown) {
      this.$element.off("keydown.dismiss.bs.modal");
    }
  };
  t.prototype.resize = function() {
    if (this.isShown) {
      e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this));
    } else {
      e(window).off("resize.bs.modal");
    }
  };
  t.prototype.hideModal = function() {
    var e = this;
    this.$element.hide();
    this.backdrop(function() {
      e.$body.removeClass("modal-open");
      e.resetAdjustments();
      e.resetScrollbar();
      e.$element.trigger("hidden.bs.modal");
    });
  };
  t.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove();
    this.$backdrop = null;
  };
  t.prototype.backdrop = function(n) {
    var r = this;
    var i = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var s = e.support.transition && i;
      this.$backdrop = e('<div class="modal-backdrop ' + i + '" />')
        .prependTo(this.$element)
        .on(
          "click.dismiss.bs.modal",
          e.proxy(function(e) {
            if (e.target !== e.currentTarget) return;
            this.options.backdrop == "static"
              ? this.$element[0].focus.call(this.$element[0])
              : this.hide.call(this);
          }, this)
        );
      if (s) this.$backdrop[0].offsetWidth;
      this.$backdrop.addClass("in");
      if (!n) return;
      s
        ? this.$backdrop
            .one("bsTransitionEnd", n)
            .emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION)
        : n();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var o = function() {
        r.removeBackdrop();
        n && n();
      };
      e.support.transition && this.$element.hasClass("fade")
        ? this.$backdrop
            .one("bsTransitionEnd", o)
            .emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION)
        : o();
    } else if (n) {
      n();
    }
  };
  t.prototype.handleUpdate = function() {
    if (this.options.backdrop) this.adjustBackdrop();
    this.adjustDialog();
  };
  t.prototype.adjustBackdrop = function() {
    this.$backdrop
      .css("height", 0)
      .css("height", this.$element[0].scrollHeight);
  };
  t.prototype.adjustDialog = function() {
    var e =
      this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
    });
  };
  t.prototype.resetAdjustments = function() {
    this.$element.css({ paddingLeft: "", paddingRight: "" });
  };
  t.prototype.checkScrollbar = function() {
    this.bodyIsOverflowing =
      document.body.scrollHeight > document.documentElement.clientHeight;
    this.scrollbarWidth = this.measureScrollbar();
  };
  t.prototype.setScrollbar = function() {
    var e = parseInt(this.$body.css("padding-right") || 0, 10);
    if (this.bodyIsOverflowing)
      this.$body.css("padding-right", e + this.scrollbarWidth);
  };
  t.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", "");
  };
  t.prototype.measureScrollbar = function() {
    var e = document.createElement("div");
    e.className = "modal-scrollbar-measure";
    this.$body.append(e);
    var t = e.offsetWidth - e.clientWidth;
    this.$body[0].removeChild(e);
    return t;
  };
  var r = e.fn.modal;
  e.fn.modal = n;
  e.fn.modal.Constructor = t;
  e.fn.modal.noConflict = function() {
    e.fn.modal = r;
    return this;
  };
  e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(
    t
  ) {
    var r = e(this);
    var i = r.attr("href");
    var s = e(r.attr("data-target") || (i && i.replace(/.*(?=#[^\s]+$)/, "")));
    var o = s.data("bs.modal")
      ? "toggle"
      : e.extend({ remote: !/#/.test(i) && i }, s.data(), r.data());
    if (r.is("a")) t.preventDefault();
    s.one("show.bs.modal", function(e) {
      if (e.isDefaultPrevented()) return;
      s.one("hidden.bs.modal", function() {
        r.is(":visible") && r.trigger("focus");
      });
    });
    n.call(s, o, this);
  });
})(jQuery);
+(function(e) {
  "use strict";
  function n(n) {
    return this.each(function() {
      var r = e(this);
      var i = r.data("bs.tooltip");
      var s = typeof n == "object" && n;
      var o = s && s.selector;
      if (!i && n == "destroy") return;
      if (o) {
        if (!i) r.data("bs.tooltip", (i = {}));
        if (!i[o]) i[o] = new t(this, s);
      } else {
        if (!i) r.data("bs.tooltip", (i = new t(this, s)));
      }
      if (typeof n == "string") i[n]();
    });
  }
  var t = function(e, t) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null;
    this.init("tooltip", e, t);
  };
  t.VERSION = "3.3.1";
  t.TRANSITION_DURATION = 150;
  t.DEFAULTS = {
    animation: true,
    placement: "top",
    selector: false,
    template:
      '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: false,
    container: false,
    viewport: { selector: "body", padding: 0 }
  };
  t.prototype.init = function(t, n, r) {
    this.enabled = true;
    this.type = t;
    this.$element = e(n);
    this.options = this.getOptions(r);
    this.$viewport =
      this.options.viewport &&
      e(this.options.viewport.selector || this.options.viewport);
    var i = this.options.trigger.split(" ");
    for (var s = i.length; s--; ) {
      var o = i[s];
      if (o == "click") {
        this.$element.on(
          "click." + this.type,
          this.options.selector,
          e.proxy(this.toggle, this)
        );
      } else if (o != "manual") {
        var u = o == "hover" ? "mouseenter" : "focusin";
        var a = o == "hover" ? "mouseleave" : "focusout";
        this.$element.on(
          u + "." + this.type,
          this.options.selector,
          e.proxy(this.enter, this)
        );
        this.$element.on(
          a + "." + this.type,
          this.options.selector,
          e.proxy(this.leave, this)
        );
      }
    }
    this.options.selector
      ? (this._options = e.extend({}, this.options, {
          trigger: "manual",
          selector: ""
        }))
      : this.fixTitle();
  };
  t.prototype.getDefaults = function() {
    return t.DEFAULTS;
  };
  t.prototype.getOptions = function(t) {
    t = e.extend({}, this.getDefaults(), this.$element.data(), t);
    if (t.delay && typeof t.delay == "number") {
      t.delay = { show: t.delay, hide: t.delay };
    }
    return t;
  };
  t.prototype.getDelegateOptions = function() {
    var t = {};
    var n = this.getDefaults();
    this._options &&
      e.each(this._options, function(e, r) {
        if (n[e] != r) t[e] = r;
      });
    return t;
  };
  t.prototype.enter = function(t) {
    var n =
      t instanceof this.constructor
        ? t
        : e(t.currentTarget).data("bs." + this.type);
    if (n && n.$tip && n.$tip.is(":visible")) {
      n.hoverState = "in";
      return;
    }
    if (!n) {
      n = new this.constructor(t.currentTarget, this.getDelegateOptions());
      e(t.currentTarget).data("bs." + this.type, n);
    }
    clearTimeout(n.timeout);
    n.hoverState = "in";
    if (!n.options.delay || !n.options.delay.show) return n.show();
    n.timeout = setTimeout(function() {
      if (n.hoverState == "in") n.show();
    }, n.options.delay.show);
  };
  t.prototype.leave = function(t) {
    var n =
      t instanceof this.constructor
        ? t
        : e(t.currentTarget).data("bs." + this.type);
    if (!n) {
      n = new this.constructor(t.currentTarget, this.getDelegateOptions());
      e(t.currentTarget).data("bs." + this.type, n);
    }
    clearTimeout(n.timeout);
    n.hoverState = "out";
    if (!n.options.delay || !n.options.delay.hide) return n.hide();
    n.timeout = setTimeout(function() {
      if (n.hoverState == "out") n.hide();
    }, n.options.delay.hide);
  };
  t.prototype.show = function() {
    var n = e.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(n);
      var r = e.contains(
        this.$element[0].ownerDocument.documentElement,
        this.$element[0]
      );
      if (n.isDefaultPrevented() || !r) return;
      var i = this;
      var s = this.tip();
      var o = this.getUID(this.type);
      this.setContent();
      s.attr("id", o);
      this.$element.attr("aria-describedby", o);
      if (this.options.animation) s.addClass("fade");
      var u =
        typeof this.options.placement == "function"
          ? this.options.placement.call(this, s[0], this.$element[0])
          : this.options.placement;
      var a = /\s?auto?\s?/i;
      var f = a.test(u);
      if (f) u = u.replace(a, "") || "top";
      s.detach()
        .css({ top: 0, left: 0, display: "block" })
        .addClass(u)
        .data("bs." + this.type, this);
      this.options.container
        ? s.appendTo(this.options.container)
        : s.insertAfter(this.$element);
      var l = this.getPosition();
      var c = s[0].offsetWidth;
      var h = s[0].offsetHeight;
      if (f) {
        var p = u;
        var d = this.options.container
          ? e(this.options.container)
          : this.$element.parent();
        var v = this.getPosition(d);
        u =
          u == "bottom" && l.bottom + h > v.bottom
            ? "top"
            : u == "top" && l.top - h < v.top
            ? "bottom"
            : u == "right" && l.right + c > v.width
            ? "left"
            : u == "left" && l.left - c < v.left
            ? "right"
            : u;
        s.removeClass(p).addClass(u);
      }
      var m = this.getCalculatedOffset(u, l, c, h);
      this.applyPlacement(m, u);
      var g = function() {
        var e = i.hoverState;
        i.$element.trigger("shown.bs." + i.type);
        i.hoverState = null;
        if (e == "out") i.leave(i);
      };
      e.support.transition && this.$tip.hasClass("fade")
        ? s
            .one("bsTransitionEnd", g)
            .emulateTransitionEnd(t.TRANSITION_DURATION)
        : g();
    }
  };
  t.prototype.applyPlacement = function(t, n) {
    var r = this.tip();
    var i = r[0].offsetWidth;
    var s = r[0].offsetHeight;
    var o = parseInt(r.css("margin-top"), 10);
    var u = parseInt(r.css("margin-left"), 10);
    if (isNaN(o)) o = 0;
    if (isNaN(u)) u = 0;
    t.top = t.top + o;
    t.left = t.left + u;
    e.offset.setOffset(
      r[0],
      e.extend(
        {
          using: function(e) {
            r.css({ top: Math.round(e.top), left: Math.round(e.left) });
          }
        },
        t
      ),
      0
    );
    r.addClass("in");
    var a = r[0].offsetWidth;
    var f = r[0].offsetHeight;
    if (n == "top" && f != s) {
      t.top = t.top + s - f;
    }
    var l = this.getViewportAdjustedDelta(n, t, a, f);
    if (l.left) t.left += l.left;
    else t.top += l.top;
    var c = /top|bottom/.test(n);
    var h = c ? l.left * 2 - i + a : l.top * 2 - s + f;
    var p = c ? "offsetWidth" : "offsetHeight";
    r.offset(t);
    this.replaceArrow(h, r[0][p], c);
  };
  t.prototype.replaceArrow = function(e, t, n) {
    this.arrow()
      .css(n ? "left" : "top", 50 * (1 - e / t) + "%")
      .css(n ? "top" : "left", "");
  };
  t.prototype.setContent = function() {
    var e = this.tip();
    var t = this.getTitle();
    e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
    e.removeClass("fade in top bottom left right");
  };
  t.prototype.hide = function(n) {
    function o() {
      if (r.hoverState != "in") i.detach();
      r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type);
      n && n();
    }
    var r = this;
    var i = this.tip();
    var s = e.Event("hide.bs." + this.type);
    this.$element.trigger(s);
    if (s.isDefaultPrevented()) return;
    i.removeClass("in");
    e.support.transition && this.$tip.hasClass("fade")
      ? i.one("bsTransitionEnd", o).emulateTransitionEnd(t.TRANSITION_DURATION)
      : o();
    this.hoverState = null;
    return this;
  };
  t.prototype.fixTitle = function() {
    var e = this.$element;
    if (e.attr("title") || typeof e.attr("data-original-title") != "string") {
      e.attr("data-original-title", e.attr("title") || "").attr("title", "");
    }
  };
  t.prototype.hasContent = function() {
    return this.getTitle();
  };
  t.prototype.getPosition = function(t) {
    t = t || this.$element;
    var n = t[0];
    var r = n.tagName == "BODY";
    var i = n.getBoundingClientRect();
    if (i.width == null) {
      i = e.extend({}, i, {
        width: i.right - i.left,
        height: i.bottom - i.top
      });
    }
    var s = r ? { top: 0, left: 0 } : t.offset();
    var o = {
      scroll: r
        ? document.documentElement.scrollTop || document.body.scrollTop
        : t.scrollTop()
    };
    var u = r ? { width: e(window).width(), height: e(window).height() } : null;
    return e.extend({}, i, o, u, s);
  };
  t.prototype.getCalculatedOffset = function(e, t, n, r) {
    return e == "bottom"
      ? { top: t.top + t.height, left: t.left + t.width / 2 - n / 2 }
      : e == "top"
      ? { top: t.top - r, left: t.left + t.width / 2 - n / 2 }
      : e == "left"
      ? { top: t.top + t.height / 2 - r / 2, left: t.left - n }
      : { top: t.top + t.height / 2 - r / 2, left: t.left + t.width };
  };
  t.prototype.getViewportAdjustedDelta = function(e, t, n, r) {
    var i = { top: 0, left: 0 };
    if (!this.$viewport) return i;
    var s = (this.options.viewport && this.options.viewport.padding) || 0;
    var o = this.getPosition(this.$viewport);
    if (/right|left/.test(e)) {
      var u = t.top - s - o.scroll;
      var a = t.top + s - o.scroll + r;
      if (u < o.top) {
        i.top = o.top - u;
      } else if (a > o.top + o.height) {
        i.top = o.top + o.height - a;
      }
    } else {
      var f = t.left - s;
      var l = t.left + s + n;
      if (f < o.left) {
        i.left = o.left - f;
      } else if (l > o.width) {
        i.left = o.left + o.width - l;
      }
    }
    return i;
  };
  t.prototype.getTitle = function() {
    var e;
    var t = this.$element;
    var n = this.options;
    e =
      t.attr("data-original-title") ||
      (typeof n.title == "function" ? n.title.call(t[0]) : n.title);
    return e;
  };
  t.prototype.getUID = function(e) {
    do e += ~~(Math.random() * 1e6);
    while (document.getElementById(e));
    return e;
  };
  t.prototype.tip = function() {
    return (this.$tip = this.$tip || e(this.options.template));
  };
  t.prototype.arrow = function() {
    return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
  };
  t.prototype.enable = function() {
    this.enabled = true;
  };
  t.prototype.disable = function() {
    this.enabled = false;
  };
  t.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled;
  };
  t.prototype.toggle = function(t) {
    var n = this;
    if (t) {
      n = e(t.currentTarget).data("bs." + this.type);
      if (!n) {
        n = new this.constructor(t.currentTarget, this.getDelegateOptions());
        e(t.currentTarget).data("bs." + this.type, n);
      }
    }
    n.tip().hasClass("in") ? n.leave(n) : n.enter(n);
  };
  t.prototype.destroy = function() {
    var e = this;
    clearTimeout(this.timeout);
    this.hide(function() {
      e.$element.off("." + e.type).removeData("bs." + e.type);
    });
  };
  var r = e.fn.tooltip;
  e.fn.tooltip = n;
  e.fn.tooltip.Constructor = t;
  e.fn.tooltip.noConflict = function() {
    e.fn.tooltip = r;
    return this;
  };
})(jQuery);
+(function(e) {
  "use strict";
  function n(n) {
    return this.each(function() {
      var r = e(this);
      var i = r.data("bs.popover");
      var s = typeof n == "object" && n;
      var o = s && s.selector;
      if (!i && n == "destroy") return;
      if (o) {
        if (!i) r.data("bs.popover", (i = {}));
        if (!i[o]) i[o] = new t(this, s);
      } else {
        if (!i) r.data("bs.popover", (i = new t(this, s)));
      }
      if (typeof n == "string") i[n]();
    });
  }
  var t = function(e, t) {
    this.init("popover", e, t);
  };
  if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
  t.VERSION = "3.3.1";
  t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template:
      '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  });
  t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype);
  t.prototype.constructor = t;
  t.prototype.getDefaults = function() {
    return t.DEFAULTS;
  };
  t.prototype.setContent = function() {
    var e = this.tip();
    var t = this.getTitle();
    var n = this.getContent();
    e.find(".popover-title")[this.options.html ? "html" : "text"](t);
    e.find(".popover-content")
      .children()
      .detach()
      .end()
      [this.options.html ? (typeof n == "string" ? "html" : "append") : "text"](
        n
      );
    e.removeClass("fade top bottom left right in");
    if (!e.find(".popover-title").html()) e.find(".popover-title").hide();
  };
  t.prototype.hasContent = function() {
    return this.getTitle() || this.getContent();
  };
  t.prototype.getContent = function() {
    var e = this.$element;
    var t = this.options;
    return (
      e.attr("data-content") ||
      (typeof t.content == "function" ? t.content.call(e[0]) : t.content)
    );
  };
  t.prototype.arrow = function() {
    return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
  };
  t.prototype.tip = function() {
    if (!this.$tip) this.$tip = e(this.options.template);
    return this.$tip;
  };
  var r = e.fn.popover;
  e.fn.popover = n;
  e.fn.popover.Constructor = t;
  e.fn.popover.noConflict = function() {
    e.fn.popover = r;
    return this;
  };
})(jQuery);
+(function(e) {
  "use strict";
  function t(n, r) {
    var i = e.proxy(this.process, this);
    this.$body = e("body");
    this.$scrollElement = e(n).is("body") ? e(window) : e(n);
    this.options = e.extend({}, t.DEFAULTS, r);
    this.selector = (this.options.target || "") + " .nav li > a";
    this.offsets = [];
    this.targets = [];
    this.activeTarget = null;
    this.scrollHeight = 0;
    this.$scrollElement.on("scroll.bs.scrollspy", i);
    this.refresh();
    this.process();
  }
  function n(n) {
    return this.each(function() {
      var r = e(this);
      var i = r.data("bs.scrollspy");
      var s = typeof n == "object" && n;
      if (!i) r.data("bs.scrollspy", (i = new t(this, s)));
      if (typeof n == "string") i[n]();
    });
  }
  t.VERSION = "3.3.1";
  t.DEFAULTS = { offset: 10 };
  t.prototype.getScrollHeight = function() {
    return (
      this.$scrollElement[0].scrollHeight ||
      Math.max(
        this.$body[0].scrollHeight,
        document.documentElement.scrollHeight
      )
    );
  };
  t.prototype.refresh = function() {
    var t = "offset";
    var n = 0;
    if (!e.isWindow(this.$scrollElement[0])) {
      t = "position";
      n = this.$scrollElement.scrollTop();
    }
    this.offsets = [];
    this.targets = [];
    this.scrollHeight = this.getScrollHeight();
    var r = this;
    this.$body
      .find(this.selector)
      .map(function() {
        var r = e(this);
        var i = r.data("target") || r.attr("href");
        var s = /^#./.test(i) && e(i);
        return (
          (s && s.length && s.is(":visible") && [[s[t]().top + n, i]]) || null
        );
      })
      .sort(function(e, t) {
        return e[0] - t[0];
      })
      .each(function() {
        r.offsets.push(this[0]);
        r.targets.push(this[1]);
      });
  };
  t.prototype.process = function() {
    var e = this.$scrollElement.scrollTop() + this.options.offset;
    var t = this.getScrollHeight();
    var n = this.options.offset + t - this.$scrollElement.height();
    var r = this.offsets;
    var i = this.targets;
    var s = this.activeTarget;
    var o;
    if (this.scrollHeight != t) {
      this.refresh();
    }
    if (e >= n) {
      return s != (o = i[i.length - 1]) && this.activate(o);
    }
    if (s && e < r[0]) {
      this.activeTarget = null;
      return this.clear();
    }
    for (o = r.length; o--; ) {
      s != i[o] &&
        e >= r[o] &&
        (!r[o + 1] || e <= r[o + 1]) &&
        this.activate(i[o]);
    }
  };
  t.prototype.activate = function(t) {
    this.activeTarget = t;
    this.clear();
    var n =
      this.selector +
      '[data-target="' +
      t +
      '"],' +
      this.selector +
      '[href="' +
      t +
      '"]';
    var r = e(n)
      .parents("li")
      .addClass("active");
    if (r.parent(".dropdown-menu").length) {
      r = r.closest("li.dropdown").addClass("active");
    }
    r.trigger("activate.bs.scrollspy");
  };
  t.prototype.clear = function() {
    e(this.selector)
      .parentsUntil(this.options.target, ".active")
      .removeClass("active");
  };
  var r = e.fn.scrollspy;
  e.fn.scrollspy = n;
  e.fn.scrollspy.Constructor = t;
  e.fn.scrollspy.noConflict = function() {
    e.fn.scrollspy = r;
    return this;
  };
  e(window).on("load.bs.scrollspy.data-api", function() {
    e('[data-spy="scroll"]').each(function() {
      var t = e(this);
      n.call(t, t.data());
    });
  });
})(jQuery);
+(function(e) {
  "use strict";
  function n(n) {
    return this.each(function() {
      var r = e(this);
      var i = r.data("bs.tab");
      if (!i) r.data("bs.tab", (i = new t(this)));
      if (typeof n == "string") i[n]();
    });
  }
  var t = function(t) {
    this.element = e(t);
  };
  t.VERSION = "3.3.1";
  t.TRANSITION_DURATION = 150;
  t.prototype.show = function() {
    var t = this.element;
    var n = t.closest("ul:not(.dropdown-menu)");
    var r = t.data("target");
    if (!r) {
      r = t.attr("href");
      r = r && r.replace(/.*(?=#[^\s]*$)/, "");
    }
    if (t.parent("li").hasClass("active")) return;
    var i = n.find(".active:last a");
    var s = e.Event("hide.bs.tab", { relatedTarget: t[0] });
    var o = e.Event("show.bs.tab", { relatedTarget: i[0] });
    i.trigger(s);
    t.trigger(o);
    if (o.isDefaultPrevented() || s.isDefaultPrevented()) return;
    var u = e(r);
    this.activate(t.closest("li"), n);
    this.activate(u, u.parent(), function() {
      i.trigger({ type: "hidden.bs.tab", relatedTarget: t[0] });
      t.trigger({ type: "shown.bs.tab", relatedTarget: i[0] });
    });
  };
  t.prototype.activate = function(n, r, i) {
    function u() {
      s.removeClass("active")
        .find("> .dropdown-menu > .active")
        .removeClass("active")
        .end()
        .find('[data-toggle="tab"]')
        .attr("aria-expanded", false);
      n.addClass("active")
        .find('[data-toggle="tab"]')
        .attr("aria-expanded", true);
      if (o) {
        n[0].offsetWidth;
        n.addClass("in");
      } else {
        n.removeClass("fade");
      }
      if (n.parent(".dropdown-menu")) {
        n.closest("li.dropdown")
          .addClass("active")
          .end()
          .find('[data-toggle="tab"]')
          .attr("aria-expanded", true);
      }
      i && i();
    }
    var s = r.find("> .active");
    var o =
      i &&
      e.support.transition &&
      ((s.length && s.hasClass("fade")) || !!r.find("> .fade").length);
    s.length && o
      ? s.one("bsTransitionEnd", u).emulateTransitionEnd(t.TRANSITION_DURATION)
      : u();
    s.removeClass("in");
  };
  var r = e.fn.tab;
  e.fn.tab = n;
  e.fn.tab.Constructor = t;
  e.fn.tab.noConflict = function() {
    e.fn.tab = r;
    return this;
  };
  var i = function(t) {
    t.preventDefault();
    n.call(e(this), "show");
  };
  e(document)
    .on("click.bs.tab.data-api", '[data-toggle="tab"]', i)
    .on("click.bs.tab.data-api", '[data-toggle="pill"]', i);
})(jQuery);
+(function(e) {
  "use strict";
  function n(n) {
    return this.each(function() {
      var r = e(this);
      var i = r.data("bs.affix");
      var s = typeof n == "object" && n;
      if (!i) r.data("bs.affix", (i = new t(this, s)));
      if (typeof n == "string") i[n]();
    });
  }
  var t = function(n, r) {
    this.options = e.extend({}, t.DEFAULTS, r);
    this.$target = e(this.options.target)
      .on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this))
      .on(
        "click.bs.affix.data-api",
        e.proxy(this.checkPositionWithEventLoop, this)
      );
    this.$element = e(n);
    this.affixed = this.unpin = this.pinnedOffset = null;
    this.checkPosition();
  };
  t.VERSION = "3.3.1";
  t.RESET = "affix affix-top affix-bottom";
  t.DEFAULTS = { offset: 0, target: window };
  t.prototype.getState = function(e, t, n, r) {
    var i = this.$target.scrollTop();
    var s = this.$element.offset();
    var o = this.$target.height();
    if (n != null && this.affixed == "top") return i < n ? "top" : false;
    if (this.affixed == "bottom") {
      if (n != null) return i + this.unpin <= s.top ? false : "bottom";
      return i + o <= e - r ? false : "bottom";
    }
    var u = this.affixed == null;
    var a = u ? i : s.top;
    var f = u ? o : t;
    if (n != null && a <= n) return "top";
    if (r != null && a + f >= e - r) return "bottom";
    return false;
  };
  t.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(t.RESET).addClass("affix");
    var e = this.$target.scrollTop();
    var n = this.$element.offset();
    return (this.pinnedOffset = n.top - e);
  };
  t.prototype.checkPositionWithEventLoop = function() {
    setTimeout(e.proxy(this.checkPosition, this), 1);
  };
  t.prototype.checkPosition = function() {
    if (!this.$element.is(":visible")) return;
    var n = this.$element.height();
    var r = this.options.offset;
    var i = r.top;
    var s = r.bottom;
    var o = e("body").height();
    if (typeof r != "object") s = i = r;
    if (typeof i == "function") i = r.top(this.$element);
    if (typeof s == "function") s = r.bottom(this.$element);
    var u = this.getState(o, n, i, s);
    if (this.affixed != u) {
      if (this.unpin != null) this.$element.css("top", "");
      var a = "affix" + (u ? "-" + u : "");
      var f = e.Event(a + ".bs.affix");
      this.$element.trigger(f);
      if (f.isDefaultPrevented()) return;
      this.affixed = u;
      this.unpin = u == "bottom" ? this.getPinnedOffset() : null;
      this.$element
        .removeClass(t.RESET)
        .addClass(a)
        .trigger(a.replace("affix", "affixed") + ".bs.affix");
    }
    if (u == "bottom") {
      this.$element.offset({ top: o - n - s });
    }
  };
  var r = e.fn.affix;
  e.fn.affix = n;
  e.fn.affix.Constructor = t;
  e.fn.affix.noConflict = function() {
    e.fn.affix = r;
    return this;
  };
  e(window).on("load", function() {
    e('[data-spy="affix"]').each(function() {
      var t = e(this);
      var r = t.data();
      r.offset = r.offset || {};
      if (r.offsetBottom != null) r.offset.bottom = r.offsetBottom;
      if (r.offsetTop != null) r.offset.top = r.offsetTop;
      n.call(t, r);
    });
  });
})(jQuery);
