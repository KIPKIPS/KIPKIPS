var hr = location.href;
hr.indexOf("nore=1") <= 0 && 0 < hr.indexOf("a.aidn") && (location.href = hr.split("a.aidn").join("aidn")),
    0 < hr.indexOf("www.aidn") && (location.href = hr.split("www.aidn").join("aidn")),
    function (e, t, n, i, a, o) {
        e.GoogleAnalyticsObject = i,
            e.ga = e.ga ||
            function () {
                (e.ga.q = e.ga.q || []).push(arguments)
            },
            e.ga.l = +new Date,
            a = t.createElement(n),
            o = t.getElementsByTagName(n)[0],
            a.async = 1,
            a.src = "https://www.google-analytics.com/analytics.js",
            o.parentNode.insertBefore(a, o)
    }(window, document, "script", "ga"),
    ga("create", "UA-27113912-1", "auto"),
    ga("send", "pageview");
var aidn = aidn || {};
aidn.log = function () {
    window.console && console.log(arguments)
},
    aidn.alert = function () {
        for (var e = "",
            t = arguments.length,
            n = 0; n < t - 1; n++) e += arguments[n] + ", ";
        0 < t && (e += arguments[n]),
            alert(e)
    },
    aidn.debug = function () {
        if ("undefined" != typeof jQuery) {
            for (var e = "",
                t = arguments.length,
                n = 0; n < t; n++) e += arguments[n] + ", ";
            0 == $("#__debugx").length && $("html").append("<div id='__debugx' style='pointer-events:none;text-align:left;position:fixed;z-index:10000000;top:0;font-weight:bold;background:rgba(255,255,255,0.5);'></div>"),
                $("#__debugx").prepend("<p>" + e + "</p>")
        }
    },
    aidn.constant = {
        album2ndJa: "/daniwell/cats/",
        album2ndEn: "/daniwell/cats/en/",
        advUrlJa: "/daniwell/",
        advUrlEn: "/daniwell/",
        advImg: "shared/img/adv.gif",
        advTex: "DANIWELL DISCOGRAPHY",
        advAlt: "DANIWELL (Nyan Cat Song Creator) DISCOGRAPHY"
    };
