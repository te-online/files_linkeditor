var Wp = Object.defineProperty;
var Vp = (r, e, n) => e in r ? Wp(r, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[e] = n;
var Sn = (r, e, n) => (Vp(r, typeof e != "symbol" ? e + "" : e, n), n);
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
    return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
    i(s);
  new MutationObserver((s) => {
    for (const c of s)
      if (c.type === "childList")
        for (const g of c.addedNodes)
          g.tagName === "LINK" && g.rel === "modulepreload" && i(g);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const c = {};
    return s.integrity && (c.integrity = s.integrity), s.referrerPolicy && (c.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? c.credentials = "include" : s.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c;
  }
  function i(s) {
    if (s.ep)
      return;
    s.ep = !0;
    const c = n(s);
    fetch(s.href, c);
  }
})();
function ar() {
}
function qp(r, e) {
  for (const n in e)
    r[n] = e[n];
  return (
    /** @type {T & S} */
    r
  );
}
function sc(r) {
  return r();
}
function ks() {
  return /* @__PURE__ */ Object.create(null);
}
function kr(r) {
  r.forEach(sc);
}
function Ga(r) {
  return typeof r == "function";
}
function vn(r, e) {
  return r != r ? e == e : r !== e || r && typeof r == "object" || typeof r == "function";
}
function zp(r) {
  return Object.keys(r).length === 0;
}
function Hp(r, e, n, i) {
  if (r) {
    const s = uc(r, e, n, i);
    return r[0](s);
  }
}
function uc(r, e, n, i) {
  return r[1] && i ? qp(n.ctx.slice(), r[1](i(e))) : n.ctx;
}
function Xp(r, e, n, i) {
  if (r[2] && i) {
    const s = r[2](i(n));
    if (e.dirty === void 0)
      return s;
    if (typeof s == "object") {
      const c = [], g = Math.max(e.dirty.length, s.length);
      for (let d = 0; d < g; d += 1)
        c[d] = e.dirty[d] | s[d];
      return c;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function Yp(r, e, n, i, s, c) {
  if (s) {
    const g = uc(e, n, i, c);
    r.p(g, s);
  }
}
function Kp(r) {
  if (r.ctx.length > 32) {
    const e = [], n = r.ctx.length / 32;
    for (let i = 0; i < n; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
const li = globalThis || void 0 || self;
function Ne(r, e) {
  r.appendChild(e);
}
function We(r, e, n) {
  r.insertBefore(e, n || null);
}
function Ge(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function Fe(r) {
  return document.createElement(r);
}
function Tt(r) {
  return document.createTextNode(r);
}
function nt() {
  return Tt(" ");
}
function Zp() {
  return Tt("");
}
function gr(r, e, n, i) {
  return r.addEventListener(e, n, i), () => r.removeEventListener(e, n, i);
}
function ln(r) {
  return function(e) {
    return e.preventDefault(), r.call(this, e);
  };
}
function ve(r, e, n) {
  n == null ? r.removeAttribute(e) : r.getAttribute(e) !== n && r.setAttribute(e, n);
}
function Jp(r) {
  return Array.from(r.childNodes);
}
function Wa(r, e) {
  e = "" + e, r.data !== e && (r.data = /** @type {string} */
  e);
}
function Ms(r, e) {
  r.value = e ?? "";
}
function lc(r, e, n, i) {
  n == null ? r.style.removeProperty(e) : r.style.setProperty(e, n, i ? "important" : "");
}
let Un;
function kn(r) {
  Un = r;
}
function cc() {
  if (!Un)
    throw new Error("Function called outside component initialization");
  return Un;
}
function Va(r) {
  cc().$$.on_mount.push(r);
}
function qa(r) {
  cc().$$.on_destroy.push(r);
}
const rn = [], Bs = [];
let an = [];
const Us = [], Qp = /* @__PURE__ */ Promise.resolve();
let ca = !1;
function eh() {
  ca || (ca = !0, Qp.then(fc));
}
function fa(r) {
  an.push(r);
}
const wo = /* @__PURE__ */ new Set();
let zr = 0;
function fc() {
  if (zr !== 0)
    return;
  const r = Un;
  do {
    try {
      for (; zr < rn.length; ) {
        const e = rn[zr];
        zr++, kn(e), th(e.$$);
      }
    } catch (e) {
      throw rn.length = 0, zr = 0, e;
    }
    for (kn(null), rn.length = 0, zr = 0; Bs.length; )
      Bs.pop()();
    for (let e = 0; e < an.length; e += 1) {
      const n = an[e];
      wo.has(n) || (wo.add(n), n());
    }
    an.length = 0;
  } while (rn.length);
  for (; Us.length; )
    Us.pop()();
  ca = !1, wo.clear(), kn(r);
}
function th(r) {
  if (r.fragment !== null) {
    r.update(), kr(r.before_update);
    const e = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, e), r.after_update.forEach(fa);
  }
}
function rh(r) {
  const e = [], n = [];
  an.forEach((i) => r.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), an = e;
}
const _i = /* @__PURE__ */ new Set();
let Nr;
function Ds() {
  Nr = {
    r: 0,
    c: [],
    p: Nr
    // parent group
  };
}
function js() {
  Nr.r || kr(Nr.c), Nr = Nr.p;
}
function kt(r, e) {
  r && r.i && (_i.delete(r), r.i(e));
}
function hr(r, e, n, i) {
  if (r && r.o) {
    if (_i.has(r))
      return;
    _i.add(r), Nr.c.push(() => {
      _i.delete(r), i && (n && r.d(1), i());
    }), r.o(e);
  } else
    i && i();
}
function Di(r) {
  r && r.c();
}
function Wn(r, e, n) {
  const { fragment: i, after_update: s } = r.$$;
  i && i.m(e, n), fa(() => {
    const c = r.$$.on_mount.map(sc).filter(Ga);
    r.$$.on_destroy ? r.$$.on_destroy.push(...c) : kr(c), r.$$.on_mount = [];
  }), s.forEach(fa);
}
function Vn(r, e) {
  const n = r.$$;
  n.fragment !== null && (rh(n.after_update), kr(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function nh(r, e) {
  r.$$.dirty[0] === -1 && (rn.push(r), eh(), r.$$.dirty.fill(0)), r.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function qn(r, e, n, i, s, c, g = null, d = [-1]) {
  const y = Un;
  kn(r);
  const l = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: c,
    update: ar,
    not_equal: s,
    bound: ks(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (y ? y.$$.context : [])),
    // everything else
    callbacks: ks(),
    dirty: d,
    skip_bound: !1,
    root: e.target || y.$$.root
  };
  g && g(l.root);
  let a = !1;
  if (l.ctx = n ? n(r, e.props || {}, (v, p, ...E) => {
    const S = E.length ? E[0] : p;
    return l.ctx && s(l.ctx[v], l.ctx[v] = S) && (!l.skip_bound && l.bound[v] && l.bound[v](S), a && nh(r, v)), p;
  }) : [], l.update(), a = !0, kr(l.before_update), l.fragment = i ? i(l.ctx) : !1, e.target) {
    if (e.hydrate) {
      const v = Jp(e.target);
      l.fragment && l.fragment.l(v), v.forEach(Ge);
    } else
      l.fragment && l.fragment.c();
    e.intro && kt(r.$$.fragment), Wn(r, e.target, e.anchor), fc();
  }
  kn(y);
}
class zn {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Sn(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Sn(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Vn(this, 1), this.$destroy = ar;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!Ga(n))
      return ar;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const s = i.indexOf(n);
      s !== -1 && i.splice(s, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !zp(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const ih = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ih);
function oh(r) {
  let e, n, i, s, c;
  const g = (
    /*#slots*/
    r[2].default
  ), d = Hp(
    g,
    r,
    /*$$scope*/
    r[1],
    null
  );
  return {
    c() {
      e = Fe("div"), n = nt(), i = Fe("div"), d && d.c(), ve(e, "class", "oc-dialog-dim"), ve(i, "class", s = `oc-dialog ${/*loading*/
      r[0] ? "icon-loading" : ""}`), lc(i, "position", "fixed");
    },
    m(y, l) {
      We(y, e, l), We(y, n, l), We(y, i, l), d && d.m(i, null), c = !0;
    },
    p(y, [l]) {
      d && d.p && (!c || l & /*$$scope*/
      2) && Yp(
        d,
        g,
        y,
        /*$$scope*/
        y[1],
        c ? Xp(
          g,
          /*$$scope*/
          y[1],
          l,
          null
        ) : Kp(
          /*$$scope*/
          y[1]
        ),
        null
      ), (!c || l & /*loading*/
      1 && s !== (s = `oc-dialog ${/*loading*/
      y[0] ? "icon-loading" : ""}`)) && ve(i, "class", s);
    },
    i(y) {
      c || (kt(d, y), c = !0);
    },
    o(y) {
      hr(d, y), c = !1;
    },
    d(y) {
      y && (Ge(e), Ge(n), Ge(i)), d && d.d(y);
    }
  };
}
function ah(r, e, n) {
  let { $$slots: i = {}, $$scope: s } = e, { loading: c = !1 } = e;
  return r.$$set = (g) => {
    "loading" in g && n(0, c = g.loading), "$$scope" in g && n(1, s = g.$$scope);
  }, [c, s, i];
}
class pc extends zn {
  constructor(e) {
    super(), qn(this, e, ah, oh, vn, { loading: 0 });
  }
}
const Hr = [];
function hc(r, e = ar) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function s(d) {
    if (vn(r, d) && (r = d, n)) {
      const y = !Hr.length;
      for (const l of i)
        l[1](), Hr.push(l, r);
      if (y) {
        for (let l = 0; l < Hr.length; l += 2)
          Hr[l][0](Hr[l + 1]);
        Hr.length = 0;
      }
    }
  }
  function c(d) {
    s(d(r));
  }
  function g(d, y = ar) {
    const l = [d, y];
    return i.add(l), i.size === 1 && (n = e(s, c) || ar), d(r), () => {
      i.delete(l), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: s, update: c, subscribe: g };
}
var ci = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function za(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function sh(r) {
  if (r.__esModule)
    return r;
  var e = r.default;
  if (typeof e == "function") {
    var n = function i() {
      return this instanceof i ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(r).forEach(function(i) {
    var s = Object.getOwnPropertyDescriptor(r, i);
    Object.defineProperty(n, i, s.get ? s : {
      enumerable: !0,
      get: function() {
        return r[i];
      }
    });
  }), n;
}
var Ha = {};
Object.defineProperty(Ha, "__esModule", { value: !0 });
var gt = Ha.sanitizeUrl = void 0, uh = /^([^\w]*)(javascript|data|vbscript)/im, lh = /&#(\w+)(^\w|;)?/g, ch = /&(newline|tab);/gi, fh = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, ph = /^.+(:|&colon;)/gim, hh = [".", "/"];
function dh(r) {
  return hh.indexOf(r[0]) > -1;
}
function gh(r) {
  return r.replace(lh, function(e, n) {
    return String.fromCharCode(n);
  });
}
function vh(r) {
  var e = gh(r || "").replace(ch, "").replace(fh, "").trim();
  if (!e)
    return "about:blank";
  if (dh(e))
    return e;
  var n = e.match(ph);
  if (!n)
    return e;
  var i = n[0];
  return uh.test(i) ? "about:blank" : e;
}
gt = Ha.sanitizeUrl = vh;
class Ft {
  static getFileConfig({
    name: e,
    url: n,
    downloadUrl: i,
    dir: s,
    onCreate: c,
    fileModifiedTime: g,
    isNew: d,
    isLoaded: y,
    sameWindow: l,
    skipConfirmation: a
  } = {}) {
    return {
      name: e || "?",
      downloadUrl: i || "",
      url: n ? gt(n) : "",
      dir: s || "",
      onCreate: c,
      fileModifiedTime: g || null,
      isNew: d || !1,
      isLoaded: y || !1,
      sameWindow: l || !1,
      skipConfirmation: a || !1
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
  static async save({ fileContent: e, name: n, fileModifiedTime: i, dir: s } = {}) {
    let c = `${s}${n}`;
    s !== "/" && (c = `${s}/${n}`);
    const g = await window.fetch(window.OC.generateUrl("/apps/files_linkeditor/ajax/savefile"), {
      method: "PUT",
      body: JSON.stringify({
        filecontents: e,
        path: c,
        mtime: i
      }),
      headers: {
        requesttoken: window.OC.requestToken,
        "Content-Type": "application/json"
      }
    });
    if (g && g.ok)
      return !0;
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static userCanEdit() {
    var e, n, i, s;
    return window.FileList && window.OC && window.OC.currentUser && (window.OC.PERMISSION_ALL === ((n = (e = window.FileList) == null ? void 0 : e.getDirectoryPermissions) == null ? void 0 : n.call(e)) || window.OC.PERMISSION_UPDATE === ((s = (i = window.FileList) == null ? void 0 : i.getDirectoryPermissions) == null ? void 0 : s.call(i)));
  }
}
const sr = hc(""), Rr = hc(Ft.getFileConfig());
function mh(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var dc = { exports: {} }, He = dc.exports = {}, nr, ir;
function pa() {
  throw new Error("setTimeout has not been defined");
}
function ha() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? nr = setTimeout : nr = pa;
  } catch {
    nr = pa;
  }
  try {
    typeof clearTimeout == "function" ? ir = clearTimeout : ir = ha;
  } catch {
    ir = ha;
  }
})();
function gc(r) {
  if (nr === setTimeout)
    return setTimeout(r, 0);
  if ((nr === pa || !nr) && setTimeout)
    return nr = setTimeout, setTimeout(r, 0);
  try {
    return nr(r, 0);
  } catch {
    try {
      return nr.call(null, r, 0);
    } catch {
      return nr.call(this, r, 0);
    }
  }
}
function yh(r) {
  if (ir === clearTimeout)
    return clearTimeout(r);
  if ((ir === ha || !ir) && clearTimeout)
    return ir = clearTimeout, clearTimeout(r);
  try {
    return ir(r);
  } catch {
    try {
      return ir.call(null, r);
    } catch {
      return ir.call(this, r);
    }
  }
}
var dr = [], sn = !1, Pr, xi = -1;
function wh() {
  !sn || !Pr || (sn = !1, Pr.length ? dr = Pr.concat(dr) : xi = -1, dr.length && vc());
}
function vc() {
  if (!sn) {
    var r = gc(wh);
    sn = !0;
    for (var e = dr.length; e; ) {
      for (Pr = dr, dr = []; ++xi < e; )
        Pr && Pr[xi].run();
      xi = -1, e = dr.length;
    }
    Pr = null, sn = !1, yh(r);
  }
}
He.nextTick = function(r) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var n = 1; n < arguments.length; n++)
      e[n - 1] = arguments[n];
  dr.push(new mc(r, e)), dr.length === 1 && !sn && gc(vc);
};
function mc(r, e) {
  this.fun = r, this.array = e;
}
mc.prototype.run = function() {
  this.fun.apply(null, this.array);
};
He.title = "browser";
He.browser = !0;
He.env = {};
He.argv = [];
He.version = "";
He.versions = {};
function mr() {
}
He.on = mr;
He.addListener = mr;
He.once = mr;
He.off = mr;
He.removeListener = mr;
He.removeAllListeners = mr;
He.emit = mr;
He.prependListener = mr;
He.prependOnceListener = mr;
He.listeners = function(r) {
  return [];
};
He.binding = function(r) {
  throw new Error("process.binding is not supported");
};
He.cwd = function() {
  return "/";
};
He.chdir = function(r) {
  throw new Error("process.chdir is not supported");
};
He.umask = function() {
  return 0;
};
var bh = dc.exports;
const Mt = /* @__PURE__ */ mh(bh), Eh = typeof Mt == "object" && Mt.env && Mt.env.NODE_DEBUG && /\bsemver\b/i.test(Mt.env.NODE_DEBUG) ? (...r) => console.error("SEMVER", ...r) : () => {
};
var yc = Eh;
const Th = "2.0.0", wc = 256, Oh = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, Sh = 16, $h = wc - 6, Ih = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var bc = {
  MAX_LENGTH: wc,
  MAX_SAFE_COMPONENT_LENGTH: Sh,
  MAX_SAFE_BUILD_LENGTH: $h,
  MAX_SAFE_INTEGER: Oh,
  RELEASE_TYPES: Ih,
  SEMVER_SPEC_VERSION: Th,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
}, da = { exports: {} };
(function(r, e) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: n,
    MAX_SAFE_BUILD_LENGTH: i,
    MAX_LENGTH: s
  } = bc, c = yc;
  e = r.exports = {};
  const g = e.re = [], d = e.safeRe = [], y = e.src = [], l = e.t = {};
  let a = 0;
  const v = "[a-zA-Z0-9-]", p = [
    ["\\s", 1],
    ["\\d", s],
    [v, i]
  ], E = (_) => {
    for (const [P, D] of p)
      _ = _.split(`${P}*`).join(`${P}{0,${D}}`).split(`${P}+`).join(`${P}{1,${D}}`);
    return _;
  }, S = (_, P, D) => {
    const I = E(P), x = a++;
    c(_, x, P), l[_] = x, y[x] = P, g[x] = new RegExp(P, D ? "g" : void 0), d[x] = new RegExp(I, D ? "g" : void 0);
  };
  S("NUMERICIDENTIFIER", "0|[1-9]\\d*"), S("NUMERICIDENTIFIERLOOSE", "\\d+"), S("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${v}*`), S("MAINVERSION", `(${y[l.NUMERICIDENTIFIER]})\\.(${y[l.NUMERICIDENTIFIER]})\\.(${y[l.NUMERICIDENTIFIER]})`), S("MAINVERSIONLOOSE", `(${y[l.NUMERICIDENTIFIERLOOSE]})\\.(${y[l.NUMERICIDENTIFIERLOOSE]})\\.(${y[l.NUMERICIDENTIFIERLOOSE]})`), S("PRERELEASEIDENTIFIER", `(?:${y[l.NUMERICIDENTIFIER]}|${y[l.NONNUMERICIDENTIFIER]})`), S("PRERELEASEIDENTIFIERLOOSE", `(?:${y[l.NUMERICIDENTIFIERLOOSE]}|${y[l.NONNUMERICIDENTIFIER]})`), S("PRERELEASE", `(?:-(${y[l.PRERELEASEIDENTIFIER]}(?:\\.${y[l.PRERELEASEIDENTIFIER]})*))`), S("PRERELEASELOOSE", `(?:-?(${y[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${y[l.PRERELEASEIDENTIFIERLOOSE]})*))`), S("BUILDIDENTIFIER", `${v}+`), S("BUILD", `(?:\\+(${y[l.BUILDIDENTIFIER]}(?:\\.${y[l.BUILDIDENTIFIER]})*))`), S("FULLPLAIN", `v?${y[l.MAINVERSION]}${y[l.PRERELEASE]}?${y[l.BUILD]}?`), S("FULL", `^${y[l.FULLPLAIN]}$`), S("LOOSEPLAIN", `[v=\\s]*${y[l.MAINVERSIONLOOSE]}${y[l.PRERELEASELOOSE]}?${y[l.BUILD]}?`), S("LOOSE", `^${y[l.LOOSEPLAIN]}$`), S("GTLT", "((?:<|>)?=?)"), S("XRANGEIDENTIFIERLOOSE", `${y[l.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), S("XRANGEIDENTIFIER", `${y[l.NUMERICIDENTIFIER]}|x|X|\\*`), S("XRANGEPLAIN", `[v=\\s]*(${y[l.XRANGEIDENTIFIER]})(?:\\.(${y[l.XRANGEIDENTIFIER]})(?:\\.(${y[l.XRANGEIDENTIFIER]})(?:${y[l.PRERELEASE]})?${y[l.BUILD]}?)?)?`), S("XRANGEPLAINLOOSE", `[v=\\s]*(${y[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${y[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${y[l.XRANGEIDENTIFIERLOOSE]})(?:${y[l.PRERELEASELOOSE]})?${y[l.BUILD]}?)?)?`), S("XRANGE", `^${y[l.GTLT]}\\s*${y[l.XRANGEPLAIN]}$`), S("XRANGELOOSE", `^${y[l.GTLT]}\\s*${y[l.XRANGEPLAINLOOSE]}$`), S("COERCE", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`), S("COERCERTL", y[l.COERCE], !0), S("LONETILDE", "(?:~>?)"), S("TILDETRIM", `(\\s*)${y[l.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", S("TILDE", `^${y[l.LONETILDE]}${y[l.XRANGEPLAIN]}$`), S("TILDELOOSE", `^${y[l.LONETILDE]}${y[l.XRANGEPLAINLOOSE]}$`), S("LONECARET", "(?:\\^)"), S("CARETTRIM", `(\\s*)${y[l.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", S("CARET", `^${y[l.LONECARET]}${y[l.XRANGEPLAIN]}$`), S("CARETLOOSE", `^${y[l.LONECARET]}${y[l.XRANGEPLAINLOOSE]}$`), S("COMPARATORLOOSE", `^${y[l.GTLT]}\\s*(${y[l.LOOSEPLAIN]})$|^$`), S("COMPARATOR", `^${y[l.GTLT]}\\s*(${y[l.FULLPLAIN]})$|^$`), S("COMPARATORTRIM", `(\\s*)${y[l.GTLT]}\\s*(${y[l.LOOSEPLAIN]}|${y[l.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", S("HYPHENRANGE", `^\\s*(${y[l.XRANGEPLAIN]})\\s+-\\s+(${y[l.XRANGEPLAIN]})\\s*$`), S("HYPHENRANGELOOSE", `^\\s*(${y[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${y[l.XRANGEPLAINLOOSE]})\\s*$`), S("STAR", "(<|>)?=?\\s*\\*"), S("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), S("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(da, da.exports);
var Ah = da.exports;
const _h = Object.freeze({ loose: !0 }), xh = Object.freeze({}), Nh = (r) => r ? typeof r != "object" ? _h : r : xh;
var Ph = Nh;
const Gs = /^[0-9]+$/, Ec = (r, e) => {
  const n = Gs.test(r), i = Gs.test(e);
  return n && i && (r = +r, e = +e), r === e ? 0 : n && !i ? -1 : i && !n ? 1 : r < e ? -1 : 1;
}, Rh = (r, e) => Ec(e, r);
var Ch = {
  compareIdentifiers: Ec,
  rcompareIdentifiers: Rh
};
const fi = yc, { MAX_LENGTH: Ws, MAX_SAFE_INTEGER: pi } = bc, { safeRe: Vs, t: qs } = Ah, Lh = Ph, { compareIdentifiers: Xr } = Ch;
let Fh = class rr {
  constructor(e, n) {
    if (n = Lh(n), e instanceof rr) {
      if (e.loose === !!n.loose && e.includePrerelease === !!n.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
    if (e.length > Ws)
      throw new TypeError(
        `version is longer than ${Ws} characters`
      );
    fi("SemVer", e, n), this.options = n, this.loose = !!n.loose, this.includePrerelease = !!n.includePrerelease;
    const i = e.trim().match(n.loose ? Vs[qs.LOOSE] : Vs[qs.FULL]);
    if (!i)
      throw new TypeError(`Invalid Version: ${e}`);
    if (this.raw = e, this.major = +i[1], this.minor = +i[2], this.patch = +i[3], this.major > pi || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > pi || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > pi || this.patch < 0)
      throw new TypeError("Invalid patch version");
    i[4] ? this.prerelease = i[4].split(".").map((s) => {
      if (/^[0-9]+$/.test(s)) {
        const c = +s;
        if (c >= 0 && c < pi)
          return c;
      }
      return s;
    }) : this.prerelease = [], this.build = i[5] ? i[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(e) {
    if (fi("SemVer.compare", this.version, this.options, e), !(e instanceof rr)) {
      if (typeof e == "string" && e === this.version)
        return 0;
      e = new rr(e, this.options);
    }
    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
  }
  compareMain(e) {
    return e instanceof rr || (e = new rr(e, this.options)), Xr(this.major, e.major) || Xr(this.minor, e.minor) || Xr(this.patch, e.patch);
  }
  comparePre(e) {
    if (e instanceof rr || (e = new rr(e, this.options)), this.prerelease.length && !e.prerelease.length)
      return -1;
    if (!this.prerelease.length && e.prerelease.length)
      return 1;
    if (!this.prerelease.length && !e.prerelease.length)
      return 0;
    let n = 0;
    do {
      const i = this.prerelease[n], s = e.prerelease[n];
      if (fi("prerelease compare", n, i, s), i === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === s)
        continue;
      return Xr(i, s);
    } while (++n);
  }
  compareBuild(e) {
    e instanceof rr || (e = new rr(e, this.options));
    let n = 0;
    do {
      const i = this.build[n], s = e.build[n];
      if (fi("prerelease compare", n, i, s), i === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === s)
        continue;
      return Xr(i, s);
    } while (++n);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(e, n, i) {
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
        const s = Number(i) ? 1 : 0;
        if (!n && i === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (this.prerelease.length === 0)
          this.prerelease = [s];
        else {
          let c = this.prerelease.length;
          for (; --c >= 0; )
            typeof this.prerelease[c] == "number" && (this.prerelease[c]++, c = -2);
          if (c === -1) {
            if (n === this.prerelease.join(".") && i === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(s);
          }
        }
        if (n) {
          let c = [n, s];
          i === !1 && (c = [n]), Xr(this.prerelease[0], n) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = c) : this.prerelease = c;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${e}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var Tc = Fh;
const zs = Tc, kh = (r, e, n = !1) => {
  if (r instanceof zs)
    return r;
  try {
    return new zs(r, e);
  } catch (i) {
    if (!n)
      return null;
    throw i;
  }
};
var Mh = kh;
const Bh = Mh, Uh = (r, e) => {
  const n = Bh(r, e);
  return n ? n.version : null;
};
var Dh = Uh;
const jh = /* @__PURE__ */ za(Dh), Gh = Tc, Wh = (r, e) => new Gh(r, e).major;
var Vh = Wh;
const Hs = /* @__PURE__ */ za(Vh);
class qh {
  constructor(e) {
    Sn(this, "bus");
    typeof e.getVersion != "function" || !jh(e.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Hs(e.getVersion()) !== Hs(this.getVersion()) && console.warn("Proxying an event bus of version " + e.getVersion() + " with " + this.getVersion()), this.bus = e;
  }
  getVersion() {
    return "3.1.0";
  }
  subscribe(e, n) {
    this.bus.subscribe(e, n);
  }
  unsubscribe(e, n) {
    this.bus.unsubscribe(e, n);
  }
  emit(e, n) {
    this.bus.emit(e, n);
  }
}
class zh {
  constructor() {
    Sn(this, "handlers", /* @__PURE__ */ new Map());
  }
  getVersion() {
    return "3.1.0";
  }
  subscribe(e, n) {
    this.handlers.set(e, (this.handlers.get(e) || []).concat(n));
  }
  unsubscribe(e, n) {
    this.handlers.set(e, (this.handlers.get(e) || []).filter((i) => i != n));
  }
  emit(e, n) {
    (this.handlers.get(e) || []).forEach((i) => {
      try {
        i(n);
      } catch (s) {
        console.error("could not invoke event listener", s);
      }
    });
  }
}
let $n = null;
function Hh() {
  return $n !== null ? $n : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error("Window not available, EventBus can not be established!")
  }) : (typeof window.OC < "u" && window.OC._eventBus && typeof window._nc_event_bus > "u" && (console.warn("found old event bus instance at OC._eventBus. Update your version!"), window._nc_event_bus = window.OC._eventBus), typeof (window == null ? void 0 : window._nc_event_bus) < "u" ? $n = new qh(window._nc_event_bus) : $n = window._nc_event_bus = new zh(), $n);
}
function Xh(r, e) {
  Hh().subscribe(r, e);
}
let Ni;
const Oc = [];
function Yh() {
  if (Ni === void 0) {
    const r = document == null ? void 0 : document.getElementsByTagName("head")[0];
    Ni = r ? r.getAttribute("data-requesttoken") : null;
  }
  return Ni;
}
function Kh(r) {
  Oc.push(r);
}
Xh("csrf-token-update", (r) => {
  Ni = r.token, Oc.forEach((e) => {
    try {
      e(r.token);
    } catch (n) {
      console.error("error updating CSRF token observer", n);
    }
  });
});
const Xs = (r, e) => r ? r.getAttribute(e) : null;
let Yr;
function Xa() {
  if (Yr !== void 0)
    return Yr;
  const r = document == null ? void 0 : document.getElementsByTagName("head")[0];
  if (!r)
    return null;
  const e = Xs(r, "data-user");
  return e === null ? (Yr = null, Yr) : (Yr = {
    uid: e,
    displayName: Xs(r, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Yr);
}
const Zh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getCurrentUser: Xa,
  getRequestToken: Yh,
  onRequestTokenUpdate: Kh
}, Symbol.toStringTag, { value: "Module" }));
var ga = {}, In = function(r) {
  return r && r.Math === Math && r;
}, et = (
  // eslint-disable-next-line es/no-global-this -- safe
  In(typeof globalThis == "object" && globalThis) || In(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  In(typeof self == "object" && self) || In(typeof ci == "object" && ci) || In(typeof ci == "object" && ci) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), Hn = {}, Ve = function(r) {
  try {
    return !!r();
  } catch {
    return !0;
  }
}, Jh = Ve, mt = !Jh(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), Qh = Ve, ji = !Qh(function() {
  var r = (function() {
  }).bind();
  return typeof r != "function" || r.hasOwnProperty("prototype");
}), ed = ji, hi = Function.prototype.call, xt = ed ? hi.bind(hi) : function() {
  return hi.apply(hi, arguments);
}, Gi = {}, Sc = {}.propertyIsEnumerable, $c = Object.getOwnPropertyDescriptor, td = $c && !Sc.call({ 1: 2 }, 1);
Gi.f = td ? function(e) {
  var n = $c(this, e);
  return !!n && n.enumerable;
} : Sc;
var Xn = function(r, e) {
  return {
    enumerable: !(r & 1),
    configurable: !(r & 2),
    writable: !(r & 4),
    value: e
  };
}, Ic = ji, Ac = Function.prototype, va = Ac.call, rd = Ic && Ac.bind.bind(va, va), Be = Ic ? rd : function(r) {
  return function() {
    return va.apply(r, arguments);
  };
}, _c = Be, nd = _c({}.toString), id = _c("".slice), Tr = function(r) {
  return id(nd(r), 8, -1);
}, od = Be, ad = Ve, sd = Tr, bo = Object, ud = od("".split), Wi = ad(function() {
  return !bo("z").propertyIsEnumerable(0);
}) ? function(r) {
  return sd(r) === "String" ? ud(r, "") : bo(r);
} : bo, Yn = function(r) {
  return r == null;
}, ld = Yn, cd = TypeError, mn = function(r) {
  if (ld(r))
    throw new cd("Can't call method on " + r);
  return r;
}, fd = Wi, pd = mn, Mr = function(r) {
  return fd(pd(r));
}, Eo = typeof document == "object" && document.all, Xe = typeof Eo > "u" && Eo !== void 0 ? function(r) {
  return typeof r == "function" || r === Eo;
} : function(r) {
  return typeof r == "function";
}, hd = Xe, ur = function(r) {
  return typeof r == "object" ? r !== null : hd(r);
}, To = et, dd = Xe, gd = function(r) {
  return dd(r) ? r : void 0;
}, Br = function(r, e) {
  return arguments.length < 2 ? gd(To[r]) : To[r] && To[r][e];
}, vd = Be, Vi = vd({}.isPrototypeOf), md = typeof navigator < "u" && String(navigator.userAgent) || "", xc = et, Oo = md, Ys = xc.process, Ks = xc.Deno, Zs = Ys && Ys.versions || Ks && Ks.version, Js = Zs && Zs.v8, Vt, Fi;
Js && (Vt = Js.split("."), Fi = Vt[0] > 0 && Vt[0] < 4 ? 1 : +(Vt[0] + Vt[1]));
!Fi && Oo && (Vt = Oo.match(/Edge\/(\d+)/), (!Vt || Vt[1] >= 74) && (Vt = Oo.match(/Chrome\/(\d+)/), Vt && (Fi = +Vt[1])));
var qi = Fi, Qs = qi, yd = Ve, wd = et, bd = wd.String, yn = !!Object.getOwnPropertySymbols && !yd(function() {
  var r = Symbol("symbol detection");
  return !bd(r) || !(Object(r) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && Qs && Qs < 41;
}), Ed = yn, Nc = Ed && !Symbol.sham && typeof Symbol.iterator == "symbol", Td = Br, Od = Xe, Sd = Vi, $d = Nc, Id = Object, Kn = $d ? function(r) {
  return typeof r == "symbol";
} : function(r) {
  var e = Td("Symbol");
  return Od(e) && Sd(e.prototype, Id(r));
}, Ad = String, Ya = function(r) {
  try {
    return Ad(r);
  } catch {
    return "Object";
  }
}, _d = Xe, xd = Ya, Nd = TypeError, zi = function(r) {
  if (_d(r))
    return r;
  throw new Nd(xd(r) + " is not a function");
}, Pd = zi, Rd = Yn, Ka = function(r, e) {
  var n = r[e];
  return Rd(n) ? void 0 : Pd(n);
}, So = xt, $o = Xe, Io = ur, Cd = TypeError, Pc = function(r, e) {
  var n, i;
  if (e === "string" && $o(n = r.toString) && !Io(i = So(n, r)) || $o(n = r.valueOf) && !Io(i = So(n, r)) || e !== "string" && $o(n = r.toString) && !Io(i = So(n, r)))
    return i;
  throw new Cd("Can't convert object to primitive value");
}, Rc = { exports: {} }, Ld = !1, eu = et, Fd = Object.defineProperty, Za = function(r, e) {
  try {
    Fd(eu, r, { value: e, configurable: !0, writable: !0 });
  } catch {
    eu[r] = e;
  }
  return e;
}, kd = et, Md = Za, tu = "__core-js_shared__", ru = Rc.exports = kd[tu] || Md(tu, {});
(ru.versions || (ru.versions = [])).push({
  version: "3.36.0",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var Ja = Rc.exports, nu = Ja, wn = function(r, e) {
  return nu[r] || (nu[r] = e || {});
}, Bd = mn, Ud = Object, Or = function(r) {
  return Ud(Bd(r));
}, Dd = Be, jd = Or, Gd = Dd({}.hasOwnProperty), ft = Object.hasOwn || function(e, n) {
  return Gd(jd(e), n);
}, Wd = Be, Vd = 0, qd = Math.random(), zd = Wd(1 .toString), Qa = function(r) {
  return "Symbol(" + (r === void 0 ? "" : r) + ")_" + zd(++Vd + qd, 36);
}, Hd = et, Xd = wn, iu = ft, Yd = Qa, Kd = yn, Zd = Nc, nn = Hd.Symbol, Ao = Xd("wks"), Jd = Zd ? nn.for || nn : nn && nn.withoutSetter || Yd, ot = function(r) {
  return iu(Ao, r) || (Ao[r] = Kd && iu(nn, r) ? nn[r] : Jd("Symbol." + r)), Ao[r];
}, Qd = xt, ou = ur, au = Kn, eg = Ka, tg = Pc, rg = ot, ng = TypeError, ig = rg("toPrimitive"), Cc = function(r, e) {
  if (!ou(r) || au(r))
    return r;
  var n = eg(r, ig), i;
  if (n) {
    if (e === void 0 && (e = "default"), i = Qd(n, r, e), !ou(i) || au(i))
      return i;
    throw new ng("Can't convert object to primitive value");
  }
  return e === void 0 && (e = "number"), tg(r, e);
}, og = Cc, ag = Kn, es = function(r) {
  var e = og(r, "string");
  return ag(e) ? e : e + "";
}, sg = et, su = ur, ma = sg.document, ug = su(ma) && su(ma.createElement), ts = function(r) {
  return ug ? ma.createElement(r) : {};
}, lg = mt, cg = Ve, fg = ts, Lc = !lg && !cg(function() {
  return Object.defineProperty(fg("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), pg = mt, hg = xt, dg = Gi, gg = Xn, vg = Mr, mg = es, yg = ft, wg = Lc, uu = Object.getOwnPropertyDescriptor;
Hn.f = pg ? uu : function(e, n) {
  if (e = vg(e), n = mg(n), wg)
    try {
      return uu(e, n);
    } catch {
    }
  if (yg(e, n))
    return gg(!hg(dg.f, e, n), e[n]);
};
var Ot = {}, bg = mt, Eg = Ve, Fc = bg && Eg(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), Tg = ur, Og = String, Sg = TypeError, Dt = function(r) {
  if (Tg(r))
    return r;
  throw new Sg(Og(r) + " is not an object");
}, $g = mt, Ig = Lc, Ag = Fc, di = Dt, lu = es, _g = TypeError, _o = Object.defineProperty, xg = Object.getOwnPropertyDescriptor, xo = "enumerable", No = "configurable", Po = "writable";
Ot.f = $g ? Ag ? function(e, n, i) {
  if (di(e), n = lu(n), di(i), typeof e == "function" && n === "prototype" && "value" in i && Po in i && !i[Po]) {
    var s = xg(e, n);
    s && s[Po] && (e[n] = i.value, i = {
      configurable: No in i ? i[No] : s[No],
      enumerable: xo in i ? i[xo] : s[xo],
      writable: !1
    });
  }
  return _o(e, n, i);
} : _o : function(e, n, i) {
  if (di(e), n = lu(n), di(i), Ig)
    try {
      return _o(e, n, i);
    } catch {
    }
  if ("get" in i || "set" in i)
    throw new _g("Accessors not supported");
  return "value" in i && (e[n] = i.value), e;
};
var Ng = mt, Pg = Ot, Rg = Xn, Zn = Ng ? function(r, e, n) {
  return Pg.f(r, e, Rg(1, n));
} : function(r, e, n) {
  return r[e] = n, r;
}, kc = { exports: {} }, ya = mt, Cg = ft, Mc = Function.prototype, Lg = ya && Object.getOwnPropertyDescriptor, rs = Cg(Mc, "name"), Fg = rs && (function() {
}).name === "something", kg = rs && (!ya || ya && Lg(Mc, "name").configurable), Bc = {
  EXISTS: rs,
  PROPER: Fg,
  CONFIGURABLE: kg
}, Mg = Be, Bg = Xe, wa = Ja, Ug = Mg(Function.toString);
Bg(wa.inspectSource) || (wa.inspectSource = function(r) {
  return Ug(r);
});
var Uc = wa.inspectSource, Dg = et, jg = Xe, cu = Dg.WeakMap, Gg = jg(cu) && /native code/.test(String(cu)), Wg = wn, Vg = Qa, fu = Wg("keys"), Hi = function(r) {
  return fu[r] || (fu[r] = Vg(r));
}, Xi = {}, qg = Gg, Dc = et, zg = ur, Hg = Zn, Ro = ft, Co = Ja, Xg = Hi, Yg = Xi, pu = "Object already initialized", ba = Dc.TypeError, Kg = Dc.WeakMap, ki, Dn, Mi, Zg = function(r) {
  return Mi(r) ? Dn(r) : ki(r, {});
}, Jg = function(r) {
  return function(e) {
    var n;
    if (!zg(e) || (n = Dn(e)).type !== r)
      throw new ba("Incompatible receiver, " + r + " required");
    return n;
  };
};
if (qg || Co.state) {
  var Qt = Co.state || (Co.state = new Kg());
  Qt.get = Qt.get, Qt.has = Qt.has, Qt.set = Qt.set, ki = function(r, e) {
    if (Qt.has(r))
      throw new ba(pu);
    return e.facade = r, Qt.set(r, e), e;
  }, Dn = function(r) {
    return Qt.get(r) || {};
  }, Mi = function(r) {
    return Qt.has(r);
  };
} else {
  var Kr = Xg("state");
  Yg[Kr] = !0, ki = function(r, e) {
    if (Ro(r, Kr))
      throw new ba(pu);
    return e.facade = r, Hg(r, Kr, e), e;
  }, Dn = function(r) {
    return Ro(r, Kr) ? r[Kr] : {};
  }, Mi = function(r) {
    return Ro(r, Kr);
  };
}
var Jn = {
  set: ki,
  get: Dn,
  has: Mi,
  enforce: Zg,
  getterFor: Jg
}, ns = Be, Qg = Ve, ev = Xe, gi = ft, Ea = mt, tv = Bc.CONFIGURABLE, rv = Uc, jc = Jn, nv = jc.enforce, iv = jc.get, hu = String, Pi = Object.defineProperty, ov = ns("".slice), av = ns("".replace), sv = ns([].join), uv = Ea && !Qg(function() {
  return Pi(function() {
  }, "length", { value: 8 }).length !== 8;
}), lv = String(String).split("String"), cv = kc.exports = function(r, e, n) {
  ov(hu(e), 0, 7) === "Symbol(" && (e = "[" + av(hu(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), n && n.getter && (e = "get " + e), n && n.setter && (e = "set " + e), (!gi(r, "name") || tv && r.name !== e) && (Ea ? Pi(r, "name", { value: e, configurable: !0 }) : r.name = e), uv && n && gi(n, "arity") && r.length !== n.arity && Pi(r, "length", { value: n.arity });
  try {
    n && gi(n, "constructor") && n.constructor ? Ea && Pi(r, "prototype", { writable: !1 }) : r.prototype && (r.prototype = void 0);
  } catch {
  }
  var i = nv(r);
  return gi(i, "source") || (i.source = sv(lv, typeof e == "string" ? e : "")), r;
};
Function.prototype.toString = cv(function() {
  return ev(this) && iv(this).source || rv(this);
}, "toString");
var Gc = kc.exports, fv = Xe, pv = Ot, hv = Gc, dv = Za, Sr = function(r, e, n, i) {
  i || (i = {});
  var s = i.enumerable, c = i.name !== void 0 ? i.name : e;
  if (fv(n) && hv(n, c, i), i.global)
    s ? r[e] = n : dv(e, n);
  else {
    try {
      i.unsafe ? r[e] && (s = !0) : delete r[e];
    } catch {
    }
    s ? r[e] = n : pv.f(r, e, {
      value: n,
      enumerable: !1,
      configurable: !i.nonConfigurable,
      writable: !i.nonWritable
    });
  }
  return r;
}, Qn = {}, gv = Math.ceil, vv = Math.floor, mv = Math.trunc || function(e) {
  var n = +e;
  return (n > 0 ? vv : gv)(n);
}, yv = mv, Yi = function(r) {
  var e = +r;
  return e !== e || e === 0 ? 0 : yv(e);
}, wv = Yi, bv = Math.max, Ev = Math.min, Tv = function(r, e) {
  var n = wv(r);
  return n < 0 ? bv(n + e, 0) : Ev(n, e);
}, Ov = Yi, Sv = Math.min, is = function(r) {
  var e = Ov(r);
  return e > 0 ? Sv(e, 9007199254740991) : 0;
}, $v = is, Ki = function(r) {
  return $v(r.length);
}, Iv = Mr, Av = Tv, _v = Ki, du = function(r) {
  return function(e, n, i) {
    var s = Iv(e), c = _v(s);
    if (c === 0)
      return !r && -1;
    var g = Av(i, c), d;
    if (r && n !== n) {
      for (; c > g; )
        if (d = s[g++], d !== d)
          return !0;
    } else
      for (; c > g; g++)
        if ((r || g in s) && s[g] === n)
          return r || g || 0;
    return !r && -1;
  };
}, xv = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: du(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: du(!1)
}, Nv = Be, Lo = ft, Pv = Mr, Rv = xv.indexOf, Cv = Xi, gu = Nv([].push), Wc = function(r, e) {
  var n = Pv(r), i = 0, s = [], c;
  for (c in n)
    !Lo(Cv, c) && Lo(n, c) && gu(s, c);
  for (; e.length > i; )
    Lo(n, c = e[i++]) && (~Rv(s, c) || gu(s, c));
  return s;
}, os = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], Lv = Wc, Fv = os, kv = Fv.concat("length", "prototype");
Qn.f = Object.getOwnPropertyNames || function(e) {
  return Lv(e, kv);
};
var ei = {};
ei.f = Object.getOwnPropertySymbols;
var Mv = Br, Bv = Be, Uv = Qn, Dv = ei, jv = Dt, Gv = Bv([].concat), Wv = Mv("Reflect", "ownKeys") || function(e) {
  var n = Uv.f(jv(e)), i = Dv.f;
  return i ? Gv(n, i(e)) : n;
}, vu = ft, Vv = Wv, qv = Hn, zv = Ot, Vc = function(r, e, n) {
  for (var i = Vv(e), s = zv.f, c = qv.f, g = 0; g < i.length; g++) {
    var d = i[g];
    !vu(r, d) && !(n && vu(n, d)) && s(r, d, c(e, d));
  }
}, Hv = Ve, Xv = Xe, Yv = /#|\.prototype\./, ti = function(r, e) {
  var n = Zv[Kv(r)];
  return n === Qv ? !0 : n === Jv ? !1 : Xv(e) ? Hv(e) : !!e;
}, Kv = ti.normalize = function(r) {
  return String(r).replace(Yv, ".").toLowerCase();
}, Zv = ti.data = {}, Jv = ti.NATIVE = "N", Qv = ti.POLYFILL = "P", qc = ti, vi = et, em = Hn.f, tm = Zn, rm = Sr, nm = Za, im = Vc, om = qc, yt = function(r, e) {
  var n = r.target, i = r.global, s = r.stat, c, g, d, y, l, a;
  if (i ? g = vi : s ? g = vi[n] || nm(n, {}) : g = vi[n] && vi[n].prototype, g)
    for (d in e) {
      if (l = e[d], r.dontCallGetSet ? (a = em(g, d), y = a && a.value) : y = g[d], c = om(i ? d : n + (s ? "." : "#") + d, r.forced), !c && y !== void 0) {
        if (typeof l == typeof y)
          continue;
        im(l, y);
      }
      (r.sham || y && y.sham) && tm(l, "sham", !0), rm(g, d, l, r);
    }
}, am = yt, sm = mt, mu = Ot.f;
am({ target: "Object", stat: !0, forced: Object.defineProperty !== mu, sham: !sm }, {
  defineProperty: mu
});
var ri = {}, um = et, zc = um, as = {}, lm = ot;
as.f = lm;
var yu = zc, cm = ft, fm = as, pm = Ot.f, ss = function(r) {
  var e = yu.Symbol || (yu.Symbol = {});
  cm(e, r) || pm(e, r, {
    value: fm.f(r)
  });
}, hm = ss;
hm("iterator");
var us = {}, dm = Wc, gm = os, ls = Object.keys || function(e) {
  return dm(e, gm);
}, vm = mt, mm = Fc, ym = Ot, wm = Dt, bm = Mr, Em = ls;
us.f = vm && !mm ? Object.defineProperties : function(e, n) {
  wm(e);
  for (var i = bm(n), s = Em(n), c = s.length, g = 0, d; c > g; )
    ym.f(e, d = s[g++], i[d]);
  return e;
};
var Tm = Br, Om = Tm("document", "documentElement"), Sm = Dt, $m = us, wu = os, Im = Xi, Am = Om, _m = ts, xm = Hi, bu = ">", Eu = "<", Ta = "prototype", Oa = "script", Hc = xm("IE_PROTO"), Fo = function() {
}, Xc = function(r) {
  return Eu + Oa + bu + r + Eu + "/" + Oa + bu;
}, Tu = function(r) {
  r.write(Xc("")), r.close();
  var e = r.parentWindow.Object;
  return r = null, e;
}, Nm = function() {
  var r = _m("iframe"), e = "java" + Oa + ":", n;
  return r.style.display = "none", Am.appendChild(r), r.src = String(e), n = r.contentWindow.document, n.open(), n.write(Xc("document.F=Object")), n.close(), n.F;
}, mi, Ri = function() {
  try {
    mi = new ActiveXObject("htmlfile");
  } catch {
  }
  Ri = typeof document < "u" ? document.domain && mi ? Tu(mi) : Nm() : Tu(mi);
  for (var r = wu.length; r--; )
    delete Ri[Ta][wu[r]];
  return Ri();
};
Im[Hc] = !0;
var Zi = Object.create || function(e, n) {
  var i;
  return e !== null ? (Fo[Ta] = Sm(e), i = new Fo(), Fo[Ta] = null, i[Hc] = e) : i = Ri(), n === void 0 ? i : $m.f(i, n);
}, Pm = ot, Rm = Zi, Cm = Ot.f, Sa = Pm("unscopables"), $a = Array.prototype;
$a[Sa] === void 0 && Cm($a, Sa, {
  configurable: !0,
  value: Rm(null)
});
var Lm = function(r) {
  $a[Sa][r] = !0;
}, cs = {}, Fm = Ve, km = !Fm(function() {
  function r() {
  }
  return r.prototype.constructor = null, Object.getPrototypeOf(new r()) !== r.prototype;
}), Mm = ft, Bm = Xe, Um = Or, Dm = Hi, jm = km, Ou = Dm("IE_PROTO"), Ia = Object, Gm = Ia.prototype, Yc = jm ? Ia.getPrototypeOf : function(r) {
  var e = Um(r);
  if (Mm(e, Ou))
    return e[Ou];
  var n = e.constructor;
  return Bm(n) && e instanceof n ? n.prototype : e instanceof Ia ? Gm : null;
}, Wm = Ve, Vm = Xe, qm = ur, Su = Yc, zm = Sr, Hm = ot, Aa = Hm("iterator"), Kc = !1, Fr, ko, Mo;
[].keys && (Mo = [].keys(), "next" in Mo ? (ko = Su(Su(Mo)), ko !== Object.prototype && (Fr = ko)) : Kc = !0);
var Xm = !qm(Fr) || Wm(function() {
  var r = {};
  return Fr[Aa].call(r) !== r;
});
Xm && (Fr = {});
Vm(Fr[Aa]) || zm(Fr, Aa, function() {
  return this;
});
var Zc = {
  IteratorPrototype: Fr,
  BUGGY_SAFARI_ITERATORS: Kc
}, Ym = Ot.f, Km = ft, Zm = ot, $u = Zm("toStringTag"), Ji = function(r, e, n) {
  r && !n && (r = r.prototype), r && !Km(r, $u) && Ym(r, $u, { configurable: !0, value: e });
}, Jm = Zc.IteratorPrototype, Qm = Zi, e0 = Xn, t0 = Ji, r0 = cs, n0 = function() {
  return this;
}, i0 = function(r, e, n, i) {
  var s = e + " Iterator";
  return r.prototype = Qm(Jm, { next: e0(+!i, n) }), t0(r, s, !1), r0[s] = n0, r;
}, o0 = Be, a0 = zi, s0 = function(r, e, n) {
  try {
    return o0(a0(Object.getOwnPropertyDescriptor(r, e)[n]));
  } catch {
  }
}, u0 = ur, l0 = function(r) {
  return u0(r) || r === null;
}, c0 = l0, f0 = String, p0 = TypeError, h0 = function(r) {
  if (c0(r))
    return r;
  throw new p0("Can't set " + f0(r) + " as a prototype");
}, d0 = s0, g0 = Dt, v0 = h0, Jc = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var r = !1, e = {}, n;
  try {
    n = d0(Object.prototype, "__proto__", "set"), n(e, []), r = e instanceof Array;
  } catch {
  }
  return function(s, c) {
    return g0(s), v0(c), r ? n(s, c) : s.__proto__ = c, s;
  };
}() : void 0), m0 = yt, y0 = xt, Qc = Bc, w0 = Xe, b0 = i0, Iu = Yc, Au = Jc, E0 = Ji, T0 = Zn, Bo = Sr, O0 = ot, S0 = cs, ef = Zc, $0 = Qc.PROPER, I0 = Qc.CONFIGURABLE, _u = ef.IteratorPrototype, yi = ef.BUGGY_SAFARI_ITERATORS, An = O0("iterator"), xu = "keys", _n = "values", Nu = "entries", A0 = function() {
  return this;
}, tf = function(r, e, n, i, s, c, g) {
  b0(n, e, i);
  var d = function(D) {
    if (D === s && p)
      return p;
    if (!yi && D && D in a)
      return a[D];
    switch (D) {
      case xu:
        return function() {
          return new n(this, D);
        };
      case _n:
        return function() {
          return new n(this, D);
        };
      case Nu:
        return function() {
          return new n(this, D);
        };
    }
    return function() {
      return new n(this);
    };
  }, y = e + " Iterator", l = !1, a = r.prototype, v = a[An] || a["@@iterator"] || s && a[s], p = !yi && v || d(s), E = e === "Array" && a.entries || v, S, _, P;
  if (E && (S = Iu(E.call(new r())), S !== Object.prototype && S.next && (Iu(S) !== _u && (Au ? Au(S, _u) : w0(S[An]) || Bo(S, An, A0)), E0(S, y, !0))), $0 && s === _n && v && v.name !== _n && (I0 ? T0(a, "name", _n) : (l = !0, p = function() {
    return y0(v, this);
  })), s)
    if (_ = {
      values: d(_n),
      keys: c ? p : d(xu),
      entries: d(Nu)
    }, g)
      for (P in _)
        (yi || l || !(P in a)) && Bo(a, P, _[P]);
    else
      m0({ target: e, proto: !0, forced: yi || l }, _);
  return a[An] !== p && Bo(a, An, p, { name: s }), S0[e] = p, _;
}, rf = function(r, e) {
  return { value: r, done: e };
}, _0 = Mr, fs = Lm, Pu = cs, nf = Jn, x0 = Ot.f, N0 = tf, wi = rf, P0 = mt, of = "Array Iterator", R0 = nf.set, C0 = nf.getterFor(of), L0 = N0(Array, "Array", function(r, e) {
  R0(this, {
    type: of,
    target: _0(r),
    // target
    index: 0,
    // next index
    kind: e
    // kind
  });
}, function() {
  var r = C0(this), e = r.target, n = r.index++;
  if (!e || n >= e.length)
    return r.target = void 0, wi(void 0, !0);
  switch (r.kind) {
    case "keys":
      return wi(n, !1);
    case "values":
      return wi(e[n], !1);
  }
  return wi([n, e[n]], !1);
}, "values"), Ru = Pu.Arguments = Pu.Array;
fs("keys");
fs("values");
fs("entries");
if (P0 && Ru.name !== "values")
  try {
    x0(Ru, "name", { value: "values" });
  } catch {
  }
var F0 = ot, k0 = F0("toStringTag"), af = {};
af[k0] = "z";
var ps = String(af) === "[object z]", M0 = ps, B0 = Xe, Ci = Tr, U0 = ot, D0 = U0("toStringTag"), j0 = Object, G0 = Ci(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments", W0 = function(r, e) {
  try {
    return r[e];
  } catch {
  }
}, hs = M0 ? Ci : function(r) {
  var e, n, i;
  return r === void 0 ? "Undefined" : r === null ? "Null" : typeof (n = W0(e = j0(r), D0)) == "string" ? n : G0 ? Ci(e) : (i = Ci(e)) === "Object" && B0(e.callee) ? "Arguments" : i;
}, V0 = hs, q0 = String, lr = function(r) {
  if (V0(r) === "Symbol")
    throw new TypeError("Cannot convert a Symbol value to a string");
  return q0(r);
}, ds = Be, z0 = Yi, H0 = lr, X0 = mn, Y0 = ds("".charAt), Cu = ds("".charCodeAt), K0 = ds("".slice), Lu = function(r) {
  return function(e, n) {
    var i = H0(X0(e)), s = z0(n), c = i.length, g, d;
    return s < 0 || s >= c ? r ? "" : void 0 : (g = Cu(i, s), g < 55296 || g > 56319 || s + 1 === c || (d = Cu(i, s + 1)) < 56320 || d > 57343 ? r ? Y0(i, s) : g : r ? K0(i, s, s + 2) : (g - 55296 << 10) + (d - 56320) + 65536);
  };
}, sf = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: Lu(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: Lu(!0)
}, Z0 = sf.charAt, J0 = lr, uf = Jn, Q0 = tf, Fu = rf, lf = "String Iterator", ey = uf.set, ty = uf.getterFor(lf);
Q0(String, "String", function(r) {
  ey(this, {
    type: lf,
    string: J0(r),
    index: 0
  });
}, function() {
  var e = ty(this), n = e.string, i = e.index, s;
  return i >= n.length ? Fu(void 0, !0) : (s = Z0(n, i), e.index += s.length, Fu(s, !1));
});
var ry = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
}, ny = ts, Uo = ny("span").classList, ku = Uo && Uo.constructor && Uo.constructor.prototype, iy = ku === Object.prototype ? void 0 : ku, Mu = et, cf = ry, oy = iy, Ln = L0, Bu = Zn, ay = Ji, sy = ot, Do = sy("iterator"), jo = Ln.values, ff = function(r, e) {
  if (r) {
    if (r[Do] !== jo)
      try {
        Bu(r, Do, jo);
      } catch {
        r[Do] = jo;
      }
    if (ay(r, e, !0), cf[e]) {
      for (var n in Ln)
        if (r[n] !== Ln[n])
          try {
            Bu(r, n, Ln[n]);
          } catch {
            r[n] = Ln[n];
          }
    }
  }
};
for (var Go in cf)
  ff(Mu[Go] && Mu[Go].prototype, Go);
ff(oy, "DOMTokenList");
var Uu = mt, uy = Be, ly = xt, cy = Ve, Wo = ls, fy = ei, py = Gi, hy = Or, dy = Wi, Zr = Object.assign, Du = Object.defineProperty, gy = uy([].concat), vy = !Zr || cy(function() {
  if (Uu && Zr({ b: 1 }, Zr(Du({}, "a", {
    enumerable: !0,
    get: function() {
      Du(this, "b", {
        value: 3,
        enumerable: !1
      });
    }
  }), { b: 2 })).b !== 1)
    return !0;
  var r = {}, e = {}, n = Symbol("assign detection"), i = "abcdefghijklmnopqrst";
  return r[n] = 7, i.split("").forEach(function(s) {
    e[s] = s;
  }), Zr({}, r)[n] !== 7 || Wo(Zr({}, e)).join("") !== i;
}) ? function(e, n) {
  for (var i = hy(e), s = arguments.length, c = 1, g = fy.f, d = py.f; s > c; )
    for (var y = dy(arguments[c++]), l = g ? gy(Wo(y), g(y)) : Wo(y), a = l.length, v = 0, p; a > v; )
      p = l[v++], (!Uu || ly(d, y, p)) && (i[p] = y[p]);
  return i;
} : Zr, my = yt, ju = vy;
my({ target: "Object", stat: !0, arity: 2, forced: Object.assign !== ju }, {
  assign: ju
});
var yy = xt, wy = Br, by = ot, Ey = Sr, pf = function() {
  var r = wy("Symbol"), e = r && r.prototype, n = e && e.valueOf, i = by("toPrimitive");
  e && !e[i] && Ey(e, i, function(s) {
    return yy(n, this);
  }, { arity: 1 });
}, Ty = ss, Oy = pf;
Ty("toPrimitive");
Oy();
var Sy = Dt, $y = Pc, Iy = TypeError, Ay = function(r) {
  if (Sy(this), r === "string" || r === "default")
    r = "string";
  else if (r !== "number")
    throw new Iy("Incorrect hint");
  return $y(this, r);
}, _y = ft, xy = Sr, Ny = Ay, Py = ot, Gu = Py("toPrimitive"), Wu = Date.prototype;
_y(Wu, Gu) || xy(Wu, Gu, Ny);
var hf = {}, Ry = Be, df = Ry([].slice), Cy = Tr, Ly = Mr, gf = Qn.f, Fy = df, vf = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], ky = function(r) {
  try {
    return gf(r);
  } catch {
    return Fy(vf);
  }
};
hf.f = function(e) {
  return vf && Cy(e) === "Window" ? ky(e) : gf(Ly(e));
};
var Vu = Gc, My = Ot, mf = function(r, e, n) {
  return n.get && Vu(n.get, e, { getter: !0 }), n.set && Vu(n.set, e, { setter: !0 }), My.f(r, e, n);
}, By = Tr, Uy = Be, Dy = function(r) {
  if (By(r) === "Function")
    return Uy(r);
}, qu = Dy, jy = zi, Gy = ji, Wy = qu(qu.bind), Vy = function(r, e) {
  return jy(r), e === void 0 ? r : Gy ? Wy(r, e) : function() {
    return r.apply(e, arguments);
  };
}, qy = Tr, gs = Array.isArray || function(e) {
  return qy(e) === "Array";
}, zy = Be, Hy = Ve, yf = Xe, Xy = hs, Yy = Br, Ky = Uc, wf = function() {
}, bf = Yy("Reflect", "construct"), vs = /^\s*(?:class|function)\b/, Zy = zy(vs.exec), Jy = !vs.test(wf), xn = function(e) {
  if (!yf(e))
    return !1;
  try {
    return bf(wf, [], e), !0;
  } catch {
    return !1;
  }
}, Ef = function(e) {
  if (!yf(e))
    return !1;
  switch (Xy(e)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return Jy || !!Zy(vs, Ky(e));
  } catch {
    return !0;
  }
};
Ef.sham = !0;
var Tf = !bf || Hy(function() {
  var r;
  return xn(xn.call) || !xn(Object) || !xn(function() {
    r = !0;
  }) || r;
}) ? Ef : xn, zu = gs, Qy = Tf, e1 = ur, t1 = ot, r1 = t1("species"), Hu = Array, n1 = function(r) {
  var e;
  return zu(r) && (e = r.constructor, Qy(e) && (e === Hu || zu(e.prototype)) ? e = void 0 : e1(e) && (e = e[r1], e === null && (e = void 0))), e === void 0 ? Hu : e;
}, i1 = n1, Of = function(r, e) {
  return new (i1(r))(e === 0 ? 0 : e);
}, o1 = Vy, a1 = Be, s1 = Wi, u1 = Or, l1 = Ki, c1 = Of, Xu = a1([].push), yr = function(r) {
  var e = r === 1, n = r === 2, i = r === 3, s = r === 4, c = r === 6, g = r === 7, d = r === 5 || c;
  return function(y, l, a, v) {
    for (var p = u1(y), E = s1(p), S = l1(E), _ = o1(l, a), P = 0, D = v || c1, I = e ? D(y, S) : n || g ? D(y, 0) : void 0, x, F; S > P; P++)
      if ((d || P in E) && (x = E[P], F = _(x, P, p), r))
        if (e)
          I[P] = F;
        else if (F)
          switch (r) {
            case 3:
              return !0;
            case 5:
              return x;
            case 6:
              return P;
            case 2:
              Xu(I, x);
          }
        else
          switch (r) {
            case 4:
              return !1;
            case 7:
              Xu(I, x);
          }
    return c ? -1 : i || s ? s : I;
  };
}, ms = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: yr(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: yr(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: yr(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: yr(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: yr(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: yr(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: yr(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: yr(7)
}, Qi = yt, ni = et, ys = xt, f1 = Be, cn = mt, fn = yn, p1 = Ve, it = ft, h1 = Vi, _a = Dt, eo = Mr, ws = es, d1 = lr, xa = Xn, pn = Zi, Sf = ls, g1 = Qn, $f = hf, v1 = ei, If = Hn, Af = Ot, m1 = us, _f = Gi, Vo = Sr, y1 = mf, bs = wn, w1 = Hi, xf = Xi, Yu = Qa, b1 = ot, E1 = as, T1 = ss, O1 = pf, S1 = Ji, Nf = Jn, to = ms.forEach, Et = w1("hidden"), ro = "Symbol", jn = "prototype", $1 = Nf.set, Ku = Nf.getterFor(ro), Bt = Object[jn], Cr = ni.Symbol, Fn = Cr && Cr[jn], I1 = ni.RangeError, A1 = ni.TypeError, qo = ni.QObject, Pf = If.f, Lr = Af.f, Rf = $f.f, _1 = _f.f, Cf = f1([].push), vr = bs("symbols"), ii = bs("op-symbols"), x1 = bs("wks"), Na = !qo || !qo[jn] || !qo[jn].findChild, Lf = function(r, e, n) {
  var i = Pf(Bt, e);
  i && delete Bt[e], Lr(r, e, n), i && r !== Bt && Lr(Bt, e, i);
}, Pa = cn && p1(function() {
  return pn(Lr({}, "a", {
    get: function() {
      return Lr(this, "a", { value: 7 }).a;
    }
  })).a !== 7;
}) ? Lf : Lr, zo = function(r, e) {
  var n = vr[r] = pn(Fn);
  return $1(n, {
    type: ro,
    tag: r,
    description: e
  }), cn || (n.description = e), n;
}, no = function(e, n, i) {
  e === Bt && no(ii, n, i), _a(e);
  var s = ws(n);
  return _a(i), it(vr, s) ? (i.enumerable ? (it(e, Et) && e[Et][s] && (e[Et][s] = !1), i = pn(i, { enumerable: xa(0, !1) })) : (it(e, Et) || Lr(e, Et, xa(1, pn(null))), e[Et][s] = !0), Pa(e, s, i)) : Lr(e, s, i);
}, Es = function(e, n) {
  _a(e);
  var i = eo(n), s = Sf(i).concat(Mf(i));
  return to(s, function(c) {
    (!cn || ys(Ra, i, c)) && no(e, c, i[c]);
  }), e;
}, N1 = function(e, n) {
  return n === void 0 ? pn(e) : Es(pn(e), n);
}, Ra = function(e) {
  var n = ws(e), i = ys(_1, this, n);
  return this === Bt && it(vr, n) && !it(ii, n) ? !1 : i || !it(this, n) || !it(vr, n) || it(this, Et) && this[Et][n] ? i : !0;
}, Ff = function(e, n) {
  var i = eo(e), s = ws(n);
  if (!(i === Bt && it(vr, s) && !it(ii, s))) {
    var c = Pf(i, s);
    return c && it(vr, s) && !(it(i, Et) && i[Et][s]) && (c.enumerable = !0), c;
  }
}, kf = function(e) {
  var n = Rf(eo(e)), i = [];
  return to(n, function(s) {
    !it(vr, s) && !it(xf, s) && Cf(i, s);
  }), i;
}, Mf = function(r) {
  var e = r === Bt, n = Rf(e ? ii : eo(r)), i = [];
  return to(n, function(s) {
    it(vr, s) && (!e || it(Bt, s)) && Cf(i, vr[s]);
  }), i;
};
fn || (Cr = function() {
  if (h1(Fn, this))
    throw new A1("Symbol is not a constructor");
  var e = !arguments.length || arguments[0] === void 0 ? void 0 : d1(arguments[0]), n = Yu(e), i = function(s) {
    var c = this === void 0 ? ni : this;
    c === Bt && ys(i, ii, s), it(c, Et) && it(c[Et], n) && (c[Et][n] = !1);
    var g = xa(1, s);
    try {
      Pa(c, n, g);
    } catch (d) {
      if (!(d instanceof I1))
        throw d;
      Lf(c, n, g);
    }
  };
  return cn && Na && Pa(Bt, n, { configurable: !0, set: i }), zo(n, e);
}, Fn = Cr[jn], Vo(Fn, "toString", function() {
  return Ku(this).tag;
}), Vo(Cr, "withoutSetter", function(r) {
  return zo(Yu(r), r);
}), _f.f = Ra, Af.f = no, m1.f = Es, If.f = Ff, g1.f = $f.f = kf, v1.f = Mf, E1.f = function(r) {
  return zo(b1(r), r);
}, cn && (y1(Fn, "description", {
  configurable: !0,
  get: function() {
    return Ku(this).description;
  }
}), Vo(Bt, "propertyIsEnumerable", Ra, { unsafe: !0 })));
Qi({ global: !0, constructor: !0, wrap: !0, forced: !fn, sham: !fn }, {
  Symbol: Cr
});
to(Sf(x1), function(r) {
  T1(r);
});
Qi({ target: ro, stat: !0, forced: !fn }, {
  useSetter: function() {
    Na = !0;
  },
  useSimple: function() {
    Na = !1;
  }
});
Qi({ target: "Object", stat: !0, forced: !fn, sham: !cn }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: N1,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: no,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: Es,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: Ff
});
Qi({ target: "Object", stat: !0, forced: !fn }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: kf
});
O1();
S1(Cr, ro);
xf[Et] = !0;
var P1 = yn, Bf = P1 && !!Symbol.for && !!Symbol.keyFor, R1 = yt, C1 = Br, L1 = ft, F1 = lr, Uf = wn, k1 = Bf, Ho = Uf("string-to-symbol-registry"), M1 = Uf("symbol-to-string-registry");
R1({ target: "Symbol", stat: !0, forced: !k1 }, {
  for: function(r) {
    var e = F1(r);
    if (L1(Ho, e))
      return Ho[e];
    var n = C1("Symbol")(e);
    return Ho[e] = n, M1[n] = e, n;
  }
});
var B1 = yt, U1 = ft, D1 = Kn, j1 = Ya, G1 = wn, W1 = Bf, Zu = G1("symbol-to-string-registry");
B1({ target: "Symbol", stat: !0, forced: !W1 }, {
  keyFor: function(e) {
    if (!D1(e))
      throw new TypeError(j1(e) + " is not a symbol");
    if (U1(Zu, e))
      return Zu[e];
  }
});
var V1 = ji, Df = Function.prototype, Ju = Df.apply, Qu = Df.call, jf = typeof Reflect == "object" && Reflect.apply || (V1 ? Qu.bind(Ju) : function() {
  return Qu.apply(Ju, arguments);
}), q1 = Be, el = gs, z1 = Xe, tl = Tr, H1 = lr, rl = q1([].push), X1 = function(r) {
  if (z1(r))
    return r;
  if (el(r)) {
    for (var e = r.length, n = [], i = 0; i < e; i++) {
      var s = r[i];
      typeof s == "string" ? rl(n, s) : (typeof s == "number" || tl(s) === "Number" || tl(s) === "String") && rl(n, H1(s));
    }
    var c = n.length, g = !0;
    return function(d, y) {
      if (g)
        return g = !1, y;
      if (el(this))
        return y;
      for (var l = 0; l < c; l++)
        if (n[l] === d)
          return y;
    };
  }
}, Y1 = yt, Gf = Br, Wf = jf, K1 = xt, oi = Be, Vf = Ve, nl = Xe, il = Kn, qf = df, Z1 = X1, J1 = yn, Q1 = String, Er = Gf("JSON", "stringify"), bi = oi(/./.exec), ol = oi("".charAt), ew = oi("".charCodeAt), tw = oi("".replace), rw = oi(1 .toString), nw = /[\uD800-\uDFFF]/g, al = /^[\uD800-\uDBFF]$/, sl = /^[\uDC00-\uDFFF]$/, ul = !J1 || Vf(function() {
  var r = Gf("Symbol")("stringify detection");
  return Er([r]) !== "[null]" || Er({ a: r }) !== "{}" || Er(Object(r)) !== "{}";
}), ll = Vf(function() {
  return Er("\uDF06\uD834") !== '"\\udf06\\ud834"' || Er("\uDEAD") !== '"\\udead"';
}), iw = function(r, e) {
  var n = qf(arguments), i = Z1(e);
  if (!(!nl(i) && (r === void 0 || il(r))))
    return n[1] = function(s, c) {
      if (nl(i) && (c = K1(i, this, Q1(s), c)), !il(c))
        return c;
    }, Wf(Er, null, n);
}, ow = function(r, e, n) {
  var i = ol(n, e - 1), s = ol(n, e + 1);
  return bi(al, r) && !bi(sl, s) || bi(sl, r) && !bi(al, i) ? "\\u" + rw(ew(r, 0), 16) : r;
};
Er && Y1({ target: "JSON", stat: !0, arity: 3, forced: ul || ll }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  stringify: function(e, n, i) {
    var s = qf(arguments), c = Wf(ul ? iw : Er, null, s);
    return ll && typeof c == "string" ? tw(c, nw, ow) : c;
  }
});
var aw = yt, sw = yn, uw = Ve, zf = ei, lw = Or, cw = !sw || uw(function() {
  zf.f(1);
});
aw({ target: "Object", stat: !0, forced: cw }, {
  getOwnPropertySymbols: function(e) {
    var n = zf.f;
    return n ? n(lw(e)) : [];
  }
});
var fw = yt, pw = mt, hw = et, Ei = Be, dw = ft, gw = Xe, vw = Vi, mw = lr, yw = mf, ww = Vc, pr = hw.Symbol, xr = pr && pr.prototype;
if (pw && gw(pr) && (!("description" in xr) || // Safari 12 bug
pr().description !== void 0)) {
  var cl = {}, Ti = function() {
    var e = arguments.length < 1 || arguments[0] === void 0 ? void 0 : mw(arguments[0]), n = vw(xr, this) ? new pr(e) : e === void 0 ? pr() : pr(e);
    return e === "" && (cl[n] = !0), n;
  };
  ww(Ti, pr), Ti.prototype = xr, xr.constructor = Ti;
  var bw = String(pr("description detection")) === "Symbol(description detection)", Ew = Ei(xr.valueOf), Tw = Ei(xr.toString), Ow = /^Symbol\((.*)\)[^)]+$/, Sw = Ei("".replace), $w = Ei("".slice);
  yw(xr, "description", {
    configurable: !0,
    get: function() {
      var e = Ew(this);
      if (dw(cl, e))
        return "";
      var n = Tw(e), i = bw ? $w(n, 7, -1) : Sw(n, Ow, "$1");
      return i === "" ? void 0 : i;
    }
  }), fw({ global: !0, constructor: !0, forced: !0 }, {
    Symbol: Ti
  });
}
var Iw = ps, Aw = hs, _w = Iw ? {}.toString : function() {
  return "[object " + Aw(this) + "]";
}, xw = ps, Nw = Sr, Pw = _w;
xw || Nw(Object.prototype, "toString", Pw, { unsafe: !0 });
var Rw = Xe, Cw = ur, fl = Jc, Lw = function(r, e, n) {
  var i, s;
  return (
    // it can work only with native `setPrototypeOf`
    fl && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    Rw(i = e.constructor) && i !== n && Cw(s = i.prototype) && s !== n.prototype && fl(r, s), r
  );
}, Fw = Be, kw = Fw(1 .valueOf), Mw = `	
\v\f\r                　\u2028\u2029\uFEFF`, Bw = Be, Uw = mn, Dw = lr, Ca = Mw, pl = Bw("".replace), jw = RegExp("^[" + Ca + "]+"), Gw = RegExp("(^|[^" + Ca + "])[" + Ca + "]+$"), Xo = function(r) {
  return function(e) {
    var n = Dw(Uw(e));
    return r & 1 && (n = pl(n, jw, "")), r & 2 && (n = pl(n, Gw, "$1")), n;
  };
}, Ww = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: Xo(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: Xo(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: Xo(3)
}, Vw = yt, Hf = Ld, qw = mt, Xf = et, Yf = zc, Kf = Be, zw = qc, hl = ft, Hw = Lw, Xw = Vi, Yw = Kn, Zf = Cc, Kw = Ve, Zw = Qn.f, Jw = Hn.f, Qw = Ot.f, eb = kw, tb = Ww.trim, io = "Number", un = Xf[io];
Yf[io];
var Ts = un.prototype, rb = Xf.TypeError, nb = Kf("".slice), Oi = Kf("".charCodeAt), ib = function(r) {
  var e = Zf(r, "number");
  return typeof e == "bigint" ? e : ob(e);
}, ob = function(r) {
  var e = Zf(r, "number"), n, i, s, c, g, d, y, l;
  if (Yw(e))
    throw new rb("Cannot convert a Symbol value to a number");
  if (typeof e == "string" && e.length > 2) {
    if (e = tb(e), n = Oi(e, 0), n === 43 || n === 45) {
      if (i = Oi(e, 2), i === 88 || i === 120)
        return NaN;
    } else if (n === 48) {
      switch (Oi(e, 1)) {
        case 66:
        case 98:
          s = 2, c = 49;
          break;
        case 79:
        case 111:
          s = 8, c = 55;
          break;
        default:
          return +e;
      }
      for (g = nb(e, 2), d = g.length, y = 0; y < d; y++)
        if (l = Oi(g, y), l < 48 || l > c)
          return NaN;
      return parseInt(g, s);
    }
  }
  return +e;
}, Os = zw(io, !un(" 0o1") || !un("0b1") || un("+0x1")), ab = function(r) {
  return Xw(Ts, r) && Kw(function() {
    eb(r);
  });
}, oo = function(e) {
  var n = arguments.length < 1 ? 0 : un(ib(e));
  return ab(this) ? Hw(Object(n), this, oo) : n;
};
oo.prototype = Ts;
Os && !Hf && (Ts.constructor = oo);
Vw({ global: !0, constructor: !0, wrap: !0, forced: Os }, {
  Number: oo
});
var sb = function(r, e) {
  for (var n = qw ? Zw(e) : (
    // ES3:
    "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(",")
  ), i = 0, s; n.length > i; i++)
    hl(e, s = n[i]) && !hl(r, s) && Qw(r, s, Jw(e, s));
};
(Os || Hf) && sb(Yf[io], un);
var bn = {};
Object.defineProperty(bn, "__esModule", {
  value: !0
});
bn.LogLevel = void 0;
var ub = /* @__PURE__ */ function(r) {
  return r[r.Debug = 0] = "Debug", r[r.Info = 1] = "Info", r[r.Warn = 2] = "Warn", r[r.Error = 3] = "Error", r[r.Fatal = 4] = "Fatal", r;
}({});
bn.LogLevel = ub;
Object.defineProperty(ri, "__esModule", {
  value: !0
});
ri.ConsoleLogger = void 0;
ri.buildConsoleLogger = hb;
var st = bn;
function hn(r) {
  "@babel/helpers - typeof";
  return hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, hn(r);
}
function lb(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function dl(r, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, Jf(i.key), i);
  }
}
function cb(r, e, n) {
  return e && dl(r.prototype, e), n && dl(r, n), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function fb(r, e, n) {
  return e = Jf(e), e in r ? Object.defineProperty(r, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = n, r;
}
function Jf(r) {
  var e = pb(r, "string");
  return hn(e) === "symbol" ? e : String(e);
}
function pb(r, e) {
  if (hn(r) !== "object" || r === null)
    return r;
  var n = r[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(r, e || "default");
    if (hn(i) !== "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
var Qf = /* @__PURE__ */ function() {
  function r(e) {
    lb(this, r), fb(this, "context", void 0), this.context = e || {};
  }
  return cb(r, [{
    key: "formatMessage",
    value: function(n, i, s) {
      var c = "[" + st.LogLevel[i].toUpperCase() + "] ";
      return s && s.app && (c += s.app + ": "), typeof n == "string" ? c + n : (c += "Unexpected ".concat(n.name), n.message && (c += ' "'.concat(n.message, '"')), i === st.LogLevel.Debug && n.stack && (c += `

Stack trace:
`.concat(n.stack)), c);
    }
  }, {
    key: "log",
    value: function(n, i, s) {
      var c, g;
      if (!(typeof ((c = this.context) === null || c === void 0 ? void 0 : c.level) == "number" && n < ((g = this.context) === null || g === void 0 ? void 0 : g.level)))
        switch (hn(i) === "object" && (s == null ? void 0 : s.error) === void 0 && (s.error = i), n) {
          case st.LogLevel.Debug:
            console.debug(this.formatMessage(i, st.LogLevel.Debug, s), s);
            break;
          case st.LogLevel.Info:
            console.info(this.formatMessage(i, st.LogLevel.Info, s), s);
            break;
          case st.LogLevel.Warn:
            console.warn(this.formatMessage(i, st.LogLevel.Warn, s), s);
            break;
          case st.LogLevel.Error:
            console.error(this.formatMessage(i, st.LogLevel.Error, s), s);
            break;
          case st.LogLevel.Fatal:
          default:
            console.error(this.formatMessage(i, st.LogLevel.Fatal, s), s);
            break;
        }
    }
  }, {
    key: "debug",
    value: function(n, i) {
      this.log(st.LogLevel.Debug, n, Object.assign({}, this.context, i));
    }
  }, {
    key: "info",
    value: function(n, i) {
      this.log(st.LogLevel.Info, n, Object.assign({}, this.context, i));
    }
  }, {
    key: "warn",
    value: function(n, i) {
      this.log(st.LogLevel.Warn, n, Object.assign({}, this.context, i));
    }
  }, {
    key: "error",
    value: function(n, i) {
      this.log(st.LogLevel.Error, n, Object.assign({}, this.context, i));
    }
  }, {
    key: "fatal",
    value: function(n, i) {
      this.log(st.LogLevel.Fatal, n, Object.assign({}, this.context, i));
    }
  }]), r;
}();
ri.ConsoleLogger = Qf;
function hb(r) {
  return new Qf(r);
}
var ao = {};
const db = /* @__PURE__ */ sh(Zh);
Object.defineProperty(ao, "__esModule", {
  value: !0
});
ao.LoggerBuilder = void 0;
var gb = db, gl = bn;
function Gn(r) {
  "@babel/helpers - typeof";
  return Gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Gn(r);
}
function vb(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function vl(r, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, ep(i.key), i);
  }
}
function mb(r, e, n) {
  return e && vl(r.prototype, e), n && vl(r, n), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function ml(r, e, n) {
  return e = ep(e), e in r ? Object.defineProperty(r, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = n, r;
}
function ep(r) {
  var e = yb(r, "string");
  return Gn(e) === "symbol" ? e : String(e);
}
function yb(r, e) {
  if (Gn(r) !== "object" || r === null)
    return r;
  var n = r[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(r, e || "default");
    if (Gn(i) !== "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
var wb = /* @__PURE__ */ function() {
  function r(e) {
    vb(this, r), ml(this, "context", void 0), ml(this, "factory", void 0), this.context = {}, this.factory = e;
  }
  return mb(r, [{
    key: "setApp",
    value: function(n) {
      return this.context.app = n, this;
    }
    /**
     * Set the logging level within the logging context
     *
     * @param level Logging level
     */
  }, {
    key: "setLogLevel",
    value: function(n) {
      return this.context.level = n, this;
    }
    /* eslint-disable jsdoc/no-undefined-types */
    /**
     * Set the user id within the logging context
     * @param uid User ID
     * @see {@link detectUser}
     */
    /* eslint-enable jsdoc/no-undefined-types */
  }, {
    key: "setUid",
    value: function(n) {
      return this.context.uid = n, this;
    }
    /**
     * Detect the currently logged in user and set the user id within the logging context
     */
  }, {
    key: "detectUser",
    value: function() {
      var n = (0, gb.getCurrentUser)();
      return n !== null && (this.context.uid = n.uid), this;
    }
    /**
     * Detect and use logging level configured in nextcloud config
     */
  }, {
    key: "detectLogLevel",
    value: function() {
      var n = this, i = function s() {
        if (document.readyState === "complete" || document.readyState === "interactive") {
          var c, g;
          n.context.level = (c = (g = window._oc_config) === null || g === void 0 ? void 0 : g.loglevel) !== null && c !== void 0 ? c : gl.LogLevel.Warn, window._oc_debug && (n.context.level = gl.LogLevel.Debug), document.removeEventListener("readystatechange", s);
        } else
          document.addEventListener("readystatechange", s);
      };
      return i(), this;
    }
    /** Build a logger using the logging context and factory */
  }, {
    key: "build",
    value: function() {
      return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
    }
  }]), r;
}();
ao.LoggerBuilder = wb;
(function(r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "LogLevel", {
    enumerable: !0,
    get: function() {
      return i.LogLevel;
    }
  }), r.getLogger = c, r.getLoggerBuilder = s;
  var e = ri, n = ao, i = bn;
  function s() {
    return new n.LoggerBuilder(e.buildConsoleLogger);
  }
  function c() {
    return s().build();
  }
})(ga);
var dt = {};
Object.defineProperty(dt, "__esModule", {
  value: !0
});
dt.linkTo = dt.imagePath = dt.getRootUrl = dt.generateUrl = tp = dt.generateRemoteUrl = dt.generateOcsUrl = dt.generateFilePath = void 0;
const bb = (r, e) => Bi(r, "", e);
dt.linkTo = bb;
const Eb = (r) => dn() + "/remote.php/" + r, Tb = (r) => window.location.protocol + "//" + window.location.host + Eb(r);
var tp = dt.generateRemoteUrl = Tb;
const Ob = (r, e, n) => {
  const s = Object.assign({
    ocsVersion: 2
  }, n || {}).ocsVersion === 1 ? 1 : 2;
  return window.location.protocol + "//" + window.location.host + dn() + "/ocs/v" + s + ".php" + La(r, e, n);
};
dt.generateOcsUrl = Ob;
const La = (r, e, n) => {
  const i = Object.assign({
    escape: !0
  }, n || {}), s = function(c, g) {
    return g = g || {}, c.replace(/{([^{}]*)}/g, function(d, y) {
      var l = g[y];
      return i.escape ? encodeURIComponent(typeof l == "string" || typeof l == "number" ? l.toString() : d) : typeof l == "string" || typeof l == "number" ? l.toString() : d;
    });
  };
  return r.charAt(0) !== "/" && (r = "/" + r), s(r, e || {});
}, Sb = (r, e, n) => {
  var s, c;
  const i = Object.assign({
    noRewrite: !1
  }, n || {});
  return ((c = (s = window == null ? void 0 : window.OC) == null ? void 0 : s.config) == null ? void 0 : c.modRewriteWorking) === !0 && !i.noRewrite ? dn() + La(r, e, n) : dn() + "/index.php" + La(r, e, n);
};
dt.generateUrl = Sb;
const $b = (r, e) => e.indexOf(".") === -1 ? Bi(r, "img", e + ".svg") : Bi(r, "img", e);
dt.imagePath = $b;
const Bi = (r, e, n) => {
  var c, g, d, y;
  const i = ((g = (c = window == null ? void 0 : window.OC) == null ? void 0 : c.coreApps) == null ? void 0 : g.indexOf(r)) !== -1;
  let s = dn();
  return n.substring(n.length - 3) === "php" && !i ? (s += "/index.php/apps/" + r, n !== "index.php" && (s += "/", e && (s += encodeURI(e + "/")), s += n)) : n.substring(n.length - 3) !== "php" && !i ? (s = (y = (d = window == null ? void 0 : window.OC) == null ? void 0 : d.appswebroots) == null ? void 0 : y[r], e && (s += "/" + e + "/"), s.substring(s.length - 1) !== "/" && (s += "/"), s += n) : ((r === "settings" || r === "core" || r === "search") && e === "ajax" ? s += "/index.php/" : s += "/", i || (s += "apps/"), r !== "" && (r += "/", s += r), e && (s += e + "/"), s += n), s;
};
dt.generateFilePath = Bi;
const dn = () => {
  var r;
  return ((r = window == null ? void 0 : window.OC) == null ? void 0 : r.webroot) || "";
};
dt.getRootUrl = dn;
/*! @license DOMPurify 3.0.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.6/LICENSE */
const {
  entries: rp,
  setPrototypeOf: yl,
  isFrozen: Ib,
  getPrototypeOf: Ab,
  getOwnPropertyDescriptor: np
} = Object;
let {
  freeze: vt,
  seal: qt,
  create: ip
} = Object, {
  apply: Fa,
  construct: ka
} = typeof Reflect < "u" && Reflect;
vt || (vt = function(e) {
  return e;
});
qt || (qt = function(e) {
  return e;
});
Fa || (Fa = function(e, n, i) {
  return e.apply(n, i);
});
ka || (ka = function(e, n) {
  return new e(...n);
});
const Si = Ut(Array.prototype.forEach), wl = Ut(Array.prototype.pop), Nn = Ut(Array.prototype.push), Li = Ut(String.prototype.toLowerCase), Yo = Ut(String.prototype.toString), _b = Ut(String.prototype.match), Pn = Ut(String.prototype.replace), xb = Ut(String.prototype.indexOf), Nb = Ut(String.prototype.trim), At = Ut(RegExp.prototype.test), Rn = Pb(TypeError);
function Ut(r) {
  return function(e) {
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      i[s - 1] = arguments[s];
    return Fa(r, e, i);
  };
}
function Pb(r) {
  return function() {
    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
      n[i] = arguments[i];
    return ka(r, n);
  };
}
function be(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Li;
  yl && yl(r, null);
  let i = e.length;
  for (; i--; ) {
    let s = e[i];
    if (typeof s == "string") {
      const c = n(s);
      c !== s && (Ib(e) || (e[i] = c), s = c);
    }
    r[s] = !0;
  }
  return r;
}
function Jr(r) {
  const e = ip(null);
  for (const [n, i] of rp(r))
    np(r, n) !== void 0 && (e[n] = i);
  return e;
}
function $i(r, e) {
  for (; r !== null; ) {
    const i = np(r, e);
    if (i) {
      if (i.get)
        return Ut(i.get);
      if (typeof i.value == "function")
        return Ut(i.value);
    }
    r = Ab(r);
  }
  function n(i) {
    return console.warn("fallback value for", i), null;
  }
  return n;
}
const bl = vt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ko = vt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Zo = vt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Rb = vt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Jo = vt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Cb = vt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), El = vt(["#text"]), Tl = vt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Qo = vt(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ol = vt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ii = vt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Lb = qt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Fb = qt(/<%[\w\W]*|[\w\W]*%>/gm), kb = qt(/\${[\w\W]*}/gm), Mb = qt(/^data-[\-\w.\u00B7-\uFFFF]/), Bb = qt(/^aria-[\-\w]+$/), op = qt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Ub = qt(/^(?:\w+script|data):/i), Db = qt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ap = qt(/^html$/i);
var Sl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: Lb,
  ERB_EXPR: Fb,
  TMPLIT_EXPR: kb,
  DATA_ATTR: Mb,
  ARIA_ATTR: Bb,
  IS_ALLOWED_URI: op,
  IS_SCRIPT_OR_DATA: Ub,
  ATTR_WHITESPACE: Db,
  DOCTYPE_NAME: ap
});
const jb = function() {
  return typeof window > "u" ? null : window;
}, Gb = function(e, n) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let i = null;
  const s = "data-tt-policy-suffix";
  n && n.hasAttribute(s) && (i = n.getAttribute(s));
  const c = "dompurify" + (i ? "#" + i : "");
  try {
    return e.createPolicy(c, {
      createHTML(g) {
        return g;
      },
      createScriptURL(g) {
        return g;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + c + " could not be created."), null;
  }
};
function sp() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : jb();
  const e = (se) => sp(se);
  if (e.version = "3.0.6", e.removed = [], !r || !r.document || r.document.nodeType !== 9)
    return e.isSupported = !1, e;
  let {
    document: n
  } = r;
  const i = n, s = i.currentScript, {
    DocumentFragment: c,
    HTMLTemplateElement: g,
    Node: d,
    Element: y,
    NodeFilter: l,
    NamedNodeMap: a = r.NamedNodeMap || r.MozNamedAttrMap,
    HTMLFormElement: v,
    DOMParser: p,
    trustedTypes: E
  } = r, S = y.prototype, _ = $i(S, "cloneNode"), P = $i(S, "nextSibling"), D = $i(S, "childNodes"), I = $i(S, "parentNode");
  if (typeof g == "function") {
    const se = n.createElement("template");
    se.content && se.content.ownerDocument && (n = se.content.ownerDocument);
  }
  let x, F = "";
  const {
    implementation: C,
    createNodeIterator: z,
    createDocumentFragment: q,
    getElementsByTagName: G
  } = n, {
    importNode: X
  } = i;
  let Z = {};
  e.isSupported = typeof rp == "function" && typeof I == "function" && C && C.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: H,
    ERB_EXPR: K,
    TMPLIT_EXPR: V,
    DATA_ATTR: re,
    ARIA_ATTR: pe,
    IS_SCRIPT_OR_DATA: Ae,
    ATTR_WHITESPACE: ce
  } = Sl;
  let {
    IS_ALLOWED_URI: Ee
  } = Sl, me = null;
  const ke = be({}, [...bl, ...Ko, ...Zo, ...Jo, ...El]);
  let $e = null;
  const Ze = be({}, [...Tl, ...Qo, ...Ol, ...Ii]);
  let Te = Object.seal(ip(null, {
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
  })), _e = null, Ie = null, St = !0, wt = !0, Ue = !1, Ht = !0, Re = !1, Je = !1, Nt = !1, ut = !1, bt = !1, jt = !1, Ce = !1, De = !0, cr = !1;
  const $r = "user-content-";
  let pt = !0, Pt = !1, $t = {}, It = null;
  const he = be({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let qe = null;
  const b = be({}, ["audio", "video", "img", "source", "image", "track"]);
  let $ = null;
  const L = be({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), M = "http://www.w3.org/1998/Math/MathML", h = "http://www.w3.org/2000/svg", o = "http://www.w3.org/1999/xhtml";
  let u = o, T = !1, A = null;
  const k = be({}, [M, h, o], Yo);
  let j = null;
  const te = ["application/xhtml+xml", "text/html"], le = "text/html";
  let ue = null, fe = null;
  const xe = n.createElement("form"), Xt = function(U) {
    return U instanceof RegExp || U instanceof Function;
  }, Ir = function() {
    let U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(fe && fe === U)) {
      if ((!U || typeof U != "object") && (U = {}), U = Jr(U), j = // eslint-disable-next-line unicorn/prefer-includes
      te.indexOf(U.PARSER_MEDIA_TYPE) === -1 ? j = le : j = U.PARSER_MEDIA_TYPE, ue = j === "application/xhtml+xml" ? Yo : Li, me = "ALLOWED_TAGS" in U ? be({}, U.ALLOWED_TAGS, ue) : ke, $e = "ALLOWED_ATTR" in U ? be({}, U.ALLOWED_ATTR, ue) : Ze, A = "ALLOWED_NAMESPACES" in U ? be({}, U.ALLOWED_NAMESPACES, Yo) : k, $ = "ADD_URI_SAFE_ATTR" in U ? be(
        Jr(L),
        // eslint-disable-line indent
        U.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        ue
        // eslint-disable-line indent
      ) : L, qe = "ADD_DATA_URI_TAGS" in U ? be(
        Jr(b),
        // eslint-disable-line indent
        U.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        ue
        // eslint-disable-line indent
      ) : b, It = "FORBID_CONTENTS" in U ? be({}, U.FORBID_CONTENTS, ue) : he, _e = "FORBID_TAGS" in U ? be({}, U.FORBID_TAGS, ue) : {}, Ie = "FORBID_ATTR" in U ? be({}, U.FORBID_ATTR, ue) : {}, $t = "USE_PROFILES" in U ? U.USE_PROFILES : !1, St = U.ALLOW_ARIA_ATTR !== !1, wt = U.ALLOW_DATA_ATTR !== !1, Ue = U.ALLOW_UNKNOWN_PROTOCOLS || !1, Ht = U.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Re = U.SAFE_FOR_TEMPLATES || !1, Je = U.WHOLE_DOCUMENT || !1, bt = U.RETURN_DOM || !1, jt = U.RETURN_DOM_FRAGMENT || !1, Ce = U.RETURN_TRUSTED_TYPE || !1, ut = U.FORCE_BODY || !1, De = U.SANITIZE_DOM !== !1, cr = U.SANITIZE_NAMED_PROPS || !1, pt = U.KEEP_CONTENT !== !1, Pt = U.IN_PLACE || !1, Ee = U.ALLOWED_URI_REGEXP || op, u = U.NAMESPACE || o, Te = U.CUSTOM_ELEMENT_HANDLING || {}, U.CUSTOM_ELEMENT_HANDLING && Xt(U.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Te.tagNameCheck = U.CUSTOM_ELEMENT_HANDLING.tagNameCheck), U.CUSTOM_ELEMENT_HANDLING && Xt(U.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Te.attributeNameCheck = U.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), U.CUSTOM_ELEMENT_HANDLING && typeof U.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Te.allowCustomizedBuiltInElements = U.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Re && (wt = !1), jt && (bt = !0), $t && (me = be({}, [...El]), $e = [], $t.html === !0 && (be(me, bl), be($e, Tl)), $t.svg === !0 && (be(me, Ko), be($e, Qo), be($e, Ii)), $t.svgFilters === !0 && (be(me, Zo), be($e, Qo), be($e, Ii)), $t.mathMl === !0 && (be(me, Jo), be($e, Ol), be($e, Ii))), U.ADD_TAGS && (me === ke && (me = Jr(me)), be(me, U.ADD_TAGS, ue)), U.ADD_ATTR && ($e === Ze && ($e = Jr($e)), be($e, U.ADD_ATTR, ue)), U.ADD_URI_SAFE_ATTR && be($, U.ADD_URI_SAFE_ATTR, ue), U.FORBID_CONTENTS && (It === he && (It = Jr(It)), be(It, U.FORBID_CONTENTS, ue)), pt && (me["#text"] = !0), Je && be(me, ["html", "head", "body"]), me.table && (be(me, ["tbody"]), delete _e.tbody), U.TRUSTED_TYPES_POLICY) {
        if (typeof U.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Rn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof U.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Rn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        x = U.TRUSTED_TYPES_POLICY, F = x.createHTML("");
      } else
        x === void 0 && (x = Gb(E, s)), x !== null && typeof F == "string" && (F = x.createHTML(""));
      vt && vt(U), fe = U;
    }
  }, Tn = be({}, ["mi", "mo", "mn", "ms", "mtext"]), ai = be({}, ["foreignobject", "desc", "title", "annotation-xml"]), co = be({}, ["title", "style", "font", "a", "script"]), ht = be({}, Ko);
  be(ht, Zo), be(ht, Rb);
  const Ur = be({}, Jo);
  be(Ur, Cb);
  const Dr = function(U) {
    let ee = I(U);
    (!ee || !ee.tagName) && (ee = {
      namespaceURI: u,
      tagName: "template"
    });
    const ae = Li(U.tagName), Le = Li(ee.tagName);
    return A[U.namespaceURI] ? U.namespaceURI === h ? ee.namespaceURI === o ? ae === "svg" : ee.namespaceURI === M ? ae === "svg" && (Le === "annotation-xml" || Tn[Le]) : !!ht[ae] : U.namespaceURI === M ? ee.namespaceURI === o ? ae === "math" : ee.namespaceURI === h ? ae === "math" && ai[Le] : !!Ur[ae] : U.namespaceURI === o ? ee.namespaceURI === h && !ai[Le] || ee.namespaceURI === M && !Tn[Le] ? !1 : !Ur[ae] && (co[ae] || !ht[ae]) : !!(j === "application/xhtml+xml" && A[U.namespaceURI]) : !1;
  }, Yt = function(U) {
    Nn(e.removed, {
      element: U
    });
    try {
      U.parentNode.removeChild(U);
    } catch {
      U.remove();
    }
  }, jr = function(U, ee) {
    try {
      Nn(e.removed, {
        attribute: ee.getAttributeNode(U),
        from: ee
      });
    } catch {
      Nn(e.removed, {
        attribute: null,
        from: ee
      });
    }
    if (ee.removeAttribute(U), U === "is" && !$e[U])
      if (bt || jt)
        try {
          Yt(ee);
        } catch {
        }
      else
        try {
          ee.setAttribute(U, "");
        } catch {
        }
  }, Ar = function(U) {
    let ee = null, ae = null;
    if (ut)
      U = "<remove></remove>" + U;
    else {
      const Qe = _b(U, /^[\r\n\t ]+/);
      ae = Qe && Qe[0];
    }
    j === "application/xhtml+xml" && u === o && (U = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + U + "</body></html>");
    const Le = x ? x.createHTML(U) : U;
    if (u === o)
      try {
        ee = new p().parseFromString(Le, j);
      } catch {
      }
    if (!ee || !ee.documentElement) {
      ee = C.createDocument(u, "template", null);
      try {
        ee.documentElement.innerHTML = T ? F : Le;
      } catch {
      }
    }
    const Ye = ee.body || ee.documentElement;
    return U && ae && Ye.insertBefore(n.createTextNode(ae), Ye.childNodes[0] || null), u === o ? G.call(ee, Je ? "html" : "body")[0] : Je ? ee.documentElement : Ye;
  }, Gr = function(U) {
    return z.call(
      U.ownerDocument || U,
      U,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT,
      null
    );
  }, tt = function(U) {
    return U instanceof v && (typeof U.nodeName != "string" || typeof U.textContent != "string" || typeof U.removeChild != "function" || !(U.attributes instanceof a) || typeof U.removeAttribute != "function" || typeof U.setAttribute != "function" || typeof U.namespaceURI != "string" || typeof U.insertBefore != "function" || typeof U.hasChildNodes != "function");
  }, Kt = function(U) {
    return typeof d == "function" && U instanceof d;
  }, Gt = function(U, ee, ae) {
    Z[U] && Si(Z[U], (Le) => {
      Le.call(e, ee, ae, fe);
    });
  }, Wr = function(U) {
    let ee = null;
    if (Gt("beforeSanitizeElements", U, null), tt(U))
      return Yt(U), !0;
    const ae = ue(U.nodeName);
    if (Gt("uponSanitizeElement", U, {
      tagName: ae,
      allowedTags: me
    }), U.hasChildNodes() && !Kt(U.firstElementChild) && At(/<[/\w]/g, U.innerHTML) && At(/<[/\w]/g, U.textContent))
      return Yt(U), !0;
    if (!me[ae] || _e[ae]) {
      if (!_e[ae] && Rt(ae) && (Te.tagNameCheck instanceof RegExp && At(Te.tagNameCheck, ae) || Te.tagNameCheck instanceof Function && Te.tagNameCheck(ae)))
        return !1;
      if (pt && !It[ae]) {
        const Le = I(U) || U.parentNode, Ye = D(U) || U.childNodes;
        if (Ye && Le) {
          const Qe = Ye.length;
          for (let lt = Qe - 1; lt >= 0; --lt)
            Le.insertBefore(_(Ye[lt], !0), P(U));
        }
      }
      return Yt(U), !0;
    }
    return U instanceof y && !Dr(U) || (ae === "noscript" || ae === "noembed" || ae === "noframes") && At(/<\/no(script|embed|frames)/i, U.innerHTML) ? (Yt(U), !0) : (Re && U.nodeType === 3 && (ee = U.textContent, Si([H, K, V], (Le) => {
      ee = Pn(ee, Le, " ");
    }), U.textContent !== ee && (Nn(e.removed, {
      element: U.cloneNode()
    }), U.textContent = ee)), Gt("afterSanitizeElements", U, null), !1);
  }, si = function(U, ee, ae) {
    if (De && (ee === "id" || ee === "name") && (ae in n || ae in xe))
      return !1;
    if (!(wt && !Ie[ee] && At(re, ee))) {
      if (!(St && At(pe, ee))) {
        if (!$e[ee] || Ie[ee]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Rt(U) && (Te.tagNameCheck instanceof RegExp && At(Te.tagNameCheck, U) || Te.tagNameCheck instanceof Function && Te.tagNameCheck(U)) && (Te.attributeNameCheck instanceof RegExp && At(Te.attributeNameCheck, ee) || Te.attributeNameCheck instanceof Function && Te.attributeNameCheck(ee)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            ee === "is" && Te.allowCustomizedBuiltInElements && (Te.tagNameCheck instanceof RegExp && At(Te.tagNameCheck, ae) || Te.tagNameCheck instanceof Function && Te.tagNameCheck(ae)))
          )
            return !1;
        } else if (!$[ee]) {
          if (!At(Ee, Pn(ae, ce, ""))) {
            if (!((ee === "src" || ee === "xlink:href" || ee === "href") && U !== "script" && xb(ae, "data:") === 0 && qe[U])) {
              if (!(Ue && !At(Ae, Pn(ae, ce, "")))) {
                if (ae)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Rt = function(U) {
    return U.indexOf("-") > 0;
  }, fr = function(U) {
    Gt("beforeSanitizeAttributes", U, null);
    const {
      attributes: ee
    } = U;
    if (!ee)
      return;
    const ae = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: $e
    };
    let Le = ee.length;
    for (; Le--; ) {
      const Ye = ee[Le], {
        name: Qe,
        namespaceURI: lt,
        value: Zt
      } = Ye, _r = ue(Qe);
      let at = Qe === "value" ? Zt : Nb(Zt);
      if (ae.attrName = _r, ae.attrValue = at, ae.keepAttr = !0, ae.forceKeepAttr = void 0, Gt("uponSanitizeAttribute", U, ae), at = ae.attrValue, ae.forceKeepAttr || (jr(Qe, U), !ae.keepAttr))
        continue;
      if (!Ht && At(/\/>/i, at)) {
        jr(Qe, U);
        continue;
      }
      Re && Si([H, K, V], (rt) => {
        at = Pn(at, rt, " ");
      });
      const On = ue(U.nodeName);
      if (si(On, _r, at)) {
        if (cr && (_r === "id" || _r === "name") && (jr(Qe, U), at = $r + at), x && typeof E == "object" && typeof E.getAttributeType == "function" && !lt)
          switch (E.getAttributeType(On, _r)) {
            case "TrustedHTML": {
              at = x.createHTML(at);
              break;
            }
            case "TrustedScriptURL": {
              at = x.createScriptURL(at);
              break;
            }
          }
        try {
          lt ? U.setAttributeNS(lt, Qe, at) : U.setAttribute(Qe, at), wl(e.removed);
        } catch {
        }
      }
    }
    Gt("afterSanitizeAttributes", U, null);
  }, Vr = function se(U) {
    let ee = null;
    const ae = Gr(U);
    for (Gt("beforeSanitizeShadowDOM", U, null); ee = ae.nextNode(); )
      Gt("uponSanitizeShadowNode", ee, null), !Wr(ee) && (ee.content instanceof c && se(ee.content), fr(ee));
    Gt("afterSanitizeShadowDOM", U, null);
  };
  return e.sanitize = function(se) {
    let U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ee = null, ae = null, Le = null, Ye = null;
    if (T = !se, T && (se = "<!-->"), typeof se != "string" && !Kt(se))
      if (typeof se.toString == "function") {
        if (se = se.toString(), typeof se != "string")
          throw Rn("dirty is not a string, aborting");
      } else
        throw Rn("toString is not a function");
    if (!e.isSupported)
      return se;
    if (Nt || Ir(U), e.removed = [], typeof se == "string" && (Pt = !1), Pt) {
      if (se.nodeName) {
        const Zt = ue(se.nodeName);
        if (!me[Zt] || _e[Zt])
          throw Rn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (se instanceof d)
      ee = Ar("<!---->"), ae = ee.ownerDocument.importNode(se, !0), ae.nodeType === 1 && ae.nodeName === "BODY" || ae.nodeName === "HTML" ? ee = ae : ee.appendChild(ae);
    else {
      if (!bt && !Re && !Je && // eslint-disable-next-line unicorn/prefer-includes
      se.indexOf("<") === -1)
        return x && Ce ? x.createHTML(se) : se;
      if (ee = Ar(se), !ee)
        return bt ? null : Ce ? F : "";
    }
    ee && ut && Yt(ee.firstChild);
    const Qe = Gr(Pt ? se : ee);
    for (; Le = Qe.nextNode(); )
      Wr(Le) || (Le.content instanceof c && Vr(Le.content), fr(Le));
    if (Pt)
      return se;
    if (bt) {
      if (jt)
        for (Ye = q.call(ee.ownerDocument); ee.firstChild; )
          Ye.appendChild(ee.firstChild);
      else
        Ye = ee;
      return ($e.shadowroot || $e.shadowrootmode) && (Ye = X.call(i, Ye, !0)), Ye;
    }
    let lt = Je ? ee.outerHTML : ee.innerHTML;
    return Je && me["!doctype"] && ee.ownerDocument && ee.ownerDocument.doctype && ee.ownerDocument.doctype.name && At(ap, ee.ownerDocument.doctype.name) && (lt = "<!DOCTYPE " + ee.ownerDocument.doctype.name + `>
` + lt), Re && Si([H, K, V], (Zt) => {
      lt = Pn(lt, Zt, " ");
    }), x && Ce ? x.createHTML(lt) : lt;
  }, e.setConfig = function() {
    let se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ir(se), Nt = !0;
  }, e.clearConfig = function() {
    fe = null, Nt = !1;
  }, e.isValidAttribute = function(se, U, ee) {
    fe || Ir({});
    const ae = ue(se), Le = ue(U);
    return si(ae, Le, ee);
  }, e.addHook = function(se, U) {
    typeof U == "function" && (Z[se] = Z[se] || [], Nn(Z[se], U));
  }, e.removeHook = function(se) {
    if (Z[se])
      return wl(Z[se]);
  }, e.removeHooks = function(se) {
    Z[se] && (Z[se] = []);
  }, e.removeAllHooks = function() {
    Z = {};
  }, e;
}
sp();
function er(r) {
  if (typeof r != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(r));
}
function $l(r, e) {
  for (var n = "", i = 0, s = -1, c = 0, g, d = 0; d <= r.length; ++d) {
    if (d < r.length)
      g = r.charCodeAt(d);
    else {
      if (g === 47)
        break;
      g = 47;
    }
    if (g === 47) {
      if (!(s === d - 1 || c === 1))
        if (s !== d - 1 && c === 2) {
          if (n.length < 2 || i !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length - 2) !== 46) {
            if (n.length > 2) {
              var y = n.lastIndexOf("/");
              if (y !== n.length - 1) {
                y === -1 ? (n = "", i = 0) : (n = n.slice(0, y), i = n.length - 1 - n.lastIndexOf("/")), s = d, c = 0;
                continue;
              }
            } else if (n.length === 2 || n.length === 1) {
              n = "", i = 0, s = d, c = 0;
              continue;
            }
          }
          e && (n.length > 0 ? n += "/.." : n = "..", i = 2);
        } else
          n.length > 0 ? n += "/" + r.slice(s + 1, d) : n = r.slice(s + 1, d), i = d - s - 1;
      s = d, c = 0;
    } else
      g === 46 && c !== -1 ? ++c : c = -1;
  }
  return n;
}
function Wb(r, e) {
  var n = e.dir || e.root, i = e.base || (e.name || "") + (e.ext || "");
  return n ? n === e.root ? n + i : n + r + i : i;
}
var Mn = {
  // path.resolve([from ...], to)
  resolve: function() {
    for (var e = "", n = !1, i, s = arguments.length - 1; s >= -1 && !n; s--) {
      var c;
      s >= 0 ? c = arguments[s] : (i === void 0 && (i = Mt.cwd()), c = i), er(c), c.length !== 0 && (e = c + "/" + e, n = c.charCodeAt(0) === 47);
    }
    return e = $l(e, !n), n ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
  },
  normalize: function(e) {
    if (er(e), e.length === 0)
      return ".";
    var n = e.charCodeAt(0) === 47, i = e.charCodeAt(e.length - 1) === 47;
    return e = $l(e, !n), e.length === 0 && !n && (e = "."), e.length > 0 && i && (e += "/"), n ? "/" + e : e;
  },
  isAbsolute: function(e) {
    return er(e), e.length > 0 && e.charCodeAt(0) === 47;
  },
  join: function() {
    if (arguments.length === 0)
      return ".";
    for (var e, n = 0; n < arguments.length; ++n) {
      var i = arguments[n];
      er(i), i.length > 0 && (e === void 0 ? e = i : e += "/" + i);
    }
    return e === void 0 ? "." : Mn.normalize(e);
  },
  relative: function(e, n) {
    if (er(e), er(n), e === n || (e = Mn.resolve(e), n = Mn.resolve(n), e === n))
      return "";
    for (var i = 1; i < e.length && e.charCodeAt(i) === 47; ++i)
      ;
    for (var s = e.length, c = s - i, g = 1; g < n.length && n.charCodeAt(g) === 47; ++g)
      ;
    for (var d = n.length, y = d - g, l = c < y ? c : y, a = -1, v = 0; v <= l; ++v) {
      if (v === l) {
        if (y > l) {
          if (n.charCodeAt(g + v) === 47)
            return n.slice(g + v + 1);
          if (v === 0)
            return n.slice(g + v);
        } else
          c > l && (e.charCodeAt(i + v) === 47 ? a = v : v === 0 && (a = 0));
        break;
      }
      var p = e.charCodeAt(i + v), E = n.charCodeAt(g + v);
      if (p !== E)
        break;
      p === 47 && (a = v);
    }
    var S = "";
    for (v = i + a + 1; v <= s; ++v)
      (v === s || e.charCodeAt(v) === 47) && (S.length === 0 ? S += ".." : S += "/..");
    return S.length > 0 ? S + n.slice(g + a) : (g += a, n.charCodeAt(g) === 47 && ++g, n.slice(g));
  },
  _makeLong: function(e) {
    return e;
  },
  dirname: function(e) {
    if (er(e), e.length === 0)
      return ".";
    for (var n = e.charCodeAt(0), i = n === 47, s = -1, c = !0, g = e.length - 1; g >= 1; --g)
      if (n = e.charCodeAt(g), n === 47) {
        if (!c) {
          s = g;
          break;
        }
      } else
        c = !1;
    return s === -1 ? i ? "/" : "." : i && s === 1 ? "//" : e.slice(0, s);
  },
  basename: function(e, n) {
    if (n !== void 0 && typeof n != "string")
      throw new TypeError('"ext" argument must be a string');
    er(e);
    var i = 0, s = -1, c = !0, g;
    if (n !== void 0 && n.length > 0 && n.length <= e.length) {
      if (n.length === e.length && n === e)
        return "";
      var d = n.length - 1, y = -1;
      for (g = e.length - 1; g >= 0; --g) {
        var l = e.charCodeAt(g);
        if (l === 47) {
          if (!c) {
            i = g + 1;
            break;
          }
        } else
          y === -1 && (c = !1, y = g + 1), d >= 0 && (l === n.charCodeAt(d) ? --d === -1 && (s = g) : (d = -1, s = y));
      }
      return i === s ? s = y : s === -1 && (s = e.length), e.slice(i, s);
    } else {
      for (g = e.length - 1; g >= 0; --g)
        if (e.charCodeAt(g) === 47) {
          if (!c) {
            i = g + 1;
            break;
          }
        } else
          s === -1 && (c = !1, s = g + 1);
      return s === -1 ? "" : e.slice(i, s);
    }
  },
  extname: function(e) {
    er(e);
    for (var n = -1, i = 0, s = -1, c = !0, g = 0, d = e.length - 1; d >= 0; --d) {
      var y = e.charCodeAt(d);
      if (y === 47) {
        if (!c) {
          i = d + 1;
          break;
        }
        continue;
      }
      s === -1 && (c = !1, s = d + 1), y === 46 ? n === -1 ? n = d : g !== 1 && (g = 1) : n !== -1 && (g = -1);
    }
    return n === -1 || s === -1 || // We saw a non-dot character immediately before the dot
    g === 0 || // The (right-most) trimmed path component is exactly '..'
    g === 1 && n === s - 1 && n === i + 1 ? "" : e.slice(n, s);
  },
  format: function(e) {
    if (e === null || typeof e != "object")
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
    return Wb("/", e);
  },
  parse: function(e) {
    er(e);
    var n = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0)
      return n;
    var i = e.charCodeAt(0), s = i === 47, c;
    s ? (n.root = "/", c = 1) : c = 0;
    for (var g = -1, d = 0, y = -1, l = !0, a = e.length - 1, v = 0; a >= c; --a) {
      if (i = e.charCodeAt(a), i === 47) {
        if (!l) {
          d = a + 1;
          break;
        }
        continue;
      }
      y === -1 && (l = !1, y = a + 1), i === 46 ? g === -1 ? g = a : v !== 1 && (v = 1) : g !== -1 && (v = -1);
    }
    return g === -1 || y === -1 || // We saw a non-dot character immediately before the dot
    v === 0 || // The (right-most) trimmed path component is exactly '..'
    v === 1 && g === y - 1 && g === d + 1 ? y !== -1 && (d === 0 && s ? n.base = n.name = e.slice(1, y) : n.base = n.name = e.slice(d, y)) : (d === 0 && s ? (n.name = e.slice(1, g), n.base = e.slice(1, y)) : (n.name = e.slice(d, g), n.base = e.slice(d, y)), n.ext = e.slice(g, y)), d > 0 ? n.dir = e.slice(0, d - 1) : s && (n.dir = "/"), n;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
Mn.posix = Mn;
var En = {}, Vb = Ve, qb = ot, zb = qi, Hb = qb("species"), Ss = function(r) {
  return zb >= 51 || !Vb(function() {
    var e = [], n = e.constructor = {};
    return n[Hb] = function() {
      return { foo: 1 };
    }, e[r](Boolean).foo !== 1;
  });
}, Xb = yt, Yb = ms.map, Kb = Ss, Zb = Kb("map");
Xb({ target: "Array", proto: !0, forced: !Zb }, {
  map: function(e) {
    return Yb(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var Jb = Dt, Qb = function() {
  var r = Jb(this), e = "";
  return r.hasIndices && (e += "d"), r.global && (e += "g"), r.ignoreCase && (e += "i"), r.multiline && (e += "m"), r.dotAll && (e += "s"), r.unicode && (e += "u"), r.unicodeSets && (e += "v"), r.sticky && (e += "y"), e;
}, $s = Ve, eE = et, Is = eE.RegExp, As = $s(function() {
  var r = Is("a", "y");
  return r.lastIndex = 2, r.exec("abcd") !== null;
}), tE = As || $s(function() {
  return !Is("a", "y").sticky;
}), rE = As || $s(function() {
  var r = Is("^r", "gy");
  return r.lastIndex = 2, r.exec("str") !== null;
}), up = {
  BROKEN_CARET: rE,
  MISSED_STICKY: tE,
  UNSUPPORTED_Y: As
}, nE = Ve, iE = et, oE = iE.RegExp, aE = nE(function() {
  var r = oE(".", "s");
  return !(r.dotAll && r.test(`
`) && r.flags === "s");
}), sE = Ve, uE = et, lE = uE.RegExp, cE = sE(function() {
  var r = lE("(?<a>b)", "g");
  return r.exec("b").groups.a !== "b" || "b".replace(r, "$<a>c") !== "bc";
}), on = xt, so = Be, fE = lr, pE = Qb, hE = up, dE = wn, gE = Zi, vE = Jn.get, mE = aE, yE = cE, wE = dE("native-string-replace", String.prototype.replace), Ui = RegExp.prototype.exec, Ma = Ui, bE = so("".charAt), EE = so("".indexOf), TE = so("".replace), ea = so("".slice), Ba = function() {
  var r = /a/, e = /b*/g;
  return on(Ui, r, "a"), on(Ui, e, "a"), r.lastIndex !== 0 || e.lastIndex !== 0;
}(), lp = hE.BROKEN_CARET, Ua = /()??/.exec("")[1] !== void 0, OE = Ba || Ua || lp || mE || yE;
OE && (Ma = function(e) {
  var n = this, i = vE(n), s = fE(e), c = i.raw, g, d, y, l, a, v, p;
  if (c)
    return c.lastIndex = n.lastIndex, g = on(Ma, c, s), n.lastIndex = c.lastIndex, g;
  var E = i.groups, S = lp && n.sticky, _ = on(pE, n), P = n.source, D = 0, I = s;
  if (S && (_ = TE(_, "y", ""), EE(_, "g") === -1 && (_ += "g"), I = ea(s, n.lastIndex), n.lastIndex > 0 && (!n.multiline || n.multiline && bE(s, n.lastIndex - 1) !== `
`) && (P = "(?: " + P + ")", I = " " + I, D++), d = new RegExp("^(?:" + P + ")", _)), Ua && (d = new RegExp("^" + P + "$(?!\\s)", _)), Ba && (y = n.lastIndex), l = on(Ui, S ? d : n, I), S ? l ? (l.input = ea(l.input, D), l[0] = ea(l[0], D), l.index = n.lastIndex, n.lastIndex += l[0].length) : n.lastIndex = 0 : Ba && l && (n.lastIndex = n.global ? l.index + l[0].length : y), Ua && l && l.length > 1 && on(wE, l[0], d, function() {
    for (a = 1; a < arguments.length - 2; a++)
      arguments[a] === void 0 && (l[a] = void 0);
  }), l && E)
    for (l.groups = v = gE(null), a = 0; a < E.length; a++)
      p = E[a], v[p[0]] = l[p[1]];
  return l;
});
var _s = Ma, SE = yt, Il = _s;
SE({ target: "RegExp", proto: !0, forced: /./.exec !== Il }, {
  exec: Il
});
var Al = xt, _l = Sr, $E = _s, xl = Ve, cp = ot, IE = Zn, AE = cp("species"), ta = RegExp.prototype, fp = function(r, e, n, i) {
  var s = cp(r), c = !xl(function() {
    var l = {};
    return l[s] = function() {
      return 7;
    }, ""[r](l) !== 7;
  }), g = c && !xl(function() {
    var l = !1, a = /a/;
    return r === "split" && (a = {}, a.constructor = {}, a.constructor[AE] = function() {
      return a;
    }, a.flags = "", a[s] = /./[s]), a.exec = function() {
      return l = !0, null;
    }, a[s](""), !l;
  });
  if (!c || !g || n) {
    var d = /./[s], y = e(s, ""[r], function(l, a, v, p, E) {
      var S = a.exec;
      return S === $E || S === ta.exec ? c && !E ? { done: !0, value: Al(d, a, v, p) } : { done: !0, value: Al(l, v, a, p) } : { done: !1 };
    });
    _l(String.prototype, r, y[0]), _l(ta, s, y[1]);
  }
  i && IE(ta[s], "sham", !0);
}, _E = Tf, xE = Ya, NE = TypeError, PE = function(r) {
  if (_E(r))
    return r;
  throw new NE(xE(r) + " is not a constructor");
}, Nl = Dt, RE = PE, CE = Yn, LE = ot, FE = LE("species"), kE = function(r, e) {
  var n = Nl(r).constructor, i;
  return n === void 0 || CE(i = Nl(n)[FE]) ? e : RE(i);
}, ME = sf.charAt, pp = function(r, e, n) {
  return e + (n ? ME(r, e).length : 1);
}, Pl = xt, BE = Dt, UE = Xe, DE = Tr, jE = _s, GE = TypeError, hp = function(r, e) {
  var n = r.exec;
  if (UE(n)) {
    var i = Pl(n, r, e);
    return i !== null && BE(i), i;
  }
  if (DE(r) === "RegExp")
    return Pl(jE, r, e);
  throw new GE("RegExp#exec called on incompatible receiver");
}, ra = xt, dp = Be, WE = fp, VE = Dt, qE = Yn, zE = mn, HE = kE, XE = pp, YE = is, Rl = lr, KE = Ka, Cl = hp, ZE = up, JE = Ve, Qr = ZE.UNSUPPORTED_Y, QE = 4294967295, eT = Math.min, na = dp([].push), ia = dp("".slice), tT = !JE(function() {
  var r = /(?:)/, e = r.exec;
  r.exec = function() {
    return e.apply(this, arguments);
  };
  var n = "ab".split(r);
  return n.length !== 2 || n[0] !== "a" || n[1] !== "b";
}), Ll = "abbc".split(/(b)*/)[1] === "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
"test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
".".split(/()()/).length > 1 || "".split(/.?/).length;
WE("split", function(r, e, n) {
  var i = "0".split(void 0, 0).length ? function(s, c) {
    return s === void 0 && c === 0 ? [] : ra(e, this, s, c);
  } : e;
  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function(c, g) {
      var d = zE(this), y = qE(c) ? void 0 : KE(c, r);
      return y ? ra(y, c, d, g) : ra(i, Rl(d), c, g);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function(s, c) {
      var g = VE(this), d = Rl(s);
      if (!Ll) {
        var y = n(i, g, d, c, i !== e);
        if (y.done)
          return y.value;
      }
      var l = HE(g, RegExp), a = g.unicode, v = (g.ignoreCase ? "i" : "") + (g.multiline ? "m" : "") + (g.unicode ? "u" : "") + (Qr ? "g" : "y"), p = new l(Qr ? "^(?:" + g.source + ")" : g, v), E = c === void 0 ? QE : c >>> 0;
      if (E === 0)
        return [];
      if (d.length === 0)
        return Cl(p, d) === null ? [d] : [];
      for (var S = 0, _ = 0, P = []; _ < d.length; ) {
        p.lastIndex = Qr ? 0 : _;
        var D = Cl(p, Qr ? ia(d, _) : d), I;
        if (D === null || (I = eT(YE(p.lastIndex + (Qr ? _ : 0)), d.length)) === S)
          _ = XE(d, _, a);
        else {
          if (na(P, ia(d, S, _)), P.length === E)
            return P;
          for (var x = 1; x <= D.length - 1; x++)
            if (na(P, D[x]), P.length === E)
              return P;
          _ = S = I;
        }
      }
      return na(P, ia(d, S)), P;
    }
  ];
}, Ll || !tT, Qr);
var xs = Be, rT = Or, nT = Math.floor, oa = xs("".charAt), iT = xs("".replace), aa = xs("".slice), oT = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, aT = /\$([$&'`]|\d{1,2})/g, sT = function(r, e, n, i, s, c) {
  var g = n + r.length, d = i.length, y = aT;
  return s !== void 0 && (s = rT(s), y = oT), iT(c, y, function(l, a) {
    var v;
    switch (oa(a, 0)) {
      case "$":
        return "$";
      case "&":
        return r;
      case "`":
        return aa(e, 0, n);
      case "'":
        return aa(e, g);
      case "<":
        v = s[aa(a, 1, -1)];
        break;
      default:
        var p = +a;
        if (p === 0)
          return l;
        if (p > d) {
          var E = nT(p / 10);
          return E === 0 ? l : E <= d ? i[E - 1] === void 0 ? oa(a, 1) : i[E - 1] + oa(a, 1) : l;
        }
        v = i[p - 1];
    }
    return v === void 0 ? "" : v;
  });
}, uT = jf, Fl = xt, uo = Be, lT = fp, cT = Ve, fT = Dt, pT = Xe, hT = Yn, dT = Yi, gT = is, en = lr, vT = mn, mT = pp, yT = Ka, wT = sT, bT = hp, ET = ot, Da = ET("replace"), TT = Math.max, OT = Math.min, ST = uo([].concat), sa = uo([].push), kl = uo("".indexOf), Ml = uo("".slice), $T = function(r) {
  return r === void 0 ? r : String(r);
}, IT = function() {
  return "a".replace(/./, "$0") === "$0";
}(), Bl = function() {
  return /./[Da] ? /./[Da]("a", "$0") === "" : !1;
}(), AT = !cT(function() {
  var r = /./;
  return r.exec = function() {
    var e = [];
    return e.groups = { a: "7" }, e;
  }, "".replace(r, "$<a>") !== "7";
});
lT("replace", function(r, e, n) {
  var i = Bl ? "$" : "$0";
  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function(c, g) {
      var d = vT(this), y = hT(c) ? void 0 : yT(c, Da);
      return y ? Fl(y, c, d, g) : Fl(e, en(d), c, g);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function(s, c) {
      var g = fT(this), d = en(s);
      if (typeof c == "string" && kl(c, i) === -1 && kl(c, "$<") === -1) {
        var y = n(e, g, d, c);
        if (y.done)
          return y.value;
      }
      var l = pT(c);
      l || (c = en(c));
      var a = g.global, v;
      a && (v = g.unicode, g.lastIndex = 0);
      for (var p = [], E; E = bT(g, d), !(E === null || (sa(p, E), !a)); ) {
        var S = en(E[0]);
        S === "" && (g.lastIndex = mT(d, gT(g.lastIndex), v));
      }
      for (var _ = "", P = 0, D = 0; D < p.length; D++) {
        E = p[D];
        for (var I = en(E[0]), x = TT(OT(dT(E.index), d.length), 0), F = [], C, z = 1; z < E.length; z++)
          sa(F, $T(E[z]));
        var q = E.groups;
        if (l) {
          var G = ST([I], F, x, d);
          q !== void 0 && sa(G, q), C = en(uT(c, void 0, G));
        } else
          C = wT(I, d, x, F, q, c);
        x >= P && (_ += Ml(d, P, x) + C, P = x + I.length);
      }
      return _ + Ml(d, P);
    }
  ];
}, !AT || !IT || Bl);
var _T = yt, xT = ms.filter, NT = Ss, PT = NT("filter");
_T({ target: "Array", proto: !0, forced: !PT }, {
  filter: function(e) {
    return xT(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var RT = zi, CT = Or, LT = Wi, FT = Ki, Ul = TypeError, Dl = "Reduce of empty array with no initial value", jl = function(r) {
  return function(e, n, i, s) {
    var c = CT(e), g = LT(c), d = FT(c);
    if (RT(n), d === 0 && i < 2)
      throw new Ul(Dl);
    var y = r ? d - 1 : 0, l = r ? -1 : 1;
    if (i < 2)
      for (; ; ) {
        if (y in g) {
          s = g[y], y += l;
          break;
        }
        if (y += l, r ? y < 0 : d <= y)
          throw new Ul(Dl);
      }
    for (; r ? y >= 0 : d > y; y += l)
      y in g && (s = n(s, g[y], y, c));
    return s;
  };
}, kT = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: jl(!1),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: jl(!0)
}, MT = Ve, BT = function(r, e) {
  var n = [][r];
  return !!n && MT(function() {
    n.call(null, e || function() {
      return 1;
    }, 1);
  });
}, UT = et, DT = Tr, jT = DT(UT.process) === "process", GT = yt, WT = kT.left, VT = BT, Gl = qi, qT = jT, zT = !qT && Gl > 79 && Gl < 83, HT = zT || !VT("reduce");
GT({ target: "Array", proto: !0, forced: HT }, {
  reduce: function(e) {
    var n = arguments.length;
    return WT(this, e, n, n > 1 ? arguments[1] : void 0);
  }
});
var XT = TypeError, YT = 9007199254740991, KT = function(r) {
  if (r > YT)
    throw XT("Maximum allowed index exceeded");
  return r;
}, ZT = mt, JT = Ot, QT = Xn, eO = function(r, e, n) {
  ZT ? JT.f(r, e, QT(0, n)) : r[e] = n;
}, tO = yt, rO = Ve, nO = gs, iO = ur, oO = Or, aO = Ki, Wl = KT, Vl = eO, sO = Of, uO = Ss, lO = ot, cO = qi, gp = lO("isConcatSpreadable"), fO = cO >= 51 || !rO(function() {
  var r = [];
  return r[gp] = !1, r.concat()[0] !== r;
}), pO = function(r) {
  if (!iO(r))
    return !1;
  var e = r[gp];
  return e !== void 0 ? !!e : nO(r);
}, hO = !fO || !uO("concat");
tO({ target: "Array", proto: !0, arity: 1, forced: hO }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function(e) {
    var n = oO(this), i = sO(n, 0), s = 0, c, g, d, y, l;
    for (c = -1, d = arguments.length; c < d; c++)
      if (l = c === -1 ? n : arguments[c], pO(l))
        for (y = aO(l), Wl(s + y), g = 0; g < y; g++, s++)
          g in l && Vl(i, s, l[g]);
      else
        Wl(s + 1), Vl(i, s++, l);
    return i.length = s, i;
  }
});
Object.defineProperty(En, "__esModule", {
  value: !0
});
En.encodePath = dO;
En.basename = gO;
En.dirname = vO;
En.joinPaths = ja;
En.isSamePath = mO;
function dO(r) {
  return r && r.split("/").map(encodeURIComponent).join("/");
}
function gO(r) {
  return r.replace(/\\/g, "/").replace(/.*\//, "");
}
function vO(r) {
  return r.replace(/\\/g, "/").replace(/\/[^\/]*$/, "");
}
function ja() {
  for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
    e[n] = arguments[n];
  if (arguments.length < 1)
    return "";
  var i = e.filter(function(a) {
    return a.length > 0;
  });
  if (i.length < 1)
    return "";
  var s = i[i.length - 1], c = i[0].charAt(0) === "/", g = s.charAt(s.length - 1) === "/", d = i.reduce(function(a, v) {
    return a.concat(v.split("/"));
  }, []), y = !c, l = d.reduce(function(a, v) {
    return v === "" ? a : y ? (y = !1, a + v) : a + "/" + v;
  }, "");
  return g ? l + "/" : l;
}
function mO(r, e) {
  var n = (r || "").split("/").filter(function(s) {
    return s !== ".";
  }), i = (e || "").split("/").filter(function(s) {
    return s !== ".";
  });
  return r = ja.apply(void 0, n), e = ja.apply(void 0, i), r === e;
}
/*! For license information please see index.js.LICENSE.txt */
var yO = { 2: (r) => {
  function e(s, c, g) {
    s instanceof RegExp && (s = n(s, g)), c instanceof RegExp && (c = n(c, g));
    var d = i(s, c, g);
    return d && { start: d[0], end: d[1], pre: g.slice(0, d[0]), body: g.slice(d[0] + s.length, d[1]), post: g.slice(d[1] + c.length) };
  }
  function n(s, c) {
    var g = c.match(s);
    return g ? g[0] : null;
  }
  function i(s, c, g) {
    var d, y, l, a, v, p = g.indexOf(s), E = g.indexOf(c, p + 1), S = p;
    if (p >= 0 && E > 0) {
      for (d = [], l = g.length; S >= 0 && !v; )
        S == p ? (d.push(S), p = g.indexOf(s, S + 1)) : d.length == 1 ? v = [d.pop(), E] : ((y = d.pop()) < l && (l = y, a = E), E = g.indexOf(c, S + 1)), S = p < E && p >= 0 ? p : E;
      d.length && (v = [l, a]);
    }
    return v;
  }
  r.exports = e, e.range = i;
}, 101: function(r, e, n) {
  var i;
  r = n.nmd(r), function(s) {
    var c = (r && r.exports, typeof li == "object" && li);
    c.global !== c && c.window;
    var g = function(v) {
      this.message = v;
    };
    (g.prototype = new Error()).name = "InvalidCharacterError";
    var d = function(v) {
      throw new g(v);
    }, y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = /[\t\n\f\r ]/g, a = { encode: function(v) {
      v = String(v), /[^\0-\xFF]/.test(v) && d("The string to be encoded contains characters outside of the Latin1 range.");
      for (var p, E, S, _, P = v.length % 3, D = "", I = -1, x = v.length - P; ++I < x; )
        p = v.charCodeAt(I) << 16, E = v.charCodeAt(++I) << 8, S = v.charCodeAt(++I), D += y.charAt((_ = p + E + S) >> 18 & 63) + y.charAt(_ >> 12 & 63) + y.charAt(_ >> 6 & 63) + y.charAt(63 & _);
      return P == 2 ? (p = v.charCodeAt(I) << 8, E = v.charCodeAt(++I), D += y.charAt((_ = p + E) >> 10) + y.charAt(_ >> 4 & 63) + y.charAt(_ << 2 & 63) + "=") : P == 1 && (_ = v.charCodeAt(I), D += y.charAt(_ >> 2) + y.charAt(_ << 4 & 63) + "=="), D;
    }, decode: function(v) {
      var p = (v = String(v).replace(l, "")).length;
      p % 4 == 0 && (p = (v = v.replace(/==?$/, "")).length), (p % 4 == 1 || /[^+a-zA-Z0-9/]/.test(v)) && d("Invalid character: the string to be decoded is not correctly encoded.");
      for (var E, S, _ = 0, P = "", D = -1; ++D < p; )
        S = y.indexOf(v.charAt(D)), E = _ % 4 ? 64 * E + S : S, _++ % 4 && (P += String.fromCharCode(255 & E >> (-2 * _ & 6)));
      return P;
    }, version: "1.0.0" };
    (i = (function() {
      return a;
    }).call(e, n, e, r)) === void 0 || (r.exports = i);
  }();
}, 172: (r, e) => {
  e.d = function(n) {
    if (!n)
      return 0;
    for (var i = (n = n.toString()).length, s = n.length; s--; ) {
      var c = n.charCodeAt(s);
      56320 <= c && c <= 57343 && s--, 127 < c && c <= 2047 ? i++ : 2047 < c && c <= 65535 && (i += 2);
    }
    return i;
  };
}, 526: (r) => {
  var e = { utf8: { stringToBytes: function(n) {
    return e.bin.stringToBytes(unescape(encodeURIComponent(n)));
  }, bytesToString: function(n) {
    return decodeURIComponent(escape(e.bin.bytesToString(n)));
  } }, bin: { stringToBytes: function(n) {
    for (var i = [], s = 0; s < n.length; s++)
      i.push(255 & n.charCodeAt(s));
    return i;
  }, bytesToString: function(n) {
    for (var i = [], s = 0; s < n.length; s++)
      i.push(String.fromCharCode(n[s]));
    return i.join("");
  } } };
  r.exports = e;
}, 298: (r) => {
  var e, n;
  e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = { rotl: function(i, s) {
    return i << s | i >>> 32 - s;
  }, rotr: function(i, s) {
    return i << 32 - s | i >>> s;
  }, endian: function(i) {
    if (i.constructor == Number)
      return 16711935 & n.rotl(i, 8) | 4278255360 & n.rotl(i, 24);
    for (var s = 0; s < i.length; s++)
      i[s] = n.endian(i[s]);
    return i;
  }, randomBytes: function(i) {
    for (var s = []; i > 0; i--)
      s.push(Math.floor(256 * Math.random()));
    return s;
  }, bytesToWords: function(i) {
    for (var s = [], c = 0, g = 0; c < i.length; c++, g += 8)
      s[g >>> 5] |= i[c] << 24 - g % 32;
    return s;
  }, wordsToBytes: function(i) {
    for (var s = [], c = 0; c < 32 * i.length; c += 8)
      s.push(i[c >>> 5] >>> 24 - c % 32 & 255);
    return s;
  }, bytesToHex: function(i) {
    for (var s = [], c = 0; c < i.length; c++)
      s.push((i[c] >>> 4).toString(16)), s.push((15 & i[c]).toString(16));
    return s.join("");
  }, hexToBytes: function(i) {
    for (var s = [], c = 0; c < i.length; c += 2)
      s.push(parseInt(i.substr(c, 2), 16));
    return s;
  }, bytesToBase64: function(i) {
    for (var s = [], c = 0; c < i.length; c += 3)
      for (var g = i[c] << 16 | i[c + 1] << 8 | i[c + 2], d = 0; d < 4; d++)
        8 * c + 6 * d <= 8 * i.length ? s.push(e.charAt(g >>> 6 * (3 - d) & 63)) : s.push("=");
    return s.join("");
  }, base64ToBytes: function(i) {
    i = i.replace(/[^A-Z0-9+\/]/gi, "");
    for (var s = [], c = 0, g = 0; c < i.length; g = ++c % 4)
      g != 0 && s.push((e.indexOf(i.charAt(c - 1)) & Math.pow(2, -2 * g + 8) - 1) << 2 * g | e.indexOf(i.charAt(c)) >>> 6 - 2 * g);
    return s;
  } }, r.exports = n;
}, 635: (r, e, n) => {
  const i = n(31), s = n(338), c = n(221);
  r.exports = { XMLParser: s, XMLValidator: i, XMLBuilder: c };
}, 705: (r, e) => {
  const n = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", i = "[" + n + "][" + n + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*", s = new RegExp("^" + i + "$");
  e.isExist = function(c) {
    return c !== void 0;
  }, e.isEmptyObject = function(c) {
    return Object.keys(c).length === 0;
  }, e.merge = function(c, g, d) {
    if (g) {
      const y = Object.keys(g), l = y.length;
      for (let a = 0; a < l; a++)
        c[y[a]] = d === "strict" ? [g[y[a]]] : g[y[a]];
    }
  }, e.getValue = function(c) {
    return e.isExist(c) ? c : "";
  }, e.isName = function(c) {
    return s.exec(c) != null;
  }, e.getAllMatches = function(c, g) {
    const d = [];
    let y = g.exec(c);
    for (; y; ) {
      const l = [];
      l.startIndex = g.lastIndex - y[0].length;
      const a = y.length;
      for (let v = 0; v < a; v++)
        l.push(y[v]);
      d.push(l), y = g.exec(c);
    }
    return d;
  }, e.nameRegexp = i;
}, 31: (r, e, n) => {
  const i = n(705), s = { allowBooleanAttributes: !1, unpairedTags: [] };
  function c(I) {
    return I === " " || I === "	" || I === `
` || I === "\r";
  }
  function g(I, x) {
    const F = x;
    for (; x < I.length; x++)
      if (!(I[x] != "?" && I[x] != " ")) {
        const C = I.substr(F, x - F);
        if (x > 5 && C === "xml")
          return S("InvalidXml", "XML declaration allowed only at the start of the document.", P(I, x));
        if (I[x] == "?" && I[x + 1] == ">") {
          x++;
          break;
        }
      }
    return x;
  }
  function d(I, x) {
    if (I.length > x + 5 && I[x + 1] === "-" && I[x + 2] === "-") {
      for (x += 3; x < I.length; x++)
        if (I[x] === "-" && I[x + 1] === "-" && I[x + 2] === ">") {
          x += 2;
          break;
        }
    } else if (I.length > x + 8 && I[x + 1] === "D" && I[x + 2] === "O" && I[x + 3] === "C" && I[x + 4] === "T" && I[x + 5] === "Y" && I[x + 6] === "P" && I[x + 7] === "E") {
      let F = 1;
      for (x += 8; x < I.length; x++)
        if (I[x] === "<")
          F++;
        else if (I[x] === ">" && (F--, F === 0))
          break;
    } else if (I.length > x + 9 && I[x + 1] === "[" && I[x + 2] === "C" && I[x + 3] === "D" && I[x + 4] === "A" && I[x + 5] === "T" && I[x + 6] === "A" && I[x + 7] === "[") {
      for (x += 8; x < I.length; x++)
        if (I[x] === "]" && I[x + 1] === "]" && I[x + 2] === ">") {
          x += 2;
          break;
        }
    }
    return x;
  }
  e.validate = function(I, x) {
    x = Object.assign({}, s, x);
    const F = [];
    let C = !1, z = !1;
    I[0] === "\uFEFF" && (I = I.substr(1));
    for (let G = 0; G < I.length; G++)
      if (I[G] === "<" && I[G + 1] === "?") {
        if (G += 2, G = g(I, G), G.err)
          return G;
      } else {
        if (I[G] !== "<") {
          if (c(I[G]))
            continue;
          return S("InvalidChar", "char '" + I[G] + "' is not expected.", P(I, G));
        }
        {
          let X = G;
          if (G++, I[G] === "!") {
            G = d(I, G);
            continue;
          }
          {
            let Z = !1;
            I[G] === "/" && (Z = !0, G++);
            let H = "";
            for (; G < I.length && I[G] !== ">" && I[G] !== " " && I[G] !== "	" && I[G] !== `
` && I[G] !== "\r"; G++)
              H += I[G];
            if (H = H.trim(), H[H.length - 1] === "/" && (H = H.substring(0, H.length - 1), G--), q = H, !i.isName(q)) {
              let re;
              return re = H.trim().length === 0 ? "Invalid space after '<'." : "Tag '" + H + "' is an invalid name.", S("InvalidTag", re, P(I, G));
            }
            const K = a(I, G);
            if (K === !1)
              return S("InvalidAttr", "Attributes for '" + H + "' have open quote.", P(I, G));
            let V = K.value;
            if (G = K.index, V[V.length - 1] === "/") {
              const re = G - V.length;
              V = V.substring(0, V.length - 1);
              const pe = p(V, x);
              if (pe !== !0)
                return S(pe.err.code, pe.err.msg, P(I, re + pe.err.line));
              C = !0;
            } else if (Z) {
              if (!K.tagClosed)
                return S("InvalidTag", "Closing tag '" + H + "' doesn't have proper closing.", P(I, G));
              if (V.trim().length > 0)
                return S("InvalidTag", "Closing tag '" + H + "' can't have attributes or invalid starting.", P(I, X));
              {
                const re = F.pop();
                if (H !== re.tagName) {
                  let pe = P(I, re.tagStartPos);
                  return S("InvalidTag", "Expected closing tag '" + re.tagName + "' (opened in line " + pe.line + ", col " + pe.col + ") instead of closing tag '" + H + "'.", P(I, X));
                }
                F.length == 0 && (z = !0);
              }
            } else {
              const re = p(V, x);
              if (re !== !0)
                return S(re.err.code, re.err.msg, P(I, G - V.length + re.err.line));
              if (z === !0)
                return S("InvalidXml", "Multiple possible root nodes found.", P(I, G));
              x.unpairedTags.indexOf(H) !== -1 || F.push({ tagName: H, tagStartPos: X }), C = !0;
            }
            for (G++; G < I.length; G++)
              if (I[G] === "<") {
                if (I[G + 1] === "!") {
                  G++, G = d(I, G);
                  continue;
                }
                if (I[G + 1] !== "?")
                  break;
                if (G = g(I, ++G), G.err)
                  return G;
              } else if (I[G] === "&") {
                const re = E(I, G);
                if (re == -1)
                  return S("InvalidChar", "char '&' is not expected.", P(I, G));
                G = re;
              } else if (z === !0 && !c(I[G]))
                return S("InvalidXml", "Extra text at the end", P(I, G));
            I[G] === "<" && G--;
          }
        }
      }
    var q;
    return C ? F.length == 1 ? S("InvalidTag", "Unclosed tag '" + F[0].tagName + "'.", P(I, F[0].tagStartPos)) : !(F.length > 0) || S("InvalidXml", "Invalid '" + JSON.stringify(F.map((G) => G.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 }) : S("InvalidXml", "Start tag expected.", 1);
  };
  const y = '"', l = "'";
  function a(I, x) {
    let F = "", C = "", z = !1;
    for (; x < I.length; x++) {
      if (I[x] === y || I[x] === l)
        C === "" ? C = I[x] : C !== I[x] || (C = "");
      else if (I[x] === ">" && C === "") {
        z = !0;
        break;
      }
      F += I[x];
    }
    return C === "" && { value: F, index: x, tagClosed: z };
  }
  const v = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
  function p(I, x) {
    const F = i.getAllMatches(I, v), C = {};
    for (let z = 0; z < F.length; z++) {
      if (F[z][1].length === 0)
        return S("InvalidAttr", "Attribute '" + F[z][2] + "' has no space in starting.", D(F[z]));
      if (F[z][3] !== void 0 && F[z][4] === void 0)
        return S("InvalidAttr", "Attribute '" + F[z][2] + "' is without value.", D(F[z]));
      if (F[z][3] === void 0 && !x.allowBooleanAttributes)
        return S("InvalidAttr", "boolean attribute '" + F[z][2] + "' is not allowed.", D(F[z]));
      const q = F[z][2];
      if (!_(q))
        return S("InvalidAttr", "Attribute '" + q + "' is an invalid name.", D(F[z]));
      if (C.hasOwnProperty(q))
        return S("InvalidAttr", "Attribute '" + q + "' is repeated.", D(F[z]));
      C[q] = 1;
    }
    return !0;
  }
  function E(I, x) {
    if (I[++x] === ";")
      return -1;
    if (I[x] === "#")
      return function(C, z) {
        let q = /\d/;
        for (C[z] === "x" && (z++, q = /[\da-fA-F]/); z < C.length; z++) {
          if (C[z] === ";")
            return z;
          if (!C[z].match(q))
            break;
        }
        return -1;
      }(I, ++x);
    let F = 0;
    for (; x < I.length; x++, F++)
      if (!(I[x].match(/\w/) && F < 20)) {
        if (I[x] === ";")
          break;
        return -1;
      }
    return x;
  }
  function S(I, x, F) {
    return { err: { code: I, msg: x, line: F.line || F, col: F.col } };
  }
  function _(I) {
    return i.isName(I);
  }
  function P(I, x) {
    const F = I.substring(0, x).split(/\r?\n/);
    return { line: F.length, col: F[F.length - 1].length + 1 };
  }
  function D(I) {
    return I.startIndex + I[1].length;
  }
}, 221: (r, e, n) => {
  const i = n(87), s = { attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, cdataPropName: !1, format: !1, indentBy: "  ", suppressEmptyNode: !1, suppressUnpairedNode: !0, suppressBooleanAttributes: !0, tagValueProcessor: function(l, a) {
    return a;
  }, attributeValueProcessor: function(l, a) {
    return a;
  }, preserveOrder: !1, commentPropName: !1, unpairedTags: [], entities: [{ regex: new RegExp("&", "g"), val: "&amp;" }, { regex: new RegExp(">", "g"), val: "&gt;" }, { regex: new RegExp("<", "g"), val: "&lt;" }, { regex: new RegExp("'", "g"), val: "&apos;" }, { regex: new RegExp('"', "g"), val: "&quot;" }], processEntities: !0, stopNodes: [], oneListGroup: !1 };
  function c(l) {
    this.options = Object.assign({}, s, l), this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function() {
      return !1;
    } : (this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = y), this.processTextOrObjNode = g, this.options.format ? (this.indentate = d, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
      return "";
    }, this.tagEndChar = ">", this.newLine = "");
  }
  function g(l, a, v) {
    const p = this.j2x(l, v + 1);
    return l[this.options.textNodeName] !== void 0 && Object.keys(l).length === 1 ? this.buildTextValNode(l[this.options.textNodeName], a, p.attrStr, v) : this.buildObjectNode(p.val, a, p.attrStr, v);
  }
  function d(l) {
    return this.options.indentBy.repeat(l);
  }
  function y(l) {
    return !(!l.startsWith(this.options.attributeNamePrefix) || l === this.options.textNodeName) && l.substr(this.attrPrefixLen);
  }
  c.prototype.build = function(l) {
    return this.options.preserveOrder ? i(l, this.options) : (Array.isArray(l) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (l = { [this.options.arrayNodeName]: l }), this.j2x(l, 0).val);
  }, c.prototype.j2x = function(l, a) {
    let v = "", p = "";
    for (let E in l)
      if (l[E] === void 0)
        this.isAttribute(E) && (p += "");
      else if (l[E] === null)
        this.isAttribute(E) ? p += "" : E[0] === "?" ? p += this.indentate(a) + "<" + E + "?" + this.tagEndChar : p += this.indentate(a) + "<" + E + "/" + this.tagEndChar;
      else if (l[E] instanceof Date)
        p += this.buildTextValNode(l[E], E, "", a);
      else if (typeof l[E] != "object") {
        const S = this.isAttribute(E);
        if (S)
          v += this.buildAttrPairStr(S, "" + l[E]);
        else if (E === this.options.textNodeName) {
          let _ = this.options.tagValueProcessor(E, "" + l[E]);
          p += this.replaceEntitiesValue(_);
        } else
          p += this.buildTextValNode(l[E], E, "", a);
      } else if (Array.isArray(l[E])) {
        const S = l[E].length;
        let _ = "";
        for (let P = 0; P < S; P++) {
          const D = l[E][P];
          D === void 0 || (D === null ? E[0] === "?" ? p += this.indentate(a) + "<" + E + "?" + this.tagEndChar : p += this.indentate(a) + "<" + E + "/" + this.tagEndChar : typeof D == "object" ? this.options.oneListGroup ? _ += this.j2x(D, a + 1).val : _ += this.processTextOrObjNode(D, E, a) : _ += this.buildTextValNode(D, E, "", a));
        }
        this.options.oneListGroup && (_ = this.buildObjectNode(_, E, "", a)), p += _;
      } else if (this.options.attributesGroupName && E === this.options.attributesGroupName) {
        const S = Object.keys(l[E]), _ = S.length;
        for (let P = 0; P < _; P++)
          v += this.buildAttrPairStr(S[P], "" + l[E][S[P]]);
      } else
        p += this.processTextOrObjNode(l[E], E, a);
    return { attrStr: v, val: p };
  }, c.prototype.buildAttrPairStr = function(l, a) {
    return a = this.options.attributeValueProcessor(l, "" + a), a = this.replaceEntitiesValue(a), this.options.suppressBooleanAttributes && a === "true" ? " " + l : " " + l + '="' + a + '"';
  }, c.prototype.buildObjectNode = function(l, a, v, p) {
    if (l === "")
      return a[0] === "?" ? this.indentate(p) + "<" + a + v + "?" + this.tagEndChar : this.indentate(p) + "<" + a + v + this.closeTag(a) + this.tagEndChar;
    {
      let E = "</" + a + this.tagEndChar, S = "";
      return a[0] === "?" && (S = "?", E = ""), !v && v !== "" || l.indexOf("<") !== -1 ? this.options.commentPropName !== !1 && a === this.options.commentPropName && S.length === 0 ? this.indentate(p) + "<!--".concat(l, "-->") + this.newLine : this.indentate(p) + "<" + a + v + S + this.tagEndChar + l + this.indentate(p) + E : this.indentate(p) + "<" + a + v + S + ">" + l + E;
    }
  }, c.prototype.closeTag = function(l) {
    let a = "";
    return this.options.unpairedTags.indexOf(l) !== -1 ? this.options.suppressUnpairedNode || (a = "/") : a = this.options.suppressEmptyNode ? "/" : "></".concat(l), a;
  }, c.prototype.buildTextValNode = function(l, a, v, p) {
    if (this.options.cdataPropName !== !1 && a === this.options.cdataPropName)
      return this.indentate(p) + "<![CDATA[".concat(l, "]]>") + this.newLine;
    if (this.options.commentPropName !== !1 && a === this.options.commentPropName)
      return this.indentate(p) + "<!--".concat(l, "-->") + this.newLine;
    if (a[0] === "?")
      return this.indentate(p) + "<" + a + v + "?" + this.tagEndChar;
    {
      let E = this.options.tagValueProcessor(a, l);
      return E = this.replaceEntitiesValue(E), E === "" ? this.indentate(p) + "<" + a + v + this.closeTag(a) + this.tagEndChar : this.indentate(p) + "<" + a + v + ">" + E + "</" + a + this.tagEndChar;
    }
  }, c.prototype.replaceEntitiesValue = function(l) {
    if (l && l.length > 0 && this.options.processEntities)
      for (let a = 0; a < this.options.entities.length; a++) {
        const v = this.options.entities[a];
        l = l.replace(v.regex, v.val);
      }
    return l;
  }, r.exports = c;
}, 87: (r) => {
  function e(g, d, y, l) {
    let a = "", v = !1;
    for (let p = 0; p < g.length; p++) {
      const E = g[p], S = n(E);
      let _ = "";
      if (_ = y.length === 0 ? S : "".concat(y, ".").concat(S), S === d.textNodeName) {
        let F = E[S];
        s(_, d) || (F = d.tagValueProcessor(S, F), F = c(F, d)), v && (a += l), a += F, v = !1;
        continue;
      }
      if (S === d.cdataPropName) {
        v && (a += l), a += "<![CDATA[".concat(E[S][0][d.textNodeName], "]]>"), v = !1;
        continue;
      }
      if (S === d.commentPropName) {
        a += l + "<!--".concat(E[S][0][d.textNodeName], "-->"), v = !0;
        continue;
      }
      if (S[0] === "?") {
        const F = i(E[":@"], d), C = S === "?xml" ? "" : l;
        let z = E[S][0][d.textNodeName];
        z = z.length !== 0 ? " " + z : "", a += C + "<".concat(S).concat(z).concat(F, "?>"), v = !0;
        continue;
      }
      let P = l;
      P !== "" && (P += d.indentBy);
      const D = i(E[":@"], d), I = l + "<".concat(S).concat(D), x = e(E[S], d, _, P);
      d.unpairedTags.indexOf(S) !== -1 ? d.suppressUnpairedNode ? a += I + ">" : a += I + "/>" : x && x.length !== 0 || !d.suppressEmptyNode ? x && x.endsWith(">") ? a += I + ">".concat(x).concat(l, "</").concat(S, ">") : (a += I + ">", x && l !== "" && (x.includes("/>") || x.includes("</")) ? a += l + d.indentBy + x + l : a += x, a += "</".concat(S, ">")) : a += I + "/>", v = !0;
    }
    return a;
  }
  function n(g) {
    const d = Object.keys(g);
    for (let y = 0; y < d.length; y++) {
      const l = d[y];
      if (l !== ":@")
        return l;
    }
  }
  function i(g, d) {
    let y = "";
    if (g && !d.ignoreAttributes)
      for (let l in g) {
        let a = d.attributeValueProcessor(l, g[l]);
        a = c(a, d), a === !0 && d.suppressBooleanAttributes ? y += " ".concat(l.substr(d.attributeNamePrefix.length)) : y += " ".concat(l.substr(d.attributeNamePrefix.length), '="').concat(a, '"');
      }
    return y;
  }
  function s(g, d) {
    let y = (g = g.substr(0, g.length - d.textNodeName.length - 1)).substr(g.lastIndexOf(".") + 1);
    for (let l in d.stopNodes)
      if (d.stopNodes[l] === g || d.stopNodes[l] === "*." + y)
        return !0;
    return !1;
  }
  function c(g, d) {
    if (g && g.length > 0 && d.processEntities)
      for (let y = 0; y < d.entities.length; y++) {
        const l = d.entities[y];
        g = g.replace(l.regex, l.val);
      }
    return g;
  }
  r.exports = function(g, d) {
    let y = "";
    return d.format && d.indentBy.length > 0 && (y = `
`), e(g, d, "", y);
  };
}, 193: (r, e, n) => {
  const i = n(705);
  function s(v, p) {
    let E = "";
    for (; p < v.length && v[p] !== "'" && v[p] !== '"'; p++)
      E += v[p];
    if (E = E.trim(), E.indexOf(" ") !== -1)
      throw new Error("External entites are not supported");
    const S = v[p++];
    let _ = "";
    for (; p < v.length && v[p] !== S; p++)
      _ += v[p];
    return [E, _, p];
  }
  function c(v, p) {
    return v[p + 1] === "!" && v[p + 2] === "-" && v[p + 3] === "-";
  }
  function g(v, p) {
    return v[p + 1] === "!" && v[p + 2] === "E" && v[p + 3] === "N" && v[p + 4] === "T" && v[p + 5] === "I" && v[p + 6] === "T" && v[p + 7] === "Y";
  }
  function d(v, p) {
    return v[p + 1] === "!" && v[p + 2] === "E" && v[p + 3] === "L" && v[p + 4] === "E" && v[p + 5] === "M" && v[p + 6] === "E" && v[p + 7] === "N" && v[p + 8] === "T";
  }
  function y(v, p) {
    return v[p + 1] === "!" && v[p + 2] === "A" && v[p + 3] === "T" && v[p + 4] === "T" && v[p + 5] === "L" && v[p + 6] === "I" && v[p + 7] === "S" && v[p + 8] === "T";
  }
  function l(v, p) {
    return v[p + 1] === "!" && v[p + 2] === "N" && v[p + 3] === "O" && v[p + 4] === "T" && v[p + 5] === "A" && v[p + 6] === "T" && v[p + 7] === "I" && v[p + 8] === "O" && v[p + 9] === "N";
  }
  function a(v) {
    if (i.isName(v))
      return v;
    throw new Error("Invalid entity name ".concat(v));
  }
  r.exports = function(v, p) {
    const E = {};
    if (v[p + 3] !== "O" || v[p + 4] !== "C" || v[p + 5] !== "T" || v[p + 6] !== "Y" || v[p + 7] !== "P" || v[p + 8] !== "E")
      throw new Error("Invalid Tag instead of DOCTYPE");
    {
      p += 9;
      let S = 1, _ = !1, P = !1, D = "";
      for (; p < v.length; p++)
        if (v[p] !== "<" || P)
          if (v[p] === ">") {
            if (P ? v[p - 1] === "-" && v[p - 2] === "-" && (P = !1, S--) : S--, S === 0)
              break;
          } else
            v[p] === "[" ? _ = !0 : D += v[p];
        else {
          if (_ && g(v, p))
            p += 7, [entityName, val, p] = s(v, p + 1), val.indexOf("&") === -1 && (E[a(entityName)] = { regx: RegExp("&".concat(entityName, ";"), "g"), val });
          else if (_ && d(v, p))
            p += 8;
          else if (_ && y(v, p))
            p += 8;
          else if (_ && l(v, p))
            p += 9;
          else {
            if (!c)
              throw new Error("Invalid DOCTYPE");
            P = !0;
          }
          S++, D = "";
        }
      if (S !== 0)
        throw new Error("Unclosed DOCTYPE");
    }
    return { entities: E, i: p };
  };
}, 63: (r, e) => {
  const n = { preserveOrder: !1, attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, removeNSPrefix: !1, allowBooleanAttributes: !1, parseTagValue: !0, parseAttributeValue: !1, trimValues: !0, cdataPropName: !1, numberParseOptions: { hex: !0, leadingZeros: !0, eNotation: !0 }, tagValueProcessor: function(i, s) {
    return s;
  }, attributeValueProcessor: function(i, s) {
    return s;
  }, stopNodes: [], alwaysCreateTextNode: !1, isArray: () => !1, commentPropName: !1, unpairedTags: [], processEntities: !0, htmlEntities: !1, ignoreDeclaration: !1, ignorePiTags: !1, transformTagName: !1, transformAttributeName: !1, updateTag: function(i, s, c) {
    return i;
  } };
  e.buildOptions = function(i) {
    return Object.assign({}, n, i);
  }, e.defaultOptions = n;
}, 299: (r, e, n) => {
  const i = n(705), s = n(365), c = n(193), g = n(494);
  function d(C) {
    const z = Object.keys(C);
    for (let q = 0; q < z.length; q++) {
      const G = z[q];
      this.lastEntities[G] = { regex: new RegExp("&" + G + ";", "g"), val: C[G] };
    }
  }
  function y(C, z, q, G, X, Z, H) {
    if (C !== void 0 && (this.options.trimValues && !G && (C = C.trim()), C.length > 0)) {
      H || (C = this.replaceEntitiesValue(C));
      const K = this.options.tagValueProcessor(z, C, q, X, Z);
      return K == null ? C : typeof K != typeof C || K !== C ? K : this.options.trimValues || C.trim() === C ? F(C, this.options.parseTagValue, this.options.numberParseOptions) : C;
    }
  }
  function l(C) {
    if (this.options.removeNSPrefix) {
      const z = C.split(":"), q = C.charAt(0) === "/" ? "/" : "";
      if (z[0] === "xmlns")
        return "";
      z.length === 2 && (C = q + z[1]);
    }
    return C;
  }
  "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, i.nameRegexp);
  const a = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
  function v(C, z, q) {
    if (!this.options.ignoreAttributes && typeof C == "string") {
      const G = i.getAllMatches(C, a), X = G.length, Z = {};
      for (let H = 0; H < X; H++) {
        const K = this.resolveNameSpace(G[H][1]);
        let V = G[H][4], re = this.options.attributeNamePrefix + K;
        if (K.length)
          if (this.options.transformAttributeName && (re = this.options.transformAttributeName(re)), re === "__proto__" && (re = "#__proto__"), V !== void 0) {
            this.options.trimValues && (V = V.trim()), V = this.replaceEntitiesValue(V);
            const pe = this.options.attributeValueProcessor(K, V, z);
            Z[re] = pe == null ? V : typeof pe != typeof V || pe !== V ? pe : F(V, this.options.parseAttributeValue, this.options.numberParseOptions);
          } else
            this.options.allowBooleanAttributes && (Z[re] = !0);
      }
      if (!Object.keys(Z).length)
        return;
      if (this.options.attributesGroupName) {
        const H = {};
        return H[this.options.attributesGroupName] = Z, H;
      }
      return Z;
    }
  }
  const p = function(C) {
    C = C.replace(/\r\n?/g, `
`);
    const z = new s("!xml");
    let q = z, G = "", X = "";
    for (let Z = 0; Z < C.length; Z++)
      if (C[Z] === "<")
        if (C[Z + 1] === "/") {
          const H = D(C, ">", Z, "Closing Tag is not closed.");
          let K = C.substring(Z + 2, H).trim();
          if (this.options.removeNSPrefix) {
            const pe = K.indexOf(":");
            pe !== -1 && (K = K.substr(pe + 1));
          }
          this.options.transformTagName && (K = this.options.transformTagName(K)), q && (G = this.saveTextToParentTag(G, q, X));
          const V = X.substring(X.lastIndexOf(".") + 1);
          if (K && this.options.unpairedTags.indexOf(K) !== -1)
            throw new Error("Unpaired tag can not be used as closing tag: </".concat(K, ">"));
          let re = 0;
          V && this.options.unpairedTags.indexOf(V) !== -1 ? (re = X.lastIndexOf(".", X.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : re = X.lastIndexOf("."), X = X.substring(0, re), q = this.tagsNodeStack.pop(), G = "", Z = H;
        } else if (C[Z + 1] === "?") {
          let H = I(C, Z, !1, "?>");
          if (!H)
            throw new Error("Pi Tag is not closed.");
          if (G = this.saveTextToParentTag(G, q, X), !(this.options.ignoreDeclaration && H.tagName === "?xml" || this.options.ignorePiTags)) {
            const K = new s(H.tagName);
            K.add(this.options.textNodeName, ""), H.tagName !== H.tagExp && H.attrExpPresent && (K[":@"] = this.buildAttributesMap(H.tagExp, X, H.tagName)), this.addChild(q, K, X);
          }
          Z = H.closeIndex + 1;
        } else if (C.substr(Z + 1, 3) === "!--") {
          const H = D(C, "-->", Z + 4, "Comment is not closed.");
          if (this.options.commentPropName) {
            const K = C.substring(Z + 4, H - 2);
            G = this.saveTextToParentTag(G, q, X), q.add(this.options.commentPropName, [{ [this.options.textNodeName]: K }]);
          }
          Z = H;
        } else if (C.substr(Z + 1, 2) === "!D") {
          const H = c(C, Z);
          this.docTypeEntities = H.entities, Z = H.i;
        } else if (C.substr(Z + 1, 2) === "![") {
          const H = D(C, "]]>", Z, "CDATA is not closed.") - 2, K = C.substring(Z + 9, H);
          if (G = this.saveTextToParentTag(G, q, X), this.options.cdataPropName)
            q.add(this.options.cdataPropName, [{ [this.options.textNodeName]: K }]);
          else {
            let V = this.parseTextData(K, q.tagname, X, !0, !1, !0);
            V == null && (V = ""), q.add(this.options.textNodeName, V);
          }
          Z = H + 2;
        } else {
          let H = I(C, Z, this.options.removeNSPrefix), K = H.tagName, V = H.tagExp, re = H.attrExpPresent, pe = H.closeIndex;
          this.options.transformTagName && (K = this.options.transformTagName(K)), q && G && q.tagname !== "!xml" && (G = this.saveTextToParentTag(G, q, X, !1));
          const Ae = q;
          if (Ae && this.options.unpairedTags.indexOf(Ae.tagname) !== -1 && (q = this.tagsNodeStack.pop(), X = X.substring(0, X.lastIndexOf("."))), K !== z.tagname && (X += X ? "." + K : K), this.isItStopNode(this.options.stopNodes, X, K)) {
            let ce = "";
            if (V.length > 0 && V.lastIndexOf("/") === V.length - 1)
              Z = H.closeIndex;
            else if (this.options.unpairedTags.indexOf(K) !== -1)
              Z = H.closeIndex;
            else {
              const me = this.readStopNodeData(C, K, pe + 1);
              if (!me)
                throw new Error("Unexpected end of ".concat(K));
              Z = me.i, ce = me.tagContent;
            }
            const Ee = new s(K);
            K !== V && re && (Ee[":@"] = this.buildAttributesMap(V, X, K)), ce && (ce = this.parseTextData(ce, K, X, !0, re, !0, !0)), X = X.substr(0, X.lastIndexOf(".")), Ee.add(this.options.textNodeName, ce), this.addChild(q, Ee, X);
          } else {
            if (V.length > 0 && V.lastIndexOf("/") === V.length - 1) {
              K[K.length - 1] === "/" ? (K = K.substr(0, K.length - 1), X = X.substr(0, X.length - 1), V = K) : V = V.substr(0, V.length - 1), this.options.transformTagName && (K = this.options.transformTagName(K));
              const ce = new s(K);
              K !== V && re && (ce[":@"] = this.buildAttributesMap(V, X, K)), this.addChild(q, ce, X), X = X.substr(0, X.lastIndexOf("."));
            } else {
              const ce = new s(K);
              this.tagsNodeStack.push(q), K !== V && re && (ce[":@"] = this.buildAttributesMap(V, X, K)), this.addChild(q, ce, X), q = ce;
            }
            G = "", Z = pe;
          }
        }
      else
        G += C[Z];
    return z.child;
  };
  function E(C, z, q) {
    const G = this.options.updateTag(z.tagname, q, z[":@"]);
    G === !1 || (typeof G == "string" && (z.tagname = G), C.addChild(z));
  }
  const S = function(C) {
    if (this.options.processEntities) {
      for (let z in this.docTypeEntities) {
        const q = this.docTypeEntities[z];
        C = C.replace(q.regx, q.val);
      }
      for (let z in this.lastEntities) {
        const q = this.lastEntities[z];
        C = C.replace(q.regex, q.val);
      }
      if (this.options.htmlEntities)
        for (let z in this.htmlEntities) {
          const q = this.htmlEntities[z];
          C = C.replace(q.regex, q.val);
        }
      C = C.replace(this.ampEntity.regex, this.ampEntity.val);
    }
    return C;
  };
  function _(C, z, q, G) {
    return C && (G === void 0 && (G = Object.keys(z.child).length === 0), (C = this.parseTextData(C, z.tagname, q, !1, !!z[":@"] && Object.keys(z[":@"]).length !== 0, G)) !== void 0 && C !== "" && z.add(this.options.textNodeName, C), C = ""), C;
  }
  function P(C, z, q) {
    const G = "*." + q;
    for (const X in C) {
      const Z = C[X];
      if (G === Z || z === Z)
        return !0;
    }
    return !1;
  }
  function D(C, z, q, G) {
    const X = C.indexOf(z, q);
    if (X === -1)
      throw new Error(G);
    return X + z.length - 1;
  }
  function I(C, z, q) {
    const G = function(re, pe) {
      let Ae, ce = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ">", Ee = "";
      for (let me = pe; me < re.length; me++) {
        let ke = re[me];
        if (Ae)
          ke === Ae && (Ae = "");
        else if (ke === '"' || ke === "'")
          Ae = ke;
        else if (ke === ce[0]) {
          if (!ce[1])
            return { data: Ee, index: me };
          if (re[me + 1] === ce[1])
            return { data: Ee, index: me };
        } else
          ke === "	" && (ke = " ");
        Ee += ke;
      }
    }(C, z + 1, arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ">");
    if (!G)
      return;
    let X = G.data;
    const Z = G.index, H = X.search(/\s/);
    let K = X, V = !0;
    if (H !== -1 && (K = X.substr(0, H).replace(/\s\s*$/, ""), X = X.substr(H + 1)), q) {
      const re = K.indexOf(":");
      re !== -1 && (K = K.substr(re + 1), V = K !== G.data.substr(re + 1));
    }
    return { tagName: K, tagExp: X, closeIndex: Z, attrExpPresent: V };
  }
  function x(C, z, q) {
    const G = q;
    let X = 1;
    for (; q < C.length; q++)
      if (C[q] === "<")
        if (C[q + 1] === "/") {
          const Z = D(C, ">", q, "".concat(z, " is not closed"));
          if (C.substring(q + 2, Z).trim() === z && (X--, X === 0))
            return { tagContent: C.substring(G, q), i: Z };
          q = Z;
        } else if (C[q + 1] === "?")
          q = D(C, "?>", q + 1, "StopNode is not closed.");
        else if (C.substr(q + 1, 3) === "!--")
          q = D(C, "-->", q + 3, "StopNode is not closed.");
        else if (C.substr(q + 1, 2) === "![")
          q = D(C, "]]>", q, "StopNode is not closed.") - 2;
        else {
          const Z = I(C, q, ">");
          Z && ((Z && Z.tagName) === z && Z.tagExp[Z.tagExp.length - 1] !== "/" && X++, q = Z.closeIndex);
        }
  }
  function F(C, z, q) {
    if (z && typeof C == "string") {
      const G = C.trim();
      return G === "true" || G !== "false" && g(C, q);
    }
    return i.isExist(C) ? C : "";
  }
  r.exports = class {
    constructor(C) {
      this.options = C, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = { apos: { regex: /&(apos|#39|#x27);/g, val: "'" }, gt: { regex: /&(gt|#62|#x3E);/g, val: ">" }, lt: { regex: /&(lt|#60|#x3C);/g, val: "<" }, quot: { regex: /&(quot|#34|#x22);/g, val: '"' } }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = { space: { regex: /&(nbsp|#160);/g, val: " " }, cent: { regex: /&(cent|#162);/g, val: "¢" }, pound: { regex: /&(pound|#163);/g, val: "£" }, yen: { regex: /&(yen|#165);/g, val: "¥" }, euro: { regex: /&(euro|#8364);/g, val: "€" }, copyright: { regex: /&(copy|#169);/g, val: "©" }, reg: { regex: /&(reg|#174);/g, val: "®" }, inr: { regex: /&(inr|#8377);/g, val: "₹" } }, this.addExternalEntities = d, this.parseXml = p, this.parseTextData = y, this.resolveNameSpace = l, this.buildAttributesMap = v, this.isItStopNode = P, this.replaceEntitiesValue = S, this.readStopNodeData = x, this.saveTextToParentTag = _, this.addChild = E;
    }
  };
}, 338: (r, e, n) => {
  const { buildOptions: i } = n(63), s = n(299), { prettify: c } = n(728), g = n(31);
  r.exports = class {
    constructor(d) {
      this.externalEntities = {}, this.options = i(d);
    }
    parse(d, y) {
      if (typeof d != "string") {
        if (!d.toString)
          throw new Error("XML data is accepted in String or Bytes[] form.");
        d = d.toString();
      }
      if (y) {
        y === !0 && (y = {});
        const v = g.validate(d, y);
        if (v !== !0)
          throw Error("".concat(v.err.msg, ":").concat(v.err.line, ":").concat(v.err.col));
      }
      const l = new s(this.options);
      l.addExternalEntities(this.externalEntities);
      const a = l.parseXml(d);
      return this.options.preserveOrder || a === void 0 ? a : c(a, this.options);
    }
    addEntity(d, y) {
      if (y.indexOf("&") !== -1)
        throw new Error("Entity value can't have '&'");
      if (d.indexOf("&") !== -1 || d.indexOf(";") !== -1)
        throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
      if (y === "&")
        throw new Error("An entity with value '&' is not permitted");
      this.externalEntities[d] = y;
    }
  };
}, 728: (r, e) => {
  function n(g, d, y) {
    let l;
    const a = {};
    for (let v = 0; v < g.length; v++) {
      const p = g[v], E = i(p);
      let S = "";
      if (S = y === void 0 ? E : y + "." + E, E === d.textNodeName)
        l === void 0 ? l = p[E] : l += "" + p[E];
      else {
        if (E === void 0)
          continue;
        if (p[E]) {
          let _ = n(p[E], d, S);
          const P = c(_, d);
          p[":@"] ? s(_, p[":@"], S, d) : Object.keys(_).length !== 1 || _[d.textNodeName] === void 0 || d.alwaysCreateTextNode ? Object.keys(_).length === 0 && (d.alwaysCreateTextNode ? _[d.textNodeName] = "" : _ = "") : _ = _[d.textNodeName], a[E] !== void 0 && a.hasOwnProperty(E) ? (Array.isArray(a[E]) || (a[E] = [a[E]]), a[E].push(_)) : d.isArray(E, S, P) ? a[E] = [_] : a[E] = _;
        }
      }
    }
    return typeof l == "string" ? l.length > 0 && (a[d.textNodeName] = l) : l !== void 0 && (a[d.textNodeName] = l), a;
  }
  function i(g) {
    const d = Object.keys(g);
    for (let y = 0; y < d.length; y++) {
      const l = d[y];
      if (l !== ":@")
        return l;
    }
  }
  function s(g, d, y, l) {
    if (d) {
      const a = Object.keys(d), v = a.length;
      for (let p = 0; p < v; p++) {
        const E = a[p];
        l.isArray(E, y + "." + E, !0, !0) ? g[E] = [d[E]] : g[E] = d[E];
      }
    }
  }
  function c(g, d) {
    const { textNodeName: y } = d, l = Object.keys(g).length;
    return l === 0 || !(l !== 1 || !g[y] && typeof g[y] != "boolean" && g[y] !== 0);
  }
  e.prettify = function(g, d) {
    return n(g, d);
  };
}, 365: (r) => {
  r.exports = class {
    constructor(e) {
      this.tagname = e, this.child = [], this[":@"] = {};
    }
    add(e, n) {
      e === "__proto__" && (e = "#__proto__"), this.child.push({ [e]: n });
    }
    addChild(e) {
      e.tagname === "__proto__" && (e.tagname = "#__proto__"), e[":@"] && Object.keys(e[":@"]).length > 0 ? this.child.push({ [e.tagname]: e.child, ":@": e[":@"] }) : this.child.push({ [e.tagname]: e.child });
    }
  };
}, 135: (r) => {
  function e(n) {
    return !!n.constructor && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n);
  }
  r.exports = function(n) {
    return n != null && (e(n) || function(i) {
      return typeof i.readFloatLE == "function" && typeof i.slice == "function" && e(i.slice(0, 0));
    }(n) || !!n._isBuffer);
  };
}, 542: (r, e, n) => {
  var i, s, c, g, d;
  i = n(298), s = n(526).utf8, c = n(135), g = n(526).bin, (d = function(y, l) {
    y.constructor == String ? y = l && l.encoding === "binary" ? g.stringToBytes(y) : s.stringToBytes(y) : c(y) ? y = Array.prototype.slice.call(y, 0) : Array.isArray(y) || y.constructor === Uint8Array || (y = y.toString());
    for (var a = i.bytesToWords(y), v = 8 * y.length, p = 1732584193, E = -271733879, S = -1732584194, _ = 271733878, P = 0; P < a.length; P++)
      a[P] = 16711935 & (a[P] << 8 | a[P] >>> 24) | 4278255360 & (a[P] << 24 | a[P] >>> 8);
    a[v >>> 5] |= 128 << v % 32, a[14 + (v + 64 >>> 9 << 4)] = v;
    var D = d._ff, I = d._gg, x = d._hh, F = d._ii;
    for (P = 0; P < a.length; P += 16) {
      var C = p, z = E, q = S, G = _;
      p = D(p, E, S, _, a[P + 0], 7, -680876936), _ = D(_, p, E, S, a[P + 1], 12, -389564586), S = D(S, _, p, E, a[P + 2], 17, 606105819), E = D(E, S, _, p, a[P + 3], 22, -1044525330), p = D(p, E, S, _, a[P + 4], 7, -176418897), _ = D(_, p, E, S, a[P + 5], 12, 1200080426), S = D(S, _, p, E, a[P + 6], 17, -1473231341), E = D(E, S, _, p, a[P + 7], 22, -45705983), p = D(p, E, S, _, a[P + 8], 7, 1770035416), _ = D(_, p, E, S, a[P + 9], 12, -1958414417), S = D(S, _, p, E, a[P + 10], 17, -42063), E = D(E, S, _, p, a[P + 11], 22, -1990404162), p = D(p, E, S, _, a[P + 12], 7, 1804603682), _ = D(_, p, E, S, a[P + 13], 12, -40341101), S = D(S, _, p, E, a[P + 14], 17, -1502002290), p = I(p, E = D(E, S, _, p, a[P + 15], 22, 1236535329), S, _, a[P + 1], 5, -165796510), _ = I(_, p, E, S, a[P + 6], 9, -1069501632), S = I(S, _, p, E, a[P + 11], 14, 643717713), E = I(E, S, _, p, a[P + 0], 20, -373897302), p = I(p, E, S, _, a[P + 5], 5, -701558691), _ = I(_, p, E, S, a[P + 10], 9, 38016083), S = I(S, _, p, E, a[P + 15], 14, -660478335), E = I(E, S, _, p, a[P + 4], 20, -405537848), p = I(p, E, S, _, a[P + 9], 5, 568446438), _ = I(_, p, E, S, a[P + 14], 9, -1019803690), S = I(S, _, p, E, a[P + 3], 14, -187363961), E = I(E, S, _, p, a[P + 8], 20, 1163531501), p = I(p, E, S, _, a[P + 13], 5, -1444681467), _ = I(_, p, E, S, a[P + 2], 9, -51403784), S = I(S, _, p, E, a[P + 7], 14, 1735328473), p = x(p, E = I(E, S, _, p, a[P + 12], 20, -1926607734), S, _, a[P + 5], 4, -378558), _ = x(_, p, E, S, a[P + 8], 11, -2022574463), S = x(S, _, p, E, a[P + 11], 16, 1839030562), E = x(E, S, _, p, a[P + 14], 23, -35309556), p = x(p, E, S, _, a[P + 1], 4, -1530992060), _ = x(_, p, E, S, a[P + 4], 11, 1272893353), S = x(S, _, p, E, a[P + 7], 16, -155497632), E = x(E, S, _, p, a[P + 10], 23, -1094730640), p = x(p, E, S, _, a[P + 13], 4, 681279174), _ = x(_, p, E, S, a[P + 0], 11, -358537222), S = x(S, _, p, E, a[P + 3], 16, -722521979), E = x(E, S, _, p, a[P + 6], 23, 76029189), p = x(p, E, S, _, a[P + 9], 4, -640364487), _ = x(_, p, E, S, a[P + 12], 11, -421815835), S = x(S, _, p, E, a[P + 15], 16, 530742520), p = F(p, E = x(E, S, _, p, a[P + 2], 23, -995338651), S, _, a[P + 0], 6, -198630844), _ = F(_, p, E, S, a[P + 7], 10, 1126891415), S = F(S, _, p, E, a[P + 14], 15, -1416354905), E = F(E, S, _, p, a[P + 5], 21, -57434055), p = F(p, E, S, _, a[P + 12], 6, 1700485571), _ = F(_, p, E, S, a[P + 3], 10, -1894986606), S = F(S, _, p, E, a[P + 10], 15, -1051523), E = F(E, S, _, p, a[P + 1], 21, -2054922799), p = F(p, E, S, _, a[P + 8], 6, 1873313359), _ = F(_, p, E, S, a[P + 15], 10, -30611744), S = F(S, _, p, E, a[P + 6], 15, -1560198380), E = F(E, S, _, p, a[P + 13], 21, 1309151649), p = F(p, E, S, _, a[P + 4], 6, -145523070), _ = F(_, p, E, S, a[P + 11], 10, -1120210379), S = F(S, _, p, E, a[P + 2], 15, 718787259), E = F(E, S, _, p, a[P + 9], 21, -343485551), p = p + C >>> 0, E = E + z >>> 0, S = S + q >>> 0, _ = _ + G >>> 0;
    }
    return i.endian([p, E, S, _]);
  })._ff = function(y, l, a, v, p, E, S) {
    var _ = y + (l & a | ~l & v) + (p >>> 0) + S;
    return (_ << E | _ >>> 32 - E) + l;
  }, d._gg = function(y, l, a, v, p, E, S) {
    var _ = y + (l & v | a & ~v) + (p >>> 0) + S;
    return (_ << E | _ >>> 32 - E) + l;
  }, d._hh = function(y, l, a, v, p, E, S) {
    var _ = y + (l ^ a ^ v) + (p >>> 0) + S;
    return (_ << E | _ >>> 32 - E) + l;
  }, d._ii = function(y, l, a, v, p, E, S) {
    var _ = y + (a ^ (l | ~v)) + (p >>> 0) + S;
    return (_ << E | _ >>> 32 - E) + l;
  }, d._blocksize = 16, d._digestsize = 16, r.exports = function(y, l) {
    if (y == null)
      throw new Error("Illegal argument " + y);
    var a = i.wordsToBytes(d(y, l));
    return l && l.asBytes ? a : l && l.asString ? g.bytesToString(a) : i.bytesToHex(a);
  };
}, 285: (r, e, n) => {
  var i = n(2);
  r.exports = function(D) {
    return D ? (D.substr(0, 2) === "{}" && (D = "\\{\\}" + D.substr(2)), P(function(I) {
      return I.split("\\\\").join(s).split("\\{").join(c).split("\\}").join(g).split("\\,").join(d).split("\\.").join(y);
    }(D), !0).map(a)) : [];
  };
  var s = "\0SLASH" + Math.random() + "\0", c = "\0OPEN" + Math.random() + "\0", g = "\0CLOSE" + Math.random() + "\0", d = "\0COMMA" + Math.random() + "\0", y = "\0PERIOD" + Math.random() + "\0";
  function l(D) {
    return parseInt(D, 10) == D ? parseInt(D, 10) : D.charCodeAt(0);
  }
  function a(D) {
    return D.split(s).join("\\").split(c).join("{").split(g).join("}").split(d).join(",").split(y).join(".");
  }
  function v(D) {
    if (!D)
      return [""];
    var I = [], x = i("{", "}", D);
    if (!x)
      return D.split(",");
    var F = x.pre, C = x.body, z = x.post, q = F.split(",");
    q[q.length - 1] += "{" + C + "}";
    var G = v(z);
    return z.length && (q[q.length - 1] += G.shift(), q.push.apply(q, G)), I.push.apply(I, q), I;
  }
  function p(D) {
    return "{" + D + "}";
  }
  function E(D) {
    return /^-?0\d/.test(D);
  }
  function S(D, I) {
    return D <= I;
  }
  function _(D, I) {
    return D >= I;
  }
  function P(D, I) {
    var x = [], F = i("{", "}", D);
    if (!F)
      return [D];
    var C = F.pre, z = F.post.length ? P(F.post, !1) : [""];
    if (/\$$/.test(F.pre))
      for (var q = 0; q < z.length; q++) {
        var G = C + "{" + F.body + "}" + z[q];
        x.push(G);
      }
    else {
      var X, Z, H = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(F.body), K = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(F.body), V = H || K, re = F.body.indexOf(",") >= 0;
      if (!V && !re)
        return F.post.match(/,.*\}/) ? P(D = F.pre + "{" + F.body + g + F.post) : [D];
      if (V)
        X = F.body.split(/\.\./);
      else if ((X = v(F.body)).length === 1 && (X = P(X[0], !1).map(p)).length === 1)
        return z.map(function(St) {
          return F.pre + X[0] + St;
        });
      if (V) {
        var pe = l(X[0]), Ae = l(X[1]), ce = Math.max(X[0].length, X[1].length), Ee = X.length == 3 ? Math.abs(l(X[2])) : 1, me = S;
        Ae < pe && (Ee *= -1, me = _);
        var ke = X.some(E);
        Z = [];
        for (var $e = pe; me($e, Ae); $e += Ee) {
          var Ze;
          if (K)
            (Ze = String.fromCharCode($e)) === "\\" && (Ze = "");
          else if (Ze = String($e), ke) {
            var Te = ce - Ze.length;
            if (Te > 0) {
              var _e = new Array(Te + 1).join("0");
              Ze = $e < 0 ? "-" + _e + Ze.slice(1) : _e + Ze;
            }
          }
          Z.push(Ze);
        }
      } else {
        Z = [];
        for (var Ie = 0; Ie < X.length; Ie++)
          Z.push.apply(Z, P(X[Ie], !1));
      }
      for (Ie = 0; Ie < Z.length; Ie++)
        for (q = 0; q < z.length; q++)
          G = C + Z[Ie] + z[q], (!I || V || G) && x.push(G);
    }
    return x;
  }
}, 829: (r) => {
  function e(l) {
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
      return typeof a;
    } : function(a) {
      return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
    }, e(l);
  }
  function n(l) {
    var a = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return n = function(v) {
      if (v === null || (p = v, Function.toString.call(p).indexOf("[native code]") === -1))
        return v;
      var p;
      if (typeof v != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (a !== void 0) {
        if (a.has(v))
          return a.get(v);
        a.set(v, E);
      }
      function E() {
        return i(v, arguments, c(this).constructor);
      }
      return E.prototype = Object.create(v.prototype, { constructor: { value: E, enumerable: !1, writable: !0, configurable: !0 } }), s(E, v);
    }, n(l);
  }
  function i(l, a, v) {
    return i = function() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }() ? Reflect.construct : function(p, E, S) {
      var _ = [null];
      _.push.apply(_, E);
      var P = new (Function.bind.apply(p, _))();
      return S && s(P, S.prototype), P;
    }, i.apply(null, arguments);
  }
  function s(l, a) {
    return s = Object.setPrototypeOf || function(v, p) {
      return v.__proto__ = p, v;
    }, s(l, a);
  }
  function c(l) {
    return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
      return a.__proto__ || Object.getPrototypeOf(a);
    }, c(l);
  }
  var g = function(l) {
    function a(v) {
      var p;
      return function(E, S) {
        if (!(E instanceof S))
          throw new TypeError("Cannot call a class as a function");
      }(this, a), (p = function(E, S) {
        return !S || e(S) !== "object" && typeof S != "function" ? function(_) {
          if (_ === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return _;
        }(E) : S;
      }(this, c(a).call(this, v))).name = "ObjectPrototypeMutationError", p;
    }
    return function(v, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Super expression must either be null or a function");
      v.prototype = Object.create(p && p.prototype, { constructor: { value: v, writable: !0, configurable: !0 } }), p && s(v, p);
    }(a, l), a;
  }(n(Error));
  function d(l, a) {
    for (var v = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
    }, p = a.split("."), E = p.length, S = function(D) {
      var I = p[D];
      if (!l)
        return { v: void 0 };
      if (I === "+") {
        if (Array.isArray(l))
          return { v: l.map(function(F, C) {
            var z = p.slice(D + 1);
            return z.length > 0 ? d(F, z.join("."), v) : v(l, C, p, D);
          }) };
        var x = p.slice(0, D).join(".");
        throw new Error("Object at wildcard (".concat(x, ") is not an array"));
      }
      l = v(l, I, p, D);
    }, _ = 0; _ < E; _++) {
      var P = S(_);
      if (e(P) === "object")
        return P.v;
    }
    return l;
  }
  function y(l, a) {
    return l.length === a + 1;
  }
  r.exports = { set: function(l, a, v) {
    if (e(l) != "object" || l === null || a === void 0)
      return l;
    if (typeof a == "number")
      return l[a] = v, l[a];
    try {
      return d(l, a, function(p, E, S, _) {
        if (p === Reflect.getPrototypeOf({}))
          throw new g("Attempting to mutate Object.prototype");
        if (!p[E]) {
          var P = Number.isInteger(Number(S[_ + 1])), D = S[_ + 1] === "+";
          p[E] = P || D ? [] : {};
        }
        return y(S, _) && (p[E] = v), p[E];
      });
    } catch (p) {
      if (p instanceof g)
        throw p;
      return l;
    }
  }, get: function(l, a) {
    if (e(l) != "object" || l === null || a === void 0)
      return l;
    if (typeof a == "number")
      return l[a];
    try {
      return d(l, a, function(v, p) {
        return v[p];
      });
    } catch {
      return l;
    }
  }, has: function(l, a) {
    var v = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (e(l) != "object" || l === null || a === void 0)
      return !1;
    if (typeof a == "number")
      return a in l;
    try {
      var p = !1;
      return d(l, a, function(E, S, _, P) {
        if (!y(_, P))
          return E && E[S];
        p = v.own ? E.hasOwnProperty(S) : S in E;
      }), p;
    } catch {
      return !1;
    }
  }, hasOwn: function(l, a, v) {
    return this.has(l, a, v || { own: !0 });
  }, isIn: function(l, a, v) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (e(l) != "object" || l === null || a === void 0)
      return !1;
    try {
      var E = !1, S = !1;
      return d(l, a, function(_, P, D, I) {
        return E = E || _ === v || !!_ && _[P] === v, S = y(D, I) && e(_) === "object" && P in _, _ && _[P];
      }), p.validPath ? E && S : E;
    } catch {
      return !1;
    }
  }, ObjectPrototypeMutationError: g };
}, 47: (r, e, n) => {
  var i = n(410), s = function(l) {
    return typeof l == "string";
  };
  function c(l, a) {
    for (var v = [], p = 0; p < l.length; p++) {
      var E = l[p];
      E && E !== "." && (E === ".." ? v.length && v[v.length - 1] !== ".." ? v.pop() : a && v.push("..") : v.push(E));
    }
    return v;
  }
  var g = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, d = {};
  function y(l) {
    return g.exec(l).slice(1);
  }
  d.resolve = function() {
    for (var l = "", a = !1, v = arguments.length - 1; v >= -1 && !a; v--) {
      var p = v >= 0 ? arguments[v] : Mt.cwd();
      if (!s(p))
        throw new TypeError("Arguments to path.resolve must be strings");
      p && (l = p + "/" + l, a = p.charAt(0) === "/");
    }
    return (a ? "/" : "") + (l = c(l.split("/"), !a).join("/")) || ".";
  }, d.normalize = function(l) {
    var a = d.isAbsolute(l), v = l.substr(-1) === "/";
    return (l = c(l.split("/"), !a).join("/")) || a || (l = "."), l && v && (l += "/"), (a ? "/" : "") + l;
  }, d.isAbsolute = function(l) {
    return l.charAt(0) === "/";
  }, d.join = function() {
    for (var l = "", a = 0; a < arguments.length; a++) {
      var v = arguments[a];
      if (!s(v))
        throw new TypeError("Arguments to path.join must be strings");
      v && (l += l ? "/" + v : v);
    }
    return d.normalize(l);
  }, d.relative = function(l, a) {
    function v(I) {
      for (var x = 0; x < I.length && I[x] === ""; x++)
        ;
      for (var F = I.length - 1; F >= 0 && I[F] === ""; F--)
        ;
      return x > F ? [] : I.slice(x, F + 1);
    }
    l = d.resolve(l).substr(1), a = d.resolve(a).substr(1);
    for (var p = v(l.split("/")), E = v(a.split("/")), S = Math.min(p.length, E.length), _ = S, P = 0; P < S; P++)
      if (p[P] !== E[P]) {
        _ = P;
        break;
      }
    var D = [];
    for (P = _; P < p.length; P++)
      D.push("..");
    return (D = D.concat(E.slice(_))).join("/");
  }, d._makeLong = function(l) {
    return l;
  }, d.dirname = function(l) {
    var a = y(l), v = a[0], p = a[1];
    return v || p ? (p && (p = p.substr(0, p.length - 1)), v + p) : ".";
  }, d.basename = function(l, a) {
    var v = y(l)[2];
    return a && v.substr(-1 * a.length) === a && (v = v.substr(0, v.length - a.length)), v;
  }, d.extname = function(l) {
    return y(l)[3];
  }, d.format = function(l) {
    if (!i.isObject(l))
      throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof l);
    var a = l.root || "";
    if (!s(a))
      throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof l.root);
    return (l.dir ? l.dir + d.sep : "") + (l.base || "");
  }, d.parse = function(l) {
    if (!s(l))
      throw new TypeError("Parameter 'pathString' must be a string, not " + typeof l);
    var a = y(l);
    if (!a || a.length !== 4)
      throw new TypeError("Invalid path '" + l + "'");
    return a[1] = a[1] || "", a[2] = a[2] || "", a[3] = a[3] || "", { root: a[0], dir: a[0] + a[1].slice(0, a[1].length - 1), base: a[2], ext: a[3], name: a[2].slice(0, a[2].length - a[3].length) };
  }, d.sep = "/", d.delimiter = ":", r.exports = d;
}, 647: (r, e) => {
  var n = Object.prototype.hasOwnProperty;
  function i(c) {
    try {
      return decodeURIComponent(c.replace(/\+/g, " "));
    } catch {
      return null;
    }
  }
  function s(c) {
    try {
      return encodeURIComponent(c);
    } catch {
      return null;
    }
  }
  e.stringify = function(c, g) {
    g = g || "";
    var d, y, l = [];
    for (y in typeof g != "string" && (g = "?"), c)
      if (n.call(c, y)) {
        if ((d = c[y]) || d != null && !isNaN(d) || (d = ""), y = s(y), d = s(d), y === null || d === null)
          continue;
        l.push(y + "=" + d);
      }
    return l.length ? g + l.join("&") : "";
  }, e.parse = function(c) {
    for (var g, d = /([^=?#&]+)=?([^&]*)/g, y = {}; g = d.exec(c); ) {
      var l = i(g[1]), a = i(g[2]);
      l === null || a === null || l in y || (y[l] = a);
    }
    return y;
  };
}, 670: (r) => {
  r.exports = function(e, n) {
    if (n = n.split(":")[0], !(e = +e))
      return !1;
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
}, 494: (r) => {
  const e = /^[-+]?0x[a-fA-F0-9]+$/, n = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
  !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt), !Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
  const i = { hex: !0, leadingZeros: !0, decimalPoint: ".", eNotation: !0 };
  r.exports = function(s) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (c = Object.assign({}, i, c), !s || typeof s != "string")
      return s;
    let g = s.trim();
    if (c.skipLike !== void 0 && c.skipLike.test(g))
      return s;
    if (c.hex && e.test(g))
      return Number.parseInt(g, 16);
    {
      const y = n.exec(g);
      if (y) {
        const l = y[1], a = y[2];
        let v = ((d = y[3]) && d.indexOf(".") !== -1 && ((d = d.replace(/0+$/, "")) === "." ? d = "0" : d[0] === "." ? d = "0" + d : d[d.length - 1] === "." && (d = d.substr(0, d.length - 1))), d);
        const p = y[4] || y[6];
        if (!c.leadingZeros && a.length > 0 && l && g[2] !== "." || !c.leadingZeros && a.length > 0 && !l && g[1] !== ".")
          return s;
        {
          const E = Number(g), S = "" + E;
          return S.search(/[eE]/) !== -1 || p ? c.eNotation ? E : s : g.indexOf(".") !== -1 ? S === "0" && v === "" || S === v || l && S === "-" + v ? E : s : a ? v === S || l + v === S ? E : s : g === S || g === l + S ? E : s;
        }
      }
      return s;
    }
    var d;
  };
}, 737: (r, e, n) => {
  var i = n(670), s = n(647), c = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, g = /[\n\r\t]/g, d = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, y = /:\d+$/, l = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, a = /^[a-zA-Z]:/;
  function v(I) {
    return (I || "").toString().replace(c, "");
  }
  var p = [["#", "hash"], ["?", "query"], function(I, x) {
    return _(x.protocol) ? I.replace(/\\/g, "/") : I;
  }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]], E = { hash: 1, query: 1 };
  function S(I) {
    var x, F = (typeof window < "u" ? window : typeof li < "u" ? li : typeof self < "u" ? self : {}).location || {}, C = {}, z = typeof (I = I || F);
    if (I.protocol === "blob:")
      C = new D(unescape(I.pathname), {});
    else if (z === "string")
      for (x in C = new D(I, {}), E)
        delete C[x];
    else if (z === "object") {
      for (x in I)
        x in E || (C[x] = I[x]);
      C.slashes === void 0 && (C.slashes = d.test(I.href));
    }
    return C;
  }
  function _(I) {
    return I === "file:" || I === "ftp:" || I === "http:" || I === "https:" || I === "ws:" || I === "wss:";
  }
  function P(I, x) {
    I = (I = v(I)).replace(g, ""), x = x || {};
    var F, C = l.exec(I), z = C[1] ? C[1].toLowerCase() : "", q = !!C[2], G = !!C[3], X = 0;
    return q ? G ? (F = C[2] + C[3] + C[4], X = C[2].length + C[3].length) : (F = C[2] + C[4], X = C[2].length) : G ? (F = C[3] + C[4], X = C[3].length) : F = C[4], z === "file:" ? X >= 2 && (F = F.slice(2)) : _(z) ? F = C[4] : z ? q && (F = F.slice(2)) : X >= 2 && _(x.protocol) && (F = C[4]), { protocol: z, slashes: q || _(z), slashesCount: X, rest: F };
  }
  function D(I, x, F) {
    if (I = (I = v(I)).replace(g, ""), !(this instanceof D))
      return new D(I, x, F);
    var C, z, q, G, X, Z, H = p.slice(), K = typeof x, V = this, re = 0;
    for (K !== "object" && K !== "string" && (F = x, x = null), F && typeof F != "function" && (F = s.parse), C = !(z = P(I || "", x = S(x))).protocol && !z.slashes, V.slashes = z.slashes || C && x.slashes, V.protocol = z.protocol || x.protocol || "", I = z.rest, (z.protocol === "file:" && (z.slashesCount !== 2 || a.test(I)) || !z.slashes && (z.protocol || z.slashesCount < 2 || !_(V.protocol))) && (H[3] = [/(.*)/, "pathname"]); re < H.length; re++)
      typeof (G = H[re]) != "function" ? (q = G[0], Z = G[1], q != q ? V[Z] = I : typeof q == "string" ? ~(X = q === "@" ? I.lastIndexOf(q) : I.indexOf(q)) && (typeof G[2] == "number" ? (V[Z] = I.slice(0, X), I = I.slice(X + G[2])) : (V[Z] = I.slice(X), I = I.slice(0, X))) : (X = q.exec(I)) && (V[Z] = X[1], I = I.slice(0, X.index)), V[Z] = V[Z] || C && G[3] && x[Z] || "", G[4] && (V[Z] = V[Z].toLowerCase())) : I = G(I, V);
    F && (V.query = F(V.query)), C && x.slashes && V.pathname.charAt(0) !== "/" && (V.pathname !== "" || x.pathname !== "") && (V.pathname = function(pe, Ae) {
      if (pe === "")
        return Ae;
      for (var ce = (Ae || "/").split("/").slice(0, -1).concat(pe.split("/")), Ee = ce.length, me = ce[Ee - 1], ke = !1, $e = 0; Ee--; )
        ce[Ee] === "." ? ce.splice(Ee, 1) : ce[Ee] === ".." ? (ce.splice(Ee, 1), $e++) : $e && (Ee === 0 && (ke = !0), ce.splice(Ee, 1), $e--);
      return ke && ce.unshift(""), me !== "." && me !== ".." || ce.push(""), ce.join("/");
    }(V.pathname, x.pathname)), V.pathname.charAt(0) !== "/" && _(V.protocol) && (V.pathname = "/" + V.pathname), i(V.port, V.protocol) || (V.host = V.hostname, V.port = ""), V.username = V.password = "", V.auth && (~(X = V.auth.indexOf(":")) ? (V.username = V.auth.slice(0, X), V.username = encodeURIComponent(decodeURIComponent(V.username)), V.password = V.auth.slice(X + 1), V.password = encodeURIComponent(decodeURIComponent(V.password))) : V.username = encodeURIComponent(decodeURIComponent(V.auth)), V.auth = V.password ? V.username + ":" + V.password : V.username), V.origin = V.protocol !== "file:" && _(V.protocol) && V.host ? V.protocol + "//" + V.host : "null", V.href = V.toString();
  }
  D.prototype = { set: function(I, x, F) {
    var C = this;
    switch (I) {
      case "query":
        typeof x == "string" && x.length && (x = (F || s.parse)(x)), C[I] = x;
        break;
      case "port":
        C[I] = x, i(x, C.protocol) ? x && (C.host = C.hostname + ":" + x) : (C.host = C.hostname, C[I] = "");
        break;
      case "hostname":
        C[I] = x, C.port && (x += ":" + C.port), C.host = x;
        break;
      case "host":
        C[I] = x, y.test(x) ? (x = x.split(":"), C.port = x.pop(), C.hostname = x.join(":")) : (C.hostname = x, C.port = "");
        break;
      case "protocol":
        C.protocol = x.toLowerCase(), C.slashes = !F;
        break;
      case "pathname":
      case "hash":
        if (x) {
          var z = I === "pathname" ? "/" : "#";
          C[I] = x.charAt(0) !== z ? z + x : x;
        } else
          C[I] = x;
        break;
      case "username":
      case "password":
        C[I] = encodeURIComponent(x);
        break;
      case "auth":
        var q = x.indexOf(":");
        ~q ? (C.username = x.slice(0, q), C.username = encodeURIComponent(decodeURIComponent(C.username)), C.password = x.slice(q + 1), C.password = encodeURIComponent(decodeURIComponent(C.password))) : C.username = encodeURIComponent(decodeURIComponent(x));
    }
    for (var G = 0; G < p.length; G++) {
      var X = p[G];
      X[4] && (C[X[1]] = C[X[1]].toLowerCase());
    }
    return C.auth = C.password ? C.username + ":" + C.password : C.username, C.origin = C.protocol !== "file:" && _(C.protocol) && C.host ? C.protocol + "//" + C.host : "null", C.href = C.toString(), C;
  }, toString: function(I) {
    I && typeof I == "function" || (I = s.stringify);
    var x, F = this, C = F.host, z = F.protocol;
    z && z.charAt(z.length - 1) !== ":" && (z += ":");
    var q = z + (F.protocol && F.slashes || _(F.protocol) ? "//" : "");
    return F.username ? (q += F.username, F.password && (q += ":" + F.password), q += "@") : F.password ? (q += ":" + F.password, q += "@") : F.protocol !== "file:" && _(F.protocol) && !C && F.pathname !== "/" && (q += "@"), (C[C.length - 1] === ":" || y.test(F.hostname) && !F.port) && (C += ":"), q += C + F.pathname, (x = typeof F.query == "object" ? I(F.query) : F.query) && (q += x.charAt(0) !== "?" ? "?" + x : x), F.hash && (q += F.hash), q;
  } }, D.extractProtocol = P, D.location = S, D.trimLeft = v, D.qs = s, r.exports = D;
}, 410: () => {
}, 388: () => {
}, 805: () => {
}, 800: () => {
} }, ql = {};
function je(r) {
  var e = ql[r];
  if (e !== void 0)
    return e.exports;
  var n = ql[r] = { id: r, loaded: !1, exports: {} };
  return yO[r].call(n.exports, n, n.exports, je), n.loaded = !0, n.exports;
}
je.n = (r) => {
  var e = r && r.__esModule ? () => r.default : () => r;
  return je.d(e, { a: e }), e;
}, je.d = (r, e) => {
  for (var n in e)
    je.o(e, n) && !je.o(r, n) && Object.defineProperty(r, n, { enumerable: !0, get: e[n] });
}, je.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e), je.nmd = (r) => (r.paths = [], r.children || (r.children = []), r);
var zt = {};
(() => {
  je.d(zt, { hT: () => X, O4: () => Z, Kd: () => q, YK: () => G, UU: () => jp, Gu: () => Ae, ky: () => ee, h4: () => se, hq: () => Kt, i5: () => ae });
  var r = je(737), e = je.n(r);
  function n(w) {
    if (!i(w))
      throw new Error("Parameter was not an error");
  }
  function i(w) {
    return f = w, Object.prototype.toString.call(f) === "[object Error]" || w instanceof Error;
    var f;
  }
  class s extends Error {
    constructor(f, m) {
      const O = [...arguments], { options: R, shortMessage: N } = function(W) {
        let Y, Q = "";
        if (W.length === 0)
          Y = {};
        else if (i(W[0]))
          Y = { cause: W[0] }, Q = W.slice(1).join(" ") || "";
        else if (W[0] && typeof W[0] == "object")
          Y = Object.assign({}, W[0]), Q = W.slice(1).join(" ") || "";
        else {
          if (typeof W[0] != "string")
            throw new Error("Invalid arguments passed to Layerr");
          Y = {}, Q = Q = W.join(" ") || "";
        }
        return { options: Y, shortMessage: Q };
      }(O);
      let B = N;
      if (R.cause && (B = "".concat(B, ": ").concat(R.cause.message)), super(B), this.message = B, R.name && typeof R.name == "string" ? this.name = R.name : this.name = "Layerr", R.cause && Object.defineProperty(this, "_cause", { value: R.cause }), Object.defineProperty(this, "_info", { value: {} }), R.info && typeof R.info == "object" && Object.assign(this._info, R.info), Error.captureStackTrace) {
        const W = R.constructorOpt || this.constructor;
        Error.captureStackTrace(this, W);
      }
    }
    static cause(f) {
      return n(f), f._cause && i(f._cause) ? f._cause : null;
    }
    static fullStack(f) {
      n(f);
      const m = s.cause(f);
      return m ? "".concat(f.stack, `
caused by: `).concat(s.fullStack(m)) : f.stack;
    }
    static info(f) {
      n(f);
      const m = {}, O = s.cause(f);
      return O && Object.assign(m, s.info(O)), f._info && Object.assign(m, f._info), m;
    }
    cause() {
      return s.cause(this);
    }
    toString() {
      let f = this.name || this.constructor.name || this.constructor.prototype.name;
      return this.message && (f = "".concat(f, ": ").concat(this.message)), f;
    }
  }
  var c = je(47), g = je.n(c);
  const d = "__PATH_SEPARATOR_POSIX__", y = "__PATH_SEPARATOR_WINDOWS__";
  function l(w) {
    try {
      const f = w.replace(/\//g, d).replace(/\\\\/g, y);
      return encodeURIComponent(f).split(y).join("\\\\").split(d).join("/");
    } catch (f) {
      throw new s(f, "Failed encoding path");
    }
  }
  function a(w) {
    return w.startsWith("/") ? w : "/" + w;
  }
  function v(w) {
    let f = w;
    return f[0] !== "/" && (f = "/" + f), /^.+\/$/.test(f) && (f = f.substr(0, f.length - 1)), f;
  }
  function p(w) {
    let f = new (e())(w).pathname;
    return f.length <= 0 && (f = "/"), v(f);
  }
  function E() {
    for (var w = arguments.length, f = new Array(w), m = 0; m < w; m++)
      f[m] = arguments[m];
    return function() {
      return function(O) {
        var R = [];
        if (O.length === 0)
          return "";
        if (typeof O[0] != "string")
          throw new TypeError("Url must be a string. Received " + O[0]);
        if (O[0].match(/^[^/:]+:\/*$/) && O.length > 1) {
          var N = O.shift();
          O[0] = N + O[0];
        }
        O[0].match(/^file:\/\/\//) ? O[0] = O[0].replace(/^([^/:]+):\/*/, "$1:///") : O[0] = O[0].replace(/^([^/:]+):\/*/, "$1://");
        for (var B = 0; B < O.length; B++) {
          var W = O[B];
          if (typeof W != "string")
            throw new TypeError("Url must be a string. Received " + W);
          W !== "" && (B > 0 && (W = W.replace(/^[\/]+/, "")), W = B < O.length - 1 ? W.replace(/[\/]+$/, "") : W.replace(/[\/]+$/, "/"), R.push(W));
        }
        var Y = R.join("/"), Q = (Y = Y.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
        return Q.shift() + (Q.length > 0 ? "?" : "") + Q.join("&");
      }(typeof arguments[0] == "object" ? arguments[0] : [].slice.call(arguments));
    }(f.reduce((O, R, N) => ((N === 0 || R !== "/" || R === "/" && O[O.length - 1] !== "/") && O.push(R), O), []));
  }
  var S = je(542), _ = je.n(S);
  const P = "abcdef0123456789";
  function D(w, f) {
    const m = w.url.replace("//", ""), O = m.indexOf("/") == -1 ? "/" : m.slice(m.indexOf("/")), R = w.method ? w.method.toUpperCase() : "GET", N = !!/(^|,)\s*auth\s*($|,)/.test(f.qop) && "auth", B = "00000000".concat(f.nc).slice(-8), W = function(we, Pe, ye, ne, ie, de, Oe) {
      const ge = Oe || _()("".concat(Pe, ":").concat(ye, ":").concat(ne));
      return we && we.toLowerCase() === "md5-sess" ? _()("".concat(ge, ":").concat(ie, ":").concat(de)) : ge;
    }(f.algorithm, f.username, f.realm, f.password, f.nonce, f.cnonce, f.ha1), Y = _()("".concat(R, ":").concat(O)), Q = N ? _()("".concat(W, ":").concat(f.nonce, ":").concat(B, ":").concat(f.cnonce, ":").concat(N, ":").concat(Y)) : _()("".concat(W, ":").concat(f.nonce, ":").concat(Y)), J = { username: f.username, realm: f.realm, nonce: f.nonce, uri: O, qop: N, response: Q, nc: B, cnonce: f.cnonce, algorithm: f.algorithm, opaque: f.opaque }, oe = [];
    for (const we in J)
      J[we] && (we === "qop" || we === "nc" || we === "algorithm" ? oe.push("".concat(we, "=").concat(J[we])) : oe.push("".concat(we, '="').concat(J[we], '"')));
    return "Digest ".concat(oe.join(", "));
  }
  var I = je(101), x = je.n(I);
  function F(w) {
    return x().decode(w);
  }
  const C = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : typeof window < "u" ? window : globalThis, z = C.fetch.bind(C), q = C.Request, G = C.Response;
  let X = function(w) {
    return w.Digest = "digest", w.None = "none", w.Password = "password", w.Token = "token", w;
  }({}), Z = function(w) {
    return w.DataTypeNoLength = "data-type-no-length", w.InvalidAuthType = "invalid-auth-type", w.InvalidOutputFormat = "invalid-output-format", w.LinkUnsupportedAuthType = "link-unsupported-auth", w;
  }({});
  je(800);
  const H = "@@HOTPATCHER", K = () => {
  };
  function V(w) {
    return { original: w, methods: [w], final: !1 };
  }
  class re {
    constructor() {
      this._configuration = { registry: {}, getEmptyAction: "null" }, this.__type__ = H;
    }
    get configuration() {
      return this._configuration;
    }
    get getEmptyAction() {
      return this.configuration.getEmptyAction;
    }
    set getEmptyAction(f) {
      this.configuration.getEmptyAction = f;
    }
    control(f) {
      let m = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
      if (!f || f.__type__ !== H)
        throw new Error("Failed taking control of target HotPatcher instance: Invalid type or object");
      return Object.keys(f.configuration.registry).forEach((O) => {
        this.configuration.registry.hasOwnProperty(O) ? m && (this.configuration.registry[O] = Object.assign({}, f.configuration.registry[O])) : this.configuration.registry[O] = Object.assign({}, f.configuration.registry[O]);
      }), f._configuration = this.configuration, this;
    }
    execute(f) {
      const m = this.get(f) || K;
      for (var O = arguments.length, R = new Array(O > 1 ? O - 1 : 0), N = 1; N < O; N++)
        R[N - 1] = arguments[N];
      return m(...R);
    }
    get(f) {
      const m = this.configuration.registry[f];
      if (!m)
        switch (this.getEmptyAction) {
          case "null":
            return null;
          case "throw":
            throw new Error("Failed handling method request: No method provided for override: ".concat(f));
          default:
            throw new Error("Failed handling request which resulted in an empty method: Invalid empty-action specified: ".concat(this.getEmptyAction));
        }
      return function() {
        for (var O = arguments.length, R = new Array(O), N = 0; N < O; N++)
          R[N] = arguments[N];
        if (R.length === 0)
          throw new Error("Failed creating sequence: No functions provided");
        return function() {
          for (var B = arguments.length, W = new Array(B), Y = 0; Y < B; Y++)
            W[Y] = arguments[Y];
          let Q = W;
          const J = this;
          for (; R.length > 0; )
            Q = [R.shift().apply(J, Q)];
          return Q[0];
        };
      }(...m.methods);
    }
    isPatched(f) {
      return !!this.configuration.registry[f];
    }
    patch(f, m) {
      let O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      const { chain: R = !1 } = O;
      if (this.configuration.registry[f] && this.configuration.registry[f].final)
        throw new Error("Failed patching '".concat(f, "': Method marked as being final"));
      if (typeof m != "function")
        throw new Error("Failed patching '".concat(f, "': Provided method is not a function"));
      if (R)
        this.configuration.registry[f] ? this.configuration.registry[f].methods.push(m) : this.configuration.registry[f] = V(m);
      else if (this.isPatched(f)) {
        const { original: N } = this.configuration.registry[f];
        this.configuration.registry[f] = Object.assign(V(m), { original: N });
      } else
        this.configuration.registry[f] = V(m);
      return this;
    }
    patchInline(f, m) {
      this.isPatched(f) || this.patch(f, m);
      for (var O = arguments.length, R = new Array(O > 2 ? O - 2 : 0), N = 2; N < O; N++)
        R[N - 2] = arguments[N];
      return this.execute(f, ...R);
    }
    plugin(f) {
      for (var m = arguments.length, O = new Array(m > 1 ? m - 1 : 0), R = 1; R < m; R++)
        O[R - 1] = arguments[R];
      return O.forEach((N) => {
        this.patch(f, N, { chain: !0 });
      }), this;
    }
    restore(f) {
      if (!this.isPatched(f))
        throw new Error("Failed restoring method: No method present for key: ".concat(f));
      if (typeof this.configuration.registry[f].original != "function")
        throw new Error("Failed restoring method: Original method not found or of invalid type for key: ".concat(f));
      return this.configuration.registry[f].methods = [this.configuration.registry[f].original], this;
    }
    setFinal(f) {
      if (!this.configuration.registry.hasOwnProperty(f))
        throw new Error("Failed marking '".concat(f, "' as final: No method found for key"));
      return this.configuration.registry[f].final = !0, this;
    }
  }
  let pe = null;
  function Ae() {
    return pe || (pe = new re()), pe;
  }
  function ce(w) {
    return function(f) {
      if (typeof f != "object" || f === null || Object.prototype.toString.call(f) != "[object Object]")
        return !1;
      if (Object.getPrototypeOf(f) === null)
        return !0;
      let m = f;
      for (; Object.getPrototypeOf(m) !== null; )
        m = Object.getPrototypeOf(m);
      return Object.getPrototypeOf(f) === m;
    }(w) ? Object.assign({}, w) : Object.setPrototypeOf(Object.assign({}, w), Object.getPrototypeOf(w));
  }
  function Ee() {
    for (var w = arguments.length, f = new Array(w), m = 0; m < w; m++)
      f[m] = arguments[m];
    let O = null, R = [...f];
    for (; R.length > 0; ) {
      const N = R.shift();
      O = O ? me(O, N) : ce(N);
    }
    return O;
  }
  function me(w, f) {
    const m = ce(w);
    return Object.keys(f).forEach((O) => {
      m.hasOwnProperty(O) ? Array.isArray(f[O]) ? m[O] = Array.isArray(m[O]) ? [...m[O], ...f[O]] : [...f[O]] : typeof f[O] == "object" && f[O] ? m[O] = typeof m[O] == "object" && m[O] ? me(m[O], f[O]) : ce(f[O]) : m[O] = f[O] : m[O] = f[O];
    }), m;
  }
  function ke(w) {
    const f = {};
    for (const m of w.keys())
      f[m] = w.get(m);
    return f;
  }
  function $e() {
    for (var w = arguments.length, f = new Array(w), m = 0; m < w; m++)
      f[m] = arguments[m];
    if (f.length === 0)
      return {};
    const O = {};
    return f.reduce((R, N) => (Object.keys(N).forEach((B) => {
      const W = B.toLowerCase();
      O.hasOwnProperty(W) ? R[O[W]] = N[B] : (O[W] = B, R[B] = N[B]);
    }), R), {});
  }
  je(805);
  const Ze = typeof ArrayBuffer == "function", { toString: Te } = Object.prototype;
  function _e(w) {
    return Ze && (w instanceof ArrayBuffer || Te.call(w) === "[object ArrayBuffer]");
  }
  function Ie(w) {
    return w != null && w.constructor != null && typeof w.constructor.isBuffer == "function" && w.constructor.isBuffer(w);
  }
  function St(w, f, m) {
    return m ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  function wt(w) {
    const f = Ae();
    return f.patchInline("request", (m) => f.patchInline("fetch", z, m.url, function(O) {
      let R = {};
      const N = { method: O.method };
      if (O.headers && (R = $e(R, O.headers)), O.data !== void 0) {
        const [B, W] = function(Y) {
          if (typeof Y == "string")
            return [Y, {}];
          if (Ie(Y))
            return [Y, {}];
          if (_e(Y))
            return [Y, {}];
          if (Y && typeof Y == "object")
            return [JSON.stringify(Y), { "content-type": "application/json" }];
          throw new Error("Unable to convert request body: Unexpected body type: ".concat(typeof Y));
        }(O.data);
        N.body = B, R = $e(R, W);
      }
      return O.signal && (N.signal = O.signal), O.withCredentials && (N.credentials = "include"), N.headers = R, N;
    }(m)), w);
  }
  const Ue = (Ht = function(w) {
    if (!w._digest)
      return wt(w);
    const f = w._digest;
    return delete w._digest, f.hasDigestAuth && (w = Ee(w, { headers: { Authorization: D(w, f) } })), St(wt(w), function(m) {
      let O = !1;
      return R = function(B) {
        return O ? B : m;
      }, (N = function() {
        if (m.status == 401)
          return f.hasDigestAuth = function(B, W) {
            const Y = B.headers && B.headers.get("www-authenticate") || "";
            if (Y.split(/\s/)[0].toLowerCase() !== "digest")
              return !1;
            const Q = /([a-z0-9_-]+)=(?:"([^"]+)"|([a-z0-9_-]+))/gi;
            for (; ; ) {
              const J = Q.exec(Y);
              if (!J)
                break;
              W[J[1]] = J[2] || J[3];
            }
            return W.nc += 1, W.cnonce = function() {
              let J = "";
              for (let oe = 0; oe < 32; ++oe)
                J = "".concat(J).concat(P[Math.floor(16 * Math.random())]);
              return J;
            }(), !0;
          }(m, f), function() {
            if (f.hasDigestAuth)
              return St(wt(w = Ee(w, { headers: { Authorization: D(w, f) } })), function(B) {
                return B.status == 401 ? f.hasDigestAuth = !1 : f.nc++, O = !0, B;
              });
          }();
        f.nc++;
      }()) && N.then ? N.then(R) : R(N);
      var R, N;
    });
  }, function() {
    for (var w = [], f = 0; f < arguments.length; f++)
      w[f] = arguments[f];
    try {
      return Promise.resolve(Ht.apply(this, w));
    } catch (m) {
      return Promise.reject(m);
    }
  });
  var Ht;
  function Re(w, f, m) {
    const O = ce(w);
    return O.headers = $e(f.headers, O.headers || {}, m.headers || {}), m.data !== void 0 && (O.data = m.data), m.signal && (O.signal = m.signal), f.httpAgent && (O.httpAgent = f.httpAgent), f.httpsAgent && (O.httpsAgent = f.httpsAgent), f.digest && (O._digest = f.digest), typeof f.withCredentials == "boolean" && (O.withCredentials = f.withCredentials), O;
  }
  var Je = je(285);
  const Nt = { "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", !0], "[:alpha:]": ["\\p{L}\\p{Nl}", !0], "[:ascii:]": ["\\x00-\\x7f", !1], "[:blank:]": ["\\p{Zs}\\t", !0], "[:cntrl:]": ["\\p{Cc}", !0], "[:digit:]": ["\\p{Nd}", !0], "[:graph:]": ["\\p{Z}\\p{C}", !0, !0], "[:lower:]": ["\\p{Ll}", !0], "[:print:]": ["\\p{C}", !0], "[:punct:]": ["\\p{P}", !0], "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", !0], "[:upper:]": ["\\p{Lu}", !0], "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", !0], "[:xdigit:]": ["A-Fa-f0-9", !1] }, ut = (w) => w.replace(/[[\]\\-]/g, "\\$&"), bt = (w) => w.join(""), jt = (w, f) => {
    const m = f;
    if (w.charAt(m) !== "[")
      throw new Error("not in a brace expression");
    const O = [], R = [];
    let N = m + 1, B = !1, W = !1, Y = !1, Q = !1, J = m, oe = "";
    e:
      for (; N < w.length; ) {
        const ne = w.charAt(N);
        if (ne !== "!" && ne !== "^" || N !== m + 1) {
          if (ne === "]" && B && !Y) {
            J = N + 1;
            break;
          }
          if (B = !0, ne !== "\\" || Y) {
            if (ne === "[" && !Y) {
              for (const [ie, [de, Oe, ge]] of Object.entries(Nt))
                if (w.startsWith(ie, N)) {
                  if (oe)
                    return ["$.", !1, w.length - m, !0];
                  N += ie.length, ge ? R.push(de) : O.push(de), W = W || Oe;
                  continue e;
                }
            }
            Y = !1, oe ? (ne > oe ? O.push(ut(oe) + "-" + ut(ne)) : ne === oe && O.push(ut(ne)), oe = "", N++) : w.startsWith("-]", N + 1) ? (O.push(ut(ne + "-")), N += 2) : w.startsWith("-", N + 1) ? (oe = ne, N += 2) : (O.push(ut(ne)), N++);
          } else
            Y = !0, N++;
        } else
          Q = !0, N++;
      }
    if (J < N)
      return ["", !1, 0, !1];
    if (!O.length && !R.length)
      return ["$.", !1, w.length - m, !0];
    if (R.length === 0 && O.length === 1 && /^\\?.$/.test(O[0]) && !Q)
      return [(we = O[0].length === 2 ? O[0].slice(-1) : O[0], we.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")), !1, J - m, !1];
    var we;
    const Pe = "[" + (Q ? "^" : "") + bt(O) + "]", ye = "[" + (Q ? "" : "^") + bt(R) + "]";
    return [O.length && R.length ? "(" + Pe + "|" + ye + ")" : O.length ? Pe : ye, W, J - m, !0];
  };
  function Ce(w, f, m) {
    var O;
    return (f = typeof (O = function(R, N) {
      if (typeof R != "object" || !R)
        return R;
      var B = R[Symbol.toPrimitive];
      if (B !== void 0) {
        var W = B.call(R, "string");
        if (typeof W != "object")
          return W;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(R);
    }(f)) == "symbol" ? O : String(O)) in w ? Object.defineProperty(w, f, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : w[f] = m, w;
  }
  const De = function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return Dr(f), !(!m.nocomment && f.charAt(0) === "#") && new Ar(f, m).match(w);
  }, cr = De, $r = /^\*+([^+@!?\*\[\(]*)$/, pt = (w) => (f) => !f.startsWith(".") && f.endsWith(w), Pt = (w) => (f) => f.endsWith(w), $t = (w) => (w = w.toLowerCase(), (f) => !f.startsWith(".") && f.toLowerCase().endsWith(w)), It = (w) => (w = w.toLowerCase(), (f) => f.toLowerCase().endsWith(w)), he = /^\*+\.\*+$/, qe = (w) => !w.startsWith(".") && w.includes("."), b = (w) => w !== "." && w !== ".." && w.includes("."), $ = /^\.\*+$/, L = (w) => w !== "." && w !== ".." && w.startsWith("."), M = /^\*+$/, h = (w) => w.length !== 0 && !w.startsWith("."), o = (w) => w.length !== 0 && w !== "." && w !== "..", u = /^\?+([^+@!?\*\[\(]*)?$/, T = (w) => {
    let [f, m = ""] = w;
    const O = te([f]);
    return m ? (m = m.toLowerCase(), (R) => O(R) && R.toLowerCase().endsWith(m)) : O;
  }, A = (w) => {
    let [f, m = ""] = w;
    const O = le([f]);
    return m ? (m = m.toLowerCase(), (R) => O(R) && R.toLowerCase().endsWith(m)) : O;
  }, k = (w) => {
    let [f, m = ""] = w;
    const O = le([f]);
    return m ? (R) => O(R) && R.endsWith(m) : O;
  }, j = (w) => {
    let [f, m = ""] = w;
    const O = te([f]);
    return m ? (R) => O(R) && R.endsWith(m) : O;
  }, te = (w) => {
    let [f] = w;
    const m = f.length;
    return (O) => O.length === m && !O.startsWith(".");
  }, le = (w) => {
    let [f] = w;
    const m = f.length;
    return (O) => O.length === m && O !== "." && O !== "..";
  }, ue = typeof Mt == "object" && Mt ? typeof Mt.env == "object" && Mt.env && Mt.env.__MINIMATCH_TESTING_PLATFORM__ || Mt.platform : "posix";
  De.sep = ue === "win32" ? "\\" : "/";
  const fe = Symbol("globstar **");
  De.GLOBSTAR = fe;
  const xe = { "!": { open: "(?:(?!(?:", close: "))[^/]*?)" }, "?": { open: "(?:", close: ")?" }, "+": { open: "(?:", close: ")+" }, "*": { open: "(?:", close: ")*" }, "@": { open: "(?:", close: ")" } }, Xt = "[^/]", Ir = Xt + "*?", Tn = (w) => w.split("").reduce((f, m) => (f[m] = !0, f), {}), ai = Tn("().*{}+?[]^$\\!"), co = Tn("[.(");
  De.filter = function(w) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return (m) => De(m, w, f);
  };
  const ht = function(w) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.assign({}, w, f);
  };
  De.defaults = (w) => {
    if (!w || typeof w != "object" || !Object.keys(w).length)
      return De;
    const f = De;
    return Object.assign(function(m, O) {
      return f(m, O, ht(w, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}));
    }, { Minimatch: class extends f.Minimatch {
      constructor(m) {
        super(m, ht(w, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}));
      }
      static defaults(m) {
        return f.defaults(ht(w, m)).Minimatch;
      }
    }, unescape: function(m) {
      let O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return f.unescape(m, ht(w, O));
    }, escape: function(m) {
      let O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return f.escape(m, ht(w, O));
    }, filter: function(m) {
      let O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return f.filter(m, ht(w, O));
    }, defaults: (m) => f.defaults(ht(w, m)), makeRe: function(m) {
      let O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return f.makeRe(m, ht(w, O));
    }, braceExpand: function(m) {
      let O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return f.braceExpand(m, ht(w, O));
    }, match: function(m, O) {
      let R = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return f.match(m, O, ht(w, R));
    }, sep: f.sep, GLOBSTAR: fe });
  };
  const Ur = function(w) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Dr(w), f.nobrace || !/\{(?:(?!\{).)*\}/.test(w) ? [w] : Je(w);
  };
  De.braceExpand = Ur;
  const Dr = (w) => {
    if (typeof w != "string")
      throw new TypeError("invalid pattern");
    if (w.length > 65536)
      throw new TypeError("pattern is too long");
  };
  De.makeRe = function(w) {
    return new Ar(w, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).makeRe();
  }, De.match = function(w, f) {
    const m = new Ar(f, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {});
    return w = w.filter((O) => m.match(O)), m.options.nonull && !w.length && w.push(f), w;
  };
  const Yt = /[?*]|[+@!]\(.*?\)|\[|\]/, jr = (w) => w.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  class Ar {
    constructor(f) {
      let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      Ce(this, "options", void 0), Ce(this, "set", void 0), Ce(this, "pattern", void 0), Ce(this, "windowsPathsNoEscape", void 0), Ce(this, "nonegate", void 0), Ce(this, "negate", void 0), Ce(this, "comment", void 0), Ce(this, "empty", void 0), Ce(this, "preserveMultipleSlashes", void 0), Ce(this, "partial", void 0), Ce(this, "globSet", void 0), Ce(this, "globParts", void 0), Ce(this, "nocase", void 0), Ce(this, "isWindows", void 0), Ce(this, "platform", void 0), Ce(this, "windowsNoMagicRoot", void 0), Ce(this, "regexp", void 0), Dr(f), m = m || {}, this.options = m, this.pattern = f, this.platform = m.platform || ue, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!m.windowsPathsNoEscape || m.allowWindowsEscape === !1, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!m.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!m.nonegate, this.comment = !1, this.empty = !1, this.partial = !!m.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = m.windowsNoMagicRoot !== void 0 ? m.windowsNoMagicRoot : !(!this.isWindows || !this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
    }
    hasMagic() {
      if (this.options.magicalBraces && this.set.length > 1)
        return !0;
      for (const f of this.set)
        for (const m of f)
          if (typeof m != "string")
            return !0;
      return !1;
    }
    debug() {
    }
    make() {
      const f = this.pattern, m = this.options;
      if (!m.nocomment && f.charAt(0) === "#")
        return void (this.comment = !0);
      if (!f)
        return void (this.empty = !0);
      this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], m.debug && (this.debug = function() {
        return console.error(...arguments);
      }), this.debug(this.pattern, this.globSet);
      const O = this.globSet.map((N) => this.slashSplit(N));
      this.globParts = this.preprocess(O), this.debug(this.pattern, this.globParts);
      let R = this.globParts.map((N, B, W) => {
        if (this.isWindows && this.windowsNoMagicRoot) {
          const Y = !(N[0] !== "" || N[1] !== "" || N[2] !== "?" && Yt.test(N[2]) || Yt.test(N[3])), Q = /^[a-z]:/i.test(N[0]);
          if (Y)
            return [...N.slice(0, 4), ...N.slice(4).map((J) => this.parse(J))];
          if (Q)
            return [N[0], ...N.slice(1).map((J) => this.parse(J))];
        }
        return N.map((Y) => this.parse(Y));
      });
      if (this.debug(this.pattern, R), this.set = R.filter((N) => N.indexOf(!1) === -1), this.isWindows)
        for (let N = 0; N < this.set.length; N++) {
          const B = this.set[N];
          B[0] === "" && B[1] === "" && this.globParts[N][2] === "?" && typeof B[3] == "string" && /^[a-z]:$/i.test(B[3]) && (B[2] = "?");
        }
      this.debug(this.pattern, this.set);
    }
    preprocess(f) {
      if (this.options.noglobstar)
        for (let O = 0; O < f.length; O++)
          for (let R = 0; R < f[O].length; R++)
            f[O][R] === "**" && (f[O][R] = "*");
      const { optimizationLevel: m = 1 } = this.options;
      return m >= 2 ? (f = this.firstPhasePreProcess(f), f = this.secondPhasePreProcess(f)) : f = m >= 1 ? this.levelOneOptimize(f) : this.adjascentGlobstarOptimize(f), f;
    }
    adjascentGlobstarOptimize(f) {
      return f.map((m) => {
        let O = -1;
        for (; (O = m.indexOf("**", O + 1)) !== -1; ) {
          let R = O;
          for (; m[R + 1] === "**"; )
            R++;
          R !== O && m.splice(O, R - O);
        }
        return m;
      });
    }
    levelOneOptimize(f) {
      return f.map((m) => (m = m.reduce((O, R) => {
        const N = O[O.length - 1];
        return R === "**" && N === "**" ? O : R === ".." && N && N !== ".." && N !== "." && N !== "**" ? (O.pop(), O) : (O.push(R), O);
      }, [])).length === 0 ? [""] : m);
    }
    levelTwoFileOptimize(f) {
      Array.isArray(f) || (f = this.slashSplit(f));
      let m = !1;
      do {
        if (m = !1, !this.preserveMultipleSlashes) {
          for (let R = 1; R < f.length - 1; R++) {
            const N = f[R];
            R === 1 && N === "" && f[0] === "" || N !== "." && N !== "" || (m = !0, f.splice(R, 1), R--);
          }
          f[0] !== "." || f.length !== 2 || f[1] !== "." && f[1] !== "" || (m = !0, f.pop());
        }
        let O = 0;
        for (; (O = f.indexOf("..", O + 1)) !== -1; ) {
          const R = f[O - 1];
          R && R !== "." && R !== ".." && R !== "**" && (m = !0, f.splice(O - 1, 2), O -= 2);
        }
      } while (m);
      return f.length === 0 ? [""] : f;
    }
    firstPhasePreProcess(f) {
      let m = !1;
      do {
        m = !1;
        for (let O of f) {
          let R = -1;
          for (; (R = O.indexOf("**", R + 1)) !== -1; ) {
            let B = R;
            for (; O[B + 1] === "**"; )
              B++;
            B > R && O.splice(R + 1, B - R);
            let W = O[R + 1];
            const Y = O[R + 2], Q = O[R + 3];
            if (W !== ".." || !Y || Y === "." || Y === ".." || !Q || Q === "." || Q === "..")
              continue;
            m = !0, O.splice(R, 1);
            const J = O.slice(0);
            J[R] = "**", f.push(J), R--;
          }
          if (!this.preserveMultipleSlashes) {
            for (let B = 1; B < O.length - 1; B++) {
              const W = O[B];
              B === 1 && W === "" && O[0] === "" || W !== "." && W !== "" || (m = !0, O.splice(B, 1), B--);
            }
            O[0] !== "." || O.length !== 2 || O[1] !== "." && O[1] !== "" || (m = !0, O.pop());
          }
          let N = 0;
          for (; (N = O.indexOf("..", N + 1)) !== -1; ) {
            const B = O[N - 1];
            if (B && B !== "." && B !== ".." && B !== "**") {
              m = !0;
              const W = N === 1 && O[N + 1] === "**" ? ["."] : [];
              O.splice(N - 1, 2, ...W), O.length === 0 && O.push(""), N -= 2;
            }
          }
        }
      } while (m);
      return f;
    }
    secondPhasePreProcess(f) {
      for (let m = 0; m < f.length - 1; m++)
        for (let O = m + 1; O < f.length; O++) {
          const R = this.partsMatch(f[m], f[O], !this.preserveMultipleSlashes);
          R && (f[m] = R, f[O] = []);
        }
      return f.filter((m) => m.length);
    }
    partsMatch(f, m) {
      let O = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], R = 0, N = 0, B = [], W = "";
      for (; R < f.length && N < m.length; )
        if (f[R] === m[N])
          B.push(W === "b" ? m[N] : f[R]), R++, N++;
        else if (O && f[R] === "**" && m[N] === f[R + 1])
          B.push(f[R]), R++;
        else if (O && m[N] === "**" && f[R] === m[N + 1])
          B.push(m[N]), N++;
        else if (f[R] !== "*" || !m[N] || !this.options.dot && m[N].startsWith(".") || m[N] === "**") {
          if (m[N] !== "*" || !f[R] || !this.options.dot && f[R].startsWith(".") || f[R] === "**" || W === "a")
            return !1;
          W = "b", B.push(m[N]), R++, N++;
        } else {
          if (W === "b")
            return !1;
          W = "a", B.push(f[R]), R++, N++;
        }
      return f.length === m.length && B;
    }
    parseNegate() {
      if (this.nonegate)
        return;
      const f = this.pattern;
      let m = !1, O = 0;
      for (let R = 0; R < f.length && f.charAt(R) === "!"; R++)
        m = !m, O++;
      O && (this.pattern = f.slice(O)), this.negate = m;
    }
    matchOne(f, m) {
      let O = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
      const R = this.options;
      if (this.isWindows) {
        const ne = f[0] === "" && f[1] === "" && f[2] === "?" && typeof f[3] == "string" && /^[a-z]:$/i.test(f[3]), ie = m[0] === "" && m[1] === "" && m[2] === "?" && typeof m[3] == "string" && /^[a-z]:$/i.test(m[3]);
        if (ne && ie) {
          const de = f[3], Oe = m[3];
          de.toLowerCase() === Oe.toLowerCase() && (f[3] = Oe);
        } else if (ie && typeof f[0] == "string") {
          const de = m[3], Oe = f[0];
          de.toLowerCase() === Oe.toLowerCase() && (m[3] = Oe, m = m.slice(3));
        } else if (ne && typeof m[0] == "string") {
          const de = f[3];
          de.toLowerCase() === m[0].toLowerCase() && (m[0] = de, f = f.slice(3));
        }
      }
      const { optimizationLevel: N = 1 } = this.options;
      N >= 2 && (f = this.levelTwoFileOptimize(f)), this.debug("matchOne", this, { file: f, pattern: m }), this.debug("matchOne", f.length, m.length);
      for (var B = 0, W = 0, Y = f.length, Q = m.length; B < Y && W < Q; B++, W++) {
        this.debug("matchOne loop");
        var J = m[W], oe = f[B];
        if (this.debug(m, J, oe), J === !1)
          return !1;
        if (J === fe) {
          this.debug("GLOBSTAR", [m, J, oe]);
          var we = B, Pe = W + 1;
          if (Pe === Q) {
            for (this.debug("** at the end"); B < Y; B++)
              if (f[B] === "." || f[B] === ".." || !R.dot && f[B].charAt(0) === ".")
                return !1;
            return !0;
          }
          for (; we < Y; ) {
            var ye = f[we];
            if (this.debug(`
globstar while`, f, we, m, Pe, ye), this.matchOne(f.slice(we), m.slice(Pe), O))
              return this.debug("globstar found match!", we, Y, ye), !0;
            if (ye === "." || ye === ".." || !R.dot && ye.charAt(0) === ".") {
              this.debug("dot detected!", f, we, m, Pe);
              break;
            }
            this.debug("globstar swallow a segment, and continue"), we++;
          }
          return !(!O || (this.debug(`
>>> no match, partial?`, f, we, m, Pe), we !== Y));
        }
        let ne;
        if (typeof J == "string" ? (ne = oe === J, this.debug("string match", J, oe, ne)) : (ne = J.test(oe), this.debug("pattern match", J, oe, ne)), !ne)
          return !1;
      }
      if (B === Y && W === Q)
        return !0;
      if (B === Y)
        return O;
      if (W === Q)
        return B === Y - 1 && f[B] === "";
      throw new Error("wtf?");
    }
    braceExpand() {
      return Ur(this.pattern, this.options);
    }
    parse(f) {
      Dr(f);
      const m = this.options;
      if (f === "**")
        return fe;
      if (f === "")
        return "";
      let O, R = null;
      (O = f.match(M)) ? R = m.dot ? o : h : (O = f.match($r)) ? R = (m.nocase ? m.dot ? It : $t : m.dot ? Pt : pt)(O[1]) : (O = f.match(u)) ? R = (m.nocase ? m.dot ? A : T : m.dot ? k : j)(O) : (O = f.match(he)) ? R = m.dot ? b : qe : (O = f.match($)) && (R = L);
      let N = "", B = !1, W = !1;
      const Y = [], Q = [];
      let J, oe = !1, we = !1, Pe = f.charAt(0) === ".", ye = m.dot || Pe;
      const ne = (ge) => ge.charAt(0) === "." ? "" : m.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)", ie = () => {
        if (oe) {
          switch (oe) {
            case "*":
              N += Ir, B = !0;
              break;
            case "?":
              N += Xt, B = !0;
              break;
            default:
              N += "\\" + oe;
          }
          this.debug("clearStateChar %j %j", oe, N), oe = !1;
        }
      };
      for (let ge, Se = 0; Se < f.length && (ge = f.charAt(Se)); Se++)
        if (this.debug("%s	%s %s %j", f, Se, N, ge), W) {
          if (ge === "/")
            return !1;
          ai[ge] && (N += "\\"), N += ge, W = !1;
        } else
          switch (ge) {
            case "/":
              return !1;
            case "\\":
              ie(), W = !0;
              continue;
            case "?":
            case "*":
            case "+":
            case "@":
            case "!":
              this.debug("%s	%s %s %j <-- stateChar", f, Se, N, ge), this.debug("call clearStateChar %j", oe), ie(), oe = ge, m.noext && ie();
              continue;
            case "(": {
              if (!oe) {
                N += "\\(";
                continue;
              }
              const Ke = { type: oe, start: Se - 1, reStart: N.length, open: xe[oe].open, close: xe[oe].close };
              this.debug(this.pattern, "	", Ke), Y.push(Ke), N += Ke.open, Ke.start === 0 && Ke.type !== "!" && (Pe = !0, N += ne(f.slice(Se + 1))), this.debug("plType %j %j", oe, N), oe = !1;
              continue;
            }
            case ")": {
              const Ke = Y[Y.length - 1];
              if (!Ke) {
                N += "\\)";
                continue;
              }
              Y.pop(), ie(), B = !0, J = Ke, N += J.close, J.type === "!" && Q.push(Object.assign(J, { reEnd: N.length }));
              continue;
            }
            case "|": {
              const Ke = Y[Y.length - 1];
              if (!Ke) {
                N += "\\|";
                continue;
              }
              ie(), N += "|", Ke.start === 0 && Ke.type !== "!" && (Pe = !0, N += ne(f.slice(Se + 1)));
              continue;
            }
            case "[":
              ie();
              const [ze, ct, Me, Jt] = jt(f, Se);
              Me ? (N += ze, we = we || ct, Se += Me - 1, B = B || Jt) : N += "\\[";
              continue;
            case "]":
              N += "\\" + ge;
              continue;
            default:
              ie(), N += jr(ge);
          }
      for (J = Y.pop(); J; J = Y.pop()) {
        let ge;
        ge = N.slice(J.reStart + J.open.length), this.debug(this.pattern, "setting tail", N, J), ge = ge.replace(/((?:\\{2}){0,64})(\\?)\|/g, (ze, ct, Me) => (Me || (Me = "\\"), ct + ct + Me + "|")), this.debug(`tail=%j
   %s`, ge, ge, J, N);
        const Se = J.type === "*" ? Ir : J.type === "?" ? Xt : "\\" + J.type;
        B = !0, N = N.slice(0, J.reStart) + Se + "\\(" + ge;
      }
      ie(), W && (N += "\\\\");
      const de = co[N.charAt(0)];
      for (let ge = Q.length - 1; ge > -1; ge--) {
        const Se = Q[ge], ze = N.slice(0, Se.reStart), ct = N.slice(Se.reStart, Se.reEnd - 8);
        let Me = N.slice(Se.reEnd);
        const Jt = N.slice(Se.reEnd - 8, Se.reEnd) + Me, Ke = ze.split(")").length, Gp = ze.split("(").length - Ke;
        let yo = Me;
        for (let Fs = 0; Fs < Gp; Fs++)
          yo = yo.replace(/\)[+*?]?/, "");
        Me = yo, N = ze + ct + Me + (Me === "" ? "(?:$|\\/)" : "") + Jt;
      }
      if (N !== "" && B && (N = "(?=.)" + N), de && (N = (Pe ? "" : ye ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)") + N), !m.nocase || B || m.nocaseMagicOnly || (B = f.toUpperCase() !== f.toLowerCase()), !B)
        return N.replace(/\\(.)/g, "$1");
      const Oe = (m.nocase ? "i" : "") + (we ? "u" : "");
      try {
        const ge = R ? { _glob: f, _src: N, test: R } : { _glob: f, _src: N };
        return Object.assign(new RegExp("^" + N + "$", Oe), ge);
      } catch (ge) {
        return this.debug("invalid regexp", ge), new RegExp("$.");
      }
    }
    makeRe() {
      if (this.regexp || this.regexp === !1)
        return this.regexp;
      const f = this.set;
      if (!f.length)
        return this.regexp = !1, this.regexp;
      const m = this.options, O = m.noglobstar ? Ir : m.dot ? "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?" : "(?:(?!(?:\\/|^)\\.).)*?", R = m.nocase ? "i" : "";
      let N = f.map((B) => {
        const W = B.map((Y) => typeof Y == "string" ? jr(Y) : Y === fe ? fe : Y._src);
        return W.forEach((Y, Q) => {
          const J = W[Q + 1], oe = W[Q - 1];
          Y === fe && oe !== fe && (oe === void 0 ? J !== void 0 && J !== fe ? W[Q + 1] = "(?:\\/|" + O + "\\/)?" + J : W[Q] = O : J === void 0 ? W[Q - 1] = oe + "(?:\\/|" + O + ")?" : J !== fe && (W[Q - 1] = oe + "(?:\\/|\\/" + O + "\\/)" + J, W[Q + 1] = fe));
        }), W.filter((Y) => Y !== fe).join("/");
      }).join("|");
      N = "^(?:" + N + ")$", this.negate && (N = "^(?!" + N + ").*$");
      try {
        this.regexp = new RegExp(N, R);
      } catch {
        this.regexp = !1;
      }
      return this.regexp;
    }
    slashSplit(f) {
      return this.preserveMultipleSlashes ? f.split("/") : this.isWindows && /^\/\/[^\/]+/.test(f) ? ["", ...f.split(/\/+/)] : f.split(/\/+/);
    }
    match(f) {
      let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.partial;
      if (this.debug("match", f, this.pattern), this.comment)
        return !1;
      if (this.empty)
        return f === "";
      if (f === "/" && m)
        return !0;
      const O = this.options;
      this.isWindows && (f = f.split("\\").join("/"));
      const R = this.slashSplit(f);
      this.debug(this.pattern, "split", R);
      const N = this.set;
      this.debug(this.pattern, "set", N);
      let B = R[R.length - 1];
      if (!B)
        for (let W = R.length - 2; !B && W >= 0; W--)
          B = R[W];
      for (let W = 0; W < N.length; W++) {
        const Y = N[W];
        let Q = R;
        if (O.matchBase && Y.length === 1 && (Q = [B]), this.matchOne(Q, Y, m))
          return !!O.flipNegate || !this.negate;
      }
      return !O.flipNegate && this.negate;
    }
    static defaults(f) {
      return De.defaults(f).Minimatch;
    }
  }
  function Gr(w) {
    const f = new Error("".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", "Invalid response: ").concat(w.status, " ").concat(w.statusText));
    return f.status = w.status, f.response = w, f;
  }
  function tt(w, f) {
    const { status: m } = f;
    if (m === 401 && w.digest)
      return f;
    if (m >= 400)
      throw Gr(f);
    return f;
  }
  function Kt(w, f) {
    return arguments.length > 2 && arguments[2] !== void 0 && arguments[2] ? { data: f, headers: w.headers ? ke(w.headers) : {}, status: w.status, statusText: w.statusText } : f;
  }
  De.Minimatch = Ar, De.escape = function(w) {
    let { windowsPathsNoEscape: f = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return f ? w.replace(/[?*()[\]]/g, "[$&]") : w.replace(/[?*()[\]\\]/g, "\\$&");
  }, De.unescape = function(w) {
    let { windowsPathsNoEscape: f = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return f ? w.replace(/\[([^\/\\])\]/g, "$1") : w.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
  };
  const Gt = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (O) {
        return Promise.reject(O);
      }
    };
  }(function(w, f, m) {
    let O = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const R = Re({ url: E(w.remoteURL, l(f)), method: "COPY", headers: { Destination: E(w.remoteURL, l(m)) } }, w, O);
    return B = function(W) {
      tt(w, W);
    }, (N = Ue(R)) && N.then || (N = Promise.resolve(N)), B ? N.then(B) : N;
    var N, B;
  });
  var Wr = je(635), si = je(829), Rt = je.n(si), fr = function(w) {
    return w.Array = "array", w.Object = "object", w.Original = "original", w;
  }(fr || {});
  function Vr(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : fr.Original;
    const O = Rt().get(w, f);
    return m === "array" && Array.isArray(O) === !1 ? [O] : m === "object" && Array.isArray(O) ? O[0] : O;
  }
  function se(w) {
    return new Promise((f) => {
      f(function(m) {
        const { multistatus: O } = m;
        if (O === "")
          return { multistatus: { response: [] } };
        if (!O)
          throw new Error("Invalid response: No root multistatus found");
        const R = { multistatus: Array.isArray(O) ? O[0] : O };
        return Rt().set(R, "multistatus.response", Vr(R, "multistatus.response", fr.Array)), Rt().set(R, "multistatus.response", Rt().get(R, "multistatus.response").map((N) => function(B) {
          const W = Object.assign({}, B);
          return W.status ? Rt().set(W, "status", Vr(W, "status", fr.Object)) : (Rt().set(W, "propstat", Vr(W, "propstat", fr.Object)), Rt().set(W, "propstat.prop", Vr(W, "propstat.prop", fr.Object))), W;
        }(N))), R;
      }(new Wr.XMLParser({ removeNSPrefix: !0, numberParseOptions: { hex: !0, leadingZeros: !1 } }).parse(w)));
    });
  }
  function U(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    const { getlastmodified: O = null, getcontentlength: R = "0", resourcetype: N = null, getcontenttype: B = null, getetag: W = null } = w, Y = N && typeof N == "object" && N.collection !== void 0 ? "directory" : "file", Q = { filename: f, basename: g().basename(f), lastmod: O, size: parseInt(R, 10), type: Y, etag: typeof W == "string" ? W.replace(/"/g, "") : null };
    return Y === "file" && (Q.mime = B && typeof B == "string" ? B.split(";")[0] : ""), m && (Q.props = w), Q;
  }
  function ee(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], O = null;
    try {
      w.multistatus.response[0].propstat && (O = w.multistatus.response[0]);
    } catch {
    }
    if (!O)
      throw new Error("Failed getting item stat: bad response");
    const { propstat: { prop: R, status: N } } = O, [B, W, Y] = N.split(" ", 3), Q = parseInt(W, 10);
    if (Q >= 400) {
      const J = new Error("Invalid response: ".concat(Q, " ").concat(Y));
      throw J.status = Q, J;
    }
    return U(R, v(f), m);
  }
  function ae(w) {
    switch (w.toString()) {
      case "-3":
        return "unlimited";
      case "-2":
      case "-1":
        return "unknown";
      default:
        return parseInt(w, 10);
    }
  }
  function Le(w, f, m) {
    return m ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  const Ye = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (O) {
        return Promise.reject(O);
      }
    };
  }(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { details: O = !1 } = m, R = Re({ url: E(w.remoteURL, l(f)), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, w, m);
    return Le(Ue(R), function(N) {
      return tt(w, N), Le(N.text(), function(B) {
        return Le(se(B), function(W) {
          const Y = ee(W, f, O);
          return Kt(N, Y, O);
        });
      });
    });
  });
  function Qe(w, f, m) {
    return m ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  const lt = Zt(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const O = function(N) {
      if (!N || N === "/")
        return [];
      let B = N;
      const W = [];
      do
        W.push(B), B = g().dirname(B);
      while (B && B !== "/");
      return W;
    }(v(f));
    O.sort((N, B) => N.length > B.length ? 1 : B.length > N.length ? -1 : 0);
    let R = !1;
    return function(N, B, W) {
      if (typeof N[On] == "function") {
        let ie = function(de) {
          try {
            for (; !(Y = oe.next()).done; )
              if ((de = B(Y.value)) && de.then) {
                if (!Ps(de))
                  return void de.then(ie, J || (J = rt.bind(null, Q = new qr(), 2)));
                de = de.v;
              }
            Q ? rt(Q, 1, de) : Q = de;
          } catch (Oe) {
            rt(Q || (Q = new qr()), 2, Oe);
          }
        };
        var ne = ie, Y, Q, J, oe = N[On]();
        if (ie(), oe.return) {
          var we = function(de) {
            try {
              Y.done || oe.return();
            } catch {
            }
            return de;
          };
          if (Q && Q.then)
            return Q.then(we, function(de) {
              throw we(de);
            });
          we();
        }
        return Q;
      }
      if (!("length" in N))
        throw new TypeError("Object is not iterable");
      for (var Pe = [], ye = 0; ye < N.length; ye++)
        Pe.push(N[ye]);
      return function(ie, de, Oe) {
        var ge, Se, ze = -1;
        return function ct(Me) {
          try {
            for (; ++ze < ie.length && (!Oe || !Oe()); )
              if ((Me = de(ze)) && Me.then) {
                if (!Ps(Me))
                  return void Me.then(ct, Se || (Se = rt.bind(null, ge = new qr(), 2)));
                Me = Me.v;
              }
            ge ? rt(ge, 1, Me) : ge = Me;
          } catch (Jt) {
            rt(ge || (ge = new qr()), 2, Jt);
          }
        }(), ge;
      }(Pe, function(ie) {
        return B(Pe[ie]);
      }, W);
    }(O, function(N) {
      return B = function() {
        return function(Y, Q) {
          try {
            var J = Qe(Ye(w, N), function(oe) {
              if (oe.type !== "directory")
                throw new Error("Path includes a file: ".concat(f));
            });
          } catch (oe) {
            return Q(oe);
          }
          return J && J.then ? J.then(void 0, Q) : J;
        }(0, function(Y) {
          const Q = Y;
          return function() {
            if (Q.status === 404)
              return R = !0, at(fo(w, N, { ...m, recursive: !1 }));
            throw Y;
          }();
        });
      }, (W = function() {
        if (R)
          return at(fo(w, N, { ...m, recursive: !1 }));
      }()) && W.then ? W.then(B) : B();
      var B, W;
    }, function() {
      return !1;
    });
  });
  function Zt(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (O) {
        return Promise.reject(O);
      }
    };
  }
  function _r() {
  }
  function at(w, f) {
    if (!f)
      return w && w.then ? w.then(_r) : Promise.resolve();
  }
  const On = typeof Symbol < "u" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
  function rt(w, f, m) {
    if (!w.s) {
      if (m instanceof qr) {
        if (!m.s)
          return void (m.o = rt.bind(null, w, f));
        1 & f && (f = m.s), m = m.v;
      }
      if (m && m.then)
        return void m.then(rt.bind(null, w, f), rt.bind(null, w, 2));
      w.s = f, w.v = m;
      const O = w.o;
      O && O(w);
    }
  }
  const qr = function() {
    function w() {
    }
    return w.prototype.then = function(f, m) {
      const O = new w(), R = this.s;
      if (R) {
        const N = 1 & R ? f : m;
        if (N) {
          try {
            rt(O, 1, N(this.v));
          } catch (B) {
            rt(O, 2, B);
          }
          return O;
        }
        return this;
      }
      return this.o = function(N) {
        try {
          const B = N.v;
          1 & N.s ? rt(O, 1, f ? f(B) : B) : m ? rt(O, 1, m(B)) : rt(O, 2, B);
        } catch (B) {
          rt(O, 2, B);
        }
      }, O;
    }, w;
  }();
  function Ps(w) {
    return w instanceof qr && 1 & w.s;
  }
  const fo = Zt(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (m.recursive === !0)
      return lt(w, f, m);
    const O = Re({ url: E(w.remoteURL, (R = l(f), R.endsWith("/") ? R : R + "/")), method: "MKCOL" }, w, m);
    var R;
    return Qe(Ue(O), function(N) {
      tt(w, N);
    });
  });
  var bp = je(388), Rs = je.n(bp);
  const Ep = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (O) {
        return Promise.reject(O);
      }
    };
  }(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const O = {};
    if (typeof m.range == "object" && typeof m.range.start == "number") {
      let W = "bytes=".concat(m.range.start, "-");
      typeof m.range.end == "number" && (W = "".concat(W).concat(m.range.end)), O.Range = W;
    }
    const R = Re({ url: E(w.remoteURL, l(f)), method: "GET", headers: O }, w, m);
    return B = function(W) {
      if (tt(w, W), O.Range && W.status !== 206) {
        const Y = new Error("Invalid response code for partial request: ".concat(W.status));
        throw Y.status = W.status, Y;
      }
      return m.callback && setTimeout(() => {
        m.callback(W);
      }, 0), W.body;
    }, (N = Ue(R)) && N.then || (N = Promise.resolve(N)), B ? N.then(B) : N;
    var N, B;
  }), Tp = () => {
  }, Op = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (O) {
        return Promise.reject(O);
      }
    };
  }(function(w, f, m) {
    m.url || (m.url = E(w.remoteURL, l(f)));
    const O = Re(m, w, {});
    return N = function(B) {
      return tt(w, B), B;
    }, (R = Ue(O)) && R.then || (R = Promise.resolve(R)), N ? R.then(N) : R;
    var R, N;
  }), Sp = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (O) {
        return Promise.reject(O);
      }
    };
  }(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const O = Re({ url: E(w.remoteURL, l(f)), method: "DELETE" }, w, m);
    return N = function(B) {
      tt(w, B);
    }, (R = Ue(O)) && R.then || (R = Promise.resolve(R)), N ? R.then(N) : R;
    var R, N;
  }), $p = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (O) {
        return Promise.reject(O);
      }
    };
  }(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function(O, R) {
      try {
        var N = (B = Ye(w, f, m), W = function() {
          return !0;
        }, Y ? W ? W(B) : B : (B && B.then || (B = Promise.resolve(B)), W ? B.then(W) : B));
      } catch (Q) {
        return R(Q);
      }
      var B, W, Y;
      return N && N.then ? N.then(void 0, R) : N;
    }(0, function(O) {
      if (O.status === 404)
        return !1;
      throw O;
    });
  });
  function po(w, f, m) {
    return m ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  const Ip = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (O) {
        return Promise.reject(O);
      }
    };
  }(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const O = Re({ url: E(w.remoteURL, l(f), "/"), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: m.deep ? "infinity" : "1" } }, w, m);
    return po(Ue(O), function(R) {
      return tt(w, R), po(R.text(), function(N) {
        if (!N)
          throw new Error("Failed parsing directory contents: Empty response");
        return po(se(N), function(B) {
          const W = a(f);
          let Y = function(Q, J, oe) {
            let we = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], Pe = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
            const ye = g().join(J, "/"), { multistatus: { response: ne } } = Q, ie = ne.map((de) => {
              const Oe = function(Se) {
                try {
                  return Se.replace(/^https?:\/\/[^\/]+/, "");
                } catch (ze) {
                  throw new s(ze, "Failed normalising HREF");
                }
              }(de.href), { propstat: { prop: ge } } = de;
              return U(ge, ye === "/" ? decodeURIComponent(v(Oe)) : v(g().relative(decodeURIComponent(ye), decodeURIComponent(Oe))), we);
            });
            return Pe ? ie : ie.filter((de) => de.basename && (de.type === "file" || de.filename !== oe.replace(/\/$/, "")));
          }(B, a(w.remoteBasePath || w.remotePath), W, m.details, m.includeSelf);
          return m.glob && (Y = function(Q, J) {
            return Q.filter((oe) => cr(oe.filename, J, { matchBase: !0 }));
          }(Y, m.glob)), Kt(R, Y, m.details);
        });
      });
    });
  });
  function ho(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (O) {
        return Promise.reject(O);
      }
    };
  }
  const Ap = ho(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const O = Re({ url: E(w.remoteURL, l(f)), method: "GET", headers: { Accept: "text/plain" }, transformResponse: [Np] }, w, m);
    return ui(Ue(O), function(R) {
      return tt(w, R), ui(R.text(), function(N) {
        return Kt(R, N, m.details);
      });
    });
  });
  function ui(w, f, m) {
    return m ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  const _p = ho(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const O = Re({ url: E(w.remoteURL, l(f)), method: "GET" }, w, m);
    return ui(Ue(O), function(R) {
      let N;
      return tt(w, R), function(B, W) {
        var Y = B();
        return Y && Y.then ? Y.then(W) : W();
      }(function() {
        return ui(R.arrayBuffer(), function(B) {
          N = B;
        });
      }, function() {
        return Kt(R, N, m.details);
      });
    });
  }), xp = ho(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { format: O = "binary" } = m;
    if (O !== "binary" && O !== "text")
      throw new s({ info: { code: Z.InvalidOutputFormat } }, "Invalid output format: ".concat(O));
    return O === "text" ? Ap(w, f, m) : _p(w, f, m);
  }), Np = (w) => w;
  function Pp(w) {
    return new Wr.XMLBuilder({ attributeNamePrefix: "@_", format: !0, ignoreAttributes: !1, suppressEmptyNode: !0 }).build(Cs({ lockinfo: { "@_xmlns:d": "DAV:", lockscope: { exclusive: {} }, locktype: { write: {} }, owner: { href: w } } }, "d"));
  }
  function Cs(w, f) {
    const m = { ...w };
    for (const O in m)
      m.hasOwnProperty(O) && (m[O] && typeof m[O] == "object" && O.indexOf(":") === -1 ? (m["".concat(f, ":").concat(O)] = Cs(m[O], f), delete m[O]) : /^@_/.test(O) === !1 && (m["".concat(f, ":").concat(O)] = m[O], delete m[O]));
    return m;
  }
  function go(w, f, m) {
    return m ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  function Ls(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (O) {
        return Promise.reject(O);
      }
    };
  }
  const Rp = Ls(function(w, f, m) {
    let O = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const R = Re({ url: E(w.remoteURL, l(f)), method: "UNLOCK", headers: { "Lock-Token": m } }, w, O);
    return go(Ue(R), function(N) {
      if (tt(w, N), N.status !== 204 && N.status !== 200)
        throw Gr(N);
    });
  }), Cp = Ls(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { refreshToken: O, timeout: R = Lp } = m, N = { Accept: "text/plain,application/xml", Timeout: R };
    O && (N.If = O);
    const B = Re({ url: E(w.remoteURL, l(f)), method: "LOCK", headers: N, data: Pp(w.contactHref) }, w, m);
    return go(Ue(B), function(W) {
      return tt(w, W), go(W.text(), function(Y) {
        const Q = (we = Y, new Wr.XMLParser({ removeNSPrefix: !0, parseAttributeValue: !0, parseTagValue: !0 }).parse(we)), J = Rt().get(Q, "prop.lockdiscovery.activelock.locktoken.href"), oe = Rt().get(Q, "prop.lockdiscovery.activelock.timeout");
        var we;
        if (!J)
          throw Gr(W, "No lock token received: ");
        return { token: J, serverTimeout: oe };
      });
    });
  }), Lp = "Infinite, Second-4100000000";
  function vo(w, f, m) {
    return m ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  const Fp = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (O) {
        return Promise.reject(O);
      }
    };
  }(function(w) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const m = f.path || "/", O = Re({ url: E(w.remoteURL, m), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, w, f);
    return vo(Ue(O), function(R) {
      return tt(w, R), vo(R.text(), function(N) {
        return vo(se(N), function(B) {
          const W = function(Y) {
            try {
              const [Q] = Y.multistatus.response, { propstat: { prop: { "quota-used-bytes": J, "quota-available-bytes": oe } } } = Q;
              return J !== void 0 && oe !== void 0 ? { used: parseInt(J, 10), available: ae(oe) } : null;
            } catch {
            }
            return null;
          }(B);
          return Kt(R, W, f.details);
        });
      });
    });
  });
  function mo(w, f, m) {
    return m ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  const kp = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (O) {
        return Promise.reject(O);
      }
    };
  }(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { details: O = !1 } = m, R = Re({ url: E(w.remoteURL, l(f)), method: "SEARCH", headers: { Accept: "text/plain,application/xml", "Content-Type": w.headers["Content-Type"] || "application/xml; charset=utf-8" } }, w, m);
    return mo(Ue(R), function(N) {
      return tt(w, N), mo(N.text(), function(B) {
        return mo(se(B), function(W) {
          const Y = function(Q, J, oe) {
            const we = { truncated: !1, results: [] };
            return we.truncated = Q.multistatus.response.some((Pe) => {
              var ye, ne;
              return ((ye = (Pe.status || ((ne = Pe.propstat) === null || ne === void 0 ? void 0 : ne.status)).split(" ", 3)) === null || ye === void 0 ? void 0 : ye[1]) === "507" && Pe.href.replace(/\/$/, "").endsWith(l(J).replace(/\/$/, ""));
            }), Q.multistatus.response.forEach((Pe) => {
              if (Pe.propstat === void 0)
                return;
              const ye = Pe.href.split("/").map(decodeURIComponent).join("/");
              we.results.push(U(Pe.propstat.prop, ye, oe));
            }), we;
          }(W, f, O);
          return Kt(N, Y, O);
        });
      });
    });
  }), Mp = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (O) {
        return Promise.reject(O);
      }
    };
  }(function(w, f, m) {
    let O = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const R = Re({ url: E(w.remoteURL, l(f)), method: "MOVE", headers: { Destination: E(w.remoteURL, l(m)) } }, w, O);
    return B = function(W) {
      tt(w, W);
    }, (N = Ue(R)) && N.then || (N = Promise.resolve(N)), B ? N.then(B) : N;
    var N, B;
  });
  var Bp = je(172);
  const Up = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (O) {
        return Promise.reject(O);
      }
    };
  }(function(w, f, m) {
    let O = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const { contentLength: R = !0, overwrite: N = !0 } = O, B = { "Content-Type": "application/octet-stream" };
    R === !1 || (B["Content-Length"] = "".concat(typeof R == "number" ? R : function(J) {
      if (_e(J))
        return J.byteLength;
      if (Ie(J))
        return J.length;
      if (typeof J == "string")
        return (0, Bp.d)(J);
      throw new s({ info: { code: Z.DataTypeNoLength } }, "Cannot calculate data length: Invalid type");
    }(m))), N || (B["If-None-Match"] = "*");
    const W = Re({ url: E(w.remoteURL, l(f)), method: "PUT", headers: B, data: m }, w, O);
    return Q = function(J) {
      try {
        tt(w, J);
      } catch (oe) {
        const we = oe;
        if (we.status !== 412 || N)
          throw we;
        return !1;
      }
      return !0;
    }, (Y = Ue(W)) && Y.then || (Y = Promise.resolve(Y)), Q ? Y.then(Q) : Y;
    var Y, Q;
  }), Dp = "https://github.com/perry-mitchell/webdav-client/blob/master/LOCK_CONTACT.md";
  function jp(w) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { authType: m = null, remoteBasePath: O, contactHref: R = Dp, ha1: N, headers: B = {}, httpAgent: W, httpsAgent: Y, password: Q, token: J, username: oe, withCredentials: we } = f;
    let Pe = m;
    Pe || (Pe = oe || Q ? X.Password : X.None);
    const ye = { authType: Pe, remoteBasePath: O, contactHref: R, ha1: N, headers: Object.assign({}, B), httpAgent: W, httpsAgent: Y, password: Q, remotePath: p(w), remoteURL: w, token: J, username: oe, withCredentials: we };
    return function(ne, ie, de, Oe, ge) {
      switch (ne.authType) {
        case X.Digest:
          ne.digest = /* @__PURE__ */ function(ze, ct, Me) {
            return { username: ze, password: ct, ha1: Me, nc: 0, algorithm: "md5", hasDigestAuth: !1 };
          }(ie, de, ge);
          break;
        case X.None:
          break;
        case X.Password:
          ne.headers.Authorization = function(ze, ct) {
            const Me = (Jt = "".concat(ze, ":").concat(ct), x().encode(Jt));
            var Jt;
            return "Basic ".concat(Me);
          }(ie, de);
          break;
        case X.Token:
          ne.headers.Authorization = "".concat((Se = Oe).token_type, " ").concat(Se.access_token);
          break;
        default:
          throw new s({ info: { code: Z.InvalidAuthType } }, "Invalid auth type: ".concat(ne.authType));
      }
      var Se;
    }(ye, oe, Q, J, N), { copyFile: (ne, ie, de) => Gt(ye, ne, ie, de), createDirectory: (ne, ie) => fo(ye, ne, ie), createReadStream: (ne, ie) => function(de, Oe) {
      let ge = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      const Se = new (Rs()).PassThrough();
      return Ep(de, Oe, ge).then((ze) => {
        ze.pipe(Se);
      }).catch((ze) => {
        Se.emit("error", ze);
      }), Se;
    }(ye, ne, ie), createWriteStream: (ne, ie, de) => function(Oe, ge) {
      let Se = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, ze = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Tp;
      const ct = new (Rs()).PassThrough(), Me = {};
      Se.overwrite === !1 && (Me["If-None-Match"] = "*");
      const Jt = Re({ url: E(Oe.remoteURL, l(ge)), method: "PUT", headers: Me, data: ct, maxRedirects: 0 }, Oe, Se);
      return Ue(Jt).then((Ke) => tt(Oe, Ke)).then((Ke) => {
        setTimeout(() => {
          ze(Ke);
        }, 0);
      }).catch((Ke) => {
        ct.emit("error", Ke);
      }), ct;
    }(ye, ne, ie, de), customRequest: (ne, ie) => Op(ye, ne, ie), deleteFile: (ne, ie) => Sp(ye, ne, ie), exists: (ne, ie) => $p(ye, ne, ie), getDirectoryContents: (ne, ie) => Ip(ye, ne, ie), getFileContents: (ne, ie) => xp(ye, ne, ie), getFileDownloadLink: (ne) => function(ie, de) {
      let Oe = E(ie.remoteURL, l(de));
      const ge = /^https:/i.test(Oe) ? "https" : "http";
      switch (ie.authType) {
        case X.None:
          break;
        case X.Password: {
          const Se = F(ie.headers.Authorization.replace(/^Basic /i, "").trim());
          Oe = Oe.replace(/^https?:\/\//, "".concat(ge, "://").concat(Se, "@"));
          break;
        }
        default:
          throw new s({ info: { code: Z.LinkUnsupportedAuthType } }, "Unsupported auth type for file link: ".concat(ie.authType));
      }
      return Oe;
    }(ye, ne), getFileUploadLink: (ne) => function(ie, de) {
      let Oe = "".concat(E(ie.remoteURL, l(de)), "?Content-Type=application/octet-stream");
      const ge = /^https:/i.test(Oe) ? "https" : "http";
      switch (ie.authType) {
        case X.None:
          break;
        case X.Password: {
          const Se = F(ie.headers.Authorization.replace(/^Basic /i, "").trim());
          Oe = Oe.replace(/^https?:\/\//, "".concat(ge, "://").concat(Se, "@"));
          break;
        }
        default:
          throw new s({ info: { code: Z.LinkUnsupportedAuthType } }, "Unsupported auth type for file link: ".concat(ie.authType));
      }
      return Oe;
    }(ye, ne), getHeaders: () => Object.assign({}, ye.headers), getQuota: (ne) => Fp(ye, ne), lock: (ne, ie) => Cp(ye, ne, ie), moveFile: (ne, ie, de) => Mp(ye, ne, ie, de), putFileContents: (ne, ie, de) => Up(ye, ne, ie, de), search: (ne, ie) => kp(ye, ne, ie), setHeaders: (ne) => {
      ye.headers = Object.assign({}, ne);
    }, stat: (ne, ie) => Ye(ye, ne, ie), unlock: (ne, ie, de) => Rp(ye, ne, ie, de) };
  }
})();
zt.hT;
zt.O4;
zt.Kd;
zt.YK;
zt.UU;
zt.Gu;
zt.ky;
zt.h4;
zt.hq;
zt.i5;
/**
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
const wO = (r) => r === null ? ga.getLoggerBuilder().setApp("files").build() : ga.getLoggerBuilder().setApp("files").setUid(r.uid).build(), zl = wO(Xa()), Hl = function(r) {
  if (typeof window._nc_fileactions > "u" && (window._nc_fileactions = [], zl.debug("FileActions initialized")), window._nc_fileactions.find((e) => e.id === r.id)) {
    zl.error(`FileAction ${r.id} already registered`, { action: r });
    return;
  }
  window._nc_fileactions.push(r);
};
/**
 * @copyright Copyright (c) 2022 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var gn = /* @__PURE__ */ ((r) => (r[r.NONE = 0] = "NONE", r[r.CREATE = 4] = "CREATE", r[r.READ = 1] = "READ", r[r.UPDATE = 2] = "UPDATE", r[r.DELETE = 8] = "DELETE", r[r.SHARE = 16] = "SHARE", r[r.ALL = 31] = "ALL", r))(gn || {});
/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Ferdinand Thiessen <opensource@fthiessen.de>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var ac;
`${(ac = Xa()) == null ? void 0 : ac.uid}`;
tp("dav");
var vp = {};
(function(r) {
  const e = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", n = e + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", i = "[" + e + "][" + n + "]*", s = new RegExp("^" + i + "$"), c = function(d, y) {
    const l = [];
    let a = y.exec(d);
    for (; a; ) {
      const v = [];
      v.startIndex = y.lastIndex - a[0].length;
      const p = a.length;
      for (let E = 0; E < p; E++)
        v.push(a[E]);
      l.push(v), a = y.exec(d);
    }
    return l;
  }, g = function(d) {
    const y = s.exec(d);
    return !(y === null || typeof y > "u");
  };
  r.isExist = function(d) {
    return typeof d < "u";
  }, r.isEmptyObject = function(d) {
    return Object.keys(d).length === 0;
  }, r.merge = function(d, y, l) {
    if (y) {
      const a = Object.keys(y), v = a.length;
      for (let p = 0; p < v; p++)
        l === "strict" ? d[a[p]] = [y[a[p]]] : d[a[p]] = y[a[p]];
    }
  }, r.getValue = function(d) {
    return r.isExist(d) ? d : "";
  }, r.isName = g, r.getAllMatches = c, r.nameRegexp = i;
})(vp);
!Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt);
!Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
const bO = vp;
"<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, bO.nameRegexp);
function Xl(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "You are about to visit:") + ""
  ), i, s, c, g, d = (
    /*file*/
    r[0].url + ""
  ), y, l, a;
  return {
    c() {
      e = Fe("p"), i = Tt(n), s = nt(), c = Fe("em"), g = Fe("a"), y = Tt(d), ve(g, "href", l = gt(
        /*file*/
        r[0].url
      )), ve(g, "target", a = /*file*/
      r[0].sameWindow ? "_self" : "_blank"), ve(e, "class", "urldisplay");
    },
    m(v, p) {
      We(v, e, p), Ne(e, i), Ne(e, s), Ne(e, c), Ne(c, g), Ne(g, y);
    },
    p(v, p) {
      p & /*file*/
      1 && d !== (d = /*file*/
      v[0].url + "") && Wa(y, d), p & /*file*/
      1 && l !== (l = gt(
        /*file*/
        v[0].url
      )) && ve(g, "href", l), p & /*file*/
      1 && a !== (a = /*file*/
      v[0].sameWindow ? "_self" : "_blank") && ve(g, "target", a);
    },
    d(v) {
      v && Ge(e);
    }
  };
}
function Yl(r) {
  let e = Ft.userCanEdit() || /*file*/
  r[0].permissions >= gn.UPDATE, n, i, s = (
    /*t*/
    r[2]("files_linkeditor", "Visit link") + ""
  ), c, g, d, y = e && Kl(r);
  return {
    c() {
      y && y.c(), n = nt(), i = Fe("a"), c = Tt(s), ve(i, "href", g = gt(
        /*file*/
        r[0].url
      )), ve(i, "target", d = /*file*/
      r[0].sameWindow ? "_self" : "_blank"), ve(i, "class", "button primary");
    },
    m(l, a) {
      y && y.m(l, a), We(l, n, a), We(l, i, a), Ne(i, c);
    },
    p(l, a) {
      a & /*file*/
      1 && (e = Ft.userCanEdit() || /*file*/
      l[0].permissions >= gn.UPDATE), e ? y ? y.p(l, a) : (y = Kl(l), y.c(), y.m(n.parentNode, n)) : y && (y.d(1), y = null), a & /*file*/
      1 && g !== (g = gt(
        /*file*/
        l[0].url
      )) && ve(i, "href", g), a & /*file*/
      1 && d !== (d = /*file*/
      l[0].sameWindow ? "_self" : "_blank") && ve(i, "target", d);
    },
    d(l) {
      l && (Ge(n), Ge(i)), y && y.d(l);
    }
  };
}
function Kl(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "Edit link") + ""
  ), i, s, c;
  return {
    c() {
      e = Fe("a"), i = Tt(n), ve(e, "href", window.location.href), ve(e, "class", "button");
    },
    m(g, d) {
      We(g, e, d), Ne(e, i), s || (c = gr(e, "click", ln(
        /*click_handler_1*/
        r[4]
      )), s = !0);
    },
    p: ar,
    d(g) {
      g && Ge(e), s = !1, c();
    }
  };
}
function EO(r) {
  let e, n, i = (
    /*file*/
    r[0].name + ""
  ), s, c, g, d, y, l = (
    /*t*/
    r[2]("files_linkeditor", "Cancel") + ""
  ), a, v, p, E, S = !/*loading*/
  r[1] && Xl(r), _ = !/*loading*/
  r[1] && Yl(r);
  return {
    c() {
      e = Fe("div"), n = Fe("h3"), s = Tt(i), c = nt(), S && S.c(), g = nt(), d = Fe("div"), y = Fe("a"), a = Tt(l), v = nt(), _ && _.c(), ve(e, "class", "urledit push-bottom"), ve(y, "href", window.location.href), ve(y, "class", "button"), ve(d, "class", "oc-dialog-buttonrow twobuttons");
    },
    m(P, D) {
      We(P, e, D), Ne(e, n), Ne(n, s), Ne(e, c), S && S.m(e, null), We(P, g, D), We(P, d, D), Ne(d, y), Ne(y, a), Ne(d, v), _ && _.m(d, null), p || (E = gr(y, "click", ln(
        /*click_handler*/
        r[3]
      )), p = !0);
    },
    p(P, D) {
      D & /*file*/
      1 && i !== (i = /*file*/
      P[0].name + "") && Wa(s, i), /*loading*/
      P[1] ? S && (S.d(1), S = null) : S ? S.p(P, D) : (S = Xl(P), S.c(), S.m(e, null)), /*loading*/
      P[1] ? _ && (_.d(1), _ = null) : _ ? _.p(P, D) : (_ = Yl(P), _.c(), _.m(d, null));
    },
    d(P) {
      P && (Ge(e), Ge(g), Ge(d)), S && S.d(), _ && _.d(), p = !1, E();
    }
  };
}
function TO(r) {
  let e, n;
  return e = new pc({
    props: {
      loading: (
        /*loading*/
        r[1]
      ),
      $$slots: { default: [EO] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      Di(e.$$.fragment);
    },
    m(i, s) {
      Wn(e, i, s), n = !0;
    },
    p(i, [s]) {
      const c = {};
      s & /*loading*/
      2 && (c.loading = /*loading*/
      i[1]), s & /*$$scope, file, loading*/
      67 && (c.$$scope = { dirty: s, ctx: i }), e.$set(c);
    },
    i(i) {
      n || (kt(e.$$.fragment, i), n = !0);
    },
    o(i) {
      hr(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Vn(e, i);
    }
  };
}
function OO(r, e, n) {
  let i, s;
  const c = window.t;
  let g;
  Va(() => {
    g = Rr.subscribe(async (l) => {
      if (n(0, i = l), i && i.isLoaded) {
        if (n(1, s = !1), !i.url) {
          OC.dialogs.alert(c("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."), c("files_linkeditor", "A slight problem"));
          return;
        }
        i.skipConfirmation && i.sameWindow && (window.location.href = i.url, sr.update(() => "none"));
      }
    });
  }), qa(() => {
    g();
  });
  const d = () => {
    sr.update(() => "none");
  }, y = () => {
    sr.update(() => "edit");
  };
  return n(0, i = Ft.getFileConfig()), n(1, s = !0), [i, s, c, d, y];
}
class SO extends zn {
  constructor(e) {
    super(), qn(this, e, OO, TO, vn, {});
  }
}
var mp = { exports: {} };
(function(r) {
  var e = function(n) {
    var i = 1e7, s = 7, c = 9007199254740992, g = S(c), d = "0123456789abcdefghijklmnopqrstuvwxyz", y = typeof BigInt == "function";
    function l(b, $, L, M) {
      return typeof b > "u" ? l[0] : typeof $ < "u" ? +$ == 10 && !L ? he(b) : De(b, $, L, M) : he(b);
    }
    function a(b, $) {
      this.value = b, this.sign = $, this.isSmall = !1;
    }
    a.prototype = Object.create(l.prototype);
    function v(b) {
      this.value = b, this.sign = b < 0, this.isSmall = !0;
    }
    v.prototype = Object.create(l.prototype);
    function p(b) {
      this.value = b;
    }
    p.prototype = Object.create(l.prototype);
    function E(b) {
      return -c < b && b < c;
    }
    function S(b) {
      return b < 1e7 ? [b] : b < 1e14 ? [b % 1e7, Math.floor(b / 1e7)] : [b % 1e7, Math.floor(b / 1e7) % 1e7, Math.floor(b / 1e14)];
    }
    function _(b) {
      P(b);
      var $ = b.length;
      if ($ < 4 && ke(b, g) < 0)
        switch ($) {
          case 0:
            return 0;
          case 1:
            return b[0];
          case 2:
            return b[0] + b[1] * i;
          default:
            return b[0] + (b[1] + b[2] * i) * i;
        }
      return b;
    }
    function P(b) {
      for (var $ = b.length; b[--$] === 0; )
        ;
      b.length = $ + 1;
    }
    function D(b) {
      for (var $ = new Array(b), L = -1; ++L < b; )
        $[L] = 0;
      return $;
    }
    function I(b) {
      return b > 0 ? Math.floor(b) : Math.ceil(b);
    }
    function x(b, $) {
      var L = b.length, M = $.length, h = new Array(L), o = 0, u = i, T, A;
      for (A = 0; A < M; A++)
        T = b[A] + $[A] + o, o = T >= u ? 1 : 0, h[A] = T - o * u;
      for (; A < L; )
        T = b[A] + o, o = T === u ? 1 : 0, h[A++] = T - o * u;
      return o > 0 && h.push(o), h;
    }
    function F(b, $) {
      return b.length >= $.length ? x(b, $) : x($, b);
    }
    function C(b, $) {
      var L = b.length, M = new Array(L), h = i, o, u;
      for (u = 0; u < L; u++)
        o = b[u] - h + $, $ = Math.floor(o / h), M[u] = o - $ * h, $ += 1;
      for (; $ > 0; )
        M[u++] = $ % h, $ = Math.floor($ / h);
      return M;
    }
    a.prototype.add = function(b) {
      var $ = he(b);
      if (this.sign !== $.sign)
        return this.subtract($.negate());
      var L = this.value, M = $.value;
      return $.isSmall ? new a(C(L, Math.abs(M)), this.sign) : new a(F(L, M), this.sign);
    }, a.prototype.plus = a.prototype.add, v.prototype.add = function(b) {
      var $ = he(b), L = this.value;
      if (L < 0 !== $.sign)
        return this.subtract($.negate());
      var M = $.value;
      if ($.isSmall) {
        if (E(L + M))
          return new v(L + M);
        M = S(Math.abs(M));
      }
      return new a(C(M, Math.abs(L)), L < 0);
    }, v.prototype.plus = v.prototype.add, p.prototype.add = function(b) {
      return new p(this.value + he(b).value);
    }, p.prototype.plus = p.prototype.add;
    function z(b, $) {
      var L = b.length, M = $.length, h = new Array(L), o = 0, u = i, T, A;
      for (T = 0; T < M; T++)
        A = b[T] - o - $[T], A < 0 ? (A += u, o = 1) : o = 0, h[T] = A;
      for (T = M; T < L; T++) {
        if (A = b[T] - o, A < 0)
          A += u;
        else {
          h[T++] = A;
          break;
        }
        h[T] = A;
      }
      for (; T < L; T++)
        h[T] = b[T];
      return P(h), h;
    }
    function q(b, $, L) {
      var M;
      return ke(b, $) >= 0 ? M = z(b, $) : (M = z($, b), L = !L), M = _(M), typeof M == "number" ? (L && (M = -M), new v(M)) : new a(M, L);
    }
    function G(b, $, L) {
      var M = b.length, h = new Array(M), o = -$, u = i, T, A;
      for (T = 0; T < M; T++)
        A = b[T] + o, o = Math.floor(A / u), A %= u, h[T] = A < 0 ? A + u : A;
      return h = _(h), typeof h == "number" ? (L && (h = -h), new v(h)) : new a(h, L);
    }
    a.prototype.subtract = function(b) {
      var $ = he(b);
      if (this.sign !== $.sign)
        return this.add($.negate());
      var L = this.value, M = $.value;
      return $.isSmall ? G(L, Math.abs(M), this.sign) : q(L, M, this.sign);
    }, a.prototype.minus = a.prototype.subtract, v.prototype.subtract = function(b) {
      var $ = he(b), L = this.value;
      if (L < 0 !== $.sign)
        return this.add($.negate());
      var M = $.value;
      return $.isSmall ? new v(L - M) : G(M, Math.abs(L), L >= 0);
    }, v.prototype.minus = v.prototype.subtract, p.prototype.subtract = function(b) {
      return new p(this.value - he(b).value);
    }, p.prototype.minus = p.prototype.subtract, a.prototype.negate = function() {
      return new a(this.value, !this.sign);
    }, v.prototype.negate = function() {
      var b = this.sign, $ = new v(-this.value);
      return $.sign = !b, $;
    }, p.prototype.negate = function() {
      return new p(-this.value);
    }, a.prototype.abs = function() {
      return new a(this.value, !1);
    }, v.prototype.abs = function() {
      return new v(Math.abs(this.value));
    }, p.prototype.abs = function() {
      return new p(this.value >= 0 ? this.value : -this.value);
    };
    function X(b, $) {
      var L = b.length, M = $.length, h = L + M, o = D(h), u = i, T, A, k, j, te;
      for (k = 0; k < L; ++k) {
        j = b[k];
        for (var le = 0; le < M; ++le)
          te = $[le], T = j * te + o[k + le], A = Math.floor(T / u), o[k + le] = T - A * u, o[k + le + 1] += A;
      }
      return P(o), o;
    }
    function Z(b, $) {
      var L = b.length, M = new Array(L), h = i, o = 0, u, T;
      for (T = 0; T < L; T++)
        u = b[T] * $ + o, o = Math.floor(u / h), M[T] = u - o * h;
      for (; o > 0; )
        M[T++] = o % h, o = Math.floor(o / h);
      return M;
    }
    function H(b, $) {
      for (var L = []; $-- > 0; )
        L.push(0);
      return L.concat(b);
    }
    function K(b, $) {
      var L = Math.max(b.length, $.length);
      if (L <= 30)
        return X(b, $);
      L = Math.ceil(L / 2);
      var M = b.slice(L), h = b.slice(0, L), o = $.slice(L), u = $.slice(0, L), T = K(h, u), A = K(M, o), k = K(F(h, M), F(u, o)), j = F(F(T, H(z(z(k, T), A), L)), H(A, 2 * L));
      return P(j), j;
    }
    function V(b, $) {
      return -0.012 * b - 0.012 * $ + 15e-6 * b * $ > 0;
    }
    a.prototype.multiply = function(b) {
      var $ = he(b), L = this.value, M = $.value, h = this.sign !== $.sign, o;
      if ($.isSmall) {
        if (M === 0)
          return l[0];
        if (M === 1)
          return this;
        if (M === -1)
          return this.negate();
        if (o = Math.abs(M), o < i)
          return new a(Z(L, o), h);
        M = S(o);
      }
      return V(L.length, M.length) ? new a(K(L, M), h) : new a(X(L, M), h);
    }, a.prototype.times = a.prototype.multiply;
    function re(b, $, L) {
      return b < i ? new a(Z($, b), L) : new a(X($, S(b)), L);
    }
    v.prototype._multiplyBySmall = function(b) {
      return E(b.value * this.value) ? new v(b.value * this.value) : re(Math.abs(b.value), S(Math.abs(this.value)), this.sign !== b.sign);
    }, a.prototype._multiplyBySmall = function(b) {
      return b.value === 0 ? l[0] : b.value === 1 ? this : b.value === -1 ? this.negate() : re(Math.abs(b.value), this.value, this.sign !== b.sign);
    }, v.prototype.multiply = function(b) {
      return he(b)._multiplyBySmall(this);
    }, v.prototype.times = v.prototype.multiply, p.prototype.multiply = function(b) {
      return new p(this.value * he(b).value);
    }, p.prototype.times = p.prototype.multiply;
    function pe(b) {
      var $ = b.length, L = D($ + $), M = i, h, o, u, T, A;
      for (u = 0; u < $; u++) {
        T = b[u], o = 0 - T * T;
        for (var k = u; k < $; k++)
          A = b[k], h = 2 * (T * A) + L[u + k] + o, o = Math.floor(h / M), L[u + k] = h - o * M;
        L[u + $] = o;
      }
      return P(L), L;
    }
    a.prototype.square = function() {
      return new a(pe(this.value), !1);
    }, v.prototype.square = function() {
      var b = this.value * this.value;
      return E(b) ? new v(b) : new a(pe(S(Math.abs(this.value))), !1);
    }, p.prototype.square = function(b) {
      return new p(this.value * this.value);
    };
    function Ae(b, $) {
      var L = b.length, M = $.length, h = i, o = D($.length), u = $[M - 1], T = Math.ceil(h / (2 * u)), A = Z(b, T), k = Z($, T), j, te, le, ue, fe, xe, Xt;
      for (A.length <= L && A.push(0), k.push(0), u = k[M - 1], te = L - M; te >= 0; te--) {
        for (j = h - 1, A[te + M] !== u && (j = Math.floor((A[te + M] * h + A[te + M - 1]) / u)), le = 0, ue = 0, xe = k.length, fe = 0; fe < xe; fe++)
          le += j * k[fe], Xt = Math.floor(le / h), ue += A[te + fe] - (le - Xt * h), le = Xt, ue < 0 ? (A[te + fe] = ue + h, ue = -1) : (A[te + fe] = ue, ue = 0);
        for (; ue !== 0; ) {
          for (j -= 1, le = 0, fe = 0; fe < xe; fe++)
            le += A[te + fe] - h + k[fe], le < 0 ? (A[te + fe] = le + h, le = 0) : (A[te + fe] = le, le = 1);
          ue += le;
        }
        o[te] = j;
      }
      return A = Ee(A, T)[0], [_(o), _(A)];
    }
    function ce(b, $) {
      for (var L = b.length, M = $.length, h = [], o = [], u = i, T, A, k, j, te; L; ) {
        if (o.unshift(b[--L]), P(o), ke(o, $) < 0) {
          h.push(0);
          continue;
        }
        A = o.length, k = o[A - 1] * u + o[A - 2], j = $[M - 1] * u + $[M - 2], A > M && (k = (k + 1) * u), T = Math.ceil(k / j);
        do {
          if (te = Z($, T), ke(te, o) <= 0)
            break;
          T--;
        } while (T);
        h.push(T), o = z(o, te);
      }
      return h.reverse(), [_(h), _(o)];
    }
    function Ee(b, $) {
      var L = b.length, M = D(L), h = i, o, u, T, A;
      for (T = 0, o = L - 1; o >= 0; --o)
        A = T * h + b[o], u = I(A / $), T = A - u * $, M[o] = u | 0;
      return [M, T | 0];
    }
    function me(b, $) {
      var L, M = he($);
      if (y)
        return [new p(b.value / M.value), new p(b.value % M.value)];
      var h = b.value, o = M.value, u;
      if (o === 0)
        throw new Error("Cannot divide by zero");
      if (b.isSmall)
        return M.isSmall ? [new v(I(h / o)), new v(h % o)] : [l[0], b];
      if (M.isSmall) {
        if (o === 1)
          return [b, l[0]];
        if (o == -1)
          return [b.negate(), l[0]];
        var T = Math.abs(o);
        if (T < i) {
          L = Ee(h, T), u = _(L[0]);
          var A = L[1];
          return b.sign && (A = -A), typeof u == "number" ? (b.sign !== M.sign && (u = -u), [new v(u), new v(A)]) : [new a(u, b.sign !== M.sign), new v(A)];
        }
        o = S(T);
      }
      var k = ke(h, o);
      if (k === -1)
        return [l[0], b];
      if (k === 0)
        return [l[b.sign === M.sign ? 1 : -1], l[0]];
      h.length + o.length <= 200 ? L = Ae(h, o) : L = ce(h, o), u = L[0];
      var j = b.sign !== M.sign, te = L[1], le = b.sign;
      return typeof u == "number" ? (j && (u = -u), u = new v(u)) : u = new a(u, j), typeof te == "number" ? (le && (te = -te), te = new v(te)) : te = new a(te, le), [u, te];
    }
    a.prototype.divmod = function(b) {
      var $ = me(this, b);
      return {
        quotient: $[0],
        remainder: $[1]
      };
    }, p.prototype.divmod = v.prototype.divmod = a.prototype.divmod, a.prototype.divide = function(b) {
      return me(this, b)[0];
    }, p.prototype.over = p.prototype.divide = function(b) {
      return new p(this.value / he(b).value);
    }, v.prototype.over = v.prototype.divide = a.prototype.over = a.prototype.divide, a.prototype.mod = function(b) {
      return me(this, b)[1];
    }, p.prototype.mod = p.prototype.remainder = function(b) {
      return new p(this.value % he(b).value);
    }, v.prototype.remainder = v.prototype.mod = a.prototype.remainder = a.prototype.mod, a.prototype.pow = function(b) {
      var $ = he(b), L = this.value, M = $.value, h, o, u;
      if (M === 0)
        return l[1];
      if (L === 0)
        return l[0];
      if (L === 1)
        return l[1];
      if (L === -1)
        return $.isEven() ? l[1] : l[-1];
      if ($.sign)
        return l[0];
      if (!$.isSmall)
        throw new Error("The exponent " + $.toString() + " is too large.");
      if (this.isSmall && E(h = Math.pow(L, M)))
        return new v(I(h));
      for (o = this, u = l[1]; M & !0 && (u = u.times(o), --M), M !== 0; )
        M /= 2, o = o.square();
      return u;
    }, v.prototype.pow = a.prototype.pow, p.prototype.pow = function(b) {
      var $ = he(b), L = this.value, M = $.value, h = BigInt(0), o = BigInt(1), u = BigInt(2);
      if (M === h)
        return l[1];
      if (L === h)
        return l[0];
      if (L === o)
        return l[1];
      if (L === BigInt(-1))
        return $.isEven() ? l[1] : l[-1];
      if ($.isNegative())
        return new p(h);
      for (var T = this, A = l[1]; (M & o) === o && (A = A.times(T), --M), M !== h; )
        M /= u, T = T.square();
      return A;
    }, a.prototype.modPow = function(b, $) {
      if (b = he(b), $ = he($), $.isZero())
        throw new Error("Cannot take modPow with modulus 0");
      var L = l[1], M = this.mod($);
      for (b.isNegative() && (b = b.multiply(l[-1]), M = M.modInv($)); b.isPositive(); ) {
        if (M.isZero())
          return l[0];
        b.isOdd() && (L = L.multiply(M).mod($)), b = b.divide(2), M = M.square().mod($);
      }
      return L;
    }, p.prototype.modPow = v.prototype.modPow = a.prototype.modPow;
    function ke(b, $) {
      if (b.length !== $.length)
        return b.length > $.length ? 1 : -1;
      for (var L = b.length - 1; L >= 0; L--)
        if (b[L] !== $[L])
          return b[L] > $[L] ? 1 : -1;
      return 0;
    }
    a.prototype.compareAbs = function(b) {
      var $ = he(b), L = this.value, M = $.value;
      return $.isSmall ? 1 : ke(L, M);
    }, v.prototype.compareAbs = function(b) {
      var $ = he(b), L = Math.abs(this.value), M = $.value;
      return $.isSmall ? (M = Math.abs(M), L === M ? 0 : L > M ? 1 : -1) : -1;
    }, p.prototype.compareAbs = function(b) {
      var $ = this.value, L = he(b).value;
      return $ = $ >= 0 ? $ : -$, L = L >= 0 ? L : -L, $ === L ? 0 : $ > L ? 1 : -1;
    }, a.prototype.compare = function(b) {
      if (b === 1 / 0)
        return -1;
      if (b === -1 / 0)
        return 1;
      var $ = he(b), L = this.value, M = $.value;
      return this.sign !== $.sign ? $.sign ? 1 : -1 : $.isSmall ? this.sign ? -1 : 1 : ke(L, M) * (this.sign ? -1 : 1);
    }, a.prototype.compareTo = a.prototype.compare, v.prototype.compare = function(b) {
      if (b === 1 / 0)
        return -1;
      if (b === -1 / 0)
        return 1;
      var $ = he(b), L = this.value, M = $.value;
      return $.isSmall ? L == M ? 0 : L > M ? 1 : -1 : L < 0 !== $.sign ? L < 0 ? -1 : 1 : L < 0 ? 1 : -1;
    }, v.prototype.compareTo = v.prototype.compare, p.prototype.compare = function(b) {
      if (b === 1 / 0)
        return -1;
      if (b === -1 / 0)
        return 1;
      var $ = this.value, L = he(b).value;
      return $ === L ? 0 : $ > L ? 1 : -1;
    }, p.prototype.compareTo = p.prototype.compare, a.prototype.equals = function(b) {
      return this.compare(b) === 0;
    }, p.prototype.eq = p.prototype.equals = v.prototype.eq = v.prototype.equals = a.prototype.eq = a.prototype.equals, a.prototype.notEquals = function(b) {
      return this.compare(b) !== 0;
    }, p.prototype.neq = p.prototype.notEquals = v.prototype.neq = v.prototype.notEquals = a.prototype.neq = a.prototype.notEquals, a.prototype.greater = function(b) {
      return this.compare(b) > 0;
    }, p.prototype.gt = p.prototype.greater = v.prototype.gt = v.prototype.greater = a.prototype.gt = a.prototype.greater, a.prototype.lesser = function(b) {
      return this.compare(b) < 0;
    }, p.prototype.lt = p.prototype.lesser = v.prototype.lt = v.prototype.lesser = a.prototype.lt = a.prototype.lesser, a.prototype.greaterOrEquals = function(b) {
      return this.compare(b) >= 0;
    }, p.prototype.geq = p.prototype.greaterOrEquals = v.prototype.geq = v.prototype.greaterOrEquals = a.prototype.geq = a.prototype.greaterOrEquals, a.prototype.lesserOrEquals = function(b) {
      return this.compare(b) <= 0;
    }, p.prototype.leq = p.prototype.lesserOrEquals = v.prototype.leq = v.prototype.lesserOrEquals = a.prototype.leq = a.prototype.lesserOrEquals, a.prototype.isEven = function() {
      return (this.value[0] & 1) === 0;
    }, v.prototype.isEven = function() {
      return (this.value & 1) === 0;
    }, p.prototype.isEven = function() {
      return (this.value & BigInt(1)) === BigInt(0);
    }, a.prototype.isOdd = function() {
      return (this.value[0] & 1) === 1;
    }, v.prototype.isOdd = function() {
      return (this.value & 1) === 1;
    }, p.prototype.isOdd = function() {
      return (this.value & BigInt(1)) === BigInt(1);
    }, a.prototype.isPositive = function() {
      return !this.sign;
    }, v.prototype.isPositive = function() {
      return this.value > 0;
    }, p.prototype.isPositive = v.prototype.isPositive, a.prototype.isNegative = function() {
      return this.sign;
    }, v.prototype.isNegative = function() {
      return this.value < 0;
    }, p.prototype.isNegative = v.prototype.isNegative, a.prototype.isUnit = function() {
      return !1;
    }, v.prototype.isUnit = function() {
      return Math.abs(this.value) === 1;
    }, p.prototype.isUnit = function() {
      return this.abs().value === BigInt(1);
    }, a.prototype.isZero = function() {
      return !1;
    }, v.prototype.isZero = function() {
      return this.value === 0;
    }, p.prototype.isZero = function() {
      return this.value === BigInt(0);
    }, a.prototype.isDivisibleBy = function(b) {
      var $ = he(b);
      return $.isZero() ? !1 : $.isUnit() ? !0 : $.compareAbs(2) === 0 ? this.isEven() : this.mod($).isZero();
    }, p.prototype.isDivisibleBy = v.prototype.isDivisibleBy = a.prototype.isDivisibleBy;
    function $e(b) {
      var $ = b.abs();
      if ($.isUnit())
        return !1;
      if ($.equals(2) || $.equals(3) || $.equals(5))
        return !0;
      if ($.isEven() || $.isDivisibleBy(3) || $.isDivisibleBy(5))
        return !1;
      if ($.lesser(49))
        return !0;
    }
    function Ze(b, $) {
      for (var L = b.prev(), M = L, h = 0, o, u, T; M.isEven(); )
        M = M.divide(2), h++;
      e:
        for (u = 0; u < $.length; u++)
          if (!b.lesser($[u]) && (T = e($[u]).modPow(M, b), !(T.isUnit() || T.equals(L)))) {
            for (o = h - 1; o != 0; o--) {
              if (T = T.square().mod(b), T.isUnit())
                return !1;
              if (T.equals(L))
                continue e;
            }
            return !1;
          }
      return !0;
    }
    a.prototype.isPrime = function(b) {
      var $ = $e(this);
      if ($ !== n)
        return $;
      var L = this.abs(), M = L.bitLength();
      if (M <= 64)
        return Ze(L, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
      for (var h = Math.log(2) * M.toJSNumber(), o = Math.ceil(b === !0 ? 2 * Math.pow(h, 2) : h), u = [], T = 0; T < o; T++)
        u.push(e(T + 2));
      return Ze(L, u);
    }, p.prototype.isPrime = v.prototype.isPrime = a.prototype.isPrime, a.prototype.isProbablePrime = function(b, $) {
      var L = $e(this);
      if (L !== n)
        return L;
      for (var M = this.abs(), h = b === n ? 5 : b, o = [], u = 0; u < h; u++)
        o.push(e.randBetween(2, M.minus(2), $));
      return Ze(M, o);
    }, p.prototype.isProbablePrime = v.prototype.isProbablePrime = a.prototype.isProbablePrime, a.prototype.modInv = function(b) {
      for (var $ = e.zero, L = e.one, M = he(b), h = this.abs(), o, u, T; !h.isZero(); )
        o = M.divide(h), u = $, T = M, $ = L, M = h, L = u.subtract(o.multiply(L)), h = T.subtract(o.multiply(h));
      if (!M.isUnit())
        throw new Error(this.toString() + " and " + b.toString() + " are not co-prime");
      return $.compare(0) === -1 && ($ = $.add(b)), this.isNegative() ? $.negate() : $;
    }, p.prototype.modInv = v.prototype.modInv = a.prototype.modInv, a.prototype.next = function() {
      var b = this.value;
      return this.sign ? G(b, 1, this.sign) : new a(C(b, 1), this.sign);
    }, v.prototype.next = function() {
      var b = this.value;
      return b + 1 < c ? new v(b + 1) : new a(g, !1);
    }, p.prototype.next = function() {
      return new p(this.value + BigInt(1));
    }, a.prototype.prev = function() {
      var b = this.value;
      return this.sign ? new a(C(b, 1), !0) : G(b, 1, this.sign);
    }, v.prototype.prev = function() {
      var b = this.value;
      return b - 1 > -c ? new v(b - 1) : new a(g, !0);
    }, p.prototype.prev = function() {
      return new p(this.value - BigInt(1));
    };
    for (var Te = [1]; 2 * Te[Te.length - 1] <= i; )
      Te.push(2 * Te[Te.length - 1]);
    var _e = Te.length, Ie = Te[_e - 1];
    function St(b) {
      return Math.abs(b) <= i;
    }
    a.prototype.shiftLeft = function(b) {
      var $ = he(b).toJSNumber();
      if (!St($))
        throw new Error(String($) + " is too large for shifting.");
      if ($ < 0)
        return this.shiftRight(-$);
      var L = this;
      if (L.isZero())
        return L;
      for (; $ >= _e; )
        L = L.multiply(Ie), $ -= _e - 1;
      return L.multiply(Te[$]);
    }, p.prototype.shiftLeft = v.prototype.shiftLeft = a.prototype.shiftLeft, a.prototype.shiftRight = function(b) {
      var $, L = he(b).toJSNumber();
      if (!St(L))
        throw new Error(String(L) + " is too large for shifting.");
      if (L < 0)
        return this.shiftLeft(-L);
      for (var M = this; L >= _e; ) {
        if (M.isZero() || M.isNegative() && M.isUnit())
          return M;
        $ = me(M, Ie), M = $[1].isNegative() ? $[0].prev() : $[0], L -= _e - 1;
      }
      return $ = me(M, Te[L]), $[1].isNegative() ? $[0].prev() : $[0];
    }, p.prototype.shiftRight = v.prototype.shiftRight = a.prototype.shiftRight;
    function wt(b, $, L) {
      $ = he($);
      for (var M = b.isNegative(), h = $.isNegative(), o = M ? b.not() : b, u = h ? $.not() : $, T = 0, A = 0, k = null, j = null, te = []; !o.isZero() || !u.isZero(); )
        k = me(o, Ie), T = k[1].toJSNumber(), M && (T = Ie - 1 - T), j = me(u, Ie), A = j[1].toJSNumber(), h && (A = Ie - 1 - A), o = k[0], u = j[0], te.push(L(T, A));
      for (var le = L(M ? 1 : 0, h ? 1 : 0) !== 0 ? e(-1) : e(0), ue = te.length - 1; ue >= 0; ue -= 1)
        le = le.multiply(Ie).add(e(te[ue]));
      return le;
    }
    a.prototype.not = function() {
      return this.negate().prev();
    }, p.prototype.not = v.prototype.not = a.prototype.not, a.prototype.and = function(b) {
      return wt(this, b, function($, L) {
        return $ & L;
      });
    }, p.prototype.and = v.prototype.and = a.prototype.and, a.prototype.or = function(b) {
      return wt(this, b, function($, L) {
        return $ | L;
      });
    }, p.prototype.or = v.prototype.or = a.prototype.or, a.prototype.xor = function(b) {
      return wt(this, b, function($, L) {
        return $ ^ L;
      });
    }, p.prototype.xor = v.prototype.xor = a.prototype.xor;
    var Ue = 1 << 30, Ht = (i & -i) * (i & -i) | Ue;
    function Re(b) {
      var $ = b.value, L = typeof $ == "number" ? $ | Ue : typeof $ == "bigint" ? $ | BigInt(Ue) : $[0] + $[1] * i | Ht;
      return L & -L;
    }
    function Je(b, $) {
      if ($.compareTo(b) <= 0) {
        var L = Je(b, $.square($)), M = L.p, h = L.e, o = M.multiply($);
        return o.compareTo(b) <= 0 ? { p: o, e: h * 2 + 1 } : { p: M, e: h * 2 };
      }
      return { p: e(1), e: 0 };
    }
    a.prototype.bitLength = function() {
      var b = this;
      return b.compareTo(e(0)) < 0 && (b = b.negate().subtract(e(1))), b.compareTo(e(0)) === 0 ? e(0) : e(Je(b, e(2)).e).add(e(1));
    }, p.prototype.bitLength = v.prototype.bitLength = a.prototype.bitLength;
    function Nt(b, $) {
      return b = he(b), $ = he($), b.greater($) ? b : $;
    }
    function ut(b, $) {
      return b = he(b), $ = he($), b.lesser($) ? b : $;
    }
    function bt(b, $) {
      if (b = he(b).abs(), $ = he($).abs(), b.equals($))
        return b;
      if (b.isZero())
        return $;
      if ($.isZero())
        return b;
      for (var L = l[1], M, h; b.isEven() && $.isEven(); )
        M = ut(Re(b), Re($)), b = b.divide(M), $ = $.divide(M), L = L.multiply(M);
      for (; b.isEven(); )
        b = b.divide(Re(b));
      do {
        for (; $.isEven(); )
          $ = $.divide(Re($));
        b.greater($) && (h = $, $ = b, b = h), $ = $.subtract(b);
      } while (!$.isZero());
      return L.isUnit() ? b : b.multiply(L);
    }
    function jt(b, $) {
      return b = he(b).abs(), $ = he($).abs(), b.divide(bt(b, $)).multiply($);
    }
    function Ce(b, $, L) {
      b = he(b), $ = he($);
      var M = L || Math.random, h = ut(b, $), o = Nt(b, $), u = o.subtract(h).add(1);
      if (u.isSmall)
        return h.add(Math.floor(M() * u));
      for (var T = pt(u, i).value, A = [], k = !0, j = 0; j < T.length; j++) {
        var te = k ? T[j] + (j + 1 < T.length ? T[j + 1] / i : 0) : i, le = I(M() * te);
        A.push(le), le < T[j] && (k = !1);
      }
      return h.add(l.fromArray(A, i, !1));
    }
    var De = function(b, $, L, M) {
      L = L || d, b = String(b), M || (b = b.toLowerCase(), L = L.toLowerCase());
      var h = b.length, o, u = Math.abs($), T = {};
      for (o = 0; o < L.length; o++)
        T[L[o]] = o;
      for (o = 0; o < h; o++) {
        var A = b[o];
        if (A !== "-" && A in T && T[A] >= u) {
          if (A === "1" && u === 1)
            continue;
          throw new Error(A + " is not a valid digit in base " + $ + ".");
        }
      }
      $ = he($);
      var k = [], j = b[0] === "-";
      for (o = j ? 1 : 0; o < b.length; o++) {
        var A = b[o];
        if (A in T)
          k.push(he(T[A]));
        else if (A === "<") {
          var te = o;
          do
            o++;
          while (b[o] !== ">" && o < b.length);
          k.push(he(b.slice(te + 1, o)));
        } else
          throw new Error(A + " is not a valid character");
      }
      return cr(k, $, j);
    };
    function cr(b, $, L) {
      var M = l[0], h = l[1], o;
      for (o = b.length - 1; o >= 0; o--)
        M = M.add(b[o].times(h)), h = h.times($);
      return L ? M.negate() : M;
    }
    function $r(b, $) {
      return $ = $ || d, b < $.length ? $[b] : "<" + b + ">";
    }
    function pt(b, $) {
      if ($ = e($), $.isZero()) {
        if (b.isZero())
          return { value: [0], isNegative: !1 };
        throw new Error("Cannot convert nonzero numbers to base 0.");
      }
      if ($.equals(-1)) {
        if (b.isZero())
          return { value: [0], isNegative: !1 };
        if (b.isNegative())
          return {
            value: [].concat.apply(
              [],
              Array.apply(null, Array(-b.toJSNumber())).map(Array.prototype.valueOf, [1, 0])
            ),
            isNegative: !1
          };
        var L = Array.apply(null, Array(b.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
        return L.unshift([1]), {
          value: [].concat.apply([], L),
          isNegative: !1
        };
      }
      var M = !1;
      if (b.isNegative() && $.isPositive() && (M = !0, b = b.abs()), $.isUnit())
        return b.isZero() ? { value: [0], isNegative: !1 } : {
          value: Array.apply(null, Array(b.toJSNumber())).map(Number.prototype.valueOf, 1),
          isNegative: M
        };
      for (var h = [], o = b, u; o.isNegative() || o.compareAbs($) >= 0; ) {
        u = o.divmod($), o = u.quotient;
        var T = u.remainder;
        T.isNegative() && (T = $.minus(T).abs(), o = o.next()), h.push(T.toJSNumber());
      }
      return h.push(o.toJSNumber()), { value: h.reverse(), isNegative: M };
    }
    function Pt(b, $, L) {
      var M = pt(b, $);
      return (M.isNegative ? "-" : "") + M.value.map(function(h) {
        return $r(h, L);
      }).join("");
    }
    a.prototype.toArray = function(b) {
      return pt(this, b);
    }, v.prototype.toArray = function(b) {
      return pt(this, b);
    }, p.prototype.toArray = function(b) {
      return pt(this, b);
    }, a.prototype.toString = function(b, $) {
      if (b === n && (b = 10), b !== 10)
        return Pt(this, b, $);
      for (var L = this.value, M = L.length, h = String(L[--M]), o = "0000000", u; --M >= 0; )
        u = String(L[M]), h += o.slice(u.length) + u;
      var T = this.sign ? "-" : "";
      return T + h;
    }, v.prototype.toString = function(b, $) {
      return b === n && (b = 10), b != 10 ? Pt(this, b, $) : String(this.value);
    }, p.prototype.toString = v.prototype.toString, p.prototype.toJSON = a.prototype.toJSON = v.prototype.toJSON = function() {
      return this.toString();
    }, a.prototype.valueOf = function() {
      return parseInt(this.toString(), 10);
    }, a.prototype.toJSNumber = a.prototype.valueOf, v.prototype.valueOf = function() {
      return this.value;
    }, v.prototype.toJSNumber = v.prototype.valueOf, p.prototype.valueOf = p.prototype.toJSNumber = function() {
      return parseInt(this.toString(), 10);
    };
    function $t(b) {
      if (E(+b)) {
        var $ = +b;
        if ($ === I($))
          return y ? new p(BigInt($)) : new v($);
        throw new Error("Invalid integer: " + b);
      }
      var L = b[0] === "-";
      L && (b = b.slice(1));
      var M = b.split(/e/i);
      if (M.length > 2)
        throw new Error("Invalid integer: " + M.join("e"));
      if (M.length === 2) {
        var h = M[1];
        if (h[0] === "+" && (h = h.slice(1)), h = +h, h !== I(h) || !E(h))
          throw new Error("Invalid integer: " + h + " is not a valid exponent.");
        var o = M[0], u = o.indexOf(".");
        if (u >= 0 && (h -= o.length - u - 1, o = o.slice(0, u) + o.slice(u + 1)), h < 0)
          throw new Error("Cannot include negative exponent part for integers");
        o += new Array(h + 1).join("0"), b = o;
      }
      var T = /^([0-9][0-9]*)$/.test(b);
      if (!T)
        throw new Error("Invalid integer: " + b);
      if (y)
        return new p(BigInt(L ? "-" + b : b));
      for (var A = [], k = b.length, j = s, te = k - j; k > 0; )
        A.push(+b.slice(te, k)), te -= j, te < 0 && (te = 0), k -= j;
      return P(A), new a(A, L);
    }
    function It(b) {
      if (y)
        return new p(BigInt(b));
      if (E(b)) {
        if (b !== I(b))
          throw new Error(b + " is not an integer.");
        return new v(b);
      }
      return $t(b.toString());
    }
    function he(b) {
      return typeof b == "number" ? It(b) : typeof b == "string" ? $t(b) : typeof b == "bigint" ? new p(b) : b;
    }
    for (var qe = 0; qe < 1e3; qe++)
      l[qe] = he(qe), qe > 0 && (l[-qe] = he(-qe));
    return l.one = l[1], l.zero = l[0], l.minusOne = l[-1], l.max = Nt, l.min = ut, l.gcd = bt, l.lcm = jt, l.isInstance = function(b) {
      return b instanceof a || b instanceof v || b instanceof p;
    }, l.randBetween = Ce, l.fromArray = function(b, $, L) {
      return cr(b.map(he), he($ || 10), L);
    }, l;
  }();
  r.hasOwnProperty("exports") && (r.exports = e);
})(mp);
var $O = mp.exports;
const IO = /* @__PURE__ */ za($O);
var yp = {}, lo = {};
lo.byteLength = xO;
lo.toByteArray = PO;
lo.fromByteArray = LO;
var or = [], Lt = [], AO = typeof Uint8Array < "u" ? Uint8Array : Array, ua = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var tn = 0, _O = ua.length; tn < _O; ++tn)
  or[tn] = ua[tn], Lt[ua.charCodeAt(tn)] = tn;
Lt[45] = 62;
Lt[95] = 63;
function wp(r) {
  var e = r.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = r.indexOf("=");
  n === -1 && (n = e);
  var i = n === e ? 0 : 4 - n % 4;
  return [n, i];
}
function xO(r) {
  var e = wp(r), n = e[0], i = e[1];
  return (n + i) * 3 / 4 - i;
}
function NO(r, e, n) {
  return (e + n) * 3 / 4 - n;
}
function PO(r) {
  var e, n = wp(r), i = n[0], s = n[1], c = new AO(NO(r, i, s)), g = 0, d = s > 0 ? i - 4 : i, y;
  for (y = 0; y < d; y += 4)
    e = Lt[r.charCodeAt(y)] << 18 | Lt[r.charCodeAt(y + 1)] << 12 | Lt[r.charCodeAt(y + 2)] << 6 | Lt[r.charCodeAt(y + 3)], c[g++] = e >> 16 & 255, c[g++] = e >> 8 & 255, c[g++] = e & 255;
  return s === 2 && (e = Lt[r.charCodeAt(y)] << 2 | Lt[r.charCodeAt(y + 1)] >> 4, c[g++] = e & 255), s === 1 && (e = Lt[r.charCodeAt(y)] << 10 | Lt[r.charCodeAt(y + 1)] << 4 | Lt[r.charCodeAt(y + 2)] >> 2, c[g++] = e >> 8 & 255, c[g++] = e & 255), c;
}
function RO(r) {
  return or[r >> 18 & 63] + or[r >> 12 & 63] + or[r >> 6 & 63] + or[r & 63];
}
function CO(r, e, n) {
  for (var i, s = [], c = e; c < n; c += 3)
    i = (r[c] << 16 & 16711680) + (r[c + 1] << 8 & 65280) + (r[c + 2] & 255), s.push(RO(i));
  return s.join("");
}
function LO(r) {
  for (var e, n = r.length, i = n % 3, s = [], c = 16383, g = 0, d = n - i; g < d; g += c)
    s.push(CO(r, g, g + c > d ? d : g + c));
  return i === 1 ? (e = r[n - 1], s.push(
    or[e >> 2] + or[e << 4 & 63] + "=="
  )) : i === 2 && (e = (r[n - 2] << 8) + r[n - 1], s.push(
    or[e >> 10] + or[e >> 4 & 63] + or[e << 2 & 63] + "="
  )), s.join("");
}
var Ns = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Ns.read = function(r, e, n, i, s) {
  var c, g, d = s * 8 - i - 1, y = (1 << d) - 1, l = y >> 1, a = -7, v = n ? s - 1 : 0, p = n ? -1 : 1, E = r[e + v];
  for (v += p, c = E & (1 << -a) - 1, E >>= -a, a += d; a > 0; c = c * 256 + r[e + v], v += p, a -= 8)
    ;
  for (g = c & (1 << -a) - 1, c >>= -a, a += i; a > 0; g = g * 256 + r[e + v], v += p, a -= 8)
    ;
  if (c === 0)
    c = 1 - l;
  else {
    if (c === y)
      return g ? NaN : (E ? -1 : 1) * (1 / 0);
    g = g + Math.pow(2, i), c = c - l;
  }
  return (E ? -1 : 1) * g * Math.pow(2, c - i);
};
Ns.write = function(r, e, n, i, s, c) {
  var g, d, y, l = c * 8 - s - 1, a = (1 << l) - 1, v = a >> 1, p = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, E = i ? 0 : c - 1, S = i ? 1 : -1, _ = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (d = isNaN(e) ? 1 : 0, g = a) : (g = Math.floor(Math.log(e) / Math.LN2), e * (y = Math.pow(2, -g)) < 1 && (g--, y *= 2), g + v >= 1 ? e += p / y : e += p * Math.pow(2, 1 - v), e * y >= 2 && (g++, y /= 2), g + v >= a ? (d = 0, g = a) : g + v >= 1 ? (d = (e * y - 1) * Math.pow(2, s), g = g + v) : (d = e * Math.pow(2, v - 1) * Math.pow(2, s), g = 0)); s >= 8; r[n + E] = d & 255, E += S, d /= 256, s -= 8)
    ;
  for (g = g << s | d, l += s; l > 0; r[n + E] = g & 255, E += S, g /= 256, l -= 8)
    ;
  r[n + E - S] |= _ * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
  const e = lo, n = Ns, i = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  r.Buffer = a, r.SlowBuffer = C, r.INSPECT_MAX_BYTES = 50;
  const s = 2147483647;
  r.kMaxLength = s;
  const { Uint8Array: c, ArrayBuffer: g, SharedArrayBuffer: d } = globalThis;
  a.TYPED_ARRAY_SUPPORT = y(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function y() {
    try {
      const h = new c(1), o = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(o, c.prototype), Object.setPrototypeOf(h, o), h.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(a.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(a.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this))
        return this.byteOffset;
    }
  });
  function l(h) {
    if (h > s)
      throw new RangeError('The value "' + h + '" is invalid for option "size"');
    const o = new c(h);
    return Object.setPrototypeOf(o, a.prototype), o;
  }
  function a(h, o, u) {
    if (typeof h == "number") {
      if (typeof o == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return S(h);
    }
    return v(h, o, u);
  }
  a.poolSize = 8192;
  function v(h, o, u) {
    if (typeof h == "string")
      return _(h, o);
    if (g.isView(h))
      return D(h);
    if (h == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h
      );
    if (qe(h, g) || h && qe(h.buffer, g) || typeof d < "u" && (qe(h, d) || h && qe(h.buffer, d)))
      return I(h, o, u);
    if (typeof h == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const T = h.valueOf && h.valueOf();
    if (T != null && T !== h)
      return a.from(T, o, u);
    const A = x(h);
    if (A)
      return A;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof h[Symbol.toPrimitive] == "function")
      return a.from(h[Symbol.toPrimitive]("string"), o, u);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h
    );
  }
  a.from = function(h, o, u) {
    return v(h, o, u);
  }, Object.setPrototypeOf(a.prototype, c.prototype), Object.setPrototypeOf(a, c);
  function p(h) {
    if (typeof h != "number")
      throw new TypeError('"size" argument must be of type number');
    if (h < 0)
      throw new RangeError('The value "' + h + '" is invalid for option "size"');
  }
  function E(h, o, u) {
    return p(h), h <= 0 ? l(h) : o !== void 0 ? typeof u == "string" ? l(h).fill(o, u) : l(h).fill(o) : l(h);
  }
  a.alloc = function(h, o, u) {
    return E(h, o, u);
  };
  function S(h) {
    return p(h), l(h < 0 ? 0 : F(h) | 0);
  }
  a.allocUnsafe = function(h) {
    return S(h);
  }, a.allocUnsafeSlow = function(h) {
    return S(h);
  };
  function _(h, o) {
    if ((typeof o != "string" || o === "") && (o = "utf8"), !a.isEncoding(o))
      throw new TypeError("Unknown encoding: " + o);
    const u = z(h, o) | 0;
    let T = l(u);
    const A = T.write(h, o);
    return A !== u && (T = T.slice(0, A)), T;
  }
  function P(h) {
    const o = h.length < 0 ? 0 : F(h.length) | 0, u = l(o);
    for (let T = 0; T < o; T += 1)
      u[T] = h[T] & 255;
    return u;
  }
  function D(h) {
    if (qe(h, c)) {
      const o = new c(h);
      return I(o.buffer, o.byteOffset, o.byteLength);
    }
    return P(h);
  }
  function I(h, o, u) {
    if (o < 0 || h.byteLength < o)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (h.byteLength < o + (u || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let T;
    return o === void 0 && u === void 0 ? T = new c(h) : u === void 0 ? T = new c(h, o) : T = new c(h, o, u), Object.setPrototypeOf(T, a.prototype), T;
  }
  function x(h) {
    if (a.isBuffer(h)) {
      const o = F(h.length) | 0, u = l(o);
      return u.length === 0 || h.copy(u, 0, 0, o), u;
    }
    if (h.length !== void 0)
      return typeof h.length != "number" || b(h.length) ? l(0) : P(h);
    if (h.type === "Buffer" && Array.isArray(h.data))
      return P(h.data);
  }
  function F(h) {
    if (h >= s)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
    return h | 0;
  }
  function C(h) {
    return +h != h && (h = 0), a.alloc(+h);
  }
  a.isBuffer = function(o) {
    return o != null && o._isBuffer === !0 && o !== a.prototype;
  }, a.compare = function(o, u) {
    if (qe(o, c) && (o = a.from(o, o.offset, o.byteLength)), qe(u, c) && (u = a.from(u, u.offset, u.byteLength)), !a.isBuffer(o) || !a.isBuffer(u))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (o === u)
      return 0;
    let T = o.length, A = u.length;
    for (let k = 0, j = Math.min(T, A); k < j; ++k)
      if (o[k] !== u[k]) {
        T = o[k], A = u[k];
        break;
      }
    return T < A ? -1 : A < T ? 1 : 0;
  }, a.isEncoding = function(o) {
    switch (String(o).toLowerCase()) {
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
  }, a.concat = function(o, u) {
    if (!Array.isArray(o))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (o.length === 0)
      return a.alloc(0);
    let T;
    if (u === void 0)
      for (u = 0, T = 0; T < o.length; ++T)
        u += o[T].length;
    const A = a.allocUnsafe(u);
    let k = 0;
    for (T = 0; T < o.length; ++T) {
      let j = o[T];
      if (qe(j, c))
        k + j.length > A.length ? (a.isBuffer(j) || (j = a.from(j)), j.copy(A, k)) : c.prototype.set.call(
          A,
          j,
          k
        );
      else if (a.isBuffer(j))
        j.copy(A, k);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      k += j.length;
    }
    return A;
  };
  function z(h, o) {
    if (a.isBuffer(h))
      return h.length;
    if (g.isView(h) || qe(h, g))
      return h.byteLength;
    if (typeof h != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof h
      );
    const u = h.length, T = arguments.length > 2 && arguments[2] === !0;
    if (!T && u === 0)
      return 0;
    let A = !1;
    for (; ; )
      switch (o) {
        case "ascii":
        case "latin1":
        case "binary":
          return u;
        case "utf8":
        case "utf-8":
          return pt(h).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return u * 2;
        case "hex":
          return u >>> 1;
        case "base64":
          return It(h).length;
        default:
          if (A)
            return T ? -1 : pt(h).length;
          o = ("" + o).toLowerCase(), A = !0;
      }
  }
  a.byteLength = z;
  function q(h, o, u) {
    let T = !1;
    if ((o === void 0 || o < 0) && (o = 0), o > this.length || ((u === void 0 || u > this.length) && (u = this.length), u <= 0) || (u >>>= 0, o >>>= 0, u <= o))
      return "";
    for (h || (h = "utf8"); ; )
      switch (h) {
        case "hex":
          return Ze(this, o, u);
        case "utf8":
        case "utf-8":
          return ce(this, o, u);
        case "ascii":
          return ke(this, o, u);
        case "latin1":
        case "binary":
          return $e(this, o, u);
        case "base64":
          return Ae(this, o, u);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Te(this, o, u);
        default:
          if (T)
            throw new TypeError("Unknown encoding: " + h);
          h = (h + "").toLowerCase(), T = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function G(h, o, u) {
    const T = h[o];
    h[o] = h[u], h[u] = T;
  }
  a.prototype.swap16 = function() {
    const o = this.length;
    if (o % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let u = 0; u < o; u += 2)
      G(this, u, u + 1);
    return this;
  }, a.prototype.swap32 = function() {
    const o = this.length;
    if (o % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let u = 0; u < o; u += 4)
      G(this, u, u + 3), G(this, u + 1, u + 2);
    return this;
  }, a.prototype.swap64 = function() {
    const o = this.length;
    if (o % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let u = 0; u < o; u += 8)
      G(this, u, u + 7), G(this, u + 1, u + 6), G(this, u + 2, u + 5), G(this, u + 3, u + 4);
    return this;
  }, a.prototype.toString = function() {
    const o = this.length;
    return o === 0 ? "" : arguments.length === 0 ? ce(this, 0, o) : q.apply(this, arguments);
  }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(o) {
    if (!a.isBuffer(o))
      throw new TypeError("Argument must be a Buffer");
    return this === o ? !0 : a.compare(this, o) === 0;
  }, a.prototype.inspect = function() {
    let o = "";
    const u = r.INSPECT_MAX_BYTES;
    return o = this.toString("hex", 0, u).replace(/(.{2})/g, "$1 ").trim(), this.length > u && (o += " ... "), "<Buffer " + o + ">";
  }, i && (a.prototype[i] = a.prototype.inspect), a.prototype.compare = function(o, u, T, A, k) {
    if (qe(o, c) && (o = a.from(o, o.offset, o.byteLength)), !a.isBuffer(o))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof o
      );
    if (u === void 0 && (u = 0), T === void 0 && (T = o ? o.length : 0), A === void 0 && (A = 0), k === void 0 && (k = this.length), u < 0 || T > o.length || A < 0 || k > this.length)
      throw new RangeError("out of range index");
    if (A >= k && u >= T)
      return 0;
    if (A >= k)
      return -1;
    if (u >= T)
      return 1;
    if (u >>>= 0, T >>>= 0, A >>>= 0, k >>>= 0, this === o)
      return 0;
    let j = k - A, te = T - u;
    const le = Math.min(j, te), ue = this.slice(A, k), fe = o.slice(u, T);
    for (let xe = 0; xe < le; ++xe)
      if (ue[xe] !== fe[xe]) {
        j = ue[xe], te = fe[xe];
        break;
      }
    return j < te ? -1 : te < j ? 1 : 0;
  };
  function X(h, o, u, T, A) {
    if (h.length === 0)
      return -1;
    if (typeof u == "string" ? (T = u, u = 0) : u > 2147483647 ? u = 2147483647 : u < -2147483648 && (u = -2147483648), u = +u, b(u) && (u = A ? 0 : h.length - 1), u < 0 && (u = h.length + u), u >= h.length) {
      if (A)
        return -1;
      u = h.length - 1;
    } else if (u < 0)
      if (A)
        u = 0;
      else
        return -1;
    if (typeof o == "string" && (o = a.from(o, T)), a.isBuffer(o))
      return o.length === 0 ? -1 : Z(h, o, u, T, A);
    if (typeof o == "number")
      return o = o & 255, typeof c.prototype.indexOf == "function" ? A ? c.prototype.indexOf.call(h, o, u) : c.prototype.lastIndexOf.call(h, o, u) : Z(h, [o], u, T, A);
    throw new TypeError("val must be string, number or Buffer");
  }
  function Z(h, o, u, T, A) {
    let k = 1, j = h.length, te = o.length;
    if (T !== void 0 && (T = String(T).toLowerCase(), T === "ucs2" || T === "ucs-2" || T === "utf16le" || T === "utf-16le")) {
      if (h.length < 2 || o.length < 2)
        return -1;
      k = 2, j /= 2, te /= 2, u /= 2;
    }
    function le(fe, xe) {
      return k === 1 ? fe[xe] : fe.readUInt16BE(xe * k);
    }
    let ue;
    if (A) {
      let fe = -1;
      for (ue = u; ue < j; ue++)
        if (le(h, ue) === le(o, fe === -1 ? 0 : ue - fe)) {
          if (fe === -1 && (fe = ue), ue - fe + 1 === te)
            return fe * k;
        } else
          fe !== -1 && (ue -= ue - fe), fe = -1;
    } else
      for (u + te > j && (u = j - te), ue = u; ue >= 0; ue--) {
        let fe = !0;
        for (let xe = 0; xe < te; xe++)
          if (le(h, ue + xe) !== le(o, xe)) {
            fe = !1;
            break;
          }
        if (fe)
          return ue;
      }
    return -1;
  }
  a.prototype.includes = function(o, u, T) {
    return this.indexOf(o, u, T) !== -1;
  }, a.prototype.indexOf = function(o, u, T) {
    return X(this, o, u, T, !0);
  }, a.prototype.lastIndexOf = function(o, u, T) {
    return X(this, o, u, T, !1);
  };
  function H(h, o, u, T) {
    u = Number(u) || 0;
    const A = h.length - u;
    T ? (T = Number(T), T > A && (T = A)) : T = A;
    const k = o.length;
    T > k / 2 && (T = k / 2);
    let j;
    for (j = 0; j < T; ++j) {
      const te = parseInt(o.substr(j * 2, 2), 16);
      if (b(te))
        return j;
      h[u + j] = te;
    }
    return j;
  }
  function K(h, o, u, T) {
    return he(pt(o, h.length - u), h, u, T);
  }
  function V(h, o, u, T) {
    return he(Pt(o), h, u, T);
  }
  function re(h, o, u, T) {
    return he(It(o), h, u, T);
  }
  function pe(h, o, u, T) {
    return he($t(o, h.length - u), h, u, T);
  }
  a.prototype.write = function(o, u, T, A) {
    if (u === void 0)
      A = "utf8", T = this.length, u = 0;
    else if (T === void 0 && typeof u == "string")
      A = u, T = this.length, u = 0;
    else if (isFinite(u))
      u = u >>> 0, isFinite(T) ? (T = T >>> 0, A === void 0 && (A = "utf8")) : (A = T, T = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const k = this.length - u;
    if ((T === void 0 || T > k) && (T = k), o.length > 0 && (T < 0 || u < 0) || u > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    A || (A = "utf8");
    let j = !1;
    for (; ; )
      switch (A) {
        case "hex":
          return H(this, o, u, T);
        case "utf8":
        case "utf-8":
          return K(this, o, u, T);
        case "ascii":
        case "latin1":
        case "binary":
          return V(this, o, u, T);
        case "base64":
          return re(this, o, u, T);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return pe(this, o, u, T);
        default:
          if (j)
            throw new TypeError("Unknown encoding: " + A);
          A = ("" + A).toLowerCase(), j = !0;
      }
  }, a.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function Ae(h, o, u) {
    return o === 0 && u === h.length ? e.fromByteArray(h) : e.fromByteArray(h.slice(o, u));
  }
  function ce(h, o, u) {
    u = Math.min(h.length, u);
    const T = [];
    let A = o;
    for (; A < u; ) {
      const k = h[A];
      let j = null, te = k > 239 ? 4 : k > 223 ? 3 : k > 191 ? 2 : 1;
      if (A + te <= u) {
        let le, ue, fe, xe;
        switch (te) {
          case 1:
            k < 128 && (j = k);
            break;
          case 2:
            le = h[A + 1], (le & 192) === 128 && (xe = (k & 31) << 6 | le & 63, xe > 127 && (j = xe));
            break;
          case 3:
            le = h[A + 1], ue = h[A + 2], (le & 192) === 128 && (ue & 192) === 128 && (xe = (k & 15) << 12 | (le & 63) << 6 | ue & 63, xe > 2047 && (xe < 55296 || xe > 57343) && (j = xe));
            break;
          case 4:
            le = h[A + 1], ue = h[A + 2], fe = h[A + 3], (le & 192) === 128 && (ue & 192) === 128 && (fe & 192) === 128 && (xe = (k & 15) << 18 | (le & 63) << 12 | (ue & 63) << 6 | fe & 63, xe > 65535 && xe < 1114112 && (j = xe));
        }
      }
      j === null ? (j = 65533, te = 1) : j > 65535 && (j -= 65536, T.push(j >>> 10 & 1023 | 55296), j = 56320 | j & 1023), T.push(j), A += te;
    }
    return me(T);
  }
  const Ee = 4096;
  function me(h) {
    const o = h.length;
    if (o <= Ee)
      return String.fromCharCode.apply(String, h);
    let u = "", T = 0;
    for (; T < o; )
      u += String.fromCharCode.apply(
        String,
        h.slice(T, T += Ee)
      );
    return u;
  }
  function ke(h, o, u) {
    let T = "";
    u = Math.min(h.length, u);
    for (let A = o; A < u; ++A)
      T += String.fromCharCode(h[A] & 127);
    return T;
  }
  function $e(h, o, u) {
    let T = "";
    u = Math.min(h.length, u);
    for (let A = o; A < u; ++A)
      T += String.fromCharCode(h[A]);
    return T;
  }
  function Ze(h, o, u) {
    const T = h.length;
    (!o || o < 0) && (o = 0), (!u || u < 0 || u > T) && (u = T);
    let A = "";
    for (let k = o; k < u; ++k)
      A += $[h[k]];
    return A;
  }
  function Te(h, o, u) {
    const T = h.slice(o, u);
    let A = "";
    for (let k = 0; k < T.length - 1; k += 2)
      A += String.fromCharCode(T[k] + T[k + 1] * 256);
    return A;
  }
  a.prototype.slice = function(o, u) {
    const T = this.length;
    o = ~~o, u = u === void 0 ? T : ~~u, o < 0 ? (o += T, o < 0 && (o = 0)) : o > T && (o = T), u < 0 ? (u += T, u < 0 && (u = 0)) : u > T && (u = T), u < o && (u = o);
    const A = this.subarray(o, u);
    return Object.setPrototypeOf(A, a.prototype), A;
  };
  function _e(h, o, u) {
    if (h % 1 !== 0 || h < 0)
      throw new RangeError("offset is not uint");
    if (h + o > u)
      throw new RangeError("Trying to access beyond buffer length");
  }
  a.prototype.readUintLE = a.prototype.readUIntLE = function(o, u, T) {
    o = o >>> 0, u = u >>> 0, T || _e(o, u, this.length);
    let A = this[o], k = 1, j = 0;
    for (; ++j < u && (k *= 256); )
      A += this[o + j] * k;
    return A;
  }, a.prototype.readUintBE = a.prototype.readUIntBE = function(o, u, T) {
    o = o >>> 0, u = u >>> 0, T || _e(o, u, this.length);
    let A = this[o + --u], k = 1;
    for (; u > 0 && (k *= 256); )
      A += this[o + --u] * k;
    return A;
  }, a.prototype.readUint8 = a.prototype.readUInt8 = function(o, u) {
    return o = o >>> 0, u || _e(o, 1, this.length), this[o];
  }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(o, u) {
    return o = o >>> 0, u || _e(o, 2, this.length), this[o] | this[o + 1] << 8;
  }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(o, u) {
    return o = o >>> 0, u || _e(o, 2, this.length), this[o] << 8 | this[o + 1];
  }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(o, u) {
    return o = o >>> 0, u || _e(o, 4, this.length), (this[o] | this[o + 1] << 8 | this[o + 2] << 16) + this[o + 3] * 16777216;
  }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(o, u) {
    return o = o >>> 0, u || _e(o, 4, this.length), this[o] * 16777216 + (this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3]);
  }, a.prototype.readBigUInt64LE = L(function(o) {
    o = o >>> 0, Ce(o, "offset");
    const u = this[o], T = this[o + 7];
    (u === void 0 || T === void 0) && De(o, this.length - 8);
    const A = u + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24, k = this[++o] + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + T * 2 ** 24;
    return BigInt(A) + (BigInt(k) << BigInt(32));
  }), a.prototype.readBigUInt64BE = L(function(o) {
    o = o >>> 0, Ce(o, "offset");
    const u = this[o], T = this[o + 7];
    (u === void 0 || T === void 0) && De(o, this.length - 8);
    const A = u * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + this[++o], k = this[++o] * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + T;
    return (BigInt(A) << BigInt(32)) + BigInt(k);
  }), a.prototype.readIntLE = function(o, u, T) {
    o = o >>> 0, u = u >>> 0, T || _e(o, u, this.length);
    let A = this[o], k = 1, j = 0;
    for (; ++j < u && (k *= 256); )
      A += this[o + j] * k;
    return k *= 128, A >= k && (A -= Math.pow(2, 8 * u)), A;
  }, a.prototype.readIntBE = function(o, u, T) {
    o = o >>> 0, u = u >>> 0, T || _e(o, u, this.length);
    let A = u, k = 1, j = this[o + --A];
    for (; A > 0 && (k *= 256); )
      j += this[o + --A] * k;
    return k *= 128, j >= k && (j -= Math.pow(2, 8 * u)), j;
  }, a.prototype.readInt8 = function(o, u) {
    return o = o >>> 0, u || _e(o, 1, this.length), this[o] & 128 ? (255 - this[o] + 1) * -1 : this[o];
  }, a.prototype.readInt16LE = function(o, u) {
    o = o >>> 0, u || _e(o, 2, this.length);
    const T = this[o] | this[o + 1] << 8;
    return T & 32768 ? T | 4294901760 : T;
  }, a.prototype.readInt16BE = function(o, u) {
    o = o >>> 0, u || _e(o, 2, this.length);
    const T = this[o + 1] | this[o] << 8;
    return T & 32768 ? T | 4294901760 : T;
  }, a.prototype.readInt32LE = function(o, u) {
    return o = o >>> 0, u || _e(o, 4, this.length), this[o] | this[o + 1] << 8 | this[o + 2] << 16 | this[o + 3] << 24;
  }, a.prototype.readInt32BE = function(o, u) {
    return o = o >>> 0, u || _e(o, 4, this.length), this[o] << 24 | this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3];
  }, a.prototype.readBigInt64LE = L(function(o) {
    o = o >>> 0, Ce(o, "offset");
    const u = this[o], T = this[o + 7];
    (u === void 0 || T === void 0) && De(o, this.length - 8);
    const A = this[o + 4] + this[o + 5] * 2 ** 8 + this[o + 6] * 2 ** 16 + (T << 24);
    return (BigInt(A) << BigInt(32)) + BigInt(u + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24);
  }), a.prototype.readBigInt64BE = L(function(o) {
    o = o >>> 0, Ce(o, "offset");
    const u = this[o], T = this[o + 7];
    (u === void 0 || T === void 0) && De(o, this.length - 8);
    const A = (u << 24) + // Overflow
    this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + this[++o];
    return (BigInt(A) << BigInt(32)) + BigInt(this[++o] * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + T);
  }), a.prototype.readFloatLE = function(o, u) {
    return o = o >>> 0, u || _e(o, 4, this.length), n.read(this, o, !0, 23, 4);
  }, a.prototype.readFloatBE = function(o, u) {
    return o = o >>> 0, u || _e(o, 4, this.length), n.read(this, o, !1, 23, 4);
  }, a.prototype.readDoubleLE = function(o, u) {
    return o = o >>> 0, u || _e(o, 8, this.length), n.read(this, o, !0, 52, 8);
  }, a.prototype.readDoubleBE = function(o, u) {
    return o = o >>> 0, u || _e(o, 8, this.length), n.read(this, o, !1, 52, 8);
  };
  function Ie(h, o, u, T, A, k) {
    if (!a.isBuffer(h))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (o > A || o < k)
      throw new RangeError('"value" argument is out of bounds');
    if (u + T > h.length)
      throw new RangeError("Index out of range");
  }
  a.prototype.writeUintLE = a.prototype.writeUIntLE = function(o, u, T, A) {
    if (o = +o, u = u >>> 0, T = T >>> 0, !A) {
      const te = Math.pow(2, 8 * T) - 1;
      Ie(this, o, u, T, te, 0);
    }
    let k = 1, j = 0;
    for (this[u] = o & 255; ++j < T && (k *= 256); )
      this[u + j] = o / k & 255;
    return u + T;
  }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(o, u, T, A) {
    if (o = +o, u = u >>> 0, T = T >>> 0, !A) {
      const te = Math.pow(2, 8 * T) - 1;
      Ie(this, o, u, T, te, 0);
    }
    let k = T - 1, j = 1;
    for (this[u + k] = o & 255; --k >= 0 && (j *= 256); )
      this[u + k] = o / j & 255;
    return u + T;
  }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(o, u, T) {
    return o = +o, u = u >>> 0, T || Ie(this, o, u, 1, 255, 0), this[u] = o & 255, u + 1;
  }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(o, u, T) {
    return o = +o, u = u >>> 0, T || Ie(this, o, u, 2, 65535, 0), this[u] = o & 255, this[u + 1] = o >>> 8, u + 2;
  }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(o, u, T) {
    return o = +o, u = u >>> 0, T || Ie(this, o, u, 2, 65535, 0), this[u] = o >>> 8, this[u + 1] = o & 255, u + 2;
  }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(o, u, T) {
    return o = +o, u = u >>> 0, T || Ie(this, o, u, 4, 4294967295, 0), this[u + 3] = o >>> 24, this[u + 2] = o >>> 16, this[u + 1] = o >>> 8, this[u] = o & 255, u + 4;
  }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(o, u, T) {
    return o = +o, u = u >>> 0, T || Ie(this, o, u, 4, 4294967295, 0), this[u] = o >>> 24, this[u + 1] = o >>> 16, this[u + 2] = o >>> 8, this[u + 3] = o & 255, u + 4;
  };
  function St(h, o, u, T, A) {
    jt(o, T, A, h, u, 7);
    let k = Number(o & BigInt(4294967295));
    h[u++] = k, k = k >> 8, h[u++] = k, k = k >> 8, h[u++] = k, k = k >> 8, h[u++] = k;
    let j = Number(o >> BigInt(32) & BigInt(4294967295));
    return h[u++] = j, j = j >> 8, h[u++] = j, j = j >> 8, h[u++] = j, j = j >> 8, h[u++] = j, u;
  }
  function wt(h, o, u, T, A) {
    jt(o, T, A, h, u, 7);
    let k = Number(o & BigInt(4294967295));
    h[u + 7] = k, k = k >> 8, h[u + 6] = k, k = k >> 8, h[u + 5] = k, k = k >> 8, h[u + 4] = k;
    let j = Number(o >> BigInt(32) & BigInt(4294967295));
    return h[u + 3] = j, j = j >> 8, h[u + 2] = j, j = j >> 8, h[u + 1] = j, j = j >> 8, h[u] = j, u + 8;
  }
  a.prototype.writeBigUInt64LE = L(function(o, u = 0) {
    return St(this, o, u, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeBigUInt64BE = L(function(o, u = 0) {
    return wt(this, o, u, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeIntLE = function(o, u, T, A) {
    if (o = +o, u = u >>> 0, !A) {
      const le = Math.pow(2, 8 * T - 1);
      Ie(this, o, u, T, le - 1, -le);
    }
    let k = 0, j = 1, te = 0;
    for (this[u] = o & 255; ++k < T && (j *= 256); )
      o < 0 && te === 0 && this[u + k - 1] !== 0 && (te = 1), this[u + k] = (o / j >> 0) - te & 255;
    return u + T;
  }, a.prototype.writeIntBE = function(o, u, T, A) {
    if (o = +o, u = u >>> 0, !A) {
      const le = Math.pow(2, 8 * T - 1);
      Ie(this, o, u, T, le - 1, -le);
    }
    let k = T - 1, j = 1, te = 0;
    for (this[u + k] = o & 255; --k >= 0 && (j *= 256); )
      o < 0 && te === 0 && this[u + k + 1] !== 0 && (te = 1), this[u + k] = (o / j >> 0) - te & 255;
    return u + T;
  }, a.prototype.writeInt8 = function(o, u, T) {
    return o = +o, u = u >>> 0, T || Ie(this, o, u, 1, 127, -128), o < 0 && (o = 255 + o + 1), this[u] = o & 255, u + 1;
  }, a.prototype.writeInt16LE = function(o, u, T) {
    return o = +o, u = u >>> 0, T || Ie(this, o, u, 2, 32767, -32768), this[u] = o & 255, this[u + 1] = o >>> 8, u + 2;
  }, a.prototype.writeInt16BE = function(o, u, T) {
    return o = +o, u = u >>> 0, T || Ie(this, o, u, 2, 32767, -32768), this[u] = o >>> 8, this[u + 1] = o & 255, u + 2;
  }, a.prototype.writeInt32LE = function(o, u, T) {
    return o = +o, u = u >>> 0, T || Ie(this, o, u, 4, 2147483647, -2147483648), this[u] = o & 255, this[u + 1] = o >>> 8, this[u + 2] = o >>> 16, this[u + 3] = o >>> 24, u + 4;
  }, a.prototype.writeInt32BE = function(o, u, T) {
    return o = +o, u = u >>> 0, T || Ie(this, o, u, 4, 2147483647, -2147483648), o < 0 && (o = 4294967295 + o + 1), this[u] = o >>> 24, this[u + 1] = o >>> 16, this[u + 2] = o >>> 8, this[u + 3] = o & 255, u + 4;
  }, a.prototype.writeBigInt64LE = L(function(o, u = 0) {
    return St(this, o, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), a.prototype.writeBigInt64BE = L(function(o, u = 0) {
    return wt(this, o, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Ue(h, o, u, T, A, k) {
    if (u + T > h.length)
      throw new RangeError("Index out of range");
    if (u < 0)
      throw new RangeError("Index out of range");
  }
  function Ht(h, o, u, T, A) {
    return o = +o, u = u >>> 0, A || Ue(h, o, u, 4), n.write(h, o, u, T, 23, 4), u + 4;
  }
  a.prototype.writeFloatLE = function(o, u, T) {
    return Ht(this, o, u, !0, T);
  }, a.prototype.writeFloatBE = function(o, u, T) {
    return Ht(this, o, u, !1, T);
  };
  function Re(h, o, u, T, A) {
    return o = +o, u = u >>> 0, A || Ue(h, o, u, 8), n.write(h, o, u, T, 52, 8), u + 8;
  }
  a.prototype.writeDoubleLE = function(o, u, T) {
    return Re(this, o, u, !0, T);
  }, a.prototype.writeDoubleBE = function(o, u, T) {
    return Re(this, o, u, !1, T);
  }, a.prototype.copy = function(o, u, T, A) {
    if (!a.isBuffer(o))
      throw new TypeError("argument should be a Buffer");
    if (T || (T = 0), !A && A !== 0 && (A = this.length), u >= o.length && (u = o.length), u || (u = 0), A > 0 && A < T && (A = T), A === T || o.length === 0 || this.length === 0)
      return 0;
    if (u < 0)
      throw new RangeError("targetStart out of bounds");
    if (T < 0 || T >= this.length)
      throw new RangeError("Index out of range");
    if (A < 0)
      throw new RangeError("sourceEnd out of bounds");
    A > this.length && (A = this.length), o.length - u < A - T && (A = o.length - u + T);
    const k = A - T;
    return this === o && typeof c.prototype.copyWithin == "function" ? this.copyWithin(u, T, A) : c.prototype.set.call(
      o,
      this.subarray(T, A),
      u
    ), k;
  }, a.prototype.fill = function(o, u, T, A) {
    if (typeof o == "string") {
      if (typeof u == "string" ? (A = u, u = 0, T = this.length) : typeof T == "string" && (A = T, T = this.length), A !== void 0 && typeof A != "string")
        throw new TypeError("encoding must be a string");
      if (typeof A == "string" && !a.isEncoding(A))
        throw new TypeError("Unknown encoding: " + A);
      if (o.length === 1) {
        const j = o.charCodeAt(0);
        (A === "utf8" && j < 128 || A === "latin1") && (o = j);
      }
    } else
      typeof o == "number" ? o = o & 255 : typeof o == "boolean" && (o = Number(o));
    if (u < 0 || this.length < u || this.length < T)
      throw new RangeError("Out of range index");
    if (T <= u)
      return this;
    u = u >>> 0, T = T === void 0 ? this.length : T >>> 0, o || (o = 0);
    let k;
    if (typeof o == "number")
      for (k = u; k < T; ++k)
        this[k] = o;
    else {
      const j = a.isBuffer(o) ? o : a.from(o, A), te = j.length;
      if (te === 0)
        throw new TypeError('The value "' + o + '" is invalid for argument "value"');
      for (k = 0; k < T - u; ++k)
        this[k + u] = j[k % te];
    }
    return this;
  };
  const Je = {};
  function Nt(h, o, u) {
    Je[h] = class extends u {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: o.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${h}]`, this.stack, delete this.name;
      }
      get code() {
        return h;
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
        return `${this.name} [${h}]: ${this.message}`;
      }
    };
  }
  Nt(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(h) {
      return h ? `${h} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Nt(
    "ERR_INVALID_ARG_TYPE",
    function(h, o) {
      return `The "${h}" argument must be of type number. Received type ${typeof o}`;
    },
    TypeError
  ), Nt(
    "ERR_OUT_OF_RANGE",
    function(h, o, u) {
      let T = `The value of "${h}" is out of range.`, A = u;
      return Number.isInteger(u) && Math.abs(u) > 2 ** 32 ? A = ut(String(u)) : typeof u == "bigint" && (A = String(u), (u > BigInt(2) ** BigInt(32) || u < -(BigInt(2) ** BigInt(32))) && (A = ut(A)), A += "n"), T += ` It must be ${o}. Received ${A}`, T;
    },
    RangeError
  );
  function ut(h) {
    let o = "", u = h.length;
    const T = h[0] === "-" ? 1 : 0;
    for (; u >= T + 4; u -= 3)
      o = `_${h.slice(u - 3, u)}${o}`;
    return `${h.slice(0, u)}${o}`;
  }
  function bt(h, o, u) {
    Ce(o, "offset"), (h[o] === void 0 || h[o + u] === void 0) && De(o, h.length - (u + 1));
  }
  function jt(h, o, u, T, A, k) {
    if (h > u || h < o) {
      const j = typeof o == "bigint" ? "n" : "";
      let te;
      throw k > 3 ? o === 0 || o === BigInt(0) ? te = `>= 0${j} and < 2${j} ** ${(k + 1) * 8}${j}` : te = `>= -(2${j} ** ${(k + 1) * 8 - 1}${j}) and < 2 ** ${(k + 1) * 8 - 1}${j}` : te = `>= ${o}${j} and <= ${u}${j}`, new Je.ERR_OUT_OF_RANGE("value", te, h);
    }
    bt(T, A, k);
  }
  function Ce(h, o) {
    if (typeof h != "number")
      throw new Je.ERR_INVALID_ARG_TYPE(o, "number", h);
  }
  function De(h, o, u) {
    throw Math.floor(h) !== h ? (Ce(h, u), new Je.ERR_OUT_OF_RANGE(u || "offset", "an integer", h)) : o < 0 ? new Je.ERR_BUFFER_OUT_OF_BOUNDS() : new Je.ERR_OUT_OF_RANGE(
      u || "offset",
      `>= ${u ? 1 : 0} and <= ${o}`,
      h
    );
  }
  const cr = /[^+/0-9A-Za-z-_]/g;
  function $r(h) {
    if (h = h.split("=")[0], h = h.trim().replace(cr, ""), h.length < 2)
      return "";
    for (; h.length % 4 !== 0; )
      h = h + "=";
    return h;
  }
  function pt(h, o) {
    o = o || 1 / 0;
    let u;
    const T = h.length;
    let A = null;
    const k = [];
    for (let j = 0; j < T; ++j) {
      if (u = h.charCodeAt(j), u > 55295 && u < 57344) {
        if (!A) {
          if (u > 56319) {
            (o -= 3) > -1 && k.push(239, 191, 189);
            continue;
          } else if (j + 1 === T) {
            (o -= 3) > -1 && k.push(239, 191, 189);
            continue;
          }
          A = u;
          continue;
        }
        if (u < 56320) {
          (o -= 3) > -1 && k.push(239, 191, 189), A = u;
          continue;
        }
        u = (A - 55296 << 10 | u - 56320) + 65536;
      } else
        A && (o -= 3) > -1 && k.push(239, 191, 189);
      if (A = null, u < 128) {
        if ((o -= 1) < 0)
          break;
        k.push(u);
      } else if (u < 2048) {
        if ((o -= 2) < 0)
          break;
        k.push(
          u >> 6 | 192,
          u & 63 | 128
        );
      } else if (u < 65536) {
        if ((o -= 3) < 0)
          break;
        k.push(
          u >> 12 | 224,
          u >> 6 & 63 | 128,
          u & 63 | 128
        );
      } else if (u < 1114112) {
        if ((o -= 4) < 0)
          break;
        k.push(
          u >> 18 | 240,
          u >> 12 & 63 | 128,
          u >> 6 & 63 | 128,
          u & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return k;
  }
  function Pt(h) {
    const o = [];
    for (let u = 0; u < h.length; ++u)
      o.push(h.charCodeAt(u) & 255);
    return o;
  }
  function $t(h, o) {
    let u, T, A;
    const k = [];
    for (let j = 0; j < h.length && !((o -= 2) < 0); ++j)
      u = h.charCodeAt(j), T = u >> 8, A = u % 256, k.push(A), k.push(T);
    return k;
  }
  function It(h) {
    return e.toByteArray($r(h));
  }
  function he(h, o, u, T) {
    let A;
    for (A = 0; A < T && !(A + u >= o.length || A >= h.length); ++A)
      o[A + u] = h[A];
    return A;
  }
  function qe(h, o) {
    return h instanceof o || h != null && h.constructor != null && h.constructor.name != null && h.constructor.name === o.name;
  }
  function b(h) {
    return h !== h;
  }
  const $ = function() {
    const h = "0123456789abcdef", o = new Array(256);
    for (let u = 0; u < 16; ++u) {
      const T = u * 16;
      for (let A = 0; A < 16; ++A)
        o[T + A] = h[u] + h[A];
    }
    return o;
  }();
  function L(h) {
    return typeof BigInt > "u" ? M : h;
  }
  function M() {
    throw new Error("BigInt not supported");
  }
})(yp);
const FO = yp.Buffer, Ct = 100 * 1e3 * 1e3, kO = 32768, MO = 9783072e5;
class BO {
  constructor(e) {
    console.info({ id: e });
  }
}
class UO {
  constructor() {
    this.debug = !1;
  }
  parse64Content(e) {
    const n = window.atob(e), i = n.length, s = new FO(i);
    for (let c = 0; c < i; c++)
      s[c] = n.charCodeAt(c);
    return this.parseBuffer(s);
  }
  parseBuffer(e) {
    if (e.toString("utf8", 0, 6) !== "bplist")
      throw new Error("Invalid binary plist. Expected 'bplist' at offset 0.");
    const s = e.slice(e.length - 32, e.length), c = s.readUInt8(6);
    this.debug && console.log("offsetSize: " + c);
    const g = s.readUInt8(7);
    this.debug && console.log("objectRefSize: " + g);
    const d = this.readUInt64BE(s, 8);
    this.debug && console.log("numObjects: " + d);
    const y = this.readUInt64BE(s, 16);
    this.debug && console.log("topObject: " + y);
    const l = this.readUInt64BE(s, 24);
    if (this.debug && console.log("offsetTableOffset: " + l), d > kO)
      throw new Error("maxObjectCount exceeded");
    const a = [];
    for (let p = 0; p < d; p++) {
      const E = e.slice(l + p * c, l + (p + 1) * c);
      a[p] = this.readUInt(E, 0), this.debug;
    }
    const v = (p) => {
      const E = a[p], S = e[E], _ = (S & 240) >> 4, P = S & 15, D = () => {
        switch (P) {
          case 0:
            return null;
          case 8:
            return !1;
          case 9:
            return !0;
          case 15:
            return null;
          default:
            throw new Error("Unhandled simple type 0x" + _.toString(16));
        }
      }, I = (H) => {
        let K = "", V;
        for (V = 0; V < H.length && H[V] === 0; V++)
          ;
        for (; V < H.length; V++) {
          const re = "00" + H[V].toString(16);
          K += re.substr(re.length - 2);
        }
        return K;
      }, x = () => {
        const H = Math.pow(2, P);
        if (H > 4) {
          const K = e.slice(E + 1, E + 1 + H), V = I(K);
          return IO(V, 16);
        }
        if (H < Ct)
          return this.readUInt(e.slice(E + 1, E + 1 + H));
        throw new Error(
          "Too little heap space available! Wanted to read " + H + " bytes, but only " + Ct + " are available."
        );
      }, F = () => {
        const H = P + 1;
        if (H < Ct)
          return new BO(this.readUInt(e.slice(E + 1, E + 1 + H)));
        throw new Error(
          "To little heap space available! Wanted to read " + H + " bytes, but only " + Ct + " are available."
        );
      }, C = () => {
        const H = Math.pow(2, P);
        if (H < Ct) {
          const K = e.slice(E + 1, E + 1 + H);
          if (H === 4)
            return K.readFloatBE(0);
          if (H === 8)
            return K.readDoubleBE(0);
        } else
          throw new Error(
            "To little heap space available! Wanted to read " + H + " bytes, but only " + Ct + " are available."
          );
      }, z = () => {
        P !== 3 && console.error("Unknown date type :" + P + ". Parsing anyway...");
        const H = e.slice(E + 1, E + 9);
        return new Date(MO + 1e3 * H.readDoubleBE(0));
      }, q = () => {
        let H = 1, K = P;
        if (P === 15) {
          const V = e[E + 1], re = (V & 240) / 16;
          re !== 1 && console.error("0x4: UNEXPECTED LENGTH-INT TYPE! " + re);
          const pe = V & 15, Ae = Math.pow(2, pe);
          H = 2 + Ae, Ae < 3 ? K = this.readUInt(e.slice(E + 2, E + 2 + Ae)) : K = this.readUInt(e.slice(E + 2, E + 2 + Ae));
        }
        if (K < Ct)
          return e.slice(E + H, E + H + K);
        throw new Error(
          "To little heap space available! Wanted to read " + K + " bytes, but only " + Ct + " are available."
        );
      }, G = (H) => {
        H = H || 0;
        let K = "utf8", V = P, re = 1;
        if (P === 15) {
          const pe = e[E + 1], Ae = (pe & 240) / 16;
          Ae !== 1 && console.error("UNEXPECTED LENGTH-INT TYPE! " + Ae);
          const ce = pe & 15, Ee = Math.pow(2, ce);
          re = 2 + Ee, Ee < 3 ? V = this.readUInt(e.slice(E + 2, E + 2 + Ee)) : V = this.readUInt(e.slice(E + 2, E + 2 + Ee));
        }
        if (V *= H + 1, V < Ct) {
          let pe = e.toString("utf8", E + re, E + re + V);
          return H && (pe = this.swapBytes(pe), K = "ucs2"), pe.toString(K);
        } else
          throw new Error(
            "To little heap space available! Wanted to read " + V + " bytes, but only " + Ct + " are available."
          );
      }, X = () => {
        let H = P, K = 1;
        if (P === 15) {
          const re = e[E + 1], pe = (re & 240) / 16;
          pe !== 1 && console.error("0xa: UNEXPECTED LENGTH-INT TYPE! " + pe);
          const Ae = re & 15, ce = Math.pow(2, Ae);
          K = 2 + ce, ce < 3 ? H = this.readUInt(e.slice(E + 2, E + 2 + ce)) : H = this.readUInt(e.slice(E + 2, E + 2 + ce));
        }
        if (H * g > Ct)
          throw new Error("To little heap space available!");
        const V = [];
        for (let re = 0; re < H; re++) {
          const pe = this.readUInt(
            e.slice(E + K + re * g, E + K + (re + 1) * g)
          );
          V[re] = v(pe);
        }
        return V;
      }, Z = () => {
        let H = P, K = 1;
        if (P === 15) {
          const re = e[E + 1], pe = (re & 240) / 16;
          pe !== 1 && console.error("0xD: UNEXPECTED LENGTH-INT TYPE! " + pe);
          const Ae = re & 15, ce = Math.pow(2, Ae);
          K = 2 + ce, ce < 3 ? H = this.readUInt(e.slice(E + 2, E + 2 + ce)) : H = this.readUInt(e.slice(E + 2, E + 2 + ce));
        }
        if (H * 2 * g > Ct)
          throw new Error("To little heap space available!");
        this.debug && console.log("Parsing dictionary #" + p);
        const V = {};
        for (let re = 0; re < H; re++) {
          const pe = this.readUInt(
            e.slice(E + K + re * g, E + K + (re + 1) * g)
          ), Ae = this.readUInt(
            e.slice(
              E + K + H * g + re * g,
              E + K + H * g + (re + 1) * g
            )
          ), ce = v(pe), Ee = v(Ae);
          this.debug && console.log("  DICT #" + p + ": Mapped " + ce + " to " + Ee), V[ce] = Ee;
        }
        return V;
      };
      switch (_) {
        case 0:
          return D();
        case 1:
          return x();
        case 8:
          return F();
        case 2:
          return C();
        case 3:
          return z();
        case 4:
          return q();
        case 5:
          return G();
        case 6:
          return G(!0);
        case 10:
          return X();
        case 13:
          return Z();
        default:
          throw new Error("Unhandled type 0x" + _.toString(16));
      }
    };
    return [v(y)];
  }
  readUInt(e, n) {
    n = n || 0;
    let i = 0;
    for (let s = n; s < e.length; s++)
      i <<= 8, i |= e[s] & 255;
    return i;
  }
  // we're just going to toss the high order bits because javascript doesn't have 64-bit ints
  readUInt64BE(e, n) {
    return e.slice(n, n + 8).readUInt32BE(4, 8);
  }
  swapBytes(e) {
    const n = e.length;
    for (let i = 0; i < n; i += 2) {
      const s = e[i];
      e[i] = e[i + 1], e[i + 1] = s;
    }
    return e;
  }
}
const DO = new UO(), tr = {
  skipConfirmation: "X-Skip-Confirm-Navigation=1",
  sameWindow: "X-Target=_self"
}, wr = {
  skipConfirmation: "X-Skip-Confirm-Navigation",
  sameWindow: "X-Target"
}, Zl = {
  url: "",
  sameWindow: !1,
  skipConfirmation: !1
};
class _t {
  /**
   * Generates a URL file.
   */
  static generateURLFileContent(e, n, i = !1, s = !1) {
    let c = "";
    return e && e.indexOf("[InternetShortcut]") !== -1 && e.indexOf("URL=") !== -1 ? c = e.replace(new RegExp("URL=.*", "gm"), `URL=${gt(n)}`) : c = `[InternetShortcut]\r
URL=${gt(n)}`, !i && c.indexOf(tr.sameWindow) !== -1 ? c = c.replace(tr.sameWindow, "") : i && c.indexOf(tr.sameWindow) === -1 && (c = `${c}\r
${tr.sameWindow}`), !s && c.indexOf(tr.skipConfirmation) !== -1 ? c = c.replace(tr.skipConfirmation, "") : s && c.indexOf(tr.skipConfirmation) === -1 && (c = `${c}\r
${tr.skipConfirmation}`), c = c.replace(/\r\n\r\n/gm, `\r
`).trim(), `${c}\r
`;
  }
  /**
   * Parse a URL file.
   */
  static parseURLFile(e) {
    const n = { ...Zl };
    if (e) {
      const i = e.match("URL=.*");
      if (i && Array.isArray(i) && i.length > 0) {
        const s = i[0];
        n.url = gt(s.replace("URL=", ""));
      }
      e.indexOf(tr.skipConfirmation) !== -1 && (n.skipConfirmation = !0), e.indexOf(tr.sameWindow) !== -1 && (n.sameWindow = !0);
    }
    return n;
  }
  /**
   * Generates a webloc file.
   */
  static generateWeblocFileContent(e, n, i = !1, s = !1) {
    let c = "", g = !1;
    if (e) {
      const d = new window.DOMParser(), y = Ql(e), l = d.parseFromString(y, "text/xml"), a = [...l.getElementsByTagName("dict"), ...l.getElementsByTagName("extra")];
      let v = !1, p = !1;
      if (a && a.length)
        for (const S of a) {
          const _ = S.getElementsByTagName("key"), P = S.getElementsByTagName("string");
          Wt(_) === "URL" && (la(P, gt(n)), g = !0), Wt(_) === wr.sameWindow && Wt(P) === "_self" && (i ? la(P, "_self") : l.getElementsByTagName("plist")[0].removeChild(S), p = !0), Wt(_) === wr.skipConfirmation && Wt(P) === "1" && (s ? la(P, "1") : l.getElementsByTagName("plist")[0].removeChild(S), v = !0);
        }
      if (i && !p) {
        const S = Jl(l, wr.sameWindow, "_self");
        l.getElementsByTagName("plist")[0].appendChild(S);
      }
      if (s && !v) {
        const S = Jl(l, wr.skipConfirmation, "1");
        l.getElementsByTagName("plist")[0].appendChild(S);
      }
      c = `<?xml version="1.0" encoding="UTF-8"?>
			${new window.XMLSerializer().serializeToString(l)}`, c.indexOf("parsererror") > -1 && (console.error("Parse error", c), c = ""), c = jO(c);
    }
    return (!c || !g) && (c = `<?xml version="1.0" encoding="UTF-8"?>
				<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
				<plist version="1.0">
					<dict>
						<key>URL</key>
						<string>${gt(n)}</string>
					</dict>`, i && (c = `${c}
				<extra>
					<key>${wr.sameWindow}</key>
					<string>_self</string>
				</extra>`), s && (c = `${c}
				<extra>
					<key>${wr.skipConfirmation}</key>
					<string>1</string>
				</extra>`), c = `${c}
			</plist>`), c = GO(c), c = c.replace(/(\n|\b)\t+/g, "$1").trim(), c = c.replace(/^\s*$(?:\r\n?|\n)/gm, "").trim(), c;
  }
  /**
   * Parse a webloc file.
   */
  static parseWeblocFile(e) {
    const n = { ...Zl };
    if (e)
      if (e.substring(0, 6) === "bplist")
        try {
          const i = DO.parse64Content(window.btoa(e));
          i && i.length && i[0] && i[0].URL && (n.url = i[0].URL);
        } catch (i) {
          console.info(i);
        }
      else {
        const i = new window.DOMParser(), s = Ql(e), c = i.parseFromString(s, "text/xml"), g = [...c.getElementsByTagName("dict"), ...c.getElementsByTagName("extra")];
        if (g && g.length)
          for (const d of g) {
            const y = d.getElementsByTagName("key"), l = d.getElementsByTagName("string");
            Wt(y) === "URL" && (n.url = gt(Wt(l))), Wt(y) === wr.sameWindow && Wt(l) === "_self" && (n.sameWindow = !0), Wt(y) === wr.skipConfirmation && Wt(l) === "1" && (n.skipConfirmation = !0);
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
const Wt = (r) => r && r.length > 0 && r[0].childNodes && r[0].childNodes.length > 0 && r[0].childNodes[0] ? r[0].childNodes[0].nodeValue : "", la = (r, e) => {
  r && r.length > 0 && r[0].childNodes && r[0].childNodes.length > 0 && r[0].childNodes[0] && (r[0].childNodes[0].nodeValue = e);
}, Jl = (r, e, n) => {
  const i = r.createElement("extra"), s = r.createElement("key");
  s.appendChild(r.createTextNode(e)), i.appendChild(s);
  const c = r.createElement("string");
  return c.appendChild(r.createTextNode(n)), i.appendChild(c), i;
}, jO = (r) => r.replace(/></g, `>
<`), GO = (r) => r.replace(/<extra>/g, "<!-- <extra>").replace(/<\/extra>/g, "</extra> -->"), Ql = (r) => r.replace(/<!-- <extra>/g, "<extra>").replace(/<\/extra> -->/g, "</extra>");
function WO(r) {
  let e, n, i, s, c = (
    /*t*/
    r[1]("files_linkeditor", "View link") + ""
  ), g, d, y;
  return {
    c() {
      e = Fe("div"), n = Fe("a"), i = Fe("span"), s = nt(), g = Tt(c), ve(i, "class", "icon icon-link"), ve(n, "href", "#/"), ve(n, "class", "button"), ve(n, "id", "downloadFile"), ve(e, "class", "directDownload");
    },
    m(l, a) {
      We(l, e, a), Ne(e, n), Ne(n, i), Ne(n, s), Ne(n, g), d || (y = gr(n, "click", ln(function() {
        Ga(
          /*onClick*/
          r[0]
        ) && r[0].apply(this, arguments);
      })), d = !0);
    },
    p(l, [a]) {
      r = l;
    },
    i: ar,
    o: ar,
    d(l) {
      l && Ge(e), d = !1, y();
    }
  };
}
function VO(r, e, n) {
  let { onClick: i } = e;
  const s = window.t;
  return r.$$set = (c) => {
    "onClick" in c && n(0, i = c.onClick);
  }, [i, s];
}
class qO extends zn {
  constructor(e) {
    super(), qn(this, e, VO, WO, vn, { onClick: 0 });
  }
}
const Ai = "application/internet-shortcut", zO = [];
class br {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    window.OCA.Files.fileActions.registerAction({
      name: "editLink",
      displayName: t("files_linkeditor", "Edit link"),
      mime: Ai,
      actionHandler: async (i, s) => await br.loadAndChangeViewMode({ fileName: i, context: s, nextViewMode: "edit" }),
      permissions: window.OC.currentUser && window.OC.PERMISSION_UPDATE,
      iconClass: "icon-link"
    }), window.OCA.Files.fileActions.registerAction({
      name: "viewLink",
      displayName: t("files_linkeditor", "View link"),
      mime: Ai,
      actionHandler: async (i, s) => {
        window.OC.currentUser ? await br.loadAndChangeViewMode({ fileName: i, context: s, nextViewMode: "view" }) : await br.loadAndChangeViewMode({
          fileName: i,
          context: s,
          nextViewMode: "view",
          downloadUrl: s.fileList.getDownloadUrl(i),
          publicUser: !0
        });
      },
      permissions: window.OC.PERMISSION_READ,
      iconClass: "icon-link"
    }), window.OCA.Files.fileActions.setDefault(Ai, "viewLink"), window.OC.Plugins.register("OCA.Files.NewFileMenu", {
      attach: function(i) {
        const s = i.fileList;
        if (s.id !== "files")
          return;
        const c = ({ id: g, displayName: d, templateName: y }) => {
          i.addMenuEntry({
            id: g,
            displayName: d,
            templateName: y,
            iconClass: "icon-link",
            fileType: Ai,
            actionHandler: function(l) {
              const a = s.getCurrentDirectory();
              sr.update(() => "edit"), Rr.update(
                () => Ft.getFileConfig({
                  name: l,
                  dir: a,
                  isNew: !0,
                  onCreate: async (v) => {
                    await s.createFile(l, {
                      scrollTo: !1
                    });
                    const p = await Ft.load({ fileName: l, dir: a });
                    await br.saveAndChangeViewMode({ ...v, fileModifiedTime: p.mtime });
                  }
                })
              );
            }
          });
        };
        c({
          id: "application-internet-shortcut",
          displayName: `${window.t("files_linkeditor", "New link")} (.URL)`,
          // TRANSLATORS default filename when creating a new link file from the files list, keep .URL at the end
          templateName: window.t("files_linkeditor", "Link.URL")
        }), c({
          id: "application-internet-shortcut-webloc",
          displayName: `${window.t("files_linkeditor", "New link")} (.webloc)`,
          // TRANSLATORS default filename when creating a new link file from the files list, keep .webloc at the end
          templateName: window.t("files_linkeditor", "Link.webloc")
        });
      }
    });
    const e = document.querySelectorAll(".directDownload");
    if (e && e.length > 0) {
      const i = (document.querySelector("input#filename") || { value: "" }).value;
      var n = _t.getExtension(i);
      if (n === "url" || n === "webloc") {
        const s = (document.querySelector("input#downloadURL") || { value: "" }).value;
        zO.push(
          new qO({
            anchor: document.querySelector(".directDownload"),
            target: document.querySelector(".directDownload").parentElement,
            props: {
              onClick: () => {
                br.loadAndChangeViewMode({
                  fileName: i,
                  nextViewMode: "view",
                  publicUser: !0,
                  downloadUrl: s
                });
              }
            }
          })
        );
      }
    }
  }
  static async loadAndChangeViewMode({ fileName: e, context: n, nextViewMode: i, publicUser: s, downloadUrl: c }) {
    const g = n ? encodeURI(n.fileList.linkTo() + "?path=" + n.dir) : window.location.href;
    sr.update(() => i), Rr.update(
      () => Ft.getFileConfig({
        name: e,
        currentUrl: g,
        dir: n ? n.dir : ""
      })
    );
    let d = {};
    if (s ? d = await Ft.loadPublic({ downloadUrl: c }) : d = await Ft.load({ fileName: e, dir: n.dir }), d) {
      const y = _t.getExtension(e);
      let l = {};
      y === "webloc" ? l = _t.parseWeblocFile(d.filecontents) : l = _t.parseURLFile(d.filecontents), Rr.update(
        (a) => Ft.getFileConfig({ ...a, ...l, fileModifiedTime: d.mtime, isLoaded: !0 })
      );
    } else
      window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async saveAndChangeViewMode({ name: e, dir: n, url: i, fileModifiedTime: s, sameWindow: c, skipConfirmation: g }) {
    const d = _t.getExtension(e);
    let y = "";
    d === "webloc" ? y = _t.generateWeblocFileContent("", i, c, g) : y = _t.generateURLFileContent("", i, c, g), await Ft.save({ fileContent: y, name: e, dir: n, fileModifiedTime: s }), sr.update(() => "none");
  }
}
function ec(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "Link target URL") + ""
  ), i, s, c, g, d, y, l, a, v, p, E, S, _, P, D, I;
  return {
    c() {
      e = Fe("label"), i = Tt(n), s = nt(), c = Fe("br"), g = nt(), d = Fe("input"), y = nt(), l = Fe("input"), a = nt(), v = Fe("label"), v.textContent = `${/*t*/
      r[2]("files_linkeditor", "Open in same window")}`, p = nt(), E = Fe("input"), _ = nt(), P = Fe("label"), P.textContent = `${/*t*/
      r[2]("files_linkeditor", "Skip confirmation dialog before open (has to open in same window)")}`, ve(d, "type", "text"), lc(d, "width", "100%"), ve(d, "class", "input-wide"), d.autofocus = !0, ve(d, "data-cy", "url-input"), ve(
        d,
        "placeholder",
        /*t*/
        r[2]("files_linkeditor", "e.g. https://example.org")
      ), ve(l, "type", "checkbox"), ve(l, "id", "linkeditor_sameWindow"), ve(l, "class", "checkbox"), ve(v, "for", "linkeditor_sameWindow"), ve(v, "class", "space-top"), ve(E, "type", "checkbox"), E.disabled = S = !/*file*/
      r[0].sameWindow, ve(E, "id", "linkeditor_skipConfirmation"), ve(E, "class", "checkbox"), ve(P, "for", "linkeditor_skipConfirmation");
    },
    m(x, F) {
      We(x, e, F), Ne(e, i), Ne(e, s), Ne(e, c), Ne(e, g), Ne(e, d), Ms(
        d,
        /*file*/
        r[0].url
      ), We(x, y, F), We(x, l, F), l.checked = /*file*/
      r[0].sameWindow, We(x, a, F), We(x, v, F), We(x, p, F), We(x, E, F), E.checked = /*file*/
      r[0].skipConfirmation, We(x, _, F), We(x, P, F), d.focus(), D || (I = [
        gr(
          d,
          "input",
          /*input0_input_handler*/
          r[5]
        ),
        gr(
          l,
          "change",
          /*input1_change_handler*/
          r[6]
        ),
        gr(
          E,
          "change",
          /*input2_change_handler*/
          r[7]
        )
      ], D = !0);
    },
    p(x, F) {
      F & /*file*/
      1 && d.value !== /*file*/
      x[0].url && Ms(
        d,
        /*file*/
        x[0].url
      ), F & /*file*/
      1 && (l.checked = /*file*/
      x[0].sameWindow), F & /*file*/
      1 && S !== (S = !/*file*/
      x[0].sameWindow) && (E.disabled = S), F & /*file*/
      1 && (E.checked = /*file*/
      x[0].skipConfirmation);
    },
    d(x) {
      x && (Ge(e), Ge(y), Ge(l), Ge(a), Ge(v), Ge(p), Ge(E), Ge(_), Ge(P)), D = !1, kr(I);
    }
  };
}
function tc(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "Visit link") + ""
  ), i, s;
  return {
    c() {
      e = Fe("a"), i = Tt(n), ve(e, "href", s = gt(
        /*file*/
        r[0].url
      )), ve(e, "target", "_blank"), ve(e, "class", "button");
    },
    m(c, g) {
      We(c, e, g), Ne(e, i);
    },
    p(c, g) {
      g & /*file*/
      1 && s !== (s = gt(
        /*file*/
        c[0].url
      )) && ve(e, "href", s);
    },
    d(c) {
      c && Ge(e);
    }
  };
}
function rc(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "Save") + ""
  ), i, s, c;
  return {
    c() {
      e = Fe("a"), i = Tt(n), ve(e, "href", window.location.href), ve(e, "class", "primary button");
    },
    m(g, d) {
      We(g, e, d), Ne(e, i), s || (c = gr(e, "click", ln(
        /*save*/
        r[4]
      )), s = !0);
    },
    p: ar,
    d(g) {
      g && Ge(e), s = !1, c();
    }
  };
}
function HO(r) {
  let e, n, i, s = (
    /*file*/
    r[0].name + ""
  ), c, g, d, y, l, a, v, p = (
    /*t*/
    r[2]("files_linkeditor", "Cancel") + ""
  ), E, S, _, P, D = !/*loading*/
  r[1] && ec(r), I = !/*loading*/
  r[1] && tc(r), x = !/*loading*/
  r[1] && rc(r);
  return {
    c() {
      e = Fe("form"), n = Fe("div"), i = Fe("h3"), c = Tt(s), g = nt(), D && D.c(), d = nt(), y = Fe("div"), I && I.c(), l = nt(), a = Fe("div"), v = Fe("a"), E = Tt(p), S = nt(), x && x.c(), ve(n, "class", "urledit"), ve(y, "class", "oc-dialog-buttonrow onebutton urlvisit"), ve(v, "href", window.location.href), ve(v, "class", "cancel button"), ve(a, "class", "oc-dialog-buttonrow twobuttons"), ve(
        e,
        "action",
        /*OC*/
        r[3].generateUrl("/")
      ), ve(e, "method", "post");
    },
    m(F, C) {
      We(F, e, C), Ne(e, n), Ne(n, i), Ne(i, c), Ne(n, g), D && D.m(n, null), Ne(e, d), Ne(e, y), I && I.m(y, null), Ne(e, l), Ne(e, a), Ne(a, v), Ne(v, E), Ne(a, S), x && x.m(a, null), _ || (P = [
        gr(v, "click", ln(
          /*click_handler*/
          r[8]
        )),
        gr(e, "submit", ln(
          /*save*/
          r[4]
        ))
      ], _ = !0);
    },
    p(F, C) {
      C & /*file*/
      1 && s !== (s = /*file*/
      F[0].name + "") && Wa(c, s), /*loading*/
      F[1] ? D && (D.d(1), D = null) : D ? D.p(F, C) : (D = ec(F), D.c(), D.m(n, null)), /*loading*/
      F[1] ? I && (I.d(1), I = null) : I ? I.p(F, C) : (I = tc(F), I.c(), I.m(y, null)), /*loading*/
      F[1] ? x && (x.d(1), x = null) : x ? x.p(F, C) : (x = rc(F), x.c(), x.m(a, null));
    },
    d(F) {
      F && Ge(e), D && D.d(), I && I.d(), x && x.d(), _ = !1, kr(P);
    }
  };
}
function XO(r) {
  let e, n;
  return e = new pc({
    props: {
      loading: (
        /*loading*/
        r[1]
      ),
      $$slots: { default: [HO] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      Di(e.$$.fragment);
    },
    m(i, s) {
      Wn(e, i, s), n = !0;
    },
    p(i, [s]) {
      const c = {};
      s & /*loading*/
      2 && (c.loading = /*loading*/
      i[1]), s & /*$$scope, loading, file*/
      1027 && (c.$$scope = { dirty: s, ctx: i }), e.$set(c);
    },
    i(i) {
      n || (kt(e.$$.fragment, i), n = !0);
    },
    o(i) {
      hr(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Vn(e, i);
    }
  };
}
function YO(r, e, n) {
  let i, s;
  const c = window.t, g = window.OC;
  let d;
  Va(() => {
    d = Rr.subscribe((E) => {
      n(0, i = E), i && (i.isLoaded || i.isNew) && n(1, s = !1);
    });
  }), qa(() => {
    d();
  });
  const y = () => {
    n(1, s = !0), i.isNew && i.onCreate ? i.onCreate({ ...i }) : br.saveAndChangeViewMode({ ...i });
  };
  function l() {
    i.url = this.value, n(0, i);
  }
  function a() {
    i.sameWindow = this.checked, n(0, i);
  }
  function v() {
    i.skipConfirmation = this.checked, n(0, i);
  }
  const p = () => {
    sr.update(() => "none");
  };
  return n(0, i = Ft.getFileConfig()), n(1, s = !0), [
    i,
    s,
    c,
    g,
    y,
    l,
    a,
    v,
    p
  ];
}
class KO extends zn {
  constructor(e) {
    super(), qn(this, e, YO, XO, vn, {});
  }
}
function nc(r) {
  let e, n;
  return e = new SO({}), {
    c() {
      Di(e.$$.fragment);
    },
    m(i, s) {
      Wn(e, i, s), n = !0;
    },
    i(i) {
      n || (kt(e.$$.fragment, i), n = !0);
    },
    o(i) {
      hr(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Vn(e, i);
    }
  };
}
function ic(r) {
  let e, n;
  return e = new KO({}), {
    c() {
      Di(e.$$.fragment);
    },
    m(i, s) {
      Wn(e, i, s), n = !0;
    },
    i(i) {
      n || (kt(e.$$.fragment, i), n = !0);
    },
    o(i) {
      hr(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Vn(e, i);
    }
  };
}
function ZO(r) {
  let e, n, i, s = (
    /*viewMode*/
    r[0] === "view" && nc()
  ), c = (
    /*viewMode*/
    r[0] === "edit" && ic()
  );
  return {
    c() {
      s && s.c(), e = nt(), c && c.c(), n = Zp();
    },
    m(g, d) {
      s && s.m(g, d), We(g, e, d), c && c.m(g, d), We(g, n, d), i = !0;
    },
    p(g, [d]) {
      /*viewMode*/
      g[0] === "view" ? s ? d & /*viewMode*/
      1 && kt(s, 1) : (s = nc(), s.c(), kt(s, 1), s.m(e.parentNode, e)) : s && (Ds(), hr(s, 1, 1, () => {
        s = null;
      }), js()), /*viewMode*/
      g[0] === "edit" ? c ? d & /*viewMode*/
      1 && kt(c, 1) : (c = ic(), c.c(), kt(c, 1), c.m(n.parentNode, n)) : c && (Ds(), hr(c, 1, 1, () => {
        c = null;
      }), js());
    },
    i(g) {
      i || (kt(s), kt(c), i = !0);
    },
    o(g) {
      hr(s), hr(c), i = !1;
    },
    d(g) {
      g && (Ge(e), Ge(n)), s && s.d(g), c && c.d(g);
    }
  };
}
function JO(r, e, n) {
  let i, s;
  return Va(() => {
    s = sr.subscribe((c) => {
      n(0, i = c);
    });
  }), qa(() => {
    s();
  }), n(0, i = ""), [i];
}
class QO extends zn {
  constructor(e) {
    super(), qn(this, e, JO, ZO, vn, {});
  }
}
class Cn {
  static getFileConfig({
    name: e,
    url: n,
    downloadUrl: i,
    dir: s,
    onCreate: c,
    fileModifiedTime: g,
    isNew: d,
    isLoaded: y,
    sameWindow: l,
    skipConfirmation: a,
    permissions: v
  } = {}) {
    return {
      name: e || "?",
      downloadUrl: i || "",
      url: n ? gt(n) : "",
      dir: s || "",
      onCreate: c,
      fileModifiedTime: g || null,
      isNew: d || !1,
      isLoaded: y || !1,
      sameWindow: l || !1,
      skipConfirmation: a || !1,
      permissions: v || gn.NONE
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
  static async save({ fileContent: e, name: n, fileModifiedTime: i, dir: s } = {}) {
    let c = `${s}${n}`;
    s !== "/" && (c = `${s}/${n}`);
    const g = await window.fetch(window.OC.generateUrl("/apps/files_linkeditor/ajax/savefile"), {
      method: "PUT",
      body: JSON.stringify({
        filecontents: e,
        path: c,
        mtime: i
      }),
      headers: {
        requesttoken: window.OC.requestToken,
        "Content-Type": "application/json"
      }
    });
    if (g && g.ok)
      return !0;
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
}
const oc = "application/internet-shortcut";
class Bn {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    Hl({
      id: "editLink",
      displayName: () => t("files_linkeditor", "Edit link"),
      iconSvgInline: () => '<span class="icon-link"></span>',
      exec: async (e) => {
        await Bn.loadAndChangeViewMode({
          fileName: e.basename,
          dirName: e.dirname,
          nextViewMode: "edit",
          permissions: e.permissions
        });
      },
      enabled: (e) => window.OC.currentUser && e.every((n) => n.permissions >= gn.UPDATE && oc.includes(n.mime))
    }), Hl({
      id: "viewLink",
      displayName: () => t("files_linkeditor", "View link"),
      iconSvgInline: () => '<span class="icon-link"></span>',
      exec: async (e) => {
        window.OC.currentUser ? await Bn.loadAndChangeViewMode({
          fileName: e.basename,
          dirName: e.dirname,
          nextViewMode: "view",
          permissions: e.permissions
        }) : await Bn.loadAndChangeViewMode({
          fileName: e.basename,
          dirName: e.dirname,
          nextViewMode: "view",
          // TODO:
          downloadUrl: e.source,
          publicUser: !0,
          permissions: e.permissions
        });
      },
      enabled: (e) => e.every((n) => n.permissions >= gn.READ && oc.includes(n.mime))
    });
  }
  static async loadAndChangeViewMode({ fileName: e, dirName: n, nextViewMode: i, publicUser: s, downloadUrl: c, permissions: g }) {
    sr.update(() => i), Rr.update(
      () => Cn.getFileConfig({
        name: e,
        dir: n || "",
        permissions: g
      })
    );
    let d = {};
    if (s ? d = await Cn.loadPublic({ downloadUrl: c }) : d = await Cn.load({ fileName: e, dir: n }), d) {
      const y = _t.getExtension(e);
      let l = {};
      y === "webloc" ? l = _t.parseWeblocFile(d.filecontents) : l = _t.parseURLFile(d.filecontents), Rr.update(
        (a) => Cn.getFileConfig({
          ...a,
          ...l,
          fileModifiedTime: d.mtime,
          isLoaded: !0
        })
      );
    } else
      window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async saveAndChangeViewMode({ name: e, dir: n, url: i, fileModifiedTime: s, sameWindow: c, skipConfirmation: g }) {
    const d = _t.getExtension(e);
    let y = "";
    d === "webloc" ? y = _t.generateWeblocFileContent("", i, c, g) : y = _t.generateURLFileContent("", i, c, g), await Cn.save({ fileContent: y, name: e, dir: n, fileModifiedTime: s }), sr.update(() => "none");
  }
}
const eS = [];
eS.push(
  new QO({
    target: document.body,
    props: {}
  })
);
br.registerFileActions();
Bn.registerFileActions();
