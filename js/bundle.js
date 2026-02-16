var da = Object.defineProperty;
var zi = (r) => {
  throw TypeError(r);
};
var ga = (r, e, n) => e in r ? da(r, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[e] = n;
var te = (r, e, n) => ga(r, typeof e != "symbol" ? e + "" : e, n), Cn = (r, e, n) => e.has(r) || zi("Cannot " + n);
var F = (r, e, n) => (Cn(r, e, "read from private field"), n ? n.call(r) : e.get(r)), et = (r, e, n) => e.has(r) ? zi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, n), Te = (r, e, n, i) => (Cn(r, e, "write to private field"), i ? i.call(r, n) : e.set(r, n), n), Vt = (r, e, n) => (Cn(r, e, "access private method"), n);
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
    return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
    i(o);
  new MutationObserver((o) => {
    for (const a of o)
      if (a.type === "childList")
        for (const c of a.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && i(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const a = {};
    return o.integrity && (a.integrity = o.integrity), o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? a.credentials = "include" : o.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
  }
  function i(o) {
    if (o.ep)
      return;
    o.ep = !0;
    const a = n(o);
    fetch(o.href, a);
  }
})();
function Jt() {
}
function ma(r, e) {
  for (const n in e) r[n] = e[n];
  return (
    /** @type {T & S} */
    r
  );
}
function ns(r) {
  return r();
}
function Vi() {
  return /* @__PURE__ */ Object.create(null);
}
function Wt(r) {
  r.forEach(ns);
}
function is(r) {
  return typeof r == "function";
}
function Cr(r, e) {
  return r != r ? e == e : r !== e || r && typeof r == "object" || typeof r == "function";
}
function ya(r) {
  return Object.keys(r).length === 0;
}
function wa(r, e, n, i) {
  if (r) {
    const o = os(r, e, n, i);
    return r[0](o);
  }
}
function os(r, e, n, i) {
  return r[1] && i ? ma(n.ctx.slice(), r[1](i(e))) : n.ctx;
}
function Ea(r, e, n, i) {
  return r[2], e.dirty;
}
function va(r, e, n, i, o, a) {
  if (o) {
    const c = os(e, n, i, a);
    r.p(c, o);
  }
}
function ba(r) {
  if (r.ctx.length > 32) {
    const e = [], n = r.ctx.length / 32;
    for (let i = 0; i < n; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
const tn = globalThis || void 0 || self;
function Z(r, e) {
  r.appendChild(e);
}
function pe(r, e, n) {
  r.insertBefore(e, n || null);
}
function fe(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function ie(r) {
  return document.createElement(r);
}
function ze(r) {
  return document.createTextNode(r);
}
function Ee() {
  return ze(" ");
}
function _a() {
  return ze("");
}
function ct(r, e, n, i) {
  return r.addEventListener(e, n, i), () => r.removeEventListener(e, n, i);
}
function Qt(r) {
  return function(e) {
    return e.preventDefault(), r.call(this, e);
  };
}
function z(r, e, n) {
  n == null ? r.removeAttribute(e) : r.getAttribute(e) !== n && r.setAttribute(e, n);
}
function Ta(r) {
  return Array.from(r.childNodes);
}
function yi(r, e) {
  e = "" + e, r.data !== e && (r.data = /** @type {string} */
  e);
}
function dn(r, e) {
  r.value = e ?? "";
}
function wi(r, e, n, i) {
  n == null ? r.style.removeProperty(e) : r.style.setProperty(e, n, "");
}
let Zr;
function Hr(r) {
  Zr = r;
}
function ss() {
  if (!Zr) throw new Error("Function called outside component initialization");
  return Zr;
}
function _n(r) {
  ss().$$.on_mount.push(r);
}
function Tn(r) {
  ss().$$.on_destroy.push(r);
}
const Ir = [], qi = [];
let Sr = [];
const Hi = [], Aa = /* @__PURE__ */ Promise.resolve();
let ei = !1;
function Ia() {
  ei || (ei = !0, Aa.then(as));
}
function ti(r) {
  Sr.push(r);
}
const Ln = /* @__PURE__ */ new Set();
let vr = 0;
function as() {
  if (vr !== 0)
    return;
  const r = Zr;
  do {
    try {
      for (; vr < Ir.length; ) {
        const e = Ir[vr];
        vr++, Hr(e), xa(e.$$);
      }
    } catch (e) {
      throw Ir.length = 0, vr = 0, e;
    }
    for (Hr(null), Ir.length = 0, vr = 0; qi.length; ) qi.pop()();
    for (let e = 0; e < Sr.length; e += 1) {
      const n = Sr[e];
      Ln.has(n) || (Ln.add(n), n());
    }
    Sr.length = 0;
  } while (Ir.length);
  for (; Hi.length; )
    Hi.pop()();
  ei = !1, Ln.clear(), Hr(r);
}
function xa(r) {
  if (r.fragment !== null) {
    r.update(), Wt(r.before_update);
    const e = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, e), r.after_update.forEach(ti);
  }
}
function Na(r) {
  const e = [], n = [];
  Sr.forEach((i) => r.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), Sr = e;
}
const cn = /* @__PURE__ */ new Set();
let ar;
function Pn() {
  ar = {
    r: 0,
    c: [],
    p: ar
    // parent group
  };
}
function $n() {
  ar.r || Wt(ar.c), ar = ar.p;
}
function Ue(r, e) {
  r && r.i && (cn.delete(r), r.i(e));
}
function lt(r, e, n, i) {
  if (r && r.o) {
    if (cn.has(r)) return;
    cn.add(r), ar.c.push(() => {
      cn.delete(r), i && (n && r.d(1), i());
    }), r.o(e);
  } else i && i();
}
function Lr(r) {
  r && r.c();
}
function gr(r, e, n) {
  const { fragment: i, after_update: o } = r.$$;
  i && i.m(e, n), ti(() => {
    const a = r.$$.on_mount.map(ns).filter(is);
    r.$$.on_destroy ? r.$$.on_destroy.push(...a) : Wt(a), r.$$.on_mount = [];
  }), o.forEach(ti);
}
function mr(r, e) {
  const n = r.$$;
  n.fragment !== null && (Na(n.after_update), Wt(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Oa(r, e) {
  r.$$.dirty[0] === -1 && (Ir.push(r), Ia(), r.$$.dirty.fill(0)), r.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Qr(r, e, n, i, o, a, c = null, h = [-1]) {
  const f = Zr;
  Hr(r);
  const p = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: Jt,
    not_equal: o,
    bound: Vi(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: Vi(),
    dirty: h,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  c && c(p.root);
  let s = !1;
  if (p.ctx = n ? n(r, e.props || {}, (g, m, ...v) => {
    const b = v.length ? v[0] : m;
    return p.ctx && o(p.ctx[g], p.ctx[g] = b) && (!p.skip_bound && p.bound[g] && p.bound[g](b), s && Oa(r, g)), m;
  }) : [], p.update(), s = !0, Wt(p.before_update), p.fragment = i ? i(p.ctx) : !1, e.target) {
    if (e.hydrate) {
      const g = Ta(e.target);
      p.fragment && p.fragment.l(g), g.forEach(fe);
    } else
      p.fragment && p.fragment.c();
    e.intro && Ue(r.$$.fragment), gr(r, e.target, e.anchor), as();
  }
  Hr(f);
}
class en {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    te(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    te(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    mr(this, 1), this.$destroy = Jt;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!is(n))
      return Jt;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const o = i.indexOf(n);
      o !== -1 && i.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !ya(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Sa = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Sa);
function Ra(r) {
  let e, n, i, o, a;
  const c = (
    /*#slots*/
    r[2].default
  ), h = wa(
    c,
    r,
    /*$$scope*/
    r[1],
    null
  );
  return {
    c() {
      e = ie("div"), n = Ee(), i = ie("div"), h && h.c(), z(e, "class", "oc-dialog-dim"), z(i, "class", o = `oc-dialog ${/*loading*/
      r[0] ? "icon-loading" : ""}`), wi(i, "position", "fixed");
    },
    m(f, p) {
      pe(f, e, p), pe(f, n, p), pe(f, i, p), h && h.m(i, null), a = !0;
    },
    p(f, [p]) {
      h && h.p && (!a || p & /*$$scope*/
      2) && va(
        h,
        c,
        f,
        /*$$scope*/
        f[1],
        a ? Ea(
          c,
          /*$$scope*/
          f[1],
          p,
          null
        ) : ba(
          /*$$scope*/
          f[1]
        ),
        null
      ), (!a || p & /*loading*/
      1 && o !== (o = `oc-dialog ${/*loading*/
      f[0] ? "icon-loading" : ""}`)) && z(i, "class", o);
    },
    i(f) {
      a || (Ue(h, f), a = !0);
    },
    o(f) {
      lt(h, f), a = !1;
    },
    d(f) {
      f && (fe(e), fe(n), fe(i)), h && h.d(f);
    }
  };
}
function Ca(r, e, n) {
  let { $$slots: i = {}, $$scope: o } = e, { loading: a = !1 } = e;
  return r.$$set = (c) => {
    "loading" in c && n(0, a = c.loading), "$$scope" in c && n(1, o = c.$$scope);
  }, [a, o, i];
}
class Ei extends en {
  constructor(e) {
    super(), Qr(this, e, Ca, Ra, Cr, { loading: 0 });
  }
}
const br = [];
function us(r, e = Jt) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function o(h) {
    if (Cr(r, h) && (r = h, n)) {
      const f = !br.length;
      for (const p of i)
        p[1](), br.push(p, r);
      if (f) {
        for (let p = 0; p < br.length; p += 2)
          br[p][0](br[p + 1]);
        br.length = 0;
      }
    }
  }
  function a(h) {
    o(h(r));
  }
  function c(h, f = Jt) {
    const p = [h, f];
    return i.add(p), i.size === 1 && (n = e(o, a) || Jt), h(r), () => {
      i.delete(p), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: a, subscribe: c };
}
function vi(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var bi = {}, je = {};
Object.defineProperty(je, "__esModule", { value: !0 });
je.BLANK_URL = je.relativeFirstCharacters = je.urlSchemeRegex = je.ctrlCharactersRegex = je.htmlCtrlEntityRegex = je.htmlEntitiesRegex = je.invalidProtocolRegex = void 0;
je.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
je.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
je.htmlCtrlEntityRegex = /&(newline|tab);/gi;
je.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
je.urlSchemeRegex = /^.+(:|&colon;)/gim;
je.relativeFirstCharacters = [".", "/"];
je.BLANK_URL = "about:blank";
Object.defineProperty(bi, "__esModule", { value: !0 });
var rt = bi.sanitizeUrl = void 0, at = je;
function La(r) {
  return at.relativeFirstCharacters.indexOf(r[0]) > -1;
}
function Pa(r) {
  var e = r.replace(at.ctrlCharactersRegex, "");
  return e.replace(at.htmlEntitiesRegex, function(n, i) {
    return String.fromCharCode(i);
  });
}
function $a(r) {
  if (!r)
    return at.BLANK_URL;
  var e, n = r;
  do
    n = Pa(n).replace(at.htmlCtrlEntityRegex, "").replace(at.ctrlCharactersRegex, "").trim(), e = n.match(at.ctrlCharactersRegex) || n.match(at.htmlEntitiesRegex) || n.match(at.htmlCtrlEntityRegex);
  while (e && e.length > 0);
  var i = n;
  if (!i)
    return at.BLANK_URL;
  if (La(i))
    return i;
  var o = i.match(at.urlSchemeRegex);
  if (!o)
    return i;
  var a = o[0];
  return at.invalidProtocolRegex.test(a) ? at.BLANK_URL : i;
}
rt = bi.sanitizeUrl = $a;
function ka(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ls = { exports: {} }, Ie = ls.exports = {}, Rt, Ct;
function ri() {
  throw new Error("setTimeout has not been defined");
}
function ni() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Rt = setTimeout : Rt = ri;
  } catch {
    Rt = ri;
  }
  try {
    typeof clearTimeout == "function" ? Ct = clearTimeout : Ct = ni;
  } catch {
    Ct = ni;
  }
})();
function cs(r) {
  if (Rt === setTimeout)
    return setTimeout(r, 0);
  if ((Rt === ri || !Rt) && setTimeout)
    return Rt = setTimeout, setTimeout(r, 0);
  try {
    return Rt(r, 0);
  } catch {
    try {
      return Rt.call(null, r, 0);
    } catch {
      return Rt.call(this, r, 0);
    }
  }
}
function Da(r) {
  if (Ct === clearTimeout)
    return clearTimeout(r);
  if ((Ct === ni || !Ct) && clearTimeout)
    return Ct = clearTimeout, clearTimeout(r);
  try {
    return Ct(r);
  } catch {
    try {
      return Ct.call(null, r);
    } catch {
      return Ct.call(this, r);
    }
  }
}
var jt = [], Rr = !1, ur, fn = -1;
function Ma() {
  !Rr || !ur || (Rr = !1, ur.length ? jt = ur.concat(jt) : fn = -1, jt.length && fs());
}
function fs() {
  if (!Rr) {
    var r = cs(Ma);
    Rr = !0;
    for (var e = jt.length; e; ) {
      for (ur = jt, jt = []; ++fn < e; )
        ur && ur[fn].run();
      fn = -1, e = jt.length;
    }
    ur = null, Rr = !1, Da(r);
  }
}
Ie.nextTick = function(r) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var n = 1; n < arguments.length; n++)
      e[n - 1] = arguments[n];
  jt.push(new hs(r, e)), jt.length === 1 && !Rr && cs(fs);
};
function hs(r, e) {
  this.fun = r, this.array = e;
}
hs.prototype.run = function() {
  this.fun.apply(null, this.array);
};
Ie.title = "browser";
Ie.browser = !0;
Ie.env = {};
Ie.argv = [];
Ie.version = "";
Ie.versions = {};
function Gt() {
}
Ie.on = Gt;
Ie.addListener = Gt;
Ie.once = Gt;
Ie.off = Gt;
Ie.removeListener = Gt;
Ie.removeAllListeners = Gt;
Ie.emit = Gt;
Ie.prependListener = Gt;
Ie.prependOnceListener = Gt;
Ie.listeners = function(r) {
  return [];
};
Ie.binding = function(r) {
  throw new Error("process.binding is not supported");
};
Ie.cwd = function() {
  return "/";
};
Ie.chdir = function(r) {
  throw new Error("process.chdir is not supported");
};
Ie.umask = function() {
  return 0;
};
var Fa = ls.exports;
const At = /* @__PURE__ */ ka(Fa), Ua = typeof At == "object" && At.env && At.env.NODE_DEBUG && /\bsemver\b/i.test(At.env.NODE_DEBUG) ? (...r) => console.error("SEMVER", ...r) : () => {
};
var ps = Ua;
const ds = 256, Ba = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, ja = 16, Wa = ds - 6;
var gs = {
  MAX_LENGTH: ds,
  MAX_SAFE_COMPONENT_LENGTH: ja,
  MAX_SAFE_BUILD_LENGTH: Wa,
  MAX_SAFE_INTEGER: Ba
}, ii = { exports: {} };
(function(r, e) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: n,
    MAX_SAFE_BUILD_LENGTH: i,
    MAX_LENGTH: o
  } = gs, a = ps;
  e = r.exports = {};
  const c = e.re = [], h = e.safeRe = [], f = e.src = [], p = e.safeSrc = [], s = e.t = {};
  let g = 0;
  const m = "[a-zA-Z0-9-]", v = [
    ["\\s", 1],
    ["\\d", o],
    [m, i]
  ], b = (T) => {
    for (const [x, O] of v)
      T = T.split(`${x}*`).join(`${x}{0,${O}}`).split(`${x}+`).join(`${x}{1,${O}}`);
    return T;
  }, w = (T, x, O) => {
    const C = b(x), L = g++;
    a(T, L, x), s[T] = L, f[L] = x, p[L] = C, c[L] = new RegExp(x, O ? "g" : void 0), h[L] = new RegExp(C, O ? "g" : void 0);
  };
  w("NUMERICIDENTIFIER", "0|[1-9]\\d*"), w("NUMERICIDENTIFIERLOOSE", "\\d+"), w("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${m}*`), w("MAINVERSION", `(${f[s.NUMERICIDENTIFIER]})\\.(${f[s.NUMERICIDENTIFIER]})\\.(${f[s.NUMERICIDENTIFIER]})`), w("MAINVERSIONLOOSE", `(${f[s.NUMERICIDENTIFIERLOOSE]})\\.(${f[s.NUMERICIDENTIFIERLOOSE]})\\.(${f[s.NUMERICIDENTIFIERLOOSE]})`), w("PRERELEASEIDENTIFIER", `(?:${f[s.NONNUMERICIDENTIFIER]}|${f[s.NUMERICIDENTIFIER]})`), w("PRERELEASEIDENTIFIERLOOSE", `(?:${f[s.NONNUMERICIDENTIFIER]}|${f[s.NUMERICIDENTIFIERLOOSE]})`), w("PRERELEASE", `(?:-(${f[s.PRERELEASEIDENTIFIER]}(?:\\.${f[s.PRERELEASEIDENTIFIER]})*))`), w("PRERELEASELOOSE", `(?:-?(${f[s.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${f[s.PRERELEASEIDENTIFIERLOOSE]})*))`), w("BUILDIDENTIFIER", `${m}+`), w("BUILD", `(?:\\+(${f[s.BUILDIDENTIFIER]}(?:\\.${f[s.BUILDIDENTIFIER]})*))`), w("FULLPLAIN", `v?${f[s.MAINVERSION]}${f[s.PRERELEASE]}?${f[s.BUILD]}?`), w("FULL", `^${f[s.FULLPLAIN]}$`), w("LOOSEPLAIN", `[v=\\s]*${f[s.MAINVERSIONLOOSE]}${f[s.PRERELEASELOOSE]}?${f[s.BUILD]}?`), w("LOOSE", `^${f[s.LOOSEPLAIN]}$`), w("GTLT", "((?:<|>)?=?)"), w("XRANGEIDENTIFIERLOOSE", `${f[s.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), w("XRANGEIDENTIFIER", `${f[s.NUMERICIDENTIFIER]}|x|X|\\*`), w("XRANGEPLAIN", `[v=\\s]*(${f[s.XRANGEIDENTIFIER]})(?:\\.(${f[s.XRANGEIDENTIFIER]})(?:\\.(${f[s.XRANGEIDENTIFIER]})(?:${f[s.PRERELEASE]})?${f[s.BUILD]}?)?)?`), w("XRANGEPLAINLOOSE", `[v=\\s]*(${f[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${f[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${f[s.XRANGEIDENTIFIERLOOSE]})(?:${f[s.PRERELEASELOOSE]})?${f[s.BUILD]}?)?)?`), w("XRANGE", `^${f[s.GTLT]}\\s*${f[s.XRANGEPLAIN]}$`), w("XRANGELOOSE", `^${f[s.GTLT]}\\s*${f[s.XRANGEPLAINLOOSE]}$`), w("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), w("COERCE", `${f[s.COERCEPLAIN]}(?:$|[^\\d])`), w("COERCEFULL", f[s.COERCEPLAIN] + `(?:${f[s.PRERELEASE]})?(?:${f[s.BUILD]})?(?:$|[^\\d])`), w("COERCERTL", f[s.COERCE], !0), w("COERCERTLFULL", f[s.COERCEFULL], !0), w("LONETILDE", "(?:~>?)"), w("TILDETRIM", `(\\s*)${f[s.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", w("TILDE", `^${f[s.LONETILDE]}${f[s.XRANGEPLAIN]}$`), w("TILDELOOSE", `^${f[s.LONETILDE]}${f[s.XRANGEPLAINLOOSE]}$`), w("LONECARET", "(?:\\^)"), w("CARETTRIM", `(\\s*)${f[s.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", w("CARET", `^${f[s.LONECARET]}${f[s.XRANGEPLAIN]}$`), w("CARETLOOSE", `^${f[s.LONECARET]}${f[s.XRANGEPLAINLOOSE]}$`), w("COMPARATORLOOSE", `^${f[s.GTLT]}\\s*(${f[s.LOOSEPLAIN]})$|^$`), w("COMPARATOR", `^${f[s.GTLT]}\\s*(${f[s.FULLPLAIN]})$|^$`), w("COMPARATORTRIM", `(\\s*)${f[s.GTLT]}\\s*(${f[s.LOOSEPLAIN]}|${f[s.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", w("HYPHENRANGE", `^\\s*(${f[s.XRANGEPLAIN]})\\s+-\\s+(${f[s.XRANGEPLAIN]})\\s*$`), w("HYPHENRANGELOOSE", `^\\s*(${f[s.XRANGEPLAINLOOSE]})\\s+-\\s+(${f[s.XRANGEPLAINLOOSE]})\\s*$`), w("STAR", "(<|>)?=?\\s*\\*"), w("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), w("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(ii, ii.exports);
var Ga = ii.exports;
const za = Object.freeze({ loose: !0 }), Va = Object.freeze({}), qa = (r) => r ? typeof r != "object" ? za : r : Va;
var Ha = qa;
const Xi = /^[0-9]+$/, Xa = (r, e) => {
  if (typeof r == "number" && typeof e == "number")
    return r === e ? 0 : r < e ? -1 : 1;
  const n = Xi.test(r), i = Xi.test(e);
  return n && i && (r = +r, e = +e), r === e ? 0 : n && !i ? -1 : i && !n ? 1 : r < e ? -1 : 1;
};
var Ya = {
  compareIdentifiers: Xa
};
const rn = ps, { MAX_LENGTH: Yi, MAX_SAFE_INTEGER: nn } = gs, { safeRe: on, t: sn } = Ga, Za = Ha, { compareIdentifiers: kn } = Ya;
let Ja = class Ot {
  constructor(e, n) {
    if (n = Za(n), e instanceof Ot) {
      if (e.loose === !!n.loose && e.includePrerelease === !!n.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
    if (e.length > Yi)
      throw new TypeError(
        `version is longer than ${Yi} characters`
      );
    rn("SemVer", e, n), this.options = n, this.loose = !!n.loose, this.includePrerelease = !!n.includePrerelease;
    const i = e.trim().match(n.loose ? on[sn.LOOSE] : on[sn.FULL]);
    if (!i)
      throw new TypeError(`Invalid Version: ${e}`);
    if (this.raw = e, this.major = +i[1], this.minor = +i[2], this.patch = +i[3], this.major > nn || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > nn || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > nn || this.patch < 0)
      throw new TypeError("Invalid patch version");
    i[4] ? this.prerelease = i[4].split(".").map((o) => {
      if (/^[0-9]+$/.test(o)) {
        const a = +o;
        if (a >= 0 && a < nn)
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
    if (rn("SemVer.compare", this.version, this.options, e), !(e instanceof Ot)) {
      if (typeof e == "string" && e === this.version)
        return 0;
      e = new Ot(e, this.options);
    }
    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
  }
  compareMain(e) {
    return e instanceof Ot || (e = new Ot(e, this.options)), this.major < e.major ? -1 : this.major > e.major ? 1 : this.minor < e.minor ? -1 : this.minor > e.minor ? 1 : this.patch < e.patch ? -1 : this.patch > e.patch ? 1 : 0;
  }
  comparePre(e) {
    if (e instanceof Ot || (e = new Ot(e, this.options)), this.prerelease.length && !e.prerelease.length)
      return -1;
    if (!this.prerelease.length && e.prerelease.length)
      return 1;
    if (!this.prerelease.length && !e.prerelease.length)
      return 0;
    let n = 0;
    do {
      const i = this.prerelease[n], o = e.prerelease[n];
      if (rn("prerelease compare", n, i, o), i === void 0 && o === void 0)
        return 0;
      if (o === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === o)
        continue;
      return kn(i, o);
    } while (++n);
  }
  compareBuild(e) {
    e instanceof Ot || (e = new Ot(e, this.options));
    let n = 0;
    do {
      const i = this.build[n], o = e.build[n];
      if (rn("build compare", n, i, o), i === void 0 && o === void 0)
        return 0;
      if (o === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === o)
        continue;
      return kn(i, o);
    } while (++n);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(e, n, i) {
    if (e.startsWith("pre")) {
      if (!n && i === !1)
        throw new Error("invalid increment argument: identifier is empty");
      if (n) {
        const o = `-${n}`.match(this.options.loose ? on[sn.PRERELEASELOOSE] : on[sn.PRERELEASE]);
        if (!o || o[1] !== n)
          throw new Error(`invalid identifier: ${n}`);
      }
    }
    switch (e) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", n, i);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", n, i);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", n, i), this.inc("pre", n, i);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", n, i), this.inc("pre", n, i);
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
            if (n === this.prerelease.join(".") && i === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(o);
          }
        }
        if (n) {
          let a = [n, o];
          i === !1 && (a = [n]), kn(this.prerelease[0], n) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = a) : this.prerelease = a;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${e}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var ms = Ja;
const Ka = ms, Qa = (r, e) => new Ka(r, e).major;
var eu = Qa;
const Zi = /* @__PURE__ */ vi(eu), Ji = ms, tu = (r, e, n = !1) => {
  if (r instanceof Ji)
    return r;
  try {
    return new Ji(r, e);
  } catch (i) {
    if (!n)
      return null;
    throw i;
  }
};
var ru = tu;
const nu = ru, iu = (r, e) => {
  const n = nu(r, e);
  return n ? n.version : null;
};
var ou = iu;
const su = /* @__PURE__ */ vi(ou);
/*!
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
class au {
  constructor(e) {
    te(this, "bus");
    typeof e.getVersion != "function" || !su(e.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Zi(e.getVersion()) !== Zi(this.getVersion()) && console.warn(
      "Proxying an event bus of version " + e.getVersion() + " with " + this.getVersion()
    ), this.bus = e;
  }
  getVersion() {
    return "3.3.3";
  }
  subscribe(e, n) {
    this.bus.subscribe(e, n);
  }
  unsubscribe(e, n) {
    this.bus.unsubscribe(e, n);
  }
  emit(e, ...n) {
    this.bus.emit(e, ...n);
  }
}
/*!
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
class uu {
  constructor() {
    te(this, "handlers", /* @__PURE__ */ new Map());
  }
  getVersion() {
    return "3.3.3";
  }
  subscribe(e, n) {
    this.handlers.set(
      e,
      (this.handlers.get(e) || []).concat(
        n
      )
    );
  }
  unsubscribe(e, n) {
    this.handlers.set(
      e,
      (this.handlers.get(e) || []).filter((i) => i !== n)
    );
  }
  emit(e, ...n) {
    (this.handlers.get(e) || []).forEach((o) => {
      try {
        o(n[0]);
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
let Dr = null;
function ys() {
  var r;
  return Dr !== null ? Dr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : ((r = window.OC) != null && r._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof (window == null ? void 0 : window._nc_event_bus) < "u" ? Dr = new au(window._nc_event_bus) : Dr = window._nc_event_bus = new uu(), Dr);
}
function lu(r, e) {
  ys().subscribe(r, e);
}
function cu(r, ...e) {
  ys().emit(r, ...e);
}
const Or = class Or {
  constructor(e, n, i) {
    te(this, "scope");
    te(this, "wrapped");
    this.scope = `${i ? Or.GLOBAL_SCOPE_PERSISTENT : Or.GLOBAL_SCOPE_VOLATILE}_${btoa(e)}_`, this.wrapped = n;
  }
  scopeKey(e) {
    return `${this.scope}${e}`;
  }
  setItem(e, n) {
    this.wrapped.setItem(this.scopeKey(e), n);
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
te(Or, "GLOBAL_SCOPE_VOLATILE", "nextcloud_vol"), te(Or, "GLOBAL_SCOPE_PERSISTENT", "nextcloud_per");
let oi = Or;
class fu {
  constructor(e) {
    te(this, "appId");
    te(this, "persisted", !1);
    te(this, "clearedOnLogout", !1);
    this.appId = e;
  }
  persist(e = !0) {
    return this.persisted = e, this;
  }
  clearOnLogout(e = !0) {
    return this.clearedOnLogout = e, this;
  }
  build() {
    return new oi(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function hu(r) {
  return new fu(r);
}
let Xr;
const ws = [];
function pu() {
  return Xr === void 0 && (Xr = document.head.dataset.requesttoken ?? null), Xr;
}
function du(r) {
  ws.push(r);
}
lu("csrf-token-update", (r) => {
  Xr = r.token, ws.forEach((e) => {
    try {
      e(Xr);
    } catch (n) {
      console.error("Error updating CSRF token observer", n);
    }
  });
});
/*!
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
hu("public").persist().build();
let _r;
function Ki(r, e) {
  return r ? r.getAttribute(e) : null;
}
function _i() {
  if (_r !== void 0)
    return _r;
  const r = document == null ? void 0 : document.getElementsByTagName("head")[0];
  if (!r)
    return null;
  const e = Ki(r, "data-user");
  return e === null ? (_r = null, _r) : (_r = {
    uid: e,
    displayName: Ki(r, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, _r);
}
var Ne = /* @__PURE__ */ ((r) => (r[r.Debug = 0] = "Debug", r[r.Info = 1] = "Info", r[r.Warn = 2] = "Warn", r[r.Error = 3] = "Error", r[r.Fatal = 4] = "Fatal", r))(Ne || {});
class gu {
  constructor(e) {
    te(this, "context");
    this.context = e || {};
  }
  formatMessage(e, n, i) {
    let o = "[" + Ne[n].toUpperCase() + "] ";
    return i && i.app && (o += i.app + ": "), typeof e == "string" ? o + e : (o += `Unexpected ${e.name}`, e.message && (o += ` "${e.message}"`), n === Ne.Debug && e.stack && (o += `

Stack trace:
${e.stack}`), o);
  }
  log(e, n, i) {
    var o, a;
    if (!(typeof ((o = this.context) == null ? void 0 : o.level) == "number" && e < ((a = this.context) == null ? void 0 : a.level)))
      switch (typeof n == "object" && (i == null ? void 0 : i.error) === void 0 && (i.error = n), e) {
        case Ne.Debug:
          console.debug(this.formatMessage(n, Ne.Debug, i), i);
          break;
        case Ne.Info:
          console.info(this.formatMessage(n, Ne.Info, i), i);
          break;
        case Ne.Warn:
          console.warn(this.formatMessage(n, Ne.Warn, i), i);
          break;
        case Ne.Error:
          console.error(this.formatMessage(n, Ne.Error, i), i);
          break;
        case Ne.Fatal:
        default:
          console.error(this.formatMessage(n, Ne.Fatal, i), i);
          break;
      }
  }
  debug(e, n) {
    this.log(Ne.Debug, e, Object.assign({}, this.context, n));
  }
  info(e, n) {
    this.log(Ne.Info, e, Object.assign({}, this.context, n));
  }
  warn(e, n) {
    this.log(Ne.Warn, e, Object.assign({}, this.context, n));
  }
  error(e, n) {
    this.log(Ne.Error, e, Object.assign({}, this.context, n));
  }
  fatal(e, n) {
    this.log(Ne.Fatal, e, Object.assign({}, this.context, n));
  }
}
function mu(r) {
  return new gu(r);
}
class yu {
  constructor(e) {
    te(this, "context");
    te(this, "factory");
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
    const e = _i();
    return e !== null && (this.context.uid = e.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const e = this, n = () => {
      var i;
      document.readyState === "complete" || document.readyState === "interactive" ? (e.context.level = ((i = window._oc_config) == null ? void 0 : i.loglevel) ?? Ne.Warn, window._oc_debug && (e.context.level = Ne.Debug), document.removeEventListener("readystatechange", n)) : document.addEventListener("readystatechange", n);
    };
    return n(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function wu() {
  return new yu(mu);
}
function Qi(r) {
  return r && r.split("/").map(encodeURIComponent).join("/");
}
function Es(r, e) {
  return r = r.replace(/\\/g, "/").replace(/\/+$/g, "").replace(/.*\//, ""), r;
}
function eo(r) {
  r = r.replaceAll(/\\/g, "/");
  const e = r.split("/");
  return e.length <= 1 ? "." : (e.pop(), e.length === 1 && e[0] === "" ? "/" : e.join("/"));
}
function Eu(r) {
  const e = Es(r), n = e.lastIndexOf(".");
  return n > 0 ? e.substring(n) : "";
}
function vu(...r) {
  if (arguments.length < 1)
    return "";
  const e = r.filter((f) => f.length > 0);
  if (e.length < 1)
    return "";
  const n = e[e.length - 1], i = e[0].charAt(0) === "/", o = n.charAt(n.length - 1) === "/", a = e.reduce((f, p) => f.concat(p.split("/")), []);
  let c = !i;
  const h = a.reduce((f, p) => p === "" ? f : c ? (c = !1, f + p) : f + "/" + p, "");
  return o ? h + "/" : h;
}
window._nc_files_scope ?? (window._nc_files_scope = {});
var ts;
(ts = window._nc_files_scope).v4_0 ?? (ts.v4_0 = {});
const _e = window._nc_files_scope.v4_0, vs = wu().setApp("@nextcloud/files").detectUser().build(), bs = Object.freeze({
  Folder: "folder",
  File: "file"
}), We = Object.freeze({
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
}), _s = Object.freeze({
  /** This is a new node and it doesn't exists on the filesystem yet */
  NEW: "new",
  /** This node has failed and is unavailable  */
  FAILED: "failed",
  /** This node is currently loading or have an operation in progress */
  LOADING: "loading",
  /** This node is locked and cannot be modified */
  LOCKED: "locked"
});
function Ts(r, e) {
  return r.match(e) !== null;
}
function qt(r, e) {
  if (r.id && typeof r.id != "number" && typeof r.id != "string")
    throw new Error("Invalid id type of value");
  if (!r.source)
    throw new Error("Missing mandatory source");
  try {
    new URL(r.source);
  } catch {
    throw new Error("Invalid source format, source must be a valid URL");
  }
  if (!r.source.startsWith("http"))
    throw new Error("Invalid source format, only http(s) is supported");
  if (!r.root)
    throw new Error("Missing mandatory root");
  if (typeof r.root != "string")
    throw new Error("Invalid root type");
  if (!r.root.startsWith("/"))
    throw new Error("Root must start with a leading slash");
  if (!r.source.includes(r.root))
    throw new Error("Root must be part of the source");
  if (Ts(r.source, e)) {
    const n = r.source.match(e)[0];
    if (!r.source.includes(vu(n, r.root)))
      throw new Error("The root must be relative to the service. e.g /files/emma");
  }
  if (r.displayname && typeof r.displayname != "string")
    throw new Error("Invalid displayname type");
  if (r.mtime && !(r.mtime instanceof Date))
    throw new Error("Invalid mtime type");
  if (r.crtime && !(r.crtime instanceof Date))
    throw new Error("Invalid crtime type");
  if (!r.mime || typeof r.mime != "string" || !r.mime.match(/^[-\w.]+\/[-+\w.]+$/gi))
    throw new Error("Missing or invalid mandatory mime");
  if ("size" in r && typeof r.size != "number" && r.size !== void 0)
    throw new Error("Invalid size type");
  if ("permissions" in r && r.permissions !== void 0 && !(typeof r.permissions == "number" && r.permissions >= We.NONE && r.permissions <= We.ALL))
    throw new Error("Invalid permissions");
  if (r.owner && r.owner !== null && typeof r.owner != "string")
    throw new Error("Invalid owner type");
  if (r.attributes && typeof r.attributes != "object")
    throw new Error("Invalid attributes type");
  if (r.status && !Object.values(_s).includes(r.status))
    throw new Error("Status must be a valid NodeStatus");
}
function bu(r) {
  r.mtime && typeof r.mtime == "string" && !isNaN(Date.parse(r.mtime)) && JSON.stringify(new Date(r.mtime)) === JSON.stringify(r.mtime) && (r.mtime = new Date(r.mtime)), r.crtime && typeof r.crtime == "string" && !isNaN(Date.parse(r.crtime)) && JSON.stringify(new Date(r.crtime)) === JSON.stringify(r.crtime) && (r.crtime = new Date(r.crtime));
}
function _u(r) {
  if (r instanceof RegExp)
    return r;
  const e = r.match(/(\/?)(.+)\1([a-z]*)/i);
  if (!e)
    throw new Error("Invalid regular expression format.");
  const n = Array.from(new Set(e[3])).filter((i) => "gimsuy".includes(i)).join("");
  return new RegExp(e[2], n);
}
class An {
  constructor(...[e, n]) {
    te(this, "_attributes");
    te(this, "_data");
    te(this, "_knownDavService", /(remote|public)\.php\/(web)?dav/i);
    te(this, "readonlyAttributes", Object.entries(Object.getOwnPropertyDescriptors(An.prototype)).filter((e) => typeof e[1].get == "function" && e[0] !== "__proto__").map((e) => e[0]));
    te(this, "handler", {
      set: (e, n, i) => this.readonlyAttributes.includes(n) ? !1 : Reflect.set(e, n, i),
      deleteProperty: (e, n) => this.readonlyAttributes.includes(n) ? !1 : Reflect.deleteProperty(e, n)
    });
    e.mime || (e.mime = "application/octet-stream"), bu(e), n = _u(n || this._knownDavService), qt(e, n), this._data = {
      ...e,
      attributes: {}
    }, this._attributes = new Proxy(this._data.attributes, this.handler), this.update(e.attributes ?? {}), n && (this._knownDavService = n);
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
    return e + Qi(this.source.slice(e.length));
  }
  /**
   * Get this object name
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get basename() {
    return Es(this.source);
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
    qt({ ...this._data, displayname: e }, this._knownDavService), this._data.displayname = e;
  }
  /**
   * Get this object's extension
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get extension() {
    return Eu(this.source);
  }
  /**
   * Get the directory path leading to this object
   * Will use the relative path to root if available
   *
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get dirname() {
    return eo(this.path);
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
    e ?? (e = "application/octet-stream"), qt({ ...this._data, mime: e }, this._knownDavService), this._data.mime = e;
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
    qt({ ...this._data, mtime: e }, this._knownDavService), this._data.mtime = e;
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
    qt({ ...this._data, size: e }, this._knownDavService), this.updateMtime(), this._data.size = e;
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
    return this.owner === null && !this.isDavResource ? We.READ : this._data.permissions !== void 0 ? this._data.permissions : We.NONE;
  }
  /**
   * Set the file permissions
   */
  set permissions(e) {
    qt({ ...this._data, permissions: e }, this._knownDavService), this.updateMtime(), this._data.permissions = e;
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
    return Ts(this.source, this._knownDavService);
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
    const e = this.source.indexOf("://"), n = this.source.slice(0, e), i = this.source.slice(e + 3), o = i.indexOf("/"), a = i.slice(0, o), c = i.slice(o), h = `${n}://${a}${Qi(c)}`, f = new URL(h);
    let p = decodeURIComponent(f.pathname);
    this.isDavResource && (p = p.split(this._knownDavService).pop());
    const s = p.indexOf(this.root), g = this.root.replace(/\/$/, "");
    return p.slice(s + g.length) || "/";
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
    qt({ ...this._data, status: e }, this._knownDavService), this._data.status = e;
  }
  /**
   * Move the node to a new destination
   *
   * @param destination the new source.
   * e.g. https://cloud.domain.com/remote.php/dav/files/emma/Photos/picture.jpg
   */
  move(e) {
    qt({ ...this._data, source: e }, this._knownDavService);
    const n = this.basename;
    this._data.source = e, this.displayname === n && this.basename !== n && (this.displayname = this.basename);
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
    this.move(eo(this.source) + "/" + e);
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
    for (const [n, i] of Object.entries(e))
      try {
        i === void 0 ? delete this.attributes[n] : this.attributes[n] = i;
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
}
class Tu extends An {
  constructor(...[e, n]) {
    super(e, n);
  }
  get type() {
    return bs.File;
  }
}
class Au extends An {
  constructor(...[e, n]) {
    super({
      ...e,
      mime: "httpd/unix-directory"
    }, n);
  }
  get type() {
    return bs.Folder;
  }
  get extension() {
    return null;
  }
  get mime() {
    return "httpd/unix-directory";
  }
}
var Iu = class extends EventTarget {
  dispatchTypedEvent(e, n) {
    return super.dispatchEvent(n);
  }
};
function As(r, e, n) {
  var a;
  const i = `#initial-state-${r}-${e}`;
  if ((a = window._nc_initial_state) != null && a.has(i))
    return window._nc_initial_state.get(i);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const o = document.querySelector(i);
  if (o === null)
    return n;
  try {
    const c = JSON.parse(atob(o.value));
    return window._nc_initial_state.set(i, c), c;
  } catch (c) {
    return console.error("[@nextcloud/initial-state] Could not parse initial state", { key: e, app: r, error: c }), n;
  }
}
const xu = (r) => "/remote.php/" + r, Nu = (r, e) => Ou() + xu(r), Ou = () => window.location.protocol + "//" + window.location.host + Su();
function Su() {
  let r = window._oc_webroot;
  if (typeof r > "u") {
    r = location.pathname;
    const e = r.indexOf("/index.php/");
    if (e !== -1)
      r = r.slice(0, e);
    else {
      const n = r.indexOf("/", 1);
      r = r.slice(0, n > 0 ? n : void 0);
    }
  }
  return r;
}
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: Is,
  setPrototypeOf: to,
  isFrozen: Ru,
  getPrototypeOf: Cu,
  getOwnPropertyDescriptor: Lu
} = Object;
let {
  freeze: Ze,
  seal: wt,
  create: si
} = Object, {
  apply: ai,
  construct: ui
} = typeof Reflect < "u" && Reflect;
Ze || (Ze = function(e) {
  return e;
});
wt || (wt = function(e) {
  return e;
});
ai || (ai = function(e, n) {
  for (var i = arguments.length, o = new Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++)
    o[a - 2] = arguments[a];
  return e.apply(n, o);
});
ui || (ui = function(e) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    i[o - 1] = arguments[o];
  return new e(...i);
});
const an = Je(Array.prototype.forEach), Pu = Je(Array.prototype.lastIndexOf), ro = Je(Array.prototype.pop), Mr = Je(Array.prototype.push), $u = Je(Array.prototype.splice), hn = Je(String.prototype.toLowerCase), Dn = Je(String.prototype.toString), Mn = Je(String.prototype.match), Fr = Je(String.prototype.replace), ku = Je(String.prototype.indexOf), Du = Je(String.prototype.trim), Tt = Je(Object.prototype.hasOwnProperty), Ve = Je(RegExp.prototype.test), Ur = Mu(TypeError);
function Je(r) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      i[o - 1] = arguments[o];
    return ai(r, e, i);
  };
}
function Mu(r) {
  return function() {
    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
      n[i] = arguments[i];
    return ui(r, n);
  };
}
function re(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : hn;
  to && to(r, null);
  let i = e.length;
  for (; i--; ) {
    let o = e[i];
    if (typeof o == "string") {
      const a = n(o);
      a !== o && (Ru(e) || (e[i] = a), o = a);
    }
    r[o] = !0;
  }
  return r;
}
function Fu(r) {
  for (let e = 0; e < r.length; e++)
    Tt(r, e) || (r[e] = null);
  return r;
}
function St(r) {
  const e = si(null);
  for (const [n, i] of Is(r))
    Tt(r, n) && (Array.isArray(i) ? e[n] = Fu(i) : i && typeof i == "object" && i.constructor === Object ? e[n] = St(i) : e[n] = i);
  return e;
}
function Br(r, e) {
  for (; r !== null; ) {
    const i = Lu(r, e);
    if (i) {
      if (i.get)
        return Je(i.get);
      if (typeof i.value == "function")
        return Je(i.value);
    }
    r = Cu(r);
  }
  function n() {
    return null;
  }
  return n;
}
const no = Ze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Fn = Ze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Un = Ze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Uu = Ze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Bn = Ze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Bu = Ze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), io = Ze(["#text"]), oo = Ze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), jn = Ze(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), so = Ze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), un = Ze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ju = wt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Wu = wt(/<%[\w\W]*|[\w\W]*%>/gm), Gu = wt(/\$\{[\w\W]*/gm), zu = wt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Vu = wt(/^aria-[\-\w]+$/), xs = wt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), qu = wt(/^(?:\w+script|data):/i), Hu = wt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ns = wt(/^html$/i), Xu = wt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ao = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Vu,
  ATTR_WHITESPACE: Hu,
  CUSTOM_ELEMENT: Xu,
  DATA_ATTR: zu,
  DOCTYPE_NAME: Ns,
  ERB_EXPR: Wu,
  IS_ALLOWED_URI: xs,
  IS_SCRIPT_OR_DATA: qu,
  MUSTACHE_EXPR: ju,
  TMPLIT_EXPR: Gu
});
const jr = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Yu = function() {
  return typeof window > "u" ? null : window;
}, Zu = function(e, n) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let i = null;
  const o = "data-tt-policy-suffix";
  n && n.hasAttribute(o) && (i = n.getAttribute(o));
  const a = "dompurify" + (i ? "#" + i : "");
  try {
    return e.createPolicy(a, {
      createHTML(c) {
        return c;
      },
      createScriptURL(c) {
        return c;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
}, uo = function() {
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
function Os() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Yu();
  const e = (q) => Os(q);
  if (e.version = "3.3.1", e.removed = [], !r || !r.document || r.document.nodeType !== jr.document || !r.Element)
    return e.isSupported = !1, e;
  let {
    document: n
  } = r;
  const i = n, o = i.currentScript, {
    DocumentFragment: a,
    HTMLTemplateElement: c,
    Node: h,
    Element: f,
    NodeFilter: p,
    NamedNodeMap: s = r.NamedNodeMap || r.MozNamedAttrMap,
    HTMLFormElement: g,
    DOMParser: m,
    trustedTypes: v
  } = r, b = f.prototype, w = Br(b, "cloneNode"), T = Br(b, "remove"), x = Br(b, "nextSibling"), O = Br(b, "childNodes"), C = Br(b, "parentNode");
  if (typeof c == "function") {
    const q = n.createElement("template");
    q.content && q.content.ownerDocument && (n = q.content.ownerDocument);
  }
  let L, $ = "";
  const {
    implementation: j,
    createNodeIterator: B,
    createDocumentFragment: Y,
    getElementsByTagName: H
  } = n, {
    importNode: ue
  } = i;
  let U = uo();
  e.isSupported = typeof Is == "function" && typeof C == "function" && j && j.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: J,
    ERB_EXPR: k,
    TMPLIT_EXPR: K,
    DATA_ATTR: le,
    ARIA_ATTR: de,
    IS_SCRIPT_OR_DATA: oe,
    ATTR_WHITESPACE: he,
    CUSTOM_ELEMENT: ke
  } = ao;
  let {
    IS_ALLOWED_URI: De
  } = ao, se = null;
  const Me = re({}, [...no, ...Fn, ...Un, ...Bn, ...io]);
  let ae = null;
  const ce = re({}, [...oo, ...jn, ...so, ...un]);
  let X = Object.seal(si(null, {
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
  })), it = null, It = null;
  const ot = Object.seal(si(null, {
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
  let tr = !0, Et = !0, ft = !1, kt = !0, st = !1, Dt = !0, ht = !1, pt = !1, vt = !1, bt = !1, zt = !1, Ke = !1, rr = !0, nr = !1;
  const yr = "user-content-";
  let V = !0, me = !1, y = {}, _ = null;
  const I = re({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let R = null;
  const d = re({}, ["audio", "video", "img", "source", "image", "track"]);
  let u = null;
  const l = re({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), E = "http://www.w3.org/1998/Math/MathML", A = "http://www.w3.org/2000/svg", S = "http://www.w3.org/1999/xhtml";
  let P = S, M = !1, G = null;
  const ee = re({}, [E, A, S], Dn);
  let Q = re({}, ["mi", "mo", "mn", "ms", "mtext"]), ne = re({}, ["annotation-xml"]);
  const $r = re({}, ["title", "style", "font", "a", "script"]);
  let kr = null;
  const la = ["application/xhtml+xml", "text/html"], ca = "text/html";
  let Se = null, wr = null;
  const fa = n.createElement("form"), Li = function(N) {
    return N instanceof RegExp || N instanceof Function;
  }, On = function() {
    let N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(wr && wr === N)) {
      if ((!N || typeof N != "object") && (N = {}), N = St(N), kr = // eslint-disable-next-line unicorn/prefer-includes
      la.indexOf(N.PARSER_MEDIA_TYPE) === -1 ? ca : N.PARSER_MEDIA_TYPE, Se = kr === "application/xhtml+xml" ? Dn : hn, se = Tt(N, "ALLOWED_TAGS") ? re({}, N.ALLOWED_TAGS, Se) : Me, ae = Tt(N, "ALLOWED_ATTR") ? re({}, N.ALLOWED_ATTR, Se) : ce, G = Tt(N, "ALLOWED_NAMESPACES") ? re({}, N.ALLOWED_NAMESPACES, Dn) : ee, u = Tt(N, "ADD_URI_SAFE_ATTR") ? re(St(l), N.ADD_URI_SAFE_ATTR, Se) : l, R = Tt(N, "ADD_DATA_URI_TAGS") ? re(St(d), N.ADD_DATA_URI_TAGS, Se) : d, _ = Tt(N, "FORBID_CONTENTS") ? re({}, N.FORBID_CONTENTS, Se) : I, it = Tt(N, "FORBID_TAGS") ? re({}, N.FORBID_TAGS, Se) : St({}), It = Tt(N, "FORBID_ATTR") ? re({}, N.FORBID_ATTR, Se) : St({}), y = Tt(N, "USE_PROFILES") ? N.USE_PROFILES : !1, tr = N.ALLOW_ARIA_ATTR !== !1, Et = N.ALLOW_DATA_ATTR !== !1, ft = N.ALLOW_UNKNOWN_PROTOCOLS || !1, kt = N.ALLOW_SELF_CLOSE_IN_ATTR !== !1, st = N.SAFE_FOR_TEMPLATES || !1, Dt = N.SAFE_FOR_XML !== !1, ht = N.WHOLE_DOCUMENT || !1, bt = N.RETURN_DOM || !1, zt = N.RETURN_DOM_FRAGMENT || !1, Ke = N.RETURN_TRUSTED_TYPE || !1, vt = N.FORCE_BODY || !1, rr = N.SANITIZE_DOM !== !1, nr = N.SANITIZE_NAMED_PROPS || !1, V = N.KEEP_CONTENT !== !1, me = N.IN_PLACE || !1, De = N.ALLOWED_URI_REGEXP || xs, P = N.NAMESPACE || S, Q = N.MATHML_TEXT_INTEGRATION_POINTS || Q, ne = N.HTML_INTEGRATION_POINTS || ne, X = N.CUSTOM_ELEMENT_HANDLING || {}, N.CUSTOM_ELEMENT_HANDLING && Li(N.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (X.tagNameCheck = N.CUSTOM_ELEMENT_HANDLING.tagNameCheck), N.CUSTOM_ELEMENT_HANDLING && Li(N.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (X.attributeNameCheck = N.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), N.CUSTOM_ELEMENT_HANDLING && typeof N.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (X.allowCustomizedBuiltInElements = N.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), st && (Et = !1), zt && (bt = !0), y && (se = re({}, io), ae = [], y.html === !0 && (re(se, no), re(ae, oo)), y.svg === !0 && (re(se, Fn), re(ae, jn), re(ae, un)), y.svgFilters === !0 && (re(se, Un), re(ae, jn), re(ae, un)), y.mathMl === !0 && (re(se, Bn), re(ae, so), re(ae, un))), N.ADD_TAGS && (typeof N.ADD_TAGS == "function" ? ot.tagCheck = N.ADD_TAGS : (se === Me && (se = St(se)), re(se, N.ADD_TAGS, Se))), N.ADD_ATTR && (typeof N.ADD_ATTR == "function" ? ot.attributeCheck = N.ADD_ATTR : (ae === ce && (ae = St(ae)), re(ae, N.ADD_ATTR, Se))), N.ADD_URI_SAFE_ATTR && re(u, N.ADD_URI_SAFE_ATTR, Se), N.FORBID_CONTENTS && (_ === I && (_ = St(_)), re(_, N.FORBID_CONTENTS, Se)), N.ADD_FORBID_CONTENTS && (_ === I && (_ = St(_)), re(_, N.ADD_FORBID_CONTENTS, Se)), V && (se["#text"] = !0), ht && re(se, ["html", "head", "body"]), se.table && (re(se, ["tbody"]), delete it.tbody), N.TRUSTED_TYPES_POLICY) {
        if (typeof N.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Ur('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof N.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Ur('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        L = N.TRUSTED_TYPES_POLICY, $ = L.createHTML("");
      } else
        L === void 0 && (L = Zu(v, o)), L !== null && typeof $ == "string" && ($ = L.createHTML(""));
      Ze && Ze(N), wr = N;
    }
  }, Pi = re({}, [...Fn, ...Un, ...Uu]), $i = re({}, [...Bn, ...Bu]), ha = function(N) {
    let D = C(N);
    (!D || !D.tagName) && (D = {
      namespaceURI: P,
      tagName: "template"
    });
    const W = hn(N.tagName), ye = hn(D.tagName);
    return G[N.namespaceURI] ? N.namespaceURI === A ? D.namespaceURI === S ? W === "svg" : D.namespaceURI === E ? W === "svg" && (ye === "annotation-xml" || Q[ye]) : !!Pi[W] : N.namespaceURI === E ? D.namespaceURI === S ? W === "math" : D.namespaceURI === A ? W === "math" && ne[ye] : !!$i[W] : N.namespaceURI === S ? D.namespaceURI === A && !ne[ye] || D.namespaceURI === E && !Q[ye] ? !1 : !$i[W] && ($r[W] || !Pi[W]) : !!(kr === "application/xhtml+xml" && G[N.namespaceURI]) : !1;
  }, xt = function(N) {
    Mr(e.removed, {
      element: N
    });
    try {
      C(N).removeChild(N);
    } catch {
      T(N);
    }
  }, ir = function(N, D) {
    try {
      Mr(e.removed, {
        attribute: D.getAttributeNode(N),
        from: D
      });
    } catch {
      Mr(e.removed, {
        attribute: null,
        from: D
      });
    }
    if (D.removeAttribute(N), N === "is")
      if (bt || zt)
        try {
          xt(D);
        } catch {
        }
      else
        try {
          D.setAttribute(N, "");
        } catch {
        }
  }, ki = function(N) {
    let D = null, W = null;
    if (vt)
      N = "<remove></remove>" + N;
    else {
      const xe = Mn(N, /^[\r\n\t ]+/);
      W = xe && xe[0];
    }
    kr === "application/xhtml+xml" && P === S && (N = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + N + "</body></html>");
    const ye = L ? L.createHTML(N) : N;
    if (P === S)
      try {
        D = new m().parseFromString(ye, kr);
      } catch {
      }
    if (!D || !D.documentElement) {
      D = j.createDocument(P, "template", null);
      try {
        D.documentElement.innerHTML = M ? $ : ye;
      } catch {
      }
    }
    const Be = D.body || D.documentElement;
    return N && W && Be.insertBefore(n.createTextNode(W), Be.childNodes[0] || null), P === S ? H.call(D, ht ? "html" : "body")[0] : ht ? D.documentElement : Be;
  }, Di = function(N) {
    return B.call(
      N.ownerDocument || N,
      N,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION,
      null
    );
  }, Sn = function(N) {
    return N instanceof g && (typeof N.nodeName != "string" || typeof N.textContent != "string" || typeof N.removeChild != "function" || !(N.attributes instanceof s) || typeof N.removeAttribute != "function" || typeof N.setAttribute != "function" || typeof N.namespaceURI != "string" || typeof N.insertBefore != "function" || typeof N.hasChildNodes != "function");
  }, Mi = function(N) {
    return typeof h == "function" && N instanceof h;
  };
  function Mt(q, N, D) {
    an(q, (W) => {
      W.call(e, N, D, wr);
    });
  }
  const Fi = function(N) {
    let D = null;
    if (Mt(U.beforeSanitizeElements, N, null), Sn(N))
      return xt(N), !0;
    const W = Se(N.nodeName);
    if (Mt(U.uponSanitizeElement, N, {
      tagName: W,
      allowedTags: se
    }), Dt && N.hasChildNodes() && !Mi(N.firstElementChild) && Ve(/<[/\w!]/g, N.innerHTML) && Ve(/<[/\w!]/g, N.textContent) || N.nodeType === jr.progressingInstruction || Dt && N.nodeType === jr.comment && Ve(/<[/\w]/g, N.data))
      return xt(N), !0;
    if (!(ot.tagCheck instanceof Function && ot.tagCheck(W)) && (!se[W] || it[W])) {
      if (!it[W] && Bi(W) && (X.tagNameCheck instanceof RegExp && Ve(X.tagNameCheck, W) || X.tagNameCheck instanceof Function && X.tagNameCheck(W)))
        return !1;
      if (V && !_[W]) {
        const ye = C(N) || N.parentNode, Be = O(N) || N.childNodes;
        if (Be && ye) {
          const xe = Be.length;
          for (let Qe = xe - 1; Qe >= 0; --Qe) {
            const Ft = w(Be[Qe], !0);
            Ft.__removalCount = (N.__removalCount || 0) + 1, ye.insertBefore(Ft, x(N));
          }
        }
      }
      return xt(N), !0;
    }
    return N instanceof f && !ha(N) || (W === "noscript" || W === "noembed" || W === "noframes") && Ve(/<\/no(script|embed|frames)/i, N.innerHTML) ? (xt(N), !0) : (st && N.nodeType === jr.text && (D = N.textContent, an([J, k, K], (ye) => {
      D = Fr(D, ye, " ");
    }), N.textContent !== D && (Mr(e.removed, {
      element: N.cloneNode()
    }), N.textContent = D)), Mt(U.afterSanitizeElements, N, null), !1);
  }, Ui = function(N, D, W) {
    if (rr && (D === "id" || D === "name") && (W in n || W in fa))
      return !1;
    if (!(Et && !It[D] && Ve(le, D))) {
      if (!(tr && Ve(de, D))) {
        if (!(ot.attributeCheck instanceof Function && ot.attributeCheck(D, N))) {
          if (!ae[D] || It[D]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Bi(N) && (X.tagNameCheck instanceof RegExp && Ve(X.tagNameCheck, N) || X.tagNameCheck instanceof Function && X.tagNameCheck(N)) && (X.attributeNameCheck instanceof RegExp && Ve(X.attributeNameCheck, D) || X.attributeNameCheck instanceof Function && X.attributeNameCheck(D, N)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              D === "is" && X.allowCustomizedBuiltInElements && (X.tagNameCheck instanceof RegExp && Ve(X.tagNameCheck, W) || X.tagNameCheck instanceof Function && X.tagNameCheck(W)))
            ) return !1;
          } else if (!u[D]) {
            if (!Ve(De, Fr(W, he, ""))) {
              if (!((D === "src" || D === "xlink:href" || D === "href") && N !== "script" && ku(W, "data:") === 0 && R[N])) {
                if (!(ft && !Ve(oe, Fr(W, he, "")))) {
                  if (W)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, Bi = function(N) {
    return N !== "annotation-xml" && Mn(N, ke);
  }, ji = function(N) {
    Mt(U.beforeSanitizeAttributes, N, null);
    const {
      attributes: D
    } = N;
    if (!D || Sn(N))
      return;
    const W = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ae,
      forceKeepAttr: void 0
    };
    let ye = D.length;
    for (; ye--; ) {
      const Be = D[ye], {
        name: xe,
        namespaceURI: Qe,
        value: Ft
      } = Be, Er = Se(xe), Rn = Ft;
      let Fe = xe === "value" ? Rn : Du(Rn);
      if (W.attrName = Er, W.attrValue = Fe, W.keepAttr = !0, W.forceKeepAttr = void 0, Mt(U.uponSanitizeAttribute, N, W), Fe = W.attrValue, nr && (Er === "id" || Er === "name") && (ir(xe, N), Fe = yr + Fe), Dt && Ve(/((--!?|])>)|<\/(style|title|textarea)/i, Fe)) {
        ir(xe, N);
        continue;
      }
      if (Er === "attributename" && Mn(Fe, "href")) {
        ir(xe, N);
        continue;
      }
      if (W.forceKeepAttr)
        continue;
      if (!W.keepAttr) {
        ir(xe, N);
        continue;
      }
      if (!kt && Ve(/\/>/i, Fe)) {
        ir(xe, N);
        continue;
      }
      st && an([J, k, K], (Gi) => {
        Fe = Fr(Fe, Gi, " ");
      });
      const Wi = Se(N.nodeName);
      if (!Ui(Wi, Er, Fe)) {
        ir(xe, N);
        continue;
      }
      if (L && typeof v == "object" && typeof v.getAttributeType == "function" && !Qe)
        switch (v.getAttributeType(Wi, Er)) {
          case "TrustedHTML": {
            Fe = L.createHTML(Fe);
            break;
          }
          case "TrustedScriptURL": {
            Fe = L.createScriptURL(Fe);
            break;
          }
        }
      if (Fe !== Rn)
        try {
          Qe ? N.setAttributeNS(Qe, xe, Fe) : N.setAttribute(xe, Fe), Sn(N) ? xt(N) : ro(e.removed);
        } catch {
          ir(xe, N);
        }
    }
    Mt(U.afterSanitizeAttributes, N, null);
  }, pa = function q(N) {
    let D = null;
    const W = Di(N);
    for (Mt(U.beforeSanitizeShadowDOM, N, null); D = W.nextNode(); )
      Mt(U.uponSanitizeShadowNode, D, null), Fi(D), ji(D), D.content instanceof a && q(D.content);
    Mt(U.afterSanitizeShadowDOM, N, null);
  };
  return e.sanitize = function(q) {
    let N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, D = null, W = null, ye = null, Be = null;
    if (M = !q, M && (q = "<!-->"), typeof q != "string" && !Mi(q))
      if (typeof q.toString == "function") {
        if (q = q.toString(), typeof q != "string")
          throw Ur("dirty is not a string, aborting");
      } else
        throw Ur("toString is not a function");
    if (!e.isSupported)
      return q;
    if (pt || On(N), e.removed = [], typeof q == "string" && (me = !1), me) {
      if (q.nodeName) {
        const Ft = Se(q.nodeName);
        if (!se[Ft] || it[Ft])
          throw Ur("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (q instanceof h)
      D = ki("<!---->"), W = D.ownerDocument.importNode(q, !0), W.nodeType === jr.element && W.nodeName === "BODY" || W.nodeName === "HTML" ? D = W : D.appendChild(W);
    else {
      if (!bt && !st && !ht && // eslint-disable-next-line unicorn/prefer-includes
      q.indexOf("<") === -1)
        return L && Ke ? L.createHTML(q) : q;
      if (D = ki(q), !D)
        return bt ? null : Ke ? $ : "";
    }
    D && vt && xt(D.firstChild);
    const xe = Di(me ? q : D);
    for (; ye = xe.nextNode(); )
      Fi(ye), ji(ye), ye.content instanceof a && pa(ye.content);
    if (me)
      return q;
    if (bt) {
      if (zt)
        for (Be = Y.call(D.ownerDocument); D.firstChild; )
          Be.appendChild(D.firstChild);
      else
        Be = D;
      return (ae.shadowroot || ae.shadowrootmode) && (Be = ue.call(i, Be, !0)), Be;
    }
    let Qe = ht ? D.outerHTML : D.innerHTML;
    return ht && se["!doctype"] && D.ownerDocument && D.ownerDocument.doctype && D.ownerDocument.doctype.name && Ve(Ns, D.ownerDocument.doctype.name) && (Qe = "<!DOCTYPE " + D.ownerDocument.doctype.name + `>
` + Qe), st && an([J, k, K], (Ft) => {
      Qe = Fr(Qe, Ft, " ");
    }), L && Ke ? L.createHTML(Qe) : Qe;
  }, e.setConfig = function() {
    let q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    On(q), pt = !0;
  }, e.clearConfig = function() {
    wr = null, pt = !1;
  }, e.isValidAttribute = function(q, N, D) {
    wr || On({});
    const W = Se(q), ye = Se(N);
    return Ui(W, ye, D);
  }, e.addHook = function(q, N) {
    typeof N == "function" && Mr(U[q], N);
  }, e.removeHook = function(q, N) {
    if (N !== void 0) {
      const D = Pu(U[q], N);
      return D === -1 ? void 0 : $u(U[q], D, 1)[0];
    }
    return ro(U[q]);
  }, e.removeHooks = function(q) {
    U[q] = [];
  }, e.removeAllHooks = function() {
    U = uo();
  }, e;
}
Os();
globalThis._nc_l10n_locale ?? (globalThis._nc_l10n_locale = typeof document < "u" && document.documentElement.dataset.locale || Intl.DateTimeFormat().resolvedOptions().locale.replaceAll(/-/g, "_"));
var rs;
globalThis._nc_l10n_language ?? (globalThis._nc_l10n_language = typeof document < "u" && document.documentElement.lang || (((rs = globalThis.navigator) == null ? void 0 : rs.language) ?? "en"));
globalThis._oc_l10n_registry_translations ?? (globalThis._oc_l10n_registry_translations = {});
globalThis._oc_l10n_registry_plural_functions ?? (globalThis._oc_l10n_registry_plural_functions = {});
class Ju extends Iu {
}
function Ku() {
  return _e.registry ?? (_e.registry = new Ju()), _e.registry;
}
const Ss = Object.freeze({
  DEFAULT: "default",
  HIDDEN: "hidden"
});
function lo(r) {
  if (Qu(r), _e.fileActions ?? (_e.fileActions = /* @__PURE__ */ new Map()), _e.fileActions.has(r.id)) {
    vs.error(`FileAction ${r.id} already registered`, { action: r });
    return;
  }
  _e.fileActions.set(r.id, r), Ku().dispatchTypedEvent("register:action", new CustomEvent("register:action", { detail: r }));
}
function Qu(r) {
  if (!r.id || typeof r.id != "string")
    throw new Error("Invalid id");
  if (!r.displayName || typeof r.displayName != "function")
    throw new Error("Invalid displayName function");
  if ("title" in r && typeof r.title != "function")
    throw new Error("Invalid title function");
  if (!r.iconSvgInline || typeof r.iconSvgInline != "function")
    throw new Error("Invalid iconSvgInline function");
  if (!r.exec || typeof r.exec != "function")
    throw new Error("Invalid exec function");
  if ("enabled" in r && typeof r.enabled != "function")
    throw new Error("Invalid enabled function");
  if ("execBatch" in r && typeof r.execBatch != "function")
    throw new Error("Invalid execBatch function");
  if ("order" in r && typeof r.order != "number")
    throw new Error("Invalid order");
  if (r.destructive !== void 0 && typeof r.destructive != "boolean")
    throw new Error("Invalid destructive flag");
  if ("parent" in r && typeof r.parent != "string")
    throw new Error("Invalid parent");
  if (r.default && !Object.values(Ss).includes(r.default))
    throw new Error("Invalid default");
  if ("inline" in r && typeof r.inline != "function")
    throw new Error("Invalid inline function");
  if ("renderInline" in r && typeof r.renderInline != "function")
    throw new Error("Invalid renderInline function");
  if ("hotkey" in r && r.hotkey !== void 0) {
    if (typeof r.hotkey != "object")
      throw new Error("Invalid hotkey configuration");
    if (typeof r.hotkey.key != "string" || !r.hotkey.key)
      throw new Error("Missing or invalid hotkey key");
    if (typeof r.hotkey.description != "string" || !r.hotkey.description)
      throw new Error("Missing or invalid hotkey description");
  }
}
const Rs = Object.freeze({
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
class el {
  constructor() {
    te(this, "_entries", []);
  }
  registerEntry(e) {
    this.validateEntry(e), e.category = e.category ?? Rs.CreateNew, this._entries.push(e);
  }
  unregisterEntry(e) {
    const n = typeof e == "string" ? this.getEntryIndex(e) : this.getEntryIndex(e.id);
    if (n === -1) {
      vs.warn("Entry not found, nothing removed", { entry: e, entries: this.getEntries() });
      return;
    }
    this._entries.splice(n, 1);
  }
  /**
   * Get the list of registered entries
   *
   * @param context - The creation context. Usually the current folder
   */
  getEntries(e) {
    return e ? this._entries.filter((n) => typeof n.enabled == "function" ? n.enabled(e) : !0) : this._entries;
  }
  getEntryIndex(e) {
    return this._entries.findIndex((n) => n.id === e);
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
}
function tl() {
  return _e.newFileMenu ?? (_e.newFileMenu = new el()), _e.newFileMenu;
}
function rl(r) {
  return tl().registerEntry(r);
}
/*!
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
function Ti() {
  return As("files_sharing", "isPublic", null) ?? document.querySelector('input#isPublic[type="hidden"][name="isPublic"][value="1"]') !== null;
}
function nl() {
  var r;
  return As("files_sharing", "sharingToken", null) ?? ((r = document.querySelector('input#sharingToken[type="hidden"]')) == null ? void 0 : r.value) ?? null;
}
/*! For license information please see index.js.LICENSE.txt */
var il = { 2: (r) => {
  function e(o, a, c) {
    o instanceof RegExp && (o = n(o, c)), a instanceof RegExp && (a = n(a, c));
    var h = i(o, a, c);
    return h && { start: h[0], end: h[1], pre: c.slice(0, h[0]), body: c.slice(h[0] + o.length, h[1]), post: c.slice(h[1] + a.length) };
  }
  function n(o, a) {
    var c = a.match(o);
    return c ? c[0] : null;
  }
  function i(o, a, c) {
    var h, f, p, s, g, m = c.indexOf(o), v = c.indexOf(a, m + 1), b = m;
    if (m >= 0 && v > 0) {
      for (h = [], p = c.length; b >= 0 && !g; ) b == m ? (h.push(b), m = c.indexOf(o, b + 1)) : h.length == 1 ? g = [h.pop(), v] : ((f = h.pop()) < p && (p = f, s = v), v = c.indexOf(a, b + 1)), b = m < v && m >= 0 ? m : v;
      h.length && (g = [p, s]);
    }
    return g;
  }
  r.exports = e, e.range = i;
}, 47: (r, e, n) => {
  var i = n(410), o = function(p) {
    return typeof p == "string";
  };
  function a(p, s) {
    for (var g = [], m = 0; m < p.length; m++) {
      var v = p[m];
      v && v !== "." && (v === ".." ? g.length && g[g.length - 1] !== ".." ? g.pop() : s && g.push("..") : g.push(v));
    }
    return g;
  }
  var c = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, h = {};
  function f(p) {
    return c.exec(p).slice(1);
  }
  h.resolve = function() {
    for (var p = "", s = !1, g = arguments.length - 1; g >= -1 && !s; g--) {
      var m = g >= 0 ? arguments[g] : At.cwd();
      if (!o(m)) throw new TypeError("Arguments to path.resolve must be strings");
      m && (p = m + "/" + p, s = m.charAt(0) === "/");
    }
    return (s ? "/" : "") + (p = a(p.split("/"), !s).join("/")) || ".";
  }, h.normalize = function(p) {
    var s = h.isAbsolute(p), g = p.substr(-1) === "/";
    return (p = a(p.split("/"), !s).join("/")) || s || (p = "."), p && g && (p += "/"), (s ? "/" : "") + p;
  }, h.isAbsolute = function(p) {
    return p.charAt(0) === "/";
  }, h.join = function() {
    for (var p = "", s = 0; s < arguments.length; s++) {
      var g = arguments[s];
      if (!o(g)) throw new TypeError("Arguments to path.join must be strings");
      g && (p += p ? "/" + g : g);
    }
    return h.normalize(p);
  }, h.relative = function(p, s) {
    function g(O) {
      for (var C = 0; C < O.length && O[C] === ""; C++) ;
      for (var L = O.length - 1; L >= 0 && O[L] === ""; L--) ;
      return C > L ? [] : O.slice(C, L + 1);
    }
    p = h.resolve(p).substr(1), s = h.resolve(s).substr(1);
    for (var m = g(p.split("/")), v = g(s.split("/")), b = Math.min(m.length, v.length), w = b, T = 0; T < b; T++) if (m[T] !== v[T]) {
      w = T;
      break;
    }
    var x = [];
    for (T = w; T < m.length; T++) x.push("..");
    return (x = x.concat(v.slice(w))).join("/");
  }, h._makeLong = function(p) {
    return p;
  }, h.dirname = function(p) {
    var s = f(p), g = s[0], m = s[1];
    return g || m ? (m && (m = m.substr(0, m.length - 1)), g + m) : ".";
  }, h.basename = function(p, s) {
    var g = f(p)[2];
    return s && g.substr(-1 * s.length) === s && (g = g.substr(0, g.length - s.length)), g;
  }, h.extname = function(p) {
    return f(p)[3];
  }, h.format = function(p) {
    if (!i.isObject(p)) throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof p);
    var s = p.root || "";
    if (!o(s)) throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof p.root);
    return (p.dir ? p.dir + h.sep : "") + (p.base || "");
  }, h.parse = function(p) {
    if (!o(p)) throw new TypeError("Parameter 'pathString' must be a string, not " + typeof p);
    var s = f(p);
    if (!s || s.length !== 4) throw new TypeError("Invalid path '" + p + "'");
    return s[1] = s[1] || "", s[2] = s[2] || "", s[3] = s[3] || "", { root: s[0], dir: s[0] + s[1].slice(0, s[1].length - 1), base: s[2], ext: s[3], name: s[2].slice(0, s[2].length - s[3].length) };
  }, h.sep = "/", h.delimiter = ":", r.exports = h;
}, 101: function(r, e, n) {
  var i;
  r = n.nmd(r), function() {
    var o = (r && r.exports, typeof tn == "object" && tn);
    o.global !== o && o.window;
    var a = function(s) {
      this.message = s;
    };
    (a.prototype = new Error()).name = "InvalidCharacterError";
    var c = function(s) {
      throw new a(s);
    }, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f = /[\t\n\f\r ]/g, p = { encode: function(s) {
      s = String(s), /[^\0-\xFF]/.test(s) && c("The string to be encoded contains characters outside of the Latin1 range.");
      for (var g, m, v, b, w = s.length % 3, T = "", x = -1, O = s.length - w; ++x < O; ) g = s.charCodeAt(x) << 16, m = s.charCodeAt(++x) << 8, v = s.charCodeAt(++x), T += h.charAt((b = g + m + v) >> 18 & 63) + h.charAt(b >> 12 & 63) + h.charAt(b >> 6 & 63) + h.charAt(63 & b);
      return w == 2 ? (g = s.charCodeAt(x) << 8, m = s.charCodeAt(++x), T += h.charAt((b = g + m) >> 10) + h.charAt(b >> 4 & 63) + h.charAt(b << 2 & 63) + "=") : w == 1 && (b = s.charCodeAt(x), T += h.charAt(b >> 2) + h.charAt(b << 4 & 63) + "=="), T;
    }, decode: function(s) {
      var g = (s = String(s).replace(f, "")).length;
      g % 4 == 0 && (g = (s = s.replace(/==?$/, "")).length), (g % 4 == 1 || /[^+a-zA-Z0-9/]/.test(s)) && c("Invalid character: the string to be decoded is not correctly encoded.");
      for (var m, v, b = 0, w = "", T = -1; ++T < g; ) v = h.indexOf(s.charAt(T)), m = b % 4 ? 64 * m + v : v, b++ % 4 && (w += String.fromCharCode(255 & m >> (-2 * b & 6)));
      return w;
    }, version: "1.0.0" };
    (i = (function() {
      return p;
    }).call(e, n, e, r)) === void 0 || (r.exports = i);
  }();
}, 135: (r) => {
  function e(n) {
    return !!n.constructor && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n);
  }
  r.exports = function(n) {
    return n != null && (e(n) || function(i) {
      return typeof i.readFloatLE == "function" && typeof i.slice == "function" && e(i.slice(0, 0));
    }(n) || !!n._isBuffer);
  };
}, 172: (r, e) => {
  e.d = function(n) {
    if (!n) return 0;
    for (var i = (n = n.toString()).length, o = n.length; o--; ) {
      var a = n.charCodeAt(o);
      56320 <= a && a <= 57343 && o--, 127 < a && a <= 2047 ? i++ : 2047 < a && a <= 65535 && (i += 2);
    }
    return i;
  };
}, 285: (r, e, n) => {
  var i = n(2);
  r.exports = function(x) {
    return x ? (x.substr(0, 2) === "{}" && (x = "\\{\\}" + x.substr(2)), T(function(O) {
      return O.split("\\\\").join(o).split("\\{").join(a).split("\\}").join(c).split("\\,").join(h).split("\\.").join(f);
    }(x), !0).map(s)) : [];
  };
  var o = "\0SLASH" + Math.random() + "\0", a = "\0OPEN" + Math.random() + "\0", c = "\0CLOSE" + Math.random() + "\0", h = "\0COMMA" + Math.random() + "\0", f = "\0PERIOD" + Math.random() + "\0";
  function p(x) {
    return parseInt(x, 10) == x ? parseInt(x, 10) : x.charCodeAt(0);
  }
  function s(x) {
    return x.split(o).join("\\").split(a).join("{").split(c).join("}").split(h).join(",").split(f).join(".");
  }
  function g(x) {
    if (!x) return [""];
    var O = [], C = i("{", "}", x);
    if (!C) return x.split(",");
    var L = C.pre, $ = C.body, j = C.post, B = L.split(",");
    B[B.length - 1] += "{" + $ + "}";
    var Y = g(j);
    return j.length && (B[B.length - 1] += Y.shift(), B.push.apply(B, Y)), O.push.apply(O, B), O;
  }
  function m(x) {
    return "{" + x + "}";
  }
  function v(x) {
    return /^-?0\d/.test(x);
  }
  function b(x, O) {
    return x <= O;
  }
  function w(x, O) {
    return x >= O;
  }
  function T(x, O) {
    var C = [], L = i("{", "}", x);
    if (!L) return [x];
    var $ = L.pre, j = L.post.length ? T(L.post, !1) : [""];
    if (/\$$/.test(L.pre)) for (var B = 0; B < j.length; B++) {
      var Y = $ + "{" + L.body + "}" + j[B];
      C.push(Y);
    }
    else {
      var H, ue, U = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(L.body), J = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(L.body), k = U || J, K = L.body.indexOf(",") >= 0;
      if (!k && !K) return L.post.match(/,(?!,).*\}/) ? T(x = L.pre + "{" + L.body + c + L.post) : [x];
      if (k) H = L.body.split(/\.\./);
      else if ((H = g(L.body)).length === 1 && (H = T(H[0], !1).map(m)).length === 1) return j.map(function(it) {
        return L.pre + H[0] + it;
      });
      if (k) {
        var le = p(H[0]), de = p(H[1]), oe = Math.max(H[0].length, H[1].length), he = H.length == 3 ? Math.abs(p(H[2])) : 1, ke = b;
        de < le && (he *= -1, ke = w);
        var De = H.some(v);
        ue = [];
        for (var se = le; ke(se, de); se += he) {
          var Me;
          if (J) (Me = String.fromCharCode(se)) === "\\" && (Me = "");
          else if (Me = String(se), De) {
            var ae = oe - Me.length;
            if (ae > 0) {
              var ce = new Array(ae + 1).join("0");
              Me = se < 0 ? "-" + ce + Me.slice(1) : ce + Me;
            }
          }
          ue.push(Me);
        }
      } else {
        ue = [];
        for (var X = 0; X < H.length; X++) ue.push.apply(ue, T(H[X], !1));
      }
      for (X = 0; X < ue.length; X++) for (B = 0; B < j.length; B++) Y = $ + ue[X] + j[B], (!O || k || Y) && C.push(Y);
    }
    return C;
  }
}, 298: (r) => {
  var e, n;
  e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = { rotl: function(i, o) {
    return i << o | i >>> 32 - o;
  }, rotr: function(i, o) {
    return i << 32 - o | i >>> o;
  }, endian: function(i) {
    if (i.constructor == Number) return 16711935 & n.rotl(i, 8) | 4278255360 & n.rotl(i, 24);
    for (var o = 0; o < i.length; o++) i[o] = n.endian(i[o]);
    return i;
  }, randomBytes: function(i) {
    for (var o = []; i > 0; i--) o.push(Math.floor(256 * Math.random()));
    return o;
  }, bytesToWords: function(i) {
    for (var o = [], a = 0, c = 0; a < i.length; a++, c += 8) o[c >>> 5] |= i[a] << 24 - c % 32;
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
    for (var o = [], a = 0; a < i.length; a += 3) for (var c = i[a] << 16 | i[a + 1] << 8 | i[a + 2], h = 0; h < 4; h++) 8 * a + 6 * h <= 8 * i.length ? o.push(e.charAt(c >>> 6 * (3 - h) & 63)) : o.push("=");
    return o.join("");
  }, base64ToBytes: function(i) {
    i = i.replace(/[^A-Z0-9+\/]/gi, "");
    for (var o = [], a = 0, c = 0; a < i.length; c = ++a % 4) c != 0 && o.push((e.indexOf(i.charAt(a - 1)) & Math.pow(2, -2 * c + 8) - 1) << 2 * c | e.indexOf(i.charAt(a)) >>> 6 - 2 * c);
    return o;
  } }, r.exports = n;
}, 345: () => {
}, 388: () => {
}, 410: () => {
}, 526: (r) => {
  var e = { utf8: { stringToBytes: function(n) {
    return e.bin.stringToBytes(unescape(encodeURIComponent(n)));
  }, bytesToString: function(n) {
    return decodeURIComponent(escape(e.bin.bytesToString(n)));
  } }, bin: { stringToBytes: function(n) {
    for (var i = [], o = 0; o < n.length; o++) i.push(255 & n.charCodeAt(o));
    return i;
  }, bytesToString: function(n) {
    for (var i = [], o = 0; o < n.length; o++) i.push(String.fromCharCode(n[o]));
    return i.join("");
  } } };
  r.exports = e;
}, 542: (r, e, n) => {
  (function() {
    var i = n(298), o = n(526).utf8, a = n(135), c = n(526).bin, h = function(f, p) {
      f.constructor == String ? f = p && p.encoding === "binary" ? c.stringToBytes(f) : o.stringToBytes(f) : a(f) ? f = Array.prototype.slice.call(f, 0) : Array.isArray(f) || f.constructor === Uint8Array || (f = f.toString());
      for (var s = i.bytesToWords(f), g = 8 * f.length, m = 1732584193, v = -271733879, b = -1732584194, w = 271733878, T = 0; T < s.length; T++) s[T] = 16711935 & (s[T] << 8 | s[T] >>> 24) | 4278255360 & (s[T] << 24 | s[T] >>> 8);
      s[g >>> 5] |= 128 << g % 32, s[14 + (g + 64 >>> 9 << 4)] = g;
      var x = h._ff, O = h._gg, C = h._hh, L = h._ii;
      for (T = 0; T < s.length; T += 16) {
        var $ = m, j = v, B = b, Y = w;
        m = x(m, v, b, w, s[T + 0], 7, -680876936), w = x(w, m, v, b, s[T + 1], 12, -389564586), b = x(b, w, m, v, s[T + 2], 17, 606105819), v = x(v, b, w, m, s[T + 3], 22, -1044525330), m = x(m, v, b, w, s[T + 4], 7, -176418897), w = x(w, m, v, b, s[T + 5], 12, 1200080426), b = x(b, w, m, v, s[T + 6], 17, -1473231341), v = x(v, b, w, m, s[T + 7], 22, -45705983), m = x(m, v, b, w, s[T + 8], 7, 1770035416), w = x(w, m, v, b, s[T + 9], 12, -1958414417), b = x(b, w, m, v, s[T + 10], 17, -42063), v = x(v, b, w, m, s[T + 11], 22, -1990404162), m = x(m, v, b, w, s[T + 12], 7, 1804603682), w = x(w, m, v, b, s[T + 13], 12, -40341101), b = x(b, w, m, v, s[T + 14], 17, -1502002290), m = O(m, v = x(v, b, w, m, s[T + 15], 22, 1236535329), b, w, s[T + 1], 5, -165796510), w = O(w, m, v, b, s[T + 6], 9, -1069501632), b = O(b, w, m, v, s[T + 11], 14, 643717713), v = O(v, b, w, m, s[T + 0], 20, -373897302), m = O(m, v, b, w, s[T + 5], 5, -701558691), w = O(w, m, v, b, s[T + 10], 9, 38016083), b = O(b, w, m, v, s[T + 15], 14, -660478335), v = O(v, b, w, m, s[T + 4], 20, -405537848), m = O(m, v, b, w, s[T + 9], 5, 568446438), w = O(w, m, v, b, s[T + 14], 9, -1019803690), b = O(b, w, m, v, s[T + 3], 14, -187363961), v = O(v, b, w, m, s[T + 8], 20, 1163531501), m = O(m, v, b, w, s[T + 13], 5, -1444681467), w = O(w, m, v, b, s[T + 2], 9, -51403784), b = O(b, w, m, v, s[T + 7], 14, 1735328473), m = C(m, v = O(v, b, w, m, s[T + 12], 20, -1926607734), b, w, s[T + 5], 4, -378558), w = C(w, m, v, b, s[T + 8], 11, -2022574463), b = C(b, w, m, v, s[T + 11], 16, 1839030562), v = C(v, b, w, m, s[T + 14], 23, -35309556), m = C(m, v, b, w, s[T + 1], 4, -1530992060), w = C(w, m, v, b, s[T + 4], 11, 1272893353), b = C(b, w, m, v, s[T + 7], 16, -155497632), v = C(v, b, w, m, s[T + 10], 23, -1094730640), m = C(m, v, b, w, s[T + 13], 4, 681279174), w = C(w, m, v, b, s[T + 0], 11, -358537222), b = C(b, w, m, v, s[T + 3], 16, -722521979), v = C(v, b, w, m, s[T + 6], 23, 76029189), m = C(m, v, b, w, s[T + 9], 4, -640364487), w = C(w, m, v, b, s[T + 12], 11, -421815835), b = C(b, w, m, v, s[T + 15], 16, 530742520), m = L(m, v = C(v, b, w, m, s[T + 2], 23, -995338651), b, w, s[T + 0], 6, -198630844), w = L(w, m, v, b, s[T + 7], 10, 1126891415), b = L(b, w, m, v, s[T + 14], 15, -1416354905), v = L(v, b, w, m, s[T + 5], 21, -57434055), m = L(m, v, b, w, s[T + 12], 6, 1700485571), w = L(w, m, v, b, s[T + 3], 10, -1894986606), b = L(b, w, m, v, s[T + 10], 15, -1051523), v = L(v, b, w, m, s[T + 1], 21, -2054922799), m = L(m, v, b, w, s[T + 8], 6, 1873313359), w = L(w, m, v, b, s[T + 15], 10, -30611744), b = L(b, w, m, v, s[T + 6], 15, -1560198380), v = L(v, b, w, m, s[T + 13], 21, 1309151649), m = L(m, v, b, w, s[T + 4], 6, -145523070), w = L(w, m, v, b, s[T + 11], 10, -1120210379), b = L(b, w, m, v, s[T + 2], 15, 718787259), v = L(v, b, w, m, s[T + 9], 21, -343485551), m = m + $ >>> 0, v = v + j >>> 0, b = b + B >>> 0, w = w + Y >>> 0;
      }
      return i.endian([m, v, b, w]);
    };
    h._ff = function(f, p, s, g, m, v, b) {
      var w = f + (p & s | ~p & g) + (m >>> 0) + b;
      return (w << v | w >>> 32 - v) + p;
    }, h._gg = function(f, p, s, g, m, v, b) {
      var w = f + (p & g | s & ~g) + (m >>> 0) + b;
      return (w << v | w >>> 32 - v) + p;
    }, h._hh = function(f, p, s, g, m, v, b) {
      var w = f + (p ^ s ^ g) + (m >>> 0) + b;
      return (w << v | w >>> 32 - v) + p;
    }, h._ii = function(f, p, s, g, m, v, b) {
      var w = f + (s ^ (p | ~g)) + (m >>> 0) + b;
      return (w << v | w >>> 32 - v) + p;
    }, h._blocksize = 16, h._digestsize = 16, r.exports = function(f, p) {
      if (f == null) throw new Error("Illegal argument " + f);
      var s = i.wordsToBytes(h(f, p));
      return p && p.asBytes ? s : p && p.asString ? c.bytesToString(s) : i.bytesToHex(s);
    };
  })();
}, 647: (r, e) => {
  var n = Object.prototype.hasOwnProperty;
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
  e.stringify = function(a, c) {
    c = c || "";
    var h, f, p = [];
    for (f in typeof c != "string" && (c = "?"), a) if (n.call(a, f)) {
      if ((h = a[f]) || h != null && !isNaN(h) || (h = ""), f = o(f), h = o(h), f === null || h === null) continue;
      p.push(f + "=" + h);
    }
    return p.length ? c + p.join("&") : "";
  }, e.parse = function(a) {
    for (var c, h = /([^=?#&]+)=?([^&]*)/g, f = {}; c = h.exec(a); ) {
      var p = i(c[1]), s = i(c[2]);
      p === null || s === null || p in f || (f[p] = s);
    }
    return f;
  };
}, 670: (r) => {
  r.exports = function(e, n) {
    if (n = n.split(":")[0], !(e = +e)) return !1;
    switch (n) {
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
}, 737: (r, e, n) => {
  var i = n(670), o = n(647), a = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, c = /[\n\r\t]/g, h = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, f = /:\d+$/, p = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, s = /^[a-zA-Z]:/;
  function g(O) {
    return (O || "").toString().replace(a, "");
  }
  var m = [["#", "hash"], ["?", "query"], function(O, C) {
    return w(C.protocol) ? O.replace(/\\/g, "/") : O;
  }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]], v = { hash: 1, query: 1 };
  function b(O) {
    var C, L = (typeof window < "u" ? window : typeof tn < "u" ? tn : typeof self < "u" ? self : {}).location || {}, $ = {}, j = typeof (O = O || L);
    if (O.protocol === "blob:") $ = new x(unescape(O.pathname), {});
    else if (j === "string") for (C in $ = new x(O, {}), v) delete $[C];
    else if (j === "object") {
      for (C in O) C in v || ($[C] = O[C]);
      $.slashes === void 0 && ($.slashes = h.test(O.href));
    }
    return $;
  }
  function w(O) {
    return O === "file:" || O === "ftp:" || O === "http:" || O === "https:" || O === "ws:" || O === "wss:";
  }
  function T(O, C) {
    O = (O = g(O)).replace(c, ""), C = C || {};
    var L, $ = p.exec(O), j = $[1] ? $[1].toLowerCase() : "", B = !!$[2], Y = !!$[3], H = 0;
    return B ? Y ? (L = $[2] + $[3] + $[4], H = $[2].length + $[3].length) : (L = $[2] + $[4], H = $[2].length) : Y ? (L = $[3] + $[4], H = $[3].length) : L = $[4], j === "file:" ? H >= 2 && (L = L.slice(2)) : w(j) ? L = $[4] : j ? B && (L = L.slice(2)) : H >= 2 && w(C.protocol) && (L = $[4]), { protocol: j, slashes: B || w(j), slashesCount: H, rest: L };
  }
  function x(O, C, L) {
    if (O = (O = g(O)).replace(c, ""), !(this instanceof x)) return new x(O, C, L);
    var $, j, B, Y, H, ue, U = m.slice(), J = typeof C, k = this, K = 0;
    for (J !== "object" && J !== "string" && (L = C, C = null), L && typeof L != "function" && (L = o.parse), $ = !(j = T(O || "", C = b(C))).protocol && !j.slashes, k.slashes = j.slashes || $ && C.slashes, k.protocol = j.protocol || C.protocol || "", O = j.rest, (j.protocol === "file:" && (j.slashesCount !== 2 || s.test(O)) || !j.slashes && (j.protocol || j.slashesCount < 2 || !w(k.protocol))) && (U[3] = [/(.*)/, "pathname"]); K < U.length; K++) typeof (Y = U[K]) != "function" ? (B = Y[0], ue = Y[1], B != B ? k[ue] = O : typeof B == "string" ? ~(H = B === "@" ? O.lastIndexOf(B) : O.indexOf(B)) && (typeof Y[2] == "number" ? (k[ue] = O.slice(0, H), O = O.slice(H + Y[2])) : (k[ue] = O.slice(H), O = O.slice(0, H))) : (H = B.exec(O)) && (k[ue] = H[1], O = O.slice(0, H.index)), k[ue] = k[ue] || $ && Y[3] && C[ue] || "", Y[4] && (k[ue] = k[ue].toLowerCase())) : O = Y(O, k);
    L && (k.query = L(k.query)), $ && C.slashes && k.pathname.charAt(0) !== "/" && (k.pathname !== "" || C.pathname !== "") && (k.pathname = function(le, de) {
      if (le === "") return de;
      for (var oe = (de || "/").split("/").slice(0, -1).concat(le.split("/")), he = oe.length, ke = oe[he - 1], De = !1, se = 0; he--; ) oe[he] === "." ? oe.splice(he, 1) : oe[he] === ".." ? (oe.splice(he, 1), se++) : se && (he === 0 && (De = !0), oe.splice(he, 1), se--);
      return De && oe.unshift(""), ke !== "." && ke !== ".." || oe.push(""), oe.join("/");
    }(k.pathname, C.pathname)), k.pathname.charAt(0) !== "/" && w(k.protocol) && (k.pathname = "/" + k.pathname), i(k.port, k.protocol) || (k.host = k.hostname, k.port = ""), k.username = k.password = "", k.auth && (~(H = k.auth.indexOf(":")) ? (k.username = k.auth.slice(0, H), k.username = encodeURIComponent(decodeURIComponent(k.username)), k.password = k.auth.slice(H + 1), k.password = encodeURIComponent(decodeURIComponent(k.password))) : k.username = encodeURIComponent(decodeURIComponent(k.auth)), k.auth = k.password ? k.username + ":" + k.password : k.username), k.origin = k.protocol !== "file:" && w(k.protocol) && k.host ? k.protocol + "//" + k.host : "null", k.href = k.toString();
  }
  x.prototype = { set: function(O, C, L) {
    var $ = this;
    switch (O) {
      case "query":
        typeof C == "string" && C.length && (C = (L || o.parse)(C)), $[O] = C;
        break;
      case "port":
        $[O] = C, i(C, $.protocol) ? C && ($.host = $.hostname + ":" + C) : ($.host = $.hostname, $[O] = "");
        break;
      case "hostname":
        $[O] = C, $.port && (C += ":" + $.port), $.host = C;
        break;
      case "host":
        $[O] = C, f.test(C) ? (C = C.split(":"), $.port = C.pop(), $.hostname = C.join(":")) : ($.hostname = C, $.port = "");
        break;
      case "protocol":
        $.protocol = C.toLowerCase(), $.slashes = !L;
        break;
      case "pathname":
      case "hash":
        if (C) {
          var j = O === "pathname" ? "/" : "#";
          $[O] = C.charAt(0) !== j ? j + C : C;
        } else $[O] = C;
        break;
      case "username":
      case "password":
        $[O] = encodeURIComponent(C);
        break;
      case "auth":
        var B = C.indexOf(":");
        ~B ? ($.username = C.slice(0, B), $.username = encodeURIComponent(decodeURIComponent($.username)), $.password = C.slice(B + 1), $.password = encodeURIComponent(decodeURIComponent($.password))) : $.username = encodeURIComponent(decodeURIComponent(C));
    }
    for (var Y = 0; Y < m.length; Y++) {
      var H = m[Y];
      H[4] && ($[H[1]] = $[H[1]].toLowerCase());
    }
    return $.auth = $.password ? $.username + ":" + $.password : $.username, $.origin = $.protocol !== "file:" && w($.protocol) && $.host ? $.protocol + "//" + $.host : "null", $.href = $.toString(), $;
  }, toString: function(O) {
    O && typeof O == "function" || (O = o.stringify);
    var C, L = this, $ = L.host, j = L.protocol;
    j && j.charAt(j.length - 1) !== ":" && (j += ":");
    var B = j + (L.protocol && L.slashes || w(L.protocol) ? "//" : "");
    return L.username ? (B += L.username, L.password && (B += ":" + L.password), B += "@") : L.password ? (B += ":" + L.password, B += "@") : L.protocol !== "file:" && w(L.protocol) && !$ && L.pathname !== "/" && (B += "@"), ($[$.length - 1] === ":" || f.test(L.hostname) && !L.port) && ($ += ":"), B += $ + L.pathname, (C = typeof L.query == "object" ? O(L.query) : L.query) && (B += C.charAt(0) !== "?" ? "?" + C : C), L.hash && (B += L.hash), B;
  } }, x.extractProtocol = T, x.location = b, x.trimLeft = g, x.qs = o, r.exports = x;
}, 800: () => {
}, 805: () => {
}, 829: (r) => {
  function e(p) {
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, e(p);
  }
  function n(p) {
    var s = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return n = function(g) {
      if (g === null || (m = g, Function.toString.call(m).indexOf("[native code]") === -1)) return g;
      var m;
      if (typeof g != "function") throw new TypeError("Super expression must either be null or a function");
      if (s !== void 0) {
        if (s.has(g)) return s.get(g);
        s.set(g, v);
      }
      function v() {
        return i(g, arguments, a(this).constructor);
      }
      return v.prototype = Object.create(g.prototype, { constructor: { value: v, enumerable: !1, writable: !0, configurable: !0 } }), o(v, g);
    }, n(p);
  }
  function i(p, s, g) {
    return i = function() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }() ? Reflect.construct : function(m, v, b) {
      var w = [null];
      w.push.apply(w, v);
      var T = new (Function.bind.apply(m, w))();
      return b && o(T, b.prototype), T;
    }, i.apply(null, arguments);
  }
  function o(p, s) {
    return o = Object.setPrototypeOf || function(g, m) {
      return g.__proto__ = m, g;
    }, o(p, s);
  }
  function a(p) {
    return a = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, a(p);
  }
  var c = function(p) {
    function s(g) {
      var m;
      return function(v, b) {
        if (!(v instanceof b)) throw new TypeError("Cannot call a class as a function");
      }(this, s), (m = function(v, b) {
        return !b || e(b) !== "object" && typeof b != "function" ? function(w) {
          if (w === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return w;
        }(v) : b;
      }(this, a(s).call(this, g))).name = "ObjectPrototypeMutationError", m;
    }
    return function(g, m) {
      if (typeof m != "function" && m !== null) throw new TypeError("Super expression must either be null or a function");
      g.prototype = Object.create(m && m.prototype, { constructor: { value: g, writable: !0, configurable: !0 } }), m && o(g, m);
    }(s, p), s;
  }(n(Error));
  function h(p, s) {
    for (var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
    }, m = s.split("."), v = m.length, b = function(x) {
      var O = m[x];
      if (!p) return { v: void 0 };
      if (O === "+") {
        if (Array.isArray(p)) return { v: p.map(function(L, $) {
          var j = m.slice(x + 1);
          return j.length > 0 ? h(L, j.join("."), g) : g(p, $, m, x);
        }) };
        var C = m.slice(0, x).join(".");
        throw new Error("Object at wildcard (".concat(C, ") is not an array"));
      }
      p = g(p, O, m, x);
    }, w = 0; w < v; w++) {
      var T = b(w);
      if (e(T) === "object") return T.v;
    }
    return p;
  }
  function f(p, s) {
    return p.length === s + 1;
  }
  r.exports = { set: function(p, s, g) {
    if (e(p) != "object" || p === null || s === void 0) return p;
    if (typeof s == "number") return p[s] = g, p[s];
    try {
      return h(p, s, function(m, v, b, w) {
        if (m === Reflect.getPrototypeOf({})) throw new c("Attempting to mutate Object.prototype");
        if (!m[v]) {
          var T = Number.isInteger(Number(b[w + 1])), x = b[w + 1] === "+";
          m[v] = T || x ? [] : {};
        }
        return f(b, w) && (m[v] = g), m[v];
      });
    } catch (m) {
      if (m instanceof c) throw m;
      return p;
    }
  }, get: function(p, s) {
    if (e(p) != "object" || p === null || s === void 0) return p;
    if (typeof s == "number") return p[s];
    try {
      return h(p, s, function(g, m) {
        return g[m];
      });
    } catch {
      return p;
    }
  }, has: function(p, s) {
    var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (e(p) != "object" || p === null || s === void 0) return !1;
    if (typeof s == "number") return s in p;
    try {
      var m = !1;
      return h(p, s, function(v, b, w, T) {
        if (!f(w, T)) return v && v[b];
        m = g.own ? v.hasOwnProperty(b) : b in v;
      }), m;
    } catch {
      return !1;
    }
  }, hasOwn: function(p, s, g) {
    return this.has(p, s, g || { own: !0 });
  }, isIn: function(p, s, g) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (e(p) != "object" || p === null || s === void 0) return !1;
    try {
      var v = !1, b = !1;
      return h(p, s, function(w, T, x, O) {
        return v = v || w === g || !!w && w[T] === g, b = f(x, O) && e(w) === "object" && T in w, w && w[T];
      }), m.validPath ? v && b : v;
    } catch {
      return !1;
    }
  }, ObjectPrototypeMutationError: c };
} }, co = {};
function ge(r) {
  var e = co[r];
  if (e !== void 0) return e.exports;
  var n = co[r] = { id: r, loaded: !1, exports: {} };
  return il[r].call(n.exports, n, n.exports, ge), n.loaded = !0, n.exports;
}
ge.n = (r) => {
  var e = r && r.__esModule ? () => r.default : () => r;
  return ge.d(e, { a: e }), e;
}, ge.d = (r, e) => {
  for (var n in e) ge.o(e, n) && !ge.o(r, n) && Object.defineProperty(r, n, { enumerable: !0, get: e[n] });
}, ge.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e), ge.nmd = (r) => (r.paths = [], r.children || (r.children = []), r);
var ol = ge(737), sl = ge.n(ol);
function Wn(r) {
  if (!li(r)) throw new Error("Parameter was not an error");
}
function li(r) {
  return !!r && typeof r == "object" && (e = r, Object.prototype.toString.call(e) === "[object Error]") || r instanceof Error;
  var e;
}
class Ye extends Error {
  constructor(e, n) {
    const i = [...arguments], { options: o, shortMessage: a } = function(h) {
      let f, p = "";
      if (h.length === 0) f = {};
      else if (li(h[0])) f = { cause: h[0] }, p = h.slice(1).join(" ") || "";
      else if (h[0] && typeof h[0] == "object") f = Object.assign({}, h[0]), p = h.slice(1).join(" ") || "";
      else {
        if (typeof h[0] != "string") throw new Error("Invalid arguments passed to Layerr");
        f = {}, p = p = h.join(" ") || "";
      }
      return { options: f, shortMessage: p };
    }(i);
    let c = a;
    if (o.cause && (c = `${c}: ${o.cause.message}`), super(c), this.message = c, o.name && typeof o.name == "string" ? this.name = o.name : this.name = "Layerr", o.cause && Object.defineProperty(this, "_cause", { value: o.cause }), Object.defineProperty(this, "_info", { value: {} }), o.info && typeof o.info == "object" && Object.assign(this._info, o.info), Error.captureStackTrace) {
      const h = o.constructorOpt || this.constructor;
      Error.captureStackTrace(this, h);
    }
  }
  static cause(e) {
    return Wn(e), e._cause && li(e._cause) ? e._cause : null;
  }
  static fullStack(e) {
    Wn(e);
    const n = Ye.cause(e);
    return n ? `${e.stack}
caused by: ${Ye.fullStack(n)}` : e.stack ?? "";
  }
  static info(e) {
    Wn(e);
    const n = {}, i = Ye.cause(e);
    return i && Object.assign(n, Ye.info(i)), e._info && Object.assign(n, e._info), n;
  }
  toString() {
    let e = this.name || this.constructor.name || this.constructor.prototype.name;
    return this.message && (e = `${e}: ${this.message}`), e;
  }
}
var al = ge(47), gn = ge.n(al);
const fo = "__PATH_SEPARATOR_POSIX__", ho = "__PATH_SEPARATOR_WINDOWS__";
function ve(r) {
  try {
    const e = r.replace(/\//g, fo).replace(/\\\\/g, ho);
    return encodeURIComponent(e).split(ho).join("\\\\").split(fo).join("/");
  } catch (e) {
    throw new Ye(e, "Failed encoding path");
  }
}
function po(r) {
  return r.startsWith("/") ? r : "/" + r;
}
function Jr(r) {
  let e = r;
  return e[0] !== "/" && (e = "/" + e), /^.+\/$/.test(e) && (e = e.substr(0, e.length - 1)), e;
}
function ul(r) {
  let e = new (sl())(r).pathname;
  return e.length <= 0 && (e = "/"), Jr(e);
}
function be() {
  for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++) e[n] = arguments[n];
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
      for (var c = 0; c < i.length; c++) {
        var h = i[c];
        if (typeof h != "string") throw new TypeError("Url must be a string. Received " + h);
        h !== "" && (c > 0 && (h = h.replace(/^[\/]+/, "")), h = c < i.length - 1 ? h.replace(/[\/]+$/, "") : h.replace(/[\/]+$/, "/"), o.push(h));
      }
      var f = o.join("/"), p = (f = f.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
      return p.shift() + (p.length > 0 ? "?" : "") + p.join("&");
    }(typeof arguments[0] == "object" ? arguments[0] : [].slice.call(arguments));
  }(e.reduce((i, o, a) => ((a === 0 || o !== "/" || o === "/" && i[i.length - 1] !== "/") && i.push(o), i), []));
}
var ll = ge(542), Wr = ge.n(ll);
function go(r, e) {
  const n = r.url.replace("//", ""), i = n.indexOf("/") == -1 ? "/" : n.slice(n.indexOf("/")), o = r.method ? r.method.toUpperCase() : "GET", a = !!/(^|,)\s*auth\s*($|,)/.test(e.qop) && "auth", c = `00000000${e.nc}`.slice(-8), h = function(m, v, b, w, T, x, O) {
    const C = O || Wr()(`${v}:${b}:${w}`);
    return m && m.toLowerCase() === "md5-sess" ? Wr()(`${C}:${T}:${x}`) : C;
  }(e.algorithm, e.username, e.realm, e.password, e.nonce, e.cnonce, e.ha1), f = Wr()(`${o}:${i}`), p = a ? Wr()(`${h}:${e.nonce}:${c}:${e.cnonce}:${a}:${f}`) : Wr()(`${h}:${e.nonce}:${f}`), s = { username: e.username, realm: e.realm, nonce: e.nonce, uri: i, qop: a, response: p, nc: c, cnonce: e.cnonce, algorithm: e.algorithm, opaque: e.opaque }, g = [];
  for (const m in s) s[m] && (m === "qop" || m === "nc" || m === "algorithm" ? g.push(`${m}=${s[m]}`) : g.push(`${m}="${s[m]}"`));
  return `Digest ${g.join(", ")}`;
}
function Cs(r) {
  return (r.headers && r.headers.get("www-authenticate") || "").split(/\s/)[0].toLowerCase() === "digest";
}
var cl = ge(101), Ls = ge.n(cl);
function mo(r) {
  return Ls().decode(r);
}
function yo(r, e) {
  var n;
  return `Basic ${n = `${r}:${e}`, Ls().encode(n)}`;
}
const wo = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : typeof window < "u" ? window : globalThis, fl = wo.fetch.bind(wo);
let nt = function(r) {
  return r.Auto = "auto", r.Digest = "digest", r.None = "none", r.Password = "password", r.Token = "token", r;
}({}), er = function(r) {
  return r.DataTypeNoLength = "data-type-no-length", r.InvalidAuthType = "invalid-auth-type", r.InvalidOutputFormat = "invalid-output-format", r.LinkUnsupportedAuthType = "link-unsupported-auth", r.InvalidUpdateRange = "invalid-update-range", r.NotSupported = "not-supported", r;
}({});
function Ps(r, e, n, i, o) {
  switch (r.authType) {
    case nt.Auto:
      e && n && (r.headers.Authorization = yo(e, n));
      break;
    case nt.Digest:
      r.digest = /* @__PURE__ */ function(c, h, f) {
        return { username: c, password: h, ha1: f, nc: 0, algorithm: "md5", hasDigestAuth: !1 };
      }(e, n, o);
      break;
    case nt.None:
      break;
    case nt.Password:
      r.headers.Authorization = yo(e, n);
      break;
    case nt.Token:
      r.headers.Authorization = `${(a = i).token_type} ${a.access_token}`;
      break;
    default:
      throw new Ye({ info: { code: er.InvalidAuthType } }, `Invalid auth type: ${r.authType}`);
  }
  var a;
}
ge(345), ge(800);
const Eo = "@@HOTPATCHER", hl = () => {
};
function Gn(r) {
  return { original: r, methods: [r], final: !1 };
}
class pl {
  constructor() {
    this._configuration = { registry: {}, getEmptyAction: "null" }, this.__type__ = Eo;
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
    let n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    if (!e || e.__type__ !== Eo) throw new Error("Failed taking control of target HotPatcher instance: Invalid type or object");
    return Object.keys(e.configuration.registry).forEach((i) => {
      this.configuration.registry.hasOwnProperty(i) ? n && (this.configuration.registry[i] = Object.assign({}, e.configuration.registry[i])) : this.configuration.registry[i] = Object.assign({}, e.configuration.registry[i]);
    }), e._configuration = this.configuration, this;
  }
  execute(e) {
    const n = this.get(e) || hl;
    for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) o[a - 1] = arguments[a];
    return n(...o);
  }
  get(e) {
    const n = this.configuration.registry[e];
    if (!n) switch (this.getEmptyAction) {
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
        for (var c = arguments.length, h = new Array(c), f = 0; f < c; f++) h[f] = arguments[f];
        let p = h;
        const s = this;
        for (; o.length > 0; ) p = [o.shift().apply(s, p)];
        return p[0];
      };
    }(...n.methods);
  }
  isPatched(e) {
    return !!this.configuration.registry[e];
  }
  patch(e, n) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { chain: o = !1 } = i;
    if (this.configuration.registry[e] && this.configuration.registry[e].final) throw new Error(`Failed patching '${e}': Method marked as being final`);
    if (typeof n != "function") throw new Error(`Failed patching '${e}': Provided method is not a function`);
    if (o) this.configuration.registry[e] ? this.configuration.registry[e].methods.push(n) : this.configuration.registry[e] = Gn(n);
    else if (this.isPatched(e)) {
      const { original: a } = this.configuration.registry[e];
      this.configuration.registry[e] = Object.assign(Gn(n), { original: a });
    } else this.configuration.registry[e] = Gn(n);
    return this;
  }
  patchInline(e, n) {
    this.isPatched(e) || this.patch(e, n);
    for (var i = arguments.length, o = new Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) o[a - 2] = arguments[a];
    return this.execute(e, ...o);
  }
  plugin(e) {
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
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
let zn = null;
function $s() {
  return zn || (zn = new pl()), zn;
}
function mn(r) {
  return function(e) {
    if (typeof e != "object" || e === null || Object.prototype.toString.call(e) != "[object Object]") return !1;
    if (Object.getPrototypeOf(e) === null) return !0;
    let n = e;
    for (; Object.getPrototypeOf(n) !== null; ) n = Object.getPrototypeOf(n);
    return Object.getPrototypeOf(e) === n;
  }(r) ? Object.assign({}, r) : Object.setPrototypeOf(Object.assign({}, r), Object.getPrototypeOf(r));
}
function vo() {
  for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++) e[n] = arguments[n];
  let i = null, o = [...e];
  for (; o.length > 0; ) {
    const a = o.shift();
    i = i ? ks(i, a) : mn(a);
  }
  return i;
}
function ks(r, e) {
  const n = mn(r);
  return Object.keys(e).forEach((i) => {
    n.hasOwnProperty(i) ? Array.isArray(e[i]) ? n[i] = Array.isArray(n[i]) ? [...n[i], ...e[i]] : [...e[i]] : typeof e[i] == "object" && e[i] ? n[i] = typeof n[i] == "object" && n[i] ? ks(n[i], e[i]) : mn(e[i]) : n[i] = e[i] : n[i] = e[i];
  }), n;
}
function dl(r) {
  const e = {};
  for (const n of r.keys()) e[n] = r.get(n);
  return e;
}
function ci() {
  for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++) e[n] = arguments[n];
  if (e.length === 0) return {};
  const i = {};
  return e.reduce((o, a) => (Object.keys(a).forEach((c) => {
    const h = c.toLowerCase();
    i.hasOwnProperty(h) ? o[i[h]] = a[c] : (i[h] = c, o[c] = a[c]);
  }), o), {});
}
ge(805);
const gl = typeof ArrayBuffer == "function", { toString: ml } = Object.prototype;
function Ds(r) {
  return gl && (r instanceof ArrayBuffer || ml.call(r) === "[object ArrayBuffer]");
}
function Ms(r) {
  return r != null && r.constructor != null && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r);
}
function Ai(r) {
  return function() {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try {
      return Promise.resolve(r.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
function fi(r, e, n) {
  return n ? e ? e(r) : r : (r && r.then || (r = Promise.resolve(r)), e ? r.then(e) : r);
}
const Fs = Ai(function(r) {
  const e = r._digest;
  return delete r._digest, e.hasDigestAuth && (r = vo(r, { headers: { Authorization: go(r, e) } })), fi(yn(r), function(n) {
    let i = !1;
    return o = function(c) {
      return i ? c : n;
    }, (a = function() {
      if (n.status == 401) return e.hasDigestAuth = function(c, h) {
        if (!Cs(c)) return !1;
        const f = /([a-z0-9_-]+)=(?:"([^"]+)"|([a-z0-9_-]+))/gi;
        for (; ; ) {
          const p = c.headers && c.headers.get("www-authenticate") || "", s = f.exec(p);
          if (!s) break;
          h[s[1]] = s[2] || s[3];
        }
        return h.nc += 1, h.cnonce = function() {
          let p = "";
          for (let s = 0; s < 32; ++s) p = `${p}${"abcdef0123456789"[Math.floor(16 * Math.random())]}`;
          return p;
        }(), !0;
      }(n, e), function() {
        if (e.hasDigestAuth) return fi(yn(r = vo(r, { headers: { Authorization: go(r, e) } })), function(c) {
          return c.status == 401 ? e.hasDigestAuth = !1 : e.nc++, i = !0, c;
        });
      }();
      e.nc++;
    }()) && a.then ? a.then(o) : o(a);
    var o, a;
  });
}), yl = Ai(function(r, e) {
  return fi(yn(r), function(n) {
    return n.ok ? (e.authType = nt.Password, n) : n.status == 401 && Cs(n) ? (e.authType = nt.Digest, Ps(e, e.username, e.password, void 0, void 0), r._digest = e.digest, Fs(r)) : n;
  });
}), Ce = Ai(function(r, e) {
  return e.authType === nt.Auto ? yl(r, e) : r._digest ? Fs(r) : yn(r);
});
function Le(r, e, n) {
  const i = mn(r);
  return i.headers = ci(e.headers, i.headers || {}, n.headers || {}), n.data !== void 0 && (i.data = n.data), n.signal && (i.signal = n.signal), e.httpAgent && (i.httpAgent = e.httpAgent), e.httpsAgent && (i.httpsAgent = e.httpsAgent), e.digest && (i._digest = e.digest), typeof e.withCredentials == "boolean" && (i.withCredentials = e.withCredentials), i;
}
function yn(r) {
  const e = $s();
  return e.patchInline("request", (n) => e.patchInline("fetch", fl, n.url, function(i) {
    let o = {};
    const a = { method: i.method };
    if (i.headers && (o = ci(o, i.headers)), i.data !== void 0) {
      const [c, h] = function(f) {
        if (typeof f == "string") return [f, {}];
        if (Ms(f)) return [f, {}];
        if (Ds(f)) return [f, {}];
        if (f && typeof f == "object") return [JSON.stringify(f), { "content-type": "application/json" }];
        throw new Error("Unable to convert request body: Unexpected body type: " + typeof f);
      }(i.data);
      a.body = c, o = ci(o, h);
    }
    return i.signal && (a.signal = i.signal), i.withCredentials && (a.credentials = "include"), a.headers = o, a;
  }(n)), r);
}
var wl = ge(285);
const wn = (r) => {
  if (typeof r != "string") throw new TypeError("invalid pattern");
  if (r.length > 65536) throw new TypeError("pattern is too long");
}, El = { "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", !0], "[:alpha:]": ["\\p{L}\\p{Nl}", !0], "[:ascii:]": ["\\x00-\\x7f", !1], "[:blank:]": ["\\p{Zs}\\t", !0], "[:cntrl:]": ["\\p{Cc}", !0], "[:digit:]": ["\\p{Nd}", !0], "[:graph:]": ["\\p{Z}\\p{C}", !0, !0], "[:lower:]": ["\\p{Ll}", !0], "[:print:]": ["\\p{C}", !0], "[:punct:]": ["\\p{P}", !0], "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", !0], "[:upper:]": ["\\p{Lu}", !0], "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", !0], "[:xdigit:]": ["A-Fa-f0-9", !1] }, Gr = (r) => r.replace(/[[\]\\-]/g, "\\$&"), bo = (r) => r.join(""), vl = (r, e) => {
  const n = e;
  if (r.charAt(n) !== "[") throw new Error("not in a brace expression");
  const i = [], o = [];
  let a = n + 1, c = !1, h = !1, f = !1, p = !1, s = n, g = "";
  e: for (; a < r.length; ) {
    const w = r.charAt(a);
    if (w !== "!" && w !== "^" || a !== n + 1) {
      if (w === "]" && c && !f) {
        s = a + 1;
        break;
      }
      if (c = !0, w !== "\\" || f) {
        if (w === "[" && !f) {
          for (const [T, [x, O, C]] of Object.entries(El)) if (r.startsWith(T, a)) {
            if (g) return ["$.", !1, r.length - n, !0];
            a += T.length, C ? o.push(x) : i.push(x), h = h || O;
            continue e;
          }
        }
        f = !1, g ? (w > g ? i.push(Gr(g) + "-" + Gr(w)) : w === g && i.push(Gr(w)), g = "", a++) : r.startsWith("-]", a + 1) ? (i.push(Gr(w + "-")), a += 2) : r.startsWith("-", a + 1) ? (g = w, a += 2) : (i.push(Gr(w)), a++);
      } else f = !0, a++;
    } else p = !0, a++;
  }
  if (s < a) return ["", !1, 0, !1];
  if (!i.length && !o.length) return ["$.", !1, r.length - n, !0];
  if (o.length === 0 && i.length === 1 && /^\\?.$/.test(i[0]) && !p)
    return [(m = i[0].length === 2 ? i[0].slice(-1) : i[0], m.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")), !1, s - n, !1];
  var m;
  const v = "[" + (p ? "^" : "") + bo(i) + "]", b = "[" + (p ? "" : "^") + bo(o) + "]";
  return [i.length && o.length ? "(" + v + "|" + b + ")" : i.length ? v : b, h, s - n, !0];
}, qr = function(r) {
  let { windowsPathsNoEscape: e = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return e ? r.replace(/\[([^\/\\])\]/g, "$1") : r.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
}, bl = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), _o = (r) => bl.has(r), Vn = "(?!\\.)", _l = /* @__PURE__ */ new Set(["[", "."]), Tl = /* @__PURE__ */ new Set(["..", "."]), Al = new Set("().*{}+?[]^$\\!"), Ii = "[^/]", To = Ii + "*?", Ao = Ii + "+?";
var Re, $e, Bt, we, Oe, Yt, hr, Zt, Lt, pr, Kr, dr, Us, Kt, pn, hi, Bs;
const He = class He {
  constructor(e, n) {
    et(this, dr);
    te(this, "type");
    et(this, Re);
    et(this, $e);
    et(this, Bt, !1);
    et(this, we, []);
    et(this, Oe);
    et(this, Yt);
    et(this, hr);
    et(this, Zt, !1);
    et(this, Lt);
    et(this, pr);
    et(this, Kr, !1);
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.type = e, e && Te(this, $e, !0), Te(this, Oe, n), Te(this, Re, F(this, Oe) ? F(F(this, Oe), Re) : this), Te(this, Lt, F(this, Re) === this ? i : F(F(this, Re), Lt)), Te(this, hr, F(this, Re) === this ? [] : F(F(this, Re), hr)), e !== "!" || F(F(this, Re), Zt) || F(this, hr).push(this), Te(this, Yt, F(this, Oe) ? F(F(this, Oe), we).length : 0);
  }
  get hasMagic() {
    if (F(this, $e) !== void 0) return F(this, $e);
    for (const e of F(this, we)) if (typeof e != "string" && (e.type || e.hasMagic)) return Te(this, $e, !0);
    return F(this, $e);
  }
  toString() {
    return F(this, pr) !== void 0 ? F(this, pr) : this.type ? Te(this, pr, this.type + "(" + F(this, we).map((e) => String(e)).join("|") + ")") : Te(this, pr, F(this, we).map((e) => String(e)).join(""));
  }
  push() {
    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
    for (const o of n) if (o !== "") {
      if (typeof o != "string" && !(o instanceof He && F(o, Oe) === this)) throw new Error("invalid part: " + o);
      F(this, we).push(o);
    }
  }
  toJSON() {
    var n;
    const e = this.type === null ? F(this, we).slice().map((i) => typeof i == "string" ? i : i.toJSON()) : [this.type, ...F(this, we).map((i) => i.toJSON())];
    return this.isStart() && !this.type && e.unshift([]), this.isEnd() && (this === F(this, Re) || F(F(this, Re), Zt) && ((n = F(this, Oe)) == null ? void 0 : n.type) === "!") && e.push({}), e;
  }
  isStart() {
    var n;
    if (F(this, Re) === this) return !0;
    if (!((n = F(this, Oe)) != null && n.isStart())) return !1;
    if (F(this, Yt) === 0) return !0;
    const e = F(this, Oe);
    for (let i = 0; i < F(this, Yt); i++) {
      const o = F(e, we)[i];
      if (!(o instanceof He && o.type === "!")) return !1;
    }
    return !0;
  }
  isEnd() {
    var n, i, o;
    if (F(this, Re) === this || ((n = F(this, Oe)) == null ? void 0 : n.type) === "!") return !0;
    if (!((i = F(this, Oe)) != null && i.isEnd())) return !1;
    if (!this.type) return (o = F(this, Oe)) == null ? void 0 : o.isEnd();
    const e = F(this, Oe) ? F(F(this, Oe), we).length : 0;
    return F(this, Yt) === e - 1;
  }
  copyIn(e) {
    typeof e == "string" ? this.push(e) : this.push(e.clone(this));
  }
  clone(e) {
    const n = new He(this.type, e);
    for (const i of F(this, we)) n.copyIn(i);
    return n;
  }
  static fromGlob(e) {
    var o;
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = new He(null, void 0, n);
    return Vt(o = He, Kt, pn).call(o, e, i, 0, n), i;
  }
  toMMPattern() {
    if (this !== F(this, Re)) return F(this, Re).toMMPattern();
    const e = this.toString(), [n, i, o, a] = this.toRegExpSource();
    if (!(o || F(this, $e) || F(this, Lt).nocase && !F(this, Lt).nocaseMagicOnly && e.toUpperCase() !== e.toLowerCase())) return i;
    const c = (F(this, Lt).nocase ? "i" : "") + (a ? "u" : "");
    return Object.assign(new RegExp(`^${n}$`, c), { _src: n, _glob: e });
  }
  get options() {
    return F(this, Lt);
  }
  toRegExpSource(e) {
    var f;
    const n = e ?? !!F(this, Lt).dot;
    if (F(this, Re) === this && Vt(this, dr, Us).call(this), !this.type) {
      const p = this.isStart() && this.isEnd(), s = F(this, we).map((v) => {
        var O;
        const [b, w, T, x] = typeof v == "string" ? Vt(O = He, Kt, Bs).call(O, v, F(this, $e), p) : v.toRegExpSource(e);
        return Te(this, $e, F(this, $e) || T), Te(this, Bt, F(this, Bt) || x), b;
      }).join("");
      let g = "";
      if (this.isStart() && typeof F(this, we)[0] == "string" && (F(this, we).length !== 1 || !Tl.has(F(this, we)[0]))) {
        const v = _l, b = n && v.has(s.charAt(0)) || s.startsWith("\\.") && v.has(s.charAt(2)) || s.startsWith("\\.\\.") && v.has(s.charAt(4)), w = !n && !e && v.has(s.charAt(0));
        g = b ? "(?!(?:^|/)\\.\\.?(?:$|/))" : w ? Vn : "";
      }
      let m = "";
      return this.isEnd() && F(F(this, Re), Zt) && ((f = F(this, Oe)) == null ? void 0 : f.type) === "!" && (m = "(?:$|\\/)"), [g + s + m, qr(s), Te(this, $e, !!F(this, $e)), F(this, Bt)];
    }
    const i = this.type === "*" || this.type === "+", o = this.type === "!" ? "(?:(?!(?:" : "(?:";
    let a = Vt(this, dr, hi).call(this, n);
    if (this.isStart() && this.isEnd() && !a && this.type !== "!") {
      const p = this.toString();
      return Te(this, we, [p]), this.type = null, Te(this, $e, void 0), [p, qr(this.toString()), !1, !1];
    }
    let c = !i || e || n ? "" : Vt(this, dr, hi).call(this, !0);
    c === a && (c = ""), c && (a = `(?:${a})(?:${c})*?`);
    let h = "";
    return h = this.type === "!" && F(this, Kr) ? (this.isStart() && !n ? Vn : "") + Ao : o + a + (this.type === "!" ? "))" + (!this.isStart() || n || e ? "" : Vn) + To + ")" : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && c ? ")" : this.type === "*" && c ? ")?" : `)${this.type}`), [h, qr(a), Te(this, $e, !!F(this, $e)), F(this, Bt)];
  }
};
Re = new WeakMap(), $e = new WeakMap(), Bt = new WeakMap(), we = new WeakMap(), Oe = new WeakMap(), Yt = new WeakMap(), hr = new WeakMap(), Zt = new WeakMap(), Lt = new WeakMap(), pr = new WeakMap(), Kr = new WeakMap(), dr = new WeakSet(), Us = function() {
  if (this !== F(this, Re)) throw new Error("should only call on root");
  if (F(this, Zt)) return this;
  let e;
  for (this.toString(), Te(this, Zt, !0); e = F(this, hr).pop(); ) {
    if (e.type !== "!") continue;
    let n = e, i = F(n, Oe);
    for (; i; ) {
      for (let o = F(n, Yt) + 1; !i.type && o < F(i, we).length; o++) for (const a of F(e, we)) {
        if (typeof a == "string") throw new Error("string part in extglob AST??");
        a.copyIn(F(i, we)[o]);
      }
      n = i, i = F(n, Oe);
    }
  }
  return this;
}, Kt = new WeakSet(), pn = function(e, n, i, o) {
  var v, b;
  let a = !1, c = !1, h = -1, f = !1;
  if (n.type === null) {
    let w = i, T = "";
    for (; w < e.length; ) {
      const x = e.charAt(w++);
      if (a || x === "\\") a = !a, T += x;
      else if (c) w === h + 1 ? x !== "^" && x !== "!" || (f = !0) : x !== "]" || w === h + 2 && f || (c = !1), T += x;
      else if (x !== "[") if (o.noext || !_o(x) || e.charAt(w) !== "(") T += x;
      else {
        n.push(T), T = "";
        const O = new He(x, n);
        w = Vt(v = He, Kt, pn).call(v, e, O, w, o), n.push(O);
      }
      else c = !0, h = w, f = !1, T += x;
    }
    return n.push(T), w;
  }
  let p = i + 1, s = new He(null, n);
  const g = [];
  let m = "";
  for (; p < e.length; ) {
    const w = e.charAt(p++);
    if (a || w === "\\") a = !a, m += w;
    else if (c) p === h + 1 ? w !== "^" && w !== "!" || (f = !0) : w !== "]" || p === h + 2 && f || (c = !1), m += w;
    else if (w !== "[") if (_o(w) && e.charAt(p) === "(") {
      s.push(m), m = "";
      const T = new He(w, s);
      s.push(T), p = Vt(b = He, Kt, pn).call(b, e, T, p, o);
    } else if (w !== "|") {
      if (w === ")") return m === "" && F(n, we).length === 0 && Te(n, Kr, !0), s.push(m), m = "", n.push(...g, s), p;
      m += w;
    } else s.push(m), m = "", g.push(s), s = new He(null, n);
    else c = !0, h = p, f = !1, m += w;
  }
  return n.type = null, Te(n, $e, void 0), Te(n, we, [e.substring(i - 1)]), p;
}, hi = function(e) {
  return F(this, we).map((n) => {
    if (typeof n == "string") throw new Error("string type in extglob ast??");
    const [i, o, a, c] = n.toRegExpSource(e);
    return Te(this, Bt, F(this, Bt) || c), i;
  }).filter((n) => !(this.isStart() && this.isEnd() && !n)).join("|");
}, Bs = function(e, n) {
  let i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], o = !1, a = "", c = !1;
  for (let h = 0; h < e.length; h++) {
    const f = e.charAt(h);
    if (o) o = !1, a += (Al.has(f) ? "\\" : "") + f;
    else if (f !== "\\") {
      if (f === "[") {
        const [p, s, g, m] = vl(e, h);
        if (g) {
          a += p, c = c || s, h += g - 1, n = n || m;
          continue;
        }
      }
      f !== "*" ? f !== "?" ? a += f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : (a += Ii, n = !0) : (a += i && e === "*" ? Ao : To, n = !0);
    } else h === e.length - 1 ? a += "\\\\" : o = !0;
  }
  return [a, qr(e), !!n, c];
}, et(He, Kt);
let En = He;
const Ge = function(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return wn(e), !(!n.nocomment && e.charAt(0) === "#") && new vn(e, n).match(r);
}, Il = /^\*+([^+@!?\*\[\(]*)$/, xl = (r) => (e) => !e.startsWith(".") && e.endsWith(r), Nl = (r) => (e) => e.endsWith(r), Ol = (r) => (r = r.toLowerCase(), (e) => !e.startsWith(".") && e.toLowerCase().endsWith(r)), Sl = (r) => (r = r.toLowerCase(), (e) => e.toLowerCase().endsWith(r)), Rl = /^\*+\.\*+$/, Cl = (r) => !r.startsWith(".") && r.includes("."), Ll = (r) => r !== "." && r !== ".." && r.includes("."), Pl = /^\.\*+$/, $l = (r) => r !== "." && r !== ".." && r.startsWith("."), kl = /^\*+$/, Dl = (r) => r.length !== 0 && !r.startsWith("."), Ml = (r) => r.length !== 0 && r !== "." && r !== "..", Fl = /^\?+([^+@!?\*\[\(]*)?$/, Ul = (r) => {
  let [e, n = ""] = r;
  const i = js([e]);
  return n ? (n = n.toLowerCase(), (o) => i(o) && o.toLowerCase().endsWith(n)) : i;
}, Bl = (r) => {
  let [e, n = ""] = r;
  const i = Ws([e]);
  return n ? (n = n.toLowerCase(), (o) => i(o) && o.toLowerCase().endsWith(n)) : i;
}, jl = (r) => {
  let [e, n = ""] = r;
  const i = Ws([e]);
  return n ? (o) => i(o) && o.endsWith(n) : i;
}, Wl = (r) => {
  let [e, n = ""] = r;
  const i = js([e]);
  return n ? (o) => i(o) && o.endsWith(n) : i;
}, js = (r) => {
  let [e] = r;
  const n = e.length;
  return (i) => i.length === n && !i.startsWith(".");
}, Ws = (r) => {
  let [e] = r;
  const n = e.length;
  return (i) => i.length === n && i !== "." && i !== "..";
}, Gs = typeof At == "object" && At ? typeof At.env == "object" && At.env && At.env.__MINIMATCH_TESTING_PLATFORM__ || At.platform : "posix";
Ge.sep = Gs === "win32" ? "\\" : "/";
const mt = Symbol("globstar **");
Ge.GLOBSTAR = mt, Ge.filter = function(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return (n) => Ge(n, r, e);
};
const dt = function(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Object.assign({}, r, e);
};
Ge.defaults = (r) => {
  if (!r || typeof r != "object" || !Object.keys(r).length) return Ge;
  const e = Ge;
  return Object.assign(function(n, i) {
    return e(n, i, dt(r, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}));
  }, { Minimatch: class extends e.Minimatch {
    constructor(n) {
      super(n, dt(r, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}));
    }
    static defaults(n) {
      return e.defaults(dt(r, n)).Minimatch;
    }
  }, AST: class extends e.AST {
    constructor(n, i) {
      super(n, i, dt(r, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}));
    }
    static fromGlob(n) {
      let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return e.AST.fromGlob(n, dt(r, i));
    }
  }, unescape: function(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.unescape(n, dt(r, i));
  }, escape: function(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.escape(n, dt(r, i));
  }, filter: function(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.filter(n, dt(r, i));
  }, defaults: (n) => e.defaults(dt(r, n)), makeRe: function(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.makeRe(n, dt(r, i));
  }, braceExpand: function(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.braceExpand(n, dt(r, i));
  }, match: function(n, i) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return e.match(n, i, dt(r, o));
  }, sep: e.sep, GLOBSTAR: mt });
};
const zs = function(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return wn(r), e.nobrace || !/\{(?:(?!\{).)*\}/.test(r) ? [r] : wl(r);
};
Ge.braceExpand = zs, Ge.makeRe = function(r) {
  return new vn(r, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).makeRe();
}, Ge.match = function(r, e) {
  const n = new vn(e, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {});
  return r = r.filter((i) => n.match(i)), n.options.nonull && !r.length && r.push(e), r;
};
const Io = /[?*]|[+@!]\(.*?\)|\[|\]/;
class vn {
  constructor(e) {
    te(this, "options");
    te(this, "set");
    te(this, "pattern");
    te(this, "windowsPathsNoEscape");
    te(this, "nonegate");
    te(this, "negate");
    te(this, "comment");
    te(this, "empty");
    te(this, "preserveMultipleSlashes");
    te(this, "partial");
    te(this, "globSet");
    te(this, "globParts");
    te(this, "nocase");
    te(this, "isWindows");
    te(this, "platform");
    te(this, "windowsNoMagicRoot");
    te(this, "regexp");
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    wn(e), n = n || {}, this.options = n, this.pattern = e, this.platform = n.platform || Gs, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!n.windowsPathsNoEscape || n.allowWindowsEscape === !1, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!n.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!n.nonegate, this.comment = !1, this.empty = !1, this.partial = !!n.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = n.windowsNoMagicRoot !== void 0 ? n.windowsNoMagicRoot : !(!this.isWindows || !this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
  }
  hasMagic() {
    if (this.options.magicalBraces && this.set.length > 1) return !0;
    for (const e of this.set) for (const n of e) if (typeof n != "string") return !0;
    return !1;
  }
  debug() {
  }
  make() {
    const e = this.pattern, n = this.options;
    if (!n.nocomment && e.charAt(0) === "#") return void (this.comment = !0);
    if (!e) return void (this.empty = !0);
    this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], n.debug && (this.debug = function() {
      return console.error(...arguments);
    }), this.debug(this.pattern, this.globSet);
    const i = this.globSet.map((a) => this.slashSplit(a));
    this.globParts = this.preprocess(i), this.debug(this.pattern, this.globParts);
    let o = this.globParts.map((a, c, h) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        const f = !(a[0] !== "" || a[1] !== "" || a[2] !== "?" && Io.test(a[2]) || Io.test(a[3])), p = /^[a-z]:/i.test(a[0]);
        if (f) return [...a.slice(0, 4), ...a.slice(4).map((s) => this.parse(s))];
        if (p) return [a[0], ...a.slice(1).map((s) => this.parse(s))];
      }
      return a.map((f) => this.parse(f));
    });
    if (this.debug(this.pattern, o), this.set = o.filter((a) => a.indexOf(!1) === -1), this.isWindows) for (let a = 0; a < this.set.length; a++) {
      const c = this.set[a];
      c[0] === "" && c[1] === "" && this.globParts[a][2] === "?" && typeof c[3] == "string" && /^[a-z]:$/i.test(c[3]) && (c[2] = "?");
    }
    this.debug(this.pattern, this.set);
  }
  preprocess(e) {
    if (this.options.noglobstar) for (let i = 0; i < e.length; i++) for (let o = 0; o < e[i].length; o++) e[i][o] === "**" && (e[i][o] = "*");
    const { optimizationLevel: n = 1 } = this.options;
    return n >= 2 ? (e = this.firstPhasePreProcess(e), e = this.secondPhasePreProcess(e)) : e = n >= 1 ? this.levelOneOptimize(e) : this.adjascentGlobstarOptimize(e), e;
  }
  adjascentGlobstarOptimize(e) {
    return e.map((n) => {
      let i = -1;
      for (; (i = n.indexOf("**", i + 1)) !== -1; ) {
        let o = i;
        for (; n[o + 1] === "**"; ) o++;
        o !== i && n.splice(i, o - i);
      }
      return n;
    });
  }
  levelOneOptimize(e) {
    return e.map((n) => (n = n.reduce((i, o) => {
      const a = i[i.length - 1];
      return o === "**" && a === "**" ? i : o === ".." && a && a !== ".." && a !== "." && a !== "**" ? (i.pop(), i) : (i.push(o), i);
    }, [])).length === 0 ? [""] : n);
  }
  levelTwoFileOptimize(e) {
    Array.isArray(e) || (e = this.slashSplit(e));
    let n = !1;
    do {
      if (n = !1, !this.preserveMultipleSlashes) {
        for (let o = 1; o < e.length - 1; o++) {
          const a = e[o];
          o === 1 && a === "" && e[0] === "" || a !== "." && a !== "" || (n = !0, e.splice(o, 1), o--);
        }
        e[0] !== "." || e.length !== 2 || e[1] !== "." && e[1] !== "" || (n = !0, e.pop());
      }
      let i = 0;
      for (; (i = e.indexOf("..", i + 1)) !== -1; ) {
        const o = e[i - 1];
        o && o !== "." && o !== ".." && o !== "**" && (n = !0, e.splice(i - 1, 2), i -= 2);
      }
    } while (n);
    return e.length === 0 ? [""] : e;
  }
  firstPhasePreProcess(e) {
    let n = !1;
    do {
      n = !1;
      for (let i of e) {
        let o = -1;
        for (; (o = i.indexOf("**", o + 1)) !== -1; ) {
          let c = o;
          for (; i[c + 1] === "**"; ) c++;
          c > o && i.splice(o + 1, c - o);
          let h = i[o + 1];
          const f = i[o + 2], p = i[o + 3];
          if (h !== ".." || !f || f === "." || f === ".." || !p || p === "." || p === "..") continue;
          n = !0, i.splice(o, 1);
          const s = i.slice(0);
          s[o] = "**", e.push(s), o--;
        }
        if (!this.preserveMultipleSlashes) {
          for (let c = 1; c < i.length - 1; c++) {
            const h = i[c];
            c === 1 && h === "" && i[0] === "" || h !== "." && h !== "" || (n = !0, i.splice(c, 1), c--);
          }
          i[0] !== "." || i.length !== 2 || i[1] !== "." && i[1] !== "" || (n = !0, i.pop());
        }
        let a = 0;
        for (; (a = i.indexOf("..", a + 1)) !== -1; ) {
          const c = i[a - 1];
          if (c && c !== "." && c !== ".." && c !== "**") {
            n = !0;
            const h = a === 1 && i[a + 1] === "**" ? ["."] : [];
            i.splice(a - 1, 2, ...h), i.length === 0 && i.push(""), a -= 2;
          }
        }
      }
    } while (n);
    return e;
  }
  secondPhasePreProcess(e) {
    for (let n = 0; n < e.length - 1; n++) for (let i = n + 1; i < e.length; i++) {
      const o = this.partsMatch(e[n], e[i], !this.preserveMultipleSlashes);
      if (o) {
        e[n] = [], e[i] = o;
        break;
      }
    }
    return e.filter((n) => n.length);
  }
  partsMatch(e, n) {
    let i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], o = 0, a = 0, c = [], h = "";
    for (; o < e.length && a < n.length; ) if (e[o] === n[a]) c.push(h === "b" ? n[a] : e[o]), o++, a++;
    else if (i && e[o] === "**" && n[a] === e[o + 1]) c.push(e[o]), o++;
    else if (i && n[a] === "**" && e[o] === n[a + 1]) c.push(n[a]), a++;
    else if (e[o] !== "*" || !n[a] || !this.options.dot && n[a].startsWith(".") || n[a] === "**") {
      if (n[a] !== "*" || !e[o] || !this.options.dot && e[o].startsWith(".") || e[o] === "**" || h === "a") return !1;
      h = "b", c.push(n[a]), o++, a++;
    } else {
      if (h === "b") return !1;
      h = "a", c.push(e[o]), o++, a++;
    }
    return e.length === n.length && c;
  }
  parseNegate() {
    if (this.nonegate) return;
    const e = this.pattern;
    let n = !1, i = 0;
    for (let o = 0; o < e.length && e.charAt(o) === "!"; o++) n = !n, i++;
    i && (this.pattern = e.slice(i)), this.negate = n;
  }
  matchOne(e, n) {
    let i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    const o = this.options;
    if (this.isWindows) {
      const w = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]), T = !w && e[0] === "" && e[1] === "" && e[2] === "?" && /^[a-z]:$/i.test(e[3]), x = typeof n[0] == "string" && /^[a-z]:$/i.test(n[0]), O = T ? 3 : w ? 0 : void 0, C = !x && n[0] === "" && n[1] === "" && n[2] === "?" && typeof n[3] == "string" && /^[a-z]:$/i.test(n[3]) ? 3 : x ? 0 : void 0;
      if (typeof O == "number" && typeof C == "number") {
        const [L, $] = [e[O], n[C]];
        L.toLowerCase() === $.toLowerCase() && (n[C] = L, C > O ? n = n.slice(C) : O > C && (e = e.slice(O)));
      }
    }
    const { optimizationLevel: a = 1 } = this.options;
    a >= 2 && (e = this.levelTwoFileOptimize(e)), this.debug("matchOne", this, { file: e, pattern: n }), this.debug("matchOne", e.length, n.length);
    for (var c = 0, h = 0, f = e.length, p = n.length; c < f && h < p; c++, h++) {
      this.debug("matchOne loop");
      var s = n[h], g = e[c];
      if (this.debug(n, s, g), s === !1) return !1;
      if (s === mt) {
        this.debug("GLOBSTAR", [n, s, g]);
        var m = c, v = h + 1;
        if (v === p) {
          for (this.debug("** at the end"); c < f; c++) if (e[c] === "." || e[c] === ".." || !o.dot && e[c].charAt(0) === ".") return !1;
          return !0;
        }
        for (; m < f; ) {
          var b = e[m];
          if (this.debug(`
globstar while`, e, m, n, v, b), this.matchOne(e.slice(m), n.slice(v), i)) return this.debug("globstar found match!", m, f, b), !0;
          if (b === "." || b === ".." || !o.dot && b.charAt(0) === ".") {
            this.debug("dot detected!", e, m, n, v);
            break;
          }
          this.debug("globstar swallow a segment, and continue"), m++;
        }
        return !(!i || (this.debug(`
>>> no match, partial?`, e, m, n, v), m !== f));
      }
      let w;
      if (typeof s == "string" ? (w = g === s, this.debug("string match", s, g, w)) : (w = s.test(g), this.debug("pattern match", s, g, w)), !w) return !1;
    }
    if (c === f && h === p) return !0;
    if (c === f) return i;
    if (h === p) return c === f - 1 && e[c] === "";
    throw new Error("wtf?");
  }
  braceExpand() {
    return zs(this.pattern, this.options);
  }
  parse(e) {
    wn(e);
    const n = this.options;
    if (e === "**") return mt;
    if (e === "") return "";
    let i, o = null;
    (i = e.match(kl)) ? o = n.dot ? Ml : Dl : (i = e.match(Il)) ? o = (n.nocase ? n.dot ? Sl : Ol : n.dot ? Nl : xl)(i[1]) : (i = e.match(Fl)) ? o = (n.nocase ? n.dot ? Bl : Ul : n.dot ? jl : Wl)(i) : (i = e.match(Rl)) ? o = n.dot ? Ll : Cl : (i = e.match(Pl)) && (o = $l);
    const a = En.fromGlob(e, this.options).toMMPattern();
    return o && typeof a == "object" && Reflect.defineProperty(a, "test", { value: o }), a;
  }
  makeRe() {
    if (this.regexp || this.regexp === !1) return this.regexp;
    const e = this.set;
    if (!e.length) return this.regexp = !1, this.regexp;
    const n = this.options, i = n.noglobstar ? "[^/]*?" : n.dot ? "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?" : "(?:(?!(?:\\/|^)\\.).)*?", o = new Set(n.nocase ? ["i"] : []);
    let a = e.map((f) => {
      const p = f.map((s) => {
        if (s instanceof RegExp) for (const g of s.flags.split("")) o.add(g);
        return typeof s == "string" ? s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : s === mt ? mt : s._src;
      });
      return p.forEach((s, g) => {
        const m = p[g + 1], v = p[g - 1];
        s === mt && v !== mt && (v === void 0 ? m !== void 0 && m !== mt ? p[g + 1] = "(?:\\/|" + i + "\\/)?" + m : p[g] = i : m === void 0 ? p[g - 1] = v + "(?:\\/|" + i + ")?" : m !== mt && (p[g - 1] = v + "(?:\\/|\\/" + i + "\\/)" + m, p[g + 1] = mt));
      }), p.filter((s) => s !== mt).join("/");
    }).join("|");
    const [c, h] = e.length > 1 ? ["(?:", ")"] : ["", ""];
    a = "^" + c + a + h + "$", this.negate && (a = "^(?!" + a + ").+$");
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
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.partial;
    if (this.debug("match", e, this.pattern), this.comment) return !1;
    if (this.empty) return e === "";
    if (e === "/" && n) return !0;
    const i = this.options;
    this.isWindows && (e = e.split("\\").join("/"));
    const o = this.slashSplit(e);
    this.debug(this.pattern, "split", o);
    const a = this.set;
    this.debug(this.pattern, "set", a);
    let c = o[o.length - 1];
    if (!c) for (let h = o.length - 2; !c && h >= 0; h--) c = o[h];
    for (let h = 0; h < a.length; h++) {
      const f = a[h];
      let p = o;
      if (i.matchBase && f.length === 1 && (p = [c]), this.matchOne(p, f, n)) return !!i.flipNegate || !this.negate;
    }
    return !i.flipNegate && this.negate;
  }
  static defaults(e) {
    return Ge.defaults(e).Minimatch;
  }
}
function xi(r) {
  const e = new Error(`${arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""}Invalid response: ${r.status} ${r.statusText}`);
  return e.status = r.status, e.response = r, e;
}
function Pe(r, e) {
  const { status: n } = e;
  if (n === 401 && r.digest) return e;
  if (n >= 400) throw xi(e);
  return e;
}
function Pr(r, e) {
  return arguments.length > 2 && arguments[2] !== void 0 && arguments[2] ? { data: e, headers: r.headers ? dl(r.headers) : {}, status: r.status, statusText: r.statusText } : e;
}
Ge.AST = En, Ge.Minimatch = vn, Ge.escape = function(r) {
  let { windowsPathsNoEscape: e = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return e ? r.replace(/[?*()[\]]/g, "[$&]") : r.replace(/[?*()[\]\\]/g, "\\$&");
}, Ge.unescape = qr;
const Gl = (xo = function(r, e, n) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = Le({ url: be(r.remoteURL, ve(e)), method: "COPY", headers: { Destination: be(r.remoteURL, ve(n)), Overwrite: i.overwrite === !1 ? "F" : "T", Depth: i.shallow ? "0" : "infinity" } }, r, i);
  return c = function(h) {
    Pe(r, h);
  }, (a = Ce(o, r)) && a.then || (a = Promise.resolve(a)), c ? a.then(c) : a;
  var a, c;
}, function() {
  for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
  try {
    return Promise.resolve(xo.apply(this, r));
  } catch (n) {
    return Promise.reject(n);
  }
});
var xo;
const zl = { preserveOrder: !1, attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, removeNSPrefix: !1, allowBooleanAttributes: !1, parseTagValue: !0, parseAttributeValue: !1, trimValues: !0, cdataPropName: !1, numberParseOptions: { hex: !0, leadingZeros: !0, eNotation: !0 }, tagValueProcessor: function(r, e) {
  return e;
}, attributeValueProcessor: function(r, e) {
  return e;
}, stopNodes: [], alwaysCreateTextNode: !1, isArray: () => !1, commentPropName: !1, unpairedTags: [], processEntities: !0, htmlEntities: !1, ignoreDeclaration: !1, ignorePiTags: !1, transformTagName: !1, transformAttributeName: !1, updateTag: function(r, e, n) {
  return r;
}, captureMetaData: !1 }, No = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Vl = new RegExp("^[" + No + "][" + No + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
function Vs(r, e) {
  const n = [];
  let i = e.exec(r);
  for (; i; ) {
    const o = [];
    o.startIndex = e.lastIndex - i[0].length;
    const a = i.length;
    for (let c = 0; c < a; c++) o.push(i[c]);
    n.push(o), i = e.exec(r);
  }
  return n;
}
const In = function(r) {
  return Vl.exec(r) != null;
};
let pi;
pi = typeof Symbol != "function" ? "@@xmlMetadata" : Symbol("XML Node Metadata");
class sr {
  constructor(e) {
    this.tagname = e, this.child = [], this[":@"] = {};
  }
  add(e, n) {
    e === "__proto__" && (e = "#__proto__"), this.child.push({ [e]: n });
  }
  addChild(e, n) {
    e.tagname === "__proto__" && (e.tagname = "#__proto__"), e[":@"] && Object.keys(e[":@"]).length > 0 ? this.child.push({ [e.tagname]: e.child, ":@": e[":@"] }) : this.child.push({ [e.tagname]: e.child }), n !== void 0 && (this.child[this.child.length - 1][pi] = { startIndex: n });
  }
  static getMetaDataSymbol() {
    return pi;
  }
}
class ql {
  constructor(e) {
    this.suppressValidationErr = !e;
  }
  readDocType(e, n) {
    const i = {};
    if (e[n + 3] !== "O" || e[n + 4] !== "C" || e[n + 5] !== "T" || e[n + 6] !== "Y" || e[n + 7] !== "P" || e[n + 8] !== "E") throw new Error("Invalid Tag instead of DOCTYPE");
    {
      n += 9;
      let o = 1, a = !1, c = !1, h = "";
      for (; n < e.length; n++) if (e[n] !== "<" || c) if (e[n] === ">") {
        if (c ? e[n - 1] === "-" && e[n - 2] === "-" && (c = !1, o--) : o--, o === 0) break;
      } else e[n] === "[" ? a = !0 : h += e[n];
      else {
        if (a && or(e, "!ENTITY", n)) {
          let f, p;
          n += 7, [f, p, n] = this.readEntityExp(e, n + 1, this.suppressValidationErr), p.indexOf("&") === -1 && (i[f] = { regx: RegExp(`&${f};`, "g"), val: p });
        } else if (a && or(e, "!ELEMENT", n)) {
          n += 8;
          const { index: f } = this.readElementExp(e, n + 1);
          n = f;
        } else if (a && or(e, "!ATTLIST", n)) n += 8;
        else if (a && or(e, "!NOTATION", n)) {
          n += 9;
          const { index: f } = this.readNotationExp(e, n + 1, this.suppressValidationErr);
          n = f;
        } else {
          if (!or(e, "!--", n)) throw new Error("Invalid DOCTYPE");
          c = !0;
        }
        o++, h = "";
      }
      if (o !== 0) throw new Error("Unclosed DOCTYPE");
    }
    return { entities: i, i: n };
  }
  readEntityExp(e, n) {
    n = tt(e, n);
    let i = "";
    for (; n < e.length && !/\s/.test(e[n]) && e[n] !== '"' && e[n] !== "'"; ) i += e[n], n++;
    if (zr(i), n = tt(e, n), !this.suppressValidationErr) {
      if (e.substring(n, n + 6).toUpperCase() === "SYSTEM") throw new Error("External entities are not supported");
      if (e[n] === "%") throw new Error("Parameter entities are not supported");
    }
    let o = "";
    return [n, o] = this.readIdentifierVal(e, n, "entity"), [i, o, --n];
  }
  readNotationExp(e, n) {
    n = tt(e, n);
    let i = "";
    for (; n < e.length && !/\s/.test(e[n]); ) i += e[n], n++;
    !this.suppressValidationErr && zr(i), n = tt(e, n);
    const o = e.substring(n, n + 6).toUpperCase();
    if (!this.suppressValidationErr && o !== "SYSTEM" && o !== "PUBLIC") throw new Error(`Expected SYSTEM or PUBLIC, found "${o}"`);
    n += o.length, n = tt(e, n);
    let a = null, c = null;
    if (o === "PUBLIC") [n, a] = this.readIdentifierVal(e, n, "publicIdentifier"), e[n = tt(e, n)] !== '"' && e[n] !== "'" || ([n, c] = this.readIdentifierVal(e, n, "systemIdentifier"));
    else if (o === "SYSTEM" && ([n, c] = this.readIdentifierVal(e, n, "systemIdentifier"), !this.suppressValidationErr && !c)) throw new Error("Missing mandatory system identifier for SYSTEM notation");
    return { notationName: i, publicIdentifier: a, systemIdentifier: c, index: --n };
  }
  readIdentifierVal(e, n, i) {
    let o = "";
    const a = e[n];
    if (a !== '"' && a !== "'") throw new Error(`Expected quoted string, found "${a}"`);
    for (n++; n < e.length && e[n] !== a; ) o += e[n], n++;
    if (e[n] !== a) throw new Error(`Unterminated ${i} value`);
    return [++n, o];
  }
  readElementExp(e, n) {
    n = tt(e, n);
    let i = "";
    for (; n < e.length && !/\s/.test(e[n]); ) i += e[n], n++;
    if (!this.suppressValidationErr && !In(i)) throw new Error(`Invalid element name: "${i}"`);
    let o = "";
    if (e[n = tt(e, n)] === "E" && or(e, "MPTY", n)) n += 4;
    else if (e[n] === "A" && or(e, "NY", n)) n += 2;
    else if (e[n] === "(") {
      for (n++; n < e.length && e[n] !== ")"; ) o += e[n], n++;
      if (e[n] !== ")") throw new Error("Unterminated content model");
    } else if (!this.suppressValidationErr) throw new Error(`Invalid Element Expression, found "${e[n]}"`);
    return { elementName: i, contentModel: o.trim(), index: n };
  }
  readAttlistExp(e, n) {
    n = tt(e, n);
    let i = "";
    for (; n < e.length && !/\s/.test(e[n]); ) i += e[n], n++;
    zr(i), n = tt(e, n);
    let o = "";
    for (; n < e.length && !/\s/.test(e[n]); ) o += e[n], n++;
    if (!zr(o)) throw new Error(`Invalid attribute name: "${o}"`);
    n = tt(e, n);
    let a = "";
    if (e.substring(n, n + 8).toUpperCase() === "NOTATION") {
      if (a = "NOTATION", e[n = tt(e, n += 8)] !== "(") throw new Error(`Expected '(', found "${e[n]}"`);
      n++;
      let h = [];
      for (; n < e.length && e[n] !== ")"; ) {
        let f = "";
        for (; n < e.length && e[n] !== "|" && e[n] !== ")"; ) f += e[n], n++;
        if (f = f.trim(), !zr(f)) throw new Error(`Invalid notation name: "${f}"`);
        h.push(f), e[n] === "|" && (n++, n = tt(e, n));
      }
      if (e[n] !== ")") throw new Error("Unterminated list of notations");
      n++, a += " (" + h.join("|") + ")";
    } else {
      for (; n < e.length && !/\s/.test(e[n]); ) a += e[n], n++;
      const h = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
      if (!this.suppressValidationErr && !h.includes(a.toUpperCase())) throw new Error(`Invalid attribute type: "${a}"`);
    }
    n = tt(e, n);
    let c = "";
    return e.substring(n, n + 8).toUpperCase() === "#REQUIRED" ? (c = "#REQUIRED", n += 8) : e.substring(n, n + 7).toUpperCase() === "#IMPLIED" ? (c = "#IMPLIED", n += 7) : [n, c] = this.readIdentifierVal(e, n, "ATTLIST"), { elementName: i, attributeName: o, attributeType: a, defaultValue: c, index: n };
  }
}
const tt = (r, e) => {
  for (; e < r.length && /\s/.test(r[e]); ) e++;
  return e;
};
function or(r, e, n) {
  for (let i = 0; i < e.length; i++) if (e[i] !== r[n + i + 1]) return !1;
  return !0;
}
function zr(r) {
  if (In(r)) return r;
  throw new Error(`Invalid entity name ${r}`);
}
const Hl = /^[-+]?0x[a-fA-F0-9]+$/, Xl = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Yl = { hex: !0, leadingZeros: !0, decimalPoint: ".", eNotation: !0 }, Zl = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
function qs(r) {
  return typeof r == "function" ? r : Array.isArray(r) ? (e) => {
    for (const n of r)
      if (typeof n == "string" && e === n || n instanceof RegExp && n.test(e)) return !0;
  } : () => !1;
}
class Jl {
  constructor(e) {
    if (this.options = e, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = { apos: { regex: /&(apos|#39|#x27);/g, val: "'" }, gt: { regex: /&(gt|#62|#x3E);/g, val: ">" }, lt: { regex: /&(lt|#60|#x3C);/g, val: "<" }, quot: { regex: /&(quot|#34|#x22);/g, val: '"' } }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = { space: { regex: /&(nbsp|#160);/g, val: " " }, cent: { regex: /&(cent|#162);/g, val: "¢" }, pound: { regex: /&(pound|#163);/g, val: "£" }, yen: { regex: /&(yen|#165);/g, val: "¥" }, euro: { regex: /&(euro|#8364);/g, val: "€" }, copyright: { regex: /&(copy|#169);/g, val: "©" }, reg: { regex: /&(reg|#174);/g, val: "®" }, inr: { regex: /&(inr|#8377);/g, val: "₹" }, num_dec: { regex: /&#([0-9]{1,7});/g, val: (n, i) => Oo(i, 10, "&#") }, num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (n, i) => Oo(i, 16, "&#x") } }, this.addExternalEntities = Kl, this.parseXml = nc, this.parseTextData = Ql, this.resolveNameSpace = ec, this.buildAttributesMap = rc, this.isItStopNode = ac, this.replaceEntitiesValue = oc, this.readStopNodeData = uc, this.saveTextToParentTag = sc, this.addChild = ic, this.ignoreAttributesFn = qs(this.options.ignoreAttributes), this.options.stopNodes && this.options.stopNodes.length > 0) {
      this.stopNodesExact = /* @__PURE__ */ new Set(), this.stopNodesWildcard = /* @__PURE__ */ new Set();
      for (let n = 0; n < this.options.stopNodes.length; n++) {
        const i = this.options.stopNodes[n];
        typeof i == "string" && (i.startsWith("*.") ? this.stopNodesWildcard.add(i.substring(2)) : this.stopNodesExact.add(i));
      }
    }
  }
}
function Kl(r) {
  const e = Object.keys(r);
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    this.lastEntities[i] = { regex: new RegExp("&" + i + ";", "g"), val: r[i] };
  }
}
function Ql(r, e, n, i, o, a, c) {
  if (r !== void 0 && (this.options.trimValues && !i && (r = r.trim()), r.length > 0)) {
    c || (r = this.replaceEntitiesValue(r));
    const h = this.options.tagValueProcessor(e, r, n, o, a);
    return h == null ? r : typeof h != typeof r || h !== r ? h : this.options.trimValues || r.trim() === r ? Hs(r, this.options.parseTagValue, this.options.numberParseOptions) : r;
  }
}
function ec(r) {
  if (this.options.removeNSPrefix) {
    const e = r.split(":"), n = r.charAt(0) === "/" ? "/" : "";
    if (e[0] === "xmlns") return "";
    e.length === 2 && (r = n + e[1]);
  }
  return r;
}
const tc = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function rc(r, e) {
  if (this.options.ignoreAttributes !== !0 && typeof r == "string") {
    const n = Vs(r, tc), i = n.length, o = {};
    for (let a = 0; a < i; a++) {
      const c = this.resolveNameSpace(n[a][1]);
      if (this.ignoreAttributesFn(c, e)) continue;
      let h = n[a][4], f = this.options.attributeNamePrefix + c;
      if (c.length) if (this.options.transformAttributeName && (f = this.options.transformAttributeName(f)), f === "__proto__" && (f = "#__proto__"), h !== void 0) {
        this.options.trimValues && (h = h.trim()), h = this.replaceEntitiesValue(h);
        const p = this.options.attributeValueProcessor(c, h, e);
        o[f] = p == null ? h : typeof p != typeof h || p !== h ? p : Hs(h, this.options.parseAttributeValue, this.options.numberParseOptions);
      } else this.options.allowBooleanAttributes && (o[f] = !0);
    }
    if (!Object.keys(o).length) return;
    if (this.options.attributesGroupName) {
      const a = {};
      return a[this.options.attributesGroupName] = o, a;
    }
    return o;
  }
}
const nc = function(r) {
  r = r.replace(/\r\n?/g, `
`);
  const e = new sr("!xml");
  let n = e, i = "", o = "";
  const a = new ql(this.options.processEntities);
  for (let c = 0; c < r.length; c++) if (r[c] === "<") if (r[c + 1] === "/") {
    const h = lr(r, ">", c, "Closing Tag is not closed.");
    let f = r.substring(c + 2, h).trim();
    if (this.options.removeNSPrefix) {
      const g = f.indexOf(":");
      g !== -1 && (f = f.substr(g + 1));
    }
    this.options.transformTagName && (f = this.options.transformTagName(f)), n && (i = this.saveTextToParentTag(i, n, o));
    const p = o.substring(o.lastIndexOf(".") + 1);
    if (f && this.options.unpairedTags.indexOf(f) !== -1) throw new Error(`Unpaired tag can not be used as closing tag: </${f}>`);
    let s = 0;
    p && this.options.unpairedTags.indexOf(p) !== -1 ? (s = o.lastIndexOf(".", o.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : s = o.lastIndexOf("."), o = o.substring(0, s), n = this.tagsNodeStack.pop(), i = "", c = h;
  } else if (r[c + 1] === "?") {
    let h = di(r, c, !1, "?>");
    if (!h) throw new Error("Pi Tag is not closed.");
    if (i = this.saveTextToParentTag(i, n, o), !(this.options.ignoreDeclaration && h.tagName === "?xml" || this.options.ignorePiTags)) {
      const f = new sr(h.tagName);
      f.add(this.options.textNodeName, ""), h.tagName !== h.tagExp && h.attrExpPresent && (f[":@"] = this.buildAttributesMap(h.tagExp, o)), this.addChild(n, f, o, c);
    }
    c = h.closeIndex + 1;
  } else if (r.substr(c + 1, 3) === "!--") {
    const h = lr(r, "-->", c + 4, "Comment is not closed.");
    if (this.options.commentPropName) {
      const f = r.substring(c + 4, h - 2);
      i = this.saveTextToParentTag(i, n, o), n.add(this.options.commentPropName, [{ [this.options.textNodeName]: f }]);
    }
    c = h;
  } else if (r.substr(c + 1, 2) === "!D") {
    const h = a.readDocType(r, c);
    this.docTypeEntities = h.entities, c = h.i;
  } else if (r.substr(c + 1, 2) === "![") {
    const h = lr(r, "]]>", c, "CDATA is not closed.") - 2, f = r.substring(c + 9, h);
    i = this.saveTextToParentTag(i, n, o);
    let p = this.parseTextData(f, n.tagname, o, !0, !1, !0, !0);
    p == null && (p = ""), this.options.cdataPropName ? n.add(this.options.cdataPropName, [{ [this.options.textNodeName]: f }]) : n.add(this.options.textNodeName, p), c = h + 2;
  } else {
    let h = di(r, c, this.options.removeNSPrefix), f = h.tagName;
    const p = h.rawTagName;
    let s = h.tagExp, g = h.attrExpPresent, m = h.closeIndex;
    if (this.options.transformTagName) {
      const w = this.options.transformTagName(f);
      s === f && (s = w), f = w;
    }
    n && i && n.tagname !== "!xml" && (i = this.saveTextToParentTag(i, n, o, !1));
    const v = n;
    v && this.options.unpairedTags.indexOf(v.tagname) !== -1 && (n = this.tagsNodeStack.pop(), o = o.substring(0, o.lastIndexOf("."))), f !== e.tagname && (o += o ? "." + f : f);
    const b = c;
    if (this.isItStopNode(this.stopNodesExact, this.stopNodesWildcard, o, f)) {
      let w = "";
      if (s.length > 0 && s.lastIndexOf("/") === s.length - 1) f[f.length - 1] === "/" ? (f = f.substr(0, f.length - 1), o = o.substr(0, o.length - 1), s = f) : s = s.substr(0, s.length - 1), c = h.closeIndex;
      else if (this.options.unpairedTags.indexOf(f) !== -1) c = h.closeIndex;
      else {
        const x = this.readStopNodeData(r, p, m + 1);
        if (!x) throw new Error(`Unexpected end of ${p}`);
        c = x.i, w = x.tagContent;
      }
      const T = new sr(f);
      f !== s && g && (T[":@"] = this.buildAttributesMap(s, o)), w && (w = this.parseTextData(w, f, o, !0, g, !0, !0)), o = o.substr(0, o.lastIndexOf(".")), T.add(this.options.textNodeName, w), this.addChild(n, T, o, b);
    } else {
      if (s.length > 0 && s.lastIndexOf("/") === s.length - 1) {
        if (f[f.length - 1] === "/" ? (f = f.substr(0, f.length - 1), o = o.substr(0, o.length - 1), s = f) : s = s.substr(0, s.length - 1), this.options.transformTagName) {
          const T = this.options.transformTagName(f);
          s === f && (s = T), f = T;
        }
        const w = new sr(f);
        f !== s && g && (w[":@"] = this.buildAttributesMap(s, o)), this.addChild(n, w, o, b), o = o.substr(0, o.lastIndexOf("."));
      } else {
        const w = new sr(f);
        this.tagsNodeStack.push(n), f !== s && g && (w[":@"] = this.buildAttributesMap(s, o)), this.addChild(n, w, o, b), n = w;
      }
      i = "", c = m;
    }
  }
  else i += r[c];
  return e.child;
};
function ic(r, e, n, i) {
  this.options.captureMetaData || (i = void 0);
  const o = this.options.updateTag(e.tagname, n, e[":@"]);
  o === !1 || (typeof o == "string" && (e.tagname = o), r.addChild(e, i));
}
const oc = function(r) {
  if (this.options.processEntities) {
    for (let e in this.docTypeEntities) {
      const n = this.docTypeEntities[e];
      r = r.replace(n.regx, n.val);
    }
    for (let e in this.lastEntities) {
      const n = this.lastEntities[e];
      r = r.replace(n.regex, n.val);
    }
    if (this.options.htmlEntities) for (let e in this.htmlEntities) {
      const n = this.htmlEntities[e];
      r = r.replace(n.regex, n.val);
    }
    r = r.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return r;
};
function sc(r, e, n, i) {
  return r && (i === void 0 && (i = e.child.length === 0), (r = this.parseTextData(r, e.tagname, n, !1, !!e[":@"] && Object.keys(e[":@"]).length !== 0, i)) !== void 0 && r !== "" && e.add(this.options.textNodeName, r), r = ""), r;
}
function ac(r, e, n, i) {
  return !(!e || !e.has(i)) || !(!r || !r.has(n));
}
function lr(r, e, n, i) {
  const o = r.indexOf(e, n);
  if (o === -1) throw new Error(i);
  return o + e.length - 1;
}
function di(r, e, n) {
  const i = function(s, g) {
    let m, v = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ">", b = "";
    for (let w = g; w < s.length; w++) {
      let T = s[w];
      if (m) T === m && (m = "");
      else if (T === '"' || T === "'") m = T;
      else if (T === v[0]) {
        if (!v[1]) return { data: b, index: w };
        if (s[w + 1] === v[1]) return { data: b, index: w };
      } else T === "	" && (T = " ");
      b += T;
    }
  }(r, e + 1, arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ">");
  if (!i) return;
  let o = i.data;
  const a = i.index, c = o.search(/\s/);
  let h = o, f = !0;
  c !== -1 && (h = o.substring(0, c), o = o.substring(c + 1).trimStart());
  const p = h;
  if (n) {
    const s = h.indexOf(":");
    s !== -1 && (h = h.substr(s + 1), f = h !== i.data.substr(s + 1));
  }
  return { tagName: h, tagExp: o, closeIndex: a, attrExpPresent: f, rawTagName: p };
}
function uc(r, e, n) {
  const i = n;
  let o = 1;
  for (; n < r.length; n++) if (r[n] === "<") if (r[n + 1] === "/") {
    const a = lr(r, ">", n, `${e} is not closed`);
    if (r.substring(n + 2, a).trim() === e && (o--, o === 0)) return { tagContent: r.substring(i, n), i: a };
    n = a;
  } else if (r[n + 1] === "?") n = lr(r, "?>", n + 1, "StopNode is not closed.");
  else if (r.substr(n + 1, 3) === "!--") n = lr(r, "-->", n + 3, "StopNode is not closed.");
  else if (r.substr(n + 1, 2) === "![") n = lr(r, "]]>", n, "StopNode is not closed.") - 2;
  else {
    const a = di(r, n, ">");
    a && ((a && a.tagName) === e && a.tagExp[a.tagExp.length - 1] !== "/" && o++, n = a.closeIndex);
  }
}
function Hs(r, e, n) {
  if (e && typeof r == "string") {
    const i = r.trim();
    return i === "true" || i !== "false" && function(o) {
      let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (a = Object.assign({}, Yl, a), !o || typeof o != "string") return o;
      let c = o.trim();
      if (a.skipLike !== void 0 && a.skipLike.test(c)) return o;
      if (o === "0") return 0;
      if (a.hex && Hl.test(c)) return function(f) {
        if (parseInt) return parseInt(f, 16);
        if (Number.parseInt) return Number.parseInt(f, 16);
        if (window && window.parseInt) return window.parseInt(f, 16);
        throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
      }(c);
      if (c.includes("e") || c.includes("E")) return function(f, p, s) {
        if (!s.eNotation) return f;
        const g = p.match(Zl);
        if (g) {
          let m = g[1] || "";
          const v = g[3].indexOf("e") === -1 ? "E" : "e", b = g[2], w = m ? f[b.length + 1] === v : f[b.length] === v;
          return b.length > 1 && w ? f : b.length !== 1 || !g[3].startsWith(`.${v}`) && g[3][0] !== v ? s.leadingZeros && !w ? (p = (g[1] || "") + g[3], Number(p)) : f : Number(p);
        }
        return f;
      }(o, c, a);
      {
        const f = Xl.exec(c);
        if (f) {
          const p = f[1] || "", s = f[2];
          let g = ((h = f[3]) && h.indexOf(".") !== -1 && ((h = h.replace(/0+$/, "")) === "." ? h = "0" : h[0] === "." ? h = "0" + h : h[h.length - 1] === "." && (h = h.substring(0, h.length - 1))), h);
          const m = p ? o[s.length + 1] === "." : o[s.length] === ".";
          if (!a.leadingZeros && (s.length > 1 || s.length === 1 && !m)) return o;
          {
            const v = Number(c), b = String(v);
            if (v === 0) return v;
            if (b.search(/[eE]/) !== -1) return a.eNotation ? v : o;
            if (c.indexOf(".") !== -1) return b === "0" || b === g || b === `${p}${g}` ? v : o;
            let w = s ? g : c;
            return s ? w === b || p + w === b ? v : o : w === b || w === p + b ? v : o;
          }
        }
        return o;
      }
      var h;
    }(r, n);
  }
  return r !== void 0 ? r : "";
}
function Oo(r, e, n) {
  const i = Number.parseInt(r, e);
  return i >= 0 && i <= 1114111 ? String.fromCodePoint(i) : n + r + ";";
}
const qn = sr.getMetaDataSymbol();
function lc(r, e) {
  return Xs(r, e);
}
function Xs(r, e, n) {
  let i;
  const o = {};
  for (let a = 0; a < r.length; a++) {
    const c = r[a], h = cc(c);
    let f = "";
    if (f = n === void 0 ? h : n + "." + h, h === e.textNodeName) i === void 0 ? i = c[h] : i += "" + c[h];
    else {
      if (h === void 0) continue;
      if (c[h]) {
        let p = Xs(c[h], e, f);
        const s = hc(p, e);
        c[qn] !== void 0 && (p[qn] = c[qn]), c[":@"] ? fc(p, c[":@"], f, e) : Object.keys(p).length !== 1 || p[e.textNodeName] === void 0 || e.alwaysCreateTextNode ? Object.keys(p).length === 0 && (e.alwaysCreateTextNode ? p[e.textNodeName] = "" : p = "") : p = p[e.textNodeName], o[h] !== void 0 && o.hasOwnProperty(h) ? (Array.isArray(o[h]) || (o[h] = [o[h]]), o[h].push(p)) : e.isArray(h, f, s) ? o[h] = [p] : o[h] = p;
      }
    }
  }
  return typeof i == "string" ? i.length > 0 && (o[e.textNodeName] = i) : i !== void 0 && (o[e.textNodeName] = i), o;
}
function cc(r) {
  const e = Object.keys(r);
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    if (i !== ":@") return i;
  }
}
function fc(r, e, n, i) {
  if (e) {
    const o = Object.keys(e), a = o.length;
    for (let c = 0; c < a; c++) {
      const h = o[c];
      i.isArray(h, n + "." + h, !0, !0) ? r[h] = [e[h]] : r[h] = e[h];
    }
  }
}
function hc(r, e) {
  const { textNodeName: n } = e, i = Object.keys(r).length;
  return i === 0 || !(i !== 1 || !r[n] && typeof r[n] != "boolean" && r[n] !== 0);
}
const pc = { allowBooleanAttributes: !1, unpairedTags: [] };
function So(r) {
  return r === " " || r === "	" || r === `
` || r === "\r";
}
function Ro(r, e) {
  const n = e;
  for (; e < r.length; e++) if (!(r[e] != "?" && r[e] != " ")) {
    const i = r.substr(n, e - n);
    if (e > 5 && i === "xml") return Ae("InvalidXml", "XML declaration allowed only at the start of the document.", qe(r, e));
    if (r[e] == "?" && r[e + 1] == ">") {
      e++;
      break;
    }
  }
  return e;
}
function Co(r, e) {
  if (r.length > e + 5 && r[e + 1] === "-" && r[e + 2] === "-") {
    for (e += 3; e < r.length; e++) if (r[e] === "-" && r[e + 1] === "-" && r[e + 2] === ">") {
      e += 2;
      break;
    }
  } else if (r.length > e + 8 && r[e + 1] === "D" && r[e + 2] === "O" && r[e + 3] === "C" && r[e + 4] === "T" && r[e + 5] === "Y" && r[e + 6] === "P" && r[e + 7] === "E") {
    let n = 1;
    for (e += 8; e < r.length; e++) if (r[e] === "<") n++;
    else if (r[e] === ">" && (n--, n === 0)) break;
  } else if (r.length > e + 9 && r[e + 1] === "[" && r[e + 2] === "C" && r[e + 3] === "D" && r[e + 4] === "A" && r[e + 5] === "T" && r[e + 6] === "A" && r[e + 7] === "[") {
    for (e += 8; e < r.length; e++) if (r[e] === "]" && r[e + 1] === "]" && r[e + 2] === ">") {
      e += 2;
      break;
    }
  }
  return e;
}
function dc(r, e) {
  let n = "", i = "", o = !1;
  for (; e < r.length; e++) {
    if (r[e] === '"' || r[e] === "'") i === "" ? i = r[e] : i !== r[e] || (i = "");
    else if (r[e] === ">" && i === "") {
      o = !0;
      break;
    }
    n += r[e];
  }
  return i === "" && { value: n, index: e, tagClosed: o };
}
const gc = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Lo(r, e) {
  const n = Vs(r, gc), i = {};
  for (let o = 0; o < n.length; o++) {
    if (n[o][1].length === 0) return Ae("InvalidAttr", "Attribute '" + n[o][2] + "' has no space in starting.", Vr(n[o]));
    if (n[o][3] !== void 0 && n[o][4] === void 0) return Ae("InvalidAttr", "Attribute '" + n[o][2] + "' is without value.", Vr(n[o]));
    if (n[o][3] === void 0 && !e.allowBooleanAttributes) return Ae("InvalidAttr", "boolean attribute '" + n[o][2] + "' is not allowed.", Vr(n[o]));
    const a = n[o][2];
    if (!yc(a)) return Ae("InvalidAttr", "Attribute '" + a + "' is an invalid name.", Vr(n[o]));
    if (i.hasOwnProperty(a)) return Ae("InvalidAttr", "Attribute '" + a + "' is repeated.", Vr(n[o]));
    i[a] = 1;
  }
  return !0;
}
function mc(r, e) {
  if (r[++e] === ";") return -1;
  if (r[e] === "#") return function(i, o) {
    let a = /\d/;
    for (i[o] === "x" && (o++, a = /[\da-fA-F]/); o < i.length; o++) {
      if (i[o] === ";") return o;
      if (!i[o].match(a)) break;
    }
    return -1;
  }(r, ++e);
  let n = 0;
  for (; e < r.length; e++, n++) if (!(r[e].match(/\w/) && n < 20)) {
    if (r[e] === ";") break;
    return -1;
  }
  return e;
}
function Ae(r, e, n) {
  return { err: { code: r, msg: e, line: n.line || n, col: n.col } };
}
function yc(r) {
  return In(r);
}
function qe(r, e) {
  const n = r.substring(0, e).split(/\r?\n/);
  return { line: n.length, col: n[n.length - 1].length + 1 };
}
function Vr(r) {
  return r.startIndex + r[1].length;
}
class Ys {
  constructor(e) {
    this.externalEntities = {}, this.options = function(n) {
      return Object.assign({}, zl, n);
    }(e);
  }
  parse(e, n) {
    if (typeof e != "string" && e.toString) e = e.toString();
    else if (typeof e != "string") throw new Error("XML data is accepted in String or Bytes[] form.");
    if (n) {
      n === !0 && (n = {});
      const a = function(c, h) {
        h = Object.assign({}, pc, h);
        const f = [];
        let p = !1, s = !1;
        c[0] === "\uFEFF" && (c = c.substr(1));
        for (let g = 0; g < c.length; g++) if (c[g] === "<" && c[g + 1] === "?") {
          if (g += 2, g = Ro(c, g), g.err) return g;
        } else {
          if (c[g] !== "<") {
            if (So(c[g])) continue;
            return Ae("InvalidChar", "char '" + c[g] + "' is not expected.", qe(c, g));
          }
          {
            let m = g;
            if (g++, c[g] === "!") {
              g = Co(c, g);
              continue;
            }
            {
              let v = !1;
              c[g] === "/" && (v = !0, g++);
              let b = "";
              for (; g < c.length && c[g] !== ">" && c[g] !== " " && c[g] !== "	" && c[g] !== `
` && c[g] !== "\r"; g++) b += c[g];
              if (b = b.trim(), b[b.length - 1] === "/" && (b = b.substring(0, b.length - 1), g--), !In(b)) {
                let x;
                return x = b.trim().length === 0 ? "Invalid space after '<'." : "Tag '" + b + "' is an invalid name.", Ae("InvalidTag", x, qe(c, g));
              }
              const w = dc(c, g);
              if (w === !1) return Ae("InvalidAttr", "Attributes for '" + b + "' have open quote.", qe(c, g));
              let T = w.value;
              if (g = w.index, T[T.length - 1] === "/") {
                const x = g - T.length;
                T = T.substring(0, T.length - 1);
                const O = Lo(T, h);
                if (O !== !0) return Ae(O.err.code, O.err.msg, qe(c, x + O.err.line));
                p = !0;
              } else if (v) {
                if (!w.tagClosed) return Ae("InvalidTag", "Closing tag '" + b + "' doesn't have proper closing.", qe(c, g));
                if (T.trim().length > 0) return Ae("InvalidTag", "Closing tag '" + b + "' can't have attributes or invalid starting.", qe(c, m));
                if (f.length === 0) return Ae("InvalidTag", "Closing tag '" + b + "' has not been opened.", qe(c, m));
                {
                  const x = f.pop();
                  if (b !== x.tagName) {
                    let O = qe(c, x.tagStartPos);
                    return Ae("InvalidTag", "Expected closing tag '" + x.tagName + "' (opened in line " + O.line + ", col " + O.col + ") instead of closing tag '" + b + "'.", qe(c, m));
                  }
                  f.length == 0 && (s = !0);
                }
              } else {
                const x = Lo(T, h);
                if (x !== !0) return Ae(x.err.code, x.err.msg, qe(c, g - T.length + x.err.line));
                if (s === !0) return Ae("InvalidXml", "Multiple possible root nodes found.", qe(c, g));
                h.unpairedTags.indexOf(b) !== -1 || f.push({ tagName: b, tagStartPos: m }), p = !0;
              }
              for (g++; g < c.length; g++) if (c[g] === "<") {
                if (c[g + 1] === "!") {
                  g++, g = Co(c, g);
                  continue;
                }
                if (c[g + 1] !== "?") break;
                if (g = Ro(c, ++g), g.err) return g;
              } else if (c[g] === "&") {
                const x = mc(c, g);
                if (x == -1) return Ae("InvalidChar", "char '&' is not expected.", qe(c, g));
                g = x;
              } else if (s === !0 && !So(c[g])) return Ae("InvalidXml", "Extra text at the end", qe(c, g));
              c[g] === "<" && g--;
            }
          }
        }
        return p ? f.length == 1 ? Ae("InvalidTag", "Unclosed tag '" + f[0].tagName + "'.", qe(c, f[0].tagStartPos)) : !(f.length > 0) || Ae("InvalidXml", "Invalid '" + JSON.stringify(f.map((g) => g.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 }) : Ae("InvalidXml", "Start tag expected.", 1);
      }(e, n);
      if (a !== !0) throw Error(`${a.err.msg}:${a.err.line}:${a.err.col}`);
    }
    const i = new Jl(this.options);
    i.addExternalEntities(this.externalEntities);
    const o = i.parseXml(e);
    return this.options.preserveOrder || o === void 0 ? o : lc(o, this.options);
  }
  addEntity(e, n) {
    if (n.indexOf("&") !== -1) throw new Error("Entity value can't have '&'");
    if (e.indexOf("&") !== -1 || e.indexOf(";") !== -1) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    if (n === "&") throw new Error("An entity with value '&' is not permitted");
    this.externalEntities[e] = n;
  }
  static getMetaDataSymbol() {
    return sr.getMetaDataSymbol();
  }
}
var wc = ge(829), Ut = ge.n(wc), xr = function(r) {
  return r.Array = "array", r.Object = "object", r.Original = "original", r;
}(xr || {});
function Zs(r, e) {
  if (!r.endsWith("propstat.prop.displayname")) return e;
}
function ln(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : xr.Original;
  const i = Ut().get(r, e);
  return n === "array" && Array.isArray(i) === !1 ? [i] : n === "object" && Array.isArray(i) ? i[0] : i;
}
function xn(r, e) {
  return e = e ?? { attributeNamePrefix: "@", attributeParsers: [], tagParsers: [Zs] }, new Promise((n) => {
    n(function(i) {
      const { multistatus: o } = i;
      if (o === "") return { multistatus: { response: [] } };
      if (!o) throw new Error("Invalid response: No root multistatus found");
      const a = { multistatus: Array.isArray(o) ? o[0] : o };
      return Ut().set(a, "multistatus.response", ln(a, "multistatus.response", xr.Array)), Ut().set(a, "multistatus.response", Ut().get(a, "multistatus.response").map((c) => function(h) {
        const f = Object.assign({}, h);
        return f.status ? Ut().set(f, "status", ln(f, "status", xr.Object)) : (Ut().set(f, "propstat", ln(f, "propstat", xr.Object)), Ut().set(f, "propstat.prop", ln(f, "propstat.prop", xr.Object))), f;
      }(c))), a;
    }(function(i) {
      let { attributeNamePrefix: o, attributeParsers: a, tagParsers: c } = i;
      return new Ys({ allowBooleanAttributes: !0, attributeNamePrefix: o, textNodeName: "text", ignoreAttributes: !1, removeNSPrefix: !0, numberParseOptions: { hex: !0, leadingZeros: !1 }, attributeValueProcessor(h, f, p) {
        for (const s of a) try {
          const g = s(p, f);
          if (g !== f) return g;
        } catch {
        }
        return f;
      }, tagValueProcessor(h, f, p) {
        for (const s of c) try {
          const g = s(p, f);
          if (g !== f) return g;
        } catch {
        }
        return f;
      } });
    }(e).parse(r)));
  });
}
function Ni(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
  const { getlastmodified: i = null, getcontentlength: o = "0", resourcetype: a = null, getcontenttype: c = null, getetag: h = null } = r, f = a && typeof a == "object" && a.collection !== void 0 ? "directory" : "file", p = { filename: e, basename: gn().basename(e), lastmod: i, size: parseInt(o, 10), type: f, etag: typeof h == "string" ? h.replace(/"/g, "") : null };
  return f === "file" && (p.mime = c && typeof c == "string" ? c.split(";")[0] : ""), n && (r.displayname !== void 0 && (r.displayname = String(r.displayname)), p.props = r), p;
}
function Ec(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], i = null;
  try {
    r.multistatus.response[0].propstat && (i = r.multistatus.response[0]);
  } catch {
  }
  if (!i) throw new Error("Failed getting item stat: bad response");
  const { propstat: { prop: o, status: a } } = i, [c, h, f] = a.split(" ", 3), p = parseInt(h, 10);
  if (p >= 400) {
    const s = new Error(`Invalid response: ${p} ${f}`);
    throw s.status = p, s;
  }
  return Ni(o, Jr(e), n);
}
function vc(r) {
  switch (String(r)) {
    case "-3":
      return "unlimited";
    case "-2":
    case "-1":
      return "unknown";
    default:
      return parseInt(String(r), 10);
  }
}
function Hn(r, e, n) {
  return n ? e ? e(r) : r : (r && r.then || (r = Promise.resolve(r)), e ? r.then(e) : r);
}
const Oi = /* @__PURE__ */ function(r) {
  return function() {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try {
      return Promise.resolve(r.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { details: i = !1 } = n, o = Le({ url: be(r.remoteURL, ve(e)), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, r, n);
  return Hn(Ce(o, r), function(a) {
    return Pe(r, a), Hn(a.text(), function(c) {
      return Hn(xn(c, r.parsing), function(h) {
        const f = Ec(h, e, i);
        return Pr(a, f, i);
      });
    });
  });
});
function Js(r, e, n) {
  return n ? e ? e(r) : r : (r && r.then || (r = Promise.resolve(r)), e ? r.then(e) : r);
}
const bc = Ks(function(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = function(a) {
    if (!a || a === "/") return [];
    let c = a;
    const h = [];
    do
      h.push(c), c = gn().dirname(c);
    while (c && c !== "/");
    return h;
  }(Jr(e));
  i.sort((a, c) => a.length > c.length ? 1 : c.length > a.length ? -1 : 0);
  let o = !1;
  return function(a, c, h) {
    if (typeof a[$o] == "function") {
      let T = function(x) {
        try {
          for (; !(f = g.next()).done; ) if ((x = c(f.value)) && x.then) {
            if (!ko(x)) return void x.then(T, s || (s = Xe.bind(null, p = new Nr(), 2)));
            x = x.v;
          }
          p ? Xe(p, 1, x) : p = x;
        } catch (O) {
          Xe(p || (p = new Nr()), 2, O);
        }
      };
      var w = T, f, p, s, g = a[$o]();
      if (T(), g.return) {
        var m = function(x) {
          try {
            f.done || g.return();
          } catch {
          }
          return x;
        };
        if (p && p.then) return p.then(m, function(x) {
          throw m(x);
        });
        m();
      }
      return p;
    }
    if (!("length" in a)) throw new TypeError("Object is not iterable");
    for (var v = [], b = 0; b < a.length; b++) v.push(a[b]);
    return function(T, x, O) {
      var C, L, $ = -1;
      return function j(B) {
        try {
          for (; ++$ < T.length && (!O || !O()); ) if ((B = x($)) && B.then) {
            if (!ko(B)) return void B.then(j, L || (L = Xe.bind(null, C = new Nr(), 2)));
            B = B.v;
          }
          C ? Xe(C, 1, B) : C = B;
        } catch (Y) {
          Xe(C || (C = new Nr()), 2, Y);
        }
      }(), C;
    }(v, function(T) {
      return c(v[T]);
    }, h);
  }(i, function(a) {
    return c = function() {
      return function(f, p) {
        try {
          var s = Js(Oi(r, a), function(g) {
            if (g.type !== "directory") throw new Error(`Path includes a file: ${e}`);
          });
        } catch (g) {
          return p(g);
        }
        return s && s.then ? s.then(void 0, p) : s;
      }(0, function(f) {
        const p = f;
        return function() {
          if (p.status === 404) return o = !0, Po(gi(r, a, { ...n, recursive: !1 }));
          throw f;
        }();
      });
    }, (h = function() {
      if (o) return Po(gi(r, a, { ...n, recursive: !1 }));
    }()) && h.then ? h.then(c) : c();
    var c, h;
  }, function() {
    return !1;
  });
});
function Ks(r) {
  return function() {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try {
      return Promise.resolve(r.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
function _c() {
}
function Po(r, e) {
  return r && r.then ? r.then(_c) : Promise.resolve();
}
const $o = typeof Symbol < "u" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
function Xe(r, e, n) {
  if (!r.s) {
    if (n instanceof Nr) {
      if (!n.s) return void (n.o = Xe.bind(null, r, e));
      1 & e && (e = n.s), n = n.v;
    }
    if (n && n.then) return void n.then(Xe.bind(null, r, e), Xe.bind(null, r, 2));
    r.s = e, r.v = n;
    const i = r.o;
    i && i(r);
  }
}
const Nr = function() {
  function r() {
  }
  return r.prototype.then = function(e, n) {
    const i = new r(), o = this.s;
    if (o) {
      const a = 1 & o ? e : n;
      if (a) {
        try {
          Xe(i, 1, a(this.v));
        } catch (c) {
          Xe(i, 2, c);
        }
        return i;
      }
      return this;
    }
    return this.o = function(a) {
      try {
        const c = a.v;
        1 & a.s ? Xe(i, 1, e ? e(c) : c) : n ? Xe(i, 1, n(c)) : Xe(i, 2, c);
      } catch (c) {
        Xe(i, 2, c);
      }
    }, i;
  }, r;
}();
function ko(r) {
  return r instanceof Nr && 1 & r.s;
}
const gi = Ks(function(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (n.recursive === !0) return bc(r, e, n);
  const i = Le({ url: be(r.remoteURL, (o = ve(e), o.endsWith("/") ? o : o + "/")), method: "MKCOL" }, r, n);
  var o;
  return Js(Ce(i, r), function(a) {
    Pe(r, a);
  });
});
var Tc = ge(388), Do = ge.n(Tc);
const Ac = /* @__PURE__ */ function(r) {
  return function() {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try {
      return Promise.resolve(r.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = {};
  if (typeof n.range == "object" && typeof n.range.start == "number") {
    let h = `bytes=${n.range.start}-`;
    typeof n.range.end == "number" && (h = `${h}${n.range.end}`), i.Range = h;
  }
  const o = Le({ url: be(r.remoteURL, ve(e)), method: "GET", headers: i }, r, n);
  return c = function(h) {
    if (Pe(r, h), i.Range && h.status !== 206) {
      const f = new Error(`Invalid response code for partial request: ${h.status}`);
      throw f.status = h.status, f;
    }
    return n.callback && setTimeout(() => {
      n.callback(h);
    }, 0), h.body;
  }, (a = Ce(o, r)) && a.then || (a = Promise.resolve(a)), c ? a.then(c) : a;
  var a, c;
}), Ic = () => {
}, xc = /* @__PURE__ */ function(r) {
  return function() {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try {
      return Promise.resolve(r.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(r, e, n) {
  n.url || (n.url = be(r.remoteURL, ve(e)));
  const i = Le(n, r, {});
  return a = function(c) {
    return Pe(r, c), c;
  }, (o = Ce(i, r)) && o.then || (o = Promise.resolve(o)), a ? o.then(a) : o;
  var o, a;
}), Nc = /* @__PURE__ */ function(r) {
  return function() {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try {
      return Promise.resolve(r.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = Le({ url: be(r.remoteURL, ve(e)), method: "DELETE" }, r, n);
  return a = function(c) {
    Pe(r, c);
  }, (o = Ce(i, r)) && o.then || (o = Promise.resolve(o)), a ? o.then(a) : o;
  var o, a;
}), Oc = /* @__PURE__ */ function(r) {
  return function() {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try {
      return Promise.resolve(r.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return function(i, o) {
    try {
      var a = (c = Oi(r, e, n), h = function() {
        return !0;
      }, f ? h ? h(c) : c : (c && c.then || (c = Promise.resolve(c)), h ? c.then(h) : c));
    } catch (p) {
      return o(p);
    }
    var c, h, f;
    return a && a.then ? a.then(void 0, o) : a;
  }(0, function(i) {
    if (i.status === 404) return !1;
    throw i;
  });
});
function Xn(r, e, n) {
  return n ? e ? e(r) : r : (r && r.then || (r = Promise.resolve(r)), e ? r.then(e) : r);
}
const Sc = /* @__PURE__ */ function(r) {
  return function() {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try {
      return Promise.resolve(r.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = Le({ url: be(r.remoteURL, ve(e), "/"), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: n.deep ? "infinity" : "1" } }, r, n);
  return Xn(Ce(i, r), function(o) {
    return Pe(r, o), Xn(o.text(), function(a) {
      if (!a) throw new Error("Failed parsing directory contents: Empty response");
      return Xn(xn(a, r.parsing), function(c) {
        const h = po(e);
        let f = function(p, s, g) {
          let m = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], v = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
          const b = gn().join(s, "/"), { multistatus: { response: w } } = p, T = w.map((x) => {
            const O = function(L) {
              try {
                return L.replace(/^https?:\/\/[^\/]+/, "");
              } catch ($) {
                throw new Ye($, "Failed normalising HREF");
              }
            }(x.href), { propstat: { prop: C } } = x;
            return Ni(C, b === "/" ? decodeURIComponent(Jr(O)) : Jr(gn().relative(decodeURIComponent(b), decodeURIComponent(O))), m);
          });
          return v ? T : T.filter((x) => x.basename && (x.type === "file" || x.filename !== g.replace(/\/$/, "")));
        }(c, po(r.remoteBasePath || r.remotePath), h, n.details, n.includeSelf);
        return n.glob && (f = function(p, s) {
          return p.filter((g) => Ge(g.filename, s, { matchBase: !0 }));
        }(f, n.glob)), Pr(o, f, n.details);
      });
    });
  });
});
function Si(r) {
  return function() {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try {
      return Promise.resolve(r.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
const Rc = Si(function(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = Le({ url: be(r.remoteURL, ve(e)), method: "GET", headers: { Accept: "text/plain" }, transformResponse: [Pc] }, r, n);
  return bn(Ce(i, r), function(o) {
    return Pe(r, o), bn(o.text(), function(a) {
      return Pr(o, a, n.details);
    });
  });
});
function bn(r, e, n) {
  return n ? e ? e(r) : r : (r && r.then || (r = Promise.resolve(r)), e ? r.then(e) : r);
}
const Cc = Si(function(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = Le({ url: be(r.remoteURL, ve(e)), method: "GET" }, r, n);
  return bn(Ce(i, r), function(o) {
    let a;
    return Pe(r, o), function(c, h) {
      var f = c();
      return f && f.then ? f.then(h) : h();
    }(function() {
      return bn(o.arrayBuffer(), function(c) {
        a = c;
      });
    }, function() {
      return Pr(o, a, n.details);
    });
  });
}), Lc = Si(function(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { format: i = "binary" } = n;
  if (i !== "binary" && i !== "text") throw new Ye({ info: { code: er.InvalidOutputFormat } }, `Invalid output format: ${i}`);
  return i === "text" ? Rc(r, e, n) : Cc(r, e, n);
}), Pc = (r) => r;
function $c(r, e) {
  let n = "";
  return e.format && e.indentBy.length > 0 && (n = `
`), Qs(r, e, "", n);
}
function Qs(r, e, n, i) {
  let o = "", a = !1;
  for (let c = 0; c < r.length; c++) {
    const h = r[c], f = kc(h);
    if (f === void 0) continue;
    let p = "";
    if (p = n.length === 0 ? f : `${n}.${f}`, f === e.textNodeName) {
      let v = h[f];
      Dc(p, e) || (v = e.tagValueProcessor(f, v), v = ea(v, e)), a && (o += i), o += v, a = !1;
      continue;
    }
    if (f === e.cdataPropName) {
      a && (o += i), o += `<![CDATA[${h[f][0][e.textNodeName]}]]>`, a = !1;
      continue;
    }
    if (f === e.commentPropName) {
      o += i + `<!--${h[f][0][e.textNodeName]}-->`, a = !0;
      continue;
    }
    if (f[0] === "?") {
      const v = Mo(h[":@"], e), b = f === "?xml" ? "" : i;
      let w = h[f][0][e.textNodeName];
      w = w.length !== 0 ? " " + w : "", o += b + `<${f}${w}${v}?>`, a = !0;
      continue;
    }
    let s = i;
    s !== "" && (s += e.indentBy);
    const g = i + `<${f}${Mo(h[":@"], e)}`, m = Qs(h[f], e, p, s);
    e.unpairedTags.indexOf(f) !== -1 ? e.suppressUnpairedNode ? o += g + ">" : o += g + "/>" : m && m.length !== 0 || !e.suppressEmptyNode ? m && m.endsWith(">") ? o += g + `>${m}${i}</${f}>` : (o += g + ">", m && i !== "" && (m.includes("/>") || m.includes("</")) ? o += i + e.indentBy + m + i : o += m, o += `</${f}>`) : o += g + "/>", a = !0;
  }
  return o;
}
function kc(r) {
  const e = Object.keys(r);
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    if (r.hasOwnProperty(i) && i !== ":@") return i;
  }
}
function Mo(r, e) {
  let n = "";
  if (r && !e.ignoreAttributes) for (let i in r) {
    if (!r.hasOwnProperty(i)) continue;
    let o = e.attributeValueProcessor(i, r[i]);
    o = ea(o, e), o === !0 && e.suppressBooleanAttributes ? n += ` ${i.substr(e.attributeNamePrefix.length)}` : n += ` ${i.substr(e.attributeNamePrefix.length)}="${o}"`;
  }
  return n;
}
function Dc(r, e) {
  let n = (r = r.substr(0, r.length - e.textNodeName.length - 1)).substr(r.lastIndexOf(".") + 1);
  for (let i in e.stopNodes) if (e.stopNodes[i] === r || e.stopNodes[i] === "*." + n) return !0;
  return !1;
}
function ea(r, e) {
  if (r && r.length > 0 && e.processEntities) for (let n = 0; n < e.entities.length; n++) {
    const i = e.entities[n];
    r = r.replace(i.regex, i.val);
  }
  return r;
}
const Mc = { attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, cdataPropName: !1, format: !1, indentBy: "  ", suppressEmptyNode: !1, suppressUnpairedNode: !0, suppressBooleanAttributes: !0, tagValueProcessor: function(r, e) {
  return e;
}, attributeValueProcessor: function(r, e) {
  return e;
}, preserveOrder: !1, commentPropName: !1, unpairedTags: [], entities: [{ regex: new RegExp("&", "g"), val: "&amp;" }, { regex: new RegExp(">", "g"), val: "&gt;" }, { regex: new RegExp("<", "g"), val: "&lt;" }, { regex: new RegExp("'", "g"), val: "&apos;" }, { regex: new RegExp('"', "g"), val: "&quot;" }], processEntities: !0, stopNodes: [], oneListGroup: !1 };
function Xt(r) {
  this.options = Object.assign({}, Mc, r), this.options.ignoreAttributes === !0 || this.options.attributesGroupName ? this.isAttribute = function() {
    return !1;
  } : (this.ignoreAttributesFn = qs(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = Bc), this.processTextOrObjNode = Fc, this.options.format ? (this.indentate = Uc, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
    return "";
  }, this.tagEndChar = ">", this.newLine = "");
}
function Fc(r, e, n, i) {
  const o = this.j2x(r, n + 1, i.concat(e));
  return r[this.options.textNodeName] !== void 0 && Object.keys(r).length === 1 ? this.buildTextValNode(r[this.options.textNodeName], e, o.attrStr, n) : this.buildObjectNode(o.val, e, o.attrStr, n);
}
function Uc(r) {
  return this.options.indentBy.repeat(r);
}
function Bc(r) {
  return !(!r.startsWith(this.options.attributeNamePrefix) || r === this.options.textNodeName) && r.substr(this.attrPrefixLen);
}
function jc(r) {
  return new Xt({ attributeNamePrefix: "@_", format: !0, ignoreAttributes: !1, suppressEmptyNode: !0 }).build(ta({ lockinfo: { "@_xmlns:d": "DAV:", lockscope: { exclusive: {} }, locktype: { write: {} }, owner: { href: r } } }, "d"));
}
function ta(r, e) {
  const n = { ...r };
  for (const i in n) n.hasOwnProperty(i) && (n[i] && typeof n[i] == "object" && i.indexOf(":") === -1 ? (n[`${e}:${i}`] = ta(n[i], e), delete n[i]) : /^@_/.test(i) === !1 && (n[`${e}:${i}`] = n[i], delete n[i]));
  return n;
}
function mi(r, e, n) {
  return n ? e ? e(r) : r : (r && r.then || (r = Promise.resolve(r)), e ? r.then(e) : r);
}
function ra(r) {
  return function() {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try {
      return Promise.resolve(r.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
Xt.prototype.build = function(r) {
  return this.options.preserveOrder ? $c(r, this.options) : (Array.isArray(r) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (r = { [this.options.arrayNodeName]: r }), this.j2x(r, 0, []).val);
}, Xt.prototype.j2x = function(r, e, n) {
  let i = "", o = "";
  const a = n.join(".");
  for (let c in r) if (Object.prototype.hasOwnProperty.call(r, c)) if (r[c] === void 0) this.isAttribute(c) && (o += "");
  else if (r[c] === null) this.isAttribute(c) || c === this.options.cdataPropName ? o += "" : c[0] === "?" ? o += this.indentate(e) + "<" + c + "?" + this.tagEndChar : o += this.indentate(e) + "<" + c + "/" + this.tagEndChar;
  else if (r[c] instanceof Date) o += this.buildTextValNode(r[c], c, "", e);
  else if (typeof r[c] != "object") {
    const h = this.isAttribute(c);
    if (h && !this.ignoreAttributesFn(h, a)) i += this.buildAttrPairStr(h, "" + r[c]);
    else if (!h) if (c === this.options.textNodeName) {
      let f = this.options.tagValueProcessor(c, "" + r[c]);
      o += this.replaceEntitiesValue(f);
    } else o += this.buildTextValNode(r[c], c, "", e);
  } else if (Array.isArray(r[c])) {
    const h = r[c].length;
    let f = "", p = "";
    for (let s = 0; s < h; s++) {
      const g = r[c][s];
      if (g !== void 0) if (g === null) c[0] === "?" ? o += this.indentate(e) + "<" + c + "?" + this.tagEndChar : o += this.indentate(e) + "<" + c + "/" + this.tagEndChar;
      else if (typeof g == "object") if (this.options.oneListGroup) {
        const m = this.j2x(g, e + 1, n.concat(c));
        f += m.val, this.options.attributesGroupName && g.hasOwnProperty(this.options.attributesGroupName) && (p += m.attrStr);
      } else f += this.processTextOrObjNode(g, c, e, n);
      else if (this.options.oneListGroup) {
        let m = this.options.tagValueProcessor(c, g);
        m = this.replaceEntitiesValue(m), f += m;
      } else f += this.buildTextValNode(g, c, "", e);
    }
    this.options.oneListGroup && (f = this.buildObjectNode(f, c, p, e)), o += f;
  } else if (this.options.attributesGroupName && c === this.options.attributesGroupName) {
    const h = Object.keys(r[c]), f = h.length;
    for (let p = 0; p < f; p++) i += this.buildAttrPairStr(h[p], "" + r[c][h[p]]);
  } else o += this.processTextOrObjNode(r[c], c, e, n);
  return { attrStr: i, val: o };
}, Xt.prototype.buildAttrPairStr = function(r, e) {
  return e = this.options.attributeValueProcessor(r, "" + e), e = this.replaceEntitiesValue(e), this.options.suppressBooleanAttributes && e === "true" ? " " + r : " " + r + '="' + e + '"';
}, Xt.prototype.buildObjectNode = function(r, e, n, i) {
  if (r === "") return e[0] === "?" ? this.indentate(i) + "<" + e + n + "?" + this.tagEndChar : this.indentate(i) + "<" + e + n + this.closeTag(e) + this.tagEndChar;
  {
    let o = "</" + e + this.tagEndChar, a = "";
    return e[0] === "?" && (a = "?", o = ""), !n && n !== "" || r.indexOf("<") !== -1 ? this.options.commentPropName !== !1 && e === this.options.commentPropName && a.length === 0 ? this.indentate(i) + `<!--${r}-->` + this.newLine : this.indentate(i) + "<" + e + n + a + this.tagEndChar + r + this.indentate(i) + o : this.indentate(i) + "<" + e + n + a + ">" + r + o;
  }
}, Xt.prototype.closeTag = function(r) {
  let e = "";
  return this.options.unpairedTags.indexOf(r) !== -1 ? this.options.suppressUnpairedNode || (e = "/") : e = this.options.suppressEmptyNode ? "/" : `></${r}`, e;
}, Xt.prototype.buildTextValNode = function(r, e, n, i) {
  if (this.options.cdataPropName !== !1 && e === this.options.cdataPropName) return this.indentate(i) + `<![CDATA[${r}]]>` + this.newLine;
  if (this.options.commentPropName !== !1 && e === this.options.commentPropName) return this.indentate(i) + `<!--${r}-->` + this.newLine;
  if (e[0] === "?") return this.indentate(i) + "<" + e + n + "?" + this.tagEndChar;
  {
    let o = this.options.tagValueProcessor(e, r);
    return o = this.replaceEntitiesValue(o), o === "" ? this.indentate(i) + "<" + e + n + this.closeTag(e) + this.tagEndChar : this.indentate(i) + "<" + e + n + ">" + o + "</" + e + this.tagEndChar;
  }
}, Xt.prototype.replaceEntitiesValue = function(r) {
  if (r && r.length > 0 && this.options.processEntities) for (let e = 0; e < this.options.entities.length; e++) {
    const n = this.options.entities[e];
    r = r.replace(n.regex, n.val);
  }
  return r;
};
const Wc = ra(function(r, e, n) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = Le({ url: be(r.remoteURL, ve(e)), method: "UNLOCK", headers: { "Lock-Token": n } }, r, i);
  return mi(Ce(o, r), function(a) {
    if (Pe(r, a), a.status !== 204 && a.status !== 200) throw xi(a);
  });
}), Gc = ra(function(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { refreshToken: i, timeout: o = zc } = n, a = { Accept: "text/plain,application/xml", Timeout: o };
  i && (a.If = i);
  const c = Le({ url: be(r.remoteURL, ve(e)), method: "LOCK", headers: a, data: jc(r.contactHref) }, r, n);
  return mi(Ce(c, r), function(h) {
    return Pe(r, h), mi(h.text(), function(f) {
      const p = (m = f, new Ys({ removeNSPrefix: !0, parseAttributeValue: !0, parseTagValue: !0 }).parse(m)), s = Ut().get(p, "prop.lockdiscovery.activelock.locktoken.href"), g = Ut().get(p, "prop.lockdiscovery.activelock.timeout");
      var m;
      if (!s) throw xi(h, "No lock token received: ");
      return { token: s, serverTimeout: g };
    });
  });
}), zc = "Infinite, Second-4100000000";
function Yn(r, e, n) {
  return n ? e ? e(r) : r : (r && r.then || (r = Promise.resolve(r)), e ? r.then(e) : r);
}
const Vc = /* @__PURE__ */ function(r) {
  return function() {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try {
      return Promise.resolve(r.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = e.path || "/", i = Le({ url: be(r.remoteURL, n), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, r, e);
  return Yn(Ce(i, r), function(o) {
    return Pe(r, o), Yn(o.text(), function(a) {
      return Yn(xn(a, r.parsing), function(c) {
        const h = function(f) {
          try {
            const [p] = f.multistatus.response, { propstat: { prop: { "quota-used-bytes": s, "quota-available-bytes": g } } } = p;
            return s !== void 0 && g !== void 0 ? { used: parseInt(String(s), 10), available: vc(g) } : null;
          } catch {
          }
          return null;
        }(c);
        return Pr(o, h, e.details);
      });
    });
  });
});
function Zn(r, e, n) {
  return n ? e ? e(r) : r : (r && r.then || (r = Promise.resolve(r)), e ? r.then(e) : r);
}
const qc = /* @__PURE__ */ function(r) {
  return function() {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try {
      return Promise.resolve(r.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { details: i = !1 } = n, o = Le({ url: be(r.remoteURL, ve(e)), method: "SEARCH", headers: { Accept: "text/plain,application/xml", "Content-Type": r.headers["Content-Type"] || "application/xml; charset=utf-8" } }, r, n);
  return Zn(Ce(o, r), function(a) {
    return Pe(r, a), Zn(a.text(), function(c) {
      return Zn(xn(c, r.parsing), function(h) {
        const f = function(p, s, g) {
          const m = { truncated: !1, results: [] };
          return m.truncated = p.multistatus.response.some((v) => {
            var b, w;
            return ((w = (v.status || ((b = v.propstat) == null ? void 0 : b.status)).split(" ", 3)) == null ? void 0 : w[1]) === "507" && v.href.replace(/\/$/, "").endsWith(ve(s).replace(/\/$/, ""));
          }), p.multistatus.response.forEach((v) => {
            if (v.propstat === void 0) return;
            const b = v.href.split("/").map(decodeURIComponent).join("/");
            m.results.push(Ni(v.propstat.prop, b, g));
          }), m;
        }(h, e, i);
        return Pr(a, f, i);
      });
    });
  });
}), Hc = /* @__PURE__ */ function(r) {
  return function() {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try {
      return Promise.resolve(r.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(r, e, n) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = Le({ url: be(r.remoteURL, ve(e)), method: "MOVE", headers: { Destination: be(r.remoteURL, ve(n)), Overwrite: i.overwrite === !1 ? "F" : "T" } }, r, i);
  return c = function(h) {
    Pe(r, h);
  }, (a = Ce(o, r)) && a.then || (a = Promise.resolve(a)), c ? a.then(c) : a;
  var a, c;
});
var Xc = ge(172);
function Yc(r) {
  if (Ds(r)) return r.byteLength;
  if (Ms(r)) return r.length;
  if (typeof r == "string") return (0, Xc.d)(r);
  throw new Ye({ info: { code: er.DataTypeNoLength } }, "Cannot calculate data length: Invalid type");
}
const Zc = /* @__PURE__ */ function(r) {
  return function() {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try {
      return Promise.resolve(r.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(r, e, n) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const { contentLength: o = !0, overwrite: a = !0 } = i, c = { "Content-Type": "application/octet-stream" };
  o === !1 || (c["Content-Length"] = typeof o == "number" ? `${o}` : `${Yc(n)}`), a || (c["If-None-Match"] = "*");
  const h = Le({ url: be(r.remoteURL, ve(e)), method: "PUT", headers: c, data: n }, r, i);
  return p = function(s) {
    try {
      Pe(r, s);
    } catch (g) {
      const m = g;
      if (m.status !== 412 || a) throw m;
      return !1;
    }
    return !0;
  }, (f = Ce(h, r)) && f.then || (f = Promise.resolve(f)), p ? f.then(p) : f;
  var f, p;
}), na = /* @__PURE__ */ function(r) {
  return function() {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try {
      return Promise.resolve(r.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = Le({ url: be(r.remoteURL, ve(e)), method: "OPTIONS" }, r, n);
  return a = function(c) {
    try {
      Pe(r, c);
    } catch (h) {
      throw h;
    }
    return { compliance: (c.headers.get("DAV") ?? "").split(",").map((h) => h.trim()), server: c.headers.get("Server") ?? "" };
  }, (o = Ce(i, r)) && o.then || (o = Promise.resolve(o)), a ? o.then(a) : o;
  var o, a;
});
function Yr(r, e, n) {
  return n ? e ? e(r) : r : (r && r.then || (r = Promise.resolve(r)), e ? r.then(e) : r);
}
const Jc = Ri(function(r, e, n, i, o) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  if (n > i || n < 0) throw new Ye({ info: { code: er.InvalidUpdateRange } }, `Invalid update range ${n} for partial update`);
  const c = { "Content-Type": "application/octet-stream", "Content-Length": "" + (i - n + 1), "Content-Range": `bytes ${n}-${i}/*` }, h = Le({ url: be(r.remoteURL, ve(e)), method: "PUT", headers: c, data: o }, r, a);
  return Yr(Ce(h, r), function(f) {
    Pe(r, f);
  });
});
function Fo(r, e) {
  var n = r();
  return n && n.then ? n.then(e) : e(n);
}
const Kc = Ri(function(r, e, n, i, o) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  if (n > i || n < 0) throw new Ye({ info: { code: er.InvalidUpdateRange } }, `Invalid update range ${n} for partial update`);
  const c = { "Content-Type": "application/x-sabredav-partialupdate", "Content-Length": "" + (i - n + 1), "X-Update-Range": `bytes=${n}-${i}` }, h = Le({ url: be(r.remoteURL, ve(e)), method: "PATCH", headers: c, data: o }, r, a);
  return Yr(Ce(h, r), function(f) {
    Pe(r, f);
  });
});
function Ri(r) {
  return function() {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try {
      return Promise.resolve(r.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
const Qc = Ri(function(r, e, n, i, o) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  return Yr(na(r, e, a), function(c) {
    let h = !1;
    return Fo(function() {
      if (c.compliance.includes("sabredav-partialupdate")) return Yr(Kc(r, e, n, i, o, a), function(f) {
        return h = !0, f;
      });
    }, function(f) {
      let p = !1;
      return h ? f : Fo(function() {
        if (c.server.includes("Apache") && c.compliance.includes("<http://apache.org/dav/propset/fs/1>")) return Yr(Jc(r, e, n, i, o, a), function(s) {
          return p = !0, s;
        });
      }, function(s) {
        if (p) return s;
        throw new Ye({ info: { code: er.NotSupported } }, "Not supported");
      });
    });
  });
}), ef = "https://github.com/perry-mitchell/webdav-client/blob/master/LOCK_CONTACT.md";
function tf(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { authType: n = null, remoteBasePath: i, contactHref: o = ef, ha1: a, headers: c = {}, httpAgent: h, httpsAgent: f, password: p, token: s, username: g, withCredentials: m } = e;
  let v = n;
  v || (v = g || p ? nt.Password : nt.None);
  const b = { authType: v, remoteBasePath: i, contactHref: o, ha1: a, headers: Object.assign({}, c), httpAgent: h, httpsAgent: f, password: p, parsing: { attributeNamePrefix: e.attributeNamePrefix ?? "@", attributeParsers: [], tagParsers: [Zs] }, remotePath: ul(r), remoteURL: r, token: s, username: g, withCredentials: m };
  return Ps(b, g, p, s, a), { copyFile: (w, T, x) => Gl(b, w, T, x), createDirectory: (w, T) => gi(b, w, T), createReadStream: (w, T) => function(x, O) {
    let C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const L = new (Do()).PassThrough();
    return Ac(x, O, C).then(($) => {
      $.pipe(L);
    }).catch(($) => {
      L.emit("error", $);
    }), L;
  }(b, w, T), createWriteStream: (w, T, x) => function(O, C) {
    let L = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, $ = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Ic;
    const j = new (Do()).PassThrough(), B = {};
    L.overwrite === !1 && (B["If-None-Match"] = "*");
    const Y = Le({ url: be(O.remoteURL, ve(C)), method: "PUT", headers: B, data: j, maxRedirects: 0 }, O, L);
    return Ce(Y, O).then((H) => Pe(O, H)).then((H) => {
      setTimeout(() => {
        $(H);
      }, 0);
    }).catch((H) => {
      j.emit("error", H);
    }), j;
  }(b, w, T, x), customRequest: (w, T) => xc(b, w, T), deleteFile: (w, T) => Nc(b, w, T), exists: (w, T) => Oc(b, w, T), getDirectoryContents: (w, T) => Sc(b, w, T), getFileContents: (w, T) => Lc(b, w, T), getFileDownloadLink: (w) => function(T, x) {
    let O = be(T.remoteURL, ve(x));
    const C = /^https:/i.test(O) ? "https" : "http";
    switch (T.authType) {
      case nt.None:
        break;
      case nt.Password: {
        const L = mo(T.headers.Authorization.replace(/^Basic /i, "").trim());
        O = O.replace(/^https?:\/\//, `${C}://${L}@`);
        break;
      }
      default:
        throw new Ye({ info: { code: er.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${T.authType}`);
    }
    return O;
  }(b, w), getFileUploadLink: (w) => function(T, x) {
    let O = `${be(T.remoteURL, ve(x))}?Content-Type=application/octet-stream`;
    const C = /^https:/i.test(O) ? "https" : "http";
    switch (T.authType) {
      case nt.None:
        break;
      case nt.Password: {
        const L = mo(T.headers.Authorization.replace(/^Basic /i, "").trim());
        O = O.replace(/^https?:\/\//, `${C}://${L}@`);
        break;
      }
      default:
        throw new Ye({ info: { code: er.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${T.authType}`);
    }
    return O;
  }(b, w), getHeaders: () => Object.assign({}, b.headers), getQuota: (w) => Vc(b, w), lock: (w, T) => Gc(b, w, T), moveFile: (w, T, x) => Hc(b, w, T, x), putFileContents: (w, T, x) => Zc(b, w, T, x), partialUpdateFileContents: (w, T, x, O, C) => Qc(b, w, T, x, O, C), getDAVCompliance: (w) => na(b, w), search: (w, T) => qc(b, w, T), setHeaders: (w) => {
    b.headers = Object.assign({}, w);
  }, stat: (w, T) => Oi(b, w, T), unlock: (w, T, x) => Wc(b, w, T, x), registerAttributeParser: (w) => {
    b.parsing.attributeParsers.push(w);
  }, registerTagParser: (w) => {
    b.parsing.tagParsers.push(w);
  } };
}
/*!
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
function rf(r = "") {
  let e = We.NONE;
  return r && (r.includes("G") && (e |= We.READ), r.includes("W") && (e |= We.WRITE), r.includes("CK") && (e |= We.CREATE), r.includes("NV") && (e |= We.UPDATE), r.includes("D") && (e |= We.DELETE), r.includes("R") && (e |= We.SHARE)), e;
}
const nf = [
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
], of = {
  d: "DAV:",
  nc: "http://nextcloud.org/ns",
  oc: "http://owncloud.org/ns",
  ocs: "http://open-collaboration-services.org/ns"
};
function sf() {
  return _e.davProperties ?? (_e.davProperties = [...nf]), _e.davProperties.map((r) => `<${r} />`).join(" ");
}
function af() {
  return _e.davNamespaces ?? (_e.davNamespaces = { ...of }), Object.keys(_e.davNamespaces).map((r) => {
    var e;
    return `xmlns:${r}="${(e = _e.davNamespaces) == null ? void 0 : e[r]}"`;
  }).join(" ");
}
function uf() {
  return `<?xml version="1.0"?>
		<d:propfind ${af()}>
			<d:prop>
				${sf()}
			</d:prop>
		</d:propfind>`;
}
function lf() {
  var r;
  return Ti() ? `/files/${nl()}` : `/files/${(r = _i()) == null ? void 0 : r.uid}`;
}
const ia = lf();
function cf() {
  const r = Nu("dav");
  return Ti() ? r.replace("remote.php", "public.php") : r;
}
const oa = cf();
function ff(r = oa, e = {}) {
  const n = tf(r, { headers: e });
  function i(a) {
    n.setHeaders({
      ...e,
      // Add this so the server knows it is an request from the browser
      "X-Requested-With": "XMLHttpRequest",
      // Inject user auth
      requesttoken: a ?? ""
    });
  }
  return du(i), i(pu()), $s().patch("fetch", (a, c) => {
    const h = c.headers;
    return h != null && h.method && (c.method = h.method, delete h.method), fetch(a, c);
  }), n;
}
function hf(r, e = ia, n = oa) {
  var g, m;
  let i = (g = _i()) == null ? void 0 : g.uid;
  if (Ti())
    i = i ?? "anonymous";
  else if (!i)
    throw new Error("No user id found");
  const o = r.props, a = rf(o == null ? void 0 : o.permissions), c = String((o == null ? void 0 : o["owner-id"]) || i), h = o.fileid || 0, f = new Date(Date.parse(r.lastmod)), p = new Date(Date.parse(o.creationdate)), s = {
    id: h,
    source: `${n}${r.filename}`,
    mtime: !isNaN(f.getTime()) && f.getTime() !== 0 ? f : void 0,
    crtime: !isNaN(p.getTime()) && p.getTime() !== 0 ? p : void 0,
    mime: r.mime || "application/octet-stream",
    // Manually cast to work around for https://github.com/perry-mitchell/webdav-client/pull/380
    displayname: o.displayname !== void 0 ? String(o.displayname) : void 0,
    size: (o == null ? void 0 : o.size) || Number.parseInt(o.getcontentlength || "0"),
    // The fileid is set to -1 for failed requests
    status: h < 0 ? _s.FAILED : void 0,
    permissions: a,
    owner: c,
    root: e,
    attributes: {
      ...r,
      ...o,
      hasPreview: o == null ? void 0 : o["has-preview"]
    }
  };
  return (m = s.attributes) == null || delete m.props, r.type === "file" ? new Tu(s) : new Au(s);
}
class ut {
  static getFileConfig({
    name: e,
    url: n,
    downloadUrl: i,
    dir: o,
    onCreate: a,
    fileModifiedTime: c,
    isNew: h,
    isLoaded: f,
    sameWindow: p,
    skipConfirmation: s,
    permissions: g,
    existingContents: m,
    templateName: v,
    isPublicLink: b
  } = {}) {
    return {
      name: e || "?",
      downloadUrl: i || "",
      url: n ? rt(n) : "",
      dir: o || "",
      onCreate: a,
      fileModifiedTime: c || null,
      isNew: h || !1,
      isLoaded: f || !1,
      sameWindow: p || !1,
      skipConfirmation: s || !1,
      permissions: g || We.NONE,
      existingContents: m,
      templateName: v,
      isPublicLink: b || !1
    };
  }
  static async load({ fileName: e, dir: n } = {}) {
    const i = await window.fetch(
      `${window.OC.generateUrl("/apps/files_linkeditor/ajax/loadfile")}?filename=${encodeURIComponent(
        e
      )}&dir=${encodeURIComponent(n)}`,
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
    const n = await window.fetch(e, {
      method: "GET",
      headers: {
        requesttoken: window.OC.requestToken
      }
    });
    if (n && n.ok)
      return { filecontents: await n.text() };
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async save({ fileContent: e, name: n, dir: i } = {}) {
    let o = `${i}${n}`;
    i !== "/" && (o = `${i}/${n}`);
    const a = ff(), c = `${ia}${o}`;
    try {
      if (await a.putFileContents(c, e, { overwrite: !0 })) {
        const f = await a.stat(c, { details: !0, data: uf() });
        return cu("files:node:created", hf(f.data)), !0;
      }
    } catch (h) {
      console.error(h);
    }
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static userCanEdit(e) {
    var n, i, o, a;
    return window.FileList && window.OC && window.OC.currentUser && (window.OC.PERMISSION_ALL === ((i = (n = window.FileList) == null ? void 0 : n.getDirectoryPermissions) == null ? void 0 : i.call(n)) || window.OC.PERMISSION_UPDATE === ((a = (o = window.FileList) == null ? void 0 : o.getDirectoryPermissions) == null ? void 0 : a.call(o))) || e >= We.WRITE;
  }
}
const $t = us(""), cr = us(ut.getFileConfig());
function Uo(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "You are about to visit:") + ""
  ), i, o, a, c, h = (
    /*file*/
    r[0].url + ""
  ), f, p, s;
  return {
    c() {
      e = ie("p"), i = ze(n), o = Ee(), a = ie("em"), c = ie("a"), f = ze(h), z(c, "href", p = rt(
        /*file*/
        r[0].url
      )), z(c, "target", s = /*file*/
      r[0].sameWindow ? "_self" : "_blank"), z(e, "class", "urldisplay");
    },
    m(g, m) {
      pe(g, e, m), Z(e, i), Z(e, o), Z(e, a), Z(a, c), Z(c, f);
    },
    p(g, m) {
      m & /*file*/
      1 && h !== (h = /*file*/
      g[0].url + "") && yi(f, h), m & /*file*/
      1 && p !== (p = rt(
        /*file*/
        g[0].url
      )) && z(c, "href", p), m & /*file*/
      1 && s !== (s = /*file*/
      g[0].sameWindow ? "_self" : "_blank") && z(c, "target", s);
    },
    d(g) {
      g && fe(e);
    }
  };
}
function Bo(r) {
  let e = ut.userCanEdit(
    /*file*/
    r[0].permissions
  ) && !/*file*/
  r[0].isPublicLink, n, i, o = (
    /*t*/
    r[2]("files_linkeditor", "Visit link") + ""
  ), a, c, h, f = e && jo(r);
  return {
    c() {
      f && f.c(), n = Ee(), i = ie("a"), a = ze(o), z(i, "href", c = rt(
        /*file*/
        r[0].url
      )), z(i, "target", h = /*file*/
      r[0].sameWindow ? "_self" : "_blank"), z(i, "class", "button primary");
    },
    m(p, s) {
      f && f.m(p, s), pe(p, n, s), pe(p, i, s), Z(i, a);
    },
    p(p, s) {
      s & /*file*/
      1 && (e = ut.userCanEdit(
        /*file*/
        p[0].permissions
      ) && !/*file*/
      p[0].isPublicLink), e ? f ? f.p(p, s) : (f = jo(p), f.c(), f.m(n.parentNode, n)) : f && (f.d(1), f = null), s & /*file*/
      1 && c !== (c = rt(
        /*file*/
        p[0].url
      )) && z(i, "href", c), s & /*file*/
      1 && h !== (h = /*file*/
      p[0].sameWindow ? "_self" : "_blank") && z(i, "target", h);
    },
    d(p) {
      p && (fe(n), fe(i)), f && f.d(p);
    }
  };
}
function jo(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "Edit link") + ""
  ), i, o, a;
  return {
    c() {
      e = ie("a"), i = ze(n), z(e, "href", window.location.href), z(e, "class", "button");
    },
    m(c, h) {
      pe(c, e, h), Z(e, i), o || (a = ct(e, "click", Qt(
        /*click_handler_1*/
        r[4]
      )), o = !0);
    },
    p: Jt,
    d(c) {
      c && fe(e), o = !1, a();
    }
  };
}
function pf(r) {
  let e, n, i = (
    /*file*/
    r[0].name + ""
  ), o, a, c, h, f, p = (
    /*t*/
    r[2]("files_linkeditor", "Cancel") + ""
  ), s, g, m, v, b = !/*loading*/
  r[1] && Uo(r), w = !/*loading*/
  r[1] && Bo(r);
  return {
    c() {
      e = ie("div"), n = ie("h3"), o = ze(i), a = Ee(), b && b.c(), c = Ee(), h = ie("div"), f = ie("a"), s = ze(p), g = Ee(), w && w.c(), z(e, "class", "edit push-bottom"), z(f, "href", window.location.href), z(f, "class", "button"), z(h, "class", "oc-dialog-buttonrow twobuttons");
    },
    m(T, x) {
      pe(T, e, x), Z(e, n), Z(n, o), Z(e, a), b && b.m(e, null), pe(T, c, x), pe(T, h, x), Z(h, f), Z(f, s), Z(h, g), w && w.m(h, null), m || (v = ct(f, "click", Qt(
        /*click_handler*/
        r[3]
      )), m = !0);
    },
    p(T, x) {
      x & /*file*/
      1 && i !== (i = /*file*/
      T[0].name + "") && yi(o, i), /*loading*/
      T[1] ? b && (b.d(1), b = null) : b ? b.p(T, x) : (b = Uo(T), b.c(), b.m(e, null)), /*loading*/
      T[1] ? w && (w.d(1), w = null) : w ? w.p(T, x) : (w = Bo(T), w.c(), w.m(h, null));
    },
    d(T) {
      T && (fe(e), fe(c), fe(h)), b && b.d(), w && w.d(), m = !1, v();
    }
  };
}
function df(r) {
  let e, n;
  return e = new Ei({
    props: {
      loading: (
        /*loading*/
        r[1]
      ),
      $$slots: { default: [pf] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      Lr(e.$$.fragment);
    },
    m(i, o) {
      gr(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = {};
      o & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), o & /*$$scope, file, loading*/
      67 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (Ue(e.$$.fragment, i), n = !0);
    },
    o(i) {
      lt(e.$$.fragment, i), n = !1;
    },
    d(i) {
      mr(e, i);
    }
  };
}
function gf(r, e, n) {
  let i, o;
  const a = window.t;
  let c;
  _n(() => {
    c = cr.subscribe(async (p) => {
      if (n(0, i = p), i && i.isLoaded) {
        if (n(1, o = !1), !i.url) {
          OC.dialogs.alert(a("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."), a("files_linkeditor", "A slight problem"));
          return;
        }
        const s = i.isPublicLink && window.location.toString().includes("openfile=true");
        i.skipConfirmation && i.sameWindow && !s && (window.location.href = i.url, $t.update(() => "none"));
      }
    });
  }), Tn(() => {
    c();
  });
  const h = () => {
    $t.update(() => "none");
  }, f = () => {
    $t.update(() => "edit");
  };
  return n(0, i = ut.getFileConfig()), n(1, o = !0), [i, o, a, h, f];
}
class mf extends en {
  constructor(e) {
    super(), Qr(this, e, gf, df, Cr, {});
  }
}
var sa = { exports: {} };
(function(r) {
  var e = function(n) {
    var i = 1e7, o = 7, a = 9007199254740992, c = b(a), h = "0123456789abcdefghijklmnopqrstuvwxyz", f = typeof BigInt == "function";
    function p(y, _, I, R) {
      return typeof y > "u" ? p[0] : typeof _ < "u" ? +_ == 10 && !I ? V(y) : vt(y, _, I, R) : V(y);
    }
    function s(y, _) {
      this.value = y, this.sign = _, this.isSmall = !1;
    }
    s.prototype = Object.create(p.prototype);
    function g(y) {
      this.value = y, this.sign = y < 0, this.isSmall = !0;
    }
    g.prototype = Object.create(p.prototype);
    function m(y) {
      this.value = y;
    }
    m.prototype = Object.create(p.prototype);
    function v(y) {
      return -9007199254740992 < y && y < a;
    }
    function b(y) {
      return y < 1e7 ? [y] : y < 1e14 ? [y % 1e7, Math.floor(y / 1e7)] : [y % 1e7, Math.floor(y / 1e7) % 1e7, Math.floor(y / 1e14)];
    }
    function w(y) {
      T(y);
      var _ = y.length;
      if (_ < 4 && De(y, c) < 0)
        switch (_) {
          case 0:
            return 0;
          case 1:
            return y[0];
          case 2:
            return y[0] + y[1] * i;
          default:
            return y[0] + (y[1] + y[2] * i) * i;
        }
      return y;
    }
    function T(y) {
      for (var _ = y.length; y[--_] === 0; ) ;
      y.length = _ + 1;
    }
    function x(y) {
      for (var _ = new Array(y), I = -1; ++I < y; )
        _[I] = 0;
      return _;
    }
    function O(y) {
      return y > 0 ? Math.floor(y) : Math.ceil(y);
    }
    function C(y, _) {
      var I = y.length, R = _.length, d = new Array(I), u = 0, l = i, E, A;
      for (A = 0; A < R; A++)
        E = y[A] + _[A] + u, u = E >= l ? 1 : 0, d[A] = E - u * l;
      for (; A < I; )
        E = y[A] + u, u = E === l ? 1 : 0, d[A++] = E - u * l;
      return u > 0 && d.push(u), d;
    }
    function L(y, _) {
      return y.length >= _.length ? C(y, _) : C(_, y);
    }
    function $(y, _) {
      var I = y.length, R = new Array(I), d = i, u, l;
      for (l = 0; l < I; l++)
        u = y[l] - d + _, _ = Math.floor(u / d), R[l] = u - _ * d, _ += 1;
      for (; _ > 0; )
        R[l++] = _ % d, _ = Math.floor(_ / d);
      return R;
    }
    s.prototype.add = function(y) {
      var _ = V(y);
      if (this.sign !== _.sign)
        return this.subtract(_.negate());
      var I = this.value, R = _.value;
      return _.isSmall ? new s($(I, Math.abs(R)), this.sign) : new s(L(I, R), this.sign);
    }, s.prototype.plus = s.prototype.add, g.prototype.add = function(y) {
      var _ = V(y), I = this.value;
      if (I < 0 !== _.sign)
        return this.subtract(_.negate());
      var R = _.value;
      if (_.isSmall) {
        if (v(I + R)) return new g(I + R);
        R = b(Math.abs(R));
      }
      return new s($(R, Math.abs(I)), I < 0);
    }, g.prototype.plus = g.prototype.add, m.prototype.add = function(y) {
      return new m(this.value + V(y).value);
    }, m.prototype.plus = m.prototype.add;
    function j(y, _) {
      var I = y.length, R = _.length, d = new Array(I), u = 0, l = i, E, A;
      for (E = 0; E < R; E++)
        A = y[E] - u - _[E], A < 0 ? (A += l, u = 1) : u = 0, d[E] = A;
      for (E = R; E < I; E++) {
        if (A = y[E] - u, A < 0) A += l;
        else {
          d[E++] = A;
          break;
        }
        d[E] = A;
      }
      for (; E < I; E++)
        d[E] = y[E];
      return T(d), d;
    }
    function B(y, _, I) {
      var R;
      return De(y, _) >= 0 ? R = j(y, _) : (R = j(_, y), I = !I), R = w(R), typeof R == "number" ? (I && (R = -R), new g(R)) : new s(R, I);
    }
    function Y(y, _, I) {
      var R = y.length, d = new Array(R), u = -_, l = i, E, A;
      for (E = 0; E < R; E++)
        A = y[E] + u, u = Math.floor(A / l), A %= l, d[E] = A < 0 ? A + l : A;
      return d = w(d), typeof d == "number" ? (I && (d = -d), new g(d)) : new s(d, I);
    }
    s.prototype.subtract = function(y) {
      var _ = V(y);
      if (this.sign !== _.sign)
        return this.add(_.negate());
      var I = this.value, R = _.value;
      return _.isSmall ? Y(I, Math.abs(R), this.sign) : B(I, R, this.sign);
    }, s.prototype.minus = s.prototype.subtract, g.prototype.subtract = function(y) {
      var _ = V(y), I = this.value;
      if (I < 0 !== _.sign)
        return this.add(_.negate());
      var R = _.value;
      return _.isSmall ? new g(I - R) : Y(R, Math.abs(I), I >= 0);
    }, g.prototype.minus = g.prototype.subtract, m.prototype.subtract = function(y) {
      return new m(this.value - V(y).value);
    }, m.prototype.minus = m.prototype.subtract, s.prototype.negate = function() {
      return new s(this.value, !this.sign);
    }, g.prototype.negate = function() {
      var y = this.sign, _ = new g(-this.value);
      return _.sign = !y, _;
    }, m.prototype.negate = function() {
      return new m(-this.value);
    }, s.prototype.abs = function() {
      return new s(this.value, !1);
    }, g.prototype.abs = function() {
      return new g(Math.abs(this.value));
    }, m.prototype.abs = function() {
      return new m(this.value >= 0 ? this.value : -this.value);
    };
    function H(y, _) {
      var I = y.length, R = _.length, d = I + R, u = x(d), l = i, E, A, S, P, M;
      for (S = 0; S < I; ++S) {
        P = y[S];
        for (var G = 0; G < R; ++G)
          M = _[G], E = P * M + u[S + G], A = Math.floor(E / l), u[S + G] = E - A * l, u[S + G + 1] += A;
      }
      return T(u), u;
    }
    function ue(y, _) {
      var I = y.length, R = new Array(I), d = i, u = 0, l, E;
      for (E = 0; E < I; E++)
        l = y[E] * _ + u, u = Math.floor(l / d), R[E] = l - u * d;
      for (; u > 0; )
        R[E++] = u % d, u = Math.floor(u / d);
      return R;
    }
    function U(y, _) {
      for (var I = []; _-- > 0; ) I.push(0);
      return I.concat(y);
    }
    function J(y, _) {
      var I = Math.max(y.length, _.length);
      if (I <= 30) return H(y, _);
      I = Math.ceil(I / 2);
      var R = y.slice(I), d = y.slice(0, I), u = _.slice(I), l = _.slice(0, I), E = J(d, l), A = J(R, u), S = J(L(d, R), L(l, u)), P = L(L(E, U(j(j(S, E), A), I)), U(A, 2 * I));
      return T(P), P;
    }
    function k(y, _) {
      return -0.012 * y - 0.012 * _ + 15e-6 * y * _ > 0;
    }
    s.prototype.multiply = function(y) {
      var _ = V(y), I = this.value, R = _.value, d = this.sign !== _.sign, u;
      if (_.isSmall) {
        if (R === 0) return p[0];
        if (R === 1) return this;
        if (R === -1) return this.negate();
        if (u = Math.abs(R), u < i)
          return new s(ue(I, u), d);
        R = b(u);
      }
      return k(I.length, R.length) ? new s(J(I, R), d) : new s(H(I, R), d);
    }, s.prototype.times = s.prototype.multiply;
    function K(y, _, I) {
      return y < i ? new s(ue(_, y), I) : new s(H(_, b(y)), I);
    }
    g.prototype._multiplyBySmall = function(y) {
      return v(y.value * this.value) ? new g(y.value * this.value) : K(Math.abs(y.value), b(Math.abs(this.value)), this.sign !== y.sign);
    }, s.prototype._multiplyBySmall = function(y) {
      return y.value === 0 ? p[0] : y.value === 1 ? this : y.value === -1 ? this.negate() : K(Math.abs(y.value), this.value, this.sign !== y.sign);
    }, g.prototype.multiply = function(y) {
      return V(y)._multiplyBySmall(this);
    }, g.prototype.times = g.prototype.multiply, m.prototype.multiply = function(y) {
      return new m(this.value * V(y).value);
    }, m.prototype.times = m.prototype.multiply;
    function le(y) {
      var _ = y.length, I = x(_ + _), R = i, d, u, l, E, A;
      for (l = 0; l < _; l++) {
        E = y[l], u = 0 - E * E;
        for (var S = l; S < _; S++)
          A = y[S], d = 2 * (E * A) + I[l + S] + u, u = Math.floor(d / R), I[l + S] = d - u * R;
        I[l + _] = u;
      }
      return T(I), I;
    }
    s.prototype.square = function() {
      return new s(le(this.value), !1);
    }, g.prototype.square = function() {
      var y = this.value * this.value;
      return v(y) ? new g(y) : new s(le(b(Math.abs(this.value))), !1);
    }, m.prototype.square = function(y) {
      return new m(this.value * this.value);
    };
    function de(y, _) {
      var I = y.length, R = _.length, d = i, u = x(_.length), l = _[R - 1], E = Math.ceil(d / (2 * l)), A = ue(y, E), S = ue(_, E), P, M, G, ee, Q, ne, $r;
      for (A.length <= I && A.push(0), S.push(0), l = S[R - 1], M = I - R; M >= 0; M--) {
        for (P = d - 1, A[M + R] !== l && (P = Math.floor((A[M + R] * d + A[M + R - 1]) / l)), G = 0, ee = 0, ne = S.length, Q = 0; Q < ne; Q++)
          G += P * S[Q], $r = Math.floor(G / d), ee += A[M + Q] - (G - $r * d), G = $r, ee < 0 ? (A[M + Q] = ee + d, ee = -1) : (A[M + Q] = ee, ee = 0);
        for (; ee !== 0; ) {
          for (P -= 1, G = 0, Q = 0; Q < ne; Q++)
            G += A[M + Q] - d + S[Q], G < 0 ? (A[M + Q] = G + d, G = 0) : (A[M + Q] = G, G = 1);
          ee += G;
        }
        u[M] = P;
      }
      return A = he(A, E)[0], [w(u), w(A)];
    }
    function oe(y, _) {
      for (var I = y.length, R = _.length, d = [], u = [], l = i, E, A, S, P, M; I; ) {
        if (u.unshift(y[--I]), T(u), De(u, _) < 0) {
          d.push(0);
          continue;
        }
        A = u.length, S = u[A - 1] * l + u[A - 2], P = _[R - 1] * l + _[R - 2], A > R && (S = (S + 1) * l), E = Math.ceil(S / P);
        do {
          if (M = ue(_, E), De(M, u) <= 0) break;
          E--;
        } while (E);
        d.push(E), u = j(u, M);
      }
      return d.reverse(), [w(d), w(u)];
    }
    function he(y, _) {
      var I = y.length, R = x(I), d = i, u, l, E, A;
      for (E = 0, u = I - 1; u >= 0; --u)
        A = E * d + y[u], l = O(A / _), E = A - l * _, R[u] = l | 0;
      return [R, E | 0];
    }
    function ke(y, _) {
      var I, R = V(_);
      if (f)
        return [new m(y.value / R.value), new m(y.value % R.value)];
      var d = y.value, u = R.value, l;
      if (u === 0) throw new Error("Cannot divide by zero");
      if (y.isSmall)
        return R.isSmall ? [new g(O(d / u)), new g(d % u)] : [p[0], y];
      if (R.isSmall) {
        if (u === 1) return [y, p[0]];
        if (u == -1) return [y.negate(), p[0]];
        var E = Math.abs(u);
        if (E < i) {
          I = he(d, E), l = w(I[0]);
          var A = I[1];
          return y.sign && (A = -A), typeof l == "number" ? (y.sign !== R.sign && (l = -l), [new g(l), new g(A)]) : [new s(l, y.sign !== R.sign), new g(A)];
        }
        u = b(E);
      }
      var S = De(d, u);
      if (S === -1) return [p[0], y];
      if (S === 0) return [p[y.sign === R.sign ? 1 : -1], p[0]];
      d.length + u.length <= 200 ? I = de(d, u) : I = oe(d, u), l = I[0];
      var P = y.sign !== R.sign, M = I[1], G = y.sign;
      return typeof l == "number" ? (P && (l = -l), l = new g(l)) : l = new s(l, P), typeof M == "number" ? (G && (M = -M), M = new g(M)) : M = new s(M, G), [l, M];
    }
    s.prototype.divmod = function(y) {
      var _ = ke(this, y);
      return {
        quotient: _[0],
        remainder: _[1]
      };
    }, m.prototype.divmod = g.prototype.divmod = s.prototype.divmod, s.prototype.divide = function(y) {
      return ke(this, y)[0];
    }, m.prototype.over = m.prototype.divide = function(y) {
      return new m(this.value / V(y).value);
    }, g.prototype.over = g.prototype.divide = s.prototype.over = s.prototype.divide, s.prototype.mod = function(y) {
      return ke(this, y)[1];
    }, m.prototype.mod = m.prototype.remainder = function(y) {
      return new m(this.value % V(y).value);
    }, g.prototype.remainder = g.prototype.mod = s.prototype.remainder = s.prototype.mod, s.prototype.pow = function(y) {
      var _ = V(y), I = this.value, R = _.value, d, u, l;
      if (R === 0) return p[1];
      if (I === 0) return p[0];
      if (I === 1) return p[1];
      if (I === -1) return _.isEven() ? p[1] : p[-1];
      if (_.sign)
        return p[0];
      if (!_.isSmall) throw new Error("The exponent " + _.toString() + " is too large.");
      if (this.isSmall && v(d = Math.pow(I, R)))
        return new g(O(d));
      for (u = this, l = p[1]; R & !0 && (l = l.times(u), --R), R !== 0; )
        R /= 2, u = u.square();
      return l;
    }, g.prototype.pow = s.prototype.pow, m.prototype.pow = function(y) {
      var _ = V(y), I = this.value, R = _.value, d = BigInt(0), u = BigInt(1), l = BigInt(2);
      if (R === d) return p[1];
      if (I === d) return p[0];
      if (I === u) return p[1];
      if (I === BigInt(-1)) return _.isEven() ? p[1] : p[-1];
      if (_.isNegative()) return new m(d);
      for (var E = this, A = p[1]; (R & u) === u && (A = A.times(E), --R), R !== d; )
        R /= l, E = E.square();
      return A;
    }, s.prototype.modPow = function(y, _) {
      if (y = V(y), _ = V(_), _.isZero()) throw new Error("Cannot take modPow with modulus 0");
      var I = p[1], R = this.mod(_);
      for (y.isNegative() && (y = y.multiply(p[-1]), R = R.modInv(_)); y.isPositive(); ) {
        if (R.isZero()) return p[0];
        y.isOdd() && (I = I.multiply(R).mod(_)), y = y.divide(2), R = R.square().mod(_);
      }
      return I;
    }, m.prototype.modPow = g.prototype.modPow = s.prototype.modPow;
    function De(y, _) {
      if (y.length !== _.length)
        return y.length > _.length ? 1 : -1;
      for (var I = y.length - 1; I >= 0; I--)
        if (y[I] !== _[I]) return y[I] > _[I] ? 1 : -1;
      return 0;
    }
    s.prototype.compareAbs = function(y) {
      var _ = V(y), I = this.value, R = _.value;
      return _.isSmall ? 1 : De(I, R);
    }, g.prototype.compareAbs = function(y) {
      var _ = V(y), I = Math.abs(this.value), R = _.value;
      return _.isSmall ? (R = Math.abs(R), I === R ? 0 : I > R ? 1 : -1) : -1;
    }, m.prototype.compareAbs = function(y) {
      var _ = this.value, I = V(y).value;
      return _ = _ >= 0 ? _ : -_, I = I >= 0 ? I : -I, _ === I ? 0 : _ > I ? 1 : -1;
    }, s.prototype.compare = function(y) {
      if (y === 1 / 0)
        return -1;
      if (y === -1 / 0)
        return 1;
      var _ = V(y), I = this.value, R = _.value;
      return this.sign !== _.sign ? _.sign ? 1 : -1 : _.isSmall ? this.sign ? -1 : 1 : De(I, R) * (this.sign ? -1 : 1);
    }, s.prototype.compareTo = s.prototype.compare, g.prototype.compare = function(y) {
      if (y === 1 / 0)
        return -1;
      if (y === -1 / 0)
        return 1;
      var _ = V(y), I = this.value, R = _.value;
      return _.isSmall ? I == R ? 0 : I > R ? 1 : -1 : I < 0 !== _.sign ? I < 0 ? -1 : 1 : I < 0 ? 1 : -1;
    }, g.prototype.compareTo = g.prototype.compare, m.prototype.compare = function(y) {
      if (y === 1 / 0)
        return -1;
      if (y === -1 / 0)
        return 1;
      var _ = this.value, I = V(y).value;
      return _ === I ? 0 : _ > I ? 1 : -1;
    }, m.prototype.compareTo = m.prototype.compare, s.prototype.equals = function(y) {
      return this.compare(y) === 0;
    }, m.prototype.eq = m.prototype.equals = g.prototype.eq = g.prototype.equals = s.prototype.eq = s.prototype.equals, s.prototype.notEquals = function(y) {
      return this.compare(y) !== 0;
    }, m.prototype.neq = m.prototype.notEquals = g.prototype.neq = g.prototype.notEquals = s.prototype.neq = s.prototype.notEquals, s.prototype.greater = function(y) {
      return this.compare(y) > 0;
    }, m.prototype.gt = m.prototype.greater = g.prototype.gt = g.prototype.greater = s.prototype.gt = s.prototype.greater, s.prototype.lesser = function(y) {
      return this.compare(y) < 0;
    }, m.prototype.lt = m.prototype.lesser = g.prototype.lt = g.prototype.lesser = s.prototype.lt = s.prototype.lesser, s.prototype.greaterOrEquals = function(y) {
      return this.compare(y) >= 0;
    }, m.prototype.geq = m.prototype.greaterOrEquals = g.prototype.geq = g.prototype.greaterOrEquals = s.prototype.geq = s.prototype.greaterOrEquals, s.prototype.lesserOrEquals = function(y) {
      return this.compare(y) <= 0;
    }, m.prototype.leq = m.prototype.lesserOrEquals = g.prototype.leq = g.prototype.lesserOrEquals = s.prototype.leq = s.prototype.lesserOrEquals, s.prototype.isEven = function() {
      return (this.value[0] & 1) === 0;
    }, g.prototype.isEven = function() {
      return (this.value & 1) === 0;
    }, m.prototype.isEven = function() {
      return (this.value & BigInt(1)) === BigInt(0);
    }, s.prototype.isOdd = function() {
      return (this.value[0] & 1) === 1;
    }, g.prototype.isOdd = function() {
      return (this.value & 1) === 1;
    }, m.prototype.isOdd = function() {
      return (this.value & BigInt(1)) === BigInt(1);
    }, s.prototype.isPositive = function() {
      return !this.sign;
    }, g.prototype.isPositive = function() {
      return this.value > 0;
    }, m.prototype.isPositive = g.prototype.isPositive, s.prototype.isNegative = function() {
      return this.sign;
    }, g.prototype.isNegative = function() {
      return this.value < 0;
    }, m.prototype.isNegative = g.prototype.isNegative, s.prototype.isUnit = function() {
      return !1;
    }, g.prototype.isUnit = function() {
      return Math.abs(this.value) === 1;
    }, m.prototype.isUnit = function() {
      return this.abs().value === BigInt(1);
    }, s.prototype.isZero = function() {
      return !1;
    }, g.prototype.isZero = function() {
      return this.value === 0;
    }, m.prototype.isZero = function() {
      return this.value === BigInt(0);
    }, s.prototype.isDivisibleBy = function(y) {
      var _ = V(y);
      return _.isZero() ? !1 : _.isUnit() ? !0 : _.compareAbs(2) === 0 ? this.isEven() : this.mod(_).isZero();
    }, m.prototype.isDivisibleBy = g.prototype.isDivisibleBy = s.prototype.isDivisibleBy;
    function se(y) {
      var _ = y.abs();
      if (_.isUnit()) return !1;
      if (_.equals(2) || _.equals(3) || _.equals(5)) return !0;
      if (_.isEven() || _.isDivisibleBy(3) || _.isDivisibleBy(5)) return !1;
      if (_.lesser(49)) return !0;
    }
    function Me(y, _) {
      for (var I = y.prev(), R = I, d = 0, u, l, E; R.isEven(); ) R = R.divide(2), d++;
      e: for (l = 0; l < _.length; l++)
        if (!y.lesser(_[l]) && (E = e(_[l]).modPow(R, y), !(E.isUnit() || E.equals(I)))) {
          for (u = d - 1; u != 0; u--) {
            if (E = E.square().mod(y), E.isUnit()) return !1;
            if (E.equals(I)) continue e;
          }
          return !1;
        }
      return !0;
    }
    s.prototype.isPrime = function(y) {
      var _ = se(this);
      if (_ !== n) return _;
      var I = this.abs(), R = I.bitLength();
      if (R <= 64)
        return Me(I, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
      for (var d = Math.log(2) * R.toJSNumber(), u = Math.ceil(y === !0 ? 2 * Math.pow(d, 2) : d), l = [], E = 0; E < u; E++)
        l.push(e(E + 2));
      return Me(I, l);
    }, m.prototype.isPrime = g.prototype.isPrime = s.prototype.isPrime, s.prototype.isProbablePrime = function(y, _) {
      var I = se(this);
      if (I !== n) return I;
      for (var R = this.abs(), d = y === n ? 5 : y, u = [], l = 0; l < d; l++)
        u.push(e.randBetween(2, R.minus(2), _));
      return Me(R, u);
    }, m.prototype.isProbablePrime = g.prototype.isProbablePrime = s.prototype.isProbablePrime, s.prototype.modInv = function(y) {
      for (var _ = e.zero, I = e.one, R = V(y), d = this.abs(), u, l, E; !d.isZero(); )
        u = R.divide(d), l = _, E = R, _ = I, R = d, I = l.subtract(u.multiply(I)), d = E.subtract(u.multiply(d));
      if (!R.isUnit()) throw new Error(this.toString() + " and " + y.toString() + " are not co-prime");
      return _.compare(0) === -1 && (_ = _.add(y)), this.isNegative() ? _.negate() : _;
    }, m.prototype.modInv = g.prototype.modInv = s.prototype.modInv, s.prototype.next = function() {
      var y = this.value;
      return this.sign ? Y(y, 1, this.sign) : new s($(y, 1), this.sign);
    }, g.prototype.next = function() {
      var y = this.value;
      return y + 1 < a ? new g(y + 1) : new s(c, !1);
    }, m.prototype.next = function() {
      return new m(this.value + BigInt(1));
    }, s.prototype.prev = function() {
      var y = this.value;
      return this.sign ? new s($(y, 1), !0) : Y(y, 1, this.sign);
    }, g.prototype.prev = function() {
      var y = this.value;
      return y - 1 > -9007199254740992 ? new g(y - 1) : new s(c, !0);
    }, m.prototype.prev = function() {
      return new m(this.value - BigInt(1));
    };
    for (var ae = [1]; 2 * ae[ae.length - 1] <= i; ) ae.push(2 * ae[ae.length - 1]);
    var ce = ae.length, X = ae[ce - 1];
    function it(y) {
      return Math.abs(y) <= i;
    }
    s.prototype.shiftLeft = function(y) {
      var _ = V(y).toJSNumber();
      if (!it(_))
        throw new Error(String(_) + " is too large for shifting.");
      if (_ < 0) return this.shiftRight(-_);
      var I = this;
      if (I.isZero()) return I;
      for (; _ >= ce; )
        I = I.multiply(X), _ -= ce - 1;
      return I.multiply(ae[_]);
    }, m.prototype.shiftLeft = g.prototype.shiftLeft = s.prototype.shiftLeft, s.prototype.shiftRight = function(y) {
      var _, I = V(y).toJSNumber();
      if (!it(I))
        throw new Error(String(I) + " is too large for shifting.");
      if (I < 0) return this.shiftLeft(-I);
      for (var R = this; I >= ce; ) {
        if (R.isZero() || R.isNegative() && R.isUnit()) return R;
        _ = ke(R, X), R = _[1].isNegative() ? _[0].prev() : _[0], I -= ce - 1;
      }
      return _ = ke(R, ae[I]), _[1].isNegative() ? _[0].prev() : _[0];
    }, m.prototype.shiftRight = g.prototype.shiftRight = s.prototype.shiftRight;
    function It(y, _, I) {
      _ = V(_);
      for (var R = y.isNegative(), d = _.isNegative(), u = R ? y.not() : y, l = d ? _.not() : _, E = 0, A = 0, S = null, P = null, M = []; !u.isZero() || !l.isZero(); )
        S = ke(u, X), E = S[1].toJSNumber(), R && (E = X - 1 - E), P = ke(l, X), A = P[1].toJSNumber(), d && (A = X - 1 - A), u = S[0], l = P[0], M.push(I(E, A));
      for (var G = I(R ? 1 : 0, d ? 1 : 0) !== 0 ? e(-1) : e(0), ee = M.length - 1; ee >= 0; ee -= 1)
        G = G.multiply(X).add(e(M[ee]));
      return G;
    }
    s.prototype.not = function() {
      return this.negate().prev();
    }, m.prototype.not = g.prototype.not = s.prototype.not, s.prototype.and = function(y) {
      return It(this, y, function(_, I) {
        return _ & I;
      });
    }, m.prototype.and = g.prototype.and = s.prototype.and, s.prototype.or = function(y) {
      return It(this, y, function(_, I) {
        return _ | I;
      });
    }, m.prototype.or = g.prototype.or = s.prototype.or, s.prototype.xor = function(y) {
      return It(this, y, function(_, I) {
        return _ ^ I;
      });
    }, m.prototype.xor = g.prototype.xor = s.prototype.xor;
    var ot = 1 << 30, tr = (i & -1e7) * (i & -1e7) | ot;
    function Et(y) {
      var _ = y.value, I = typeof _ == "number" ? _ | ot : typeof _ == "bigint" ? _ | BigInt(ot) : _[0] + _[1] * i | tr;
      return I & -I;
    }
    function ft(y, _) {
      if (_.compareTo(y) <= 0) {
        var I = ft(y, _.square(_)), R = I.p, d = I.e, u = R.multiply(_);
        return u.compareTo(y) <= 0 ? { p: u, e: d * 2 + 1 } : { p: R, e: d * 2 };
      }
      return { p: e(1), e: 0 };
    }
    s.prototype.bitLength = function() {
      var y = this;
      return y.compareTo(e(0)) < 0 && (y = y.negate().subtract(e(1))), y.compareTo(e(0)) === 0 ? e(0) : e(ft(y, e(2)).e).add(e(1));
    }, m.prototype.bitLength = g.prototype.bitLength = s.prototype.bitLength;
    function kt(y, _) {
      return y = V(y), _ = V(_), y.greater(_) ? y : _;
    }
    function st(y, _) {
      return y = V(y), _ = V(_), y.lesser(_) ? y : _;
    }
    function Dt(y, _) {
      if (y = V(y).abs(), _ = V(_).abs(), y.equals(_)) return y;
      if (y.isZero()) return _;
      if (_.isZero()) return y;
      for (var I = p[1], R, d; y.isEven() && _.isEven(); )
        R = st(Et(y), Et(_)), y = y.divide(R), _ = _.divide(R), I = I.multiply(R);
      for (; y.isEven(); )
        y = y.divide(Et(y));
      do {
        for (; _.isEven(); )
          _ = _.divide(Et(_));
        y.greater(_) && (d = _, _ = y, y = d), _ = _.subtract(y);
      } while (!_.isZero());
      return I.isUnit() ? y : y.multiply(I);
    }
    function ht(y, _) {
      return y = V(y).abs(), _ = V(_).abs(), y.divide(Dt(y, _)).multiply(_);
    }
    function pt(y, _, I) {
      y = V(y), _ = V(_);
      var R = I || Math.random, d = st(y, _), u = kt(y, _), l = u.subtract(d).add(1);
      if (l.isSmall) return d.add(Math.floor(R() * l));
      for (var E = Ke(l, i).value, A = [], S = !0, P = 0; P < E.length; P++) {
        var M = S ? E[P] + (P + 1 < E.length ? E[P + 1] / i : 0) : i, G = O(R() * M);
        A.push(G), G < E[P] && (S = !1);
      }
      return d.add(p.fromArray(A, i, !1));
    }
    var vt = function(y, _, I, R) {
      I = I || h, y = String(y), R || (y = y.toLowerCase(), I = I.toLowerCase());
      var d = y.length, u, l = Math.abs(_), E = {};
      for (u = 0; u < I.length; u++)
        E[I[u]] = u;
      for (u = 0; u < d; u++) {
        var A = y[u];
        if (A !== "-" && A in E && E[A] >= l) {
          if (A === "1" && l === 1) continue;
          throw new Error(A + " is not a valid digit in base " + _ + ".");
        }
      }
      _ = V(_);
      var S = [], P = y[0] === "-";
      for (u = P ? 1 : 0; u < y.length; u++) {
        var A = y[u];
        if (A in E) S.push(V(E[A]));
        else if (A === "<") {
          var M = u;
          do
            u++;
          while (y[u] !== ">" && u < y.length);
          S.push(V(y.slice(M + 1, u)));
        } else throw new Error(A + " is not a valid character");
      }
      return bt(S, _, P);
    };
    function bt(y, _, I) {
      var R = p[0], d = p[1], u;
      for (u = y.length - 1; u >= 0; u--)
        R = R.add(y[u].times(d)), d = d.times(_);
      return I ? R.negate() : R;
    }
    function zt(y, _) {
      return _ = _ || h, y < _.length ? _[y] : "<" + y + ">";
    }
    function Ke(y, _) {
      if (_ = e(_), _.isZero()) {
        if (y.isZero()) return { value: [0], isNegative: !1 };
        throw new Error("Cannot convert nonzero numbers to base 0.");
      }
      if (_.equals(-1)) {
        if (y.isZero()) return { value: [0], isNegative: !1 };
        if (y.isNegative())
          return {
            value: [].concat.apply(
              [],
              Array.apply(null, Array(-y.toJSNumber())).map(Array.prototype.valueOf, [1, 0])
            ),
            isNegative: !1
          };
        var I = Array.apply(null, Array(y.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
        return I.unshift([1]), {
          value: [].concat.apply([], I),
          isNegative: !1
        };
      }
      var R = !1;
      if (y.isNegative() && _.isPositive() && (R = !0, y = y.abs()), _.isUnit())
        return y.isZero() ? { value: [0], isNegative: !1 } : {
          value: Array.apply(null, Array(y.toJSNumber())).map(Number.prototype.valueOf, 1),
          isNegative: R
        };
      for (var d = [], u = y, l; u.isNegative() || u.compareAbs(_) >= 0; ) {
        l = u.divmod(_), u = l.quotient;
        var E = l.remainder;
        E.isNegative() && (E = _.minus(E).abs(), u = u.next()), d.push(E.toJSNumber());
      }
      return d.push(u.toJSNumber()), { value: d.reverse(), isNegative: R };
    }
    function rr(y, _, I) {
      var R = Ke(y, _);
      return (R.isNegative ? "-" : "") + R.value.map(function(d) {
        return zt(d, I);
      }).join("");
    }
    s.prototype.toArray = function(y) {
      return Ke(this, y);
    }, g.prototype.toArray = function(y) {
      return Ke(this, y);
    }, m.prototype.toArray = function(y) {
      return Ke(this, y);
    }, s.prototype.toString = function(y, _) {
      if (y === n && (y = 10), y !== 10 || _) return rr(this, y, _);
      for (var I = this.value, R = I.length, d = String(I[--R]), u = "0000000", l; --R >= 0; )
        l = String(I[R]), d += u.slice(l.length) + l;
      var E = this.sign ? "-" : "";
      return E + d;
    }, g.prototype.toString = function(y, _) {
      return y === n && (y = 10), y != 10 || _ ? rr(this, y, _) : String(this.value);
    }, m.prototype.toString = g.prototype.toString, m.prototype.toJSON = s.prototype.toJSON = g.prototype.toJSON = function() {
      return this.toString();
    }, s.prototype.valueOf = function() {
      return parseInt(this.toString(), 10);
    }, s.prototype.toJSNumber = s.prototype.valueOf, g.prototype.valueOf = function() {
      return this.value;
    }, g.prototype.toJSNumber = g.prototype.valueOf, m.prototype.valueOf = m.prototype.toJSNumber = function() {
      return parseInt(this.toString(), 10);
    };
    function nr(y) {
      if (v(+y)) {
        var _ = +y;
        if (_ === O(_))
          return f ? new m(BigInt(_)) : new g(_);
        throw new Error("Invalid integer: " + y);
      }
      var I = y[0] === "-";
      I && (y = y.slice(1));
      var R = y.split(/e/i);
      if (R.length > 2) throw new Error("Invalid integer: " + R.join("e"));
      if (R.length === 2) {
        var d = R[1];
        if (d[0] === "+" && (d = d.slice(1)), d = +d, d !== O(d) || !v(d)) throw new Error("Invalid integer: " + d + " is not a valid exponent.");
        var u = R[0], l = u.indexOf(".");
        if (l >= 0 && (d -= u.length - l - 1, u = u.slice(0, l) + u.slice(l + 1)), d < 0) throw new Error("Cannot include negative exponent part for integers");
        u += new Array(d + 1).join("0"), y = u;
      }
      var E = /^([0-9][0-9]*)$/.test(y);
      if (!E) throw new Error("Invalid integer: " + y);
      if (f)
        return new m(BigInt(I ? "-" + y : y));
      for (var A = [], S = y.length, P = o, M = S - P; S > 0; )
        A.push(+y.slice(M, S)), M -= P, M < 0 && (M = 0), S -= P;
      return T(A), new s(A, I);
    }
    function yr(y) {
      if (f)
        return new m(BigInt(y));
      if (v(y)) {
        if (y !== O(y)) throw new Error(y + " is not an integer.");
        return new g(y);
      }
      return nr(y.toString());
    }
    function V(y) {
      return typeof y == "number" ? yr(y) : typeof y == "string" ? nr(y) : typeof y == "bigint" ? new m(y) : y;
    }
    for (var me = 0; me < 1e3; me++)
      p[me] = V(me), me > 0 && (p[-me] = V(-me));
    return p.one = p[1], p.zero = p[0], p.minusOne = p[-1], p.max = kt, p.min = st, p.gcd = Dt, p.lcm = ht, p.isInstance = function(y) {
      return y instanceof s || y instanceof g || y instanceof m;
    }, p.randBetween = pt, p.fromArray = function(y, _, I) {
      return bt(y.map(V), V(_ || 10), I);
    }, p;
  }();
  r.hasOwnProperty("exports") && (r.exports = e);
})(sa);
var yf = sa.exports;
const wf = /* @__PURE__ */ vi(yf);
var aa = {}, Nn = {};
Nn.byteLength = bf;
Nn.toByteArray = Tf;
Nn.fromByteArray = xf;
var Pt = [], yt = [], Ef = typeof Uint8Array < "u" ? Uint8Array : Array, Jn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Tr = 0, vf = Jn.length; Tr < vf; ++Tr)
  Pt[Tr] = Jn[Tr], yt[Jn.charCodeAt(Tr)] = Tr;
yt[45] = 62;
yt[95] = 63;
function ua(r) {
  var e = r.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = r.indexOf("=");
  n === -1 && (n = e);
  var i = n === e ? 0 : 4 - n % 4;
  return [n, i];
}
function bf(r) {
  var e = ua(r), n = e[0], i = e[1];
  return (n + i) * 3 / 4 - i;
}
function _f(r, e, n) {
  return (e + n) * 3 / 4 - n;
}
function Tf(r) {
  var e, n = ua(r), i = n[0], o = n[1], a = new Ef(_f(r, i, o)), c = 0, h = o > 0 ? i - 4 : i, f;
  for (f = 0; f < h; f += 4)
    e = yt[r.charCodeAt(f)] << 18 | yt[r.charCodeAt(f + 1)] << 12 | yt[r.charCodeAt(f + 2)] << 6 | yt[r.charCodeAt(f + 3)], a[c++] = e >> 16 & 255, a[c++] = e >> 8 & 255, a[c++] = e & 255;
  return o === 2 && (e = yt[r.charCodeAt(f)] << 2 | yt[r.charCodeAt(f + 1)] >> 4, a[c++] = e & 255), o === 1 && (e = yt[r.charCodeAt(f)] << 10 | yt[r.charCodeAt(f + 1)] << 4 | yt[r.charCodeAt(f + 2)] >> 2, a[c++] = e >> 8 & 255, a[c++] = e & 255), a;
}
function Af(r) {
  return Pt[r >> 18 & 63] + Pt[r >> 12 & 63] + Pt[r >> 6 & 63] + Pt[r & 63];
}
function If(r, e, n) {
  for (var i, o = [], a = e; a < n; a += 3)
    i = (r[a] << 16 & 16711680) + (r[a + 1] << 8 & 65280) + (r[a + 2] & 255), o.push(Af(i));
  return o.join("");
}
function xf(r) {
  for (var e, n = r.length, i = n % 3, o = [], a = 16383, c = 0, h = n - i; c < h; c += a)
    o.push(If(r, c, c + a > h ? h : c + a));
  return i === 1 ? (e = r[n - 1], o.push(
    Pt[e >> 2] + Pt[e << 4 & 63] + "=="
  )) : i === 2 && (e = (r[n - 2] << 8) + r[n - 1], o.push(
    Pt[e >> 10] + Pt[e >> 4 & 63] + Pt[e << 2 & 63] + "="
  )), o.join("");
}
var Ci = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Ci.read = function(r, e, n, i, o) {
  var a, c, h = o * 8 - i - 1, f = (1 << h) - 1, p = f >> 1, s = -7, g = n ? o - 1 : 0, m = n ? -1 : 1, v = r[e + g];
  for (g += m, a = v & (1 << -s) - 1, v >>= -s, s += h; s > 0; a = a * 256 + r[e + g], g += m, s -= 8)
    ;
  for (c = a & (1 << -s) - 1, a >>= -s, s += i; s > 0; c = c * 256 + r[e + g], g += m, s -= 8)
    ;
  if (a === 0)
    a = 1 - p;
  else {
    if (a === f)
      return c ? NaN : (v ? -1 : 1) * (1 / 0);
    c = c + Math.pow(2, i), a = a - p;
  }
  return (v ? -1 : 1) * c * Math.pow(2, a - i);
};
Ci.write = function(r, e, n, i, o, a) {
  var c, h, f, p = a * 8 - o - 1, s = (1 << p) - 1, g = s >> 1, m = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, v = i ? 0 : a - 1, b = i ? 1 : -1, w = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (h = isNaN(e) ? 1 : 0, c = s) : (c = Math.floor(Math.log(e) / Math.LN2), e * (f = Math.pow(2, -c)) < 1 && (c--, f *= 2), c + g >= 1 ? e += m / f : e += m * Math.pow(2, 1 - g), e * f >= 2 && (c++, f /= 2), c + g >= s ? (h = 0, c = s) : c + g >= 1 ? (h = (e * f - 1) * Math.pow(2, o), c = c + g) : (h = e * Math.pow(2, g - 1) * Math.pow(2, o), c = 0)); o >= 8; r[n + v] = h & 255, v += b, h /= 256, o -= 8)
    ;
  for (c = c << o | h, p += o; p > 0; r[n + v] = c & 255, v += b, c /= 256, p -= 8)
    ;
  r[n + v - b] |= w * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
  const e = Nn, n = Ci, i = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  r.Buffer = s, r.SlowBuffer = $, r.INSPECT_MAX_BYTES = 50;
  const o = 2147483647;
  r.kMaxLength = o;
  const { Uint8Array: a, ArrayBuffer: c, SharedArrayBuffer: h } = globalThis;
  s.TYPED_ARRAY_SUPPORT = f(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function f() {
    try {
      const d = new a(1), u = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(u, a.prototype), Object.setPrototypeOf(d, u), d.foo() === 42;
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
  function p(d) {
    if (d > o)
      throw new RangeError('The value "' + d + '" is invalid for option "size"');
    const u = new a(d);
    return Object.setPrototypeOf(u, s.prototype), u;
  }
  function s(d, u, l) {
    if (typeof d == "number") {
      if (typeof u == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return b(d);
    }
    return g(d, u, l);
  }
  s.poolSize = 8192;
  function g(d, u, l) {
    if (typeof d == "string")
      return w(d, u);
    if (c.isView(d))
      return x(d);
    if (d == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof d
      );
    if (me(d, c) || d && me(d.buffer, c) || typeof h < "u" && (me(d, h) || d && me(d.buffer, h)))
      return O(d, u, l);
    if (typeof d == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const E = d.valueOf && d.valueOf();
    if (E != null && E !== d)
      return s.from(E, u, l);
    const A = C(d);
    if (A) return A;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof d[Symbol.toPrimitive] == "function")
      return s.from(d[Symbol.toPrimitive]("string"), u, l);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof d
    );
  }
  s.from = function(d, u, l) {
    return g(d, u, l);
  }, Object.setPrototypeOf(s.prototype, a.prototype), Object.setPrototypeOf(s, a);
  function m(d) {
    if (typeof d != "number")
      throw new TypeError('"size" argument must be of type number');
    if (d < 0)
      throw new RangeError('The value "' + d + '" is invalid for option "size"');
  }
  function v(d, u, l) {
    return m(d), d <= 0 ? p(d) : u !== void 0 ? typeof l == "string" ? p(d).fill(u, l) : p(d).fill(u) : p(d);
  }
  s.alloc = function(d, u, l) {
    return v(d, u, l);
  };
  function b(d) {
    return m(d), p(d < 0 ? 0 : L(d) | 0);
  }
  s.allocUnsafe = function(d) {
    return b(d);
  }, s.allocUnsafeSlow = function(d) {
    return b(d);
  };
  function w(d, u) {
    if ((typeof u != "string" || u === "") && (u = "utf8"), !s.isEncoding(u))
      throw new TypeError("Unknown encoding: " + u);
    const l = j(d, u) | 0;
    let E = p(l);
    const A = E.write(d, u);
    return A !== l && (E = E.slice(0, A)), E;
  }
  function T(d) {
    const u = d.length < 0 ? 0 : L(d.length) | 0, l = p(u);
    for (let E = 0; E < u; E += 1)
      l[E] = d[E] & 255;
    return l;
  }
  function x(d) {
    if (me(d, a)) {
      const u = new a(d);
      return O(u.buffer, u.byteOffset, u.byteLength);
    }
    return T(d);
  }
  function O(d, u, l) {
    if (u < 0 || d.byteLength < u)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (d.byteLength < u + (l || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let E;
    return u === void 0 && l === void 0 ? E = new a(d) : l === void 0 ? E = new a(d, u) : E = new a(d, u, l), Object.setPrototypeOf(E, s.prototype), E;
  }
  function C(d) {
    if (s.isBuffer(d)) {
      const u = L(d.length) | 0, l = p(u);
      return l.length === 0 || d.copy(l, 0, 0, u), l;
    }
    if (d.length !== void 0)
      return typeof d.length != "number" || y(d.length) ? p(0) : T(d);
    if (d.type === "Buffer" && Array.isArray(d.data))
      return T(d.data);
  }
  function L(d) {
    if (d >= o)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
    return d | 0;
  }
  function $(d) {
    return +d != d && (d = 0), s.alloc(+d);
  }
  s.isBuffer = function(u) {
    return u != null && u._isBuffer === !0 && u !== s.prototype;
  }, s.compare = function(u, l) {
    if (me(u, a) && (u = s.from(u, u.offset, u.byteLength)), me(l, a) && (l = s.from(l, l.offset, l.byteLength)), !s.isBuffer(u) || !s.isBuffer(l))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (u === l) return 0;
    let E = u.length, A = l.length;
    for (let S = 0, P = Math.min(E, A); S < P; ++S)
      if (u[S] !== l[S]) {
        E = u[S], A = l[S];
        break;
      }
    return E < A ? -1 : A < E ? 1 : 0;
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
  }, s.concat = function(u, l) {
    if (!Array.isArray(u))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (u.length === 0)
      return s.alloc(0);
    let E;
    if (l === void 0)
      for (l = 0, E = 0; E < u.length; ++E)
        l += u[E].length;
    const A = s.allocUnsafe(l);
    let S = 0;
    for (E = 0; E < u.length; ++E) {
      let P = u[E];
      if (me(P, a))
        S + P.length > A.length ? (s.isBuffer(P) || (P = s.from(P)), P.copy(A, S)) : a.prototype.set.call(
          A,
          P,
          S
        );
      else if (s.isBuffer(P))
        P.copy(A, S);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      S += P.length;
    }
    return A;
  };
  function j(d, u) {
    if (s.isBuffer(d))
      return d.length;
    if (c.isView(d) || me(d, c))
      return d.byteLength;
    if (typeof d != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof d
      );
    const l = d.length, E = arguments.length > 2 && arguments[2] === !0;
    if (!E && l === 0) return 0;
    let A = !1;
    for (; ; )
      switch (u) {
        case "ascii":
        case "latin1":
        case "binary":
          return l;
        case "utf8":
        case "utf-8":
          return Ke(d).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return l * 2;
        case "hex":
          return l >>> 1;
        case "base64":
          return yr(d).length;
        default:
          if (A)
            return E ? -1 : Ke(d).length;
          u = ("" + u).toLowerCase(), A = !0;
      }
  }
  s.byteLength = j;
  function B(d, u, l) {
    let E = !1;
    if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((l === void 0 || l > this.length) && (l = this.length), l <= 0) || (l >>>= 0, u >>>= 0, l <= u))
      return "";
    for (d || (d = "utf8"); ; )
      switch (d) {
        case "hex":
          return Me(this, u, l);
        case "utf8":
        case "utf-8":
          return oe(this, u, l);
        case "ascii":
          return De(this, u, l);
        case "latin1":
        case "binary":
          return se(this, u, l);
        case "base64":
          return de(this, u, l);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ae(this, u, l);
        default:
          if (E) throw new TypeError("Unknown encoding: " + d);
          d = (d + "").toLowerCase(), E = !0;
      }
  }
  s.prototype._isBuffer = !0;
  function Y(d, u, l) {
    const E = d[u];
    d[u] = d[l], d[l] = E;
  }
  s.prototype.swap16 = function() {
    const u = this.length;
    if (u % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let l = 0; l < u; l += 2)
      Y(this, l, l + 1);
    return this;
  }, s.prototype.swap32 = function() {
    const u = this.length;
    if (u % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let l = 0; l < u; l += 4)
      Y(this, l, l + 3), Y(this, l + 1, l + 2);
    return this;
  }, s.prototype.swap64 = function() {
    const u = this.length;
    if (u % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let l = 0; l < u; l += 8)
      Y(this, l, l + 7), Y(this, l + 1, l + 6), Y(this, l + 2, l + 5), Y(this, l + 3, l + 4);
    return this;
  }, s.prototype.toString = function() {
    const u = this.length;
    return u === 0 ? "" : arguments.length === 0 ? oe(this, 0, u) : B.apply(this, arguments);
  }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(u) {
    if (!s.isBuffer(u)) throw new TypeError("Argument must be a Buffer");
    return this === u ? !0 : s.compare(this, u) === 0;
  }, s.prototype.inspect = function() {
    let u = "";
    const l = r.INSPECT_MAX_BYTES;
    return u = this.toString("hex", 0, l).replace(/(.{2})/g, "$1 ").trim(), this.length > l && (u += " ... "), "<Buffer " + u + ">";
  }, i && (s.prototype[i] = s.prototype.inspect), s.prototype.compare = function(u, l, E, A, S) {
    if (me(u, a) && (u = s.from(u, u.offset, u.byteLength)), !s.isBuffer(u))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u
      );
    if (l === void 0 && (l = 0), E === void 0 && (E = u ? u.length : 0), A === void 0 && (A = 0), S === void 0 && (S = this.length), l < 0 || E > u.length || A < 0 || S > this.length)
      throw new RangeError("out of range index");
    if (A >= S && l >= E)
      return 0;
    if (A >= S)
      return -1;
    if (l >= E)
      return 1;
    if (l >>>= 0, E >>>= 0, A >>>= 0, S >>>= 0, this === u) return 0;
    let P = S - A, M = E - l;
    const G = Math.min(P, M), ee = this.slice(A, S), Q = u.slice(l, E);
    for (let ne = 0; ne < G; ++ne)
      if (ee[ne] !== Q[ne]) {
        P = ee[ne], M = Q[ne];
        break;
      }
    return P < M ? -1 : M < P ? 1 : 0;
  };
  function H(d, u, l, E, A) {
    if (d.length === 0) return -1;
    if (typeof l == "string" ? (E = l, l = 0) : l > 2147483647 ? l = 2147483647 : l < -2147483648 && (l = -2147483648), l = +l, y(l) && (l = A ? 0 : d.length - 1), l < 0 && (l = d.length + l), l >= d.length) {
      if (A) return -1;
      l = d.length - 1;
    } else if (l < 0)
      if (A) l = 0;
      else return -1;
    if (typeof u == "string" && (u = s.from(u, E)), s.isBuffer(u))
      return u.length === 0 ? -1 : ue(d, u, l, E, A);
    if (typeof u == "number")
      return u = u & 255, typeof a.prototype.indexOf == "function" ? A ? a.prototype.indexOf.call(d, u, l) : a.prototype.lastIndexOf.call(d, u, l) : ue(d, [u], l, E, A);
    throw new TypeError("val must be string, number or Buffer");
  }
  function ue(d, u, l, E, A) {
    let S = 1, P = d.length, M = u.length;
    if (E !== void 0 && (E = String(E).toLowerCase(), E === "ucs2" || E === "ucs-2" || E === "utf16le" || E === "utf-16le")) {
      if (d.length < 2 || u.length < 2)
        return -1;
      S = 2, P /= 2, M /= 2, l /= 2;
    }
    function G(Q, ne) {
      return S === 1 ? Q[ne] : Q.readUInt16BE(ne * S);
    }
    let ee;
    if (A) {
      let Q = -1;
      for (ee = l; ee < P; ee++)
        if (G(d, ee) === G(u, Q === -1 ? 0 : ee - Q)) {
          if (Q === -1 && (Q = ee), ee - Q + 1 === M) return Q * S;
        } else
          Q !== -1 && (ee -= ee - Q), Q = -1;
    } else
      for (l + M > P && (l = P - M), ee = l; ee >= 0; ee--) {
        let Q = !0;
        for (let ne = 0; ne < M; ne++)
          if (G(d, ee + ne) !== G(u, ne)) {
            Q = !1;
            break;
          }
        if (Q) return ee;
      }
    return -1;
  }
  s.prototype.includes = function(u, l, E) {
    return this.indexOf(u, l, E) !== -1;
  }, s.prototype.indexOf = function(u, l, E) {
    return H(this, u, l, E, !0);
  }, s.prototype.lastIndexOf = function(u, l, E) {
    return H(this, u, l, E, !1);
  };
  function U(d, u, l, E) {
    l = Number(l) || 0;
    const A = d.length - l;
    E ? (E = Number(E), E > A && (E = A)) : E = A;
    const S = u.length;
    E > S / 2 && (E = S / 2);
    let P;
    for (P = 0; P < E; ++P) {
      const M = parseInt(u.substr(P * 2, 2), 16);
      if (y(M)) return P;
      d[l + P] = M;
    }
    return P;
  }
  function J(d, u, l, E) {
    return V(Ke(u, d.length - l), d, l, E);
  }
  function k(d, u, l, E) {
    return V(rr(u), d, l, E);
  }
  function K(d, u, l, E) {
    return V(yr(u), d, l, E);
  }
  function le(d, u, l, E) {
    return V(nr(u, d.length - l), d, l, E);
  }
  s.prototype.write = function(u, l, E, A) {
    if (l === void 0)
      A = "utf8", E = this.length, l = 0;
    else if (E === void 0 && typeof l == "string")
      A = l, E = this.length, l = 0;
    else if (isFinite(l))
      l = l >>> 0, isFinite(E) ? (E = E >>> 0, A === void 0 && (A = "utf8")) : (A = E, E = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const S = this.length - l;
    if ((E === void 0 || E > S) && (E = S), u.length > 0 && (E < 0 || l < 0) || l > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    A || (A = "utf8");
    let P = !1;
    for (; ; )
      switch (A) {
        case "hex":
          return U(this, u, l, E);
        case "utf8":
        case "utf-8":
          return J(this, u, l, E);
        case "ascii":
        case "latin1":
        case "binary":
          return k(this, u, l, E);
        case "base64":
          return K(this, u, l, E);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return le(this, u, l, E);
        default:
          if (P) throw new TypeError("Unknown encoding: " + A);
          A = ("" + A).toLowerCase(), P = !0;
      }
  }, s.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function de(d, u, l) {
    return u === 0 && l === d.length ? e.fromByteArray(d) : e.fromByteArray(d.slice(u, l));
  }
  function oe(d, u, l) {
    l = Math.min(d.length, l);
    const E = [];
    let A = u;
    for (; A < l; ) {
      const S = d[A];
      let P = null, M = S > 239 ? 4 : S > 223 ? 3 : S > 191 ? 2 : 1;
      if (A + M <= l) {
        let G, ee, Q, ne;
        switch (M) {
          case 1:
            S < 128 && (P = S);
            break;
          case 2:
            G = d[A + 1], (G & 192) === 128 && (ne = (S & 31) << 6 | G & 63, ne > 127 && (P = ne));
            break;
          case 3:
            G = d[A + 1], ee = d[A + 2], (G & 192) === 128 && (ee & 192) === 128 && (ne = (S & 15) << 12 | (G & 63) << 6 | ee & 63, ne > 2047 && (ne < 55296 || ne > 57343) && (P = ne));
            break;
          case 4:
            G = d[A + 1], ee = d[A + 2], Q = d[A + 3], (G & 192) === 128 && (ee & 192) === 128 && (Q & 192) === 128 && (ne = (S & 15) << 18 | (G & 63) << 12 | (ee & 63) << 6 | Q & 63, ne > 65535 && ne < 1114112 && (P = ne));
        }
      }
      P === null ? (P = 65533, M = 1) : P > 65535 && (P -= 65536, E.push(P >>> 10 & 1023 | 55296), P = 56320 | P & 1023), E.push(P), A += M;
    }
    return ke(E);
  }
  const he = 4096;
  function ke(d) {
    const u = d.length;
    if (u <= he)
      return String.fromCharCode.apply(String, d);
    let l = "", E = 0;
    for (; E < u; )
      l += String.fromCharCode.apply(
        String,
        d.slice(E, E += he)
      );
    return l;
  }
  function De(d, u, l) {
    let E = "";
    l = Math.min(d.length, l);
    for (let A = u; A < l; ++A)
      E += String.fromCharCode(d[A] & 127);
    return E;
  }
  function se(d, u, l) {
    let E = "";
    l = Math.min(d.length, l);
    for (let A = u; A < l; ++A)
      E += String.fromCharCode(d[A]);
    return E;
  }
  function Me(d, u, l) {
    const E = d.length;
    (!u || u < 0) && (u = 0), (!l || l < 0 || l > E) && (l = E);
    let A = "";
    for (let S = u; S < l; ++S)
      A += _[d[S]];
    return A;
  }
  function ae(d, u, l) {
    const E = d.slice(u, l);
    let A = "";
    for (let S = 0; S < E.length - 1; S += 2)
      A += String.fromCharCode(E[S] + E[S + 1] * 256);
    return A;
  }
  s.prototype.slice = function(u, l) {
    const E = this.length;
    u = ~~u, l = l === void 0 ? E : ~~l, u < 0 ? (u += E, u < 0 && (u = 0)) : u > E && (u = E), l < 0 ? (l += E, l < 0 && (l = 0)) : l > E && (l = E), l < u && (l = u);
    const A = this.subarray(u, l);
    return Object.setPrototypeOf(A, s.prototype), A;
  };
  function ce(d, u, l) {
    if (d % 1 !== 0 || d < 0) throw new RangeError("offset is not uint");
    if (d + u > l) throw new RangeError("Trying to access beyond buffer length");
  }
  s.prototype.readUintLE = s.prototype.readUIntLE = function(u, l, E) {
    u = u >>> 0, l = l >>> 0, E || ce(u, l, this.length);
    let A = this[u], S = 1, P = 0;
    for (; ++P < l && (S *= 256); )
      A += this[u + P] * S;
    return A;
  }, s.prototype.readUintBE = s.prototype.readUIntBE = function(u, l, E) {
    u = u >>> 0, l = l >>> 0, E || ce(u, l, this.length);
    let A = this[u + --l], S = 1;
    for (; l > 0 && (S *= 256); )
      A += this[u + --l] * S;
    return A;
  }, s.prototype.readUint8 = s.prototype.readUInt8 = function(u, l) {
    return u = u >>> 0, l || ce(u, 1, this.length), this[u];
  }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(u, l) {
    return u = u >>> 0, l || ce(u, 2, this.length), this[u] | this[u + 1] << 8;
  }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(u, l) {
    return u = u >>> 0, l || ce(u, 2, this.length), this[u] << 8 | this[u + 1];
  }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(u, l) {
    return u = u >>> 0, l || ce(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216;
  }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(u, l) {
    return u = u >>> 0, l || ce(u, 4, this.length), this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]);
  }, s.prototype.readBigUInt64LE = I(function(u) {
    u = u >>> 0, pt(u, "offset");
    const l = this[u], E = this[u + 7];
    (l === void 0 || E === void 0) && vt(u, this.length - 8);
    const A = l + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24, S = this[++u] + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + E * 2 ** 24;
    return BigInt(A) + (BigInt(S) << BigInt(32));
  }), s.prototype.readBigUInt64BE = I(function(u) {
    u = u >>> 0, pt(u, "offset");
    const l = this[u], E = this[u + 7];
    (l === void 0 || E === void 0) && vt(u, this.length - 8);
    const A = l * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u], S = this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + E;
    return (BigInt(A) << BigInt(32)) + BigInt(S);
  }), s.prototype.readIntLE = function(u, l, E) {
    u = u >>> 0, l = l >>> 0, E || ce(u, l, this.length);
    let A = this[u], S = 1, P = 0;
    for (; ++P < l && (S *= 256); )
      A += this[u + P] * S;
    return S *= 128, A >= S && (A -= Math.pow(2, 8 * l)), A;
  }, s.prototype.readIntBE = function(u, l, E) {
    u = u >>> 0, l = l >>> 0, E || ce(u, l, this.length);
    let A = l, S = 1, P = this[u + --A];
    for (; A > 0 && (S *= 256); )
      P += this[u + --A] * S;
    return S *= 128, P >= S && (P -= Math.pow(2, 8 * l)), P;
  }, s.prototype.readInt8 = function(u, l) {
    return u = u >>> 0, l || ce(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u];
  }, s.prototype.readInt16LE = function(u, l) {
    u = u >>> 0, l || ce(u, 2, this.length);
    const E = this[u] | this[u + 1] << 8;
    return E & 32768 ? E | 4294901760 : E;
  }, s.prototype.readInt16BE = function(u, l) {
    u = u >>> 0, l || ce(u, 2, this.length);
    const E = this[u + 1] | this[u] << 8;
    return E & 32768 ? E | 4294901760 : E;
  }, s.prototype.readInt32LE = function(u, l) {
    return u = u >>> 0, l || ce(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24;
  }, s.prototype.readInt32BE = function(u, l) {
    return u = u >>> 0, l || ce(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3];
  }, s.prototype.readBigInt64LE = I(function(u) {
    u = u >>> 0, pt(u, "offset");
    const l = this[u], E = this[u + 7];
    (l === void 0 || E === void 0) && vt(u, this.length - 8);
    const A = this[u + 4] + this[u + 5] * 2 ** 8 + this[u + 6] * 2 ** 16 + (E << 24);
    return (BigInt(A) << BigInt(32)) + BigInt(l + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24);
  }), s.prototype.readBigInt64BE = I(function(u) {
    u = u >>> 0, pt(u, "offset");
    const l = this[u], E = this[u + 7];
    (l === void 0 || E === void 0) && vt(u, this.length - 8);
    const A = (l << 24) + // Overflow
    this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u];
    return (BigInt(A) << BigInt(32)) + BigInt(this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + E);
  }), s.prototype.readFloatLE = function(u, l) {
    return u = u >>> 0, l || ce(u, 4, this.length), n.read(this, u, !0, 23, 4);
  }, s.prototype.readFloatBE = function(u, l) {
    return u = u >>> 0, l || ce(u, 4, this.length), n.read(this, u, !1, 23, 4);
  }, s.prototype.readDoubleLE = function(u, l) {
    return u = u >>> 0, l || ce(u, 8, this.length), n.read(this, u, !0, 52, 8);
  }, s.prototype.readDoubleBE = function(u, l) {
    return u = u >>> 0, l || ce(u, 8, this.length), n.read(this, u, !1, 52, 8);
  };
  function X(d, u, l, E, A, S) {
    if (!s.isBuffer(d)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (u > A || u < S) throw new RangeError('"value" argument is out of bounds');
    if (l + E > d.length) throw new RangeError("Index out of range");
  }
  s.prototype.writeUintLE = s.prototype.writeUIntLE = function(u, l, E, A) {
    if (u = +u, l = l >>> 0, E = E >>> 0, !A) {
      const M = Math.pow(2, 8 * E) - 1;
      X(this, u, l, E, M, 0);
    }
    let S = 1, P = 0;
    for (this[l] = u & 255; ++P < E && (S *= 256); )
      this[l + P] = u / S & 255;
    return l + E;
  }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(u, l, E, A) {
    if (u = +u, l = l >>> 0, E = E >>> 0, !A) {
      const M = Math.pow(2, 8 * E) - 1;
      X(this, u, l, E, M, 0);
    }
    let S = E - 1, P = 1;
    for (this[l + S] = u & 255; --S >= 0 && (P *= 256); )
      this[l + S] = u / P & 255;
    return l + E;
  }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(u, l, E) {
    return u = +u, l = l >>> 0, E || X(this, u, l, 1, 255, 0), this[l] = u & 255, l + 1;
  }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(u, l, E) {
    return u = +u, l = l >>> 0, E || X(this, u, l, 2, 65535, 0), this[l] = u & 255, this[l + 1] = u >>> 8, l + 2;
  }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(u, l, E) {
    return u = +u, l = l >>> 0, E || X(this, u, l, 2, 65535, 0), this[l] = u >>> 8, this[l + 1] = u & 255, l + 2;
  }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(u, l, E) {
    return u = +u, l = l >>> 0, E || X(this, u, l, 4, 4294967295, 0), this[l + 3] = u >>> 24, this[l + 2] = u >>> 16, this[l + 1] = u >>> 8, this[l] = u & 255, l + 4;
  }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(u, l, E) {
    return u = +u, l = l >>> 0, E || X(this, u, l, 4, 4294967295, 0), this[l] = u >>> 24, this[l + 1] = u >>> 16, this[l + 2] = u >>> 8, this[l + 3] = u & 255, l + 4;
  };
  function it(d, u, l, E, A) {
    ht(u, E, A, d, l, 7);
    let S = Number(u & BigInt(4294967295));
    d[l++] = S, S = S >> 8, d[l++] = S, S = S >> 8, d[l++] = S, S = S >> 8, d[l++] = S;
    let P = Number(u >> BigInt(32) & BigInt(4294967295));
    return d[l++] = P, P = P >> 8, d[l++] = P, P = P >> 8, d[l++] = P, P = P >> 8, d[l++] = P, l;
  }
  function It(d, u, l, E, A) {
    ht(u, E, A, d, l, 7);
    let S = Number(u & BigInt(4294967295));
    d[l + 7] = S, S = S >> 8, d[l + 6] = S, S = S >> 8, d[l + 5] = S, S = S >> 8, d[l + 4] = S;
    let P = Number(u >> BigInt(32) & BigInt(4294967295));
    return d[l + 3] = P, P = P >> 8, d[l + 2] = P, P = P >> 8, d[l + 1] = P, P = P >> 8, d[l] = P, l + 8;
  }
  s.prototype.writeBigUInt64LE = I(function(u, l = 0) {
    return it(this, u, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeBigUInt64BE = I(function(u, l = 0) {
    return It(this, u, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeIntLE = function(u, l, E, A) {
    if (u = +u, l = l >>> 0, !A) {
      const G = Math.pow(2, 8 * E - 1);
      X(this, u, l, E, G - 1, -G);
    }
    let S = 0, P = 1, M = 0;
    for (this[l] = u & 255; ++S < E && (P *= 256); )
      u < 0 && M === 0 && this[l + S - 1] !== 0 && (M = 1), this[l + S] = (u / P >> 0) - M & 255;
    return l + E;
  }, s.prototype.writeIntBE = function(u, l, E, A) {
    if (u = +u, l = l >>> 0, !A) {
      const G = Math.pow(2, 8 * E - 1);
      X(this, u, l, E, G - 1, -G);
    }
    let S = E - 1, P = 1, M = 0;
    for (this[l + S] = u & 255; --S >= 0 && (P *= 256); )
      u < 0 && M === 0 && this[l + S + 1] !== 0 && (M = 1), this[l + S] = (u / P >> 0) - M & 255;
    return l + E;
  }, s.prototype.writeInt8 = function(u, l, E) {
    return u = +u, l = l >>> 0, E || X(this, u, l, 1, 127, -128), u < 0 && (u = 255 + u + 1), this[l] = u & 255, l + 1;
  }, s.prototype.writeInt16LE = function(u, l, E) {
    return u = +u, l = l >>> 0, E || X(this, u, l, 2, 32767, -32768), this[l] = u & 255, this[l + 1] = u >>> 8, l + 2;
  }, s.prototype.writeInt16BE = function(u, l, E) {
    return u = +u, l = l >>> 0, E || X(this, u, l, 2, 32767, -32768), this[l] = u >>> 8, this[l + 1] = u & 255, l + 2;
  }, s.prototype.writeInt32LE = function(u, l, E) {
    return u = +u, l = l >>> 0, E || X(this, u, l, 4, 2147483647, -2147483648), this[l] = u & 255, this[l + 1] = u >>> 8, this[l + 2] = u >>> 16, this[l + 3] = u >>> 24, l + 4;
  }, s.prototype.writeInt32BE = function(u, l, E) {
    return u = +u, l = l >>> 0, E || X(this, u, l, 4, 2147483647, -2147483648), u < 0 && (u = 4294967295 + u + 1), this[l] = u >>> 24, this[l + 1] = u >>> 16, this[l + 2] = u >>> 8, this[l + 3] = u & 255, l + 4;
  }, s.prototype.writeBigInt64LE = I(function(u, l = 0) {
    return it(this, u, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), s.prototype.writeBigInt64BE = I(function(u, l = 0) {
    return It(this, u, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function ot(d, u, l, E, A, S) {
    if (l + E > d.length) throw new RangeError("Index out of range");
    if (l < 0) throw new RangeError("Index out of range");
  }
  function tr(d, u, l, E, A) {
    return u = +u, l = l >>> 0, A || ot(d, u, l, 4), n.write(d, u, l, E, 23, 4), l + 4;
  }
  s.prototype.writeFloatLE = function(u, l, E) {
    return tr(this, u, l, !0, E);
  }, s.prototype.writeFloatBE = function(u, l, E) {
    return tr(this, u, l, !1, E);
  };
  function Et(d, u, l, E, A) {
    return u = +u, l = l >>> 0, A || ot(d, u, l, 8), n.write(d, u, l, E, 52, 8), l + 8;
  }
  s.prototype.writeDoubleLE = function(u, l, E) {
    return Et(this, u, l, !0, E);
  }, s.prototype.writeDoubleBE = function(u, l, E) {
    return Et(this, u, l, !1, E);
  }, s.prototype.copy = function(u, l, E, A) {
    if (!s.isBuffer(u)) throw new TypeError("argument should be a Buffer");
    if (E || (E = 0), !A && A !== 0 && (A = this.length), l >= u.length && (l = u.length), l || (l = 0), A > 0 && A < E && (A = E), A === E || u.length === 0 || this.length === 0) return 0;
    if (l < 0)
      throw new RangeError("targetStart out of bounds");
    if (E < 0 || E >= this.length) throw new RangeError("Index out of range");
    if (A < 0) throw new RangeError("sourceEnd out of bounds");
    A > this.length && (A = this.length), u.length - l < A - E && (A = u.length - l + E);
    const S = A - E;
    return this === u && typeof a.prototype.copyWithin == "function" ? this.copyWithin(l, E, A) : a.prototype.set.call(
      u,
      this.subarray(E, A),
      l
    ), S;
  }, s.prototype.fill = function(u, l, E, A) {
    if (typeof u == "string") {
      if (typeof l == "string" ? (A = l, l = 0, E = this.length) : typeof E == "string" && (A = E, E = this.length), A !== void 0 && typeof A != "string")
        throw new TypeError("encoding must be a string");
      if (typeof A == "string" && !s.isEncoding(A))
        throw new TypeError("Unknown encoding: " + A);
      if (u.length === 1) {
        const P = u.charCodeAt(0);
        (A === "utf8" && P < 128 || A === "latin1") && (u = P);
      }
    } else typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
    if (l < 0 || this.length < l || this.length < E)
      throw new RangeError("Out of range index");
    if (E <= l)
      return this;
    l = l >>> 0, E = E === void 0 ? this.length : E >>> 0, u || (u = 0);
    let S;
    if (typeof u == "number")
      for (S = l; S < E; ++S)
        this[S] = u;
    else {
      const P = s.isBuffer(u) ? u : s.from(u, A), M = P.length;
      if (M === 0)
        throw new TypeError('The value "' + u + '" is invalid for argument "value"');
      for (S = 0; S < E - l; ++S)
        this[S + l] = P[S % M];
    }
    return this;
  };
  const ft = {};
  function kt(d, u, l) {
    ft[d] = class extends l {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: u.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${d}]`, this.stack, delete this.name;
      }
      get code() {
        return d;
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
        return `${this.name} [${d}]: ${this.message}`;
      }
    };
  }
  kt(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(d) {
      return d ? `${d} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), kt(
    "ERR_INVALID_ARG_TYPE",
    function(d, u) {
      return `The "${d}" argument must be of type number. Received type ${typeof u}`;
    },
    TypeError
  ), kt(
    "ERR_OUT_OF_RANGE",
    function(d, u, l) {
      let E = `The value of "${d}" is out of range.`, A = l;
      return Number.isInteger(l) && Math.abs(l) > 2 ** 32 ? A = st(String(l)) : typeof l == "bigint" && (A = String(l), (l > BigInt(2) ** BigInt(32) || l < -(BigInt(2) ** BigInt(32))) && (A = st(A)), A += "n"), E += ` It must be ${u}. Received ${A}`, E;
    },
    RangeError
  );
  function st(d) {
    let u = "", l = d.length;
    const E = d[0] === "-" ? 1 : 0;
    for (; l >= E + 4; l -= 3)
      u = `_${d.slice(l - 3, l)}${u}`;
    return `${d.slice(0, l)}${u}`;
  }
  function Dt(d, u, l) {
    pt(u, "offset"), (d[u] === void 0 || d[u + l] === void 0) && vt(u, d.length - (l + 1));
  }
  function ht(d, u, l, E, A, S) {
    if (d > l || d < u) {
      const P = typeof u == "bigint" ? "n" : "";
      let M;
      throw u === 0 || u === BigInt(0) ? M = `>= 0${P} and < 2${P} ** ${(S + 1) * 8}${P}` : M = `>= -(2${P} ** ${(S + 1) * 8 - 1}${P}) and < 2 ** ${(S + 1) * 8 - 1}${P}`, new ft.ERR_OUT_OF_RANGE("value", M, d);
    }
    Dt(E, A, S);
  }
  function pt(d, u) {
    if (typeof d != "number")
      throw new ft.ERR_INVALID_ARG_TYPE(u, "number", d);
  }
  function vt(d, u, l) {
    throw Math.floor(d) !== d ? (pt(d, l), new ft.ERR_OUT_OF_RANGE("offset", "an integer", d)) : u < 0 ? new ft.ERR_BUFFER_OUT_OF_BOUNDS() : new ft.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${u}`,
      d
    );
  }
  const bt = /[^+/0-9A-Za-z-_]/g;
  function zt(d) {
    if (d = d.split("=")[0], d = d.trim().replace(bt, ""), d.length < 2) return "";
    for (; d.length % 4 !== 0; )
      d = d + "=";
    return d;
  }
  function Ke(d, u) {
    u = u || 1 / 0;
    let l;
    const E = d.length;
    let A = null;
    const S = [];
    for (let P = 0; P < E; ++P) {
      if (l = d.charCodeAt(P), l > 55295 && l < 57344) {
        if (!A) {
          if (l > 56319) {
            (u -= 3) > -1 && S.push(239, 191, 189);
            continue;
          } else if (P + 1 === E) {
            (u -= 3) > -1 && S.push(239, 191, 189);
            continue;
          }
          A = l;
          continue;
        }
        if (l < 56320) {
          (u -= 3) > -1 && S.push(239, 191, 189), A = l;
          continue;
        }
        l = (A - 55296 << 10 | l - 56320) + 65536;
      } else A && (u -= 3) > -1 && S.push(239, 191, 189);
      if (A = null, l < 128) {
        if ((u -= 1) < 0) break;
        S.push(l);
      } else if (l < 2048) {
        if ((u -= 2) < 0) break;
        S.push(
          l >> 6 | 192,
          l & 63 | 128
        );
      } else if (l < 65536) {
        if ((u -= 3) < 0) break;
        S.push(
          l >> 12 | 224,
          l >> 6 & 63 | 128,
          l & 63 | 128
        );
      } else if (l < 1114112) {
        if ((u -= 4) < 0) break;
        S.push(
          l >> 18 | 240,
          l >> 12 & 63 | 128,
          l >> 6 & 63 | 128,
          l & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return S;
  }
  function rr(d) {
    const u = [];
    for (let l = 0; l < d.length; ++l)
      u.push(d.charCodeAt(l) & 255);
    return u;
  }
  function nr(d, u) {
    let l, E, A;
    const S = [];
    for (let P = 0; P < d.length && !((u -= 2) < 0); ++P)
      l = d.charCodeAt(P), E = l >> 8, A = l % 256, S.push(A), S.push(E);
    return S;
  }
  function yr(d) {
    return e.toByteArray(zt(d));
  }
  function V(d, u, l, E) {
    let A;
    for (A = 0; A < E && !(A + l >= u.length || A >= d.length); ++A)
      u[A + l] = d[A];
    return A;
  }
  function me(d, u) {
    return d instanceof u || d != null && d.constructor != null && d.constructor.name != null && d.constructor.name === u.name;
  }
  function y(d) {
    return d !== d;
  }
  const _ = function() {
    const d = "0123456789abcdef", u = new Array(256);
    for (let l = 0; l < 16; ++l) {
      const E = l * 16;
      for (let A = 0; A < 16; ++A)
        u[E + A] = d[l] + d[A];
    }
    return u;
  }();
  function I(d) {
    return typeof BigInt > "u" ? R : d;
  }
  function R() {
    throw new Error("BigInt not supported");
  }
})(aa);
const Nf = aa.Buffer, gt = 100 * 1e3 * 1e3, Of = 32768, Sf = 9783072e5;
class Rf {
  constructor(e) {
    console.info({ id: e });
  }
}
class Cf {
  constructor() {
    this.debug = !1;
  }
  parse64Content(e) {
    const n = window.atob(e), i = n.length, o = new Nf(i);
    for (let a = 0; a < i; a++)
      o[a] = n.charCodeAt(a);
    return this.parseBuffer(o);
  }
  parseBuffer(e) {
    if (e.toString("utf8", 0, 6) !== "bplist")
      throw new Error("Invalid binary plist. Expected 'bplist' at offset 0.");
    const o = e.slice(e.length - 32, e.length), a = o.readUInt8(6);
    this.debug && console.log("offsetSize: " + a);
    const c = o.readUInt8(7);
    this.debug && console.log("objectRefSize: " + c);
    const h = this.readUInt64BE(o, 8);
    this.debug && console.log("numObjects: " + h);
    const f = this.readUInt64BE(o, 16);
    this.debug && console.log("topObject: " + f);
    const p = this.readUInt64BE(o, 24);
    if (this.debug && console.log("offsetTableOffset: " + p), h > Of)
      throw new Error("maxObjectCount exceeded");
    const s = [];
    for (let m = 0; m < h; m++) {
      const v = e.slice(p + m * a, p + (m + 1) * a);
      s[m] = this.readUInt(v, 0), this.debug;
    }
    const g = (m) => {
      const v = s[m], b = e[v], w = (b & 240) >> 4, T = b & 15, x = () => {
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
            throw new Error("Unhandled simple type 0x" + w.toString(16));
        }
      }, O = (U) => {
        let J = "", k;
        for (k = 0; k < U.length && U[k] === 0; k++)
          ;
        for (; k < U.length; k++) {
          const K = "00" + U[k].toString(16);
          J += K.substr(K.length - 2);
        }
        return J;
      }, C = () => {
        const U = Math.pow(2, T);
        if (U > 4) {
          const J = e.slice(v + 1, v + 1 + U), k = O(J);
          return wf(k, 16);
        }
        if (U < gt)
          return this.readUInt(e.slice(v + 1, v + 1 + U));
        throw new Error(
          "Too little heap space available! Wanted to read " + U + " bytes, but only " + gt + " are available."
        );
      }, L = () => {
        const U = T + 1;
        if (U < gt)
          return new Rf(this.readUInt(e.slice(v + 1, v + 1 + U)));
        throw new Error(
          "To little heap space available! Wanted to read " + U + " bytes, but only " + gt + " are available."
        );
      }, $ = () => {
        const U = Math.pow(2, T);
        if (U < gt) {
          const J = e.slice(v + 1, v + 1 + U);
          if (U === 4)
            return J.readFloatBE(0);
          if (U === 8)
            return J.readDoubleBE(0);
        } else
          throw new Error(
            "To little heap space available! Wanted to read " + U + " bytes, but only " + gt + " are available."
          );
      }, j = () => {
        T !== 3 && console.error("Unknown date type :" + T + ". Parsing anyway...");
        const U = e.slice(v + 1, v + 9);
        return new Date(Sf + 1e3 * U.readDoubleBE(0));
      }, B = () => {
        let U = 1, J = T;
        if (T === 15) {
          const k = e[v + 1], K = (k & 240) / 16;
          K !== 1 && console.error("0x4: UNEXPECTED LENGTH-INT TYPE! " + K);
          const le = k & 15, de = Math.pow(2, le);
          U = 2 + de, de < 3 ? J = this.readUInt(e.slice(v + 2, v + 2 + de)) : J = this.readUInt(e.slice(v + 2, v + 2 + de));
        }
        if (J < gt)
          return e.slice(v + U, v + U + J);
        throw new Error(
          "To little heap space available! Wanted to read " + J + " bytes, but only " + gt + " are available."
        );
      }, Y = (U) => {
        U = U || 0;
        let J = "utf8", k = T, K = 1;
        if (T === 15) {
          const le = e[v + 1], de = (le & 240) / 16;
          de !== 1 && console.error("UNEXPECTED LENGTH-INT TYPE! " + de);
          const oe = le & 15, he = Math.pow(2, oe);
          K = 2 + he, he < 3 ? k = this.readUInt(e.slice(v + 2, v + 2 + he)) : k = this.readUInt(e.slice(v + 2, v + 2 + he));
        }
        if (k *= U + 1, k < gt) {
          let le = e.toString("utf8", v + K, v + K + k);
          return U && (le = this.swapBytes(le), J = "ucs2"), le.toString(J);
        } else
          throw new Error(
            "To little heap space available! Wanted to read " + k + " bytes, but only " + gt + " are available."
          );
      }, H = () => {
        let U = T, J = 1;
        if (T === 15) {
          const K = e[v + 1], le = (K & 240) / 16;
          le !== 1 && console.error("0xa: UNEXPECTED LENGTH-INT TYPE! " + le);
          const de = K & 15, oe = Math.pow(2, de);
          J = 2 + oe, oe < 3 ? U = this.readUInt(e.slice(v + 2, v + 2 + oe)) : U = this.readUInt(e.slice(v + 2, v + 2 + oe));
        }
        if (U * c > gt)
          throw new Error("To little heap space available!");
        const k = [];
        for (let K = 0; K < U; K++) {
          const le = this.readUInt(
            e.slice(v + J + K * c, v + J + (K + 1) * c)
          );
          k[K] = g(le);
        }
        return k;
      }, ue = () => {
        let U = T, J = 1;
        if (T === 15) {
          const K = e[v + 1], le = (K & 240) / 16;
          le !== 1 && console.error("0xD: UNEXPECTED LENGTH-INT TYPE! " + le);
          const de = K & 15, oe = Math.pow(2, de);
          J = 2 + oe, oe < 3 ? U = this.readUInt(e.slice(v + 2, v + 2 + oe)) : U = this.readUInt(e.slice(v + 2, v + 2 + oe));
        }
        if (U * 2 * c > gt)
          throw new Error("To little heap space available!");
        this.debug && console.log("Parsing dictionary #" + m);
        const k = {};
        for (let K = 0; K < U; K++) {
          const le = this.readUInt(
            e.slice(v + J + K * c, v + J + (K + 1) * c)
          ), de = this.readUInt(
            e.slice(
              v + J + U * c + K * c,
              v + J + U * c + (K + 1) * c
            )
          ), oe = g(le), he = g(de);
          this.debug && console.log("  DICT #" + m + ": Mapped " + oe + " to " + he), k[oe] = he;
        }
        return k;
      };
      switch (w) {
        case 0:
          return x();
        case 1:
          return C();
        case 8:
          return L();
        case 2:
          return $();
        case 3:
          return j();
        case 4:
          return B();
        case 5:
          return Y();
        case 6:
          return Y(!0);
        case 10:
          return H();
        case 13:
          return ue();
        default:
          throw new Error("Unhandled type 0x" + w.toString(16));
      }
    };
    return [g(f)];
  }
  readUInt(e, n) {
    n = n || 0;
    let i = 0;
    for (let o = n; o < e.length; o++)
      i <<= 8, i |= e[o] & 255;
    return i;
  }
  // we're just going to toss the high order bits because javascript doesn't have 64-bit ints
  readUInt64BE(e, n) {
    return e.slice(n, n + 8).readUInt32BE(4, 8);
  }
  swapBytes(e) {
    const n = e.length;
    for (let i = 0; i < n; i += 2) {
      const o = e[i];
      e[i] = e[i + 1], e[i + 1] = o;
    }
    return e;
  }
}
const Lf = new Cf(), Nt = {
  skipConfirmation: "X-Skip-Confirm-Navigation=1",
  sameWindow: "X-Target=_self"
}, Ht = {
  skipConfirmation: "X-Skip-Confirm-Navigation",
  sameWindow: "X-Target"
}, Wo = {
  url: "",
  sameWindow: !1,
  skipConfirmation: !1
};
class Ar {
  /**
   * Generates a URL file.
   */
  static generateURLFileContent(e, n, i = !1, o = !1) {
    let a = "";
    return e && e.indexOf("[InternetShortcut]") !== -1 && e.indexOf("URL=") !== -1 ? a = e.replace(new RegExp("URL=.*", "gm"), `URL=${rt(n)}`) : a = `[InternetShortcut]\r
URL=${rt(n)}`, !i && a.indexOf(Nt.sameWindow) !== -1 ? a = a.replace(Nt.sameWindow, "") : i && a.indexOf(Nt.sameWindow) === -1 && (a = `${a}\r
${Nt.sameWindow}`), !o && a.indexOf(Nt.skipConfirmation) !== -1 ? a = a.replace(Nt.skipConfirmation, "") : o && a.indexOf(Nt.skipConfirmation) === -1 && (a = `${a}\r
${Nt.skipConfirmation}`), a = a.replace(/\r\n\r\n/gm, `\r
`).trim(), `${a}\r
`;
  }
  /**
   * Parse a URL file.
   */
  static parseURLFile(e) {
    const n = { ...Wo };
    if (e) {
      const i = e.match("URL=.*");
      if (i && Array.isArray(i) && i.length > 0) {
        const o = i[0];
        n.url = rt(o.replace("URL=", ""));
      }
      e.indexOf(Nt.skipConfirmation) !== -1 && (n.skipConfirmation = !0), e.indexOf(Nt.sameWindow) !== -1 && (n.sameWindow = !0);
    }
    return n;
  }
  /**
   * Generates a webloc file.
   */
  static generateWeblocFileContent(e, n, i = !1, o = !1) {
    let a = "", c = !1;
    if (e) {
      const h = new window.DOMParser(), f = zo(e), p = h.parseFromString(f, "text/xml"), s = [...p.getElementsByTagName("dict"), ...p.getElementsByTagName("extra")];
      let g = !1, m = !1;
      if (s && s.length)
        for (const b of s) {
          const w = b.getElementsByTagName("key"), T = b.getElementsByTagName("string");
          _t(w) === "URL" && (Kn(T, rt(n)), c = !0), _t(w) === Ht.sameWindow && _t(T) === "_self" && (i ? Kn(T, "_self") : p.getElementsByTagName("plist")[0].removeChild(b), m = !0), _t(w) === Ht.skipConfirmation && _t(T) === "1" && (o ? Kn(T, "1") : p.getElementsByTagName("plist")[0].removeChild(b), g = !0);
        }
      if (i && !m) {
        const b = Go(p, Ht.sameWindow, "_self");
        p.getElementsByTagName("plist")[0].appendChild(b);
      }
      if (o && !g) {
        const b = Go(p, Ht.skipConfirmation, "1");
        p.getElementsByTagName("plist")[0].appendChild(b);
      }
      a = `<?xml version="1.0" encoding="UTF-8"?>
			${new window.XMLSerializer().serializeToString(p)}`, a.indexOf("parsererror") > -1 && (console.error("Parse error", a), a = ""), a = Pf(a);
    }
    return (!a || !c) && (a = `<?xml version="1.0" encoding="UTF-8"?>
				<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
				<plist version="1.0">
					<dict>
						<key>URL</key>
						<string>${rt(n)}</string>
					</dict>`, i && (a = `${a}
				<extra>
					<key>${Ht.sameWindow}</key>
					<string>_self</string>
				</extra>`), o && (a = `${a}
				<extra>
					<key>${Ht.skipConfirmation}</key>
					<string>1</string>
				</extra>`), a = `${a}
			</plist>`), a = $f(a), a = a.replace(/(\n|\b)\t+/g, "$1").trim(), a = a.replace(/^\s*$(?:\r\n?|\n)/gm, "").trim(), a;
  }
  /**
   * Parse a webloc file.
   */
  static parseWeblocFile(e) {
    const n = { ...Wo };
    if (e)
      if (e.substring(0, 6) === "bplist")
        try {
          const i = Lf.parse64Content(window.btoa(e));
          i && i.length && i[0] && i[0].URL && (n.url = i[0].URL);
        } catch (i) {
          console.info(i);
        }
      else {
        const i = new window.DOMParser(), o = zo(e), a = i.parseFromString(o, "text/xml"), c = [...a.getElementsByTagName("dict"), ...a.getElementsByTagName("extra")];
        if (c && c.length)
          for (const h of c) {
            const f = h.getElementsByTagName("key"), p = h.getElementsByTagName("string");
            _t(f) === "URL" && (n.url = rt(_t(p))), _t(f) === Ht.sameWindow && _t(p) === "_self" && (n.sameWindow = !0), _t(f) === Ht.skipConfirmation && _t(p) === "1" && (n.skipConfirmation = !0);
          }
      }
    return n;
  }
  /**
   * Get extension from filename.
   */
  static getExtension(e) {
    if (e) {
      const n = e.split(".");
      if (n && Array.isArray(n) && n.length > 1) {
        const i = n[n.length - 1];
        if (i)
          return i.toLowerCase();
      }
    }
    return "";
  }
}
const _t = (r) => r && r.length > 0 && r[0].childNodes && r[0].childNodes.length > 0 && r[0].childNodes[0] ? r[0].childNodes[0].nodeValue : "", Kn = (r, e) => {
  r && r.length > 0 && r[0].childNodes && r[0].childNodes.length > 0 && r[0].childNodes[0] && (r[0].childNodes[0].nodeValue = e);
}, Go = (r, e, n) => {
  const i = r.createElement("extra"), o = r.createElement("key");
  o.appendChild(r.createTextNode(e)), i.appendChild(o);
  const a = r.createElement("string");
  return a.appendChild(r.createTextNode(n)), i.appendChild(a), i;
}, Pf = (r) => r.replace(/></g, `>
<`), $f = (r) => r.replace(/<extra>/g, "<!-- <extra>").replace(/<\/extra>/g, "</extra> -->"), zo = (r) => r.replace(/<!-- <extra>/g, "<extra>").replace(/<\/extra> -->/g, "</extra>"), Vo = "application/internet-shortcut", Qn = () => '<span class="icon-link" style="display: block;"></span>';
window.OC.dialogs.alert = function(r, e) {
  window.OC.dialogs.message(
    t("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."),
    t("files_linkeditor", "A slight problem"),
    "alert",
    71
    // Dialogs.OK_BUTTONS
  );
};
class fr {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    lo({
      id: "editLink",
      displayName: () => t("files_linkeditor", "Edit link"),
      iconSvgInline: Qn,
      exec: async ({ nodes: n }) => {
        const [i] = n;
        i && await fr.loadAndChangeViewMode({
          fileName: i.basename,
          dirName: i.dirname,
          nextViewMode: "edit",
          permissions: i.permissions
        });
      },
      enabled: ({ nodes: n }) => window.OC.currentUser && n.every((i) => i.permissions >= We.WRITE && Vo.includes(i.mime))
    }), lo({
      id: "viewLink",
      displayName: () => t("files_linkeditor", "View link"),
      title: () => "Hello",
      iconSvgInline: Qn,
      exec: async ({ nodes: n }) => {
        const [i] = n;
        i && (window.OC.currentUser ? await fr.loadAndChangeViewMode({
          fileName: i.basename,
          dirName: i.dirname,
          nextViewMode: "view",
          permissions: i.permissions
        }) : await fr.loadAndChangeViewMode({
          fileName: i.displayname ?? i.basename,
          dirName: i.dirname,
          nextViewMode: "view",
          // TODO:
          downloadUrl: i.source,
          publicUser: !0,
          permissions: i.permissions
        }));
      },
      enabled: ({ nodes: n }) => n.every((i) => i.permissions >= We.READ && Vo.includes(i.mime)),
      default: Ss.DEFAULT
    });
    const e = ({ id: n, displayName: i, templateName: o }) => {
      rl({
        id: n,
        displayName: i,
        enabled: (a) => a.permissions >= We.CREATE,
        iconSvgInline: Qn(),
        category: Rs.CreateNew,
        handler: (a, c) => {
          const h = a.path;
          $t.update(() => "filename"), cr.update(
            () => ut.getFileConfig({
              name: o,
              templateName: o,
              dir: h,
              isNew: !0,
              existingContents: c,
              onCreate: async (f) => {
                $t.update(() => "edit"), cr.update(
                  () => ut.getFileConfig({
                    name: f.name,
                    dir: f.dir,
                    isNew: !0,
                    onCreate: async (p) => {
                      await fr.saveAndChangeViewMode(p);
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
  static async loadAndChangeViewMode({ fileName: e, dirName: n, nextViewMode: i, publicUser: o, downloadUrl: a, permissions: c }) {
    $t.update(() => i), cr.update(
      () => ut.getFileConfig({
        name: e,
        dir: n || "",
        permissions: c,
        isPublicLink: o
      })
    );
    let h = {};
    if (o ? h = await ut.loadPublic({ downloadUrl: a }) : h = await ut.load({ fileName: e, dir: n }), h) {
      const f = Ar.getExtension(e);
      let p = {};
      f === "webloc" ? p = Ar.parseWeblocFile(h.filecontents) : p = Ar.parseURLFile(h.filecontents), cr.update(
        (s) => ut.getFileConfig({
          ...s,
          ...p,
          fileModifiedTime: h.mtime,
          isLoaded: !0
        })
      );
    } else
      window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async saveAndChangeViewMode({ name: e, dir: n, url: i, sameWindow: o, skipConfirmation: a }) {
    const c = Ar.getExtension(e);
    let h = "";
    c === "webloc" ? h = Ar.generateWeblocFileContent("", i, o, a) : h = Ar.generateURLFileContent("", i, o, a), await ut.save({ fileContent: h, name: e, dir: n }), $t.update(() => "none");
  }
}
function qo(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "Link target URL") + ""
  ), i, o, a, c, h, f, p, s, g, m, v, b, w, T, x, O;
  return {
    c() {
      e = ie("label"), i = ze(n), o = Ee(), a = ie("br"), c = Ee(), h = ie("input"), f = Ee(), p = ie("input"), s = Ee(), g = ie("label"), g.textContent = `${/*t*/
      r[2]("files_linkeditor", "Open in same window")}`, m = Ee(), v = ie("input"), w = Ee(), T = ie("label"), T.textContent = `${/*t*/
      r[2]("files_linkeditor", "Skip confirmation dialog before open (has to open in same window)")}`, z(h, "type", "text"), wi(h, "width", "100%"), z(h, "class", "input-wide"), h.autofocus = !0, z(h, "data-cy", "url-input"), z(
        h,
        "placeholder",
        /*t*/
        r[2]("files_linkeditor", "e.g. https://example.org")
      ), z(p, "type", "checkbox"), z(p, "id", "linkeditor_sameWindow"), z(p, "class", "checkbox"), z(g, "for", "linkeditor_sameWindow"), z(g, "class", "space-top"), z(v, "type", "checkbox"), v.disabled = b = !/*file*/
      r[0].sameWindow, z(v, "id", "linkeditor_skipConfirmation"), z(v, "class", "checkbox"), z(T, "for", "linkeditor_skipConfirmation");
    },
    m(C, L) {
      pe(C, e, L), Z(e, i), Z(e, o), Z(e, a), Z(e, c), Z(e, h), dn(
        h,
        /*file*/
        r[0].url
      ), pe(C, f, L), pe(C, p, L), p.checked = /*file*/
      r[0].sameWindow, pe(C, s, L), pe(C, g, L), pe(C, m, L), pe(C, v, L), v.checked = /*file*/
      r[0].skipConfirmation, pe(C, w, L), pe(C, T, L), h.focus(), x || (O = [
        ct(
          h,
          "input",
          /*input0_input_handler*/
          r[5]
        ),
        ct(
          p,
          "change",
          /*input1_change_handler*/
          r[6]
        ),
        ct(
          v,
          "change",
          /*input2_change_handler*/
          r[7]
        )
      ], x = !0);
    },
    p(C, L) {
      L & /*file*/
      1 && h.value !== /*file*/
      C[0].url && dn(
        h,
        /*file*/
        C[0].url
      ), L & /*file*/
      1 && (p.checked = /*file*/
      C[0].sameWindow), L & /*file*/
      1 && b !== (b = !/*file*/
      C[0].sameWindow) && (v.disabled = b), L & /*file*/
      1 && (v.checked = /*file*/
      C[0].skipConfirmation);
    },
    d(C) {
      C && (fe(e), fe(f), fe(p), fe(s), fe(g), fe(m), fe(v), fe(w), fe(T)), x = !1, Wt(O);
    }
  };
}
function Ho(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "Visit link") + ""
  ), i, o;
  return {
    c() {
      e = ie("a"), i = ze(n), z(e, "href", o = rt(
        /*file*/
        r[0].url
      )), z(e, "target", "_blank"), z(e, "class", "button");
    },
    m(a, c) {
      pe(a, e, c), Z(e, i);
    },
    p(a, c) {
      c & /*file*/
      1 && o !== (o = rt(
        /*file*/
        a[0].url
      )) && z(e, "href", o);
    },
    d(a) {
      a && fe(e);
    }
  };
}
function Xo(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "Save") + ""
  ), i, o, a;
  return {
    c() {
      e = ie("a"), i = ze(n), z(e, "href", window.location.href), z(e, "class", "primary button");
    },
    m(c, h) {
      pe(c, e, h), Z(e, i), o || (a = ct(e, "click", Qt(
        /*save*/
        r[4]
      )), o = !0);
    },
    p: Jt,
    d(c) {
      c && fe(e), o = !1, a();
    }
  };
}
function kf(r) {
  let e, n, i, o = (
    /*file*/
    r[0].name + ""
  ), a, c, h, f, p, s, g, m = (
    /*t*/
    r[2]("files_linkeditor", "Cancel") + ""
  ), v, b, w, T, x = !/*loading*/
  r[1] && qo(r), O = !/*loading*/
  r[1] && Ho(r), C = !/*loading*/
  r[1] && Xo(r);
  return {
    c() {
      e = ie("form"), n = ie("div"), i = ie("h3"), a = ze(o), c = Ee(), x && x.c(), h = Ee(), f = ie("div"), O && O.c(), p = Ee(), s = ie("div"), g = ie("a"), v = ze(m), b = Ee(), C && C.c(), z(n, "class", "edit"), z(f, "class", "oc-dialog-buttonrow onebutton urlvisit"), z(g, "href", window.location.href), z(g, "class", "cancel button"), z(s, "class", "oc-dialog-buttonrow twobuttons"), z(
        e,
        "action",
        /*OC*/
        r[3].generateUrl("/")
      ), z(e, "method", "post");
    },
    m(L, $) {
      pe(L, e, $), Z(e, n), Z(n, i), Z(i, a), Z(n, c), x && x.m(n, null), Z(e, h), Z(e, f), O && O.m(f, null), Z(e, p), Z(e, s), Z(s, g), Z(g, v), Z(s, b), C && C.m(s, null), w || (T = [
        ct(g, "click", Qt(
          /*click_handler*/
          r[8]
        )),
        ct(e, "submit", Qt(
          /*save*/
          r[4]
        ))
      ], w = !0);
    },
    p(L, $) {
      $ & /*file*/
      1 && o !== (o = /*file*/
      L[0].name + "") && yi(a, o), /*loading*/
      L[1] ? x && (x.d(1), x = null) : x ? x.p(L, $) : (x = qo(L), x.c(), x.m(n, null)), /*loading*/
      L[1] ? O && (O.d(1), O = null) : O ? O.p(L, $) : (O = Ho(L), O.c(), O.m(f, null)), /*loading*/
      L[1] ? C && (C.d(1), C = null) : C ? C.p(L, $) : (C = Xo(L), C.c(), C.m(s, null));
    },
    d(L) {
      L && fe(e), x && x.d(), O && O.d(), C && C.d(), w = !1, Wt(T);
    }
  };
}
function Df(r) {
  let e, n;
  return e = new Ei({
    props: {
      loading: (
        /*loading*/
        r[1]
      ),
      $$slots: { default: [kf] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      Lr(e.$$.fragment);
    },
    m(i, o) {
      gr(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = {};
      o & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), o & /*$$scope, loading, file*/
      1027 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (Ue(e.$$.fragment, i), n = !0);
    },
    o(i) {
      lt(e.$$.fragment, i), n = !1;
    },
    d(i) {
      mr(e, i);
    }
  };
}
function Mf(r, e, n) {
  let i, o;
  const a = window.t, c = window.OC;
  let h;
  _n(() => {
    h = cr.subscribe((v) => {
      n(0, i = v), i && (i.isLoaded || i.isNew) && n(1, o = !1);
    });
  }), Tn(() => {
    h();
  });
  const f = () => {
    n(1, o = !0), i.isNew && i.onCreate ? i.onCreate({ ...i }) : fr.saveAndChangeViewMode({ ...i });
  };
  function p() {
    i.url = this.value, n(0, i);
  }
  function s() {
    i.sameWindow = this.checked, n(0, i);
  }
  function g() {
    i.skipConfirmation = this.checked, n(0, i);
  }
  const m = () => {
    $t.update(() => "none");
  };
  return n(0, i = ut.getFileConfig()), n(1, o = !0), [
    i,
    o,
    a,
    c,
    f,
    p,
    s,
    g,
    m
  ];
}
class Ff extends en {
  constructor(e) {
    super(), Qr(this, e, Mf, Df, Cr, {});
  }
}
const Yo = (r) => {
  if (!(r != null && r.name) || !(r != null && r.templateName))
    return r;
  const [, e] = r.templateName.split(".") ?? [], n = r.name.toLocaleLowerCase();
  return e && !n.endsWith(e.toLocaleLowerCase()) && (r.name += `.${e}`), r;
};
function Zo(r) {
  let e, n = (
    /*t*/
    r[3]("files_linkeditor", "File name") + ""
  ), i, o, a, c, h, f, p;
  return {
    c() {
      e = ie("label"), i = ze(n), o = Ee(), a = ie("br"), c = Ee(), h = ie("input"), z(h, "type", "text"), wi(h, "width", "100%"), z(h, "class", "input-wide"), h.autofocus = !0, z(h, "data-cy", "name-input");
    },
    m(s, g) {
      pe(s, e, g), Z(e, i), Z(e, o), Z(e, a), Z(e, c), Z(e, h), dn(
        h,
        /*file*/
        r[0].name
      ), h.focus(), f || (p = [
        ct(
          h,
          "input",
          /*input_input_handler*/
          r[7]
        ),
        ct(
          h,
          "keyup",
          /*checkConflicts*/
          r[5]
        )
      ], f = !0);
    },
    p(s, g) {
      g & /*file*/
      1 && h.value !== /*file*/
      s[0].name && dn(
        h,
        /*file*/
        s[0].name
      );
    },
    d(s) {
      s && fe(e), f = !1, Wt(p);
    }
  };
}
function Jo(r) {
  let e, n = (
    /*t*/
    r[3]("files_linkeditor", "Create") + ""
  ), i, o, a;
  return {
    c() {
      e = ie("button"), i = ze(n), z(e, "type", "submit"), e.disabled = /*isConflicting*/
      r[2], z(e, "class", "primary button");
    },
    m(c, h) {
      pe(c, e, h), Z(e, i), o || (a = ct(e, "click", Qt(
        /*save*/
        r[6]
      )), o = !0);
    },
    p(c, h) {
      h & /*isConflicting*/
      4 && (e.disabled = /*isConflicting*/
      c[2]);
    },
    d(c) {
      c && fe(e), o = !1, a();
    }
  };
}
function Uf(r) {
  let e, n, i, o, a, c, h, f = (
    /*t*/
    r[3]("files_linkeditor", "Cancel") + ""
  ), p, s, g, m, v = !/*loading*/
  r[1] && Zo(r), b = !/*loading*/
  r[1] && Jo(r);
  return {
    c() {
      e = ie("form"), n = ie("div"), i = ie("h3"), i.textContent = `${window.t("files_linkeditor", "New link")}`, o = Ee(), v && v.c(), a = Ee(), c = ie("div"), h = ie("a"), p = ze(f), s = Ee(), b && b.c(), z(n, "class", "edit"), z(h, "href", window.location.href), z(h, "class", "cancel button"), z(c, "class", "oc-dialog-buttonrow twobuttons"), z(
        e,
        "action",
        /*OC*/
        r[4].generateUrl("/")
      ), z(e, "method", "post");
    },
    m(w, T) {
      pe(w, e, T), Z(e, n), Z(n, i), Z(n, o), v && v.m(n, null), Z(e, a), Z(e, c), Z(c, h), Z(h, p), Z(c, s), b && b.m(c, null), g || (m = [
        ct(h, "click", Qt(
          /*click_handler*/
          r[8]
        )),
        ct(e, "submit", Qt(
          /*save*/
          r[6]
        ))
      ], g = !0);
    },
    p(w, T) {
      /*loading*/
      w[1] ? v && (v.d(1), v = null) : v ? v.p(w, T) : (v = Zo(w), v.c(), v.m(n, null)), /*loading*/
      w[1] ? b && (b.d(1), b = null) : b ? b.p(w, T) : (b = Jo(w), b.c(), b.m(c, null));
    },
    d(w) {
      w && fe(e), v && v.d(), b && b.d(), g = !1, Wt(m);
    }
  };
}
function Bf(r) {
  let e, n;
  return e = new Ei({
    props: {
      loading: (
        /*loading*/
        r[1]
      ),
      $$slots: { default: [Uf] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      Lr(e.$$.fragment);
    },
    m(i, o) {
      gr(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = {};
      o & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), o & /*$$scope, isConflicting, loading, file*/
      2055 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (Ue(e.$$.fragment, i), n = !0);
    },
    o(i) {
      lt(e.$$.fragment, i), n = !1;
    },
    d(i) {
      mr(e, i);
    }
  };
}
function jf(r, e, n) {
  let i, o, a;
  const c = window.t, h = window.OC, f = (b, w) => {
    const T = {
      name: b,
      templateName: i.templateName
    }, x = Yo(T);
    return ((w == null ? void 0 : w.map((C) => C.basename)) ?? []).includes(x.name);
  };
  let p;
  _n(() => {
    p = cr.subscribe((b) => {
      n(0, i = b), i && (i.isLoaded || i.isNew) && (n(1, o = !1), s());
    });
  }), Tn(() => {
    p();
  });
  const s = () => {
    f(i.name, i.existingContents) ? n(2, a = !0) : n(2, a = !1);
  }, g = () => {
    f(i.name, i.existingContents) || (n(1, o = !0), i.onCreate(Yo({ ...i })));
  };
  function m() {
    i.name = this.value, n(0, i);
  }
  const v = () => {
    $t.update(() => "none");
  };
  return n(0, i = ut.getFileConfig()), n(1, o = !0), n(2, a = !0), [
    i,
    o,
    a,
    c,
    h,
    s,
    g,
    m,
    v
  ];
}
class Wf extends en {
  constructor(e) {
    super(), Qr(this, e, jf, Bf, Cr, {});
  }
}
function Ko(r) {
  let e, n;
  return e = new Wf({}), {
    c() {
      Lr(e.$$.fragment);
    },
    m(i, o) {
      gr(e, i, o), n = !0;
    },
    i(i) {
      n || (Ue(e.$$.fragment, i), n = !0);
    },
    o(i) {
      lt(e.$$.fragment, i), n = !1;
    },
    d(i) {
      mr(e, i);
    }
  };
}
function Qo(r) {
  let e, n;
  return e = new mf({}), {
    c() {
      Lr(e.$$.fragment);
    },
    m(i, o) {
      gr(e, i, o), n = !0;
    },
    i(i) {
      n || (Ue(e.$$.fragment, i), n = !0);
    },
    o(i) {
      lt(e.$$.fragment, i), n = !1;
    },
    d(i) {
      mr(e, i);
    }
  };
}
function es(r) {
  let e, n;
  return e = new Ff({}), {
    c() {
      Lr(e.$$.fragment);
    },
    m(i, o) {
      gr(e, i, o), n = !0;
    },
    i(i) {
      n || (Ue(e.$$.fragment, i), n = !0);
    },
    o(i) {
      lt(e.$$.fragment, i), n = !1;
    },
    d(i) {
      mr(e, i);
    }
  };
}
function Gf(r) {
  let e, n, i, o, a = (
    /*viewMode*/
    r[0] === "filename" && Ko()
  ), c = (
    /*viewMode*/
    r[0] === "view" && Qo()
  ), h = (
    /*viewMode*/
    r[0] === "edit" && es()
  );
  return {
    c() {
      a && a.c(), e = Ee(), c && c.c(), n = Ee(), h && h.c(), i = _a();
    },
    m(f, p) {
      a && a.m(f, p), pe(f, e, p), c && c.m(f, p), pe(f, n, p), h && h.m(f, p), pe(f, i, p), o = !0;
    },
    p(f, [p]) {
      /*viewMode*/
      f[0] === "filename" ? a ? p & /*viewMode*/
      1 && Ue(a, 1) : (a = Ko(), a.c(), Ue(a, 1), a.m(e.parentNode, e)) : a && (Pn(), lt(a, 1, 1, () => {
        a = null;
      }), $n()), /*viewMode*/
      f[0] === "view" ? c ? p & /*viewMode*/
      1 && Ue(c, 1) : (c = Qo(), c.c(), Ue(c, 1), c.m(n.parentNode, n)) : c && (Pn(), lt(c, 1, 1, () => {
        c = null;
      }), $n()), /*viewMode*/
      f[0] === "edit" ? h ? p & /*viewMode*/
      1 && Ue(h, 1) : (h = es(), h.c(), Ue(h, 1), h.m(i.parentNode, i)) : h && (Pn(), lt(h, 1, 1, () => {
        h = null;
      }), $n());
    },
    i(f) {
      o || (Ue(a), Ue(c), Ue(h), o = !0);
    },
    o(f) {
      lt(a), lt(c), lt(h), o = !1;
    },
    d(f) {
      f && (fe(e), fe(n), fe(i)), a && a.d(f), c && c.d(f), h && h.d(f);
    }
  };
}
function zf(r, e, n) {
  let i, o;
  return _n(() => {
    o = $t.subscribe((a) => {
      n(0, i = a);
    });
  }), Tn(() => {
    o();
  }), n(0, i = ""), [i];
}
class Vf extends en {
  constructor(e) {
    super(), Qr(this, e, zf, Gf, Cr, {});
  }
}
const qf = [];
qf.push(
  new Vf({
    target: document.body,
    props: {}
  })
);
fr.registerFileActions();
