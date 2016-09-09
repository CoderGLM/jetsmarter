!
function() {
    "use strict";
    angular.module("jetsmarter", ["ngAnimate", "ngTouch", "ngSanitize", "ngMessages", "ngAria", "ngResource", "ui.router", "ngMaterial", "toastr"])
} (),
function() {
    "use strict";
    function e(e) {
        return function(t, s) {
            function a(e) {
                function t() {
                    l[0].paused ? l[0].play() : l[0].pause()
                }
                function a() {
                    s.removeClass("playing paused")
                }
                function p() {
                    var e = (100 / l[0].duration * l[0].currentTime).toFixed(4);
                    c.style.width = e + "%";
                    var t = window.getDuration(1e3 * l[0].currentTime);
                    d.children[0].innerHTML = t.minutes,
                    d.children[1].innerHTML = t.seconds < 10 ? "0" + t.seconds: t.seconds
                }
                r = JSON.parse(s.attr("vidsrc"));
                var v = e > .15 ? "hq": e > .1 ? "sq": "lq";
                i = $('<div class="player-wrappwer"><video>            <source src="' + r[v + "_mp4"] + '" type="video/mp4"/>            <source src="' + r[v + "_webm"] + '" type="video/webm"/>            <source src="' + r[v + "_ogg"] + '" type="video/ogg"/>          </video>          <button class="play"></button>          <div class="controls">            <div class="progress_wrapper">              <div class="progress_inner">                <div class="progress_complited"><div class="progress_point"></div></div>              </div>            </div>            <button class="togglePlay">' + u + '</button>            <div class="time-track">              <span class="time_current"><i></i>:<i></i></span>              &nbsp;/&nbsp;<span class="time_duration"><i></i>:<i></i></span>            </div>          </div><div>'),
                s.attr("postersrc") && i.css({
                    "background-image": "url(" + s.attr("postersrc") + ")"
                }),
                l = i.find("video"),
                l[0].controls = !1,
                $(s[0]).append(i),
                c = s[0].querySelector(".progress_complited"),
                o = s[0].querySelector(".play"),
                n = s[0].querySelector(".togglePlay"),
                m = $(s[0].querySelector(".progress_inner")),
                d = s[0].querySelector(".time_current"),
                g = s[0].querySelector(".time_duration"),
                o.addEventListener("click", t, !1),
                n.addEventListener("click", t, !1),
                l[0].addEventListener("canplay",
                function() {
                    var e = window.getDuration(1e3 * l[0].duration);
                    g.children[0].innerHTML = e.minutes,
                    g.children[1].innerHTML = e.seconds < 10 ? "0" + e.seconds: e.seconds
                }),
                l[0].addEventListener("click", t, !1),
                l[0].addEventListener("ended", a, !1),
                l[0].addEventListener("play",
                function() {
                    s.removeClass("paused").addClass("playing")
                },
                !1),
                l[0].addEventListener("pause",
                function() {
                    s.removeClass("playing").addClass("paused")
                },
                !1),
                l[0].addEventListener("timeupdate", p, !1),
                m.on("click",
                function(e) {
                    l[0].currentTime = (l[0].duration * (e.pageX - $(this).offset().left) / $(this).width()).toFixed(2)
                })
            }
            var i, l, o, n, r, c, m, d, g, u = '<svg version="1.1" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-992 738 62 62" enable-background="new -992 738 62 62" xml:space="preserve"><circle stroke-width="3" fill="none" stroke="#EFECE6" cx="-961" cy="769" r="30"/><path class="play-caret" fill="#EFECE6" stroke="none" stroke-linejoin="bevel" d="M-971,769v16l28-16l-28-16V769z"/><path class="pause-pipe" sketch:type="MSShapeGroup" stroke-width="6" fill="none" stroke="#EFECE6" stroke-linejoin="bevel" d="M-969,753v16v16"/><path class="pause-pipe" sketch:type="MSShapeGroup" stroke-width="6" fill="none" stroke="#EFECE6" stroke linejoin="bevel" d="M-953,753v16v16"/></svg>';
            e(function() {
                window.bandwidth().then(function(e) {
                    a(e)
                })
            },
            1e3)
        }
    }
    e.$inject = ["$timeout"],
    angular.module("jetsmarter").directive("videojs", e)
} (),
function() {
    "use strict";
    function e(e) {
        return {
            set: function(t) {
                e[0].title = t.title,
                e[0].getElementsByName("description")[0].setAttribute("content", t.description),
                e[0].getElementById("ogtitle").setAttribute("content", t.title),
                e[0].getElementById("ogdescription").setAttribute("content", t.description),
                e[0].getElementById("ogimage").setAttribute("content", t.image || location.protocol + "//" + location.host + "/fav/apple-touch-icon-180x180.png")
            }
        }
    }
    e.$inject = ["$document"],
    angular.module("jetsmarter").factory("Tags", e)
} (),
function() {
    "use strict";
    function e() {
        return {
            lang: "en"
        }
    }
    angular.module("jetsmarter").factory("Lang", e)
} (),
function() {
    "use strict";
    function e() {
        return {
            Android: function() {
                return /Android/i.test(navigator.userAgent)
            },
            BlackBerry: function() {
                return /BlackBerry/i.test(navigator.userAgent)
            },
            iOS: function() {
                return /iPhone|iPad|iPod/i.test(navigator.userAgent)
            },
            iphone: function() {
                return /iPhone/i.test(navigator.userAgent)
            },
            Windows: function() {
                return /IEMobile/i.test(navigator.userAgent)
            },
            any: function() {
                return this.Android() || this.BlackBerry() || this.iOS() || this.Windows()
            }
        }
    }
    angular.module("jetsmarter").factory("IsMobile", e)
} (),
function() {
    "use strict";
    function e(e, t) {
        function s() {
            var e = /localhost/i.test(location.host) ? {
                headers: {
                    "Accept-Language": "en-US,en;q=0.8",
                    Authorization: "Basic bGV0c25ldF9kZXZfYWRtaW46Um5XSkV2VnI="
                }
            }: {
                headers: {
                    "Accept-Language": "en-US,en;q=0.8"
                }
            };
            return e
        }
        return {
            get: function(a) {
                return e.get(t() + a, s())
            },
            post: function(a, i) {
                return e.post(t() + a, i, s())
            }
        }
    }
    e.$inject = ["$http", "Location"],
    angular.module("jetsmarter").factory("api", e)
} (),
function() {
    window.getDuration = function(e) {
        var t = {},
        s = [{
            label: "millis",
            mod: 1e3
        },
        {
            label: "seconds",
            mod: 60
        },
        {
            label: "minutes",
            mod: 60
        },
        {
            label: "hours",
            mod: 24
        },
        {
            label: "days",
            mod: 31
        }];
        return s.forEach(function(s) {
            e = (e - (t[s.label] = e % s.mod)) / s.mod
        }),
        t.toString = function() {
            return s.reverse().map(function(e) {
                return t[e.label] + " " + (1 == t[e.label] ? e.label.slice(0, -1) : e.label)
            }).join(", ")
        },
        t
    }
} (),
function() {
    "use strict";
    window.bandwidth = function() {
        function e() {
            var e = new Image;
            t = (new Date).getTime(),
            e.src = "deerjet/assets/images/" + o + "?" + t,
            e.onload = function() {
                s = (new Date).getTime(),
                a = (s - t) / 1e3,
                i = n / a / 1048576,
                l.resolve(i)
            }
        }
        var t, s, a, i, l = $.Deferred(),
        o = "testing-image.jpg",
        n = 10659;
        return e(),
        l.promise()
    }
} (),
function() {
    "use strict";
    function e(e) {
        var t = this;
        t.formData = {},
        t.getForm = function(s) {
            e.get("/api/v1/forms/" + s + "/").success(function(e) {
                t.fields = e.data.response.fields
            })
        },
        t.submit = function() {
            t.formData.Phone && (t.formData.Phone = "+" + t.formData.Phone.replace(/([ \t!@#$%^&*()._+:/\ ? \ = \\\ | \ < \ > \;\ - , -]) / g,
            "")),
            e.post("/api/v1/forms/partnership/", t.formData).success(function(e) {
                t.success = e.data.response
            })
        }
    }
    e.$inject = ["api"],
    angular.module("jetsmarter").controller("Dinform", e)
} (),
function() {
    "use strict";
    function e(e) {
        var t = this;
        t.ts = {},
        t.formData = {
            travel_style: []
        },
        t.exists = function(e, t) {
            return e.indexOf(t) > -1
        },
        t.toggle = function(e, t) {
            var s = e.indexOf(t);
            s > -1 ? e.splice(s, 1) : e.push(t)
        },
        t.submit = function() {
            t.formData.Phone = "+" + t.formData.Phone.replace(/([ \t!@#$%^&*()._+:/\ ? \ = \\\ | \ < \ > \;\ - , -]) / g,
            ""),
            e.post("/api/v1/forms/membership/", t.formData).success(function(e) {
                t.success = e.data.response
            })
        }
    }
    e.$inject = ["api"], angular.module("jetsmarter").controller("Membershipform", e)
} (),
function() {
    "use strict";
    function e() {
        return function(e, t, s) {
            function a(e) {
                var t = s.event || e,
                a = (t.wheelDelta || -t.detail) * i;
                a > 30 && (window.changeState( - 1), e.preventDefault())
            }
            var i = /Mozilla/i.test(window.navigator.userAgent) ? 10 : 1;
            t.bind("DOMMouseScroll mousewheel onmousewheel", a);
            var l, o;
            t.bind("touchstart",
            function(e) {
                l = e.touches[0].pageY,
                o = e.touches[0].pageX
            }),
            t.bind("touchmove",
            function(e) {
                Math.abs(l - e.changedTouches[0].pageY) > Math.abs(o - e.changedTouches[0].pageX) && e.preventDefault()
            }),
            t.bind("touchend",
            function(e) {
                l - e.changedTouches[0].pageY < -30 && Math.abs(l - e.changedTouches[0].pageY) > Math.abs(o - e.changedTouches[0].pageX) && (window.changeState( - 1), e.preventDefault())
            })
        }
    }
    angular.module("jetsmarter").directive("footerDir", e)
} (),
function() {
    "use strict";
    function e(e, t, s) {
        return function(t, a) {
            function i() {
                v = $('<div class="bloks-nav"></div>'),
                angular.forEach(p,
                function(e, t) {
                    var s = $('<div class="bloks-nav__item"></div>').on("click",
                    function() {
                        r(y, t)
                    });
                    v.append(s)
                }),
                u.append(v),
                h = $(".bloks-nav__item"),
                l(y)
            }
            function l(e) {
                h.removeClass("active"),
                $(h[e]).addClass("active"),
                g.attr("scroll-state", e)
            }
            function o(e) {
                var t = $(e);
                t.addClass(b),
                t.addClass("anim-in").removeClass("hidden"),
                s(function() {
                    t.addClass("anim-in-active")
                },
                50),
                s(function() {
                    t.removeClass("anim-in anim-in-active backward forward"),
                    b = ""
                },
                1e3 * parseFloat(t.css("transition-duration")))
            }
            function n(e) {
                var t = $(e);
                t.addClass("anim-out"),
                s(function() {
                    t.addClass("hidden").removeClass("anim-out")
                },
                1e3 * parseFloat(t.css("transition-duration")))
            }
            function r(e, t) {
                var a, i;
                w = !0,
                a = p[e],
                y = t,
                i = p[t],
                b = e > t ? "forward": "backward",
                n(a),
                o(i),
                l(y),
                s(function() {
                    w = !1
                },
                1500)
            }
            function c(e) {
                y + e <= p.length - 1 && y + e >= 0 && !w && !g.hasClass("footer-visible") ? r(y, y += e) : e > 0 && y + e > p.length - 1 && !w ? (w = !0, g.addClass("footer-visible"), s(function() {
                    w = !1
                },
                1e3)) : 0 > e && y + e <= p.length - 1 && !w && g.hasClass("footer-visible") && (w = !0, g.removeClass("footer-visible"), s(function() {
                    w = !1
                },
                1e3))
            }
            function m() {
                g = $("body"),
                u = $(".blocks"),
                s(function() {
                    p = $(".blocks .block"),
                    p.addClass("hidden"),
                    o(p[0]),
                    i()
                },
                300)
            }
            function d(t) {
                var s = e.event || t,
                a = (s.wheelDelta || -s.detail) * f;
                a > 30 ? c( - 1) : -30 > a ? c(1) : t.preventDefault()
            }
            var g, u, p, v, h, b, f, y = 0,
            w = !1;
            f = /Mozilla/i.test(window.navigator.userAgent) ? 10 : 1,
            window.changeState = c,
            window.blockschange = function(e) {
                y != e && r(y, e)
            },
            m(),
            a.bind("DOMMouseScroll mousewheel onmousewheel", d);
            var k, E;
            a.bind("touchstart",
            function(e) {
                k = e.touches[0].pageY,
                E = e.touches[0].pageX
            }),
            a.bind("touchmove",
            function(e) {
                Math.abs(k - e.changedTouches[0].pageY) > Math.abs(E - e.changedTouches[0].pageX) && e.preventDefault()
            }),
            a.bind("touchend",
            function(e) {
                k - e.changedTouches[0].pageY > 30 && Math.abs(k - e.changedTouches[0].pageY) > Math.abs(E - e.changedTouches[0].pageX) ? c(1) : k - e.changedTouches[0].pageY < -30 && Math.abs(k - e.changedTouches[0].pageY) > Math.abs(E - e.changedTouches[0].pageX) ? c( - 1) : e.preventDefault()
            })
        }
    }
    angular.module("jetsmarter").directive("scrollJack", e),
    e.$inject = ["$window", "$rootScope", "$timeout"]
} (),
function() {
    "use strict";
    function e(e) {
        return function(t, s, a) {
            e.any() ? $(s[0]).css({
                overflow: "auto",
                "-webkit-overflow-scrolling": "touch"
            }) : (s.bind("touchmove",
            function(e) {
                e.preventDefault()
            }), "false" == s.attr("scroll-x") ? window.Ps.initialize(s[0], {
                suppressScrollX: !0
            }) : window.Ps.initialize(s[0]))
        }
    }
    angular.module("jetsmarter").directive("perfectScroll", e),
    e.$inject = ["IsMobile"]
} (),
function() {
    "use strict";
    function e(e, t) {
        return function(s, a) {
            function i() {
                var e = r.width();
                e > 1280 ? (n > 4 && l.css({
                    top: o.children[n - 4].offsetTop + o.children[n - 4].offsetHeight + "px"
                }), l.css({
                    left: n % 4 * l.width()
                })) : e > 1024 ? (n > 2 && l.css({
                    top: o.children[n - 3].offsetTop + o.children[n - 3].offsetHeight + "px"
                }), l.css({
                    left: n % 3 * l.width()
                })) : e > 700 && (n > 1 && l.css({
                    top: o.children[n - 2].offsetTop + o.children[n - 2].offsetHeight + "px"
                }), l.css({
                    left: n % 2 * l.width()
                }))
            }
            var l = $(a[0]),
            o = l.parent()[0],
            n = l.index(),
            r = $(t);
            e(function() {
                i()
            },
            500),
            $(t).on("resize",
            function() {
                i()
            })
        }
    }
    e.$inject = ["$timeout", "$window"],
    angular.module("jetsmarter").directive("masonry", e)
} (),
function() {
    "use strict";
    function e(e, t) {
        var s = this;
        s.data = {
            favorite_route: [{
                label: "Dallas / Houston",
                value: "Dallas / Houston"
            },
            {
                label: "Las Vegas / Los Angeles",
                value: "Las Vegas / Los Angeles"
            },
            {
                label: "Los Angeles / San Francisco",
                value: "Los Angeles / San Francisco"
            },
            {
                label: "New York City / South Florida",
                value: "New York City / South Florida"
            }],
            airlines: ["Alaska Airlines Mileage Plan", "American Airlines AAdvantage", "Delta SkyMiles", "Southwest Rapid Rewards", "JetBlue TrueBlue", "United MileagePlus", "Virgin America Elevate"],
            airline_miles_program: ["Level 1 20-25k miles", "Level 2 40-50k miles", "Level 3 75k miles", "Level 4 100k+ miles", "INVITE ONLY Concierge Key Global Services Delta 360"]
        },
        s.formData = {}
    }
    e.$inject = ["$scope", "api"],
    angular.module("jetsmarter").controller("SurveyController", e)
} (),
function() {
    "use strict";
    function e(e) {
        var t = this,
        s = {
            jetdeals: {
                bg: "deerjet/assets/images/jetdeals.jpg",
                desktopbg: "deerjet/assets/images/desktop-jetdeals.jpg",
                icon: "deerjet/assets/images/svg/deals.svg",
                headline: "JET DEALS™ <br>&nbsp;",
                subheading: "AFFORD MEMBERS<br>SKY-HIGH SAVINGS",
                article: '<p>Members book free seats on spontaneous private jet flights.</p><p>JetDeals are offered to members in bundles of 2&#8211;5 free seats per flight, depending on the route and aircraft type. Members are welcome to bring their family and friends who may not be members free of charge.</p><p><span class="medium">OVER 100,000 FREE SEATS</span> offered annually to JetSmarter Members.</p><p>If a member would like extra seats above the allotted free seats, they simply pay a nominal fee per extra seat.</p>',
                imageSlides: [{
                    src: "deerjet/assets/images/app-0001.png",
                    caption: '<span class="medium">01.</span> Choose Frequent Locations'
                },
                {
                    src: "deerjet/assets/images/app-0002.png",
                    caption: '<span class="medium">02.</span> Select your JET DEALS™'
                },
                {
                    src: "deerjet/assets/images/app-0003.png",
                    caption: '<span class="medium">03.</span> Book your flight'
                }]
            },
            jetshuttle: {
                bg: "deerjet/assets/images/jetshare.jpg",
                desktopbg: "deerjet/assets/images/desktop-jetshare.jpg",
                icon: "deerjet/assets/images/svg/share.svg",
                headline: "JET SHUTTLE™ <br>&nbsp;",
                subheading: "MAKES YOU<br>THE ULTIMATE<br>TRAVEL TYCOON",
                article: "<p>Two ways to fly: Find a Flight or Create Your Own.</p><p>Members book free seats on the JetShuttle flights that are pre-scheduled to fly.</p><p>Members can also create their own on-demand JetShuttle with as little as 72 hours notice and up to 6 months advance notice, depending on the flight and aircraft type.</p><p>No airport lines and no security checkpoints, just luxury without breaking the bank.</p>",
                imageSlides: [{
                    src: "deerjet/assets/images/app-0004.png?cc=0302161644",
                    caption: '<span class="medium">01.</span> Select JET SHUTTLE™'
                },
                {
                    src: "deerjet/assets/images/app-0005.png?cc=1002162056",
                    caption: '<span class="medium">02.</span> Select Your Dates'
                },
                {
                    src: "deerjet/assets/images/app-0006.png?cc=0302161644",
                    caption: '<span class="medium">03.</span> Select Your Seats'
                }]
            },
            jetcharter: {
                bg: "deerjet/assets/images/jetcharter.jpg",
                desktopbg: "deerjet/assets/images/desktop-jetcharter.jpg",
                icon: "deerjet/assets/images/svg/charter.svg",
                headline: "JET CHARTER™ <br>&nbsp;",
                subheading: "A PRIVATE FLIGHT<br>IN SECONDS<br>ON DEMAND",
                article: "<p>Search & Book from over 3,000 private aircraft worldwide:</p><p>• One-Ways<br>• Round Trips<br>• Multi-Leg Flights</p><p>• Guaranteed Rates<br>• Aircraft & Operator Quality Ratings<br>• Aircraft & Operator Safety Ratings</p><p>• Year of Manufacture<br>• Detailed Exterior & Interior Photos<br>• 24/7 Support by Aviation Experts</p><p>All the benefits of a Jet Card without pre-payment and at wholesale pricing.</p>",
                imageSlides: [{
                    src: "deerjet/assets/images/app-0007.png",
                    caption: '<span class="medium">01.</span> Input Flight Details'
                },
                {
                    src: "deerjet/assets/images/app-0008.png",
                    caption: '<span class="medium">02.</span> Select Jet Type'
                },
                {
                    src: "deerjet/assets/images/app-0009.png",
                    caption: '<span class="medium">03.</span> Book Your Jet'
                }]
            }
        };
        t.currentname = e.params.service,
        t.current = s[e.params.service],
        t.slide = 0
    }
    angular.module("jetsmarter").controller("serviceCtrl", e),
    e.$inject = ["$state"]
} (),
function() {
    "use strict";
    function e(e, t, s, a, i, l) {
        function o() {
            return null !== m ? "&page=" + m: ""
        }
        function n() {
            null == m || c.loading || (c.loading = !0, s.get("/api/v1/press/?page_size=12" + o()).success(function(e) {
                c.items.concat(e.data.response.results),
                e.data.response.results.map(function(e) {
                    c.items.push(e)
                }),
                m = e.data.response.next,
                a(function() {
                    c.loading = !1
                },
                500)
            }))
        }
        function r() {
            this.scrollTop >= this.offsetHeight && n()
        }
        l.set({
            title: "JetSmarter - Press Center",
            description: ""
        });
        var c = this,
        m = 1;
        c.items = [],
        $(document).on("ps-y-reach-end", n),
        i.any() && ($(".press-center__container .blog").on("scroll", r), e.$on("destroy",
        function() {
            $(document).off("ps-y-reach-end", n),
            $(".press-center__container .blog").off("scroll", r)
        })),
        n(),
        e.$on("$destroy",
        function() {
            l.set({
                title: "JetSmarter",
                description: ""
            })
        })
    }
    function t(e, t, s, a, i, l) {
        function o() {
            return "v" == i.search().bt ? "blog_video": "blog"
        }
        function n() {
            r.loading = !0,
            s.get("/api/v1/" + r.btype + "/" + t.params.slug + "/").success(function(e) {
                r.item = e.data.response,
                r.loading = !1,
                l.set({
                    title: "JetSmarter",
                    description: r.item.title,
                    image: r.image
                })
            })
        }
        var r = this;
        r.totrust = function(e) {
            return a.trustAsHtml(e)
        },
        r.btype = o(),
        n(),
        e.$on("$destroy",
        function() {
            l.set({
                title: "JetSmarter",
                description: ""
            })
        })
    }
    e.$inject = ["$scope", "$state", "api", "$timeout", "IsMobile", "Tags"],
    t.$inject = ["$scope", "$state", "api", "$sce", "$location", "Tags"],
    angular.module("jetsmarter").controller("PressCenterController", e).controller("PressCenterDetailController", t)
} (),
function() {
    "use strict";
    function e(e, t) {
        return function(e, s) {
            function a() {
                r.width() / (r.height() - (l.height() + o.height())) > 1.77 ? n.addClass("aspect") : n.removeClass("aspect")
            }
            function i() {
                l = $("header"),
                o = n.find(".page-title"),
                a(),
                r.on("resize", a)
            }
            var l, o, n = $(s[0]),
            r = $(t);
            i(),
            e.$on("$destroy",
            function() {
                r.off("resize", a)
            })
        }
    }
    e.$inject = ["$timeout", "$window"],
    angular.module("jetsmarter").directive("pressDetail", e)
} (),
function() {
    "use strict";
    function e(e, t) {
        t(function() {
            e.go("app.home")
        },
        4e3)
    }
    e.$inject = ["$state", "$timeout"],
    angular.module("jetsmarter").controller("NotfoundController", e)
} (),
function() {
    "use strict";
    function e(e, t, s, a, i) {
        function l() {
            return null !== v ? "&page=" + v: ""
        }
        function o(e, t) {
            var s = new Image;
            s.onload = t,
            s.src = e
        }
        function n() {
            u.map(function(e) {
                p.items.push(e)
            }),
            t(function() {
                p.loading = !1,
                d = 0,
                g = 0,
                u = []
            },
            500)
        }
        function r() {
            d++,
            d >= g && n()
        }
        function c() {
            null == v || p.loading || (p.loading = !0, s.get("/api/v1/blog/media/?page_size=12" + l()).success(function(e) {
                d = 0,
                g = e.data.response.results.length,
                u = e.data.response.results,
                v = e.data.response.next,
                e.data.response.results.map(function(e) {
                    o(e.media_url, r)
                })
            }))
        }
        function m() {
            this.scrollTop >= this.offsetHeight && c()
        }
        a.set({
            title: "JetSmarter - Media Highlights",
            description: ""
        });
        var d, g, u, p = this,
        v = 1;
        p.items = [],
        $(document).on("ps-y-reach-end", c),
        i.any() && ($(".mh__container .items-list").on("scroll", m), e.$on("destroy",
        function() {
            $(document).off("ps-y-reach-end", c),
            $(".mh__container .items-list").off("scroll", m)
        })),
        c(),
        e.$on("$destroy",
        function() {
            a.set({
                title: "JetSmarter",
                description: ""
            })
        })
    }
    e.$inject = ["$scope", "$timeout", "api", "Tags", "IsMobile"],
    angular.module("jetsmarter").controller("MediaHighlightsController", e)
} (),
function() {
    "use strict";
    function e(e, t, s, a, i, l, o, n, r) {
        function c() {
            d.slideshow = d.layout.mobile ? u: p
        }
        function m() {
            g.width() < 700 || o.iphone() ? (d.layout.desktop = !1, d.layout.mobile = !0, d.layout.large = !1) : (d.layout.desktop = !0, d.layout.mobile = !1, g.width() >= 1280 ? d.layout.large = !0 : d.layout.large = !1),
            s.layout = d.layout,
            s.$broadcast("layout"),
            e.$$phase || e.$apply(),
            c()
        }
        var d = this,
        g = $(window);
        d.layout = {
            desktop: !1,
            mobile: !1,
            large: !1
        },
        d.lang = "en";
        var u = ["deerjet/assets/images/home-slide-004.jpg", "deerjet/assets/images/home-slide-001.jpg", "deerjet/assets/images/home-slide-002.jpg", "deerjet/assets/images/home-slide-003.jpg"],
        p = ["deerjet/assets/images/desktop-home-slide-004.jpg", "deerjet/assets/images/desktop-home-slide-001.jpg", "deerjet/assets/images/desktop-home-slide-002.jpg", "deerjet/assets/images/desktop-home-slide-003.jpg"];
        d.navto = function(e) { / app.home / i.test(a.current.name) ? (d.toggleFooter(), a.current.name.split(".").length > 2 ? (d.back(), window.blockschange(e)) : window.blockschange(e)) : a.go("app.home").then(function() {
                i(function() {
                    d.navto(e)
                },
                500)
            })
        },
        d.nav = !1,
        d.subnav = !1,
        d.toggleNav = function() {
            d.nav = !d.nav,
            d.subnav = !1,
            e.$$phase || e.$apply()
        },
        s.$on("$stateChangeSuccess",
        function() {
            d.nav && d.toggleNav()
        }),
        d.footer = !1,
        d.toggleFooter = function() {
            $("body").removeClass("footer-visible")
        },
        d.showContacts = function() {
            $("body").addClass("footer-visible")
        },
        d.back = function() {
            $("body").find("video").each(function(e, t) {
                t.pause()
            }),
            i(function() {
                var e = a.current.name.split(".");
                a.go(e.splice(0, e.length - 1).join("."))
            },
            50)
        },
        i(function() {
            o.iphone() && $("body").addClass("mobile-device"),
            m()
        },
        500),
        g.on("resize",
        function() {
            m()
        }),
        s.$on("$stateChangeSuccess",
        function() {
            $("body").hasClass("footer-visible") && d.toggleFooter()
        }),
        d.showModal = function(e, t) {
            l.show({
                templateUrl: "app/components/" + t + ".html",
                controller: "DialogController",
                parent: angular.element(document.getElementById("uiroot")),
                targetEvent: e,
                clickOutsideToClose: !0
            })
        },
        d.showBottomSheet = function(e, t, s, a) {
            n.show({
                templateUrl: "app/components/bottomsheets/" + t + ".html",
                controller: s || "",
                targetEvent: e
            }).then(function(e) {
                "undefined" != typeof a && a(e)
            })
        },
        d.share = function(e, t) {
            switch (t) {
            case "tw":
                window.open("https://twitter.com/home?status=https://jetsmarter.com" + e);
                break;
            case "fb":
                window.open("https://www.facebook.com/sharer/sharer.php?u=https://jetsmarter.com" + e);
                break;
            case "in":
                window.open("https://www.linkedin.com/shareArticle?mini=true&url=https://jetsmarter.com" + e)
            }
        },
        r.get("/api/v1/partnership/contacts/?page_size=10").success(function(e) {
            d.contactsData = e.data.response.results
        })
    }
    function t(e, t) {
        e.hide = function() {
            t.hide()
        }
    }
    e.$inject = ["$scope", "Lang", "$rootScope", "$state", "$timeout", "$mdDialog", "IsMobile", "$mdBottomSheet", "api"],
    t.$inject = ["$scope", "$mdDialog"],
    angular.module("jetsmarter").controller("MainController", e).controller("DialogController", t)
} (),
function() {
    "use strict";
    function e(e, t, s, a, i) {
        var l = this;
        i.get("/api/v1/legal/?page_size=100").success(function(e) {
            l.items = e.data.response.results
        }),
        a(function() {
            location.hash ? s.go("app.legal.category", {
                category: location.hash.split("").splice(1).join("")
            }) : s.params.category && "" != s.params.category || !e.$$childHead.vm.layout.desktop || s.go("app.legal.category", {
                category: "terms-of-use"
            })
        },
        1e3),
        l.resolveState = function() {
            l.active = s.params.category,
            t.$$phase || t.$apply()
        }
    }
    function t(e, t, s, a) {
        function i() {
            o.loading = !0,
            a.get("/api/v1/legal/" + s.params.category + "/").success(function(e) {
                o.item = e.data.response,
                o.loading = !1
            })
        }
        function l() {
            o.pca = s.params.dnumber
        }
        var o = this;
        t.$parent.legal.resolveState(),
        l();
        var n = e.$on("$stateChangeSuccess", l);
        i(),
        t.$on("$destroy",
        function() {
            n()
        })
    }
    e.$inject = ["$rootScope", "$scope", "$state", "$timeout", "api"],
    t.$inject = ["$rootScope", "$scope", "$state", "api"],
    angular.module("jetsmarter").controller("LegalController", e).controller("LegalCategoryController", t)
} (),
function() {
    "use strict";
    function e(e) {
        return function(t, s) {
            e(function() {
                var e = s.find("video")[0],
                t = $(s[0]),
                a = t.find(".pause"),
                i = t.find(".play");
                e.addEventListener("play",
                function() {
                    s.removeClass("loading").addClass("playing")
                }),
                e.addEventListener("pause",
                function() {
                    s.removeClass("playing")
                }),
                e.addEventListener("click",
                function() {
                    e.paused ? e.play() : e.pause()
                }),
                i.on("click",
                function() {
                    s.addClass("loading"),
                    e.play()
                }),
                a.on("click",
                function() {
                    e.pause()
                })
            },
            100)
        }
    }
    angular.module("jetsmarter").directive("playVideo", e),
    e.$inject = ["$timeout"]
} (),
function() {
    "use strict";
    function e(e) {
        return function(t, s) {
            function a(e) {
                e.css({
                    "z-index": "1"
                }).addClass("opened"),
                r.attr("opened", e.index())
            }
            function i(t) {
                r.attr("opened", ""),
                e(function() {
                    t.css({
                        "z-index": "0"
                    }).removeClass("opened").find("video")[0].pause()
                },
                300)
            }
            function l() {
                n = c.find(".play"),
                o = c.find(".close-btn"),
                n.on("click",
                function() {
                    var e = $(this).parents(".interview-item");
                    e.hasClass("open") || a(e)
                }),
                o.on("click",
                function() {
                    i($(this).parents(".interview-item")),
                    r.find("video")[0].currentTime = 0
                })
            }
            var o, n, r = $(s[0]),
            c = r.find(".interview-item");
            e(function() {
                l()
            },
            1500)
        }
    }
    angular.module("jetsmarter").directive("interviewsVideo", e),
    e.$inject = ["$timeout"]
} (),
function() {
    "use strict";
    function e(e) {
        return function(t, s) {
            function a(t) {
                l.attr("current-image", t),
                i = e(function() {
                    a(t > 2 ? 0 : t + 1)
                },
                3e3)
            }
            var i, l = $(".slide-show");
            t.$on("$destroy",
            function() {
                e.cancel(i)
            }),
            a(0)
        }
    }
    angular.module("jetsmarter").directive("homeSlideshow", e),
    e.$inject = ["$timeout"]
} (),
function() {
    "use strict";
    function e(e, t, s) {
        function a() {
            t(function() {
                $("body").removeClass("loading"),
                t(function() {
                    $("#preloader").hide()
                },
                500)
            },
            1500),
            c = !0,
            o(0),
            e.homeLoaded = !0,
            s.$$phase || s.$apply()
        }
        function i(t) {
            var s = new Image;
            s.onload = function() {
                r += 1;
                var t = Math.ceil(r / m[e.layout.mobile ? "mobile": "desktop"].length * 100);
                $("#progress").css({
                    width: t + "%"
                }),
                r != m[e.layout.mobile ? "mobile": "desktop"].length || c || a()
            },
            s.src = t
        }
        function l(t) {
            i(m[e.layout.mobile ? "mobile": "desktop"][t]),
            t < m[e.layout.mobile ? "mobile": "desktop"].length - 1 && l(t + 1)
        }
        function o(t) {
            i(d[e.layout.mobile ? "mobile": "desktop"][t]),
            t < d[e.layout.mobile ? "mobile": "desktop"].length - 1 && o(t + 1)
        }
        var n = this;
        n.pressSources = [{
            link: "http://www.businessinsider.com/private-travel-startup-jetsmarter-raised-20-million-from-jay-z-and-saudi-royal-family-2015-7",
            logo: "deerjet/assets/images/svg/medialogos/bilogo.svg"
        },
        {
            link: "http://www.foxbusiness.com/on-air/money-with-melissa-francis/index.html#/v/3945769390001",
            logo: "deerjet/assets/images/svg/medialogos/fox.svg"
        },
        {
            link: "http://www.wsj.com/video/jetsmarter-the-uber-of-air-travel/9CAB6665-E81D-4D54-846D-4B3C9991E971.html",
            logo: "deerjet/assets/images/svg/medialogos/WSJ_Logo.svg"
        },
        {
            link: "http://www.nytimes.com/2015/02/17/business/despite-steep-fees-and-first-class-prices-private-jets-are-available-to-more.html?_r=0",
            logo: "deerjet/assets/images/svg/medialogos/nytimes.svg"
        },
        {
            link: "http://www.bloomberg.com/video/jetsmarter-private-jets-in-the-palm-of-your-hand-z9y58nIaTa6nSg2fs6GbTQ.html",
            logo: "deerjet/assets/images/svg/medialogos/bloomberg.svg"
        },
        {
            link: "http://techcrunch.com/2015/07/23/with-20m-in-the-bank-jetsmarter-is-building-the-uber-of-the-skies/",
            logo: "deerjet/assets/images/svg/medialogos/TC.svg"
        },
        {
            link: "http://edition.cnn.com/2015/06/09/travel/uber-private-jets/index.html",
            logo: "deerjet/assets/images/svg/medialogos/cnn.svg"
        },
        {
            link: "http://nypost.com/2014/04/06/uber-for-jets-hits-the-market-with-jetsmarter/",
            logo: "deerjet/assets/images/svg/medialogos/nypost.svg"
        },
        {
            link: "http://www.forbes.com/sites/kerryadolan/2015/07/23/private-jet-travel-for-the-simply-very-rich-takes-off-with-two-startups/",
            logo: "deerjet/assets/images/svg/medialogos/forbes.svg"
        },
        {
            link: "http://www.dailymail.co.uk/travel/travel_news/article-2868995/Fancy-quick-getaway-JetSmarter-app-hail-private-jet.html",
            logo: "deerjet/assets/images/svg/medialogos/daylimail.svg"
        }];
        var r = 0,
        c = !1,
        m = {
            mobile: ["deerjet/assets/images/home-slide-003.jpg", "deerjet/assets/images/home-slide-002.jpg", "deerjet/assets/images/home-slide-001.jpg", "deerjet/assets/images/home-slide-004.jpg", "deerjet/assets/images/everyone_can_fly_jetsmarter.png", "deerjet/assets/images/image_001.jpg"],
            desktop: ["deerjet/assets/images/desktop-home-slide-004.jpg", "deerjet/assets/images/desktop-home-slide-003.jpg", "deerjet/assets/images/desktop-home-slide-002.jpg", "deerjet/assets/images/desktop-home-slide-001.jpg", "deerjet/assets/images/everyone_can_fly_jetsmarter.png", "deerjet/assets/images/services-0001.jpg"]
        },
        d = {
            mobile: ["deerjet/assets/images/image_004.png", "deerjet/assets/images/mobile_payment.png", "deerjet/assets/images/image_005.jpg", "deerjet/assets/images/image_006.jpg", "deerjet/assets/images/image_002.png", "deerjet/assets/images/image_008.jpg", "deerjet/assets/images/image_009.jpg", "deerjet/assets/images/gold-card.jpg", "deerjet/assets/images/home-about-us.jpg", "deerjet/assets/images/home-partnership.jpg", "deerjet/assets/images/home-human-driven-tech.jpg"],
            desktop: ["deerjet/assets/images/services-0002.jpg", "deerjet/assets/images/services-0003.jpg", "deerjet/assets/images/desk-message-center.png", "deerjet/assets/images/desk-mobile-payments.png", "deerjet/assets/images/desktop-image_005.jpg", "deerjet/assets/images/desktop-image_006.jpg", "deerjet/assets/images/desktop-image_008.jpg", "deerjet/assets/images/desktop-image_009.jpg", "deerjet/assets/images/desktop-gold-card.jpg", "deerjet/assets/images/desktop-home-about-us.jpg", "deerjet/assets/images/desktop-home-partnership.jpg", "deerjet/assets/images/desktop-home-human-driven-tech.jpg"]
        };
        e.homeLoaded || (document.body.className += " loading", $("#preloader").show(), e.layout ? l(0) : e.$on("layout",
        function() {
            l(0)
        }))
    }
    e.$inject = ["$rootScope", "$timeout", "$scope"],
    angular.module("jetsmarter").controller("HomeController", e)
} (),
function() {
    "use strict";
    function e(e, t, s) {
        var a = this;
        a.setCategory = function(e) {
            a.active = -1,
            a.current = e,
            a.category = a.data.faq[e],
            s[0].querySelector(".faq__category").scrollTop = 0
        },
        e.get("/api/v1/faq/").success(function(e) {
            a.data = e.data.response,
            t(function() {
                $("#uiroot").hasClass("mobile") || a.setCategory(a.data.categories[0])
            },
            500)
        })
    }
    e.$inject = ["api", "$timeout", "$document"],
    angular.module("jetsmarter").controller("FaqController", e)
} (),
function() {
    "use strict";
    function e(e) {}
    e.$inject = ["$mdDialog"],
    angular.module("jetsmarter").controller("AboutMembership", e)
} (),
function() {
    "use strict";
    function e(e, t, s) {
        t.$on("$stateChangeSuccess",
        function(e, a, i, l) {
            t.$previousState = l,
            t.currentAppState = s.current.name.split(".").join(""),
            t.$$phase || t.$apply()
        }),
        function(e, t, s, a, i, l, o) {
            e.GoogleAnalyticsObject = i,
            e[i] = e[i] ||
            function() { (e[i].q = e[i].q || []).push(arguments)
            },
            e[i].l = 1 * new Date,
            l = t.createElement(s),
            o = t.getElementsByTagName(s)[0],
            l.async = 1,
            l.src = a,
            o.parentNode.insertBefore(l, o)
        } (window, document, "script", "//www.google-analytics.com/analytics.js", "ga"),
        ga("create", "UA-57123301-1", "auto"),
        ga("send", "pageview")
    }
    angular.module("jetsmarter").run(e),
    e.$inject = ["$log", "$rootScope", "$state"]
} (),
function() {
    "use strict";
    function e(e, t, s, a) {
        e.state("app", {
            "abstract": !0,
            url: "",
            templateUrl: "app/main/main.html",
            controller: "MainController",
            controllerAs: "vm"
        }).state("app.notfound", {
            url: "/404/",
            templateUrl: "app/notfound/404.html",
            controller: "NotfoundController",
            controllerAs: "nfc"
        }).state("app.faq", {
            url: "/faq/",
            templateUrl: "app/faq/faq.html",
            controller: "FaqController",
            controllerAs: "faq"
        }).state("app.aboutmembership", {
            url: "/inquire-about-membership/",
            templateUrl: "app/about-membership/about-membership.html",
            controller: "AboutMembership",
            controllerAs: "amshp"
        }).state("app.mediaHighlights", {
            url: "/media-highlights/",
            templateUrl: "app/media-highlights/media-highlights.html",
            controller: "MediaHighlightsController",
            controllerAs: "mh"
        }).state("app.pressCenter", {
            url: "/press-center/",
            templateUrl: "app/press-center/press-center.html",
            controller: "PressCenterController",
            controllerAs: "pc"
        }).state("app.pressCenter.slug", {
            url: ":slug/",
            templateUrl: "app/press-center/press-detail.html",
            controller: "PressCenterDetailController",
            controllerAs: "pcDetail"
        }).state("app.legal", {
            url: "/legal/",
            templateUrl: "app/legal/legal.html",
            controller: "LegalController",
            controllerAs: "legal"
        }).state("app.legal.category", {
            url: ":category/",
            templateUrl: "app/legal/category.html",
            controller: "LegalCategoryController",
            controllerAs: "legalCategory"
        }).state("app.legal.category.pca", {
            url: ":dnumber/",
            controller: "LegalCategoryController",
            controllerAs: "legalCategory"
        }).state("app.home", {
            url: "/",
            templateUrl: "app/home/home.html",
            controller: "HomeController",
            controllerAs: "home"
        }).state("app.home.interviews", {
            url: "interviews/",
            templateUrl: "app/interviews/interviews.html"
        }).state("app.home.service", {
            url: "{service:jetdeals|jetshuttle|jetcharter}/",
            templateUrl: "app/home/service.html",
            controller: "serviceCtrl as service"
        }),
        t.when("/en/", "/").otherwise(function(e, t) { / en / i.test(t.path().split("/")[1]) ? t.path(t.path().split("/").splice(2).join("/")) : t.path("/404/")
        }).rule(function(e, t) {
            var s = t.url();
            if (! ("/" === s[s.length - 1] || s.indexOf("/?") > -1)) return s.indexOf("?") > -1 ? s.replace("?", "/?") : s + "/"
        }),
        s.html5Mode(!0).hashPrefix("!")
    }
    angular.module("jetsmarter").config(e),
    e.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider", "$urlMatcherFactoryProvider"]
} (),
function() {
    "use strict";
    angular.module("jetsmarter").constant("malarkey", malarkey).constant("moment", moment).constant("Location",
    function() {
        return /localhos/i.test(location) ? "http://code78.jetsmarter.dev.letsnet.ru": ""
    })
} (),
function() {
    "use strict";
    function e(e, t) {
        e.debugEnabled(!0),
        t.allowHtml = !0,
        t.timeOut = 3e3,
        t.positionClass = "toast-top-right",
        t.preventDuplicates = !0,
        t.progressBar = !0
    }
    angular.module("jetsmarter").config(e),
    e.$inject = ["$logProvider", "toastrConfig"]
} (), angular.module("jetsmarter").run(["$templateCache",
function(e) {
    e.put("app/about-membership/about-membership.html", '<div layout="row" layout-align="center {{ vm.layout.mobile ? \'start\' : \'center\' }}" class="about-membership full-size bg-dark-beige"><div ng-include="\'app/components/forms/membership.html\'"></div></div>'),
    e.put("app/faq/faq.html", '<div class="faq full-view bg-light regular c-dark-beige"><section layout="column" class="bg-dark-beige"><h1 class="page-title medium ttu c-light">FAQ</h1><div class="tab-nav"><md-button ng-repeat="item in faq.data.categories" ng-click="faq.setCategory(item)" ng-class="{ \'bg-orange c-light\': item == faq.current &amp;&amp; vm.layout.desktop, \'bg-light c-dark-beige\': item != faq.current || vm.layout.mobile, }" class="medium regular">{{:: item }}</md-button></div></section><div ng-class="{ \'active\': faq.current &amp;&amp; faq.current != \'\' }" class="content bg-light"><h2 ng-show="faq.current != \'\' &amp;&amp; vm.layout.mobile" class="regular">{{faq.current}}</h2><a ng-click="faq.current = \'\'" ng-include="\'deerjet/assets/images/svg/close.svg\'" ng-if="vm.layout.mobile" class="close-button"></a><div perfect-scroll="" class="faq__category"><div ng-repeat="item in faq.category" class="faq__item"><md-toolbar ng-bind-html="item.question" ng-click="faq.active = (faq.active == $index ? -1 : $index)" ng-class="{ \'bg-light-beige c-dark-beige\': faq.active == $index, \'bg-beige c-light\': faq.active != $index }" class="item__heading medium"></md-toolbar><md-content ng-bind-html="item.answer" ng-class="{ \'hidden\': faq.active != $index }" class="item__content"></md-content></div></div></div></div>'),
    e.put("app/home/home-0.html", '<div layout="column" layout-align="center start" class="full-size home-0 article-wrap"><h1 class="page-title ttu tl c-light light"><span class="medium">impossible luxury</span><br>is closer<br>than you think</h1><article class="page-article regular"><p>Unlimited free flights on private jets<br>for a modest membership fee</p><md-button ng-click="vm.showModal($event, \'forms/membership\')" class="t1-btn md-warn md-raised ttu">INQUIRE ABOUT MEMBERSHIP</md-button></article><md-button href="https://itunes.apple.com/app/jetsmarter-fly-on-private/id562937375?mt=8" target="_blank" class="appstore"><md-icon md-svg-src="deerjet/assets/images/svg/appstore.svg"></md-icon></md-button><div home-slideshow="" class="full-size slide-show"><img ng-repeat="img in vm.slideshow" ng-src="{{ img }}" alt=""></div></div><div ng-include="\'deerjet/assets/images/svg/arrows-down.svg\'" ng-click="vm.navto(1)" class="home-0__bottom-arrows"></div>'),
    e.put("app/home/home-1.html", '<div layout="column" layout-align="center start" class="full-size article-wrap home-1 bg-light c-dark-beige"><h1 class="page-title ttu tl light"><img src="deerjet/assets/images/Icon-76@2x.png" width="77px" height="77px" ng-if="vm.layout.desktop"><br><span class="medium">EVERYONE</span><br>CAN FLY<br>JETSMARTER</h1><article ng-if="vm.layout.desktop" class="page-article regular"><h4>Members Get More</h4><ul><li>Booking is EASY for all</li><li>Members get FREE flights</li><li>Thousands of scheduled private jet flights</li><li>Fly private on-demand for a fractional price</li><li>Preferred Aircraft and Operators</li><li>Choice of Aircraft Configuration</li><li>24/7 Dedicated Aviation Specialist</li><li>Full-Service Travel Concierge</li></ul><md-button href="https://itunes.apple.com/app/jetsmarter-fly-on-private/id562937375?mt=8" target="_blank" class="md-warn md-raised ttu">GET APP NOW</md-button><div ng-if="vm.layout.desktop" class="bottom-links tiplink tl"><small ng-click="vm.showBottomSheet($event, \'everyonecanfly-information\')" class="light c-orange">*<span>&nbsp;</span>Additional information on JetSmarter services</small></div></article><div ng-if="vm.layout.mobile" class="bottom-links tc"><md-button href="https://itunes.apple.com/app/jetsmarter-fly-on-private/id562937375?mt=8" target="_blank" class="md-warn md-raised ttu">GET APP NOW</md-button></div></div>'),
    e.put("app/home/home-10.html", '<div layout="column" layout-align="center start" ng-if="vm.layout.mobile" class="full-size article-wrap home-10 bg-dark-beige c-light"><h1 class="page-title ttu tl c-light light"><span class="medium">24K GOLD<br>MEMBERSHIP CARD</span><br><br>LUSTER TO LAST<br>A LIFETIME</h1><article class="page-article regular"><p>We are in the business of finer things, and<br>making them accessible to you, which is why,<br>in the name of good taste, you will receive a<br>24k gold-plated JetSmarter membership card<br>upon your initiation.</p></article><div class="bottom-links tc"><md-button ng-click="vm.showModal($event, \'forms/membership\')" class="t1-btn md-warn md-raised ttu">INQUIRE ABOUT MEMBERSHIP</md-button></div></div><div layout="row" ng-if="vm.layout.desktop" class="full-size article-wrap home-10 bg-dark-beige c-light"><div flex="" layout="column" layout-align="center start" class="content"><h1 class="page-title ttu tl light"><span class="medium">24K GOLD<br>MEMBERSHIP CARD</span><br><br>LUSTER TO LAST<br>A LIFETIME</h1><article class="page-article regular"><p>We are in the business of finer things, and<br>making them accessible to you, which is why,<br>in the name of good taste, you will receive a<br>24k gold-plated JetSmarter membership card<br>upon your initiation.</p><md-button ng-click="vm.showModal($event, \'forms/membership\')" class="t1-btn md-warn md-raised ttu">INQUIRE ABOUT MEMBERSHIP</md-button></article></div><div flex="" class="img"></div></div>'),
    e.put("app/home/home-2.html", '<div class="services home-2 full-size"><div layout="{{ vm.layout.mobile ? \'column\' : \'row\' }}" class="services__list"><md-button ng-href="/jetshuttle/" layout="column" layout-align="center center" class="service__item"><img src="deerjet/assets/images/svg/share.svg" alt="" width="50px" height="50px"><span class="title medium c-orange">JET SHUTTLE™<small class="c-light regular">Fly Free on Scheduled Shuttle Routes<br>or Create Your Own Shuttle</small></span></md-button><md-button ng-href="/jetdeals/" layout="column" layout-align="center center" class="service__item"><img src="deerjet/assets/images/svg/deals.svg" alt="" width="50px" height="50px"><span class="title medium c-orange">JET DEALS™<small class="c-light regular">Catch a Free Private Jet Flight<br>to a New Destination Daily</small></span></md-button><md-button ng-href="/jetcharter/" layout="column" layout-align="center center" class="service__item"><img src="deerjet/assets/images/svg/charter.svg" alt="" width="50px" height="50px"><span class="title medium c-orange">JET CHARTER™<small class="c-light regular">Create a Custom Charter Flight<br>Anywhere Worldwide</small></span></md-button></div></div>'),
    e.put("app/home/home-3.html", '<div layout="column" layout-align="{{ vm.layout.mobile ? \'start\' : \'center\'}} start" class="full-size article-wrap home-3 bg-light"><h1 class="page-title ttu tl c-dark-beige light"><span class="medium">MESSAGE CENTER</span><br><br>STAY CONNECTED<br>RIGHT FROM THE<br>PALM OF YOUR HAND</h1><article class="page-article light"><p>In the App’s Message Center you can<br>communicate with Aviation Experts and<br>Customer Experience Specialists.</p><p>JetSmarter’s Team is available to you 24/7.<br>Here you will receive invoices, flight<br>confirmations and itineraries, for a seamless<br>booking experience.</p></article></div>'),
    e.put("app/home/home-4.html", '<div layout="column" layout-align="{{ vm.layout.mobile ? \'start\' : \'center\' }} start" class="full-size article-wrap home-4 bg-light"><h1 class="page-title ttu tl c-dark-beige light"><span class="medium">MOBILE PAYMENTS</span><br><br>PAY ON-THE-FLY<br>RIGHT FROM YOUR<br>PHONE</h1><article class="page-article light"><p>Secure & Easy Online Payments. JetSmarter can accept payments in 132 currencies operating worldwide 24 hours a day.</p></article></div>'),
    e.put("app/home/home-5.html", '<div layout="{{ vm.layout.desktop ? \'row\' : \'column\' }}" layout-align="{{ vm.layout.mobile ? \'start\' : \'center\' }} start" ng-class="{ \'article-wrap bg-dark-beige c-light\': vm.layout.mobile, \'c-dark-beige bg-light\': vm.layout.desktop }" class="full-size home-5"><div ng-class="{ \'content article-wrap\': vm.layout.desktop }" layout="{{ vm.layout.desktop ? \'column\' : \'column\' }}" layout-align="{{ vm.layout.desktop ? \'center start\' : \'start center\' }}"><h1 class="page-title ttu tl light"><span class="medium">HELI TRANSFERS™</span><br><br>SKIP THE TRAFFIC<br>AND TAKE IN A<br>REMARKABLE VIEW</h1><article class="page-article regular"><p>Members enjoy complimentary helicopter rides to and from New York metro area airports and Manhattan.</p><p class="article-note">*<span>&nbsp;</span>In addition to complimentary Heli Transfers,<br>helicopter charter services are available for booking in most cities around the world.</p></article></div><div class="bottom-links tiplink tl"><small ng-click="vm.showBottomSheet($event, \'helitransfer-information\')" class="light c-orange">*<span>&nbsp;</span>Additional information on JetSmarter services</small></div><div ng-if="vm.layout.desktop" class="img"></div></div>'),
    e.put("app/home/home-6.html", '<div layout="{{ vm.layout.desktop ? \'row\' : \'column\' }}" layout-align="{{ vm.layout.mobile ? \'start\' : \'center\' }} start" ng-class="{ \'article-wrap bg-dark-beige c-light\': vm.layout.mobile, \'c-dark-beige bg-light\': vm.layout.desktop }" class="full-size home-6"><div ng-class="{ \'content article-wrap\': vm.layout.desktop }" layout="{{ vm.layout.desktop ? \'column\' : \'column\' }}" layout-align="{{ vm.layout.desktop ? \'center start\' : \'start center\' }}"><h1 class="page-title ttu tl light"><span class="medium">SAFETY<br>& QUALITY<br>ASSURANCE</span></h1><article ng-if="vm.layout.mobile" class="page-article regular"><p>Our partner operators have the most rigorous standards for safety, maintenance, training and operations in the industry.</p><p>ARG/US Platinum or Gold Safety Rating</p><p>Wyvern Wingman Safety Rating</p><p>Minimum $100,000,000 of Aircraft Liability Insurance</p><p>Employ full time pilots with the latest check ratings</p></article><article ng-if="vm.layout.desktop" class="page-article regular"><p>We only partner with operators that have the most rigorous standards for safety, maintenance, training and operations in the industry.</p><ul><li>ARG/US Platinum or Gold Safety Rating</li><li>Wyvern Wingman Safety Rating</li><li>Minimum $100,000,000 of Aircraft Liability Insurance</li><li>24 hour 365 day operations support</li><li>Have successfully facilitated 100% of flights</li><li>Employ full time pilots with the latest<br>check ratings</li></ul><p>The safety of our members is paramount.<br>It’s our first priority for every flight booked.</p></article><img src="deerjet/assets/images/image_006_footer.png" ng-if="vm.layout.mobile" class="articlr__footer"></div><div flex="" ng-if="vm.layout.desktop" class="img"><img src="deerjet/assets/images/image_006_footer.png" class="articlr__footer"></div></div>'),
    e.put("app/home/home-7.html", '<div layout="column" layout-align="start start" ng-if="vm.layout.mobile" class="full-size article-wrap home-7 bg-dark-beige c-light"><h1 class="page-title ttu tl medium">MEMBERSHIP<br>BENEFITS</h1></div><div layout="row" ng-if="vm.layout.desktop" class="full-size home-7 c-dark-beige bg-light"><div flex="" layout="column" layout-align="center start" class="content"><h1 class="page-title ttu tl medium">MEMBERSHIP<br>BENEFITS</h1></div><div flex="" class="img"></div></div>'),
    e.put("app/home/home-8.html", '<div layout="column" layout-align="start start" ng-if="vm.layout.mobile" class="full-size article-wrap home-8 bg-dark-beige c-light"><h1 class="page-title ttu tl c-light light"><span class="medium">AVIATION CONCIERGE</span><br><br>CONNECTION WITH<br>AN EXPERT 24/7/365</h1><article class="page-article regular"><p>Our Team is available to you 24 hrs/day + 7 days/week and will escort you step-by-step throughout the booking process. Rest assured, your specialists are working hard to provide a seamless JetSmarter experience.</p></article></div><div layout="row" ng-if="vm.layout.desktop" class="full-size home-8 c-dark-beige bg-light"><div layout="column" layout-align="center start" class="content article-wrap"><h1 class="page-title ttu tl light"><span class="medium">AVIATION<br>CONCIERGE</span><br><br>CONNECTION WITH<br>AN EXPERT 24/7/365</h1><article class="page-article regular"><p>Our Team is available to you 24 hrs/day + 7 days/week and will escort you step-by-step throughout the booking process. Rest assured, your specialists are working hard to provide a seamless JetSmarter experience.</p></article></div><div flex="" class="img"></div></div>'),
    e.put("app/home/home-9.html", '<div layout="column" layout-align="start start" ng-if="vm.layout.mobile" class="full-size article-wrap home-9 bg-dark-beige c-light"><h1 class="page-title ttu tl c-light light"><span class="medium">LIFESTYLE SERVICES</span><br><br>JETSMARTER:<br>THE ULTIMATE<br>WINGMAN</h1><article class="page-article regular"><p>As a JetSmarter member, you may take<br>advantage of our personally tailored<br>concierge experiences. This may include,<br>but is not limited to:<br><br><br></p><ul><li>Special Arrangements for Ground Transportation</li><li>Exclusive Restaurant or Club Reservations</li><li>Hotel Reservations + Check-ins & Check-outs</li><li>Catering &#8212; Food Preparation & Presentation</li><li>Any other logistical needs you would rather hand off</li></ul></article></div><div layout="row" ng-if="vm.layout.desktop" class="full-size home-9 c-dark-beige bg-light"><div layout="column" layout-align="center start" class="content article-wrap"><h1 class="page-title ttu tl light"><span class="medium">LIFESTYLE<br>SERVICES</span><br><br>JETSMARTER:<br>THE ULTIMATE<br>WINGMAN</h1><article class="page-article regular"><p>As a JetSmarter member, you may take advantage of our personally tailored concierge experiences. This may include, but is not limited to:</p><ul><li>Special Arrangements for Ground Transportation</li><li>Exclusive Restaurant or Club Reservations</li><li>Hotel Reservations + Check-ins & Check-outs</li><li>Catering &#8212; Food Preparation & Presentation</li><li>Any other logistical needs you would rather hand off</li></ul></article></div><div flex="" class="img"></div></div>'),
    e.put("app/home/home-about-us.html", '<div layout="column" layout-align="center start" class="full-size article-wrap home-about-us"><h1 class="page-title ttu tl c-light light"><span class="medium">A SKY BIG ENOUGH</span><br>FOR EVERYONE</h1><md-button ng-href="/interviews/" class="medium c-light ttu"><md-icon md-svg-src="deerjet/assets/images/svg/play_button.svg"></md-icon>Meet the People who made this possible</md-button><div class="bottom-links tc"><a ng-repeat="i in home.pressSources" ng-href="{{:: i.link}}" target="_blank"><img ng-src="{{:: i.logo}}" alt="" height="20px"></a></div></div>'),
    e.put("app/home/home-human-driven-tech.html", '<div layout="column" layout-align="start start" ng-if="vm.layout.mobile" class="full-size article-wrap home-human-driven-tech bg-dark-beige c-light"><h1 class="page-title ttu tl medium">HUMAN DRIVEN<br>TECHNOLOGIES</h1><article class="page-article regular"><p>Elevating the travel experience is in our DNA.<br>We are unmatched in this art because incumbent companies often have zero experience in next generation mobile technology. Coupled with the most unique services in aviation history, JetSmarter has established itself as the benchmark for savvy travelers around the world.<br>Founded in 2012 by Sergey Petrossov, JetSmarter has grown worldwide, establishing 7 offices across the globe, and arranging flights in over 170 different countries. We are truly helping to connect the world through the sky.</p></article></div><div layout="row" ng-if="vm.layout.desktop" class="full-size home-human-driven-tech c-dark-beige bg-light"><div layout="column" layout-align="center start" class="content article-wrap"><h1 class="page-title ttu tl medium">HUMAN DRIVEN<br>TECHNOLOGIES</h1><article class="page-article regular"><p>Elevating the travel experience is in our DNA.<br>We are unmatched in this art because incumbent companies often have zero experience in next generation mobile technology. Coupled with the most unique services in aviation history, JetSmarter has established itself as the benchmark for savvy travelers around the world.<br>Founded in 2012 by Sergey Petrossov, JetSmarter has grown worldwide, establishing 7 offices across the globe, and arranging flights in over 170 different countries. We are truly helping to connect the world through the sky.</p></article></div><div flex="" class="img"></div></div>'),
    e.put("app/home/home-partnership.html", '<div layout="column" layout-align="center start" ng-if="vm.layout.mobile" class="full-size article-wrap home-partnership bg-dark-beige c-light"><h1 class="page-title ttu tl c-light light">WE BUY YOUR<br><span class="medium">FLIGHT HOURS.</span></h1><article class="page-article regular"><h4>WHY AIRCRAFT OPERATORS PARTNER WITH US:</h4><ul><li>To capture a new business channel, once inaccessible.</li><li>To significantly increase aircraft capacity utilization.</li><li>To improve fleet efficiencies by capitalizing on empty-legs.</li></ul><p><small ng-click="vm.showBottomSheet($event, \'webuyyourflighthours-information\')" class="light c-orange">*<span>&nbsp;</span>Additional information on JetSmarter services</small></p></article><div class="bottom-links tc"><md-button ng-click="vm.showModal($event, \'forms/partnership\')" class="t1-btn md-warn md-raised ttu">INQUIRE ABOUT PARTNERSHIP</md-button></div></div><div layout="row" ng-if="vm.layout.desktop" class="full-size home-partnership bg-dark-beige c-light"><div flex="" layout="column" layout-align="center start" class="content article-wrap"><h1 class="page-title ttu tl light">WE BUY YOUR<br><span class="medium">FLIGHT HOURS.</span></h1><article class="page-article regular"><h4>WHY AIRCRAFT OPERATORS PARTNER WITH US:</h4><ul><li>To capture a new business channel, once inaccessible.</li><li>To significantly increase aircraft capacity utilization.</li><li>To improve fleet efficiencies by capitalizing on empty-legs.</li></ul><md-button ng-click="vm.showModal($event, \'forms/partnership\')" class="t1-btn md-warn md-raised ttu">INQUIRE ABOUT PARTNERSHIP</md-button></article><div ng-if="vm.layout.desktop" class="bottom-links tiplink tl"><small ng-click="vm.showBottomSheet($event, \'webuyyourflighthours-information\')" class="light c-orange">*<span>&nbsp;</span>Additional information on JetSmarter services</small></div></div></div>'),
    e.put("app/home/home.html", '<div scroll-jack="" class="blocks home"><div ng-include="\'app/home/home-0.html\'" class="block full-view"></div><div ng-include="\'app/home/home-2.html\'" class="block full-view"></div><div ng-include="\'app/home/home-3.html\'" class="block full-view"></div><div ng-include="\'app/home/home-4.html\'" class="block full-view"></div><div ng-include="\'app/home/home-5.html\'" class="block full-view"></div><div ng-include="\'app/home/home-8.html\'" class="block full-view"></div><div ng-include="\'app/home/home-9.html\'" class="block full-view"></div><div ng-include="\'app/home/home-6.html\'" class="block full-view"></div><div ng-include="\'app/home/home-10.html\'" class="block full-view"></div><div ng-include="\'app/home/home-partnership.html\'" class="block full-view"></div><div ng-include="\'app/home/home-about-us.html\'" class="block full-view"></div><div ng-include="\'app/home/home-human-driven-tech.html\'" class="block full-view"></div></div><div id="service-view" ui-view=""></div>'),
    e.put("app/home/service.html", '<div ng-class="{ \'colors2\': (service.slide &gt;= 1 &amp;&amp; service.slide &lt; 4 &amp;&amp; vm.layout.mobile) || vm.layout.desktop }" class="service bg-light-gray"><a ng-click="vm.back()" ng-include="\'deerjet/assets/images/svg/close.svg\'" class="close-button"></a><div ng-if="vm.layout.mobile" ng-swipe-right="service.slide = (service.slide == 0 ? 4 : service.slide - 1)" ng-swipe-left="service.slide = (service.slide == 4 ? 0 : service.slide + 1)" class="carousel-wrapper"><div ng-class="{ \'colors2\': service.slide &gt;= 1 &amp;&amp; service.slide &lt; 4 }" class="carousel__pagination"><div ng-class="{ \'active\': service.slide == 0 }" class="page"></div><div ng-class="{ \'active\': service.slide == 1 }" class="page"></div><div ng-class="{ \'active\': service.slide == 2 }" class="page"></div><div ng-class="{ \'active\': service.slide == 3 }" class="page"></div><div ng-class="{ \'active\': service.slide == 4 }" class="page"></div></div><div ng-style="{ \'width\': \'500vw\', \'-webkit-transform\': \'translate(-\' + (20 * service.slide) + \'%)\', \'transform\': \'translate(-\' + (20 * service.slide) + \'%)\' }" class="carousel-inner"><div class="carousel-item c-light bg-dark-beige"><img ng-src="{{ service.current.bg }}" class="item__bg"><div layout="column" layout-align="center start" class="content item__article"><h3><img ng-src="{{ service.current.icon }}" width="50px" height="50px"><div ng-bind-html="service.current.headline" class="ttu medium"></div><div ng-bind-html="service.current.subheading" class="light subheading"></div></h3></div></div><div ng-repeat="slide in service.current.imageSlides" class="carousel-item service__slide__t2 c-dark-beige bg-light"><img ng-src="{{ slide.src }}" alt=""><p ng-bind-html="slide.caption" class="tc regular"></p></div><div class="carousel-item c-light bg-dark-beige"><img ng-src="{{ service.current.bg }}" class="item__bg"><div class="content item__article"><h3><img ng-src="{{ service.current.icon }}" width="50px" height="50px"><div ng-bind-html="service.current.headline" class="ttu medium"></div></h3><article ng-bind-html="service.current.article" class="regular"></article><div class="article"><small ng-click="vm.showBottomSheet($event, service.currentname + \'-information\')" class="light c-orange">*<span>&nbsp;</span>Additional information on JetSmarter services</small></div></div></div></div></div><div ng-if="vm.layout.desktop" layout="col" class="service-page"><div flex="" ng-style="{ \'background-image\': \'url(\' + service.current.desktopbg +\')\' }" layout="column" layout-align="center start" class="side-item c-light bg-dark-beige"><div class="content item__article"><h1><img ng-src="{{ service.current.icon }}" width="50px" height="50px"><div ng-bind-html="service.current.headline" class="ttu medium"></div><div ng-bind-html="service.current.subheading" class="light subheading"></div></h1></div></div><div flex="" ng-swipe-right="service.slide = (service.slide == 0 ? 3 : service.slide - 1)" ng-swipe-left="service.slide = (service.slide == 3 ? 0 : service.slide + 1)" class="carousel-wrapper"><div class="carousel__ctrls"><div ng-click="service.slide = (service.slide == 0 ? 3 : service.slide - 1)" ng-include="\'deerjet/assets/images/svg/single-arrow.svg\'" class="cntr-left"></div><div ng-click="service.slide = (service.slide == 3 ? 0 : service.slide + 1)" ng-include="\'deerjet/assets/images/svg/single-arrow.svg\'" class="cntr-right"></div></div><div class="carousel__pagination colors2"><div ng-class="{ \'active\': service.slide == 0 }" class="page"></div><div ng-class="{ \'active\': service.slide == 1 }" class="page"></div><div ng-class="{ \'active\': service.slide == 2 }" class="page"></div><div ng-class="{ \'active\': service.slide == 3 }" class="page"></div></div><div ng-style="{ \'width\': \'200vw\', \'-webkit-transform\': \'translate(-\' + (25 * service.slide) + \'%)\', \'transform\': \'translate(-\' + (25 * service.slide) + \'%)\' }" class="carousel-inner"><div ng-repeat="slide in service.current.imageSlides" class="carousel-item service__slide__t2 c-dark-beige bg-light"><img ng-src="{{ slide.src }}" alt=""><p ng-bind-html="slide.caption" class="regular"></p></div><div class="carousel-item bg-light c-dark-beige"><div layout="column" layout-align="center start" class="content item__article"><h3><div ng-bind-html="service.current.headline" class="ttu medium"></div></h3><article ng-bind-html="service.current.article" class="regular"></article><article><small ng-click="vm.showBottomSheet($event, service.currentname + \'-information\')" class="light c-orange">*<span>&nbsp;</span>Additional information on JetSmarter services</small></article></div></div></div></div></div></div>'),
    e.put("app/home/slideshow-desktop.html", '<div home-slideshow="" class="full-size slide-show"><img ng-src="deerjet/assets/images/desktop-home-slide-004.jpg" alt=""><img ng-src="deerjet/assets/images/desktop-home-slide-001.jpg" alt=""><img ng-src="deerjet/assets/images/desktop-home-slide-002.jpg" alt=""><img ng-src="deerjet/assets/images/desktop-home-slide-003.jpg" alt=""></div>'),
    e.put("app/home/slideshow-mobile.html", '<div home-slideshow="" class="full-size slide-show"><img ng-src="deerjet/assets/images/home-slide-004.jpg" alt=""><img ng-src="deerjet/assets/images/home-slide-001.jpg" alt=""><img ng-src="deerjet/assets/images/home-slide-002.jpg" alt=""><img ng-src="deerjet/assets/images/home-slide-003.jpg" alt=""></div>'),
    e.put("app/interviews/interview-desktop.html", '<a ng-click="vm.back()" ng-include="\'deerjet/assets/images/svg/close.svg\'" ng-init="interviews = 0" class="close-button"></a><div interviews-video="" class="full-view interviews-list"><div class="interview-item"><div ng-include="\'deerjet/assets/images/svg/close.svg\'" ng-init="interviews = 0" class="close-btn"></div><div class="upper bg-gray"><img src="deerjet/assets/images/desktop-interview1.png" alt=""><div vidsrc="{&quot;hq_mp4&quot;:&quot;deerjet/assets/video/team_hq.mp4&quot;,&quot;sq_mp4&quot;:&quot;deerjet/assets/video/team_sq.mp4&quot;,&quot;lq_mp4&quot;:&quot;deerjet/assets/video/team_lq.mp4&quot;,&quot;hq_webm&quot;:&quot;deerjet/assets/video/team_hq.webm&quot;,&quot;sq_webm&quot;:&quot;deerjet/assets/video/team_sq.webm&quot;,&quot;lq_webm&quot;:&quot;deerjet/assets/video/team_lq.webm&quot;,&quot;hq_ogg&quot;:&quot;deerjet/assets/video/team_hq.ogv&quot;,&quot;sq_ogg&quot;:&quot;deerjet/assets/video/team_sq.ogv&quot;,&quot;lq_ogg&quot;:&quot;deerjet/assets/video/team_lq.ogv&quot;}" videojs="" class="videojs hidden"></div></div><div class="caption bg-brown c-light regular"><div class="page-title light ttu"><span class="medium">JETSMARTER TEAM</span><br><br>PEOPLE WHO KNOW MORE</div><div class="page-article"><p>“JETSMARTER IS MY LIFE”<br>How an empathetic app stands to revolutionize the way we travel</p></div></div></div><div class="interview-item"><div ng-include="\'deerjet/assets/images/svg/close.svg\'" ng-init="interviews = 0" class="close-btn"></div><div class="upper bg-gray"><img src="deerjet/assets/images/desktop-interview2.png" alt=""><div vidsrc="{&quot;hq_mp4&quot;:&quot;deerjet/assets/video/sp_hq.mp4&quot;,&quot;sq_mp4&quot;:&quot;deerjet/assets/video/sp_sq.mp4&quot;,&quot;lq_mp4&quot;:&quot;deerjet/assets/video/sp_lq.mp4&quot;,&quot;hq_webm&quot;:&quot;deerjet/assets/video/sp_hq.webm&quot;,&quot;sq_webm&quot;:&quot;deerjet/assets/video/sp_sq.webm&quot;,&quot;lq_webm&quot;:&quot;deerjet/assets/video/sp_lq.webm&quot;,&quot;hq_ogg&quot;:&quot;deerjet/assets/video/sp_hq.ogv&quot;,&quot;sq_ogg&quot;:&quot;deerjet/assets/video/sp_sq.ogv&quot;,&quot;lq_ogg&quot;:&quot;deerjet/assets/video/sp_lq.ogv&quot;}" videojs="" class="videojs hidden"></div></div><div class="caption bg-brown c-light regular"><div class="page-title light ttu"><span class="medium">SERGEY PETROSSOV</span><br><br>FOUNDER, CHAIRMAN & CEO</div><div class="page-article"><p>“REDEFINING AIR TRAVEL”<br>JetSmarter technology bring aviation back to it’s most elegant roots</p></div></div></div><div class="interview-item"><div ng-include="\'deerjet/assets/images/svg/close.svg\'" ng-init="interviews = 0" class="close-btn"></div><div class="upper bg-gray"><img src="deerjet/assets/images/desktop-interview3.png" alt=""><div vidsrc="{&quot;hq_mp4&quot;:&quot;deerjet/assets/video/gb_hq.mp4&quot;,&quot;sq_mp4&quot;:&quot;deerjet/assets/video/gb_sq.mp4&quot;,&quot;lq_mp4&quot;:&quot;deerjet/assets/video/gb_lq.mp4&quot;,&quot;hq_webm&quot;:&quot;deerjet/assets/video/gb_hq.webm&quot;,&quot;sq_webm&quot;:&quot;deerjet/assets/video/gb_sq.webm&quot;,&quot;lq_webm&quot;:&quot;deerjet/assets/video/gb_lq.webm&quot;,&quot;hq_ogg&quot;:&quot;deerjet/assets/video/gb_hq.ogv&quot;,&quot;sq_ogg&quot;:&quot;deerjet/assets/video/gb_sq.og&quot;,&quot;lq_ogg&quot;:&quot;deerjet/assets/video/gb_lq.ogv&quot;}" videojs="" class="videojs hidden"></div></div><div class="caption bg-brown c-light regular"><div class="page-title light ttu"><span class="medium">GENNADY BARSKY</span><br><br>VICE-CHAIRMAN & PRESIDENT</div><div class="page-article"><p>“INTERNATIONAL COUNTRY CLUB IN THE SKY”<br>JetSmarter’s global expansions is connecting the world through the sky</p></div></div></div></div>'),
    e.put("app/interviews/interview-mobile.html", '<a ng-click="vm.back()" ng-include="\'deerjet/assets/images/svg/close.svg\'" ng-init="interviews = 0" class="close-button"></a><div ng-swipe-right="interviews = (interviews == 0 ? 2 : interviews - 1)" ng-swipe-left="interviews = (interviews == 2 ? 0 : interviews + 1)" class="carousel-wrapper"><div class="carousel__pagination"><div ng-class="{ \'active\': interviews == 0 }" class="page"></div><div ng-class="{ \'active\': interviews == 1 }" class="page"></div><div ng-class="{ \'active\': interviews == 2 }" class="page"></div></div><div ng-style="{ \'width\': \'300vw\', \'-webkit-transform\': \'translateX(-\' + (33.3 * interviews) + \'%)\', \'transform\': \'translateX(-\' + (33.3 * interviews) + \'%)\' }" class="carousel-inner"><div layout="{{ vm.layout.mobile ? \'column\' : \'row\' }}" class="carousel-item c-light bg-dark-brown"><div aria-label="JETSMARTER TEAM interview" flex="" play-video="" class="video-image interview2"><img ng-src="deerjet/assets/images/interview3.png" alt=""><md-progress-circular md-diameter="20px" md-mode="indeterminate" class="md-hue-2"></md-progress-circular><video id="interview-gb" class="hidden"><source src="deerjet/assets/video/team_sq.mp4" type="video/mp4"><source ng-src="deerjet/assets/video/team_sq.webm" type="video/webm"><source ng-src="deerjet/assets/video/team_sq.ogv" type="video/ogg"></video><div class="video__ctrls"><button class="play"><md-icon md-svg-src="deerjet/assets/images/svg/play_button.svg"></md-icon></button> <button class="pause"><md-icon md-svg-src="deerjet/assets/images/svg/pause_button.svg"></md-icon></button></div></div><div flex="" class="caption regular"><h1 class="page-title ttu tl c-light light"><span class="medium">JETSMARTER TEAM</span><br><br>PEOPLE WHO KNOW MORE</h1><div class="page-article"><p>“JETSMARTER IS MY LIFE”<br>How an empathetic app stands to revolutionize the way we travel</p></div></div></div><div layout="{{ vm.layout.mobile ? \'column\' : \'row\' }}" class="carousel-item c-light bg-dark-brown"><div flex="" play-video="" class="video-image interview1"><img ng-src="deerjet/assets/images/interview1.png" alt=""><md-progress-circular md-diameter="20px" md-mode="indeterminate" md-hue-3="" class="md-hue-2"></md-progress-circular><video id="interview-sp" class="hidden"><source ng-src="deerjet/assets/video/sp_sq.mp4" type="video/mp4"><source ng-src="deerjet/assets/video/sp_sq.webm" type="video/webm"><source ng-src="deerjet/assets/video/sp_sq.ogv" type="video/ogg"></video><div class="video__ctrls"><button class="play"><md-icon md-svg-src="deerjet/assets/images/svg/play_button.svg"></md-icon></button> <button class="pause"><md-icon md-svg-src="deerjet/assets/images/svg/pause_button.svg"></md-icon></button></div></div><div flex="" class="caption regular"><h1 class="page-title ttu tl c-light light"><span class="medium">SERGEY PETROSSOV</span><br><br>FOUNDER, CHAIRMAN & CEO</h1><div class="page-article"><p>“REDEFINING AIR TRAVEL”<br>JetSmarter technology bring aviation back to it’s most elegant roots</p></div></div></div><div layout="{{ vm.layout.mobile ? \'column\' : \'row\' }}" class="carousel-item c-light bg-dark-brown"><div aria-label="GENNADY BARSKY interview" flex="" play-video="" class="video-image interview2"><img ng-src="deerjet/assets/images/interview2.png" alt=""><md-progress-circular md-diameter="20px" md-mode="indeterminate" class="md-hue-2"></md-progress-circular><video id="interview-gb" class="hidden"><source ng-src="deerjet/assets/video/gb_sq.mp4" type="video/mp4"><source ng-src="deerjet/assets/video/gb_sq.webm" type="video/webm"><source ng-src="deerjet/assets/video/gb_sq.ogv" type="video/ogg"></video><div class="video__ctrls"><button class="play"><md-icon md-svg-src="deerjet/assets/images/svg/play_button.svg"></md-icon></button> <button class="pause"><md-icon md-svg-src="deerjet/assets/images/svg/pause_button.svg"></md-icon></button></div></div><div flex="" class="caption regular"><h1 class="page-title ttu tl c-light light"><span class="medium">GENNADY BARKSY</span><br><br>VICE-CHAIRMAN & PRESIDENT</h1><div class="page-article"><p>“INTERNATIONAL COUNTRY CLUB IN THE SKY”<br>JetSmarter’s global expansions is connecting the world through the sky</p></div></div></div></div></div>'),
    e.put("app/interviews/interviews.html", "<div ng-include=\"'app/interviews/interview-' + (vm.layout.mobile ? 'mobile' : 'desktop') + '.html'\" class=\"interviews bg-light-gray\"></div>"),
    e.put("app/legal/category.html", '<a ng-click="vm.back()" ng-include="\'deerjet/assets/images/svg/close.svg\'" ng-if="vm.layout.mobile" class="close-button"></a><div class="legal-detail"><div ng-if="legal.active != \'public-charter-agreements\'" ng-bind-html="legalCategory.item.content" perfect-scroll="" class="content"></div><div ng-if="legal.active == \'public-charter-agreements\'" perfect-scroll="" class="content"><div class="pca-list tl"><md-button ng-repeat="(k, v) in legalCategory.item" ng-href="/legal/public-charter-agreements/{{ k }}/" ng-class="{ active: k == legalCategory.pca}" flex="">{{ v.company_name }} <span>({{ k }})</span></md-button></div><div ng-bind-html="legalCategory.item[legalCategory.pca].content" class="pca-content"></div></div></div>'),
    e.put("app/legal/legal.html", '<div class="legal full-view bg-light regular c-dark-beige"><section layout="column" class="bg-dark-beige"><h1 class="page-title medium ttu c-light">legal</h1><div class="tab-nav"><md-button ng-repeat="item in legal.items" ng-href="/legal/{{:: item.slug }}/" ng-class="{ \'bg-orange c-light\': item.slug == legal.active &amp;&amp; vm.layout.desktop, \'bg-light c-dark-beige\': item.slug != legal.active || vm.layout.mobile, }" class="medium regular">{{:: item.title }}</md-button><md-button ng-href="/legal/public-charter-agreements/" ng-class="{ \'bg-orange c-light\': \'public-charter-agreements\' == legal.active &amp;&amp; vm.layout.desktop, \'bg-light c-dark-beige\': \'public-charter-agreements\' != legal.active || vm.layout.mobile, }" class="medium regular">PUBLIC CHARTER AGREEMENTS</md-button></div></section><div ui-view="" class="detail-container"></div></div>'),
    e.put("app/main/main.html", '<div ng-include="\'app/components/header/header.html\'"></div><div ng-include="\'app/components/menu/menu.html\'"></div><div ui-view="" class="first-level gotham"></div><div ng-include="\'app/components/footer/footer.html\'"></div>'),
    e.put("app/notfound/404.html", '<div class="not_found full-size bg-light"><div layout="column" layout-align="center center" class="not_found__content full-size regular c-dark-beige tc"><div class="big light">404</div><div class="small">Sorry, this web-page does not exist.<br>Please go to <a ng-href="/" class="c-orange">homescreen</a></div></div></div>'),
    e.put("app/media-highlights/media-highlights.html", '<div class="media-highlights bg-light"><div class="mh__container"><div scroll-x="false" perfect-scroll="" class="items-list"><img src="assets/images/svg/hashtag.svg" class="hashtag"><div ng-repeat="item in mh.items" masonry="" class="item"><div class="inner"><img ng-src="{{:: item.media_url }}" class="media_image"><div class="badge bold">{{ item.media_social_type == \'fb\' ? \'FACEBOOK\' : item.media_social_type == \'tw\' ? \'TWITTER\' : \'INSTAGRAM\' }}</div><div ng-bind-html="item.media_text" class="media__text regular c-dark-beige"></div><div ng-bind-html="item.created_at" class="created_at bold"></div><img ng-src="deerjet/assets/images/svg/{{:: item.media_social_type }}.svg" height="16px" class="media__sociale__type"></div></div><div ng-show="mh.loading" class="fetching"><md-progress-linear md-mode="indeterminate"></md-progress-linear></div></div></div></div>'),
    e.put("app/press-center/category.html", '<div perfect-scroll="" layout="row" layout-wrap="" class="blog bg-light"><a ng-href="/press-center/blog/{{ item.slug }}/" ng-repeat="item in pcCategory.items" layout="column" flex="33" flex-sm="100" flex-md="50" class="post-item"><div ng-style="{ \'background-image\': \'url(\' + item.image + \')\' }" class="img"></div><div class="caption regular"><h3 class="medium ttu">{{ item.title }}</h3><div ng-bind="item.content_preview" class="preview"></div></div></a></div><div ui-view="" class="detail-view bg-light"></div>'),
    e.put("app/press-center/press-center.html", "<div layout=\"column\" class=\"press-center full-view bg-light\"><div class=\"press-center__container\"><div layout=\"row\" layout-wrap=\"\" perfect-scroll=\"\" class=\"blog bg-light\"><a ng-href=\"{{:: (item.type == 'blog' ? '/press-center/' + item.slug + '/?bt=b' : item.type == 'video' ? '/press-center/' + item.slug + '/?bt=v' : item.url) }}\" ng-repeat=\"item in pc.items\" layout=\"column\" flex=\"33\" flex-xs=\"100\" flex-sm=\"50\" ng-class=\"'type-'+item.type\" target=\"{{:: (item.type == 'blog' || item.type == 'video' ? '' : '_blank') }}\" class=\"post-item\"><div ng-class=\"{ 'bg-orange': item.type == 'news', 'bg-beige': item.type == 'blog' }\" class=\"label c-light ttu\">{{:: item.type }}</div><div ng-if=\"item.type == 'video'\" ng-style=\"{ 'background-image': 'url(' + item.poster + ')' }\" class=\"img\"></div><div ng-if=\"item.type == 'news'\" ng-style=\"{ 'background-image': 'url(' + ( item.source ? item.source.logo : 'deerjet/assets/images/night-vintage-music-bokeh.png' ) + ')' }\" ng-class=\"{ 'placehold': !item.source }\" class=\"img\"></div><div ng-if=\"item.type == 'blog'\" ng-style=\"{ 'background-image': 'url(' + ( vm.layout.mobile ? item.lq : vm.layout.large ? item.hq : item.sq ) + ')' }\" ng-class=\"{ 'placehold': !item.source }\" class=\"img\"></div><div class=\"caption regular\"><h3 ng-class=\"(vm.layout.desktop ? 'medium' : 'bold')\" class=\"ttu\">{{:: item.title }}</h3><div ng-class=\"(vm.layout.desktop ? 'regular' : 'medium')\" ng-bind-html=\"item.content_preview\" ng-if=\"item.type == 'blog'\" class=\"preview\"></div><div layout=\"row\" class=\"caption__bottom\"><div flex=\"50\" class=\"date\"><span class=\"c-orange ttu bold\">{{:: item.updated_at }}</span></div><div flex=\"50\" class=\"sm tr\"><i ng-click=\"$event.stopPropagation(); vm.share(item.type == 'blog' ? '/press-center/' + item.slug + '/?bt=b' : item.type == 'video' ? '/press-center/' + item.slug + '/?bt=v' : item.url, 'fb')\" ng-include=\"'deerjet/assets/images/svg/fb.svg'\"></i><i ng-click=\"$event.stopPropanate(); vm.share(item.type == 'blog' ? '/press-center/' + item.slug + '/?bt=b' : item.type == 'video' ? '/press-center/' + item.slug + '/?bt=v' : item.url, 'tw')\" ng-include=\"'deerjet/assets/images/svg/tw.svg'\"></i><i ng-click=\"$event.stopPropagation(); vm.share(item.type == 'blog' ? '/press-center/' + item.slug + '/?bt=b' : item.type == 'video' ? 'https://jetsmarter.com/press-center/' + item.slug + '/?bt=v' : item.url, 'in')\" ng-include=\"'deerjet/assets/images/svg/in.svg'\"></i></div></div></div></a></div><div ui-view=\"\" class=\"detail-view bg-light\"></div></div></div>"),
    e.put("app/press-center/press-detail.html", '<div ng-class="\'type-\' + pcDetail.btype" perfect-scroll="" press-detail="" class="press-detail-container regular c-dark-beige"><a ng-click="vm.back()" ng-include="\'deerjet/assets/images/svg/close.svg\'" class="close-button"></a><div vidsrc-mp4="{{ pcDetail.item.video }}" vidsrc-webm="{{ pcDetail.item.video }}" vidsrc-ogg="{{ pcDetail.item.video }}" postersrc="{{pcDetail.item.poster}}" ng-if="pcDetail.item.video" videojs="" class="videojs"></div><img ng-src="{{ pcDetail.item.image }}" ng-if="!pcDetail.item.video"><h2 ng-bind-html="pcDetail.item.title" class="page-title bg-brown c-light medium"></h2><div ng-bind-html="pcDetail.item.content ? pcDetail.totrust(pcDetail.item.content) : pcDetail.totrust(pcDetail.item.description)"></div></div>'),
    e.put("app/survey/survey.html", '<div class="survey full-size bg-light"><div perfect-scroll="" class="full-size"><div layout="column" layout-align="center center" class="md-toolbar-tools bg-orange c-light tc"><div>Tell Us More About You</div></div><form ng-submit="submit()" ng-cloak=""><md-content class="regular"><md-tabs md-dynamic-height="" md-border-bottom=""><md-tab label="one"><md-content class="md-padding c-dark-beige"><p class="medium">1. What is your favorite JetShuttle route?</p><md-radio-group ng-model="survey.formData.favorite_route"><md-radio-button ng-repeat="d in survey.data.favorite_route" ng-value="d.value" aria-label="d">{{ d.label }}</md-radio-button></md-radio-group><br><hr></md-content><md-content class="md-padding c-dark-beige"><p class="medium">2. If you are apart of a airline miles program; which and what status do you have?</p><div ng-repeat="l in survey.data.airlines" layout="column"><md-radio-group ng-model="survey.formData.airline_miles_program[l]" layout-align="center center" layout="row"><p flex="">{{ l }}</p><div ng-repeat="b in survey.data.airline_miles_program" layout-align="center center" layout="row" flex=""><md-radio-button ng-value="b" aria-label="b"></md-radio-button></div></md-radio-group></div><md-input-container><label>Other</label> <input ng-model="survey.formData.airline_miles_program[\'Other\']" ng-blur="survey.formData.airline_miles_program[\'Other\'] = (survey.formData.airline_miles_program[\'Other\'].length &gt; 0 ? survey.formData.airline_miles_program[\'Other\'] : undefined)" class="light"></md-input-container><br><hr></md-content><md-content class="md-padding c-dark-beige"><p class="medium">3. Which area are you based in?</p><div ng-repeat="l in survey.data.airlines" layout="column"><md-radio-group ng-model="survey.formData.airline_miles_program[l]" layout-align="center center" layout="row"><p flex="">{{ l }}</p><div ng-repeat="b in survey.data.airline_miles_program" layout-align="center center" layout="row" flex=""><md-radio-button ng-value="b" aria-label="b"></md-radio-button></div></md-radio-group></div><md-input-container><label>Other</label> <input ng-model="survey.formData.airline_miles_program[\'Other\']" ng-blur="survey.formData.airline_miles_program[\'Other\'] = (survey.formData.airline_miles_program[\'Other\'].length &gt; 0 ? survey.formData.airline_miles_program[\'Other\'] : undefined)" class="light"></md-input-container><br><hr></md-content></md-tab><md-tab label="two"><md-content class="md-padding"><h1 class="md-display-2">Tab Two</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus. Vivamus convallis sodales ante varius gravida. Curabitur a purus vel augue ultrices ultricies id a nisl. Nullam malesuada consequat diam, a facilisis tortor volutpat et. Sed urna dolor, aliquet vitae posuere vulputate, euismod ac lorem. Sed felis risus, pulvinar at interdum quis, vehicula sed odio. Phasellus in enim venenatis, iaculis tortor eu, bibendum ante. Donec ac tellus dictum neque volutpat blandit. Praesent efficitur faucibus risus, ac auctor purus porttitor vitae. Phasellus ornare dui nec orci posuere, nec luctus mauris semper.</p><p>Morbi viverra, ante vel aliquet tincidunt, leo dolor pharetra quam, at semper massa orci nec magna. Donec posuere nec sapien sed laoreet. Etiam cursus nunc in condimentum facilisis. Etiam in tempor tortor. Vivamus faucibus egestas enim, at convallis diam pulvinar vel. Cras ac orci eget nisi maximus cursus. Nunc urna libero, viverra sit amet nisl at, hendrerit tempor turpis. Maecenas facilisis convallis mi vel tempor. Nullam vitae nunc leo. Cras sed nisl consectetur, rhoncus sapien sit amet, tempus sapien.</p><p>Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum tellus. Curabitur posuere molestie dictum. Morbi eget congue risus, quis rhoncus quam. Suspendisse vitae hendrerit erat, at posuere mi. Cras eu fermentum nunc. Sed id ante eu orci commodo volutpat non ac est. Praesent ligula diam, congue eu enim scelerisque, finibus commodo lectus.</p></md-content></md-tab><md-tab label="three"><md-content class="md-padding"><h1 class="md-display-2">Tab Three</h1><p>Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum tellus. Curabitur posuere molestie dictum. Morbi eget congue risus, quis rhoncus quam. Suspendisse vitae hendrerit erat, at posuere mi. Cras eu fermentum nunc. Sed id ante eu orci commodo volutpat non ac est. Praesent ligula diam, congue eu enim scelerisque, finibus commodo lectus.</p></md-content></md-tab><md-tab label="fourth"><md-content class="md-padding"><p class="tc">Thank you for taking the time to provide us with your valuable feedback. We’re constantly looking for ways to enhance our experience for our members and your feedback will help us achieve this goal. Please do not hesitate to reach out to us should you have any questions about this survey. Thank you again and continue to JetSmarter!</p></md-content></md-tab></md-tabs></md-content></form></div></div>'),
    e.put("app/components/bottomsheets/everyonecanfly-information.html", '<md-bottom-sheet ng-cloak="" class="md-list md-has-header"><md-content class="bg-light-beige gotham"><p class="legalnote bg-light-beige c-dark-beige">JetSmarter offers a number of programs including single-entity charters and Public Charters. JS does not own or operate the aircraft being utilized under any JetSmarter program. All flights are performed by FAA licensed and DOT authorized air carriers. For single-entity charters, JetSmarter will act solely as your agent in arranging the flight. For Public Charter operations, JetSmarter will act as principal in buying and reselling the air transportation. Seats sold under the Public Charter Program are subject to the Public Charter rules contained in 14 CFR 380. All transportation is subject to availability and additional restrictions may apply. Please see the tour participant agreement for further details.</p></md-content></md-bottom-sheet>'),
    e.put("app/components/bottomsheets/helitransfer-information.html", '<md-bottom-sheet ng-cloak="" class="md-list md-has-header"><md-content class="bg-light-beige gotham"><p class="legalnote bg-light-beige c-dark-beige">Free helicopter transfers are available at select times and are offered on a first come, first served, basis and may be provided as scheduled flights or as a single-entity charter. JS will act as your agent.</p></md-content></md-bottom-sheet>'),
    e.put("app/components/bottomsheets/jetcharter-information.html", '<md-bottom-sheet ng-cloak="" class="md-list md-has-header"><md-content class="bg-light-beige gotham"><p class="legalnote bg-light-beige c-dark-beige">JetSmarter does not own or operate the aircraft being utilized in the JetSmarter Program. For Jet Charter flights, JetSmarter will act solely as your agent in arranging the flights.</p></md-content></md-bottom-sheet>'),
    e.put("app/components/bottomsheets/jetdeals-information.html", '<md-bottom-sheet ng-cloak="" class="md-list md-has-header"><md-content class="bg-light-beige gotham"><p class="legalnote bg-light-beige c-dark-beige">These FREE flights are provided by FAA licensed and DOT authorized air carriers through an exclusive arrangement with JetSmarter and members may access these flights with up to one month advanced booking notice. JetSmarter does not own or operate the aircraft being utilized under the JetSmarter Program. Jet Deals are provided on a Public Charter basis in accordance with 14 CFR 380. Please see the tour participant agreement for further details.</p></md-content></md-bottom-sheet>'),
    e.put("app/components/bottomsheets/jetshuttle-information.html", '<md-bottom-sheet ng-cloak="" class="md-list md-has-header"><md-content class="bg-light-beige gotham"><p class="legalnote bg-light-beige c-dark-beige">Flight reservations under the Jet Shuttle Program will be on a Single Entity Charter basis (as that term is defined in 14 CFR 212) and will be arranged by JetSmarter as your agent. Such reservations may be for less than the full capacity of the aircraft. Once the reservation is confirmed, JetSmarter reserves the right to sell one or more of the remaining seats on the aircraft to other JetSmarter Members and their guests on a per seat public charter basis in accordance with 14 CFR 380. For all public charter sales, JS will act as principal. Please see the tour participant agreement for further details.</p></md-content></md-bottom-sheet>'),
    e.put("app/components/bottomsheets/webuyyourflighthours-information.html", '<md-bottom-sheet ng-cloak="" class="md-list md-has-header"><md-content class="bg-light-beige gotham"><p class="legalnote bg-light-beige c-dark-beige">Aircraft capacity purchased by JetSmarter will only be utilized in JetSmarter’s Public Charter Program or be provided to JetSmarter members with JetSmarter acting as such member’s agent.</p></md-content></md-bottom-sheet>'),
    e.put("app/components/footer/footer.html", '<footer footer-dir="" class="bg-light regular gotham"><a ng-click="vm.toggleFooter()" ng-include="\'deerjet/assets/images/svg/close.svg\'" ng-if="vm.layout.desktop" class="close-button"></a><div class="footer__contacts__outer"><div class="footer__contacts__inner"><article class="page-article regular c-dark-beige"><div ng-repeat="o in vm.contactsData"><span ng-bind-html="o.city" class="medium ttu"></span><div ng-bind-html="o.address"></div><a ng-href="tel:{{o.phone}}" ng-bind-html="o.phone" class="c-orange medium"></a></div></article></div></div><p class="copyright bg-dark-beige c-light regular">&copy; 2016 JetSmarter Inc. &nbsp;|&nbsp;&nbsp;<a ng-href="/legal/" class="c-orange">Legal</a> &nbsp;|&nbsp;&nbsp;<a ng-href="/press-center/" class="c-orange">Press-center</a></p></footer><div class="footer__overlay"></div>'),
    e.put("app/components/forms/membership.html", '<md-dialog aria-label="INQUIRE ABOUT MEMBERSHIP" ng-cloak="" class="js-dialog gotham"><form layout="column" ng-controller="Membershipform as mf" novalidate="" class="bg-dark-beige c-light regular"><md-toolbar class="bg-orange"><div layout="column" layout-align="space-between center" class="md-toolbar-tools"><h2 class="medium">INQUIRE ABOUT MEMBERSHIP</h2><md-button ng-click="hide()" class="bg-light md-icon-button"><md-icon md-svg-src="deerjet/assets/images/svg/close.svg" aria-label="Close dialog"></md-icon></md-button></div></md-toolbar><md-dialog-content ng-if="!mf.success"><div><p class="c-light set-label">Please provide your information:</p><div><md-input-container class="regular"><label class="c-light">Name</label> <input type="text" ng-model="mf.formData[\'Name\']" required="" class="bg-gray-beige c-light gotham regular"></md-input-container><md-input-container class="regular"><label class="c-light">Phone</label> <input type="text" ng-model="mf.formData[\'Phone\']" required="" class="bg-gray-beige c-light gotham regular"></md-input-container><md-input-container class="regular"><label class="c-light">E-mail</label> <input type="email" ng-model="mf.formData[\'E-mail\']" required="" class="bg-gray-beige c-light gotham regular"></md-input-container></div><div><p class="c-light set-label">How do you currently travel:</p><md-switch aria-label="COMMERCIAL" ng-model="mf.ts.commercial" ng-change="mf.toggle(mf.formData.travel_style, \'commercial\')">COMMERCIAL</md-switch><md-switch aria-label="CHARTER" ng-model="mf.ts.charter" ng-change="mf.toggle(mf.formData.travel_style, \'charter\')">CHARTER</md-switch><md-switch aria-label="JET CARD" ng-model="mf.ts.jet_card" ng-change="mf.toggle(mf.formData.travel_style, \'jet card\')">JET CARD</md-switch><md-switch aria-label="FRACTIONAL" ng-model="mf.ts.fractional" ng-change="mf.toggle(mf.formData.travel_style, \'fractional\')">FRACTIONAL</md-switch><md-switch aria-label="AIRCRAFT OWNERSHIP" ng-model="mf.ts.aircraft_ownership" ng-change="mf.toggle(mf.formData.travel_style, \'aircraft ownership\')">AIRCRAFT OWNERSHIP</md-switch></div></div><div class="tc"><md-button ng-click="mf.submit()" class="bg-orange c-light btn-sbm">submit</md-button></div></md-dialog-content><md-dialog-content ng-if="mf.success"><div ng-bind-html="mf.success"></div></md-dialog-content></form></md-dialog>'),
    e.put("app/components/forms/partnership.html", '<md-dialog aria-label="INQUIRE ABOUT PARTNERSHIP" ng-cloak="" class="js-dialog gotham"><form layout="column" ng-controller="Dinform as df" novalidate="" ng-init="df.getForm(\'partnership\')" class="bg-dark-beige c-light regular"><md-toolbar class="bg-orange"><div layout="column" layout-align="space-between center" class="md-toolbar-tools"><h2 class="medium">INQUIRE ABOUT PARTNERSHIP</h2><md-button ng-click="hide()" class="bg-light md-icon-button"><md-icon md-svg-src="deerjet/assets/images/svg/close.svg" aria-label="Close dialog"></md-icon></md-button></div></md-toolbar><md-dialog-content ng-if="!df.success"><div><p class="c-light set-label">Please provide your information:</p><div><md-input-container ng-repeat="field in df.fields" class="regular"><label class="c-light">{{:: field.name.replace(\'_\', \' \') }}</label> <input type="{{ field.name == \'E-mail\' ? \'email\' : \'text\' }}" ng-model="df.formData[field.name]" required="" class="bg-gray-beige c-light gotham regular"></md-input-container></div></div><div class="tc"><md-button ng-click="df.submit()" class="bg-orange c-light btn-sbm">submit</md-button></div></md-dialog-content><md-dialog-content ng-if="df.success"><div ng-bind-html="df.success"></div></md-dialog-content></form></md-dialog>'),
    e.put("app/components/header/header.html", '<header><a ng-click="vm.back()" class="back-button"></a><a ng-click="vm.navto(0)" class="logo"><md-icon md-svg-src="deerjet/assets/images/svg/logo.svg" aria-label="jetsmarter logo"></md-icon></a> <button ng-click="vm.toggleNav();vm.toggleFooter()" class="menu-btn"><span></span></button></header>'),
    e.put("app/components/menu/menu.html", '<div ng-swipe-right="vm.toggleNav()" ng-class="{ \'visible\': vm.nav }" class="menu gotham bg-dark-beige"><a ng-click="vm.toggleNav()" ng-include="\'deerjet/assets/images/svg/close.svg\'" class="close-button"></a><nav><md-button ng-click="vm.navto(0); vm.toggleNav()" class="regular ttu c-light">home</md-button><md-button ng-click="vm.navto(1); vm.toggleNav()" class="regular ttu c-light">SERVICES</md-button><div class="has-subnav"><md-button ng-click="vm.subnav = !vm.subnav" ng-class="{ \'bg-beige active\': vm.subnav == true }" class="regular ttu c-light">FEATURES</md-button><div ng-class="{ \'open\': vm.subnav == true }" class="subnav bg-dark-brown"><md-button ng-click="vm.navto(2); vm.toggleNav()" class="regular ttu c-light">MESSAGE CENTER</md-button><md-button ng-click="vm.navto(3); vm.toggleNav()" class="regular ttu c-light">MOBILE PAYMENTS</md-button><md-button ng-click="vm.navto(4); vm.toggleNav()" class="regular ttu c-light">HELI TRANSFERS</md-button><md-button ng-click="vm.navto(5); vm.toggleNav()" class="regular ttu c-light">AVIATION CONCIERGE</md-button><md-button ng-click="vm.navto(6); vm.toggleNav()" class="regular ttu c-light">LIFESTYLE SERVICES</md-button></div></div><md-button ng-click="vm.navto(7); vm.toggleNav()" class="regular ttu c-light">SAFETY & QUALITY</md-button><md-button ng-click="vm.navto(8); vm.toggleNav()" class="regular ttu c-light special">MEMBERSHIP</md-button><md-button ng-click="vm.navto(9); vm.toggleNav()" class="regular ttu c-light">PARTNERSHIP</md-button><md-button ng-click="vm.navto(10); vm.toggleNav()" class="regular ttu c-light">ABOUT JETSMARTER</md-button><md-button ng-href="/faq/" class="regular ttu c-light">FAQ</md-button><md-button ng-href="/press-center/" class="regular ttu c-light">PRESS CENTER</md-button><md-button ng-click="vm.showContacts(); vm.toggleNav()" class="regular ttu c-light">CONTACTS</md-button></nav><div class="menu-bottom"><md-button href="https://itunes.apple.com/app/jetsmarter-fly-on-private/id562937375?mt=8" target="_blank" class="appstore"><md-icon md-svg-src="deerjet/assets/images/svg/appstore.svg"></md-icon></md-button><a href="tel:+18889VIPJET" class="c-light tel light">+1 888 9 VIP JET</a></div></div><div ng-click="vm.toggleNav()" ng-class="{ \'visible\': vm.nav }" class="menu_overlay"></div>')
}]);
//# sourceMappingURL=../maps/scripts/app-f7f462dd47.js.map
