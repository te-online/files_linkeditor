var Pu = Object.defineProperty;
var es = (n) => {
  throw TypeError(n);
};
var Du = (n, e, r) => e in n ? Pu(n, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[e] = r;
var ce = (n, e, r) => Du(n, typeof e != "symbol" ? e + "" : e, r), Ai = (n, e, r) => e.has(n) || es("Cannot " + r);
var H = (n, e, r) => (Ai(n, e, "read from private field"), r ? r.call(n) : e.get(n)), Rt = (n, e, r) => e.has(n) ? es("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, r), Ve = (n, e, r, i) => (Ai(n, e, "write to private field"), i ? i.call(n, r) : e.set(n, r), r), mn = (n, e, r) => (Ai(n, e, "access private method"), r);
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
    return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
    i(o);
  new MutationObserver((o) => {
    for (const a of o)
      if (a.type === "childList")
        for (const l of a.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && i(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const a = {};
    return o.integrity && (a.integrity = o.integrity), o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? a.credentials = "include" : o.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
  }
  function i(o) {
    if (o.ep)
      return;
    o.ep = !0;
    const a = r(o);
    fetch(o.href, a);
  }
})();
function sn() {
}
function $u(n, e) {
  for (const r in e) n[r] = e[r];
  return (
    /** @type {T & S} */
    n
  );
}
function qa(n) {
  return n();
}
function ts() {
  return /* @__PURE__ */ Object.create(null);
}
function kt(n) {
  n.forEach(qa);
}
function Xa(n) {
  return typeof n == "function";
}
function an(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function ku(n) {
  return Object.keys(n).length === 0;
}
function Fu(n, e, r, i) {
  if (n) {
    const o = Ha(n, e, r, i);
    return n[0](o);
  }
}
function Ha(n, e, r, i) {
  return n[1] && i ? $u(r.ctx.slice(), n[1](i(e))) : r.ctx;
}
function Mu(n, e, r, i) {
  return n[2], e.dirty;
}
function Uu(n, e, r, i, o, a) {
  if (o) {
    const l = Ha(e, r, i, a);
    n.p(l, o);
  }
}
function Bu(n) {
  if (n.ctx.length > 32) {
    const e = [], r = n.ctx.length / 32;
    for (let i = 0; i < r; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
const Wr = globalThis || void 0 || self;
function V(n, e) {
  n.appendChild(e);
}
function se(n, e, r) {
  n.insertBefore(e, r || null);
}
function oe(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function Y(n) {
  return document.createElement(n);
}
function Re(n) {
  return document.createTextNode(n);
}
function fe() {
  return Re(" ");
}
function Ya() {
  return Re("");
}
function xe(n, e, r, i) {
  return n.addEventListener(e, r, i), () => n.removeEventListener(e, r, i);
}
function wt(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function j(n, e, r) {
  r == null ? n.removeAttribute(e) : n.getAttribute(e) !== r && n.setAttribute(e, r);
}
function ju(n) {
  return Array.from(n.childNodes);
}
function cr(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function In(n, e) {
  n.value = e ?? "";
}
function Dr(n, e, r, i) {
  r == null ? n.style.removeProperty(e) : n.style.setProperty(e, r, "");
}
let Cr;
function Or(n) {
  Cr = n;
}
function Za() {
  if (!Cr) throw new Error("Function called outside component initialization");
  return Cr;
}
function On(n) {
  Za().$$.on_mount.push(n);
}
function Sn(n) {
  Za().$$.on_destroy.push(n);
}
const er = [], ns = [];
let sr = [];
const rs = [], Gu = /* @__PURE__ */ Promise.resolve();
let no = !1;
function Wu() {
  no || (no = !0, Gu.then(Ka));
}
function ro(n) {
  sr.push(n);
}
const Oi = /* @__PURE__ */ new Set();
let Hn = 0;
function Ka() {
  if (Hn !== 0)
    return;
  const n = Cr;
  do {
    try {
      for (; Hn < er.length; ) {
        const e = er[Hn];
        Hn++, Or(e), Vu(e.$$);
      }
    } catch (e) {
      throw er.length = 0, Hn = 0, e;
    }
    for (Or(null), er.length = 0, Hn = 0; ns.length; ) ns.pop()();
    for (let e = 0; e < sr.length; e += 1) {
      const r = sr[e];
      Oi.has(r) || (Oi.add(r), r());
    }
    sr.length = 0;
  } while (er.length);
  for (; rs.length; )
    rs.pop()();
  no = !1, Oi.clear(), Or(n);
}
function Vu(n) {
  if (n.fragment !== null) {
    n.update(), kt(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(ro);
  }
}
function zu(n) {
  const e = [], r = [];
  sr.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : r.push(i)), r.forEach((i) => i()), sr = e;
}
const Jr = /* @__PURE__ */ new Set();
let kn;
function ar() {
  kn = {
    r: 0,
    c: [],
    p: kn
    // parent group
  };
}
function lr() {
  kn.r || kt(kn.c), kn = kn.p;
}
function Ne(n, e) {
  n && n.i && (Jr.delete(n), n.i(e));
}
function De(n, e, r, i) {
  if (n && n.o) {
    if (Jr.has(n)) return;
    Jr.add(n), kn.c.push(() => {
      Jr.delete(n), i && (r && n.d(1), i());
    }), n.o(e);
  } else i && i();
}
function qt(n) {
  n && n.c();
}
function Ft(n, e, r) {
  const { fragment: i, after_update: o } = n.$$;
  i && i.m(e, r), ro(() => {
    const a = n.$$.on_mount.map(qa).filter(Xa);
    n.$$.on_destroy ? n.$$.on_destroy.push(...a) : kt(a), n.$$.on_mount = [];
  }), o.forEach(ro);
}
function Mt(n, e) {
  const r = n.$$;
  r.fragment !== null && (zu(r.after_update), kt(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function qu(n, e) {
  n.$$.dirty[0] === -1 && (er.push(n), Wu(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function fn(n, e, r, i, o, a, l = null, f = [-1]) {
  const u = Cr;
  Or(n);
  const h = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: sn,
    not_equal: o,
    bound: ts(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: ts(),
    dirty: f,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  l && l(h.root);
  let s = !1;
  if (h.ctx = r ? r(n, e.props || {}, (d, m, ...y) => {
    const b = y.length ? y[0] : m;
    return h.ctx && o(h.ctx[d], h.ctx[d] = b) && (!h.skip_bound && h.bound[d] && h.bound[d](b), s && qu(n, d)), m;
  }) : [], h.update(), s = !0, kt(h.before_update), h.fragment = i ? i(h.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = ju(e.target);
      h.fragment && h.fragment.l(d), d.forEach(oe);
    } else
      h.fragment && h.fragment.c();
    e.intro && Ne(n.$$.fragment), Ft(n, e.target, e.anchor), Ka();
  }
  Or(u);
}
class hn {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ce(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ce(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Mt(this, 1), this.$destroy = sn;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, r) {
    if (!Xa(r))
      return sn;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(r), () => {
      const o = i.indexOf(r);
      o !== -1 && i.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !ku(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Xu = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Xu);
function Hu(n) {
  let e, r, i, o, a;
  const l = (
    /*#slots*/
    n[2].default
  ), f = Fu(
    l,
    n,
    /*$$scope*/
    n[1],
    null
  );
  return {
    c() {
      e = Y("div"), r = fe(), i = Y("div"), f && f.c(), j(e, "class", "linkeditor-oc-dialog-dim"), j(i, "class", o = `linkeditor-oc-dialog ${/*loading*/
      n[0] ? "icon-loading" : ""}`), Dr(i, "position", "fixed");
    },
    m(u, h) {
      se(u, e, h), se(u, r, h), se(u, i, h), f && f.m(i, null), a = !0;
    },
    p(u, [h]) {
      f && f.p && (!a || h & /*$$scope*/
      2) && Uu(
        f,
        l,
        u,
        /*$$scope*/
        u[1],
        a ? Mu(
          l,
          /*$$scope*/
          u[1],
          h,
          null
        ) : Bu(
          /*$$scope*/
          u[1]
        ),
        null
      ), (!a || h & /*loading*/
      1 && o !== (o = `linkeditor-oc-dialog ${/*loading*/
      u[0] ? "icon-loading" : ""}`)) && j(i, "class", o);
    },
    i(u) {
      a || (Ne(f, u), a = !0);
    },
    o(u) {
      De(f, u), a = !1;
    },
    d(u) {
      u && (oe(e), oe(r), oe(i)), f && f.d(u);
    }
  };
}
function Yu(n, e, r) {
  let { $$slots: i = {}, $$scope: o } = e, { loading: a = !1 } = e;
  return n.$$set = (l) => {
    "loading" in l && r(0, a = l.loading), "$$scope" in l && r(1, o = l.$$scope);
  }, [a, o, i];
}
class fr extends hn {
  constructor(e) {
    super(), fn(this, e, Yu, Hu, an, { loading: 0 });
  }
}
const Yn = [];
function Ja(n, e = sn) {
  let r;
  const i = /* @__PURE__ */ new Set();
  function o(f) {
    if (an(n, f) && (n = f, r)) {
      const u = !Yn.length;
      for (const h of i)
        h[1](), Yn.push(h, n);
      if (u) {
        for (let h = 0; h < Yn.length; h += 2)
          Yn[h][0](Yn[h + 1]);
        Yn.length = 0;
      }
    }
  }
  function a(f) {
    o(f(n));
  }
  function l(f, u = sn) {
    const h = [f, u];
    return i.add(h), i.size === 1 && (r = e(o, a) || sn), f(n), () => {
      i.delete(h), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: o, update: a, subscribe: l };
}
function bo(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Zu(n) {
  if (n.__esModule) return n;
  var e = n.default;
  if (typeof e == "function") {
    var r = function i() {
      return this instanceof i ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(n).forEach(function(i) {
    var o = Object.getOwnPropertyDescriptor(n, i);
    Object.defineProperty(r, i, o.get ? o : {
      enumerable: !0,
      get: function() {
        return n[i];
      }
    });
  }), r;
}
var _o = {}, dt = {};
Object.defineProperty(dt, "__esModule", { value: !0 });
dt.BLANK_URL = dt.relativeFirstCharacters = dt.urlSchemeRegex = dt.ctrlCharactersRegex = dt.htmlCtrlEntityRegex = dt.htmlEntitiesRegex = dt.invalidProtocolRegex = void 0;
dt.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
dt.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
dt.htmlCtrlEntityRegex = /&(newline|tab);/gi;
dt.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
dt.urlSchemeRegex = /^.+(:|&colon;)/gim;
dt.relativeFirstCharacters = [".", "/"];
dt.BLANK_URL = "about:blank";
Object.defineProperty(_o, "__esModule", { value: !0 });
var qe = _o.sanitizeUrl = void 0, Dt = dt;
function Ku(n) {
  return Dt.relativeFirstCharacters.indexOf(n[0]) > -1;
}
function Ju(n) {
  var e = n.replace(Dt.ctrlCharactersRegex, "");
  return e.replace(Dt.htmlEntitiesRegex, function(r, i) {
    return String.fromCharCode(i);
  });
}
function Qu(n) {
  if (!n)
    return Dt.BLANK_URL;
  var e, r = n;
  do
    r = Ju(r).replace(Dt.htmlCtrlEntityRegex, "").replace(Dt.ctrlCharactersRegex, "").trim(), e = r.match(Dt.ctrlCharactersRegex) || r.match(Dt.htmlEntitiesRegex) || r.match(Dt.htmlCtrlEntityRegex);
  while (e && e.length > 0);
  var i = r;
  if (!i)
    return Dt.BLANK_URL;
  if (Ku(i))
    return i;
  var o = i.match(Dt.urlSchemeRegex);
  if (!o)
    return i;
  var a = o[0];
  return Dt.invalidProtocolRegex.test(a) ? Dt.BLANK_URL : i;
}
qe = _o.sanitizeUrl = Qu;
function ec(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Qa = { exports: {} }, Xe = Qa.exports = {}, tn, nn;
function io() {
  throw new Error("setTimeout has not been defined");
}
function oo() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? tn = setTimeout : tn = io;
  } catch {
    tn = io;
  }
  try {
    typeof clearTimeout == "function" ? nn = clearTimeout : nn = oo;
  } catch {
    nn = oo;
  }
})();
function el(n) {
  if (tn === setTimeout)
    return setTimeout(n, 0);
  if ((tn === io || !tn) && setTimeout)
    return tn = setTimeout, setTimeout(n, 0);
  try {
    return tn(n, 0);
  } catch {
    try {
      return tn.call(null, n, 0);
    } catch {
      return tn.call(this, n, 0);
    }
  }
}
function tc(n) {
  if (nn === clearTimeout)
    return clearTimeout(n);
  if ((nn === oo || !nn) && clearTimeout)
    return nn = clearTimeout, clearTimeout(n);
  try {
    return nn(n);
  } catch {
    try {
      return nn.call(null, n);
    } catch {
      return nn.call(this, n);
    }
  }
}
var cn = [], ur = !1, Fn, Qr = -1;
function nc() {
  !ur || !Fn || (ur = !1, Fn.length ? cn = Fn.concat(cn) : Qr = -1, cn.length && tl());
}
function tl() {
  if (!ur) {
    var n = el(nc);
    ur = !0;
    for (var e = cn.length; e; ) {
      for (Fn = cn, cn = []; ++Qr < e; )
        Fn && Fn[Qr].run();
      Qr = -1, e = cn.length;
    }
    Fn = null, ur = !1, tc(n);
  }
}
Xe.nextTick = function(n) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      e[r - 1] = arguments[r];
  cn.push(new nl(n, e)), cn.length === 1 && !ur && el(tl);
};
function nl(n, e) {
  this.fun = n, this.array = e;
}
nl.prototype.run = function() {
  this.fun.apply(null, this.array);
};
Xe.title = "browser";
Xe.browser = !0;
Xe.env = {};
Xe.argv = [];
Xe.version = "";
Xe.versions = {};
function pn() {
}
Xe.on = pn;
Xe.addListener = pn;
Xe.once = pn;
Xe.off = pn;
Xe.removeListener = pn;
Xe.removeAllListeners = pn;
Xe.emit = pn;
Xe.prependListener = pn;
Xe.prependOnceListener = pn;
Xe.listeners = function(n) {
  return [];
};
Xe.binding = function(n) {
  throw new Error("process.binding is not supported");
};
Xe.cwd = function() {
  return "/";
};
Xe.chdir = function(n) {
  throw new Error("process.chdir is not supported");
};
Xe.umask = function() {
  return 0;
};
var rc = Qa.exports;
const Tt = /* @__PURE__ */ ec(rc), ic = typeof Tt == "object" && Tt.env && Tt.env.NODE_DEBUG && /\bsemver\b/i.test(Tt.env.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
};
var rl = ic;
const il = 256, oc = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, sc = 16, ac = il - 6;
var ol = {
  MAX_LENGTH: il,
  MAX_SAFE_COMPONENT_LENGTH: sc,
  MAX_SAFE_BUILD_LENGTH: ac,
  MAX_SAFE_INTEGER: oc
}, so = { exports: {} };
(function(n, e) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: r,
    MAX_SAFE_BUILD_LENGTH: i,
    MAX_LENGTH: o
  } = ol, a = rl;
  e = n.exports = {};
  const l = e.re = [], f = e.safeRe = [], u = e.src = [], h = e.safeSrc = [], s = e.t = {};
  let d = 0;
  const m = "[a-zA-Z0-9-]", y = [
    ["\\s", 1],
    ["\\d", o],
    [m, i]
  ], b = (T) => {
    for (const [S, C] of y)
      T = T.split(`${S}*`).join(`${S}{0,${C}}`).split(`${S}+`).join(`${S}{1,${C}}`);
    return T;
  }, E = (T, S, C) => {
    const x = b(S), R = d++;
    a(T, R, S), s[T] = R, u[R] = S, h[R] = x, l[R] = new RegExp(S, C ? "g" : void 0), f[R] = new RegExp(x, C ? "g" : void 0);
  };
  E("NUMERICIDENTIFIER", "0|[1-9]\\d*"), E("NUMERICIDENTIFIERLOOSE", "\\d+"), E("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${m}*`), E("MAINVERSION", `(${u[s.NUMERICIDENTIFIER]})\\.(${u[s.NUMERICIDENTIFIER]})\\.(${u[s.NUMERICIDENTIFIER]})`), E("MAINVERSIONLOOSE", `(${u[s.NUMERICIDENTIFIERLOOSE]})\\.(${u[s.NUMERICIDENTIFIERLOOSE]})\\.(${u[s.NUMERICIDENTIFIERLOOSE]})`), E("PRERELEASEIDENTIFIER", `(?:${u[s.NONNUMERICIDENTIFIER]}|${u[s.NUMERICIDENTIFIER]})`), E("PRERELEASEIDENTIFIERLOOSE", `(?:${u[s.NONNUMERICIDENTIFIER]}|${u[s.NUMERICIDENTIFIERLOOSE]})`), E("PRERELEASE", `(?:-(${u[s.PRERELEASEIDENTIFIER]}(?:\\.${u[s.PRERELEASEIDENTIFIER]})*))`), E("PRERELEASELOOSE", `(?:-?(${u[s.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[s.PRERELEASEIDENTIFIERLOOSE]})*))`), E("BUILDIDENTIFIER", `${m}+`), E("BUILD", `(?:\\+(${u[s.BUILDIDENTIFIER]}(?:\\.${u[s.BUILDIDENTIFIER]})*))`), E("FULLPLAIN", `v?${u[s.MAINVERSION]}${u[s.PRERELEASE]}?${u[s.BUILD]}?`), E("FULL", `^${u[s.FULLPLAIN]}$`), E("LOOSEPLAIN", `[v=\\s]*${u[s.MAINVERSIONLOOSE]}${u[s.PRERELEASELOOSE]}?${u[s.BUILD]}?`), E("LOOSE", `^${u[s.LOOSEPLAIN]}$`), E("GTLT", "((?:<|>)?=?)"), E("XRANGEIDENTIFIERLOOSE", `${u[s.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), E("XRANGEIDENTIFIER", `${u[s.NUMERICIDENTIFIER]}|x|X|\\*`), E("XRANGEPLAIN", `[v=\\s]*(${u[s.XRANGEIDENTIFIER]})(?:\\.(${u[s.XRANGEIDENTIFIER]})(?:\\.(${u[s.XRANGEIDENTIFIER]})(?:${u[s.PRERELEASE]})?${u[s.BUILD]}?)?)?`), E("XRANGEPLAINLOOSE", `[v=\\s]*(${u[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[s.XRANGEIDENTIFIERLOOSE]})(?:${u[s.PRERELEASELOOSE]})?${u[s.BUILD]}?)?)?`), E("XRANGE", `^${u[s.GTLT]}\\s*${u[s.XRANGEPLAIN]}$`), E("XRANGELOOSE", `^${u[s.GTLT]}\\s*${u[s.XRANGEPLAINLOOSE]}$`), E("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), E("COERCE", `${u[s.COERCEPLAIN]}(?:$|[^\\d])`), E("COERCEFULL", u[s.COERCEPLAIN] + `(?:${u[s.PRERELEASE]})?(?:${u[s.BUILD]})?(?:$|[^\\d])`), E("COERCERTL", u[s.COERCE], !0), E("COERCERTLFULL", u[s.COERCEFULL], !0), E("LONETILDE", "(?:~>?)"), E("TILDETRIM", `(\\s*)${u[s.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", E("TILDE", `^${u[s.LONETILDE]}${u[s.XRANGEPLAIN]}$`), E("TILDELOOSE", `^${u[s.LONETILDE]}${u[s.XRANGEPLAINLOOSE]}$`), E("LONECARET", "(?:\\^)"), E("CARETTRIM", `(\\s*)${u[s.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", E("CARET", `^${u[s.LONECARET]}${u[s.XRANGEPLAIN]}$`), E("CARETLOOSE", `^${u[s.LONECARET]}${u[s.XRANGEPLAINLOOSE]}$`), E("COMPARATORLOOSE", `^${u[s.GTLT]}\\s*(${u[s.LOOSEPLAIN]})$|^$`), E("COMPARATOR", `^${u[s.GTLT]}\\s*(${u[s.FULLPLAIN]})$|^$`), E("COMPARATORTRIM", `(\\s*)${u[s.GTLT]}\\s*(${u[s.LOOSEPLAIN]}|${u[s.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", E("HYPHENRANGE", `^\\s*(${u[s.XRANGEPLAIN]})\\s+-\\s+(${u[s.XRANGEPLAIN]})\\s*$`), E("HYPHENRANGELOOSE", `^\\s*(${u[s.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[s.XRANGEPLAINLOOSE]})\\s*$`), E("STAR", "(<|>)?=?\\s*\\*"), E("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), E("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(so, so.exports);
var lc = so.exports;
const uc = Object.freeze({ loose: !0 }), cc = Object.freeze({}), fc = (n) => n ? typeof n != "object" ? uc : n : cc;
var hc = fc;
const is = /^[0-9]+$/, pc = (n, e) => {
  if (typeof n == "number" && typeof e == "number")
    return n === e ? 0 : n < e ? -1 : 1;
  const r = is.test(n), i = is.test(e);
  return r && i && (n = +n, e = +e), n === e ? 0 : r && !i ? -1 : i && !r ? 1 : n < e ? -1 : 1;
};
var dc = {
  compareIdentifiers: pc
};
const Vr = rl, { MAX_LENGTH: os, MAX_SAFE_INTEGER: zr } = ol, { safeRe: qr, t: Xr } = lc, mc = hc, { compareIdentifiers: Si } = dc;
let gc = class en {
  constructor(e, r) {
    if (r = mc(r), e instanceof en) {
      if (e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
    if (e.length > os)
      throw new TypeError(
        `version is longer than ${os} characters`
      );
    Vr("SemVer", e, r), this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease;
    const i = e.trim().match(r.loose ? qr[Xr.LOOSE] : qr[Xr.FULL]);
    if (!i)
      throw new TypeError(`Invalid Version: ${e}`);
    if (this.raw = e, this.major = +i[1], this.minor = +i[2], this.patch = +i[3], this.major > zr || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > zr || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > zr || this.patch < 0)
      throw new TypeError("Invalid patch version");
    i[4] ? this.prerelease = i[4].split(".").map((o) => {
      if (/^[0-9]+$/.test(o)) {
        const a = +o;
        if (a >= 0 && a < zr)
          return a;
      }
      return o;
    }) : this.prerelease = [], this.build = i[5] ? i[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(e) {
    if (Vr("SemVer.compare", this.version, this.options, e), !(e instanceof en)) {
      if (typeof e == "string" && e === this.version)
        return 0;
      e = new en(e, this.options);
    }
    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
  }
  compareMain(e) {
    return e instanceof en || (e = new en(e, this.options)), this.major < e.major ? -1 : this.major > e.major ? 1 : this.minor < e.minor ? -1 : this.minor > e.minor ? 1 : this.patch < e.patch ? -1 : this.patch > e.patch ? 1 : 0;
  }
  comparePre(e) {
    if (e instanceof en || (e = new en(e, this.options)), this.prerelease.length && !e.prerelease.length)
      return -1;
    if (!this.prerelease.length && e.prerelease.length)
      return 1;
    if (!this.prerelease.length && !e.prerelease.length)
      return 0;
    let r = 0;
    do {
      const i = this.prerelease[r], o = e.prerelease[r];
      if (Vr("prerelease compare", r, i, o), i === void 0 && o === void 0)
        return 0;
      if (o === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === o)
        continue;
      return Si(i, o);
    } while (++r);
  }
  compareBuild(e) {
    e instanceof en || (e = new en(e, this.options));
    let r = 0;
    do {
      const i = this.build[r], o = e.build[r];
      if (Vr("build compare", r, i, o), i === void 0 && o === void 0)
        return 0;
      if (o === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === o)
        continue;
      return Si(i, o);
    } while (++r);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(e, r, i) {
    if (e.startsWith("pre")) {
      if (!r && i === !1)
        throw new Error("invalid increment argument: identifier is empty");
      if (r) {
        const o = `-${r}`.match(this.options.loose ? qr[Xr.PRERELEASELOOSE] : qr[Xr.PRERELEASE]);
        if (!o || o[1] !== r)
          throw new Error(`invalid identifier: ${r}`);
      }
    }
    switch (e) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", r, i);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", r, i);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", r, i), this.inc("pre", r, i);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", r, i), this.inc("pre", r, i);
        break;
      case "release":
        if (this.prerelease.length === 0)
          throw new Error(`version ${this.raw} is not a prerelease`);
        this.prerelease.length = 0;
        break;
      case "major":
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      case "pre": {
        const o = Number(i) ? 1 : 0;
        if (this.prerelease.length === 0)
          this.prerelease = [o];
        else {
          let a = this.prerelease.length;
          for (; --a >= 0; )
            typeof this.prerelease[a] == "number" && (this.prerelease[a]++, a = -2);
          if (a === -1) {
            if (r === this.prerelease.join(".") && i === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(o);
          }
        }
        if (r) {
          let a = [r, o];
          i === !1 && (a = [r]), Si(this.prerelease[0], r) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = a) : this.prerelease = a;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${e}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var sl = gc;
const Ec = sl, wc = (n, e) => new Ec(n, e).major;
var yc = wc;
const ss = /* @__PURE__ */ bo(yc), as = sl, vc = (n, e, r = !1) => {
  if (n instanceof as)
    return n;
  try {
    return new as(n, e);
  } catch (i) {
    if (!r)
      return null;
    throw i;
  }
};
var bc = vc;
const _c = bc, Tc = (n, e) => {
  const r = _c(n, e);
  return r ? r.version : null;
};
var Nc = Tc;
const Ic = /* @__PURE__ */ bo(Nc);
/*!
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
class Ac {
  constructor(e) {
    ce(this, "bus");
    typeof e.getVersion != "function" || !Ic(e.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : ss(e.getVersion()) !== ss(this.getVersion()) && console.warn(
      "Proxying an event bus of version " + e.getVersion() + " with " + this.getVersion()
    ), this.bus = e;
  }
  getVersion() {
    return "3.3.3";
  }
  subscribe(e, r) {
    this.bus.subscribe(e, r);
  }
  unsubscribe(e, r) {
    this.bus.unsubscribe(e, r);
  }
  emit(e, ...r) {
    this.bus.emit(e, ...r);
  }
}
/*!
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
class Oc {
  constructor() {
    ce(this, "handlers", /* @__PURE__ */ new Map());
  }
  getVersion() {
    return "3.3.3";
  }
  subscribe(e, r) {
    this.handlers.set(
      e,
      (this.handlers.get(e) || []).concat(
        r
      )
    );
  }
  unsubscribe(e, r) {
    this.handlers.set(
      e,
      (this.handlers.get(e) || []).filter((i) => i !== r)
    );
  }
  emit(e, ...r) {
    (this.handlers.get(e) || []).forEach((o) => {
      try {
        o(r[0]);
      } catch (a) {
        console.error("could not invoke event listener", a);
      }
    });
  }
}
/*!
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
let Er = null;
function al() {
  var n;
  return Er !== null ? Er : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : ((n = window.OC) != null && n._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof (window == null ? void 0 : window._nc_event_bus) < "u" ? Er = new Ac(window._nc_event_bus) : Er = window._nc_event_bus = new Oc(), Er);
}
function Sc(n, e) {
  al().subscribe(n, e);
}
function ll(n, ...e) {
  al().emit(n, ...e);
}
const or = class or {
  constructor(e, r, i) {
    ce(this, "scope");
    ce(this, "wrapped");
    this.scope = `${i ? or.GLOBAL_SCOPE_PERSISTENT : or.GLOBAL_SCOPE_VOLATILE}_${btoa(e)}_`, this.wrapped = r;
  }
  scopeKey(e) {
    return `${this.scope}${e}`;
  }
  setItem(e, r) {
    this.wrapped.setItem(this.scopeKey(e), r);
  }
  getItem(e) {
    return this.wrapped.getItem(this.scopeKey(e));
  }
  removeItem(e) {
    this.wrapped.removeItem(this.scopeKey(e));
  }
  clear() {
    Object.keys(this.wrapped).filter((e) => e.startsWith(this.scope)).map(this.wrapped.removeItem.bind(this.wrapped));
  }
};
ce(or, "GLOBAL_SCOPE_VOLATILE", "nextcloud_vol"), ce(or, "GLOBAL_SCOPE_PERSISTENT", "nextcloud_per");
let ao = or;
class Rc {
  constructor(e) {
    ce(this, "appId");
    ce(this, "persisted", !1);
    ce(this, "clearedOnLogout", !1);
    this.appId = e;
  }
  persist(e = !0) {
    return this.persisted = e, this;
  }
  clearOnLogout(e = !0) {
    return this.clearedOnLogout = e, this;
  }
  build() {
    return new ao(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function Cc(n) {
  return new Rc(n);
}
let Sr;
const ul = [];
function cl() {
  return Sr === void 0 && (Sr = document.head.dataset.requesttoken ?? null), Sr;
}
function fl(n) {
  ul.push(n);
}
Sc("csrf-token-update", (n) => {
  Sr = n.token, ul.forEach((e) => {
    try {
      e(Sr);
    } catch (r) {
      console.error("Error updating CSRF token observer", r);
    }
  });
});
/*!
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
Cc("public").persist().build();
let Zn;
function ls(n, e) {
  return n ? n.getAttribute(e) : null;
}
function $r() {
  if (Zn !== void 0)
    return Zn;
  const n = document == null ? void 0 : document.getElementsByTagName("head")[0];
  if (!n)
    return null;
  const e = ls(n, "data-user");
  return e === null ? (Zn = null, Zn) : (Zn = {
    uid: e,
    displayName: ls(n, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Zn);
}
var Ye = /* @__PURE__ */ ((n) => (n[n.Debug = 0] = "Debug", n[n.Info = 1] = "Info", n[n.Warn = 2] = "Warn", n[n.Error = 3] = "Error", n[n.Fatal = 4] = "Fatal", n))(Ye || {});
class Lc {
  constructor(e) {
    ce(this, "context");
    this.context = e || {};
  }
  formatMessage(e, r, i) {
    let o = "[" + Ye[r].toUpperCase() + "] ";
    return i && i.app && (o += i.app + ": "), typeof e == "string" ? o + e : (o += `Unexpected ${e.name}`, e.message && (o += ` "${e.message}"`), r === Ye.Debug && e.stack && (o += `

Stack trace:
${e.stack}`), o);
  }
  log(e, r, i) {
    var o, a;
    if (!(typeof ((o = this.context) == null ? void 0 : o.level) == "number" && e < ((a = this.context) == null ? void 0 : a.level)))
      switch (typeof r == "object" && (i == null ? void 0 : i.error) === void 0 && (i.error = r), e) {
        case Ye.Debug:
          console.debug(this.formatMessage(r, Ye.Debug, i), i);
          break;
        case Ye.Info:
          console.info(this.formatMessage(r, Ye.Info, i), i);
          break;
        case Ye.Warn:
          console.warn(this.formatMessage(r, Ye.Warn, i), i);
          break;
        case Ye.Error:
          console.error(this.formatMessage(r, Ye.Error, i), i);
          break;
        case Ye.Fatal:
        default:
          console.error(this.formatMessage(r, Ye.Fatal, i), i);
          break;
      }
  }
  debug(e, r) {
    this.log(Ye.Debug, e, Object.assign({}, this.context, r));
  }
  info(e, r) {
    this.log(Ye.Info, e, Object.assign({}, this.context, r));
  }
  warn(e, r) {
    this.log(Ye.Warn, e, Object.assign({}, this.context, r));
  }
  error(e, r) {
    this.log(Ye.Error, e, Object.assign({}, this.context, r));
  }
  fatal(e, r) {
    this.log(Ye.Fatal, e, Object.assign({}, this.context, r));
  }
}
function xc(n) {
  return new Lc(n);
}
class Pc {
  constructor(e) {
    ce(this, "context");
    ce(this, "factory");
    this.context = {}, this.factory = e;
  }
  /**
   * Set the app name within the logging context
   *
   * @param appId App name
   */
  setApp(e) {
    return this.context.app = e, this;
  }
  /**
   * Set the logging level within the logging context
   *
   * @param level Logging level
   */
  setLogLevel(e) {
    return this.context.level = e, this;
  }
  /* eslint-disable jsdoc/no-undefined-types */
  /**
   * Set the user id within the logging context
   * @param uid User ID
   * @see {@link detectUser}
   */
  /* eslint-enable jsdoc/no-undefined-types */
  setUid(e) {
    return this.context.uid = e, this;
  }
  /**
   * Detect the currently logged in user and set the user id within the logging context
   */
  detectUser() {
    const e = $r();
    return e !== null && (this.context.uid = e.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const e = this, r = () => {
      var i;
      document.readyState === "complete" || document.readyState === "interactive" ? (e.context.level = ((i = window._oc_config) == null ? void 0 : i.loglevel) ?? Ye.Warn, window._oc_debug && (e.context.level = Ye.Debug), document.removeEventListener("readystatechange", r)) : document.addEventListener("readystatechange", r);
    };
    return r(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function hl() {
  return new Pc(xc);
}
function lo(n) {
  return n && n.split("/").map(encodeURIComponent).join("/");
}
function To(n, e) {
  return n = n.replace(/\\/g, "/").replace(/\/+$/g, "").replace(/.*\//, ""), n;
}
function nr(n) {
  n = n.replaceAll(/\\/g, "/");
  const e = n.split("/");
  return e.length <= 1 ? "." : (e.pop(), e.length === 1 && e[0] === "" ? "/" : e.join("/"));
}
function pl(n) {
  const e = To(n), r = e.lastIndexOf(".");
  return r > 0 ? e.substring(r) : "";
}
function dl(...n) {
  if (arguments.length < 1)
    return "";
  const e = n.filter((u) => u.length > 0);
  if (e.length < 1)
    return "";
  const r = e[e.length - 1], i = e[0].charAt(0) === "/", o = r.charAt(r.length - 1) === "/", a = e.reduce((u, h) => u.concat(h.split("/")), []);
  let l = !i;
  const f = a.reduce((u, h) => h === "" ? u : l ? (l = !1, u + h) : u + "/" + h, "");
  return o ? f + "/" : f;
}
window._nc_files_scope ?? (window._nc_files_scope = {});
var Ga;
(Ga = window._nc_files_scope).v4_0 ?? (Ga.v4_0 = {});
const Ge = window._nc_files_scope.v4_0, ml = hl().setApp("@nextcloud/files").detectUser().build(), gl = Object.freeze({
  Folder: "folder",
  File: "file"
}), mt = Object.freeze({
  /**
   * No permissions granted
   */
  NONE: 0,
  /**
   * Can read the file content
   */
  READ: 1,
  /**
   * Can modify the file itself (move, rename, etc)
   */
  UPDATE: 2,
  /**
   * Can create new files/folders inside a folder
   */
  CREATE: 4,
  /**
   * Can change the file content
   */
  WRITE: 4,
  /**
   * Can delete the node
   */
  DELETE: 8,
  /**
   * Can share the node
   */
  SHARE: 16,
  /**
   * All permissions are granted
   */
  ALL: 31
}), El = Object.freeze({
  /** This is a new node and it doesn't exists on the filesystem yet */
  NEW: "new",
  /** This node has failed and is unavailable  */
  FAILED: "failed",
  /** This node is currently loading or have an operation in progress */
  LOADING: "loading",
  /** This node is locked and cannot be modified */
  LOCKED: "locked"
});
function wl(n, e) {
  return n.match(e) !== null;
}
function gn(n, e) {
  if (n.id && typeof n.id != "number" && typeof n.id != "string")
    throw new Error("Invalid id type of value");
  if (!n.source)
    throw new Error("Missing mandatory source");
  try {
    new URL(n.source);
  } catch {
    throw new Error("Invalid source format, source must be a valid URL");
  }
  if (!n.source.startsWith("http"))
    throw new Error("Invalid source format, only http(s) is supported");
  if (!n.root)
    throw new Error("Missing mandatory root");
  if (typeof n.root != "string")
    throw new Error("Invalid root type");
  if (!n.root.startsWith("/"))
    throw new Error("Root must start with a leading slash");
  if (!n.source.includes(n.root))
    throw new Error("Root must be part of the source");
  if (wl(n.source, e)) {
    const r = n.source.match(e)[0];
    if (!n.source.includes(dl(r, n.root)))
      throw new Error("The root must be relative to the service. e.g /files/emma");
  }
  if (n.displayname && typeof n.displayname != "string")
    throw new Error("Invalid displayname type");
  if (n.mtime && !(n.mtime instanceof Date))
    throw new Error("Invalid mtime type");
  if (n.crtime && !(n.crtime instanceof Date))
    throw new Error("Invalid crtime type");
  if (!n.mime || typeof n.mime != "string" || !n.mime.match(/^[-\w.]+\/[-+\w.]+$/gi))
    throw new Error("Missing or invalid mandatory mime");
  if ("size" in n && typeof n.size != "number" && n.size !== void 0)
    throw new Error("Invalid size type");
  if ("permissions" in n && n.permissions !== void 0 && !(typeof n.permissions == "number" && n.permissions >= mt.NONE && n.permissions <= mt.ALL))
    throw new Error("Invalid permissions");
  if (n.owner && n.owner !== null && typeof n.owner != "string")
    throw new Error("Invalid owner type");
  if (n.attributes && typeof n.attributes != "object")
    throw new Error("Invalid attributes type");
  if (n.status && !Object.values(El).includes(n.status))
    throw new Error("Status must be a valid NodeStatus");
}
function Dc(n) {
  n.mtime && typeof n.mtime == "string" && !isNaN(Date.parse(n.mtime)) && JSON.stringify(new Date(n.mtime)) === JSON.stringify(n.mtime) && (n.mtime = new Date(n.mtime)), n.crtime && typeof n.crtime == "string" && !isNaN(Date.parse(n.crtime)) && JSON.stringify(new Date(n.crtime)) === JSON.stringify(n.crtime) && (n.crtime = new Date(n.crtime));
}
function $c(n) {
  if (n instanceof RegExp)
    return n;
  const e = n.match(/(\/?)(.+)\1([a-z]*)/i);
  if (!e)
    throw new Error("Invalid regular expression format.");
  const r = Array.from(new Set(e[3])).filter((i) => "gimsuy".includes(i)).join("");
  return new RegExp(e[2], r);
}
let yl = class vl {
  constructor(...[e, r]) {
    ce(this, "_attributes");
    ce(this, "_data");
    ce(this, "_knownDavService", /(remote|public)\.php\/(web)?dav/i);
    ce(this, "readonlyAttributes", Object.entries(Object.getOwnPropertyDescriptors(vl.prototype)).filter((e) => typeof e[1].get == "function" && e[0] !== "__proto__").map((e) => e[0]));
    ce(this, "handler", {
      set: (e, r, i) => this.readonlyAttributes.includes(r) ? !1 : Reflect.set(e, r, i),
      deleteProperty: (e, r) => this.readonlyAttributes.includes(r) ? !1 : Reflect.deleteProperty(e, r)
    });
    e.mime || (e.mime = "application/octet-stream"), Dc(e), r = $c(r || this._knownDavService), gn(e, r), this._data = {
      ...e,
      attributes: {}
    }, this._attributes = new Proxy(this._data.attributes, this.handler), this.update(e.attributes ?? {}), r && (this._knownDavService = r);
  }
  /**
   * Get the source url to this object
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get source() {
    return this._data.source.replace(/\/$/i, "");
  }
  /**
   * Get the encoded source url to this object for requests purposes
   */
  get encodedSource() {
    const { origin: e } = new URL(this.source);
    return e + lo(this.source.slice(e.length));
  }
  /**
   * Get this object name
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get basename() {
    return To(this.source);
  }
  /**
   * The nodes displayname
   * By default the display name and the `basename` are identical,
   * but it is possible to have a different name. This happens
   * on the files app for example for shared folders.
   */
  get displayname() {
    return this._data.displayname || this.basename;
  }
  /**
   * Set the displayname
   */
  set displayname(e) {
    gn({ ...this._data, displayname: e }, this._knownDavService), this._data.displayname = e;
  }
  /**
   * Get this object's extension
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get extension() {
    return pl(this.source);
  }
  /**
   * Get the directory path leading to this object
   * Will use the relative path to root if available
   *
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get dirname() {
    return nr(this.path);
  }
  /**
   * Get the file mime
   */
  get mime() {
    return this._data.mime || "application/octet-stream";
  }
  /**
   * Set the file mime
   * Removing the mime type will set it to `application/octet-stream`
   */
  set mime(e) {
    e ?? (e = "application/octet-stream"), gn({ ...this._data, mime: e }, this._knownDavService), this._data.mime = e;
  }
  /**
   * Get the file modification time
   */
  get mtime() {
    return this._data.mtime;
  }
  /**
   * Set the file modification time
   */
  set mtime(e) {
    gn({ ...this._data, mtime: e }, this._knownDavService), this._data.mtime = e;
  }
  /**
   * Get the file creation time
   * There is no setter as the creation time is not meant to be changed
   */
  get crtime() {
    return this._data.crtime;
  }
  /**
   * Get the file size
   */
  get size() {
    return this._data.size;
  }
  /**
   * Set the file size
   */
  set size(e) {
    gn({ ...this._data, size: e }, this._knownDavService), this.updateMtime(), this._data.size = e;
  }
  /**
   * Get the file attribute
   * This contains all additional attributes not provided by the Node class
   */
  get attributes() {
    return this._attributes;
  }
  /**
   * Get the file permissions
   */
  get permissions() {
    return this.owner === null && !this.isDavResource ? mt.READ : this._data.permissions !== void 0 ? this._data.permissions : mt.NONE;
  }
  /**
   * Set the file permissions
   */
  set permissions(e) {
    gn({ ...this._data, permissions: e }, this._knownDavService), this.updateMtime(), this._data.permissions = e;
  }
  /**
   * Get the file owner
   * There is no setter as the owner is not meant to be changed
   */
  get owner() {
    return this.isDavResource ? this._data.owner : null;
  }
  /**
   * Is this a dav-related resource ?
   */
  get isDavResource() {
    return wl(this.source, this._knownDavService);
  }
  /**
   * Get the dav root of this object
   * There is no setter as the root is not meant to be changed
   */
  get root() {
    return this._data.root.replace(/^(.+)\/$/, "$1");
  }
  /**
   * Get the absolute path of this object relative to the root
   */
  get path() {
    const e = this.source.indexOf("://"), r = this.source.slice(0, e), i = this.source.slice(e + 3), o = i.indexOf("/"), a = i.slice(0, o), l = i.slice(o), f = `${r}://${a}${lo(l)}`, u = new URL(f);
    let h = decodeURIComponent(u.pathname);
    this.isDavResource && (h = h.split(this._knownDavService).pop());
    const s = h.indexOf(this.root), d = this.root.replace(/\/$/, "");
    return h.slice(s + d.length) || "/";
  }
  /**
   * Get the nodes file id if defined.
   * There is no setter as the fileid is not meant to be changed.
   *
   * @deprecated Nextcloud is migrating to snowflake ids which are strings. Use the `id` attribute instead.
   */
  get fileid() {
    var e;
    return typeof ((e = this._data) == null ? void 0 : e.id) == "number" ? this._data.id : void 0;
  }
  /**
   * Get the nodes id - if defined.
   *
   * Note: As Nextcloud is migrating to snowflake ids the id has to be a string,
   * due to limitations of the JavaScript number type (snowflake ids are 64bit JavaScript numbers can only accurately represent integers up to 53 bit).
   */
  get id() {
    var e;
    if (!(typeof ((e = this._data) == null ? void 0 : e.id) > "u" || typeof this._data.id == "number" && this._data.id < 0))
      return String(this._data.id);
  }
  /**
   * Get the node status.
   */
  get status() {
    var e;
    return (e = this._data) == null ? void 0 : e.status;
  }
  /**
   * Set the node status.
   */
  set status(e) {
    gn({ ...this._data, status: e }, this._knownDavService), this._data.status = e;
  }
  /**
   * Move the node to a new destination
   *
   * @param destination the new source.
   * e.g. https://cloud.domain.com/remote.php/dav/files/emma/Photos/picture.jpg
   */
  move(e) {
    gn({ ...this._data, source: e }, this._knownDavService);
    const r = this.basename;
    this._data.source = e, this.displayname === r && this.basename !== r && (this.displayname = this.basename);
  }
  /**
   * Rename the node
   * This aliases the move method for easier usage
   *
   * @param basename The new name of the node
   */
  rename(e) {
    if (e.includes("/"))
      throw new Error("Invalid basename");
    this.move(nr(this.source) + "/" + e);
  }
  /**
   * Update the mtime if exists
   */
  updateMtime() {
    this._data.mtime && (this._data.mtime = /* @__PURE__ */ new Date());
  }
  /**
   * Update the attributes of the node
   * Warning, updating attributes will NOT automatically update the mtime.
   *
   * @param attributes The new attributes to update on the Node attributes
   */
  update(e) {
    for (const [r, i] of Object.entries(e))
      try {
        i === void 0 ? delete this.attributes[r] : this.attributes[r] = i;
      } catch (o) {
        if (o instanceof TypeError)
          continue;
        throw o;
      }
  }
  /**
   * Returns a clone of the node
   */
  clone() {
    return new this.constructor(structuredClone(this._data), this._knownDavService);
  }
  /**
   * JSON representation of the node
   */
  toJSON() {
    return JSON.stringify([structuredClone(this._data), this._knownDavService.toString()]);
  }
}, kc = class extends yl {
  constructor(...[e, r]) {
    super(e, r);
  }
  get type() {
    return gl.File;
  }
}, Fc = class extends yl {
  constructor(...[e, r]) {
    super({
      ...e,
      mime: "httpd/unix-directory"
    }, r);
  }
  get type() {
    return gl.Folder;
  }
  get extension() {
    return null;
  }
  get mime() {
    return "httpd/unix-directory";
  }
};
var Mc = class extends EventTarget {
  dispatchTypedEvent(e, r) {
    return super.dispatchEvent(r);
  }
}, et = {}, fi = {};
fi.byteLength = jc;
fi.toByteArray = Wc;
fi.fromByteArray = qc;
var on = [], Wt = [], Uc = typeof Uint8Array < "u" ? Uint8Array : Array, Ri = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Kn = 0, Bc = Ri.length; Kn < Bc; ++Kn)
  on[Kn] = Ri[Kn], Wt[Ri.charCodeAt(Kn)] = Kn;
Wt[45] = 62;
Wt[95] = 63;
function bl(n) {
  var e = n.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = n.indexOf("=");
  r === -1 && (r = e);
  var i = r === e ? 0 : 4 - r % 4;
  return [r, i];
}
function jc(n) {
  var e = bl(n), r = e[0], i = e[1];
  return (r + i) * 3 / 4 - i;
}
function Gc(n, e, r) {
  return (e + r) * 3 / 4 - r;
}
function Wc(n) {
  var e, r = bl(n), i = r[0], o = r[1], a = new Uc(Gc(n, i, o)), l = 0, f = o > 0 ? i - 4 : i, u;
  for (u = 0; u < f; u += 4)
    e = Wt[n.charCodeAt(u)] << 18 | Wt[n.charCodeAt(u + 1)] << 12 | Wt[n.charCodeAt(u + 2)] << 6 | Wt[n.charCodeAt(u + 3)], a[l++] = e >> 16 & 255, a[l++] = e >> 8 & 255, a[l++] = e & 255;
  return o === 2 && (e = Wt[n.charCodeAt(u)] << 2 | Wt[n.charCodeAt(u + 1)] >> 4, a[l++] = e & 255), o === 1 && (e = Wt[n.charCodeAt(u)] << 10 | Wt[n.charCodeAt(u + 1)] << 4 | Wt[n.charCodeAt(u + 2)] >> 2, a[l++] = e >> 8 & 255, a[l++] = e & 255), a;
}
function Vc(n) {
  return on[n >> 18 & 63] + on[n >> 12 & 63] + on[n >> 6 & 63] + on[n & 63];
}
function zc(n, e, r) {
  for (var i, o = [], a = e; a < r; a += 3)
    i = (n[a] << 16 & 16711680) + (n[a + 1] << 8 & 65280) + (n[a + 2] & 255), o.push(Vc(i));
  return o.join("");
}
function qc(n) {
  for (var e, r = n.length, i = r % 3, o = [], a = 16383, l = 0, f = r - i; l < f; l += a)
    o.push(zc(n, l, l + a > f ? f : l + a));
  return i === 1 ? (e = n[r - 1], o.push(
    on[e >> 2] + on[e << 4 & 63] + "=="
  )) : i === 2 && (e = (n[r - 2] << 8) + n[r - 1], o.push(
    on[e >> 10] + on[e >> 4 & 63] + on[e << 2 & 63] + "="
  )), o.join("");
}
var No = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
No.read = function(n, e, r, i, o) {
  var a, l, f = o * 8 - i - 1, u = (1 << f) - 1, h = u >> 1, s = -7, d = r ? o - 1 : 0, m = r ? -1 : 1, y = n[e + d];
  for (d += m, a = y & (1 << -s) - 1, y >>= -s, s += f; s > 0; a = a * 256 + n[e + d], d += m, s -= 8)
    ;
  for (l = a & (1 << -s) - 1, a >>= -s, s += i; s > 0; l = l * 256 + n[e + d], d += m, s -= 8)
    ;
  if (a === 0)
    a = 1 - h;
  else {
    if (a === u)
      return l ? NaN : (y ? -1 : 1) * (1 / 0);
    l = l + Math.pow(2, i), a = a - h;
  }
  return (y ? -1 : 1) * l * Math.pow(2, a - i);
};
No.write = function(n, e, r, i, o, a) {
  var l, f, u, h = a * 8 - o - 1, s = (1 << h) - 1, d = s >> 1, m = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, y = i ? 0 : a - 1, b = i ? 1 : -1, E = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (f = isNaN(e) ? 1 : 0, l = s) : (l = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -l)) < 1 && (l--, u *= 2), l + d >= 1 ? e += m / u : e += m * Math.pow(2, 1 - d), e * u >= 2 && (l++, u /= 2), l + d >= s ? (f = 0, l = s) : l + d >= 1 ? (f = (e * u - 1) * Math.pow(2, o), l = l + d) : (f = e * Math.pow(2, d - 1) * Math.pow(2, o), l = 0)); o >= 8; n[r + y] = f & 255, y += b, f /= 256, o -= 8)
    ;
  for (l = l << o | f, h += o; h > 0; n[r + y] = l & 255, y += b, l /= 256, h -= 8)
    ;
  n[r + y - b] |= E * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(n) {
  const e = fi, r = No, i = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  n.Buffer = s, n.SlowBuffer = U, n.INSPECT_MAX_BYTES = 50;
  const o = 2147483647;
  n.kMaxLength = o;
  const { Uint8Array: a, ArrayBuffer: l, SharedArrayBuffer: f } = globalThis;
  s.TYPED_ARRAY_SUPPORT = u(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function u() {
    try {
      const g = new a(1), c = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(c, a.prototype), Object.setPrototypeOf(g, c), g.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(s.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (s.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(s.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (s.isBuffer(this))
        return this.byteOffset;
    }
  });
  function h(g) {
    if (g > o)
      throw new RangeError('The value "' + g + '" is invalid for option "size"');
    const c = new a(g);
    return Object.setPrototypeOf(c, s.prototype), c;
  }
  function s(g, c, p) {
    if (typeof g == "number") {
      if (typeof c == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return b(g);
    }
    return d(g, c, p);
  }
  s.poolSize = 8192;
  function d(g, c, p) {
    if (typeof g == "string")
      return E(g, c);
    if (l.isView(g))
      return S(g);
    if (g == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof g
      );
    if (Le(g, l) || g && Le(g.buffer, l) || typeof f < "u" && (Le(g, f) || g && Le(g.buffer, f)))
      return C(g, c, p);
    if (typeof g == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const v = g.valueOf && g.valueOf();
    if (v != null && v !== g)
      return s.from(v, c, p);
    const O = x(g);
    if (O) return O;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof g[Symbol.toPrimitive] == "function")
      return s.from(g[Symbol.toPrimitive]("string"), c, p);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof g
    );
  }
  s.from = function(g, c, p) {
    return d(g, c, p);
  }, Object.setPrototypeOf(s.prototype, a.prototype), Object.setPrototypeOf(s, a);
  function m(g) {
    if (typeof g != "number")
      throw new TypeError('"size" argument must be of type number');
    if (g < 0)
      throw new RangeError('The value "' + g + '" is invalid for option "size"');
  }
  function y(g, c, p) {
    return m(g), g <= 0 ? h(g) : c !== void 0 ? typeof p == "string" ? h(g).fill(c, p) : h(g).fill(c) : h(g);
  }
  s.alloc = function(g, c, p) {
    return y(g, c, p);
  };
  function b(g) {
    return m(g), h(g < 0 ? 0 : R(g) | 0);
  }
  s.allocUnsafe = function(g) {
    return b(g);
  }, s.allocUnsafeSlow = function(g) {
    return b(g);
  };
  function E(g, c) {
    if ((typeof c != "string" || c === "") && (c = "utf8"), !s.isEncoding(c))
      throw new TypeError("Unknown encoding: " + c);
    const p = Z(g, c) | 0;
    let v = h(p);
    const O = v.write(g, c);
    return O !== p && (v = v.slice(0, O)), v;
  }
  function T(g) {
    const c = g.length < 0 ? 0 : R(g.length) | 0, p = h(c);
    for (let v = 0; v < c; v += 1)
      p[v] = g[v] & 255;
    return p;
  }
  function S(g) {
    if (Le(g, a)) {
      const c = new a(g);
      return C(c.buffer, c.byteOffset, c.byteLength);
    }
    return T(g);
  }
  function C(g, c, p) {
    if (c < 0 || g.byteLength < c)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (g.byteLength < c + (p || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let v;
    return c === void 0 && p === void 0 ? v = new a(g) : p === void 0 ? v = new a(g, c) : v = new a(g, c, p), Object.setPrototypeOf(v, s.prototype), v;
  }
  function x(g) {
    if (s.isBuffer(g)) {
      const c = R(g.length) | 0, p = h(c);
      return p.length === 0 || g.copy(p, 0, 0, c), p;
    }
    if (g.length !== void 0)
      return typeof g.length != "number" || w(g.length) ? h(0) : T(g);
    if (g.type === "Buffer" && Array.isArray(g.data))
      return T(g.data);
  }
  function R(g) {
    if (g >= o)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
    return g | 0;
  }
  function U(g) {
    return +g != g && (g = 0), s.alloc(+g);
  }
  s.isBuffer = function(c) {
    return c != null && c._isBuffer === !0 && c !== s.prototype;
  }, s.compare = function(c, p) {
    if (Le(c, a) && (c = s.from(c, c.offset, c.byteLength)), Le(p, a) && (p = s.from(p, p.offset, p.byteLength)), !s.isBuffer(c) || !s.isBuffer(p))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (c === p) return 0;
    let v = c.length, O = p.length;
    for (let D = 0, M = Math.min(v, O); D < M; ++D)
      if (c[D] !== p[D]) {
        v = c[D], O = p[D];
        break;
      }
    return v < O ? -1 : O < v ? 1 : 0;
  }, s.isEncoding = function(c) {
    switch (String(c).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, s.concat = function(c, p) {
    if (!Array.isArray(c))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (c.length === 0)
      return s.alloc(0);
    let v;
    if (p === void 0)
      for (p = 0, v = 0; v < c.length; ++v)
        p += c[v].length;
    const O = s.allocUnsafe(p);
    let D = 0;
    for (v = 0; v < c.length; ++v) {
      let M = c[v];
      if (Le(M, a))
        D + M.length > O.length ? (s.isBuffer(M) || (M = s.from(M)), M.copy(O, D)) : a.prototype.set.call(
          O,
          M,
          D
        );
      else if (s.isBuffer(M))
        M.copy(O, D);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      D += M.length;
    }
    return O;
  };
  function Z(g, c) {
    if (s.isBuffer(g))
      return g.length;
    if (l.isView(g) || Le(g, l))
      return g.byteLength;
    if (typeof g != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof g
      );
    const p = g.length, v = arguments.length > 2 && arguments[2] === !0;
    if (!v && p === 0) return 0;
    let O = !1;
    for (; ; )
      switch (c) {
        case "ascii":
        case "latin1":
        case "binary":
          return p;
        case "utf8":
        case "utf-8":
          return yt(g).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return p * 2;
        case "hex":
          return p >>> 1;
        case "base64":
          return Ln(g).length;
        default:
          if (O)
            return v ? -1 : yt(g).length;
          c = ("" + c).toLowerCase(), O = !0;
      }
  }
  s.byteLength = Z;
  function z(g, c, p) {
    let v = !1;
    if ((c === void 0 || c < 0) && (c = 0), c > this.length || ((p === void 0 || p > this.length) && (p = this.length), p <= 0) || (p >>>= 0, c >>>= 0, p <= c))
      return "";
    for (g || (g = "utf8"); ; )
      switch (g) {
        case "hex":
          return de(this, c, p);
        case "utf8":
        case "utf-8":
          return J(this, c, p);
        case "ascii":
          return He(this, c, p);
        case "latin1":
        case "binary":
          return $e(this, c, p);
        case "base64":
          return Ie(this, c, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return it(this, c, p);
        default:
          if (v) throw new TypeError("Unknown encoding: " + g);
          g = (g + "").toLowerCase(), v = !0;
      }
  }
  s.prototype._isBuffer = !0;
  function re(g, c, p) {
    const v = g[c];
    g[c] = g[p], g[p] = v;
  }
  s.prototype.swap16 = function() {
    const c = this.length;
    if (c % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let p = 0; p < c; p += 2)
      re(this, p, p + 1);
    return this;
  }, s.prototype.swap32 = function() {
    const c = this.length;
    if (c % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let p = 0; p < c; p += 4)
      re(this, p, p + 3), re(this, p + 1, p + 2);
    return this;
  }, s.prototype.swap64 = function() {
    const c = this.length;
    if (c % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let p = 0; p < c; p += 8)
      re(this, p, p + 7), re(this, p + 1, p + 6), re(this, p + 2, p + 5), re(this, p + 3, p + 4);
    return this;
  }, s.prototype.toString = function() {
    const c = this.length;
    return c === 0 ? "" : arguments.length === 0 ? J(this, 0, c) : z.apply(this, arguments);
  }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(c) {
    if (!s.isBuffer(c)) throw new TypeError("Argument must be a Buffer");
    return this === c ? !0 : s.compare(this, c) === 0;
  }, s.prototype.inspect = function() {
    let c = "";
    const p = n.INSPECT_MAX_BYTES;
    return c = this.toString("hex", 0, p).replace(/(.{2})/g, "$1 ").trim(), this.length > p && (c += " ... "), "<Buffer " + c + ">";
  }, i && (s.prototype[i] = s.prototype.inspect), s.prototype.compare = function(c, p, v, O, D) {
    if (Le(c, a) && (c = s.from(c, c.offset, c.byteLength)), !s.isBuffer(c))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof c
      );
    if (p === void 0 && (p = 0), v === void 0 && (v = c ? c.length : 0), O === void 0 && (O = 0), D === void 0 && (D = this.length), p < 0 || v > c.length || O < 0 || D > this.length)
      throw new RangeError("out of range index");
    if (O >= D && p >= v)
      return 0;
    if (O >= D)
      return -1;
    if (p >= v)
      return 1;
    if (p >>>= 0, v >>>= 0, O >>>= 0, D >>>= 0, this === c) return 0;
    let M = D - O, X = v - p;
    const ne = Math.min(M, X), ue = this.slice(O, D), le = c.slice(p, v);
    for (let be = 0; be < ne; ++be)
      if (ue[be] !== le[be]) {
        M = ue[be], X = le[be];
        break;
      }
    return M < X ? -1 : X < M ? 1 : 0;
  };
  function P(g, c, p, v, O) {
    if (g.length === 0) return -1;
    if (typeof p == "string" ? (v = p, p = 0) : p > 2147483647 ? p = 2147483647 : p < -2147483648 && (p = -2147483648), p = +p, w(p) && (p = O ? 0 : g.length - 1), p < 0 && (p = g.length + p), p >= g.length) {
      if (O) return -1;
      p = g.length - 1;
    } else if (p < 0)
      if (O) p = 0;
      else return -1;
    if (typeof c == "string" && (c = s.from(c, v)), s.isBuffer(c))
      return c.length === 0 ? -1 : ye(g, c, p, v, O);
    if (typeof c == "number")
      return c = c & 255, typeof a.prototype.indexOf == "function" ? O ? a.prototype.indexOf.call(g, c, p) : a.prototype.lastIndexOf.call(g, c, p) : ye(g, [c], p, v, O);
    throw new TypeError("val must be string, number or Buffer");
  }
  function ye(g, c, p, v, O) {
    let D = 1, M = g.length, X = c.length;
    if (v !== void 0 && (v = String(v).toLowerCase(), v === "ucs2" || v === "ucs-2" || v === "utf16le" || v === "utf-16le")) {
      if (g.length < 2 || c.length < 2)
        return -1;
      D = 2, M /= 2, X /= 2, p /= 2;
    }
    function ne(le, be) {
      return D === 1 ? le[be] : le.readUInt16BE(be * D);
    }
    let ue;
    if (O) {
      let le = -1;
      for (ue = p; ue < M; ue++)
        if (ne(g, ue) === ne(c, le === -1 ? 0 : ue - le)) {
          if (le === -1 && (le = ue), ue - le + 1 === X) return le * D;
        } else
          le !== -1 && (ue -= ue - le), le = -1;
    } else
      for (p + X > M && (p = M - X), ue = p; ue >= 0; ue--) {
        let le = !0;
        for (let be = 0; be < X; be++)
          if (ne(g, ue + be) !== ne(c, be)) {
            le = !1;
            break;
          }
        if (le) return ue;
      }
    return -1;
  }
  s.prototype.includes = function(c, p, v) {
    return this.indexOf(c, p, v) !== -1;
  }, s.prototype.indexOf = function(c, p, v) {
    return P(this, c, p, v, !0);
  }, s.prototype.lastIndexOf = function(c, p, v) {
    return P(this, c, p, v, !1);
  };
  function K(g, c, p, v) {
    p = Number(p) || 0;
    const O = g.length - p;
    v ? (v = Number(v), v > O && (v = O)) : v = O;
    const D = c.length;
    v > D / 2 && (v = D / 2);
    let M;
    for (M = 0; M < v; ++M) {
      const X = parseInt(c.substr(M * 2, 2), 16);
      if (w(X)) return M;
      g[p + M] = X;
    }
    return M;
  }
  function Q(g, c, p, v) {
    return ee(yt(c, g.length - p), g, p, v);
  }
  function G(g, c, p, v) {
    return ee(Ut(c), g, p, v);
  }
  function he(g, c, p, v) {
    return ee(Ln(c), g, p, v);
  }
  function we(g, c, p, v) {
    return ee(Zt(c, g.length - p), g, p, v);
  }
  s.prototype.write = function(c, p, v, O) {
    if (p === void 0)
      O = "utf8", v = this.length, p = 0;
    else if (v === void 0 && typeof p == "string")
      O = p, v = this.length, p = 0;
    else if (isFinite(p))
      p = p >>> 0, isFinite(v) ? (v = v >>> 0, O === void 0 && (O = "utf8")) : (O = v, v = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const D = this.length - p;
    if ((v === void 0 || v > D) && (v = D), c.length > 0 && (v < 0 || p < 0) || p > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    O || (O = "utf8");
    let M = !1;
    for (; ; )
      switch (O) {
        case "hex":
          return K(this, c, p, v);
        case "utf8":
        case "utf-8":
          return Q(this, c, p, v);
        case "ascii":
        case "latin1":
        case "binary":
          return G(this, c, p, v);
        case "base64":
          return he(this, c, p, v);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return we(this, c, p, v);
        default:
          if (M) throw new TypeError("Unknown encoding: " + O);
          O = ("" + O).toLowerCase(), M = !0;
      }
  }, s.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function Ie(g, c, p) {
    return c === 0 && p === g.length ? e.fromByteArray(g) : e.fromByteArray(g.slice(c, p));
  }
  function J(g, c, p) {
    p = Math.min(g.length, p);
    const v = [];
    let O = c;
    for (; O < p; ) {
      const D = g[O];
      let M = null, X = D > 239 ? 4 : D > 223 ? 3 : D > 191 ? 2 : 1;
      if (O + X <= p) {
        let ne, ue, le, be;
        switch (X) {
          case 1:
            D < 128 && (M = D);
            break;
          case 2:
            ne = g[O + 1], (ne & 192) === 128 && (be = (D & 31) << 6 | ne & 63, be > 127 && (M = be));
            break;
          case 3:
            ne = g[O + 1], ue = g[O + 2], (ne & 192) === 128 && (ue & 192) === 128 && (be = (D & 15) << 12 | (ne & 63) << 6 | ue & 63, be > 2047 && (be < 55296 || be > 57343) && (M = be));
            break;
          case 4:
            ne = g[O + 1], ue = g[O + 2], le = g[O + 3], (ne & 192) === 128 && (ue & 192) === 128 && (le & 192) === 128 && (be = (D & 15) << 18 | (ne & 63) << 12 | (ue & 63) << 6 | le & 63, be > 65535 && be < 1114112 && (M = be));
        }
      }
      M === null ? (M = 65533, X = 1) : M > 65535 && (M -= 65536, v.push(M >>> 10 & 1023 | 55296), M = 56320 | M & 1023), v.push(M), O += X;
    }
    return We(v);
  }
  const Oe = 4096;
  function We(g) {
    const c = g.length;
    if (c <= Oe)
      return String.fromCharCode.apply(String, g);
    let p = "", v = 0;
    for (; v < c; )
      p += String.fromCharCode.apply(
        String,
        g.slice(v, v += Oe)
      );
    return p;
  }
  function He(g, c, p) {
    let v = "";
    p = Math.min(g.length, p);
    for (let O = c; O < p; ++O)
      v += String.fromCharCode(g[O] & 127);
    return v;
  }
  function $e(g, c, p) {
    let v = "";
    p = Math.min(g.length, p);
    for (let O = c; O < p; ++O)
      v += String.fromCharCode(g[O]);
    return v;
  }
  function de(g, c, p) {
    const v = g.length;
    (!c || c < 0) && (c = 0), (!p || p < 0 || p > v) && (p = v);
    let O = "";
    for (let D = c; D < p; ++D)
      O += N[g[D]];
    return O;
  }
  function it(g, c, p) {
    const v = g.slice(c, p);
    let O = "";
    for (let D = 0; D < v.length - 1; D += 2)
      O += String.fromCharCode(v[D] + v[D + 1] * 256);
    return O;
  }
  s.prototype.slice = function(c, p) {
    const v = this.length;
    c = ~~c, p = p === void 0 ? v : ~~p, c < 0 ? (c += v, c < 0 && (c = 0)) : c > v && (c = v), p < 0 ? (p += v, p < 0 && (p = 0)) : p > v && (p = v), p < c && (p = c);
    const O = this.subarray(c, p);
    return Object.setPrototypeOf(O, s.prototype), O;
  };
  function Te(g, c, p) {
    if (g % 1 !== 0 || g < 0) throw new RangeError("offset is not uint");
    if (g + c > p) throw new RangeError("Trying to access beyond buffer length");
  }
  s.prototype.readUintLE = s.prototype.readUIntLE = function(c, p, v) {
    c = c >>> 0, p = p >>> 0, v || Te(c, p, this.length);
    let O = this[c], D = 1, M = 0;
    for (; ++M < p && (D *= 256); )
      O += this[c + M] * D;
    return O;
  }, s.prototype.readUintBE = s.prototype.readUIntBE = function(c, p, v) {
    c = c >>> 0, p = p >>> 0, v || Te(c, p, this.length);
    let O = this[c + --p], D = 1;
    for (; p > 0 && (D *= 256); )
      O += this[c + --p] * D;
    return O;
  }, s.prototype.readUint8 = s.prototype.readUInt8 = function(c, p) {
    return c = c >>> 0, p || Te(c, 1, this.length), this[c];
  }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(c, p) {
    return c = c >>> 0, p || Te(c, 2, this.length), this[c] | this[c + 1] << 8;
  }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(c, p) {
    return c = c >>> 0, p || Te(c, 2, this.length), this[c] << 8 | this[c + 1];
  }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(c, p) {
    return c = c >>> 0, p || Te(c, 4, this.length), (this[c] | this[c + 1] << 8 | this[c + 2] << 16) + this[c + 3] * 16777216;
  }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(c, p) {
    return c = c >>> 0, p || Te(c, 4, this.length), this[c] * 16777216 + (this[c + 1] << 16 | this[c + 2] << 8 | this[c + 3]);
  }, s.prototype.readBigUInt64LE = L(function(c) {
    c = c >>> 0, Ee(c, "offset");
    const p = this[c], v = this[c + 7];
    (p === void 0 || v === void 0) && Ae(c, this.length - 8);
    const O = p + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + this[++c] * 2 ** 24, D = this[++c] + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + v * 2 ** 24;
    return BigInt(O) + (BigInt(D) << BigInt(32));
  }), s.prototype.readBigUInt64BE = L(function(c) {
    c = c >>> 0, Ee(c, "offset");
    const p = this[c], v = this[c + 7];
    (p === void 0 || v === void 0) && Ae(c, this.length - 8);
    const O = p * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + this[++c], D = this[++c] * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + v;
    return (BigInt(O) << BigInt(32)) + BigInt(D);
  }), s.prototype.readIntLE = function(c, p, v) {
    c = c >>> 0, p = p >>> 0, v || Te(c, p, this.length);
    let O = this[c], D = 1, M = 0;
    for (; ++M < p && (D *= 256); )
      O += this[c + M] * D;
    return D *= 128, O >= D && (O -= Math.pow(2, 8 * p)), O;
  }, s.prototype.readIntBE = function(c, p, v) {
    c = c >>> 0, p = p >>> 0, v || Te(c, p, this.length);
    let O = p, D = 1, M = this[c + --O];
    for (; O > 0 && (D *= 256); )
      M += this[c + --O] * D;
    return D *= 128, M >= D && (M -= Math.pow(2, 8 * p)), M;
  }, s.prototype.readInt8 = function(c, p) {
    return c = c >>> 0, p || Te(c, 1, this.length), this[c] & 128 ? (255 - this[c] + 1) * -1 : this[c];
  }, s.prototype.readInt16LE = function(c, p) {
    c = c >>> 0, p || Te(c, 2, this.length);
    const v = this[c] | this[c + 1] << 8;
    return v & 32768 ? v | 4294901760 : v;
  }, s.prototype.readInt16BE = function(c, p) {
    c = c >>> 0, p || Te(c, 2, this.length);
    const v = this[c + 1] | this[c] << 8;
    return v & 32768 ? v | 4294901760 : v;
  }, s.prototype.readInt32LE = function(c, p) {
    return c = c >>> 0, p || Te(c, 4, this.length), this[c] | this[c + 1] << 8 | this[c + 2] << 16 | this[c + 3] << 24;
  }, s.prototype.readInt32BE = function(c, p) {
    return c = c >>> 0, p || Te(c, 4, this.length), this[c] << 24 | this[c + 1] << 16 | this[c + 2] << 8 | this[c + 3];
  }, s.prototype.readBigInt64LE = L(function(c) {
    c = c >>> 0, Ee(c, "offset");
    const p = this[c], v = this[c + 7];
    (p === void 0 || v === void 0) && Ae(c, this.length - 8);
    const O = this[c + 4] + this[c + 5] * 2 ** 8 + this[c + 6] * 2 ** 16 + (v << 24);
    return (BigInt(O) << BigInt(32)) + BigInt(p + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + this[++c] * 2 ** 24);
  }), s.prototype.readBigInt64BE = L(function(c) {
    c = c >>> 0, Ee(c, "offset");
    const p = this[c], v = this[c + 7];
    (p === void 0 || v === void 0) && Ae(c, this.length - 8);
    const O = (p << 24) + // Overflow
    this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + this[++c];
    return (BigInt(O) << BigInt(32)) + BigInt(this[++c] * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + v);
  }), s.prototype.readFloatLE = function(c, p) {
    return c = c >>> 0, p || Te(c, 4, this.length), r.read(this, c, !0, 23, 4);
  }, s.prototype.readFloatBE = function(c, p) {
    return c = c >>> 0, p || Te(c, 4, this.length), r.read(this, c, !1, 23, 4);
  }, s.prototype.readDoubleLE = function(c, p) {
    return c = c >>> 0, p || Te(c, 8, this.length), r.read(this, c, !0, 52, 8);
  }, s.prototype.readDoubleBE = function(c, p) {
    return c = c >>> 0, p || Te(c, 8, this.length), r.read(this, c, !1, 52, 8);
  };
  function ve(g, c, p, v, O, D) {
    if (!s.isBuffer(g)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (c > O || c < D) throw new RangeError('"value" argument is out of bounds');
    if (p + v > g.length) throw new RangeError("Index out of range");
  }
  s.prototype.writeUintLE = s.prototype.writeUIntLE = function(c, p, v, O) {
    if (c = +c, p = p >>> 0, v = v >>> 0, !O) {
      const X = Math.pow(2, 8 * v) - 1;
      ve(this, c, p, v, X, 0);
    }
    let D = 1, M = 0;
    for (this[p] = c & 255; ++M < v && (D *= 256); )
      this[p + M] = c / D & 255;
    return p + v;
  }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(c, p, v, O) {
    if (c = +c, p = p >>> 0, v = v >>> 0, !O) {
      const X = Math.pow(2, 8 * v) - 1;
      ve(this, c, p, v, X, 0);
    }
    let D = v - 1, M = 1;
    for (this[p + D] = c & 255; --D >= 0 && (M *= 256); )
      this[p + D] = c / M & 255;
    return p + v;
  }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(c, p, v) {
    return c = +c, p = p >>> 0, v || ve(this, c, p, 1, 255, 0), this[p] = c & 255, p + 1;
  }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(c, p, v) {
    return c = +c, p = p >>> 0, v || ve(this, c, p, 2, 65535, 0), this[p] = c & 255, this[p + 1] = c >>> 8, p + 2;
  }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(c, p, v) {
    return c = +c, p = p >>> 0, v || ve(this, c, p, 2, 65535, 0), this[p] = c >>> 8, this[p + 1] = c & 255, p + 2;
  }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(c, p, v) {
    return c = +c, p = p >>> 0, v || ve(this, c, p, 4, 4294967295, 0), this[p + 3] = c >>> 24, this[p + 2] = c >>> 16, this[p + 1] = c >>> 8, this[p] = c & 255, p + 4;
  }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(c, p, v) {
    return c = +c, p = p >>> 0, v || ve(this, c, p, 4, 4294967295, 0), this[p] = c >>> 24, this[p + 1] = c >>> 16, this[p + 2] = c >>> 8, this[p + 3] = c & 255, p + 4;
  };
  function Xt(g, c, p, v, O) {
    Fe(c, v, O, g, p, 7);
    let D = Number(c & BigInt(4294967295));
    g[p++] = D, D = D >> 8, g[p++] = D, D = D >> 8, g[p++] = D, D = D >> 8, g[p++] = D;
    let M = Number(c >> BigInt(32) & BigInt(4294967295));
    return g[p++] = M, M = M >> 8, g[p++] = M, M = M >> 8, g[p++] = M, M = M >> 8, g[p++] = M, p;
  }
  function I(g, c, p, v, O) {
    Fe(c, v, O, g, p, 7);
    let D = Number(c & BigInt(4294967295));
    g[p + 7] = D, D = D >> 8, g[p + 6] = D, D = D >> 8, g[p + 5] = D, D = D >> 8, g[p + 4] = D;
    let M = Number(c >> BigInt(32) & BigInt(4294967295));
    return g[p + 3] = M, M = M >> 8, g[p + 2] = M, M = M >> 8, g[p + 1] = M, M = M >> 8, g[p] = M, p + 8;
  }
  s.prototype.writeBigUInt64LE = L(function(c, p = 0) {
    return Xt(this, c, p, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeBigUInt64BE = L(function(c, p = 0) {
    return I(this, c, p, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeIntLE = function(c, p, v, O) {
    if (c = +c, p = p >>> 0, !O) {
      const ne = Math.pow(2, 8 * v - 1);
      ve(this, c, p, v, ne - 1, -ne);
    }
    let D = 0, M = 1, X = 0;
    for (this[p] = c & 255; ++D < v && (M *= 256); )
      c < 0 && X === 0 && this[p + D - 1] !== 0 && (X = 1), this[p + D] = (c / M >> 0) - X & 255;
    return p + v;
  }, s.prototype.writeIntBE = function(c, p, v, O) {
    if (c = +c, p = p >>> 0, !O) {
      const ne = Math.pow(2, 8 * v - 1);
      ve(this, c, p, v, ne - 1, -ne);
    }
    let D = v - 1, M = 1, X = 0;
    for (this[p + D] = c & 255; --D >= 0 && (M *= 256); )
      c < 0 && X === 0 && this[p + D + 1] !== 0 && (X = 1), this[p + D] = (c / M >> 0) - X & 255;
    return p + v;
  }, s.prototype.writeInt8 = function(c, p, v) {
    return c = +c, p = p >>> 0, v || ve(this, c, p, 1, 127, -128), c < 0 && (c = 255 + c + 1), this[p] = c & 255, p + 1;
  }, s.prototype.writeInt16LE = function(c, p, v) {
    return c = +c, p = p >>> 0, v || ve(this, c, p, 2, 32767, -32768), this[p] = c & 255, this[p + 1] = c >>> 8, p + 2;
  }, s.prototype.writeInt16BE = function(c, p, v) {
    return c = +c, p = p >>> 0, v || ve(this, c, p, 2, 32767, -32768), this[p] = c >>> 8, this[p + 1] = c & 255, p + 2;
  }, s.prototype.writeInt32LE = function(c, p, v) {
    return c = +c, p = p >>> 0, v || ve(this, c, p, 4, 2147483647, -2147483648), this[p] = c & 255, this[p + 1] = c >>> 8, this[p + 2] = c >>> 16, this[p + 3] = c >>> 24, p + 4;
  }, s.prototype.writeInt32BE = function(c, p, v) {
    return c = +c, p = p >>> 0, v || ve(this, c, p, 4, 2147483647, -2147483648), c < 0 && (c = 4294967295 + c + 1), this[p] = c >>> 24, this[p + 1] = c >>> 16, this[p + 2] = c >>> 8, this[p + 3] = c & 255, p + 4;
  }, s.prototype.writeBigInt64LE = L(function(c, p = 0) {
    return Xt(this, c, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), s.prototype.writeBigInt64BE = L(function(c, p = 0) {
    return I(this, c, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function _(g, c, p, v, O, D) {
    if (p + v > g.length) throw new RangeError("Index out of range");
    if (p < 0) throw new RangeError("Index out of range");
  }
  function B(g, c, p, v, O) {
    return c = +c, p = p >>> 0, O || _(g, c, p, 4), r.write(g, c, p, v, 23, 4), p + 4;
  }
  s.prototype.writeFloatLE = function(c, p, v) {
    return B(this, c, p, !0, v);
  }, s.prototype.writeFloatBE = function(c, p, v) {
    return B(this, c, p, !1, v);
  };
  function k(g, c, p, v, O) {
    return c = +c, p = p >>> 0, O || _(g, c, p, 8), r.write(g, c, p, v, 52, 8), p + 8;
  }
  s.prototype.writeDoubleLE = function(c, p, v) {
    return k(this, c, p, !0, v);
  }, s.prototype.writeDoubleBE = function(c, p, v) {
    return k(this, c, p, !1, v);
  }, s.prototype.copy = function(c, p, v, O) {
    if (!s.isBuffer(c)) throw new TypeError("argument should be a Buffer");
    if (v || (v = 0), !O && O !== 0 && (O = this.length), p >= c.length && (p = c.length), p || (p = 0), O > 0 && O < v && (O = v), O === v || c.length === 0 || this.length === 0) return 0;
    if (p < 0)
      throw new RangeError("targetStart out of bounds");
    if (v < 0 || v >= this.length) throw new RangeError("Index out of range");
    if (O < 0) throw new RangeError("sourceEnd out of bounds");
    O > this.length && (O = this.length), c.length - p < O - v && (O = c.length - p + v);
    const D = O - v;
    return this === c && typeof a.prototype.copyWithin == "function" ? this.copyWithin(p, v, O) : a.prototype.set.call(
      c,
      this.subarray(v, O),
      p
    ), D;
  }, s.prototype.fill = function(c, p, v, O) {
    if (typeof c == "string") {
      if (typeof p == "string" ? (O = p, p = 0, v = this.length) : typeof v == "string" && (O = v, v = this.length), O !== void 0 && typeof O != "string")
        throw new TypeError("encoding must be a string");
      if (typeof O == "string" && !s.isEncoding(O))
        throw new TypeError("Unknown encoding: " + O);
      if (c.length === 1) {
        const M = c.charCodeAt(0);
        (O === "utf8" && M < 128 || O === "latin1") && (c = M);
      }
    } else typeof c == "number" ? c = c & 255 : typeof c == "boolean" && (c = Number(c));
    if (p < 0 || this.length < p || this.length < v)
      throw new RangeError("Out of range index");
    if (v <= p)
      return this;
    p = p >>> 0, v = v === void 0 ? this.length : v >>> 0, c || (c = 0);
    let D;
    if (typeof c == "number")
      for (D = p; D < v; ++D)
        this[D] = c;
    else {
      const M = s.isBuffer(c) ? c : s.from(c, O), X = M.length;
      if (X === 0)
        throw new TypeError('The value "' + c + '" is invalid for argument "value"');
      for (D = 0; D < v - p; ++D)
        this[D + p] = M[D % X];
    }
    return this;
  };
  const me = {};
  function ae(g, c, p) {
    me[g] = class extends p {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: c.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${g}]`, this.stack, delete this.name;
      }
      get code() {
        return g;
      }
      set code(O) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: O,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${g}]: ${this.message}`;
      }
    };
  }
  ae(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(g) {
      return g ? `${g} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), ae(
    "ERR_INVALID_ARG_TYPE",
    function(g, c) {
      return `The "${g}" argument must be of type number. Received type ${typeof c}`;
    },
    TypeError
  ), ae(
    "ERR_OUT_OF_RANGE",
    function(g, c, p) {
      let v = `The value of "${g}" is out of range.`, O = p;
      return Number.isInteger(p) && Math.abs(p) > 2 ** 32 ? O = Se(String(p)) : typeof p == "bigint" && (O = String(p), (p > BigInt(2) ** BigInt(32) || p < -(BigInt(2) ** BigInt(32))) && (O = Se(O)), O += "n"), v += ` It must be ${c}. Received ${O}`, v;
    },
    RangeError
  );
  function Se(g) {
    let c = "", p = g.length;
    const v = g[0] === "-" ? 1 : 0;
    for (; p >= v + 4; p -= 3)
      c = `_${g.slice(p - 3, p)}${c}`;
    return `${g.slice(0, p)}${c}`;
  }
  function pe(g, c, p) {
    Ee(c, "offset"), (g[c] === void 0 || g[c + p] === void 0) && Ae(c, g.length - (p + 1));
  }
  function Fe(g, c, p, v, O, D) {
    if (g > p || g < c) {
      const M = typeof c == "bigint" ? "n" : "";
      let X;
      throw c === 0 || c === BigInt(0) ? X = `>= 0${M} and < 2${M} ** ${(D + 1) * 8}${M}` : X = `>= -(2${M} ** ${(D + 1) * 8 - 1}${M}) and < 2 ** ${(D + 1) * 8 - 1}${M}`, new me.ERR_OUT_OF_RANGE("value", X, g);
    }
    pe(v, O, D);
  }
  function Ee(g, c) {
    if (typeof g != "number")
      throw new me.ERR_INVALID_ARG_TYPE(c, "number", g);
  }
  function Ae(g, c, p) {
    throw Math.floor(g) !== g ? (Ee(g, p), new me.ERR_OUT_OF_RANGE("offset", "an integer", g)) : c < 0 ? new me.ERR_BUFFER_OUT_OF_BOUNDS() : new me.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${c}`,
      g
    );
  }
  const lt = /[^+/0-9A-Za-z-_]/g;
  function At(g) {
    if (g = g.split("=")[0], g = g.trim().replace(lt, ""), g.length < 2) return "";
    for (; g.length % 4 !== 0; )
      g = g + "=";
    return g;
  }
  function yt(g, c) {
    c = c || 1 / 0;
    let p;
    const v = g.length;
    let O = null;
    const D = [];
    for (let M = 0; M < v; ++M) {
      if (p = g.charCodeAt(M), p > 55295 && p < 57344) {
        if (!O) {
          if (p > 56319) {
            (c -= 3) > -1 && D.push(239, 191, 189);
            continue;
          } else if (M + 1 === v) {
            (c -= 3) > -1 && D.push(239, 191, 189);
            continue;
          }
          O = p;
          continue;
        }
        if (p < 56320) {
          (c -= 3) > -1 && D.push(239, 191, 189), O = p;
          continue;
        }
        p = (O - 55296 << 10 | p - 56320) + 65536;
      } else O && (c -= 3) > -1 && D.push(239, 191, 189);
      if (O = null, p < 128) {
        if ((c -= 1) < 0) break;
        D.push(p);
      } else if (p < 2048) {
        if ((c -= 2) < 0) break;
        D.push(
          p >> 6 | 192,
          p & 63 | 128
        );
      } else if (p < 65536) {
        if ((c -= 3) < 0) break;
        D.push(
          p >> 12 | 224,
          p >> 6 & 63 | 128,
          p & 63 | 128
        );
      } else if (p < 1114112) {
        if ((c -= 4) < 0) break;
        D.push(
          p >> 18 | 240,
          p >> 12 & 63 | 128,
          p >> 6 & 63 | 128,
          p & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return D;
  }
  function Ut(g) {
    const c = [];
    for (let p = 0; p < g.length; ++p)
      c.push(g.charCodeAt(p) & 255);
    return c;
  }
  function Zt(g, c) {
    let p, v, O;
    const D = [];
    for (let M = 0; M < g.length && !((c -= 2) < 0); ++M)
      p = g.charCodeAt(M), v = p >> 8, O = p % 256, D.push(O), D.push(v);
    return D;
  }
  function Ln(g) {
    return e.toByteArray(At(g));
  }
  function ee(g, c, p, v) {
    let O;
    for (O = 0; O < v && !(O + p >= c.length || O >= g.length); ++O)
      c[O + p] = g[O];
    return O;
  }
  function Le(g, c) {
    return g instanceof c || g != null && g.constructor != null && g.constructor.name != null && g.constructor.name === c.name;
  }
  function w(g) {
    return g !== g;
  }
  const N = function() {
    const g = "0123456789abcdef", c = new Array(256);
    for (let p = 0; p < 16; ++p) {
      const v = p * 16;
      for (let O = 0; O < 16; ++O)
        c[v + O] = g[p] + g[O];
    }
    return c;
  }();
  function L(g) {
    return typeof BigInt > "u" ? $ : g;
  }
  function $() {
    throw new Error("BigInt not supported");
  }
})(et);
const ei = et.Buffer, Xc = et.Blob, Hc = et.BlobOptions, _l = et.Buffer, Yc = et.File, Zc = et.FileOptions, Kc = et.INSPECT_MAX_BYTES, Jc = et.SlowBuffer, Qc = et.TranscodeEncoding, ef = et.atob, tf = et.btoa, nf = et.constants, rf = et.isAscii, of = et.isUtf8, sf = et.kMaxLength, af = et.kStringMaxLength, lf = et.resolveObjectURL, uf = et.transcode, cf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Blob: Xc,
  BlobOptions: Hc,
  Buffer: _l,
  File: Yc,
  FileOptions: Zc,
  INSPECT_MAX_BYTES: Kc,
  SlowBuffer: Jc,
  TranscodeEncoding: Qc,
  atob: ef,
  btoa: tf,
  constants: nf,
  default: ei,
  isAscii: rf,
  isUtf8: of,
  kMaxLength: sf,
  kStringMaxLength: af,
  resolveObjectURL: lf,
  transcode: uf
}, Symbol.toStringTag, { value: "Module" })), ff = /* @__PURE__ */ Zu(cf);
var Tl = {}, uo = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(n, e) {
  var r = ff, i = r.Buffer;
  function o(l, f) {
    for (var u in l)
      f[u] = l[u];
  }
  i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? n.exports = r : (o(r, e), e.Buffer = a);
  function a(l, f, u) {
    return i(l, f, u);
  }
  a.prototype = Object.create(i.prototype), o(i, a), a.from = function(l, f, u) {
    if (typeof l == "number")
      throw new TypeError("Argument must not be a number");
    return i(l, f, u);
  }, a.alloc = function(l, f, u) {
    if (typeof l != "number")
      throw new TypeError("Argument must be a number");
    var h = i(l);
    return f !== void 0 ? typeof u == "string" ? h.fill(f, u) : h.fill(f) : h.fill(0), h;
  }, a.allocUnsafe = function(l) {
    if (typeof l != "number")
      throw new TypeError("Argument must be a number");
    return i(l);
  }, a.allocUnsafeSlow = function(l) {
    if (typeof l != "number")
      throw new TypeError("Argument must be a number");
    return r.SlowBuffer(l);
  };
})(uo, uo.exports);
var hf = uo.exports, Io = hf.Buffer, us = Io.isEncoding || function(n) {
  switch (n = "" + n, n && n.toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
    case "raw":
      return !0;
    default:
      return !1;
  }
};
function pf(n) {
  if (!n) return "utf8";
  for (var e; ; )
    switch (n) {
      case "utf8":
      case "utf-8":
        return "utf8";
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return "utf16le";
      case "latin1":
      case "binary":
        return "latin1";
      case "base64":
      case "ascii":
      case "hex":
        return n;
      default:
        if (e) return;
        n = ("" + n).toLowerCase(), e = !0;
    }
}
function df(n) {
  var e = pf(n);
  if (typeof e != "string" && (Io.isEncoding === us || !us(n))) throw new Error("Unknown encoding: " + n);
  return e || n;
}
Tl.StringDecoder = kr;
function kr(n) {
  this.encoding = df(n);
  var e;
  switch (this.encoding) {
    case "utf16le":
      this.text = vf, this.end = bf, e = 4;
      break;
    case "utf8":
      this.fillLast = Ef, e = 4;
      break;
    case "base64":
      this.text = _f, this.end = Tf, e = 3;
      break;
    default:
      this.write = Nf, this.end = If;
      return;
  }
  this.lastNeed = 0, this.lastTotal = 0, this.lastChar = Io.allocUnsafe(e);
}
kr.prototype.write = function(n) {
  if (n.length === 0) return "";
  var e, r;
  if (this.lastNeed) {
    if (e = this.fillLast(n), e === void 0) return "";
    r = this.lastNeed, this.lastNeed = 0;
  } else
    r = 0;
  return r < n.length ? e ? e + this.text(n, r) : this.text(n, r) : e || "";
};
kr.prototype.end = yf;
kr.prototype.text = wf;
kr.prototype.fillLast = function(n) {
  if (this.lastNeed <= n.length)
    return n.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  n.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, n.length), this.lastNeed -= n.length;
};
function Ci(n) {
  return n <= 127 ? 0 : n >> 5 === 6 ? 2 : n >> 4 === 14 ? 3 : n >> 3 === 30 ? 4 : n >> 6 === 2 ? -1 : -2;
}
function mf(n, e, r) {
  var i = e.length - 1;
  if (i < r) return 0;
  var o = Ci(e[i]);
  return o >= 0 ? (o > 0 && (n.lastNeed = o - 1), o) : --i < r || o === -2 ? 0 : (o = Ci(e[i]), o >= 0 ? (o > 0 && (n.lastNeed = o - 2), o) : --i < r || o === -2 ? 0 : (o = Ci(e[i]), o >= 0 ? (o > 0 && (o === 2 ? o = 0 : n.lastNeed = o - 3), o) : 0));
}
function gf(n, e, r) {
  if ((e[0] & 192) !== 128)
    return n.lastNeed = 0, "�";
  if (n.lastNeed > 1 && e.length > 1) {
    if ((e[1] & 192) !== 128)
      return n.lastNeed = 1, "�";
    if (n.lastNeed > 2 && e.length > 2 && (e[2] & 192) !== 128)
      return n.lastNeed = 2, "�";
  }
}
function Ef(n) {
  var e = this.lastTotal - this.lastNeed, r = gf(this, n);
  if (r !== void 0) return r;
  if (this.lastNeed <= n.length)
    return n.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  n.copy(this.lastChar, e, 0, n.length), this.lastNeed -= n.length;
}
function wf(n, e) {
  var r = mf(this, n, e);
  if (!this.lastNeed) return n.toString("utf8", e);
  this.lastTotal = r;
  var i = n.length - (r - this.lastNeed);
  return n.copy(this.lastChar, 0, i), n.toString("utf8", e, i);
}
function yf(n) {
  var e = n && n.length ? this.write(n) : "";
  return this.lastNeed ? e + "�" : e;
}
function vf(n, e) {
  if ((n.length - e) % 2 === 0) {
    var r = n.toString("utf16le", e);
    if (r) {
      var i = r.charCodeAt(r.length - 1);
      if (i >= 55296 && i <= 56319)
        return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = n[n.length - 2], this.lastChar[1] = n[n.length - 1], r.slice(0, -1);
    }
    return r;
  }
  return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = n[n.length - 1], n.toString("utf16le", e, n.length - 1);
}
function bf(n) {
  var e = n && n.length ? this.write(n) : "";
  if (this.lastNeed) {
    var r = this.lastTotal - this.lastNeed;
    return e + this.lastChar.toString("utf16le", 0, r);
  }
  return e;
}
function _f(n, e) {
  var r = (n.length - e) % 3;
  return r === 0 ? n.toString("base64", e) : (this.lastNeed = 3 - r, this.lastTotal = 3, r === 1 ? this.lastChar[0] = n[n.length - 1] : (this.lastChar[0] = n[n.length - 2], this.lastChar[1] = n[n.length - 1]), n.toString("base64", e, n.length - r));
}
function Tf(n) {
  var e = n && n.length ? this.write(n) : "";
  return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e;
}
function Nf(n) {
  return n.toString(this.encoding);
}
function If(n) {
  return n && n.length ? this.write(n) : "";
}
function Nl(n, e, r) {
  var a;
  const i = `#initial-state-${n}-${e}`;
  if ((a = window._nc_initial_state) != null && a.has(i))
    return window._nc_initial_state.get(i);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const o = document.querySelector(i);
  if (o === null)
    return r;
  try {
    const l = JSON.parse(atob(o.value));
    return window._nc_initial_state.set(i, l), l;
  } catch (l) {
    return console.error("[@nextcloud/initial-state] Could not parse initial state", { key: e, app: n, error: l }), r;
  }
}
const Af = (n) => "/remote.php/" + n, Il = (n, e) => Of() + Af(n), Of = () => window.location.protocol + "//" + window.location.host + Sf();
function Sf() {
  let n = window._oc_webroot;
  if (typeof n > "u") {
    n = location.pathname;
    const e = n.indexOf("/index.php/");
    if (e !== -1)
      n = n.slice(0, e);
    else {
      const r = n.indexOf("/", 1);
      n = n.slice(0, r > 0 ? r : void 0);
    }
  }
  return n;
}
/*! @license DOMPurify 3.4.13 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.13/LICENSE */
function cs(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var r = 0, i = Array(e); r < e; r++) i[r] = n[r];
  return i;
}
function Rf(n) {
  if (Array.isArray(n)) return n;
}
function Cf(n, e) {
  var r = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (r != null) {
    var i, o, a, l, f = [], u = !0, h = !1;
    try {
      if (a = (r = r.call(n)).next, e !== 0) for (; !(u = (i = a.call(r)).done) && (f.push(i.value), f.length !== e); u = !0) ;
    } catch (s) {
      h = !0, o = s;
    } finally {
      try {
        if (!u && r.return != null && (l = r.return(), Object(l) !== l)) return;
      } finally {
        if (h) throw o;
      }
    }
    return f;
  }
}
function Lf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xf(n, e) {
  return Rf(n) || Cf(n, e) || Pf(n, e) || Lf();
}
function Pf(n, e) {
  if (n) {
    if (typeof n == "string") return cs(n, e);
    var r = {}.toString.call(n).slice(8, -1);
    return r === "Object" && n.constructor && (r = n.constructor.name), r === "Map" || r === "Set" ? Array.from(n) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? cs(n, e) : void 0;
  }
}
const Al = Object.entries, fs = Object.setPrototypeOf, Df = Object.isFrozen, $f = Object.getPrototypeOf, kf = Object.getOwnPropertyDescriptor;
let ct = Object.freeze, ft = Object.seal, tr = Object.create, Ol = typeof Reflect < "u" && Reflect, co = Ol.apply, fo = Ol.construct;
ct || (ct = function(e) {
  return e;
});
ft || (ft = function(e) {
  return e;
});
co || (co = function(e, r) {
  for (var i = arguments.length, o = new Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++)
    o[a - 2] = arguments[a];
  return e.apply(r, o);
});
fo || (fo = function(e) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    i[o - 1] = arguments[o];
  return new e(...i);
});
const Jn = Je(Array.prototype.forEach), Ff = Je(Array.prototype.lastIndexOf), hs = Je(Array.prototype.pop), Qn = Je(Array.prototype.push), Mf = Je(Array.prototype.splice), bn = Array.isArray, Ir = Je(String.prototype.toLowerCase), Li = Je(String.prototype.toString), ps = Je(String.prototype.match), wr = Je(String.prototype.replace), ds = Je(String.prototype.indexOf), Uf = Je(String.prototype.trim), Bf = Je(Number.prototype.toString), jf = Je(Boolean.prototype.toString), ms = typeof BigInt > "u" ? null : Je(BigInt.prototype.toString), gs = typeof Symbol > "u" ? null : Je(Symbol.prototype.toString), st = Je(Object.prototype.hasOwnProperty), yr = Je(Object.prototype.toString), ot = Je(RegExp.prototype.test), Pn = Gf(TypeError);
function Je(n) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      i[o - 1] = arguments[o];
    return co(n, e, i);
  };
}
function Gf(n) {
  return function() {
    for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
      r[i] = arguments[i];
    return fo(n, r);
  };
}
function _e(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ir;
  if (fs && fs(n, null), !bn(e))
    return n;
  let i = e.length;
  for (; i--; ) {
    let o = e[i];
    if (typeof o == "string") {
      const a = r(o);
      a !== o && (Df(e) || (e[i] = a), o = a);
    }
    n[o] = !0;
  }
  return n;
}
function Wf(n) {
  for (let e = 0; e < n.length; e++)
    st(n, e) || (n[e] = null);
  return n;
}
function pt(n) {
  const e = tr(null);
  for (const i of Al(n)) {
    var r = xf(i, 2);
    const o = r[0], a = r[1];
    st(n, o) && (bn(a) ? e[o] = Wf(a) : a && typeof a == "object" && a.constructor === Object ? e[o] = pt(a) : e[o] = a);
  }
  return e;
}
function Vf(n) {
  switch (typeof n) {
    case "string":
      return n;
    case "number":
      return Bf(n);
    case "boolean":
      return jf(n);
    case "bigint":
      return ms ? ms(n) : "0";
    case "symbol":
      return gs ? gs(n) : "Symbol()";
    case "undefined":
      return yr(n);
    case "function":
    case "object": {
      if (n === null)
        return yr(n);
      const e = n, r = Yt(e, "toString");
      if (typeof r == "function") {
        const i = r(e);
        return typeof i == "string" ? i : yr(i);
      }
      return yr(n);
    }
    default:
      return yr(n);
  }
}
function Yt(n, e) {
  for (; n !== null; ) {
    const i = kf(n, e);
    if (i) {
      if (i.get)
        return Je(i.get);
      if (typeof i.value == "function")
        return Je(i.value);
    }
    n = $f(n);
  }
  function r() {
    return null;
  }
  return r;
}
function zf(n) {
  try {
    return ot(n, ""), !0;
  } catch {
    return !1;
  }
}
const Es = ct(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), xi = ct(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Pi = ct(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), qf = ct(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Di = ct(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Xf = ct(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ws = ct(["#text"]), ys = ct(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), $i = ct(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), vs = ct(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Hr = ct(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Hf = ft(/{{[\w\W]*|^[\w\W]*}}/g), Yf = ft(/<%[\w\W]*|^[\w\W]*%>/g), Zf = ft(/\${[\w\W]*/g), Kf = ft(/^data-[\-\w.\u00B7-\uFFFF]+$/), Jf = ft(/^aria-[\-\w]+$/), bs = ft(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Qf = ft(/^(?:\w+script|data):/i), eh = ft(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), th = ft(/^html$/i), nh = ft(/^[a-z][.\w]*(-[.\w]+)+$/i), _s = ft(/<[/\w!]/g), Ts = ft(/<[/\w]/g), rh = ft(/<\/no(script|embed|frames)/i), ih = ft(/\/>/i), Pt = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, oh = function() {
  return typeof window > "u" ? null : window;
}, sh = function(e, r) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let i = null;
  const o = "data-tt-policy-suffix";
  r && r.hasAttribute(o) && (i = r.getAttribute(o));
  const a = "dompurify" + (i ? "#" + i : "");
  try {
    return e.createPolicy(a, {
      createHTML(l) {
        return l;
      },
      createScriptURL(l) {
        return l;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
}, Ns = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
}, En = function(e, r, i, o) {
  return st(e, r) && bn(e[r]) ? _e(o.base ? pt(o.base) : {}, e[r], o.transform) : i;
};
function Sl() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : oh();
  const e = (q) => Sl(q);
  if (e.version = "3.4.13", e.removed = [], !n || !n.document || n.document.nodeType !== Pt.document || !n.Element)
    return e.isSupported = !1, e;
  let r = n.document;
  const i = r, o = i.currentScript;
  n.DocumentFragment;
  const a = n.HTMLTemplateElement, l = n.Node, f = n.Element, u = n.NodeFilter, h = n.NamedNodeMap;
  h === void 0 && (n.NamedNodeMap || n.MozNamedAttrMap), n.HTMLFormElement;
  const s = n.DOMParser, d = n.trustedTypes, m = f.prototype, y = Yt(m, "cloneNode"), b = Yt(m, "remove"), E = Yt(m, "nextSibling"), T = Yt(m, "childNodes"), S = Yt(m, "parentNode"), C = Yt(m, "shadowRoot"), x = Yt(m, "attributes"), R = l && l.prototype ? Yt(l.prototype, "nodeType") : null, U = l && l.prototype ? Yt(l.prototype, "nodeName") : null, Z = l && l.prototype ? Yt(l.prototype, "ownerDocument") : null;
  if (typeof a == "function") {
    const q = r.createElement("template");
    q.content && q.content.ownerDocument && (r = q.content.ownerDocument);
  }
  let z, re = "", P, ye = !1, K = 0;
  const Q = function() {
    if (K > 0)
      throw Pn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, G = function(A) {
    Q(), K++;
    try {
      return z.createHTML(A);
    } finally {
      K--;
    }
  }, he = function(A) {
    Q(), K++;
    try {
      return z.createScriptURL(A);
    } finally {
      K--;
    }
  }, we = function() {
    return ye || (P = sh(d, o), ye = !0), P;
  }, Ie = r, J = Ie.implementation, Oe = Ie.createNodeIterator, We = Ie.createDocumentFragment, He = Ie.getElementsByTagName, $e = i.importNode;
  let de = Ns();
  e.isSupported = typeof Al == "function" && typeof S == "function" && J && J.createHTMLDocument !== void 0;
  const it = Hf, Te = Yf, ve = Zf, Xt = Kf, I = Jf, _ = Qf, B = eh, k = nh;
  let me = bs, ae = null;
  const Se = _e({}, [...Es, ...xi, ...Pi, ...Di, ...ws]);
  let pe = null;
  const Fe = _e({}, [...ys, ...$i, ...vs, ...Hr]);
  let Ee = Object.seal(tr(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Ae = null, lt = null;
  const At = Object.seal(tr(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let yt = !0, Ut = !0, Zt = !1, Ln = !0, ee = !1, Le = !0, w = !1, N = !1, L = null, $ = null, g = !1, c = !1, p = !1, v = !1, O = !0, D = !1;
  const M = "user-content-";
  let X = !0, ne = !1, ue = {}, le = null;
  const be = _e({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    // <selectedcontent> mirrors the selected <option>'s subtree, cloned by
    // the UA (customizable <select>) — including any on* handlers — and the
    // engine re-mirrors synchronously whenever a removal changes which
    // option/selectedcontent is current, even inside DOMPurify's inert
    // DOMParser document. Hoisting its children on removal re-inserts a fresh
    // mirror target ahead of the walk, which the engine refills, looping
    // forever (DoS) and amplifying output. Dropping its content on removal
    // (rather than hoisting) breaks that cascade; the content is a duplicate
    // of the option, which is sanitized on its own. See campaign-3 F1/F6.
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let Vn = null;
  const Bo = _e({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ei = null;
  const jo = _e({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Fr = "http://www.w3.org/1998/Math/MathML", Mr = "http://www.w3.org/2000/svg", Kt = "http://www.w3.org/1999/xhtml";
  let zn = Kt, wi = !1, yi = null;
  const Eu = _e({}, [Fr, Mr, Kt], Li), Go = ct(["mi", "mo", "mn", "ms", "mtext"]);
  let vi = _e({}, Go);
  const Wo = ct(["annotation-xml"]);
  let bi = _e({}, Wo);
  const wu = _e({}, ["title", "style", "font", "a", "script"]);
  let dr = null;
  const yu = ["application/xhtml+xml", "text/html"], vu = "text/html";
  let Me = null, qn = null;
  const bu = r.createElement("form"), Vo = function(A) {
    return A instanceof RegExp || A instanceof Function;
  }, _i = function() {
    let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (qn && qn === A)
      return;
    (!A || typeof A != "object") && (A = {}), A = pt(A), dr = // eslint-disable-next-line unicorn/prefer-includes
    yu.indexOf(A.PARSER_MEDIA_TYPE) === -1 ? vu : A.PARSER_MEDIA_TYPE, Me = dr === "application/xhtml+xml" ? Li : Ir, ae = En(A, "ALLOWED_TAGS", Se, {
      transform: Me
    }), pe = En(A, "ALLOWED_ATTR", Fe, {
      transform: Me
    }), yi = En(A, "ALLOWED_NAMESPACES", Eu, {
      transform: Li
    }), Ei = En(A, "ADD_URI_SAFE_ATTR", jo, {
      transform: Me,
      base: jo
    }), Vn = En(A, "ADD_DATA_URI_TAGS", Bo, {
      transform: Me,
      base: Bo
    }), le = En(A, "FORBID_CONTENTS", be, {
      transform: Me
    }), Ae = En(A, "FORBID_TAGS", pt({}), {
      transform: Me
    }), lt = En(A, "FORBID_ATTR", pt({}), {
      transform: Me
    }), ue = st(A, "USE_PROFILES") ? A.USE_PROFILES && typeof A.USE_PROFILES == "object" ? pt(A.USE_PROFILES) : A.USE_PROFILES : !1, yt = A.ALLOW_ARIA_ATTR !== !1, Ut = A.ALLOW_DATA_ATTR !== !1, Zt = A.ALLOW_UNKNOWN_PROTOCOLS || !1, Ln = A.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ee = A.SAFE_FOR_TEMPLATES || !1, Le = A.SAFE_FOR_XML !== !1, w = A.WHOLE_DOCUMENT || !1, c = A.RETURN_DOM || !1, p = A.RETURN_DOM_FRAGMENT || !1, v = A.RETURN_TRUSTED_TYPE || !1, g = A.FORCE_BODY || !1, O = A.SANITIZE_DOM !== !1, D = A.SANITIZE_NAMED_PROPS || !1, X = A.KEEP_CONTENT !== !1, ne = A.IN_PLACE || !1, me = zf(A.ALLOWED_URI_REGEXP) ? A.ALLOWED_URI_REGEXP : bs, zn = typeof A.NAMESPACE == "string" ? A.NAMESPACE : Kt, vi = st(A, "MATHML_TEXT_INTEGRATION_POINTS") && A.MATHML_TEXT_INTEGRATION_POINTS && typeof A.MATHML_TEXT_INTEGRATION_POINTS == "object" ? pt(A.MATHML_TEXT_INTEGRATION_POINTS) : _e({}, Go), bi = st(A, "HTML_INTEGRATION_POINTS") && A.HTML_INTEGRATION_POINTS && typeof A.HTML_INTEGRATION_POINTS == "object" ? pt(A.HTML_INTEGRATION_POINTS) : _e({}, Wo);
    const F = st(A, "CUSTOM_ELEMENT_HANDLING") && A.CUSTOM_ELEMENT_HANDLING && typeof A.CUSTOM_ELEMENT_HANDLING == "object" ? pt(A.CUSTOM_ELEMENT_HANDLING) : tr(null);
    if (Ee = tr(null), st(F, "tagNameCheck") && Vo(F.tagNameCheck) && (Ee.tagNameCheck = F.tagNameCheck), st(F, "attributeNameCheck") && Vo(F.attributeNameCheck) && (Ee.attributeNameCheck = F.attributeNameCheck), st(F, "allowCustomizedBuiltInElements") && typeof F.allowCustomizedBuiltInElements == "boolean" && (Ee.allowCustomizedBuiltInElements = F.allowCustomizedBuiltInElements), ft(Ee), ee && (Ut = !1), p && (c = !0), ue && (ae = _e({}, ws), pe = tr(null), ue.html === !0 && (_e(ae, Es), _e(pe, ys)), ue.svg === !0 && (_e(ae, xi), _e(pe, $i), _e(pe, Hr)), ue.svgFilters === !0 && (_e(ae, Pi), _e(pe, $i), _e(pe, Hr)), ue.mathMl === !0 && (_e(ae, Di), _e(pe, vs), _e(pe, Hr))), At.tagCheck = null, At.attributeCheck = null, st(A, "ADD_TAGS") && (typeof A.ADD_TAGS == "function" ? At.tagCheck = A.ADD_TAGS : bn(A.ADD_TAGS) && (ae === Se && (ae = pt(ae)), _e(ae, A.ADD_TAGS, Me))), st(A, "ADD_ATTR") && (typeof A.ADD_ATTR == "function" ? At.attributeCheck = A.ADD_ATTR : bn(A.ADD_ATTR) && (pe === Fe && (pe = pt(pe)), _e(pe, A.ADD_ATTR, Me))), st(A, "ADD_URI_SAFE_ATTR") && bn(A.ADD_URI_SAFE_ATTR) && _e(Ei, A.ADD_URI_SAFE_ATTR, Me), st(A, "FORBID_CONTENTS") && bn(A.FORBID_CONTENTS) && (le === be && (le = pt(le)), _e(le, A.FORBID_CONTENTS, Me)), st(A, "ADD_FORBID_CONTENTS") && bn(A.ADD_FORBID_CONTENTS) && (le === be && (le = pt(le)), _e(le, A.ADD_FORBID_CONTENTS, Me)), X && (ae["#text"] = !0), w && _e(ae, ["html", "head", "body"]), ae.table && (_e(ae, ["tbody"]), delete Ae.tbody), A.TRUSTED_TYPES_POLICY) {
      if (typeof A.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Pn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof A.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Pn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const W = z;
      z = A.TRUSTED_TYPES_POLICY;
      try {
        re = G("");
      } catch (te) {
        throw z = W, te;
      }
    } else A.TRUSTED_TYPES_POLICY === null ? (z = void 0, re = "") : (z === void 0 && (z = we()), z && typeof re == "string" && (re = G("")));
    ct && ct(A), qn = A;
  }, zo = _e({}, [...xi, ...Pi, ...qf]), qo = _e({}, [...Di, ...Xf]), _u = function(A, F, W) {
    return F.namespaceURI === Kt ? A === "svg" : F.namespaceURI === Fr ? A === "svg" && (W === "annotation-xml" || vi[W]) : !!zo[A];
  }, Tu = function(A, F, W) {
    return F.namespaceURI === Kt ? A === "math" : F.namespaceURI === Mr ? A === "math" && bi[W] : !!qo[A];
  }, Nu = function(A, F, W) {
    return F.namespaceURI === Mr && !bi[W] || F.namespaceURI === Fr && !vi[W] ? !1 : !qo[A] && (wu[A] || !zo[A]);
  }, Iu = function(A) {
    let F = S(A);
    (!F || !F.tagName) && (F = {
      namespaceURI: zn,
      tagName: "template"
    });
    const W = Ir(A.tagName), te = Ir(F.tagName);
    return yi[A.namespaceURI] ? A.namespaceURI === Mr ? _u(W, F, te) : A.namespaceURI === Fr ? Tu(W, F, te) : A.namespaceURI === Kt ? Nu(W, F, te) : !!(dr === "application/xhtml+xml" && yi[A.namespaceURI]) : !1;
  }, dn = function(A) {
    Qn(e.removed, {
      element: A
    });
    try {
      S(A).removeChild(A);
    } catch {
      if (b(A), !S(A))
        throw Pn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Ur = function(A) {
    mr(A);
    const F = T(A);
    if (F) {
      const te = [];
      Jn(F, (ie) => {
        Qn(te, ie);
      }), Jn(te, (ie) => {
        try {
          b(ie);
        } catch {
        }
      });
    }
    const W = x(A);
    if (W)
      for (let te = W.length - 1; te >= 0; --te) {
        const ie = W[te], ge = ie && ie.name;
        if (typeof ge == "string")
          try {
            A.removeAttribute(ge);
          } catch {
          }
      }
  }, xn = function(A, F) {
    try {
      Qn(e.removed, {
        attribute: F.getAttributeNode(A),
        from: F
      });
    } catch {
      Qn(e.removed, {
        attribute: null,
        from: F
      });
    }
    if (F.removeAttribute(A), A === "is")
      if (c || p)
        try {
          dn(F);
        } catch {
        }
      else
        try {
          F.setAttribute(A, "");
        } catch {
        }
  }, Au = function(A) {
    const F = x(A);
    if (F)
      for (let W = F.length - 1; W >= 0; --W) {
        const te = F[W], ie = te && te.name;
        if (!(typeof ie != "string" || pe[Me(ie)]))
          try {
            A.removeAttribute(ie);
          } catch {
          }
      }
  }, mr = function(A) {
    const F = [A];
    for (; F.length > 0; ) {
      const W = F.pop();
      (R ? R(W) : W.nodeType) === Pt.element && Au(W);
      const ie = T(W);
      if (ie)
        for (let ge = ie.length - 1; ge >= 0; --ge)
          F.push(ie[ge]);
    }
  }, Ou = function(A) {
    if (!Le)
      return;
    const F = [A];
    for (; F.length > 0; ) {
      const W = F.pop(), te = R ? R(W) : W.nodeType;
      if (te === Pt.processingInstruction || te === Pt.comment && ot(Ts, W.data)) {
        try {
          b(W);
        } catch {
        }
        continue;
      }
      if (te === Pt.element) {
        const ge = W, Ce = Me(U ? U(W) : W.nodeName);
        try {
          ge.hasAttribute && ge.hasAttribute("patchsrc") && ge.removeAttribute("patchsrc"), ge.hasAttribute && ge.hasAttribute("for") && Ce !== "label" && Ce !== "output" && ge.removeAttribute("for");
        } catch {
        }
      }
      const ie = T(W);
      if (ie)
        for (let ge = ie.length - 1; ge >= 0; --ge)
          F.push(ie[ge]);
    }
  }, Xo = function(A) {
    let F = null, W = null;
    if (g)
      A = "<remove></remove>" + A;
    else {
      const ge = ps(A, /^[\r\n\t ]+/);
      W = ge && ge[0];
    }
    dr === "application/xhtml+xml" && zn === Kt && (A = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + A + "</body></html>");
    const te = z ? G(A) : A;
    if (zn === Kt)
      try {
        F = new s().parseFromString(te, dr);
      } catch {
      }
    if (!F || !F.documentElement) {
      F = J.createDocument(zn, "template", null);
      try {
        F.documentElement.innerHTML = wi ? re : te;
      } catch {
      }
    }
    const ie = F.body || F.documentElement;
    return A && W && ie.insertBefore(r.createTextNode(W), ie.childNodes[0] || null), zn === Kt ? He.call(F, w ? "html" : "body")[0] : w ? F.documentElement : ie;
  }, Ho = function(A) {
    const F = Z ? Z(A) : A.ownerDocument;
    return Oe.call(
      F || A,
      A,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, Br = function(A) {
    return A = wr(A, it, " "), A = wr(A, Te, " "), A = wr(A, ve, " "), A;
  }, Ti = function(A) {
    var F;
    A.normalize();
    const W = Z ? Z(A) : A.ownerDocument, te = Oe.call(
      W || A,
      A,
      // eslint-disable-next-line no-bitwise
      u.SHOW_TEXT | u.SHOW_COMMENT | u.SHOW_CDATA_SECTION | u.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let ie = te.nextNode();
    for (; ie; )
      ie.data = Br(ie.data), ie = te.nextNode();
    const ge = (F = A.querySelectorAll) === null || F === void 0 ? void 0 : F.call(A, "template");
    ge && Jn(ge, (Ce) => {
      Xn(Ce.content) && Ti(Ce.content);
    });
  }, jr = function(A) {
    const F = U ? U(A) : null;
    return typeof F != "string" || Me(F) !== "form" ? !1 : typeof A.nodeName != "string" || typeof A.textContent != "string" || typeof A.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    A.attributes !== x(A) || typeof A.removeAttribute != "function" || typeof A.setAttribute != "function" || typeof A.namespaceURI != "string" || typeof A.insertBefore != "function" || typeof A.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    A.nodeType !== R(A) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
    // "childNodes" shadows the prototype getter. Direct reads of
    // form.childNodes from a clobbered form return the named child
    // instead of the real NodeList, so any walk that reads it directly
    // skips the form's real children. Compare the direct read to the
    // cached Node.prototype getter — when the form's named-property
    // getter intercepts the read, the two values differ and we flag
    // the form. This catches every clobbering child type (input,
    // select, etc.) regardless of whether the named child happens to
    // carry a numeric .length, which a typeof-based probe would miss
    // (e.g. HTMLSelectElement.length is a defined unsigned-long).
    A.childNodes !== T(A);
  }, Xn = function(A) {
    if (!R || typeof A != "object" || A === null)
      return !1;
    try {
      return R(A) === Pt.documentFragment;
    } catch {
      return !1;
    }
  }, gr = function(A) {
    if (!R || typeof A != "object" || A === null)
      return !1;
    try {
      return typeof R(A) == "number";
    } catch {
      return !1;
    }
  };
  function Jt(q, A, F) {
    q.length !== 0 && Jn(q, (W) => {
      W.call(e, A, F, qn);
    });
  }
  const Su = function(A, F) {
    return !!(Le && A.hasChildNodes() && !gr(A.firstElementChild) && ot(_s, A.textContent) && ot(_s, A.innerHTML) || Le && A.namespaceURI === Kt && F === "style" && gr(A.firstElementChild) || A.nodeType === Pt.processingInstruction || Le && A.nodeType === Pt.comment && ot(Ts, A.data));
  }, Ru = function(A, F, W) {
    if (!Ae[F] && Jo(F) && (Ee.tagNameCheck instanceof RegExp && ot(Ee.tagNameCheck, F) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(F)))
      return !1;
    if (X && !le[F]) {
      const te = S(A), ie = T(A);
      if (ie && te) {
        const ge = ie.length;
        for (let Ce = ge - 1; Ce >= 0; --Ce) {
          const Ue = A === W ? y(ie[Ce], !0) : ie[Ce];
          te.insertBefore(Ue, E(A));
        }
      }
    }
    return dn(A), !0;
  }, Yo = function(A, F, W, te) {
    return A.length === 0 ? F : F === W || F === te ? pt(F) : F;
  }, Zo = function(A, F) {
    if (Jt(de.beforeSanitizeElements, A, null), A !== F && S(A) === null)
      return ne && mr(A), !0;
    if (jr(A))
      return dn(A), !0;
    const W = Me(U ? U(A) : A.nodeName);
    if (ae = Yo(de.uponSanitizeElement, ae, Se, L), Jt(de.uponSanitizeElement, A, {
      tagName: W,
      allowedTags: ae
    }), A !== F && S(A) === null)
      return ne && mr(A), !0;
    if (Su(A, W))
      return dn(A), !0;
    if (Ae[W] || !(At.tagCheck instanceof Function && At.tagCheck(W)) && !ae[W]) {
      const ie = Ru(A, W, F);
      return ie === !1 && Jt(de.afterSanitizeElements, A, null), ie;
    }
    if ((R ? R(A) : A.nodeType) === Pt.element && !Iu(A) || (W === "noscript" || W === "noembed" || W === "noframes") && ot(rh, A.innerHTML))
      return dn(A), !0;
    if (ee && A.nodeType === Pt.text) {
      const ie = Br(A.textContent);
      A.textContent !== ie && (Qn(e.removed, {
        element: A.cloneNode()
      }), A.textContent = ie);
    }
    return Jt(de.afterSanitizeElements, A, null), !1;
  }, Ko = function(A, F, W) {
    if (lt[F] || Le && F === "patchsrc" || Le && F === "for" && A !== "label" && A !== "output" || O && (F === "id" || F === "name") && (W in r || W in bu))
      return !1;
    const te = pe[F] || At.attributeCheck instanceof Function && At.attributeCheck(F, A);
    if (!(Ut && ot(Xt, F))) {
      if (!(yt && ot(I, F))) {
        if (te) {
          if (!Ei[F]) {
            if (!ot(me, wr(W, B, ""))) {
              if (!((F === "src" || F === "xlink:href" || F === "href") && A !== "script" && ds(W, "data:") === 0 && Vn[A])) {
                if (!(Zt && !ot(_, wr(W, B, "")))) {
                  if (W)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Jo(A) && (Ee.tagNameCheck instanceof RegExp && ot(Ee.tagNameCheck, A) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(A)) && (Ee.attributeNameCheck instanceof RegExp && ot(Ee.attributeNameCheck, F) || Ee.attributeNameCheck instanceof Function && Ee.attributeNameCheck(F, A)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          F === "is" && Ee.allowCustomizedBuiltInElements && (Ee.tagNameCheck instanceof RegExp && ot(Ee.tagNameCheck, W) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(W)))
        ) return !1;
      }
    }
    return !0;
  }, Cu = _e({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Jo = function(A) {
    return !Cu[Ir(A)] && ot(k, A);
  }, Lu = function(A, F, W, te) {
    if (z && typeof d == "object" && typeof d.getAttributeType == "function" && !W)
      switch (d.getAttributeType(A, F)) {
        case "TrustedHTML":
          return G(te);
        case "TrustedScriptURL":
          return he(te);
      }
    return te;
  }, xu = function(A, F, W, te) {
    try {
      W ? A.setAttributeNS(W, F, te) : A.setAttribute(F, te), jr(A) ? dn(A) : hs(e.removed);
    } catch {
      xn(F, A);
    }
  }, Qo = function(A) {
    Jt(de.beforeSanitizeAttributes, A, null);
    const F = A.attributes;
    if (!F || jr(A))
      return;
    pe = Yo(de.uponSanitizeAttribute, pe, Fe, $);
    const W = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: pe,
      forceKeepAttr: void 0
    };
    let te = F.length;
    const ie = Me(A.nodeName);
    for (; te--; ) {
      const ge = F[te], Ce = ge.name, Ue = ge.namespaceURI, Ot = ge.value, St = Me(Ce), Ii = Ot;
      let vt = Ce === "value" ? Ii : Uf(Ii);
      if (W.attrName = St, W.attrValue = vt, W.keepAttr = !0, W.forceKeepAttr = void 0, Jt(de.uponSanitizeAttribute, A, W), vt = W.attrValue, D && (St === "id" || St === "name") && ds(vt, M) !== 0 && (xn(Ce, A), vt = M + vt), Le && ot(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, vt)) {
        xn(Ce, A);
        continue;
      }
      if (St === "attributename" && ps(vt, "href")) {
        xn(Ce, A);
        continue;
      }
      if (!W.forceKeepAttr) {
        if (!W.keepAttr) {
          xn(Ce, A);
          continue;
        }
        if (!Ln && ot(ih, vt)) {
          xn(Ce, A);
          continue;
        }
        if (ee && (vt = Br(vt)), !Ko(ie, St, vt)) {
          xn(Ce, A);
          continue;
        }
        vt = Lu(ie, St, Ue, vt), vt !== Ii && xu(A, Ce, Ue, vt);
      }
    }
    Jt(de.afterSanitizeAttributes, A, null);
  }, Gr = function(A) {
    let F = null;
    const W = Ho(A);
    for (Jt(de.beforeSanitizeShadowDOM, A, null); F = W.nextNode(); )
      if (Jt(de.uponSanitizeShadowNode, F, null), Zo(F, A), Qo(F), Xn(F.content) && Gr(F.content), (R ? R(F) : F.nodeType) === Pt.element) {
        const ie = C(F);
        Xn(ie) && (Ni(ie), Gr(ie));
      }
    Jt(de.afterSanitizeShadowDOM, A, null);
  }, Ni = function(A) {
    const F = [{
      node: A,
      shadow: null
    }];
    for (; F.length > 0; ) {
      const W = F.pop();
      if (W.shadow) {
        Gr(W.shadow);
        continue;
      }
      const te = W.node, ge = (R ? R(te) : te.nodeType) === Pt.element, Ce = T(te);
      if (Ce)
        for (let Ue = Ce.length - 1; Ue >= 0; --Ue)
          F.push({
            node: Ce[Ue],
            shadow: null
          });
      if (ge) {
        const Ue = U ? U(te) : null;
        if (typeof Ue == "string" && Me(Ue) === "template") {
          const Ot = te.content;
          Xn(Ot) && F.push({
            node: Ot,
            shadow: null
          });
        }
      }
      if (ge) {
        const Ue = C(te);
        Xn(Ue) && F.push({
          node: null,
          shadow: Ue
        }, {
          node: Ue,
          shadow: null
        });
      }
    }
  };
  return e.sanitize = function(q) {
    let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, F = null, W = null, te = null, ie = null;
    if (wi = !q, wi && (q = "<!-->"), typeof q != "string" && !gr(q) && (q = Vf(q), typeof q != "string"))
      throw Pn("dirty is not a string, aborting");
    if (!e.isSupported)
      return q;
    N ? (ae = L, pe = $) : _i(A), (de.uponSanitizeElement.length > 0 || de.uponSanitizeAttribute.length > 0) && (ae = pt(ae)), de.uponSanitizeAttribute.length > 0 && (pe = pt(pe)), e.removed = [];
    const ge = ne && typeof q != "string" && gr(q);
    if (ge) {
      Ou(q);
      const Ot = U ? U(q) : q.nodeName;
      if (typeof Ot == "string") {
        const St = Me(Ot);
        if (!ae[St] || Ae[St])
          throw Ur(q), Pn("root node is forbidden and cannot be sanitized in-place");
      }
      if (jr(q))
        throw Ur(q), Pn("root node is clobbered and cannot be sanitized in-place");
      try {
        Ni(q);
      } catch (St) {
        throw Ur(q), St;
      }
    } else if (gr(q))
      F = Xo("<!---->"), W = F.ownerDocument.importNode(q, !0), W.nodeType === Pt.element && W.nodeName === "BODY" || W.nodeName === "HTML" ? F = W : F.appendChild(W), Ni(W);
    else {
      if (!c && !ee && !w && // eslint-disable-next-line unicorn/prefer-includes
      q.indexOf("<") === -1)
        return z && v ? G(q) : q;
      if (F = Xo(q), !F)
        return c ? null : v ? re : "";
    }
    F && g && dn(F.firstChild);
    const Ce = ge ? q : F;
    try {
      const Ot = Ho(Ce);
      for (; te = Ot.nextNode(); )
        Zo(te, Ce), Qo(te), Xn(te.content) && Gr(te.content);
    } catch (Ot) {
      throw ge && (Ur(q), Jn(e.removed, (St) => {
        St.element && mr(St.element);
      })), Ot;
    }
    if (ge)
      return Jn(e.removed, (Ot) => {
        Ot.element && mr(Ot.element);
      }), ee && Ti(q), q;
    if (c) {
      if (ee && Ti(F), p)
        for (ie = We.call(F.ownerDocument); F.firstChild; )
          ie.appendChild(F.firstChild);
      else
        ie = F;
      return (pe.shadowroot || pe.shadowrootmode) && (ie = $e.call(i, ie, !0)), ie;
    }
    let Ue = w ? F.outerHTML : F.innerHTML;
    return w && ae["!doctype"] && F.ownerDocument && F.ownerDocument.doctype && F.ownerDocument.doctype.name && ot(th, F.ownerDocument.doctype.name) && (Ue = "<!DOCTYPE " + F.ownerDocument.doctype.name + `>
` + Ue), ee && (Ue = Br(Ue)), z && v ? G(Ue) : Ue;
  }, e.setConfig = function() {
    let q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _i(q), N = !0, L = ae, $ = pe;
  }, e.clearConfig = function() {
    qn = null, N = !1, L = null, $ = null, z = P, re = "";
  }, e.isValidAttribute = function(q, A, F) {
    qn || _i({});
    const W = Me(q), te = Me(A);
    return Ko(W, te, F);
  }, e.addHook = function(q, A) {
    typeof A == "function" && st(de, q) && Qn(de[q], A);
  }, e.removeHook = function(q, A) {
    if (st(de, q)) {
      if (A !== void 0) {
        const F = Ff(de[q], A);
        return F === -1 ? void 0 : Mf(de[q], F, 1)[0];
      }
      return hs(de[q]);
    }
  }, e.removeHooks = function(q) {
    st(de, q) && (de[q] = []);
  }, e.removeAllHooks = function() {
    de = Ns();
  }, e;
}
Sl();
globalThis._nc_l10n_locale ?? (globalThis._nc_l10n_locale = typeof document < "u" && document.documentElement.dataset.locale || Intl.DateTimeFormat().resolvedOptions().locale.replaceAll(/-/g, "_"));
var Wa;
globalThis._nc_l10n_language ?? (globalThis._nc_l10n_language = typeof document < "u" && document.documentElement.lang || (((Wa = globalThis.navigator) == null ? void 0 : Wa.language) ?? "en"));
globalThis._oc_l10n_registry_translations ?? (globalThis._oc_l10n_registry_translations = {});
globalThis._oc_l10n_registry_plural_functions ?? (globalThis._oc_l10n_registry_plural_functions = {});
class ah extends Mc {
}
function lh() {
  return Ge.registry ?? (Ge.registry = new ah()), Ge.registry;
}
const Rl = Object.freeze({
  DEFAULT: "default",
  HIDDEN: "hidden"
});
function Is(n) {
  if (uh(n), Ge.fileActions ?? (Ge.fileActions = /* @__PURE__ */ new Map()), Ge.fileActions.has(n.id)) {
    ml.error(`FileAction ${n.id} already registered`, { action: n });
    return;
  }
  Ge.fileActions.set(n.id, n), lh().dispatchTypedEvent("register:action", new CustomEvent("register:action", { detail: n }));
}
function uh(n) {
  if (!n.id || typeof n.id != "string")
    throw new Error("Invalid id");
  if (!n.displayName || typeof n.displayName != "function")
    throw new Error("Invalid displayName function");
  if ("title" in n && typeof n.title != "function")
    throw new Error("Invalid title function");
  if (!n.iconSvgInline || typeof n.iconSvgInline != "function")
    throw new Error("Invalid iconSvgInline function");
  if (!n.exec || typeof n.exec != "function")
    throw new Error("Invalid exec function");
  if ("enabled" in n && typeof n.enabled != "function")
    throw new Error("Invalid enabled function");
  if ("execBatch" in n && typeof n.execBatch != "function")
    throw new Error("Invalid execBatch function");
  if ("order" in n && typeof n.order != "number")
    throw new Error("Invalid order");
  if (n.destructive !== void 0 && typeof n.destructive != "boolean")
    throw new Error("Invalid destructive flag");
  if ("parent" in n && typeof n.parent != "string")
    throw new Error("Invalid parent");
  if (n.default && !Object.values(Rl).includes(n.default))
    throw new Error("Invalid default");
  if ("inline" in n && typeof n.inline != "function")
    throw new Error("Invalid inline function");
  if ("renderInline" in n && typeof n.renderInline != "function")
    throw new Error("Invalid renderInline function");
  if ("hotkey" in n && n.hotkey !== void 0) {
    if (typeof n.hotkey != "object")
      throw new Error("Invalid hotkey configuration");
    if (typeof n.hotkey.key != "string" || !n.hotkey.key)
      throw new Error("Missing or invalid hotkey key");
    if (typeof n.hotkey.description != "string" || !n.hotkey.description)
      throw new Error("Missing or invalid hotkey description");
  }
}
const Cl = Object.freeze({
  /**
   * For actions where the user is intended to upload from their device
   */
  UploadFromDevice: 0,
  /**
   * For actions that create new nodes on the server without uploading
   */
  CreateNew: 1,
  /**
   * For everything not matching the other categories
   */
  Other: 2
});
let ch = class {
  constructor() {
    ce(this, "_entries", []);
  }
  registerEntry(e) {
    this.validateEntry(e), e.category = e.category ?? Cl.CreateNew, this._entries.push(e);
  }
  unregisterEntry(e) {
    const r = typeof e == "string" ? this.getEntryIndex(e) : this.getEntryIndex(e.id);
    if (r === -1) {
      ml.warn("Entry not found, nothing removed", { entry: e, entries: this.getEntries() });
      return;
    }
    this._entries.splice(r, 1);
  }
  /**
   * Get the list of registered entries
   *
   * @param context - The creation context. Usually the current folder
   */
  getEntries(e) {
    return e ? this._entries.filter((r) => typeof r.enabled == "function" ? r.enabled(e) : !0) : this._entries;
  }
  getEntryIndex(e) {
    return this._entries.findIndex((r) => r.id === e);
  }
  validateEntry(e) {
    if (!e.id || !e.displayName || !e.iconSvgInline || !e.handler)
      throw new Error("Invalid entry");
    if (typeof e.id != "string" || typeof e.displayName != "string")
      throw new Error("Invalid id or displayName property");
    if (e.iconSvgInline && typeof e.iconSvgInline != "string")
      throw new Error("Invalid icon provided");
    if (e.enabled !== void 0 && typeof e.enabled != "function")
      throw new Error("Invalid enabled property");
    if (typeof e.handler != "function")
      throw new Error("Invalid handler property");
    if ("order" in e && typeof e.order != "number")
      throw new Error("Invalid order property");
    if (this.getEntryIndex(e.id) !== -1)
      throw new Error("Duplicate entry");
  }
};
function fh() {
  return Ge.newFileMenu ?? (Ge.newFileMenu = new ch()), Ge.newFileMenu;
}
function hh(n) {
  return fh().registerEntry(n);
}
/*!
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
function hr() {
  return Nl("files_sharing", "isPublic", null) ?? document.querySelector('input#isPublic[type="hidden"][name="isPublic"][value="1"]') !== null;
}
function Ll() {
  var n;
  return Nl("files_sharing", "sharingToken", null) ?? ((n = document.querySelector('input#sharingToken[type="hidden"]')) == null ? void 0 : n.value) ?? null;
}
/*! For license information please see index.js.LICENSE.txt */
var ph = { 2: (n) => {
  function e(o, a, l) {
    o instanceof RegExp && (o = r(o, l)), a instanceof RegExp && (a = r(a, l));
    var f = i(o, a, l);
    return f && { start: f[0], end: f[1], pre: l.slice(0, f[0]), body: l.slice(f[0] + o.length, f[1]), post: l.slice(f[1] + a.length) };
  }
  function r(o, a) {
    var l = a.match(o);
    return l ? l[0] : null;
  }
  function i(o, a, l) {
    var f, u, h, s, d, m = l.indexOf(o), y = l.indexOf(a, m + 1), b = m;
    if (m >= 0 && y > 0) {
      for (f = [], h = l.length; b >= 0 && !d; ) b == m ? (f.push(b), m = l.indexOf(o, b + 1)) : f.length == 1 ? d = [f.pop(), y] : ((u = f.pop()) < h && (h = u, s = y), y = l.indexOf(a, b + 1)), b = m < y && m >= 0 ? m : y;
      f.length && (d = [h, s]);
    }
    return d;
  }
  n.exports = e, e.range = i;
}, 47: (n, e, r) => {
  var i = r(410), o = function(h) {
    return typeof h == "string";
  };
  function a(h, s) {
    for (var d = [], m = 0; m < h.length; m++) {
      var y = h[m];
      y && y !== "." && (y === ".." ? d.length && d[d.length - 1] !== ".." ? d.pop() : s && d.push("..") : d.push(y));
    }
    return d;
  }
  var l = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, f = {};
  function u(h) {
    return l.exec(h).slice(1);
  }
  f.resolve = function() {
    for (var h = "", s = !1, d = arguments.length - 1; d >= -1 && !s; d--) {
      var m = d >= 0 ? arguments[d] : Tt.cwd();
      if (!o(m)) throw new TypeError("Arguments to path.resolve must be strings");
      m && (h = m + "/" + h, s = m.charAt(0) === "/");
    }
    return (s ? "/" : "") + (h = a(h.split("/"), !s).join("/")) || ".";
  }, f.normalize = function(h) {
    var s = f.isAbsolute(h), d = h.substr(-1) === "/";
    return (h = a(h.split("/"), !s).join("/")) || s || (h = "."), h && d && (h += "/"), (s ? "/" : "") + h;
  }, f.isAbsolute = function(h) {
    return h.charAt(0) === "/";
  }, f.join = function() {
    for (var h = "", s = 0; s < arguments.length; s++) {
      var d = arguments[s];
      if (!o(d)) throw new TypeError("Arguments to path.join must be strings");
      d && (h += h ? "/" + d : d);
    }
    return f.normalize(h);
  }, f.relative = function(h, s) {
    function d(C) {
      for (var x = 0; x < C.length && C[x] === ""; x++) ;
      for (var R = C.length - 1; R >= 0 && C[R] === ""; R--) ;
      return x > R ? [] : C.slice(x, R + 1);
    }
    h = f.resolve(h).substr(1), s = f.resolve(s).substr(1);
    for (var m = d(h.split("/")), y = d(s.split("/")), b = Math.min(m.length, y.length), E = b, T = 0; T < b; T++) if (m[T] !== y[T]) {
      E = T;
      break;
    }
    var S = [];
    for (T = E; T < m.length; T++) S.push("..");
    return (S = S.concat(y.slice(E))).join("/");
  }, f._makeLong = function(h) {
    return h;
  }, f.dirname = function(h) {
    var s = u(h), d = s[0], m = s[1];
    return d || m ? (m && (m = m.substr(0, m.length - 1)), d + m) : ".";
  }, f.basename = function(h, s) {
    var d = u(h)[2];
    return s && d.substr(-1 * s.length) === s && (d = d.substr(0, d.length - s.length)), d;
  }, f.extname = function(h) {
    return u(h)[3];
  }, f.format = function(h) {
    if (!i.isObject(h)) throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof h);
    var s = h.root || "";
    if (!o(s)) throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof h.root);
    return (h.dir ? h.dir + f.sep : "") + (h.base || "");
  }, f.parse = function(h) {
    if (!o(h)) throw new TypeError("Parameter 'pathString' must be a string, not " + typeof h);
    var s = u(h);
    if (!s || s.length !== 4) throw new TypeError("Invalid path '" + h + "'");
    return s[1] = s[1] || "", s[2] = s[2] || "", s[3] = s[3] || "", { root: s[0], dir: s[0] + s[1].slice(0, s[1].length - 1), base: s[2], ext: s[3], name: s[2].slice(0, s[2].length - s[3].length) };
  }, f.sep = "/", f.delimiter = ":", n.exports = f;
}, 101: function(n, e, r) {
  var i;
  n = r.nmd(n), function() {
    var o = (n && n.exports, typeof Wr == "object" && Wr);
    o.global !== o && o.window;
    var a = function(s) {
      this.message = s;
    };
    (a.prototype = new Error()).name = "InvalidCharacterError";
    var l = function(s) {
      throw new a(s);
    }, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = /[\t\n\f\r ]/g, h = { encode: function(s) {
      s = String(s), /[^\0-\xFF]/.test(s) && l("The string to be encoded contains characters outside of the Latin1 range.");
      for (var d, m, y, b, E = s.length % 3, T = "", S = -1, C = s.length - E; ++S < C; ) d = s.charCodeAt(S) << 16, m = s.charCodeAt(++S) << 8, y = s.charCodeAt(++S), T += f.charAt((b = d + m + y) >> 18 & 63) + f.charAt(b >> 12 & 63) + f.charAt(b >> 6 & 63) + f.charAt(63 & b);
      return E == 2 ? (d = s.charCodeAt(S) << 8, m = s.charCodeAt(++S), T += f.charAt((b = d + m) >> 10) + f.charAt(b >> 4 & 63) + f.charAt(b << 2 & 63) + "=") : E == 1 && (b = s.charCodeAt(S), T += f.charAt(b >> 2) + f.charAt(b << 4 & 63) + "=="), T;
    }, decode: function(s) {
      var d = (s = String(s).replace(u, "")).length;
      d % 4 == 0 && (d = (s = s.replace(/==?$/, "")).length), (d % 4 == 1 || /[^+a-zA-Z0-9/]/.test(s)) && l("Invalid character: the string to be decoded is not correctly encoded.");
      for (var m, y, b = 0, E = "", T = -1; ++T < d; ) y = f.indexOf(s.charAt(T)), m = b % 4 ? 64 * m + y : y, b++ % 4 && (E += String.fromCharCode(255 & m >> (-2 * b & 6)));
      return E;
    }, version: "1.0.0" };
    (i = (function() {
      return h;
    }).call(e, r, e, n)) === void 0 || (n.exports = i);
  }();
}, 135: (n) => {
  function e(r) {
    return !!r.constructor && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r);
  }
  n.exports = function(r) {
    return r != null && (e(r) || function(i) {
      return typeof i.readFloatLE == "function" && typeof i.slice == "function" && e(i.slice(0, 0));
    }(r) || !!r._isBuffer);
  };
}, 172: (n, e) => {
  e.d = function(r) {
    if (!r) return 0;
    for (var i = (r = r.toString()).length, o = r.length; o--; ) {
      var a = r.charCodeAt(o);
      56320 <= a && a <= 57343 && o--, 127 < a && a <= 2047 ? i++ : 2047 < a && a <= 65535 && (i += 2);
    }
    return i;
  };
}, 285: (n, e, r) => {
  var i = r(2);
  n.exports = function(S) {
    return S ? (S.substr(0, 2) === "{}" && (S = "\\{\\}" + S.substr(2)), T(function(C) {
      return C.split("\\\\").join(o).split("\\{").join(a).split("\\}").join(l).split("\\,").join(f).split("\\.").join(u);
    }(S), !0).map(s)) : [];
  };
  var o = "\0SLASH" + Math.random() + "\0", a = "\0OPEN" + Math.random() + "\0", l = "\0CLOSE" + Math.random() + "\0", f = "\0COMMA" + Math.random() + "\0", u = "\0PERIOD" + Math.random() + "\0";
  function h(S) {
    return parseInt(S, 10) == S ? parseInt(S, 10) : S.charCodeAt(0);
  }
  function s(S) {
    return S.split(o).join("\\").split(a).join("{").split(l).join("}").split(f).join(",").split(u).join(".");
  }
  function d(S) {
    if (!S) return [""];
    var C = [], x = i("{", "}", S);
    if (!x) return S.split(",");
    var R = x.pre, U = x.body, Z = x.post, z = R.split(",");
    z[z.length - 1] += "{" + U + "}";
    var re = d(Z);
    return Z.length && (z[z.length - 1] += re.shift(), z.push.apply(z, re)), C.push.apply(C, z), C;
  }
  function m(S) {
    return "{" + S + "}";
  }
  function y(S) {
    return /^-?0\d/.test(S);
  }
  function b(S, C) {
    return S <= C;
  }
  function E(S, C) {
    return S >= C;
  }
  function T(S, C) {
    var x = [], R = i("{", "}", S);
    if (!R) return [S];
    var U = R.pre, Z = R.post.length ? T(R.post, !1) : [""];
    if (/\$$/.test(R.pre)) for (var z = 0; z < Z.length; z++) {
      var re = U + "{" + R.body + "}" + Z[z];
      x.push(re);
    }
    else {
      var P, ye, K = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(R.body), Q = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(R.body), G = K || Q, he = R.body.indexOf(",") >= 0;
      if (!G && !he) return R.post.match(/,(?!,).*\}/) ? T(S = R.pre + "{" + R.body + l + R.post) : [S];
      if (G) P = R.body.split(/\.\./);
      else if ((P = d(R.body)).length === 1 && (P = T(P[0], !1).map(m)).length === 1) return Z.map(function(Xt) {
        return R.pre + P[0] + Xt;
      });
      if (G) {
        var we = h(P[0]), Ie = h(P[1]), J = Math.max(P[0].length, P[1].length), Oe = P.length == 3 ? Math.abs(h(P[2])) : 1, We = b;
        Ie < we && (Oe *= -1, We = E);
        var He = P.some(y);
        ye = [];
        for (var $e = we; We($e, Ie); $e += Oe) {
          var de;
          if (Q) (de = String.fromCharCode($e)) === "\\" && (de = "");
          else if (de = String($e), He) {
            var it = J - de.length;
            if (it > 0) {
              var Te = new Array(it + 1).join("0");
              de = $e < 0 ? "-" + Te + de.slice(1) : Te + de;
            }
          }
          ye.push(de);
        }
      } else {
        ye = [];
        for (var ve = 0; ve < P.length; ve++) ye.push.apply(ye, T(P[ve], !1));
      }
      for (ve = 0; ve < ye.length; ve++) for (z = 0; z < Z.length; z++) re = U + ye[ve] + Z[z], (!C || G || re) && x.push(re);
    }
    return x;
  }
}, 298: (n) => {
  var e, r;
  e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = { rotl: function(i, o) {
    return i << o | i >>> 32 - o;
  }, rotr: function(i, o) {
    return i << 32 - o | i >>> o;
  }, endian: function(i) {
    if (i.constructor == Number) return 16711935 & r.rotl(i, 8) | 4278255360 & r.rotl(i, 24);
    for (var o = 0; o < i.length; o++) i[o] = r.endian(i[o]);
    return i;
  }, randomBytes: function(i) {
    for (var o = []; i > 0; i--) o.push(Math.floor(256 * Math.random()));
    return o;
  }, bytesToWords: function(i) {
    for (var o = [], a = 0, l = 0; a < i.length; a++, l += 8) o[l >>> 5] |= i[a] << 24 - l % 32;
    return o;
  }, wordsToBytes: function(i) {
    for (var o = [], a = 0; a < 32 * i.length; a += 8) o.push(i[a >>> 5] >>> 24 - a % 32 & 255);
    return o;
  }, bytesToHex: function(i) {
    for (var o = [], a = 0; a < i.length; a++) o.push((i[a] >>> 4).toString(16)), o.push((15 & i[a]).toString(16));
    return o.join("");
  }, hexToBytes: function(i) {
    for (var o = [], a = 0; a < i.length; a += 2) o.push(parseInt(i.substr(a, 2), 16));
    return o;
  }, bytesToBase64: function(i) {
    for (var o = [], a = 0; a < i.length; a += 3) for (var l = i[a] << 16 | i[a + 1] << 8 | i[a + 2], f = 0; f < 4; f++) 8 * a + 6 * f <= 8 * i.length ? o.push(e.charAt(l >>> 6 * (3 - f) & 63)) : o.push("=");
    return o.join("");
  }, base64ToBytes: function(i) {
    i = i.replace(/[^A-Z0-9+\/]/gi, "");
    for (var o = [], a = 0, l = 0; a < i.length; l = ++a % 4) l != 0 && o.push((e.indexOf(i.charAt(a - 1)) & Math.pow(2, -2 * l + 8) - 1) << 2 * l | e.indexOf(i.charAt(a)) >>> 6 - 2 * l);
    return o;
  } }, n.exports = r;
}, 345: () => {
}, 388: () => {
}, 410: () => {
}, 526: (n) => {
  var e = { utf8: { stringToBytes: function(r) {
    return e.bin.stringToBytes(unescape(encodeURIComponent(r)));
  }, bytesToString: function(r) {
    return decodeURIComponent(escape(e.bin.bytesToString(r)));
  } }, bin: { stringToBytes: function(r) {
    for (var i = [], o = 0; o < r.length; o++) i.push(255 & r.charCodeAt(o));
    return i;
  }, bytesToString: function(r) {
    for (var i = [], o = 0; o < r.length; o++) i.push(String.fromCharCode(r[o]));
    return i.join("");
  } } };
  n.exports = e;
}, 542: (n, e, r) => {
  (function() {
    var i = r(298), o = r(526).utf8, a = r(135), l = r(526).bin, f = function(u, h) {
      u.constructor == String ? u = h && h.encoding === "binary" ? l.stringToBytes(u) : o.stringToBytes(u) : a(u) ? u = Array.prototype.slice.call(u, 0) : Array.isArray(u) || u.constructor === Uint8Array || (u = u.toString());
      for (var s = i.bytesToWords(u), d = 8 * u.length, m = 1732584193, y = -271733879, b = -1732584194, E = 271733878, T = 0; T < s.length; T++) s[T] = 16711935 & (s[T] << 8 | s[T] >>> 24) | 4278255360 & (s[T] << 24 | s[T] >>> 8);
      s[d >>> 5] |= 128 << d % 32, s[14 + (d + 64 >>> 9 << 4)] = d;
      var S = f._ff, C = f._gg, x = f._hh, R = f._ii;
      for (T = 0; T < s.length; T += 16) {
        var U = m, Z = y, z = b, re = E;
        m = S(m, y, b, E, s[T + 0], 7, -680876936), E = S(E, m, y, b, s[T + 1], 12, -389564586), b = S(b, E, m, y, s[T + 2], 17, 606105819), y = S(y, b, E, m, s[T + 3], 22, -1044525330), m = S(m, y, b, E, s[T + 4], 7, -176418897), E = S(E, m, y, b, s[T + 5], 12, 1200080426), b = S(b, E, m, y, s[T + 6], 17, -1473231341), y = S(y, b, E, m, s[T + 7], 22, -45705983), m = S(m, y, b, E, s[T + 8], 7, 1770035416), E = S(E, m, y, b, s[T + 9], 12, -1958414417), b = S(b, E, m, y, s[T + 10], 17, -42063), y = S(y, b, E, m, s[T + 11], 22, -1990404162), m = S(m, y, b, E, s[T + 12], 7, 1804603682), E = S(E, m, y, b, s[T + 13], 12, -40341101), b = S(b, E, m, y, s[T + 14], 17, -1502002290), m = C(m, y = S(y, b, E, m, s[T + 15], 22, 1236535329), b, E, s[T + 1], 5, -165796510), E = C(E, m, y, b, s[T + 6], 9, -1069501632), b = C(b, E, m, y, s[T + 11], 14, 643717713), y = C(y, b, E, m, s[T + 0], 20, -373897302), m = C(m, y, b, E, s[T + 5], 5, -701558691), E = C(E, m, y, b, s[T + 10], 9, 38016083), b = C(b, E, m, y, s[T + 15], 14, -660478335), y = C(y, b, E, m, s[T + 4], 20, -405537848), m = C(m, y, b, E, s[T + 9], 5, 568446438), E = C(E, m, y, b, s[T + 14], 9, -1019803690), b = C(b, E, m, y, s[T + 3], 14, -187363961), y = C(y, b, E, m, s[T + 8], 20, 1163531501), m = C(m, y, b, E, s[T + 13], 5, -1444681467), E = C(E, m, y, b, s[T + 2], 9, -51403784), b = C(b, E, m, y, s[T + 7], 14, 1735328473), m = x(m, y = C(y, b, E, m, s[T + 12], 20, -1926607734), b, E, s[T + 5], 4, -378558), E = x(E, m, y, b, s[T + 8], 11, -2022574463), b = x(b, E, m, y, s[T + 11], 16, 1839030562), y = x(y, b, E, m, s[T + 14], 23, -35309556), m = x(m, y, b, E, s[T + 1], 4, -1530992060), E = x(E, m, y, b, s[T + 4], 11, 1272893353), b = x(b, E, m, y, s[T + 7], 16, -155497632), y = x(y, b, E, m, s[T + 10], 23, -1094730640), m = x(m, y, b, E, s[T + 13], 4, 681279174), E = x(E, m, y, b, s[T + 0], 11, -358537222), b = x(b, E, m, y, s[T + 3], 16, -722521979), y = x(y, b, E, m, s[T + 6], 23, 76029189), m = x(m, y, b, E, s[T + 9], 4, -640364487), E = x(E, m, y, b, s[T + 12], 11, -421815835), b = x(b, E, m, y, s[T + 15], 16, 530742520), m = R(m, y = x(y, b, E, m, s[T + 2], 23, -995338651), b, E, s[T + 0], 6, -198630844), E = R(E, m, y, b, s[T + 7], 10, 1126891415), b = R(b, E, m, y, s[T + 14], 15, -1416354905), y = R(y, b, E, m, s[T + 5], 21, -57434055), m = R(m, y, b, E, s[T + 12], 6, 1700485571), E = R(E, m, y, b, s[T + 3], 10, -1894986606), b = R(b, E, m, y, s[T + 10], 15, -1051523), y = R(y, b, E, m, s[T + 1], 21, -2054922799), m = R(m, y, b, E, s[T + 8], 6, 1873313359), E = R(E, m, y, b, s[T + 15], 10, -30611744), b = R(b, E, m, y, s[T + 6], 15, -1560198380), y = R(y, b, E, m, s[T + 13], 21, 1309151649), m = R(m, y, b, E, s[T + 4], 6, -145523070), E = R(E, m, y, b, s[T + 11], 10, -1120210379), b = R(b, E, m, y, s[T + 2], 15, 718787259), y = R(y, b, E, m, s[T + 9], 21, -343485551), m = m + U >>> 0, y = y + Z >>> 0, b = b + z >>> 0, E = E + re >>> 0;
      }
      return i.endian([m, y, b, E]);
    };
    f._ff = function(u, h, s, d, m, y, b) {
      var E = u + (h & s | ~h & d) + (m >>> 0) + b;
      return (E << y | E >>> 32 - y) + h;
    }, f._gg = function(u, h, s, d, m, y, b) {
      var E = u + (h & d | s & ~d) + (m >>> 0) + b;
      return (E << y | E >>> 32 - y) + h;
    }, f._hh = function(u, h, s, d, m, y, b) {
      var E = u + (h ^ s ^ d) + (m >>> 0) + b;
      return (E << y | E >>> 32 - y) + h;
    }, f._ii = function(u, h, s, d, m, y, b) {
      var E = u + (s ^ (h | ~d)) + (m >>> 0) + b;
      return (E << y | E >>> 32 - y) + h;
    }, f._blocksize = 16, f._digestsize = 16, n.exports = function(u, h) {
      if (u == null) throw new Error("Illegal argument " + u);
      var s = i.wordsToBytes(f(u, h));
      return h && h.asBytes ? s : h && h.asString ? l.bytesToString(s) : i.bytesToHex(s);
    };
  })();
}, 647: (n, e) => {
  var r = Object.prototype.hasOwnProperty;
  function i(a) {
    try {
      return decodeURIComponent(a.replace(/\+/g, " "));
    } catch {
      return null;
    }
  }
  function o(a) {
    try {
      return encodeURIComponent(a);
    } catch {
      return null;
    }
  }
  e.stringify = function(a, l) {
    l = l || "";
    var f, u, h = [];
    for (u in typeof l != "string" && (l = "?"), a) if (r.call(a, u)) {
      if ((f = a[u]) || f != null && !isNaN(f) || (f = ""), u = o(u), f = o(f), u === null || f === null) continue;
      h.push(u + "=" + f);
    }
    return h.length ? l + h.join("&") : "";
  }, e.parse = function(a) {
    for (var l, f = /([^=?#&]+)=?([^&]*)/g, u = {}; l = f.exec(a); ) {
      var h = i(l[1]), s = i(l[2]);
      h === null || s === null || h in u || (u[h] = s);
    }
    return u;
  };
}, 670: (n) => {
  n.exports = function(e, r) {
    if (r = r.split(":")[0], !(e = +e)) return !1;
    switch (r) {
      case "http":
      case "ws":
        return e !== 80;
      case "https":
      case "wss":
        return e !== 443;
      case "ftp":
        return e !== 21;
      case "gopher":
        return e !== 70;
      case "file":
        return !1;
    }
    return e !== 0;
  };
}, 737: (n, e, r) => {
  var i = r(670), o = r(647), a = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, l = /[\n\r\t]/g, f = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, u = /:\d+$/, h = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, s = /^[a-zA-Z]:/;
  function d(C) {
    return (C || "").toString().replace(a, "");
  }
  var m = [["#", "hash"], ["?", "query"], function(C, x) {
    return E(x.protocol) ? C.replace(/\\/g, "/") : C;
  }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]], y = { hash: 1, query: 1 };
  function b(C) {
    var x, R = (typeof window < "u" ? window : typeof Wr < "u" ? Wr : typeof self < "u" ? self : {}).location || {}, U = {}, Z = typeof (C = C || R);
    if (C.protocol === "blob:") U = new S(unescape(C.pathname), {});
    else if (Z === "string") for (x in U = new S(C, {}), y) delete U[x];
    else if (Z === "object") {
      for (x in C) x in y || (U[x] = C[x]);
      U.slashes === void 0 && (U.slashes = f.test(C.href));
    }
    return U;
  }
  function E(C) {
    return C === "file:" || C === "ftp:" || C === "http:" || C === "https:" || C === "ws:" || C === "wss:";
  }
  function T(C, x) {
    C = (C = d(C)).replace(l, ""), x = x || {};
    var R, U = h.exec(C), Z = U[1] ? U[1].toLowerCase() : "", z = !!U[2], re = !!U[3], P = 0;
    return z ? re ? (R = U[2] + U[3] + U[4], P = U[2].length + U[3].length) : (R = U[2] + U[4], P = U[2].length) : re ? (R = U[3] + U[4], P = U[3].length) : R = U[4], Z === "file:" ? P >= 2 && (R = R.slice(2)) : E(Z) ? R = U[4] : Z ? z && (R = R.slice(2)) : P >= 2 && E(x.protocol) && (R = U[4]), { protocol: Z, slashes: z || E(Z), slashesCount: P, rest: R };
  }
  function S(C, x, R) {
    if (C = (C = d(C)).replace(l, ""), !(this instanceof S)) return new S(C, x, R);
    var U, Z, z, re, P, ye, K = m.slice(), Q = typeof x, G = this, he = 0;
    for (Q !== "object" && Q !== "string" && (R = x, x = null), R && typeof R != "function" && (R = o.parse), U = !(Z = T(C || "", x = b(x))).protocol && !Z.slashes, G.slashes = Z.slashes || U && x.slashes, G.protocol = Z.protocol || x.protocol || "", C = Z.rest, (Z.protocol === "file:" && (Z.slashesCount !== 2 || s.test(C)) || !Z.slashes && (Z.protocol || Z.slashesCount < 2 || !E(G.protocol))) && (K[3] = [/(.*)/, "pathname"]); he < K.length; he++) typeof (re = K[he]) != "function" ? (z = re[0], ye = re[1], z != z ? G[ye] = C : typeof z == "string" ? ~(P = z === "@" ? C.lastIndexOf(z) : C.indexOf(z)) && (typeof re[2] == "number" ? (G[ye] = C.slice(0, P), C = C.slice(P + re[2])) : (G[ye] = C.slice(P), C = C.slice(0, P))) : (P = z.exec(C)) && (G[ye] = P[1], C = C.slice(0, P.index)), G[ye] = G[ye] || U && re[3] && x[ye] || "", re[4] && (G[ye] = G[ye].toLowerCase())) : C = re(C, G);
    R && (G.query = R(G.query)), U && x.slashes && G.pathname.charAt(0) !== "/" && (G.pathname !== "" || x.pathname !== "") && (G.pathname = function(we, Ie) {
      if (we === "") return Ie;
      for (var J = (Ie || "/").split("/").slice(0, -1).concat(we.split("/")), Oe = J.length, We = J[Oe - 1], He = !1, $e = 0; Oe--; ) J[Oe] === "." ? J.splice(Oe, 1) : J[Oe] === ".." ? (J.splice(Oe, 1), $e++) : $e && (Oe === 0 && (He = !0), J.splice(Oe, 1), $e--);
      return He && J.unshift(""), We !== "." && We !== ".." || J.push(""), J.join("/");
    }(G.pathname, x.pathname)), G.pathname.charAt(0) !== "/" && E(G.protocol) && (G.pathname = "/" + G.pathname), i(G.port, G.protocol) || (G.host = G.hostname, G.port = ""), G.username = G.password = "", G.auth && (~(P = G.auth.indexOf(":")) ? (G.username = G.auth.slice(0, P), G.username = encodeURIComponent(decodeURIComponent(G.username)), G.password = G.auth.slice(P + 1), G.password = encodeURIComponent(decodeURIComponent(G.password))) : G.username = encodeURIComponent(decodeURIComponent(G.auth)), G.auth = G.password ? G.username + ":" + G.password : G.username), G.origin = G.protocol !== "file:" && E(G.protocol) && G.host ? G.protocol + "//" + G.host : "null", G.href = G.toString();
  }
  S.prototype = { set: function(C, x, R) {
    var U = this;
    switch (C) {
      case "query":
        typeof x == "string" && x.length && (x = (R || o.parse)(x)), U[C] = x;
        break;
      case "port":
        U[C] = x, i(x, U.protocol) ? x && (U.host = U.hostname + ":" + x) : (U.host = U.hostname, U[C] = "");
        break;
      case "hostname":
        U[C] = x, U.port && (x += ":" + U.port), U.host = x;
        break;
      case "host":
        U[C] = x, u.test(x) ? (x = x.split(":"), U.port = x.pop(), U.hostname = x.join(":")) : (U.hostname = x, U.port = "");
        break;
      case "protocol":
        U.protocol = x.toLowerCase(), U.slashes = !R;
        break;
      case "pathname":
      case "hash":
        if (x) {
          var Z = C === "pathname" ? "/" : "#";
          U[C] = x.charAt(0) !== Z ? Z + x : x;
        } else U[C] = x;
        break;
      case "username":
      case "password":
        U[C] = encodeURIComponent(x);
        break;
      case "auth":
        var z = x.indexOf(":");
        ~z ? (U.username = x.slice(0, z), U.username = encodeURIComponent(decodeURIComponent(U.username)), U.password = x.slice(z + 1), U.password = encodeURIComponent(decodeURIComponent(U.password))) : U.username = encodeURIComponent(decodeURIComponent(x));
    }
    for (var re = 0; re < m.length; re++) {
      var P = m[re];
      P[4] && (U[P[1]] = U[P[1]].toLowerCase());
    }
    return U.auth = U.password ? U.username + ":" + U.password : U.username, U.origin = U.protocol !== "file:" && E(U.protocol) && U.host ? U.protocol + "//" + U.host : "null", U.href = U.toString(), U;
  }, toString: function(C) {
    C && typeof C == "function" || (C = o.stringify);
    var x, R = this, U = R.host, Z = R.protocol;
    Z && Z.charAt(Z.length - 1) !== ":" && (Z += ":");
    var z = Z + (R.protocol && R.slashes || E(R.protocol) ? "//" : "");
    return R.username ? (z += R.username, R.password && (z += ":" + R.password), z += "@") : R.password ? (z += ":" + R.password, z += "@") : R.protocol !== "file:" && E(R.protocol) && !U && R.pathname !== "/" && (z += "@"), (U[U.length - 1] === ":" || u.test(R.hostname) && !R.port) && (U += ":"), z += U + R.pathname, (x = typeof R.query == "object" ? C(R.query) : R.query) && (z += x.charAt(0) !== "?" ? "?" + x : x), R.hash && (z += R.hash), z;
  } }, S.extractProtocol = T, S.location = b, S.trimLeft = d, S.qs = o, n.exports = S;
}, 800: () => {
}, 805: () => {
}, 829: (n) => {
  function e(h) {
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, e(h);
  }
  function r(h) {
    var s = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return r = function(d) {
      if (d === null || (m = d, Function.toString.call(m).indexOf("[native code]") === -1)) return d;
      var m;
      if (typeof d != "function") throw new TypeError("Super expression must either be null or a function");
      if (s !== void 0) {
        if (s.has(d)) return s.get(d);
        s.set(d, y);
      }
      function y() {
        return i(d, arguments, a(this).constructor);
      }
      return y.prototype = Object.create(d.prototype, { constructor: { value: y, enumerable: !1, writable: !0, configurable: !0 } }), o(y, d);
    }, r(h);
  }
  function i(h, s, d) {
    return i = function() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }() ? Reflect.construct : function(m, y, b) {
      var E = [null];
      E.push.apply(E, y);
      var T = new (Function.bind.apply(m, E))();
      return b && o(T, b.prototype), T;
    }, i.apply(null, arguments);
  }
  function o(h, s) {
    return o = Object.setPrototypeOf || function(d, m) {
      return d.__proto__ = m, d;
    }, o(h, s);
  }
  function a(h) {
    return a = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, a(h);
  }
  var l = function(h) {
    function s(d) {
      var m;
      return function(y, b) {
        if (!(y instanceof b)) throw new TypeError("Cannot call a class as a function");
      }(this, s), (m = function(y, b) {
        return !b || e(b) !== "object" && typeof b != "function" ? function(E) {
          if (E === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return E;
        }(y) : b;
      }(this, a(s).call(this, d))).name = "ObjectPrototypeMutationError", m;
    }
    return function(d, m) {
      if (typeof m != "function" && m !== null) throw new TypeError("Super expression must either be null or a function");
      d.prototype = Object.create(m && m.prototype, { constructor: { value: d, writable: !0, configurable: !0 } }), m && o(d, m);
    }(s, h), s;
  }(r(Error));
  function f(h, s) {
    for (var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
    }, m = s.split("."), y = m.length, b = function(S) {
      var C = m[S];
      if (!h) return { v: void 0 };
      if (C === "+") {
        if (Array.isArray(h)) return { v: h.map(function(R, U) {
          var Z = m.slice(S + 1);
          return Z.length > 0 ? f(R, Z.join("."), d) : d(h, U, m, S);
        }) };
        var x = m.slice(0, S).join(".");
        throw new Error("Object at wildcard (".concat(x, ") is not an array"));
      }
      h = d(h, C, m, S);
    }, E = 0; E < y; E++) {
      var T = b(E);
      if (e(T) === "object") return T.v;
    }
    return h;
  }
  function u(h, s) {
    return h.length === s + 1;
  }
  n.exports = { set: function(h, s, d) {
    if (e(h) != "object" || h === null || s === void 0) return h;
    if (typeof s == "number") return h[s] = d, h[s];
    try {
      return f(h, s, function(m, y, b, E) {
        if (m === Reflect.getPrototypeOf({})) throw new l("Attempting to mutate Object.prototype");
        if (!m[y]) {
          var T = Number.isInteger(Number(b[E + 1])), S = b[E + 1] === "+";
          m[y] = T || S ? [] : {};
        }
        return u(b, E) && (m[y] = d), m[y];
      });
    } catch (m) {
      if (m instanceof l) throw m;
      return h;
    }
  }, get: function(h, s) {
    if (e(h) != "object" || h === null || s === void 0) return h;
    if (typeof s == "number") return h[s];
    try {
      return f(h, s, function(d, m) {
        return d[m];
      });
    } catch {
      return h;
    }
  }, has: function(h, s) {
    var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (e(h) != "object" || h === null || s === void 0) return !1;
    if (typeof s == "number") return s in h;
    try {
      var m = !1;
      return f(h, s, function(y, b, E, T) {
        if (!u(E, T)) return y && y[b];
        m = d.own ? y.hasOwnProperty(b) : b in y;
      }), m;
    } catch {
      return !1;
    }
  }, hasOwn: function(h, s, d) {
    return this.has(h, s, d || { own: !0 });
  }, isIn: function(h, s, d) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (e(h) != "object" || h === null || s === void 0) return !1;
    try {
      var y = !1, b = !1;
      return f(h, s, function(E, T, S, C) {
        return y = y || E === d || !!E && E[T] === d, b = u(S, C) && e(E) === "object" && T in E, E && E[T];
      }), m.validPath ? y && b : y;
    } catch {
      return !1;
    }
  }, ObjectPrototypeMutationError: l };
} }, As = {};
function Pe(n) {
  var e = As[n];
  if (e !== void 0) return e.exports;
  var r = As[n] = { id: n, loaded: !1, exports: {} };
  return ph[n].call(r.exports, r, r.exports, Pe), r.loaded = !0, r.exports;
}
Pe.n = (n) => {
  var e = n && n.__esModule ? () => n.default : () => n;
  return Pe.d(e, { a: e }), e;
}, Pe.d = (n, e) => {
  for (var r in e) Pe.o(e, r) && !Pe.o(n, r) && Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
}, Pe.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e), Pe.nmd = (n) => (n.paths = [], n.children || (n.children = []), n);
var dh = Pe(737), mh = Pe.n(dh);
function ki(n) {
  if (!ho(n)) throw new Error("Parameter was not an error");
}
function ho(n) {
  return !!n && typeof n == "object" && (e = n, Object.prototype.toString.call(e) === "[object Error]") || n instanceof Error;
  var e;
}
class It extends Error {
  constructor(e, r) {
    const i = [...arguments], { options: o, shortMessage: a } = function(f) {
      let u, h = "";
      if (f.length === 0) u = {};
      else if (ho(f[0])) u = { cause: f[0] }, h = f.slice(1).join(" ") || "";
      else if (f[0] && typeof f[0] == "object") u = Object.assign({}, f[0]), h = f.slice(1).join(" ") || "";
      else {
        if (typeof f[0] != "string") throw new Error("Invalid arguments passed to Layerr");
        u = {}, h = h = f.join(" ") || "";
      }
      return { options: u, shortMessage: h };
    }(i);
    let l = a;
    if (o.cause && (l = `${l}: ${o.cause.message}`), super(l), this.message = l, o.name && typeof o.name == "string" ? this.name = o.name : this.name = "Layerr", o.cause && Object.defineProperty(this, "_cause", { value: o.cause }), Object.defineProperty(this, "_info", { value: {} }), o.info && typeof o.info == "object" && Object.assign(this._info, o.info), Error.captureStackTrace) {
      const f = o.constructorOpt || this.constructor;
      Error.captureStackTrace(this, f);
    }
  }
  static cause(e) {
    return ki(e), e._cause && ho(e._cause) ? e._cause : null;
  }
  static fullStack(e) {
    ki(e);
    const r = It.cause(e);
    return r ? `${e.stack}
caused by: ${It.fullStack(r)}` : e.stack ?? "";
  }
  static info(e) {
    ki(e);
    const r = {}, i = It.cause(e);
    return i && Object.assign(r, It.info(i)), e._info && Object.assign(r, e._info), r;
  }
  toString() {
    let e = this.name || this.constructor.name || this.constructor.prototype.name;
    return this.message && (e = `${e}: ${this.message}`), e;
  }
}
var gh = Pe(47), ri = Pe.n(gh);
const Os = "__PATH_SEPARATOR_POSIX__", Ss = "__PATH_SEPARATOR_WINDOWS__";
function Be(n) {
  try {
    const e = n.replace(/\//g, Os).replace(/\\\\/g, Ss);
    return encodeURIComponent(e).split(Ss).join("\\\\").split(Os).join("/");
  } catch (e) {
    throw new It(e, "Failed encoding path");
  }
}
function Rs(n) {
  return n.startsWith("/") ? n : "/" + n;
}
function Lr(n) {
  let e = n;
  return e[0] !== "/" && (e = "/" + e), /^.+\/$/.test(e) && (e = e.substr(0, e.length - 1)), e;
}
function Eh(n) {
  let e = new (mh())(n).pathname;
  return e.length <= 0 && (e = "/"), Lr(e);
}
function je() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
  return function() {
    return function(i) {
      var o = [];
      if (i.length === 0) return "";
      if (typeof i[0] != "string") throw new TypeError("Url must be a string. Received " + i[0]);
      if (i[0].match(/^[^/:]+:\/*$/) && i.length > 1) {
        var a = i.shift();
        i[0] = a + i[0];
      }
      i[0].match(/^file:\/\/\//) ? i[0] = i[0].replace(/^([^/:]+):\/*/, "$1:///") : i[0] = i[0].replace(/^([^/:]+):\/*/, "$1://");
      for (var l = 0; l < i.length; l++) {
        var f = i[l];
        if (typeof f != "string") throw new TypeError("Url must be a string. Received " + f);
        f !== "" && (l > 0 && (f = f.replace(/^[\/]+/, "")), f = l < i.length - 1 ? f.replace(/[\/]+$/, "") : f.replace(/[\/]+$/, "/"), o.push(f));
      }
      var u = o.join("/"), h = (u = u.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
      return h.shift() + (h.length > 0 ? "?" : "") + h.join("&");
    }(typeof arguments[0] == "object" ? arguments[0] : [].slice.call(arguments));
  }(e.reduce((i, o, a) => ((a === 0 || o !== "/" || o === "/" && i[i.length - 1] !== "/") && i.push(o), i), []));
}
var wh = Pe(542), vr = Pe.n(wh);
function Cs(n, e) {
  const r = n.url.replace("//", ""), i = r.indexOf("/") == -1 ? "/" : r.slice(r.indexOf("/")), o = n.method ? n.method.toUpperCase() : "GET", a = !!/(^|,)\s*auth\s*($|,)/.test(e.qop) && "auth", l = `00000000${e.nc}`.slice(-8), f = function(m, y, b, E, T, S, C) {
    const x = C || vr()(`${y}:${b}:${E}`);
    return m && m.toLowerCase() === "md5-sess" ? vr()(`${x}:${T}:${S}`) : x;
  }(e.algorithm, e.username, e.realm, e.password, e.nonce, e.cnonce, e.ha1), u = vr()(`${o}:${i}`), h = a ? vr()(`${f}:${e.nonce}:${l}:${e.cnonce}:${a}:${u}`) : vr()(`${f}:${e.nonce}:${u}`), s = { username: e.username, realm: e.realm, nonce: e.nonce, uri: i, qop: a, response: h, nc: l, cnonce: e.cnonce, algorithm: e.algorithm, opaque: e.opaque }, d = [];
  for (const m in s) s[m] && (m === "qop" || m === "nc" || m === "algorithm" ? d.push(`${m}=${s[m]}`) : d.push(`${m}="${s[m]}"`));
  return `Digest ${d.join(", ")}`;
}
function xl(n) {
  return (n.headers && n.headers.get("www-authenticate") || "").split(/\s/)[0].toLowerCase() === "digest";
}
var yh = Pe(101), Pl = Pe.n(yh);
function Ls(n) {
  return Pl().decode(n);
}
function xs(n, e) {
  var r;
  return `Basic ${r = `${n}:${e}`, Pl().encode(r)}`;
}
const Ps = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : typeof window < "u" ? window : globalThis, vh = Ps.fetch.bind(Ps);
let Lt = function(n) {
  return n.Auto = "auto", n.Digest = "digest", n.None = "none", n.Password = "password", n.Token = "token", n;
}({}), An = function(n) {
  return n.DataTypeNoLength = "data-type-no-length", n.InvalidAuthType = "invalid-auth-type", n.InvalidOutputFormat = "invalid-output-format", n.LinkUnsupportedAuthType = "link-unsupported-auth", n.InvalidUpdateRange = "invalid-update-range", n.NotSupported = "not-supported", n;
}({});
function Dl(n, e, r, i, o) {
  switch (n.authType) {
    case Lt.Auto:
      e && r && (n.headers.Authorization = xs(e, r));
      break;
    case Lt.Digest:
      n.digest = /* @__PURE__ */ function(l, f, u) {
        return { username: l, password: f, ha1: u, nc: 0, algorithm: "md5", hasDigestAuth: !1 };
      }(e, r, o);
      break;
    case Lt.None:
      break;
    case Lt.Password:
      n.headers.Authorization = xs(e, r);
      break;
    case Lt.Token:
      n.headers.Authorization = `${(a = i).token_type} ${a.access_token}`;
      break;
    default:
      throw new It({ info: { code: An.InvalidAuthType } }, `Invalid auth type: ${n.authType}`);
  }
  var a;
}
Pe(345), Pe(800);
const Ds = "@@HOTPATCHER", bh = () => {
};
function Fi(n) {
  return { original: n, methods: [n], final: !1 };
}
class _h {
  constructor() {
    this._configuration = { registry: {}, getEmptyAction: "null" }, this.__type__ = Ds;
  }
  get configuration() {
    return this._configuration;
  }
  get getEmptyAction() {
    return this.configuration.getEmptyAction;
  }
  set getEmptyAction(e) {
    this.configuration.getEmptyAction = e;
  }
  control(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    if (!e || e.__type__ !== Ds) throw new Error("Failed taking control of target HotPatcher instance: Invalid type or object");
    return Object.keys(e.configuration.registry).forEach((i) => {
      this.configuration.registry.hasOwnProperty(i) ? r && (this.configuration.registry[i] = Object.assign({}, e.configuration.registry[i])) : this.configuration.registry[i] = Object.assign({}, e.configuration.registry[i]);
    }), e._configuration = this.configuration, this;
  }
  execute(e) {
    const r = this.get(e) || bh;
    for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) o[a - 1] = arguments[a];
    return r(...o);
  }
  get(e) {
    const r = this.configuration.registry[e];
    if (!r) switch (this.getEmptyAction) {
      case "null":
        return null;
      case "throw":
        throw new Error(`Failed handling method request: No method provided for override: ${e}`);
      default:
        throw new Error(`Failed handling request which resulted in an empty method: Invalid empty-action specified: ${this.getEmptyAction}`);
    }
    return function() {
      for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
      if (o.length === 0) throw new Error("Failed creating sequence: No functions provided");
      return function() {
        for (var l = arguments.length, f = new Array(l), u = 0; u < l; u++) f[u] = arguments[u];
        let h = f;
        const s = this;
        for (; o.length > 0; ) h = [o.shift().apply(s, h)];
        return h[0];
      };
    }(...r.methods);
  }
  isPatched(e) {
    return !!this.configuration.registry[e];
  }
  patch(e, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { chain: o = !1 } = i;
    if (this.configuration.registry[e] && this.configuration.registry[e].final) throw new Error(`Failed patching '${e}': Method marked as being final`);
    if (typeof r != "function") throw new Error(`Failed patching '${e}': Provided method is not a function`);
    if (o) this.configuration.registry[e] ? this.configuration.registry[e].methods.push(r) : this.configuration.registry[e] = Fi(r);
    else if (this.isPatched(e)) {
      const { original: a } = this.configuration.registry[e];
      this.configuration.registry[e] = Object.assign(Fi(r), { original: a });
    } else this.configuration.registry[e] = Fi(r);
    return this;
  }
  patchInline(e, r) {
    this.isPatched(e) || this.patch(e, r);
    for (var i = arguments.length, o = new Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) o[a - 2] = arguments[a];
    return this.execute(e, ...o);
  }
  plugin(e) {
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
    return i.forEach((a) => {
      this.patch(e, a, { chain: !0 });
    }), this;
  }
  restore(e) {
    if (!this.isPatched(e)) throw new Error(`Failed restoring method: No method present for key: ${e}`);
    if (typeof this.configuration.registry[e].original != "function") throw new Error(`Failed restoring method: Original method not found or of invalid type for key: ${e}`);
    return this.configuration.registry[e].methods = [this.configuration.registry[e].original], this;
  }
  setFinal(e) {
    if (!this.configuration.registry.hasOwnProperty(e)) throw new Error(`Failed marking '${e}' as final: No method found for key`);
    return this.configuration.registry[e].final = !0, this;
  }
}
let Mi = null;
function Ao() {
  return Mi || (Mi = new _h()), Mi;
}
function ii(n) {
  return function(e) {
    if (typeof e != "object" || e === null || Object.prototype.toString.call(e) != "[object Object]") return !1;
    if (Object.getPrototypeOf(e) === null) return !0;
    let r = e;
    for (; Object.getPrototypeOf(r) !== null; ) r = Object.getPrototypeOf(r);
    return Object.getPrototypeOf(e) === r;
  }(n) ? Object.assign({}, n) : Object.setPrototypeOf(Object.assign({}, n), Object.getPrototypeOf(n));
}
function $s() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
  let i = null, o = [...e];
  for (; o.length > 0; ) {
    const a = o.shift();
    i = i ? $l(i, a) : ii(a);
  }
  return i;
}
function $l(n, e) {
  const r = ii(n);
  return Object.keys(e).forEach((i) => {
    r.hasOwnProperty(i) ? Array.isArray(e[i]) ? r[i] = Array.isArray(r[i]) ? [...r[i], ...e[i]] : [...e[i]] : typeof e[i] == "object" && e[i] ? r[i] = typeof r[i] == "object" && r[i] ? $l(r[i], e[i]) : ii(e[i]) : r[i] = e[i] : r[i] = e[i];
  }), r;
}
function Th(n) {
  const e = {};
  for (const r of n.keys()) e[r] = n.get(r);
  return e;
}
function po() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
  if (e.length === 0) return {};
  const i = {};
  return e.reduce((o, a) => (Object.keys(a).forEach((l) => {
    const f = l.toLowerCase();
    i.hasOwnProperty(f) ? o[i[f]] = a[l] : (i[f] = l, o[l] = a[l]);
  }), o), {});
}
Pe(805);
const Nh = typeof ArrayBuffer == "function", { toString: Ih } = Object.prototype;
function kl(n) {
  return Nh && (n instanceof ArrayBuffer || Ih.call(n) === "[object ArrayBuffer]");
}
function Fl(n) {
  return n != null && n.constructor != null && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n);
}
function Oo(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
function mo(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const Ml = Oo(function(n) {
  const e = n._digest;
  return delete n._digest, e.hasDigestAuth && (n = $s(n, { headers: { Authorization: Cs(n, e) } })), mo(oi(n), function(r) {
    let i = !1;
    return o = function(l) {
      return i ? l : r;
    }, (a = function() {
      if (r.status == 401) return e.hasDigestAuth = function(l, f) {
        if (!xl(l)) return !1;
        const u = /([a-z0-9_-]+)=(?:"([^"]+)"|([a-z0-9_-]+))/gi;
        for (; ; ) {
          const h = l.headers && l.headers.get("www-authenticate") || "", s = u.exec(h);
          if (!s) break;
          f[s[1]] = s[2] || s[3];
        }
        return f.nc += 1, f.cnonce = function() {
          let h = "";
          for (let s = 0; s < 32; ++s) h = `${h}${"abcdef0123456789"[Math.floor(16 * Math.random())]}`;
          return h;
        }(), !0;
      }(r, e), function() {
        if (e.hasDigestAuth) return mo(oi(n = $s(n, { headers: { Authorization: Cs(n, e) } })), function(l) {
          return l.status == 401 ? e.hasDigestAuth = !1 : e.nc++, i = !0, l;
        });
      }();
      e.nc++;
    }()) && a.then ? a.then(o) : o(a);
    var o, a;
  });
}), Ah = Oo(function(n, e) {
  return mo(oi(n), function(r) {
    return r.ok ? (e.authType = Lt.Password, r) : r.status == 401 && xl(r) ? (e.authType = Lt.Digest, Dl(e, e.username, e.password, void 0, void 0), n._digest = e.digest, Ml(n)) : r;
  });
}), tt = Oo(function(n, e) {
  return e.authType === Lt.Auto ? Ah(n, e) : n._digest ? Ml(n) : oi(n);
});
function nt(n, e, r) {
  const i = ii(n);
  return i.headers = po(e.headers, i.headers || {}, r.headers || {}), r.data !== void 0 && (i.data = r.data), r.signal && (i.signal = r.signal), e.httpAgent && (i.httpAgent = e.httpAgent), e.httpsAgent && (i.httpsAgent = e.httpsAgent), e.digest && (i._digest = e.digest), typeof e.withCredentials == "boolean" && (i.withCredentials = e.withCredentials), i;
}
function oi(n) {
  const e = Ao();
  return e.patchInline("request", (r) => e.patchInline("fetch", vh, r.url, function(i) {
    let o = {};
    const a = { method: i.method };
    if (i.headers && (o = po(o, i.headers)), i.data !== void 0) {
      const [l, f] = function(u) {
        if (typeof u == "string") return [u, {}];
        if (Fl(u)) return [u, {}];
        if (kl(u)) return [u, {}];
        if (u && typeof u == "object") return [JSON.stringify(u), { "content-type": "application/json" }];
        throw new Error("Unable to convert request body: Unexpected body type: " + typeof u);
      }(i.data);
      a.body = l, o = po(o, f);
    }
    return i.signal && (a.signal = i.signal), i.withCredentials && (a.credentials = "include"), a.headers = o, a;
  }(r)), n);
}
var Oh = Pe(285);
const si = (n) => {
  if (typeof n != "string") throw new TypeError("invalid pattern");
  if (n.length > 65536) throw new TypeError("pattern is too long");
}, Sh = { "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", !0], "[:alpha:]": ["\\p{L}\\p{Nl}", !0], "[:ascii:]": ["\\x00-\\x7f", !1], "[:blank:]": ["\\p{Zs}\\t", !0], "[:cntrl:]": ["\\p{Cc}", !0], "[:digit:]": ["\\p{Nd}", !0], "[:graph:]": ["\\p{Z}\\p{C}", !0, !0], "[:lower:]": ["\\p{Ll}", !0], "[:print:]": ["\\p{C}", !0], "[:punct:]": ["\\p{P}", !0], "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", !0], "[:upper:]": ["\\p{Lu}", !0], "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", !0], "[:xdigit:]": ["A-Fa-f0-9", !1] }, br = (n) => n.replace(/[[\]\\-]/g, "\\$&"), ks = (n) => n.join(""), Rh = (n, e) => {
  const r = e;
  if (n.charAt(r) !== "[") throw new Error("not in a brace expression");
  const i = [], o = [];
  let a = r + 1, l = !1, f = !1, u = !1, h = !1, s = r, d = "";
  e: for (; a < n.length; ) {
    const E = n.charAt(a);
    if (E !== "!" && E !== "^" || a !== r + 1) {
      if (E === "]" && l && !u) {
        s = a + 1;
        break;
      }
      if (l = !0, E !== "\\" || u) {
        if (E === "[" && !u) {
          for (const [T, [S, C, x]] of Object.entries(Sh)) if (n.startsWith(T, a)) {
            if (d) return ["$.", !1, n.length - r, !0];
            a += T.length, x ? o.push(S) : i.push(S), f = f || C;
            continue e;
          }
        }
        u = !1, d ? (E > d ? i.push(br(d) + "-" + br(E)) : E === d && i.push(br(E)), d = "", a++) : n.startsWith("-]", a + 1) ? (i.push(br(E + "-")), a += 2) : n.startsWith("-", a + 1) ? (d = E, a += 2) : (i.push(br(E)), a++);
      } else u = !0, a++;
    } else h = !0, a++;
  }
  if (s < a) return ["", !1, 0, !1];
  if (!i.length && !o.length) return ["$.", !1, n.length - r, !0];
  if (o.length === 0 && i.length === 1 && /^\\?.$/.test(i[0]) && !h)
    return [(m = i[0].length === 2 ? i[0].slice(-1) : i[0], m.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")), !1, s - r, !1];
  var m;
  const y = "[" + (h ? "^" : "") + ks(i) + "]", b = "[" + (h ? "" : "^") + ks(o) + "]";
  return [i.length && o.length ? "(" + y + "|" + b + ")" : i.length ? y : b, f, s - r, !0];
}, Ar = function(n) {
  let { windowsPathsNoEscape: e = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return e ? n.replace(/\[([^\/\\])\]/g, "$1") : n.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
}, Ch = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), Fs = (n) => Ch.has(n), Ui = "(?!\\.)", Lh = /* @__PURE__ */ new Set(["[", "."]), xh = /* @__PURE__ */ new Set(["..", "."]), Ph = new Set("().*{}+?[]^$\\!"), So = "[^/]", Ms = So + "*?", Us = So + "+?";
var Qe, at, un, ke, Ze, _n, jn, Tn, rn, Gn, Pr, Wn, Ul, Nn, ti, go, Bl;
const _t = class _t {
  constructor(e, r) {
    Rt(this, Wn);
    ce(this, "type");
    Rt(this, Qe);
    Rt(this, at);
    Rt(this, un, !1);
    Rt(this, ke, []);
    Rt(this, Ze);
    Rt(this, _n);
    Rt(this, jn);
    Rt(this, Tn, !1);
    Rt(this, rn);
    Rt(this, Gn);
    Rt(this, Pr, !1);
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.type = e, e && Ve(this, at, !0), Ve(this, Ze, r), Ve(this, Qe, H(this, Ze) ? H(H(this, Ze), Qe) : this), Ve(this, rn, H(this, Qe) === this ? i : H(H(this, Qe), rn)), Ve(this, jn, H(this, Qe) === this ? [] : H(H(this, Qe), jn)), e !== "!" || H(H(this, Qe), Tn) || H(this, jn).push(this), Ve(this, _n, H(this, Ze) ? H(H(this, Ze), ke).length : 0);
  }
  get hasMagic() {
    if (H(this, at) !== void 0) return H(this, at);
    for (const e of H(this, ke)) if (typeof e != "string" && (e.type || e.hasMagic)) return Ve(this, at, !0);
    return H(this, at);
  }
  toString() {
    return H(this, Gn) !== void 0 ? H(this, Gn) : this.type ? Ve(this, Gn, this.type + "(" + H(this, ke).map((e) => String(e)).join("|") + ")") : Ve(this, Gn, H(this, ke).map((e) => String(e)).join(""));
  }
  push() {
    for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
    for (const o of r) if (o !== "") {
      if (typeof o != "string" && !(o instanceof _t && H(o, Ze) === this)) throw new Error("invalid part: " + o);
      H(this, ke).push(o);
    }
  }
  toJSON() {
    var r;
    const e = this.type === null ? H(this, ke).slice().map((i) => typeof i == "string" ? i : i.toJSON()) : [this.type, ...H(this, ke).map((i) => i.toJSON())];
    return this.isStart() && !this.type && e.unshift([]), this.isEnd() && (this === H(this, Qe) || H(H(this, Qe), Tn) && ((r = H(this, Ze)) == null ? void 0 : r.type) === "!") && e.push({}), e;
  }
  isStart() {
    var r;
    if (H(this, Qe) === this) return !0;
    if (!((r = H(this, Ze)) != null && r.isStart())) return !1;
    if (H(this, _n) === 0) return !0;
    const e = H(this, Ze);
    for (let i = 0; i < H(this, _n); i++) {
      const o = H(e, ke)[i];
      if (!(o instanceof _t && o.type === "!")) return !1;
    }
    return !0;
  }
  isEnd() {
    var r, i, o;
    if (H(this, Qe) === this || ((r = H(this, Ze)) == null ? void 0 : r.type) === "!") return !0;
    if (!((i = H(this, Ze)) != null && i.isEnd())) return !1;
    if (!this.type) return (o = H(this, Ze)) == null ? void 0 : o.isEnd();
    const e = H(this, Ze) ? H(H(this, Ze), ke).length : 0;
    return H(this, _n) === e - 1;
  }
  copyIn(e) {
    typeof e == "string" ? this.push(e) : this.push(e.clone(this));
  }
  clone(e) {
    const r = new _t(this.type, e);
    for (const i of H(this, ke)) r.copyIn(i);
    return r;
  }
  static fromGlob(e) {
    var o;
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = new _t(null, void 0, r);
    return mn(o = _t, Nn, ti).call(o, e, i, 0, r), i;
  }
  toMMPattern() {
    if (this !== H(this, Qe)) return H(this, Qe).toMMPattern();
    const e = this.toString(), [r, i, o, a] = this.toRegExpSource();
    if (!(o || H(this, at) || H(this, rn).nocase && !H(this, rn).nocaseMagicOnly && e.toUpperCase() !== e.toLowerCase())) return i;
    const l = (H(this, rn).nocase ? "i" : "") + (a ? "u" : "");
    return Object.assign(new RegExp(`^${r}$`, l), { _src: r, _glob: e });
  }
  get options() {
    return H(this, rn);
  }
  toRegExpSource(e) {
    var u;
    const r = e ?? !!H(this, rn).dot;
    if (H(this, Qe) === this && mn(this, Wn, Ul).call(this), !this.type) {
      const h = this.isStart() && this.isEnd(), s = H(this, ke).map((y) => {
        var C;
        const [b, E, T, S] = typeof y == "string" ? mn(C = _t, Nn, Bl).call(C, y, H(this, at), h) : y.toRegExpSource(e);
        return Ve(this, at, H(this, at) || T), Ve(this, un, H(this, un) || S), b;
      }).join("");
      let d = "";
      if (this.isStart() && typeof H(this, ke)[0] == "string" && (H(this, ke).length !== 1 || !xh.has(H(this, ke)[0]))) {
        const y = Lh, b = r && y.has(s.charAt(0)) || s.startsWith("\\.") && y.has(s.charAt(2)) || s.startsWith("\\.\\.") && y.has(s.charAt(4)), E = !r && !e && y.has(s.charAt(0));
        d = b ? "(?!(?:^|/)\\.\\.?(?:$|/))" : E ? Ui : "";
      }
      let m = "";
      return this.isEnd() && H(H(this, Qe), Tn) && ((u = H(this, Ze)) == null ? void 0 : u.type) === "!" && (m = "(?:$|\\/)"), [d + s + m, Ar(s), Ve(this, at, !!H(this, at)), H(this, un)];
    }
    const i = this.type === "*" || this.type === "+", o = this.type === "!" ? "(?:(?!(?:" : "(?:";
    let a = mn(this, Wn, go).call(this, r);
    if (this.isStart() && this.isEnd() && !a && this.type !== "!") {
      const h = this.toString();
      return Ve(this, ke, [h]), this.type = null, Ve(this, at, void 0), [h, Ar(this.toString()), !1, !1];
    }
    let l = !i || e || r ? "" : mn(this, Wn, go).call(this, !0);
    l === a && (l = ""), l && (a = `(?:${a})(?:${l})*?`);
    let f = "";
    return f = this.type === "!" && H(this, Pr) ? (this.isStart() && !r ? Ui : "") + Us : o + a + (this.type === "!" ? "))" + (!this.isStart() || r || e ? "" : Ui) + Ms + ")" : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && l ? ")" : this.type === "*" && l ? ")?" : `)${this.type}`), [f, Ar(a), Ve(this, at, !!H(this, at)), H(this, un)];
  }
};
Qe = new WeakMap(), at = new WeakMap(), un = new WeakMap(), ke = new WeakMap(), Ze = new WeakMap(), _n = new WeakMap(), jn = new WeakMap(), Tn = new WeakMap(), rn = new WeakMap(), Gn = new WeakMap(), Pr = new WeakMap(), Wn = new WeakSet(), Ul = function() {
  if (this !== H(this, Qe)) throw new Error("should only call on root");
  if (H(this, Tn)) return this;
  let e;
  for (this.toString(), Ve(this, Tn, !0); e = H(this, jn).pop(); ) {
    if (e.type !== "!") continue;
    let r = e, i = H(r, Ze);
    for (; i; ) {
      for (let o = H(r, _n) + 1; !i.type && o < H(i, ke).length; o++) for (const a of H(e, ke)) {
        if (typeof a == "string") throw new Error("string part in extglob AST??");
        a.copyIn(H(i, ke)[o]);
      }
      r = i, i = H(r, Ze);
    }
  }
  return this;
}, Nn = new WeakSet(), ti = function(e, r, i, o) {
  var y, b;
  let a = !1, l = !1, f = -1, u = !1;
  if (r.type === null) {
    let E = i, T = "";
    for (; E < e.length; ) {
      const S = e.charAt(E++);
      if (a || S === "\\") a = !a, T += S;
      else if (l) E === f + 1 ? S !== "^" && S !== "!" || (u = !0) : S !== "]" || E === f + 2 && u || (l = !1), T += S;
      else if (S !== "[") if (o.noext || !Fs(S) || e.charAt(E) !== "(") T += S;
      else {
        r.push(T), T = "";
        const C = new _t(S, r);
        E = mn(y = _t, Nn, ti).call(y, e, C, E, o), r.push(C);
      }
      else l = !0, f = E, u = !1, T += S;
    }
    return r.push(T), E;
  }
  let h = i + 1, s = new _t(null, r);
  const d = [];
  let m = "";
  for (; h < e.length; ) {
    const E = e.charAt(h++);
    if (a || E === "\\") a = !a, m += E;
    else if (l) h === f + 1 ? E !== "^" && E !== "!" || (u = !0) : E !== "]" || h === f + 2 && u || (l = !1), m += E;
    else if (E !== "[") if (Fs(E) && e.charAt(h) === "(") {
      s.push(m), m = "";
      const T = new _t(E, s);
      s.push(T), h = mn(b = _t, Nn, ti).call(b, e, T, h, o);
    } else if (E !== "|") {
      if (E === ")") return m === "" && H(r, ke).length === 0 && Ve(r, Pr, !0), s.push(m), m = "", r.push(...d, s), h;
      m += E;
    } else s.push(m), m = "", d.push(s), s = new _t(null, r);
    else l = !0, f = h, u = !1, m += E;
  }
  return r.type = null, Ve(r, at, void 0), Ve(r, ke, [e.substring(i - 1)]), h;
}, go = function(e) {
  return H(this, ke).map((r) => {
    if (typeof r == "string") throw new Error("string type in extglob ast??");
    const [i, o, a, l] = r.toRegExpSource(e);
    return Ve(this, un, H(this, un) || l), i;
  }).filter((r) => !(this.isStart() && this.isEnd() && !r)).join("|");
}, Bl = function(e, r) {
  let i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], o = !1, a = "", l = !1;
  for (let f = 0; f < e.length; f++) {
    const u = e.charAt(f);
    if (o) o = !1, a += (Ph.has(u) ? "\\" : "") + u;
    else if (u !== "\\") {
      if (u === "[") {
        const [h, s, d, m] = Rh(e, f);
        if (d) {
          a += h, l = l || s, f += d - 1, r = r || m;
          continue;
        }
      }
      u !== "*" ? u !== "?" ? a += u.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : (a += So, r = !0) : (a += i && e === "*" ? Us : Ms, r = !0);
    } else f === e.length - 1 ? a += "\\\\" : o = !0;
  }
  return [a, Ar(e), !!r, l];
}, Rt(_t, Nn);
let ai = _t;
const Et = function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return si(e), !(!r.nocomment && e.charAt(0) === "#") && new li(e, r).match(n);
}, Dh = /^\*+([^+@!?\*\[\(]*)$/, $h = (n) => (e) => !e.startsWith(".") && e.endsWith(n), kh = (n) => (e) => e.endsWith(n), Fh = (n) => (n = n.toLowerCase(), (e) => !e.startsWith(".") && e.toLowerCase().endsWith(n)), Mh = (n) => (n = n.toLowerCase(), (e) => e.toLowerCase().endsWith(n)), Uh = /^\*+\.\*+$/, Bh = (n) => !n.startsWith(".") && n.includes("."), jh = (n) => n !== "." && n !== ".." && n.includes("."), Gh = /^\.\*+$/, Wh = (n) => n !== "." && n !== ".." && n.startsWith("."), Vh = /^\*+$/, zh = (n) => n.length !== 0 && !n.startsWith("."), qh = (n) => n.length !== 0 && n !== "." && n !== "..", Xh = /^\?+([^+@!?\*\[\(]*)?$/, Hh = (n) => {
  let [e, r = ""] = n;
  const i = jl([e]);
  return r ? (r = r.toLowerCase(), (o) => i(o) && o.toLowerCase().endsWith(r)) : i;
}, Yh = (n) => {
  let [e, r = ""] = n;
  const i = Gl([e]);
  return r ? (r = r.toLowerCase(), (o) => i(o) && o.toLowerCase().endsWith(r)) : i;
}, Zh = (n) => {
  let [e, r = ""] = n;
  const i = Gl([e]);
  return r ? (o) => i(o) && o.endsWith(r) : i;
}, Kh = (n) => {
  let [e, r = ""] = n;
  const i = jl([e]);
  return r ? (o) => i(o) && o.endsWith(r) : i;
}, jl = (n) => {
  let [e] = n;
  const r = e.length;
  return (i) => i.length === r && !i.startsWith(".");
}, Gl = (n) => {
  let [e] = n;
  const r = e.length;
  return (i) => i.length === r && i !== "." && i !== "..";
}, Wl = typeof Tt == "object" && Tt ? typeof Tt.env == "object" && Tt.env && Tt.env.__MINIMATCH_TESTING_PLATFORM__ || Tt.platform : "posix";
Et.sep = Wl === "win32" ? "\\" : "/";
const Gt = Symbol("globstar **");
Et.GLOBSTAR = Gt, Et.filter = function(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return (r) => Et(r, n, e);
};
const Bt = function(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Object.assign({}, n, e);
};
Et.defaults = (n) => {
  if (!n || typeof n != "object" || !Object.keys(n).length) return Et;
  const e = Et;
  return Object.assign(function(r, i) {
    return e(r, i, Bt(n, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}));
  }, { Minimatch: class extends e.Minimatch {
    constructor(r) {
      super(r, Bt(n, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}));
    }
    static defaults(r) {
      return e.defaults(Bt(n, r)).Minimatch;
    }
  }, AST: class extends e.AST {
    constructor(r, i) {
      super(r, i, Bt(n, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}));
    }
    static fromGlob(r) {
      let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return e.AST.fromGlob(r, Bt(n, i));
    }
  }, unescape: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.unescape(r, Bt(n, i));
  }, escape: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.escape(r, Bt(n, i));
  }, filter: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.filter(r, Bt(n, i));
  }, defaults: (r) => e.defaults(Bt(n, r)), makeRe: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.makeRe(r, Bt(n, i));
  }, braceExpand: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.braceExpand(r, Bt(n, i));
  }, match: function(r, i) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return e.match(r, i, Bt(n, o));
  }, sep: e.sep, GLOBSTAR: Gt });
};
const Vl = function(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return si(n), e.nobrace || !/\{(?:(?!\{).)*\}/.test(n) ? [n] : Oh(n);
};
Et.braceExpand = Vl, Et.makeRe = function(n) {
  return new li(n, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).makeRe();
}, Et.match = function(n, e) {
  const r = new li(e, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {});
  return n = n.filter((i) => r.match(i)), r.options.nonull && !n.length && n.push(e), n;
};
const Bs = /[?*]|[+@!]\(.*?\)|\[|\]/;
class li {
  constructor(e) {
    ce(this, "options");
    ce(this, "set");
    ce(this, "pattern");
    ce(this, "windowsPathsNoEscape");
    ce(this, "nonegate");
    ce(this, "negate");
    ce(this, "comment");
    ce(this, "empty");
    ce(this, "preserveMultipleSlashes");
    ce(this, "partial");
    ce(this, "globSet");
    ce(this, "globParts");
    ce(this, "nocase");
    ce(this, "isWindows");
    ce(this, "platform");
    ce(this, "windowsNoMagicRoot");
    ce(this, "regexp");
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    si(e), r = r || {}, this.options = r, this.pattern = e, this.platform = r.platform || Wl, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!r.windowsPathsNoEscape || r.allowWindowsEscape === !1, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!r.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!r.nonegate, this.comment = !1, this.empty = !1, this.partial = !!r.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = r.windowsNoMagicRoot !== void 0 ? r.windowsNoMagicRoot : !(!this.isWindows || !this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
  }
  hasMagic() {
    if (this.options.magicalBraces && this.set.length > 1) return !0;
    for (const e of this.set) for (const r of e) if (typeof r != "string") return !0;
    return !1;
  }
  debug() {
  }
  make() {
    const e = this.pattern, r = this.options;
    if (!r.nocomment && e.charAt(0) === "#") return void (this.comment = !0);
    if (!e) return void (this.empty = !0);
    this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], r.debug && (this.debug = function() {
      return console.error(...arguments);
    }), this.debug(this.pattern, this.globSet);
    const i = this.globSet.map((a) => this.slashSplit(a));
    this.globParts = this.preprocess(i), this.debug(this.pattern, this.globParts);
    let o = this.globParts.map((a, l, f) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        const u = !(a[0] !== "" || a[1] !== "" || a[2] !== "?" && Bs.test(a[2]) || Bs.test(a[3])), h = /^[a-z]:/i.test(a[0]);
        if (u) return [...a.slice(0, 4), ...a.slice(4).map((s) => this.parse(s))];
        if (h) return [a[0], ...a.slice(1).map((s) => this.parse(s))];
      }
      return a.map((u) => this.parse(u));
    });
    if (this.debug(this.pattern, o), this.set = o.filter((a) => a.indexOf(!1) === -1), this.isWindows) for (let a = 0; a < this.set.length; a++) {
      const l = this.set[a];
      l[0] === "" && l[1] === "" && this.globParts[a][2] === "?" && typeof l[3] == "string" && /^[a-z]:$/i.test(l[3]) && (l[2] = "?");
    }
    this.debug(this.pattern, this.set);
  }
  preprocess(e) {
    if (this.options.noglobstar) for (let i = 0; i < e.length; i++) for (let o = 0; o < e[i].length; o++) e[i][o] === "**" && (e[i][o] = "*");
    const { optimizationLevel: r = 1 } = this.options;
    return r >= 2 ? (e = this.firstPhasePreProcess(e), e = this.secondPhasePreProcess(e)) : e = r >= 1 ? this.levelOneOptimize(e) : this.adjascentGlobstarOptimize(e), e;
  }
  adjascentGlobstarOptimize(e) {
    return e.map((r) => {
      let i = -1;
      for (; (i = r.indexOf("**", i + 1)) !== -1; ) {
        let o = i;
        for (; r[o + 1] === "**"; ) o++;
        o !== i && r.splice(i, o - i);
      }
      return r;
    });
  }
  levelOneOptimize(e) {
    return e.map((r) => (r = r.reduce((i, o) => {
      const a = i[i.length - 1];
      return o === "**" && a === "**" ? i : o === ".." && a && a !== ".." && a !== "." && a !== "**" ? (i.pop(), i) : (i.push(o), i);
    }, [])).length === 0 ? [""] : r);
  }
  levelTwoFileOptimize(e) {
    Array.isArray(e) || (e = this.slashSplit(e));
    let r = !1;
    do {
      if (r = !1, !this.preserveMultipleSlashes) {
        for (let o = 1; o < e.length - 1; o++) {
          const a = e[o];
          o === 1 && a === "" && e[0] === "" || a !== "." && a !== "" || (r = !0, e.splice(o, 1), o--);
        }
        e[0] !== "." || e.length !== 2 || e[1] !== "." && e[1] !== "" || (r = !0, e.pop());
      }
      let i = 0;
      for (; (i = e.indexOf("..", i + 1)) !== -1; ) {
        const o = e[i - 1];
        o && o !== "." && o !== ".." && o !== "**" && (r = !0, e.splice(i - 1, 2), i -= 2);
      }
    } while (r);
    return e.length === 0 ? [""] : e;
  }
  firstPhasePreProcess(e) {
    let r = !1;
    do {
      r = !1;
      for (let i of e) {
        let o = -1;
        for (; (o = i.indexOf("**", o + 1)) !== -1; ) {
          let l = o;
          for (; i[l + 1] === "**"; ) l++;
          l > o && i.splice(o + 1, l - o);
          let f = i[o + 1];
          const u = i[o + 2], h = i[o + 3];
          if (f !== ".." || !u || u === "." || u === ".." || !h || h === "." || h === "..") continue;
          r = !0, i.splice(o, 1);
          const s = i.slice(0);
          s[o] = "**", e.push(s), o--;
        }
        if (!this.preserveMultipleSlashes) {
          for (let l = 1; l < i.length - 1; l++) {
            const f = i[l];
            l === 1 && f === "" && i[0] === "" || f !== "." && f !== "" || (r = !0, i.splice(l, 1), l--);
          }
          i[0] !== "." || i.length !== 2 || i[1] !== "." && i[1] !== "" || (r = !0, i.pop());
        }
        let a = 0;
        for (; (a = i.indexOf("..", a + 1)) !== -1; ) {
          const l = i[a - 1];
          if (l && l !== "." && l !== ".." && l !== "**") {
            r = !0;
            const f = a === 1 && i[a + 1] === "**" ? ["."] : [];
            i.splice(a - 1, 2, ...f), i.length === 0 && i.push(""), a -= 2;
          }
        }
      }
    } while (r);
    return e;
  }
  secondPhasePreProcess(e) {
    for (let r = 0; r < e.length - 1; r++) for (let i = r + 1; i < e.length; i++) {
      const o = this.partsMatch(e[r], e[i], !this.preserveMultipleSlashes);
      if (o) {
        e[r] = [], e[i] = o;
        break;
      }
    }
    return e.filter((r) => r.length);
  }
  partsMatch(e, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], o = 0, a = 0, l = [], f = "";
    for (; o < e.length && a < r.length; ) if (e[o] === r[a]) l.push(f === "b" ? r[a] : e[o]), o++, a++;
    else if (i && e[o] === "**" && r[a] === e[o + 1]) l.push(e[o]), o++;
    else if (i && r[a] === "**" && e[o] === r[a + 1]) l.push(r[a]), a++;
    else if (e[o] !== "*" || !r[a] || !this.options.dot && r[a].startsWith(".") || r[a] === "**") {
      if (r[a] !== "*" || !e[o] || !this.options.dot && e[o].startsWith(".") || e[o] === "**" || f === "a") return !1;
      f = "b", l.push(r[a]), o++, a++;
    } else {
      if (f === "b") return !1;
      f = "a", l.push(e[o]), o++, a++;
    }
    return e.length === r.length && l;
  }
  parseNegate() {
    if (this.nonegate) return;
    const e = this.pattern;
    let r = !1, i = 0;
    for (let o = 0; o < e.length && e.charAt(o) === "!"; o++) r = !r, i++;
    i && (this.pattern = e.slice(i)), this.negate = r;
  }
  matchOne(e, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    const o = this.options;
    if (this.isWindows) {
      const E = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]), T = !E && e[0] === "" && e[1] === "" && e[2] === "?" && /^[a-z]:$/i.test(e[3]), S = typeof r[0] == "string" && /^[a-z]:$/i.test(r[0]), C = T ? 3 : E ? 0 : void 0, x = !S && r[0] === "" && r[1] === "" && r[2] === "?" && typeof r[3] == "string" && /^[a-z]:$/i.test(r[3]) ? 3 : S ? 0 : void 0;
      if (typeof C == "number" && typeof x == "number") {
        const [R, U] = [e[C], r[x]];
        R.toLowerCase() === U.toLowerCase() && (r[x] = R, x > C ? r = r.slice(x) : C > x && (e = e.slice(C)));
      }
    }
    const { optimizationLevel: a = 1 } = this.options;
    a >= 2 && (e = this.levelTwoFileOptimize(e)), this.debug("matchOne", this, { file: e, pattern: r }), this.debug("matchOne", e.length, r.length);
    for (var l = 0, f = 0, u = e.length, h = r.length; l < u && f < h; l++, f++) {
      this.debug("matchOne loop");
      var s = r[f], d = e[l];
      if (this.debug(r, s, d), s === !1) return !1;
      if (s === Gt) {
        this.debug("GLOBSTAR", [r, s, d]);
        var m = l, y = f + 1;
        if (y === h) {
          for (this.debug("** at the end"); l < u; l++) if (e[l] === "." || e[l] === ".." || !o.dot && e[l].charAt(0) === ".") return !1;
          return !0;
        }
        for (; m < u; ) {
          var b = e[m];
          if (this.debug(`
globstar while`, e, m, r, y, b), this.matchOne(e.slice(m), r.slice(y), i)) return this.debug("globstar found match!", m, u, b), !0;
          if (b === "." || b === ".." || !o.dot && b.charAt(0) === ".") {
            this.debug("dot detected!", e, m, r, y);
            break;
          }
          this.debug("globstar swallow a segment, and continue"), m++;
        }
        return !(!i || (this.debug(`
>>> no match, partial?`, e, m, r, y), m !== u));
      }
      let E;
      if (typeof s == "string" ? (E = d === s, this.debug("string match", s, d, E)) : (E = s.test(d), this.debug("pattern match", s, d, E)), !E) return !1;
    }
    if (l === u && f === h) return !0;
    if (l === u) return i;
    if (f === h) return l === u - 1 && e[l] === "";
    throw new Error("wtf?");
  }
  braceExpand() {
    return Vl(this.pattern, this.options);
  }
  parse(e) {
    si(e);
    const r = this.options;
    if (e === "**") return Gt;
    if (e === "") return "";
    let i, o = null;
    (i = e.match(Vh)) ? o = r.dot ? qh : zh : (i = e.match(Dh)) ? o = (r.nocase ? r.dot ? Mh : Fh : r.dot ? kh : $h)(i[1]) : (i = e.match(Xh)) ? o = (r.nocase ? r.dot ? Yh : Hh : r.dot ? Zh : Kh)(i) : (i = e.match(Uh)) ? o = r.dot ? jh : Bh : (i = e.match(Gh)) && (o = Wh);
    const a = ai.fromGlob(e, this.options).toMMPattern();
    return o && typeof a == "object" && Reflect.defineProperty(a, "test", { value: o }), a;
  }
  makeRe() {
    if (this.regexp || this.regexp === !1) return this.regexp;
    const e = this.set;
    if (!e.length) return this.regexp = !1, this.regexp;
    const r = this.options, i = r.noglobstar ? "[^/]*?" : r.dot ? "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?" : "(?:(?!(?:\\/|^)\\.).)*?", o = new Set(r.nocase ? ["i"] : []);
    let a = e.map((u) => {
      const h = u.map((s) => {
        if (s instanceof RegExp) for (const d of s.flags.split("")) o.add(d);
        return typeof s == "string" ? s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : s === Gt ? Gt : s._src;
      });
      return h.forEach((s, d) => {
        const m = h[d + 1], y = h[d - 1];
        s === Gt && y !== Gt && (y === void 0 ? m !== void 0 && m !== Gt ? h[d + 1] = "(?:\\/|" + i + "\\/)?" + m : h[d] = i : m === void 0 ? h[d - 1] = y + "(?:\\/|" + i + ")?" : m !== Gt && (h[d - 1] = y + "(?:\\/|\\/" + i + "\\/)" + m, h[d + 1] = Gt));
      }), h.filter((s) => s !== Gt).join("/");
    }).join("|");
    const [l, f] = e.length > 1 ? ["(?:", ")"] : ["", ""];
    a = "^" + l + a + f + "$", this.negate && (a = "^(?!" + a + ").+$");
    try {
      this.regexp = new RegExp(a, [...o].join(""));
    } catch {
      this.regexp = !1;
    }
    return this.regexp;
  }
  slashSplit(e) {
    return this.preserveMultipleSlashes ? e.split("/") : this.isWindows && /^\/\/[^\/]+/.test(e) ? ["", ...e.split(/\/+/)] : e.split(/\/+/);
  }
  match(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.partial;
    if (this.debug("match", e, this.pattern), this.comment) return !1;
    if (this.empty) return e === "";
    if (e === "/" && r) return !0;
    const i = this.options;
    this.isWindows && (e = e.split("\\").join("/"));
    const o = this.slashSplit(e);
    this.debug(this.pattern, "split", o);
    const a = this.set;
    this.debug(this.pattern, "set", a);
    let l = o[o.length - 1];
    if (!l) for (let f = o.length - 2; !l && f >= 0; f--) l = o[f];
    for (let f = 0; f < a.length; f++) {
      const u = a[f];
      let h = o;
      if (i.matchBase && u.length === 1 && (h = [l]), this.matchOne(h, u, r)) return !!i.flipNegate || !this.negate;
    }
    return !i.flipNegate && this.negate;
  }
  static defaults(e) {
    return Et.defaults(e).Minimatch;
  }
}
function Ro(n) {
  const e = new Error(`${arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""}Invalid response: ${n.status} ${n.statusText}`);
  return e.status = n.status, e.response = n, e;
}
function rt(n, e) {
  const { status: r } = e;
  if (r === 401 && n.digest) return e;
  if (r >= 400) throw Ro(e);
  return e;
}
function pr(n, e) {
  return arguments.length > 2 && arguments[2] !== void 0 && arguments[2] ? { data: e, headers: n.headers ? Th(n.headers) : {}, status: n.status, statusText: n.statusText } : e;
}
Et.AST = ai, Et.Minimatch = li, Et.escape = function(n) {
  let { windowsPathsNoEscape: e = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return e ? n.replace(/[?*()[\]]/g, "[$&]") : n.replace(/[?*()[\]\\]/g, "\\$&");
}, Et.unescape = Ar;
const Jh = (js = function(n, e, r) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = nt({ url: je(n.remoteURL, Be(e)), method: "COPY", headers: { Destination: je(n.remoteURL, Be(r)), Overwrite: i.overwrite === !1 ? "F" : "T", Depth: i.shallow ? "0" : "infinity" } }, n, i);
  return l = function(f) {
    rt(n, f);
  }, (a = tt(o, n)) && a.then || (a = Promise.resolve(a)), l ? a.then(l) : a;
  var a, l;
}, function() {
  for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
  try {
    return Promise.resolve(js.apply(this, n));
  } catch (r) {
    return Promise.reject(r);
  }
});
var js;
const Qh = { preserveOrder: !1, attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, removeNSPrefix: !1, allowBooleanAttributes: !1, parseTagValue: !0, parseAttributeValue: !1, trimValues: !0, cdataPropName: !1, numberParseOptions: { hex: !0, leadingZeros: !0, eNotation: !0 }, tagValueProcessor: function(n, e) {
  return e;
}, attributeValueProcessor: function(n, e) {
  return e;
}, stopNodes: [], alwaysCreateTextNode: !1, isArray: () => !1, commentPropName: !1, unpairedTags: [], processEntities: !0, htmlEntities: !1, ignoreDeclaration: !1, ignorePiTags: !1, transformTagName: !1, transformAttributeName: !1, updateTag: function(n, e, r) {
  return n;
}, captureMetaData: !1 }, Gs = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ep = new RegExp("^[" + Gs + "][" + Gs + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
function zl(n, e) {
  const r = [];
  let i = e.exec(n);
  for (; i; ) {
    const o = [];
    o.startIndex = e.lastIndex - i[0].length;
    const a = i.length;
    for (let l = 0; l < a; l++) o.push(i[l]);
    r.push(o), i = e.exec(n);
  }
  return r;
}
const hi = function(n) {
  return ep.exec(n) != null;
};
let Eo;
Eo = typeof Symbol != "function" ? "@@xmlMetadata" : Symbol("XML Node Metadata");
class $n {
  constructor(e) {
    this.tagname = e, this.child = [], this[":@"] = {};
  }
  add(e, r) {
    e === "__proto__" && (e = "#__proto__"), this.child.push({ [e]: r });
  }
  addChild(e, r) {
    e.tagname === "__proto__" && (e.tagname = "#__proto__"), e[":@"] && Object.keys(e[":@"]).length > 0 ? this.child.push({ [e.tagname]: e.child, ":@": e[":@"] }) : this.child.push({ [e.tagname]: e.child }), r !== void 0 && (this.child[this.child.length - 1][Eo] = { startIndex: r });
  }
  static getMetaDataSymbol() {
    return Eo;
  }
}
class tp {
  constructor(e) {
    this.suppressValidationErr = !e;
  }
  readDocType(e, r) {
    const i = {};
    if (e[r + 3] !== "O" || e[r + 4] !== "C" || e[r + 5] !== "T" || e[r + 6] !== "Y" || e[r + 7] !== "P" || e[r + 8] !== "E") throw new Error("Invalid Tag instead of DOCTYPE");
    {
      r += 9;
      let o = 1, a = !1, l = !1, f = "";
      for (; r < e.length; r++) if (e[r] !== "<" || l) if (e[r] === ">") {
        if (l ? e[r - 1] === "-" && e[r - 2] === "-" && (l = !1, o--) : o--, o === 0) break;
      } else e[r] === "[" ? a = !0 : f += e[r];
      else {
        if (a && Dn(e, "!ENTITY", r)) {
          let u, h;
          r += 7, [u, h, r] = this.readEntityExp(e, r + 1, this.suppressValidationErr), h.indexOf("&") === -1 && (i[u] = { regx: RegExp(`&${u};`, "g"), val: h });
        } else if (a && Dn(e, "!ELEMENT", r)) {
          r += 8;
          const { index: u } = this.readElementExp(e, r + 1);
          r = u;
        } else if (a && Dn(e, "!ATTLIST", r)) r += 8;
        else if (a && Dn(e, "!NOTATION", r)) {
          r += 9;
          const { index: u } = this.readNotationExp(e, r + 1, this.suppressValidationErr);
          r = u;
        } else {
          if (!Dn(e, "!--", r)) throw new Error("Invalid DOCTYPE");
          l = !0;
        }
        o++, f = "";
      }
      if (o !== 0) throw new Error("Unclosed DOCTYPE");
    }
    return { entities: i, i: r };
  }
  readEntityExp(e, r) {
    r = Ct(e, r);
    let i = "";
    for (; r < e.length && !/\s/.test(e[r]) && e[r] !== '"' && e[r] !== "'"; ) i += e[r], r++;
    if (_r(i), r = Ct(e, r), !this.suppressValidationErr) {
      if (e.substring(r, r + 6).toUpperCase() === "SYSTEM") throw new Error("External entities are not supported");
      if (e[r] === "%") throw new Error("Parameter entities are not supported");
    }
    let o = "";
    return [r, o] = this.readIdentifierVal(e, r, "entity"), [i, o, --r];
  }
  readNotationExp(e, r) {
    r = Ct(e, r);
    let i = "";
    for (; r < e.length && !/\s/.test(e[r]); ) i += e[r], r++;
    !this.suppressValidationErr && _r(i), r = Ct(e, r);
    const o = e.substring(r, r + 6).toUpperCase();
    if (!this.suppressValidationErr && o !== "SYSTEM" && o !== "PUBLIC") throw new Error(`Expected SYSTEM or PUBLIC, found "${o}"`);
    r += o.length, r = Ct(e, r);
    let a = null, l = null;
    if (o === "PUBLIC") [r, a] = this.readIdentifierVal(e, r, "publicIdentifier"), e[r = Ct(e, r)] !== '"' && e[r] !== "'" || ([r, l] = this.readIdentifierVal(e, r, "systemIdentifier"));
    else if (o === "SYSTEM" && ([r, l] = this.readIdentifierVal(e, r, "systemIdentifier"), !this.suppressValidationErr && !l)) throw new Error("Missing mandatory system identifier for SYSTEM notation");
    return { notationName: i, publicIdentifier: a, systemIdentifier: l, index: --r };
  }
  readIdentifierVal(e, r, i) {
    let o = "";
    const a = e[r];
    if (a !== '"' && a !== "'") throw new Error(`Expected quoted string, found "${a}"`);
    for (r++; r < e.length && e[r] !== a; ) o += e[r], r++;
    if (e[r] !== a) throw new Error(`Unterminated ${i} value`);
    return [++r, o];
  }
  readElementExp(e, r) {
    r = Ct(e, r);
    let i = "";
    for (; r < e.length && !/\s/.test(e[r]); ) i += e[r], r++;
    if (!this.suppressValidationErr && !hi(i)) throw new Error(`Invalid element name: "${i}"`);
    let o = "";
    if (e[r = Ct(e, r)] === "E" && Dn(e, "MPTY", r)) r += 4;
    else if (e[r] === "A" && Dn(e, "NY", r)) r += 2;
    else if (e[r] === "(") {
      for (r++; r < e.length && e[r] !== ")"; ) o += e[r], r++;
      if (e[r] !== ")") throw new Error("Unterminated content model");
    } else if (!this.suppressValidationErr) throw new Error(`Invalid Element Expression, found "${e[r]}"`);
    return { elementName: i, contentModel: o.trim(), index: r };
  }
  readAttlistExp(e, r) {
    r = Ct(e, r);
    let i = "";
    for (; r < e.length && !/\s/.test(e[r]); ) i += e[r], r++;
    _r(i), r = Ct(e, r);
    let o = "";
    for (; r < e.length && !/\s/.test(e[r]); ) o += e[r], r++;
    if (!_r(o)) throw new Error(`Invalid attribute name: "${o}"`);
    r = Ct(e, r);
    let a = "";
    if (e.substring(r, r + 8).toUpperCase() === "NOTATION") {
      if (a = "NOTATION", e[r = Ct(e, r += 8)] !== "(") throw new Error(`Expected '(', found "${e[r]}"`);
      r++;
      let f = [];
      for (; r < e.length && e[r] !== ")"; ) {
        let u = "";
        for (; r < e.length && e[r] !== "|" && e[r] !== ")"; ) u += e[r], r++;
        if (u = u.trim(), !_r(u)) throw new Error(`Invalid notation name: "${u}"`);
        f.push(u), e[r] === "|" && (r++, r = Ct(e, r));
      }
      if (e[r] !== ")") throw new Error("Unterminated list of notations");
      r++, a += " (" + f.join("|") + ")";
    } else {
      for (; r < e.length && !/\s/.test(e[r]); ) a += e[r], r++;
      const f = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
      if (!this.suppressValidationErr && !f.includes(a.toUpperCase())) throw new Error(`Invalid attribute type: "${a}"`);
    }
    r = Ct(e, r);
    let l = "";
    return e.substring(r, r + 8).toUpperCase() === "#REQUIRED" ? (l = "#REQUIRED", r += 8) : e.substring(r, r + 7).toUpperCase() === "#IMPLIED" ? (l = "#IMPLIED", r += 7) : [r, l] = this.readIdentifierVal(e, r, "ATTLIST"), { elementName: i, attributeName: o, attributeType: a, defaultValue: l, index: r };
  }
}
const Ct = (n, e) => {
  for (; e < n.length && /\s/.test(n[e]); ) e++;
  return e;
};
function Dn(n, e, r) {
  for (let i = 0; i < e.length; i++) if (e[i] !== n[r + i + 1]) return !1;
  return !0;
}
function _r(n) {
  if (hi(n)) return n;
  throw new Error(`Invalid entity name ${n}`);
}
const np = /^[-+]?0x[a-fA-F0-9]+$/, rp = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, ip = { hex: !0, leadingZeros: !0, decimalPoint: ".", eNotation: !0 }, op = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
function ql(n) {
  return typeof n == "function" ? n : Array.isArray(n) ? (e) => {
    for (const r of n)
      if (typeof r == "string" && e === r || r instanceof RegExp && r.test(e)) return !0;
  } : () => !1;
}
class sp {
  constructor(e) {
    if (this.options = e, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = { apos: { regex: /&(apos|#39|#x27);/g, val: "'" }, gt: { regex: /&(gt|#62|#x3E);/g, val: ">" }, lt: { regex: /&(lt|#60|#x3C);/g, val: "<" }, quot: { regex: /&(quot|#34|#x22);/g, val: '"' } }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = { space: { regex: /&(nbsp|#160);/g, val: " " }, cent: { regex: /&(cent|#162);/g, val: "¢" }, pound: { regex: /&(pound|#163);/g, val: "£" }, yen: { regex: /&(yen|#165);/g, val: "¥" }, euro: { regex: /&(euro|#8364);/g, val: "€" }, copyright: { regex: /&(copy|#169);/g, val: "©" }, reg: { regex: /&(reg|#174);/g, val: "®" }, inr: { regex: /&(inr|#8377);/g, val: "₹" }, num_dec: { regex: /&#([0-9]{1,7});/g, val: (r, i) => Ws(i, 10, "&#") }, num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (r, i) => Ws(i, 16, "&#x") } }, this.addExternalEntities = ap, this.parseXml = hp, this.parseTextData = lp, this.resolveNameSpace = up, this.buildAttributesMap = fp, this.isItStopNode = gp, this.replaceEntitiesValue = dp, this.readStopNodeData = Ep, this.saveTextToParentTag = mp, this.addChild = pp, this.ignoreAttributesFn = ql(this.options.ignoreAttributes), this.options.stopNodes && this.options.stopNodes.length > 0) {
      this.stopNodesExact = /* @__PURE__ */ new Set(), this.stopNodesWildcard = /* @__PURE__ */ new Set();
      for (let r = 0; r < this.options.stopNodes.length; r++) {
        const i = this.options.stopNodes[r];
        typeof i == "string" && (i.startsWith("*.") ? this.stopNodesWildcard.add(i.substring(2)) : this.stopNodesExact.add(i));
      }
    }
  }
}
function ap(n) {
  const e = Object.keys(n);
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    this.lastEntities[i] = { regex: new RegExp("&" + i + ";", "g"), val: n[i] };
  }
}
function lp(n, e, r, i, o, a, l) {
  if (n !== void 0 && (this.options.trimValues && !i && (n = n.trim()), n.length > 0)) {
    l || (n = this.replaceEntitiesValue(n));
    const f = this.options.tagValueProcessor(e, n, r, o, a);
    return f == null ? n : typeof f != typeof n || f !== n ? f : this.options.trimValues || n.trim() === n ? Xl(n, this.options.parseTagValue, this.options.numberParseOptions) : n;
  }
}
function up(n) {
  if (this.options.removeNSPrefix) {
    const e = n.split(":"), r = n.charAt(0) === "/" ? "/" : "";
    if (e[0] === "xmlns") return "";
    e.length === 2 && (n = r + e[1]);
  }
  return n;
}
const cp = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function fp(n, e) {
  if (this.options.ignoreAttributes !== !0 && typeof n == "string") {
    const r = zl(n, cp), i = r.length, o = {};
    for (let a = 0; a < i; a++) {
      const l = this.resolveNameSpace(r[a][1]);
      if (this.ignoreAttributesFn(l, e)) continue;
      let f = r[a][4], u = this.options.attributeNamePrefix + l;
      if (l.length) if (this.options.transformAttributeName && (u = this.options.transformAttributeName(u)), u === "__proto__" && (u = "#__proto__"), f !== void 0) {
        this.options.trimValues && (f = f.trim()), f = this.replaceEntitiesValue(f);
        const h = this.options.attributeValueProcessor(l, f, e);
        o[u] = h == null ? f : typeof h != typeof f || h !== f ? h : Xl(f, this.options.parseAttributeValue, this.options.numberParseOptions);
      } else this.options.allowBooleanAttributes && (o[u] = !0);
    }
    if (!Object.keys(o).length) return;
    if (this.options.attributesGroupName) {
      const a = {};
      return a[this.options.attributesGroupName] = o, a;
    }
    return o;
  }
}
const hp = function(n) {
  n = n.replace(/\r\n?/g, `
`);
  const e = new $n("!xml");
  let r = e, i = "", o = "";
  const a = new tp(this.options.processEntities);
  for (let l = 0; l < n.length; l++) if (n[l] === "<") if (n[l + 1] === "/") {
    const f = Mn(n, ">", l, "Closing Tag is not closed.");
    let u = n.substring(l + 2, f).trim();
    if (this.options.removeNSPrefix) {
      const d = u.indexOf(":");
      d !== -1 && (u = u.substr(d + 1));
    }
    this.options.transformTagName && (u = this.options.transformTagName(u)), r && (i = this.saveTextToParentTag(i, r, o));
    const h = o.substring(o.lastIndexOf(".") + 1);
    if (u && this.options.unpairedTags.indexOf(u) !== -1) throw new Error(`Unpaired tag can not be used as closing tag: </${u}>`);
    let s = 0;
    h && this.options.unpairedTags.indexOf(h) !== -1 ? (s = o.lastIndexOf(".", o.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : s = o.lastIndexOf("."), o = o.substring(0, s), r = this.tagsNodeStack.pop(), i = "", l = f;
  } else if (n[l + 1] === "?") {
    let f = wo(n, l, !1, "?>");
    if (!f) throw new Error("Pi Tag is not closed.");
    if (i = this.saveTextToParentTag(i, r, o), !(this.options.ignoreDeclaration && f.tagName === "?xml" || this.options.ignorePiTags)) {
      const u = new $n(f.tagName);
      u.add(this.options.textNodeName, ""), f.tagName !== f.tagExp && f.attrExpPresent && (u[":@"] = this.buildAttributesMap(f.tagExp, o)), this.addChild(r, u, o, l);
    }
    l = f.closeIndex + 1;
  } else if (n.substr(l + 1, 3) === "!--") {
    const f = Mn(n, "-->", l + 4, "Comment is not closed.");
    if (this.options.commentPropName) {
      const u = n.substring(l + 4, f - 2);
      i = this.saveTextToParentTag(i, r, o), r.add(this.options.commentPropName, [{ [this.options.textNodeName]: u }]);
    }
    l = f;
  } else if (n.substr(l + 1, 2) === "!D") {
    const f = a.readDocType(n, l);
    this.docTypeEntities = f.entities, l = f.i;
  } else if (n.substr(l + 1, 2) === "![") {
    const f = Mn(n, "]]>", l, "CDATA is not closed.") - 2, u = n.substring(l + 9, f);
    i = this.saveTextToParentTag(i, r, o);
    let h = this.parseTextData(u, r.tagname, o, !0, !1, !0, !0);
    h == null && (h = ""), this.options.cdataPropName ? r.add(this.options.cdataPropName, [{ [this.options.textNodeName]: u }]) : r.add(this.options.textNodeName, h), l = f + 2;
  } else {
    let f = wo(n, l, this.options.removeNSPrefix), u = f.tagName;
    const h = f.rawTagName;
    let s = f.tagExp, d = f.attrExpPresent, m = f.closeIndex;
    if (this.options.transformTagName) {
      const E = this.options.transformTagName(u);
      s === u && (s = E), u = E;
    }
    r && i && r.tagname !== "!xml" && (i = this.saveTextToParentTag(i, r, o, !1));
    const y = r;
    y && this.options.unpairedTags.indexOf(y.tagname) !== -1 && (r = this.tagsNodeStack.pop(), o = o.substring(0, o.lastIndexOf("."))), u !== e.tagname && (o += o ? "." + u : u);
    const b = l;
    if (this.isItStopNode(this.stopNodesExact, this.stopNodesWildcard, o, u)) {
      let E = "";
      if (s.length > 0 && s.lastIndexOf("/") === s.length - 1) u[u.length - 1] === "/" ? (u = u.substr(0, u.length - 1), o = o.substr(0, o.length - 1), s = u) : s = s.substr(0, s.length - 1), l = f.closeIndex;
      else if (this.options.unpairedTags.indexOf(u) !== -1) l = f.closeIndex;
      else {
        const S = this.readStopNodeData(n, h, m + 1);
        if (!S) throw new Error(`Unexpected end of ${h}`);
        l = S.i, E = S.tagContent;
      }
      const T = new $n(u);
      u !== s && d && (T[":@"] = this.buildAttributesMap(s, o)), E && (E = this.parseTextData(E, u, o, !0, d, !0, !0)), o = o.substr(0, o.lastIndexOf(".")), T.add(this.options.textNodeName, E), this.addChild(r, T, o, b);
    } else {
      if (s.length > 0 && s.lastIndexOf("/") === s.length - 1) {
        if (u[u.length - 1] === "/" ? (u = u.substr(0, u.length - 1), o = o.substr(0, o.length - 1), s = u) : s = s.substr(0, s.length - 1), this.options.transformTagName) {
          const T = this.options.transformTagName(u);
          s === u && (s = T), u = T;
        }
        const E = new $n(u);
        u !== s && d && (E[":@"] = this.buildAttributesMap(s, o)), this.addChild(r, E, o, b), o = o.substr(0, o.lastIndexOf("."));
      } else {
        const E = new $n(u);
        this.tagsNodeStack.push(r), u !== s && d && (E[":@"] = this.buildAttributesMap(s, o)), this.addChild(r, E, o, b), r = E;
      }
      i = "", l = m;
    }
  }
  else i += n[l];
  return e.child;
};
function pp(n, e, r, i) {
  this.options.captureMetaData || (i = void 0);
  const o = this.options.updateTag(e.tagname, r, e[":@"]);
  o === !1 || (typeof o == "string" && (e.tagname = o), n.addChild(e, i));
}
const dp = function(n) {
  if (this.options.processEntities) {
    for (let e in this.docTypeEntities) {
      const r = this.docTypeEntities[e];
      n = n.replace(r.regx, r.val);
    }
    for (let e in this.lastEntities) {
      const r = this.lastEntities[e];
      n = n.replace(r.regex, r.val);
    }
    if (this.options.htmlEntities) for (let e in this.htmlEntities) {
      const r = this.htmlEntities[e];
      n = n.replace(r.regex, r.val);
    }
    n = n.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return n;
};
function mp(n, e, r, i) {
  return n && (i === void 0 && (i = e.child.length === 0), (n = this.parseTextData(n, e.tagname, r, !1, !!e[":@"] && Object.keys(e[":@"]).length !== 0, i)) !== void 0 && n !== "" && e.add(this.options.textNodeName, n), n = ""), n;
}
function gp(n, e, r, i) {
  return !(!e || !e.has(i)) || !(!n || !n.has(r));
}
function Mn(n, e, r, i) {
  const o = n.indexOf(e, r);
  if (o === -1) throw new Error(i);
  return o + e.length - 1;
}
function wo(n, e, r) {
  const i = function(s, d) {
    let m, y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ">", b = "";
    for (let E = d; E < s.length; E++) {
      let T = s[E];
      if (m) T === m && (m = "");
      else if (T === '"' || T === "'") m = T;
      else if (T === y[0]) {
        if (!y[1]) return { data: b, index: E };
        if (s[E + 1] === y[1]) return { data: b, index: E };
      } else T === "	" && (T = " ");
      b += T;
    }
  }(n, e + 1, arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ">");
  if (!i) return;
  let o = i.data;
  const a = i.index, l = o.search(/\s/);
  let f = o, u = !0;
  l !== -1 && (f = o.substring(0, l), o = o.substring(l + 1).trimStart());
  const h = f;
  if (r) {
    const s = f.indexOf(":");
    s !== -1 && (f = f.substr(s + 1), u = f !== i.data.substr(s + 1));
  }
  return { tagName: f, tagExp: o, closeIndex: a, attrExpPresent: u, rawTagName: h };
}
function Ep(n, e, r) {
  const i = r;
  let o = 1;
  for (; r < n.length; r++) if (n[r] === "<") if (n[r + 1] === "/") {
    const a = Mn(n, ">", r, `${e} is not closed`);
    if (n.substring(r + 2, a).trim() === e && (o--, o === 0)) return { tagContent: n.substring(i, r), i: a };
    r = a;
  } else if (n[r + 1] === "?") r = Mn(n, "?>", r + 1, "StopNode is not closed.");
  else if (n.substr(r + 1, 3) === "!--") r = Mn(n, "-->", r + 3, "StopNode is not closed.");
  else if (n.substr(r + 1, 2) === "![") r = Mn(n, "]]>", r, "StopNode is not closed.") - 2;
  else {
    const a = wo(n, r, ">");
    a && ((a && a.tagName) === e && a.tagExp[a.tagExp.length - 1] !== "/" && o++, r = a.closeIndex);
  }
}
function Xl(n, e, r) {
  if (e && typeof n == "string") {
    const i = n.trim();
    return i === "true" || i !== "false" && function(o) {
      let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (a = Object.assign({}, ip, a), !o || typeof o != "string") return o;
      let l = o.trim();
      if (a.skipLike !== void 0 && a.skipLike.test(l)) return o;
      if (o === "0") return 0;
      if (a.hex && np.test(l)) return function(u) {
        if (parseInt) return parseInt(u, 16);
        if (Number.parseInt) return Number.parseInt(u, 16);
        if (window && window.parseInt) return window.parseInt(u, 16);
        throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
      }(l);
      if (l.includes("e") || l.includes("E")) return function(u, h, s) {
        if (!s.eNotation) return u;
        const d = h.match(op);
        if (d) {
          let m = d[1] || "";
          const y = d[3].indexOf("e") === -1 ? "E" : "e", b = d[2], E = m ? u[b.length + 1] === y : u[b.length] === y;
          return b.length > 1 && E ? u : b.length !== 1 || !d[3].startsWith(`.${y}`) && d[3][0] !== y ? s.leadingZeros && !E ? (h = (d[1] || "") + d[3], Number(h)) : u : Number(h);
        }
        return u;
      }(o, l, a);
      {
        const u = rp.exec(l);
        if (u) {
          const h = u[1] || "", s = u[2];
          let d = ((f = u[3]) && f.indexOf(".") !== -1 && ((f = f.replace(/0+$/, "")) === "." ? f = "0" : f[0] === "." ? f = "0" + f : f[f.length - 1] === "." && (f = f.substring(0, f.length - 1))), f);
          const m = h ? o[s.length + 1] === "." : o[s.length] === ".";
          if (!a.leadingZeros && (s.length > 1 || s.length === 1 && !m)) return o;
          {
            const y = Number(l), b = String(y);
            if (y === 0) return y;
            if (b.search(/[eE]/) !== -1) return a.eNotation ? y : o;
            if (l.indexOf(".") !== -1) return b === "0" || b === d || b === `${h}${d}` ? y : o;
            let E = s ? d : l;
            return s ? E === b || h + E === b ? y : o : E === b || E === h + b ? y : o;
          }
        }
        return o;
      }
      var f;
    }(n, r);
  }
  return n !== void 0 ? n : "";
}
function Ws(n, e, r) {
  const i = Number.parseInt(n, e);
  return i >= 0 && i <= 1114111 ? String.fromCodePoint(i) : r + n + ";";
}
const Bi = $n.getMetaDataSymbol();
function wp(n, e) {
  return Hl(n, e);
}
function Hl(n, e, r) {
  let i;
  const o = {};
  for (let a = 0; a < n.length; a++) {
    const l = n[a], f = yp(l);
    let u = "";
    if (u = r === void 0 ? f : r + "." + f, f === e.textNodeName) i === void 0 ? i = l[f] : i += "" + l[f];
    else {
      if (f === void 0) continue;
      if (l[f]) {
        let h = Hl(l[f], e, u);
        const s = bp(h, e);
        l[Bi] !== void 0 && (h[Bi] = l[Bi]), l[":@"] ? vp(h, l[":@"], u, e) : Object.keys(h).length !== 1 || h[e.textNodeName] === void 0 || e.alwaysCreateTextNode ? Object.keys(h).length === 0 && (e.alwaysCreateTextNode ? h[e.textNodeName] = "" : h = "") : h = h[e.textNodeName], o[f] !== void 0 && o.hasOwnProperty(f) ? (Array.isArray(o[f]) || (o[f] = [o[f]]), o[f].push(h)) : e.isArray(f, u, s) ? o[f] = [h] : o[f] = h;
      }
    }
  }
  return typeof i == "string" ? i.length > 0 && (o[e.textNodeName] = i) : i !== void 0 && (o[e.textNodeName] = i), o;
}
function yp(n) {
  const e = Object.keys(n);
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    if (i !== ":@") return i;
  }
}
function vp(n, e, r, i) {
  if (e) {
    const o = Object.keys(e), a = o.length;
    for (let l = 0; l < a; l++) {
      const f = o[l];
      i.isArray(f, r + "." + f, !0, !0) ? n[f] = [e[f]] : n[f] = e[f];
    }
  }
}
function bp(n, e) {
  const { textNodeName: r } = e, i = Object.keys(n).length;
  return i === 0 || !(i !== 1 || !n[r] && typeof n[r] != "boolean" && n[r] !== 0);
}
const _p = { allowBooleanAttributes: !1, unpairedTags: [] };
function Vs(n) {
  return n === " " || n === "	" || n === `
` || n === "\r";
}
function zs(n, e) {
  const r = e;
  for (; e < n.length; e++) if (!(n[e] != "?" && n[e] != " ")) {
    const i = n.substr(r, e - r);
    if (e > 5 && i === "xml") return ze("InvalidXml", "XML declaration allowed only at the start of the document.", bt(n, e));
    if (n[e] == "?" && n[e + 1] == ">") {
      e++;
      break;
    }
  }
  return e;
}
function qs(n, e) {
  if (n.length > e + 5 && n[e + 1] === "-" && n[e + 2] === "-") {
    for (e += 3; e < n.length; e++) if (n[e] === "-" && n[e + 1] === "-" && n[e + 2] === ">") {
      e += 2;
      break;
    }
  } else if (n.length > e + 8 && n[e + 1] === "D" && n[e + 2] === "O" && n[e + 3] === "C" && n[e + 4] === "T" && n[e + 5] === "Y" && n[e + 6] === "P" && n[e + 7] === "E") {
    let r = 1;
    for (e += 8; e < n.length; e++) if (n[e] === "<") r++;
    else if (n[e] === ">" && (r--, r === 0)) break;
  } else if (n.length > e + 9 && n[e + 1] === "[" && n[e + 2] === "C" && n[e + 3] === "D" && n[e + 4] === "A" && n[e + 5] === "T" && n[e + 6] === "A" && n[e + 7] === "[") {
    for (e += 8; e < n.length; e++) if (n[e] === "]" && n[e + 1] === "]" && n[e + 2] === ">") {
      e += 2;
      break;
    }
  }
  return e;
}
function Tp(n, e) {
  let r = "", i = "", o = !1;
  for (; e < n.length; e++) {
    if (n[e] === '"' || n[e] === "'") i === "" ? i = n[e] : i !== n[e] || (i = "");
    else if (n[e] === ">" && i === "") {
      o = !0;
      break;
    }
    r += n[e];
  }
  return i === "" && { value: r, index: e, tagClosed: o };
}
const Np = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Xs(n, e) {
  const r = zl(n, Np), i = {};
  for (let o = 0; o < r.length; o++) {
    if (r[o][1].length === 0) return ze("InvalidAttr", "Attribute '" + r[o][2] + "' has no space in starting.", Tr(r[o]));
    if (r[o][3] !== void 0 && r[o][4] === void 0) return ze("InvalidAttr", "Attribute '" + r[o][2] + "' is without value.", Tr(r[o]));
    if (r[o][3] === void 0 && !e.allowBooleanAttributes) return ze("InvalidAttr", "boolean attribute '" + r[o][2] + "' is not allowed.", Tr(r[o]));
    const a = r[o][2];
    if (!Ap(a)) return ze("InvalidAttr", "Attribute '" + a + "' is an invalid name.", Tr(r[o]));
    if (i.hasOwnProperty(a)) return ze("InvalidAttr", "Attribute '" + a + "' is repeated.", Tr(r[o]));
    i[a] = 1;
  }
  return !0;
}
function Ip(n, e) {
  if (n[++e] === ";") return -1;
  if (n[e] === "#") return function(i, o) {
    let a = /\d/;
    for (i[o] === "x" && (o++, a = /[\da-fA-F]/); o < i.length; o++) {
      if (i[o] === ";") return o;
      if (!i[o].match(a)) break;
    }
    return -1;
  }(n, ++e);
  let r = 0;
  for (; e < n.length; e++, r++) if (!(n[e].match(/\w/) && r < 20)) {
    if (n[e] === ";") break;
    return -1;
  }
  return e;
}
function ze(n, e, r) {
  return { err: { code: n, msg: e, line: r.line || r, col: r.col } };
}
function Ap(n) {
  return hi(n);
}
function bt(n, e) {
  const r = n.substring(0, e).split(/\r?\n/);
  return { line: r.length, col: r[r.length - 1].length + 1 };
}
function Tr(n) {
  return n.startIndex + n[1].length;
}
class Yl {
  constructor(e) {
    this.externalEntities = {}, this.options = function(r) {
      return Object.assign({}, Qh, r);
    }(e);
  }
  parse(e, r) {
    if (typeof e != "string" && e.toString) e = e.toString();
    else if (typeof e != "string") throw new Error("XML data is accepted in String or Bytes[] form.");
    if (r) {
      r === !0 && (r = {});
      const a = function(l, f) {
        f = Object.assign({}, _p, f);
        const u = [];
        let h = !1, s = !1;
        l[0] === "\uFEFF" && (l = l.substr(1));
        for (let d = 0; d < l.length; d++) if (l[d] === "<" && l[d + 1] === "?") {
          if (d += 2, d = zs(l, d), d.err) return d;
        } else {
          if (l[d] !== "<") {
            if (Vs(l[d])) continue;
            return ze("InvalidChar", "char '" + l[d] + "' is not expected.", bt(l, d));
          }
          {
            let m = d;
            if (d++, l[d] === "!") {
              d = qs(l, d);
              continue;
            }
            {
              let y = !1;
              l[d] === "/" && (y = !0, d++);
              let b = "";
              for (; d < l.length && l[d] !== ">" && l[d] !== " " && l[d] !== "	" && l[d] !== `
` && l[d] !== "\r"; d++) b += l[d];
              if (b = b.trim(), b[b.length - 1] === "/" && (b = b.substring(0, b.length - 1), d--), !hi(b)) {
                let S;
                return S = b.trim().length === 0 ? "Invalid space after '<'." : "Tag '" + b + "' is an invalid name.", ze("InvalidTag", S, bt(l, d));
              }
              const E = Tp(l, d);
              if (E === !1) return ze("InvalidAttr", "Attributes for '" + b + "' have open quote.", bt(l, d));
              let T = E.value;
              if (d = E.index, T[T.length - 1] === "/") {
                const S = d - T.length;
                T = T.substring(0, T.length - 1);
                const C = Xs(T, f);
                if (C !== !0) return ze(C.err.code, C.err.msg, bt(l, S + C.err.line));
                h = !0;
              } else if (y) {
                if (!E.tagClosed) return ze("InvalidTag", "Closing tag '" + b + "' doesn't have proper closing.", bt(l, d));
                if (T.trim().length > 0) return ze("InvalidTag", "Closing tag '" + b + "' can't have attributes or invalid starting.", bt(l, m));
                if (u.length === 0) return ze("InvalidTag", "Closing tag '" + b + "' has not been opened.", bt(l, m));
                {
                  const S = u.pop();
                  if (b !== S.tagName) {
                    let C = bt(l, S.tagStartPos);
                    return ze("InvalidTag", "Expected closing tag '" + S.tagName + "' (opened in line " + C.line + ", col " + C.col + ") instead of closing tag '" + b + "'.", bt(l, m));
                  }
                  u.length == 0 && (s = !0);
                }
              } else {
                const S = Xs(T, f);
                if (S !== !0) return ze(S.err.code, S.err.msg, bt(l, d - T.length + S.err.line));
                if (s === !0) return ze("InvalidXml", "Multiple possible root nodes found.", bt(l, d));
                f.unpairedTags.indexOf(b) !== -1 || u.push({ tagName: b, tagStartPos: m }), h = !0;
              }
              for (d++; d < l.length; d++) if (l[d] === "<") {
                if (l[d + 1] === "!") {
                  d++, d = qs(l, d);
                  continue;
                }
                if (l[d + 1] !== "?") break;
                if (d = zs(l, ++d), d.err) return d;
              } else if (l[d] === "&") {
                const S = Ip(l, d);
                if (S == -1) return ze("InvalidChar", "char '&' is not expected.", bt(l, d));
                d = S;
              } else if (s === !0 && !Vs(l[d])) return ze("InvalidXml", "Extra text at the end", bt(l, d));
              l[d] === "<" && d--;
            }
          }
        }
        return h ? u.length == 1 ? ze("InvalidTag", "Unclosed tag '" + u[0].tagName + "'.", bt(l, u[0].tagStartPos)) : !(u.length > 0) || ze("InvalidXml", "Invalid '" + JSON.stringify(u.map((d) => d.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 }) : ze("InvalidXml", "Start tag expected.", 1);
      }(e, r);
      if (a !== !0) throw Error(`${a.err.msg}:${a.err.line}:${a.err.col}`);
    }
    const i = new sp(this.options);
    i.addExternalEntities(this.externalEntities);
    const o = i.parseXml(e);
    return this.options.preserveOrder || o === void 0 ? o : wp(o, this.options);
  }
  addEntity(e, r) {
    if (r.indexOf("&") !== -1) throw new Error("Entity value can't have '&'");
    if (e.indexOf("&") !== -1 || e.indexOf(";") !== -1) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    if (r === "&") throw new Error("An entity with value '&' is not permitted");
    this.externalEntities[e] = r;
  }
  static getMetaDataSymbol() {
    return $n.getMetaDataSymbol();
  }
}
var Op = Pe(829), ln = Pe.n(Op), rr = function(n) {
  return n.Array = "array", n.Object = "object", n.Original = "original", n;
}(rr || {});
function Zl(n, e) {
  if (!n.endsWith("propstat.prop.displayname")) return e;
}
function Yr(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : rr.Original;
  const i = ln().get(n, e);
  return r === "array" && Array.isArray(i) === !1 ? [i] : r === "object" && Array.isArray(i) ? i[0] : i;
}
function pi(n, e) {
  return e = e ?? { attributeNamePrefix: "@", attributeParsers: [], tagParsers: [Zl] }, new Promise((r) => {
    r(function(i) {
      const { multistatus: o } = i;
      if (o === "") return { multistatus: { response: [] } };
      if (!o) throw new Error("Invalid response: No root multistatus found");
      const a = { multistatus: Array.isArray(o) ? o[0] : o };
      return ln().set(a, "multistatus.response", Yr(a, "multistatus.response", rr.Array)), ln().set(a, "multistatus.response", ln().get(a, "multistatus.response").map((l) => function(f) {
        const u = Object.assign({}, f);
        return u.status ? ln().set(u, "status", Yr(u, "status", rr.Object)) : (ln().set(u, "propstat", Yr(u, "propstat", rr.Object)), ln().set(u, "propstat.prop", Yr(u, "propstat.prop", rr.Object))), u;
      }(l))), a;
    }(function(i) {
      let { attributeNamePrefix: o, attributeParsers: a, tagParsers: l } = i;
      return new Yl({ allowBooleanAttributes: !0, attributeNamePrefix: o, textNodeName: "text", ignoreAttributes: !1, removeNSPrefix: !0, numberParseOptions: { hex: !0, leadingZeros: !1 }, attributeValueProcessor(f, u, h) {
        for (const s of a) try {
          const d = s(h, u);
          if (d !== u) return d;
        } catch {
        }
        return u;
      }, tagValueProcessor(f, u, h) {
        for (const s of l) try {
          const d = s(h, u);
          if (d !== u) return d;
        } catch {
        }
        return u;
      } });
    }(e).parse(n)));
  });
}
function Co(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
  const { getlastmodified: i = null, getcontentlength: o = "0", resourcetype: a = null, getcontenttype: l = null, getetag: f = null } = n, u = a && typeof a == "object" && a.collection !== void 0 ? "directory" : "file", h = { filename: e, basename: ri().basename(e), lastmod: i, size: parseInt(o, 10), type: u, etag: typeof f == "string" ? f.replace(/"/g, "") : null };
  return u === "file" && (h.mime = l && typeof l == "string" ? l.split(";")[0] : ""), r && (n.displayname !== void 0 && (n.displayname = String(n.displayname)), h.props = n), h;
}
function Sp(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], i = null;
  try {
    n.multistatus.response[0].propstat && (i = n.multistatus.response[0]);
  } catch {
  }
  if (!i) throw new Error("Failed getting item stat: bad response");
  const { propstat: { prop: o, status: a } } = i, [l, f, u] = a.split(" ", 3), h = parseInt(f, 10);
  if (h >= 400) {
    const s = new Error(`Invalid response: ${h} ${u}`);
    throw s.status = h, s;
  }
  return Co(o, Lr(e), r);
}
function Rp(n) {
  switch (String(n)) {
    case "-3":
      return "unlimited";
    case "-2":
    case "-1":
      return "unknown";
    default:
      return parseInt(String(n), 10);
  }
}
function ji(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const Lo = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { details: i = !1 } = r, o = nt({ url: je(n.remoteURL, Be(e)), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, n, r);
  return ji(tt(o, n), function(a) {
    return rt(n, a), ji(a.text(), function(l) {
      return ji(pi(l, n.parsing), function(f) {
        const u = Sp(f, e, i);
        return pr(a, u, i);
      });
    });
  });
});
function Kl(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const Cp = Jl(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = function(a) {
    if (!a || a === "/") return [];
    let l = a;
    const f = [];
    do
      f.push(l), l = ri().dirname(l);
    while (l && l !== "/");
    return f;
  }(Lr(e));
  i.sort((a, l) => a.length > l.length ? 1 : l.length > a.length ? -1 : 0);
  let o = !1;
  return function(a, l, f) {
    if (typeof a[Ys] == "function") {
      let T = function(S) {
        try {
          for (; !(u = d.next()).done; ) if ((S = l(u.value)) && S.then) {
            if (!Zs(S)) return void S.then(T, s || (s = Nt.bind(null, h = new ir(), 2)));
            S = S.v;
          }
          h ? Nt(h, 1, S) : h = S;
        } catch (C) {
          Nt(h || (h = new ir()), 2, C);
        }
      };
      var E = T, u, h, s, d = a[Ys]();
      if (T(), d.return) {
        var m = function(S) {
          try {
            u.done || d.return();
          } catch {
          }
          return S;
        };
        if (h && h.then) return h.then(m, function(S) {
          throw m(S);
        });
        m();
      }
      return h;
    }
    if (!("length" in a)) throw new TypeError("Object is not iterable");
    for (var y = [], b = 0; b < a.length; b++) y.push(a[b]);
    return function(T, S, C) {
      var x, R, U = -1;
      return function Z(z) {
        try {
          for (; ++U < T.length && (!C || !C()); ) if ((z = S(U)) && z.then) {
            if (!Zs(z)) return void z.then(Z, R || (R = Nt.bind(null, x = new ir(), 2)));
            z = z.v;
          }
          x ? Nt(x, 1, z) : x = z;
        } catch (re) {
          Nt(x || (x = new ir()), 2, re);
        }
      }(), x;
    }(y, function(T) {
      return l(y[T]);
    }, f);
  }(i, function(a) {
    return l = function() {
      return function(u, h) {
        try {
          var s = Kl(Lo(n, a), function(d) {
            if (d.type !== "directory") throw new Error(`Path includes a file: ${e}`);
          });
        } catch (d) {
          return h(d);
        }
        return s && s.then ? s.then(void 0, h) : s;
      }(0, function(u) {
        const h = u;
        return function() {
          if (h.status === 404) return o = !0, Hs(yo(n, a, { ...r, recursive: !1 }));
          throw u;
        }();
      });
    }, (f = function() {
      if (o) return Hs(yo(n, a, { ...r, recursive: !1 }));
    }()) && f.then ? f.then(l) : l();
    var l, f;
  }, function() {
    return !1;
  });
});
function Jl(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
function Lp() {
}
function Hs(n, e) {
  return n && n.then ? n.then(Lp) : Promise.resolve();
}
const Ys = typeof Symbol < "u" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
function Nt(n, e, r) {
  if (!n.s) {
    if (r instanceof ir) {
      if (!r.s) return void (r.o = Nt.bind(null, n, e));
      1 & e && (e = r.s), r = r.v;
    }
    if (r && r.then) return void r.then(Nt.bind(null, n, e), Nt.bind(null, n, 2));
    n.s = e, n.v = r;
    const i = n.o;
    i && i(n);
  }
}
const ir = function() {
  function n() {
  }
  return n.prototype.then = function(e, r) {
    const i = new n(), o = this.s;
    if (o) {
      const a = 1 & o ? e : r;
      if (a) {
        try {
          Nt(i, 1, a(this.v));
        } catch (l) {
          Nt(i, 2, l);
        }
        return i;
      }
      return this;
    }
    return this.o = function(a) {
      try {
        const l = a.v;
        1 & a.s ? Nt(i, 1, e ? e(l) : l) : r ? Nt(i, 1, r(l)) : Nt(i, 2, l);
      } catch (l) {
        Nt(i, 2, l);
      }
    }, i;
  }, n;
}();
function Zs(n) {
  return n instanceof ir && 1 & n.s;
}
const yo = Jl(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (r.recursive === !0) return Cp(n, e, r);
  const i = nt({ url: je(n.remoteURL, (o = Be(e), o.endsWith("/") ? o : o + "/")), method: "MKCOL" }, n, r);
  var o;
  return Kl(tt(i, n), function(a) {
    rt(n, a);
  });
});
var xp = Pe(388), Ks = Pe.n(xp);
const Pp = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = {};
  if (typeof r.range == "object" && typeof r.range.start == "number") {
    let f = `bytes=${r.range.start}-`;
    typeof r.range.end == "number" && (f = `${f}${r.range.end}`), i.Range = f;
  }
  const o = nt({ url: je(n.remoteURL, Be(e)), method: "GET", headers: i }, n, r);
  return l = function(f) {
    if (rt(n, f), i.Range && f.status !== 206) {
      const u = new Error(`Invalid response code for partial request: ${f.status}`);
      throw u.status = f.status, u;
    }
    return r.callback && setTimeout(() => {
      r.callback(f);
    }, 0), f.body;
  }, (a = tt(o, n)) && a.then || (a = Promise.resolve(a)), l ? a.then(l) : a;
  var a, l;
}), Dp = () => {
}, $p = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e, r) {
  r.url || (r.url = je(n.remoteURL, Be(e)));
  const i = nt(r, n, {});
  return a = function(l) {
    return rt(n, l), l;
  }, (o = tt(i, n)) && o.then || (o = Promise.resolve(o)), a ? o.then(a) : o;
  var o, a;
}), kp = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = nt({ url: je(n.remoteURL, Be(e)), method: "DELETE" }, n, r);
  return a = function(l) {
    rt(n, l);
  }, (o = tt(i, n)) && o.then || (o = Promise.resolve(o)), a ? o.then(a) : o;
  var o, a;
}), Fp = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return function(i, o) {
    try {
      var a = (l = Lo(n, e, r), f = function() {
        return !0;
      }, u ? f ? f(l) : l : (l && l.then || (l = Promise.resolve(l)), f ? l.then(f) : l));
    } catch (h) {
      return o(h);
    }
    var l, f, u;
    return a && a.then ? a.then(void 0, o) : a;
  }(0, function(i) {
    if (i.status === 404) return !1;
    throw i;
  });
});
function Gi(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const Mp = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = nt({ url: je(n.remoteURL, Be(e), "/"), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: r.deep ? "infinity" : "1" } }, n, r);
  return Gi(tt(i, n), function(o) {
    return rt(n, o), Gi(o.text(), function(a) {
      if (!a) throw new Error("Failed parsing directory contents: Empty response");
      return Gi(pi(a, n.parsing), function(l) {
        const f = Rs(e);
        let u = function(h, s, d) {
          let m = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], y = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
          const b = ri().join(s, "/"), { multistatus: { response: E } } = h, T = E.map((S) => {
            const C = function(R) {
              try {
                return R.replace(/^https?:\/\/[^\/]+/, "");
              } catch (U) {
                throw new It(U, "Failed normalising HREF");
              }
            }(S.href), { propstat: { prop: x } } = S;
            return Co(x, b === "/" ? decodeURIComponent(Lr(C)) : Lr(ri().relative(decodeURIComponent(b), decodeURIComponent(C))), m);
          });
          return y ? T : T.filter((S) => S.basename && (S.type === "file" || S.filename !== d.replace(/\/$/, "")));
        }(l, Rs(n.remoteBasePath || n.remotePath), f, r.details, r.includeSelf);
        return r.glob && (u = function(h, s) {
          return h.filter((d) => Et(d.filename, s, { matchBase: !0 }));
        }(u, r.glob)), pr(o, u, r.details);
      });
    });
  });
});
function xo(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
const Up = xo(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = nt({ url: je(n.remoteURL, Be(e)), method: "GET", headers: { Accept: "text/plain" }, transformResponse: [Gp] }, n, r);
  return ui(tt(i, n), function(o) {
    return rt(n, o), ui(o.text(), function(a) {
      return pr(o, a, r.details);
    });
  });
});
function ui(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const Bp = xo(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = nt({ url: je(n.remoteURL, Be(e)), method: "GET" }, n, r);
  return ui(tt(i, n), function(o) {
    let a;
    return rt(n, o), function(l, f) {
      var u = l();
      return u && u.then ? u.then(f) : f();
    }(function() {
      return ui(o.arrayBuffer(), function(l) {
        a = l;
      });
    }, function() {
      return pr(o, a, r.details);
    });
  });
}), jp = xo(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { format: i = "binary" } = r;
  if (i !== "binary" && i !== "text") throw new It({ info: { code: An.InvalidOutputFormat } }, `Invalid output format: ${i}`);
  return i === "text" ? Up(n, e, r) : Bp(n, e, r);
}), Gp = (n) => n;
function Wp(n, e) {
  let r = "";
  return e.format && e.indentBy.length > 0 && (r = `
`), Ql(n, e, "", r);
}
function Ql(n, e, r, i) {
  let o = "", a = !1;
  for (let l = 0; l < n.length; l++) {
    const f = n[l], u = Vp(f);
    if (u === void 0) continue;
    let h = "";
    if (h = r.length === 0 ? u : `${r}.${u}`, u === e.textNodeName) {
      let y = f[u];
      zp(h, e) || (y = e.tagValueProcessor(u, y), y = eu(y, e)), a && (o += i), o += y, a = !1;
      continue;
    }
    if (u === e.cdataPropName) {
      a && (o += i), o += `<![CDATA[${f[u][0][e.textNodeName]}]]>`, a = !1;
      continue;
    }
    if (u === e.commentPropName) {
      o += i + `<!--${f[u][0][e.textNodeName]}-->`, a = !0;
      continue;
    }
    if (u[0] === "?") {
      const y = Js(f[":@"], e), b = u === "?xml" ? "" : i;
      let E = f[u][0][e.textNodeName];
      E = E.length !== 0 ? " " + E : "", o += b + `<${u}${E}${y}?>`, a = !0;
      continue;
    }
    let s = i;
    s !== "" && (s += e.indentBy);
    const d = i + `<${u}${Js(f[":@"], e)}`, m = Ql(f[u], e, h, s);
    e.unpairedTags.indexOf(u) !== -1 ? e.suppressUnpairedNode ? o += d + ">" : o += d + "/>" : m && m.length !== 0 || !e.suppressEmptyNode ? m && m.endsWith(">") ? o += d + `>${m}${i}</${u}>` : (o += d + ">", m && i !== "" && (m.includes("/>") || m.includes("</")) ? o += i + e.indentBy + m + i : o += m, o += `</${u}>`) : o += d + "/>", a = !0;
  }
  return o;
}
function Vp(n) {
  const e = Object.keys(n);
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    if (n.hasOwnProperty(i) && i !== ":@") return i;
  }
}
function Js(n, e) {
  let r = "";
  if (n && !e.ignoreAttributes) for (let i in n) {
    if (!n.hasOwnProperty(i)) continue;
    let o = e.attributeValueProcessor(i, n[i]);
    o = eu(o, e), o === !0 && e.suppressBooleanAttributes ? r += ` ${i.substr(e.attributeNamePrefix.length)}` : r += ` ${i.substr(e.attributeNamePrefix.length)}="${o}"`;
  }
  return r;
}
function zp(n, e) {
  let r = (n = n.substr(0, n.length - e.textNodeName.length - 1)).substr(n.lastIndexOf(".") + 1);
  for (let i in e.stopNodes) if (e.stopNodes[i] === n || e.stopNodes[i] === "*." + r) return !0;
  return !1;
}
function eu(n, e) {
  if (n && n.length > 0 && e.processEntities) for (let r = 0; r < e.entities.length; r++) {
    const i = e.entities[r];
    n = n.replace(i.regex, i.val);
  }
  return n;
}
const qp = { attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, cdataPropName: !1, format: !1, indentBy: "  ", suppressEmptyNode: !1, suppressUnpairedNode: !0, suppressBooleanAttributes: !0, tagValueProcessor: function(n, e) {
  return e;
}, attributeValueProcessor: function(n, e) {
  return e;
}, preserveOrder: !1, commentPropName: !1, unpairedTags: [], entities: [{ regex: new RegExp("&", "g"), val: "&amp;" }, { regex: new RegExp(">", "g"), val: "&gt;" }, { regex: new RegExp("<", "g"), val: "&lt;" }, { regex: new RegExp("'", "g"), val: "&apos;" }, { regex: new RegExp('"', "g"), val: "&quot;" }], processEntities: !0, stopNodes: [], oneListGroup: !1 };
function vn(n) {
  this.options = Object.assign({}, qp, n), this.options.ignoreAttributes === !0 || this.options.attributesGroupName ? this.isAttribute = function() {
    return !1;
  } : (this.ignoreAttributesFn = ql(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = Yp), this.processTextOrObjNode = Xp, this.options.format ? (this.indentate = Hp, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
    return "";
  }, this.tagEndChar = ">", this.newLine = "");
}
function Xp(n, e, r, i) {
  const o = this.j2x(n, r + 1, i.concat(e));
  return n[this.options.textNodeName] !== void 0 && Object.keys(n).length === 1 ? this.buildTextValNode(n[this.options.textNodeName], e, o.attrStr, r) : this.buildObjectNode(o.val, e, o.attrStr, r);
}
function Hp(n) {
  return this.options.indentBy.repeat(n);
}
function Yp(n) {
  return !(!n.startsWith(this.options.attributeNamePrefix) || n === this.options.textNodeName) && n.substr(this.attrPrefixLen);
}
function Zp(n) {
  return new vn({ attributeNamePrefix: "@_", format: !0, ignoreAttributes: !1, suppressEmptyNode: !0 }).build(tu({ lockinfo: { "@_xmlns:d": "DAV:", lockscope: { exclusive: {} }, locktype: { write: {} }, owner: { href: n } } }, "d"));
}
function tu(n, e) {
  const r = { ...n };
  for (const i in r) r.hasOwnProperty(i) && (r[i] && typeof r[i] == "object" && i.indexOf(":") === -1 ? (r[`${e}:${i}`] = tu(r[i], e), delete r[i]) : /^@_/.test(i) === !1 && (r[`${e}:${i}`] = r[i], delete r[i]));
  return r;
}
function vo(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
function nu(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
vn.prototype.build = function(n) {
  return this.options.preserveOrder ? Wp(n, this.options) : (Array.isArray(n) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (n = { [this.options.arrayNodeName]: n }), this.j2x(n, 0, []).val);
}, vn.prototype.j2x = function(n, e, r) {
  let i = "", o = "";
  const a = r.join(".");
  for (let l in n) if (Object.prototype.hasOwnProperty.call(n, l)) if (n[l] === void 0) this.isAttribute(l) && (o += "");
  else if (n[l] === null) this.isAttribute(l) || l === this.options.cdataPropName ? o += "" : l[0] === "?" ? o += this.indentate(e) + "<" + l + "?" + this.tagEndChar : o += this.indentate(e) + "<" + l + "/" + this.tagEndChar;
  else if (n[l] instanceof Date) o += this.buildTextValNode(n[l], l, "", e);
  else if (typeof n[l] != "object") {
    const f = this.isAttribute(l);
    if (f && !this.ignoreAttributesFn(f, a)) i += this.buildAttrPairStr(f, "" + n[l]);
    else if (!f) if (l === this.options.textNodeName) {
      let u = this.options.tagValueProcessor(l, "" + n[l]);
      o += this.replaceEntitiesValue(u);
    } else o += this.buildTextValNode(n[l], l, "", e);
  } else if (Array.isArray(n[l])) {
    const f = n[l].length;
    let u = "", h = "";
    for (let s = 0; s < f; s++) {
      const d = n[l][s];
      if (d !== void 0) if (d === null) l[0] === "?" ? o += this.indentate(e) + "<" + l + "?" + this.tagEndChar : o += this.indentate(e) + "<" + l + "/" + this.tagEndChar;
      else if (typeof d == "object") if (this.options.oneListGroup) {
        const m = this.j2x(d, e + 1, r.concat(l));
        u += m.val, this.options.attributesGroupName && d.hasOwnProperty(this.options.attributesGroupName) && (h += m.attrStr);
      } else u += this.processTextOrObjNode(d, l, e, r);
      else if (this.options.oneListGroup) {
        let m = this.options.tagValueProcessor(l, d);
        m = this.replaceEntitiesValue(m), u += m;
      } else u += this.buildTextValNode(d, l, "", e);
    }
    this.options.oneListGroup && (u = this.buildObjectNode(u, l, h, e)), o += u;
  } else if (this.options.attributesGroupName && l === this.options.attributesGroupName) {
    const f = Object.keys(n[l]), u = f.length;
    for (let h = 0; h < u; h++) i += this.buildAttrPairStr(f[h], "" + n[l][f[h]]);
  } else o += this.processTextOrObjNode(n[l], l, e, r);
  return { attrStr: i, val: o };
}, vn.prototype.buildAttrPairStr = function(n, e) {
  return e = this.options.attributeValueProcessor(n, "" + e), e = this.replaceEntitiesValue(e), this.options.suppressBooleanAttributes && e === "true" ? " " + n : " " + n + '="' + e + '"';
}, vn.prototype.buildObjectNode = function(n, e, r, i) {
  if (n === "") return e[0] === "?" ? this.indentate(i) + "<" + e + r + "?" + this.tagEndChar : this.indentate(i) + "<" + e + r + this.closeTag(e) + this.tagEndChar;
  {
    let o = "</" + e + this.tagEndChar, a = "";
    return e[0] === "?" && (a = "?", o = ""), !r && r !== "" || n.indexOf("<") !== -1 ? this.options.commentPropName !== !1 && e === this.options.commentPropName && a.length === 0 ? this.indentate(i) + `<!--${n}-->` + this.newLine : this.indentate(i) + "<" + e + r + a + this.tagEndChar + n + this.indentate(i) + o : this.indentate(i) + "<" + e + r + a + ">" + n + o;
  }
}, vn.prototype.closeTag = function(n) {
  let e = "";
  return this.options.unpairedTags.indexOf(n) !== -1 ? this.options.suppressUnpairedNode || (e = "/") : e = this.options.suppressEmptyNode ? "/" : `></${n}`, e;
}, vn.prototype.buildTextValNode = function(n, e, r, i) {
  if (this.options.cdataPropName !== !1 && e === this.options.cdataPropName) return this.indentate(i) + `<![CDATA[${n}]]>` + this.newLine;
  if (this.options.commentPropName !== !1 && e === this.options.commentPropName) return this.indentate(i) + `<!--${n}-->` + this.newLine;
  if (e[0] === "?") return this.indentate(i) + "<" + e + r + "?" + this.tagEndChar;
  {
    let o = this.options.tagValueProcessor(e, n);
    return o = this.replaceEntitiesValue(o), o === "" ? this.indentate(i) + "<" + e + r + this.closeTag(e) + this.tagEndChar : this.indentate(i) + "<" + e + r + ">" + o + "</" + e + this.tagEndChar;
  }
}, vn.prototype.replaceEntitiesValue = function(n) {
  if (n && n.length > 0 && this.options.processEntities) for (let e = 0; e < this.options.entities.length; e++) {
    const r = this.options.entities[e];
    n = n.replace(r.regex, r.val);
  }
  return n;
};
const Kp = nu(function(n, e, r) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = nt({ url: je(n.remoteURL, Be(e)), method: "UNLOCK", headers: { "Lock-Token": r } }, n, i);
  return vo(tt(o, n), function(a) {
    if (rt(n, a), a.status !== 204 && a.status !== 200) throw Ro(a);
  });
}), Jp = nu(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { refreshToken: i, timeout: o = Qp } = r, a = { Accept: "text/plain,application/xml", Timeout: o };
  i && (a.If = i);
  const l = nt({ url: je(n.remoteURL, Be(e)), method: "LOCK", headers: a, data: Zp(n.contactHref) }, n, r);
  return vo(tt(l, n), function(f) {
    return rt(n, f), vo(f.text(), function(u) {
      const h = (m = u, new Yl({ removeNSPrefix: !0, parseAttributeValue: !0, parseTagValue: !0 }).parse(m)), s = ln().get(h, "prop.lockdiscovery.activelock.locktoken.href"), d = ln().get(h, "prop.lockdiscovery.activelock.timeout");
      var m;
      if (!s) throw Ro(f, "No lock token received: ");
      return { token: s, serverTimeout: d };
    });
  });
}), Qp = "Infinite, Second-4100000000";
function Wi(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const ed = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const r = e.path || "/", i = nt({ url: je(n.remoteURL, r), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, n, e);
  return Wi(tt(i, n), function(o) {
    return rt(n, o), Wi(o.text(), function(a) {
      return Wi(pi(a, n.parsing), function(l) {
        const f = function(u) {
          try {
            const [h] = u.multistatus.response, { propstat: { prop: { "quota-used-bytes": s, "quota-available-bytes": d } } } = h;
            return s !== void 0 && d !== void 0 ? { used: parseInt(String(s), 10), available: Rp(d) } : null;
          } catch {
          }
          return null;
        }(l);
        return pr(o, f, e.details);
      });
    });
  });
});
function Vi(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const td = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { details: i = !1 } = r, o = nt({ url: je(n.remoteURL, Be(e)), method: "SEARCH", headers: { Accept: "text/plain,application/xml", "Content-Type": n.headers["Content-Type"] || "application/xml; charset=utf-8" } }, n, r);
  return Vi(tt(o, n), function(a) {
    return rt(n, a), Vi(a.text(), function(l) {
      return Vi(pi(l, n.parsing), function(f) {
        const u = function(h, s, d) {
          const m = { truncated: !1, results: [] };
          return m.truncated = h.multistatus.response.some((y) => {
            var b, E;
            return ((E = (y.status || ((b = y.propstat) == null ? void 0 : b.status)).split(" ", 3)) == null ? void 0 : E[1]) === "507" && y.href.replace(/\/$/, "").endsWith(Be(s).replace(/\/$/, ""));
          }), h.multistatus.response.forEach((y) => {
            if (y.propstat === void 0) return;
            const b = y.href.split("/").map(decodeURIComponent).join("/");
            m.results.push(Co(y.propstat.prop, b, d));
          }), m;
        }(f, e, i);
        return pr(a, u, i);
      });
    });
  });
}), nd = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e, r) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = nt({ url: je(n.remoteURL, Be(e)), method: "MOVE", headers: { Destination: je(n.remoteURL, Be(r)), Overwrite: i.overwrite === !1 ? "F" : "T" } }, n, i);
  return l = function(f) {
    rt(n, f);
  }, (a = tt(o, n)) && a.then || (a = Promise.resolve(a)), l ? a.then(l) : a;
  var a, l;
});
var rd = Pe(172);
function id(n) {
  if (kl(n)) return n.byteLength;
  if (Fl(n)) return n.length;
  if (typeof n == "string") return (0, rd.d)(n);
  throw new It({ info: { code: An.DataTypeNoLength } }, "Cannot calculate data length: Invalid type");
}
const od = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e, r) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const { contentLength: o = !0, overwrite: a = !0 } = i, l = { "Content-Type": "application/octet-stream" };
  o === !1 || (l["Content-Length"] = typeof o == "number" ? `${o}` : `${id(r)}`), a || (l["If-None-Match"] = "*");
  const f = nt({ url: je(n.remoteURL, Be(e)), method: "PUT", headers: l, data: r }, n, i);
  return h = function(s) {
    try {
      rt(n, s);
    } catch (d) {
      const m = d;
      if (m.status !== 412 || a) throw m;
      return !1;
    }
    return !0;
  }, (u = tt(f, n)) && u.then || (u = Promise.resolve(u)), h ? u.then(h) : u;
  var u, h;
}), ru = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = nt({ url: je(n.remoteURL, Be(e)), method: "OPTIONS" }, n, r);
  return a = function(l) {
    try {
      rt(n, l);
    } catch (f) {
      throw f;
    }
    return { compliance: (l.headers.get("DAV") ?? "").split(",").map((f) => f.trim()), server: l.headers.get("Server") ?? "" };
  }, (o = tt(i, n)) && o.then || (o = Promise.resolve(o)), a ? o.then(a) : o;
  var o, a;
});
function Rr(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const sd = Po(function(n, e, r, i, o) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  if (r > i || r < 0) throw new It({ info: { code: An.InvalidUpdateRange } }, `Invalid update range ${r} for partial update`);
  const l = { "Content-Type": "application/octet-stream", "Content-Length": "" + (i - r + 1), "Content-Range": `bytes ${r}-${i}/*` }, f = nt({ url: je(n.remoteURL, Be(e)), method: "PUT", headers: l, data: o }, n, a);
  return Rr(tt(f, n), function(u) {
    rt(n, u);
  });
});
function Qs(n, e) {
  var r = n();
  return r && r.then ? r.then(e) : e(r);
}
const ad = Po(function(n, e, r, i, o) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  if (r > i || r < 0) throw new It({ info: { code: An.InvalidUpdateRange } }, `Invalid update range ${r} for partial update`);
  const l = { "Content-Type": "application/x-sabredav-partialupdate", "Content-Length": "" + (i - r + 1), "X-Update-Range": `bytes=${r}-${i}` }, f = nt({ url: je(n.remoteURL, Be(e)), method: "PATCH", headers: l, data: o }, n, a);
  return Rr(tt(f, n), function(u) {
    rt(n, u);
  });
});
function Po(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
const ld = Po(function(n, e, r, i, o) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  return Rr(ru(n, e, a), function(l) {
    let f = !1;
    return Qs(function() {
      if (l.compliance.includes("sabredav-partialupdate")) return Rr(ad(n, e, r, i, o, a), function(u) {
        return f = !0, u;
      });
    }, function(u) {
      let h = !1;
      return f ? u : Qs(function() {
        if (l.server.includes("Apache") && l.compliance.includes("<http://apache.org/dav/propset/fs/1>")) return Rr(sd(n, e, r, i, o, a), function(s) {
          return h = !0, s;
        });
      }, function(s) {
        if (h) return s;
        throw new It({ info: { code: An.NotSupported } }, "Not supported");
      });
    });
  });
}), ud = "https://github.com/perry-mitchell/webdav-client/blob/master/LOCK_CONTACT.md";
function iu(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { authType: r = null, remoteBasePath: i, contactHref: o = ud, ha1: a, headers: l = {}, httpAgent: f, httpsAgent: u, password: h, token: s, username: d, withCredentials: m } = e;
  let y = r;
  y || (y = d || h ? Lt.Password : Lt.None);
  const b = { authType: y, remoteBasePath: i, contactHref: o, ha1: a, headers: Object.assign({}, l), httpAgent: f, httpsAgent: u, password: h, parsing: { attributeNamePrefix: e.attributeNamePrefix ?? "@", attributeParsers: [], tagParsers: [Zl] }, remotePath: Eh(n), remoteURL: n, token: s, username: d, withCredentials: m };
  return Dl(b, d, h, s, a), { copyFile: (E, T, S) => Jh(b, E, T, S), createDirectory: (E, T) => yo(b, E, T), createReadStream: (E, T) => function(S, C) {
    let x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const R = new (Ks()).PassThrough();
    return Pp(S, C, x).then((U) => {
      U.pipe(R);
    }).catch((U) => {
      R.emit("error", U);
    }), R;
  }(b, E, T), createWriteStream: (E, T, S) => function(C, x) {
    let R = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, U = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Dp;
    const Z = new (Ks()).PassThrough(), z = {};
    R.overwrite === !1 && (z["If-None-Match"] = "*");
    const re = nt({ url: je(C.remoteURL, Be(x)), method: "PUT", headers: z, data: Z, maxRedirects: 0 }, C, R);
    return tt(re, C).then((P) => rt(C, P)).then((P) => {
      setTimeout(() => {
        U(P);
      }, 0);
    }).catch((P) => {
      Z.emit("error", P);
    }), Z;
  }(b, E, T, S), customRequest: (E, T) => $p(b, E, T), deleteFile: (E, T) => kp(b, E, T), exists: (E, T) => Fp(b, E, T), getDirectoryContents: (E, T) => Mp(b, E, T), getFileContents: (E, T) => jp(b, E, T), getFileDownloadLink: (E) => function(T, S) {
    let C = je(T.remoteURL, Be(S));
    const x = /^https:/i.test(C) ? "https" : "http";
    switch (T.authType) {
      case Lt.None:
        break;
      case Lt.Password: {
        const R = Ls(T.headers.Authorization.replace(/^Basic /i, "").trim());
        C = C.replace(/^https?:\/\//, `${x}://${R}@`);
        break;
      }
      default:
        throw new It({ info: { code: An.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${T.authType}`);
    }
    return C;
  }(b, E), getFileUploadLink: (E) => function(T, S) {
    let C = `${je(T.remoteURL, Be(S))}?Content-Type=application/octet-stream`;
    const x = /^https:/i.test(C) ? "https" : "http";
    switch (T.authType) {
      case Lt.None:
        break;
      case Lt.Password: {
        const R = Ls(T.headers.Authorization.replace(/^Basic /i, "").trim());
        C = C.replace(/^https?:\/\//, `${x}://${R}@`);
        break;
      }
      default:
        throw new It({ info: { code: An.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${T.authType}`);
    }
    return C;
  }(b, E), getHeaders: () => Object.assign({}, b.headers), getQuota: (E) => ed(b, E), lock: (E, T) => Jp(b, E, T), moveFile: (E, T, S) => nd(b, E, T, S), putFileContents: (E, T, S) => od(b, E, T, S), partialUpdateFileContents: (E, T, S, C, x) => ld(b, E, T, S, C, x), getDAVCompliance: (E) => ru(b, E), search: (E, T) => td(b, E, T), setHeaders: (E) => {
    b.headers = Object.assign({}, E);
  }, stat: (E, T) => Lo(b, E, T), unlock: (E, T, S) => Kp(b, E, T, S), registerAttributeParser: (E) => {
    b.parsing.attributeParsers.push(E);
  }, registerTagParser: (E) => {
    b.parsing.tagParsers.push(E);
  } };
}
/*!
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
function cd(n = "") {
  let e = mt.NONE;
  return n && (n.includes("G") && (e |= mt.READ), n.includes("W") && (e |= mt.WRITE), n.includes("CK") && (e |= mt.CREATE), n.includes("NV") && (e |= mt.UPDATE), n.includes("D") && (e |= mt.DELETE), n.includes("R") && (e |= mt.SHARE)), e;
}
const fd = [
  "d:getcontentlength",
  "d:getcontenttype",
  "d:getetag",
  "d:getlastmodified",
  "d:creationdate",
  "d:displayname",
  "d:quota-available-bytes",
  "d:resourcetype",
  "nc:has-preview",
  "nc:is-encrypted",
  "nc:mount-type",
  "oc:comments-unread",
  "oc:favorite",
  "oc:fileid",
  "oc:owner-display-name",
  "oc:owner-id",
  "oc:permissions",
  "oc:size"
], hd = {
  d: "DAV:",
  nc: "http://nextcloud.org/ns",
  oc: "http://owncloud.org/ns",
  ocs: "http://open-collaboration-services.org/ns"
};
function pd() {
  return Ge.davProperties ?? (Ge.davProperties = [...fd]), Ge.davProperties.map((n) => `<${n} />`).join(" ");
}
function dd() {
  return Ge.davNamespaces ?? (Ge.davNamespaces = { ...hd }), Object.keys(Ge.davNamespaces).map((n) => {
    var e;
    return `xmlns:${n}="${(e = Ge.davNamespaces) == null ? void 0 : e[n]}"`;
  }).join(" ");
}
function md() {
  return `<?xml version="1.0"?>
		<d:propfind ${dd()}>
			<d:prop>
				${pd()}
			</d:prop>
		</d:propfind>`;
}
function gd() {
  var n;
  return hr() ? `/files/${Ll()}` : `/files/${(n = $r()) == null ? void 0 : n.uid}`;
}
const ou = gd();
function Ed() {
  const n = Il("dav");
  return hr() ? n.replace("remote.php", "public.php") : n;
}
const su = Ed();
function wd(n = su, e = {}) {
  const r = iu(n, { headers: e });
  function i(a) {
    r.setHeaders({
      ...e,
      // Add this so the server knows it is an request from the browser
      "X-Requested-With": "XMLHttpRequest",
      // Inject user auth
      requesttoken: a ?? ""
    });
  }
  return fl(i), i(cl()), Ao().patch("fetch", (a, l) => {
    const f = l.headers;
    return f != null && f.method && (l.method = f.method, delete f.method), fetch(a, l);
  }), r;
}
function yd(n, e = ou, r = su) {
  var d, m;
  let i = (d = $r()) == null ? void 0 : d.uid;
  if (hr())
    i = i ?? "anonymous";
  else if (!i)
    throw new Error("No user id found");
  const o = n.props, a = cd(o == null ? void 0 : o.permissions), l = String((o == null ? void 0 : o["owner-id"]) || i), f = o.fileid || 0, u = new Date(Date.parse(n.lastmod)), h = new Date(Date.parse(o.creationdate)), s = {
    id: f,
    source: `${r}${n.filename}`,
    mtime: !isNaN(u.getTime()) && u.getTime() !== 0 ? u : void 0,
    crtime: !isNaN(h.getTime()) && h.getTime() !== 0 ? h : void 0,
    mime: n.mime || "application/octet-stream",
    // Manually cast to work around for https://github.com/perry-mitchell/webdav-client/pull/380
    displayname: o.displayname !== void 0 ? String(o.displayname) : void 0,
    size: (o == null ? void 0 : o.size) || Number.parseInt(o.getcontentlength || "0"),
    // The fileid is set to -1 for failed requests
    status: f < 0 ? El.FAILED : void 0,
    permissions: a,
    owner: l,
    root: e,
    attributes: {
      ...n,
      ...o,
      hasPreview: o == null ? void 0 : o["has-preview"]
    }
  };
  return (m = s.attributes) == null || delete m.props, n.type === "file" ? new kc(s) : new Fc(s);
}
class $t {
  static getFileConfig({
    name: e,
    url: r,
    downloadUrl: i,
    dir: o,
    onCreate: a,
    fileModifiedTime: l,
    isNew: f,
    isLoaded: u,
    sameWindow: h,
    skipConfirmation: s,
    permissions: d,
    existingContents: m,
    templateName: y,
    isPublicLink: b
  } = {}) {
    return {
      name: e || "?",
      downloadUrl: i || "",
      url: r ? qe(r) : "",
      dir: o || "",
      onCreate: a,
      fileModifiedTime: l || null,
      isNew: f || !1,
      isLoaded: u || !1,
      sameWindow: h || !1,
      skipConfirmation: s || !1,
      permissions: d || mt.NONE,
      existingContents: m,
      templateName: y,
      isPublicLink: b || !1
    };
  }
  static async load({ fileName: e, dir: r } = {}) {
    const i = await window.fetch(
      `${window.OC.generateUrl("/apps/files_linkeditor/ajax/loadfile")}?filename=${encodeURIComponent(
        e
      )}&dir=${encodeURIComponent(r)}`,
      {
        method: "GET",
        headers: {
          requesttoken: window.OC.requestToken
        }
      }
    );
    if (i && i.ok)
      return await i.json();
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async loadPublic({ downloadUrl: e } = {}) {
    const r = await window.fetch(e, {
      method: "GET",
      headers: {
        requesttoken: window.OC.requestToken
      }
    });
    if (r && r.ok)
      return { filecontents: await r.text() };
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async save({ fileContent: e, name: r, dir: i } = {}) {
    let o = `${i}${r}`;
    i !== "/" && (o = `${i}/${r}`);
    const a = wd(), l = `${ou}${o}`;
    try {
      if (await a.putFileContents(l, e, { overwrite: !0 })) {
        const u = await a.stat(l, { details: !0, data: md() });
        return ll("files:node:created", yd(u.data)), !0;
      }
    } catch (f) {
      console.error(f);
    }
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static userCanEdit(e) {
    var r, i, o, a;
    return window.FileList && window.OC && window.OC.currentUser && (window.OC.PERMISSION_ALL === ((i = (r = window.FileList) == null ? void 0 : r.getDirectoryPermissions) == null ? void 0 : i.call(r)) || window.OC.PERMISSION_UPDATE === ((a = (o = window.FileList) == null ? void 0 : o.getDirectoryPermissions) == null ? void 0 : a.call(o))) || e >= mt.WRITE;
  }
}
const Ke = Ja(""), xt = Ja($t.getFileConfig());
function ea(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "You are about to visit:") + ""
  ), i, o, a, l, f = (
    /*file*/
    n[0].url + ""
  ), u, h, s;
  return {
    c() {
      e = Y("p"), i = Re(r), o = fe(), a = Y("em"), l = Y("a"), u = Re(f), j(l, "href", h = qe(
        /*file*/
        n[0].url
      )), j(l, "target", s = /*file*/
      n[0].sameWindow ? "_self" : "_blank"), j(e, "class", "urldisplay");
    },
    m(d, m) {
      se(d, e, m), V(e, i), V(e, o), V(e, a), V(a, l), V(l, u);
    },
    p(d, m) {
      m & /*file*/
      1 && f !== (f = /*file*/
      d[0].url + "") && cr(u, f), m & /*file*/
      1 && h !== (h = qe(
        /*file*/
        d[0].url
      )) && j(l, "href", h), m & /*file*/
      1 && s !== (s = /*file*/
      d[0].sameWindow ? "_self" : "_blank") && j(l, "target", s);
    },
    d(d) {
      d && oe(e);
    }
  };
}
function ta(n) {
  let e = $t.userCanEdit(
    /*file*/
    n[0].permissions
  ) && !/*file*/
  n[0].isPublicLink, r, i, o = (
    /*t*/
    n[2]("files_linkeditor", "Visit link") + ""
  ), a, l, f, u = e && na(n);
  return {
    c() {
      u && u.c(), r = fe(), i = Y("a"), a = Re(o), j(i, "href", l = qe(
        /*file*/
        n[0].url
      )), j(i, "target", f = /*file*/
      n[0].sameWindow ? "_self" : "_blank"), j(i, "class", "button primary");
    },
    m(h, s) {
      u && u.m(h, s), se(h, r, s), se(h, i, s), V(i, a);
    },
    p(h, s) {
      s & /*file*/
      1 && (e = $t.userCanEdit(
        /*file*/
        h[0].permissions
      ) && !/*file*/
      h[0].isPublicLink), e ? u ? u.p(h, s) : (u = na(h), u.c(), u.m(r.parentNode, r)) : u && (u.d(1), u = null), s & /*file*/
      1 && l !== (l = qe(
        /*file*/
        h[0].url
      )) && j(i, "href", l), s & /*file*/
      1 && f !== (f = /*file*/
      h[0].sameWindow ? "_self" : "_blank") && j(i, "target", f);
    },
    d(h) {
      h && (oe(r), oe(i)), u && u.d(h);
    }
  };
}
function na(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Edit link") + ""
  ), i, o, a;
  return {
    c() {
      e = Y("a"), i = Re(r), j(e, "href", window.location.href), j(e, "class", "button");
    },
    m(l, f) {
      se(l, e, f), V(e, i), o || (a = xe(e, "click", wt(
        /*click_handler_1*/
        n[4]
      )), o = !0);
    },
    p: sn,
    d(l) {
      l && oe(e), o = !1, a();
    }
  };
}
function vd(n) {
  let e, r, i = (
    /*file*/
    n[0].name + ""
  ), o, a, l, f, u, h = (
    /*t*/
    n[2]("files_linkeditor", "Cancel") + ""
  ), s, d, m, y, b = !/*loading*/
  n[1] && ea(n), E = !/*loading*/
  n[1] && ta(n);
  return {
    c() {
      e = Y("div"), r = Y("h3"), o = Re(i), a = fe(), b && b.c(), l = fe(), f = Y("div"), u = Y("a"), s = Re(h), d = fe(), E && E.c(), j(e, "class", "edit push-bottom"), j(u, "href", window.location.href), j(u, "class", "button"), j(f, "class", "linkeditor-oc-dialog-buttonrow twobuttons");
    },
    m(T, S) {
      se(T, e, S), V(e, r), V(r, o), V(e, a), b && b.m(e, null), se(T, l, S), se(T, f, S), V(f, u), V(u, s), V(f, d), E && E.m(f, null), m || (y = xe(u, "click", wt(
        /*click_handler*/
        n[3]
      )), m = !0);
    },
    p(T, S) {
      S & /*file*/
      1 && i !== (i = /*file*/
      T[0].name + "") && cr(o, i), /*loading*/
      T[1] ? b && (b.d(1), b = null) : b ? b.p(T, S) : (b = ea(T), b.c(), b.m(e, null)), /*loading*/
      T[1] ? E && (E.d(1), E = null) : E ? E.p(T, S) : (E = ta(T), E.c(), E.m(f, null));
    },
    d(T) {
      T && (oe(e), oe(l), oe(f)), b && b.d(), E && E.d(), m = !1, y();
    }
  };
}
function bd(n) {
  let e, r;
  return e = new fr({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [vd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      qt(e.$$.fragment);
    },
    m(i, o) {
      Ft(e, i, o), r = !0;
    },
    p(i, [o]) {
      const a = {};
      o & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), o & /*$$scope, file, loading*/
      67 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (Ne(e.$$.fragment, i), r = !0);
    },
    o(i) {
      De(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Mt(e, i);
    }
  };
}
function _d(n, e, r) {
  let i, o;
  const a = window.t;
  let l;
  On(() => {
    l = xt.subscribe(async (h) => {
      if (r(0, i = h), i && i.isLoaded) {
        if (r(1, o = !1), !i.url) {
          OC.dialogs.alert(a("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."), a("files_linkeditor", "A slight problem"));
          return;
        }
        const s = i.isPublicLink && window.location.toString().includes("openfile=true");
        i.skipConfirmation && i.sameWindow && !s && (window.location.href = i.url, Ke.update(() => "none"));
      }
    });
  }), Sn(() => {
    l();
  });
  const f = () => {
    Ke.update(() => "none");
  }, u = () => {
    Ke.update(() => "edit");
  };
  return r(0, i = $t.getFileConfig()), r(1, o = !0), [i, o, a, f, u];
}
class Td extends hn {
  constructor(e) {
    super(), fn(this, e, _d, bd, an, {});
  }
}
var au = { exports: {} };
(function(n) {
  var e = function(r) {
    var i = 1e7, o = 7, a = 9007199254740992, l = b(a), f = "0123456789abcdefghijklmnopqrstuvwxyz", u = typeof BigInt == "function";
    function h(w, N, L, $) {
      return typeof w > "u" ? h[0] : typeof N < "u" ? +N == 10 && !L ? ee(w) : Ae(w, N, L, $) : ee(w);
    }
    function s(w, N) {
      this.value = w, this.sign = N, this.isSmall = !1;
    }
    s.prototype = Object.create(h.prototype);
    function d(w) {
      this.value = w, this.sign = w < 0, this.isSmall = !0;
    }
    d.prototype = Object.create(h.prototype);
    function m(w) {
      this.value = w;
    }
    m.prototype = Object.create(h.prototype);
    function y(w) {
      return -a < w && w < a;
    }
    function b(w) {
      return w < 1e7 ? [w] : w < 1e14 ? [w % 1e7, Math.floor(w / 1e7)] : [w % 1e7, Math.floor(w / 1e7) % 1e7, Math.floor(w / 1e14)];
    }
    function E(w) {
      T(w);
      var N = w.length;
      if (N < 4 && He(w, l) < 0)
        switch (N) {
          case 0:
            return 0;
          case 1:
            return w[0];
          case 2:
            return w[0] + w[1] * i;
          default:
            return w[0] + (w[1] + w[2] * i) * i;
        }
      return w;
    }
    function T(w) {
      for (var N = w.length; w[--N] === 0; ) ;
      w.length = N + 1;
    }
    function S(w) {
      for (var N = new Array(w), L = -1; ++L < w; )
        N[L] = 0;
      return N;
    }
    function C(w) {
      return w > 0 ? Math.floor(w) : Math.ceil(w);
    }
    function x(w, N) {
      var L = w.length, $ = N.length, g = new Array(L), c = 0, p = i, v, O;
      for (O = 0; O < $; O++)
        v = w[O] + N[O] + c, c = v >= p ? 1 : 0, g[O] = v - c * p;
      for (; O < L; )
        v = w[O] + c, c = v === p ? 1 : 0, g[O++] = v - c * p;
      return c > 0 && g.push(c), g;
    }
    function R(w, N) {
      return w.length >= N.length ? x(w, N) : x(N, w);
    }
    function U(w, N) {
      var L = w.length, $ = new Array(L), g = i, c, p;
      for (p = 0; p < L; p++)
        c = w[p] - g + N, N = Math.floor(c / g), $[p] = c - N * g, N += 1;
      for (; N > 0; )
        $[p++] = N % g, N = Math.floor(N / g);
      return $;
    }
    s.prototype.add = function(w) {
      var N = ee(w);
      if (this.sign !== N.sign)
        return this.subtract(N.negate());
      var L = this.value, $ = N.value;
      return N.isSmall ? new s(U(L, Math.abs($)), this.sign) : new s(R(L, $), this.sign);
    }, s.prototype.plus = s.prototype.add, d.prototype.add = function(w) {
      var N = ee(w), L = this.value;
      if (L < 0 !== N.sign)
        return this.subtract(N.negate());
      var $ = N.value;
      if (N.isSmall) {
        if (y(L + $)) return new d(L + $);
        $ = b(Math.abs($));
      }
      return new s(U($, Math.abs(L)), L < 0);
    }, d.prototype.plus = d.prototype.add, m.prototype.add = function(w) {
      return new m(this.value + ee(w).value);
    }, m.prototype.plus = m.prototype.add;
    function Z(w, N) {
      var L = w.length, $ = N.length, g = new Array(L), c = 0, p = i, v, O;
      for (v = 0; v < $; v++)
        O = w[v] - c - N[v], O < 0 ? (O += p, c = 1) : c = 0, g[v] = O;
      for (v = $; v < L; v++) {
        if (O = w[v] - c, O < 0) O += p;
        else {
          g[v++] = O;
          break;
        }
        g[v] = O;
      }
      for (; v < L; v++)
        g[v] = w[v];
      return T(g), g;
    }
    function z(w, N, L) {
      var $;
      return He(w, N) >= 0 ? $ = Z(w, N) : ($ = Z(N, w), L = !L), $ = E($), typeof $ == "number" ? (L && ($ = -$), new d($)) : new s($, L);
    }
    function re(w, N, L) {
      var $ = w.length, g = new Array($), c = -N, p = i, v, O;
      for (v = 0; v < $; v++)
        O = w[v] + c, c = Math.floor(O / p), O %= p, g[v] = O < 0 ? O + p : O;
      return g = E(g), typeof g == "number" ? (L && (g = -g), new d(g)) : new s(g, L);
    }
    s.prototype.subtract = function(w) {
      var N = ee(w);
      if (this.sign !== N.sign)
        return this.add(N.negate());
      var L = this.value, $ = N.value;
      return N.isSmall ? re(L, Math.abs($), this.sign) : z(L, $, this.sign);
    }, s.prototype.minus = s.prototype.subtract, d.prototype.subtract = function(w) {
      var N = ee(w), L = this.value;
      if (L < 0 !== N.sign)
        return this.add(N.negate());
      var $ = N.value;
      return N.isSmall ? new d(L - $) : re($, Math.abs(L), L >= 0);
    }, d.prototype.minus = d.prototype.subtract, m.prototype.subtract = function(w) {
      return new m(this.value - ee(w).value);
    }, m.prototype.minus = m.prototype.subtract, s.prototype.negate = function() {
      return new s(this.value, !this.sign);
    }, d.prototype.negate = function() {
      var w = this.sign, N = new d(-this.value);
      return N.sign = !w, N;
    }, m.prototype.negate = function() {
      return new m(-this.value);
    }, s.prototype.abs = function() {
      return new s(this.value, !1);
    }, d.prototype.abs = function() {
      return new d(Math.abs(this.value));
    }, m.prototype.abs = function() {
      return new m(this.value >= 0 ? this.value : -this.value);
    };
    function P(w, N) {
      var L = w.length, $ = N.length, g = L + $, c = S(g), p = i, v, O, D, M, X;
      for (D = 0; D < L; ++D) {
        M = w[D];
        for (var ne = 0; ne < $; ++ne)
          X = N[ne], v = M * X + c[D + ne], O = Math.floor(v / p), c[D + ne] = v - O * p, c[D + ne + 1] += O;
      }
      return T(c), c;
    }
    function ye(w, N) {
      var L = w.length, $ = new Array(L), g = i, c = 0, p, v;
      for (v = 0; v < L; v++)
        p = w[v] * N + c, c = Math.floor(p / g), $[v] = p - c * g;
      for (; c > 0; )
        $[v++] = c % g, c = Math.floor(c / g);
      return $;
    }
    function K(w, N) {
      for (var L = []; N-- > 0; ) L.push(0);
      return L.concat(w);
    }
    function Q(w, N) {
      var L = Math.max(w.length, N.length);
      if (L <= 30) return P(w, N);
      L = Math.ceil(L / 2);
      var $ = w.slice(L), g = w.slice(0, L), c = N.slice(L), p = N.slice(0, L), v = Q(g, p), O = Q($, c), D = Q(R(g, $), R(p, c)), M = R(R(v, K(Z(Z(D, v), O), L)), K(O, 2 * L));
      return T(M), M;
    }
    function G(w, N) {
      return -0.012 * w - 0.012 * N + 15e-6 * w * N > 0;
    }
    s.prototype.multiply = function(w) {
      var N = ee(w), L = this.value, $ = N.value, g = this.sign !== N.sign, c;
      if (N.isSmall) {
        if ($ === 0) return h[0];
        if ($ === 1) return this;
        if ($ === -1) return this.negate();
        if (c = Math.abs($), c < i)
          return new s(ye(L, c), g);
        $ = b(c);
      }
      return G(L.length, $.length) ? new s(Q(L, $), g) : new s(P(L, $), g);
    }, s.prototype.times = s.prototype.multiply;
    function he(w, N, L) {
      return w < i ? new s(ye(N, w), L) : new s(P(N, b(w)), L);
    }
    d.prototype._multiplyBySmall = function(w) {
      return y(w.value * this.value) ? new d(w.value * this.value) : he(Math.abs(w.value), b(Math.abs(this.value)), this.sign !== w.sign);
    }, s.prototype._multiplyBySmall = function(w) {
      return w.value === 0 ? h[0] : w.value === 1 ? this : w.value === -1 ? this.negate() : he(Math.abs(w.value), this.value, this.sign !== w.sign);
    }, d.prototype.multiply = function(w) {
      return ee(w)._multiplyBySmall(this);
    }, d.prototype.times = d.prototype.multiply, m.prototype.multiply = function(w) {
      return new m(this.value * ee(w).value);
    }, m.prototype.times = m.prototype.multiply;
    function we(w) {
      var N = w.length, L = S(N + N), $ = i, g, c, p, v, O;
      for (p = 0; p < N; p++) {
        v = w[p], c = 0 - v * v;
        for (var D = p; D < N; D++)
          O = w[D], g = 2 * (v * O) + L[p + D] + c, c = Math.floor(g / $), L[p + D] = g - c * $;
        L[p + N] = c;
      }
      return T(L), L;
    }
    s.prototype.square = function() {
      return new s(we(this.value), !1);
    }, d.prototype.square = function() {
      var w = this.value * this.value;
      return y(w) ? new d(w) : new s(we(b(Math.abs(this.value))), !1);
    }, m.prototype.square = function(w) {
      return new m(this.value * this.value);
    };
    function Ie(w, N) {
      var L = w.length, $ = N.length, g = i, c = S(N.length), p = N[$ - 1], v = Math.ceil(g / (2 * p)), O = ye(w, v), D = ye(N, v), M, X, ne, ue, le, be, Vn;
      for (O.length <= L && O.push(0), D.push(0), p = D[$ - 1], X = L - $; X >= 0; X--) {
        for (M = g - 1, O[X + $] !== p && (M = Math.floor((O[X + $] * g + O[X + $ - 1]) / p)), ne = 0, ue = 0, be = D.length, le = 0; le < be; le++)
          ne += M * D[le], Vn = Math.floor(ne / g), ue += O[X + le] - (ne - Vn * g), ne = Vn, ue < 0 ? (O[X + le] = ue + g, ue = -1) : (O[X + le] = ue, ue = 0);
        for (; ue !== 0; ) {
          for (M -= 1, ne = 0, le = 0; le < be; le++)
            ne += O[X + le] - g + D[le], ne < 0 ? (O[X + le] = ne + g, ne = 0) : (O[X + le] = ne, ne = 1);
          ue += ne;
        }
        c[X] = M;
      }
      return O = Oe(O, v)[0], [E(c), E(O)];
    }
    function J(w, N) {
      for (var L = w.length, $ = N.length, g = [], c = [], p = i, v, O, D, M, X; L; ) {
        if (c.unshift(w[--L]), T(c), He(c, N) < 0) {
          g.push(0);
          continue;
        }
        O = c.length, D = c[O - 1] * p + c[O - 2], M = N[$ - 1] * p + N[$ - 2], O > $ && (D = (D + 1) * p), v = Math.ceil(D / M);
        do {
          if (X = ye(N, v), He(X, c) <= 0) break;
          v--;
        } while (v);
        g.push(v), c = Z(c, X);
      }
      return g.reverse(), [E(g), E(c)];
    }
    function Oe(w, N) {
      var L = w.length, $ = S(L), g = i, c, p, v, O;
      for (v = 0, c = L - 1; c >= 0; --c)
        O = v * g + w[c], p = C(O / N), v = O - p * N, $[c] = p | 0;
      return [$, v | 0];
    }
    function We(w, N) {
      var L, $ = ee(N);
      if (u)
        return [new m(w.value / $.value), new m(w.value % $.value)];
      var g = w.value, c = $.value, p;
      if (c === 0) throw new Error("Cannot divide by zero");
      if (w.isSmall)
        return $.isSmall ? [new d(C(g / c)), new d(g % c)] : [h[0], w];
      if ($.isSmall) {
        if (c === 1) return [w, h[0]];
        if (c == -1) return [w.negate(), h[0]];
        var v = Math.abs(c);
        if (v < i) {
          L = Oe(g, v), p = E(L[0]);
          var O = L[1];
          return w.sign && (O = -O), typeof p == "number" ? (w.sign !== $.sign && (p = -p), [new d(p), new d(O)]) : [new s(p, w.sign !== $.sign), new d(O)];
        }
        c = b(v);
      }
      var D = He(g, c);
      if (D === -1) return [h[0], w];
      if (D === 0) return [h[w.sign === $.sign ? 1 : -1], h[0]];
      g.length + c.length <= 200 ? L = Ie(g, c) : L = J(g, c), p = L[0];
      var M = w.sign !== $.sign, X = L[1], ne = w.sign;
      return typeof p == "number" ? (M && (p = -p), p = new d(p)) : p = new s(p, M), typeof X == "number" ? (ne && (X = -X), X = new d(X)) : X = new s(X, ne), [p, X];
    }
    s.prototype.divmod = function(w) {
      var N = We(this, w);
      return {
        quotient: N[0],
        remainder: N[1]
      };
    }, m.prototype.divmod = d.prototype.divmod = s.prototype.divmod, s.prototype.divide = function(w) {
      return We(this, w)[0];
    }, m.prototype.over = m.prototype.divide = function(w) {
      return new m(this.value / ee(w).value);
    }, d.prototype.over = d.prototype.divide = s.prototype.over = s.prototype.divide, s.prototype.mod = function(w) {
      return We(this, w)[1];
    }, m.prototype.mod = m.prototype.remainder = function(w) {
      return new m(this.value % ee(w).value);
    }, d.prototype.remainder = d.prototype.mod = s.prototype.remainder = s.prototype.mod, s.prototype.pow = function(w) {
      var N = ee(w), L = this.value, $ = N.value, g, c, p;
      if ($ === 0) return h[1];
      if (L === 0) return h[0];
      if (L === 1) return h[1];
      if (L === -1) return N.isEven() ? h[1] : h[-1];
      if (N.sign)
        return h[0];
      if (!N.isSmall) throw new Error("The exponent " + N.toString() + " is too large.");
      if (this.isSmall && y(g = Math.pow(L, $)))
        return new d(C(g));
      for (c = this, p = h[1]; $ & !0 && (p = p.times(c), --$), $ !== 0; )
        $ /= 2, c = c.square();
      return p;
    }, d.prototype.pow = s.prototype.pow, m.prototype.pow = function(w) {
      var N = ee(w), L = this.value, $ = N.value, g = BigInt(0), c = BigInt(1), p = BigInt(2);
      if ($ === g) return h[1];
      if (L === g) return h[0];
      if (L === c) return h[1];
      if (L === BigInt(-1)) return N.isEven() ? h[1] : h[-1];
      if (N.isNegative()) return new m(g);
      for (var v = this, O = h[1]; ($ & c) === c && (O = O.times(v), --$), $ !== g; )
        $ /= p, v = v.square();
      return O;
    }, s.prototype.modPow = function(w, N) {
      if (w = ee(w), N = ee(N), N.isZero()) throw new Error("Cannot take modPow with modulus 0");
      var L = h[1], $ = this.mod(N);
      for (w.isNegative() && (w = w.multiply(h[-1]), $ = $.modInv(N)); w.isPositive(); ) {
        if ($.isZero()) return h[0];
        w.isOdd() && (L = L.multiply($).mod(N)), w = w.divide(2), $ = $.square().mod(N);
      }
      return L;
    }, m.prototype.modPow = d.prototype.modPow = s.prototype.modPow;
    function He(w, N) {
      if (w.length !== N.length)
        return w.length > N.length ? 1 : -1;
      for (var L = w.length - 1; L >= 0; L--)
        if (w[L] !== N[L]) return w[L] > N[L] ? 1 : -1;
      return 0;
    }
    s.prototype.compareAbs = function(w) {
      var N = ee(w), L = this.value, $ = N.value;
      return N.isSmall ? 1 : He(L, $);
    }, d.prototype.compareAbs = function(w) {
      var N = ee(w), L = Math.abs(this.value), $ = N.value;
      return N.isSmall ? ($ = Math.abs($), L === $ ? 0 : L > $ ? 1 : -1) : -1;
    }, m.prototype.compareAbs = function(w) {
      var N = this.value, L = ee(w).value;
      return N = N >= 0 ? N : -N, L = L >= 0 ? L : -L, N === L ? 0 : N > L ? 1 : -1;
    }, s.prototype.compare = function(w) {
      if (w === 1 / 0)
        return -1;
      if (w === -1 / 0)
        return 1;
      var N = ee(w), L = this.value, $ = N.value;
      return this.sign !== N.sign ? N.sign ? 1 : -1 : N.isSmall ? this.sign ? -1 : 1 : He(L, $) * (this.sign ? -1 : 1);
    }, s.prototype.compareTo = s.prototype.compare, d.prototype.compare = function(w) {
      if (w === 1 / 0)
        return -1;
      if (w === -1 / 0)
        return 1;
      var N = ee(w), L = this.value, $ = N.value;
      return N.isSmall ? L == $ ? 0 : L > $ ? 1 : -1 : L < 0 !== N.sign ? L < 0 ? -1 : 1 : L < 0 ? 1 : -1;
    }, d.prototype.compareTo = d.prototype.compare, m.prototype.compare = function(w) {
      if (w === 1 / 0)
        return -1;
      if (w === -1 / 0)
        return 1;
      var N = this.value, L = ee(w).value;
      return N === L ? 0 : N > L ? 1 : -1;
    }, m.prototype.compareTo = m.prototype.compare, s.prototype.equals = function(w) {
      return this.compare(w) === 0;
    }, m.prototype.eq = m.prototype.equals = d.prototype.eq = d.prototype.equals = s.prototype.eq = s.prototype.equals, s.prototype.notEquals = function(w) {
      return this.compare(w) !== 0;
    }, m.prototype.neq = m.prototype.notEquals = d.prototype.neq = d.prototype.notEquals = s.prototype.neq = s.prototype.notEquals, s.prototype.greater = function(w) {
      return this.compare(w) > 0;
    }, m.prototype.gt = m.prototype.greater = d.prototype.gt = d.prototype.greater = s.prototype.gt = s.prototype.greater, s.prototype.lesser = function(w) {
      return this.compare(w) < 0;
    }, m.prototype.lt = m.prototype.lesser = d.prototype.lt = d.prototype.lesser = s.prototype.lt = s.prototype.lesser, s.prototype.greaterOrEquals = function(w) {
      return this.compare(w) >= 0;
    }, m.prototype.geq = m.prototype.greaterOrEquals = d.prototype.geq = d.prototype.greaterOrEquals = s.prototype.geq = s.prototype.greaterOrEquals, s.prototype.lesserOrEquals = function(w) {
      return this.compare(w) <= 0;
    }, m.prototype.leq = m.prototype.lesserOrEquals = d.prototype.leq = d.prototype.lesserOrEquals = s.prototype.leq = s.prototype.lesserOrEquals, s.prototype.isEven = function() {
      return (this.value[0] & 1) === 0;
    }, d.prototype.isEven = function() {
      return (this.value & 1) === 0;
    }, m.prototype.isEven = function() {
      return (this.value & BigInt(1)) === BigInt(0);
    }, s.prototype.isOdd = function() {
      return (this.value[0] & 1) === 1;
    }, d.prototype.isOdd = function() {
      return (this.value & 1) === 1;
    }, m.prototype.isOdd = function() {
      return (this.value & BigInt(1)) === BigInt(1);
    }, s.prototype.isPositive = function() {
      return !this.sign;
    }, d.prototype.isPositive = function() {
      return this.value > 0;
    }, m.prototype.isPositive = d.prototype.isPositive, s.prototype.isNegative = function() {
      return this.sign;
    }, d.prototype.isNegative = function() {
      return this.value < 0;
    }, m.prototype.isNegative = d.prototype.isNegative, s.prototype.isUnit = function() {
      return !1;
    }, d.prototype.isUnit = function() {
      return Math.abs(this.value) === 1;
    }, m.prototype.isUnit = function() {
      return this.abs().value === BigInt(1);
    }, s.prototype.isZero = function() {
      return !1;
    }, d.prototype.isZero = function() {
      return this.value === 0;
    }, m.prototype.isZero = function() {
      return this.value === BigInt(0);
    }, s.prototype.isDivisibleBy = function(w) {
      var N = ee(w);
      return N.isZero() ? !1 : N.isUnit() ? !0 : N.compareAbs(2) === 0 ? this.isEven() : this.mod(N).isZero();
    }, m.prototype.isDivisibleBy = d.prototype.isDivisibleBy = s.prototype.isDivisibleBy;
    function $e(w) {
      var N = w.abs();
      if (N.isUnit()) return !1;
      if (N.equals(2) || N.equals(3) || N.equals(5)) return !0;
      if (N.isEven() || N.isDivisibleBy(3) || N.isDivisibleBy(5)) return !1;
      if (N.lesser(49)) return !0;
    }
    function de(w, N) {
      for (var L = w.prev(), $ = L, g = 0, c, p, v; $.isEven(); ) $ = $.divide(2), g++;
      e: for (p = 0; p < N.length; p++)
        if (!w.lesser(N[p]) && (v = e(N[p]).modPow($, w), !(v.isUnit() || v.equals(L)))) {
          for (c = g - 1; c != 0; c--) {
            if (v = v.square().mod(w), v.isUnit()) return !1;
            if (v.equals(L)) continue e;
          }
          return !1;
        }
      return !0;
    }
    s.prototype.isPrime = function(w) {
      var N = $e(this);
      if (N !== r) return N;
      var L = this.abs(), $ = L.bitLength();
      if ($ <= 64)
        return de(L, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
      for (var g = Math.log(2) * $.toJSNumber(), c = Math.ceil(w === !0 ? 2 * Math.pow(g, 2) : g), p = [], v = 0; v < c; v++)
        p.push(e(v + 2));
      return de(L, p);
    }, m.prototype.isPrime = d.prototype.isPrime = s.prototype.isPrime, s.prototype.isProbablePrime = function(w, N) {
      var L = $e(this);
      if (L !== r) return L;
      for (var $ = this.abs(), g = w === r ? 5 : w, c = [], p = 0; p < g; p++)
        c.push(e.randBetween(2, $.minus(2), N));
      return de($, c);
    }, m.prototype.isProbablePrime = d.prototype.isProbablePrime = s.prototype.isProbablePrime, s.prototype.modInv = function(w) {
      for (var N = e.zero, L = e.one, $ = ee(w), g = this.abs(), c, p, v; !g.isZero(); )
        c = $.divide(g), p = N, v = $, N = L, $ = g, L = p.subtract(c.multiply(L)), g = v.subtract(c.multiply(g));
      if (!$.isUnit()) throw new Error(this.toString() + " and " + w.toString() + " are not co-prime");
      return N.compare(0) === -1 && (N = N.add(w)), this.isNegative() ? N.negate() : N;
    }, m.prototype.modInv = d.prototype.modInv = s.prototype.modInv, s.prototype.next = function() {
      var w = this.value;
      return this.sign ? re(w, 1, this.sign) : new s(U(w, 1), this.sign);
    }, d.prototype.next = function() {
      var w = this.value;
      return w + 1 < a ? new d(w + 1) : new s(l, !1);
    }, m.prototype.next = function() {
      return new m(this.value + BigInt(1));
    }, s.prototype.prev = function() {
      var w = this.value;
      return this.sign ? new s(U(w, 1), !0) : re(w, 1, this.sign);
    }, d.prototype.prev = function() {
      var w = this.value;
      return w - 1 > -a ? new d(w - 1) : new s(l, !0);
    }, m.prototype.prev = function() {
      return new m(this.value - BigInt(1));
    };
    for (var it = [1]; 2 * it[it.length - 1] <= i; ) it.push(2 * it[it.length - 1]);
    var Te = it.length, ve = it[Te - 1];
    function Xt(w) {
      return Math.abs(w) <= i;
    }
    s.prototype.shiftLeft = function(w) {
      var N = ee(w).toJSNumber();
      if (!Xt(N))
        throw new Error(String(N) + " is too large for shifting.");
      if (N < 0) return this.shiftRight(-N);
      var L = this;
      if (L.isZero()) return L;
      for (; N >= Te; )
        L = L.multiply(ve), N -= Te - 1;
      return L.multiply(it[N]);
    }, m.prototype.shiftLeft = d.prototype.shiftLeft = s.prototype.shiftLeft, s.prototype.shiftRight = function(w) {
      var N, L = ee(w).toJSNumber();
      if (!Xt(L))
        throw new Error(String(L) + " is too large for shifting.");
      if (L < 0) return this.shiftLeft(-L);
      for (var $ = this; L >= Te; ) {
        if ($.isZero() || $.isNegative() && $.isUnit()) return $;
        N = We($, ve), $ = N[1].isNegative() ? N[0].prev() : N[0], L -= Te - 1;
      }
      return N = We($, it[L]), N[1].isNegative() ? N[0].prev() : N[0];
    }, m.prototype.shiftRight = d.prototype.shiftRight = s.prototype.shiftRight;
    function I(w, N, L) {
      N = ee(N);
      for (var $ = w.isNegative(), g = N.isNegative(), c = $ ? w.not() : w, p = g ? N.not() : N, v = 0, O = 0, D = null, M = null, X = []; !c.isZero() || !p.isZero(); )
        D = We(c, ve), v = D[1].toJSNumber(), $ && (v = ve - 1 - v), M = We(p, ve), O = M[1].toJSNumber(), g && (O = ve - 1 - O), c = D[0], p = M[0], X.push(L(v, O));
      for (var ne = L($ ? 1 : 0, g ? 1 : 0) !== 0 ? e(-1) : e(0), ue = X.length - 1; ue >= 0; ue -= 1)
        ne = ne.multiply(ve).add(e(X[ue]));
      return ne;
    }
    s.prototype.not = function() {
      return this.negate().prev();
    }, m.prototype.not = d.prototype.not = s.prototype.not, s.prototype.and = function(w) {
      return I(this, w, function(N, L) {
        return N & L;
      });
    }, m.prototype.and = d.prototype.and = s.prototype.and, s.prototype.or = function(w) {
      return I(this, w, function(N, L) {
        return N | L;
      });
    }, m.prototype.or = d.prototype.or = s.prototype.or, s.prototype.xor = function(w) {
      return I(this, w, function(N, L) {
        return N ^ L;
      });
    }, m.prototype.xor = d.prototype.xor = s.prototype.xor;
    var _ = 1 << 30, B = (i & -i) * (i & -i) | _;
    function k(w) {
      var N = w.value, L = typeof N == "number" ? N | _ : typeof N == "bigint" ? N | BigInt(_) : N[0] + N[1] * i | B;
      return L & -L;
    }
    function me(w, N) {
      if (N.compareTo(w) <= 0) {
        var L = me(w, N.square(N)), $ = L.p, g = L.e, c = $.multiply(N);
        return c.compareTo(w) <= 0 ? { p: c, e: g * 2 + 1 } : { p: $, e: g * 2 };
      }
      return { p: e(1), e: 0 };
    }
    s.prototype.bitLength = function() {
      var w = this;
      return w.compareTo(e(0)) < 0 && (w = w.negate().subtract(e(1))), w.compareTo(e(0)) === 0 ? e(0) : e(me(w, e(2)).e).add(e(1));
    }, m.prototype.bitLength = d.prototype.bitLength = s.prototype.bitLength;
    function ae(w, N) {
      return w = ee(w), N = ee(N), w.greater(N) ? w : N;
    }
    function Se(w, N) {
      return w = ee(w), N = ee(N), w.lesser(N) ? w : N;
    }
    function pe(w, N) {
      if (w = ee(w).abs(), N = ee(N).abs(), w.equals(N)) return w;
      if (w.isZero()) return N;
      if (N.isZero()) return w;
      for (var L = h[1], $, g; w.isEven() && N.isEven(); )
        $ = Se(k(w), k(N)), w = w.divide($), N = N.divide($), L = L.multiply($);
      for (; w.isEven(); )
        w = w.divide(k(w));
      do {
        for (; N.isEven(); )
          N = N.divide(k(N));
        w.greater(N) && (g = N, N = w, w = g), N = N.subtract(w);
      } while (!N.isZero());
      return L.isUnit() ? w : w.multiply(L);
    }
    function Fe(w, N) {
      return w = ee(w).abs(), N = ee(N).abs(), w.divide(pe(w, N)).multiply(N);
    }
    function Ee(w, N, L) {
      w = ee(w), N = ee(N);
      var $ = L || Math.random, g = Se(w, N), c = ae(w, N), p = c.subtract(g).add(1);
      if (p.isSmall) return g.add(Math.floor($() * p));
      for (var v = yt(p, i).value, O = [], D = !0, M = 0; M < v.length; M++) {
        var X = D ? v[M] + (M + 1 < v.length ? v[M + 1] / i : 0) : i, ne = C($() * X);
        O.push(ne), ne < v[M] && (D = !1);
      }
      return g.add(h.fromArray(O, i, !1));
    }
    var Ae = function(w, N, L, $) {
      L = L || f, w = String(w), $ || (w = w.toLowerCase(), L = L.toLowerCase());
      var g = w.length, c, p = Math.abs(N), v = {};
      for (c = 0; c < L.length; c++)
        v[L[c]] = c;
      for (c = 0; c < g; c++) {
        var O = w[c];
        if (O !== "-" && O in v && v[O] >= p) {
          if (O === "1" && p === 1) continue;
          throw new Error(O + " is not a valid digit in base " + N + ".");
        }
      }
      N = ee(N);
      var D = [], M = w[0] === "-";
      for (c = M ? 1 : 0; c < w.length; c++) {
        var O = w[c];
        if (O in v) D.push(ee(v[O]));
        else if (O === "<") {
          var X = c;
          do
            c++;
          while (w[c] !== ">" && c < w.length);
          D.push(ee(w.slice(X + 1, c)));
        } else throw new Error(O + " is not a valid character");
      }
      return lt(D, N, M);
    };
    function lt(w, N, L) {
      var $ = h[0], g = h[1], c;
      for (c = w.length - 1; c >= 0; c--)
        $ = $.add(w[c].times(g)), g = g.times(N);
      return L ? $.negate() : $;
    }
    function At(w, N) {
      return N = N || f, w < N.length ? N[w] : "<" + w + ">";
    }
    function yt(w, N) {
      if (N = e(N), N.isZero()) {
        if (w.isZero()) return { value: [0], isNegative: !1 };
        throw new Error("Cannot convert nonzero numbers to base 0.");
      }
      if (N.equals(-1)) {
        if (w.isZero()) return { value: [0], isNegative: !1 };
        if (w.isNegative())
          return {
            value: [].concat.apply(
              [],
              Array.apply(null, Array(-w.toJSNumber())).map(Array.prototype.valueOf, [1, 0])
            ),
            isNegative: !1
          };
        var L = Array.apply(null, Array(w.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
        return L.unshift([1]), {
          value: [].concat.apply([], L),
          isNegative: !1
        };
      }
      var $ = !1;
      if (w.isNegative() && N.isPositive() && ($ = !0, w = w.abs()), N.isUnit())
        return w.isZero() ? { value: [0], isNegative: !1 } : {
          value: Array.apply(null, Array(w.toJSNumber())).map(Number.prototype.valueOf, 1),
          isNegative: $
        };
      for (var g = [], c = w, p; c.isNegative() || c.compareAbs(N) >= 0; ) {
        p = c.divmod(N), c = p.quotient;
        var v = p.remainder;
        v.isNegative() && (v = N.minus(v).abs(), c = c.next()), g.push(v.toJSNumber());
      }
      return g.push(c.toJSNumber()), { value: g.reverse(), isNegative: $ };
    }
    function Ut(w, N, L) {
      var $ = yt(w, N);
      return ($.isNegative ? "-" : "") + $.value.map(function(g) {
        return At(g, L);
      }).join("");
    }
    s.prototype.toArray = function(w) {
      return yt(this, w);
    }, d.prototype.toArray = function(w) {
      return yt(this, w);
    }, m.prototype.toArray = function(w) {
      return yt(this, w);
    }, s.prototype.toString = function(w, N) {
      if (w === r && (w = 10), w !== 10 || N) return Ut(this, w, N);
      for (var L = this.value, $ = L.length, g = String(L[--$]), c = "0000000", p; --$ >= 0; )
        p = String(L[$]), g += c.slice(p.length) + p;
      var v = this.sign ? "-" : "";
      return v + g;
    }, d.prototype.toString = function(w, N) {
      return w === r && (w = 10), w != 10 || N ? Ut(this, w, N) : String(this.value);
    }, m.prototype.toString = d.prototype.toString, m.prototype.toJSON = s.prototype.toJSON = d.prototype.toJSON = function() {
      return this.toString();
    }, s.prototype.valueOf = function() {
      return parseInt(this.toString(), 10);
    }, s.prototype.toJSNumber = s.prototype.valueOf, d.prototype.valueOf = function() {
      return this.value;
    }, d.prototype.toJSNumber = d.prototype.valueOf, m.prototype.valueOf = m.prototype.toJSNumber = function() {
      return parseInt(this.toString(), 10);
    };
    function Zt(w) {
      if (y(+w)) {
        var N = +w;
        if (N === C(N))
          return u ? new m(BigInt(N)) : new d(N);
        throw new Error("Invalid integer: " + w);
      }
      var L = w[0] === "-";
      L && (w = w.slice(1));
      var $ = w.split(/e/i);
      if ($.length > 2) throw new Error("Invalid integer: " + $.join("e"));
      if ($.length === 2) {
        var g = $[1];
        if (g[0] === "+" && (g = g.slice(1)), g = +g, g !== C(g) || !y(g)) throw new Error("Invalid integer: " + g + " is not a valid exponent.");
        var c = $[0], p = c.indexOf(".");
        if (p >= 0 && (g -= c.length - p - 1, c = c.slice(0, p) + c.slice(p + 1)), g < 0) throw new Error("Cannot include negative exponent part for integers");
        c += new Array(g + 1).join("0"), w = c;
      }
      var v = /^([0-9][0-9]*)$/.test(w);
      if (!v) throw new Error("Invalid integer: " + w);
      if (u)
        return new m(BigInt(L ? "-" + w : w));
      for (var O = [], D = w.length, M = o, X = D - M; D > 0; )
        O.push(+w.slice(X, D)), X -= M, X < 0 && (X = 0), D -= M;
      return T(O), new s(O, L);
    }
    function Ln(w) {
      if (u)
        return new m(BigInt(w));
      if (y(w)) {
        if (w !== C(w)) throw new Error(w + " is not an integer.");
        return new d(w);
      }
      return Zt(w.toString());
    }
    function ee(w) {
      return typeof w == "number" ? Ln(w) : typeof w == "string" ? Zt(w) : typeof w == "bigint" ? new m(w) : w;
    }
    for (var Le = 0; Le < 1e3; Le++)
      h[Le] = ee(Le), Le > 0 && (h[-Le] = ee(-Le));
    return h.one = h[1], h.zero = h[0], h.minusOne = h[-1], h.max = ae, h.min = Se, h.gcd = pe, h.lcm = Fe, h.isInstance = function(w) {
      return w instanceof s || w instanceof d || w instanceof m;
    }, h.randBetween = Ee, h.fromArray = function(w, N, L) {
      return lt(w.map(ee), ee(N || 10), L);
    }, h;
  }();
  n.hasOwnProperty("exports") && (n.exports = e);
})(au);
var Nd = au.exports;
const Id = /* @__PURE__ */ bo(Nd), jt = 100 * 1e3 * 1e3, Ad = 32768, Od = 9783072e5;
class Sd {
  constructor(e) {
    console.info({ id: e });
  }
}
class Rd {
  constructor() {
    this.debug = !1;
  }
  parse64Content(e) {
    const r = window.atob(e), i = r.length, o = new _l(i);
    for (let a = 0; a < i; a++)
      o[a] = r.charCodeAt(a);
    return this.parseBuffer(o);
  }
  parseBuffer(e) {
    if (e.toString("utf8", 0, 6) !== "bplist")
      throw new Error("Invalid binary plist. Expected 'bplist' at offset 0.");
    const o = e.slice(e.length - 32, e.length), a = o.readUInt8(6);
    this.debug && console.log("offsetSize: " + a);
    const l = o.readUInt8(7);
    this.debug && console.log("objectRefSize: " + l);
    const f = this.readUInt64BE(o, 8);
    this.debug && console.log("numObjects: " + f);
    const u = this.readUInt64BE(o, 16);
    this.debug && console.log("topObject: " + u);
    const h = this.readUInt64BE(o, 24);
    if (this.debug && console.log("offsetTableOffset: " + h), f > Ad)
      throw new Error("maxObjectCount exceeded");
    const s = [];
    for (let m = 0; m < f; m++) {
      const y = e.slice(h + m * a, h + (m + 1) * a);
      s[m] = this.readUInt(y, 0), this.debug;
    }
    const d = (m) => {
      const y = s[m], b = e[y], E = (b & 240) >> 4, T = b & 15, S = () => {
        switch (T) {
          case 0:
            return null;
          case 8:
            return !1;
          case 9:
            return !0;
          case 15:
            return null;
          default:
            throw new Error("Unhandled simple type 0x" + E.toString(16));
        }
      }, C = (K) => {
        let Q = "", G;
        for (G = 0; G < K.length && K[G] === 0; G++)
          ;
        for (; G < K.length; G++) {
          const he = "00" + K[G].toString(16);
          Q += he.substr(he.length - 2);
        }
        return Q;
      }, x = () => {
        const K = Math.pow(2, T);
        if (K > 4) {
          const Q = e.slice(y + 1, y + 1 + K), G = C(Q);
          return Id(G, 16);
        }
        if (K < jt)
          return this.readUInt(e.slice(y + 1, y + 1 + K));
        throw new Error(
          "Too little heap space available! Wanted to read " + K + " bytes, but only " + jt + " are available."
        );
      }, R = () => {
        const K = T + 1;
        if (K < jt)
          return new Sd(this.readUInt(e.slice(y + 1, y + 1 + K)));
        throw new Error(
          "To little heap space available! Wanted to read " + K + " bytes, but only " + jt + " are available."
        );
      }, U = () => {
        const K = Math.pow(2, T);
        if (K < jt) {
          const Q = e.slice(y + 1, y + 1 + K);
          if (K === 4)
            return Q.readFloatBE(0);
          if (K === 8)
            return Q.readDoubleBE(0);
        } else
          throw new Error(
            "To little heap space available! Wanted to read " + K + " bytes, but only " + jt + " are available."
          );
      }, Z = () => {
        T !== 3 && console.error("Unknown date type :" + T + ". Parsing anyway...");
        const K = e.slice(y + 1, y + 9);
        return new Date(Od + 1e3 * K.readDoubleBE(0));
      }, z = () => {
        let K = 1, Q = T;
        if (T === 15) {
          const G = e[y + 1], he = (G & 240) / 16;
          he !== 1 && console.error("0x4: UNEXPECTED LENGTH-INT TYPE! " + he);
          const we = G & 15, Ie = Math.pow(2, we);
          K = 2 + Ie, Ie < 3 ? Q = this.readUInt(e.slice(y + 2, y + 2 + Ie)) : Q = this.readUInt(e.slice(y + 2, y + 2 + Ie));
        }
        if (Q < jt)
          return e.slice(y + K, y + K + Q);
        throw new Error(
          "To little heap space available! Wanted to read " + Q + " bytes, but only " + jt + " are available."
        );
      }, re = (K) => {
        K = K || 0;
        let Q = "utf8", G = T, he = 1;
        if (T === 15) {
          const we = e[y + 1], Ie = (we & 240) / 16;
          Ie !== 1 && console.error("UNEXPECTED LENGTH-INT TYPE! " + Ie);
          const J = we & 15, Oe = Math.pow(2, J);
          he = 2 + Oe, Oe < 3 ? G = this.readUInt(e.slice(y + 2, y + 2 + Oe)) : G = this.readUInt(e.slice(y + 2, y + 2 + Oe));
        }
        if (G *= K + 1, G < jt) {
          let we = e.toString("utf8", y + he, y + he + G);
          return K && (we = this.swapBytes(we), Q = "ucs2"), we.toString(Q);
        } else
          throw new Error(
            "To little heap space available! Wanted to read " + G + " bytes, but only " + jt + " are available."
          );
      }, P = () => {
        let K = T, Q = 1;
        if (T === 15) {
          const he = e[y + 1], we = (he & 240) / 16;
          we !== 1 && console.error("0xa: UNEXPECTED LENGTH-INT TYPE! " + we);
          const Ie = he & 15, J = Math.pow(2, Ie);
          Q = 2 + J, J < 3 ? K = this.readUInt(e.slice(y + 2, y + 2 + J)) : K = this.readUInt(e.slice(y + 2, y + 2 + J));
        }
        if (K * l > jt)
          throw new Error("To little heap space available!");
        const G = [];
        for (let he = 0; he < K; he++) {
          const we = this.readUInt(
            e.slice(y + Q + he * l, y + Q + (he + 1) * l)
          );
          G[he] = d(we);
        }
        return G;
      }, ye = () => {
        let K = T, Q = 1;
        if (T === 15) {
          const he = e[y + 1], we = (he & 240) / 16;
          we !== 1 && console.error("0xD: UNEXPECTED LENGTH-INT TYPE! " + we);
          const Ie = he & 15, J = Math.pow(2, Ie);
          Q = 2 + J, J < 3 ? K = this.readUInt(e.slice(y + 2, y + 2 + J)) : K = this.readUInt(e.slice(y + 2, y + 2 + J));
        }
        if (K * 2 * l > jt)
          throw new Error("To little heap space available!");
        this.debug && console.log("Parsing dictionary #" + m);
        const G = {};
        for (let he = 0; he < K; he++) {
          const we = this.readUInt(
            e.slice(y + Q + he * l, y + Q + (he + 1) * l)
          ), Ie = this.readUInt(
            e.slice(
              y + Q + K * l + he * l,
              y + Q + K * l + (he + 1) * l
            )
          ), J = d(we), Oe = d(Ie);
          this.debug && console.log("  DICT #" + m + ": Mapped " + J + " to " + Oe), G[J] = Oe;
        }
        return G;
      };
      switch (E) {
        case 0:
          return S();
        case 1:
          return x();
        case 8:
          return R();
        case 2:
          return U();
        case 3:
          return Z();
        case 4:
          return z();
        case 5:
          return re();
        case 6:
          return re(!0);
        case 10:
          return P();
        case 13:
          return ye();
        default:
          throw new Error("Unhandled type 0x" + E.toString(16));
      }
    };
    return [d(u)];
  }
  readUInt(e, r) {
    r = r || 0;
    let i = 0;
    for (let o = r; o < e.length; o++)
      i <<= 8, i |= e[o] & 255;
    return i;
  }
  // we're just going to toss the high order bits because javascript doesn't have 64-bit ints
  readUInt64BE(e, r) {
    return e.slice(r, r + 8).readUInt32BE(4, 8);
  }
  swapBytes(e) {
    const r = e.length;
    for (let i = 0; i < r; i += 2) {
      const o = e[i];
      e[i] = e[i + 1], e[i + 1] = o;
    }
    return e;
  }
}
const Cd = new Rd(), Qt = {
  skipConfirmation: "X-Skip-Confirm-Navigation=1",
  sameWindow: "X-Target=_self"
}, wn = {
  skipConfirmation: "X-Skip-Confirm-Navigation",
  sameWindow: "X-Target"
}, ra = {
  url: "",
  sameWindow: !1,
  skipConfirmation: !1
};
class zt {
  /**
   * Generates a URL file.
   */
  static generateURLFileContent(e, r, i = !1, o = !1) {
    let a = "";
    return e && e.indexOf("[InternetShortcut]") !== -1 && e.indexOf("URL=") !== -1 ? a = e.replace(new RegExp("URL=.*", "gm"), `URL=${qe(r)}`) : a = `[InternetShortcut]\r
URL=${qe(r)}`, !i && a.indexOf(Qt.sameWindow) !== -1 ? a = a.replace(Qt.sameWindow, "") : i && a.indexOf(Qt.sameWindow) === -1 && (a = `${a}\r
${Qt.sameWindow}`), !o && a.indexOf(Qt.skipConfirmation) !== -1 ? a = a.replace(Qt.skipConfirmation, "") : o && a.indexOf(Qt.skipConfirmation) === -1 && (a = `${a}\r
${Qt.skipConfirmation}`), a = a.replace(/\r\n\r\n/gm, `\r
`).trim(), `${a}\r
`;
  }
  /**
   * Parse a URL file.
   */
  static parseURLFile(e) {
    const r = { ...ra };
    if (e) {
      const i = e.match("URL=.*");
      if (i && Array.isArray(i) && i.length > 0) {
        const o = i[0];
        r.url = qe(o.replace("URL=", ""));
      }
      e.indexOf(Qt.skipConfirmation) !== -1 && (r.skipConfirmation = !0), e.indexOf(Qt.sameWindow) !== -1 && (r.sameWindow = !0);
    }
    return r;
  }
  /**
   * Generates a webloc file.
   */
  static generateWeblocFileContent(e, r, i = !1, o = !1) {
    let a = "", l = !1;
    if (e) {
      const f = new window.DOMParser(), u = oa(e), h = f.parseFromString(u, "text/xml"), s = [...h.getElementsByTagName("dict"), ...h.getElementsByTagName("extra")];
      let d = !1, m = !1;
      if (s && s.length)
        for (const b of s) {
          const E = b.getElementsByTagName("key"), T = b.getElementsByTagName("string");
          Ht(E) === "URL" && (zi(T, qe(r)), l = !0), Ht(E) === wn.sameWindow && Ht(T) === "_self" && (i ? zi(T, "_self") : h.getElementsByTagName("plist")[0].removeChild(b), m = !0), Ht(E) === wn.skipConfirmation && Ht(T) === "1" && (o ? zi(T, "1") : h.getElementsByTagName("plist")[0].removeChild(b), d = !0);
        }
      if (i && !m) {
        const b = ia(h, wn.sameWindow, "_self");
        h.getElementsByTagName("plist")[0].appendChild(b);
      }
      if (o && !d) {
        const b = ia(h, wn.skipConfirmation, "1");
        h.getElementsByTagName("plist")[0].appendChild(b);
      }
      a = `<?xml version="1.0" encoding="UTF-8"?>
			${new window.XMLSerializer().serializeToString(h)}`, a.indexOf("parsererror") > -1 && (console.error("Parse error", a), a = ""), a = Ld(a);
    }
    return (!a || !l) && (a = `<?xml version="1.0" encoding="UTF-8"?>
				<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
				<plist version="1.0">
					<dict>
						<key>URL</key>
						<string>${qe(r)}</string>
					</dict>`, i && (a = `${a}
				<extra>
					<key>${wn.sameWindow}</key>
					<string>_self</string>
				</extra>`), o && (a = `${a}
				<extra>
					<key>${wn.skipConfirmation}</key>
					<string>1</string>
				</extra>`), a = `${a}
			</plist>`), a = xd(a), a = a.replace(/(\n|\b)\t+/g, "$1").trim(), a = a.replace(/^\s*$(?:\r\n?|\n)/gm, "").trim(), a;
  }
  /**
   * Parse a webloc file.
   */
  static parseWeblocFile(e) {
    const r = { ...ra };
    if (e)
      if (e.substring(0, 6) === "bplist")
        try {
          const i = Cd.parse64Content(window.btoa(e));
          i && i.length && i[0] && i[0].URL && (r.url = i[0].URL);
        } catch (i) {
          console.info(i);
        }
      else {
        const i = new window.DOMParser(), o = oa(e), a = i.parseFromString(o, "text/xml"), l = [...a.getElementsByTagName("dict"), ...a.getElementsByTagName("extra")];
        if (l && l.length)
          for (const f of l) {
            const u = f.getElementsByTagName("key"), h = f.getElementsByTagName("string");
            Ht(u) === "URL" && (r.url = qe(Ht(h))), Ht(u) === wn.sameWindow && Ht(h) === "_self" && (r.sameWindow = !0), Ht(u) === wn.skipConfirmation && Ht(h) === "1" && (r.skipConfirmation = !0);
          }
      }
    return r;
  }
  /**
   * Get extension from filename.
   */
  static getExtension(e) {
    if (e) {
      const r = e.split(".");
      if (r && Array.isArray(r) && r.length > 1) {
        const i = r[r.length - 1];
        if (i)
          return i.toLowerCase();
      }
    }
    return "";
  }
}
const Ht = (n) => n && n.length > 0 && n[0].childNodes && n[0].childNodes.length > 0 && n[0].childNodes[0] ? n[0].childNodes[0].nodeValue : "", zi = (n, e) => {
  n && n.length > 0 && n[0].childNodes && n[0].childNodes.length > 0 && n[0].childNodes[0] && (n[0].childNodes[0].nodeValue = e);
}, ia = (n, e, r) => {
  const i = n.createElement("extra"), o = n.createElement("key");
  o.appendChild(n.createTextNode(e)), i.appendChild(o);
  const a = n.createElement("string");
  return a.appendChild(n.createTextNode(r)), i.appendChild(a), i;
}, Ld = (n) => n.replace(/></g, `>
<`), xd = (n) => n.replace(/<extra>/g, "<!-- <extra>").replace(/<\/extra>/g, "</extra> -->"), oa = (n) => n.replace(/<!-- <extra>/g, "<extra>").replace(/<\/extra> -->/g, "</extra>"), sa = "application/internet-shortcut", qi = () => '<span class="icon-link" style="display: block;"></span>';
class Un {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    Is({
      id: "editLink",
      displayName: () => t("files_linkeditor", "Edit link"),
      iconSvgInline: qi,
      exec: async ({ nodes: r }) => {
        const [i] = r;
        i && await Un.loadAndChangeViewMode({
          fileName: i.basename,
          dirName: i.dirname,
          nextViewMode: "edit",
          permissions: i.permissions
        });
      },
      enabled: ({ nodes: r }) => window.OC.currentUser && r.every((i) => i.permissions >= mt.WRITE && sa.includes(i.mime))
    }), Is({
      id: "viewLink",
      displayName: () => t("files_linkeditor", "View link"),
      title: () => "Hello",
      iconSvgInline: qi,
      exec: async ({ nodes: r }) => {
        const [i] = r;
        i && (window.OC.currentUser ? await Un.loadAndChangeViewMode({
          fileName: i.basename,
          dirName: i.dirname,
          nextViewMode: "view",
          permissions: i.permissions
        }) : await Un.loadAndChangeViewMode({
          fileName: i.displayname ?? i.basename,
          dirName: i.dirname,
          nextViewMode: "view",
          // TODO:
          downloadUrl: i.source,
          publicUser: !0,
          permissions: i.permissions
        }));
      },
      enabled: ({ nodes: r }) => r.every((i) => i.permissions >= mt.READ && sa.includes(i.mime)),
      default: Rl.DEFAULT
    });
    const e = ({ id: r, displayName: i, templateName: o }) => {
      hh({
        id: r,
        displayName: i,
        enabled: (a) => a.permissions >= mt.CREATE,
        iconSvgInline: qi(),
        category: Cl.CreateNew,
        handler: (a, l) => {
          const f = a.path;
          Ke.update(() => "filename"), xt.update(
            () => $t.getFileConfig({
              name: o,
              templateName: o,
              dir: f,
              isNew: !0,
              existingContents: l,
              onCreate: async (u) => {
                Ke.update(() => "edit"), xt.update(
                  () => $t.getFileConfig({
                    name: u.name,
                    dir: u.dir,
                    isNew: !0,
                    onCreate: async (h) => {
                      await Un.saveAndChangeViewMode(h);
                    }
                  })
                );
              }
            })
          );
        }
      });
    };
    e({
      id: "application-internet-shortcut",
      displayName: `${window.t("files_linkeditor", "New link")} (.URL)`,
      // TRANSLATORS default filename when creating a new link file from the files list, keep .URL at the end
      templateName: window.t("files_linkeditor", "Link.URL")
    }), e({
      id: "application-internet-shortcut-webloc",
      displayName: `${window.t("files_linkeditor", "New link")} (.webloc)`,
      // TRANSLATORS default filename when creating a new link file from the files list, keep .webloc at the end
      templateName: window.t("files_linkeditor", "Link.webloc")
    });
  }
  static async loadAndChangeViewMode({ fileName: e, dirName: r, nextViewMode: i, publicUser: o, downloadUrl: a, permissions: l }) {
    Ke.update(() => i), xt.update(
      () => $t.getFileConfig({
        name: e,
        dir: r || "",
        permissions: l,
        isPublicLink: o
      })
    );
    let f = {};
    if (o ? f = await $t.loadPublic({ downloadUrl: a }) : f = await $t.load({ fileName: e, dir: r }), f) {
      const u = zt.getExtension(e);
      let h = {};
      u === "webloc" ? h = zt.parseWeblocFile(f.filecontents) : h = zt.parseURLFile(f.filecontents), xt.update(
        (s) => $t.getFileConfig({
          ...s,
          ...h,
          fileModifiedTime: f.mtime,
          isLoaded: !0
        })
      );
    } else
      window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async saveAndChangeViewMode({ name: e, dir: r, url: i, sameWindow: o, skipConfirmation: a }) {
    const l = zt.getExtension(e);
    let f = "";
    l === "webloc" ? f = zt.generateWeblocFileContent("", i, o, a) : f = zt.generateURLFileContent("", i, o, a), await $t.save({ fileContent: f, name: e, dir: r }), Ke.update(() => "none");
  }
}
function aa(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Link target URL") + ""
  ), i, o, a, l, f, u, h, s, d, m, y, b, E, T, S, C;
  return {
    c() {
      e = Y("label"), i = Re(r), o = fe(), a = Y("br"), l = fe(), f = Y("input"), u = fe(), h = Y("input"), s = fe(), d = Y("label"), d.textContent = `${/*t*/
      n[2]("files_linkeditor", "Open in same window")}`, m = fe(), y = Y("input"), E = fe(), T = Y("label"), T.textContent = `${/*t*/
      n[2]("files_linkeditor", "Skip confirmation dialog before open (has to open in same window)")}`, j(f, "type", "text"), Dr(f, "width", "100%"), j(f, "class", "input-wide"), f.autofocus = !0, j(f, "data-cy", "url-input"), j(
        f,
        "placeholder",
        /*t*/
        n[2]("files_linkeditor", "e.g. https://example.org")
      ), j(h, "type", "checkbox"), j(h, "id", "linkeditor_sameWindow"), j(h, "class", "checkbox"), j(d, "for", "linkeditor_sameWindow"), j(d, "class", "space-top"), j(y, "type", "checkbox"), y.disabled = b = !/*file*/
      n[0].sameWindow, j(y, "id", "linkeditor_skipConfirmation"), j(y, "class", "checkbox"), j(T, "for", "linkeditor_skipConfirmation");
    },
    m(x, R) {
      se(x, e, R), V(e, i), V(e, o), V(e, a), V(e, l), V(e, f), In(
        f,
        /*file*/
        n[0].url
      ), se(x, u, R), se(x, h, R), h.checked = /*file*/
      n[0].sameWindow, se(x, s, R), se(x, d, R), se(x, m, R), se(x, y, R), y.checked = /*file*/
      n[0].skipConfirmation, se(x, E, R), se(x, T, R), f.focus(), S || (C = [
        xe(
          f,
          "input",
          /*input0_input_handler*/
          n[5]
        ),
        xe(
          h,
          "change",
          /*input1_change_handler*/
          n[6]
        ),
        xe(
          y,
          "change",
          /*input2_change_handler*/
          n[7]
        )
      ], S = !0);
    },
    p(x, R) {
      R & /*file*/
      1 && f.value !== /*file*/
      x[0].url && In(
        f,
        /*file*/
        x[0].url
      ), R & /*file*/
      1 && (h.checked = /*file*/
      x[0].sameWindow), R & /*file*/
      1 && b !== (b = !/*file*/
      x[0].sameWindow) && (y.disabled = b), R & /*file*/
      1 && (y.checked = /*file*/
      x[0].skipConfirmation);
    },
    d(x) {
      x && (oe(e), oe(u), oe(h), oe(s), oe(d), oe(m), oe(y), oe(E), oe(T)), S = !1, kt(C);
    }
  };
}
function la(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Visit link") + ""
  ), i, o;
  return {
    c() {
      e = Y("a"), i = Re(r), j(e, "href", o = qe(
        /*file*/
        n[0].url
      )), j(e, "target", "_blank"), j(e, "class", "button");
    },
    m(a, l) {
      se(a, e, l), V(e, i);
    },
    p(a, l) {
      l & /*file*/
      1 && o !== (o = qe(
        /*file*/
        a[0].url
      )) && j(e, "href", o);
    },
    d(a) {
      a && oe(e);
    }
  };
}
function ua(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Save") + ""
  ), i, o, a;
  return {
    c() {
      e = Y("a"), i = Re(r), j(e, "href", window.location.href), j(e, "class", "primary button");
    },
    m(l, f) {
      se(l, e, f), V(e, i), o || (a = xe(e, "click", wt(
        /*save*/
        n[4]
      )), o = !0);
    },
    p: sn,
    d(l) {
      l && oe(e), o = !1, a();
    }
  };
}
function Pd(n) {
  let e, r, i, o = (
    /*file*/
    n[0].name + ""
  ), a, l, f, u, h, s, d, m = (
    /*t*/
    n[2]("files_linkeditor", "Cancel") + ""
  ), y, b, E, T, S = !/*loading*/
  n[1] && aa(n), C = !/*loading*/
  n[1] && la(n), x = !/*loading*/
  n[1] && ua(n);
  return {
    c() {
      e = Y("form"), r = Y("div"), i = Y("h3"), a = Re(o), l = fe(), S && S.c(), f = fe(), u = Y("div"), C && C.c(), h = fe(), s = Y("div"), d = Y("a"), y = Re(m), b = fe(), x && x.c(), j(r, "class", "edit"), j(u, "class", "linkeditor-oc-dialog-buttonrow onebutton urlvisit"), j(d, "href", window.location.href), j(d, "class", "cancel button"), j(s, "class", "linkeditor-oc-dialog-buttonrow twobuttons"), j(
        e,
        "action",
        /*OC*/
        n[3].generateUrl("/")
      ), j(e, "method", "post");
    },
    m(R, U) {
      se(R, e, U), V(e, r), V(r, i), V(i, a), V(r, l), S && S.m(r, null), V(e, f), V(e, u), C && C.m(u, null), V(e, h), V(e, s), V(s, d), V(d, y), V(s, b), x && x.m(s, null), E || (T = [
        xe(d, "click", wt(
          /*click_handler*/
          n[8]
        )),
        xe(e, "submit", wt(
          /*save*/
          n[4]
        ))
      ], E = !0);
    },
    p(R, U) {
      U & /*file*/
      1 && o !== (o = /*file*/
      R[0].name + "") && cr(a, o), /*loading*/
      R[1] ? S && (S.d(1), S = null) : S ? S.p(R, U) : (S = aa(R), S.c(), S.m(r, null)), /*loading*/
      R[1] ? C && (C.d(1), C = null) : C ? C.p(R, U) : (C = la(R), C.c(), C.m(u, null)), /*loading*/
      R[1] ? x && (x.d(1), x = null) : x ? x.p(R, U) : (x = ua(R), x.c(), x.m(s, null));
    },
    d(R) {
      R && oe(e), S && S.d(), C && C.d(), x && x.d(), E = !1, kt(T);
    }
  };
}
function Dd(n) {
  let e, r;
  return e = new fr({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [Pd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      qt(e.$$.fragment);
    },
    m(i, o) {
      Ft(e, i, o), r = !0;
    },
    p(i, [o]) {
      const a = {};
      o & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), o & /*$$scope, loading, file*/
      1027 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (Ne(e.$$.fragment, i), r = !0);
    },
    o(i) {
      De(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Mt(e, i);
    }
  };
}
function $d(n, e, r) {
  let i, o;
  const a = window.t, l = window.OC;
  let f;
  On(() => {
    f = xt.subscribe((y) => {
      r(0, i = y), i && (i.isLoaded || i.isNew) && r(1, o = !1);
    });
  }), Sn(() => {
    f();
  });
  const u = () => {
    r(1, o = !0), i.isNew && i.onCreate ? i.onCreate({ ...i }) : Un.saveAndChangeViewMode({ ...i });
  };
  function h() {
    i.url = this.value, r(0, i);
  }
  function s() {
    i.sameWindow = this.checked, r(0, i);
  }
  function d() {
    i.skipConfirmation = this.checked, r(0, i);
  }
  const m = () => {
    Ke.update(() => "none");
  };
  return r(0, i = $t.getFileConfig()), r(1, o = !0), [
    i,
    o,
    a,
    l,
    u,
    h,
    s,
    d,
    m
  ];
}
class kd extends hn {
  constructor(e) {
    super(), fn(this, e, $d, Dd, an, {});
  }
}
const ci = (n) => {
  if (!(n != null && n.name) || !(n != null && n.templateName))
    return n;
  const [, e] = n.templateName.split(".") ?? [], r = n.name.toLocaleLowerCase();
  return e && !r.endsWith(e.toLocaleLowerCase()) && (n.name += `.${e}`), n;
};
function ca(n) {
  let e, r = (
    /*t*/
    n[3]("files_linkeditor", "File name") + ""
  ), i, o, a, l, f, u, h;
  return {
    c() {
      e = Y("label"), i = Re(r), o = fe(), a = Y("br"), l = fe(), f = Y("input"), j(f, "type", "text"), Dr(f, "width", "100%"), j(f, "class", "input-wide"), f.autofocus = !0, j(f, "data-cy", "name-input");
    },
    m(s, d) {
      se(s, e, d), V(e, i), V(e, o), V(e, a), V(e, l), V(e, f), In(
        f,
        /*file*/
        n[0].name
      ), f.focus(), u || (h = [
        xe(
          f,
          "input",
          /*input_input_handler*/
          n[7]
        ),
        xe(
          f,
          "keyup",
          /*checkConflicts*/
          n[5]
        )
      ], u = !0);
    },
    p(s, d) {
      d & /*file*/
      1 && f.value !== /*file*/
      s[0].name && In(
        f,
        /*file*/
        s[0].name
      );
    },
    d(s) {
      s && oe(e), u = !1, kt(h);
    }
  };
}
function fa(n) {
  let e, r = (
    /*t*/
    n[3]("files_linkeditor", "Create") + ""
  ), i, o, a;
  return {
    c() {
      e = Y("button"), i = Re(r), j(e, "type", "submit"), e.disabled = /*isConflicting*/
      n[2], j(e, "class", "primary button");
    },
    m(l, f) {
      se(l, e, f), V(e, i), o || (a = xe(e, "click", wt(
        /*save*/
        n[6]
      )), o = !0);
    },
    p(l, f) {
      f & /*isConflicting*/
      4 && (e.disabled = /*isConflicting*/
      l[2]);
    },
    d(l) {
      l && oe(e), o = !1, a();
    }
  };
}
function Fd(n) {
  let e, r, i, o, a, l, f, u = (
    /*t*/
    n[3]("files_linkeditor", "Cancel") + ""
  ), h, s, d, m, y = !/*loading*/
  n[1] && ca(n), b = !/*loading*/
  n[1] && fa(n);
  return {
    c() {
      e = Y("form"), r = Y("div"), i = Y("h3"), i.textContent = `${window.t("files_linkeditor", "New link")}`, o = fe(), y && y.c(), a = fe(), l = Y("div"), f = Y("a"), h = Re(u), s = fe(), b && b.c(), j(r, "class", "edit"), j(f, "href", window.location.href), j(f, "class", "cancel button"), j(l, "class", "linkeditor-oc-dialog-buttonrow twobuttons"), j(
        e,
        "action",
        /*OC*/
        n[4].generateUrl("/")
      ), j(e, "method", "post");
    },
    m(E, T) {
      se(E, e, T), V(e, r), V(r, i), V(r, o), y && y.m(r, null), V(e, a), V(e, l), V(l, f), V(f, h), V(l, s), b && b.m(l, null), d || (m = [
        xe(f, "click", wt(
          /*click_handler*/
          n[8]
        )),
        xe(e, "submit", wt(
          /*save*/
          n[6]
        ))
      ], d = !0);
    },
    p(E, T) {
      /*loading*/
      E[1] ? y && (y.d(1), y = null) : y ? y.p(E, T) : (y = ca(E), y.c(), y.m(r, null)), /*loading*/
      E[1] ? b && (b.d(1), b = null) : b ? b.p(E, T) : (b = fa(E), b.c(), b.m(l, null));
    },
    d(E) {
      E && oe(e), y && y.d(), b && b.d(), d = !1, kt(m);
    }
  };
}
function Md(n) {
  let e, r;
  return e = new fr({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [Fd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      qt(e.$$.fragment);
    },
    m(i, o) {
      Ft(e, i, o), r = !0;
    },
    p(i, [o]) {
      const a = {};
      o & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), o & /*$$scope, isConflicting, loading, file*/
      2055 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (Ne(e.$$.fragment, i), r = !0);
    },
    o(i) {
      De(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Mt(e, i);
    }
  };
}
function Ud(n, e, r) {
  let i, o, a;
  const l = window.t, f = window.OC, u = (b, E) => {
    const T = {
      name: b,
      templateName: i.templateName
    }, S = ci(T);
    return ((E == null ? void 0 : E.map((x) => x.basename)) ?? []).includes(S.name);
  };
  let h;
  On(() => {
    h = xt.subscribe((b) => {
      r(0, i = b), i && (i.isLoaded || i.isNew) && (r(1, o = !1), s());
    });
  }), Sn(() => {
    h();
  });
  const s = () => {
    u(i.name, i.existingContents) ? r(2, a = !0) : r(2, a = !1);
  }, d = () => {
    u(i.name, i.existingContents) || (r(1, o = !0), i.onCreate(ci({ ...i })));
  };
  function m() {
    i.name = this.value, r(0, i);
  }
  const y = () => {
    Ke.update(() => "none");
  };
  return r(0, i = $t.getFileConfig()), r(1, o = !0), r(2, a = !0), [
    i,
    o,
    a,
    l,
    f,
    s,
    d,
    m,
    y
  ];
}
class Bd extends hn {
  constructor(e) {
    super(), fn(this, e, Ud, Md, an, {});
  }
}
function ha(n) {
  let e, r;
  return e = new Bd({}), {
    c() {
      qt(e.$$.fragment);
    },
    m(i, o) {
      Ft(e, i, o), r = !0;
    },
    i(i) {
      r || (Ne(e.$$.fragment, i), r = !0);
    },
    o(i) {
      De(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Mt(e, i);
    }
  };
}
function pa(n) {
  let e, r;
  return e = new Td({}), {
    c() {
      qt(e.$$.fragment);
    },
    m(i, o) {
      Ft(e, i, o), r = !0;
    },
    i(i) {
      r || (Ne(e.$$.fragment, i), r = !0);
    },
    o(i) {
      De(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Mt(e, i);
    }
  };
}
function da(n) {
  let e, r;
  return e = new kd({}), {
    c() {
      qt(e.$$.fragment);
    },
    m(i, o) {
      Ft(e, i, o), r = !0;
    },
    i(i) {
      r || (Ne(e.$$.fragment, i), r = !0);
    },
    o(i) {
      De(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Mt(e, i);
    }
  };
}
function jd(n) {
  let e, r, i, o, a = (
    /*viewMode*/
    n[0] === "filename" && ha()
  ), l = (
    /*viewMode*/
    n[0] === "view" && pa()
  ), f = (
    /*viewMode*/
    n[0] === "edit" && da()
  );
  return {
    c() {
      a && a.c(), e = fe(), l && l.c(), r = fe(), f && f.c(), i = Ya();
    },
    m(u, h) {
      a && a.m(u, h), se(u, e, h), l && l.m(u, h), se(u, r, h), f && f.m(u, h), se(u, i, h), o = !0;
    },
    p(u, [h]) {
      /*viewMode*/
      u[0] === "filename" ? a ? h & /*viewMode*/
      1 && Ne(a, 1) : (a = ha(), a.c(), Ne(a, 1), a.m(e.parentNode, e)) : a && (ar(), De(a, 1, 1, () => {
        a = null;
      }), lr()), /*viewMode*/
      u[0] === "view" ? l ? h & /*viewMode*/
      1 && Ne(l, 1) : (l = pa(), l.c(), Ne(l, 1), l.m(r.parentNode, r)) : l && (ar(), De(l, 1, 1, () => {
        l = null;
      }), lr()), /*viewMode*/
      u[0] === "edit" ? f ? h & /*viewMode*/
      1 && Ne(f, 1) : (f = da(), f.c(), Ne(f, 1), f.m(i.parentNode, i)) : f && (ar(), De(f, 1, 1, () => {
        f = null;
      }), lr());
    },
    i(u) {
      o || (Ne(a), Ne(l), Ne(f), o = !0);
    },
    o(u) {
      De(a), De(l), De(f), o = !1;
    },
    d(u) {
      u && (oe(e), oe(r), oe(i)), a && a.d(u), l && l.d(u), f && f.d(u);
    }
  };
}
function Gd(n, e, r) {
  let i, o;
  return On(() => {
    o = Ke.subscribe((a) => {
      r(0, i = a);
    });
  }), Sn(() => {
    o();
  }), r(0, i = ""), [i];
}
class Wd extends hn {
  constructor(e) {
    super(), fn(this, e, Gd, jd, an, {});
  }
}
function Rn(n, e, r) {
  return e in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = r, n;
}
function ma(n, e, r) {
  Vd(n, e), e.set(n, r);
}
function Vd(n, e) {
  if (e.has(n))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function ut(n, e) {
  var r = lu(n, e, "get");
  return zd(n, r);
}
function zd(n, e) {
  return e.get ? e.get.call(n) : e.value;
}
function ga(n, e, r) {
  var i = lu(n, e, "set");
  return qd(n, i, r), r;
}
function lu(n, e, r) {
  if (!e.has(n))
    throw new TypeError("attempted to " + r + " private field on non-instance");
  return e.get(n);
}
function qd(n, e, r) {
  if (e.set)
    e.set.call(n, r);
  else {
    if (!e.writable)
      throw new TypeError("attempted to set read only private field");
    e.value = r;
  }
}
var Xd = typeof Symbol < "u" ? Symbol.toStringTag : "@@toStringTag", ht = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap();
class di {
  constructor(e) {
    var {
      executor: r = () => {
      },
      internals: i = $o(),
      promise: o = new Promise((a, l) => r(a, l, (f) => {
        i.onCancelList.push(f);
      }))
    } = e;
    ma(this, ht, {
      writable: !0,
      value: void 0
    }), ma(this, Nr, {
      writable: !0,
      value: void 0
    }), Rn(this, Xd, "CancelablePromise"), this.cancel = this.cancel.bind(this), ga(this, ht, i), ga(this, Nr, o || new Promise((a, l) => r(a, l, (f) => {
      i.onCancelList.push(f);
    })));
  }
  then(e, r) {
    return ni(ut(this, Nr).then(Zr(e, ut(this, ht)), Zr(r, ut(this, ht))), ut(this, ht));
  }
  catch(e) {
    return ni(ut(this, Nr).catch(Zr(e, ut(this, ht))), ut(this, ht));
  }
  finally(e, r) {
    return r && ut(this, ht).onCancelList.push(e), ni(ut(this, Nr).finally(Zr(() => {
      if (e)
        return r && (ut(this, ht).onCancelList = ut(this, ht).onCancelList.filter((i) => i !== e)), e();
    }, ut(this, ht))), ut(this, ht));
  }
  cancel() {
    ut(this, ht).isCanceled = !0;
    var e = ut(this, ht).onCancelList;
    ut(this, ht).onCancelList = [];
    for (var r of e)
      if (typeof r == "function")
        try {
          r();
        } catch (i) {
          console.error(i);
        }
  }
  isCanceled() {
    return ut(this, ht).isCanceled === !0;
  }
}
class Cn extends di {
  constructor(e) {
    super({
      executor: e
    });
  }
}
Rn(Cn, "all", function(e) {
  return mi(e, Promise.all(e));
});
Rn(Cn, "allSettled", function(e) {
  return mi(e, Promise.allSettled(e));
});
Rn(Cn, "any", function(e) {
  return mi(e, Promise.any(e));
});
Rn(Cn, "race", function(e) {
  return mi(e, Promise.race(e));
});
Rn(Cn, "resolve", function(e) {
  return uu(Promise.resolve(e));
});
Rn(Cn, "reject", function(e) {
  return uu(Promise.reject(e));
});
Rn(Cn, "isCancelable", Do);
function uu(n) {
  return ni(n, $o());
}
function Do(n) {
  return n instanceof Cn || n instanceof di;
}
function Zr(n, e) {
  if (n)
    return (r) => {
      if (!e.isCanceled) {
        var i = n(r);
        return Do(i) && e.onCancelList.push(i.cancel), i;
      }
      return r;
    };
}
function ni(n, e) {
  return new di({
    internals: e,
    promise: n
  });
}
function mi(n, e) {
  var r = $o();
  return r.onCancelList.push(() => {
    for (var i of n)
      Do(i) && i.cancel();
  }), new di({
    internals: r,
    promise: e
  });
}
function $o() {
  return {
    isCanceled: !1,
    onCancelList: []
  };
}
const xr = hl().setApp("@nextcloud/files").detectUser().build();
var ko = /* @__PURE__ */ ((n) => (n.Folder = "folder", n.File = "file", n))(ko || {}), gt = /* @__PURE__ */ ((n) => (n[n.NONE = 0] = "NONE", n[n.CREATE = 4] = "CREATE", n[n.READ = 1] = "READ", n[n.UPDATE = 2] = "UPDATE", n[n.DELETE = 8] = "DELETE", n[n.SHARE = 16] = "SHARE", n[n.ALL = 31] = "ALL", n))(gt || {});
const cu = function(n, e) {
  return n.match(e) !== null;
}, yn = (n, e) => {
  if (n.id && typeof n.id != "number")
    throw new Error("Invalid id type of value");
  if (!n.source)
    throw new Error("Missing mandatory source");
  try {
    new URL(n.source);
  } catch {
    throw new Error("Invalid source format, source must be a valid URL");
  }
  if (!n.source.startsWith("http"))
    throw new Error("Invalid source format, only http(s) is supported");
  if (n.displayname && typeof n.displayname != "string")
    throw new Error("Invalid displayname type");
  if (n.mtime && !(n.mtime instanceof Date))
    throw new Error("Invalid mtime type");
  if (n.crtime && !(n.crtime instanceof Date))
    throw new Error("Invalid crtime type");
  if (!n.mime || typeof n.mime != "string" || !n.mime.match(/^[-\w.]+\/[-+\w.]+$/gi))
    throw new Error("Missing or invalid mandatory mime");
  if ("size" in n && typeof n.size != "number" && n.size !== void 0)
    throw new Error("Invalid size type");
  if ("permissions" in n && n.permissions !== void 0 && !(typeof n.permissions == "number" && n.permissions >= gt.NONE && n.permissions <= gt.ALL))
    throw new Error("Invalid permissions");
  if (n.owner && n.owner !== null && typeof n.owner != "string")
    throw new Error("Invalid owner type");
  if (n.attributes && typeof n.attributes != "object")
    throw new Error("Invalid attributes type");
  if (n.root && typeof n.root != "string")
    throw new Error("Invalid root type");
  if (n.root && !n.root.startsWith("/"))
    throw new Error("Root must start with a leading slash");
  if (n.root && !n.source.includes(n.root))
    throw new Error("Root must be part of the source");
  if (n.root && cu(n.source, e)) {
    const r = n.source.match(e)[0];
    if (!n.source.includes(dl(r, n.root)))
      throw new Error("The root must be relative to the service. e.g /files/emma");
  }
  if (n.status && !Object.values(Fo).includes(n.status))
    throw new Error("Status must be a valid NodeStatus");
};
var Fo = /* @__PURE__ */ ((n) => (n.NEW = "new", n.FAILED = "failed", n.LOADING = "loading", n.LOCKED = "locked", n))(Fo || {});
class gi {
  constructor(e, r) {
    ce(this, "_data");
    ce(this, "_attributes");
    ce(this, "_knownDavService", /(remote|public)\.php\/(web)?dav/i);
    ce(this, "readonlyAttributes", Object.entries(Object.getOwnPropertyDescriptors(gi.prototype)).filter((e) => typeof e[1].get == "function" && e[0] !== "__proto__").map((e) => e[0]));
    ce(this, "handler", {
      set: (e, r, i) => this.readonlyAttributes.includes(r) ? !1 : Reflect.set(e, r, i),
      deleteProperty: (e, r) => this.readonlyAttributes.includes(r) ? !1 : Reflect.deleteProperty(e, r),
      // TODO: This is deprecated and only needed for files v3
      get: (e, r, i) => this.readonlyAttributes.includes(r) ? (xr.warn(`Accessing "Node.attributes.${r}" is deprecated, access it directly on the Node instance.`), Reflect.get(this, r)) : Reflect.get(e, r, i)
    });
    var i;
    e.mime || (e.mime = "application/octet-stream"), yn(e, r || this._knownDavService), this._data = {
      // TODO: Remove with next major release, this is just for compatibility
      displayname: (i = e.attributes) == null ? void 0 : i.displayname,
      ...e,
      attributes: {}
    }, this._attributes = new Proxy(this._data.attributes, this.handler), this.update(e.attributes ?? {}), r && (this._knownDavService = r);
  }
  /**
   * Get the source url to this object
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get source() {
    return this._data.source.replace(/\/$/i, "");
  }
  /**
   * Get the encoded source url to this object for requests purposes
   */
  get encodedSource() {
    const { origin: e } = new URL(this.source);
    return e + lo(this.source.slice(e.length));
  }
  /**
   * Get this object name
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get basename() {
    return To(this.source);
  }
  /**
   * The nodes displayname
   * By default the display name and the `basename` are identical,
   * but it is possible to have a different name. This happens
   * on the files app for example for shared folders.
   */
  get displayname() {
    return this._data.displayname || this.basename;
  }
  /**
   * Set the displayname
   */
  set displayname(e) {
    yn({ ...this._data, displayname: e }, this._knownDavService), this._data.displayname = e;
  }
  /**
   * Get this object's extension
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get extension() {
    return pl(this.source);
  }
  /**
   * Get the directory path leading to this object
   * Will use the relative path to root if available
   *
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get dirname() {
    if (this.root) {
      let r = this.source;
      this.isDavResource && (r = r.split(this._knownDavService).pop());
      const i = r.indexOf(this.root), o = this.root.replace(/\/$/, "");
      return nr(r.slice(i + o.length) || "/");
    }
    const e = new URL(this.source);
    return nr(e.pathname);
  }
  /**
   * Get the file mime
   */
  get mime() {
    return this._data.mime || "application/octet-stream";
  }
  /**
   * Set the file mime
   * Removing the mime type will set it to `application/octet-stream`
   */
  set mime(e) {
    e ?? (e = "application/octet-stream"), yn({ ...this._data, mime: e }, this._knownDavService), this._data.mime = e;
  }
  /**
   * Get the file modification time
   */
  get mtime() {
    return this._data.mtime;
  }
  /**
   * Set the file modification time
   */
  set mtime(e) {
    yn({ ...this._data, mtime: e }, this._knownDavService), this._data.mtime = e;
  }
  /**
   * Get the file creation time
   * There is no setter as the creation time is not meant to be changed
   */
  get crtime() {
    return this._data.crtime;
  }
  /**
   * Get the file size
   */
  get size() {
    return this._data.size;
  }
  /**
   * Set the file size
   */
  set size(e) {
    yn({ ...this._data, size: e }, this._knownDavService), this.updateMtime(), this._data.size = e;
  }
  /**
   * Get the file attribute
   * This contains all additional attributes not provided by the Node class
   */
  get attributes() {
    return this._attributes;
  }
  /**
   * Get the file permissions
   */
  get permissions() {
    return this.owner === null && !this.isDavResource ? gt.READ : this._data.permissions !== void 0 ? this._data.permissions : gt.NONE;
  }
  /**
   * Set the file permissions
   */
  set permissions(e) {
    yn({ ...this._data, permissions: e }, this._knownDavService), this.updateMtime(), this._data.permissions = e;
  }
  /**
   * Get the file owner
   * There is no setter as the owner is not meant to be changed
   */
  get owner() {
    return this.isDavResource ? this._data.owner : null;
  }
  /**
   * Is this a dav-related resource ?
   */
  get isDavResource() {
    return cu(this.source, this._knownDavService);
  }
  /**
   * @deprecated use `isDavResource` instead - will be removed in next major version.
   */
  get isDavRessource() {
    return this.isDavResource;
  }
  /**
   * Get the dav root of this object
   * There is no setter as the root is not meant to be changed
   */
  get root() {
    return this._data.root ? this._data.root.replace(/^(.+)\/$/, "$1") : this.isDavResource && nr(this.source).split(this._knownDavService).pop() || null;
  }
  /**
   * Get the absolute path of this object relative to the root
   */
  get path() {
    if (this.root) {
      let e = this.source;
      this.isDavResource && (e = e.split(this._knownDavService).pop());
      const r = e.indexOf(this.root), i = this.root.replace(/\/$/, "");
      return e.slice(r + i.length) || "/";
    }
    return (this.dirname + "/" + this.basename).replace(/\/\//g, "/");
  }
  /**
   * Get the node id if defined.
   * There is no setter as the fileid is not meant to be changed
   */
  get fileid() {
    var e;
    return (e = this._data) == null ? void 0 : e.id;
  }
  /**
   * Get the node status.
   */
  get status() {
    var e;
    return (e = this._data) == null ? void 0 : e.status;
  }
  /**
   * Set the node status.
   */
  set status(e) {
    yn({ ...this._data, status: e }, this._knownDavService), this._data.status = e;
  }
  /**
   * Get the node data
   */
  get data() {
    return structuredClone(this._data);
  }
  /**
   * Move the node to a new destination
   *
   * @param {string} destination the new source.
   * e.g. https://cloud.domain.com/remote.php/dav/files/emma/Photos/picture.jpg
   */
  move(e) {
    yn({ ...this._data, source: e }, this._knownDavService);
    const r = this.basename;
    this._data.source = e, this.displayname === r && this.basename !== r && (this.displayname = this.basename);
  }
  /**
   * Rename the node
   * This aliases the move method for easier usage
   *
   * @param basename The new name of the node
   */
  rename(e) {
    if (e.includes("/"))
      throw new Error("Invalid basename");
    this.move(nr(this.source) + "/" + e);
  }
  /**
   * Update the mtime if exists
   */
  updateMtime() {
    this._data.mtime && (this._data.mtime = /* @__PURE__ */ new Date());
  }
  /**
   * Update the attributes of the node
   * Warning, updating attributes will NOT automatically update the mtime.
   *
   * @param attributes The new attributes to update on the Node attributes
   */
  update(e) {
    for (const [r, i] of Object.entries(e))
      try {
        i === void 0 ? delete this.attributes[r] : this.attributes[r] = i;
      } catch (o) {
        if (o instanceof TypeError)
          continue;
        throw o;
      }
  }
}
class Mo extends gi {
  get type() {
    return ko.File;
  }
  /**
   * Returns a clone of the file
   */
  clone() {
    return new Mo(this.data);
  }
}
class Uo extends gi {
  constructor(e) {
    super({
      ...e,
      mime: "httpd/unix-directory"
    });
  }
  get type() {
    return ko.Folder;
  }
  get extension() {
    return null;
  }
  get mime() {
    return "httpd/unix-directory";
  }
  /**
   * Returns a clone of the folder
   */
  clone() {
    return new Uo(this.data);
  }
}
const Hd = function(n = "") {
  let e = gt.NONE;
  return n && ((n.includes("C") || n.includes("K")) && (e |= gt.CREATE), n.includes("G") && (e |= gt.READ), (n.includes("W") || n.includes("N") || n.includes("V")) && (e |= gt.UPDATE), n.includes("D") && (e |= gt.DELETE), n.includes("R") && (e |= gt.SHARE)), e;
}, Yd = [
  "d:getcontentlength",
  "d:getcontenttype",
  "d:getetag",
  "d:getlastmodified",
  "d:creationdate",
  "d:displayname",
  "d:quota-available-bytes",
  "d:resourcetype",
  "nc:has-preview",
  "nc:is-encrypted",
  "nc:mount-type",
  "oc:comments-unread",
  "oc:favorite",
  "oc:fileid",
  "oc:owner-display-name",
  "oc:owner-id",
  "oc:permissions",
  "oc:size"
], Zd = {
  d: "DAV:",
  nc: "http://nextcloud.org/ns",
  oc: "http://owncloud.org/ns",
  ocs: "http://open-collaboration-services.org/ns"
}, Kd = function() {
  return typeof window._nc_dav_properties > "u" && (window._nc_dav_properties = [...Yd]), window._nc_dav_properties.map((n) => `<${n} />`).join(" ");
}, Jd = function() {
  return typeof window._nc_dav_namespaces > "u" && (window._nc_dav_namespaces = { ...Zd }), Object.keys(window._nc_dav_namespaces).map((n) => {
    var e;
    return `xmlns:${n}="${(e = window._nc_dav_namespaces) == null ? void 0 : e[n]}"`;
  }).join(" ");
}, Qd = function() {
  return `<?xml version="1.0"?>
		<d:propfind ${Jd()}>
			<d:prop>
				${Kd()}
			</d:prop>
		</d:propfind>`;
};
function em() {
  var n;
  return hr() ? `/files/${Ll()}` : `/files/${(n = $r()) == null ? void 0 : n.uid}`;
}
const fu = em();
function tm() {
  const n = Il("dav");
  return hr() ? n.replace("remote.php", "public.php") : n;
}
const hu = tm(), nm = function(n = hu, e = {}) {
  const r = iu(n, { headers: e });
  function i(a) {
    r.setHeaders({
      ...e,
      // Add this so the server knows it is an request from the browser
      "X-Requested-With": "XMLHttpRequest",
      // Inject user auth
      requesttoken: a ?? ""
    });
  }
  return fl(i), i(cl()), Ao().patch("fetch", (a, l) => {
    const f = l.headers;
    return f != null && f.method && (l.method = f.method, delete f.method), fetch(a, l);
  }), r;
}, rm = function(n, e = fu, r = hu) {
  var d, m;
  let i = (d = $r()) == null ? void 0 : d.uid;
  if (hr())
    i = i ?? "anonymous";
  else if (!i)
    throw new Error("No user id found");
  const o = n.props, a = Hd(o == null ? void 0 : o.permissions), l = String((o == null ? void 0 : o["owner-id"]) || i), f = o.fileid || 0, u = new Date(Date.parse(n.lastmod)), h = new Date(Date.parse(o.creationdate)), s = {
    id: f,
    source: `${r}${n.filename}`,
    mtime: !isNaN(u.getTime()) && u.getTime() !== 0 ? u : void 0,
    crtime: !isNaN(h.getTime()) && h.getTime() !== 0 ? h : void 0,
    mime: n.mime || "application/octet-stream",
    // Manually cast to work around for https://github.com/perry-mitchell/webdav-client/pull/380
    displayname: o.displayname !== void 0 ? String(o.displayname) : void 0,
    size: (o == null ? void 0 : o.size) || Number.parseInt(o.getcontentlength || "0"),
    // The fileid is set to -1 for failed requests
    status: f < 0 ? Fo.FAILED : void 0,
    permissions: a,
    owner: l,
    root: e,
    attributes: {
      ...n,
      ...o,
      hasPreview: o == null ? void 0 : o["has-preview"]
    }
  };
  return (m = s.attributes) == null || delete m.props, n.type === "file" ? new Mo(s) : new Uo(s);
};
var pu = /* @__PURE__ */ ((n) => (n.DEFAULT = "default", n.HIDDEN = "hidden", n))(pu || {});
const Ea = function(n) {
  if (typeof window._nc_fileactions > "u" && (window._nc_fileactions = [], xr.debug("FileActions initialized")), window._nc_fileactions.find((e) => e.id === n.id)) {
    xr.error(`FileAction ${n.id} already registered`, { action: n });
    return;
  }
  window._nc_fileactions.push(n);
};
var Xi, wa;
function du() {
  return wa || (wa = 1, Xi = typeof Tt == "object" && Tt.env && Tt.env.NODE_DEBUG && /\bsemver\b/i.test(Tt.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
  }), Xi;
}
var Hi, ya;
function mu() {
  if (ya) return Hi;
  ya = 1;
  const n = "2.0.0", e = 256, r = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, o = e - 6;
  return Hi = {
    MAX_LENGTH: e,
    MAX_SAFE_COMPONENT_LENGTH: i,
    MAX_SAFE_BUILD_LENGTH: o,
    MAX_SAFE_INTEGER: r,
    RELEASE_TYPES: [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ],
    SEMVER_SPEC_VERSION: n,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  }, Hi;
}
var Kr = { exports: {} }, va;
function im() {
  return va || (va = 1, function(n, e) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: r,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: o
    } = mu(), a = du();
    e = n.exports = {};
    const l = e.re = [], f = e.safeRe = [], u = e.src = [], h = e.safeSrc = [], s = e.t = {};
    let d = 0;
    const m = "[a-zA-Z0-9-]", y = [
      ["\\s", 1],
      ["\\d", o],
      [m, i]
    ], b = (T) => {
      for (const [S, C] of y)
        T = T.split(`${S}*`).join(`${S}{0,${C}}`).split(`${S}+`).join(`${S}{1,${C}}`);
      return T;
    }, E = (T, S, C) => {
      const x = b(S), R = d++;
      a(T, R, S), s[T] = R, u[R] = S, h[R] = x, l[R] = new RegExp(S, C ? "g" : void 0), f[R] = new RegExp(x, C ? "g" : void 0);
    };
    E("NUMERICIDENTIFIER", "0|[1-9]\\d*"), E("NUMERICIDENTIFIERLOOSE", "\\d+"), E("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${m}*`), E("MAINVERSION", `(${u[s.NUMERICIDENTIFIER]})\\.(${u[s.NUMERICIDENTIFIER]})\\.(${u[s.NUMERICIDENTIFIER]})`), E("MAINVERSIONLOOSE", `(${u[s.NUMERICIDENTIFIERLOOSE]})\\.(${u[s.NUMERICIDENTIFIERLOOSE]})\\.(${u[s.NUMERICIDENTIFIERLOOSE]})`), E("PRERELEASEIDENTIFIER", `(?:${u[s.NONNUMERICIDENTIFIER]}|${u[s.NUMERICIDENTIFIER]})`), E("PRERELEASEIDENTIFIERLOOSE", `(?:${u[s.NONNUMERICIDENTIFIER]}|${u[s.NUMERICIDENTIFIERLOOSE]})`), E("PRERELEASE", `(?:-(${u[s.PRERELEASEIDENTIFIER]}(?:\\.${u[s.PRERELEASEIDENTIFIER]})*))`), E("PRERELEASELOOSE", `(?:-?(${u[s.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[s.PRERELEASEIDENTIFIERLOOSE]})*))`), E("BUILDIDENTIFIER", `${m}+`), E("BUILD", `(?:\\+(${u[s.BUILDIDENTIFIER]}(?:\\.${u[s.BUILDIDENTIFIER]})*))`), E("FULLPLAIN", `v?${u[s.MAINVERSION]}${u[s.PRERELEASE]}?${u[s.BUILD]}?`), E("FULL", `^${u[s.FULLPLAIN]}$`), E("LOOSEPLAIN", `[v=\\s]*${u[s.MAINVERSIONLOOSE]}${u[s.PRERELEASELOOSE]}?${u[s.BUILD]}?`), E("LOOSE", `^${u[s.LOOSEPLAIN]}$`), E("GTLT", "((?:<|>)?=?)"), E("XRANGEIDENTIFIERLOOSE", `${u[s.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), E("XRANGEIDENTIFIER", `${u[s.NUMERICIDENTIFIER]}|x|X|\\*`), E("XRANGEPLAIN", `[v=\\s]*(${u[s.XRANGEIDENTIFIER]})(?:\\.(${u[s.XRANGEIDENTIFIER]})(?:\\.(${u[s.XRANGEIDENTIFIER]})(?:${u[s.PRERELEASE]})?${u[s.BUILD]}?)?)?`), E("XRANGEPLAINLOOSE", `[v=\\s]*(${u[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[s.XRANGEIDENTIFIERLOOSE]})(?:${u[s.PRERELEASELOOSE]})?${u[s.BUILD]}?)?)?`), E("XRANGE", `^${u[s.GTLT]}\\s*${u[s.XRANGEPLAIN]}$`), E("XRANGELOOSE", `^${u[s.GTLT]}\\s*${u[s.XRANGEPLAINLOOSE]}$`), E("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), E("COERCE", `${u[s.COERCEPLAIN]}(?:$|[^\\d])`), E("COERCEFULL", u[s.COERCEPLAIN] + `(?:${u[s.PRERELEASE]})?(?:${u[s.BUILD]})?(?:$|[^\\d])`), E("COERCERTL", u[s.COERCE], !0), E("COERCERTLFULL", u[s.COERCEFULL], !0), E("LONETILDE", "(?:~>?)"), E("TILDETRIM", `(\\s*)${u[s.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", E("TILDE", `^${u[s.LONETILDE]}${u[s.XRANGEPLAIN]}$`), E("TILDELOOSE", `^${u[s.LONETILDE]}${u[s.XRANGEPLAINLOOSE]}$`), E("LONECARET", "(?:\\^)"), E("CARETTRIM", `(\\s*)${u[s.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", E("CARET", `^${u[s.LONECARET]}${u[s.XRANGEPLAIN]}$`), E("CARETLOOSE", `^${u[s.LONECARET]}${u[s.XRANGEPLAINLOOSE]}$`), E("COMPARATORLOOSE", `^${u[s.GTLT]}\\s*(${u[s.LOOSEPLAIN]})$|^$`), E("COMPARATOR", `^${u[s.GTLT]}\\s*(${u[s.FULLPLAIN]})$|^$`), E("COMPARATORTRIM", `(\\s*)${u[s.GTLT]}\\s*(${u[s.LOOSEPLAIN]}|${u[s.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", E("HYPHENRANGE", `^\\s*(${u[s.XRANGEPLAIN]})\\s+-\\s+(${u[s.XRANGEPLAIN]})\\s*$`), E("HYPHENRANGELOOSE", `^\\s*(${u[s.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[s.XRANGEPLAINLOOSE]})\\s*$`), E("STAR", "(<|>)?=?\\s*\\*"), E("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), E("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }(Kr, Kr.exports)), Kr.exports;
}
var Yi, ba;
function om() {
  if (ba) return Yi;
  ba = 1;
  const n = Object.freeze({ loose: !0 }), e = Object.freeze({});
  return Yi = (i) => i ? typeof i != "object" ? n : i : e, Yi;
}
var Zi, _a;
function sm() {
  if (_a) return Zi;
  _a = 1;
  const n = /^[0-9]+$/, e = (i, o) => {
    if (typeof i == "number" && typeof o == "number")
      return i === o ? 0 : i < o ? -1 : 1;
    const a = n.test(i), l = n.test(o);
    return a && l && (i = +i, o = +o), i === o ? 0 : a && !l ? -1 : l && !a ? 1 : i < o ? -1 : 1;
  };
  return Zi = {
    compareIdentifiers: e,
    rcompareIdentifiers: (i, o) => e(o, i)
  }, Zi;
}
var Ki, Ta;
function gu() {
  if (Ta) return Ki;
  Ta = 1;
  const n = du(), { MAX_LENGTH: e, MAX_SAFE_INTEGER: r } = mu(), { safeRe: i, t: o } = im(), a = om(), { compareIdentifiers: l } = sm();
  class f {
    constructor(h, s) {
      if (s = a(s), h instanceof f) {
        if (h.loose === !!s.loose && h.includePrerelease === !!s.includePrerelease)
          return h;
        h = h.version;
      } else if (typeof h != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof h}".`);
      if (h.length > e)
        throw new TypeError(
          `version is longer than ${e} characters`
        );
      n("SemVer", h, s), this.options = s, this.loose = !!s.loose, this.includePrerelease = !!s.includePrerelease;
      const d = h.trim().match(s.loose ? i[o.LOOSE] : i[o.FULL]);
      if (!d)
        throw new TypeError(`Invalid Version: ${h}`);
      if (this.raw = h, this.major = +d[1], this.minor = +d[2], this.patch = +d[3], this.major > r || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > r || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > r || this.patch < 0)
        throw new TypeError("Invalid patch version");
      d[4] ? this.prerelease = d[4].split(".").map((m) => {
        if (/^[0-9]+$/.test(m)) {
          const y = +m;
          if (y >= 0 && y < r)
            return y;
        }
        return m;
      }) : this.prerelease = [], this.build = d[5] ? d[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(h) {
      if (n("SemVer.compare", this.version, this.options, h), !(h instanceof f)) {
        if (typeof h == "string" && h === this.version)
          return 0;
        h = new f(h, this.options);
      }
      return h.version === this.version ? 0 : this.compareMain(h) || this.comparePre(h);
    }
    compareMain(h) {
      return h instanceof f || (h = new f(h, this.options)), this.major < h.major ? -1 : this.major > h.major ? 1 : this.minor < h.minor ? -1 : this.minor > h.minor ? 1 : this.patch < h.patch ? -1 : this.patch > h.patch ? 1 : 0;
    }
    comparePre(h) {
      if (h instanceof f || (h = new f(h, this.options)), this.prerelease.length && !h.prerelease.length)
        return -1;
      if (!this.prerelease.length && h.prerelease.length)
        return 1;
      if (!this.prerelease.length && !h.prerelease.length)
        return 0;
      let s = 0;
      do {
        const d = this.prerelease[s], m = h.prerelease[s];
        if (n("prerelease compare", s, d, m), d === void 0 && m === void 0)
          return 0;
        if (m === void 0)
          return 1;
        if (d === void 0)
          return -1;
        if (d === m)
          continue;
        return l(d, m);
      } while (++s);
    }
    compareBuild(h) {
      h instanceof f || (h = new f(h, this.options));
      let s = 0;
      do {
        const d = this.build[s], m = h.build[s];
        if (n("build compare", s, d, m), d === void 0 && m === void 0)
          return 0;
        if (m === void 0)
          return 1;
        if (d === void 0)
          return -1;
        if (d === m)
          continue;
        return l(d, m);
      } while (++s);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(h, s, d) {
      if (h.startsWith("pre")) {
        if (!s && d === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (s) {
          const m = `-${s}`.match(this.options.loose ? i[o.PRERELEASELOOSE] : i[o.PRERELEASE]);
          if (!m || m[1] !== s)
            throw new Error(`invalid identifier: ${s}`);
        }
      }
      switch (h) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", s, d);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", s, d);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", s, d), this.inc("pre", s, d);
          break;
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", s, d), this.inc("pre", s, d);
          break;
        case "release":
          if (this.prerelease.length === 0)
            throw new Error(`version ${this.raw} is not a prerelease`);
          this.prerelease.length = 0;
          break;
        case "major":
          (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
          break;
        case "minor":
          (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
          break;
        case "patch":
          this.prerelease.length === 0 && this.patch++, this.prerelease = [];
          break;
        case "pre": {
          const m = Number(d) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [m];
          else {
            let y = this.prerelease.length;
            for (; --y >= 0; )
              typeof this.prerelease[y] == "number" && (this.prerelease[y]++, y = -2);
            if (y === -1) {
              if (s === this.prerelease.join(".") && d === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(m);
            }
          }
          if (s) {
            let y = [s, m];
            d === !1 && (y = [s]), l(this.prerelease[0], s) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = y) : this.prerelease = y;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${h}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return Ki = f, Ki;
}
var Ji, Na;
function am() {
  if (Na) return Ji;
  Na = 1;
  const n = gu();
  return Ji = (r, i) => new n(r, i).major, Ji;
}
am();
var Qi, Ia;
function lm() {
  if (Ia) return Qi;
  Ia = 1;
  const n = gu();
  return Qi = (r, i, o = !1) => {
    if (r instanceof n)
      return r;
    try {
      return new n(r, i);
    } catch (a) {
      if (!o)
        return null;
      throw a;
    }
  }, Qi;
}
var eo, Aa;
function um() {
  if (Aa) return eo;
  Aa = 1;
  const n = lm();
  return eo = (r, i) => {
    const o = n(r, i);
    return o ? o.version : null;
  }, eo;
}
um();
var to = {}, Oa;
function cm() {
  return Oa || (Oa = 1, function(n) {
    (function(e) {
      e.parser = function(I, _) {
        return new i(I, _);
      }, e.SAXParser = i, e.SAXStream = s, e.createStream = h, e.MAX_BUFFER_LENGTH = 64 * 1024;
      var r = [
        "comment",
        "sgmlDecl",
        "textNode",
        "tagName",
        "doctype",
        "procInstName",
        "procInstBody",
        "entity",
        "attribName",
        "attribValue",
        "cdata",
        "script"
      ];
      e.EVENTS = [
        "text",
        "processinginstruction",
        "sgmldeclaration",
        "doctype",
        "comment",
        "opentagstart",
        "attribute",
        "opentag",
        "closetag",
        "opencdata",
        "cdata",
        "closecdata",
        "error",
        "end",
        "ready",
        "script",
        "opennamespace",
        "closenamespace"
      ];
      function i(I, _) {
        if (!(this instanceof i))
          return new i(I, _);
        var B = this;
        a(B), B.q = B.c = "", B.bufferCheckPosition = e.MAX_BUFFER_LENGTH, B.opt = _ || {}, B.opt.lowercase = B.opt.lowercase || B.opt.lowercasetags, B.looseCase = B.opt.lowercase ? "toLowerCase" : "toUpperCase", B.tags = [], B.closed = B.closedRoot = B.sawRoot = !1, B.tag = B.error = null, B.strict = !!I, B.noscript = !!(I || B.opt.noscript), B.state = P.BEGIN, B.strictEntities = B.opt.strictEntities, B.ENTITIES = B.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), B.attribList = [], B.opt.xmlns && (B.ns = Object.create(E)), B.opt.unquotedAttributeValues === void 0 && (B.opt.unquotedAttributeValues = !I), B.trackPosition = B.opt.position !== !1, B.trackPosition && (B.position = B.line = B.column = 0), K(B, "onready");
      }
      Object.create || (Object.create = function(I) {
        function _() {
        }
        _.prototype = I;
        var B = new _();
        return B;
      }), Object.keys || (Object.keys = function(I) {
        var _ = [];
        for (var B in I) I.hasOwnProperty(B) && _.push(B);
        return _;
      });
      function o(I) {
        for (var _ = Math.max(e.MAX_BUFFER_LENGTH, 10), B = 0, k = 0, me = r.length; k < me; k++) {
          var ae = I[r[k]].length;
          if (ae > _)
            switch (r[k]) {
              case "textNode":
                G(I);
                break;
              case "cdata":
                Q(I, "oncdata", I.cdata), I.cdata = "";
                break;
              case "script":
                Q(I, "onscript", I.script), I.script = "";
                break;
              default:
                we(I, "Max buffer length exceeded: " + r[k]);
            }
          B = Math.max(B, ae);
        }
        var Se = e.MAX_BUFFER_LENGTH - B;
        I.bufferCheckPosition = Se + I.position;
      }
      function a(I) {
        for (var _ = 0, B = r.length; _ < B; _++)
          I[r[_]] = "";
      }
      function l(I) {
        G(I), I.cdata !== "" && (Q(I, "oncdata", I.cdata), I.cdata = ""), I.script !== "" && (Q(I, "onscript", I.script), I.script = "");
      }
      i.prototype = {
        end: function() {
          Ie(this);
        },
        write: Xt,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          l(this);
        }
      };
      var f;
      try {
        f = require("stream").Stream;
      } catch {
        f = function() {
        };
      }
      f || (f = function() {
      });
      var u = e.EVENTS.filter(function(I) {
        return I !== "error" && I !== "end";
      });
      function h(I, _) {
        return new s(I, _);
      }
      function s(I, _) {
        if (!(this instanceof s))
          return new s(I, _);
        f.apply(this), this._parser = new i(I, _), this.writable = !0, this.readable = !0;
        var B = this;
        this._parser.onend = function() {
          B.emit("end");
        }, this._parser.onerror = function(k) {
          B.emit("error", k), B._parser.error = null;
        }, this._decoder = null, u.forEach(function(k) {
          Object.defineProperty(B, "on" + k, {
            get: function() {
              return B._parser["on" + k];
            },
            set: function(me) {
              if (!me)
                return B.removeAllListeners(k), B._parser["on" + k] = me, me;
              B.on(k, me);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      s.prototype = Object.create(f.prototype, {
        constructor: {
          value: s
        }
      }), s.prototype.write = function(I) {
        if (typeof ei == "function" && typeof ei.isBuffer == "function" && ei.isBuffer(I)) {
          if (!this._decoder) {
            var _ = Tl.StringDecoder;
            this._decoder = new _("utf8");
          }
          I = this._decoder.write(I);
        }
        return this._parser.write(I.toString()), this.emit("data", I), !0;
      }, s.prototype.end = function(I) {
        return I && I.length && this.write(I), this._parser.end(), !0;
      }, s.prototype.on = function(I, _) {
        var B = this;
        return !B._parser["on" + I] && u.indexOf(I) !== -1 && (B._parser["on" + I] = function() {
          var k = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          k.splice(0, 0, I), B.emit.apply(B, k);
        }), f.prototype.on.call(B, I, _);
      };
      var d = "[CDATA[", m = "DOCTYPE", y = "http://www.w3.org/XML/1998/namespace", b = "http://www.w3.org/2000/xmlns/", E = { xml: y, xmlns: b }, T = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, S = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, C = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, x = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function R(I) {
        return I === " " || I === `
` || I === "\r" || I === "	";
      }
      function U(I) {
        return I === '"' || I === "'";
      }
      function Z(I) {
        return I === ">" || R(I);
      }
      function z(I, _) {
        return I.test(_);
      }
      function re(I, _) {
        return !z(I, _);
      }
      var P = 0;
      e.STATE = {
        BEGIN: P++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: P++,
        // leading whitespace
        TEXT: P++,
        // general stuff
        TEXT_ENTITY: P++,
        // &amp and such.
        OPEN_WAKA: P++,
        // <
        SGML_DECL: P++,
        // <!BLARG
        SGML_DECL_QUOTED: P++,
        // <!BLARG foo "bar
        DOCTYPE: P++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: P++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: P++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: P++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: P++,
        // <!-
        COMMENT: P++,
        // <!--
        COMMENT_ENDING: P++,
        // <!-- blah -
        COMMENT_ENDED: P++,
        // <!-- blah --
        CDATA: P++,
        // <![CDATA[ something
        CDATA_ENDING: P++,
        // ]
        CDATA_ENDING_2: P++,
        // ]]
        PROC_INST: P++,
        // <?hi
        PROC_INST_BODY: P++,
        // <?hi there
        PROC_INST_ENDING: P++,
        // <?hi "there" ?
        OPEN_TAG: P++,
        // <strong
        OPEN_TAG_SLASH: P++,
        // <strong /
        ATTRIB: P++,
        // <a
        ATTRIB_NAME: P++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: P++,
        // <a foo _
        ATTRIB_VALUE: P++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: P++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: P++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: P++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: P++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: P++,
        // <foo bar=&quot
        CLOSE_TAG: P++,
        // </a
        CLOSE_TAG_SAW_WHITE: P++,
        // </a   >
        SCRIPT: P++,
        // <script> ...
        SCRIPT_ENDING: P++
        // <script> ... <
      }, e.XML_ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'"
      }, e.ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'",
        AElig: 198,
        Aacute: 193,
        Acirc: 194,
        Agrave: 192,
        Aring: 197,
        Atilde: 195,
        Auml: 196,
        Ccedil: 199,
        ETH: 208,
        Eacute: 201,
        Ecirc: 202,
        Egrave: 200,
        Euml: 203,
        Iacute: 205,
        Icirc: 206,
        Igrave: 204,
        Iuml: 207,
        Ntilde: 209,
        Oacute: 211,
        Ocirc: 212,
        Ograve: 210,
        Oslash: 216,
        Otilde: 213,
        Ouml: 214,
        THORN: 222,
        Uacute: 218,
        Ucirc: 219,
        Ugrave: 217,
        Uuml: 220,
        Yacute: 221,
        aacute: 225,
        acirc: 226,
        aelig: 230,
        agrave: 224,
        aring: 229,
        atilde: 227,
        auml: 228,
        ccedil: 231,
        eacute: 233,
        ecirc: 234,
        egrave: 232,
        eth: 240,
        euml: 235,
        iacute: 237,
        icirc: 238,
        igrave: 236,
        iuml: 239,
        ntilde: 241,
        oacute: 243,
        ocirc: 244,
        ograve: 242,
        oslash: 248,
        otilde: 245,
        ouml: 246,
        szlig: 223,
        thorn: 254,
        uacute: 250,
        ucirc: 251,
        ugrave: 249,
        uuml: 252,
        yacute: 253,
        yuml: 255,
        copy: 169,
        reg: 174,
        nbsp: 160,
        iexcl: 161,
        cent: 162,
        pound: 163,
        curren: 164,
        yen: 165,
        brvbar: 166,
        sect: 167,
        uml: 168,
        ordf: 170,
        laquo: 171,
        not: 172,
        shy: 173,
        macr: 175,
        deg: 176,
        plusmn: 177,
        sup1: 185,
        sup2: 178,
        sup3: 179,
        acute: 180,
        micro: 181,
        para: 182,
        middot: 183,
        cedil: 184,
        ordm: 186,
        raquo: 187,
        frac14: 188,
        frac12: 189,
        frac34: 190,
        iquest: 191,
        times: 215,
        divide: 247,
        OElig: 338,
        oelig: 339,
        Scaron: 352,
        scaron: 353,
        Yuml: 376,
        fnof: 402,
        circ: 710,
        tilde: 732,
        Alpha: 913,
        Beta: 914,
        Gamma: 915,
        Delta: 916,
        Epsilon: 917,
        Zeta: 918,
        Eta: 919,
        Theta: 920,
        Iota: 921,
        Kappa: 922,
        Lambda: 923,
        Mu: 924,
        Nu: 925,
        Xi: 926,
        Omicron: 927,
        Pi: 928,
        Rho: 929,
        Sigma: 931,
        Tau: 932,
        Upsilon: 933,
        Phi: 934,
        Chi: 935,
        Psi: 936,
        Omega: 937,
        alpha: 945,
        beta: 946,
        gamma: 947,
        delta: 948,
        epsilon: 949,
        zeta: 950,
        eta: 951,
        theta: 952,
        iota: 953,
        kappa: 954,
        lambda: 955,
        mu: 956,
        nu: 957,
        xi: 958,
        omicron: 959,
        pi: 960,
        rho: 961,
        sigmaf: 962,
        sigma: 963,
        tau: 964,
        upsilon: 965,
        phi: 966,
        chi: 967,
        psi: 968,
        omega: 969,
        thetasym: 977,
        upsih: 978,
        piv: 982,
        ensp: 8194,
        emsp: 8195,
        thinsp: 8201,
        zwnj: 8204,
        zwj: 8205,
        lrm: 8206,
        rlm: 8207,
        ndash: 8211,
        mdash: 8212,
        lsquo: 8216,
        rsquo: 8217,
        sbquo: 8218,
        ldquo: 8220,
        rdquo: 8221,
        bdquo: 8222,
        dagger: 8224,
        Dagger: 8225,
        bull: 8226,
        hellip: 8230,
        permil: 8240,
        prime: 8242,
        Prime: 8243,
        lsaquo: 8249,
        rsaquo: 8250,
        oline: 8254,
        frasl: 8260,
        euro: 8364,
        image: 8465,
        weierp: 8472,
        real: 8476,
        trade: 8482,
        alefsym: 8501,
        larr: 8592,
        uarr: 8593,
        rarr: 8594,
        darr: 8595,
        harr: 8596,
        crarr: 8629,
        lArr: 8656,
        uArr: 8657,
        rArr: 8658,
        dArr: 8659,
        hArr: 8660,
        forall: 8704,
        part: 8706,
        exist: 8707,
        empty: 8709,
        nabla: 8711,
        isin: 8712,
        notin: 8713,
        ni: 8715,
        prod: 8719,
        sum: 8721,
        minus: 8722,
        lowast: 8727,
        radic: 8730,
        prop: 8733,
        infin: 8734,
        ang: 8736,
        and: 8743,
        or: 8744,
        cap: 8745,
        cup: 8746,
        int: 8747,
        there4: 8756,
        sim: 8764,
        cong: 8773,
        asymp: 8776,
        ne: 8800,
        equiv: 8801,
        le: 8804,
        ge: 8805,
        sub: 8834,
        sup: 8835,
        nsub: 8836,
        sube: 8838,
        supe: 8839,
        oplus: 8853,
        otimes: 8855,
        perp: 8869,
        sdot: 8901,
        lceil: 8968,
        rceil: 8969,
        lfloor: 8970,
        rfloor: 8971,
        lang: 9001,
        rang: 9002,
        loz: 9674,
        spades: 9824,
        clubs: 9827,
        hearts: 9829,
        diams: 9830
      }, Object.keys(e.ENTITIES).forEach(function(I) {
        var _ = e.ENTITIES[I], B = typeof _ == "number" ? String.fromCharCode(_) : _;
        e.ENTITIES[I] = B;
      });
      for (var ye in e.STATE)
        e.STATE[e.STATE[ye]] = ye;
      P = e.STATE;
      function K(I, _, B) {
        I[_] && I[_](B);
      }
      function Q(I, _, B) {
        I.textNode && G(I), K(I, _, B);
      }
      function G(I) {
        I.textNode = he(I.opt, I.textNode), I.textNode && K(I, "ontext", I.textNode), I.textNode = "";
      }
      function he(I, _) {
        return I.trim && (_ = _.trim()), I.normalize && (_ = _.replace(/\s+/g, " ")), _;
      }
      function we(I, _) {
        return G(I), I.trackPosition && (_ += `
Line: ` + I.line + `
Column: ` + I.column + `
Char: ` + I.c), _ = new Error(_), I.error = _, K(I, "onerror", _), I;
      }
      function Ie(I) {
        return I.sawRoot && !I.closedRoot && J(I, "Unclosed root tag"), I.state !== P.BEGIN && I.state !== P.BEGIN_WHITESPACE && I.state !== P.TEXT && we(I, "Unexpected end"), G(I), I.c = "", I.closed = !0, K(I, "onend"), i.call(I, I.strict, I.opt), I;
      }
      function J(I, _) {
        if (typeof I != "object" || !(I instanceof i))
          throw new Error("bad call to strictFail");
        I.strict && we(I, _);
      }
      function Oe(I) {
        I.strict || (I.tagName = I.tagName[I.looseCase]());
        var _ = I.tags[I.tags.length - 1] || I, B = I.tag = { name: I.tagName, attributes: {} };
        I.opt.xmlns && (B.ns = _.ns), I.attribList.length = 0, Q(I, "onopentagstart", B);
      }
      function We(I, _) {
        var B = I.indexOf(":"), k = B < 0 ? ["", I] : I.split(":"), me = k[0], ae = k[1];
        return _ && I === "xmlns" && (me = "xmlns", ae = ""), { prefix: me, local: ae };
      }
      function He(I) {
        if (I.strict || (I.attribName = I.attribName[I.looseCase]()), I.attribList.indexOf(I.attribName) !== -1 || I.tag.attributes.hasOwnProperty(I.attribName)) {
          I.attribName = I.attribValue = "";
          return;
        }
        if (I.opt.xmlns) {
          var _ = We(I.attribName, !0), B = _.prefix, k = _.local;
          if (B === "xmlns")
            if (k === "xml" && I.attribValue !== y)
              J(
                I,
                "xml: prefix must be bound to " + y + `
Actual: ` + I.attribValue
              );
            else if (k === "xmlns" && I.attribValue !== b)
              J(
                I,
                "xmlns: prefix must be bound to " + b + `
Actual: ` + I.attribValue
              );
            else {
              var me = I.tag, ae = I.tags[I.tags.length - 1] || I;
              me.ns === ae.ns && (me.ns = Object.create(ae.ns)), me.ns[k] = I.attribValue;
            }
          I.attribList.push([I.attribName, I.attribValue]);
        } else
          I.tag.attributes[I.attribName] = I.attribValue, Q(I, "onattribute", {
            name: I.attribName,
            value: I.attribValue
          });
        I.attribName = I.attribValue = "";
      }
      function $e(I, _) {
        if (I.opt.xmlns) {
          var B = I.tag, k = We(I.tagName);
          B.prefix = k.prefix, B.local = k.local, B.uri = B.ns[k.prefix] || "", B.prefix && !B.uri && (J(I, "Unbound namespace prefix: " + JSON.stringify(I.tagName)), B.uri = k.prefix);
          var me = I.tags[I.tags.length - 1] || I;
          B.ns && me.ns !== B.ns && Object.keys(B.ns).forEach(function(Zt) {
            Q(I, "onopennamespace", {
              prefix: Zt,
              uri: B.ns[Zt]
            });
          });
          for (var ae = 0, Se = I.attribList.length; ae < Se; ae++) {
            var pe = I.attribList[ae], Fe = pe[0], Ee = pe[1], Ae = We(Fe, !0), lt = Ae.prefix, At = Ae.local, yt = lt === "" ? "" : B.ns[lt] || "", Ut = {
              name: Fe,
              value: Ee,
              prefix: lt,
              local: At,
              uri: yt
            };
            lt && lt !== "xmlns" && !yt && (J(I, "Unbound namespace prefix: " + JSON.stringify(lt)), Ut.uri = lt), I.tag.attributes[Fe] = Ut, Q(I, "onattribute", Ut);
          }
          I.attribList.length = 0;
        }
        I.tag.isSelfClosing = !!_, I.sawRoot = !0, I.tags.push(I.tag), Q(I, "onopentag", I.tag), _ || (!I.noscript && I.tagName.toLowerCase() === "script" ? I.state = P.SCRIPT : I.state = P.TEXT, I.tag = null, I.tagName = ""), I.attribName = I.attribValue = "", I.attribList.length = 0;
      }
      function de(I) {
        if (!I.tagName) {
          J(I, "Weird empty close tag."), I.textNode += "</>", I.state = P.TEXT;
          return;
        }
        if (I.script) {
          if (I.tagName !== "script") {
            I.script += "</" + I.tagName + ">", I.tagName = "", I.state = P.SCRIPT;
            return;
          }
          Q(I, "onscript", I.script), I.script = "";
        }
        var _ = I.tags.length, B = I.tagName;
        I.strict || (B = B[I.looseCase]());
        for (var k = B; _--; ) {
          var me = I.tags[_];
          if (me.name !== k)
            J(I, "Unexpected close tag");
          else
            break;
        }
        if (_ < 0) {
          J(I, "Unmatched closing tag: " + I.tagName), I.textNode += "</" + I.tagName + ">", I.state = P.TEXT;
          return;
        }
        I.tagName = B;
        for (var ae = I.tags.length; ae-- > _; ) {
          var Se = I.tag = I.tags.pop();
          I.tagName = I.tag.name, Q(I, "onclosetag", I.tagName);
          var pe = {};
          for (var Fe in Se.ns)
            pe[Fe] = Se.ns[Fe];
          var Ee = I.tags[I.tags.length - 1] || I;
          I.opt.xmlns && Se.ns !== Ee.ns && Object.keys(Se.ns).forEach(function(Ae) {
            var lt = Se.ns[Ae];
            Q(I, "onclosenamespace", { prefix: Ae, uri: lt });
          });
        }
        _ === 0 && (I.closedRoot = !0), I.tagName = I.attribValue = I.attribName = "", I.attribList.length = 0, I.state = P.TEXT;
      }
      function it(I) {
        var _ = I.entity, B = _.toLowerCase(), k, me = "";
        return I.ENTITIES[_] ? I.ENTITIES[_] : I.ENTITIES[B] ? I.ENTITIES[B] : (_ = B, _.charAt(0) === "#" && (_.charAt(1) === "x" ? (_ = _.slice(2), k = parseInt(_, 16), me = k.toString(16)) : (_ = _.slice(1), k = parseInt(_, 10), me = k.toString(10))), _ = _.replace(/^0+/, ""), isNaN(k) || me.toLowerCase() !== _ ? (J(I, "Invalid character entity"), "&" + I.entity + ";") : String.fromCodePoint(k));
      }
      function Te(I, _) {
        _ === "<" ? (I.state = P.OPEN_WAKA, I.startTagPosition = I.position) : R(_) || (J(I, "Non-whitespace before first tag."), I.textNode = _, I.state = P.TEXT);
      }
      function ve(I, _) {
        var B = "";
        return _ < I.length && (B = I.charAt(_)), B;
      }
      function Xt(I) {
        var _ = this;
        if (this.error)
          throw this.error;
        if (_.closed)
          return we(
            _,
            "Cannot write after close. Assign an onready handler."
          );
        if (I === null)
          return Ie(_);
        typeof I == "object" && (I = I.toString());
        for (var B = 0, k = ""; k = ve(I, B++), _.c = k, !!k; )
          switch (_.trackPosition && (_.position++, k === `
` ? (_.line++, _.column = 0) : _.column++), _.state) {
            case P.BEGIN:
              if (_.state = P.BEGIN_WHITESPACE, k === "\uFEFF")
                continue;
              Te(_, k);
              continue;
            case P.BEGIN_WHITESPACE:
              Te(_, k);
              continue;
            case P.TEXT:
              if (_.sawRoot && !_.closedRoot) {
                for (var me = B - 1; k && k !== "<" && k !== "&"; )
                  k = ve(I, B++), k && _.trackPosition && (_.position++, k === `
` ? (_.line++, _.column = 0) : _.column++);
                _.textNode += I.substring(me, B - 1);
              }
              k === "<" && !(_.sawRoot && _.closedRoot && !_.strict) ? (_.state = P.OPEN_WAKA, _.startTagPosition = _.position) : (!R(k) && (!_.sawRoot || _.closedRoot) && J(_, "Text data outside of root node."), k === "&" ? _.state = P.TEXT_ENTITY : _.textNode += k);
              continue;
            case P.SCRIPT:
              k === "<" ? _.state = P.SCRIPT_ENDING : _.script += k;
              continue;
            case P.SCRIPT_ENDING:
              k === "/" ? _.state = P.CLOSE_TAG : (_.script += "<" + k, _.state = P.SCRIPT);
              continue;
            case P.OPEN_WAKA:
              if (k === "!")
                _.state = P.SGML_DECL, _.sgmlDecl = "";
              else if (!R(k)) if (z(T, k))
                _.state = P.OPEN_TAG, _.tagName = k;
              else if (k === "/")
                _.state = P.CLOSE_TAG, _.tagName = "";
              else if (k === "?")
                _.state = P.PROC_INST, _.procInstName = _.procInstBody = "";
              else {
                if (J(_, "Unencoded <"), _.startTagPosition + 1 < _.position) {
                  var ae = _.position - _.startTagPosition;
                  k = new Array(ae).join(" ") + k;
                }
                _.textNode += "<" + k, _.state = P.TEXT;
              }
              continue;
            case P.SGML_DECL:
              if (_.sgmlDecl + k === "--") {
                _.state = P.COMMENT, _.comment = "", _.sgmlDecl = "";
                continue;
              }
              _.doctype && _.doctype !== !0 && _.sgmlDecl ? (_.state = P.DOCTYPE_DTD, _.doctype += "<!" + _.sgmlDecl + k, _.sgmlDecl = "") : (_.sgmlDecl + k).toUpperCase() === d ? (Q(_, "onopencdata"), _.state = P.CDATA, _.sgmlDecl = "", _.cdata = "") : (_.sgmlDecl + k).toUpperCase() === m ? (_.state = P.DOCTYPE, (_.doctype || _.sawRoot) && J(
                _,
                "Inappropriately located doctype declaration"
              ), _.doctype = "", _.sgmlDecl = "") : k === ">" ? (Q(_, "onsgmldeclaration", _.sgmlDecl), _.sgmlDecl = "", _.state = P.TEXT) : (U(k) && (_.state = P.SGML_DECL_QUOTED), _.sgmlDecl += k);
              continue;
            case P.SGML_DECL_QUOTED:
              k === _.q && (_.state = P.SGML_DECL, _.q = ""), _.sgmlDecl += k;
              continue;
            case P.DOCTYPE:
              k === ">" ? (_.state = P.TEXT, Q(_, "ondoctype", _.doctype), _.doctype = !0) : (_.doctype += k, k === "[" ? _.state = P.DOCTYPE_DTD : U(k) && (_.state = P.DOCTYPE_QUOTED, _.q = k));
              continue;
            case P.DOCTYPE_QUOTED:
              _.doctype += k, k === _.q && (_.q = "", _.state = P.DOCTYPE);
              continue;
            case P.DOCTYPE_DTD:
              k === "]" ? (_.doctype += k, _.state = P.DOCTYPE) : k === "<" ? (_.state = P.OPEN_WAKA, _.startTagPosition = _.position) : U(k) ? (_.doctype += k, _.state = P.DOCTYPE_DTD_QUOTED, _.q = k) : _.doctype += k;
              continue;
            case P.DOCTYPE_DTD_QUOTED:
              _.doctype += k, k === _.q && (_.state = P.DOCTYPE_DTD, _.q = "");
              continue;
            case P.COMMENT:
              k === "-" ? _.state = P.COMMENT_ENDING : _.comment += k;
              continue;
            case P.COMMENT_ENDING:
              k === "-" ? (_.state = P.COMMENT_ENDED, _.comment = he(_.opt, _.comment), _.comment && Q(_, "oncomment", _.comment), _.comment = "") : (_.comment += "-" + k, _.state = P.COMMENT);
              continue;
            case P.COMMENT_ENDED:
              k !== ">" ? (J(_, "Malformed comment"), _.comment += "--" + k, _.state = P.COMMENT) : _.doctype && _.doctype !== !0 ? _.state = P.DOCTYPE_DTD : _.state = P.TEXT;
              continue;
            case P.CDATA:
              k === "]" ? _.state = P.CDATA_ENDING : _.cdata += k;
              continue;
            case P.CDATA_ENDING:
              k === "]" ? _.state = P.CDATA_ENDING_2 : (_.cdata += "]" + k, _.state = P.CDATA);
              continue;
            case P.CDATA_ENDING_2:
              k === ">" ? (_.cdata && Q(_, "oncdata", _.cdata), Q(_, "onclosecdata"), _.cdata = "", _.state = P.TEXT) : k === "]" ? _.cdata += "]" : (_.cdata += "]]" + k, _.state = P.CDATA);
              continue;
            case P.PROC_INST:
              k === "?" ? _.state = P.PROC_INST_ENDING : R(k) ? _.state = P.PROC_INST_BODY : _.procInstName += k;
              continue;
            case P.PROC_INST_BODY:
              if (!_.procInstBody && R(k))
                continue;
              k === "?" ? _.state = P.PROC_INST_ENDING : _.procInstBody += k;
              continue;
            case P.PROC_INST_ENDING:
              k === ">" ? (Q(_, "onprocessinginstruction", {
                name: _.procInstName,
                body: _.procInstBody
              }), _.procInstName = _.procInstBody = "", _.state = P.TEXT) : (_.procInstBody += "?" + k, _.state = P.PROC_INST_BODY);
              continue;
            case P.OPEN_TAG:
              z(S, k) ? _.tagName += k : (Oe(_), k === ">" ? $e(_) : k === "/" ? _.state = P.OPEN_TAG_SLASH : (R(k) || J(_, "Invalid character in tag name"), _.state = P.ATTRIB));
              continue;
            case P.OPEN_TAG_SLASH:
              k === ">" ? ($e(_, !0), de(_)) : (J(_, "Forward-slash in opening tag not followed by >"), _.state = P.ATTRIB);
              continue;
            case P.ATTRIB:
              if (R(k))
                continue;
              k === ">" ? $e(_) : k === "/" ? _.state = P.OPEN_TAG_SLASH : z(T, k) ? (_.attribName = k, _.attribValue = "", _.state = P.ATTRIB_NAME) : J(_, "Invalid attribute name");
              continue;
            case P.ATTRIB_NAME:
              k === "=" ? _.state = P.ATTRIB_VALUE : k === ">" ? (J(_, "Attribute without value"), _.attribValue = _.attribName, He(_), $e(_)) : R(k) ? _.state = P.ATTRIB_NAME_SAW_WHITE : z(S, k) ? _.attribName += k : J(_, "Invalid attribute name");
              continue;
            case P.ATTRIB_NAME_SAW_WHITE:
              if (k === "=")
                _.state = P.ATTRIB_VALUE;
              else {
                if (R(k))
                  continue;
                J(_, "Attribute without value"), _.tag.attributes[_.attribName] = "", _.attribValue = "", Q(_, "onattribute", {
                  name: _.attribName,
                  value: ""
                }), _.attribName = "", k === ">" ? $e(_) : z(T, k) ? (_.attribName = k, _.state = P.ATTRIB_NAME) : (J(_, "Invalid attribute name"), _.state = P.ATTRIB);
              }
              continue;
            case P.ATTRIB_VALUE:
              if (R(k))
                continue;
              U(k) ? (_.q = k, _.state = P.ATTRIB_VALUE_QUOTED) : (_.opt.unquotedAttributeValues || we(_, "Unquoted attribute value"), _.state = P.ATTRIB_VALUE_UNQUOTED, _.attribValue = k);
              continue;
            case P.ATTRIB_VALUE_QUOTED:
              if (k !== _.q) {
                k === "&" ? _.state = P.ATTRIB_VALUE_ENTITY_Q : _.attribValue += k;
                continue;
              }
              He(_), _.q = "", _.state = P.ATTRIB_VALUE_CLOSED;
              continue;
            case P.ATTRIB_VALUE_CLOSED:
              R(k) ? _.state = P.ATTRIB : k === ">" ? $e(_) : k === "/" ? _.state = P.OPEN_TAG_SLASH : z(T, k) ? (J(_, "No whitespace between attributes"), _.attribName = k, _.attribValue = "", _.state = P.ATTRIB_NAME) : J(_, "Invalid attribute name");
              continue;
            case P.ATTRIB_VALUE_UNQUOTED:
              if (!Z(k)) {
                k === "&" ? _.state = P.ATTRIB_VALUE_ENTITY_U : _.attribValue += k;
                continue;
              }
              He(_), k === ">" ? $e(_) : _.state = P.ATTRIB;
              continue;
            case P.CLOSE_TAG:
              if (_.tagName)
                k === ">" ? de(_) : z(S, k) ? _.tagName += k : _.script ? (_.script += "</" + _.tagName, _.tagName = "", _.state = P.SCRIPT) : (R(k) || J(_, "Invalid tagname in closing tag"), _.state = P.CLOSE_TAG_SAW_WHITE);
              else {
                if (R(k))
                  continue;
                re(T, k) ? _.script ? (_.script += "</" + k, _.state = P.SCRIPT) : J(_, "Invalid tagname in closing tag.") : _.tagName = k;
              }
              continue;
            case P.CLOSE_TAG_SAW_WHITE:
              if (R(k))
                continue;
              k === ">" ? de(_) : J(_, "Invalid characters in closing tag");
              continue;
            case P.TEXT_ENTITY:
            case P.ATTRIB_VALUE_ENTITY_Q:
            case P.ATTRIB_VALUE_ENTITY_U:
              var Se, pe;
              switch (_.state) {
                case P.TEXT_ENTITY:
                  Se = P.TEXT, pe = "textNode";
                  break;
                case P.ATTRIB_VALUE_ENTITY_Q:
                  Se = P.ATTRIB_VALUE_QUOTED, pe = "attribValue";
                  break;
                case P.ATTRIB_VALUE_ENTITY_U:
                  Se = P.ATTRIB_VALUE_UNQUOTED, pe = "attribValue";
                  break;
              }
              if (k === ";") {
                var Fe = it(_);
                _.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(Fe) ? (_.entity = "", _.state = Se, _.write(Fe)) : (_[pe] += Fe, _.entity = "", _.state = Se);
              } else z(_.entity.length ? x : C, k) ? _.entity += k : (J(_, "Invalid character in entity name"), _[pe] += "&" + _.entity + k, _.entity = "", _.state = Se);
              continue;
            default:
              throw new Error(_, "Unknown state: " + _.state);
          }
        return _.position >= _.bufferCheckPosition && o(_), _;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var I = String.fromCharCode, _ = Math.floor, B = function() {
          var k = 16384, me = [], ae, Se, pe = -1, Fe = arguments.length;
          if (!Fe)
            return "";
          for (var Ee = ""; ++pe < Fe; ) {
            var Ae = Number(arguments[pe]);
            if (!isFinite(Ae) || // `NaN`, `+Infinity`, or `-Infinity`
            Ae < 0 || // not a valid Unicode code point
            Ae > 1114111 || // not a valid Unicode code point
            _(Ae) !== Ae)
              throw RangeError("Invalid code point: " + Ae);
            Ae <= 65535 ? me.push(Ae) : (Ae -= 65536, ae = (Ae >> 10) + 55296, Se = Ae % 1024 + 56320, me.push(ae, Se)), (pe + 1 === Fe || me.length > k) && (Ee += I.apply(null, me), me.length = 0);
          }
          return Ee;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: B,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = B;
      }();
    })(n);
  }(to)), to;
}
cm();
class fm {
  constructor() {
    ce(this, "_entries", []);
  }
  registerEntry(e) {
    this.validateEntry(e), e.category = e.category ?? 1, this._entries.push(e);
  }
  unregisterEntry(e) {
    const r = typeof e == "string" ? this.getEntryIndex(e) : this.getEntryIndex(e.id);
    if (r === -1) {
      xr.warn("Entry not found, nothing removed", { entry: e, entries: this.getEntries() });
      return;
    }
    this._entries.splice(r, 1);
  }
  /**
   * Get the list of registered entries
   *
   * @param {Folder} context the creation context. Usually the current folder
   */
  getEntries(e) {
    return e ? this._entries.filter((r) => typeof r.enabled == "function" ? r.enabled(e) : !0) : this._entries;
  }
  getEntryIndex(e) {
    return this._entries.findIndex((r) => r.id === e);
  }
  validateEntry(e) {
    if (!e.id || !e.displayName || !(e.iconSvgInline || e.iconClass) || !e.handler)
      throw new Error("Invalid entry");
    if (typeof e.id != "string" || typeof e.displayName != "string")
      throw new Error("Invalid id or displayName property");
    if (e.iconClass && typeof e.iconClass != "string" || e.iconSvgInline && typeof e.iconSvgInline != "string")
      throw new Error("Invalid icon provided");
    if (e.enabled !== void 0 && typeof e.enabled != "function")
      throw new Error("Invalid enabled property");
    if (typeof e.handler != "function")
      throw new Error("Invalid handler property");
    if ("order" in e && typeof e.order != "number")
      throw new Error("Invalid order property");
    if (this.getEntryIndex(e.id) !== -1)
      throw new Error("Duplicate entry");
  }
}
function hm() {
  return typeof window._nc_newfilemenu > "u" && (window._nc_newfilemenu = new fm(), xr.debug("NewFileMenu initialized")), window._nc_newfilemenu;
}
function pm(n) {
  return hm().registerEntry(n);
}
class Vt {
  static getFileConfig({
    name: e,
    url: r,
    downloadUrl: i,
    dir: o,
    onCreate: a,
    fileModifiedTime: l,
    isNew: f,
    isLoaded: u,
    sameWindow: h,
    skipConfirmation: s,
    permissions: d,
    existingContents: m,
    templateName: y,
    isPublicLink: b
  } = {}) {
    return {
      name: e || "?",
      downloadUrl: i || "",
      url: r ? qe(r) : "",
      dir: o || "",
      onCreate: a,
      fileModifiedTime: l || null,
      isNew: f || !1,
      isLoaded: u || !1,
      sameWindow: h || !1,
      skipConfirmation: s || !1,
      permissions: d || gt.NONE,
      existingContents: m,
      templateName: y,
      isPublicLink: b || !1
    };
  }
  static async load({ fileName: e, dir: r } = {}) {
    const i = await window.fetch(
      `${window.OC.generateUrl("/apps/files_linkeditor/ajax/loadfile")}?filename=${encodeURIComponent(
        e
      )}&dir=${encodeURIComponent(r)}`,
      {
        method: "GET",
        headers: {
          requesttoken: window.OC.requestToken
        }
      }
    );
    if (i && i.ok)
      return await i.json();
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async loadPublic({ downloadUrl: e } = {}) {
    const r = await window.fetch(e, {
      method: "GET",
      headers: {
        requesttoken: window.OC.requestToken
      }
    });
    if (r && r.ok)
      return { filecontents: await r.text() };
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async save({ fileContent: e, name: r, dir: i } = {}) {
    let o = `${i}${r}`;
    i !== "/" && (o = `${i}/${r}`);
    const a = nm(), l = `${fu}${o}`;
    try {
      if (await a.putFileContents(l, e, { overwrite: !0 })) {
        const u = await a.stat(l, { details: !0, data: Qd() });
        return ll("files:node:created", rm(u.data)), !0;
      }
    } catch (f) {
      console.error(f);
    }
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static userCanEdit(e) {
    var r, i, o, a;
    return window.FileList && window.OC && window.OC.currentUser && (window.OC.PERMISSION_ALL === ((i = (r = window.FileList) == null ? void 0 : r.getDirectoryPermissions) == null ? void 0 : i.call(r)) || window.OC.PERMISSION_UPDATE === ((a = (o = window.FileList) == null ? void 0 : o.getDirectoryPermissions) == null ? void 0 : a.call(o))) || e >= gt.UPDATE;
  }
}
function Sa(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "You are about to visit:") + ""
  ), i, o, a, l, f = (
    /*file*/
    n[0].url + ""
  ), u, h, s;
  return {
    c() {
      e = Y("p"), i = Re(r), o = fe(), a = Y("em"), l = Y("a"), u = Re(f), j(l, "href", h = qe(
        /*file*/
        n[0].url
      )), j(l, "target", s = /*file*/
      n[0].sameWindow ? "_self" : "_blank"), j(e, "class", "urldisplay");
    },
    m(d, m) {
      se(d, e, m), V(e, i), V(e, o), V(e, a), V(a, l), V(l, u);
    },
    p(d, m) {
      m & /*file*/
      1 && f !== (f = /*file*/
      d[0].url + "") && cr(u, f), m & /*file*/
      1 && h !== (h = qe(
        /*file*/
        d[0].url
      )) && j(l, "href", h), m & /*file*/
      1 && s !== (s = /*file*/
      d[0].sameWindow ? "_self" : "_blank") && j(l, "target", s);
    },
    d(d) {
      d && oe(e);
    }
  };
}
function Ra(n) {
  let e = Vt.userCanEdit(
    /*file*/
    n[0].permissions
  ) && !/*file*/
  n[0].isPublicLink, r, i, o = (
    /*t*/
    n[2]("files_linkeditor", "Visit link") + ""
  ), a, l, f, u = e && Ca(n);
  return {
    c() {
      u && u.c(), r = fe(), i = Y("a"), a = Re(o), j(i, "href", l = qe(
        /*file*/
        n[0].url
      )), j(i, "target", f = /*file*/
      n[0].sameWindow ? "_self" : "_blank"), j(i, "class", "button primary");
    },
    m(h, s) {
      u && u.m(h, s), se(h, r, s), se(h, i, s), V(i, a);
    },
    p(h, s) {
      s & /*file*/
      1 && (e = Vt.userCanEdit(
        /*file*/
        h[0].permissions
      ) && !/*file*/
      h[0].isPublicLink), e ? u ? u.p(h, s) : (u = Ca(h), u.c(), u.m(r.parentNode, r)) : u && (u.d(1), u = null), s & /*file*/
      1 && l !== (l = qe(
        /*file*/
        h[0].url
      )) && j(i, "href", l), s & /*file*/
      1 && f !== (f = /*file*/
      h[0].sameWindow ? "_self" : "_blank") && j(i, "target", f);
    },
    d(h) {
      h && (oe(r), oe(i)), u && u.d(h);
    }
  };
}
function Ca(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Edit link") + ""
  ), i, o, a;
  return {
    c() {
      e = Y("a"), i = Re(r), j(e, "href", window.location.href), j(e, "class", "button");
    },
    m(l, f) {
      se(l, e, f), V(e, i), o || (a = xe(e, "click", wt(
        /*click_handler_1*/
        n[4]
      )), o = !0);
    },
    p: sn,
    d(l) {
      l && oe(e), o = !1, a();
    }
  };
}
function dm(n) {
  let e, r, i = (
    /*file*/
    n[0].name + ""
  ), o, a, l, f, u, h = (
    /*t*/
    n[2]("files_linkeditor", "Cancel") + ""
  ), s, d, m, y, b = !/*loading*/
  n[1] && Sa(n), E = !/*loading*/
  n[1] && Ra(n);
  return {
    c() {
      e = Y("div"), r = Y("h3"), o = Re(i), a = fe(), b && b.c(), l = fe(), f = Y("div"), u = Y("a"), s = Re(h), d = fe(), E && E.c(), j(e, "class", "edit push-bottom"), j(u, "href", window.location.href), j(u, "class", "button"), j(f, "class", "linkeditor-oc-dialog-buttonrow twobuttons");
    },
    m(T, S) {
      se(T, e, S), V(e, r), V(r, o), V(e, a), b && b.m(e, null), se(T, l, S), se(T, f, S), V(f, u), V(u, s), V(f, d), E && E.m(f, null), m || (y = xe(u, "click", wt(
        /*click_handler*/
        n[3]
      )), m = !0);
    },
    p(T, S) {
      S & /*file*/
      1 && i !== (i = /*file*/
      T[0].name + "") && cr(o, i), /*loading*/
      T[1] ? b && (b.d(1), b = null) : b ? b.p(T, S) : (b = Sa(T), b.c(), b.m(e, null)), /*loading*/
      T[1] ? E && (E.d(1), E = null) : E ? E.p(T, S) : (E = Ra(T), E.c(), E.m(f, null));
    },
    d(T) {
      T && (oe(e), oe(l), oe(f)), b && b.d(), E && E.d(), m = !1, y();
    }
  };
}
function mm(n) {
  let e, r;
  return e = new fr({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [dm] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      qt(e.$$.fragment);
    },
    m(i, o) {
      Ft(e, i, o), r = !0;
    },
    p(i, [o]) {
      const a = {};
      o & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), o & /*$$scope, file, loading*/
      67 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (Ne(e.$$.fragment, i), r = !0);
    },
    o(i) {
      De(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Mt(e, i);
    }
  };
}
function gm(n, e, r) {
  let i, o;
  const a = window.t;
  let l;
  On(() => {
    l = xt.subscribe(async (h) => {
      if (r(0, i = h), i && i.isLoaded) {
        if (r(1, o = !1), !i.url) {
          OC.dialogs.alert(a("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."), a("files_linkeditor", "A slight problem"));
          return;
        }
        const s = i.isPublicLink && window.location.toString().includes("openfile=true");
        i.skipConfirmation && i.sameWindow && !s && (window.location.href = i.url, Ke.update(() => "none"));
      }
    });
  }), Sn(() => {
    l();
  });
  const f = () => {
    Ke.update(() => "none");
  }, u = () => {
    Ke.update(() => "edit");
  };
  return r(0, i = Vt.getFileConfig()), r(1, o = !0), [i, o, a, f, u];
}
class Em extends hn {
  constructor(e) {
    super(), fn(this, e, gm, mm, an, {});
  }
}
const La = "application/internet-shortcut", xa = () => '<span class="icon-link" style="display: block;"></span>';
window.OC.dialogs.alert = function(n, e) {
  window.OC.dialogs.message(
    t("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."),
    t("files_linkeditor", "A slight problem"),
    "alert",
    71
    // Dialogs.OK_BUTTONS
  );
};
class Bn {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    Ea({
      id: "editLink",
      displayName: () => t("files_linkeditor", "Edit link"),
      iconSvgInline: xa,
      exec: async (r) => {
        await Bn.loadAndChangeViewMode({
          fileName: r.basename,
          dirName: r.dirname,
          nextViewMode: "edit",
          permissions: r.permissions
        });
      },
      enabled: (r) => window.OC.currentUser && r.every((i) => i.permissions >= gt.UPDATE && La.includes(i.mime))
    }), Ea({
      id: "viewLink",
      displayName: () => t("files_linkeditor", "View link"),
      iconSvgInline: xa,
      exec: async (r) => {
        window.OC.currentUser ? await Bn.loadAndChangeViewMode({
          fileName: r.basename,
          dirName: r.dirname,
          nextViewMode: "view",
          permissions: r.permissions
        }) : await Bn.loadAndChangeViewMode({
          fileName: r.displayname ?? r.basename,
          dirName: r.dirname,
          nextViewMode: "view",
          // TODO:
          downloadUrl: r.source,
          publicUser: !0,
          permissions: r.permissions
        });
      },
      enabled: (r) => r.every((i) => i.permissions >= gt.READ && La.includes(i.mime)),
      default: () => pu.DEFAULT
    });
    const e = ({ id: r, displayName: i, templateName: o }) => {
      pm({
        id: r,
        displayName: i,
        enabled: (a) => a.permissions >= gt.CREATE,
        iconClass: "icon-link",
        handler: (a, l) => {
          const f = a.path;
          Ke.update(() => "filename"), xt.update(
            () => Vt.getFileConfig({
              name: o,
              templateName: o,
              dir: f,
              isNew: !0,
              existingContents: l,
              onCreate: async (u) => {
                Ke.update(() => "edit"), xt.update(
                  () => Vt.getFileConfig({
                    name: u.name,
                    dir: u.dir,
                    isNew: !0,
                    onCreate: async (h) => {
                      await Bn.saveAndChangeViewMode(h);
                    }
                  })
                );
              }
            })
          );
        }
      });
    };
    e({
      id: "application-internet-shortcut",
      displayName: `${window.t("files_linkeditor", "New link")} (.URL)`,
      // TRANSLATORS default filename when creating a new link file from the files list, keep .URL at the end
      templateName: window.t("files_linkeditor", "Link.URL")
    }), e({
      id: "application-internet-shortcut-webloc",
      displayName: `${window.t("files_linkeditor", "New link")} (.webloc)`,
      // TRANSLATORS default filename when creating a new link file from the files list, keep .webloc at the end
      templateName: window.t("files_linkeditor", "Link.webloc")
    });
  }
  static async loadAndChangeViewMode({ fileName: e, dirName: r, nextViewMode: i, publicUser: o, downloadUrl: a, permissions: l }) {
    Ke.update(() => i), xt.update(
      () => Vt.getFileConfig({
        name: e,
        dir: r || "",
        permissions: l,
        isPublicLink: o
      })
    );
    let f = {};
    if (o ? f = await Vt.loadPublic({ downloadUrl: a }) : f = await Vt.load({ fileName: e, dir: r }), f) {
      const u = zt.getExtension(e);
      let h = {};
      u === "webloc" ? h = zt.parseWeblocFile(f.filecontents) : h = zt.parseURLFile(f.filecontents), xt.update(
        (s) => Vt.getFileConfig({
          ...s,
          ...h,
          fileModifiedTime: f.mtime,
          isLoaded: !0
        })
      );
    } else
      window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async saveAndChangeViewMode({ name: e, dir: r, url: i, fileModifiedTime: o, sameWindow: a, skipConfirmation: l }) {
    const f = zt.getExtension(e);
    let u = "";
    f === "webloc" ? u = zt.generateWeblocFileContent("", i, a, l) : u = zt.generateURLFileContent("", i, a, l), await Vt.save({ fileContent: u, name: e, dir: r, fileModifiedTime: o }), Ke.update(() => "none");
  }
}
function Pa(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Link target URL") + ""
  ), i, o, a, l, f, u, h, s, d, m, y, b, E, T, S, C;
  return {
    c() {
      e = Y("label"), i = Re(r), o = fe(), a = Y("br"), l = fe(), f = Y("input"), u = fe(), h = Y("input"), s = fe(), d = Y("label"), d.textContent = `${/*t*/
      n[2]("files_linkeditor", "Open in same window")}`, m = fe(), y = Y("input"), E = fe(), T = Y("label"), T.textContent = `${/*t*/
      n[2]("files_linkeditor", "Skip confirmation dialog before open (has to open in same window)")}`, j(f, "type", "text"), Dr(f, "width", "100%"), j(f, "class", "input-wide"), f.autofocus = !0, j(f, "data-cy", "url-input"), j(
        f,
        "placeholder",
        /*t*/
        n[2]("files_linkeditor", "e.g. https://example.org")
      ), j(h, "type", "checkbox"), j(h, "id", "linkeditor_sameWindow"), j(h, "class", "checkbox"), j(d, "for", "linkeditor_sameWindow"), j(d, "class", "space-top"), j(y, "type", "checkbox"), y.disabled = b = !/*file*/
      n[0].sameWindow, j(y, "id", "linkeditor_skipConfirmation"), j(y, "class", "checkbox"), j(T, "for", "linkeditor_skipConfirmation");
    },
    m(x, R) {
      se(x, e, R), V(e, i), V(e, o), V(e, a), V(e, l), V(e, f), In(
        f,
        /*file*/
        n[0].url
      ), se(x, u, R), se(x, h, R), h.checked = /*file*/
      n[0].sameWindow, se(x, s, R), se(x, d, R), se(x, m, R), se(x, y, R), y.checked = /*file*/
      n[0].skipConfirmation, se(x, E, R), se(x, T, R), f.focus(), S || (C = [
        xe(
          f,
          "input",
          /*input0_input_handler*/
          n[5]
        ),
        xe(
          h,
          "change",
          /*input1_change_handler*/
          n[6]
        ),
        xe(
          y,
          "change",
          /*input2_change_handler*/
          n[7]
        )
      ], S = !0);
    },
    p(x, R) {
      R & /*file*/
      1 && f.value !== /*file*/
      x[0].url && In(
        f,
        /*file*/
        x[0].url
      ), R & /*file*/
      1 && (h.checked = /*file*/
      x[0].sameWindow), R & /*file*/
      1 && b !== (b = !/*file*/
      x[0].sameWindow) && (y.disabled = b), R & /*file*/
      1 && (y.checked = /*file*/
      x[0].skipConfirmation);
    },
    d(x) {
      x && (oe(e), oe(u), oe(h), oe(s), oe(d), oe(m), oe(y), oe(E), oe(T)), S = !1, kt(C);
    }
  };
}
function Da(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Visit link") + ""
  ), i, o;
  return {
    c() {
      e = Y("a"), i = Re(r), j(e, "href", o = qe(
        /*file*/
        n[0].url
      )), j(e, "target", "_blank"), j(e, "class", "button");
    },
    m(a, l) {
      se(a, e, l), V(e, i);
    },
    p(a, l) {
      l & /*file*/
      1 && o !== (o = qe(
        /*file*/
        a[0].url
      )) && j(e, "href", o);
    },
    d(a) {
      a && oe(e);
    }
  };
}
function $a(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Save") + ""
  ), i, o, a;
  return {
    c() {
      e = Y("a"), i = Re(r), j(e, "href", window.location.href), j(e, "class", "primary button");
    },
    m(l, f) {
      se(l, e, f), V(e, i), o || (a = xe(e, "click", wt(
        /*save*/
        n[4]
      )), o = !0);
    },
    p: sn,
    d(l) {
      l && oe(e), o = !1, a();
    }
  };
}
function wm(n) {
  let e, r, i, o = (
    /*file*/
    n[0].name + ""
  ), a, l, f, u, h, s, d, m = (
    /*t*/
    n[2]("files_linkeditor", "Cancel") + ""
  ), y, b, E, T, S = !/*loading*/
  n[1] && Pa(n), C = !/*loading*/
  n[1] && Da(n), x = !/*loading*/
  n[1] && $a(n);
  return {
    c() {
      e = Y("form"), r = Y("div"), i = Y("h3"), a = Re(o), l = fe(), S && S.c(), f = fe(), u = Y("div"), C && C.c(), h = fe(), s = Y("div"), d = Y("a"), y = Re(m), b = fe(), x && x.c(), j(r, "class", "edit"), j(u, "class", "linkeditor-oc-dialog-buttonrow onebutton urlvisit"), j(d, "href", window.location.href), j(d, "class", "cancel button"), j(s, "class", "linkeditor-oc-dialog-buttonrow twobuttons"), j(
        e,
        "action",
        /*OC*/
        n[3].generateUrl("/")
      ), j(e, "method", "post");
    },
    m(R, U) {
      se(R, e, U), V(e, r), V(r, i), V(i, a), V(r, l), S && S.m(r, null), V(e, f), V(e, u), C && C.m(u, null), V(e, h), V(e, s), V(s, d), V(d, y), V(s, b), x && x.m(s, null), E || (T = [
        xe(d, "click", wt(
          /*click_handler*/
          n[8]
        )),
        xe(e, "submit", wt(
          /*save*/
          n[4]
        ))
      ], E = !0);
    },
    p(R, U) {
      U & /*file*/
      1 && o !== (o = /*file*/
      R[0].name + "") && cr(a, o), /*loading*/
      R[1] ? S && (S.d(1), S = null) : S ? S.p(R, U) : (S = Pa(R), S.c(), S.m(r, null)), /*loading*/
      R[1] ? C && (C.d(1), C = null) : C ? C.p(R, U) : (C = Da(R), C.c(), C.m(u, null)), /*loading*/
      R[1] ? x && (x.d(1), x = null) : x ? x.p(R, U) : (x = $a(R), x.c(), x.m(s, null));
    },
    d(R) {
      R && oe(e), S && S.d(), C && C.d(), x && x.d(), E = !1, kt(T);
    }
  };
}
function ym(n) {
  let e, r;
  return e = new fr({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [wm] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      qt(e.$$.fragment);
    },
    m(i, o) {
      Ft(e, i, o), r = !0;
    },
    p(i, [o]) {
      const a = {};
      o & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), o & /*$$scope, loading, file*/
      1027 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (Ne(e.$$.fragment, i), r = !0);
    },
    o(i) {
      De(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Mt(e, i);
    }
  };
}
function vm(n, e, r) {
  let i, o;
  const a = window.t, l = window.OC;
  let f;
  On(() => {
    f = xt.subscribe((y) => {
      r(0, i = y), i && (i.isLoaded || i.isNew) && r(1, o = !1);
    });
  }), Sn(() => {
    f();
  });
  const u = () => {
    r(1, o = !0), i.isNew && i.onCreate ? i.onCreate({ ...i }) : Bn.saveAndChangeViewMode({ ...i });
  };
  function h() {
    i.url = this.value, r(0, i);
  }
  function s() {
    i.sameWindow = this.checked, r(0, i);
  }
  function d() {
    i.skipConfirmation = this.checked, r(0, i);
  }
  const m = () => {
    Ke.update(() => "none");
  };
  return r(0, i = Vt.getFileConfig()), r(1, o = !0), [
    i,
    o,
    a,
    l,
    u,
    h,
    s,
    d,
    m
  ];
}
class bm extends hn {
  constructor(e) {
    super(), fn(this, e, vm, ym, an, {});
  }
}
function ka(n) {
  let e, r = (
    /*t*/
    n[3]("files_linkeditor", "File name") + ""
  ), i, o, a, l, f, u, h;
  return {
    c() {
      e = Y("label"), i = Re(r), o = fe(), a = Y("br"), l = fe(), f = Y("input"), j(f, "type", "text"), Dr(f, "width", "100%"), j(f, "class", "input-wide"), f.autofocus = !0, j(f, "data-cy", "name-input");
    },
    m(s, d) {
      se(s, e, d), V(e, i), V(e, o), V(e, a), V(e, l), V(e, f), In(
        f,
        /*file*/
        n[0].name
      ), f.focus(), u || (h = [
        xe(
          f,
          "input",
          /*input_input_handler*/
          n[7]
        ),
        xe(
          f,
          "keyup",
          /*checkConflicts*/
          n[5]
        )
      ], u = !0);
    },
    p(s, d) {
      d & /*file*/
      1 && f.value !== /*file*/
      s[0].name && In(
        f,
        /*file*/
        s[0].name
      );
    },
    d(s) {
      s && oe(e), u = !1, kt(h);
    }
  };
}
function Fa(n) {
  let e, r = (
    /*t*/
    n[3]("files_linkeditor", "Create") + ""
  ), i, o, a;
  return {
    c() {
      e = Y("button"), i = Re(r), j(e, "type", "submit"), e.disabled = /*isConflicting*/
      n[2], j(e, "class", "primary button");
    },
    m(l, f) {
      se(l, e, f), V(e, i), o || (a = xe(e, "click", wt(
        /*save*/
        n[6]
      )), o = !0);
    },
    p(l, f) {
      f & /*isConflicting*/
      4 && (e.disabled = /*isConflicting*/
      l[2]);
    },
    d(l) {
      l && oe(e), o = !1, a();
    }
  };
}
function _m(n) {
  let e, r, i, o, a, l, f, u = (
    /*t*/
    n[3]("files_linkeditor", "Cancel") + ""
  ), h, s, d, m, y = !/*loading*/
  n[1] && ka(n), b = !/*loading*/
  n[1] && Fa(n);
  return {
    c() {
      e = Y("form"), r = Y("div"), i = Y("h3"), i.textContent = `${window.t("files_linkeditor", "New link")}`, o = fe(), y && y.c(), a = fe(), l = Y("div"), f = Y("a"), h = Re(u), s = fe(), b && b.c(), j(r, "class", "edit"), j(f, "href", window.location.href), j(f, "class", "cancel button"), j(l, "class", "linkeditor-oc-dialog-buttonrow twobuttons"), j(
        e,
        "action",
        /*OC*/
        n[4].generateUrl("/")
      ), j(e, "method", "post");
    },
    m(E, T) {
      se(E, e, T), V(e, r), V(r, i), V(r, o), y && y.m(r, null), V(e, a), V(e, l), V(l, f), V(f, h), V(l, s), b && b.m(l, null), d || (m = [
        xe(f, "click", wt(
          /*click_handler*/
          n[8]
        )),
        xe(e, "submit", wt(
          /*save*/
          n[6]
        ))
      ], d = !0);
    },
    p(E, T) {
      /*loading*/
      E[1] ? y && (y.d(1), y = null) : y ? y.p(E, T) : (y = ka(E), y.c(), y.m(r, null)), /*loading*/
      E[1] ? b && (b.d(1), b = null) : b ? b.p(E, T) : (b = Fa(E), b.c(), b.m(l, null));
    },
    d(E) {
      E && oe(e), y && y.d(), b && b.d(), d = !1, kt(m);
    }
  };
}
function Tm(n) {
  let e, r;
  return e = new fr({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [_m] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      qt(e.$$.fragment);
    },
    m(i, o) {
      Ft(e, i, o), r = !0;
    },
    p(i, [o]) {
      const a = {};
      o & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), o & /*$$scope, isConflicting, loading, file*/
      2055 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (Ne(e.$$.fragment, i), r = !0);
    },
    o(i) {
      De(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Mt(e, i);
    }
  };
}
function Nm(n, e, r) {
  let i, o, a;
  const l = window.t, f = window.OC, u = (b, E) => {
    const T = {
      name: b,
      templateName: i.templateName
    }, S = ci(T);
    return ((E == null ? void 0 : E.map((x) => x.basename)) ?? []).includes(S.name);
  };
  let h;
  On(() => {
    h = xt.subscribe((b) => {
      r(0, i = b), i && (i.isLoaded || i.isNew) && (r(1, o = !1), s());
    });
  }), Sn(() => {
    h();
  });
  const s = () => {
    u(i.name, i.existingContents) ? r(2, a = !0) : r(2, a = !1);
  }, d = () => {
    u(i.name, i.existingContents) || (r(1, o = !0), i.onCreate(ci({ ...i })));
  };
  function m() {
    i.name = this.value, r(0, i);
  }
  const y = () => {
    Ke.update(() => "none");
  };
  return r(0, i = Vt.getFileConfig()), r(1, o = !0), r(2, a = !0), [
    i,
    o,
    a,
    l,
    f,
    s,
    d,
    m,
    y
  ];
}
class Im extends hn {
  constructor(e) {
    super(), fn(this, e, Nm, Tm, an, {});
  }
}
function Ma(n) {
  let e, r;
  return e = new Im({}), {
    c() {
      qt(e.$$.fragment);
    },
    m(i, o) {
      Ft(e, i, o), r = !0;
    },
    i(i) {
      r || (Ne(e.$$.fragment, i), r = !0);
    },
    o(i) {
      De(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Mt(e, i);
    }
  };
}
function Ua(n) {
  let e, r;
  return e = new Em({}), {
    c() {
      qt(e.$$.fragment);
    },
    m(i, o) {
      Ft(e, i, o), r = !0;
    },
    i(i) {
      r || (Ne(e.$$.fragment, i), r = !0);
    },
    o(i) {
      De(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Mt(e, i);
    }
  };
}
function Ba(n) {
  let e, r;
  return e = new bm({}), {
    c() {
      qt(e.$$.fragment);
    },
    m(i, o) {
      Ft(e, i, o), r = !0;
    },
    i(i) {
      r || (Ne(e.$$.fragment, i), r = !0);
    },
    o(i) {
      De(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Mt(e, i);
    }
  };
}
function Am(n) {
  let e, r, i, o, a = (
    /*viewMode*/
    n[0] === "filename" && Ma()
  ), l = (
    /*viewMode*/
    n[0] === "view" && Ua()
  ), f = (
    /*viewMode*/
    n[0] === "edit" && Ba()
  );
  return {
    c() {
      a && a.c(), e = fe(), l && l.c(), r = fe(), f && f.c(), i = Ya();
    },
    m(u, h) {
      a && a.m(u, h), se(u, e, h), l && l.m(u, h), se(u, r, h), f && f.m(u, h), se(u, i, h), o = !0;
    },
    p(u, [h]) {
      /*viewMode*/
      u[0] === "filename" ? a ? h & /*viewMode*/
      1 && Ne(a, 1) : (a = Ma(), a.c(), Ne(a, 1), a.m(e.parentNode, e)) : a && (ar(), De(a, 1, 1, () => {
        a = null;
      }), lr()), /*viewMode*/
      u[0] === "view" ? l ? h & /*viewMode*/
      1 && Ne(l, 1) : (l = Ua(), l.c(), Ne(l, 1), l.m(r.parentNode, r)) : l && (ar(), De(l, 1, 1, () => {
        l = null;
      }), lr()), /*viewMode*/
      u[0] === "edit" ? f ? h & /*viewMode*/
      1 && Ne(f, 1) : (f = Ba(), f.c(), Ne(f, 1), f.m(i.parentNode, i)) : f && (ar(), De(f, 1, 1, () => {
        f = null;
      }), lr());
    },
    i(u) {
      o || (Ne(a), Ne(l), Ne(f), o = !0);
    },
    o(u) {
      De(a), De(l), De(f), o = !1;
    },
    d(u) {
      u && (oe(e), oe(r), oe(i)), a && a.d(u), l && l.d(u), f && f.d(u);
    }
  };
}
function Om(n, e, r) {
  let i, o;
  return On(() => {
    o = Ke.subscribe((a) => {
      r(0, i = a);
    });
  }), Sn(() => {
    o();
  }), r(0, i = ""), [i];
}
class Sm extends hn {
  constructor(e) {
    super(), fn(this, e, Om, Am, an, {});
  }
}
const ja = [];
var Va, za;
const Rm = Number.parseInt((((za = (Va = window.OC) == null ? void 0 : Va.config) == null ? void 0 : za.version) ?? "0").split(".")[0]);
Rm >= 33 ? (ja.push(
  new Wd({
    target: document.body,
    props: {}
  })
), Un.registerFileActions()) : (ja.push(
  new Sm({
    target: document.body,
    props: {}
  })
), Bn.registerFileActions());