try {
    for (var l = location.href.split("aidn")[1].split("/").length - 2, i = 0; i < l; i++) aidn.constant.advImg = "../" + aidn.constant.advImg
} catch (e) { }
aidn.init = {
    ver: 0,
    selectBasePath: function (e, t) {
        var n = parseInt(aidn.util.getCookie("baseid")),
            e = e;
        return !isNaN(n) && 1 != t || (n = Math.floor(Math.random() * e.length), aidn.util.setCookie("baseid", n, 604800)),
            (e.length <= n || n < 0) && (n = 0),
            this.basepath = e[n],
            this.basepath
    },
    loadScript: function (n, i) {
        $.ajaxSetup({
            cache: !0
        });
        var a = function (e) {
            var t = n[e] + "?" + aidn.init.ver;
            aidn.init.usebase && 0 != t.indexOf("http") && (t = aidn.init.basepath + t),
                $.getScript(t,
                    function () {
                        e + 1 < n.length ? a(e + 1) : i && i()
                    })
        };
        a(0)
    },
    basepath: "",
    usebase: !0
},
    aidn.config = {
        init: function () {
            this.clWidth = document.documentElement.clientWidth,
                this.clHeight = document.documentElement.clientHeight,
                this.scWidth = screen.width,
                this.scHeight = screen.height,
                this.inWidth = window.innerWidth,
                this.inHeight = window.innerHeight,
                (this.clHeight <= 0 || this.clWidth <= 0) && (this.clWidth = this.scWidth, this.clHeight = this.scHeight),
                (this.inHeight <= 0 || this.inWidth <= 0) && (this.inWidth = this.clWidth, this.inHeight = this.clHeight)
        },
        clWidth: 0,
        clHeight: 0,
        scWidth: 0,
        scHeight: 0,
        inWidth: 0,
        inHeight: 0,
        touchEnabled: null != window.TouchEvent
    },
    aidn.audio = {
        init: function () {
            if (!this._inited) {
                this._inited = !0;
                try {
                    this.audio = [],
                        this.audio[0] = new Audio,
                        this.availableAudio = !0,
                        this.availableOgg = "" != this.audio[0].canPlayType("audio/ogg"),
                        this.availableMP3 = "" != this.audio[0].canPlayType("audio/mpeg"),
                        this.availableWav = "" != this.audio[0].canPlayType("audio/wav")
                } catch (e) {
                    availableAudio = !1
                }
            }
        },
        setSrc: function (e, t) {
            this.audio[e] ? this.audio[e].src = t : this.audio[e] = new Audio(t)
        },
        load: function (e) {
            this.audio[e].load()
        },
        play: function (e) {
            this.audio[e].play()
        },
        pause: function (e) {
            this.audio[e].pause()
        },
        stop: function (e) {
            this.audio[e].ended || (this.audio[e].pause(), this.audio[e].currentTime = 0)
        },
        volume: function (e, t) {
            this.audio[e].volume = t = 1 < (t = t < 0 ? 0 : t) ? 1 : t
        },
        getPath: function (e) {
            for (var t = e.length,
                n = 0; n < t; n++) {
                var i = e[n],
                    a = i.toLowerCase();
                if (aidn.audio.availableMP3 && a.indexOf(".mp3")) break;
                if (aidn.audio.availableOgg && a.indexOf(".ogg")) break;
                if (aidn.audio.availableWav && a.indexOf(".wav")) break
            }
            return i = n == t ? null : i
        },
        _inited: !1,
        audio: [],
        availableAudio: !1,
        availableMP3: !1,
        availableWav: !1,
        availableOgg: !1
    },
    aidn.canvas = {
        create: function (e, t, n, i, a) {
            var o = '<canvas id="' + t + '" width="' + n + '" height="' + i + '"></canvas>';
            document.getElementById(e).innerHTML = o,
                this.canvas = document.getElementById(t),
                this.ctx = this.canvas.getContext("2d"),
                this.w = n,
                this.h = i,
                this.bgColor = a,
                this.clear(!0)
        },
        clear: function (e) {
            this.ctx.fillStyle = this.bgColor,
                this.ctx.fillRect(0, 0, this.w, this.h),
                e && this.ctx.fill()
        },
        canvas: null,
        ctx: null,
        w: 0,
        h: 0,
        bgColor: "#ffffff"
    },
    aidn.event = {
        addTouchEvent: function (e, t, n, i, a) {
            "string" == typeof e && (e = document.getElementById(e)),
                t && e.addEventListener("touchstart", t, !1),
                n && e.addEventListener("touchmove", n, !1),
                i && e.addEventListener("touchend", i, !1),
                a && e.addEventListener("touchcancel", a, !1)
        },
        removeTouchEvent: function (e, t, n, i, a) {
            "string" == typeof e && (e = document.getElementById(e)),
                t && e.removeEventListener("touchstart", t, !1),
                n && e.removeEventListener("touchmove", n, !1),
                i && e.removeEventListener("touchend", i, !1),
                a && e.removeEventListener("touchcancel", a, !1)
        },
        addMouseEvent: function (e, t, n, i, a) {
            "string" == typeof e && (e = document.getElementById(e)),
                t && e.addEventListener("mousedown", t, !1),
                n && e.addEventListener("mousemove", n, !1),
                i && e.addEventListener("mouseup", i, !1),
                a && e.addEventListener("mouseout", a, !1)
        },
        removeMouseEvent: function (e, t, n, i, a) {
            "string" == typeof e && (e = document.getElementById(e)),
                t && e.removeEventListener("mousedown", t, !1),
                n && e.removeEventListener("mousemove", n, !1),
                i && e.removeEventListener("mouseup", i, !1),
                a && e.removeEventListener("mouseout", a, !1)
        },
        add: function (e, t, n, i, a) {
            (aidn.config.touchEnabled ? this.addTouchEvent : this.addMouseEvent)(e, t, n, i, a)
        },
        remove: function (e, t, n, i, a) {
            (aidn.config.touchEnabled ? this.removeTouchEvent : this.removeMouseEvent)(e, t, n, i, a)
        },
        addMouseWheel: function (e, t) {
            var n = "onwheel" in document ? "wheel" : "onmousewheel" in document ? "mousewheel" : "DOMMouseScroll"; (e = "string" == typeof e ? document.getElementById(e) : e).addEventListener(n, t)
        },
        removeMouseWheel: function (e, t) {
            var n = "onwheel" in document ? "wheel" : "onmousewheel" in document ? "mousewheel" : "DOMMouseScroll"; (e = "string" == typeof e ? document.getElementById(e) : e).removeEventListener(n, t)
        },
        addDeviceOrientation: function (e) {
            window.addEventListener("deviceorientation", e)
        },
        removeDeviceOrientation: function (e) {
            window.removeEventListener("deviceorientation", e)
        },
        addDeviceMotion: function (e) {
            window.addEventListener("devicemotion", e)
        },
        removeDeviceMotion: function (e) {
            window.removeEventListener("devicemotion", e)
        },
        getWheelDelta: function (e) {
            return void 0 !== e.wheelDelta ? e.wheelDelta : e.detail
        },
        getPos: function (e) {
            return e.touches ? {
                x: e.touches[0].pageX,
                y: e.touches[0].pageY
            } : e.originalEvent && e.originalEvent.touches ? {
                x: e.originalEvent.touches[0].pageX,
                y: e.originalEvent.touches[0].pageY
            } : {
                x: e.clientX,
                y: e.clientY
            }
        }
    },
    aidn.util = {
        initHideAddressBar: function (e, t) {
            e && window.addEventListener("load",
                function () {
                    setTimeout(aidn.util.hideAddressBar, 100)
                },
                !1),
                t && window.addEventListener("orientationchange",
                    function () {
                        setTimeout(aidn.util.hideAddressBar, 100)
                    },
                    !1)
        },
        hideAddressBar: function () {
            window.pageYOffset <= 0 && window.scrollTo(0, 1)
        },
        hideAddressBarStart: function (e) {
            navigator.userAgent.match(/iphone|ipod/i) ? (this.m = parseInt(document.body.style.minHeight), isNaN(this.m) && (this.m = 0), document.body.style.minHeight = "2000px", window.addEventListener("scroll", this._scrolled), this.f = e, this.i = setInterval(function () {
                aidn.util.hideAddressBar()
            },
                50)) : e && e()
        },
        _scrolled: function () {
            var e = aidn.util;
            document.body.style.minHeight = Math.max(window.innerHeight, e.m) + "px",
                clearInterval(e.i),
                window.removeEventListener("scroll", e._scrolled),
                e.f && e.f()
        },
        lowerAndroid: function (e) {
            var t = !1,
                n = navigator.userAgent;
            return t = 0 < n.indexOf("Android") && parseFloat(n.substr(n.indexOf("Android") + 8, 3)) < e ? !0 : t
        },
        getLanguage: function () {
            var e = this.getQuery();
            return e.lc || (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0, 2)
        },
        stopScroll: function () {
            document.addEventListener("touchmove",
                function (e) {
                    e.preventDefault()
                },
                !1)
        },
        checkJapanese: function () {
            this.getLanguage();
            return "ja" == this.getLanguage() || !!(this.lowerAndroid(2.4) && 0 < navigator.userAgent.toLowerCase().indexOf("ja-jp"))
        },
        useDummyDiv: function () {
            var e = aidn.util.getiOSVersion();
            return 0 < e && e < 10
        },
        getiOSVersion: function () {
            var e = navigator.userAgent,
                t = e.match(/iPhone OS (\d+_*\d*)/);
            return t && t[1] || (t = e.match(/iPad; CPU OS (\d+_*\d*)/)) && t[1] ? parseFloat(t[1].replace("_", ".")) : aidn.util.checkiOS() && (t = e.match(/Version\/(\d+\.*\d*)/)) && t[1] ? t[1] : -1
        },
        checkChrome: function () {
            var e = navigator.userAgent;
            return 0 <= e.indexOf("CriOS") || 0 <= e.indexOf("Chrome")
        },
        checkSafari: function () {
            var e = navigator.userAgent;
            return 0 <= e.indexOf("Version") && 0 <= e.indexOf("Safari")
        },
        checkFirefox: function () {
            return 0 <= navigator.userAgent.indexOf("Firefox")
        },
        checkAndroid: function () {
            return 0 <= navigator.userAgent.indexOf("Android")
        },
        checkiOS: function (e) {
            var t = navigator.userAgent,
                n = 0 <= t.indexOf("iPhone") || 0 <= t.indexOf("iPod");
            return 0 != e ? n || 0 <= t.indexOf("iPad") || 0 < t.indexOf("Mac OS") && void 0 !== document.ontouchstart : n
        },
        checkMobile: function () {
            var e = navigator.userAgent;
            return aidn.util.checkiOS() || 0 <= e.indexOf("Android") || 0 <= e.indexOf("BlackBerry") || 0 <= e.indexOf("Windows Phone")
        },
        checkApps: function () {
            return aidn.util.checkAppTwitter() || aidn.util.checkAppFacebook() || aidn.util.checkAppLine()
        },
        checkAppTwitter: function () {
            var e = navigator.userAgent;
            return !(!aidn.util.checkSafari() || !aidn.util.checkMobile()) || 0 <= e.indexOf("Twitter for")
        },
        checkAppFacebook: function () {
            return 0 <= navigator.userAgent.indexOf("FBAV")
        },
        checkAppLine: function () {
            return 0 <= navigator.userAgent.indexOf("Line")
        },
        shuffleArray: function (e) {
            for (var t = e.length,
                n = 0; n < t; n++) {
                var i = e[n],
                    a = Math.floor(Math.random() * t);
                e[n] = e[a],
                    e[a] = i
            }
            return e
        },
        getQuery: function () {
            for (var e = [], t = window.location.search.slice(1).split("&"), n = t.length, i = 0; i < n; i++) {
                var a = t[i].split("=");
                e.push(a[0]),
                    e[a[0]] = a[1]
            }
            return e
        },
        getTime: function () {
            return ("undefined" == typeof performance || void 0 === performance.now ? Date : performance).now()
        },
        fullscreen: function (e) {
            aidn.util.checkFullscreen() ? document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.cancelFullScreen ? document.cancelFullScreen() : document.exitFullscreen && document.exitFullscreen() : (e ? "string" == typeof e && (e = document.getElementById(e)) : e = document.body, e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.requestFullscreen && e.requestFullscreen())
        },
        checkFullscreen: function () {
            return !!(document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreenElement)
        },
        enabledFullscreen: function (e) {
            return (!e || !navigator.userAgent.match(/Firefox/i)) && (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) || !1
        },
        copyToClipboard: function (e) {
            var t = document.createElement("textarea");
            t.value = e,
                t.selectionStart = 0,
                t.selectionEnd = t.value.length;
            e = t.style;
            e.position = "fixed",
                e.left = "-100%",
                document.body.appendChild(t),
                t.focus();
            e = document.execCommand("copy");
            return t.blur(),
                document.body.removeChild(t),
                e
        },
        getCookie: function (e) {
            var t = null,
                n = e + "=",
                i = document.cookie,
                e = i.indexOf(n);
            return 0 <= e && (- 1 == (n = i.indexOf(";", e = e + n.length)) && (n = i.length), t = decodeURIComponent(i.substring(e, n))),
                t
        },
        setCookie: function (e, t, n, i) {
            t = e + "=" + encodeURIComponent(t) + ";";
            0 <= n && (t += " max-age=" + n + ";"),
                i && (t += " path=" + i + ";"),
                document.cookie = t
        },
        getStorage: function (e) {
            void 0 === e && (e = location.href.split("/")[3]);
            e = localStorage.getItem(e);
            try {
                e = JSON.parse(e)
            } catch (e) { }
            return e
        },
        setStorage: function (e, t) {
            void 0 === t && (t = location.href.split("/")[3]),
                "object" == typeof e && (e = JSON.stringify(e)),
                localStorage.setItem(t, e)
        },
        needExpandArea: function (e) {
            var t = navigator.userAgent,
                n = 0 <= t.indexOf("iPhone") || 0 <= t.indexOf("iPod");
            return (n = n && 0 <= t.indexOf("Version/") && Math.max(window.screen.width, window.screen.height) < 600) && 1 == e && (window.scrollTo(0, 0), $("body").css("padding-bottom", 1)),
                n
        },
        checkStandAlone: function () {
            return "standalone" in window.navigator && window.navigator.standalone
        },
        checkEnableDownload: function () {
            return !(aidn.util.checkiOS() && aidn.util.getiOSVersion() < 12)
        },
        initStandAlone: function () {
            aidn.util.checkStandAlone() && $("a").each(function (e, t) {
                var n = $(this),
                    i = n.attr("target"),
                    a = !0;
                i && 0 <= i.indexOf("blank") && (a = !1);
                var o = n.attr("href");
                a && o && "" != o && (n.click(function (e) {
                    location.href = o,
                        e.preventDefault()
                }), n.attr("href", ""))
            })
        },
        canvas: !!window.CanvasRenderingContext2D,
        webgl: function () {
            try {
                var e = document.createElement("canvas"),
                    t = e.getContext("webgl") || e.getContext("experimental-webgl");
                return !!(window.WebGLRenderingContext && t && t.getShaderPrecisionFormat)
            } catch (e) {
                return !1
            }
        }(),
        webaudio: function () {
            for (var e = ["SO-03F", "SO-02F", "SO-01F"], t = e.length, n = navigator.userAgent, i = 0; i < t; i++) if (0 <= n.indexOf(e[i])) return !1;
            return !(!window.AudioContext && !window.webkitAudioContext)
        }()
    },
    aidn.adv = {
        show: function (e, t) {
            var n, i, a, o;
            aidn.adv._useAdv() && 1 != aidn.adv._e && (aidn.adv._e ? aidn.adv._e.show() : (n = void 0 === t, 0 <= e || (e = 0, window.innerHeight <= 570 && (e = 1)), o = "", i = "width: 320px;" + (o = aidn.util.getQuery().lc ? " background:rgba(64, 64, 64, 0.6);" : o), o = a = "", o += '<div style="' + (a = n ? "position: absolute; bottom: 0; z-index: 100000; left: 50%; transform: translateX(-50%); " : a) + 'width: 320px;"><div id="close_adv" style="text-align: right; cursor:pointer;">', o += '<svg style="vertical-align:bottom; background:rgba(255, 255, 255, 0.6);" width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>', o += "</div>", o += '<div style="' + (i += 0 === e ? " height: 100px;" : " height:  50px;") + '">', o += '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script>', o += 0 === e ? '<ins class="adsbygoogle" style="display:inline-block;width:320px;height:100px" data-ad-client="ca-pub-2758302531676411" data-ad-slot="8440261214"></ins>' : '<ins class="adsbygoogle" style="display:inline-block;width:320px;height:50px" data-ad-client="ca-pub-2758302531676411" data-ad-slot="1050207427"></ins>', o += "<script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>", o += "</div>", o += "</div>", (aidn.adv._e = $(o)).children("#close_adv").on("click", aidn.adv.close), (n ? $("body") : t).append(aidn.adv._e)))
        },
        hide: function () {
            aidn.adv._e && 1 != aidn.adv._e && aidn.adv._e.hide()
        },
        close: function () {
            aidn.adv.hide(),
                aidn.adv._e = 1
        },
        showLink: function (e, t) {
            var n, i;
            aidn.adv._useAdv() && 1 != aidn.adv._el && (aidn.adv._el ? aidn.adv._el.show() : (i = "", i += '<div style="width:200px;"><div id="close_adv_link" style="text-align: right; cursor:pointer;">', i += '<svg style="vertical-align:bottom;" width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>', i += "</div>", n = "", i += '<div style="width:200px; height:90px;' + (n = aidn.util.getQuery().lc ? " background:rgba(0, 0, 0, 0.05);" : n) + '">', i += '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script>', i += '<ins class="adsbygoogle" style="display:inline-block;width:200px;height:90px" data-ad-client="ca-pub-2758302531676411" data-ad-slot="3037968718"></ins>', i += "<script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>", i += "</div>", i += "</div>", (i = aidn.adv._el = $(i)).children("#close_adv_link").on("click", aidn.adv.closeLink), 0 != t ? 1 != t ? 2 != t ? e.append(i) : e.prepend(i) : e.after(i) : e.before(i)))
        },
        hideLink: function () {
            aidn.adv._el && 1 != aidn.adv._el && aidn.adv._el.hide()
        },
        closeLink: function () {
            aidn.adv.hideLink(),
                aidn.adv._el = 1
        },
        _useAdv: function () {
            return !1
        },
        _e: null,
        _el: null
    },
    aidn.window = {
        useDummyDiv: aidn.util.useDummyDiv,
        addDummyDiv: function () {
            var e;
            aidn.window.useDummyDiv() && ((e = $("<div id='dummy'></div>")).css({
                width: "100%",
                height: "100%",
                position: "fixed",
                zIndex: -1
            }), e.html('<p style="width:100%;height:100%;"></p>'), $("body").prepend(e), aidn.window._dummy = $("#dummy p"))
        },
        resize: function (e, t) {
            void 0 === (aidn.window._isFit = t) && (aidn.window._isFit = !0),
                aidn.window._resizeFunc = e,
                $(window).resize(aidn.window._resize),
                aidn.window._isFit && aidn.window.scrollOff(),
                aidn.window._isTwitteriOS && aidn.window._resizeFix(),
                aidn.window._resize()
        },
        width: function () {
            return $(window).width()
        },
        height: function () {
            return aidn.window._isTwitteriOS ? window.innerHeight : (aidn.window._dummy || $(window)).height()
        },
        scrollOff: function () {
            window.addEventListener("touchmove", aidn.window.__scroll, {
                passive: !1
            })
        },
        scrollOn: function () {
            window.removeEventListener("touchmove", aidn.window.__scroll, {
                passive: !1
            })
        },
        __scroll: function (e) {
            e.preventDefault()
        },
        _resize: function () {
            aidn.window._isTwitteriOS && aidn.window._isFit && $("body").height(window.innerHeight + 20),
                aidn.window._isTwitteriOS ? setTimeout(aidn.window._resizeFix, 100) : aidn.window._resizeFix()
        },
        _resizeFix: function () {
            aidn.window._isTwitteriOS && aidn.window._isFit && $("body").height(window.innerHeight),
                aidn.window._resizeFunc && aidn.window._resizeFunc()
        },
        _isFit: !0,
        _isTwitteriOS: aidn.util.checkAppTwitter(),
        _dummy: null,
        _resizeFunc: null
    },
    aidn.math = {
        toRad: function (e) {
            return e * Math.PI / 180
        },
        toDeg: function (e) {
            return 180 * e / Math.PI
        },
        rand: function (e, t) {
            return Math.random() * (t - e) + e
        },
        randInt: function (e, t) {
            return Math.floor(Math.random() * (t + 1 - e) + e)
        }
    },
    aidn.social = {
        init: function () {
            this.initTw(),
                this.initFb(),
                this.initGp()
        },
        initTw: function () {
            var e, t, n, i;
            location.href.indexOf("http") < 0 || (e = document, t = "twitter-wjs", n = e.getElementsByTagName("script")[0], i = /^http:/.test(e.location) ? "http" : "https", e.getElementById(t) || ((e = e.createElement("script")).id = t, e.src = i + "://platform.twitter.com/widgets.js", n.parentNode.insertBefore(e, n)))
        },
        initFb: function () {
            var e, t, n;
            location.href.indexOf("http") < 0 || (e = document, t = "facebook-jssdk", n = e.getElementsByTagName("script")[0], e.getElementById(t) || ((e = e.createElement("script")).id = t, e.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0", n.parentNode.insertBefore(e, n)))
        },
        initGp: function () {
            var e;
            location.href.indexOf("http") < 0 || ("en" != (e = aidn.util.getLanguage()) && (window.___gcfg = {
                lang: e
            }),
                function () {
                    var e = document.createElement("script");
                    e.type = "text/javascript",
                        e.async = !0,
                        e.src = "https://apis.google.com/js/plusone.js";
                    var t = document.getElementsByTagName("script")[0];
                    t.parentNode.insertBefore(e, t)
                }())
        },
        reloadTw: function (e, t, n, i) {
            0 <= i.indexOf("http://aidn.jp") && (i = i.replace("http", "https")),
                0 < $("#twitter iframe").length && $("#twitter iframe").remove(),
                0 < $("#twitter-wjs").length && $("#twitter-wjs").remove();
            var a = '<a href="https://twitter.com/share" class="twitter-share-button"';
            e && (a += ' data-text="' + e + '"'),
                t && (a += 'data-related="' + t + '"'),
                n && (a += 'data-count="' + n + '"'),
                i && (a += 'data-url="' + i + '"'),
                a += ' data-lang="en">Tweet</a>',
                $("#twitter").append(a),
                this.initTw()
        },
        shareTw: function (e, t, n, i, a) {
            var o = "https://twitter.com/intent/tweet",
                r = {};
            e && (r.url = encodeURIComponent(e)),
                n && (r.text = encodeURIComponent(n)),
                i && (r.related = i),
                a && (r.hashtags = encodeURIComponent(a));
            var d, s = 0;
            for (d in r) o += 0 == s ? "?" + d + "=" + r[d] : "&" + d + "=" + r[d],
                s++;
            t && !aidn.util.checkMobile() ? window.open(o, "_blank") : location.href = o
        },
        shareFb: function (e, t) {
            e = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(e);
            t ? window.open(e, "_blank") : location.href = e
        },
        shareGp: function (e, t) {
            e = "https://plus.google.com/share?url=" + encodeURIComponent(e);
            t ? window.open(e, "_blank") : location.href = e
        },
        shareHatena: function (e, t) {
            e = "http://b.hatena.ne.jp/entry/" + encodeURIComponent(e);
            t ? window.open(e, "_blank") : location.href = e
        },
        shareLi: function (e, t) {
            e = "http://line.me/R/msg/text/?" + encodeURIComponent(t) + " " + encodeURIComponent(e);
            location.href = e
        },
        setShareInfo: function (e, t) {
            $("title").text(e),
                $("h1").text(e),
                $("#twitter a").attr("data-text", e),
                $("#twitter a").attr("data-url", t),
                $($("#facebook").children()).attr("href", t),
                $($("#plusone").children()).attr("href", t)
        }
    };
var _isJapanese = aidn.util.checkJapanese(),
    _active = !1;
function __googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: "ja",
        includedLanguages: "de,en,es,fr,it,ja,ko,pt,ru,zh-CN,zh-TW",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: !1
    },
        "google_translate_element")
}
function __addRelease(e, t, n, i, a, o, r, d) {
    if ("string" != typeof (d = void 0 === d ? null : d) || "1" != aidn.util.getCookie(d = "_release" + d)) {
        "string" != typeof a && (a = "New Release"),
            "string" != typeof o && (o = "New Release"),
            _isJapanese || (a = o);
        for (var s = "Noto+Sans+JP:wght@500",
            l = !1,
            c = "Poppins:wght@500",
            u = !1,
            h = $("link"), f = 0, g = h.length; f < g; f++) {
            var p = h[f].getAttribute("href");
            p && (0 < p.indexOf(s) && (l = !0), 0 < p.indexOf(c) && (u = !0))
        }
        l && u || (v = '<link href="https://fonts.googleapis.com/css2?family=', l || (v += s), l || u || (v += "&family="), u || (v += c), v += '&display=swap" rel="stylesheet">', $("head").append(v)),
            _isJapanese || (n = i);
        var m = Date.now() + Math.floor(1e5 * Math.random()),
            v = "calc(0.7rem + 0.7vh)";
        24 <= n.length && (v = "calc(0.6rem + 0.6vh)");
        i = "bottom",
            i = "white-space: nowrap; position: fixed; " + (i = 1 == r ? "top" : i) + ": -2px; z-index: 100000; left: 50%; transform: translateX(-50%); width:100%; max-width: 480px; color: #000; background:rgba(247, 247, 247, 0.95); text-align:left; cursor:pointer; letter-spacing: .4rem; line-height: 1; border: solid 1px #000000;",
            i = '<div id="rel_open' + m + '" style="' + (i += "font-family:Poppins,'Noto Sans JP','游ゴシック','Yu Gothic','游ゴシック体',YuGothic,'Yu Gothic UI','ヒラギノ角ゴ Pro W3','Hiragino Kaku Gothic Pro','Meiryo UI','メイリオ',Meiryo,sans-serif;") + '">';
        i += '<img src="' + e + '" style="width:calc(50px + 3vh); height:calc(50px + 3vh); margin: calc(5px + 1vh); vertical-align:middle; border:1px solid #333;">',
            i += '<p style="display:inline-block; vertical-align:middle; letter-spacing:0.11rem; line-height:1.5; font-weight:500;">',
            i += '<span style="font-size:calc(0.5rem + 0.6vh); color: #f40;" class="blink">' + a + "</span><br>",
            i += '<span style="font-size:' + v + ';">' + n + "</span>",
            i += "</p>",
            i += '<p id="rel_close' + m + '" style="position:absolute; right:1vh; top:1vh;">',
            i += '<svg style="width: calc(24px + 2vmin);" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>',
            i += "</p>",
            i += "</div>",
            $("body").append(i),
            i = "<style>\n.blink{\n",
            i += "-webkit-animation: animFade 0.5s ease-in infinite alternate;\n",
            i += "animation: animFade 0.5s ease-in infinite alternate;\n",
            i += "}\n",
            i += "@-webkit-keyframes animFade {\n 20% { opacity: 1; }\n 100% { opacity: 0.2; } \n}\n",
            i += "@keyframes animFade {\n 20% { opacity: 1; }\n 100% { opacity: 0.2; } \n}\n",
            i += "</style>",
            $("head").append(i),
            $("#rel_open" + m).on("click",
                function (e) {
                    e.preventDefault(),
                        location.href = t
                }),
            $("#rel_close" + m).on("click",
                function (e) {
                    e.preventDefault(),
                        e.stopPropagation(),
                        $("#rel_open" + m).hide(),
                        d && aidn.util.setCookie(d, "1", 86400, "/")
                })
    }
}
function __checkInit() {
    var e;
    "undefined" == typeof jQuery ? setTimeout(__checkInit, 10) : ((e = window.__s) && "string" == typeof e && ($.ajax({
        url: e,
        cache: !0,
        dataType: "script"
    }), delete window.__s), $(function () {
        $("meta[name='theme-color']").length <= 0 && $("meta:last").after('<meta name="theme-color" content="#000000">'),
            aidn.util.initStandAlone();
        var e = aidn.util.getiOSVersion();
        8 <= e && e < 14 && aidn.util.checkStandAlone() && (b = "_start_url", localStorage.getItem(b) || localStorage.setItem(b, location.href), document.addEventListener("visibilitychange",
            function (e) {
                "visible" == document.visibilityState && location.href != localStorage.getItem(b) && (location.href = localStorage.getItem(b))
            }));
        for (var t = document.querySelectorAll(".lazy_css"), n = 0, o = t.length; n < o; n++) t[n].rel = "stylesheet";
        var i, a = navigator.userAgent;
        function r() {
            $("svg").each(function () {
                var e = $(this);
                if ("none" == e.css("display")) return !0;
                var t = e.width(),
                    n = e.context.viewBox.baseVal,
                    i = n.width,
                    n = n.height;
                e.height(n * t / i)
            })
        }
        if ((0 < a.indexOf("MSIE") || 0 < a.indexOf("rv:11.0")) && 0 < $("svg").length && (i = -1, $(window).resize(function () {
            clearTimeout(i),
                i = setTimeout(r, 200)
        }), r(), setInterval(r, 1e3)), 12.2 <= e) {
            for (var d, s = ["/mikuboard", "/vtofu", "/omikuji", "/momoko_vr", "/catsphere", "/shake", "/m/nijimi"], l = location.href, c = !1, o = 0, n = 0; n < s.length; n++) 0 < l.indexOf(s[n]) && (c = !0, o = s[n].split("/").length - 2);
            1 != $("body").data("motion") || 2 <= (h = location.href.split("aidn")).length && (c = !0, o = h[1].split("/").length - 3),
                c && (d = setTimeout(function () {
                    var e = "";
                    e += '<div style="width:100%; height:100%; background:rgba(255, 255, 255, 0.94); position:fixed; z-index:1000000; top: 0; left: 0; display: none;">';
                    var t = "",
                        n = "../shared/img/dialog_sensor" + (t = 13 <= aidn.util.getiOSVersion() ? "_13" : t) + ".png";
                    _isJapanese || (n = "../shared/img/dialog_sensor_en" + t + ".png");
                    for (var i = 0; i < o; i++) n = "../" + n;
                    e += '<img src="' + n + '" style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:100%; height:100%; max-width:640px; object-fit: contain;">',
                        e += "</div>";
                    var a = $(e);
                    a.fadeIn("normal"),
                        a.on("click",
                            function () {
                                13 <= aidn.util.getiOSVersion() && DeviceMotionEvent.requestPermission(),
                                    a.fadeOut("normal")
                            }),
                        $("body").append(a)
                },
                    500), window.addEventListener("deviceorientation",
                        function e(t) {
                            clearTimeout(d),
                                window.removeEventListener("deviceorientation", e)
                        }))
        }
        function u() {
            try {
                for (var e in document.styleSheets) {
                    try {
                        var t = document.styleSheets[e],
                            n = t.cssRules;
                        if (!n) continue
                    } catch (e) {
                        continue
                    }
                    for (var i = n.length - 1; 0 <= i; i--) {
                        var a = n[i].selectorText;
                        if (a && a.match(":hover")) {
                            for (var o = a.split(","), r = [], d = 0; d < o.length; d++) o[d].match(":hover") || r.push(o[d]);
                            0 < r.length ? n[i].selectorText = r.join(",") : t.deleteRule(i)
                        }
                    }
                }
            } catch (e) { }
        }
        _isJapanese || null != document.getElementById("google_translate_element") && $.getScript("//translate.google.com/translate_a/element.js?cb=__googleTranslateElementInit",
            function () {
                var e = $(".aidnsub").length,
                    t = $("#lyrics_base").length,
                    n = aidn.util.getQuery();
                setInterval(function () {
                    $(".goog-te-banner-frame").length && ("none" == $(".skiptranslate").css("display") ? (e && ("block" == $("#bt_menu").css("display") ? $("#menu, #bt_menu") : $("#menu")).css("top", 0), t && ($("#lyrics_base").css({
                        top: 0,
                        height: "100%"
                    }), $("#bt_close").css("top", 0))) : (e && ("block" == $("#bt_menu").css("display") ? $("#menu, #bt_menu") : $("#menu")).css("top", 39), t && ($("#lyrics_base").css({
                        top: 39,
                        height: "calc(100% - 39px)"
                    }), $("#bt_close").css("top", 39)), 0 != n.tw && $("#goog-gt-tt").css({
                        display: "none",
                        opacity: 0
                    })))
                },
                    100),
                    setInterval(function () {
                        $(".goog-te-menu-frame").length && ($("iframe.goog-te-menu-frame").css({
                            "box-shadow": "none",
                            "-webkit-box-shadow": "none"
                        }), $("iframe.goog-te-menu-frame").contents().find(".goog-te-menu2 div").css({
                            "letter-spacing": "0.13rem",
                            padding: "6px 8px"
                        }))
                    },
                        500);
                var i = "none" != $("#google_translate_element").attr("data-bar"),
                    a = "<style>";
                a += ".goog-te-gadget { margin-top:10px; margin-bottom:10px; }",
                    a += ".goog-te-gadget a:link, .goog-te-gadget a:visited { text-decoration:none; }",
                    a += "div.skiptranslate { opacity: 0; }",
                    a += "#google_translate_element div.skiptranslate { opacity: 1; letter-spacing:0.12rem; } ",
                    a += "#google_translate_element .goog-te-gadget-simple { padding: 6px; } ",
                    i || (a += ".goog-te-banner-frame { display: none; } ", $("body").css({
                        top: 0
                    })),
                    a += "</style>",
                    $("head").append(a);
                var o = setInterval(function () {
                    $(".goog-te-banner-frame").length && "none" != $(".skiptranslate").css("display") && ($(".goog-te-banner-frame").css({
                        "box-shadow": "none",
                        "-webkit-box-shadow": "none",
                        "border-bottom": "1px solid #000000"
                    }), $("iframe:first").contents().find(".goog-te-banner").css("background", "#FFF"), $("iframe:first").contents().find(".goog-te-button").css("display", "none"), $("div.skiptranslate").css("opacity", 1), i || $("body").css({
                        top: 0
                    }), clearInterval(o))
                },
                    50)
            }),
            aidn.util.checkMobile() && ($("a[href='http://twitter.com/daniwell_aidn']").attr("target", "_self"), $("a[href='https://twitter.com/daniwell_aidn']").attr("target", "_self"), u(), setTimeout(u, 500));
        for (var h, f = !1,
            g = "New Release (^._.^)/",
            p = "New Release (^._.^)/",
            m = "nyancat10th/",
            v = "daniwell/shared/img/jacket/nyancat_arrangements.png",
            w = "Nyan Cat Arrangements",
            y = "Nyan Cat Arrangements",
            s = [{
                path: "/shake/"
            },
            {
                path: "/swipe/"
            },
            {
                path: "/nyancat/"
            },
            {
                path: "/momotap"
            },
            {
                path: "/mikutap"
            },
            {
                path: "/mikuwarp"
            },
            {
                path: "/rinlenwarp"
            },
            {
                path: "/tetomomowarp"
            },
            {
                path: "/omikuji"
            },
            {
                path: "/mmd"
            },
            {
                path: "/ahoge"
            },
            {
                path: "/iaigiri"
            },
            {
                path: "/snr/",
                topFlag: !0
            },
            {
                path: "/mikuboard",
                topFlag: !0
            },
            {
                path: "/aiyueni_glitch",
                desc: "Now On Sale!",
                link: "daniwell/#x_uz",
                imgPath: "daniwell/shared/img/jacket/uz.png",
                title: "うちゅうぜんぶ",
                titleEn: "UCHU ZENBU",
                key: "_uz"
            },
            {
                path: "/flag",
                desc: "Now On Sale!",
                link: "daniwell/#x_mklypn",
                imgPath: "daniwell/shared/img/jacket/mklypn.png",
                title: "MKLYPN",
                key: "_mklypn",
                topFlag: !0
            },
            {
                path: "/twintail",
                desc: "Now On Sale!",
                link: "daniwell/#x_mklypn",
                imgPath: "daniwell/shared/img/jacket/mklypn.png",
                title: "MKLYPN",
                key: "_mklypn",
                topFlag: !0
            },
            {
                path: "/wow",
                desc: "Now On Sale!",
                link: "daniwell/#x_wow",
                imgPath: "daniwell/shared/img/jacket/wow.png",
                title: "Wonder of Wonder",
                key: "_wow"
            }], l = location.href, c = !1, b = "", n = 0; n < s.length; n++) {
            var _ = s[n];
            if (0 < l.indexOf(_.path)) {
                c = !0,
                    b = "_sub",
                    _.key && (b = _.key),
                    _.desc && (g = _.desc, p = _.desc),
                    _.descEn && (p = _.descEn),
                    _.link && (m = _.link),
                    _.imgPath && (v = _.imgPath),
                    _.title && (w = _.title, y = _.title),
                    _.titleEn && (y = _.titleEn),
                    "boolean" == typeof _.topFlag && (f = _.topFlag);
                break
            }
        }
        if (0 < $("#aidnx").length || c) {
            for (var x = (l = (0 <= (l = location.href.split("#")[0].split("?")[0]).indexOf("aidn.jp/") ? l.split("aidn.jp/") : l.split("aidn/"))[1]).split("/").length, k = "", n = 0; n < x - 1; n++) k += "../";
            __addRelease(v = v.indexOf("http") < 0 ? k + v : v, m = m.indexOf("http") < 0 ? k + m : m, w, y, g, p, f, b)
        }
        0 < $("#aidn").length && (_active = !1),
            0 < $("#aidnx").length && (_active = !1, $("#bt_menu").on("click",
                function () {
                    $("#menu").stop().slideToggle(150)
                })),
            _active || (e = aidn.constant.advUrlEn, h = "", h += '<a href="' + (e = aidn.util.checkJapanese() ? aidn.constant.advUrlJa : e) + '" target="_blank"><div class="adv_con">', h += '<p class="text">' + aidn.constant.advTex + "</p>", h += '<p class="image"><img src="' + aidn.constant.advImg + '" alt="' + aidn.constant.advAlt + '" /></p>', h += "</div></a>", 0 < $(".adv").length || 0 < (e = $("#common_back")).length && (h = '<div class="adv"><div class="hr_top"></div>' + h + "</div>", $("body").css("overflow", "auto"), e.after(h)))
    }))
} (_active = "undefined" == typeof swfobject || swfobject.hasFlashPlayerVersion("9") && !aidn.util.checkMobile()) || (swffit.fit = function () { }),
    __checkInit(),
    aidn.extra = {
        Button: function (e, t) {
            var n = e,
                i = e,
                a = (i = t ? t : i).text(),
                o = a.length,
                r = -1,
                d = !1,
                s = 0,
                l = 0;
            function c() {
                d || (++s % 5 == 0 && l++, o <= l && (clearInterval(r), i.text(a)));
                for (var e = a.substr(0, l), t = l; t < o; t++) e += String.fromCharCode(65 + 26 * Math.random());
                i.text(e)
            }
            n.bind("mouseover",
                function (e) {
                    clearInterval(r),
                        s = l = 0,
                        r = setInterval(c, 20),
                        d = !0
                }),
                n.bind("mouseout",
                    function (e) {
                        d = !1
                    })
        },
        initSnsButtons: function (t, n) {
            0 <= t.indexOf("http://aidn.jp") && (t = t.replace("http", "https")),
                $("#sns_tw").click(function (e) {
                    aidn.social.shareTw(t, !0, n, "daniwell_aidn")
                }),
                $("#sns_fb").click(function (e) {
                    aidn.social.shareFb(t, !0)
                }),
                $("#sns_gp").click(function (e) {
                    aidn.social.shareGp(t, !0)
                })
        }
    },
    aidn.Audio = function () {
        aidn.audio.init();
        var o, r, d, a, s, t, l = this,
            c = new Audio,
            n = 1; (this._audio = c).addEventListener("playing",
                function () {
                    0 < o && (c.currentTime = o, o = -1)
                }),
                c.addEventListener("timeupdate",
                    function () {
                        r <= c.currentTime && c.pause();
                        0 < c.currentTime && s && (s(), s = null)
                    }),
                c.addEventListener("ended",
                    function () {
                        t && t();
                        d && (c.currentTime = 0, c.play(), c.playbackRate = n)
                    }),
                c.addEventListener("canplaythrough",
                    function () {
                        0 < o && (c.currentTime = o, o = -1);
                        a && (a(), a = null)
                    }),
                this.load = function (e, t, n, i) {
                    isNaN(n) || (n = null),
                        i && (n = i);
                    e = aidn.audio.getPath(e = "string" == typeof e ? [e] : e);
                    if (!e) return !1;
                    a = t,
                        c.src = e,
                        c.onprogress = function () {
                            try {
                                n && n(c.buffered.end(0) / c.duration)
                            } catch (e) { }
                        },
                        c.load()
                },
                this.play = function (t, e, n, i, a) {
                    void 0 === t && (t = 0),
                        void 0 === i && (i = 0),
                        void 0 === a && (a = 1),
                        s = n,
                        d = e = void 0 === e ? !1 : e,
                        r = 1e6;
                    try {
                        c.currentTime = t
                    } catch (e) {
                        aidn.log(e),
                            o = t
                    }
                    c.play(),
                        0 < i && "undefined" != typeof jQuery ? (l.volume = 0, $(l).stop().animate({
                            volume: a
                        },
                            1e3 * i, "easeInSine")) : l.volume = a
                },
                this.pause = function () {
                    c.pause()
                },
                this.playSprite = function (e, t) {
                    c.currentTime = e,
                        c.play(),
                        r = t
                },
                this.addEndEvent = function (e) {
                    t = e
                },
                Object.defineProperty(this, "speed", {
                    get: function () {
                        return n
                    },
                    set: function (e) {
                        c.playbackRate = n = e
                    }
                }),
                Object.defineProperty(this, "loop", {
                    get: function () {
                        return d
                    },
                    set: function (e) {
                        d = e
                    }
                }),
                Object.defineProperty(this, "time", {
                    get: function () {
                        return c.currentTime
                    },
                    set: function (e) {
                        c.currentTime = e
                    }
                }),
                Object.defineProperty(this, "volume", {
                    get: function () {
                        return c.volume
                    },
                    set: function (e) {
                        c.volume = e
                    }
                }),
                Object.defineProperty(this, "duration", {
                    get: function () {
                        return c.duration
                    }
                })
    },
    aidn.WebAudio = function () {
        aidn.audio.init();
        var h, u, f, g, p, m, v, w, y, b, _, t, x = this,
            k = [],
            E = [],
            O = 0,
            S = 100,
            A = -1,
            F = !1,
            n = 1,
            T = 1;
        if (void 0 !== aidn.___waContext) this._context = I = aidn.___waContext;
        else {
            try {
                var I = new (window.AudioContext || window.webkitAudioContext)
            } catch (e) { }
            this._context = I,
                aidn.___waContext = I
        }
        function L() {
            u.onended = null,
                t && t()
        }
        this.load = function (e, u, t, n) {
            var i = F = !1;
            if (0 <= t && (A = t), "string" == typeof e) if (0 < e.indexOf("base64")) for (var i = !0,
                a = atob(e.split(",")[1]), o = a.length, r = new Uint8Array(o), d = 0; d < o; ++d) r[d] = a.charCodeAt(d);
            else e = [e];
            if (0 < e[0].indexOf("blank.mp3") && (t = new Audio(e[0]), document.body.appendChild(t)), !I) return !1;
            I.createBufferSource().start(0),
                h = null;
            var s, e = aidn.audio.getPath(e);
            return !(!e && !i) && (i ? l() : ((s = new XMLHttpRequest).open("GET", e, !0), s.responseType = "arraybuffer", s.onload = l, s.onprogress = function (e) {
                n && n(e.loaded / e.total)
            },
                s.send()), !0);
            function l() {
                var e = i ? r.buffer : s.response;
                I.decodeAudioData(e,
                    function (e) {
                        if (0 <= A) {
                            for (var t = A,
                                n = Number.MAX_VALUE,
                                i = e.numberOfChannels,
                                a = 0; a < i; a++) {
                                for (var o = e.getChannelData(a), r = o.length, d = 0; d < r && !(t < Math.abs(o[d])); d++);
                                d < n && (n = d)
                            }
                            for (var r = e.length - n,
                                s = I.createBuffer(i, r, I.sampleRate), a = 0; a < i; a++) for (var l = e.getChannelData(a), c = s.getChannelData(a), d = 0; d < r; d++) c[d] = l[d + n];
                            e = s
                        }
                        S = (h = e).duration,
                            u && u(h),
                            F && (F = !1, x.play(m, v, w, y, b, _))
                    },
                    function () { })
            }
        },
            this.play = function (e, t, n, i, a, o) {
                if (m = e, v = t, w = n, y = i, b = a, _ = o, !h) return F = !0,
                    void console.log('call "load" method before "play"');
                void 0 === e && (e = 0),
                    void 0 === t && (t = !1),
                    void 0 === i && (i = 0),
                    void 0 === a ? a = T : T = a,
                    void 0 === o && (o = 0),
                    (u = I.createBufferSource()).buffer = h,
                    u.loop = t,
                    u.onended = L,
                    g = g || I.createGain();
                var r, d = [u, g];
                f && d.push(f),
                    p && d.push(p);
                for (var s = 1; s < d.length; s++) l = d[s - 1],
                    r = d[s],
                    l.connect(r);
                for (var l = r,
                    s = 0; s < k.length; s++) E[s] ? (l.connect(k[s]), l = k[s]) : (r.connect(k[s]), r = k[s]);
                for (var c, s = k.length - 1; 0 <= s; s--) if (!E[s]) {
                    r.connect(I.destination);
                    break
                }
                s < 0 && r.connect(I.destination),
                    u.start ? u.start(I.currentTime + o, e) : u.noteOn(e),
                    O = I.currentTime - e,
                    this._source = u,
                    this.nodeGain = g,
                    0 < i && "undefined" != typeof jQuery ? (x.volume = 0, $(x).stop().animate({
                        volume: a
                    },
                        1e3 * i, "easeInSine")) : x.volume = a,
                    n && (c = setInterval(function () {
                        0 < x.time && (clearInterval(c), n())
                    },
                        10))
            },
            this.stop = function () {
                if (F = !1, u) try {
                    u.stop ? u.stop(0) : u.noteOff()
                } catch (e) { }
            },
            this.initPanner = function (e) {
                return 0 < (e = void 0 === e || e <= 0 ? "equalpower" : e) && (e = "HRTF"),
                    (f = I.createPanner()).panningModel = e,
                    this.nodePanner = f
            },
            this.initBiquadFilter = function (e) {
                return void 0 === e && (e = 0),
                    (p = I.createBiquadFilter()).type = e,
                    p
            },
            this.addNode = function (e, t) {
                k.push(e),
                    E.push(t)
            },
            this.addEndEvent = function (e) {
                t = e
            },
            Object.defineProperty(this, "speed", {
                get: function () {
                    return u.playbackRate.value
                },
                set: function (e) {
                    try {
                        O = I.currentTime - this.time / e
                    } catch (e) { }
                    u.playbackRate.value = n = e
                }
            }),
            Object.defineProperty(this, "loop", {
                get: function () {
                    return u.loop
                },
                set: function (e) {
                    u.loop = e
                }
            }),
            Object.defineProperty(this, "time", {
                get: function () {
                    return (I.currentTime - O) * n % S
                },
                set: function (e) {
                    try {
                        u.stop(0)
                    } catch (e) { }
                    x.play(e, u.loop)
                }
            }),
            Object.defineProperty(this, "volume", {
                get: function () {
                    return T
                },
                set: function (e) {
                    T = e,
                        g && (g.gain.value = e)
                }
            }),
            Object.defineProperty(this, "duration", {
                get: function () {
                    return S
                }
            })
    },
    aidn.AutoAudio = function (e, t, n) {
        void 0 === e && (e = "../shared/swf/audio.swf"),
            aidn.audio.init();
        var i, a, o, r, d = 2;
        "undefined" != typeof swfobject && swfobject.hasFlashPlayerVersion(10) && null != e ? d = 0 : aidn.util.webaudio && (d = 1),
            ___flash_audioLoadComplete = function () {
                a()
            },
            ___flash_audioPlay = function () {
                o()
            },
            0 == (d = 0 <= n && n <= 2 ? n : d) ? ((n = document.createElement("div")).id = "flash_audio", document.body.appendChild(n), swfobject.embedSWF(e, "flash_audio", "20", "20", "10.2.0", "", {
                callback: t
            },
                {
                    menu: "false",
                    scale: "noScale",
                    wmode: "transparent",
                    allowScriptAccess: "always",
                    allowFullScreen: "true"
                },
                {
                    id: "flash_audio",
                    name: "flash_audio"
                }), r = setInterval(function () {
                    document.getElementById("flash_audio").loadFunc && (clearInterval(r), i = document.getElementById("flash_audio"), t(d))
                },
                    100)) : (i = new (1 == d ? aidn.WebAudio : aidn.Audio), this.audio = i, t && setTimeout(function () {
                        t(d)
                    },
                        10)),
            this.load = function () {
                if ("string" == typeof arguments[0] && (arguments[0] = [arguments[0]]), 0 == d) {
                    for (this.audio = i, t = 0; t < arguments[0].length; t++) if (0 <= arguments[0][t].indexOf(".swf")) {
                        arguments[0] = arguments[0][t];
                        break
                    }
                    arguments[1] && (a = arguments[1], arguments[1] = "___flash_audioLoadComplete")
                } else {
                    for (var e = [], t = 0; t < arguments[0].length; t++) arguments[0][t].indexOf(".swf") < 0 && e.push(arguments[0][t]);
                    arguments[0] = e
                } (i.loadFunc || i.load).apply(i, arguments)
            },
            this.play = function () {
                0 == d && arguments[2] && (o = arguments[2], arguments[2] = "___flash_audioPlay"),
                    (i.playFunc || i.play).apply(i, arguments)
            },
            this.stop = function () {
                (i.stopFunc || i.stop || i.pause).apply(i, arguments)
            },
            this.addEndEvent = function (e) {
                0 == d || i.addEndEvent(e)
            },
            Object.defineProperty(this, "speed", {
                get: function () {
                    return 0 == d ? -1 : i.speed
                },
                set: function (e) {
                    0 == d || (i.speed = e)
                }
            }),
            Object.defineProperty(this, "time", {
                get: function () {
                    return 0 == d ? i ? i.getTimeFunc() : -1 : i.time
                },
                set: function (e) {
                    0 == d || (i.time = e)
                }
            }),
            Object.defineProperty(this, "volume", {
                get: function () {
                    return 0 == d ? -1 : i.volume
                },
                set: function (e) {
                    0 == d || (i.volume = e)
                }
            }),
            Object.defineProperty(this, "duration", {
                get: function () {
                    return 0 == d ? -1 : i.duration
                }
            }),
            this.type = d
    },
    window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function (e) {
        window.setTimeout(e, 1e3 / 60)
    };