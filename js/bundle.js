var Hl = Object.defineProperty;
var xo = (n) => {
  throw TypeError(n);
};
var Yl = (n, e, r) => e in n ? Hl(n, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[e] = r;
var ae = (n, e, r) => Yl(n, typeof e != "symbol" ? e + "" : e, r), ii = (n, e, r) => e.has(n) || xo("Cannot " + r);
var q = (n, e, r) => (ii(n, e, "read from private field"), r ? r.call(n) : e.get(n)), Tt = (n, e, r) => e.has(n) ? xo("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, r), je = (n, e, r, i) => (ii(n, e, "write to private field"), i ? i.call(n, r) : e.set(n, r), r), cn = (n, e, r) => (ii(n, e, "access private method"), r);
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
function Qt() {
}
function Zl(n, e) {
  for (const r in e) n[r] = e[r];
  return (
    /** @type {T & S} */
    n
  );
}
function Ea(n) {
  return n();
}
function Po() {
  return /* @__PURE__ */ Object.create(null);
}
function St(n) {
  n.forEach(Ea);
}
function wa(n) {
  return typeof n == "function";
}
function en(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Kl(n) {
  return Object.keys(n).length === 0;
}
function Jl(n, e, r, i) {
  if (n) {
    const o = ya(n, e, r, i);
    return n[0](o);
  }
}
function ya(n, e, r, i) {
  return n[1] && i ? Zl(r.ctx.slice(), n[1](i(e))) : r.ctx;
}
function Ql(n, e, r, i) {
  return n[2], e.dirty;
}
function eu(n, e, r, i, o, a) {
  if (o) {
    const l = ya(e, r, i, a);
    n.p(l, o);
  }
}
function tu(n) {
  if (n.ctx.length > 32) {
    const e = [], r = n.ctx.length / 32;
    for (let i = 0; i < r; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
const Ir = globalThis || void 0 || self;
function W(n, e) {
  n.appendChild(e);
}
function ie(n, e, r) {
  n.insertBefore(e, r || null);
}
function re(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function H(n) {
  return document.createElement(n);
}
function _e(n) {
  return document.createTextNode(n);
}
function le() {
  return _e(" ");
}
function va() {
  return _e("");
}
function Oe(n, e, r, i) {
  return n.addEventListener(e, r, i), () => n.removeEventListener(e, r, i);
}
function ft(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function B(n, e, r) {
  r == null ? n.removeAttribute(e) : n.getAttribute(e) !== r && n.setAttribute(e, r);
}
function nu(n) {
  return Array.from(n.childNodes);
}
function Kn(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function wn(n, e) {
  n.value = e ?? "";
}
function _r(n, e, r, i) {
  r == null ? n.style.removeProperty(e) : n.style.setProperty(e, r, "");
}
let wr;
function mr(n) {
  wr = n;
}
function ba() {
  if (!wr) throw new Error("Function called outside component initialization");
  return wr;
}
function vn(n) {
  ba().$$.on_mount.push(n);
}
function bn(n) {
  ba().$$.on_destroy.push(n);
}
const Gn = [], $o = [];
let Xn = [];
const Do = [], ru = /* @__PURE__ */ Promise.resolve();
let Di = !1;
function iu() {
  Di || (Di = !0, ru.then(_a));
}
function ki(n) {
  Xn.push(n);
}
const oi = /* @__PURE__ */ new Set();
let Mn = 0;
function _a() {
  if (Mn !== 0)
    return;
  const n = wr;
  do {
    try {
      for (; Mn < Gn.length; ) {
        const e = Gn[Mn];
        Mn++, mr(e), ou(e.$$);
      }
    } catch (e) {
      throw Gn.length = 0, Mn = 0, e;
    }
    for (mr(null), Gn.length = 0, Mn = 0; $o.length; ) $o.pop()();
    for (let e = 0; e < Xn.length; e += 1) {
      const r = Xn[e];
      oi.has(r) || (oi.add(r), r());
    }
    Xn.length = 0;
  } while (Gn.length);
  for (; Do.length; )
    Do.pop()();
  Di = !1, oi.clear(), mr(n);
}
function ou(n) {
  if (n.fragment !== null) {
    n.update(), St(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(ki);
  }
}
function su(n) {
  const e = [], r = [];
  Xn.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : r.push(i)), r.forEach((i) => i()), Xn = e;
}
const Dr = /* @__PURE__ */ new Set();
let On;
function Hn() {
  On = {
    r: 0,
    c: [],
    p: On
    // parent group
  };
}
function Yn() {
  On.r || St(On.c), On = On.p;
}
function ve(n, e) {
  n && n.i && (Dr.delete(n), n.i(e));
}
function Se(n, e, r, i) {
  if (n && n.o) {
    if (Dr.has(n)) return;
    Dr.add(n), On.c.push(() => {
      Dr.delete(n), i && (r && n.d(1), i());
    }), n.o(e);
  } else i && i();
}
function Ut(n) {
  n && n.c();
}
function Ct(n, e, r) {
  const { fragment: i, after_update: o } = n.$$;
  i && i.m(e, r), ki(() => {
    const a = n.$$.on_mount.map(Ea).filter(wa);
    n.$$.on_destroy ? n.$$.on_destroy.push(...a) : St(a), n.$$.on_mount = [];
  }), o.forEach(ki);
}
function Lt(n, e) {
  const r = n.$$;
  r.fragment !== null && (su(r.after_update), St(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function au(n, e) {
  n.$$.dirty[0] === -1 && (Gn.push(n), iu(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function an(n, e, r, i, o, a, l = null, f = [-1]) {
  const c = wr;
  mr(n);
  const h = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: Qt,
    not_equal: o,
    bound: Po(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: Po(),
    dirty: f,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  l && l(h.root);
  let s = !1;
  if (h.ctx = r ? r(n, e.props || {}, (d, E, ...y) => {
    const b = y.length ? y[0] : E;
    return h.ctx && o(h.ctx[d], h.ctx[d] = b) && (!h.skip_bound && h.bound[d] && h.bound[d](b), s && au(n, d)), E;
  }) : [], h.update(), s = !0, St(h.before_update), h.fragment = i ? i(h.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = nu(e.target);
      h.fragment && h.fragment.l(d), d.forEach(re);
    } else
      h.fragment && h.fragment.c();
    e.intro && ve(n.$$.fragment), Ct(n, e.target, e.anchor), _a();
  }
  mr(c);
}
class ln {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ae(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ae(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Lt(this, 1), this.$destroy = Qt;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, r) {
    if (!wa(r))
      return Qt;
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
    this.$$set && !Kl(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const lu = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(lu);
function uu(n) {
  let e, r, i, o, a;
  const l = (
    /*#slots*/
    n[2].default
  ), f = Jl(
    l,
    n,
    /*$$scope*/
    n[1],
    null
  );
  return {
    c() {
      e = H("div"), r = le(), i = H("div"), f && f.c(), B(e, "class", "oc-dialog-dim"), B(i, "class", o = `oc-dialog ${/*loading*/
      n[0] ? "icon-loading" : ""}`), _r(i, "position", "fixed");
    },
    m(c, h) {
      ie(c, e, h), ie(c, r, h), ie(c, i, h), f && f.m(i, null), a = !0;
    },
    p(c, [h]) {
      f && f.p && (!a || h & /*$$scope*/
      2) && eu(
        f,
        l,
        c,
        /*$$scope*/
        c[1],
        a ? Ql(
          l,
          /*$$scope*/
          c[1],
          h,
          null
        ) : tu(
          /*$$scope*/
          c[1]
        ),
        null
      ), (!a || h & /*loading*/
      1 && o !== (o = `oc-dialog ${/*loading*/
      c[0] ? "icon-loading" : ""}`)) && B(i, "class", o);
    },
    i(c) {
      a || (ve(f, c), a = !0);
    },
    o(c) {
      Se(f, c), a = !1;
    },
    d(c) {
      c && (re(e), re(r), re(i)), f && f.d(c);
    }
  };
}
function cu(n, e, r) {
  let { $$slots: i = {}, $$scope: o } = e, { loading: a = !1 } = e;
  return n.$$set = (l) => {
    "loading" in l && r(0, a = l.loading), "$$scope" in l && r(1, o = l.$$scope);
  }, [a, o, i];
}
class Jn extends ln {
  constructor(e) {
    super(), an(this, e, cu, uu, en, { loading: 0 });
  }
}
const Un = [];
function Ta(n, e = Qt) {
  let r;
  const i = /* @__PURE__ */ new Set();
  function o(f) {
    if (en(n, f) && (n = f, r)) {
      const c = !Un.length;
      for (const h of i)
        h[1](), Un.push(h, n);
      if (c) {
        for (let h = 0; h < Un.length; h += 2)
          Un[h][0](Un[h + 1]);
        Un.length = 0;
      }
    }
  }
  function a(f) {
    o(f(n));
  }
  function l(f, c = Qt) {
    const h = [f, c];
    return i.add(h), i.size === 1 && (r = e(o, a) || Qt), f(n), () => {
      i.delete(h), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: o, update: a, subscribe: l };
}
function eo(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function fu(n) {
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
var to = {}, lt = {};
Object.defineProperty(lt, "__esModule", { value: !0 });
lt.BLANK_URL = lt.relativeFirstCharacters = lt.urlSchemeRegex = lt.ctrlCharactersRegex = lt.htmlCtrlEntityRegex = lt.htmlEntitiesRegex = lt.invalidProtocolRegex = void 0;
lt.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
lt.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
lt.htmlCtrlEntityRegex = /&(newline|tab);/gi;
lt.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
lt.urlSchemeRegex = /^.+(:|&colon;)/gim;
lt.relativeFirstCharacters = [".", "/"];
lt.BLANK_URL = "about:blank";
Object.defineProperty(to, "__esModule", { value: !0 });
var We = to.sanitizeUrl = void 0, Ot = lt;
function hu(n) {
  return Ot.relativeFirstCharacters.indexOf(n[0]) > -1;
}
function pu(n) {
  var e = n.replace(Ot.ctrlCharactersRegex, "");
  return e.replace(Ot.htmlEntitiesRegex, function(r, i) {
    return String.fromCharCode(i);
  });
}
function du(n) {
  if (!n)
    return Ot.BLANK_URL;
  var e, r = n;
  do
    r = pu(r).replace(Ot.htmlCtrlEntityRegex, "").replace(Ot.ctrlCharactersRegex, "").trim(), e = r.match(Ot.ctrlCharactersRegex) || r.match(Ot.htmlEntitiesRegex) || r.match(Ot.htmlCtrlEntityRegex);
  while (e && e.length > 0);
  var i = r;
  if (!i)
    return Ot.BLANK_URL;
  if (hu(i))
    return i;
  var o = i.match(Ot.urlSchemeRegex);
  if (!o)
    return i;
  var a = o[0];
  return Ot.invalidProtocolRegex.test(a) ? Ot.BLANK_URL : i;
}
We = to.sanitizeUrl = du;
function mu(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Na = { exports: {} }, Ve = Na.exports = {}, Yt, Zt;
function Fi() {
  throw new Error("setTimeout has not been defined");
}
function Mi() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Yt = setTimeout : Yt = Fi;
  } catch {
    Yt = Fi;
  }
  try {
    typeof clearTimeout == "function" ? Zt = clearTimeout : Zt = Mi;
  } catch {
    Zt = Mi;
  }
})();
function Ia(n) {
  if (Yt === setTimeout)
    return setTimeout(n, 0);
  if ((Yt === Fi || !Yt) && setTimeout)
    return Yt = setTimeout, setTimeout(n, 0);
  try {
    return Yt(n, 0);
  } catch {
    try {
      return Yt.call(null, n, 0);
    } catch {
      return Yt.call(this, n, 0);
    }
  }
}
function gu(n) {
  if (Zt === clearTimeout)
    return clearTimeout(n);
  if ((Zt === Mi || !Zt) && clearTimeout)
    return Zt = clearTimeout, clearTimeout(n);
  try {
    return Zt(n);
  } catch {
    try {
      return Zt.call(null, n);
    } catch {
      return Zt.call(this, n);
    }
  }
}
var sn = [], Zn = !1, Rn, kr = -1;
function Eu() {
  !Zn || !Rn || (Zn = !1, Rn.length ? sn = Rn.concat(sn) : kr = -1, sn.length && Aa());
}
function Aa() {
  if (!Zn) {
    var n = Ia(Eu);
    Zn = !0;
    for (var e = sn.length; e; ) {
      for (Rn = sn, sn = []; ++kr < e; )
        Rn && Rn[kr].run();
      kr = -1, e = sn.length;
    }
    Rn = null, Zn = !1, gu(n);
  }
}
Ve.nextTick = function(n) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      e[r - 1] = arguments[r];
  sn.push(new Oa(n, e)), sn.length === 1 && !Zn && Ia(Aa);
};
function Oa(n, e) {
  this.fun = n, this.array = e;
}
Oa.prototype.run = function() {
  this.fun.apply(null, this.array);
};
Ve.title = "browser";
Ve.browser = !0;
Ve.env = {};
Ve.argv = [];
Ve.version = "";
Ve.versions = {};
function un() {
}
Ve.on = un;
Ve.addListener = un;
Ve.once = un;
Ve.off = un;
Ve.removeListener = un;
Ve.removeAllListeners = un;
Ve.emit = un;
Ve.prependListener = un;
Ve.prependOnceListener = un;
Ve.listeners = function(n) {
  return [];
};
Ve.binding = function(n) {
  throw new Error("process.binding is not supported");
};
Ve.cwd = function() {
  return "/";
};
Ve.chdir = function(n) {
  throw new Error("process.chdir is not supported");
};
Ve.umask = function() {
  return 0;
};
var wu = Na.exports;
const gt = /* @__PURE__ */ mu(wu), yu = typeof gt == "object" && gt.env && gt.env.NODE_DEBUG && /\bsemver\b/i.test(gt.env.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
};
var Ra = yu;
const Sa = 256, vu = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, bu = 16, _u = Sa - 6;
var Ca = {
  MAX_LENGTH: Sa,
  MAX_SAFE_COMPONENT_LENGTH: bu,
  MAX_SAFE_BUILD_LENGTH: _u,
  MAX_SAFE_INTEGER: vu
}, Ui = { exports: {} };
(function(n, e) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: r,
    MAX_SAFE_BUILD_LENGTH: i,
    MAX_LENGTH: o
  } = Ca, a = Ra;
  e = n.exports = {};
  const l = e.re = [], f = e.safeRe = [], c = e.src = [], h = e.safeSrc = [], s = e.t = {};
  let d = 0;
  const E = "[a-zA-Z0-9-]", y = [
    ["\\s", 1],
    ["\\d", o],
    [E, i]
  ], b = (T) => {
    for (const [O, S] of y)
      T = T.split(`${O}*`).join(`${O}{0,${S}}`).split(`${O}+`).join(`${O}{1,${S}}`);
    return T;
  }, g = (T, O, S) => {
    const L = b(O), R = d++;
    a(T, R, O), s[T] = R, c[R] = O, h[R] = L, l[R] = new RegExp(O, S ? "g" : void 0), f[R] = new RegExp(L, S ? "g" : void 0);
  };
  g("NUMERICIDENTIFIER", "0|[1-9]\\d*"), g("NUMERICIDENTIFIERLOOSE", "\\d+"), g("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${E}*`), g("MAINVERSION", `(${c[s.NUMERICIDENTIFIER]})\\.(${c[s.NUMERICIDENTIFIER]})\\.(${c[s.NUMERICIDENTIFIER]})`), g("MAINVERSIONLOOSE", `(${c[s.NUMERICIDENTIFIERLOOSE]})\\.(${c[s.NUMERICIDENTIFIERLOOSE]})\\.(${c[s.NUMERICIDENTIFIERLOOSE]})`), g("PRERELEASEIDENTIFIER", `(?:${c[s.NONNUMERICIDENTIFIER]}|${c[s.NUMERICIDENTIFIER]})`), g("PRERELEASEIDENTIFIERLOOSE", `(?:${c[s.NONNUMERICIDENTIFIER]}|${c[s.NUMERICIDENTIFIERLOOSE]})`), g("PRERELEASE", `(?:-(${c[s.PRERELEASEIDENTIFIER]}(?:\\.${c[s.PRERELEASEIDENTIFIER]})*))`), g("PRERELEASELOOSE", `(?:-?(${c[s.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[s.PRERELEASEIDENTIFIERLOOSE]})*))`), g("BUILDIDENTIFIER", `${E}+`), g("BUILD", `(?:\\+(${c[s.BUILDIDENTIFIER]}(?:\\.${c[s.BUILDIDENTIFIER]})*))`), g("FULLPLAIN", `v?${c[s.MAINVERSION]}${c[s.PRERELEASE]}?${c[s.BUILD]}?`), g("FULL", `^${c[s.FULLPLAIN]}$`), g("LOOSEPLAIN", `[v=\\s]*${c[s.MAINVERSIONLOOSE]}${c[s.PRERELEASELOOSE]}?${c[s.BUILD]}?`), g("LOOSE", `^${c[s.LOOSEPLAIN]}$`), g("GTLT", "((?:<|>)?=?)"), g("XRANGEIDENTIFIERLOOSE", `${c[s.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), g("XRANGEIDENTIFIER", `${c[s.NUMERICIDENTIFIER]}|x|X|\\*`), g("XRANGEPLAIN", `[v=\\s]*(${c[s.XRANGEIDENTIFIER]})(?:\\.(${c[s.XRANGEIDENTIFIER]})(?:\\.(${c[s.XRANGEIDENTIFIER]})(?:${c[s.PRERELEASE]})?${c[s.BUILD]}?)?)?`), g("XRANGEPLAINLOOSE", `[v=\\s]*(${c[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[s.XRANGEIDENTIFIERLOOSE]})(?:${c[s.PRERELEASELOOSE]})?${c[s.BUILD]}?)?)?`), g("XRANGE", `^${c[s.GTLT]}\\s*${c[s.XRANGEPLAIN]}$`), g("XRANGELOOSE", `^${c[s.GTLT]}\\s*${c[s.XRANGEPLAINLOOSE]}$`), g("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), g("COERCE", `${c[s.COERCEPLAIN]}(?:$|[^\\d])`), g("COERCEFULL", c[s.COERCEPLAIN] + `(?:${c[s.PRERELEASE]})?(?:${c[s.BUILD]})?(?:$|[^\\d])`), g("COERCERTL", c[s.COERCE], !0), g("COERCERTLFULL", c[s.COERCEFULL], !0), g("LONETILDE", "(?:~>?)"), g("TILDETRIM", `(\\s*)${c[s.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", g("TILDE", `^${c[s.LONETILDE]}${c[s.XRANGEPLAIN]}$`), g("TILDELOOSE", `^${c[s.LONETILDE]}${c[s.XRANGEPLAINLOOSE]}$`), g("LONECARET", "(?:\\^)"), g("CARETTRIM", `(\\s*)${c[s.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", g("CARET", `^${c[s.LONECARET]}${c[s.XRANGEPLAIN]}$`), g("CARETLOOSE", `^${c[s.LONECARET]}${c[s.XRANGEPLAINLOOSE]}$`), g("COMPARATORLOOSE", `^${c[s.GTLT]}\\s*(${c[s.LOOSEPLAIN]})$|^$`), g("COMPARATOR", `^${c[s.GTLT]}\\s*(${c[s.FULLPLAIN]})$|^$`), g("COMPARATORTRIM", `(\\s*)${c[s.GTLT]}\\s*(${c[s.LOOSEPLAIN]}|${c[s.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", g("HYPHENRANGE", `^\\s*(${c[s.XRANGEPLAIN]})\\s+-\\s+(${c[s.XRANGEPLAIN]})\\s*$`), g("HYPHENRANGELOOSE", `^\\s*(${c[s.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[s.XRANGEPLAINLOOSE]})\\s*$`), g("STAR", "(<|>)?=?\\s*\\*"), g("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), g("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(Ui, Ui.exports);
var Tu = Ui.exports;
const Nu = Object.freeze({ loose: !0 }), Iu = Object.freeze({}), Au = (n) => n ? typeof n != "object" ? Nu : n : Iu;
var Ou = Au;
const ko = /^[0-9]+$/, Ru = (n, e) => {
  if (typeof n == "number" && typeof e == "number")
    return n === e ? 0 : n < e ? -1 : 1;
  const r = ko.test(n), i = ko.test(e);
  return r && i && (n = +n, e = +e), n === e ? 0 : r && !i ? -1 : i && !r ? 1 : n < e ? -1 : 1;
};
var Su = {
  compareIdentifiers: Ru
};
const Ar = Ra, { MAX_LENGTH: Fo, MAX_SAFE_INTEGER: Or } = Ca, { safeRe: Rr, t: Sr } = Tu, Cu = Ou, { compareIdentifiers: si } = Su;
let Lu = class Xt {
  constructor(e, r) {
    if (r = Cu(r), e instanceof Xt) {
      if (e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
    if (e.length > Fo)
      throw new TypeError(
        `version is longer than ${Fo} characters`
      );
    Ar("SemVer", e, r), this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease;
    const i = e.trim().match(r.loose ? Rr[Sr.LOOSE] : Rr[Sr.FULL]);
    if (!i)
      throw new TypeError(`Invalid Version: ${e}`);
    if (this.raw = e, this.major = +i[1], this.minor = +i[2], this.patch = +i[3], this.major > Or || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > Or || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > Or || this.patch < 0)
      throw new TypeError("Invalid patch version");
    i[4] ? this.prerelease = i[4].split(".").map((o) => {
      if (/^[0-9]+$/.test(o)) {
        const a = +o;
        if (a >= 0 && a < Or)
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
    if (Ar("SemVer.compare", this.version, this.options, e), !(e instanceof Xt)) {
      if (typeof e == "string" && e === this.version)
        return 0;
      e = new Xt(e, this.options);
    }
    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
  }
  compareMain(e) {
    return e instanceof Xt || (e = new Xt(e, this.options)), this.major < e.major ? -1 : this.major > e.major ? 1 : this.minor < e.minor ? -1 : this.minor > e.minor ? 1 : this.patch < e.patch ? -1 : this.patch > e.patch ? 1 : 0;
  }
  comparePre(e) {
    if (e instanceof Xt || (e = new Xt(e, this.options)), this.prerelease.length && !e.prerelease.length)
      return -1;
    if (!this.prerelease.length && e.prerelease.length)
      return 1;
    if (!this.prerelease.length && !e.prerelease.length)
      return 0;
    let r = 0;
    do {
      const i = this.prerelease[r], o = e.prerelease[r];
      if (Ar("prerelease compare", r, i, o), i === void 0 && o === void 0)
        return 0;
      if (o === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === o)
        continue;
      return si(i, o);
    } while (++r);
  }
  compareBuild(e) {
    e instanceof Xt || (e = new Xt(e, this.options));
    let r = 0;
    do {
      const i = this.build[r], o = e.build[r];
      if (Ar("build compare", r, i, o), i === void 0 && o === void 0)
        return 0;
      if (o === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === o)
        continue;
      return si(i, o);
    } while (++r);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(e, r, i) {
    if (e.startsWith("pre")) {
      if (!r && i === !1)
        throw new Error("invalid increment argument: identifier is empty");
      if (r) {
        const o = `-${r}`.match(this.options.loose ? Rr[Sr.PRERELEASELOOSE] : Rr[Sr.PRERELEASE]);
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
          i === !1 && (a = [r]), si(this.prerelease[0], r) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = a) : this.prerelease = a;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${e}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var La = Lu;
const xu = La, Pu = (n, e) => new xu(n, e).major;
var $u = Pu;
const Mo = /* @__PURE__ */ eo($u), Uo = La, Du = (n, e, r = !1) => {
  if (n instanceof Uo)
    return n;
  try {
    return new Uo(n, e);
  } catch (i) {
    if (!r)
      return null;
    throw i;
  }
};
var ku = Du;
const Fu = ku, Mu = (n, e) => {
  const r = Fu(n, e);
  return r ? r.version : null;
};
var Uu = Mu;
const Bu = /* @__PURE__ */ eo(Uu);
/*!
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
class ju {
  constructor(e) {
    ae(this, "bus");
    typeof e.getVersion != "function" || !Bu(e.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Mo(e.getVersion()) !== Mo(this.getVersion()) && console.warn(
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
class Gu {
  constructor() {
    ae(this, "handlers", /* @__PURE__ */ new Map());
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
let rr = null;
function xa() {
  var n;
  return rr !== null ? rr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : ((n = window.OC) != null && n._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof (window == null ? void 0 : window._nc_event_bus) < "u" ? rr = new ju(window._nc_event_bus) : rr = window._nc_event_bus = new Gu(), rr);
}
function Wu(n, e) {
  xa().subscribe(n, e);
}
function Pa(n, ...e) {
  xa().emit(n, ...e);
}
const zn = class zn {
  constructor(e, r, i) {
    ae(this, "scope");
    ae(this, "wrapped");
    this.scope = `${i ? zn.GLOBAL_SCOPE_PERSISTENT : zn.GLOBAL_SCOPE_VOLATILE}_${btoa(e)}_`, this.wrapped = r;
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
ae(zn, "GLOBAL_SCOPE_VOLATILE", "nextcloud_vol"), ae(zn, "GLOBAL_SCOPE_PERSISTENT", "nextcloud_per");
let Bi = zn;
class Vu {
  constructor(e) {
    ae(this, "appId");
    ae(this, "persisted", !1);
    ae(this, "clearedOnLogout", !1);
    this.appId = e;
  }
  persist(e = !0) {
    return this.persisted = e, this;
  }
  clearOnLogout(e = !0) {
    return this.clearedOnLogout = e, this;
  }
  build() {
    return new Bi(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function qu(n) {
  return new Vu(n);
}
let gr;
const $a = [];
function Da() {
  return gr === void 0 && (gr = document.head.dataset.requesttoken ?? null), gr;
}
function ka(n) {
  $a.push(n);
}
Wu("csrf-token-update", (n) => {
  gr = n.token, $a.forEach((e) => {
    try {
      e(gr);
    } catch (r) {
      console.error("Error updating CSRF token observer", r);
    }
  });
});
/*!
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
qu("public").persist().build();
let Bn;
function Bo(n, e) {
  return n ? n.getAttribute(e) : null;
}
function Tr() {
  if (Bn !== void 0)
    return Bn;
  const n = document == null ? void 0 : document.getElementsByTagName("head")[0];
  if (!n)
    return null;
  const e = Bo(n, "data-user");
  return e === null ? (Bn = null, Bn) : (Bn = {
    uid: e,
    displayName: Bo(n, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Bn);
}
var ze = /* @__PURE__ */ ((n) => (n[n.Debug = 0] = "Debug", n[n.Info = 1] = "Info", n[n.Warn = 2] = "Warn", n[n.Error = 3] = "Error", n[n.Fatal = 4] = "Fatal", n))(ze || {});
class zu {
  constructor(e) {
    ae(this, "context");
    this.context = e || {};
  }
  formatMessage(e, r, i) {
    let o = "[" + ze[r].toUpperCase() + "] ";
    return i && i.app && (o += i.app + ": "), typeof e == "string" ? o + e : (o += `Unexpected ${e.name}`, e.message && (o += ` "${e.message}"`), r === ze.Debug && e.stack && (o += `

Stack trace:
${e.stack}`), o);
  }
  log(e, r, i) {
    var o, a;
    if (!(typeof ((o = this.context) == null ? void 0 : o.level) == "number" && e < ((a = this.context) == null ? void 0 : a.level)))
      switch (typeof r == "object" && (i == null ? void 0 : i.error) === void 0 && (i.error = r), e) {
        case ze.Debug:
          console.debug(this.formatMessage(r, ze.Debug, i), i);
          break;
        case ze.Info:
          console.info(this.formatMessage(r, ze.Info, i), i);
          break;
        case ze.Warn:
          console.warn(this.formatMessage(r, ze.Warn, i), i);
          break;
        case ze.Error:
          console.error(this.formatMessage(r, ze.Error, i), i);
          break;
        case ze.Fatal:
        default:
          console.error(this.formatMessage(r, ze.Fatal, i), i);
          break;
      }
  }
  debug(e, r) {
    this.log(ze.Debug, e, Object.assign({}, this.context, r));
  }
  info(e, r) {
    this.log(ze.Info, e, Object.assign({}, this.context, r));
  }
  warn(e, r) {
    this.log(ze.Warn, e, Object.assign({}, this.context, r));
  }
  error(e, r) {
    this.log(ze.Error, e, Object.assign({}, this.context, r));
  }
  fatal(e, r) {
    this.log(ze.Fatal, e, Object.assign({}, this.context, r));
  }
}
function Xu(n) {
  return new zu(n);
}
class Hu {
  constructor(e) {
    ae(this, "context");
    ae(this, "factory");
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
    const e = Tr();
    return e !== null && (this.context.uid = e.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const e = this, r = () => {
      var i;
      document.readyState === "complete" || document.readyState === "interactive" ? (e.context.level = ((i = window._oc_config) == null ? void 0 : i.loglevel) ?? ze.Warn, window._oc_debug && (e.context.level = ze.Debug), document.removeEventListener("readystatechange", r)) : document.addEventListener("readystatechange", r);
    };
    return r(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function Fa() {
  return new Hu(Xu);
}
function ji(n) {
  return n && n.split("/").map(encodeURIComponent).join("/");
}
function no(n, e) {
  return n = n.replace(/\\/g, "/").replace(/\/+$/g, "").replace(/.*\//, ""), n;
}
function Wn(n) {
  n = n.replaceAll(/\\/g, "/");
  const e = n.split("/");
  return e.length <= 1 ? "." : (e.pop(), e.length === 1 && e[0] === "" ? "/" : e.join("/"));
}
function Ma(n) {
  const e = no(n), r = e.lastIndexOf(".");
  return r > 0 ? e.substring(r) : "";
}
function Ua(...n) {
  if (arguments.length < 1)
    return "";
  const e = n.filter((c) => c.length > 0);
  if (e.length < 1)
    return "";
  const r = e[e.length - 1], i = e[0].charAt(0) === "/", o = r.charAt(r.length - 1) === "/", a = e.reduce((c, h) => c.concat(h.split("/")), []);
  let l = !i;
  const f = a.reduce((c, h) => h === "" ? c : l ? (l = !1, c + h) : c + "/" + h, "");
  return o ? f + "/" : f;
}
window._nc_files_scope ?? (window._nc_files_scope = {});
var pa;
(pa = window._nc_files_scope).v4_0 ?? (pa.v4_0 = {});
const ke = window._nc_files_scope.v4_0, Ba = Fa().setApp("@nextcloud/files").detectUser().build(), ja = Object.freeze({
  Folder: "folder",
  File: "file"
}), ut = Object.freeze({
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
}), Ga = Object.freeze({
  /** This is a new node and it doesn't exists on the filesystem yet */
  NEW: "new",
  /** This node has failed and is unavailable  */
  FAILED: "failed",
  /** This node is currently loading or have an operation in progress */
  LOADING: "loading",
  /** This node is locked and cannot be modified */
  LOCKED: "locked"
});
function Wa(n, e) {
  return n.match(e) !== null;
}
function fn(n, e) {
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
  if (Wa(n.source, e)) {
    const r = n.source.match(e)[0];
    if (!n.source.includes(Ua(r, n.root)))
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
  if ("permissions" in n && n.permissions !== void 0 && !(typeof n.permissions == "number" && n.permissions >= ut.NONE && n.permissions <= ut.ALL))
    throw new Error("Invalid permissions");
  if (n.owner && n.owner !== null && typeof n.owner != "string")
    throw new Error("Invalid owner type");
  if (n.attributes && typeof n.attributes != "object")
    throw new Error("Invalid attributes type");
  if (n.status && !Object.values(Ga).includes(n.status))
    throw new Error("Status must be a valid NodeStatus");
}
function Yu(n) {
  n.mtime && typeof n.mtime == "string" && !isNaN(Date.parse(n.mtime)) && JSON.stringify(new Date(n.mtime)) === JSON.stringify(n.mtime) && (n.mtime = new Date(n.mtime)), n.crtime && typeof n.crtime == "string" && !isNaN(Date.parse(n.crtime)) && JSON.stringify(new Date(n.crtime)) === JSON.stringify(n.crtime) && (n.crtime = new Date(n.crtime));
}
function Zu(n) {
  if (n instanceof RegExp)
    return n;
  const e = n.match(/(\/?)(.+)\1([a-z]*)/i);
  if (!e)
    throw new Error("Invalid regular expression format.");
  const r = Array.from(new Set(e[3])).filter((i) => "gimsuy".includes(i)).join("");
  return new RegExp(e[2], r);
}
let Va = class qa {
  constructor(...[e, r]) {
    ae(this, "_attributes");
    ae(this, "_data");
    ae(this, "_knownDavService", /(remote|public)\.php\/(web)?dav/i);
    ae(this, "readonlyAttributes", Object.entries(Object.getOwnPropertyDescriptors(qa.prototype)).filter((e) => typeof e[1].get == "function" && e[0] !== "__proto__").map((e) => e[0]));
    ae(this, "handler", {
      set: (e, r, i) => this.readonlyAttributes.includes(r) ? !1 : Reflect.set(e, r, i),
      deleteProperty: (e, r) => this.readonlyAttributes.includes(r) ? !1 : Reflect.deleteProperty(e, r)
    });
    e.mime || (e.mime = "application/octet-stream"), Yu(e), r = Zu(r || this._knownDavService), fn(e, r), this._data = {
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
    return e + ji(this.source.slice(e.length));
  }
  /**
   * Get this object name
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get basename() {
    return no(this.source);
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
    fn({ ...this._data, displayname: e }, this._knownDavService), this._data.displayname = e;
  }
  /**
   * Get this object's extension
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get extension() {
    return Ma(this.source);
  }
  /**
   * Get the directory path leading to this object
   * Will use the relative path to root if available
   *
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get dirname() {
    return Wn(this.path);
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
    e ?? (e = "application/octet-stream"), fn({ ...this._data, mime: e }, this._knownDavService), this._data.mime = e;
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
    fn({ ...this._data, mtime: e }, this._knownDavService), this._data.mtime = e;
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
    fn({ ...this._data, size: e }, this._knownDavService), this.updateMtime(), this._data.size = e;
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
    return this.owner === null && !this.isDavResource ? ut.READ : this._data.permissions !== void 0 ? this._data.permissions : ut.NONE;
  }
  /**
   * Set the file permissions
   */
  set permissions(e) {
    fn({ ...this._data, permissions: e }, this._knownDavService), this.updateMtime(), this._data.permissions = e;
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
    return Wa(this.source, this._knownDavService);
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
    const e = this.source.indexOf("://"), r = this.source.slice(0, e), i = this.source.slice(e + 3), o = i.indexOf("/"), a = i.slice(0, o), l = i.slice(o), f = `${r}://${a}${ji(l)}`, c = new URL(f);
    let h = decodeURIComponent(c.pathname);
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
    fn({ ...this._data, status: e }, this._knownDavService), this._data.status = e;
  }
  /**
   * Move the node to a new destination
   *
   * @param destination the new source.
   * e.g. https://cloud.domain.com/remote.php/dav/files/emma/Photos/picture.jpg
   */
  move(e) {
    fn({ ...this._data, source: e }, this._knownDavService);
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
    this.move(Wn(this.source) + "/" + e);
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
}, Ku = class extends Va {
  constructor(...[e, r]) {
    super(e, r);
  }
  get type() {
    return ja.File;
  }
}, Ju = class extends Va {
  constructor(...[e, r]) {
    super({
      ...e,
      mime: "httpd/unix-directory"
    }, r);
  }
  get type() {
    return ja.Folder;
  }
  get extension() {
    return null;
  }
  get mime() {
    return "httpd/unix-directory";
  }
};
var Qu = class extends EventTarget {
  dispatchTypedEvent(e, r) {
    return super.dispatchEvent(r);
  }
}, Je = {}, Yr = {};
Yr.byteLength = nc;
Yr.toByteArray = ic;
Yr.fromByteArray = ac;
var Jt = [], Dt = [], ec = typeof Uint8Array < "u" ? Uint8Array : Array, ai = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var jn = 0, tc = ai.length; jn < tc; ++jn)
  Jt[jn] = ai[jn], Dt[ai.charCodeAt(jn)] = jn;
Dt[45] = 62;
Dt[95] = 63;
function za(n) {
  var e = n.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = n.indexOf("=");
  r === -1 && (r = e);
  var i = r === e ? 0 : 4 - r % 4;
  return [r, i];
}
function nc(n) {
  var e = za(n), r = e[0], i = e[1];
  return (r + i) * 3 / 4 - i;
}
function rc(n, e, r) {
  return (e + r) * 3 / 4 - r;
}
function ic(n) {
  var e, r = za(n), i = r[0], o = r[1], a = new ec(rc(n, i, o)), l = 0, f = o > 0 ? i - 4 : i, c;
  for (c = 0; c < f; c += 4)
    e = Dt[n.charCodeAt(c)] << 18 | Dt[n.charCodeAt(c + 1)] << 12 | Dt[n.charCodeAt(c + 2)] << 6 | Dt[n.charCodeAt(c + 3)], a[l++] = e >> 16 & 255, a[l++] = e >> 8 & 255, a[l++] = e & 255;
  return o === 2 && (e = Dt[n.charCodeAt(c)] << 2 | Dt[n.charCodeAt(c + 1)] >> 4, a[l++] = e & 255), o === 1 && (e = Dt[n.charCodeAt(c)] << 10 | Dt[n.charCodeAt(c + 1)] << 4 | Dt[n.charCodeAt(c + 2)] >> 2, a[l++] = e >> 8 & 255, a[l++] = e & 255), a;
}
function oc(n) {
  return Jt[n >> 18 & 63] + Jt[n >> 12 & 63] + Jt[n >> 6 & 63] + Jt[n & 63];
}
function sc(n, e, r) {
  for (var i, o = [], a = e; a < r; a += 3)
    i = (n[a] << 16 & 16711680) + (n[a + 1] << 8 & 65280) + (n[a + 2] & 255), o.push(oc(i));
  return o.join("");
}
function ac(n) {
  for (var e, r = n.length, i = r % 3, o = [], a = 16383, l = 0, f = r - i; l < f; l += a)
    o.push(sc(n, l, l + a > f ? f : l + a));
  return i === 1 ? (e = n[r - 1], o.push(
    Jt[e >> 2] + Jt[e << 4 & 63] + "=="
  )) : i === 2 && (e = (n[r - 2] << 8) + n[r - 1], o.push(
    Jt[e >> 10] + Jt[e >> 4 & 63] + Jt[e << 2 & 63] + "="
  )), o.join("");
}
var ro = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
ro.read = function(n, e, r, i, o) {
  var a, l, f = o * 8 - i - 1, c = (1 << f) - 1, h = c >> 1, s = -7, d = r ? o - 1 : 0, E = r ? -1 : 1, y = n[e + d];
  for (d += E, a = y & (1 << -s) - 1, y >>= -s, s += f; s > 0; a = a * 256 + n[e + d], d += E, s -= 8)
    ;
  for (l = a & (1 << -s) - 1, a >>= -s, s += i; s > 0; l = l * 256 + n[e + d], d += E, s -= 8)
    ;
  if (a === 0)
    a = 1 - h;
  else {
    if (a === c)
      return l ? NaN : (y ? -1 : 1) * (1 / 0);
    l = l + Math.pow(2, i), a = a - h;
  }
  return (y ? -1 : 1) * l * Math.pow(2, a - i);
};
ro.write = function(n, e, r, i, o, a) {
  var l, f, c, h = a * 8 - o - 1, s = (1 << h) - 1, d = s >> 1, E = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, y = i ? 0 : a - 1, b = i ? 1 : -1, g = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (f = isNaN(e) ? 1 : 0, l = s) : (l = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -l)) < 1 && (l--, c *= 2), l + d >= 1 ? e += E / c : e += E * Math.pow(2, 1 - d), e * c >= 2 && (l++, c /= 2), l + d >= s ? (f = 0, l = s) : l + d >= 1 ? (f = (e * c - 1) * Math.pow(2, o), l = l + d) : (f = e * Math.pow(2, d - 1) * Math.pow(2, o), l = 0)); o >= 8; n[r + y] = f & 255, y += b, f /= 256, o -= 8)
    ;
  for (l = l << o | f, h += o; h > 0; n[r + y] = l & 255, y += b, l /= 256, h -= 8)
    ;
  n[r + y - b] |= g * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(n) {
  const e = Yr, r = ro, i = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  n.Buffer = s, n.SlowBuffer = M, n.INSPECT_MAX_BYTES = 50;
  const o = 2147483647;
  n.kMaxLength = o;
  const { Uint8Array: a, ArrayBuffer: l, SharedArrayBuffer: f } = globalThis;
  s.TYPED_ARRAY_SUPPORT = c(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function c() {
    try {
      const m = new a(1), u = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(u, a.prototype), Object.setPrototypeOf(m, u), m.foo() === 42;
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
  function h(m) {
    if (m > o)
      throw new RangeError('The value "' + m + '" is invalid for option "size"');
    const u = new a(m);
    return Object.setPrototypeOf(u, s.prototype), u;
  }
  function s(m, u, p) {
    if (typeof m == "number") {
      if (typeof u == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return b(m);
    }
    return d(m, u, p);
  }
  s.poolSize = 8192;
  function d(m, u, p) {
    if (typeof m == "string")
      return g(m, u);
    if (l.isView(m))
      return O(m);
    if (m == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m
      );
    if (Le(m, l) || m && Le(m.buffer, l) || typeof f < "u" && (Le(m, f) || m && Le(m.buffer, f)))
      return S(m, u, p);
    if (typeof m == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const v = m.valueOf && m.valueOf();
    if (v != null && v !== m)
      return s.from(v, u, p);
    const A = L(m);
    if (A) return A;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof m[Symbol.toPrimitive] == "function")
      return s.from(m[Symbol.toPrimitive]("string"), u, p);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m
    );
  }
  s.from = function(m, u, p) {
    return d(m, u, p);
  }, Object.setPrototypeOf(s.prototype, a.prototype), Object.setPrototypeOf(s, a);
  function E(m) {
    if (typeof m != "number")
      throw new TypeError('"size" argument must be of type number');
    if (m < 0)
      throw new RangeError('The value "' + m + '" is invalid for option "size"');
  }
  function y(m, u, p) {
    return E(m), m <= 0 ? h(m) : u !== void 0 ? typeof p == "string" ? h(m).fill(u, p) : h(m).fill(u) : h(m);
  }
  s.alloc = function(m, u, p) {
    return y(m, u, p);
  };
  function b(m) {
    return E(m), h(m < 0 ? 0 : R(m) | 0);
  }
  s.allocUnsafe = function(m) {
    return b(m);
  }, s.allocUnsafeSlow = function(m) {
    return b(m);
  };
  function g(m, u) {
    if ((typeof u != "string" || u === "") && (u = "utf8"), !s.isEncoding(u))
      throw new TypeError("Unknown encoding: " + u);
    const p = Y(m, u) | 0;
    let v = h(p);
    const A = v.write(m, u);
    return A !== p && (v = v.slice(0, A)), v;
  }
  function T(m) {
    const u = m.length < 0 ? 0 : R(m.length) | 0, p = h(u);
    for (let v = 0; v < u; v += 1)
      p[v] = m[v] & 255;
    return p;
  }
  function O(m) {
    if (Le(m, a)) {
      const u = new a(m);
      return S(u.buffer, u.byteOffset, u.byteLength);
    }
    return T(m);
  }
  function S(m, u, p) {
    if (u < 0 || m.byteLength < u)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (m.byteLength < u + (p || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let v;
    return u === void 0 && p === void 0 ? v = new a(m) : p === void 0 ? v = new a(m, u) : v = new a(m, u, p), Object.setPrototypeOf(v, s.prototype), v;
  }
  function L(m) {
    if (s.isBuffer(m)) {
      const u = R(m.length) | 0, p = h(u);
      return p.length === 0 || m.copy(p, 0, 0, u), p;
    }
    if (m.length !== void 0)
      return typeof m.length != "number" || w(m.length) ? h(0) : T(m);
    if (m.type === "Buffer" && Array.isArray(m.data))
      return T(m.data);
  }
  function R(m) {
    if (m >= o)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
    return m | 0;
  }
  function M(m) {
    return +m != m && (m = 0), s.alloc(+m);
  }
  s.isBuffer = function(u) {
    return u != null && u._isBuffer === !0 && u !== s.prototype;
  }, s.compare = function(u, p) {
    if (Le(u, a) && (u = s.from(u, u.offset, u.byteLength)), Le(p, a) && (p = s.from(p, p.offset, p.byteLength)), !s.isBuffer(u) || !s.isBuffer(p))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (u === p) return 0;
    let v = u.length, A = p.length;
    for (let $ = 0, F = Math.min(v, A); $ < F; ++$)
      if (u[$] !== p[$]) {
        v = u[$], A = p[$];
        break;
      }
    return v < A ? -1 : A < v ? 1 : 0;
  }, s.isEncoding = function(u) {
    switch (String(u).toLowerCase()) {
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
  }, s.concat = function(u, p) {
    if (!Array.isArray(u))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (u.length === 0)
      return s.alloc(0);
    let v;
    if (p === void 0)
      for (p = 0, v = 0; v < u.length; ++v)
        p += u[v].length;
    const A = s.allocUnsafe(p);
    let $ = 0;
    for (v = 0; v < u.length; ++v) {
      let F = u[v];
      if (Le(F, a))
        $ + F.length > A.length ? (s.isBuffer(F) || (F = s.from(F)), F.copy(A, $)) : a.prototype.set.call(
          A,
          F,
          $
        );
      else if (s.isBuffer(F))
        F.copy(A, $);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      $ += F.length;
    }
    return A;
  };
  function Y(m, u) {
    if (s.isBuffer(m))
      return m.length;
    if (l.isView(m) || Le(m, l))
      return m.byteLength;
    if (typeof m != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof m
      );
    const p = m.length, v = arguments.length > 2 && arguments[2] === !0;
    if (!v && p === 0) return 0;
    let A = !1;
    for (; ; )
      switch (u) {
        case "ascii":
        case "latin1":
        case "binary":
          return p;
        case "utf8":
        case "utf-8":
          return rt(m).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return p * 2;
        case "hex":
          return p >>> 1;
        case "base64":
          return Dn(m).length;
        default:
          if (A)
            return v ? -1 : rt(m).length;
          u = ("" + u).toLowerCase(), A = !0;
      }
  }
  s.byteLength = Y;
  function X(m, u, p) {
    let v = !1;
    if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((p === void 0 || p > this.length) && (p = this.length), p <= 0) || (p >>>= 0, u >>>= 0, p <= u))
      return "";
    for (m || (m = "utf8"); ; )
      switch (m) {
        case "hex":
          return Ue(this, u, p);
        case "utf8":
        case "utf-8":
          return K(this, u, p);
        case "ascii":
          return Me(this, u, p);
        case "latin1":
        case "binary":
          return fe(this, u, p);
        case "base64":
          return Ie(this, u, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Ee(this, u, p);
        default:
          if (v) throw new TypeError("Unknown encoding: " + m);
          m = (m + "").toLowerCase(), v = !0;
      }
  }
  s.prototype._isBuffer = !0;
  function oe(m, u, p) {
    const v = m[u];
    m[u] = m[p], m[p] = v;
  }
  s.prototype.swap16 = function() {
    const u = this.length;
    if (u % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let p = 0; p < u; p += 2)
      oe(this, p, p + 1);
    return this;
  }, s.prototype.swap32 = function() {
    const u = this.length;
    if (u % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let p = 0; p < u; p += 4)
      oe(this, p, p + 3), oe(this, p + 1, p + 2);
    return this;
  }, s.prototype.swap64 = function() {
    const u = this.length;
    if (u % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let p = 0; p < u; p += 8)
      oe(this, p, p + 7), oe(this, p + 1, p + 6), oe(this, p + 2, p + 5), oe(this, p + 3, p + 4);
    return this;
  }, s.prototype.toString = function() {
    const u = this.length;
    return u === 0 ? "" : arguments.length === 0 ? K(this, 0, u) : X.apply(this, arguments);
  }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(u) {
    if (!s.isBuffer(u)) throw new TypeError("Argument must be a Buffer");
    return this === u ? !0 : s.compare(this, u) === 0;
  }, s.prototype.inspect = function() {
    let u = "";
    const p = n.INSPECT_MAX_BYTES;
    return u = this.toString("hex", 0, p).replace(/(.{2})/g, "$1 ").trim(), this.length > p && (u += " ... "), "<Buffer " + u + ">";
  }, i && (s.prototype[i] = s.prototype.inspect), s.prototype.compare = function(u, p, v, A, $) {
    if (Le(u, a) && (u = s.from(u, u.offset, u.byteLength)), !s.isBuffer(u))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u
      );
    if (p === void 0 && (p = 0), v === void 0 && (v = u ? u.length : 0), A === void 0 && (A = 0), $ === void 0 && ($ = this.length), p < 0 || v > u.length || A < 0 || $ > this.length)
      throw new RangeError("out of range index");
    if (A >= $ && p >= v)
      return 0;
    if (A >= $)
      return -1;
    if (p >= v)
      return 1;
    if (p >>>= 0, v >>>= 0, A >>>= 0, $ >>>= 0, this === u) return 0;
    let F = $ - A, V = v - p;
    const Q = Math.min(F, V), he = this.slice(A, $), ce = u.slice(p, v);
    for (let me = 0; me < Q; ++me)
      if (he[me] !== ce[me]) {
        F = he[me], V = ce[me];
        break;
      }
    return F < V ? -1 : V < F ? 1 : 0;
  };
  function x(m, u, p, v, A) {
    if (m.length === 0) return -1;
    if (typeof p == "string" ? (v = p, p = 0) : p > 2147483647 ? p = 2147483647 : p < -2147483648 && (p = -2147483648), p = +p, w(p) && (p = A ? 0 : m.length - 1), p < 0 && (p = m.length + p), p >= m.length) {
      if (A) return -1;
      p = m.length - 1;
    } else if (p < 0)
      if (A) p = 0;
      else return -1;
    if (typeof u == "string" && (u = s.from(u, v)), s.isBuffer(u))
      return u.length === 0 ? -1 : ge(m, u, p, v, A);
    if (typeof u == "number")
      return u = u & 255, typeof a.prototype.indexOf == "function" ? A ? a.prototype.indexOf.call(m, u, p) : a.prototype.lastIndexOf.call(m, u, p) : ge(m, [u], p, v, A);
    throw new TypeError("val must be string, number or Buffer");
  }
  function ge(m, u, p, v, A) {
    let $ = 1, F = m.length, V = u.length;
    if (v !== void 0 && (v = String(v).toLowerCase(), v === "ucs2" || v === "ucs-2" || v === "utf16le" || v === "utf-16le")) {
      if (m.length < 2 || u.length < 2)
        return -1;
      $ = 2, F /= 2, V /= 2, p /= 2;
    }
    function Q(ce, me) {
      return $ === 1 ? ce[me] : ce.readUInt16BE(me * $);
    }
    let he;
    if (A) {
      let ce = -1;
      for (he = p; he < F; he++)
        if (Q(m, he) === Q(u, ce === -1 ? 0 : he - ce)) {
          if (ce === -1 && (ce = he), he - ce + 1 === V) return ce * $;
        } else
          ce !== -1 && (he -= he - ce), ce = -1;
    } else
      for (p + V > F && (p = F - V), he = p; he >= 0; he--) {
        let ce = !0;
        for (let me = 0; me < V; me++)
          if (Q(m, he + me) !== Q(u, me)) {
            ce = !1;
            break;
          }
        if (ce) return he;
      }
    return -1;
  }
  s.prototype.includes = function(u, p, v) {
    return this.indexOf(u, p, v) !== -1;
  }, s.prototype.indexOf = function(u, p, v) {
    return x(this, u, p, v, !0);
  }, s.prototype.lastIndexOf = function(u, p, v) {
    return x(this, u, p, v, !1);
  };
  function z(m, u, p, v) {
    p = Number(p) || 0;
    const A = m.length - p;
    v ? (v = Number(v), v > A && (v = A)) : v = A;
    const $ = u.length;
    v > $ / 2 && (v = $ / 2);
    let F;
    for (F = 0; F < v; ++F) {
      const V = parseInt(u.substr(F * 2, 2), 16);
      if (w(V)) return F;
      m[p + F] = V;
    }
    return F;
  }
  function Z(m, u, p, v) {
    return te(rt(u, m.length - p), m, p, v);
  }
  function j(m, u, p, v) {
    return te(Bt(u), m, p, v);
  }
  function se(m, u, p, v) {
    return te(Dn(u), m, p, v);
  }
  function de(m, u, p, v) {
    return te(Vt(u, m.length - p), m, p, v);
  }
  s.prototype.write = function(u, p, v, A) {
    if (p === void 0)
      A = "utf8", v = this.length, p = 0;
    else if (v === void 0 && typeof p == "string")
      A = p, v = this.length, p = 0;
    else if (isFinite(p))
      p = p >>> 0, isFinite(v) ? (v = v >>> 0, A === void 0 && (A = "utf8")) : (A = v, v = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const $ = this.length - p;
    if ((v === void 0 || v > $) && (v = $), u.length > 0 && (v < 0 || p < 0) || p > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    A || (A = "utf8");
    let F = !1;
    for (; ; )
      switch (A) {
        case "hex":
          return z(this, u, p, v);
        case "utf8":
        case "utf-8":
          return Z(this, u, p, v);
        case "ascii":
        case "latin1":
        case "binary":
          return j(this, u, p, v);
        case "base64":
          return se(this, u, p, v);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return de(this, u, p, v);
        default:
          if (F) throw new TypeError("Unknown encoding: " + A);
          A = ("" + A).toLowerCase(), F = !0;
      }
  }, s.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function Ie(m, u, p) {
    return u === 0 && p === m.length ? e.fromByteArray(m) : e.fromByteArray(m.slice(u, p));
  }
  function K(m, u, p) {
    p = Math.min(m.length, p);
    const v = [];
    let A = u;
    for (; A < p; ) {
      const $ = m[A];
      let F = null, V = $ > 239 ? 4 : $ > 223 ? 3 : $ > 191 ? 2 : 1;
      if (A + V <= p) {
        let Q, he, ce, me;
        switch (V) {
          case 1:
            $ < 128 && (F = $);
            break;
          case 2:
            Q = m[A + 1], (Q & 192) === 128 && (me = ($ & 31) << 6 | Q & 63, me > 127 && (F = me));
            break;
          case 3:
            Q = m[A + 1], he = m[A + 2], (Q & 192) === 128 && (he & 192) === 128 && (me = ($ & 15) << 12 | (Q & 63) << 6 | he & 63, me > 2047 && (me < 55296 || me > 57343) && (F = me));
            break;
          case 4:
            Q = m[A + 1], he = m[A + 2], ce = m[A + 3], (Q & 192) === 128 && (he & 192) === 128 && (ce & 192) === 128 && (me = ($ & 15) << 18 | (Q & 63) << 12 | (he & 63) << 6 | ce & 63, me > 65535 && me < 1114112 && (F = me));
        }
      }
      F === null ? (F = 65533, V = 1) : F > 65535 && (F -= 65536, v.push(F >>> 10 & 1023 | 55296), F = 56320 | F & 1023), v.push(F), A += V;
    }
    return Fe(v);
  }
  const be = 4096;
  function Fe(m) {
    const u = m.length;
    if (u <= be)
      return String.fromCharCode.apply(String, m);
    let p = "", v = 0;
    for (; v < u; )
      p += String.fromCharCode.apply(
        String,
        m.slice(v, v += be)
      );
    return p;
  }
  function Me(m, u, p) {
    let v = "";
    p = Math.min(m.length, p);
    for (let A = u; A < p; ++A)
      v += String.fromCharCode(m[A] & 127);
    return v;
  }
  function fe(m, u, p) {
    let v = "";
    p = Math.min(m.length, p);
    for (let A = u; A < p; ++A)
      v += String.fromCharCode(m[A]);
    return v;
  }
  function Ue(m, u, p) {
    const v = m.length;
    (!u || u < 0) && (u = 0), (!p || p < 0 || p > v) && (p = v);
    let A = "";
    for (let $ = u; $ < p; ++$)
      A += N[m[$]];
    return A;
  }
  function Ee(m, u, p) {
    const v = m.slice(u, p);
    let A = "";
    for (let $ = 0; $ < v.length - 1; $ += 2)
      A += String.fromCharCode(v[$] + v[$ + 1] * 256);
    return A;
  }
  s.prototype.slice = function(u, p) {
    const v = this.length;
    u = ~~u, p = p === void 0 ? v : ~~p, u < 0 ? (u += v, u < 0 && (u = 0)) : u > v && (u = v), p < 0 ? (p += v, p < 0 && (p = 0)) : p > v && (p = v), p < u && (p = u);
    const A = this.subarray(u, p);
    return Object.setPrototypeOf(A, s.prototype), A;
  };
  function we(m, u, p) {
    if (m % 1 !== 0 || m < 0) throw new RangeError("offset is not uint");
    if (m + u > p) throw new RangeError("Trying to access beyond buffer length");
  }
  s.prototype.readUintLE = s.prototype.readUIntLE = function(u, p, v) {
    u = u >>> 0, p = p >>> 0, v || we(u, p, this.length);
    let A = this[u], $ = 1, F = 0;
    for (; ++F < p && ($ *= 256); )
      A += this[u + F] * $;
    return A;
  }, s.prototype.readUintBE = s.prototype.readUIntBE = function(u, p, v) {
    u = u >>> 0, p = p >>> 0, v || we(u, p, this.length);
    let A = this[u + --p], $ = 1;
    for (; p > 0 && ($ *= 256); )
      A += this[u + --p] * $;
    return A;
  }, s.prototype.readUint8 = s.prototype.readUInt8 = function(u, p) {
    return u = u >>> 0, p || we(u, 1, this.length), this[u];
  }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(u, p) {
    return u = u >>> 0, p || we(u, 2, this.length), this[u] | this[u + 1] << 8;
  }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(u, p) {
    return u = u >>> 0, p || we(u, 2, this.length), this[u] << 8 | this[u + 1];
  }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(u, p) {
    return u = u >>> 0, p || we(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216;
  }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(u, p) {
    return u = u >>> 0, p || we(u, 4, this.length), this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]);
  }, s.prototype.readBigUInt64LE = C(function(u) {
    u = u >>> 0, Ye(u, "offset");
    const p = this[u], v = this[u + 7];
    (p === void 0 || v === void 0) && Ne(u, this.length - 8);
    const A = p + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24, $ = this[++u] + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + v * 2 ** 24;
    return BigInt(A) + (BigInt($) << BigInt(32));
  }), s.prototype.readBigUInt64BE = C(function(u) {
    u = u >>> 0, Ye(u, "offset");
    const p = this[u], v = this[u + 7];
    (p === void 0 || v === void 0) && Ne(u, this.length - 8);
    const A = p * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u], $ = this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + v;
    return (BigInt(A) << BigInt(32)) + BigInt($);
  }), s.prototype.readIntLE = function(u, p, v) {
    u = u >>> 0, p = p >>> 0, v || we(u, p, this.length);
    let A = this[u], $ = 1, F = 0;
    for (; ++F < p && ($ *= 256); )
      A += this[u + F] * $;
    return $ *= 128, A >= $ && (A -= Math.pow(2, 8 * p)), A;
  }, s.prototype.readIntBE = function(u, p, v) {
    u = u >>> 0, p = p >>> 0, v || we(u, p, this.length);
    let A = p, $ = 1, F = this[u + --A];
    for (; A > 0 && ($ *= 256); )
      F += this[u + --A] * $;
    return $ *= 128, F >= $ && (F -= Math.pow(2, 8 * p)), F;
  }, s.prototype.readInt8 = function(u, p) {
    return u = u >>> 0, p || we(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u];
  }, s.prototype.readInt16LE = function(u, p) {
    u = u >>> 0, p || we(u, 2, this.length);
    const v = this[u] | this[u + 1] << 8;
    return v & 32768 ? v | 4294901760 : v;
  }, s.prototype.readInt16BE = function(u, p) {
    u = u >>> 0, p || we(u, 2, this.length);
    const v = this[u + 1] | this[u] << 8;
    return v & 32768 ? v | 4294901760 : v;
  }, s.prototype.readInt32LE = function(u, p) {
    return u = u >>> 0, p || we(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24;
  }, s.prototype.readInt32BE = function(u, p) {
    return u = u >>> 0, p || we(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3];
  }, s.prototype.readBigInt64LE = C(function(u) {
    u = u >>> 0, Ye(u, "offset");
    const p = this[u], v = this[u + 7];
    (p === void 0 || v === void 0) && Ne(u, this.length - 8);
    const A = this[u + 4] + this[u + 5] * 2 ** 8 + this[u + 6] * 2 ** 16 + (v << 24);
    return (BigInt(A) << BigInt(32)) + BigInt(p + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24);
  }), s.prototype.readBigInt64BE = C(function(u) {
    u = u >>> 0, Ye(u, "offset");
    const p = this[u], v = this[u + 7];
    (p === void 0 || v === void 0) && Ne(u, this.length - 8);
    const A = (p << 24) + // Overflow
    this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u];
    return (BigInt(A) << BigInt(32)) + BigInt(this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + v);
  }), s.prototype.readFloatLE = function(u, p) {
    return u = u >>> 0, p || we(u, 4, this.length), r.read(this, u, !0, 23, 4);
  }, s.prototype.readFloatBE = function(u, p) {
    return u = u >>> 0, p || we(u, 4, this.length), r.read(this, u, !1, 23, 4);
  }, s.prototype.readDoubleLE = function(u, p) {
    return u = u >>> 0, p || we(u, 8, this.length), r.read(this, u, !0, 52, 8);
  }, s.prototype.readDoubleBE = function(u, p) {
    return u = u >>> 0, p || we(u, 8, this.length), r.read(this, u, !1, 52, 8);
  };
  function ee(m, u, p, v, A, $) {
    if (!s.isBuffer(m)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (u > A || u < $) throw new RangeError('"value" argument is out of bounds');
    if (p + v > m.length) throw new RangeError("Index out of range");
  }
  s.prototype.writeUintLE = s.prototype.writeUIntLE = function(u, p, v, A) {
    if (u = +u, p = p >>> 0, v = v >>> 0, !A) {
      const V = Math.pow(2, 8 * v) - 1;
      ee(this, u, p, v, V, 0);
    }
    let $ = 1, F = 0;
    for (this[p] = u & 255; ++F < v && ($ *= 256); )
      this[p + F] = u / $ & 255;
    return p + v;
  }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(u, p, v, A) {
    if (u = +u, p = p >>> 0, v = v >>> 0, !A) {
      const V = Math.pow(2, 8 * v) - 1;
      ee(this, u, p, v, V, 0);
    }
    let $ = v - 1, F = 1;
    for (this[p + $] = u & 255; --$ >= 0 && (F *= 256); )
      this[p + $] = u / F & 255;
    return p + v;
  }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(u, p, v) {
    return u = +u, p = p >>> 0, v || ee(this, u, p, 1, 255, 0), this[p] = u & 255, p + 1;
  }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(u, p, v) {
    return u = +u, p = p >>> 0, v || ee(this, u, p, 2, 65535, 0), this[p] = u & 255, this[p + 1] = u >>> 8, p + 2;
  }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(u, p, v) {
    return u = +u, p = p >>> 0, v || ee(this, u, p, 2, 65535, 0), this[p] = u >>> 8, this[p + 1] = u & 255, p + 2;
  }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(u, p, v) {
    return u = +u, p = p >>> 0, v || ee(this, u, p, 4, 4294967295, 0), this[p + 3] = u >>> 24, this[p + 2] = u >>> 16, this[p + 1] = u >>> 8, this[p] = u & 255, p + 4;
  }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(u, p, v) {
    return u = +u, p = p >>> 0, v || ee(this, u, p, 4, 4294967295, 0), this[p] = u >>> 24, this[p + 1] = u >>> 16, this[p + 2] = u >>> 8, this[p + 3] = u & 255, p + 4;
  };
  function ht(m, u, p, v, A) {
    Ae(u, v, A, m, p, 7);
    let $ = Number(u & BigInt(4294967295));
    m[p++] = $, $ = $ >> 8, m[p++] = $, $ = $ >> 8, m[p++] = $, $ = $ >> 8, m[p++] = $;
    let F = Number(u >> BigInt(32) & BigInt(4294967295));
    return m[p++] = F, F = F >> 8, m[p++] = F, F = F >> 8, m[p++] = F, F = F >> 8, m[p++] = F, p;
  }
  function I(m, u, p, v, A) {
    Ae(u, v, A, m, p, 7);
    let $ = Number(u & BigInt(4294967295));
    m[p + 7] = $, $ = $ >> 8, m[p + 6] = $, $ = $ >> 8, m[p + 5] = $, $ = $ >> 8, m[p + 4] = $;
    let F = Number(u >> BigInt(32) & BigInt(4294967295));
    return m[p + 3] = F, F = F >> 8, m[p + 2] = F, F = F >> 8, m[p + 1] = F, F = F >> 8, m[p] = F, p + 8;
  }
  s.prototype.writeBigUInt64LE = C(function(u, p = 0) {
    return ht(this, u, p, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeBigUInt64BE = C(function(u, p = 0) {
    return I(this, u, p, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeIntLE = function(u, p, v, A) {
    if (u = +u, p = p >>> 0, !A) {
      const Q = Math.pow(2, 8 * v - 1);
      ee(this, u, p, v, Q - 1, -Q);
    }
    let $ = 0, F = 1, V = 0;
    for (this[p] = u & 255; ++$ < v && (F *= 256); )
      u < 0 && V === 0 && this[p + $ - 1] !== 0 && (V = 1), this[p + $] = (u / F >> 0) - V & 255;
    return p + v;
  }, s.prototype.writeIntBE = function(u, p, v, A) {
    if (u = +u, p = p >>> 0, !A) {
      const Q = Math.pow(2, 8 * v - 1);
      ee(this, u, p, v, Q - 1, -Q);
    }
    let $ = v - 1, F = 1, V = 0;
    for (this[p + $] = u & 255; --$ >= 0 && (F *= 256); )
      u < 0 && V === 0 && this[p + $ + 1] !== 0 && (V = 1), this[p + $] = (u / F >> 0) - V & 255;
    return p + v;
  }, s.prototype.writeInt8 = function(u, p, v) {
    return u = +u, p = p >>> 0, v || ee(this, u, p, 1, 127, -128), u < 0 && (u = 255 + u + 1), this[p] = u & 255, p + 1;
  }, s.prototype.writeInt16LE = function(u, p, v) {
    return u = +u, p = p >>> 0, v || ee(this, u, p, 2, 32767, -32768), this[p] = u & 255, this[p + 1] = u >>> 8, p + 2;
  }, s.prototype.writeInt16BE = function(u, p, v) {
    return u = +u, p = p >>> 0, v || ee(this, u, p, 2, 32767, -32768), this[p] = u >>> 8, this[p + 1] = u & 255, p + 2;
  }, s.prototype.writeInt32LE = function(u, p, v) {
    return u = +u, p = p >>> 0, v || ee(this, u, p, 4, 2147483647, -2147483648), this[p] = u & 255, this[p + 1] = u >>> 8, this[p + 2] = u >>> 16, this[p + 3] = u >>> 24, p + 4;
  }, s.prototype.writeInt32BE = function(u, p, v) {
    return u = +u, p = p >>> 0, v || ee(this, u, p, 4, 2147483647, -2147483648), u < 0 && (u = 4294967295 + u + 1), this[p] = u >>> 24, this[p + 1] = u >>> 16, this[p + 2] = u >>> 8, this[p + 3] = u & 255, p + 4;
  }, s.prototype.writeBigInt64LE = C(function(u, p = 0) {
    return ht(this, u, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), s.prototype.writeBigInt64BE = C(function(u, p = 0) {
    return I(this, u, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function _(m, u, p, v, A, $) {
    if (p + v > m.length) throw new RangeError("Index out of range");
    if (p < 0) throw new RangeError("Index out of range");
  }
  function U(m, u, p, v, A) {
    return u = +u, p = p >>> 0, A || _(m, u, p, 4), r.write(m, u, p, v, 23, 4), p + 4;
  }
  s.prototype.writeFloatLE = function(u, p, v) {
    return U(this, u, p, !0, v);
  }, s.prototype.writeFloatBE = function(u, p, v) {
    return U(this, u, p, !1, v);
  };
  function k(m, u, p, v, A) {
    return u = +u, p = p >>> 0, A || _(m, u, p, 8), r.write(m, u, p, v, 52, 8), p + 8;
  }
  s.prototype.writeDoubleLE = function(u, p, v) {
    return k(this, u, p, !0, v);
  }, s.prototype.writeDoubleBE = function(u, p, v) {
    return k(this, u, p, !1, v);
  }, s.prototype.copy = function(u, p, v, A) {
    if (!s.isBuffer(u)) throw new TypeError("argument should be a Buffer");
    if (v || (v = 0), !A && A !== 0 && (A = this.length), p >= u.length && (p = u.length), p || (p = 0), A > 0 && A < v && (A = v), A === v || u.length === 0 || this.length === 0) return 0;
    if (p < 0)
      throw new RangeError("targetStart out of bounds");
    if (v < 0 || v >= this.length) throw new RangeError("Index out of range");
    if (A < 0) throw new RangeError("sourceEnd out of bounds");
    A > this.length && (A = this.length), u.length - p < A - v && (A = u.length - p + v);
    const $ = A - v;
    return this === u && typeof a.prototype.copyWithin == "function" ? this.copyWithin(p, v, A) : a.prototype.set.call(
      u,
      this.subarray(v, A),
      p
    ), $;
  }, s.prototype.fill = function(u, p, v, A) {
    if (typeof u == "string") {
      if (typeof p == "string" ? (A = p, p = 0, v = this.length) : typeof v == "string" && (A = v, v = this.length), A !== void 0 && typeof A != "string")
        throw new TypeError("encoding must be a string");
      if (typeof A == "string" && !s.isEncoding(A))
        throw new TypeError("Unknown encoding: " + A);
      if (u.length === 1) {
        const F = u.charCodeAt(0);
        (A === "utf8" && F < 128 || A === "latin1") && (u = F);
      }
    } else typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
    if (p < 0 || this.length < p || this.length < v)
      throw new RangeError("Out of range index");
    if (v <= p)
      return this;
    p = p >>> 0, v = v === void 0 ? this.length : v >>> 0, u || (u = 0);
    let $;
    if (typeof u == "number")
      for ($ = p; $ < v; ++$)
        this[$] = u;
    else {
      const F = s.isBuffer(u) ? u : s.from(u, A), V = F.length;
      if (V === 0)
        throw new TypeError('The value "' + u + '" is invalid for argument "value"');
      for ($ = 0; $ < v - p; ++$)
        this[$ + p] = F[$ % V];
    }
    return this;
  };
  const ue = {};
  function Te(m, u, p) {
    ue[m] = class extends p {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: u.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${m}]`, this.stack, delete this.name;
      }
      get code() {
        return m;
      }
      set code(A) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: A,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${m}]: ${this.message}`;
      }
    };
  }
  Te(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(m) {
      return m ? `${m} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Te(
    "ERR_INVALID_ARG_TYPE",
    function(m, u) {
      return `The "${m}" argument must be of type number. Received type ${typeof u}`;
    },
    TypeError
  ), Te(
    "ERR_OUT_OF_RANGE",
    function(m, u, p) {
      let v = `The value of "${m}" is out of range.`, A = p;
      return Number.isInteger(p) && Math.abs(p) > 2 ** 32 ? A = ye(String(p)) : typeof p == "bigint" && (A = String(p), (p > BigInt(2) ** BigInt(32) || p < -(BigInt(2) ** BigInt(32))) && (A = ye(A)), A += "n"), v += ` It must be ${u}. Received ${A}`, v;
    },
    RangeError
  );
  function ye(m) {
    let u = "", p = m.length;
    const v = m[0] === "-" ? 1 : 0;
    for (; p >= v + 4; p -= 3)
      u = `_${m.slice(p - 3, p)}${u}`;
    return `${m.slice(0, p)}${u}`;
  }
  function Ce(m, u, p) {
    Ye(u, "offset"), (m[u] === void 0 || m[u + p] === void 0) && Ne(u, m.length - (p + 1));
  }
  function Ae(m, u, p, v, A, $) {
    if (m > p || m < u) {
      const F = typeof u == "bigint" ? "n" : "";
      let V;
      throw u === 0 || u === BigInt(0) ? V = `>= 0${F} and < 2${F} ** ${($ + 1) * 8}${F}` : V = `>= -(2${F} ** ${($ + 1) * 8 - 1}${F}) and < 2 ** ${($ + 1) * 8 - 1}${F}`, new ue.ERR_OUT_OF_RANGE("value", V, m);
    }
    Ce(v, A, $);
  }
  function Ye(m, u) {
    if (typeof m != "number")
      throw new ue.ERR_INVALID_ARG_TYPE(u, "number", m);
  }
  function Ne(m, u, p) {
    throw Math.floor(m) !== m ? (Ye(m, p), new ue.ERR_OUT_OF_RANGE("offset", "an integer", m)) : u < 0 ? new ue.ERR_BUFFER_OUT_OF_BOUNDS() : new ue.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${u}`,
      m
    );
  }
  const Be = /[^+/0-9A-Za-z-_]/g;
  function Wt(m) {
    if (m = m.split("=")[0], m = m.trim().replace(Be, ""), m.length < 2) return "";
    for (; m.length % 4 !== 0; )
      m = m + "=";
    return m;
  }
  function rt(m, u) {
    u = u || 1 / 0;
    let p;
    const v = m.length;
    let A = null;
    const $ = [];
    for (let F = 0; F < v; ++F) {
      if (p = m.charCodeAt(F), p > 55295 && p < 57344) {
        if (!A) {
          if (p > 56319) {
            (u -= 3) > -1 && $.push(239, 191, 189);
            continue;
          } else if (F + 1 === v) {
            (u -= 3) > -1 && $.push(239, 191, 189);
            continue;
          }
          A = p;
          continue;
        }
        if (p < 56320) {
          (u -= 3) > -1 && $.push(239, 191, 189), A = p;
          continue;
        }
        p = (A - 55296 << 10 | p - 56320) + 65536;
      } else A && (u -= 3) > -1 && $.push(239, 191, 189);
      if (A = null, p < 128) {
        if ((u -= 1) < 0) break;
        $.push(p);
      } else if (p < 2048) {
        if ((u -= 2) < 0) break;
        $.push(
          p >> 6 | 192,
          p & 63 | 128
        );
      } else if (p < 65536) {
        if ((u -= 3) < 0) break;
        $.push(
          p >> 12 | 224,
          p >> 6 & 63 | 128,
          p & 63 | 128
        );
      } else if (p < 1114112) {
        if ((u -= 4) < 0) break;
        $.push(
          p >> 18 | 240,
          p >> 12 & 63 | 128,
          p >> 6 & 63 | 128,
          p & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return $;
  }
  function Bt(m) {
    const u = [];
    for (let p = 0; p < m.length; ++p)
      u.push(m.charCodeAt(p) & 255);
    return u;
  }
  function Vt(m, u) {
    let p, v, A;
    const $ = [];
    for (let F = 0; F < m.length && !((u -= 2) < 0); ++F)
      p = m.charCodeAt(F), v = p >> 8, A = p % 256, $.push(A), $.push(v);
    return $;
  }
  function Dn(m) {
    return e.toByteArray(Wt(m));
  }
  function te(m, u, p, v) {
    let A;
    for (A = 0; A < v && !(A + p >= u.length || A >= m.length); ++A)
      u[A + p] = m[A];
    return A;
  }
  function Le(m, u) {
    return m instanceof u || m != null && m.constructor != null && m.constructor.name != null && m.constructor.name === u.name;
  }
  function w(m) {
    return m !== m;
  }
  const N = function() {
    const m = "0123456789abcdef", u = new Array(256);
    for (let p = 0; p < 16; ++p) {
      const v = p * 16;
      for (let A = 0; A < 16; ++A)
        u[v + A] = m[p] + m[A];
    }
    return u;
  }();
  function C(m) {
    return typeof BigInt > "u" ? D : m;
  }
  function D() {
    throw new Error("BigInt not supported");
  }
})(Je);
const Fr = Je.Buffer, lc = Je.Blob, uc = Je.BlobOptions, Xa = Je.Buffer, cc = Je.File, fc = Je.FileOptions, hc = Je.INSPECT_MAX_BYTES, pc = Je.SlowBuffer, dc = Je.TranscodeEncoding, mc = Je.atob, gc = Je.btoa, Ec = Je.constants, wc = Je.isAscii, yc = Je.isUtf8, vc = Je.kMaxLength, bc = Je.kStringMaxLength, _c = Je.resolveObjectURL, Tc = Je.transcode, Nc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Blob: lc,
  BlobOptions: uc,
  Buffer: Xa,
  File: cc,
  FileOptions: fc,
  INSPECT_MAX_BYTES: hc,
  SlowBuffer: pc,
  TranscodeEncoding: dc,
  atob: mc,
  btoa: gc,
  constants: Ec,
  default: Fr,
  isAscii: wc,
  isUtf8: yc,
  kMaxLength: vc,
  kStringMaxLength: bc,
  resolveObjectURL: _c,
  transcode: Tc
}, Symbol.toStringTag, { value: "Module" })), Ic = /* @__PURE__ */ fu(Nc);
var Ha = {}, Gi = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(n, e) {
  var r = Ic, i = r.Buffer;
  function o(l, f) {
    for (var c in l)
      f[c] = l[c];
  }
  i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? n.exports = r : (o(r, e), e.Buffer = a);
  function a(l, f, c) {
    return i(l, f, c);
  }
  a.prototype = Object.create(i.prototype), o(i, a), a.from = function(l, f, c) {
    if (typeof l == "number")
      throw new TypeError("Argument must not be a number");
    return i(l, f, c);
  }, a.alloc = function(l, f, c) {
    if (typeof l != "number")
      throw new TypeError("Argument must be a number");
    var h = i(l);
    return f !== void 0 ? typeof c == "string" ? h.fill(f, c) : h.fill(f) : h.fill(0), h;
  }, a.allocUnsafe = function(l) {
    if (typeof l != "number")
      throw new TypeError("Argument must be a number");
    return i(l);
  }, a.allocUnsafeSlow = function(l) {
    if (typeof l != "number")
      throw new TypeError("Argument must be a number");
    return r.SlowBuffer(l);
  };
})(Gi, Gi.exports);
var Ac = Gi.exports, io = Ac.Buffer, jo = io.isEncoding || function(n) {
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
function Oc(n) {
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
function Rc(n) {
  var e = Oc(n);
  if (typeof e != "string" && (io.isEncoding === jo || !jo(n))) throw new Error("Unknown encoding: " + n);
  return e || n;
}
Ha.StringDecoder = Nr;
function Nr(n) {
  this.encoding = Rc(n);
  var e;
  switch (this.encoding) {
    case "utf16le":
      this.text = $c, this.end = Dc, e = 4;
      break;
    case "utf8":
      this.fillLast = Lc, e = 4;
      break;
    case "base64":
      this.text = kc, this.end = Fc, e = 3;
      break;
    default:
      this.write = Mc, this.end = Uc;
      return;
  }
  this.lastNeed = 0, this.lastTotal = 0, this.lastChar = io.allocUnsafe(e);
}
Nr.prototype.write = function(n) {
  if (n.length === 0) return "";
  var e, r;
  if (this.lastNeed) {
    if (e = this.fillLast(n), e === void 0) return "";
    r = this.lastNeed, this.lastNeed = 0;
  } else
    r = 0;
  return r < n.length ? e ? e + this.text(n, r) : this.text(n, r) : e || "";
};
Nr.prototype.end = Pc;
Nr.prototype.text = xc;
Nr.prototype.fillLast = function(n) {
  if (this.lastNeed <= n.length)
    return n.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  n.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, n.length), this.lastNeed -= n.length;
};
function li(n) {
  return n <= 127 ? 0 : n >> 5 === 6 ? 2 : n >> 4 === 14 ? 3 : n >> 3 === 30 ? 4 : n >> 6 === 2 ? -1 : -2;
}
function Sc(n, e, r) {
  var i = e.length - 1;
  if (i < r) return 0;
  var o = li(e[i]);
  return o >= 0 ? (o > 0 && (n.lastNeed = o - 1), o) : --i < r || o === -2 ? 0 : (o = li(e[i]), o >= 0 ? (o > 0 && (n.lastNeed = o - 2), o) : --i < r || o === -2 ? 0 : (o = li(e[i]), o >= 0 ? (o > 0 && (o === 2 ? o = 0 : n.lastNeed = o - 3), o) : 0));
}
function Cc(n, e, r) {
  if ((e[0] & 192) !== 128)
    return n.lastNeed = 0, "�";
  if (n.lastNeed > 1 && e.length > 1) {
    if ((e[1] & 192) !== 128)
      return n.lastNeed = 1, "�";
    if (n.lastNeed > 2 && e.length > 2 && (e[2] & 192) !== 128)
      return n.lastNeed = 2, "�";
  }
}
function Lc(n) {
  var e = this.lastTotal - this.lastNeed, r = Cc(this, n);
  if (r !== void 0) return r;
  if (this.lastNeed <= n.length)
    return n.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  n.copy(this.lastChar, e, 0, n.length), this.lastNeed -= n.length;
}
function xc(n, e) {
  var r = Sc(this, n, e);
  if (!this.lastNeed) return n.toString("utf8", e);
  this.lastTotal = r;
  var i = n.length - (r - this.lastNeed);
  return n.copy(this.lastChar, 0, i), n.toString("utf8", e, i);
}
function Pc(n) {
  var e = n && n.length ? this.write(n) : "";
  return this.lastNeed ? e + "�" : e;
}
function $c(n, e) {
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
function Dc(n) {
  var e = n && n.length ? this.write(n) : "";
  if (this.lastNeed) {
    var r = this.lastTotal - this.lastNeed;
    return e + this.lastChar.toString("utf16le", 0, r);
  }
  return e;
}
function kc(n, e) {
  var r = (n.length - e) % 3;
  return r === 0 ? n.toString("base64", e) : (this.lastNeed = 3 - r, this.lastTotal = 3, r === 1 ? this.lastChar[0] = n[n.length - 1] : (this.lastChar[0] = n[n.length - 2], this.lastChar[1] = n[n.length - 1]), n.toString("base64", e, n.length - r));
}
function Fc(n) {
  var e = n && n.length ? this.write(n) : "";
  return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e;
}
function Mc(n) {
  return n.toString(this.encoding);
}
function Uc(n) {
  return n && n.length ? this.write(n) : "";
}
function Ya(n, e, r) {
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
const Bc = (n) => "/remote.php/" + n, Za = (n, e) => jc() + Bc(n), jc = () => window.location.protocol + "//" + window.location.host + Gc();
function Gc() {
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
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: Ka,
  setPrototypeOf: Go,
  isFrozen: Wc,
  getPrototypeOf: Vc,
  getOwnPropertyDescriptor: qc
} = Object;
let {
  freeze: vt,
  seal: Mt,
  create: Wi
} = Object, {
  apply: Vi,
  construct: qi
} = typeof Reflect < "u" && Reflect;
vt || (vt = function(e) {
  return e;
});
Mt || (Mt = function(e) {
  return e;
});
Vi || (Vi = function(e, r) {
  for (var i = arguments.length, o = new Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++)
    o[a - 2] = arguments[a];
  return e.apply(r, o);
});
qi || (qi = function(e) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    i[o - 1] = arguments[o];
  return new e(...i);
});
const Cr = bt(Array.prototype.forEach), zc = bt(Array.prototype.lastIndexOf), Wo = bt(Array.prototype.pop), ir = bt(Array.prototype.push), Xc = bt(Array.prototype.splice), Mr = bt(String.prototype.toLowerCase), ui = bt(String.prototype.toString), ci = bt(String.prototype.match), or = bt(String.prototype.replace), Hc = bt(String.prototype.indexOf), Yc = bt(String.prototype.trim), Gt = bt(Object.prototype.hasOwnProperty), pt = bt(RegExp.prototype.test), sr = Zc(TypeError);
function bt(n) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      i[o - 1] = arguments[o];
    return Vi(n, e, i);
  };
}
function Zc(n) {
  return function() {
    for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
      r[i] = arguments[i];
    return qi(n, r);
  };
}
function pe(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mr;
  Go && Go(n, null);
  let i = e.length;
  for (; i--; ) {
    let o = e[i];
    if (typeof o == "string") {
      const a = r(o);
      a !== o && (Wc(e) || (e[i] = a), o = a);
    }
    n[o] = !0;
  }
  return n;
}
function Kc(n) {
  for (let e = 0; e < n.length; e++)
    Gt(n, e) || (n[e] = null);
  return n;
}
function Ht(n) {
  const e = Wi(null);
  for (const [r, i] of Ka(n))
    Gt(n, r) && (Array.isArray(i) ? e[r] = Kc(i) : i && typeof i == "object" && i.constructor === Object ? e[r] = Ht(i) : e[r] = i);
  return e;
}
function ar(n, e) {
  for (; n !== null; ) {
    const i = qc(n, e);
    if (i) {
      if (i.get)
        return bt(i.get);
      if (typeof i.value == "function")
        return bt(i.value);
    }
    n = Vc(n);
  }
  function r() {
    return null;
  }
  return r;
}
const Vo = vt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), fi = vt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), hi = vt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Jc = vt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), pi = vt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Qc = vt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), qo = vt(["#text"]), zo = vt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), di = vt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Xo = vt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Lr = vt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ef = Mt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), tf = Mt(/<%[\w\W]*|[\w\W]*%>/gm), nf = Mt(/\$\{[\w\W]*/gm), rf = Mt(/^data-[\-\w.\u00B7-\uFFFF]+$/), of = Mt(/^aria-[\-\w]+$/), Ja = Mt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), sf = Mt(/^(?:\w+script|data):/i), af = Mt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Qa = Mt(/^html$/i), lf = Mt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Ho = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: of,
  ATTR_WHITESPACE: af,
  CUSTOM_ELEMENT: lf,
  DATA_ATTR: rf,
  DOCTYPE_NAME: Qa,
  ERB_EXPR: tf,
  IS_ALLOWED_URI: Ja,
  IS_SCRIPT_OR_DATA: sf,
  MUSTACHE_EXPR: ef,
  TMPLIT_EXPR: nf
});
const lr = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, uf = function() {
  return typeof window > "u" ? null : window;
}, cf = function(e, r) {
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
}, Yo = function() {
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
};
function el() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : uf();
  const e = (ne) => el(ne);
  if (e.version = "3.3.1", e.removed = [], !n || !n.document || n.document.nodeType !== lr.document || !n.Element)
    return e.isSupported = !1, e;
  let {
    document: r
  } = n;
  const i = r, o = i.currentScript, {
    DocumentFragment: a,
    HTMLTemplateElement: l,
    Node: f,
    Element: c,
    NodeFilter: h,
    NamedNodeMap: s = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: d,
    DOMParser: E,
    trustedTypes: y
  } = n, b = c.prototype, g = ar(b, "cloneNode"), T = ar(b, "remove"), O = ar(b, "nextSibling"), S = ar(b, "childNodes"), L = ar(b, "parentNode");
  if (typeof l == "function") {
    const ne = r.createElement("template");
    ne.content && ne.content.ownerDocument && (r = ne.content.ownerDocument);
  }
  let R, M = "";
  const {
    implementation: Y,
    createNodeIterator: X,
    createDocumentFragment: oe,
    getElementsByTagName: x
  } = r, {
    importNode: ge
  } = i;
  let z = Yo();
  e.isSupported = typeof Ka == "function" && typeof L == "function" && Y && Y.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: Z,
    ERB_EXPR: j,
    TMPLIT_EXPR: se,
    DATA_ATTR: de,
    ARIA_ATTR: Ie,
    IS_SCRIPT_OR_DATA: K,
    ATTR_WHITESPACE: be,
    CUSTOM_ELEMENT: Fe
  } = Ho;
  let {
    IS_ALLOWED_URI: Me
  } = Ho, fe = null;
  const Ue = pe({}, [...Vo, ...fi, ...hi, ...pi, ...qo]);
  let Ee = null;
  const we = pe({}, [...zo, ...di, ...Xo, ...Lr]);
  let ee = Object.seal(Wi(null, {
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
  })), ht = null, I = null;
  const _ = Object.seal(Wi(null, {
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
  let U = !0, k = !0, ue = !1, Te = !0, ye = !1, Ce = !0, Ae = !1, Ye = !1, Ne = !1, Be = !1, Wt = !1, rt = !1, Bt = !0, Vt = !1;
  const Dn = "user-content-";
  let te = !0, Le = !1, w = {}, N = null;
  const C = pe({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let D = null;
  const m = pe({}, ["audio", "video", "img", "source", "image", "track"]);
  let u = null;
  const p = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), v = "http://www.w3.org/1998/Math/MathML", A = "http://www.w3.org/2000/svg", $ = "http://www.w3.org/1999/xhtml";
  let F = $, V = !1, Q = null;
  const he = pe({}, [v, A, $], ui);
  let ce = pe({}, ["mi", "mo", "mn", "ms", "mtext"]), me = pe({}, ["annotation-xml"]);
  const tr = pe({}, ["title", "style", "font", "a", "script"]);
  let nr = null;
  const Wl = ["application/xhtml+xml", "text/html"], Vl = "text/html";
  let Ze = null, kn = null;
  const ql = r.createElement("form"), vo = function(P) {
    return P instanceof RegExp || P instanceof Function;
  }, ti = function() {
    let P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(kn && kn === P)) {
      if ((!P || typeof P != "object") && (P = {}), P = Ht(P), nr = // eslint-disable-next-line unicorn/prefer-includes
      Wl.indexOf(P.PARSER_MEDIA_TYPE) === -1 ? Vl : P.PARSER_MEDIA_TYPE, Ze = nr === "application/xhtml+xml" ? ui : Mr, fe = Gt(P, "ALLOWED_TAGS") ? pe({}, P.ALLOWED_TAGS, Ze) : Ue, Ee = Gt(P, "ALLOWED_ATTR") ? pe({}, P.ALLOWED_ATTR, Ze) : we, Q = Gt(P, "ALLOWED_NAMESPACES") ? pe({}, P.ALLOWED_NAMESPACES, ui) : he, u = Gt(P, "ADD_URI_SAFE_ATTR") ? pe(Ht(p), P.ADD_URI_SAFE_ATTR, Ze) : p, D = Gt(P, "ADD_DATA_URI_TAGS") ? pe(Ht(m), P.ADD_DATA_URI_TAGS, Ze) : m, N = Gt(P, "FORBID_CONTENTS") ? pe({}, P.FORBID_CONTENTS, Ze) : C, ht = Gt(P, "FORBID_TAGS") ? pe({}, P.FORBID_TAGS, Ze) : Ht({}), I = Gt(P, "FORBID_ATTR") ? pe({}, P.FORBID_ATTR, Ze) : Ht({}), w = Gt(P, "USE_PROFILES") ? P.USE_PROFILES : !1, U = P.ALLOW_ARIA_ATTR !== !1, k = P.ALLOW_DATA_ATTR !== !1, ue = P.ALLOW_UNKNOWN_PROTOCOLS || !1, Te = P.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ye = P.SAFE_FOR_TEMPLATES || !1, Ce = P.SAFE_FOR_XML !== !1, Ae = P.WHOLE_DOCUMENT || !1, Be = P.RETURN_DOM || !1, Wt = P.RETURN_DOM_FRAGMENT || !1, rt = P.RETURN_TRUSTED_TYPE || !1, Ne = P.FORCE_BODY || !1, Bt = P.SANITIZE_DOM !== !1, Vt = P.SANITIZE_NAMED_PROPS || !1, te = P.KEEP_CONTENT !== !1, Le = P.IN_PLACE || !1, Me = P.ALLOWED_URI_REGEXP || Ja, F = P.NAMESPACE || $, ce = P.MATHML_TEXT_INTEGRATION_POINTS || ce, me = P.HTML_INTEGRATION_POINTS || me, ee = P.CUSTOM_ELEMENT_HANDLING || {}, P.CUSTOM_ELEMENT_HANDLING && vo(P.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ee.tagNameCheck = P.CUSTOM_ELEMENT_HANDLING.tagNameCheck), P.CUSTOM_ELEMENT_HANDLING && vo(P.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ee.attributeNameCheck = P.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), P.CUSTOM_ELEMENT_HANDLING && typeof P.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ee.allowCustomizedBuiltInElements = P.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ye && (k = !1), Wt && (Be = !0), w && (fe = pe({}, qo), Ee = [], w.html === !0 && (pe(fe, Vo), pe(Ee, zo)), w.svg === !0 && (pe(fe, fi), pe(Ee, di), pe(Ee, Lr)), w.svgFilters === !0 && (pe(fe, hi), pe(Ee, di), pe(Ee, Lr)), w.mathMl === !0 && (pe(fe, pi), pe(Ee, Xo), pe(Ee, Lr))), P.ADD_TAGS && (typeof P.ADD_TAGS == "function" ? _.tagCheck = P.ADD_TAGS : (fe === Ue && (fe = Ht(fe)), pe(fe, P.ADD_TAGS, Ze))), P.ADD_ATTR && (typeof P.ADD_ATTR == "function" ? _.attributeCheck = P.ADD_ATTR : (Ee === we && (Ee = Ht(Ee)), pe(Ee, P.ADD_ATTR, Ze))), P.ADD_URI_SAFE_ATTR && pe(u, P.ADD_URI_SAFE_ATTR, Ze), P.FORBID_CONTENTS && (N === C && (N = Ht(N)), pe(N, P.FORBID_CONTENTS, Ze)), P.ADD_FORBID_CONTENTS && (N === C && (N = Ht(N)), pe(N, P.ADD_FORBID_CONTENTS, Ze)), te && (fe["#text"] = !0), Ae && pe(fe, ["html", "head", "body"]), fe.table && (pe(fe, ["tbody"]), delete ht.tbody), P.TRUSTED_TYPES_POLICY) {
        if (typeof P.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw sr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof P.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw sr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        R = P.TRUSTED_TYPES_POLICY, M = R.createHTML("");
      } else
        R === void 0 && (R = cf(y, o)), R !== null && typeof M == "string" && (M = R.createHTML(""));
      vt && vt(P), kn = P;
    }
  }, bo = pe({}, [...fi, ...hi, ...Jc]), _o = pe({}, [...pi, ...Qc]), zl = function(P) {
    let G = L(P);
    (!G || !G.tagName) && (G = {
      namespaceURI: F,
      tagName: "template"
    });
    const J = Mr(P.tagName), xe = Mr(G.tagName);
    return Q[P.namespaceURI] ? P.namespaceURI === A ? G.namespaceURI === $ ? J === "svg" : G.namespaceURI === v ? J === "svg" && (xe === "annotation-xml" || ce[xe]) : !!bo[J] : P.namespaceURI === v ? G.namespaceURI === $ ? J === "math" : G.namespaceURI === A ? J === "math" && me[xe] : !!_o[J] : P.namespaceURI === $ ? G.namespaceURI === A && !me[xe] || G.namespaceURI === v && !ce[xe] ? !1 : !_o[J] && (tr[J] || !bo[J]) : !!(nr === "application/xhtml+xml" && Q[P.namespaceURI]) : !1;
  }, qt = function(P) {
    ir(e.removed, {
      element: P
    });
    try {
      L(P).removeChild(P);
    } catch {
      T(P);
    }
  }, Nn = function(P, G) {
    try {
      ir(e.removed, {
        attribute: G.getAttributeNode(P),
        from: G
      });
    } catch {
      ir(e.removed, {
        attribute: null,
        from: G
      });
    }
    if (G.removeAttribute(P), P === "is")
      if (Be || Wt)
        try {
          qt(G);
        } catch {
        }
      else
        try {
          G.setAttribute(P, "");
        } catch {
        }
  }, To = function(P) {
    let G = null, J = null;
    if (Ne)
      P = "<remove></remove>" + P;
    else {
      const qe = ci(P, /^[\r\n\t ]+/);
      J = qe && qe[0];
    }
    nr === "application/xhtml+xml" && F === $ && (P = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + P + "</body></html>");
    const xe = R ? R.createHTML(P) : P;
    if (F === $)
      try {
        G = new E().parseFromString(xe, nr);
      } catch {
      }
    if (!G || !G.documentElement) {
      G = Y.createDocument(F, "template", null);
      try {
        G.documentElement.innerHTML = V ? M : xe;
      } catch {
      }
    }
    const st = G.body || G.documentElement;
    return P && J && st.insertBefore(r.createTextNode(J), st.childNodes[0] || null), F === $ ? x.call(G, Ae ? "html" : "body")[0] : Ae ? G.documentElement : st;
  }, No = function(P) {
    return X.call(
      P.ownerDocument || P,
      P,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION,
      null
    );
  }, ni = function(P) {
    return P instanceof d && (typeof P.nodeName != "string" || typeof P.textContent != "string" || typeof P.removeChild != "function" || !(P.attributes instanceof s) || typeof P.removeAttribute != "function" || typeof P.setAttribute != "function" || typeof P.namespaceURI != "string" || typeof P.insertBefore != "function" || typeof P.hasChildNodes != "function");
  }, Io = function(P) {
    return typeof f == "function" && P instanceof f;
  };
  function tn(ne, P, G) {
    Cr(ne, (J) => {
      J.call(e, P, G, kn);
    });
  }
  const Ao = function(P) {
    let G = null;
    if (tn(z.beforeSanitizeElements, P, null), ni(P))
      return qt(P), !0;
    const J = Ze(P.nodeName);
    if (tn(z.uponSanitizeElement, P, {
      tagName: J,
      allowedTags: fe
    }), Ce && P.hasChildNodes() && !Io(P.firstElementChild) && pt(/<[/\w!]/g, P.innerHTML) && pt(/<[/\w!]/g, P.textContent) || P.nodeType === lr.progressingInstruction || Ce && P.nodeType === lr.comment && pt(/<[/\w]/g, P.data))
      return qt(P), !0;
    if (!(_.tagCheck instanceof Function && _.tagCheck(J)) && (!fe[J] || ht[J])) {
      if (!ht[J] && Ro(J) && (ee.tagNameCheck instanceof RegExp && pt(ee.tagNameCheck, J) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(J)))
        return !1;
      if (te && !N[J]) {
        const xe = L(P) || P.parentNode, st = S(P) || P.childNodes;
        if (st && xe) {
          const qe = st.length;
          for (let _t = qe - 1; _t >= 0; --_t) {
            const nn = g(st[_t], !0);
            nn.__removalCount = (P.__removalCount || 0) + 1, xe.insertBefore(nn, O(P));
          }
        }
      }
      return qt(P), !0;
    }
    return P instanceof c && !zl(P) || (J === "noscript" || J === "noembed" || J === "noframes") && pt(/<\/no(script|embed|frames)/i, P.innerHTML) ? (qt(P), !0) : (ye && P.nodeType === lr.text && (G = P.textContent, Cr([Z, j, se], (xe) => {
      G = or(G, xe, " ");
    }), P.textContent !== G && (ir(e.removed, {
      element: P.cloneNode()
    }), P.textContent = G)), tn(z.afterSanitizeElements, P, null), !1);
  }, Oo = function(P, G, J) {
    if (Bt && (G === "id" || G === "name") && (J in r || J in ql))
      return !1;
    if (!(k && !I[G] && pt(de, G))) {
      if (!(U && pt(Ie, G))) {
        if (!(_.attributeCheck instanceof Function && _.attributeCheck(G, P))) {
          if (!Ee[G] || I[G]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Ro(P) && (ee.tagNameCheck instanceof RegExp && pt(ee.tagNameCheck, P) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(P)) && (ee.attributeNameCheck instanceof RegExp && pt(ee.attributeNameCheck, G) || ee.attributeNameCheck instanceof Function && ee.attributeNameCheck(G, P)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              G === "is" && ee.allowCustomizedBuiltInElements && (ee.tagNameCheck instanceof RegExp && pt(ee.tagNameCheck, J) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(J)))
            ) return !1;
          } else if (!u[G]) {
            if (!pt(Me, or(J, be, ""))) {
              if (!((G === "src" || G === "xlink:href" || G === "href") && P !== "script" && Hc(J, "data:") === 0 && D[P])) {
                if (!(ue && !pt(K, or(J, be, "")))) {
                  if (J)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, Ro = function(P) {
    return P !== "annotation-xml" && ci(P, Fe);
  }, So = function(P) {
    tn(z.beforeSanitizeAttributes, P, null);
    const {
      attributes: G
    } = P;
    if (!G || ni(P))
      return;
    const J = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Ee,
      forceKeepAttr: void 0
    };
    let xe = G.length;
    for (; xe--; ) {
      const st = G[xe], {
        name: qe,
        namespaceURI: _t,
        value: nn
      } = st, Fn = Ze(qe), ri = nn;
      let it = qe === "value" ? ri : Yc(ri);
      if (J.attrName = Fn, J.attrValue = it, J.keepAttr = !0, J.forceKeepAttr = void 0, tn(z.uponSanitizeAttribute, P, J), it = J.attrValue, Vt && (Fn === "id" || Fn === "name") && (Nn(qe, P), it = Dn + it), Ce && pt(/((--!?|])>)|<\/(style|title|textarea)/i, it)) {
        Nn(qe, P);
        continue;
      }
      if (Fn === "attributename" && ci(it, "href")) {
        Nn(qe, P);
        continue;
      }
      if (J.forceKeepAttr)
        continue;
      if (!J.keepAttr) {
        Nn(qe, P);
        continue;
      }
      if (!Te && pt(/\/>/i, it)) {
        Nn(qe, P);
        continue;
      }
      ye && Cr([Z, j, se], (Lo) => {
        it = or(it, Lo, " ");
      });
      const Co = Ze(P.nodeName);
      if (!Oo(Co, Fn, it)) {
        Nn(qe, P);
        continue;
      }
      if (R && typeof y == "object" && typeof y.getAttributeType == "function" && !_t)
        switch (y.getAttributeType(Co, Fn)) {
          case "TrustedHTML": {
            it = R.createHTML(it);
            break;
          }
          case "TrustedScriptURL": {
            it = R.createScriptURL(it);
            break;
          }
        }
      if (it !== ri)
        try {
          _t ? P.setAttributeNS(_t, qe, it) : P.setAttribute(qe, it), ni(P) ? qt(P) : Wo(e.removed);
        } catch {
          Nn(qe, P);
        }
    }
    tn(z.afterSanitizeAttributes, P, null);
  }, Xl = function ne(P) {
    let G = null;
    const J = No(P);
    for (tn(z.beforeSanitizeShadowDOM, P, null); G = J.nextNode(); )
      tn(z.uponSanitizeShadowNode, G, null), Ao(G), So(G), G.content instanceof a && ne(G.content);
    tn(z.afterSanitizeShadowDOM, P, null);
  };
  return e.sanitize = function(ne) {
    let P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, G = null, J = null, xe = null, st = null;
    if (V = !ne, V && (ne = "<!-->"), typeof ne != "string" && !Io(ne))
      if (typeof ne.toString == "function") {
        if (ne = ne.toString(), typeof ne != "string")
          throw sr("dirty is not a string, aborting");
      } else
        throw sr("toString is not a function");
    if (!e.isSupported)
      return ne;
    if (Ye || ti(P), e.removed = [], typeof ne == "string" && (Le = !1), Le) {
      if (ne.nodeName) {
        const nn = Ze(ne.nodeName);
        if (!fe[nn] || ht[nn])
          throw sr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (ne instanceof f)
      G = To("<!---->"), J = G.ownerDocument.importNode(ne, !0), J.nodeType === lr.element && J.nodeName === "BODY" || J.nodeName === "HTML" ? G = J : G.appendChild(J);
    else {
      if (!Be && !ye && !Ae && // eslint-disable-next-line unicorn/prefer-includes
      ne.indexOf("<") === -1)
        return R && rt ? R.createHTML(ne) : ne;
      if (G = To(ne), !G)
        return Be ? null : rt ? M : "";
    }
    G && Ne && qt(G.firstChild);
    const qe = No(Le ? ne : G);
    for (; xe = qe.nextNode(); )
      Ao(xe), So(xe), xe.content instanceof a && Xl(xe.content);
    if (Le)
      return ne;
    if (Be) {
      if (Wt)
        for (st = oe.call(G.ownerDocument); G.firstChild; )
          st.appendChild(G.firstChild);
      else
        st = G;
      return (Ee.shadowroot || Ee.shadowrootmode) && (st = ge.call(i, st, !0)), st;
    }
    let _t = Ae ? G.outerHTML : G.innerHTML;
    return Ae && fe["!doctype"] && G.ownerDocument && G.ownerDocument.doctype && G.ownerDocument.doctype.name && pt(Qa, G.ownerDocument.doctype.name) && (_t = "<!DOCTYPE " + G.ownerDocument.doctype.name + `>
` + _t), ye && Cr([Z, j, se], (nn) => {
      _t = or(_t, nn, " ");
    }), R && rt ? R.createHTML(_t) : _t;
  }, e.setConfig = function() {
    let ne = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ti(ne), Ye = !0;
  }, e.clearConfig = function() {
    kn = null, Ye = !1;
  }, e.isValidAttribute = function(ne, P, G) {
    kn || ti({});
    const J = Ze(ne), xe = Ze(P);
    return Oo(J, xe, G);
  }, e.addHook = function(ne, P) {
    typeof P == "function" && ir(z[ne], P);
  }, e.removeHook = function(ne, P) {
    if (P !== void 0) {
      const G = zc(z[ne], P);
      return G === -1 ? void 0 : Xc(z[ne], G, 1)[0];
    }
    return Wo(z[ne]);
  }, e.removeHooks = function(ne) {
    z[ne] = [];
  }, e.removeAllHooks = function() {
    z = Yo();
  }, e;
}
el();
globalThis._nc_l10n_locale ?? (globalThis._nc_l10n_locale = typeof document < "u" && document.documentElement.dataset.locale || Intl.DateTimeFormat().resolvedOptions().locale.replaceAll(/-/g, "_"));
var da;
globalThis._nc_l10n_language ?? (globalThis._nc_l10n_language = typeof document < "u" && document.documentElement.lang || (((da = globalThis.navigator) == null ? void 0 : da.language) ?? "en"));
globalThis._oc_l10n_registry_translations ?? (globalThis._oc_l10n_registry_translations = {});
globalThis._oc_l10n_registry_plural_functions ?? (globalThis._oc_l10n_registry_plural_functions = {});
class ff extends Qu {
}
function hf() {
  return ke.registry ?? (ke.registry = new ff()), ke.registry;
}
const tl = Object.freeze({
  DEFAULT: "default",
  HIDDEN: "hidden"
});
function Zo(n) {
  if (pf(n), ke.fileActions ?? (ke.fileActions = /* @__PURE__ */ new Map()), ke.fileActions.has(n.id)) {
    Ba.error(`FileAction ${n.id} already registered`, { action: n });
    return;
  }
  ke.fileActions.set(n.id, n), hf().dispatchTypedEvent("register:action", new CustomEvent("register:action", { detail: n }));
}
function pf(n) {
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
  if (n.default && !Object.values(tl).includes(n.default))
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
const nl = Object.freeze({
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
let df = class {
  constructor() {
    ae(this, "_entries", []);
  }
  registerEntry(e) {
    this.validateEntry(e), e.category = e.category ?? nl.CreateNew, this._entries.push(e);
  }
  unregisterEntry(e) {
    const r = typeof e == "string" ? this.getEntryIndex(e) : this.getEntryIndex(e.id);
    if (r === -1) {
      Ba.warn("Entry not found, nothing removed", { entry: e, entries: this.getEntries() });
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
function mf() {
  return ke.newFileMenu ?? (ke.newFileMenu = new df()), ke.newFileMenu;
}
function gf(n) {
  return mf().registerEntry(n);
}
/*!
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
function Qn() {
  return Ya("files_sharing", "isPublic", null) ?? document.querySelector('input#isPublic[type="hidden"][name="isPublic"][value="1"]') !== null;
}
function rl() {
  var n;
  return Ya("files_sharing", "sharingToken", null) ?? ((n = document.querySelector('input#sharingToken[type="hidden"]')) == null ? void 0 : n.value) ?? null;
}
/*! For license information please see index.js.LICENSE.txt */
var Ef = { 2: (n) => {
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
    var f, c, h, s, d, E = l.indexOf(o), y = l.indexOf(a, E + 1), b = E;
    if (E >= 0 && y > 0) {
      for (f = [], h = l.length; b >= 0 && !d; ) b == E ? (f.push(b), E = l.indexOf(o, b + 1)) : f.length == 1 ? d = [f.pop(), y] : ((c = f.pop()) < h && (h = c, s = y), y = l.indexOf(a, b + 1)), b = E < y && E >= 0 ? E : y;
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
    for (var d = [], E = 0; E < h.length; E++) {
      var y = h[E];
      y && y !== "." && (y === ".." ? d.length && d[d.length - 1] !== ".." ? d.pop() : s && d.push("..") : d.push(y));
    }
    return d;
  }
  var l = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, f = {};
  function c(h) {
    return l.exec(h).slice(1);
  }
  f.resolve = function() {
    for (var h = "", s = !1, d = arguments.length - 1; d >= -1 && !s; d--) {
      var E = d >= 0 ? arguments[d] : gt.cwd();
      if (!o(E)) throw new TypeError("Arguments to path.resolve must be strings");
      E && (h = E + "/" + h, s = E.charAt(0) === "/");
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
    function d(S) {
      for (var L = 0; L < S.length && S[L] === ""; L++) ;
      for (var R = S.length - 1; R >= 0 && S[R] === ""; R--) ;
      return L > R ? [] : S.slice(L, R + 1);
    }
    h = f.resolve(h).substr(1), s = f.resolve(s).substr(1);
    for (var E = d(h.split("/")), y = d(s.split("/")), b = Math.min(E.length, y.length), g = b, T = 0; T < b; T++) if (E[T] !== y[T]) {
      g = T;
      break;
    }
    var O = [];
    for (T = g; T < E.length; T++) O.push("..");
    return (O = O.concat(y.slice(g))).join("/");
  }, f._makeLong = function(h) {
    return h;
  }, f.dirname = function(h) {
    var s = c(h), d = s[0], E = s[1];
    return d || E ? (E && (E = E.substr(0, E.length - 1)), d + E) : ".";
  }, f.basename = function(h, s) {
    var d = c(h)[2];
    return s && d.substr(-1 * s.length) === s && (d = d.substr(0, d.length - s.length)), d;
  }, f.extname = function(h) {
    return c(h)[3];
  }, f.format = function(h) {
    if (!i.isObject(h)) throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof h);
    var s = h.root || "";
    if (!o(s)) throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof h.root);
    return (h.dir ? h.dir + f.sep : "") + (h.base || "");
  }, f.parse = function(h) {
    if (!o(h)) throw new TypeError("Parameter 'pathString' must be a string, not " + typeof h);
    var s = c(h);
    if (!s || s.length !== 4) throw new TypeError("Invalid path '" + h + "'");
    return s[1] = s[1] || "", s[2] = s[2] || "", s[3] = s[3] || "", { root: s[0], dir: s[0] + s[1].slice(0, s[1].length - 1), base: s[2], ext: s[3], name: s[2].slice(0, s[2].length - s[3].length) };
  }, f.sep = "/", f.delimiter = ":", n.exports = f;
}, 101: function(n, e, r) {
  var i;
  n = r.nmd(n), function() {
    var o = (n && n.exports, typeof Ir == "object" && Ir);
    o.global !== o && o.window;
    var a = function(s) {
      this.message = s;
    };
    (a.prototype = new Error()).name = "InvalidCharacterError";
    var l = function(s) {
      throw new a(s);
    }, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = /[\t\n\f\r ]/g, h = { encode: function(s) {
      s = String(s), /[^\0-\xFF]/.test(s) && l("The string to be encoded contains characters outside of the Latin1 range.");
      for (var d, E, y, b, g = s.length % 3, T = "", O = -1, S = s.length - g; ++O < S; ) d = s.charCodeAt(O) << 16, E = s.charCodeAt(++O) << 8, y = s.charCodeAt(++O), T += f.charAt((b = d + E + y) >> 18 & 63) + f.charAt(b >> 12 & 63) + f.charAt(b >> 6 & 63) + f.charAt(63 & b);
      return g == 2 ? (d = s.charCodeAt(O) << 8, E = s.charCodeAt(++O), T += f.charAt((b = d + E) >> 10) + f.charAt(b >> 4 & 63) + f.charAt(b << 2 & 63) + "=") : g == 1 && (b = s.charCodeAt(O), T += f.charAt(b >> 2) + f.charAt(b << 4 & 63) + "=="), T;
    }, decode: function(s) {
      var d = (s = String(s).replace(c, "")).length;
      d % 4 == 0 && (d = (s = s.replace(/==?$/, "")).length), (d % 4 == 1 || /[^+a-zA-Z0-9/]/.test(s)) && l("Invalid character: the string to be decoded is not correctly encoded.");
      for (var E, y, b = 0, g = "", T = -1; ++T < d; ) y = f.indexOf(s.charAt(T)), E = b % 4 ? 64 * E + y : y, b++ % 4 && (g += String.fromCharCode(255 & E >> (-2 * b & 6)));
      return g;
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
  n.exports = function(O) {
    return O ? (O.substr(0, 2) === "{}" && (O = "\\{\\}" + O.substr(2)), T(function(S) {
      return S.split("\\\\").join(o).split("\\{").join(a).split("\\}").join(l).split("\\,").join(f).split("\\.").join(c);
    }(O), !0).map(s)) : [];
  };
  var o = "\0SLASH" + Math.random() + "\0", a = "\0OPEN" + Math.random() + "\0", l = "\0CLOSE" + Math.random() + "\0", f = "\0COMMA" + Math.random() + "\0", c = "\0PERIOD" + Math.random() + "\0";
  function h(O) {
    return parseInt(O, 10) == O ? parseInt(O, 10) : O.charCodeAt(0);
  }
  function s(O) {
    return O.split(o).join("\\").split(a).join("{").split(l).join("}").split(f).join(",").split(c).join(".");
  }
  function d(O) {
    if (!O) return [""];
    var S = [], L = i("{", "}", O);
    if (!L) return O.split(",");
    var R = L.pre, M = L.body, Y = L.post, X = R.split(",");
    X[X.length - 1] += "{" + M + "}";
    var oe = d(Y);
    return Y.length && (X[X.length - 1] += oe.shift(), X.push.apply(X, oe)), S.push.apply(S, X), S;
  }
  function E(O) {
    return "{" + O + "}";
  }
  function y(O) {
    return /^-?0\d/.test(O);
  }
  function b(O, S) {
    return O <= S;
  }
  function g(O, S) {
    return O >= S;
  }
  function T(O, S) {
    var L = [], R = i("{", "}", O);
    if (!R) return [O];
    var M = R.pre, Y = R.post.length ? T(R.post, !1) : [""];
    if (/\$$/.test(R.pre)) for (var X = 0; X < Y.length; X++) {
      var oe = M + "{" + R.body + "}" + Y[X];
      L.push(oe);
    }
    else {
      var x, ge, z = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(R.body), Z = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(R.body), j = z || Z, se = R.body.indexOf(",") >= 0;
      if (!j && !se) return R.post.match(/,(?!,).*\}/) ? T(O = R.pre + "{" + R.body + l + R.post) : [O];
      if (j) x = R.body.split(/\.\./);
      else if ((x = d(R.body)).length === 1 && (x = T(x[0], !1).map(E)).length === 1) return Y.map(function(ht) {
        return R.pre + x[0] + ht;
      });
      if (j) {
        var de = h(x[0]), Ie = h(x[1]), K = Math.max(x[0].length, x[1].length), be = x.length == 3 ? Math.abs(h(x[2])) : 1, Fe = b;
        Ie < de && (be *= -1, Fe = g);
        var Me = x.some(y);
        ge = [];
        for (var fe = de; Fe(fe, Ie); fe += be) {
          var Ue;
          if (Z) (Ue = String.fromCharCode(fe)) === "\\" && (Ue = "");
          else if (Ue = String(fe), Me) {
            var Ee = K - Ue.length;
            if (Ee > 0) {
              var we = new Array(Ee + 1).join("0");
              Ue = fe < 0 ? "-" + we + Ue.slice(1) : we + Ue;
            }
          }
          ge.push(Ue);
        }
      } else {
        ge = [];
        for (var ee = 0; ee < x.length; ee++) ge.push.apply(ge, T(x[ee], !1));
      }
      for (ee = 0; ee < ge.length; ee++) for (X = 0; X < Y.length; X++) oe = M + ge[ee] + Y[X], (!S || j || oe) && L.push(oe);
    }
    return L;
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
    var i = r(298), o = r(526).utf8, a = r(135), l = r(526).bin, f = function(c, h) {
      c.constructor == String ? c = h && h.encoding === "binary" ? l.stringToBytes(c) : o.stringToBytes(c) : a(c) ? c = Array.prototype.slice.call(c, 0) : Array.isArray(c) || c.constructor === Uint8Array || (c = c.toString());
      for (var s = i.bytesToWords(c), d = 8 * c.length, E = 1732584193, y = -271733879, b = -1732584194, g = 271733878, T = 0; T < s.length; T++) s[T] = 16711935 & (s[T] << 8 | s[T] >>> 24) | 4278255360 & (s[T] << 24 | s[T] >>> 8);
      s[d >>> 5] |= 128 << d % 32, s[14 + (d + 64 >>> 9 << 4)] = d;
      var O = f._ff, S = f._gg, L = f._hh, R = f._ii;
      for (T = 0; T < s.length; T += 16) {
        var M = E, Y = y, X = b, oe = g;
        E = O(E, y, b, g, s[T + 0], 7, -680876936), g = O(g, E, y, b, s[T + 1], 12, -389564586), b = O(b, g, E, y, s[T + 2], 17, 606105819), y = O(y, b, g, E, s[T + 3], 22, -1044525330), E = O(E, y, b, g, s[T + 4], 7, -176418897), g = O(g, E, y, b, s[T + 5], 12, 1200080426), b = O(b, g, E, y, s[T + 6], 17, -1473231341), y = O(y, b, g, E, s[T + 7], 22, -45705983), E = O(E, y, b, g, s[T + 8], 7, 1770035416), g = O(g, E, y, b, s[T + 9], 12, -1958414417), b = O(b, g, E, y, s[T + 10], 17, -42063), y = O(y, b, g, E, s[T + 11], 22, -1990404162), E = O(E, y, b, g, s[T + 12], 7, 1804603682), g = O(g, E, y, b, s[T + 13], 12, -40341101), b = O(b, g, E, y, s[T + 14], 17, -1502002290), E = S(E, y = O(y, b, g, E, s[T + 15], 22, 1236535329), b, g, s[T + 1], 5, -165796510), g = S(g, E, y, b, s[T + 6], 9, -1069501632), b = S(b, g, E, y, s[T + 11], 14, 643717713), y = S(y, b, g, E, s[T + 0], 20, -373897302), E = S(E, y, b, g, s[T + 5], 5, -701558691), g = S(g, E, y, b, s[T + 10], 9, 38016083), b = S(b, g, E, y, s[T + 15], 14, -660478335), y = S(y, b, g, E, s[T + 4], 20, -405537848), E = S(E, y, b, g, s[T + 9], 5, 568446438), g = S(g, E, y, b, s[T + 14], 9, -1019803690), b = S(b, g, E, y, s[T + 3], 14, -187363961), y = S(y, b, g, E, s[T + 8], 20, 1163531501), E = S(E, y, b, g, s[T + 13], 5, -1444681467), g = S(g, E, y, b, s[T + 2], 9, -51403784), b = S(b, g, E, y, s[T + 7], 14, 1735328473), E = L(E, y = S(y, b, g, E, s[T + 12], 20, -1926607734), b, g, s[T + 5], 4, -378558), g = L(g, E, y, b, s[T + 8], 11, -2022574463), b = L(b, g, E, y, s[T + 11], 16, 1839030562), y = L(y, b, g, E, s[T + 14], 23, -35309556), E = L(E, y, b, g, s[T + 1], 4, -1530992060), g = L(g, E, y, b, s[T + 4], 11, 1272893353), b = L(b, g, E, y, s[T + 7], 16, -155497632), y = L(y, b, g, E, s[T + 10], 23, -1094730640), E = L(E, y, b, g, s[T + 13], 4, 681279174), g = L(g, E, y, b, s[T + 0], 11, -358537222), b = L(b, g, E, y, s[T + 3], 16, -722521979), y = L(y, b, g, E, s[T + 6], 23, 76029189), E = L(E, y, b, g, s[T + 9], 4, -640364487), g = L(g, E, y, b, s[T + 12], 11, -421815835), b = L(b, g, E, y, s[T + 15], 16, 530742520), E = R(E, y = L(y, b, g, E, s[T + 2], 23, -995338651), b, g, s[T + 0], 6, -198630844), g = R(g, E, y, b, s[T + 7], 10, 1126891415), b = R(b, g, E, y, s[T + 14], 15, -1416354905), y = R(y, b, g, E, s[T + 5], 21, -57434055), E = R(E, y, b, g, s[T + 12], 6, 1700485571), g = R(g, E, y, b, s[T + 3], 10, -1894986606), b = R(b, g, E, y, s[T + 10], 15, -1051523), y = R(y, b, g, E, s[T + 1], 21, -2054922799), E = R(E, y, b, g, s[T + 8], 6, 1873313359), g = R(g, E, y, b, s[T + 15], 10, -30611744), b = R(b, g, E, y, s[T + 6], 15, -1560198380), y = R(y, b, g, E, s[T + 13], 21, 1309151649), E = R(E, y, b, g, s[T + 4], 6, -145523070), g = R(g, E, y, b, s[T + 11], 10, -1120210379), b = R(b, g, E, y, s[T + 2], 15, 718787259), y = R(y, b, g, E, s[T + 9], 21, -343485551), E = E + M >>> 0, y = y + Y >>> 0, b = b + X >>> 0, g = g + oe >>> 0;
      }
      return i.endian([E, y, b, g]);
    };
    f._ff = function(c, h, s, d, E, y, b) {
      var g = c + (h & s | ~h & d) + (E >>> 0) + b;
      return (g << y | g >>> 32 - y) + h;
    }, f._gg = function(c, h, s, d, E, y, b) {
      var g = c + (h & d | s & ~d) + (E >>> 0) + b;
      return (g << y | g >>> 32 - y) + h;
    }, f._hh = function(c, h, s, d, E, y, b) {
      var g = c + (h ^ s ^ d) + (E >>> 0) + b;
      return (g << y | g >>> 32 - y) + h;
    }, f._ii = function(c, h, s, d, E, y, b) {
      var g = c + (s ^ (h | ~d)) + (E >>> 0) + b;
      return (g << y | g >>> 32 - y) + h;
    }, f._blocksize = 16, f._digestsize = 16, n.exports = function(c, h) {
      if (c == null) throw new Error("Illegal argument " + c);
      var s = i.wordsToBytes(f(c, h));
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
    var f, c, h = [];
    for (c in typeof l != "string" && (l = "?"), a) if (r.call(a, c)) {
      if ((f = a[c]) || f != null && !isNaN(f) || (f = ""), c = o(c), f = o(f), c === null || f === null) continue;
      h.push(c + "=" + f);
    }
    return h.length ? l + h.join("&") : "";
  }, e.parse = function(a) {
    for (var l, f = /([^=?#&]+)=?([^&]*)/g, c = {}; l = f.exec(a); ) {
      var h = i(l[1]), s = i(l[2]);
      h === null || s === null || h in c || (c[h] = s);
    }
    return c;
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
  var i = r(670), o = r(647), a = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, l = /[\n\r\t]/g, f = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, c = /:\d+$/, h = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, s = /^[a-zA-Z]:/;
  function d(S) {
    return (S || "").toString().replace(a, "");
  }
  var E = [["#", "hash"], ["?", "query"], function(S, L) {
    return g(L.protocol) ? S.replace(/\\/g, "/") : S;
  }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]], y = { hash: 1, query: 1 };
  function b(S) {
    var L, R = (typeof window < "u" ? window : typeof Ir < "u" ? Ir : typeof self < "u" ? self : {}).location || {}, M = {}, Y = typeof (S = S || R);
    if (S.protocol === "blob:") M = new O(unescape(S.pathname), {});
    else if (Y === "string") for (L in M = new O(S, {}), y) delete M[L];
    else if (Y === "object") {
      for (L in S) L in y || (M[L] = S[L]);
      M.slashes === void 0 && (M.slashes = f.test(S.href));
    }
    return M;
  }
  function g(S) {
    return S === "file:" || S === "ftp:" || S === "http:" || S === "https:" || S === "ws:" || S === "wss:";
  }
  function T(S, L) {
    S = (S = d(S)).replace(l, ""), L = L || {};
    var R, M = h.exec(S), Y = M[1] ? M[1].toLowerCase() : "", X = !!M[2], oe = !!M[3], x = 0;
    return X ? oe ? (R = M[2] + M[3] + M[4], x = M[2].length + M[3].length) : (R = M[2] + M[4], x = M[2].length) : oe ? (R = M[3] + M[4], x = M[3].length) : R = M[4], Y === "file:" ? x >= 2 && (R = R.slice(2)) : g(Y) ? R = M[4] : Y ? X && (R = R.slice(2)) : x >= 2 && g(L.protocol) && (R = M[4]), { protocol: Y, slashes: X || g(Y), slashesCount: x, rest: R };
  }
  function O(S, L, R) {
    if (S = (S = d(S)).replace(l, ""), !(this instanceof O)) return new O(S, L, R);
    var M, Y, X, oe, x, ge, z = E.slice(), Z = typeof L, j = this, se = 0;
    for (Z !== "object" && Z !== "string" && (R = L, L = null), R && typeof R != "function" && (R = o.parse), M = !(Y = T(S || "", L = b(L))).protocol && !Y.slashes, j.slashes = Y.slashes || M && L.slashes, j.protocol = Y.protocol || L.protocol || "", S = Y.rest, (Y.protocol === "file:" && (Y.slashesCount !== 2 || s.test(S)) || !Y.slashes && (Y.protocol || Y.slashesCount < 2 || !g(j.protocol))) && (z[3] = [/(.*)/, "pathname"]); se < z.length; se++) typeof (oe = z[se]) != "function" ? (X = oe[0], ge = oe[1], X != X ? j[ge] = S : typeof X == "string" ? ~(x = X === "@" ? S.lastIndexOf(X) : S.indexOf(X)) && (typeof oe[2] == "number" ? (j[ge] = S.slice(0, x), S = S.slice(x + oe[2])) : (j[ge] = S.slice(x), S = S.slice(0, x))) : (x = X.exec(S)) && (j[ge] = x[1], S = S.slice(0, x.index)), j[ge] = j[ge] || M && oe[3] && L[ge] || "", oe[4] && (j[ge] = j[ge].toLowerCase())) : S = oe(S, j);
    R && (j.query = R(j.query)), M && L.slashes && j.pathname.charAt(0) !== "/" && (j.pathname !== "" || L.pathname !== "") && (j.pathname = function(de, Ie) {
      if (de === "") return Ie;
      for (var K = (Ie || "/").split("/").slice(0, -1).concat(de.split("/")), be = K.length, Fe = K[be - 1], Me = !1, fe = 0; be--; ) K[be] === "." ? K.splice(be, 1) : K[be] === ".." ? (K.splice(be, 1), fe++) : fe && (be === 0 && (Me = !0), K.splice(be, 1), fe--);
      return Me && K.unshift(""), Fe !== "." && Fe !== ".." || K.push(""), K.join("/");
    }(j.pathname, L.pathname)), j.pathname.charAt(0) !== "/" && g(j.protocol) && (j.pathname = "/" + j.pathname), i(j.port, j.protocol) || (j.host = j.hostname, j.port = ""), j.username = j.password = "", j.auth && (~(x = j.auth.indexOf(":")) ? (j.username = j.auth.slice(0, x), j.username = encodeURIComponent(decodeURIComponent(j.username)), j.password = j.auth.slice(x + 1), j.password = encodeURIComponent(decodeURIComponent(j.password))) : j.username = encodeURIComponent(decodeURIComponent(j.auth)), j.auth = j.password ? j.username + ":" + j.password : j.username), j.origin = j.protocol !== "file:" && g(j.protocol) && j.host ? j.protocol + "//" + j.host : "null", j.href = j.toString();
  }
  O.prototype = { set: function(S, L, R) {
    var M = this;
    switch (S) {
      case "query":
        typeof L == "string" && L.length && (L = (R || o.parse)(L)), M[S] = L;
        break;
      case "port":
        M[S] = L, i(L, M.protocol) ? L && (M.host = M.hostname + ":" + L) : (M.host = M.hostname, M[S] = "");
        break;
      case "hostname":
        M[S] = L, M.port && (L += ":" + M.port), M.host = L;
        break;
      case "host":
        M[S] = L, c.test(L) ? (L = L.split(":"), M.port = L.pop(), M.hostname = L.join(":")) : (M.hostname = L, M.port = "");
        break;
      case "protocol":
        M.protocol = L.toLowerCase(), M.slashes = !R;
        break;
      case "pathname":
      case "hash":
        if (L) {
          var Y = S === "pathname" ? "/" : "#";
          M[S] = L.charAt(0) !== Y ? Y + L : L;
        } else M[S] = L;
        break;
      case "username":
      case "password":
        M[S] = encodeURIComponent(L);
        break;
      case "auth":
        var X = L.indexOf(":");
        ~X ? (M.username = L.slice(0, X), M.username = encodeURIComponent(decodeURIComponent(M.username)), M.password = L.slice(X + 1), M.password = encodeURIComponent(decodeURIComponent(M.password))) : M.username = encodeURIComponent(decodeURIComponent(L));
    }
    for (var oe = 0; oe < E.length; oe++) {
      var x = E[oe];
      x[4] && (M[x[1]] = M[x[1]].toLowerCase());
    }
    return M.auth = M.password ? M.username + ":" + M.password : M.username, M.origin = M.protocol !== "file:" && g(M.protocol) && M.host ? M.protocol + "//" + M.host : "null", M.href = M.toString(), M;
  }, toString: function(S) {
    S && typeof S == "function" || (S = o.stringify);
    var L, R = this, M = R.host, Y = R.protocol;
    Y && Y.charAt(Y.length - 1) !== ":" && (Y += ":");
    var X = Y + (R.protocol && R.slashes || g(R.protocol) ? "//" : "");
    return R.username ? (X += R.username, R.password && (X += ":" + R.password), X += "@") : R.password ? (X += ":" + R.password, X += "@") : R.protocol !== "file:" && g(R.protocol) && !M && R.pathname !== "/" && (X += "@"), (M[M.length - 1] === ":" || c.test(R.hostname) && !R.port) && (M += ":"), X += M + R.pathname, (L = typeof R.query == "object" ? S(R.query) : R.query) && (X += L.charAt(0) !== "?" ? "?" + L : L), R.hash && (X += R.hash), X;
  } }, O.extractProtocol = T, O.location = b, O.trimLeft = d, O.qs = o, n.exports = O;
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
      if (d === null || (E = d, Function.toString.call(E).indexOf("[native code]") === -1)) return d;
      var E;
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
    }() ? Reflect.construct : function(E, y, b) {
      var g = [null];
      g.push.apply(g, y);
      var T = new (Function.bind.apply(E, g))();
      return b && o(T, b.prototype), T;
    }, i.apply(null, arguments);
  }
  function o(h, s) {
    return o = Object.setPrototypeOf || function(d, E) {
      return d.__proto__ = E, d;
    }, o(h, s);
  }
  function a(h) {
    return a = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, a(h);
  }
  var l = function(h) {
    function s(d) {
      var E;
      return function(y, b) {
        if (!(y instanceof b)) throw new TypeError("Cannot call a class as a function");
      }(this, s), (E = function(y, b) {
        return !b || e(b) !== "object" && typeof b != "function" ? function(g) {
          if (g === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return g;
        }(y) : b;
      }(this, a(s).call(this, d))).name = "ObjectPrototypeMutationError", E;
    }
    return function(d, E) {
      if (typeof E != "function" && E !== null) throw new TypeError("Super expression must either be null or a function");
      d.prototype = Object.create(E && E.prototype, { constructor: { value: d, writable: !0, configurable: !0 } }), E && o(d, E);
    }(s, h), s;
  }(r(Error));
  function f(h, s) {
    for (var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
    }, E = s.split("."), y = E.length, b = function(O) {
      var S = E[O];
      if (!h) return { v: void 0 };
      if (S === "+") {
        if (Array.isArray(h)) return { v: h.map(function(R, M) {
          var Y = E.slice(O + 1);
          return Y.length > 0 ? f(R, Y.join("."), d) : d(h, M, E, O);
        }) };
        var L = E.slice(0, O).join(".");
        throw new Error("Object at wildcard (".concat(L, ") is not an array"));
      }
      h = d(h, S, E, O);
    }, g = 0; g < y; g++) {
      var T = b(g);
      if (e(T) === "object") return T.v;
    }
    return h;
  }
  function c(h, s) {
    return h.length === s + 1;
  }
  n.exports = { set: function(h, s, d) {
    if (e(h) != "object" || h === null || s === void 0) return h;
    if (typeof s == "number") return h[s] = d, h[s];
    try {
      return f(h, s, function(E, y, b, g) {
        if (E === Reflect.getPrototypeOf({})) throw new l("Attempting to mutate Object.prototype");
        if (!E[y]) {
          var T = Number.isInteger(Number(b[g + 1])), O = b[g + 1] === "+";
          E[y] = T || O ? [] : {};
        }
        return c(b, g) && (E[y] = d), E[y];
      });
    } catch (E) {
      if (E instanceof l) throw E;
      return h;
    }
  }, get: function(h, s) {
    if (e(h) != "object" || h === null || s === void 0) return h;
    if (typeof s == "number") return h[s];
    try {
      return f(h, s, function(d, E) {
        return d[E];
      });
    } catch {
      return h;
    }
  }, has: function(h, s) {
    var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (e(h) != "object" || h === null || s === void 0) return !1;
    if (typeof s == "number") return s in h;
    try {
      var E = !1;
      return f(h, s, function(y, b, g, T) {
        if (!c(g, T)) return y && y[b];
        E = d.own ? y.hasOwnProperty(b) : b in y;
      }), E;
    } catch {
      return !1;
    }
  }, hasOwn: function(h, s, d) {
    return this.has(h, s, d || { own: !0 });
  }, isIn: function(h, s, d) {
    var E = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (e(h) != "object" || h === null || s === void 0) return !1;
    try {
      var y = !1, b = !1;
      return f(h, s, function(g, T, O, S) {
        return y = y || g === d || !!g && g[T] === d, b = c(O, S) && e(g) === "object" && T in g, g && g[T];
      }), E.validPath ? y && b : y;
    } catch {
      return !1;
    }
  }, ObjectPrototypeMutationError: l };
} }, Ko = {};
function Re(n) {
  var e = Ko[n];
  if (e !== void 0) return e.exports;
  var r = Ko[n] = { id: n, loaded: !1, exports: {} };
  return Ef[n].call(r.exports, r, r.exports, Re), r.loaded = !0, r.exports;
}
Re.n = (n) => {
  var e = n && n.__esModule ? () => n.default : () => n;
  return Re.d(e, { a: e }), e;
}, Re.d = (n, e) => {
  for (var r in e) Re.o(e, r) && !Re.o(n, r) && Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
}, Re.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e), Re.nmd = (n) => (n.paths = [], n.children || (n.children = []), n);
var wf = Re(737), yf = Re.n(wf);
function mi(n) {
  if (!zi(n)) throw new Error("Parameter was not an error");
}
function zi(n) {
  return !!n && typeof n == "object" && (e = n, Object.prototype.toString.call(e) === "[object Error]") || n instanceof Error;
  var e;
}
class yt extends Error {
  constructor(e, r) {
    const i = [...arguments], { options: o, shortMessage: a } = function(f) {
      let c, h = "";
      if (f.length === 0) c = {};
      else if (zi(f[0])) c = { cause: f[0] }, h = f.slice(1).join(" ") || "";
      else if (f[0] && typeof f[0] == "object") c = Object.assign({}, f[0]), h = f.slice(1).join(" ") || "";
      else {
        if (typeof f[0] != "string") throw new Error("Invalid arguments passed to Layerr");
        c = {}, h = h = f.join(" ") || "";
      }
      return { options: c, shortMessage: h };
    }(i);
    let l = a;
    if (o.cause && (l = `${l}: ${o.cause.message}`), super(l), this.message = l, o.name && typeof o.name == "string" ? this.name = o.name : this.name = "Layerr", o.cause && Object.defineProperty(this, "_cause", { value: o.cause }), Object.defineProperty(this, "_info", { value: {} }), o.info && typeof o.info == "object" && Object.assign(this._info, o.info), Error.captureStackTrace) {
      const f = o.constructorOpt || this.constructor;
      Error.captureStackTrace(this, f);
    }
  }
  static cause(e) {
    return mi(e), e._cause && zi(e._cause) ? e._cause : null;
  }
  static fullStack(e) {
    mi(e);
    const r = yt.cause(e);
    return r ? `${e.stack}
caused by: ${yt.fullStack(r)}` : e.stack ?? "";
  }
  static info(e) {
    mi(e);
    const r = {}, i = yt.cause(e);
    return i && Object.assign(r, yt.info(i)), e._info && Object.assign(r, e._info), r;
  }
  toString() {
    let e = this.name || this.constructor.name || this.constructor.prototype.name;
    return this.message && (e = `${e}: ${this.message}`), e;
  }
}
var vf = Re(47), jr = Re.n(vf);
const Jo = "__PATH_SEPARATOR_POSIX__", Qo = "__PATH_SEPARATOR_WINDOWS__";
function $e(n) {
  try {
    const e = n.replace(/\//g, Jo).replace(/\\\\/g, Qo);
    return encodeURIComponent(e).split(Qo).join("\\\\").split(Jo).join("/");
  } catch (e) {
    throw new yt(e, "Failed encoding path");
  }
}
function es(n) {
  return n.startsWith("/") ? n : "/" + n;
}
function yr(n) {
  let e = n;
  return e[0] !== "/" && (e = "/" + e), /^.+\/$/.test(e) && (e = e.substr(0, e.length - 1)), e;
}
function bf(n) {
  let e = new (yf())(n).pathname;
  return e.length <= 0 && (e = "/"), yr(e);
}
function De() {
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
      var c = o.join("/"), h = (c = c.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
      return h.shift() + (h.length > 0 ? "?" : "") + h.join("&");
    }(typeof arguments[0] == "object" ? arguments[0] : [].slice.call(arguments));
  }(e.reduce((i, o, a) => ((a === 0 || o !== "/" || o === "/" && i[i.length - 1] !== "/") && i.push(o), i), []));
}
var _f = Re(542), ur = Re.n(_f);
function ts(n, e) {
  const r = n.url.replace("//", ""), i = r.indexOf("/") == -1 ? "/" : r.slice(r.indexOf("/")), o = n.method ? n.method.toUpperCase() : "GET", a = !!/(^|,)\s*auth\s*($|,)/.test(e.qop) && "auth", l = `00000000${e.nc}`.slice(-8), f = function(E, y, b, g, T, O, S) {
    const L = S || ur()(`${y}:${b}:${g}`);
    return E && E.toLowerCase() === "md5-sess" ? ur()(`${L}:${T}:${O}`) : L;
  }(e.algorithm, e.username, e.realm, e.password, e.nonce, e.cnonce, e.ha1), c = ur()(`${o}:${i}`), h = a ? ur()(`${f}:${e.nonce}:${l}:${e.cnonce}:${a}:${c}`) : ur()(`${f}:${e.nonce}:${c}`), s = { username: e.username, realm: e.realm, nonce: e.nonce, uri: i, qop: a, response: h, nc: l, cnonce: e.cnonce, algorithm: e.algorithm, opaque: e.opaque }, d = [];
  for (const E in s) s[E] && (E === "qop" || E === "nc" || E === "algorithm" ? d.push(`${E}=${s[E]}`) : d.push(`${E}="${s[E]}"`));
  return `Digest ${d.join(", ")}`;
}
function il(n) {
  return (n.headers && n.headers.get("www-authenticate") || "").split(/\s/)[0].toLowerCase() === "digest";
}
var Tf = Re(101), ol = Re.n(Tf);
function ns(n) {
  return ol().decode(n);
}
function rs(n, e) {
  var r;
  return `Basic ${r = `${n}:${e}`, ol().encode(r)}`;
}
const is = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : typeof window < "u" ? window : globalThis, Nf = is.fetch.bind(is);
let It = function(n) {
  return n.Auto = "auto", n.Digest = "digest", n.None = "none", n.Password = "password", n.Token = "token", n;
}({}), yn = function(n) {
  return n.DataTypeNoLength = "data-type-no-length", n.InvalidAuthType = "invalid-auth-type", n.InvalidOutputFormat = "invalid-output-format", n.LinkUnsupportedAuthType = "link-unsupported-auth", n.InvalidUpdateRange = "invalid-update-range", n.NotSupported = "not-supported", n;
}({});
function sl(n, e, r, i, o) {
  switch (n.authType) {
    case It.Auto:
      e && r && (n.headers.Authorization = rs(e, r));
      break;
    case It.Digest:
      n.digest = /* @__PURE__ */ function(l, f, c) {
        return { username: l, password: f, ha1: c, nc: 0, algorithm: "md5", hasDigestAuth: !1 };
      }(e, r, o);
      break;
    case It.None:
      break;
    case It.Password:
      n.headers.Authorization = rs(e, r);
      break;
    case It.Token:
      n.headers.Authorization = `${(a = i).token_type} ${a.access_token}`;
      break;
    default:
      throw new yt({ info: { code: yn.InvalidAuthType } }, `Invalid auth type: ${n.authType}`);
  }
  var a;
}
Re(345), Re(800);
const os = "@@HOTPATCHER", If = () => {
};
function gi(n) {
  return { original: n, methods: [n], final: !1 };
}
class Af {
  constructor() {
    this._configuration = { registry: {}, getEmptyAction: "null" }, this.__type__ = os;
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
    if (!e || e.__type__ !== os) throw new Error("Failed taking control of target HotPatcher instance: Invalid type or object");
    return Object.keys(e.configuration.registry).forEach((i) => {
      this.configuration.registry.hasOwnProperty(i) ? r && (this.configuration.registry[i] = Object.assign({}, e.configuration.registry[i])) : this.configuration.registry[i] = Object.assign({}, e.configuration.registry[i]);
    }), e._configuration = this.configuration, this;
  }
  execute(e) {
    const r = this.get(e) || If;
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
        for (var l = arguments.length, f = new Array(l), c = 0; c < l; c++) f[c] = arguments[c];
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
    if (o) this.configuration.registry[e] ? this.configuration.registry[e].methods.push(r) : this.configuration.registry[e] = gi(r);
    else if (this.isPatched(e)) {
      const { original: a } = this.configuration.registry[e];
      this.configuration.registry[e] = Object.assign(gi(r), { original: a });
    } else this.configuration.registry[e] = gi(r);
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
let Ei = null;
function oo() {
  return Ei || (Ei = new Af()), Ei;
}
function Gr(n) {
  return function(e) {
    if (typeof e != "object" || e === null || Object.prototype.toString.call(e) != "[object Object]") return !1;
    if (Object.getPrototypeOf(e) === null) return !0;
    let r = e;
    for (; Object.getPrototypeOf(r) !== null; ) r = Object.getPrototypeOf(r);
    return Object.getPrototypeOf(e) === r;
  }(n) ? Object.assign({}, n) : Object.setPrototypeOf(Object.assign({}, n), Object.getPrototypeOf(n));
}
function ss() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
  let i = null, o = [...e];
  for (; o.length > 0; ) {
    const a = o.shift();
    i = i ? al(i, a) : Gr(a);
  }
  return i;
}
function al(n, e) {
  const r = Gr(n);
  return Object.keys(e).forEach((i) => {
    r.hasOwnProperty(i) ? Array.isArray(e[i]) ? r[i] = Array.isArray(r[i]) ? [...r[i], ...e[i]] : [...e[i]] : typeof e[i] == "object" && e[i] ? r[i] = typeof r[i] == "object" && r[i] ? al(r[i], e[i]) : Gr(e[i]) : r[i] = e[i] : r[i] = e[i];
  }), r;
}
function Of(n) {
  const e = {};
  for (const r of n.keys()) e[r] = n.get(r);
  return e;
}
function Xi() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
  if (e.length === 0) return {};
  const i = {};
  return e.reduce((o, a) => (Object.keys(a).forEach((l) => {
    const f = l.toLowerCase();
    i.hasOwnProperty(f) ? o[i[f]] = a[l] : (i[f] = l, o[l] = a[l]);
  }), o), {});
}
Re(805);
const Rf = typeof ArrayBuffer == "function", { toString: Sf } = Object.prototype;
function ll(n) {
  return Rf && (n instanceof ArrayBuffer || Sf.call(n) === "[object ArrayBuffer]");
}
function ul(n) {
  return n != null && n.constructor != null && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n);
}
function so(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
function Hi(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const cl = so(function(n) {
  const e = n._digest;
  return delete n._digest, e.hasDigestAuth && (n = ss(n, { headers: { Authorization: ts(n, e) } })), Hi(Wr(n), function(r) {
    let i = !1;
    return o = function(l) {
      return i ? l : r;
    }, (a = function() {
      if (r.status == 401) return e.hasDigestAuth = function(l, f) {
        if (!il(l)) return !1;
        const c = /([a-z0-9_-]+)=(?:"([^"]+)"|([a-z0-9_-]+))/gi;
        for (; ; ) {
          const h = l.headers && l.headers.get("www-authenticate") || "", s = c.exec(h);
          if (!s) break;
          f[s[1]] = s[2] || s[3];
        }
        return f.nc += 1, f.cnonce = function() {
          let h = "";
          for (let s = 0; s < 32; ++s) h = `${h}${"abcdef0123456789"[Math.floor(16 * Math.random())]}`;
          return h;
        }(), !0;
      }(r, e), function() {
        if (e.hasDigestAuth) return Hi(Wr(n = ss(n, { headers: { Authorization: ts(n, e) } })), function(l) {
          return l.status == 401 ? e.hasDigestAuth = !1 : e.nc++, i = !0, l;
        });
      }();
      e.nc++;
    }()) && a.then ? a.then(o) : o(a);
    var o, a;
  });
}), Cf = so(function(n, e) {
  return Hi(Wr(n), function(r) {
    return r.ok ? (e.authType = It.Password, r) : r.status == 401 && il(r) ? (e.authType = It.Digest, sl(e, e.username, e.password, void 0, void 0), n._digest = e.digest, cl(n)) : r;
  });
}), Qe = so(function(n, e) {
  return e.authType === It.Auto ? Cf(n, e) : n._digest ? cl(n) : Wr(n);
});
function et(n, e, r) {
  const i = Gr(n);
  return i.headers = Xi(e.headers, i.headers || {}, r.headers || {}), r.data !== void 0 && (i.data = r.data), r.signal && (i.signal = r.signal), e.httpAgent && (i.httpAgent = e.httpAgent), e.httpsAgent && (i.httpsAgent = e.httpsAgent), e.digest && (i._digest = e.digest), typeof e.withCredentials == "boolean" && (i.withCredentials = e.withCredentials), i;
}
function Wr(n) {
  const e = oo();
  return e.patchInline("request", (r) => e.patchInline("fetch", Nf, r.url, function(i) {
    let o = {};
    const a = { method: i.method };
    if (i.headers && (o = Xi(o, i.headers)), i.data !== void 0) {
      const [l, f] = function(c) {
        if (typeof c == "string") return [c, {}];
        if (ul(c)) return [c, {}];
        if (ll(c)) return [c, {}];
        if (c && typeof c == "object") return [JSON.stringify(c), { "content-type": "application/json" }];
        throw new Error("Unable to convert request body: Unexpected body type: " + typeof c);
      }(i.data);
      a.body = l, o = Xi(o, f);
    }
    return i.signal && (a.signal = i.signal), i.withCredentials && (a.credentials = "include"), a.headers = o, a;
  }(r)), n);
}
var Lf = Re(285);
const Vr = (n) => {
  if (typeof n != "string") throw new TypeError("invalid pattern");
  if (n.length > 65536) throw new TypeError("pattern is too long");
}, xf = { "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", !0], "[:alpha:]": ["\\p{L}\\p{Nl}", !0], "[:ascii:]": ["\\x00-\\x7f", !1], "[:blank:]": ["\\p{Zs}\\t", !0], "[:cntrl:]": ["\\p{Cc}", !0], "[:digit:]": ["\\p{Nd}", !0], "[:graph:]": ["\\p{Z}\\p{C}", !0, !0], "[:lower:]": ["\\p{Ll}", !0], "[:print:]": ["\\p{C}", !0], "[:punct:]": ["\\p{P}", !0], "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", !0], "[:upper:]": ["\\p{Lu}", !0], "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", !0], "[:xdigit:]": ["A-Fa-f0-9", !1] }, cr = (n) => n.replace(/[[\]\\-]/g, "\\$&"), as = (n) => n.join(""), Pf = (n, e) => {
  const r = e;
  if (n.charAt(r) !== "[") throw new Error("not in a brace expression");
  const i = [], o = [];
  let a = r + 1, l = !1, f = !1, c = !1, h = !1, s = r, d = "";
  e: for (; a < n.length; ) {
    const g = n.charAt(a);
    if (g !== "!" && g !== "^" || a !== r + 1) {
      if (g === "]" && l && !c) {
        s = a + 1;
        break;
      }
      if (l = !0, g !== "\\" || c) {
        if (g === "[" && !c) {
          for (const [T, [O, S, L]] of Object.entries(xf)) if (n.startsWith(T, a)) {
            if (d) return ["$.", !1, n.length - r, !0];
            a += T.length, L ? o.push(O) : i.push(O), f = f || S;
            continue e;
          }
        }
        c = !1, d ? (g > d ? i.push(cr(d) + "-" + cr(g)) : g === d && i.push(cr(g)), d = "", a++) : n.startsWith("-]", a + 1) ? (i.push(cr(g + "-")), a += 2) : n.startsWith("-", a + 1) ? (d = g, a += 2) : (i.push(cr(g)), a++);
      } else c = !0, a++;
    } else h = !0, a++;
  }
  if (s < a) return ["", !1, 0, !1];
  if (!i.length && !o.length) return ["$.", !1, n.length - r, !0];
  if (o.length === 0 && i.length === 1 && /^\\?.$/.test(i[0]) && !h)
    return [(E = i[0].length === 2 ? i[0].slice(-1) : i[0], E.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")), !1, s - r, !1];
  var E;
  const y = "[" + (h ? "^" : "") + as(i) + "]", b = "[" + (h ? "" : "^") + as(o) + "]";
  return [i.length && o.length ? "(" + y + "|" + b + ")" : i.length ? y : b, f, s - r, !0];
}, dr = function(n) {
  let { windowsPathsNoEscape: e = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return e ? n.replace(/\[([^\/\\])\]/g, "$1") : n.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
}, $f = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), ls = (n) => $f.has(n), wi = "(?!\\.)", Df = /* @__PURE__ */ new Set(["[", "."]), kf = /* @__PURE__ */ new Set(["..", "."]), Ff = new Set("().*{}+?[]^$\\!"), ao = "[^/]", us = ao + "*?", cs = ao + "+?";
var Ke, nt, on, Pe, Xe, mn, xn, gn, Kt, Pn, br, $n, fl, En, Ur, Yi, hl;
const mt = class mt {
  constructor(e, r) {
    Tt(this, $n);
    ae(this, "type");
    Tt(this, Ke);
    Tt(this, nt);
    Tt(this, on, !1);
    Tt(this, Pe, []);
    Tt(this, Xe);
    Tt(this, mn);
    Tt(this, xn);
    Tt(this, gn, !1);
    Tt(this, Kt);
    Tt(this, Pn);
    Tt(this, br, !1);
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.type = e, e && je(this, nt, !0), je(this, Xe, r), je(this, Ke, q(this, Xe) ? q(q(this, Xe), Ke) : this), je(this, Kt, q(this, Ke) === this ? i : q(q(this, Ke), Kt)), je(this, xn, q(this, Ke) === this ? [] : q(q(this, Ke), xn)), e !== "!" || q(q(this, Ke), gn) || q(this, xn).push(this), je(this, mn, q(this, Xe) ? q(q(this, Xe), Pe).length : 0);
  }
  get hasMagic() {
    if (q(this, nt) !== void 0) return q(this, nt);
    for (const e of q(this, Pe)) if (typeof e != "string" && (e.type || e.hasMagic)) return je(this, nt, !0);
    return q(this, nt);
  }
  toString() {
    return q(this, Pn) !== void 0 ? q(this, Pn) : this.type ? je(this, Pn, this.type + "(" + q(this, Pe).map((e) => String(e)).join("|") + ")") : je(this, Pn, q(this, Pe).map((e) => String(e)).join(""));
  }
  push() {
    for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
    for (const o of r) if (o !== "") {
      if (typeof o != "string" && !(o instanceof mt && q(o, Xe) === this)) throw new Error("invalid part: " + o);
      q(this, Pe).push(o);
    }
  }
  toJSON() {
    var r;
    const e = this.type === null ? q(this, Pe).slice().map((i) => typeof i == "string" ? i : i.toJSON()) : [this.type, ...q(this, Pe).map((i) => i.toJSON())];
    return this.isStart() && !this.type && e.unshift([]), this.isEnd() && (this === q(this, Ke) || q(q(this, Ke), gn) && ((r = q(this, Xe)) == null ? void 0 : r.type) === "!") && e.push({}), e;
  }
  isStart() {
    var r;
    if (q(this, Ke) === this) return !0;
    if (!((r = q(this, Xe)) != null && r.isStart())) return !1;
    if (q(this, mn) === 0) return !0;
    const e = q(this, Xe);
    for (let i = 0; i < q(this, mn); i++) {
      const o = q(e, Pe)[i];
      if (!(o instanceof mt && o.type === "!")) return !1;
    }
    return !0;
  }
  isEnd() {
    var r, i, o;
    if (q(this, Ke) === this || ((r = q(this, Xe)) == null ? void 0 : r.type) === "!") return !0;
    if (!((i = q(this, Xe)) != null && i.isEnd())) return !1;
    if (!this.type) return (o = q(this, Xe)) == null ? void 0 : o.isEnd();
    const e = q(this, Xe) ? q(q(this, Xe), Pe).length : 0;
    return q(this, mn) === e - 1;
  }
  copyIn(e) {
    typeof e == "string" ? this.push(e) : this.push(e.clone(this));
  }
  clone(e) {
    const r = new mt(this.type, e);
    for (const i of q(this, Pe)) r.copyIn(i);
    return r;
  }
  static fromGlob(e) {
    var o;
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = new mt(null, void 0, r);
    return cn(o = mt, En, Ur).call(o, e, i, 0, r), i;
  }
  toMMPattern() {
    if (this !== q(this, Ke)) return q(this, Ke).toMMPattern();
    const e = this.toString(), [r, i, o, a] = this.toRegExpSource();
    if (!(o || q(this, nt) || q(this, Kt).nocase && !q(this, Kt).nocaseMagicOnly && e.toUpperCase() !== e.toLowerCase())) return i;
    const l = (q(this, Kt).nocase ? "i" : "") + (a ? "u" : "");
    return Object.assign(new RegExp(`^${r}$`, l), { _src: r, _glob: e });
  }
  get options() {
    return q(this, Kt);
  }
  toRegExpSource(e) {
    var c;
    const r = e ?? !!q(this, Kt).dot;
    if (q(this, Ke) === this && cn(this, $n, fl).call(this), !this.type) {
      const h = this.isStart() && this.isEnd(), s = q(this, Pe).map((y) => {
        var S;
        const [b, g, T, O] = typeof y == "string" ? cn(S = mt, En, hl).call(S, y, q(this, nt), h) : y.toRegExpSource(e);
        return je(this, nt, q(this, nt) || T), je(this, on, q(this, on) || O), b;
      }).join("");
      let d = "";
      if (this.isStart() && typeof q(this, Pe)[0] == "string" && (q(this, Pe).length !== 1 || !kf.has(q(this, Pe)[0]))) {
        const y = Df, b = r && y.has(s.charAt(0)) || s.startsWith("\\.") && y.has(s.charAt(2)) || s.startsWith("\\.\\.") && y.has(s.charAt(4)), g = !r && !e && y.has(s.charAt(0));
        d = b ? "(?!(?:^|/)\\.\\.?(?:$|/))" : g ? wi : "";
      }
      let E = "";
      return this.isEnd() && q(q(this, Ke), gn) && ((c = q(this, Xe)) == null ? void 0 : c.type) === "!" && (E = "(?:$|\\/)"), [d + s + E, dr(s), je(this, nt, !!q(this, nt)), q(this, on)];
    }
    const i = this.type === "*" || this.type === "+", o = this.type === "!" ? "(?:(?!(?:" : "(?:";
    let a = cn(this, $n, Yi).call(this, r);
    if (this.isStart() && this.isEnd() && !a && this.type !== "!") {
      const h = this.toString();
      return je(this, Pe, [h]), this.type = null, je(this, nt, void 0), [h, dr(this.toString()), !1, !1];
    }
    let l = !i || e || r ? "" : cn(this, $n, Yi).call(this, !0);
    l === a && (l = ""), l && (a = `(?:${a})(?:${l})*?`);
    let f = "";
    return f = this.type === "!" && q(this, br) ? (this.isStart() && !r ? wi : "") + cs : o + a + (this.type === "!" ? "))" + (!this.isStart() || r || e ? "" : wi) + us + ")" : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && l ? ")" : this.type === "*" && l ? ")?" : `)${this.type}`), [f, dr(a), je(this, nt, !!q(this, nt)), q(this, on)];
  }
};
Ke = new WeakMap(), nt = new WeakMap(), on = new WeakMap(), Pe = new WeakMap(), Xe = new WeakMap(), mn = new WeakMap(), xn = new WeakMap(), gn = new WeakMap(), Kt = new WeakMap(), Pn = new WeakMap(), br = new WeakMap(), $n = new WeakSet(), fl = function() {
  if (this !== q(this, Ke)) throw new Error("should only call on root");
  if (q(this, gn)) return this;
  let e;
  for (this.toString(), je(this, gn, !0); e = q(this, xn).pop(); ) {
    if (e.type !== "!") continue;
    let r = e, i = q(r, Xe);
    for (; i; ) {
      for (let o = q(r, mn) + 1; !i.type && o < q(i, Pe).length; o++) for (const a of q(e, Pe)) {
        if (typeof a == "string") throw new Error("string part in extglob AST??");
        a.copyIn(q(i, Pe)[o]);
      }
      r = i, i = q(r, Xe);
    }
  }
  return this;
}, En = new WeakSet(), Ur = function(e, r, i, o) {
  var y, b;
  let a = !1, l = !1, f = -1, c = !1;
  if (r.type === null) {
    let g = i, T = "";
    for (; g < e.length; ) {
      const O = e.charAt(g++);
      if (a || O === "\\") a = !a, T += O;
      else if (l) g === f + 1 ? O !== "^" && O !== "!" || (c = !0) : O !== "]" || g === f + 2 && c || (l = !1), T += O;
      else if (O !== "[") if (o.noext || !ls(O) || e.charAt(g) !== "(") T += O;
      else {
        r.push(T), T = "";
        const S = new mt(O, r);
        g = cn(y = mt, En, Ur).call(y, e, S, g, o), r.push(S);
      }
      else l = !0, f = g, c = !1, T += O;
    }
    return r.push(T), g;
  }
  let h = i + 1, s = new mt(null, r);
  const d = [];
  let E = "";
  for (; h < e.length; ) {
    const g = e.charAt(h++);
    if (a || g === "\\") a = !a, E += g;
    else if (l) h === f + 1 ? g !== "^" && g !== "!" || (c = !0) : g !== "]" || h === f + 2 && c || (l = !1), E += g;
    else if (g !== "[") if (ls(g) && e.charAt(h) === "(") {
      s.push(E), E = "";
      const T = new mt(g, s);
      s.push(T), h = cn(b = mt, En, Ur).call(b, e, T, h, o);
    } else if (g !== "|") {
      if (g === ")") return E === "" && q(r, Pe).length === 0 && je(r, br, !0), s.push(E), E = "", r.push(...d, s), h;
      E += g;
    } else s.push(E), E = "", d.push(s), s = new mt(null, r);
    else l = !0, f = h, c = !1, E += g;
  }
  return r.type = null, je(r, nt, void 0), je(r, Pe, [e.substring(i - 1)]), h;
}, Yi = function(e) {
  return q(this, Pe).map((r) => {
    if (typeof r == "string") throw new Error("string type in extglob ast??");
    const [i, o, a, l] = r.toRegExpSource(e);
    return je(this, on, q(this, on) || l), i;
  }).filter((r) => !(this.isStart() && this.isEnd() && !r)).join("|");
}, hl = function(e, r) {
  let i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], o = !1, a = "", l = !1;
  for (let f = 0; f < e.length; f++) {
    const c = e.charAt(f);
    if (o) o = !1, a += (Ff.has(c) ? "\\" : "") + c;
    else if (c !== "\\") {
      if (c === "[") {
        const [h, s, d, E] = Pf(e, f);
        if (d) {
          a += h, l = l || s, f += d - 1, r = r || E;
          continue;
        }
      }
      c !== "*" ? c !== "?" ? a += c.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : (a += ao, r = !0) : (a += i && e === "*" ? cs : us, r = !0);
    } else f === e.length - 1 ? a += "\\\\" : o = !0;
  }
  return [a, dr(e), !!r, l];
}, Tt(mt, En);
let qr = mt;
const ct = function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return Vr(e), !(!r.nocomment && e.charAt(0) === "#") && new zr(e, r).match(n);
}, Mf = /^\*+([^+@!?\*\[\(]*)$/, Uf = (n) => (e) => !e.startsWith(".") && e.endsWith(n), Bf = (n) => (e) => e.endsWith(n), jf = (n) => (n = n.toLowerCase(), (e) => !e.startsWith(".") && e.toLowerCase().endsWith(n)), Gf = (n) => (n = n.toLowerCase(), (e) => e.toLowerCase().endsWith(n)), Wf = /^\*+\.\*+$/, Vf = (n) => !n.startsWith(".") && n.includes("."), qf = (n) => n !== "." && n !== ".." && n.includes("."), zf = /^\.\*+$/, Xf = (n) => n !== "." && n !== ".." && n.startsWith("."), Hf = /^\*+$/, Yf = (n) => n.length !== 0 && !n.startsWith("."), Zf = (n) => n.length !== 0 && n !== "." && n !== "..", Kf = /^\?+([^+@!?\*\[\(]*)?$/, Jf = (n) => {
  let [e, r = ""] = n;
  const i = pl([e]);
  return r ? (r = r.toLowerCase(), (o) => i(o) && o.toLowerCase().endsWith(r)) : i;
}, Qf = (n) => {
  let [e, r = ""] = n;
  const i = dl([e]);
  return r ? (r = r.toLowerCase(), (o) => i(o) && o.toLowerCase().endsWith(r)) : i;
}, eh = (n) => {
  let [e, r = ""] = n;
  const i = dl([e]);
  return r ? (o) => i(o) && o.endsWith(r) : i;
}, th = (n) => {
  let [e, r = ""] = n;
  const i = pl([e]);
  return r ? (o) => i(o) && o.endsWith(r) : i;
}, pl = (n) => {
  let [e] = n;
  const r = e.length;
  return (i) => i.length === r && !i.startsWith(".");
}, dl = (n) => {
  let [e] = n;
  const r = e.length;
  return (i) => i.length === r && i !== "." && i !== "..";
}, ml = typeof gt == "object" && gt ? typeof gt.env == "object" && gt.env && gt.env.__MINIMATCH_TESTING_PLATFORM__ || gt.platform : "posix";
ct.sep = ml === "win32" ? "\\" : "/";
const $t = Symbol("globstar **");
ct.GLOBSTAR = $t, ct.filter = function(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return (r) => ct(r, n, e);
};
const xt = function(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Object.assign({}, n, e);
};
ct.defaults = (n) => {
  if (!n || typeof n != "object" || !Object.keys(n).length) return ct;
  const e = ct;
  return Object.assign(function(r, i) {
    return e(r, i, xt(n, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}));
  }, { Minimatch: class extends e.Minimatch {
    constructor(r) {
      super(r, xt(n, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}));
    }
    static defaults(r) {
      return e.defaults(xt(n, r)).Minimatch;
    }
  }, AST: class extends e.AST {
    constructor(r, i) {
      super(r, i, xt(n, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}));
    }
    static fromGlob(r) {
      let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return e.AST.fromGlob(r, xt(n, i));
    }
  }, unescape: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.unescape(r, xt(n, i));
  }, escape: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.escape(r, xt(n, i));
  }, filter: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.filter(r, xt(n, i));
  }, defaults: (r) => e.defaults(xt(n, r)), makeRe: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.makeRe(r, xt(n, i));
  }, braceExpand: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.braceExpand(r, xt(n, i));
  }, match: function(r, i) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return e.match(r, i, xt(n, o));
  }, sep: e.sep, GLOBSTAR: $t });
};
const gl = function(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Vr(n), e.nobrace || !/\{(?:(?!\{).)*\}/.test(n) ? [n] : Lf(n);
};
ct.braceExpand = gl, ct.makeRe = function(n) {
  return new zr(n, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).makeRe();
}, ct.match = function(n, e) {
  const r = new zr(e, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {});
  return n = n.filter((i) => r.match(i)), r.options.nonull && !n.length && n.push(e), n;
};
const fs = /[?*]|[+@!]\(.*?\)|\[|\]/;
class zr {
  constructor(e) {
    ae(this, "options");
    ae(this, "set");
    ae(this, "pattern");
    ae(this, "windowsPathsNoEscape");
    ae(this, "nonegate");
    ae(this, "negate");
    ae(this, "comment");
    ae(this, "empty");
    ae(this, "preserveMultipleSlashes");
    ae(this, "partial");
    ae(this, "globSet");
    ae(this, "globParts");
    ae(this, "nocase");
    ae(this, "isWindows");
    ae(this, "platform");
    ae(this, "windowsNoMagicRoot");
    ae(this, "regexp");
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Vr(e), r = r || {}, this.options = r, this.pattern = e, this.platform = r.platform || ml, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!r.windowsPathsNoEscape || r.allowWindowsEscape === !1, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!r.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!r.nonegate, this.comment = !1, this.empty = !1, this.partial = !!r.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = r.windowsNoMagicRoot !== void 0 ? r.windowsNoMagicRoot : !(!this.isWindows || !this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
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
        const c = !(a[0] !== "" || a[1] !== "" || a[2] !== "?" && fs.test(a[2]) || fs.test(a[3])), h = /^[a-z]:/i.test(a[0]);
        if (c) return [...a.slice(0, 4), ...a.slice(4).map((s) => this.parse(s))];
        if (h) return [a[0], ...a.slice(1).map((s) => this.parse(s))];
      }
      return a.map((c) => this.parse(c));
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
          const c = i[o + 2], h = i[o + 3];
          if (f !== ".." || !c || c === "." || c === ".." || !h || h === "." || h === "..") continue;
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
      const g = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]), T = !g && e[0] === "" && e[1] === "" && e[2] === "?" && /^[a-z]:$/i.test(e[3]), O = typeof r[0] == "string" && /^[a-z]:$/i.test(r[0]), S = T ? 3 : g ? 0 : void 0, L = !O && r[0] === "" && r[1] === "" && r[2] === "?" && typeof r[3] == "string" && /^[a-z]:$/i.test(r[3]) ? 3 : O ? 0 : void 0;
      if (typeof S == "number" && typeof L == "number") {
        const [R, M] = [e[S], r[L]];
        R.toLowerCase() === M.toLowerCase() && (r[L] = R, L > S ? r = r.slice(L) : S > L && (e = e.slice(S)));
      }
    }
    const { optimizationLevel: a = 1 } = this.options;
    a >= 2 && (e = this.levelTwoFileOptimize(e)), this.debug("matchOne", this, { file: e, pattern: r }), this.debug("matchOne", e.length, r.length);
    for (var l = 0, f = 0, c = e.length, h = r.length; l < c && f < h; l++, f++) {
      this.debug("matchOne loop");
      var s = r[f], d = e[l];
      if (this.debug(r, s, d), s === !1) return !1;
      if (s === $t) {
        this.debug("GLOBSTAR", [r, s, d]);
        var E = l, y = f + 1;
        if (y === h) {
          for (this.debug("** at the end"); l < c; l++) if (e[l] === "." || e[l] === ".." || !o.dot && e[l].charAt(0) === ".") return !1;
          return !0;
        }
        for (; E < c; ) {
          var b = e[E];
          if (this.debug(`
globstar while`, e, E, r, y, b), this.matchOne(e.slice(E), r.slice(y), i)) return this.debug("globstar found match!", E, c, b), !0;
          if (b === "." || b === ".." || !o.dot && b.charAt(0) === ".") {
            this.debug("dot detected!", e, E, r, y);
            break;
          }
          this.debug("globstar swallow a segment, and continue"), E++;
        }
        return !(!i || (this.debug(`
>>> no match, partial?`, e, E, r, y), E !== c));
      }
      let g;
      if (typeof s == "string" ? (g = d === s, this.debug("string match", s, d, g)) : (g = s.test(d), this.debug("pattern match", s, d, g)), !g) return !1;
    }
    if (l === c && f === h) return !0;
    if (l === c) return i;
    if (f === h) return l === c - 1 && e[l] === "";
    throw new Error("wtf?");
  }
  braceExpand() {
    return gl(this.pattern, this.options);
  }
  parse(e) {
    Vr(e);
    const r = this.options;
    if (e === "**") return $t;
    if (e === "") return "";
    let i, o = null;
    (i = e.match(Hf)) ? o = r.dot ? Zf : Yf : (i = e.match(Mf)) ? o = (r.nocase ? r.dot ? Gf : jf : r.dot ? Bf : Uf)(i[1]) : (i = e.match(Kf)) ? o = (r.nocase ? r.dot ? Qf : Jf : r.dot ? eh : th)(i) : (i = e.match(Wf)) ? o = r.dot ? qf : Vf : (i = e.match(zf)) && (o = Xf);
    const a = qr.fromGlob(e, this.options).toMMPattern();
    return o && typeof a == "object" && Reflect.defineProperty(a, "test", { value: o }), a;
  }
  makeRe() {
    if (this.regexp || this.regexp === !1) return this.regexp;
    const e = this.set;
    if (!e.length) return this.regexp = !1, this.regexp;
    const r = this.options, i = r.noglobstar ? "[^/]*?" : r.dot ? "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?" : "(?:(?!(?:\\/|^)\\.).)*?", o = new Set(r.nocase ? ["i"] : []);
    let a = e.map((c) => {
      const h = c.map((s) => {
        if (s instanceof RegExp) for (const d of s.flags.split("")) o.add(d);
        return typeof s == "string" ? s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : s === $t ? $t : s._src;
      });
      return h.forEach((s, d) => {
        const E = h[d + 1], y = h[d - 1];
        s === $t && y !== $t && (y === void 0 ? E !== void 0 && E !== $t ? h[d + 1] = "(?:\\/|" + i + "\\/)?" + E : h[d] = i : E === void 0 ? h[d - 1] = y + "(?:\\/|" + i + ")?" : E !== $t && (h[d - 1] = y + "(?:\\/|\\/" + i + "\\/)" + E, h[d + 1] = $t));
      }), h.filter((s) => s !== $t).join("/");
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
      const c = a[f];
      let h = o;
      if (i.matchBase && c.length === 1 && (h = [l]), this.matchOne(h, c, r)) return !!i.flipNegate || !this.negate;
    }
    return !i.flipNegate && this.negate;
  }
  static defaults(e) {
    return ct.defaults(e).Minimatch;
  }
}
function lo(n) {
  const e = new Error(`${arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""}Invalid response: ${n.status} ${n.statusText}`);
  return e.status = n.status, e.response = n, e;
}
function tt(n, e) {
  const { status: r } = e;
  if (r === 401 && n.digest) return e;
  if (r >= 400) throw lo(e);
  return e;
}
function er(n, e) {
  return arguments.length > 2 && arguments[2] !== void 0 && arguments[2] ? { data: e, headers: n.headers ? Of(n.headers) : {}, status: n.status, statusText: n.statusText } : e;
}
ct.AST = qr, ct.Minimatch = zr, ct.escape = function(n) {
  let { windowsPathsNoEscape: e = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return e ? n.replace(/[?*()[\]]/g, "[$&]") : n.replace(/[?*()[\]\\]/g, "\\$&");
}, ct.unescape = dr;
const nh = (hs = function(n, e, r) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = et({ url: De(n.remoteURL, $e(e)), method: "COPY", headers: { Destination: De(n.remoteURL, $e(r)), Overwrite: i.overwrite === !1 ? "F" : "T", Depth: i.shallow ? "0" : "infinity" } }, n, i);
  return l = function(f) {
    tt(n, f);
  }, (a = Qe(o, n)) && a.then || (a = Promise.resolve(a)), l ? a.then(l) : a;
  var a, l;
}, function() {
  for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
  try {
    return Promise.resolve(hs.apply(this, n));
  } catch (r) {
    return Promise.reject(r);
  }
});
var hs;
const rh = { preserveOrder: !1, attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, removeNSPrefix: !1, allowBooleanAttributes: !1, parseTagValue: !0, parseAttributeValue: !1, trimValues: !0, cdataPropName: !1, numberParseOptions: { hex: !0, leadingZeros: !0, eNotation: !0 }, tagValueProcessor: function(n, e) {
  return e;
}, attributeValueProcessor: function(n, e) {
  return e;
}, stopNodes: [], alwaysCreateTextNode: !1, isArray: () => !1, commentPropName: !1, unpairedTags: [], processEntities: !0, htmlEntities: !1, ignoreDeclaration: !1, ignorePiTags: !1, transformTagName: !1, transformAttributeName: !1, updateTag: function(n, e, r) {
  return n;
}, captureMetaData: !1 }, ps = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ih = new RegExp("^[" + ps + "][" + ps + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
function El(n, e) {
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
const Zr = function(n) {
  return ih.exec(n) != null;
};
let Zi;
Zi = typeof Symbol != "function" ? "@@xmlMetadata" : Symbol("XML Node Metadata");
class An {
  constructor(e) {
    this.tagname = e, this.child = [], this[":@"] = {};
  }
  add(e, r) {
    e === "__proto__" && (e = "#__proto__"), this.child.push({ [e]: r });
  }
  addChild(e, r) {
    e.tagname === "__proto__" && (e.tagname = "#__proto__"), e[":@"] && Object.keys(e[":@"]).length > 0 ? this.child.push({ [e.tagname]: e.child, ":@": e[":@"] }) : this.child.push({ [e.tagname]: e.child }), r !== void 0 && (this.child[this.child.length - 1][Zi] = { startIndex: r });
  }
  static getMetaDataSymbol() {
    return Zi;
  }
}
class oh {
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
        if (a && In(e, "!ENTITY", r)) {
          let c, h;
          r += 7, [c, h, r] = this.readEntityExp(e, r + 1, this.suppressValidationErr), h.indexOf("&") === -1 && (i[c] = { regx: RegExp(`&${c};`, "g"), val: h });
        } else if (a && In(e, "!ELEMENT", r)) {
          r += 8;
          const { index: c } = this.readElementExp(e, r + 1);
          r = c;
        } else if (a && In(e, "!ATTLIST", r)) r += 8;
        else if (a && In(e, "!NOTATION", r)) {
          r += 9;
          const { index: c } = this.readNotationExp(e, r + 1, this.suppressValidationErr);
          r = c;
        } else {
          if (!In(e, "!--", r)) throw new Error("Invalid DOCTYPE");
          l = !0;
        }
        o++, f = "";
      }
      if (o !== 0) throw new Error("Unclosed DOCTYPE");
    }
    return { entities: i, i: r };
  }
  readEntityExp(e, r) {
    r = Nt(e, r);
    let i = "";
    for (; r < e.length && !/\s/.test(e[r]) && e[r] !== '"' && e[r] !== "'"; ) i += e[r], r++;
    if (fr(i), r = Nt(e, r), !this.suppressValidationErr) {
      if (e.substring(r, r + 6).toUpperCase() === "SYSTEM") throw new Error("External entities are not supported");
      if (e[r] === "%") throw new Error("Parameter entities are not supported");
    }
    let o = "";
    return [r, o] = this.readIdentifierVal(e, r, "entity"), [i, o, --r];
  }
  readNotationExp(e, r) {
    r = Nt(e, r);
    let i = "";
    for (; r < e.length && !/\s/.test(e[r]); ) i += e[r], r++;
    !this.suppressValidationErr && fr(i), r = Nt(e, r);
    const o = e.substring(r, r + 6).toUpperCase();
    if (!this.suppressValidationErr && o !== "SYSTEM" && o !== "PUBLIC") throw new Error(`Expected SYSTEM or PUBLIC, found "${o}"`);
    r += o.length, r = Nt(e, r);
    let a = null, l = null;
    if (o === "PUBLIC") [r, a] = this.readIdentifierVal(e, r, "publicIdentifier"), e[r = Nt(e, r)] !== '"' && e[r] !== "'" || ([r, l] = this.readIdentifierVal(e, r, "systemIdentifier"));
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
    r = Nt(e, r);
    let i = "";
    for (; r < e.length && !/\s/.test(e[r]); ) i += e[r], r++;
    if (!this.suppressValidationErr && !Zr(i)) throw new Error(`Invalid element name: "${i}"`);
    let o = "";
    if (e[r = Nt(e, r)] === "E" && In(e, "MPTY", r)) r += 4;
    else if (e[r] === "A" && In(e, "NY", r)) r += 2;
    else if (e[r] === "(") {
      for (r++; r < e.length && e[r] !== ")"; ) o += e[r], r++;
      if (e[r] !== ")") throw new Error("Unterminated content model");
    } else if (!this.suppressValidationErr) throw new Error(`Invalid Element Expression, found "${e[r]}"`);
    return { elementName: i, contentModel: o.trim(), index: r };
  }
  readAttlistExp(e, r) {
    r = Nt(e, r);
    let i = "";
    for (; r < e.length && !/\s/.test(e[r]); ) i += e[r], r++;
    fr(i), r = Nt(e, r);
    let o = "";
    for (; r < e.length && !/\s/.test(e[r]); ) o += e[r], r++;
    if (!fr(o)) throw new Error(`Invalid attribute name: "${o}"`);
    r = Nt(e, r);
    let a = "";
    if (e.substring(r, r + 8).toUpperCase() === "NOTATION") {
      if (a = "NOTATION", e[r = Nt(e, r += 8)] !== "(") throw new Error(`Expected '(', found "${e[r]}"`);
      r++;
      let f = [];
      for (; r < e.length && e[r] !== ")"; ) {
        let c = "";
        for (; r < e.length && e[r] !== "|" && e[r] !== ")"; ) c += e[r], r++;
        if (c = c.trim(), !fr(c)) throw new Error(`Invalid notation name: "${c}"`);
        f.push(c), e[r] === "|" && (r++, r = Nt(e, r));
      }
      if (e[r] !== ")") throw new Error("Unterminated list of notations");
      r++, a += " (" + f.join("|") + ")";
    } else {
      for (; r < e.length && !/\s/.test(e[r]); ) a += e[r], r++;
      const f = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
      if (!this.suppressValidationErr && !f.includes(a.toUpperCase())) throw new Error(`Invalid attribute type: "${a}"`);
    }
    r = Nt(e, r);
    let l = "";
    return e.substring(r, r + 8).toUpperCase() === "#REQUIRED" ? (l = "#REQUIRED", r += 8) : e.substring(r, r + 7).toUpperCase() === "#IMPLIED" ? (l = "#IMPLIED", r += 7) : [r, l] = this.readIdentifierVal(e, r, "ATTLIST"), { elementName: i, attributeName: o, attributeType: a, defaultValue: l, index: r };
  }
}
const Nt = (n, e) => {
  for (; e < n.length && /\s/.test(n[e]); ) e++;
  return e;
};
function In(n, e, r) {
  for (let i = 0; i < e.length; i++) if (e[i] !== n[r + i + 1]) return !1;
  return !0;
}
function fr(n) {
  if (Zr(n)) return n;
  throw new Error(`Invalid entity name ${n}`);
}
const sh = /^[-+]?0x[a-fA-F0-9]+$/, ah = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, lh = { hex: !0, leadingZeros: !0, decimalPoint: ".", eNotation: !0 }, uh = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
function wl(n) {
  return typeof n == "function" ? n : Array.isArray(n) ? (e) => {
    for (const r of n)
      if (typeof r == "string" && e === r || r instanceof RegExp && r.test(e)) return !0;
  } : () => !1;
}
class ch {
  constructor(e) {
    if (this.options = e, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = { apos: { regex: /&(apos|#39|#x27);/g, val: "'" }, gt: { regex: /&(gt|#62|#x3E);/g, val: ">" }, lt: { regex: /&(lt|#60|#x3C);/g, val: "<" }, quot: { regex: /&(quot|#34|#x22);/g, val: '"' } }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = { space: { regex: /&(nbsp|#160);/g, val: " " }, cent: { regex: /&(cent|#162);/g, val: "¢" }, pound: { regex: /&(pound|#163);/g, val: "£" }, yen: { regex: /&(yen|#165);/g, val: "¥" }, euro: { regex: /&(euro|#8364);/g, val: "€" }, copyright: { regex: /&(copy|#169);/g, val: "©" }, reg: { regex: /&(reg|#174);/g, val: "®" }, inr: { regex: /&(inr|#8377);/g, val: "₹" }, num_dec: { regex: /&#([0-9]{1,7});/g, val: (r, i) => ds(i, 10, "&#") }, num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (r, i) => ds(i, 16, "&#x") } }, this.addExternalEntities = fh, this.parseXml = gh, this.parseTextData = hh, this.resolveNameSpace = ph, this.buildAttributesMap = mh, this.isItStopNode = vh, this.replaceEntitiesValue = wh, this.readStopNodeData = bh, this.saveTextToParentTag = yh, this.addChild = Eh, this.ignoreAttributesFn = wl(this.options.ignoreAttributes), this.options.stopNodes && this.options.stopNodes.length > 0) {
      this.stopNodesExact = /* @__PURE__ */ new Set(), this.stopNodesWildcard = /* @__PURE__ */ new Set();
      for (let r = 0; r < this.options.stopNodes.length; r++) {
        const i = this.options.stopNodes[r];
        typeof i == "string" && (i.startsWith("*.") ? this.stopNodesWildcard.add(i.substring(2)) : this.stopNodesExact.add(i));
      }
    }
  }
}
function fh(n) {
  const e = Object.keys(n);
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    this.lastEntities[i] = { regex: new RegExp("&" + i + ";", "g"), val: n[i] };
  }
}
function hh(n, e, r, i, o, a, l) {
  if (n !== void 0 && (this.options.trimValues && !i && (n = n.trim()), n.length > 0)) {
    l || (n = this.replaceEntitiesValue(n));
    const f = this.options.tagValueProcessor(e, n, r, o, a);
    return f == null ? n : typeof f != typeof n || f !== n ? f : this.options.trimValues || n.trim() === n ? yl(n, this.options.parseTagValue, this.options.numberParseOptions) : n;
  }
}
function ph(n) {
  if (this.options.removeNSPrefix) {
    const e = n.split(":"), r = n.charAt(0) === "/" ? "/" : "";
    if (e[0] === "xmlns") return "";
    e.length === 2 && (n = r + e[1]);
  }
  return n;
}
const dh = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function mh(n, e) {
  if (this.options.ignoreAttributes !== !0 && typeof n == "string") {
    const r = El(n, dh), i = r.length, o = {};
    for (let a = 0; a < i; a++) {
      const l = this.resolveNameSpace(r[a][1]);
      if (this.ignoreAttributesFn(l, e)) continue;
      let f = r[a][4], c = this.options.attributeNamePrefix + l;
      if (l.length) if (this.options.transformAttributeName && (c = this.options.transformAttributeName(c)), c === "__proto__" && (c = "#__proto__"), f !== void 0) {
        this.options.trimValues && (f = f.trim()), f = this.replaceEntitiesValue(f);
        const h = this.options.attributeValueProcessor(l, f, e);
        o[c] = h == null ? f : typeof h != typeof f || h !== f ? h : yl(f, this.options.parseAttributeValue, this.options.numberParseOptions);
      } else this.options.allowBooleanAttributes && (o[c] = !0);
    }
    if (!Object.keys(o).length) return;
    if (this.options.attributesGroupName) {
      const a = {};
      return a[this.options.attributesGroupName] = o, a;
    }
    return o;
  }
}
const gh = function(n) {
  n = n.replace(/\r\n?/g, `
`);
  const e = new An("!xml");
  let r = e, i = "", o = "";
  const a = new oh(this.options.processEntities);
  for (let l = 0; l < n.length; l++) if (n[l] === "<") if (n[l + 1] === "/") {
    const f = Sn(n, ">", l, "Closing Tag is not closed.");
    let c = n.substring(l + 2, f).trim();
    if (this.options.removeNSPrefix) {
      const d = c.indexOf(":");
      d !== -1 && (c = c.substr(d + 1));
    }
    this.options.transformTagName && (c = this.options.transformTagName(c)), r && (i = this.saveTextToParentTag(i, r, o));
    const h = o.substring(o.lastIndexOf(".") + 1);
    if (c && this.options.unpairedTags.indexOf(c) !== -1) throw new Error(`Unpaired tag can not be used as closing tag: </${c}>`);
    let s = 0;
    h && this.options.unpairedTags.indexOf(h) !== -1 ? (s = o.lastIndexOf(".", o.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : s = o.lastIndexOf("."), o = o.substring(0, s), r = this.tagsNodeStack.pop(), i = "", l = f;
  } else if (n[l + 1] === "?") {
    let f = Ki(n, l, !1, "?>");
    if (!f) throw new Error("Pi Tag is not closed.");
    if (i = this.saveTextToParentTag(i, r, o), !(this.options.ignoreDeclaration && f.tagName === "?xml" || this.options.ignorePiTags)) {
      const c = new An(f.tagName);
      c.add(this.options.textNodeName, ""), f.tagName !== f.tagExp && f.attrExpPresent && (c[":@"] = this.buildAttributesMap(f.tagExp, o)), this.addChild(r, c, o, l);
    }
    l = f.closeIndex + 1;
  } else if (n.substr(l + 1, 3) === "!--") {
    const f = Sn(n, "-->", l + 4, "Comment is not closed.");
    if (this.options.commentPropName) {
      const c = n.substring(l + 4, f - 2);
      i = this.saveTextToParentTag(i, r, o), r.add(this.options.commentPropName, [{ [this.options.textNodeName]: c }]);
    }
    l = f;
  } else if (n.substr(l + 1, 2) === "!D") {
    const f = a.readDocType(n, l);
    this.docTypeEntities = f.entities, l = f.i;
  } else if (n.substr(l + 1, 2) === "![") {
    const f = Sn(n, "]]>", l, "CDATA is not closed.") - 2, c = n.substring(l + 9, f);
    i = this.saveTextToParentTag(i, r, o);
    let h = this.parseTextData(c, r.tagname, o, !0, !1, !0, !0);
    h == null && (h = ""), this.options.cdataPropName ? r.add(this.options.cdataPropName, [{ [this.options.textNodeName]: c }]) : r.add(this.options.textNodeName, h), l = f + 2;
  } else {
    let f = Ki(n, l, this.options.removeNSPrefix), c = f.tagName;
    const h = f.rawTagName;
    let s = f.tagExp, d = f.attrExpPresent, E = f.closeIndex;
    if (this.options.transformTagName) {
      const g = this.options.transformTagName(c);
      s === c && (s = g), c = g;
    }
    r && i && r.tagname !== "!xml" && (i = this.saveTextToParentTag(i, r, o, !1));
    const y = r;
    y && this.options.unpairedTags.indexOf(y.tagname) !== -1 && (r = this.tagsNodeStack.pop(), o = o.substring(0, o.lastIndexOf("."))), c !== e.tagname && (o += o ? "." + c : c);
    const b = l;
    if (this.isItStopNode(this.stopNodesExact, this.stopNodesWildcard, o, c)) {
      let g = "";
      if (s.length > 0 && s.lastIndexOf("/") === s.length - 1) c[c.length - 1] === "/" ? (c = c.substr(0, c.length - 1), o = o.substr(0, o.length - 1), s = c) : s = s.substr(0, s.length - 1), l = f.closeIndex;
      else if (this.options.unpairedTags.indexOf(c) !== -1) l = f.closeIndex;
      else {
        const O = this.readStopNodeData(n, h, E + 1);
        if (!O) throw new Error(`Unexpected end of ${h}`);
        l = O.i, g = O.tagContent;
      }
      const T = new An(c);
      c !== s && d && (T[":@"] = this.buildAttributesMap(s, o)), g && (g = this.parseTextData(g, c, o, !0, d, !0, !0)), o = o.substr(0, o.lastIndexOf(".")), T.add(this.options.textNodeName, g), this.addChild(r, T, o, b);
    } else {
      if (s.length > 0 && s.lastIndexOf("/") === s.length - 1) {
        if (c[c.length - 1] === "/" ? (c = c.substr(0, c.length - 1), o = o.substr(0, o.length - 1), s = c) : s = s.substr(0, s.length - 1), this.options.transformTagName) {
          const T = this.options.transformTagName(c);
          s === c && (s = T), c = T;
        }
        const g = new An(c);
        c !== s && d && (g[":@"] = this.buildAttributesMap(s, o)), this.addChild(r, g, o, b), o = o.substr(0, o.lastIndexOf("."));
      } else {
        const g = new An(c);
        this.tagsNodeStack.push(r), c !== s && d && (g[":@"] = this.buildAttributesMap(s, o)), this.addChild(r, g, o, b), r = g;
      }
      i = "", l = E;
    }
  }
  else i += n[l];
  return e.child;
};
function Eh(n, e, r, i) {
  this.options.captureMetaData || (i = void 0);
  const o = this.options.updateTag(e.tagname, r, e[":@"]);
  o === !1 || (typeof o == "string" && (e.tagname = o), n.addChild(e, i));
}
const wh = function(n) {
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
function yh(n, e, r, i) {
  return n && (i === void 0 && (i = e.child.length === 0), (n = this.parseTextData(n, e.tagname, r, !1, !!e[":@"] && Object.keys(e[":@"]).length !== 0, i)) !== void 0 && n !== "" && e.add(this.options.textNodeName, n), n = ""), n;
}
function vh(n, e, r, i) {
  return !(!e || !e.has(i)) || !(!n || !n.has(r));
}
function Sn(n, e, r, i) {
  const o = n.indexOf(e, r);
  if (o === -1) throw new Error(i);
  return o + e.length - 1;
}
function Ki(n, e, r) {
  const i = function(s, d) {
    let E, y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ">", b = "";
    for (let g = d; g < s.length; g++) {
      let T = s[g];
      if (E) T === E && (E = "");
      else if (T === '"' || T === "'") E = T;
      else if (T === y[0]) {
        if (!y[1]) return { data: b, index: g };
        if (s[g + 1] === y[1]) return { data: b, index: g };
      } else T === "	" && (T = " ");
      b += T;
    }
  }(n, e + 1, arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ">");
  if (!i) return;
  let o = i.data;
  const a = i.index, l = o.search(/\s/);
  let f = o, c = !0;
  l !== -1 && (f = o.substring(0, l), o = o.substring(l + 1).trimStart());
  const h = f;
  if (r) {
    const s = f.indexOf(":");
    s !== -1 && (f = f.substr(s + 1), c = f !== i.data.substr(s + 1));
  }
  return { tagName: f, tagExp: o, closeIndex: a, attrExpPresent: c, rawTagName: h };
}
function bh(n, e, r) {
  const i = r;
  let o = 1;
  for (; r < n.length; r++) if (n[r] === "<") if (n[r + 1] === "/") {
    const a = Sn(n, ">", r, `${e} is not closed`);
    if (n.substring(r + 2, a).trim() === e && (o--, o === 0)) return { tagContent: n.substring(i, r), i: a };
    r = a;
  } else if (n[r + 1] === "?") r = Sn(n, "?>", r + 1, "StopNode is not closed.");
  else if (n.substr(r + 1, 3) === "!--") r = Sn(n, "-->", r + 3, "StopNode is not closed.");
  else if (n.substr(r + 1, 2) === "![") r = Sn(n, "]]>", r, "StopNode is not closed.") - 2;
  else {
    const a = Ki(n, r, ">");
    a && ((a && a.tagName) === e && a.tagExp[a.tagExp.length - 1] !== "/" && o++, r = a.closeIndex);
  }
}
function yl(n, e, r) {
  if (e && typeof n == "string") {
    const i = n.trim();
    return i === "true" || i !== "false" && function(o) {
      let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (a = Object.assign({}, lh, a), !o || typeof o != "string") return o;
      let l = o.trim();
      if (a.skipLike !== void 0 && a.skipLike.test(l)) return o;
      if (o === "0") return 0;
      if (a.hex && sh.test(l)) return function(c) {
        if (parseInt) return parseInt(c, 16);
        if (Number.parseInt) return Number.parseInt(c, 16);
        if (window && window.parseInt) return window.parseInt(c, 16);
        throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
      }(l);
      if (l.includes("e") || l.includes("E")) return function(c, h, s) {
        if (!s.eNotation) return c;
        const d = h.match(uh);
        if (d) {
          let E = d[1] || "";
          const y = d[3].indexOf("e") === -1 ? "E" : "e", b = d[2], g = E ? c[b.length + 1] === y : c[b.length] === y;
          return b.length > 1 && g ? c : b.length !== 1 || !d[3].startsWith(`.${y}`) && d[3][0] !== y ? s.leadingZeros && !g ? (h = (d[1] || "") + d[3], Number(h)) : c : Number(h);
        }
        return c;
      }(o, l, a);
      {
        const c = ah.exec(l);
        if (c) {
          const h = c[1] || "", s = c[2];
          let d = ((f = c[3]) && f.indexOf(".") !== -1 && ((f = f.replace(/0+$/, "")) === "." ? f = "0" : f[0] === "." ? f = "0" + f : f[f.length - 1] === "." && (f = f.substring(0, f.length - 1))), f);
          const E = h ? o[s.length + 1] === "." : o[s.length] === ".";
          if (!a.leadingZeros && (s.length > 1 || s.length === 1 && !E)) return o;
          {
            const y = Number(l), b = String(y);
            if (y === 0) return y;
            if (b.search(/[eE]/) !== -1) return a.eNotation ? y : o;
            if (l.indexOf(".") !== -1) return b === "0" || b === d || b === `${h}${d}` ? y : o;
            let g = s ? d : l;
            return s ? g === b || h + g === b ? y : o : g === b || g === h + b ? y : o;
          }
        }
        return o;
      }
      var f;
    }(n, r);
  }
  return n !== void 0 ? n : "";
}
function ds(n, e, r) {
  const i = Number.parseInt(n, e);
  return i >= 0 && i <= 1114111 ? String.fromCodePoint(i) : r + n + ";";
}
const yi = An.getMetaDataSymbol();
function _h(n, e) {
  return vl(n, e);
}
function vl(n, e, r) {
  let i;
  const o = {};
  for (let a = 0; a < n.length; a++) {
    const l = n[a], f = Th(l);
    let c = "";
    if (c = r === void 0 ? f : r + "." + f, f === e.textNodeName) i === void 0 ? i = l[f] : i += "" + l[f];
    else {
      if (f === void 0) continue;
      if (l[f]) {
        let h = vl(l[f], e, c);
        const s = Ih(h, e);
        l[yi] !== void 0 && (h[yi] = l[yi]), l[":@"] ? Nh(h, l[":@"], c, e) : Object.keys(h).length !== 1 || h[e.textNodeName] === void 0 || e.alwaysCreateTextNode ? Object.keys(h).length === 0 && (e.alwaysCreateTextNode ? h[e.textNodeName] = "" : h = "") : h = h[e.textNodeName], o[f] !== void 0 && o.hasOwnProperty(f) ? (Array.isArray(o[f]) || (o[f] = [o[f]]), o[f].push(h)) : e.isArray(f, c, s) ? o[f] = [h] : o[f] = h;
      }
    }
  }
  return typeof i == "string" ? i.length > 0 && (o[e.textNodeName] = i) : i !== void 0 && (o[e.textNodeName] = i), o;
}
function Th(n) {
  const e = Object.keys(n);
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    if (i !== ":@") return i;
  }
}
function Nh(n, e, r, i) {
  if (e) {
    const o = Object.keys(e), a = o.length;
    for (let l = 0; l < a; l++) {
      const f = o[l];
      i.isArray(f, r + "." + f, !0, !0) ? n[f] = [e[f]] : n[f] = e[f];
    }
  }
}
function Ih(n, e) {
  const { textNodeName: r } = e, i = Object.keys(n).length;
  return i === 0 || !(i !== 1 || !n[r] && typeof n[r] != "boolean" && n[r] !== 0);
}
const Ah = { allowBooleanAttributes: !1, unpairedTags: [] };
function ms(n) {
  return n === " " || n === "	" || n === `
` || n === "\r";
}
function gs(n, e) {
  const r = e;
  for (; e < n.length; e++) if (!(n[e] != "?" && n[e] != " ")) {
    const i = n.substr(r, e - r);
    if (e > 5 && i === "xml") return Ge("InvalidXml", "XML declaration allowed only at the start of the document.", dt(n, e));
    if (n[e] == "?" && n[e + 1] == ">") {
      e++;
      break;
    }
  }
  return e;
}
function Es(n, e) {
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
function Oh(n, e) {
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
const Rh = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function ws(n, e) {
  const r = El(n, Rh), i = {};
  for (let o = 0; o < r.length; o++) {
    if (r[o][1].length === 0) return Ge("InvalidAttr", "Attribute '" + r[o][2] + "' has no space in starting.", hr(r[o]));
    if (r[o][3] !== void 0 && r[o][4] === void 0) return Ge("InvalidAttr", "Attribute '" + r[o][2] + "' is without value.", hr(r[o]));
    if (r[o][3] === void 0 && !e.allowBooleanAttributes) return Ge("InvalidAttr", "boolean attribute '" + r[o][2] + "' is not allowed.", hr(r[o]));
    const a = r[o][2];
    if (!Ch(a)) return Ge("InvalidAttr", "Attribute '" + a + "' is an invalid name.", hr(r[o]));
    if (i.hasOwnProperty(a)) return Ge("InvalidAttr", "Attribute '" + a + "' is repeated.", hr(r[o]));
    i[a] = 1;
  }
  return !0;
}
function Sh(n, e) {
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
function Ge(n, e, r) {
  return { err: { code: n, msg: e, line: r.line || r, col: r.col } };
}
function Ch(n) {
  return Zr(n);
}
function dt(n, e) {
  const r = n.substring(0, e).split(/\r?\n/);
  return { line: r.length, col: r[r.length - 1].length + 1 };
}
function hr(n) {
  return n.startIndex + n[1].length;
}
class bl {
  constructor(e) {
    this.externalEntities = {}, this.options = function(r) {
      return Object.assign({}, rh, r);
    }(e);
  }
  parse(e, r) {
    if (typeof e != "string" && e.toString) e = e.toString();
    else if (typeof e != "string") throw new Error("XML data is accepted in String or Bytes[] form.");
    if (r) {
      r === !0 && (r = {});
      const a = function(l, f) {
        f = Object.assign({}, Ah, f);
        const c = [];
        let h = !1, s = !1;
        l[0] === "\uFEFF" && (l = l.substr(1));
        for (let d = 0; d < l.length; d++) if (l[d] === "<" && l[d + 1] === "?") {
          if (d += 2, d = gs(l, d), d.err) return d;
        } else {
          if (l[d] !== "<") {
            if (ms(l[d])) continue;
            return Ge("InvalidChar", "char '" + l[d] + "' is not expected.", dt(l, d));
          }
          {
            let E = d;
            if (d++, l[d] === "!") {
              d = Es(l, d);
              continue;
            }
            {
              let y = !1;
              l[d] === "/" && (y = !0, d++);
              let b = "";
              for (; d < l.length && l[d] !== ">" && l[d] !== " " && l[d] !== "	" && l[d] !== `
` && l[d] !== "\r"; d++) b += l[d];
              if (b = b.trim(), b[b.length - 1] === "/" && (b = b.substring(0, b.length - 1), d--), !Zr(b)) {
                let O;
                return O = b.trim().length === 0 ? "Invalid space after '<'." : "Tag '" + b + "' is an invalid name.", Ge("InvalidTag", O, dt(l, d));
              }
              const g = Oh(l, d);
              if (g === !1) return Ge("InvalidAttr", "Attributes for '" + b + "' have open quote.", dt(l, d));
              let T = g.value;
              if (d = g.index, T[T.length - 1] === "/") {
                const O = d - T.length;
                T = T.substring(0, T.length - 1);
                const S = ws(T, f);
                if (S !== !0) return Ge(S.err.code, S.err.msg, dt(l, O + S.err.line));
                h = !0;
              } else if (y) {
                if (!g.tagClosed) return Ge("InvalidTag", "Closing tag '" + b + "' doesn't have proper closing.", dt(l, d));
                if (T.trim().length > 0) return Ge("InvalidTag", "Closing tag '" + b + "' can't have attributes or invalid starting.", dt(l, E));
                if (c.length === 0) return Ge("InvalidTag", "Closing tag '" + b + "' has not been opened.", dt(l, E));
                {
                  const O = c.pop();
                  if (b !== O.tagName) {
                    let S = dt(l, O.tagStartPos);
                    return Ge("InvalidTag", "Expected closing tag '" + O.tagName + "' (opened in line " + S.line + ", col " + S.col + ") instead of closing tag '" + b + "'.", dt(l, E));
                  }
                  c.length == 0 && (s = !0);
                }
              } else {
                const O = ws(T, f);
                if (O !== !0) return Ge(O.err.code, O.err.msg, dt(l, d - T.length + O.err.line));
                if (s === !0) return Ge("InvalidXml", "Multiple possible root nodes found.", dt(l, d));
                f.unpairedTags.indexOf(b) !== -1 || c.push({ tagName: b, tagStartPos: E }), h = !0;
              }
              for (d++; d < l.length; d++) if (l[d] === "<") {
                if (l[d + 1] === "!") {
                  d++, d = Es(l, d);
                  continue;
                }
                if (l[d + 1] !== "?") break;
                if (d = gs(l, ++d), d.err) return d;
              } else if (l[d] === "&") {
                const O = Sh(l, d);
                if (O == -1) return Ge("InvalidChar", "char '&' is not expected.", dt(l, d));
                d = O;
              } else if (s === !0 && !ms(l[d])) return Ge("InvalidXml", "Extra text at the end", dt(l, d));
              l[d] === "<" && d--;
            }
          }
        }
        return h ? c.length == 1 ? Ge("InvalidTag", "Unclosed tag '" + c[0].tagName + "'.", dt(l, c[0].tagStartPos)) : !(c.length > 0) || Ge("InvalidXml", "Invalid '" + JSON.stringify(c.map((d) => d.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 }) : Ge("InvalidXml", "Start tag expected.", 1);
      }(e, r);
      if (a !== !0) throw Error(`${a.err.msg}:${a.err.line}:${a.err.col}`);
    }
    const i = new ch(this.options);
    i.addExternalEntities(this.externalEntities);
    const o = i.parseXml(e);
    return this.options.preserveOrder || o === void 0 ? o : _h(o, this.options);
  }
  addEntity(e, r) {
    if (r.indexOf("&") !== -1) throw new Error("Entity value can't have '&'");
    if (e.indexOf("&") !== -1 || e.indexOf(";") !== -1) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    if (r === "&") throw new Error("An entity with value '&' is not permitted");
    this.externalEntities[e] = r;
  }
  static getMetaDataSymbol() {
    return An.getMetaDataSymbol();
  }
}
var Lh = Re(829), rn = Re.n(Lh), Vn = function(n) {
  return n.Array = "array", n.Object = "object", n.Original = "original", n;
}(Vn || {});
function _l(n, e) {
  if (!n.endsWith("propstat.prop.displayname")) return e;
}
function xr(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Vn.Original;
  const i = rn().get(n, e);
  return r === "array" && Array.isArray(i) === !1 ? [i] : r === "object" && Array.isArray(i) ? i[0] : i;
}
function Kr(n, e) {
  return e = e ?? { attributeNamePrefix: "@", attributeParsers: [], tagParsers: [_l] }, new Promise((r) => {
    r(function(i) {
      const { multistatus: o } = i;
      if (o === "") return { multistatus: { response: [] } };
      if (!o) throw new Error("Invalid response: No root multistatus found");
      const a = { multistatus: Array.isArray(o) ? o[0] : o };
      return rn().set(a, "multistatus.response", xr(a, "multistatus.response", Vn.Array)), rn().set(a, "multistatus.response", rn().get(a, "multistatus.response").map((l) => function(f) {
        const c = Object.assign({}, f);
        return c.status ? rn().set(c, "status", xr(c, "status", Vn.Object)) : (rn().set(c, "propstat", xr(c, "propstat", Vn.Object)), rn().set(c, "propstat.prop", xr(c, "propstat.prop", Vn.Object))), c;
      }(l))), a;
    }(function(i) {
      let { attributeNamePrefix: o, attributeParsers: a, tagParsers: l } = i;
      return new bl({ allowBooleanAttributes: !0, attributeNamePrefix: o, textNodeName: "text", ignoreAttributes: !1, removeNSPrefix: !0, numberParseOptions: { hex: !0, leadingZeros: !1 }, attributeValueProcessor(f, c, h) {
        for (const s of a) try {
          const d = s(h, c);
          if (d !== c) return d;
        } catch {
        }
        return c;
      }, tagValueProcessor(f, c, h) {
        for (const s of l) try {
          const d = s(h, c);
          if (d !== c) return d;
        } catch {
        }
        return c;
      } });
    }(e).parse(n)));
  });
}
function uo(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
  const { getlastmodified: i = null, getcontentlength: o = "0", resourcetype: a = null, getcontenttype: l = null, getetag: f = null } = n, c = a && typeof a == "object" && a.collection !== void 0 ? "directory" : "file", h = { filename: e, basename: jr().basename(e), lastmod: i, size: parseInt(o, 10), type: c, etag: typeof f == "string" ? f.replace(/"/g, "") : null };
  return c === "file" && (h.mime = l && typeof l == "string" ? l.split(";")[0] : ""), r && (n.displayname !== void 0 && (n.displayname = String(n.displayname)), h.props = n), h;
}
function xh(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], i = null;
  try {
    n.multistatus.response[0].propstat && (i = n.multistatus.response[0]);
  } catch {
  }
  if (!i) throw new Error("Failed getting item stat: bad response");
  const { propstat: { prop: o, status: a } } = i, [l, f, c] = a.split(" ", 3), h = parseInt(f, 10);
  if (h >= 400) {
    const s = new Error(`Invalid response: ${h} ${c}`);
    throw s.status = h, s;
  }
  return uo(o, yr(e), r);
}
function Ph(n) {
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
function vi(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const co = /* @__PURE__ */ function(n) {
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
  const { details: i = !1 } = r, o = et({ url: De(n.remoteURL, $e(e)), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, n, r);
  return vi(Qe(o, n), function(a) {
    return tt(n, a), vi(a.text(), function(l) {
      return vi(Kr(l, n.parsing), function(f) {
        const c = xh(f, e, i);
        return er(a, c, i);
      });
    });
  });
});
function Tl(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const $h = Nl(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = function(a) {
    if (!a || a === "/") return [];
    let l = a;
    const f = [];
    do
      f.push(l), l = jr().dirname(l);
    while (l && l !== "/");
    return f;
  }(yr(e));
  i.sort((a, l) => a.length > l.length ? 1 : l.length > a.length ? -1 : 0);
  let o = !1;
  return function(a, l, f) {
    if (typeof a[vs] == "function") {
      let T = function(O) {
        try {
          for (; !(c = d.next()).done; ) if ((O = l(c.value)) && O.then) {
            if (!bs(O)) return void O.then(T, s || (s = Et.bind(null, h = new qn(), 2)));
            O = O.v;
          }
          h ? Et(h, 1, O) : h = O;
        } catch (S) {
          Et(h || (h = new qn()), 2, S);
        }
      };
      var g = T, c, h, s, d = a[vs]();
      if (T(), d.return) {
        var E = function(O) {
          try {
            c.done || d.return();
          } catch {
          }
          return O;
        };
        if (h && h.then) return h.then(E, function(O) {
          throw E(O);
        });
        E();
      }
      return h;
    }
    if (!("length" in a)) throw new TypeError("Object is not iterable");
    for (var y = [], b = 0; b < a.length; b++) y.push(a[b]);
    return function(T, O, S) {
      var L, R, M = -1;
      return function Y(X) {
        try {
          for (; ++M < T.length && (!S || !S()); ) if ((X = O(M)) && X.then) {
            if (!bs(X)) return void X.then(Y, R || (R = Et.bind(null, L = new qn(), 2)));
            X = X.v;
          }
          L ? Et(L, 1, X) : L = X;
        } catch (oe) {
          Et(L || (L = new qn()), 2, oe);
        }
      }(), L;
    }(y, function(T) {
      return l(y[T]);
    }, f);
  }(i, function(a) {
    return l = function() {
      return function(c, h) {
        try {
          var s = Tl(co(n, a), function(d) {
            if (d.type !== "directory") throw new Error(`Path includes a file: ${e}`);
          });
        } catch (d) {
          return h(d);
        }
        return s && s.then ? s.then(void 0, h) : s;
      }(0, function(c) {
        const h = c;
        return function() {
          if (h.status === 404) return o = !0, ys(Ji(n, a, { ...r, recursive: !1 }));
          throw c;
        }();
      });
    }, (f = function() {
      if (o) return ys(Ji(n, a, { ...r, recursive: !1 }));
    }()) && f.then ? f.then(l) : l();
    var l, f;
  }, function() {
    return !1;
  });
});
function Nl(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
function Dh() {
}
function ys(n, e) {
  return n && n.then ? n.then(Dh) : Promise.resolve();
}
const vs = typeof Symbol < "u" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
function Et(n, e, r) {
  if (!n.s) {
    if (r instanceof qn) {
      if (!r.s) return void (r.o = Et.bind(null, n, e));
      1 & e && (e = r.s), r = r.v;
    }
    if (r && r.then) return void r.then(Et.bind(null, n, e), Et.bind(null, n, 2));
    n.s = e, n.v = r;
    const i = n.o;
    i && i(n);
  }
}
const qn = function() {
  function n() {
  }
  return n.prototype.then = function(e, r) {
    const i = new n(), o = this.s;
    if (o) {
      const a = 1 & o ? e : r;
      if (a) {
        try {
          Et(i, 1, a(this.v));
        } catch (l) {
          Et(i, 2, l);
        }
        return i;
      }
      return this;
    }
    return this.o = function(a) {
      try {
        const l = a.v;
        1 & a.s ? Et(i, 1, e ? e(l) : l) : r ? Et(i, 1, r(l)) : Et(i, 2, l);
      } catch (l) {
        Et(i, 2, l);
      }
    }, i;
  }, n;
}();
function bs(n) {
  return n instanceof qn && 1 & n.s;
}
const Ji = Nl(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (r.recursive === !0) return $h(n, e, r);
  const i = et({ url: De(n.remoteURL, (o = $e(e), o.endsWith("/") ? o : o + "/")), method: "MKCOL" }, n, r);
  var o;
  return Tl(Qe(i, n), function(a) {
    tt(n, a);
  });
});
var kh = Re(388), _s = Re.n(kh);
const Fh = /* @__PURE__ */ function(n) {
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
  const o = et({ url: De(n.remoteURL, $e(e)), method: "GET", headers: i }, n, r);
  return l = function(f) {
    if (tt(n, f), i.Range && f.status !== 206) {
      const c = new Error(`Invalid response code for partial request: ${f.status}`);
      throw c.status = f.status, c;
    }
    return r.callback && setTimeout(() => {
      r.callback(f);
    }, 0), f.body;
  }, (a = Qe(o, n)) && a.then || (a = Promise.resolve(a)), l ? a.then(l) : a;
  var a, l;
}), Mh = () => {
}, Uh = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e, r) {
  r.url || (r.url = De(n.remoteURL, $e(e)));
  const i = et(r, n, {});
  return a = function(l) {
    return tt(n, l), l;
  }, (o = Qe(i, n)) && o.then || (o = Promise.resolve(o)), a ? o.then(a) : o;
  var o, a;
}), Bh = /* @__PURE__ */ function(n) {
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
  const i = et({ url: De(n.remoteURL, $e(e)), method: "DELETE" }, n, r);
  return a = function(l) {
    tt(n, l);
  }, (o = Qe(i, n)) && o.then || (o = Promise.resolve(o)), a ? o.then(a) : o;
  var o, a;
}), jh = /* @__PURE__ */ function(n) {
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
      var a = (l = co(n, e, r), f = function() {
        return !0;
      }, c ? f ? f(l) : l : (l && l.then || (l = Promise.resolve(l)), f ? l.then(f) : l));
    } catch (h) {
      return o(h);
    }
    var l, f, c;
    return a && a.then ? a.then(void 0, o) : a;
  }(0, function(i) {
    if (i.status === 404) return !1;
    throw i;
  });
});
function bi(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const Gh = /* @__PURE__ */ function(n) {
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
  const i = et({ url: De(n.remoteURL, $e(e), "/"), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: r.deep ? "infinity" : "1" } }, n, r);
  return bi(Qe(i, n), function(o) {
    return tt(n, o), bi(o.text(), function(a) {
      if (!a) throw new Error("Failed parsing directory contents: Empty response");
      return bi(Kr(a, n.parsing), function(l) {
        const f = es(e);
        let c = function(h, s, d) {
          let E = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], y = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
          const b = jr().join(s, "/"), { multistatus: { response: g } } = h, T = g.map((O) => {
            const S = function(R) {
              try {
                return R.replace(/^https?:\/\/[^\/]+/, "");
              } catch (M) {
                throw new yt(M, "Failed normalising HREF");
              }
            }(O.href), { propstat: { prop: L } } = O;
            return uo(L, b === "/" ? decodeURIComponent(yr(S)) : yr(jr().relative(decodeURIComponent(b), decodeURIComponent(S))), E);
          });
          return y ? T : T.filter((O) => O.basename && (O.type === "file" || O.filename !== d.replace(/\/$/, "")));
        }(l, es(n.remoteBasePath || n.remotePath), f, r.details, r.includeSelf);
        return r.glob && (c = function(h, s) {
          return h.filter((d) => ct(d.filename, s, { matchBase: !0 }));
        }(c, r.glob)), er(o, c, r.details);
      });
    });
  });
});
function fo(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
const Wh = fo(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = et({ url: De(n.remoteURL, $e(e)), method: "GET", headers: { Accept: "text/plain" }, transformResponse: [zh] }, n, r);
  return Xr(Qe(i, n), function(o) {
    return tt(n, o), Xr(o.text(), function(a) {
      return er(o, a, r.details);
    });
  });
});
function Xr(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const Vh = fo(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = et({ url: De(n.remoteURL, $e(e)), method: "GET" }, n, r);
  return Xr(Qe(i, n), function(o) {
    let a;
    return tt(n, o), function(l, f) {
      var c = l();
      return c && c.then ? c.then(f) : f();
    }(function() {
      return Xr(o.arrayBuffer(), function(l) {
        a = l;
      });
    }, function() {
      return er(o, a, r.details);
    });
  });
}), qh = fo(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { format: i = "binary" } = r;
  if (i !== "binary" && i !== "text") throw new yt({ info: { code: yn.InvalidOutputFormat } }, `Invalid output format: ${i}`);
  return i === "text" ? Wh(n, e, r) : Vh(n, e, r);
}), zh = (n) => n;
function Xh(n, e) {
  let r = "";
  return e.format && e.indentBy.length > 0 && (r = `
`), Il(n, e, "", r);
}
function Il(n, e, r, i) {
  let o = "", a = !1;
  for (let l = 0; l < n.length; l++) {
    const f = n[l], c = Hh(f);
    if (c === void 0) continue;
    let h = "";
    if (h = r.length === 0 ? c : `${r}.${c}`, c === e.textNodeName) {
      let y = f[c];
      Yh(h, e) || (y = e.tagValueProcessor(c, y), y = Al(y, e)), a && (o += i), o += y, a = !1;
      continue;
    }
    if (c === e.cdataPropName) {
      a && (o += i), o += `<![CDATA[${f[c][0][e.textNodeName]}]]>`, a = !1;
      continue;
    }
    if (c === e.commentPropName) {
      o += i + `<!--${f[c][0][e.textNodeName]}-->`, a = !0;
      continue;
    }
    if (c[0] === "?") {
      const y = Ts(f[":@"], e), b = c === "?xml" ? "" : i;
      let g = f[c][0][e.textNodeName];
      g = g.length !== 0 ? " " + g : "", o += b + `<${c}${g}${y}?>`, a = !0;
      continue;
    }
    let s = i;
    s !== "" && (s += e.indentBy);
    const d = i + `<${c}${Ts(f[":@"], e)}`, E = Il(f[c], e, h, s);
    e.unpairedTags.indexOf(c) !== -1 ? e.suppressUnpairedNode ? o += d + ">" : o += d + "/>" : E && E.length !== 0 || !e.suppressEmptyNode ? E && E.endsWith(">") ? o += d + `>${E}${i}</${c}>` : (o += d + ">", E && i !== "" && (E.includes("/>") || E.includes("</")) ? o += i + e.indentBy + E + i : o += E, o += `</${c}>`) : o += d + "/>", a = !0;
  }
  return o;
}
function Hh(n) {
  const e = Object.keys(n);
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    if (n.hasOwnProperty(i) && i !== ":@") return i;
  }
}
function Ts(n, e) {
  let r = "";
  if (n && !e.ignoreAttributes) for (let i in n) {
    if (!n.hasOwnProperty(i)) continue;
    let o = e.attributeValueProcessor(i, n[i]);
    o = Al(o, e), o === !0 && e.suppressBooleanAttributes ? r += ` ${i.substr(e.attributeNamePrefix.length)}` : r += ` ${i.substr(e.attributeNamePrefix.length)}="${o}"`;
  }
  return r;
}
function Yh(n, e) {
  let r = (n = n.substr(0, n.length - e.textNodeName.length - 1)).substr(n.lastIndexOf(".") + 1);
  for (let i in e.stopNodes) if (e.stopNodes[i] === n || e.stopNodes[i] === "*." + r) return !0;
  return !1;
}
function Al(n, e) {
  if (n && n.length > 0 && e.processEntities) for (let r = 0; r < e.entities.length; r++) {
    const i = e.entities[r];
    n = n.replace(i.regex, i.val);
  }
  return n;
}
const Zh = { attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, cdataPropName: !1, format: !1, indentBy: "  ", suppressEmptyNode: !1, suppressUnpairedNode: !0, suppressBooleanAttributes: !0, tagValueProcessor: function(n, e) {
  return e;
}, attributeValueProcessor: function(n, e) {
  return e;
}, preserveOrder: !1, commentPropName: !1, unpairedTags: [], entities: [{ regex: new RegExp("&", "g"), val: "&amp;" }, { regex: new RegExp(">", "g"), val: "&gt;" }, { regex: new RegExp("<", "g"), val: "&lt;" }, { regex: new RegExp("'", "g"), val: "&apos;" }, { regex: new RegExp('"', "g"), val: "&quot;" }], processEntities: !0, stopNodes: [], oneListGroup: !1 };
function dn(n) {
  this.options = Object.assign({}, Zh, n), this.options.ignoreAttributes === !0 || this.options.attributesGroupName ? this.isAttribute = function() {
    return !1;
  } : (this.ignoreAttributesFn = wl(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = Qh), this.processTextOrObjNode = Kh, this.options.format ? (this.indentate = Jh, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
    return "";
  }, this.tagEndChar = ">", this.newLine = "");
}
function Kh(n, e, r, i) {
  const o = this.j2x(n, r + 1, i.concat(e));
  return n[this.options.textNodeName] !== void 0 && Object.keys(n).length === 1 ? this.buildTextValNode(n[this.options.textNodeName], e, o.attrStr, r) : this.buildObjectNode(o.val, e, o.attrStr, r);
}
function Jh(n) {
  return this.options.indentBy.repeat(n);
}
function Qh(n) {
  return !(!n.startsWith(this.options.attributeNamePrefix) || n === this.options.textNodeName) && n.substr(this.attrPrefixLen);
}
function ep(n) {
  return new dn({ attributeNamePrefix: "@_", format: !0, ignoreAttributes: !1, suppressEmptyNode: !0 }).build(Ol({ lockinfo: { "@_xmlns:d": "DAV:", lockscope: { exclusive: {} }, locktype: { write: {} }, owner: { href: n } } }, "d"));
}
function Ol(n, e) {
  const r = { ...n };
  for (const i in r) r.hasOwnProperty(i) && (r[i] && typeof r[i] == "object" && i.indexOf(":") === -1 ? (r[`${e}:${i}`] = Ol(r[i], e), delete r[i]) : /^@_/.test(i) === !1 && (r[`${e}:${i}`] = r[i], delete r[i]));
  return r;
}
function Qi(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
function Rl(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
dn.prototype.build = function(n) {
  return this.options.preserveOrder ? Xh(n, this.options) : (Array.isArray(n) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (n = { [this.options.arrayNodeName]: n }), this.j2x(n, 0, []).val);
}, dn.prototype.j2x = function(n, e, r) {
  let i = "", o = "";
  const a = r.join(".");
  for (let l in n) if (Object.prototype.hasOwnProperty.call(n, l)) if (n[l] === void 0) this.isAttribute(l) && (o += "");
  else if (n[l] === null) this.isAttribute(l) || l === this.options.cdataPropName ? o += "" : l[0] === "?" ? o += this.indentate(e) + "<" + l + "?" + this.tagEndChar : o += this.indentate(e) + "<" + l + "/" + this.tagEndChar;
  else if (n[l] instanceof Date) o += this.buildTextValNode(n[l], l, "", e);
  else if (typeof n[l] != "object") {
    const f = this.isAttribute(l);
    if (f && !this.ignoreAttributesFn(f, a)) i += this.buildAttrPairStr(f, "" + n[l]);
    else if (!f) if (l === this.options.textNodeName) {
      let c = this.options.tagValueProcessor(l, "" + n[l]);
      o += this.replaceEntitiesValue(c);
    } else o += this.buildTextValNode(n[l], l, "", e);
  } else if (Array.isArray(n[l])) {
    const f = n[l].length;
    let c = "", h = "";
    for (let s = 0; s < f; s++) {
      const d = n[l][s];
      if (d !== void 0) if (d === null) l[0] === "?" ? o += this.indentate(e) + "<" + l + "?" + this.tagEndChar : o += this.indentate(e) + "<" + l + "/" + this.tagEndChar;
      else if (typeof d == "object") if (this.options.oneListGroup) {
        const E = this.j2x(d, e + 1, r.concat(l));
        c += E.val, this.options.attributesGroupName && d.hasOwnProperty(this.options.attributesGroupName) && (h += E.attrStr);
      } else c += this.processTextOrObjNode(d, l, e, r);
      else if (this.options.oneListGroup) {
        let E = this.options.tagValueProcessor(l, d);
        E = this.replaceEntitiesValue(E), c += E;
      } else c += this.buildTextValNode(d, l, "", e);
    }
    this.options.oneListGroup && (c = this.buildObjectNode(c, l, h, e)), o += c;
  } else if (this.options.attributesGroupName && l === this.options.attributesGroupName) {
    const f = Object.keys(n[l]), c = f.length;
    for (let h = 0; h < c; h++) i += this.buildAttrPairStr(f[h], "" + n[l][f[h]]);
  } else o += this.processTextOrObjNode(n[l], l, e, r);
  return { attrStr: i, val: o };
}, dn.prototype.buildAttrPairStr = function(n, e) {
  return e = this.options.attributeValueProcessor(n, "" + e), e = this.replaceEntitiesValue(e), this.options.suppressBooleanAttributes && e === "true" ? " " + n : " " + n + '="' + e + '"';
}, dn.prototype.buildObjectNode = function(n, e, r, i) {
  if (n === "") return e[0] === "?" ? this.indentate(i) + "<" + e + r + "?" + this.tagEndChar : this.indentate(i) + "<" + e + r + this.closeTag(e) + this.tagEndChar;
  {
    let o = "</" + e + this.tagEndChar, a = "";
    return e[0] === "?" && (a = "?", o = ""), !r && r !== "" || n.indexOf("<") !== -1 ? this.options.commentPropName !== !1 && e === this.options.commentPropName && a.length === 0 ? this.indentate(i) + `<!--${n}-->` + this.newLine : this.indentate(i) + "<" + e + r + a + this.tagEndChar + n + this.indentate(i) + o : this.indentate(i) + "<" + e + r + a + ">" + n + o;
  }
}, dn.prototype.closeTag = function(n) {
  let e = "";
  return this.options.unpairedTags.indexOf(n) !== -1 ? this.options.suppressUnpairedNode || (e = "/") : e = this.options.suppressEmptyNode ? "/" : `></${n}`, e;
}, dn.prototype.buildTextValNode = function(n, e, r, i) {
  if (this.options.cdataPropName !== !1 && e === this.options.cdataPropName) return this.indentate(i) + `<![CDATA[${n}]]>` + this.newLine;
  if (this.options.commentPropName !== !1 && e === this.options.commentPropName) return this.indentate(i) + `<!--${n}-->` + this.newLine;
  if (e[0] === "?") return this.indentate(i) + "<" + e + r + "?" + this.tagEndChar;
  {
    let o = this.options.tagValueProcessor(e, n);
    return o = this.replaceEntitiesValue(o), o === "" ? this.indentate(i) + "<" + e + r + this.closeTag(e) + this.tagEndChar : this.indentate(i) + "<" + e + r + ">" + o + "</" + e + this.tagEndChar;
  }
}, dn.prototype.replaceEntitiesValue = function(n) {
  if (n && n.length > 0 && this.options.processEntities) for (let e = 0; e < this.options.entities.length; e++) {
    const r = this.options.entities[e];
    n = n.replace(r.regex, r.val);
  }
  return n;
};
const tp = Rl(function(n, e, r) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = et({ url: De(n.remoteURL, $e(e)), method: "UNLOCK", headers: { "Lock-Token": r } }, n, i);
  return Qi(Qe(o, n), function(a) {
    if (tt(n, a), a.status !== 204 && a.status !== 200) throw lo(a);
  });
}), np = Rl(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { refreshToken: i, timeout: o = rp } = r, a = { Accept: "text/plain,application/xml", Timeout: o };
  i && (a.If = i);
  const l = et({ url: De(n.remoteURL, $e(e)), method: "LOCK", headers: a, data: ep(n.contactHref) }, n, r);
  return Qi(Qe(l, n), function(f) {
    return tt(n, f), Qi(f.text(), function(c) {
      const h = (E = c, new bl({ removeNSPrefix: !0, parseAttributeValue: !0, parseTagValue: !0 }).parse(E)), s = rn().get(h, "prop.lockdiscovery.activelock.locktoken.href"), d = rn().get(h, "prop.lockdiscovery.activelock.timeout");
      var E;
      if (!s) throw lo(f, "No lock token received: ");
      return { token: s, serverTimeout: d };
    });
  });
}), rp = "Infinite, Second-4100000000";
function _i(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const ip = /* @__PURE__ */ function(n) {
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
  const r = e.path || "/", i = et({ url: De(n.remoteURL, r), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, n, e);
  return _i(Qe(i, n), function(o) {
    return tt(n, o), _i(o.text(), function(a) {
      return _i(Kr(a, n.parsing), function(l) {
        const f = function(c) {
          try {
            const [h] = c.multistatus.response, { propstat: { prop: { "quota-used-bytes": s, "quota-available-bytes": d } } } = h;
            return s !== void 0 && d !== void 0 ? { used: parseInt(String(s), 10), available: Ph(d) } : null;
          } catch {
          }
          return null;
        }(l);
        return er(o, f, e.details);
      });
    });
  });
});
function Ti(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const op = /* @__PURE__ */ function(n) {
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
  const { details: i = !1 } = r, o = et({ url: De(n.remoteURL, $e(e)), method: "SEARCH", headers: { Accept: "text/plain,application/xml", "Content-Type": n.headers["Content-Type"] || "application/xml; charset=utf-8" } }, n, r);
  return Ti(Qe(o, n), function(a) {
    return tt(n, a), Ti(a.text(), function(l) {
      return Ti(Kr(l, n.parsing), function(f) {
        const c = function(h, s, d) {
          const E = { truncated: !1, results: [] };
          return E.truncated = h.multistatus.response.some((y) => {
            var b, g;
            return ((g = (y.status || ((b = y.propstat) == null ? void 0 : b.status)).split(" ", 3)) == null ? void 0 : g[1]) === "507" && y.href.replace(/\/$/, "").endsWith($e(s).replace(/\/$/, ""));
          }), h.multistatus.response.forEach((y) => {
            if (y.propstat === void 0) return;
            const b = y.href.split("/").map(decodeURIComponent).join("/");
            E.results.push(uo(y.propstat.prop, b, d));
          }), E;
        }(f, e, i);
        return er(a, c, i);
      });
    });
  });
}), sp = /* @__PURE__ */ function(n) {
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
  const o = et({ url: De(n.remoteURL, $e(e)), method: "MOVE", headers: { Destination: De(n.remoteURL, $e(r)), Overwrite: i.overwrite === !1 ? "F" : "T" } }, n, i);
  return l = function(f) {
    tt(n, f);
  }, (a = Qe(o, n)) && a.then || (a = Promise.resolve(a)), l ? a.then(l) : a;
  var a, l;
});
var ap = Re(172);
function lp(n) {
  if (ll(n)) return n.byteLength;
  if (ul(n)) return n.length;
  if (typeof n == "string") return (0, ap.d)(n);
  throw new yt({ info: { code: yn.DataTypeNoLength } }, "Cannot calculate data length: Invalid type");
}
const up = /* @__PURE__ */ function(n) {
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
  o === !1 || (l["Content-Length"] = typeof o == "number" ? `${o}` : `${lp(r)}`), a || (l["If-None-Match"] = "*");
  const f = et({ url: De(n.remoteURL, $e(e)), method: "PUT", headers: l, data: r }, n, i);
  return h = function(s) {
    try {
      tt(n, s);
    } catch (d) {
      const E = d;
      if (E.status !== 412 || a) throw E;
      return !1;
    }
    return !0;
  }, (c = Qe(f, n)) && c.then || (c = Promise.resolve(c)), h ? c.then(h) : c;
  var c, h;
}), Sl = /* @__PURE__ */ function(n) {
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
  const i = et({ url: De(n.remoteURL, $e(e)), method: "OPTIONS" }, n, r);
  return a = function(l) {
    try {
      tt(n, l);
    } catch (f) {
      throw f;
    }
    return { compliance: (l.headers.get("DAV") ?? "").split(",").map((f) => f.trim()), server: l.headers.get("Server") ?? "" };
  }, (o = Qe(i, n)) && o.then || (o = Promise.resolve(o)), a ? o.then(a) : o;
  var o, a;
});
function Er(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const cp = ho(function(n, e, r, i, o) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  if (r > i || r < 0) throw new yt({ info: { code: yn.InvalidUpdateRange } }, `Invalid update range ${r} for partial update`);
  const l = { "Content-Type": "application/octet-stream", "Content-Length": "" + (i - r + 1), "Content-Range": `bytes ${r}-${i}/*` }, f = et({ url: De(n.remoteURL, $e(e)), method: "PUT", headers: l, data: o }, n, a);
  return Er(Qe(f, n), function(c) {
    tt(n, c);
  });
});
function Ns(n, e) {
  var r = n();
  return r && r.then ? r.then(e) : e(r);
}
const fp = ho(function(n, e, r, i, o) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  if (r > i || r < 0) throw new yt({ info: { code: yn.InvalidUpdateRange } }, `Invalid update range ${r} for partial update`);
  const l = { "Content-Type": "application/x-sabredav-partialupdate", "Content-Length": "" + (i - r + 1), "X-Update-Range": `bytes=${r}-${i}` }, f = et({ url: De(n.remoteURL, $e(e)), method: "PATCH", headers: l, data: o }, n, a);
  return Er(Qe(f, n), function(c) {
    tt(n, c);
  });
});
function ho(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
const hp = ho(function(n, e, r, i, o) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  return Er(Sl(n, e, a), function(l) {
    let f = !1;
    return Ns(function() {
      if (l.compliance.includes("sabredav-partialupdate")) return Er(fp(n, e, r, i, o, a), function(c) {
        return f = !0, c;
      });
    }, function(c) {
      let h = !1;
      return f ? c : Ns(function() {
        if (l.server.includes("Apache") && l.compliance.includes("<http://apache.org/dav/propset/fs/1>")) return Er(cp(n, e, r, i, o, a), function(s) {
          return h = !0, s;
        });
      }, function(s) {
        if (h) return s;
        throw new yt({ info: { code: yn.NotSupported } }, "Not supported");
      });
    });
  });
}), pp = "https://github.com/perry-mitchell/webdav-client/blob/master/LOCK_CONTACT.md";
function Cl(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { authType: r = null, remoteBasePath: i, contactHref: o = pp, ha1: a, headers: l = {}, httpAgent: f, httpsAgent: c, password: h, token: s, username: d, withCredentials: E } = e;
  let y = r;
  y || (y = d || h ? It.Password : It.None);
  const b = { authType: y, remoteBasePath: i, contactHref: o, ha1: a, headers: Object.assign({}, l), httpAgent: f, httpsAgent: c, password: h, parsing: { attributeNamePrefix: e.attributeNamePrefix ?? "@", attributeParsers: [], tagParsers: [_l] }, remotePath: bf(n), remoteURL: n, token: s, username: d, withCredentials: E };
  return sl(b, d, h, s, a), { copyFile: (g, T, O) => nh(b, g, T, O), createDirectory: (g, T) => Ji(b, g, T), createReadStream: (g, T) => function(O, S) {
    let L = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const R = new (_s()).PassThrough();
    return Fh(O, S, L).then((M) => {
      M.pipe(R);
    }).catch((M) => {
      R.emit("error", M);
    }), R;
  }(b, g, T), createWriteStream: (g, T, O) => function(S, L) {
    let R = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, M = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Mh;
    const Y = new (_s()).PassThrough(), X = {};
    R.overwrite === !1 && (X["If-None-Match"] = "*");
    const oe = et({ url: De(S.remoteURL, $e(L)), method: "PUT", headers: X, data: Y, maxRedirects: 0 }, S, R);
    return Qe(oe, S).then((x) => tt(S, x)).then((x) => {
      setTimeout(() => {
        M(x);
      }, 0);
    }).catch((x) => {
      Y.emit("error", x);
    }), Y;
  }(b, g, T, O), customRequest: (g, T) => Uh(b, g, T), deleteFile: (g, T) => Bh(b, g, T), exists: (g, T) => jh(b, g, T), getDirectoryContents: (g, T) => Gh(b, g, T), getFileContents: (g, T) => qh(b, g, T), getFileDownloadLink: (g) => function(T, O) {
    let S = De(T.remoteURL, $e(O));
    const L = /^https:/i.test(S) ? "https" : "http";
    switch (T.authType) {
      case It.None:
        break;
      case It.Password: {
        const R = ns(T.headers.Authorization.replace(/^Basic /i, "").trim());
        S = S.replace(/^https?:\/\//, `${L}://${R}@`);
        break;
      }
      default:
        throw new yt({ info: { code: yn.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${T.authType}`);
    }
    return S;
  }(b, g), getFileUploadLink: (g) => function(T, O) {
    let S = `${De(T.remoteURL, $e(O))}?Content-Type=application/octet-stream`;
    const L = /^https:/i.test(S) ? "https" : "http";
    switch (T.authType) {
      case It.None:
        break;
      case It.Password: {
        const R = ns(T.headers.Authorization.replace(/^Basic /i, "").trim());
        S = S.replace(/^https?:\/\//, `${L}://${R}@`);
        break;
      }
      default:
        throw new yt({ info: { code: yn.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${T.authType}`);
    }
    return S;
  }(b, g), getHeaders: () => Object.assign({}, b.headers), getQuota: (g) => ip(b, g), lock: (g, T) => np(b, g, T), moveFile: (g, T, O) => sp(b, g, T, O), putFileContents: (g, T, O) => up(b, g, T, O), partialUpdateFileContents: (g, T, O, S, L) => hp(b, g, T, O, S, L), getDAVCompliance: (g) => Sl(b, g), search: (g, T) => op(b, g, T), setHeaders: (g) => {
    b.headers = Object.assign({}, g);
  }, stat: (g, T) => co(b, g, T), unlock: (g, T, O) => tp(b, g, T, O), registerAttributeParser: (g) => {
    b.parsing.attributeParsers.push(g);
  }, registerTagParser: (g) => {
    b.parsing.tagParsers.push(g);
  } };
}
/*!
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
function dp(n = "") {
  let e = ut.NONE;
  return n && (n.includes("G") && (e |= ut.READ), n.includes("W") && (e |= ut.WRITE), n.includes("CK") && (e |= ut.CREATE), n.includes("NV") && (e |= ut.UPDATE), n.includes("D") && (e |= ut.DELETE), n.includes("R") && (e |= ut.SHARE)), e;
}
const mp = [
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
], gp = {
  d: "DAV:",
  nc: "http://nextcloud.org/ns",
  oc: "http://owncloud.org/ns",
  ocs: "http://open-collaboration-services.org/ns"
};
function Ep() {
  return ke.davProperties ?? (ke.davProperties = [...mp]), ke.davProperties.map((n) => `<${n} />`).join(" ");
}
function wp() {
  return ke.davNamespaces ?? (ke.davNamespaces = { ...gp }), Object.keys(ke.davNamespaces).map((n) => {
    var e;
    return `xmlns:${n}="${(e = ke.davNamespaces) == null ? void 0 : e[n]}"`;
  }).join(" ");
}
function yp() {
  return `<?xml version="1.0"?>
		<d:propfind ${wp()}>
			<d:prop>
				${Ep()}
			</d:prop>
		</d:propfind>`;
}
function vp() {
  var n;
  return Qn() ? `/files/${rl()}` : `/files/${(n = Tr()) == null ? void 0 : n.uid}`;
}
const Ll = vp();
function bp() {
  const n = Za("dav");
  return Qn() ? n.replace("remote.php", "public.php") : n;
}
const xl = bp();
function _p(n = xl, e = {}) {
  const r = Cl(n, { headers: e });
  function i(a) {
    r.setHeaders({
      ...e,
      // Add this so the server knows it is an request from the browser
      "X-Requested-With": "XMLHttpRequest",
      // Inject user auth
      requesttoken: a ?? ""
    });
  }
  return ka(i), i(Da()), oo().patch("fetch", (a, l) => {
    const f = l.headers;
    return f != null && f.method && (l.method = f.method, delete f.method), fetch(a, l);
  }), r;
}
function Tp(n, e = Ll, r = xl) {
  var d, E;
  let i = (d = Tr()) == null ? void 0 : d.uid;
  if (Qn())
    i = i ?? "anonymous";
  else if (!i)
    throw new Error("No user id found");
  const o = n.props, a = dp(o == null ? void 0 : o.permissions), l = String((o == null ? void 0 : o["owner-id"]) || i), f = o.fileid || 0, c = new Date(Date.parse(n.lastmod)), h = new Date(Date.parse(o.creationdate)), s = {
    id: f,
    source: `${r}${n.filename}`,
    mtime: !isNaN(c.getTime()) && c.getTime() !== 0 ? c : void 0,
    crtime: !isNaN(h.getTime()) && h.getTime() !== 0 ? h : void 0,
    mime: n.mime || "application/octet-stream",
    // Manually cast to work around for https://github.com/perry-mitchell/webdav-client/pull/380
    displayname: o.displayname !== void 0 ? String(o.displayname) : void 0,
    size: (o == null ? void 0 : o.size) || Number.parseInt(o.getcontentlength || "0"),
    // The fileid is set to -1 for failed requests
    status: f < 0 ? Ga.FAILED : void 0,
    permissions: a,
    owner: l,
    root: e,
    attributes: {
      ...n,
      ...o,
      hasPreview: o == null ? void 0 : o["has-preview"]
    }
  };
  return (E = s.attributes) == null || delete E.props, n.type === "file" ? new Ku(s) : new Ju(s);
}
class Rt {
  static getFileConfig({
    name: e,
    url: r,
    downloadUrl: i,
    dir: o,
    onCreate: a,
    fileModifiedTime: l,
    isNew: f,
    isLoaded: c,
    sameWindow: h,
    skipConfirmation: s,
    permissions: d,
    existingContents: E,
    templateName: y,
    isPublicLink: b
  } = {}) {
    return {
      name: e || "?",
      downloadUrl: i || "",
      url: r ? We(r) : "",
      dir: o || "",
      onCreate: a,
      fileModifiedTime: l || null,
      isNew: f || !1,
      isLoaded: c || !1,
      sameWindow: h || !1,
      skipConfirmation: s || !1,
      permissions: d || ut.NONE,
      existingContents: E,
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
    const a = _p(), l = `${Ll}${o}`;
    try {
      if (await a.putFileContents(l, e, { overwrite: !0 })) {
        const c = await a.stat(l, { details: !0, data: yp() });
        return Pa("files:node:created", Tp(c.data)), !0;
      }
    } catch (f) {
      console.error(f);
    }
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static userCanEdit(e) {
    var r, i, o, a;
    return window.FileList && window.OC && window.OC.currentUser && (window.OC.PERMISSION_ALL === ((i = (r = window.FileList) == null ? void 0 : r.getDirectoryPermissions) == null ? void 0 : i.call(r)) || window.OC.PERMISSION_UPDATE === ((a = (o = window.FileList) == null ? void 0 : o.getDirectoryPermissions) == null ? void 0 : a.call(o))) || e >= ut.WRITE;
  }
}
const He = Ta(""), At = Ta(Rt.getFileConfig());
function Is(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "You are about to visit:") + ""
  ), i, o, a, l, f = (
    /*file*/
    n[0].url + ""
  ), c, h, s;
  return {
    c() {
      e = H("p"), i = _e(r), o = le(), a = H("em"), l = H("a"), c = _e(f), B(l, "href", h = We(
        /*file*/
        n[0].url
      )), B(l, "target", s = /*file*/
      n[0].sameWindow ? "_self" : "_blank"), B(e, "class", "urldisplay");
    },
    m(d, E) {
      ie(d, e, E), W(e, i), W(e, o), W(e, a), W(a, l), W(l, c);
    },
    p(d, E) {
      E & /*file*/
      1 && f !== (f = /*file*/
      d[0].url + "") && Kn(c, f), E & /*file*/
      1 && h !== (h = We(
        /*file*/
        d[0].url
      )) && B(l, "href", h), E & /*file*/
      1 && s !== (s = /*file*/
      d[0].sameWindow ? "_self" : "_blank") && B(l, "target", s);
    },
    d(d) {
      d && re(e);
    }
  };
}
function As(n) {
  let e = Rt.userCanEdit(
    /*file*/
    n[0].permissions
  ) && !/*file*/
  n[0].isPublicLink, r, i, o = (
    /*t*/
    n[2]("files_linkeditor", "Visit link") + ""
  ), a, l, f, c = e && Os(n);
  return {
    c() {
      c && c.c(), r = le(), i = H("a"), a = _e(o), B(i, "href", l = We(
        /*file*/
        n[0].url
      )), B(i, "target", f = /*file*/
      n[0].sameWindow ? "_self" : "_blank"), B(i, "class", "button primary");
    },
    m(h, s) {
      c && c.m(h, s), ie(h, r, s), ie(h, i, s), W(i, a);
    },
    p(h, s) {
      s & /*file*/
      1 && (e = Rt.userCanEdit(
        /*file*/
        h[0].permissions
      ) && !/*file*/
      h[0].isPublicLink), e ? c ? c.p(h, s) : (c = Os(h), c.c(), c.m(r.parentNode, r)) : c && (c.d(1), c = null), s & /*file*/
      1 && l !== (l = We(
        /*file*/
        h[0].url
      )) && B(i, "href", l), s & /*file*/
      1 && f !== (f = /*file*/
      h[0].sameWindow ? "_self" : "_blank") && B(i, "target", f);
    },
    d(h) {
      h && (re(r), re(i)), c && c.d(h);
    }
  };
}
function Os(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Edit link") + ""
  ), i, o, a;
  return {
    c() {
      e = H("a"), i = _e(r), B(e, "href", window.location.href), B(e, "class", "button");
    },
    m(l, f) {
      ie(l, e, f), W(e, i), o || (a = Oe(e, "click", ft(
        /*click_handler_1*/
        n[4]
      )), o = !0);
    },
    p: Qt,
    d(l) {
      l && re(e), o = !1, a();
    }
  };
}
function Np(n) {
  let e, r, i = (
    /*file*/
    n[0].name + ""
  ), o, a, l, f, c, h = (
    /*t*/
    n[2]("files_linkeditor", "Cancel") + ""
  ), s, d, E, y, b = !/*loading*/
  n[1] && Is(n), g = !/*loading*/
  n[1] && As(n);
  return {
    c() {
      e = H("div"), r = H("h3"), o = _e(i), a = le(), b && b.c(), l = le(), f = H("div"), c = H("a"), s = _e(h), d = le(), g && g.c(), B(e, "class", "edit push-bottom"), B(c, "href", window.location.href), B(c, "class", "button"), B(f, "class", "oc-dialog-buttonrow twobuttons");
    },
    m(T, O) {
      ie(T, e, O), W(e, r), W(r, o), W(e, a), b && b.m(e, null), ie(T, l, O), ie(T, f, O), W(f, c), W(c, s), W(f, d), g && g.m(f, null), E || (y = Oe(c, "click", ft(
        /*click_handler*/
        n[3]
      )), E = !0);
    },
    p(T, O) {
      O & /*file*/
      1 && i !== (i = /*file*/
      T[0].name + "") && Kn(o, i), /*loading*/
      T[1] ? b && (b.d(1), b = null) : b ? b.p(T, O) : (b = Is(T), b.c(), b.m(e, null)), /*loading*/
      T[1] ? g && (g.d(1), g = null) : g ? g.p(T, O) : (g = As(T), g.c(), g.m(f, null));
    },
    d(T) {
      T && (re(e), re(l), re(f)), b && b.d(), g && g.d(), E = !1, y();
    }
  };
}
function Ip(n) {
  let e, r;
  return e = new Jn({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [Np] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Ut(e.$$.fragment);
    },
    m(i, o) {
      Ct(e, i, o), r = !0;
    },
    p(i, [o]) {
      const a = {};
      o & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), o & /*$$scope, file, loading*/
      67 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (ve(e.$$.fragment, i), r = !0);
    },
    o(i) {
      Se(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Lt(e, i);
    }
  };
}
function Ap(n, e, r) {
  let i, o;
  const a = window.t;
  let l;
  vn(() => {
    l = At.subscribe(async (h) => {
      if (r(0, i = h), i && i.isLoaded) {
        if (r(1, o = !1), !i.url) {
          OC.dialogs.alert(a("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."), a("files_linkeditor", "A slight problem"));
          return;
        }
        const s = i.isPublicLink && window.location.toString().includes("openfile=true");
        i.skipConfirmation && i.sameWindow && !s && (window.location.href = i.url, He.update(() => "none"));
      }
    });
  }), bn(() => {
    l();
  });
  const f = () => {
    He.update(() => "none");
  }, c = () => {
    He.update(() => "edit");
  };
  return r(0, i = Rt.getFileConfig()), r(1, o = !0), [i, o, a, f, c];
}
class Op extends ln {
  constructor(e) {
    super(), an(this, e, Ap, Ip, en, {});
  }
}
var Pl = { exports: {} };
(function(n) {
  var e = function(r) {
    var i = 1e7, o = 7, a = 9007199254740992, l = b(a), f = "0123456789abcdefghijklmnopqrstuvwxyz", c = typeof BigInt == "function";
    function h(w, N, C, D) {
      return typeof w > "u" ? h[0] : typeof N < "u" ? +N == 10 && !C ? te(w) : Ne(w, N, C, D) : te(w);
    }
    function s(w, N) {
      this.value = w, this.sign = N, this.isSmall = !1;
    }
    s.prototype = Object.create(h.prototype);
    function d(w) {
      this.value = w, this.sign = w < 0, this.isSmall = !0;
    }
    d.prototype = Object.create(h.prototype);
    function E(w) {
      this.value = w;
    }
    E.prototype = Object.create(h.prototype);
    function y(w) {
      return -a < w && w < a;
    }
    function b(w) {
      return w < 1e7 ? [w] : w < 1e14 ? [w % 1e7, Math.floor(w / 1e7)] : [w % 1e7, Math.floor(w / 1e7) % 1e7, Math.floor(w / 1e14)];
    }
    function g(w) {
      T(w);
      var N = w.length;
      if (N < 4 && Me(w, l) < 0)
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
    function O(w) {
      for (var N = new Array(w), C = -1; ++C < w; )
        N[C] = 0;
      return N;
    }
    function S(w) {
      return w > 0 ? Math.floor(w) : Math.ceil(w);
    }
    function L(w, N) {
      var C = w.length, D = N.length, m = new Array(C), u = 0, p = i, v, A;
      for (A = 0; A < D; A++)
        v = w[A] + N[A] + u, u = v >= p ? 1 : 0, m[A] = v - u * p;
      for (; A < C; )
        v = w[A] + u, u = v === p ? 1 : 0, m[A++] = v - u * p;
      return u > 0 && m.push(u), m;
    }
    function R(w, N) {
      return w.length >= N.length ? L(w, N) : L(N, w);
    }
    function M(w, N) {
      var C = w.length, D = new Array(C), m = i, u, p;
      for (p = 0; p < C; p++)
        u = w[p] - m + N, N = Math.floor(u / m), D[p] = u - N * m, N += 1;
      for (; N > 0; )
        D[p++] = N % m, N = Math.floor(N / m);
      return D;
    }
    s.prototype.add = function(w) {
      var N = te(w);
      if (this.sign !== N.sign)
        return this.subtract(N.negate());
      var C = this.value, D = N.value;
      return N.isSmall ? new s(M(C, Math.abs(D)), this.sign) : new s(R(C, D), this.sign);
    }, s.prototype.plus = s.prototype.add, d.prototype.add = function(w) {
      var N = te(w), C = this.value;
      if (C < 0 !== N.sign)
        return this.subtract(N.negate());
      var D = N.value;
      if (N.isSmall) {
        if (y(C + D)) return new d(C + D);
        D = b(Math.abs(D));
      }
      return new s(M(D, Math.abs(C)), C < 0);
    }, d.prototype.plus = d.prototype.add, E.prototype.add = function(w) {
      return new E(this.value + te(w).value);
    }, E.prototype.plus = E.prototype.add;
    function Y(w, N) {
      var C = w.length, D = N.length, m = new Array(C), u = 0, p = i, v, A;
      for (v = 0; v < D; v++)
        A = w[v] - u - N[v], A < 0 ? (A += p, u = 1) : u = 0, m[v] = A;
      for (v = D; v < C; v++) {
        if (A = w[v] - u, A < 0) A += p;
        else {
          m[v++] = A;
          break;
        }
        m[v] = A;
      }
      for (; v < C; v++)
        m[v] = w[v];
      return T(m), m;
    }
    function X(w, N, C) {
      var D;
      return Me(w, N) >= 0 ? D = Y(w, N) : (D = Y(N, w), C = !C), D = g(D), typeof D == "number" ? (C && (D = -D), new d(D)) : new s(D, C);
    }
    function oe(w, N, C) {
      var D = w.length, m = new Array(D), u = -N, p = i, v, A;
      for (v = 0; v < D; v++)
        A = w[v] + u, u = Math.floor(A / p), A %= p, m[v] = A < 0 ? A + p : A;
      return m = g(m), typeof m == "number" ? (C && (m = -m), new d(m)) : new s(m, C);
    }
    s.prototype.subtract = function(w) {
      var N = te(w);
      if (this.sign !== N.sign)
        return this.add(N.negate());
      var C = this.value, D = N.value;
      return N.isSmall ? oe(C, Math.abs(D), this.sign) : X(C, D, this.sign);
    }, s.prototype.minus = s.prototype.subtract, d.prototype.subtract = function(w) {
      var N = te(w), C = this.value;
      if (C < 0 !== N.sign)
        return this.add(N.negate());
      var D = N.value;
      return N.isSmall ? new d(C - D) : oe(D, Math.abs(C), C >= 0);
    }, d.prototype.minus = d.prototype.subtract, E.prototype.subtract = function(w) {
      return new E(this.value - te(w).value);
    }, E.prototype.minus = E.prototype.subtract, s.prototype.negate = function() {
      return new s(this.value, !this.sign);
    }, d.prototype.negate = function() {
      var w = this.sign, N = new d(-this.value);
      return N.sign = !w, N;
    }, E.prototype.negate = function() {
      return new E(-this.value);
    }, s.prototype.abs = function() {
      return new s(this.value, !1);
    }, d.prototype.abs = function() {
      return new d(Math.abs(this.value));
    }, E.prototype.abs = function() {
      return new E(this.value >= 0 ? this.value : -this.value);
    };
    function x(w, N) {
      var C = w.length, D = N.length, m = C + D, u = O(m), p = i, v, A, $, F, V;
      for ($ = 0; $ < C; ++$) {
        F = w[$];
        for (var Q = 0; Q < D; ++Q)
          V = N[Q], v = F * V + u[$ + Q], A = Math.floor(v / p), u[$ + Q] = v - A * p, u[$ + Q + 1] += A;
      }
      return T(u), u;
    }
    function ge(w, N) {
      var C = w.length, D = new Array(C), m = i, u = 0, p, v;
      for (v = 0; v < C; v++)
        p = w[v] * N + u, u = Math.floor(p / m), D[v] = p - u * m;
      for (; u > 0; )
        D[v++] = u % m, u = Math.floor(u / m);
      return D;
    }
    function z(w, N) {
      for (var C = []; N-- > 0; ) C.push(0);
      return C.concat(w);
    }
    function Z(w, N) {
      var C = Math.max(w.length, N.length);
      if (C <= 30) return x(w, N);
      C = Math.ceil(C / 2);
      var D = w.slice(C), m = w.slice(0, C), u = N.slice(C), p = N.slice(0, C), v = Z(m, p), A = Z(D, u), $ = Z(R(m, D), R(p, u)), F = R(R(v, z(Y(Y($, v), A), C)), z(A, 2 * C));
      return T(F), F;
    }
    function j(w, N) {
      return -0.012 * w - 0.012 * N + 15e-6 * w * N > 0;
    }
    s.prototype.multiply = function(w) {
      var N = te(w), C = this.value, D = N.value, m = this.sign !== N.sign, u;
      if (N.isSmall) {
        if (D === 0) return h[0];
        if (D === 1) return this;
        if (D === -1) return this.negate();
        if (u = Math.abs(D), u < i)
          return new s(ge(C, u), m);
        D = b(u);
      }
      return j(C.length, D.length) ? new s(Z(C, D), m) : new s(x(C, D), m);
    }, s.prototype.times = s.prototype.multiply;
    function se(w, N, C) {
      return w < i ? new s(ge(N, w), C) : new s(x(N, b(w)), C);
    }
    d.prototype._multiplyBySmall = function(w) {
      return y(w.value * this.value) ? new d(w.value * this.value) : se(Math.abs(w.value), b(Math.abs(this.value)), this.sign !== w.sign);
    }, s.prototype._multiplyBySmall = function(w) {
      return w.value === 0 ? h[0] : w.value === 1 ? this : w.value === -1 ? this.negate() : se(Math.abs(w.value), this.value, this.sign !== w.sign);
    }, d.prototype.multiply = function(w) {
      return te(w)._multiplyBySmall(this);
    }, d.prototype.times = d.prototype.multiply, E.prototype.multiply = function(w) {
      return new E(this.value * te(w).value);
    }, E.prototype.times = E.prototype.multiply;
    function de(w) {
      var N = w.length, C = O(N + N), D = i, m, u, p, v, A;
      for (p = 0; p < N; p++) {
        v = w[p], u = 0 - v * v;
        for (var $ = p; $ < N; $++)
          A = w[$], m = 2 * (v * A) + C[p + $] + u, u = Math.floor(m / D), C[p + $] = m - u * D;
        C[p + N] = u;
      }
      return T(C), C;
    }
    s.prototype.square = function() {
      return new s(de(this.value), !1);
    }, d.prototype.square = function() {
      var w = this.value * this.value;
      return y(w) ? new d(w) : new s(de(b(Math.abs(this.value))), !1);
    }, E.prototype.square = function(w) {
      return new E(this.value * this.value);
    };
    function Ie(w, N) {
      var C = w.length, D = N.length, m = i, u = O(N.length), p = N[D - 1], v = Math.ceil(m / (2 * p)), A = ge(w, v), $ = ge(N, v), F, V, Q, he, ce, me, tr;
      for (A.length <= C && A.push(0), $.push(0), p = $[D - 1], V = C - D; V >= 0; V--) {
        for (F = m - 1, A[V + D] !== p && (F = Math.floor((A[V + D] * m + A[V + D - 1]) / p)), Q = 0, he = 0, me = $.length, ce = 0; ce < me; ce++)
          Q += F * $[ce], tr = Math.floor(Q / m), he += A[V + ce] - (Q - tr * m), Q = tr, he < 0 ? (A[V + ce] = he + m, he = -1) : (A[V + ce] = he, he = 0);
        for (; he !== 0; ) {
          for (F -= 1, Q = 0, ce = 0; ce < me; ce++)
            Q += A[V + ce] - m + $[ce], Q < 0 ? (A[V + ce] = Q + m, Q = 0) : (A[V + ce] = Q, Q = 1);
          he += Q;
        }
        u[V] = F;
      }
      return A = be(A, v)[0], [g(u), g(A)];
    }
    function K(w, N) {
      for (var C = w.length, D = N.length, m = [], u = [], p = i, v, A, $, F, V; C; ) {
        if (u.unshift(w[--C]), T(u), Me(u, N) < 0) {
          m.push(0);
          continue;
        }
        A = u.length, $ = u[A - 1] * p + u[A - 2], F = N[D - 1] * p + N[D - 2], A > D && ($ = ($ + 1) * p), v = Math.ceil($ / F);
        do {
          if (V = ge(N, v), Me(V, u) <= 0) break;
          v--;
        } while (v);
        m.push(v), u = Y(u, V);
      }
      return m.reverse(), [g(m), g(u)];
    }
    function be(w, N) {
      var C = w.length, D = O(C), m = i, u, p, v, A;
      for (v = 0, u = C - 1; u >= 0; --u)
        A = v * m + w[u], p = S(A / N), v = A - p * N, D[u] = p | 0;
      return [D, v | 0];
    }
    function Fe(w, N) {
      var C, D = te(N);
      if (c)
        return [new E(w.value / D.value), new E(w.value % D.value)];
      var m = w.value, u = D.value, p;
      if (u === 0) throw new Error("Cannot divide by zero");
      if (w.isSmall)
        return D.isSmall ? [new d(S(m / u)), new d(m % u)] : [h[0], w];
      if (D.isSmall) {
        if (u === 1) return [w, h[0]];
        if (u == -1) return [w.negate(), h[0]];
        var v = Math.abs(u);
        if (v < i) {
          C = be(m, v), p = g(C[0]);
          var A = C[1];
          return w.sign && (A = -A), typeof p == "number" ? (w.sign !== D.sign && (p = -p), [new d(p), new d(A)]) : [new s(p, w.sign !== D.sign), new d(A)];
        }
        u = b(v);
      }
      var $ = Me(m, u);
      if ($ === -1) return [h[0], w];
      if ($ === 0) return [h[w.sign === D.sign ? 1 : -1], h[0]];
      m.length + u.length <= 200 ? C = Ie(m, u) : C = K(m, u), p = C[0];
      var F = w.sign !== D.sign, V = C[1], Q = w.sign;
      return typeof p == "number" ? (F && (p = -p), p = new d(p)) : p = new s(p, F), typeof V == "number" ? (Q && (V = -V), V = new d(V)) : V = new s(V, Q), [p, V];
    }
    s.prototype.divmod = function(w) {
      var N = Fe(this, w);
      return {
        quotient: N[0],
        remainder: N[1]
      };
    }, E.prototype.divmod = d.prototype.divmod = s.prototype.divmod, s.prototype.divide = function(w) {
      return Fe(this, w)[0];
    }, E.prototype.over = E.prototype.divide = function(w) {
      return new E(this.value / te(w).value);
    }, d.prototype.over = d.prototype.divide = s.prototype.over = s.prototype.divide, s.prototype.mod = function(w) {
      return Fe(this, w)[1];
    }, E.prototype.mod = E.prototype.remainder = function(w) {
      return new E(this.value % te(w).value);
    }, d.prototype.remainder = d.prototype.mod = s.prototype.remainder = s.prototype.mod, s.prototype.pow = function(w) {
      var N = te(w), C = this.value, D = N.value, m, u, p;
      if (D === 0) return h[1];
      if (C === 0) return h[0];
      if (C === 1) return h[1];
      if (C === -1) return N.isEven() ? h[1] : h[-1];
      if (N.sign)
        return h[0];
      if (!N.isSmall) throw new Error("The exponent " + N.toString() + " is too large.");
      if (this.isSmall && y(m = Math.pow(C, D)))
        return new d(S(m));
      for (u = this, p = h[1]; D & !0 && (p = p.times(u), --D), D !== 0; )
        D /= 2, u = u.square();
      return p;
    }, d.prototype.pow = s.prototype.pow, E.prototype.pow = function(w) {
      var N = te(w), C = this.value, D = N.value, m = BigInt(0), u = BigInt(1), p = BigInt(2);
      if (D === m) return h[1];
      if (C === m) return h[0];
      if (C === u) return h[1];
      if (C === BigInt(-1)) return N.isEven() ? h[1] : h[-1];
      if (N.isNegative()) return new E(m);
      for (var v = this, A = h[1]; (D & u) === u && (A = A.times(v), --D), D !== m; )
        D /= p, v = v.square();
      return A;
    }, s.prototype.modPow = function(w, N) {
      if (w = te(w), N = te(N), N.isZero()) throw new Error("Cannot take modPow with modulus 0");
      var C = h[1], D = this.mod(N);
      for (w.isNegative() && (w = w.multiply(h[-1]), D = D.modInv(N)); w.isPositive(); ) {
        if (D.isZero()) return h[0];
        w.isOdd() && (C = C.multiply(D).mod(N)), w = w.divide(2), D = D.square().mod(N);
      }
      return C;
    }, E.prototype.modPow = d.prototype.modPow = s.prototype.modPow;
    function Me(w, N) {
      if (w.length !== N.length)
        return w.length > N.length ? 1 : -1;
      for (var C = w.length - 1; C >= 0; C--)
        if (w[C] !== N[C]) return w[C] > N[C] ? 1 : -1;
      return 0;
    }
    s.prototype.compareAbs = function(w) {
      var N = te(w), C = this.value, D = N.value;
      return N.isSmall ? 1 : Me(C, D);
    }, d.prototype.compareAbs = function(w) {
      var N = te(w), C = Math.abs(this.value), D = N.value;
      return N.isSmall ? (D = Math.abs(D), C === D ? 0 : C > D ? 1 : -1) : -1;
    }, E.prototype.compareAbs = function(w) {
      var N = this.value, C = te(w).value;
      return N = N >= 0 ? N : -N, C = C >= 0 ? C : -C, N === C ? 0 : N > C ? 1 : -1;
    }, s.prototype.compare = function(w) {
      if (w === 1 / 0)
        return -1;
      if (w === -1 / 0)
        return 1;
      var N = te(w), C = this.value, D = N.value;
      return this.sign !== N.sign ? N.sign ? 1 : -1 : N.isSmall ? this.sign ? -1 : 1 : Me(C, D) * (this.sign ? -1 : 1);
    }, s.prototype.compareTo = s.prototype.compare, d.prototype.compare = function(w) {
      if (w === 1 / 0)
        return -1;
      if (w === -1 / 0)
        return 1;
      var N = te(w), C = this.value, D = N.value;
      return N.isSmall ? C == D ? 0 : C > D ? 1 : -1 : C < 0 !== N.sign ? C < 0 ? -1 : 1 : C < 0 ? 1 : -1;
    }, d.prototype.compareTo = d.prototype.compare, E.prototype.compare = function(w) {
      if (w === 1 / 0)
        return -1;
      if (w === -1 / 0)
        return 1;
      var N = this.value, C = te(w).value;
      return N === C ? 0 : N > C ? 1 : -1;
    }, E.prototype.compareTo = E.prototype.compare, s.prototype.equals = function(w) {
      return this.compare(w) === 0;
    }, E.prototype.eq = E.prototype.equals = d.prototype.eq = d.prototype.equals = s.prototype.eq = s.prototype.equals, s.prototype.notEquals = function(w) {
      return this.compare(w) !== 0;
    }, E.prototype.neq = E.prototype.notEquals = d.prototype.neq = d.prototype.notEquals = s.prototype.neq = s.prototype.notEquals, s.prototype.greater = function(w) {
      return this.compare(w) > 0;
    }, E.prototype.gt = E.prototype.greater = d.prototype.gt = d.prototype.greater = s.prototype.gt = s.prototype.greater, s.prototype.lesser = function(w) {
      return this.compare(w) < 0;
    }, E.prototype.lt = E.prototype.lesser = d.prototype.lt = d.prototype.lesser = s.prototype.lt = s.prototype.lesser, s.prototype.greaterOrEquals = function(w) {
      return this.compare(w) >= 0;
    }, E.prototype.geq = E.prototype.greaterOrEquals = d.prototype.geq = d.prototype.greaterOrEquals = s.prototype.geq = s.prototype.greaterOrEquals, s.prototype.lesserOrEquals = function(w) {
      return this.compare(w) <= 0;
    }, E.prototype.leq = E.prototype.lesserOrEquals = d.prototype.leq = d.prototype.lesserOrEquals = s.prototype.leq = s.prototype.lesserOrEquals, s.prototype.isEven = function() {
      return (this.value[0] & 1) === 0;
    }, d.prototype.isEven = function() {
      return (this.value & 1) === 0;
    }, E.prototype.isEven = function() {
      return (this.value & BigInt(1)) === BigInt(0);
    }, s.prototype.isOdd = function() {
      return (this.value[0] & 1) === 1;
    }, d.prototype.isOdd = function() {
      return (this.value & 1) === 1;
    }, E.prototype.isOdd = function() {
      return (this.value & BigInt(1)) === BigInt(1);
    }, s.prototype.isPositive = function() {
      return !this.sign;
    }, d.prototype.isPositive = function() {
      return this.value > 0;
    }, E.prototype.isPositive = d.prototype.isPositive, s.prototype.isNegative = function() {
      return this.sign;
    }, d.prototype.isNegative = function() {
      return this.value < 0;
    }, E.prototype.isNegative = d.prototype.isNegative, s.prototype.isUnit = function() {
      return !1;
    }, d.prototype.isUnit = function() {
      return Math.abs(this.value) === 1;
    }, E.prototype.isUnit = function() {
      return this.abs().value === BigInt(1);
    }, s.prototype.isZero = function() {
      return !1;
    }, d.prototype.isZero = function() {
      return this.value === 0;
    }, E.prototype.isZero = function() {
      return this.value === BigInt(0);
    }, s.prototype.isDivisibleBy = function(w) {
      var N = te(w);
      return N.isZero() ? !1 : N.isUnit() ? !0 : N.compareAbs(2) === 0 ? this.isEven() : this.mod(N).isZero();
    }, E.prototype.isDivisibleBy = d.prototype.isDivisibleBy = s.prototype.isDivisibleBy;
    function fe(w) {
      var N = w.abs();
      if (N.isUnit()) return !1;
      if (N.equals(2) || N.equals(3) || N.equals(5)) return !0;
      if (N.isEven() || N.isDivisibleBy(3) || N.isDivisibleBy(5)) return !1;
      if (N.lesser(49)) return !0;
    }
    function Ue(w, N) {
      for (var C = w.prev(), D = C, m = 0, u, p, v; D.isEven(); ) D = D.divide(2), m++;
      e: for (p = 0; p < N.length; p++)
        if (!w.lesser(N[p]) && (v = e(N[p]).modPow(D, w), !(v.isUnit() || v.equals(C)))) {
          for (u = m - 1; u != 0; u--) {
            if (v = v.square().mod(w), v.isUnit()) return !1;
            if (v.equals(C)) continue e;
          }
          return !1;
        }
      return !0;
    }
    s.prototype.isPrime = function(w) {
      var N = fe(this);
      if (N !== r) return N;
      var C = this.abs(), D = C.bitLength();
      if (D <= 64)
        return Ue(C, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
      for (var m = Math.log(2) * D.toJSNumber(), u = Math.ceil(w === !0 ? 2 * Math.pow(m, 2) : m), p = [], v = 0; v < u; v++)
        p.push(e(v + 2));
      return Ue(C, p);
    }, E.prototype.isPrime = d.prototype.isPrime = s.prototype.isPrime, s.prototype.isProbablePrime = function(w, N) {
      var C = fe(this);
      if (C !== r) return C;
      for (var D = this.abs(), m = w === r ? 5 : w, u = [], p = 0; p < m; p++)
        u.push(e.randBetween(2, D.minus(2), N));
      return Ue(D, u);
    }, E.prototype.isProbablePrime = d.prototype.isProbablePrime = s.prototype.isProbablePrime, s.prototype.modInv = function(w) {
      for (var N = e.zero, C = e.one, D = te(w), m = this.abs(), u, p, v; !m.isZero(); )
        u = D.divide(m), p = N, v = D, N = C, D = m, C = p.subtract(u.multiply(C)), m = v.subtract(u.multiply(m));
      if (!D.isUnit()) throw new Error(this.toString() + " and " + w.toString() + " are not co-prime");
      return N.compare(0) === -1 && (N = N.add(w)), this.isNegative() ? N.negate() : N;
    }, E.prototype.modInv = d.prototype.modInv = s.prototype.modInv, s.prototype.next = function() {
      var w = this.value;
      return this.sign ? oe(w, 1, this.sign) : new s(M(w, 1), this.sign);
    }, d.prototype.next = function() {
      var w = this.value;
      return w + 1 < a ? new d(w + 1) : new s(l, !1);
    }, E.prototype.next = function() {
      return new E(this.value + BigInt(1));
    }, s.prototype.prev = function() {
      var w = this.value;
      return this.sign ? new s(M(w, 1), !0) : oe(w, 1, this.sign);
    }, d.prototype.prev = function() {
      var w = this.value;
      return w - 1 > -a ? new d(w - 1) : new s(l, !0);
    }, E.prototype.prev = function() {
      return new E(this.value - BigInt(1));
    };
    for (var Ee = [1]; 2 * Ee[Ee.length - 1] <= i; ) Ee.push(2 * Ee[Ee.length - 1]);
    var we = Ee.length, ee = Ee[we - 1];
    function ht(w) {
      return Math.abs(w) <= i;
    }
    s.prototype.shiftLeft = function(w) {
      var N = te(w).toJSNumber();
      if (!ht(N))
        throw new Error(String(N) + " is too large for shifting.");
      if (N < 0) return this.shiftRight(-N);
      var C = this;
      if (C.isZero()) return C;
      for (; N >= we; )
        C = C.multiply(ee), N -= we - 1;
      return C.multiply(Ee[N]);
    }, E.prototype.shiftLeft = d.prototype.shiftLeft = s.prototype.shiftLeft, s.prototype.shiftRight = function(w) {
      var N, C = te(w).toJSNumber();
      if (!ht(C))
        throw new Error(String(C) + " is too large for shifting.");
      if (C < 0) return this.shiftLeft(-C);
      for (var D = this; C >= we; ) {
        if (D.isZero() || D.isNegative() && D.isUnit()) return D;
        N = Fe(D, ee), D = N[1].isNegative() ? N[0].prev() : N[0], C -= we - 1;
      }
      return N = Fe(D, Ee[C]), N[1].isNegative() ? N[0].prev() : N[0];
    }, E.prototype.shiftRight = d.prototype.shiftRight = s.prototype.shiftRight;
    function I(w, N, C) {
      N = te(N);
      for (var D = w.isNegative(), m = N.isNegative(), u = D ? w.not() : w, p = m ? N.not() : N, v = 0, A = 0, $ = null, F = null, V = []; !u.isZero() || !p.isZero(); )
        $ = Fe(u, ee), v = $[1].toJSNumber(), D && (v = ee - 1 - v), F = Fe(p, ee), A = F[1].toJSNumber(), m && (A = ee - 1 - A), u = $[0], p = F[0], V.push(C(v, A));
      for (var Q = C(D ? 1 : 0, m ? 1 : 0) !== 0 ? e(-1) : e(0), he = V.length - 1; he >= 0; he -= 1)
        Q = Q.multiply(ee).add(e(V[he]));
      return Q;
    }
    s.prototype.not = function() {
      return this.negate().prev();
    }, E.prototype.not = d.prototype.not = s.prototype.not, s.prototype.and = function(w) {
      return I(this, w, function(N, C) {
        return N & C;
      });
    }, E.prototype.and = d.prototype.and = s.prototype.and, s.prototype.or = function(w) {
      return I(this, w, function(N, C) {
        return N | C;
      });
    }, E.prototype.or = d.prototype.or = s.prototype.or, s.prototype.xor = function(w) {
      return I(this, w, function(N, C) {
        return N ^ C;
      });
    }, E.prototype.xor = d.prototype.xor = s.prototype.xor;
    var _ = 1 << 30, U = (i & -i) * (i & -i) | _;
    function k(w) {
      var N = w.value, C = typeof N == "number" ? N | _ : typeof N == "bigint" ? N | BigInt(_) : N[0] + N[1] * i | U;
      return C & -C;
    }
    function ue(w, N) {
      if (N.compareTo(w) <= 0) {
        var C = ue(w, N.square(N)), D = C.p, m = C.e, u = D.multiply(N);
        return u.compareTo(w) <= 0 ? { p: u, e: m * 2 + 1 } : { p: D, e: m * 2 };
      }
      return { p: e(1), e: 0 };
    }
    s.prototype.bitLength = function() {
      var w = this;
      return w.compareTo(e(0)) < 0 && (w = w.negate().subtract(e(1))), w.compareTo(e(0)) === 0 ? e(0) : e(ue(w, e(2)).e).add(e(1));
    }, E.prototype.bitLength = d.prototype.bitLength = s.prototype.bitLength;
    function Te(w, N) {
      return w = te(w), N = te(N), w.greater(N) ? w : N;
    }
    function ye(w, N) {
      return w = te(w), N = te(N), w.lesser(N) ? w : N;
    }
    function Ce(w, N) {
      if (w = te(w).abs(), N = te(N).abs(), w.equals(N)) return w;
      if (w.isZero()) return N;
      if (N.isZero()) return w;
      for (var C = h[1], D, m; w.isEven() && N.isEven(); )
        D = ye(k(w), k(N)), w = w.divide(D), N = N.divide(D), C = C.multiply(D);
      for (; w.isEven(); )
        w = w.divide(k(w));
      do {
        for (; N.isEven(); )
          N = N.divide(k(N));
        w.greater(N) && (m = N, N = w, w = m), N = N.subtract(w);
      } while (!N.isZero());
      return C.isUnit() ? w : w.multiply(C);
    }
    function Ae(w, N) {
      return w = te(w).abs(), N = te(N).abs(), w.divide(Ce(w, N)).multiply(N);
    }
    function Ye(w, N, C) {
      w = te(w), N = te(N);
      var D = C || Math.random, m = ye(w, N), u = Te(w, N), p = u.subtract(m).add(1);
      if (p.isSmall) return m.add(Math.floor(D() * p));
      for (var v = rt(p, i).value, A = [], $ = !0, F = 0; F < v.length; F++) {
        var V = $ ? v[F] + (F + 1 < v.length ? v[F + 1] / i : 0) : i, Q = S(D() * V);
        A.push(Q), Q < v[F] && ($ = !1);
      }
      return m.add(h.fromArray(A, i, !1));
    }
    var Ne = function(w, N, C, D) {
      C = C || f, w = String(w), D || (w = w.toLowerCase(), C = C.toLowerCase());
      var m = w.length, u, p = Math.abs(N), v = {};
      for (u = 0; u < C.length; u++)
        v[C[u]] = u;
      for (u = 0; u < m; u++) {
        var A = w[u];
        if (A !== "-" && A in v && v[A] >= p) {
          if (A === "1" && p === 1) continue;
          throw new Error(A + " is not a valid digit in base " + N + ".");
        }
      }
      N = te(N);
      var $ = [], F = w[0] === "-";
      for (u = F ? 1 : 0; u < w.length; u++) {
        var A = w[u];
        if (A in v) $.push(te(v[A]));
        else if (A === "<") {
          var V = u;
          do
            u++;
          while (w[u] !== ">" && u < w.length);
          $.push(te(w.slice(V + 1, u)));
        } else throw new Error(A + " is not a valid character");
      }
      return Be($, N, F);
    };
    function Be(w, N, C) {
      var D = h[0], m = h[1], u;
      for (u = w.length - 1; u >= 0; u--)
        D = D.add(w[u].times(m)), m = m.times(N);
      return C ? D.negate() : D;
    }
    function Wt(w, N) {
      return N = N || f, w < N.length ? N[w] : "<" + w + ">";
    }
    function rt(w, N) {
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
        var C = Array.apply(null, Array(w.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
        return C.unshift([1]), {
          value: [].concat.apply([], C),
          isNegative: !1
        };
      }
      var D = !1;
      if (w.isNegative() && N.isPositive() && (D = !0, w = w.abs()), N.isUnit())
        return w.isZero() ? { value: [0], isNegative: !1 } : {
          value: Array.apply(null, Array(w.toJSNumber())).map(Number.prototype.valueOf, 1),
          isNegative: D
        };
      for (var m = [], u = w, p; u.isNegative() || u.compareAbs(N) >= 0; ) {
        p = u.divmod(N), u = p.quotient;
        var v = p.remainder;
        v.isNegative() && (v = N.minus(v).abs(), u = u.next()), m.push(v.toJSNumber());
      }
      return m.push(u.toJSNumber()), { value: m.reverse(), isNegative: D };
    }
    function Bt(w, N, C) {
      var D = rt(w, N);
      return (D.isNegative ? "-" : "") + D.value.map(function(m) {
        return Wt(m, C);
      }).join("");
    }
    s.prototype.toArray = function(w) {
      return rt(this, w);
    }, d.prototype.toArray = function(w) {
      return rt(this, w);
    }, E.prototype.toArray = function(w) {
      return rt(this, w);
    }, s.prototype.toString = function(w, N) {
      if (w === r && (w = 10), w !== 10 || N) return Bt(this, w, N);
      for (var C = this.value, D = C.length, m = String(C[--D]), u = "0000000", p; --D >= 0; )
        p = String(C[D]), m += u.slice(p.length) + p;
      var v = this.sign ? "-" : "";
      return v + m;
    }, d.prototype.toString = function(w, N) {
      return w === r && (w = 10), w != 10 || N ? Bt(this, w, N) : String(this.value);
    }, E.prototype.toString = d.prototype.toString, E.prototype.toJSON = s.prototype.toJSON = d.prototype.toJSON = function() {
      return this.toString();
    }, s.prototype.valueOf = function() {
      return parseInt(this.toString(), 10);
    }, s.prototype.toJSNumber = s.prototype.valueOf, d.prototype.valueOf = function() {
      return this.value;
    }, d.prototype.toJSNumber = d.prototype.valueOf, E.prototype.valueOf = E.prototype.toJSNumber = function() {
      return parseInt(this.toString(), 10);
    };
    function Vt(w) {
      if (y(+w)) {
        var N = +w;
        if (N === S(N))
          return c ? new E(BigInt(N)) : new d(N);
        throw new Error("Invalid integer: " + w);
      }
      var C = w[0] === "-";
      C && (w = w.slice(1));
      var D = w.split(/e/i);
      if (D.length > 2) throw new Error("Invalid integer: " + D.join("e"));
      if (D.length === 2) {
        var m = D[1];
        if (m[0] === "+" && (m = m.slice(1)), m = +m, m !== S(m) || !y(m)) throw new Error("Invalid integer: " + m + " is not a valid exponent.");
        var u = D[0], p = u.indexOf(".");
        if (p >= 0 && (m -= u.length - p - 1, u = u.slice(0, p) + u.slice(p + 1)), m < 0) throw new Error("Cannot include negative exponent part for integers");
        u += new Array(m + 1).join("0"), w = u;
      }
      var v = /^([0-9][0-9]*)$/.test(w);
      if (!v) throw new Error("Invalid integer: " + w);
      if (c)
        return new E(BigInt(C ? "-" + w : w));
      for (var A = [], $ = w.length, F = o, V = $ - F; $ > 0; )
        A.push(+w.slice(V, $)), V -= F, V < 0 && (V = 0), $ -= F;
      return T(A), new s(A, C);
    }
    function Dn(w) {
      if (c)
        return new E(BigInt(w));
      if (y(w)) {
        if (w !== S(w)) throw new Error(w + " is not an integer.");
        return new d(w);
      }
      return Vt(w.toString());
    }
    function te(w) {
      return typeof w == "number" ? Dn(w) : typeof w == "string" ? Vt(w) : typeof w == "bigint" ? new E(w) : w;
    }
    for (var Le = 0; Le < 1e3; Le++)
      h[Le] = te(Le), Le > 0 && (h[-Le] = te(-Le));
    return h.one = h[1], h.zero = h[0], h.minusOne = h[-1], h.max = Te, h.min = ye, h.gcd = Ce, h.lcm = Ae, h.isInstance = function(w) {
      return w instanceof s || w instanceof d || w instanceof E;
    }, h.randBetween = Ye, h.fromArray = function(w, N, C) {
      return Be(w.map(te), te(N || 10), C);
    }, h;
  }();
  n.hasOwnProperty("exports") && (n.exports = e);
})(Pl);
var Rp = Pl.exports;
const Sp = /* @__PURE__ */ eo(Rp), Pt = 100 * 1e3 * 1e3, Cp = 32768, Lp = 9783072e5;
class xp {
  constructor(e) {
    console.info({ id: e });
  }
}
class Pp {
  constructor() {
    this.debug = !1;
  }
  parse64Content(e) {
    const r = window.atob(e), i = r.length, o = new Xa(i);
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
    const c = this.readUInt64BE(o, 16);
    this.debug && console.log("topObject: " + c);
    const h = this.readUInt64BE(o, 24);
    if (this.debug && console.log("offsetTableOffset: " + h), f > Cp)
      throw new Error("maxObjectCount exceeded");
    const s = [];
    for (let E = 0; E < f; E++) {
      const y = e.slice(h + E * a, h + (E + 1) * a);
      s[E] = this.readUInt(y, 0), this.debug;
    }
    const d = (E) => {
      const y = s[E], b = e[y], g = (b & 240) >> 4, T = b & 15, O = () => {
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
            throw new Error("Unhandled simple type 0x" + g.toString(16));
        }
      }, S = (z) => {
        let Z = "", j;
        for (j = 0; j < z.length && z[j] === 0; j++)
          ;
        for (; j < z.length; j++) {
          const se = "00" + z[j].toString(16);
          Z += se.substr(se.length - 2);
        }
        return Z;
      }, L = () => {
        const z = Math.pow(2, T);
        if (z > 4) {
          const Z = e.slice(y + 1, y + 1 + z), j = S(Z);
          return Sp(j, 16);
        }
        if (z < Pt)
          return this.readUInt(e.slice(y + 1, y + 1 + z));
        throw new Error(
          "Too little heap space available! Wanted to read " + z + " bytes, but only " + Pt + " are available."
        );
      }, R = () => {
        const z = T + 1;
        if (z < Pt)
          return new xp(this.readUInt(e.slice(y + 1, y + 1 + z)));
        throw new Error(
          "To little heap space available! Wanted to read " + z + " bytes, but only " + Pt + " are available."
        );
      }, M = () => {
        const z = Math.pow(2, T);
        if (z < Pt) {
          const Z = e.slice(y + 1, y + 1 + z);
          if (z === 4)
            return Z.readFloatBE(0);
          if (z === 8)
            return Z.readDoubleBE(0);
        } else
          throw new Error(
            "To little heap space available! Wanted to read " + z + " bytes, but only " + Pt + " are available."
          );
      }, Y = () => {
        T !== 3 && console.error("Unknown date type :" + T + ". Parsing anyway...");
        const z = e.slice(y + 1, y + 9);
        return new Date(Lp + 1e3 * z.readDoubleBE(0));
      }, X = () => {
        let z = 1, Z = T;
        if (T === 15) {
          const j = e[y + 1], se = (j & 240) / 16;
          se !== 1 && console.error("0x4: UNEXPECTED LENGTH-INT TYPE! " + se);
          const de = j & 15, Ie = Math.pow(2, de);
          z = 2 + Ie, Ie < 3 ? Z = this.readUInt(e.slice(y + 2, y + 2 + Ie)) : Z = this.readUInt(e.slice(y + 2, y + 2 + Ie));
        }
        if (Z < Pt)
          return e.slice(y + z, y + z + Z);
        throw new Error(
          "To little heap space available! Wanted to read " + Z + " bytes, but only " + Pt + " are available."
        );
      }, oe = (z) => {
        z = z || 0;
        let Z = "utf8", j = T, se = 1;
        if (T === 15) {
          const de = e[y + 1], Ie = (de & 240) / 16;
          Ie !== 1 && console.error("UNEXPECTED LENGTH-INT TYPE! " + Ie);
          const K = de & 15, be = Math.pow(2, K);
          se = 2 + be, be < 3 ? j = this.readUInt(e.slice(y + 2, y + 2 + be)) : j = this.readUInt(e.slice(y + 2, y + 2 + be));
        }
        if (j *= z + 1, j < Pt) {
          let de = e.toString("utf8", y + se, y + se + j);
          return z && (de = this.swapBytes(de), Z = "ucs2"), de.toString(Z);
        } else
          throw new Error(
            "To little heap space available! Wanted to read " + j + " bytes, but only " + Pt + " are available."
          );
      }, x = () => {
        let z = T, Z = 1;
        if (T === 15) {
          const se = e[y + 1], de = (se & 240) / 16;
          de !== 1 && console.error("0xa: UNEXPECTED LENGTH-INT TYPE! " + de);
          const Ie = se & 15, K = Math.pow(2, Ie);
          Z = 2 + K, K < 3 ? z = this.readUInt(e.slice(y + 2, y + 2 + K)) : z = this.readUInt(e.slice(y + 2, y + 2 + K));
        }
        if (z * l > Pt)
          throw new Error("To little heap space available!");
        const j = [];
        for (let se = 0; se < z; se++) {
          const de = this.readUInt(
            e.slice(y + Z + se * l, y + Z + (se + 1) * l)
          );
          j[se] = d(de);
        }
        return j;
      }, ge = () => {
        let z = T, Z = 1;
        if (T === 15) {
          const se = e[y + 1], de = (se & 240) / 16;
          de !== 1 && console.error("0xD: UNEXPECTED LENGTH-INT TYPE! " + de);
          const Ie = se & 15, K = Math.pow(2, Ie);
          Z = 2 + K, K < 3 ? z = this.readUInt(e.slice(y + 2, y + 2 + K)) : z = this.readUInt(e.slice(y + 2, y + 2 + K));
        }
        if (z * 2 * l > Pt)
          throw new Error("To little heap space available!");
        this.debug && console.log("Parsing dictionary #" + E);
        const j = {};
        for (let se = 0; se < z; se++) {
          const de = this.readUInt(
            e.slice(y + Z + se * l, y + Z + (se + 1) * l)
          ), Ie = this.readUInt(
            e.slice(
              y + Z + z * l + se * l,
              y + Z + z * l + (se + 1) * l
            )
          ), K = d(de), be = d(Ie);
          this.debug && console.log("  DICT #" + E + ": Mapped " + K + " to " + be), j[K] = be;
        }
        return j;
      };
      switch (g) {
        case 0:
          return O();
        case 1:
          return L();
        case 8:
          return R();
        case 2:
          return M();
        case 3:
          return Y();
        case 4:
          return X();
        case 5:
          return oe();
        case 6:
          return oe(!0);
        case 10:
          return x();
        case 13:
          return ge();
        default:
          throw new Error("Unhandled type 0x" + g.toString(16));
      }
    };
    return [d(c)];
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
const $p = new Pp(), zt = {
  skipConfirmation: "X-Skip-Confirm-Navigation=1",
  sameWindow: "X-Target=_self"
}, hn = {
  skipConfirmation: "X-Skip-Confirm-Navigation",
  sameWindow: "X-Target"
}, Rs = {
  url: "",
  sameWindow: !1,
  skipConfirmation: !1
};
class Ft {
  /**
   * Generates a URL file.
   */
  static generateURLFileContent(e, r, i = !1, o = !1) {
    let a = "";
    return e && e.indexOf("[InternetShortcut]") !== -1 && e.indexOf("URL=") !== -1 ? a = e.replace(new RegExp("URL=.*", "gm"), `URL=${We(r)}`) : a = `[InternetShortcut]\r
URL=${We(r)}`, !i && a.indexOf(zt.sameWindow) !== -1 ? a = a.replace(zt.sameWindow, "") : i && a.indexOf(zt.sameWindow) === -1 && (a = `${a}\r
${zt.sameWindow}`), !o && a.indexOf(zt.skipConfirmation) !== -1 ? a = a.replace(zt.skipConfirmation, "") : o && a.indexOf(zt.skipConfirmation) === -1 && (a = `${a}\r
${zt.skipConfirmation}`), a = a.replace(/\r\n\r\n/gm, `\r
`).trim(), `${a}\r
`;
  }
  /**
   * Parse a URL file.
   */
  static parseURLFile(e) {
    const r = { ...Rs };
    if (e) {
      const i = e.match("URL=.*");
      if (i && Array.isArray(i) && i.length > 0) {
        const o = i[0];
        r.url = We(o.replace("URL=", ""));
      }
      e.indexOf(zt.skipConfirmation) !== -1 && (r.skipConfirmation = !0), e.indexOf(zt.sameWindow) !== -1 && (r.sameWindow = !0);
    }
    return r;
  }
  /**
   * Generates a webloc file.
   */
  static generateWeblocFileContent(e, r, i = !1, o = !1) {
    let a = "", l = !1;
    if (e) {
      const f = new window.DOMParser(), c = Cs(e), h = f.parseFromString(c, "text/xml"), s = [...h.getElementsByTagName("dict"), ...h.getElementsByTagName("extra")];
      let d = !1, E = !1;
      if (s && s.length)
        for (const b of s) {
          const g = b.getElementsByTagName("key"), T = b.getElementsByTagName("string");
          jt(g) === "URL" && (Ni(T, We(r)), l = !0), jt(g) === hn.sameWindow && jt(T) === "_self" && (i ? Ni(T, "_self") : h.getElementsByTagName("plist")[0].removeChild(b), E = !0), jt(g) === hn.skipConfirmation && jt(T) === "1" && (o ? Ni(T, "1") : h.getElementsByTagName("plist")[0].removeChild(b), d = !0);
        }
      if (i && !E) {
        const b = Ss(h, hn.sameWindow, "_self");
        h.getElementsByTagName("plist")[0].appendChild(b);
      }
      if (o && !d) {
        const b = Ss(h, hn.skipConfirmation, "1");
        h.getElementsByTagName("plist")[0].appendChild(b);
      }
      a = `<?xml version="1.0" encoding="UTF-8"?>
			${new window.XMLSerializer().serializeToString(h)}`, a.indexOf("parsererror") > -1 && (console.error("Parse error", a), a = ""), a = Dp(a);
    }
    return (!a || !l) && (a = `<?xml version="1.0" encoding="UTF-8"?>
				<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
				<plist version="1.0">
					<dict>
						<key>URL</key>
						<string>${We(r)}</string>
					</dict>`, i && (a = `${a}
				<extra>
					<key>${hn.sameWindow}</key>
					<string>_self</string>
				</extra>`), o && (a = `${a}
				<extra>
					<key>${hn.skipConfirmation}</key>
					<string>1</string>
				</extra>`), a = `${a}
			</plist>`), a = kp(a), a = a.replace(/(\n|\b)\t+/g, "$1").trim(), a = a.replace(/^\s*$(?:\r\n?|\n)/gm, "").trim(), a;
  }
  /**
   * Parse a webloc file.
   */
  static parseWeblocFile(e) {
    const r = { ...Rs };
    if (e)
      if (e.substring(0, 6) === "bplist")
        try {
          const i = $p.parse64Content(window.btoa(e));
          i && i.length && i[0] && i[0].URL && (r.url = i[0].URL);
        } catch (i) {
          console.info(i);
        }
      else {
        const i = new window.DOMParser(), o = Cs(e), a = i.parseFromString(o, "text/xml"), l = [...a.getElementsByTagName("dict"), ...a.getElementsByTagName("extra")];
        if (l && l.length)
          for (const f of l) {
            const c = f.getElementsByTagName("key"), h = f.getElementsByTagName("string");
            jt(c) === "URL" && (r.url = We(jt(h))), jt(c) === hn.sameWindow && jt(h) === "_self" && (r.sameWindow = !0), jt(c) === hn.skipConfirmation && jt(h) === "1" && (r.skipConfirmation = !0);
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
const jt = (n) => n && n.length > 0 && n[0].childNodes && n[0].childNodes.length > 0 && n[0].childNodes[0] ? n[0].childNodes[0].nodeValue : "", Ni = (n, e) => {
  n && n.length > 0 && n[0].childNodes && n[0].childNodes.length > 0 && n[0].childNodes[0] && (n[0].childNodes[0].nodeValue = e);
}, Ss = (n, e, r) => {
  const i = n.createElement("extra"), o = n.createElement("key");
  o.appendChild(n.createTextNode(e)), i.appendChild(o);
  const a = n.createElement("string");
  return a.appendChild(n.createTextNode(r)), i.appendChild(a), i;
}, Dp = (n) => n.replace(/></g, `>
<`), kp = (n) => n.replace(/<extra>/g, "<!-- <extra>").replace(/<\/extra>/g, "</extra> -->"), Cs = (n) => n.replace(/<!-- <extra>/g, "<extra>").replace(/<\/extra> -->/g, "</extra>"), Ls = "application/internet-shortcut", Ii = () => '<span class="icon-link" style="display: block;"></span>';
class Cn {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    Zo({
      id: "editLink",
      displayName: () => t("files_linkeditor", "Edit link"),
      iconSvgInline: Ii,
      exec: async ({ nodes: r }) => {
        const [i] = r;
        i && await Cn.loadAndChangeViewMode({
          fileName: i.basename,
          dirName: i.dirname,
          nextViewMode: "edit",
          permissions: i.permissions
        });
      },
      enabled: ({ nodes: r }) => window.OC.currentUser && r.every((i) => i.permissions >= ut.WRITE && Ls.includes(i.mime))
    }), Zo({
      id: "viewLink",
      displayName: () => t("files_linkeditor", "View link"),
      title: () => "Hello",
      iconSvgInline: Ii,
      exec: async ({ nodes: r }) => {
        const [i] = r;
        i && (window.OC.currentUser ? await Cn.loadAndChangeViewMode({
          fileName: i.basename,
          dirName: i.dirname,
          nextViewMode: "view",
          permissions: i.permissions
        }) : await Cn.loadAndChangeViewMode({
          fileName: i.displayname ?? i.basename,
          dirName: i.dirname,
          nextViewMode: "view",
          // TODO:
          downloadUrl: i.source,
          publicUser: !0,
          permissions: i.permissions
        }));
      },
      enabled: ({ nodes: r }) => r.every((i) => i.permissions >= ut.READ && Ls.includes(i.mime)),
      default: tl.DEFAULT
    });
    const e = ({ id: r, displayName: i, templateName: o }) => {
      gf({
        id: r,
        displayName: i,
        enabled: (a) => a.permissions >= ut.CREATE,
        iconSvgInline: Ii(),
        category: nl.CreateNew,
        handler: (a, l) => {
          const f = a.path;
          He.update(() => "filename"), At.update(
            () => Rt.getFileConfig({
              name: o,
              templateName: o,
              dir: f,
              isNew: !0,
              existingContents: l,
              onCreate: async (c) => {
                He.update(() => "edit"), At.update(
                  () => Rt.getFileConfig({
                    name: c.name,
                    dir: c.dir,
                    isNew: !0,
                    onCreate: async (h) => {
                      await Cn.saveAndChangeViewMode(h);
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
    He.update(() => i), At.update(
      () => Rt.getFileConfig({
        name: e,
        dir: r || "",
        permissions: l,
        isPublicLink: o
      })
    );
    let f = {};
    if (o ? f = await Rt.loadPublic({ downloadUrl: a }) : f = await Rt.load({ fileName: e, dir: r }), f) {
      const c = Ft.getExtension(e);
      let h = {};
      c === "webloc" ? h = Ft.parseWeblocFile(f.filecontents) : h = Ft.parseURLFile(f.filecontents), At.update(
        (s) => Rt.getFileConfig({
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
    const l = Ft.getExtension(e);
    let f = "";
    l === "webloc" ? f = Ft.generateWeblocFileContent("", i, o, a) : f = Ft.generateURLFileContent("", i, o, a), await Rt.save({ fileContent: f, name: e, dir: r }), He.update(() => "none");
  }
}
function xs(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Link target URL") + ""
  ), i, o, a, l, f, c, h, s, d, E, y, b, g, T, O, S;
  return {
    c() {
      e = H("label"), i = _e(r), o = le(), a = H("br"), l = le(), f = H("input"), c = le(), h = H("input"), s = le(), d = H("label"), d.textContent = `${/*t*/
      n[2]("files_linkeditor", "Open in same window")}`, E = le(), y = H("input"), g = le(), T = H("label"), T.textContent = `${/*t*/
      n[2]("files_linkeditor", "Skip confirmation dialog before open (has to open in same window)")}`, B(f, "type", "text"), _r(f, "width", "100%"), B(f, "class", "input-wide"), f.autofocus = !0, B(f, "data-cy", "url-input"), B(
        f,
        "placeholder",
        /*t*/
        n[2]("files_linkeditor", "e.g. https://example.org")
      ), B(h, "type", "checkbox"), B(h, "id", "linkeditor_sameWindow"), B(h, "class", "checkbox"), B(d, "for", "linkeditor_sameWindow"), B(d, "class", "space-top"), B(y, "type", "checkbox"), y.disabled = b = !/*file*/
      n[0].sameWindow, B(y, "id", "linkeditor_skipConfirmation"), B(y, "class", "checkbox"), B(T, "for", "linkeditor_skipConfirmation");
    },
    m(L, R) {
      ie(L, e, R), W(e, i), W(e, o), W(e, a), W(e, l), W(e, f), wn(
        f,
        /*file*/
        n[0].url
      ), ie(L, c, R), ie(L, h, R), h.checked = /*file*/
      n[0].sameWindow, ie(L, s, R), ie(L, d, R), ie(L, E, R), ie(L, y, R), y.checked = /*file*/
      n[0].skipConfirmation, ie(L, g, R), ie(L, T, R), f.focus(), O || (S = [
        Oe(
          f,
          "input",
          /*input0_input_handler*/
          n[5]
        ),
        Oe(
          h,
          "change",
          /*input1_change_handler*/
          n[6]
        ),
        Oe(
          y,
          "change",
          /*input2_change_handler*/
          n[7]
        )
      ], O = !0);
    },
    p(L, R) {
      R & /*file*/
      1 && f.value !== /*file*/
      L[0].url && wn(
        f,
        /*file*/
        L[0].url
      ), R & /*file*/
      1 && (h.checked = /*file*/
      L[0].sameWindow), R & /*file*/
      1 && b !== (b = !/*file*/
      L[0].sameWindow) && (y.disabled = b), R & /*file*/
      1 && (y.checked = /*file*/
      L[0].skipConfirmation);
    },
    d(L) {
      L && (re(e), re(c), re(h), re(s), re(d), re(E), re(y), re(g), re(T)), O = !1, St(S);
    }
  };
}
function Ps(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Visit link") + ""
  ), i, o;
  return {
    c() {
      e = H("a"), i = _e(r), B(e, "href", o = We(
        /*file*/
        n[0].url
      )), B(e, "target", "_blank"), B(e, "class", "button");
    },
    m(a, l) {
      ie(a, e, l), W(e, i);
    },
    p(a, l) {
      l & /*file*/
      1 && o !== (o = We(
        /*file*/
        a[0].url
      )) && B(e, "href", o);
    },
    d(a) {
      a && re(e);
    }
  };
}
function $s(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Save") + ""
  ), i, o, a;
  return {
    c() {
      e = H("a"), i = _e(r), B(e, "href", window.location.href), B(e, "class", "primary button");
    },
    m(l, f) {
      ie(l, e, f), W(e, i), o || (a = Oe(e, "click", ft(
        /*save*/
        n[4]
      )), o = !0);
    },
    p: Qt,
    d(l) {
      l && re(e), o = !1, a();
    }
  };
}
function Fp(n) {
  let e, r, i, o = (
    /*file*/
    n[0].name + ""
  ), a, l, f, c, h, s, d, E = (
    /*t*/
    n[2]("files_linkeditor", "Cancel") + ""
  ), y, b, g, T, O = !/*loading*/
  n[1] && xs(n), S = !/*loading*/
  n[1] && Ps(n), L = !/*loading*/
  n[1] && $s(n);
  return {
    c() {
      e = H("form"), r = H("div"), i = H("h3"), a = _e(o), l = le(), O && O.c(), f = le(), c = H("div"), S && S.c(), h = le(), s = H("div"), d = H("a"), y = _e(E), b = le(), L && L.c(), B(r, "class", "edit"), B(c, "class", "oc-dialog-buttonrow onebutton urlvisit"), B(d, "href", window.location.href), B(d, "class", "cancel button"), B(s, "class", "oc-dialog-buttonrow twobuttons"), B(
        e,
        "action",
        /*OC*/
        n[3].generateUrl("/")
      ), B(e, "method", "post");
    },
    m(R, M) {
      ie(R, e, M), W(e, r), W(r, i), W(i, a), W(r, l), O && O.m(r, null), W(e, f), W(e, c), S && S.m(c, null), W(e, h), W(e, s), W(s, d), W(d, y), W(s, b), L && L.m(s, null), g || (T = [
        Oe(d, "click", ft(
          /*click_handler*/
          n[8]
        )),
        Oe(e, "submit", ft(
          /*save*/
          n[4]
        ))
      ], g = !0);
    },
    p(R, M) {
      M & /*file*/
      1 && o !== (o = /*file*/
      R[0].name + "") && Kn(a, o), /*loading*/
      R[1] ? O && (O.d(1), O = null) : O ? O.p(R, M) : (O = xs(R), O.c(), O.m(r, null)), /*loading*/
      R[1] ? S && (S.d(1), S = null) : S ? S.p(R, M) : (S = Ps(R), S.c(), S.m(c, null)), /*loading*/
      R[1] ? L && (L.d(1), L = null) : L ? L.p(R, M) : (L = $s(R), L.c(), L.m(s, null));
    },
    d(R) {
      R && re(e), O && O.d(), S && S.d(), L && L.d(), g = !1, St(T);
    }
  };
}
function Mp(n) {
  let e, r;
  return e = new Jn({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [Fp] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Ut(e.$$.fragment);
    },
    m(i, o) {
      Ct(e, i, o), r = !0;
    },
    p(i, [o]) {
      const a = {};
      o & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), o & /*$$scope, loading, file*/
      1027 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (ve(e.$$.fragment, i), r = !0);
    },
    o(i) {
      Se(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Lt(e, i);
    }
  };
}
function Up(n, e, r) {
  let i, o;
  const a = window.t, l = window.OC;
  let f;
  vn(() => {
    f = At.subscribe((y) => {
      r(0, i = y), i && (i.isLoaded || i.isNew) && r(1, o = !1);
    });
  }), bn(() => {
    f();
  });
  const c = () => {
    r(1, o = !0), i.isNew && i.onCreate ? i.onCreate({ ...i }) : Cn.saveAndChangeViewMode({ ...i });
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
  const E = () => {
    He.update(() => "none");
  };
  return r(0, i = Rt.getFileConfig()), r(1, o = !0), [
    i,
    o,
    a,
    l,
    c,
    h,
    s,
    d,
    E
  ];
}
class Bp extends ln {
  constructor(e) {
    super(), an(this, e, Up, Mp, en, {});
  }
}
const Hr = (n) => {
  if (!(n != null && n.name) || !(n != null && n.templateName))
    return n;
  const [, e] = n.templateName.split(".") ?? [], r = n.name.toLocaleLowerCase();
  return e && !r.endsWith(e.toLocaleLowerCase()) && (n.name += `.${e}`), n;
};
function Ds(n) {
  let e, r = (
    /*t*/
    n[3]("files_linkeditor", "File name") + ""
  ), i, o, a, l, f, c, h;
  return {
    c() {
      e = H("label"), i = _e(r), o = le(), a = H("br"), l = le(), f = H("input"), B(f, "type", "text"), _r(f, "width", "100%"), B(f, "class", "input-wide"), f.autofocus = !0, B(f, "data-cy", "name-input");
    },
    m(s, d) {
      ie(s, e, d), W(e, i), W(e, o), W(e, a), W(e, l), W(e, f), wn(
        f,
        /*file*/
        n[0].name
      ), f.focus(), c || (h = [
        Oe(
          f,
          "input",
          /*input_input_handler*/
          n[7]
        ),
        Oe(
          f,
          "keyup",
          /*checkConflicts*/
          n[5]
        )
      ], c = !0);
    },
    p(s, d) {
      d & /*file*/
      1 && f.value !== /*file*/
      s[0].name && wn(
        f,
        /*file*/
        s[0].name
      );
    },
    d(s) {
      s && re(e), c = !1, St(h);
    }
  };
}
function ks(n) {
  let e, r = (
    /*t*/
    n[3]("files_linkeditor", "Create") + ""
  ), i, o, a;
  return {
    c() {
      e = H("button"), i = _e(r), B(e, "type", "submit"), e.disabled = /*isConflicting*/
      n[2], B(e, "class", "primary button");
    },
    m(l, f) {
      ie(l, e, f), W(e, i), o || (a = Oe(e, "click", ft(
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
      l && re(e), o = !1, a();
    }
  };
}
function jp(n) {
  let e, r, i, o, a, l, f, c = (
    /*t*/
    n[3]("files_linkeditor", "Cancel") + ""
  ), h, s, d, E, y = !/*loading*/
  n[1] && Ds(n), b = !/*loading*/
  n[1] && ks(n);
  return {
    c() {
      e = H("form"), r = H("div"), i = H("h3"), i.textContent = `${window.t("files_linkeditor", "New link")}`, o = le(), y && y.c(), a = le(), l = H("div"), f = H("a"), h = _e(c), s = le(), b && b.c(), B(r, "class", "edit"), B(f, "href", window.location.href), B(f, "class", "cancel button"), B(l, "class", "oc-dialog-buttonrow twobuttons"), B(
        e,
        "action",
        /*OC*/
        n[4].generateUrl("/")
      ), B(e, "method", "post");
    },
    m(g, T) {
      ie(g, e, T), W(e, r), W(r, i), W(r, o), y && y.m(r, null), W(e, a), W(e, l), W(l, f), W(f, h), W(l, s), b && b.m(l, null), d || (E = [
        Oe(f, "click", ft(
          /*click_handler*/
          n[8]
        )),
        Oe(e, "submit", ft(
          /*save*/
          n[6]
        ))
      ], d = !0);
    },
    p(g, T) {
      /*loading*/
      g[1] ? y && (y.d(1), y = null) : y ? y.p(g, T) : (y = Ds(g), y.c(), y.m(r, null)), /*loading*/
      g[1] ? b && (b.d(1), b = null) : b ? b.p(g, T) : (b = ks(g), b.c(), b.m(l, null));
    },
    d(g) {
      g && re(e), y && y.d(), b && b.d(), d = !1, St(E);
    }
  };
}
function Gp(n) {
  let e, r;
  return e = new Jn({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [jp] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Ut(e.$$.fragment);
    },
    m(i, o) {
      Ct(e, i, o), r = !0;
    },
    p(i, [o]) {
      const a = {};
      o & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), o & /*$$scope, isConflicting, loading, file*/
      2055 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (ve(e.$$.fragment, i), r = !0);
    },
    o(i) {
      Se(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Lt(e, i);
    }
  };
}
function Wp(n, e, r) {
  let i, o, a;
  const l = window.t, f = window.OC, c = (b, g) => {
    const T = {
      name: b,
      templateName: i.templateName
    }, O = Hr(T);
    return ((g == null ? void 0 : g.map((L) => L.basename)) ?? []).includes(O.name);
  };
  let h;
  vn(() => {
    h = At.subscribe((b) => {
      r(0, i = b), i && (i.isLoaded || i.isNew) && (r(1, o = !1), s());
    });
  }), bn(() => {
    h();
  });
  const s = () => {
    c(i.name, i.existingContents) ? r(2, a = !0) : r(2, a = !1);
  }, d = () => {
    c(i.name, i.existingContents) || (r(1, o = !0), i.onCreate(Hr({ ...i })));
  };
  function E() {
    i.name = this.value, r(0, i);
  }
  const y = () => {
    He.update(() => "none");
  };
  return r(0, i = Rt.getFileConfig()), r(1, o = !0), r(2, a = !0), [
    i,
    o,
    a,
    l,
    f,
    s,
    d,
    E,
    y
  ];
}
class Vp extends ln {
  constructor(e) {
    super(), an(this, e, Wp, Gp, en, {});
  }
}
function Fs(n) {
  let e, r;
  return e = new Vp({}), {
    c() {
      Ut(e.$$.fragment);
    },
    m(i, o) {
      Ct(e, i, o), r = !0;
    },
    i(i) {
      r || (ve(e.$$.fragment, i), r = !0);
    },
    o(i) {
      Se(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Lt(e, i);
    }
  };
}
function Ms(n) {
  let e, r;
  return e = new Op({}), {
    c() {
      Ut(e.$$.fragment);
    },
    m(i, o) {
      Ct(e, i, o), r = !0;
    },
    i(i) {
      r || (ve(e.$$.fragment, i), r = !0);
    },
    o(i) {
      Se(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Lt(e, i);
    }
  };
}
function Us(n) {
  let e, r;
  return e = new Bp({}), {
    c() {
      Ut(e.$$.fragment);
    },
    m(i, o) {
      Ct(e, i, o), r = !0;
    },
    i(i) {
      r || (ve(e.$$.fragment, i), r = !0);
    },
    o(i) {
      Se(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Lt(e, i);
    }
  };
}
function qp(n) {
  let e, r, i, o, a = (
    /*viewMode*/
    n[0] === "filename" && Fs()
  ), l = (
    /*viewMode*/
    n[0] === "view" && Ms()
  ), f = (
    /*viewMode*/
    n[0] === "edit" && Us()
  );
  return {
    c() {
      a && a.c(), e = le(), l && l.c(), r = le(), f && f.c(), i = va();
    },
    m(c, h) {
      a && a.m(c, h), ie(c, e, h), l && l.m(c, h), ie(c, r, h), f && f.m(c, h), ie(c, i, h), o = !0;
    },
    p(c, [h]) {
      /*viewMode*/
      c[0] === "filename" ? a ? h & /*viewMode*/
      1 && ve(a, 1) : (a = Fs(), a.c(), ve(a, 1), a.m(e.parentNode, e)) : a && (Hn(), Se(a, 1, 1, () => {
        a = null;
      }), Yn()), /*viewMode*/
      c[0] === "view" ? l ? h & /*viewMode*/
      1 && ve(l, 1) : (l = Ms(), l.c(), ve(l, 1), l.m(r.parentNode, r)) : l && (Hn(), Se(l, 1, 1, () => {
        l = null;
      }), Yn()), /*viewMode*/
      c[0] === "edit" ? f ? h & /*viewMode*/
      1 && ve(f, 1) : (f = Us(), f.c(), ve(f, 1), f.m(i.parentNode, i)) : f && (Hn(), Se(f, 1, 1, () => {
        f = null;
      }), Yn());
    },
    i(c) {
      o || (ve(a), ve(l), ve(f), o = !0);
    },
    o(c) {
      Se(a), Se(l), Se(f), o = !1;
    },
    d(c) {
      c && (re(e), re(r), re(i)), a && a.d(c), l && l.d(c), f && f.d(c);
    }
  };
}
function zp(n, e, r) {
  let i, o;
  return vn(() => {
    o = He.subscribe((a) => {
      r(0, i = a);
    });
  }), bn(() => {
    o();
  }), r(0, i = ""), [i];
}
class Xp extends ln {
  constructor(e) {
    super(), an(this, e, zp, qp, en, {});
  }
}
function _n(n, e, r) {
  return e in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = r, n;
}
function Bs(n, e, r) {
  Hp(n, e), e.set(n, r);
}
function Hp(n, e) {
  if (e.has(n))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function ot(n, e) {
  var r = $l(n, e, "get");
  return Yp(n, r);
}
function Yp(n, e) {
  return e.get ? e.get.call(n) : e.value;
}
function js(n, e, r) {
  var i = $l(n, e, "set");
  return Zp(n, i, r), r;
}
function $l(n, e, r) {
  if (!e.has(n))
    throw new TypeError("attempted to " + r + " private field on non-instance");
  return e.get(n);
}
function Zp(n, e, r) {
  if (e.set)
    e.set.call(n, r);
  else {
    if (!e.writable)
      throw new TypeError("attempted to set read only private field");
    e.value = r;
  }
}
var Kp = typeof Symbol < "u" ? Symbol.toStringTag : "@@toStringTag", at = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap();
class Jr {
  constructor(e) {
    var {
      executor: r = () => {
      },
      internals: i = mo(),
      promise: o = new Promise((a, l) => r(a, l, (f) => {
        i.onCancelList.push(f);
      }))
    } = e;
    Bs(this, at, {
      writable: !0,
      value: void 0
    }), Bs(this, pr, {
      writable: !0,
      value: void 0
    }), _n(this, Kp, "CancelablePromise"), this.cancel = this.cancel.bind(this), js(this, at, i), js(this, pr, o || new Promise((a, l) => r(a, l, (f) => {
      i.onCancelList.push(f);
    })));
  }
  then(e, r) {
    return Br(ot(this, pr).then(Pr(e, ot(this, at)), Pr(r, ot(this, at))), ot(this, at));
  }
  catch(e) {
    return Br(ot(this, pr).catch(Pr(e, ot(this, at))), ot(this, at));
  }
  finally(e, r) {
    return r && ot(this, at).onCancelList.push(e), Br(ot(this, pr).finally(Pr(() => {
      if (e)
        return r && (ot(this, at).onCancelList = ot(this, at).onCancelList.filter((i) => i !== e)), e();
    }, ot(this, at))), ot(this, at));
  }
  cancel() {
    ot(this, at).isCanceled = !0;
    var e = ot(this, at).onCancelList;
    ot(this, at).onCancelList = [];
    for (var r of e)
      if (typeof r == "function")
        try {
          r();
        } catch (i) {
          console.error(i);
        }
  }
  isCanceled() {
    return ot(this, at).isCanceled === !0;
  }
}
class Tn extends Jr {
  constructor(e) {
    super({
      executor: e
    });
  }
}
_n(Tn, "all", function(e) {
  return Qr(e, Promise.all(e));
});
_n(Tn, "allSettled", function(e) {
  return Qr(e, Promise.allSettled(e));
});
_n(Tn, "any", function(e) {
  return Qr(e, Promise.any(e));
});
_n(Tn, "race", function(e) {
  return Qr(e, Promise.race(e));
});
_n(Tn, "resolve", function(e) {
  return Dl(Promise.resolve(e));
});
_n(Tn, "reject", function(e) {
  return Dl(Promise.reject(e));
});
_n(Tn, "isCancelable", po);
function Dl(n) {
  return Br(n, mo());
}
function po(n) {
  return n instanceof Tn || n instanceof Jr;
}
function Pr(n, e) {
  if (n)
    return (r) => {
      if (!e.isCanceled) {
        var i = n(r);
        return po(i) && e.onCancelList.push(i.cancel), i;
      }
      return r;
    };
}
function Br(n, e) {
  return new Jr({
    internals: e,
    promise: n
  });
}
function Qr(n, e) {
  var r = mo();
  return r.onCancelList.push(() => {
    for (var i of n)
      po(i) && i.cancel();
  }), new Jr({
    internals: r,
    promise: e
  });
}
function mo() {
  return {
    isCanceled: !1,
    onCancelList: []
  };
}
const vr = Fa().setApp("@nextcloud/files").detectUser().build();
var go = /* @__PURE__ */ ((n) => (n.Folder = "folder", n.File = "file", n))(go || {}), wt = /* @__PURE__ */ ((n) => (n[n.NONE = 0] = "NONE", n[n.CREATE = 4] = "CREATE", n[n.READ = 1] = "READ", n[n.UPDATE = 2] = "UPDATE", n[n.DELETE = 8] = "DELETE", n[n.SHARE = 16] = "SHARE", n[n.ALL = 31] = "ALL", n))(wt || {});
const kl = function(n, e) {
  return n.match(e) !== null;
}, pn = (n, e) => {
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
  if ("permissions" in n && n.permissions !== void 0 && !(typeof n.permissions == "number" && n.permissions >= wt.NONE && n.permissions <= wt.ALL))
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
  if (n.root && kl(n.source, e)) {
    const r = n.source.match(e)[0];
    if (!n.source.includes(Ua(r, n.root)))
      throw new Error("The root must be relative to the service. e.g /files/emma");
  }
  if (n.status && !Object.values(Eo).includes(n.status))
    throw new Error("Status must be a valid NodeStatus");
};
var Eo = /* @__PURE__ */ ((n) => (n.NEW = "new", n.FAILED = "failed", n.LOADING = "loading", n.LOCKED = "locked", n))(Eo || {});
class ei {
  constructor(e, r) {
    ae(this, "_data");
    ae(this, "_attributes");
    ae(this, "_knownDavService", /(remote|public)\.php\/(web)?dav/i);
    ae(this, "readonlyAttributes", Object.entries(Object.getOwnPropertyDescriptors(ei.prototype)).filter((e) => typeof e[1].get == "function" && e[0] !== "__proto__").map((e) => e[0]));
    ae(this, "handler", {
      set: (e, r, i) => this.readonlyAttributes.includes(r) ? !1 : Reflect.set(e, r, i),
      deleteProperty: (e, r) => this.readonlyAttributes.includes(r) ? !1 : Reflect.deleteProperty(e, r),
      // TODO: This is deprecated and only needed for files v3
      get: (e, r, i) => this.readonlyAttributes.includes(r) ? (vr.warn(`Accessing "Node.attributes.${r}" is deprecated, access it directly on the Node instance.`), Reflect.get(this, r)) : Reflect.get(e, r, i)
    });
    var i;
    e.mime || (e.mime = "application/octet-stream"), pn(e, r || this._knownDavService), this._data = {
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
    return e + ji(this.source.slice(e.length));
  }
  /**
   * Get this object name
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get basename() {
    return no(this.source);
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
    pn({ ...this._data, displayname: e }, this._knownDavService), this._data.displayname = e;
  }
  /**
   * Get this object's extension
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get extension() {
    return Ma(this.source);
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
      return Wn(r.slice(i + o.length) || "/");
    }
    const e = new URL(this.source);
    return Wn(e.pathname);
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
    e ?? (e = "application/octet-stream"), pn({ ...this._data, mime: e }, this._knownDavService), this._data.mime = e;
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
    pn({ ...this._data, mtime: e }, this._knownDavService), this._data.mtime = e;
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
    pn({ ...this._data, size: e }, this._knownDavService), this.updateMtime(), this._data.size = e;
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
    return this.owner === null && !this.isDavResource ? wt.READ : this._data.permissions !== void 0 ? this._data.permissions : wt.NONE;
  }
  /**
   * Set the file permissions
   */
  set permissions(e) {
    pn({ ...this._data, permissions: e }, this._knownDavService), this.updateMtime(), this._data.permissions = e;
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
    return kl(this.source, this._knownDavService);
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
    return this._data.root ? this._data.root.replace(/^(.+)\/$/, "$1") : this.isDavResource && Wn(this.source).split(this._knownDavService).pop() || null;
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
    pn({ ...this._data, status: e }, this._knownDavService), this._data.status = e;
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
    pn({ ...this._data, source: e }, this._knownDavService);
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
    this.move(Wn(this.source) + "/" + e);
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
class wo extends ei {
  get type() {
    return go.File;
  }
  /**
   * Returns a clone of the file
   */
  clone() {
    return new wo(this.data);
  }
}
class yo extends ei {
  constructor(e) {
    super({
      ...e,
      mime: "httpd/unix-directory"
    });
  }
  get type() {
    return go.Folder;
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
    return new yo(this.data);
  }
}
const Jp = function(n = "") {
  let e = wt.NONE;
  return n && ((n.includes("C") || n.includes("K")) && (e |= wt.CREATE), n.includes("G") && (e |= wt.READ), (n.includes("W") || n.includes("N") || n.includes("V")) && (e |= wt.UPDATE), n.includes("D") && (e |= wt.DELETE), n.includes("R") && (e |= wt.SHARE)), e;
}, Qp = [
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
], ed = {
  d: "DAV:",
  nc: "http://nextcloud.org/ns",
  oc: "http://owncloud.org/ns",
  ocs: "http://open-collaboration-services.org/ns"
}, td = function() {
  return typeof window._nc_dav_properties > "u" && (window._nc_dav_properties = [...Qp]), window._nc_dav_properties.map((n) => `<${n} />`).join(" ");
}, nd = function() {
  return typeof window._nc_dav_namespaces > "u" && (window._nc_dav_namespaces = { ...ed }), Object.keys(window._nc_dav_namespaces).map((n) => {
    var e;
    return `xmlns:${n}="${(e = window._nc_dav_namespaces) == null ? void 0 : e[n]}"`;
  }).join(" ");
}, rd = function() {
  return `<?xml version="1.0"?>
		<d:propfind ${nd()}>
			<d:prop>
				${td()}
			</d:prop>
		</d:propfind>`;
};
function id() {
  var n;
  return Qn() ? `/files/${rl()}` : `/files/${(n = Tr()) == null ? void 0 : n.uid}`;
}
const Fl = id();
function od() {
  const n = Za("dav");
  return Qn() ? n.replace("remote.php", "public.php") : n;
}
const Ml = od(), sd = function(n = Ml, e = {}) {
  const r = Cl(n, { headers: e });
  function i(a) {
    r.setHeaders({
      ...e,
      // Add this so the server knows it is an request from the browser
      "X-Requested-With": "XMLHttpRequest",
      // Inject user auth
      requesttoken: a ?? ""
    });
  }
  return ka(i), i(Da()), oo().patch("fetch", (a, l) => {
    const f = l.headers;
    return f != null && f.method && (l.method = f.method, delete f.method), fetch(a, l);
  }), r;
}, ad = function(n, e = Fl, r = Ml) {
  var d, E;
  let i = (d = Tr()) == null ? void 0 : d.uid;
  if (Qn())
    i = i ?? "anonymous";
  else if (!i)
    throw new Error("No user id found");
  const o = n.props, a = Jp(o == null ? void 0 : o.permissions), l = String((o == null ? void 0 : o["owner-id"]) || i), f = o.fileid || 0, c = new Date(Date.parse(n.lastmod)), h = new Date(Date.parse(o.creationdate)), s = {
    id: f,
    source: `${r}${n.filename}`,
    mtime: !isNaN(c.getTime()) && c.getTime() !== 0 ? c : void 0,
    crtime: !isNaN(h.getTime()) && h.getTime() !== 0 ? h : void 0,
    mime: n.mime || "application/octet-stream",
    // Manually cast to work around for https://github.com/perry-mitchell/webdav-client/pull/380
    displayname: o.displayname !== void 0 ? String(o.displayname) : void 0,
    size: (o == null ? void 0 : o.size) || Number.parseInt(o.getcontentlength || "0"),
    // The fileid is set to -1 for failed requests
    status: f < 0 ? Eo.FAILED : void 0,
    permissions: a,
    owner: l,
    root: e,
    attributes: {
      ...n,
      ...o,
      hasPreview: o == null ? void 0 : o["has-preview"]
    }
  };
  return (E = s.attributes) == null || delete E.props, n.type === "file" ? new wo(s) : new yo(s);
};
var Ul = /* @__PURE__ */ ((n) => (n.DEFAULT = "default", n.HIDDEN = "hidden", n))(Ul || {});
const Gs = function(n) {
  if (typeof window._nc_fileactions > "u" && (window._nc_fileactions = [], vr.debug("FileActions initialized")), window._nc_fileactions.find((e) => e.id === n.id)) {
    vr.error(`FileAction ${n.id} already registered`, { action: n });
    return;
  }
  window._nc_fileactions.push(n);
};
var Ai, Ws;
function Bl() {
  return Ws || (Ws = 1, Ai = typeof gt == "object" && gt.env && gt.env.NODE_DEBUG && /\bsemver\b/i.test(gt.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
  }), Ai;
}
var Oi, Vs;
function jl() {
  if (Vs) return Oi;
  Vs = 1;
  const n = "2.0.0", e = 256, r = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, o = e - 6;
  return Oi = {
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
  }, Oi;
}
var $r = { exports: {} }, qs;
function ld() {
  return qs || (qs = 1, function(n, e) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: r,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: o
    } = jl(), a = Bl();
    e = n.exports = {};
    const l = e.re = [], f = e.safeRe = [], c = e.src = [], h = e.safeSrc = [], s = e.t = {};
    let d = 0;
    const E = "[a-zA-Z0-9-]", y = [
      ["\\s", 1],
      ["\\d", o],
      [E, i]
    ], b = (T) => {
      for (const [O, S] of y)
        T = T.split(`${O}*`).join(`${O}{0,${S}}`).split(`${O}+`).join(`${O}{1,${S}}`);
      return T;
    }, g = (T, O, S) => {
      const L = b(O), R = d++;
      a(T, R, O), s[T] = R, c[R] = O, h[R] = L, l[R] = new RegExp(O, S ? "g" : void 0), f[R] = new RegExp(L, S ? "g" : void 0);
    };
    g("NUMERICIDENTIFIER", "0|[1-9]\\d*"), g("NUMERICIDENTIFIERLOOSE", "\\d+"), g("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${E}*`), g("MAINVERSION", `(${c[s.NUMERICIDENTIFIER]})\\.(${c[s.NUMERICIDENTIFIER]})\\.(${c[s.NUMERICIDENTIFIER]})`), g("MAINVERSIONLOOSE", `(${c[s.NUMERICIDENTIFIERLOOSE]})\\.(${c[s.NUMERICIDENTIFIERLOOSE]})\\.(${c[s.NUMERICIDENTIFIERLOOSE]})`), g("PRERELEASEIDENTIFIER", `(?:${c[s.NONNUMERICIDENTIFIER]}|${c[s.NUMERICIDENTIFIER]})`), g("PRERELEASEIDENTIFIERLOOSE", `(?:${c[s.NONNUMERICIDENTIFIER]}|${c[s.NUMERICIDENTIFIERLOOSE]})`), g("PRERELEASE", `(?:-(${c[s.PRERELEASEIDENTIFIER]}(?:\\.${c[s.PRERELEASEIDENTIFIER]})*))`), g("PRERELEASELOOSE", `(?:-?(${c[s.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[s.PRERELEASEIDENTIFIERLOOSE]})*))`), g("BUILDIDENTIFIER", `${E}+`), g("BUILD", `(?:\\+(${c[s.BUILDIDENTIFIER]}(?:\\.${c[s.BUILDIDENTIFIER]})*))`), g("FULLPLAIN", `v?${c[s.MAINVERSION]}${c[s.PRERELEASE]}?${c[s.BUILD]}?`), g("FULL", `^${c[s.FULLPLAIN]}$`), g("LOOSEPLAIN", `[v=\\s]*${c[s.MAINVERSIONLOOSE]}${c[s.PRERELEASELOOSE]}?${c[s.BUILD]}?`), g("LOOSE", `^${c[s.LOOSEPLAIN]}$`), g("GTLT", "((?:<|>)?=?)"), g("XRANGEIDENTIFIERLOOSE", `${c[s.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), g("XRANGEIDENTIFIER", `${c[s.NUMERICIDENTIFIER]}|x|X|\\*`), g("XRANGEPLAIN", `[v=\\s]*(${c[s.XRANGEIDENTIFIER]})(?:\\.(${c[s.XRANGEIDENTIFIER]})(?:\\.(${c[s.XRANGEIDENTIFIER]})(?:${c[s.PRERELEASE]})?${c[s.BUILD]}?)?)?`), g("XRANGEPLAINLOOSE", `[v=\\s]*(${c[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[s.XRANGEIDENTIFIERLOOSE]})(?:${c[s.PRERELEASELOOSE]})?${c[s.BUILD]}?)?)?`), g("XRANGE", `^${c[s.GTLT]}\\s*${c[s.XRANGEPLAIN]}$`), g("XRANGELOOSE", `^${c[s.GTLT]}\\s*${c[s.XRANGEPLAINLOOSE]}$`), g("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), g("COERCE", `${c[s.COERCEPLAIN]}(?:$|[^\\d])`), g("COERCEFULL", c[s.COERCEPLAIN] + `(?:${c[s.PRERELEASE]})?(?:${c[s.BUILD]})?(?:$|[^\\d])`), g("COERCERTL", c[s.COERCE], !0), g("COERCERTLFULL", c[s.COERCEFULL], !0), g("LONETILDE", "(?:~>?)"), g("TILDETRIM", `(\\s*)${c[s.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", g("TILDE", `^${c[s.LONETILDE]}${c[s.XRANGEPLAIN]}$`), g("TILDELOOSE", `^${c[s.LONETILDE]}${c[s.XRANGEPLAINLOOSE]}$`), g("LONECARET", "(?:\\^)"), g("CARETTRIM", `(\\s*)${c[s.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", g("CARET", `^${c[s.LONECARET]}${c[s.XRANGEPLAIN]}$`), g("CARETLOOSE", `^${c[s.LONECARET]}${c[s.XRANGEPLAINLOOSE]}$`), g("COMPARATORLOOSE", `^${c[s.GTLT]}\\s*(${c[s.LOOSEPLAIN]})$|^$`), g("COMPARATOR", `^${c[s.GTLT]}\\s*(${c[s.FULLPLAIN]})$|^$`), g("COMPARATORTRIM", `(\\s*)${c[s.GTLT]}\\s*(${c[s.LOOSEPLAIN]}|${c[s.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", g("HYPHENRANGE", `^\\s*(${c[s.XRANGEPLAIN]})\\s+-\\s+(${c[s.XRANGEPLAIN]})\\s*$`), g("HYPHENRANGELOOSE", `^\\s*(${c[s.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[s.XRANGEPLAINLOOSE]})\\s*$`), g("STAR", "(<|>)?=?\\s*\\*"), g("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), g("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }($r, $r.exports)), $r.exports;
}
var Ri, zs;
function ud() {
  if (zs) return Ri;
  zs = 1;
  const n = Object.freeze({ loose: !0 }), e = Object.freeze({});
  return Ri = (i) => i ? typeof i != "object" ? n : i : e, Ri;
}
var Si, Xs;
function cd() {
  if (Xs) return Si;
  Xs = 1;
  const n = /^[0-9]+$/, e = (i, o) => {
    if (typeof i == "number" && typeof o == "number")
      return i === o ? 0 : i < o ? -1 : 1;
    const a = n.test(i), l = n.test(o);
    return a && l && (i = +i, o = +o), i === o ? 0 : a && !l ? -1 : l && !a ? 1 : i < o ? -1 : 1;
  };
  return Si = {
    compareIdentifiers: e,
    rcompareIdentifiers: (i, o) => e(o, i)
  }, Si;
}
var Ci, Hs;
function Gl() {
  if (Hs) return Ci;
  Hs = 1;
  const n = Bl(), { MAX_LENGTH: e, MAX_SAFE_INTEGER: r } = jl(), { safeRe: i, t: o } = ld(), a = ud(), { compareIdentifiers: l } = cd();
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
      d[4] ? this.prerelease = d[4].split(".").map((E) => {
        if (/^[0-9]+$/.test(E)) {
          const y = +E;
          if (y >= 0 && y < r)
            return y;
        }
        return E;
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
        const d = this.prerelease[s], E = h.prerelease[s];
        if (n("prerelease compare", s, d, E), d === void 0 && E === void 0)
          return 0;
        if (E === void 0)
          return 1;
        if (d === void 0)
          return -1;
        if (d === E)
          continue;
        return l(d, E);
      } while (++s);
    }
    compareBuild(h) {
      h instanceof f || (h = new f(h, this.options));
      let s = 0;
      do {
        const d = this.build[s], E = h.build[s];
        if (n("build compare", s, d, E), d === void 0 && E === void 0)
          return 0;
        if (E === void 0)
          return 1;
        if (d === void 0)
          return -1;
        if (d === E)
          continue;
        return l(d, E);
      } while (++s);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(h, s, d) {
      if (h.startsWith("pre")) {
        if (!s && d === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (s) {
          const E = `-${s}`.match(this.options.loose ? i[o.PRERELEASELOOSE] : i[o.PRERELEASE]);
          if (!E || E[1] !== s)
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
          const E = Number(d) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [E];
          else {
            let y = this.prerelease.length;
            for (; --y >= 0; )
              typeof this.prerelease[y] == "number" && (this.prerelease[y]++, y = -2);
            if (y === -1) {
              if (s === this.prerelease.join(".") && d === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(E);
            }
          }
          if (s) {
            let y = [s, E];
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
  return Ci = f, Ci;
}
var Li, Ys;
function fd() {
  if (Ys) return Li;
  Ys = 1;
  const n = Gl();
  return Li = (r, i) => new n(r, i).major, Li;
}
fd();
var xi, Zs;
function hd() {
  if (Zs) return xi;
  Zs = 1;
  const n = Gl();
  return xi = (r, i, o = !1) => {
    if (r instanceof n)
      return r;
    try {
      return new n(r, i);
    } catch (a) {
      if (!o)
        return null;
      throw a;
    }
  }, xi;
}
var Pi, Ks;
function pd() {
  if (Ks) return Pi;
  Ks = 1;
  const n = hd();
  return Pi = (r, i) => {
    const o = n(r, i);
    return o ? o.version : null;
  }, Pi;
}
pd();
var $i = {}, Js;
function dd() {
  return Js || (Js = 1, function(n) {
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
        var U = this;
        a(U), U.q = U.c = "", U.bufferCheckPosition = e.MAX_BUFFER_LENGTH, U.opt = _ || {}, U.opt.lowercase = U.opt.lowercase || U.opt.lowercasetags, U.looseCase = U.opt.lowercase ? "toLowerCase" : "toUpperCase", U.tags = [], U.closed = U.closedRoot = U.sawRoot = !1, U.tag = U.error = null, U.strict = !!I, U.noscript = !!(I || U.opt.noscript), U.state = x.BEGIN, U.strictEntities = U.opt.strictEntities, U.ENTITIES = U.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), U.attribList = [], U.opt.xmlns && (U.ns = Object.create(g)), U.opt.unquotedAttributeValues === void 0 && (U.opt.unquotedAttributeValues = !I), U.trackPosition = U.opt.position !== !1, U.trackPosition && (U.position = U.line = U.column = 0), z(U, "onready");
      }
      Object.create || (Object.create = function(I) {
        function _() {
        }
        _.prototype = I;
        var U = new _();
        return U;
      }), Object.keys || (Object.keys = function(I) {
        var _ = [];
        for (var U in I) I.hasOwnProperty(U) && _.push(U);
        return _;
      });
      function o(I) {
        for (var _ = Math.max(e.MAX_BUFFER_LENGTH, 10), U = 0, k = 0, ue = r.length; k < ue; k++) {
          var Te = I[r[k]].length;
          if (Te > _)
            switch (r[k]) {
              case "textNode":
                j(I);
                break;
              case "cdata":
                Z(I, "oncdata", I.cdata), I.cdata = "";
                break;
              case "script":
                Z(I, "onscript", I.script), I.script = "";
                break;
              default:
                de(I, "Max buffer length exceeded: " + r[k]);
            }
          U = Math.max(U, Te);
        }
        var ye = e.MAX_BUFFER_LENGTH - U;
        I.bufferCheckPosition = ye + I.position;
      }
      function a(I) {
        for (var _ = 0, U = r.length; _ < U; _++)
          I[r[_]] = "";
      }
      function l(I) {
        j(I), I.cdata !== "" && (Z(I, "oncdata", I.cdata), I.cdata = ""), I.script !== "" && (Z(I, "onscript", I.script), I.script = "");
      }
      i.prototype = {
        end: function() {
          Ie(this);
        },
        write: ht,
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
      var c = e.EVENTS.filter(function(I) {
        return I !== "error" && I !== "end";
      });
      function h(I, _) {
        return new s(I, _);
      }
      function s(I, _) {
        if (!(this instanceof s))
          return new s(I, _);
        f.apply(this), this._parser = new i(I, _), this.writable = !0, this.readable = !0;
        var U = this;
        this._parser.onend = function() {
          U.emit("end");
        }, this._parser.onerror = function(k) {
          U.emit("error", k), U._parser.error = null;
        }, this._decoder = null, c.forEach(function(k) {
          Object.defineProperty(U, "on" + k, {
            get: function() {
              return U._parser["on" + k];
            },
            set: function(ue) {
              if (!ue)
                return U.removeAllListeners(k), U._parser["on" + k] = ue, ue;
              U.on(k, ue);
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
        if (typeof Fr == "function" && typeof Fr.isBuffer == "function" && Fr.isBuffer(I)) {
          if (!this._decoder) {
            var _ = Ha.StringDecoder;
            this._decoder = new _("utf8");
          }
          I = this._decoder.write(I);
        }
        return this._parser.write(I.toString()), this.emit("data", I), !0;
      }, s.prototype.end = function(I) {
        return I && I.length && this.write(I), this._parser.end(), !0;
      }, s.prototype.on = function(I, _) {
        var U = this;
        return !U._parser["on" + I] && c.indexOf(I) !== -1 && (U._parser["on" + I] = function() {
          var k = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          k.splice(0, 0, I), U.emit.apply(U, k);
        }), f.prototype.on.call(U, I, _);
      };
      var d = "[CDATA[", E = "DOCTYPE", y = "http://www.w3.org/XML/1998/namespace", b = "http://www.w3.org/2000/xmlns/", g = { xml: y, xmlns: b }, T = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, O = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, S = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, L = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function R(I) {
        return I === " " || I === `
` || I === "\r" || I === "	";
      }
      function M(I) {
        return I === '"' || I === "'";
      }
      function Y(I) {
        return I === ">" || R(I);
      }
      function X(I, _) {
        return I.test(_);
      }
      function oe(I, _) {
        return !X(I, _);
      }
      var x = 0;
      e.STATE = {
        BEGIN: x++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: x++,
        // leading whitespace
        TEXT: x++,
        // general stuff
        TEXT_ENTITY: x++,
        // &amp and such.
        OPEN_WAKA: x++,
        // <
        SGML_DECL: x++,
        // <!BLARG
        SGML_DECL_QUOTED: x++,
        // <!BLARG foo "bar
        DOCTYPE: x++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: x++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: x++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: x++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: x++,
        // <!-
        COMMENT: x++,
        // <!--
        COMMENT_ENDING: x++,
        // <!-- blah -
        COMMENT_ENDED: x++,
        // <!-- blah --
        CDATA: x++,
        // <![CDATA[ something
        CDATA_ENDING: x++,
        // ]
        CDATA_ENDING_2: x++,
        // ]]
        PROC_INST: x++,
        // <?hi
        PROC_INST_BODY: x++,
        // <?hi there
        PROC_INST_ENDING: x++,
        // <?hi "there" ?
        OPEN_TAG: x++,
        // <strong
        OPEN_TAG_SLASH: x++,
        // <strong /
        ATTRIB: x++,
        // <a
        ATTRIB_NAME: x++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: x++,
        // <a foo _
        ATTRIB_VALUE: x++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: x++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: x++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: x++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: x++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: x++,
        // <foo bar=&quot
        CLOSE_TAG: x++,
        // </a
        CLOSE_TAG_SAW_WHITE: x++,
        // </a   >
        SCRIPT: x++,
        // <script> ...
        SCRIPT_ENDING: x++
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
        var _ = e.ENTITIES[I], U = typeof _ == "number" ? String.fromCharCode(_) : _;
        e.ENTITIES[I] = U;
      });
      for (var ge in e.STATE)
        e.STATE[e.STATE[ge]] = ge;
      x = e.STATE;
      function z(I, _, U) {
        I[_] && I[_](U);
      }
      function Z(I, _, U) {
        I.textNode && j(I), z(I, _, U);
      }
      function j(I) {
        I.textNode = se(I.opt, I.textNode), I.textNode && z(I, "ontext", I.textNode), I.textNode = "";
      }
      function se(I, _) {
        return I.trim && (_ = _.trim()), I.normalize && (_ = _.replace(/\s+/g, " ")), _;
      }
      function de(I, _) {
        return j(I), I.trackPosition && (_ += `
Line: ` + I.line + `
Column: ` + I.column + `
Char: ` + I.c), _ = new Error(_), I.error = _, z(I, "onerror", _), I;
      }
      function Ie(I) {
        return I.sawRoot && !I.closedRoot && K(I, "Unclosed root tag"), I.state !== x.BEGIN && I.state !== x.BEGIN_WHITESPACE && I.state !== x.TEXT && de(I, "Unexpected end"), j(I), I.c = "", I.closed = !0, z(I, "onend"), i.call(I, I.strict, I.opt), I;
      }
      function K(I, _) {
        if (typeof I != "object" || !(I instanceof i))
          throw new Error("bad call to strictFail");
        I.strict && de(I, _);
      }
      function be(I) {
        I.strict || (I.tagName = I.tagName[I.looseCase]());
        var _ = I.tags[I.tags.length - 1] || I, U = I.tag = { name: I.tagName, attributes: {} };
        I.opt.xmlns && (U.ns = _.ns), I.attribList.length = 0, Z(I, "onopentagstart", U);
      }
      function Fe(I, _) {
        var U = I.indexOf(":"), k = U < 0 ? ["", I] : I.split(":"), ue = k[0], Te = k[1];
        return _ && I === "xmlns" && (ue = "xmlns", Te = ""), { prefix: ue, local: Te };
      }
      function Me(I) {
        if (I.strict || (I.attribName = I.attribName[I.looseCase]()), I.attribList.indexOf(I.attribName) !== -1 || I.tag.attributes.hasOwnProperty(I.attribName)) {
          I.attribName = I.attribValue = "";
          return;
        }
        if (I.opt.xmlns) {
          var _ = Fe(I.attribName, !0), U = _.prefix, k = _.local;
          if (U === "xmlns")
            if (k === "xml" && I.attribValue !== y)
              K(
                I,
                "xml: prefix must be bound to " + y + `
Actual: ` + I.attribValue
              );
            else if (k === "xmlns" && I.attribValue !== b)
              K(
                I,
                "xmlns: prefix must be bound to " + b + `
Actual: ` + I.attribValue
              );
            else {
              var ue = I.tag, Te = I.tags[I.tags.length - 1] || I;
              ue.ns === Te.ns && (ue.ns = Object.create(Te.ns)), ue.ns[k] = I.attribValue;
            }
          I.attribList.push([I.attribName, I.attribValue]);
        } else
          I.tag.attributes[I.attribName] = I.attribValue, Z(I, "onattribute", {
            name: I.attribName,
            value: I.attribValue
          });
        I.attribName = I.attribValue = "";
      }
      function fe(I, _) {
        if (I.opt.xmlns) {
          var U = I.tag, k = Fe(I.tagName);
          U.prefix = k.prefix, U.local = k.local, U.uri = U.ns[k.prefix] || "", U.prefix && !U.uri && (K(I, "Unbound namespace prefix: " + JSON.stringify(I.tagName)), U.uri = k.prefix);
          var ue = I.tags[I.tags.length - 1] || I;
          U.ns && ue.ns !== U.ns && Object.keys(U.ns).forEach(function(Vt) {
            Z(I, "onopennamespace", {
              prefix: Vt,
              uri: U.ns[Vt]
            });
          });
          for (var Te = 0, ye = I.attribList.length; Te < ye; Te++) {
            var Ce = I.attribList[Te], Ae = Ce[0], Ye = Ce[1], Ne = Fe(Ae, !0), Be = Ne.prefix, Wt = Ne.local, rt = Be === "" ? "" : U.ns[Be] || "", Bt = {
              name: Ae,
              value: Ye,
              prefix: Be,
              local: Wt,
              uri: rt
            };
            Be && Be !== "xmlns" && !rt && (K(I, "Unbound namespace prefix: " + JSON.stringify(Be)), Bt.uri = Be), I.tag.attributes[Ae] = Bt, Z(I, "onattribute", Bt);
          }
          I.attribList.length = 0;
        }
        I.tag.isSelfClosing = !!_, I.sawRoot = !0, I.tags.push(I.tag), Z(I, "onopentag", I.tag), _ || (!I.noscript && I.tagName.toLowerCase() === "script" ? I.state = x.SCRIPT : I.state = x.TEXT, I.tag = null, I.tagName = ""), I.attribName = I.attribValue = "", I.attribList.length = 0;
      }
      function Ue(I) {
        if (!I.tagName) {
          K(I, "Weird empty close tag."), I.textNode += "</>", I.state = x.TEXT;
          return;
        }
        if (I.script) {
          if (I.tagName !== "script") {
            I.script += "</" + I.tagName + ">", I.tagName = "", I.state = x.SCRIPT;
            return;
          }
          Z(I, "onscript", I.script), I.script = "";
        }
        var _ = I.tags.length, U = I.tagName;
        I.strict || (U = U[I.looseCase]());
        for (var k = U; _--; ) {
          var ue = I.tags[_];
          if (ue.name !== k)
            K(I, "Unexpected close tag");
          else
            break;
        }
        if (_ < 0) {
          K(I, "Unmatched closing tag: " + I.tagName), I.textNode += "</" + I.tagName + ">", I.state = x.TEXT;
          return;
        }
        I.tagName = U;
        for (var Te = I.tags.length; Te-- > _; ) {
          var ye = I.tag = I.tags.pop();
          I.tagName = I.tag.name, Z(I, "onclosetag", I.tagName);
          var Ce = {};
          for (var Ae in ye.ns)
            Ce[Ae] = ye.ns[Ae];
          var Ye = I.tags[I.tags.length - 1] || I;
          I.opt.xmlns && ye.ns !== Ye.ns && Object.keys(ye.ns).forEach(function(Ne) {
            var Be = ye.ns[Ne];
            Z(I, "onclosenamespace", { prefix: Ne, uri: Be });
          });
        }
        _ === 0 && (I.closedRoot = !0), I.tagName = I.attribValue = I.attribName = "", I.attribList.length = 0, I.state = x.TEXT;
      }
      function Ee(I) {
        var _ = I.entity, U = _.toLowerCase(), k, ue = "";
        return I.ENTITIES[_] ? I.ENTITIES[_] : I.ENTITIES[U] ? I.ENTITIES[U] : (_ = U, _.charAt(0) === "#" && (_.charAt(1) === "x" ? (_ = _.slice(2), k = parseInt(_, 16), ue = k.toString(16)) : (_ = _.slice(1), k = parseInt(_, 10), ue = k.toString(10))), _ = _.replace(/^0+/, ""), isNaN(k) || ue.toLowerCase() !== _ ? (K(I, "Invalid character entity"), "&" + I.entity + ";") : String.fromCodePoint(k));
      }
      function we(I, _) {
        _ === "<" ? (I.state = x.OPEN_WAKA, I.startTagPosition = I.position) : R(_) || (K(I, "Non-whitespace before first tag."), I.textNode = _, I.state = x.TEXT);
      }
      function ee(I, _) {
        var U = "";
        return _ < I.length && (U = I.charAt(_)), U;
      }
      function ht(I) {
        var _ = this;
        if (this.error)
          throw this.error;
        if (_.closed)
          return de(
            _,
            "Cannot write after close. Assign an onready handler."
          );
        if (I === null)
          return Ie(_);
        typeof I == "object" && (I = I.toString());
        for (var U = 0, k = ""; k = ee(I, U++), _.c = k, !!k; )
          switch (_.trackPosition && (_.position++, k === `
` ? (_.line++, _.column = 0) : _.column++), _.state) {
            case x.BEGIN:
              if (_.state = x.BEGIN_WHITESPACE, k === "\uFEFF")
                continue;
              we(_, k);
              continue;
            case x.BEGIN_WHITESPACE:
              we(_, k);
              continue;
            case x.TEXT:
              if (_.sawRoot && !_.closedRoot) {
                for (var ue = U - 1; k && k !== "<" && k !== "&"; )
                  k = ee(I, U++), k && _.trackPosition && (_.position++, k === `
` ? (_.line++, _.column = 0) : _.column++);
                _.textNode += I.substring(ue, U - 1);
              }
              k === "<" && !(_.sawRoot && _.closedRoot && !_.strict) ? (_.state = x.OPEN_WAKA, _.startTagPosition = _.position) : (!R(k) && (!_.sawRoot || _.closedRoot) && K(_, "Text data outside of root node."), k === "&" ? _.state = x.TEXT_ENTITY : _.textNode += k);
              continue;
            case x.SCRIPT:
              k === "<" ? _.state = x.SCRIPT_ENDING : _.script += k;
              continue;
            case x.SCRIPT_ENDING:
              k === "/" ? _.state = x.CLOSE_TAG : (_.script += "<" + k, _.state = x.SCRIPT);
              continue;
            case x.OPEN_WAKA:
              if (k === "!")
                _.state = x.SGML_DECL, _.sgmlDecl = "";
              else if (!R(k)) if (X(T, k))
                _.state = x.OPEN_TAG, _.tagName = k;
              else if (k === "/")
                _.state = x.CLOSE_TAG, _.tagName = "";
              else if (k === "?")
                _.state = x.PROC_INST, _.procInstName = _.procInstBody = "";
              else {
                if (K(_, "Unencoded <"), _.startTagPosition + 1 < _.position) {
                  var Te = _.position - _.startTagPosition;
                  k = new Array(Te).join(" ") + k;
                }
                _.textNode += "<" + k, _.state = x.TEXT;
              }
              continue;
            case x.SGML_DECL:
              if (_.sgmlDecl + k === "--") {
                _.state = x.COMMENT, _.comment = "", _.sgmlDecl = "";
                continue;
              }
              _.doctype && _.doctype !== !0 && _.sgmlDecl ? (_.state = x.DOCTYPE_DTD, _.doctype += "<!" + _.sgmlDecl + k, _.sgmlDecl = "") : (_.sgmlDecl + k).toUpperCase() === d ? (Z(_, "onopencdata"), _.state = x.CDATA, _.sgmlDecl = "", _.cdata = "") : (_.sgmlDecl + k).toUpperCase() === E ? (_.state = x.DOCTYPE, (_.doctype || _.sawRoot) && K(
                _,
                "Inappropriately located doctype declaration"
              ), _.doctype = "", _.sgmlDecl = "") : k === ">" ? (Z(_, "onsgmldeclaration", _.sgmlDecl), _.sgmlDecl = "", _.state = x.TEXT) : (M(k) && (_.state = x.SGML_DECL_QUOTED), _.sgmlDecl += k);
              continue;
            case x.SGML_DECL_QUOTED:
              k === _.q && (_.state = x.SGML_DECL, _.q = ""), _.sgmlDecl += k;
              continue;
            case x.DOCTYPE:
              k === ">" ? (_.state = x.TEXT, Z(_, "ondoctype", _.doctype), _.doctype = !0) : (_.doctype += k, k === "[" ? _.state = x.DOCTYPE_DTD : M(k) && (_.state = x.DOCTYPE_QUOTED, _.q = k));
              continue;
            case x.DOCTYPE_QUOTED:
              _.doctype += k, k === _.q && (_.q = "", _.state = x.DOCTYPE);
              continue;
            case x.DOCTYPE_DTD:
              k === "]" ? (_.doctype += k, _.state = x.DOCTYPE) : k === "<" ? (_.state = x.OPEN_WAKA, _.startTagPosition = _.position) : M(k) ? (_.doctype += k, _.state = x.DOCTYPE_DTD_QUOTED, _.q = k) : _.doctype += k;
              continue;
            case x.DOCTYPE_DTD_QUOTED:
              _.doctype += k, k === _.q && (_.state = x.DOCTYPE_DTD, _.q = "");
              continue;
            case x.COMMENT:
              k === "-" ? _.state = x.COMMENT_ENDING : _.comment += k;
              continue;
            case x.COMMENT_ENDING:
              k === "-" ? (_.state = x.COMMENT_ENDED, _.comment = se(_.opt, _.comment), _.comment && Z(_, "oncomment", _.comment), _.comment = "") : (_.comment += "-" + k, _.state = x.COMMENT);
              continue;
            case x.COMMENT_ENDED:
              k !== ">" ? (K(_, "Malformed comment"), _.comment += "--" + k, _.state = x.COMMENT) : _.doctype && _.doctype !== !0 ? _.state = x.DOCTYPE_DTD : _.state = x.TEXT;
              continue;
            case x.CDATA:
              k === "]" ? _.state = x.CDATA_ENDING : _.cdata += k;
              continue;
            case x.CDATA_ENDING:
              k === "]" ? _.state = x.CDATA_ENDING_2 : (_.cdata += "]" + k, _.state = x.CDATA);
              continue;
            case x.CDATA_ENDING_2:
              k === ">" ? (_.cdata && Z(_, "oncdata", _.cdata), Z(_, "onclosecdata"), _.cdata = "", _.state = x.TEXT) : k === "]" ? _.cdata += "]" : (_.cdata += "]]" + k, _.state = x.CDATA);
              continue;
            case x.PROC_INST:
              k === "?" ? _.state = x.PROC_INST_ENDING : R(k) ? _.state = x.PROC_INST_BODY : _.procInstName += k;
              continue;
            case x.PROC_INST_BODY:
              if (!_.procInstBody && R(k))
                continue;
              k === "?" ? _.state = x.PROC_INST_ENDING : _.procInstBody += k;
              continue;
            case x.PROC_INST_ENDING:
              k === ">" ? (Z(_, "onprocessinginstruction", {
                name: _.procInstName,
                body: _.procInstBody
              }), _.procInstName = _.procInstBody = "", _.state = x.TEXT) : (_.procInstBody += "?" + k, _.state = x.PROC_INST_BODY);
              continue;
            case x.OPEN_TAG:
              X(O, k) ? _.tagName += k : (be(_), k === ">" ? fe(_) : k === "/" ? _.state = x.OPEN_TAG_SLASH : (R(k) || K(_, "Invalid character in tag name"), _.state = x.ATTRIB));
              continue;
            case x.OPEN_TAG_SLASH:
              k === ">" ? (fe(_, !0), Ue(_)) : (K(_, "Forward-slash in opening tag not followed by >"), _.state = x.ATTRIB);
              continue;
            case x.ATTRIB:
              if (R(k))
                continue;
              k === ">" ? fe(_) : k === "/" ? _.state = x.OPEN_TAG_SLASH : X(T, k) ? (_.attribName = k, _.attribValue = "", _.state = x.ATTRIB_NAME) : K(_, "Invalid attribute name");
              continue;
            case x.ATTRIB_NAME:
              k === "=" ? _.state = x.ATTRIB_VALUE : k === ">" ? (K(_, "Attribute without value"), _.attribValue = _.attribName, Me(_), fe(_)) : R(k) ? _.state = x.ATTRIB_NAME_SAW_WHITE : X(O, k) ? _.attribName += k : K(_, "Invalid attribute name");
              continue;
            case x.ATTRIB_NAME_SAW_WHITE:
              if (k === "=")
                _.state = x.ATTRIB_VALUE;
              else {
                if (R(k))
                  continue;
                K(_, "Attribute without value"), _.tag.attributes[_.attribName] = "", _.attribValue = "", Z(_, "onattribute", {
                  name: _.attribName,
                  value: ""
                }), _.attribName = "", k === ">" ? fe(_) : X(T, k) ? (_.attribName = k, _.state = x.ATTRIB_NAME) : (K(_, "Invalid attribute name"), _.state = x.ATTRIB);
              }
              continue;
            case x.ATTRIB_VALUE:
              if (R(k))
                continue;
              M(k) ? (_.q = k, _.state = x.ATTRIB_VALUE_QUOTED) : (_.opt.unquotedAttributeValues || de(_, "Unquoted attribute value"), _.state = x.ATTRIB_VALUE_UNQUOTED, _.attribValue = k);
              continue;
            case x.ATTRIB_VALUE_QUOTED:
              if (k !== _.q) {
                k === "&" ? _.state = x.ATTRIB_VALUE_ENTITY_Q : _.attribValue += k;
                continue;
              }
              Me(_), _.q = "", _.state = x.ATTRIB_VALUE_CLOSED;
              continue;
            case x.ATTRIB_VALUE_CLOSED:
              R(k) ? _.state = x.ATTRIB : k === ">" ? fe(_) : k === "/" ? _.state = x.OPEN_TAG_SLASH : X(T, k) ? (K(_, "No whitespace between attributes"), _.attribName = k, _.attribValue = "", _.state = x.ATTRIB_NAME) : K(_, "Invalid attribute name");
              continue;
            case x.ATTRIB_VALUE_UNQUOTED:
              if (!Y(k)) {
                k === "&" ? _.state = x.ATTRIB_VALUE_ENTITY_U : _.attribValue += k;
                continue;
              }
              Me(_), k === ">" ? fe(_) : _.state = x.ATTRIB;
              continue;
            case x.CLOSE_TAG:
              if (_.tagName)
                k === ">" ? Ue(_) : X(O, k) ? _.tagName += k : _.script ? (_.script += "</" + _.tagName, _.tagName = "", _.state = x.SCRIPT) : (R(k) || K(_, "Invalid tagname in closing tag"), _.state = x.CLOSE_TAG_SAW_WHITE);
              else {
                if (R(k))
                  continue;
                oe(T, k) ? _.script ? (_.script += "</" + k, _.state = x.SCRIPT) : K(_, "Invalid tagname in closing tag.") : _.tagName = k;
              }
              continue;
            case x.CLOSE_TAG_SAW_WHITE:
              if (R(k))
                continue;
              k === ">" ? Ue(_) : K(_, "Invalid characters in closing tag");
              continue;
            case x.TEXT_ENTITY:
            case x.ATTRIB_VALUE_ENTITY_Q:
            case x.ATTRIB_VALUE_ENTITY_U:
              var ye, Ce;
              switch (_.state) {
                case x.TEXT_ENTITY:
                  ye = x.TEXT, Ce = "textNode";
                  break;
                case x.ATTRIB_VALUE_ENTITY_Q:
                  ye = x.ATTRIB_VALUE_QUOTED, Ce = "attribValue";
                  break;
                case x.ATTRIB_VALUE_ENTITY_U:
                  ye = x.ATTRIB_VALUE_UNQUOTED, Ce = "attribValue";
                  break;
              }
              if (k === ";") {
                var Ae = Ee(_);
                _.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(Ae) ? (_.entity = "", _.state = ye, _.write(Ae)) : (_[Ce] += Ae, _.entity = "", _.state = ye);
              } else X(_.entity.length ? L : S, k) ? _.entity += k : (K(_, "Invalid character in entity name"), _[Ce] += "&" + _.entity + k, _.entity = "", _.state = ye);
              continue;
            default:
              throw new Error(_, "Unknown state: " + _.state);
          }
        return _.position >= _.bufferCheckPosition && o(_), _;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var I = String.fromCharCode, _ = Math.floor, U = function() {
          var k = 16384, ue = [], Te, ye, Ce = -1, Ae = arguments.length;
          if (!Ae)
            return "";
          for (var Ye = ""; ++Ce < Ae; ) {
            var Ne = Number(arguments[Ce]);
            if (!isFinite(Ne) || // `NaN`, `+Infinity`, or `-Infinity`
            Ne < 0 || // not a valid Unicode code point
            Ne > 1114111 || // not a valid Unicode code point
            _(Ne) !== Ne)
              throw RangeError("Invalid code point: " + Ne);
            Ne <= 65535 ? ue.push(Ne) : (Ne -= 65536, Te = (Ne >> 10) + 55296, ye = Ne % 1024 + 56320, ue.push(Te, ye)), (Ce + 1 === Ae || ue.length > k) && (Ye += I.apply(null, ue), ue.length = 0);
          }
          return Ye;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: U,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = U;
      }();
    })(n);
  }($i)), $i;
}
dd();
class md {
  constructor() {
    ae(this, "_entries", []);
  }
  registerEntry(e) {
    this.validateEntry(e), e.category = e.category ?? 1, this._entries.push(e);
  }
  unregisterEntry(e) {
    const r = typeof e == "string" ? this.getEntryIndex(e) : this.getEntryIndex(e.id);
    if (r === -1) {
      vr.warn("Entry not found, nothing removed", { entry: e, entries: this.getEntries() });
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
function gd() {
  return typeof window._nc_newfilemenu > "u" && (window._nc_newfilemenu = new md(), vr.debug("NewFileMenu initialized")), window._nc_newfilemenu;
}
function Ed(n) {
  return gd().registerEntry(n);
}
class kt {
  static getFileConfig({
    name: e,
    url: r,
    downloadUrl: i,
    dir: o,
    onCreate: a,
    fileModifiedTime: l,
    isNew: f,
    isLoaded: c,
    sameWindow: h,
    skipConfirmation: s,
    permissions: d,
    existingContents: E,
    templateName: y,
    isPublicLink: b
  } = {}) {
    return {
      name: e || "?",
      downloadUrl: i || "",
      url: r ? We(r) : "",
      dir: o || "",
      onCreate: a,
      fileModifiedTime: l || null,
      isNew: f || !1,
      isLoaded: c || !1,
      sameWindow: h || !1,
      skipConfirmation: s || !1,
      permissions: d || wt.NONE,
      existingContents: E,
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
    const a = sd(), l = `${Fl}${o}`;
    try {
      if (await a.putFileContents(l, e, { overwrite: !1 })) {
        const c = await a.stat(l, { details: !0, data: rd() });
        return Pa("files:node:created", ad(c.data)), !0;
      }
    } catch (f) {
      console.error(f);
    }
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
}
function Qs(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "You are about to visit:") + ""
  ), i, o, a, l, f = (
    /*file*/
    n[0].url + ""
  ), c, h, s;
  return {
    c() {
      e = H("p"), i = _e(r), o = le(), a = H("em"), l = H("a"), c = _e(f), B(l, "href", h = We(
        /*file*/
        n[0].url
      )), B(l, "target", s = /*file*/
      n[0].sameWindow ? "_self" : "_blank"), B(e, "class", "urldisplay");
    },
    m(d, E) {
      ie(d, e, E), W(e, i), W(e, o), W(e, a), W(a, l), W(l, c);
    },
    p(d, E) {
      E & /*file*/
      1 && f !== (f = /*file*/
      d[0].url + "") && Kn(c, f), E & /*file*/
      1 && h !== (h = We(
        /*file*/
        d[0].url
      )) && B(l, "href", h), E & /*file*/
      1 && s !== (s = /*file*/
      d[0].sameWindow ? "_self" : "_blank") && B(l, "target", s);
    },
    d(d) {
      d && re(e);
    }
  };
}
function ea(n) {
  let e = kt.userCanEdit(
    /*file*/
    n[0].permissions
  ) && !/*file*/
  n[0].isPublicLink, r, i, o = (
    /*t*/
    n[2]("files_linkeditor", "Visit link") + ""
  ), a, l, f, c = e && ta(n);
  return {
    c() {
      c && c.c(), r = le(), i = H("a"), a = _e(o), B(i, "href", l = We(
        /*file*/
        n[0].url
      )), B(i, "target", f = /*file*/
      n[0].sameWindow ? "_self" : "_blank"), B(i, "class", "button primary");
    },
    m(h, s) {
      c && c.m(h, s), ie(h, r, s), ie(h, i, s), W(i, a);
    },
    p(h, s) {
      s & /*file*/
      1 && (e = kt.userCanEdit(
        /*file*/
        h[0].permissions
      ) && !/*file*/
      h[0].isPublicLink), e ? c ? c.p(h, s) : (c = ta(h), c.c(), c.m(r.parentNode, r)) : c && (c.d(1), c = null), s & /*file*/
      1 && l !== (l = We(
        /*file*/
        h[0].url
      )) && B(i, "href", l), s & /*file*/
      1 && f !== (f = /*file*/
      h[0].sameWindow ? "_self" : "_blank") && B(i, "target", f);
    },
    d(h) {
      h && (re(r), re(i)), c && c.d(h);
    }
  };
}
function ta(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Edit link") + ""
  ), i, o, a;
  return {
    c() {
      e = H("a"), i = _e(r), B(e, "href", window.location.href), B(e, "class", "button");
    },
    m(l, f) {
      ie(l, e, f), W(e, i), o || (a = Oe(e, "click", ft(
        /*click_handler_1*/
        n[4]
      )), o = !0);
    },
    p: Qt,
    d(l) {
      l && re(e), o = !1, a();
    }
  };
}
function wd(n) {
  let e, r, i = (
    /*file*/
    n[0].name + ""
  ), o, a, l, f, c, h = (
    /*t*/
    n[2]("files_linkeditor", "Cancel") + ""
  ), s, d, E, y, b = !/*loading*/
  n[1] && Qs(n), g = !/*loading*/
  n[1] && ea(n);
  return {
    c() {
      e = H("div"), r = H("h3"), o = _e(i), a = le(), b && b.c(), l = le(), f = H("div"), c = H("a"), s = _e(h), d = le(), g && g.c(), B(e, "class", "edit push-bottom"), B(c, "href", window.location.href), B(c, "class", "button"), B(f, "class", "oc-dialog-buttonrow twobuttons");
    },
    m(T, O) {
      ie(T, e, O), W(e, r), W(r, o), W(e, a), b && b.m(e, null), ie(T, l, O), ie(T, f, O), W(f, c), W(c, s), W(f, d), g && g.m(f, null), E || (y = Oe(c, "click", ft(
        /*click_handler*/
        n[3]
      )), E = !0);
    },
    p(T, O) {
      O & /*file*/
      1 && i !== (i = /*file*/
      T[0].name + "") && Kn(o, i), /*loading*/
      T[1] ? b && (b.d(1), b = null) : b ? b.p(T, O) : (b = Qs(T), b.c(), b.m(e, null)), /*loading*/
      T[1] ? g && (g.d(1), g = null) : g ? g.p(T, O) : (g = ea(T), g.c(), g.m(f, null));
    },
    d(T) {
      T && (re(e), re(l), re(f)), b && b.d(), g && g.d(), E = !1, y();
    }
  };
}
function yd(n) {
  let e, r;
  return e = new Jn({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [wd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Ut(e.$$.fragment);
    },
    m(i, o) {
      Ct(e, i, o), r = !0;
    },
    p(i, [o]) {
      const a = {};
      o & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), o & /*$$scope, file, loading*/
      67 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (ve(e.$$.fragment, i), r = !0);
    },
    o(i) {
      Se(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Lt(e, i);
    }
  };
}
function vd(n, e, r) {
  let i, o;
  const a = window.t;
  let l;
  vn(() => {
    l = At.subscribe(async (h) => {
      if (r(0, i = h), i && i.isLoaded) {
        if (r(1, o = !1), !i.url) {
          OC.dialogs.alert(a("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."), a("files_linkeditor", "A slight problem"));
          return;
        }
        const s = i.isPublicLink && window.location.toString().includes("openfile=true");
        i.skipConfirmation && i.sameWindow && !s && (window.location.href = i.url, He.update(() => "none"));
      }
    });
  }), bn(() => {
    l();
  });
  const f = () => {
    He.update(() => "none");
  }, c = () => {
    He.update(() => "edit");
  };
  return r(0, i = kt.getFileConfig()), r(1, o = !0), [i, o, a, f, c];
}
class bd extends ln {
  constructor(e) {
    super(), an(this, e, vd, yd, en, {});
  }
}
const na = "application/internet-shortcut", ra = () => '<span class="icon-link" style="display: block;"></span>';
window.OC.dialogs.alert = function(n, e) {
  window.OC.dialogs.message(
    t("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."),
    t("files_linkeditor", "A slight problem"),
    "alert",
    71
    // Dialogs.OK_BUTTONS
  );
};
class Ln {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    Gs({
      id: "editLink",
      displayName: () => t("files_linkeditor", "Edit link"),
      iconSvgInline: ra,
      exec: async (r) => {
        await Ln.loadAndChangeViewMode({
          fileName: r.basename,
          dirName: r.dirname,
          nextViewMode: "edit",
          permissions: r.permissions
        });
      },
      enabled: (r) => window.OC.currentUser && r.every((i) => i.permissions >= wt.UPDATE && na.includes(i.mime))
    }), Gs({
      id: "viewLink",
      displayName: () => t("files_linkeditor", "View link"),
      iconSvgInline: ra,
      exec: async (r) => {
        window.OC.currentUser ? await Ln.loadAndChangeViewMode({
          fileName: r.basename,
          dirName: r.dirname,
          nextViewMode: "view",
          permissions: r.permissions
        }) : await Ln.loadAndChangeViewMode({
          fileName: r.displayname ?? r.basename,
          dirName: r.dirname,
          nextViewMode: "view",
          // TODO:
          downloadUrl: r.source,
          publicUser: !0,
          permissions: r.permissions
        });
      },
      enabled: (r) => r.every((i) => i.permissions >= wt.READ && na.includes(i.mime)),
      default: () => Ul.DEFAULT
    });
    const e = ({ id: r, displayName: i, templateName: o }) => {
      Ed({
        id: r,
        displayName: i,
        enabled: (a) => a.permissions >= wt.CREATE,
        iconClass: "icon-link",
        handler: (a, l) => {
          const f = a.path;
          He.update(() => "filename"), At.update(
            () => kt.getFileConfig({
              name: o,
              templateName: o,
              dir: f,
              isNew: !0,
              existingContents: l,
              onCreate: async (c) => {
                He.update(() => "edit"), At.update(
                  () => kt.getFileConfig({
                    name: c.name,
                    dir: c.dir,
                    isNew: !0,
                    onCreate: async (h) => {
                      await Ln.saveAndChangeViewMode(h);
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
    He.update(() => i), At.update(
      () => kt.getFileConfig({
        name: e,
        dir: r || "",
        permissions: l,
        isPublicLink: o
      })
    );
    let f = {};
    if (o ? f = await kt.loadPublic({ downloadUrl: a }) : f = await kt.load({ fileName: e, dir: r }), f) {
      const c = Ft.getExtension(e);
      let h = {};
      c === "webloc" ? h = Ft.parseWeblocFile(f.filecontents) : h = Ft.parseURLFile(f.filecontents), At.update(
        (s) => kt.getFileConfig({
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
    const f = Ft.getExtension(e);
    let c = "";
    f === "webloc" ? c = Ft.generateWeblocFileContent("", i, a, l) : c = Ft.generateURLFileContent("", i, a, l), await kt.save({ fileContent: c, name: e, dir: r, fileModifiedTime: o }), He.update(() => "none");
  }
}
function ia(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Link target URL") + ""
  ), i, o, a, l, f, c, h, s, d, E, y, b, g, T, O, S;
  return {
    c() {
      e = H("label"), i = _e(r), o = le(), a = H("br"), l = le(), f = H("input"), c = le(), h = H("input"), s = le(), d = H("label"), d.textContent = `${/*t*/
      n[2]("files_linkeditor", "Open in same window")}`, E = le(), y = H("input"), g = le(), T = H("label"), T.textContent = `${/*t*/
      n[2]("files_linkeditor", "Skip confirmation dialog before open (has to open in same window)")}`, B(f, "type", "text"), _r(f, "width", "100%"), B(f, "class", "input-wide"), f.autofocus = !0, B(f, "data-cy", "url-input"), B(
        f,
        "placeholder",
        /*t*/
        n[2]("files_linkeditor", "e.g. https://example.org")
      ), B(h, "type", "checkbox"), B(h, "id", "linkeditor_sameWindow"), B(h, "class", "checkbox"), B(d, "for", "linkeditor_sameWindow"), B(d, "class", "space-top"), B(y, "type", "checkbox"), y.disabled = b = !/*file*/
      n[0].sameWindow, B(y, "id", "linkeditor_skipConfirmation"), B(y, "class", "checkbox"), B(T, "for", "linkeditor_skipConfirmation");
    },
    m(L, R) {
      ie(L, e, R), W(e, i), W(e, o), W(e, a), W(e, l), W(e, f), wn(
        f,
        /*file*/
        n[0].url
      ), ie(L, c, R), ie(L, h, R), h.checked = /*file*/
      n[0].sameWindow, ie(L, s, R), ie(L, d, R), ie(L, E, R), ie(L, y, R), y.checked = /*file*/
      n[0].skipConfirmation, ie(L, g, R), ie(L, T, R), f.focus(), O || (S = [
        Oe(
          f,
          "input",
          /*input0_input_handler*/
          n[5]
        ),
        Oe(
          h,
          "change",
          /*input1_change_handler*/
          n[6]
        ),
        Oe(
          y,
          "change",
          /*input2_change_handler*/
          n[7]
        )
      ], O = !0);
    },
    p(L, R) {
      R & /*file*/
      1 && f.value !== /*file*/
      L[0].url && wn(
        f,
        /*file*/
        L[0].url
      ), R & /*file*/
      1 && (h.checked = /*file*/
      L[0].sameWindow), R & /*file*/
      1 && b !== (b = !/*file*/
      L[0].sameWindow) && (y.disabled = b), R & /*file*/
      1 && (y.checked = /*file*/
      L[0].skipConfirmation);
    },
    d(L) {
      L && (re(e), re(c), re(h), re(s), re(d), re(E), re(y), re(g), re(T)), O = !1, St(S);
    }
  };
}
function oa(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Visit link") + ""
  ), i, o;
  return {
    c() {
      e = H("a"), i = _e(r), B(e, "href", o = We(
        /*file*/
        n[0].url
      )), B(e, "target", "_blank"), B(e, "class", "button");
    },
    m(a, l) {
      ie(a, e, l), W(e, i);
    },
    p(a, l) {
      l & /*file*/
      1 && o !== (o = We(
        /*file*/
        a[0].url
      )) && B(e, "href", o);
    },
    d(a) {
      a && re(e);
    }
  };
}
function sa(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Save") + ""
  ), i, o, a;
  return {
    c() {
      e = H("a"), i = _e(r), B(e, "href", window.location.href), B(e, "class", "primary button");
    },
    m(l, f) {
      ie(l, e, f), W(e, i), o || (a = Oe(e, "click", ft(
        /*save*/
        n[4]
      )), o = !0);
    },
    p: Qt,
    d(l) {
      l && re(e), o = !1, a();
    }
  };
}
function _d(n) {
  let e, r, i, o = (
    /*file*/
    n[0].name + ""
  ), a, l, f, c, h, s, d, E = (
    /*t*/
    n[2]("files_linkeditor", "Cancel") + ""
  ), y, b, g, T, O = !/*loading*/
  n[1] && ia(n), S = !/*loading*/
  n[1] && oa(n), L = !/*loading*/
  n[1] && sa(n);
  return {
    c() {
      e = H("form"), r = H("div"), i = H("h3"), a = _e(o), l = le(), O && O.c(), f = le(), c = H("div"), S && S.c(), h = le(), s = H("div"), d = H("a"), y = _e(E), b = le(), L && L.c(), B(r, "class", "edit"), B(c, "class", "oc-dialog-buttonrow onebutton urlvisit"), B(d, "href", window.location.href), B(d, "class", "cancel button"), B(s, "class", "oc-dialog-buttonrow twobuttons"), B(
        e,
        "action",
        /*OC*/
        n[3].generateUrl("/")
      ), B(e, "method", "post");
    },
    m(R, M) {
      ie(R, e, M), W(e, r), W(r, i), W(i, a), W(r, l), O && O.m(r, null), W(e, f), W(e, c), S && S.m(c, null), W(e, h), W(e, s), W(s, d), W(d, y), W(s, b), L && L.m(s, null), g || (T = [
        Oe(d, "click", ft(
          /*click_handler*/
          n[8]
        )),
        Oe(e, "submit", ft(
          /*save*/
          n[4]
        ))
      ], g = !0);
    },
    p(R, M) {
      M & /*file*/
      1 && o !== (o = /*file*/
      R[0].name + "") && Kn(a, o), /*loading*/
      R[1] ? O && (O.d(1), O = null) : O ? O.p(R, M) : (O = ia(R), O.c(), O.m(r, null)), /*loading*/
      R[1] ? S && (S.d(1), S = null) : S ? S.p(R, M) : (S = oa(R), S.c(), S.m(c, null)), /*loading*/
      R[1] ? L && (L.d(1), L = null) : L ? L.p(R, M) : (L = sa(R), L.c(), L.m(s, null));
    },
    d(R) {
      R && re(e), O && O.d(), S && S.d(), L && L.d(), g = !1, St(T);
    }
  };
}
function Td(n) {
  let e, r;
  return e = new Jn({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [_d] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Ut(e.$$.fragment);
    },
    m(i, o) {
      Ct(e, i, o), r = !0;
    },
    p(i, [o]) {
      const a = {};
      o & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), o & /*$$scope, loading, file*/
      1027 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (ve(e.$$.fragment, i), r = !0);
    },
    o(i) {
      Se(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Lt(e, i);
    }
  };
}
function Nd(n, e, r) {
  let i, o;
  const a = window.t, l = window.OC;
  let f;
  vn(() => {
    f = At.subscribe((y) => {
      r(0, i = y), i && (i.isLoaded || i.isNew) && r(1, o = !1);
    });
  }), bn(() => {
    f();
  });
  const c = () => {
    r(1, o = !0), i.isNew && i.onCreate ? i.onCreate({ ...i }) : Ln.saveAndChangeViewMode({ ...i });
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
  const E = () => {
    He.update(() => "none");
  };
  return r(0, i = kt.getFileConfig()), r(1, o = !0), [
    i,
    o,
    a,
    l,
    c,
    h,
    s,
    d,
    E
  ];
}
class Id extends ln {
  constructor(e) {
    super(), an(this, e, Nd, Td, en, {});
  }
}
function aa(n) {
  let e, r = (
    /*t*/
    n[3]("files_linkeditor", "File name") + ""
  ), i, o, a, l, f, c, h;
  return {
    c() {
      e = H("label"), i = _e(r), o = le(), a = H("br"), l = le(), f = H("input"), B(f, "type", "text"), _r(f, "width", "100%"), B(f, "class", "input-wide"), f.autofocus = !0, B(f, "data-cy", "name-input");
    },
    m(s, d) {
      ie(s, e, d), W(e, i), W(e, o), W(e, a), W(e, l), W(e, f), wn(
        f,
        /*file*/
        n[0].name
      ), f.focus(), c || (h = [
        Oe(
          f,
          "input",
          /*input_input_handler*/
          n[7]
        ),
        Oe(
          f,
          "keyup",
          /*checkConflicts*/
          n[5]
        )
      ], c = !0);
    },
    p(s, d) {
      d & /*file*/
      1 && f.value !== /*file*/
      s[0].name && wn(
        f,
        /*file*/
        s[0].name
      );
    },
    d(s) {
      s && re(e), c = !1, St(h);
    }
  };
}
function la(n) {
  let e, r = (
    /*t*/
    n[3]("files_linkeditor", "Create") + ""
  ), i, o, a;
  return {
    c() {
      e = H("button"), i = _e(r), B(e, "type", "submit"), e.disabled = /*isConflicting*/
      n[2], B(e, "class", "primary button");
    },
    m(l, f) {
      ie(l, e, f), W(e, i), o || (a = Oe(e, "click", ft(
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
      l && re(e), o = !1, a();
    }
  };
}
function Ad(n) {
  let e, r, i, o, a, l, f, c = (
    /*t*/
    n[3]("files_linkeditor", "Cancel") + ""
  ), h, s, d, E, y = !/*loading*/
  n[1] && aa(n), b = !/*loading*/
  n[1] && la(n);
  return {
    c() {
      e = H("form"), r = H("div"), i = H("h3"), i.textContent = `${window.t("files_linkeditor", "New link")}`, o = le(), y && y.c(), a = le(), l = H("div"), f = H("a"), h = _e(c), s = le(), b && b.c(), B(r, "class", "edit"), B(f, "href", window.location.href), B(f, "class", "cancel button"), B(l, "class", "oc-dialog-buttonrow twobuttons"), B(
        e,
        "action",
        /*OC*/
        n[4].generateUrl("/")
      ), B(e, "method", "post");
    },
    m(g, T) {
      ie(g, e, T), W(e, r), W(r, i), W(r, o), y && y.m(r, null), W(e, a), W(e, l), W(l, f), W(f, h), W(l, s), b && b.m(l, null), d || (E = [
        Oe(f, "click", ft(
          /*click_handler*/
          n[8]
        )),
        Oe(e, "submit", ft(
          /*save*/
          n[6]
        ))
      ], d = !0);
    },
    p(g, T) {
      /*loading*/
      g[1] ? y && (y.d(1), y = null) : y ? y.p(g, T) : (y = aa(g), y.c(), y.m(r, null)), /*loading*/
      g[1] ? b && (b.d(1), b = null) : b ? b.p(g, T) : (b = la(g), b.c(), b.m(l, null));
    },
    d(g) {
      g && re(e), y && y.d(), b && b.d(), d = !1, St(E);
    }
  };
}
function Od(n) {
  let e, r;
  return e = new Jn({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [Ad] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Ut(e.$$.fragment);
    },
    m(i, o) {
      Ct(e, i, o), r = !0;
    },
    p(i, [o]) {
      const a = {};
      o & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), o & /*$$scope, isConflicting, loading, file*/
      2055 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (ve(e.$$.fragment, i), r = !0);
    },
    o(i) {
      Se(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Lt(e, i);
    }
  };
}
function Rd(n, e, r) {
  let i, o, a;
  const l = window.t, f = window.OC, c = (b, g) => {
    const T = {
      name: b,
      templateName: i.templateName
    }, O = Hr(T);
    return ((g == null ? void 0 : g.map((L) => L.basename)) ?? []).includes(O.name);
  };
  let h;
  vn(() => {
    h = At.subscribe((b) => {
      r(0, i = b), i && (i.isLoaded || i.isNew) && (r(1, o = !1), s());
    });
  }), bn(() => {
    h();
  });
  const s = () => {
    c(i.name, i.existingContents) ? r(2, a = !0) : r(2, a = !1);
  }, d = () => {
    c(i.name, i.existingContents) || (r(1, o = !0), i.onCreate(Hr({ ...i })));
  };
  function E() {
    i.name = this.value, r(0, i);
  }
  const y = () => {
    He.update(() => "none");
  };
  return r(0, i = kt.getFileConfig()), r(1, o = !0), r(2, a = !0), [
    i,
    o,
    a,
    l,
    f,
    s,
    d,
    E,
    y
  ];
}
class Sd extends ln {
  constructor(e) {
    super(), an(this, e, Rd, Od, en, {});
  }
}
function ua(n) {
  let e, r;
  return e = new Sd({}), {
    c() {
      Ut(e.$$.fragment);
    },
    m(i, o) {
      Ct(e, i, o), r = !0;
    },
    i(i) {
      r || (ve(e.$$.fragment, i), r = !0);
    },
    o(i) {
      Se(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Lt(e, i);
    }
  };
}
function ca(n) {
  let e, r;
  return e = new bd({}), {
    c() {
      Ut(e.$$.fragment);
    },
    m(i, o) {
      Ct(e, i, o), r = !0;
    },
    i(i) {
      r || (ve(e.$$.fragment, i), r = !0);
    },
    o(i) {
      Se(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Lt(e, i);
    }
  };
}
function fa(n) {
  let e, r;
  return e = new Id({}), {
    c() {
      Ut(e.$$.fragment);
    },
    m(i, o) {
      Ct(e, i, o), r = !0;
    },
    i(i) {
      r || (ve(e.$$.fragment, i), r = !0);
    },
    o(i) {
      Se(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Lt(e, i);
    }
  };
}
function Cd(n) {
  let e, r, i, o, a = (
    /*viewMode*/
    n[0] === "filename" && ua()
  ), l = (
    /*viewMode*/
    n[0] === "view" && ca()
  ), f = (
    /*viewMode*/
    n[0] === "edit" && fa()
  );
  return {
    c() {
      a && a.c(), e = le(), l && l.c(), r = le(), f && f.c(), i = va();
    },
    m(c, h) {
      a && a.m(c, h), ie(c, e, h), l && l.m(c, h), ie(c, r, h), f && f.m(c, h), ie(c, i, h), o = !0;
    },
    p(c, [h]) {
      /*viewMode*/
      c[0] === "filename" ? a ? h & /*viewMode*/
      1 && ve(a, 1) : (a = ua(), a.c(), ve(a, 1), a.m(e.parentNode, e)) : a && (Hn(), Se(a, 1, 1, () => {
        a = null;
      }), Yn()), /*viewMode*/
      c[0] === "view" ? l ? h & /*viewMode*/
      1 && ve(l, 1) : (l = ca(), l.c(), ve(l, 1), l.m(r.parentNode, r)) : l && (Hn(), Se(l, 1, 1, () => {
        l = null;
      }), Yn()), /*viewMode*/
      c[0] === "edit" ? f ? h & /*viewMode*/
      1 && ve(f, 1) : (f = fa(), f.c(), ve(f, 1), f.m(i.parentNode, i)) : f && (Hn(), Se(f, 1, 1, () => {
        f = null;
      }), Yn());
    },
    i(c) {
      o || (ve(a), ve(l), ve(f), o = !0);
    },
    o(c) {
      Se(a), Se(l), Se(f), o = !1;
    },
    d(c) {
      c && (re(e), re(r), re(i)), a && a.d(c), l && l.d(c), f && f.d(c);
    }
  };
}
function Ld(n, e, r) {
  let i, o;
  return vn(() => {
    o = He.subscribe((a) => {
      r(0, i = a);
    });
  }), bn(() => {
    o();
  }), r(0, i = ""), [i];
}
class xd extends ln {
  constructor(e) {
    super(), an(this, e, Ld, Cd, en, {});
  }
}
const ha = [];
var ma, ga;
const Pd = Number.parseInt((((ga = (ma = window.OC) == null ? void 0 : ma.config) == null ? void 0 : ga.version) ?? "0").split(".")[0]);
Pd >= 33 ? (ha.push(
  new Xp({
    target: document.body,
    props: {}
  })
), Cn.registerFileActions()) : (ha.push(
  new xd({
    target: document.body,
    props: {}
  })
), Ln.registerFileActions());
