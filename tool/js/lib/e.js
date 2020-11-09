!
function(a) {
	jQuery.fn.extend({
		slimScroll: function(b) {
			var c = {
				width: "auto",
				height: "250px",
				size: "7px",
				color: "#000",
				position: "right",
				distance: "1px",
				start: "top",
				opacity: .4,
				alwaysVisible: !1,
				disableFadeOut: !1,
				railVisible: !1,
				railColor: "#333",
				railOpacity: .2,
				railDraggable: !0,
				railClass: "slimScrollRail",
				barClass: "slimScrollBar",
				wrapperClass: "slimScrollDiv",
				allowPageScroll: !1,
				wheelStep: 20,
				touchScrollStep: 200,
				borderRadius: "7px",
				railBorderRadius: "7px"
			},
				d = a.extend(c, b);
			return this.each(function() {
				function w(b) {
					var e, f;
					c && (b = b || window.event, e = 0, b.wheelDelta && (e = -b.wheelDelta / 120), b.detail && (e = b.detail / 3), f = b.target || b.srcTarget || b.srcElement, a(f).closest("." + d.wrapperClass).is(o.parent()) && x(e, !0), b.preventDefault && !n && b.preventDefault(), n || (b.returnValue = !1))
				}
				function x(a, b, c) {
					var e, f, g;
					n = !1, e = a, f = o.outerHeight() - u.outerHeight(), b && (e = parseInt(u.css("top")) + a * parseInt(d.wheelStep) / 100 * u.outerHeight(), e = Math.min(Math.max(e, 0), f), e = a > 0 ? Math.ceil(e) : Math.floor(e), u.css({
						top: e + "px"
					})), j = parseInt(u.css("top")) / (o.outerHeight() - u.outerHeight()), e = j * (o[0].scrollHeight - o.outerHeight()), c && (e = a, g = e / o[0].scrollHeight * o.outerHeight(), g = Math.min(Math.max(g, 0), f), u.css({
						top: g + "px"
					})), o.scrollTop(e), o.trigger("slimscrolling", ~~e), A(), B()
				}
				function y() {
					window.addEventListener ? (this.addEventListener("DOMMouseScroll", w, !1), this.addEventListener("mousewheel", w, !1), this.addEventListener("MozMousePixelScroll", w, !1)) : document.attachEvent("onmousewheel", w)
				}
				function z() {
					i = Math.max(o.outerHeight() / o[0].scrollHeight * o.outerHeight(), m), u.css({
						height: i + "px"
					});
					var a = i == o.outerHeight() ? "none" : "block";
					u.css({
						display: a
					})
				}
				function A() {
					if (z(), clearTimeout(g), j == ~~j) {
						if (n = d.allowPageScroll, k != j) {
							var a = 0 == ~~j ? "top" : "bottom";
							o.trigger("slimscroll", a)
						}
					} else n = !1;
					return k = j, i >= o.outerHeight() ? (n = !0, void 0) : (u.stop(!0, !0).fadeIn("fast"), d.railVisible && s.stop(!0, !0).fadeIn("fast"), void 0)
				}
				function B() {
					d.alwaysVisible || (g = setTimeout(function() {
						d.disableFadeOut && c || e || f || (u.fadeOut("slow"), s.fadeOut("slow"))
					}, 1e3))
				}
				var c, e, f, g, h, i, j, k, p, q, r, s, u, v, l = "<div></div>",
					m = 30,
					n = !1,
					o = a(this);
				if (o.parent().hasClass(d.wrapperClass)) {
					if (p = o.scrollTop(), u = o.parent().find("." + d.barClass), s = o.parent().find("." + d.railClass), z(), a.isPlainObject(b)) {
						if ("height" in b && "auto" == b.height && (o.parent().css("height", "auto"), o.css("height", "auto"), q = o.parent().parent().height(), o.parent().css("height", q), o.css("height", q)), "scrollTo" in b) p = parseInt(d.scrollTo);
						else if ("scrollBy" in b) p += parseInt(d.scrollBy);
						else if ("destroy" in b) return u.remove(), s.remove(), o.unwrap(), void 0;
						x(p, !1, !0)
					}
				} else d.height = "auto" == d.height ? o.parent().height() : d.height, r = a(l).addClass(d.wrapperClass).css({
					position: "relative",
					overflow: "hidden",
					width: d.width,
					height: d.height
				}), o.css({
					overflow: "hidden",
					width: d.width,
					height: d.height
				}), s = a(l).addClass(d.railClass).css({
					width: d.size,
					height: "100%",
					position: "absolute",
					top: 0,
					display: d.alwaysVisible && d.railVisible ? "block" : "none",
					"border-radius": d.railBorderRadius,
					background: d.railColor,
					opacity: d.railOpacity,
					zIndex: 90
				}), u = a(l).addClass(d.barClass).css({
					background: d.color,
					width: d.size,
					position: "absolute",
					top: 0,
					opacity: d.opacity,
					display: d.alwaysVisible ? "block" : "none",
					"border-radius": d.borderRadius,
					BorderRadius: d.borderRadius,
					MozBorderRadius: d.borderRadius,
					WebkitBorderRadius: d.borderRadius,
					zIndex: 99
				}), v = "right" == d.position ? {
					right: d.distance
				} : {
					left: d.distance
				}, s.css(v), u.css(v), o.wrap(r), o.parent().append(u), o.parent().append(s), d.railDraggable && u.bind("mousedown", function(b) {
					var c = a(document);
					return f = !0, t = parseFloat(u.css("top")), pageY = b.pageY, c.bind("mousemove.slimscroll", function(a) {
						currTop = t + a.pageY - pageY, u.css("top", currTop), x(0, u.position().top, !1)
					}), c.bind("mouseup.slimscroll", function() {
						f = !1, B(), c.unbind(".slimscroll")
					}), !1
				}).bind("selectstart.slimscroll", function(a) {
					return a.stopPropagation(), a.preventDefault(), !1
				}), s.hover(function() {
					A()
				}, function() {
					B()
				}), u.hover(function() {
					e = !0
				}, function() {
					e = !1
				}), o.hover(function() {
					c = !0, A(), B()
				}, function() {
					c = !1, B()
				}), o.bind("touchstart", function(a) {
					a.originalEvent.touches.length && (h = a.originalEvent.touches[0].pageY)
				}), o.bind("touchmove", function(a) {
					if (n || a.originalEvent.preventDefault(), a.originalEvent.touches.length) {
						var b = (h - a.originalEvent.touches[0].pageY) / d.touchScrollStep;
						x(b, !0), h = a.originalEvent.touches[0].pageY
					}
				}), z(), "bottom" === d.start ? (u.css({
					top: o.outerHeight() - u.outerHeight()
				}), x(0, !0)) : "top" !== d.start && (x(a(d.start).position().top, null, !0), d.alwaysVisible || u.hide()), y()
			}), this
		}
	}), jQuery.fn.extend({
		slimscroll: jQuery.fn.slimScroll
	})
}(jQuery);