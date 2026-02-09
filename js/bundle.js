var wa = Object.defineProperty;
var Xi = (r) => {
  throw TypeError(r);
};
var ya = (r, e, n) => e in r ? wa(r, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[e] = n;
var te = (r, e, n) => ya(r, typeof e != "symbol" ? e + "" : e, n), kn = (r, e, n) => e.has(r) || Xi("Cannot " + n);
var F = (r, e, n) => (kn(r, e, "read from private field"), n ? n.call(r) : e.get(r)), tt = (r, e, n) => e.has(r) ? Xi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, n), _e = (r, e, n, i) => (kn(r, e, "write to private field"), i ? i.call(r, n) : e.set(r, n), n), Yt = (r, e, n) => (kn(r, e, "access private method"), n);
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
function Mt() {
}
function Ea(r, e) {
  for (const n in e) r[n] = e[n];
  return (
    /** @type {T & S} */
    r
  );
}
function as(r) {
  return r();
}
function Yi() {
  return /* @__PURE__ */ Object.create(null);
}
function qt(r) {
  r.forEach(as);
}
function vi(r) {
  return typeof r == "function";
}
function wr(r, e) {
  return r != r ? e == e : r !== e || r && typeof r == "object" || typeof r == "function";
}
function va(r) {
  return Object.keys(r).length === 0;
}
function ba(r, e, n, i) {
  if (r) {
    const o = us(r, e, n, i);
    return r[0](o);
  }
}
function us(r, e, n, i) {
  return r[1] && i ? Ea(n.ctx.slice(), r[1](i(e))) : n.ctx;
}
function Ta(r, e, n, i) {
  return r[2], e.dirty;
}
function _a(r, e, n, i, o, a) {
  if (o) {
    const l = us(e, n, i, a);
    r.p(l, o);
  }
}
function Aa(r) {
  if (r.ctx.length > 32) {
    const e = [], n = r.ctx.length / 32;
    for (let i = 0; i < n; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
const nn = globalThis || void 0 || self;
function Y(r, e) {
  r.appendChild(e);
}
function he(r, e, n) {
  r.insertBefore(e, n || null);
}
function fe(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function ne(r) {
  return document.createElement(r);
}
function Be(r) {
  return document.createTextNode(r);
}
function Ee() {
  return Be(" ");
}
function Ia() {
  return Be("");
}
function it(r, e, n, i) {
  return r.addEventListener(e, n, i), () => r.removeEventListener(e, n, i);
}
function zt(r) {
  return function(e) {
    return e.preventDefault(), r.call(this, e);
  };
}
function G(r, e, n) {
  n == null ? r.removeAttribute(e) : r.getAttribute(e) !== n && r.setAttribute(e, n);
}
function Na(r) {
  return Array.from(r.childNodes);
}
function bi(r, e) {
  e = "" + e, r.data !== e && (r.data = /** @type {string} */
  e);
}
function wn(r, e) {
  r.value = e ?? "";
}
function Ti(r, e, n, i) {
  n == null ? r.style.removeProperty(e) : r.style.setProperty(e, n, "");
}
let en;
function Jr(r) {
  en = r;
}
function ls() {
  if (!en) throw new Error("Function called outside component initialization");
  return en;
}
function In(r) {
  ls().$$.on_mount.push(r);
}
function Nn(r) {
  ls().$$.on_destroy.push(r);
}
const xr = [], Zi = [];
let Lr = [];
const Ji = [], xa = /* @__PURE__ */ Promise.resolve();
let ni = !1;
function Oa() {
  ni || (ni = !0, xa.then(cs));
}
function ii(r) {
  Lr.push(r);
}
const $n = /* @__PURE__ */ new Set();
let _r = 0;
function cs() {
  if (_r !== 0)
    return;
  const r = en;
  do {
    try {
      for (; _r < xr.length; ) {
        const e = xr[_r];
        _r++, Jr(e), Sa(e.$$);
      }
    } catch (e) {
      throw xr.length = 0, _r = 0, e;
    }
    for (Jr(null), xr.length = 0, _r = 0; Zi.length; ) Zi.pop()();
    for (let e = 0; e < Lr.length; e += 1) {
      const n = Lr[e];
      $n.has(n) || ($n.add(n), n());
    }
    Lr.length = 0;
  } while (xr.length);
  for (; Ji.length; )
    Ji.pop()();
  ni = !1, $n.clear(), Jr(r);
}
function Sa(r) {
  if (r.fragment !== null) {
    r.update(), qt(r.before_update);
    const e = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, e), r.after_update.forEach(ii);
  }
}
function Ra(r) {
  const e = [], n = [];
  Lr.forEach((i) => r.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), Lr = e;
}
const pn = /* @__PURE__ */ new Set();
let fr;
function Dn() {
  fr = {
    r: 0,
    c: [],
    p: fr
    // parent group
  };
}
function Mn() {
  fr.r || qt(fr.c), fr = fr.p;
}
function Ue(r, e) {
  r && r.i && (pn.delete(r), r.i(e));
}
function ct(r, e, n, i) {
  if (r && r.o) {
    if (pn.has(r)) return;
    pn.add(r), fr.c.push(() => {
      pn.delete(r), i && (n && r.d(1), i());
    }), r.o(e);
  } else i && i();
}
function kr(r) {
  r && r.c();
}
function yr(r, e, n) {
  const { fragment: i, after_update: o } = r.$$;
  i && i.m(e, n), ii(() => {
    const a = r.$$.on_mount.map(as).filter(vi);
    r.$$.on_destroy ? r.$$.on_destroy.push(...a) : qt(a), r.$$.on_mount = [];
  }), o.forEach(ii);
}
function Er(r, e) {
  const n = r.$$;
  n.fragment !== null && (Ra(n.after_update), qt(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Ca(r, e) {
  r.$$.dirty[0] === -1 && (xr.push(r), Oa(), r.$$.dirty.fill(0)), r.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function $r(r, e, n, i, o, a, l = null, h = [-1]) {
  const f = en;
  Jr(r);
  const p = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: Mt,
    not_equal: o,
    bound: Yi(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: Yi(),
    dirty: h,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  l && l(p.root);
  let s = !1;
  if (p.ctx = n ? n(r, e.props || {}, (g, m, ...v) => {
    const b = v.length ? v[0] : m;
    return p.ctx && o(p.ctx[g], p.ctx[g] = b) && (!p.skip_bound && p.bound[g] && p.bound[g](b), s && Ca(r, g)), m;
  }) : [], p.update(), s = !0, qt(p.before_update), p.fragment = i ? i(p.ctx) : !1, e.target) {
    if (e.hydrate) {
      const g = Na(e.target);
      p.fragment && p.fragment.l(g), g.forEach(fe);
    } else
      p.fragment && p.fragment.c();
    e.intro && Ue(r.$$.fragment), yr(r, e.target, e.anchor), cs();
  }
  Jr(f);
}
class Dr {
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
    Er(this, 1), this.$destroy = Mt;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!vi(n))
      return Mt;
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
    this.$$set && !va(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const La = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(La);
function Pa(r) {
  let e, n, i, o, a;
  const l = (
    /*#slots*/
    r[2].default
  ), h = ba(
    l,
    r,
    /*$$scope*/
    r[1],
    null
  );
  return {
    c() {
      e = ne("div"), n = Ee(), i = ne("div"), h && h.c(), G(e, "class", "oc-dialog-dim"), G(i, "class", o = `oc-dialog ${/*loading*/
      r[0] ? "icon-loading" : ""}`), Ti(i, "position", "fixed");
    },
    m(f, p) {
      he(f, e, p), he(f, n, p), he(f, i, p), h && h.m(i, null), a = !0;
    },
    p(f, [p]) {
      h && h.p && (!a || p & /*$$scope*/
      2) && _a(
        h,
        l,
        f,
        /*$$scope*/
        f[1],
        a ? Ta(
          l,
          /*$$scope*/
          f[1],
          p,
          null
        ) : Aa(
          /*$$scope*/
          f[1]
        ),
        null
      ), (!a || p & /*loading*/
      1 && o !== (o = `oc-dialog ${/*loading*/
      f[0] ? "icon-loading" : ""}`)) && G(i, "class", o);
    },
    i(f) {
      a || (Ue(h, f), a = !0);
    },
    o(f) {
      ct(h, f), a = !1;
    },
    d(f) {
      f && (fe(e), fe(n), fe(i)), h && h.d(f);
    }
  };
}
function ka(r, e, n) {
  let { $$slots: i = {}, $$scope: o } = e, { loading: a = !1 } = e;
  return r.$$set = (l) => {
    "loading" in l && n(0, a = l.loading), "$$scope" in l && n(1, o = l.$$scope);
  }, [a, o, i];
}
class _i extends Dr {
  constructor(e) {
    super(), $r(this, e, ka, Pa, wr, { loading: 0 });
  }
}
const Ar = [];
function fs(r, e = Mt) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function o(h) {
    if (wr(r, h) && (r = h, n)) {
      const f = !Ar.length;
      for (const p of i)
        p[1](), Ar.push(p, r);
      if (f) {
        for (let p = 0; p < Ar.length; p += 2)
          Ar[p][0](Ar[p + 1]);
        Ar.length = 0;
      }
    }
  }
  function a(h) {
    o(h(r));
  }
  function l(h, f = Mt) {
    const p = [h, f];
    return i.add(p), i.size === 1 && (n = e(o, a) || Mt), h(r), () => {
      i.delete(p), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: a, subscribe: l };
}
function Ai(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Ii = {}, We = {};
Object.defineProperty(We, "__esModule", { value: !0 });
We.BLANK_URL = We.relativeFirstCharacters = We.urlSchemeRegex = We.ctrlCharactersRegex = We.htmlCtrlEntityRegex = We.htmlEntitiesRegex = We.invalidProtocolRegex = void 0;
We.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
We.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
We.htmlCtrlEntityRegex = /&(newline|tab);/gi;
We.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
We.urlSchemeRegex = /^.+(:|&colon;)/gim;
We.relativeFirstCharacters = [".", "/"];
We.BLANK_URL = "about:blank";
Object.defineProperty(Ii, "__esModule", { value: !0 });
var Xe = Ii.sanitizeUrl = void 0, ut = We;
function $a(r) {
  return ut.relativeFirstCharacters.indexOf(r[0]) > -1;
}
function Da(r) {
  var e = r.replace(ut.ctrlCharactersRegex, "");
  return e.replace(ut.htmlEntitiesRegex, function(n, i) {
    return String.fromCharCode(i);
  });
}
function Ma(r) {
  if (!r)
    return ut.BLANK_URL;
  var e, n = r;
  do
    n = Da(n).replace(ut.htmlCtrlEntityRegex, "").replace(ut.ctrlCharactersRegex, "").trim(), e = n.match(ut.ctrlCharactersRegex) || n.match(ut.htmlEntitiesRegex) || n.match(ut.htmlCtrlEntityRegex);
  while (e && e.length > 0);
  var i = n;
  if (!i)
    return ut.BLANK_URL;
  if ($a(i))
    return i;
  var o = i.match(ut.urlSchemeRegex);
  if (!o)
    return i;
  var a = o[0];
  return ut.invalidProtocolRegex.test(a) ? ut.BLANK_URL : i;
}
Xe = Ii.sanitizeUrl = Ma;
function Fa(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var hs = { exports: {} }, Ie = hs.exports = {}, Lt, Pt;
function oi() {
  throw new Error("setTimeout has not been defined");
}
function si() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Lt = setTimeout : Lt = oi;
  } catch {
    Lt = oi;
  }
  try {
    typeof clearTimeout == "function" ? Pt = clearTimeout : Pt = si;
  } catch {
    Pt = si;
  }
})();
function ps(r) {
  if (Lt === setTimeout)
    return setTimeout(r, 0);
  if ((Lt === oi || !Lt) && setTimeout)
    return Lt = setTimeout, setTimeout(r, 0);
  try {
    return Lt(r, 0);
  } catch {
    try {
      return Lt.call(null, r, 0);
    } catch {
      return Lt.call(this, r, 0);
    }
  }
}
function Ua(r) {
  if (Pt === clearTimeout)
    return clearTimeout(r);
  if ((Pt === si || !Pt) && clearTimeout)
    return Pt = clearTimeout, clearTimeout(r);
  try {
    return Pt(r);
  } catch {
    try {
      return Pt.call(null, r);
    } catch {
      return Pt.call(this, r);
    }
  }
}
var Vt = [], Pr = !1, hr, dn = -1;
function Ba() {
  !Pr || !hr || (Pr = !1, hr.length ? Vt = hr.concat(Vt) : dn = -1, Vt.length && ds());
}
function ds() {
  if (!Pr) {
    var r = ps(Ba);
    Pr = !0;
    for (var e = Vt.length; e; ) {
      for (hr = Vt, Vt = []; ++dn < e; )
        hr && hr[dn].run();
      dn = -1, e = Vt.length;
    }
    hr = null, Pr = !1, Ua(r);
  }
}
Ie.nextTick = function(r) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var n = 1; n < arguments.length; n++)
      e[n - 1] = arguments[n];
  Vt.push(new gs(r, e)), Vt.length === 1 && !Pr && ps(ds);
};
function gs(r, e) {
  this.fun = r, this.array = e;
}
gs.prototype.run = function() {
  this.fun.apply(null, this.array);
};
Ie.title = "browser";
Ie.browser = !0;
Ie.env = {};
Ie.argv = [];
Ie.version = "";
Ie.versions = {};
function Ht() {
}
Ie.on = Ht;
Ie.addListener = Ht;
Ie.once = Ht;
Ie.off = Ht;
Ie.removeListener = Ht;
Ie.removeAllListeners = Ht;
Ie.emit = Ht;
Ie.prependListener = Ht;
Ie.prependOnceListener = Ht;
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
var ja = hs.exports;
const Nt = /* @__PURE__ */ Fa(ja), Wa = typeof Nt == "object" && Nt.env && Nt.env.NODE_DEBUG && /\bsemver\b/i.test(Nt.env.NODE_DEBUG) ? (...r) => console.error("SEMVER", ...r) : () => {
};
var ms = Wa;
const ws = 256, Ga = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, Va = 16, za = ws - 6;
var ys = {
  MAX_LENGTH: ws,
  MAX_SAFE_COMPONENT_LENGTH: Va,
  MAX_SAFE_BUILD_LENGTH: za,
  MAX_SAFE_INTEGER: Ga
}, ai = { exports: {} };
(function(r, e) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: n,
    MAX_SAFE_BUILD_LENGTH: i,
    MAX_LENGTH: o
  } = ys, a = ms;
  e = r.exports = {};
  const l = e.re = [], h = e.safeRe = [], f = e.src = [], p = e.safeSrc = [], s = e.t = {};
  let g = 0;
  const m = "[a-zA-Z0-9-]", v = [
    ["\\s", 1],
    ["\\d", o],
    [m, i]
  ], b = (_) => {
    for (const [N, x] of v)
      _ = _.split(`${N}*`).join(`${N}{0,${x}}`).split(`${N}+`).join(`${N}{1,${x}}`);
    return _;
  }, y = (_, N, x) => {
    const C = b(N), L = g++;
    a(_, L, N), s[_] = L, f[L] = N, p[L] = C, l[L] = new RegExp(N, x ? "g" : void 0), h[L] = new RegExp(C, x ? "g" : void 0);
  };
  y("NUMERICIDENTIFIER", "0|[1-9]\\d*"), y("NUMERICIDENTIFIERLOOSE", "\\d+"), y("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${m}*`), y("MAINVERSION", `(${f[s.NUMERICIDENTIFIER]})\\.(${f[s.NUMERICIDENTIFIER]})\\.(${f[s.NUMERICIDENTIFIER]})`), y("MAINVERSIONLOOSE", `(${f[s.NUMERICIDENTIFIERLOOSE]})\\.(${f[s.NUMERICIDENTIFIERLOOSE]})\\.(${f[s.NUMERICIDENTIFIERLOOSE]})`), y("PRERELEASEIDENTIFIER", `(?:${f[s.NONNUMERICIDENTIFIER]}|${f[s.NUMERICIDENTIFIER]})`), y("PRERELEASEIDENTIFIERLOOSE", `(?:${f[s.NONNUMERICIDENTIFIER]}|${f[s.NUMERICIDENTIFIERLOOSE]})`), y("PRERELEASE", `(?:-(${f[s.PRERELEASEIDENTIFIER]}(?:\\.${f[s.PRERELEASEIDENTIFIER]})*))`), y("PRERELEASELOOSE", `(?:-?(${f[s.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${f[s.PRERELEASEIDENTIFIERLOOSE]})*))`), y("BUILDIDENTIFIER", `${m}+`), y("BUILD", `(?:\\+(${f[s.BUILDIDENTIFIER]}(?:\\.${f[s.BUILDIDENTIFIER]})*))`), y("FULLPLAIN", `v?${f[s.MAINVERSION]}${f[s.PRERELEASE]}?${f[s.BUILD]}?`), y("FULL", `^${f[s.FULLPLAIN]}$`), y("LOOSEPLAIN", `[v=\\s]*${f[s.MAINVERSIONLOOSE]}${f[s.PRERELEASELOOSE]}?${f[s.BUILD]}?`), y("LOOSE", `^${f[s.LOOSEPLAIN]}$`), y("GTLT", "((?:<|>)?=?)"), y("XRANGEIDENTIFIERLOOSE", `${f[s.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), y("XRANGEIDENTIFIER", `${f[s.NUMERICIDENTIFIER]}|x|X|\\*`), y("XRANGEPLAIN", `[v=\\s]*(${f[s.XRANGEIDENTIFIER]})(?:\\.(${f[s.XRANGEIDENTIFIER]})(?:\\.(${f[s.XRANGEIDENTIFIER]})(?:${f[s.PRERELEASE]})?${f[s.BUILD]}?)?)?`), y("XRANGEPLAINLOOSE", `[v=\\s]*(${f[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${f[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${f[s.XRANGEIDENTIFIERLOOSE]})(?:${f[s.PRERELEASELOOSE]})?${f[s.BUILD]}?)?)?`), y("XRANGE", `^${f[s.GTLT]}\\s*${f[s.XRANGEPLAIN]}$`), y("XRANGELOOSE", `^${f[s.GTLT]}\\s*${f[s.XRANGEPLAINLOOSE]}$`), y("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), y("COERCE", `${f[s.COERCEPLAIN]}(?:$|[^\\d])`), y("COERCEFULL", f[s.COERCEPLAIN] + `(?:${f[s.PRERELEASE]})?(?:${f[s.BUILD]})?(?:$|[^\\d])`), y("COERCERTL", f[s.COERCE], !0), y("COERCERTLFULL", f[s.COERCEFULL], !0), y("LONETILDE", "(?:~>?)"), y("TILDETRIM", `(\\s*)${f[s.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", y("TILDE", `^${f[s.LONETILDE]}${f[s.XRANGEPLAIN]}$`), y("TILDELOOSE", `^${f[s.LONETILDE]}${f[s.XRANGEPLAINLOOSE]}$`), y("LONECARET", "(?:\\^)"), y("CARETTRIM", `(\\s*)${f[s.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", y("CARET", `^${f[s.LONECARET]}${f[s.XRANGEPLAIN]}$`), y("CARETLOOSE", `^${f[s.LONECARET]}${f[s.XRANGEPLAINLOOSE]}$`), y("COMPARATORLOOSE", `^${f[s.GTLT]}\\s*(${f[s.LOOSEPLAIN]})$|^$`), y("COMPARATOR", `^${f[s.GTLT]}\\s*(${f[s.FULLPLAIN]})$|^$`), y("COMPARATORTRIM", `(\\s*)${f[s.GTLT]}\\s*(${f[s.LOOSEPLAIN]}|${f[s.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", y("HYPHENRANGE", `^\\s*(${f[s.XRANGEPLAIN]})\\s+-\\s+(${f[s.XRANGEPLAIN]})\\s*$`), y("HYPHENRANGELOOSE", `^\\s*(${f[s.XRANGEPLAINLOOSE]})\\s+-\\s+(${f[s.XRANGEPLAINLOOSE]})\\s*$`), y("STAR", "(<|>)?=?\\s*\\*"), y("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), y("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(ai, ai.exports);
var qa = ai.exports;
const Ha = Object.freeze({ loose: !0 }), Xa = Object.freeze({}), Ya = (r) => r ? typeof r != "object" ? Ha : r : Xa;
var Za = Ya;
const Ki = /^[0-9]+$/, Ja = (r, e) => {
  if (typeof r == "number" && typeof e == "number")
    return r === e ? 0 : r < e ? -1 : 1;
  const n = Ki.test(r), i = Ki.test(e);
  return n && i && (r = +r, e = +e), r === e ? 0 : n && !i ? -1 : i && !n ? 1 : r < e ? -1 : 1;
};
var Ka = {
  compareIdentifiers: Ja
};
const on = ms, { MAX_LENGTH: Qi, MAX_SAFE_INTEGER: sn } = ys, { safeRe: an, t: un } = qa, Qa = Za, { compareIdentifiers: Fn } = Ka;
let eu = class Rt {
  constructor(e, n) {
    if (n = Qa(n), e instanceof Rt) {
      if (e.loose === !!n.loose && e.includePrerelease === !!n.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
    if (e.length > Qi)
      throw new TypeError(
        `version is longer than ${Qi} characters`
      );
    on("SemVer", e, n), this.options = n, this.loose = !!n.loose, this.includePrerelease = !!n.includePrerelease;
    const i = e.trim().match(n.loose ? an[un.LOOSE] : an[un.FULL]);
    if (!i)
      throw new TypeError(`Invalid Version: ${e}`);
    if (this.raw = e, this.major = +i[1], this.minor = +i[2], this.patch = +i[3], this.major > sn || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > sn || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > sn || this.patch < 0)
      throw new TypeError("Invalid patch version");
    i[4] ? this.prerelease = i[4].split(".").map((o) => {
      if (/^[0-9]+$/.test(o)) {
        const a = +o;
        if (a >= 0 && a < sn)
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
    if (on("SemVer.compare", this.version, this.options, e), !(e instanceof Rt)) {
      if (typeof e == "string" && e === this.version)
        return 0;
      e = new Rt(e, this.options);
    }
    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
  }
  compareMain(e) {
    return e instanceof Rt || (e = new Rt(e, this.options)), this.major < e.major ? -1 : this.major > e.major ? 1 : this.minor < e.minor ? -1 : this.minor > e.minor ? 1 : this.patch < e.patch ? -1 : this.patch > e.patch ? 1 : 0;
  }
  comparePre(e) {
    if (e instanceof Rt || (e = new Rt(e, this.options)), this.prerelease.length && !e.prerelease.length)
      return -1;
    if (!this.prerelease.length && e.prerelease.length)
      return 1;
    if (!this.prerelease.length && !e.prerelease.length)
      return 0;
    let n = 0;
    do {
      const i = this.prerelease[n], o = e.prerelease[n];
      if (on("prerelease compare", n, i, o), i === void 0 && o === void 0)
        return 0;
      if (o === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === o)
        continue;
      return Fn(i, o);
    } while (++n);
  }
  compareBuild(e) {
    e instanceof Rt || (e = new Rt(e, this.options));
    let n = 0;
    do {
      const i = this.build[n], o = e.build[n];
      if (on("build compare", n, i, o), i === void 0 && o === void 0)
        return 0;
      if (o === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === o)
        continue;
      return Fn(i, o);
    } while (++n);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(e, n, i) {
    if (e.startsWith("pre")) {
      if (!n && i === !1)
        throw new Error("invalid increment argument: identifier is empty");
      if (n) {
        const o = `-${n}`.match(this.options.loose ? an[un.PRERELEASELOOSE] : an[un.PRERELEASE]);
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
          i === !1 && (a = [n]), Fn(this.prerelease[0], n) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = a) : this.prerelease = a;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${e}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var Es = eu;
const tu = Es, ru = (r, e) => new tu(r, e).major;
var nu = ru;
const eo = /* @__PURE__ */ Ai(nu), to = Es, iu = (r, e, n = !1) => {
  if (r instanceof to)
    return r;
  try {
    return new to(r, e);
  } catch (i) {
    if (!n)
      return null;
    throw i;
  }
};
var ou = iu;
const su = ou, au = (r, e) => {
  const n = su(r, e);
  return n ? n.version : null;
};
var uu = au;
const lu = /* @__PURE__ */ Ai(uu);
/*!
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
class cu {
  constructor(e) {
    te(this, "bus");
    typeof e.getVersion != "function" || !lu(e.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : eo(e.getVersion()) !== eo(this.getVersion()) && console.warn(
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
class fu {
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
let Br = null;
function vs() {
  var r;
  return Br !== null ? Br : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : ((r = window.OC) != null && r._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof (window == null ? void 0 : window._nc_event_bus) < "u" ? Br = new cu(window._nc_event_bus) : Br = window._nc_event_bus = new fu(), Br);
}
function hu(r, e) {
  vs().subscribe(r, e);
}
function pu(r, ...e) {
  vs().emit(r, ...e);
}
const Cr = class Cr {
  constructor(e, n, i) {
    te(this, "scope");
    te(this, "wrapped");
    this.scope = `${i ? Cr.GLOBAL_SCOPE_PERSISTENT : Cr.GLOBAL_SCOPE_VOLATILE}_${btoa(e)}_`, this.wrapped = n;
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
te(Cr, "GLOBAL_SCOPE_VOLATILE", "nextcloud_vol"), te(Cr, "GLOBAL_SCOPE_PERSISTENT", "nextcloud_per");
let ui = Cr;
class du {
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
    return new ui(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function gu(r) {
  return new du(r);
}
let Kr;
const bs = [];
function mu() {
  return Kr === void 0 && (Kr = document.head.dataset.requesttoken ?? null), Kr;
}
function wu(r) {
  bs.push(r);
}
hu("csrf-token-update", (r) => {
  Kr = r.token, bs.forEach((e) => {
    try {
      e(Kr);
    } catch (n) {
      console.error("Error updating CSRF token observer", n);
    }
  });
});
/*!
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
gu("public").persist().build();
let Ir;
function ro(r, e) {
  return r ? r.getAttribute(e) : null;
}
function Ni() {
  if (Ir !== void 0)
    return Ir;
  const r = document == null ? void 0 : document.getElementsByTagName("head")[0];
  if (!r)
    return null;
  const e = ro(r, "data-user");
  return e === null ? (Ir = null, Ir) : (Ir = {
    uid: e,
    displayName: ro(r, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Ir);
}
var xe = /* @__PURE__ */ ((r) => (r[r.Debug = 0] = "Debug", r[r.Info = 1] = "Info", r[r.Warn = 2] = "Warn", r[r.Error = 3] = "Error", r[r.Fatal = 4] = "Fatal", r))(xe || {});
class yu {
  constructor(e) {
    te(this, "context");
    this.context = e || {};
  }
  formatMessage(e, n, i) {
    let o = "[" + xe[n].toUpperCase() + "] ";
    return i && i.app && (o += i.app + ": "), typeof e == "string" ? o + e : (o += `Unexpected ${e.name}`, e.message && (o += ` "${e.message}"`), n === xe.Debug && e.stack && (o += `

Stack trace:
${e.stack}`), o);
  }
  log(e, n, i) {
    var o, a;
    if (!(typeof ((o = this.context) == null ? void 0 : o.level) == "number" && e < ((a = this.context) == null ? void 0 : a.level)))
      switch (typeof n == "object" && (i == null ? void 0 : i.error) === void 0 && (i.error = n), e) {
        case xe.Debug:
          console.debug(this.formatMessage(n, xe.Debug, i), i);
          break;
        case xe.Info:
          console.info(this.formatMessage(n, xe.Info, i), i);
          break;
        case xe.Warn:
          console.warn(this.formatMessage(n, xe.Warn, i), i);
          break;
        case xe.Error:
          console.error(this.formatMessage(n, xe.Error, i), i);
          break;
        case xe.Fatal:
        default:
          console.error(this.formatMessage(n, xe.Fatal, i), i);
          break;
      }
  }
  debug(e, n) {
    this.log(xe.Debug, e, Object.assign({}, this.context, n));
  }
  info(e, n) {
    this.log(xe.Info, e, Object.assign({}, this.context, n));
  }
  warn(e, n) {
    this.log(xe.Warn, e, Object.assign({}, this.context, n));
  }
  error(e, n) {
    this.log(xe.Error, e, Object.assign({}, this.context, n));
  }
  fatal(e, n) {
    this.log(xe.Fatal, e, Object.assign({}, this.context, n));
  }
}
function Eu(r) {
  return new yu(r);
}
class vu {
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
    const e = Ni();
    return e !== null && (this.context.uid = e.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const e = this, n = () => {
      var i;
      document.readyState === "complete" || document.readyState === "interactive" ? (e.context.level = ((i = window._oc_config) == null ? void 0 : i.loglevel) ?? xe.Warn, window._oc_debug && (e.context.level = xe.Debug), document.removeEventListener("readystatechange", n)) : document.addEventListener("readystatechange", n);
    };
    return n(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function bu() {
  return new vu(Eu);
}
function no(r) {
  return r && r.split("/").map(encodeURIComponent).join("/");
}
function Ts(r, e) {
  return r = r.replace(/\\/g, "/").replace(/\/+$/g, "").replace(/.*\//, ""), r;
}
function io(r) {
  r = r.replaceAll(/\\/g, "/");
  const e = r.split("/");
  return e.length <= 1 ? "." : (e.pop(), e.length === 1 && e[0] === "" ? "/" : e.join("/"));
}
function Tu(r) {
  const e = Ts(r), n = e.lastIndexOf(".");
  return n > 0 ? e.substring(n) : "";
}
function _u(...r) {
  if (arguments.length < 1)
    return "";
  const e = r.filter((f) => f.length > 0);
  if (e.length < 1)
    return "";
  const n = e[e.length - 1], i = e[0].charAt(0) === "/", o = n.charAt(n.length - 1) === "/", a = e.reduce((f, p) => f.concat(p.split("/")), []);
  let l = !i;
  const h = a.reduce((f, p) => p === "" ? f : l ? (l = !1, f + p) : f + "/" + p, "");
  return o ? h + "/" : h;
}
window._nc_files_scope ?? (window._nc_files_scope = {});
var os;
(os = window._nc_files_scope).v4_0 ?? (os.v4_0 = {});
const Te = window._nc_files_scope.v4_0, _s = bu().setApp("@nextcloud/files").detectUser().build(), As = Object.freeze({
  Folder: "folder",
  File: "file"
}), Ge = Object.freeze({
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
}), Is = Object.freeze({
  /** This is a new node and it doesn't exists on the filesystem yet */
  NEW: "new",
  /** This node has failed and is unavailable  */
  FAILED: "failed",
  /** This node is currently loading or have an operation in progress */
  LOADING: "loading",
  /** This node is locked and cannot be modified */
  LOCKED: "locked"
});
function Ns(r, e) {
  return r.match(e) !== null;
}
function Zt(r, e) {
  if (r.id && typeof r.id != "number")
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
  if (Ns(r.source, e)) {
    const n = r.source.match(e)[0];
    if (!r.source.includes(_u(n, r.root)))
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
  if ("permissions" in r && r.permissions !== void 0 && !(typeof r.permissions == "number" && r.permissions >= Ge.NONE && r.permissions <= Ge.ALL))
    throw new Error("Invalid permissions");
  if (r.owner && r.owner !== null && typeof r.owner != "string")
    throw new Error("Invalid owner type");
  if (r.attributes && typeof r.attributes != "object")
    throw new Error("Invalid attributes type");
  if (r.status && !Object.values(Is).includes(r.status))
    throw new Error("Status must be a valid NodeStatus");
}
function Au(r) {
  r.mtime && typeof r.mtime == "string" && !isNaN(Date.parse(r.mtime)) && JSON.stringify(new Date(r.mtime)) === JSON.stringify(r.mtime) && (r.mtime = new Date(r.mtime)), r.crtime && typeof r.crtime == "string" && !isNaN(Date.parse(r.crtime)) && JSON.stringify(new Date(r.crtime)) === JSON.stringify(r.crtime) && (r.crtime = new Date(r.crtime));
}
function Iu(r) {
  if (r instanceof RegExp)
    return r;
  const e = r.match(/(\/?)(.+)\1([a-z]*)/i);
  if (!e)
    throw new Error("Invalid regular expression format.");
  const n = Array.from(new Set(e[3])).filter((i) => "gimsuy".includes(i)).join("");
  return new RegExp(e[2], n);
}
class xn {
  constructor(...[e, n]) {
    te(this, "_attributes");
    te(this, "_data");
    te(this, "_knownDavService", /(remote|public)\.php\/(web)?dav/i);
    te(this, "readonlyAttributes", Object.entries(Object.getOwnPropertyDescriptors(xn.prototype)).filter((e) => typeof e[1].get == "function" && e[0] !== "__proto__").map((e) => e[0]));
    te(this, "handler", {
      set: (e, n, i) => this.readonlyAttributes.includes(n) ? !1 : Reflect.set(e, n, i),
      deleteProperty: (e, n) => this.readonlyAttributes.includes(n) ? !1 : Reflect.deleteProperty(e, n)
    });
    e.mime || (e.mime = "application/octet-stream"), Au(e), n = Iu(n || this._knownDavService), Zt(e, n), this._data = {
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
    return e + no(this.source.slice(e.length));
  }
  /**
   * Get this object name
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get basename() {
    return Ts(this.source);
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
    Zt({ ...this._data, displayname: e }, this._knownDavService), this._data.displayname = e;
  }
  /**
   * Get this object's extension
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get extension() {
    return Tu(this.source);
  }
  /**
   * Get the directory path leading to this object
   * Will use the relative path to root if available
   *
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get dirname() {
    return io(this.path);
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
    e ?? (e = "application/octet-stream"), Zt({ ...this._data, mime: e }, this._knownDavService), this._data.mime = e;
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
    Zt({ ...this._data, mtime: e }, this._knownDavService), this._data.mtime = e;
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
    Zt({ ...this._data, size: e }, this._knownDavService), this.updateMtime(), this._data.size = e;
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
    return this.owner === null && !this.isDavResource ? Ge.READ : this._data.permissions !== void 0 ? this._data.permissions : Ge.NONE;
  }
  /**
   * Set the file permissions
   */
  set permissions(e) {
    Zt({ ...this._data, permissions: e }, this._knownDavService), this.updateMtime(), this._data.permissions = e;
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
    return Ns(this.source, this._knownDavService);
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
    const e = this.source.indexOf("://"), n = this.source.slice(0, e), i = this.source.slice(e + 3), o = i.indexOf("/"), a = i.slice(0, o), l = i.slice(o), h = `${n}://${a}${no(l)}`, f = new URL(h);
    let p = decodeURIComponent(f.pathname);
    this.isDavResource && (p = p.split(this._knownDavService).pop());
    const s = p.indexOf(this.root), g = this.root.replace(/\/$/, "");
    return p.slice(s + g.length) || "/";
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
    Zt({ ...this._data, status: e }, this._knownDavService), this._data.status = e;
  }
  /**
   * Move the node to a new destination
   *
   * @param destination the new source.
   * e.g. https://cloud.domain.com/remote.php/dav/files/emma/Photos/picture.jpg
   */
  move(e) {
    Zt({ ...this._data, source: e }, this._knownDavService);
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
    this.move(io(this.source) + "/" + e);
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
class Nu extends xn {
  constructor(...[e, n]) {
    super(e, n);
  }
  get type() {
    return As.File;
  }
}
class xu extends xn {
  constructor(...[e, n]) {
    super({
      ...e,
      mime: "httpd/unix-directory"
    }, n);
  }
  get type() {
    return As.Folder;
  }
  get extension() {
    return null;
  }
  get mime() {
    return "httpd/unix-directory";
  }
}
var Ou = class extends EventTarget {
  dispatchTypedEvent(e, n) {
    return super.dispatchEvent(n);
  }
};
function xs(r, e, n) {
  var a;
  const i = `#initial-state-${r}-${e}`;
  if ((a = window._nc_initial_state) != null && a.has(i))
    return window._nc_initial_state.get(i);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const o = document.querySelector(i);
  if (o === null)
    return n;
  try {
    const l = JSON.parse(atob(o.value));
    return window._nc_initial_state.set(i, l), l;
  } catch (l) {
    return console.error("[@nextcloud/initial-state] Could not parse initial state", { key: e, app: r, error: l }), n;
  }
}
const Su = (r) => "/remote.php/" + r, Ru = (r, e) => Cu() + Su(r), Cu = () => window.location.protocol + "//" + window.location.host + Lu();
function Lu() {
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
  entries: Os,
  setPrototypeOf: oo,
  isFrozen: Pu,
  getPrototypeOf: ku,
  getOwnPropertyDescriptor: $u
} = Object;
let {
  freeze: Je,
  seal: vt,
  create: li
} = Object, {
  apply: ci,
  construct: fi
} = typeof Reflect < "u" && Reflect;
Je || (Je = function(e) {
  return e;
});
vt || (vt = function(e) {
  return e;
});
ci || (ci = function(e, n) {
  for (var i = arguments.length, o = new Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++)
    o[a - 2] = arguments[a];
  return e.apply(n, o);
});
fi || (fi = function(e) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    i[o - 1] = arguments[o];
  return new e(...i);
});
const ln = Ke(Array.prototype.forEach), Du = Ke(Array.prototype.lastIndexOf), so = Ke(Array.prototype.pop), jr = Ke(Array.prototype.push), Mu = Ke(Array.prototype.splice), gn = Ke(String.prototype.toLowerCase), Un = Ke(String.prototype.toString), Bn = Ke(String.prototype.match), Wr = Ke(String.prototype.replace), Fu = Ke(String.prototype.indexOf), Uu = Ke(String.prototype.trim), It = Ke(Object.prototype.hasOwnProperty), ze = Ke(RegExp.prototype.test), Gr = Bu(TypeError);
function Ke(r) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      i[o - 1] = arguments[o];
    return ci(r, e, i);
  };
}
function Bu(r) {
  return function() {
    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
      n[i] = arguments[i];
    return fi(r, n);
  };
}
function re(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : gn;
  oo && oo(r, null);
  let i = e.length;
  for (; i--; ) {
    let o = e[i];
    if (typeof o == "string") {
      const a = n(o);
      a !== o && (Pu(e) || (e[i] = a), o = a);
    }
    r[o] = !0;
  }
  return r;
}
function ju(r) {
  for (let e = 0; e < r.length; e++)
    It(r, e) || (r[e] = null);
  return r;
}
function Ct(r) {
  const e = li(null);
  for (const [n, i] of Os(r))
    It(r, n) && (Array.isArray(i) ? e[n] = ju(i) : i && typeof i == "object" && i.constructor === Object ? e[n] = Ct(i) : e[n] = i);
  return e;
}
function Vr(r, e) {
  for (; r !== null; ) {
    const i = $u(r, e);
    if (i) {
      if (i.get)
        return Ke(i.get);
      if (typeof i.value == "function")
        return Ke(i.value);
    }
    r = ku(r);
  }
  function n() {
    return null;
  }
  return n;
}
const ao = Je(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), jn = Je(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Wn = Je(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Wu = Je(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Gn = Je(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Gu = Je(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), uo = Je(["#text"]), lo = Je(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Vn = Je(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), co = Je(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), cn = Je(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Vu = vt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), zu = vt(/<%[\w\W]*|[\w\W]*%>/gm), qu = vt(/\$\{[\w\W]*/gm), Hu = vt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Xu = vt(/^aria-[\-\w]+$/), Ss = vt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Yu = vt(/^(?:\w+script|data):/i), Zu = vt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Rs = vt(/^html$/i), Ju = vt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var fo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Xu,
  ATTR_WHITESPACE: Zu,
  CUSTOM_ELEMENT: Ju,
  DATA_ATTR: Hu,
  DOCTYPE_NAME: Rs,
  ERB_EXPR: zu,
  IS_ALLOWED_URI: Ss,
  IS_SCRIPT_OR_DATA: Yu,
  MUSTACHE_EXPR: Vu,
  TMPLIT_EXPR: qu
});
const zr = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Ku = function() {
  return typeof window > "u" ? null : window;
}, Qu = function(e, n) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let i = null;
  const o = "data-tt-policy-suffix";
  n && n.hasAttribute(o) && (i = n.getAttribute(o));
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
}, ho = function() {
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
function Cs() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ku();
  const e = (q) => Cs(q);
  if (e.version = "3.3.1", e.removed = [], !r || !r.document || r.document.nodeType !== zr.document || !r.Element)
    return e.isSupported = !1, e;
  let {
    document: n
  } = r;
  const i = n, o = i.currentScript, {
    DocumentFragment: a,
    HTMLTemplateElement: l,
    Node: h,
    Element: f,
    NodeFilter: p,
    NamedNodeMap: s = r.NamedNodeMap || r.MozNamedAttrMap,
    HTMLFormElement: g,
    DOMParser: m,
    trustedTypes: v
  } = r, b = f.prototype, y = Vr(b, "cloneNode"), _ = Vr(b, "remove"), N = Vr(b, "nextSibling"), x = Vr(b, "childNodes"), C = Vr(b, "parentNode");
  if (typeof l == "function") {
    const q = n.createElement("template");
    q.content && q.content.ownerDocument && (n = q.content.ownerDocument);
  }
  let L, k = "";
  const {
    implementation: j,
    createNodeIterator: B,
    createDocumentFragment: Z,
    getElementsByTagName: H
  } = n, {
    importNode: ue
  } = i;
  let U = ho();
  e.isSupported = typeof Os == "function" && typeof C == "function" && j && j.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: J,
    ERB_EXPR: $,
    TMPLIT_EXPR: K,
    DATA_ATTR: le,
    ARIA_ATTR: de,
    IS_SCRIPT_OR_DATA: oe,
    ATTR_WHITESPACE: pe,
    CUSTOM_ELEMENT: $e
  } = fo;
  let {
    IS_ALLOWED_URI: De
  } = fo, se = null;
  const Me = re({}, [...ao, ...jn, ...Wn, ...Gn, ...uo]);
  let ae = null;
  const ce = re({}, [...lo, ...Vn, ...co, ...cn]);
  let X = Object.seal(li(null, {
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
  })), ot = null, xt = null;
  const st = Object.seal(li(null, {
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
  let or = !0, bt = !0, ht = !1, Ft = !0, at = !1, Ut = !0, pt = !1, dt = !1, Tt = !1, _t = !1, Xt = !1, Qe = !1, sr = !0, ar = !1;
  const vr = "user-content-";
  let z = !0, me = !1, w = {}, T = null;
  const I = re({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let R = null;
  const d = re({}, ["audio", "video", "img", "source", "image", "track"]);
  let u = null;
  const c = re({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), E = "http://www.w3.org/1998/Math/MathML", A = "http://www.w3.org/2000/svg", S = "http://www.w3.org/1999/xhtml";
  let P = S, M = !1, V = null;
  const ee = re({}, [E, A, S], Un);
  let Q = re({}, ["mi", "mo", "mn", "ms", "mtext"]), ie = re({}, ["annotation-xml"]);
  const Fr = re({}, ["title", "style", "font", "a", "script"]);
  let Ur = null;
  const ha = ["application/xhtml+xml", "text/html"], pa = "text/html";
  let Se = null, br = null;
  const da = n.createElement("form"), Di = function(O) {
    return O instanceof RegExp || O instanceof Function;
  }, Cn = function() {
    let O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(br && br === O)) {
      if ((!O || typeof O != "object") && (O = {}), O = Ct(O), Ur = // eslint-disable-next-line unicorn/prefer-includes
      ha.indexOf(O.PARSER_MEDIA_TYPE) === -1 ? pa : O.PARSER_MEDIA_TYPE, Se = Ur === "application/xhtml+xml" ? Un : gn, se = It(O, "ALLOWED_TAGS") ? re({}, O.ALLOWED_TAGS, Se) : Me, ae = It(O, "ALLOWED_ATTR") ? re({}, O.ALLOWED_ATTR, Se) : ce, V = It(O, "ALLOWED_NAMESPACES") ? re({}, O.ALLOWED_NAMESPACES, Un) : ee, u = It(O, "ADD_URI_SAFE_ATTR") ? re(Ct(c), O.ADD_URI_SAFE_ATTR, Se) : c, R = It(O, "ADD_DATA_URI_TAGS") ? re(Ct(d), O.ADD_DATA_URI_TAGS, Se) : d, T = It(O, "FORBID_CONTENTS") ? re({}, O.FORBID_CONTENTS, Se) : I, ot = It(O, "FORBID_TAGS") ? re({}, O.FORBID_TAGS, Se) : Ct({}), xt = It(O, "FORBID_ATTR") ? re({}, O.FORBID_ATTR, Se) : Ct({}), w = It(O, "USE_PROFILES") ? O.USE_PROFILES : !1, or = O.ALLOW_ARIA_ATTR !== !1, bt = O.ALLOW_DATA_ATTR !== !1, ht = O.ALLOW_UNKNOWN_PROTOCOLS || !1, Ft = O.ALLOW_SELF_CLOSE_IN_ATTR !== !1, at = O.SAFE_FOR_TEMPLATES || !1, Ut = O.SAFE_FOR_XML !== !1, pt = O.WHOLE_DOCUMENT || !1, _t = O.RETURN_DOM || !1, Xt = O.RETURN_DOM_FRAGMENT || !1, Qe = O.RETURN_TRUSTED_TYPE || !1, Tt = O.FORCE_BODY || !1, sr = O.SANITIZE_DOM !== !1, ar = O.SANITIZE_NAMED_PROPS || !1, z = O.KEEP_CONTENT !== !1, me = O.IN_PLACE || !1, De = O.ALLOWED_URI_REGEXP || Ss, P = O.NAMESPACE || S, Q = O.MATHML_TEXT_INTEGRATION_POINTS || Q, ie = O.HTML_INTEGRATION_POINTS || ie, X = O.CUSTOM_ELEMENT_HANDLING || {}, O.CUSTOM_ELEMENT_HANDLING && Di(O.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (X.tagNameCheck = O.CUSTOM_ELEMENT_HANDLING.tagNameCheck), O.CUSTOM_ELEMENT_HANDLING && Di(O.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (X.attributeNameCheck = O.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), O.CUSTOM_ELEMENT_HANDLING && typeof O.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (X.allowCustomizedBuiltInElements = O.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), at && (bt = !1), Xt && (_t = !0), w && (se = re({}, uo), ae = [], w.html === !0 && (re(se, ao), re(ae, lo)), w.svg === !0 && (re(se, jn), re(ae, Vn), re(ae, cn)), w.svgFilters === !0 && (re(se, Wn), re(ae, Vn), re(ae, cn)), w.mathMl === !0 && (re(se, Gn), re(ae, co), re(ae, cn))), O.ADD_TAGS && (typeof O.ADD_TAGS == "function" ? st.tagCheck = O.ADD_TAGS : (se === Me && (se = Ct(se)), re(se, O.ADD_TAGS, Se))), O.ADD_ATTR && (typeof O.ADD_ATTR == "function" ? st.attributeCheck = O.ADD_ATTR : (ae === ce && (ae = Ct(ae)), re(ae, O.ADD_ATTR, Se))), O.ADD_URI_SAFE_ATTR && re(u, O.ADD_URI_SAFE_ATTR, Se), O.FORBID_CONTENTS && (T === I && (T = Ct(T)), re(T, O.FORBID_CONTENTS, Se)), O.ADD_FORBID_CONTENTS && (T === I && (T = Ct(T)), re(T, O.ADD_FORBID_CONTENTS, Se)), z && (se["#text"] = !0), pt && re(se, ["html", "head", "body"]), se.table && (re(se, ["tbody"]), delete ot.tbody), O.TRUSTED_TYPES_POLICY) {
        if (typeof O.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Gr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof O.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Gr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        L = O.TRUSTED_TYPES_POLICY, k = L.createHTML("");
      } else
        L === void 0 && (L = Qu(v, o)), L !== null && typeof k == "string" && (k = L.createHTML(""));
      Je && Je(O), br = O;
    }
  }, Mi = re({}, [...jn, ...Wn, ...Wu]), Fi = re({}, [...Gn, ...Gu]), ga = function(O) {
    let D = C(O);
    (!D || !D.tagName) && (D = {
      namespaceURI: P,
      tagName: "template"
    });
    const W = gn(O.tagName), we = gn(D.tagName);
    return V[O.namespaceURI] ? O.namespaceURI === A ? D.namespaceURI === S ? W === "svg" : D.namespaceURI === E ? W === "svg" && (we === "annotation-xml" || Q[we]) : !!Mi[W] : O.namespaceURI === E ? D.namespaceURI === S ? W === "math" : D.namespaceURI === A ? W === "math" && ie[we] : !!Fi[W] : O.namespaceURI === S ? D.namespaceURI === A && !ie[we] || D.namespaceURI === E && !Q[we] ? !1 : !Fi[W] && (Fr[W] || !Mi[W]) : !!(Ur === "application/xhtml+xml" && V[O.namespaceURI]) : !1;
  }, Ot = function(O) {
    jr(e.removed, {
      element: O
    });
    try {
      C(O).removeChild(O);
    } catch {
      _(O);
    }
  }, ur = function(O, D) {
    try {
      jr(e.removed, {
        attribute: D.getAttributeNode(O),
        from: D
      });
    } catch {
      jr(e.removed, {
        attribute: null,
        from: D
      });
    }
    if (D.removeAttribute(O), O === "is")
      if (_t || Xt)
        try {
          Ot(D);
        } catch {
        }
      else
        try {
          D.setAttribute(O, "");
        } catch {
        }
  }, Ui = function(O) {
    let D = null, W = null;
    if (Tt)
      O = "<remove></remove>" + O;
    else {
      const Ne = Bn(O, /^[\r\n\t ]+/);
      W = Ne && Ne[0];
    }
    Ur === "application/xhtml+xml" && P === S && (O = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + O + "</body></html>");
    const we = L ? L.createHTML(O) : O;
    if (P === S)
      try {
        D = new m().parseFromString(we, Ur);
      } catch {
      }
    if (!D || !D.documentElement) {
      D = j.createDocument(P, "template", null);
      try {
        D.documentElement.innerHTML = M ? k : we;
      } catch {
      }
    }
    const je = D.body || D.documentElement;
    return O && W && je.insertBefore(n.createTextNode(W), je.childNodes[0] || null), P === S ? H.call(D, pt ? "html" : "body")[0] : pt ? D.documentElement : je;
  }, Bi = function(O) {
    return B.call(
      O.ownerDocument || O,
      O,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION,
      null
    );
  }, Ln = function(O) {
    return O instanceof g && (typeof O.nodeName != "string" || typeof O.textContent != "string" || typeof O.removeChild != "function" || !(O.attributes instanceof s) || typeof O.removeAttribute != "function" || typeof O.setAttribute != "function" || typeof O.namespaceURI != "string" || typeof O.insertBefore != "function" || typeof O.hasChildNodes != "function");
  }, ji = function(O) {
    return typeof h == "function" && O instanceof h;
  };
  function Bt(q, O, D) {
    ln(q, (W) => {
      W.call(e, O, D, br);
    });
  }
  const Wi = function(O) {
    let D = null;
    if (Bt(U.beforeSanitizeElements, O, null), Ln(O))
      return Ot(O), !0;
    const W = Se(O.nodeName);
    if (Bt(U.uponSanitizeElement, O, {
      tagName: W,
      allowedTags: se
    }), Ut && O.hasChildNodes() && !ji(O.firstElementChild) && ze(/<[/\w!]/g, O.innerHTML) && ze(/<[/\w!]/g, O.textContent) || O.nodeType === zr.progressingInstruction || Ut && O.nodeType === zr.comment && ze(/<[/\w]/g, O.data))
      return Ot(O), !0;
    if (!(st.tagCheck instanceof Function && st.tagCheck(W)) && (!se[W] || ot[W])) {
      if (!ot[W] && Vi(W) && (X.tagNameCheck instanceof RegExp && ze(X.tagNameCheck, W) || X.tagNameCheck instanceof Function && X.tagNameCheck(W)))
        return !1;
      if (z && !T[W]) {
        const we = C(O) || O.parentNode, je = x(O) || O.childNodes;
        if (je && we) {
          const Ne = je.length;
          for (let et = Ne - 1; et >= 0; --et) {
            const jt = y(je[et], !0);
            jt.__removalCount = (O.__removalCount || 0) + 1, we.insertBefore(jt, N(O));
          }
        }
      }
      return Ot(O), !0;
    }
    return O instanceof f && !ga(O) || (W === "noscript" || W === "noembed" || W === "noframes") && ze(/<\/no(script|embed|frames)/i, O.innerHTML) ? (Ot(O), !0) : (at && O.nodeType === zr.text && (D = O.textContent, ln([J, $, K], (we) => {
      D = Wr(D, we, " ");
    }), O.textContent !== D && (jr(e.removed, {
      element: O.cloneNode()
    }), O.textContent = D)), Bt(U.afterSanitizeElements, O, null), !1);
  }, Gi = function(O, D, W) {
    if (sr && (D === "id" || D === "name") && (W in n || W in da))
      return !1;
    if (!(bt && !xt[D] && ze(le, D))) {
      if (!(or && ze(de, D))) {
        if (!(st.attributeCheck instanceof Function && st.attributeCheck(D, O))) {
          if (!ae[D] || xt[D]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Vi(O) && (X.tagNameCheck instanceof RegExp && ze(X.tagNameCheck, O) || X.tagNameCheck instanceof Function && X.tagNameCheck(O)) && (X.attributeNameCheck instanceof RegExp && ze(X.attributeNameCheck, D) || X.attributeNameCheck instanceof Function && X.attributeNameCheck(D, O)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              D === "is" && X.allowCustomizedBuiltInElements && (X.tagNameCheck instanceof RegExp && ze(X.tagNameCheck, W) || X.tagNameCheck instanceof Function && X.tagNameCheck(W)))
            ) return !1;
          } else if (!u[D]) {
            if (!ze(De, Wr(W, pe, ""))) {
              if (!((D === "src" || D === "xlink:href" || D === "href") && O !== "script" && Fu(W, "data:") === 0 && R[O])) {
                if (!(ht && !ze(oe, Wr(W, pe, "")))) {
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
  }, Vi = function(O) {
    return O !== "annotation-xml" && Bn(O, $e);
  }, zi = function(O) {
    Bt(U.beforeSanitizeAttributes, O, null);
    const {
      attributes: D
    } = O;
    if (!D || Ln(O))
      return;
    const W = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ae,
      forceKeepAttr: void 0
    };
    let we = D.length;
    for (; we--; ) {
      const je = D[we], {
        name: Ne,
        namespaceURI: et,
        value: jt
      } = je, Tr = Se(Ne), Pn = jt;
      let Fe = Ne === "value" ? Pn : Uu(Pn);
      if (W.attrName = Tr, W.attrValue = Fe, W.keepAttr = !0, W.forceKeepAttr = void 0, Bt(U.uponSanitizeAttribute, O, W), Fe = W.attrValue, ar && (Tr === "id" || Tr === "name") && (ur(Ne, O), Fe = vr + Fe), Ut && ze(/((--!?|])>)|<\/(style|title|textarea)/i, Fe)) {
        ur(Ne, O);
        continue;
      }
      if (Tr === "attributename" && Bn(Fe, "href")) {
        ur(Ne, O);
        continue;
      }
      if (W.forceKeepAttr)
        continue;
      if (!W.keepAttr) {
        ur(Ne, O);
        continue;
      }
      if (!Ft && ze(/\/>/i, Fe)) {
        ur(Ne, O);
        continue;
      }
      at && ln([J, $, K], (Hi) => {
        Fe = Wr(Fe, Hi, " ");
      });
      const qi = Se(O.nodeName);
      if (!Gi(qi, Tr, Fe)) {
        ur(Ne, O);
        continue;
      }
      if (L && typeof v == "object" && typeof v.getAttributeType == "function" && !et)
        switch (v.getAttributeType(qi, Tr)) {
          case "TrustedHTML": {
            Fe = L.createHTML(Fe);
            break;
          }
          case "TrustedScriptURL": {
            Fe = L.createScriptURL(Fe);
            break;
          }
        }
      if (Fe !== Pn)
        try {
          et ? O.setAttributeNS(et, Ne, Fe) : O.setAttribute(Ne, Fe), Ln(O) ? Ot(O) : so(e.removed);
        } catch {
          ur(Ne, O);
        }
    }
    Bt(U.afterSanitizeAttributes, O, null);
  }, ma = function q(O) {
    let D = null;
    const W = Bi(O);
    for (Bt(U.beforeSanitizeShadowDOM, O, null); D = W.nextNode(); )
      Bt(U.uponSanitizeShadowNode, D, null), Wi(D), zi(D), D.content instanceof a && q(D.content);
    Bt(U.afterSanitizeShadowDOM, O, null);
  };
  return e.sanitize = function(q) {
    let O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, D = null, W = null, we = null, je = null;
    if (M = !q, M && (q = "<!-->"), typeof q != "string" && !ji(q))
      if (typeof q.toString == "function") {
        if (q = q.toString(), typeof q != "string")
          throw Gr("dirty is not a string, aborting");
      } else
        throw Gr("toString is not a function");
    if (!e.isSupported)
      return q;
    if (dt || Cn(O), e.removed = [], typeof q == "string" && (me = !1), me) {
      if (q.nodeName) {
        const jt = Se(q.nodeName);
        if (!se[jt] || ot[jt])
          throw Gr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (q instanceof h)
      D = Ui("<!---->"), W = D.ownerDocument.importNode(q, !0), W.nodeType === zr.element && W.nodeName === "BODY" || W.nodeName === "HTML" ? D = W : D.appendChild(W);
    else {
      if (!_t && !at && !pt && // eslint-disable-next-line unicorn/prefer-includes
      q.indexOf("<") === -1)
        return L && Qe ? L.createHTML(q) : q;
      if (D = Ui(q), !D)
        return _t ? null : Qe ? k : "";
    }
    D && Tt && Ot(D.firstChild);
    const Ne = Bi(me ? q : D);
    for (; we = Ne.nextNode(); )
      Wi(we), zi(we), we.content instanceof a && ma(we.content);
    if (me)
      return q;
    if (_t) {
      if (Xt)
        for (je = Z.call(D.ownerDocument); D.firstChild; )
          je.appendChild(D.firstChild);
      else
        je = D;
      return (ae.shadowroot || ae.shadowrootmode) && (je = ue.call(i, je, !0)), je;
    }
    let et = pt ? D.outerHTML : D.innerHTML;
    return pt && se["!doctype"] && D.ownerDocument && D.ownerDocument.doctype && D.ownerDocument.doctype.name && ze(Rs, D.ownerDocument.doctype.name) && (et = "<!DOCTYPE " + D.ownerDocument.doctype.name + `>
` + et), at && ln([J, $, K], (jt) => {
      et = Wr(et, jt, " ");
    }), L && Qe ? L.createHTML(et) : et;
  }, e.setConfig = function() {
    let q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Cn(q), dt = !0;
  }, e.clearConfig = function() {
    br = null, dt = !1;
  }, e.isValidAttribute = function(q, O, D) {
    br || Cn({});
    const W = Se(q), we = Se(O);
    return Gi(W, we, D);
  }, e.addHook = function(q, O) {
    typeof O == "function" && jr(U[q], O);
  }, e.removeHook = function(q, O) {
    if (O !== void 0) {
      const D = Du(U[q], O);
      return D === -1 ? void 0 : Mu(U[q], D, 1)[0];
    }
    return so(U[q]);
  }, e.removeHooks = function(q) {
    U[q] = [];
  }, e.removeAllHooks = function() {
    U = ho();
  }, e;
}
Cs();
globalThis._nc_l10n_locale ?? (globalThis._nc_l10n_locale = typeof document < "u" && document.documentElement.dataset.locale || Intl.DateTimeFormat().resolvedOptions().locale.replaceAll(/-/g, "_"));
var ss;
globalThis._nc_l10n_language ?? (globalThis._nc_l10n_language = typeof document < "u" && document.documentElement.lang || (((ss = globalThis.navigator) == null ? void 0 : ss.language) ?? "en"));
globalThis._oc_l10n_registry_translations ?? (globalThis._oc_l10n_registry_translations = {});
globalThis._oc_l10n_registry_plural_functions ?? (globalThis._oc_l10n_registry_plural_functions = {});
class el extends Ou {
}
function tl() {
  return Te.registry ?? (Te.registry = new el()), Te.registry;
}
const Ls = Object.freeze({
  DEFAULT: "default",
  HIDDEN: "hidden"
});
function po(r) {
  if (rl(r), Te.fileActions ?? (Te.fileActions = /* @__PURE__ */ new Map()), Te.fileActions.has(r.id)) {
    _s.error(`FileAction ${r.id} already registered`, { action: r });
    return;
  }
  Te.fileActions.set(r.id, r), tl().dispatchTypedEvent("register:action", new CustomEvent("register:action", { detail: r }));
}
function rl(r) {
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
  if (r.default && !Object.values(Ls).includes(r.default))
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
const Ps = Object.freeze({
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
class nl {
  constructor() {
    te(this, "_entries", []);
  }
  registerEntry(e) {
    this.validateEntry(e), e.category = e.category ?? Ps.CreateNew, this._entries.push(e);
  }
  unregisterEntry(e) {
    const n = typeof e == "string" ? this.getEntryIndex(e) : this.getEntryIndex(e.id);
    if (n === -1) {
      _s.warn("Entry not found, nothing removed", { entry: e, entries: this.getEntries() });
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
function il() {
  return Te.newFileMenu ?? (Te.newFileMenu = new nl()), Te.newFileMenu;
}
function ol(r) {
  return il().registerEntry(r);
}
class Et {
  static getFileConfig({
    name: e,
    url: n,
    downloadUrl: i,
    dir: o,
    onCreate: a,
    fileModifiedTime: l,
    isNew: h,
    isLoaded: f,
    sameWindow: p,
    skipConfirmation: s,
    isPublicLink: g
  } = {}) {
    return {
      name: e || "?",
      downloadUrl: i || "",
      url: n ? Xe(n) : "",
      dir: o || "",
      onCreate: a,
      fileModifiedTime: l || null,
      isNew: h || !1,
      isLoaded: f || !1,
      sameWindow: p || !1,
      skipConfirmation: s || !1,
      isPublicLink: g || !1
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
  static async save({ fileContent: e, name: n, fileModifiedTime: i, dir: o } = {}) {
    let a = `${o}${n}`;
    o !== "/" && (a = `${o}/${n}`);
    const l = await window.fetch(window.OC.generateUrl("/apps/files_linkeditor/ajax/savefile"), {
      method: "PUT",
      body: JSON.stringify({
        filecontents: e,
        path: a,
        mtime: i
      }),
      headers: {
        requesttoken: window.OC.requestToken,
        "Content-Type": "application/json"
      }
    });
    if (l && l.ok)
      return !0;
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static userCanEdit(e) {
    var n, i, o, a;
    return window.FileList && window.OC && window.OC.currentUser && (window.OC.PERMISSION_ALL === ((i = (n = window.FileList) == null ? void 0 : n.getDirectoryPermissions) == null ? void 0 : i.call(n)) || window.OC.PERMISSION_UPDATE === ((a = (o = window.FileList) == null ? void 0 : o.getDirectoryPermissions) == null ? void 0 : a.call(o))) || e >= Ge.UPDATE;
  }
}
const ft = fs(""), Dt = fs(Et.getFileConfig());
function go(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "You are about to visit:") + ""
  ), i, o, a, l, h = (
    /*file*/
    r[0].url + ""
  ), f, p, s;
  return {
    c() {
      e = ne("p"), i = Be(n), o = Ee(), a = ne("em"), l = ne("a"), f = Be(h), G(l, "href", p = Xe(
        /*file*/
        r[0].url
      )), G(l, "target", s = /*file*/
      r[0].sameWindow ? "_self" : "_blank"), G(e, "class", "urldisplay");
    },
    m(g, m) {
      he(g, e, m), Y(e, i), Y(e, o), Y(e, a), Y(a, l), Y(l, f);
    },
    p(g, m) {
      m & /*file*/
      1 && h !== (h = /*file*/
      g[0].url + "") && bi(f, h), m & /*file*/
      1 && p !== (p = Xe(
        /*file*/
        g[0].url
      )) && G(l, "href", p), m & /*file*/
      1 && s !== (s = /*file*/
      g[0].sameWindow ? "_self" : "_blank") && G(l, "target", s);
    },
    d(g) {
      g && fe(e);
    }
  };
}
function mo(r) {
  let e = Et.userCanEdit(
    /*file*/
    r[0].permissions
  ) && !/*file*/
  r[0].isPublicLink, n, i, o = (
    /*t*/
    r[2]("files_linkeditor", "Visit link") + ""
  ), a, l, h, f = e && wo(r);
  return {
    c() {
      f && f.c(), n = Ee(), i = ne("a"), a = Be(o), G(i, "href", l = Xe(
        /*file*/
        r[0].url
      )), G(i, "target", h = /*file*/
      r[0].sameWindow ? "_self" : "_blank"), G(i, "class", "button primary");
    },
    m(p, s) {
      f && f.m(p, s), he(p, n, s), he(p, i, s), Y(i, a);
    },
    p(p, s) {
      s & /*file*/
      1 && (e = Et.userCanEdit(
        /*file*/
        p[0].permissions
      ) && !/*file*/
      p[0].isPublicLink), e ? f ? f.p(p, s) : (f = wo(p), f.c(), f.m(n.parentNode, n)) : f && (f.d(1), f = null), s & /*file*/
      1 && l !== (l = Xe(
        /*file*/
        p[0].url
      )) && G(i, "href", l), s & /*file*/
      1 && h !== (h = /*file*/
      p[0].sameWindow ? "_self" : "_blank") && G(i, "target", h);
    },
    d(p) {
      p && (fe(n), fe(i)), f && f.d(p);
    }
  };
}
function wo(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "Edit link") + ""
  ), i, o, a;
  return {
    c() {
      e = ne("a"), i = Be(n), G(e, "href", window.location.href), G(e, "class", "button");
    },
    m(l, h) {
      he(l, e, h), Y(e, i), o || (a = it(e, "click", zt(
        /*click_handler_1*/
        r[4]
      )), o = !0);
    },
    p: Mt,
    d(l) {
      l && fe(e), o = !1, a();
    }
  };
}
function sl(r) {
  let e, n, i = (
    /*file*/
    r[0].name + ""
  ), o, a, l, h, f, p = (
    /*t*/
    r[2]("files_linkeditor", "Cancel") + ""
  ), s, g, m, v, b = !/*loading*/
  r[1] && go(r), y = !/*loading*/
  r[1] && mo(r);
  return {
    c() {
      e = ne("div"), n = ne("h3"), o = Be(i), a = Ee(), b && b.c(), l = Ee(), h = ne("div"), f = ne("a"), s = Be(p), g = Ee(), y && y.c(), G(e, "class", "edit push-bottom"), G(f, "href", window.location.href), G(f, "class", "button"), G(h, "class", "oc-dialog-buttonrow twobuttons");
    },
    m(_, N) {
      he(_, e, N), Y(e, n), Y(n, o), Y(e, a), b && b.m(e, null), he(_, l, N), he(_, h, N), Y(h, f), Y(f, s), Y(h, g), y && y.m(h, null), m || (v = it(f, "click", zt(
        /*click_handler*/
        r[3]
      )), m = !0);
    },
    p(_, N) {
      N & /*file*/
      1 && i !== (i = /*file*/
      _[0].name + "") && bi(o, i), /*loading*/
      _[1] ? b && (b.d(1), b = null) : b ? b.p(_, N) : (b = go(_), b.c(), b.m(e, null)), /*loading*/
      _[1] ? y && (y.d(1), y = null) : y ? y.p(_, N) : (y = mo(_), y.c(), y.m(h, null));
    },
    d(_) {
      _ && (fe(e), fe(l), fe(h)), b && b.d(), y && y.d(), m = !1, v();
    }
  };
}
function al(r) {
  let e, n;
  return e = new _i({
    props: {
      loading: (
        /*loading*/
        r[1]
      ),
      $$slots: { default: [sl] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      kr(e.$$.fragment);
    },
    m(i, o) {
      yr(e, i, o), n = !0;
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
      ct(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Er(e, i);
    }
  };
}
function ul(r, e, n) {
  let i, o;
  const a = window.t;
  let l;
  In(() => {
    l = Dt.subscribe(async (p) => {
      if (n(0, i = p), i && i.isLoaded) {
        if (n(1, o = !1), !i.url) {
          OC.dialogs.alert(a("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."), a("files_linkeditor", "A slight problem"));
          return;
        }
        const s = i.isPublicLink && window.location.toString().includes("openfile=true");
        i.skipConfirmation && i.sameWindow && !s && (window.location.href = i.url, ft.update(() => "none"));
      }
    });
  }), Nn(() => {
    l();
  });
  const h = () => {
    ft.update(() => "none");
  }, f = () => {
    ft.update(() => "edit");
  };
  return n(0, i = Et.getFileConfig()), n(1, o = !0), [i, o, a, h, f];
}
class ll extends Dr {
  constructor(e) {
    super(), $r(this, e, ul, al, wr, {});
  }
}
var ks = { exports: {} };
(function(r) {
  var e = function(n) {
    var i = 1e7, o = 7, a = 9007199254740992, l = b(a), h = "0123456789abcdefghijklmnopqrstuvwxyz", f = typeof BigInt == "function";
    function p(w, T, I, R) {
      return typeof w > "u" ? p[0] : typeof T < "u" ? +T == 10 && !I ? z(w) : Tt(w, T, I, R) : z(w);
    }
    function s(w, T) {
      this.value = w, this.sign = T, this.isSmall = !1;
    }
    s.prototype = Object.create(p.prototype);
    function g(w) {
      this.value = w, this.sign = w < 0, this.isSmall = !0;
    }
    g.prototype = Object.create(p.prototype);
    function m(w) {
      this.value = w;
    }
    m.prototype = Object.create(p.prototype);
    function v(w) {
      return -9007199254740992 < w && w < a;
    }
    function b(w) {
      return w < 1e7 ? [w] : w < 1e14 ? [w % 1e7, Math.floor(w / 1e7)] : [w % 1e7, Math.floor(w / 1e7) % 1e7, Math.floor(w / 1e14)];
    }
    function y(w) {
      _(w);
      var T = w.length;
      if (T < 4 && De(w, l) < 0)
        switch (T) {
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
    function _(w) {
      for (var T = w.length; w[--T] === 0; ) ;
      w.length = T + 1;
    }
    function N(w) {
      for (var T = new Array(w), I = -1; ++I < w; )
        T[I] = 0;
      return T;
    }
    function x(w) {
      return w > 0 ? Math.floor(w) : Math.ceil(w);
    }
    function C(w, T) {
      var I = w.length, R = T.length, d = new Array(I), u = 0, c = i, E, A;
      for (A = 0; A < R; A++)
        E = w[A] + T[A] + u, u = E >= c ? 1 : 0, d[A] = E - u * c;
      for (; A < I; )
        E = w[A] + u, u = E === c ? 1 : 0, d[A++] = E - u * c;
      return u > 0 && d.push(u), d;
    }
    function L(w, T) {
      return w.length >= T.length ? C(w, T) : C(T, w);
    }
    function k(w, T) {
      var I = w.length, R = new Array(I), d = i, u, c;
      for (c = 0; c < I; c++)
        u = w[c] - d + T, T = Math.floor(u / d), R[c] = u - T * d, T += 1;
      for (; T > 0; )
        R[c++] = T % d, T = Math.floor(T / d);
      return R;
    }
    s.prototype.add = function(w) {
      var T = z(w);
      if (this.sign !== T.sign)
        return this.subtract(T.negate());
      var I = this.value, R = T.value;
      return T.isSmall ? new s(k(I, Math.abs(R)), this.sign) : new s(L(I, R), this.sign);
    }, s.prototype.plus = s.prototype.add, g.prototype.add = function(w) {
      var T = z(w), I = this.value;
      if (I < 0 !== T.sign)
        return this.subtract(T.negate());
      var R = T.value;
      if (T.isSmall) {
        if (v(I + R)) return new g(I + R);
        R = b(Math.abs(R));
      }
      return new s(k(R, Math.abs(I)), I < 0);
    }, g.prototype.plus = g.prototype.add, m.prototype.add = function(w) {
      return new m(this.value + z(w).value);
    }, m.prototype.plus = m.prototype.add;
    function j(w, T) {
      var I = w.length, R = T.length, d = new Array(I), u = 0, c = i, E, A;
      for (E = 0; E < R; E++)
        A = w[E] - u - T[E], A < 0 ? (A += c, u = 1) : u = 0, d[E] = A;
      for (E = R; E < I; E++) {
        if (A = w[E] - u, A < 0) A += c;
        else {
          d[E++] = A;
          break;
        }
        d[E] = A;
      }
      for (; E < I; E++)
        d[E] = w[E];
      return _(d), d;
    }
    function B(w, T, I) {
      var R;
      return De(w, T) >= 0 ? R = j(w, T) : (R = j(T, w), I = !I), R = y(R), typeof R == "number" ? (I && (R = -R), new g(R)) : new s(R, I);
    }
    function Z(w, T, I) {
      var R = w.length, d = new Array(R), u = -T, c = i, E, A;
      for (E = 0; E < R; E++)
        A = w[E] + u, u = Math.floor(A / c), A %= c, d[E] = A < 0 ? A + c : A;
      return d = y(d), typeof d == "number" ? (I && (d = -d), new g(d)) : new s(d, I);
    }
    s.prototype.subtract = function(w) {
      var T = z(w);
      if (this.sign !== T.sign)
        return this.add(T.negate());
      var I = this.value, R = T.value;
      return T.isSmall ? Z(I, Math.abs(R), this.sign) : B(I, R, this.sign);
    }, s.prototype.minus = s.prototype.subtract, g.prototype.subtract = function(w) {
      var T = z(w), I = this.value;
      if (I < 0 !== T.sign)
        return this.add(T.negate());
      var R = T.value;
      return T.isSmall ? new g(I - R) : Z(R, Math.abs(I), I >= 0);
    }, g.prototype.minus = g.prototype.subtract, m.prototype.subtract = function(w) {
      return new m(this.value - z(w).value);
    }, m.prototype.minus = m.prototype.subtract, s.prototype.negate = function() {
      return new s(this.value, !this.sign);
    }, g.prototype.negate = function() {
      var w = this.sign, T = new g(-this.value);
      return T.sign = !w, T;
    }, m.prototype.negate = function() {
      return new m(-this.value);
    }, s.prototype.abs = function() {
      return new s(this.value, !1);
    }, g.prototype.abs = function() {
      return new g(Math.abs(this.value));
    }, m.prototype.abs = function() {
      return new m(this.value >= 0 ? this.value : -this.value);
    };
    function H(w, T) {
      var I = w.length, R = T.length, d = I + R, u = N(d), c = i, E, A, S, P, M;
      for (S = 0; S < I; ++S) {
        P = w[S];
        for (var V = 0; V < R; ++V)
          M = T[V], E = P * M + u[S + V], A = Math.floor(E / c), u[S + V] = E - A * c, u[S + V + 1] += A;
      }
      return _(u), u;
    }
    function ue(w, T) {
      var I = w.length, R = new Array(I), d = i, u = 0, c, E;
      for (E = 0; E < I; E++)
        c = w[E] * T + u, u = Math.floor(c / d), R[E] = c - u * d;
      for (; u > 0; )
        R[E++] = u % d, u = Math.floor(u / d);
      return R;
    }
    function U(w, T) {
      for (var I = []; T-- > 0; ) I.push(0);
      return I.concat(w);
    }
    function J(w, T) {
      var I = Math.max(w.length, T.length);
      if (I <= 30) return H(w, T);
      I = Math.ceil(I / 2);
      var R = w.slice(I), d = w.slice(0, I), u = T.slice(I), c = T.slice(0, I), E = J(d, c), A = J(R, u), S = J(L(d, R), L(c, u)), P = L(L(E, U(j(j(S, E), A), I)), U(A, 2 * I));
      return _(P), P;
    }
    function $(w, T) {
      return -0.012 * w - 0.012 * T + 15e-6 * w * T > 0;
    }
    s.prototype.multiply = function(w) {
      var T = z(w), I = this.value, R = T.value, d = this.sign !== T.sign, u;
      if (T.isSmall) {
        if (R === 0) return p[0];
        if (R === 1) return this;
        if (R === -1) return this.negate();
        if (u = Math.abs(R), u < i)
          return new s(ue(I, u), d);
        R = b(u);
      }
      return $(I.length, R.length) ? new s(J(I, R), d) : new s(H(I, R), d);
    }, s.prototype.times = s.prototype.multiply;
    function K(w, T, I) {
      return w < i ? new s(ue(T, w), I) : new s(H(T, b(w)), I);
    }
    g.prototype._multiplyBySmall = function(w) {
      return v(w.value * this.value) ? new g(w.value * this.value) : K(Math.abs(w.value), b(Math.abs(this.value)), this.sign !== w.sign);
    }, s.prototype._multiplyBySmall = function(w) {
      return w.value === 0 ? p[0] : w.value === 1 ? this : w.value === -1 ? this.negate() : K(Math.abs(w.value), this.value, this.sign !== w.sign);
    }, g.prototype.multiply = function(w) {
      return z(w)._multiplyBySmall(this);
    }, g.prototype.times = g.prototype.multiply, m.prototype.multiply = function(w) {
      return new m(this.value * z(w).value);
    }, m.prototype.times = m.prototype.multiply;
    function le(w) {
      var T = w.length, I = N(T + T), R = i, d, u, c, E, A;
      for (c = 0; c < T; c++) {
        E = w[c], u = 0 - E * E;
        for (var S = c; S < T; S++)
          A = w[S], d = 2 * (E * A) + I[c + S] + u, u = Math.floor(d / R), I[c + S] = d - u * R;
        I[c + T] = u;
      }
      return _(I), I;
    }
    s.prototype.square = function() {
      return new s(le(this.value), !1);
    }, g.prototype.square = function() {
      var w = this.value * this.value;
      return v(w) ? new g(w) : new s(le(b(Math.abs(this.value))), !1);
    }, m.prototype.square = function(w) {
      return new m(this.value * this.value);
    };
    function de(w, T) {
      var I = w.length, R = T.length, d = i, u = N(T.length), c = T[R - 1], E = Math.ceil(d / (2 * c)), A = ue(w, E), S = ue(T, E), P, M, V, ee, Q, ie, Fr;
      for (A.length <= I && A.push(0), S.push(0), c = S[R - 1], M = I - R; M >= 0; M--) {
        for (P = d - 1, A[M + R] !== c && (P = Math.floor((A[M + R] * d + A[M + R - 1]) / c)), V = 0, ee = 0, ie = S.length, Q = 0; Q < ie; Q++)
          V += P * S[Q], Fr = Math.floor(V / d), ee += A[M + Q] - (V - Fr * d), V = Fr, ee < 0 ? (A[M + Q] = ee + d, ee = -1) : (A[M + Q] = ee, ee = 0);
        for (; ee !== 0; ) {
          for (P -= 1, V = 0, Q = 0; Q < ie; Q++)
            V += A[M + Q] - d + S[Q], V < 0 ? (A[M + Q] = V + d, V = 0) : (A[M + Q] = V, V = 1);
          ee += V;
        }
        u[M] = P;
      }
      return A = pe(A, E)[0], [y(u), y(A)];
    }
    function oe(w, T) {
      for (var I = w.length, R = T.length, d = [], u = [], c = i, E, A, S, P, M; I; ) {
        if (u.unshift(w[--I]), _(u), De(u, T) < 0) {
          d.push(0);
          continue;
        }
        A = u.length, S = u[A - 1] * c + u[A - 2], P = T[R - 1] * c + T[R - 2], A > R && (S = (S + 1) * c), E = Math.ceil(S / P);
        do {
          if (M = ue(T, E), De(M, u) <= 0) break;
          E--;
        } while (E);
        d.push(E), u = j(u, M);
      }
      return d.reverse(), [y(d), y(u)];
    }
    function pe(w, T) {
      var I = w.length, R = N(I), d = i, u, c, E, A;
      for (E = 0, u = I - 1; u >= 0; --u)
        A = E * d + w[u], c = x(A / T), E = A - c * T, R[u] = c | 0;
      return [R, E | 0];
    }
    function $e(w, T) {
      var I, R = z(T);
      if (f)
        return [new m(w.value / R.value), new m(w.value % R.value)];
      var d = w.value, u = R.value, c;
      if (u === 0) throw new Error("Cannot divide by zero");
      if (w.isSmall)
        return R.isSmall ? [new g(x(d / u)), new g(d % u)] : [p[0], w];
      if (R.isSmall) {
        if (u === 1) return [w, p[0]];
        if (u == -1) return [w.negate(), p[0]];
        var E = Math.abs(u);
        if (E < i) {
          I = pe(d, E), c = y(I[0]);
          var A = I[1];
          return w.sign && (A = -A), typeof c == "number" ? (w.sign !== R.sign && (c = -c), [new g(c), new g(A)]) : [new s(c, w.sign !== R.sign), new g(A)];
        }
        u = b(E);
      }
      var S = De(d, u);
      if (S === -1) return [p[0], w];
      if (S === 0) return [p[w.sign === R.sign ? 1 : -1], p[0]];
      d.length + u.length <= 200 ? I = de(d, u) : I = oe(d, u), c = I[0];
      var P = w.sign !== R.sign, M = I[1], V = w.sign;
      return typeof c == "number" ? (P && (c = -c), c = new g(c)) : c = new s(c, P), typeof M == "number" ? (V && (M = -M), M = new g(M)) : M = new s(M, V), [c, M];
    }
    s.prototype.divmod = function(w) {
      var T = $e(this, w);
      return {
        quotient: T[0],
        remainder: T[1]
      };
    }, m.prototype.divmod = g.prototype.divmod = s.prototype.divmod, s.prototype.divide = function(w) {
      return $e(this, w)[0];
    }, m.prototype.over = m.prototype.divide = function(w) {
      return new m(this.value / z(w).value);
    }, g.prototype.over = g.prototype.divide = s.prototype.over = s.prototype.divide, s.prototype.mod = function(w) {
      return $e(this, w)[1];
    }, m.prototype.mod = m.prototype.remainder = function(w) {
      return new m(this.value % z(w).value);
    }, g.prototype.remainder = g.prototype.mod = s.prototype.remainder = s.prototype.mod, s.prototype.pow = function(w) {
      var T = z(w), I = this.value, R = T.value, d, u, c;
      if (R === 0) return p[1];
      if (I === 0) return p[0];
      if (I === 1) return p[1];
      if (I === -1) return T.isEven() ? p[1] : p[-1];
      if (T.sign)
        return p[0];
      if (!T.isSmall) throw new Error("The exponent " + T.toString() + " is too large.");
      if (this.isSmall && v(d = Math.pow(I, R)))
        return new g(x(d));
      for (u = this, c = p[1]; R & !0 && (c = c.times(u), --R), R !== 0; )
        R /= 2, u = u.square();
      return c;
    }, g.prototype.pow = s.prototype.pow, m.prototype.pow = function(w) {
      var T = z(w), I = this.value, R = T.value, d = BigInt(0), u = BigInt(1), c = BigInt(2);
      if (R === d) return p[1];
      if (I === d) return p[0];
      if (I === u) return p[1];
      if (I === BigInt(-1)) return T.isEven() ? p[1] : p[-1];
      if (T.isNegative()) return new m(d);
      for (var E = this, A = p[1]; (R & u) === u && (A = A.times(E), --R), R !== d; )
        R /= c, E = E.square();
      return A;
    }, s.prototype.modPow = function(w, T) {
      if (w = z(w), T = z(T), T.isZero()) throw new Error("Cannot take modPow with modulus 0");
      var I = p[1], R = this.mod(T);
      for (w.isNegative() && (w = w.multiply(p[-1]), R = R.modInv(T)); w.isPositive(); ) {
        if (R.isZero()) return p[0];
        w.isOdd() && (I = I.multiply(R).mod(T)), w = w.divide(2), R = R.square().mod(T);
      }
      return I;
    }, m.prototype.modPow = g.prototype.modPow = s.prototype.modPow;
    function De(w, T) {
      if (w.length !== T.length)
        return w.length > T.length ? 1 : -1;
      for (var I = w.length - 1; I >= 0; I--)
        if (w[I] !== T[I]) return w[I] > T[I] ? 1 : -1;
      return 0;
    }
    s.prototype.compareAbs = function(w) {
      var T = z(w), I = this.value, R = T.value;
      return T.isSmall ? 1 : De(I, R);
    }, g.prototype.compareAbs = function(w) {
      var T = z(w), I = Math.abs(this.value), R = T.value;
      return T.isSmall ? (R = Math.abs(R), I === R ? 0 : I > R ? 1 : -1) : -1;
    }, m.prototype.compareAbs = function(w) {
      var T = this.value, I = z(w).value;
      return T = T >= 0 ? T : -T, I = I >= 0 ? I : -I, T === I ? 0 : T > I ? 1 : -1;
    }, s.prototype.compare = function(w) {
      if (w === 1 / 0)
        return -1;
      if (w === -1 / 0)
        return 1;
      var T = z(w), I = this.value, R = T.value;
      return this.sign !== T.sign ? T.sign ? 1 : -1 : T.isSmall ? this.sign ? -1 : 1 : De(I, R) * (this.sign ? -1 : 1);
    }, s.prototype.compareTo = s.prototype.compare, g.prototype.compare = function(w) {
      if (w === 1 / 0)
        return -1;
      if (w === -1 / 0)
        return 1;
      var T = z(w), I = this.value, R = T.value;
      return T.isSmall ? I == R ? 0 : I > R ? 1 : -1 : I < 0 !== T.sign ? I < 0 ? -1 : 1 : I < 0 ? 1 : -1;
    }, g.prototype.compareTo = g.prototype.compare, m.prototype.compare = function(w) {
      if (w === 1 / 0)
        return -1;
      if (w === -1 / 0)
        return 1;
      var T = this.value, I = z(w).value;
      return T === I ? 0 : T > I ? 1 : -1;
    }, m.prototype.compareTo = m.prototype.compare, s.prototype.equals = function(w) {
      return this.compare(w) === 0;
    }, m.prototype.eq = m.prototype.equals = g.prototype.eq = g.prototype.equals = s.prototype.eq = s.prototype.equals, s.prototype.notEquals = function(w) {
      return this.compare(w) !== 0;
    }, m.prototype.neq = m.prototype.notEquals = g.prototype.neq = g.prototype.notEquals = s.prototype.neq = s.prototype.notEquals, s.prototype.greater = function(w) {
      return this.compare(w) > 0;
    }, m.prototype.gt = m.prototype.greater = g.prototype.gt = g.prototype.greater = s.prototype.gt = s.prototype.greater, s.prototype.lesser = function(w) {
      return this.compare(w) < 0;
    }, m.prototype.lt = m.prototype.lesser = g.prototype.lt = g.prototype.lesser = s.prototype.lt = s.prototype.lesser, s.prototype.greaterOrEquals = function(w) {
      return this.compare(w) >= 0;
    }, m.prototype.geq = m.prototype.greaterOrEquals = g.prototype.geq = g.prototype.greaterOrEquals = s.prototype.geq = s.prototype.greaterOrEquals, s.prototype.lesserOrEquals = function(w) {
      return this.compare(w) <= 0;
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
    }, s.prototype.isDivisibleBy = function(w) {
      var T = z(w);
      return T.isZero() ? !1 : T.isUnit() ? !0 : T.compareAbs(2) === 0 ? this.isEven() : this.mod(T).isZero();
    }, m.prototype.isDivisibleBy = g.prototype.isDivisibleBy = s.prototype.isDivisibleBy;
    function se(w) {
      var T = w.abs();
      if (T.isUnit()) return !1;
      if (T.equals(2) || T.equals(3) || T.equals(5)) return !0;
      if (T.isEven() || T.isDivisibleBy(3) || T.isDivisibleBy(5)) return !1;
      if (T.lesser(49)) return !0;
    }
    function Me(w, T) {
      for (var I = w.prev(), R = I, d = 0, u, c, E; R.isEven(); ) R = R.divide(2), d++;
      e: for (c = 0; c < T.length; c++)
        if (!w.lesser(T[c]) && (E = e(T[c]).modPow(R, w), !(E.isUnit() || E.equals(I)))) {
          for (u = d - 1; u != 0; u--) {
            if (E = E.square().mod(w), E.isUnit()) return !1;
            if (E.equals(I)) continue e;
          }
          return !1;
        }
      return !0;
    }
    s.prototype.isPrime = function(w) {
      var T = se(this);
      if (T !== n) return T;
      var I = this.abs(), R = I.bitLength();
      if (R <= 64)
        return Me(I, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
      for (var d = Math.log(2) * R.toJSNumber(), u = Math.ceil(w === !0 ? 2 * Math.pow(d, 2) : d), c = [], E = 0; E < u; E++)
        c.push(e(E + 2));
      return Me(I, c);
    }, m.prototype.isPrime = g.prototype.isPrime = s.prototype.isPrime, s.prototype.isProbablePrime = function(w, T) {
      var I = se(this);
      if (I !== n) return I;
      for (var R = this.abs(), d = w === n ? 5 : w, u = [], c = 0; c < d; c++)
        u.push(e.randBetween(2, R.minus(2), T));
      return Me(R, u);
    }, m.prototype.isProbablePrime = g.prototype.isProbablePrime = s.prototype.isProbablePrime, s.prototype.modInv = function(w) {
      for (var T = e.zero, I = e.one, R = z(w), d = this.abs(), u, c, E; !d.isZero(); )
        u = R.divide(d), c = T, E = R, T = I, R = d, I = c.subtract(u.multiply(I)), d = E.subtract(u.multiply(d));
      if (!R.isUnit()) throw new Error(this.toString() + " and " + w.toString() + " are not co-prime");
      return T.compare(0) === -1 && (T = T.add(w)), this.isNegative() ? T.negate() : T;
    }, m.prototype.modInv = g.prototype.modInv = s.prototype.modInv, s.prototype.next = function() {
      var w = this.value;
      return this.sign ? Z(w, 1, this.sign) : new s(k(w, 1), this.sign);
    }, g.prototype.next = function() {
      var w = this.value;
      return w + 1 < a ? new g(w + 1) : new s(l, !1);
    }, m.prototype.next = function() {
      return new m(this.value + BigInt(1));
    }, s.prototype.prev = function() {
      var w = this.value;
      return this.sign ? new s(k(w, 1), !0) : Z(w, 1, this.sign);
    }, g.prototype.prev = function() {
      var w = this.value;
      return w - 1 > -9007199254740992 ? new g(w - 1) : new s(l, !0);
    }, m.prototype.prev = function() {
      return new m(this.value - BigInt(1));
    };
    for (var ae = [1]; 2 * ae[ae.length - 1] <= i; ) ae.push(2 * ae[ae.length - 1]);
    var ce = ae.length, X = ae[ce - 1];
    function ot(w) {
      return Math.abs(w) <= i;
    }
    s.prototype.shiftLeft = function(w) {
      var T = z(w).toJSNumber();
      if (!ot(T))
        throw new Error(String(T) + " is too large for shifting.");
      if (T < 0) return this.shiftRight(-T);
      var I = this;
      if (I.isZero()) return I;
      for (; T >= ce; )
        I = I.multiply(X), T -= ce - 1;
      return I.multiply(ae[T]);
    }, m.prototype.shiftLeft = g.prototype.shiftLeft = s.prototype.shiftLeft, s.prototype.shiftRight = function(w) {
      var T, I = z(w).toJSNumber();
      if (!ot(I))
        throw new Error(String(I) + " is too large for shifting.");
      if (I < 0) return this.shiftLeft(-I);
      for (var R = this; I >= ce; ) {
        if (R.isZero() || R.isNegative() && R.isUnit()) return R;
        T = $e(R, X), R = T[1].isNegative() ? T[0].prev() : T[0], I -= ce - 1;
      }
      return T = $e(R, ae[I]), T[1].isNegative() ? T[0].prev() : T[0];
    }, m.prototype.shiftRight = g.prototype.shiftRight = s.prototype.shiftRight;
    function xt(w, T, I) {
      T = z(T);
      for (var R = w.isNegative(), d = T.isNegative(), u = R ? w.not() : w, c = d ? T.not() : T, E = 0, A = 0, S = null, P = null, M = []; !u.isZero() || !c.isZero(); )
        S = $e(u, X), E = S[1].toJSNumber(), R && (E = X - 1 - E), P = $e(c, X), A = P[1].toJSNumber(), d && (A = X - 1 - A), u = S[0], c = P[0], M.push(I(E, A));
      for (var V = I(R ? 1 : 0, d ? 1 : 0) !== 0 ? e(-1) : e(0), ee = M.length - 1; ee >= 0; ee -= 1)
        V = V.multiply(X).add(e(M[ee]));
      return V;
    }
    s.prototype.not = function() {
      return this.negate().prev();
    }, m.prototype.not = g.prototype.not = s.prototype.not, s.prototype.and = function(w) {
      return xt(this, w, function(T, I) {
        return T & I;
      });
    }, m.prototype.and = g.prototype.and = s.prototype.and, s.prototype.or = function(w) {
      return xt(this, w, function(T, I) {
        return T | I;
      });
    }, m.prototype.or = g.prototype.or = s.prototype.or, s.prototype.xor = function(w) {
      return xt(this, w, function(T, I) {
        return T ^ I;
      });
    }, m.prototype.xor = g.prototype.xor = s.prototype.xor;
    var st = 1 << 30, or = (i & -1e7) * (i & -1e7) | st;
    function bt(w) {
      var T = w.value, I = typeof T == "number" ? T | st : typeof T == "bigint" ? T | BigInt(st) : T[0] + T[1] * i | or;
      return I & -I;
    }
    function ht(w, T) {
      if (T.compareTo(w) <= 0) {
        var I = ht(w, T.square(T)), R = I.p, d = I.e, u = R.multiply(T);
        return u.compareTo(w) <= 0 ? { p: u, e: d * 2 + 1 } : { p: R, e: d * 2 };
      }
      return { p: e(1), e: 0 };
    }
    s.prototype.bitLength = function() {
      var w = this;
      return w.compareTo(e(0)) < 0 && (w = w.negate().subtract(e(1))), w.compareTo(e(0)) === 0 ? e(0) : e(ht(w, e(2)).e).add(e(1));
    }, m.prototype.bitLength = g.prototype.bitLength = s.prototype.bitLength;
    function Ft(w, T) {
      return w = z(w), T = z(T), w.greater(T) ? w : T;
    }
    function at(w, T) {
      return w = z(w), T = z(T), w.lesser(T) ? w : T;
    }
    function Ut(w, T) {
      if (w = z(w).abs(), T = z(T).abs(), w.equals(T)) return w;
      if (w.isZero()) return T;
      if (T.isZero()) return w;
      for (var I = p[1], R, d; w.isEven() && T.isEven(); )
        R = at(bt(w), bt(T)), w = w.divide(R), T = T.divide(R), I = I.multiply(R);
      for (; w.isEven(); )
        w = w.divide(bt(w));
      do {
        for (; T.isEven(); )
          T = T.divide(bt(T));
        w.greater(T) && (d = T, T = w, w = d), T = T.subtract(w);
      } while (!T.isZero());
      return I.isUnit() ? w : w.multiply(I);
    }
    function pt(w, T) {
      return w = z(w).abs(), T = z(T).abs(), w.divide(Ut(w, T)).multiply(T);
    }
    function dt(w, T, I) {
      w = z(w), T = z(T);
      var R = I || Math.random, d = at(w, T), u = Ft(w, T), c = u.subtract(d).add(1);
      if (c.isSmall) return d.add(Math.floor(R() * c));
      for (var E = Qe(c, i).value, A = [], S = !0, P = 0; P < E.length; P++) {
        var M = S ? E[P] + (P + 1 < E.length ? E[P + 1] / i : 0) : i, V = x(R() * M);
        A.push(V), V < E[P] && (S = !1);
      }
      return d.add(p.fromArray(A, i, !1));
    }
    var Tt = function(w, T, I, R) {
      I = I || h, w = String(w), R || (w = w.toLowerCase(), I = I.toLowerCase());
      var d = w.length, u, c = Math.abs(T), E = {};
      for (u = 0; u < I.length; u++)
        E[I[u]] = u;
      for (u = 0; u < d; u++) {
        var A = w[u];
        if (A !== "-" && A in E && E[A] >= c) {
          if (A === "1" && c === 1) continue;
          throw new Error(A + " is not a valid digit in base " + T + ".");
        }
      }
      T = z(T);
      var S = [], P = w[0] === "-";
      for (u = P ? 1 : 0; u < w.length; u++) {
        var A = w[u];
        if (A in E) S.push(z(E[A]));
        else if (A === "<") {
          var M = u;
          do
            u++;
          while (w[u] !== ">" && u < w.length);
          S.push(z(w.slice(M + 1, u)));
        } else throw new Error(A + " is not a valid character");
      }
      return _t(S, T, P);
    };
    function _t(w, T, I) {
      var R = p[0], d = p[1], u;
      for (u = w.length - 1; u >= 0; u--)
        R = R.add(w[u].times(d)), d = d.times(T);
      return I ? R.negate() : R;
    }
    function Xt(w, T) {
      return T = T || h, w < T.length ? T[w] : "<" + w + ">";
    }
    function Qe(w, T) {
      if (T = e(T), T.isZero()) {
        if (w.isZero()) return { value: [0], isNegative: !1 };
        throw new Error("Cannot convert nonzero numbers to base 0.");
      }
      if (T.equals(-1)) {
        if (w.isZero()) return { value: [0], isNegative: !1 };
        if (w.isNegative())
          return {
            value: [].concat.apply(
              [],
              Array.apply(null, Array(-w.toJSNumber())).map(Array.prototype.valueOf, [1, 0])
            ),
            isNegative: !1
          };
        var I = Array.apply(null, Array(w.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
        return I.unshift([1]), {
          value: [].concat.apply([], I),
          isNegative: !1
        };
      }
      var R = !1;
      if (w.isNegative() && T.isPositive() && (R = !0, w = w.abs()), T.isUnit())
        return w.isZero() ? { value: [0], isNegative: !1 } : {
          value: Array.apply(null, Array(w.toJSNumber())).map(Number.prototype.valueOf, 1),
          isNegative: R
        };
      for (var d = [], u = w, c; u.isNegative() || u.compareAbs(T) >= 0; ) {
        c = u.divmod(T), u = c.quotient;
        var E = c.remainder;
        E.isNegative() && (E = T.minus(E).abs(), u = u.next()), d.push(E.toJSNumber());
      }
      return d.push(u.toJSNumber()), { value: d.reverse(), isNegative: R };
    }
    function sr(w, T, I) {
      var R = Qe(w, T);
      return (R.isNegative ? "-" : "") + R.value.map(function(d) {
        return Xt(d, I);
      }).join("");
    }
    s.prototype.toArray = function(w) {
      return Qe(this, w);
    }, g.prototype.toArray = function(w) {
      return Qe(this, w);
    }, m.prototype.toArray = function(w) {
      return Qe(this, w);
    }, s.prototype.toString = function(w, T) {
      if (w === n && (w = 10), w !== 10 || T) return sr(this, w, T);
      for (var I = this.value, R = I.length, d = String(I[--R]), u = "0000000", c; --R >= 0; )
        c = String(I[R]), d += u.slice(c.length) + c;
      var E = this.sign ? "-" : "";
      return E + d;
    }, g.prototype.toString = function(w, T) {
      return w === n && (w = 10), w != 10 || T ? sr(this, w, T) : String(this.value);
    }, m.prototype.toString = g.prototype.toString, m.prototype.toJSON = s.prototype.toJSON = g.prototype.toJSON = function() {
      return this.toString();
    }, s.prototype.valueOf = function() {
      return parseInt(this.toString(), 10);
    }, s.prototype.toJSNumber = s.prototype.valueOf, g.prototype.valueOf = function() {
      return this.value;
    }, g.prototype.toJSNumber = g.prototype.valueOf, m.prototype.valueOf = m.prototype.toJSNumber = function() {
      return parseInt(this.toString(), 10);
    };
    function ar(w) {
      if (v(+w)) {
        var T = +w;
        if (T === x(T))
          return f ? new m(BigInt(T)) : new g(T);
        throw new Error("Invalid integer: " + w);
      }
      var I = w[0] === "-";
      I && (w = w.slice(1));
      var R = w.split(/e/i);
      if (R.length > 2) throw new Error("Invalid integer: " + R.join("e"));
      if (R.length === 2) {
        var d = R[1];
        if (d[0] === "+" && (d = d.slice(1)), d = +d, d !== x(d) || !v(d)) throw new Error("Invalid integer: " + d + " is not a valid exponent.");
        var u = R[0], c = u.indexOf(".");
        if (c >= 0 && (d -= u.length - c - 1, u = u.slice(0, c) + u.slice(c + 1)), d < 0) throw new Error("Cannot include negative exponent part for integers");
        u += new Array(d + 1).join("0"), w = u;
      }
      var E = /^([0-9][0-9]*)$/.test(w);
      if (!E) throw new Error("Invalid integer: " + w);
      if (f)
        return new m(BigInt(I ? "-" + w : w));
      for (var A = [], S = w.length, P = o, M = S - P; S > 0; )
        A.push(+w.slice(M, S)), M -= P, M < 0 && (M = 0), S -= P;
      return _(A), new s(A, I);
    }
    function vr(w) {
      if (f)
        return new m(BigInt(w));
      if (v(w)) {
        if (w !== x(w)) throw new Error(w + " is not an integer.");
        return new g(w);
      }
      return ar(w.toString());
    }
    function z(w) {
      return typeof w == "number" ? vr(w) : typeof w == "string" ? ar(w) : typeof w == "bigint" ? new m(w) : w;
    }
    for (var me = 0; me < 1e3; me++)
      p[me] = z(me), me > 0 && (p[-me] = z(-me));
    return p.one = p[1], p.zero = p[0], p.minusOne = p[-1], p.max = Ft, p.min = at, p.gcd = Ut, p.lcm = pt, p.isInstance = function(w) {
      return w instanceof s || w instanceof g || w instanceof m;
    }, p.randBetween = dt, p.fromArray = function(w, T, I) {
      return _t(w.map(z), z(T || 10), I);
    }, p;
  }();
  r.hasOwnProperty("exports") && (r.exports = e);
})(ks);
var cl = ks.exports;
const fl = /* @__PURE__ */ Ai(cl);
var $s = {}, On = {};
On.byteLength = dl;
On.toByteArray = ml;
On.fromByteArray = El;
var $t = [], yt = [], hl = typeof Uint8Array < "u" ? Uint8Array : Array, zn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Nr = 0, pl = zn.length; Nr < pl; ++Nr)
  $t[Nr] = zn[Nr], yt[zn.charCodeAt(Nr)] = Nr;
yt[45] = 62;
yt[95] = 63;
function Ds(r) {
  var e = r.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = r.indexOf("=");
  n === -1 && (n = e);
  var i = n === e ? 0 : 4 - n % 4;
  return [n, i];
}
function dl(r) {
  var e = Ds(r), n = e[0], i = e[1];
  return (n + i) * 3 / 4 - i;
}
function gl(r, e, n) {
  return (e + n) * 3 / 4 - n;
}
function ml(r) {
  var e, n = Ds(r), i = n[0], o = n[1], a = new hl(gl(r, i, o)), l = 0, h = o > 0 ? i - 4 : i, f;
  for (f = 0; f < h; f += 4)
    e = yt[r.charCodeAt(f)] << 18 | yt[r.charCodeAt(f + 1)] << 12 | yt[r.charCodeAt(f + 2)] << 6 | yt[r.charCodeAt(f + 3)], a[l++] = e >> 16 & 255, a[l++] = e >> 8 & 255, a[l++] = e & 255;
  return o === 2 && (e = yt[r.charCodeAt(f)] << 2 | yt[r.charCodeAt(f + 1)] >> 4, a[l++] = e & 255), o === 1 && (e = yt[r.charCodeAt(f)] << 10 | yt[r.charCodeAt(f + 1)] << 4 | yt[r.charCodeAt(f + 2)] >> 2, a[l++] = e >> 8 & 255, a[l++] = e & 255), a;
}
function wl(r) {
  return $t[r >> 18 & 63] + $t[r >> 12 & 63] + $t[r >> 6 & 63] + $t[r & 63];
}
function yl(r, e, n) {
  for (var i, o = [], a = e; a < n; a += 3)
    i = (r[a] << 16 & 16711680) + (r[a + 1] << 8 & 65280) + (r[a + 2] & 255), o.push(wl(i));
  return o.join("");
}
function El(r) {
  for (var e, n = r.length, i = n % 3, o = [], a = 16383, l = 0, h = n - i; l < h; l += a)
    o.push(yl(r, l, l + a > h ? h : l + a));
  return i === 1 ? (e = r[n - 1], o.push(
    $t[e >> 2] + $t[e << 4 & 63] + "=="
  )) : i === 2 && (e = (r[n - 2] << 8) + r[n - 1], o.push(
    $t[e >> 10] + $t[e >> 4 & 63] + $t[e << 2 & 63] + "="
  )), o.join("");
}
var xi = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
xi.read = function(r, e, n, i, o) {
  var a, l, h = o * 8 - i - 1, f = (1 << h) - 1, p = f >> 1, s = -7, g = n ? o - 1 : 0, m = n ? -1 : 1, v = r[e + g];
  for (g += m, a = v & (1 << -s) - 1, v >>= -s, s += h; s > 0; a = a * 256 + r[e + g], g += m, s -= 8)
    ;
  for (l = a & (1 << -s) - 1, a >>= -s, s += i; s > 0; l = l * 256 + r[e + g], g += m, s -= 8)
    ;
  if (a === 0)
    a = 1 - p;
  else {
    if (a === f)
      return l ? NaN : (v ? -1 : 1) * (1 / 0);
    l = l + Math.pow(2, i), a = a - p;
  }
  return (v ? -1 : 1) * l * Math.pow(2, a - i);
};
xi.write = function(r, e, n, i, o, a) {
  var l, h, f, p = a * 8 - o - 1, s = (1 << p) - 1, g = s >> 1, m = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, v = i ? 0 : a - 1, b = i ? 1 : -1, y = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (h = isNaN(e) ? 1 : 0, l = s) : (l = Math.floor(Math.log(e) / Math.LN2), e * (f = Math.pow(2, -l)) < 1 && (l--, f *= 2), l + g >= 1 ? e += m / f : e += m * Math.pow(2, 1 - g), e * f >= 2 && (l++, f /= 2), l + g >= s ? (h = 0, l = s) : l + g >= 1 ? (h = (e * f - 1) * Math.pow(2, o), l = l + g) : (h = e * Math.pow(2, g - 1) * Math.pow(2, o), l = 0)); o >= 8; r[n + v] = h & 255, v += b, h /= 256, o -= 8)
    ;
  for (l = l << o | h, p += o; p > 0; r[n + v] = l & 255, v += b, l /= 256, p -= 8)
    ;
  r[n + v - b] |= y * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
  const e = On, n = xi, i = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  r.Buffer = s, r.SlowBuffer = k, r.INSPECT_MAX_BYTES = 50;
  const o = 2147483647;
  r.kMaxLength = o;
  const { Uint8Array: a, ArrayBuffer: l, SharedArrayBuffer: h } = globalThis;
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
  function s(d, u, c) {
    if (typeof d == "number") {
      if (typeof u == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return b(d);
    }
    return g(d, u, c);
  }
  s.poolSize = 8192;
  function g(d, u, c) {
    if (typeof d == "string")
      return y(d, u);
    if (l.isView(d))
      return N(d);
    if (d == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof d
      );
    if (me(d, l) || d && me(d.buffer, l) || typeof h < "u" && (me(d, h) || d && me(d.buffer, h)))
      return x(d, u, c);
    if (typeof d == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const E = d.valueOf && d.valueOf();
    if (E != null && E !== d)
      return s.from(E, u, c);
    const A = C(d);
    if (A) return A;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof d[Symbol.toPrimitive] == "function")
      return s.from(d[Symbol.toPrimitive]("string"), u, c);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof d
    );
  }
  s.from = function(d, u, c) {
    return g(d, u, c);
  }, Object.setPrototypeOf(s.prototype, a.prototype), Object.setPrototypeOf(s, a);
  function m(d) {
    if (typeof d != "number")
      throw new TypeError('"size" argument must be of type number');
    if (d < 0)
      throw new RangeError('The value "' + d + '" is invalid for option "size"');
  }
  function v(d, u, c) {
    return m(d), d <= 0 ? p(d) : u !== void 0 ? typeof c == "string" ? p(d).fill(u, c) : p(d).fill(u) : p(d);
  }
  s.alloc = function(d, u, c) {
    return v(d, u, c);
  };
  function b(d) {
    return m(d), p(d < 0 ? 0 : L(d) | 0);
  }
  s.allocUnsafe = function(d) {
    return b(d);
  }, s.allocUnsafeSlow = function(d) {
    return b(d);
  };
  function y(d, u) {
    if ((typeof u != "string" || u === "") && (u = "utf8"), !s.isEncoding(u))
      throw new TypeError("Unknown encoding: " + u);
    const c = j(d, u) | 0;
    let E = p(c);
    const A = E.write(d, u);
    return A !== c && (E = E.slice(0, A)), E;
  }
  function _(d) {
    const u = d.length < 0 ? 0 : L(d.length) | 0, c = p(u);
    for (let E = 0; E < u; E += 1)
      c[E] = d[E] & 255;
    return c;
  }
  function N(d) {
    if (me(d, a)) {
      const u = new a(d);
      return x(u.buffer, u.byteOffset, u.byteLength);
    }
    return _(d);
  }
  function x(d, u, c) {
    if (u < 0 || d.byteLength < u)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (d.byteLength < u + (c || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let E;
    return u === void 0 && c === void 0 ? E = new a(d) : c === void 0 ? E = new a(d, u) : E = new a(d, u, c), Object.setPrototypeOf(E, s.prototype), E;
  }
  function C(d) {
    if (s.isBuffer(d)) {
      const u = L(d.length) | 0, c = p(u);
      return c.length === 0 || d.copy(c, 0, 0, u), c;
    }
    if (d.length !== void 0)
      return typeof d.length != "number" || w(d.length) ? p(0) : _(d);
    if (d.type === "Buffer" && Array.isArray(d.data))
      return _(d.data);
  }
  function L(d) {
    if (d >= o)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
    return d | 0;
  }
  function k(d) {
    return +d != d && (d = 0), s.alloc(+d);
  }
  s.isBuffer = function(u) {
    return u != null && u._isBuffer === !0 && u !== s.prototype;
  }, s.compare = function(u, c) {
    if (me(u, a) && (u = s.from(u, u.offset, u.byteLength)), me(c, a) && (c = s.from(c, c.offset, c.byteLength)), !s.isBuffer(u) || !s.isBuffer(c))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (u === c) return 0;
    let E = u.length, A = c.length;
    for (let S = 0, P = Math.min(E, A); S < P; ++S)
      if (u[S] !== c[S]) {
        E = u[S], A = c[S];
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
  }, s.concat = function(u, c) {
    if (!Array.isArray(u))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (u.length === 0)
      return s.alloc(0);
    let E;
    if (c === void 0)
      for (c = 0, E = 0; E < u.length; ++E)
        c += u[E].length;
    const A = s.allocUnsafe(c);
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
    if (l.isView(d) || me(d, l))
      return d.byteLength;
    if (typeof d != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof d
      );
    const c = d.length, E = arguments.length > 2 && arguments[2] === !0;
    if (!E && c === 0) return 0;
    let A = !1;
    for (; ; )
      switch (u) {
        case "ascii":
        case "latin1":
        case "binary":
          return c;
        case "utf8":
        case "utf-8":
          return Qe(d).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return c * 2;
        case "hex":
          return c >>> 1;
        case "base64":
          return vr(d).length;
        default:
          if (A)
            return E ? -1 : Qe(d).length;
          u = ("" + u).toLowerCase(), A = !0;
      }
  }
  s.byteLength = j;
  function B(d, u, c) {
    let E = !1;
    if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((c === void 0 || c > this.length) && (c = this.length), c <= 0) || (c >>>= 0, u >>>= 0, c <= u))
      return "";
    for (d || (d = "utf8"); ; )
      switch (d) {
        case "hex":
          return Me(this, u, c);
        case "utf8":
        case "utf-8":
          return oe(this, u, c);
        case "ascii":
          return De(this, u, c);
        case "latin1":
        case "binary":
          return se(this, u, c);
        case "base64":
          return de(this, u, c);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ae(this, u, c);
        default:
          if (E) throw new TypeError("Unknown encoding: " + d);
          d = (d + "").toLowerCase(), E = !0;
      }
  }
  s.prototype._isBuffer = !0;
  function Z(d, u, c) {
    const E = d[u];
    d[u] = d[c], d[c] = E;
  }
  s.prototype.swap16 = function() {
    const u = this.length;
    if (u % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let c = 0; c < u; c += 2)
      Z(this, c, c + 1);
    return this;
  }, s.prototype.swap32 = function() {
    const u = this.length;
    if (u % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let c = 0; c < u; c += 4)
      Z(this, c, c + 3), Z(this, c + 1, c + 2);
    return this;
  }, s.prototype.swap64 = function() {
    const u = this.length;
    if (u % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let c = 0; c < u; c += 8)
      Z(this, c, c + 7), Z(this, c + 1, c + 6), Z(this, c + 2, c + 5), Z(this, c + 3, c + 4);
    return this;
  }, s.prototype.toString = function() {
    const u = this.length;
    return u === 0 ? "" : arguments.length === 0 ? oe(this, 0, u) : B.apply(this, arguments);
  }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(u) {
    if (!s.isBuffer(u)) throw new TypeError("Argument must be a Buffer");
    return this === u ? !0 : s.compare(this, u) === 0;
  }, s.prototype.inspect = function() {
    let u = "";
    const c = r.INSPECT_MAX_BYTES;
    return u = this.toString("hex", 0, c).replace(/(.{2})/g, "$1 ").trim(), this.length > c && (u += " ... "), "<Buffer " + u + ">";
  }, i && (s.prototype[i] = s.prototype.inspect), s.prototype.compare = function(u, c, E, A, S) {
    if (me(u, a) && (u = s.from(u, u.offset, u.byteLength)), !s.isBuffer(u))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u
      );
    if (c === void 0 && (c = 0), E === void 0 && (E = u ? u.length : 0), A === void 0 && (A = 0), S === void 0 && (S = this.length), c < 0 || E > u.length || A < 0 || S > this.length)
      throw new RangeError("out of range index");
    if (A >= S && c >= E)
      return 0;
    if (A >= S)
      return -1;
    if (c >= E)
      return 1;
    if (c >>>= 0, E >>>= 0, A >>>= 0, S >>>= 0, this === u) return 0;
    let P = S - A, M = E - c;
    const V = Math.min(P, M), ee = this.slice(A, S), Q = u.slice(c, E);
    for (let ie = 0; ie < V; ++ie)
      if (ee[ie] !== Q[ie]) {
        P = ee[ie], M = Q[ie];
        break;
      }
    return P < M ? -1 : M < P ? 1 : 0;
  };
  function H(d, u, c, E, A) {
    if (d.length === 0) return -1;
    if (typeof c == "string" ? (E = c, c = 0) : c > 2147483647 ? c = 2147483647 : c < -2147483648 && (c = -2147483648), c = +c, w(c) && (c = A ? 0 : d.length - 1), c < 0 && (c = d.length + c), c >= d.length) {
      if (A) return -1;
      c = d.length - 1;
    } else if (c < 0)
      if (A) c = 0;
      else return -1;
    if (typeof u == "string" && (u = s.from(u, E)), s.isBuffer(u))
      return u.length === 0 ? -1 : ue(d, u, c, E, A);
    if (typeof u == "number")
      return u = u & 255, typeof a.prototype.indexOf == "function" ? A ? a.prototype.indexOf.call(d, u, c) : a.prototype.lastIndexOf.call(d, u, c) : ue(d, [u], c, E, A);
    throw new TypeError("val must be string, number or Buffer");
  }
  function ue(d, u, c, E, A) {
    let S = 1, P = d.length, M = u.length;
    if (E !== void 0 && (E = String(E).toLowerCase(), E === "ucs2" || E === "ucs-2" || E === "utf16le" || E === "utf-16le")) {
      if (d.length < 2 || u.length < 2)
        return -1;
      S = 2, P /= 2, M /= 2, c /= 2;
    }
    function V(Q, ie) {
      return S === 1 ? Q[ie] : Q.readUInt16BE(ie * S);
    }
    let ee;
    if (A) {
      let Q = -1;
      for (ee = c; ee < P; ee++)
        if (V(d, ee) === V(u, Q === -1 ? 0 : ee - Q)) {
          if (Q === -1 && (Q = ee), ee - Q + 1 === M) return Q * S;
        } else
          Q !== -1 && (ee -= ee - Q), Q = -1;
    } else
      for (c + M > P && (c = P - M), ee = c; ee >= 0; ee--) {
        let Q = !0;
        for (let ie = 0; ie < M; ie++)
          if (V(d, ee + ie) !== V(u, ie)) {
            Q = !1;
            break;
          }
        if (Q) return ee;
      }
    return -1;
  }
  s.prototype.includes = function(u, c, E) {
    return this.indexOf(u, c, E) !== -1;
  }, s.prototype.indexOf = function(u, c, E) {
    return H(this, u, c, E, !0);
  }, s.prototype.lastIndexOf = function(u, c, E) {
    return H(this, u, c, E, !1);
  };
  function U(d, u, c, E) {
    c = Number(c) || 0;
    const A = d.length - c;
    E ? (E = Number(E), E > A && (E = A)) : E = A;
    const S = u.length;
    E > S / 2 && (E = S / 2);
    let P;
    for (P = 0; P < E; ++P) {
      const M = parseInt(u.substr(P * 2, 2), 16);
      if (w(M)) return P;
      d[c + P] = M;
    }
    return P;
  }
  function J(d, u, c, E) {
    return z(Qe(u, d.length - c), d, c, E);
  }
  function $(d, u, c, E) {
    return z(sr(u), d, c, E);
  }
  function K(d, u, c, E) {
    return z(vr(u), d, c, E);
  }
  function le(d, u, c, E) {
    return z(ar(u, d.length - c), d, c, E);
  }
  s.prototype.write = function(u, c, E, A) {
    if (c === void 0)
      A = "utf8", E = this.length, c = 0;
    else if (E === void 0 && typeof c == "string")
      A = c, E = this.length, c = 0;
    else if (isFinite(c))
      c = c >>> 0, isFinite(E) ? (E = E >>> 0, A === void 0 && (A = "utf8")) : (A = E, E = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const S = this.length - c;
    if ((E === void 0 || E > S) && (E = S), u.length > 0 && (E < 0 || c < 0) || c > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    A || (A = "utf8");
    let P = !1;
    for (; ; )
      switch (A) {
        case "hex":
          return U(this, u, c, E);
        case "utf8":
        case "utf-8":
          return J(this, u, c, E);
        case "ascii":
        case "latin1":
        case "binary":
          return $(this, u, c, E);
        case "base64":
          return K(this, u, c, E);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return le(this, u, c, E);
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
  function de(d, u, c) {
    return u === 0 && c === d.length ? e.fromByteArray(d) : e.fromByteArray(d.slice(u, c));
  }
  function oe(d, u, c) {
    c = Math.min(d.length, c);
    const E = [];
    let A = u;
    for (; A < c; ) {
      const S = d[A];
      let P = null, M = S > 239 ? 4 : S > 223 ? 3 : S > 191 ? 2 : 1;
      if (A + M <= c) {
        let V, ee, Q, ie;
        switch (M) {
          case 1:
            S < 128 && (P = S);
            break;
          case 2:
            V = d[A + 1], (V & 192) === 128 && (ie = (S & 31) << 6 | V & 63, ie > 127 && (P = ie));
            break;
          case 3:
            V = d[A + 1], ee = d[A + 2], (V & 192) === 128 && (ee & 192) === 128 && (ie = (S & 15) << 12 | (V & 63) << 6 | ee & 63, ie > 2047 && (ie < 55296 || ie > 57343) && (P = ie));
            break;
          case 4:
            V = d[A + 1], ee = d[A + 2], Q = d[A + 3], (V & 192) === 128 && (ee & 192) === 128 && (Q & 192) === 128 && (ie = (S & 15) << 18 | (V & 63) << 12 | (ee & 63) << 6 | Q & 63, ie > 65535 && ie < 1114112 && (P = ie));
        }
      }
      P === null ? (P = 65533, M = 1) : P > 65535 && (P -= 65536, E.push(P >>> 10 & 1023 | 55296), P = 56320 | P & 1023), E.push(P), A += M;
    }
    return $e(E);
  }
  const pe = 4096;
  function $e(d) {
    const u = d.length;
    if (u <= pe)
      return String.fromCharCode.apply(String, d);
    let c = "", E = 0;
    for (; E < u; )
      c += String.fromCharCode.apply(
        String,
        d.slice(E, E += pe)
      );
    return c;
  }
  function De(d, u, c) {
    let E = "";
    c = Math.min(d.length, c);
    for (let A = u; A < c; ++A)
      E += String.fromCharCode(d[A] & 127);
    return E;
  }
  function se(d, u, c) {
    let E = "";
    c = Math.min(d.length, c);
    for (let A = u; A < c; ++A)
      E += String.fromCharCode(d[A]);
    return E;
  }
  function Me(d, u, c) {
    const E = d.length;
    (!u || u < 0) && (u = 0), (!c || c < 0 || c > E) && (c = E);
    let A = "";
    for (let S = u; S < c; ++S)
      A += T[d[S]];
    return A;
  }
  function ae(d, u, c) {
    const E = d.slice(u, c);
    let A = "";
    for (let S = 0; S < E.length - 1; S += 2)
      A += String.fromCharCode(E[S] + E[S + 1] * 256);
    return A;
  }
  s.prototype.slice = function(u, c) {
    const E = this.length;
    u = ~~u, c = c === void 0 ? E : ~~c, u < 0 ? (u += E, u < 0 && (u = 0)) : u > E && (u = E), c < 0 ? (c += E, c < 0 && (c = 0)) : c > E && (c = E), c < u && (c = u);
    const A = this.subarray(u, c);
    return Object.setPrototypeOf(A, s.prototype), A;
  };
  function ce(d, u, c) {
    if (d % 1 !== 0 || d < 0) throw new RangeError("offset is not uint");
    if (d + u > c) throw new RangeError("Trying to access beyond buffer length");
  }
  s.prototype.readUintLE = s.prototype.readUIntLE = function(u, c, E) {
    u = u >>> 0, c = c >>> 0, E || ce(u, c, this.length);
    let A = this[u], S = 1, P = 0;
    for (; ++P < c && (S *= 256); )
      A += this[u + P] * S;
    return A;
  }, s.prototype.readUintBE = s.prototype.readUIntBE = function(u, c, E) {
    u = u >>> 0, c = c >>> 0, E || ce(u, c, this.length);
    let A = this[u + --c], S = 1;
    for (; c > 0 && (S *= 256); )
      A += this[u + --c] * S;
    return A;
  }, s.prototype.readUint8 = s.prototype.readUInt8 = function(u, c) {
    return u = u >>> 0, c || ce(u, 1, this.length), this[u];
  }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(u, c) {
    return u = u >>> 0, c || ce(u, 2, this.length), this[u] | this[u + 1] << 8;
  }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(u, c) {
    return u = u >>> 0, c || ce(u, 2, this.length), this[u] << 8 | this[u + 1];
  }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(u, c) {
    return u = u >>> 0, c || ce(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216;
  }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(u, c) {
    return u = u >>> 0, c || ce(u, 4, this.length), this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]);
  }, s.prototype.readBigUInt64LE = I(function(u) {
    u = u >>> 0, dt(u, "offset");
    const c = this[u], E = this[u + 7];
    (c === void 0 || E === void 0) && Tt(u, this.length - 8);
    const A = c + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24, S = this[++u] + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + E * 2 ** 24;
    return BigInt(A) + (BigInt(S) << BigInt(32));
  }), s.prototype.readBigUInt64BE = I(function(u) {
    u = u >>> 0, dt(u, "offset");
    const c = this[u], E = this[u + 7];
    (c === void 0 || E === void 0) && Tt(u, this.length - 8);
    const A = c * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u], S = this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + E;
    return (BigInt(A) << BigInt(32)) + BigInt(S);
  }), s.prototype.readIntLE = function(u, c, E) {
    u = u >>> 0, c = c >>> 0, E || ce(u, c, this.length);
    let A = this[u], S = 1, P = 0;
    for (; ++P < c && (S *= 256); )
      A += this[u + P] * S;
    return S *= 128, A >= S && (A -= Math.pow(2, 8 * c)), A;
  }, s.prototype.readIntBE = function(u, c, E) {
    u = u >>> 0, c = c >>> 0, E || ce(u, c, this.length);
    let A = c, S = 1, P = this[u + --A];
    for (; A > 0 && (S *= 256); )
      P += this[u + --A] * S;
    return S *= 128, P >= S && (P -= Math.pow(2, 8 * c)), P;
  }, s.prototype.readInt8 = function(u, c) {
    return u = u >>> 0, c || ce(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u];
  }, s.prototype.readInt16LE = function(u, c) {
    u = u >>> 0, c || ce(u, 2, this.length);
    const E = this[u] | this[u + 1] << 8;
    return E & 32768 ? E | 4294901760 : E;
  }, s.prototype.readInt16BE = function(u, c) {
    u = u >>> 0, c || ce(u, 2, this.length);
    const E = this[u + 1] | this[u] << 8;
    return E & 32768 ? E | 4294901760 : E;
  }, s.prototype.readInt32LE = function(u, c) {
    return u = u >>> 0, c || ce(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24;
  }, s.prototype.readInt32BE = function(u, c) {
    return u = u >>> 0, c || ce(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3];
  }, s.prototype.readBigInt64LE = I(function(u) {
    u = u >>> 0, dt(u, "offset");
    const c = this[u], E = this[u + 7];
    (c === void 0 || E === void 0) && Tt(u, this.length - 8);
    const A = this[u + 4] + this[u + 5] * 2 ** 8 + this[u + 6] * 2 ** 16 + (E << 24);
    return (BigInt(A) << BigInt(32)) + BigInt(c + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24);
  }), s.prototype.readBigInt64BE = I(function(u) {
    u = u >>> 0, dt(u, "offset");
    const c = this[u], E = this[u + 7];
    (c === void 0 || E === void 0) && Tt(u, this.length - 8);
    const A = (c << 24) + // Overflow
    this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u];
    return (BigInt(A) << BigInt(32)) + BigInt(this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + E);
  }), s.prototype.readFloatLE = function(u, c) {
    return u = u >>> 0, c || ce(u, 4, this.length), n.read(this, u, !0, 23, 4);
  }, s.prototype.readFloatBE = function(u, c) {
    return u = u >>> 0, c || ce(u, 4, this.length), n.read(this, u, !1, 23, 4);
  }, s.prototype.readDoubleLE = function(u, c) {
    return u = u >>> 0, c || ce(u, 8, this.length), n.read(this, u, !0, 52, 8);
  }, s.prototype.readDoubleBE = function(u, c) {
    return u = u >>> 0, c || ce(u, 8, this.length), n.read(this, u, !1, 52, 8);
  };
  function X(d, u, c, E, A, S) {
    if (!s.isBuffer(d)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (u > A || u < S) throw new RangeError('"value" argument is out of bounds');
    if (c + E > d.length) throw new RangeError("Index out of range");
  }
  s.prototype.writeUintLE = s.prototype.writeUIntLE = function(u, c, E, A) {
    if (u = +u, c = c >>> 0, E = E >>> 0, !A) {
      const M = Math.pow(2, 8 * E) - 1;
      X(this, u, c, E, M, 0);
    }
    let S = 1, P = 0;
    for (this[c] = u & 255; ++P < E && (S *= 256); )
      this[c + P] = u / S & 255;
    return c + E;
  }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(u, c, E, A) {
    if (u = +u, c = c >>> 0, E = E >>> 0, !A) {
      const M = Math.pow(2, 8 * E) - 1;
      X(this, u, c, E, M, 0);
    }
    let S = E - 1, P = 1;
    for (this[c + S] = u & 255; --S >= 0 && (P *= 256); )
      this[c + S] = u / P & 255;
    return c + E;
  }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(u, c, E) {
    return u = +u, c = c >>> 0, E || X(this, u, c, 1, 255, 0), this[c] = u & 255, c + 1;
  }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(u, c, E) {
    return u = +u, c = c >>> 0, E || X(this, u, c, 2, 65535, 0), this[c] = u & 255, this[c + 1] = u >>> 8, c + 2;
  }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(u, c, E) {
    return u = +u, c = c >>> 0, E || X(this, u, c, 2, 65535, 0), this[c] = u >>> 8, this[c + 1] = u & 255, c + 2;
  }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(u, c, E) {
    return u = +u, c = c >>> 0, E || X(this, u, c, 4, 4294967295, 0), this[c + 3] = u >>> 24, this[c + 2] = u >>> 16, this[c + 1] = u >>> 8, this[c] = u & 255, c + 4;
  }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(u, c, E) {
    return u = +u, c = c >>> 0, E || X(this, u, c, 4, 4294967295, 0), this[c] = u >>> 24, this[c + 1] = u >>> 16, this[c + 2] = u >>> 8, this[c + 3] = u & 255, c + 4;
  };
  function ot(d, u, c, E, A) {
    pt(u, E, A, d, c, 7);
    let S = Number(u & BigInt(4294967295));
    d[c++] = S, S = S >> 8, d[c++] = S, S = S >> 8, d[c++] = S, S = S >> 8, d[c++] = S;
    let P = Number(u >> BigInt(32) & BigInt(4294967295));
    return d[c++] = P, P = P >> 8, d[c++] = P, P = P >> 8, d[c++] = P, P = P >> 8, d[c++] = P, c;
  }
  function xt(d, u, c, E, A) {
    pt(u, E, A, d, c, 7);
    let S = Number(u & BigInt(4294967295));
    d[c + 7] = S, S = S >> 8, d[c + 6] = S, S = S >> 8, d[c + 5] = S, S = S >> 8, d[c + 4] = S;
    let P = Number(u >> BigInt(32) & BigInt(4294967295));
    return d[c + 3] = P, P = P >> 8, d[c + 2] = P, P = P >> 8, d[c + 1] = P, P = P >> 8, d[c] = P, c + 8;
  }
  s.prototype.writeBigUInt64LE = I(function(u, c = 0) {
    return ot(this, u, c, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeBigUInt64BE = I(function(u, c = 0) {
    return xt(this, u, c, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeIntLE = function(u, c, E, A) {
    if (u = +u, c = c >>> 0, !A) {
      const V = Math.pow(2, 8 * E - 1);
      X(this, u, c, E, V - 1, -V);
    }
    let S = 0, P = 1, M = 0;
    for (this[c] = u & 255; ++S < E && (P *= 256); )
      u < 0 && M === 0 && this[c + S - 1] !== 0 && (M = 1), this[c + S] = (u / P >> 0) - M & 255;
    return c + E;
  }, s.prototype.writeIntBE = function(u, c, E, A) {
    if (u = +u, c = c >>> 0, !A) {
      const V = Math.pow(2, 8 * E - 1);
      X(this, u, c, E, V - 1, -V);
    }
    let S = E - 1, P = 1, M = 0;
    for (this[c + S] = u & 255; --S >= 0 && (P *= 256); )
      u < 0 && M === 0 && this[c + S + 1] !== 0 && (M = 1), this[c + S] = (u / P >> 0) - M & 255;
    return c + E;
  }, s.prototype.writeInt8 = function(u, c, E) {
    return u = +u, c = c >>> 0, E || X(this, u, c, 1, 127, -128), u < 0 && (u = 255 + u + 1), this[c] = u & 255, c + 1;
  }, s.prototype.writeInt16LE = function(u, c, E) {
    return u = +u, c = c >>> 0, E || X(this, u, c, 2, 32767, -32768), this[c] = u & 255, this[c + 1] = u >>> 8, c + 2;
  }, s.prototype.writeInt16BE = function(u, c, E) {
    return u = +u, c = c >>> 0, E || X(this, u, c, 2, 32767, -32768), this[c] = u >>> 8, this[c + 1] = u & 255, c + 2;
  }, s.prototype.writeInt32LE = function(u, c, E) {
    return u = +u, c = c >>> 0, E || X(this, u, c, 4, 2147483647, -2147483648), this[c] = u & 255, this[c + 1] = u >>> 8, this[c + 2] = u >>> 16, this[c + 3] = u >>> 24, c + 4;
  }, s.prototype.writeInt32BE = function(u, c, E) {
    return u = +u, c = c >>> 0, E || X(this, u, c, 4, 2147483647, -2147483648), u < 0 && (u = 4294967295 + u + 1), this[c] = u >>> 24, this[c + 1] = u >>> 16, this[c + 2] = u >>> 8, this[c + 3] = u & 255, c + 4;
  }, s.prototype.writeBigInt64LE = I(function(u, c = 0) {
    return ot(this, u, c, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), s.prototype.writeBigInt64BE = I(function(u, c = 0) {
    return xt(this, u, c, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function st(d, u, c, E, A, S) {
    if (c + E > d.length) throw new RangeError("Index out of range");
    if (c < 0) throw new RangeError("Index out of range");
  }
  function or(d, u, c, E, A) {
    return u = +u, c = c >>> 0, A || st(d, u, c, 4), n.write(d, u, c, E, 23, 4), c + 4;
  }
  s.prototype.writeFloatLE = function(u, c, E) {
    return or(this, u, c, !0, E);
  }, s.prototype.writeFloatBE = function(u, c, E) {
    return or(this, u, c, !1, E);
  };
  function bt(d, u, c, E, A) {
    return u = +u, c = c >>> 0, A || st(d, u, c, 8), n.write(d, u, c, E, 52, 8), c + 8;
  }
  s.prototype.writeDoubleLE = function(u, c, E) {
    return bt(this, u, c, !0, E);
  }, s.prototype.writeDoubleBE = function(u, c, E) {
    return bt(this, u, c, !1, E);
  }, s.prototype.copy = function(u, c, E, A) {
    if (!s.isBuffer(u)) throw new TypeError("argument should be a Buffer");
    if (E || (E = 0), !A && A !== 0 && (A = this.length), c >= u.length && (c = u.length), c || (c = 0), A > 0 && A < E && (A = E), A === E || u.length === 0 || this.length === 0) return 0;
    if (c < 0)
      throw new RangeError("targetStart out of bounds");
    if (E < 0 || E >= this.length) throw new RangeError("Index out of range");
    if (A < 0) throw new RangeError("sourceEnd out of bounds");
    A > this.length && (A = this.length), u.length - c < A - E && (A = u.length - c + E);
    const S = A - E;
    return this === u && typeof a.prototype.copyWithin == "function" ? this.copyWithin(c, E, A) : a.prototype.set.call(
      u,
      this.subarray(E, A),
      c
    ), S;
  }, s.prototype.fill = function(u, c, E, A) {
    if (typeof u == "string") {
      if (typeof c == "string" ? (A = c, c = 0, E = this.length) : typeof E == "string" && (A = E, E = this.length), A !== void 0 && typeof A != "string")
        throw new TypeError("encoding must be a string");
      if (typeof A == "string" && !s.isEncoding(A))
        throw new TypeError("Unknown encoding: " + A);
      if (u.length === 1) {
        const P = u.charCodeAt(0);
        (A === "utf8" && P < 128 || A === "latin1") && (u = P);
      }
    } else typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
    if (c < 0 || this.length < c || this.length < E)
      throw new RangeError("Out of range index");
    if (E <= c)
      return this;
    c = c >>> 0, E = E === void 0 ? this.length : E >>> 0, u || (u = 0);
    let S;
    if (typeof u == "number")
      for (S = c; S < E; ++S)
        this[S] = u;
    else {
      const P = s.isBuffer(u) ? u : s.from(u, A), M = P.length;
      if (M === 0)
        throw new TypeError('The value "' + u + '" is invalid for argument "value"');
      for (S = 0; S < E - c; ++S)
        this[S + c] = P[S % M];
    }
    return this;
  };
  const ht = {};
  function Ft(d, u, c) {
    ht[d] = class extends c {
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
  Ft(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(d) {
      return d ? `${d} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Ft(
    "ERR_INVALID_ARG_TYPE",
    function(d, u) {
      return `The "${d}" argument must be of type number. Received type ${typeof u}`;
    },
    TypeError
  ), Ft(
    "ERR_OUT_OF_RANGE",
    function(d, u, c) {
      let E = `The value of "${d}" is out of range.`, A = c;
      return Number.isInteger(c) && Math.abs(c) > 2 ** 32 ? A = at(String(c)) : typeof c == "bigint" && (A = String(c), (c > BigInt(2) ** BigInt(32) || c < -(BigInt(2) ** BigInt(32))) && (A = at(A)), A += "n"), E += ` It must be ${u}. Received ${A}`, E;
    },
    RangeError
  );
  function at(d) {
    let u = "", c = d.length;
    const E = d[0] === "-" ? 1 : 0;
    for (; c >= E + 4; c -= 3)
      u = `_${d.slice(c - 3, c)}${u}`;
    return `${d.slice(0, c)}${u}`;
  }
  function Ut(d, u, c) {
    dt(u, "offset"), (d[u] === void 0 || d[u + c] === void 0) && Tt(u, d.length - (c + 1));
  }
  function pt(d, u, c, E, A, S) {
    if (d > c || d < u) {
      const P = typeof u == "bigint" ? "n" : "";
      let M;
      throw u === 0 || u === BigInt(0) ? M = `>= 0${P} and < 2${P} ** ${(S + 1) * 8}${P}` : M = `>= -(2${P} ** ${(S + 1) * 8 - 1}${P}) and < 2 ** ${(S + 1) * 8 - 1}${P}`, new ht.ERR_OUT_OF_RANGE("value", M, d);
    }
    Ut(E, A, S);
  }
  function dt(d, u) {
    if (typeof d != "number")
      throw new ht.ERR_INVALID_ARG_TYPE(u, "number", d);
  }
  function Tt(d, u, c) {
    throw Math.floor(d) !== d ? (dt(d, c), new ht.ERR_OUT_OF_RANGE("offset", "an integer", d)) : u < 0 ? new ht.ERR_BUFFER_OUT_OF_BOUNDS() : new ht.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${u}`,
      d
    );
  }
  const _t = /[^+/0-9A-Za-z-_]/g;
  function Xt(d) {
    if (d = d.split("=")[0], d = d.trim().replace(_t, ""), d.length < 2) return "";
    for (; d.length % 4 !== 0; )
      d = d + "=";
    return d;
  }
  function Qe(d, u) {
    u = u || 1 / 0;
    let c;
    const E = d.length;
    let A = null;
    const S = [];
    for (let P = 0; P < E; ++P) {
      if (c = d.charCodeAt(P), c > 55295 && c < 57344) {
        if (!A) {
          if (c > 56319) {
            (u -= 3) > -1 && S.push(239, 191, 189);
            continue;
          } else if (P + 1 === E) {
            (u -= 3) > -1 && S.push(239, 191, 189);
            continue;
          }
          A = c;
          continue;
        }
        if (c < 56320) {
          (u -= 3) > -1 && S.push(239, 191, 189), A = c;
          continue;
        }
        c = (A - 55296 << 10 | c - 56320) + 65536;
      } else A && (u -= 3) > -1 && S.push(239, 191, 189);
      if (A = null, c < 128) {
        if ((u -= 1) < 0) break;
        S.push(c);
      } else if (c < 2048) {
        if ((u -= 2) < 0) break;
        S.push(
          c >> 6 | 192,
          c & 63 | 128
        );
      } else if (c < 65536) {
        if ((u -= 3) < 0) break;
        S.push(
          c >> 12 | 224,
          c >> 6 & 63 | 128,
          c & 63 | 128
        );
      } else if (c < 1114112) {
        if ((u -= 4) < 0) break;
        S.push(
          c >> 18 | 240,
          c >> 12 & 63 | 128,
          c >> 6 & 63 | 128,
          c & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return S;
  }
  function sr(d) {
    const u = [];
    for (let c = 0; c < d.length; ++c)
      u.push(d.charCodeAt(c) & 255);
    return u;
  }
  function ar(d, u) {
    let c, E, A;
    const S = [];
    for (let P = 0; P < d.length && !((u -= 2) < 0); ++P)
      c = d.charCodeAt(P), E = c >> 8, A = c % 256, S.push(A), S.push(E);
    return S;
  }
  function vr(d) {
    return e.toByteArray(Xt(d));
  }
  function z(d, u, c, E) {
    let A;
    for (A = 0; A < E && !(A + c >= u.length || A >= d.length); ++A)
      u[A + c] = d[A];
    return A;
  }
  function me(d, u) {
    return d instanceof u || d != null && d.constructor != null && d.constructor.name != null && d.constructor.name === u.name;
  }
  function w(d) {
    return d !== d;
  }
  const T = function() {
    const d = "0123456789abcdef", u = new Array(256);
    for (let c = 0; c < 16; ++c) {
      const E = c * 16;
      for (let A = 0; A < 16; ++A)
        u[E + A] = d[c] + d[A];
    }
    return u;
  }();
  function I(d) {
    return typeof BigInt > "u" ? R : d;
  }
  function R() {
    throw new Error("BigInt not supported");
  }
})($s);
const vl = $s.Buffer, gt = 100 * 1e3 * 1e3, bl = 32768, Tl = 9783072e5;
class _l {
  constructor(e) {
    console.info({ id: e });
  }
}
class Al {
  constructor() {
    this.debug = !1;
  }
  parse64Content(e) {
    const n = window.atob(e), i = n.length, o = new vl(i);
    for (let a = 0; a < i; a++)
      o[a] = n.charCodeAt(a);
    return this.parseBuffer(o);
  }
  parseBuffer(e) {
    if (e.toString("utf8", 0, 6) !== "bplist")
      throw new Error("Invalid binary plist. Expected 'bplist' at offset 0.");
    const o = e.slice(e.length - 32, e.length), a = o.readUInt8(6);
    this.debug && console.log("offsetSize: " + a);
    const l = o.readUInt8(7);
    this.debug && console.log("objectRefSize: " + l);
    const h = this.readUInt64BE(o, 8);
    this.debug && console.log("numObjects: " + h);
    const f = this.readUInt64BE(o, 16);
    this.debug && console.log("topObject: " + f);
    const p = this.readUInt64BE(o, 24);
    if (this.debug && console.log("offsetTableOffset: " + p), h > bl)
      throw new Error("maxObjectCount exceeded");
    const s = [];
    for (let m = 0; m < h; m++) {
      const v = e.slice(p + m * a, p + (m + 1) * a);
      s[m] = this.readUInt(v, 0), this.debug;
    }
    const g = (m) => {
      const v = s[m], b = e[v], y = (b & 240) >> 4, _ = b & 15, N = () => {
        switch (_) {
          case 0:
            return null;
          case 8:
            return !1;
          case 9:
            return !0;
          case 15:
            return null;
          default:
            throw new Error("Unhandled simple type 0x" + y.toString(16));
        }
      }, x = (U) => {
        let J = "", $;
        for ($ = 0; $ < U.length && U[$] === 0; $++)
          ;
        for (; $ < U.length; $++) {
          const K = "00" + U[$].toString(16);
          J += K.substr(K.length - 2);
        }
        return J;
      }, C = () => {
        const U = Math.pow(2, _);
        if (U > 4) {
          const J = e.slice(v + 1, v + 1 + U), $ = x(J);
          return fl($, 16);
        }
        if (U < gt)
          return this.readUInt(e.slice(v + 1, v + 1 + U));
        throw new Error(
          "Too little heap space available! Wanted to read " + U + " bytes, but only " + gt + " are available."
        );
      }, L = () => {
        const U = _ + 1;
        if (U < gt)
          return new _l(this.readUInt(e.slice(v + 1, v + 1 + U)));
        throw new Error(
          "To little heap space available! Wanted to read " + U + " bytes, but only " + gt + " are available."
        );
      }, k = () => {
        const U = Math.pow(2, _);
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
        _ !== 3 && console.error("Unknown date type :" + _ + ". Parsing anyway...");
        const U = e.slice(v + 1, v + 9);
        return new Date(Tl + 1e3 * U.readDoubleBE(0));
      }, B = () => {
        let U = 1, J = _;
        if (_ === 15) {
          const $ = e[v + 1], K = ($ & 240) / 16;
          K !== 1 && console.error("0x4: UNEXPECTED LENGTH-INT TYPE! " + K);
          const le = $ & 15, de = Math.pow(2, le);
          U = 2 + de, de < 3 ? J = this.readUInt(e.slice(v + 2, v + 2 + de)) : J = this.readUInt(e.slice(v + 2, v + 2 + de));
        }
        if (J < gt)
          return e.slice(v + U, v + U + J);
        throw new Error(
          "To little heap space available! Wanted to read " + J + " bytes, but only " + gt + " are available."
        );
      }, Z = (U) => {
        U = U || 0;
        let J = "utf8", $ = _, K = 1;
        if (_ === 15) {
          const le = e[v + 1], de = (le & 240) / 16;
          de !== 1 && console.error("UNEXPECTED LENGTH-INT TYPE! " + de);
          const oe = le & 15, pe = Math.pow(2, oe);
          K = 2 + pe, pe < 3 ? $ = this.readUInt(e.slice(v + 2, v + 2 + pe)) : $ = this.readUInt(e.slice(v + 2, v + 2 + pe));
        }
        if ($ *= U + 1, $ < gt) {
          let le = e.toString("utf8", v + K, v + K + $);
          return U && (le = this.swapBytes(le), J = "ucs2"), le.toString(J);
        } else
          throw new Error(
            "To little heap space available! Wanted to read " + $ + " bytes, but only " + gt + " are available."
          );
      }, H = () => {
        let U = _, J = 1;
        if (_ === 15) {
          const K = e[v + 1], le = (K & 240) / 16;
          le !== 1 && console.error("0xa: UNEXPECTED LENGTH-INT TYPE! " + le);
          const de = K & 15, oe = Math.pow(2, de);
          J = 2 + oe, oe < 3 ? U = this.readUInt(e.slice(v + 2, v + 2 + oe)) : U = this.readUInt(e.slice(v + 2, v + 2 + oe));
        }
        if (U * l > gt)
          throw new Error("To little heap space available!");
        const $ = [];
        for (let K = 0; K < U; K++) {
          const le = this.readUInt(
            e.slice(v + J + K * l, v + J + (K + 1) * l)
          );
          $[K] = g(le);
        }
        return $;
      }, ue = () => {
        let U = _, J = 1;
        if (_ === 15) {
          const K = e[v + 1], le = (K & 240) / 16;
          le !== 1 && console.error("0xD: UNEXPECTED LENGTH-INT TYPE! " + le);
          const de = K & 15, oe = Math.pow(2, de);
          J = 2 + oe, oe < 3 ? U = this.readUInt(e.slice(v + 2, v + 2 + oe)) : U = this.readUInt(e.slice(v + 2, v + 2 + oe));
        }
        if (U * 2 * l > gt)
          throw new Error("To little heap space available!");
        this.debug && console.log("Parsing dictionary #" + m);
        const $ = {};
        for (let K = 0; K < U; K++) {
          const le = this.readUInt(
            e.slice(v + J + K * l, v + J + (K + 1) * l)
          ), de = this.readUInt(
            e.slice(
              v + J + U * l + K * l,
              v + J + U * l + (K + 1) * l
            )
          ), oe = g(le), pe = g(de);
          this.debug && console.log("  DICT #" + m + ": Mapped " + oe + " to " + pe), $[oe] = pe;
        }
        return $;
      };
      switch (y) {
        case 0:
          return N();
        case 1:
          return C();
        case 8:
          return L();
        case 2:
          return k();
        case 3:
          return j();
        case 4:
          return B();
        case 5:
          return Z();
        case 6:
          return Z(!0);
        case 10:
          return H();
        case 13:
          return ue();
        default:
          throw new Error("Unhandled type 0x" + y.toString(16));
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
const Il = new Al(), St = {
  skipConfirmation: "X-Skip-Confirm-Navigation=1",
  sameWindow: "X-Target=_self"
}, Jt = {
  skipConfirmation: "X-Skip-Confirm-Navigation",
  sameWindow: "X-Target"
}, yo = {
  url: "",
  sameWindow: !1,
  skipConfirmation: !1
};
class lt {
  /**
   * Generates a URL file.
   */
  static generateURLFileContent(e, n, i = !1, o = !1) {
    let a = "";
    return e && e.indexOf("[InternetShortcut]") !== -1 && e.indexOf("URL=") !== -1 ? a = e.replace(new RegExp("URL=.*", "gm"), `URL=${Xe(n)}`) : a = `[InternetShortcut]\r
URL=${Xe(n)}`, !i && a.indexOf(St.sameWindow) !== -1 ? a = a.replace(St.sameWindow, "") : i && a.indexOf(St.sameWindow) === -1 && (a = `${a}\r
${St.sameWindow}`), !o && a.indexOf(St.skipConfirmation) !== -1 ? a = a.replace(St.skipConfirmation, "") : o && a.indexOf(St.skipConfirmation) === -1 && (a = `${a}\r
${St.skipConfirmation}`), a = a.replace(/\r\n\r\n/gm, `\r
`).trim(), `${a}\r
`;
  }
  /**
   * Parse a URL file.
   */
  static parseURLFile(e) {
    const n = { ...yo };
    if (e) {
      const i = e.match("URL=.*");
      if (i && Array.isArray(i) && i.length > 0) {
        const o = i[0];
        n.url = Xe(o.replace("URL=", ""));
      }
      e.indexOf(St.skipConfirmation) !== -1 && (n.skipConfirmation = !0), e.indexOf(St.sameWindow) !== -1 && (n.sameWindow = !0);
    }
    return n;
  }
  /**
   * Generates a webloc file.
   */
  static generateWeblocFileContent(e, n, i = !1, o = !1) {
    let a = "", l = !1;
    if (e) {
      const h = new window.DOMParser(), f = vo(e), p = h.parseFromString(f, "text/xml"), s = [...p.getElementsByTagName("dict"), ...p.getElementsByTagName("extra")];
      let g = !1, m = !1;
      if (s && s.length)
        for (const b of s) {
          const y = b.getElementsByTagName("key"), _ = b.getElementsByTagName("string");
          At(y) === "URL" && (qn(_, Xe(n)), l = !0), At(y) === Jt.sameWindow && At(_) === "_self" && (i ? qn(_, "_self") : p.getElementsByTagName("plist")[0].removeChild(b), m = !0), At(y) === Jt.skipConfirmation && At(_) === "1" && (o ? qn(_, "1") : p.getElementsByTagName("plist")[0].removeChild(b), g = !0);
        }
      if (i && !m) {
        const b = Eo(p, Jt.sameWindow, "_self");
        p.getElementsByTagName("plist")[0].appendChild(b);
      }
      if (o && !g) {
        const b = Eo(p, Jt.skipConfirmation, "1");
        p.getElementsByTagName("plist")[0].appendChild(b);
      }
      a = `<?xml version="1.0" encoding="UTF-8"?>
			${new window.XMLSerializer().serializeToString(p)}`, a.indexOf("parsererror") > -1 && (console.error("Parse error", a), a = ""), a = Nl(a);
    }
    return (!a || !l) && (a = `<?xml version="1.0" encoding="UTF-8"?>
				<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
				<plist version="1.0">
					<dict>
						<key>URL</key>
						<string>${Xe(n)}</string>
					</dict>`, i && (a = `${a}
				<extra>
					<key>${Jt.sameWindow}</key>
					<string>_self</string>
				</extra>`), o && (a = `${a}
				<extra>
					<key>${Jt.skipConfirmation}</key>
					<string>1</string>
				</extra>`), a = `${a}
			</plist>`), a = xl(a), a = a.replace(/(\n|\b)\t+/g, "$1").trim(), a = a.replace(/^\s*$(?:\r\n?|\n)/gm, "").trim(), a;
  }
  /**
   * Parse a webloc file.
   */
  static parseWeblocFile(e) {
    const n = { ...yo };
    if (e)
      if (e.substring(0, 6) === "bplist")
        try {
          const i = Il.parse64Content(window.btoa(e));
          i && i.length && i[0] && i[0].URL && (n.url = i[0].URL);
        } catch (i) {
          console.info(i);
        }
      else {
        const i = new window.DOMParser(), o = vo(e), a = i.parseFromString(o, "text/xml"), l = [...a.getElementsByTagName("dict"), ...a.getElementsByTagName("extra")];
        if (l && l.length)
          for (const h of l) {
            const f = h.getElementsByTagName("key"), p = h.getElementsByTagName("string");
            At(f) === "URL" && (n.url = Xe(At(p))), At(f) === Jt.sameWindow && At(p) === "_self" && (n.sameWindow = !0), At(f) === Jt.skipConfirmation && At(p) === "1" && (n.skipConfirmation = !0);
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
const At = (r) => r && r.length > 0 && r[0].childNodes && r[0].childNodes.length > 0 && r[0].childNodes[0] ? r[0].childNodes[0].nodeValue : "", qn = (r, e) => {
  r && r.length > 0 && r[0].childNodes && r[0].childNodes.length > 0 && r[0].childNodes[0] && (r[0].childNodes[0].nodeValue = e);
}, Eo = (r, e, n) => {
  const i = r.createElement("extra"), o = r.createElement("key");
  o.appendChild(r.createTextNode(e)), i.appendChild(o);
  const a = r.createElement("string");
  return a.appendChild(r.createTextNode(n)), i.appendChild(a), i;
}, Nl = (r) => r.replace(/></g, `>
<`), xl = (r) => r.replace(/<extra>/g, "<!-- <extra>").replace(/<\/extra>/g, "</extra> -->"), vo = (r) => r.replace(/<!-- <extra>/g, "<extra>").replace(/<\/extra> -->/g, "</extra>");
function Ol(r) {
  let e, n, i, o, a = (
    /*t*/
    r[1]("files_linkeditor", "View link") + ""
  ), l, h, f;
  return {
    c() {
      e = ne("div"), n = ne("a"), i = ne("span"), o = Ee(), l = Be(a), G(i, "class", "icon icon-link"), G(n, "href", "#/"), G(n, "class", "button"), G(n, "id", "downloadFile"), G(e, "class", "directDownload");
    },
    m(p, s) {
      he(p, e, s), Y(e, n), Y(n, i), Y(n, o), Y(n, l), h || (f = it(n, "click", zt(function() {
        vi(
          /*onClick*/
          r[0]
        ) && r[0].apply(this, arguments);
      })), h = !0);
    },
    p(p, [s]) {
      r = p;
    },
    i: Mt,
    o: Mt,
    d(p) {
      p && fe(e), h = !1, f();
    }
  };
}
function Sl(r, e, n) {
  let { onClick: i } = e;
  const o = window.t;
  return r.$$set = (a) => {
    "onClick" in a && n(0, i = a.onClick);
  }, [i, o];
}
class Rl extends Dr {
  constructor(e) {
    super(), $r(this, e, Sl, Ol, wr, { onClick: 0 });
  }
}
const fn = "application/internet-shortcut", Cl = [];
class er {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    var i, o, a, l, h, f, p, s;
    (o = (i = window.OCA.Files) == null ? void 0 : i.fileActions) == null || o.registerAction({
      name: "editLink",
      displayName: t("files_linkeditor", "Edit link"),
      mime: fn,
      actionHandler: async (g, m) => await er.loadAndChangeViewMode({ fileName: g, context: m, nextViewMode: "edit" }),
      permissions: window.OC.currentUser && window.OC.PERMISSION_UPDATE,
      iconClass: "icon-link"
    }), (l = (a = window.OCA.Files) == null ? void 0 : a.fileActions) == null || l.registerAction({
      name: "viewLink",
      displayName: t("files_linkeditor", "View link"),
      mime: fn,
      actionHandler: async (g, m) => {
        window.OC.currentUser ? await er.loadAndChangeViewMode({ fileName: g, context: m, nextViewMode: "view" }) : await er.loadAndChangeViewMode({
          fileName: g,
          context: m,
          nextViewMode: "view",
          downloadUrl: m.fileList.getDownloadUrl(g),
          publicUser: !0
        });
      },
      permissions: window.OC.PERMISSION_READ,
      iconClass: "icon-link"
    }), (f = (h = window.OCA.Files) == null ? void 0 : h.fileActions) == null || f.setDefault(fn, "viewLink"), (s = (p = window.OC.Plugins) == null ? void 0 : p.register) == null || s.call(p, "OCA.Files.NewFileMenu", {
      attach: function(g) {
        const m = g.fileList;
        if (m.id !== "files")
          return;
        const v = ({ id: b, displayName: y, templateName: _ }) => {
          g.addMenuEntry({
            id: b,
            displayName: y,
            templateName: _,
            iconClass: "icon-link",
            fileType: fn,
            actionHandler: function(N) {
              const x = m.getCurrentDirectory();
              ft.update(() => "edit"), Dt.update(
                () => Et.getFileConfig({
                  name: N,
                  dir: x,
                  isNew: !0,
                  onCreate: async (C) => {
                    await m.createFile(N, {
                      scrollTo: !1
                    });
                    const L = await Et.load({ fileName: N, dir: x });
                    await er.saveAndChangeViewMode({ ...C, fileModifiedTime: L.mtime });
                  }
                })
              );
            }
          });
        };
        v({
          id: "application-internet-shortcut",
          displayName: `${window.t("files_linkeditor", "New link")} (.URL)`,
          // TRANSLATORS default filename when creating a new link file from the files list, keep .URL at the end
          templateName: window.t("files_linkeditor", "Link.URL")
        }), v({
          id: "application-internet-shortcut-webloc",
          displayName: `${window.t("files_linkeditor", "New link")} (.webloc)`,
          // TRANSLATORS default filename when creating a new link file from the files list, keep .webloc at the end
          templateName: window.t("files_linkeditor", "Link.webloc")
        });
      }
    });
    const e = document.querySelectorAll(".directDownload");
    if (e && e.length > 0) {
      const g = (document.querySelector("input#filename") || { value: "" }).value;
      var n = lt.getExtension(g);
      if (n === "url" || n === "webloc") {
        const m = (document.querySelector("input#downloadURL") || { value: "" }).value;
        Cl.push(
          new Rl({
            anchor: document.querySelector(".directDownload"),
            target: document.querySelector(".directDownload").parentElement,
            props: {
              onClick: () => {
                er.loadAndChangeViewMode({
                  fileName: g,
                  nextViewMode: "view",
                  publicUser: !0,
                  downloadUrl: m
                });
              }
            }
          })
        );
      }
    }
  }
  static async loadAndChangeViewMode({ fileName: e, context: n, nextViewMode: i, publicUser: o, downloadUrl: a }) {
    const l = n ? encodeURI(n.fileList.linkTo() + "?path=" + n.dir) : window.location.href;
    ft.update(() => i), Dt.update(
      () => Et.getFileConfig({
        name: e,
        currentUrl: l,
        dir: n ? n.dir : "",
        isPublicLink: o
      })
    );
    let h = {};
    if (o ? h = await Et.loadPublic({ downloadUrl: a }) : h = await Et.load({ fileName: e, dir: n.dir }), h) {
      const f = lt.getExtension(e);
      let p = {};
      f === "webloc" ? p = lt.parseWeblocFile(h.filecontents) : p = lt.parseURLFile(h.filecontents), Dt.update(
        (s) => Et.getFileConfig({ ...s, ...p, fileModifiedTime: h.mtime, isLoaded: !0 })
      );
    } else
      window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async saveAndChangeViewMode({ name: e, dir: n, url: i, fileModifiedTime: o, sameWindow: a, skipConfirmation: l }) {
    const h = lt.getExtension(e);
    let f = "";
    h === "webloc" ? f = lt.generateWeblocFileContent("", i, a, l) : f = lt.generateURLFileContent("", i, a, l), await Et.save({ fileContent: f, name: e, dir: n, fileModifiedTime: o }), ft.update(() => "none");
  }
}
function bo(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "Link target URL") + ""
  ), i, o, a, l, h, f, p, s, g, m, v, b, y, _, N, x;
  return {
    c() {
      e = ne("label"), i = Be(n), o = Ee(), a = ne("br"), l = Ee(), h = ne("input"), f = Ee(), p = ne("input"), s = Ee(), g = ne("label"), g.textContent = `${/*t*/
      r[2]("files_linkeditor", "Open in same window")}`, m = Ee(), v = ne("input"), y = Ee(), _ = ne("label"), _.textContent = `${/*t*/
      r[2]("files_linkeditor", "Skip confirmation dialog before open (has to open in same window)")}`, G(h, "type", "text"), Ti(h, "width", "100%"), G(h, "class", "input-wide"), h.autofocus = !0, G(h, "data-cy", "url-input"), G(
        h,
        "placeholder",
        /*t*/
        r[2]("files_linkeditor", "e.g. https://example.org")
      ), G(p, "type", "checkbox"), G(p, "id", "linkeditor_sameWindow"), G(p, "class", "checkbox"), G(g, "for", "linkeditor_sameWindow"), G(g, "class", "space-top"), G(v, "type", "checkbox"), v.disabled = b = !/*file*/
      r[0].sameWindow, G(v, "id", "linkeditor_skipConfirmation"), G(v, "class", "checkbox"), G(_, "for", "linkeditor_skipConfirmation");
    },
    m(C, L) {
      he(C, e, L), Y(e, i), Y(e, o), Y(e, a), Y(e, l), Y(e, h), wn(
        h,
        /*file*/
        r[0].url
      ), he(C, f, L), he(C, p, L), p.checked = /*file*/
      r[0].sameWindow, he(C, s, L), he(C, g, L), he(C, m, L), he(C, v, L), v.checked = /*file*/
      r[0].skipConfirmation, he(C, y, L), he(C, _, L), h.focus(), N || (x = [
        it(
          h,
          "input",
          /*input0_input_handler*/
          r[5]
        ),
        it(
          p,
          "change",
          /*input1_change_handler*/
          r[6]
        ),
        it(
          v,
          "change",
          /*input2_change_handler*/
          r[7]
        )
      ], N = !0);
    },
    p(C, L) {
      L & /*file*/
      1 && h.value !== /*file*/
      C[0].url && wn(
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
      C && (fe(e), fe(f), fe(p), fe(s), fe(g), fe(m), fe(v), fe(y), fe(_)), N = !1, qt(x);
    }
  };
}
function To(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "Visit link") + ""
  ), i, o;
  return {
    c() {
      e = ne("a"), i = Be(n), G(e, "href", o = Xe(
        /*file*/
        r[0].url
      )), G(e, "target", "_blank"), G(e, "class", "button");
    },
    m(a, l) {
      he(a, e, l), Y(e, i);
    },
    p(a, l) {
      l & /*file*/
      1 && o !== (o = Xe(
        /*file*/
        a[0].url
      )) && G(e, "href", o);
    },
    d(a) {
      a && fe(e);
    }
  };
}
function _o(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "Save") + ""
  ), i, o, a;
  return {
    c() {
      e = ne("a"), i = Be(n), G(e, "href", window.location.href), G(e, "class", "primary button");
    },
    m(l, h) {
      he(l, e, h), Y(e, i), o || (a = it(e, "click", zt(
        /*save*/
        r[4]
      )), o = !0);
    },
    p: Mt,
    d(l) {
      l && fe(e), o = !1, a();
    }
  };
}
function Ll(r) {
  let e, n, i, o = (
    /*file*/
    r[0].name + ""
  ), a, l, h, f, p, s, g, m = (
    /*t*/
    r[2]("files_linkeditor", "Cancel") + ""
  ), v, b, y, _, N = !/*loading*/
  r[1] && bo(r), x = !/*loading*/
  r[1] && To(r), C = !/*loading*/
  r[1] && _o(r);
  return {
    c() {
      e = ne("form"), n = ne("div"), i = ne("h3"), a = Be(o), l = Ee(), N && N.c(), h = Ee(), f = ne("div"), x && x.c(), p = Ee(), s = ne("div"), g = ne("a"), v = Be(m), b = Ee(), C && C.c(), G(n, "class", "edit"), G(f, "class", "oc-dialog-buttonrow onebutton urlvisit"), G(g, "href", window.location.href), G(g, "class", "cancel button"), G(s, "class", "oc-dialog-buttonrow twobuttons"), G(
        e,
        "action",
        /*OC*/
        r[3].generateUrl("/")
      ), G(e, "method", "post");
    },
    m(L, k) {
      he(L, e, k), Y(e, n), Y(n, i), Y(i, a), Y(n, l), N && N.m(n, null), Y(e, h), Y(e, f), x && x.m(f, null), Y(e, p), Y(e, s), Y(s, g), Y(g, v), Y(s, b), C && C.m(s, null), y || (_ = [
        it(g, "click", zt(
          /*click_handler*/
          r[8]
        )),
        it(e, "submit", zt(
          /*save*/
          r[4]
        ))
      ], y = !0);
    },
    p(L, k) {
      k & /*file*/
      1 && o !== (o = /*file*/
      L[0].name + "") && bi(a, o), /*loading*/
      L[1] ? N && (N.d(1), N = null) : N ? N.p(L, k) : (N = bo(L), N.c(), N.m(n, null)), /*loading*/
      L[1] ? x && (x.d(1), x = null) : x ? x.p(L, k) : (x = To(L), x.c(), x.m(f, null)), /*loading*/
      L[1] ? C && (C.d(1), C = null) : C ? C.p(L, k) : (C = _o(L), C.c(), C.m(s, null));
    },
    d(L) {
      L && fe(e), N && N.d(), x && x.d(), C && C.d(), y = !1, qt(_);
    }
  };
}
function Pl(r) {
  let e, n;
  return e = new _i({
    props: {
      loading: (
        /*loading*/
        r[1]
      ),
      $$slots: { default: [Ll] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      kr(e.$$.fragment);
    },
    m(i, o) {
      yr(e, i, o), n = !0;
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
      ct(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Er(e, i);
    }
  };
}
function kl(r, e, n) {
  let i, o;
  const a = window.t, l = window.OC;
  let h;
  In(() => {
    h = Dt.subscribe((v) => {
      n(0, i = v), i && (i.isLoaded || i.isNew) && n(1, o = !1);
    });
  }), Nn(() => {
    h();
  });
  const f = () => {
    n(1, o = !0), i.isNew && i.onCreate ? i.onCreate({ ...i }) : er.saveAndChangeViewMode({ ...i });
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
    ft.update(() => "none");
  };
  return n(0, i = Et.getFileConfig()), n(1, o = !0), [
    i,
    o,
    a,
    l,
    f,
    p,
    s,
    g,
    m
  ];
}
class $l extends Dr {
  constructor(e) {
    super(), $r(this, e, kl, Pl, wr, {});
  }
}
/*!
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
function Oi() {
  return xs("files_sharing", "isPublic", null) ?? document.querySelector('input#isPublic[type="hidden"][name="isPublic"][value="1"]') !== null;
}
function Dl() {
  var r;
  return xs("files_sharing", "sharingToken", null) ?? ((r = document.querySelector('input#sharingToken[type="hidden"]')) == null ? void 0 : r.value) ?? null;
}
/*! For license information please see index.js.LICENSE.txt */
var Ml = { 2: (r) => {
  function e(o, a, l) {
    o instanceof RegExp && (o = n(o, l)), a instanceof RegExp && (a = n(a, l));
    var h = i(o, a, l);
    return h && { start: h[0], end: h[1], pre: l.slice(0, h[0]), body: l.slice(h[0] + o.length, h[1]), post: l.slice(h[1] + a.length) };
  }
  function n(o, a) {
    var l = a.match(o);
    return l ? l[0] : null;
  }
  function i(o, a, l) {
    var h, f, p, s, g, m = l.indexOf(o), v = l.indexOf(a, m + 1), b = m;
    if (m >= 0 && v > 0) {
      for (h = [], p = l.length; b >= 0 && !g; ) b == m ? (h.push(b), m = l.indexOf(o, b + 1)) : h.length == 1 ? g = [h.pop(), v] : ((f = h.pop()) < p && (p = f, s = v), v = l.indexOf(a, b + 1)), b = m < v && m >= 0 ? m : v;
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
  var l = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, h = {};
  function f(p) {
    return l.exec(p).slice(1);
  }
  h.resolve = function() {
    for (var p = "", s = !1, g = arguments.length - 1; g >= -1 && !s; g--) {
      var m = g >= 0 ? arguments[g] : Nt.cwd();
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
    function g(x) {
      for (var C = 0; C < x.length && x[C] === ""; C++) ;
      for (var L = x.length - 1; L >= 0 && x[L] === ""; L--) ;
      return C > L ? [] : x.slice(C, L + 1);
    }
    p = h.resolve(p).substr(1), s = h.resolve(s).substr(1);
    for (var m = g(p.split("/")), v = g(s.split("/")), b = Math.min(m.length, v.length), y = b, _ = 0; _ < b; _++) if (m[_] !== v[_]) {
      y = _;
      break;
    }
    var N = [];
    for (_ = y; _ < m.length; _++) N.push("..");
    return (N = N.concat(v.slice(y))).join("/");
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
    var o = (r && r.exports, typeof nn == "object" && nn);
    o.global !== o && o.window;
    var a = function(s) {
      this.message = s;
    };
    (a.prototype = new Error()).name = "InvalidCharacterError";
    var l = function(s) {
      throw new a(s);
    }, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f = /[\t\n\f\r ]/g, p = { encode: function(s) {
      s = String(s), /[^\0-\xFF]/.test(s) && l("The string to be encoded contains characters outside of the Latin1 range.");
      for (var g, m, v, b, y = s.length % 3, _ = "", N = -1, x = s.length - y; ++N < x; ) g = s.charCodeAt(N) << 16, m = s.charCodeAt(++N) << 8, v = s.charCodeAt(++N), _ += h.charAt((b = g + m + v) >> 18 & 63) + h.charAt(b >> 12 & 63) + h.charAt(b >> 6 & 63) + h.charAt(63 & b);
      return y == 2 ? (g = s.charCodeAt(N) << 8, m = s.charCodeAt(++N), _ += h.charAt((b = g + m) >> 10) + h.charAt(b >> 4 & 63) + h.charAt(b << 2 & 63) + "=") : y == 1 && (b = s.charCodeAt(N), _ += h.charAt(b >> 2) + h.charAt(b << 4 & 63) + "=="), _;
    }, decode: function(s) {
      var g = (s = String(s).replace(f, "")).length;
      g % 4 == 0 && (g = (s = s.replace(/==?$/, "")).length), (g % 4 == 1 || /[^+a-zA-Z0-9/]/.test(s)) && l("Invalid character: the string to be decoded is not correctly encoded.");
      for (var m, v, b = 0, y = "", _ = -1; ++_ < g; ) v = h.indexOf(s.charAt(_)), m = b % 4 ? 64 * m + v : v, b++ % 4 && (y += String.fromCharCode(255 & m >> (-2 * b & 6)));
      return y;
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
  r.exports = function(N) {
    return N ? (N.substr(0, 2) === "{}" && (N = "\\{\\}" + N.substr(2)), _(function(x) {
      return x.split("\\\\").join(o).split("\\{").join(a).split("\\}").join(l).split("\\,").join(h).split("\\.").join(f);
    }(N), !0).map(s)) : [];
  };
  var o = "\0SLASH" + Math.random() + "\0", a = "\0OPEN" + Math.random() + "\0", l = "\0CLOSE" + Math.random() + "\0", h = "\0COMMA" + Math.random() + "\0", f = "\0PERIOD" + Math.random() + "\0";
  function p(N) {
    return parseInt(N, 10) == N ? parseInt(N, 10) : N.charCodeAt(0);
  }
  function s(N) {
    return N.split(o).join("\\").split(a).join("{").split(l).join("}").split(h).join(",").split(f).join(".");
  }
  function g(N) {
    if (!N) return [""];
    var x = [], C = i("{", "}", N);
    if (!C) return N.split(",");
    var L = C.pre, k = C.body, j = C.post, B = L.split(",");
    B[B.length - 1] += "{" + k + "}";
    var Z = g(j);
    return j.length && (B[B.length - 1] += Z.shift(), B.push.apply(B, Z)), x.push.apply(x, B), x;
  }
  function m(N) {
    return "{" + N + "}";
  }
  function v(N) {
    return /^-?0\d/.test(N);
  }
  function b(N, x) {
    return N <= x;
  }
  function y(N, x) {
    return N >= x;
  }
  function _(N, x) {
    var C = [], L = i("{", "}", N);
    if (!L) return [N];
    var k = L.pre, j = L.post.length ? _(L.post, !1) : [""];
    if (/\$$/.test(L.pre)) for (var B = 0; B < j.length; B++) {
      var Z = k + "{" + L.body + "}" + j[B];
      C.push(Z);
    }
    else {
      var H, ue, U = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(L.body), J = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(L.body), $ = U || J, K = L.body.indexOf(",") >= 0;
      if (!$ && !K) return L.post.match(/,(?!,).*\}/) ? _(N = L.pre + "{" + L.body + l + L.post) : [N];
      if ($) H = L.body.split(/\.\./);
      else if ((H = g(L.body)).length === 1 && (H = _(H[0], !1).map(m)).length === 1) return j.map(function(ot) {
        return L.pre + H[0] + ot;
      });
      if ($) {
        var le = p(H[0]), de = p(H[1]), oe = Math.max(H[0].length, H[1].length), pe = H.length == 3 ? Math.abs(p(H[2])) : 1, $e = b;
        de < le && (pe *= -1, $e = y);
        var De = H.some(v);
        ue = [];
        for (var se = le; $e(se, de); se += pe) {
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
        for (var X = 0; X < H.length; X++) ue.push.apply(ue, _(H[X], !1));
      }
      for (X = 0; X < ue.length; X++) for (B = 0; B < j.length; B++) Z = k + ue[X] + j[B], (!x || $ || Z) && C.push(Z);
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
    for (var o = [], a = 0; a < i.length; a += 3) for (var l = i[a] << 16 | i[a + 1] << 8 | i[a + 2], h = 0; h < 4; h++) 8 * a + 6 * h <= 8 * i.length ? o.push(e.charAt(l >>> 6 * (3 - h) & 63)) : o.push("=");
    return o.join("");
  }, base64ToBytes: function(i) {
    i = i.replace(/[^A-Z0-9+\/]/gi, "");
    for (var o = [], a = 0, l = 0; a < i.length; l = ++a % 4) l != 0 && o.push((e.indexOf(i.charAt(a - 1)) & Math.pow(2, -2 * l + 8) - 1) << 2 * l | e.indexOf(i.charAt(a)) >>> 6 - 2 * l);
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
    var i = n(298), o = n(526).utf8, a = n(135), l = n(526).bin, h = function(f, p) {
      f.constructor == String ? f = p && p.encoding === "binary" ? l.stringToBytes(f) : o.stringToBytes(f) : a(f) ? f = Array.prototype.slice.call(f, 0) : Array.isArray(f) || f.constructor === Uint8Array || (f = f.toString());
      for (var s = i.bytesToWords(f), g = 8 * f.length, m = 1732584193, v = -271733879, b = -1732584194, y = 271733878, _ = 0; _ < s.length; _++) s[_] = 16711935 & (s[_] << 8 | s[_] >>> 24) | 4278255360 & (s[_] << 24 | s[_] >>> 8);
      s[g >>> 5] |= 128 << g % 32, s[14 + (g + 64 >>> 9 << 4)] = g;
      var N = h._ff, x = h._gg, C = h._hh, L = h._ii;
      for (_ = 0; _ < s.length; _ += 16) {
        var k = m, j = v, B = b, Z = y;
        m = N(m, v, b, y, s[_ + 0], 7, -680876936), y = N(y, m, v, b, s[_ + 1], 12, -389564586), b = N(b, y, m, v, s[_ + 2], 17, 606105819), v = N(v, b, y, m, s[_ + 3], 22, -1044525330), m = N(m, v, b, y, s[_ + 4], 7, -176418897), y = N(y, m, v, b, s[_ + 5], 12, 1200080426), b = N(b, y, m, v, s[_ + 6], 17, -1473231341), v = N(v, b, y, m, s[_ + 7], 22, -45705983), m = N(m, v, b, y, s[_ + 8], 7, 1770035416), y = N(y, m, v, b, s[_ + 9], 12, -1958414417), b = N(b, y, m, v, s[_ + 10], 17, -42063), v = N(v, b, y, m, s[_ + 11], 22, -1990404162), m = N(m, v, b, y, s[_ + 12], 7, 1804603682), y = N(y, m, v, b, s[_ + 13], 12, -40341101), b = N(b, y, m, v, s[_ + 14], 17, -1502002290), m = x(m, v = N(v, b, y, m, s[_ + 15], 22, 1236535329), b, y, s[_ + 1], 5, -165796510), y = x(y, m, v, b, s[_ + 6], 9, -1069501632), b = x(b, y, m, v, s[_ + 11], 14, 643717713), v = x(v, b, y, m, s[_ + 0], 20, -373897302), m = x(m, v, b, y, s[_ + 5], 5, -701558691), y = x(y, m, v, b, s[_ + 10], 9, 38016083), b = x(b, y, m, v, s[_ + 15], 14, -660478335), v = x(v, b, y, m, s[_ + 4], 20, -405537848), m = x(m, v, b, y, s[_ + 9], 5, 568446438), y = x(y, m, v, b, s[_ + 14], 9, -1019803690), b = x(b, y, m, v, s[_ + 3], 14, -187363961), v = x(v, b, y, m, s[_ + 8], 20, 1163531501), m = x(m, v, b, y, s[_ + 13], 5, -1444681467), y = x(y, m, v, b, s[_ + 2], 9, -51403784), b = x(b, y, m, v, s[_ + 7], 14, 1735328473), m = C(m, v = x(v, b, y, m, s[_ + 12], 20, -1926607734), b, y, s[_ + 5], 4, -378558), y = C(y, m, v, b, s[_ + 8], 11, -2022574463), b = C(b, y, m, v, s[_ + 11], 16, 1839030562), v = C(v, b, y, m, s[_ + 14], 23, -35309556), m = C(m, v, b, y, s[_ + 1], 4, -1530992060), y = C(y, m, v, b, s[_ + 4], 11, 1272893353), b = C(b, y, m, v, s[_ + 7], 16, -155497632), v = C(v, b, y, m, s[_ + 10], 23, -1094730640), m = C(m, v, b, y, s[_ + 13], 4, 681279174), y = C(y, m, v, b, s[_ + 0], 11, -358537222), b = C(b, y, m, v, s[_ + 3], 16, -722521979), v = C(v, b, y, m, s[_ + 6], 23, 76029189), m = C(m, v, b, y, s[_ + 9], 4, -640364487), y = C(y, m, v, b, s[_ + 12], 11, -421815835), b = C(b, y, m, v, s[_ + 15], 16, 530742520), m = L(m, v = C(v, b, y, m, s[_ + 2], 23, -995338651), b, y, s[_ + 0], 6, -198630844), y = L(y, m, v, b, s[_ + 7], 10, 1126891415), b = L(b, y, m, v, s[_ + 14], 15, -1416354905), v = L(v, b, y, m, s[_ + 5], 21, -57434055), m = L(m, v, b, y, s[_ + 12], 6, 1700485571), y = L(y, m, v, b, s[_ + 3], 10, -1894986606), b = L(b, y, m, v, s[_ + 10], 15, -1051523), v = L(v, b, y, m, s[_ + 1], 21, -2054922799), m = L(m, v, b, y, s[_ + 8], 6, 1873313359), y = L(y, m, v, b, s[_ + 15], 10, -30611744), b = L(b, y, m, v, s[_ + 6], 15, -1560198380), v = L(v, b, y, m, s[_ + 13], 21, 1309151649), m = L(m, v, b, y, s[_ + 4], 6, -145523070), y = L(y, m, v, b, s[_ + 11], 10, -1120210379), b = L(b, y, m, v, s[_ + 2], 15, 718787259), v = L(v, b, y, m, s[_ + 9], 21, -343485551), m = m + k >>> 0, v = v + j >>> 0, b = b + B >>> 0, y = y + Z >>> 0;
      }
      return i.endian([m, v, b, y]);
    };
    h._ff = function(f, p, s, g, m, v, b) {
      var y = f + (p & s | ~p & g) + (m >>> 0) + b;
      return (y << v | y >>> 32 - v) + p;
    }, h._gg = function(f, p, s, g, m, v, b) {
      var y = f + (p & g | s & ~g) + (m >>> 0) + b;
      return (y << v | y >>> 32 - v) + p;
    }, h._hh = function(f, p, s, g, m, v, b) {
      var y = f + (p ^ s ^ g) + (m >>> 0) + b;
      return (y << v | y >>> 32 - v) + p;
    }, h._ii = function(f, p, s, g, m, v, b) {
      var y = f + (s ^ (p | ~g)) + (m >>> 0) + b;
      return (y << v | y >>> 32 - v) + p;
    }, h._blocksize = 16, h._digestsize = 16, r.exports = function(f, p) {
      if (f == null) throw new Error("Illegal argument " + f);
      var s = i.wordsToBytes(h(f, p));
      return p && p.asBytes ? s : p && p.asString ? l.bytesToString(s) : i.bytesToHex(s);
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
  e.stringify = function(a, l) {
    l = l || "";
    var h, f, p = [];
    for (f in typeof l != "string" && (l = "?"), a) if (n.call(a, f)) {
      if ((h = a[f]) || h != null && !isNaN(h) || (h = ""), f = o(f), h = o(h), f === null || h === null) continue;
      p.push(f + "=" + h);
    }
    return p.length ? l + p.join("&") : "";
  }, e.parse = function(a) {
    for (var l, h = /([^=?#&]+)=?([^&]*)/g, f = {}; l = h.exec(a); ) {
      var p = i(l[1]), s = i(l[2]);
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
  var i = n(670), o = n(647), a = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, l = /[\n\r\t]/g, h = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, f = /:\d+$/, p = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, s = /^[a-zA-Z]:/;
  function g(x) {
    return (x || "").toString().replace(a, "");
  }
  var m = [["#", "hash"], ["?", "query"], function(x, C) {
    return y(C.protocol) ? x.replace(/\\/g, "/") : x;
  }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]], v = { hash: 1, query: 1 };
  function b(x) {
    var C, L = (typeof window < "u" ? window : typeof nn < "u" ? nn : typeof self < "u" ? self : {}).location || {}, k = {}, j = typeof (x = x || L);
    if (x.protocol === "blob:") k = new N(unescape(x.pathname), {});
    else if (j === "string") for (C in k = new N(x, {}), v) delete k[C];
    else if (j === "object") {
      for (C in x) C in v || (k[C] = x[C]);
      k.slashes === void 0 && (k.slashes = h.test(x.href));
    }
    return k;
  }
  function y(x) {
    return x === "file:" || x === "ftp:" || x === "http:" || x === "https:" || x === "ws:" || x === "wss:";
  }
  function _(x, C) {
    x = (x = g(x)).replace(l, ""), C = C || {};
    var L, k = p.exec(x), j = k[1] ? k[1].toLowerCase() : "", B = !!k[2], Z = !!k[3], H = 0;
    return B ? Z ? (L = k[2] + k[3] + k[4], H = k[2].length + k[3].length) : (L = k[2] + k[4], H = k[2].length) : Z ? (L = k[3] + k[4], H = k[3].length) : L = k[4], j === "file:" ? H >= 2 && (L = L.slice(2)) : y(j) ? L = k[4] : j ? B && (L = L.slice(2)) : H >= 2 && y(C.protocol) && (L = k[4]), { protocol: j, slashes: B || y(j), slashesCount: H, rest: L };
  }
  function N(x, C, L) {
    if (x = (x = g(x)).replace(l, ""), !(this instanceof N)) return new N(x, C, L);
    var k, j, B, Z, H, ue, U = m.slice(), J = typeof C, $ = this, K = 0;
    for (J !== "object" && J !== "string" && (L = C, C = null), L && typeof L != "function" && (L = o.parse), k = !(j = _(x || "", C = b(C))).protocol && !j.slashes, $.slashes = j.slashes || k && C.slashes, $.protocol = j.protocol || C.protocol || "", x = j.rest, (j.protocol === "file:" && (j.slashesCount !== 2 || s.test(x)) || !j.slashes && (j.protocol || j.slashesCount < 2 || !y($.protocol))) && (U[3] = [/(.*)/, "pathname"]); K < U.length; K++) typeof (Z = U[K]) != "function" ? (B = Z[0], ue = Z[1], B != B ? $[ue] = x : typeof B == "string" ? ~(H = B === "@" ? x.lastIndexOf(B) : x.indexOf(B)) && (typeof Z[2] == "number" ? ($[ue] = x.slice(0, H), x = x.slice(H + Z[2])) : ($[ue] = x.slice(H), x = x.slice(0, H))) : (H = B.exec(x)) && ($[ue] = H[1], x = x.slice(0, H.index)), $[ue] = $[ue] || k && Z[3] && C[ue] || "", Z[4] && ($[ue] = $[ue].toLowerCase())) : x = Z(x, $);
    L && ($.query = L($.query)), k && C.slashes && $.pathname.charAt(0) !== "/" && ($.pathname !== "" || C.pathname !== "") && ($.pathname = function(le, de) {
      if (le === "") return de;
      for (var oe = (de || "/").split("/").slice(0, -1).concat(le.split("/")), pe = oe.length, $e = oe[pe - 1], De = !1, se = 0; pe--; ) oe[pe] === "." ? oe.splice(pe, 1) : oe[pe] === ".." ? (oe.splice(pe, 1), se++) : se && (pe === 0 && (De = !0), oe.splice(pe, 1), se--);
      return De && oe.unshift(""), $e !== "." && $e !== ".." || oe.push(""), oe.join("/");
    }($.pathname, C.pathname)), $.pathname.charAt(0) !== "/" && y($.protocol) && ($.pathname = "/" + $.pathname), i($.port, $.protocol) || ($.host = $.hostname, $.port = ""), $.username = $.password = "", $.auth && (~(H = $.auth.indexOf(":")) ? ($.username = $.auth.slice(0, H), $.username = encodeURIComponent(decodeURIComponent($.username)), $.password = $.auth.slice(H + 1), $.password = encodeURIComponent(decodeURIComponent($.password))) : $.username = encodeURIComponent(decodeURIComponent($.auth)), $.auth = $.password ? $.username + ":" + $.password : $.username), $.origin = $.protocol !== "file:" && y($.protocol) && $.host ? $.protocol + "//" + $.host : "null", $.href = $.toString();
  }
  N.prototype = { set: function(x, C, L) {
    var k = this;
    switch (x) {
      case "query":
        typeof C == "string" && C.length && (C = (L || o.parse)(C)), k[x] = C;
        break;
      case "port":
        k[x] = C, i(C, k.protocol) ? C && (k.host = k.hostname + ":" + C) : (k.host = k.hostname, k[x] = "");
        break;
      case "hostname":
        k[x] = C, k.port && (C += ":" + k.port), k.host = C;
        break;
      case "host":
        k[x] = C, f.test(C) ? (C = C.split(":"), k.port = C.pop(), k.hostname = C.join(":")) : (k.hostname = C, k.port = "");
        break;
      case "protocol":
        k.protocol = C.toLowerCase(), k.slashes = !L;
        break;
      case "pathname":
      case "hash":
        if (C) {
          var j = x === "pathname" ? "/" : "#";
          k[x] = C.charAt(0) !== j ? j + C : C;
        } else k[x] = C;
        break;
      case "username":
      case "password":
        k[x] = encodeURIComponent(C);
        break;
      case "auth":
        var B = C.indexOf(":");
        ~B ? (k.username = C.slice(0, B), k.username = encodeURIComponent(decodeURIComponent(k.username)), k.password = C.slice(B + 1), k.password = encodeURIComponent(decodeURIComponent(k.password))) : k.username = encodeURIComponent(decodeURIComponent(C));
    }
    for (var Z = 0; Z < m.length; Z++) {
      var H = m[Z];
      H[4] && (k[H[1]] = k[H[1]].toLowerCase());
    }
    return k.auth = k.password ? k.username + ":" + k.password : k.username, k.origin = k.protocol !== "file:" && y(k.protocol) && k.host ? k.protocol + "//" + k.host : "null", k.href = k.toString(), k;
  }, toString: function(x) {
    x && typeof x == "function" || (x = o.stringify);
    var C, L = this, k = L.host, j = L.protocol;
    j && j.charAt(j.length - 1) !== ":" && (j += ":");
    var B = j + (L.protocol && L.slashes || y(L.protocol) ? "//" : "");
    return L.username ? (B += L.username, L.password && (B += ":" + L.password), B += "@") : L.password ? (B += ":" + L.password, B += "@") : L.protocol !== "file:" && y(L.protocol) && !k && L.pathname !== "/" && (B += "@"), (k[k.length - 1] === ":" || f.test(L.hostname) && !L.port) && (k += ":"), B += k + L.pathname, (C = typeof L.query == "object" ? x(L.query) : L.query) && (B += C.charAt(0) !== "?" ? "?" + C : C), L.hash && (B += L.hash), B;
  } }, N.extractProtocol = _, N.location = b, N.trimLeft = g, N.qs = o, r.exports = N;
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
      var y = [null];
      y.push.apply(y, v);
      var _ = new (Function.bind.apply(m, y))();
      return b && o(_, b.prototype), _;
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
  var l = function(p) {
    function s(g) {
      var m;
      return function(v, b) {
        if (!(v instanceof b)) throw new TypeError("Cannot call a class as a function");
      }(this, s), (m = function(v, b) {
        return !b || e(b) !== "object" && typeof b != "function" ? function(y) {
          if (y === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return y;
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
    }, m = s.split("."), v = m.length, b = function(N) {
      var x = m[N];
      if (!p) return { v: void 0 };
      if (x === "+") {
        if (Array.isArray(p)) return { v: p.map(function(L, k) {
          var j = m.slice(N + 1);
          return j.length > 0 ? h(L, j.join("."), g) : g(p, k, m, N);
        }) };
        var C = m.slice(0, N).join(".");
        throw new Error("Object at wildcard (".concat(C, ") is not an array"));
      }
      p = g(p, x, m, N);
    }, y = 0; y < v; y++) {
      var _ = b(y);
      if (e(_) === "object") return _.v;
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
      return h(p, s, function(m, v, b, y) {
        if (m === Reflect.getPrototypeOf({})) throw new l("Attempting to mutate Object.prototype");
        if (!m[v]) {
          var _ = Number.isInteger(Number(b[y + 1])), N = b[y + 1] === "+";
          m[v] = _ || N ? [] : {};
        }
        return f(b, y) && (m[v] = g), m[v];
      });
    } catch (m) {
      if (m instanceof l) throw m;
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
      return h(p, s, function(v, b, y, _) {
        if (!f(y, _)) return v && v[b];
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
      return h(p, s, function(y, _, N, x) {
        return v = v || y === g || !!y && y[_] === g, b = f(N, x) && e(y) === "object" && _ in y, y && y[_];
      }), m.validPath ? v && b : v;
    } catch {
      return !1;
    }
  }, ObjectPrototypeMutationError: l };
} }, Ao = {};
function ge(r) {
  var e = Ao[r];
  if (e !== void 0) return e.exports;
  var n = Ao[r] = { id: r, loaded: !1, exports: {} };
  return Ml[r].call(n.exports, n, n.exports, ge), n.loaded = !0, n.exports;
}
ge.n = (r) => {
  var e = r && r.__esModule ? () => r.default : () => r;
  return ge.d(e, { a: e }), e;
}, ge.d = (r, e) => {
  for (var n in e) ge.o(e, n) && !ge.o(r, n) && Object.defineProperty(r, n, { enumerable: !0, get: e[n] });
}, ge.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e), ge.nmd = (r) => (r.paths = [], r.children || (r.children = []), r);
var Fl = ge(737), Ul = ge.n(Fl);
function Hn(r) {
  if (!hi(r)) throw new Error("Parameter was not an error");
}
function hi(r) {
  return !!r && typeof r == "object" && (e = r, Object.prototype.toString.call(e) === "[object Error]") || r instanceof Error;
  var e;
}
class Ze extends Error {
  constructor(e, n) {
    const i = [...arguments], { options: o, shortMessage: a } = function(h) {
      let f, p = "";
      if (h.length === 0) f = {};
      else if (hi(h[0])) f = { cause: h[0] }, p = h.slice(1).join(" ") || "";
      else if (h[0] && typeof h[0] == "object") f = Object.assign({}, h[0]), p = h.slice(1).join(" ") || "";
      else {
        if (typeof h[0] != "string") throw new Error("Invalid arguments passed to Layerr");
        f = {}, p = p = h.join(" ") || "";
      }
      return { options: f, shortMessage: p };
    }(i);
    let l = a;
    if (o.cause && (l = `${l}: ${o.cause.message}`), super(l), this.message = l, o.name && typeof o.name == "string" ? this.name = o.name : this.name = "Layerr", o.cause && Object.defineProperty(this, "_cause", { value: o.cause }), Object.defineProperty(this, "_info", { value: {} }), o.info && typeof o.info == "object" && Object.assign(this._info, o.info), Error.captureStackTrace) {
      const h = o.constructorOpt || this.constructor;
      Error.captureStackTrace(this, h);
    }
  }
  static cause(e) {
    return Hn(e), e._cause && hi(e._cause) ? e._cause : null;
  }
  static fullStack(e) {
    Hn(e);
    const n = Ze.cause(e);
    return n ? `${e.stack}
caused by: ${Ze.fullStack(n)}` : e.stack ?? "";
  }
  static info(e) {
    Hn(e);
    const n = {}, i = Ze.cause(e);
    return i && Object.assign(n, Ze.info(i)), e._info && Object.assign(n, e._info), n;
  }
  toString() {
    let e = this.name || this.constructor.name || this.constructor.prototype.name;
    return this.message && (e = `${e}: ${this.message}`), e;
  }
}
var Bl = ge(47), yn = ge.n(Bl);
const Io = "__PATH_SEPARATOR_POSIX__", No = "__PATH_SEPARATOR_WINDOWS__";
function ve(r) {
  try {
    const e = r.replace(/\//g, Io).replace(/\\\\/g, No);
    return encodeURIComponent(e).split(No).join("\\\\").split(Io).join("/");
  } catch (e) {
    throw new Ze(e, "Failed encoding path");
  }
}
function xo(r) {
  return r.startsWith("/") ? r : "/" + r;
}
function tn(r) {
  let e = r;
  return e[0] !== "/" && (e = "/" + e), /^.+\/$/.test(e) && (e = e.substr(0, e.length - 1)), e;
}
function jl(r) {
  let e = new (Ul())(r).pathname;
  return e.length <= 0 && (e = "/"), tn(e);
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
      for (var l = 0; l < i.length; l++) {
        var h = i[l];
        if (typeof h != "string") throw new TypeError("Url must be a string. Received " + h);
        h !== "" && (l > 0 && (h = h.replace(/^[\/]+/, "")), h = l < i.length - 1 ? h.replace(/[\/]+$/, "") : h.replace(/[\/]+$/, "/"), o.push(h));
      }
      var f = o.join("/"), p = (f = f.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
      return p.shift() + (p.length > 0 ? "?" : "") + p.join("&");
    }(typeof arguments[0] == "object" ? arguments[0] : [].slice.call(arguments));
  }(e.reduce((i, o, a) => ((a === 0 || o !== "/" || o === "/" && i[i.length - 1] !== "/") && i.push(o), i), []));
}
var Wl = ge(542), qr = ge.n(Wl);
function Oo(r, e) {
  const n = r.url.replace("//", ""), i = n.indexOf("/") == -1 ? "/" : n.slice(n.indexOf("/")), o = r.method ? r.method.toUpperCase() : "GET", a = !!/(^|,)\s*auth\s*($|,)/.test(e.qop) && "auth", l = `00000000${e.nc}`.slice(-8), h = function(m, v, b, y, _, N, x) {
    const C = x || qr()(`${v}:${b}:${y}`);
    return m && m.toLowerCase() === "md5-sess" ? qr()(`${C}:${_}:${N}`) : C;
  }(e.algorithm, e.username, e.realm, e.password, e.nonce, e.cnonce, e.ha1), f = qr()(`${o}:${i}`), p = a ? qr()(`${h}:${e.nonce}:${l}:${e.cnonce}:${a}:${f}`) : qr()(`${h}:${e.nonce}:${f}`), s = { username: e.username, realm: e.realm, nonce: e.nonce, uri: i, qop: a, response: p, nc: l, cnonce: e.cnonce, algorithm: e.algorithm, opaque: e.opaque }, g = [];
  for (const m in s) s[m] && (m === "qop" || m === "nc" || m === "algorithm" ? g.push(`${m}=${s[m]}`) : g.push(`${m}="${s[m]}"`));
  return `Digest ${g.join(", ")}`;
}
function Ms(r) {
  return (r.headers && r.headers.get("www-authenticate") || "").split(/\s/)[0].toLowerCase() === "digest";
}
var Gl = ge(101), Fs = ge.n(Gl);
function So(r) {
  return Fs().decode(r);
}
function Ro(r, e) {
  var n;
  return `Basic ${n = `${r}:${e}`, Fs().encode(n)}`;
}
const Co = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : typeof window < "u" ? window : globalThis, Vl = Co.fetch.bind(Co);
let nt = function(r) {
  return r.Auto = "auto", r.Digest = "digest", r.None = "none", r.Password = "password", r.Token = "token", r;
}({}), ir = function(r) {
  return r.DataTypeNoLength = "data-type-no-length", r.InvalidAuthType = "invalid-auth-type", r.InvalidOutputFormat = "invalid-output-format", r.LinkUnsupportedAuthType = "link-unsupported-auth", r.InvalidUpdateRange = "invalid-update-range", r.NotSupported = "not-supported", r;
}({});
function Us(r, e, n, i, o) {
  switch (r.authType) {
    case nt.Auto:
      e && n && (r.headers.Authorization = Ro(e, n));
      break;
    case nt.Digest:
      r.digest = /* @__PURE__ */ function(l, h, f) {
        return { username: l, password: h, ha1: f, nc: 0, algorithm: "md5", hasDigestAuth: !1 };
      }(e, n, o);
      break;
    case nt.None:
      break;
    case nt.Password:
      r.headers.Authorization = Ro(e, n);
      break;
    case nt.Token:
      r.headers.Authorization = `${(a = i).token_type} ${a.access_token}`;
      break;
    default:
      throw new Ze({ info: { code: ir.InvalidAuthType } }, `Invalid auth type: ${r.authType}`);
  }
  var a;
}
ge(345), ge(800);
const Lo = "@@HOTPATCHER", zl = () => {
};
function Xn(r) {
  return { original: r, methods: [r], final: !1 };
}
class ql {
  constructor() {
    this._configuration = { registry: {}, getEmptyAction: "null" }, this.__type__ = Lo;
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
    if (!e || e.__type__ !== Lo) throw new Error("Failed taking control of target HotPatcher instance: Invalid type or object");
    return Object.keys(e.configuration.registry).forEach((i) => {
      this.configuration.registry.hasOwnProperty(i) ? n && (this.configuration.registry[i] = Object.assign({}, e.configuration.registry[i])) : this.configuration.registry[i] = Object.assign({}, e.configuration.registry[i]);
    }), e._configuration = this.configuration, this;
  }
  execute(e) {
    const n = this.get(e) || zl;
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
        for (var l = arguments.length, h = new Array(l), f = 0; f < l; f++) h[f] = arguments[f];
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
    if (o) this.configuration.registry[e] ? this.configuration.registry[e].methods.push(n) : this.configuration.registry[e] = Xn(n);
    else if (this.isPatched(e)) {
      const { original: a } = this.configuration.registry[e];
      this.configuration.registry[e] = Object.assign(Xn(n), { original: a });
    } else this.configuration.registry[e] = Xn(n);
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
let Yn = null;
function Bs() {
  return Yn || (Yn = new ql()), Yn;
}
function En(r) {
  return function(e) {
    if (typeof e != "object" || e === null || Object.prototype.toString.call(e) != "[object Object]") return !1;
    if (Object.getPrototypeOf(e) === null) return !0;
    let n = e;
    for (; Object.getPrototypeOf(n) !== null; ) n = Object.getPrototypeOf(n);
    return Object.getPrototypeOf(e) === n;
  }(r) ? Object.assign({}, r) : Object.setPrototypeOf(Object.assign({}, r), Object.getPrototypeOf(r));
}
function Po() {
  for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++) e[n] = arguments[n];
  let i = null, o = [...e];
  for (; o.length > 0; ) {
    const a = o.shift();
    i = i ? js(i, a) : En(a);
  }
  return i;
}
function js(r, e) {
  const n = En(r);
  return Object.keys(e).forEach((i) => {
    n.hasOwnProperty(i) ? Array.isArray(e[i]) ? n[i] = Array.isArray(n[i]) ? [...n[i], ...e[i]] : [...e[i]] : typeof e[i] == "object" && e[i] ? n[i] = typeof n[i] == "object" && n[i] ? js(n[i], e[i]) : En(e[i]) : n[i] = e[i] : n[i] = e[i];
  }), n;
}
function Hl(r) {
  const e = {};
  for (const n of r.keys()) e[n] = r.get(n);
  return e;
}
function pi() {
  for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++) e[n] = arguments[n];
  if (e.length === 0) return {};
  const i = {};
  return e.reduce((o, a) => (Object.keys(a).forEach((l) => {
    const h = l.toLowerCase();
    i.hasOwnProperty(h) ? o[i[h]] = a[l] : (i[h] = l, o[l] = a[l]);
  }), o), {});
}
ge(805);
const Xl = typeof ArrayBuffer == "function", { toString: Yl } = Object.prototype;
function Ws(r) {
  return Xl && (r instanceof ArrayBuffer || Yl.call(r) === "[object ArrayBuffer]");
}
function Gs(r) {
  return r != null && r.constructor != null && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r);
}
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
function di(r, e, n) {
  return n ? e ? e(r) : r : (r && r.then || (r = Promise.resolve(r)), e ? r.then(e) : r);
}
const Vs = Si(function(r) {
  const e = r._digest;
  return delete r._digest, e.hasDigestAuth && (r = Po(r, { headers: { Authorization: Oo(r, e) } })), di(vn(r), function(n) {
    let i = !1;
    return o = function(l) {
      return i ? l : n;
    }, (a = function() {
      if (n.status == 401) return e.hasDigestAuth = function(l, h) {
        if (!Ms(l)) return !1;
        const f = /([a-z0-9_-]+)=(?:"([^"]+)"|([a-z0-9_-]+))/gi;
        for (; ; ) {
          const p = l.headers && l.headers.get("www-authenticate") || "", s = f.exec(p);
          if (!s) break;
          h[s[1]] = s[2] || s[3];
        }
        return h.nc += 1, h.cnonce = function() {
          let p = "";
          for (let s = 0; s < 32; ++s) p = `${p}${"abcdef0123456789"[Math.floor(16 * Math.random())]}`;
          return p;
        }(), !0;
      }(n, e), function() {
        if (e.hasDigestAuth) return di(vn(r = Po(r, { headers: { Authorization: Oo(r, e) } })), function(l) {
          return l.status == 401 ? e.hasDigestAuth = !1 : e.nc++, i = !0, l;
        });
      }();
      e.nc++;
    }()) && a.then ? a.then(o) : o(a);
    var o, a;
  });
}), Zl = Si(function(r, e) {
  return di(vn(r), function(n) {
    return n.ok ? (e.authType = nt.Password, n) : n.status == 401 && Ms(n) ? (e.authType = nt.Digest, Us(e, e.username, e.password, void 0, void 0), r._digest = e.digest, Vs(r)) : n;
  });
}), Ce = Si(function(r, e) {
  return e.authType === nt.Auto ? Zl(r, e) : r._digest ? Vs(r) : vn(r);
});
function Le(r, e, n) {
  const i = En(r);
  return i.headers = pi(e.headers, i.headers || {}, n.headers || {}), n.data !== void 0 && (i.data = n.data), n.signal && (i.signal = n.signal), e.httpAgent && (i.httpAgent = e.httpAgent), e.httpsAgent && (i.httpsAgent = e.httpsAgent), e.digest && (i._digest = e.digest), typeof e.withCredentials == "boolean" && (i.withCredentials = e.withCredentials), i;
}
function vn(r) {
  const e = Bs();
  return e.patchInline("request", (n) => e.patchInline("fetch", Vl, n.url, function(i) {
    let o = {};
    const a = { method: i.method };
    if (i.headers && (o = pi(o, i.headers)), i.data !== void 0) {
      const [l, h] = function(f) {
        if (typeof f == "string") return [f, {}];
        if (Gs(f)) return [f, {}];
        if (Ws(f)) return [f, {}];
        if (f && typeof f == "object") return [JSON.stringify(f), { "content-type": "application/json" }];
        throw new Error("Unable to convert request body: Unexpected body type: " + typeof f);
      }(i.data);
      a.body = l, o = pi(o, h);
    }
    return i.signal && (a.signal = i.signal), i.withCredentials && (a.credentials = "include"), a.headers = o, a;
  }(n)), r);
}
var Jl = ge(285);
const bn = (r) => {
  if (typeof r != "string") throw new TypeError("invalid pattern");
  if (r.length > 65536) throw new TypeError("pattern is too long");
}, Kl = { "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", !0], "[:alpha:]": ["\\p{L}\\p{Nl}", !0], "[:ascii:]": ["\\x00-\\x7f", !1], "[:blank:]": ["\\p{Zs}\\t", !0], "[:cntrl:]": ["\\p{Cc}", !0], "[:digit:]": ["\\p{Nd}", !0], "[:graph:]": ["\\p{Z}\\p{C}", !0, !0], "[:lower:]": ["\\p{Ll}", !0], "[:print:]": ["\\p{C}", !0], "[:punct:]": ["\\p{P}", !0], "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", !0], "[:upper:]": ["\\p{Lu}", !0], "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", !0], "[:xdigit:]": ["A-Fa-f0-9", !1] }, Hr = (r) => r.replace(/[[\]\\-]/g, "\\$&"), ko = (r) => r.join(""), Ql = (r, e) => {
  const n = e;
  if (r.charAt(n) !== "[") throw new Error("not in a brace expression");
  const i = [], o = [];
  let a = n + 1, l = !1, h = !1, f = !1, p = !1, s = n, g = "";
  e: for (; a < r.length; ) {
    const y = r.charAt(a);
    if (y !== "!" && y !== "^" || a !== n + 1) {
      if (y === "]" && l && !f) {
        s = a + 1;
        break;
      }
      if (l = !0, y !== "\\" || f) {
        if (y === "[" && !f) {
          for (const [_, [N, x, C]] of Object.entries(Kl)) if (r.startsWith(_, a)) {
            if (g) return ["$.", !1, r.length - n, !0];
            a += _.length, C ? o.push(N) : i.push(N), h = h || x;
            continue e;
          }
        }
        f = !1, g ? (y > g ? i.push(Hr(g) + "-" + Hr(y)) : y === g && i.push(Hr(y)), g = "", a++) : r.startsWith("-]", a + 1) ? (i.push(Hr(y + "-")), a += 2) : r.startsWith("-", a + 1) ? (g = y, a += 2) : (i.push(Hr(y)), a++);
      } else f = !0, a++;
    } else p = !0, a++;
  }
  if (s < a) return ["", !1, 0, !1];
  if (!i.length && !o.length) return ["$.", !1, r.length - n, !0];
  if (o.length === 0 && i.length === 1 && /^\\?.$/.test(i[0]) && !p)
    return [(m = i[0].length === 2 ? i[0].slice(-1) : i[0], m.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")), !1, s - n, !1];
  var m;
  const v = "[" + (p ? "^" : "") + ko(i) + "]", b = "[" + (p ? "" : "^") + ko(o) + "]";
  return [i.length && o.length ? "(" + v + "|" + b + ")" : i.length ? v : b, h, s - n, !0];
}, Zr = function(r) {
  let { windowsPathsNoEscape: e = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return e ? r.replace(/\[([^\/\\])\]/g, "$1") : r.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
}, ec = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), $o = (r) => ec.has(r), Zn = "(?!\\.)", tc = /* @__PURE__ */ new Set(["[", "."]), rc = /* @__PURE__ */ new Set(["..", "."]), nc = new Set("().*{}+?[]^$\\!"), Ri = "[^/]", Do = Ri + "*?", Mo = Ri + "+?";
var Re, ke, Gt, ye, Oe, tr, dr, rr, kt, gr, rn, mr, zs, nr, mn, gi, qs;
const He = class He {
  constructor(e, n) {
    tt(this, mr);
    te(this, "type");
    tt(this, Re);
    tt(this, ke);
    tt(this, Gt, !1);
    tt(this, ye, []);
    tt(this, Oe);
    tt(this, tr);
    tt(this, dr);
    tt(this, rr, !1);
    tt(this, kt);
    tt(this, gr);
    tt(this, rn, !1);
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.type = e, e && _e(this, ke, !0), _e(this, Oe, n), _e(this, Re, F(this, Oe) ? F(F(this, Oe), Re) : this), _e(this, kt, F(this, Re) === this ? i : F(F(this, Re), kt)), _e(this, dr, F(this, Re) === this ? [] : F(F(this, Re), dr)), e !== "!" || F(F(this, Re), rr) || F(this, dr).push(this), _e(this, tr, F(this, Oe) ? F(F(this, Oe), ye).length : 0);
  }
  get hasMagic() {
    if (F(this, ke) !== void 0) return F(this, ke);
    for (const e of F(this, ye)) if (typeof e != "string" && (e.type || e.hasMagic)) return _e(this, ke, !0);
    return F(this, ke);
  }
  toString() {
    return F(this, gr) !== void 0 ? F(this, gr) : this.type ? _e(this, gr, this.type + "(" + F(this, ye).map((e) => String(e)).join("|") + ")") : _e(this, gr, F(this, ye).map((e) => String(e)).join(""));
  }
  push() {
    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
    for (const o of n) if (o !== "") {
      if (typeof o != "string" && !(o instanceof He && F(o, Oe) === this)) throw new Error("invalid part: " + o);
      F(this, ye).push(o);
    }
  }
  toJSON() {
    var n;
    const e = this.type === null ? F(this, ye).slice().map((i) => typeof i == "string" ? i : i.toJSON()) : [this.type, ...F(this, ye).map((i) => i.toJSON())];
    return this.isStart() && !this.type && e.unshift([]), this.isEnd() && (this === F(this, Re) || F(F(this, Re), rr) && ((n = F(this, Oe)) == null ? void 0 : n.type) === "!") && e.push({}), e;
  }
  isStart() {
    var n;
    if (F(this, Re) === this) return !0;
    if (!((n = F(this, Oe)) != null && n.isStart())) return !1;
    if (F(this, tr) === 0) return !0;
    const e = F(this, Oe);
    for (let i = 0; i < F(this, tr); i++) {
      const o = F(e, ye)[i];
      if (!(o instanceof He && o.type === "!")) return !1;
    }
    return !0;
  }
  isEnd() {
    var n, i, o;
    if (F(this, Re) === this || ((n = F(this, Oe)) == null ? void 0 : n.type) === "!") return !0;
    if (!((i = F(this, Oe)) != null && i.isEnd())) return !1;
    if (!this.type) return (o = F(this, Oe)) == null ? void 0 : o.isEnd();
    const e = F(this, Oe) ? F(F(this, Oe), ye).length : 0;
    return F(this, tr) === e - 1;
  }
  copyIn(e) {
    typeof e == "string" ? this.push(e) : this.push(e.clone(this));
  }
  clone(e) {
    const n = new He(this.type, e);
    for (const i of F(this, ye)) n.copyIn(i);
    return n;
  }
  static fromGlob(e) {
    var o;
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = new He(null, void 0, n);
    return Yt(o = He, nr, mn).call(o, e, i, 0, n), i;
  }
  toMMPattern() {
    if (this !== F(this, Re)) return F(this, Re).toMMPattern();
    const e = this.toString(), [n, i, o, a] = this.toRegExpSource();
    if (!(o || F(this, ke) || F(this, kt).nocase && !F(this, kt).nocaseMagicOnly && e.toUpperCase() !== e.toLowerCase())) return i;
    const l = (F(this, kt).nocase ? "i" : "") + (a ? "u" : "");
    return Object.assign(new RegExp(`^${n}$`, l), { _src: n, _glob: e });
  }
  get options() {
    return F(this, kt);
  }
  toRegExpSource(e) {
    var f;
    const n = e ?? !!F(this, kt).dot;
    if (F(this, Re) === this && Yt(this, mr, zs).call(this), !this.type) {
      const p = this.isStart() && this.isEnd(), s = F(this, ye).map((v) => {
        var x;
        const [b, y, _, N] = typeof v == "string" ? Yt(x = He, nr, qs).call(x, v, F(this, ke), p) : v.toRegExpSource(e);
        return _e(this, ke, F(this, ke) || _), _e(this, Gt, F(this, Gt) || N), b;
      }).join("");
      let g = "";
      if (this.isStart() && typeof F(this, ye)[0] == "string" && (F(this, ye).length !== 1 || !rc.has(F(this, ye)[0]))) {
        const v = tc, b = n && v.has(s.charAt(0)) || s.startsWith("\\.") && v.has(s.charAt(2)) || s.startsWith("\\.\\.") && v.has(s.charAt(4)), y = !n && !e && v.has(s.charAt(0));
        g = b ? "(?!(?:^|/)\\.\\.?(?:$|/))" : y ? Zn : "";
      }
      let m = "";
      return this.isEnd() && F(F(this, Re), rr) && ((f = F(this, Oe)) == null ? void 0 : f.type) === "!" && (m = "(?:$|\\/)"), [g + s + m, Zr(s), _e(this, ke, !!F(this, ke)), F(this, Gt)];
    }
    const i = this.type === "*" || this.type === "+", o = this.type === "!" ? "(?:(?!(?:" : "(?:";
    let a = Yt(this, mr, gi).call(this, n);
    if (this.isStart() && this.isEnd() && !a && this.type !== "!") {
      const p = this.toString();
      return _e(this, ye, [p]), this.type = null, _e(this, ke, void 0), [p, Zr(this.toString()), !1, !1];
    }
    let l = !i || e || n ? "" : Yt(this, mr, gi).call(this, !0);
    l === a && (l = ""), l && (a = `(?:${a})(?:${l})*?`);
    let h = "";
    return h = this.type === "!" && F(this, rn) ? (this.isStart() && !n ? Zn : "") + Mo : o + a + (this.type === "!" ? "))" + (!this.isStart() || n || e ? "" : Zn) + Do + ")" : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && l ? ")" : this.type === "*" && l ? ")?" : `)${this.type}`), [h, Zr(a), _e(this, ke, !!F(this, ke)), F(this, Gt)];
  }
};
Re = new WeakMap(), ke = new WeakMap(), Gt = new WeakMap(), ye = new WeakMap(), Oe = new WeakMap(), tr = new WeakMap(), dr = new WeakMap(), rr = new WeakMap(), kt = new WeakMap(), gr = new WeakMap(), rn = new WeakMap(), mr = new WeakSet(), zs = function() {
  if (this !== F(this, Re)) throw new Error("should only call on root");
  if (F(this, rr)) return this;
  let e;
  for (this.toString(), _e(this, rr, !0); e = F(this, dr).pop(); ) {
    if (e.type !== "!") continue;
    let n = e, i = F(n, Oe);
    for (; i; ) {
      for (let o = F(n, tr) + 1; !i.type && o < F(i, ye).length; o++) for (const a of F(e, ye)) {
        if (typeof a == "string") throw new Error("string part in extglob AST??");
        a.copyIn(F(i, ye)[o]);
      }
      n = i, i = F(n, Oe);
    }
  }
  return this;
}, nr = new WeakSet(), mn = function(e, n, i, o) {
  var v, b;
  let a = !1, l = !1, h = -1, f = !1;
  if (n.type === null) {
    let y = i, _ = "";
    for (; y < e.length; ) {
      const N = e.charAt(y++);
      if (a || N === "\\") a = !a, _ += N;
      else if (l) y === h + 1 ? N !== "^" && N !== "!" || (f = !0) : N !== "]" || y === h + 2 && f || (l = !1), _ += N;
      else if (N !== "[") if (o.noext || !$o(N) || e.charAt(y) !== "(") _ += N;
      else {
        n.push(_), _ = "";
        const x = new He(N, n);
        y = Yt(v = He, nr, mn).call(v, e, x, y, o), n.push(x);
      }
      else l = !0, h = y, f = !1, _ += N;
    }
    return n.push(_), y;
  }
  let p = i + 1, s = new He(null, n);
  const g = [];
  let m = "";
  for (; p < e.length; ) {
    const y = e.charAt(p++);
    if (a || y === "\\") a = !a, m += y;
    else if (l) p === h + 1 ? y !== "^" && y !== "!" || (f = !0) : y !== "]" || p === h + 2 && f || (l = !1), m += y;
    else if (y !== "[") if ($o(y) && e.charAt(p) === "(") {
      s.push(m), m = "";
      const _ = new He(y, s);
      s.push(_), p = Yt(b = He, nr, mn).call(b, e, _, p, o);
    } else if (y !== "|") {
      if (y === ")") return m === "" && F(n, ye).length === 0 && _e(n, rn, !0), s.push(m), m = "", n.push(...g, s), p;
      m += y;
    } else s.push(m), m = "", g.push(s), s = new He(null, n);
    else l = !0, h = p, f = !1, m += y;
  }
  return n.type = null, _e(n, ke, void 0), _e(n, ye, [e.substring(i - 1)]), p;
}, gi = function(e) {
  return F(this, ye).map((n) => {
    if (typeof n == "string") throw new Error("string type in extglob ast??");
    const [i, o, a, l] = n.toRegExpSource(e);
    return _e(this, Gt, F(this, Gt) || l), i;
  }).filter((n) => !(this.isStart() && this.isEnd() && !n)).join("|");
}, qs = function(e, n) {
  let i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], o = !1, a = "", l = !1;
  for (let h = 0; h < e.length; h++) {
    const f = e.charAt(h);
    if (o) o = !1, a += (nc.has(f) ? "\\" : "") + f;
    else if (f !== "\\") {
      if (f === "[") {
        const [p, s, g, m] = Ql(e, h);
        if (g) {
          a += p, l = l || s, h += g - 1, n = n || m;
          continue;
        }
      }
      f !== "*" ? f !== "?" ? a += f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : (a += Ri, n = !0) : (a += i && e === "*" ? Mo : Do, n = !0);
    } else h === e.length - 1 ? a += "\\\\" : o = !0;
  }
  return [a, Zr(e), !!n, l];
}, tt(He, nr);
let Tn = He;
const Ve = function(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return bn(e), !(!n.nocomment && e.charAt(0) === "#") && new _n(e, n).match(r);
}, ic = /^\*+([^+@!?\*\[\(]*)$/, oc = (r) => (e) => !e.startsWith(".") && e.endsWith(r), sc = (r) => (e) => e.endsWith(r), ac = (r) => (r = r.toLowerCase(), (e) => !e.startsWith(".") && e.toLowerCase().endsWith(r)), uc = (r) => (r = r.toLowerCase(), (e) => e.toLowerCase().endsWith(r)), lc = /^\*+\.\*+$/, cc = (r) => !r.startsWith(".") && r.includes("."), fc = (r) => r !== "." && r !== ".." && r.includes("."), hc = /^\.\*+$/, pc = (r) => r !== "." && r !== ".." && r.startsWith("."), dc = /^\*+$/, gc = (r) => r.length !== 0 && !r.startsWith("."), mc = (r) => r.length !== 0 && r !== "." && r !== "..", wc = /^\?+([^+@!?\*\[\(]*)?$/, yc = (r) => {
  let [e, n = ""] = r;
  const i = Hs([e]);
  return n ? (n = n.toLowerCase(), (o) => i(o) && o.toLowerCase().endsWith(n)) : i;
}, Ec = (r) => {
  let [e, n = ""] = r;
  const i = Xs([e]);
  return n ? (n = n.toLowerCase(), (o) => i(o) && o.toLowerCase().endsWith(n)) : i;
}, vc = (r) => {
  let [e, n = ""] = r;
  const i = Xs([e]);
  return n ? (o) => i(o) && o.endsWith(n) : i;
}, bc = (r) => {
  let [e, n = ""] = r;
  const i = Hs([e]);
  return n ? (o) => i(o) && o.endsWith(n) : i;
}, Hs = (r) => {
  let [e] = r;
  const n = e.length;
  return (i) => i.length === n && !i.startsWith(".");
}, Xs = (r) => {
  let [e] = r;
  const n = e.length;
  return (i) => i.length === n && i !== "." && i !== "..";
}, Ys = typeof Nt == "object" && Nt ? typeof Nt.env == "object" && Nt.env && Nt.env.__MINIMATCH_TESTING_PLATFORM__ || Nt.platform : "posix";
Ve.sep = Ys === "win32" ? "\\" : "/";
const wt = Symbol("globstar **");
Ve.GLOBSTAR = wt, Ve.filter = function(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return (n) => Ve(n, r, e);
};
const mt = function(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Object.assign({}, r, e);
};
Ve.defaults = (r) => {
  if (!r || typeof r != "object" || !Object.keys(r).length) return Ve;
  const e = Ve;
  return Object.assign(function(n, i) {
    return e(n, i, mt(r, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}));
  }, { Minimatch: class extends e.Minimatch {
    constructor(n) {
      super(n, mt(r, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}));
    }
    static defaults(n) {
      return e.defaults(mt(r, n)).Minimatch;
    }
  }, AST: class extends e.AST {
    constructor(n, i) {
      super(n, i, mt(r, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}));
    }
    static fromGlob(n) {
      let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return e.AST.fromGlob(n, mt(r, i));
    }
  }, unescape: function(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.unescape(n, mt(r, i));
  }, escape: function(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.escape(n, mt(r, i));
  }, filter: function(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.filter(n, mt(r, i));
  }, defaults: (n) => e.defaults(mt(r, n)), makeRe: function(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.makeRe(n, mt(r, i));
  }, braceExpand: function(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.braceExpand(n, mt(r, i));
  }, match: function(n, i) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return e.match(n, i, mt(r, o));
  }, sep: e.sep, GLOBSTAR: wt });
};
const Zs = function(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return bn(r), e.nobrace || !/\{(?:(?!\{).)*\}/.test(r) ? [r] : Jl(r);
};
Ve.braceExpand = Zs, Ve.makeRe = function(r) {
  return new _n(r, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).makeRe();
}, Ve.match = function(r, e) {
  const n = new _n(e, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {});
  return r = r.filter((i) => n.match(i)), n.options.nonull && !r.length && r.push(e), r;
};
const Fo = /[?*]|[+@!]\(.*?\)|\[|\]/;
class _n {
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
    bn(e), n = n || {}, this.options = n, this.pattern = e, this.platform = n.platform || Ys, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!n.windowsPathsNoEscape || n.allowWindowsEscape === !1, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!n.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!n.nonegate, this.comment = !1, this.empty = !1, this.partial = !!n.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = n.windowsNoMagicRoot !== void 0 ? n.windowsNoMagicRoot : !(!this.isWindows || !this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
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
    let o = this.globParts.map((a, l, h) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        const f = !(a[0] !== "" || a[1] !== "" || a[2] !== "?" && Fo.test(a[2]) || Fo.test(a[3])), p = /^[a-z]:/i.test(a[0]);
        if (f) return [...a.slice(0, 4), ...a.slice(4).map((s) => this.parse(s))];
        if (p) return [a[0], ...a.slice(1).map((s) => this.parse(s))];
      }
      return a.map((f) => this.parse(f));
    });
    if (this.debug(this.pattern, o), this.set = o.filter((a) => a.indexOf(!1) === -1), this.isWindows) for (let a = 0; a < this.set.length; a++) {
      const l = this.set[a];
      l[0] === "" && l[1] === "" && this.globParts[a][2] === "?" && typeof l[3] == "string" && /^[a-z]:$/i.test(l[3]) && (l[2] = "?");
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
          let l = o;
          for (; i[l + 1] === "**"; ) l++;
          l > o && i.splice(o + 1, l - o);
          let h = i[o + 1];
          const f = i[o + 2], p = i[o + 3];
          if (h !== ".." || !f || f === "." || f === ".." || !p || p === "." || p === "..") continue;
          n = !0, i.splice(o, 1);
          const s = i.slice(0);
          s[o] = "**", e.push(s), o--;
        }
        if (!this.preserveMultipleSlashes) {
          for (let l = 1; l < i.length - 1; l++) {
            const h = i[l];
            l === 1 && h === "" && i[0] === "" || h !== "." && h !== "" || (n = !0, i.splice(l, 1), l--);
          }
          i[0] !== "." || i.length !== 2 || i[1] !== "." && i[1] !== "" || (n = !0, i.pop());
        }
        let a = 0;
        for (; (a = i.indexOf("..", a + 1)) !== -1; ) {
          const l = i[a - 1];
          if (l && l !== "." && l !== ".." && l !== "**") {
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
    let i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], o = 0, a = 0, l = [], h = "";
    for (; o < e.length && a < n.length; ) if (e[o] === n[a]) l.push(h === "b" ? n[a] : e[o]), o++, a++;
    else if (i && e[o] === "**" && n[a] === e[o + 1]) l.push(e[o]), o++;
    else if (i && n[a] === "**" && e[o] === n[a + 1]) l.push(n[a]), a++;
    else if (e[o] !== "*" || !n[a] || !this.options.dot && n[a].startsWith(".") || n[a] === "**") {
      if (n[a] !== "*" || !e[o] || !this.options.dot && e[o].startsWith(".") || e[o] === "**" || h === "a") return !1;
      h = "b", l.push(n[a]), o++, a++;
    } else {
      if (h === "b") return !1;
      h = "a", l.push(e[o]), o++, a++;
    }
    return e.length === n.length && l;
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
      const y = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]), _ = !y && e[0] === "" && e[1] === "" && e[2] === "?" && /^[a-z]:$/i.test(e[3]), N = typeof n[0] == "string" && /^[a-z]:$/i.test(n[0]), x = _ ? 3 : y ? 0 : void 0, C = !N && n[0] === "" && n[1] === "" && n[2] === "?" && typeof n[3] == "string" && /^[a-z]:$/i.test(n[3]) ? 3 : N ? 0 : void 0;
      if (typeof x == "number" && typeof C == "number") {
        const [L, k] = [e[x], n[C]];
        L.toLowerCase() === k.toLowerCase() && (n[C] = L, C > x ? n = n.slice(C) : x > C && (e = e.slice(x)));
      }
    }
    const { optimizationLevel: a = 1 } = this.options;
    a >= 2 && (e = this.levelTwoFileOptimize(e)), this.debug("matchOne", this, { file: e, pattern: n }), this.debug("matchOne", e.length, n.length);
    for (var l = 0, h = 0, f = e.length, p = n.length; l < f && h < p; l++, h++) {
      this.debug("matchOne loop");
      var s = n[h], g = e[l];
      if (this.debug(n, s, g), s === !1) return !1;
      if (s === wt) {
        this.debug("GLOBSTAR", [n, s, g]);
        var m = l, v = h + 1;
        if (v === p) {
          for (this.debug("** at the end"); l < f; l++) if (e[l] === "." || e[l] === ".." || !o.dot && e[l].charAt(0) === ".") return !1;
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
      let y;
      if (typeof s == "string" ? (y = g === s, this.debug("string match", s, g, y)) : (y = s.test(g), this.debug("pattern match", s, g, y)), !y) return !1;
    }
    if (l === f && h === p) return !0;
    if (l === f) return i;
    if (h === p) return l === f - 1 && e[l] === "";
    throw new Error("wtf?");
  }
  braceExpand() {
    return Zs(this.pattern, this.options);
  }
  parse(e) {
    bn(e);
    const n = this.options;
    if (e === "**") return wt;
    if (e === "") return "";
    let i, o = null;
    (i = e.match(dc)) ? o = n.dot ? mc : gc : (i = e.match(ic)) ? o = (n.nocase ? n.dot ? uc : ac : n.dot ? sc : oc)(i[1]) : (i = e.match(wc)) ? o = (n.nocase ? n.dot ? Ec : yc : n.dot ? vc : bc)(i) : (i = e.match(lc)) ? o = n.dot ? fc : cc : (i = e.match(hc)) && (o = pc);
    const a = Tn.fromGlob(e, this.options).toMMPattern();
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
        return typeof s == "string" ? s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : s === wt ? wt : s._src;
      });
      return p.forEach((s, g) => {
        const m = p[g + 1], v = p[g - 1];
        s === wt && v !== wt && (v === void 0 ? m !== void 0 && m !== wt ? p[g + 1] = "(?:\\/|" + i + "\\/)?" + m : p[g] = i : m === void 0 ? p[g - 1] = v + "(?:\\/|" + i + ")?" : m !== wt && (p[g - 1] = v + "(?:\\/|\\/" + i + "\\/)" + m, p[g + 1] = wt));
      }), p.filter((s) => s !== wt).join("/");
    }).join("|");
    const [l, h] = e.length > 1 ? ["(?:", ")"] : ["", ""];
    a = "^" + l + a + h + "$", this.negate && (a = "^(?!" + a + ").+$");
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
    let l = o[o.length - 1];
    if (!l) for (let h = o.length - 2; !l && h >= 0; h--) l = o[h];
    for (let h = 0; h < a.length; h++) {
      const f = a[h];
      let p = o;
      if (i.matchBase && f.length === 1 && (p = [l]), this.matchOne(p, f, n)) return !!i.flipNegate || !this.negate;
    }
    return !i.flipNegate && this.negate;
  }
  static defaults(e) {
    return Ve.defaults(e).Minimatch;
  }
}
function Ci(r) {
  const e = new Error(`${arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""}Invalid response: ${r.status} ${r.statusText}`);
  return e.status = r.status, e.response = r, e;
}
function Pe(r, e) {
  const { status: n } = e;
  if (n === 401 && r.digest) return e;
  if (n >= 400) throw Ci(e);
  return e;
}
function Mr(r, e) {
  return arguments.length > 2 && arguments[2] !== void 0 && arguments[2] ? { data: e, headers: r.headers ? Hl(r.headers) : {}, status: r.status, statusText: r.statusText } : e;
}
Ve.AST = Tn, Ve.Minimatch = _n, Ve.escape = function(r) {
  let { windowsPathsNoEscape: e = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return e ? r.replace(/[?*()[\]]/g, "[$&]") : r.replace(/[?*()[\]\\]/g, "\\$&");
}, Ve.unescape = Zr;
const Tc = (Uo = function(r, e, n) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = Le({ url: be(r.remoteURL, ve(e)), method: "COPY", headers: { Destination: be(r.remoteURL, ve(n)), Overwrite: i.overwrite === !1 ? "F" : "T", Depth: i.shallow ? "0" : "infinity" } }, r, i);
  return l = function(h) {
    Pe(r, h);
  }, (a = Ce(o, r)) && a.then || (a = Promise.resolve(a)), l ? a.then(l) : a;
  var a, l;
}, function() {
  for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
  try {
    return Promise.resolve(Uo.apply(this, r));
  } catch (n) {
    return Promise.reject(n);
  }
});
var Uo;
const _c = { preserveOrder: !1, attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, removeNSPrefix: !1, allowBooleanAttributes: !1, parseTagValue: !0, parseAttributeValue: !1, trimValues: !0, cdataPropName: !1, numberParseOptions: { hex: !0, leadingZeros: !0, eNotation: !0 }, tagValueProcessor: function(r, e) {
  return e;
}, attributeValueProcessor: function(r, e) {
  return e;
}, stopNodes: [], alwaysCreateTextNode: !1, isArray: () => !1, commentPropName: !1, unpairedTags: [], processEntities: !0, htmlEntities: !1, ignoreDeclaration: !1, ignorePiTags: !1, transformTagName: !1, transformAttributeName: !1, updateTag: function(r, e, n) {
  return r;
}, captureMetaData: !1 }, Bo = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ac = new RegExp("^[" + Bo + "][" + Bo + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
function Js(r, e) {
  const n = [];
  let i = e.exec(r);
  for (; i; ) {
    const o = [];
    o.startIndex = e.lastIndex - i[0].length;
    const a = i.length;
    for (let l = 0; l < a; l++) o.push(i[l]);
    n.push(o), i = e.exec(r);
  }
  return n;
}
const Sn = function(r) {
  return Ac.exec(r) != null;
};
let mi;
mi = typeof Symbol != "function" ? "@@xmlMetadata" : Symbol("XML Node Metadata");
class cr {
  constructor(e) {
    this.tagname = e, this.child = [], this[":@"] = {};
  }
  add(e, n) {
    e === "__proto__" && (e = "#__proto__"), this.child.push({ [e]: n });
  }
  addChild(e, n) {
    e.tagname === "__proto__" && (e.tagname = "#__proto__"), e[":@"] && Object.keys(e[":@"]).length > 0 ? this.child.push({ [e.tagname]: e.child, ":@": e[":@"] }) : this.child.push({ [e.tagname]: e.child }), n !== void 0 && (this.child[this.child.length - 1][mi] = { startIndex: n });
  }
  static getMetaDataSymbol() {
    return mi;
  }
}
class Ic {
  constructor(e) {
    this.suppressValidationErr = !e;
  }
  readDocType(e, n) {
    const i = {};
    if (e[n + 3] !== "O" || e[n + 4] !== "C" || e[n + 5] !== "T" || e[n + 6] !== "Y" || e[n + 7] !== "P" || e[n + 8] !== "E") throw new Error("Invalid Tag instead of DOCTYPE");
    {
      n += 9;
      let o = 1, a = !1, l = !1, h = "";
      for (; n < e.length; n++) if (e[n] !== "<" || l) if (e[n] === ">") {
        if (l ? e[n - 1] === "-" && e[n - 2] === "-" && (l = !1, o--) : o--, o === 0) break;
      } else e[n] === "[" ? a = !0 : h += e[n];
      else {
        if (a && lr(e, "!ENTITY", n)) {
          let f, p;
          n += 7, [f, p, n] = this.readEntityExp(e, n + 1, this.suppressValidationErr), p.indexOf("&") === -1 && (i[f] = { regx: RegExp(`&${f};`, "g"), val: p });
        } else if (a && lr(e, "!ELEMENT", n)) {
          n += 8;
          const { index: f } = this.readElementExp(e, n + 1);
          n = f;
        } else if (a && lr(e, "!ATTLIST", n)) n += 8;
        else if (a && lr(e, "!NOTATION", n)) {
          n += 9;
          const { index: f } = this.readNotationExp(e, n + 1, this.suppressValidationErr);
          n = f;
        } else {
          if (!lr(e, "!--", n)) throw new Error("Invalid DOCTYPE");
          l = !0;
        }
        o++, h = "";
      }
      if (o !== 0) throw new Error("Unclosed DOCTYPE");
    }
    return { entities: i, i: n };
  }
  readEntityExp(e, n) {
    n = rt(e, n);
    let i = "";
    for (; n < e.length && !/\s/.test(e[n]) && e[n] !== '"' && e[n] !== "'"; ) i += e[n], n++;
    if (Xr(i), n = rt(e, n), !this.suppressValidationErr) {
      if (e.substring(n, n + 6).toUpperCase() === "SYSTEM") throw new Error("External entities are not supported");
      if (e[n] === "%") throw new Error("Parameter entities are not supported");
    }
    let o = "";
    return [n, o] = this.readIdentifierVal(e, n, "entity"), [i, o, --n];
  }
  readNotationExp(e, n) {
    n = rt(e, n);
    let i = "";
    for (; n < e.length && !/\s/.test(e[n]); ) i += e[n], n++;
    !this.suppressValidationErr && Xr(i), n = rt(e, n);
    const o = e.substring(n, n + 6).toUpperCase();
    if (!this.suppressValidationErr && o !== "SYSTEM" && o !== "PUBLIC") throw new Error(`Expected SYSTEM or PUBLIC, found "${o}"`);
    n += o.length, n = rt(e, n);
    let a = null, l = null;
    if (o === "PUBLIC") [n, a] = this.readIdentifierVal(e, n, "publicIdentifier"), e[n = rt(e, n)] !== '"' && e[n] !== "'" || ([n, l] = this.readIdentifierVal(e, n, "systemIdentifier"));
    else if (o === "SYSTEM" && ([n, l] = this.readIdentifierVal(e, n, "systemIdentifier"), !this.suppressValidationErr && !l)) throw new Error("Missing mandatory system identifier for SYSTEM notation");
    return { notationName: i, publicIdentifier: a, systemIdentifier: l, index: --n };
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
    n = rt(e, n);
    let i = "";
    for (; n < e.length && !/\s/.test(e[n]); ) i += e[n], n++;
    if (!this.suppressValidationErr && !Sn(i)) throw new Error(`Invalid element name: "${i}"`);
    let o = "";
    if (e[n = rt(e, n)] === "E" && lr(e, "MPTY", n)) n += 4;
    else if (e[n] === "A" && lr(e, "NY", n)) n += 2;
    else if (e[n] === "(") {
      for (n++; n < e.length && e[n] !== ")"; ) o += e[n], n++;
      if (e[n] !== ")") throw new Error("Unterminated content model");
    } else if (!this.suppressValidationErr) throw new Error(`Invalid Element Expression, found "${e[n]}"`);
    return { elementName: i, contentModel: o.trim(), index: n };
  }
  readAttlistExp(e, n) {
    n = rt(e, n);
    let i = "";
    for (; n < e.length && !/\s/.test(e[n]); ) i += e[n], n++;
    Xr(i), n = rt(e, n);
    let o = "";
    for (; n < e.length && !/\s/.test(e[n]); ) o += e[n], n++;
    if (!Xr(o)) throw new Error(`Invalid attribute name: "${o}"`);
    n = rt(e, n);
    let a = "";
    if (e.substring(n, n + 8).toUpperCase() === "NOTATION") {
      if (a = "NOTATION", e[n = rt(e, n += 8)] !== "(") throw new Error(`Expected '(', found "${e[n]}"`);
      n++;
      let h = [];
      for (; n < e.length && e[n] !== ")"; ) {
        let f = "";
        for (; n < e.length && e[n] !== "|" && e[n] !== ")"; ) f += e[n], n++;
        if (f = f.trim(), !Xr(f)) throw new Error(`Invalid notation name: "${f}"`);
        h.push(f), e[n] === "|" && (n++, n = rt(e, n));
      }
      if (e[n] !== ")") throw new Error("Unterminated list of notations");
      n++, a += " (" + h.join("|") + ")";
    } else {
      for (; n < e.length && !/\s/.test(e[n]); ) a += e[n], n++;
      const h = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
      if (!this.suppressValidationErr && !h.includes(a.toUpperCase())) throw new Error(`Invalid attribute type: "${a}"`);
    }
    n = rt(e, n);
    let l = "";
    return e.substring(n, n + 8).toUpperCase() === "#REQUIRED" ? (l = "#REQUIRED", n += 8) : e.substring(n, n + 7).toUpperCase() === "#IMPLIED" ? (l = "#IMPLIED", n += 7) : [n, l] = this.readIdentifierVal(e, n, "ATTLIST"), { elementName: i, attributeName: o, attributeType: a, defaultValue: l, index: n };
  }
}
const rt = (r, e) => {
  for (; e < r.length && /\s/.test(r[e]); ) e++;
  return e;
};
function lr(r, e, n) {
  for (let i = 0; i < e.length; i++) if (e[i] !== r[n + i + 1]) return !1;
  return !0;
}
function Xr(r) {
  if (Sn(r)) return r;
  throw new Error(`Invalid entity name ${r}`);
}
const Nc = /^[-+]?0x[a-fA-F0-9]+$/, xc = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Oc = { hex: !0, leadingZeros: !0, decimalPoint: ".", eNotation: !0 }, Sc = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
function Ks(r) {
  return typeof r == "function" ? r : Array.isArray(r) ? (e) => {
    for (const n of r)
      if (typeof n == "string" && e === n || n instanceof RegExp && n.test(e)) return !0;
  } : () => !1;
}
class Rc {
  constructor(e) {
    if (this.options = e, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = { apos: { regex: /&(apos|#39|#x27);/g, val: "'" }, gt: { regex: /&(gt|#62|#x3E);/g, val: ">" }, lt: { regex: /&(lt|#60|#x3C);/g, val: "<" }, quot: { regex: /&(quot|#34|#x22);/g, val: '"' } }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = { space: { regex: /&(nbsp|#160);/g, val: " " }, cent: { regex: /&(cent|#162);/g, val: "¢" }, pound: { regex: /&(pound|#163);/g, val: "£" }, yen: { regex: /&(yen|#165);/g, val: "¥" }, euro: { regex: /&(euro|#8364);/g, val: "€" }, copyright: { regex: /&(copy|#169);/g, val: "©" }, reg: { regex: /&(reg|#174);/g, val: "®" }, inr: { regex: /&(inr|#8377);/g, val: "₹" }, num_dec: { regex: /&#([0-9]{1,7});/g, val: (n, i) => jo(i, 10, "&#") }, num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (n, i) => jo(i, 16, "&#x") } }, this.addExternalEntities = Cc, this.parseXml = Dc, this.parseTextData = Lc, this.resolveNameSpace = Pc, this.buildAttributesMap = $c, this.isItStopNode = Bc, this.replaceEntitiesValue = Fc, this.readStopNodeData = jc, this.saveTextToParentTag = Uc, this.addChild = Mc, this.ignoreAttributesFn = Ks(this.options.ignoreAttributes), this.options.stopNodes && this.options.stopNodes.length > 0) {
      this.stopNodesExact = /* @__PURE__ */ new Set(), this.stopNodesWildcard = /* @__PURE__ */ new Set();
      for (let n = 0; n < this.options.stopNodes.length; n++) {
        const i = this.options.stopNodes[n];
        typeof i == "string" && (i.startsWith("*.") ? this.stopNodesWildcard.add(i.substring(2)) : this.stopNodesExact.add(i));
      }
    }
  }
}
function Cc(r) {
  const e = Object.keys(r);
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    this.lastEntities[i] = { regex: new RegExp("&" + i + ";", "g"), val: r[i] };
  }
}
function Lc(r, e, n, i, o, a, l) {
  if (r !== void 0 && (this.options.trimValues && !i && (r = r.trim()), r.length > 0)) {
    l || (r = this.replaceEntitiesValue(r));
    const h = this.options.tagValueProcessor(e, r, n, o, a);
    return h == null ? r : typeof h != typeof r || h !== r ? h : this.options.trimValues || r.trim() === r ? Qs(r, this.options.parseTagValue, this.options.numberParseOptions) : r;
  }
}
function Pc(r) {
  if (this.options.removeNSPrefix) {
    const e = r.split(":"), n = r.charAt(0) === "/" ? "/" : "";
    if (e[0] === "xmlns") return "";
    e.length === 2 && (r = n + e[1]);
  }
  return r;
}
const kc = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function $c(r, e) {
  if (this.options.ignoreAttributes !== !0 && typeof r == "string") {
    const n = Js(r, kc), i = n.length, o = {};
    for (let a = 0; a < i; a++) {
      const l = this.resolveNameSpace(n[a][1]);
      if (this.ignoreAttributesFn(l, e)) continue;
      let h = n[a][4], f = this.options.attributeNamePrefix + l;
      if (l.length) if (this.options.transformAttributeName && (f = this.options.transformAttributeName(f)), f === "__proto__" && (f = "#__proto__"), h !== void 0) {
        this.options.trimValues && (h = h.trim()), h = this.replaceEntitiesValue(h);
        const p = this.options.attributeValueProcessor(l, h, e);
        o[f] = p == null ? h : typeof p != typeof h || p !== h ? p : Qs(h, this.options.parseAttributeValue, this.options.numberParseOptions);
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
const Dc = function(r) {
  r = r.replace(/\r\n?/g, `
`);
  const e = new cr("!xml");
  let n = e, i = "", o = "";
  const a = new Ic(this.options.processEntities);
  for (let l = 0; l < r.length; l++) if (r[l] === "<") if (r[l + 1] === "/") {
    const h = pr(r, ">", l, "Closing Tag is not closed.");
    let f = r.substring(l + 2, h).trim();
    if (this.options.removeNSPrefix) {
      const g = f.indexOf(":");
      g !== -1 && (f = f.substr(g + 1));
    }
    this.options.transformTagName && (f = this.options.transformTagName(f)), n && (i = this.saveTextToParentTag(i, n, o));
    const p = o.substring(o.lastIndexOf(".") + 1);
    if (f && this.options.unpairedTags.indexOf(f) !== -1) throw new Error(`Unpaired tag can not be used as closing tag: </${f}>`);
    let s = 0;
    p && this.options.unpairedTags.indexOf(p) !== -1 ? (s = o.lastIndexOf(".", o.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : s = o.lastIndexOf("."), o = o.substring(0, s), n = this.tagsNodeStack.pop(), i = "", l = h;
  } else if (r[l + 1] === "?") {
    let h = wi(r, l, !1, "?>");
    if (!h) throw new Error("Pi Tag is not closed.");
    if (i = this.saveTextToParentTag(i, n, o), !(this.options.ignoreDeclaration && h.tagName === "?xml" || this.options.ignorePiTags)) {
      const f = new cr(h.tagName);
      f.add(this.options.textNodeName, ""), h.tagName !== h.tagExp && h.attrExpPresent && (f[":@"] = this.buildAttributesMap(h.tagExp, o)), this.addChild(n, f, o, l);
    }
    l = h.closeIndex + 1;
  } else if (r.substr(l + 1, 3) === "!--") {
    const h = pr(r, "-->", l + 4, "Comment is not closed.");
    if (this.options.commentPropName) {
      const f = r.substring(l + 4, h - 2);
      i = this.saveTextToParentTag(i, n, o), n.add(this.options.commentPropName, [{ [this.options.textNodeName]: f }]);
    }
    l = h;
  } else if (r.substr(l + 1, 2) === "!D") {
    const h = a.readDocType(r, l);
    this.docTypeEntities = h.entities, l = h.i;
  } else if (r.substr(l + 1, 2) === "![") {
    const h = pr(r, "]]>", l, "CDATA is not closed.") - 2, f = r.substring(l + 9, h);
    i = this.saveTextToParentTag(i, n, o);
    let p = this.parseTextData(f, n.tagname, o, !0, !1, !0, !0);
    p == null && (p = ""), this.options.cdataPropName ? n.add(this.options.cdataPropName, [{ [this.options.textNodeName]: f }]) : n.add(this.options.textNodeName, p), l = h + 2;
  } else {
    let h = wi(r, l, this.options.removeNSPrefix), f = h.tagName;
    const p = h.rawTagName;
    let s = h.tagExp, g = h.attrExpPresent, m = h.closeIndex;
    if (this.options.transformTagName) {
      const y = this.options.transformTagName(f);
      s === f && (s = y), f = y;
    }
    n && i && n.tagname !== "!xml" && (i = this.saveTextToParentTag(i, n, o, !1));
    const v = n;
    v && this.options.unpairedTags.indexOf(v.tagname) !== -1 && (n = this.tagsNodeStack.pop(), o = o.substring(0, o.lastIndexOf("."))), f !== e.tagname && (o += o ? "." + f : f);
    const b = l;
    if (this.isItStopNode(this.stopNodesExact, this.stopNodesWildcard, o, f)) {
      let y = "";
      if (s.length > 0 && s.lastIndexOf("/") === s.length - 1) f[f.length - 1] === "/" ? (f = f.substr(0, f.length - 1), o = o.substr(0, o.length - 1), s = f) : s = s.substr(0, s.length - 1), l = h.closeIndex;
      else if (this.options.unpairedTags.indexOf(f) !== -1) l = h.closeIndex;
      else {
        const N = this.readStopNodeData(r, p, m + 1);
        if (!N) throw new Error(`Unexpected end of ${p}`);
        l = N.i, y = N.tagContent;
      }
      const _ = new cr(f);
      f !== s && g && (_[":@"] = this.buildAttributesMap(s, o)), y && (y = this.parseTextData(y, f, o, !0, g, !0, !0)), o = o.substr(0, o.lastIndexOf(".")), _.add(this.options.textNodeName, y), this.addChild(n, _, o, b);
    } else {
      if (s.length > 0 && s.lastIndexOf("/") === s.length - 1) {
        if (f[f.length - 1] === "/" ? (f = f.substr(0, f.length - 1), o = o.substr(0, o.length - 1), s = f) : s = s.substr(0, s.length - 1), this.options.transformTagName) {
          const _ = this.options.transformTagName(f);
          s === f && (s = _), f = _;
        }
        const y = new cr(f);
        f !== s && g && (y[":@"] = this.buildAttributesMap(s, o)), this.addChild(n, y, o, b), o = o.substr(0, o.lastIndexOf("."));
      } else {
        const y = new cr(f);
        this.tagsNodeStack.push(n), f !== s && g && (y[":@"] = this.buildAttributesMap(s, o)), this.addChild(n, y, o, b), n = y;
      }
      i = "", l = m;
    }
  }
  else i += r[l];
  return e.child;
};
function Mc(r, e, n, i) {
  this.options.captureMetaData || (i = void 0);
  const o = this.options.updateTag(e.tagname, n, e[":@"]);
  o === !1 || (typeof o == "string" && (e.tagname = o), r.addChild(e, i));
}
const Fc = function(r) {
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
function Uc(r, e, n, i) {
  return r && (i === void 0 && (i = e.child.length === 0), (r = this.parseTextData(r, e.tagname, n, !1, !!e[":@"] && Object.keys(e[":@"]).length !== 0, i)) !== void 0 && r !== "" && e.add(this.options.textNodeName, r), r = ""), r;
}
function Bc(r, e, n, i) {
  return !(!e || !e.has(i)) || !(!r || !r.has(n));
}
function pr(r, e, n, i) {
  const o = r.indexOf(e, n);
  if (o === -1) throw new Error(i);
  return o + e.length - 1;
}
function wi(r, e, n) {
  const i = function(s, g) {
    let m, v = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ">", b = "";
    for (let y = g; y < s.length; y++) {
      let _ = s[y];
      if (m) _ === m && (m = "");
      else if (_ === '"' || _ === "'") m = _;
      else if (_ === v[0]) {
        if (!v[1]) return { data: b, index: y };
        if (s[y + 1] === v[1]) return { data: b, index: y };
      } else _ === "	" && (_ = " ");
      b += _;
    }
  }(r, e + 1, arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ">");
  if (!i) return;
  let o = i.data;
  const a = i.index, l = o.search(/\s/);
  let h = o, f = !0;
  l !== -1 && (h = o.substring(0, l), o = o.substring(l + 1).trimStart());
  const p = h;
  if (n) {
    const s = h.indexOf(":");
    s !== -1 && (h = h.substr(s + 1), f = h !== i.data.substr(s + 1));
  }
  return { tagName: h, tagExp: o, closeIndex: a, attrExpPresent: f, rawTagName: p };
}
function jc(r, e, n) {
  const i = n;
  let o = 1;
  for (; n < r.length; n++) if (r[n] === "<") if (r[n + 1] === "/") {
    const a = pr(r, ">", n, `${e} is not closed`);
    if (r.substring(n + 2, a).trim() === e && (o--, o === 0)) return { tagContent: r.substring(i, n), i: a };
    n = a;
  } else if (r[n + 1] === "?") n = pr(r, "?>", n + 1, "StopNode is not closed.");
  else if (r.substr(n + 1, 3) === "!--") n = pr(r, "-->", n + 3, "StopNode is not closed.");
  else if (r.substr(n + 1, 2) === "![") n = pr(r, "]]>", n, "StopNode is not closed.") - 2;
  else {
    const a = wi(r, n, ">");
    a && ((a && a.tagName) === e && a.tagExp[a.tagExp.length - 1] !== "/" && o++, n = a.closeIndex);
  }
}
function Qs(r, e, n) {
  if (e && typeof r == "string") {
    const i = r.trim();
    return i === "true" || i !== "false" && function(o) {
      let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (a = Object.assign({}, Oc, a), !o || typeof o != "string") return o;
      let l = o.trim();
      if (a.skipLike !== void 0 && a.skipLike.test(l)) return o;
      if (o === "0") return 0;
      if (a.hex && Nc.test(l)) return function(f) {
        if (parseInt) return parseInt(f, 16);
        if (Number.parseInt) return Number.parseInt(f, 16);
        if (window && window.parseInt) return window.parseInt(f, 16);
        throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
      }(l);
      if (l.includes("e") || l.includes("E")) return function(f, p, s) {
        if (!s.eNotation) return f;
        const g = p.match(Sc);
        if (g) {
          let m = g[1] || "";
          const v = g[3].indexOf("e") === -1 ? "E" : "e", b = g[2], y = m ? f[b.length + 1] === v : f[b.length] === v;
          return b.length > 1 && y ? f : b.length !== 1 || !g[3].startsWith(`.${v}`) && g[3][0] !== v ? s.leadingZeros && !y ? (p = (g[1] || "") + g[3], Number(p)) : f : Number(p);
        }
        return f;
      }(o, l, a);
      {
        const f = xc.exec(l);
        if (f) {
          const p = f[1] || "", s = f[2];
          let g = ((h = f[3]) && h.indexOf(".") !== -1 && ((h = h.replace(/0+$/, "")) === "." ? h = "0" : h[0] === "." ? h = "0" + h : h[h.length - 1] === "." && (h = h.substring(0, h.length - 1))), h);
          const m = p ? o[s.length + 1] === "." : o[s.length] === ".";
          if (!a.leadingZeros && (s.length > 1 || s.length === 1 && !m)) return o;
          {
            const v = Number(l), b = String(v);
            if (v === 0) return v;
            if (b.search(/[eE]/) !== -1) return a.eNotation ? v : o;
            if (l.indexOf(".") !== -1) return b === "0" || b === g || b === `${p}${g}` ? v : o;
            let y = s ? g : l;
            return s ? y === b || p + y === b ? v : o : y === b || y === p + b ? v : o;
          }
        }
        return o;
      }
      var h;
    }(r, n);
  }
  return r !== void 0 ? r : "";
}
function jo(r, e, n) {
  const i = Number.parseInt(r, e);
  return i >= 0 && i <= 1114111 ? String.fromCodePoint(i) : n + r + ";";
}
const Jn = cr.getMetaDataSymbol();
function Wc(r, e) {
  return ea(r, e);
}
function ea(r, e, n) {
  let i;
  const o = {};
  for (let a = 0; a < r.length; a++) {
    const l = r[a], h = Gc(l);
    let f = "";
    if (f = n === void 0 ? h : n + "." + h, h === e.textNodeName) i === void 0 ? i = l[h] : i += "" + l[h];
    else {
      if (h === void 0) continue;
      if (l[h]) {
        let p = ea(l[h], e, f);
        const s = zc(p, e);
        l[Jn] !== void 0 && (p[Jn] = l[Jn]), l[":@"] ? Vc(p, l[":@"], f, e) : Object.keys(p).length !== 1 || p[e.textNodeName] === void 0 || e.alwaysCreateTextNode ? Object.keys(p).length === 0 && (e.alwaysCreateTextNode ? p[e.textNodeName] = "" : p = "") : p = p[e.textNodeName], o[h] !== void 0 && o.hasOwnProperty(h) ? (Array.isArray(o[h]) || (o[h] = [o[h]]), o[h].push(p)) : e.isArray(h, f, s) ? o[h] = [p] : o[h] = p;
      }
    }
  }
  return typeof i == "string" ? i.length > 0 && (o[e.textNodeName] = i) : i !== void 0 && (o[e.textNodeName] = i), o;
}
function Gc(r) {
  const e = Object.keys(r);
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    if (i !== ":@") return i;
  }
}
function Vc(r, e, n, i) {
  if (e) {
    const o = Object.keys(e), a = o.length;
    for (let l = 0; l < a; l++) {
      const h = o[l];
      i.isArray(h, n + "." + h, !0, !0) ? r[h] = [e[h]] : r[h] = e[h];
    }
  }
}
function zc(r, e) {
  const { textNodeName: n } = e, i = Object.keys(r).length;
  return i === 0 || !(i !== 1 || !r[n] && typeof r[n] != "boolean" && r[n] !== 0);
}
const qc = { allowBooleanAttributes: !1, unpairedTags: [] };
function Wo(r) {
  return r === " " || r === "	" || r === `
` || r === "\r";
}
function Go(r, e) {
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
function Vo(r, e) {
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
function Hc(r, e) {
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
const Xc = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function zo(r, e) {
  const n = Js(r, Xc), i = {};
  for (let o = 0; o < n.length; o++) {
    if (n[o][1].length === 0) return Ae("InvalidAttr", "Attribute '" + n[o][2] + "' has no space in starting.", Yr(n[o]));
    if (n[o][3] !== void 0 && n[o][4] === void 0) return Ae("InvalidAttr", "Attribute '" + n[o][2] + "' is without value.", Yr(n[o]));
    if (n[o][3] === void 0 && !e.allowBooleanAttributes) return Ae("InvalidAttr", "boolean attribute '" + n[o][2] + "' is not allowed.", Yr(n[o]));
    const a = n[o][2];
    if (!Zc(a)) return Ae("InvalidAttr", "Attribute '" + a + "' is an invalid name.", Yr(n[o]));
    if (i.hasOwnProperty(a)) return Ae("InvalidAttr", "Attribute '" + a + "' is repeated.", Yr(n[o]));
    i[a] = 1;
  }
  return !0;
}
function Yc(r, e) {
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
function Zc(r) {
  return Sn(r);
}
function qe(r, e) {
  const n = r.substring(0, e).split(/\r?\n/);
  return { line: n.length, col: n[n.length - 1].length + 1 };
}
function Yr(r) {
  return r.startIndex + r[1].length;
}
class ta {
  constructor(e) {
    this.externalEntities = {}, this.options = function(n) {
      return Object.assign({}, _c, n);
    }(e);
  }
  parse(e, n) {
    if (typeof e != "string" && e.toString) e = e.toString();
    else if (typeof e != "string") throw new Error("XML data is accepted in String or Bytes[] form.");
    if (n) {
      n === !0 && (n = {});
      const a = function(l, h) {
        h = Object.assign({}, qc, h);
        const f = [];
        let p = !1, s = !1;
        l[0] === "\uFEFF" && (l = l.substr(1));
        for (let g = 0; g < l.length; g++) if (l[g] === "<" && l[g + 1] === "?") {
          if (g += 2, g = Go(l, g), g.err) return g;
        } else {
          if (l[g] !== "<") {
            if (Wo(l[g])) continue;
            return Ae("InvalidChar", "char '" + l[g] + "' is not expected.", qe(l, g));
          }
          {
            let m = g;
            if (g++, l[g] === "!") {
              g = Vo(l, g);
              continue;
            }
            {
              let v = !1;
              l[g] === "/" && (v = !0, g++);
              let b = "";
              for (; g < l.length && l[g] !== ">" && l[g] !== " " && l[g] !== "	" && l[g] !== `
` && l[g] !== "\r"; g++) b += l[g];
              if (b = b.trim(), b[b.length - 1] === "/" && (b = b.substring(0, b.length - 1), g--), !Sn(b)) {
                let N;
                return N = b.trim().length === 0 ? "Invalid space after '<'." : "Tag '" + b + "' is an invalid name.", Ae("InvalidTag", N, qe(l, g));
              }
              const y = Hc(l, g);
              if (y === !1) return Ae("InvalidAttr", "Attributes for '" + b + "' have open quote.", qe(l, g));
              let _ = y.value;
              if (g = y.index, _[_.length - 1] === "/") {
                const N = g - _.length;
                _ = _.substring(0, _.length - 1);
                const x = zo(_, h);
                if (x !== !0) return Ae(x.err.code, x.err.msg, qe(l, N + x.err.line));
                p = !0;
              } else if (v) {
                if (!y.tagClosed) return Ae("InvalidTag", "Closing tag '" + b + "' doesn't have proper closing.", qe(l, g));
                if (_.trim().length > 0) return Ae("InvalidTag", "Closing tag '" + b + "' can't have attributes or invalid starting.", qe(l, m));
                if (f.length === 0) return Ae("InvalidTag", "Closing tag '" + b + "' has not been opened.", qe(l, m));
                {
                  const N = f.pop();
                  if (b !== N.tagName) {
                    let x = qe(l, N.tagStartPos);
                    return Ae("InvalidTag", "Expected closing tag '" + N.tagName + "' (opened in line " + x.line + ", col " + x.col + ") instead of closing tag '" + b + "'.", qe(l, m));
                  }
                  f.length == 0 && (s = !0);
                }
              } else {
                const N = zo(_, h);
                if (N !== !0) return Ae(N.err.code, N.err.msg, qe(l, g - _.length + N.err.line));
                if (s === !0) return Ae("InvalidXml", "Multiple possible root nodes found.", qe(l, g));
                h.unpairedTags.indexOf(b) !== -1 || f.push({ tagName: b, tagStartPos: m }), p = !0;
              }
              for (g++; g < l.length; g++) if (l[g] === "<") {
                if (l[g + 1] === "!") {
                  g++, g = Vo(l, g);
                  continue;
                }
                if (l[g + 1] !== "?") break;
                if (g = Go(l, ++g), g.err) return g;
              } else if (l[g] === "&") {
                const N = Yc(l, g);
                if (N == -1) return Ae("InvalidChar", "char '&' is not expected.", qe(l, g));
                g = N;
              } else if (s === !0 && !Wo(l[g])) return Ae("InvalidXml", "Extra text at the end", qe(l, g));
              l[g] === "<" && g--;
            }
          }
        }
        return p ? f.length == 1 ? Ae("InvalidTag", "Unclosed tag '" + f[0].tagName + "'.", qe(l, f[0].tagStartPos)) : !(f.length > 0) || Ae("InvalidXml", "Invalid '" + JSON.stringify(f.map((g) => g.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 }) : Ae("InvalidXml", "Start tag expected.", 1);
      }(e, n);
      if (a !== !0) throw Error(`${a.err.msg}:${a.err.line}:${a.err.col}`);
    }
    const i = new Rc(this.options);
    i.addExternalEntities(this.externalEntities);
    const o = i.parseXml(e);
    return this.options.preserveOrder || o === void 0 ? o : Wc(o, this.options);
  }
  addEntity(e, n) {
    if (n.indexOf("&") !== -1) throw new Error("Entity value can't have '&'");
    if (e.indexOf("&") !== -1 || e.indexOf(";") !== -1) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    if (n === "&") throw new Error("An entity with value '&' is not permitted");
    this.externalEntities[e] = n;
  }
  static getMetaDataSymbol() {
    return cr.getMetaDataSymbol();
  }
}
var Jc = ge(829), Wt = ge.n(Jc), Or = function(r) {
  return r.Array = "array", r.Object = "object", r.Original = "original", r;
}(Or || {});
function ra(r, e) {
  if (!r.endsWith("propstat.prop.displayname")) return e;
}
function hn(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Or.Original;
  const i = Wt().get(r, e);
  return n === "array" && Array.isArray(i) === !1 ? [i] : n === "object" && Array.isArray(i) ? i[0] : i;
}
function Rn(r, e) {
  return e = e ?? { attributeNamePrefix: "@", attributeParsers: [], tagParsers: [ra] }, new Promise((n) => {
    n(function(i) {
      const { multistatus: o } = i;
      if (o === "") return { multistatus: { response: [] } };
      if (!o) throw new Error("Invalid response: No root multistatus found");
      const a = { multistatus: Array.isArray(o) ? o[0] : o };
      return Wt().set(a, "multistatus.response", hn(a, "multistatus.response", Or.Array)), Wt().set(a, "multistatus.response", Wt().get(a, "multistatus.response").map((l) => function(h) {
        const f = Object.assign({}, h);
        return f.status ? Wt().set(f, "status", hn(f, "status", Or.Object)) : (Wt().set(f, "propstat", hn(f, "propstat", Or.Object)), Wt().set(f, "propstat.prop", hn(f, "propstat.prop", Or.Object))), f;
      }(l))), a;
    }(function(i) {
      let { attributeNamePrefix: o, attributeParsers: a, tagParsers: l } = i;
      return new ta({ allowBooleanAttributes: !0, attributeNamePrefix: o, textNodeName: "text", ignoreAttributes: !1, removeNSPrefix: !0, numberParseOptions: { hex: !0, leadingZeros: !1 }, attributeValueProcessor(h, f, p) {
        for (const s of a) try {
          const g = s(p, f);
          if (g !== f) return g;
        } catch {
        }
        return f;
      }, tagValueProcessor(h, f, p) {
        for (const s of l) try {
          const g = s(p, f);
          if (g !== f) return g;
        } catch {
        }
        return f;
      } });
    }(e).parse(r)));
  });
}
function Li(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
  const { getlastmodified: i = null, getcontentlength: o = "0", resourcetype: a = null, getcontenttype: l = null, getetag: h = null } = r, f = a && typeof a == "object" && a.collection !== void 0 ? "directory" : "file", p = { filename: e, basename: yn().basename(e), lastmod: i, size: parseInt(o, 10), type: f, etag: typeof h == "string" ? h.replace(/"/g, "") : null };
  return f === "file" && (p.mime = l && typeof l == "string" ? l.split(";")[0] : ""), n && (r.displayname !== void 0 && (r.displayname = String(r.displayname)), p.props = r), p;
}
function Kc(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], i = null;
  try {
    r.multistatus.response[0].propstat && (i = r.multistatus.response[0]);
  } catch {
  }
  if (!i) throw new Error("Failed getting item stat: bad response");
  const { propstat: { prop: o, status: a } } = i, [l, h, f] = a.split(" ", 3), p = parseInt(h, 10);
  if (p >= 400) {
    const s = new Error(`Invalid response: ${p} ${f}`);
    throw s.status = p, s;
  }
  return Li(o, tn(e), n);
}
function Qc(r) {
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
function Kn(r, e, n) {
  return n ? e ? e(r) : r : (r && r.then || (r = Promise.resolve(r)), e ? r.then(e) : r);
}
const Pi = /* @__PURE__ */ function(r) {
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
  return Kn(Ce(o, r), function(a) {
    return Pe(r, a), Kn(a.text(), function(l) {
      return Kn(Rn(l, r.parsing), function(h) {
        const f = Kc(h, e, i);
        return Mr(a, f, i);
      });
    });
  });
});
function na(r, e, n) {
  return n ? e ? e(r) : r : (r && r.then || (r = Promise.resolve(r)), e ? r.then(e) : r);
}
const ef = ia(function(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = function(a) {
    if (!a || a === "/") return [];
    let l = a;
    const h = [];
    do
      h.push(l), l = yn().dirname(l);
    while (l && l !== "/");
    return h;
  }(tn(e));
  i.sort((a, l) => a.length > l.length ? 1 : l.length > a.length ? -1 : 0);
  let o = !1;
  return function(a, l, h) {
    if (typeof a[Ho] == "function") {
      let _ = function(N) {
        try {
          for (; !(f = g.next()).done; ) if ((N = l(f.value)) && N.then) {
            if (!Xo(N)) return void N.then(_, s || (s = Ye.bind(null, p = new Sr(), 2)));
            N = N.v;
          }
          p ? Ye(p, 1, N) : p = N;
        } catch (x) {
          Ye(p || (p = new Sr()), 2, x);
        }
      };
      var y = _, f, p, s, g = a[Ho]();
      if (_(), g.return) {
        var m = function(N) {
          try {
            f.done || g.return();
          } catch {
          }
          return N;
        };
        if (p && p.then) return p.then(m, function(N) {
          throw m(N);
        });
        m();
      }
      return p;
    }
    if (!("length" in a)) throw new TypeError("Object is not iterable");
    for (var v = [], b = 0; b < a.length; b++) v.push(a[b]);
    return function(_, N, x) {
      var C, L, k = -1;
      return function j(B) {
        try {
          for (; ++k < _.length && (!x || !x()); ) if ((B = N(k)) && B.then) {
            if (!Xo(B)) return void B.then(j, L || (L = Ye.bind(null, C = new Sr(), 2)));
            B = B.v;
          }
          C ? Ye(C, 1, B) : C = B;
        } catch (Z) {
          Ye(C || (C = new Sr()), 2, Z);
        }
      }(), C;
    }(v, function(_) {
      return l(v[_]);
    }, h);
  }(i, function(a) {
    return l = function() {
      return function(f, p) {
        try {
          var s = na(Pi(r, a), function(g) {
            if (g.type !== "directory") throw new Error(`Path includes a file: ${e}`);
          });
        } catch (g) {
          return p(g);
        }
        return s && s.then ? s.then(void 0, p) : s;
      }(0, function(f) {
        const p = f;
        return function() {
          if (p.status === 404) return o = !0, qo(yi(r, a, { ...n, recursive: !1 }));
          throw f;
        }();
      });
    }, (h = function() {
      if (o) return qo(yi(r, a, { ...n, recursive: !1 }));
    }()) && h.then ? h.then(l) : l();
    var l, h;
  }, function() {
    return !1;
  });
});
function ia(r) {
  return function() {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try {
      return Promise.resolve(r.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
function tf() {
}
function qo(r, e) {
  return r && r.then ? r.then(tf) : Promise.resolve();
}
const Ho = typeof Symbol < "u" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
function Ye(r, e, n) {
  if (!r.s) {
    if (n instanceof Sr) {
      if (!n.s) return void (n.o = Ye.bind(null, r, e));
      1 & e && (e = n.s), n = n.v;
    }
    if (n && n.then) return void n.then(Ye.bind(null, r, e), Ye.bind(null, r, 2));
    r.s = e, r.v = n;
    const i = r.o;
    i && i(r);
  }
}
const Sr = function() {
  function r() {
  }
  return r.prototype.then = function(e, n) {
    const i = new r(), o = this.s;
    if (o) {
      const a = 1 & o ? e : n;
      if (a) {
        try {
          Ye(i, 1, a(this.v));
        } catch (l) {
          Ye(i, 2, l);
        }
        return i;
      }
      return this;
    }
    return this.o = function(a) {
      try {
        const l = a.v;
        1 & a.s ? Ye(i, 1, e ? e(l) : l) : n ? Ye(i, 1, n(l)) : Ye(i, 2, l);
      } catch (l) {
        Ye(i, 2, l);
      }
    }, i;
  }, r;
}();
function Xo(r) {
  return r instanceof Sr && 1 & r.s;
}
const yi = ia(function(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (n.recursive === !0) return ef(r, e, n);
  const i = Le({ url: be(r.remoteURL, (o = ve(e), o.endsWith("/") ? o : o + "/")), method: "MKCOL" }, r, n);
  var o;
  return na(Ce(i, r), function(a) {
    Pe(r, a);
  });
});
var rf = ge(388), Yo = ge.n(rf);
const nf = /* @__PURE__ */ function(r) {
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
  return l = function(h) {
    if (Pe(r, h), i.Range && h.status !== 206) {
      const f = new Error(`Invalid response code for partial request: ${h.status}`);
      throw f.status = h.status, f;
    }
    return n.callback && setTimeout(() => {
      n.callback(h);
    }, 0), h.body;
  }, (a = Ce(o, r)) && a.then || (a = Promise.resolve(a)), l ? a.then(l) : a;
  var a, l;
}), of = () => {
}, sf = /* @__PURE__ */ function(r) {
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
  return a = function(l) {
    return Pe(r, l), l;
  }, (o = Ce(i, r)) && o.then || (o = Promise.resolve(o)), a ? o.then(a) : o;
  var o, a;
}), af = /* @__PURE__ */ function(r) {
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
  return a = function(l) {
    Pe(r, l);
  }, (o = Ce(i, r)) && o.then || (o = Promise.resolve(o)), a ? o.then(a) : o;
  var o, a;
}), uf = /* @__PURE__ */ function(r) {
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
      var a = (l = Pi(r, e, n), h = function() {
        return !0;
      }, f ? h ? h(l) : l : (l && l.then || (l = Promise.resolve(l)), h ? l.then(h) : l));
    } catch (p) {
      return o(p);
    }
    var l, h, f;
    return a && a.then ? a.then(void 0, o) : a;
  }(0, function(i) {
    if (i.status === 404) return !1;
    throw i;
  });
});
function Qn(r, e, n) {
  return n ? e ? e(r) : r : (r && r.then || (r = Promise.resolve(r)), e ? r.then(e) : r);
}
const lf = /* @__PURE__ */ function(r) {
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
  return Qn(Ce(i, r), function(o) {
    return Pe(r, o), Qn(o.text(), function(a) {
      if (!a) throw new Error("Failed parsing directory contents: Empty response");
      return Qn(Rn(a, r.parsing), function(l) {
        const h = xo(e);
        let f = function(p, s, g) {
          let m = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], v = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
          const b = yn().join(s, "/"), { multistatus: { response: y } } = p, _ = y.map((N) => {
            const x = function(L) {
              try {
                return L.replace(/^https?:\/\/[^\/]+/, "");
              } catch (k) {
                throw new Ze(k, "Failed normalising HREF");
              }
            }(N.href), { propstat: { prop: C } } = N;
            return Li(C, b === "/" ? decodeURIComponent(tn(x)) : tn(yn().relative(decodeURIComponent(b), decodeURIComponent(x))), m);
          });
          return v ? _ : _.filter((N) => N.basename && (N.type === "file" || N.filename !== g.replace(/\/$/, "")));
        }(l, xo(r.remoteBasePath || r.remotePath), h, n.details, n.includeSelf);
        return n.glob && (f = function(p, s) {
          return p.filter((g) => Ve(g.filename, s, { matchBase: !0 }));
        }(f, n.glob)), Mr(o, f, n.details);
      });
    });
  });
});
function ki(r) {
  return function() {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try {
      return Promise.resolve(r.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
const cf = ki(function(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = Le({ url: be(r.remoteURL, ve(e)), method: "GET", headers: { Accept: "text/plain" }, transformResponse: [pf] }, r, n);
  return An(Ce(i, r), function(o) {
    return Pe(r, o), An(o.text(), function(a) {
      return Mr(o, a, n.details);
    });
  });
});
function An(r, e, n) {
  return n ? e ? e(r) : r : (r && r.then || (r = Promise.resolve(r)), e ? r.then(e) : r);
}
const ff = ki(function(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = Le({ url: be(r.remoteURL, ve(e)), method: "GET" }, r, n);
  return An(Ce(i, r), function(o) {
    let a;
    return Pe(r, o), function(l, h) {
      var f = l();
      return f && f.then ? f.then(h) : h();
    }(function() {
      return An(o.arrayBuffer(), function(l) {
        a = l;
      });
    }, function() {
      return Mr(o, a, n.details);
    });
  });
}), hf = ki(function(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { format: i = "binary" } = n;
  if (i !== "binary" && i !== "text") throw new Ze({ info: { code: ir.InvalidOutputFormat } }, `Invalid output format: ${i}`);
  return i === "text" ? cf(r, e, n) : ff(r, e, n);
}), pf = (r) => r;
function df(r, e) {
  let n = "";
  return e.format && e.indentBy.length > 0 && (n = `
`), oa(r, e, "", n);
}
function oa(r, e, n, i) {
  let o = "", a = !1;
  for (let l = 0; l < r.length; l++) {
    const h = r[l], f = gf(h);
    if (f === void 0) continue;
    let p = "";
    if (p = n.length === 0 ? f : `${n}.${f}`, f === e.textNodeName) {
      let v = h[f];
      mf(p, e) || (v = e.tagValueProcessor(f, v), v = sa(v, e)), a && (o += i), o += v, a = !1;
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
      const v = Zo(h[":@"], e), b = f === "?xml" ? "" : i;
      let y = h[f][0][e.textNodeName];
      y = y.length !== 0 ? " " + y : "", o += b + `<${f}${y}${v}?>`, a = !0;
      continue;
    }
    let s = i;
    s !== "" && (s += e.indentBy);
    const g = i + `<${f}${Zo(h[":@"], e)}`, m = oa(h[f], e, p, s);
    e.unpairedTags.indexOf(f) !== -1 ? e.suppressUnpairedNode ? o += g + ">" : o += g + "/>" : m && m.length !== 0 || !e.suppressEmptyNode ? m && m.endsWith(">") ? o += g + `>${m}${i}</${f}>` : (o += g + ">", m && i !== "" && (m.includes("/>") || m.includes("</")) ? o += i + e.indentBy + m + i : o += m, o += `</${f}>`) : o += g + "/>", a = !0;
  }
  return o;
}
function gf(r) {
  const e = Object.keys(r);
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    if (r.hasOwnProperty(i) && i !== ":@") return i;
  }
}
function Zo(r, e) {
  let n = "";
  if (r && !e.ignoreAttributes) for (let i in r) {
    if (!r.hasOwnProperty(i)) continue;
    let o = e.attributeValueProcessor(i, r[i]);
    o = sa(o, e), o === !0 && e.suppressBooleanAttributes ? n += ` ${i.substr(e.attributeNamePrefix.length)}` : n += ` ${i.substr(e.attributeNamePrefix.length)}="${o}"`;
  }
  return n;
}
function mf(r, e) {
  let n = (r = r.substr(0, r.length - e.textNodeName.length - 1)).substr(r.lastIndexOf(".") + 1);
  for (let i in e.stopNodes) if (e.stopNodes[i] === r || e.stopNodes[i] === "*." + n) return !0;
  return !1;
}
function sa(r, e) {
  if (r && r.length > 0 && e.processEntities) for (let n = 0; n < e.entities.length; n++) {
    const i = e.entities[n];
    r = r.replace(i.regex, i.val);
  }
  return r;
}
const wf = { attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, cdataPropName: !1, format: !1, indentBy: "  ", suppressEmptyNode: !1, suppressUnpairedNode: !0, suppressBooleanAttributes: !0, tagValueProcessor: function(r, e) {
  return e;
}, attributeValueProcessor: function(r, e) {
  return e;
}, preserveOrder: !1, commentPropName: !1, unpairedTags: [], entities: [{ regex: new RegExp("&", "g"), val: "&amp;" }, { regex: new RegExp(">", "g"), val: "&gt;" }, { regex: new RegExp("<", "g"), val: "&lt;" }, { regex: new RegExp("'", "g"), val: "&apos;" }, { regex: new RegExp('"', "g"), val: "&quot;" }], processEntities: !0, stopNodes: [], oneListGroup: !1 };
function Kt(r) {
  this.options = Object.assign({}, wf, r), this.options.ignoreAttributes === !0 || this.options.attributesGroupName ? this.isAttribute = function() {
    return !1;
  } : (this.ignoreAttributesFn = Ks(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = vf), this.processTextOrObjNode = yf, this.options.format ? (this.indentate = Ef, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
    return "";
  }, this.tagEndChar = ">", this.newLine = "");
}
function yf(r, e, n, i) {
  const o = this.j2x(r, n + 1, i.concat(e));
  return r[this.options.textNodeName] !== void 0 && Object.keys(r).length === 1 ? this.buildTextValNode(r[this.options.textNodeName], e, o.attrStr, n) : this.buildObjectNode(o.val, e, o.attrStr, n);
}
function Ef(r) {
  return this.options.indentBy.repeat(r);
}
function vf(r) {
  return !(!r.startsWith(this.options.attributeNamePrefix) || r === this.options.textNodeName) && r.substr(this.attrPrefixLen);
}
function bf(r) {
  return new Kt({ attributeNamePrefix: "@_", format: !0, ignoreAttributes: !1, suppressEmptyNode: !0 }).build(aa({ lockinfo: { "@_xmlns:d": "DAV:", lockscope: { exclusive: {} }, locktype: { write: {} }, owner: { href: r } } }, "d"));
}
function aa(r, e) {
  const n = { ...r };
  for (const i in n) n.hasOwnProperty(i) && (n[i] && typeof n[i] == "object" && i.indexOf(":") === -1 ? (n[`${e}:${i}`] = aa(n[i], e), delete n[i]) : /^@_/.test(i) === !1 && (n[`${e}:${i}`] = n[i], delete n[i]));
  return n;
}
function Ei(r, e, n) {
  return n ? e ? e(r) : r : (r && r.then || (r = Promise.resolve(r)), e ? r.then(e) : r);
}
function ua(r) {
  return function() {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try {
      return Promise.resolve(r.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
Kt.prototype.build = function(r) {
  return this.options.preserveOrder ? df(r, this.options) : (Array.isArray(r) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (r = { [this.options.arrayNodeName]: r }), this.j2x(r, 0, []).val);
}, Kt.prototype.j2x = function(r, e, n) {
  let i = "", o = "";
  const a = n.join(".");
  for (let l in r) if (Object.prototype.hasOwnProperty.call(r, l)) if (r[l] === void 0) this.isAttribute(l) && (o += "");
  else if (r[l] === null) this.isAttribute(l) || l === this.options.cdataPropName ? o += "" : l[0] === "?" ? o += this.indentate(e) + "<" + l + "?" + this.tagEndChar : o += this.indentate(e) + "<" + l + "/" + this.tagEndChar;
  else if (r[l] instanceof Date) o += this.buildTextValNode(r[l], l, "", e);
  else if (typeof r[l] != "object") {
    const h = this.isAttribute(l);
    if (h && !this.ignoreAttributesFn(h, a)) i += this.buildAttrPairStr(h, "" + r[l]);
    else if (!h) if (l === this.options.textNodeName) {
      let f = this.options.tagValueProcessor(l, "" + r[l]);
      o += this.replaceEntitiesValue(f);
    } else o += this.buildTextValNode(r[l], l, "", e);
  } else if (Array.isArray(r[l])) {
    const h = r[l].length;
    let f = "", p = "";
    for (let s = 0; s < h; s++) {
      const g = r[l][s];
      if (g !== void 0) if (g === null) l[0] === "?" ? o += this.indentate(e) + "<" + l + "?" + this.tagEndChar : o += this.indentate(e) + "<" + l + "/" + this.tagEndChar;
      else if (typeof g == "object") if (this.options.oneListGroup) {
        const m = this.j2x(g, e + 1, n.concat(l));
        f += m.val, this.options.attributesGroupName && g.hasOwnProperty(this.options.attributesGroupName) && (p += m.attrStr);
      } else f += this.processTextOrObjNode(g, l, e, n);
      else if (this.options.oneListGroup) {
        let m = this.options.tagValueProcessor(l, g);
        m = this.replaceEntitiesValue(m), f += m;
      } else f += this.buildTextValNode(g, l, "", e);
    }
    this.options.oneListGroup && (f = this.buildObjectNode(f, l, p, e)), o += f;
  } else if (this.options.attributesGroupName && l === this.options.attributesGroupName) {
    const h = Object.keys(r[l]), f = h.length;
    for (let p = 0; p < f; p++) i += this.buildAttrPairStr(h[p], "" + r[l][h[p]]);
  } else o += this.processTextOrObjNode(r[l], l, e, n);
  return { attrStr: i, val: o };
}, Kt.prototype.buildAttrPairStr = function(r, e) {
  return e = this.options.attributeValueProcessor(r, "" + e), e = this.replaceEntitiesValue(e), this.options.suppressBooleanAttributes && e === "true" ? " " + r : " " + r + '="' + e + '"';
}, Kt.prototype.buildObjectNode = function(r, e, n, i) {
  if (r === "") return e[0] === "?" ? this.indentate(i) + "<" + e + n + "?" + this.tagEndChar : this.indentate(i) + "<" + e + n + this.closeTag(e) + this.tagEndChar;
  {
    let o = "</" + e + this.tagEndChar, a = "";
    return e[0] === "?" && (a = "?", o = ""), !n && n !== "" || r.indexOf("<") !== -1 ? this.options.commentPropName !== !1 && e === this.options.commentPropName && a.length === 0 ? this.indentate(i) + `<!--${r}-->` + this.newLine : this.indentate(i) + "<" + e + n + a + this.tagEndChar + r + this.indentate(i) + o : this.indentate(i) + "<" + e + n + a + ">" + r + o;
  }
}, Kt.prototype.closeTag = function(r) {
  let e = "";
  return this.options.unpairedTags.indexOf(r) !== -1 ? this.options.suppressUnpairedNode || (e = "/") : e = this.options.suppressEmptyNode ? "/" : `></${r}`, e;
}, Kt.prototype.buildTextValNode = function(r, e, n, i) {
  if (this.options.cdataPropName !== !1 && e === this.options.cdataPropName) return this.indentate(i) + `<![CDATA[${r}]]>` + this.newLine;
  if (this.options.commentPropName !== !1 && e === this.options.commentPropName) return this.indentate(i) + `<!--${r}-->` + this.newLine;
  if (e[0] === "?") return this.indentate(i) + "<" + e + n + "?" + this.tagEndChar;
  {
    let o = this.options.tagValueProcessor(e, r);
    return o = this.replaceEntitiesValue(o), o === "" ? this.indentate(i) + "<" + e + n + this.closeTag(e) + this.tagEndChar : this.indentate(i) + "<" + e + n + ">" + o + "</" + e + this.tagEndChar;
  }
}, Kt.prototype.replaceEntitiesValue = function(r) {
  if (r && r.length > 0 && this.options.processEntities) for (let e = 0; e < this.options.entities.length; e++) {
    const n = this.options.entities[e];
    r = r.replace(n.regex, n.val);
  }
  return r;
};
const Tf = ua(function(r, e, n) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = Le({ url: be(r.remoteURL, ve(e)), method: "UNLOCK", headers: { "Lock-Token": n } }, r, i);
  return Ei(Ce(o, r), function(a) {
    if (Pe(r, a), a.status !== 204 && a.status !== 200) throw Ci(a);
  });
}), _f = ua(function(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { refreshToken: i, timeout: o = Af } = n, a = { Accept: "text/plain,application/xml", Timeout: o };
  i && (a.If = i);
  const l = Le({ url: be(r.remoteURL, ve(e)), method: "LOCK", headers: a, data: bf(r.contactHref) }, r, n);
  return Ei(Ce(l, r), function(h) {
    return Pe(r, h), Ei(h.text(), function(f) {
      const p = (m = f, new ta({ removeNSPrefix: !0, parseAttributeValue: !0, parseTagValue: !0 }).parse(m)), s = Wt().get(p, "prop.lockdiscovery.activelock.locktoken.href"), g = Wt().get(p, "prop.lockdiscovery.activelock.timeout");
      var m;
      if (!s) throw Ci(h, "No lock token received: ");
      return { token: s, serverTimeout: g };
    });
  });
}), Af = "Infinite, Second-4100000000";
function ei(r, e, n) {
  return n ? e ? e(r) : r : (r && r.then || (r = Promise.resolve(r)), e ? r.then(e) : r);
}
const If = /* @__PURE__ */ function(r) {
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
  return ei(Ce(i, r), function(o) {
    return Pe(r, o), ei(o.text(), function(a) {
      return ei(Rn(a, r.parsing), function(l) {
        const h = function(f) {
          try {
            const [p] = f.multistatus.response, { propstat: { prop: { "quota-used-bytes": s, "quota-available-bytes": g } } } = p;
            return s !== void 0 && g !== void 0 ? { used: parseInt(String(s), 10), available: Qc(g) } : null;
          } catch {
          }
          return null;
        }(l);
        return Mr(o, h, e.details);
      });
    });
  });
});
function ti(r, e, n) {
  return n ? e ? e(r) : r : (r && r.then || (r = Promise.resolve(r)), e ? r.then(e) : r);
}
const Nf = /* @__PURE__ */ function(r) {
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
  return ti(Ce(o, r), function(a) {
    return Pe(r, a), ti(a.text(), function(l) {
      return ti(Rn(l, r.parsing), function(h) {
        const f = function(p, s, g) {
          const m = { truncated: !1, results: [] };
          return m.truncated = p.multistatus.response.some((v) => {
            var b, y;
            return ((y = (v.status || ((b = v.propstat) == null ? void 0 : b.status)).split(" ", 3)) == null ? void 0 : y[1]) === "507" && v.href.replace(/\/$/, "").endsWith(ve(s).replace(/\/$/, ""));
          }), p.multistatus.response.forEach((v) => {
            if (v.propstat === void 0) return;
            const b = v.href.split("/").map(decodeURIComponent).join("/");
            m.results.push(Li(v.propstat.prop, b, g));
          }), m;
        }(h, e, i);
        return Mr(a, f, i);
      });
    });
  });
}), xf = /* @__PURE__ */ function(r) {
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
  return l = function(h) {
    Pe(r, h);
  }, (a = Ce(o, r)) && a.then || (a = Promise.resolve(a)), l ? a.then(l) : a;
  var a, l;
});
var Of = ge(172);
function Sf(r) {
  if (Ws(r)) return r.byteLength;
  if (Gs(r)) return r.length;
  if (typeof r == "string") return (0, Of.d)(r);
  throw new Ze({ info: { code: ir.DataTypeNoLength } }, "Cannot calculate data length: Invalid type");
}
const Rf = /* @__PURE__ */ function(r) {
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
  const { contentLength: o = !0, overwrite: a = !0 } = i, l = { "Content-Type": "application/octet-stream" };
  o === !1 || (l["Content-Length"] = typeof o == "number" ? `${o}` : `${Sf(n)}`), a || (l["If-None-Match"] = "*");
  const h = Le({ url: be(r.remoteURL, ve(e)), method: "PUT", headers: l, data: n }, r, i);
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
}), la = /* @__PURE__ */ function(r) {
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
  return a = function(l) {
    try {
      Pe(r, l);
    } catch (h) {
      throw h;
    }
    return { compliance: (l.headers.get("DAV") ?? "").split(",").map((h) => h.trim()), server: l.headers.get("Server") ?? "" };
  }, (o = Ce(i, r)) && o.then || (o = Promise.resolve(o)), a ? o.then(a) : o;
  var o, a;
});
function Qr(r, e, n) {
  return n ? e ? e(r) : r : (r && r.then || (r = Promise.resolve(r)), e ? r.then(e) : r);
}
const Cf = $i(function(r, e, n, i, o) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  if (n > i || n < 0) throw new Ze({ info: { code: ir.InvalidUpdateRange } }, `Invalid update range ${n} for partial update`);
  const l = { "Content-Type": "application/octet-stream", "Content-Length": "" + (i - n + 1), "Content-Range": `bytes ${n}-${i}/*` }, h = Le({ url: be(r.remoteURL, ve(e)), method: "PUT", headers: l, data: o }, r, a);
  return Qr(Ce(h, r), function(f) {
    Pe(r, f);
  });
});
function Jo(r, e) {
  var n = r();
  return n && n.then ? n.then(e) : e(n);
}
const Lf = $i(function(r, e, n, i, o) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  if (n > i || n < 0) throw new Ze({ info: { code: ir.InvalidUpdateRange } }, `Invalid update range ${n} for partial update`);
  const l = { "Content-Type": "application/x-sabredav-partialupdate", "Content-Length": "" + (i - n + 1), "X-Update-Range": `bytes=${n}-${i}` }, h = Le({ url: be(r.remoteURL, ve(e)), method: "PATCH", headers: l, data: o }, r, a);
  return Qr(Ce(h, r), function(f) {
    Pe(r, f);
  });
});
function $i(r) {
  return function() {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try {
      return Promise.resolve(r.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
const Pf = $i(function(r, e, n, i, o) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  return Qr(la(r, e, a), function(l) {
    let h = !1;
    return Jo(function() {
      if (l.compliance.includes("sabredav-partialupdate")) return Qr(Lf(r, e, n, i, o, a), function(f) {
        return h = !0, f;
      });
    }, function(f) {
      let p = !1;
      return h ? f : Jo(function() {
        if (l.server.includes("Apache") && l.compliance.includes("<http://apache.org/dav/propset/fs/1>")) return Qr(Cf(r, e, n, i, o, a), function(s) {
          return p = !0, s;
        });
      }, function(s) {
        if (p) return s;
        throw new Ze({ info: { code: ir.NotSupported } }, "Not supported");
      });
    });
  });
}), kf = "https://github.com/perry-mitchell/webdav-client/blob/master/LOCK_CONTACT.md";
function $f(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { authType: n = null, remoteBasePath: i, contactHref: o = kf, ha1: a, headers: l = {}, httpAgent: h, httpsAgent: f, password: p, token: s, username: g, withCredentials: m } = e;
  let v = n;
  v || (v = g || p ? nt.Password : nt.None);
  const b = { authType: v, remoteBasePath: i, contactHref: o, ha1: a, headers: Object.assign({}, l), httpAgent: h, httpsAgent: f, password: p, parsing: { attributeNamePrefix: e.attributeNamePrefix ?? "@", attributeParsers: [], tagParsers: [ra] }, remotePath: jl(r), remoteURL: r, token: s, username: g, withCredentials: m };
  return Us(b, g, p, s, a), { copyFile: (y, _, N) => Tc(b, y, _, N), createDirectory: (y, _) => yi(b, y, _), createReadStream: (y, _) => function(N, x) {
    let C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const L = new (Yo()).PassThrough();
    return nf(N, x, C).then((k) => {
      k.pipe(L);
    }).catch((k) => {
      L.emit("error", k);
    }), L;
  }(b, y, _), createWriteStream: (y, _, N) => function(x, C) {
    let L = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, k = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : of;
    const j = new (Yo()).PassThrough(), B = {};
    L.overwrite === !1 && (B["If-None-Match"] = "*");
    const Z = Le({ url: be(x.remoteURL, ve(C)), method: "PUT", headers: B, data: j, maxRedirects: 0 }, x, L);
    return Ce(Z, x).then((H) => Pe(x, H)).then((H) => {
      setTimeout(() => {
        k(H);
      }, 0);
    }).catch((H) => {
      j.emit("error", H);
    }), j;
  }(b, y, _, N), customRequest: (y, _) => sf(b, y, _), deleteFile: (y, _) => af(b, y, _), exists: (y, _) => uf(b, y, _), getDirectoryContents: (y, _) => lf(b, y, _), getFileContents: (y, _) => hf(b, y, _), getFileDownloadLink: (y) => function(_, N) {
    let x = be(_.remoteURL, ve(N));
    const C = /^https:/i.test(x) ? "https" : "http";
    switch (_.authType) {
      case nt.None:
        break;
      case nt.Password: {
        const L = So(_.headers.Authorization.replace(/^Basic /i, "").trim());
        x = x.replace(/^https?:\/\//, `${C}://${L}@`);
        break;
      }
      default:
        throw new Ze({ info: { code: ir.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${_.authType}`);
    }
    return x;
  }(b, y), getFileUploadLink: (y) => function(_, N) {
    let x = `${be(_.remoteURL, ve(N))}?Content-Type=application/octet-stream`;
    const C = /^https:/i.test(x) ? "https" : "http";
    switch (_.authType) {
      case nt.None:
        break;
      case nt.Password: {
        const L = So(_.headers.Authorization.replace(/^Basic /i, "").trim());
        x = x.replace(/^https?:\/\//, `${C}://${L}@`);
        break;
      }
      default:
        throw new Ze({ info: { code: ir.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${_.authType}`);
    }
    return x;
  }(b, y), getHeaders: () => Object.assign({}, b.headers), getQuota: (y) => If(b, y), lock: (y, _) => _f(b, y, _), moveFile: (y, _, N) => xf(b, y, _, N), putFileContents: (y, _, N) => Rf(b, y, _, N), partialUpdateFileContents: (y, _, N, x, C) => Pf(b, y, _, N, x, C), getDAVCompliance: (y) => la(b, y), search: (y, _) => Nf(b, y, _), setHeaders: (y) => {
    b.headers = Object.assign({}, y);
  }, stat: (y, _) => Pi(b, y, _), unlock: (y, _, N) => Tf(b, y, _, N), registerAttributeParser: (y) => {
    b.parsing.attributeParsers.push(y);
  }, registerTagParser: (y) => {
    b.parsing.tagParsers.push(y);
  } };
}
/*!
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
function Df(r = "") {
  let e = Ge.NONE;
  return r && (r.includes("G") && (e |= Ge.READ), r.includes("W") && (e |= Ge.WRITE), r.includes("CK") && (e |= Ge.CREATE), r.includes("NV") && (e |= Ge.UPDATE), r.includes("D") && (e |= Ge.DELETE), r.includes("R") && (e |= Ge.SHARE)), e;
}
const Mf = [
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
], Ff = {
  d: "DAV:",
  nc: "http://nextcloud.org/ns",
  oc: "http://owncloud.org/ns",
  ocs: "http://open-collaboration-services.org/ns"
};
function Uf() {
  return Te.davProperties ?? (Te.davProperties = [...Mf]), Te.davProperties.map((r) => `<${r} />`).join(" ");
}
function Bf() {
  return Te.davNamespaces ?? (Te.davNamespaces = { ...Ff }), Object.keys(Te.davNamespaces).map((r) => {
    var e;
    return `xmlns:${r}="${(e = Te.davNamespaces) == null ? void 0 : e[r]}"`;
  }).join(" ");
}
function jf() {
  return `<?xml version="1.0"?>
		<d:propfind ${Bf()}>
			<d:prop>
				${Uf()}
			</d:prop>
		</d:propfind>`;
}
function Wf() {
  var r;
  return Oi() ? `/files/${Dl()}` : `/files/${(r = Ni()) == null ? void 0 : r.uid}`;
}
const ca = Wf();
function Gf() {
  const r = Ru("dav");
  return Oi() ? r.replace("remote.php", "public.php") : r;
}
const fa = Gf();
function Vf(r = fa, e = {}) {
  const n = $f(r, { headers: e });
  function i(a) {
    n.setHeaders({
      ...e,
      // Add this so the server knows it is an request from the browser
      "X-Requested-With": "XMLHttpRequest",
      // Inject user auth
      requesttoken: a ?? ""
    });
  }
  return wu(i), i(mu()), Bs().patch("fetch", (a, l) => {
    const h = l.headers;
    return h != null && h.method && (l.method = h.method, delete h.method), fetch(a, l);
  }), n;
}
function zf(r, e = ca, n = fa) {
  var g, m;
  let i = (g = Ni()) == null ? void 0 : g.uid;
  if (Oi())
    i = i ?? "anonymous";
  else if (!i)
    throw new Error("No user id found");
  const o = r.props, a = Df(o == null ? void 0 : o.permissions), l = String((o == null ? void 0 : o["owner-id"]) || i), h = o.fileid || 0, f = new Date(Date.parse(r.lastmod)), p = new Date(Date.parse(o.creationdate)), s = {
    id: h,
    source: `${n}${r.filename}`,
    mtime: !isNaN(f.getTime()) && f.getTime() !== 0 ? f : void 0,
    crtime: !isNaN(p.getTime()) && p.getTime() !== 0 ? p : void 0,
    mime: r.mime || "application/octet-stream",
    // Manually cast to work around for https://github.com/perry-mitchell/webdav-client/pull/380
    displayname: o.displayname !== void 0 ? String(o.displayname) : void 0,
    size: (o == null ? void 0 : o.size) || Number.parseInt(o.getcontentlength || "0"),
    // The fileid is set to -1 for failed requests
    status: h < 0 ? Is.FAILED : void 0,
    permissions: a,
    owner: l,
    root: e,
    attributes: {
      ...r,
      ...o,
      hasPreview: o == null ? void 0 : o["has-preview"]
    }
  };
  return (m = s.attributes) == null || delete m.props, r.type === "file" ? new Nu(s) : new xu(s);
}
class Qt {
  static getFileConfig({
    name: e,
    url: n,
    downloadUrl: i,
    dir: o,
    onCreate: a,
    fileModifiedTime: l,
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
      url: n ? Xe(n) : "",
      dir: o || "",
      onCreate: a,
      fileModifiedTime: l || null,
      isNew: h || !1,
      isLoaded: f || !1,
      sameWindow: p || !1,
      skipConfirmation: s || !1,
      permissions: g || Ge.NONE,
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
    const a = Vf(), l = `${ca}${o}`;
    try {
      if (await a.putFileContents(l, e, { overwrite: !1 })) {
        const f = await a.stat(l, { details: !0, data: jf() });
        return pu("files:node:created", zf(f.data)), !0;
      }
    } catch (h) {
      console.error(h);
    }
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
}
const Ko = (r) => {
  if (!(r != null && r.name) || !(r != null && r.templateName))
    return r;
  const [, e] = r.templateName.split(".") ?? [], n = r.name.toLocaleLowerCase();
  return e && !n.endsWith(e.toLocaleLowerCase()) && (r.name += `.${e}`), r;
};
function Qo(r) {
  let e, n = (
    /*t*/
    r[3]("files_linkeditor", "File name") + ""
  ), i, o, a, l, h, f, p;
  return {
    c() {
      e = ne("label"), i = Be(n), o = Ee(), a = ne("br"), l = Ee(), h = ne("input"), G(h, "type", "text"), Ti(h, "width", "100%"), G(h, "class", "input-wide"), h.autofocus = !0, G(h, "data-cy", "name-input");
    },
    m(s, g) {
      he(s, e, g), Y(e, i), Y(e, o), Y(e, a), Y(e, l), Y(e, h), wn(
        h,
        /*file*/
        r[0].name
      ), h.focus(), f || (p = [
        it(
          h,
          "input",
          /*input_input_handler*/
          r[7]
        ),
        it(
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
      s[0].name && wn(
        h,
        /*file*/
        s[0].name
      );
    },
    d(s) {
      s && fe(e), f = !1, qt(p);
    }
  };
}
function es(r) {
  let e, n = (
    /*t*/
    r[3]("files_linkeditor", "Create") + ""
  ), i, o, a;
  return {
    c() {
      e = ne("button"), i = Be(n), G(e, "type", "submit"), e.disabled = /*isConflicting*/
      r[2], G(e, "class", "primary button");
    },
    m(l, h) {
      he(l, e, h), Y(e, i), o || (a = it(e, "click", zt(
        /*save*/
        r[6]
      )), o = !0);
    },
    p(l, h) {
      h & /*isConflicting*/
      4 && (e.disabled = /*isConflicting*/
      l[2]);
    },
    d(l) {
      l && fe(e), o = !1, a();
    }
  };
}
function qf(r) {
  let e, n, i, o, a, l, h, f = (
    /*t*/
    r[3]("files_linkeditor", "Cancel") + ""
  ), p, s, g, m, v = !/*loading*/
  r[1] && Qo(r), b = !/*loading*/
  r[1] && es(r);
  return {
    c() {
      e = ne("form"), n = ne("div"), i = ne("h3"), i.textContent = `${window.t("files_linkeditor", "New link")}`, o = Ee(), v && v.c(), a = Ee(), l = ne("div"), h = ne("a"), p = Be(f), s = Ee(), b && b.c(), G(n, "class", "edit"), G(h, "href", window.location.href), G(h, "class", "cancel button"), G(l, "class", "oc-dialog-buttonrow twobuttons"), G(
        e,
        "action",
        /*OC*/
        r[4].generateUrl("/")
      ), G(e, "method", "post");
    },
    m(y, _) {
      he(y, e, _), Y(e, n), Y(n, i), Y(n, o), v && v.m(n, null), Y(e, a), Y(e, l), Y(l, h), Y(h, p), Y(l, s), b && b.m(l, null), g || (m = [
        it(h, "click", zt(
          /*click_handler*/
          r[8]
        )),
        it(e, "submit", zt(
          /*save*/
          r[6]
        ))
      ], g = !0);
    },
    p(y, _) {
      /*loading*/
      y[1] ? v && (v.d(1), v = null) : v ? v.p(y, _) : (v = Qo(y), v.c(), v.m(n, null)), /*loading*/
      y[1] ? b && (b.d(1), b = null) : b ? b.p(y, _) : (b = es(y), b.c(), b.m(l, null));
    },
    d(y) {
      y && fe(e), v && v.d(), b && b.d(), g = !1, qt(m);
    }
  };
}
function Hf(r) {
  let e, n;
  return e = new _i({
    props: {
      loading: (
        /*loading*/
        r[1]
      ),
      $$slots: { default: [qf] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      kr(e.$$.fragment);
    },
    m(i, o) {
      yr(e, i, o), n = !0;
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
      ct(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Er(e, i);
    }
  };
}
function Xf(r, e, n) {
  let i, o, a;
  const l = window.t, h = window.OC, f = (b, y) => {
    const _ = {
      name: b,
      templateName: i.templateName
    }, N = Ko(_);
    return ((y == null ? void 0 : y.map((C) => C.basename)) ?? []).includes(N.name);
  };
  let p;
  In(() => {
    p = Dt.subscribe((b) => {
      n(0, i = b), i && (i.isLoaded || i.isNew) && (n(1, o = !1), s());
    });
  }), Nn(() => {
    p();
  });
  const s = () => {
    f(i.name, i.existingContents) ? n(2, a = !0) : n(2, a = !1);
  }, g = () => {
    f(i.name, i.existingContents) || (n(1, o = !0), i.onCreate(Ko({ ...i })));
  };
  function m() {
    i.name = this.value, n(0, i);
  }
  const v = () => {
    ft.update(() => "none");
  };
  return n(0, i = Qt.getFileConfig()), n(1, o = !0), n(2, a = !0), [
    i,
    o,
    a,
    l,
    h,
    s,
    g,
    m,
    v
  ];
}
class Yf extends Dr {
  constructor(e) {
    super(), $r(this, e, Xf, Hf, wr, {});
  }
}
function ts(r) {
  let e, n;
  return e = new Yf({}), {
    c() {
      kr(e.$$.fragment);
    },
    m(i, o) {
      yr(e, i, o), n = !0;
    },
    i(i) {
      n || (Ue(e.$$.fragment, i), n = !0);
    },
    o(i) {
      ct(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Er(e, i);
    }
  };
}
function rs(r) {
  let e, n;
  return e = new ll({}), {
    c() {
      kr(e.$$.fragment);
    },
    m(i, o) {
      yr(e, i, o), n = !0;
    },
    i(i) {
      n || (Ue(e.$$.fragment, i), n = !0);
    },
    o(i) {
      ct(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Er(e, i);
    }
  };
}
function ns(r) {
  let e, n;
  return e = new $l({}), {
    c() {
      kr(e.$$.fragment);
    },
    m(i, o) {
      yr(e, i, o), n = !0;
    },
    i(i) {
      n || (Ue(e.$$.fragment, i), n = !0);
    },
    o(i) {
      ct(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Er(e, i);
    }
  };
}
function Zf(r) {
  let e, n, i, o, a = (
    /*viewMode*/
    r[0] === "filename" && ts()
  ), l = (
    /*viewMode*/
    r[0] === "view" && rs()
  ), h = (
    /*viewMode*/
    r[0] === "edit" && ns()
  );
  return {
    c() {
      a && a.c(), e = Ee(), l && l.c(), n = Ee(), h && h.c(), i = Ia();
    },
    m(f, p) {
      a && a.m(f, p), he(f, e, p), l && l.m(f, p), he(f, n, p), h && h.m(f, p), he(f, i, p), o = !0;
    },
    p(f, [p]) {
      /*viewMode*/
      f[0] === "filename" ? a ? p & /*viewMode*/
      1 && Ue(a, 1) : (a = ts(), a.c(), Ue(a, 1), a.m(e.parentNode, e)) : a && (Dn(), ct(a, 1, 1, () => {
        a = null;
      }), Mn()), /*viewMode*/
      f[0] === "view" ? l ? p & /*viewMode*/
      1 && Ue(l, 1) : (l = rs(), l.c(), Ue(l, 1), l.m(n.parentNode, n)) : l && (Dn(), ct(l, 1, 1, () => {
        l = null;
      }), Mn()), /*viewMode*/
      f[0] === "edit" ? h ? p & /*viewMode*/
      1 && Ue(h, 1) : (h = ns(), h.c(), Ue(h, 1), h.m(i.parentNode, i)) : h && (Dn(), ct(h, 1, 1, () => {
        h = null;
      }), Mn());
    },
    i(f) {
      o || (Ue(a), Ue(l), Ue(h), o = !0);
    },
    o(f) {
      ct(a), ct(l), ct(h), o = !1;
    },
    d(f) {
      f && (fe(e), fe(n), fe(i)), a && a.d(f), l && l.d(f), h && h.d(f);
    }
  };
}
function Jf(r, e, n) {
  let i, o;
  return In(() => {
    o = ft.subscribe((a) => {
      n(0, i = a);
    });
  }), Nn(() => {
    o();
  }), n(0, i = ""), [i];
}
class Kf extends Dr {
  constructor(e) {
    super(), $r(this, e, Jf, Zf, wr, {});
  }
}
const is = "application/internet-shortcut", ri = () => '<span class="icon-link" style="display: block;"></span>';
window.OC.dialogs.alert = function(r, e) {
  window.OC.dialogs.message(
    t("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."),
    t("files_linkeditor", "A slight problem"),
    "alert",
    71
    // Dialogs.OK_BUTTONS
  );
};
class Rr {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    po({
      id: "editLink",
      displayName: () => t("files_linkeditor", "Edit link"),
      iconSvgInline: ri,
      exec: async ({ folder: n }) => {
        await Rr.loadAndChangeViewMode({
          fileName: n.basename,
          dirName: n.dirname,
          nextViewMode: "edit",
          permissions: n.permissions
        });
      },
      enabled: ({ nodes: n }) => window.OC.currentUser && n.every((i) => i.permissions >= Ge.UPDATE && is.includes(i.mime))
    }), po({
      id: "viewLink",
      displayName: () => t("files_linkeditor", "View link"),
      title: () => "Hello",
      iconSvgInline: ri,
      exec: async ({ folder: n }) => {
        window.OC.currentUser ? await Rr.loadAndChangeViewMode({
          fileName: n.basename,
          dirName: n.dirname,
          nextViewMode: "view",
          permissions: n.permissions
        }) : await Rr.loadAndChangeViewMode({
          fileName: n.displayname ?? n.basename,
          dirName: n.dirname,
          nextViewMode: "view",
          // TODO:
          downloadUrl: n.source,
          publicUser: !0,
          permissions: n.permissions
        });
      },
      enabled: ({ nodes: n }) => n.every((i) => i.permissions >= Ge.READ && is.includes(i.mime)),
      default: Ls.DEFAULT
    });
    const e = ({ id: n, displayName: i, templateName: o }) => {
      ol({
        id: n,
        displayName: i,
        enabled: (a) => a.permissions >= Ge.CREATE,
        iconSvgInline: ri(),
        category: Ps.CreateNew,
        handler: (a, l) => {
          const h = a.path;
          ft.update(() => "filename"), Dt.update(
            () => Qt.getFileConfig({
              name: o,
              templateName: o,
              dir: h,
              isNew: !0,
              existingContents: l,
              onCreate: async (f) => {
                ft.update(() => "edit"), Dt.update(
                  () => Qt.getFileConfig({
                    name: f.name,
                    dir: f.dir,
                    isNew: !0,
                    onCreate: async (p) => {
                      await Rr.saveAndChangeViewMode(p);
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
  static async loadAndChangeViewMode({ fileName: e, dirName: n, nextViewMode: i, publicUser: o, downloadUrl: a, permissions: l }) {
    ft.update(() => i), Dt.update(
      () => Qt.getFileConfig({
        name: e,
        dir: n || "",
        permissions: l,
        isPublicLink: o
      })
    );
    let h = {};
    if (o ? h = await Qt.loadPublic({ downloadUrl: a }) : h = await Qt.load({ fileName: e, dir: n }), h) {
      const f = lt.getExtension(e);
      let p = {};
      f === "webloc" ? p = lt.parseWeblocFile(h.filecontents) : p = lt.parseURLFile(h.filecontents), Dt.update(
        (s) => Qt.getFileConfig({
          ...s,
          ...p,
          fileModifiedTime: h.mtime,
          isLoaded: !0
        })
      );
    } else
      window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async saveAndChangeViewMode({ name: e, dir: n, url: i, fileModifiedTime: o, sameWindow: a, skipConfirmation: l }) {
    const h = lt.getExtension(e);
    let f = "";
    h === "webloc" ? f = lt.generateWeblocFileContent("", i, a, l) : f = lt.generateURLFileContent("", i, a, l), await Qt.save({ fileContent: f, name: e, dir: n, fileModifiedTime: o }), ft.update(() => "none");
  }
}
const Qf = [];
Qf.push(
  new Kf({
    target: document.body,
    props: {}
  })
);
er.registerFileActions();
Rr.registerFileActions();
