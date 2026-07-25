var Lu = Object.defineProperty;
var Jo = (n) => {
  throw TypeError(n);
};
var xu = (n, e, r) => e in n ? Lu(n, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[e] = r;
var he = (n, e, r) => xu(n, typeof e != "symbol" ? e + "" : e, r), Ai = (n, e, r) => e.has(n) || Jo("Cannot " + r);
var X = (n, e, r) => (Ai(n, e, "read from private field"), r ? r.call(n) : e.get(n)), Ot = (n, e, r) => e.has(n) ? Jo("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, r), We = (n, e, r, i) => (Ai(n, e, "write to private field"), i ? i.call(n, r) : e.set(n, r), r), En = (n, e, r) => (Ai(n, e, "access private method"), r);
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
function an() {
}
function Pu(n, e) {
  for (const r in e) n[r] = e[r];
  return (
    /** @type {T & S} */
    n
  );
}
function Va(n) {
  return n();
}
function Qo() {
  return /* @__PURE__ */ Object.create(null);
}
function $t(n) {
  n.forEach(Va);
}
function za(n) {
  return typeof n == "function";
}
function ln(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Du(n) {
  return Object.keys(n).length === 0;
}
function $u(n, e, r, i) {
  if (n) {
    const o = qa(n, e, r, i);
    return n[0](o);
  }
}
function qa(n, e, r, i) {
  return n[1] && i ? Pu(r.ctx.slice(), n[1](i(e))) : r.ctx;
}
function ku(n, e, r, i) {
  return n[2], e.dirty;
}
function Fu(n, e, r, i, o, a) {
  if (o) {
    const l = qa(e, r, i, a);
    n.p(l, o);
  }
}
function Mu(n) {
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
function oe(n, e, r) {
  n.insertBefore(e, r || null);
}
function ie(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function Z(n) {
  return document.createElement(n);
}
function Ie(n) {
  return document.createTextNode(n);
}
function pe() {
  return Ie(" ");
}
function Xa() {
  return Ie("");
}
function Ce(n, e, r, i) {
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
function Uu(n) {
  return Array.from(n.childNodes);
}
function fr(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function On(n, e) {
  n.value = e ?? "";
}
function Dr(n, e, r, i) {
  r == null ? n.style.removeProperty(e) : n.style.setProperty(e, r, "");
}
let Cr;
function Or(n) {
  Cr = n;
}
function Ha() {
  if (!Cr) throw new Error("Function called outside component initialization");
  return Cr;
}
function Rn(n) {
  Ha().$$.on_mount.push(n);
}
function Cn(n) {
  Ha().$$.on_destroy.push(n);
}
const tr = [], es = [];
let ar = [];
const ts = [], Bu = /* @__PURE__ */ Promise.resolve();
let no = !1;
function ju() {
  no || (no = !0, Bu.then(Ya));
}
function ro(n) {
  ar.push(n);
}
const Oi = /* @__PURE__ */ new Set();
let Yn = 0;
function Ya() {
  if (Yn !== 0)
    return;
  const n = Cr;
  do {
    try {
      for (; Yn < tr.length; ) {
        const e = tr[Yn];
        Yn++, Or(e), Gu(e.$$);
      }
    } catch (e) {
      throw tr.length = 0, Yn = 0, e;
    }
    for (Or(null), tr.length = 0, Yn = 0; es.length; ) es.pop()();
    for (let e = 0; e < ar.length; e += 1) {
      const r = ar[e];
      Oi.has(r) || (Oi.add(r), r());
    }
    ar.length = 0;
  } while (tr.length);
  for (; ts.length; )
    ts.pop()();
  no = !1, Oi.clear(), Or(n);
}
function Gu(n) {
  if (n.fragment !== null) {
    n.update(), $t(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(ro);
  }
}
function Wu(n) {
  const e = [], r = [];
  ar.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : r.push(i)), r.forEach((i) => i()), ar = e;
}
const Jr = /* @__PURE__ */ new Set();
let Fn;
function lr() {
  Fn = {
    r: 0,
    c: [],
    p: Fn
    // parent group
  };
}
function ur() {
  Fn.r || $t(Fn.c), Fn = Fn.p;
}
function Te(n, e) {
  n && n.i && (Jr.delete(n), n.i(e));
}
function xe(n, e, r, i) {
  if (n && n.o) {
    if (Jr.has(n)) return;
    Jr.add(n), Fn.c.push(() => {
      Jr.delete(n), i && (r && n.d(1), i());
    }), n.o(e);
  } else i && i();
}
function Vt(n) {
  n && n.c();
}
function kt(n, e, r) {
  const { fragment: i, after_update: o } = n.$$;
  i && i.m(e, r), ro(() => {
    const a = n.$$.on_mount.map(Va).filter(za);
    n.$$.on_destroy ? n.$$.on_destroy.push(...a) : $t(a), n.$$.on_mount = [];
  }), o.forEach(ro);
}
function Ft(n, e) {
  const r = n.$$;
  r.fragment !== null && (Wu(r.after_update), $t(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Vu(n, e) {
  n.$$.dirty[0] === -1 && (tr.push(n), ju(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function hn(n, e, r, i, o, a, l = null, f = [-1]) {
  const u = Cr;
  Or(n);
  const h = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: an,
    not_equal: o,
    bound: Qo(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Qo(),
    dirty: f,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  l && l(h.root);
  let s = !1;
  if (h.ctx = r ? r(n, e.props || {}, (d, g, ...y) => {
    const b = y.length ? y[0] : g;
    return h.ctx && o(h.ctx[d], h.ctx[d] = b) && (!h.skip_bound && h.bound[d] && h.bound[d](b), s && Vu(n, d)), g;
  }) : [], h.update(), s = !0, $t(h.before_update), h.fragment = i ? i(h.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = Uu(e.target);
      h.fragment && h.fragment.l(d), d.forEach(ie);
    } else
      h.fragment && h.fragment.c();
    e.intro && Te(n.$$.fragment), kt(n, e.target, e.anchor), Ya();
  }
  Or(u);
}
class pn {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    he(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    he(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Ft(this, 1), this.$destroy = an;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, r) {
    if (!za(r))
      return an;
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
    this.$$set && !Du(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const zu = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(zu);
function qu(n) {
  let e, r, i, o, a;
  const l = (
    /*#slots*/
    n[2].default
  ), f = $u(
    l,
    n,
    /*$$scope*/
    n[1],
    null
  );
  return {
    c() {
      e = Z("div"), r = pe(), i = Z("div"), f && f.c(), j(e, "class", "linkeditor-oc-dialog-dim"), j(i, "class", o = `linkeditor-oc-dialog ${/*loading*/
      n[0] ? "icon-loading" : ""}`), Dr(i, "position", "fixed");
    },
    m(u, h) {
      oe(u, e, h), oe(u, r, h), oe(u, i, h), f && f.m(i, null), a = !0;
    },
    p(u, [h]) {
      f && f.p && (!a || h & /*$$scope*/
      2) && Fu(
        f,
        l,
        u,
        /*$$scope*/
        u[1],
        a ? ku(
          l,
          /*$$scope*/
          u[1],
          h,
          null
        ) : Mu(
          /*$$scope*/
          u[1]
        ),
        null
      ), (!a || h & /*loading*/
      1 && o !== (o = `linkeditor-oc-dialog ${/*loading*/
      u[0] ? "icon-loading" : ""}`)) && j(i, "class", o);
    },
    i(u) {
      a || (Te(f, u), a = !0);
    },
    o(u) {
      xe(f, u), a = !1;
    },
    d(u) {
      u && (ie(e), ie(r), ie(i)), f && f.d(u);
    }
  };
}
function Xu(n, e, r) {
  let { $$slots: i = {}, $$scope: o } = e, { loading: a = !1 } = e;
  return n.$$set = (l) => {
    "loading" in l && r(0, a = l.loading), "$$scope" in l && r(1, o = l.$$scope);
  }, [a, o, i];
}
class hr extends pn {
  constructor(e) {
    super(), hn(this, e, Xu, qu, ln, { loading: 0 });
  }
}
const Zn = [];
function Za(n, e = an) {
  let r;
  const i = /* @__PURE__ */ new Set();
  function o(f) {
    if (ln(n, f) && (n = f, r)) {
      const u = !Zn.length;
      for (const h of i)
        h[1](), Zn.push(h, n);
      if (u) {
        for (let h = 0; h < Zn.length; h += 2)
          Zn[h][0](Zn[h + 1]);
        Zn.length = 0;
      }
    }
  }
  function a(f) {
    o(f(n));
  }
  function l(f, u = an) {
    const h = [f, u];
    return i.add(h), i.size === 1 && (r = e(o, a) || an), f(n), () => {
      i.delete(h), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: o, update: a, subscribe: l };
}
function bo(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Hu(n) {
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
var ze = _o.sanitizeUrl = void 0, Pt = dt;
function Yu(n) {
  return Pt.relativeFirstCharacters.indexOf(n[0]) > -1;
}
function Zu(n) {
  var e = n.replace(Pt.ctrlCharactersRegex, "");
  return e.replace(Pt.htmlEntitiesRegex, function(r, i) {
    return String.fromCharCode(i);
  });
}
function Ku(n) {
  if (!n)
    return Pt.BLANK_URL;
  var e, r = n;
  do
    r = Zu(r).replace(Pt.htmlCtrlEntityRegex, "").replace(Pt.ctrlCharactersRegex, "").trim(), e = r.match(Pt.ctrlCharactersRegex) || r.match(Pt.htmlEntitiesRegex) || r.match(Pt.htmlCtrlEntityRegex);
  while (e && e.length > 0);
  var i = r;
  if (!i)
    return Pt.BLANK_URL;
  if (Yu(i))
    return i;
  var o = i.match(Pt.urlSchemeRegex);
  if (!o)
    return i;
  var a = o[0];
  return Pt.invalidProtocolRegex.test(a) ? Pt.BLANK_URL : i;
}
ze = _o.sanitizeUrl = Ku;
function Ju(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ka = { exports: {} }, qe = Ka.exports = {}, nn, rn;
function io() {
  throw new Error("setTimeout has not been defined");
}
function oo() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? nn = setTimeout : nn = io;
  } catch {
    nn = io;
  }
  try {
    typeof clearTimeout == "function" ? rn = clearTimeout : rn = oo;
  } catch {
    rn = oo;
  }
})();
function Ja(n) {
  if (nn === setTimeout)
    return setTimeout(n, 0);
  if ((nn === io || !nn) && setTimeout)
    return nn = setTimeout, setTimeout(n, 0);
  try {
    return nn(n, 0);
  } catch {
    try {
      return nn.call(null, n, 0);
    } catch {
      return nn.call(this, n, 0);
    }
  }
}
function Qu(n) {
  if (rn === clearTimeout)
    return clearTimeout(n);
  if ((rn === oo || !rn) && clearTimeout)
    return rn = clearTimeout, clearTimeout(n);
  try {
    return rn(n);
  } catch {
    try {
      return rn.call(null, n);
    } catch {
      return rn.call(this, n);
    }
  }
}
var fn = [], cr = !1, Mn, Qr = -1;
function ec() {
  !cr || !Mn || (cr = !1, Mn.length ? fn = Mn.concat(fn) : Qr = -1, fn.length && Qa());
}
function Qa() {
  if (!cr) {
    var n = Ja(ec);
    cr = !0;
    for (var e = fn.length; e; ) {
      for (Mn = fn, fn = []; ++Qr < e; )
        Mn && Mn[Qr].run();
      Qr = -1, e = fn.length;
    }
    Mn = null, cr = !1, Qu(n);
  }
}
qe.nextTick = function(n) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      e[r - 1] = arguments[r];
  fn.push(new el(n, e)), fn.length === 1 && !cr && Ja(Qa);
};
function el(n, e) {
  this.fun = n, this.array = e;
}
el.prototype.run = function() {
  this.fun.apply(null, this.array);
};
qe.title = "browser";
qe.browser = !0;
qe.env = {};
qe.argv = [];
qe.version = "";
qe.versions = {};
function dn() {
}
qe.on = dn;
qe.addListener = dn;
qe.once = dn;
qe.off = dn;
qe.removeListener = dn;
qe.removeAllListeners = dn;
qe.emit = dn;
qe.prependListener = dn;
qe.prependOnceListener = dn;
qe.listeners = function(n) {
  return [];
};
qe.binding = function(n) {
  throw new Error("process.binding is not supported");
};
qe.cwd = function() {
  return "/";
};
qe.chdir = function(n) {
  throw new Error("process.chdir is not supported");
};
qe.umask = function() {
  return 0;
};
var tc = Ka.exports;
const Tt = /* @__PURE__ */ Ju(tc), nc = typeof Tt == "object" && Tt.env && Tt.env.NODE_DEBUG && /\bsemver\b/i.test(Tt.env.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
};
var tl = nc;
const nl = 256, rc = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, ic = 16, oc = nl - 6;
var rl = {
  MAX_LENGTH: nl,
  MAX_SAFE_COMPONENT_LENGTH: ic,
  MAX_SAFE_BUILD_LENGTH: oc,
  MAX_SAFE_INTEGER: rc
}, so = { exports: {} };
(function(n, e) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: r,
    MAX_SAFE_BUILD_LENGTH: i,
    MAX_LENGTH: o
  } = rl, a = tl;
  e = n.exports = {};
  const l = e.re = [], f = e.safeRe = [], u = e.src = [], h = e.safeSrc = [], s = e.t = {};
  let d = 0;
  const g = "[a-zA-Z0-9-]", y = [
    ["\\s", 1],
    ["\\d", o],
    [g, i]
  ], b = (T) => {
    for (const [S, C] of y)
      T = T.split(`${S}*`).join(`${S}{0,${C}}`).split(`${S}+`).join(`${S}{1,${C}}`);
    return T;
  }, E = (T, S, C) => {
    const x = b(S), R = d++;
    a(T, R, S), s[T] = R, u[R] = S, h[R] = x, l[R] = new RegExp(S, C ? "g" : void 0), f[R] = new RegExp(x, C ? "g" : void 0);
  };
  E("NUMERICIDENTIFIER", "0|[1-9]\\d*"), E("NUMERICIDENTIFIERLOOSE", "\\d+"), E("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${g}*`), E("MAINVERSION", `(${u[s.NUMERICIDENTIFIER]})\\.(${u[s.NUMERICIDENTIFIER]})\\.(${u[s.NUMERICIDENTIFIER]})`), E("MAINVERSIONLOOSE", `(${u[s.NUMERICIDENTIFIERLOOSE]})\\.(${u[s.NUMERICIDENTIFIERLOOSE]})\\.(${u[s.NUMERICIDENTIFIERLOOSE]})`), E("PRERELEASEIDENTIFIER", `(?:${u[s.NONNUMERICIDENTIFIER]}|${u[s.NUMERICIDENTIFIER]})`), E("PRERELEASEIDENTIFIERLOOSE", `(?:${u[s.NONNUMERICIDENTIFIER]}|${u[s.NUMERICIDENTIFIERLOOSE]})`), E("PRERELEASE", `(?:-(${u[s.PRERELEASEIDENTIFIER]}(?:\\.${u[s.PRERELEASEIDENTIFIER]})*))`), E("PRERELEASELOOSE", `(?:-?(${u[s.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[s.PRERELEASEIDENTIFIERLOOSE]})*))`), E("BUILDIDENTIFIER", `${g}+`), E("BUILD", `(?:\\+(${u[s.BUILDIDENTIFIER]}(?:\\.${u[s.BUILDIDENTIFIER]})*))`), E("FULLPLAIN", `v?${u[s.MAINVERSION]}${u[s.PRERELEASE]}?${u[s.BUILD]}?`), E("FULL", `^${u[s.FULLPLAIN]}$`), E("LOOSEPLAIN", `[v=\\s]*${u[s.MAINVERSIONLOOSE]}${u[s.PRERELEASELOOSE]}?${u[s.BUILD]}?`), E("LOOSE", `^${u[s.LOOSEPLAIN]}$`), E("GTLT", "((?:<|>)?=?)"), E("XRANGEIDENTIFIERLOOSE", `${u[s.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), E("XRANGEIDENTIFIER", `${u[s.NUMERICIDENTIFIER]}|x|X|\\*`), E("XRANGEPLAIN", `[v=\\s]*(${u[s.XRANGEIDENTIFIER]})(?:\\.(${u[s.XRANGEIDENTIFIER]})(?:\\.(${u[s.XRANGEIDENTIFIER]})(?:${u[s.PRERELEASE]})?${u[s.BUILD]}?)?)?`), E("XRANGEPLAINLOOSE", `[v=\\s]*(${u[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[s.XRANGEIDENTIFIERLOOSE]})(?:${u[s.PRERELEASELOOSE]})?${u[s.BUILD]}?)?)?`), E("XRANGE", `^${u[s.GTLT]}\\s*${u[s.XRANGEPLAIN]}$`), E("XRANGELOOSE", `^${u[s.GTLT]}\\s*${u[s.XRANGEPLAINLOOSE]}$`), E("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), E("COERCE", `${u[s.COERCEPLAIN]}(?:$|[^\\d])`), E("COERCEFULL", u[s.COERCEPLAIN] + `(?:${u[s.PRERELEASE]})?(?:${u[s.BUILD]})?(?:$|[^\\d])`), E("COERCERTL", u[s.COERCE], !0), E("COERCERTLFULL", u[s.COERCEFULL], !0), E("LONETILDE", "(?:~>?)"), E("TILDETRIM", `(\\s*)${u[s.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", E("TILDE", `^${u[s.LONETILDE]}${u[s.XRANGEPLAIN]}$`), E("TILDELOOSE", `^${u[s.LONETILDE]}${u[s.XRANGEPLAINLOOSE]}$`), E("LONECARET", "(?:\\^)"), E("CARETTRIM", `(\\s*)${u[s.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", E("CARET", `^${u[s.LONECARET]}${u[s.XRANGEPLAIN]}$`), E("CARETLOOSE", `^${u[s.LONECARET]}${u[s.XRANGEPLAINLOOSE]}$`), E("COMPARATORLOOSE", `^${u[s.GTLT]}\\s*(${u[s.LOOSEPLAIN]})$|^$`), E("COMPARATOR", `^${u[s.GTLT]}\\s*(${u[s.FULLPLAIN]})$|^$`), E("COMPARATORTRIM", `(\\s*)${u[s.GTLT]}\\s*(${u[s.LOOSEPLAIN]}|${u[s.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", E("HYPHENRANGE", `^\\s*(${u[s.XRANGEPLAIN]})\\s+-\\s+(${u[s.XRANGEPLAIN]})\\s*$`), E("HYPHENRANGELOOSE", `^\\s*(${u[s.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[s.XRANGEPLAINLOOSE]})\\s*$`), E("STAR", "(<|>)?=?\\s*\\*"), E("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), E("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(so, so.exports);
var sc = so.exports;
const ac = Object.freeze({ loose: !0 }), lc = Object.freeze({}), uc = (n) => n ? typeof n != "object" ? ac : n : lc;
var cc = uc;
const ns = /^[0-9]+$/, fc = (n, e) => {
  if (typeof n == "number" && typeof e == "number")
    return n === e ? 0 : n < e ? -1 : 1;
  const r = ns.test(n), i = ns.test(e);
  return r && i && (n = +n, e = +e), n === e ? 0 : r && !i ? -1 : i && !r ? 1 : n < e ? -1 : 1;
};
var hc = {
  compareIdentifiers: fc
};
const Vr = tl, { MAX_LENGTH: rs, MAX_SAFE_INTEGER: zr } = rl, { safeRe: qr, t: Xr } = sc, pc = cc, { compareIdentifiers: Si } = hc;
let dc = class en {
  constructor(e, r) {
    if (r = pc(r), e instanceof en) {
      if (e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
    if (e.length > rs)
      throw new TypeError(
        `version is longer than ${rs} characters`
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
var il = dc;
const mc = il, gc = (n, e) => new mc(n, e).major;
var Ec = gc;
const is = /* @__PURE__ */ bo(Ec), os = il, wc = (n, e, r = !1) => {
  if (n instanceof os)
    return n;
  try {
    return new os(n, e);
  } catch (i) {
    if (!r)
      return null;
    throw i;
  }
};
var yc = wc;
const vc = yc, bc = (n, e) => {
  const r = vc(n, e);
  return r ? r.version : null;
};
var _c = bc;
const Tc = /* @__PURE__ */ bo(_c);
/*!
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
class Nc {
  constructor(e) {
    he(this, "bus");
    typeof e.getVersion != "function" || !Tc(e.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : is(e.getVersion()) !== is(this.getVersion()) && console.warn(
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
class Ic {
  constructor() {
    he(this, "handlers", /* @__PURE__ */ new Map());
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
function ol() {
  var n;
  return Er !== null ? Er : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : ((n = window.OC) != null && n._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof (window == null ? void 0 : window._nc_event_bus) < "u" ? Er = new Nc(window._nc_event_bus) : Er = window._nc_event_bus = new Ic(), Er);
}
function Ac(n, e) {
  ol().subscribe(n, e);
}
function sl(n, ...e) {
  ol().emit(n, ...e);
}
const sr = class sr {
  constructor(e, r, i) {
    he(this, "scope");
    he(this, "wrapped");
    this.scope = `${i ? sr.GLOBAL_SCOPE_PERSISTENT : sr.GLOBAL_SCOPE_VOLATILE}_${btoa(e)}_`, this.wrapped = r;
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
he(sr, "GLOBAL_SCOPE_VOLATILE", "nextcloud_vol"), he(sr, "GLOBAL_SCOPE_PERSISTENT", "nextcloud_per");
let ao = sr;
class Oc {
  constructor(e) {
    he(this, "appId");
    he(this, "persisted", !1);
    he(this, "clearedOnLogout", !1);
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
function Sc(n) {
  return new Oc(n);
}
let Sr;
const al = [];
function ll() {
  return Sr === void 0 && (Sr = document.head.dataset.requesttoken ?? null), Sr;
}
function ul(n) {
  al.push(n);
}
Ac("csrf-token-update", (n) => {
  Sr = n.token, al.forEach((e) => {
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
Sc("public").persist().build();
let Kn;
function ss(n, e) {
  return n ? n.getAttribute(e) : null;
}
function $r() {
  if (Kn !== void 0)
    return Kn;
  const n = document == null ? void 0 : document.getElementsByTagName("head")[0];
  if (!n)
    return null;
  const e = ss(n, "data-user");
  return e === null ? (Kn = null, Kn) : (Kn = {
    uid: e,
    displayName: ss(n, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Kn);
}
var Ye = /* @__PURE__ */ ((n) => (n[n.Debug = 0] = "Debug", n[n.Info = 1] = "Info", n[n.Warn = 2] = "Warn", n[n.Error = 3] = "Error", n[n.Fatal = 4] = "Fatal", n))(Ye || {});
class Rc {
  constructor(e) {
    he(this, "context");
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
function Cc(n) {
  return new Rc(n);
}
class Lc {
  constructor(e) {
    he(this, "context");
    he(this, "factory");
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
function cl() {
  return new Lc(Cc);
}
function lo(n) {
  return n && n.split("/").map(encodeURIComponent).join("/");
}
function To(n, e) {
  return n = n.replace(/\\/g, "/").replace(/\/+$/g, "").replace(/.*\//, ""), n;
}
function rr(n) {
  n = n.replaceAll(/\\/g, "/");
  const e = n.split("/");
  return e.length <= 1 ? "." : (e.pop(), e.length === 1 && e[0] === "" ? "/" : e.join("/"));
}
function fl(n) {
  const e = To(n), r = e.lastIndexOf(".");
  return r > 0 ? e.substring(r) : "";
}
function hl(...n) {
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
var Ba;
(Ba = window._nc_files_scope).v4_0 ?? (Ba.v4_0 = {});
const Be = window._nc_files_scope.v4_0, pl = cl().setApp("@nextcloud/files").detectUser().build(), dl = Object.freeze({
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
}), ml = Object.freeze({
  /** This is a new node and it doesn't exists on the filesystem yet */
  NEW: "new",
  /** This node has failed and is unavailable  */
  FAILED: "failed",
  /** This node is currently loading or have an operation in progress */
  LOADING: "loading",
  /** This node is locked and cannot be modified */
  LOCKED: "locked"
});
function gl(n, e) {
  return n.match(e) !== null;
}
function wn(n, e) {
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
  if (gl(n.source, e)) {
    const r = n.source.match(e)[0];
    if (!n.source.includes(hl(r, n.root)))
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
  if (n.status && !Object.values(ml).includes(n.status))
    throw new Error("Status must be a valid NodeStatus");
}
function xc(n) {
  n.mtime && typeof n.mtime == "string" && !isNaN(Date.parse(n.mtime)) && JSON.stringify(new Date(n.mtime)) === JSON.stringify(n.mtime) && (n.mtime = new Date(n.mtime)), n.crtime && typeof n.crtime == "string" && !isNaN(Date.parse(n.crtime)) && JSON.stringify(new Date(n.crtime)) === JSON.stringify(n.crtime) && (n.crtime = new Date(n.crtime));
}
function Pc(n) {
  if (n instanceof RegExp)
    return n;
  const e = n.match(/(\/?)(.+)\1([a-z]*)/i);
  if (!e)
    throw new Error("Invalid regular expression format.");
  const r = Array.from(new Set(e[3])).filter((i) => "gimsuy".includes(i)).join("");
  return new RegExp(e[2], r);
}
let El = class wl {
  constructor(...[e, r]) {
    he(this, "_attributes");
    he(this, "_data");
    he(this, "_knownDavService", /(remote|public)\.php\/(web)?dav/i);
    he(this, "readonlyAttributes", Object.entries(Object.getOwnPropertyDescriptors(wl.prototype)).filter((e) => typeof e[1].get == "function" && e[0] !== "__proto__").map((e) => e[0]));
    he(this, "handler", {
      set: (e, r, i) => this.readonlyAttributes.includes(r) ? !1 : Reflect.set(e, r, i),
      deleteProperty: (e, r) => this.readonlyAttributes.includes(r) ? !1 : Reflect.deleteProperty(e, r)
    });
    e.mime || (e.mime = "application/octet-stream"), xc(e), r = Pc(r || this._knownDavService), wn(e, r), this._data = {
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
    wn({ ...this._data, displayname: e }, this._knownDavService), this._data.displayname = e;
  }
  /**
   * Get this object's extension
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get extension() {
    return fl(this.source);
  }
  /**
   * Get the directory path leading to this object
   * Will use the relative path to root if available
   *
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get dirname() {
    return rr(this.path);
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
    e ?? (e = "application/octet-stream"), wn({ ...this._data, mime: e }, this._knownDavService), this._data.mime = e;
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
    wn({ ...this._data, mtime: e }, this._knownDavService), this._data.mtime = e;
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
    wn({ ...this._data, size: e }, this._knownDavService), this.updateMtime(), this._data.size = e;
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
    wn({ ...this._data, permissions: e }, this._knownDavService), this.updateMtime(), this._data.permissions = e;
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
    return gl(this.source, this._knownDavService);
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
    wn({ ...this._data, status: e }, this._knownDavService), this._data.status = e;
  }
  /**
   * Move the node to a new destination
   *
   * @param destination the new source.
   * e.g. https://cloud.domain.com/remote.php/dav/files/emma/Photos/picture.jpg
   */
  move(e) {
    wn({ ...this._data, source: e }, this._knownDavService);
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
    this.move(rr(this.source) + "/" + e);
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
}, Dc = class extends El {
  constructor(...[e, r]) {
    super(e, r);
  }
  get type() {
    return dl.File;
  }
}, $c = class extends El {
  constructor(...[e, r]) {
    super({
      ...e,
      mime: "httpd/unix-directory"
    }, r);
  }
  get type() {
    return dl.Folder;
  }
  get extension() {
    return null;
  }
  get mime() {
    return "httpd/unix-directory";
  }
};
var kc = class extends EventTarget {
  dispatchTypedEvent(e, r) {
    return super.dispatchEvent(r);
  }
}, et = {}, fi = {};
fi.byteLength = Uc;
fi.toByteArray = jc;
fi.fromByteArray = Vc;
var sn = [], jt = [], Fc = typeof Uint8Array < "u" ? Uint8Array : Array, Ri = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Jn = 0, Mc = Ri.length; Jn < Mc; ++Jn)
  sn[Jn] = Ri[Jn], jt[Ri.charCodeAt(Jn)] = Jn;
jt[45] = 62;
jt[95] = 63;
function yl(n) {
  var e = n.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = n.indexOf("=");
  r === -1 && (r = e);
  var i = r === e ? 0 : 4 - r % 4;
  return [r, i];
}
function Uc(n) {
  var e = yl(n), r = e[0], i = e[1];
  return (r + i) * 3 / 4 - i;
}
function Bc(n, e, r) {
  return (e + r) * 3 / 4 - r;
}
function jc(n) {
  var e, r = yl(n), i = r[0], o = r[1], a = new Fc(Bc(n, i, o)), l = 0, f = o > 0 ? i - 4 : i, u;
  for (u = 0; u < f; u += 4)
    e = jt[n.charCodeAt(u)] << 18 | jt[n.charCodeAt(u + 1)] << 12 | jt[n.charCodeAt(u + 2)] << 6 | jt[n.charCodeAt(u + 3)], a[l++] = e >> 16 & 255, a[l++] = e >> 8 & 255, a[l++] = e & 255;
  return o === 2 && (e = jt[n.charCodeAt(u)] << 2 | jt[n.charCodeAt(u + 1)] >> 4, a[l++] = e & 255), o === 1 && (e = jt[n.charCodeAt(u)] << 10 | jt[n.charCodeAt(u + 1)] << 4 | jt[n.charCodeAt(u + 2)] >> 2, a[l++] = e >> 8 & 255, a[l++] = e & 255), a;
}
function Gc(n) {
  return sn[n >> 18 & 63] + sn[n >> 12 & 63] + sn[n >> 6 & 63] + sn[n & 63];
}
function Wc(n, e, r) {
  for (var i, o = [], a = e; a < r; a += 3)
    i = (n[a] << 16 & 16711680) + (n[a + 1] << 8 & 65280) + (n[a + 2] & 255), o.push(Gc(i));
  return o.join("");
}
function Vc(n) {
  for (var e, r = n.length, i = r % 3, o = [], a = 16383, l = 0, f = r - i; l < f; l += a)
    o.push(Wc(n, l, l + a > f ? f : l + a));
  return i === 1 ? (e = n[r - 1], o.push(
    sn[e >> 2] + sn[e << 4 & 63] + "=="
  )) : i === 2 && (e = (n[r - 2] << 8) + n[r - 1], o.push(
    sn[e >> 10] + sn[e >> 4 & 63] + sn[e << 2 & 63] + "="
  )), o.join("");
}
var No = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
No.read = function(n, e, r, i, o) {
  var a, l, f = o * 8 - i - 1, u = (1 << f) - 1, h = u >> 1, s = -7, d = r ? o - 1 : 0, g = r ? -1 : 1, y = n[e + d];
  for (d += g, a = y & (1 << -s) - 1, y >>= -s, s += f; s > 0; a = a * 256 + n[e + d], d += g, s -= 8)
    ;
  for (l = a & (1 << -s) - 1, a >>= -s, s += i; s > 0; l = l * 256 + n[e + d], d += g, s -= 8)
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
  var l, f, u, h = a * 8 - o - 1, s = (1 << h) - 1, d = s >> 1, g = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, y = i ? 0 : a - 1, b = i ? 1 : -1, E = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (f = isNaN(e) ? 1 : 0, l = s) : (l = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -l)) < 1 && (l--, u *= 2), l + d >= 1 ? e += g / u : e += g * Math.pow(2, 1 - d), e * u >= 2 && (l++, u /= 2), l + d >= s ? (f = 0, l = s) : l + d >= 1 ? (f = (e * u - 1) * Math.pow(2, o), l = l + d) : (f = e * Math.pow(2, d - 1) * Math.pow(2, o), l = 0)); o >= 8; n[r + y] = f & 255, y += b, f /= 256, o -= 8)
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
      const m = new a(1), c = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(c, a.prototype), Object.setPrototypeOf(m, c), m.foo() === 42;
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
    const c = new a(m);
    return Object.setPrototypeOf(c, s.prototype), c;
  }
  function s(m, c, p) {
    if (typeof m == "number") {
      if (typeof c == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return b(m);
    }
    return d(m, c, p);
  }
  s.poolSize = 8192;
  function d(m, c, p) {
    if (typeof m == "string")
      return E(m, c);
    if (l.isView(m))
      return S(m);
    if (m == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m
      );
    if (Re(m, l) || m && Re(m.buffer, l) || typeof f < "u" && (Re(m, f) || m && Re(m.buffer, f)))
      return C(m, c, p);
    if (typeof m == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const v = m.valueOf && m.valueOf();
    if (v != null && v !== m)
      return s.from(v, c, p);
    const A = x(m);
    if (A) return A;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof m[Symbol.toPrimitive] == "function")
      return s.from(m[Symbol.toPrimitive]("string"), c, p);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m
    );
  }
  s.from = function(m, c, p) {
    return d(m, c, p);
  }, Object.setPrototypeOf(s.prototype, a.prototype), Object.setPrototypeOf(s, a);
  function g(m) {
    if (typeof m != "number")
      throw new TypeError('"size" argument must be of type number');
    if (m < 0)
      throw new RangeError('The value "' + m + '" is invalid for option "size"');
  }
  function y(m, c, p) {
    return g(m), m <= 0 ? h(m) : c !== void 0 ? typeof p == "string" ? h(m).fill(c, p) : h(m).fill(c) : h(m);
  }
  s.alloc = function(m, c, p) {
    return y(m, c, p);
  };
  function b(m) {
    return g(m), h(m < 0 ? 0 : R(m) | 0);
  }
  s.allocUnsafe = function(m) {
    return b(m);
  }, s.allocUnsafeSlow = function(m) {
    return b(m);
  };
  function E(m, c) {
    if ((typeof c != "string" || c === "") && (c = "utf8"), !s.isEncoding(c))
      throw new TypeError("Unknown encoding: " + c);
    const p = Y(m, c) | 0;
    let v = h(p);
    const A = v.write(m, c);
    return A !== p && (v = v.slice(0, A)), v;
  }
  function T(m) {
    const c = m.length < 0 ? 0 : R(m.length) | 0, p = h(c);
    for (let v = 0; v < c; v += 1)
      p[v] = m[v] & 255;
    return p;
  }
  function S(m) {
    if (Re(m, a)) {
      const c = new a(m);
      return C(c.buffer, c.byteOffset, c.byteLength);
    }
    return T(m);
  }
  function C(m, c, p) {
    if (c < 0 || m.byteLength < c)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (m.byteLength < c + (p || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let v;
    return c === void 0 && p === void 0 ? v = new a(m) : p === void 0 ? v = new a(m, c) : v = new a(m, c, p), Object.setPrototypeOf(v, s.prototype), v;
  }
  function x(m) {
    if (s.isBuffer(m)) {
      const c = R(m.length) | 0, p = h(c);
      return p.length === 0 || m.copy(p, 0, 0, c), p;
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
  function U(m) {
    return +m != m && (m = 0), s.alloc(+m);
  }
  s.isBuffer = function(c) {
    return c != null && c._isBuffer === !0 && c !== s.prototype;
  }, s.compare = function(c, p) {
    if (Re(c, a) && (c = s.from(c, c.offset, c.byteLength)), Re(p, a) && (p = s.from(p, p.offset, p.byteLength)), !s.isBuffer(c) || !s.isBuffer(p))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (c === p) return 0;
    let v = c.length, A = p.length;
    for (let D = 0, F = Math.min(v, A); D < F; ++D)
      if (c[D] !== p[D]) {
        v = c[D], A = p[D];
        break;
      }
    return v < A ? -1 : A < v ? 1 : 0;
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
    const A = s.allocUnsafe(p);
    let D = 0;
    for (v = 0; v < c.length; ++v) {
      let F = c[v];
      if (Re(F, a))
        D + F.length > A.length ? (s.isBuffer(F) || (F = s.from(F)), F.copy(A, D)) : a.prototype.set.call(
          A,
          F,
          D
        );
      else if (s.isBuffer(F))
        F.copy(A, D);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      D += F.length;
    }
    return A;
  };
  function Y(m, c) {
    if (s.isBuffer(m))
      return m.length;
    if (l.isView(m) || Re(m, l))
      return m.byteLength;
    if (typeof m != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof m
      );
    const p = m.length, v = arguments.length > 2 && arguments[2] === !0;
    if (!v && p === 0) return 0;
    let A = !1;
    for (; ; )
      switch (c) {
        case "ascii":
        case "latin1":
        case "binary":
          return p;
        case "utf8":
        case "utf-8":
          return ft(m).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return p * 2;
        case "hex":
          return p >>> 1;
        case "base64":
          return Lt(m).length;
        default:
          if (A)
            return v ? -1 : ft(m).length;
          c = ("" + c).toLowerCase(), A = !0;
      }
  }
  s.byteLength = Y;
  function H(m, c, p) {
    let v = !1;
    if ((c === void 0 || c < 0) && (c = 0), c > this.length || ((p === void 0 || p > this.length) && (p = this.length), p <= 0) || (p >>>= 0, c >>>= 0, p <= c))
      return "";
    for (m || (m = "utf8"); ; )
      switch (m) {
        case "hex":
          return He(this, c, p);
        case "utf8":
        case "utf-8":
          return Q(this, c, p);
        case "ascii":
          return Xe(this, c, p);
        case "latin1":
        case "binary":
          return ce(this, c, p);
        case "base64":
          return Ne(this, c, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return it(this, c, p);
        default:
          if (v) throw new TypeError("Unknown encoding: " + m);
          m = (m + "").toLowerCase(), v = !0;
      }
  }
  s.prototype._isBuffer = !0;
  function se(m, c, p) {
    const v = m[c];
    m[c] = m[p], m[p] = v;
  }
  s.prototype.swap16 = function() {
    const c = this.length;
    if (c % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let p = 0; p < c; p += 2)
      se(this, p, p + 1);
    return this;
  }, s.prototype.swap32 = function() {
    const c = this.length;
    if (c % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let p = 0; p < c; p += 4)
      se(this, p, p + 3), se(this, p + 1, p + 2);
    return this;
  }, s.prototype.swap64 = function() {
    const c = this.length;
    if (c % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let p = 0; p < c; p += 8)
      se(this, p, p + 7), se(this, p + 1, p + 6), se(this, p + 2, p + 5), se(this, p + 3, p + 4);
    return this;
  }, s.prototype.toString = function() {
    const c = this.length;
    return c === 0 ? "" : arguments.length === 0 ? Q(this, 0, c) : H.apply(this, arguments);
  }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(c) {
    if (!s.isBuffer(c)) throw new TypeError("Argument must be a Buffer");
    return this === c ? !0 : s.compare(this, c) === 0;
  }, s.prototype.inspect = function() {
    let c = "";
    const p = n.INSPECT_MAX_BYTES;
    return c = this.toString("hex", 0, p).replace(/(.{2})/g, "$1 ").trim(), this.length > p && (c += " ... "), "<Buffer " + c + ">";
  }, i && (s.prototype[i] = s.prototype.inspect), s.prototype.compare = function(c, p, v, A, D) {
    if (Re(c, a) && (c = s.from(c, c.offset, c.byteLength)), !s.isBuffer(c))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof c
      );
    if (p === void 0 && (p = 0), v === void 0 && (v = c ? c.length : 0), A === void 0 && (A = 0), D === void 0 && (D = this.length), p < 0 || v > c.length || A < 0 || D > this.length)
      throw new RangeError("out of range index");
    if (A >= D && p >= v)
      return 0;
    if (A >= D)
      return -1;
    if (p >= v)
      return 1;
    if (p >>>= 0, v >>>= 0, A >>>= 0, D >>>= 0, this === c) return 0;
    let F = D - A, q = v - p;
    const re = Math.min(F, q), le = this.slice(A, D), ge = c.slice(p, v);
    for (let ve = 0; ve < re; ++ve)
      if (le[ve] !== ge[ve]) {
        F = le[ve], q = ge[ve];
        break;
      }
    return F < q ? -1 : q < F ? 1 : 0;
  };
  function P(m, c, p, v, A) {
    if (m.length === 0) return -1;
    if (typeof p == "string" ? (v = p, p = 0) : p > 2147483647 ? p = 2147483647 : p < -2147483648 && (p = -2147483648), p = +p, w(p) && (p = A ? 0 : m.length - 1), p < 0 && (p = m.length + p), p >= m.length) {
      if (A) return -1;
      p = m.length - 1;
    } else if (p < 0)
      if (A) p = 0;
      else return -1;
    if (typeof c == "string" && (c = s.from(c, v)), s.isBuffer(c))
      return c.length === 0 ? -1 : we(m, c, p, v, A);
    if (typeof c == "number")
      return c = c & 255, typeof a.prototype.indexOf == "function" ? A ? a.prototype.indexOf.call(m, c, p) : a.prototype.lastIndexOf.call(m, c, p) : we(m, [c], p, v, A);
    throw new TypeError("val must be string, number or Buffer");
  }
  function we(m, c, p, v, A) {
    let D = 1, F = m.length, q = c.length;
    if (v !== void 0 && (v = String(v).toLowerCase(), v === "ucs2" || v === "ucs-2" || v === "utf16le" || v === "utf-16le")) {
      if (m.length < 2 || c.length < 2)
        return -1;
      D = 2, F /= 2, q /= 2, p /= 2;
    }
    function re(ge, ve) {
      return D === 1 ? ge[ve] : ge.readUInt16BE(ve * D);
    }
    let le;
    if (A) {
      let ge = -1;
      for (le = p; le < F; le++)
        if (re(m, le) === re(c, ge === -1 ? 0 : le - ge)) {
          if (ge === -1 && (ge = le), le - ge + 1 === q) return ge * D;
        } else
          ge !== -1 && (le -= le - ge), ge = -1;
    } else
      for (p + q > F && (p = F - q), le = p; le >= 0; le--) {
        let ge = !0;
        for (let ve = 0; ve < q; ve++)
          if (re(m, le + ve) !== re(c, ve)) {
            ge = !1;
            break;
          }
        if (ge) return le;
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
  function J(m, c, p, v) {
    p = Number(p) || 0;
    const A = m.length - p;
    v ? (v = Number(v), v > A && (v = A)) : v = A;
    const D = c.length;
    v > D / 2 && (v = D / 2);
    let F;
    for (F = 0; F < v; ++F) {
      const q = parseInt(c.substr(F * 2, 2), 16);
      if (w(q)) return F;
      m[p + F] = q;
    }
    return F;
  }
  function K(m, c, p, v) {
    return ne(ft(c, m.length - p), m, p, v);
  }
  function W(m, c, p, v) {
    return ne(qt(c), m, p, v);
  }
  function de(m, c, p, v) {
    return ne(Lt(c), m, p, v);
  }
  function Ee(m, c, p, v) {
    return ne(Zt(c, m.length - p), m, p, v);
  }
  s.prototype.write = function(c, p, v, A) {
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
    const D = this.length - p;
    if ((v === void 0 || v > D) && (v = D), c.length > 0 && (v < 0 || p < 0) || p > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    A || (A = "utf8");
    let F = !1;
    for (; ; )
      switch (A) {
        case "hex":
          return J(this, c, p, v);
        case "utf8":
        case "utf-8":
          return K(this, c, p, v);
        case "ascii":
        case "latin1":
        case "binary":
          return W(this, c, p, v);
        case "base64":
          return de(this, c, p, v);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Ee(this, c, p, v);
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
  function Ne(m, c, p) {
    return c === 0 && p === m.length ? e.fromByteArray(m) : e.fromByteArray(m.slice(c, p));
  }
  function Q(m, c, p) {
    p = Math.min(m.length, p);
    const v = [];
    let A = c;
    for (; A < p; ) {
      const D = m[A];
      let F = null, q = D > 239 ? 4 : D > 223 ? 3 : D > 191 ? 2 : 1;
      if (A + q <= p) {
        let re, le, ge, ve;
        switch (q) {
          case 1:
            D < 128 && (F = D);
            break;
          case 2:
            re = m[A + 1], (re & 192) === 128 && (ve = (D & 31) << 6 | re & 63, ve > 127 && (F = ve));
            break;
          case 3:
            re = m[A + 1], le = m[A + 2], (re & 192) === 128 && (le & 192) === 128 && (ve = (D & 15) << 12 | (re & 63) << 6 | le & 63, ve > 2047 && (ve < 55296 || ve > 57343) && (F = ve));
            break;
          case 4:
            re = m[A + 1], le = m[A + 2], ge = m[A + 3], (re & 192) === 128 && (le & 192) === 128 && (ge & 192) === 128 && (ve = (D & 15) << 18 | (re & 63) << 12 | (le & 63) << 6 | ge & 63, ve > 65535 && ve < 1114112 && (F = ve));
        }
      }
      F === null ? (F = 65533, q = 1) : F > 65535 && (F -= 65536, v.push(F >>> 10 & 1023 | 55296), F = 56320 | F & 1023), v.push(F), A += q;
    }
    return je(v);
  }
  const Ae = 4096;
  function je(m) {
    const c = m.length;
    if (c <= Ae)
      return String.fromCharCode.apply(String, m);
    let p = "", v = 0;
    for (; v < c; )
      p += String.fromCharCode.apply(
        String,
        m.slice(v, v += Ae)
      );
    return p;
  }
  function Xe(m, c, p) {
    let v = "";
    p = Math.min(m.length, p);
    for (let A = c; A < p; ++A)
      v += String.fromCharCode(m[A] & 127);
    return v;
  }
  function ce(m, c, p) {
    let v = "";
    p = Math.min(m.length, p);
    for (let A = c; A < p; ++A)
      v += String.fromCharCode(m[A]);
    return v;
  }
  function He(m, c, p) {
    const v = m.length;
    (!c || c < 0) && (c = 0), (!p || p < 0 || p > v) && (p = v);
    let A = "";
    for (let D = c; D < p; ++D)
      A += N[m[D]];
    return A;
  }
  function it(m, c, p) {
    const v = m.slice(c, p);
    let A = "";
    for (let D = 0; D < v.length - 1; D += 2)
      A += String.fromCharCode(v[D] + v[D + 1] * 256);
    return A;
  }
  s.prototype.slice = function(c, p) {
    const v = this.length;
    c = ~~c, p = p === void 0 ? v : ~~p, c < 0 ? (c += v, c < 0 && (c = 0)) : c > v && (c = v), p < 0 ? (p += v, p < 0 && (p = 0)) : p > v && (p = v), p < c && (p = c);
    const A = this.subarray(c, p);
    return Object.setPrototypeOf(A, s.prototype), A;
  };
  function _e(m, c, p) {
    if (m % 1 !== 0 || m < 0) throw new RangeError("offset is not uint");
    if (m + c > p) throw new RangeError("Trying to access beyond buffer length");
  }
  s.prototype.readUintLE = s.prototype.readUIntLE = function(c, p, v) {
    c = c >>> 0, p = p >>> 0, v || _e(c, p, this.length);
    let A = this[c], D = 1, F = 0;
    for (; ++F < p && (D *= 256); )
      A += this[c + F] * D;
    return A;
  }, s.prototype.readUintBE = s.prototype.readUIntBE = function(c, p, v) {
    c = c >>> 0, p = p >>> 0, v || _e(c, p, this.length);
    let A = this[c + --p], D = 1;
    for (; p > 0 && (D *= 256); )
      A += this[c + --p] * D;
    return A;
  }, s.prototype.readUint8 = s.prototype.readUInt8 = function(c, p) {
    return c = c >>> 0, p || _e(c, 1, this.length), this[c];
  }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(c, p) {
    return c = c >>> 0, p || _e(c, 2, this.length), this[c] | this[c + 1] << 8;
  }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(c, p) {
    return c = c >>> 0, p || _e(c, 2, this.length), this[c] << 8 | this[c + 1];
  }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(c, p) {
    return c = c >>> 0, p || _e(c, 4, this.length), (this[c] | this[c + 1] << 8 | this[c + 2] << 16) + this[c + 3] * 16777216;
  }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(c, p) {
    return c = c >>> 0, p || _e(c, 4, this.length), this[c] * 16777216 + (this[c + 1] << 16 | this[c + 2] << 8 | this[c + 3]);
  }, s.prototype.readBigUInt64LE = L(function(c) {
    c = c >>> 0, Ge(c, "offset");
    const p = this[c], v = this[c + 7];
    (p === void 0 || v === void 0) && Se(c, this.length - 8);
    const A = p + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + this[++c] * 2 ** 24, D = this[++c] + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + v * 2 ** 24;
    return BigInt(A) + (BigInt(D) << BigInt(32));
  }), s.prototype.readBigUInt64BE = L(function(c) {
    c = c >>> 0, Ge(c, "offset");
    const p = this[c], v = this[c + 7];
    (p === void 0 || v === void 0) && Se(c, this.length - 8);
    const A = p * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + this[++c], D = this[++c] * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + v;
    return (BigInt(A) << BigInt(32)) + BigInt(D);
  }), s.prototype.readIntLE = function(c, p, v) {
    c = c >>> 0, p = p >>> 0, v || _e(c, p, this.length);
    let A = this[c], D = 1, F = 0;
    for (; ++F < p && (D *= 256); )
      A += this[c + F] * D;
    return D *= 128, A >= D && (A -= Math.pow(2, 8 * p)), A;
  }, s.prototype.readIntBE = function(c, p, v) {
    c = c >>> 0, p = p >>> 0, v || _e(c, p, this.length);
    let A = p, D = 1, F = this[c + --A];
    for (; A > 0 && (D *= 256); )
      F += this[c + --A] * D;
    return D *= 128, F >= D && (F -= Math.pow(2, 8 * p)), F;
  }, s.prototype.readInt8 = function(c, p) {
    return c = c >>> 0, p || _e(c, 1, this.length), this[c] & 128 ? (255 - this[c] + 1) * -1 : this[c];
  }, s.prototype.readInt16LE = function(c, p) {
    c = c >>> 0, p || _e(c, 2, this.length);
    const v = this[c] | this[c + 1] << 8;
    return v & 32768 ? v | 4294901760 : v;
  }, s.prototype.readInt16BE = function(c, p) {
    c = c >>> 0, p || _e(c, 2, this.length);
    const v = this[c + 1] | this[c] << 8;
    return v & 32768 ? v | 4294901760 : v;
  }, s.prototype.readInt32LE = function(c, p) {
    return c = c >>> 0, p || _e(c, 4, this.length), this[c] | this[c + 1] << 8 | this[c + 2] << 16 | this[c + 3] << 24;
  }, s.prototype.readInt32BE = function(c, p) {
    return c = c >>> 0, p || _e(c, 4, this.length), this[c] << 24 | this[c + 1] << 16 | this[c + 2] << 8 | this[c + 3];
  }, s.prototype.readBigInt64LE = L(function(c) {
    c = c >>> 0, Ge(c, "offset");
    const p = this[c], v = this[c + 7];
    (p === void 0 || v === void 0) && Se(c, this.length - 8);
    const A = this[c + 4] + this[c + 5] * 2 ** 8 + this[c + 6] * 2 ** 16 + (v << 24);
    return (BigInt(A) << BigInt(32)) + BigInt(p + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + this[++c] * 2 ** 24);
  }), s.prototype.readBigInt64BE = L(function(c) {
    c = c >>> 0, Ge(c, "offset");
    const p = this[c], v = this[c + 7];
    (p === void 0 || v === void 0) && Se(c, this.length - 8);
    const A = (p << 24) + // Overflow
    this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + this[++c];
    return (BigInt(A) << BigInt(32)) + BigInt(this[++c] * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + v);
  }), s.prototype.readFloatLE = function(c, p) {
    return c = c >>> 0, p || _e(c, 4, this.length), r.read(this, c, !0, 23, 4);
  }, s.prototype.readFloatBE = function(c, p) {
    return c = c >>> 0, p || _e(c, 4, this.length), r.read(this, c, !1, 23, 4);
  }, s.prototype.readDoubleLE = function(c, p) {
    return c = c >>> 0, p || _e(c, 8, this.length), r.read(this, c, !0, 52, 8);
  }, s.prototype.readDoubleBE = function(c, p) {
    return c = c >>> 0, p || _e(c, 8, this.length), r.read(this, c, !1, 52, 8);
  };
  function ye(m, c, p, v, A, D) {
    if (!s.isBuffer(m)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (c > A || c < D) throw new RangeError('"value" argument is out of bounds');
    if (p + v > m.length) throw new RangeError("Index out of range");
  }
  s.prototype.writeUintLE = s.prototype.writeUIntLE = function(c, p, v, A) {
    if (c = +c, p = p >>> 0, v = v >>> 0, !A) {
      const q = Math.pow(2, 8 * v) - 1;
      ye(this, c, p, v, q, 0);
    }
    let D = 1, F = 0;
    for (this[p] = c & 255; ++F < v && (D *= 256); )
      this[p + F] = c / D & 255;
    return p + v;
  }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(c, p, v, A) {
    if (c = +c, p = p >>> 0, v = v >>> 0, !A) {
      const q = Math.pow(2, 8 * v) - 1;
      ye(this, c, p, v, q, 0);
    }
    let D = v - 1, F = 1;
    for (this[p + D] = c & 255; --D >= 0 && (F *= 256); )
      this[p + D] = c / F & 255;
    return p + v;
  }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(c, p, v) {
    return c = +c, p = p >>> 0, v || ye(this, c, p, 1, 255, 0), this[p] = c & 255, p + 1;
  }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(c, p, v) {
    return c = +c, p = p >>> 0, v || ye(this, c, p, 2, 65535, 0), this[p] = c & 255, this[p + 1] = c >>> 8, p + 2;
  }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(c, p, v) {
    return c = +c, p = p >>> 0, v || ye(this, c, p, 2, 65535, 0), this[p] = c >>> 8, this[p + 1] = c & 255, p + 2;
  }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(c, p, v) {
    return c = +c, p = p >>> 0, v || ye(this, c, p, 4, 4294967295, 0), this[p + 3] = c >>> 24, this[p + 2] = c >>> 16, this[p + 1] = c >>> 8, this[p] = c & 255, p + 4;
  }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(c, p, v) {
    return c = +c, p = p >>> 0, v || ye(this, c, p, 4, 4294967295, 0), this[p] = c >>> 24, this[p + 1] = c >>> 16, this[p + 2] = c >>> 8, this[p + 3] = c & 255, p + 4;
  };
  function zt(m, c, p, v, A) {
    me(c, v, A, m, p, 7);
    let D = Number(c & BigInt(4294967295));
    m[p++] = D, D = D >> 8, m[p++] = D, D = D >> 8, m[p++] = D, D = D >> 8, m[p++] = D;
    let F = Number(c >> BigInt(32) & BigInt(4294967295));
    return m[p++] = F, F = F >> 8, m[p++] = F, F = F >> 8, m[p++] = F, F = F >> 8, m[p++] = F, p;
  }
  function I(m, c, p, v, A) {
    me(c, v, A, m, p, 7);
    let D = Number(c & BigInt(4294967295));
    m[p + 7] = D, D = D >> 8, m[p + 6] = D, D = D >> 8, m[p + 5] = D, D = D >> 8, m[p + 4] = D;
    let F = Number(c >> BigInt(32) & BigInt(4294967295));
    return m[p + 3] = F, F = F >> 8, m[p + 2] = F, F = F >> 8, m[p + 1] = F, F = F >> 8, m[p] = F, p + 8;
  }
  s.prototype.writeBigUInt64LE = L(function(c, p = 0) {
    return zt(this, c, p, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeBigUInt64BE = L(function(c, p = 0) {
    return I(this, c, p, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeIntLE = function(c, p, v, A) {
    if (c = +c, p = p >>> 0, !A) {
      const re = Math.pow(2, 8 * v - 1);
      ye(this, c, p, v, re - 1, -re);
    }
    let D = 0, F = 1, q = 0;
    for (this[p] = c & 255; ++D < v && (F *= 256); )
      c < 0 && q === 0 && this[p + D - 1] !== 0 && (q = 1), this[p + D] = (c / F >> 0) - q & 255;
    return p + v;
  }, s.prototype.writeIntBE = function(c, p, v, A) {
    if (c = +c, p = p >>> 0, !A) {
      const re = Math.pow(2, 8 * v - 1);
      ye(this, c, p, v, re - 1, -re);
    }
    let D = v - 1, F = 1, q = 0;
    for (this[p + D] = c & 255; --D >= 0 && (F *= 256); )
      c < 0 && q === 0 && this[p + D + 1] !== 0 && (q = 1), this[p + D] = (c / F >> 0) - q & 255;
    return p + v;
  }, s.prototype.writeInt8 = function(c, p, v) {
    return c = +c, p = p >>> 0, v || ye(this, c, p, 1, 127, -128), c < 0 && (c = 255 + c + 1), this[p] = c & 255, p + 1;
  }, s.prototype.writeInt16LE = function(c, p, v) {
    return c = +c, p = p >>> 0, v || ye(this, c, p, 2, 32767, -32768), this[p] = c & 255, this[p + 1] = c >>> 8, p + 2;
  }, s.prototype.writeInt16BE = function(c, p, v) {
    return c = +c, p = p >>> 0, v || ye(this, c, p, 2, 32767, -32768), this[p] = c >>> 8, this[p + 1] = c & 255, p + 2;
  }, s.prototype.writeInt32LE = function(c, p, v) {
    return c = +c, p = p >>> 0, v || ye(this, c, p, 4, 2147483647, -2147483648), this[p] = c & 255, this[p + 1] = c >>> 8, this[p + 2] = c >>> 16, this[p + 3] = c >>> 24, p + 4;
  }, s.prototype.writeInt32BE = function(c, p, v) {
    return c = +c, p = p >>> 0, v || ye(this, c, p, 4, 2147483647, -2147483648), c < 0 && (c = 4294967295 + c + 1), this[p] = c >>> 24, this[p + 1] = c >>> 16, this[p + 2] = c >>> 8, this[p + 3] = c & 255, p + 4;
  }, s.prototype.writeBigInt64LE = L(function(c, p = 0) {
    return zt(this, c, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), s.prototype.writeBigInt64BE = L(function(c, p = 0) {
    return I(this, c, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function _(m, c, p, v, A, D) {
    if (p + v > m.length) throw new RangeError("Index out of range");
    if (p < 0) throw new RangeError("Index out of range");
  }
  function B(m, c, p, v, A) {
    return c = +c, p = p >>> 0, A || _(m, c, p, 4), r.write(m, c, p, v, 23, 4), p + 4;
  }
  s.prototype.writeFloatLE = function(c, p, v) {
    return B(this, c, p, !0, v);
  }, s.prototype.writeFloatBE = function(c, p, v) {
    return B(this, c, p, !1, v);
  };
  function k(m, c, p, v, A) {
    return c = +c, p = p >>> 0, A || _(m, c, p, 8), r.write(m, c, p, v, 52, 8), p + 8;
  }
  s.prototype.writeDoubleLE = function(c, p, v) {
    return k(this, c, p, !0, v);
  }, s.prototype.writeDoubleBE = function(c, p, v) {
    return k(this, c, p, !1, v);
  }, s.prototype.copy = function(c, p, v, A) {
    if (!s.isBuffer(c)) throw new TypeError("argument should be a Buffer");
    if (v || (v = 0), !A && A !== 0 && (A = this.length), p >= c.length && (p = c.length), p || (p = 0), A > 0 && A < v && (A = v), A === v || c.length === 0 || this.length === 0) return 0;
    if (p < 0)
      throw new RangeError("targetStart out of bounds");
    if (v < 0 || v >= this.length) throw new RangeError("Index out of range");
    if (A < 0) throw new RangeError("sourceEnd out of bounds");
    A > this.length && (A = this.length), c.length - p < A - v && (A = c.length - p + v);
    const D = A - v;
    return this === c && typeof a.prototype.copyWithin == "function" ? this.copyWithin(p, v, A) : a.prototype.set.call(
      c,
      this.subarray(v, A),
      p
    ), D;
  }, s.prototype.fill = function(c, p, v, A) {
    if (typeof c == "string") {
      if (typeof p == "string" ? (A = p, p = 0, v = this.length) : typeof v == "string" && (A = v, v = this.length), A !== void 0 && typeof A != "string")
        throw new TypeError("encoding must be a string");
      if (typeof A == "string" && !s.isEncoding(A))
        throw new TypeError("Unknown encoding: " + A);
      if (c.length === 1) {
        const F = c.charCodeAt(0);
        (A === "utf8" && F < 128 || A === "latin1") && (c = F);
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
      const F = s.isBuffer(c) ? c : s.from(c, A), q = F.length;
      if (q === 0)
        throw new TypeError('The value "' + c + '" is invalid for argument "value"');
      for (D = 0; D < v - p; ++D)
        this[D + p] = F[D % q];
    }
    return this;
  };
  const ee = {};
  function Oe(m, c, p) {
    ee[m] = class extends p {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: c.apply(this, arguments),
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
  Oe(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(m) {
      return m ? `${m} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Oe(
    "ERR_INVALID_ARG_TYPE",
    function(m, c) {
      return `The "${m}" argument must be of type number. Received type ${typeof c}`;
    },
    TypeError
  ), Oe(
    "ERR_OUT_OF_RANGE",
    function(m, c, p) {
      let v = `The value of "${m}" is out of range.`, A = p;
      return Number.isInteger(p) && Math.abs(p) > 2 ** 32 ? A = ae(String(p)) : typeof p == "bigint" && (A = String(p), (p > BigInt(2) ** BigInt(32) || p < -(BigInt(2) ** BigInt(32))) && (A = ae(A)), A += "n"), v += ` It must be ${c}. Received ${A}`, v;
    },
    RangeError
  );
  function ae(m) {
    let c = "", p = m.length;
    const v = m[0] === "-" ? 1 : 0;
    for (; p >= v + 4; p -= 3)
      c = `_${m.slice(p - 3, p)}${c}`;
    return `${m.slice(0, p)}${c}`;
  }
  function Me(m, c, p) {
    Ge(c, "offset"), (m[c] === void 0 || m[c + p] === void 0) && Se(c, m.length - (p + 1));
  }
  function me(m, c, p, v, A, D) {
    if (m > p || m < c) {
      const F = typeof c == "bigint" ? "n" : "";
      let q;
      throw c === 0 || c === BigInt(0) ? q = `>= 0${F} and < 2${F} ** ${(D + 1) * 8}${F}` : q = `>= -(2${F} ** ${(D + 1) * 8 - 1}${F}) and < 2 ** ${(D + 1) * 8 - 1}${F}`, new ee.ERR_OUT_OF_RANGE("value", q, m);
    }
    Me(v, A, D);
  }
  function Ge(m, c) {
    if (typeof m != "number")
      throw new ee.ERR_INVALID_ARG_TYPE(c, "number", m);
  }
  function Se(m, c, p) {
    throw Math.floor(m) !== m ? (Ge(m, p), new ee.ERR_OUT_OF_RANGE("offset", "an integer", m)) : c < 0 ? new ee.ERR_BUFFER_OUT_OF_BOUNDS() : new ee.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${c}`,
      m
    );
  }
  const De = /[^+/0-9A-Za-z-_]/g;
  function mn(m) {
    if (m = m.split("=")[0], m = m.trim().replace(De, ""), m.length < 2) return "";
    for (; m.length % 4 !== 0; )
      m = m + "=";
    return m;
  }
  function ft(m, c) {
    c = c || 1 / 0;
    let p;
    const v = m.length;
    let A = null;
    const D = [];
    for (let F = 0; F < v; ++F) {
      if (p = m.charCodeAt(F), p > 55295 && p < 57344) {
        if (!A) {
          if (p > 56319) {
            (c -= 3) > -1 && D.push(239, 191, 189);
            continue;
          } else if (F + 1 === v) {
            (c -= 3) > -1 && D.push(239, 191, 189);
            continue;
          }
          A = p;
          continue;
        }
        if (p < 56320) {
          (c -= 3) > -1 && D.push(239, 191, 189), A = p;
          continue;
        }
        p = (A - 55296 << 10 | p - 56320) + 65536;
      } else A && (c -= 3) > -1 && D.push(239, 191, 189);
      if (A = null, p < 128) {
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
  function qt(m) {
    const c = [];
    for (let p = 0; p < m.length; ++p)
      c.push(m.charCodeAt(p) & 255);
    return c;
  }
  function Zt(m, c) {
    let p, v, A;
    const D = [];
    for (let F = 0; F < m.length && !((c -= 2) < 0); ++F)
      p = m.charCodeAt(F), v = p >> 8, A = p % 256, D.push(A), D.push(v);
    return D;
  }
  function Lt(m) {
    return e.toByteArray(mn(m));
  }
  function ne(m, c, p, v) {
    let A;
    for (A = 0; A < v && !(A + p >= c.length || A >= m.length); ++A)
      c[A + p] = m[A];
    return A;
  }
  function Re(m, c) {
    return m instanceof c || m != null && m.constructor != null && m.constructor.name != null && m.constructor.name === c.name;
  }
  function w(m) {
    return m !== m;
  }
  const N = function() {
    const m = "0123456789abcdef", c = new Array(256);
    for (let p = 0; p < 16; ++p) {
      const v = p * 16;
      for (let A = 0; A < 16; ++A)
        c[v + A] = m[p] + m[A];
    }
    return c;
  }();
  function L(m) {
    return typeof BigInt > "u" ? $ : m;
  }
  function $() {
    throw new Error("BigInt not supported");
  }
})(et);
const ei = et.Buffer, zc = et.Blob, qc = et.BlobOptions, vl = et.Buffer, Xc = et.File, Hc = et.FileOptions, Yc = et.INSPECT_MAX_BYTES, Zc = et.SlowBuffer, Kc = et.TranscodeEncoding, Jc = et.atob, Qc = et.btoa, ef = et.constants, tf = et.isAscii, nf = et.isUtf8, rf = et.kMaxLength, of = et.kStringMaxLength, sf = et.resolveObjectURL, af = et.transcode, lf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Blob: zc,
  BlobOptions: qc,
  Buffer: vl,
  File: Xc,
  FileOptions: Hc,
  INSPECT_MAX_BYTES: Yc,
  SlowBuffer: Zc,
  TranscodeEncoding: Kc,
  atob: Jc,
  btoa: Qc,
  constants: ef,
  default: ei,
  isAscii: tf,
  isUtf8: nf,
  kMaxLength: rf,
  kStringMaxLength: of,
  resolveObjectURL: sf,
  transcode: af
}, Symbol.toStringTag, { value: "Module" })), uf = /* @__PURE__ */ Hu(lf);
var bl = {}, uo = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(n, e) {
  var r = uf, i = r.Buffer;
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
var cf = uo.exports, Io = cf.Buffer, as = Io.isEncoding || function(n) {
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
function ff(n) {
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
function hf(n) {
  var e = ff(n);
  if (typeof e != "string" && (Io.isEncoding === as || !as(n))) throw new Error("Unknown encoding: " + n);
  return e || n;
}
bl.StringDecoder = kr;
function kr(n) {
  this.encoding = hf(n);
  var e;
  switch (this.encoding) {
    case "utf16le":
      this.text = wf, this.end = yf, e = 4;
      break;
    case "utf8":
      this.fillLast = mf, e = 4;
      break;
    case "base64":
      this.text = vf, this.end = bf, e = 3;
      break;
    default:
      this.write = _f, this.end = Tf;
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
kr.prototype.end = Ef;
kr.prototype.text = gf;
kr.prototype.fillLast = function(n) {
  if (this.lastNeed <= n.length)
    return n.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  n.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, n.length), this.lastNeed -= n.length;
};
function Ci(n) {
  return n <= 127 ? 0 : n >> 5 === 6 ? 2 : n >> 4 === 14 ? 3 : n >> 3 === 30 ? 4 : n >> 6 === 2 ? -1 : -2;
}
function pf(n, e, r) {
  var i = e.length - 1;
  if (i < r) return 0;
  var o = Ci(e[i]);
  return o >= 0 ? (o > 0 && (n.lastNeed = o - 1), o) : --i < r || o === -2 ? 0 : (o = Ci(e[i]), o >= 0 ? (o > 0 && (n.lastNeed = o - 2), o) : --i < r || o === -2 ? 0 : (o = Ci(e[i]), o >= 0 ? (o > 0 && (o === 2 ? o = 0 : n.lastNeed = o - 3), o) : 0));
}
function df(n, e, r) {
  if ((e[0] & 192) !== 128)
    return n.lastNeed = 0, "�";
  if (n.lastNeed > 1 && e.length > 1) {
    if ((e[1] & 192) !== 128)
      return n.lastNeed = 1, "�";
    if (n.lastNeed > 2 && e.length > 2 && (e[2] & 192) !== 128)
      return n.lastNeed = 2, "�";
  }
}
function mf(n) {
  var e = this.lastTotal - this.lastNeed, r = df(this, n);
  if (r !== void 0) return r;
  if (this.lastNeed <= n.length)
    return n.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  n.copy(this.lastChar, e, 0, n.length), this.lastNeed -= n.length;
}
function gf(n, e) {
  var r = pf(this, n, e);
  if (!this.lastNeed) return n.toString("utf8", e);
  this.lastTotal = r;
  var i = n.length - (r - this.lastNeed);
  return n.copy(this.lastChar, 0, i), n.toString("utf8", e, i);
}
function Ef(n) {
  var e = n && n.length ? this.write(n) : "";
  return this.lastNeed ? e + "�" : e;
}
function wf(n, e) {
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
function yf(n) {
  var e = n && n.length ? this.write(n) : "";
  if (this.lastNeed) {
    var r = this.lastTotal - this.lastNeed;
    return e + this.lastChar.toString("utf16le", 0, r);
  }
  return e;
}
function vf(n, e) {
  var r = (n.length - e) % 3;
  return r === 0 ? n.toString("base64", e) : (this.lastNeed = 3 - r, this.lastTotal = 3, r === 1 ? this.lastChar[0] = n[n.length - 1] : (this.lastChar[0] = n[n.length - 2], this.lastChar[1] = n[n.length - 1]), n.toString("base64", e, n.length - r));
}
function bf(n) {
  var e = n && n.length ? this.write(n) : "";
  return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e;
}
function _f(n) {
  return n.toString(this.encoding);
}
function Tf(n) {
  return n && n.length ? this.write(n) : "";
}
function _l(n, e, r) {
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
const Nf = (n) => "/remote.php/" + n, Tl = (n, e) => If() + Nf(n), If = () => window.location.protocol + "//" + window.location.host + Af();
function Af() {
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
/*! @license DOMPurify 3.4.12 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.12/LICENSE */
function ls(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var r = 0, i = Array(e); r < e; r++) i[r] = n[r];
  return i;
}
function Of(n) {
  if (Array.isArray(n)) return n;
}
function Sf(n, e) {
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
function Rf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cf(n, e) {
  return Of(n) || Sf(n, e) || Lf(n, e) || Rf();
}
function Lf(n, e) {
  if (n) {
    if (typeof n == "string") return ls(n, e);
    var r = {}.toString.call(n).slice(8, -1);
    return r === "Object" && n.constructor && (r = n.constructor.name), r === "Map" || r === "Set" ? Array.from(n) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ls(n, e) : void 0;
  }
}
const Nl = Object.entries, us = Object.setPrototypeOf, xf = Object.isFrozen, Pf = Object.getPrototypeOf, Df = Object.getOwnPropertyDescriptor;
let ut = Object.freeze, ct = Object.seal, nr = Object.create, Il = typeof Reflect < "u" && Reflect, co = Il.apply, fo = Il.construct;
ut || (ut = function(e) {
  return e;
});
ct || (ct = function(e) {
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
const Qn = Je(Array.prototype.forEach), $f = Je(Array.prototype.lastIndexOf), cs = Je(Array.prototype.pop), er = Je(Array.prototype.push), kf = Je(Array.prototype.splice), Tn = Array.isArray, Ir = Je(String.prototype.toLowerCase), Li = Je(String.prototype.toString), fs = Je(String.prototype.match), wr = Je(String.prototype.replace), hs = Je(String.prototype.indexOf), Ff = Je(String.prototype.trim), Mf = Je(Number.prototype.toString), Uf = Je(Boolean.prototype.toString), ps = typeof BigInt > "u" ? null : Je(BigInt.prototype.toString), ds = typeof Symbol > "u" ? null : Je(Symbol.prototype.toString), st = Je(Object.prototype.hasOwnProperty), yr = Je(Object.prototype.toString), ot = Je(RegExp.prototype.test), Dn = Bf(TypeError);
function Je(n) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      i[o - 1] = arguments[o];
    return co(n, e, i);
  };
}
function Bf(n) {
  return function() {
    for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
      r[i] = arguments[i];
    return fo(n, r);
  };
}
function be(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ir;
  if (us && us(n, null), !Tn(e))
    return n;
  let i = e.length;
  for (; i--; ) {
    let o = e[i];
    if (typeof o == "string") {
      const a = r(o);
      a !== o && (xf(e) || (e[i] = a), o = a);
    }
    n[o] = !0;
  }
  return n;
}
function jf(n) {
  for (let e = 0; e < n.length; e++)
    st(n, e) || (n[e] = null);
  return n;
}
function bt(n) {
  const e = nr(null);
  for (const i of Nl(n)) {
    var r = Cf(i, 2);
    const o = r[0], a = r[1];
    st(n, o) && (Tn(a) ? e[o] = jf(a) : a && typeof a == "object" && a.constructor === Object ? e[o] = bt(a) : e[o] = a);
  }
  return e;
}
function Gf(n) {
  switch (typeof n) {
    case "string":
      return n;
    case "number":
      return Mf(n);
    case "boolean":
      return Uf(n);
    case "bigint":
      return ps ? ps(n) : "0";
    case "symbol":
      return ds ? ds(n) : "Symbol()";
    case "undefined":
      return yr(n);
    case "function":
    case "object": {
      if (n === null)
        return yr(n);
      const e = n, r = tn(e, "toString");
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
function tn(n, e) {
  for (; n !== null; ) {
    const i = Df(n, e);
    if (i) {
      if (i.get)
        return Je(i.get);
      if (typeof i.value == "function")
        return Je(i.value);
    }
    n = Pf(n);
  }
  function r() {
    return null;
  }
  return r;
}
function Wf(n) {
  try {
    return ot(n, ""), !0;
  } catch {
    return !1;
  }
}
const ms = ut(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), xi = ut(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Pi = ut(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Vf = ut(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Di = ut(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), zf = ut(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), gs = ut(["#text"]), Es = ut(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), $i = ut(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ws = ut(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Hr = ut(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), qf = ct(/{{[\w\W]*|^[\w\W]*}}/g), Xf = ct(/<%[\w\W]*|^[\w\W]*%>/g), Hf = ct(/\${[\w\W]*/g), Yf = ct(/^data-[\-\w.\u00B7-\uFFFF]+$/), Zf = ct(/^aria-[\-\w]+$/), ys = ct(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Kf = ct(/^(?:\w+script|data):/i), Jf = ct(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Qf = ct(/^html$/i), eh = ct(/^[a-z][.\w]*(-[.\w]+)+$/i), vs = ct(/<[/\w!]/g), bs = ct(/<[/\w]/g), th = ct(/<\/no(script|embed|frames)/i), nh = ct(/\/>/i), xt = {
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
}, rh = function() {
  return typeof window > "u" ? null : window;
}, ih = function(e, r) {
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
}, _s = function() {
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
}, yn = function(e, r, i, o) {
  return st(e, r) && Tn(e[r]) ? be(o.base ? bt(o.base) : {}, e[r], o.transform) : i;
};
function Al() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : rh();
  const e = (z) => Al(z);
  if (e.version = "3.4.12", e.removed = [], !n || !n.document || n.document.nodeType !== xt.document || !n.Element)
    return e.isSupported = !1, e;
  let r = n.document;
  const i = r, o = i.currentScript;
  n.DocumentFragment;
  const a = n.HTMLTemplateElement, l = n.Node, f = n.Element, u = n.NodeFilter, h = n.NamedNodeMap;
  h === void 0 && (n.NamedNodeMap || n.MozNamedAttrMap), n.HTMLFormElement;
  const s = n.DOMParser, d = n.trustedTypes, g = f.prototype, y = tn(g, "cloneNode"), b = tn(g, "remove"), E = tn(g, "nextSibling"), T = tn(g, "childNodes"), S = tn(g, "parentNode"), C = tn(g, "shadowRoot"), x = tn(g, "attributes"), R = l && l.prototype ? tn(l.prototype, "nodeType") : null, U = l && l.prototype ? tn(l.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const z = r.createElement("template");
    z.content && z.content.ownerDocument && (r = z.content.ownerDocument);
  }
  let Y, H = "", se, P = !1, we = 0;
  const J = function() {
    if (we > 0)
      throw Dn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, K = function(O) {
    J(), we++;
    try {
      return Y.createHTML(O);
    } finally {
      we--;
    }
  }, W = function(O) {
    J(), we++;
    try {
      return Y.createScriptURL(O);
    } finally {
      we--;
    }
  }, de = function() {
    return P || (se = ih(d, o), P = !0), se;
  }, Ee = r, Ne = Ee.implementation, Q = Ee.createNodeIterator, Ae = Ee.createDocumentFragment, je = Ee.getElementsByTagName, Xe = i.importNode;
  let ce = _s();
  e.isSupported = typeof Nl == "function" && typeof S == "function" && Ne && Ne.createHTMLDocument !== void 0;
  const He = qf, it = Xf, _e = Hf, ye = Yf, zt = Zf, I = Kf, _ = Jf, B = eh;
  let k = ys, ee = null;
  const Oe = be({}, [...ms, ...xi, ...Pi, ...Di, ...gs]);
  let ae = null;
  const Me = be({}, [...Es, ...$i, ...ws, ...Hr]);
  let me = Object.seal(nr(null, {
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
  })), Ge = null, Se = null;
  const De = Object.seal(nr(null, {
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
  let mn = !0, ft = !0, qt = !1, Zt = !0, Lt = !1, ne = !0, Re = !1, w = !1, N = null, L = null, $ = !1, m = !1, c = !1, p = !1, v = !0, A = !1;
  const D = "user-content-";
  let F = !0, q = !1, re = {}, le = null;
  const ge = be({}, [
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
  let ve = null;
  const zn = be({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ei = null;
  const Bo = be({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Fr = "http://www.w3.org/1998/Math/MathML", Mr = "http://www.w3.org/2000/svg", Kt = "http://www.w3.org/1999/xhtml";
  let qn = Kt, wi = !1, yi = null;
  const mu = be({}, [Fr, Mr, Kt], Li), jo = ut(["mi", "mo", "mn", "ms", "mtext"]);
  let vi = be({}, jo);
  const Go = ut(["annotation-xml"]);
  let bi = be({}, Go);
  const gu = be({}, ["title", "style", "font", "a", "script"]);
  let mr = null;
  const Eu = ["application/xhtml+xml", "text/html"], wu = "text/html";
  let $e = null, Xn = null;
  const yu = r.createElement("form"), Wo = function(O) {
    return O instanceof RegExp || O instanceof Function;
  }, _i = function() {
    let O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Xn && Xn === O)
      return;
    (!O || typeof O != "object") && (O = {}), O = bt(O), mr = // eslint-disable-next-line unicorn/prefer-includes
    Eu.indexOf(O.PARSER_MEDIA_TYPE) === -1 ? wu : O.PARSER_MEDIA_TYPE, $e = mr === "application/xhtml+xml" ? Li : Ir, ee = yn(O, "ALLOWED_TAGS", Oe, {
      transform: $e
    }), ae = yn(O, "ALLOWED_ATTR", Me, {
      transform: $e
    }), yi = yn(O, "ALLOWED_NAMESPACES", mu, {
      transform: Li
    }), Ei = yn(O, "ADD_URI_SAFE_ATTR", Bo, {
      transform: $e,
      base: Bo
    }), ve = yn(O, "ADD_DATA_URI_TAGS", zn, {
      transform: $e,
      base: zn
    }), le = yn(O, "FORBID_CONTENTS", ge, {
      transform: $e
    }), Ge = yn(O, "FORBID_TAGS", bt({}), {
      transform: $e
    }), Se = yn(O, "FORBID_ATTR", bt({}), {
      transform: $e
    }), re = st(O, "USE_PROFILES") ? O.USE_PROFILES && typeof O.USE_PROFILES == "object" ? bt(O.USE_PROFILES) : O.USE_PROFILES : !1, mn = O.ALLOW_ARIA_ATTR !== !1, ft = O.ALLOW_DATA_ATTR !== !1, qt = O.ALLOW_UNKNOWN_PROTOCOLS || !1, Zt = O.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Lt = O.SAFE_FOR_TEMPLATES || !1, ne = O.SAFE_FOR_XML !== !1, Re = O.WHOLE_DOCUMENT || !1, m = O.RETURN_DOM || !1, c = O.RETURN_DOM_FRAGMENT || !1, p = O.RETURN_TRUSTED_TYPE || !1, $ = O.FORCE_BODY || !1, v = O.SANITIZE_DOM !== !1, A = O.SANITIZE_NAMED_PROPS || !1, F = O.KEEP_CONTENT !== !1, q = O.IN_PLACE || !1, k = Wf(O.ALLOWED_URI_REGEXP) ? O.ALLOWED_URI_REGEXP : ys, qn = typeof O.NAMESPACE == "string" ? O.NAMESPACE : Kt, vi = st(O, "MATHML_TEXT_INTEGRATION_POINTS") && O.MATHML_TEXT_INTEGRATION_POINTS && typeof O.MATHML_TEXT_INTEGRATION_POINTS == "object" ? bt(O.MATHML_TEXT_INTEGRATION_POINTS) : be({}, jo), bi = st(O, "HTML_INTEGRATION_POINTS") && O.HTML_INTEGRATION_POINTS && typeof O.HTML_INTEGRATION_POINTS == "object" ? bt(O.HTML_INTEGRATION_POINTS) : be({}, Go);
    const M = st(O, "CUSTOM_ELEMENT_HANDLING") && O.CUSTOM_ELEMENT_HANDLING && typeof O.CUSTOM_ELEMENT_HANDLING == "object" ? bt(O.CUSTOM_ELEMENT_HANDLING) : nr(null);
    if (me = nr(null), st(M, "tagNameCheck") && Wo(M.tagNameCheck) && (me.tagNameCheck = M.tagNameCheck), st(M, "attributeNameCheck") && Wo(M.attributeNameCheck) && (me.attributeNameCheck = M.attributeNameCheck), st(M, "allowCustomizedBuiltInElements") && typeof M.allowCustomizedBuiltInElements == "boolean" && (me.allowCustomizedBuiltInElements = M.allowCustomizedBuiltInElements), ct(me), Lt && (ft = !1), c && (m = !0), re && (ee = be({}, gs), ae = nr(null), re.html === !0 && (be(ee, ms), be(ae, Es)), re.svg === !0 && (be(ee, xi), be(ae, $i), be(ae, Hr)), re.svgFilters === !0 && (be(ee, Pi), be(ae, $i), be(ae, Hr)), re.mathMl === !0 && (be(ee, Di), be(ae, ws), be(ae, Hr))), De.tagCheck = null, De.attributeCheck = null, st(O, "ADD_TAGS") && (typeof O.ADD_TAGS == "function" ? De.tagCheck = O.ADD_TAGS : Tn(O.ADD_TAGS) && (ee === Oe && (ee = bt(ee)), be(ee, O.ADD_TAGS, $e))), st(O, "ADD_ATTR") && (typeof O.ADD_ATTR == "function" ? De.attributeCheck = O.ADD_ATTR : Tn(O.ADD_ATTR) && (ae === Me && (ae = bt(ae)), be(ae, O.ADD_ATTR, $e))), st(O, "ADD_URI_SAFE_ATTR") && Tn(O.ADD_URI_SAFE_ATTR) && be(Ei, O.ADD_URI_SAFE_ATTR, $e), st(O, "FORBID_CONTENTS") && Tn(O.FORBID_CONTENTS) && (le === ge && (le = bt(le)), be(le, O.FORBID_CONTENTS, $e)), st(O, "ADD_FORBID_CONTENTS") && Tn(O.ADD_FORBID_CONTENTS) && (le === ge && (le = bt(le)), be(le, O.ADD_FORBID_CONTENTS, $e)), F && (ee["#text"] = !0), Re && be(ee, ["html", "head", "body"]), ee.table && (be(ee, ["tbody"]), delete Ge.tbody), O.TRUSTED_TYPES_POLICY) {
      if (typeof O.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Dn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof O.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Dn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const G = Y;
      Y = O.TRUSTED_TYPES_POLICY;
      try {
        H = K("");
      } catch (te) {
        throw Y = G, te;
      }
    } else O.TRUSTED_TYPES_POLICY === null ? (Y = void 0, H = "") : (Y === void 0 && (Y = de()), Y && typeof H == "string" && (H = K("")));
    ut && ut(O), Xn = O;
  }, Vo = be({}, [...xi, ...Pi, ...Vf]), zo = be({}, [...Di, ...zf]), vu = function(O, M, G) {
    return M.namespaceURI === Kt ? O === "svg" : M.namespaceURI === Fr ? O === "svg" && (G === "annotation-xml" || vi[G]) : !!Vo[O];
  }, bu = function(O, M, G) {
    return M.namespaceURI === Kt ? O === "math" : M.namespaceURI === Mr ? O === "math" && bi[G] : !!zo[O];
  }, _u = function(O, M, G) {
    return M.namespaceURI === Mr && !bi[G] || M.namespaceURI === Fr && !vi[G] ? !1 : !zo[O] && (gu[O] || !Vo[O]);
  }, Tu = function(O) {
    let M = S(O);
    (!M || !M.tagName) && (M = {
      namespaceURI: qn,
      tagName: "template"
    });
    const G = Ir(O.tagName), te = Ir(M.tagName);
    return yi[O.namespaceURI] ? O.namespaceURI === Mr ? vu(G, M, te) : O.namespaceURI === Fr ? bu(G, M, te) : O.namespaceURI === Kt ? _u(G, M, te) : !!(mr === "application/xhtml+xml" && yi[O.namespaceURI]) : !1;
  }, gn = function(O) {
    er(e.removed, {
      element: O
    });
    try {
      S(O).removeChild(O);
    } catch {
      if (b(O), !S(O))
        throw Dn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Ur = function(O) {
    Ti(O);
    const M = T(O);
    if (M) {
      const te = [];
      Qn(M, (ue) => {
        er(te, ue);
      }), Qn(te, (ue) => {
        try {
          b(ue);
        } catch {
        }
      });
    }
    const G = x(O);
    if (G)
      for (let te = G.length - 1; te >= 0; --te) {
        const ue = G[te], fe = ue && ue.name;
        if (typeof fe == "string")
          try {
            O.removeAttribute(fe);
          } catch {
          }
      }
  }, Pn = function(O, M) {
    try {
      er(e.removed, {
        attribute: M.getAttributeNode(O),
        from: M
      });
    } catch {
      er(e.removed, {
        attribute: null,
        from: M
      });
    }
    if (M.removeAttribute(O), O === "is")
      if (m || c)
        try {
          gn(M);
        } catch {
        }
      else
        try {
          M.setAttribute(O, "");
        } catch {
        }
  }, Nu = function(O) {
    const M = x(O);
    if (M)
      for (let G = M.length - 1; G >= 0; --G) {
        const te = M[G], ue = te && te.name;
        if (!(typeof ue != "string" || ae[$e(ue)]))
          try {
            O.removeAttribute(ue);
          } catch {
          }
      }
  }, Ti = function(O) {
    const M = [O];
    for (; M.length > 0; ) {
      const G = M.pop();
      (R ? R(G) : G.nodeType) === xt.element && Nu(G);
      const ue = T(G);
      if (ue)
        for (let fe = ue.length - 1; fe >= 0; --fe)
          M.push(ue[fe]);
    }
  }, Iu = function(O) {
    if (!ne)
      return;
    const M = [O];
    for (; M.length > 0; ) {
      const G = M.pop(), te = R ? R(G) : G.nodeType;
      if (te === xt.processingInstruction || te === xt.comment && ot(bs, G.data)) {
        try {
          b(G);
        } catch {
        }
        continue;
      }
      if (te === xt.element) {
        const fe = G, Ue = $e(U ? U(G) : G.nodeName);
        try {
          fe.hasAttribute && fe.hasAttribute("patchsrc") && fe.removeAttribute("patchsrc"), fe.hasAttribute && fe.hasAttribute("for") && Ue !== "label" && Ue !== "output" && fe.removeAttribute("for");
        } catch {
        }
      }
      const ue = T(G);
      if (ue)
        for (let fe = ue.length - 1; fe >= 0; --fe)
          M.push(ue[fe]);
    }
  }, qo = function(O) {
    let M = null, G = null;
    if ($)
      O = "<remove></remove>" + O;
    else {
      const fe = fs(O, /^[\r\n\t ]+/);
      G = fe && fe[0];
    }
    mr === "application/xhtml+xml" && qn === Kt && (O = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + O + "</body></html>");
    const te = Y ? K(O) : O;
    if (qn === Kt)
      try {
        M = new s().parseFromString(te, mr);
      } catch {
      }
    if (!M || !M.documentElement) {
      M = Ne.createDocument(qn, "template", null);
      try {
        M.documentElement.innerHTML = wi ? H : te;
      } catch {
      }
    }
    const ue = M.body || M.documentElement;
    return O && G && ue.insertBefore(r.createTextNode(G), ue.childNodes[0] || null), qn === Kt ? je.call(M, Re ? "html" : "body")[0] : Re ? M.documentElement : ue;
  }, Xo = function(O) {
    return Q.call(
      O.ownerDocument || O,
      O,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, Br = function(O) {
    return O = wr(O, He, " "), O = wr(O, it, " "), O = wr(O, _e, " "), O;
  }, Ni = function(O) {
    var M;
    O.normalize();
    const G = Q.call(
      O.ownerDocument || O,
      O,
      // eslint-disable-next-line no-bitwise
      u.SHOW_TEXT | u.SHOW_COMMENT | u.SHOW_CDATA_SECTION | u.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let te = G.nextNode();
    for (; te; )
      te.data = Br(te.data), te = G.nextNode();
    const ue = (M = O.querySelectorAll) === null || M === void 0 ? void 0 : M.call(O, "template");
    ue && Qn(ue, (fe) => {
      Hn(fe.content) && Ni(fe.content);
    });
  }, jr = function(O) {
    const M = U ? U(O) : null;
    return typeof M != "string" || $e(M) !== "form" ? !1 : typeof O.nodeName != "string" || typeof O.textContent != "string" || typeof O.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    O.attributes !== x(O) || typeof O.removeAttribute != "function" || typeof O.setAttribute != "function" || typeof O.namespaceURI != "string" || typeof O.insertBefore != "function" || typeof O.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    O.nodeType !== R(O) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    O.childNodes !== T(O);
  }, Hn = function(O) {
    if (!R || typeof O != "object" || O === null)
      return !1;
    try {
      return R(O) === xt.documentFragment;
    } catch {
      return !1;
    }
  }, gr = function(O) {
    if (!R || typeof O != "object" || O === null)
      return !1;
    try {
      return typeof R(O) == "number";
    } catch {
      return !1;
    }
  };
  function Jt(z, O, M) {
    z.length !== 0 && Qn(z, (G) => {
      G.call(e, O, M, Xn);
    });
  }
  const Au = function(O, M) {
    return !!(ne && O.hasChildNodes() && !gr(O.firstElementChild) && ot(vs, O.textContent) && ot(vs, O.innerHTML) || ne && O.namespaceURI === Kt && M === "style" && gr(O.firstElementChild) || O.nodeType === xt.processingInstruction || ne && O.nodeType === xt.comment && ot(bs, O.data));
  }, Ou = function(O, M) {
    if (!Ge[M] && Zo(M) && (me.tagNameCheck instanceof RegExp && ot(me.tagNameCheck, M) || me.tagNameCheck instanceof Function && me.tagNameCheck(M)))
      return !1;
    if (F && !le[M]) {
      const G = S(O), te = T(O);
      if (te && G) {
        const ue = te.length;
        for (let fe = ue - 1; fe >= 0; --fe) {
          const Ue = q ? te[fe] : y(te[fe], !0);
          G.insertBefore(Ue, E(O));
        }
      }
    }
    return gn(O), !0;
  }, Ho = function(O, M) {
    if (Jt(ce.beforeSanitizeElements, O, null), O !== M && S(O) === null)
      return !0;
    if (jr(O))
      return gn(O), !0;
    const G = $e(U ? U(O) : O.nodeName);
    if (Jt(ce.uponSanitizeElement, O, {
      tagName: G,
      allowedTags: ee
    }), O !== M && S(O) === null)
      return !0;
    if (Au(O, G))
      return gn(O), !0;
    if (Ge[G] || !(De.tagCheck instanceof Function && De.tagCheck(G)) && !ee[G]) {
      const ue = Ou(O, G);
      return ue === !1 && Jt(ce.afterSanitizeElements, O, null), ue;
    }
    if ((R ? R(O) : O.nodeType) === xt.element && !Tu(O) || (G === "noscript" || G === "noembed" || G === "noframes") && ot(th, O.innerHTML))
      return gn(O), !0;
    if (Lt && O.nodeType === xt.text) {
      const ue = Br(O.textContent);
      O.textContent !== ue && (er(e.removed, {
        element: O.cloneNode()
      }), O.textContent = ue);
    }
    return Jt(ce.afterSanitizeElements, O, null), !1;
  }, Yo = function(O, M, G) {
    if (Se[M] || ne && M === "patchsrc" || ne && M === "for" && O !== "label" && O !== "output" || v && (M === "id" || M === "name") && (G in r || G in yu))
      return !1;
    const te = ae[M] || De.attributeCheck instanceof Function && De.attributeCheck(M, O);
    if (!(ft && ot(ye, M))) {
      if (!(mn && ot(zt, M))) {
        if (te) {
          if (!Ei[M]) {
            if (!ot(k, wr(G, _, ""))) {
              if (!((M === "src" || M === "xlink:href" || M === "href") && O !== "script" && hs(G, "data:") === 0 && ve[O])) {
                if (!(qt && !ot(I, wr(G, _, "")))) {
                  if (G)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Zo(O) && (me.tagNameCheck instanceof RegExp && ot(me.tagNameCheck, O) || me.tagNameCheck instanceof Function && me.tagNameCheck(O)) && (me.attributeNameCheck instanceof RegExp && ot(me.attributeNameCheck, M) || me.attributeNameCheck instanceof Function && me.attributeNameCheck(M, O)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          M === "is" && me.allowCustomizedBuiltInElements && (me.tagNameCheck instanceof RegExp && ot(me.tagNameCheck, G) || me.tagNameCheck instanceof Function && me.tagNameCheck(G)))
        ) return !1;
      }
    }
    return !0;
  }, Su = be({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Zo = function(O) {
    return !Su[Ir(O)] && ot(B, O);
  }, Ru = function(O, M, G, te) {
    if (Y && typeof d == "object" && typeof d.getAttributeType == "function" && !G)
      switch (d.getAttributeType(O, M)) {
        case "TrustedHTML":
          return K(te);
        case "TrustedScriptURL":
          return W(te);
      }
    return te;
  }, Cu = function(O, M, G, te) {
    try {
      G ? O.setAttributeNS(G, M, te) : O.setAttribute(M, te), jr(O) ? gn(O) : cs(e.removed);
    } catch {
      Pn(M, O);
    }
  }, Ko = function(O) {
    Jt(ce.beforeSanitizeAttributes, O, null);
    const M = O.attributes;
    if (!M || jr(O))
      return;
    const G = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ae,
      forceKeepAttr: void 0
    };
    let te = M.length;
    const ue = $e(O.nodeName);
    for (; te--; ) {
      const fe = M[te], Ue = fe.name, ht = fe.namespaceURI, Xt = fe.value, At = $e(Ue), Ht = Xt;
      let yt = Ue === "value" ? Ht : Ff(Ht);
      if (G.attrName = At, G.attrValue = yt, G.keepAttr = !0, G.forceKeepAttr = void 0, Jt(ce.uponSanitizeAttribute, O, G), yt = G.attrValue, A && (At === "id" || At === "name") && hs(yt, D) !== 0 && (Pn(Ue, O), yt = D + yt), ne && ot(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, yt)) {
        Pn(Ue, O);
        continue;
      }
      if (At === "attributename" && fs(yt, "href")) {
        Pn(Ue, O);
        continue;
      }
      if (!G.forceKeepAttr) {
        if (!G.keepAttr) {
          Pn(Ue, O);
          continue;
        }
        if (!Zt && ot(nh, yt)) {
          Pn(Ue, O);
          continue;
        }
        if (Lt && (yt = Br(yt)), !Yo(ue, At, yt)) {
          Pn(Ue, O);
          continue;
        }
        yt = Ru(ue, At, ht, yt), yt !== Ht && Cu(O, Ue, ht, yt);
      }
    }
    Jt(ce.afterSanitizeAttributes, O, null);
  }, Gr = function(O) {
    let M = null;
    const G = Xo(O);
    for (Jt(ce.beforeSanitizeShadowDOM, O, null); M = G.nextNode(); )
      if (Jt(ce.uponSanitizeShadowNode, M, null), Ho(M, O), Ko(M), Hn(M.content) && Gr(M.content), (R ? R(M) : M.nodeType) === xt.element) {
        const ue = C(M);
        Hn(ue) && (Ii(ue), Gr(ue));
      }
    Jt(ce.afterSanitizeShadowDOM, O, null);
  }, Ii = function(O) {
    const M = [{
      node: O,
      shadow: null
    }];
    for (; M.length > 0; ) {
      const G = M.pop();
      if (G.shadow) {
        Gr(G.shadow);
        continue;
      }
      const te = G.node, fe = (R ? R(te) : te.nodeType) === xt.element, Ue = T(te);
      if (Ue)
        for (let ht = Ue.length - 1; ht >= 0; --ht)
          M.push({
            node: Ue[ht],
            shadow: null
          });
      if (fe) {
        const ht = U ? U(te) : null;
        if (typeof ht == "string" && $e(ht) === "template") {
          const Xt = te.content;
          Hn(Xt) && M.push({
            node: Xt,
            shadow: null
          });
        }
      }
      if (fe) {
        const ht = C(te);
        Hn(ht) && M.push({
          node: null,
          shadow: ht
        }, {
          node: ht,
          shadow: null
        });
      }
    }
  };
  return e.sanitize = function(z) {
    let O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, M = null, G = null, te = null, ue = null;
    if (wi = !z, wi && (z = "<!-->"), typeof z != "string" && !gr(z) && (z = Gf(z), typeof z != "string"))
      throw Dn("dirty is not a string, aborting");
    if (!e.isSupported)
      return z;
    w ? (ee = N, ae = L) : _i(O), (ce.uponSanitizeElement.length > 0 || ce.uponSanitizeAttribute.length > 0) && (ee = bt(ee)), ce.uponSanitizeAttribute.length > 0 && (ae = bt(ae)), e.removed = [];
    const fe = q && typeof z != "string" && gr(z);
    if (fe) {
      Iu(z);
      const At = U ? U(z) : z.nodeName;
      if (typeof At == "string") {
        const Ht = $e(At);
        if (!ee[Ht] || Ge[Ht])
          throw Ur(z), Dn("root node is forbidden and cannot be sanitized in-place");
      }
      if (jr(z))
        throw Ur(z), Dn("root node is clobbered and cannot be sanitized in-place");
      try {
        Ii(z);
      } catch (Ht) {
        throw Ur(z), Ht;
      }
    } else if (gr(z))
      M = qo("<!---->"), G = M.ownerDocument.importNode(z, !0), G.nodeType === xt.element && G.nodeName === "BODY" || G.nodeName === "HTML" ? M = G : M.appendChild(G), Ii(G);
    else {
      if (!m && !Lt && !Re && // eslint-disable-next-line unicorn/prefer-includes
      z.indexOf("<") === -1)
        return Y && p ? K(z) : z;
      if (M = qo(z), !M)
        return m ? null : p ? H : "";
    }
    M && $ && gn(M.firstChild);
    const Ue = fe ? z : M, ht = Xo(Ue);
    try {
      for (; te = ht.nextNode(); )
        Ho(te, Ue), Ko(te), Hn(te.content) && Gr(te.content);
    } catch (At) {
      throw fe && (Ur(z), Qn(e.removed, (Ht) => {
        Ht.element && Ti(Ht.element);
      })), At;
    }
    if (fe)
      return Qn(e.removed, (At) => {
        At.element && Ti(At.element);
      }), Lt && Ni(z), z;
    if (m) {
      if (Lt && Ni(M), c)
        for (ue = Ae.call(M.ownerDocument); M.firstChild; )
          ue.appendChild(M.firstChild);
      else
        ue = M;
      return (ae.shadowroot || ae.shadowrootmode) && (ue = Xe.call(i, ue, !0)), ue;
    }
    let Xt = Re ? M.outerHTML : M.innerHTML;
    return Re && ee["!doctype"] && M.ownerDocument && M.ownerDocument.doctype && M.ownerDocument.doctype.name && ot(Qf, M.ownerDocument.doctype.name) && (Xt = "<!DOCTYPE " + M.ownerDocument.doctype.name + `>
` + Xt), Lt && (Xt = Br(Xt)), Y && p ? K(Xt) : Xt;
  }, e.setConfig = function() {
    let z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _i(z), w = !0, N = ee, L = ae;
  }, e.clearConfig = function() {
    Xn = null, w = !1, N = null, L = null, Y = se, H = "";
  }, e.isValidAttribute = function(z, O, M) {
    Xn || _i({});
    const G = $e(z), te = $e(O);
    return Yo(G, te, M);
  }, e.addHook = function(z, O) {
    typeof O == "function" && st(ce, z) && er(ce[z], O);
  }, e.removeHook = function(z, O) {
    if (st(ce, z)) {
      if (O !== void 0) {
        const M = $f(ce[z], O);
        return M === -1 ? void 0 : kf(ce[z], M, 1)[0];
      }
      return cs(ce[z]);
    }
  }, e.removeHooks = function(z) {
    st(ce, z) && (ce[z] = []);
  }, e.removeAllHooks = function() {
    ce = _s();
  }, e;
}
Al();
globalThis._nc_l10n_locale ?? (globalThis._nc_l10n_locale = typeof document < "u" && document.documentElement.dataset.locale || Intl.DateTimeFormat().resolvedOptions().locale.replaceAll(/-/g, "_"));
var ja;
globalThis._nc_l10n_language ?? (globalThis._nc_l10n_language = typeof document < "u" && document.documentElement.lang || (((ja = globalThis.navigator) == null ? void 0 : ja.language) ?? "en"));
globalThis._oc_l10n_registry_translations ?? (globalThis._oc_l10n_registry_translations = {});
globalThis._oc_l10n_registry_plural_functions ?? (globalThis._oc_l10n_registry_plural_functions = {});
class oh extends kc {
}
function sh() {
  return Be.registry ?? (Be.registry = new oh()), Be.registry;
}
const Ol = Object.freeze({
  DEFAULT: "default",
  HIDDEN: "hidden"
});
function Ts(n) {
  if (ah(n), Be.fileActions ?? (Be.fileActions = /* @__PURE__ */ new Map()), Be.fileActions.has(n.id)) {
    pl.error(`FileAction ${n.id} already registered`, { action: n });
    return;
  }
  Be.fileActions.set(n.id, n), sh().dispatchTypedEvent("register:action", new CustomEvent("register:action", { detail: n }));
}
function ah(n) {
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
  if (n.default && !Object.values(Ol).includes(n.default))
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
const Sl = Object.freeze({
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
let lh = class {
  constructor() {
    he(this, "_entries", []);
  }
  registerEntry(e) {
    this.validateEntry(e), e.category = e.category ?? Sl.CreateNew, this._entries.push(e);
  }
  unregisterEntry(e) {
    const r = typeof e == "string" ? this.getEntryIndex(e) : this.getEntryIndex(e.id);
    if (r === -1) {
      pl.warn("Entry not found, nothing removed", { entry: e, entries: this.getEntries() });
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
function uh() {
  return Be.newFileMenu ?? (Be.newFileMenu = new lh()), Be.newFileMenu;
}
function ch(n) {
  return uh().registerEntry(n);
}
/*!
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
function pr() {
  return _l("files_sharing", "isPublic", null) ?? document.querySelector('input#isPublic[type="hidden"][name="isPublic"][value="1"]') !== null;
}
function Rl() {
  var n;
  return _l("files_sharing", "sharingToken", null) ?? ((n = document.querySelector('input#sharingToken[type="hidden"]')) == null ? void 0 : n.value) ?? null;
}
/*! For license information please see index.js.LICENSE.txt */
var fh = { 2: (n) => {
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
    var f, u, h, s, d, g = l.indexOf(o), y = l.indexOf(a, g + 1), b = g;
    if (g >= 0 && y > 0) {
      for (f = [], h = l.length; b >= 0 && !d; ) b == g ? (f.push(b), g = l.indexOf(o, b + 1)) : f.length == 1 ? d = [f.pop(), y] : ((u = f.pop()) < h && (h = u, s = y), y = l.indexOf(a, b + 1)), b = g < y && g >= 0 ? g : y;
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
    for (var d = [], g = 0; g < h.length; g++) {
      var y = h[g];
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
      var g = d >= 0 ? arguments[d] : Tt.cwd();
      if (!o(g)) throw new TypeError("Arguments to path.resolve must be strings");
      g && (h = g + "/" + h, s = g.charAt(0) === "/");
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
    for (var g = d(h.split("/")), y = d(s.split("/")), b = Math.min(g.length, y.length), E = b, T = 0; T < b; T++) if (g[T] !== y[T]) {
      E = T;
      break;
    }
    var S = [];
    for (T = E; T < g.length; T++) S.push("..");
    return (S = S.concat(y.slice(E))).join("/");
  }, f._makeLong = function(h) {
    return h;
  }, f.dirname = function(h) {
    var s = u(h), d = s[0], g = s[1];
    return d || g ? (g && (g = g.substr(0, g.length - 1)), d + g) : ".";
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
      for (var d, g, y, b, E = s.length % 3, T = "", S = -1, C = s.length - E; ++S < C; ) d = s.charCodeAt(S) << 16, g = s.charCodeAt(++S) << 8, y = s.charCodeAt(++S), T += f.charAt((b = d + g + y) >> 18 & 63) + f.charAt(b >> 12 & 63) + f.charAt(b >> 6 & 63) + f.charAt(63 & b);
      return E == 2 ? (d = s.charCodeAt(S) << 8, g = s.charCodeAt(++S), T += f.charAt((b = d + g) >> 10) + f.charAt(b >> 4 & 63) + f.charAt(b << 2 & 63) + "=") : E == 1 && (b = s.charCodeAt(S), T += f.charAt(b >> 2) + f.charAt(b << 4 & 63) + "=="), T;
    }, decode: function(s) {
      var d = (s = String(s).replace(u, "")).length;
      d % 4 == 0 && (d = (s = s.replace(/==?$/, "")).length), (d % 4 == 1 || /[^+a-zA-Z0-9/]/.test(s)) && l("Invalid character: the string to be decoded is not correctly encoded.");
      for (var g, y, b = 0, E = "", T = -1; ++T < d; ) y = f.indexOf(s.charAt(T)), g = b % 4 ? 64 * g + y : y, b++ % 4 && (E += String.fromCharCode(255 & g >> (-2 * b & 6)));
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
    var R = x.pre, U = x.body, Y = x.post, H = R.split(",");
    H[H.length - 1] += "{" + U + "}";
    var se = d(Y);
    return Y.length && (H[H.length - 1] += se.shift(), H.push.apply(H, se)), C.push.apply(C, H), C;
  }
  function g(S) {
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
    var U = R.pre, Y = R.post.length ? T(R.post, !1) : [""];
    if (/\$$/.test(R.pre)) for (var H = 0; H < Y.length; H++) {
      var se = U + "{" + R.body + "}" + Y[H];
      x.push(se);
    }
    else {
      var P, we, J = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(R.body), K = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(R.body), W = J || K, de = R.body.indexOf(",") >= 0;
      if (!W && !de) return R.post.match(/,(?!,).*\}/) ? T(S = R.pre + "{" + R.body + l + R.post) : [S];
      if (W) P = R.body.split(/\.\./);
      else if ((P = d(R.body)).length === 1 && (P = T(P[0], !1).map(g)).length === 1) return Y.map(function(zt) {
        return R.pre + P[0] + zt;
      });
      if (W) {
        var Ee = h(P[0]), Ne = h(P[1]), Q = Math.max(P[0].length, P[1].length), Ae = P.length == 3 ? Math.abs(h(P[2])) : 1, je = b;
        Ne < Ee && (Ae *= -1, je = E);
        var Xe = P.some(y);
        we = [];
        for (var ce = Ee; je(ce, Ne); ce += Ae) {
          var He;
          if (K) (He = String.fromCharCode(ce)) === "\\" && (He = "");
          else if (He = String(ce), Xe) {
            var it = Q - He.length;
            if (it > 0) {
              var _e = new Array(it + 1).join("0");
              He = ce < 0 ? "-" + _e + He.slice(1) : _e + He;
            }
          }
          we.push(He);
        }
      } else {
        we = [];
        for (var ye = 0; ye < P.length; ye++) we.push.apply(we, T(P[ye], !1));
      }
      for (ye = 0; ye < we.length; ye++) for (H = 0; H < Y.length; H++) se = U + we[ye] + Y[H], (!C || W || se) && x.push(se);
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
      for (var s = i.bytesToWords(u), d = 8 * u.length, g = 1732584193, y = -271733879, b = -1732584194, E = 271733878, T = 0; T < s.length; T++) s[T] = 16711935 & (s[T] << 8 | s[T] >>> 24) | 4278255360 & (s[T] << 24 | s[T] >>> 8);
      s[d >>> 5] |= 128 << d % 32, s[14 + (d + 64 >>> 9 << 4)] = d;
      var S = f._ff, C = f._gg, x = f._hh, R = f._ii;
      for (T = 0; T < s.length; T += 16) {
        var U = g, Y = y, H = b, se = E;
        g = S(g, y, b, E, s[T + 0], 7, -680876936), E = S(E, g, y, b, s[T + 1], 12, -389564586), b = S(b, E, g, y, s[T + 2], 17, 606105819), y = S(y, b, E, g, s[T + 3], 22, -1044525330), g = S(g, y, b, E, s[T + 4], 7, -176418897), E = S(E, g, y, b, s[T + 5], 12, 1200080426), b = S(b, E, g, y, s[T + 6], 17, -1473231341), y = S(y, b, E, g, s[T + 7], 22, -45705983), g = S(g, y, b, E, s[T + 8], 7, 1770035416), E = S(E, g, y, b, s[T + 9], 12, -1958414417), b = S(b, E, g, y, s[T + 10], 17, -42063), y = S(y, b, E, g, s[T + 11], 22, -1990404162), g = S(g, y, b, E, s[T + 12], 7, 1804603682), E = S(E, g, y, b, s[T + 13], 12, -40341101), b = S(b, E, g, y, s[T + 14], 17, -1502002290), g = C(g, y = S(y, b, E, g, s[T + 15], 22, 1236535329), b, E, s[T + 1], 5, -165796510), E = C(E, g, y, b, s[T + 6], 9, -1069501632), b = C(b, E, g, y, s[T + 11], 14, 643717713), y = C(y, b, E, g, s[T + 0], 20, -373897302), g = C(g, y, b, E, s[T + 5], 5, -701558691), E = C(E, g, y, b, s[T + 10], 9, 38016083), b = C(b, E, g, y, s[T + 15], 14, -660478335), y = C(y, b, E, g, s[T + 4], 20, -405537848), g = C(g, y, b, E, s[T + 9], 5, 568446438), E = C(E, g, y, b, s[T + 14], 9, -1019803690), b = C(b, E, g, y, s[T + 3], 14, -187363961), y = C(y, b, E, g, s[T + 8], 20, 1163531501), g = C(g, y, b, E, s[T + 13], 5, -1444681467), E = C(E, g, y, b, s[T + 2], 9, -51403784), b = C(b, E, g, y, s[T + 7], 14, 1735328473), g = x(g, y = C(y, b, E, g, s[T + 12], 20, -1926607734), b, E, s[T + 5], 4, -378558), E = x(E, g, y, b, s[T + 8], 11, -2022574463), b = x(b, E, g, y, s[T + 11], 16, 1839030562), y = x(y, b, E, g, s[T + 14], 23, -35309556), g = x(g, y, b, E, s[T + 1], 4, -1530992060), E = x(E, g, y, b, s[T + 4], 11, 1272893353), b = x(b, E, g, y, s[T + 7], 16, -155497632), y = x(y, b, E, g, s[T + 10], 23, -1094730640), g = x(g, y, b, E, s[T + 13], 4, 681279174), E = x(E, g, y, b, s[T + 0], 11, -358537222), b = x(b, E, g, y, s[T + 3], 16, -722521979), y = x(y, b, E, g, s[T + 6], 23, 76029189), g = x(g, y, b, E, s[T + 9], 4, -640364487), E = x(E, g, y, b, s[T + 12], 11, -421815835), b = x(b, E, g, y, s[T + 15], 16, 530742520), g = R(g, y = x(y, b, E, g, s[T + 2], 23, -995338651), b, E, s[T + 0], 6, -198630844), E = R(E, g, y, b, s[T + 7], 10, 1126891415), b = R(b, E, g, y, s[T + 14], 15, -1416354905), y = R(y, b, E, g, s[T + 5], 21, -57434055), g = R(g, y, b, E, s[T + 12], 6, 1700485571), E = R(E, g, y, b, s[T + 3], 10, -1894986606), b = R(b, E, g, y, s[T + 10], 15, -1051523), y = R(y, b, E, g, s[T + 1], 21, -2054922799), g = R(g, y, b, E, s[T + 8], 6, 1873313359), E = R(E, g, y, b, s[T + 15], 10, -30611744), b = R(b, E, g, y, s[T + 6], 15, -1560198380), y = R(y, b, E, g, s[T + 13], 21, 1309151649), g = R(g, y, b, E, s[T + 4], 6, -145523070), E = R(E, g, y, b, s[T + 11], 10, -1120210379), b = R(b, E, g, y, s[T + 2], 15, 718787259), y = R(y, b, E, g, s[T + 9], 21, -343485551), g = g + U >>> 0, y = y + Y >>> 0, b = b + H >>> 0, E = E + se >>> 0;
      }
      return i.endian([g, y, b, E]);
    };
    f._ff = function(u, h, s, d, g, y, b) {
      var E = u + (h & s | ~h & d) + (g >>> 0) + b;
      return (E << y | E >>> 32 - y) + h;
    }, f._gg = function(u, h, s, d, g, y, b) {
      var E = u + (h & d | s & ~d) + (g >>> 0) + b;
      return (E << y | E >>> 32 - y) + h;
    }, f._hh = function(u, h, s, d, g, y, b) {
      var E = u + (h ^ s ^ d) + (g >>> 0) + b;
      return (E << y | E >>> 32 - y) + h;
    }, f._ii = function(u, h, s, d, g, y, b) {
      var E = u + (s ^ (h | ~d)) + (g >>> 0) + b;
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
  var g = [["#", "hash"], ["?", "query"], function(C, x) {
    return E(x.protocol) ? C.replace(/\\/g, "/") : C;
  }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]], y = { hash: 1, query: 1 };
  function b(C) {
    var x, R = (typeof window < "u" ? window : typeof Wr < "u" ? Wr : typeof self < "u" ? self : {}).location || {}, U = {}, Y = typeof (C = C || R);
    if (C.protocol === "blob:") U = new S(unescape(C.pathname), {});
    else if (Y === "string") for (x in U = new S(C, {}), y) delete U[x];
    else if (Y === "object") {
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
    var R, U = h.exec(C), Y = U[1] ? U[1].toLowerCase() : "", H = !!U[2], se = !!U[3], P = 0;
    return H ? se ? (R = U[2] + U[3] + U[4], P = U[2].length + U[3].length) : (R = U[2] + U[4], P = U[2].length) : se ? (R = U[3] + U[4], P = U[3].length) : R = U[4], Y === "file:" ? P >= 2 && (R = R.slice(2)) : E(Y) ? R = U[4] : Y ? H && (R = R.slice(2)) : P >= 2 && E(x.protocol) && (R = U[4]), { protocol: Y, slashes: H || E(Y), slashesCount: P, rest: R };
  }
  function S(C, x, R) {
    if (C = (C = d(C)).replace(l, ""), !(this instanceof S)) return new S(C, x, R);
    var U, Y, H, se, P, we, J = g.slice(), K = typeof x, W = this, de = 0;
    for (K !== "object" && K !== "string" && (R = x, x = null), R && typeof R != "function" && (R = o.parse), U = !(Y = T(C || "", x = b(x))).protocol && !Y.slashes, W.slashes = Y.slashes || U && x.slashes, W.protocol = Y.protocol || x.protocol || "", C = Y.rest, (Y.protocol === "file:" && (Y.slashesCount !== 2 || s.test(C)) || !Y.slashes && (Y.protocol || Y.slashesCount < 2 || !E(W.protocol))) && (J[3] = [/(.*)/, "pathname"]); de < J.length; de++) typeof (se = J[de]) != "function" ? (H = se[0], we = se[1], H != H ? W[we] = C : typeof H == "string" ? ~(P = H === "@" ? C.lastIndexOf(H) : C.indexOf(H)) && (typeof se[2] == "number" ? (W[we] = C.slice(0, P), C = C.slice(P + se[2])) : (W[we] = C.slice(P), C = C.slice(0, P))) : (P = H.exec(C)) && (W[we] = P[1], C = C.slice(0, P.index)), W[we] = W[we] || U && se[3] && x[we] || "", se[4] && (W[we] = W[we].toLowerCase())) : C = se(C, W);
    R && (W.query = R(W.query)), U && x.slashes && W.pathname.charAt(0) !== "/" && (W.pathname !== "" || x.pathname !== "") && (W.pathname = function(Ee, Ne) {
      if (Ee === "") return Ne;
      for (var Q = (Ne || "/").split("/").slice(0, -1).concat(Ee.split("/")), Ae = Q.length, je = Q[Ae - 1], Xe = !1, ce = 0; Ae--; ) Q[Ae] === "." ? Q.splice(Ae, 1) : Q[Ae] === ".." ? (Q.splice(Ae, 1), ce++) : ce && (Ae === 0 && (Xe = !0), Q.splice(Ae, 1), ce--);
      return Xe && Q.unshift(""), je !== "." && je !== ".." || Q.push(""), Q.join("/");
    }(W.pathname, x.pathname)), W.pathname.charAt(0) !== "/" && E(W.protocol) && (W.pathname = "/" + W.pathname), i(W.port, W.protocol) || (W.host = W.hostname, W.port = ""), W.username = W.password = "", W.auth && (~(P = W.auth.indexOf(":")) ? (W.username = W.auth.slice(0, P), W.username = encodeURIComponent(decodeURIComponent(W.username)), W.password = W.auth.slice(P + 1), W.password = encodeURIComponent(decodeURIComponent(W.password))) : W.username = encodeURIComponent(decodeURIComponent(W.auth)), W.auth = W.password ? W.username + ":" + W.password : W.username), W.origin = W.protocol !== "file:" && E(W.protocol) && W.host ? W.protocol + "//" + W.host : "null", W.href = W.toString();
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
          var Y = C === "pathname" ? "/" : "#";
          U[C] = x.charAt(0) !== Y ? Y + x : x;
        } else U[C] = x;
        break;
      case "username":
      case "password":
        U[C] = encodeURIComponent(x);
        break;
      case "auth":
        var H = x.indexOf(":");
        ~H ? (U.username = x.slice(0, H), U.username = encodeURIComponent(decodeURIComponent(U.username)), U.password = x.slice(H + 1), U.password = encodeURIComponent(decodeURIComponent(U.password))) : U.username = encodeURIComponent(decodeURIComponent(x));
    }
    for (var se = 0; se < g.length; se++) {
      var P = g[se];
      P[4] && (U[P[1]] = U[P[1]].toLowerCase());
    }
    return U.auth = U.password ? U.username + ":" + U.password : U.username, U.origin = U.protocol !== "file:" && E(U.protocol) && U.host ? U.protocol + "//" + U.host : "null", U.href = U.toString(), U;
  }, toString: function(C) {
    C && typeof C == "function" || (C = o.stringify);
    var x, R = this, U = R.host, Y = R.protocol;
    Y && Y.charAt(Y.length - 1) !== ":" && (Y += ":");
    var H = Y + (R.protocol && R.slashes || E(R.protocol) ? "//" : "");
    return R.username ? (H += R.username, R.password && (H += ":" + R.password), H += "@") : R.password ? (H += ":" + R.password, H += "@") : R.protocol !== "file:" && E(R.protocol) && !U && R.pathname !== "/" && (H += "@"), (U[U.length - 1] === ":" || u.test(R.hostname) && !R.port) && (U += ":"), H += U + R.pathname, (x = typeof R.query == "object" ? C(R.query) : R.query) && (H += x.charAt(0) !== "?" ? "?" + x : x), R.hash && (H += R.hash), H;
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
      if (d === null || (g = d, Function.toString.call(g).indexOf("[native code]") === -1)) return d;
      var g;
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
    }() ? Reflect.construct : function(g, y, b) {
      var E = [null];
      E.push.apply(E, y);
      var T = new (Function.bind.apply(g, E))();
      return b && o(T, b.prototype), T;
    }, i.apply(null, arguments);
  }
  function o(h, s) {
    return o = Object.setPrototypeOf || function(d, g) {
      return d.__proto__ = g, d;
    }, o(h, s);
  }
  function a(h) {
    return a = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, a(h);
  }
  var l = function(h) {
    function s(d) {
      var g;
      return function(y, b) {
        if (!(y instanceof b)) throw new TypeError("Cannot call a class as a function");
      }(this, s), (g = function(y, b) {
        return !b || e(b) !== "object" && typeof b != "function" ? function(E) {
          if (E === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return E;
        }(y) : b;
      }(this, a(s).call(this, d))).name = "ObjectPrototypeMutationError", g;
    }
    return function(d, g) {
      if (typeof g != "function" && g !== null) throw new TypeError("Super expression must either be null or a function");
      d.prototype = Object.create(g && g.prototype, { constructor: { value: d, writable: !0, configurable: !0 } }), g && o(d, g);
    }(s, h), s;
  }(r(Error));
  function f(h, s) {
    for (var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
    }, g = s.split("."), y = g.length, b = function(S) {
      var C = g[S];
      if (!h) return { v: void 0 };
      if (C === "+") {
        if (Array.isArray(h)) return { v: h.map(function(R, U) {
          var Y = g.slice(S + 1);
          return Y.length > 0 ? f(R, Y.join("."), d) : d(h, U, g, S);
        }) };
        var x = g.slice(0, S).join(".");
        throw new Error("Object at wildcard (".concat(x, ") is not an array"));
      }
      h = d(h, C, g, S);
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
      return f(h, s, function(g, y, b, E) {
        if (g === Reflect.getPrototypeOf({})) throw new l("Attempting to mutate Object.prototype");
        if (!g[y]) {
          var T = Number.isInteger(Number(b[E + 1])), S = b[E + 1] === "+";
          g[y] = T || S ? [] : {};
        }
        return u(b, E) && (g[y] = d), g[y];
      });
    } catch (g) {
      if (g instanceof l) throw g;
      return h;
    }
  }, get: function(h, s) {
    if (e(h) != "object" || h === null || s === void 0) return h;
    if (typeof s == "number") return h[s];
    try {
      return f(h, s, function(d, g) {
        return d[g];
      });
    } catch {
      return h;
    }
  }, has: function(h, s) {
    var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (e(h) != "object" || h === null || s === void 0) return !1;
    if (typeof s == "number") return s in h;
    try {
      var g = !1;
      return f(h, s, function(y, b, E, T) {
        if (!u(E, T)) return y && y[b];
        g = d.own ? y.hasOwnProperty(b) : b in y;
      }), g;
    } catch {
      return !1;
    }
  }, hasOwn: function(h, s, d) {
    return this.has(h, s, d || { own: !0 });
  }, isIn: function(h, s, d) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (e(h) != "object" || h === null || s === void 0) return !1;
    try {
      var y = !1, b = !1;
      return f(h, s, function(E, T, S, C) {
        return y = y || E === d || !!E && E[T] === d, b = u(S, C) && e(E) === "object" && T in E, E && E[T];
      }), g.validPath ? y && b : y;
    } catch {
      return !1;
    }
  }, ObjectPrototypeMutationError: l };
} }, Ns = {};
function Le(n) {
  var e = Ns[n];
  if (e !== void 0) return e.exports;
  var r = Ns[n] = { id: n, loaded: !1, exports: {} };
  return fh[n].call(r.exports, r, r.exports, Le), r.loaded = !0, r.exports;
}
Le.n = (n) => {
  var e = n && n.__esModule ? () => n.default : () => n;
  return Le.d(e, { a: e }), e;
}, Le.d = (n, e) => {
  for (var r in e) Le.o(e, r) && !Le.o(n, r) && Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
}, Le.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e), Le.nmd = (n) => (n.paths = [], n.children || (n.children = []), n);
var hh = Le(737), ph = Le.n(hh);
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
var dh = Le(47), ri = Le.n(dh);
const Is = "__PATH_SEPARATOR_POSIX__", As = "__PATH_SEPARATOR_WINDOWS__";
function ke(n) {
  try {
    const e = n.replace(/\//g, Is).replace(/\\\\/g, As);
    return encodeURIComponent(e).split(As).join("\\\\").split(Is).join("/");
  } catch (e) {
    throw new It(e, "Failed encoding path");
  }
}
function Os(n) {
  return n.startsWith("/") ? n : "/" + n;
}
function Lr(n) {
  let e = n;
  return e[0] !== "/" && (e = "/" + e), /^.+\/$/.test(e) && (e = e.substr(0, e.length - 1)), e;
}
function mh(n) {
  let e = new (ph())(n).pathname;
  return e.length <= 0 && (e = "/"), Lr(e);
}
function Fe() {
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
var gh = Le(542), vr = Le.n(gh);
function Ss(n, e) {
  const r = n.url.replace("//", ""), i = r.indexOf("/") == -1 ? "/" : r.slice(r.indexOf("/")), o = n.method ? n.method.toUpperCase() : "GET", a = !!/(^|,)\s*auth\s*($|,)/.test(e.qop) && "auth", l = `00000000${e.nc}`.slice(-8), f = function(g, y, b, E, T, S, C) {
    const x = C || vr()(`${y}:${b}:${E}`);
    return g && g.toLowerCase() === "md5-sess" ? vr()(`${x}:${T}:${S}`) : x;
  }(e.algorithm, e.username, e.realm, e.password, e.nonce, e.cnonce, e.ha1), u = vr()(`${o}:${i}`), h = a ? vr()(`${f}:${e.nonce}:${l}:${e.cnonce}:${a}:${u}`) : vr()(`${f}:${e.nonce}:${u}`), s = { username: e.username, realm: e.realm, nonce: e.nonce, uri: i, qop: a, response: h, nc: l, cnonce: e.cnonce, algorithm: e.algorithm, opaque: e.opaque }, d = [];
  for (const g in s) s[g] && (g === "qop" || g === "nc" || g === "algorithm" ? d.push(`${g}=${s[g]}`) : d.push(`${g}="${s[g]}"`));
  return `Digest ${d.join(", ")}`;
}
function Cl(n) {
  return (n.headers && n.headers.get("www-authenticate") || "").split(/\s/)[0].toLowerCase() === "digest";
}
var Eh = Le(101), Ll = Le.n(Eh);
function Rs(n) {
  return Ll().decode(n);
}
function Cs(n, e) {
  var r;
  return `Basic ${r = `${n}:${e}`, Ll().encode(r)}`;
}
const Ls = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : typeof window < "u" ? window : globalThis, wh = Ls.fetch.bind(Ls);
let Rt = function(n) {
  return n.Auto = "auto", n.Digest = "digest", n.None = "none", n.Password = "password", n.Token = "token", n;
}({}), Sn = function(n) {
  return n.DataTypeNoLength = "data-type-no-length", n.InvalidAuthType = "invalid-auth-type", n.InvalidOutputFormat = "invalid-output-format", n.LinkUnsupportedAuthType = "link-unsupported-auth", n.InvalidUpdateRange = "invalid-update-range", n.NotSupported = "not-supported", n;
}({});
function xl(n, e, r, i, o) {
  switch (n.authType) {
    case Rt.Auto:
      e && r && (n.headers.Authorization = Cs(e, r));
      break;
    case Rt.Digest:
      n.digest = /* @__PURE__ */ function(l, f, u) {
        return { username: l, password: f, ha1: u, nc: 0, algorithm: "md5", hasDigestAuth: !1 };
      }(e, r, o);
      break;
    case Rt.None:
      break;
    case Rt.Password:
      n.headers.Authorization = Cs(e, r);
      break;
    case Rt.Token:
      n.headers.Authorization = `${(a = i).token_type} ${a.access_token}`;
      break;
    default:
      throw new It({ info: { code: Sn.InvalidAuthType } }, `Invalid auth type: ${n.authType}`);
  }
  var a;
}
Le(345), Le(800);
const xs = "@@HOTPATCHER", yh = () => {
};
function Fi(n) {
  return { original: n, methods: [n], final: !1 };
}
class vh {
  constructor() {
    this._configuration = { registry: {}, getEmptyAction: "null" }, this.__type__ = xs;
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
    if (!e || e.__type__ !== xs) throw new Error("Failed taking control of target HotPatcher instance: Invalid type or object");
    return Object.keys(e.configuration.registry).forEach((i) => {
      this.configuration.registry.hasOwnProperty(i) ? r && (this.configuration.registry[i] = Object.assign({}, e.configuration.registry[i])) : this.configuration.registry[i] = Object.assign({}, e.configuration.registry[i]);
    }), e._configuration = this.configuration, this;
  }
  execute(e) {
    const r = this.get(e) || yh;
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
  return Mi || (Mi = new vh()), Mi;
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
function Ps() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
  let i = null, o = [...e];
  for (; o.length > 0; ) {
    const a = o.shift();
    i = i ? Pl(i, a) : ii(a);
  }
  return i;
}
function Pl(n, e) {
  const r = ii(n);
  return Object.keys(e).forEach((i) => {
    r.hasOwnProperty(i) ? Array.isArray(e[i]) ? r[i] = Array.isArray(r[i]) ? [...r[i], ...e[i]] : [...e[i]] : typeof e[i] == "object" && e[i] ? r[i] = typeof r[i] == "object" && r[i] ? Pl(r[i], e[i]) : ii(e[i]) : r[i] = e[i] : r[i] = e[i];
  }), r;
}
function bh(n) {
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
Le(805);
const _h = typeof ArrayBuffer == "function", { toString: Th } = Object.prototype;
function Dl(n) {
  return _h && (n instanceof ArrayBuffer || Th.call(n) === "[object ArrayBuffer]");
}
function $l(n) {
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
const kl = Oo(function(n) {
  const e = n._digest;
  return delete n._digest, e.hasDigestAuth && (n = Ps(n, { headers: { Authorization: Ss(n, e) } })), mo(oi(n), function(r) {
    let i = !1;
    return o = function(l) {
      return i ? l : r;
    }, (a = function() {
      if (r.status == 401) return e.hasDigestAuth = function(l, f) {
        if (!Cl(l)) return !1;
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
        if (e.hasDigestAuth) return mo(oi(n = Ps(n, { headers: { Authorization: Ss(n, e) } })), function(l) {
          return l.status == 401 ? e.hasDigestAuth = !1 : e.nc++, i = !0, l;
        });
      }();
      e.nc++;
    }()) && a.then ? a.then(o) : o(a);
    var o, a;
  });
}), Nh = Oo(function(n, e) {
  return mo(oi(n), function(r) {
    return r.ok ? (e.authType = Rt.Password, r) : r.status == 401 && Cl(r) ? (e.authType = Rt.Digest, xl(e, e.username, e.password, void 0, void 0), n._digest = e.digest, kl(n)) : r;
  });
}), tt = Oo(function(n, e) {
  return e.authType === Rt.Auto ? Nh(n, e) : n._digest ? kl(n) : oi(n);
});
function nt(n, e, r) {
  const i = ii(n);
  return i.headers = po(e.headers, i.headers || {}, r.headers || {}), r.data !== void 0 && (i.data = r.data), r.signal && (i.signal = r.signal), e.httpAgent && (i.httpAgent = e.httpAgent), e.httpsAgent && (i.httpsAgent = e.httpsAgent), e.digest && (i._digest = e.digest), typeof e.withCredentials == "boolean" && (i.withCredentials = e.withCredentials), i;
}
function oi(n) {
  const e = Ao();
  return e.patchInline("request", (r) => e.patchInline("fetch", wh, r.url, function(i) {
    let o = {};
    const a = { method: i.method };
    if (i.headers && (o = po(o, i.headers)), i.data !== void 0) {
      const [l, f] = function(u) {
        if (typeof u == "string") return [u, {}];
        if ($l(u)) return [u, {}];
        if (Dl(u)) return [u, {}];
        if (u && typeof u == "object") return [JSON.stringify(u), { "content-type": "application/json" }];
        throw new Error("Unable to convert request body: Unexpected body type: " + typeof u);
      }(i.data);
      a.body = l, o = po(o, f);
    }
    return i.signal && (a.signal = i.signal), i.withCredentials && (a.credentials = "include"), a.headers = o, a;
  }(r)), n);
}
var Ih = Le(285);
const si = (n) => {
  if (typeof n != "string") throw new TypeError("invalid pattern");
  if (n.length > 65536) throw new TypeError("pattern is too long");
}, Ah = { "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", !0], "[:alpha:]": ["\\p{L}\\p{Nl}", !0], "[:ascii:]": ["\\x00-\\x7f", !1], "[:blank:]": ["\\p{Zs}\\t", !0], "[:cntrl:]": ["\\p{Cc}", !0], "[:digit:]": ["\\p{Nd}", !0], "[:graph:]": ["\\p{Z}\\p{C}", !0, !0], "[:lower:]": ["\\p{Ll}", !0], "[:print:]": ["\\p{C}", !0], "[:punct:]": ["\\p{P}", !0], "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", !0], "[:upper:]": ["\\p{Lu}", !0], "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", !0], "[:xdigit:]": ["A-Fa-f0-9", !1] }, br = (n) => n.replace(/[[\]\\-]/g, "\\$&"), Ds = (n) => n.join(""), Oh = (n, e) => {
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
          for (const [T, [S, C, x]] of Object.entries(Ah)) if (n.startsWith(T, a)) {
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
    return [(g = i[0].length === 2 ? i[0].slice(-1) : i[0], g.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")), !1, s - r, !1];
  var g;
  const y = "[" + (h ? "^" : "") + Ds(i) + "]", b = "[" + (h ? "" : "^") + Ds(o) + "]";
  return [i.length && o.length ? "(" + y + "|" + b + ")" : i.length ? y : b, f, s - r, !0];
}, Ar = function(n) {
  let { windowsPathsNoEscape: e = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return e ? n.replace(/\[([^\/\\])\]/g, "$1") : n.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
}, Sh = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), $s = (n) => Sh.has(n), Ui = "(?!\\.)", Rh = /* @__PURE__ */ new Set(["[", "."]), Ch = /* @__PURE__ */ new Set(["..", "."]), Lh = new Set("().*{}+?[]^$\\!"), So = "[^/]", ks = So + "*?", Fs = So + "+?";
var Qe, at, cn, Pe, Ze, Nn, Gn, In, on, Wn, Pr, Vn, Fl, An, ti, go, Ml;
const _t = class _t {
  constructor(e, r) {
    Ot(this, Vn);
    he(this, "type");
    Ot(this, Qe);
    Ot(this, at);
    Ot(this, cn, !1);
    Ot(this, Pe, []);
    Ot(this, Ze);
    Ot(this, Nn);
    Ot(this, Gn);
    Ot(this, In, !1);
    Ot(this, on);
    Ot(this, Wn);
    Ot(this, Pr, !1);
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.type = e, e && We(this, at, !0), We(this, Ze, r), We(this, Qe, X(this, Ze) ? X(X(this, Ze), Qe) : this), We(this, on, X(this, Qe) === this ? i : X(X(this, Qe), on)), We(this, Gn, X(this, Qe) === this ? [] : X(X(this, Qe), Gn)), e !== "!" || X(X(this, Qe), In) || X(this, Gn).push(this), We(this, Nn, X(this, Ze) ? X(X(this, Ze), Pe).length : 0);
  }
  get hasMagic() {
    if (X(this, at) !== void 0) return X(this, at);
    for (const e of X(this, Pe)) if (typeof e != "string" && (e.type || e.hasMagic)) return We(this, at, !0);
    return X(this, at);
  }
  toString() {
    return X(this, Wn) !== void 0 ? X(this, Wn) : this.type ? We(this, Wn, this.type + "(" + X(this, Pe).map((e) => String(e)).join("|") + ")") : We(this, Wn, X(this, Pe).map((e) => String(e)).join(""));
  }
  push() {
    for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
    for (const o of r) if (o !== "") {
      if (typeof o != "string" && !(o instanceof _t && X(o, Ze) === this)) throw new Error("invalid part: " + o);
      X(this, Pe).push(o);
    }
  }
  toJSON() {
    var r;
    const e = this.type === null ? X(this, Pe).slice().map((i) => typeof i == "string" ? i : i.toJSON()) : [this.type, ...X(this, Pe).map((i) => i.toJSON())];
    return this.isStart() && !this.type && e.unshift([]), this.isEnd() && (this === X(this, Qe) || X(X(this, Qe), In) && ((r = X(this, Ze)) == null ? void 0 : r.type) === "!") && e.push({}), e;
  }
  isStart() {
    var r;
    if (X(this, Qe) === this) return !0;
    if (!((r = X(this, Ze)) != null && r.isStart())) return !1;
    if (X(this, Nn) === 0) return !0;
    const e = X(this, Ze);
    for (let i = 0; i < X(this, Nn); i++) {
      const o = X(e, Pe)[i];
      if (!(o instanceof _t && o.type === "!")) return !1;
    }
    return !0;
  }
  isEnd() {
    var r, i, o;
    if (X(this, Qe) === this || ((r = X(this, Ze)) == null ? void 0 : r.type) === "!") return !0;
    if (!((i = X(this, Ze)) != null && i.isEnd())) return !1;
    if (!this.type) return (o = X(this, Ze)) == null ? void 0 : o.isEnd();
    const e = X(this, Ze) ? X(X(this, Ze), Pe).length : 0;
    return X(this, Nn) === e - 1;
  }
  copyIn(e) {
    typeof e == "string" ? this.push(e) : this.push(e.clone(this));
  }
  clone(e) {
    const r = new _t(this.type, e);
    for (const i of X(this, Pe)) r.copyIn(i);
    return r;
  }
  static fromGlob(e) {
    var o;
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = new _t(null, void 0, r);
    return En(o = _t, An, ti).call(o, e, i, 0, r), i;
  }
  toMMPattern() {
    if (this !== X(this, Qe)) return X(this, Qe).toMMPattern();
    const e = this.toString(), [r, i, o, a] = this.toRegExpSource();
    if (!(o || X(this, at) || X(this, on).nocase && !X(this, on).nocaseMagicOnly && e.toUpperCase() !== e.toLowerCase())) return i;
    const l = (X(this, on).nocase ? "i" : "") + (a ? "u" : "");
    return Object.assign(new RegExp(`^${r}$`, l), { _src: r, _glob: e });
  }
  get options() {
    return X(this, on);
  }
  toRegExpSource(e) {
    var u;
    const r = e ?? !!X(this, on).dot;
    if (X(this, Qe) === this && En(this, Vn, Fl).call(this), !this.type) {
      const h = this.isStart() && this.isEnd(), s = X(this, Pe).map((y) => {
        var C;
        const [b, E, T, S] = typeof y == "string" ? En(C = _t, An, Ml).call(C, y, X(this, at), h) : y.toRegExpSource(e);
        return We(this, at, X(this, at) || T), We(this, cn, X(this, cn) || S), b;
      }).join("");
      let d = "";
      if (this.isStart() && typeof X(this, Pe)[0] == "string" && (X(this, Pe).length !== 1 || !Ch.has(X(this, Pe)[0]))) {
        const y = Rh, b = r && y.has(s.charAt(0)) || s.startsWith("\\.") && y.has(s.charAt(2)) || s.startsWith("\\.\\.") && y.has(s.charAt(4)), E = !r && !e && y.has(s.charAt(0));
        d = b ? "(?!(?:^|/)\\.\\.?(?:$|/))" : E ? Ui : "";
      }
      let g = "";
      return this.isEnd() && X(X(this, Qe), In) && ((u = X(this, Ze)) == null ? void 0 : u.type) === "!" && (g = "(?:$|\\/)"), [d + s + g, Ar(s), We(this, at, !!X(this, at)), X(this, cn)];
    }
    const i = this.type === "*" || this.type === "+", o = this.type === "!" ? "(?:(?!(?:" : "(?:";
    let a = En(this, Vn, go).call(this, r);
    if (this.isStart() && this.isEnd() && !a && this.type !== "!") {
      const h = this.toString();
      return We(this, Pe, [h]), this.type = null, We(this, at, void 0), [h, Ar(this.toString()), !1, !1];
    }
    let l = !i || e || r ? "" : En(this, Vn, go).call(this, !0);
    l === a && (l = ""), l && (a = `(?:${a})(?:${l})*?`);
    let f = "";
    return f = this.type === "!" && X(this, Pr) ? (this.isStart() && !r ? Ui : "") + Fs : o + a + (this.type === "!" ? "))" + (!this.isStart() || r || e ? "" : Ui) + ks + ")" : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && l ? ")" : this.type === "*" && l ? ")?" : `)${this.type}`), [f, Ar(a), We(this, at, !!X(this, at)), X(this, cn)];
  }
};
Qe = new WeakMap(), at = new WeakMap(), cn = new WeakMap(), Pe = new WeakMap(), Ze = new WeakMap(), Nn = new WeakMap(), Gn = new WeakMap(), In = new WeakMap(), on = new WeakMap(), Wn = new WeakMap(), Pr = new WeakMap(), Vn = new WeakSet(), Fl = function() {
  if (this !== X(this, Qe)) throw new Error("should only call on root");
  if (X(this, In)) return this;
  let e;
  for (this.toString(), We(this, In, !0); e = X(this, Gn).pop(); ) {
    if (e.type !== "!") continue;
    let r = e, i = X(r, Ze);
    for (; i; ) {
      for (let o = X(r, Nn) + 1; !i.type && o < X(i, Pe).length; o++) for (const a of X(e, Pe)) {
        if (typeof a == "string") throw new Error("string part in extglob AST??");
        a.copyIn(X(i, Pe)[o]);
      }
      r = i, i = X(r, Ze);
    }
  }
  return this;
}, An = new WeakSet(), ti = function(e, r, i, o) {
  var y, b;
  let a = !1, l = !1, f = -1, u = !1;
  if (r.type === null) {
    let E = i, T = "";
    for (; E < e.length; ) {
      const S = e.charAt(E++);
      if (a || S === "\\") a = !a, T += S;
      else if (l) E === f + 1 ? S !== "^" && S !== "!" || (u = !0) : S !== "]" || E === f + 2 && u || (l = !1), T += S;
      else if (S !== "[") if (o.noext || !$s(S) || e.charAt(E) !== "(") T += S;
      else {
        r.push(T), T = "";
        const C = new _t(S, r);
        E = En(y = _t, An, ti).call(y, e, C, E, o), r.push(C);
      }
      else l = !0, f = E, u = !1, T += S;
    }
    return r.push(T), E;
  }
  let h = i + 1, s = new _t(null, r);
  const d = [];
  let g = "";
  for (; h < e.length; ) {
    const E = e.charAt(h++);
    if (a || E === "\\") a = !a, g += E;
    else if (l) h === f + 1 ? E !== "^" && E !== "!" || (u = !0) : E !== "]" || h === f + 2 && u || (l = !1), g += E;
    else if (E !== "[") if ($s(E) && e.charAt(h) === "(") {
      s.push(g), g = "";
      const T = new _t(E, s);
      s.push(T), h = En(b = _t, An, ti).call(b, e, T, h, o);
    } else if (E !== "|") {
      if (E === ")") return g === "" && X(r, Pe).length === 0 && We(r, Pr, !0), s.push(g), g = "", r.push(...d, s), h;
      g += E;
    } else s.push(g), g = "", d.push(s), s = new _t(null, r);
    else l = !0, f = h, u = !1, g += E;
  }
  return r.type = null, We(r, at, void 0), We(r, Pe, [e.substring(i - 1)]), h;
}, go = function(e) {
  return X(this, Pe).map((r) => {
    if (typeof r == "string") throw new Error("string type in extglob ast??");
    const [i, o, a, l] = r.toRegExpSource(e);
    return We(this, cn, X(this, cn) || l), i;
  }).filter((r) => !(this.isStart() && this.isEnd() && !r)).join("|");
}, Ml = function(e, r) {
  let i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], o = !1, a = "", l = !1;
  for (let f = 0; f < e.length; f++) {
    const u = e.charAt(f);
    if (o) o = !1, a += (Lh.has(u) ? "\\" : "") + u;
    else if (u !== "\\") {
      if (u === "[") {
        const [h, s, d, g] = Oh(e, f);
        if (d) {
          a += h, l = l || s, f += d - 1, r = r || g;
          continue;
        }
      }
      u !== "*" ? u !== "?" ? a += u.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : (a += So, r = !0) : (a += i && e === "*" ? Fs : ks, r = !0);
    } else f === e.length - 1 ? a += "\\\\" : o = !0;
  }
  return [a, Ar(e), !!r, l];
}, Ot(_t, An);
let ai = _t;
const Et = function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return si(e), !(!r.nocomment && e.charAt(0) === "#") && new li(e, r).match(n);
}, xh = /^\*+([^+@!?\*\[\(]*)$/, Ph = (n) => (e) => !e.startsWith(".") && e.endsWith(n), Dh = (n) => (e) => e.endsWith(n), $h = (n) => (n = n.toLowerCase(), (e) => !e.startsWith(".") && e.toLowerCase().endsWith(n)), kh = (n) => (n = n.toLowerCase(), (e) => e.toLowerCase().endsWith(n)), Fh = /^\*+\.\*+$/, Mh = (n) => !n.startsWith(".") && n.includes("."), Uh = (n) => n !== "." && n !== ".." && n.includes("."), Bh = /^\.\*+$/, jh = (n) => n !== "." && n !== ".." && n.startsWith("."), Gh = /^\*+$/, Wh = (n) => n.length !== 0 && !n.startsWith("."), Vh = (n) => n.length !== 0 && n !== "." && n !== "..", zh = /^\?+([^+@!?\*\[\(]*)?$/, qh = (n) => {
  let [e, r = ""] = n;
  const i = Ul([e]);
  return r ? (r = r.toLowerCase(), (o) => i(o) && o.toLowerCase().endsWith(r)) : i;
}, Xh = (n) => {
  let [e, r = ""] = n;
  const i = Bl([e]);
  return r ? (r = r.toLowerCase(), (o) => i(o) && o.toLowerCase().endsWith(r)) : i;
}, Hh = (n) => {
  let [e, r = ""] = n;
  const i = Bl([e]);
  return r ? (o) => i(o) && o.endsWith(r) : i;
}, Yh = (n) => {
  let [e, r = ""] = n;
  const i = Ul([e]);
  return r ? (o) => i(o) && o.endsWith(r) : i;
}, Ul = (n) => {
  let [e] = n;
  const r = e.length;
  return (i) => i.length === r && !i.startsWith(".");
}, Bl = (n) => {
  let [e] = n;
  const r = e.length;
  return (i) => i.length === r && i !== "." && i !== "..";
}, jl = typeof Tt == "object" && Tt ? typeof Tt.env == "object" && Tt.env && Tt.env.__MINIMATCH_TESTING_PLATFORM__ || Tt.platform : "posix";
Et.sep = jl === "win32" ? "\\" : "/";
const Bt = Symbol("globstar **");
Et.GLOBSTAR = Bt, Et.filter = function(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return (r) => Et(r, n, e);
};
const Mt = function(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Object.assign({}, n, e);
};
Et.defaults = (n) => {
  if (!n || typeof n != "object" || !Object.keys(n).length) return Et;
  const e = Et;
  return Object.assign(function(r, i) {
    return e(r, i, Mt(n, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}));
  }, { Minimatch: class extends e.Minimatch {
    constructor(r) {
      super(r, Mt(n, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}));
    }
    static defaults(r) {
      return e.defaults(Mt(n, r)).Minimatch;
    }
  }, AST: class extends e.AST {
    constructor(r, i) {
      super(r, i, Mt(n, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}));
    }
    static fromGlob(r) {
      let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return e.AST.fromGlob(r, Mt(n, i));
    }
  }, unescape: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.unescape(r, Mt(n, i));
  }, escape: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.escape(r, Mt(n, i));
  }, filter: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.filter(r, Mt(n, i));
  }, defaults: (r) => e.defaults(Mt(n, r)), makeRe: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.makeRe(r, Mt(n, i));
  }, braceExpand: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.braceExpand(r, Mt(n, i));
  }, match: function(r, i) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return e.match(r, i, Mt(n, o));
  }, sep: e.sep, GLOBSTAR: Bt });
};
const Gl = function(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return si(n), e.nobrace || !/\{(?:(?!\{).)*\}/.test(n) ? [n] : Ih(n);
};
Et.braceExpand = Gl, Et.makeRe = function(n) {
  return new li(n, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).makeRe();
}, Et.match = function(n, e) {
  const r = new li(e, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {});
  return n = n.filter((i) => r.match(i)), r.options.nonull && !n.length && n.push(e), n;
};
const Ms = /[?*]|[+@!]\(.*?\)|\[|\]/;
class li {
  constructor(e) {
    he(this, "options");
    he(this, "set");
    he(this, "pattern");
    he(this, "windowsPathsNoEscape");
    he(this, "nonegate");
    he(this, "negate");
    he(this, "comment");
    he(this, "empty");
    he(this, "preserveMultipleSlashes");
    he(this, "partial");
    he(this, "globSet");
    he(this, "globParts");
    he(this, "nocase");
    he(this, "isWindows");
    he(this, "platform");
    he(this, "windowsNoMagicRoot");
    he(this, "regexp");
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    si(e), r = r || {}, this.options = r, this.pattern = e, this.platform = r.platform || jl, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!r.windowsPathsNoEscape || r.allowWindowsEscape === !1, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!r.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!r.nonegate, this.comment = !1, this.empty = !1, this.partial = !!r.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = r.windowsNoMagicRoot !== void 0 ? r.windowsNoMagicRoot : !(!this.isWindows || !this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
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
        const u = !(a[0] !== "" || a[1] !== "" || a[2] !== "?" && Ms.test(a[2]) || Ms.test(a[3])), h = /^[a-z]:/i.test(a[0]);
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
      if (s === Bt) {
        this.debug("GLOBSTAR", [r, s, d]);
        var g = l, y = f + 1;
        if (y === h) {
          for (this.debug("** at the end"); l < u; l++) if (e[l] === "." || e[l] === ".." || !o.dot && e[l].charAt(0) === ".") return !1;
          return !0;
        }
        for (; g < u; ) {
          var b = e[g];
          if (this.debug(`
globstar while`, e, g, r, y, b), this.matchOne(e.slice(g), r.slice(y), i)) return this.debug("globstar found match!", g, u, b), !0;
          if (b === "." || b === ".." || !o.dot && b.charAt(0) === ".") {
            this.debug("dot detected!", e, g, r, y);
            break;
          }
          this.debug("globstar swallow a segment, and continue"), g++;
        }
        return !(!i || (this.debug(`
>>> no match, partial?`, e, g, r, y), g !== u));
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
    return Gl(this.pattern, this.options);
  }
  parse(e) {
    si(e);
    const r = this.options;
    if (e === "**") return Bt;
    if (e === "") return "";
    let i, o = null;
    (i = e.match(Gh)) ? o = r.dot ? Vh : Wh : (i = e.match(xh)) ? o = (r.nocase ? r.dot ? kh : $h : r.dot ? Dh : Ph)(i[1]) : (i = e.match(zh)) ? o = (r.nocase ? r.dot ? Xh : qh : r.dot ? Hh : Yh)(i) : (i = e.match(Fh)) ? o = r.dot ? Uh : Mh : (i = e.match(Bh)) && (o = jh);
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
        return typeof s == "string" ? s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : s === Bt ? Bt : s._src;
      });
      return h.forEach((s, d) => {
        const g = h[d + 1], y = h[d - 1];
        s === Bt && y !== Bt && (y === void 0 ? g !== void 0 && g !== Bt ? h[d + 1] = "(?:\\/|" + i + "\\/)?" + g : h[d] = i : g === void 0 ? h[d - 1] = y + "(?:\\/|" + i + ")?" : g !== Bt && (h[d - 1] = y + "(?:\\/|\\/" + i + "\\/)" + g, h[d + 1] = Bt));
      }), h.filter((s) => s !== Bt).join("/");
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
function dr(n, e) {
  return arguments.length > 2 && arguments[2] !== void 0 && arguments[2] ? { data: e, headers: n.headers ? bh(n.headers) : {}, status: n.status, statusText: n.statusText } : e;
}
Et.AST = ai, Et.Minimatch = li, Et.escape = function(n) {
  let { windowsPathsNoEscape: e = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return e ? n.replace(/[?*()[\]]/g, "[$&]") : n.replace(/[?*()[\]\\]/g, "\\$&");
}, Et.unescape = Ar;
const Zh = (Us = function(n, e, r) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = nt({ url: Fe(n.remoteURL, ke(e)), method: "COPY", headers: { Destination: Fe(n.remoteURL, ke(r)), Overwrite: i.overwrite === !1 ? "F" : "T", Depth: i.shallow ? "0" : "infinity" } }, n, i);
  return l = function(f) {
    rt(n, f);
  }, (a = tt(o, n)) && a.then || (a = Promise.resolve(a)), l ? a.then(l) : a;
  var a, l;
}, function() {
  for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
  try {
    return Promise.resolve(Us.apply(this, n));
  } catch (r) {
    return Promise.reject(r);
  }
});
var Us;
const Kh = { preserveOrder: !1, attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, removeNSPrefix: !1, allowBooleanAttributes: !1, parseTagValue: !0, parseAttributeValue: !1, trimValues: !0, cdataPropName: !1, numberParseOptions: { hex: !0, leadingZeros: !0, eNotation: !0 }, tagValueProcessor: function(n, e) {
  return e;
}, attributeValueProcessor: function(n, e) {
  return e;
}, stopNodes: [], alwaysCreateTextNode: !1, isArray: () => !1, commentPropName: !1, unpairedTags: [], processEntities: !0, htmlEntities: !1, ignoreDeclaration: !1, ignorePiTags: !1, transformTagName: !1, transformAttributeName: !1, updateTag: function(n, e, r) {
  return n;
}, captureMetaData: !1 }, Bs = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Jh = new RegExp("^[" + Bs + "][" + Bs + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
function Wl(n, e) {
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
  return Jh.exec(n) != null;
};
let Eo;
Eo = typeof Symbol != "function" ? "@@xmlMetadata" : Symbol("XML Node Metadata");
class kn {
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
class Qh {
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
        if (a && $n(e, "!ENTITY", r)) {
          let u, h;
          r += 7, [u, h, r] = this.readEntityExp(e, r + 1, this.suppressValidationErr), h.indexOf("&") === -1 && (i[u] = { regx: RegExp(`&${u};`, "g"), val: h });
        } else if (a && $n(e, "!ELEMENT", r)) {
          r += 8;
          const { index: u } = this.readElementExp(e, r + 1);
          r = u;
        } else if (a && $n(e, "!ATTLIST", r)) r += 8;
        else if (a && $n(e, "!NOTATION", r)) {
          r += 9;
          const { index: u } = this.readNotationExp(e, r + 1, this.suppressValidationErr);
          r = u;
        } else {
          if (!$n(e, "!--", r)) throw new Error("Invalid DOCTYPE");
          l = !0;
        }
        o++, f = "";
      }
      if (o !== 0) throw new Error("Unclosed DOCTYPE");
    }
    return { entities: i, i: r };
  }
  readEntityExp(e, r) {
    r = St(e, r);
    let i = "";
    for (; r < e.length && !/\s/.test(e[r]) && e[r] !== '"' && e[r] !== "'"; ) i += e[r], r++;
    if (_r(i), r = St(e, r), !this.suppressValidationErr) {
      if (e.substring(r, r + 6).toUpperCase() === "SYSTEM") throw new Error("External entities are not supported");
      if (e[r] === "%") throw new Error("Parameter entities are not supported");
    }
    let o = "";
    return [r, o] = this.readIdentifierVal(e, r, "entity"), [i, o, --r];
  }
  readNotationExp(e, r) {
    r = St(e, r);
    let i = "";
    for (; r < e.length && !/\s/.test(e[r]); ) i += e[r], r++;
    !this.suppressValidationErr && _r(i), r = St(e, r);
    const o = e.substring(r, r + 6).toUpperCase();
    if (!this.suppressValidationErr && o !== "SYSTEM" && o !== "PUBLIC") throw new Error(`Expected SYSTEM or PUBLIC, found "${o}"`);
    r += o.length, r = St(e, r);
    let a = null, l = null;
    if (o === "PUBLIC") [r, a] = this.readIdentifierVal(e, r, "publicIdentifier"), e[r = St(e, r)] !== '"' && e[r] !== "'" || ([r, l] = this.readIdentifierVal(e, r, "systemIdentifier"));
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
    r = St(e, r);
    let i = "";
    for (; r < e.length && !/\s/.test(e[r]); ) i += e[r], r++;
    if (!this.suppressValidationErr && !hi(i)) throw new Error(`Invalid element name: "${i}"`);
    let o = "";
    if (e[r = St(e, r)] === "E" && $n(e, "MPTY", r)) r += 4;
    else if (e[r] === "A" && $n(e, "NY", r)) r += 2;
    else if (e[r] === "(") {
      for (r++; r < e.length && e[r] !== ")"; ) o += e[r], r++;
      if (e[r] !== ")") throw new Error("Unterminated content model");
    } else if (!this.suppressValidationErr) throw new Error(`Invalid Element Expression, found "${e[r]}"`);
    return { elementName: i, contentModel: o.trim(), index: r };
  }
  readAttlistExp(e, r) {
    r = St(e, r);
    let i = "";
    for (; r < e.length && !/\s/.test(e[r]); ) i += e[r], r++;
    _r(i), r = St(e, r);
    let o = "";
    for (; r < e.length && !/\s/.test(e[r]); ) o += e[r], r++;
    if (!_r(o)) throw new Error(`Invalid attribute name: "${o}"`);
    r = St(e, r);
    let a = "";
    if (e.substring(r, r + 8).toUpperCase() === "NOTATION") {
      if (a = "NOTATION", e[r = St(e, r += 8)] !== "(") throw new Error(`Expected '(', found "${e[r]}"`);
      r++;
      let f = [];
      for (; r < e.length && e[r] !== ")"; ) {
        let u = "";
        for (; r < e.length && e[r] !== "|" && e[r] !== ")"; ) u += e[r], r++;
        if (u = u.trim(), !_r(u)) throw new Error(`Invalid notation name: "${u}"`);
        f.push(u), e[r] === "|" && (r++, r = St(e, r));
      }
      if (e[r] !== ")") throw new Error("Unterminated list of notations");
      r++, a += " (" + f.join("|") + ")";
    } else {
      for (; r < e.length && !/\s/.test(e[r]); ) a += e[r], r++;
      const f = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
      if (!this.suppressValidationErr && !f.includes(a.toUpperCase())) throw new Error(`Invalid attribute type: "${a}"`);
    }
    r = St(e, r);
    let l = "";
    return e.substring(r, r + 8).toUpperCase() === "#REQUIRED" ? (l = "#REQUIRED", r += 8) : e.substring(r, r + 7).toUpperCase() === "#IMPLIED" ? (l = "#IMPLIED", r += 7) : [r, l] = this.readIdentifierVal(e, r, "ATTLIST"), { elementName: i, attributeName: o, attributeType: a, defaultValue: l, index: r };
  }
}
const St = (n, e) => {
  for (; e < n.length && /\s/.test(n[e]); ) e++;
  return e;
};
function $n(n, e, r) {
  for (let i = 0; i < e.length; i++) if (e[i] !== n[r + i + 1]) return !1;
  return !0;
}
function _r(n) {
  if (hi(n)) return n;
  throw new Error(`Invalid entity name ${n}`);
}
const ep = /^[-+]?0x[a-fA-F0-9]+$/, tp = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, np = { hex: !0, leadingZeros: !0, decimalPoint: ".", eNotation: !0 }, rp = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
function Vl(n) {
  return typeof n == "function" ? n : Array.isArray(n) ? (e) => {
    for (const r of n)
      if (typeof r == "string" && e === r || r instanceof RegExp && r.test(e)) return !0;
  } : () => !1;
}
class ip {
  constructor(e) {
    if (this.options = e, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = { apos: { regex: /&(apos|#39|#x27);/g, val: "'" }, gt: { regex: /&(gt|#62|#x3E);/g, val: ">" }, lt: { regex: /&(lt|#60|#x3C);/g, val: "<" }, quot: { regex: /&(quot|#34|#x22);/g, val: '"' } }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = { space: { regex: /&(nbsp|#160);/g, val: " " }, cent: { regex: /&(cent|#162);/g, val: "¢" }, pound: { regex: /&(pound|#163);/g, val: "£" }, yen: { regex: /&(yen|#165);/g, val: "¥" }, euro: { regex: /&(euro|#8364);/g, val: "€" }, copyright: { regex: /&(copy|#169);/g, val: "©" }, reg: { regex: /&(reg|#174);/g, val: "®" }, inr: { regex: /&(inr|#8377);/g, val: "₹" }, num_dec: { regex: /&#([0-9]{1,7});/g, val: (r, i) => js(i, 10, "&#") }, num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (r, i) => js(i, 16, "&#x") } }, this.addExternalEntities = op, this.parseXml = cp, this.parseTextData = sp, this.resolveNameSpace = ap, this.buildAttributesMap = up, this.isItStopNode = dp, this.replaceEntitiesValue = hp, this.readStopNodeData = mp, this.saveTextToParentTag = pp, this.addChild = fp, this.ignoreAttributesFn = Vl(this.options.ignoreAttributes), this.options.stopNodes && this.options.stopNodes.length > 0) {
      this.stopNodesExact = /* @__PURE__ */ new Set(), this.stopNodesWildcard = /* @__PURE__ */ new Set();
      for (let r = 0; r < this.options.stopNodes.length; r++) {
        const i = this.options.stopNodes[r];
        typeof i == "string" && (i.startsWith("*.") ? this.stopNodesWildcard.add(i.substring(2)) : this.stopNodesExact.add(i));
      }
    }
  }
}
function op(n) {
  const e = Object.keys(n);
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    this.lastEntities[i] = { regex: new RegExp("&" + i + ";", "g"), val: n[i] };
  }
}
function sp(n, e, r, i, o, a, l) {
  if (n !== void 0 && (this.options.trimValues && !i && (n = n.trim()), n.length > 0)) {
    l || (n = this.replaceEntitiesValue(n));
    const f = this.options.tagValueProcessor(e, n, r, o, a);
    return f == null ? n : typeof f != typeof n || f !== n ? f : this.options.trimValues || n.trim() === n ? zl(n, this.options.parseTagValue, this.options.numberParseOptions) : n;
  }
}
function ap(n) {
  if (this.options.removeNSPrefix) {
    const e = n.split(":"), r = n.charAt(0) === "/" ? "/" : "";
    if (e[0] === "xmlns") return "";
    e.length === 2 && (n = r + e[1]);
  }
  return n;
}
const lp = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function up(n, e) {
  if (this.options.ignoreAttributes !== !0 && typeof n == "string") {
    const r = Wl(n, lp), i = r.length, o = {};
    for (let a = 0; a < i; a++) {
      const l = this.resolveNameSpace(r[a][1]);
      if (this.ignoreAttributesFn(l, e)) continue;
      let f = r[a][4], u = this.options.attributeNamePrefix + l;
      if (l.length) if (this.options.transformAttributeName && (u = this.options.transformAttributeName(u)), u === "__proto__" && (u = "#__proto__"), f !== void 0) {
        this.options.trimValues && (f = f.trim()), f = this.replaceEntitiesValue(f);
        const h = this.options.attributeValueProcessor(l, f, e);
        o[u] = h == null ? f : typeof h != typeof f || h !== f ? h : zl(f, this.options.parseAttributeValue, this.options.numberParseOptions);
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
const cp = function(n) {
  n = n.replace(/\r\n?/g, `
`);
  const e = new kn("!xml");
  let r = e, i = "", o = "";
  const a = new Qh(this.options.processEntities);
  for (let l = 0; l < n.length; l++) if (n[l] === "<") if (n[l + 1] === "/") {
    const f = Un(n, ">", l, "Closing Tag is not closed.");
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
      const u = new kn(f.tagName);
      u.add(this.options.textNodeName, ""), f.tagName !== f.tagExp && f.attrExpPresent && (u[":@"] = this.buildAttributesMap(f.tagExp, o)), this.addChild(r, u, o, l);
    }
    l = f.closeIndex + 1;
  } else if (n.substr(l + 1, 3) === "!--") {
    const f = Un(n, "-->", l + 4, "Comment is not closed.");
    if (this.options.commentPropName) {
      const u = n.substring(l + 4, f - 2);
      i = this.saveTextToParentTag(i, r, o), r.add(this.options.commentPropName, [{ [this.options.textNodeName]: u }]);
    }
    l = f;
  } else if (n.substr(l + 1, 2) === "!D") {
    const f = a.readDocType(n, l);
    this.docTypeEntities = f.entities, l = f.i;
  } else if (n.substr(l + 1, 2) === "![") {
    const f = Un(n, "]]>", l, "CDATA is not closed.") - 2, u = n.substring(l + 9, f);
    i = this.saveTextToParentTag(i, r, o);
    let h = this.parseTextData(u, r.tagname, o, !0, !1, !0, !0);
    h == null && (h = ""), this.options.cdataPropName ? r.add(this.options.cdataPropName, [{ [this.options.textNodeName]: u }]) : r.add(this.options.textNodeName, h), l = f + 2;
  } else {
    let f = wo(n, l, this.options.removeNSPrefix), u = f.tagName;
    const h = f.rawTagName;
    let s = f.tagExp, d = f.attrExpPresent, g = f.closeIndex;
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
        const S = this.readStopNodeData(n, h, g + 1);
        if (!S) throw new Error(`Unexpected end of ${h}`);
        l = S.i, E = S.tagContent;
      }
      const T = new kn(u);
      u !== s && d && (T[":@"] = this.buildAttributesMap(s, o)), E && (E = this.parseTextData(E, u, o, !0, d, !0, !0)), o = o.substr(0, o.lastIndexOf(".")), T.add(this.options.textNodeName, E), this.addChild(r, T, o, b);
    } else {
      if (s.length > 0 && s.lastIndexOf("/") === s.length - 1) {
        if (u[u.length - 1] === "/" ? (u = u.substr(0, u.length - 1), o = o.substr(0, o.length - 1), s = u) : s = s.substr(0, s.length - 1), this.options.transformTagName) {
          const T = this.options.transformTagName(u);
          s === u && (s = T), u = T;
        }
        const E = new kn(u);
        u !== s && d && (E[":@"] = this.buildAttributesMap(s, o)), this.addChild(r, E, o, b), o = o.substr(0, o.lastIndexOf("."));
      } else {
        const E = new kn(u);
        this.tagsNodeStack.push(r), u !== s && d && (E[":@"] = this.buildAttributesMap(s, o)), this.addChild(r, E, o, b), r = E;
      }
      i = "", l = g;
    }
  }
  else i += n[l];
  return e.child;
};
function fp(n, e, r, i) {
  this.options.captureMetaData || (i = void 0);
  const o = this.options.updateTag(e.tagname, r, e[":@"]);
  o === !1 || (typeof o == "string" && (e.tagname = o), n.addChild(e, i));
}
const hp = function(n) {
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
function pp(n, e, r, i) {
  return n && (i === void 0 && (i = e.child.length === 0), (n = this.parseTextData(n, e.tagname, r, !1, !!e[":@"] && Object.keys(e[":@"]).length !== 0, i)) !== void 0 && n !== "" && e.add(this.options.textNodeName, n), n = ""), n;
}
function dp(n, e, r, i) {
  return !(!e || !e.has(i)) || !(!n || !n.has(r));
}
function Un(n, e, r, i) {
  const o = n.indexOf(e, r);
  if (o === -1) throw new Error(i);
  return o + e.length - 1;
}
function wo(n, e, r) {
  const i = function(s, d) {
    let g, y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ">", b = "";
    for (let E = d; E < s.length; E++) {
      let T = s[E];
      if (g) T === g && (g = "");
      else if (T === '"' || T === "'") g = T;
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
function mp(n, e, r) {
  const i = r;
  let o = 1;
  for (; r < n.length; r++) if (n[r] === "<") if (n[r + 1] === "/") {
    const a = Un(n, ">", r, `${e} is not closed`);
    if (n.substring(r + 2, a).trim() === e && (o--, o === 0)) return { tagContent: n.substring(i, r), i: a };
    r = a;
  } else if (n[r + 1] === "?") r = Un(n, "?>", r + 1, "StopNode is not closed.");
  else if (n.substr(r + 1, 3) === "!--") r = Un(n, "-->", r + 3, "StopNode is not closed.");
  else if (n.substr(r + 1, 2) === "![") r = Un(n, "]]>", r, "StopNode is not closed.") - 2;
  else {
    const a = wo(n, r, ">");
    a && ((a && a.tagName) === e && a.tagExp[a.tagExp.length - 1] !== "/" && o++, r = a.closeIndex);
  }
}
function zl(n, e, r) {
  if (e && typeof n == "string") {
    const i = n.trim();
    return i === "true" || i !== "false" && function(o) {
      let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (a = Object.assign({}, np, a), !o || typeof o != "string") return o;
      let l = o.trim();
      if (a.skipLike !== void 0 && a.skipLike.test(l)) return o;
      if (o === "0") return 0;
      if (a.hex && ep.test(l)) return function(u) {
        if (parseInt) return parseInt(u, 16);
        if (Number.parseInt) return Number.parseInt(u, 16);
        if (window && window.parseInt) return window.parseInt(u, 16);
        throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
      }(l);
      if (l.includes("e") || l.includes("E")) return function(u, h, s) {
        if (!s.eNotation) return u;
        const d = h.match(rp);
        if (d) {
          let g = d[1] || "";
          const y = d[3].indexOf("e") === -1 ? "E" : "e", b = d[2], E = g ? u[b.length + 1] === y : u[b.length] === y;
          return b.length > 1 && E ? u : b.length !== 1 || !d[3].startsWith(`.${y}`) && d[3][0] !== y ? s.leadingZeros && !E ? (h = (d[1] || "") + d[3], Number(h)) : u : Number(h);
        }
        return u;
      }(o, l, a);
      {
        const u = tp.exec(l);
        if (u) {
          const h = u[1] || "", s = u[2];
          let d = ((f = u[3]) && f.indexOf(".") !== -1 && ((f = f.replace(/0+$/, "")) === "." ? f = "0" : f[0] === "." ? f = "0" + f : f[f.length - 1] === "." && (f = f.substring(0, f.length - 1))), f);
          const g = h ? o[s.length + 1] === "." : o[s.length] === ".";
          if (!a.leadingZeros && (s.length > 1 || s.length === 1 && !g)) return o;
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
function js(n, e, r) {
  const i = Number.parseInt(n, e);
  return i >= 0 && i <= 1114111 ? String.fromCodePoint(i) : r + n + ";";
}
const Bi = kn.getMetaDataSymbol();
function gp(n, e) {
  return ql(n, e);
}
function ql(n, e, r) {
  let i;
  const o = {};
  for (let a = 0; a < n.length; a++) {
    const l = n[a], f = Ep(l);
    let u = "";
    if (u = r === void 0 ? f : r + "." + f, f === e.textNodeName) i === void 0 ? i = l[f] : i += "" + l[f];
    else {
      if (f === void 0) continue;
      if (l[f]) {
        let h = ql(l[f], e, u);
        const s = yp(h, e);
        l[Bi] !== void 0 && (h[Bi] = l[Bi]), l[":@"] ? wp(h, l[":@"], u, e) : Object.keys(h).length !== 1 || h[e.textNodeName] === void 0 || e.alwaysCreateTextNode ? Object.keys(h).length === 0 && (e.alwaysCreateTextNode ? h[e.textNodeName] = "" : h = "") : h = h[e.textNodeName], o[f] !== void 0 && o.hasOwnProperty(f) ? (Array.isArray(o[f]) || (o[f] = [o[f]]), o[f].push(h)) : e.isArray(f, u, s) ? o[f] = [h] : o[f] = h;
      }
    }
  }
  return typeof i == "string" ? i.length > 0 && (o[e.textNodeName] = i) : i !== void 0 && (o[e.textNodeName] = i), o;
}
function Ep(n) {
  const e = Object.keys(n);
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    if (i !== ":@") return i;
  }
}
function wp(n, e, r, i) {
  if (e) {
    const o = Object.keys(e), a = o.length;
    for (let l = 0; l < a; l++) {
      const f = o[l];
      i.isArray(f, r + "." + f, !0, !0) ? n[f] = [e[f]] : n[f] = e[f];
    }
  }
}
function yp(n, e) {
  const { textNodeName: r } = e, i = Object.keys(n).length;
  return i === 0 || !(i !== 1 || !n[r] && typeof n[r] != "boolean" && n[r] !== 0);
}
const vp = { allowBooleanAttributes: !1, unpairedTags: [] };
function Gs(n) {
  return n === " " || n === "	" || n === `
` || n === "\r";
}
function Ws(n, e) {
  const r = e;
  for (; e < n.length; e++) if (!(n[e] != "?" && n[e] != " ")) {
    const i = n.substr(r, e - r);
    if (e > 5 && i === "xml") return Ve("InvalidXml", "XML declaration allowed only at the start of the document.", vt(n, e));
    if (n[e] == "?" && n[e + 1] == ">") {
      e++;
      break;
    }
  }
  return e;
}
function Vs(n, e) {
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
function bp(n, e) {
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
const _p = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function zs(n, e) {
  const r = Wl(n, _p), i = {};
  for (let o = 0; o < r.length; o++) {
    if (r[o][1].length === 0) return Ve("InvalidAttr", "Attribute '" + r[o][2] + "' has no space in starting.", Tr(r[o]));
    if (r[o][3] !== void 0 && r[o][4] === void 0) return Ve("InvalidAttr", "Attribute '" + r[o][2] + "' is without value.", Tr(r[o]));
    if (r[o][3] === void 0 && !e.allowBooleanAttributes) return Ve("InvalidAttr", "boolean attribute '" + r[o][2] + "' is not allowed.", Tr(r[o]));
    const a = r[o][2];
    if (!Np(a)) return Ve("InvalidAttr", "Attribute '" + a + "' is an invalid name.", Tr(r[o]));
    if (i.hasOwnProperty(a)) return Ve("InvalidAttr", "Attribute '" + a + "' is repeated.", Tr(r[o]));
    i[a] = 1;
  }
  return !0;
}
function Tp(n, e) {
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
function Ve(n, e, r) {
  return { err: { code: n, msg: e, line: r.line || r, col: r.col } };
}
function Np(n) {
  return hi(n);
}
function vt(n, e) {
  const r = n.substring(0, e).split(/\r?\n/);
  return { line: r.length, col: r[r.length - 1].length + 1 };
}
function Tr(n) {
  return n.startIndex + n[1].length;
}
class Xl {
  constructor(e) {
    this.externalEntities = {}, this.options = function(r) {
      return Object.assign({}, Kh, r);
    }(e);
  }
  parse(e, r) {
    if (typeof e != "string" && e.toString) e = e.toString();
    else if (typeof e != "string") throw new Error("XML data is accepted in String or Bytes[] form.");
    if (r) {
      r === !0 && (r = {});
      const a = function(l, f) {
        f = Object.assign({}, vp, f);
        const u = [];
        let h = !1, s = !1;
        l[0] === "\uFEFF" && (l = l.substr(1));
        for (let d = 0; d < l.length; d++) if (l[d] === "<" && l[d + 1] === "?") {
          if (d += 2, d = Ws(l, d), d.err) return d;
        } else {
          if (l[d] !== "<") {
            if (Gs(l[d])) continue;
            return Ve("InvalidChar", "char '" + l[d] + "' is not expected.", vt(l, d));
          }
          {
            let g = d;
            if (d++, l[d] === "!") {
              d = Vs(l, d);
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
                return S = b.trim().length === 0 ? "Invalid space after '<'." : "Tag '" + b + "' is an invalid name.", Ve("InvalidTag", S, vt(l, d));
              }
              const E = bp(l, d);
              if (E === !1) return Ve("InvalidAttr", "Attributes for '" + b + "' have open quote.", vt(l, d));
              let T = E.value;
              if (d = E.index, T[T.length - 1] === "/") {
                const S = d - T.length;
                T = T.substring(0, T.length - 1);
                const C = zs(T, f);
                if (C !== !0) return Ve(C.err.code, C.err.msg, vt(l, S + C.err.line));
                h = !0;
              } else if (y) {
                if (!E.tagClosed) return Ve("InvalidTag", "Closing tag '" + b + "' doesn't have proper closing.", vt(l, d));
                if (T.trim().length > 0) return Ve("InvalidTag", "Closing tag '" + b + "' can't have attributes or invalid starting.", vt(l, g));
                if (u.length === 0) return Ve("InvalidTag", "Closing tag '" + b + "' has not been opened.", vt(l, g));
                {
                  const S = u.pop();
                  if (b !== S.tagName) {
                    let C = vt(l, S.tagStartPos);
                    return Ve("InvalidTag", "Expected closing tag '" + S.tagName + "' (opened in line " + C.line + ", col " + C.col + ") instead of closing tag '" + b + "'.", vt(l, g));
                  }
                  u.length == 0 && (s = !0);
                }
              } else {
                const S = zs(T, f);
                if (S !== !0) return Ve(S.err.code, S.err.msg, vt(l, d - T.length + S.err.line));
                if (s === !0) return Ve("InvalidXml", "Multiple possible root nodes found.", vt(l, d));
                f.unpairedTags.indexOf(b) !== -1 || u.push({ tagName: b, tagStartPos: g }), h = !0;
              }
              for (d++; d < l.length; d++) if (l[d] === "<") {
                if (l[d + 1] === "!") {
                  d++, d = Vs(l, d);
                  continue;
                }
                if (l[d + 1] !== "?") break;
                if (d = Ws(l, ++d), d.err) return d;
              } else if (l[d] === "&") {
                const S = Tp(l, d);
                if (S == -1) return Ve("InvalidChar", "char '&' is not expected.", vt(l, d));
                d = S;
              } else if (s === !0 && !Gs(l[d])) return Ve("InvalidXml", "Extra text at the end", vt(l, d));
              l[d] === "<" && d--;
            }
          }
        }
        return h ? u.length == 1 ? Ve("InvalidTag", "Unclosed tag '" + u[0].tagName + "'.", vt(l, u[0].tagStartPos)) : !(u.length > 0) || Ve("InvalidXml", "Invalid '" + JSON.stringify(u.map((d) => d.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 }) : Ve("InvalidXml", "Start tag expected.", 1);
      }(e, r);
      if (a !== !0) throw Error(`${a.err.msg}:${a.err.line}:${a.err.col}`);
    }
    const i = new ip(this.options);
    i.addExternalEntities(this.externalEntities);
    const o = i.parseXml(e);
    return this.options.preserveOrder || o === void 0 ? o : gp(o, this.options);
  }
  addEntity(e, r) {
    if (r.indexOf("&") !== -1) throw new Error("Entity value can't have '&'");
    if (e.indexOf("&") !== -1 || e.indexOf(";") !== -1) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    if (r === "&") throw new Error("An entity with value '&' is not permitted");
    this.externalEntities[e] = r;
  }
  static getMetaDataSymbol() {
    return kn.getMetaDataSymbol();
  }
}
var Ip = Le(829), un = Le.n(Ip), ir = function(n) {
  return n.Array = "array", n.Object = "object", n.Original = "original", n;
}(ir || {});
function Hl(n, e) {
  if (!n.endsWith("propstat.prop.displayname")) return e;
}
function Yr(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ir.Original;
  const i = un().get(n, e);
  return r === "array" && Array.isArray(i) === !1 ? [i] : r === "object" && Array.isArray(i) ? i[0] : i;
}
function pi(n, e) {
  return e = e ?? { attributeNamePrefix: "@", attributeParsers: [], tagParsers: [Hl] }, new Promise((r) => {
    r(function(i) {
      const { multistatus: o } = i;
      if (o === "") return { multistatus: { response: [] } };
      if (!o) throw new Error("Invalid response: No root multistatus found");
      const a = { multistatus: Array.isArray(o) ? o[0] : o };
      return un().set(a, "multistatus.response", Yr(a, "multistatus.response", ir.Array)), un().set(a, "multistatus.response", un().get(a, "multistatus.response").map((l) => function(f) {
        const u = Object.assign({}, f);
        return u.status ? un().set(u, "status", Yr(u, "status", ir.Object)) : (un().set(u, "propstat", Yr(u, "propstat", ir.Object)), un().set(u, "propstat.prop", Yr(u, "propstat.prop", ir.Object))), u;
      }(l))), a;
    }(function(i) {
      let { attributeNamePrefix: o, attributeParsers: a, tagParsers: l } = i;
      return new Xl({ allowBooleanAttributes: !0, attributeNamePrefix: o, textNodeName: "text", ignoreAttributes: !1, removeNSPrefix: !0, numberParseOptions: { hex: !0, leadingZeros: !1 }, attributeValueProcessor(f, u, h) {
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
function Ap(n, e) {
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
function Op(n) {
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
  const { details: i = !1 } = r, o = nt({ url: Fe(n.remoteURL, ke(e)), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, n, r);
  return ji(tt(o, n), function(a) {
    return rt(n, a), ji(a.text(), function(l) {
      return ji(pi(l, n.parsing), function(f) {
        const u = Ap(f, e, i);
        return dr(a, u, i);
      });
    });
  });
});
function Yl(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const Sp = Zl(function(n, e) {
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
    if (typeof a[Xs] == "function") {
      let T = function(S) {
        try {
          for (; !(u = d.next()).done; ) if ((S = l(u.value)) && S.then) {
            if (!Hs(S)) return void S.then(T, s || (s = Nt.bind(null, h = new or(), 2)));
            S = S.v;
          }
          h ? Nt(h, 1, S) : h = S;
        } catch (C) {
          Nt(h || (h = new or()), 2, C);
        }
      };
      var E = T, u, h, s, d = a[Xs]();
      if (T(), d.return) {
        var g = function(S) {
          try {
            u.done || d.return();
          } catch {
          }
          return S;
        };
        if (h && h.then) return h.then(g, function(S) {
          throw g(S);
        });
        g();
      }
      return h;
    }
    if (!("length" in a)) throw new TypeError("Object is not iterable");
    for (var y = [], b = 0; b < a.length; b++) y.push(a[b]);
    return function(T, S, C) {
      var x, R, U = -1;
      return function Y(H) {
        try {
          for (; ++U < T.length && (!C || !C()); ) if ((H = S(U)) && H.then) {
            if (!Hs(H)) return void H.then(Y, R || (R = Nt.bind(null, x = new or(), 2)));
            H = H.v;
          }
          x ? Nt(x, 1, H) : x = H;
        } catch (se) {
          Nt(x || (x = new or()), 2, se);
        }
      }(), x;
    }(y, function(T) {
      return l(y[T]);
    }, f);
  }(i, function(a) {
    return l = function() {
      return function(u, h) {
        try {
          var s = Yl(Lo(n, a), function(d) {
            if (d.type !== "directory") throw new Error(`Path includes a file: ${e}`);
          });
        } catch (d) {
          return h(d);
        }
        return s && s.then ? s.then(void 0, h) : s;
      }(0, function(u) {
        const h = u;
        return function() {
          if (h.status === 404) return o = !0, qs(yo(n, a, { ...r, recursive: !1 }));
          throw u;
        }();
      });
    }, (f = function() {
      if (o) return qs(yo(n, a, { ...r, recursive: !1 }));
    }()) && f.then ? f.then(l) : l();
    var l, f;
  }, function() {
    return !1;
  });
});
function Zl(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
function Rp() {
}
function qs(n, e) {
  return n && n.then ? n.then(Rp) : Promise.resolve();
}
const Xs = typeof Symbol < "u" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
function Nt(n, e, r) {
  if (!n.s) {
    if (r instanceof or) {
      if (!r.s) return void (r.o = Nt.bind(null, n, e));
      1 & e && (e = r.s), r = r.v;
    }
    if (r && r.then) return void r.then(Nt.bind(null, n, e), Nt.bind(null, n, 2));
    n.s = e, n.v = r;
    const i = n.o;
    i && i(n);
  }
}
const or = function() {
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
function Hs(n) {
  return n instanceof or && 1 & n.s;
}
const yo = Zl(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (r.recursive === !0) return Sp(n, e, r);
  const i = nt({ url: Fe(n.remoteURL, (o = ke(e), o.endsWith("/") ? o : o + "/")), method: "MKCOL" }, n, r);
  var o;
  return Yl(tt(i, n), function(a) {
    rt(n, a);
  });
});
var Cp = Le(388), Ys = Le.n(Cp);
const Lp = /* @__PURE__ */ function(n) {
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
  const o = nt({ url: Fe(n.remoteURL, ke(e)), method: "GET", headers: i }, n, r);
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
}), xp = () => {
}, Pp = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e, r) {
  r.url || (r.url = Fe(n.remoteURL, ke(e)));
  const i = nt(r, n, {});
  return a = function(l) {
    return rt(n, l), l;
  }, (o = tt(i, n)) && o.then || (o = Promise.resolve(o)), a ? o.then(a) : o;
  var o, a;
}), Dp = /* @__PURE__ */ function(n) {
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
  const i = nt({ url: Fe(n.remoteURL, ke(e)), method: "DELETE" }, n, r);
  return a = function(l) {
    rt(n, l);
  }, (o = tt(i, n)) && o.then || (o = Promise.resolve(o)), a ? o.then(a) : o;
  var o, a;
}), $p = /* @__PURE__ */ function(n) {
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
const kp = /* @__PURE__ */ function(n) {
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
  const i = nt({ url: Fe(n.remoteURL, ke(e), "/"), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: r.deep ? "infinity" : "1" } }, n, r);
  return Gi(tt(i, n), function(o) {
    return rt(n, o), Gi(o.text(), function(a) {
      if (!a) throw new Error("Failed parsing directory contents: Empty response");
      return Gi(pi(a, n.parsing), function(l) {
        const f = Os(e);
        let u = function(h, s, d) {
          let g = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], y = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
          const b = ri().join(s, "/"), { multistatus: { response: E } } = h, T = E.map((S) => {
            const C = function(R) {
              try {
                return R.replace(/^https?:\/\/[^\/]+/, "");
              } catch (U) {
                throw new It(U, "Failed normalising HREF");
              }
            }(S.href), { propstat: { prop: x } } = S;
            return Co(x, b === "/" ? decodeURIComponent(Lr(C)) : Lr(ri().relative(decodeURIComponent(b), decodeURIComponent(C))), g);
          });
          return y ? T : T.filter((S) => S.basename && (S.type === "file" || S.filename !== d.replace(/\/$/, "")));
        }(l, Os(n.remoteBasePath || n.remotePath), f, r.details, r.includeSelf);
        return r.glob && (u = function(h, s) {
          return h.filter((d) => Et(d.filename, s, { matchBase: !0 }));
        }(u, r.glob)), dr(o, u, r.details);
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
const Fp = xo(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = nt({ url: Fe(n.remoteURL, ke(e)), method: "GET", headers: { Accept: "text/plain" }, transformResponse: [Bp] }, n, r);
  return ui(tt(i, n), function(o) {
    return rt(n, o), ui(o.text(), function(a) {
      return dr(o, a, r.details);
    });
  });
});
function ui(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const Mp = xo(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = nt({ url: Fe(n.remoteURL, ke(e)), method: "GET" }, n, r);
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
      return dr(o, a, r.details);
    });
  });
}), Up = xo(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { format: i = "binary" } = r;
  if (i !== "binary" && i !== "text") throw new It({ info: { code: Sn.InvalidOutputFormat } }, `Invalid output format: ${i}`);
  return i === "text" ? Fp(n, e, r) : Mp(n, e, r);
}), Bp = (n) => n;
function jp(n, e) {
  let r = "";
  return e.format && e.indentBy.length > 0 && (r = `
`), Kl(n, e, "", r);
}
function Kl(n, e, r, i) {
  let o = "", a = !1;
  for (let l = 0; l < n.length; l++) {
    const f = n[l], u = Gp(f);
    if (u === void 0) continue;
    let h = "";
    if (h = r.length === 0 ? u : `${r}.${u}`, u === e.textNodeName) {
      let y = f[u];
      Wp(h, e) || (y = e.tagValueProcessor(u, y), y = Jl(y, e)), a && (o += i), o += y, a = !1;
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
      const y = Zs(f[":@"], e), b = u === "?xml" ? "" : i;
      let E = f[u][0][e.textNodeName];
      E = E.length !== 0 ? " " + E : "", o += b + `<${u}${E}${y}?>`, a = !0;
      continue;
    }
    let s = i;
    s !== "" && (s += e.indentBy);
    const d = i + `<${u}${Zs(f[":@"], e)}`, g = Kl(f[u], e, h, s);
    e.unpairedTags.indexOf(u) !== -1 ? e.suppressUnpairedNode ? o += d + ">" : o += d + "/>" : g && g.length !== 0 || !e.suppressEmptyNode ? g && g.endsWith(">") ? o += d + `>${g}${i}</${u}>` : (o += d + ">", g && i !== "" && (g.includes("/>") || g.includes("</")) ? o += i + e.indentBy + g + i : o += g, o += `</${u}>`) : o += d + "/>", a = !0;
  }
  return o;
}
function Gp(n) {
  const e = Object.keys(n);
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    if (n.hasOwnProperty(i) && i !== ":@") return i;
  }
}
function Zs(n, e) {
  let r = "";
  if (n && !e.ignoreAttributes) for (let i in n) {
    if (!n.hasOwnProperty(i)) continue;
    let o = e.attributeValueProcessor(i, n[i]);
    o = Jl(o, e), o === !0 && e.suppressBooleanAttributes ? r += ` ${i.substr(e.attributeNamePrefix.length)}` : r += ` ${i.substr(e.attributeNamePrefix.length)}="${o}"`;
  }
  return r;
}
function Wp(n, e) {
  let r = (n = n.substr(0, n.length - e.textNodeName.length - 1)).substr(n.lastIndexOf(".") + 1);
  for (let i in e.stopNodes) if (e.stopNodes[i] === n || e.stopNodes[i] === "*." + r) return !0;
  return !1;
}
function Jl(n, e) {
  if (n && n.length > 0 && e.processEntities) for (let r = 0; r < e.entities.length; r++) {
    const i = e.entities[r];
    n = n.replace(i.regex, i.val);
  }
  return n;
}
const Vp = { attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, cdataPropName: !1, format: !1, indentBy: "  ", suppressEmptyNode: !1, suppressUnpairedNode: !0, suppressBooleanAttributes: !0, tagValueProcessor: function(n, e) {
  return e;
}, attributeValueProcessor: function(n, e) {
  return e;
}, preserveOrder: !1, commentPropName: !1, unpairedTags: [], entities: [{ regex: new RegExp("&", "g"), val: "&amp;" }, { regex: new RegExp(">", "g"), val: "&gt;" }, { regex: new RegExp("<", "g"), val: "&lt;" }, { regex: new RegExp("'", "g"), val: "&apos;" }, { regex: new RegExp('"', "g"), val: "&quot;" }], processEntities: !0, stopNodes: [], oneListGroup: !1 };
function _n(n) {
  this.options = Object.assign({}, Vp, n), this.options.ignoreAttributes === !0 || this.options.attributesGroupName ? this.isAttribute = function() {
    return !1;
  } : (this.ignoreAttributesFn = Vl(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = Xp), this.processTextOrObjNode = zp, this.options.format ? (this.indentate = qp, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
    return "";
  }, this.tagEndChar = ">", this.newLine = "");
}
function zp(n, e, r, i) {
  const o = this.j2x(n, r + 1, i.concat(e));
  return n[this.options.textNodeName] !== void 0 && Object.keys(n).length === 1 ? this.buildTextValNode(n[this.options.textNodeName], e, o.attrStr, r) : this.buildObjectNode(o.val, e, o.attrStr, r);
}
function qp(n) {
  return this.options.indentBy.repeat(n);
}
function Xp(n) {
  return !(!n.startsWith(this.options.attributeNamePrefix) || n === this.options.textNodeName) && n.substr(this.attrPrefixLen);
}
function Hp(n) {
  return new _n({ attributeNamePrefix: "@_", format: !0, ignoreAttributes: !1, suppressEmptyNode: !0 }).build(Ql({ lockinfo: { "@_xmlns:d": "DAV:", lockscope: { exclusive: {} }, locktype: { write: {} }, owner: { href: n } } }, "d"));
}
function Ql(n, e) {
  const r = { ...n };
  for (const i in r) r.hasOwnProperty(i) && (r[i] && typeof r[i] == "object" && i.indexOf(":") === -1 ? (r[`${e}:${i}`] = Ql(r[i], e), delete r[i]) : /^@_/.test(i) === !1 && (r[`${e}:${i}`] = r[i], delete r[i]));
  return r;
}
function vo(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
function eu(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
_n.prototype.build = function(n) {
  return this.options.preserveOrder ? jp(n, this.options) : (Array.isArray(n) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (n = { [this.options.arrayNodeName]: n }), this.j2x(n, 0, []).val);
}, _n.prototype.j2x = function(n, e, r) {
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
        const g = this.j2x(d, e + 1, r.concat(l));
        u += g.val, this.options.attributesGroupName && d.hasOwnProperty(this.options.attributesGroupName) && (h += g.attrStr);
      } else u += this.processTextOrObjNode(d, l, e, r);
      else if (this.options.oneListGroup) {
        let g = this.options.tagValueProcessor(l, d);
        g = this.replaceEntitiesValue(g), u += g;
      } else u += this.buildTextValNode(d, l, "", e);
    }
    this.options.oneListGroup && (u = this.buildObjectNode(u, l, h, e)), o += u;
  } else if (this.options.attributesGroupName && l === this.options.attributesGroupName) {
    const f = Object.keys(n[l]), u = f.length;
    for (let h = 0; h < u; h++) i += this.buildAttrPairStr(f[h], "" + n[l][f[h]]);
  } else o += this.processTextOrObjNode(n[l], l, e, r);
  return { attrStr: i, val: o };
}, _n.prototype.buildAttrPairStr = function(n, e) {
  return e = this.options.attributeValueProcessor(n, "" + e), e = this.replaceEntitiesValue(e), this.options.suppressBooleanAttributes && e === "true" ? " " + n : " " + n + '="' + e + '"';
}, _n.prototype.buildObjectNode = function(n, e, r, i) {
  if (n === "") return e[0] === "?" ? this.indentate(i) + "<" + e + r + "?" + this.tagEndChar : this.indentate(i) + "<" + e + r + this.closeTag(e) + this.tagEndChar;
  {
    let o = "</" + e + this.tagEndChar, a = "";
    return e[0] === "?" && (a = "?", o = ""), !r && r !== "" || n.indexOf("<") !== -1 ? this.options.commentPropName !== !1 && e === this.options.commentPropName && a.length === 0 ? this.indentate(i) + `<!--${n}-->` + this.newLine : this.indentate(i) + "<" + e + r + a + this.tagEndChar + n + this.indentate(i) + o : this.indentate(i) + "<" + e + r + a + ">" + n + o;
  }
}, _n.prototype.closeTag = function(n) {
  let e = "";
  return this.options.unpairedTags.indexOf(n) !== -1 ? this.options.suppressUnpairedNode || (e = "/") : e = this.options.suppressEmptyNode ? "/" : `></${n}`, e;
}, _n.prototype.buildTextValNode = function(n, e, r, i) {
  if (this.options.cdataPropName !== !1 && e === this.options.cdataPropName) return this.indentate(i) + `<![CDATA[${n}]]>` + this.newLine;
  if (this.options.commentPropName !== !1 && e === this.options.commentPropName) return this.indentate(i) + `<!--${n}-->` + this.newLine;
  if (e[0] === "?") return this.indentate(i) + "<" + e + r + "?" + this.tagEndChar;
  {
    let o = this.options.tagValueProcessor(e, n);
    return o = this.replaceEntitiesValue(o), o === "" ? this.indentate(i) + "<" + e + r + this.closeTag(e) + this.tagEndChar : this.indentate(i) + "<" + e + r + ">" + o + "</" + e + this.tagEndChar;
  }
}, _n.prototype.replaceEntitiesValue = function(n) {
  if (n && n.length > 0 && this.options.processEntities) for (let e = 0; e < this.options.entities.length; e++) {
    const r = this.options.entities[e];
    n = n.replace(r.regex, r.val);
  }
  return n;
};
const Yp = eu(function(n, e, r) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = nt({ url: Fe(n.remoteURL, ke(e)), method: "UNLOCK", headers: { "Lock-Token": r } }, n, i);
  return vo(tt(o, n), function(a) {
    if (rt(n, a), a.status !== 204 && a.status !== 200) throw Ro(a);
  });
}), Zp = eu(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { refreshToken: i, timeout: o = Kp } = r, a = { Accept: "text/plain,application/xml", Timeout: o };
  i && (a.If = i);
  const l = nt({ url: Fe(n.remoteURL, ke(e)), method: "LOCK", headers: a, data: Hp(n.contactHref) }, n, r);
  return vo(tt(l, n), function(f) {
    return rt(n, f), vo(f.text(), function(u) {
      const h = (g = u, new Xl({ removeNSPrefix: !0, parseAttributeValue: !0, parseTagValue: !0 }).parse(g)), s = un().get(h, "prop.lockdiscovery.activelock.locktoken.href"), d = un().get(h, "prop.lockdiscovery.activelock.timeout");
      var g;
      if (!s) throw Ro(f, "No lock token received: ");
      return { token: s, serverTimeout: d };
    });
  });
}), Kp = "Infinite, Second-4100000000";
function Wi(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const Jp = /* @__PURE__ */ function(n) {
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
  const r = e.path || "/", i = nt({ url: Fe(n.remoteURL, r), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, n, e);
  return Wi(tt(i, n), function(o) {
    return rt(n, o), Wi(o.text(), function(a) {
      return Wi(pi(a, n.parsing), function(l) {
        const f = function(u) {
          try {
            const [h] = u.multistatus.response, { propstat: { prop: { "quota-used-bytes": s, "quota-available-bytes": d } } } = h;
            return s !== void 0 && d !== void 0 ? { used: parseInt(String(s), 10), available: Op(d) } : null;
          } catch {
          }
          return null;
        }(l);
        return dr(o, f, e.details);
      });
    });
  });
});
function Vi(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const Qp = /* @__PURE__ */ function(n) {
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
  const { details: i = !1 } = r, o = nt({ url: Fe(n.remoteURL, ke(e)), method: "SEARCH", headers: { Accept: "text/plain,application/xml", "Content-Type": n.headers["Content-Type"] || "application/xml; charset=utf-8" } }, n, r);
  return Vi(tt(o, n), function(a) {
    return rt(n, a), Vi(a.text(), function(l) {
      return Vi(pi(l, n.parsing), function(f) {
        const u = function(h, s, d) {
          const g = { truncated: !1, results: [] };
          return g.truncated = h.multistatus.response.some((y) => {
            var b, E;
            return ((E = (y.status || ((b = y.propstat) == null ? void 0 : b.status)).split(" ", 3)) == null ? void 0 : E[1]) === "507" && y.href.replace(/\/$/, "").endsWith(ke(s).replace(/\/$/, ""));
          }), h.multistatus.response.forEach((y) => {
            if (y.propstat === void 0) return;
            const b = y.href.split("/").map(decodeURIComponent).join("/");
            g.results.push(Co(y.propstat.prop, b, d));
          }), g;
        }(f, e, i);
        return dr(a, u, i);
      });
    });
  });
}), ed = /* @__PURE__ */ function(n) {
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
  const o = nt({ url: Fe(n.remoteURL, ke(e)), method: "MOVE", headers: { Destination: Fe(n.remoteURL, ke(r)), Overwrite: i.overwrite === !1 ? "F" : "T" } }, n, i);
  return l = function(f) {
    rt(n, f);
  }, (a = tt(o, n)) && a.then || (a = Promise.resolve(a)), l ? a.then(l) : a;
  var a, l;
});
var td = Le(172);
function nd(n) {
  if (Dl(n)) return n.byteLength;
  if ($l(n)) return n.length;
  if (typeof n == "string") return (0, td.d)(n);
  throw new It({ info: { code: Sn.DataTypeNoLength } }, "Cannot calculate data length: Invalid type");
}
const rd = /* @__PURE__ */ function(n) {
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
  o === !1 || (l["Content-Length"] = typeof o == "number" ? `${o}` : `${nd(r)}`), a || (l["If-None-Match"] = "*");
  const f = nt({ url: Fe(n.remoteURL, ke(e)), method: "PUT", headers: l, data: r }, n, i);
  return h = function(s) {
    try {
      rt(n, s);
    } catch (d) {
      const g = d;
      if (g.status !== 412 || a) throw g;
      return !1;
    }
    return !0;
  }, (u = tt(f, n)) && u.then || (u = Promise.resolve(u)), h ? u.then(h) : u;
  var u, h;
}), tu = /* @__PURE__ */ function(n) {
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
  const i = nt({ url: Fe(n.remoteURL, ke(e)), method: "OPTIONS" }, n, r);
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
const id = Po(function(n, e, r, i, o) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  if (r > i || r < 0) throw new It({ info: { code: Sn.InvalidUpdateRange } }, `Invalid update range ${r} for partial update`);
  const l = { "Content-Type": "application/octet-stream", "Content-Length": "" + (i - r + 1), "Content-Range": `bytes ${r}-${i}/*` }, f = nt({ url: Fe(n.remoteURL, ke(e)), method: "PUT", headers: l, data: o }, n, a);
  return Rr(tt(f, n), function(u) {
    rt(n, u);
  });
});
function Ks(n, e) {
  var r = n();
  return r && r.then ? r.then(e) : e(r);
}
const od = Po(function(n, e, r, i, o) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  if (r > i || r < 0) throw new It({ info: { code: Sn.InvalidUpdateRange } }, `Invalid update range ${r} for partial update`);
  const l = { "Content-Type": "application/x-sabredav-partialupdate", "Content-Length": "" + (i - r + 1), "X-Update-Range": `bytes=${r}-${i}` }, f = nt({ url: Fe(n.remoteURL, ke(e)), method: "PATCH", headers: l, data: o }, n, a);
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
const sd = Po(function(n, e, r, i, o) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  return Rr(tu(n, e, a), function(l) {
    let f = !1;
    return Ks(function() {
      if (l.compliance.includes("sabredav-partialupdate")) return Rr(od(n, e, r, i, o, a), function(u) {
        return f = !0, u;
      });
    }, function(u) {
      let h = !1;
      return f ? u : Ks(function() {
        if (l.server.includes("Apache") && l.compliance.includes("<http://apache.org/dav/propset/fs/1>")) return Rr(id(n, e, r, i, o, a), function(s) {
          return h = !0, s;
        });
      }, function(s) {
        if (h) return s;
        throw new It({ info: { code: Sn.NotSupported } }, "Not supported");
      });
    });
  });
}), ad = "https://github.com/perry-mitchell/webdav-client/blob/master/LOCK_CONTACT.md";
function nu(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { authType: r = null, remoteBasePath: i, contactHref: o = ad, ha1: a, headers: l = {}, httpAgent: f, httpsAgent: u, password: h, token: s, username: d, withCredentials: g } = e;
  let y = r;
  y || (y = d || h ? Rt.Password : Rt.None);
  const b = { authType: y, remoteBasePath: i, contactHref: o, ha1: a, headers: Object.assign({}, l), httpAgent: f, httpsAgent: u, password: h, parsing: { attributeNamePrefix: e.attributeNamePrefix ?? "@", attributeParsers: [], tagParsers: [Hl] }, remotePath: mh(n), remoteURL: n, token: s, username: d, withCredentials: g };
  return xl(b, d, h, s, a), { copyFile: (E, T, S) => Zh(b, E, T, S), createDirectory: (E, T) => yo(b, E, T), createReadStream: (E, T) => function(S, C) {
    let x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const R = new (Ys()).PassThrough();
    return Lp(S, C, x).then((U) => {
      U.pipe(R);
    }).catch((U) => {
      R.emit("error", U);
    }), R;
  }(b, E, T), createWriteStream: (E, T, S) => function(C, x) {
    let R = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, U = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : xp;
    const Y = new (Ys()).PassThrough(), H = {};
    R.overwrite === !1 && (H["If-None-Match"] = "*");
    const se = nt({ url: Fe(C.remoteURL, ke(x)), method: "PUT", headers: H, data: Y, maxRedirects: 0 }, C, R);
    return tt(se, C).then((P) => rt(C, P)).then((P) => {
      setTimeout(() => {
        U(P);
      }, 0);
    }).catch((P) => {
      Y.emit("error", P);
    }), Y;
  }(b, E, T, S), customRequest: (E, T) => Pp(b, E, T), deleteFile: (E, T) => Dp(b, E, T), exists: (E, T) => $p(b, E, T), getDirectoryContents: (E, T) => kp(b, E, T), getFileContents: (E, T) => Up(b, E, T), getFileDownloadLink: (E) => function(T, S) {
    let C = Fe(T.remoteURL, ke(S));
    const x = /^https:/i.test(C) ? "https" : "http";
    switch (T.authType) {
      case Rt.None:
        break;
      case Rt.Password: {
        const R = Rs(T.headers.Authorization.replace(/^Basic /i, "").trim());
        C = C.replace(/^https?:\/\//, `${x}://${R}@`);
        break;
      }
      default:
        throw new It({ info: { code: Sn.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${T.authType}`);
    }
    return C;
  }(b, E), getFileUploadLink: (E) => function(T, S) {
    let C = `${Fe(T.remoteURL, ke(S))}?Content-Type=application/octet-stream`;
    const x = /^https:/i.test(C) ? "https" : "http";
    switch (T.authType) {
      case Rt.None:
        break;
      case Rt.Password: {
        const R = Rs(T.headers.Authorization.replace(/^Basic /i, "").trim());
        C = C.replace(/^https?:\/\//, `${x}://${R}@`);
        break;
      }
      default:
        throw new It({ info: { code: Sn.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${T.authType}`);
    }
    return C;
  }(b, E), getHeaders: () => Object.assign({}, b.headers), getQuota: (E) => Jp(b, E), lock: (E, T) => Zp(b, E, T), moveFile: (E, T, S) => ed(b, E, T, S), putFileContents: (E, T, S) => rd(b, E, T, S), partialUpdateFileContents: (E, T, S, C, x) => sd(b, E, T, S, C, x), getDAVCompliance: (E) => tu(b, E), search: (E, T) => Qp(b, E, T), setHeaders: (E) => {
    b.headers = Object.assign({}, E);
  }, stat: (E, T) => Lo(b, E, T), unlock: (E, T, S) => Yp(b, E, T, S), registerAttributeParser: (E) => {
    b.parsing.attributeParsers.push(E);
  }, registerTagParser: (E) => {
    b.parsing.tagParsers.push(E);
  } };
}
/*!
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
function ld(n = "") {
  let e = mt.NONE;
  return n && (n.includes("G") && (e |= mt.READ), n.includes("W") && (e |= mt.WRITE), n.includes("CK") && (e |= mt.CREATE), n.includes("NV") && (e |= mt.UPDATE), n.includes("D") && (e |= mt.DELETE), n.includes("R") && (e |= mt.SHARE)), e;
}
const ud = [
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
], cd = {
  d: "DAV:",
  nc: "http://nextcloud.org/ns",
  oc: "http://owncloud.org/ns",
  ocs: "http://open-collaboration-services.org/ns"
};
function fd() {
  return Be.davProperties ?? (Be.davProperties = [...ud]), Be.davProperties.map((n) => `<${n} />`).join(" ");
}
function hd() {
  return Be.davNamespaces ?? (Be.davNamespaces = { ...cd }), Object.keys(Be.davNamespaces).map((n) => {
    var e;
    return `xmlns:${n}="${(e = Be.davNamespaces) == null ? void 0 : e[n]}"`;
  }).join(" ");
}
function pd() {
  return `<?xml version="1.0"?>
		<d:propfind ${hd()}>
			<d:prop>
				${fd()}
			</d:prop>
		</d:propfind>`;
}
function dd() {
  var n;
  return pr() ? `/files/${Rl()}` : `/files/${(n = $r()) == null ? void 0 : n.uid}`;
}
const ru = dd();
function md() {
  const n = Tl("dav");
  return pr() ? n.replace("remote.php", "public.php") : n;
}
const iu = md();
function gd(n = iu, e = {}) {
  const r = nu(n, { headers: e });
  function i(a) {
    r.setHeaders({
      ...e,
      // Add this so the server knows it is an request from the browser
      "X-Requested-With": "XMLHttpRequest",
      // Inject user auth
      requesttoken: a ?? ""
    });
  }
  return ul(i), i(ll()), Ao().patch("fetch", (a, l) => {
    const f = l.headers;
    return f != null && f.method && (l.method = f.method, delete f.method), fetch(a, l);
  }), r;
}
function Ed(n, e = ru, r = iu) {
  var d, g;
  let i = (d = $r()) == null ? void 0 : d.uid;
  if (pr())
    i = i ?? "anonymous";
  else if (!i)
    throw new Error("No user id found");
  const o = n.props, a = ld(o == null ? void 0 : o.permissions), l = String((o == null ? void 0 : o["owner-id"]) || i), f = o.fileid || 0, u = new Date(Date.parse(n.lastmod)), h = new Date(Date.parse(o.creationdate)), s = {
    id: f,
    source: `${r}${n.filename}`,
    mtime: !isNaN(u.getTime()) && u.getTime() !== 0 ? u : void 0,
    crtime: !isNaN(h.getTime()) && h.getTime() !== 0 ? h : void 0,
    mime: n.mime || "application/octet-stream",
    // Manually cast to work around for https://github.com/perry-mitchell/webdav-client/pull/380
    displayname: o.displayname !== void 0 ? String(o.displayname) : void 0,
    size: (o == null ? void 0 : o.size) || Number.parseInt(o.getcontentlength || "0"),
    // The fileid is set to -1 for failed requests
    status: f < 0 ? ml.FAILED : void 0,
    permissions: a,
    owner: l,
    root: e,
    attributes: {
      ...n,
      ...o,
      hasPreview: o == null ? void 0 : o["has-preview"]
    }
  };
  return (g = s.attributes) == null || delete g.props, n.type === "file" ? new Dc(s) : new $c(s);
}
class Dt {
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
    existingContents: g,
    templateName: y,
    isPublicLink: b
  } = {}) {
    return {
      name: e || "?",
      downloadUrl: i || "",
      url: r ? ze(r) : "",
      dir: o || "",
      onCreate: a,
      fileModifiedTime: l || null,
      isNew: f || !1,
      isLoaded: u || !1,
      sameWindow: h || !1,
      skipConfirmation: s || !1,
      permissions: d || mt.NONE,
      existingContents: g,
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
    const a = gd(), l = `${ru}${o}`;
    try {
      if (await a.putFileContents(l, e, { overwrite: !0 })) {
        const u = await a.stat(l, { details: !0, data: pd() });
        return sl("files:node:created", Ed(u.data)), !0;
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
const Ke = Za(""), Ct = Za(Dt.getFileConfig());
function Js(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "You are about to visit:") + ""
  ), i, o, a, l, f = (
    /*file*/
    n[0].url + ""
  ), u, h, s;
  return {
    c() {
      e = Z("p"), i = Ie(r), o = pe(), a = Z("em"), l = Z("a"), u = Ie(f), j(l, "href", h = ze(
        /*file*/
        n[0].url
      )), j(l, "target", s = /*file*/
      n[0].sameWindow ? "_self" : "_blank"), j(e, "class", "urldisplay");
    },
    m(d, g) {
      oe(d, e, g), V(e, i), V(e, o), V(e, a), V(a, l), V(l, u);
    },
    p(d, g) {
      g & /*file*/
      1 && f !== (f = /*file*/
      d[0].url + "") && fr(u, f), g & /*file*/
      1 && h !== (h = ze(
        /*file*/
        d[0].url
      )) && j(l, "href", h), g & /*file*/
      1 && s !== (s = /*file*/
      d[0].sameWindow ? "_self" : "_blank") && j(l, "target", s);
    },
    d(d) {
      d && ie(e);
    }
  };
}
function Qs(n) {
  let e = Dt.userCanEdit(
    /*file*/
    n[0].permissions
  ) && !/*file*/
  n[0].isPublicLink, r, i, o = (
    /*t*/
    n[2]("files_linkeditor", "Visit link") + ""
  ), a, l, f, u = e && ea(n);
  return {
    c() {
      u && u.c(), r = pe(), i = Z("a"), a = Ie(o), j(i, "href", l = ze(
        /*file*/
        n[0].url
      )), j(i, "target", f = /*file*/
      n[0].sameWindow ? "_self" : "_blank"), j(i, "class", "button primary");
    },
    m(h, s) {
      u && u.m(h, s), oe(h, r, s), oe(h, i, s), V(i, a);
    },
    p(h, s) {
      s & /*file*/
      1 && (e = Dt.userCanEdit(
        /*file*/
        h[0].permissions
      ) && !/*file*/
      h[0].isPublicLink), e ? u ? u.p(h, s) : (u = ea(h), u.c(), u.m(r.parentNode, r)) : u && (u.d(1), u = null), s & /*file*/
      1 && l !== (l = ze(
        /*file*/
        h[0].url
      )) && j(i, "href", l), s & /*file*/
      1 && f !== (f = /*file*/
      h[0].sameWindow ? "_self" : "_blank") && j(i, "target", f);
    },
    d(h) {
      h && (ie(r), ie(i)), u && u.d(h);
    }
  };
}
function ea(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Edit link") + ""
  ), i, o, a;
  return {
    c() {
      e = Z("a"), i = Ie(r), j(e, "href", window.location.href), j(e, "class", "button");
    },
    m(l, f) {
      oe(l, e, f), V(e, i), o || (a = Ce(e, "click", wt(
        /*click_handler_1*/
        n[4]
      )), o = !0);
    },
    p: an,
    d(l) {
      l && ie(e), o = !1, a();
    }
  };
}
function wd(n) {
  let e, r, i = (
    /*file*/
    n[0].name + ""
  ), o, a, l, f, u, h = (
    /*t*/
    n[2]("files_linkeditor", "Cancel") + ""
  ), s, d, g, y, b = !/*loading*/
  n[1] && Js(n), E = !/*loading*/
  n[1] && Qs(n);
  return {
    c() {
      e = Z("div"), r = Z("h3"), o = Ie(i), a = pe(), b && b.c(), l = pe(), f = Z("div"), u = Z("a"), s = Ie(h), d = pe(), E && E.c(), j(e, "class", "edit push-bottom"), j(u, "href", window.location.href), j(u, "class", "button"), j(f, "class", "linkeditor-oc-dialog-buttonrow twobuttons");
    },
    m(T, S) {
      oe(T, e, S), V(e, r), V(r, o), V(e, a), b && b.m(e, null), oe(T, l, S), oe(T, f, S), V(f, u), V(u, s), V(f, d), E && E.m(f, null), g || (y = Ce(u, "click", wt(
        /*click_handler*/
        n[3]
      )), g = !0);
    },
    p(T, S) {
      S & /*file*/
      1 && i !== (i = /*file*/
      T[0].name + "") && fr(o, i), /*loading*/
      T[1] ? b && (b.d(1), b = null) : b ? b.p(T, S) : (b = Js(T), b.c(), b.m(e, null)), /*loading*/
      T[1] ? E && (E.d(1), E = null) : E ? E.p(T, S) : (E = Qs(T), E.c(), E.m(f, null));
    },
    d(T) {
      T && (ie(e), ie(l), ie(f)), b && b.d(), E && E.d(), g = !1, y();
    }
  };
}
function yd(n) {
  let e, r;
  return e = new hr({
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
      Vt(e.$$.fragment);
    },
    m(i, o) {
      kt(e, i, o), r = !0;
    },
    p(i, [o]) {
      const a = {};
      o & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), o & /*$$scope, file, loading*/
      67 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (Te(e.$$.fragment, i), r = !0);
    },
    o(i) {
      xe(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Ft(e, i);
    }
  };
}
function vd(n, e, r) {
  let i, o;
  const a = window.t;
  let l;
  Rn(() => {
    l = Ct.subscribe(async (h) => {
      if (r(0, i = h), i && i.isLoaded) {
        if (r(1, o = !1), !i.url) {
          OC.dialogs.alert(a("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."), a("files_linkeditor", "A slight problem"));
          return;
        }
        const s = i.isPublicLink && window.location.toString().includes("openfile=true");
        i.skipConfirmation && i.sameWindow && !s && (window.location.href = i.url, Ke.update(() => "none"));
      }
    });
  }), Cn(() => {
    l();
  });
  const f = () => {
    Ke.update(() => "none");
  }, u = () => {
    Ke.update(() => "edit");
  };
  return r(0, i = Dt.getFileConfig()), r(1, o = !0), [i, o, a, f, u];
}
class bd extends pn {
  constructor(e) {
    super(), hn(this, e, vd, yd, ln, {});
  }
}
var ou = { exports: {} };
(function(n) {
  var e = function(r) {
    var i = 1e7, o = 7, a = 9007199254740992, l = b(a), f = "0123456789abcdefghijklmnopqrstuvwxyz", u = typeof BigInt == "function";
    function h(w, N, L, $) {
      return typeof w > "u" ? h[0] : typeof N < "u" ? +N == 10 && !L ? ne(w) : Se(w, N, L, $) : ne(w);
    }
    function s(w, N) {
      this.value = w, this.sign = N, this.isSmall = !1;
    }
    s.prototype = Object.create(h.prototype);
    function d(w) {
      this.value = w, this.sign = w < 0, this.isSmall = !0;
    }
    d.prototype = Object.create(h.prototype);
    function g(w) {
      this.value = w;
    }
    g.prototype = Object.create(h.prototype);
    function y(w) {
      return -a < w && w < a;
    }
    function b(w) {
      return w < 1e7 ? [w] : w < 1e14 ? [w % 1e7, Math.floor(w / 1e7)] : [w % 1e7, Math.floor(w / 1e7) % 1e7, Math.floor(w / 1e14)];
    }
    function E(w) {
      T(w);
      var N = w.length;
      if (N < 4 && Xe(w, l) < 0)
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
      var L = w.length, $ = N.length, m = new Array(L), c = 0, p = i, v, A;
      for (A = 0; A < $; A++)
        v = w[A] + N[A] + c, c = v >= p ? 1 : 0, m[A] = v - c * p;
      for (; A < L; )
        v = w[A] + c, c = v === p ? 1 : 0, m[A++] = v - c * p;
      return c > 0 && m.push(c), m;
    }
    function R(w, N) {
      return w.length >= N.length ? x(w, N) : x(N, w);
    }
    function U(w, N) {
      var L = w.length, $ = new Array(L), m = i, c, p;
      for (p = 0; p < L; p++)
        c = w[p] - m + N, N = Math.floor(c / m), $[p] = c - N * m, N += 1;
      for (; N > 0; )
        $[p++] = N % m, N = Math.floor(N / m);
      return $;
    }
    s.prototype.add = function(w) {
      var N = ne(w);
      if (this.sign !== N.sign)
        return this.subtract(N.negate());
      var L = this.value, $ = N.value;
      return N.isSmall ? new s(U(L, Math.abs($)), this.sign) : new s(R(L, $), this.sign);
    }, s.prototype.plus = s.prototype.add, d.prototype.add = function(w) {
      var N = ne(w), L = this.value;
      if (L < 0 !== N.sign)
        return this.subtract(N.negate());
      var $ = N.value;
      if (N.isSmall) {
        if (y(L + $)) return new d(L + $);
        $ = b(Math.abs($));
      }
      return new s(U($, Math.abs(L)), L < 0);
    }, d.prototype.plus = d.prototype.add, g.prototype.add = function(w) {
      return new g(this.value + ne(w).value);
    }, g.prototype.plus = g.prototype.add;
    function Y(w, N) {
      var L = w.length, $ = N.length, m = new Array(L), c = 0, p = i, v, A;
      for (v = 0; v < $; v++)
        A = w[v] - c - N[v], A < 0 ? (A += p, c = 1) : c = 0, m[v] = A;
      for (v = $; v < L; v++) {
        if (A = w[v] - c, A < 0) A += p;
        else {
          m[v++] = A;
          break;
        }
        m[v] = A;
      }
      for (; v < L; v++)
        m[v] = w[v];
      return T(m), m;
    }
    function H(w, N, L) {
      var $;
      return Xe(w, N) >= 0 ? $ = Y(w, N) : ($ = Y(N, w), L = !L), $ = E($), typeof $ == "number" ? (L && ($ = -$), new d($)) : new s($, L);
    }
    function se(w, N, L) {
      var $ = w.length, m = new Array($), c = -N, p = i, v, A;
      for (v = 0; v < $; v++)
        A = w[v] + c, c = Math.floor(A / p), A %= p, m[v] = A < 0 ? A + p : A;
      return m = E(m), typeof m == "number" ? (L && (m = -m), new d(m)) : new s(m, L);
    }
    s.prototype.subtract = function(w) {
      var N = ne(w);
      if (this.sign !== N.sign)
        return this.add(N.negate());
      var L = this.value, $ = N.value;
      return N.isSmall ? se(L, Math.abs($), this.sign) : H(L, $, this.sign);
    }, s.prototype.minus = s.prototype.subtract, d.prototype.subtract = function(w) {
      var N = ne(w), L = this.value;
      if (L < 0 !== N.sign)
        return this.add(N.negate());
      var $ = N.value;
      return N.isSmall ? new d(L - $) : se($, Math.abs(L), L >= 0);
    }, d.prototype.minus = d.prototype.subtract, g.prototype.subtract = function(w) {
      return new g(this.value - ne(w).value);
    }, g.prototype.minus = g.prototype.subtract, s.prototype.negate = function() {
      return new s(this.value, !this.sign);
    }, d.prototype.negate = function() {
      var w = this.sign, N = new d(-this.value);
      return N.sign = !w, N;
    }, g.prototype.negate = function() {
      return new g(-this.value);
    }, s.prototype.abs = function() {
      return new s(this.value, !1);
    }, d.prototype.abs = function() {
      return new d(Math.abs(this.value));
    }, g.prototype.abs = function() {
      return new g(this.value >= 0 ? this.value : -this.value);
    };
    function P(w, N) {
      var L = w.length, $ = N.length, m = L + $, c = S(m), p = i, v, A, D, F, q;
      for (D = 0; D < L; ++D) {
        F = w[D];
        for (var re = 0; re < $; ++re)
          q = N[re], v = F * q + c[D + re], A = Math.floor(v / p), c[D + re] = v - A * p, c[D + re + 1] += A;
      }
      return T(c), c;
    }
    function we(w, N) {
      var L = w.length, $ = new Array(L), m = i, c = 0, p, v;
      for (v = 0; v < L; v++)
        p = w[v] * N + c, c = Math.floor(p / m), $[v] = p - c * m;
      for (; c > 0; )
        $[v++] = c % m, c = Math.floor(c / m);
      return $;
    }
    function J(w, N) {
      for (var L = []; N-- > 0; ) L.push(0);
      return L.concat(w);
    }
    function K(w, N) {
      var L = Math.max(w.length, N.length);
      if (L <= 30) return P(w, N);
      L = Math.ceil(L / 2);
      var $ = w.slice(L), m = w.slice(0, L), c = N.slice(L), p = N.slice(0, L), v = K(m, p), A = K($, c), D = K(R(m, $), R(p, c)), F = R(R(v, J(Y(Y(D, v), A), L)), J(A, 2 * L));
      return T(F), F;
    }
    function W(w, N) {
      return -0.012 * w - 0.012 * N + 15e-6 * w * N > 0;
    }
    s.prototype.multiply = function(w) {
      var N = ne(w), L = this.value, $ = N.value, m = this.sign !== N.sign, c;
      if (N.isSmall) {
        if ($ === 0) return h[0];
        if ($ === 1) return this;
        if ($ === -1) return this.negate();
        if (c = Math.abs($), c < i)
          return new s(we(L, c), m);
        $ = b(c);
      }
      return W(L.length, $.length) ? new s(K(L, $), m) : new s(P(L, $), m);
    }, s.prototype.times = s.prototype.multiply;
    function de(w, N, L) {
      return w < i ? new s(we(N, w), L) : new s(P(N, b(w)), L);
    }
    d.prototype._multiplyBySmall = function(w) {
      return y(w.value * this.value) ? new d(w.value * this.value) : de(Math.abs(w.value), b(Math.abs(this.value)), this.sign !== w.sign);
    }, s.prototype._multiplyBySmall = function(w) {
      return w.value === 0 ? h[0] : w.value === 1 ? this : w.value === -1 ? this.negate() : de(Math.abs(w.value), this.value, this.sign !== w.sign);
    }, d.prototype.multiply = function(w) {
      return ne(w)._multiplyBySmall(this);
    }, d.prototype.times = d.prototype.multiply, g.prototype.multiply = function(w) {
      return new g(this.value * ne(w).value);
    }, g.prototype.times = g.prototype.multiply;
    function Ee(w) {
      var N = w.length, L = S(N + N), $ = i, m, c, p, v, A;
      for (p = 0; p < N; p++) {
        v = w[p], c = 0 - v * v;
        for (var D = p; D < N; D++)
          A = w[D], m = 2 * (v * A) + L[p + D] + c, c = Math.floor(m / $), L[p + D] = m - c * $;
        L[p + N] = c;
      }
      return T(L), L;
    }
    s.prototype.square = function() {
      return new s(Ee(this.value), !1);
    }, d.prototype.square = function() {
      var w = this.value * this.value;
      return y(w) ? new d(w) : new s(Ee(b(Math.abs(this.value))), !1);
    }, g.prototype.square = function(w) {
      return new g(this.value * this.value);
    };
    function Ne(w, N) {
      var L = w.length, $ = N.length, m = i, c = S(N.length), p = N[$ - 1], v = Math.ceil(m / (2 * p)), A = we(w, v), D = we(N, v), F, q, re, le, ge, ve, zn;
      for (A.length <= L && A.push(0), D.push(0), p = D[$ - 1], q = L - $; q >= 0; q--) {
        for (F = m - 1, A[q + $] !== p && (F = Math.floor((A[q + $] * m + A[q + $ - 1]) / p)), re = 0, le = 0, ve = D.length, ge = 0; ge < ve; ge++)
          re += F * D[ge], zn = Math.floor(re / m), le += A[q + ge] - (re - zn * m), re = zn, le < 0 ? (A[q + ge] = le + m, le = -1) : (A[q + ge] = le, le = 0);
        for (; le !== 0; ) {
          for (F -= 1, re = 0, ge = 0; ge < ve; ge++)
            re += A[q + ge] - m + D[ge], re < 0 ? (A[q + ge] = re + m, re = 0) : (A[q + ge] = re, re = 1);
          le += re;
        }
        c[q] = F;
      }
      return A = Ae(A, v)[0], [E(c), E(A)];
    }
    function Q(w, N) {
      for (var L = w.length, $ = N.length, m = [], c = [], p = i, v, A, D, F, q; L; ) {
        if (c.unshift(w[--L]), T(c), Xe(c, N) < 0) {
          m.push(0);
          continue;
        }
        A = c.length, D = c[A - 1] * p + c[A - 2], F = N[$ - 1] * p + N[$ - 2], A > $ && (D = (D + 1) * p), v = Math.ceil(D / F);
        do {
          if (q = we(N, v), Xe(q, c) <= 0) break;
          v--;
        } while (v);
        m.push(v), c = Y(c, q);
      }
      return m.reverse(), [E(m), E(c)];
    }
    function Ae(w, N) {
      var L = w.length, $ = S(L), m = i, c, p, v, A;
      for (v = 0, c = L - 1; c >= 0; --c)
        A = v * m + w[c], p = C(A / N), v = A - p * N, $[c] = p | 0;
      return [$, v | 0];
    }
    function je(w, N) {
      var L, $ = ne(N);
      if (u)
        return [new g(w.value / $.value), new g(w.value % $.value)];
      var m = w.value, c = $.value, p;
      if (c === 0) throw new Error("Cannot divide by zero");
      if (w.isSmall)
        return $.isSmall ? [new d(C(m / c)), new d(m % c)] : [h[0], w];
      if ($.isSmall) {
        if (c === 1) return [w, h[0]];
        if (c == -1) return [w.negate(), h[0]];
        var v = Math.abs(c);
        if (v < i) {
          L = Ae(m, v), p = E(L[0]);
          var A = L[1];
          return w.sign && (A = -A), typeof p == "number" ? (w.sign !== $.sign && (p = -p), [new d(p), new d(A)]) : [new s(p, w.sign !== $.sign), new d(A)];
        }
        c = b(v);
      }
      var D = Xe(m, c);
      if (D === -1) return [h[0], w];
      if (D === 0) return [h[w.sign === $.sign ? 1 : -1], h[0]];
      m.length + c.length <= 200 ? L = Ne(m, c) : L = Q(m, c), p = L[0];
      var F = w.sign !== $.sign, q = L[1], re = w.sign;
      return typeof p == "number" ? (F && (p = -p), p = new d(p)) : p = new s(p, F), typeof q == "number" ? (re && (q = -q), q = new d(q)) : q = new s(q, re), [p, q];
    }
    s.prototype.divmod = function(w) {
      var N = je(this, w);
      return {
        quotient: N[0],
        remainder: N[1]
      };
    }, g.prototype.divmod = d.prototype.divmod = s.prototype.divmod, s.prototype.divide = function(w) {
      return je(this, w)[0];
    }, g.prototype.over = g.prototype.divide = function(w) {
      return new g(this.value / ne(w).value);
    }, d.prototype.over = d.prototype.divide = s.prototype.over = s.prototype.divide, s.prototype.mod = function(w) {
      return je(this, w)[1];
    }, g.prototype.mod = g.prototype.remainder = function(w) {
      return new g(this.value % ne(w).value);
    }, d.prototype.remainder = d.prototype.mod = s.prototype.remainder = s.prototype.mod, s.prototype.pow = function(w) {
      var N = ne(w), L = this.value, $ = N.value, m, c, p;
      if ($ === 0) return h[1];
      if (L === 0) return h[0];
      if (L === 1) return h[1];
      if (L === -1) return N.isEven() ? h[1] : h[-1];
      if (N.sign)
        return h[0];
      if (!N.isSmall) throw new Error("The exponent " + N.toString() + " is too large.");
      if (this.isSmall && y(m = Math.pow(L, $)))
        return new d(C(m));
      for (c = this, p = h[1]; $ & !0 && (p = p.times(c), --$), $ !== 0; )
        $ /= 2, c = c.square();
      return p;
    }, d.prototype.pow = s.prototype.pow, g.prototype.pow = function(w) {
      var N = ne(w), L = this.value, $ = N.value, m = BigInt(0), c = BigInt(1), p = BigInt(2);
      if ($ === m) return h[1];
      if (L === m) return h[0];
      if (L === c) return h[1];
      if (L === BigInt(-1)) return N.isEven() ? h[1] : h[-1];
      if (N.isNegative()) return new g(m);
      for (var v = this, A = h[1]; ($ & c) === c && (A = A.times(v), --$), $ !== m; )
        $ /= p, v = v.square();
      return A;
    }, s.prototype.modPow = function(w, N) {
      if (w = ne(w), N = ne(N), N.isZero()) throw new Error("Cannot take modPow with modulus 0");
      var L = h[1], $ = this.mod(N);
      for (w.isNegative() && (w = w.multiply(h[-1]), $ = $.modInv(N)); w.isPositive(); ) {
        if ($.isZero()) return h[0];
        w.isOdd() && (L = L.multiply($).mod(N)), w = w.divide(2), $ = $.square().mod(N);
      }
      return L;
    }, g.prototype.modPow = d.prototype.modPow = s.prototype.modPow;
    function Xe(w, N) {
      if (w.length !== N.length)
        return w.length > N.length ? 1 : -1;
      for (var L = w.length - 1; L >= 0; L--)
        if (w[L] !== N[L]) return w[L] > N[L] ? 1 : -1;
      return 0;
    }
    s.prototype.compareAbs = function(w) {
      var N = ne(w), L = this.value, $ = N.value;
      return N.isSmall ? 1 : Xe(L, $);
    }, d.prototype.compareAbs = function(w) {
      var N = ne(w), L = Math.abs(this.value), $ = N.value;
      return N.isSmall ? ($ = Math.abs($), L === $ ? 0 : L > $ ? 1 : -1) : -1;
    }, g.prototype.compareAbs = function(w) {
      var N = this.value, L = ne(w).value;
      return N = N >= 0 ? N : -N, L = L >= 0 ? L : -L, N === L ? 0 : N > L ? 1 : -1;
    }, s.prototype.compare = function(w) {
      if (w === 1 / 0)
        return -1;
      if (w === -1 / 0)
        return 1;
      var N = ne(w), L = this.value, $ = N.value;
      return this.sign !== N.sign ? N.sign ? 1 : -1 : N.isSmall ? this.sign ? -1 : 1 : Xe(L, $) * (this.sign ? -1 : 1);
    }, s.prototype.compareTo = s.prototype.compare, d.prototype.compare = function(w) {
      if (w === 1 / 0)
        return -1;
      if (w === -1 / 0)
        return 1;
      var N = ne(w), L = this.value, $ = N.value;
      return N.isSmall ? L == $ ? 0 : L > $ ? 1 : -1 : L < 0 !== N.sign ? L < 0 ? -1 : 1 : L < 0 ? 1 : -1;
    }, d.prototype.compareTo = d.prototype.compare, g.prototype.compare = function(w) {
      if (w === 1 / 0)
        return -1;
      if (w === -1 / 0)
        return 1;
      var N = this.value, L = ne(w).value;
      return N === L ? 0 : N > L ? 1 : -1;
    }, g.prototype.compareTo = g.prototype.compare, s.prototype.equals = function(w) {
      return this.compare(w) === 0;
    }, g.prototype.eq = g.prototype.equals = d.prototype.eq = d.prototype.equals = s.prototype.eq = s.prototype.equals, s.prototype.notEquals = function(w) {
      return this.compare(w) !== 0;
    }, g.prototype.neq = g.prototype.notEquals = d.prototype.neq = d.prototype.notEquals = s.prototype.neq = s.prototype.notEquals, s.prototype.greater = function(w) {
      return this.compare(w) > 0;
    }, g.prototype.gt = g.prototype.greater = d.prototype.gt = d.prototype.greater = s.prototype.gt = s.prototype.greater, s.prototype.lesser = function(w) {
      return this.compare(w) < 0;
    }, g.prototype.lt = g.prototype.lesser = d.prototype.lt = d.prototype.lesser = s.prototype.lt = s.prototype.lesser, s.prototype.greaterOrEquals = function(w) {
      return this.compare(w) >= 0;
    }, g.prototype.geq = g.prototype.greaterOrEquals = d.prototype.geq = d.prototype.greaterOrEquals = s.prototype.geq = s.prototype.greaterOrEquals, s.prototype.lesserOrEquals = function(w) {
      return this.compare(w) <= 0;
    }, g.prototype.leq = g.prototype.lesserOrEquals = d.prototype.leq = d.prototype.lesserOrEquals = s.prototype.leq = s.prototype.lesserOrEquals, s.prototype.isEven = function() {
      return (this.value[0] & 1) === 0;
    }, d.prototype.isEven = function() {
      return (this.value & 1) === 0;
    }, g.prototype.isEven = function() {
      return (this.value & BigInt(1)) === BigInt(0);
    }, s.prototype.isOdd = function() {
      return (this.value[0] & 1) === 1;
    }, d.prototype.isOdd = function() {
      return (this.value & 1) === 1;
    }, g.prototype.isOdd = function() {
      return (this.value & BigInt(1)) === BigInt(1);
    }, s.prototype.isPositive = function() {
      return !this.sign;
    }, d.prototype.isPositive = function() {
      return this.value > 0;
    }, g.prototype.isPositive = d.prototype.isPositive, s.prototype.isNegative = function() {
      return this.sign;
    }, d.prototype.isNegative = function() {
      return this.value < 0;
    }, g.prototype.isNegative = d.prototype.isNegative, s.prototype.isUnit = function() {
      return !1;
    }, d.prototype.isUnit = function() {
      return Math.abs(this.value) === 1;
    }, g.prototype.isUnit = function() {
      return this.abs().value === BigInt(1);
    }, s.prototype.isZero = function() {
      return !1;
    }, d.prototype.isZero = function() {
      return this.value === 0;
    }, g.prototype.isZero = function() {
      return this.value === BigInt(0);
    }, s.prototype.isDivisibleBy = function(w) {
      var N = ne(w);
      return N.isZero() ? !1 : N.isUnit() ? !0 : N.compareAbs(2) === 0 ? this.isEven() : this.mod(N).isZero();
    }, g.prototype.isDivisibleBy = d.prototype.isDivisibleBy = s.prototype.isDivisibleBy;
    function ce(w) {
      var N = w.abs();
      if (N.isUnit()) return !1;
      if (N.equals(2) || N.equals(3) || N.equals(5)) return !0;
      if (N.isEven() || N.isDivisibleBy(3) || N.isDivisibleBy(5)) return !1;
      if (N.lesser(49)) return !0;
    }
    function He(w, N) {
      for (var L = w.prev(), $ = L, m = 0, c, p, v; $.isEven(); ) $ = $.divide(2), m++;
      e: for (p = 0; p < N.length; p++)
        if (!w.lesser(N[p]) && (v = e(N[p]).modPow($, w), !(v.isUnit() || v.equals(L)))) {
          for (c = m - 1; c != 0; c--) {
            if (v = v.square().mod(w), v.isUnit()) return !1;
            if (v.equals(L)) continue e;
          }
          return !1;
        }
      return !0;
    }
    s.prototype.isPrime = function(w) {
      var N = ce(this);
      if (N !== r) return N;
      var L = this.abs(), $ = L.bitLength();
      if ($ <= 64)
        return He(L, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
      for (var m = Math.log(2) * $.toJSNumber(), c = Math.ceil(w === !0 ? 2 * Math.pow(m, 2) : m), p = [], v = 0; v < c; v++)
        p.push(e(v + 2));
      return He(L, p);
    }, g.prototype.isPrime = d.prototype.isPrime = s.prototype.isPrime, s.prototype.isProbablePrime = function(w, N) {
      var L = ce(this);
      if (L !== r) return L;
      for (var $ = this.abs(), m = w === r ? 5 : w, c = [], p = 0; p < m; p++)
        c.push(e.randBetween(2, $.minus(2), N));
      return He($, c);
    }, g.prototype.isProbablePrime = d.prototype.isProbablePrime = s.prototype.isProbablePrime, s.prototype.modInv = function(w) {
      for (var N = e.zero, L = e.one, $ = ne(w), m = this.abs(), c, p, v; !m.isZero(); )
        c = $.divide(m), p = N, v = $, N = L, $ = m, L = p.subtract(c.multiply(L)), m = v.subtract(c.multiply(m));
      if (!$.isUnit()) throw new Error(this.toString() + " and " + w.toString() + " are not co-prime");
      return N.compare(0) === -1 && (N = N.add(w)), this.isNegative() ? N.negate() : N;
    }, g.prototype.modInv = d.prototype.modInv = s.prototype.modInv, s.prototype.next = function() {
      var w = this.value;
      return this.sign ? se(w, 1, this.sign) : new s(U(w, 1), this.sign);
    }, d.prototype.next = function() {
      var w = this.value;
      return w + 1 < a ? new d(w + 1) : new s(l, !1);
    }, g.prototype.next = function() {
      return new g(this.value + BigInt(1));
    }, s.prototype.prev = function() {
      var w = this.value;
      return this.sign ? new s(U(w, 1), !0) : se(w, 1, this.sign);
    }, d.prototype.prev = function() {
      var w = this.value;
      return w - 1 > -a ? new d(w - 1) : new s(l, !0);
    }, g.prototype.prev = function() {
      return new g(this.value - BigInt(1));
    };
    for (var it = [1]; 2 * it[it.length - 1] <= i; ) it.push(2 * it[it.length - 1]);
    var _e = it.length, ye = it[_e - 1];
    function zt(w) {
      return Math.abs(w) <= i;
    }
    s.prototype.shiftLeft = function(w) {
      var N = ne(w).toJSNumber();
      if (!zt(N))
        throw new Error(String(N) + " is too large for shifting.");
      if (N < 0) return this.shiftRight(-N);
      var L = this;
      if (L.isZero()) return L;
      for (; N >= _e; )
        L = L.multiply(ye), N -= _e - 1;
      return L.multiply(it[N]);
    }, g.prototype.shiftLeft = d.prototype.shiftLeft = s.prototype.shiftLeft, s.prototype.shiftRight = function(w) {
      var N, L = ne(w).toJSNumber();
      if (!zt(L))
        throw new Error(String(L) + " is too large for shifting.");
      if (L < 0) return this.shiftLeft(-L);
      for (var $ = this; L >= _e; ) {
        if ($.isZero() || $.isNegative() && $.isUnit()) return $;
        N = je($, ye), $ = N[1].isNegative() ? N[0].prev() : N[0], L -= _e - 1;
      }
      return N = je($, it[L]), N[1].isNegative() ? N[0].prev() : N[0];
    }, g.prototype.shiftRight = d.prototype.shiftRight = s.prototype.shiftRight;
    function I(w, N, L) {
      N = ne(N);
      for (var $ = w.isNegative(), m = N.isNegative(), c = $ ? w.not() : w, p = m ? N.not() : N, v = 0, A = 0, D = null, F = null, q = []; !c.isZero() || !p.isZero(); )
        D = je(c, ye), v = D[1].toJSNumber(), $ && (v = ye - 1 - v), F = je(p, ye), A = F[1].toJSNumber(), m && (A = ye - 1 - A), c = D[0], p = F[0], q.push(L(v, A));
      for (var re = L($ ? 1 : 0, m ? 1 : 0) !== 0 ? e(-1) : e(0), le = q.length - 1; le >= 0; le -= 1)
        re = re.multiply(ye).add(e(q[le]));
      return re;
    }
    s.prototype.not = function() {
      return this.negate().prev();
    }, g.prototype.not = d.prototype.not = s.prototype.not, s.prototype.and = function(w) {
      return I(this, w, function(N, L) {
        return N & L;
      });
    }, g.prototype.and = d.prototype.and = s.prototype.and, s.prototype.or = function(w) {
      return I(this, w, function(N, L) {
        return N | L;
      });
    }, g.prototype.or = d.prototype.or = s.prototype.or, s.prototype.xor = function(w) {
      return I(this, w, function(N, L) {
        return N ^ L;
      });
    }, g.prototype.xor = d.prototype.xor = s.prototype.xor;
    var _ = 1 << 30, B = (i & -i) * (i & -i) | _;
    function k(w) {
      var N = w.value, L = typeof N == "number" ? N | _ : typeof N == "bigint" ? N | BigInt(_) : N[0] + N[1] * i | B;
      return L & -L;
    }
    function ee(w, N) {
      if (N.compareTo(w) <= 0) {
        var L = ee(w, N.square(N)), $ = L.p, m = L.e, c = $.multiply(N);
        return c.compareTo(w) <= 0 ? { p: c, e: m * 2 + 1 } : { p: $, e: m * 2 };
      }
      return { p: e(1), e: 0 };
    }
    s.prototype.bitLength = function() {
      var w = this;
      return w.compareTo(e(0)) < 0 && (w = w.negate().subtract(e(1))), w.compareTo(e(0)) === 0 ? e(0) : e(ee(w, e(2)).e).add(e(1));
    }, g.prototype.bitLength = d.prototype.bitLength = s.prototype.bitLength;
    function Oe(w, N) {
      return w = ne(w), N = ne(N), w.greater(N) ? w : N;
    }
    function ae(w, N) {
      return w = ne(w), N = ne(N), w.lesser(N) ? w : N;
    }
    function Me(w, N) {
      if (w = ne(w).abs(), N = ne(N).abs(), w.equals(N)) return w;
      if (w.isZero()) return N;
      if (N.isZero()) return w;
      for (var L = h[1], $, m; w.isEven() && N.isEven(); )
        $ = ae(k(w), k(N)), w = w.divide($), N = N.divide($), L = L.multiply($);
      for (; w.isEven(); )
        w = w.divide(k(w));
      do {
        for (; N.isEven(); )
          N = N.divide(k(N));
        w.greater(N) && (m = N, N = w, w = m), N = N.subtract(w);
      } while (!N.isZero());
      return L.isUnit() ? w : w.multiply(L);
    }
    function me(w, N) {
      return w = ne(w).abs(), N = ne(N).abs(), w.divide(Me(w, N)).multiply(N);
    }
    function Ge(w, N, L) {
      w = ne(w), N = ne(N);
      var $ = L || Math.random, m = ae(w, N), c = Oe(w, N), p = c.subtract(m).add(1);
      if (p.isSmall) return m.add(Math.floor($() * p));
      for (var v = ft(p, i).value, A = [], D = !0, F = 0; F < v.length; F++) {
        var q = D ? v[F] + (F + 1 < v.length ? v[F + 1] / i : 0) : i, re = C($() * q);
        A.push(re), re < v[F] && (D = !1);
      }
      return m.add(h.fromArray(A, i, !1));
    }
    var Se = function(w, N, L, $) {
      L = L || f, w = String(w), $ || (w = w.toLowerCase(), L = L.toLowerCase());
      var m = w.length, c, p = Math.abs(N), v = {};
      for (c = 0; c < L.length; c++)
        v[L[c]] = c;
      for (c = 0; c < m; c++) {
        var A = w[c];
        if (A !== "-" && A in v && v[A] >= p) {
          if (A === "1" && p === 1) continue;
          throw new Error(A + " is not a valid digit in base " + N + ".");
        }
      }
      N = ne(N);
      var D = [], F = w[0] === "-";
      for (c = F ? 1 : 0; c < w.length; c++) {
        var A = w[c];
        if (A in v) D.push(ne(v[A]));
        else if (A === "<") {
          var q = c;
          do
            c++;
          while (w[c] !== ">" && c < w.length);
          D.push(ne(w.slice(q + 1, c)));
        } else throw new Error(A + " is not a valid character");
      }
      return De(D, N, F);
    };
    function De(w, N, L) {
      var $ = h[0], m = h[1], c;
      for (c = w.length - 1; c >= 0; c--)
        $ = $.add(w[c].times(m)), m = m.times(N);
      return L ? $.negate() : $;
    }
    function mn(w, N) {
      return N = N || f, w < N.length ? N[w] : "<" + w + ">";
    }
    function ft(w, N) {
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
      for (var m = [], c = w, p; c.isNegative() || c.compareAbs(N) >= 0; ) {
        p = c.divmod(N), c = p.quotient;
        var v = p.remainder;
        v.isNegative() && (v = N.minus(v).abs(), c = c.next()), m.push(v.toJSNumber());
      }
      return m.push(c.toJSNumber()), { value: m.reverse(), isNegative: $ };
    }
    function qt(w, N, L) {
      var $ = ft(w, N);
      return ($.isNegative ? "-" : "") + $.value.map(function(m) {
        return mn(m, L);
      }).join("");
    }
    s.prototype.toArray = function(w) {
      return ft(this, w);
    }, d.prototype.toArray = function(w) {
      return ft(this, w);
    }, g.prototype.toArray = function(w) {
      return ft(this, w);
    }, s.prototype.toString = function(w, N) {
      if (w === r && (w = 10), w !== 10 || N) return qt(this, w, N);
      for (var L = this.value, $ = L.length, m = String(L[--$]), c = "0000000", p; --$ >= 0; )
        p = String(L[$]), m += c.slice(p.length) + p;
      var v = this.sign ? "-" : "";
      return v + m;
    }, d.prototype.toString = function(w, N) {
      return w === r && (w = 10), w != 10 || N ? qt(this, w, N) : String(this.value);
    }, g.prototype.toString = d.prototype.toString, g.prototype.toJSON = s.prototype.toJSON = d.prototype.toJSON = function() {
      return this.toString();
    }, s.prototype.valueOf = function() {
      return parseInt(this.toString(), 10);
    }, s.prototype.toJSNumber = s.prototype.valueOf, d.prototype.valueOf = function() {
      return this.value;
    }, d.prototype.toJSNumber = d.prototype.valueOf, g.prototype.valueOf = g.prototype.toJSNumber = function() {
      return parseInt(this.toString(), 10);
    };
    function Zt(w) {
      if (y(+w)) {
        var N = +w;
        if (N === C(N))
          return u ? new g(BigInt(N)) : new d(N);
        throw new Error("Invalid integer: " + w);
      }
      var L = w[0] === "-";
      L && (w = w.slice(1));
      var $ = w.split(/e/i);
      if ($.length > 2) throw new Error("Invalid integer: " + $.join("e"));
      if ($.length === 2) {
        var m = $[1];
        if (m[0] === "+" && (m = m.slice(1)), m = +m, m !== C(m) || !y(m)) throw new Error("Invalid integer: " + m + " is not a valid exponent.");
        var c = $[0], p = c.indexOf(".");
        if (p >= 0 && (m -= c.length - p - 1, c = c.slice(0, p) + c.slice(p + 1)), m < 0) throw new Error("Cannot include negative exponent part for integers");
        c += new Array(m + 1).join("0"), w = c;
      }
      var v = /^([0-9][0-9]*)$/.test(w);
      if (!v) throw new Error("Invalid integer: " + w);
      if (u)
        return new g(BigInt(L ? "-" + w : w));
      for (var A = [], D = w.length, F = o, q = D - F; D > 0; )
        A.push(+w.slice(q, D)), q -= F, q < 0 && (q = 0), D -= F;
      return T(A), new s(A, L);
    }
    function Lt(w) {
      if (u)
        return new g(BigInt(w));
      if (y(w)) {
        if (w !== C(w)) throw new Error(w + " is not an integer.");
        return new d(w);
      }
      return Zt(w.toString());
    }
    function ne(w) {
      return typeof w == "number" ? Lt(w) : typeof w == "string" ? Zt(w) : typeof w == "bigint" ? new g(w) : w;
    }
    for (var Re = 0; Re < 1e3; Re++)
      h[Re] = ne(Re), Re > 0 && (h[-Re] = ne(-Re));
    return h.one = h[1], h.zero = h[0], h.minusOne = h[-1], h.max = Oe, h.min = ae, h.gcd = Me, h.lcm = me, h.isInstance = function(w) {
      return w instanceof s || w instanceof d || w instanceof g;
    }, h.randBetween = Ge, h.fromArray = function(w, N, L) {
      return De(w.map(ne), ne(N || 10), L);
    }, h;
  }();
  n.hasOwnProperty("exports") && (n.exports = e);
})(ou);
var _d = ou.exports;
const Td = /* @__PURE__ */ bo(_d), Ut = 100 * 1e3 * 1e3, Nd = 32768, Id = 9783072e5;
class Ad {
  constructor(e) {
    console.info({ id: e });
  }
}
class Od {
  constructor() {
    this.debug = !1;
  }
  parse64Content(e) {
    const r = window.atob(e), i = r.length, o = new vl(i);
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
    if (this.debug && console.log("offsetTableOffset: " + h), f > Nd)
      throw new Error("maxObjectCount exceeded");
    const s = [];
    for (let g = 0; g < f; g++) {
      const y = e.slice(h + g * a, h + (g + 1) * a);
      s[g] = this.readUInt(y, 0), this.debug;
    }
    const d = (g) => {
      const y = s[g], b = e[y], E = (b & 240) >> 4, T = b & 15, S = () => {
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
      }, C = (J) => {
        let K = "", W;
        for (W = 0; W < J.length && J[W] === 0; W++)
          ;
        for (; W < J.length; W++) {
          const de = "00" + J[W].toString(16);
          K += de.substr(de.length - 2);
        }
        return K;
      }, x = () => {
        const J = Math.pow(2, T);
        if (J > 4) {
          const K = e.slice(y + 1, y + 1 + J), W = C(K);
          return Td(W, 16);
        }
        if (J < Ut)
          return this.readUInt(e.slice(y + 1, y + 1 + J));
        throw new Error(
          "Too little heap space available! Wanted to read " + J + " bytes, but only " + Ut + " are available."
        );
      }, R = () => {
        const J = T + 1;
        if (J < Ut)
          return new Ad(this.readUInt(e.slice(y + 1, y + 1 + J)));
        throw new Error(
          "To little heap space available! Wanted to read " + J + " bytes, but only " + Ut + " are available."
        );
      }, U = () => {
        const J = Math.pow(2, T);
        if (J < Ut) {
          const K = e.slice(y + 1, y + 1 + J);
          if (J === 4)
            return K.readFloatBE(0);
          if (J === 8)
            return K.readDoubleBE(0);
        } else
          throw new Error(
            "To little heap space available! Wanted to read " + J + " bytes, but only " + Ut + " are available."
          );
      }, Y = () => {
        T !== 3 && console.error("Unknown date type :" + T + ". Parsing anyway...");
        const J = e.slice(y + 1, y + 9);
        return new Date(Id + 1e3 * J.readDoubleBE(0));
      }, H = () => {
        let J = 1, K = T;
        if (T === 15) {
          const W = e[y + 1], de = (W & 240) / 16;
          de !== 1 && console.error("0x4: UNEXPECTED LENGTH-INT TYPE! " + de);
          const Ee = W & 15, Ne = Math.pow(2, Ee);
          J = 2 + Ne, Ne < 3 ? K = this.readUInt(e.slice(y + 2, y + 2 + Ne)) : K = this.readUInt(e.slice(y + 2, y + 2 + Ne));
        }
        if (K < Ut)
          return e.slice(y + J, y + J + K);
        throw new Error(
          "To little heap space available! Wanted to read " + K + " bytes, but only " + Ut + " are available."
        );
      }, se = (J) => {
        J = J || 0;
        let K = "utf8", W = T, de = 1;
        if (T === 15) {
          const Ee = e[y + 1], Ne = (Ee & 240) / 16;
          Ne !== 1 && console.error("UNEXPECTED LENGTH-INT TYPE! " + Ne);
          const Q = Ee & 15, Ae = Math.pow(2, Q);
          de = 2 + Ae, Ae < 3 ? W = this.readUInt(e.slice(y + 2, y + 2 + Ae)) : W = this.readUInt(e.slice(y + 2, y + 2 + Ae));
        }
        if (W *= J + 1, W < Ut) {
          let Ee = e.toString("utf8", y + de, y + de + W);
          return J && (Ee = this.swapBytes(Ee), K = "ucs2"), Ee.toString(K);
        } else
          throw new Error(
            "To little heap space available! Wanted to read " + W + " bytes, but only " + Ut + " are available."
          );
      }, P = () => {
        let J = T, K = 1;
        if (T === 15) {
          const de = e[y + 1], Ee = (de & 240) / 16;
          Ee !== 1 && console.error("0xa: UNEXPECTED LENGTH-INT TYPE! " + Ee);
          const Ne = de & 15, Q = Math.pow(2, Ne);
          K = 2 + Q, Q < 3 ? J = this.readUInt(e.slice(y + 2, y + 2 + Q)) : J = this.readUInt(e.slice(y + 2, y + 2 + Q));
        }
        if (J * l > Ut)
          throw new Error("To little heap space available!");
        const W = [];
        for (let de = 0; de < J; de++) {
          const Ee = this.readUInt(
            e.slice(y + K + de * l, y + K + (de + 1) * l)
          );
          W[de] = d(Ee);
        }
        return W;
      }, we = () => {
        let J = T, K = 1;
        if (T === 15) {
          const de = e[y + 1], Ee = (de & 240) / 16;
          Ee !== 1 && console.error("0xD: UNEXPECTED LENGTH-INT TYPE! " + Ee);
          const Ne = de & 15, Q = Math.pow(2, Ne);
          K = 2 + Q, Q < 3 ? J = this.readUInt(e.slice(y + 2, y + 2 + Q)) : J = this.readUInt(e.slice(y + 2, y + 2 + Q));
        }
        if (J * 2 * l > Ut)
          throw new Error("To little heap space available!");
        this.debug && console.log("Parsing dictionary #" + g);
        const W = {};
        for (let de = 0; de < J; de++) {
          const Ee = this.readUInt(
            e.slice(y + K + de * l, y + K + (de + 1) * l)
          ), Ne = this.readUInt(
            e.slice(
              y + K + J * l + de * l,
              y + K + J * l + (de + 1) * l
            )
          ), Q = d(Ee), Ae = d(Ne);
          this.debug && console.log("  DICT #" + g + ": Mapped " + Q + " to " + Ae), W[Q] = Ae;
        }
        return W;
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
          return Y();
        case 4:
          return H();
        case 5:
          return se();
        case 6:
          return se(!0);
        case 10:
          return P();
        case 13:
          return we();
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
const Sd = new Od(), Qt = {
  skipConfirmation: "X-Skip-Confirm-Navigation=1",
  sameWindow: "X-Target=_self"
}, vn = {
  skipConfirmation: "X-Skip-Confirm-Navigation",
  sameWindow: "X-Target"
}, ta = {
  url: "",
  sameWindow: !1,
  skipConfirmation: !1
};
class Wt {
  /**
   * Generates a URL file.
   */
  static generateURLFileContent(e, r, i = !1, o = !1) {
    let a = "";
    return e && e.indexOf("[InternetShortcut]") !== -1 && e.indexOf("URL=") !== -1 ? a = e.replace(new RegExp("URL=.*", "gm"), `URL=${ze(r)}`) : a = `[InternetShortcut]\r
URL=${ze(r)}`, !i && a.indexOf(Qt.sameWindow) !== -1 ? a = a.replace(Qt.sameWindow, "") : i && a.indexOf(Qt.sameWindow) === -1 && (a = `${a}\r
${Qt.sameWindow}`), !o && a.indexOf(Qt.skipConfirmation) !== -1 ? a = a.replace(Qt.skipConfirmation, "") : o && a.indexOf(Qt.skipConfirmation) === -1 && (a = `${a}\r
${Qt.skipConfirmation}`), a = a.replace(/\r\n\r\n/gm, `\r
`).trim(), `${a}\r
`;
  }
  /**
   * Parse a URL file.
   */
  static parseURLFile(e) {
    const r = { ...ta };
    if (e) {
      const i = e.match("URL=.*");
      if (i && Array.isArray(i) && i.length > 0) {
        const o = i[0];
        r.url = ze(o.replace("URL=", ""));
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
      const f = new window.DOMParser(), u = ra(e), h = f.parseFromString(u, "text/xml"), s = [...h.getElementsByTagName("dict"), ...h.getElementsByTagName("extra")];
      let d = !1, g = !1;
      if (s && s.length)
        for (const b of s) {
          const E = b.getElementsByTagName("key"), T = b.getElementsByTagName("string");
          Yt(E) === "URL" && (zi(T, ze(r)), l = !0), Yt(E) === vn.sameWindow && Yt(T) === "_self" && (i ? zi(T, "_self") : h.getElementsByTagName("plist")[0].removeChild(b), g = !0), Yt(E) === vn.skipConfirmation && Yt(T) === "1" && (o ? zi(T, "1") : h.getElementsByTagName("plist")[0].removeChild(b), d = !0);
        }
      if (i && !g) {
        const b = na(h, vn.sameWindow, "_self");
        h.getElementsByTagName("plist")[0].appendChild(b);
      }
      if (o && !d) {
        const b = na(h, vn.skipConfirmation, "1");
        h.getElementsByTagName("plist")[0].appendChild(b);
      }
      a = `<?xml version="1.0" encoding="UTF-8"?>
			${new window.XMLSerializer().serializeToString(h)}`, a.indexOf("parsererror") > -1 && (console.error("Parse error", a), a = ""), a = Rd(a);
    }
    return (!a || !l) && (a = `<?xml version="1.0" encoding="UTF-8"?>
				<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
				<plist version="1.0">
					<dict>
						<key>URL</key>
						<string>${ze(r)}</string>
					</dict>`, i && (a = `${a}
				<extra>
					<key>${vn.sameWindow}</key>
					<string>_self</string>
				</extra>`), o && (a = `${a}
				<extra>
					<key>${vn.skipConfirmation}</key>
					<string>1</string>
				</extra>`), a = `${a}
			</plist>`), a = Cd(a), a = a.replace(/(\n|\b)\t+/g, "$1").trim(), a = a.replace(/^\s*$(?:\r\n?|\n)/gm, "").trim(), a;
  }
  /**
   * Parse a webloc file.
   */
  static parseWeblocFile(e) {
    const r = { ...ta };
    if (e)
      if (e.substring(0, 6) === "bplist")
        try {
          const i = Sd.parse64Content(window.btoa(e));
          i && i.length && i[0] && i[0].URL && (r.url = i[0].URL);
        } catch (i) {
          console.info(i);
        }
      else {
        const i = new window.DOMParser(), o = ra(e), a = i.parseFromString(o, "text/xml"), l = [...a.getElementsByTagName("dict"), ...a.getElementsByTagName("extra")];
        if (l && l.length)
          for (const f of l) {
            const u = f.getElementsByTagName("key"), h = f.getElementsByTagName("string");
            Yt(u) === "URL" && (r.url = ze(Yt(h))), Yt(u) === vn.sameWindow && Yt(h) === "_self" && (r.sameWindow = !0), Yt(u) === vn.skipConfirmation && Yt(h) === "1" && (r.skipConfirmation = !0);
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
const Yt = (n) => n && n.length > 0 && n[0].childNodes && n[0].childNodes.length > 0 && n[0].childNodes[0] ? n[0].childNodes[0].nodeValue : "", zi = (n, e) => {
  n && n.length > 0 && n[0].childNodes && n[0].childNodes.length > 0 && n[0].childNodes[0] && (n[0].childNodes[0].nodeValue = e);
}, na = (n, e, r) => {
  const i = n.createElement("extra"), o = n.createElement("key");
  o.appendChild(n.createTextNode(e)), i.appendChild(o);
  const a = n.createElement("string");
  return a.appendChild(n.createTextNode(r)), i.appendChild(a), i;
}, Rd = (n) => n.replace(/></g, `>
<`), Cd = (n) => n.replace(/<extra>/g, "<!-- <extra>").replace(/<\/extra>/g, "</extra> -->"), ra = (n) => n.replace(/<!-- <extra>/g, "<extra>").replace(/<\/extra> -->/g, "</extra>"), ia = "application/internet-shortcut", qi = () => '<span class="icon-link" style="display: block;"></span>';
class Bn {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    Ts({
      id: "editLink",
      displayName: () => t("files_linkeditor", "Edit link"),
      iconSvgInline: qi,
      exec: async ({ nodes: r }) => {
        const [i] = r;
        i && await Bn.loadAndChangeViewMode({
          fileName: i.basename,
          dirName: i.dirname,
          nextViewMode: "edit",
          permissions: i.permissions
        });
      },
      enabled: ({ nodes: r }) => window.OC.currentUser && r.every((i) => i.permissions >= mt.WRITE && ia.includes(i.mime))
    }), Ts({
      id: "viewLink",
      displayName: () => t("files_linkeditor", "View link"),
      title: () => "Hello",
      iconSvgInline: qi,
      exec: async ({ nodes: r }) => {
        const [i] = r;
        i && (window.OC.currentUser ? await Bn.loadAndChangeViewMode({
          fileName: i.basename,
          dirName: i.dirname,
          nextViewMode: "view",
          permissions: i.permissions
        }) : await Bn.loadAndChangeViewMode({
          fileName: i.displayname ?? i.basename,
          dirName: i.dirname,
          nextViewMode: "view",
          // TODO:
          downloadUrl: i.source,
          publicUser: !0,
          permissions: i.permissions
        }));
      },
      enabled: ({ nodes: r }) => r.every((i) => i.permissions >= mt.READ && ia.includes(i.mime)),
      default: Ol.DEFAULT
    });
    const e = ({ id: r, displayName: i, templateName: o }) => {
      ch({
        id: r,
        displayName: i,
        enabled: (a) => a.permissions >= mt.CREATE,
        iconSvgInline: qi(),
        category: Sl.CreateNew,
        handler: (a, l) => {
          const f = a.path;
          Ke.update(() => "filename"), Ct.update(
            () => Dt.getFileConfig({
              name: o,
              templateName: o,
              dir: f,
              isNew: !0,
              existingContents: l,
              onCreate: async (u) => {
                Ke.update(() => "edit"), Ct.update(
                  () => Dt.getFileConfig({
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
    Ke.update(() => i), Ct.update(
      () => Dt.getFileConfig({
        name: e,
        dir: r || "",
        permissions: l,
        isPublicLink: o
      })
    );
    let f = {};
    if (o ? f = await Dt.loadPublic({ downloadUrl: a }) : f = await Dt.load({ fileName: e, dir: r }), f) {
      const u = Wt.getExtension(e);
      let h = {};
      u === "webloc" ? h = Wt.parseWeblocFile(f.filecontents) : h = Wt.parseURLFile(f.filecontents), Ct.update(
        (s) => Dt.getFileConfig({
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
    const l = Wt.getExtension(e);
    let f = "";
    l === "webloc" ? f = Wt.generateWeblocFileContent("", i, o, a) : f = Wt.generateURLFileContent("", i, o, a), await Dt.save({ fileContent: f, name: e, dir: r }), Ke.update(() => "none");
  }
}
function oa(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Link target URL") + ""
  ), i, o, a, l, f, u, h, s, d, g, y, b, E, T, S, C;
  return {
    c() {
      e = Z("label"), i = Ie(r), o = pe(), a = Z("br"), l = pe(), f = Z("input"), u = pe(), h = Z("input"), s = pe(), d = Z("label"), d.textContent = `${/*t*/
      n[2]("files_linkeditor", "Open in same window")}`, g = pe(), y = Z("input"), E = pe(), T = Z("label"), T.textContent = `${/*t*/
      n[2]("files_linkeditor", "Skip confirmation dialog before open (has to open in same window)")}`, j(f, "type", "text"), Dr(f, "width", "100%"), j(f, "class", "input-wide"), f.autofocus = !0, j(f, "data-cy", "url-input"), j(
        f,
        "placeholder",
        /*t*/
        n[2]("files_linkeditor", "e.g. https://example.org")
      ), j(h, "type", "checkbox"), j(h, "id", "linkeditor_sameWindow"), j(h, "class", "checkbox"), j(d, "for", "linkeditor_sameWindow"), j(d, "class", "space-top"), j(y, "type", "checkbox"), y.disabled = b = !/*file*/
      n[0].sameWindow, j(y, "id", "linkeditor_skipConfirmation"), j(y, "class", "checkbox"), j(T, "for", "linkeditor_skipConfirmation");
    },
    m(x, R) {
      oe(x, e, R), V(e, i), V(e, o), V(e, a), V(e, l), V(e, f), On(
        f,
        /*file*/
        n[0].url
      ), oe(x, u, R), oe(x, h, R), h.checked = /*file*/
      n[0].sameWindow, oe(x, s, R), oe(x, d, R), oe(x, g, R), oe(x, y, R), y.checked = /*file*/
      n[0].skipConfirmation, oe(x, E, R), oe(x, T, R), f.focus(), S || (C = [
        Ce(
          f,
          "input",
          /*input0_input_handler*/
          n[5]
        ),
        Ce(
          h,
          "change",
          /*input1_change_handler*/
          n[6]
        ),
        Ce(
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
      x[0].url && On(
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
      x && (ie(e), ie(u), ie(h), ie(s), ie(d), ie(g), ie(y), ie(E), ie(T)), S = !1, $t(C);
    }
  };
}
function sa(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Visit link") + ""
  ), i, o;
  return {
    c() {
      e = Z("a"), i = Ie(r), j(e, "href", o = ze(
        /*file*/
        n[0].url
      )), j(e, "target", "_blank"), j(e, "class", "button");
    },
    m(a, l) {
      oe(a, e, l), V(e, i);
    },
    p(a, l) {
      l & /*file*/
      1 && o !== (o = ze(
        /*file*/
        a[0].url
      )) && j(e, "href", o);
    },
    d(a) {
      a && ie(e);
    }
  };
}
function aa(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Save") + ""
  ), i, o, a;
  return {
    c() {
      e = Z("a"), i = Ie(r), j(e, "href", window.location.href), j(e, "class", "primary button");
    },
    m(l, f) {
      oe(l, e, f), V(e, i), o || (a = Ce(e, "click", wt(
        /*save*/
        n[4]
      )), o = !0);
    },
    p: an,
    d(l) {
      l && ie(e), o = !1, a();
    }
  };
}
function Ld(n) {
  let e, r, i, o = (
    /*file*/
    n[0].name + ""
  ), a, l, f, u, h, s, d, g = (
    /*t*/
    n[2]("files_linkeditor", "Cancel") + ""
  ), y, b, E, T, S = !/*loading*/
  n[1] && oa(n), C = !/*loading*/
  n[1] && sa(n), x = !/*loading*/
  n[1] && aa(n);
  return {
    c() {
      e = Z("form"), r = Z("div"), i = Z("h3"), a = Ie(o), l = pe(), S && S.c(), f = pe(), u = Z("div"), C && C.c(), h = pe(), s = Z("div"), d = Z("a"), y = Ie(g), b = pe(), x && x.c(), j(r, "class", "edit"), j(u, "class", "linkeditor-oc-dialog-buttonrow onebutton urlvisit"), j(d, "href", window.location.href), j(d, "class", "cancel button"), j(s, "class", "linkeditor-oc-dialog-buttonrow twobuttons"), j(
        e,
        "action",
        /*OC*/
        n[3].generateUrl("/")
      ), j(e, "method", "post");
    },
    m(R, U) {
      oe(R, e, U), V(e, r), V(r, i), V(i, a), V(r, l), S && S.m(r, null), V(e, f), V(e, u), C && C.m(u, null), V(e, h), V(e, s), V(s, d), V(d, y), V(s, b), x && x.m(s, null), E || (T = [
        Ce(d, "click", wt(
          /*click_handler*/
          n[8]
        )),
        Ce(e, "submit", wt(
          /*save*/
          n[4]
        ))
      ], E = !0);
    },
    p(R, U) {
      U & /*file*/
      1 && o !== (o = /*file*/
      R[0].name + "") && fr(a, o), /*loading*/
      R[1] ? S && (S.d(1), S = null) : S ? S.p(R, U) : (S = oa(R), S.c(), S.m(r, null)), /*loading*/
      R[1] ? C && (C.d(1), C = null) : C ? C.p(R, U) : (C = sa(R), C.c(), C.m(u, null)), /*loading*/
      R[1] ? x && (x.d(1), x = null) : x ? x.p(R, U) : (x = aa(R), x.c(), x.m(s, null));
    },
    d(R) {
      R && ie(e), S && S.d(), C && C.d(), x && x.d(), E = !1, $t(T);
    }
  };
}
function xd(n) {
  let e, r;
  return e = new hr({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [Ld] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Vt(e.$$.fragment);
    },
    m(i, o) {
      kt(e, i, o), r = !0;
    },
    p(i, [o]) {
      const a = {};
      o & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), o & /*$$scope, loading, file*/
      1027 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (Te(e.$$.fragment, i), r = !0);
    },
    o(i) {
      xe(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Ft(e, i);
    }
  };
}
function Pd(n, e, r) {
  let i, o;
  const a = window.t, l = window.OC;
  let f;
  Rn(() => {
    f = Ct.subscribe((y) => {
      r(0, i = y), i && (i.isLoaded || i.isNew) && r(1, o = !1);
    });
  }), Cn(() => {
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
  const g = () => {
    Ke.update(() => "none");
  };
  return r(0, i = Dt.getFileConfig()), r(1, o = !0), [
    i,
    o,
    a,
    l,
    u,
    h,
    s,
    d,
    g
  ];
}
class Dd extends pn {
  constructor(e) {
    super(), hn(this, e, Pd, xd, ln, {});
  }
}
const ci = (n) => {
  if (!(n != null && n.name) || !(n != null && n.templateName))
    return n;
  const [, e] = n.templateName.split(".") ?? [], r = n.name.toLocaleLowerCase();
  return e && !r.endsWith(e.toLocaleLowerCase()) && (n.name += `.${e}`), n;
};
function la(n) {
  let e, r = (
    /*t*/
    n[3]("files_linkeditor", "File name") + ""
  ), i, o, a, l, f, u, h;
  return {
    c() {
      e = Z("label"), i = Ie(r), o = pe(), a = Z("br"), l = pe(), f = Z("input"), j(f, "type", "text"), Dr(f, "width", "100%"), j(f, "class", "input-wide"), f.autofocus = !0, j(f, "data-cy", "name-input");
    },
    m(s, d) {
      oe(s, e, d), V(e, i), V(e, o), V(e, a), V(e, l), V(e, f), On(
        f,
        /*file*/
        n[0].name
      ), f.focus(), u || (h = [
        Ce(
          f,
          "input",
          /*input_input_handler*/
          n[7]
        ),
        Ce(
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
      s[0].name && On(
        f,
        /*file*/
        s[0].name
      );
    },
    d(s) {
      s && ie(e), u = !1, $t(h);
    }
  };
}
function ua(n) {
  let e, r = (
    /*t*/
    n[3]("files_linkeditor", "Create") + ""
  ), i, o, a;
  return {
    c() {
      e = Z("button"), i = Ie(r), j(e, "type", "submit"), e.disabled = /*isConflicting*/
      n[2], j(e, "class", "primary button");
    },
    m(l, f) {
      oe(l, e, f), V(e, i), o || (a = Ce(e, "click", wt(
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
      l && ie(e), o = !1, a();
    }
  };
}
function $d(n) {
  let e, r, i, o, a, l, f, u = (
    /*t*/
    n[3]("files_linkeditor", "Cancel") + ""
  ), h, s, d, g, y = !/*loading*/
  n[1] && la(n), b = !/*loading*/
  n[1] && ua(n);
  return {
    c() {
      e = Z("form"), r = Z("div"), i = Z("h3"), i.textContent = `${window.t("files_linkeditor", "New link")}`, o = pe(), y && y.c(), a = pe(), l = Z("div"), f = Z("a"), h = Ie(u), s = pe(), b && b.c(), j(r, "class", "edit"), j(f, "href", window.location.href), j(f, "class", "cancel button"), j(l, "class", "linkeditor-oc-dialog-buttonrow twobuttons"), j(
        e,
        "action",
        /*OC*/
        n[4].generateUrl("/")
      ), j(e, "method", "post");
    },
    m(E, T) {
      oe(E, e, T), V(e, r), V(r, i), V(r, o), y && y.m(r, null), V(e, a), V(e, l), V(l, f), V(f, h), V(l, s), b && b.m(l, null), d || (g = [
        Ce(f, "click", wt(
          /*click_handler*/
          n[8]
        )),
        Ce(e, "submit", wt(
          /*save*/
          n[6]
        ))
      ], d = !0);
    },
    p(E, T) {
      /*loading*/
      E[1] ? y && (y.d(1), y = null) : y ? y.p(E, T) : (y = la(E), y.c(), y.m(r, null)), /*loading*/
      E[1] ? b && (b.d(1), b = null) : b ? b.p(E, T) : (b = ua(E), b.c(), b.m(l, null));
    },
    d(E) {
      E && ie(e), y && y.d(), b && b.d(), d = !1, $t(g);
    }
  };
}
function kd(n) {
  let e, r;
  return e = new hr({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [$d] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Vt(e.$$.fragment);
    },
    m(i, o) {
      kt(e, i, o), r = !0;
    },
    p(i, [o]) {
      const a = {};
      o & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), o & /*$$scope, isConflicting, loading, file*/
      2055 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (Te(e.$$.fragment, i), r = !0);
    },
    o(i) {
      xe(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Ft(e, i);
    }
  };
}
function Fd(n, e, r) {
  let i, o, a;
  const l = window.t, f = window.OC, u = (b, E) => {
    const T = {
      name: b,
      templateName: i.templateName
    }, S = ci(T);
    return ((E == null ? void 0 : E.map((x) => x.basename)) ?? []).includes(S.name);
  };
  let h;
  Rn(() => {
    h = Ct.subscribe((b) => {
      r(0, i = b), i && (i.isLoaded || i.isNew) && (r(1, o = !1), s());
    });
  }), Cn(() => {
    h();
  });
  const s = () => {
    u(i.name, i.existingContents) ? r(2, a = !0) : r(2, a = !1);
  }, d = () => {
    u(i.name, i.existingContents) || (r(1, o = !0), i.onCreate(ci({ ...i })));
  };
  function g() {
    i.name = this.value, r(0, i);
  }
  const y = () => {
    Ke.update(() => "none");
  };
  return r(0, i = Dt.getFileConfig()), r(1, o = !0), r(2, a = !0), [
    i,
    o,
    a,
    l,
    f,
    s,
    d,
    g,
    y
  ];
}
class Md extends pn {
  constructor(e) {
    super(), hn(this, e, Fd, kd, ln, {});
  }
}
function ca(n) {
  let e, r;
  return e = new Md({}), {
    c() {
      Vt(e.$$.fragment);
    },
    m(i, o) {
      kt(e, i, o), r = !0;
    },
    i(i) {
      r || (Te(e.$$.fragment, i), r = !0);
    },
    o(i) {
      xe(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Ft(e, i);
    }
  };
}
function fa(n) {
  let e, r;
  return e = new bd({}), {
    c() {
      Vt(e.$$.fragment);
    },
    m(i, o) {
      kt(e, i, o), r = !0;
    },
    i(i) {
      r || (Te(e.$$.fragment, i), r = !0);
    },
    o(i) {
      xe(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Ft(e, i);
    }
  };
}
function ha(n) {
  let e, r;
  return e = new Dd({}), {
    c() {
      Vt(e.$$.fragment);
    },
    m(i, o) {
      kt(e, i, o), r = !0;
    },
    i(i) {
      r || (Te(e.$$.fragment, i), r = !0);
    },
    o(i) {
      xe(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Ft(e, i);
    }
  };
}
function Ud(n) {
  let e, r, i, o, a = (
    /*viewMode*/
    n[0] === "filename" && ca()
  ), l = (
    /*viewMode*/
    n[0] === "view" && fa()
  ), f = (
    /*viewMode*/
    n[0] === "edit" && ha()
  );
  return {
    c() {
      a && a.c(), e = pe(), l && l.c(), r = pe(), f && f.c(), i = Xa();
    },
    m(u, h) {
      a && a.m(u, h), oe(u, e, h), l && l.m(u, h), oe(u, r, h), f && f.m(u, h), oe(u, i, h), o = !0;
    },
    p(u, [h]) {
      /*viewMode*/
      u[0] === "filename" ? a ? h & /*viewMode*/
      1 && Te(a, 1) : (a = ca(), a.c(), Te(a, 1), a.m(e.parentNode, e)) : a && (lr(), xe(a, 1, 1, () => {
        a = null;
      }), ur()), /*viewMode*/
      u[0] === "view" ? l ? h & /*viewMode*/
      1 && Te(l, 1) : (l = fa(), l.c(), Te(l, 1), l.m(r.parentNode, r)) : l && (lr(), xe(l, 1, 1, () => {
        l = null;
      }), ur()), /*viewMode*/
      u[0] === "edit" ? f ? h & /*viewMode*/
      1 && Te(f, 1) : (f = ha(), f.c(), Te(f, 1), f.m(i.parentNode, i)) : f && (lr(), xe(f, 1, 1, () => {
        f = null;
      }), ur());
    },
    i(u) {
      o || (Te(a), Te(l), Te(f), o = !0);
    },
    o(u) {
      xe(a), xe(l), xe(f), o = !1;
    },
    d(u) {
      u && (ie(e), ie(r), ie(i)), a && a.d(u), l && l.d(u), f && f.d(u);
    }
  };
}
function Bd(n, e, r) {
  let i, o;
  return Rn(() => {
    o = Ke.subscribe((a) => {
      r(0, i = a);
    });
  }), Cn(() => {
    o();
  }), r(0, i = ""), [i];
}
class jd extends pn {
  constructor(e) {
    super(), hn(this, e, Bd, Ud, ln, {});
  }
}
function Ln(n, e, r) {
  return e in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = r, n;
}
function pa(n, e, r) {
  Gd(n, e), e.set(n, r);
}
function Gd(n, e) {
  if (e.has(n))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function lt(n, e) {
  var r = su(n, e, "get");
  return Wd(n, r);
}
function Wd(n, e) {
  return e.get ? e.get.call(n) : e.value;
}
function da(n, e, r) {
  var i = su(n, e, "set");
  return Vd(n, i, r), r;
}
function su(n, e, r) {
  if (!e.has(n))
    throw new TypeError("attempted to " + r + " private field on non-instance");
  return e.get(n);
}
function Vd(n, e, r) {
  if (e.set)
    e.set.call(n, r);
  else {
    if (!e.writable)
      throw new TypeError("attempted to set read only private field");
    e.value = r;
  }
}
var zd = typeof Symbol < "u" ? Symbol.toStringTag : "@@toStringTag", pt = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap();
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
    pa(this, pt, {
      writable: !0,
      value: void 0
    }), pa(this, Nr, {
      writable: !0,
      value: void 0
    }), Ln(this, zd, "CancelablePromise"), this.cancel = this.cancel.bind(this), da(this, pt, i), da(this, Nr, o || new Promise((a, l) => r(a, l, (f) => {
      i.onCancelList.push(f);
    })));
  }
  then(e, r) {
    return ni(lt(this, Nr).then(Zr(e, lt(this, pt)), Zr(r, lt(this, pt))), lt(this, pt));
  }
  catch(e) {
    return ni(lt(this, Nr).catch(Zr(e, lt(this, pt))), lt(this, pt));
  }
  finally(e, r) {
    return r && lt(this, pt).onCancelList.push(e), ni(lt(this, Nr).finally(Zr(() => {
      if (e)
        return r && (lt(this, pt).onCancelList = lt(this, pt).onCancelList.filter((i) => i !== e)), e();
    }, lt(this, pt))), lt(this, pt));
  }
  cancel() {
    lt(this, pt).isCanceled = !0;
    var e = lt(this, pt).onCancelList;
    lt(this, pt).onCancelList = [];
    for (var r of e)
      if (typeof r == "function")
        try {
          r();
        } catch (i) {
          console.error(i);
        }
  }
  isCanceled() {
    return lt(this, pt).isCanceled === !0;
  }
}
class xn extends di {
  constructor(e) {
    super({
      executor: e
    });
  }
}
Ln(xn, "all", function(e) {
  return mi(e, Promise.all(e));
});
Ln(xn, "allSettled", function(e) {
  return mi(e, Promise.allSettled(e));
});
Ln(xn, "any", function(e) {
  return mi(e, Promise.any(e));
});
Ln(xn, "race", function(e) {
  return mi(e, Promise.race(e));
});
Ln(xn, "resolve", function(e) {
  return au(Promise.resolve(e));
});
Ln(xn, "reject", function(e) {
  return au(Promise.reject(e));
});
Ln(xn, "isCancelable", Do);
function au(n) {
  return ni(n, $o());
}
function Do(n) {
  return n instanceof xn || n instanceof di;
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
const xr = cl().setApp("@nextcloud/files").detectUser().build();
var ko = /* @__PURE__ */ ((n) => (n.Folder = "folder", n.File = "file", n))(ko || {}), gt = /* @__PURE__ */ ((n) => (n[n.NONE = 0] = "NONE", n[n.CREATE = 4] = "CREATE", n[n.READ = 1] = "READ", n[n.UPDATE = 2] = "UPDATE", n[n.DELETE = 8] = "DELETE", n[n.SHARE = 16] = "SHARE", n[n.ALL = 31] = "ALL", n))(gt || {});
const lu = function(n, e) {
  return n.match(e) !== null;
}, bn = (n, e) => {
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
  if (n.root && lu(n.source, e)) {
    const r = n.source.match(e)[0];
    if (!n.source.includes(hl(r, n.root)))
      throw new Error("The root must be relative to the service. e.g /files/emma");
  }
  if (n.status && !Object.values(Fo).includes(n.status))
    throw new Error("Status must be a valid NodeStatus");
};
var Fo = /* @__PURE__ */ ((n) => (n.NEW = "new", n.FAILED = "failed", n.LOADING = "loading", n.LOCKED = "locked", n))(Fo || {});
class gi {
  constructor(e, r) {
    he(this, "_data");
    he(this, "_attributes");
    he(this, "_knownDavService", /(remote|public)\.php\/(web)?dav/i);
    he(this, "readonlyAttributes", Object.entries(Object.getOwnPropertyDescriptors(gi.prototype)).filter((e) => typeof e[1].get == "function" && e[0] !== "__proto__").map((e) => e[0]));
    he(this, "handler", {
      set: (e, r, i) => this.readonlyAttributes.includes(r) ? !1 : Reflect.set(e, r, i),
      deleteProperty: (e, r) => this.readonlyAttributes.includes(r) ? !1 : Reflect.deleteProperty(e, r),
      // TODO: This is deprecated and only needed for files v3
      get: (e, r, i) => this.readonlyAttributes.includes(r) ? (xr.warn(`Accessing "Node.attributes.${r}" is deprecated, access it directly on the Node instance.`), Reflect.get(this, r)) : Reflect.get(e, r, i)
    });
    var i;
    e.mime || (e.mime = "application/octet-stream"), bn(e, r || this._knownDavService), this._data = {
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
    bn({ ...this._data, displayname: e }, this._knownDavService), this._data.displayname = e;
  }
  /**
   * Get this object's extension
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get extension() {
    return fl(this.source);
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
      return rr(r.slice(i + o.length) || "/");
    }
    const e = new URL(this.source);
    return rr(e.pathname);
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
    e ?? (e = "application/octet-stream"), bn({ ...this._data, mime: e }, this._knownDavService), this._data.mime = e;
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
    bn({ ...this._data, mtime: e }, this._knownDavService), this._data.mtime = e;
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
    bn({ ...this._data, size: e }, this._knownDavService), this.updateMtime(), this._data.size = e;
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
    bn({ ...this._data, permissions: e }, this._knownDavService), this.updateMtime(), this._data.permissions = e;
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
    return lu(this.source, this._knownDavService);
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
    return this._data.root ? this._data.root.replace(/^(.+)\/$/, "$1") : this.isDavResource && rr(this.source).split(this._knownDavService).pop() || null;
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
    bn({ ...this._data, status: e }, this._knownDavService), this._data.status = e;
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
    bn({ ...this._data, source: e }, this._knownDavService);
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
    this.move(rr(this.source) + "/" + e);
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
const qd = function(n = "") {
  let e = gt.NONE;
  return n && ((n.includes("C") || n.includes("K")) && (e |= gt.CREATE), n.includes("G") && (e |= gt.READ), (n.includes("W") || n.includes("N") || n.includes("V")) && (e |= gt.UPDATE), n.includes("D") && (e |= gt.DELETE), n.includes("R") && (e |= gt.SHARE)), e;
}, Xd = [
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
], Hd = {
  d: "DAV:",
  nc: "http://nextcloud.org/ns",
  oc: "http://owncloud.org/ns",
  ocs: "http://open-collaboration-services.org/ns"
}, Yd = function() {
  return typeof window._nc_dav_properties > "u" && (window._nc_dav_properties = [...Xd]), window._nc_dav_properties.map((n) => `<${n} />`).join(" ");
}, Zd = function() {
  return typeof window._nc_dav_namespaces > "u" && (window._nc_dav_namespaces = { ...Hd }), Object.keys(window._nc_dav_namespaces).map((n) => {
    var e;
    return `xmlns:${n}="${(e = window._nc_dav_namespaces) == null ? void 0 : e[n]}"`;
  }).join(" ");
}, Kd = function() {
  return `<?xml version="1.0"?>
		<d:propfind ${Zd()}>
			<d:prop>
				${Yd()}
			</d:prop>
		</d:propfind>`;
};
function Jd() {
  var n;
  return pr() ? `/files/${Rl()}` : `/files/${(n = $r()) == null ? void 0 : n.uid}`;
}
const uu = Jd();
function Qd() {
  const n = Tl("dav");
  return pr() ? n.replace("remote.php", "public.php") : n;
}
const cu = Qd(), em = function(n = cu, e = {}) {
  const r = nu(n, { headers: e });
  function i(a) {
    r.setHeaders({
      ...e,
      // Add this so the server knows it is an request from the browser
      "X-Requested-With": "XMLHttpRequest",
      // Inject user auth
      requesttoken: a ?? ""
    });
  }
  return ul(i), i(ll()), Ao().patch("fetch", (a, l) => {
    const f = l.headers;
    return f != null && f.method && (l.method = f.method, delete f.method), fetch(a, l);
  }), r;
}, tm = function(n, e = uu, r = cu) {
  var d, g;
  let i = (d = $r()) == null ? void 0 : d.uid;
  if (pr())
    i = i ?? "anonymous";
  else if (!i)
    throw new Error("No user id found");
  const o = n.props, a = qd(o == null ? void 0 : o.permissions), l = String((o == null ? void 0 : o["owner-id"]) || i), f = o.fileid || 0, u = new Date(Date.parse(n.lastmod)), h = new Date(Date.parse(o.creationdate)), s = {
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
  return (g = s.attributes) == null || delete g.props, n.type === "file" ? new Mo(s) : new Uo(s);
};
var fu = /* @__PURE__ */ ((n) => (n.DEFAULT = "default", n.HIDDEN = "hidden", n))(fu || {});
const ma = function(n) {
  if (typeof window._nc_fileactions > "u" && (window._nc_fileactions = [], xr.debug("FileActions initialized")), window._nc_fileactions.find((e) => e.id === n.id)) {
    xr.error(`FileAction ${n.id} already registered`, { action: n });
    return;
  }
  window._nc_fileactions.push(n);
};
var Xi, ga;
function hu() {
  return ga || (ga = 1, Xi = typeof Tt == "object" && Tt.env && Tt.env.NODE_DEBUG && /\bsemver\b/i.test(Tt.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
  }), Xi;
}
var Hi, Ea;
function pu() {
  if (Ea) return Hi;
  Ea = 1;
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
var Kr = { exports: {} }, wa;
function nm() {
  return wa || (wa = 1, function(n, e) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: r,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: o
    } = pu(), a = hu();
    e = n.exports = {};
    const l = e.re = [], f = e.safeRe = [], u = e.src = [], h = e.safeSrc = [], s = e.t = {};
    let d = 0;
    const g = "[a-zA-Z0-9-]", y = [
      ["\\s", 1],
      ["\\d", o],
      [g, i]
    ], b = (T) => {
      for (const [S, C] of y)
        T = T.split(`${S}*`).join(`${S}{0,${C}}`).split(`${S}+`).join(`${S}{1,${C}}`);
      return T;
    }, E = (T, S, C) => {
      const x = b(S), R = d++;
      a(T, R, S), s[T] = R, u[R] = S, h[R] = x, l[R] = new RegExp(S, C ? "g" : void 0), f[R] = new RegExp(x, C ? "g" : void 0);
    };
    E("NUMERICIDENTIFIER", "0|[1-9]\\d*"), E("NUMERICIDENTIFIERLOOSE", "\\d+"), E("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${g}*`), E("MAINVERSION", `(${u[s.NUMERICIDENTIFIER]})\\.(${u[s.NUMERICIDENTIFIER]})\\.(${u[s.NUMERICIDENTIFIER]})`), E("MAINVERSIONLOOSE", `(${u[s.NUMERICIDENTIFIERLOOSE]})\\.(${u[s.NUMERICIDENTIFIERLOOSE]})\\.(${u[s.NUMERICIDENTIFIERLOOSE]})`), E("PRERELEASEIDENTIFIER", `(?:${u[s.NONNUMERICIDENTIFIER]}|${u[s.NUMERICIDENTIFIER]})`), E("PRERELEASEIDENTIFIERLOOSE", `(?:${u[s.NONNUMERICIDENTIFIER]}|${u[s.NUMERICIDENTIFIERLOOSE]})`), E("PRERELEASE", `(?:-(${u[s.PRERELEASEIDENTIFIER]}(?:\\.${u[s.PRERELEASEIDENTIFIER]})*))`), E("PRERELEASELOOSE", `(?:-?(${u[s.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[s.PRERELEASEIDENTIFIERLOOSE]})*))`), E("BUILDIDENTIFIER", `${g}+`), E("BUILD", `(?:\\+(${u[s.BUILDIDENTIFIER]}(?:\\.${u[s.BUILDIDENTIFIER]})*))`), E("FULLPLAIN", `v?${u[s.MAINVERSION]}${u[s.PRERELEASE]}?${u[s.BUILD]}?`), E("FULL", `^${u[s.FULLPLAIN]}$`), E("LOOSEPLAIN", `[v=\\s]*${u[s.MAINVERSIONLOOSE]}${u[s.PRERELEASELOOSE]}?${u[s.BUILD]}?`), E("LOOSE", `^${u[s.LOOSEPLAIN]}$`), E("GTLT", "((?:<|>)?=?)"), E("XRANGEIDENTIFIERLOOSE", `${u[s.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), E("XRANGEIDENTIFIER", `${u[s.NUMERICIDENTIFIER]}|x|X|\\*`), E("XRANGEPLAIN", `[v=\\s]*(${u[s.XRANGEIDENTIFIER]})(?:\\.(${u[s.XRANGEIDENTIFIER]})(?:\\.(${u[s.XRANGEIDENTIFIER]})(?:${u[s.PRERELEASE]})?${u[s.BUILD]}?)?)?`), E("XRANGEPLAINLOOSE", `[v=\\s]*(${u[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[s.XRANGEIDENTIFIERLOOSE]})(?:${u[s.PRERELEASELOOSE]})?${u[s.BUILD]}?)?)?`), E("XRANGE", `^${u[s.GTLT]}\\s*${u[s.XRANGEPLAIN]}$`), E("XRANGELOOSE", `^${u[s.GTLT]}\\s*${u[s.XRANGEPLAINLOOSE]}$`), E("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), E("COERCE", `${u[s.COERCEPLAIN]}(?:$|[^\\d])`), E("COERCEFULL", u[s.COERCEPLAIN] + `(?:${u[s.PRERELEASE]})?(?:${u[s.BUILD]})?(?:$|[^\\d])`), E("COERCERTL", u[s.COERCE], !0), E("COERCERTLFULL", u[s.COERCEFULL], !0), E("LONETILDE", "(?:~>?)"), E("TILDETRIM", `(\\s*)${u[s.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", E("TILDE", `^${u[s.LONETILDE]}${u[s.XRANGEPLAIN]}$`), E("TILDELOOSE", `^${u[s.LONETILDE]}${u[s.XRANGEPLAINLOOSE]}$`), E("LONECARET", "(?:\\^)"), E("CARETTRIM", `(\\s*)${u[s.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", E("CARET", `^${u[s.LONECARET]}${u[s.XRANGEPLAIN]}$`), E("CARETLOOSE", `^${u[s.LONECARET]}${u[s.XRANGEPLAINLOOSE]}$`), E("COMPARATORLOOSE", `^${u[s.GTLT]}\\s*(${u[s.LOOSEPLAIN]})$|^$`), E("COMPARATOR", `^${u[s.GTLT]}\\s*(${u[s.FULLPLAIN]})$|^$`), E("COMPARATORTRIM", `(\\s*)${u[s.GTLT]}\\s*(${u[s.LOOSEPLAIN]}|${u[s.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", E("HYPHENRANGE", `^\\s*(${u[s.XRANGEPLAIN]})\\s+-\\s+(${u[s.XRANGEPLAIN]})\\s*$`), E("HYPHENRANGELOOSE", `^\\s*(${u[s.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[s.XRANGEPLAINLOOSE]})\\s*$`), E("STAR", "(<|>)?=?\\s*\\*"), E("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), E("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }(Kr, Kr.exports)), Kr.exports;
}
var Yi, ya;
function rm() {
  if (ya) return Yi;
  ya = 1;
  const n = Object.freeze({ loose: !0 }), e = Object.freeze({});
  return Yi = (i) => i ? typeof i != "object" ? n : i : e, Yi;
}
var Zi, va;
function im() {
  if (va) return Zi;
  va = 1;
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
var Ki, ba;
function du() {
  if (ba) return Ki;
  ba = 1;
  const n = hu(), { MAX_LENGTH: e, MAX_SAFE_INTEGER: r } = pu(), { safeRe: i, t: o } = nm(), a = rm(), { compareIdentifiers: l } = im();
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
      d[4] ? this.prerelease = d[4].split(".").map((g) => {
        if (/^[0-9]+$/.test(g)) {
          const y = +g;
          if (y >= 0 && y < r)
            return y;
        }
        return g;
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
        const d = this.prerelease[s], g = h.prerelease[s];
        if (n("prerelease compare", s, d, g), d === void 0 && g === void 0)
          return 0;
        if (g === void 0)
          return 1;
        if (d === void 0)
          return -1;
        if (d === g)
          continue;
        return l(d, g);
      } while (++s);
    }
    compareBuild(h) {
      h instanceof f || (h = new f(h, this.options));
      let s = 0;
      do {
        const d = this.build[s], g = h.build[s];
        if (n("build compare", s, d, g), d === void 0 && g === void 0)
          return 0;
        if (g === void 0)
          return 1;
        if (d === void 0)
          return -1;
        if (d === g)
          continue;
        return l(d, g);
      } while (++s);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(h, s, d) {
      if (h.startsWith("pre")) {
        if (!s && d === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (s) {
          const g = `-${s}`.match(this.options.loose ? i[o.PRERELEASELOOSE] : i[o.PRERELEASE]);
          if (!g || g[1] !== s)
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
          const g = Number(d) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [g];
          else {
            let y = this.prerelease.length;
            for (; --y >= 0; )
              typeof this.prerelease[y] == "number" && (this.prerelease[y]++, y = -2);
            if (y === -1) {
              if (s === this.prerelease.join(".") && d === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(g);
            }
          }
          if (s) {
            let y = [s, g];
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
var Ji, _a;
function om() {
  if (_a) return Ji;
  _a = 1;
  const n = du();
  return Ji = (r, i) => new n(r, i).major, Ji;
}
om();
var Qi, Ta;
function sm() {
  if (Ta) return Qi;
  Ta = 1;
  const n = du();
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
var eo, Na;
function am() {
  if (Na) return eo;
  Na = 1;
  const n = sm();
  return eo = (r, i) => {
    const o = n(r, i);
    return o ? o.version : null;
  }, eo;
}
am();
var to = {}, Ia;
function lm() {
  return Ia || (Ia = 1, function(n) {
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
        a(B), B.q = B.c = "", B.bufferCheckPosition = e.MAX_BUFFER_LENGTH, B.opt = _ || {}, B.opt.lowercase = B.opt.lowercase || B.opt.lowercasetags, B.looseCase = B.opt.lowercase ? "toLowerCase" : "toUpperCase", B.tags = [], B.closed = B.closedRoot = B.sawRoot = !1, B.tag = B.error = null, B.strict = !!I, B.noscript = !!(I || B.opt.noscript), B.state = P.BEGIN, B.strictEntities = B.opt.strictEntities, B.ENTITIES = B.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), B.attribList = [], B.opt.xmlns && (B.ns = Object.create(E)), B.opt.unquotedAttributeValues === void 0 && (B.opt.unquotedAttributeValues = !I), B.trackPosition = B.opt.position !== !1, B.trackPosition && (B.position = B.line = B.column = 0), J(B, "onready");
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
        for (var _ = Math.max(e.MAX_BUFFER_LENGTH, 10), B = 0, k = 0, ee = r.length; k < ee; k++) {
          var Oe = I[r[k]].length;
          if (Oe > _)
            switch (r[k]) {
              case "textNode":
                W(I);
                break;
              case "cdata":
                K(I, "oncdata", I.cdata), I.cdata = "";
                break;
              case "script":
                K(I, "onscript", I.script), I.script = "";
                break;
              default:
                Ee(I, "Max buffer length exceeded: " + r[k]);
            }
          B = Math.max(B, Oe);
        }
        var ae = e.MAX_BUFFER_LENGTH - B;
        I.bufferCheckPosition = ae + I.position;
      }
      function a(I) {
        for (var _ = 0, B = r.length; _ < B; _++)
          I[r[_]] = "";
      }
      function l(I) {
        W(I), I.cdata !== "" && (K(I, "oncdata", I.cdata), I.cdata = ""), I.script !== "" && (K(I, "onscript", I.script), I.script = "");
      }
      i.prototype = {
        end: function() {
          Ne(this);
        },
        write: zt,
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
            set: function(ee) {
              if (!ee)
                return B.removeAllListeners(k), B._parser["on" + k] = ee, ee;
              B.on(k, ee);
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
            var _ = bl.StringDecoder;
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
      var d = "[CDATA[", g = "DOCTYPE", y = "http://www.w3.org/XML/1998/namespace", b = "http://www.w3.org/2000/xmlns/", E = { xml: y, xmlns: b }, T = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, S = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, C = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, x = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function R(I) {
        return I === " " || I === `
` || I === "\r" || I === "	";
      }
      function U(I) {
        return I === '"' || I === "'";
      }
      function Y(I) {
        return I === ">" || R(I);
      }
      function H(I, _) {
        return I.test(_);
      }
      function se(I, _) {
        return !H(I, _);
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
      for (var we in e.STATE)
        e.STATE[e.STATE[we]] = we;
      P = e.STATE;
      function J(I, _, B) {
        I[_] && I[_](B);
      }
      function K(I, _, B) {
        I.textNode && W(I), J(I, _, B);
      }
      function W(I) {
        I.textNode = de(I.opt, I.textNode), I.textNode && J(I, "ontext", I.textNode), I.textNode = "";
      }
      function de(I, _) {
        return I.trim && (_ = _.trim()), I.normalize && (_ = _.replace(/\s+/g, " ")), _;
      }
      function Ee(I, _) {
        return W(I), I.trackPosition && (_ += `
Line: ` + I.line + `
Column: ` + I.column + `
Char: ` + I.c), _ = new Error(_), I.error = _, J(I, "onerror", _), I;
      }
      function Ne(I) {
        return I.sawRoot && !I.closedRoot && Q(I, "Unclosed root tag"), I.state !== P.BEGIN && I.state !== P.BEGIN_WHITESPACE && I.state !== P.TEXT && Ee(I, "Unexpected end"), W(I), I.c = "", I.closed = !0, J(I, "onend"), i.call(I, I.strict, I.opt), I;
      }
      function Q(I, _) {
        if (typeof I != "object" || !(I instanceof i))
          throw new Error("bad call to strictFail");
        I.strict && Ee(I, _);
      }
      function Ae(I) {
        I.strict || (I.tagName = I.tagName[I.looseCase]());
        var _ = I.tags[I.tags.length - 1] || I, B = I.tag = { name: I.tagName, attributes: {} };
        I.opt.xmlns && (B.ns = _.ns), I.attribList.length = 0, K(I, "onopentagstart", B);
      }
      function je(I, _) {
        var B = I.indexOf(":"), k = B < 0 ? ["", I] : I.split(":"), ee = k[0], Oe = k[1];
        return _ && I === "xmlns" && (ee = "xmlns", Oe = ""), { prefix: ee, local: Oe };
      }
      function Xe(I) {
        if (I.strict || (I.attribName = I.attribName[I.looseCase]()), I.attribList.indexOf(I.attribName) !== -1 || I.tag.attributes.hasOwnProperty(I.attribName)) {
          I.attribName = I.attribValue = "";
          return;
        }
        if (I.opt.xmlns) {
          var _ = je(I.attribName, !0), B = _.prefix, k = _.local;
          if (B === "xmlns")
            if (k === "xml" && I.attribValue !== y)
              Q(
                I,
                "xml: prefix must be bound to " + y + `
Actual: ` + I.attribValue
              );
            else if (k === "xmlns" && I.attribValue !== b)
              Q(
                I,
                "xmlns: prefix must be bound to " + b + `
Actual: ` + I.attribValue
              );
            else {
              var ee = I.tag, Oe = I.tags[I.tags.length - 1] || I;
              ee.ns === Oe.ns && (ee.ns = Object.create(Oe.ns)), ee.ns[k] = I.attribValue;
            }
          I.attribList.push([I.attribName, I.attribValue]);
        } else
          I.tag.attributes[I.attribName] = I.attribValue, K(I, "onattribute", {
            name: I.attribName,
            value: I.attribValue
          });
        I.attribName = I.attribValue = "";
      }
      function ce(I, _) {
        if (I.opt.xmlns) {
          var B = I.tag, k = je(I.tagName);
          B.prefix = k.prefix, B.local = k.local, B.uri = B.ns[k.prefix] || "", B.prefix && !B.uri && (Q(I, "Unbound namespace prefix: " + JSON.stringify(I.tagName)), B.uri = k.prefix);
          var ee = I.tags[I.tags.length - 1] || I;
          B.ns && ee.ns !== B.ns && Object.keys(B.ns).forEach(function(Zt) {
            K(I, "onopennamespace", {
              prefix: Zt,
              uri: B.ns[Zt]
            });
          });
          for (var Oe = 0, ae = I.attribList.length; Oe < ae; Oe++) {
            var Me = I.attribList[Oe], me = Me[0], Ge = Me[1], Se = je(me, !0), De = Se.prefix, mn = Se.local, ft = De === "" ? "" : B.ns[De] || "", qt = {
              name: me,
              value: Ge,
              prefix: De,
              local: mn,
              uri: ft
            };
            De && De !== "xmlns" && !ft && (Q(I, "Unbound namespace prefix: " + JSON.stringify(De)), qt.uri = De), I.tag.attributes[me] = qt, K(I, "onattribute", qt);
          }
          I.attribList.length = 0;
        }
        I.tag.isSelfClosing = !!_, I.sawRoot = !0, I.tags.push(I.tag), K(I, "onopentag", I.tag), _ || (!I.noscript && I.tagName.toLowerCase() === "script" ? I.state = P.SCRIPT : I.state = P.TEXT, I.tag = null, I.tagName = ""), I.attribName = I.attribValue = "", I.attribList.length = 0;
      }
      function He(I) {
        if (!I.tagName) {
          Q(I, "Weird empty close tag."), I.textNode += "</>", I.state = P.TEXT;
          return;
        }
        if (I.script) {
          if (I.tagName !== "script") {
            I.script += "</" + I.tagName + ">", I.tagName = "", I.state = P.SCRIPT;
            return;
          }
          K(I, "onscript", I.script), I.script = "";
        }
        var _ = I.tags.length, B = I.tagName;
        I.strict || (B = B[I.looseCase]());
        for (var k = B; _--; ) {
          var ee = I.tags[_];
          if (ee.name !== k)
            Q(I, "Unexpected close tag");
          else
            break;
        }
        if (_ < 0) {
          Q(I, "Unmatched closing tag: " + I.tagName), I.textNode += "</" + I.tagName + ">", I.state = P.TEXT;
          return;
        }
        I.tagName = B;
        for (var Oe = I.tags.length; Oe-- > _; ) {
          var ae = I.tag = I.tags.pop();
          I.tagName = I.tag.name, K(I, "onclosetag", I.tagName);
          var Me = {};
          for (var me in ae.ns)
            Me[me] = ae.ns[me];
          var Ge = I.tags[I.tags.length - 1] || I;
          I.opt.xmlns && ae.ns !== Ge.ns && Object.keys(ae.ns).forEach(function(Se) {
            var De = ae.ns[Se];
            K(I, "onclosenamespace", { prefix: Se, uri: De });
          });
        }
        _ === 0 && (I.closedRoot = !0), I.tagName = I.attribValue = I.attribName = "", I.attribList.length = 0, I.state = P.TEXT;
      }
      function it(I) {
        var _ = I.entity, B = _.toLowerCase(), k, ee = "";
        return I.ENTITIES[_] ? I.ENTITIES[_] : I.ENTITIES[B] ? I.ENTITIES[B] : (_ = B, _.charAt(0) === "#" && (_.charAt(1) === "x" ? (_ = _.slice(2), k = parseInt(_, 16), ee = k.toString(16)) : (_ = _.slice(1), k = parseInt(_, 10), ee = k.toString(10))), _ = _.replace(/^0+/, ""), isNaN(k) || ee.toLowerCase() !== _ ? (Q(I, "Invalid character entity"), "&" + I.entity + ";") : String.fromCodePoint(k));
      }
      function _e(I, _) {
        _ === "<" ? (I.state = P.OPEN_WAKA, I.startTagPosition = I.position) : R(_) || (Q(I, "Non-whitespace before first tag."), I.textNode = _, I.state = P.TEXT);
      }
      function ye(I, _) {
        var B = "";
        return _ < I.length && (B = I.charAt(_)), B;
      }
      function zt(I) {
        var _ = this;
        if (this.error)
          throw this.error;
        if (_.closed)
          return Ee(
            _,
            "Cannot write after close. Assign an onready handler."
          );
        if (I === null)
          return Ne(_);
        typeof I == "object" && (I = I.toString());
        for (var B = 0, k = ""; k = ye(I, B++), _.c = k, !!k; )
          switch (_.trackPosition && (_.position++, k === `
` ? (_.line++, _.column = 0) : _.column++), _.state) {
            case P.BEGIN:
              if (_.state = P.BEGIN_WHITESPACE, k === "\uFEFF")
                continue;
              _e(_, k);
              continue;
            case P.BEGIN_WHITESPACE:
              _e(_, k);
              continue;
            case P.TEXT:
              if (_.sawRoot && !_.closedRoot) {
                for (var ee = B - 1; k && k !== "<" && k !== "&"; )
                  k = ye(I, B++), k && _.trackPosition && (_.position++, k === `
` ? (_.line++, _.column = 0) : _.column++);
                _.textNode += I.substring(ee, B - 1);
              }
              k === "<" && !(_.sawRoot && _.closedRoot && !_.strict) ? (_.state = P.OPEN_WAKA, _.startTagPosition = _.position) : (!R(k) && (!_.sawRoot || _.closedRoot) && Q(_, "Text data outside of root node."), k === "&" ? _.state = P.TEXT_ENTITY : _.textNode += k);
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
              else if (!R(k)) if (H(T, k))
                _.state = P.OPEN_TAG, _.tagName = k;
              else if (k === "/")
                _.state = P.CLOSE_TAG, _.tagName = "";
              else if (k === "?")
                _.state = P.PROC_INST, _.procInstName = _.procInstBody = "";
              else {
                if (Q(_, "Unencoded <"), _.startTagPosition + 1 < _.position) {
                  var Oe = _.position - _.startTagPosition;
                  k = new Array(Oe).join(" ") + k;
                }
                _.textNode += "<" + k, _.state = P.TEXT;
              }
              continue;
            case P.SGML_DECL:
              if (_.sgmlDecl + k === "--") {
                _.state = P.COMMENT, _.comment = "", _.sgmlDecl = "";
                continue;
              }
              _.doctype && _.doctype !== !0 && _.sgmlDecl ? (_.state = P.DOCTYPE_DTD, _.doctype += "<!" + _.sgmlDecl + k, _.sgmlDecl = "") : (_.sgmlDecl + k).toUpperCase() === d ? (K(_, "onopencdata"), _.state = P.CDATA, _.sgmlDecl = "", _.cdata = "") : (_.sgmlDecl + k).toUpperCase() === g ? (_.state = P.DOCTYPE, (_.doctype || _.sawRoot) && Q(
                _,
                "Inappropriately located doctype declaration"
              ), _.doctype = "", _.sgmlDecl = "") : k === ">" ? (K(_, "onsgmldeclaration", _.sgmlDecl), _.sgmlDecl = "", _.state = P.TEXT) : (U(k) && (_.state = P.SGML_DECL_QUOTED), _.sgmlDecl += k);
              continue;
            case P.SGML_DECL_QUOTED:
              k === _.q && (_.state = P.SGML_DECL, _.q = ""), _.sgmlDecl += k;
              continue;
            case P.DOCTYPE:
              k === ">" ? (_.state = P.TEXT, K(_, "ondoctype", _.doctype), _.doctype = !0) : (_.doctype += k, k === "[" ? _.state = P.DOCTYPE_DTD : U(k) && (_.state = P.DOCTYPE_QUOTED, _.q = k));
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
              k === "-" ? (_.state = P.COMMENT_ENDED, _.comment = de(_.opt, _.comment), _.comment && K(_, "oncomment", _.comment), _.comment = "") : (_.comment += "-" + k, _.state = P.COMMENT);
              continue;
            case P.COMMENT_ENDED:
              k !== ">" ? (Q(_, "Malformed comment"), _.comment += "--" + k, _.state = P.COMMENT) : _.doctype && _.doctype !== !0 ? _.state = P.DOCTYPE_DTD : _.state = P.TEXT;
              continue;
            case P.CDATA:
              k === "]" ? _.state = P.CDATA_ENDING : _.cdata += k;
              continue;
            case P.CDATA_ENDING:
              k === "]" ? _.state = P.CDATA_ENDING_2 : (_.cdata += "]" + k, _.state = P.CDATA);
              continue;
            case P.CDATA_ENDING_2:
              k === ">" ? (_.cdata && K(_, "oncdata", _.cdata), K(_, "onclosecdata"), _.cdata = "", _.state = P.TEXT) : k === "]" ? _.cdata += "]" : (_.cdata += "]]" + k, _.state = P.CDATA);
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
              k === ">" ? (K(_, "onprocessinginstruction", {
                name: _.procInstName,
                body: _.procInstBody
              }), _.procInstName = _.procInstBody = "", _.state = P.TEXT) : (_.procInstBody += "?" + k, _.state = P.PROC_INST_BODY);
              continue;
            case P.OPEN_TAG:
              H(S, k) ? _.tagName += k : (Ae(_), k === ">" ? ce(_) : k === "/" ? _.state = P.OPEN_TAG_SLASH : (R(k) || Q(_, "Invalid character in tag name"), _.state = P.ATTRIB));
              continue;
            case P.OPEN_TAG_SLASH:
              k === ">" ? (ce(_, !0), He(_)) : (Q(_, "Forward-slash in opening tag not followed by >"), _.state = P.ATTRIB);
              continue;
            case P.ATTRIB:
              if (R(k))
                continue;
              k === ">" ? ce(_) : k === "/" ? _.state = P.OPEN_TAG_SLASH : H(T, k) ? (_.attribName = k, _.attribValue = "", _.state = P.ATTRIB_NAME) : Q(_, "Invalid attribute name");
              continue;
            case P.ATTRIB_NAME:
              k === "=" ? _.state = P.ATTRIB_VALUE : k === ">" ? (Q(_, "Attribute without value"), _.attribValue = _.attribName, Xe(_), ce(_)) : R(k) ? _.state = P.ATTRIB_NAME_SAW_WHITE : H(S, k) ? _.attribName += k : Q(_, "Invalid attribute name");
              continue;
            case P.ATTRIB_NAME_SAW_WHITE:
              if (k === "=")
                _.state = P.ATTRIB_VALUE;
              else {
                if (R(k))
                  continue;
                Q(_, "Attribute without value"), _.tag.attributes[_.attribName] = "", _.attribValue = "", K(_, "onattribute", {
                  name: _.attribName,
                  value: ""
                }), _.attribName = "", k === ">" ? ce(_) : H(T, k) ? (_.attribName = k, _.state = P.ATTRIB_NAME) : (Q(_, "Invalid attribute name"), _.state = P.ATTRIB);
              }
              continue;
            case P.ATTRIB_VALUE:
              if (R(k))
                continue;
              U(k) ? (_.q = k, _.state = P.ATTRIB_VALUE_QUOTED) : (_.opt.unquotedAttributeValues || Ee(_, "Unquoted attribute value"), _.state = P.ATTRIB_VALUE_UNQUOTED, _.attribValue = k);
              continue;
            case P.ATTRIB_VALUE_QUOTED:
              if (k !== _.q) {
                k === "&" ? _.state = P.ATTRIB_VALUE_ENTITY_Q : _.attribValue += k;
                continue;
              }
              Xe(_), _.q = "", _.state = P.ATTRIB_VALUE_CLOSED;
              continue;
            case P.ATTRIB_VALUE_CLOSED:
              R(k) ? _.state = P.ATTRIB : k === ">" ? ce(_) : k === "/" ? _.state = P.OPEN_TAG_SLASH : H(T, k) ? (Q(_, "No whitespace between attributes"), _.attribName = k, _.attribValue = "", _.state = P.ATTRIB_NAME) : Q(_, "Invalid attribute name");
              continue;
            case P.ATTRIB_VALUE_UNQUOTED:
              if (!Y(k)) {
                k === "&" ? _.state = P.ATTRIB_VALUE_ENTITY_U : _.attribValue += k;
                continue;
              }
              Xe(_), k === ">" ? ce(_) : _.state = P.ATTRIB;
              continue;
            case P.CLOSE_TAG:
              if (_.tagName)
                k === ">" ? He(_) : H(S, k) ? _.tagName += k : _.script ? (_.script += "</" + _.tagName, _.tagName = "", _.state = P.SCRIPT) : (R(k) || Q(_, "Invalid tagname in closing tag"), _.state = P.CLOSE_TAG_SAW_WHITE);
              else {
                if (R(k))
                  continue;
                se(T, k) ? _.script ? (_.script += "</" + k, _.state = P.SCRIPT) : Q(_, "Invalid tagname in closing tag.") : _.tagName = k;
              }
              continue;
            case P.CLOSE_TAG_SAW_WHITE:
              if (R(k))
                continue;
              k === ">" ? He(_) : Q(_, "Invalid characters in closing tag");
              continue;
            case P.TEXT_ENTITY:
            case P.ATTRIB_VALUE_ENTITY_Q:
            case P.ATTRIB_VALUE_ENTITY_U:
              var ae, Me;
              switch (_.state) {
                case P.TEXT_ENTITY:
                  ae = P.TEXT, Me = "textNode";
                  break;
                case P.ATTRIB_VALUE_ENTITY_Q:
                  ae = P.ATTRIB_VALUE_QUOTED, Me = "attribValue";
                  break;
                case P.ATTRIB_VALUE_ENTITY_U:
                  ae = P.ATTRIB_VALUE_UNQUOTED, Me = "attribValue";
                  break;
              }
              if (k === ";") {
                var me = it(_);
                _.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(me) ? (_.entity = "", _.state = ae, _.write(me)) : (_[Me] += me, _.entity = "", _.state = ae);
              } else H(_.entity.length ? x : C, k) ? _.entity += k : (Q(_, "Invalid character in entity name"), _[Me] += "&" + _.entity + k, _.entity = "", _.state = ae);
              continue;
            default:
              throw new Error(_, "Unknown state: " + _.state);
          }
        return _.position >= _.bufferCheckPosition && o(_), _;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var I = String.fromCharCode, _ = Math.floor, B = function() {
          var k = 16384, ee = [], Oe, ae, Me = -1, me = arguments.length;
          if (!me)
            return "";
          for (var Ge = ""; ++Me < me; ) {
            var Se = Number(arguments[Me]);
            if (!isFinite(Se) || // `NaN`, `+Infinity`, or `-Infinity`
            Se < 0 || // not a valid Unicode code point
            Se > 1114111 || // not a valid Unicode code point
            _(Se) !== Se)
              throw RangeError("Invalid code point: " + Se);
            Se <= 65535 ? ee.push(Se) : (Se -= 65536, Oe = (Se >> 10) + 55296, ae = Se % 1024 + 56320, ee.push(Oe, ae)), (Me + 1 === me || ee.length > k) && (Ge += I.apply(null, ee), ee.length = 0);
          }
          return Ge;
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
lm();
class um {
  constructor() {
    he(this, "_entries", []);
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
function cm() {
  return typeof window._nc_newfilemenu > "u" && (window._nc_newfilemenu = new um(), xr.debug("NewFileMenu initialized")), window._nc_newfilemenu;
}
function fm(n) {
  return cm().registerEntry(n);
}
class Gt {
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
    existingContents: g,
    templateName: y,
    isPublicLink: b
  } = {}) {
    return {
      name: e || "?",
      downloadUrl: i || "",
      url: r ? ze(r) : "",
      dir: o || "",
      onCreate: a,
      fileModifiedTime: l || null,
      isNew: f || !1,
      isLoaded: u || !1,
      sameWindow: h || !1,
      skipConfirmation: s || !1,
      permissions: d || gt.NONE,
      existingContents: g,
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
    const a = em(), l = `${uu}${o}`;
    try {
      if (await a.putFileContents(l, e, { overwrite: !0 })) {
        const u = await a.stat(l, { details: !0, data: Kd() });
        return sl("files:node:created", tm(u.data)), !0;
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
function Aa(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "You are about to visit:") + ""
  ), i, o, a, l, f = (
    /*file*/
    n[0].url + ""
  ), u, h, s;
  return {
    c() {
      e = Z("p"), i = Ie(r), o = pe(), a = Z("em"), l = Z("a"), u = Ie(f), j(l, "href", h = ze(
        /*file*/
        n[0].url
      )), j(l, "target", s = /*file*/
      n[0].sameWindow ? "_self" : "_blank"), j(e, "class", "urldisplay");
    },
    m(d, g) {
      oe(d, e, g), V(e, i), V(e, o), V(e, a), V(a, l), V(l, u);
    },
    p(d, g) {
      g & /*file*/
      1 && f !== (f = /*file*/
      d[0].url + "") && fr(u, f), g & /*file*/
      1 && h !== (h = ze(
        /*file*/
        d[0].url
      )) && j(l, "href", h), g & /*file*/
      1 && s !== (s = /*file*/
      d[0].sameWindow ? "_self" : "_blank") && j(l, "target", s);
    },
    d(d) {
      d && ie(e);
    }
  };
}
function Oa(n) {
  let e = Gt.userCanEdit(
    /*file*/
    n[0].permissions
  ) && !/*file*/
  n[0].isPublicLink, r, i, o = (
    /*t*/
    n[2]("files_linkeditor", "Visit link") + ""
  ), a, l, f, u = e && Sa(n);
  return {
    c() {
      u && u.c(), r = pe(), i = Z("a"), a = Ie(o), j(i, "href", l = ze(
        /*file*/
        n[0].url
      )), j(i, "target", f = /*file*/
      n[0].sameWindow ? "_self" : "_blank"), j(i, "class", "button primary");
    },
    m(h, s) {
      u && u.m(h, s), oe(h, r, s), oe(h, i, s), V(i, a);
    },
    p(h, s) {
      s & /*file*/
      1 && (e = Gt.userCanEdit(
        /*file*/
        h[0].permissions
      ) && !/*file*/
      h[0].isPublicLink), e ? u ? u.p(h, s) : (u = Sa(h), u.c(), u.m(r.parentNode, r)) : u && (u.d(1), u = null), s & /*file*/
      1 && l !== (l = ze(
        /*file*/
        h[0].url
      )) && j(i, "href", l), s & /*file*/
      1 && f !== (f = /*file*/
      h[0].sameWindow ? "_self" : "_blank") && j(i, "target", f);
    },
    d(h) {
      h && (ie(r), ie(i)), u && u.d(h);
    }
  };
}
function Sa(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Edit link") + ""
  ), i, o, a;
  return {
    c() {
      e = Z("a"), i = Ie(r), j(e, "href", window.location.href), j(e, "class", "button");
    },
    m(l, f) {
      oe(l, e, f), V(e, i), o || (a = Ce(e, "click", wt(
        /*click_handler_1*/
        n[4]
      )), o = !0);
    },
    p: an,
    d(l) {
      l && ie(e), o = !1, a();
    }
  };
}
function hm(n) {
  let e, r, i = (
    /*file*/
    n[0].name + ""
  ), o, a, l, f, u, h = (
    /*t*/
    n[2]("files_linkeditor", "Cancel") + ""
  ), s, d, g, y, b = !/*loading*/
  n[1] && Aa(n), E = !/*loading*/
  n[1] && Oa(n);
  return {
    c() {
      e = Z("div"), r = Z("h3"), o = Ie(i), a = pe(), b && b.c(), l = pe(), f = Z("div"), u = Z("a"), s = Ie(h), d = pe(), E && E.c(), j(e, "class", "edit push-bottom"), j(u, "href", window.location.href), j(u, "class", "button"), j(f, "class", "linkeditor-oc-dialog-buttonrow twobuttons");
    },
    m(T, S) {
      oe(T, e, S), V(e, r), V(r, o), V(e, a), b && b.m(e, null), oe(T, l, S), oe(T, f, S), V(f, u), V(u, s), V(f, d), E && E.m(f, null), g || (y = Ce(u, "click", wt(
        /*click_handler*/
        n[3]
      )), g = !0);
    },
    p(T, S) {
      S & /*file*/
      1 && i !== (i = /*file*/
      T[0].name + "") && fr(o, i), /*loading*/
      T[1] ? b && (b.d(1), b = null) : b ? b.p(T, S) : (b = Aa(T), b.c(), b.m(e, null)), /*loading*/
      T[1] ? E && (E.d(1), E = null) : E ? E.p(T, S) : (E = Oa(T), E.c(), E.m(f, null));
    },
    d(T) {
      T && (ie(e), ie(l), ie(f)), b && b.d(), E && E.d(), g = !1, y();
    }
  };
}
function pm(n) {
  let e, r;
  return e = new hr({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [hm] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Vt(e.$$.fragment);
    },
    m(i, o) {
      kt(e, i, o), r = !0;
    },
    p(i, [o]) {
      const a = {};
      o & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), o & /*$$scope, file, loading*/
      67 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (Te(e.$$.fragment, i), r = !0);
    },
    o(i) {
      xe(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Ft(e, i);
    }
  };
}
function dm(n, e, r) {
  let i, o;
  const a = window.t;
  let l;
  Rn(() => {
    l = Ct.subscribe(async (h) => {
      if (r(0, i = h), i && i.isLoaded) {
        if (r(1, o = !1), !i.url) {
          OC.dialogs.alert(a("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."), a("files_linkeditor", "A slight problem"));
          return;
        }
        const s = i.isPublicLink && window.location.toString().includes("openfile=true");
        i.skipConfirmation && i.sameWindow && !s && (window.location.href = i.url, Ke.update(() => "none"));
      }
    });
  }), Cn(() => {
    l();
  });
  const f = () => {
    Ke.update(() => "none");
  }, u = () => {
    Ke.update(() => "edit");
  };
  return r(0, i = Gt.getFileConfig()), r(1, o = !0), [i, o, a, f, u];
}
class mm extends pn {
  constructor(e) {
    super(), hn(this, e, dm, pm, ln, {});
  }
}
const Ra = "application/internet-shortcut", Ca = () => '<span class="icon-link" style="display: block;"></span>';
window.OC.dialogs.alert = function(n, e) {
  window.OC.dialogs.message(
    t("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."),
    t("files_linkeditor", "A slight problem"),
    "alert",
    71
    // Dialogs.OK_BUTTONS
  );
};
class jn {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    ma({
      id: "editLink",
      displayName: () => t("files_linkeditor", "Edit link"),
      iconSvgInline: Ca,
      exec: async (r) => {
        await jn.loadAndChangeViewMode({
          fileName: r.basename,
          dirName: r.dirname,
          nextViewMode: "edit",
          permissions: r.permissions
        });
      },
      enabled: (r) => window.OC.currentUser && r.every((i) => i.permissions >= gt.UPDATE && Ra.includes(i.mime))
    }), ma({
      id: "viewLink",
      displayName: () => t("files_linkeditor", "View link"),
      iconSvgInline: Ca,
      exec: async (r) => {
        window.OC.currentUser ? await jn.loadAndChangeViewMode({
          fileName: r.basename,
          dirName: r.dirname,
          nextViewMode: "view",
          permissions: r.permissions
        }) : await jn.loadAndChangeViewMode({
          fileName: r.displayname ?? r.basename,
          dirName: r.dirname,
          nextViewMode: "view",
          // TODO:
          downloadUrl: r.source,
          publicUser: !0,
          permissions: r.permissions
        });
      },
      enabled: (r) => r.every((i) => i.permissions >= gt.READ && Ra.includes(i.mime)),
      default: () => fu.DEFAULT
    });
    const e = ({ id: r, displayName: i, templateName: o }) => {
      fm({
        id: r,
        displayName: i,
        enabled: (a) => a.permissions >= gt.CREATE,
        iconClass: "icon-link",
        handler: (a, l) => {
          const f = a.path;
          Ke.update(() => "filename"), Ct.update(
            () => Gt.getFileConfig({
              name: o,
              templateName: o,
              dir: f,
              isNew: !0,
              existingContents: l,
              onCreate: async (u) => {
                Ke.update(() => "edit"), Ct.update(
                  () => Gt.getFileConfig({
                    name: u.name,
                    dir: u.dir,
                    isNew: !0,
                    onCreate: async (h) => {
                      await jn.saveAndChangeViewMode(h);
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
    Ke.update(() => i), Ct.update(
      () => Gt.getFileConfig({
        name: e,
        dir: r || "",
        permissions: l,
        isPublicLink: o
      })
    );
    let f = {};
    if (o ? f = await Gt.loadPublic({ downloadUrl: a }) : f = await Gt.load({ fileName: e, dir: r }), f) {
      const u = Wt.getExtension(e);
      let h = {};
      u === "webloc" ? h = Wt.parseWeblocFile(f.filecontents) : h = Wt.parseURLFile(f.filecontents), Ct.update(
        (s) => Gt.getFileConfig({
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
    const f = Wt.getExtension(e);
    let u = "";
    f === "webloc" ? u = Wt.generateWeblocFileContent("", i, a, l) : u = Wt.generateURLFileContent("", i, a, l), await Gt.save({ fileContent: u, name: e, dir: r, fileModifiedTime: o }), Ke.update(() => "none");
  }
}
function La(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Link target URL") + ""
  ), i, o, a, l, f, u, h, s, d, g, y, b, E, T, S, C;
  return {
    c() {
      e = Z("label"), i = Ie(r), o = pe(), a = Z("br"), l = pe(), f = Z("input"), u = pe(), h = Z("input"), s = pe(), d = Z("label"), d.textContent = `${/*t*/
      n[2]("files_linkeditor", "Open in same window")}`, g = pe(), y = Z("input"), E = pe(), T = Z("label"), T.textContent = `${/*t*/
      n[2]("files_linkeditor", "Skip confirmation dialog before open (has to open in same window)")}`, j(f, "type", "text"), Dr(f, "width", "100%"), j(f, "class", "input-wide"), f.autofocus = !0, j(f, "data-cy", "url-input"), j(
        f,
        "placeholder",
        /*t*/
        n[2]("files_linkeditor", "e.g. https://example.org")
      ), j(h, "type", "checkbox"), j(h, "id", "linkeditor_sameWindow"), j(h, "class", "checkbox"), j(d, "for", "linkeditor_sameWindow"), j(d, "class", "space-top"), j(y, "type", "checkbox"), y.disabled = b = !/*file*/
      n[0].sameWindow, j(y, "id", "linkeditor_skipConfirmation"), j(y, "class", "checkbox"), j(T, "for", "linkeditor_skipConfirmation");
    },
    m(x, R) {
      oe(x, e, R), V(e, i), V(e, o), V(e, a), V(e, l), V(e, f), On(
        f,
        /*file*/
        n[0].url
      ), oe(x, u, R), oe(x, h, R), h.checked = /*file*/
      n[0].sameWindow, oe(x, s, R), oe(x, d, R), oe(x, g, R), oe(x, y, R), y.checked = /*file*/
      n[0].skipConfirmation, oe(x, E, R), oe(x, T, R), f.focus(), S || (C = [
        Ce(
          f,
          "input",
          /*input0_input_handler*/
          n[5]
        ),
        Ce(
          h,
          "change",
          /*input1_change_handler*/
          n[6]
        ),
        Ce(
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
      x[0].url && On(
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
      x && (ie(e), ie(u), ie(h), ie(s), ie(d), ie(g), ie(y), ie(E), ie(T)), S = !1, $t(C);
    }
  };
}
function xa(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Visit link") + ""
  ), i, o;
  return {
    c() {
      e = Z("a"), i = Ie(r), j(e, "href", o = ze(
        /*file*/
        n[0].url
      )), j(e, "target", "_blank"), j(e, "class", "button");
    },
    m(a, l) {
      oe(a, e, l), V(e, i);
    },
    p(a, l) {
      l & /*file*/
      1 && o !== (o = ze(
        /*file*/
        a[0].url
      )) && j(e, "href", o);
    },
    d(a) {
      a && ie(e);
    }
  };
}
function Pa(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Save") + ""
  ), i, o, a;
  return {
    c() {
      e = Z("a"), i = Ie(r), j(e, "href", window.location.href), j(e, "class", "primary button");
    },
    m(l, f) {
      oe(l, e, f), V(e, i), o || (a = Ce(e, "click", wt(
        /*save*/
        n[4]
      )), o = !0);
    },
    p: an,
    d(l) {
      l && ie(e), o = !1, a();
    }
  };
}
function gm(n) {
  let e, r, i, o = (
    /*file*/
    n[0].name + ""
  ), a, l, f, u, h, s, d, g = (
    /*t*/
    n[2]("files_linkeditor", "Cancel") + ""
  ), y, b, E, T, S = !/*loading*/
  n[1] && La(n), C = !/*loading*/
  n[1] && xa(n), x = !/*loading*/
  n[1] && Pa(n);
  return {
    c() {
      e = Z("form"), r = Z("div"), i = Z("h3"), a = Ie(o), l = pe(), S && S.c(), f = pe(), u = Z("div"), C && C.c(), h = pe(), s = Z("div"), d = Z("a"), y = Ie(g), b = pe(), x && x.c(), j(r, "class", "edit"), j(u, "class", "linkeditor-oc-dialog-buttonrow onebutton urlvisit"), j(d, "href", window.location.href), j(d, "class", "cancel button"), j(s, "class", "linkeditor-oc-dialog-buttonrow twobuttons"), j(
        e,
        "action",
        /*OC*/
        n[3].generateUrl("/")
      ), j(e, "method", "post");
    },
    m(R, U) {
      oe(R, e, U), V(e, r), V(r, i), V(i, a), V(r, l), S && S.m(r, null), V(e, f), V(e, u), C && C.m(u, null), V(e, h), V(e, s), V(s, d), V(d, y), V(s, b), x && x.m(s, null), E || (T = [
        Ce(d, "click", wt(
          /*click_handler*/
          n[8]
        )),
        Ce(e, "submit", wt(
          /*save*/
          n[4]
        ))
      ], E = !0);
    },
    p(R, U) {
      U & /*file*/
      1 && o !== (o = /*file*/
      R[0].name + "") && fr(a, o), /*loading*/
      R[1] ? S && (S.d(1), S = null) : S ? S.p(R, U) : (S = La(R), S.c(), S.m(r, null)), /*loading*/
      R[1] ? C && (C.d(1), C = null) : C ? C.p(R, U) : (C = xa(R), C.c(), C.m(u, null)), /*loading*/
      R[1] ? x && (x.d(1), x = null) : x ? x.p(R, U) : (x = Pa(R), x.c(), x.m(s, null));
    },
    d(R) {
      R && ie(e), S && S.d(), C && C.d(), x && x.d(), E = !1, $t(T);
    }
  };
}
function Em(n) {
  let e, r;
  return e = new hr({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [gm] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Vt(e.$$.fragment);
    },
    m(i, o) {
      kt(e, i, o), r = !0;
    },
    p(i, [o]) {
      const a = {};
      o & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), o & /*$$scope, loading, file*/
      1027 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (Te(e.$$.fragment, i), r = !0);
    },
    o(i) {
      xe(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Ft(e, i);
    }
  };
}
function wm(n, e, r) {
  let i, o;
  const a = window.t, l = window.OC;
  let f;
  Rn(() => {
    f = Ct.subscribe((y) => {
      r(0, i = y), i && (i.isLoaded || i.isNew) && r(1, o = !1);
    });
  }), Cn(() => {
    f();
  });
  const u = () => {
    r(1, o = !0), i.isNew && i.onCreate ? i.onCreate({ ...i }) : jn.saveAndChangeViewMode({ ...i });
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
  const g = () => {
    Ke.update(() => "none");
  };
  return r(0, i = Gt.getFileConfig()), r(1, o = !0), [
    i,
    o,
    a,
    l,
    u,
    h,
    s,
    d,
    g
  ];
}
class ym extends pn {
  constructor(e) {
    super(), hn(this, e, wm, Em, ln, {});
  }
}
function Da(n) {
  let e, r = (
    /*t*/
    n[3]("files_linkeditor", "File name") + ""
  ), i, o, a, l, f, u, h;
  return {
    c() {
      e = Z("label"), i = Ie(r), o = pe(), a = Z("br"), l = pe(), f = Z("input"), j(f, "type", "text"), Dr(f, "width", "100%"), j(f, "class", "input-wide"), f.autofocus = !0, j(f, "data-cy", "name-input");
    },
    m(s, d) {
      oe(s, e, d), V(e, i), V(e, o), V(e, a), V(e, l), V(e, f), On(
        f,
        /*file*/
        n[0].name
      ), f.focus(), u || (h = [
        Ce(
          f,
          "input",
          /*input_input_handler*/
          n[7]
        ),
        Ce(
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
      s[0].name && On(
        f,
        /*file*/
        s[0].name
      );
    },
    d(s) {
      s && ie(e), u = !1, $t(h);
    }
  };
}
function $a(n) {
  let e, r = (
    /*t*/
    n[3]("files_linkeditor", "Create") + ""
  ), i, o, a;
  return {
    c() {
      e = Z("button"), i = Ie(r), j(e, "type", "submit"), e.disabled = /*isConflicting*/
      n[2], j(e, "class", "primary button");
    },
    m(l, f) {
      oe(l, e, f), V(e, i), o || (a = Ce(e, "click", wt(
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
      l && ie(e), o = !1, a();
    }
  };
}
function vm(n) {
  let e, r, i, o, a, l, f, u = (
    /*t*/
    n[3]("files_linkeditor", "Cancel") + ""
  ), h, s, d, g, y = !/*loading*/
  n[1] && Da(n), b = !/*loading*/
  n[1] && $a(n);
  return {
    c() {
      e = Z("form"), r = Z("div"), i = Z("h3"), i.textContent = `${window.t("files_linkeditor", "New link")}`, o = pe(), y && y.c(), a = pe(), l = Z("div"), f = Z("a"), h = Ie(u), s = pe(), b && b.c(), j(r, "class", "edit"), j(f, "href", window.location.href), j(f, "class", "cancel button"), j(l, "class", "linkeditor-oc-dialog-buttonrow twobuttons"), j(
        e,
        "action",
        /*OC*/
        n[4].generateUrl("/")
      ), j(e, "method", "post");
    },
    m(E, T) {
      oe(E, e, T), V(e, r), V(r, i), V(r, o), y && y.m(r, null), V(e, a), V(e, l), V(l, f), V(f, h), V(l, s), b && b.m(l, null), d || (g = [
        Ce(f, "click", wt(
          /*click_handler*/
          n[8]
        )),
        Ce(e, "submit", wt(
          /*save*/
          n[6]
        ))
      ], d = !0);
    },
    p(E, T) {
      /*loading*/
      E[1] ? y && (y.d(1), y = null) : y ? y.p(E, T) : (y = Da(E), y.c(), y.m(r, null)), /*loading*/
      E[1] ? b && (b.d(1), b = null) : b ? b.p(E, T) : (b = $a(E), b.c(), b.m(l, null));
    },
    d(E) {
      E && ie(e), y && y.d(), b && b.d(), d = !1, $t(g);
    }
  };
}
function bm(n) {
  let e, r;
  return e = new hr({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [vm] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Vt(e.$$.fragment);
    },
    m(i, o) {
      kt(e, i, o), r = !0;
    },
    p(i, [o]) {
      const a = {};
      o & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), o & /*$$scope, isConflicting, loading, file*/
      2055 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (Te(e.$$.fragment, i), r = !0);
    },
    o(i) {
      xe(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Ft(e, i);
    }
  };
}
function _m(n, e, r) {
  let i, o, a;
  const l = window.t, f = window.OC, u = (b, E) => {
    const T = {
      name: b,
      templateName: i.templateName
    }, S = ci(T);
    return ((E == null ? void 0 : E.map((x) => x.basename)) ?? []).includes(S.name);
  };
  let h;
  Rn(() => {
    h = Ct.subscribe((b) => {
      r(0, i = b), i && (i.isLoaded || i.isNew) && (r(1, o = !1), s());
    });
  }), Cn(() => {
    h();
  });
  const s = () => {
    u(i.name, i.existingContents) ? r(2, a = !0) : r(2, a = !1);
  }, d = () => {
    u(i.name, i.existingContents) || (r(1, o = !0), i.onCreate(ci({ ...i })));
  };
  function g() {
    i.name = this.value, r(0, i);
  }
  const y = () => {
    Ke.update(() => "none");
  };
  return r(0, i = Gt.getFileConfig()), r(1, o = !0), r(2, a = !0), [
    i,
    o,
    a,
    l,
    f,
    s,
    d,
    g,
    y
  ];
}
class Tm extends pn {
  constructor(e) {
    super(), hn(this, e, _m, bm, ln, {});
  }
}
function ka(n) {
  let e, r;
  return e = new Tm({}), {
    c() {
      Vt(e.$$.fragment);
    },
    m(i, o) {
      kt(e, i, o), r = !0;
    },
    i(i) {
      r || (Te(e.$$.fragment, i), r = !0);
    },
    o(i) {
      xe(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Ft(e, i);
    }
  };
}
function Fa(n) {
  let e, r;
  return e = new mm({}), {
    c() {
      Vt(e.$$.fragment);
    },
    m(i, o) {
      kt(e, i, o), r = !0;
    },
    i(i) {
      r || (Te(e.$$.fragment, i), r = !0);
    },
    o(i) {
      xe(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Ft(e, i);
    }
  };
}
function Ma(n) {
  let e, r;
  return e = new ym({}), {
    c() {
      Vt(e.$$.fragment);
    },
    m(i, o) {
      kt(e, i, o), r = !0;
    },
    i(i) {
      r || (Te(e.$$.fragment, i), r = !0);
    },
    o(i) {
      xe(e.$$.fragment, i), r = !1;
    },
    d(i) {
      Ft(e, i);
    }
  };
}
function Nm(n) {
  let e, r, i, o, a = (
    /*viewMode*/
    n[0] === "filename" && ka()
  ), l = (
    /*viewMode*/
    n[0] === "view" && Fa()
  ), f = (
    /*viewMode*/
    n[0] === "edit" && Ma()
  );
  return {
    c() {
      a && a.c(), e = pe(), l && l.c(), r = pe(), f && f.c(), i = Xa();
    },
    m(u, h) {
      a && a.m(u, h), oe(u, e, h), l && l.m(u, h), oe(u, r, h), f && f.m(u, h), oe(u, i, h), o = !0;
    },
    p(u, [h]) {
      /*viewMode*/
      u[0] === "filename" ? a ? h & /*viewMode*/
      1 && Te(a, 1) : (a = ka(), a.c(), Te(a, 1), a.m(e.parentNode, e)) : a && (lr(), xe(a, 1, 1, () => {
        a = null;
      }), ur()), /*viewMode*/
      u[0] === "view" ? l ? h & /*viewMode*/
      1 && Te(l, 1) : (l = Fa(), l.c(), Te(l, 1), l.m(r.parentNode, r)) : l && (lr(), xe(l, 1, 1, () => {
        l = null;
      }), ur()), /*viewMode*/
      u[0] === "edit" ? f ? h & /*viewMode*/
      1 && Te(f, 1) : (f = Ma(), f.c(), Te(f, 1), f.m(i.parentNode, i)) : f && (lr(), xe(f, 1, 1, () => {
        f = null;
      }), ur());
    },
    i(u) {
      o || (Te(a), Te(l), Te(f), o = !0);
    },
    o(u) {
      xe(a), xe(l), xe(f), o = !1;
    },
    d(u) {
      u && (ie(e), ie(r), ie(i)), a && a.d(u), l && l.d(u), f && f.d(u);
    }
  };
}
function Im(n, e, r) {
  let i, o;
  return Rn(() => {
    o = Ke.subscribe((a) => {
      r(0, i = a);
    });
  }), Cn(() => {
    o();
  }), r(0, i = ""), [i];
}
class Am extends pn {
  constructor(e) {
    super(), hn(this, e, Im, Nm, ln, {});
  }
}
const Ua = [];
var Ga, Wa;
const Om = Number.parseInt((((Wa = (Ga = window.OC) == null ? void 0 : Ga.config) == null ? void 0 : Wa.version) ?? "0").split(".")[0]);
Om >= 33 ? (Ua.push(
  new jd({
    target: document.body,
    props: {}
  })
), Bn.registerFileActions()) : (Ua.push(
  new Am({
    target: document.body,
    props: {}
  })
), jn.registerFileActions());
