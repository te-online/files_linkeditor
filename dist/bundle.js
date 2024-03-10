var qp = Object.defineProperty;
var zp = (r, e, n) => e in r ? qp(r, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[e] = n;
var On = (r, e, n) => (zp(r, typeof e != "symbol" ? e + "" : e, n), n);
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
    return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
    i(s);
  new MutationObserver((s) => {
    for (const c of s)
      if (c.type === "childList")
        for (const v of c.addedNodes)
          v.tagName === "LINK" && v.rel === "modulepreload" && i(v);
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
function Hp(r, e) {
  for (const n in e)
    r[n] = e[n];
  return (
    /** @type {T & S} */
    r
  );
}
function uc(r) {
  return r();
}
function Ms() {
  return /* @__PURE__ */ Object.create(null);
}
function Mr(r) {
  r.forEach(uc);
}
function Ga(r) {
  return typeof r == "function";
}
function vn(r, e) {
  return r != r ? e == e : r !== e || r && typeof r == "object" || typeof r == "function";
}
function Xp(r) {
  return Object.keys(r).length === 0;
}
function Yp(r, e, n, i) {
  if (r) {
    const s = lc(r, e, n, i);
    return r[0](s);
  }
}
function lc(r, e, n, i) {
  return r[1] && i ? Hp(n.ctx.slice(), r[1](i(e))) : n.ctx;
}
function Kp(r, e, n, i) {
  if (r[2] && i) {
    const s = r[2](i(n));
    if (e.dirty === void 0)
      return s;
    if (typeof s == "object") {
      const c = [], v = Math.max(e.dirty.length, s.length);
      for (let d = 0; d < v; d += 1)
        c[d] = e.dirty[d] | s[d];
      return c;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function Zp(r, e, n, i, s, c) {
  if (s) {
    const v = lc(e, n, i, c);
    r.p(v, s);
  }
}
function Jp(r) {
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
function Qp() {
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
function eh(r) {
  return Array.from(r.childNodes);
}
function Wa(r, e) {
  e = "" + e, r.data !== e && (r.data = /** @type {string} */
  e);
}
function ks(r, e) {
  r.value = e ?? "";
}
function cc(r, e, n, i) {
  n == null ? r.style.removeProperty(e) : r.style.setProperty(e, n, i ? "important" : "");
}
let Un;
function Mn(r) {
  Un = r;
}
function fc() {
  if (!Un)
    throw new Error("Function called outside component initialization");
  return Un;
}
function Va(r) {
  fc().$$.on_mount.push(r);
}
function qa(r) {
  fc().$$.on_destroy.push(r);
}
const rn = [], Ds = [];
let an = [];
const Us = [], th = /* @__PURE__ */ Promise.resolve();
let ca = !1;
function rh() {
  ca || (ca = !0, th.then(pc));
}
function fa(r) {
  an.push(r);
}
const wo = /* @__PURE__ */ new Set();
let zr = 0;
function pc() {
  if (zr !== 0)
    return;
  const r = Un;
  do {
    try {
      for (; zr < rn.length; ) {
        const e = rn[zr];
        zr++, Mn(e), nh(e.$$);
      }
    } catch (e) {
      throw rn.length = 0, zr = 0, e;
    }
    for (Mn(null), rn.length = 0, zr = 0; Ds.length; )
      Ds.pop()();
    for (let e = 0; e < an.length; e += 1) {
      const n = an[e];
      wo.has(n) || (wo.add(n), n());
    }
    an.length = 0;
  } while (rn.length);
  for (; Us.length; )
    Us.pop()();
  ca = !1, wo.clear(), Mn(r);
}
function nh(r) {
  if (r.fragment !== null) {
    r.update(), Mr(r.before_update);
    const e = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, e), r.after_update.forEach(fa);
  }
}
function ih(r) {
  const e = [], n = [];
  an.forEach((i) => r.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), an = e;
}
const _i = /* @__PURE__ */ new Set();
let Nr;
function Bs() {
  Nr = {
    r: 0,
    c: [],
    p: Nr
    // parent group
  };
}
function js() {
  Nr.r || Mr(Nr.c), Nr = Nr.p;
}
function Mt(r, e) {
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
function Bi(r) {
  r && r.c();
}
function Wn(r, e, n) {
  const { fragment: i, after_update: s } = r.$$;
  i && i.m(e, n), fa(() => {
    const c = r.$$.on_mount.map(uc).filter(Ga);
    r.$$.on_destroy ? r.$$.on_destroy.push(...c) : Mr(c), r.$$.on_mount = [];
  }), s.forEach(fa);
}
function Vn(r, e) {
  const n = r.$$;
  n.fragment !== null && (ih(n.after_update), Mr(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function oh(r, e) {
  r.$$.dirty[0] === -1 && (rn.push(r), rh(), r.$$.dirty.fill(0)), r.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function qn(r, e, n, i, s, c, v = null, d = [-1]) {
  const m = Un;
  Mn(r);
  const l = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: c,
    update: ar,
    not_equal: s,
    bound: Ms(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (m ? m.$$.context : [])),
    // everything else
    callbacks: Ms(),
    dirty: d,
    skip_bound: !1,
    root: e.target || m.$$.root
  };
  v && v(l.root);
  let a = !1;
  if (l.ctx = n ? n(r, e.props || {}, (h, p, ...b) => {
    const O = b.length ? b[0] : p;
    return l.ctx && s(l.ctx[h], l.ctx[h] = O) && (!l.skip_bound && l.bound[h] && l.bound[h](O), a && oh(r, h)), p;
  }) : [], l.update(), a = !0, Mr(l.before_update), l.fragment = i ? i(l.ctx) : !1, e.target) {
    if (e.hydrate) {
      const h = eh(e.target);
      l.fragment && l.fragment.l(h), h.forEach(Ge);
    } else
      l.fragment && l.fragment.c();
    e.intro && Mt(r.$$.fragment), Wn(r, e.target, e.anchor), pc();
  }
  Mn(m);
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
    On(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    On(this, "$$set");
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
    this.$$set && !Xp(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const ah = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ah);
function sh(r) {
  let e, n, i, s, c;
  const v = (
    /*#slots*/
    r[2].default
  ), d = Yp(
    v,
    r,
    /*$$scope*/
    r[1],
    null
  );
  return {
    c() {
      e = Fe("div"), n = nt(), i = Fe("div"), d && d.c(), ve(e, "class", "oc-dialog-dim"), ve(i, "class", s = `oc-dialog ${/*loading*/
      r[0] ? "icon-loading" : ""}`), cc(i, "position", "fixed");
    },
    m(m, l) {
      We(m, e, l), We(m, n, l), We(m, i, l), d && d.m(i, null), c = !0;
    },
    p(m, [l]) {
      d && d.p && (!c || l & /*$$scope*/
      2) && Zp(
        d,
        v,
        m,
        /*$$scope*/
        m[1],
        c ? Kp(
          v,
          /*$$scope*/
          m[1],
          l,
          null
        ) : Jp(
          /*$$scope*/
          m[1]
        ),
        null
      ), (!c || l & /*loading*/
      1 && s !== (s = `oc-dialog ${/*loading*/
      m[0] ? "icon-loading" : ""}`)) && ve(i, "class", s);
    },
    i(m) {
      c || (Mt(d, m), c = !0);
    },
    o(m) {
      hr(d, m), c = !1;
    },
    d(m) {
      m && (Ge(e), Ge(n), Ge(i)), d && d.d(m);
    }
  };
}
function uh(r, e, n) {
  let { $$slots: i = {}, $$scope: s } = e, { loading: c = !1 } = e;
  return r.$$set = (v) => {
    "loading" in v && n(0, c = v.loading), "$$scope" in v && n(1, s = v.$$scope);
  }, [c, s, i];
}
class hc extends zn {
  constructor(e) {
    super(), qn(this, e, uh, sh, vn, { loading: 0 });
  }
}
const Hr = [];
function dc(r, e = ar) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function s(d) {
    if (vn(r, d) && (r = d, n)) {
      const m = !Hr.length;
      for (const l of i)
        l[1](), Hr.push(l, r);
      if (m) {
        for (let l = 0; l < Hr.length; l += 2)
          Hr[l][0](Hr[l + 1]);
        Hr.length = 0;
      }
    }
  }
  function c(d) {
    s(d(r));
  }
  function v(d, m = ar) {
    const l = [d, m];
    return i.add(l), i.size === 1 && (n = e(s, c) || ar), d(r), () => {
      i.delete(l), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: s, update: c, subscribe: v };
}
var ci = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function za(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function lh(r) {
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
var gt = Ha.sanitizeUrl = void 0, ch = /^([^\w]*)(javascript|data|vbscript)/im, fh = /&#(\w+)(^\w|;)?/g, ph = /&(newline|tab);/gi, hh = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, dh = /^.+(:|&colon;)/gim, gh = [".", "/"];
function vh(r) {
  return gh.indexOf(r[0]) > -1;
}
function mh(r) {
  return r.replace(fh, function(e, n) {
    return String.fromCharCode(n);
  });
}
function yh(r) {
  var e = mh(r || "").replace(ph, "").replace(hh, "").trim();
  if (!e)
    return "about:blank";
  if (vh(e))
    return e;
  var n = e.match(dh);
  if (!n)
    return e;
  var i = n[0];
  return ch.test(i) ? "about:blank" : e;
}
gt = Ha.sanitizeUrl = yh;
class Ft {
  static getFileConfig({
    name: e,
    url: n,
    downloadUrl: i,
    dir: s,
    onCreate: c,
    fileModifiedTime: v,
    isNew: d,
    isLoaded: m,
    sameWindow: l,
    skipConfirmation: a
  } = {}) {
    return {
      name: e || "?",
      downloadUrl: i || "",
      url: n ? gt(n) : "",
      dir: s || "",
      onCreate: c,
      fileModifiedTime: v || null,
      isNew: d || !1,
      isLoaded: m || !1,
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
    const v = await window.fetch(window.OC.generateUrl("/apps/files_linkeditor/ajax/savefile"), {
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
    if (v && v.ok)
      return !0;
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static userCanEdit() {
    var e, n, i, s;
    return window.FileList && window.OC && window.OC.currentUser && (window.OC.PERMISSION_ALL === ((n = (e = window.FileList) == null ? void 0 : e.getDirectoryPermissions) == null ? void 0 : n.call(e)) || window.OC.PERMISSION_UPDATE === ((s = (i = window.FileList) == null ? void 0 : i.getDirectoryPermissions) == null ? void 0 : s.call(i)));
  }
}
const sr = dc(""), Rr = dc(Ft.getFileConfig());
function wh(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var gc = { exports: {} }, He = gc.exports = {}, nr, ir;
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
function vc(r) {
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
function bh(r) {
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
function Eh() {
  !sn || !Pr || (sn = !1, Pr.length ? dr = Pr.concat(dr) : xi = -1, dr.length && mc());
}
function mc() {
  if (!sn) {
    var r = vc(Eh);
    sn = !0;
    for (var e = dr.length; e; ) {
      for (Pr = dr, dr = []; ++xi < e; )
        Pr && Pr[xi].run();
      xi = -1, e = dr.length;
    }
    Pr = null, sn = !1, bh(r);
  }
}
He.nextTick = function(r) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var n = 1; n < arguments.length; n++)
      e[n - 1] = arguments[n];
  dr.push(new yc(r, e)), dr.length === 1 && !sn && vc(mc);
};
function yc(r, e) {
  this.fun = r, this.array = e;
}
yc.prototype.run = function() {
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
var Th = gc.exports;
const kt = /* @__PURE__ */ wh(Th), Sh = typeof kt == "object" && kt.env && kt.env.NODE_DEBUG && /\bsemver\b/i.test(kt.env.NODE_DEBUG) ? (...r) => console.error("SEMVER", ...r) : () => {
};
var wc = Sh;
const Oh = "2.0.0", bc = 256, $h = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, Ih = 16, Ah = bc - 6, _h = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var Ec = {
  MAX_LENGTH: bc,
  MAX_SAFE_COMPONENT_LENGTH: Ih,
  MAX_SAFE_BUILD_LENGTH: Ah,
  MAX_SAFE_INTEGER: $h,
  RELEASE_TYPES: _h,
  SEMVER_SPEC_VERSION: Oh,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
}, da = { exports: {} };
(function(r, e) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: n,
    MAX_SAFE_BUILD_LENGTH: i,
    MAX_LENGTH: s
  } = Ec, c = wc;
  e = r.exports = {};
  const v = e.re = [], d = e.safeRe = [], m = e.src = [], l = e.t = {};
  let a = 0;
  const h = "[a-zA-Z0-9-]", p = [
    ["\\s", 1],
    ["\\d", s],
    [h, i]
  ], b = (_) => {
    for (const [P, D] of p)
      _ = _.split(`${P}*`).join(`${P}{0,${D}}`).split(`${P}+`).join(`${P}{1,${D}}`);
    return _;
  }, O = (_, P, D) => {
    const I = b(P), x = a++;
    c(_, x, P), l[_] = x, m[x] = P, v[x] = new RegExp(P, D ? "g" : void 0), d[x] = new RegExp(I, D ? "g" : void 0);
  };
  O("NUMERICIDENTIFIER", "0|[1-9]\\d*"), O("NUMERICIDENTIFIERLOOSE", "\\d+"), O("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${h}*`), O("MAINVERSION", `(${m[l.NUMERICIDENTIFIER]})\\.(${m[l.NUMERICIDENTIFIER]})\\.(${m[l.NUMERICIDENTIFIER]})`), O("MAINVERSIONLOOSE", `(${m[l.NUMERICIDENTIFIERLOOSE]})\\.(${m[l.NUMERICIDENTIFIERLOOSE]})\\.(${m[l.NUMERICIDENTIFIERLOOSE]})`), O("PRERELEASEIDENTIFIER", `(?:${m[l.NUMERICIDENTIFIER]}|${m[l.NONNUMERICIDENTIFIER]})`), O("PRERELEASEIDENTIFIERLOOSE", `(?:${m[l.NUMERICIDENTIFIERLOOSE]}|${m[l.NONNUMERICIDENTIFIER]})`), O("PRERELEASE", `(?:-(${m[l.PRERELEASEIDENTIFIER]}(?:\\.${m[l.PRERELEASEIDENTIFIER]})*))`), O("PRERELEASELOOSE", `(?:-?(${m[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${m[l.PRERELEASEIDENTIFIERLOOSE]})*))`), O("BUILDIDENTIFIER", `${h}+`), O("BUILD", `(?:\\+(${m[l.BUILDIDENTIFIER]}(?:\\.${m[l.BUILDIDENTIFIER]})*))`), O("FULLPLAIN", `v?${m[l.MAINVERSION]}${m[l.PRERELEASE]}?${m[l.BUILD]}?`), O("FULL", `^${m[l.FULLPLAIN]}$`), O("LOOSEPLAIN", `[v=\\s]*${m[l.MAINVERSIONLOOSE]}${m[l.PRERELEASELOOSE]}?${m[l.BUILD]}?`), O("LOOSE", `^${m[l.LOOSEPLAIN]}$`), O("GTLT", "((?:<|>)?=?)"), O("XRANGEIDENTIFIERLOOSE", `${m[l.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), O("XRANGEIDENTIFIER", `${m[l.NUMERICIDENTIFIER]}|x|X|\\*`), O("XRANGEPLAIN", `[v=\\s]*(${m[l.XRANGEIDENTIFIER]})(?:\\.(${m[l.XRANGEIDENTIFIER]})(?:\\.(${m[l.XRANGEIDENTIFIER]})(?:${m[l.PRERELEASE]})?${m[l.BUILD]}?)?)?`), O("XRANGEPLAINLOOSE", `[v=\\s]*(${m[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${m[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${m[l.XRANGEIDENTIFIERLOOSE]})(?:${m[l.PRERELEASELOOSE]})?${m[l.BUILD]}?)?)?`), O("XRANGE", `^${m[l.GTLT]}\\s*${m[l.XRANGEPLAIN]}$`), O("XRANGELOOSE", `^${m[l.GTLT]}\\s*${m[l.XRANGEPLAINLOOSE]}$`), O("COERCE", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`), O("COERCERTL", m[l.COERCE], !0), O("LONETILDE", "(?:~>?)"), O("TILDETRIM", `(\\s*)${m[l.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", O("TILDE", `^${m[l.LONETILDE]}${m[l.XRANGEPLAIN]}$`), O("TILDELOOSE", `^${m[l.LONETILDE]}${m[l.XRANGEPLAINLOOSE]}$`), O("LONECARET", "(?:\\^)"), O("CARETTRIM", `(\\s*)${m[l.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", O("CARET", `^${m[l.LONECARET]}${m[l.XRANGEPLAIN]}$`), O("CARETLOOSE", `^${m[l.LONECARET]}${m[l.XRANGEPLAINLOOSE]}$`), O("COMPARATORLOOSE", `^${m[l.GTLT]}\\s*(${m[l.LOOSEPLAIN]})$|^$`), O("COMPARATOR", `^${m[l.GTLT]}\\s*(${m[l.FULLPLAIN]})$|^$`), O("COMPARATORTRIM", `(\\s*)${m[l.GTLT]}\\s*(${m[l.LOOSEPLAIN]}|${m[l.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", O("HYPHENRANGE", `^\\s*(${m[l.XRANGEPLAIN]})\\s+-\\s+(${m[l.XRANGEPLAIN]})\\s*$`), O("HYPHENRANGELOOSE", `^\\s*(${m[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${m[l.XRANGEPLAINLOOSE]})\\s*$`), O("STAR", "(<|>)?=?\\s*\\*"), O("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), O("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(da, da.exports);
var xh = da.exports;
const Nh = Object.freeze({ loose: !0 }), Ph = Object.freeze({}), Rh = (r) => r ? typeof r != "object" ? Nh : r : Ph;
var Ch = Rh;
const Gs = /^[0-9]+$/, Tc = (r, e) => {
  const n = Gs.test(r), i = Gs.test(e);
  return n && i && (r = +r, e = +e), r === e ? 0 : n && !i ? -1 : i && !n ? 1 : r < e ? -1 : 1;
}, Lh = (r, e) => Tc(e, r);
var Fh = {
  compareIdentifiers: Tc,
  rcompareIdentifiers: Lh
};
const fi = wc, { MAX_LENGTH: Ws, MAX_SAFE_INTEGER: pi } = Ec, { safeRe: Vs, t: qs } = xh, Mh = Ch, { compareIdentifiers: Xr } = Fh;
let kh = class rr {
  constructor(e, n) {
    if (n = Mh(n), e instanceof rr) {
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
var Sc = kh;
const zs = Sc, Dh = (r, e, n = !1) => {
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
var Uh = Dh;
const Bh = Uh, jh = (r, e) => {
  const n = Bh(r, e);
  return n ? n.version : null;
};
var Gh = jh;
const Wh = /* @__PURE__ */ za(Gh), Vh = Sc, qh = (r, e) => new Vh(r, e).major;
var zh = qh;
const Hs = /* @__PURE__ */ za(zh);
class Hh {
  constructor(e) {
    On(this, "bus");
    typeof e.getVersion != "function" || !Wh(e.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Hs(e.getVersion()) !== Hs(this.getVersion()) && console.warn("Proxying an event bus of version " + e.getVersion() + " with " + this.getVersion()), this.bus = e;
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
class Xh {
  constructor() {
    On(this, "handlers", /* @__PURE__ */ new Map());
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
function Yh() {
  return $n !== null ? $n : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error("Window not available, EventBus can not be established!")
  }) : (typeof window.OC < "u" && window.OC._eventBus && typeof window._nc_event_bus > "u" && (console.warn("found old event bus instance at OC._eventBus. Update your version!"), window._nc_event_bus = window.OC._eventBus), typeof (window == null ? void 0 : window._nc_event_bus) < "u" ? $n = new Hh(window._nc_event_bus) : $n = window._nc_event_bus = new Xh(), $n);
}
function Kh(r, e) {
  Yh().subscribe(r, e);
}
let Ni;
const Oc = [];
function Zh() {
  if (Ni === void 0) {
    const r = document == null ? void 0 : document.getElementsByTagName("head")[0];
    Ni = r ? r.getAttribute("data-requesttoken") : null;
  }
  return Ni;
}
function Jh(r) {
  Oc.push(r);
}
Kh("csrf-token-update", (r) => {
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
const Qh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getCurrentUser: Xa,
  getRequestToken: Zh,
  onRequestTokenUpdate: Jh
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
}, ed = Ve, mt = !ed(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), td = Ve, ji = !td(function() {
  var r = (function() {
  }).bind();
  return typeof r != "function" || r.hasOwnProperty("prototype");
}), rd = ji, hi = Function.prototype.call, xt = rd ? hi.bind(hi) : function() {
  return hi.apply(hi, arguments);
}, Gi = {}, $c = {}.propertyIsEnumerable, Ic = Object.getOwnPropertyDescriptor, nd = Ic && !$c.call({ 1: 2 }, 1);
Gi.f = nd ? function(e) {
  var n = Ic(this, e);
  return !!n && n.enumerable;
} : $c;
var Xn = function(r, e) {
  return {
    enumerable: !(r & 1),
    configurable: !(r & 2),
    writable: !(r & 4),
    value: e
  };
}, Ac = ji, _c = Function.prototype, va = _c.call, id = Ac && _c.bind.bind(va, va), De = Ac ? id : function(r) {
  return function() {
    return va.apply(r, arguments);
  };
}, xc = De, od = xc({}.toString), ad = xc("".slice), Tr = function(r) {
  return ad(od(r), 8, -1);
}, sd = De, ud = Ve, ld = Tr, bo = Object, cd = sd("".split), Wi = ud(function() {
  return !bo("z").propertyIsEnumerable(0);
}) ? function(r) {
  return ld(r) === "String" ? cd(r, "") : bo(r);
} : bo, Yn = function(r) {
  return r == null;
}, fd = Yn, pd = TypeError, mn = function(r) {
  if (fd(r))
    throw new pd("Can't call method on " + r);
  return r;
}, hd = Wi, dd = mn, kr = function(r) {
  return hd(dd(r));
}, Eo = typeof document == "object" && document.all, Xe = typeof Eo > "u" && Eo !== void 0 ? function(r) {
  return typeof r == "function" || r === Eo;
} : function(r) {
  return typeof r == "function";
}, gd = Xe, ur = function(r) {
  return typeof r == "object" ? r !== null : gd(r);
}, To = et, vd = Xe, md = function(r) {
  return vd(r) ? r : void 0;
}, Dr = function(r, e) {
  return arguments.length < 2 ? md(To[r]) : To[r] && To[r][e];
}, yd = De, Vi = yd({}.isPrototypeOf), wd = typeof navigator < "u" && String(navigator.userAgent) || "", Nc = et, So = wd, Ys = Nc.process, Ks = Nc.Deno, Zs = Ys && Ys.versions || Ks && Ks.version, Js = Zs && Zs.v8, Vt, Fi;
Js && (Vt = Js.split("."), Fi = Vt[0] > 0 && Vt[0] < 4 ? 1 : +(Vt[0] + Vt[1]));
!Fi && So && (Vt = So.match(/Edge\/(\d+)/), (!Vt || Vt[1] >= 74) && (Vt = So.match(/Chrome\/(\d+)/), Vt && (Fi = +Vt[1])));
var qi = Fi, Qs = qi, bd = Ve, Ed = et, Td = Ed.String, yn = !!Object.getOwnPropertySymbols && !bd(function() {
  var r = Symbol("symbol detection");
  return !Td(r) || !(Object(r) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && Qs && Qs < 41;
}), Sd = yn, Pc = Sd && !Symbol.sham && typeof Symbol.iterator == "symbol", Od = Dr, $d = Xe, Id = Vi, Ad = Pc, _d = Object, Kn = Ad ? function(r) {
  return typeof r == "symbol";
} : function(r) {
  var e = Od("Symbol");
  return $d(e) && Id(e.prototype, _d(r));
}, xd = String, Ya = function(r) {
  try {
    return xd(r);
  } catch {
    return "Object";
  }
}, Nd = Xe, Pd = Ya, Rd = TypeError, zi = function(r) {
  if (Nd(r))
    return r;
  throw new Rd(Pd(r) + " is not a function");
}, Cd = zi, Ld = Yn, Ka = function(r, e) {
  var n = r[e];
  return Ld(n) ? void 0 : Cd(n);
}, Oo = xt, $o = Xe, Io = ur, Fd = TypeError, Rc = function(r, e) {
  var n, i;
  if (e === "string" && $o(n = r.toString) && !Io(i = Oo(n, r)) || $o(n = r.valueOf) && !Io(i = Oo(n, r)) || e !== "string" && $o(n = r.toString) && !Io(i = Oo(n, r)))
    return i;
  throw new Fd("Can't convert object to primitive value");
}, Cc = { exports: {} }, Md = !1, eu = et, kd = Object.defineProperty, Za = function(r, e) {
  try {
    kd(eu, r, { value: e, configurable: !0, writable: !0 });
  } catch {
    eu[r] = e;
  }
  return e;
}, Dd = et, Ud = Za, tu = "__core-js_shared__", ru = Cc.exports = Dd[tu] || Ud(tu, {});
(ru.versions || (ru.versions = [])).push({
  version: "3.36.0",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var Ja = Cc.exports, nu = Ja, wn = function(r, e) {
  return nu[r] || (nu[r] = e || {});
}, Bd = mn, jd = Object, Sr = function(r) {
  return jd(Bd(r));
}, Gd = De, Wd = Sr, Vd = Gd({}.hasOwnProperty), ft = Object.hasOwn || function(e, n) {
  return Vd(Wd(e), n);
}, qd = De, zd = 0, Hd = Math.random(), Xd = qd(1 .toString), Qa = function(r) {
  return "Symbol(" + (r === void 0 ? "" : r) + ")_" + Xd(++zd + Hd, 36);
}, Yd = et, Kd = wn, iu = ft, Zd = Qa, Jd = yn, Qd = Pc, nn = Yd.Symbol, Ao = Kd("wks"), eg = Qd ? nn.for || nn : nn && nn.withoutSetter || Zd, ot = function(r) {
  return iu(Ao, r) || (Ao[r] = Jd && iu(nn, r) ? nn[r] : eg("Symbol." + r)), Ao[r];
}, tg = xt, ou = ur, au = Kn, rg = Ka, ng = Rc, ig = ot, og = TypeError, ag = ig("toPrimitive"), Lc = function(r, e) {
  if (!ou(r) || au(r))
    return r;
  var n = rg(r, ag), i;
  if (n) {
    if (e === void 0 && (e = "default"), i = tg(n, r, e), !ou(i) || au(i))
      return i;
    throw new og("Can't convert object to primitive value");
  }
  return e === void 0 && (e = "number"), ng(r, e);
}, sg = Lc, ug = Kn, es = function(r) {
  var e = sg(r, "string");
  return ug(e) ? e : e + "";
}, lg = et, su = ur, ma = lg.document, cg = su(ma) && su(ma.createElement), ts = function(r) {
  return cg ? ma.createElement(r) : {};
}, fg = mt, pg = Ve, hg = ts, Fc = !fg && !pg(function() {
  return Object.defineProperty(hg("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), dg = mt, gg = xt, vg = Gi, mg = Xn, yg = kr, wg = es, bg = ft, Eg = Fc, uu = Object.getOwnPropertyDescriptor;
Hn.f = dg ? uu : function(e, n) {
  if (e = yg(e), n = wg(n), Eg)
    try {
      return uu(e, n);
    } catch {
    }
  if (bg(e, n))
    return mg(!gg(vg.f, e, n), e[n]);
};
var St = {}, Tg = mt, Sg = Ve, Mc = Tg && Sg(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), Og = ur, $g = String, Ig = TypeError, Bt = function(r) {
  if (Og(r))
    return r;
  throw new Ig($g(r) + " is not an object");
}, Ag = mt, _g = Fc, xg = Mc, di = Bt, lu = es, Ng = TypeError, _o = Object.defineProperty, Pg = Object.getOwnPropertyDescriptor, xo = "enumerable", No = "configurable", Po = "writable";
St.f = Ag ? xg ? function(e, n, i) {
  if (di(e), n = lu(n), di(i), typeof e == "function" && n === "prototype" && "value" in i && Po in i && !i[Po]) {
    var s = Pg(e, n);
    s && s[Po] && (e[n] = i.value, i = {
      configurable: No in i ? i[No] : s[No],
      enumerable: xo in i ? i[xo] : s[xo],
      writable: !1
    });
  }
  return _o(e, n, i);
} : _o : function(e, n, i) {
  if (di(e), n = lu(n), di(i), _g)
    try {
      return _o(e, n, i);
    } catch {
    }
  if ("get" in i || "set" in i)
    throw new Ng("Accessors not supported");
  return "value" in i && (e[n] = i.value), e;
};
var Rg = mt, Cg = St, Lg = Xn, Zn = Rg ? function(r, e, n) {
  return Cg.f(r, e, Lg(1, n));
} : function(r, e, n) {
  return r[e] = n, r;
}, kc = { exports: {} }, ya = mt, Fg = ft, Dc = Function.prototype, Mg = ya && Object.getOwnPropertyDescriptor, rs = Fg(Dc, "name"), kg = rs && (function() {
}).name === "something", Dg = rs && (!ya || ya && Mg(Dc, "name").configurable), Uc = {
  EXISTS: rs,
  PROPER: kg,
  CONFIGURABLE: Dg
}, Ug = De, Bg = Xe, wa = Ja, jg = Ug(Function.toString);
Bg(wa.inspectSource) || (wa.inspectSource = function(r) {
  return jg(r);
});
var Bc = wa.inspectSource, Gg = et, Wg = Xe, cu = Gg.WeakMap, Vg = Wg(cu) && /native code/.test(String(cu)), qg = wn, zg = Qa, fu = qg("keys"), Hi = function(r) {
  return fu[r] || (fu[r] = zg(r));
}, Xi = {}, Hg = Vg, jc = et, Xg = ur, Yg = Zn, Ro = ft, Co = Ja, Kg = Hi, Zg = Xi, pu = "Object already initialized", ba = jc.TypeError, Jg = jc.WeakMap, Mi, Bn, ki, Qg = function(r) {
  return ki(r) ? Bn(r) : Mi(r, {});
}, ev = function(r) {
  return function(e) {
    var n;
    if (!Xg(e) || (n = Bn(e)).type !== r)
      throw new ba("Incompatible receiver, " + r + " required");
    return n;
  };
};
if (Hg || Co.state) {
  var Qt = Co.state || (Co.state = new Jg());
  Qt.get = Qt.get, Qt.has = Qt.has, Qt.set = Qt.set, Mi = function(r, e) {
    if (Qt.has(r))
      throw new ba(pu);
    return e.facade = r, Qt.set(r, e), e;
  }, Bn = function(r) {
    return Qt.get(r) || {};
  }, ki = function(r) {
    return Qt.has(r);
  };
} else {
  var Kr = Kg("state");
  Zg[Kr] = !0, Mi = function(r, e) {
    if (Ro(r, Kr))
      throw new ba(pu);
    return e.facade = r, Yg(r, Kr, e), e;
  }, Bn = function(r) {
    return Ro(r, Kr) ? r[Kr] : {};
  }, ki = function(r) {
    return Ro(r, Kr);
  };
}
var Jn = {
  set: Mi,
  get: Bn,
  has: ki,
  enforce: Qg,
  getterFor: ev
}, ns = De, tv = Ve, rv = Xe, gi = ft, Ea = mt, nv = Uc.CONFIGURABLE, iv = Bc, Gc = Jn, ov = Gc.enforce, av = Gc.get, hu = String, Pi = Object.defineProperty, sv = ns("".slice), uv = ns("".replace), lv = ns([].join), cv = Ea && !tv(function() {
  return Pi(function() {
  }, "length", { value: 8 }).length !== 8;
}), fv = String(String).split("String"), pv = kc.exports = function(r, e, n) {
  sv(hu(e), 0, 7) === "Symbol(" && (e = "[" + uv(hu(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), n && n.getter && (e = "get " + e), n && n.setter && (e = "set " + e), (!gi(r, "name") || nv && r.name !== e) && (Ea ? Pi(r, "name", { value: e, configurable: !0 }) : r.name = e), cv && n && gi(n, "arity") && r.length !== n.arity && Pi(r, "length", { value: n.arity });
  try {
    n && gi(n, "constructor") && n.constructor ? Ea && Pi(r, "prototype", { writable: !1 }) : r.prototype && (r.prototype = void 0);
  } catch {
  }
  var i = ov(r);
  return gi(i, "source") || (i.source = lv(fv, typeof e == "string" ? e : "")), r;
};
Function.prototype.toString = pv(function() {
  return rv(this) && av(this).source || iv(this);
}, "toString");
var Wc = kc.exports, hv = Xe, dv = St, gv = Wc, vv = Za, Or = function(r, e, n, i) {
  i || (i = {});
  var s = i.enumerable, c = i.name !== void 0 ? i.name : e;
  if (hv(n) && gv(n, c, i), i.global)
    s ? r[e] = n : vv(e, n);
  else {
    try {
      i.unsafe ? r[e] && (s = !0) : delete r[e];
    } catch {
    }
    s ? r[e] = n : dv.f(r, e, {
      value: n,
      enumerable: !1,
      configurable: !i.nonConfigurable,
      writable: !i.nonWritable
    });
  }
  return r;
}, Qn = {}, mv = Math.ceil, yv = Math.floor, wv = Math.trunc || function(e) {
  var n = +e;
  return (n > 0 ? yv : mv)(n);
}, bv = wv, Yi = function(r) {
  var e = +r;
  return e !== e || e === 0 ? 0 : bv(e);
}, Ev = Yi, Tv = Math.max, Sv = Math.min, Ov = function(r, e) {
  var n = Ev(r);
  return n < 0 ? Tv(n + e, 0) : Sv(n, e);
}, $v = Yi, Iv = Math.min, is = function(r) {
  var e = $v(r);
  return e > 0 ? Iv(e, 9007199254740991) : 0;
}, Av = is, Ki = function(r) {
  return Av(r.length);
}, _v = kr, xv = Ov, Nv = Ki, du = function(r) {
  return function(e, n, i) {
    var s = _v(e), c = Nv(s);
    if (c === 0)
      return !r && -1;
    var v = xv(i, c), d;
    if (r && n !== n) {
      for (; c > v; )
        if (d = s[v++], d !== d)
          return !0;
    } else
      for (; c > v; v++)
        if ((r || v in s) && s[v] === n)
          return r || v || 0;
    return !r && -1;
  };
}, Pv = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: du(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: du(!1)
}, Rv = De, Lo = ft, Cv = kr, Lv = Pv.indexOf, Fv = Xi, gu = Rv([].push), Vc = function(r, e) {
  var n = Cv(r), i = 0, s = [], c;
  for (c in n)
    !Lo(Fv, c) && Lo(n, c) && gu(s, c);
  for (; e.length > i; )
    Lo(n, c = e[i++]) && (~Lv(s, c) || gu(s, c));
  return s;
}, os = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], Mv = Vc, kv = os, Dv = kv.concat("length", "prototype");
Qn.f = Object.getOwnPropertyNames || function(e) {
  return Mv(e, Dv);
};
var ei = {};
ei.f = Object.getOwnPropertySymbols;
var Uv = Dr, Bv = De, jv = Qn, Gv = ei, Wv = Bt, Vv = Bv([].concat), qv = Uv("Reflect", "ownKeys") || function(e) {
  var n = jv.f(Wv(e)), i = Gv.f;
  return i ? Vv(n, i(e)) : n;
}, vu = ft, zv = qv, Hv = Hn, Xv = St, qc = function(r, e, n) {
  for (var i = zv(e), s = Xv.f, c = Hv.f, v = 0; v < i.length; v++) {
    var d = i[v];
    !vu(r, d) && !(n && vu(n, d)) && s(r, d, c(e, d));
  }
}, Yv = Ve, Kv = Xe, Zv = /#|\.prototype\./, ti = function(r, e) {
  var n = Qv[Jv(r)];
  return n === tm ? !0 : n === em ? !1 : Kv(e) ? Yv(e) : !!e;
}, Jv = ti.normalize = function(r) {
  return String(r).replace(Zv, ".").toLowerCase();
}, Qv = ti.data = {}, em = ti.NATIVE = "N", tm = ti.POLYFILL = "P", zc = ti, vi = et, rm = Hn.f, nm = Zn, im = Or, om = Za, am = qc, sm = zc, yt = function(r, e) {
  var n = r.target, i = r.global, s = r.stat, c, v, d, m, l, a;
  if (i ? v = vi : s ? v = vi[n] || om(n, {}) : v = vi[n] && vi[n].prototype, v)
    for (d in e) {
      if (l = e[d], r.dontCallGetSet ? (a = rm(v, d), m = a && a.value) : m = v[d], c = sm(i ? d : n + (s ? "." : "#") + d, r.forced), !c && m !== void 0) {
        if (typeof l == typeof m)
          continue;
        am(l, m);
      }
      (r.sham || m && m.sham) && nm(l, "sham", !0), im(v, d, l, r);
    }
}, um = yt, lm = mt, mu = St.f;
um({ target: "Object", stat: !0, forced: Object.defineProperty !== mu, sham: !lm }, {
  defineProperty: mu
});
var ri = {}, cm = et, Hc = cm, as = {}, fm = ot;
as.f = fm;
var yu = Hc, pm = ft, hm = as, dm = St.f, ss = function(r) {
  var e = yu.Symbol || (yu.Symbol = {});
  pm(e, r) || dm(e, r, {
    value: hm.f(r)
  });
}, gm = ss;
gm("iterator");
var us = {}, vm = Vc, mm = os, ls = Object.keys || function(e) {
  return vm(e, mm);
}, ym = mt, wm = Mc, bm = St, Em = Bt, Tm = kr, Sm = ls;
us.f = ym && !wm ? Object.defineProperties : function(e, n) {
  Em(e);
  for (var i = Tm(n), s = Sm(n), c = s.length, v = 0, d; c > v; )
    bm.f(e, d = s[v++], i[d]);
  return e;
};
var Om = Dr, $m = Om("document", "documentElement"), Im = Bt, Am = us, wu = os, _m = Xi, xm = $m, Nm = ts, Pm = Hi, bu = ">", Eu = "<", Ta = "prototype", Sa = "script", Xc = Pm("IE_PROTO"), Fo = function() {
}, Yc = function(r) {
  return Eu + Sa + bu + r + Eu + "/" + Sa + bu;
}, Tu = function(r) {
  r.write(Yc("")), r.close();
  var e = r.parentWindow.Object;
  return r = null, e;
}, Rm = function() {
  var r = Nm("iframe"), e = "java" + Sa + ":", n;
  return r.style.display = "none", xm.appendChild(r), r.src = String(e), n = r.contentWindow.document, n.open(), n.write(Yc("document.F=Object")), n.close(), n.F;
}, mi, Ri = function() {
  try {
    mi = new ActiveXObject("htmlfile");
  } catch {
  }
  Ri = typeof document < "u" ? document.domain && mi ? Tu(mi) : Rm() : Tu(mi);
  for (var r = wu.length; r--; )
    delete Ri[Ta][wu[r]];
  return Ri();
};
_m[Xc] = !0;
var Zi = Object.create || function(e, n) {
  var i;
  return e !== null ? (Fo[Ta] = Im(e), i = new Fo(), Fo[Ta] = null, i[Xc] = e) : i = Ri(), n === void 0 ? i : Am.f(i, n);
}, Cm = ot, Lm = Zi, Fm = St.f, Oa = Cm("unscopables"), $a = Array.prototype;
$a[Oa] === void 0 && Fm($a, Oa, {
  configurable: !0,
  value: Lm(null)
});
var Mm = function(r) {
  $a[Oa][r] = !0;
}, cs = {}, km = Ve, Dm = !km(function() {
  function r() {
  }
  return r.prototype.constructor = null, Object.getPrototypeOf(new r()) !== r.prototype;
}), Um = ft, Bm = Xe, jm = Sr, Gm = Hi, Wm = Dm, Su = Gm("IE_PROTO"), Ia = Object, Vm = Ia.prototype, Kc = Wm ? Ia.getPrototypeOf : function(r) {
  var e = jm(r);
  if (Um(e, Su))
    return e[Su];
  var n = e.constructor;
  return Bm(n) && e instanceof n ? n.prototype : e instanceof Ia ? Vm : null;
}, qm = Ve, zm = Xe, Hm = ur, Ou = Kc, Xm = Or, Ym = ot, Aa = Ym("iterator"), Zc = !1, Fr, Mo, ko;
[].keys && (ko = [].keys(), "next" in ko ? (Mo = Ou(Ou(ko)), Mo !== Object.prototype && (Fr = Mo)) : Zc = !0);
var Km = !Hm(Fr) || qm(function() {
  var r = {};
  return Fr[Aa].call(r) !== r;
});
Km && (Fr = {});
zm(Fr[Aa]) || Xm(Fr, Aa, function() {
  return this;
});
var Jc = {
  IteratorPrototype: Fr,
  BUGGY_SAFARI_ITERATORS: Zc
}, Zm = St.f, Jm = ft, Qm = ot, $u = Qm("toStringTag"), Ji = function(r, e, n) {
  r && !n && (r = r.prototype), r && !Jm(r, $u) && Zm(r, $u, { configurable: !0, value: e });
}, e0 = Jc.IteratorPrototype, t0 = Zi, r0 = Xn, n0 = Ji, i0 = cs, o0 = function() {
  return this;
}, a0 = function(r, e, n, i) {
  var s = e + " Iterator";
  return r.prototype = t0(e0, { next: r0(+!i, n) }), n0(r, s, !1), i0[s] = o0, r;
}, s0 = De, u0 = zi, l0 = function(r, e, n) {
  try {
    return s0(u0(Object.getOwnPropertyDescriptor(r, e)[n]));
  } catch {
  }
}, c0 = ur, f0 = function(r) {
  return c0(r) || r === null;
}, p0 = f0, h0 = String, d0 = TypeError, g0 = function(r) {
  if (p0(r))
    return r;
  throw new d0("Can't set " + h0(r) + " as a prototype");
}, v0 = l0, m0 = Bt, y0 = g0, Qc = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var r = !1, e = {}, n;
  try {
    n = v0(Object.prototype, "__proto__", "set"), n(e, []), r = e instanceof Array;
  } catch {
  }
  return function(s, c) {
    return m0(s), y0(c), r ? n(s, c) : s.__proto__ = c, s;
  };
}() : void 0), w0 = yt, b0 = xt, ef = Uc, E0 = Xe, T0 = a0, Iu = Kc, Au = Qc, S0 = Ji, O0 = Zn, Do = Or, $0 = ot, I0 = cs, tf = Jc, A0 = ef.PROPER, _0 = ef.CONFIGURABLE, _u = tf.IteratorPrototype, yi = tf.BUGGY_SAFARI_ITERATORS, An = $0("iterator"), xu = "keys", _n = "values", Nu = "entries", x0 = function() {
  return this;
}, rf = function(r, e, n, i, s, c, v) {
  T0(n, e, i);
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
  }, m = e + " Iterator", l = !1, a = r.prototype, h = a[An] || a["@@iterator"] || s && a[s], p = !yi && h || d(s), b = e === "Array" && a.entries || h, O, _, P;
  if (b && (O = Iu(b.call(new r())), O !== Object.prototype && O.next && (Iu(O) !== _u && (Au ? Au(O, _u) : E0(O[An]) || Do(O, An, x0)), S0(O, m, !0))), A0 && s === _n && h && h.name !== _n && (_0 ? O0(a, "name", _n) : (l = !0, p = function() {
    return b0(h, this);
  })), s)
    if (_ = {
      values: d(_n),
      keys: c ? p : d(xu),
      entries: d(Nu)
    }, v)
      for (P in _)
        (yi || l || !(P in a)) && Do(a, P, _[P]);
    else
      w0({ target: e, proto: !0, forced: yi || l }, _);
  return a[An] !== p && Do(a, An, p, { name: s }), I0[e] = p, _;
}, nf = function(r, e) {
  return { value: r, done: e };
}, N0 = kr, fs = Mm, Pu = cs, of = Jn, P0 = St.f, R0 = rf, wi = nf, C0 = mt, af = "Array Iterator", L0 = of.set, F0 = of.getterFor(af), M0 = R0(Array, "Array", function(r, e) {
  L0(this, {
    type: af,
    target: N0(r),
    // target
    index: 0,
    // next index
    kind: e
    // kind
  });
}, function() {
  var r = F0(this), e = r.target, n = r.index++;
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
if (C0 && Ru.name !== "values")
  try {
    P0(Ru, "name", { value: "values" });
  } catch {
  }
var k0 = ot, D0 = k0("toStringTag"), sf = {};
sf[D0] = "z";
var ps = String(sf) === "[object z]", U0 = ps, B0 = Xe, Ci = Tr, j0 = ot, G0 = j0("toStringTag"), W0 = Object, V0 = Ci(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments", q0 = function(r, e) {
  try {
    return r[e];
  } catch {
  }
}, hs = U0 ? Ci : function(r) {
  var e, n, i;
  return r === void 0 ? "Undefined" : r === null ? "Null" : typeof (n = q0(e = W0(r), G0)) == "string" ? n : V0 ? Ci(e) : (i = Ci(e)) === "Object" && B0(e.callee) ? "Arguments" : i;
}, z0 = hs, H0 = String, lr = function(r) {
  if (z0(r) === "Symbol")
    throw new TypeError("Cannot convert a Symbol value to a string");
  return H0(r);
}, ds = De, X0 = Yi, Y0 = lr, K0 = mn, Z0 = ds("".charAt), Cu = ds("".charCodeAt), J0 = ds("".slice), Lu = function(r) {
  return function(e, n) {
    var i = Y0(K0(e)), s = X0(n), c = i.length, v, d;
    return s < 0 || s >= c ? r ? "" : void 0 : (v = Cu(i, s), v < 55296 || v > 56319 || s + 1 === c || (d = Cu(i, s + 1)) < 56320 || d > 57343 ? r ? Z0(i, s) : v : r ? J0(i, s, s + 2) : (v - 55296 << 10) + (d - 56320) + 65536);
  };
}, uf = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: Lu(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: Lu(!0)
}, Q0 = uf.charAt, ey = lr, lf = Jn, ty = rf, Fu = nf, cf = "String Iterator", ry = lf.set, ny = lf.getterFor(cf);
ty(String, "String", function(r) {
  ry(this, {
    type: cf,
    string: ey(r),
    index: 0
  });
}, function() {
  var e = ny(this), n = e.string, i = e.index, s;
  return i >= n.length ? Fu(void 0, !0) : (s = Q0(n, i), e.index += s.length, Fu(s, !1));
});
var iy = {
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
}, oy = ts, Uo = oy("span").classList, Mu = Uo && Uo.constructor && Uo.constructor.prototype, ay = Mu === Object.prototype ? void 0 : Mu, ku = et, ff = iy, sy = ay, Ln = M0, Du = Zn, uy = Ji, ly = ot, Bo = ly("iterator"), jo = Ln.values, pf = function(r, e) {
  if (r) {
    if (r[Bo] !== jo)
      try {
        Du(r, Bo, jo);
      } catch {
        r[Bo] = jo;
      }
    if (uy(r, e, !0), ff[e]) {
      for (var n in Ln)
        if (r[n] !== Ln[n])
          try {
            Du(r, n, Ln[n]);
          } catch {
            r[n] = Ln[n];
          }
    }
  }
};
for (var Go in ff)
  pf(ku[Go] && ku[Go].prototype, Go);
pf(sy, "DOMTokenList");
var Uu = mt, cy = De, fy = xt, py = Ve, Wo = ls, hy = ei, dy = Gi, gy = Sr, vy = Wi, Zr = Object.assign, Bu = Object.defineProperty, my = cy([].concat), yy = !Zr || py(function() {
  if (Uu && Zr({ b: 1 }, Zr(Bu({}, "a", {
    enumerable: !0,
    get: function() {
      Bu(this, "b", {
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
  for (var i = gy(e), s = arguments.length, c = 1, v = hy.f, d = dy.f; s > c; )
    for (var m = vy(arguments[c++]), l = v ? my(Wo(m), v(m)) : Wo(m), a = l.length, h = 0, p; a > h; )
      p = l[h++], (!Uu || fy(d, m, p)) && (i[p] = m[p]);
  return i;
} : Zr, wy = yt, ju = yy;
wy({ target: "Object", stat: !0, arity: 2, forced: Object.assign !== ju }, {
  assign: ju
});
var by = xt, Ey = Dr, Ty = ot, Sy = Or, hf = function() {
  var r = Ey("Symbol"), e = r && r.prototype, n = e && e.valueOf, i = Ty("toPrimitive");
  e && !e[i] && Sy(e, i, function(s) {
    return by(n, this);
  }, { arity: 1 });
}, Oy = ss, $y = hf;
Oy("toPrimitive");
$y();
var Iy = Bt, Ay = Rc, _y = TypeError, xy = function(r) {
  if (Iy(this), r === "string" || r === "default")
    r = "string";
  else if (r !== "number")
    throw new _y("Incorrect hint");
  return Ay(this, r);
}, Ny = ft, Py = Or, Ry = xy, Cy = ot, Gu = Cy("toPrimitive"), Wu = Date.prototype;
Ny(Wu, Gu) || Py(Wu, Gu, Ry);
var df = {}, Ly = De, gf = Ly([].slice), Fy = Tr, My = kr, vf = Qn.f, ky = gf, mf = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], Dy = function(r) {
  try {
    return vf(r);
  } catch {
    return ky(mf);
  }
};
df.f = function(e) {
  return mf && Fy(e) === "Window" ? Dy(e) : vf(My(e));
};
var Vu = Wc, Uy = St, yf = function(r, e, n) {
  return n.get && Vu(n.get, e, { getter: !0 }), n.set && Vu(n.set, e, { setter: !0 }), Uy.f(r, e, n);
}, By = Tr, jy = De, Gy = function(r) {
  if (By(r) === "Function")
    return jy(r);
}, qu = Gy, Wy = zi, Vy = ji, qy = qu(qu.bind), zy = function(r, e) {
  return Wy(r), e === void 0 ? r : Vy ? qy(r, e) : function() {
    return r.apply(e, arguments);
  };
}, Hy = Tr, gs = Array.isArray || function(e) {
  return Hy(e) === "Array";
}, Xy = De, Yy = Ve, wf = Xe, Ky = hs, Zy = Dr, Jy = Bc, bf = function() {
}, Ef = Zy("Reflect", "construct"), vs = /^\s*(?:class|function)\b/, Qy = Xy(vs.exec), e1 = !vs.test(bf), xn = function(e) {
  if (!wf(e))
    return !1;
  try {
    return Ef(bf, [], e), !0;
  } catch {
    return !1;
  }
}, Tf = function(e) {
  if (!wf(e))
    return !1;
  switch (Ky(e)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return e1 || !!Qy(vs, Jy(e));
  } catch {
    return !0;
  }
};
Tf.sham = !0;
var Sf = !Ef || Yy(function() {
  var r;
  return xn(xn.call) || !xn(Object) || !xn(function() {
    r = !0;
  }) || r;
}) ? Tf : xn, zu = gs, t1 = Sf, r1 = ur, n1 = ot, i1 = n1("species"), Hu = Array, o1 = function(r) {
  var e;
  return zu(r) && (e = r.constructor, t1(e) && (e === Hu || zu(e.prototype)) ? e = void 0 : r1(e) && (e = e[i1], e === null && (e = void 0))), e === void 0 ? Hu : e;
}, a1 = o1, Of = function(r, e) {
  return new (a1(r))(e === 0 ? 0 : e);
}, s1 = zy, u1 = De, l1 = Wi, c1 = Sr, f1 = Ki, p1 = Of, Xu = u1([].push), yr = function(r) {
  var e = r === 1, n = r === 2, i = r === 3, s = r === 4, c = r === 6, v = r === 7, d = r === 5 || c;
  return function(m, l, a, h) {
    for (var p = c1(m), b = l1(p), O = f1(b), _ = s1(l, a), P = 0, D = h || p1, I = e ? D(m, O) : n || v ? D(m, 0) : void 0, x, F; O > P; P++)
      if ((d || P in b) && (x = b[P], F = _(x, P, p), r))
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
}, Qi = yt, ni = et, ys = xt, h1 = De, cn = mt, fn = yn, d1 = Ve, it = ft, g1 = Vi, _a = Bt, eo = kr, ws = es, v1 = lr, xa = Xn, pn = Zi, $f = ls, m1 = Qn, If = df, y1 = ei, Af = Hn, _f = St, w1 = us, xf = Gi, Vo = Or, b1 = yf, bs = wn, E1 = Hi, Nf = Xi, Yu = Qa, T1 = ot, S1 = as, O1 = ss, $1 = hf, I1 = Ji, Pf = Jn, to = ms.forEach, Et = E1("hidden"), ro = "Symbol", jn = "prototype", A1 = Pf.set, Ku = Pf.getterFor(ro), Dt = Object[jn], Cr = ni.Symbol, Fn = Cr && Cr[jn], _1 = ni.RangeError, x1 = ni.TypeError, qo = ni.QObject, Rf = Af.f, Lr = _f.f, Cf = If.f, N1 = xf.f, Lf = h1([].push), vr = bs("symbols"), ii = bs("op-symbols"), P1 = bs("wks"), Na = !qo || !qo[jn] || !qo[jn].findChild, Ff = function(r, e, n) {
  var i = Rf(Dt, e);
  i && delete Dt[e], Lr(r, e, n), i && r !== Dt && Lr(Dt, e, i);
}, Pa = cn && d1(function() {
  return pn(Lr({}, "a", {
    get: function() {
      return Lr(this, "a", { value: 7 }).a;
    }
  })).a !== 7;
}) ? Ff : Lr, zo = function(r, e) {
  var n = vr[r] = pn(Fn);
  return A1(n, {
    type: ro,
    tag: r,
    description: e
  }), cn || (n.description = e), n;
}, no = function(e, n, i) {
  e === Dt && no(ii, n, i), _a(e);
  var s = ws(n);
  return _a(i), it(vr, s) ? (i.enumerable ? (it(e, Et) && e[Et][s] && (e[Et][s] = !1), i = pn(i, { enumerable: xa(0, !1) })) : (it(e, Et) || Lr(e, Et, xa(1, pn(null))), e[Et][s] = !0), Pa(e, s, i)) : Lr(e, s, i);
}, Es = function(e, n) {
  _a(e);
  var i = eo(n), s = $f(i).concat(Df(i));
  return to(s, function(c) {
    (!cn || ys(Ra, i, c)) && no(e, c, i[c]);
  }), e;
}, R1 = function(e, n) {
  return n === void 0 ? pn(e) : Es(pn(e), n);
}, Ra = function(e) {
  var n = ws(e), i = ys(N1, this, n);
  return this === Dt && it(vr, n) && !it(ii, n) ? !1 : i || !it(this, n) || !it(vr, n) || it(this, Et) && this[Et][n] ? i : !0;
}, Mf = function(e, n) {
  var i = eo(e), s = ws(n);
  if (!(i === Dt && it(vr, s) && !it(ii, s))) {
    var c = Rf(i, s);
    return c && it(vr, s) && !(it(i, Et) && i[Et][s]) && (c.enumerable = !0), c;
  }
}, kf = function(e) {
  var n = Cf(eo(e)), i = [];
  return to(n, function(s) {
    !it(vr, s) && !it(Nf, s) && Lf(i, s);
  }), i;
}, Df = function(r) {
  var e = r === Dt, n = Cf(e ? ii : eo(r)), i = [];
  return to(n, function(s) {
    it(vr, s) && (!e || it(Dt, s)) && Lf(i, vr[s]);
  }), i;
};
fn || (Cr = function() {
  if (g1(Fn, this))
    throw new x1("Symbol is not a constructor");
  var e = !arguments.length || arguments[0] === void 0 ? void 0 : v1(arguments[0]), n = Yu(e), i = function(s) {
    var c = this === void 0 ? ni : this;
    c === Dt && ys(i, ii, s), it(c, Et) && it(c[Et], n) && (c[Et][n] = !1);
    var v = xa(1, s);
    try {
      Pa(c, n, v);
    } catch (d) {
      if (!(d instanceof _1))
        throw d;
      Ff(c, n, v);
    }
  };
  return cn && Na && Pa(Dt, n, { configurable: !0, set: i }), zo(n, e);
}, Fn = Cr[jn], Vo(Fn, "toString", function() {
  return Ku(this).tag;
}), Vo(Cr, "withoutSetter", function(r) {
  return zo(Yu(r), r);
}), xf.f = Ra, _f.f = no, w1.f = Es, Af.f = Mf, m1.f = If.f = kf, y1.f = Df, S1.f = function(r) {
  return zo(T1(r), r);
}, cn && (b1(Fn, "description", {
  configurable: !0,
  get: function() {
    return Ku(this).description;
  }
}), Vo(Dt, "propertyIsEnumerable", Ra, { unsafe: !0 })));
Qi({ global: !0, constructor: !0, wrap: !0, forced: !fn, sham: !fn }, {
  Symbol: Cr
});
to($f(P1), function(r) {
  O1(r);
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
  create: R1,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: no,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: Es,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: Mf
});
Qi({ target: "Object", stat: !0, forced: !fn }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: kf
});
$1();
I1(Cr, ro);
Nf[Et] = !0;
var C1 = yn, Uf = C1 && !!Symbol.for && !!Symbol.keyFor, L1 = yt, F1 = Dr, M1 = ft, k1 = lr, Bf = wn, D1 = Uf, Ho = Bf("string-to-symbol-registry"), U1 = Bf("symbol-to-string-registry");
L1({ target: "Symbol", stat: !0, forced: !D1 }, {
  for: function(r) {
    var e = k1(r);
    if (M1(Ho, e))
      return Ho[e];
    var n = F1("Symbol")(e);
    return Ho[e] = n, U1[n] = e, n;
  }
});
var B1 = yt, j1 = ft, G1 = Kn, W1 = Ya, V1 = wn, q1 = Uf, Zu = V1("symbol-to-string-registry");
B1({ target: "Symbol", stat: !0, forced: !q1 }, {
  keyFor: function(e) {
    if (!G1(e))
      throw new TypeError(W1(e) + " is not a symbol");
    if (j1(Zu, e))
      return Zu[e];
  }
});
var z1 = ji, jf = Function.prototype, Ju = jf.apply, Qu = jf.call, Gf = typeof Reflect == "object" && Reflect.apply || (z1 ? Qu.bind(Ju) : function() {
  return Qu.apply(Ju, arguments);
}), H1 = De, el = gs, X1 = Xe, tl = Tr, Y1 = lr, rl = H1([].push), K1 = function(r) {
  if (X1(r))
    return r;
  if (el(r)) {
    for (var e = r.length, n = [], i = 0; i < e; i++) {
      var s = r[i];
      typeof s == "string" ? rl(n, s) : (typeof s == "number" || tl(s) === "Number" || tl(s) === "String") && rl(n, Y1(s));
    }
    var c = n.length, v = !0;
    return function(d, m) {
      if (v)
        return v = !1, m;
      if (el(this))
        return m;
      for (var l = 0; l < c; l++)
        if (n[l] === d)
          return m;
    };
  }
}, Z1 = yt, Wf = Dr, Vf = Gf, J1 = xt, oi = De, qf = Ve, nl = Xe, il = Kn, zf = gf, Q1 = K1, ew = yn, tw = String, Er = Wf("JSON", "stringify"), bi = oi(/./.exec), ol = oi("".charAt), rw = oi("".charCodeAt), nw = oi("".replace), iw = oi(1 .toString), ow = /[\uD800-\uDFFF]/g, al = /^[\uD800-\uDBFF]$/, sl = /^[\uDC00-\uDFFF]$/, ul = !ew || qf(function() {
  var r = Wf("Symbol")("stringify detection");
  return Er([r]) !== "[null]" || Er({ a: r }) !== "{}" || Er(Object(r)) !== "{}";
}), ll = qf(function() {
  return Er("\uDF06\uD834") !== '"\\udf06\\ud834"' || Er("\uDEAD") !== '"\\udead"';
}), aw = function(r, e) {
  var n = zf(arguments), i = Q1(e);
  if (!(!nl(i) && (r === void 0 || il(r))))
    return n[1] = function(s, c) {
      if (nl(i) && (c = J1(i, this, tw(s), c)), !il(c))
        return c;
    }, Vf(Er, null, n);
}, sw = function(r, e, n) {
  var i = ol(n, e - 1), s = ol(n, e + 1);
  return bi(al, r) && !bi(sl, s) || bi(sl, r) && !bi(al, i) ? "\\u" + iw(rw(r, 0), 16) : r;
};
Er && Z1({ target: "JSON", stat: !0, arity: 3, forced: ul || ll }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  stringify: function(e, n, i) {
    var s = zf(arguments), c = Vf(ul ? aw : Er, null, s);
    return ll && typeof c == "string" ? nw(c, ow, sw) : c;
  }
});
var uw = yt, lw = yn, cw = Ve, Hf = ei, fw = Sr, pw = !lw || cw(function() {
  Hf.f(1);
});
uw({ target: "Object", stat: !0, forced: pw }, {
  getOwnPropertySymbols: function(e) {
    var n = Hf.f;
    return n ? n(fw(e)) : [];
  }
});
var hw = yt, dw = mt, gw = et, Ei = De, vw = ft, mw = Xe, yw = Vi, ww = lr, bw = yf, Ew = qc, pr = gw.Symbol, xr = pr && pr.prototype;
if (dw && mw(pr) && (!("description" in xr) || // Safari 12 bug
pr().description !== void 0)) {
  var cl = {}, Ti = function() {
    var e = arguments.length < 1 || arguments[0] === void 0 ? void 0 : ww(arguments[0]), n = yw(xr, this) ? new pr(e) : e === void 0 ? pr() : pr(e);
    return e === "" && (cl[n] = !0), n;
  };
  Ew(Ti, pr), Ti.prototype = xr, xr.constructor = Ti;
  var Tw = String(pr("description detection")) === "Symbol(description detection)", Sw = Ei(xr.valueOf), Ow = Ei(xr.toString), $w = /^Symbol\((.*)\)[^)]+$/, Iw = Ei("".replace), Aw = Ei("".slice);
  bw(xr, "description", {
    configurable: !0,
    get: function() {
      var e = Sw(this);
      if (vw(cl, e))
        return "";
      var n = Ow(e), i = Tw ? Aw(n, 7, -1) : Iw(n, $w, "$1");
      return i === "" ? void 0 : i;
    }
  }), hw({ global: !0, constructor: !0, forced: !0 }, {
    Symbol: Ti
  });
}
var _w = ps, xw = hs, Nw = _w ? {}.toString : function() {
  return "[object " + xw(this) + "]";
}, Pw = ps, Rw = Or, Cw = Nw;
Pw || Rw(Object.prototype, "toString", Cw, { unsafe: !0 });
var Lw = Xe, Fw = ur, fl = Qc, Mw = function(r, e, n) {
  var i, s;
  return (
    // it can work only with native `setPrototypeOf`
    fl && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    Lw(i = e.constructor) && i !== n && Fw(s = i.prototype) && s !== n.prototype && fl(r, s), r
  );
}, kw = De, Dw = kw(1 .valueOf), Uw = `	
\v\f\r                　\u2028\u2029\uFEFF`, Bw = De, jw = mn, Gw = lr, Ca = Uw, pl = Bw("".replace), Ww = RegExp("^[" + Ca + "]+"), Vw = RegExp("(^|[^" + Ca + "])[" + Ca + "]+$"), Xo = function(r) {
  return function(e) {
    var n = Gw(jw(e));
    return r & 1 && (n = pl(n, Ww, "")), r & 2 && (n = pl(n, Vw, "$1")), n;
  };
}, qw = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: Xo(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: Xo(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: Xo(3)
}, zw = yt, Xf = Md, Hw = mt, Yf = et, Kf = Hc, Zf = De, Xw = zc, hl = ft, Yw = Mw, Kw = Vi, Zw = Kn, Jf = Lc, Jw = Ve, Qw = Qn.f, eb = Hn.f, tb = St.f, rb = Dw, nb = qw.trim, io = "Number", un = Yf[io];
Kf[io];
var Ts = un.prototype, ib = Yf.TypeError, ob = Zf("".slice), Si = Zf("".charCodeAt), ab = function(r) {
  var e = Jf(r, "number");
  return typeof e == "bigint" ? e : sb(e);
}, sb = function(r) {
  var e = Jf(r, "number"), n, i, s, c, v, d, m, l;
  if (Zw(e))
    throw new ib("Cannot convert a Symbol value to a number");
  if (typeof e == "string" && e.length > 2) {
    if (e = nb(e), n = Si(e, 0), n === 43 || n === 45) {
      if (i = Si(e, 2), i === 88 || i === 120)
        return NaN;
    } else if (n === 48) {
      switch (Si(e, 1)) {
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
      for (v = ob(e, 2), d = v.length, m = 0; m < d; m++)
        if (l = Si(v, m), l < 48 || l > c)
          return NaN;
      return parseInt(v, s);
    }
  }
  return +e;
}, Ss = Xw(io, !un(" 0o1") || !un("0b1") || un("+0x1")), ub = function(r) {
  return Kw(Ts, r) && Jw(function() {
    rb(r);
  });
}, oo = function(e) {
  var n = arguments.length < 1 ? 0 : un(ab(e));
  return ub(this) ? Yw(Object(n), this, oo) : n;
};
oo.prototype = Ts;
Ss && !Xf && (Ts.constructor = oo);
zw({ global: !0, constructor: !0, wrap: !0, forced: Ss }, {
  Number: oo
});
var lb = function(r, e) {
  for (var n = Hw ? Qw(e) : (
    // ES3:
    "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(",")
  ), i = 0, s; n.length > i; i++)
    hl(e, s = n[i]) && !hl(r, s) && tb(r, s, eb(e, s));
};
(Ss || Xf) && lb(Kf[io], un);
var bn = {};
Object.defineProperty(bn, "__esModule", {
  value: !0
});
bn.LogLevel = void 0;
var cb = /* @__PURE__ */ function(r) {
  return r[r.Debug = 0] = "Debug", r[r.Info = 1] = "Info", r[r.Warn = 2] = "Warn", r[r.Error = 3] = "Error", r[r.Fatal = 4] = "Fatal", r;
}({});
bn.LogLevel = cb;
Object.defineProperty(ri, "__esModule", {
  value: !0
});
ri.ConsoleLogger = void 0;
ri.buildConsoleLogger = gb;
var st = bn;
function hn(r) {
  "@babel/helpers - typeof";
  return hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, hn(r);
}
function fb(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function dl(r, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, Qf(i.key), i);
  }
}
function pb(r, e, n) {
  return e && dl(r.prototype, e), n && dl(r, n), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function hb(r, e, n) {
  return e = Qf(e), e in r ? Object.defineProperty(r, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = n, r;
}
function Qf(r) {
  var e = db(r, "string");
  return hn(e) === "symbol" ? e : String(e);
}
function db(r, e) {
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
var ep = /* @__PURE__ */ function() {
  function r(e) {
    fb(this, r), hb(this, "context", void 0), this.context = e || {};
  }
  return pb(r, [{
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
      var c, v;
      if (!(typeof ((c = this.context) === null || c === void 0 ? void 0 : c.level) == "number" && n < ((v = this.context) === null || v === void 0 ? void 0 : v.level)))
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
ri.ConsoleLogger = ep;
function gb(r) {
  return new ep(r);
}
var ao = {};
const vb = /* @__PURE__ */ lh(Qh);
Object.defineProperty(ao, "__esModule", {
  value: !0
});
ao.LoggerBuilder = void 0;
var mb = vb, gl = bn;
function Gn(r) {
  "@babel/helpers - typeof";
  return Gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Gn(r);
}
function yb(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function vl(r, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, tp(i.key), i);
  }
}
function wb(r, e, n) {
  return e && vl(r.prototype, e), n && vl(r, n), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function ml(r, e, n) {
  return e = tp(e), e in r ? Object.defineProperty(r, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = n, r;
}
function tp(r) {
  var e = bb(r, "string");
  return Gn(e) === "symbol" ? e : String(e);
}
function bb(r, e) {
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
var Eb = /* @__PURE__ */ function() {
  function r(e) {
    yb(this, r), ml(this, "context", void 0), ml(this, "factory", void 0), this.context = {}, this.factory = e;
  }
  return wb(r, [{
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
      var n = (0, mb.getCurrentUser)();
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
          var c, v;
          n.context.level = (c = (v = window._oc_config) === null || v === void 0 ? void 0 : v.loglevel) !== null && c !== void 0 ? c : gl.LogLevel.Warn, window._oc_debug && (n.context.level = gl.LogLevel.Debug), document.removeEventListener("readystatechange", s);
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
ao.LoggerBuilder = Eb;
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
dt.linkTo = dt.imagePath = dt.getRootUrl = dt.generateUrl = rp = dt.generateRemoteUrl = dt.generateOcsUrl = dt.generateFilePath = void 0;
const Tb = (r, e) => Di(r, "", e);
dt.linkTo = Tb;
const Sb = (r) => dn() + "/remote.php/" + r, Ob = (r) => window.location.protocol + "//" + window.location.host + Sb(r);
var rp = dt.generateRemoteUrl = Ob;
const $b = (r, e, n) => {
  const s = Object.assign({
    ocsVersion: 2
  }, n || {}).ocsVersion === 1 ? 1 : 2;
  return window.location.protocol + "//" + window.location.host + dn() + "/ocs/v" + s + ".php" + La(r, e, n);
};
dt.generateOcsUrl = $b;
const La = (r, e, n) => {
  const i = Object.assign({
    escape: !0
  }, n || {}), s = function(c, v) {
    return v = v || {}, c.replace(/{([^{}]*)}/g, function(d, m) {
      var l = v[m];
      return i.escape ? encodeURIComponent(typeof l == "string" || typeof l == "number" ? l.toString() : d) : typeof l == "string" || typeof l == "number" ? l.toString() : d;
    });
  };
  return r.charAt(0) !== "/" && (r = "/" + r), s(r, e || {});
}, Ib = (r, e, n) => {
  var s, c;
  const i = Object.assign({
    noRewrite: !1
  }, n || {});
  return ((c = (s = window == null ? void 0 : window.OC) == null ? void 0 : s.config) == null ? void 0 : c.modRewriteWorking) === !0 && !i.noRewrite ? dn() + La(r, e, n) : dn() + "/index.php" + La(r, e, n);
};
dt.generateUrl = Ib;
const Ab = (r, e) => e.indexOf(".") === -1 ? Di(r, "img", e + ".svg") : Di(r, "img", e);
dt.imagePath = Ab;
const Di = (r, e, n) => {
  var c, v, d, m;
  const i = ((v = (c = window == null ? void 0 : window.OC) == null ? void 0 : c.coreApps) == null ? void 0 : v.indexOf(r)) !== -1;
  let s = dn();
  return n.substring(n.length - 3) === "php" && !i ? (s += "/index.php/apps/" + r, n !== "index.php" && (s += "/", e && (s += encodeURI(e + "/")), s += n)) : n.substring(n.length - 3) !== "php" && !i ? (s = (m = (d = window == null ? void 0 : window.OC) == null ? void 0 : d.appswebroots) == null ? void 0 : m[r], e && (s += "/" + e + "/"), s.substring(s.length - 1) !== "/" && (s += "/"), s += n) : ((r === "settings" || r === "core" || r === "search") && e === "ajax" ? s += "/index.php/" : s += "/", i || (s += "apps/"), r !== "" && (r += "/", s += r), e && (s += e + "/"), s += n), s;
};
dt.generateFilePath = Di;
const dn = () => {
  var r;
  return ((r = window == null ? void 0 : window.OC) == null ? void 0 : r.webroot) || "";
};
dt.getRootUrl = dn;
/*! @license DOMPurify 3.0.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.6/LICENSE */
const {
  entries: np,
  setPrototypeOf: yl,
  isFrozen: _b,
  getPrototypeOf: xb,
  getOwnPropertyDescriptor: ip
} = Object;
let {
  freeze: vt,
  seal: qt,
  create: op
} = Object, {
  apply: Fa,
  construct: Ma
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
Ma || (Ma = function(e, n) {
  return new e(...n);
});
const Oi = Ut(Array.prototype.forEach), wl = Ut(Array.prototype.pop), Nn = Ut(Array.prototype.push), Li = Ut(String.prototype.toLowerCase), Yo = Ut(String.prototype.toString), Nb = Ut(String.prototype.match), Pn = Ut(String.prototype.replace), Pb = Ut(String.prototype.indexOf), Rb = Ut(String.prototype.trim), At = Ut(RegExp.prototype.test), Rn = Cb(TypeError);
function Ut(r) {
  return function(e) {
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      i[s - 1] = arguments[s];
    return Fa(r, e, i);
  };
}
function Cb(r) {
  return function() {
    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
      n[i] = arguments[i];
    return Ma(r, n);
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
      c !== s && (_b(e) || (e[i] = c), s = c);
    }
    r[s] = !0;
  }
  return r;
}
function Jr(r) {
  const e = op(null);
  for (const [n, i] of np(r))
    ip(r, n) !== void 0 && (e[n] = i);
  return e;
}
function $i(r, e) {
  for (; r !== null; ) {
    const i = ip(r, e);
    if (i) {
      if (i.get)
        return Ut(i.get);
      if (typeof i.value == "function")
        return Ut(i.value);
    }
    r = xb(r);
  }
  function n(i) {
    return console.warn("fallback value for", i), null;
  }
  return n;
}
const bl = vt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ko = vt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Zo = vt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Lb = vt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Jo = vt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Fb = vt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), El = vt(["#text"]), Tl = vt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Qo = vt(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Sl = vt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ii = vt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Mb = qt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), kb = qt(/<%[\w\W]*|[\w\W]*%>/gm), Db = qt(/\${[\w\W]*}/gm), Ub = qt(/^data-[\-\w.\u00B7-\uFFFF]/), Bb = qt(/^aria-[\-\w]+$/), ap = qt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), jb = qt(/^(?:\w+script|data):/i), Gb = qt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), sp = qt(/^html$/i);
var Ol = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: Mb,
  ERB_EXPR: kb,
  TMPLIT_EXPR: Db,
  DATA_ATTR: Ub,
  ARIA_ATTR: Bb,
  IS_ALLOWED_URI: ap,
  IS_SCRIPT_OR_DATA: jb,
  ATTR_WHITESPACE: Gb,
  DOCTYPE_NAME: sp
});
const Wb = function() {
  return typeof window > "u" ? null : window;
}, Vb = function(e, n) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let i = null;
  const s = "data-tt-policy-suffix";
  n && n.hasAttribute(s) && (i = n.getAttribute(s));
  const c = "dompurify" + (i ? "#" + i : "");
  try {
    return e.createPolicy(c, {
      createHTML(v) {
        return v;
      },
      createScriptURL(v) {
        return v;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + c + " could not be created."), null;
  }
};
function up() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Wb();
  const e = (se) => up(se);
  if (e.version = "3.0.6", e.removed = [], !r || !r.document || r.document.nodeType !== 9)
    return e.isSupported = !1, e;
  let {
    document: n
  } = r;
  const i = n, s = i.currentScript, {
    DocumentFragment: c,
    HTMLTemplateElement: v,
    Node: d,
    Element: m,
    NodeFilter: l,
    NamedNodeMap: a = r.NamedNodeMap || r.MozNamedAttrMap,
    HTMLFormElement: h,
    DOMParser: p,
    trustedTypes: b
  } = r, O = m.prototype, _ = $i(O, "cloneNode"), P = $i(O, "nextSibling"), D = $i(O, "childNodes"), I = $i(O, "parentNode");
  if (typeof v == "function") {
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
  e.isSupported = typeof np == "function" && typeof I == "function" && C && C.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: H,
    ERB_EXPR: K,
    TMPLIT_EXPR: V,
    DATA_ATTR: re,
    ARIA_ATTR: pe,
    IS_SCRIPT_OR_DATA: Ae,
    ATTR_WHITESPACE: ce
  } = Ol;
  let {
    IS_ALLOWED_URI: Ee
  } = Ol, me = null;
  const Me = be({}, [...bl, ...Ko, ...Zo, ...Jo, ...El]);
  let $e = null;
  const Ze = be({}, [...Tl, ...Qo, ...Sl, ...Ii]);
  let Te = Object.seal(op(null, {
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
  })), _e = null, Ie = null, Ot = !0, wt = !0, Ue = !1, Ht = !0, Re = !1, Je = !1, Nt = !1, ut = !1, bt = !1, jt = !1, Ce = !1, Be = !0, cr = !1;
  const $r = "user-content-";
  let pt = !0, Pt = !1, $t = {}, It = null;
  const he = be({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let qe = null;
  const E = be({}, ["audio", "video", "img", "source", "image", "track"]);
  let $ = null;
  const L = be({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), k = "http://www.w3.org/1998/Math/MathML", g = "http://www.w3.org/2000/svg", o = "http://www.w3.org/1999/xhtml";
  let u = o, T = !1, A = null;
  const M = be({}, [k, g, o], Yo);
  let j = null;
  const te = ["application/xhtml+xml", "text/html"], le = "text/html";
  let ue = null, fe = null;
  const xe = n.createElement("form"), Xt = function(B) {
    return B instanceof RegExp || B instanceof Function;
  }, Ir = function() {
    let B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(fe && fe === B)) {
      if ((!B || typeof B != "object") && (B = {}), B = Jr(B), j = // eslint-disable-next-line unicorn/prefer-includes
      te.indexOf(B.PARSER_MEDIA_TYPE) === -1 ? j = le : j = B.PARSER_MEDIA_TYPE, ue = j === "application/xhtml+xml" ? Yo : Li, me = "ALLOWED_TAGS" in B ? be({}, B.ALLOWED_TAGS, ue) : Me, $e = "ALLOWED_ATTR" in B ? be({}, B.ALLOWED_ATTR, ue) : Ze, A = "ALLOWED_NAMESPACES" in B ? be({}, B.ALLOWED_NAMESPACES, Yo) : M, $ = "ADD_URI_SAFE_ATTR" in B ? be(
        Jr(L),
        // eslint-disable-line indent
        B.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        ue
        // eslint-disable-line indent
      ) : L, qe = "ADD_DATA_URI_TAGS" in B ? be(
        Jr(E),
        // eslint-disable-line indent
        B.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        ue
        // eslint-disable-line indent
      ) : E, It = "FORBID_CONTENTS" in B ? be({}, B.FORBID_CONTENTS, ue) : he, _e = "FORBID_TAGS" in B ? be({}, B.FORBID_TAGS, ue) : {}, Ie = "FORBID_ATTR" in B ? be({}, B.FORBID_ATTR, ue) : {}, $t = "USE_PROFILES" in B ? B.USE_PROFILES : !1, Ot = B.ALLOW_ARIA_ATTR !== !1, wt = B.ALLOW_DATA_ATTR !== !1, Ue = B.ALLOW_UNKNOWN_PROTOCOLS || !1, Ht = B.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Re = B.SAFE_FOR_TEMPLATES || !1, Je = B.WHOLE_DOCUMENT || !1, bt = B.RETURN_DOM || !1, jt = B.RETURN_DOM_FRAGMENT || !1, Ce = B.RETURN_TRUSTED_TYPE || !1, ut = B.FORCE_BODY || !1, Be = B.SANITIZE_DOM !== !1, cr = B.SANITIZE_NAMED_PROPS || !1, pt = B.KEEP_CONTENT !== !1, Pt = B.IN_PLACE || !1, Ee = B.ALLOWED_URI_REGEXP || ap, u = B.NAMESPACE || o, Te = B.CUSTOM_ELEMENT_HANDLING || {}, B.CUSTOM_ELEMENT_HANDLING && Xt(B.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Te.tagNameCheck = B.CUSTOM_ELEMENT_HANDLING.tagNameCheck), B.CUSTOM_ELEMENT_HANDLING && Xt(B.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Te.attributeNameCheck = B.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), B.CUSTOM_ELEMENT_HANDLING && typeof B.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Te.allowCustomizedBuiltInElements = B.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Re && (wt = !1), jt && (bt = !0), $t && (me = be({}, [...El]), $e = [], $t.html === !0 && (be(me, bl), be($e, Tl)), $t.svg === !0 && (be(me, Ko), be($e, Qo), be($e, Ii)), $t.svgFilters === !0 && (be(me, Zo), be($e, Qo), be($e, Ii)), $t.mathMl === !0 && (be(me, Jo), be($e, Sl), be($e, Ii))), B.ADD_TAGS && (me === Me && (me = Jr(me)), be(me, B.ADD_TAGS, ue)), B.ADD_ATTR && ($e === Ze && ($e = Jr($e)), be($e, B.ADD_ATTR, ue)), B.ADD_URI_SAFE_ATTR && be($, B.ADD_URI_SAFE_ATTR, ue), B.FORBID_CONTENTS && (It === he && (It = Jr(It)), be(It, B.FORBID_CONTENTS, ue)), pt && (me["#text"] = !0), Je && be(me, ["html", "head", "body"]), me.table && (be(me, ["tbody"]), delete _e.tbody), B.TRUSTED_TYPES_POLICY) {
        if (typeof B.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Rn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof B.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Rn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        x = B.TRUSTED_TYPES_POLICY, F = x.createHTML("");
      } else
        x === void 0 && (x = Vb(b, s)), x !== null && typeof F == "string" && (F = x.createHTML(""));
      vt && vt(B), fe = B;
    }
  }, Tn = be({}, ["mi", "mo", "mn", "ms", "mtext"]), ai = be({}, ["foreignobject", "desc", "title", "annotation-xml"]), co = be({}, ["title", "style", "font", "a", "script"]), ht = be({}, Ko);
  be(ht, Zo), be(ht, Lb);
  const Ur = be({}, Jo);
  be(Ur, Fb);
  const Br = function(B) {
    let ee = I(B);
    (!ee || !ee.tagName) && (ee = {
      namespaceURI: u,
      tagName: "template"
    });
    const ae = Li(B.tagName), Le = Li(ee.tagName);
    return A[B.namespaceURI] ? B.namespaceURI === g ? ee.namespaceURI === o ? ae === "svg" : ee.namespaceURI === k ? ae === "svg" && (Le === "annotation-xml" || Tn[Le]) : !!ht[ae] : B.namespaceURI === k ? ee.namespaceURI === o ? ae === "math" : ee.namespaceURI === g ? ae === "math" && ai[Le] : !!Ur[ae] : B.namespaceURI === o ? ee.namespaceURI === g && !ai[Le] || ee.namespaceURI === k && !Tn[Le] ? !1 : !Ur[ae] && (co[ae] || !ht[ae]) : !!(j === "application/xhtml+xml" && A[B.namespaceURI]) : !1;
  }, Yt = function(B) {
    Nn(e.removed, {
      element: B
    });
    try {
      B.parentNode.removeChild(B);
    } catch {
      B.remove();
    }
  }, jr = function(B, ee) {
    try {
      Nn(e.removed, {
        attribute: ee.getAttributeNode(B),
        from: ee
      });
    } catch {
      Nn(e.removed, {
        attribute: null,
        from: ee
      });
    }
    if (ee.removeAttribute(B), B === "is" && !$e[B])
      if (bt || jt)
        try {
          Yt(ee);
        } catch {
        }
      else
        try {
          ee.setAttribute(B, "");
        } catch {
        }
  }, Ar = function(B) {
    let ee = null, ae = null;
    if (ut)
      B = "<remove></remove>" + B;
    else {
      const Qe = Nb(B, /^[\r\n\t ]+/);
      ae = Qe && Qe[0];
    }
    j === "application/xhtml+xml" && u === o && (B = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + B + "</body></html>");
    const Le = x ? x.createHTML(B) : B;
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
    return B && ae && Ye.insertBefore(n.createTextNode(ae), Ye.childNodes[0] || null), u === o ? G.call(ee, Je ? "html" : "body")[0] : Je ? ee.documentElement : Ye;
  }, Gr = function(B) {
    return z.call(
      B.ownerDocument || B,
      B,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT,
      null
    );
  }, tt = function(B) {
    return B instanceof h && (typeof B.nodeName != "string" || typeof B.textContent != "string" || typeof B.removeChild != "function" || !(B.attributes instanceof a) || typeof B.removeAttribute != "function" || typeof B.setAttribute != "function" || typeof B.namespaceURI != "string" || typeof B.insertBefore != "function" || typeof B.hasChildNodes != "function");
  }, Kt = function(B) {
    return typeof d == "function" && B instanceof d;
  }, Gt = function(B, ee, ae) {
    Z[B] && Oi(Z[B], (Le) => {
      Le.call(e, ee, ae, fe);
    });
  }, Wr = function(B) {
    let ee = null;
    if (Gt("beforeSanitizeElements", B, null), tt(B))
      return Yt(B), !0;
    const ae = ue(B.nodeName);
    if (Gt("uponSanitizeElement", B, {
      tagName: ae,
      allowedTags: me
    }), B.hasChildNodes() && !Kt(B.firstElementChild) && At(/<[/\w]/g, B.innerHTML) && At(/<[/\w]/g, B.textContent))
      return Yt(B), !0;
    if (!me[ae] || _e[ae]) {
      if (!_e[ae] && Rt(ae) && (Te.tagNameCheck instanceof RegExp && At(Te.tagNameCheck, ae) || Te.tagNameCheck instanceof Function && Te.tagNameCheck(ae)))
        return !1;
      if (pt && !It[ae]) {
        const Le = I(B) || B.parentNode, Ye = D(B) || B.childNodes;
        if (Ye && Le) {
          const Qe = Ye.length;
          for (let lt = Qe - 1; lt >= 0; --lt)
            Le.insertBefore(_(Ye[lt], !0), P(B));
        }
      }
      return Yt(B), !0;
    }
    return B instanceof m && !Br(B) || (ae === "noscript" || ae === "noembed" || ae === "noframes") && At(/<\/no(script|embed|frames)/i, B.innerHTML) ? (Yt(B), !0) : (Re && B.nodeType === 3 && (ee = B.textContent, Oi([H, K, V], (Le) => {
      ee = Pn(ee, Le, " ");
    }), B.textContent !== ee && (Nn(e.removed, {
      element: B.cloneNode()
    }), B.textContent = ee)), Gt("afterSanitizeElements", B, null), !1);
  }, si = function(B, ee, ae) {
    if (Be && (ee === "id" || ee === "name") && (ae in n || ae in xe))
      return !1;
    if (!(wt && !Ie[ee] && At(re, ee))) {
      if (!(Ot && At(pe, ee))) {
        if (!$e[ee] || Ie[ee]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Rt(B) && (Te.tagNameCheck instanceof RegExp && At(Te.tagNameCheck, B) || Te.tagNameCheck instanceof Function && Te.tagNameCheck(B)) && (Te.attributeNameCheck instanceof RegExp && At(Te.attributeNameCheck, ee) || Te.attributeNameCheck instanceof Function && Te.attributeNameCheck(ee)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            ee === "is" && Te.allowCustomizedBuiltInElements && (Te.tagNameCheck instanceof RegExp && At(Te.tagNameCheck, ae) || Te.tagNameCheck instanceof Function && Te.tagNameCheck(ae)))
          )
            return !1;
        } else if (!$[ee]) {
          if (!At(Ee, Pn(ae, ce, ""))) {
            if (!((ee === "src" || ee === "xlink:href" || ee === "href") && B !== "script" && Pb(ae, "data:") === 0 && qe[B])) {
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
  }, Rt = function(B) {
    return B.indexOf("-") > 0;
  }, fr = function(B) {
    Gt("beforeSanitizeAttributes", B, null);
    const {
      attributes: ee
    } = B;
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
      let at = Qe === "value" ? Zt : Rb(Zt);
      if (ae.attrName = _r, ae.attrValue = at, ae.keepAttr = !0, ae.forceKeepAttr = void 0, Gt("uponSanitizeAttribute", B, ae), at = ae.attrValue, ae.forceKeepAttr || (jr(Qe, B), !ae.keepAttr))
        continue;
      if (!Ht && At(/\/>/i, at)) {
        jr(Qe, B);
        continue;
      }
      Re && Oi([H, K, V], (rt) => {
        at = Pn(at, rt, " ");
      });
      const Sn = ue(B.nodeName);
      if (si(Sn, _r, at)) {
        if (cr && (_r === "id" || _r === "name") && (jr(Qe, B), at = $r + at), x && typeof b == "object" && typeof b.getAttributeType == "function" && !lt)
          switch (b.getAttributeType(Sn, _r)) {
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
          lt ? B.setAttributeNS(lt, Qe, at) : B.setAttribute(Qe, at), wl(e.removed);
        } catch {
        }
      }
    }
    Gt("afterSanitizeAttributes", B, null);
  }, Vr = function se(B) {
    let ee = null;
    const ae = Gr(B);
    for (Gt("beforeSanitizeShadowDOM", B, null); ee = ae.nextNode(); )
      Gt("uponSanitizeShadowNode", ee, null), !Wr(ee) && (ee.content instanceof c && se(ee.content), fr(ee));
    Gt("afterSanitizeShadowDOM", B, null);
  };
  return e.sanitize = function(se) {
    let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ee = null, ae = null, Le = null, Ye = null;
    if (T = !se, T && (se = "<!-->"), typeof se != "string" && !Kt(se))
      if (typeof se.toString == "function") {
        if (se = se.toString(), typeof se != "string")
          throw Rn("dirty is not a string, aborting");
      } else
        throw Rn("toString is not a function");
    if (!e.isSupported)
      return se;
    if (Nt || Ir(B), e.removed = [], typeof se == "string" && (Pt = !1), Pt) {
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
    return Je && me["!doctype"] && ee.ownerDocument && ee.ownerDocument.doctype && ee.ownerDocument.doctype.name && At(sp, ee.ownerDocument.doctype.name) && (lt = "<!DOCTYPE " + ee.ownerDocument.doctype.name + `>
` + lt), Re && Oi([H, K, V], (Zt) => {
      lt = Pn(lt, Zt, " ");
    }), x && Ce ? x.createHTML(lt) : lt;
  }, e.setConfig = function() {
    let se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ir(se), Nt = !0;
  }, e.clearConfig = function() {
    fe = null, Nt = !1;
  }, e.isValidAttribute = function(se, B, ee) {
    fe || Ir({});
    const ae = ue(se), Le = ue(B);
    return si(ae, Le, ee);
  }, e.addHook = function(se, B) {
    typeof B == "function" && (Z[se] = Z[se] || [], Nn(Z[se], B));
  }, e.removeHook = function(se) {
    if (Z[se])
      return wl(Z[se]);
  }, e.removeHooks = function(se) {
    Z[se] && (Z[se] = []);
  }, e.removeAllHooks = function() {
    Z = {};
  }, e;
}
up();
function er(r) {
  if (typeof r != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(r));
}
function $l(r, e) {
  for (var n = "", i = 0, s = -1, c = 0, v, d = 0; d <= r.length; ++d) {
    if (d < r.length)
      v = r.charCodeAt(d);
    else {
      if (v === 47)
        break;
      v = 47;
    }
    if (v === 47) {
      if (!(s === d - 1 || c === 1))
        if (s !== d - 1 && c === 2) {
          if (n.length < 2 || i !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length - 2) !== 46) {
            if (n.length > 2) {
              var m = n.lastIndexOf("/");
              if (m !== n.length - 1) {
                m === -1 ? (n = "", i = 0) : (n = n.slice(0, m), i = n.length - 1 - n.lastIndexOf("/")), s = d, c = 0;
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
      v === 46 && c !== -1 ? ++c : c = -1;
  }
  return n;
}
function qb(r, e) {
  var n = e.dir || e.root, i = e.base || (e.name || "") + (e.ext || "");
  return n ? n === e.root ? n + i : n + r + i : i;
}
var kn = {
  // path.resolve([from ...], to)
  resolve: function() {
    for (var e = "", n = !1, i, s = arguments.length - 1; s >= -1 && !n; s--) {
      var c;
      s >= 0 ? c = arguments[s] : (i === void 0 && (i = kt.cwd()), c = i), er(c), c.length !== 0 && (e = c + "/" + e, n = c.charCodeAt(0) === 47);
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
    return e === void 0 ? "." : kn.normalize(e);
  },
  relative: function(e, n) {
    if (er(e), er(n), e === n || (e = kn.resolve(e), n = kn.resolve(n), e === n))
      return "";
    for (var i = 1; i < e.length && e.charCodeAt(i) === 47; ++i)
      ;
    for (var s = e.length, c = s - i, v = 1; v < n.length && n.charCodeAt(v) === 47; ++v)
      ;
    for (var d = n.length, m = d - v, l = c < m ? c : m, a = -1, h = 0; h <= l; ++h) {
      if (h === l) {
        if (m > l) {
          if (n.charCodeAt(v + h) === 47)
            return n.slice(v + h + 1);
          if (h === 0)
            return n.slice(v + h);
        } else
          c > l && (e.charCodeAt(i + h) === 47 ? a = h : h === 0 && (a = 0));
        break;
      }
      var p = e.charCodeAt(i + h), b = n.charCodeAt(v + h);
      if (p !== b)
        break;
      p === 47 && (a = h);
    }
    var O = "";
    for (h = i + a + 1; h <= s; ++h)
      (h === s || e.charCodeAt(h) === 47) && (O.length === 0 ? O += ".." : O += "/..");
    return O.length > 0 ? O + n.slice(v + a) : (v += a, n.charCodeAt(v) === 47 && ++v, n.slice(v));
  },
  _makeLong: function(e) {
    return e;
  },
  dirname: function(e) {
    if (er(e), e.length === 0)
      return ".";
    for (var n = e.charCodeAt(0), i = n === 47, s = -1, c = !0, v = e.length - 1; v >= 1; --v)
      if (n = e.charCodeAt(v), n === 47) {
        if (!c) {
          s = v;
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
    var i = 0, s = -1, c = !0, v;
    if (n !== void 0 && n.length > 0 && n.length <= e.length) {
      if (n.length === e.length && n === e)
        return "";
      var d = n.length - 1, m = -1;
      for (v = e.length - 1; v >= 0; --v) {
        var l = e.charCodeAt(v);
        if (l === 47) {
          if (!c) {
            i = v + 1;
            break;
          }
        } else
          m === -1 && (c = !1, m = v + 1), d >= 0 && (l === n.charCodeAt(d) ? --d === -1 && (s = v) : (d = -1, s = m));
      }
      return i === s ? s = m : s === -1 && (s = e.length), e.slice(i, s);
    } else {
      for (v = e.length - 1; v >= 0; --v)
        if (e.charCodeAt(v) === 47) {
          if (!c) {
            i = v + 1;
            break;
          }
        } else
          s === -1 && (c = !1, s = v + 1);
      return s === -1 ? "" : e.slice(i, s);
    }
  },
  extname: function(e) {
    er(e);
    for (var n = -1, i = 0, s = -1, c = !0, v = 0, d = e.length - 1; d >= 0; --d) {
      var m = e.charCodeAt(d);
      if (m === 47) {
        if (!c) {
          i = d + 1;
          break;
        }
        continue;
      }
      s === -1 && (c = !1, s = d + 1), m === 46 ? n === -1 ? n = d : v !== 1 && (v = 1) : n !== -1 && (v = -1);
    }
    return n === -1 || s === -1 || // We saw a non-dot character immediately before the dot
    v === 0 || // The (right-most) trimmed path component is exactly '..'
    v === 1 && n === s - 1 && n === i + 1 ? "" : e.slice(n, s);
  },
  format: function(e) {
    if (e === null || typeof e != "object")
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
    return qb("/", e);
  },
  parse: function(e) {
    er(e);
    var n = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0)
      return n;
    var i = e.charCodeAt(0), s = i === 47, c;
    s ? (n.root = "/", c = 1) : c = 0;
    for (var v = -1, d = 0, m = -1, l = !0, a = e.length - 1, h = 0; a >= c; --a) {
      if (i = e.charCodeAt(a), i === 47) {
        if (!l) {
          d = a + 1;
          break;
        }
        continue;
      }
      m === -1 && (l = !1, m = a + 1), i === 46 ? v === -1 ? v = a : h !== 1 && (h = 1) : v !== -1 && (h = -1);
    }
    return v === -1 || m === -1 || // We saw a non-dot character immediately before the dot
    h === 0 || // The (right-most) trimmed path component is exactly '..'
    h === 1 && v === m - 1 && v === d + 1 ? m !== -1 && (d === 0 && s ? n.base = n.name = e.slice(1, m) : n.base = n.name = e.slice(d, m)) : (d === 0 && s ? (n.name = e.slice(1, v), n.base = e.slice(1, m)) : (n.name = e.slice(d, v), n.base = e.slice(d, m)), n.ext = e.slice(v, m)), d > 0 ? n.dir = e.slice(0, d - 1) : s && (n.dir = "/"), n;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
kn.posix = kn;
var En = {}, zb = Ve, Hb = ot, Xb = qi, Yb = Hb("species"), Os = function(r) {
  return Xb >= 51 || !zb(function() {
    var e = [], n = e.constructor = {};
    return n[Yb] = function() {
      return { foo: 1 };
    }, e[r](Boolean).foo !== 1;
  });
}, Kb = yt, Zb = ms.map, Jb = Os, Qb = Jb("map");
Kb({ target: "Array", proto: !0, forced: !Qb }, {
  map: function(e) {
    return Zb(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var eE = Bt, tE = function() {
  var r = eE(this), e = "";
  return r.hasIndices && (e += "d"), r.global && (e += "g"), r.ignoreCase && (e += "i"), r.multiline && (e += "m"), r.dotAll && (e += "s"), r.unicode && (e += "u"), r.unicodeSets && (e += "v"), r.sticky && (e += "y"), e;
}, $s = Ve, rE = et, Is = rE.RegExp, As = $s(function() {
  var r = Is("a", "y");
  return r.lastIndex = 2, r.exec("abcd") !== null;
}), nE = As || $s(function() {
  return !Is("a", "y").sticky;
}), iE = As || $s(function() {
  var r = Is("^r", "gy");
  return r.lastIndex = 2, r.exec("str") !== null;
}), lp = {
  BROKEN_CARET: iE,
  MISSED_STICKY: nE,
  UNSUPPORTED_Y: As
}, oE = Ve, aE = et, sE = aE.RegExp, uE = oE(function() {
  var r = sE(".", "s");
  return !(r.dotAll && r.test(`
`) && r.flags === "s");
}), lE = Ve, cE = et, fE = cE.RegExp, pE = lE(function() {
  var r = fE("(?<a>b)", "g");
  return r.exec("b").groups.a !== "b" || "b".replace(r, "$<a>c") !== "bc";
}), on = xt, so = De, hE = lr, dE = tE, gE = lp, vE = wn, mE = Zi, yE = Jn.get, wE = uE, bE = pE, EE = vE("native-string-replace", String.prototype.replace), Ui = RegExp.prototype.exec, ka = Ui, TE = so("".charAt), SE = so("".indexOf), OE = so("".replace), ea = so("".slice), Da = function() {
  var r = /a/, e = /b*/g;
  return on(Ui, r, "a"), on(Ui, e, "a"), r.lastIndex !== 0 || e.lastIndex !== 0;
}(), cp = gE.BROKEN_CARET, Ua = /()??/.exec("")[1] !== void 0, $E = Da || Ua || cp || wE || bE;
$E && (ka = function(e) {
  var n = this, i = yE(n), s = hE(e), c = i.raw, v, d, m, l, a, h, p;
  if (c)
    return c.lastIndex = n.lastIndex, v = on(ka, c, s), n.lastIndex = c.lastIndex, v;
  var b = i.groups, O = cp && n.sticky, _ = on(dE, n), P = n.source, D = 0, I = s;
  if (O && (_ = OE(_, "y", ""), SE(_, "g") === -1 && (_ += "g"), I = ea(s, n.lastIndex), n.lastIndex > 0 && (!n.multiline || n.multiline && TE(s, n.lastIndex - 1) !== `
`) && (P = "(?: " + P + ")", I = " " + I, D++), d = new RegExp("^(?:" + P + ")", _)), Ua && (d = new RegExp("^" + P + "$(?!\\s)", _)), Da && (m = n.lastIndex), l = on(Ui, O ? d : n, I), O ? l ? (l.input = ea(l.input, D), l[0] = ea(l[0], D), l.index = n.lastIndex, n.lastIndex += l[0].length) : n.lastIndex = 0 : Da && l && (n.lastIndex = n.global ? l.index + l[0].length : m), Ua && l && l.length > 1 && on(EE, l[0], d, function() {
    for (a = 1; a < arguments.length - 2; a++)
      arguments[a] === void 0 && (l[a] = void 0);
  }), l && b)
    for (l.groups = h = mE(null), a = 0; a < b.length; a++)
      p = b[a], h[p[0]] = l[p[1]];
  return l;
});
var _s = ka, IE = yt, Il = _s;
IE({ target: "RegExp", proto: !0, forced: /./.exec !== Il }, {
  exec: Il
});
var Al = xt, _l = Or, AE = _s, xl = Ve, fp = ot, _E = Zn, xE = fp("species"), ta = RegExp.prototype, pp = function(r, e, n, i) {
  var s = fp(r), c = !xl(function() {
    var l = {};
    return l[s] = function() {
      return 7;
    }, ""[r](l) !== 7;
  }), v = c && !xl(function() {
    var l = !1, a = /a/;
    return r === "split" && (a = {}, a.constructor = {}, a.constructor[xE] = function() {
      return a;
    }, a.flags = "", a[s] = /./[s]), a.exec = function() {
      return l = !0, null;
    }, a[s](""), !l;
  });
  if (!c || !v || n) {
    var d = /./[s], m = e(s, ""[r], function(l, a, h, p, b) {
      var O = a.exec;
      return O === AE || O === ta.exec ? c && !b ? { done: !0, value: Al(d, a, h, p) } : { done: !0, value: Al(l, h, a, p) } : { done: !1 };
    });
    _l(String.prototype, r, m[0]), _l(ta, s, m[1]);
  }
  i && _E(ta[s], "sham", !0);
}, NE = Sf, PE = Ya, RE = TypeError, CE = function(r) {
  if (NE(r))
    return r;
  throw new RE(PE(r) + " is not a constructor");
}, Nl = Bt, LE = CE, FE = Yn, ME = ot, kE = ME("species"), DE = function(r, e) {
  var n = Nl(r).constructor, i;
  return n === void 0 || FE(i = Nl(n)[kE]) ? e : LE(i);
}, UE = uf.charAt, hp = function(r, e, n) {
  return e + (n ? UE(r, e).length : 1);
}, Pl = xt, BE = Bt, jE = Xe, GE = Tr, WE = _s, VE = TypeError, dp = function(r, e) {
  var n = r.exec;
  if (jE(n)) {
    var i = Pl(n, r, e);
    return i !== null && BE(i), i;
  }
  if (GE(r) === "RegExp")
    return Pl(WE, r, e);
  throw new VE("RegExp#exec called on incompatible receiver");
}, ra = xt, gp = De, qE = pp, zE = Bt, HE = Yn, XE = mn, YE = DE, KE = hp, ZE = is, Rl = lr, JE = Ka, Cl = dp, QE = lp, eT = Ve, Qr = QE.UNSUPPORTED_Y, tT = 4294967295, rT = Math.min, na = gp([].push), ia = gp("".slice), nT = !eT(function() {
  var r = /(?:)/, e = r.exec;
  r.exec = function() {
    return e.apply(this, arguments);
  };
  var n = "ab".split(r);
  return n.length !== 2 || n[0] !== "a" || n[1] !== "b";
}), Ll = "abbc".split(/(b)*/)[1] === "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
"test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
".".split(/()()/).length > 1 || "".split(/.?/).length;
qE("split", function(r, e, n) {
  var i = "0".split(void 0, 0).length ? function(s, c) {
    return s === void 0 && c === 0 ? [] : ra(e, this, s, c);
  } : e;
  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function(c, v) {
      var d = XE(this), m = HE(c) ? void 0 : JE(c, r);
      return m ? ra(m, c, d, v) : ra(i, Rl(d), c, v);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function(s, c) {
      var v = zE(this), d = Rl(s);
      if (!Ll) {
        var m = n(i, v, d, c, i !== e);
        if (m.done)
          return m.value;
      }
      var l = YE(v, RegExp), a = v.unicode, h = (v.ignoreCase ? "i" : "") + (v.multiline ? "m" : "") + (v.unicode ? "u" : "") + (Qr ? "g" : "y"), p = new l(Qr ? "^(?:" + v.source + ")" : v, h), b = c === void 0 ? tT : c >>> 0;
      if (b === 0)
        return [];
      if (d.length === 0)
        return Cl(p, d) === null ? [d] : [];
      for (var O = 0, _ = 0, P = []; _ < d.length; ) {
        p.lastIndex = Qr ? 0 : _;
        var D = Cl(p, Qr ? ia(d, _) : d), I;
        if (D === null || (I = rT(ZE(p.lastIndex + (Qr ? _ : 0)), d.length)) === O)
          _ = KE(d, _, a);
        else {
          if (na(P, ia(d, O, _)), P.length === b)
            return P;
          for (var x = 1; x <= D.length - 1; x++)
            if (na(P, D[x]), P.length === b)
              return P;
          _ = O = I;
        }
      }
      return na(P, ia(d, O)), P;
    }
  ];
}, Ll || !nT, Qr);
var xs = De, iT = Sr, oT = Math.floor, oa = xs("".charAt), aT = xs("".replace), aa = xs("".slice), sT = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, uT = /\$([$&'`]|\d{1,2})/g, lT = function(r, e, n, i, s, c) {
  var v = n + r.length, d = i.length, m = uT;
  return s !== void 0 && (s = iT(s), m = sT), aT(c, m, function(l, a) {
    var h;
    switch (oa(a, 0)) {
      case "$":
        return "$";
      case "&":
        return r;
      case "`":
        return aa(e, 0, n);
      case "'":
        return aa(e, v);
      case "<":
        h = s[aa(a, 1, -1)];
        break;
      default:
        var p = +a;
        if (p === 0)
          return l;
        if (p > d) {
          var b = oT(p / 10);
          return b === 0 ? l : b <= d ? i[b - 1] === void 0 ? oa(a, 1) : i[b - 1] + oa(a, 1) : l;
        }
        h = i[p - 1];
    }
    return h === void 0 ? "" : h;
  });
}, cT = Gf, Fl = xt, uo = De, fT = pp, pT = Ve, hT = Bt, dT = Xe, gT = Yn, vT = Yi, mT = is, en = lr, yT = mn, wT = hp, bT = Ka, ET = lT, TT = dp, ST = ot, Ba = ST("replace"), OT = Math.max, $T = Math.min, IT = uo([].concat), sa = uo([].push), Ml = uo("".indexOf), kl = uo("".slice), AT = function(r) {
  return r === void 0 ? r : String(r);
}, _T = function() {
  return "a".replace(/./, "$0") === "$0";
}(), Dl = function() {
  return /./[Ba] ? /./[Ba]("a", "$0") === "" : !1;
}(), xT = !pT(function() {
  var r = /./;
  return r.exec = function() {
    var e = [];
    return e.groups = { a: "7" }, e;
  }, "".replace(r, "$<a>") !== "7";
});
fT("replace", function(r, e, n) {
  var i = Dl ? "$" : "$0";
  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function(c, v) {
      var d = yT(this), m = gT(c) ? void 0 : bT(c, Ba);
      return m ? Fl(m, c, d, v) : Fl(e, en(d), c, v);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function(s, c) {
      var v = hT(this), d = en(s);
      if (typeof c == "string" && Ml(c, i) === -1 && Ml(c, "$<") === -1) {
        var m = n(e, v, d, c);
        if (m.done)
          return m.value;
      }
      var l = dT(c);
      l || (c = en(c));
      var a = v.global, h;
      a && (h = v.unicode, v.lastIndex = 0);
      for (var p = [], b; b = TT(v, d), !(b === null || (sa(p, b), !a)); ) {
        var O = en(b[0]);
        O === "" && (v.lastIndex = wT(d, mT(v.lastIndex), h));
      }
      for (var _ = "", P = 0, D = 0; D < p.length; D++) {
        b = p[D];
        for (var I = en(b[0]), x = OT($T(vT(b.index), d.length), 0), F = [], C, z = 1; z < b.length; z++)
          sa(F, AT(b[z]));
        var q = b.groups;
        if (l) {
          var G = IT([I], F, x, d);
          q !== void 0 && sa(G, q), C = en(cT(c, void 0, G));
        } else
          C = ET(I, d, x, F, q, c);
        x >= P && (_ += kl(d, P, x) + C, P = x + I.length);
      }
      return _ + kl(d, P);
    }
  ];
}, !xT || !_T || Dl);
var NT = yt, PT = ms.filter, RT = Os, CT = RT("filter");
NT({ target: "Array", proto: !0, forced: !CT }, {
  filter: function(e) {
    return PT(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var LT = zi, FT = Sr, MT = Wi, kT = Ki, Ul = TypeError, Bl = "Reduce of empty array with no initial value", jl = function(r) {
  return function(e, n, i, s) {
    var c = FT(e), v = MT(c), d = kT(c);
    if (LT(n), d === 0 && i < 2)
      throw new Ul(Bl);
    var m = r ? d - 1 : 0, l = r ? -1 : 1;
    if (i < 2)
      for (; ; ) {
        if (m in v) {
          s = v[m], m += l;
          break;
        }
        if (m += l, r ? m < 0 : d <= m)
          throw new Ul(Bl);
      }
    for (; r ? m >= 0 : d > m; m += l)
      m in v && (s = n(s, v[m], m, c));
    return s;
  };
}, DT = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: jl(!1),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: jl(!0)
}, UT = Ve, BT = function(r, e) {
  var n = [][r];
  return !!n && UT(function() {
    n.call(null, e || function() {
      return 1;
    }, 1);
  });
}, jT = et, GT = Tr, WT = GT(jT.process) === "process", VT = yt, qT = DT.left, zT = BT, Gl = qi, HT = WT, XT = !HT && Gl > 79 && Gl < 83, YT = XT || !zT("reduce");
VT({ target: "Array", proto: !0, forced: YT }, {
  reduce: function(e) {
    var n = arguments.length;
    return qT(this, e, n, n > 1 ? arguments[1] : void 0);
  }
});
var KT = TypeError, ZT = 9007199254740991, JT = function(r) {
  if (r > ZT)
    throw KT("Maximum allowed index exceeded");
  return r;
}, QT = mt, eS = St, tS = Xn, rS = function(r, e, n) {
  QT ? eS.f(r, e, tS(0, n)) : r[e] = n;
}, nS = yt, iS = Ve, oS = gs, aS = ur, sS = Sr, uS = Ki, Wl = JT, Vl = rS, lS = Of, cS = Os, fS = ot, pS = qi, vp = fS("isConcatSpreadable"), hS = pS >= 51 || !iS(function() {
  var r = [];
  return r[vp] = !1, r.concat()[0] !== r;
}), dS = function(r) {
  if (!aS(r))
    return !1;
  var e = r[vp];
  return e !== void 0 ? !!e : oS(r);
}, gS = !hS || !cS("concat");
nS({ target: "Array", proto: !0, arity: 1, forced: gS }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function(e) {
    var n = sS(this), i = lS(n, 0), s = 0, c, v, d, m, l;
    for (c = -1, d = arguments.length; c < d; c++)
      if (l = c === -1 ? n : arguments[c], dS(l))
        for (m = uS(l), Wl(s + m), v = 0; v < m; v++, s++)
          v in l && Vl(i, s, l[v]);
      else
        Wl(s + 1), Vl(i, s++, l);
    return i.length = s, i;
  }
});
Object.defineProperty(En, "__esModule", {
  value: !0
});
En.encodePath = vS;
En.basename = mS;
En.dirname = yS;
En.joinPaths = ja;
En.isSamePath = wS;
function vS(r) {
  return r && r.split("/").map(encodeURIComponent).join("/");
}
function mS(r) {
  return r.replace(/\\/g, "/").replace(/.*\//, "");
}
function yS(r) {
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
  var s = i[i.length - 1], c = i[0].charAt(0) === "/", v = s.charAt(s.length - 1) === "/", d = i.reduce(function(a, h) {
    return a.concat(h.split("/"));
  }, []), m = !c, l = d.reduce(function(a, h) {
    return h === "" ? a : m ? (m = !1, a + h) : a + "/" + h;
  }, "");
  return v ? l + "/" : l;
}
function wS(r, e) {
  var n = (r || "").split("/").filter(function(s) {
    return s !== ".";
  }), i = (e || "").split("/").filter(function(s) {
    return s !== ".";
  });
  return r = ja.apply(void 0, n), e = ja.apply(void 0, i), r === e;
}
/*! For license information please see index.js.LICENSE.txt */
var bS = { 2: (r) => {
  function e(s, c, v) {
    s instanceof RegExp && (s = n(s, v)), c instanceof RegExp && (c = n(c, v));
    var d = i(s, c, v);
    return d && { start: d[0], end: d[1], pre: v.slice(0, d[0]), body: v.slice(d[0] + s.length, d[1]), post: v.slice(d[1] + c.length) };
  }
  function n(s, c) {
    var v = c.match(s);
    return v ? v[0] : null;
  }
  function i(s, c, v) {
    var d, m, l, a, h, p = v.indexOf(s), b = v.indexOf(c, p + 1), O = p;
    if (p >= 0 && b > 0) {
      for (d = [], l = v.length; O >= 0 && !h; )
        O == p ? (d.push(O), p = v.indexOf(s, O + 1)) : d.length == 1 ? h = [d.pop(), b] : ((m = d.pop()) < l && (l = m, a = b), b = v.indexOf(c, O + 1)), O = p < b && p >= 0 ? p : b;
      d.length && (h = [l, a]);
    }
    return h;
  }
  r.exports = e, e.range = i;
}, 101: function(r, e, n) {
  var i;
  r = n.nmd(r), function(s) {
    var c = (r && r.exports, typeof li == "object" && li);
    c.global !== c && c.window;
    var v = function(h) {
      this.message = h;
    };
    (v.prototype = new Error()).name = "InvalidCharacterError";
    var d = function(h) {
      throw new v(h);
    }, m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = /[\t\n\f\r ]/g, a = { encode: function(h) {
      h = String(h), /[^\0-\xFF]/.test(h) && d("The string to be encoded contains characters outside of the Latin1 range.");
      for (var p, b, O, _, P = h.length % 3, D = "", I = -1, x = h.length - P; ++I < x; )
        p = h.charCodeAt(I) << 16, b = h.charCodeAt(++I) << 8, O = h.charCodeAt(++I), D += m.charAt((_ = p + b + O) >> 18 & 63) + m.charAt(_ >> 12 & 63) + m.charAt(_ >> 6 & 63) + m.charAt(63 & _);
      return P == 2 ? (p = h.charCodeAt(I) << 8, b = h.charCodeAt(++I), D += m.charAt((_ = p + b) >> 10) + m.charAt(_ >> 4 & 63) + m.charAt(_ << 2 & 63) + "=") : P == 1 && (_ = h.charCodeAt(I), D += m.charAt(_ >> 2) + m.charAt(_ << 4 & 63) + "=="), D;
    }, decode: function(h) {
      var p = (h = String(h).replace(l, "")).length;
      p % 4 == 0 && (p = (h = h.replace(/==?$/, "")).length), (p % 4 == 1 || /[^+a-zA-Z0-9/]/.test(h)) && d("Invalid character: the string to be decoded is not correctly encoded.");
      for (var b, O, _ = 0, P = "", D = -1; ++D < p; )
        O = m.indexOf(h.charAt(D)), b = _ % 4 ? 64 * b + O : O, _++ % 4 && (P += String.fromCharCode(255 & b >> (-2 * _ & 6)));
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
    for (var s = [], c = 0, v = 0; c < i.length; c++, v += 8)
      s[v >>> 5] |= i[c] << 24 - v % 32;
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
      for (var v = i[c] << 16 | i[c + 1] << 8 | i[c + 2], d = 0; d < 4; d++)
        8 * c + 6 * d <= 8 * i.length ? s.push(e.charAt(v >>> 6 * (3 - d) & 63)) : s.push("=");
    return s.join("");
  }, base64ToBytes: function(i) {
    i = i.replace(/[^A-Z0-9+\/]/gi, "");
    for (var s = [], c = 0, v = 0; c < i.length; v = ++c % 4)
      v != 0 && s.push((e.indexOf(i.charAt(c - 1)) & Math.pow(2, -2 * v + 8) - 1) << 2 * v | e.indexOf(i.charAt(c)) >>> 6 - 2 * v);
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
  }, e.merge = function(c, v, d) {
    if (v) {
      const m = Object.keys(v), l = m.length;
      for (let a = 0; a < l; a++)
        c[m[a]] = d === "strict" ? [v[m[a]]] : v[m[a]];
    }
  }, e.getValue = function(c) {
    return e.isExist(c) ? c : "";
  }, e.isName = function(c) {
    return s.exec(c) != null;
  }, e.getAllMatches = function(c, v) {
    const d = [];
    let m = v.exec(c);
    for (; m; ) {
      const l = [];
      l.startIndex = v.lastIndex - m[0].length;
      const a = m.length;
      for (let h = 0; h < a; h++)
        l.push(m[h]);
      d.push(l), m = v.exec(c);
    }
    return d;
  }, e.nameRegexp = i;
}, 31: (r, e, n) => {
  const i = n(705), s = { allowBooleanAttributes: !1, unpairedTags: [] };
  function c(I) {
    return I === " " || I === "	" || I === `
` || I === "\r";
  }
  function v(I, x) {
    const F = x;
    for (; x < I.length; x++)
      if (!(I[x] != "?" && I[x] != " ")) {
        const C = I.substr(F, x - F);
        if (x > 5 && C === "xml")
          return O("InvalidXml", "XML declaration allowed only at the start of the document.", P(I, x));
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
        if (G += 2, G = v(I, G), G.err)
          return G;
      } else {
        if (I[G] !== "<") {
          if (c(I[G]))
            continue;
          return O("InvalidChar", "char '" + I[G] + "' is not expected.", P(I, G));
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
              return re = H.trim().length === 0 ? "Invalid space after '<'." : "Tag '" + H + "' is an invalid name.", O("InvalidTag", re, P(I, G));
            }
            const K = a(I, G);
            if (K === !1)
              return O("InvalidAttr", "Attributes for '" + H + "' have open quote.", P(I, G));
            let V = K.value;
            if (G = K.index, V[V.length - 1] === "/") {
              const re = G - V.length;
              V = V.substring(0, V.length - 1);
              const pe = p(V, x);
              if (pe !== !0)
                return O(pe.err.code, pe.err.msg, P(I, re + pe.err.line));
              C = !0;
            } else if (Z) {
              if (!K.tagClosed)
                return O("InvalidTag", "Closing tag '" + H + "' doesn't have proper closing.", P(I, G));
              if (V.trim().length > 0)
                return O("InvalidTag", "Closing tag '" + H + "' can't have attributes or invalid starting.", P(I, X));
              {
                const re = F.pop();
                if (H !== re.tagName) {
                  let pe = P(I, re.tagStartPos);
                  return O("InvalidTag", "Expected closing tag '" + re.tagName + "' (opened in line " + pe.line + ", col " + pe.col + ") instead of closing tag '" + H + "'.", P(I, X));
                }
                F.length == 0 && (z = !0);
              }
            } else {
              const re = p(V, x);
              if (re !== !0)
                return O(re.err.code, re.err.msg, P(I, G - V.length + re.err.line));
              if (z === !0)
                return O("InvalidXml", "Multiple possible root nodes found.", P(I, G));
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
                if (G = v(I, ++G), G.err)
                  return G;
              } else if (I[G] === "&") {
                const re = b(I, G);
                if (re == -1)
                  return O("InvalidChar", "char '&' is not expected.", P(I, G));
                G = re;
              } else if (z === !0 && !c(I[G]))
                return O("InvalidXml", "Extra text at the end", P(I, G));
            I[G] === "<" && G--;
          }
        }
      }
    var q;
    return C ? F.length == 1 ? O("InvalidTag", "Unclosed tag '" + F[0].tagName + "'.", P(I, F[0].tagStartPos)) : !(F.length > 0) || O("InvalidXml", "Invalid '" + JSON.stringify(F.map((G) => G.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 }) : O("InvalidXml", "Start tag expected.", 1);
  };
  const m = '"', l = "'";
  function a(I, x) {
    let F = "", C = "", z = !1;
    for (; x < I.length; x++) {
      if (I[x] === m || I[x] === l)
        C === "" ? C = I[x] : C !== I[x] || (C = "");
      else if (I[x] === ">" && C === "") {
        z = !0;
        break;
      }
      F += I[x];
    }
    return C === "" && { value: F, index: x, tagClosed: z };
  }
  const h = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
  function p(I, x) {
    const F = i.getAllMatches(I, h), C = {};
    for (let z = 0; z < F.length; z++) {
      if (F[z][1].length === 0)
        return O("InvalidAttr", "Attribute '" + F[z][2] + "' has no space in starting.", D(F[z]));
      if (F[z][3] !== void 0 && F[z][4] === void 0)
        return O("InvalidAttr", "Attribute '" + F[z][2] + "' is without value.", D(F[z]));
      if (F[z][3] === void 0 && !x.allowBooleanAttributes)
        return O("InvalidAttr", "boolean attribute '" + F[z][2] + "' is not allowed.", D(F[z]));
      const q = F[z][2];
      if (!_(q))
        return O("InvalidAttr", "Attribute '" + q + "' is an invalid name.", D(F[z]));
      if (C.hasOwnProperty(q))
        return O("InvalidAttr", "Attribute '" + q + "' is repeated.", D(F[z]));
      C[q] = 1;
    }
    return !0;
  }
  function b(I, x) {
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
  function O(I, x, F) {
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
    } : (this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = m), this.processTextOrObjNode = v, this.options.format ? (this.indentate = d, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
      return "";
    }, this.tagEndChar = ">", this.newLine = "");
  }
  function v(l, a, h) {
    const p = this.j2x(l, h + 1);
    return l[this.options.textNodeName] !== void 0 && Object.keys(l).length === 1 ? this.buildTextValNode(l[this.options.textNodeName], a, p.attrStr, h) : this.buildObjectNode(p.val, a, p.attrStr, h);
  }
  function d(l) {
    return this.options.indentBy.repeat(l);
  }
  function m(l) {
    return !(!l.startsWith(this.options.attributeNamePrefix) || l === this.options.textNodeName) && l.substr(this.attrPrefixLen);
  }
  c.prototype.build = function(l) {
    return this.options.preserveOrder ? i(l, this.options) : (Array.isArray(l) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (l = { [this.options.arrayNodeName]: l }), this.j2x(l, 0).val);
  }, c.prototype.j2x = function(l, a) {
    let h = "", p = "";
    for (let b in l)
      if (l[b] === void 0)
        this.isAttribute(b) && (p += "");
      else if (l[b] === null)
        this.isAttribute(b) ? p += "" : b[0] === "?" ? p += this.indentate(a) + "<" + b + "?" + this.tagEndChar : p += this.indentate(a) + "<" + b + "/" + this.tagEndChar;
      else if (l[b] instanceof Date)
        p += this.buildTextValNode(l[b], b, "", a);
      else if (typeof l[b] != "object") {
        const O = this.isAttribute(b);
        if (O)
          h += this.buildAttrPairStr(O, "" + l[b]);
        else if (b === this.options.textNodeName) {
          let _ = this.options.tagValueProcessor(b, "" + l[b]);
          p += this.replaceEntitiesValue(_);
        } else
          p += this.buildTextValNode(l[b], b, "", a);
      } else if (Array.isArray(l[b])) {
        const O = l[b].length;
        let _ = "";
        for (let P = 0; P < O; P++) {
          const D = l[b][P];
          D === void 0 || (D === null ? b[0] === "?" ? p += this.indentate(a) + "<" + b + "?" + this.tagEndChar : p += this.indentate(a) + "<" + b + "/" + this.tagEndChar : typeof D == "object" ? this.options.oneListGroup ? _ += this.j2x(D, a + 1).val : _ += this.processTextOrObjNode(D, b, a) : _ += this.buildTextValNode(D, b, "", a));
        }
        this.options.oneListGroup && (_ = this.buildObjectNode(_, b, "", a)), p += _;
      } else if (this.options.attributesGroupName && b === this.options.attributesGroupName) {
        const O = Object.keys(l[b]), _ = O.length;
        for (let P = 0; P < _; P++)
          h += this.buildAttrPairStr(O[P], "" + l[b][O[P]]);
      } else
        p += this.processTextOrObjNode(l[b], b, a);
    return { attrStr: h, val: p };
  }, c.prototype.buildAttrPairStr = function(l, a) {
    return a = this.options.attributeValueProcessor(l, "" + a), a = this.replaceEntitiesValue(a), this.options.suppressBooleanAttributes && a === "true" ? " " + l : " " + l + '="' + a + '"';
  }, c.prototype.buildObjectNode = function(l, a, h, p) {
    if (l === "")
      return a[0] === "?" ? this.indentate(p) + "<" + a + h + "?" + this.tagEndChar : this.indentate(p) + "<" + a + h + this.closeTag(a) + this.tagEndChar;
    {
      let b = "</" + a + this.tagEndChar, O = "";
      return a[0] === "?" && (O = "?", b = ""), !h && h !== "" || l.indexOf("<") !== -1 ? this.options.commentPropName !== !1 && a === this.options.commentPropName && O.length === 0 ? this.indentate(p) + "<!--".concat(l, "-->") + this.newLine : this.indentate(p) + "<" + a + h + O + this.tagEndChar + l + this.indentate(p) + b : this.indentate(p) + "<" + a + h + O + ">" + l + b;
    }
  }, c.prototype.closeTag = function(l) {
    let a = "";
    return this.options.unpairedTags.indexOf(l) !== -1 ? this.options.suppressUnpairedNode || (a = "/") : a = this.options.suppressEmptyNode ? "/" : "></".concat(l), a;
  }, c.prototype.buildTextValNode = function(l, a, h, p) {
    if (this.options.cdataPropName !== !1 && a === this.options.cdataPropName)
      return this.indentate(p) + "<![CDATA[".concat(l, "]]>") + this.newLine;
    if (this.options.commentPropName !== !1 && a === this.options.commentPropName)
      return this.indentate(p) + "<!--".concat(l, "-->") + this.newLine;
    if (a[0] === "?")
      return this.indentate(p) + "<" + a + h + "?" + this.tagEndChar;
    {
      let b = this.options.tagValueProcessor(a, l);
      return b = this.replaceEntitiesValue(b), b === "" ? this.indentate(p) + "<" + a + h + this.closeTag(a) + this.tagEndChar : this.indentate(p) + "<" + a + h + ">" + b + "</" + a + this.tagEndChar;
    }
  }, c.prototype.replaceEntitiesValue = function(l) {
    if (l && l.length > 0 && this.options.processEntities)
      for (let a = 0; a < this.options.entities.length; a++) {
        const h = this.options.entities[a];
        l = l.replace(h.regex, h.val);
      }
    return l;
  }, r.exports = c;
}, 87: (r) => {
  function e(v, d, m, l) {
    let a = "", h = !1;
    for (let p = 0; p < v.length; p++) {
      const b = v[p], O = n(b);
      let _ = "";
      if (_ = m.length === 0 ? O : "".concat(m, ".").concat(O), O === d.textNodeName) {
        let F = b[O];
        s(_, d) || (F = d.tagValueProcessor(O, F), F = c(F, d)), h && (a += l), a += F, h = !1;
        continue;
      }
      if (O === d.cdataPropName) {
        h && (a += l), a += "<![CDATA[".concat(b[O][0][d.textNodeName], "]]>"), h = !1;
        continue;
      }
      if (O === d.commentPropName) {
        a += l + "<!--".concat(b[O][0][d.textNodeName], "-->"), h = !0;
        continue;
      }
      if (O[0] === "?") {
        const F = i(b[":@"], d), C = O === "?xml" ? "" : l;
        let z = b[O][0][d.textNodeName];
        z = z.length !== 0 ? " " + z : "", a += C + "<".concat(O).concat(z).concat(F, "?>"), h = !0;
        continue;
      }
      let P = l;
      P !== "" && (P += d.indentBy);
      const D = i(b[":@"], d), I = l + "<".concat(O).concat(D), x = e(b[O], d, _, P);
      d.unpairedTags.indexOf(O) !== -1 ? d.suppressUnpairedNode ? a += I + ">" : a += I + "/>" : x && x.length !== 0 || !d.suppressEmptyNode ? x && x.endsWith(">") ? a += I + ">".concat(x).concat(l, "</").concat(O, ">") : (a += I + ">", x && l !== "" && (x.includes("/>") || x.includes("</")) ? a += l + d.indentBy + x + l : a += x, a += "</".concat(O, ">")) : a += I + "/>", h = !0;
    }
    return a;
  }
  function n(v) {
    const d = Object.keys(v);
    for (let m = 0; m < d.length; m++) {
      const l = d[m];
      if (l !== ":@")
        return l;
    }
  }
  function i(v, d) {
    let m = "";
    if (v && !d.ignoreAttributes)
      for (let l in v) {
        let a = d.attributeValueProcessor(l, v[l]);
        a = c(a, d), a === !0 && d.suppressBooleanAttributes ? m += " ".concat(l.substr(d.attributeNamePrefix.length)) : m += " ".concat(l.substr(d.attributeNamePrefix.length), '="').concat(a, '"');
      }
    return m;
  }
  function s(v, d) {
    let m = (v = v.substr(0, v.length - d.textNodeName.length - 1)).substr(v.lastIndexOf(".") + 1);
    for (let l in d.stopNodes)
      if (d.stopNodes[l] === v || d.stopNodes[l] === "*." + m)
        return !0;
    return !1;
  }
  function c(v, d) {
    if (v && v.length > 0 && d.processEntities)
      for (let m = 0; m < d.entities.length; m++) {
        const l = d.entities[m];
        v = v.replace(l.regex, l.val);
      }
    return v;
  }
  r.exports = function(v, d) {
    let m = "";
    return d.format && d.indentBy.length > 0 && (m = `
`), e(v, d, "", m);
  };
}, 193: (r, e, n) => {
  const i = n(705);
  function s(h, p) {
    let b = "";
    for (; p < h.length && h[p] !== "'" && h[p] !== '"'; p++)
      b += h[p];
    if (b = b.trim(), b.indexOf(" ") !== -1)
      throw new Error("External entites are not supported");
    const O = h[p++];
    let _ = "";
    for (; p < h.length && h[p] !== O; p++)
      _ += h[p];
    return [b, _, p];
  }
  function c(h, p) {
    return h[p + 1] === "!" && h[p + 2] === "-" && h[p + 3] === "-";
  }
  function v(h, p) {
    return h[p + 1] === "!" && h[p + 2] === "E" && h[p + 3] === "N" && h[p + 4] === "T" && h[p + 5] === "I" && h[p + 6] === "T" && h[p + 7] === "Y";
  }
  function d(h, p) {
    return h[p + 1] === "!" && h[p + 2] === "E" && h[p + 3] === "L" && h[p + 4] === "E" && h[p + 5] === "M" && h[p + 6] === "E" && h[p + 7] === "N" && h[p + 8] === "T";
  }
  function m(h, p) {
    return h[p + 1] === "!" && h[p + 2] === "A" && h[p + 3] === "T" && h[p + 4] === "T" && h[p + 5] === "L" && h[p + 6] === "I" && h[p + 7] === "S" && h[p + 8] === "T";
  }
  function l(h, p) {
    return h[p + 1] === "!" && h[p + 2] === "N" && h[p + 3] === "O" && h[p + 4] === "T" && h[p + 5] === "A" && h[p + 6] === "T" && h[p + 7] === "I" && h[p + 8] === "O" && h[p + 9] === "N";
  }
  function a(h) {
    if (i.isName(h))
      return h;
    throw new Error("Invalid entity name ".concat(h));
  }
  r.exports = function(h, p) {
    const b = {};
    if (h[p + 3] !== "O" || h[p + 4] !== "C" || h[p + 5] !== "T" || h[p + 6] !== "Y" || h[p + 7] !== "P" || h[p + 8] !== "E")
      throw new Error("Invalid Tag instead of DOCTYPE");
    {
      p += 9;
      let O = 1, _ = !1, P = !1, D = "";
      for (; p < h.length; p++)
        if (h[p] !== "<" || P)
          if (h[p] === ">") {
            if (P ? h[p - 1] === "-" && h[p - 2] === "-" && (P = !1, O--) : O--, O === 0)
              break;
          } else
            h[p] === "[" ? _ = !0 : D += h[p];
        else {
          if (_ && v(h, p))
            p += 7, [entityName, val, p] = s(h, p + 1), val.indexOf("&") === -1 && (b[a(entityName)] = { regx: RegExp("&".concat(entityName, ";"), "g"), val });
          else if (_ && d(h, p))
            p += 8;
          else if (_ && m(h, p))
            p += 8;
          else if (_ && l(h, p))
            p += 9;
          else {
            if (!c)
              throw new Error("Invalid DOCTYPE");
            P = !0;
          }
          O++, D = "";
        }
      if (O !== 0)
        throw new Error("Unclosed DOCTYPE");
    }
    return { entities: b, i: p };
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
  const i = n(705), s = n(365), c = n(193), v = n(494);
  function d(C) {
    const z = Object.keys(C);
    for (let q = 0; q < z.length; q++) {
      const G = z[q];
      this.lastEntities[G] = { regex: new RegExp("&" + G + ";", "g"), val: C[G] };
    }
  }
  function m(C, z, q, G, X, Z, H) {
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
  function h(C, z, q) {
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
  function b(C, z, q) {
    const G = this.options.updateTag(z.tagname, q, z[":@"]);
    G === !1 || (typeof G == "string" && (z.tagname = G), C.addChild(z));
  }
  const O = function(C) {
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
        let Me = re[me];
        if (Ae)
          Me === Ae && (Ae = "");
        else if (Me === '"' || Me === "'")
          Ae = Me;
        else if (Me === ce[0]) {
          if (!ce[1])
            return { data: Ee, index: me };
          if (re[me + 1] === ce[1])
            return { data: Ee, index: me };
        } else
          Me === "	" && (Me = " ");
        Ee += Me;
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
      return G === "true" || G !== "false" && v(C, q);
    }
    return i.isExist(C) ? C : "";
  }
  r.exports = class {
    constructor(C) {
      this.options = C, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = { apos: { regex: /&(apos|#39|#x27);/g, val: "'" }, gt: { regex: /&(gt|#62|#x3E);/g, val: ">" }, lt: { regex: /&(lt|#60|#x3C);/g, val: "<" }, quot: { regex: /&(quot|#34|#x22);/g, val: '"' } }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = { space: { regex: /&(nbsp|#160);/g, val: " " }, cent: { regex: /&(cent|#162);/g, val: "¢" }, pound: { regex: /&(pound|#163);/g, val: "£" }, yen: { regex: /&(yen|#165);/g, val: "¥" }, euro: { regex: /&(euro|#8364);/g, val: "€" }, copyright: { regex: /&(copy|#169);/g, val: "©" }, reg: { regex: /&(reg|#174);/g, val: "®" }, inr: { regex: /&(inr|#8377);/g, val: "₹" } }, this.addExternalEntities = d, this.parseXml = p, this.parseTextData = m, this.resolveNameSpace = l, this.buildAttributesMap = h, this.isItStopNode = P, this.replaceEntitiesValue = O, this.readStopNodeData = x, this.saveTextToParentTag = _, this.addChild = b;
    }
  };
}, 338: (r, e, n) => {
  const { buildOptions: i } = n(63), s = n(299), { prettify: c } = n(728), v = n(31);
  r.exports = class {
    constructor(d) {
      this.externalEntities = {}, this.options = i(d);
    }
    parse(d, m) {
      if (typeof d != "string") {
        if (!d.toString)
          throw new Error("XML data is accepted in String or Bytes[] form.");
        d = d.toString();
      }
      if (m) {
        m === !0 && (m = {});
        const h = v.validate(d, m);
        if (h !== !0)
          throw Error("".concat(h.err.msg, ":").concat(h.err.line, ":").concat(h.err.col));
      }
      const l = new s(this.options);
      l.addExternalEntities(this.externalEntities);
      const a = l.parseXml(d);
      return this.options.preserveOrder || a === void 0 ? a : c(a, this.options);
    }
    addEntity(d, m) {
      if (m.indexOf("&") !== -1)
        throw new Error("Entity value can't have '&'");
      if (d.indexOf("&") !== -1 || d.indexOf(";") !== -1)
        throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
      if (m === "&")
        throw new Error("An entity with value '&' is not permitted");
      this.externalEntities[d] = m;
    }
  };
}, 728: (r, e) => {
  function n(v, d, m) {
    let l;
    const a = {};
    for (let h = 0; h < v.length; h++) {
      const p = v[h], b = i(p);
      let O = "";
      if (O = m === void 0 ? b : m + "." + b, b === d.textNodeName)
        l === void 0 ? l = p[b] : l += "" + p[b];
      else {
        if (b === void 0)
          continue;
        if (p[b]) {
          let _ = n(p[b], d, O);
          const P = c(_, d);
          p[":@"] ? s(_, p[":@"], O, d) : Object.keys(_).length !== 1 || _[d.textNodeName] === void 0 || d.alwaysCreateTextNode ? Object.keys(_).length === 0 && (d.alwaysCreateTextNode ? _[d.textNodeName] = "" : _ = "") : _ = _[d.textNodeName], a[b] !== void 0 && a.hasOwnProperty(b) ? (Array.isArray(a[b]) || (a[b] = [a[b]]), a[b].push(_)) : d.isArray(b, O, P) ? a[b] = [_] : a[b] = _;
        }
      }
    }
    return typeof l == "string" ? l.length > 0 && (a[d.textNodeName] = l) : l !== void 0 && (a[d.textNodeName] = l), a;
  }
  function i(v) {
    const d = Object.keys(v);
    for (let m = 0; m < d.length; m++) {
      const l = d[m];
      if (l !== ":@")
        return l;
    }
  }
  function s(v, d, m, l) {
    if (d) {
      const a = Object.keys(d), h = a.length;
      for (let p = 0; p < h; p++) {
        const b = a[p];
        l.isArray(b, m + "." + b, !0, !0) ? v[b] = [d[b]] : v[b] = d[b];
      }
    }
  }
  function c(v, d) {
    const { textNodeName: m } = d, l = Object.keys(v).length;
    return l === 0 || !(l !== 1 || !v[m] && typeof v[m] != "boolean" && v[m] !== 0);
  }
  e.prettify = function(v, d) {
    return n(v, d);
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
  var i, s, c, v, d;
  i = n(298), s = n(526).utf8, c = n(135), v = n(526).bin, (d = function(m, l) {
    m.constructor == String ? m = l && l.encoding === "binary" ? v.stringToBytes(m) : s.stringToBytes(m) : c(m) ? m = Array.prototype.slice.call(m, 0) : Array.isArray(m) || m.constructor === Uint8Array || (m = m.toString());
    for (var a = i.bytesToWords(m), h = 8 * m.length, p = 1732584193, b = -271733879, O = -1732584194, _ = 271733878, P = 0; P < a.length; P++)
      a[P] = 16711935 & (a[P] << 8 | a[P] >>> 24) | 4278255360 & (a[P] << 24 | a[P] >>> 8);
    a[h >>> 5] |= 128 << h % 32, a[14 + (h + 64 >>> 9 << 4)] = h;
    var D = d._ff, I = d._gg, x = d._hh, F = d._ii;
    for (P = 0; P < a.length; P += 16) {
      var C = p, z = b, q = O, G = _;
      p = D(p, b, O, _, a[P + 0], 7, -680876936), _ = D(_, p, b, O, a[P + 1], 12, -389564586), O = D(O, _, p, b, a[P + 2], 17, 606105819), b = D(b, O, _, p, a[P + 3], 22, -1044525330), p = D(p, b, O, _, a[P + 4], 7, -176418897), _ = D(_, p, b, O, a[P + 5], 12, 1200080426), O = D(O, _, p, b, a[P + 6], 17, -1473231341), b = D(b, O, _, p, a[P + 7], 22, -45705983), p = D(p, b, O, _, a[P + 8], 7, 1770035416), _ = D(_, p, b, O, a[P + 9], 12, -1958414417), O = D(O, _, p, b, a[P + 10], 17, -42063), b = D(b, O, _, p, a[P + 11], 22, -1990404162), p = D(p, b, O, _, a[P + 12], 7, 1804603682), _ = D(_, p, b, O, a[P + 13], 12, -40341101), O = D(O, _, p, b, a[P + 14], 17, -1502002290), p = I(p, b = D(b, O, _, p, a[P + 15], 22, 1236535329), O, _, a[P + 1], 5, -165796510), _ = I(_, p, b, O, a[P + 6], 9, -1069501632), O = I(O, _, p, b, a[P + 11], 14, 643717713), b = I(b, O, _, p, a[P + 0], 20, -373897302), p = I(p, b, O, _, a[P + 5], 5, -701558691), _ = I(_, p, b, O, a[P + 10], 9, 38016083), O = I(O, _, p, b, a[P + 15], 14, -660478335), b = I(b, O, _, p, a[P + 4], 20, -405537848), p = I(p, b, O, _, a[P + 9], 5, 568446438), _ = I(_, p, b, O, a[P + 14], 9, -1019803690), O = I(O, _, p, b, a[P + 3], 14, -187363961), b = I(b, O, _, p, a[P + 8], 20, 1163531501), p = I(p, b, O, _, a[P + 13], 5, -1444681467), _ = I(_, p, b, O, a[P + 2], 9, -51403784), O = I(O, _, p, b, a[P + 7], 14, 1735328473), p = x(p, b = I(b, O, _, p, a[P + 12], 20, -1926607734), O, _, a[P + 5], 4, -378558), _ = x(_, p, b, O, a[P + 8], 11, -2022574463), O = x(O, _, p, b, a[P + 11], 16, 1839030562), b = x(b, O, _, p, a[P + 14], 23, -35309556), p = x(p, b, O, _, a[P + 1], 4, -1530992060), _ = x(_, p, b, O, a[P + 4], 11, 1272893353), O = x(O, _, p, b, a[P + 7], 16, -155497632), b = x(b, O, _, p, a[P + 10], 23, -1094730640), p = x(p, b, O, _, a[P + 13], 4, 681279174), _ = x(_, p, b, O, a[P + 0], 11, -358537222), O = x(O, _, p, b, a[P + 3], 16, -722521979), b = x(b, O, _, p, a[P + 6], 23, 76029189), p = x(p, b, O, _, a[P + 9], 4, -640364487), _ = x(_, p, b, O, a[P + 12], 11, -421815835), O = x(O, _, p, b, a[P + 15], 16, 530742520), p = F(p, b = x(b, O, _, p, a[P + 2], 23, -995338651), O, _, a[P + 0], 6, -198630844), _ = F(_, p, b, O, a[P + 7], 10, 1126891415), O = F(O, _, p, b, a[P + 14], 15, -1416354905), b = F(b, O, _, p, a[P + 5], 21, -57434055), p = F(p, b, O, _, a[P + 12], 6, 1700485571), _ = F(_, p, b, O, a[P + 3], 10, -1894986606), O = F(O, _, p, b, a[P + 10], 15, -1051523), b = F(b, O, _, p, a[P + 1], 21, -2054922799), p = F(p, b, O, _, a[P + 8], 6, 1873313359), _ = F(_, p, b, O, a[P + 15], 10, -30611744), O = F(O, _, p, b, a[P + 6], 15, -1560198380), b = F(b, O, _, p, a[P + 13], 21, 1309151649), p = F(p, b, O, _, a[P + 4], 6, -145523070), _ = F(_, p, b, O, a[P + 11], 10, -1120210379), O = F(O, _, p, b, a[P + 2], 15, 718787259), b = F(b, O, _, p, a[P + 9], 21, -343485551), p = p + C >>> 0, b = b + z >>> 0, O = O + q >>> 0, _ = _ + G >>> 0;
    }
    return i.endian([p, b, O, _]);
  })._ff = function(m, l, a, h, p, b, O) {
    var _ = m + (l & a | ~l & h) + (p >>> 0) + O;
    return (_ << b | _ >>> 32 - b) + l;
  }, d._gg = function(m, l, a, h, p, b, O) {
    var _ = m + (l & h | a & ~h) + (p >>> 0) + O;
    return (_ << b | _ >>> 32 - b) + l;
  }, d._hh = function(m, l, a, h, p, b, O) {
    var _ = m + (l ^ a ^ h) + (p >>> 0) + O;
    return (_ << b | _ >>> 32 - b) + l;
  }, d._ii = function(m, l, a, h, p, b, O) {
    var _ = m + (a ^ (l | ~h)) + (p >>> 0) + O;
    return (_ << b | _ >>> 32 - b) + l;
  }, d._blocksize = 16, d._digestsize = 16, r.exports = function(m, l) {
    if (m == null)
      throw new Error("Illegal argument " + m);
    var a = i.wordsToBytes(d(m, l));
    return l && l.asBytes ? a : l && l.asString ? v.bytesToString(a) : i.bytesToHex(a);
  };
}, 285: (r, e, n) => {
  var i = n(2);
  r.exports = function(D) {
    return D ? (D.substr(0, 2) === "{}" && (D = "\\{\\}" + D.substr(2)), P(function(I) {
      return I.split("\\\\").join(s).split("\\{").join(c).split("\\}").join(v).split("\\,").join(d).split("\\.").join(m);
    }(D), !0).map(a)) : [];
  };
  var s = "\0SLASH" + Math.random() + "\0", c = "\0OPEN" + Math.random() + "\0", v = "\0CLOSE" + Math.random() + "\0", d = "\0COMMA" + Math.random() + "\0", m = "\0PERIOD" + Math.random() + "\0";
  function l(D) {
    return parseInt(D, 10) == D ? parseInt(D, 10) : D.charCodeAt(0);
  }
  function a(D) {
    return D.split(s).join("\\").split(c).join("{").split(v).join("}").split(d).join(",").split(m).join(".");
  }
  function h(D) {
    if (!D)
      return [""];
    var I = [], x = i("{", "}", D);
    if (!x)
      return D.split(",");
    var F = x.pre, C = x.body, z = x.post, q = F.split(",");
    q[q.length - 1] += "{" + C + "}";
    var G = h(z);
    return z.length && (q[q.length - 1] += G.shift(), q.push.apply(q, G)), I.push.apply(I, q), I;
  }
  function p(D) {
    return "{" + D + "}";
  }
  function b(D) {
    return /^-?0\d/.test(D);
  }
  function O(D, I) {
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
        return F.post.match(/,.*\}/) ? P(D = F.pre + "{" + F.body + v + F.post) : [D];
      if (V)
        X = F.body.split(/\.\./);
      else if ((X = h(F.body)).length === 1 && (X = P(X[0], !1).map(p)).length === 1)
        return z.map(function(Ot) {
          return F.pre + X[0] + Ot;
        });
      if (V) {
        var pe = l(X[0]), Ae = l(X[1]), ce = Math.max(X[0].length, X[1].length), Ee = X.length == 3 ? Math.abs(l(X[2])) : 1, me = O;
        Ae < pe && (Ee *= -1, me = _);
        var Me = X.some(b);
        Z = [];
        for (var $e = pe; me($e, Ae); $e += Ee) {
          var Ze;
          if (K)
            (Ze = String.fromCharCode($e)) === "\\" && (Ze = "");
          else if (Ze = String($e), Me) {
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
    return n = function(h) {
      if (h === null || (p = h, Function.toString.call(p).indexOf("[native code]") === -1))
        return h;
      var p;
      if (typeof h != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (a !== void 0) {
        if (a.has(h))
          return a.get(h);
        a.set(h, b);
      }
      function b() {
        return i(h, arguments, c(this).constructor);
      }
      return b.prototype = Object.create(h.prototype, { constructor: { value: b, enumerable: !1, writable: !0, configurable: !0 } }), s(b, h);
    }, n(l);
  }
  function i(l, a, h) {
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
    }() ? Reflect.construct : function(p, b, O) {
      var _ = [null];
      _.push.apply(_, b);
      var P = new (Function.bind.apply(p, _))();
      return O && s(P, O.prototype), P;
    }, i.apply(null, arguments);
  }
  function s(l, a) {
    return s = Object.setPrototypeOf || function(h, p) {
      return h.__proto__ = p, h;
    }, s(l, a);
  }
  function c(l) {
    return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
      return a.__proto__ || Object.getPrototypeOf(a);
    }, c(l);
  }
  var v = function(l) {
    function a(h) {
      var p;
      return function(b, O) {
        if (!(b instanceof O))
          throw new TypeError("Cannot call a class as a function");
      }(this, a), (p = function(b, O) {
        return !O || e(O) !== "object" && typeof O != "function" ? function(_) {
          if (_ === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return _;
        }(b) : O;
      }(this, c(a).call(this, h))).name = "ObjectPrototypeMutationError", p;
    }
    return function(h, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Super expression must either be null or a function");
      h.prototype = Object.create(p && p.prototype, { constructor: { value: h, writable: !0, configurable: !0 } }), p && s(h, p);
    }(a, l), a;
  }(n(Error));
  function d(l, a) {
    for (var h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
    }, p = a.split("."), b = p.length, O = function(D) {
      var I = p[D];
      if (!l)
        return { v: void 0 };
      if (I === "+") {
        if (Array.isArray(l))
          return { v: l.map(function(F, C) {
            var z = p.slice(D + 1);
            return z.length > 0 ? d(F, z.join("."), h) : h(l, C, p, D);
          }) };
        var x = p.slice(0, D).join(".");
        throw new Error("Object at wildcard (".concat(x, ") is not an array"));
      }
      l = h(l, I, p, D);
    }, _ = 0; _ < b; _++) {
      var P = O(_);
      if (e(P) === "object")
        return P.v;
    }
    return l;
  }
  function m(l, a) {
    return l.length === a + 1;
  }
  r.exports = { set: function(l, a, h) {
    if (e(l) != "object" || l === null || a === void 0)
      return l;
    if (typeof a == "number")
      return l[a] = h, l[a];
    try {
      return d(l, a, function(p, b, O, _) {
        if (p === Reflect.getPrototypeOf({}))
          throw new v("Attempting to mutate Object.prototype");
        if (!p[b]) {
          var P = Number.isInteger(Number(O[_ + 1])), D = O[_ + 1] === "+";
          p[b] = P || D ? [] : {};
        }
        return m(O, _) && (p[b] = h), p[b];
      });
    } catch (p) {
      if (p instanceof v)
        throw p;
      return l;
    }
  }, get: function(l, a) {
    if (e(l) != "object" || l === null || a === void 0)
      return l;
    if (typeof a == "number")
      return l[a];
    try {
      return d(l, a, function(h, p) {
        return h[p];
      });
    } catch {
      return l;
    }
  }, has: function(l, a) {
    var h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (e(l) != "object" || l === null || a === void 0)
      return !1;
    if (typeof a == "number")
      return a in l;
    try {
      var p = !1;
      return d(l, a, function(b, O, _, P) {
        if (!m(_, P))
          return b && b[O];
        p = h.own ? b.hasOwnProperty(O) : O in b;
      }), p;
    } catch {
      return !1;
    }
  }, hasOwn: function(l, a, h) {
    return this.has(l, a, h || { own: !0 });
  }, isIn: function(l, a, h) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (e(l) != "object" || l === null || a === void 0)
      return !1;
    try {
      var b = !1, O = !1;
      return d(l, a, function(_, P, D, I) {
        return b = b || _ === h || !!_ && _[P] === h, O = m(D, I) && e(_) === "object" && P in _, _ && _[P];
      }), p.validPath ? b && O : b;
    } catch {
      return !1;
    }
  }, ObjectPrototypeMutationError: v };
}, 47: (r, e, n) => {
  var i = n(410), s = function(l) {
    return typeof l == "string";
  };
  function c(l, a) {
    for (var h = [], p = 0; p < l.length; p++) {
      var b = l[p];
      b && b !== "." && (b === ".." ? h.length && h[h.length - 1] !== ".." ? h.pop() : a && h.push("..") : h.push(b));
    }
    return h;
  }
  var v = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, d = {};
  function m(l) {
    return v.exec(l).slice(1);
  }
  d.resolve = function() {
    for (var l = "", a = !1, h = arguments.length - 1; h >= -1 && !a; h--) {
      var p = h >= 0 ? arguments[h] : kt.cwd();
      if (!s(p))
        throw new TypeError("Arguments to path.resolve must be strings");
      p && (l = p + "/" + l, a = p.charAt(0) === "/");
    }
    return (a ? "/" : "") + (l = c(l.split("/"), !a).join("/")) || ".";
  }, d.normalize = function(l) {
    var a = d.isAbsolute(l), h = l.substr(-1) === "/";
    return (l = c(l.split("/"), !a).join("/")) || a || (l = "."), l && h && (l += "/"), (a ? "/" : "") + l;
  }, d.isAbsolute = function(l) {
    return l.charAt(0) === "/";
  }, d.join = function() {
    for (var l = "", a = 0; a < arguments.length; a++) {
      var h = arguments[a];
      if (!s(h))
        throw new TypeError("Arguments to path.join must be strings");
      h && (l += l ? "/" + h : h);
    }
    return d.normalize(l);
  }, d.relative = function(l, a) {
    function h(I) {
      for (var x = 0; x < I.length && I[x] === ""; x++)
        ;
      for (var F = I.length - 1; F >= 0 && I[F] === ""; F--)
        ;
      return x > F ? [] : I.slice(x, F + 1);
    }
    l = d.resolve(l).substr(1), a = d.resolve(a).substr(1);
    for (var p = h(l.split("/")), b = h(a.split("/")), O = Math.min(p.length, b.length), _ = O, P = 0; P < O; P++)
      if (p[P] !== b[P]) {
        _ = P;
        break;
      }
    var D = [];
    for (P = _; P < p.length; P++)
      D.push("..");
    return (D = D.concat(b.slice(_))).join("/");
  }, d._makeLong = function(l) {
    return l;
  }, d.dirname = function(l) {
    var a = m(l), h = a[0], p = a[1];
    return h || p ? (p && (p = p.substr(0, p.length - 1)), h + p) : ".";
  }, d.basename = function(l, a) {
    var h = m(l)[2];
    return a && h.substr(-1 * a.length) === a && (h = h.substr(0, h.length - a.length)), h;
  }, d.extname = function(l) {
    return m(l)[3];
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
    var a = m(l);
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
  e.stringify = function(c, v) {
    v = v || "";
    var d, m, l = [];
    for (m in typeof v != "string" && (v = "?"), c)
      if (n.call(c, m)) {
        if ((d = c[m]) || d != null && !isNaN(d) || (d = ""), m = s(m), d = s(d), m === null || d === null)
          continue;
        l.push(m + "=" + d);
      }
    return l.length ? v + l.join("&") : "";
  }, e.parse = function(c) {
    for (var v, d = /([^=?#&]+)=?([^&]*)/g, m = {}; v = d.exec(c); ) {
      var l = i(v[1]), a = i(v[2]);
      l === null || a === null || l in m || (m[l] = a);
    }
    return m;
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
    let v = s.trim();
    if (c.skipLike !== void 0 && c.skipLike.test(v))
      return s;
    if (c.hex && e.test(v))
      return Number.parseInt(v, 16);
    {
      const m = n.exec(v);
      if (m) {
        const l = m[1], a = m[2];
        let h = ((d = m[3]) && d.indexOf(".") !== -1 && ((d = d.replace(/0+$/, "")) === "." ? d = "0" : d[0] === "." ? d = "0" + d : d[d.length - 1] === "." && (d = d.substr(0, d.length - 1))), d);
        const p = m[4] || m[6];
        if (!c.leadingZeros && a.length > 0 && l && v[2] !== "." || !c.leadingZeros && a.length > 0 && !l && v[1] !== ".")
          return s;
        {
          const b = Number(v), O = "" + b;
          return O.search(/[eE]/) !== -1 || p ? c.eNotation ? b : s : v.indexOf(".") !== -1 ? O === "0" && h === "" || O === h || l && O === "-" + h ? b : s : a ? h === O || l + h === O ? b : s : v === O || v === l + O ? b : s;
        }
      }
      return s;
    }
    var d;
  };
}, 737: (r, e, n) => {
  var i = n(670), s = n(647), c = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, v = /[\n\r\t]/g, d = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, m = /:\d+$/, l = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, a = /^[a-zA-Z]:/;
  function h(I) {
    return (I || "").toString().replace(c, "");
  }
  var p = [["#", "hash"], ["?", "query"], function(I, x) {
    return _(x.protocol) ? I.replace(/\\/g, "/") : I;
  }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]], b = { hash: 1, query: 1 };
  function O(I) {
    var x, F = (typeof window < "u" ? window : typeof li < "u" ? li : typeof self < "u" ? self : {}).location || {}, C = {}, z = typeof (I = I || F);
    if (I.protocol === "blob:")
      C = new D(unescape(I.pathname), {});
    else if (z === "string")
      for (x in C = new D(I, {}), b)
        delete C[x];
    else if (z === "object") {
      for (x in I)
        x in b || (C[x] = I[x]);
      C.slashes === void 0 && (C.slashes = d.test(I.href));
    }
    return C;
  }
  function _(I) {
    return I === "file:" || I === "ftp:" || I === "http:" || I === "https:" || I === "ws:" || I === "wss:";
  }
  function P(I, x) {
    I = (I = h(I)).replace(v, ""), x = x || {};
    var F, C = l.exec(I), z = C[1] ? C[1].toLowerCase() : "", q = !!C[2], G = !!C[3], X = 0;
    return q ? G ? (F = C[2] + C[3] + C[4], X = C[2].length + C[3].length) : (F = C[2] + C[4], X = C[2].length) : G ? (F = C[3] + C[4], X = C[3].length) : F = C[4], z === "file:" ? X >= 2 && (F = F.slice(2)) : _(z) ? F = C[4] : z ? q && (F = F.slice(2)) : X >= 2 && _(x.protocol) && (F = C[4]), { protocol: z, slashes: q || _(z), slashesCount: X, rest: F };
  }
  function D(I, x, F) {
    if (I = (I = h(I)).replace(v, ""), !(this instanceof D))
      return new D(I, x, F);
    var C, z, q, G, X, Z, H = p.slice(), K = typeof x, V = this, re = 0;
    for (K !== "object" && K !== "string" && (F = x, x = null), F && typeof F != "function" && (F = s.parse), C = !(z = P(I || "", x = O(x))).protocol && !z.slashes, V.slashes = z.slashes || C && x.slashes, V.protocol = z.protocol || x.protocol || "", I = z.rest, (z.protocol === "file:" && (z.slashesCount !== 2 || a.test(I)) || !z.slashes && (z.protocol || z.slashesCount < 2 || !_(V.protocol))) && (H[3] = [/(.*)/, "pathname"]); re < H.length; re++)
      typeof (G = H[re]) != "function" ? (q = G[0], Z = G[1], q != q ? V[Z] = I : typeof q == "string" ? ~(X = q === "@" ? I.lastIndexOf(q) : I.indexOf(q)) && (typeof G[2] == "number" ? (V[Z] = I.slice(0, X), I = I.slice(X + G[2])) : (V[Z] = I.slice(X), I = I.slice(0, X))) : (X = q.exec(I)) && (V[Z] = X[1], I = I.slice(0, X.index)), V[Z] = V[Z] || C && G[3] && x[Z] || "", G[4] && (V[Z] = V[Z].toLowerCase())) : I = G(I, V);
    F && (V.query = F(V.query)), C && x.slashes && V.pathname.charAt(0) !== "/" && (V.pathname !== "" || x.pathname !== "") && (V.pathname = function(pe, Ae) {
      if (pe === "")
        return Ae;
      for (var ce = (Ae || "/").split("/").slice(0, -1).concat(pe.split("/")), Ee = ce.length, me = ce[Ee - 1], Me = !1, $e = 0; Ee--; )
        ce[Ee] === "." ? ce.splice(Ee, 1) : ce[Ee] === ".." ? (ce.splice(Ee, 1), $e++) : $e && (Ee === 0 && (Me = !0), ce.splice(Ee, 1), $e--);
      return Me && ce.unshift(""), me !== "." && me !== ".." || ce.push(""), ce.join("/");
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
        C[I] = x, m.test(x) ? (x = x.split(":"), C.port = x.pop(), C.hostname = x.join(":")) : (C.hostname = x, C.port = "");
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
    return F.username ? (q += F.username, F.password && (q += ":" + F.password), q += "@") : F.password ? (q += ":" + F.password, q += "@") : F.protocol !== "file:" && _(F.protocol) && !C && F.pathname !== "/" && (q += "@"), (C[C.length - 1] === ":" || m.test(F.hostname) && !F.port) && (C += ":"), q += C + F.pathname, (x = typeof F.query == "object" ? I(F.query) : F.query) && (q += x.charAt(0) !== "?" ? "?" + x : x), F.hash && (q += F.hash), q;
  } }, D.extractProtocol = P, D.location = O, D.trimLeft = h, D.qs = s, r.exports = D;
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
  return bS[r].call(n.exports, n, n.exports, je), n.loaded = !0, n.exports;
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
  je.d(zt, { hT: () => X, O4: () => Z, Kd: () => q, YK: () => G, UU: () => Wp, Gu: () => Ae, ky: () => ee, h4: () => se, hq: () => Kt, i5: () => ae });
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
    constructor(f, y) {
      const S = [...arguments], { options: R, shortMessage: N } = function(W) {
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
      }(S);
      let U = N;
      if (R.cause && (U = "".concat(U, ": ").concat(R.cause.message)), super(U), this.message = U, R.name && typeof R.name == "string" ? this.name = R.name : this.name = "Layerr", R.cause && Object.defineProperty(this, "_cause", { value: R.cause }), Object.defineProperty(this, "_info", { value: {} }), R.info && typeof R.info == "object" && Object.assign(this._info, R.info), Error.captureStackTrace) {
        const W = R.constructorOpt || this.constructor;
        Error.captureStackTrace(this, W);
      }
    }
    static cause(f) {
      return n(f), f._cause && i(f._cause) ? f._cause : null;
    }
    static fullStack(f) {
      n(f);
      const y = s.cause(f);
      return y ? "".concat(f.stack, `
caused by: `).concat(s.fullStack(y)) : f.stack;
    }
    static info(f) {
      n(f);
      const y = {}, S = s.cause(f);
      return S && Object.assign(y, s.info(S)), f._info && Object.assign(y, f._info), y;
    }
    cause() {
      return s.cause(this);
    }
    toString() {
      let f = this.name || this.constructor.name || this.constructor.prototype.name;
      return this.message && (f = "".concat(f, ": ").concat(this.message)), f;
    }
  }
  var c = je(47), v = je.n(c);
  const d = "__PATH_SEPARATOR_POSIX__", m = "__PATH_SEPARATOR_WINDOWS__";
  function l(w) {
    try {
      const f = w.replace(/\//g, d).replace(/\\\\/g, m);
      return encodeURIComponent(f).split(m).join("\\\\").split(d).join("/");
    } catch (f) {
      throw new s(f, "Failed encoding path");
    }
  }
  function a(w) {
    return w.startsWith("/") ? w : "/" + w;
  }
  function h(w) {
    let f = w;
    return f[0] !== "/" && (f = "/" + f), /^.+\/$/.test(f) && (f = f.substr(0, f.length - 1)), f;
  }
  function p(w) {
    let f = new (e())(w).pathname;
    return f.length <= 0 && (f = "/"), h(f);
  }
  function b() {
    for (var w = arguments.length, f = new Array(w), y = 0; y < w; y++)
      f[y] = arguments[y];
    return function() {
      return function(S) {
        var R = [];
        if (S.length === 0)
          return "";
        if (typeof S[0] != "string")
          throw new TypeError("Url must be a string. Received " + S[0]);
        if (S[0].match(/^[^/:]+:\/*$/) && S.length > 1) {
          var N = S.shift();
          S[0] = N + S[0];
        }
        S[0].match(/^file:\/\/\//) ? S[0] = S[0].replace(/^([^/:]+):\/*/, "$1:///") : S[0] = S[0].replace(/^([^/:]+):\/*/, "$1://");
        for (var U = 0; U < S.length; U++) {
          var W = S[U];
          if (typeof W != "string")
            throw new TypeError("Url must be a string. Received " + W);
          W !== "" && (U > 0 && (W = W.replace(/^[\/]+/, "")), W = U < S.length - 1 ? W.replace(/[\/]+$/, "") : W.replace(/[\/]+$/, "/"), R.push(W));
        }
        var Y = R.join("/"), Q = (Y = Y.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
        return Q.shift() + (Q.length > 0 ? "?" : "") + Q.join("&");
      }(typeof arguments[0] == "object" ? arguments[0] : [].slice.call(arguments));
    }(f.reduce((S, R, N) => ((N === 0 || R !== "/" || R === "/" && S[S.length - 1] !== "/") && S.push(R), S), []));
  }
  var O = je(542), _ = je.n(O);
  const P = "abcdef0123456789";
  function D(w, f) {
    const y = w.url.replace("//", ""), S = y.indexOf("/") == -1 ? "/" : y.slice(y.indexOf("/")), R = w.method ? w.method.toUpperCase() : "GET", N = !!/(^|,)\s*auth\s*($|,)/.test(f.qop) && "auth", U = "00000000".concat(f.nc).slice(-8), W = function(we, Pe, ye, ne, ie, de, Se) {
      const ge = Se || _()("".concat(Pe, ":").concat(ye, ":").concat(ne));
      return we && we.toLowerCase() === "md5-sess" ? _()("".concat(ge, ":").concat(ie, ":").concat(de)) : ge;
    }(f.algorithm, f.username, f.realm, f.password, f.nonce, f.cnonce, f.ha1), Y = _()("".concat(R, ":").concat(S)), Q = N ? _()("".concat(W, ":").concat(f.nonce, ":").concat(U, ":").concat(f.cnonce, ":").concat(N, ":").concat(Y)) : _()("".concat(W, ":").concat(f.nonce, ":").concat(Y)), J = { username: f.username, realm: f.realm, nonce: f.nonce, uri: S, qop: N, response: Q, nc: U, cnonce: f.cnonce, algorithm: f.algorithm, opaque: f.opaque }, oe = [];
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
      let y = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
      if (!f || f.__type__ !== H)
        throw new Error("Failed taking control of target HotPatcher instance: Invalid type or object");
      return Object.keys(f.configuration.registry).forEach((S) => {
        this.configuration.registry.hasOwnProperty(S) ? y && (this.configuration.registry[S] = Object.assign({}, f.configuration.registry[S])) : this.configuration.registry[S] = Object.assign({}, f.configuration.registry[S]);
      }), f._configuration = this.configuration, this;
    }
    execute(f) {
      const y = this.get(f) || K;
      for (var S = arguments.length, R = new Array(S > 1 ? S - 1 : 0), N = 1; N < S; N++)
        R[N - 1] = arguments[N];
      return y(...R);
    }
    get(f) {
      const y = this.configuration.registry[f];
      if (!y)
        switch (this.getEmptyAction) {
          case "null":
            return null;
          case "throw":
            throw new Error("Failed handling method request: No method provided for override: ".concat(f));
          default:
            throw new Error("Failed handling request which resulted in an empty method: Invalid empty-action specified: ".concat(this.getEmptyAction));
        }
      return function() {
        for (var S = arguments.length, R = new Array(S), N = 0; N < S; N++)
          R[N] = arguments[N];
        if (R.length === 0)
          throw new Error("Failed creating sequence: No functions provided");
        return function() {
          for (var U = arguments.length, W = new Array(U), Y = 0; Y < U; Y++)
            W[Y] = arguments[Y];
          let Q = W;
          const J = this;
          for (; R.length > 0; )
            Q = [R.shift().apply(J, Q)];
          return Q[0];
        };
      }(...y.methods);
    }
    isPatched(f) {
      return !!this.configuration.registry[f];
    }
    patch(f, y) {
      let S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      const { chain: R = !1 } = S;
      if (this.configuration.registry[f] && this.configuration.registry[f].final)
        throw new Error("Failed patching '".concat(f, "': Method marked as being final"));
      if (typeof y != "function")
        throw new Error("Failed patching '".concat(f, "': Provided method is not a function"));
      if (R)
        this.configuration.registry[f] ? this.configuration.registry[f].methods.push(y) : this.configuration.registry[f] = V(y);
      else if (this.isPatched(f)) {
        const { original: N } = this.configuration.registry[f];
        this.configuration.registry[f] = Object.assign(V(y), { original: N });
      } else
        this.configuration.registry[f] = V(y);
      return this;
    }
    patchInline(f, y) {
      this.isPatched(f) || this.patch(f, y);
      for (var S = arguments.length, R = new Array(S > 2 ? S - 2 : 0), N = 2; N < S; N++)
        R[N - 2] = arguments[N];
      return this.execute(f, ...R);
    }
    plugin(f) {
      for (var y = arguments.length, S = new Array(y > 1 ? y - 1 : 0), R = 1; R < y; R++)
        S[R - 1] = arguments[R];
      return S.forEach((N) => {
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
      let y = f;
      for (; Object.getPrototypeOf(y) !== null; )
        y = Object.getPrototypeOf(y);
      return Object.getPrototypeOf(f) === y;
    }(w) ? Object.assign({}, w) : Object.setPrototypeOf(Object.assign({}, w), Object.getPrototypeOf(w));
  }
  function Ee() {
    for (var w = arguments.length, f = new Array(w), y = 0; y < w; y++)
      f[y] = arguments[y];
    let S = null, R = [...f];
    for (; R.length > 0; ) {
      const N = R.shift();
      S = S ? me(S, N) : ce(N);
    }
    return S;
  }
  function me(w, f) {
    const y = ce(w);
    return Object.keys(f).forEach((S) => {
      y.hasOwnProperty(S) ? Array.isArray(f[S]) ? y[S] = Array.isArray(y[S]) ? [...y[S], ...f[S]] : [...f[S]] : typeof f[S] == "object" && f[S] ? y[S] = typeof y[S] == "object" && y[S] ? me(y[S], f[S]) : ce(f[S]) : y[S] = f[S] : y[S] = f[S];
    }), y;
  }
  function Me(w) {
    const f = {};
    for (const y of w.keys())
      f[y] = w.get(y);
    return f;
  }
  function $e() {
    for (var w = arguments.length, f = new Array(w), y = 0; y < w; y++)
      f[y] = arguments[y];
    if (f.length === 0)
      return {};
    const S = {};
    return f.reduce((R, N) => (Object.keys(N).forEach((U) => {
      const W = U.toLowerCase();
      S.hasOwnProperty(W) ? R[S[W]] = N[U] : (S[W] = U, R[U] = N[U]);
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
  function Ot(w, f, y) {
    return y ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  function wt(w) {
    const f = Ae();
    return f.patchInline("request", (y) => f.patchInline("fetch", z, y.url, function(S) {
      let R = {};
      const N = { method: S.method };
      if (S.headers && (R = $e(R, S.headers)), S.data !== void 0) {
        const [U, W] = function(Y) {
          if (typeof Y == "string")
            return [Y, {}];
          if (Ie(Y))
            return [Y, {}];
          if (_e(Y))
            return [Y, {}];
          if (Y && typeof Y == "object")
            return [JSON.stringify(Y), { "content-type": "application/json" }];
          throw new Error("Unable to convert request body: Unexpected body type: ".concat(typeof Y));
        }(S.data);
        N.body = U, R = $e(R, W);
      }
      return S.signal && (N.signal = S.signal), S.withCredentials && (N.credentials = "include"), N.headers = R, N;
    }(y)), w);
  }
  const Ue = (Ht = function(w) {
    if (!w._digest)
      return wt(w);
    const f = w._digest;
    return delete w._digest, f.hasDigestAuth && (w = Ee(w, { headers: { Authorization: D(w, f) } })), Ot(wt(w), function(y) {
      let S = !1;
      return R = function(U) {
        return S ? U : y;
      }, (N = function() {
        if (y.status == 401)
          return f.hasDigestAuth = function(U, W) {
            const Y = U.headers && U.headers.get("www-authenticate") || "";
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
          }(y, f), function() {
            if (f.hasDigestAuth)
              return Ot(wt(w = Ee(w, { headers: { Authorization: D(w, f) } })), function(U) {
                return U.status == 401 ? f.hasDigestAuth = !1 : f.nc++, S = !0, U;
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
    } catch (y) {
      return Promise.reject(y);
    }
  });
  var Ht;
  function Re(w, f, y) {
    const S = ce(w);
    return S.headers = $e(f.headers, S.headers || {}, y.headers || {}), y.data !== void 0 && (S.data = y.data), y.signal && (S.signal = y.signal), f.httpAgent && (S.httpAgent = f.httpAgent), f.httpsAgent && (S.httpsAgent = f.httpsAgent), f.digest && (S._digest = f.digest), typeof f.withCredentials == "boolean" && (S.withCredentials = f.withCredentials), S;
  }
  var Je = je(285);
  const Nt = { "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", !0], "[:alpha:]": ["\\p{L}\\p{Nl}", !0], "[:ascii:]": ["\\x00-\\x7f", !1], "[:blank:]": ["\\p{Zs}\\t", !0], "[:cntrl:]": ["\\p{Cc}", !0], "[:digit:]": ["\\p{Nd}", !0], "[:graph:]": ["\\p{Z}\\p{C}", !0, !0], "[:lower:]": ["\\p{Ll}", !0], "[:print:]": ["\\p{C}", !0], "[:punct:]": ["\\p{P}", !0], "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", !0], "[:upper:]": ["\\p{Lu}", !0], "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", !0], "[:xdigit:]": ["A-Fa-f0-9", !1] }, ut = (w) => w.replace(/[[\]\\-]/g, "\\$&"), bt = (w) => w.join(""), jt = (w, f) => {
    const y = f;
    if (w.charAt(y) !== "[")
      throw new Error("not in a brace expression");
    const S = [], R = [];
    let N = y + 1, U = !1, W = !1, Y = !1, Q = !1, J = y, oe = "";
    e:
      for (; N < w.length; ) {
        const ne = w.charAt(N);
        if (ne !== "!" && ne !== "^" || N !== y + 1) {
          if (ne === "]" && U && !Y) {
            J = N + 1;
            break;
          }
          if (U = !0, ne !== "\\" || Y) {
            if (ne === "[" && !Y) {
              for (const [ie, [de, Se, ge]] of Object.entries(Nt))
                if (w.startsWith(ie, N)) {
                  if (oe)
                    return ["$.", !1, w.length - y, !0];
                  N += ie.length, ge ? R.push(de) : S.push(de), W = W || Se;
                  continue e;
                }
            }
            Y = !1, oe ? (ne > oe ? S.push(ut(oe) + "-" + ut(ne)) : ne === oe && S.push(ut(ne)), oe = "", N++) : w.startsWith("-]", N + 1) ? (S.push(ut(ne + "-")), N += 2) : w.startsWith("-", N + 1) ? (oe = ne, N += 2) : (S.push(ut(ne)), N++);
          } else
            Y = !0, N++;
        } else
          Q = !0, N++;
      }
    if (J < N)
      return ["", !1, 0, !1];
    if (!S.length && !R.length)
      return ["$.", !1, w.length - y, !0];
    if (R.length === 0 && S.length === 1 && /^\\?.$/.test(S[0]) && !Q)
      return [(we = S[0].length === 2 ? S[0].slice(-1) : S[0], we.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")), !1, J - y, !1];
    var we;
    const Pe = "[" + (Q ? "^" : "") + bt(S) + "]", ye = "[" + (Q ? "" : "^") + bt(R) + "]";
    return [S.length && R.length ? "(" + Pe + "|" + ye + ")" : S.length ? Pe : ye, W, J - y, !0];
  };
  function Ce(w, f, y) {
    var S;
    return (f = typeof (S = function(R, N) {
      if (typeof R != "object" || !R)
        return R;
      var U = R[Symbol.toPrimitive];
      if (U !== void 0) {
        var W = U.call(R, "string");
        if (typeof W != "object")
          return W;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(R);
    }(f)) == "symbol" ? S : String(S)) in w ? Object.defineProperty(w, f, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : w[f] = y, w;
  }
  const Be = function(w, f) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return Br(f), !(!y.nocomment && f.charAt(0) === "#") && new Ar(f, y).match(w);
  }, cr = Be, $r = /^\*+([^+@!?\*\[\(]*)$/, pt = (w) => (f) => !f.startsWith(".") && f.endsWith(w), Pt = (w) => (f) => f.endsWith(w), $t = (w) => (w = w.toLowerCase(), (f) => !f.startsWith(".") && f.toLowerCase().endsWith(w)), It = (w) => (w = w.toLowerCase(), (f) => f.toLowerCase().endsWith(w)), he = /^\*+\.\*+$/, qe = (w) => !w.startsWith(".") && w.includes("."), E = (w) => w !== "." && w !== ".." && w.includes("."), $ = /^\.\*+$/, L = (w) => w !== "." && w !== ".." && w.startsWith("."), k = /^\*+$/, g = (w) => w.length !== 0 && !w.startsWith("."), o = (w) => w.length !== 0 && w !== "." && w !== "..", u = /^\?+([^+@!?\*\[\(]*)?$/, T = (w) => {
    let [f, y = ""] = w;
    const S = te([f]);
    return y ? (y = y.toLowerCase(), (R) => S(R) && R.toLowerCase().endsWith(y)) : S;
  }, A = (w) => {
    let [f, y = ""] = w;
    const S = le([f]);
    return y ? (y = y.toLowerCase(), (R) => S(R) && R.toLowerCase().endsWith(y)) : S;
  }, M = (w) => {
    let [f, y = ""] = w;
    const S = le([f]);
    return y ? (R) => S(R) && R.endsWith(y) : S;
  }, j = (w) => {
    let [f, y = ""] = w;
    const S = te([f]);
    return y ? (R) => S(R) && R.endsWith(y) : S;
  }, te = (w) => {
    let [f] = w;
    const y = f.length;
    return (S) => S.length === y && !S.startsWith(".");
  }, le = (w) => {
    let [f] = w;
    const y = f.length;
    return (S) => S.length === y && S !== "." && S !== "..";
  }, ue = typeof kt == "object" && kt ? typeof kt.env == "object" && kt.env && kt.env.__MINIMATCH_TESTING_PLATFORM__ || kt.platform : "posix";
  Be.sep = ue === "win32" ? "\\" : "/";
  const fe = Symbol("globstar **");
  Be.GLOBSTAR = fe;
  const xe = { "!": { open: "(?:(?!(?:", close: "))[^/]*?)" }, "?": { open: "(?:", close: ")?" }, "+": { open: "(?:", close: ")+" }, "*": { open: "(?:", close: ")*" }, "@": { open: "(?:", close: ")" } }, Xt = "[^/]", Ir = Xt + "*?", Tn = (w) => w.split("").reduce((f, y) => (f[y] = !0, f), {}), ai = Tn("().*{}+?[]^$\\!"), co = Tn("[.(");
  Be.filter = function(w) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return (y) => Be(y, w, f);
  };
  const ht = function(w) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.assign({}, w, f);
  };
  Be.defaults = (w) => {
    if (!w || typeof w != "object" || !Object.keys(w).length)
      return Be;
    const f = Be;
    return Object.assign(function(y, S) {
      return f(y, S, ht(w, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}));
    }, { Minimatch: class extends f.Minimatch {
      constructor(y) {
        super(y, ht(w, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}));
      }
      static defaults(y) {
        return f.defaults(ht(w, y)).Minimatch;
      }
    }, unescape: function(y) {
      let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return f.unescape(y, ht(w, S));
    }, escape: function(y) {
      let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return f.escape(y, ht(w, S));
    }, filter: function(y) {
      let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return f.filter(y, ht(w, S));
    }, defaults: (y) => f.defaults(ht(w, y)), makeRe: function(y) {
      let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return f.makeRe(y, ht(w, S));
    }, braceExpand: function(y) {
      let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return f.braceExpand(y, ht(w, S));
    }, match: function(y, S) {
      let R = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return f.match(y, S, ht(w, R));
    }, sep: f.sep, GLOBSTAR: fe });
  };
  const Ur = function(w) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Br(w), f.nobrace || !/\{(?:(?!\{).)*\}/.test(w) ? [w] : Je(w);
  };
  Be.braceExpand = Ur;
  const Br = (w) => {
    if (typeof w != "string")
      throw new TypeError("invalid pattern");
    if (w.length > 65536)
      throw new TypeError("pattern is too long");
  };
  Be.makeRe = function(w) {
    return new Ar(w, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).makeRe();
  }, Be.match = function(w, f) {
    const y = new Ar(f, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {});
    return w = w.filter((S) => y.match(S)), y.options.nonull && !w.length && w.push(f), w;
  };
  const Yt = /[?*]|[+@!]\(.*?\)|\[|\]/, jr = (w) => w.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  class Ar {
    constructor(f) {
      let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      Ce(this, "options", void 0), Ce(this, "set", void 0), Ce(this, "pattern", void 0), Ce(this, "windowsPathsNoEscape", void 0), Ce(this, "nonegate", void 0), Ce(this, "negate", void 0), Ce(this, "comment", void 0), Ce(this, "empty", void 0), Ce(this, "preserveMultipleSlashes", void 0), Ce(this, "partial", void 0), Ce(this, "globSet", void 0), Ce(this, "globParts", void 0), Ce(this, "nocase", void 0), Ce(this, "isWindows", void 0), Ce(this, "platform", void 0), Ce(this, "windowsNoMagicRoot", void 0), Ce(this, "regexp", void 0), Br(f), y = y || {}, this.options = y, this.pattern = f, this.platform = y.platform || ue, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!y.windowsPathsNoEscape || y.allowWindowsEscape === !1, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!y.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!y.nonegate, this.comment = !1, this.empty = !1, this.partial = !!y.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = y.windowsNoMagicRoot !== void 0 ? y.windowsNoMagicRoot : !(!this.isWindows || !this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
    }
    hasMagic() {
      if (this.options.magicalBraces && this.set.length > 1)
        return !0;
      for (const f of this.set)
        for (const y of f)
          if (typeof y != "string")
            return !0;
      return !1;
    }
    debug() {
    }
    make() {
      const f = this.pattern, y = this.options;
      if (!y.nocomment && f.charAt(0) === "#")
        return void (this.comment = !0);
      if (!f)
        return void (this.empty = !0);
      this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], y.debug && (this.debug = function() {
        return console.error(...arguments);
      }), this.debug(this.pattern, this.globSet);
      const S = this.globSet.map((N) => this.slashSplit(N));
      this.globParts = this.preprocess(S), this.debug(this.pattern, this.globParts);
      let R = this.globParts.map((N, U, W) => {
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
          const U = this.set[N];
          U[0] === "" && U[1] === "" && this.globParts[N][2] === "?" && typeof U[3] == "string" && /^[a-z]:$/i.test(U[3]) && (U[2] = "?");
        }
      this.debug(this.pattern, this.set);
    }
    preprocess(f) {
      if (this.options.noglobstar)
        for (let S = 0; S < f.length; S++)
          for (let R = 0; R < f[S].length; R++)
            f[S][R] === "**" && (f[S][R] = "*");
      const { optimizationLevel: y = 1 } = this.options;
      return y >= 2 ? (f = this.firstPhasePreProcess(f), f = this.secondPhasePreProcess(f)) : f = y >= 1 ? this.levelOneOptimize(f) : this.adjascentGlobstarOptimize(f), f;
    }
    adjascentGlobstarOptimize(f) {
      return f.map((y) => {
        let S = -1;
        for (; (S = y.indexOf("**", S + 1)) !== -1; ) {
          let R = S;
          for (; y[R + 1] === "**"; )
            R++;
          R !== S && y.splice(S, R - S);
        }
        return y;
      });
    }
    levelOneOptimize(f) {
      return f.map((y) => (y = y.reduce((S, R) => {
        const N = S[S.length - 1];
        return R === "**" && N === "**" ? S : R === ".." && N && N !== ".." && N !== "." && N !== "**" ? (S.pop(), S) : (S.push(R), S);
      }, [])).length === 0 ? [""] : y);
    }
    levelTwoFileOptimize(f) {
      Array.isArray(f) || (f = this.slashSplit(f));
      let y = !1;
      do {
        if (y = !1, !this.preserveMultipleSlashes) {
          for (let R = 1; R < f.length - 1; R++) {
            const N = f[R];
            R === 1 && N === "" && f[0] === "" || N !== "." && N !== "" || (y = !0, f.splice(R, 1), R--);
          }
          f[0] !== "." || f.length !== 2 || f[1] !== "." && f[1] !== "" || (y = !0, f.pop());
        }
        let S = 0;
        for (; (S = f.indexOf("..", S + 1)) !== -1; ) {
          const R = f[S - 1];
          R && R !== "." && R !== ".." && R !== "**" && (y = !0, f.splice(S - 1, 2), S -= 2);
        }
      } while (y);
      return f.length === 0 ? [""] : f;
    }
    firstPhasePreProcess(f) {
      let y = !1;
      do {
        y = !1;
        for (let S of f) {
          let R = -1;
          for (; (R = S.indexOf("**", R + 1)) !== -1; ) {
            let U = R;
            for (; S[U + 1] === "**"; )
              U++;
            U > R && S.splice(R + 1, U - R);
            let W = S[R + 1];
            const Y = S[R + 2], Q = S[R + 3];
            if (W !== ".." || !Y || Y === "." || Y === ".." || !Q || Q === "." || Q === "..")
              continue;
            y = !0, S.splice(R, 1);
            const J = S.slice(0);
            J[R] = "**", f.push(J), R--;
          }
          if (!this.preserveMultipleSlashes) {
            for (let U = 1; U < S.length - 1; U++) {
              const W = S[U];
              U === 1 && W === "" && S[0] === "" || W !== "." && W !== "" || (y = !0, S.splice(U, 1), U--);
            }
            S[0] !== "." || S.length !== 2 || S[1] !== "." && S[1] !== "" || (y = !0, S.pop());
          }
          let N = 0;
          for (; (N = S.indexOf("..", N + 1)) !== -1; ) {
            const U = S[N - 1];
            if (U && U !== "." && U !== ".." && U !== "**") {
              y = !0;
              const W = N === 1 && S[N + 1] === "**" ? ["."] : [];
              S.splice(N - 1, 2, ...W), S.length === 0 && S.push(""), N -= 2;
            }
          }
        }
      } while (y);
      return f;
    }
    secondPhasePreProcess(f) {
      for (let y = 0; y < f.length - 1; y++)
        for (let S = y + 1; S < f.length; S++) {
          const R = this.partsMatch(f[y], f[S], !this.preserveMultipleSlashes);
          R && (f[y] = R, f[S] = []);
        }
      return f.filter((y) => y.length);
    }
    partsMatch(f, y) {
      let S = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], R = 0, N = 0, U = [], W = "";
      for (; R < f.length && N < y.length; )
        if (f[R] === y[N])
          U.push(W === "b" ? y[N] : f[R]), R++, N++;
        else if (S && f[R] === "**" && y[N] === f[R + 1])
          U.push(f[R]), R++;
        else if (S && y[N] === "**" && f[R] === y[N + 1])
          U.push(y[N]), N++;
        else if (f[R] !== "*" || !y[N] || !this.options.dot && y[N].startsWith(".") || y[N] === "**") {
          if (y[N] !== "*" || !f[R] || !this.options.dot && f[R].startsWith(".") || f[R] === "**" || W === "a")
            return !1;
          W = "b", U.push(y[N]), R++, N++;
        } else {
          if (W === "b")
            return !1;
          W = "a", U.push(f[R]), R++, N++;
        }
      return f.length === y.length && U;
    }
    parseNegate() {
      if (this.nonegate)
        return;
      const f = this.pattern;
      let y = !1, S = 0;
      for (let R = 0; R < f.length && f.charAt(R) === "!"; R++)
        y = !y, S++;
      S && (this.pattern = f.slice(S)), this.negate = y;
    }
    matchOne(f, y) {
      let S = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
      const R = this.options;
      if (this.isWindows) {
        const ne = f[0] === "" && f[1] === "" && f[2] === "?" && typeof f[3] == "string" && /^[a-z]:$/i.test(f[3]), ie = y[0] === "" && y[1] === "" && y[2] === "?" && typeof y[3] == "string" && /^[a-z]:$/i.test(y[3]);
        if (ne && ie) {
          const de = f[3], Se = y[3];
          de.toLowerCase() === Se.toLowerCase() && (f[3] = Se);
        } else if (ie && typeof f[0] == "string") {
          const de = y[3], Se = f[0];
          de.toLowerCase() === Se.toLowerCase() && (y[3] = Se, y = y.slice(3));
        } else if (ne && typeof y[0] == "string") {
          const de = f[3];
          de.toLowerCase() === y[0].toLowerCase() && (y[0] = de, f = f.slice(3));
        }
      }
      const { optimizationLevel: N = 1 } = this.options;
      N >= 2 && (f = this.levelTwoFileOptimize(f)), this.debug("matchOne", this, { file: f, pattern: y }), this.debug("matchOne", f.length, y.length);
      for (var U = 0, W = 0, Y = f.length, Q = y.length; U < Y && W < Q; U++, W++) {
        this.debug("matchOne loop");
        var J = y[W], oe = f[U];
        if (this.debug(y, J, oe), J === !1)
          return !1;
        if (J === fe) {
          this.debug("GLOBSTAR", [y, J, oe]);
          var we = U, Pe = W + 1;
          if (Pe === Q) {
            for (this.debug("** at the end"); U < Y; U++)
              if (f[U] === "." || f[U] === ".." || !R.dot && f[U].charAt(0) === ".")
                return !1;
            return !0;
          }
          for (; we < Y; ) {
            var ye = f[we];
            if (this.debug(`
globstar while`, f, we, y, Pe, ye), this.matchOne(f.slice(we), y.slice(Pe), S))
              return this.debug("globstar found match!", we, Y, ye), !0;
            if (ye === "." || ye === ".." || !R.dot && ye.charAt(0) === ".") {
              this.debug("dot detected!", f, we, y, Pe);
              break;
            }
            this.debug("globstar swallow a segment, and continue"), we++;
          }
          return !(!S || (this.debug(`
>>> no match, partial?`, f, we, y, Pe), we !== Y));
        }
        let ne;
        if (typeof J == "string" ? (ne = oe === J, this.debug("string match", J, oe, ne)) : (ne = J.test(oe), this.debug("pattern match", J, oe, ne)), !ne)
          return !1;
      }
      if (U === Y && W === Q)
        return !0;
      if (U === Y)
        return S;
      if (W === Q)
        return U === Y - 1 && f[U] === "";
      throw new Error("wtf?");
    }
    braceExpand() {
      return Ur(this.pattern, this.options);
    }
    parse(f) {
      Br(f);
      const y = this.options;
      if (f === "**")
        return fe;
      if (f === "")
        return "";
      let S, R = null;
      (S = f.match(k)) ? R = y.dot ? o : g : (S = f.match($r)) ? R = (y.nocase ? y.dot ? It : $t : y.dot ? Pt : pt)(S[1]) : (S = f.match(u)) ? R = (y.nocase ? y.dot ? A : T : y.dot ? M : j)(S) : (S = f.match(he)) ? R = y.dot ? E : qe : (S = f.match($)) && (R = L);
      let N = "", U = !1, W = !1;
      const Y = [], Q = [];
      let J, oe = !1, we = !1, Pe = f.charAt(0) === ".", ye = y.dot || Pe;
      const ne = (ge) => ge.charAt(0) === "." ? "" : y.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)", ie = () => {
        if (oe) {
          switch (oe) {
            case "*":
              N += Ir, U = !0;
              break;
            case "?":
              N += Xt, U = !0;
              break;
            default:
              N += "\\" + oe;
          }
          this.debug("clearStateChar %j %j", oe, N), oe = !1;
        }
      };
      for (let ge, Oe = 0; Oe < f.length && (ge = f.charAt(Oe)); Oe++)
        if (this.debug("%s	%s %s %j", f, Oe, N, ge), W) {
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
              this.debug("%s	%s %s %j <-- stateChar", f, Oe, N, ge), this.debug("call clearStateChar %j", oe), ie(), oe = ge, y.noext && ie();
              continue;
            case "(": {
              if (!oe) {
                N += "\\(";
                continue;
              }
              const Ke = { type: oe, start: Oe - 1, reStart: N.length, open: xe[oe].open, close: xe[oe].close };
              this.debug(this.pattern, "	", Ke), Y.push(Ke), N += Ke.open, Ke.start === 0 && Ke.type !== "!" && (Pe = !0, N += ne(f.slice(Oe + 1))), this.debug("plType %j %j", oe, N), oe = !1;
              continue;
            }
            case ")": {
              const Ke = Y[Y.length - 1];
              if (!Ke) {
                N += "\\)";
                continue;
              }
              Y.pop(), ie(), U = !0, J = Ke, N += J.close, J.type === "!" && Q.push(Object.assign(J, { reEnd: N.length }));
              continue;
            }
            case "|": {
              const Ke = Y[Y.length - 1];
              if (!Ke) {
                N += "\\|";
                continue;
              }
              ie(), N += "|", Ke.start === 0 && Ke.type !== "!" && (Pe = !0, N += ne(f.slice(Oe + 1)));
              continue;
            }
            case "[":
              ie();
              const [ze, ct, ke, Jt] = jt(f, Oe);
              ke ? (N += ze, we = we || ct, Oe += ke - 1, U = U || Jt) : N += "\\[";
              continue;
            case "]":
              N += "\\" + ge;
              continue;
            default:
              ie(), N += jr(ge);
          }
      for (J = Y.pop(); J; J = Y.pop()) {
        let ge;
        ge = N.slice(J.reStart + J.open.length), this.debug(this.pattern, "setting tail", N, J), ge = ge.replace(/((?:\\{2}){0,64})(\\?)\|/g, (ze, ct, ke) => (ke || (ke = "\\"), ct + ct + ke + "|")), this.debug(`tail=%j
   %s`, ge, ge, J, N);
        const Oe = J.type === "*" ? Ir : J.type === "?" ? Xt : "\\" + J.type;
        U = !0, N = N.slice(0, J.reStart) + Oe + "\\(" + ge;
      }
      ie(), W && (N += "\\\\");
      const de = co[N.charAt(0)];
      for (let ge = Q.length - 1; ge > -1; ge--) {
        const Oe = Q[ge], ze = N.slice(0, Oe.reStart), ct = N.slice(Oe.reStart, Oe.reEnd - 8);
        let ke = N.slice(Oe.reEnd);
        const Jt = N.slice(Oe.reEnd - 8, Oe.reEnd) + ke, Ke = ze.split(")").length, Vp = ze.split("(").length - Ke;
        let yo = ke;
        for (let Fs = 0; Fs < Vp; Fs++)
          yo = yo.replace(/\)[+*?]?/, "");
        ke = yo, N = ze + ct + ke + (ke === "" ? "(?:$|\\/)" : "") + Jt;
      }
      if (N !== "" && U && (N = "(?=.)" + N), de && (N = (Pe ? "" : ye ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)") + N), !y.nocase || U || y.nocaseMagicOnly || (U = f.toUpperCase() !== f.toLowerCase()), !U)
        return N.replace(/\\(.)/g, "$1");
      const Se = (y.nocase ? "i" : "") + (we ? "u" : "");
      try {
        const ge = R ? { _glob: f, _src: N, test: R } : { _glob: f, _src: N };
        return Object.assign(new RegExp("^" + N + "$", Se), ge);
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
      const y = this.options, S = y.noglobstar ? Ir : y.dot ? "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?" : "(?:(?!(?:\\/|^)\\.).)*?", R = y.nocase ? "i" : "";
      let N = f.map((U) => {
        const W = U.map((Y) => typeof Y == "string" ? jr(Y) : Y === fe ? fe : Y._src);
        return W.forEach((Y, Q) => {
          const J = W[Q + 1], oe = W[Q - 1];
          Y === fe && oe !== fe && (oe === void 0 ? J !== void 0 && J !== fe ? W[Q + 1] = "(?:\\/|" + S + "\\/)?" + J : W[Q] = S : J === void 0 ? W[Q - 1] = oe + "(?:\\/|" + S + ")?" : J !== fe && (W[Q - 1] = oe + "(?:\\/|\\/" + S + "\\/)" + J, W[Q + 1] = fe));
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
      let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.partial;
      if (this.debug("match", f, this.pattern), this.comment)
        return !1;
      if (this.empty)
        return f === "";
      if (f === "/" && y)
        return !0;
      const S = this.options;
      this.isWindows && (f = f.split("\\").join("/"));
      const R = this.slashSplit(f);
      this.debug(this.pattern, "split", R);
      const N = this.set;
      this.debug(this.pattern, "set", N);
      let U = R[R.length - 1];
      if (!U)
        for (let W = R.length - 2; !U && W >= 0; W--)
          U = R[W];
      for (let W = 0; W < N.length; W++) {
        const Y = N[W];
        let Q = R;
        if (S.matchBase && Y.length === 1 && (Q = [U]), this.matchOne(Q, Y, y))
          return !!S.flipNegate || !this.negate;
      }
      return !S.flipNegate && this.negate;
    }
    static defaults(f) {
      return Be.defaults(f).Minimatch;
    }
  }
  function Gr(w) {
    const f = new Error("".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", "Invalid response: ").concat(w.status, " ").concat(w.statusText));
    return f.status = w.status, f.response = w, f;
  }
  function tt(w, f) {
    const { status: y } = f;
    if (y === 401 && w.digest)
      return f;
    if (y >= 400)
      throw Gr(f);
    return f;
  }
  function Kt(w, f) {
    return arguments.length > 2 && arguments[2] !== void 0 && arguments[2] ? { data: f, headers: w.headers ? Me(w.headers) : {}, status: w.status, statusText: w.statusText } : f;
  }
  Be.Minimatch = Ar, Be.escape = function(w) {
    let { windowsPathsNoEscape: f = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return f ? w.replace(/[?*()[\]]/g, "[$&]") : w.replace(/[?*()[\]\\]/g, "\\$&");
  }, Be.unescape = function(w) {
    let { windowsPathsNoEscape: f = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return f ? w.replace(/\[([^\/\\])\]/g, "$1") : w.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
  };
  const Gt = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], y = 0; y < arguments.length; y++)
        f[y] = arguments[y];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(w, f, y) {
    let S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const R = Re({ url: b(w.remoteURL, l(f)), method: "COPY", headers: { Destination: b(w.remoteURL, l(y)) } }, w, S);
    return U = function(W) {
      tt(w, W);
    }, (N = Ue(R)) && N.then || (N = Promise.resolve(N)), U ? N.then(U) : N;
    var N, U;
  });
  var Wr = je(635), si = je(829), Rt = je.n(si), fr = function(w) {
    return w.Array = "array", w.Object = "object", w.Original = "original", w;
  }(fr || {});
  function Vr(w, f) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : fr.Original;
    const S = Rt().get(w, f);
    return y === "array" && Array.isArray(S) === !1 ? [S] : y === "object" && Array.isArray(S) ? S[0] : S;
  }
  function se(w) {
    return new Promise((f) => {
      f(function(y) {
        const { multistatus: S } = y;
        if (S === "")
          return { multistatus: { response: [] } };
        if (!S)
          throw new Error("Invalid response: No root multistatus found");
        const R = { multistatus: Array.isArray(S) ? S[0] : S };
        return Rt().set(R, "multistatus.response", Vr(R, "multistatus.response", fr.Array)), Rt().set(R, "multistatus.response", Rt().get(R, "multistatus.response").map((N) => function(U) {
          const W = Object.assign({}, U);
          return W.status ? Rt().set(W, "status", Vr(W, "status", fr.Object)) : (Rt().set(W, "propstat", Vr(W, "propstat", fr.Object)), Rt().set(W, "propstat.prop", Vr(W, "propstat.prop", fr.Object))), W;
        }(N))), R;
      }(new Wr.XMLParser({ removeNSPrefix: !0, numberParseOptions: { hex: !0, leadingZeros: !1 } }).parse(w)));
    });
  }
  function B(w, f) {
    let y = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    const { getlastmodified: S = null, getcontentlength: R = "0", resourcetype: N = null, getcontenttype: U = null, getetag: W = null } = w, Y = N && typeof N == "object" && N.collection !== void 0 ? "directory" : "file", Q = { filename: f, basename: v().basename(f), lastmod: S, size: parseInt(R, 10), type: Y, etag: typeof W == "string" ? W.replace(/"/g, "") : null };
    return Y === "file" && (Q.mime = U && typeof U == "string" ? U.split(";")[0] : ""), y && (Q.props = w), Q;
  }
  function ee(w, f) {
    let y = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], S = null;
    try {
      w.multistatus.response[0].propstat && (S = w.multistatus.response[0]);
    } catch {
    }
    if (!S)
      throw new Error("Failed getting item stat: bad response");
    const { propstat: { prop: R, status: N } } = S, [U, W, Y] = N.split(" ", 3), Q = parseInt(W, 10);
    if (Q >= 400) {
      const J = new Error("Invalid response: ".concat(Q, " ").concat(Y));
      throw J.status = Q, J;
    }
    return B(R, h(f), y);
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
  function Le(w, f, y) {
    return y ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  const Ye = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], y = 0; y < arguments.length; y++)
        f[y] = arguments[y];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(w, f) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { details: S = !1 } = y, R = Re({ url: b(w.remoteURL, l(f)), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, w, y);
    return Le(Ue(R), function(N) {
      return tt(w, N), Le(N.text(), function(U) {
        return Le(se(U), function(W) {
          const Y = ee(W, f, S);
          return Kt(N, Y, S);
        });
      });
    });
  });
  function Qe(w, f, y) {
    return y ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  const lt = Zt(function(w, f) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const S = function(N) {
      if (!N || N === "/")
        return [];
      let U = N;
      const W = [];
      do
        W.push(U), U = v().dirname(U);
      while (U && U !== "/");
      return W;
    }(h(f));
    S.sort((N, U) => N.length > U.length ? 1 : U.length > N.length ? -1 : 0);
    let R = !1;
    return function(N, U, W) {
      if (typeof N[Sn] == "function") {
        let ie = function(de) {
          try {
            for (; !(Y = oe.next()).done; )
              if ((de = U(Y.value)) && de.then) {
                if (!Ps(de))
                  return void de.then(ie, J || (J = rt.bind(null, Q = new qr(), 2)));
                de = de.v;
              }
            Q ? rt(Q, 1, de) : Q = de;
          } catch (Se) {
            rt(Q || (Q = new qr()), 2, Se);
          }
        };
        var ne = ie, Y, Q, J, oe = N[Sn]();
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
      return function(ie, de, Se) {
        var ge, Oe, ze = -1;
        return function ct(ke) {
          try {
            for (; ++ze < ie.length && (!Se || !Se()); )
              if ((ke = de(ze)) && ke.then) {
                if (!Ps(ke))
                  return void ke.then(ct, Oe || (Oe = rt.bind(null, ge = new qr(), 2)));
                ke = ke.v;
              }
            ge ? rt(ge, 1, ke) : ge = ke;
          } catch (Jt) {
            rt(ge || (ge = new qr()), 2, Jt);
          }
        }(), ge;
      }(Pe, function(ie) {
        return U(Pe[ie]);
      }, W);
    }(S, function(N) {
      return U = function() {
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
              return R = !0, at(fo(w, N, { ...y, recursive: !1 }));
            throw Y;
          }();
        });
      }, (W = function() {
        if (R)
          return at(fo(w, N, { ...y, recursive: !1 }));
      }()) && W.then ? W.then(U) : U();
      var U, W;
    }, function() {
      return !1;
    });
  });
  function Zt(w) {
    return function() {
      for (var f = [], y = 0; y < arguments.length; y++)
        f[y] = arguments[y];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }
  function _r() {
  }
  function at(w, f) {
    if (!f)
      return w && w.then ? w.then(_r) : Promise.resolve();
  }
  const Sn = typeof Symbol < "u" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
  function rt(w, f, y) {
    if (!w.s) {
      if (y instanceof qr) {
        if (!y.s)
          return void (y.o = rt.bind(null, w, f));
        1 & f && (f = y.s), y = y.v;
      }
      if (y && y.then)
        return void y.then(rt.bind(null, w, f), rt.bind(null, w, 2));
      w.s = f, w.v = y;
      const S = w.o;
      S && S(w);
    }
  }
  const qr = function() {
    function w() {
    }
    return w.prototype.then = function(f, y) {
      const S = new w(), R = this.s;
      if (R) {
        const N = 1 & R ? f : y;
        if (N) {
          try {
            rt(S, 1, N(this.v));
          } catch (U) {
            rt(S, 2, U);
          }
          return S;
        }
        return this;
      }
      return this.o = function(N) {
        try {
          const U = N.v;
          1 & N.s ? rt(S, 1, f ? f(U) : U) : y ? rt(S, 1, y(U)) : rt(S, 2, U);
        } catch (U) {
          rt(S, 2, U);
        }
      }, S;
    }, w;
  }();
  function Ps(w) {
    return w instanceof qr && 1 & w.s;
  }
  const fo = Zt(function(w, f) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (y.recursive === !0)
      return lt(w, f, y);
    const S = Re({ url: b(w.remoteURL, (R = l(f), R.endsWith("/") ? R : R + "/")), method: "MKCOL" }, w, y);
    var R;
    return Qe(Ue(S), function(N) {
      tt(w, N);
    });
  });
  var Tp = je(388), Rs = je.n(Tp);
  const Sp = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], y = 0; y < arguments.length; y++)
        f[y] = arguments[y];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(w, f) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const S = {};
    if (typeof y.range == "object" && typeof y.range.start == "number") {
      let W = "bytes=".concat(y.range.start, "-");
      typeof y.range.end == "number" && (W = "".concat(W).concat(y.range.end)), S.Range = W;
    }
    const R = Re({ url: b(w.remoteURL, l(f)), method: "GET", headers: S }, w, y);
    return U = function(W) {
      if (tt(w, W), S.Range && W.status !== 206) {
        const Y = new Error("Invalid response code for partial request: ".concat(W.status));
        throw Y.status = W.status, Y;
      }
      return y.callback && setTimeout(() => {
        y.callback(W);
      }, 0), W.body;
    }, (N = Ue(R)) && N.then || (N = Promise.resolve(N)), U ? N.then(U) : N;
    var N, U;
  }), Op = () => {
  }, $p = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], y = 0; y < arguments.length; y++)
        f[y] = arguments[y];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(w, f, y) {
    y.url || (y.url = b(w.remoteURL, l(f)));
    const S = Re(y, w, {});
    return N = function(U) {
      return tt(w, U), U;
    }, (R = Ue(S)) && R.then || (R = Promise.resolve(R)), N ? R.then(N) : R;
    var R, N;
  }), Ip = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], y = 0; y < arguments.length; y++)
        f[y] = arguments[y];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(w, f) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const S = Re({ url: b(w.remoteURL, l(f)), method: "DELETE" }, w, y);
    return N = function(U) {
      tt(w, U);
    }, (R = Ue(S)) && R.then || (R = Promise.resolve(R)), N ? R.then(N) : R;
    var R, N;
  }), Ap = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], y = 0; y < arguments.length; y++)
        f[y] = arguments[y];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(w, f) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function(S, R) {
      try {
        var N = (U = Ye(w, f, y), W = function() {
          return !0;
        }, Y ? W ? W(U) : U : (U && U.then || (U = Promise.resolve(U)), W ? U.then(W) : U));
      } catch (Q) {
        return R(Q);
      }
      var U, W, Y;
      return N && N.then ? N.then(void 0, R) : N;
    }(0, function(S) {
      if (S.status === 404)
        return !1;
      throw S;
    });
  });
  function po(w, f, y) {
    return y ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  const _p = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], y = 0; y < arguments.length; y++)
        f[y] = arguments[y];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(w, f) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const S = Re({ url: b(w.remoteURL, l(f), "/"), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: y.deep ? "infinity" : "1" } }, w, y);
    return po(Ue(S), function(R) {
      return tt(w, R), po(R.text(), function(N) {
        if (!N)
          throw new Error("Failed parsing directory contents: Empty response");
        return po(se(N), function(U) {
          const W = a(f);
          let Y = function(Q, J, oe) {
            let we = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], Pe = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
            const ye = v().join(J, "/"), { multistatus: { response: ne } } = Q, ie = ne.map((de) => {
              const Se = function(Oe) {
                try {
                  return Oe.replace(/^https?:\/\/[^\/]+/, "");
                } catch (ze) {
                  throw new s(ze, "Failed normalising HREF");
                }
              }(de.href), { propstat: { prop: ge } } = de;
              return B(ge, ye === "/" ? decodeURIComponent(h(Se)) : h(v().relative(decodeURIComponent(ye), decodeURIComponent(Se))), we);
            });
            return Pe ? ie : ie.filter((de) => de.basename && (de.type === "file" || de.filename !== oe.replace(/\/$/, "")));
          }(U, a(w.remoteBasePath || w.remotePath), W, y.details, y.includeSelf);
          return y.glob && (Y = function(Q, J) {
            return Q.filter((oe) => cr(oe.filename, J, { matchBase: !0 }));
          }(Y, y.glob)), Kt(R, Y, y.details);
        });
      });
    });
  });
  function ho(w) {
    return function() {
      for (var f = [], y = 0; y < arguments.length; y++)
        f[y] = arguments[y];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }
  const xp = ho(function(w, f) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const S = Re({ url: b(w.remoteURL, l(f)), method: "GET", headers: { Accept: "text/plain" }, transformResponse: [Rp] }, w, y);
    return ui(Ue(S), function(R) {
      return tt(w, R), ui(R.text(), function(N) {
        return Kt(R, N, y.details);
      });
    });
  });
  function ui(w, f, y) {
    return y ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  const Np = ho(function(w, f) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const S = Re({ url: b(w.remoteURL, l(f)), method: "GET" }, w, y);
    return ui(Ue(S), function(R) {
      let N;
      return tt(w, R), function(U, W) {
        var Y = U();
        return Y && Y.then ? Y.then(W) : W();
      }(function() {
        return ui(R.arrayBuffer(), function(U) {
          N = U;
        });
      }, function() {
        return Kt(R, N, y.details);
      });
    });
  }), Pp = ho(function(w, f) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { format: S = "binary" } = y;
    if (S !== "binary" && S !== "text")
      throw new s({ info: { code: Z.InvalidOutputFormat } }, "Invalid output format: ".concat(S));
    return S === "text" ? xp(w, f, y) : Np(w, f, y);
  }), Rp = (w) => w;
  function Cp(w) {
    return new Wr.XMLBuilder({ attributeNamePrefix: "@_", format: !0, ignoreAttributes: !1, suppressEmptyNode: !0 }).build(Cs({ lockinfo: { "@_xmlns:d": "DAV:", lockscope: { exclusive: {} }, locktype: { write: {} }, owner: { href: w } } }, "d"));
  }
  function Cs(w, f) {
    const y = { ...w };
    for (const S in y)
      y.hasOwnProperty(S) && (y[S] && typeof y[S] == "object" && S.indexOf(":") === -1 ? (y["".concat(f, ":").concat(S)] = Cs(y[S], f), delete y[S]) : /^@_/.test(S) === !1 && (y["".concat(f, ":").concat(S)] = y[S], delete y[S]));
    return y;
  }
  function go(w, f, y) {
    return y ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  function Ls(w) {
    return function() {
      for (var f = [], y = 0; y < arguments.length; y++)
        f[y] = arguments[y];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }
  const Lp = Ls(function(w, f, y) {
    let S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const R = Re({ url: b(w.remoteURL, l(f)), method: "UNLOCK", headers: { "Lock-Token": y } }, w, S);
    return go(Ue(R), function(N) {
      if (tt(w, N), N.status !== 204 && N.status !== 200)
        throw Gr(N);
    });
  }), Fp = Ls(function(w, f) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { refreshToken: S, timeout: R = Mp } = y, N = { Accept: "text/plain,application/xml", Timeout: R };
    S && (N.If = S);
    const U = Re({ url: b(w.remoteURL, l(f)), method: "LOCK", headers: N, data: Cp(w.contactHref) }, w, y);
    return go(Ue(U), function(W) {
      return tt(w, W), go(W.text(), function(Y) {
        const Q = (we = Y, new Wr.XMLParser({ removeNSPrefix: !0, parseAttributeValue: !0, parseTagValue: !0 }).parse(we)), J = Rt().get(Q, "prop.lockdiscovery.activelock.locktoken.href"), oe = Rt().get(Q, "prop.lockdiscovery.activelock.timeout");
        var we;
        if (!J)
          throw Gr(W, "No lock token received: ");
        return { token: J, serverTimeout: oe };
      });
    });
  }), Mp = "Infinite, Second-4100000000";
  function vo(w, f, y) {
    return y ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  const kp = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], y = 0; y < arguments.length; y++)
        f[y] = arguments[y];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(w) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const y = f.path || "/", S = Re({ url: b(w.remoteURL, y), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, w, f);
    return vo(Ue(S), function(R) {
      return tt(w, R), vo(R.text(), function(N) {
        return vo(se(N), function(U) {
          const W = function(Y) {
            try {
              const [Q] = Y.multistatus.response, { propstat: { prop: { "quota-used-bytes": J, "quota-available-bytes": oe } } } = Q;
              return J !== void 0 && oe !== void 0 ? { used: parseInt(J, 10), available: ae(oe) } : null;
            } catch {
            }
            return null;
          }(U);
          return Kt(R, W, f.details);
        });
      });
    });
  });
  function mo(w, f, y) {
    return y ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  const Dp = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], y = 0; y < arguments.length; y++)
        f[y] = arguments[y];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(w, f) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { details: S = !1 } = y, R = Re({ url: b(w.remoteURL, l(f)), method: "SEARCH", headers: { Accept: "text/plain,application/xml", "Content-Type": w.headers["Content-Type"] || "application/xml; charset=utf-8" } }, w, y);
    return mo(Ue(R), function(N) {
      return tt(w, N), mo(N.text(), function(U) {
        return mo(se(U), function(W) {
          const Y = function(Q, J, oe) {
            const we = { truncated: !1, results: [] };
            return we.truncated = Q.multistatus.response.some((Pe) => {
              var ye, ne;
              return ((ye = (Pe.status || ((ne = Pe.propstat) === null || ne === void 0 ? void 0 : ne.status)).split(" ", 3)) === null || ye === void 0 ? void 0 : ye[1]) === "507" && Pe.href.replace(/\/$/, "").endsWith(l(J).replace(/\/$/, ""));
            }), Q.multistatus.response.forEach((Pe) => {
              if (Pe.propstat === void 0)
                return;
              const ye = Pe.href.split("/").map(decodeURIComponent).join("/");
              we.results.push(B(Pe.propstat.prop, ye, oe));
            }), we;
          }(W, f, S);
          return Kt(N, Y, S);
        });
      });
    });
  }), Up = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], y = 0; y < arguments.length; y++)
        f[y] = arguments[y];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(w, f, y) {
    let S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const R = Re({ url: b(w.remoteURL, l(f)), method: "MOVE", headers: { Destination: b(w.remoteURL, l(y)) } }, w, S);
    return U = function(W) {
      tt(w, W);
    }, (N = Ue(R)) && N.then || (N = Promise.resolve(N)), U ? N.then(U) : N;
    var N, U;
  });
  var Bp = je(172);
  const jp = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], y = 0; y < arguments.length; y++)
        f[y] = arguments[y];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(w, f, y) {
    let S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const { contentLength: R = !0, overwrite: N = !0 } = S, U = { "Content-Type": "application/octet-stream" };
    R === !1 || (U["Content-Length"] = "".concat(typeof R == "number" ? R : function(J) {
      if (_e(J))
        return J.byteLength;
      if (Ie(J))
        return J.length;
      if (typeof J == "string")
        return (0, Bp.d)(J);
      throw new s({ info: { code: Z.DataTypeNoLength } }, "Cannot calculate data length: Invalid type");
    }(y))), N || (U["If-None-Match"] = "*");
    const W = Re({ url: b(w.remoteURL, l(f)), method: "PUT", headers: U, data: y }, w, S);
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
  }), Gp = "https://github.com/perry-mitchell/webdav-client/blob/master/LOCK_CONTACT.md";
  function Wp(w) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { authType: y = null, remoteBasePath: S, contactHref: R = Gp, ha1: N, headers: U = {}, httpAgent: W, httpsAgent: Y, password: Q, token: J, username: oe, withCredentials: we } = f;
    let Pe = y;
    Pe || (Pe = oe || Q ? X.Password : X.None);
    const ye = { authType: Pe, remoteBasePath: S, contactHref: R, ha1: N, headers: Object.assign({}, U), httpAgent: W, httpsAgent: Y, password: Q, remotePath: p(w), remoteURL: w, token: J, username: oe, withCredentials: we };
    return function(ne, ie, de, Se, ge) {
      switch (ne.authType) {
        case X.Digest:
          ne.digest = /* @__PURE__ */ function(ze, ct, ke) {
            return { username: ze, password: ct, ha1: ke, nc: 0, algorithm: "md5", hasDigestAuth: !1 };
          }(ie, de, ge);
          break;
        case X.None:
          break;
        case X.Password:
          ne.headers.Authorization = function(ze, ct) {
            const ke = (Jt = "".concat(ze, ":").concat(ct), x().encode(Jt));
            var Jt;
            return "Basic ".concat(ke);
          }(ie, de);
          break;
        case X.Token:
          ne.headers.Authorization = "".concat((Oe = Se).token_type, " ").concat(Oe.access_token);
          break;
        default:
          throw new s({ info: { code: Z.InvalidAuthType } }, "Invalid auth type: ".concat(ne.authType));
      }
      var Oe;
    }(ye, oe, Q, J, N), { copyFile: (ne, ie, de) => Gt(ye, ne, ie, de), createDirectory: (ne, ie) => fo(ye, ne, ie), createReadStream: (ne, ie) => function(de, Se) {
      let ge = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      const Oe = new (Rs()).PassThrough();
      return Sp(de, Se, ge).then((ze) => {
        ze.pipe(Oe);
      }).catch((ze) => {
        Oe.emit("error", ze);
      }), Oe;
    }(ye, ne, ie), createWriteStream: (ne, ie, de) => function(Se, ge) {
      let Oe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, ze = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Op;
      const ct = new (Rs()).PassThrough(), ke = {};
      Oe.overwrite === !1 && (ke["If-None-Match"] = "*");
      const Jt = Re({ url: b(Se.remoteURL, l(ge)), method: "PUT", headers: ke, data: ct, maxRedirects: 0 }, Se, Oe);
      return Ue(Jt).then((Ke) => tt(Se, Ke)).then((Ke) => {
        setTimeout(() => {
          ze(Ke);
        }, 0);
      }).catch((Ke) => {
        ct.emit("error", Ke);
      }), ct;
    }(ye, ne, ie, de), customRequest: (ne, ie) => $p(ye, ne, ie), deleteFile: (ne, ie) => Ip(ye, ne, ie), exists: (ne, ie) => Ap(ye, ne, ie), getDirectoryContents: (ne, ie) => _p(ye, ne, ie), getFileContents: (ne, ie) => Pp(ye, ne, ie), getFileDownloadLink: (ne) => function(ie, de) {
      let Se = b(ie.remoteURL, l(de));
      const ge = /^https:/i.test(Se) ? "https" : "http";
      switch (ie.authType) {
        case X.None:
          break;
        case X.Password: {
          const Oe = F(ie.headers.Authorization.replace(/^Basic /i, "").trim());
          Se = Se.replace(/^https?:\/\//, "".concat(ge, "://").concat(Oe, "@"));
          break;
        }
        default:
          throw new s({ info: { code: Z.LinkUnsupportedAuthType } }, "Unsupported auth type for file link: ".concat(ie.authType));
      }
      return Se;
    }(ye, ne), getFileUploadLink: (ne) => function(ie, de) {
      let Se = "".concat(b(ie.remoteURL, l(de)), "?Content-Type=application/octet-stream");
      const ge = /^https:/i.test(Se) ? "https" : "http";
      switch (ie.authType) {
        case X.None:
          break;
        case X.Password: {
          const Oe = F(ie.headers.Authorization.replace(/^Basic /i, "").trim());
          Se = Se.replace(/^https?:\/\//, "".concat(ge, "://").concat(Oe, "@"));
          break;
        }
        default:
          throw new s({ info: { code: Z.LinkUnsupportedAuthType } }, "Unsupported auth type for file link: ".concat(ie.authType));
      }
      return Se;
    }(ye, ne), getHeaders: () => Object.assign({}, ye.headers), getQuota: (ne) => kp(ye, ne), lock: (ne, ie) => Fp(ye, ne, ie), moveFile: (ne, ie, de) => Up(ye, ne, ie, de), putFileContents: (ne, ie, de) => jp(ye, ne, ie, de), search: (ne, ie) => Dp(ye, ne, ie), setHeaders: (ne) => {
      ye.headers = Object.assign({}, ne);
    }, stat: (ne, ie) => Ye(ye, ne, ie), unlock: (ne, ie, de) => Lp(ye, ne, ie, de) };
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
const ES = (r) => r === null ? ga.getLoggerBuilder().setApp("files").build() : ga.getLoggerBuilder().setApp("files").setUid(r.uid).build(), zl = ES(Xa());
/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
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
var mp = /* @__PURE__ */ ((r) => (r.DEFAULT = "default", r.HIDDEN = "hidden", r))(mp || {});
const Hl = function(r) {
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
var sc;
`${(sc = Xa()) == null ? void 0 : sc.uid}`;
rp("dav");
var yp = {};
(function(r) {
  const e = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", n = e + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", i = "[" + e + "][" + n + "]*", s = new RegExp("^" + i + "$"), c = function(d, m) {
    const l = [];
    let a = m.exec(d);
    for (; a; ) {
      const h = [];
      h.startIndex = m.lastIndex - a[0].length;
      const p = a.length;
      for (let b = 0; b < p; b++)
        h.push(a[b]);
      l.push(h), a = m.exec(d);
    }
    return l;
  }, v = function(d) {
    const m = s.exec(d);
    return !(m === null || typeof m > "u");
  };
  r.isExist = function(d) {
    return typeof d < "u";
  }, r.isEmptyObject = function(d) {
    return Object.keys(d).length === 0;
  }, r.merge = function(d, m, l) {
    if (m) {
      const a = Object.keys(m), h = a.length;
      for (let p = 0; p < h; p++)
        l === "strict" ? d[a[p]] = [m[a[p]]] : d[a[p]] = m[a[p]];
    }
  }, r.getValue = function(d) {
    return r.isExist(d) ? d : "";
  }, r.isName = v, r.getAllMatches = c, r.nameRegexp = i;
})(yp);
!Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt);
!Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
const TS = yp;
"<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, TS.nameRegexp);
function Xl(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "You are about to visit:") + ""
  ), i, s, c, v, d = (
    /*file*/
    r[0].url + ""
  ), m, l, a;
  return {
    c() {
      e = Fe("p"), i = Tt(n), s = nt(), c = Fe("em"), v = Fe("a"), m = Tt(d), ve(v, "href", l = gt(
        /*file*/
        r[0].url
      )), ve(v, "target", a = /*file*/
      r[0].sameWindow ? "_self" : "_blank"), ve(e, "class", "urldisplay");
    },
    m(h, p) {
      We(h, e, p), Ne(e, i), Ne(e, s), Ne(e, c), Ne(c, v), Ne(v, m);
    },
    p(h, p) {
      p & /*file*/
      1 && d !== (d = /*file*/
      h[0].url + "") && Wa(m, d), p & /*file*/
      1 && l !== (l = gt(
        /*file*/
        h[0].url
      )) && ve(v, "href", l), p & /*file*/
      1 && a !== (a = /*file*/
      h[0].sameWindow ? "_self" : "_blank") && ve(v, "target", a);
    },
    d(h) {
      h && Ge(e);
    }
  };
}
function Yl(r) {
  let e = Ft.userCanEdit() || /*file*/
  r[0].permissions >= gn.UPDATE, n, i, s = (
    /*t*/
    r[2]("files_linkeditor", "Visit link") + ""
  ), c, v, d, m = e && Kl(r);
  return {
    c() {
      m && m.c(), n = nt(), i = Fe("a"), c = Tt(s), ve(i, "href", v = gt(
        /*file*/
        r[0].url
      )), ve(i, "target", d = /*file*/
      r[0].sameWindow ? "_self" : "_blank"), ve(i, "class", "button primary");
    },
    m(l, a) {
      m && m.m(l, a), We(l, n, a), We(l, i, a), Ne(i, c);
    },
    p(l, a) {
      a & /*file*/
      1 && (e = Ft.userCanEdit() || /*file*/
      l[0].permissions >= gn.UPDATE), e ? m ? m.p(l, a) : (m = Kl(l), m.c(), m.m(n.parentNode, n)) : m && (m.d(1), m = null), a & /*file*/
      1 && v !== (v = gt(
        /*file*/
        l[0].url
      )) && ve(i, "href", v), a & /*file*/
      1 && d !== (d = /*file*/
      l[0].sameWindow ? "_self" : "_blank") && ve(i, "target", d);
    },
    d(l) {
      l && (Ge(n), Ge(i)), m && m.d(l);
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
    m(v, d) {
      We(v, e, d), Ne(e, i), s || (c = gr(e, "click", ln(
        /*click_handler_1*/
        r[4]
      )), s = !0);
    },
    p: ar,
    d(v) {
      v && Ge(e), s = !1, c();
    }
  };
}
function SS(r) {
  let e, n, i = (
    /*file*/
    r[0].name + ""
  ), s, c, v, d, m, l = (
    /*t*/
    r[2]("files_linkeditor", "Cancel") + ""
  ), a, h, p, b, O = !/*loading*/
  r[1] && Xl(r), _ = !/*loading*/
  r[1] && Yl(r);
  return {
    c() {
      e = Fe("div"), n = Fe("h3"), s = Tt(i), c = nt(), O && O.c(), v = nt(), d = Fe("div"), m = Fe("a"), a = Tt(l), h = nt(), _ && _.c(), ve(e, "class", "urledit push-bottom"), ve(m, "href", window.location.href), ve(m, "class", "button"), ve(d, "class", "oc-dialog-buttonrow twobuttons");
    },
    m(P, D) {
      We(P, e, D), Ne(e, n), Ne(n, s), Ne(e, c), O && O.m(e, null), We(P, v, D), We(P, d, D), Ne(d, m), Ne(m, a), Ne(d, h), _ && _.m(d, null), p || (b = gr(m, "click", ln(
        /*click_handler*/
        r[3]
      )), p = !0);
    },
    p(P, D) {
      D & /*file*/
      1 && i !== (i = /*file*/
      P[0].name + "") && Wa(s, i), /*loading*/
      P[1] ? O && (O.d(1), O = null) : O ? O.p(P, D) : (O = Xl(P), O.c(), O.m(e, null)), /*loading*/
      P[1] ? _ && (_.d(1), _ = null) : _ ? _.p(P, D) : (_ = Yl(P), _.c(), _.m(d, null));
    },
    d(P) {
      P && (Ge(e), Ge(v), Ge(d)), O && O.d(), _ && _.d(), p = !1, b();
    }
  };
}
function OS(r) {
  let e, n;
  return e = new hc({
    props: {
      loading: (
        /*loading*/
        r[1]
      ),
      $$slots: { default: [SS] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      Bi(e.$$.fragment);
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
      n || (Mt(e.$$.fragment, i), n = !0);
    },
    o(i) {
      hr(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Vn(e, i);
    }
  };
}
function $S(r, e, n) {
  let i, s;
  const c = window.t;
  let v;
  Va(() => {
    v = Rr.subscribe(async (l) => {
      if (n(0, i = l), i && i.isLoaded) {
        if (n(1, s = !1), !i.url) {
          OC.dialogs.alert(c("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."), c("files_linkeditor", "A slight problem"));
          return;
        }
        i.skipConfirmation && i.sameWindow && (window.location.href = i.url, sr.update(() => "none"));
      }
    });
  }), qa(() => {
    v();
  });
  const d = () => {
    sr.update(() => "none");
  }, m = () => {
    sr.update(() => "edit");
  };
  return n(0, i = Ft.getFileConfig()), n(1, s = !0), [i, s, c, d, m];
}
class IS extends zn {
  constructor(e) {
    super(), qn(this, e, $S, OS, vn, {});
  }
}
var wp = { exports: {} };
(function(r) {
  var e = function(n) {
    var i = 1e7, s = 7, c = 9007199254740992, v = O(c), d = "0123456789abcdefghijklmnopqrstuvwxyz", m = typeof BigInt == "function";
    function l(E, $, L, k) {
      return typeof E > "u" ? l[0] : typeof $ < "u" ? +$ == 10 && !L ? he(E) : Be(E, $, L, k) : he(E);
    }
    function a(E, $) {
      this.value = E, this.sign = $, this.isSmall = !1;
    }
    a.prototype = Object.create(l.prototype);
    function h(E) {
      this.value = E, this.sign = E < 0, this.isSmall = !0;
    }
    h.prototype = Object.create(l.prototype);
    function p(E) {
      this.value = E;
    }
    p.prototype = Object.create(l.prototype);
    function b(E) {
      return -c < E && E < c;
    }
    function O(E) {
      return E < 1e7 ? [E] : E < 1e14 ? [E % 1e7, Math.floor(E / 1e7)] : [E % 1e7, Math.floor(E / 1e7) % 1e7, Math.floor(E / 1e14)];
    }
    function _(E) {
      P(E);
      var $ = E.length;
      if ($ < 4 && Me(E, v) < 0)
        switch ($) {
          case 0:
            return 0;
          case 1:
            return E[0];
          case 2:
            return E[0] + E[1] * i;
          default:
            return E[0] + (E[1] + E[2] * i) * i;
        }
      return E;
    }
    function P(E) {
      for (var $ = E.length; E[--$] === 0; )
        ;
      E.length = $ + 1;
    }
    function D(E) {
      for (var $ = new Array(E), L = -1; ++L < E; )
        $[L] = 0;
      return $;
    }
    function I(E) {
      return E > 0 ? Math.floor(E) : Math.ceil(E);
    }
    function x(E, $) {
      var L = E.length, k = $.length, g = new Array(L), o = 0, u = i, T, A;
      for (A = 0; A < k; A++)
        T = E[A] + $[A] + o, o = T >= u ? 1 : 0, g[A] = T - o * u;
      for (; A < L; )
        T = E[A] + o, o = T === u ? 1 : 0, g[A++] = T - o * u;
      return o > 0 && g.push(o), g;
    }
    function F(E, $) {
      return E.length >= $.length ? x(E, $) : x($, E);
    }
    function C(E, $) {
      var L = E.length, k = new Array(L), g = i, o, u;
      for (u = 0; u < L; u++)
        o = E[u] - g + $, $ = Math.floor(o / g), k[u] = o - $ * g, $ += 1;
      for (; $ > 0; )
        k[u++] = $ % g, $ = Math.floor($ / g);
      return k;
    }
    a.prototype.add = function(E) {
      var $ = he(E);
      if (this.sign !== $.sign)
        return this.subtract($.negate());
      var L = this.value, k = $.value;
      return $.isSmall ? new a(C(L, Math.abs(k)), this.sign) : new a(F(L, k), this.sign);
    }, a.prototype.plus = a.prototype.add, h.prototype.add = function(E) {
      var $ = he(E), L = this.value;
      if (L < 0 !== $.sign)
        return this.subtract($.negate());
      var k = $.value;
      if ($.isSmall) {
        if (b(L + k))
          return new h(L + k);
        k = O(Math.abs(k));
      }
      return new a(C(k, Math.abs(L)), L < 0);
    }, h.prototype.plus = h.prototype.add, p.prototype.add = function(E) {
      return new p(this.value + he(E).value);
    }, p.prototype.plus = p.prototype.add;
    function z(E, $) {
      var L = E.length, k = $.length, g = new Array(L), o = 0, u = i, T, A;
      for (T = 0; T < k; T++)
        A = E[T] - o - $[T], A < 0 ? (A += u, o = 1) : o = 0, g[T] = A;
      for (T = k; T < L; T++) {
        if (A = E[T] - o, A < 0)
          A += u;
        else {
          g[T++] = A;
          break;
        }
        g[T] = A;
      }
      for (; T < L; T++)
        g[T] = E[T];
      return P(g), g;
    }
    function q(E, $, L) {
      var k;
      return Me(E, $) >= 0 ? k = z(E, $) : (k = z($, E), L = !L), k = _(k), typeof k == "number" ? (L && (k = -k), new h(k)) : new a(k, L);
    }
    function G(E, $, L) {
      var k = E.length, g = new Array(k), o = -$, u = i, T, A;
      for (T = 0; T < k; T++)
        A = E[T] + o, o = Math.floor(A / u), A %= u, g[T] = A < 0 ? A + u : A;
      return g = _(g), typeof g == "number" ? (L && (g = -g), new h(g)) : new a(g, L);
    }
    a.prototype.subtract = function(E) {
      var $ = he(E);
      if (this.sign !== $.sign)
        return this.add($.negate());
      var L = this.value, k = $.value;
      return $.isSmall ? G(L, Math.abs(k), this.sign) : q(L, k, this.sign);
    }, a.prototype.minus = a.prototype.subtract, h.prototype.subtract = function(E) {
      var $ = he(E), L = this.value;
      if (L < 0 !== $.sign)
        return this.add($.negate());
      var k = $.value;
      return $.isSmall ? new h(L - k) : G(k, Math.abs(L), L >= 0);
    }, h.prototype.minus = h.prototype.subtract, p.prototype.subtract = function(E) {
      return new p(this.value - he(E).value);
    }, p.prototype.minus = p.prototype.subtract, a.prototype.negate = function() {
      return new a(this.value, !this.sign);
    }, h.prototype.negate = function() {
      var E = this.sign, $ = new h(-this.value);
      return $.sign = !E, $;
    }, p.prototype.negate = function() {
      return new p(-this.value);
    }, a.prototype.abs = function() {
      return new a(this.value, !1);
    }, h.prototype.abs = function() {
      return new h(Math.abs(this.value));
    }, p.prototype.abs = function() {
      return new p(this.value >= 0 ? this.value : -this.value);
    };
    function X(E, $) {
      var L = E.length, k = $.length, g = L + k, o = D(g), u = i, T, A, M, j, te;
      for (M = 0; M < L; ++M) {
        j = E[M];
        for (var le = 0; le < k; ++le)
          te = $[le], T = j * te + o[M + le], A = Math.floor(T / u), o[M + le] = T - A * u, o[M + le + 1] += A;
      }
      return P(o), o;
    }
    function Z(E, $) {
      var L = E.length, k = new Array(L), g = i, o = 0, u, T;
      for (T = 0; T < L; T++)
        u = E[T] * $ + o, o = Math.floor(u / g), k[T] = u - o * g;
      for (; o > 0; )
        k[T++] = o % g, o = Math.floor(o / g);
      return k;
    }
    function H(E, $) {
      for (var L = []; $-- > 0; )
        L.push(0);
      return L.concat(E);
    }
    function K(E, $) {
      var L = Math.max(E.length, $.length);
      if (L <= 30)
        return X(E, $);
      L = Math.ceil(L / 2);
      var k = E.slice(L), g = E.slice(0, L), o = $.slice(L), u = $.slice(0, L), T = K(g, u), A = K(k, o), M = K(F(g, k), F(u, o)), j = F(F(T, H(z(z(M, T), A), L)), H(A, 2 * L));
      return P(j), j;
    }
    function V(E, $) {
      return -0.012 * E - 0.012 * $ + 15e-6 * E * $ > 0;
    }
    a.prototype.multiply = function(E) {
      var $ = he(E), L = this.value, k = $.value, g = this.sign !== $.sign, o;
      if ($.isSmall) {
        if (k === 0)
          return l[0];
        if (k === 1)
          return this;
        if (k === -1)
          return this.negate();
        if (o = Math.abs(k), o < i)
          return new a(Z(L, o), g);
        k = O(o);
      }
      return V(L.length, k.length) ? new a(K(L, k), g) : new a(X(L, k), g);
    }, a.prototype.times = a.prototype.multiply;
    function re(E, $, L) {
      return E < i ? new a(Z($, E), L) : new a(X($, O(E)), L);
    }
    h.prototype._multiplyBySmall = function(E) {
      return b(E.value * this.value) ? new h(E.value * this.value) : re(Math.abs(E.value), O(Math.abs(this.value)), this.sign !== E.sign);
    }, a.prototype._multiplyBySmall = function(E) {
      return E.value === 0 ? l[0] : E.value === 1 ? this : E.value === -1 ? this.negate() : re(Math.abs(E.value), this.value, this.sign !== E.sign);
    }, h.prototype.multiply = function(E) {
      return he(E)._multiplyBySmall(this);
    }, h.prototype.times = h.prototype.multiply, p.prototype.multiply = function(E) {
      return new p(this.value * he(E).value);
    }, p.prototype.times = p.prototype.multiply;
    function pe(E) {
      var $ = E.length, L = D($ + $), k = i, g, o, u, T, A;
      for (u = 0; u < $; u++) {
        T = E[u], o = 0 - T * T;
        for (var M = u; M < $; M++)
          A = E[M], g = 2 * (T * A) + L[u + M] + o, o = Math.floor(g / k), L[u + M] = g - o * k;
        L[u + $] = o;
      }
      return P(L), L;
    }
    a.prototype.square = function() {
      return new a(pe(this.value), !1);
    }, h.prototype.square = function() {
      var E = this.value * this.value;
      return b(E) ? new h(E) : new a(pe(O(Math.abs(this.value))), !1);
    }, p.prototype.square = function(E) {
      return new p(this.value * this.value);
    };
    function Ae(E, $) {
      var L = E.length, k = $.length, g = i, o = D($.length), u = $[k - 1], T = Math.ceil(g / (2 * u)), A = Z(E, T), M = Z($, T), j, te, le, ue, fe, xe, Xt;
      for (A.length <= L && A.push(0), M.push(0), u = M[k - 1], te = L - k; te >= 0; te--) {
        for (j = g - 1, A[te + k] !== u && (j = Math.floor((A[te + k] * g + A[te + k - 1]) / u)), le = 0, ue = 0, xe = M.length, fe = 0; fe < xe; fe++)
          le += j * M[fe], Xt = Math.floor(le / g), ue += A[te + fe] - (le - Xt * g), le = Xt, ue < 0 ? (A[te + fe] = ue + g, ue = -1) : (A[te + fe] = ue, ue = 0);
        for (; ue !== 0; ) {
          for (j -= 1, le = 0, fe = 0; fe < xe; fe++)
            le += A[te + fe] - g + M[fe], le < 0 ? (A[te + fe] = le + g, le = 0) : (A[te + fe] = le, le = 1);
          ue += le;
        }
        o[te] = j;
      }
      return A = Ee(A, T)[0], [_(o), _(A)];
    }
    function ce(E, $) {
      for (var L = E.length, k = $.length, g = [], o = [], u = i, T, A, M, j, te; L; ) {
        if (o.unshift(E[--L]), P(o), Me(o, $) < 0) {
          g.push(0);
          continue;
        }
        A = o.length, M = o[A - 1] * u + o[A - 2], j = $[k - 1] * u + $[k - 2], A > k && (M = (M + 1) * u), T = Math.ceil(M / j);
        do {
          if (te = Z($, T), Me(te, o) <= 0)
            break;
          T--;
        } while (T);
        g.push(T), o = z(o, te);
      }
      return g.reverse(), [_(g), _(o)];
    }
    function Ee(E, $) {
      var L = E.length, k = D(L), g = i, o, u, T, A;
      for (T = 0, o = L - 1; o >= 0; --o)
        A = T * g + E[o], u = I(A / $), T = A - u * $, k[o] = u | 0;
      return [k, T | 0];
    }
    function me(E, $) {
      var L, k = he($);
      if (m)
        return [new p(E.value / k.value), new p(E.value % k.value)];
      var g = E.value, o = k.value, u;
      if (o === 0)
        throw new Error("Cannot divide by zero");
      if (E.isSmall)
        return k.isSmall ? [new h(I(g / o)), new h(g % o)] : [l[0], E];
      if (k.isSmall) {
        if (o === 1)
          return [E, l[0]];
        if (o == -1)
          return [E.negate(), l[0]];
        var T = Math.abs(o);
        if (T < i) {
          L = Ee(g, T), u = _(L[0]);
          var A = L[1];
          return E.sign && (A = -A), typeof u == "number" ? (E.sign !== k.sign && (u = -u), [new h(u), new h(A)]) : [new a(u, E.sign !== k.sign), new h(A)];
        }
        o = O(T);
      }
      var M = Me(g, o);
      if (M === -1)
        return [l[0], E];
      if (M === 0)
        return [l[E.sign === k.sign ? 1 : -1], l[0]];
      g.length + o.length <= 200 ? L = Ae(g, o) : L = ce(g, o), u = L[0];
      var j = E.sign !== k.sign, te = L[1], le = E.sign;
      return typeof u == "number" ? (j && (u = -u), u = new h(u)) : u = new a(u, j), typeof te == "number" ? (le && (te = -te), te = new h(te)) : te = new a(te, le), [u, te];
    }
    a.prototype.divmod = function(E) {
      var $ = me(this, E);
      return {
        quotient: $[0],
        remainder: $[1]
      };
    }, p.prototype.divmod = h.prototype.divmod = a.prototype.divmod, a.prototype.divide = function(E) {
      return me(this, E)[0];
    }, p.prototype.over = p.prototype.divide = function(E) {
      return new p(this.value / he(E).value);
    }, h.prototype.over = h.prototype.divide = a.prototype.over = a.prototype.divide, a.prototype.mod = function(E) {
      return me(this, E)[1];
    }, p.prototype.mod = p.prototype.remainder = function(E) {
      return new p(this.value % he(E).value);
    }, h.prototype.remainder = h.prototype.mod = a.prototype.remainder = a.prototype.mod, a.prototype.pow = function(E) {
      var $ = he(E), L = this.value, k = $.value, g, o, u;
      if (k === 0)
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
      if (this.isSmall && b(g = Math.pow(L, k)))
        return new h(I(g));
      for (o = this, u = l[1]; k & !0 && (u = u.times(o), --k), k !== 0; )
        k /= 2, o = o.square();
      return u;
    }, h.prototype.pow = a.prototype.pow, p.prototype.pow = function(E) {
      var $ = he(E), L = this.value, k = $.value, g = BigInt(0), o = BigInt(1), u = BigInt(2);
      if (k === g)
        return l[1];
      if (L === g)
        return l[0];
      if (L === o)
        return l[1];
      if (L === BigInt(-1))
        return $.isEven() ? l[1] : l[-1];
      if ($.isNegative())
        return new p(g);
      for (var T = this, A = l[1]; (k & o) === o && (A = A.times(T), --k), k !== g; )
        k /= u, T = T.square();
      return A;
    }, a.prototype.modPow = function(E, $) {
      if (E = he(E), $ = he($), $.isZero())
        throw new Error("Cannot take modPow with modulus 0");
      var L = l[1], k = this.mod($);
      for (E.isNegative() && (E = E.multiply(l[-1]), k = k.modInv($)); E.isPositive(); ) {
        if (k.isZero())
          return l[0];
        E.isOdd() && (L = L.multiply(k).mod($)), E = E.divide(2), k = k.square().mod($);
      }
      return L;
    }, p.prototype.modPow = h.prototype.modPow = a.prototype.modPow;
    function Me(E, $) {
      if (E.length !== $.length)
        return E.length > $.length ? 1 : -1;
      for (var L = E.length - 1; L >= 0; L--)
        if (E[L] !== $[L])
          return E[L] > $[L] ? 1 : -1;
      return 0;
    }
    a.prototype.compareAbs = function(E) {
      var $ = he(E), L = this.value, k = $.value;
      return $.isSmall ? 1 : Me(L, k);
    }, h.prototype.compareAbs = function(E) {
      var $ = he(E), L = Math.abs(this.value), k = $.value;
      return $.isSmall ? (k = Math.abs(k), L === k ? 0 : L > k ? 1 : -1) : -1;
    }, p.prototype.compareAbs = function(E) {
      var $ = this.value, L = he(E).value;
      return $ = $ >= 0 ? $ : -$, L = L >= 0 ? L : -L, $ === L ? 0 : $ > L ? 1 : -1;
    }, a.prototype.compare = function(E) {
      if (E === 1 / 0)
        return -1;
      if (E === -1 / 0)
        return 1;
      var $ = he(E), L = this.value, k = $.value;
      return this.sign !== $.sign ? $.sign ? 1 : -1 : $.isSmall ? this.sign ? -1 : 1 : Me(L, k) * (this.sign ? -1 : 1);
    }, a.prototype.compareTo = a.prototype.compare, h.prototype.compare = function(E) {
      if (E === 1 / 0)
        return -1;
      if (E === -1 / 0)
        return 1;
      var $ = he(E), L = this.value, k = $.value;
      return $.isSmall ? L == k ? 0 : L > k ? 1 : -1 : L < 0 !== $.sign ? L < 0 ? -1 : 1 : L < 0 ? 1 : -1;
    }, h.prototype.compareTo = h.prototype.compare, p.prototype.compare = function(E) {
      if (E === 1 / 0)
        return -1;
      if (E === -1 / 0)
        return 1;
      var $ = this.value, L = he(E).value;
      return $ === L ? 0 : $ > L ? 1 : -1;
    }, p.prototype.compareTo = p.prototype.compare, a.prototype.equals = function(E) {
      return this.compare(E) === 0;
    }, p.prototype.eq = p.prototype.equals = h.prototype.eq = h.prototype.equals = a.prototype.eq = a.prototype.equals, a.prototype.notEquals = function(E) {
      return this.compare(E) !== 0;
    }, p.prototype.neq = p.prototype.notEquals = h.prototype.neq = h.prototype.notEquals = a.prototype.neq = a.prototype.notEquals, a.prototype.greater = function(E) {
      return this.compare(E) > 0;
    }, p.prototype.gt = p.prototype.greater = h.prototype.gt = h.prototype.greater = a.prototype.gt = a.prototype.greater, a.prototype.lesser = function(E) {
      return this.compare(E) < 0;
    }, p.prototype.lt = p.prototype.lesser = h.prototype.lt = h.prototype.lesser = a.prototype.lt = a.prototype.lesser, a.prototype.greaterOrEquals = function(E) {
      return this.compare(E) >= 0;
    }, p.prototype.geq = p.prototype.greaterOrEquals = h.prototype.geq = h.prototype.greaterOrEquals = a.prototype.geq = a.prototype.greaterOrEquals, a.prototype.lesserOrEquals = function(E) {
      return this.compare(E) <= 0;
    }, p.prototype.leq = p.prototype.lesserOrEquals = h.prototype.leq = h.prototype.lesserOrEquals = a.prototype.leq = a.prototype.lesserOrEquals, a.prototype.isEven = function() {
      return (this.value[0] & 1) === 0;
    }, h.prototype.isEven = function() {
      return (this.value & 1) === 0;
    }, p.prototype.isEven = function() {
      return (this.value & BigInt(1)) === BigInt(0);
    }, a.prototype.isOdd = function() {
      return (this.value[0] & 1) === 1;
    }, h.prototype.isOdd = function() {
      return (this.value & 1) === 1;
    }, p.prototype.isOdd = function() {
      return (this.value & BigInt(1)) === BigInt(1);
    }, a.prototype.isPositive = function() {
      return !this.sign;
    }, h.prototype.isPositive = function() {
      return this.value > 0;
    }, p.prototype.isPositive = h.prototype.isPositive, a.prototype.isNegative = function() {
      return this.sign;
    }, h.prototype.isNegative = function() {
      return this.value < 0;
    }, p.prototype.isNegative = h.prototype.isNegative, a.prototype.isUnit = function() {
      return !1;
    }, h.prototype.isUnit = function() {
      return Math.abs(this.value) === 1;
    }, p.prototype.isUnit = function() {
      return this.abs().value === BigInt(1);
    }, a.prototype.isZero = function() {
      return !1;
    }, h.prototype.isZero = function() {
      return this.value === 0;
    }, p.prototype.isZero = function() {
      return this.value === BigInt(0);
    }, a.prototype.isDivisibleBy = function(E) {
      var $ = he(E);
      return $.isZero() ? !1 : $.isUnit() ? !0 : $.compareAbs(2) === 0 ? this.isEven() : this.mod($).isZero();
    }, p.prototype.isDivisibleBy = h.prototype.isDivisibleBy = a.prototype.isDivisibleBy;
    function $e(E) {
      var $ = E.abs();
      if ($.isUnit())
        return !1;
      if ($.equals(2) || $.equals(3) || $.equals(5))
        return !0;
      if ($.isEven() || $.isDivisibleBy(3) || $.isDivisibleBy(5))
        return !1;
      if ($.lesser(49))
        return !0;
    }
    function Ze(E, $) {
      for (var L = E.prev(), k = L, g = 0, o, u, T; k.isEven(); )
        k = k.divide(2), g++;
      e:
        for (u = 0; u < $.length; u++)
          if (!E.lesser($[u]) && (T = e($[u]).modPow(k, E), !(T.isUnit() || T.equals(L)))) {
            for (o = g - 1; o != 0; o--) {
              if (T = T.square().mod(E), T.isUnit())
                return !1;
              if (T.equals(L))
                continue e;
            }
            return !1;
          }
      return !0;
    }
    a.prototype.isPrime = function(E) {
      var $ = $e(this);
      if ($ !== n)
        return $;
      var L = this.abs(), k = L.bitLength();
      if (k <= 64)
        return Ze(L, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
      for (var g = Math.log(2) * k.toJSNumber(), o = Math.ceil(E === !0 ? 2 * Math.pow(g, 2) : g), u = [], T = 0; T < o; T++)
        u.push(e(T + 2));
      return Ze(L, u);
    }, p.prototype.isPrime = h.prototype.isPrime = a.prototype.isPrime, a.prototype.isProbablePrime = function(E, $) {
      var L = $e(this);
      if (L !== n)
        return L;
      for (var k = this.abs(), g = E === n ? 5 : E, o = [], u = 0; u < g; u++)
        o.push(e.randBetween(2, k.minus(2), $));
      return Ze(k, o);
    }, p.prototype.isProbablePrime = h.prototype.isProbablePrime = a.prototype.isProbablePrime, a.prototype.modInv = function(E) {
      for (var $ = e.zero, L = e.one, k = he(E), g = this.abs(), o, u, T; !g.isZero(); )
        o = k.divide(g), u = $, T = k, $ = L, k = g, L = u.subtract(o.multiply(L)), g = T.subtract(o.multiply(g));
      if (!k.isUnit())
        throw new Error(this.toString() + " and " + E.toString() + " are not co-prime");
      return $.compare(0) === -1 && ($ = $.add(E)), this.isNegative() ? $.negate() : $;
    }, p.prototype.modInv = h.prototype.modInv = a.prototype.modInv, a.prototype.next = function() {
      var E = this.value;
      return this.sign ? G(E, 1, this.sign) : new a(C(E, 1), this.sign);
    }, h.prototype.next = function() {
      var E = this.value;
      return E + 1 < c ? new h(E + 1) : new a(v, !1);
    }, p.prototype.next = function() {
      return new p(this.value + BigInt(1));
    }, a.prototype.prev = function() {
      var E = this.value;
      return this.sign ? new a(C(E, 1), !0) : G(E, 1, this.sign);
    }, h.prototype.prev = function() {
      var E = this.value;
      return E - 1 > -c ? new h(E - 1) : new a(v, !0);
    }, p.prototype.prev = function() {
      return new p(this.value - BigInt(1));
    };
    for (var Te = [1]; 2 * Te[Te.length - 1] <= i; )
      Te.push(2 * Te[Te.length - 1]);
    var _e = Te.length, Ie = Te[_e - 1];
    function Ot(E) {
      return Math.abs(E) <= i;
    }
    a.prototype.shiftLeft = function(E) {
      var $ = he(E).toJSNumber();
      if (!Ot($))
        throw new Error(String($) + " is too large for shifting.");
      if ($ < 0)
        return this.shiftRight(-$);
      var L = this;
      if (L.isZero())
        return L;
      for (; $ >= _e; )
        L = L.multiply(Ie), $ -= _e - 1;
      return L.multiply(Te[$]);
    }, p.prototype.shiftLeft = h.prototype.shiftLeft = a.prototype.shiftLeft, a.prototype.shiftRight = function(E) {
      var $, L = he(E).toJSNumber();
      if (!Ot(L))
        throw new Error(String(L) + " is too large for shifting.");
      if (L < 0)
        return this.shiftLeft(-L);
      for (var k = this; L >= _e; ) {
        if (k.isZero() || k.isNegative() && k.isUnit())
          return k;
        $ = me(k, Ie), k = $[1].isNegative() ? $[0].prev() : $[0], L -= _e - 1;
      }
      return $ = me(k, Te[L]), $[1].isNegative() ? $[0].prev() : $[0];
    }, p.prototype.shiftRight = h.prototype.shiftRight = a.prototype.shiftRight;
    function wt(E, $, L) {
      $ = he($);
      for (var k = E.isNegative(), g = $.isNegative(), o = k ? E.not() : E, u = g ? $.not() : $, T = 0, A = 0, M = null, j = null, te = []; !o.isZero() || !u.isZero(); )
        M = me(o, Ie), T = M[1].toJSNumber(), k && (T = Ie - 1 - T), j = me(u, Ie), A = j[1].toJSNumber(), g && (A = Ie - 1 - A), o = M[0], u = j[0], te.push(L(T, A));
      for (var le = L(k ? 1 : 0, g ? 1 : 0) !== 0 ? e(-1) : e(0), ue = te.length - 1; ue >= 0; ue -= 1)
        le = le.multiply(Ie).add(e(te[ue]));
      return le;
    }
    a.prototype.not = function() {
      return this.negate().prev();
    }, p.prototype.not = h.prototype.not = a.prototype.not, a.prototype.and = function(E) {
      return wt(this, E, function($, L) {
        return $ & L;
      });
    }, p.prototype.and = h.prototype.and = a.prototype.and, a.prototype.or = function(E) {
      return wt(this, E, function($, L) {
        return $ | L;
      });
    }, p.prototype.or = h.prototype.or = a.prototype.or, a.prototype.xor = function(E) {
      return wt(this, E, function($, L) {
        return $ ^ L;
      });
    }, p.prototype.xor = h.prototype.xor = a.prototype.xor;
    var Ue = 1 << 30, Ht = (i & -i) * (i & -i) | Ue;
    function Re(E) {
      var $ = E.value, L = typeof $ == "number" ? $ | Ue : typeof $ == "bigint" ? $ | BigInt(Ue) : $[0] + $[1] * i | Ht;
      return L & -L;
    }
    function Je(E, $) {
      if ($.compareTo(E) <= 0) {
        var L = Je(E, $.square($)), k = L.p, g = L.e, o = k.multiply($);
        return o.compareTo(E) <= 0 ? { p: o, e: g * 2 + 1 } : { p: k, e: g * 2 };
      }
      return { p: e(1), e: 0 };
    }
    a.prototype.bitLength = function() {
      var E = this;
      return E.compareTo(e(0)) < 0 && (E = E.negate().subtract(e(1))), E.compareTo(e(0)) === 0 ? e(0) : e(Je(E, e(2)).e).add(e(1));
    }, p.prototype.bitLength = h.prototype.bitLength = a.prototype.bitLength;
    function Nt(E, $) {
      return E = he(E), $ = he($), E.greater($) ? E : $;
    }
    function ut(E, $) {
      return E = he(E), $ = he($), E.lesser($) ? E : $;
    }
    function bt(E, $) {
      if (E = he(E).abs(), $ = he($).abs(), E.equals($))
        return E;
      if (E.isZero())
        return $;
      if ($.isZero())
        return E;
      for (var L = l[1], k, g; E.isEven() && $.isEven(); )
        k = ut(Re(E), Re($)), E = E.divide(k), $ = $.divide(k), L = L.multiply(k);
      for (; E.isEven(); )
        E = E.divide(Re(E));
      do {
        for (; $.isEven(); )
          $ = $.divide(Re($));
        E.greater($) && (g = $, $ = E, E = g), $ = $.subtract(E);
      } while (!$.isZero());
      return L.isUnit() ? E : E.multiply(L);
    }
    function jt(E, $) {
      return E = he(E).abs(), $ = he($).abs(), E.divide(bt(E, $)).multiply($);
    }
    function Ce(E, $, L) {
      E = he(E), $ = he($);
      var k = L || Math.random, g = ut(E, $), o = Nt(E, $), u = o.subtract(g).add(1);
      if (u.isSmall)
        return g.add(Math.floor(k() * u));
      for (var T = pt(u, i).value, A = [], M = !0, j = 0; j < T.length; j++) {
        var te = M ? T[j] + (j + 1 < T.length ? T[j + 1] / i : 0) : i, le = I(k() * te);
        A.push(le), le < T[j] && (M = !1);
      }
      return g.add(l.fromArray(A, i, !1));
    }
    var Be = function(E, $, L, k) {
      L = L || d, E = String(E), k || (E = E.toLowerCase(), L = L.toLowerCase());
      var g = E.length, o, u = Math.abs($), T = {};
      for (o = 0; o < L.length; o++)
        T[L[o]] = o;
      for (o = 0; o < g; o++) {
        var A = E[o];
        if (A !== "-" && A in T && T[A] >= u) {
          if (A === "1" && u === 1)
            continue;
          throw new Error(A + " is not a valid digit in base " + $ + ".");
        }
      }
      $ = he($);
      var M = [], j = E[0] === "-";
      for (o = j ? 1 : 0; o < E.length; o++) {
        var A = E[o];
        if (A in T)
          M.push(he(T[A]));
        else if (A === "<") {
          var te = o;
          do
            o++;
          while (E[o] !== ">" && o < E.length);
          M.push(he(E.slice(te + 1, o)));
        } else
          throw new Error(A + " is not a valid character");
      }
      return cr(M, $, j);
    };
    function cr(E, $, L) {
      var k = l[0], g = l[1], o;
      for (o = E.length - 1; o >= 0; o--)
        k = k.add(E[o].times(g)), g = g.times($);
      return L ? k.negate() : k;
    }
    function $r(E, $) {
      return $ = $ || d, E < $.length ? $[E] : "<" + E + ">";
    }
    function pt(E, $) {
      if ($ = e($), $.isZero()) {
        if (E.isZero())
          return { value: [0], isNegative: !1 };
        throw new Error("Cannot convert nonzero numbers to base 0.");
      }
      if ($.equals(-1)) {
        if (E.isZero())
          return { value: [0], isNegative: !1 };
        if (E.isNegative())
          return {
            value: [].concat.apply(
              [],
              Array.apply(null, Array(-E.toJSNumber())).map(Array.prototype.valueOf, [1, 0])
            ),
            isNegative: !1
          };
        var L = Array.apply(null, Array(E.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
        return L.unshift([1]), {
          value: [].concat.apply([], L),
          isNegative: !1
        };
      }
      var k = !1;
      if (E.isNegative() && $.isPositive() && (k = !0, E = E.abs()), $.isUnit())
        return E.isZero() ? { value: [0], isNegative: !1 } : {
          value: Array.apply(null, Array(E.toJSNumber())).map(Number.prototype.valueOf, 1),
          isNegative: k
        };
      for (var g = [], o = E, u; o.isNegative() || o.compareAbs($) >= 0; ) {
        u = o.divmod($), o = u.quotient;
        var T = u.remainder;
        T.isNegative() && (T = $.minus(T).abs(), o = o.next()), g.push(T.toJSNumber());
      }
      return g.push(o.toJSNumber()), { value: g.reverse(), isNegative: k };
    }
    function Pt(E, $, L) {
      var k = pt(E, $);
      return (k.isNegative ? "-" : "") + k.value.map(function(g) {
        return $r(g, L);
      }).join("");
    }
    a.prototype.toArray = function(E) {
      return pt(this, E);
    }, h.prototype.toArray = function(E) {
      return pt(this, E);
    }, p.prototype.toArray = function(E) {
      return pt(this, E);
    }, a.prototype.toString = function(E, $) {
      if (E === n && (E = 10), E !== 10)
        return Pt(this, E, $);
      for (var L = this.value, k = L.length, g = String(L[--k]), o = "0000000", u; --k >= 0; )
        u = String(L[k]), g += o.slice(u.length) + u;
      var T = this.sign ? "-" : "";
      return T + g;
    }, h.prototype.toString = function(E, $) {
      return E === n && (E = 10), E != 10 ? Pt(this, E, $) : String(this.value);
    }, p.prototype.toString = h.prototype.toString, p.prototype.toJSON = a.prototype.toJSON = h.prototype.toJSON = function() {
      return this.toString();
    }, a.prototype.valueOf = function() {
      return parseInt(this.toString(), 10);
    }, a.prototype.toJSNumber = a.prototype.valueOf, h.prototype.valueOf = function() {
      return this.value;
    }, h.prototype.toJSNumber = h.prototype.valueOf, p.prototype.valueOf = p.prototype.toJSNumber = function() {
      return parseInt(this.toString(), 10);
    };
    function $t(E) {
      if (b(+E)) {
        var $ = +E;
        if ($ === I($))
          return m ? new p(BigInt($)) : new h($);
        throw new Error("Invalid integer: " + E);
      }
      var L = E[0] === "-";
      L && (E = E.slice(1));
      var k = E.split(/e/i);
      if (k.length > 2)
        throw new Error("Invalid integer: " + k.join("e"));
      if (k.length === 2) {
        var g = k[1];
        if (g[0] === "+" && (g = g.slice(1)), g = +g, g !== I(g) || !b(g))
          throw new Error("Invalid integer: " + g + " is not a valid exponent.");
        var o = k[0], u = o.indexOf(".");
        if (u >= 0 && (g -= o.length - u - 1, o = o.slice(0, u) + o.slice(u + 1)), g < 0)
          throw new Error("Cannot include negative exponent part for integers");
        o += new Array(g + 1).join("0"), E = o;
      }
      var T = /^([0-9][0-9]*)$/.test(E);
      if (!T)
        throw new Error("Invalid integer: " + E);
      if (m)
        return new p(BigInt(L ? "-" + E : E));
      for (var A = [], M = E.length, j = s, te = M - j; M > 0; )
        A.push(+E.slice(te, M)), te -= j, te < 0 && (te = 0), M -= j;
      return P(A), new a(A, L);
    }
    function It(E) {
      if (m)
        return new p(BigInt(E));
      if (b(E)) {
        if (E !== I(E))
          throw new Error(E + " is not an integer.");
        return new h(E);
      }
      return $t(E.toString());
    }
    function he(E) {
      return typeof E == "number" ? It(E) : typeof E == "string" ? $t(E) : typeof E == "bigint" ? new p(E) : E;
    }
    for (var qe = 0; qe < 1e3; qe++)
      l[qe] = he(qe), qe > 0 && (l[-qe] = he(-qe));
    return l.one = l[1], l.zero = l[0], l.minusOne = l[-1], l.max = Nt, l.min = ut, l.gcd = bt, l.lcm = jt, l.isInstance = function(E) {
      return E instanceof a || E instanceof h || E instanceof p;
    }, l.randBetween = Ce, l.fromArray = function(E, $, L) {
      return cr(E.map(he), he($ || 10), L);
    }, l;
  }();
  r.hasOwnProperty("exports") && (r.exports = e);
})(wp);
var AS = wp.exports;
const _S = /* @__PURE__ */ za(AS);
var bp = {}, lo = {};
lo.byteLength = PS;
lo.toByteArray = CS;
lo.fromByteArray = MS;
var or = [], Lt = [], xS = typeof Uint8Array < "u" ? Uint8Array : Array, ua = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var tn = 0, NS = ua.length; tn < NS; ++tn)
  or[tn] = ua[tn], Lt[ua.charCodeAt(tn)] = tn;
Lt[45] = 62;
Lt[95] = 63;
function Ep(r) {
  var e = r.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = r.indexOf("=");
  n === -1 && (n = e);
  var i = n === e ? 0 : 4 - n % 4;
  return [n, i];
}
function PS(r) {
  var e = Ep(r), n = e[0], i = e[1];
  return (n + i) * 3 / 4 - i;
}
function RS(r, e, n) {
  return (e + n) * 3 / 4 - n;
}
function CS(r) {
  var e, n = Ep(r), i = n[0], s = n[1], c = new xS(RS(r, i, s)), v = 0, d = s > 0 ? i - 4 : i, m;
  for (m = 0; m < d; m += 4)
    e = Lt[r.charCodeAt(m)] << 18 | Lt[r.charCodeAt(m + 1)] << 12 | Lt[r.charCodeAt(m + 2)] << 6 | Lt[r.charCodeAt(m + 3)], c[v++] = e >> 16 & 255, c[v++] = e >> 8 & 255, c[v++] = e & 255;
  return s === 2 && (e = Lt[r.charCodeAt(m)] << 2 | Lt[r.charCodeAt(m + 1)] >> 4, c[v++] = e & 255), s === 1 && (e = Lt[r.charCodeAt(m)] << 10 | Lt[r.charCodeAt(m + 1)] << 4 | Lt[r.charCodeAt(m + 2)] >> 2, c[v++] = e >> 8 & 255, c[v++] = e & 255), c;
}
function LS(r) {
  return or[r >> 18 & 63] + or[r >> 12 & 63] + or[r >> 6 & 63] + or[r & 63];
}
function FS(r, e, n) {
  for (var i, s = [], c = e; c < n; c += 3)
    i = (r[c] << 16 & 16711680) + (r[c + 1] << 8 & 65280) + (r[c + 2] & 255), s.push(LS(i));
  return s.join("");
}
function MS(r) {
  for (var e, n = r.length, i = n % 3, s = [], c = 16383, v = 0, d = n - i; v < d; v += c)
    s.push(FS(r, v, v + c > d ? d : v + c));
  return i === 1 ? (e = r[n - 1], s.push(
    or[e >> 2] + or[e << 4 & 63] + "=="
  )) : i === 2 && (e = (r[n - 2] << 8) + r[n - 1], s.push(
    or[e >> 10] + or[e >> 4 & 63] + or[e << 2 & 63] + "="
  )), s.join("");
}
var Ns = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Ns.read = function(r, e, n, i, s) {
  var c, v, d = s * 8 - i - 1, m = (1 << d) - 1, l = m >> 1, a = -7, h = n ? s - 1 : 0, p = n ? -1 : 1, b = r[e + h];
  for (h += p, c = b & (1 << -a) - 1, b >>= -a, a += d; a > 0; c = c * 256 + r[e + h], h += p, a -= 8)
    ;
  for (v = c & (1 << -a) - 1, c >>= -a, a += i; a > 0; v = v * 256 + r[e + h], h += p, a -= 8)
    ;
  if (c === 0)
    c = 1 - l;
  else {
    if (c === m)
      return v ? NaN : (b ? -1 : 1) * (1 / 0);
    v = v + Math.pow(2, i), c = c - l;
  }
  return (b ? -1 : 1) * v * Math.pow(2, c - i);
};
Ns.write = function(r, e, n, i, s, c) {
  var v, d, m, l = c * 8 - s - 1, a = (1 << l) - 1, h = a >> 1, p = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, b = i ? 0 : c - 1, O = i ? 1 : -1, _ = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (d = isNaN(e) ? 1 : 0, v = a) : (v = Math.floor(Math.log(e) / Math.LN2), e * (m = Math.pow(2, -v)) < 1 && (v--, m *= 2), v + h >= 1 ? e += p / m : e += p * Math.pow(2, 1 - h), e * m >= 2 && (v++, m /= 2), v + h >= a ? (d = 0, v = a) : v + h >= 1 ? (d = (e * m - 1) * Math.pow(2, s), v = v + h) : (d = e * Math.pow(2, h - 1) * Math.pow(2, s), v = 0)); s >= 8; r[n + b] = d & 255, b += O, d /= 256, s -= 8)
    ;
  for (v = v << s | d, l += s; l > 0; r[n + b] = v & 255, b += O, v /= 256, l -= 8)
    ;
  r[n + b - O] |= _ * 128;
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
  const { Uint8Array: c, ArrayBuffer: v, SharedArrayBuffer: d } = globalThis;
  a.TYPED_ARRAY_SUPPORT = m(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function m() {
    try {
      const g = new c(1), o = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(o, c.prototype), Object.setPrototypeOf(g, o), g.foo() === 42;
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
  function l(g) {
    if (g > s)
      throw new RangeError('The value "' + g + '" is invalid for option "size"');
    const o = new c(g);
    return Object.setPrototypeOf(o, a.prototype), o;
  }
  function a(g, o, u) {
    if (typeof g == "number") {
      if (typeof o == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return O(g);
    }
    return h(g, o, u);
  }
  a.poolSize = 8192;
  function h(g, o, u) {
    if (typeof g == "string")
      return _(g, o);
    if (v.isView(g))
      return D(g);
    if (g == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof g
      );
    if (qe(g, v) || g && qe(g.buffer, v) || typeof d < "u" && (qe(g, d) || g && qe(g.buffer, d)))
      return I(g, o, u);
    if (typeof g == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const T = g.valueOf && g.valueOf();
    if (T != null && T !== g)
      return a.from(T, o, u);
    const A = x(g);
    if (A)
      return A;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof g[Symbol.toPrimitive] == "function")
      return a.from(g[Symbol.toPrimitive]("string"), o, u);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof g
    );
  }
  a.from = function(g, o, u) {
    return h(g, o, u);
  }, Object.setPrototypeOf(a.prototype, c.prototype), Object.setPrototypeOf(a, c);
  function p(g) {
    if (typeof g != "number")
      throw new TypeError('"size" argument must be of type number');
    if (g < 0)
      throw new RangeError('The value "' + g + '" is invalid for option "size"');
  }
  function b(g, o, u) {
    return p(g), g <= 0 ? l(g) : o !== void 0 ? typeof u == "string" ? l(g).fill(o, u) : l(g).fill(o) : l(g);
  }
  a.alloc = function(g, o, u) {
    return b(g, o, u);
  };
  function O(g) {
    return p(g), l(g < 0 ? 0 : F(g) | 0);
  }
  a.allocUnsafe = function(g) {
    return O(g);
  }, a.allocUnsafeSlow = function(g) {
    return O(g);
  };
  function _(g, o) {
    if ((typeof o != "string" || o === "") && (o = "utf8"), !a.isEncoding(o))
      throw new TypeError("Unknown encoding: " + o);
    const u = z(g, o) | 0;
    let T = l(u);
    const A = T.write(g, o);
    return A !== u && (T = T.slice(0, A)), T;
  }
  function P(g) {
    const o = g.length < 0 ? 0 : F(g.length) | 0, u = l(o);
    for (let T = 0; T < o; T += 1)
      u[T] = g[T] & 255;
    return u;
  }
  function D(g) {
    if (qe(g, c)) {
      const o = new c(g);
      return I(o.buffer, o.byteOffset, o.byteLength);
    }
    return P(g);
  }
  function I(g, o, u) {
    if (o < 0 || g.byteLength < o)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (g.byteLength < o + (u || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let T;
    return o === void 0 && u === void 0 ? T = new c(g) : u === void 0 ? T = new c(g, o) : T = new c(g, o, u), Object.setPrototypeOf(T, a.prototype), T;
  }
  function x(g) {
    if (a.isBuffer(g)) {
      const o = F(g.length) | 0, u = l(o);
      return u.length === 0 || g.copy(u, 0, 0, o), u;
    }
    if (g.length !== void 0)
      return typeof g.length != "number" || E(g.length) ? l(0) : P(g);
    if (g.type === "Buffer" && Array.isArray(g.data))
      return P(g.data);
  }
  function F(g) {
    if (g >= s)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
    return g | 0;
  }
  function C(g) {
    return +g != g && (g = 0), a.alloc(+g);
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
    for (let M = 0, j = Math.min(T, A); M < j; ++M)
      if (o[M] !== u[M]) {
        T = o[M], A = u[M];
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
    let M = 0;
    for (T = 0; T < o.length; ++T) {
      let j = o[T];
      if (qe(j, c))
        M + j.length > A.length ? (a.isBuffer(j) || (j = a.from(j)), j.copy(A, M)) : c.prototype.set.call(
          A,
          j,
          M
        );
      else if (a.isBuffer(j))
        j.copy(A, M);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      M += j.length;
    }
    return A;
  };
  function z(g, o) {
    if (a.isBuffer(g))
      return g.length;
    if (v.isView(g) || qe(g, v))
      return g.byteLength;
    if (typeof g != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof g
      );
    const u = g.length, T = arguments.length > 2 && arguments[2] === !0;
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
          return pt(g).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return u * 2;
        case "hex":
          return u >>> 1;
        case "base64":
          return It(g).length;
        default:
          if (A)
            return T ? -1 : pt(g).length;
          o = ("" + o).toLowerCase(), A = !0;
      }
  }
  a.byteLength = z;
  function q(g, o, u) {
    let T = !1;
    if ((o === void 0 || o < 0) && (o = 0), o > this.length || ((u === void 0 || u > this.length) && (u = this.length), u <= 0) || (u >>>= 0, o >>>= 0, u <= o))
      return "";
    for (g || (g = "utf8"); ; )
      switch (g) {
        case "hex":
          return Ze(this, o, u);
        case "utf8":
        case "utf-8":
          return ce(this, o, u);
        case "ascii":
          return Me(this, o, u);
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
            throw new TypeError("Unknown encoding: " + g);
          g = (g + "").toLowerCase(), T = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function G(g, o, u) {
    const T = g[o];
    g[o] = g[u], g[u] = T;
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
  }, i && (a.prototype[i] = a.prototype.inspect), a.prototype.compare = function(o, u, T, A, M) {
    if (qe(o, c) && (o = a.from(o, o.offset, o.byteLength)), !a.isBuffer(o))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof o
      );
    if (u === void 0 && (u = 0), T === void 0 && (T = o ? o.length : 0), A === void 0 && (A = 0), M === void 0 && (M = this.length), u < 0 || T > o.length || A < 0 || M > this.length)
      throw new RangeError("out of range index");
    if (A >= M && u >= T)
      return 0;
    if (A >= M)
      return -1;
    if (u >= T)
      return 1;
    if (u >>>= 0, T >>>= 0, A >>>= 0, M >>>= 0, this === o)
      return 0;
    let j = M - A, te = T - u;
    const le = Math.min(j, te), ue = this.slice(A, M), fe = o.slice(u, T);
    for (let xe = 0; xe < le; ++xe)
      if (ue[xe] !== fe[xe]) {
        j = ue[xe], te = fe[xe];
        break;
      }
    return j < te ? -1 : te < j ? 1 : 0;
  };
  function X(g, o, u, T, A) {
    if (g.length === 0)
      return -1;
    if (typeof u == "string" ? (T = u, u = 0) : u > 2147483647 ? u = 2147483647 : u < -2147483648 && (u = -2147483648), u = +u, E(u) && (u = A ? 0 : g.length - 1), u < 0 && (u = g.length + u), u >= g.length) {
      if (A)
        return -1;
      u = g.length - 1;
    } else if (u < 0)
      if (A)
        u = 0;
      else
        return -1;
    if (typeof o == "string" && (o = a.from(o, T)), a.isBuffer(o))
      return o.length === 0 ? -1 : Z(g, o, u, T, A);
    if (typeof o == "number")
      return o = o & 255, typeof c.prototype.indexOf == "function" ? A ? c.prototype.indexOf.call(g, o, u) : c.prototype.lastIndexOf.call(g, o, u) : Z(g, [o], u, T, A);
    throw new TypeError("val must be string, number or Buffer");
  }
  function Z(g, o, u, T, A) {
    let M = 1, j = g.length, te = o.length;
    if (T !== void 0 && (T = String(T).toLowerCase(), T === "ucs2" || T === "ucs-2" || T === "utf16le" || T === "utf-16le")) {
      if (g.length < 2 || o.length < 2)
        return -1;
      M = 2, j /= 2, te /= 2, u /= 2;
    }
    function le(fe, xe) {
      return M === 1 ? fe[xe] : fe.readUInt16BE(xe * M);
    }
    let ue;
    if (A) {
      let fe = -1;
      for (ue = u; ue < j; ue++)
        if (le(g, ue) === le(o, fe === -1 ? 0 : ue - fe)) {
          if (fe === -1 && (fe = ue), ue - fe + 1 === te)
            return fe * M;
        } else
          fe !== -1 && (ue -= ue - fe), fe = -1;
    } else
      for (u + te > j && (u = j - te), ue = u; ue >= 0; ue--) {
        let fe = !0;
        for (let xe = 0; xe < te; xe++)
          if (le(g, ue + xe) !== le(o, xe)) {
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
  function H(g, o, u, T) {
    u = Number(u) || 0;
    const A = g.length - u;
    T ? (T = Number(T), T > A && (T = A)) : T = A;
    const M = o.length;
    T > M / 2 && (T = M / 2);
    let j;
    for (j = 0; j < T; ++j) {
      const te = parseInt(o.substr(j * 2, 2), 16);
      if (E(te))
        return j;
      g[u + j] = te;
    }
    return j;
  }
  function K(g, o, u, T) {
    return he(pt(o, g.length - u), g, u, T);
  }
  function V(g, o, u, T) {
    return he(Pt(o), g, u, T);
  }
  function re(g, o, u, T) {
    return he(It(o), g, u, T);
  }
  function pe(g, o, u, T) {
    return he($t(o, g.length - u), g, u, T);
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
    const M = this.length - u;
    if ((T === void 0 || T > M) && (T = M), o.length > 0 && (T < 0 || u < 0) || u > this.length)
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
  function Ae(g, o, u) {
    return o === 0 && u === g.length ? e.fromByteArray(g) : e.fromByteArray(g.slice(o, u));
  }
  function ce(g, o, u) {
    u = Math.min(g.length, u);
    const T = [];
    let A = o;
    for (; A < u; ) {
      const M = g[A];
      let j = null, te = M > 239 ? 4 : M > 223 ? 3 : M > 191 ? 2 : 1;
      if (A + te <= u) {
        let le, ue, fe, xe;
        switch (te) {
          case 1:
            M < 128 && (j = M);
            break;
          case 2:
            le = g[A + 1], (le & 192) === 128 && (xe = (M & 31) << 6 | le & 63, xe > 127 && (j = xe));
            break;
          case 3:
            le = g[A + 1], ue = g[A + 2], (le & 192) === 128 && (ue & 192) === 128 && (xe = (M & 15) << 12 | (le & 63) << 6 | ue & 63, xe > 2047 && (xe < 55296 || xe > 57343) && (j = xe));
            break;
          case 4:
            le = g[A + 1], ue = g[A + 2], fe = g[A + 3], (le & 192) === 128 && (ue & 192) === 128 && (fe & 192) === 128 && (xe = (M & 15) << 18 | (le & 63) << 12 | (ue & 63) << 6 | fe & 63, xe > 65535 && xe < 1114112 && (j = xe));
        }
      }
      j === null ? (j = 65533, te = 1) : j > 65535 && (j -= 65536, T.push(j >>> 10 & 1023 | 55296), j = 56320 | j & 1023), T.push(j), A += te;
    }
    return me(T);
  }
  const Ee = 4096;
  function me(g) {
    const o = g.length;
    if (o <= Ee)
      return String.fromCharCode.apply(String, g);
    let u = "", T = 0;
    for (; T < o; )
      u += String.fromCharCode.apply(
        String,
        g.slice(T, T += Ee)
      );
    return u;
  }
  function Me(g, o, u) {
    let T = "";
    u = Math.min(g.length, u);
    for (let A = o; A < u; ++A)
      T += String.fromCharCode(g[A] & 127);
    return T;
  }
  function $e(g, o, u) {
    let T = "";
    u = Math.min(g.length, u);
    for (let A = o; A < u; ++A)
      T += String.fromCharCode(g[A]);
    return T;
  }
  function Ze(g, o, u) {
    const T = g.length;
    (!o || o < 0) && (o = 0), (!u || u < 0 || u > T) && (u = T);
    let A = "";
    for (let M = o; M < u; ++M)
      A += $[g[M]];
    return A;
  }
  function Te(g, o, u) {
    const T = g.slice(o, u);
    let A = "";
    for (let M = 0; M < T.length - 1; M += 2)
      A += String.fromCharCode(T[M] + T[M + 1] * 256);
    return A;
  }
  a.prototype.slice = function(o, u) {
    const T = this.length;
    o = ~~o, u = u === void 0 ? T : ~~u, o < 0 ? (o += T, o < 0 && (o = 0)) : o > T && (o = T), u < 0 ? (u += T, u < 0 && (u = 0)) : u > T && (u = T), u < o && (u = o);
    const A = this.subarray(o, u);
    return Object.setPrototypeOf(A, a.prototype), A;
  };
  function _e(g, o, u) {
    if (g % 1 !== 0 || g < 0)
      throw new RangeError("offset is not uint");
    if (g + o > u)
      throw new RangeError("Trying to access beyond buffer length");
  }
  a.prototype.readUintLE = a.prototype.readUIntLE = function(o, u, T) {
    o = o >>> 0, u = u >>> 0, T || _e(o, u, this.length);
    let A = this[o], M = 1, j = 0;
    for (; ++j < u && (M *= 256); )
      A += this[o + j] * M;
    return A;
  }, a.prototype.readUintBE = a.prototype.readUIntBE = function(o, u, T) {
    o = o >>> 0, u = u >>> 0, T || _e(o, u, this.length);
    let A = this[o + --u], M = 1;
    for (; u > 0 && (M *= 256); )
      A += this[o + --u] * M;
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
    (u === void 0 || T === void 0) && Be(o, this.length - 8);
    const A = u + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24, M = this[++o] + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + T * 2 ** 24;
    return BigInt(A) + (BigInt(M) << BigInt(32));
  }), a.prototype.readBigUInt64BE = L(function(o) {
    o = o >>> 0, Ce(o, "offset");
    const u = this[o], T = this[o + 7];
    (u === void 0 || T === void 0) && Be(o, this.length - 8);
    const A = u * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + this[++o], M = this[++o] * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + T;
    return (BigInt(A) << BigInt(32)) + BigInt(M);
  }), a.prototype.readIntLE = function(o, u, T) {
    o = o >>> 0, u = u >>> 0, T || _e(o, u, this.length);
    let A = this[o], M = 1, j = 0;
    for (; ++j < u && (M *= 256); )
      A += this[o + j] * M;
    return M *= 128, A >= M && (A -= Math.pow(2, 8 * u)), A;
  }, a.prototype.readIntBE = function(o, u, T) {
    o = o >>> 0, u = u >>> 0, T || _e(o, u, this.length);
    let A = u, M = 1, j = this[o + --A];
    for (; A > 0 && (M *= 256); )
      j += this[o + --A] * M;
    return M *= 128, j >= M && (j -= Math.pow(2, 8 * u)), j;
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
    (u === void 0 || T === void 0) && Be(o, this.length - 8);
    const A = this[o + 4] + this[o + 5] * 2 ** 8 + this[o + 6] * 2 ** 16 + (T << 24);
    return (BigInt(A) << BigInt(32)) + BigInt(u + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24);
  }), a.prototype.readBigInt64BE = L(function(o) {
    o = o >>> 0, Ce(o, "offset");
    const u = this[o], T = this[o + 7];
    (u === void 0 || T === void 0) && Be(o, this.length - 8);
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
  function Ie(g, o, u, T, A, M) {
    if (!a.isBuffer(g))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (o > A || o < M)
      throw new RangeError('"value" argument is out of bounds');
    if (u + T > g.length)
      throw new RangeError("Index out of range");
  }
  a.prototype.writeUintLE = a.prototype.writeUIntLE = function(o, u, T, A) {
    if (o = +o, u = u >>> 0, T = T >>> 0, !A) {
      const te = Math.pow(2, 8 * T) - 1;
      Ie(this, o, u, T, te, 0);
    }
    let M = 1, j = 0;
    for (this[u] = o & 255; ++j < T && (M *= 256); )
      this[u + j] = o / M & 255;
    return u + T;
  }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(o, u, T, A) {
    if (o = +o, u = u >>> 0, T = T >>> 0, !A) {
      const te = Math.pow(2, 8 * T) - 1;
      Ie(this, o, u, T, te, 0);
    }
    let M = T - 1, j = 1;
    for (this[u + M] = o & 255; --M >= 0 && (j *= 256); )
      this[u + M] = o / j & 255;
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
  function Ot(g, o, u, T, A) {
    jt(o, T, A, g, u, 7);
    let M = Number(o & BigInt(4294967295));
    g[u++] = M, M = M >> 8, g[u++] = M, M = M >> 8, g[u++] = M, M = M >> 8, g[u++] = M;
    let j = Number(o >> BigInt(32) & BigInt(4294967295));
    return g[u++] = j, j = j >> 8, g[u++] = j, j = j >> 8, g[u++] = j, j = j >> 8, g[u++] = j, u;
  }
  function wt(g, o, u, T, A) {
    jt(o, T, A, g, u, 7);
    let M = Number(o & BigInt(4294967295));
    g[u + 7] = M, M = M >> 8, g[u + 6] = M, M = M >> 8, g[u + 5] = M, M = M >> 8, g[u + 4] = M;
    let j = Number(o >> BigInt(32) & BigInt(4294967295));
    return g[u + 3] = j, j = j >> 8, g[u + 2] = j, j = j >> 8, g[u + 1] = j, j = j >> 8, g[u] = j, u + 8;
  }
  a.prototype.writeBigUInt64LE = L(function(o, u = 0) {
    return Ot(this, o, u, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeBigUInt64BE = L(function(o, u = 0) {
    return wt(this, o, u, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeIntLE = function(o, u, T, A) {
    if (o = +o, u = u >>> 0, !A) {
      const le = Math.pow(2, 8 * T - 1);
      Ie(this, o, u, T, le - 1, -le);
    }
    let M = 0, j = 1, te = 0;
    for (this[u] = o & 255; ++M < T && (j *= 256); )
      o < 0 && te === 0 && this[u + M - 1] !== 0 && (te = 1), this[u + M] = (o / j >> 0) - te & 255;
    return u + T;
  }, a.prototype.writeIntBE = function(o, u, T, A) {
    if (o = +o, u = u >>> 0, !A) {
      const le = Math.pow(2, 8 * T - 1);
      Ie(this, o, u, T, le - 1, -le);
    }
    let M = T - 1, j = 1, te = 0;
    for (this[u + M] = o & 255; --M >= 0 && (j *= 256); )
      o < 0 && te === 0 && this[u + M + 1] !== 0 && (te = 1), this[u + M] = (o / j >> 0) - te & 255;
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
    return Ot(this, o, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), a.prototype.writeBigInt64BE = L(function(o, u = 0) {
    return wt(this, o, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Ue(g, o, u, T, A, M) {
    if (u + T > g.length)
      throw new RangeError("Index out of range");
    if (u < 0)
      throw new RangeError("Index out of range");
  }
  function Ht(g, o, u, T, A) {
    return o = +o, u = u >>> 0, A || Ue(g, o, u, 4), n.write(g, o, u, T, 23, 4), u + 4;
  }
  a.prototype.writeFloatLE = function(o, u, T) {
    return Ht(this, o, u, !0, T);
  }, a.prototype.writeFloatBE = function(o, u, T) {
    return Ht(this, o, u, !1, T);
  };
  function Re(g, o, u, T, A) {
    return o = +o, u = u >>> 0, A || Ue(g, o, u, 8), n.write(g, o, u, T, 52, 8), u + 8;
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
    const M = A - T;
    return this === o && typeof c.prototype.copyWithin == "function" ? this.copyWithin(u, T, A) : c.prototype.set.call(
      o,
      this.subarray(T, A),
      u
    ), M;
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
    let M;
    if (typeof o == "number")
      for (M = u; M < T; ++M)
        this[M] = o;
    else {
      const j = a.isBuffer(o) ? o : a.from(o, A), te = j.length;
      if (te === 0)
        throw new TypeError('The value "' + o + '" is invalid for argument "value"');
      for (M = 0; M < T - u; ++M)
        this[M + u] = j[M % te];
    }
    return this;
  };
  const Je = {};
  function Nt(g, o, u) {
    Je[g] = class extends u {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: o.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${g}]`, this.stack, delete this.name;
      }
      get code() {
        return g;
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
        return `${this.name} [${g}]: ${this.message}`;
      }
    };
  }
  Nt(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(g) {
      return g ? `${g} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Nt(
    "ERR_INVALID_ARG_TYPE",
    function(g, o) {
      return `The "${g}" argument must be of type number. Received type ${typeof o}`;
    },
    TypeError
  ), Nt(
    "ERR_OUT_OF_RANGE",
    function(g, o, u) {
      let T = `The value of "${g}" is out of range.`, A = u;
      return Number.isInteger(u) && Math.abs(u) > 2 ** 32 ? A = ut(String(u)) : typeof u == "bigint" && (A = String(u), (u > BigInt(2) ** BigInt(32) || u < -(BigInt(2) ** BigInt(32))) && (A = ut(A)), A += "n"), T += ` It must be ${o}. Received ${A}`, T;
    },
    RangeError
  );
  function ut(g) {
    let o = "", u = g.length;
    const T = g[0] === "-" ? 1 : 0;
    for (; u >= T + 4; u -= 3)
      o = `_${g.slice(u - 3, u)}${o}`;
    return `${g.slice(0, u)}${o}`;
  }
  function bt(g, o, u) {
    Ce(o, "offset"), (g[o] === void 0 || g[o + u] === void 0) && Be(o, g.length - (u + 1));
  }
  function jt(g, o, u, T, A, M) {
    if (g > u || g < o) {
      const j = typeof o == "bigint" ? "n" : "";
      let te;
      throw M > 3 ? o === 0 || o === BigInt(0) ? te = `>= 0${j} and < 2${j} ** ${(M + 1) * 8}${j}` : te = `>= -(2${j} ** ${(M + 1) * 8 - 1}${j}) and < 2 ** ${(M + 1) * 8 - 1}${j}` : te = `>= ${o}${j} and <= ${u}${j}`, new Je.ERR_OUT_OF_RANGE("value", te, g);
    }
    bt(T, A, M);
  }
  function Ce(g, o) {
    if (typeof g != "number")
      throw new Je.ERR_INVALID_ARG_TYPE(o, "number", g);
  }
  function Be(g, o, u) {
    throw Math.floor(g) !== g ? (Ce(g, u), new Je.ERR_OUT_OF_RANGE(u || "offset", "an integer", g)) : o < 0 ? new Je.ERR_BUFFER_OUT_OF_BOUNDS() : new Je.ERR_OUT_OF_RANGE(
      u || "offset",
      `>= ${u ? 1 : 0} and <= ${o}`,
      g
    );
  }
  const cr = /[^+/0-9A-Za-z-_]/g;
  function $r(g) {
    if (g = g.split("=")[0], g = g.trim().replace(cr, ""), g.length < 2)
      return "";
    for (; g.length % 4 !== 0; )
      g = g + "=";
    return g;
  }
  function pt(g, o) {
    o = o || 1 / 0;
    let u;
    const T = g.length;
    let A = null;
    const M = [];
    for (let j = 0; j < T; ++j) {
      if (u = g.charCodeAt(j), u > 55295 && u < 57344) {
        if (!A) {
          if (u > 56319) {
            (o -= 3) > -1 && M.push(239, 191, 189);
            continue;
          } else if (j + 1 === T) {
            (o -= 3) > -1 && M.push(239, 191, 189);
            continue;
          }
          A = u;
          continue;
        }
        if (u < 56320) {
          (o -= 3) > -1 && M.push(239, 191, 189), A = u;
          continue;
        }
        u = (A - 55296 << 10 | u - 56320) + 65536;
      } else
        A && (o -= 3) > -1 && M.push(239, 191, 189);
      if (A = null, u < 128) {
        if ((o -= 1) < 0)
          break;
        M.push(u);
      } else if (u < 2048) {
        if ((o -= 2) < 0)
          break;
        M.push(
          u >> 6 | 192,
          u & 63 | 128
        );
      } else if (u < 65536) {
        if ((o -= 3) < 0)
          break;
        M.push(
          u >> 12 | 224,
          u >> 6 & 63 | 128,
          u & 63 | 128
        );
      } else if (u < 1114112) {
        if ((o -= 4) < 0)
          break;
        M.push(
          u >> 18 | 240,
          u >> 12 & 63 | 128,
          u >> 6 & 63 | 128,
          u & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return M;
  }
  function Pt(g) {
    const o = [];
    for (let u = 0; u < g.length; ++u)
      o.push(g.charCodeAt(u) & 255);
    return o;
  }
  function $t(g, o) {
    let u, T, A;
    const M = [];
    for (let j = 0; j < g.length && !((o -= 2) < 0); ++j)
      u = g.charCodeAt(j), T = u >> 8, A = u % 256, M.push(A), M.push(T);
    return M;
  }
  function It(g) {
    return e.toByteArray($r(g));
  }
  function he(g, o, u, T) {
    let A;
    for (A = 0; A < T && !(A + u >= o.length || A >= g.length); ++A)
      o[A + u] = g[A];
    return A;
  }
  function qe(g, o) {
    return g instanceof o || g != null && g.constructor != null && g.constructor.name != null && g.constructor.name === o.name;
  }
  function E(g) {
    return g !== g;
  }
  const $ = function() {
    const g = "0123456789abcdef", o = new Array(256);
    for (let u = 0; u < 16; ++u) {
      const T = u * 16;
      for (let A = 0; A < 16; ++A)
        o[T + A] = g[u] + g[A];
    }
    return o;
  }();
  function L(g) {
    return typeof BigInt > "u" ? k : g;
  }
  function k() {
    throw new Error("BigInt not supported");
  }
})(bp);
const kS = bp.Buffer, Ct = 100 * 1e3 * 1e3, DS = 32768, US = 9783072e5;
class BS {
  constructor(e) {
    console.info({ id: e });
  }
}
class jS {
  constructor() {
    this.debug = !1;
  }
  parse64Content(e) {
    const n = window.atob(e), i = n.length, s = new kS(i);
    for (let c = 0; c < i; c++)
      s[c] = n.charCodeAt(c);
    return this.parseBuffer(s);
  }
  parseBuffer(e) {
    if (e.toString("utf8", 0, 6) !== "bplist")
      throw new Error("Invalid binary plist. Expected 'bplist' at offset 0.");
    const s = e.slice(e.length - 32, e.length), c = s.readUInt8(6);
    this.debug && console.log("offsetSize: " + c);
    const v = s.readUInt8(7);
    this.debug && console.log("objectRefSize: " + v);
    const d = this.readUInt64BE(s, 8);
    this.debug && console.log("numObjects: " + d);
    const m = this.readUInt64BE(s, 16);
    this.debug && console.log("topObject: " + m);
    const l = this.readUInt64BE(s, 24);
    if (this.debug && console.log("offsetTableOffset: " + l), d > DS)
      throw new Error("maxObjectCount exceeded");
    const a = [];
    for (let p = 0; p < d; p++) {
      const b = e.slice(l + p * c, l + (p + 1) * c);
      a[p] = this.readUInt(b, 0), this.debug;
    }
    const h = (p) => {
      const b = a[p], O = e[b], _ = (O & 240) >> 4, P = O & 15, D = () => {
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
          const K = e.slice(b + 1, b + 1 + H), V = I(K);
          return _S(V, 16);
        }
        if (H < Ct)
          return this.readUInt(e.slice(b + 1, b + 1 + H));
        throw new Error(
          "Too little heap space available! Wanted to read " + H + " bytes, but only " + Ct + " are available."
        );
      }, F = () => {
        const H = P + 1;
        if (H < Ct)
          return new BS(this.readUInt(e.slice(b + 1, b + 1 + H)));
        throw new Error(
          "To little heap space available! Wanted to read " + H + " bytes, but only " + Ct + " are available."
        );
      }, C = () => {
        const H = Math.pow(2, P);
        if (H < Ct) {
          const K = e.slice(b + 1, b + 1 + H);
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
        const H = e.slice(b + 1, b + 9);
        return new Date(US + 1e3 * H.readDoubleBE(0));
      }, q = () => {
        let H = 1, K = P;
        if (P === 15) {
          const V = e[b + 1], re = (V & 240) / 16;
          re !== 1 && console.error("0x4: UNEXPECTED LENGTH-INT TYPE! " + re);
          const pe = V & 15, Ae = Math.pow(2, pe);
          H = 2 + Ae, Ae < 3 ? K = this.readUInt(e.slice(b + 2, b + 2 + Ae)) : K = this.readUInt(e.slice(b + 2, b + 2 + Ae));
        }
        if (K < Ct)
          return e.slice(b + H, b + H + K);
        throw new Error(
          "To little heap space available! Wanted to read " + K + " bytes, but only " + Ct + " are available."
        );
      }, G = (H) => {
        H = H || 0;
        let K = "utf8", V = P, re = 1;
        if (P === 15) {
          const pe = e[b + 1], Ae = (pe & 240) / 16;
          Ae !== 1 && console.error("UNEXPECTED LENGTH-INT TYPE! " + Ae);
          const ce = pe & 15, Ee = Math.pow(2, ce);
          re = 2 + Ee, Ee < 3 ? V = this.readUInt(e.slice(b + 2, b + 2 + Ee)) : V = this.readUInt(e.slice(b + 2, b + 2 + Ee));
        }
        if (V *= H + 1, V < Ct) {
          let pe = e.toString("utf8", b + re, b + re + V);
          return H && (pe = this.swapBytes(pe), K = "ucs2"), pe.toString(K);
        } else
          throw new Error(
            "To little heap space available! Wanted to read " + V + " bytes, but only " + Ct + " are available."
          );
      }, X = () => {
        let H = P, K = 1;
        if (P === 15) {
          const re = e[b + 1], pe = (re & 240) / 16;
          pe !== 1 && console.error("0xa: UNEXPECTED LENGTH-INT TYPE! " + pe);
          const Ae = re & 15, ce = Math.pow(2, Ae);
          K = 2 + ce, ce < 3 ? H = this.readUInt(e.slice(b + 2, b + 2 + ce)) : H = this.readUInt(e.slice(b + 2, b + 2 + ce));
        }
        if (H * v > Ct)
          throw new Error("To little heap space available!");
        const V = [];
        for (let re = 0; re < H; re++) {
          const pe = this.readUInt(
            e.slice(b + K + re * v, b + K + (re + 1) * v)
          );
          V[re] = h(pe);
        }
        return V;
      }, Z = () => {
        let H = P, K = 1;
        if (P === 15) {
          const re = e[b + 1], pe = (re & 240) / 16;
          pe !== 1 && console.error("0xD: UNEXPECTED LENGTH-INT TYPE! " + pe);
          const Ae = re & 15, ce = Math.pow(2, Ae);
          K = 2 + ce, ce < 3 ? H = this.readUInt(e.slice(b + 2, b + 2 + ce)) : H = this.readUInt(e.slice(b + 2, b + 2 + ce));
        }
        if (H * 2 * v > Ct)
          throw new Error("To little heap space available!");
        this.debug && console.log("Parsing dictionary #" + p);
        const V = {};
        for (let re = 0; re < H; re++) {
          const pe = this.readUInt(
            e.slice(b + K + re * v, b + K + (re + 1) * v)
          ), Ae = this.readUInt(
            e.slice(
              b + K + H * v + re * v,
              b + K + H * v + (re + 1) * v
            )
          ), ce = h(pe), Ee = h(Ae);
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
    return [h(m)];
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
const GS = new jS(), tr = {
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
    let c = "", v = !1;
    if (e) {
      const d = new window.DOMParser(), m = Ql(e), l = d.parseFromString(m, "text/xml"), a = [...l.getElementsByTagName("dict"), ...l.getElementsByTagName("extra")];
      let h = !1, p = !1;
      if (a && a.length)
        for (const O of a) {
          const _ = O.getElementsByTagName("key"), P = O.getElementsByTagName("string");
          Wt(_) === "URL" && (la(P, gt(n)), v = !0), Wt(_) === wr.sameWindow && Wt(P) === "_self" && (i ? la(P, "_self") : l.getElementsByTagName("plist")[0].removeChild(O), p = !0), Wt(_) === wr.skipConfirmation && Wt(P) === "1" && (s ? la(P, "1") : l.getElementsByTagName("plist")[0].removeChild(O), h = !0);
        }
      if (i && !p) {
        const O = Jl(l, wr.sameWindow, "_self");
        l.getElementsByTagName("plist")[0].appendChild(O);
      }
      if (s && !h) {
        const O = Jl(l, wr.skipConfirmation, "1");
        l.getElementsByTagName("plist")[0].appendChild(O);
      }
      c = `<?xml version="1.0" encoding="UTF-8"?>
			${new window.XMLSerializer().serializeToString(l)}`, c.indexOf("parsererror") > -1 && (console.error("Parse error", c), c = ""), c = WS(c);
    }
    return (!c || !v) && (c = `<?xml version="1.0" encoding="UTF-8"?>
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
			</plist>`), c = VS(c), c = c.replace(/(\n|\b)\t+/g, "$1").trim(), c = c.replace(/^\s*$(?:\r\n?|\n)/gm, "").trim(), c;
  }
  /**
   * Parse a webloc file.
   */
  static parseWeblocFile(e) {
    const n = { ...Zl };
    if (e)
      if (e.substring(0, 6) === "bplist")
        try {
          const i = GS.parse64Content(window.btoa(e));
          i && i.length && i[0] && i[0].URL && (n.url = i[0].URL);
        } catch (i) {
          console.info(i);
        }
      else {
        const i = new window.DOMParser(), s = Ql(e), c = i.parseFromString(s, "text/xml"), v = [...c.getElementsByTagName("dict"), ...c.getElementsByTagName("extra")];
        if (v && v.length)
          for (const d of v) {
            const m = d.getElementsByTagName("key"), l = d.getElementsByTagName("string");
            Wt(m) === "URL" && (n.url = gt(Wt(l))), Wt(m) === wr.sameWindow && Wt(l) === "_self" && (n.sameWindow = !0), Wt(m) === wr.skipConfirmation && Wt(l) === "1" && (n.skipConfirmation = !0);
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
}, WS = (r) => r.replace(/></g, `>
<`), VS = (r) => r.replace(/<extra>/g, "<!-- <extra>").replace(/<\/extra>/g, "</extra> -->"), Ql = (r) => r.replace(/<!-- <extra>/g, "<extra>").replace(/<\/extra> -->/g, "</extra>");
function qS(r) {
  let e, n, i, s, c = (
    /*t*/
    r[1]("files_linkeditor", "View link") + ""
  ), v, d, m;
  return {
    c() {
      e = Fe("div"), n = Fe("a"), i = Fe("span"), s = nt(), v = Tt(c), ve(i, "class", "icon icon-link"), ve(n, "href", "#/"), ve(n, "class", "button"), ve(n, "id", "downloadFile"), ve(e, "class", "directDownload");
    },
    m(l, a) {
      We(l, e, a), Ne(e, n), Ne(n, i), Ne(n, s), Ne(n, v), d || (m = gr(n, "click", ln(function() {
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
      l && Ge(e), d = !1, m();
    }
  };
}
function zS(r, e, n) {
  let { onClick: i } = e;
  const s = window.t;
  return r.$$set = (c) => {
    "onClick" in c && n(0, i = c.onClick);
  }, [i, s];
}
class HS extends zn {
  constructor(e) {
    super(), qn(this, e, zS, qS, vn, { onClick: 0 });
  }
}
const Ai = "application/internet-shortcut", XS = [];
class br {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    var i, s, c, v, d, m, l, a;
    (s = (i = window.OCA.Files) == null ? void 0 : i.fileActions) == null || s.registerAction({
      name: "editLink",
      displayName: t("files_linkeditor", "Edit link"),
      mime: Ai,
      actionHandler: async (h, p) => await br.loadAndChangeViewMode({ fileName: h, context: p, nextViewMode: "edit" }),
      permissions: window.OC.currentUser && window.OC.PERMISSION_UPDATE,
      iconClass: "icon-link"
    }), (v = (c = window.OCA.Files) == null ? void 0 : c.fileActions) == null || v.registerAction({
      name: "viewLink",
      displayName: t("files_linkeditor", "View link"),
      mime: Ai,
      actionHandler: async (h, p) => {
        window.OC.currentUser ? await br.loadAndChangeViewMode({ fileName: h, context: p, nextViewMode: "view" }) : await br.loadAndChangeViewMode({
          fileName: h,
          context: p,
          nextViewMode: "view",
          downloadUrl: p.fileList.getDownloadUrl(h),
          publicUser: !0
        });
      },
      permissions: window.OC.PERMISSION_READ,
      iconClass: "icon-link"
    }), (m = (d = window.OCA.Files) == null ? void 0 : d.fileActions) == null || m.setDefault(Ai, "viewLink"), (a = (l = window.OC.Plugins) == null ? void 0 : l.register) == null || a.call(l, "OCA.Files.NewFileMenu", {
      attach: function(h) {
        const p = h.fileList;
        if (p.id !== "files")
          return;
        const b = ({ id: O, displayName: _, templateName: P }) => {
          h.addMenuEntry({
            id: O,
            displayName: _,
            templateName: P,
            iconClass: "icon-link",
            fileType: Ai,
            actionHandler: function(D) {
              const I = p.getCurrentDirectory();
              sr.update(() => "edit"), Rr.update(
                () => Ft.getFileConfig({
                  name: D,
                  dir: I,
                  isNew: !0,
                  onCreate: async (x) => {
                    await p.createFile(D, {
                      scrollTo: !1
                    });
                    const F = await Ft.load({ fileName: D, dir: I });
                    await br.saveAndChangeViewMode({ ...x, fileModifiedTime: F.mtime });
                  }
                })
              );
            }
          });
        };
        b({
          id: "application-internet-shortcut",
          displayName: `${window.t("files_linkeditor", "New link")} (.URL)`,
          // TRANSLATORS default filename when creating a new link file from the files list, keep .URL at the end
          templateName: window.t("files_linkeditor", "Link.URL")
        }), b({
          id: "application-internet-shortcut-webloc",
          displayName: `${window.t("files_linkeditor", "New link")} (.webloc)`,
          // TRANSLATORS default filename when creating a new link file from the files list, keep .webloc at the end
          templateName: window.t("files_linkeditor", "Link.webloc")
        });
      }
    });
    const e = document.querySelectorAll(".directDownload");
    if (e && e.length > 0) {
      const h = (document.querySelector("input#filename") || { value: "" }).value;
      var n = _t.getExtension(h);
      if (n === "url" || n === "webloc") {
        const p = (document.querySelector("input#downloadURL") || { value: "" }).value;
        XS.push(
          new HS({
            anchor: document.querySelector(".directDownload"),
            target: document.querySelector(".directDownload").parentElement,
            props: {
              onClick: () => {
                br.loadAndChangeViewMode({
                  fileName: h,
                  nextViewMode: "view",
                  publicUser: !0,
                  downloadUrl: p
                });
              }
            }
          })
        );
      }
    }
  }
  static async loadAndChangeViewMode({ fileName: e, context: n, nextViewMode: i, publicUser: s, downloadUrl: c }) {
    const v = n ? encodeURI(n.fileList.linkTo() + "?path=" + n.dir) : window.location.href;
    sr.update(() => i), Rr.update(
      () => Ft.getFileConfig({
        name: e,
        currentUrl: v,
        dir: n ? n.dir : ""
      })
    );
    let d = {};
    if (s ? d = await Ft.loadPublic({ downloadUrl: c }) : d = await Ft.load({ fileName: e, dir: n.dir }), d) {
      const m = _t.getExtension(e);
      let l = {};
      m === "webloc" ? l = _t.parseWeblocFile(d.filecontents) : l = _t.parseURLFile(d.filecontents), Rr.update(
        (a) => Ft.getFileConfig({ ...a, ...l, fileModifiedTime: d.mtime, isLoaded: !0 })
      );
    } else
      window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async saveAndChangeViewMode({ name: e, dir: n, url: i, fileModifiedTime: s, sameWindow: c, skipConfirmation: v }) {
    const d = _t.getExtension(e);
    let m = "";
    d === "webloc" ? m = _t.generateWeblocFileContent("", i, c, v) : m = _t.generateURLFileContent("", i, c, v), await Ft.save({ fileContent: m, name: e, dir: n, fileModifiedTime: s }), sr.update(() => "none");
  }
}
function ec(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "Link target URL") + ""
  ), i, s, c, v, d, m, l, a, h, p, b, O, _, P, D, I;
  return {
    c() {
      e = Fe("label"), i = Tt(n), s = nt(), c = Fe("br"), v = nt(), d = Fe("input"), m = nt(), l = Fe("input"), a = nt(), h = Fe("label"), h.textContent = `${/*t*/
      r[2]("files_linkeditor", "Open in same window")}`, p = nt(), b = Fe("input"), _ = nt(), P = Fe("label"), P.textContent = `${/*t*/
      r[2]("files_linkeditor", "Skip confirmation dialog before open (has to open in same window)")}`, ve(d, "type", "text"), cc(d, "width", "100%"), ve(d, "class", "input-wide"), d.autofocus = !0, ve(d, "data-cy", "url-input"), ve(
        d,
        "placeholder",
        /*t*/
        r[2]("files_linkeditor", "e.g. https://example.org")
      ), ve(l, "type", "checkbox"), ve(l, "id", "linkeditor_sameWindow"), ve(l, "class", "checkbox"), ve(h, "for", "linkeditor_sameWindow"), ve(h, "class", "space-top"), ve(b, "type", "checkbox"), b.disabled = O = !/*file*/
      r[0].sameWindow, ve(b, "id", "linkeditor_skipConfirmation"), ve(b, "class", "checkbox"), ve(P, "for", "linkeditor_skipConfirmation");
    },
    m(x, F) {
      We(x, e, F), Ne(e, i), Ne(e, s), Ne(e, c), Ne(e, v), Ne(e, d), ks(
        d,
        /*file*/
        r[0].url
      ), We(x, m, F), We(x, l, F), l.checked = /*file*/
      r[0].sameWindow, We(x, a, F), We(x, h, F), We(x, p, F), We(x, b, F), b.checked = /*file*/
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
          b,
          "change",
          /*input2_change_handler*/
          r[7]
        )
      ], D = !0);
    },
    p(x, F) {
      F & /*file*/
      1 && d.value !== /*file*/
      x[0].url && ks(
        d,
        /*file*/
        x[0].url
      ), F & /*file*/
      1 && (l.checked = /*file*/
      x[0].sameWindow), F & /*file*/
      1 && O !== (O = !/*file*/
      x[0].sameWindow) && (b.disabled = O), F & /*file*/
      1 && (b.checked = /*file*/
      x[0].skipConfirmation);
    },
    d(x) {
      x && (Ge(e), Ge(m), Ge(l), Ge(a), Ge(h), Ge(p), Ge(b), Ge(_), Ge(P)), D = !1, Mr(I);
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
    m(c, v) {
      We(c, e, v), Ne(e, i);
    },
    p(c, v) {
      v & /*file*/
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
    m(v, d) {
      We(v, e, d), Ne(e, i), s || (c = gr(e, "click", ln(
        /*save*/
        r[4]
      )), s = !0);
    },
    p: ar,
    d(v) {
      v && Ge(e), s = !1, c();
    }
  };
}
function YS(r) {
  let e, n, i, s = (
    /*file*/
    r[0].name + ""
  ), c, v, d, m, l, a, h, p = (
    /*t*/
    r[2]("files_linkeditor", "Cancel") + ""
  ), b, O, _, P, D = !/*loading*/
  r[1] && ec(r), I = !/*loading*/
  r[1] && tc(r), x = !/*loading*/
  r[1] && rc(r);
  return {
    c() {
      e = Fe("form"), n = Fe("div"), i = Fe("h3"), c = Tt(s), v = nt(), D && D.c(), d = nt(), m = Fe("div"), I && I.c(), l = nt(), a = Fe("div"), h = Fe("a"), b = Tt(p), O = nt(), x && x.c(), ve(n, "class", "urledit"), ve(m, "class", "oc-dialog-buttonrow onebutton urlvisit"), ve(h, "href", window.location.href), ve(h, "class", "cancel button"), ve(a, "class", "oc-dialog-buttonrow twobuttons"), ve(
        e,
        "action",
        /*OC*/
        r[3].generateUrl("/")
      ), ve(e, "method", "post");
    },
    m(F, C) {
      We(F, e, C), Ne(e, n), Ne(n, i), Ne(i, c), Ne(n, v), D && D.m(n, null), Ne(e, d), Ne(e, m), I && I.m(m, null), Ne(e, l), Ne(e, a), Ne(a, h), Ne(h, b), Ne(a, O), x && x.m(a, null), _ || (P = [
        gr(h, "click", ln(
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
      F[1] ? I && (I.d(1), I = null) : I ? I.p(F, C) : (I = tc(F), I.c(), I.m(m, null)), /*loading*/
      F[1] ? x && (x.d(1), x = null) : x ? x.p(F, C) : (x = rc(F), x.c(), x.m(a, null));
    },
    d(F) {
      F && Ge(e), D && D.d(), I && I.d(), x && x.d(), _ = !1, Mr(P);
    }
  };
}
function KS(r) {
  let e, n;
  return e = new hc({
    props: {
      loading: (
        /*loading*/
        r[1]
      ),
      $$slots: { default: [YS] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      Bi(e.$$.fragment);
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
      n || (Mt(e.$$.fragment, i), n = !0);
    },
    o(i) {
      hr(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Vn(e, i);
    }
  };
}
function ZS(r, e, n) {
  let i, s;
  const c = window.t, v = window.OC;
  let d;
  Va(() => {
    d = Rr.subscribe((b) => {
      n(0, i = b), i && (i.isLoaded || i.isNew) && n(1, s = !1);
    });
  }), qa(() => {
    d();
  });
  const m = () => {
    n(1, s = !0), i.isNew && i.onCreate ? i.onCreate({ ...i }) : br.saveAndChangeViewMode({ ...i });
  };
  function l() {
    i.url = this.value, n(0, i);
  }
  function a() {
    i.sameWindow = this.checked, n(0, i);
  }
  function h() {
    i.skipConfirmation = this.checked, n(0, i);
  }
  const p = () => {
    sr.update(() => "none");
  };
  return n(0, i = Ft.getFileConfig()), n(1, s = !0), [
    i,
    s,
    c,
    v,
    m,
    l,
    a,
    h,
    p
  ];
}
class JS extends zn {
  constructor(e) {
    super(), qn(this, e, ZS, KS, vn, {});
  }
}
function nc(r) {
  let e, n;
  return e = new IS({}), {
    c() {
      Bi(e.$$.fragment);
    },
    m(i, s) {
      Wn(e, i, s), n = !0;
    },
    i(i) {
      n || (Mt(e.$$.fragment, i), n = !0);
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
  return e = new JS({}), {
    c() {
      Bi(e.$$.fragment);
    },
    m(i, s) {
      Wn(e, i, s), n = !0;
    },
    i(i) {
      n || (Mt(e.$$.fragment, i), n = !0);
    },
    o(i) {
      hr(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Vn(e, i);
    }
  };
}
function QS(r) {
  let e, n, i, s = (
    /*viewMode*/
    r[0] === "view" && nc()
  ), c = (
    /*viewMode*/
    r[0] === "edit" && ic()
  );
  return {
    c() {
      s && s.c(), e = nt(), c && c.c(), n = Qp();
    },
    m(v, d) {
      s && s.m(v, d), We(v, e, d), c && c.m(v, d), We(v, n, d), i = !0;
    },
    p(v, [d]) {
      /*viewMode*/
      v[0] === "view" ? s ? d & /*viewMode*/
      1 && Mt(s, 1) : (s = nc(), s.c(), Mt(s, 1), s.m(e.parentNode, e)) : s && (Bs(), hr(s, 1, 1, () => {
        s = null;
      }), js()), /*viewMode*/
      v[0] === "edit" ? c ? d & /*viewMode*/
      1 && Mt(c, 1) : (c = ic(), c.c(), Mt(c, 1), c.m(n.parentNode, n)) : c && (Bs(), hr(c, 1, 1, () => {
        c = null;
      }), js());
    },
    i(v) {
      i || (Mt(s), Mt(c), i = !0);
    },
    o(v) {
      hr(s), hr(c), i = !1;
    },
    d(v) {
      v && (Ge(e), Ge(n)), s && s.d(v), c && c.d(v);
    }
  };
}
function eO(r, e, n) {
  let i, s;
  return Va(() => {
    s = sr.subscribe((c) => {
      n(0, i = c);
    });
  }), qa(() => {
    s();
  }), n(0, i = ""), [i];
}
class tO extends zn {
  constructor(e) {
    super(), qn(this, e, eO, QS, vn, {});
  }
}
class Cn {
  static getFileConfig({
    name: e,
    url: n,
    downloadUrl: i,
    dir: s,
    onCreate: c,
    fileModifiedTime: v,
    isNew: d,
    isLoaded: m,
    sameWindow: l,
    skipConfirmation: a,
    permissions: h
  } = {}) {
    return {
      name: e || "?",
      downloadUrl: i || "",
      url: n ? gt(n) : "",
      dir: s || "",
      onCreate: c,
      fileModifiedTime: v || null,
      isNew: d || !1,
      isLoaded: m || !1,
      sameWindow: l || !1,
      skipConfirmation: a || !1,
      permissions: h || gn.NONE
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
    const v = await window.fetch(window.OC.generateUrl("/apps/files_linkeditor/ajax/savefile"), {
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
    if (v && v.ok)
      return !0;
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
}
const oc = "application/internet-shortcut", ac = () => '<span class="icon-link"></span>';
class Dn {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    Hl({
      id: "editLink",
      displayName: () => t("files_linkeditor", "Edit link"),
      iconSvgInline: ac,
      exec: async (e) => {
        await Dn.loadAndChangeViewMode({
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
      iconSvgInline: ac,
      exec: async (e) => {
        window.OC.currentUser ? await Dn.loadAndChangeViewMode({
          fileName: e.basename,
          dirName: e.dirname,
          nextViewMode: "view",
          permissions: e.permissions
        }) : await Dn.loadAndChangeViewMode({
          fileName: e.basename,
          dirName: e.dirname,
          nextViewMode: "view",
          // TODO:
          downloadUrl: e.source,
          publicUser: !0,
          permissions: e.permissions
        });
      },
      enabled: (e) => e.every((n) => n.permissions >= gn.READ && oc.includes(n.mime)),
      default: () => mp.DEFAULT
    });
  }
  static async loadAndChangeViewMode({ fileName: e, dirName: n, nextViewMode: i, publicUser: s, downloadUrl: c, permissions: v }) {
    sr.update(() => i), Rr.update(
      () => Cn.getFileConfig({
        name: e,
        dir: n || "",
        permissions: v
      })
    );
    let d = {};
    if (s ? d = await Cn.loadPublic({ downloadUrl: c }) : d = await Cn.load({ fileName: e, dir: n }), d) {
      const m = _t.getExtension(e);
      let l = {};
      m === "webloc" ? l = _t.parseWeblocFile(d.filecontents) : l = _t.parseURLFile(d.filecontents), Rr.update(
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
  static async saveAndChangeViewMode({ name: e, dir: n, url: i, fileModifiedTime: s, sameWindow: c, skipConfirmation: v }) {
    const d = _t.getExtension(e);
    let m = "";
    d === "webloc" ? m = _t.generateWeblocFileContent("", i, c, v) : m = _t.generateURLFileContent("", i, c, v), await Cn.save({ fileContent: m, name: e, dir: n, fileModifiedTime: s }), sr.update(() => "none");
  }
}
const rO = [];
rO.push(
  new tO({
    target: document.body,
    props: {}
  })
);
br.registerFileActions();
Dn.registerFileActions();
