!

function(a) {

	var b = function() {

			var d = 65,

				f = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>',

				g = {

					eventName: "click",

					onShow: function() {},

					onBeforeShow: function() {},

					onHide: function() {},

					onChange: function() {},

					onSubmit: function() {},

					color: "ff0000",

					livePreview: !0,

					flat: !1

				},

				h = function(b, c) {

					var d = O(b);

					a(c).data("colorpicker").fields.eq(1).val(d.r).end().eq(2).val(d.g).end().eq(3).val(d.b).end()

				},

				i = function(b, c) {

					a(c).data("colorpicker").fields.eq(4).val(b.h).end().eq(5).val(b.s).end().eq(6).val(b.b).end()

				},

				j = function(b, c) {

					a(c).data("colorpicker").fields.eq(0).val(Q(b)).end()

				},

				k = function(b, c) {

					a(c).data("colorpicker").selector.css("backgroundColor", "#" + Q({

						h: b.h,

						s: 100,

						b: 100

					})), a(c).data("colorpicker").selectorIndic.css({

						left: parseInt(150 * b.s / 100, 10),

						top: parseInt(150 * (100 - b.b) / 100, 10)

					})

				},

				l = function(b, c) {

					a(c).data("colorpicker").hue.css("top", parseInt(150 - 150 * b.h / 360, 10))

				},

				m = function(b, c) {

					a(c).data("colorpicker").currentColor.css("backgroundColor", "#" + Q(b))

				},

				n = function(b, c) {

					a(c).data("colorpicker").newColor.css("backgroundColor", "#" + Q(b))

				},

				o = function(b) {

					var e, c = b.charCode || b.keyCode || -1;

					return c > d && 90 >= c || 32 == c ? !1 : (e = a(this).parent().parent(), e.data("colorpicker").livePreview === !0 && p.apply(this), void 0)

				},

				p = function(b) {

					var d, c = a(this).parent().parent();

					c.data("colorpicker").color = d = this.parentNode.className.indexOf("_hex") > 0 ? M(K(this.value)) : this.parentNode.className.indexOf("_hsb") > 0 ? I({

						h: parseInt(c.data("colorpicker").fields.eq(4).val(), 10),

						s: parseInt(c.data("colorpicker").fields.eq(5).val(), 10),

						b: parseInt(c.data("colorpicker").fields.eq(6).val(), 10)

					}) : N(J({

						r: parseInt(c.data("colorpicker").fields.eq(1).val(), 10),

						g: parseInt(c.data("colorpicker").fields.eq(2).val(), 10),

						b: parseInt(c.data("colorpicker").fields.eq(3).val(), 10)

					})), b && (h(d, c.get(0)), j(d, c.get(0)), i(d, c.get(0))), k(d, c.get(0)), l(d, c.get(0)), n(d, c.get(0)), c.data("colorpicker").onChange.apply(c, [d, Q(d), O(d), c.data("colorpicker").el])

				},

				q = function() {

					var c = a(this).parent().parent();

					c.data("colorpicker").fields.parent().removeClass("colorpicker_focus")

				},

				r = function() {

					d = this.parentNode.className.indexOf("_hex") > 0 ? 70 : 65, a(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus"), a(this).parent().addClass("colorpicker_focus")

				},

				s = function(b) {

					var c = a(this).parent().find("input").focus(),

						d = {

							el: a(this).parent().addClass("colorpicker_slider"),

							max: this.parentNode.className.indexOf("_hsb_h") > 0 ? 360 : this.parentNode.className.indexOf("_hsb") > 0 ? 100 : 255,

							y: b.pageY,

							field: c,

							val: parseInt(c.val(), 10),

							preview: a(this).parent().parent().data("colorpicker").livePreview

						};

					a(document).bind("mouseup", d, u), a(document).bind("mousemove", d, t)

				},

				t = function(a) {

					return a.data.field.val(Math.max(0, Math.min(a.data.max, parseInt(a.data.val + a.pageY - a.data.y, 10)))), a.data.preview && p.apply(a.data.field.get(0), [!0]), !1

				},

				u = function(b) {

					return p.apply(b.data.field.get(0), [!0]), b.data.el.removeClass("colorpicker_slider").find("input").focus(), a(document).unbind("mouseup", u), a(document).unbind("mousemove", t), !1

				},

				v = function() {

					var c = {

						cal: a(this).parent(),

						y: a(this).offset().top

					};

					c.preview = c.cal.data("colorpicker").livePreview, a(document).bind("mouseup", c, x), a(document).bind("mousemove", c, w)

				},

				w = function(a) {

					return p.apply(a.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360 * (150 - Math.max(0, Math.min(150, a.pageY - a.data.y))) / 150, 10)).get(0), [a.data.preview]), !1

				},

				x = function(b) {

					return h(b.data.cal.data("colorpicker").color, b.data.cal.get(0)), j(b.data.cal.data("colorpicker").color, b.data.cal.get(0)), a(document).unbind("mouseup", x), a(document).unbind("mousemove", w), !1

				},

				y = function() {

					var c = {

						cal: a(this).parent(),

						pos: a(this).offset()

					};

					c.preview = c.cal.data("colorpicker").livePreview, a(document).bind("mouseup", c, A), a(document).bind("mousemove", c, z)

				},

				z = function(a) {

					return p.apply(a.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100 * (150 - Math.max(0, Math.min(150, a.pageY - a.data.pos.top))) / 150, 10)).end().eq(5).val(parseInt(100 * Math.max(0, Math.min(150, a.pageX - a.data.pos.left)) / 150, 10)).get(0), [a.data.preview]), !1

				},

				A = function(b) {

					return h(b.data.cal.data("colorpicker").color, b.data.cal.get(0)), j(b.data.cal.data("colorpicker").color, b.data.cal.get(0)), a(document).unbind("mouseup", A), a(document).unbind("mousemove", z), !1

				},

				B = function() {

					a(this).addClass("colorpicker_focus")

				},

				C = function() {

					a(this).removeClass("colorpicker_focus")

				},

				D = function() {

					var c = a(this).parent(),

						d = c.data("colorpicker").color;

					c.data("colorpicker").origColor = d, m(d, c.get(0)), c.data("colorpicker").onSubmit(d, "#" + Q(d), O(d), c.data("colorpicker").el)

				},

				E = function() {

					var d, e, f, g, c = a("#collorpicker_junezx");

					return c.data("colorpicker").onBeforeShow.apply(this, [c.get(0)]), d = a(this).offset(), e = H(), f = d.top + this.offsetHeight, g = d.left, f + 176 > e.t + e.h && (f -= this.offsetHeight + 176), g + 356 > e.l + e.w && (g -= 356), c.css({

						left: g + "px",

						top: f + "px"

					}), 0 != c.data("colorpicker").onShow.apply(this, [c.get(0)]) && c.show(), a(document).bind("mousedown", {

						cal: c

					}, F), !1

				},

				F = function(b) {

					G(b.data.cal.get(0), b.target, b.data.cal.get(0)) || (0 != b.data.cal.data("colorpicker").onHide.apply(this, [b.data.cal.get(0)]) && b.data.cal.hide(), a(document).unbind("mousedown", F))

				},

				G = function(a, b, c) {

					if (a == b) return !0;

					if (a.contains) return a.contains(b);

					if (a.compareDocumentPosition) return !!(16 & a.compareDocumentPosition(b));

					for (var d = b.parentNode; d && d != c;) {

						if (d == a) return !0;

						d = d.parentNode

					}

					return !1

				},

				H = function() {

					var a = "CSS1Compat" == document.compatMode;

					return {

						l: window.pageXOffset || (a ? document.documentElement.scrollLeft : document.body.scrollLeft),

						t: window.pageYOffset || (a ? document.documentElement.scrollTop : document.body.scrollTop),

						w: window.innerWidth || (a ? document.documentElement.clientWidth : document.body.clientWidth),

						h: window.innerHeight || (a ? document.documentElement.clientHeight : document.body.clientHeight)

					}

				},

				I = function(a) {

					return {

						h: Math.min(360, Math.max(0, a.h)),

						s: Math.min(100, Math.max(0, a.s)),

						b: Math.min(100, Math.max(0, a.b))

					}

				},

				J = function(a) {

					return {

						r: Math.min(255, Math.max(0, a.r)),

						g: Math.min(255, Math.max(0, a.g)),

						b: Math.min(255, Math.max(0, a.b))

					}

				},

				K = function(a) {

					var c, d, b = 6 - a.length;

					if (b > 0) {

						for (c = [], d = 0; b > d; d++) c.push("0");

						c.push(a), a = c.join("")

					}

					return a

				},

				L = function(a) {

					var a = parseInt(a.indexOf("#") > -1 ? a.substring(1) : a, 16);

					return {

						r: a >> 16,

						g: (65280 & a) >> 8,

						b: 255 & a

					}

				},

				M = function(a) {

					return N(L(a))

				},

				N = function(a) {

					var b = {

						h: 0,

						s: 0,

						b: 0

					},

						c = Math.min(a.r, a.g, a.b),

						d = Math.max(a.r, a.g, a.b),

						e = d - c;

					return b.b = d, b.s = 0 != d ? 255 * e / d : 0, b.h = 0 != b.s ? a.r == d ? (a.g - a.b) / e : a.g == d ? 2 + (a.b - a.r) / e : 4 + (a.r - a.g) / e : -1, b.h *= 60, b.h < 0 && (b.h += 360), b.s *= 100 / 255, b.b *= 100 / 255, b

				},

				O = function(a) {

					var f, g, h, b = {},

						c = Math.round(a.h),

						d = Math.round(255 * a.s / 100),

						e = Math.round(255 * a.b / 100);

					return 0 == d ? b.r = b.g = b.b = e : (f = e, g = (255 - d) * e / 255, h = (f - g) * (c % 60) / 60, 360 == c && (c = 0), 60 > c ? (b.r = f, b.b = g, b.g = g + h) : 120 > c ? (b.g = f, b.b = g, b.r = f - h) : 180 > c ? (b.g = f, b.r = g, b.b = g + h) : 240 > c ? (b.b = f, b.r = g, b.g = f - h) : 300 > c ? (b.b = f, b.g = g, b.r = g + h) : 360 > c ? (b.r = f, b.g = g, b.b = f - h) : (b.r = 0, b.g = 0, b.b = 0)), {

						r: Math.round(b.r),

						g: Math.round(b.g),

						b: Math.round(b.b)

					}

				},

				P = function(b) {

					var c = [b.r.toString(16), b.g.toString(16), b.b.toString(16)];

					return a.each(c, function(a, b) {

						1 == b.length && (c[a] = "0" + b)

					}), c.join("")

				},

				Q = function(a) {

					return P(O(a))

				},

				R = function() {

					var b = a(this).parent(),

						c = b.data("colorpicker").origColor;

					b.data("colorpicker").color = c, h(c, b.get(0)), j(c, b.get(0)), i(c, b.get(0)), k(c, b.get(0)), l(c, b.get(0)), n(c, b.get(0))

				};

			return {

				init: function(b) {

					if (b = a.extend({}, g, b || {}), "string" == typeof b.color) b.color = M(b.color);

					else if (void 0 != b.color.r && void 0 != b.color.g && void 0 != b.color.b) b.color = N(b.color);

					else {

						if (void 0 == b.color.h || void 0 == b.color.s || void 0 == b.color.b) return this;

						b.color = I(b.color)

					}

					return this.each(function() {

						var c, d, e;

						a("#collorpicker_junezx").length < 1 ? (c = a.extend({}, b), c.origColor = b.color, d = "collorpicker_junezx", e = a(f).attr("id", d), e.appendTo(document.body), c.fields = e.find("input").bind("keyup", o).bind("change", p).bind("blur", q).bind("focus", r), e.find("span").bind("mousedown", s).end().find(">div.colorpicker_current_color").bind("click", R), c.selector = e.find("div.colorpicker_color").bind("mousedown", y), c.selectorIndic = c.selector.find("div div"), c.hue = e.find("div.colorpicker_hue div"), e.find("div.colorpicker_hue").bind("mousedown", v), c.newColor = e.find("div.colorpicker_new_color"), c.currentColor = e.find("div.colorpicker_current_color"), e.data("colorpicker", c), e.find("div.colorpicker_submit").bind("mouseenter", B).bind("mouseleave", C).bind("click", D), h(c.color, e.get(0)), i(c.color, e.get(0)), j(c.color, e.get(0)), l(c.color, e.get(0)), k(c.color, e.get(0)), m(c.color, e.get(0)), n(c.color, e.get(0)), a(this).hasClass("tColorPicker") || a(this).addClass("tColorPicker"), a("body").on(c.eventName, "input.tColorPicker", E)) : a(this).hasClass("tColorPicker") || a(this).addClass("tColorPicker")

					})

				},

				showPicker: function() {

					return this.each(function() {

						a("#collorpicker_junezx").length > 0 && E.apply(this)

					})

				},

				hidePicker: function() {

					return this.each(function() {

						a("#collorpicker_junezx").length > 0 && a("#collorpicker_junezx").hide()

					})

				},

				setColor: function(b) {

					if ("string" == typeof b) b = M(b);

					else if (void 0 != b.r && void 0 != b.g && void 0 != b.b) b = N(b);

					else {

						if (void 0 == b.h || void 0 == b.s || void 0 == b.b) return this;

						b = I(b)

					}

					return this.each(function() {

						if (a("#collorpicker_junezx").length > 0) {

							var c = a("#collorpicker_junezx");

							c.data("colorpicker").el = this, c.data("colorpicker").color = b, c.data("colorpicker").origColor = b, h(b, c.get(0)), i(b, c.get(0)), j(b, c.get(0)), l(b, c.get(0)), k(b, c.get(0)), m(b, c.get(0)), n(b, c.get(0))

						}

					})

				}

			}

		}();

	a.fn.extend({

		ColorPicker: b.init,

		ColorPickerHide: b.hidePicker,

		ColorPickerShow: b.showPicker,

		ColorPickerSetColor: b.setColor

	})

}(jQuery);