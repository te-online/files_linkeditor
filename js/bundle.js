var ah = Object.defineProperty;
var sh = (r, e, n) => e in r ? ah(r, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[e] = n;
var yr = (r, e, n) => (sh(r, typeof e != "symbol" ? e + "" : e, n), n);
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
    return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
    i(s);
  new MutationObserver((s) => {
    for (const c of s)
      if (c.type === "childList")
        for (const h of c.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && i(h);
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
function dr() {
}
function uh(r, e) {
  for (const n in e)
    r[n] = e[n];
  return (
    /** @type {T & S} */
    r
  );
}
function wc(r) {
  return r();
}
function zs() {
  return /* @__PURE__ */ Object.create(null);
}
function $r(r) {
  r.forEach(wc);
}
function Ja(r) {
  return typeof r == "function";
}
function Vr(r, e) {
  return r != r ? e == e : r !== e || r && typeof r == "object" || typeof r == "function";
}
function lh(r) {
  return Object.keys(r).length === 0;
}
function ch(r, e, n, i) {
  if (r) {
    const s = bc(r, e, n, i);
    return r[0](s);
  }
}
function bc(r, e, n, i) {
  return r[1] && i ? uh(n.ctx.slice(), r[1](i(e))) : n.ctx;
}
function fh(r, e, n, i) {
  if (r[2] && i) {
    const s = r[2](i(n));
    if (e.dirty === void 0)
      return s;
    if (typeof s == "object") {
      const c = [], h = Math.max(e.dirty.length, s.length);
      for (let f = 0; f < h; f += 1)
        c[f] = e.dirty[f] | s[f];
      return c;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function ph(r, e, n, i, s, c) {
  if (s) {
    const h = bc(e, n, i, c);
    r.p(h, s);
  }
}
function hh(r) {
  if (r.ctx.length > 32) {
    const e = [], n = r.ctx.length / 32;
    for (let i = 0; i < n; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
const hi = globalThis || void 0 || self;
function ve(r, e) {
  r.appendChild(e);
}
function Me(r, e, n) {
  r.insertBefore(e, n || null);
}
function ke(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function _e(r) {
  return document.createElement(r);
}
function ct(r) {
  return document.createTextNode(r);
}
function qe() {
  return ct(" ");
}
function dh() {
  return ct("");
}
function _t(r, e, n, i) {
  return r.addEventListener(e, n, i), () => r.removeEventListener(e, n, i);
}
function Er(r) {
  return function(e) {
    return e.preventDefault(), r.call(this, e);
  };
}
function ue(r, e, n) {
  n == null ? r.removeAttribute(e) : r.getAttribute(e) !== n && r.setAttribute(e, n);
}
function gh(r) {
  return Array.from(r.childNodes);
}
function Qa(r, e) {
  e = "" + e, r.data !== e && (r.data = /** @type {string} */
  e);
}
function Ui(r, e) {
  r.value = e ?? "";
}
function es(r, e, n, i) {
  n == null ? r.style.removeProperty(e) : r.style.setProperty(e, n, i ? "important" : "");
}
let Hn;
function zn(r) {
  Hn = r;
}
function Ec() {
  if (!Hn)
    throw new Error("Function called outside component initialization");
  return Hn;
}
function zi(r) {
  Ec().$$.on_mount.push(r);
}
function Hi(r) {
  Ec().$$.on_destroy.push(r);
}
const dn = [], Hs = [];
let yn = [];
const Xs = [], mh = /* @__PURE__ */ Promise.resolve();
let ba = !1;
function vh() {
  ba || (ba = !0, mh.then(Tc));
}
function Ea(r) {
  yn.push(r);
}
const Io = /* @__PURE__ */ new Set();
let nn = 0;
function Tc() {
  if (nn !== 0)
    return;
  const r = Hn;
  do {
    try {
      for (; nn < dn.length; ) {
        const e = dn[nn];
        nn++, zn(e), yh(e.$$);
      }
    } catch (e) {
      throw dn.length = 0, nn = 0, e;
    }
    for (zn(null), dn.length = 0, nn = 0; Hs.length; )
      Hs.pop()();
    for (let e = 0; e < yn.length; e += 1) {
      const n = yn[e];
      Io.has(n) || (Io.add(n), n());
    }
    yn.length = 0;
  } while (dn.length);
  for (; Xs.length; )
    Xs.pop()();
  ba = !1, Io.clear(), zn(r);
}
function yh(r) {
  if (r.fragment !== null) {
    r.update(), $r(r.before_update);
    const e = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, e), r.after_update.forEach(Ea);
  }
}
function wh(r) {
  const e = [], n = [];
  yn.forEach((i) => r.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), yn = e;
}
const Pi = /* @__PURE__ */ new Set();
let Ur;
function Ao() {
  Ur = {
    r: 0,
    c: [],
    p: Ur
    // parent group
  };
}
function xo() {
  Ur.r || $r(Ur.c), Ur = Ur.p;
}
function ut(r, e) {
  r && r.i && (Pi.delete(r), r.i(e));
}
function Lt(r, e, n, i) {
  if (r && r.o) {
    if (Pi.has(r))
      return;
    Pi.add(r), Ur.c.push(() => {
      Pi.delete(r), i && (n && r.d(1), i());
    }), r.o(e);
  } else
    i && i();
}
function In(r) {
  r && r.c();
}
function qr(r, e, n) {
  const { fragment: i, after_update: s } = r.$$;
  i && i.m(e, n), Ea(() => {
    const c = r.$$.on_mount.map(wc).filter(Ja);
    r.$$.on_destroy ? r.$$.on_destroy.push(...c) : $r(c), r.$$.on_mount = [];
  }), s.forEach(Ea);
}
function zr(r, e) {
  const n = r.$$;
  n.fragment !== null && (wh(n.after_update), $r(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function bh(r, e) {
  r.$$.dirty[0] === -1 && (dn.push(r), vh(), r.$$.dirty.fill(0)), r.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function An(r, e, n, i, s, c, h = null, f = [-1]) {
  const v = Hn;
  zn(r);
  const u = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: c,
    update: dr,
    not_equal: s,
    bound: zs(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (v ? v.$$.context : [])),
    // everything else
    callbacks: zs(),
    dirty: f,
    skip_bound: !1,
    root: e.target || v.$$.root
  };
  h && h(u.root);
  let a = !1;
  if (u.ctx = n ? n(r, e.props || {}, (g, d, ...w) => {
    const $ = w.length ? w[0] : d;
    return u.ctx && s(u.ctx[g], u.ctx[g] = $) && (!u.skip_bound && u.bound[g] && u.bound[g]($), a && bh(r, g)), d;
  }) : [], u.update(), a = !0, $r(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const g = gh(e.target);
      u.fragment && u.fragment.l(g), g.forEach(ke);
    } else
      u.fragment && u.fragment.c();
    e.intro && ut(r.$$.fragment), qr(r, e.target, e.anchor), Tc();
  }
  zn(v);
}
class xn {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    yr(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    yr(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    zr(this, 1), this.$destroy = dr;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!Ja(n))
      return dr;
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
    this.$$set && !lh(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Eh = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Eh);
function Th(r) {
  let e, n, i, s, c;
  const h = (
    /*#slots*/
    r[2].default
  ), f = ch(
    h,
    r,
    /*$$scope*/
    r[1],
    null
  );
  return {
    c() {
      e = _e("div"), n = qe(), i = _e("div"), f && f.c(), ue(e, "class", "oc-dialog-dim"), ue(i, "class", s = `oc-dialog ${/*loading*/
      r[0] ? "icon-loading" : ""}`), es(i, "position", "fixed");
    },
    m(v, u) {
      Me(v, e, u), Me(v, n, u), Me(v, i, u), f && f.m(i, null), c = !0;
    },
    p(v, [u]) {
      f && f.p && (!c || u & /*$$scope*/
      2) && ph(
        f,
        h,
        v,
        /*$$scope*/
        v[1],
        c ? fh(
          h,
          /*$$scope*/
          v[1],
          u,
          null
        ) : hh(
          /*$$scope*/
          v[1]
        ),
        null
      ), (!c || u & /*loading*/
      1 && s !== (s = `oc-dialog ${/*loading*/
      v[0] ? "icon-loading" : ""}`)) && ue(i, "class", s);
    },
    i(v) {
      c || (ut(f, v), c = !0);
    },
    o(v) {
      Lt(f, v), c = !1;
    },
    d(v) {
      v && (ke(e), ke(n), ke(i)), f && f.d(v);
    }
  };
}
function $h(r, e, n) {
  let { $$slots: i = {}, $$scope: s } = e, { loading: c = !1 } = e;
  return r.$$set = (h) => {
    "loading" in h && n(0, c = h.loading), "$$scope" in h && n(1, s = h.$$scope);
  }, [c, s, i];
}
class ts extends xn {
  constructor(e) {
    super(), An(this, e, $h, Th, Vr, { loading: 0 });
  }
}
const on = [];
function $c(r, e = dr) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function s(f) {
    if (Vr(r, f) && (r = f, n)) {
      const v = !on.length;
      for (const u of i)
        u[1](), on.push(u, r);
      if (v) {
        for (let u = 0; u < on.length; u += 2)
          on[u][0](on[u + 1]);
        on.length = 0;
      }
    }
  }
  function c(f) {
    s(f(r));
  }
  function h(f, v = dr) {
    const u = [f, v];
    return i.add(u), i.size === 1 && (n = e(s, c) || dr), f(r), () => {
      i.delete(u), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: s, update: c, subscribe: h };
}
var di = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rs(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function Sh(r) {
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
var ns = {}, dt = {};
Object.defineProperty(dt, "__esModule", { value: !0 });
dt.BLANK_URL = dt.relativeFirstCharacters = dt.urlSchemeRegex = dt.ctrlCharactersRegex = dt.htmlCtrlEntityRegex = dt.htmlEntitiesRegex = dt.invalidProtocolRegex = void 0;
dt.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
dt.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
dt.htmlCtrlEntityRegex = /&(newline|tab);/gi;
dt.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
dt.urlSchemeRegex = /^.+(:|&colon;)/gim;
dt.relativeFirstCharacters = [".", "/"];
dt.BLANK_URL = "about:blank";
Object.defineProperty(ns, "__esModule", { value: !0 });
var wt = ns.sanitizeUrl = void 0, Pt = dt;
function Oh(r) {
  return Pt.relativeFirstCharacters.indexOf(r[0]) > -1;
}
function _h(r) {
  var e = r.replace(Pt.ctrlCharactersRegex, "");
  return e.replace(Pt.htmlEntitiesRegex, function(n, i) {
    return String.fromCharCode(i);
  });
}
function Ih(r) {
  if (!r)
    return Pt.BLANK_URL;
  var e, n = r;
  do
    n = _h(n).replace(Pt.htmlCtrlEntityRegex, "").replace(Pt.ctrlCharactersRegex, "").trim(), e = n.match(Pt.ctrlCharactersRegex) || n.match(Pt.htmlEntitiesRegex) || n.match(Pt.htmlCtrlEntityRegex);
  while (e && e.length > 0);
  var i = n;
  if (!i)
    return Pt.BLANK_URL;
  if (Oh(i))
    return i;
  var s = i.match(Pt.urlSchemeRegex);
  if (!s)
    return i;
  var c = s[0];
  return Pt.invalidProtocolRegex.test(c) ? Pt.BLANK_URL : i;
}
wt = ns.sanitizeUrl = Ih;
class Gt {
  static getFileConfig({
    name: e,
    url: n,
    downloadUrl: i,
    dir: s,
    onCreate: c,
    fileModifiedTime: h,
    isNew: f,
    isLoaded: v,
    sameWindow: u,
    skipConfirmation: a
  } = {}) {
    return {
      name: e || "?",
      downloadUrl: i || "",
      url: n ? wt(n) : "",
      dir: s || "",
      onCreate: c,
      fileModifiedTime: h || null,
      isNew: f || !1,
      isLoaded: v || !1,
      sameWindow: u || !1,
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
    const h = await window.fetch(window.OC.generateUrl("/apps/files_linkeditor/ajax/savefile"), {
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
    if (h && h.ok)
      return !0;
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static userCanEdit() {
    var e, n, i, s;
    return window.FileList && window.OC && window.OC.currentUser && (window.OC.PERMISSION_ALL === ((n = (e = window.FileList) == null ? void 0 : e.getDirectoryPermissions) == null ? void 0 : n.call(e)) || window.OC.PERMISSION_UPDATE === ((s = (i = window.FileList) == null ? void 0 : i.getDirectoryPermissions) == null ? void 0 : s.call(i)));
  }
}
const Ft = $c(""), hr = $c(Gt.getFileConfig());
function Ah(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Sc = { exports: {} }, Xe = Sc.exports = {}, cr, fr;
function Ta() {
  throw new Error("setTimeout has not been defined");
}
function $a() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? cr = setTimeout : cr = Ta;
  } catch {
    cr = Ta;
  }
  try {
    typeof clearTimeout == "function" ? fr = clearTimeout : fr = $a;
  } catch {
    fr = $a;
  }
})();
function Oc(r) {
  if (cr === setTimeout)
    return setTimeout(r, 0);
  if ((cr === Ta || !cr) && setTimeout)
    return cr = setTimeout, setTimeout(r, 0);
  try {
    return cr(r, 0);
  } catch {
    try {
      return cr.call(null, r, 0);
    } catch {
      return cr.call(this, r, 0);
    }
  }
}
function xh(r) {
  if (fr === clearTimeout)
    return clearTimeout(r);
  if ((fr === $a || !fr) && clearTimeout)
    return fr = clearTimeout, clearTimeout(r);
  try {
    return fr(r);
  } catch {
    try {
      return fr.call(null, r);
    } catch {
      return fr.call(this, r);
    }
  }
}
var br = [], wn = !1, Br, Ci = -1;
function Nh() {
  !wn || !Br || (wn = !1, Br.length ? br = Br.concat(br) : Ci = -1, br.length && _c());
}
function _c() {
  if (!wn) {
    var r = Oc(Nh);
    wn = !0;
    for (var e = br.length; e; ) {
      for (Br = br, br = []; ++Ci < e; )
        Br && Br[Ci].run();
      Ci = -1, e = br.length;
    }
    Br = null, wn = !1, xh(r);
  }
}
Xe.nextTick = function(r) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var n = 1; n < arguments.length; n++)
      e[n - 1] = arguments[n];
  br.push(new Ic(r, e)), br.length === 1 && !wn && Oc(_c);
};
function Ic(r, e) {
  this.fun = r, this.array = e;
}
Ic.prototype.run = function() {
  this.fun.apply(null, this.array);
};
Xe.title = "browser";
Xe.browser = !0;
Xe.env = {};
Xe.argv = [];
Xe.version = "";
Xe.versions = {};
function Sr() {
}
Xe.on = Sr;
Xe.addListener = Sr;
Xe.once = Sr;
Xe.off = Sr;
Xe.removeListener = Sr;
Xe.removeAllListeners = Sr;
Xe.emit = Sr;
Xe.prependListener = Sr;
Xe.prependOnceListener = Sr;
Xe.listeners = function(r) {
  return [];
};
Xe.binding = function(r) {
  throw new Error("process.binding is not supported");
};
Xe.cwd = function() {
  return "/";
};
Xe.chdir = function(r) {
  throw new Error("process.chdir is not supported");
};
Xe.umask = function() {
  return 0;
};
var Rh = Sc.exports;
const Wt = /* @__PURE__ */ Ah(Rh), Ph = typeof Wt == "object" && Wt.env && Wt.env.NODE_DEBUG && /\bsemver\b/i.test(Wt.env.NODE_DEBUG) ? (...r) => console.error("SEMVER", ...r) : () => {
};
var Ac = Ph;
const Ch = "2.0.0", xc = 256, Lh = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, Fh = 16, kh = xc - 6, Mh = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var Nc = {
  MAX_LENGTH: xc,
  MAX_SAFE_COMPONENT_LENGTH: Fh,
  MAX_SAFE_BUILD_LENGTH: kh,
  MAX_SAFE_INTEGER: Lh,
  RELEASE_TYPES: Mh,
  SEMVER_SPEC_VERSION: Ch,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
}, Sa = { exports: {} };
(function(r, e) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: n,
    MAX_SAFE_BUILD_LENGTH: i,
    MAX_LENGTH: s
  } = Nc, c = Ac;
  e = r.exports = {};
  const h = e.re = [], f = e.safeRe = [], v = e.src = [], u = e.t = {};
  let a = 0;
  const g = "[a-zA-Z0-9-]", d = [
    ["\\s", 1],
    ["\\d", s],
    [g, i]
  ], w = (I) => {
    for (const [R, D] of d)
      I = I.split(`${R}*`).join(`${R}{0,${D}}`).split(`${R}+`).join(`${R}{1,${D}}`);
    return I;
  }, $ = (I, R, D) => {
    const _ = w(R), x = a++;
    c(I, x, R), u[I] = x, v[x] = R, h[x] = new RegExp(R, D ? "g" : void 0), f[x] = new RegExp(_, D ? "g" : void 0);
  };
  $("NUMERICIDENTIFIER", "0|[1-9]\\d*"), $("NUMERICIDENTIFIERLOOSE", "\\d+"), $("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${g}*`), $("MAINVERSION", `(${v[u.NUMERICIDENTIFIER]})\\.(${v[u.NUMERICIDENTIFIER]})\\.(${v[u.NUMERICIDENTIFIER]})`), $("MAINVERSIONLOOSE", `(${v[u.NUMERICIDENTIFIERLOOSE]})\\.(${v[u.NUMERICIDENTIFIERLOOSE]})\\.(${v[u.NUMERICIDENTIFIERLOOSE]})`), $("PRERELEASEIDENTIFIER", `(?:${v[u.NUMERICIDENTIFIER]}|${v[u.NONNUMERICIDENTIFIER]})`), $("PRERELEASEIDENTIFIERLOOSE", `(?:${v[u.NUMERICIDENTIFIERLOOSE]}|${v[u.NONNUMERICIDENTIFIER]})`), $("PRERELEASE", `(?:-(${v[u.PRERELEASEIDENTIFIER]}(?:\\.${v[u.PRERELEASEIDENTIFIER]})*))`), $("PRERELEASELOOSE", `(?:-?(${v[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${v[u.PRERELEASEIDENTIFIERLOOSE]})*))`), $("BUILDIDENTIFIER", `${g}+`), $("BUILD", `(?:\\+(${v[u.BUILDIDENTIFIER]}(?:\\.${v[u.BUILDIDENTIFIER]})*))`), $("FULLPLAIN", `v?${v[u.MAINVERSION]}${v[u.PRERELEASE]}?${v[u.BUILD]}?`), $("FULL", `^${v[u.FULLPLAIN]}$`), $("LOOSEPLAIN", `[v=\\s]*${v[u.MAINVERSIONLOOSE]}${v[u.PRERELEASELOOSE]}?${v[u.BUILD]}?`), $("LOOSE", `^${v[u.LOOSEPLAIN]}$`), $("GTLT", "((?:<|>)?=?)"), $("XRANGEIDENTIFIERLOOSE", `${v[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), $("XRANGEIDENTIFIER", `${v[u.NUMERICIDENTIFIER]}|x|X|\\*`), $("XRANGEPLAIN", `[v=\\s]*(${v[u.XRANGEIDENTIFIER]})(?:\\.(${v[u.XRANGEIDENTIFIER]})(?:\\.(${v[u.XRANGEIDENTIFIER]})(?:${v[u.PRERELEASE]})?${v[u.BUILD]}?)?)?`), $("XRANGEPLAINLOOSE", `[v=\\s]*(${v[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${v[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${v[u.XRANGEIDENTIFIERLOOSE]})(?:${v[u.PRERELEASELOOSE]})?${v[u.BUILD]}?)?)?`), $("XRANGE", `^${v[u.GTLT]}\\s*${v[u.XRANGEPLAIN]}$`), $("XRANGELOOSE", `^${v[u.GTLT]}\\s*${v[u.XRANGEPLAINLOOSE]}$`), $("COERCE", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`), $("COERCERTL", v[u.COERCE], !0), $("LONETILDE", "(?:~>?)"), $("TILDETRIM", `(\\s*)${v[u.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", $("TILDE", `^${v[u.LONETILDE]}${v[u.XRANGEPLAIN]}$`), $("TILDELOOSE", `^${v[u.LONETILDE]}${v[u.XRANGEPLAINLOOSE]}$`), $("LONECARET", "(?:\\^)"), $("CARETTRIM", `(\\s*)${v[u.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", $("CARET", `^${v[u.LONECARET]}${v[u.XRANGEPLAIN]}$`), $("CARETLOOSE", `^${v[u.LONECARET]}${v[u.XRANGEPLAINLOOSE]}$`), $("COMPARATORLOOSE", `^${v[u.GTLT]}\\s*(${v[u.LOOSEPLAIN]})$|^$`), $("COMPARATOR", `^${v[u.GTLT]}\\s*(${v[u.FULLPLAIN]})$|^$`), $("COMPARATORTRIM", `(\\s*)${v[u.GTLT]}\\s*(${v[u.LOOSEPLAIN]}|${v[u.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", $("HYPHENRANGE", `^\\s*(${v[u.XRANGEPLAIN]})\\s+-\\s+(${v[u.XRANGEPLAIN]})\\s*$`), $("HYPHENRANGELOOSE", `^\\s*(${v[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${v[u.XRANGEPLAINLOOSE]})\\s*$`), $("STAR", "(<|>)?=?\\s*\\*"), $("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), $("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(Sa, Sa.exports);
var Dh = Sa.exports;
const Uh = Object.freeze({ loose: !0 }), Bh = Object.freeze({}), jh = (r) => r ? typeof r != "object" ? Uh : r : Bh;
var Gh = jh;
const Ks = /^[0-9]+$/, Rc = (r, e) => {
  const n = Ks.test(r), i = Ks.test(e);
  return n && i && (r = +r, e = +e), r === e ? 0 : n && !i ? -1 : i && !n ? 1 : r < e ? -1 : 1;
}, Wh = (r, e) => Rc(e, r);
var Vh = {
  compareIdentifiers: Rc,
  rcompareIdentifiers: Wh
};
const gi = Ac, { MAX_LENGTH: Ys, MAX_SAFE_INTEGER: mi } = Nc, { safeRe: Zs, t: Js } = Dh, qh = Gh, { compareIdentifiers: an } = Vh;
let zh = class lr {
  constructor(e, n) {
    if (n = qh(n), e instanceof lr) {
      if (e.loose === !!n.loose && e.includePrerelease === !!n.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
    if (e.length > Ys)
      throw new TypeError(
        `version is longer than ${Ys} characters`
      );
    gi("SemVer", e, n), this.options = n, this.loose = !!n.loose, this.includePrerelease = !!n.includePrerelease;
    const i = e.trim().match(n.loose ? Zs[Js.LOOSE] : Zs[Js.FULL]);
    if (!i)
      throw new TypeError(`Invalid Version: ${e}`);
    if (this.raw = e, this.major = +i[1], this.minor = +i[2], this.patch = +i[3], this.major > mi || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > mi || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > mi || this.patch < 0)
      throw new TypeError("Invalid patch version");
    i[4] ? this.prerelease = i[4].split(".").map((s) => {
      if (/^[0-9]+$/.test(s)) {
        const c = +s;
        if (c >= 0 && c < mi)
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
    if (gi("SemVer.compare", this.version, this.options, e), !(e instanceof lr)) {
      if (typeof e == "string" && e === this.version)
        return 0;
      e = new lr(e, this.options);
    }
    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
  }
  compareMain(e) {
    return e instanceof lr || (e = new lr(e, this.options)), an(this.major, e.major) || an(this.minor, e.minor) || an(this.patch, e.patch);
  }
  comparePre(e) {
    if (e instanceof lr || (e = new lr(e, this.options)), this.prerelease.length && !e.prerelease.length)
      return -1;
    if (!this.prerelease.length && e.prerelease.length)
      return 1;
    if (!this.prerelease.length && !e.prerelease.length)
      return 0;
    let n = 0;
    do {
      const i = this.prerelease[n], s = e.prerelease[n];
      if (gi("prerelease compare", n, i, s), i === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === s)
        continue;
      return an(i, s);
    } while (++n);
  }
  compareBuild(e) {
    e instanceof lr || (e = new lr(e, this.options));
    let n = 0;
    do {
      const i = this.build[n], s = e.build[n];
      if (gi("prerelease compare", n, i, s), i === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === s)
        continue;
      return an(i, s);
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
          i === !1 && (c = [n]), an(this.prerelease[0], n) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = c) : this.prerelease = c;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${e}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var Pc = zh;
const Qs = Pc, Hh = (r, e, n = !1) => {
  if (r instanceof Qs)
    return r;
  try {
    return new Qs(r, e);
  } catch (i) {
    if (!n)
      return null;
    throw i;
  }
};
var Xh = Hh;
const Kh = Xh, Yh = (r, e) => {
  const n = Kh(r, e);
  return n ? n.version : null;
};
var Zh = Yh;
const Jh = /* @__PURE__ */ rs(Zh), Qh = Pc, ed = (r, e) => new Qh(r, e).major;
var td = ed;
const eu = /* @__PURE__ */ rs(td);
class rd {
  constructor(e) {
    yr(this, "bus");
    typeof e.getVersion != "function" || !Jh(e.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : eu(e.getVersion()) !== eu(this.getVersion()) && console.warn("Proxying an event bus of version " + e.getVersion() + " with " + this.getVersion()), this.bus = e;
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
class nd {
  constructor() {
    yr(this, "handlers", /* @__PURE__ */ new Map());
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
let kn = null;
function Cc() {
  return kn !== null ? kn : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error("Window not available, EventBus can not be established!")
  }) : (typeof window.OC < "u" && window.OC._eventBus && typeof window._nc_event_bus > "u" && (console.warn("found old event bus instance at OC._eventBus. Update your version!"), window._nc_event_bus = window.OC._eventBus), typeof (window == null ? void 0 : window._nc_event_bus) < "u" ? kn = new rd(window._nc_event_bus) : kn = window._nc_event_bus = new nd(), kn);
}
function id(r, e) {
  Cc().subscribe(r, e);
}
function od(r, e) {
  Cc().emit(r, e);
}
let Li;
const Lc = [];
function Fc() {
  if (Li === void 0) {
    const r = document == null ? void 0 : document.getElementsByTagName("head")[0];
    Li = r ? r.getAttribute("data-requesttoken") : null;
  }
  return Li;
}
function kc(r) {
  Lc.push(r);
}
id("csrf-token-update", (r) => {
  Li = r.token, Lc.forEach((e) => {
    try {
      e(r.token);
    } catch (n) {
      console.error("error updating CSRF token observer", n);
    }
  });
});
const tu = (r, e) => r ? r.getAttribute(e) : null;
let sn;
function Xi() {
  if (sn !== void 0)
    return sn;
  const r = document == null ? void 0 : document.getElementsByTagName("head")[0];
  if (!r)
    return null;
  const e = tu(r, "data-user");
  return e === null ? (sn = null, sn) : (sn = {
    uid: e,
    displayName: tu(r, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, sn);
}
const ad = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getCurrentUser: Xi,
  getRequestToken: Fc,
  onRequestTokenUpdate: kc
}, Symbol.toStringTag, { value: "Module" }));
var Oa = {}, Mn = function(r) {
  return r && r.Math === Math && r;
}, tt = (
  // eslint-disable-next-line es/no-global-this -- safe
  Mn(typeof globalThis == "object" && globalThis) || Mn(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  Mn(typeof self == "object" && self) || Mn(typeof di == "object" && di) || Mn(typeof di == "object" && di) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), Zn = {}, Ve = function(r) {
  try {
    return !!r();
  } catch {
    return !0;
  }
}, sd = Ve, Et = !sd(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), ud = Ve, Ki = !ud(function() {
  var r = (function() {
  }).bind();
  return typeof r != "function" || r.hasOwnProperty("prototype");
}), ld = Ki, vi = Function.prototype.call, kt = ld ? vi.bind(vi) : function() {
  return vi.apply(vi, arguments);
}, Yi = {}, Mc = {}.propertyIsEnumerable, Dc = Object.getOwnPropertyDescriptor, cd = Dc && !Mc.call({ 1: 2 }, 1);
Yi.f = cd ? function(e) {
  var n = Dc(this, e);
  return !!n && n.enumerable;
} : Mc;
var Jn = function(r, e) {
  return {
    enumerable: !(r & 1),
    configurable: !(r & 2),
    writable: !(r & 4),
    value: e
  };
}, Uc = Ki, Bc = Function.prototype, _a = Bc.call, fd = Uc && Bc.bind.bind(_a, _a), Be = Uc ? fd : function(r) {
  return function() {
    return _a.apply(r, arguments);
  };
}, jc = Be, pd = jc({}.toString), hd = jc("".slice), Nr = function(r) {
  return hd(pd(r), 8, -1);
}, dd = Be, gd = Ve, md = Nr, No = Object, vd = dd("".split), Zi = gd(function() {
  return !No("z").propertyIsEnumerable(0);
}) ? function(r) {
  return md(r) === "String" ? vd(r, "") : No(r);
} : No, Qn = function(r) {
  return r == null;
}, yd = Qn, wd = TypeError, Hr = function(r) {
  if (yd(r))
    throw new wd("Can't call method on " + r);
  return r;
}, bd = Zi, Ed = Hr, Xr = function(r) {
  return bd(Ed(r));
}, Ro = typeof document == "object" && document.all, Ke = typeof Ro > "u" && Ro !== void 0 ? function(r) {
  return typeof r == "function" || r === Ro;
} : function(r) {
  return typeof r == "function";
}, Td = Ke, Zt = function(r) {
  return typeof r == "object" ? r !== null : Td(r);
}, Po = tt, $d = Ke, Sd = function(r) {
  return $d(r) ? r : void 0;
}, Kr = function(r, e) {
  return arguments.length < 2 ? Sd(Po[r]) : Po[r] && Po[r][e];
}, Od = Be, Ji = Od({}.isPrototypeOf), _d = typeof navigator < "u" && String(navigator.userAgent) || "", Gc = tt, Co = _d, ru = Gc.process, nu = Gc.Deno, iu = ru && ru.versions || nu && nu.version, ou = iu && iu.v8, Kt, Bi;
ou && (Kt = ou.split("."), Bi = Kt[0] > 0 && Kt[0] < 4 ? 1 : +(Kt[0] + Kt[1]));
!Bi && Co && (Kt = Co.match(/Edge\/(\d+)/), (!Kt || Kt[1] >= 74) && (Kt = Co.match(/Chrome\/(\d+)/), Kt && (Bi = +Kt[1])));
var Qi = Bi, au = Qi, Id = Ve, Ad = tt, xd = Ad.String, Nn = !!Object.getOwnPropertySymbols && !Id(function() {
  var r = Symbol("symbol detection");
  return !xd(r) || !(Object(r) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && au && au < 41;
}), Nd = Nn, Wc = Nd && !Symbol.sham && typeof Symbol.iterator == "symbol", Rd = Kr, Pd = Ke, Cd = Ji, Ld = Wc, Fd = Object, ei = Ld ? function(r) {
  return typeof r == "symbol";
} : function(r) {
  var e = Rd("Symbol");
  return Pd(e) && Cd(e.prototype, Fd(r));
}, kd = String, is = function(r) {
  try {
    return kd(r);
  } catch {
    return "Object";
  }
}, Md = Ke, Dd = is, Ud = TypeError, eo = function(r) {
  if (Md(r))
    return r;
  throw new Ud(Dd(r) + " is not a function");
}, Bd = eo, jd = Qn, os = function(r, e) {
  var n = r[e];
  return jd(n) ? void 0 : Bd(n);
}, Lo = kt, Fo = Ke, ko = Zt, Gd = TypeError, Vc = function(r, e) {
  var n, i;
  if (e === "string" && Fo(n = r.toString) && !ko(i = Lo(n, r)) || Fo(n = r.valueOf) && !ko(i = Lo(n, r)) || e !== "string" && Fo(n = r.toString) && !ko(i = Lo(n, r)))
    return i;
  throw new Gd("Can't convert object to primitive value");
}, qc = { exports: {} }, Wd = !1, su = tt, Vd = Object.defineProperty, as = function(r, e) {
  try {
    Vd(su, r, { value: e, configurable: !0, writable: !0 });
  } catch {
    su[r] = e;
  }
  return e;
}, qd = tt, zd = as, uu = "__core-js_shared__", lu = qc.exports = qd[uu] || zd(uu, {});
(lu.versions || (lu.versions = [])).push({
  version: "3.36.1",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var ss = qc.exports, cu = ss, Rn = function(r, e) {
  return cu[r] || (cu[r] = e || {});
}, Hd = Hr, Xd = Object, Rr = function(r) {
  return Xd(Hd(r));
}, Kd = Be, Yd = Rr, Zd = Kd({}.hasOwnProperty), gt = Object.hasOwn || function(e, n) {
  return Zd(Yd(e), n);
}, Jd = Be, Qd = 0, eg = Math.random(), tg = Jd(1 .toString), us = function(r) {
  return "Symbol(" + (r === void 0 ? "" : r) + ")_" + tg(++Qd + eg, 36);
}, rg = tt, ng = Rn, fu = gt, ig = us, og = Nn, ag = Wc, gn = rg.Symbol, Mo = ng("wks"), sg = ag ? gn.for || gn : gn && gn.withoutSetter || ig, ot = function(r) {
  return fu(Mo, r) || (Mo[r] = og && fu(gn, r) ? gn[r] : sg("Symbol." + r)), Mo[r];
}, ug = kt, pu = Zt, hu = ei, lg = os, cg = Vc, fg = ot, pg = TypeError, hg = fg("toPrimitive"), zc = function(r, e) {
  if (!pu(r) || hu(r))
    return r;
  var n = lg(r, hg), i;
  if (n) {
    if (e === void 0 && (e = "default"), i = ug(n, r, e), !pu(i) || hu(i))
      return i;
    throw new pg("Can't convert object to primitive value");
  }
  return e === void 0 && (e = "number"), cg(r, e);
}, dg = zc, gg = ei, ls = function(r) {
  var e = dg(r, "string");
  return gg(e) ? e : e + "";
}, mg = tt, du = Zt, Ia = mg.document, vg = du(Ia) && du(Ia.createElement), cs = function(r) {
  return vg ? Ia.createElement(r) : {};
}, yg = Et, wg = Ve, bg = cs, Hc = !yg && !wg(function() {
  return Object.defineProperty(bg("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), Eg = Et, Tg = kt, $g = Yi, Sg = Jn, Og = Xr, _g = ls, Ig = gt, Ag = Hc, gu = Object.getOwnPropertyDescriptor;
Zn.f = Eg ? gu : function(e, n) {
  if (e = Og(e), n = _g(n), Ag)
    try {
      return gu(e, n);
    } catch {
    }
  if (Ig(e, n))
    return Sg(!Tg($g.f, e, n), e[n]);
};
var It = {}, xg = Et, Ng = Ve, Xc = xg && Ng(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), Rg = Zt, Pg = String, Cg = TypeError, Jt = function(r) {
  if (Rg(r))
    return r;
  throw new Cg(Pg(r) + " is not an object");
}, Lg = Et, Fg = Hc, kg = Xc, yi = Jt, mu = ls, Mg = TypeError, Do = Object.defineProperty, Dg = Object.getOwnPropertyDescriptor, Uo = "enumerable", Bo = "configurable", jo = "writable";
It.f = Lg ? kg ? function(e, n, i) {
  if (yi(e), n = mu(n), yi(i), typeof e == "function" && n === "prototype" && "value" in i && jo in i && !i[jo]) {
    var s = Dg(e, n);
    s && s[jo] && (e[n] = i.value, i = {
      configurable: Bo in i ? i[Bo] : s[Bo],
      enumerable: Uo in i ? i[Uo] : s[Uo],
      writable: !1
    });
  }
  return Do(e, n, i);
} : Do : function(e, n, i) {
  if (yi(e), n = mu(n), yi(i), Fg)
    try {
      return Do(e, n, i);
    } catch {
    }
  if ("get" in i || "set" in i)
    throw new Mg("Accessors not supported");
  return "value" in i && (e[n] = i.value), e;
};
var Ug = Et, Bg = It, jg = Jn, ti = Ug ? function(r, e, n) {
  return Bg.f(r, e, jg(1, n));
} : function(r, e, n) {
  return r[e] = n, r;
}, Kc = { exports: {} }, Aa = Et, Gg = gt, Yc = Function.prototype, Wg = Aa && Object.getOwnPropertyDescriptor, fs = Gg(Yc, "name"), Vg = fs && (function() {
}).name === "something", qg = fs && (!Aa || Aa && Wg(Yc, "name").configurable), Zc = {
  EXISTS: fs,
  PROPER: Vg,
  CONFIGURABLE: qg
}, zg = Be, Hg = Ke, xa = ss, Xg = zg(Function.toString);
Hg(xa.inspectSource) || (xa.inspectSource = function(r) {
  return Xg(r);
});
var Jc = xa.inspectSource, Kg = tt, Yg = Ke, vu = Kg.WeakMap, Zg = Yg(vu) && /native code/.test(String(vu)), Jg = Rn, Qg = us, yu = Jg("keys"), to = function(r) {
  return yu[r] || (yu[r] = Qg(r));
}, ro = {}, em = Zg, Qc = tt, tm = Zt, rm = ti, Go = gt, Wo = ss, nm = to, im = ro, wu = "Object already initialized", Na = Qc.TypeError, om = Qc.WeakMap, ji, Xn, Gi, am = function(r) {
  return Gi(r) ? Xn(r) : ji(r, {});
}, sm = function(r) {
  return function(e) {
    var n;
    if (!tm(e) || (n = Xn(e)).type !== r)
      throw new Na("Incompatible receiver, " + r + " required");
    return n;
  };
};
if (em || Wo.state) {
  var ar = Wo.state || (Wo.state = new om());
  ar.get = ar.get, ar.has = ar.has, ar.set = ar.set, ji = function(r, e) {
    if (ar.has(r))
      throw new Na(wu);
    return e.facade = r, ar.set(r, e), e;
  }, Xn = function(r) {
    return ar.get(r) || {};
  }, Gi = function(r) {
    return ar.has(r);
  };
} else {
  var un = nm("state");
  im[un] = !0, ji = function(r, e) {
    if (Go(r, un))
      throw new Na(wu);
    return e.facade = r, rm(r, un, e), e;
  }, Xn = function(r) {
    return Go(r, un) ? r[un] : {};
  }, Gi = function(r) {
    return Go(r, un);
  };
}
var ri = {
  set: ji,
  get: Xn,
  has: Gi,
  enforce: am,
  getterFor: sm
}, ps = Be, um = Ve, lm = Ke, wi = gt, Ra = Et, cm = Zc.CONFIGURABLE, fm = Jc, ef = ri, pm = ef.enforce, hm = ef.get, bu = String, Fi = Object.defineProperty, dm = ps("".slice), gm = ps("".replace), mm = ps([].join), vm = Ra && !um(function() {
  return Fi(function() {
  }, "length", { value: 8 }).length !== 8;
}), ym = String(String).split("String"), wm = Kc.exports = function(r, e, n) {
  dm(bu(e), 0, 7) === "Symbol(" && (e = "[" + gm(bu(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), n && n.getter && (e = "get " + e), n && n.setter && (e = "set " + e), (!wi(r, "name") || cm && r.name !== e) && (Ra ? Fi(r, "name", { value: e, configurable: !0 }) : r.name = e), vm && n && wi(n, "arity") && r.length !== n.arity && Fi(r, "length", { value: n.arity });
  try {
    n && wi(n, "constructor") && n.constructor ? Ra && Fi(r, "prototype", { writable: !1 }) : r.prototype && (r.prototype = void 0);
  } catch {
  }
  var i = pm(r);
  return wi(i, "source") || (i.source = mm(ym, typeof e == "string" ? e : "")), r;
};
Function.prototype.toString = wm(function() {
  return lm(this) && hm(this).source || fm(this);
}, "toString");
var tf = Kc.exports, bm = Ke, Em = It, Tm = tf, $m = as, Pr = function(r, e, n, i) {
  i || (i = {});
  var s = i.enumerable, c = i.name !== void 0 ? i.name : e;
  if (bm(n) && Tm(n, c, i), i.global)
    s ? r[e] = n : $m(e, n);
  else {
    try {
      i.unsafe ? r[e] && (s = !0) : delete r[e];
    } catch {
    }
    s ? r[e] = n : Em.f(r, e, {
      value: n,
      enumerable: !1,
      configurable: !i.nonConfigurable,
      writable: !i.nonWritable
    });
  }
  return r;
}, ni = {}, Sm = Math.ceil, Om = Math.floor, _m = Math.trunc || function(e) {
  var n = +e;
  return (n > 0 ? Om : Sm)(n);
}, Im = _m, no = function(r) {
  var e = +r;
  return e !== e || e === 0 ? 0 : Im(e);
}, Am = no, xm = Math.max, Nm = Math.min, Rm = function(r, e) {
  var n = Am(r);
  return n < 0 ? xm(n + e, 0) : Nm(n, e);
}, Pm = no, Cm = Math.min, hs = function(r) {
  var e = Pm(r);
  return e > 0 ? Cm(e, 9007199254740991) : 0;
}, Lm = hs, io = function(r) {
  return Lm(r.length);
}, Fm = Xr, km = Rm, Mm = io, Eu = function(r) {
  return function(e, n, i) {
    var s = Fm(e), c = Mm(s);
    if (c === 0)
      return !r && -1;
    var h = km(i, c), f;
    if (r && n !== n) {
      for (; c > h; )
        if (f = s[h++], f !== f)
          return !0;
    } else
      for (; c > h; h++)
        if ((r || h in s) && s[h] === n)
          return r || h || 0;
    return !r && -1;
  };
}, Dm = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: Eu(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: Eu(!1)
}, Um = Be, Vo = gt, Bm = Xr, jm = Dm.indexOf, Gm = ro, Tu = Um([].push), rf = function(r, e) {
  var n = Bm(r), i = 0, s = [], c;
  for (c in n)
    !Vo(Gm, c) && Vo(n, c) && Tu(s, c);
  for (; e.length > i; )
    Vo(n, c = e[i++]) && (~jm(s, c) || Tu(s, c));
  return s;
}, ds = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], Wm = rf, Vm = ds, qm = Vm.concat("length", "prototype");
ni.f = Object.getOwnPropertyNames || function(e) {
  return Wm(e, qm);
};
var ii = {};
ii.f = Object.getOwnPropertySymbols;
var zm = Kr, Hm = Be, Xm = ni, Km = ii, Ym = Jt, Zm = Hm([].concat), Jm = zm("Reflect", "ownKeys") || function(e) {
  var n = Xm.f(Ym(e)), i = Km.f;
  return i ? Zm(n, i(e)) : n;
}, $u = gt, Qm = Jm, ev = Zn, tv = It, nf = function(r, e, n) {
  for (var i = Qm(e), s = tv.f, c = ev.f, h = 0; h < i.length; h++) {
    var f = i[h];
    !$u(r, f) && !(n && $u(n, f)) && s(r, f, c(e, f));
  }
}, rv = Ve, nv = Ke, iv = /#|\.prototype\./, oi = function(r, e) {
  var n = av[ov(r)];
  return n === uv ? !0 : n === sv ? !1 : nv(e) ? rv(e) : !!e;
}, ov = oi.normalize = function(r) {
  return String(r).replace(iv, ".").toLowerCase();
}, av = oi.data = {}, sv = oi.NATIVE = "N", uv = oi.POLYFILL = "P", of = oi, bi = tt, lv = Zn.f, cv = ti, fv = Pr, pv = as, hv = nf, dv = of, Tt = function(r, e) {
  var n = r.target, i = r.global, s = r.stat, c, h, f, v, u, a;
  if (i ? h = bi : s ? h = bi[n] || pv(n, {}) : h = bi[n] && bi[n].prototype, h)
    for (f in e) {
      if (u = e[f], r.dontCallGetSet ? (a = lv(h, f), v = a && a.value) : v = h[f], c = dv(i ? f : n + (s ? "." : "#") + f, r.forced), !c && v !== void 0) {
        if (typeof u == typeof v)
          continue;
        hv(u, v);
      }
      (r.sham || v && v.sham) && cv(u, "sham", !0), fv(h, f, u, r);
    }
}, gv = Tt, mv = Et, Su = It.f;
gv({ target: "Object", stat: !0, forced: Object.defineProperty !== Su, sham: !mv }, {
  defineProperty: Su
});
var ai = {}, vv = tt, af = vv, gs = {}, yv = ot;
gs.f = yv;
var Ou = af, wv = gt, bv = gs, Ev = It.f, ms = function(r) {
  var e = Ou.Symbol || (Ou.Symbol = {});
  wv(e, r) || Ev(e, r, {
    value: bv.f(r)
  });
}, Tv = ms;
Tv("iterator");
var vs = {}, $v = rf, Sv = ds, ys = Object.keys || function(e) {
  return $v(e, Sv);
}, Ov = Et, _v = Xc, Iv = It, Av = Jt, xv = Xr, Nv = ys;
vs.f = Ov && !_v ? Object.defineProperties : function(e, n) {
  Av(e);
  for (var i = xv(n), s = Nv(n), c = s.length, h = 0, f; c > h; )
    Iv.f(e, f = s[h++], i[f]);
  return e;
};
var Rv = Kr, Pv = Rv("document", "documentElement"), Cv = Jt, Lv = vs, _u = ds, Fv = ro, kv = Pv, Mv = cs, Dv = to, Iu = ">", Au = "<", Pa = "prototype", Ca = "script", sf = Dv("IE_PROTO"), qo = function() {
}, uf = function(r) {
  return Au + Ca + Iu + r + Au + "/" + Ca + Iu;
}, xu = function(r) {
  r.write(uf("")), r.close();
  var e = r.parentWindow.Object;
  return r = null, e;
}, Uv = function() {
  var r = Mv("iframe"), e = "java" + Ca + ":", n;
  return r.style.display = "none", kv.appendChild(r), r.src = String(e), n = r.contentWindow.document, n.open(), n.write(uf("document.F=Object")), n.close(), n.F;
}, Ei, ki = function() {
  try {
    Ei = new ActiveXObject("htmlfile");
  } catch {
  }
  ki = typeof document < "u" ? document.domain && Ei ? xu(Ei) : Uv() : xu(Ei);
  for (var r = _u.length; r--; )
    delete ki[Pa][_u[r]];
  return ki();
};
Fv[sf] = !0;
var oo = Object.create || function(e, n) {
  var i;
  return e !== null ? (qo[Pa] = Cv(e), i = new qo(), qo[Pa] = null, i[sf] = e) : i = ki(), n === void 0 ? i : Lv.f(i, n);
}, Bv = ot, jv = oo, Gv = It.f, La = Bv("unscopables"), Fa = Array.prototype;
Fa[La] === void 0 && Gv(Fa, La, {
  configurable: !0,
  value: jv(null)
});
var Wv = function(r) {
  Fa[La][r] = !0;
}, ws = {}, Vv = Ve, qv = !Vv(function() {
  function r() {
  }
  return r.prototype.constructor = null, Object.getPrototypeOf(new r()) !== r.prototype;
}), zv = gt, Hv = Ke, Xv = Rr, Kv = to, Yv = qv, Nu = Kv("IE_PROTO"), ka = Object, Zv = ka.prototype, lf = Yv ? ka.getPrototypeOf : function(r) {
  var e = Xv(r);
  if (zv(e, Nu))
    return e[Nu];
  var n = e.constructor;
  return Hv(n) && e instanceof n ? n.prototype : e instanceof ka ? Zv : null;
}, Jv = Ve, Qv = Ke, e0 = Zt, Ru = lf, t0 = Pr, r0 = ot, Ma = r0("iterator"), cf = !1, Wr, zo, Ho;
[].keys && (Ho = [].keys(), "next" in Ho ? (zo = Ru(Ru(Ho)), zo !== Object.prototype && (Wr = zo)) : cf = !0);
var n0 = !e0(Wr) || Jv(function() {
  var r = {};
  return Wr[Ma].call(r) !== r;
});
n0 && (Wr = {});
Qv(Wr[Ma]) || t0(Wr, Ma, function() {
  return this;
});
var ff = {
  IteratorPrototype: Wr,
  BUGGY_SAFARI_ITERATORS: cf
}, i0 = It.f, o0 = gt, a0 = ot, Pu = a0("toStringTag"), ao = function(r, e, n) {
  r && !n && (r = r.prototype), r && !o0(r, Pu) && i0(r, Pu, { configurable: !0, value: e });
}, s0 = ff.IteratorPrototype, u0 = oo, l0 = Jn, c0 = ao, f0 = ws, p0 = function() {
  return this;
}, h0 = function(r, e, n, i) {
  var s = e + " Iterator";
  return r.prototype = u0(s0, { next: l0(+!i, n) }), c0(r, s, !1), f0[s] = p0, r;
}, d0 = Be, g0 = eo, m0 = function(r, e, n) {
  try {
    return d0(g0(Object.getOwnPropertyDescriptor(r, e)[n]));
  } catch {
  }
}, v0 = Zt, y0 = function(r) {
  return v0(r) || r === null;
}, w0 = y0, b0 = String, E0 = TypeError, T0 = function(r) {
  if (w0(r))
    return r;
  throw new E0("Can't set " + b0(r) + " as a prototype");
}, $0 = m0, S0 = Zt, O0 = Hr, _0 = T0, pf = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var r = !1, e = {}, n;
  try {
    n = $0(Object.prototype, "__proto__", "set"), n(e, []), r = e instanceof Array;
  } catch {
  }
  return function(s, c) {
    return O0(s), _0(c), S0(s) && (r ? n(s, c) : s.__proto__ = c), s;
  };
}() : void 0), I0 = Tt, A0 = kt, hf = Zc, x0 = Ke, N0 = h0, Cu = lf, Lu = pf, R0 = ao, P0 = ti, Xo = Pr, C0 = ot, L0 = ws, df = ff, F0 = hf.PROPER, k0 = hf.CONFIGURABLE, Fu = df.IteratorPrototype, Ti = df.BUGGY_SAFARI_ITERATORS, Dn = C0("iterator"), ku = "keys", Un = "values", Mu = "entries", M0 = function() {
  return this;
}, gf = function(r, e, n, i, s, c, h) {
  N0(n, e, i);
  var f = function(D) {
    if (D === s && d)
      return d;
    if (!Ti && D && D in a)
      return a[D];
    switch (D) {
      case ku:
        return function() {
          return new n(this, D);
        };
      case Un:
        return function() {
          return new n(this, D);
        };
      case Mu:
        return function() {
          return new n(this, D);
        };
    }
    return function() {
      return new n(this);
    };
  }, v = e + " Iterator", u = !1, a = r.prototype, g = a[Dn] || a["@@iterator"] || s && a[s], d = !Ti && g || f(s), w = e === "Array" && a.entries || g, $, I, R;
  if (w && ($ = Cu(w.call(new r())), $ !== Object.prototype && $.next && (Cu($) !== Fu && (Lu ? Lu($, Fu) : x0($[Dn]) || Xo($, Dn, M0)), R0($, v, !0))), F0 && s === Un && g && g.name !== Un && (k0 ? P0(a, "name", Un) : (u = !0, d = function() {
    return A0(g, this);
  })), s)
    if (I = {
      values: f(Un),
      keys: c ? d : f(ku),
      entries: f(Mu)
    }, h)
      for (R in I)
        (Ti || u || !(R in a)) && Xo(a, R, I[R]);
    else
      I0({ target: e, proto: !0, forced: Ti || u }, I);
  return a[Dn] !== d && Xo(a, Dn, d, { name: s }), L0[e] = d, I;
}, mf = function(r, e) {
  return { value: r, done: e };
}, D0 = Xr, bs = Wv, Du = ws, vf = ri, U0 = It.f, B0 = gf, $i = mf, j0 = Et, yf = "Array Iterator", G0 = vf.set, W0 = vf.getterFor(yf), V0 = B0(Array, "Array", function(r, e) {
  G0(this, {
    type: yf,
    target: D0(r),
    // target
    index: 0,
    // next index
    kind: e
    // kind
  });
}, function() {
  var r = W0(this), e = r.target, n = r.index++;
  if (!e || n >= e.length)
    return r.target = void 0, $i(void 0, !0);
  switch (r.kind) {
    case "keys":
      return $i(n, !1);
    case "values":
      return $i(e[n], !1);
  }
  return $i([n, e[n]], !1);
}, "values"), Uu = Du.Arguments = Du.Array;
bs("keys");
bs("values");
bs("entries");
if (j0 && Uu.name !== "values")
  try {
    U0(Uu, "name", { value: "values" });
  } catch {
  }
var q0 = ot, z0 = q0("toStringTag"), wf = {};
wf[z0] = "z";
var Es = String(wf) === "[object z]", H0 = Es, X0 = Ke, Mi = Nr, K0 = ot, Y0 = K0("toStringTag"), Z0 = Object, J0 = Mi(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments", Q0 = function(r, e) {
  try {
    return r[e];
  } catch {
  }
}, Ts = H0 ? Mi : function(r) {
  var e, n, i;
  return r === void 0 ? "Undefined" : r === null ? "Null" : typeof (n = Q0(e = Z0(r), Y0)) == "string" ? n : J0 ? Mi(e) : (i = Mi(e)) === "Object" && X0(e.callee) ? "Arguments" : i;
}, ey = Ts, ty = String, gr = function(r) {
  if (ey(r) === "Symbol")
    throw new TypeError("Cannot convert a Symbol value to a string");
  return ty(r);
}, $s = Be, ry = no, ny = gr, iy = Hr, oy = $s("".charAt), Bu = $s("".charCodeAt), ay = $s("".slice), ju = function(r) {
  return function(e, n) {
    var i = ny(iy(e)), s = ry(n), c = i.length, h, f;
    return s < 0 || s >= c ? r ? "" : void 0 : (h = Bu(i, s), h < 55296 || h > 56319 || s + 1 === c || (f = Bu(i, s + 1)) < 56320 || f > 57343 ? r ? oy(i, s) : h : r ? ay(i, s, s + 2) : (h - 55296 << 10) + (f - 56320) + 65536);
  };
}, bf = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: ju(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: ju(!0)
}, sy = bf.charAt, uy = gr, Ef = ri, ly = gf, Gu = mf, Tf = "String Iterator", cy = Ef.set, fy = Ef.getterFor(Tf);
ly(String, "String", function(r) {
  cy(this, {
    type: Tf,
    string: uy(r),
    index: 0
  });
}, function() {
  var e = fy(this), n = e.string, i = e.index, s;
  return i >= n.length ? Gu(void 0, !0) : (s = sy(n, i), e.index += s.length, Gu(s, !1));
});
var py = {
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
}, hy = cs, Ko = hy("span").classList, Wu = Ko && Ko.constructor && Ko.constructor.prototype, dy = Wu === Object.prototype ? void 0 : Wu, Vu = tt, $f = py, gy = dy, Vn = V0, qu = ti, my = ao, vy = ot, Yo = vy("iterator"), Zo = Vn.values, Sf = function(r, e) {
  if (r) {
    if (r[Yo] !== Zo)
      try {
        qu(r, Yo, Zo);
      } catch {
        r[Yo] = Zo;
      }
    if (my(r, e, !0), $f[e]) {
      for (var n in Vn)
        if (r[n] !== Vn[n])
          try {
            qu(r, n, Vn[n]);
          } catch {
            r[n] = Vn[n];
          }
    }
  }
};
for (var Jo in $f)
  Sf(Vu[Jo] && Vu[Jo].prototype, Jo);
Sf(gy, "DOMTokenList");
var zu = Et, yy = Be, wy = kt, by = Ve, Qo = ys, Ey = ii, Ty = Yi, $y = Rr, Sy = Zi, ln = Object.assign, Hu = Object.defineProperty, Oy = yy([].concat), _y = !ln || by(function() {
  if (zu && ln({ b: 1 }, ln(Hu({}, "a", {
    enumerable: !0,
    get: function() {
      Hu(this, "b", {
        value: 3,
        enumerable: !1
      });
    }
  }), { b: 2 })).b !== 1)
    return !0;
  var r = {}, e = {}, n = Symbol("assign detection"), i = "abcdefghijklmnopqrst";
  return r[n] = 7, i.split("").forEach(function(s) {
    e[s] = s;
  }), ln({}, r)[n] !== 7 || Qo(ln({}, e)).join("") !== i;
}) ? function(e, n) {
  for (var i = $y(e), s = arguments.length, c = 1, h = Ey.f, f = Ty.f; s > c; )
    for (var v = Sy(arguments[c++]), u = h ? Oy(Qo(v), h(v)) : Qo(v), a = u.length, g = 0, d; a > g; )
      d = u[g++], (!zu || wy(f, v, d)) && (i[d] = v[d]);
  return i;
} : ln, Iy = Tt, Xu = _y;
Iy({ target: "Object", stat: !0, arity: 2, forced: Object.assign !== Xu }, {
  assign: Xu
});
var Ay = kt, xy = Kr, Ny = ot, Ry = Pr, Of = function() {
  var r = xy("Symbol"), e = r && r.prototype, n = e && e.valueOf, i = Ny("toPrimitive");
  e && !e[i] && Ry(e, i, function(s) {
    return Ay(n, this);
  }, { arity: 1 });
}, Py = ms, Cy = Of;
Py("toPrimitive");
Cy();
var Ly = Jt, Fy = Vc, ky = TypeError, My = function(r) {
  if (Ly(this), r === "string" || r === "default")
    r = "string";
  else if (r !== "number")
    throw new ky("Incorrect hint");
  return Fy(this, r);
}, Dy = gt, Uy = Pr, By = My, jy = ot, Ku = jy("toPrimitive"), Yu = Date.prototype;
Dy(Yu, Ku) || Uy(Yu, Ku, By);
var _f = {}, Gy = Be, If = Gy([].slice), Wy = Nr, Vy = Xr, Af = ni.f, qy = If, xf = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], zy = function(r) {
  try {
    return Af(r);
  } catch {
    return qy(xf);
  }
};
_f.f = function(e) {
  return xf && Wy(e) === "Window" ? zy(e) : Af(Vy(e));
};
var Zu = tf, Hy = It, Nf = function(r, e, n) {
  return n.get && Zu(n.get, e, { getter: !0 }), n.set && Zu(n.set, e, { setter: !0 }), Hy.f(r, e, n);
}, Xy = Nr, Ky = Be, Yy = function(r) {
  if (Xy(r) === "Function")
    return Ky(r);
}, Ju = Yy, Zy = eo, Jy = Ki, Qy = Ju(Ju.bind), e1 = function(r, e) {
  return Zy(r), e === void 0 ? r : Jy ? Qy(r, e) : function() {
    return r.apply(e, arguments);
  };
}, t1 = Nr, Ss = Array.isArray || function(e) {
  return t1(e) === "Array";
}, r1 = Be, n1 = Ve, Rf = Ke, i1 = Ts, o1 = Kr, a1 = Jc, Pf = function() {
}, Cf = o1("Reflect", "construct"), Os = /^\s*(?:class|function)\b/, s1 = r1(Os.exec), u1 = !Os.test(Pf), Bn = function(e) {
  if (!Rf(e))
    return !1;
  try {
    return Cf(Pf, [], e), !0;
  } catch {
    return !1;
  }
}, Lf = function(e) {
  if (!Rf(e))
    return !1;
  switch (i1(e)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return u1 || !!s1(Os, a1(e));
  } catch {
    return !0;
  }
};
Lf.sham = !0;
var Ff = !Cf || n1(function() {
  var r;
  return Bn(Bn.call) || !Bn(Object) || !Bn(function() {
    r = !0;
  }) || r;
}) ? Lf : Bn, Qu = Ss, l1 = Ff, c1 = Zt, f1 = ot, p1 = f1("species"), el = Array, h1 = function(r) {
  var e;
  return Qu(r) && (e = r.constructor, l1(e) && (e === el || Qu(e.prototype)) ? e = void 0 : c1(e) && (e = e[p1], e === null && (e = void 0))), e === void 0 ? el : e;
}, d1 = h1, kf = function(r, e) {
  return new (d1(r))(e === 0 ? 0 : e);
}, g1 = e1, m1 = Be, v1 = Zi, y1 = Rr, w1 = io, b1 = kf, tl = m1([].push), Or = function(r) {
  var e = r === 1, n = r === 2, i = r === 3, s = r === 4, c = r === 6, h = r === 7, f = r === 5 || c;
  return function(v, u, a, g) {
    for (var d = y1(v), w = v1(d), $ = w1(w), I = g1(u, a), R = 0, D = g || b1, _ = e ? D(v, $) : n || h ? D(v, 0) : void 0, x, F; $ > R; R++)
      if ((f || R in w) && (x = w[R], F = I(x, R, d), r))
        if (e)
          _[R] = F;
        else if (F)
          switch (r) {
            case 3:
              return !0;
            case 5:
              return x;
            case 6:
              return R;
            case 2:
              tl(_, x);
          }
        else
          switch (r) {
            case 4:
              return !1;
            case 7:
              tl(_, x);
          }
    return c ? -1 : i || s ? s : _;
  };
}, _s = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: Or(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: Or(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: Or(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: Or(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: Or(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: Or(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: Or(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: Or(7)
}, so = Tt, si = tt, Is = kt, E1 = Be, Tn = Et, $n = Nn, T1 = Ve, it = gt, $1 = Ji, Da = Jt, uo = Xr, As = ls, S1 = gr, Ua = Jn, Sn = oo, Mf = ys, O1 = ni, Df = _f, _1 = ii, Uf = Zn, Bf = It, I1 = vs, jf = Yi, ea = Pr, A1 = Nf, xs = Rn, x1 = to, Gf = ro, rl = us, N1 = ot, R1 = gs, P1 = ms, C1 = Of, L1 = ao, Wf = ri, lo = _s.forEach, Ot = x1("hidden"), co = "Symbol", Kn = "prototype", F1 = Wf.set, nl = Wf.getterFor(co), Vt = Object[Kn], jr = si.Symbol, qn = jr && jr[Kn], k1 = si.RangeError, M1 = si.TypeError, ta = si.QObject, Vf = Uf.f, Gr = Bf.f, qf = Df.f, D1 = jf.f, zf = E1([].push), Tr = xs("symbols"), ui = xs("op-symbols"), U1 = xs("wks"), Ba = !ta || !ta[Kn] || !ta[Kn].findChild, Hf = function(r, e, n) {
  var i = Vf(Vt, e);
  i && delete Vt[e], Gr(r, e, n), i && r !== Vt && Gr(Vt, e, i);
}, ja = Tn && T1(function() {
  return Sn(Gr({}, "a", {
    get: function() {
      return Gr(this, "a", { value: 7 }).a;
    }
  })).a !== 7;
}) ? Hf : Gr, ra = function(r, e) {
  var n = Tr[r] = Sn(qn);
  return F1(n, {
    type: co,
    tag: r,
    description: e
  }), Tn || (n.description = e), n;
}, fo = function(e, n, i) {
  e === Vt && fo(ui, n, i), Da(e);
  var s = As(n);
  return Da(i), it(Tr, s) ? (i.enumerable ? (it(e, Ot) && e[Ot][s] && (e[Ot][s] = !1), i = Sn(i, { enumerable: Ua(0, !1) })) : (it(e, Ot) || Gr(e, Ot, Ua(1, Sn(null))), e[Ot][s] = !0), ja(e, s, i)) : Gr(e, s, i);
}, Ns = function(e, n) {
  Da(e);
  var i = uo(n), s = Mf(i).concat(Yf(i));
  return lo(s, function(c) {
    (!Tn || Is(Ga, i, c)) && fo(e, c, i[c]);
  }), e;
}, B1 = function(e, n) {
  return n === void 0 ? Sn(e) : Ns(Sn(e), n);
}, Ga = function(e) {
  var n = As(e), i = Is(D1, this, n);
  return this === Vt && it(Tr, n) && !it(ui, n) ? !1 : i || !it(this, n) || !it(Tr, n) || it(this, Ot) && this[Ot][n] ? i : !0;
}, Xf = function(e, n) {
  var i = uo(e), s = As(n);
  if (!(i === Vt && it(Tr, s) && !it(ui, s))) {
    var c = Vf(i, s);
    return c && it(Tr, s) && !(it(i, Ot) && i[Ot][s]) && (c.enumerable = !0), c;
  }
}, Kf = function(e) {
  var n = qf(uo(e)), i = [];
  return lo(n, function(s) {
    !it(Tr, s) && !it(Gf, s) && zf(i, s);
  }), i;
}, Yf = function(r) {
  var e = r === Vt, n = qf(e ? ui : uo(r)), i = [];
  return lo(n, function(s) {
    it(Tr, s) && (!e || it(Vt, s)) && zf(i, Tr[s]);
  }), i;
};
$n || (jr = function() {
  if ($1(qn, this))
    throw new M1("Symbol is not a constructor");
  var e = !arguments.length || arguments[0] === void 0 ? void 0 : S1(arguments[0]), n = rl(e), i = function(s) {
    var c = this === void 0 ? si : this;
    c === Vt && Is(i, ui, s), it(c, Ot) && it(c[Ot], n) && (c[Ot][n] = !1);
    var h = Ua(1, s);
    try {
      ja(c, n, h);
    } catch (f) {
      if (!(f instanceof k1))
        throw f;
      Hf(c, n, h);
    }
  };
  return Tn && Ba && ja(Vt, n, { configurable: !0, set: i }), ra(n, e);
}, qn = jr[Kn], ea(qn, "toString", function() {
  return nl(this).tag;
}), ea(jr, "withoutSetter", function(r) {
  return ra(rl(r), r);
}), jf.f = Ga, Bf.f = fo, I1.f = Ns, Uf.f = Xf, O1.f = Df.f = Kf, _1.f = Yf, R1.f = function(r) {
  return ra(N1(r), r);
}, Tn && (A1(qn, "description", {
  configurable: !0,
  get: function() {
    return nl(this).description;
  }
}), ea(Vt, "propertyIsEnumerable", Ga, { unsafe: !0 })));
so({ global: !0, constructor: !0, wrap: !0, forced: !$n, sham: !$n }, {
  Symbol: jr
});
lo(Mf(U1), function(r) {
  P1(r);
});
so({ target: co, stat: !0, forced: !$n }, {
  useSetter: function() {
    Ba = !0;
  },
  useSimple: function() {
    Ba = !1;
  }
});
so({ target: "Object", stat: !0, forced: !$n, sham: !Tn }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: B1,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: fo,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: Ns,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: Xf
});
so({ target: "Object", stat: !0, forced: !$n }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: Kf
});
C1();
L1(jr, co);
Gf[Ot] = !0;
var j1 = Nn, Zf = j1 && !!Symbol.for && !!Symbol.keyFor, G1 = Tt, W1 = Kr, V1 = gt, q1 = gr, Jf = Rn, z1 = Zf, na = Jf("string-to-symbol-registry"), H1 = Jf("symbol-to-string-registry");
G1({ target: "Symbol", stat: !0, forced: !z1 }, {
  for: function(r) {
    var e = q1(r);
    if (V1(na, e))
      return na[e];
    var n = W1("Symbol")(e);
    return na[e] = n, H1[n] = e, n;
  }
});
var X1 = Tt, K1 = gt, Y1 = ei, Z1 = is, J1 = Rn, Q1 = Zf, il = J1("symbol-to-string-registry");
X1({ target: "Symbol", stat: !0, forced: !Q1 }, {
  keyFor: function(e) {
    if (!Y1(e))
      throw new TypeError(Z1(e) + " is not a symbol");
    if (K1(il, e))
      return il[e];
  }
});
var ew = Ki, Qf = Function.prototype, ol = Qf.apply, al = Qf.call, ep = typeof Reflect == "object" && Reflect.apply || (ew ? al.bind(ol) : function() {
  return al.apply(ol, arguments);
}), tw = Be, sl = Ss, rw = Ke, ul = Nr, nw = gr, ll = tw([].push), iw = function(r) {
  if (rw(r))
    return r;
  if (sl(r)) {
    for (var e = r.length, n = [], i = 0; i < e; i++) {
      var s = r[i];
      typeof s == "string" ? ll(n, s) : (typeof s == "number" || ul(s) === "Number" || ul(s) === "String") && ll(n, nw(s));
    }
    var c = n.length, h = !0;
    return function(f, v) {
      if (h)
        return h = !1, v;
      if (sl(this))
        return v;
      for (var u = 0; u < c; u++)
        if (n[u] === f)
          return v;
    };
  }
}, ow = Tt, tp = Kr, rp = ep, aw = kt, li = Be, np = Ve, cl = Ke, fl = ei, ip = If, sw = iw, uw = Nn, lw = String, xr = tp("JSON", "stringify"), Si = li(/./.exec), pl = li("".charAt), cw = li("".charCodeAt), fw = li("".replace), pw = li(1 .toString), hw = /[\uD800-\uDFFF]/g, hl = /^[\uD800-\uDBFF]$/, dl = /^[\uDC00-\uDFFF]$/, gl = !uw || np(function() {
  var r = tp("Symbol")("stringify detection");
  return xr([r]) !== "[null]" || xr({ a: r }) !== "{}" || xr(Object(r)) !== "{}";
}), ml = np(function() {
  return xr("\uDF06\uD834") !== '"\\udf06\\ud834"' || xr("\uDEAD") !== '"\\udead"';
}), dw = function(r, e) {
  var n = ip(arguments), i = sw(e);
  if (!(!cl(i) && (r === void 0 || fl(r))))
    return n[1] = function(s, c) {
      if (cl(i) && (c = aw(i, this, lw(s), c)), !fl(c))
        return c;
    }, rp(xr, null, n);
}, gw = function(r, e, n) {
  var i = pl(n, e - 1), s = pl(n, e + 1);
  return Si(hl, r) && !Si(dl, s) || Si(dl, r) && !Si(hl, i) ? "\\u" + pw(cw(r, 0), 16) : r;
};
xr && ow({ target: "JSON", stat: !0, arity: 3, forced: gl || ml }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  stringify: function(e, n, i) {
    var s = ip(arguments), c = rp(gl ? dw : xr, null, s);
    return ml && typeof c == "string" ? fw(c, hw, gw) : c;
  }
});
var mw = Tt, vw = Nn, yw = Ve, op = ii, ww = Rr, bw = !vw || yw(function() {
  op.f(1);
});
mw({ target: "Object", stat: !0, forced: bw }, {
  getOwnPropertySymbols: function(e) {
    var n = op.f;
    return n ? n(ww(e)) : [];
  }
});
var Ew = Tt, Tw = Et, $w = tt, Oi = Be, Sw = gt, Ow = Ke, _w = Ji, Iw = gr, Aw = Nf, xw = nf, wr = $w.Symbol, Mr = wr && wr.prototype;
if (Tw && Ow(wr) && (!("description" in Mr) || // Safari 12 bug
wr().description !== void 0)) {
  var vl = {}, _i = function() {
    var e = arguments.length < 1 || arguments[0] === void 0 ? void 0 : Iw(arguments[0]), n = _w(Mr, this) ? new wr(e) : e === void 0 ? wr() : wr(e);
    return e === "" && (vl[n] = !0), n;
  };
  xw(_i, wr), _i.prototype = Mr, Mr.constructor = _i;
  var Nw = String(wr("description detection")) === "Symbol(description detection)", Rw = Oi(Mr.valueOf), Pw = Oi(Mr.toString), Cw = /^Symbol\((.*)\)[^)]+$/, Lw = Oi("".replace), Fw = Oi("".slice);
  Aw(Mr, "description", {
    configurable: !0,
    get: function() {
      var e = Rw(this);
      if (Sw(vl, e))
        return "";
      var n = Pw(e), i = Nw ? Fw(n, 7, -1) : Lw(n, Cw, "$1");
      return i === "" ? void 0 : i;
    }
  }), Ew({ global: !0, constructor: !0, forced: !0 }, {
    Symbol: _i
  });
}
var kw = Es, Mw = Ts, Dw = kw ? {}.toString : function() {
  return "[object " + Mw(this) + "]";
}, Uw = Es, Bw = Pr, jw = Dw;
Uw || Bw(Object.prototype, "toString", jw, { unsafe: !0 });
var Gw = Ke, Ww = Zt, yl = pf, Vw = function(r, e, n) {
  var i, s;
  return (
    // it can work only with native `setPrototypeOf`
    yl && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    Gw(i = e.constructor) && i !== n && Ww(s = i.prototype) && s !== n.prototype && yl(r, s), r
  );
}, qw = Be, zw = qw(1 .valueOf), Hw = `	
\v\f\r                　\u2028\u2029\uFEFF`, Xw = Be, Kw = Hr, Yw = gr, Wa = Hw, wl = Xw("".replace), Zw = RegExp("^[" + Wa + "]+"), Jw = RegExp("(^|[^" + Wa + "])[" + Wa + "]+$"), ia = function(r) {
  return function(e) {
    var n = Yw(Kw(e));
    return r & 1 && (n = wl(n, Zw, "")), r & 2 && (n = wl(n, Jw, "$1")), n;
  };
}, Qw = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: ia(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: ia(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: ia(3)
}, eb = Tt, ap = Wd, tb = Et, sp = tt, up = af, lp = Be, rb = of, bl = gt, nb = Vw, ib = Ji, ob = ei, cp = zc, ab = Ve, sb = ni.f, ub = Zn.f, lb = It.f, cb = zw, fb = Qw.trim, po = "Number", bn = sp[po];
up[po];
var Rs = bn.prototype, pb = sp.TypeError, hb = lp("".slice), Ii = lp("".charCodeAt), db = function(r) {
  var e = cp(r, "number");
  return typeof e == "bigint" ? e : gb(e);
}, gb = function(r) {
  var e = cp(r, "number"), n, i, s, c, h, f, v, u;
  if (ob(e))
    throw new pb("Cannot convert a Symbol value to a number");
  if (typeof e == "string" && e.length > 2) {
    if (e = fb(e), n = Ii(e, 0), n === 43 || n === 45) {
      if (i = Ii(e, 2), i === 88 || i === 120)
        return NaN;
    } else if (n === 48) {
      switch (Ii(e, 1)) {
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
      for (h = hb(e, 2), f = h.length, v = 0; v < f; v++)
        if (u = Ii(h, v), u < 48 || u > c)
          return NaN;
      return parseInt(h, s);
    }
  }
  return +e;
}, Ps = rb(po, !bn(" 0o1") || !bn("0b1") || bn("+0x1")), mb = function(r) {
  return ib(Rs, r) && ab(function() {
    cb(r);
  });
}, ho = function(e) {
  var n = arguments.length < 1 ? 0 : bn(db(e));
  return mb(this) ? nb(Object(n), this, ho) : n;
};
ho.prototype = Rs;
Ps && !ap && (Rs.constructor = ho);
eb({ global: !0, constructor: !0, wrap: !0, forced: Ps }, {
  Number: ho
});
var vb = function(r, e) {
  for (var n = tb ? sb(e) : (
    // ES3:
    "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(",")
  ), i = 0, s; n.length > i; i++)
    bl(e, s = n[i]) && !bl(r, s) && lb(r, s, ub(e, s));
};
(Ps || ap) && vb(up[po], bn);
var Pn = {};
Object.defineProperty(Pn, "__esModule", {
  value: !0
});
Pn.LogLevel = void 0;
var yb = /* @__PURE__ */ function(r) {
  return r[r.Debug = 0] = "Debug", r[r.Info = 1] = "Info", r[r.Warn = 2] = "Warn", r[r.Error = 3] = "Error", r[r.Fatal = 4] = "Fatal", r;
}({});
Pn.LogLevel = yb;
Object.defineProperty(ai, "__esModule", {
  value: !0
});
ai.ConsoleLogger = void 0;
ai.buildConsoleLogger = $b;
var st = Pn;
function On(r) {
  "@babel/helpers - typeof";
  return On = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, On(r);
}
function wb(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function El(r, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, fp(i.key), i);
  }
}
function bb(r, e, n) {
  return e && El(r.prototype, e), n && El(r, n), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Eb(r, e, n) {
  return e = fp(e), e in r ? Object.defineProperty(r, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = n, r;
}
function fp(r) {
  var e = Tb(r, "string");
  return On(e) === "symbol" ? e : String(e);
}
function Tb(r, e) {
  if (On(r) !== "object" || r === null)
    return r;
  var n = r[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(r, e || "default");
    if (On(i) !== "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
var pp = /* @__PURE__ */ function() {
  function r(e) {
    wb(this, r), Eb(this, "context", void 0), this.context = e || {};
  }
  return bb(r, [{
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
      var c, h;
      if (!(typeof ((c = this.context) === null || c === void 0 ? void 0 : c.level) == "number" && n < ((h = this.context) === null || h === void 0 ? void 0 : h.level)))
        switch (On(i) === "object" && (s == null ? void 0 : s.error) === void 0 && (s.error = i), n) {
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
ai.ConsoleLogger = pp;
function $b(r) {
  return new pp(r);
}
var go = {};
const Sb = /* @__PURE__ */ Sh(ad);
Object.defineProperty(go, "__esModule", {
  value: !0
});
go.LoggerBuilder = void 0;
var Ob = Sb, Tl = Pn;
function Yn(r) {
  "@babel/helpers - typeof";
  return Yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Yn(r);
}
function _b(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function $l(r, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, hp(i.key), i);
  }
}
function Ib(r, e, n) {
  return e && $l(r.prototype, e), n && $l(r, n), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Sl(r, e, n) {
  return e = hp(e), e in r ? Object.defineProperty(r, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = n, r;
}
function hp(r) {
  var e = Ab(r, "string");
  return Yn(e) === "symbol" ? e : String(e);
}
function Ab(r, e) {
  if (Yn(r) !== "object" || r === null)
    return r;
  var n = r[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(r, e || "default");
    if (Yn(i) !== "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
var xb = /* @__PURE__ */ function() {
  function r(e) {
    _b(this, r), Sl(this, "context", void 0), Sl(this, "factory", void 0), this.context = {}, this.factory = e;
  }
  return Ib(r, [{
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
      var n = (0, Ob.getCurrentUser)();
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
          var c, h;
          n.context.level = (c = (h = window._oc_config) === null || h === void 0 ? void 0 : h.loglevel) !== null && c !== void 0 ? c : Tl.LogLevel.Warn, window._oc_debug && (n.context.level = Tl.LogLevel.Debug), document.removeEventListener("readystatechange", s);
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
go.LoggerBuilder = xb;
(function(r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "LogLevel", {
    enumerable: !0,
    get: function() {
      return i.LogLevel;
    }
  }), r.getLogger = c, r.getLoggerBuilder = s;
  var e = ai, n = go, i = Pn;
  function s() {
    return new n.LoggerBuilder(e.buildConsoleLogger);
  }
  function c() {
    return s().build();
  }
})(Oa);
var yt = {};
Object.defineProperty(yt, "__esModule", {
  value: !0
});
yt.linkTo = yt.imagePath = yt.getRootUrl = yt.generateUrl = yt.generateRemoteUrl = yt.generateOcsUrl = yt.generateFilePath = void 0;
const Nb = (r, e) => Wi(r, "", e);
yt.linkTo = Nb;
const Rb = (r) => _n() + "/remote.php/" + r, Pb = (r) => window.location.protocol + "//" + window.location.host + Rb(r);
yt.generateRemoteUrl = Pb;
const Cb = (r, e, n) => {
  const s = Object.assign({
    ocsVersion: 2
  }, n || {}).ocsVersion === 1 ? 1 : 2;
  return window.location.protocol + "//" + window.location.host + _n() + "/ocs/v" + s + ".php" + Va(r, e, n);
};
yt.generateOcsUrl = Cb;
const Va = (r, e, n) => {
  const i = Object.assign({
    escape: !0
  }, n || {}), s = function(c, h) {
    return h = h || {}, c.replace(/{([^{}]*)}/g, function(f, v) {
      var u = h[v];
      return i.escape ? encodeURIComponent(typeof u == "string" || typeof u == "number" ? u.toString() : f) : typeof u == "string" || typeof u == "number" ? u.toString() : f;
    });
  };
  return r.charAt(0) !== "/" && (r = "/" + r), s(r, e || {});
}, Lb = (r, e, n) => {
  var s, c;
  const i = Object.assign({
    noRewrite: !1
  }, n || {});
  return ((c = (s = window == null ? void 0 : window.OC) == null ? void 0 : s.config) == null ? void 0 : c.modRewriteWorking) === !0 && !i.noRewrite ? _n() + Va(r, e, n) : _n() + "/index.php" + Va(r, e, n);
};
yt.generateUrl = Lb;
const Fb = (r, e) => e.indexOf(".") === -1 ? Wi(r, "img", e + ".svg") : Wi(r, "img", e);
yt.imagePath = Fb;
const Wi = (r, e, n) => {
  var c, h, f, v;
  const i = ((h = (c = window == null ? void 0 : window.OC) == null ? void 0 : c.coreApps) == null ? void 0 : h.indexOf(r)) !== -1;
  let s = _n();
  return n.substring(n.length - 3) === "php" && !i ? (s += "/index.php/apps/" + r, n !== "index.php" && (s += "/", e && (s += encodeURI(e + "/")), s += n)) : n.substring(n.length - 3) !== "php" && !i ? (s = (v = (f = window == null ? void 0 : window.OC) == null ? void 0 : f.appswebroots) == null ? void 0 : v[r], e && (s += "/" + e + "/"), s.substring(s.length - 1) !== "/" && (s += "/"), s += n) : ((r === "settings" || r === "core" || r === "search") && e === "ajax" ? s += "/index.php/" : s += "/", i || (s += "apps/"), r !== "" && (r += "/", s += r), e && (s += e + "/"), s += n), s;
};
yt.generateFilePath = Wi;
const _n = () => {
  var r;
  return ((r = window == null ? void 0 : window.OC) == null ? void 0 : r.webroot) || "";
};
yt.getRootUrl = _n;
/*! @license DOMPurify 3.0.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.6/LICENSE */
const {
  entries: dp,
  setPrototypeOf: Ol,
  isFrozen: kb,
  getPrototypeOf: Mb,
  getOwnPropertyDescriptor: gp
} = Object;
let {
  freeze: bt,
  seal: Yt,
  create: mp
} = Object, {
  apply: qa,
  construct: za
} = typeof Reflect < "u" && Reflect;
bt || (bt = function(e) {
  return e;
});
Yt || (Yt = function(e) {
  return e;
});
qa || (qa = function(e, n, i) {
  return e.apply(n, i);
});
za || (za = function(e, n) {
  return new e(...n);
});
const Ai = qt(Array.prototype.forEach), _l = qt(Array.prototype.pop), jn = qt(Array.prototype.push), Di = qt(String.prototype.toLowerCase), oa = qt(String.prototype.toString), Db = qt(String.prototype.match), Gn = qt(String.prototype.replace), Ub = qt(String.prototype.indexOf), Bb = qt(String.prototype.trim), Rt = qt(RegExp.prototype.test), Wn = jb(TypeError);
function qt(r) {
  return function(e) {
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      i[s - 1] = arguments[s];
    return qa(r, e, i);
  };
}
function jb(r) {
  return function() {
    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
      n[i] = arguments[i];
    return za(r, n);
  };
}
function Ee(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Di;
  Ol && Ol(r, null);
  let i = e.length;
  for (; i--; ) {
    let s = e[i];
    if (typeof s == "string") {
      const c = n(s);
      c !== s && (kb(e) || (e[i] = c), s = c);
    }
    r[s] = !0;
  }
  return r;
}
function cn(r) {
  const e = mp(null);
  for (const [n, i] of dp(r))
    gp(r, n) !== void 0 && (e[n] = i);
  return e;
}
function xi(r, e) {
  for (; r !== null; ) {
    const i = gp(r, e);
    if (i) {
      if (i.get)
        return qt(i.get);
      if (typeof i.value == "function")
        return qt(i.value);
    }
    r = Mb(r);
  }
  function n(i) {
    return console.warn("fallback value for", i), null;
  }
  return n;
}
const Il = bt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), aa = bt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), sa = bt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Gb = bt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ua = bt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Wb = bt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Al = bt(["#text"]), xl = bt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), la = bt(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Nl = bt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ni = bt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Vb = Yt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), qb = Yt(/<%[\w\W]*|[\w\W]*%>/gm), zb = Yt(/\${[\w\W]*}/gm), Hb = Yt(/^data-[\-\w.\u00B7-\uFFFF]/), Xb = Yt(/^aria-[\-\w]+$/), vp = Yt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Kb = Yt(/^(?:\w+script|data):/i), Yb = Yt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), yp = Yt(/^html$/i);
var Rl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: Vb,
  ERB_EXPR: qb,
  TMPLIT_EXPR: zb,
  DATA_ATTR: Hb,
  ARIA_ATTR: Xb,
  IS_ALLOWED_URI: vp,
  IS_SCRIPT_OR_DATA: Kb,
  ATTR_WHITESPACE: Yb,
  DOCTYPE_NAME: yp
});
const Zb = function() {
  return typeof window > "u" ? null : window;
}, Jb = function(e, n) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let i = null;
  const s = "data-tt-policy-suffix";
  n && n.hasAttribute(s) && (i = n.getAttribute(s));
  const c = "dompurify" + (i ? "#" + i : "");
  try {
    return e.createPolicy(c, {
      createHTML(h) {
        return h;
      },
      createScriptURL(h) {
        return h;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + c + " could not be created."), null;
  }
};
function wp() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Zb();
  const e = (se) => wp(se);
  if (e.version = "3.0.6", e.removed = [], !r || !r.document || r.document.nodeType !== 9)
    return e.isSupported = !1, e;
  let {
    document: n
  } = r;
  const i = n, s = i.currentScript, {
    DocumentFragment: c,
    HTMLTemplateElement: h,
    Node: f,
    Element: v,
    NodeFilter: u,
    NamedNodeMap: a = r.NamedNodeMap || r.MozNamedAttrMap,
    HTMLFormElement: g,
    DOMParser: d,
    trustedTypes: w
  } = r, $ = v.prototype, I = xi($, "cloneNode"), R = xi($, "nextSibling"), D = xi($, "childNodes"), _ = xi($, "parentNode");
  if (typeof h == "function") {
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
  e.isSupported = typeof dp == "function" && typeof _ == "function" && C && C.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: H,
    ERB_EXPR: Y,
    TMPLIT_EXPR: V,
    DATA_ATTR: re,
    ARIA_ATTR: he,
    IS_SCRIPT_OR_DATA: xe,
    ATTR_WHITESPACE: fe
  } = Rl;
  let {
    IS_ALLOWED_URI: Te
  } = Rl, ye = null;
  const De = Ee({}, [...Il, ...aa, ...sa, ...ua, ...Al]);
  let Ie = null;
  const Je = Ee({}, [...xl, ...la, ...Nl, ...Ni]);
  let $e = Object.seal(mp(null, {
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
  })), Ne = null, Ae = null, At = !0, $t = !0, je = !1, er = !0, Ce = !1, Qe = !1, Mt = !1, ft = !1, St = !1, zt = !1, Le = !1, Ge = !0, mr = !1;
  const Cr = "user-content-";
  let mt = !0, Dt = !1, xt = {}, Nt = null;
  const de = Ee({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let ze = null;
  const E = Ee({}, ["audio", "video", "img", "source", "image", "track"]);
  let O = null;
  const L = Ee({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), M = "http://www.w3.org/1998/Math/MathML", m = "http://www.w3.org/2000/svg", o = "http://www.w3.org/1999/xhtml";
  let l = o, T = !1, A = null;
  const k = Ee({}, [M, m, o], oa);
  let j = null;
  const te = ["application/xhtml+xml", "text/html"], ce = "text/html";
  let le = null, pe = null;
  const Re = n.createElement("form"), tr = function(B) {
    return B instanceof RegExp || B instanceof Function;
  }, Lr = function() {
    let B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(pe && pe === B)) {
      if ((!B || typeof B != "object") && (B = {}), B = cn(B), j = // eslint-disable-next-line unicorn/prefer-includes
      te.indexOf(B.PARSER_MEDIA_TYPE) === -1 ? j = ce : j = B.PARSER_MEDIA_TYPE, le = j === "application/xhtml+xml" ? oa : Di, ye = "ALLOWED_TAGS" in B ? Ee({}, B.ALLOWED_TAGS, le) : De, Ie = "ALLOWED_ATTR" in B ? Ee({}, B.ALLOWED_ATTR, le) : Je, A = "ALLOWED_NAMESPACES" in B ? Ee({}, B.ALLOWED_NAMESPACES, oa) : k, O = "ADD_URI_SAFE_ATTR" in B ? Ee(
        cn(L),
        // eslint-disable-line indent
        B.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        le
        // eslint-disable-line indent
      ) : L, ze = "ADD_DATA_URI_TAGS" in B ? Ee(
        cn(E),
        // eslint-disable-line indent
        B.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        le
        // eslint-disable-line indent
      ) : E, Nt = "FORBID_CONTENTS" in B ? Ee({}, B.FORBID_CONTENTS, le) : de, Ne = "FORBID_TAGS" in B ? Ee({}, B.FORBID_TAGS, le) : {}, Ae = "FORBID_ATTR" in B ? Ee({}, B.FORBID_ATTR, le) : {}, xt = "USE_PROFILES" in B ? B.USE_PROFILES : !1, At = B.ALLOW_ARIA_ATTR !== !1, $t = B.ALLOW_DATA_ATTR !== !1, je = B.ALLOW_UNKNOWN_PROTOCOLS || !1, er = B.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ce = B.SAFE_FOR_TEMPLATES || !1, Qe = B.WHOLE_DOCUMENT || !1, St = B.RETURN_DOM || !1, zt = B.RETURN_DOM_FRAGMENT || !1, Le = B.RETURN_TRUSTED_TYPE || !1, ft = B.FORCE_BODY || !1, Ge = B.SANITIZE_DOM !== !1, mr = B.SANITIZE_NAMED_PROPS || !1, mt = B.KEEP_CONTENT !== !1, Dt = B.IN_PLACE || !1, Te = B.ALLOWED_URI_REGEXP || vp, l = B.NAMESPACE || o, $e = B.CUSTOM_ELEMENT_HANDLING || {}, B.CUSTOM_ELEMENT_HANDLING && tr(B.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && ($e.tagNameCheck = B.CUSTOM_ELEMENT_HANDLING.tagNameCheck), B.CUSTOM_ELEMENT_HANDLING && tr(B.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && ($e.attributeNameCheck = B.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), B.CUSTOM_ELEMENT_HANDLING && typeof B.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && ($e.allowCustomizedBuiltInElements = B.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ce && ($t = !1), zt && (St = !0), xt && (ye = Ee({}, [...Al]), Ie = [], xt.html === !0 && (Ee(ye, Il), Ee(Ie, xl)), xt.svg === !0 && (Ee(ye, aa), Ee(Ie, la), Ee(Ie, Ni)), xt.svgFilters === !0 && (Ee(ye, sa), Ee(Ie, la), Ee(Ie, Ni)), xt.mathMl === !0 && (Ee(ye, ua), Ee(Ie, Nl), Ee(Ie, Ni))), B.ADD_TAGS && (ye === De && (ye = cn(ye)), Ee(ye, B.ADD_TAGS, le)), B.ADD_ATTR && (Ie === Je && (Ie = cn(Ie)), Ee(Ie, B.ADD_ATTR, le)), B.ADD_URI_SAFE_ATTR && Ee(O, B.ADD_URI_SAFE_ATTR, le), B.FORBID_CONTENTS && (Nt === de && (Nt = cn(Nt)), Ee(Nt, B.FORBID_CONTENTS, le)), mt && (ye["#text"] = !0), Qe && Ee(ye, ["html", "head", "body"]), ye.table && (Ee(ye, ["tbody"]), delete Ne.tbody), B.TRUSTED_TYPES_POLICY) {
        if (typeof B.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Wn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof B.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Wn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        x = B.TRUSTED_TYPES_POLICY, F = x.createHTML("");
      } else
        x === void 0 && (x = Jb(w, s)), x !== null && typeof F == "string" && (F = x.createHTML(""));
      bt && bt(B), pe = B;
    }
  }, Ln = Ee({}, ["mi", "mo", "mn", "ms", "mtext"]), ci = Ee({}, ["foreignobject", "desc", "title", "annotation-xml"]), wo = Ee({}, ["title", "style", "font", "a", "script"]), vt = Ee({}, aa);
  Ee(vt, sa), Ee(vt, Gb);
  const Yr = Ee({}, ua);
  Ee(Yr, Wb);
  const Zr = function(B) {
    let ee = _(B);
    (!ee || !ee.tagName) && (ee = {
      namespaceURI: l,
      tagName: "template"
    });
    const ae = Di(B.tagName), Fe = Di(ee.tagName);
    return A[B.namespaceURI] ? B.namespaceURI === m ? ee.namespaceURI === o ? ae === "svg" : ee.namespaceURI === M ? ae === "svg" && (Fe === "annotation-xml" || Ln[Fe]) : !!vt[ae] : B.namespaceURI === M ? ee.namespaceURI === o ? ae === "math" : ee.namespaceURI === m ? ae === "math" && ci[Fe] : !!Yr[ae] : B.namespaceURI === o ? ee.namespaceURI === m && !ci[Fe] || ee.namespaceURI === M && !Ln[Fe] ? !1 : !Yr[ae] && (wo[ae] || !vt[ae]) : !!(j === "application/xhtml+xml" && A[B.namespaceURI]) : !1;
  }, rr = function(B) {
    jn(e.removed, {
      element: B
    });
    try {
      B.parentNode.removeChild(B);
    } catch {
      B.remove();
    }
  }, Jr = function(B, ee) {
    try {
      jn(e.removed, {
        attribute: ee.getAttributeNode(B),
        from: ee
      });
    } catch {
      jn(e.removed, {
        attribute: null,
        from: ee
      });
    }
    if (ee.removeAttribute(B), B === "is" && !Ie[B])
      if (St || zt)
        try {
          rr(ee);
        } catch {
        }
      else
        try {
          ee.setAttribute(B, "");
        } catch {
        }
  }, Fr = function(B) {
    let ee = null, ae = null;
    if (ft)
      B = "<remove></remove>" + B;
    else {
      const et = Db(B, /^[\r\n\t ]+/);
      ae = et && et[0];
    }
    j === "application/xhtml+xml" && l === o && (B = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + B + "</body></html>");
    const Fe = x ? x.createHTML(B) : B;
    if (l === o)
      try {
        ee = new d().parseFromString(Fe, j);
      } catch {
      }
    if (!ee || !ee.documentElement) {
      ee = C.createDocument(l, "template", null);
      try {
        ee.documentElement.innerHTML = T ? F : Fe;
      } catch {
      }
    }
    const Ye = ee.body || ee.documentElement;
    return B && ae && Ye.insertBefore(n.createTextNode(ae), Ye.childNodes[0] || null), l === o ? G.call(ee, Qe ? "html" : "body")[0] : Qe ? ee.documentElement : Ye;
  }, Qr = function(B) {
    return z.call(
      B.ownerDocument || B,
      B,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT,
      null
    );
  }, rt = function(B) {
    return B instanceof g && (typeof B.nodeName != "string" || typeof B.textContent != "string" || typeof B.removeChild != "function" || !(B.attributes instanceof a) || typeof B.removeAttribute != "function" || typeof B.setAttribute != "function" || typeof B.namespaceURI != "string" || typeof B.insertBefore != "function" || typeof B.hasChildNodes != "function");
  }, nr = function(B) {
    return typeof f == "function" && B instanceof f;
  }, Ht = function(B, ee, ae) {
    Z[B] && Ai(Z[B], (Fe) => {
      Fe.call(e, ee, ae, pe);
    });
  }, en = function(B) {
    let ee = null;
    if (Ht("beforeSanitizeElements", B, null), rt(B))
      return rr(B), !0;
    const ae = le(B.nodeName);
    if (Ht("uponSanitizeElement", B, {
      tagName: ae,
      allowedTags: ye
    }), B.hasChildNodes() && !nr(B.firstElementChild) && Rt(/<[/\w]/g, B.innerHTML) && Rt(/<[/\w]/g, B.textContent))
      return rr(B), !0;
    if (!ye[ae] || Ne[ae]) {
      if (!Ne[ae] && Ut(ae) && ($e.tagNameCheck instanceof RegExp && Rt($e.tagNameCheck, ae) || $e.tagNameCheck instanceof Function && $e.tagNameCheck(ae)))
        return !1;
      if (mt && !Nt[ae]) {
        const Fe = _(B) || B.parentNode, Ye = D(B) || B.childNodes;
        if (Ye && Fe) {
          const et = Ye.length;
          for (let pt = et - 1; pt >= 0; --pt)
            Fe.insertBefore(I(Ye[pt], !0), R(B));
        }
      }
      return rr(B), !0;
    }
    return B instanceof v && !Zr(B) || (ae === "noscript" || ae === "noembed" || ae === "noframes") && Rt(/<\/no(script|embed|frames)/i, B.innerHTML) ? (rr(B), !0) : (Ce && B.nodeType === 3 && (ee = B.textContent, Ai([H, Y, V], (Fe) => {
      ee = Gn(ee, Fe, " ");
    }), B.textContent !== ee && (jn(e.removed, {
      element: B.cloneNode()
    }), B.textContent = ee)), Ht("afterSanitizeElements", B, null), !1);
  }, fi = function(B, ee, ae) {
    if (Ge && (ee === "id" || ee === "name") && (ae in n || ae in Re))
      return !1;
    if (!($t && !Ae[ee] && Rt(re, ee))) {
      if (!(At && Rt(he, ee))) {
        if (!Ie[ee] || Ae[ee]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Ut(B) && ($e.tagNameCheck instanceof RegExp && Rt($e.tagNameCheck, B) || $e.tagNameCheck instanceof Function && $e.tagNameCheck(B)) && ($e.attributeNameCheck instanceof RegExp && Rt($e.attributeNameCheck, ee) || $e.attributeNameCheck instanceof Function && $e.attributeNameCheck(ee)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            ee === "is" && $e.allowCustomizedBuiltInElements && ($e.tagNameCheck instanceof RegExp && Rt($e.tagNameCheck, ae) || $e.tagNameCheck instanceof Function && $e.tagNameCheck(ae)))
          )
            return !1;
        } else if (!O[ee]) {
          if (!Rt(Te, Gn(ae, fe, ""))) {
            if (!((ee === "src" || ee === "xlink:href" || ee === "href") && B !== "script" && Ub(ae, "data:") === 0 && ze[B])) {
              if (!(je && !Rt(xe, Gn(ae, fe, "")))) {
                if (ae)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Ut = function(B) {
    return B.indexOf("-") > 0;
  }, vr = function(B) {
    Ht("beforeSanitizeAttributes", B, null);
    const {
      attributes: ee
    } = B;
    if (!ee)
      return;
    const ae = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Ie
    };
    let Fe = ee.length;
    for (; Fe--; ) {
      const Ye = ee[Fe], {
        name: et,
        namespaceURI: pt,
        value: ir
      } = Ye, kr = le(et);
      let at = et === "value" ? ir : Bb(ir);
      if (ae.attrName = kr, ae.attrValue = at, ae.keepAttr = !0, ae.forceKeepAttr = void 0, Ht("uponSanitizeAttribute", B, ae), at = ae.attrValue, ae.forceKeepAttr || (Jr(et, B), !ae.keepAttr))
        continue;
      if (!er && Rt(/\/>/i, at)) {
        Jr(et, B);
        continue;
      }
      Ce && Ai([H, Y, V], (nt) => {
        at = Gn(at, nt, " ");
      });
      const Fn = le(B.nodeName);
      if (fi(Fn, kr, at)) {
        if (mr && (kr === "id" || kr === "name") && (Jr(et, B), at = Cr + at), x && typeof w == "object" && typeof w.getAttributeType == "function" && !pt)
          switch (w.getAttributeType(Fn, kr)) {
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
          pt ? B.setAttributeNS(pt, et, at) : B.setAttribute(et, at), _l(e.removed);
        } catch {
        }
      }
    }
    Ht("afterSanitizeAttributes", B, null);
  }, tn = function se(B) {
    let ee = null;
    const ae = Qr(B);
    for (Ht("beforeSanitizeShadowDOM", B, null); ee = ae.nextNode(); )
      Ht("uponSanitizeShadowNode", ee, null), !en(ee) && (ee.content instanceof c && se(ee.content), vr(ee));
    Ht("afterSanitizeShadowDOM", B, null);
  };
  return e.sanitize = function(se) {
    let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ee = null, ae = null, Fe = null, Ye = null;
    if (T = !se, T && (se = "<!-->"), typeof se != "string" && !nr(se))
      if (typeof se.toString == "function") {
        if (se = se.toString(), typeof se != "string")
          throw Wn("dirty is not a string, aborting");
      } else
        throw Wn("toString is not a function");
    if (!e.isSupported)
      return se;
    if (Mt || Lr(B), e.removed = [], typeof se == "string" && (Dt = !1), Dt) {
      if (se.nodeName) {
        const ir = le(se.nodeName);
        if (!ye[ir] || Ne[ir])
          throw Wn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (se instanceof f)
      ee = Fr("<!---->"), ae = ee.ownerDocument.importNode(se, !0), ae.nodeType === 1 && ae.nodeName === "BODY" || ae.nodeName === "HTML" ? ee = ae : ee.appendChild(ae);
    else {
      if (!St && !Ce && !Qe && // eslint-disable-next-line unicorn/prefer-includes
      se.indexOf("<") === -1)
        return x && Le ? x.createHTML(se) : se;
      if (ee = Fr(se), !ee)
        return St ? null : Le ? F : "";
    }
    ee && ft && rr(ee.firstChild);
    const et = Qr(Dt ? se : ee);
    for (; Fe = et.nextNode(); )
      en(Fe) || (Fe.content instanceof c && tn(Fe.content), vr(Fe));
    if (Dt)
      return se;
    if (St) {
      if (zt)
        for (Ye = q.call(ee.ownerDocument); ee.firstChild; )
          Ye.appendChild(ee.firstChild);
      else
        Ye = ee;
      return (Ie.shadowroot || Ie.shadowrootmode) && (Ye = X.call(i, Ye, !0)), Ye;
    }
    let pt = Qe ? ee.outerHTML : ee.innerHTML;
    return Qe && ye["!doctype"] && ee.ownerDocument && ee.ownerDocument.doctype && ee.ownerDocument.doctype.name && Rt(yp, ee.ownerDocument.doctype.name) && (pt = "<!DOCTYPE " + ee.ownerDocument.doctype.name + `>
` + pt), Ce && Ai([H, Y, V], (ir) => {
      pt = Gn(pt, ir, " ");
    }), x && Le ? x.createHTML(pt) : pt;
  }, e.setConfig = function() {
    let se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Lr(se), Mt = !0;
  }, e.clearConfig = function() {
    pe = null, Mt = !1;
  }, e.isValidAttribute = function(se, B, ee) {
    pe || Lr({});
    const ae = le(se), Fe = le(B);
    return fi(ae, Fe, ee);
  }, e.addHook = function(se, B) {
    typeof B == "function" && (Z[se] = Z[se] || [], jn(Z[se], B));
  }, e.removeHook = function(se) {
    if (Z[se])
      return _l(Z[se]);
  }, e.removeHooks = function(se) {
    Z[se] && (Z[se] = []);
  }, e.removeAllHooks = function() {
    Z = {};
  }, e;
}
wp();
function sr(r) {
  if (typeof r != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(r));
}
function Pl(r, e) {
  for (var n = "", i = 0, s = -1, c = 0, h, f = 0; f <= r.length; ++f) {
    if (f < r.length)
      h = r.charCodeAt(f);
    else {
      if (h === 47)
        break;
      h = 47;
    }
    if (h === 47) {
      if (!(s === f - 1 || c === 1))
        if (s !== f - 1 && c === 2) {
          if (n.length < 2 || i !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length - 2) !== 46) {
            if (n.length > 2) {
              var v = n.lastIndexOf("/");
              if (v !== n.length - 1) {
                v === -1 ? (n = "", i = 0) : (n = n.slice(0, v), i = n.length - 1 - n.lastIndexOf("/")), s = f, c = 0;
                continue;
              }
            } else if (n.length === 2 || n.length === 1) {
              n = "", i = 0, s = f, c = 0;
              continue;
            }
          }
          e && (n.length > 0 ? n += "/.." : n = "..", i = 2);
        } else
          n.length > 0 ? n += "/" + r.slice(s + 1, f) : n = r.slice(s + 1, f), i = f - s - 1;
      s = f, c = 0;
    } else
      h === 46 && c !== -1 ? ++c : c = -1;
  }
  return n;
}
function Qb(r, e) {
  var n = e.dir || e.root, i = e.base || (e.name || "") + (e.ext || "");
  return n ? n === e.root ? n + i : n + r + i : i;
}
var En = {
  // path.resolve([from ...], to)
  resolve: function() {
    for (var e = "", n = !1, i, s = arguments.length - 1; s >= -1 && !n; s--) {
      var c;
      s >= 0 ? c = arguments[s] : (i === void 0 && (i = Wt.cwd()), c = i), sr(c), c.length !== 0 && (e = c + "/" + e, n = c.charCodeAt(0) === 47);
    }
    return e = Pl(e, !n), n ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
  },
  normalize: function(e) {
    if (sr(e), e.length === 0)
      return ".";
    var n = e.charCodeAt(0) === 47, i = e.charCodeAt(e.length - 1) === 47;
    return e = Pl(e, !n), e.length === 0 && !n && (e = "."), e.length > 0 && i && (e += "/"), n ? "/" + e : e;
  },
  isAbsolute: function(e) {
    return sr(e), e.length > 0 && e.charCodeAt(0) === 47;
  },
  join: function() {
    if (arguments.length === 0)
      return ".";
    for (var e, n = 0; n < arguments.length; ++n) {
      var i = arguments[n];
      sr(i), i.length > 0 && (e === void 0 ? e = i : e += "/" + i);
    }
    return e === void 0 ? "." : En.normalize(e);
  },
  relative: function(e, n) {
    if (sr(e), sr(n), e === n || (e = En.resolve(e), n = En.resolve(n), e === n))
      return "";
    for (var i = 1; i < e.length && e.charCodeAt(i) === 47; ++i)
      ;
    for (var s = e.length, c = s - i, h = 1; h < n.length && n.charCodeAt(h) === 47; ++h)
      ;
    for (var f = n.length, v = f - h, u = c < v ? c : v, a = -1, g = 0; g <= u; ++g) {
      if (g === u) {
        if (v > u) {
          if (n.charCodeAt(h + g) === 47)
            return n.slice(h + g + 1);
          if (g === 0)
            return n.slice(h + g);
        } else
          c > u && (e.charCodeAt(i + g) === 47 ? a = g : g === 0 && (a = 0));
        break;
      }
      var d = e.charCodeAt(i + g), w = n.charCodeAt(h + g);
      if (d !== w)
        break;
      d === 47 && (a = g);
    }
    var $ = "";
    for (g = i + a + 1; g <= s; ++g)
      (g === s || e.charCodeAt(g) === 47) && ($.length === 0 ? $ += ".." : $ += "/..");
    return $.length > 0 ? $ + n.slice(h + a) : (h += a, n.charCodeAt(h) === 47 && ++h, n.slice(h));
  },
  _makeLong: function(e) {
    return e;
  },
  dirname: function(e) {
    if (sr(e), e.length === 0)
      return ".";
    for (var n = e.charCodeAt(0), i = n === 47, s = -1, c = !0, h = e.length - 1; h >= 1; --h)
      if (n = e.charCodeAt(h), n === 47) {
        if (!c) {
          s = h;
          break;
        }
      } else
        c = !1;
    return s === -1 ? i ? "/" : "." : i && s === 1 ? "//" : e.slice(0, s);
  },
  basename: function(e, n) {
    if (n !== void 0 && typeof n != "string")
      throw new TypeError('"ext" argument must be a string');
    sr(e);
    var i = 0, s = -1, c = !0, h;
    if (n !== void 0 && n.length > 0 && n.length <= e.length) {
      if (n.length === e.length && n === e)
        return "";
      var f = n.length - 1, v = -1;
      for (h = e.length - 1; h >= 0; --h) {
        var u = e.charCodeAt(h);
        if (u === 47) {
          if (!c) {
            i = h + 1;
            break;
          }
        } else
          v === -1 && (c = !1, v = h + 1), f >= 0 && (u === n.charCodeAt(f) ? --f === -1 && (s = h) : (f = -1, s = v));
      }
      return i === s ? s = v : s === -1 && (s = e.length), e.slice(i, s);
    } else {
      for (h = e.length - 1; h >= 0; --h)
        if (e.charCodeAt(h) === 47) {
          if (!c) {
            i = h + 1;
            break;
          }
        } else
          s === -1 && (c = !1, s = h + 1);
      return s === -1 ? "" : e.slice(i, s);
    }
  },
  extname: function(e) {
    sr(e);
    for (var n = -1, i = 0, s = -1, c = !0, h = 0, f = e.length - 1; f >= 0; --f) {
      var v = e.charCodeAt(f);
      if (v === 47) {
        if (!c) {
          i = f + 1;
          break;
        }
        continue;
      }
      s === -1 && (c = !1, s = f + 1), v === 46 ? n === -1 ? n = f : h !== 1 && (h = 1) : n !== -1 && (h = -1);
    }
    return n === -1 || s === -1 || // We saw a non-dot character immediately before the dot
    h === 0 || // The (right-most) trimmed path component is exactly '..'
    h === 1 && n === s - 1 && n === i + 1 ? "" : e.slice(n, s);
  },
  format: function(e) {
    if (e === null || typeof e != "object")
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
    return Qb("/", e);
  },
  parse: function(e) {
    sr(e);
    var n = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0)
      return n;
    var i = e.charCodeAt(0), s = i === 47, c;
    s ? (n.root = "/", c = 1) : c = 0;
    for (var h = -1, f = 0, v = -1, u = !0, a = e.length - 1, g = 0; a >= c; --a) {
      if (i = e.charCodeAt(a), i === 47) {
        if (!u) {
          f = a + 1;
          break;
        }
        continue;
      }
      v === -1 && (u = !1, v = a + 1), i === 46 ? h === -1 ? h = a : g !== 1 && (g = 1) : h !== -1 && (g = -1);
    }
    return h === -1 || v === -1 || // We saw a non-dot character immediately before the dot
    g === 0 || // The (right-most) trimmed path component is exactly '..'
    g === 1 && h === v - 1 && h === f + 1 ? v !== -1 && (f === 0 && s ? n.base = n.name = e.slice(1, v) : n.base = n.name = e.slice(f, v)) : (f === 0 && s ? (n.name = e.slice(1, h), n.base = e.slice(1, v)) : (n.name = e.slice(f, h), n.base = e.slice(f, v)), n.ext = e.slice(h, v)), f > 0 ? n.dir = e.slice(0, f - 1) : s && (n.dir = "/"), n;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
En.posix = En;
var Dr = En, Cn = {}, eE = Ve, tE = ot, rE = Qi, nE = tE("species"), Cs = function(r) {
  return rE >= 51 || !eE(function() {
    var e = [], n = e.constructor = {};
    return n[nE] = function() {
      return { foo: 1 };
    }, e[r](Boolean).foo !== 1;
  });
}, iE = Tt, oE = _s.map, aE = Cs, sE = aE("map");
iE({ target: "Array", proto: !0, forced: !sE }, {
  map: function(e) {
    return oE(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var uE = Jt, lE = function() {
  var r = uE(this), e = "";
  return r.hasIndices && (e += "d"), r.global && (e += "g"), r.ignoreCase && (e += "i"), r.multiline && (e += "m"), r.dotAll && (e += "s"), r.unicode && (e += "u"), r.unicodeSets && (e += "v"), r.sticky && (e += "y"), e;
}, Ls = Ve, cE = tt, Fs = cE.RegExp, ks = Ls(function() {
  var r = Fs("a", "y");
  return r.lastIndex = 2, r.exec("abcd") !== null;
}), fE = ks || Ls(function() {
  return !Fs("a", "y").sticky;
}), pE = ks || Ls(function() {
  var r = Fs("^r", "gy");
  return r.lastIndex = 2, r.exec("str") !== null;
}), bp = {
  BROKEN_CARET: pE,
  MISSED_STICKY: fE,
  UNSUPPORTED_Y: ks
}, hE = Ve, dE = tt, gE = dE.RegExp, mE = hE(function() {
  var r = gE(".", "s");
  return !(r.dotAll && r.test(`
`) && r.flags === "s");
}), vE = Ve, yE = tt, wE = yE.RegExp, bE = vE(function() {
  var r = wE("(?<a>b)", "g");
  return r.exec("b").groups.a !== "b" || "b".replace(r, "$<a>c") !== "bc";
}), mn = kt, mo = Be, EE = gr, TE = lE, $E = bp, SE = Rn, OE = oo, _E = ri.get, IE = mE, AE = bE, xE = SE("native-string-replace", String.prototype.replace), Vi = RegExp.prototype.exec, Ha = Vi, NE = mo("".charAt), RE = mo("".indexOf), PE = mo("".replace), ca = mo("".slice), Xa = function() {
  var r = /a/, e = /b*/g;
  return mn(Vi, r, "a"), mn(Vi, e, "a"), r.lastIndex !== 0 || e.lastIndex !== 0;
}(), Ep = $E.BROKEN_CARET, Ka = /()??/.exec("")[1] !== void 0, CE = Xa || Ka || Ep || IE || AE;
CE && (Ha = function(e) {
  var n = this, i = _E(n), s = EE(e), c = i.raw, h, f, v, u, a, g, d;
  if (c)
    return c.lastIndex = n.lastIndex, h = mn(Ha, c, s), n.lastIndex = c.lastIndex, h;
  var w = i.groups, $ = Ep && n.sticky, I = mn(TE, n), R = n.source, D = 0, _ = s;
  if ($ && (I = PE(I, "y", ""), RE(I, "g") === -1 && (I += "g"), _ = ca(s, n.lastIndex), n.lastIndex > 0 && (!n.multiline || n.multiline && NE(s, n.lastIndex - 1) !== `
`) && (R = "(?: " + R + ")", _ = " " + _, D++), f = new RegExp("^(?:" + R + ")", I)), Ka && (f = new RegExp("^" + R + "$(?!\\s)", I)), Xa && (v = n.lastIndex), u = mn(Vi, $ ? f : n, _), $ ? u ? (u.input = ca(u.input, D), u[0] = ca(u[0], D), u.index = n.lastIndex, n.lastIndex += u[0].length) : n.lastIndex = 0 : Xa && u && (n.lastIndex = n.global ? u.index + u[0].length : v), Ka && u && u.length > 1 && mn(xE, u[0], f, function() {
    for (a = 1; a < arguments.length - 2; a++)
      arguments[a] === void 0 && (u[a] = void 0);
  }), u && w)
    for (u.groups = g = OE(null), a = 0; a < w.length; a++)
      d = w[a], g[d[0]] = u[d[1]];
  return u;
});
var Ms = Ha, LE = Tt, Cl = Ms;
LE({ target: "RegExp", proto: !0, forced: /./.exec !== Cl }, {
  exec: Cl
});
var Ll = kt, Fl = Pr, FE = Ms, kl = Ve, Tp = ot, kE = ti, ME = Tp("species"), fa = RegExp.prototype, $p = function(r, e, n, i) {
  var s = Tp(r), c = !kl(function() {
    var u = {};
    return u[s] = function() {
      return 7;
    }, ""[r](u) !== 7;
  }), h = c && !kl(function() {
    var u = !1, a = /a/;
    return r === "split" && (a = {}, a.constructor = {}, a.constructor[ME] = function() {
      return a;
    }, a.flags = "", a[s] = /./[s]), a.exec = function() {
      return u = !0, null;
    }, a[s](""), !u;
  });
  if (!c || !h || n) {
    var f = /./[s], v = e(s, ""[r], function(u, a, g, d, w) {
      var $ = a.exec;
      return $ === FE || $ === fa.exec ? c && !w ? { done: !0, value: Ll(f, a, g, d) } : { done: !0, value: Ll(u, g, a, d) } : { done: !1 };
    });
    Fl(String.prototype, r, v[0]), Fl(fa, s, v[1]);
  }
  i && kE(fa[s], "sham", !0);
}, DE = Ff, UE = is, BE = TypeError, jE = function(r) {
  if (DE(r))
    return r;
  throw new BE(UE(r) + " is not a constructor");
}, Ml = Jt, GE = jE, WE = Qn, VE = ot, qE = VE("species"), zE = function(r, e) {
  var n = Ml(r).constructor, i;
  return n === void 0 || WE(i = Ml(n)[qE]) ? e : GE(i);
}, HE = bf.charAt, Sp = function(r, e, n) {
  return e + (n ? HE(r, e).length : 1);
}, Dl = kt, XE = Jt, KE = Ke, YE = Nr, ZE = Ms, JE = TypeError, Op = function(r, e) {
  var n = r.exec;
  if (KE(n)) {
    var i = Dl(n, r, e);
    return i !== null && XE(i), i;
  }
  if (YE(r) === "RegExp")
    return Dl(ZE, r, e);
  throw new JE("RegExp#exec called on incompatible receiver");
}, pa = kt, _p = Be, QE = $p, eT = Jt, tT = Qn, rT = Hr, nT = zE, iT = Sp, oT = hs, Ul = gr, aT = os, Bl = Op, sT = bp, uT = Ve, fn = sT.UNSUPPORTED_Y, lT = 4294967295, cT = Math.min, ha = _p([].push), da = _p("".slice), fT = !uT(function() {
  var r = /(?:)/, e = r.exec;
  r.exec = function() {
    return e.apply(this, arguments);
  };
  var n = "ab".split(r);
  return n.length !== 2 || n[0] !== "a" || n[1] !== "b";
}), jl = "abbc".split(/(b)*/)[1] === "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
"test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
".".split(/()()/).length > 1 || "".split(/.?/).length;
QE("split", function(r, e, n) {
  var i = "0".split(void 0, 0).length ? function(s, c) {
    return s === void 0 && c === 0 ? [] : pa(e, this, s, c);
  } : e;
  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function(c, h) {
      var f = rT(this), v = tT(c) ? void 0 : aT(c, r);
      return v ? pa(v, c, f, h) : pa(i, Ul(f), c, h);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function(s, c) {
      var h = eT(this), f = Ul(s);
      if (!jl) {
        var v = n(i, h, f, c, i !== e);
        if (v.done)
          return v.value;
      }
      var u = nT(h, RegExp), a = h.unicode, g = (h.ignoreCase ? "i" : "") + (h.multiline ? "m" : "") + (h.unicode ? "u" : "") + (fn ? "g" : "y"), d = new u(fn ? "^(?:" + h.source + ")" : h, g), w = c === void 0 ? lT : c >>> 0;
      if (w === 0)
        return [];
      if (f.length === 0)
        return Bl(d, f) === null ? [f] : [];
      for (var $ = 0, I = 0, R = []; I < f.length; ) {
        d.lastIndex = fn ? 0 : I;
        var D = Bl(d, fn ? da(f, I) : f), _;
        if (D === null || (_ = cT(oT(d.lastIndex + (fn ? I : 0)), f.length)) === $)
          I = iT(f, I, a);
        else {
          if (ha(R, da(f, $, I)), R.length === w)
            return R;
          for (var x = 1; x <= D.length - 1; x++)
            if (ha(R, D[x]), R.length === w)
              return R;
          I = $ = _;
        }
      }
      return ha(R, da(f, $)), R;
    }
  ];
}, jl || !fT, fn);
var Ds = Be, pT = Rr, hT = Math.floor, ga = Ds("".charAt), dT = Ds("".replace), ma = Ds("".slice), gT = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, mT = /\$([$&'`]|\d{1,2})/g, vT = function(r, e, n, i, s, c) {
  var h = n + r.length, f = i.length, v = mT;
  return s !== void 0 && (s = pT(s), v = gT), dT(c, v, function(u, a) {
    var g;
    switch (ga(a, 0)) {
      case "$":
        return "$";
      case "&":
        return r;
      case "`":
        return ma(e, 0, n);
      case "'":
        return ma(e, h);
      case "<":
        g = s[ma(a, 1, -1)];
        break;
      default:
        var d = +a;
        if (d === 0)
          return u;
        if (d > f) {
          var w = hT(d / 10);
          return w === 0 ? u : w <= f ? i[w - 1] === void 0 ? ga(a, 1) : i[w - 1] + ga(a, 1) : u;
        }
        g = i[d - 1];
    }
    return g === void 0 ? "" : g;
  });
}, yT = ep, Gl = kt, vo = Be, wT = $p, bT = Ve, ET = Jt, TT = Ke, $T = Qn, ST = no, OT = hs, pn = gr, _T = Hr, IT = Sp, AT = os, xT = vT, NT = Op, RT = ot, Ya = RT("replace"), PT = Math.max, CT = Math.min, LT = vo([].concat), va = vo([].push), Wl = vo("".indexOf), Vl = vo("".slice), FT = function(r) {
  return r === void 0 ? r : String(r);
}, kT = function() {
  return "a".replace(/./, "$0") === "$0";
}(), ql = function() {
  return /./[Ya] ? /./[Ya]("a", "$0") === "" : !1;
}(), MT = !bT(function() {
  var r = /./;
  return r.exec = function() {
    var e = [];
    return e.groups = { a: "7" }, e;
  }, "".replace(r, "$<a>") !== "7";
});
wT("replace", function(r, e, n) {
  var i = ql ? "$" : "$0";
  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function(c, h) {
      var f = _T(this), v = $T(c) ? void 0 : AT(c, Ya);
      return v ? Gl(v, c, f, h) : Gl(e, pn(f), c, h);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function(s, c) {
      var h = ET(this), f = pn(s);
      if (typeof c == "string" && Wl(c, i) === -1 && Wl(c, "$<") === -1) {
        var v = n(e, h, f, c);
        if (v.done)
          return v.value;
      }
      var u = TT(c);
      u || (c = pn(c));
      var a = h.global, g;
      a && (g = h.unicode, h.lastIndex = 0);
      for (var d = [], w; w = NT(h, f), !(w === null || (va(d, w), !a)); ) {
        var $ = pn(w[0]);
        $ === "" && (h.lastIndex = IT(f, OT(h.lastIndex), g));
      }
      for (var I = "", R = 0, D = 0; D < d.length; D++) {
        w = d[D];
        for (var _ = pn(w[0]), x = PT(CT(ST(w.index), f.length), 0), F = [], C, z = 1; z < w.length; z++)
          va(F, FT(w[z]));
        var q = w.groups;
        if (u) {
          var G = LT([_], F, x, f);
          q !== void 0 && va(G, q), C = pn(yT(c, void 0, G));
        } else
          C = xT(_, f, x, F, q, c);
        x >= R && (I += Vl(f, R, x) + C, R = x + _.length);
      }
      return I + Vl(f, R);
    }
  ];
}, !MT || !kT || ql);
var DT = Tt, UT = _s.filter, BT = Cs, jT = BT("filter");
DT({ target: "Array", proto: !0, forced: !jT }, {
  filter: function(e) {
    return UT(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var GT = eo, WT = Rr, VT = Zi, qT = io, zl = TypeError, Hl = "Reduce of empty array with no initial value", Xl = function(r) {
  return function(e, n, i, s) {
    var c = WT(e), h = VT(c), f = qT(c);
    if (GT(n), f === 0 && i < 2)
      throw new zl(Hl);
    var v = r ? f - 1 : 0, u = r ? -1 : 1;
    if (i < 2)
      for (; ; ) {
        if (v in h) {
          s = h[v], v += u;
          break;
        }
        if (v += u, r ? v < 0 : f <= v)
          throw new zl(Hl);
      }
    for (; r ? v >= 0 : f > v; v += u)
      v in h && (s = n(s, h[v], v, c));
    return s;
  };
}, zT = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: Xl(!1),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: Xl(!0)
}, HT = Ve, XT = function(r, e) {
  var n = [][r];
  return !!n && HT(function() {
    n.call(null, e || function() {
      return 1;
    }, 1);
  });
}, KT = tt, YT = Nr, ZT = YT(KT.process) === "process", JT = Tt, QT = zT.left, e$ = XT, Kl = Qi, t$ = ZT, r$ = !t$ && Kl > 79 && Kl < 83, n$ = r$ || !e$("reduce");
JT({ target: "Array", proto: !0, forced: n$ }, {
  reduce: function(e) {
    var n = arguments.length;
    return QT(this, e, n, n > 1 ? arguments[1] : void 0);
  }
});
var i$ = TypeError, o$ = 9007199254740991, a$ = function(r) {
  if (r > o$)
    throw i$("Maximum allowed index exceeded");
  return r;
}, s$ = Et, u$ = It, l$ = Jn, c$ = function(r, e, n) {
  s$ ? u$.f(r, e, l$(0, n)) : r[e] = n;
}, f$ = Tt, p$ = Ve, h$ = Ss, d$ = Zt, g$ = Rr, m$ = io, Yl = a$, Zl = c$, v$ = kf, y$ = Cs, w$ = ot, b$ = Qi, Ip = w$("isConcatSpreadable"), E$ = b$ >= 51 || !p$(function() {
  var r = [];
  return r[Ip] = !1, r.concat()[0] !== r;
}), T$ = function(r) {
  if (!d$(r))
    return !1;
  var e = r[Ip];
  return e !== void 0 ? !!e : h$(r);
}, $$ = !E$ || !y$("concat");
f$({ target: "Array", proto: !0, arity: 1, forced: $$ }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function(e) {
    var n = g$(this), i = v$(n, 0), s = 0, c, h, f, v, u;
    for (c = -1, f = arguments.length; c < f; c++)
      if (u = c === -1 ? n : arguments[c], T$(u))
        for (v = m$(u), Yl(s + v), h = 0; h < v; h++, s++)
          h in u && Zl(i, s, u[h]);
      else
        Yl(s + 1), Zl(i, s++, u);
    return i.length = s, i;
  }
});
Object.defineProperty(Cn, "__esModule", {
  value: !0
});
var S$ = Cn.encodePath = O$;
Cn.basename = _$;
Cn.dirname = I$;
Cn.joinPaths = Za;
Cn.isSamePath = A$;
function O$(r) {
  return r && r.split("/").map(encodeURIComponent).join("/");
}
function _$(r) {
  return r.replace(/\\/g, "/").replace(/.*\//, "");
}
function I$(r) {
  return r.replace(/\\/g, "/").replace(/\/[^\/]*$/, "");
}
function Za() {
  for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
    e[n] = arguments[n];
  if (arguments.length < 1)
    return "";
  var i = e.filter(function(a) {
    return a.length > 0;
  });
  if (i.length < 1)
    return "";
  var s = i[i.length - 1], c = i[0].charAt(0) === "/", h = s.charAt(s.length - 1) === "/", f = i.reduce(function(a, g) {
    return a.concat(g.split("/"));
  }, []), v = !c, u = f.reduce(function(a, g) {
    return g === "" ? a : v ? (v = !1, a + g) : a + "/" + g;
  }, "");
  return h ? u + "/" : u;
}
function A$(r, e) {
  var n = (r || "").split("/").filter(function(s) {
    return s !== ".";
  }), i = (e || "").split("/").filter(function(s) {
    return s !== ".";
  });
  return r = Za.apply(void 0, n), e = Za.apply(void 0, i), r === e;
}
const x$ = (r) => "/remote.php/" + r, N$ = (r, e) => {
  var n;
  return ((n = e == null ? void 0 : e.baseURL) != null ? n : R$()) + x$(r);
}, R$ = () => window.location.protocol + "//" + window.location.host + P$();
function P$() {
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
/*! For license information please see index.js.LICENSE.txt */
var C$ = { 2: (r) => {
  function e(s, c, h) {
    s instanceof RegExp && (s = n(s, h)), c instanceof RegExp && (c = n(c, h));
    var f = i(s, c, h);
    return f && { start: f[0], end: f[1], pre: h.slice(0, f[0]), body: h.slice(f[0] + s.length, f[1]), post: h.slice(f[1] + c.length) };
  }
  function n(s, c) {
    var h = c.match(s);
    return h ? h[0] : null;
  }
  function i(s, c, h) {
    var f, v, u, a, g, d = h.indexOf(s), w = h.indexOf(c, d + 1), $ = d;
    if (d >= 0 && w > 0) {
      for (f = [], u = h.length; $ >= 0 && !g; )
        $ == d ? (f.push($), d = h.indexOf(s, $ + 1)) : f.length == 1 ? g = [f.pop(), w] : ((v = f.pop()) < u && (u = v, a = w), w = h.indexOf(c, $ + 1)), $ = d < w && d >= 0 ? d : w;
      f.length && (g = [u, a]);
    }
    return g;
  }
  r.exports = e, e.range = i;
}, 101: function(r, e, n) {
  var i;
  r = n.nmd(r), function(s) {
    var c = (r && r.exports, typeof hi == "object" && hi);
    c.global !== c && c.window;
    var h = function(g) {
      this.message = g;
    };
    (h.prototype = new Error()).name = "InvalidCharacterError";
    var f = function(g) {
      throw new h(g);
    }, v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = /[\t\n\f\r ]/g, a = { encode: function(g) {
      g = String(g), /[^\0-\xFF]/.test(g) && f("The string to be encoded contains characters outside of the Latin1 range.");
      for (var d, w, $, I, R = g.length % 3, D = "", _ = -1, x = g.length - R; ++_ < x; )
        d = g.charCodeAt(_) << 16, w = g.charCodeAt(++_) << 8, $ = g.charCodeAt(++_), D += v.charAt((I = d + w + $) >> 18 & 63) + v.charAt(I >> 12 & 63) + v.charAt(I >> 6 & 63) + v.charAt(63 & I);
      return R == 2 ? (d = g.charCodeAt(_) << 8, w = g.charCodeAt(++_), D += v.charAt((I = d + w) >> 10) + v.charAt(I >> 4 & 63) + v.charAt(I << 2 & 63) + "=") : R == 1 && (I = g.charCodeAt(_), D += v.charAt(I >> 2) + v.charAt(I << 4 & 63) + "=="), D;
    }, decode: function(g) {
      var d = (g = String(g).replace(u, "")).length;
      d % 4 == 0 && (d = (g = g.replace(/==?$/, "")).length), (d % 4 == 1 || /[^+a-zA-Z0-9/]/.test(g)) && f("Invalid character: the string to be decoded is not correctly encoded.");
      for (var w, $, I = 0, R = "", D = -1; ++D < d; )
        $ = v.indexOf(g.charAt(D)), w = I % 4 ? 64 * w + $ : $, I++ % 4 && (R += String.fromCharCode(255 & w >> (-2 * I & 6)));
      return R;
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
    for (var s = [], c = 0, h = 0; c < i.length; c++, h += 8)
      s[h >>> 5] |= i[c] << 24 - h % 32;
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
      for (var h = i[c] << 16 | i[c + 1] << 8 | i[c + 2], f = 0; f < 4; f++)
        8 * c + 6 * f <= 8 * i.length ? s.push(e.charAt(h >>> 6 * (3 - f) & 63)) : s.push("=");
    return s.join("");
  }, base64ToBytes: function(i) {
    i = i.replace(/[^A-Z0-9+\/]/gi, "");
    for (var s = [], c = 0, h = 0; c < i.length; h = ++c % 4)
      h != 0 && s.push((e.indexOf(i.charAt(c - 1)) & Math.pow(2, -2 * h + 8) - 1) << 2 * h | e.indexOf(i.charAt(c)) >>> 6 - 2 * h);
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
  }, e.merge = function(c, h, f) {
    if (h) {
      const v = Object.keys(h), u = v.length;
      for (let a = 0; a < u; a++)
        c[v[a]] = f === "strict" ? [h[v[a]]] : h[v[a]];
    }
  }, e.getValue = function(c) {
    return e.isExist(c) ? c : "";
  }, e.isName = function(c) {
    return s.exec(c) != null;
  }, e.getAllMatches = function(c, h) {
    const f = [];
    let v = h.exec(c);
    for (; v; ) {
      const u = [];
      u.startIndex = h.lastIndex - v[0].length;
      const a = v.length;
      for (let g = 0; g < a; g++)
        u.push(v[g]);
      f.push(u), v = h.exec(c);
    }
    return f;
  }, e.nameRegexp = i;
}, 31: (r, e, n) => {
  const i = n(705), s = { allowBooleanAttributes: !1, unpairedTags: [] };
  function c(_) {
    return _ === " " || _ === "	" || _ === `
` || _ === "\r";
  }
  function h(_, x) {
    const F = x;
    for (; x < _.length; x++)
      if (!(_[x] != "?" && _[x] != " ")) {
        const C = _.substr(F, x - F);
        if (x > 5 && C === "xml")
          return $("InvalidXml", "XML declaration allowed only at the start of the document.", R(_, x));
        if (_[x] == "?" && _[x + 1] == ">") {
          x++;
          break;
        }
      }
    return x;
  }
  function f(_, x) {
    if (_.length > x + 5 && _[x + 1] === "-" && _[x + 2] === "-") {
      for (x += 3; x < _.length; x++)
        if (_[x] === "-" && _[x + 1] === "-" && _[x + 2] === ">") {
          x += 2;
          break;
        }
    } else if (_.length > x + 8 && _[x + 1] === "D" && _[x + 2] === "O" && _[x + 3] === "C" && _[x + 4] === "T" && _[x + 5] === "Y" && _[x + 6] === "P" && _[x + 7] === "E") {
      let F = 1;
      for (x += 8; x < _.length; x++)
        if (_[x] === "<")
          F++;
        else if (_[x] === ">" && (F--, F === 0))
          break;
    } else if (_.length > x + 9 && _[x + 1] === "[" && _[x + 2] === "C" && _[x + 3] === "D" && _[x + 4] === "A" && _[x + 5] === "T" && _[x + 6] === "A" && _[x + 7] === "[") {
      for (x += 8; x < _.length; x++)
        if (_[x] === "]" && _[x + 1] === "]" && _[x + 2] === ">") {
          x += 2;
          break;
        }
    }
    return x;
  }
  e.validate = function(_, x) {
    x = Object.assign({}, s, x);
    const F = [];
    let C = !1, z = !1;
    _[0] === "\uFEFF" && (_ = _.substr(1));
    for (let G = 0; G < _.length; G++)
      if (_[G] === "<" && _[G + 1] === "?") {
        if (G += 2, G = h(_, G), G.err)
          return G;
      } else {
        if (_[G] !== "<") {
          if (c(_[G]))
            continue;
          return $("InvalidChar", "char '" + _[G] + "' is not expected.", R(_, G));
        }
        {
          let X = G;
          if (G++, _[G] === "!") {
            G = f(_, G);
            continue;
          }
          {
            let Z = !1;
            _[G] === "/" && (Z = !0, G++);
            let H = "";
            for (; G < _.length && _[G] !== ">" && _[G] !== " " && _[G] !== "	" && _[G] !== `
` && _[G] !== "\r"; G++)
              H += _[G];
            if (H = H.trim(), H[H.length - 1] === "/" && (H = H.substring(0, H.length - 1), G--), q = H, !i.isName(q)) {
              let re;
              return re = H.trim().length === 0 ? "Invalid space after '<'." : "Tag '" + H + "' is an invalid name.", $("InvalidTag", re, R(_, G));
            }
            const Y = a(_, G);
            if (Y === !1)
              return $("InvalidAttr", "Attributes for '" + H + "' have open quote.", R(_, G));
            let V = Y.value;
            if (G = Y.index, V[V.length - 1] === "/") {
              const re = G - V.length;
              V = V.substring(0, V.length - 1);
              const he = d(V, x);
              if (he !== !0)
                return $(he.err.code, he.err.msg, R(_, re + he.err.line));
              C = !0;
            } else if (Z) {
              if (!Y.tagClosed)
                return $("InvalidTag", "Closing tag '" + H + "' doesn't have proper closing.", R(_, G));
              if (V.trim().length > 0)
                return $("InvalidTag", "Closing tag '" + H + "' can't have attributes or invalid starting.", R(_, X));
              {
                const re = F.pop();
                if (H !== re.tagName) {
                  let he = R(_, re.tagStartPos);
                  return $("InvalidTag", "Expected closing tag '" + re.tagName + "' (opened in line " + he.line + ", col " + he.col + ") instead of closing tag '" + H + "'.", R(_, X));
                }
                F.length == 0 && (z = !0);
              }
            } else {
              const re = d(V, x);
              if (re !== !0)
                return $(re.err.code, re.err.msg, R(_, G - V.length + re.err.line));
              if (z === !0)
                return $("InvalidXml", "Multiple possible root nodes found.", R(_, G));
              x.unpairedTags.indexOf(H) !== -1 || F.push({ tagName: H, tagStartPos: X }), C = !0;
            }
            for (G++; G < _.length; G++)
              if (_[G] === "<") {
                if (_[G + 1] === "!") {
                  G++, G = f(_, G);
                  continue;
                }
                if (_[G + 1] !== "?")
                  break;
                if (G = h(_, ++G), G.err)
                  return G;
              } else if (_[G] === "&") {
                const re = w(_, G);
                if (re == -1)
                  return $("InvalidChar", "char '&' is not expected.", R(_, G));
                G = re;
              } else if (z === !0 && !c(_[G]))
                return $("InvalidXml", "Extra text at the end", R(_, G));
            _[G] === "<" && G--;
          }
        }
      }
    var q;
    return C ? F.length == 1 ? $("InvalidTag", "Unclosed tag '" + F[0].tagName + "'.", R(_, F[0].tagStartPos)) : !(F.length > 0) || $("InvalidXml", "Invalid '" + JSON.stringify(F.map((G) => G.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 }) : $("InvalidXml", "Start tag expected.", 1);
  };
  const v = '"', u = "'";
  function a(_, x) {
    let F = "", C = "", z = !1;
    for (; x < _.length; x++) {
      if (_[x] === v || _[x] === u)
        C === "" ? C = _[x] : C !== _[x] || (C = "");
      else if (_[x] === ">" && C === "") {
        z = !0;
        break;
      }
      F += _[x];
    }
    return C === "" && { value: F, index: x, tagClosed: z };
  }
  const g = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
  function d(_, x) {
    const F = i.getAllMatches(_, g), C = {};
    for (let z = 0; z < F.length; z++) {
      if (F[z][1].length === 0)
        return $("InvalidAttr", "Attribute '" + F[z][2] + "' has no space in starting.", D(F[z]));
      if (F[z][3] !== void 0 && F[z][4] === void 0)
        return $("InvalidAttr", "Attribute '" + F[z][2] + "' is without value.", D(F[z]));
      if (F[z][3] === void 0 && !x.allowBooleanAttributes)
        return $("InvalidAttr", "boolean attribute '" + F[z][2] + "' is not allowed.", D(F[z]));
      const q = F[z][2];
      if (!I(q))
        return $("InvalidAttr", "Attribute '" + q + "' is an invalid name.", D(F[z]));
      if (C.hasOwnProperty(q))
        return $("InvalidAttr", "Attribute '" + q + "' is repeated.", D(F[z]));
      C[q] = 1;
    }
    return !0;
  }
  function w(_, x) {
    if (_[++x] === ";")
      return -1;
    if (_[x] === "#")
      return function(C, z) {
        let q = /\d/;
        for (C[z] === "x" && (z++, q = /[\da-fA-F]/); z < C.length; z++) {
          if (C[z] === ";")
            return z;
          if (!C[z].match(q))
            break;
        }
        return -1;
      }(_, ++x);
    let F = 0;
    for (; x < _.length; x++, F++)
      if (!(_[x].match(/\w/) && F < 20)) {
        if (_[x] === ";")
          break;
        return -1;
      }
    return x;
  }
  function $(_, x, F) {
    return { err: { code: _, msg: x, line: F.line || F, col: F.col } };
  }
  function I(_) {
    return i.isName(_);
  }
  function R(_, x) {
    const F = _.substring(0, x).split(/\r?\n/);
    return { line: F.length, col: F[F.length - 1].length + 1 };
  }
  function D(_) {
    return _.startIndex + _[1].length;
  }
}, 221: (r, e, n) => {
  const i = n(87), s = { attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, cdataPropName: !1, format: !1, indentBy: "  ", suppressEmptyNode: !1, suppressUnpairedNode: !0, suppressBooleanAttributes: !0, tagValueProcessor: function(u, a) {
    return a;
  }, attributeValueProcessor: function(u, a) {
    return a;
  }, preserveOrder: !1, commentPropName: !1, unpairedTags: [], entities: [{ regex: new RegExp("&", "g"), val: "&amp;" }, { regex: new RegExp(">", "g"), val: "&gt;" }, { regex: new RegExp("<", "g"), val: "&lt;" }, { regex: new RegExp("'", "g"), val: "&apos;" }, { regex: new RegExp('"', "g"), val: "&quot;" }], processEntities: !0, stopNodes: [], oneListGroup: !1 };
  function c(u) {
    this.options = Object.assign({}, s, u), this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function() {
      return !1;
    } : (this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = v), this.processTextOrObjNode = h, this.options.format ? (this.indentate = f, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
      return "";
    }, this.tagEndChar = ">", this.newLine = "");
  }
  function h(u, a, g) {
    const d = this.j2x(u, g + 1);
    return u[this.options.textNodeName] !== void 0 && Object.keys(u).length === 1 ? this.buildTextValNode(u[this.options.textNodeName], a, d.attrStr, g) : this.buildObjectNode(d.val, a, d.attrStr, g);
  }
  function f(u) {
    return this.options.indentBy.repeat(u);
  }
  function v(u) {
    return !(!u.startsWith(this.options.attributeNamePrefix) || u === this.options.textNodeName) && u.substr(this.attrPrefixLen);
  }
  c.prototype.build = function(u) {
    return this.options.preserveOrder ? i(u, this.options) : (Array.isArray(u) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (u = { [this.options.arrayNodeName]: u }), this.j2x(u, 0).val);
  }, c.prototype.j2x = function(u, a) {
    let g = "", d = "";
    for (let w in u)
      if (u[w] === void 0)
        this.isAttribute(w) && (d += "");
      else if (u[w] === null)
        this.isAttribute(w) ? d += "" : w[0] === "?" ? d += this.indentate(a) + "<" + w + "?" + this.tagEndChar : d += this.indentate(a) + "<" + w + "/" + this.tagEndChar;
      else if (u[w] instanceof Date)
        d += this.buildTextValNode(u[w], w, "", a);
      else if (typeof u[w] != "object") {
        const $ = this.isAttribute(w);
        if ($)
          g += this.buildAttrPairStr($, "" + u[w]);
        else if (w === this.options.textNodeName) {
          let I = this.options.tagValueProcessor(w, "" + u[w]);
          d += this.replaceEntitiesValue(I);
        } else
          d += this.buildTextValNode(u[w], w, "", a);
      } else if (Array.isArray(u[w])) {
        const $ = u[w].length;
        let I = "";
        for (let R = 0; R < $; R++) {
          const D = u[w][R];
          D === void 0 || (D === null ? w[0] === "?" ? d += this.indentate(a) + "<" + w + "?" + this.tagEndChar : d += this.indentate(a) + "<" + w + "/" + this.tagEndChar : typeof D == "object" ? this.options.oneListGroup ? I += this.j2x(D, a + 1).val : I += this.processTextOrObjNode(D, w, a) : I += this.buildTextValNode(D, w, "", a));
        }
        this.options.oneListGroup && (I = this.buildObjectNode(I, w, "", a)), d += I;
      } else if (this.options.attributesGroupName && w === this.options.attributesGroupName) {
        const $ = Object.keys(u[w]), I = $.length;
        for (let R = 0; R < I; R++)
          g += this.buildAttrPairStr($[R], "" + u[w][$[R]]);
      } else
        d += this.processTextOrObjNode(u[w], w, a);
    return { attrStr: g, val: d };
  }, c.prototype.buildAttrPairStr = function(u, a) {
    return a = this.options.attributeValueProcessor(u, "" + a), a = this.replaceEntitiesValue(a), this.options.suppressBooleanAttributes && a === "true" ? " " + u : " " + u + '="' + a + '"';
  }, c.prototype.buildObjectNode = function(u, a, g, d) {
    if (u === "")
      return a[0] === "?" ? this.indentate(d) + "<" + a + g + "?" + this.tagEndChar : this.indentate(d) + "<" + a + g + this.closeTag(a) + this.tagEndChar;
    {
      let w = "</" + a + this.tagEndChar, $ = "";
      return a[0] === "?" && ($ = "?", w = ""), !g && g !== "" || u.indexOf("<") !== -1 ? this.options.commentPropName !== !1 && a === this.options.commentPropName && $.length === 0 ? this.indentate(d) + "<!--".concat(u, "-->") + this.newLine : this.indentate(d) + "<" + a + g + $ + this.tagEndChar + u + this.indentate(d) + w : this.indentate(d) + "<" + a + g + $ + ">" + u + w;
    }
  }, c.prototype.closeTag = function(u) {
    let a = "";
    return this.options.unpairedTags.indexOf(u) !== -1 ? this.options.suppressUnpairedNode || (a = "/") : a = this.options.suppressEmptyNode ? "/" : "></".concat(u), a;
  }, c.prototype.buildTextValNode = function(u, a, g, d) {
    if (this.options.cdataPropName !== !1 && a === this.options.cdataPropName)
      return this.indentate(d) + "<![CDATA[".concat(u, "]]>") + this.newLine;
    if (this.options.commentPropName !== !1 && a === this.options.commentPropName)
      return this.indentate(d) + "<!--".concat(u, "-->") + this.newLine;
    if (a[0] === "?")
      return this.indentate(d) + "<" + a + g + "?" + this.tagEndChar;
    {
      let w = this.options.tagValueProcessor(a, u);
      return w = this.replaceEntitiesValue(w), w === "" ? this.indentate(d) + "<" + a + g + this.closeTag(a) + this.tagEndChar : this.indentate(d) + "<" + a + g + ">" + w + "</" + a + this.tagEndChar;
    }
  }, c.prototype.replaceEntitiesValue = function(u) {
    if (u && u.length > 0 && this.options.processEntities)
      for (let a = 0; a < this.options.entities.length; a++) {
        const g = this.options.entities[a];
        u = u.replace(g.regex, g.val);
      }
    return u;
  }, r.exports = c;
}, 87: (r) => {
  function e(h, f, v, u) {
    let a = "", g = !1;
    for (let d = 0; d < h.length; d++) {
      const w = h[d], $ = n(w);
      let I = "";
      if (I = v.length === 0 ? $ : "".concat(v, ".").concat($), $ === f.textNodeName) {
        let F = w[$];
        s(I, f) || (F = f.tagValueProcessor($, F), F = c(F, f)), g && (a += u), a += F, g = !1;
        continue;
      }
      if ($ === f.cdataPropName) {
        g && (a += u), a += "<![CDATA[".concat(w[$][0][f.textNodeName], "]]>"), g = !1;
        continue;
      }
      if ($ === f.commentPropName) {
        a += u + "<!--".concat(w[$][0][f.textNodeName], "-->"), g = !0;
        continue;
      }
      if ($[0] === "?") {
        const F = i(w[":@"], f), C = $ === "?xml" ? "" : u;
        let z = w[$][0][f.textNodeName];
        z = z.length !== 0 ? " " + z : "", a += C + "<".concat($).concat(z).concat(F, "?>"), g = !0;
        continue;
      }
      let R = u;
      R !== "" && (R += f.indentBy);
      const D = i(w[":@"], f), _ = u + "<".concat($).concat(D), x = e(w[$], f, I, R);
      f.unpairedTags.indexOf($) !== -1 ? f.suppressUnpairedNode ? a += _ + ">" : a += _ + "/>" : x && x.length !== 0 || !f.suppressEmptyNode ? x && x.endsWith(">") ? a += _ + ">".concat(x).concat(u, "</").concat($, ">") : (a += _ + ">", x && u !== "" && (x.includes("/>") || x.includes("</")) ? a += u + f.indentBy + x + u : a += x, a += "</".concat($, ">")) : a += _ + "/>", g = !0;
    }
    return a;
  }
  function n(h) {
    const f = Object.keys(h);
    for (let v = 0; v < f.length; v++) {
      const u = f[v];
      if (u !== ":@")
        return u;
    }
  }
  function i(h, f) {
    let v = "";
    if (h && !f.ignoreAttributes)
      for (let u in h) {
        let a = f.attributeValueProcessor(u, h[u]);
        a = c(a, f), a === !0 && f.suppressBooleanAttributes ? v += " ".concat(u.substr(f.attributeNamePrefix.length)) : v += " ".concat(u.substr(f.attributeNamePrefix.length), '="').concat(a, '"');
      }
    return v;
  }
  function s(h, f) {
    let v = (h = h.substr(0, h.length - f.textNodeName.length - 1)).substr(h.lastIndexOf(".") + 1);
    for (let u in f.stopNodes)
      if (f.stopNodes[u] === h || f.stopNodes[u] === "*." + v)
        return !0;
    return !1;
  }
  function c(h, f) {
    if (h && h.length > 0 && f.processEntities)
      for (let v = 0; v < f.entities.length; v++) {
        const u = f.entities[v];
        h = h.replace(u.regex, u.val);
      }
    return h;
  }
  r.exports = function(h, f) {
    let v = "";
    return f.format && f.indentBy.length > 0 && (v = `
`), e(h, f, "", v);
  };
}, 193: (r, e, n) => {
  const i = n(705);
  function s(g, d) {
    let w = "";
    for (; d < g.length && g[d] !== "'" && g[d] !== '"'; d++)
      w += g[d];
    if (w = w.trim(), w.indexOf(" ") !== -1)
      throw new Error("External entites are not supported");
    const $ = g[d++];
    let I = "";
    for (; d < g.length && g[d] !== $; d++)
      I += g[d];
    return [w, I, d];
  }
  function c(g, d) {
    return g[d + 1] === "!" && g[d + 2] === "-" && g[d + 3] === "-";
  }
  function h(g, d) {
    return g[d + 1] === "!" && g[d + 2] === "E" && g[d + 3] === "N" && g[d + 4] === "T" && g[d + 5] === "I" && g[d + 6] === "T" && g[d + 7] === "Y";
  }
  function f(g, d) {
    return g[d + 1] === "!" && g[d + 2] === "E" && g[d + 3] === "L" && g[d + 4] === "E" && g[d + 5] === "M" && g[d + 6] === "E" && g[d + 7] === "N" && g[d + 8] === "T";
  }
  function v(g, d) {
    return g[d + 1] === "!" && g[d + 2] === "A" && g[d + 3] === "T" && g[d + 4] === "T" && g[d + 5] === "L" && g[d + 6] === "I" && g[d + 7] === "S" && g[d + 8] === "T";
  }
  function u(g, d) {
    return g[d + 1] === "!" && g[d + 2] === "N" && g[d + 3] === "O" && g[d + 4] === "T" && g[d + 5] === "A" && g[d + 6] === "T" && g[d + 7] === "I" && g[d + 8] === "O" && g[d + 9] === "N";
  }
  function a(g) {
    if (i.isName(g))
      return g;
    throw new Error("Invalid entity name ".concat(g));
  }
  r.exports = function(g, d) {
    const w = {};
    if (g[d + 3] !== "O" || g[d + 4] !== "C" || g[d + 5] !== "T" || g[d + 6] !== "Y" || g[d + 7] !== "P" || g[d + 8] !== "E")
      throw new Error("Invalid Tag instead of DOCTYPE");
    {
      d += 9;
      let $ = 1, I = !1, R = !1, D = "";
      for (; d < g.length; d++)
        if (g[d] !== "<" || R)
          if (g[d] === ">") {
            if (R ? g[d - 1] === "-" && g[d - 2] === "-" && (R = !1, $--) : $--, $ === 0)
              break;
          } else
            g[d] === "[" ? I = !0 : D += g[d];
        else {
          if (I && h(g, d))
            d += 7, [entityName, val, d] = s(g, d + 1), val.indexOf("&") === -1 && (w[a(entityName)] = { regx: RegExp("&".concat(entityName, ";"), "g"), val });
          else if (I && f(g, d))
            d += 8;
          else if (I && v(g, d))
            d += 8;
          else if (I && u(g, d))
            d += 9;
          else {
            if (!c)
              throw new Error("Invalid DOCTYPE");
            R = !0;
          }
          $++, D = "";
        }
      if ($ !== 0)
        throw new Error("Unclosed DOCTYPE");
    }
    return { entities: w, i: d };
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
  const i = n(705), s = n(365), c = n(193), h = n(494);
  function f(C) {
    const z = Object.keys(C);
    for (let q = 0; q < z.length; q++) {
      const G = z[q];
      this.lastEntities[G] = { regex: new RegExp("&" + G + ";", "g"), val: C[G] };
    }
  }
  function v(C, z, q, G, X, Z, H) {
    if (C !== void 0 && (this.options.trimValues && !G && (C = C.trim()), C.length > 0)) {
      H || (C = this.replaceEntitiesValue(C));
      const Y = this.options.tagValueProcessor(z, C, q, X, Z);
      return Y == null ? C : typeof Y != typeof C || Y !== C ? Y : this.options.trimValues || C.trim() === C ? F(C, this.options.parseTagValue, this.options.numberParseOptions) : C;
    }
  }
  function u(C) {
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
  function g(C, z, q) {
    if (!this.options.ignoreAttributes && typeof C == "string") {
      const G = i.getAllMatches(C, a), X = G.length, Z = {};
      for (let H = 0; H < X; H++) {
        const Y = this.resolveNameSpace(G[H][1]);
        let V = G[H][4], re = this.options.attributeNamePrefix + Y;
        if (Y.length)
          if (this.options.transformAttributeName && (re = this.options.transformAttributeName(re)), re === "__proto__" && (re = "#__proto__"), V !== void 0) {
            this.options.trimValues && (V = V.trim()), V = this.replaceEntitiesValue(V);
            const he = this.options.attributeValueProcessor(Y, V, z);
            Z[re] = he == null ? V : typeof he != typeof V || he !== V ? he : F(V, this.options.parseAttributeValue, this.options.numberParseOptions);
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
  const d = function(C) {
    C = C.replace(/\r\n?/g, `
`);
    const z = new s("!xml");
    let q = z, G = "", X = "";
    for (let Z = 0; Z < C.length; Z++)
      if (C[Z] === "<")
        if (C[Z + 1] === "/") {
          const H = D(C, ">", Z, "Closing Tag is not closed.");
          let Y = C.substring(Z + 2, H).trim();
          if (this.options.removeNSPrefix) {
            const he = Y.indexOf(":");
            he !== -1 && (Y = Y.substr(he + 1));
          }
          this.options.transformTagName && (Y = this.options.transformTagName(Y)), q && (G = this.saveTextToParentTag(G, q, X));
          const V = X.substring(X.lastIndexOf(".") + 1);
          if (Y && this.options.unpairedTags.indexOf(Y) !== -1)
            throw new Error("Unpaired tag can not be used as closing tag: </".concat(Y, ">"));
          let re = 0;
          V && this.options.unpairedTags.indexOf(V) !== -1 ? (re = X.lastIndexOf(".", X.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : re = X.lastIndexOf("."), X = X.substring(0, re), q = this.tagsNodeStack.pop(), G = "", Z = H;
        } else if (C[Z + 1] === "?") {
          let H = _(C, Z, !1, "?>");
          if (!H)
            throw new Error("Pi Tag is not closed.");
          if (G = this.saveTextToParentTag(G, q, X), !(this.options.ignoreDeclaration && H.tagName === "?xml" || this.options.ignorePiTags)) {
            const Y = new s(H.tagName);
            Y.add(this.options.textNodeName, ""), H.tagName !== H.tagExp && H.attrExpPresent && (Y[":@"] = this.buildAttributesMap(H.tagExp, X, H.tagName)), this.addChild(q, Y, X);
          }
          Z = H.closeIndex + 1;
        } else if (C.substr(Z + 1, 3) === "!--") {
          const H = D(C, "-->", Z + 4, "Comment is not closed.");
          if (this.options.commentPropName) {
            const Y = C.substring(Z + 4, H - 2);
            G = this.saveTextToParentTag(G, q, X), q.add(this.options.commentPropName, [{ [this.options.textNodeName]: Y }]);
          }
          Z = H;
        } else if (C.substr(Z + 1, 2) === "!D") {
          const H = c(C, Z);
          this.docTypeEntities = H.entities, Z = H.i;
        } else if (C.substr(Z + 1, 2) === "![") {
          const H = D(C, "]]>", Z, "CDATA is not closed.") - 2, Y = C.substring(Z + 9, H);
          if (G = this.saveTextToParentTag(G, q, X), this.options.cdataPropName)
            q.add(this.options.cdataPropName, [{ [this.options.textNodeName]: Y }]);
          else {
            let V = this.parseTextData(Y, q.tagname, X, !0, !1, !0);
            V == null && (V = ""), q.add(this.options.textNodeName, V);
          }
          Z = H + 2;
        } else {
          let H = _(C, Z, this.options.removeNSPrefix), Y = H.tagName, V = H.tagExp, re = H.attrExpPresent, he = H.closeIndex;
          this.options.transformTagName && (Y = this.options.transformTagName(Y)), q && G && q.tagname !== "!xml" && (G = this.saveTextToParentTag(G, q, X, !1));
          const xe = q;
          if (xe && this.options.unpairedTags.indexOf(xe.tagname) !== -1 && (q = this.tagsNodeStack.pop(), X = X.substring(0, X.lastIndexOf("."))), Y !== z.tagname && (X += X ? "." + Y : Y), this.isItStopNode(this.options.stopNodes, X, Y)) {
            let fe = "";
            if (V.length > 0 && V.lastIndexOf("/") === V.length - 1)
              Z = H.closeIndex;
            else if (this.options.unpairedTags.indexOf(Y) !== -1)
              Z = H.closeIndex;
            else {
              const ye = this.readStopNodeData(C, Y, he + 1);
              if (!ye)
                throw new Error("Unexpected end of ".concat(Y));
              Z = ye.i, fe = ye.tagContent;
            }
            const Te = new s(Y);
            Y !== V && re && (Te[":@"] = this.buildAttributesMap(V, X, Y)), fe && (fe = this.parseTextData(fe, Y, X, !0, re, !0, !0)), X = X.substr(0, X.lastIndexOf(".")), Te.add(this.options.textNodeName, fe), this.addChild(q, Te, X);
          } else {
            if (V.length > 0 && V.lastIndexOf("/") === V.length - 1) {
              Y[Y.length - 1] === "/" ? (Y = Y.substr(0, Y.length - 1), X = X.substr(0, X.length - 1), V = Y) : V = V.substr(0, V.length - 1), this.options.transformTagName && (Y = this.options.transformTagName(Y));
              const fe = new s(Y);
              Y !== V && re && (fe[":@"] = this.buildAttributesMap(V, X, Y)), this.addChild(q, fe, X), X = X.substr(0, X.lastIndexOf("."));
            } else {
              const fe = new s(Y);
              this.tagsNodeStack.push(q), Y !== V && re && (fe[":@"] = this.buildAttributesMap(V, X, Y)), this.addChild(q, fe, X), q = fe;
            }
            G = "", Z = he;
          }
        }
      else
        G += C[Z];
    return z.child;
  };
  function w(C, z, q) {
    const G = this.options.updateTag(z.tagname, q, z[":@"]);
    G === !1 || (typeof G == "string" && (z.tagname = G), C.addChild(z));
  }
  const $ = function(C) {
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
  function I(C, z, q, G) {
    return C && (G === void 0 && (G = Object.keys(z.child).length === 0), (C = this.parseTextData(C, z.tagname, q, !1, !!z[":@"] && Object.keys(z[":@"]).length !== 0, G)) !== void 0 && C !== "" && z.add(this.options.textNodeName, C), C = ""), C;
  }
  function R(C, z, q) {
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
  function _(C, z, q) {
    const G = function(re, he) {
      let xe, fe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ">", Te = "";
      for (let ye = he; ye < re.length; ye++) {
        let De = re[ye];
        if (xe)
          De === xe && (xe = "");
        else if (De === '"' || De === "'")
          xe = De;
        else if (De === fe[0]) {
          if (!fe[1])
            return { data: Te, index: ye };
          if (re[ye + 1] === fe[1])
            return { data: Te, index: ye };
        } else
          De === "	" && (De = " ");
        Te += De;
      }
    }(C, z + 1, arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ">");
    if (!G)
      return;
    let X = G.data;
    const Z = G.index, H = X.search(/\s/);
    let Y = X, V = !0;
    if (H !== -1 && (Y = X.substr(0, H).replace(/\s\s*$/, ""), X = X.substr(H + 1)), q) {
      const re = Y.indexOf(":");
      re !== -1 && (Y = Y.substr(re + 1), V = Y !== G.data.substr(re + 1));
    }
    return { tagName: Y, tagExp: X, closeIndex: Z, attrExpPresent: V };
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
          const Z = _(C, q, ">");
          Z && ((Z && Z.tagName) === z && Z.tagExp[Z.tagExp.length - 1] !== "/" && X++, q = Z.closeIndex);
        }
  }
  function F(C, z, q) {
    if (z && typeof C == "string") {
      const G = C.trim();
      return G === "true" || G !== "false" && h(C, q);
    }
    return i.isExist(C) ? C : "";
  }
  r.exports = class {
    constructor(C) {
      this.options = C, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = { apos: { regex: /&(apos|#39|#x27);/g, val: "'" }, gt: { regex: /&(gt|#62|#x3E);/g, val: ">" }, lt: { regex: /&(lt|#60|#x3C);/g, val: "<" }, quot: { regex: /&(quot|#34|#x22);/g, val: '"' } }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = { space: { regex: /&(nbsp|#160);/g, val: " " }, cent: { regex: /&(cent|#162);/g, val: "¢" }, pound: { regex: /&(pound|#163);/g, val: "£" }, yen: { regex: /&(yen|#165);/g, val: "¥" }, euro: { regex: /&(euro|#8364);/g, val: "€" }, copyright: { regex: /&(copy|#169);/g, val: "©" }, reg: { regex: /&(reg|#174);/g, val: "®" }, inr: { regex: /&(inr|#8377);/g, val: "₹" } }, this.addExternalEntities = f, this.parseXml = d, this.parseTextData = v, this.resolveNameSpace = u, this.buildAttributesMap = g, this.isItStopNode = R, this.replaceEntitiesValue = $, this.readStopNodeData = x, this.saveTextToParentTag = I, this.addChild = w;
    }
  };
}, 338: (r, e, n) => {
  const { buildOptions: i } = n(63), s = n(299), { prettify: c } = n(728), h = n(31);
  r.exports = class {
    constructor(f) {
      this.externalEntities = {}, this.options = i(f);
    }
    parse(f, v) {
      if (typeof f != "string") {
        if (!f.toString)
          throw new Error("XML data is accepted in String or Bytes[] form.");
        f = f.toString();
      }
      if (v) {
        v === !0 && (v = {});
        const g = h.validate(f, v);
        if (g !== !0)
          throw Error("".concat(g.err.msg, ":").concat(g.err.line, ":").concat(g.err.col));
      }
      const u = new s(this.options);
      u.addExternalEntities(this.externalEntities);
      const a = u.parseXml(f);
      return this.options.preserveOrder || a === void 0 ? a : c(a, this.options);
    }
    addEntity(f, v) {
      if (v.indexOf("&") !== -1)
        throw new Error("Entity value can't have '&'");
      if (f.indexOf("&") !== -1 || f.indexOf(";") !== -1)
        throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
      if (v === "&")
        throw new Error("An entity with value '&' is not permitted");
      this.externalEntities[f] = v;
    }
  };
}, 728: (r, e) => {
  function n(h, f, v) {
    let u;
    const a = {};
    for (let g = 0; g < h.length; g++) {
      const d = h[g], w = i(d);
      let $ = "";
      if ($ = v === void 0 ? w : v + "." + w, w === f.textNodeName)
        u === void 0 ? u = d[w] : u += "" + d[w];
      else {
        if (w === void 0)
          continue;
        if (d[w]) {
          let I = n(d[w], f, $);
          const R = c(I, f);
          d[":@"] ? s(I, d[":@"], $, f) : Object.keys(I).length !== 1 || I[f.textNodeName] === void 0 || f.alwaysCreateTextNode ? Object.keys(I).length === 0 && (f.alwaysCreateTextNode ? I[f.textNodeName] = "" : I = "") : I = I[f.textNodeName], a[w] !== void 0 && a.hasOwnProperty(w) ? (Array.isArray(a[w]) || (a[w] = [a[w]]), a[w].push(I)) : f.isArray(w, $, R) ? a[w] = [I] : a[w] = I;
        }
      }
    }
    return typeof u == "string" ? u.length > 0 && (a[f.textNodeName] = u) : u !== void 0 && (a[f.textNodeName] = u), a;
  }
  function i(h) {
    const f = Object.keys(h);
    for (let v = 0; v < f.length; v++) {
      const u = f[v];
      if (u !== ":@")
        return u;
    }
  }
  function s(h, f, v, u) {
    if (f) {
      const a = Object.keys(f), g = a.length;
      for (let d = 0; d < g; d++) {
        const w = a[d];
        u.isArray(w, v + "." + w, !0, !0) ? h[w] = [f[w]] : h[w] = f[w];
      }
    }
  }
  function c(h, f) {
    const { textNodeName: v } = f, u = Object.keys(h).length;
    return u === 0 || !(u !== 1 || !h[v] && typeof h[v] != "boolean" && h[v] !== 0);
  }
  e.prettify = function(h, f) {
    return n(h, f);
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
  var i, s, c, h, f;
  i = n(298), s = n(526).utf8, c = n(135), h = n(526).bin, (f = function(v, u) {
    v.constructor == String ? v = u && u.encoding === "binary" ? h.stringToBytes(v) : s.stringToBytes(v) : c(v) ? v = Array.prototype.slice.call(v, 0) : Array.isArray(v) || v.constructor === Uint8Array || (v = v.toString());
    for (var a = i.bytesToWords(v), g = 8 * v.length, d = 1732584193, w = -271733879, $ = -1732584194, I = 271733878, R = 0; R < a.length; R++)
      a[R] = 16711935 & (a[R] << 8 | a[R] >>> 24) | 4278255360 & (a[R] << 24 | a[R] >>> 8);
    a[g >>> 5] |= 128 << g % 32, a[14 + (g + 64 >>> 9 << 4)] = g;
    var D = f._ff, _ = f._gg, x = f._hh, F = f._ii;
    for (R = 0; R < a.length; R += 16) {
      var C = d, z = w, q = $, G = I;
      d = D(d, w, $, I, a[R + 0], 7, -680876936), I = D(I, d, w, $, a[R + 1], 12, -389564586), $ = D($, I, d, w, a[R + 2], 17, 606105819), w = D(w, $, I, d, a[R + 3], 22, -1044525330), d = D(d, w, $, I, a[R + 4], 7, -176418897), I = D(I, d, w, $, a[R + 5], 12, 1200080426), $ = D($, I, d, w, a[R + 6], 17, -1473231341), w = D(w, $, I, d, a[R + 7], 22, -45705983), d = D(d, w, $, I, a[R + 8], 7, 1770035416), I = D(I, d, w, $, a[R + 9], 12, -1958414417), $ = D($, I, d, w, a[R + 10], 17, -42063), w = D(w, $, I, d, a[R + 11], 22, -1990404162), d = D(d, w, $, I, a[R + 12], 7, 1804603682), I = D(I, d, w, $, a[R + 13], 12, -40341101), $ = D($, I, d, w, a[R + 14], 17, -1502002290), d = _(d, w = D(w, $, I, d, a[R + 15], 22, 1236535329), $, I, a[R + 1], 5, -165796510), I = _(I, d, w, $, a[R + 6], 9, -1069501632), $ = _($, I, d, w, a[R + 11], 14, 643717713), w = _(w, $, I, d, a[R + 0], 20, -373897302), d = _(d, w, $, I, a[R + 5], 5, -701558691), I = _(I, d, w, $, a[R + 10], 9, 38016083), $ = _($, I, d, w, a[R + 15], 14, -660478335), w = _(w, $, I, d, a[R + 4], 20, -405537848), d = _(d, w, $, I, a[R + 9], 5, 568446438), I = _(I, d, w, $, a[R + 14], 9, -1019803690), $ = _($, I, d, w, a[R + 3], 14, -187363961), w = _(w, $, I, d, a[R + 8], 20, 1163531501), d = _(d, w, $, I, a[R + 13], 5, -1444681467), I = _(I, d, w, $, a[R + 2], 9, -51403784), $ = _($, I, d, w, a[R + 7], 14, 1735328473), d = x(d, w = _(w, $, I, d, a[R + 12], 20, -1926607734), $, I, a[R + 5], 4, -378558), I = x(I, d, w, $, a[R + 8], 11, -2022574463), $ = x($, I, d, w, a[R + 11], 16, 1839030562), w = x(w, $, I, d, a[R + 14], 23, -35309556), d = x(d, w, $, I, a[R + 1], 4, -1530992060), I = x(I, d, w, $, a[R + 4], 11, 1272893353), $ = x($, I, d, w, a[R + 7], 16, -155497632), w = x(w, $, I, d, a[R + 10], 23, -1094730640), d = x(d, w, $, I, a[R + 13], 4, 681279174), I = x(I, d, w, $, a[R + 0], 11, -358537222), $ = x($, I, d, w, a[R + 3], 16, -722521979), w = x(w, $, I, d, a[R + 6], 23, 76029189), d = x(d, w, $, I, a[R + 9], 4, -640364487), I = x(I, d, w, $, a[R + 12], 11, -421815835), $ = x($, I, d, w, a[R + 15], 16, 530742520), d = F(d, w = x(w, $, I, d, a[R + 2], 23, -995338651), $, I, a[R + 0], 6, -198630844), I = F(I, d, w, $, a[R + 7], 10, 1126891415), $ = F($, I, d, w, a[R + 14], 15, -1416354905), w = F(w, $, I, d, a[R + 5], 21, -57434055), d = F(d, w, $, I, a[R + 12], 6, 1700485571), I = F(I, d, w, $, a[R + 3], 10, -1894986606), $ = F($, I, d, w, a[R + 10], 15, -1051523), w = F(w, $, I, d, a[R + 1], 21, -2054922799), d = F(d, w, $, I, a[R + 8], 6, 1873313359), I = F(I, d, w, $, a[R + 15], 10, -30611744), $ = F($, I, d, w, a[R + 6], 15, -1560198380), w = F(w, $, I, d, a[R + 13], 21, 1309151649), d = F(d, w, $, I, a[R + 4], 6, -145523070), I = F(I, d, w, $, a[R + 11], 10, -1120210379), $ = F($, I, d, w, a[R + 2], 15, 718787259), w = F(w, $, I, d, a[R + 9], 21, -343485551), d = d + C >>> 0, w = w + z >>> 0, $ = $ + q >>> 0, I = I + G >>> 0;
    }
    return i.endian([d, w, $, I]);
  })._ff = function(v, u, a, g, d, w, $) {
    var I = v + (u & a | ~u & g) + (d >>> 0) + $;
    return (I << w | I >>> 32 - w) + u;
  }, f._gg = function(v, u, a, g, d, w, $) {
    var I = v + (u & g | a & ~g) + (d >>> 0) + $;
    return (I << w | I >>> 32 - w) + u;
  }, f._hh = function(v, u, a, g, d, w, $) {
    var I = v + (u ^ a ^ g) + (d >>> 0) + $;
    return (I << w | I >>> 32 - w) + u;
  }, f._ii = function(v, u, a, g, d, w, $) {
    var I = v + (a ^ (u | ~g)) + (d >>> 0) + $;
    return (I << w | I >>> 32 - w) + u;
  }, f._blocksize = 16, f._digestsize = 16, r.exports = function(v, u) {
    if (v == null)
      throw new Error("Illegal argument " + v);
    var a = i.wordsToBytes(f(v, u));
    return u && u.asBytes ? a : u && u.asString ? h.bytesToString(a) : i.bytesToHex(a);
  };
}, 285: (r, e, n) => {
  var i = n(2);
  r.exports = function(D) {
    return D ? (D.substr(0, 2) === "{}" && (D = "\\{\\}" + D.substr(2)), R(function(_) {
      return _.split("\\\\").join(s).split("\\{").join(c).split("\\}").join(h).split("\\,").join(f).split("\\.").join(v);
    }(D), !0).map(a)) : [];
  };
  var s = "\0SLASH" + Math.random() + "\0", c = "\0OPEN" + Math.random() + "\0", h = "\0CLOSE" + Math.random() + "\0", f = "\0COMMA" + Math.random() + "\0", v = "\0PERIOD" + Math.random() + "\0";
  function u(D) {
    return parseInt(D, 10) == D ? parseInt(D, 10) : D.charCodeAt(0);
  }
  function a(D) {
    return D.split(s).join("\\").split(c).join("{").split(h).join("}").split(f).join(",").split(v).join(".");
  }
  function g(D) {
    if (!D)
      return [""];
    var _ = [], x = i("{", "}", D);
    if (!x)
      return D.split(",");
    var F = x.pre, C = x.body, z = x.post, q = F.split(",");
    q[q.length - 1] += "{" + C + "}";
    var G = g(z);
    return z.length && (q[q.length - 1] += G.shift(), q.push.apply(q, G)), _.push.apply(_, q), _;
  }
  function d(D) {
    return "{" + D + "}";
  }
  function w(D) {
    return /^-?0\d/.test(D);
  }
  function $(D, _) {
    return D <= _;
  }
  function I(D, _) {
    return D >= _;
  }
  function R(D, _) {
    var x = [], F = i("{", "}", D);
    if (!F)
      return [D];
    var C = F.pre, z = F.post.length ? R(F.post, !1) : [""];
    if (/\$$/.test(F.pre))
      for (var q = 0; q < z.length; q++) {
        var G = C + "{" + F.body + "}" + z[q];
        x.push(G);
      }
    else {
      var X, Z, H = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(F.body), Y = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(F.body), V = H || Y, re = F.body.indexOf(",") >= 0;
      if (!V && !re)
        return F.post.match(/,.*\}/) ? R(D = F.pre + "{" + F.body + h + F.post) : [D];
      if (V)
        X = F.body.split(/\.\./);
      else if ((X = g(F.body)).length === 1 && (X = R(X[0], !1).map(d)).length === 1)
        return z.map(function(At) {
          return F.pre + X[0] + At;
        });
      if (V) {
        var he = u(X[0]), xe = u(X[1]), fe = Math.max(X[0].length, X[1].length), Te = X.length == 3 ? Math.abs(u(X[2])) : 1, ye = $;
        xe < he && (Te *= -1, ye = I);
        var De = X.some(w);
        Z = [];
        for (var Ie = he; ye(Ie, xe); Ie += Te) {
          var Je;
          if (Y)
            (Je = String.fromCharCode(Ie)) === "\\" && (Je = "");
          else if (Je = String(Ie), De) {
            var $e = fe - Je.length;
            if ($e > 0) {
              var Ne = new Array($e + 1).join("0");
              Je = Ie < 0 ? "-" + Ne + Je.slice(1) : Ne + Je;
            }
          }
          Z.push(Je);
        }
      } else {
        Z = [];
        for (var Ae = 0; Ae < X.length; Ae++)
          Z.push.apply(Z, R(X[Ae], !1));
      }
      for (Ae = 0; Ae < Z.length; Ae++)
        for (q = 0; q < z.length; q++)
          G = C + Z[Ae] + z[q], (!_ || V || G) && x.push(G);
    }
    return x;
  }
}, 829: (r) => {
  function e(u) {
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
      return typeof a;
    } : function(a) {
      return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
    }, e(u);
  }
  function n(u) {
    var a = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return n = function(g) {
      if (g === null || (d = g, Function.toString.call(d).indexOf("[native code]") === -1))
        return g;
      var d;
      if (typeof g != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (a !== void 0) {
        if (a.has(g))
          return a.get(g);
        a.set(g, w);
      }
      function w() {
        return i(g, arguments, c(this).constructor);
      }
      return w.prototype = Object.create(g.prototype, { constructor: { value: w, enumerable: !1, writable: !0, configurable: !0 } }), s(w, g);
    }, n(u);
  }
  function i(u, a, g) {
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
    }() ? Reflect.construct : function(d, w, $) {
      var I = [null];
      I.push.apply(I, w);
      var R = new (Function.bind.apply(d, I))();
      return $ && s(R, $.prototype), R;
    }, i.apply(null, arguments);
  }
  function s(u, a) {
    return s = Object.setPrototypeOf || function(g, d) {
      return g.__proto__ = d, g;
    }, s(u, a);
  }
  function c(u) {
    return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
      return a.__proto__ || Object.getPrototypeOf(a);
    }, c(u);
  }
  var h = function(u) {
    function a(g) {
      var d;
      return function(w, $) {
        if (!(w instanceof $))
          throw new TypeError("Cannot call a class as a function");
      }(this, a), (d = function(w, $) {
        return !$ || e($) !== "object" && typeof $ != "function" ? function(I) {
          if (I === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return I;
        }(w) : $;
      }(this, c(a).call(this, g))).name = "ObjectPrototypeMutationError", d;
    }
    return function(g, d) {
      if (typeof d != "function" && d !== null)
        throw new TypeError("Super expression must either be null or a function");
      g.prototype = Object.create(d && d.prototype, { constructor: { value: g, writable: !0, configurable: !0 } }), d && s(g, d);
    }(a, u), a;
  }(n(Error));
  function f(u, a) {
    for (var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
    }, d = a.split("."), w = d.length, $ = function(D) {
      var _ = d[D];
      if (!u)
        return { v: void 0 };
      if (_ === "+") {
        if (Array.isArray(u))
          return { v: u.map(function(F, C) {
            var z = d.slice(D + 1);
            return z.length > 0 ? f(F, z.join("."), g) : g(u, C, d, D);
          }) };
        var x = d.slice(0, D).join(".");
        throw new Error("Object at wildcard (".concat(x, ") is not an array"));
      }
      u = g(u, _, d, D);
    }, I = 0; I < w; I++) {
      var R = $(I);
      if (e(R) === "object")
        return R.v;
    }
    return u;
  }
  function v(u, a) {
    return u.length === a + 1;
  }
  r.exports = { set: function(u, a, g) {
    if (e(u) != "object" || u === null || a === void 0)
      return u;
    if (typeof a == "number")
      return u[a] = g, u[a];
    try {
      return f(u, a, function(d, w, $, I) {
        if (d === Reflect.getPrototypeOf({}))
          throw new h("Attempting to mutate Object.prototype");
        if (!d[w]) {
          var R = Number.isInteger(Number($[I + 1])), D = $[I + 1] === "+";
          d[w] = R || D ? [] : {};
        }
        return v($, I) && (d[w] = g), d[w];
      });
    } catch (d) {
      if (d instanceof h)
        throw d;
      return u;
    }
  }, get: function(u, a) {
    if (e(u) != "object" || u === null || a === void 0)
      return u;
    if (typeof a == "number")
      return u[a];
    try {
      return f(u, a, function(g, d) {
        return g[d];
      });
    } catch {
      return u;
    }
  }, has: function(u, a) {
    var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (e(u) != "object" || u === null || a === void 0)
      return !1;
    if (typeof a == "number")
      return a in u;
    try {
      var d = !1;
      return f(u, a, function(w, $, I, R) {
        if (!v(I, R))
          return w && w[$];
        d = g.own ? w.hasOwnProperty($) : $ in w;
      }), d;
    } catch {
      return !1;
    }
  }, hasOwn: function(u, a, g) {
    return this.has(u, a, g || { own: !0 });
  }, isIn: function(u, a, g) {
    var d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (e(u) != "object" || u === null || a === void 0)
      return !1;
    try {
      var w = !1, $ = !1;
      return f(u, a, function(I, R, D, _) {
        return w = w || I === g || !!I && I[R] === g, $ = v(D, _) && e(I) === "object" && R in I, I && I[R];
      }), d.validPath ? w && $ : w;
    } catch {
      return !1;
    }
  }, ObjectPrototypeMutationError: h };
}, 47: (r, e, n) => {
  var i = n(410), s = function(u) {
    return typeof u == "string";
  };
  function c(u, a) {
    for (var g = [], d = 0; d < u.length; d++) {
      var w = u[d];
      w && w !== "." && (w === ".." ? g.length && g[g.length - 1] !== ".." ? g.pop() : a && g.push("..") : g.push(w));
    }
    return g;
  }
  var h = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, f = {};
  function v(u) {
    return h.exec(u).slice(1);
  }
  f.resolve = function() {
    for (var u = "", a = !1, g = arguments.length - 1; g >= -1 && !a; g--) {
      var d = g >= 0 ? arguments[g] : Wt.cwd();
      if (!s(d))
        throw new TypeError("Arguments to path.resolve must be strings");
      d && (u = d + "/" + u, a = d.charAt(0) === "/");
    }
    return (a ? "/" : "") + (u = c(u.split("/"), !a).join("/")) || ".";
  }, f.normalize = function(u) {
    var a = f.isAbsolute(u), g = u.substr(-1) === "/";
    return (u = c(u.split("/"), !a).join("/")) || a || (u = "."), u && g && (u += "/"), (a ? "/" : "") + u;
  }, f.isAbsolute = function(u) {
    return u.charAt(0) === "/";
  }, f.join = function() {
    for (var u = "", a = 0; a < arguments.length; a++) {
      var g = arguments[a];
      if (!s(g))
        throw new TypeError("Arguments to path.join must be strings");
      g && (u += u ? "/" + g : g);
    }
    return f.normalize(u);
  }, f.relative = function(u, a) {
    function g(_) {
      for (var x = 0; x < _.length && _[x] === ""; x++)
        ;
      for (var F = _.length - 1; F >= 0 && _[F] === ""; F--)
        ;
      return x > F ? [] : _.slice(x, F + 1);
    }
    u = f.resolve(u).substr(1), a = f.resolve(a).substr(1);
    for (var d = g(u.split("/")), w = g(a.split("/")), $ = Math.min(d.length, w.length), I = $, R = 0; R < $; R++)
      if (d[R] !== w[R]) {
        I = R;
        break;
      }
    var D = [];
    for (R = I; R < d.length; R++)
      D.push("..");
    return (D = D.concat(w.slice(I))).join("/");
  }, f._makeLong = function(u) {
    return u;
  }, f.dirname = function(u) {
    var a = v(u), g = a[0], d = a[1];
    return g || d ? (d && (d = d.substr(0, d.length - 1)), g + d) : ".";
  }, f.basename = function(u, a) {
    var g = v(u)[2];
    return a && g.substr(-1 * a.length) === a && (g = g.substr(0, g.length - a.length)), g;
  }, f.extname = function(u) {
    return v(u)[3];
  }, f.format = function(u) {
    if (!i.isObject(u))
      throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof u);
    var a = u.root || "";
    if (!s(a))
      throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof u.root);
    return (u.dir ? u.dir + f.sep : "") + (u.base || "");
  }, f.parse = function(u) {
    if (!s(u))
      throw new TypeError("Parameter 'pathString' must be a string, not " + typeof u);
    var a = v(u);
    if (!a || a.length !== 4)
      throw new TypeError("Invalid path '" + u + "'");
    return a[1] = a[1] || "", a[2] = a[2] || "", a[3] = a[3] || "", { root: a[0], dir: a[0] + a[1].slice(0, a[1].length - 1), base: a[2], ext: a[3], name: a[2].slice(0, a[2].length - a[3].length) };
  }, f.sep = "/", f.delimiter = ":", r.exports = f;
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
  e.stringify = function(c, h) {
    h = h || "";
    var f, v, u = [];
    for (v in typeof h != "string" && (h = "?"), c)
      if (n.call(c, v)) {
        if ((f = c[v]) || f != null && !isNaN(f) || (f = ""), v = s(v), f = s(f), v === null || f === null)
          continue;
        u.push(v + "=" + f);
      }
    return u.length ? h + u.join("&") : "";
  }, e.parse = function(c) {
    for (var h, f = /([^=?#&]+)=?([^&]*)/g, v = {}; h = f.exec(c); ) {
      var u = i(h[1]), a = i(h[2]);
      u === null || a === null || u in v || (v[u] = a);
    }
    return v;
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
    let h = s.trim();
    if (c.skipLike !== void 0 && c.skipLike.test(h))
      return s;
    if (c.hex && e.test(h))
      return Number.parseInt(h, 16);
    {
      const v = n.exec(h);
      if (v) {
        const u = v[1], a = v[2];
        let g = ((f = v[3]) && f.indexOf(".") !== -1 && ((f = f.replace(/0+$/, "")) === "." ? f = "0" : f[0] === "." ? f = "0" + f : f[f.length - 1] === "." && (f = f.substr(0, f.length - 1))), f);
        const d = v[4] || v[6];
        if (!c.leadingZeros && a.length > 0 && u && h[2] !== "." || !c.leadingZeros && a.length > 0 && !u && h[1] !== ".")
          return s;
        {
          const w = Number(h), $ = "" + w;
          return $.search(/[eE]/) !== -1 || d ? c.eNotation ? w : s : h.indexOf(".") !== -1 ? $ === "0" && g === "" || $ === g || u && $ === "-" + g ? w : s : a ? g === $ || u + g === $ ? w : s : h === $ || h === u + $ ? w : s;
        }
      }
      return s;
    }
    var f;
  };
}, 737: (r, e, n) => {
  var i = n(670), s = n(647), c = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, h = /[\n\r\t]/g, f = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, v = /:\d+$/, u = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, a = /^[a-zA-Z]:/;
  function g(_) {
    return (_ || "").toString().replace(c, "");
  }
  var d = [["#", "hash"], ["?", "query"], function(_, x) {
    return I(x.protocol) ? _.replace(/\\/g, "/") : _;
  }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]], w = { hash: 1, query: 1 };
  function $(_) {
    var x, F = (typeof window < "u" ? window : typeof hi < "u" ? hi : typeof self < "u" ? self : {}).location || {}, C = {}, z = typeof (_ = _ || F);
    if (_.protocol === "blob:")
      C = new D(unescape(_.pathname), {});
    else if (z === "string")
      for (x in C = new D(_, {}), w)
        delete C[x];
    else if (z === "object") {
      for (x in _)
        x in w || (C[x] = _[x]);
      C.slashes === void 0 && (C.slashes = f.test(_.href));
    }
    return C;
  }
  function I(_) {
    return _ === "file:" || _ === "ftp:" || _ === "http:" || _ === "https:" || _ === "ws:" || _ === "wss:";
  }
  function R(_, x) {
    _ = (_ = g(_)).replace(h, ""), x = x || {};
    var F, C = u.exec(_), z = C[1] ? C[1].toLowerCase() : "", q = !!C[2], G = !!C[3], X = 0;
    return q ? G ? (F = C[2] + C[3] + C[4], X = C[2].length + C[3].length) : (F = C[2] + C[4], X = C[2].length) : G ? (F = C[3] + C[4], X = C[3].length) : F = C[4], z === "file:" ? X >= 2 && (F = F.slice(2)) : I(z) ? F = C[4] : z ? q && (F = F.slice(2)) : X >= 2 && I(x.protocol) && (F = C[4]), { protocol: z, slashes: q || I(z), slashesCount: X, rest: F };
  }
  function D(_, x, F) {
    if (_ = (_ = g(_)).replace(h, ""), !(this instanceof D))
      return new D(_, x, F);
    var C, z, q, G, X, Z, H = d.slice(), Y = typeof x, V = this, re = 0;
    for (Y !== "object" && Y !== "string" && (F = x, x = null), F && typeof F != "function" && (F = s.parse), C = !(z = R(_ || "", x = $(x))).protocol && !z.slashes, V.slashes = z.slashes || C && x.slashes, V.protocol = z.protocol || x.protocol || "", _ = z.rest, (z.protocol === "file:" && (z.slashesCount !== 2 || a.test(_)) || !z.slashes && (z.protocol || z.slashesCount < 2 || !I(V.protocol))) && (H[3] = [/(.*)/, "pathname"]); re < H.length; re++)
      typeof (G = H[re]) != "function" ? (q = G[0], Z = G[1], q != q ? V[Z] = _ : typeof q == "string" ? ~(X = q === "@" ? _.lastIndexOf(q) : _.indexOf(q)) && (typeof G[2] == "number" ? (V[Z] = _.slice(0, X), _ = _.slice(X + G[2])) : (V[Z] = _.slice(X), _ = _.slice(0, X))) : (X = q.exec(_)) && (V[Z] = X[1], _ = _.slice(0, X.index)), V[Z] = V[Z] || C && G[3] && x[Z] || "", G[4] && (V[Z] = V[Z].toLowerCase())) : _ = G(_, V);
    F && (V.query = F(V.query)), C && x.slashes && V.pathname.charAt(0) !== "/" && (V.pathname !== "" || x.pathname !== "") && (V.pathname = function(he, xe) {
      if (he === "")
        return xe;
      for (var fe = (xe || "/").split("/").slice(0, -1).concat(he.split("/")), Te = fe.length, ye = fe[Te - 1], De = !1, Ie = 0; Te--; )
        fe[Te] === "." ? fe.splice(Te, 1) : fe[Te] === ".." ? (fe.splice(Te, 1), Ie++) : Ie && (Te === 0 && (De = !0), fe.splice(Te, 1), Ie--);
      return De && fe.unshift(""), ye !== "." && ye !== ".." || fe.push(""), fe.join("/");
    }(V.pathname, x.pathname)), V.pathname.charAt(0) !== "/" && I(V.protocol) && (V.pathname = "/" + V.pathname), i(V.port, V.protocol) || (V.host = V.hostname, V.port = ""), V.username = V.password = "", V.auth && (~(X = V.auth.indexOf(":")) ? (V.username = V.auth.slice(0, X), V.username = encodeURIComponent(decodeURIComponent(V.username)), V.password = V.auth.slice(X + 1), V.password = encodeURIComponent(decodeURIComponent(V.password))) : V.username = encodeURIComponent(decodeURIComponent(V.auth)), V.auth = V.password ? V.username + ":" + V.password : V.username), V.origin = V.protocol !== "file:" && I(V.protocol) && V.host ? V.protocol + "//" + V.host : "null", V.href = V.toString();
  }
  D.prototype = { set: function(_, x, F) {
    var C = this;
    switch (_) {
      case "query":
        typeof x == "string" && x.length && (x = (F || s.parse)(x)), C[_] = x;
        break;
      case "port":
        C[_] = x, i(x, C.protocol) ? x && (C.host = C.hostname + ":" + x) : (C.host = C.hostname, C[_] = "");
        break;
      case "hostname":
        C[_] = x, C.port && (x += ":" + C.port), C.host = x;
        break;
      case "host":
        C[_] = x, v.test(x) ? (x = x.split(":"), C.port = x.pop(), C.hostname = x.join(":")) : (C.hostname = x, C.port = "");
        break;
      case "protocol":
        C.protocol = x.toLowerCase(), C.slashes = !F;
        break;
      case "pathname":
      case "hash":
        if (x) {
          var z = _ === "pathname" ? "/" : "#";
          C[_] = x.charAt(0) !== z ? z + x : x;
        } else
          C[_] = x;
        break;
      case "username":
      case "password":
        C[_] = encodeURIComponent(x);
        break;
      case "auth":
        var q = x.indexOf(":");
        ~q ? (C.username = x.slice(0, q), C.username = encodeURIComponent(decodeURIComponent(C.username)), C.password = x.slice(q + 1), C.password = encodeURIComponent(decodeURIComponent(C.password))) : C.username = encodeURIComponent(decodeURIComponent(x));
    }
    for (var G = 0; G < d.length; G++) {
      var X = d[G];
      X[4] && (C[X[1]] = C[X[1]].toLowerCase());
    }
    return C.auth = C.password ? C.username + ":" + C.password : C.username, C.origin = C.protocol !== "file:" && I(C.protocol) && C.host ? C.protocol + "//" + C.host : "null", C.href = C.toString(), C;
  }, toString: function(_) {
    _ && typeof _ == "function" || (_ = s.stringify);
    var x, F = this, C = F.host, z = F.protocol;
    z && z.charAt(z.length - 1) !== ":" && (z += ":");
    var q = z + (F.protocol && F.slashes || I(F.protocol) ? "//" : "");
    return F.username ? (q += F.username, F.password && (q += ":" + F.password), q += "@") : F.password ? (q += ":" + F.password, q += "@") : F.protocol !== "file:" && I(F.protocol) && !C && F.pathname !== "/" && (q += "@"), (C[C.length - 1] === ":" || v.test(F.hostname) && !F.port) && (C += ":"), q += C + F.pathname, (x = typeof F.query == "object" ? _(F.query) : F.query) && (q += x.charAt(0) !== "?" ? "?" + x : x), F.hash && (q += F.hash), q;
  } }, D.extractProtocol = R, D.location = $, D.trimLeft = g, D.qs = s, r.exports = D;
}, 410: () => {
}, 388: () => {
}, 805: () => {
}, 800: () => {
} }, Jl = {};
function We(r) {
  var e = Jl[r];
  if (e !== void 0)
    return e.exports;
  var n = Jl[r] = { id: r, loaded: !1, exports: {} };
  return C$[r].call(n.exports, n, n.exports, We), n.loaded = !0, n.exports;
}
We.n = (r) => {
  var e = r && r.__esModule ? () => r.default : () => r;
  return We.d(e, { a: e }), e;
}, We.d = (r, e) => {
  for (var n in e)
    We.o(e, n) && !We.o(r, n) && Object.defineProperty(r, n, { enumerable: !0, get: e[n] });
}, We.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e), We.nmd = (r) => (r.paths = [], r.children || (r.children = []), r);
var Qt = {};
(() => {
  We.d(Qt, { hT: () => X, O4: () => Z, Kd: () => q, YK: () => G, UU: () => ih, Gu: () => xe, ky: () => ee, h4: () => se, hq: () => nr, i5: () => ae });
  var r = We(737), e = We.n(r);
  function n(b) {
    if (!i(b))
      throw new Error("Parameter was not an error");
  }
  function i(b) {
    return p = b, Object.prototype.toString.call(p) === "[object Error]" || b instanceof Error;
    var p;
  }
  class s extends Error {
    constructor(p, y) {
      const S = [...arguments], { options: P, shortMessage: N } = function(W) {
        let K, Q = "";
        if (W.length === 0)
          K = {};
        else if (i(W[0]))
          K = { cause: W[0] }, Q = W.slice(1).join(" ") || "";
        else if (W[0] && typeof W[0] == "object")
          K = Object.assign({}, W[0]), Q = W.slice(1).join(" ") || "";
        else {
          if (typeof W[0] != "string")
            throw new Error("Invalid arguments passed to Layerr");
          K = {}, Q = Q = W.join(" ") || "";
        }
        return { options: K, shortMessage: Q };
      }(S);
      let U = N;
      if (P.cause && (U = "".concat(U, ": ").concat(P.cause.message)), super(U), this.message = U, P.name && typeof P.name == "string" ? this.name = P.name : this.name = "Layerr", P.cause && Object.defineProperty(this, "_cause", { value: P.cause }), Object.defineProperty(this, "_info", { value: {} }), P.info && typeof P.info == "object" && Object.assign(this._info, P.info), Error.captureStackTrace) {
        const W = P.constructorOpt || this.constructor;
        Error.captureStackTrace(this, W);
      }
    }
    static cause(p) {
      return n(p), p._cause && i(p._cause) ? p._cause : null;
    }
    static fullStack(p) {
      n(p);
      const y = s.cause(p);
      return y ? "".concat(p.stack, `
caused by: `).concat(s.fullStack(y)) : p.stack;
    }
    static info(p) {
      n(p);
      const y = {}, S = s.cause(p);
      return S && Object.assign(y, s.info(S)), p._info && Object.assign(y, p._info), y;
    }
    cause() {
      return s.cause(this);
    }
    toString() {
      let p = this.name || this.constructor.name || this.constructor.prototype.name;
      return this.message && (p = "".concat(p, ": ").concat(this.message)), p;
    }
  }
  var c = We(47), h = We.n(c);
  const f = "__PATH_SEPARATOR_POSIX__", v = "__PATH_SEPARATOR_WINDOWS__";
  function u(b) {
    try {
      const p = b.replace(/\//g, f).replace(/\\\\/g, v);
      return encodeURIComponent(p).split(v).join("\\\\").split(f).join("/");
    } catch (p) {
      throw new s(p, "Failed encoding path");
    }
  }
  function a(b) {
    return b.startsWith("/") ? b : "/" + b;
  }
  function g(b) {
    let p = b;
    return p[0] !== "/" && (p = "/" + p), /^.+\/$/.test(p) && (p = p.substr(0, p.length - 1)), p;
  }
  function d(b) {
    let p = new (e())(b).pathname;
    return p.length <= 0 && (p = "/"), g(p);
  }
  function w() {
    for (var b = arguments.length, p = new Array(b), y = 0; y < b; y++)
      p[y] = arguments[y];
    return function() {
      return function(S) {
        var P = [];
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
          W !== "" && (U > 0 && (W = W.replace(/^[\/]+/, "")), W = U < S.length - 1 ? W.replace(/[\/]+$/, "") : W.replace(/[\/]+$/, "/"), P.push(W));
        }
        var K = P.join("/"), Q = (K = K.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
        return Q.shift() + (Q.length > 0 ? "?" : "") + Q.join("&");
      }(typeof arguments[0] == "object" ? arguments[0] : [].slice.call(arguments));
    }(p.reduce((S, P, N) => ((N === 0 || P !== "/" || P === "/" && S[S.length - 1] !== "/") && S.push(P), S), []));
  }
  var $ = We(542), I = We.n($);
  const R = "abcdef0123456789";
  function D(b, p) {
    const y = b.url.replace("//", ""), S = y.indexOf("/") == -1 ? "/" : y.slice(y.indexOf("/")), P = b.method ? b.method.toUpperCase() : "GET", N = !!/(^|,)\s*auth\s*($|,)/.test(p.qop) && "auth", U = "00000000".concat(p.nc).slice(-8), W = function(be, Pe, we, ne, ie, ge, Se) {
      const me = Se || I()("".concat(Pe, ":").concat(we, ":").concat(ne));
      return be && be.toLowerCase() === "md5-sess" ? I()("".concat(me, ":").concat(ie, ":").concat(ge)) : me;
    }(p.algorithm, p.username, p.realm, p.password, p.nonce, p.cnonce, p.ha1), K = I()("".concat(P, ":").concat(S)), Q = N ? I()("".concat(W, ":").concat(p.nonce, ":").concat(U, ":").concat(p.cnonce, ":").concat(N, ":").concat(K)) : I()("".concat(W, ":").concat(p.nonce, ":").concat(K)), J = { username: p.username, realm: p.realm, nonce: p.nonce, uri: S, qop: N, response: Q, nc: U, cnonce: p.cnonce, algorithm: p.algorithm, opaque: p.opaque }, oe = [];
    for (const be in J)
      J[be] && (be === "qop" || be === "nc" || be === "algorithm" ? oe.push("".concat(be, "=").concat(J[be])) : oe.push("".concat(be, '="').concat(J[be], '"')));
    return "Digest ".concat(oe.join(", "));
  }
  var _ = We(101), x = We.n(_);
  function F(b) {
    return x().decode(b);
  }
  const C = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : typeof window < "u" ? window : globalThis, z = C.fetch.bind(C), q = C.Request, G = C.Response;
  let X = function(b) {
    return b.Digest = "digest", b.None = "none", b.Password = "password", b.Token = "token", b;
  }({}), Z = function(b) {
    return b.DataTypeNoLength = "data-type-no-length", b.InvalidAuthType = "invalid-auth-type", b.InvalidOutputFormat = "invalid-output-format", b.LinkUnsupportedAuthType = "link-unsupported-auth", b;
  }({});
  We(800);
  const H = "@@HOTPATCHER", Y = () => {
  };
  function V(b) {
    return { original: b, methods: [b], final: !1 };
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
    set getEmptyAction(p) {
      this.configuration.getEmptyAction = p;
    }
    control(p) {
      let y = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
      if (!p || p.__type__ !== H)
        throw new Error("Failed taking control of target HotPatcher instance: Invalid type or object");
      return Object.keys(p.configuration.registry).forEach((S) => {
        this.configuration.registry.hasOwnProperty(S) ? y && (this.configuration.registry[S] = Object.assign({}, p.configuration.registry[S])) : this.configuration.registry[S] = Object.assign({}, p.configuration.registry[S]);
      }), p._configuration = this.configuration, this;
    }
    execute(p) {
      const y = this.get(p) || Y;
      for (var S = arguments.length, P = new Array(S > 1 ? S - 1 : 0), N = 1; N < S; N++)
        P[N - 1] = arguments[N];
      return y(...P);
    }
    get(p) {
      const y = this.configuration.registry[p];
      if (!y)
        switch (this.getEmptyAction) {
          case "null":
            return null;
          case "throw":
            throw new Error("Failed handling method request: No method provided for override: ".concat(p));
          default:
            throw new Error("Failed handling request which resulted in an empty method: Invalid empty-action specified: ".concat(this.getEmptyAction));
        }
      return function() {
        for (var S = arguments.length, P = new Array(S), N = 0; N < S; N++)
          P[N] = arguments[N];
        if (P.length === 0)
          throw new Error("Failed creating sequence: No functions provided");
        return function() {
          for (var U = arguments.length, W = new Array(U), K = 0; K < U; K++)
            W[K] = arguments[K];
          let Q = W;
          const J = this;
          for (; P.length > 0; )
            Q = [P.shift().apply(J, Q)];
          return Q[0];
        };
      }(...y.methods);
    }
    isPatched(p) {
      return !!this.configuration.registry[p];
    }
    patch(p, y) {
      let S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      const { chain: P = !1 } = S;
      if (this.configuration.registry[p] && this.configuration.registry[p].final)
        throw new Error("Failed patching '".concat(p, "': Method marked as being final"));
      if (typeof y != "function")
        throw new Error("Failed patching '".concat(p, "': Provided method is not a function"));
      if (P)
        this.configuration.registry[p] ? this.configuration.registry[p].methods.push(y) : this.configuration.registry[p] = V(y);
      else if (this.isPatched(p)) {
        const { original: N } = this.configuration.registry[p];
        this.configuration.registry[p] = Object.assign(V(y), { original: N });
      } else
        this.configuration.registry[p] = V(y);
      return this;
    }
    patchInline(p, y) {
      this.isPatched(p) || this.patch(p, y);
      for (var S = arguments.length, P = new Array(S > 2 ? S - 2 : 0), N = 2; N < S; N++)
        P[N - 2] = arguments[N];
      return this.execute(p, ...P);
    }
    plugin(p) {
      for (var y = arguments.length, S = new Array(y > 1 ? y - 1 : 0), P = 1; P < y; P++)
        S[P - 1] = arguments[P];
      return S.forEach((N) => {
        this.patch(p, N, { chain: !0 });
      }), this;
    }
    restore(p) {
      if (!this.isPatched(p))
        throw new Error("Failed restoring method: No method present for key: ".concat(p));
      if (typeof this.configuration.registry[p].original != "function")
        throw new Error("Failed restoring method: Original method not found or of invalid type for key: ".concat(p));
      return this.configuration.registry[p].methods = [this.configuration.registry[p].original], this;
    }
    setFinal(p) {
      if (!this.configuration.registry.hasOwnProperty(p))
        throw new Error("Failed marking '".concat(p, "' as final: No method found for key"));
      return this.configuration.registry[p].final = !0, this;
    }
  }
  let he = null;
  function xe() {
    return he || (he = new re()), he;
  }
  function fe(b) {
    return function(p) {
      if (typeof p != "object" || p === null || Object.prototype.toString.call(p) != "[object Object]")
        return !1;
      if (Object.getPrototypeOf(p) === null)
        return !0;
      let y = p;
      for (; Object.getPrototypeOf(y) !== null; )
        y = Object.getPrototypeOf(y);
      return Object.getPrototypeOf(p) === y;
    }(b) ? Object.assign({}, b) : Object.setPrototypeOf(Object.assign({}, b), Object.getPrototypeOf(b));
  }
  function Te() {
    for (var b = arguments.length, p = new Array(b), y = 0; y < b; y++)
      p[y] = arguments[y];
    let S = null, P = [...p];
    for (; P.length > 0; ) {
      const N = P.shift();
      S = S ? ye(S, N) : fe(N);
    }
    return S;
  }
  function ye(b, p) {
    const y = fe(b);
    return Object.keys(p).forEach((S) => {
      y.hasOwnProperty(S) ? Array.isArray(p[S]) ? y[S] = Array.isArray(y[S]) ? [...y[S], ...p[S]] : [...p[S]] : typeof p[S] == "object" && p[S] ? y[S] = typeof y[S] == "object" && y[S] ? ye(y[S], p[S]) : fe(p[S]) : y[S] = p[S] : y[S] = p[S];
    }), y;
  }
  function De(b) {
    const p = {};
    for (const y of b.keys())
      p[y] = b.get(y);
    return p;
  }
  function Ie() {
    for (var b = arguments.length, p = new Array(b), y = 0; y < b; y++)
      p[y] = arguments[y];
    if (p.length === 0)
      return {};
    const S = {};
    return p.reduce((P, N) => (Object.keys(N).forEach((U) => {
      const W = U.toLowerCase();
      S.hasOwnProperty(W) ? P[S[W]] = N[U] : (S[W] = U, P[U] = N[U]);
    }), P), {});
  }
  We(805);
  const Je = typeof ArrayBuffer == "function", { toString: $e } = Object.prototype;
  function Ne(b) {
    return Je && (b instanceof ArrayBuffer || $e.call(b) === "[object ArrayBuffer]");
  }
  function Ae(b) {
    return b != null && b.constructor != null && typeof b.constructor.isBuffer == "function" && b.constructor.isBuffer(b);
  }
  function At(b, p, y) {
    return y ? p ? p(b) : b : (b && b.then || (b = Promise.resolve(b)), p ? b.then(p) : b);
  }
  function $t(b) {
    const p = xe();
    return p.patchInline("request", (y) => p.patchInline("fetch", z, y.url, function(S) {
      let P = {};
      const N = { method: S.method };
      if (S.headers && (P = Ie(P, S.headers)), S.data !== void 0) {
        const [U, W] = function(K) {
          if (typeof K == "string")
            return [K, {}];
          if (Ae(K))
            return [K, {}];
          if (Ne(K))
            return [K, {}];
          if (K && typeof K == "object")
            return [JSON.stringify(K), { "content-type": "application/json" }];
          throw new Error("Unable to convert request body: Unexpected body type: ".concat(typeof K));
        }(S.data);
        N.body = U, P = Ie(P, W);
      }
      return S.signal && (N.signal = S.signal), S.withCredentials && (N.credentials = "include"), N.headers = P, N;
    }(y)), b);
  }
  const je = (er = function(b) {
    if (!b._digest)
      return $t(b);
    const p = b._digest;
    return delete b._digest, p.hasDigestAuth && (b = Te(b, { headers: { Authorization: D(b, p) } })), At($t(b), function(y) {
      let S = !1;
      return P = function(U) {
        return S ? U : y;
      }, (N = function() {
        if (y.status == 401)
          return p.hasDigestAuth = function(U, W) {
            const K = U.headers && U.headers.get("www-authenticate") || "";
            if (K.split(/\s/)[0].toLowerCase() !== "digest")
              return !1;
            const Q = /([a-z0-9_-]+)=(?:"([^"]+)"|([a-z0-9_-]+))/gi;
            for (; ; ) {
              const J = Q.exec(K);
              if (!J)
                break;
              W[J[1]] = J[2] || J[3];
            }
            return W.nc += 1, W.cnonce = function() {
              let J = "";
              for (let oe = 0; oe < 32; ++oe)
                J = "".concat(J).concat(R[Math.floor(16 * Math.random())]);
              return J;
            }(), !0;
          }(y, p), function() {
            if (p.hasDigestAuth)
              return At($t(b = Te(b, { headers: { Authorization: D(b, p) } })), function(U) {
                return U.status == 401 ? p.hasDigestAuth = !1 : p.nc++, S = !0, U;
              });
          }();
        p.nc++;
      }()) && N.then ? N.then(P) : P(N);
      var P, N;
    });
  }, function() {
    for (var b = [], p = 0; p < arguments.length; p++)
      b[p] = arguments[p];
    try {
      return Promise.resolve(er.apply(this, b));
    } catch (y) {
      return Promise.reject(y);
    }
  });
  var er;
  function Ce(b, p, y) {
    const S = fe(b);
    return S.headers = Ie(p.headers, S.headers || {}, y.headers || {}), y.data !== void 0 && (S.data = y.data), y.signal && (S.signal = y.signal), p.httpAgent && (S.httpAgent = p.httpAgent), p.httpsAgent && (S.httpsAgent = p.httpsAgent), p.digest && (S._digest = p.digest), typeof p.withCredentials == "boolean" && (S.withCredentials = p.withCredentials), S;
  }
  var Qe = We(285);
  const Mt = { "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", !0], "[:alpha:]": ["\\p{L}\\p{Nl}", !0], "[:ascii:]": ["\\x00-\\x7f", !1], "[:blank:]": ["\\p{Zs}\\t", !0], "[:cntrl:]": ["\\p{Cc}", !0], "[:digit:]": ["\\p{Nd}", !0], "[:graph:]": ["\\p{Z}\\p{C}", !0, !0], "[:lower:]": ["\\p{Ll}", !0], "[:print:]": ["\\p{C}", !0], "[:punct:]": ["\\p{P}", !0], "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", !0], "[:upper:]": ["\\p{Lu}", !0], "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", !0], "[:xdigit:]": ["A-Fa-f0-9", !1] }, ft = (b) => b.replace(/[[\]\\-]/g, "\\$&"), St = (b) => b.join(""), zt = (b, p) => {
    const y = p;
    if (b.charAt(y) !== "[")
      throw new Error("not in a brace expression");
    const S = [], P = [];
    let N = y + 1, U = !1, W = !1, K = !1, Q = !1, J = y, oe = "";
    e:
      for (; N < b.length; ) {
        const ne = b.charAt(N);
        if (ne !== "!" && ne !== "^" || N !== y + 1) {
          if (ne === "]" && U && !K) {
            J = N + 1;
            break;
          }
          if (U = !0, ne !== "\\" || K) {
            if (ne === "[" && !K) {
              for (const [ie, [ge, Se, me]] of Object.entries(Mt))
                if (b.startsWith(ie, N)) {
                  if (oe)
                    return ["$.", !1, b.length - y, !0];
                  N += ie.length, me ? P.push(ge) : S.push(ge), W = W || Se;
                  continue e;
                }
            }
            K = !1, oe ? (ne > oe ? S.push(ft(oe) + "-" + ft(ne)) : ne === oe && S.push(ft(ne)), oe = "", N++) : b.startsWith("-]", N + 1) ? (S.push(ft(ne + "-")), N += 2) : b.startsWith("-", N + 1) ? (oe = ne, N += 2) : (S.push(ft(ne)), N++);
          } else
            K = !0, N++;
        } else
          Q = !0, N++;
      }
    if (J < N)
      return ["", !1, 0, !1];
    if (!S.length && !P.length)
      return ["$.", !1, b.length - y, !0];
    if (P.length === 0 && S.length === 1 && /^\\?.$/.test(S[0]) && !Q)
      return [(be = S[0].length === 2 ? S[0].slice(-1) : S[0], be.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")), !1, J - y, !1];
    var be;
    const Pe = "[" + (Q ? "^" : "") + St(S) + "]", we = "[" + (Q ? "" : "^") + St(P) + "]";
    return [S.length && P.length ? "(" + Pe + "|" + we + ")" : S.length ? Pe : we, W, J - y, !0];
  };
  function Le(b, p, y) {
    var S;
    return (p = typeof (S = function(P, N) {
      if (typeof P != "object" || !P)
        return P;
      var U = P[Symbol.toPrimitive];
      if (U !== void 0) {
        var W = U.call(P, "string");
        if (typeof W != "object")
          return W;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(P);
    }(p)) == "symbol" ? S : String(S)) in b ? Object.defineProperty(b, p, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : b[p] = y, b;
  }
  const Ge = function(b, p) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return Zr(p), !(!y.nocomment && p.charAt(0) === "#") && new Fr(p, y).match(b);
  }, mr = Ge, Cr = /^\*+([^+@!?\*\[\(]*)$/, mt = (b) => (p) => !p.startsWith(".") && p.endsWith(b), Dt = (b) => (p) => p.endsWith(b), xt = (b) => (b = b.toLowerCase(), (p) => !p.startsWith(".") && p.toLowerCase().endsWith(b)), Nt = (b) => (b = b.toLowerCase(), (p) => p.toLowerCase().endsWith(b)), de = /^\*+\.\*+$/, ze = (b) => !b.startsWith(".") && b.includes("."), E = (b) => b !== "." && b !== ".." && b.includes("."), O = /^\.\*+$/, L = (b) => b !== "." && b !== ".." && b.startsWith("."), M = /^\*+$/, m = (b) => b.length !== 0 && !b.startsWith("."), o = (b) => b.length !== 0 && b !== "." && b !== "..", l = /^\?+([^+@!?\*\[\(]*)?$/, T = (b) => {
    let [p, y = ""] = b;
    const S = te([p]);
    return y ? (y = y.toLowerCase(), (P) => S(P) && P.toLowerCase().endsWith(y)) : S;
  }, A = (b) => {
    let [p, y = ""] = b;
    const S = ce([p]);
    return y ? (y = y.toLowerCase(), (P) => S(P) && P.toLowerCase().endsWith(y)) : S;
  }, k = (b) => {
    let [p, y = ""] = b;
    const S = ce([p]);
    return y ? (P) => S(P) && P.endsWith(y) : S;
  }, j = (b) => {
    let [p, y = ""] = b;
    const S = te([p]);
    return y ? (P) => S(P) && P.endsWith(y) : S;
  }, te = (b) => {
    let [p] = b;
    const y = p.length;
    return (S) => S.length === y && !S.startsWith(".");
  }, ce = (b) => {
    let [p] = b;
    const y = p.length;
    return (S) => S.length === y && S !== "." && S !== "..";
  }, le = typeof Wt == "object" && Wt ? typeof Wt.env == "object" && Wt.env && Wt.env.__MINIMATCH_TESTING_PLATFORM__ || Wt.platform : "posix";
  Ge.sep = le === "win32" ? "\\" : "/";
  const pe = Symbol("globstar **");
  Ge.GLOBSTAR = pe;
  const Re = { "!": { open: "(?:(?!(?:", close: "))[^/]*?)" }, "?": { open: "(?:", close: ")?" }, "+": { open: "(?:", close: ")+" }, "*": { open: "(?:", close: ")*" }, "@": { open: "(?:", close: ")" } }, tr = "[^/]", Lr = tr + "*?", Ln = (b) => b.split("").reduce((p, y) => (p[y] = !0, p), {}), ci = Ln("().*{}+?[]^$\\!"), wo = Ln("[.(");
  Ge.filter = function(b) {
    let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return (y) => Ge(y, b, p);
  };
  const vt = function(b) {
    let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.assign({}, b, p);
  };
  Ge.defaults = (b) => {
    if (!b || typeof b != "object" || !Object.keys(b).length)
      return Ge;
    const p = Ge;
    return Object.assign(function(y, S) {
      return p(y, S, vt(b, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}));
    }, { Minimatch: class extends p.Minimatch {
      constructor(y) {
        super(y, vt(b, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}));
      }
      static defaults(y) {
        return p.defaults(vt(b, y)).Minimatch;
      }
    }, unescape: function(y) {
      let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return p.unescape(y, vt(b, S));
    }, escape: function(y) {
      let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return p.escape(y, vt(b, S));
    }, filter: function(y) {
      let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return p.filter(y, vt(b, S));
    }, defaults: (y) => p.defaults(vt(b, y)), makeRe: function(y) {
      let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return p.makeRe(y, vt(b, S));
    }, braceExpand: function(y) {
      let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return p.braceExpand(y, vt(b, S));
    }, match: function(y, S) {
      let P = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return p.match(y, S, vt(b, P));
    }, sep: p.sep, GLOBSTAR: pe });
  };
  const Yr = function(b) {
    let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Zr(b), p.nobrace || !/\{(?:(?!\{).)*\}/.test(b) ? [b] : Qe(b);
  };
  Ge.braceExpand = Yr;
  const Zr = (b) => {
    if (typeof b != "string")
      throw new TypeError("invalid pattern");
    if (b.length > 65536)
      throw new TypeError("pattern is too long");
  };
  Ge.makeRe = function(b) {
    return new Fr(b, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).makeRe();
  }, Ge.match = function(b, p) {
    const y = new Fr(p, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {});
    return b = b.filter((S) => y.match(S)), y.options.nonull && !b.length && b.push(p), b;
  };
  const rr = /[?*]|[+@!]\(.*?\)|\[|\]/, Jr = (b) => b.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  class Fr {
    constructor(p) {
      let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      Le(this, "options", void 0), Le(this, "set", void 0), Le(this, "pattern", void 0), Le(this, "windowsPathsNoEscape", void 0), Le(this, "nonegate", void 0), Le(this, "negate", void 0), Le(this, "comment", void 0), Le(this, "empty", void 0), Le(this, "preserveMultipleSlashes", void 0), Le(this, "partial", void 0), Le(this, "globSet", void 0), Le(this, "globParts", void 0), Le(this, "nocase", void 0), Le(this, "isWindows", void 0), Le(this, "platform", void 0), Le(this, "windowsNoMagicRoot", void 0), Le(this, "regexp", void 0), Zr(p), y = y || {}, this.options = y, this.pattern = p, this.platform = y.platform || le, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!y.windowsPathsNoEscape || y.allowWindowsEscape === !1, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!y.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!y.nonegate, this.comment = !1, this.empty = !1, this.partial = !!y.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = y.windowsNoMagicRoot !== void 0 ? y.windowsNoMagicRoot : !(!this.isWindows || !this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
    }
    hasMagic() {
      if (this.options.magicalBraces && this.set.length > 1)
        return !0;
      for (const p of this.set)
        for (const y of p)
          if (typeof y != "string")
            return !0;
      return !1;
    }
    debug() {
    }
    make() {
      const p = this.pattern, y = this.options;
      if (!y.nocomment && p.charAt(0) === "#")
        return void (this.comment = !0);
      if (!p)
        return void (this.empty = !0);
      this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], y.debug && (this.debug = function() {
        return console.error(...arguments);
      }), this.debug(this.pattern, this.globSet);
      const S = this.globSet.map((N) => this.slashSplit(N));
      this.globParts = this.preprocess(S), this.debug(this.pattern, this.globParts);
      let P = this.globParts.map((N, U, W) => {
        if (this.isWindows && this.windowsNoMagicRoot) {
          const K = !(N[0] !== "" || N[1] !== "" || N[2] !== "?" && rr.test(N[2]) || rr.test(N[3])), Q = /^[a-z]:/i.test(N[0]);
          if (K)
            return [...N.slice(0, 4), ...N.slice(4).map((J) => this.parse(J))];
          if (Q)
            return [N[0], ...N.slice(1).map((J) => this.parse(J))];
        }
        return N.map((K) => this.parse(K));
      });
      if (this.debug(this.pattern, P), this.set = P.filter((N) => N.indexOf(!1) === -1), this.isWindows)
        for (let N = 0; N < this.set.length; N++) {
          const U = this.set[N];
          U[0] === "" && U[1] === "" && this.globParts[N][2] === "?" && typeof U[3] == "string" && /^[a-z]:$/i.test(U[3]) && (U[2] = "?");
        }
      this.debug(this.pattern, this.set);
    }
    preprocess(p) {
      if (this.options.noglobstar)
        for (let S = 0; S < p.length; S++)
          for (let P = 0; P < p[S].length; P++)
            p[S][P] === "**" && (p[S][P] = "*");
      const { optimizationLevel: y = 1 } = this.options;
      return y >= 2 ? (p = this.firstPhasePreProcess(p), p = this.secondPhasePreProcess(p)) : p = y >= 1 ? this.levelOneOptimize(p) : this.adjascentGlobstarOptimize(p), p;
    }
    adjascentGlobstarOptimize(p) {
      return p.map((y) => {
        let S = -1;
        for (; (S = y.indexOf("**", S + 1)) !== -1; ) {
          let P = S;
          for (; y[P + 1] === "**"; )
            P++;
          P !== S && y.splice(S, P - S);
        }
        return y;
      });
    }
    levelOneOptimize(p) {
      return p.map((y) => (y = y.reduce((S, P) => {
        const N = S[S.length - 1];
        return P === "**" && N === "**" ? S : P === ".." && N && N !== ".." && N !== "." && N !== "**" ? (S.pop(), S) : (S.push(P), S);
      }, [])).length === 0 ? [""] : y);
    }
    levelTwoFileOptimize(p) {
      Array.isArray(p) || (p = this.slashSplit(p));
      let y = !1;
      do {
        if (y = !1, !this.preserveMultipleSlashes) {
          for (let P = 1; P < p.length - 1; P++) {
            const N = p[P];
            P === 1 && N === "" && p[0] === "" || N !== "." && N !== "" || (y = !0, p.splice(P, 1), P--);
          }
          p[0] !== "." || p.length !== 2 || p[1] !== "." && p[1] !== "" || (y = !0, p.pop());
        }
        let S = 0;
        for (; (S = p.indexOf("..", S + 1)) !== -1; ) {
          const P = p[S - 1];
          P && P !== "." && P !== ".." && P !== "**" && (y = !0, p.splice(S - 1, 2), S -= 2);
        }
      } while (y);
      return p.length === 0 ? [""] : p;
    }
    firstPhasePreProcess(p) {
      let y = !1;
      do {
        y = !1;
        for (let S of p) {
          let P = -1;
          for (; (P = S.indexOf("**", P + 1)) !== -1; ) {
            let U = P;
            for (; S[U + 1] === "**"; )
              U++;
            U > P && S.splice(P + 1, U - P);
            let W = S[P + 1];
            const K = S[P + 2], Q = S[P + 3];
            if (W !== ".." || !K || K === "." || K === ".." || !Q || Q === "." || Q === "..")
              continue;
            y = !0, S.splice(P, 1);
            const J = S.slice(0);
            J[P] = "**", p.push(J), P--;
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
      return p;
    }
    secondPhasePreProcess(p) {
      for (let y = 0; y < p.length - 1; y++)
        for (let S = y + 1; S < p.length; S++) {
          const P = this.partsMatch(p[y], p[S], !this.preserveMultipleSlashes);
          P && (p[y] = P, p[S] = []);
        }
      return p.filter((y) => y.length);
    }
    partsMatch(p, y) {
      let S = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], P = 0, N = 0, U = [], W = "";
      for (; P < p.length && N < y.length; )
        if (p[P] === y[N])
          U.push(W === "b" ? y[N] : p[P]), P++, N++;
        else if (S && p[P] === "**" && y[N] === p[P + 1])
          U.push(p[P]), P++;
        else if (S && y[N] === "**" && p[P] === y[N + 1])
          U.push(y[N]), N++;
        else if (p[P] !== "*" || !y[N] || !this.options.dot && y[N].startsWith(".") || y[N] === "**") {
          if (y[N] !== "*" || !p[P] || !this.options.dot && p[P].startsWith(".") || p[P] === "**" || W === "a")
            return !1;
          W = "b", U.push(y[N]), P++, N++;
        } else {
          if (W === "b")
            return !1;
          W = "a", U.push(p[P]), P++, N++;
        }
      return p.length === y.length && U;
    }
    parseNegate() {
      if (this.nonegate)
        return;
      const p = this.pattern;
      let y = !1, S = 0;
      for (let P = 0; P < p.length && p.charAt(P) === "!"; P++)
        y = !y, S++;
      S && (this.pattern = p.slice(S)), this.negate = y;
    }
    matchOne(p, y) {
      let S = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
      const P = this.options;
      if (this.isWindows) {
        const ne = p[0] === "" && p[1] === "" && p[2] === "?" && typeof p[3] == "string" && /^[a-z]:$/i.test(p[3]), ie = y[0] === "" && y[1] === "" && y[2] === "?" && typeof y[3] == "string" && /^[a-z]:$/i.test(y[3]);
        if (ne && ie) {
          const ge = p[3], Se = y[3];
          ge.toLowerCase() === Se.toLowerCase() && (p[3] = Se);
        } else if (ie && typeof p[0] == "string") {
          const ge = y[3], Se = p[0];
          ge.toLowerCase() === Se.toLowerCase() && (y[3] = Se, y = y.slice(3));
        } else if (ne && typeof y[0] == "string") {
          const ge = p[3];
          ge.toLowerCase() === y[0].toLowerCase() && (y[0] = ge, p = p.slice(3));
        }
      }
      const { optimizationLevel: N = 1 } = this.options;
      N >= 2 && (p = this.levelTwoFileOptimize(p)), this.debug("matchOne", this, { file: p, pattern: y }), this.debug("matchOne", p.length, y.length);
      for (var U = 0, W = 0, K = p.length, Q = y.length; U < K && W < Q; U++, W++) {
        this.debug("matchOne loop");
        var J = y[W], oe = p[U];
        if (this.debug(y, J, oe), J === !1)
          return !1;
        if (J === pe) {
          this.debug("GLOBSTAR", [y, J, oe]);
          var be = U, Pe = W + 1;
          if (Pe === Q) {
            for (this.debug("** at the end"); U < K; U++)
              if (p[U] === "." || p[U] === ".." || !P.dot && p[U].charAt(0) === ".")
                return !1;
            return !0;
          }
          for (; be < K; ) {
            var we = p[be];
            if (this.debug(`
globstar while`, p, be, y, Pe, we), this.matchOne(p.slice(be), y.slice(Pe), S))
              return this.debug("globstar found match!", be, K, we), !0;
            if (we === "." || we === ".." || !P.dot && we.charAt(0) === ".") {
              this.debug("dot detected!", p, be, y, Pe);
              break;
            }
            this.debug("globstar swallow a segment, and continue"), be++;
          }
          return !(!S || (this.debug(`
>>> no match, partial?`, p, be, y, Pe), be !== K));
        }
        let ne;
        if (typeof J == "string" ? (ne = oe === J, this.debug("string match", J, oe, ne)) : (ne = J.test(oe), this.debug("pattern match", J, oe, ne)), !ne)
          return !1;
      }
      if (U === K && W === Q)
        return !0;
      if (U === K)
        return S;
      if (W === Q)
        return U === K - 1 && p[U] === "";
      throw new Error("wtf?");
    }
    braceExpand() {
      return Yr(this.pattern, this.options);
    }
    parse(p) {
      Zr(p);
      const y = this.options;
      if (p === "**")
        return pe;
      if (p === "")
        return "";
      let S, P = null;
      (S = p.match(M)) ? P = y.dot ? o : m : (S = p.match(Cr)) ? P = (y.nocase ? y.dot ? Nt : xt : y.dot ? Dt : mt)(S[1]) : (S = p.match(l)) ? P = (y.nocase ? y.dot ? A : T : y.dot ? k : j)(S) : (S = p.match(de)) ? P = y.dot ? E : ze : (S = p.match(O)) && (P = L);
      let N = "", U = !1, W = !1;
      const K = [], Q = [];
      let J, oe = !1, be = !1, Pe = p.charAt(0) === ".", we = y.dot || Pe;
      const ne = (me) => me.charAt(0) === "." ? "" : y.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)", ie = () => {
        if (oe) {
          switch (oe) {
            case "*":
              N += Lr, U = !0;
              break;
            case "?":
              N += tr, U = !0;
              break;
            default:
              N += "\\" + oe;
          }
          this.debug("clearStateChar %j %j", oe, N), oe = !1;
        }
      };
      for (let me, Oe = 0; Oe < p.length && (me = p.charAt(Oe)); Oe++)
        if (this.debug("%s	%s %s %j", p, Oe, N, me), W) {
          if (me === "/")
            return !1;
          ci[me] && (N += "\\"), N += me, W = !1;
        } else
          switch (me) {
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
              this.debug("%s	%s %s %j <-- stateChar", p, Oe, N, me), this.debug("call clearStateChar %j", oe), ie(), oe = me, y.noext && ie();
              continue;
            case "(": {
              if (!oe) {
                N += "\\(";
                continue;
              }
              const Ze = { type: oe, start: Oe - 1, reStart: N.length, open: Re[oe].open, close: Re[oe].close };
              this.debug(this.pattern, "	", Ze), K.push(Ze), N += Ze.open, Ze.start === 0 && Ze.type !== "!" && (Pe = !0, N += ne(p.slice(Oe + 1))), this.debug("plType %j %j", oe, N), oe = !1;
              continue;
            }
            case ")": {
              const Ze = K[K.length - 1];
              if (!Ze) {
                N += "\\)";
                continue;
              }
              K.pop(), ie(), U = !0, J = Ze, N += J.close, J.type === "!" && Q.push(Object.assign(J, { reEnd: N.length }));
              continue;
            }
            case "|": {
              const Ze = K[K.length - 1];
              if (!Ze) {
                N += "\\|";
                continue;
              }
              ie(), N += "|", Ze.start === 0 && Ze.type !== "!" && (Pe = !0, N += ne(p.slice(Oe + 1)));
              continue;
            }
            case "[":
              ie();
              const [He, ht, Ue, or] = zt(p, Oe);
              Ue ? (N += He, be = be || ht, Oe += Ue - 1, U = U || or) : N += "\\[";
              continue;
            case "]":
              N += "\\" + me;
              continue;
            default:
              ie(), N += Jr(me);
          }
      for (J = K.pop(); J; J = K.pop()) {
        let me;
        me = N.slice(J.reStart + J.open.length), this.debug(this.pattern, "setting tail", N, J), me = me.replace(/((?:\\{2}){0,64})(\\?)\|/g, (He, ht, Ue) => (Ue || (Ue = "\\"), ht + ht + Ue + "|")), this.debug(`tail=%j
   %s`, me, me, J, N);
        const Oe = J.type === "*" ? Lr : J.type === "?" ? tr : "\\" + J.type;
        U = !0, N = N.slice(0, J.reStart) + Oe + "\\(" + me;
      }
      ie(), W && (N += "\\\\");
      const ge = wo[N.charAt(0)];
      for (let me = Q.length - 1; me > -1; me--) {
        const Oe = Q[me], He = N.slice(0, Oe.reStart), ht = N.slice(Oe.reStart, Oe.reEnd - 8);
        let Ue = N.slice(Oe.reEnd);
        const or = N.slice(Oe.reEnd - 8, Oe.reEnd) + Ue, Ze = He.split(")").length, oh = He.split("(").length - Ze;
        let _o = Ue;
        for (let qs = 0; qs < oh; qs++)
          _o = _o.replace(/\)[+*?]?/, "");
        Ue = _o, N = He + ht + Ue + (Ue === "" ? "(?:$|\\/)" : "") + or;
      }
      if (N !== "" && U && (N = "(?=.)" + N), ge && (N = (Pe ? "" : we ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)") + N), !y.nocase || U || y.nocaseMagicOnly || (U = p.toUpperCase() !== p.toLowerCase()), !U)
        return N.replace(/\\(.)/g, "$1");
      const Se = (y.nocase ? "i" : "") + (be ? "u" : "");
      try {
        const me = P ? { _glob: p, _src: N, test: P } : { _glob: p, _src: N };
        return Object.assign(new RegExp("^" + N + "$", Se), me);
      } catch (me) {
        return this.debug("invalid regexp", me), new RegExp("$.");
      }
    }
    makeRe() {
      if (this.regexp || this.regexp === !1)
        return this.regexp;
      const p = this.set;
      if (!p.length)
        return this.regexp = !1, this.regexp;
      const y = this.options, S = y.noglobstar ? Lr : y.dot ? "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?" : "(?:(?!(?:\\/|^)\\.).)*?", P = y.nocase ? "i" : "";
      let N = p.map((U) => {
        const W = U.map((K) => typeof K == "string" ? Jr(K) : K === pe ? pe : K._src);
        return W.forEach((K, Q) => {
          const J = W[Q + 1], oe = W[Q - 1];
          K === pe && oe !== pe && (oe === void 0 ? J !== void 0 && J !== pe ? W[Q + 1] = "(?:\\/|" + S + "\\/)?" + J : W[Q] = S : J === void 0 ? W[Q - 1] = oe + "(?:\\/|" + S + ")?" : J !== pe && (W[Q - 1] = oe + "(?:\\/|\\/" + S + "\\/)" + J, W[Q + 1] = pe));
        }), W.filter((K) => K !== pe).join("/");
      }).join("|");
      N = "^(?:" + N + ")$", this.negate && (N = "^(?!" + N + ").*$");
      try {
        this.regexp = new RegExp(N, P);
      } catch {
        this.regexp = !1;
      }
      return this.regexp;
    }
    slashSplit(p) {
      return this.preserveMultipleSlashes ? p.split("/") : this.isWindows && /^\/\/[^\/]+/.test(p) ? ["", ...p.split(/\/+/)] : p.split(/\/+/);
    }
    match(p) {
      let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.partial;
      if (this.debug("match", p, this.pattern), this.comment)
        return !1;
      if (this.empty)
        return p === "";
      if (p === "/" && y)
        return !0;
      const S = this.options;
      this.isWindows && (p = p.split("\\").join("/"));
      const P = this.slashSplit(p);
      this.debug(this.pattern, "split", P);
      const N = this.set;
      this.debug(this.pattern, "set", N);
      let U = P[P.length - 1];
      if (!U)
        for (let W = P.length - 2; !U && W >= 0; W--)
          U = P[W];
      for (let W = 0; W < N.length; W++) {
        const K = N[W];
        let Q = P;
        if (S.matchBase && K.length === 1 && (Q = [U]), this.matchOne(Q, K, y))
          return !!S.flipNegate || !this.negate;
      }
      return !S.flipNegate && this.negate;
    }
    static defaults(p) {
      return Ge.defaults(p).Minimatch;
    }
  }
  function Qr(b) {
    const p = new Error("".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", "Invalid response: ").concat(b.status, " ").concat(b.statusText));
    return p.status = b.status, p.response = b, p;
  }
  function rt(b, p) {
    const { status: y } = p;
    if (y === 401 && b.digest)
      return p;
    if (y >= 400)
      throw Qr(p);
    return p;
  }
  function nr(b, p) {
    return arguments.length > 2 && arguments[2] !== void 0 && arguments[2] ? { data: p, headers: b.headers ? De(b.headers) : {}, status: b.status, statusText: b.statusText } : p;
  }
  Ge.Minimatch = Fr, Ge.escape = function(b) {
    let { windowsPathsNoEscape: p = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return p ? b.replace(/[?*()[\]]/g, "[$&]") : b.replace(/[?*()[\]\\]/g, "\\$&");
  }, Ge.unescape = function(b) {
    let { windowsPathsNoEscape: p = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return p ? b.replace(/\[([^\/\\])\]/g, "$1") : b.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
  };
  const Ht = /* @__PURE__ */ function(b) {
    return function() {
      for (var p = [], y = 0; y < arguments.length; y++)
        p[y] = arguments[y];
      try {
        return Promise.resolve(b.apply(this, p));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(b, p, y) {
    let S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const P = Ce({ url: w(b.remoteURL, u(p)), method: "COPY", headers: { Destination: w(b.remoteURL, u(y)) } }, b, S);
    return U = function(W) {
      rt(b, W);
    }, (N = je(P)) && N.then || (N = Promise.resolve(N)), U ? N.then(U) : N;
    var N, U;
  });
  var en = We(635), fi = We(829), Ut = We.n(fi), vr = function(b) {
    return b.Array = "array", b.Object = "object", b.Original = "original", b;
  }(vr || {});
  function tn(b, p) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : vr.Original;
    const S = Ut().get(b, p);
    return y === "array" && Array.isArray(S) === !1 ? [S] : y === "object" && Array.isArray(S) ? S[0] : S;
  }
  function se(b) {
    return new Promise((p) => {
      p(function(y) {
        const { multistatus: S } = y;
        if (S === "")
          return { multistatus: { response: [] } };
        if (!S)
          throw new Error("Invalid response: No root multistatus found");
        const P = { multistatus: Array.isArray(S) ? S[0] : S };
        return Ut().set(P, "multistatus.response", tn(P, "multistatus.response", vr.Array)), Ut().set(P, "multistatus.response", Ut().get(P, "multistatus.response").map((N) => function(U) {
          const W = Object.assign({}, U);
          return W.status ? Ut().set(W, "status", tn(W, "status", vr.Object)) : (Ut().set(W, "propstat", tn(W, "propstat", vr.Object)), Ut().set(W, "propstat.prop", tn(W, "propstat.prop", vr.Object))), W;
        }(N))), P;
      }(new en.XMLParser({ removeNSPrefix: !0, numberParseOptions: { hex: !0, leadingZeros: !1 } }).parse(b)));
    });
  }
  function B(b, p) {
    let y = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    const { getlastmodified: S = null, getcontentlength: P = "0", resourcetype: N = null, getcontenttype: U = null, getetag: W = null } = b, K = N && typeof N == "object" && N.collection !== void 0 ? "directory" : "file", Q = { filename: p, basename: h().basename(p), lastmod: S, size: parseInt(P, 10), type: K, etag: typeof W == "string" ? W.replace(/"/g, "") : null };
    return K === "file" && (Q.mime = U && typeof U == "string" ? U.split(";")[0] : ""), y && (Q.props = b), Q;
  }
  function ee(b, p) {
    let y = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], S = null;
    try {
      b.multistatus.response[0].propstat && (S = b.multistatus.response[0]);
    } catch {
    }
    if (!S)
      throw new Error("Failed getting item stat: bad response");
    const { propstat: { prop: P, status: N } } = S, [U, W, K] = N.split(" ", 3), Q = parseInt(W, 10);
    if (Q >= 400) {
      const J = new Error("Invalid response: ".concat(Q, " ").concat(K));
      throw J.status = Q, J;
    }
    return B(P, g(p), y);
  }
  function ae(b) {
    switch (b.toString()) {
      case "-3":
        return "unlimited";
      case "-2":
      case "-1":
        return "unknown";
      default:
        return parseInt(b, 10);
    }
  }
  function Fe(b, p, y) {
    return y ? p ? p(b) : b : (b && b.then || (b = Promise.resolve(b)), p ? b.then(p) : b);
  }
  const Ye = /* @__PURE__ */ function(b) {
    return function() {
      for (var p = [], y = 0; y < arguments.length; y++)
        p[y] = arguments[y];
      try {
        return Promise.resolve(b.apply(this, p));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(b, p) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { details: S = !1 } = y, P = Ce({ url: w(b.remoteURL, u(p)), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, b, y);
    return Fe(je(P), function(N) {
      return rt(b, N), Fe(N.text(), function(U) {
        return Fe(se(U), function(W) {
          const K = ee(W, p, S);
          return nr(N, K, S);
        });
      });
    });
  });
  function et(b, p, y) {
    return y ? p ? p(b) : b : (b && b.then || (b = Promise.resolve(b)), p ? b.then(p) : b);
  }
  const pt = ir(function(b, p) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const S = function(N) {
      if (!N || N === "/")
        return [];
      let U = N;
      const W = [];
      do
        W.push(U), U = h().dirname(U);
      while (U && U !== "/");
      return W;
    }(g(p));
    S.sort((N, U) => N.length > U.length ? 1 : U.length > N.length ? -1 : 0);
    let P = !1;
    return function(N, U, W) {
      if (typeof N[Fn] == "function") {
        let ie = function(ge) {
          try {
            for (; !(K = oe.next()).done; )
              if ((ge = U(K.value)) && ge.then) {
                if (!js(ge))
                  return void ge.then(ie, J || (J = nt.bind(null, Q = new rn(), 2)));
                ge = ge.v;
              }
            Q ? nt(Q, 1, ge) : Q = ge;
          } catch (Se) {
            nt(Q || (Q = new rn()), 2, Se);
          }
        };
        var ne = ie, K, Q, J, oe = N[Fn]();
        if (ie(), oe.return) {
          var be = function(ge) {
            try {
              K.done || oe.return();
            } catch {
            }
            return ge;
          };
          if (Q && Q.then)
            return Q.then(be, function(ge) {
              throw be(ge);
            });
          be();
        }
        return Q;
      }
      if (!("length" in N))
        throw new TypeError("Object is not iterable");
      for (var Pe = [], we = 0; we < N.length; we++)
        Pe.push(N[we]);
      return function(ie, ge, Se) {
        var me, Oe, He = -1;
        return function ht(Ue) {
          try {
            for (; ++He < ie.length && (!Se || !Se()); )
              if ((Ue = ge(He)) && Ue.then) {
                if (!js(Ue))
                  return void Ue.then(ht, Oe || (Oe = nt.bind(null, me = new rn(), 2)));
                Ue = Ue.v;
              }
            me ? nt(me, 1, Ue) : me = Ue;
          } catch (or) {
            nt(me || (me = new rn()), 2, or);
          }
        }(), me;
      }(Pe, function(ie) {
        return U(Pe[ie]);
      }, W);
    }(S, function(N) {
      return U = function() {
        return function(K, Q) {
          try {
            var J = et(Ye(b, N), function(oe) {
              if (oe.type !== "directory")
                throw new Error("Path includes a file: ".concat(p));
            });
          } catch (oe) {
            return Q(oe);
          }
          return J && J.then ? J.then(void 0, Q) : J;
        }(0, function(K) {
          const Q = K;
          return function() {
            if (Q.status === 404)
              return P = !0, at(bo(b, N, { ...y, recursive: !1 }));
            throw K;
          }();
        });
      }, (W = function() {
        if (P)
          return at(bo(b, N, { ...y, recursive: !1 }));
      }()) && W.then ? W.then(U) : U();
      var U, W;
    }, function() {
      return !1;
    });
  });
  function ir(b) {
    return function() {
      for (var p = [], y = 0; y < arguments.length; y++)
        p[y] = arguments[y];
      try {
        return Promise.resolve(b.apply(this, p));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }
  function kr() {
  }
  function at(b, p) {
    if (!p)
      return b && b.then ? b.then(kr) : Promise.resolve();
  }
  const Fn = typeof Symbol < "u" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
  function nt(b, p, y) {
    if (!b.s) {
      if (y instanceof rn) {
        if (!y.s)
          return void (y.o = nt.bind(null, b, p));
        1 & p && (p = y.s), y = y.v;
      }
      if (y && y.then)
        return void y.then(nt.bind(null, b, p), nt.bind(null, b, 2));
      b.s = p, b.v = y;
      const S = b.o;
      S && S(b);
    }
  }
  const rn = function() {
    function b() {
    }
    return b.prototype.then = function(p, y) {
      const S = new b(), P = this.s;
      if (P) {
        const N = 1 & P ? p : y;
        if (N) {
          try {
            nt(S, 1, N(this.v));
          } catch (U) {
            nt(S, 2, U);
          }
          return S;
        }
        return this;
      }
      return this.o = function(N) {
        try {
          const U = N.v;
          1 & N.s ? nt(S, 1, p ? p(U) : U) : y ? nt(S, 1, y(U)) : nt(S, 2, U);
        } catch (U) {
          nt(S, 2, U);
        }
      }, S;
    }, b;
  }();
  function js(b) {
    return b instanceof rn && 1 & b.s;
  }
  const bo = ir(function(b, p) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (y.recursive === !0)
      return pt(b, p, y);
    const S = Ce({ url: w(b.remoteURL, (P = u(p), P.endsWith("/") ? P : P + "/")), method: "MKCOL" }, b, y);
    var P;
    return et(je(S), function(N) {
      rt(b, N);
    });
  });
  var Mp = We(388), Gs = We.n(Mp);
  const Dp = /* @__PURE__ */ function(b) {
    return function() {
      for (var p = [], y = 0; y < arguments.length; y++)
        p[y] = arguments[y];
      try {
        return Promise.resolve(b.apply(this, p));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(b, p) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const S = {};
    if (typeof y.range == "object" && typeof y.range.start == "number") {
      let W = "bytes=".concat(y.range.start, "-");
      typeof y.range.end == "number" && (W = "".concat(W).concat(y.range.end)), S.Range = W;
    }
    const P = Ce({ url: w(b.remoteURL, u(p)), method: "GET", headers: S }, b, y);
    return U = function(W) {
      if (rt(b, W), S.Range && W.status !== 206) {
        const K = new Error("Invalid response code for partial request: ".concat(W.status));
        throw K.status = W.status, K;
      }
      return y.callback && setTimeout(() => {
        y.callback(W);
      }, 0), W.body;
    }, (N = je(P)) && N.then || (N = Promise.resolve(N)), U ? N.then(U) : N;
    var N, U;
  }), Up = () => {
  }, Bp = /* @__PURE__ */ function(b) {
    return function() {
      for (var p = [], y = 0; y < arguments.length; y++)
        p[y] = arguments[y];
      try {
        return Promise.resolve(b.apply(this, p));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(b, p, y) {
    y.url || (y.url = w(b.remoteURL, u(p)));
    const S = Ce(y, b, {});
    return N = function(U) {
      return rt(b, U), U;
    }, (P = je(S)) && P.then || (P = Promise.resolve(P)), N ? P.then(N) : P;
    var P, N;
  }), jp = /* @__PURE__ */ function(b) {
    return function() {
      for (var p = [], y = 0; y < arguments.length; y++)
        p[y] = arguments[y];
      try {
        return Promise.resolve(b.apply(this, p));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(b, p) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const S = Ce({ url: w(b.remoteURL, u(p)), method: "DELETE" }, b, y);
    return N = function(U) {
      rt(b, U);
    }, (P = je(S)) && P.then || (P = Promise.resolve(P)), N ? P.then(N) : P;
    var P, N;
  }), Gp = /* @__PURE__ */ function(b) {
    return function() {
      for (var p = [], y = 0; y < arguments.length; y++)
        p[y] = arguments[y];
      try {
        return Promise.resolve(b.apply(this, p));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(b, p) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function(S, P) {
      try {
        var N = (U = Ye(b, p, y), W = function() {
          return !0;
        }, K ? W ? W(U) : U : (U && U.then || (U = Promise.resolve(U)), W ? U.then(W) : U));
      } catch (Q) {
        return P(Q);
      }
      var U, W, K;
      return N && N.then ? N.then(void 0, P) : N;
    }(0, function(S) {
      if (S.status === 404)
        return !1;
      throw S;
    });
  });
  function Eo(b, p, y) {
    return y ? p ? p(b) : b : (b && b.then || (b = Promise.resolve(b)), p ? b.then(p) : b);
  }
  const Wp = /* @__PURE__ */ function(b) {
    return function() {
      for (var p = [], y = 0; y < arguments.length; y++)
        p[y] = arguments[y];
      try {
        return Promise.resolve(b.apply(this, p));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(b, p) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const S = Ce({ url: w(b.remoteURL, u(p), "/"), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: y.deep ? "infinity" : "1" } }, b, y);
    return Eo(je(S), function(P) {
      return rt(b, P), Eo(P.text(), function(N) {
        if (!N)
          throw new Error("Failed parsing directory contents: Empty response");
        return Eo(se(N), function(U) {
          const W = a(p);
          let K = function(Q, J, oe) {
            let be = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], Pe = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
            const we = h().join(J, "/"), { multistatus: { response: ne } } = Q, ie = ne.map((ge) => {
              const Se = function(Oe) {
                try {
                  return Oe.replace(/^https?:\/\/[^\/]+/, "");
                } catch (He) {
                  throw new s(He, "Failed normalising HREF");
                }
              }(ge.href), { propstat: { prop: me } } = ge;
              return B(me, we === "/" ? decodeURIComponent(g(Se)) : g(h().relative(decodeURIComponent(we), decodeURIComponent(Se))), be);
            });
            return Pe ? ie : ie.filter((ge) => ge.basename && (ge.type === "file" || ge.filename !== oe.replace(/\/$/, "")));
          }(U, a(b.remoteBasePath || b.remotePath), W, y.details, y.includeSelf);
          return y.glob && (K = function(Q, J) {
            return Q.filter((oe) => mr(oe.filename, J, { matchBase: !0 }));
          }(K, y.glob)), nr(P, K, y.details);
        });
      });
    });
  });
  function To(b) {
    return function() {
      for (var p = [], y = 0; y < arguments.length; y++)
        p[y] = arguments[y];
      try {
        return Promise.resolve(b.apply(this, p));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }
  const Vp = To(function(b, p) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const S = Ce({ url: w(b.remoteURL, u(p)), method: "GET", headers: { Accept: "text/plain" }, transformResponse: [Hp] }, b, y);
    return pi(je(S), function(P) {
      return rt(b, P), pi(P.text(), function(N) {
        return nr(P, N, y.details);
      });
    });
  });
  function pi(b, p, y) {
    return y ? p ? p(b) : b : (b && b.then || (b = Promise.resolve(b)), p ? b.then(p) : b);
  }
  const qp = To(function(b, p) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const S = Ce({ url: w(b.remoteURL, u(p)), method: "GET" }, b, y);
    return pi(je(S), function(P) {
      let N;
      return rt(b, P), function(U, W) {
        var K = U();
        return K && K.then ? K.then(W) : W();
      }(function() {
        return pi(P.arrayBuffer(), function(U) {
          N = U;
        });
      }, function() {
        return nr(P, N, y.details);
      });
    });
  }), zp = To(function(b, p) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { format: S = "binary" } = y;
    if (S !== "binary" && S !== "text")
      throw new s({ info: { code: Z.InvalidOutputFormat } }, "Invalid output format: ".concat(S));
    return S === "text" ? Vp(b, p, y) : qp(b, p, y);
  }), Hp = (b) => b;
  function Xp(b) {
    return new en.XMLBuilder({ attributeNamePrefix: "@_", format: !0, ignoreAttributes: !1, suppressEmptyNode: !0 }).build(Ws({ lockinfo: { "@_xmlns:d": "DAV:", lockscope: { exclusive: {} }, locktype: { write: {} }, owner: { href: b } } }, "d"));
  }
  function Ws(b, p) {
    const y = { ...b };
    for (const S in y)
      y.hasOwnProperty(S) && (y[S] && typeof y[S] == "object" && S.indexOf(":") === -1 ? (y["".concat(p, ":").concat(S)] = Ws(y[S], p), delete y[S]) : /^@_/.test(S) === !1 && (y["".concat(p, ":").concat(S)] = y[S], delete y[S]));
    return y;
  }
  function $o(b, p, y) {
    return y ? p ? p(b) : b : (b && b.then || (b = Promise.resolve(b)), p ? b.then(p) : b);
  }
  function Vs(b) {
    return function() {
      for (var p = [], y = 0; y < arguments.length; y++)
        p[y] = arguments[y];
      try {
        return Promise.resolve(b.apply(this, p));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }
  const Kp = Vs(function(b, p, y) {
    let S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const P = Ce({ url: w(b.remoteURL, u(p)), method: "UNLOCK", headers: { "Lock-Token": y } }, b, S);
    return $o(je(P), function(N) {
      if (rt(b, N), N.status !== 204 && N.status !== 200)
        throw Qr(N);
    });
  }), Yp = Vs(function(b, p) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { refreshToken: S, timeout: P = Zp } = y, N = { Accept: "text/plain,application/xml", Timeout: P };
    S && (N.If = S);
    const U = Ce({ url: w(b.remoteURL, u(p)), method: "LOCK", headers: N, data: Xp(b.contactHref) }, b, y);
    return $o(je(U), function(W) {
      return rt(b, W), $o(W.text(), function(K) {
        const Q = (be = K, new en.XMLParser({ removeNSPrefix: !0, parseAttributeValue: !0, parseTagValue: !0 }).parse(be)), J = Ut().get(Q, "prop.lockdiscovery.activelock.locktoken.href"), oe = Ut().get(Q, "prop.lockdiscovery.activelock.timeout");
        var be;
        if (!J)
          throw Qr(W, "No lock token received: ");
        return { token: J, serverTimeout: oe };
      });
    });
  }), Zp = "Infinite, Second-4100000000";
  function So(b, p, y) {
    return y ? p ? p(b) : b : (b && b.then || (b = Promise.resolve(b)), p ? b.then(p) : b);
  }
  const Jp = /* @__PURE__ */ function(b) {
    return function() {
      for (var p = [], y = 0; y < arguments.length; y++)
        p[y] = arguments[y];
      try {
        return Promise.resolve(b.apply(this, p));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(b) {
    let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const y = p.path || "/", S = Ce({ url: w(b.remoteURL, y), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, b, p);
    return So(je(S), function(P) {
      return rt(b, P), So(P.text(), function(N) {
        return So(se(N), function(U) {
          const W = function(K) {
            try {
              const [Q] = K.multistatus.response, { propstat: { prop: { "quota-used-bytes": J, "quota-available-bytes": oe } } } = Q;
              return J !== void 0 && oe !== void 0 ? { used: parseInt(J, 10), available: ae(oe) } : null;
            } catch {
            }
            return null;
          }(U);
          return nr(P, W, p.details);
        });
      });
    });
  });
  function Oo(b, p, y) {
    return y ? p ? p(b) : b : (b && b.then || (b = Promise.resolve(b)), p ? b.then(p) : b);
  }
  const Qp = /* @__PURE__ */ function(b) {
    return function() {
      for (var p = [], y = 0; y < arguments.length; y++)
        p[y] = arguments[y];
      try {
        return Promise.resolve(b.apply(this, p));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(b, p) {
    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { details: S = !1 } = y, P = Ce({ url: w(b.remoteURL, u(p)), method: "SEARCH", headers: { Accept: "text/plain,application/xml", "Content-Type": b.headers["Content-Type"] || "application/xml; charset=utf-8" } }, b, y);
    return Oo(je(P), function(N) {
      return rt(b, N), Oo(N.text(), function(U) {
        return Oo(se(U), function(W) {
          const K = function(Q, J, oe) {
            const be = { truncated: !1, results: [] };
            return be.truncated = Q.multistatus.response.some((Pe) => {
              var we, ne;
              return ((we = (Pe.status || ((ne = Pe.propstat) === null || ne === void 0 ? void 0 : ne.status)).split(" ", 3)) === null || we === void 0 ? void 0 : we[1]) === "507" && Pe.href.replace(/\/$/, "").endsWith(u(J).replace(/\/$/, ""));
            }), Q.multistatus.response.forEach((Pe) => {
              if (Pe.propstat === void 0)
                return;
              const we = Pe.href.split("/").map(decodeURIComponent).join("/");
              be.results.push(B(Pe.propstat.prop, we, oe));
            }), be;
          }(W, p, S);
          return nr(N, K, S);
        });
      });
    });
  }), eh = /* @__PURE__ */ function(b) {
    return function() {
      for (var p = [], y = 0; y < arguments.length; y++)
        p[y] = arguments[y];
      try {
        return Promise.resolve(b.apply(this, p));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(b, p, y) {
    let S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const P = Ce({ url: w(b.remoteURL, u(p)), method: "MOVE", headers: { Destination: w(b.remoteURL, u(y)) } }, b, S);
    return U = function(W) {
      rt(b, W);
    }, (N = je(P)) && N.then || (N = Promise.resolve(N)), U ? N.then(U) : N;
    var N, U;
  });
  var th = We(172);
  const rh = /* @__PURE__ */ function(b) {
    return function() {
      for (var p = [], y = 0; y < arguments.length; y++)
        p[y] = arguments[y];
      try {
        return Promise.resolve(b.apply(this, p));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(b, p, y) {
    let S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const { contentLength: P = !0, overwrite: N = !0 } = S, U = { "Content-Type": "application/octet-stream" };
    P === !1 || (U["Content-Length"] = "".concat(typeof P == "number" ? P : function(J) {
      if (Ne(J))
        return J.byteLength;
      if (Ae(J))
        return J.length;
      if (typeof J == "string")
        return (0, th.d)(J);
      throw new s({ info: { code: Z.DataTypeNoLength } }, "Cannot calculate data length: Invalid type");
    }(y))), N || (U["If-None-Match"] = "*");
    const W = Ce({ url: w(b.remoteURL, u(p)), method: "PUT", headers: U, data: y }, b, S);
    return Q = function(J) {
      try {
        rt(b, J);
      } catch (oe) {
        const be = oe;
        if (be.status !== 412 || N)
          throw be;
        return !1;
      }
      return !0;
    }, (K = je(W)) && K.then || (K = Promise.resolve(K)), Q ? K.then(Q) : K;
    var K, Q;
  }), nh = "https://github.com/perry-mitchell/webdav-client/blob/master/LOCK_CONTACT.md";
  function ih(b) {
    let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { authType: y = null, remoteBasePath: S, contactHref: P = nh, ha1: N, headers: U = {}, httpAgent: W, httpsAgent: K, password: Q, token: J, username: oe, withCredentials: be } = p;
    let Pe = y;
    Pe || (Pe = oe || Q ? X.Password : X.None);
    const we = { authType: Pe, remoteBasePath: S, contactHref: P, ha1: N, headers: Object.assign({}, U), httpAgent: W, httpsAgent: K, password: Q, remotePath: d(b), remoteURL: b, token: J, username: oe, withCredentials: be };
    return function(ne, ie, ge, Se, me) {
      switch (ne.authType) {
        case X.Digest:
          ne.digest = /* @__PURE__ */ function(He, ht, Ue) {
            return { username: He, password: ht, ha1: Ue, nc: 0, algorithm: "md5", hasDigestAuth: !1 };
          }(ie, ge, me);
          break;
        case X.None:
          break;
        case X.Password:
          ne.headers.Authorization = function(He, ht) {
            const Ue = (or = "".concat(He, ":").concat(ht), x().encode(or));
            var or;
            return "Basic ".concat(Ue);
          }(ie, ge);
          break;
        case X.Token:
          ne.headers.Authorization = "".concat((Oe = Se).token_type, " ").concat(Oe.access_token);
          break;
        default:
          throw new s({ info: { code: Z.InvalidAuthType } }, "Invalid auth type: ".concat(ne.authType));
      }
      var Oe;
    }(we, oe, Q, J, N), { copyFile: (ne, ie, ge) => Ht(we, ne, ie, ge), createDirectory: (ne, ie) => bo(we, ne, ie), createReadStream: (ne, ie) => function(ge, Se) {
      let me = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      const Oe = new (Gs()).PassThrough();
      return Dp(ge, Se, me).then((He) => {
        He.pipe(Oe);
      }).catch((He) => {
        Oe.emit("error", He);
      }), Oe;
    }(we, ne, ie), createWriteStream: (ne, ie, ge) => function(Se, me) {
      let Oe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, He = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Up;
      const ht = new (Gs()).PassThrough(), Ue = {};
      Oe.overwrite === !1 && (Ue["If-None-Match"] = "*");
      const or = Ce({ url: w(Se.remoteURL, u(me)), method: "PUT", headers: Ue, data: ht, maxRedirects: 0 }, Se, Oe);
      return je(or).then((Ze) => rt(Se, Ze)).then((Ze) => {
        setTimeout(() => {
          He(Ze);
        }, 0);
      }).catch((Ze) => {
        ht.emit("error", Ze);
      }), ht;
    }(we, ne, ie, ge), customRequest: (ne, ie) => Bp(we, ne, ie), deleteFile: (ne, ie) => jp(we, ne, ie), exists: (ne, ie) => Gp(we, ne, ie), getDirectoryContents: (ne, ie) => Wp(we, ne, ie), getFileContents: (ne, ie) => zp(we, ne, ie), getFileDownloadLink: (ne) => function(ie, ge) {
      let Se = w(ie.remoteURL, u(ge));
      const me = /^https:/i.test(Se) ? "https" : "http";
      switch (ie.authType) {
        case X.None:
          break;
        case X.Password: {
          const Oe = F(ie.headers.Authorization.replace(/^Basic /i, "").trim());
          Se = Se.replace(/^https?:\/\//, "".concat(me, "://").concat(Oe, "@"));
          break;
        }
        default:
          throw new s({ info: { code: Z.LinkUnsupportedAuthType } }, "Unsupported auth type for file link: ".concat(ie.authType));
      }
      return Se;
    }(we, ne), getFileUploadLink: (ne) => function(ie, ge) {
      let Se = "".concat(w(ie.remoteURL, u(ge)), "?Content-Type=application/octet-stream");
      const me = /^https:/i.test(Se) ? "https" : "http";
      switch (ie.authType) {
        case X.None:
          break;
        case X.Password: {
          const Oe = F(ie.headers.Authorization.replace(/^Basic /i, "").trim());
          Se = Se.replace(/^https?:\/\//, "".concat(me, "://").concat(Oe, "@"));
          break;
        }
        default:
          throw new s({ info: { code: Z.LinkUnsupportedAuthType } }, "Unsupported auth type for file link: ".concat(ie.authType));
      }
      return Se;
    }(we, ne), getHeaders: () => Object.assign({}, we.headers), getQuota: (ne) => Jp(we, ne), lock: (ne, ie) => Yp(we, ne, ie), moveFile: (ne, ie, ge) => eh(we, ne, ie, ge), putFileContents: (ne, ie, ge) => rh(we, ne, ie, ge), search: (ne, ie) => Qp(we, ne, ie), setHeaders: (ne) => {
      we.headers = Object.assign({}, ne);
    }, stat: (ne, ie) => Ye(we, ne, ie), unlock: (ne, ie, ge) => Kp(we, ne, ie, ge) };
  }
})();
Qt.hT;
Qt.O4;
Qt.Kd;
Qt.YK;
var L$ = Qt.UU, F$ = Qt.Gu;
Qt.ky;
Qt.h4;
Qt.hq;
Qt.i5;
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
const k$ = (r) => r === null ? Oa.getLoggerBuilder().setApp("files").build() : Oa.getLoggerBuilder().setApp("files").setUid(r.uid).build(), qi = k$(Xi());
/**
 * @copyright Copyright (c) 2021 John Molakvoæ <skjnldsv@protonmail.com>
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
class M$ {
  constructor() {
    yr(this, "_entries", []);
  }
  registerEntry(e) {
    this.validateEntry(e), this._entries.push(e);
  }
  unregisterEntry(e) {
    const n = typeof e == "string" ? this.getEntryIndex(e) : this.getEntryIndex(e.id);
    if (n === -1) {
      qi.warn("Entry not found, nothing removed", { entry: e, entries: this.getEntries() });
      return;
    }
    this._entries.splice(n, 1);
  }
  /**
   * Get the list of registered entries
   *
   * @param {Folder} context the creation context. Usually the current folder
   */
  getEntries(e) {
    return e ? this._entries.filter((n) => typeof n.enabled == "function" ? n.enabled(e) : !0) : this._entries;
  }
  getEntryIndex(e) {
    return this._entries.findIndex((n) => n.id === e);
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
const D$ = function() {
  return typeof window._nc_newfilemenu > "u" && (window._nc_newfilemenu = new M$(), qi.debug("NewFileMenu initialized")), window._nc_newfilemenu;
};
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
var Ap = /* @__PURE__ */ ((r) => (r.DEFAULT = "default", r.HIDDEN = "hidden", r))(Ap || {});
const Ql = function(r) {
  if (typeof window._nc_fileactions > "u" && (window._nc_fileactions = [], qi.debug("FileActions initialized")), window._nc_fileactions.find((e) => e.id === r.id)) {
    qi.error(`FileAction ${r.id} already registered`, { action: r });
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
var lt = /* @__PURE__ */ ((r) => (r[r.NONE = 0] = "NONE", r[r.CREATE = 4] = "CREATE", r[r.READ = 1] = "READ", r[r.UPDATE = 2] = "UPDATE", r[r.DELETE = 8] = "DELETE", r[r.SHARE = 16] = "SHARE", r[r.ALL = 31] = "ALL", r))(lt || {});
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
const U$ = [
  "d:getcontentlength",
  "d:getcontenttype",
  "d:getetag",
  "d:getlastmodified",
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
], B$ = {
  d: "DAV:",
  nc: "http://nextcloud.org/ns",
  oc: "http://owncloud.org/ns",
  ocs: "http://open-collaboration-services.org/ns"
}, j$ = function() {
  return typeof window._nc_dav_properties > "u" && (window._nc_dav_properties = [...U$]), window._nc_dav_properties.map((r) => `<${r} />`).join(" ");
}, G$ = function() {
  return typeof window._nc_dav_namespaces > "u" && (window._nc_dav_namespaces = { ...B$ }), Object.keys(window._nc_dav_namespaces).map((r) => {
    var e;
    return `xmlns:${r}="${(e = window._nc_dav_namespaces) == null ? void 0 : e[r]}"`;
  }).join(" ");
}, W$ = function() {
  return `<?xml version="1.0"?>
		<d:propfind ${G$()}>
			<d:prop>
				${j$()}
			</d:prop>
		</d:propfind>`;
};
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
const V$ = function(r = "") {
  let e = lt.NONE;
  return r && ((r.includes("C") || r.includes("K")) && (e |= lt.CREATE), r.includes("G") && (e |= lt.READ), (r.includes("W") || r.includes("N") || r.includes("V")) && (e |= lt.UPDATE), r.includes("D") && (e |= lt.DELETE), r.includes("R") && (e |= lt.SHARE)), e;
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
var Us = /* @__PURE__ */ ((r) => (r.Folder = "folder", r.File = "file", r))(Us || {});
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
const xp = function(r, e) {
  return r.match(e) !== null;
}, ec = (r, e) => {
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
  if (r.mtime && !(r.mtime instanceof Date))
    throw new Error("Invalid mtime type");
  if (r.crtime && !(r.crtime instanceof Date))
    throw new Error("Invalid crtime type");
  if (!r.mime || typeof r.mime != "string" || !r.mime.match(/^[-\w.]+\/[-+\w.]+$/gi))
    throw new Error("Missing or invalid mandatory mime");
  if ("size" in r && typeof r.size != "number" && r.size !== void 0)
    throw new Error("Invalid size type");
  if ("permissions" in r && r.permissions !== void 0 && !(typeof r.permissions == "number" && r.permissions >= lt.NONE && r.permissions <= lt.ALL))
    throw new Error("Invalid permissions");
  if (r.owner && r.owner !== null && typeof r.owner != "string")
    throw new Error("Invalid owner type");
  if (r.attributes && typeof r.attributes != "object")
    throw new Error("Invalid attributes type");
  if (r.root && typeof r.root != "string")
    throw new Error("Invalid root type");
  if (r.root && !r.root.startsWith("/"))
    throw new Error("Root must start with a leading slash");
  if (r.root && !r.source.includes(r.root))
    throw new Error("Root must be part of the source");
  if (r.root && xp(r.source, e)) {
    const n = r.source.match(e)[0];
    if (!r.source.includes(Dr.join(n, r.root)))
      throw new Error("The root must be relative to the service. e.g /files/emma");
  }
  if (r.status && !Object.values(Np).includes(r.status))
    throw new Error("Status must be a valid NodeStatus");
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
var Np = /* @__PURE__ */ ((r) => (r.NEW = "new", r.FAILED = "failed", r.LOADING = "loading", r.LOCKED = "locked", r))(Np || {});
class Rp {
  constructor(e, n) {
    yr(this, "_data");
    yr(this, "_attributes");
    yr(this, "_knownDavService", /(remote|public)\.php\/(web)?dav/i);
    ec(e, n || this._knownDavService), this._data = e;
    const i = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set: (s, c, h) => (this.updateMtime(), Reflect.set(s, c, h)),
      deleteProperty: (s, c) => (this.updateMtime(), Reflect.deleteProperty(s, c))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    };
    this._attributes = new Proxy(e.attributes || {}, i), delete this._data.attributes, n && (this._knownDavService = n);
  }
  /**
   * Get the source url to this object
   */
  get source() {
    return this._data.source.replace(/\/$/i, "");
  }
  /**
   * Get the encoded source url to this object for requests purposes
   */
  get encodedSource() {
    const { origin: e } = new URL(this.source);
    return e + S$(this.source.slice(e.length));
  }
  /**
   * Get this object name
   */
  get basename() {
    return Dr.basename(this.source);
  }
  /**
   * Get this object's extension
   */
  get extension() {
    return Dr.extname(this.source);
  }
  /**
   * Get the directory path leading to this object
   * Will use the relative path to root if available
   */
  get dirname() {
    if (this.root) {
      let n = this.source;
      this.isDavRessource && (n = n.split(this._knownDavService).pop());
      const i = n.indexOf(this.root), s = this.root.replace(/\/$/, "");
      return Dr.dirname(n.slice(i + s.length) || "/");
    }
    const e = new URL(this.source);
    return Dr.dirname(e.pathname);
  }
  /**
   * Get the file mime
   */
  get mime() {
    return this._data.mime;
  }
  /**
   * Get the file modification time
   */
  get mtime() {
    return this._data.mtime;
  }
  /**
   * Get the file creation time
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
   * Get the file attribute
   */
  get attributes() {
    return this._attributes;
  }
  /**
   * Get the file permissions
   */
  get permissions() {
    return this.owner === null && !this.isDavRessource ? lt.READ : this._data.permissions !== void 0 ? this._data.permissions : lt.NONE;
  }
  /**
   * Get the file owner
   */
  get owner() {
    return this.isDavRessource ? this._data.owner : null;
  }
  /**
   * Is this a dav-related ressource ?
   */
  get isDavRessource() {
    return xp(this.source, this._knownDavService);
  }
  /**
   * Get the dav root of this object
   */
  get root() {
    return this._data.root ? this._data.root.replace(/^(.+)\/$/, "$1") : this.isDavRessource && Dr.dirname(this.source).split(this._knownDavService).pop() || null;
  }
  /**
   * Get the absolute path of this object relative to the root
   */
  get path() {
    if (this.root) {
      let e = this.source;
      this.isDavRessource && (e = e.split(this._knownDavService).pop());
      const n = e.indexOf(this.root), i = this.root.replace(/\/$/, "");
      return e.slice(n + i.length) || "/";
    }
    return (this.dirname + "/" + this.basename).replace(/\/\//g, "/");
  }
  /**
   * Get the node id if defined.
   * Will look for the fileid in attributes if undefined.
   */
  get fileid() {
    var e, n;
    return ((e = this._data) == null ? void 0 : e.id) || ((n = this.attributes) == null ? void 0 : n.fileid);
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
    this._data.status = e;
  }
  /**
   * Move the node to a new destination
   *
   * @param {string} destination the new source.
   * e.g. https://cloud.domain.com/remote.php/dav/files/emma/Photos/picture.jpg
   */
  move(e) {
    ec({ ...this._data, source: e }, this._knownDavService), this._data.source = e, this.updateMtime();
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
    this.move(Dr.dirname(this.source) + "/" + e);
  }
  /**
   * Update the mtime if exists.
   */
  updateMtime() {
    this._data.mtime && (this._data.mtime = /* @__PURE__ */ new Date());
  }
}
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
class q$ extends Rp {
  get type() {
    return Us.File;
  }
}
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
class z$ extends Rp {
  constructor(e) {
    super({
      ...e,
      mime: "httpd/unix-directory"
    });
  }
  get type() {
    return Us.Folder;
  }
  get extension() {
    return null;
  }
  get mime() {
    return "httpd/unix-directory";
  }
}
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
var yc;
const Pp = `/files/${(yc = Xi()) == null ? void 0 : yc.uid}`, Cp = N$("dav"), H$ = function(r = Cp, e = {}) {
  const n = L$(r, { headers: e });
  function i(s) {
    n.setHeaders({
      ...e,
      // Add this so the server knows it is an request from the browser
      "X-Requested-With": "XMLHttpRequest",
      // Inject user auth
      requesttoken: s ?? ""
    });
  }
  return kc(i), i(Fc()), F$().patch("fetch", (s, c) => {
    const h = c.headers;
    return h != null && h.method && (c.method = h.method, delete h.method), fetch(s, c);
  }), n;
}, X$ = function(r, e = Pp, n = Cp) {
  var v, u;
  const i = (v = Xi()) == null ? void 0 : v.uid;
  if (!i)
    throw new Error("No user id found");
  const s = r.props, c = V$(s == null ? void 0 : s.permissions), h = ((s == null ? void 0 : s["owner-id"]) || i).toString(), f = {
    id: (s == null ? void 0 : s.fileid) || 0,
    source: `${n}${r.filename}`,
    mtime: new Date(Date.parse(r.lastmod)),
    mime: r.mime || "application/octet-stream",
    size: (s == null ? void 0 : s.size) || Number.parseInt(s.getcontentlength || "0"),
    permissions: c,
    owner: h,
    root: e,
    attributes: {
      ...r,
      ...s,
      hasPreview: s == null ? void 0 : s["has-preview"]
    }
  };
  return (u = f.attributes) == null || delete u.props, r.type === "file" ? new q$(f) : new z$(f);
};
var K$ = {};
(function(r) {
  const e = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", n = e + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", i = "[" + e + "][" + n + "]*", s = new RegExp("^" + i + "$"), c = function(f, v) {
    const u = [];
    let a = v.exec(f);
    for (; a; ) {
      const g = [];
      g.startIndex = v.lastIndex - a[0].length;
      const d = a.length;
      for (let w = 0; w < d; w++)
        g.push(a[w]);
      u.push(g), a = v.exec(f);
    }
    return u;
  }, h = function(f) {
    const v = s.exec(f);
    return !(v === null || typeof v > "u");
  };
  r.isExist = function(f) {
    return typeof f < "u";
  }, r.isEmptyObject = function(f) {
    return Object.keys(f).length === 0;
  }, r.merge = function(f, v, u) {
    if (v) {
      const a = Object.keys(v), g = a.length;
      for (let d = 0; d < g; d++)
        u === "strict" ? f[a[d]] = [v[a[d]]] : f[a[d]] = v[a[d]];
    }
  }, r.getValue = function(f) {
    return r.isExist(f) ? f : "";
  }, r.isName = h, r.getAllMatches = c, r.nameRegexp = i;
})(K$);
!Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt);
!Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
/**
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
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
const Y$ = function(r) {
  return D$().registerEntry(r);
};
function tc(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "You are about to visit:") + ""
  ), i, s, c, h, f = (
    /*file*/
    r[0].url + ""
  ), v, u, a;
  return {
    c() {
      e = _e("p"), i = ct(n), s = qe(), c = _e("em"), h = _e("a"), v = ct(f), ue(h, "href", u = wt(
        /*file*/
        r[0].url
      )), ue(h, "target", a = /*file*/
      r[0].sameWindow ? "_self" : "_blank"), ue(e, "class", "urldisplay");
    },
    m(g, d) {
      Me(g, e, d), ve(e, i), ve(e, s), ve(e, c), ve(c, h), ve(h, v);
    },
    p(g, d) {
      d & /*file*/
      1 && f !== (f = /*file*/
      g[0].url + "") && Qa(v, f), d & /*file*/
      1 && u !== (u = wt(
        /*file*/
        g[0].url
      )) && ue(h, "href", u), d & /*file*/
      1 && a !== (a = /*file*/
      g[0].sameWindow ? "_self" : "_blank") && ue(h, "target", a);
    },
    d(g) {
      g && ke(e);
    }
  };
}
function rc(r) {
  let e = Gt.userCanEdit() || /*file*/
  r[0].permissions >= lt.UPDATE, n, i, s = (
    /*t*/
    r[2]("files_linkeditor", "Visit link") + ""
  ), c, h, f, v = e && nc(r);
  return {
    c() {
      v && v.c(), n = qe(), i = _e("a"), c = ct(s), ue(i, "href", h = wt(
        /*file*/
        r[0].url
      )), ue(i, "target", f = /*file*/
      r[0].sameWindow ? "_self" : "_blank"), ue(i, "class", "button primary");
    },
    m(u, a) {
      v && v.m(u, a), Me(u, n, a), Me(u, i, a), ve(i, c);
    },
    p(u, a) {
      a & /*file*/
      1 && (e = Gt.userCanEdit() || /*file*/
      u[0].permissions >= lt.UPDATE), e ? v ? v.p(u, a) : (v = nc(u), v.c(), v.m(n.parentNode, n)) : v && (v.d(1), v = null), a & /*file*/
      1 && h !== (h = wt(
        /*file*/
        u[0].url
      )) && ue(i, "href", h), a & /*file*/
      1 && f !== (f = /*file*/
      u[0].sameWindow ? "_self" : "_blank") && ue(i, "target", f);
    },
    d(u) {
      u && (ke(n), ke(i)), v && v.d(u);
    }
  };
}
function nc(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "Edit link") + ""
  ), i, s, c;
  return {
    c() {
      e = _e("a"), i = ct(n), ue(e, "href", window.location.href), ue(e, "class", "button");
    },
    m(h, f) {
      Me(h, e, f), ve(e, i), s || (c = _t(e, "click", Er(
        /*click_handler_1*/
        r[4]
      )), s = !0);
    },
    p: dr,
    d(h) {
      h && ke(e), s = !1, c();
    }
  };
}
function Z$(r) {
  let e, n, i = (
    /*file*/
    r[0].name + ""
  ), s, c, h, f, v, u = (
    /*t*/
    r[2]("files_linkeditor", "Cancel") + ""
  ), a, g, d, w, $ = !/*loading*/
  r[1] && tc(r), I = !/*loading*/
  r[1] && rc(r);
  return {
    c() {
      e = _e("div"), n = _e("h3"), s = ct(i), c = qe(), $ && $.c(), h = qe(), f = _e("div"), v = _e("a"), a = ct(u), g = qe(), I && I.c(), ue(e, "class", "edit push-bottom"), ue(v, "href", window.location.href), ue(v, "class", "button"), ue(f, "class", "oc-dialog-buttonrow twobuttons");
    },
    m(R, D) {
      Me(R, e, D), ve(e, n), ve(n, s), ve(e, c), $ && $.m(e, null), Me(R, h, D), Me(R, f, D), ve(f, v), ve(v, a), ve(f, g), I && I.m(f, null), d || (w = _t(v, "click", Er(
        /*click_handler*/
        r[3]
      )), d = !0);
    },
    p(R, D) {
      D & /*file*/
      1 && i !== (i = /*file*/
      R[0].name + "") && Qa(s, i), /*loading*/
      R[1] ? $ && ($.d(1), $ = null) : $ ? $.p(R, D) : ($ = tc(R), $.c(), $.m(e, null)), /*loading*/
      R[1] ? I && (I.d(1), I = null) : I ? I.p(R, D) : (I = rc(R), I.c(), I.m(f, null));
    },
    d(R) {
      R && (ke(e), ke(h), ke(f)), $ && $.d(), I && I.d(), d = !1, w();
    }
  };
}
function J$(r) {
  let e, n;
  return e = new ts({
    props: {
      loading: (
        /*loading*/
        r[1]
      ),
      $$slots: { default: [Z$] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      In(e.$$.fragment);
    },
    m(i, s) {
      qr(e, i, s), n = !0;
    },
    p(i, [s]) {
      const c = {};
      s & /*loading*/
      2 && (c.loading = /*loading*/
      i[1]), s & /*$$scope, file, loading*/
      67 && (c.$$scope = { dirty: s, ctx: i }), e.$set(c);
    },
    i(i) {
      n || (ut(e.$$.fragment, i), n = !0);
    },
    o(i) {
      Lt(e.$$.fragment, i), n = !1;
    },
    d(i) {
      zr(e, i);
    }
  };
}
function Q$(r, e, n) {
  let i, s;
  const c = window.t;
  let h;
  zi(() => {
    h = hr.subscribe(async (u) => {
      if (n(0, i = u), i && i.isLoaded) {
        if (n(1, s = !1), !i.url) {
          OC.dialogs.alert(c("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."), c("files_linkeditor", "A slight problem"));
          return;
        }
        i.skipConfirmation && i.sameWindow && (window.location.href = i.url, Ft.update(() => "none"));
      }
    });
  }), Hi(() => {
    h();
  });
  const f = () => {
    Ft.update(() => "none");
  }, v = () => {
    Ft.update(() => "edit");
  };
  return n(0, i = Gt.getFileConfig()), n(1, s = !0), [i, s, c, f, v];
}
class eS extends xn {
  constructor(e) {
    super(), An(this, e, Q$, J$, Vr, {});
  }
}
var Lp = { exports: {} };
(function(r) {
  var e = function(n) {
    var i = 1e7, s = 7, c = 9007199254740992, h = $(c), f = "0123456789abcdefghijklmnopqrstuvwxyz", v = typeof BigInt == "function";
    function u(E, O, L, M) {
      return typeof E > "u" ? u[0] : typeof O < "u" ? +O == 10 && !L ? de(E) : Ge(E, O, L, M) : de(E);
    }
    function a(E, O) {
      this.value = E, this.sign = O, this.isSmall = !1;
    }
    a.prototype = Object.create(u.prototype);
    function g(E) {
      this.value = E, this.sign = E < 0, this.isSmall = !0;
    }
    g.prototype = Object.create(u.prototype);
    function d(E) {
      this.value = E;
    }
    d.prototype = Object.create(u.prototype);
    function w(E) {
      return -c < E && E < c;
    }
    function $(E) {
      return E < 1e7 ? [E] : E < 1e14 ? [E % 1e7, Math.floor(E / 1e7)] : [E % 1e7, Math.floor(E / 1e7) % 1e7, Math.floor(E / 1e14)];
    }
    function I(E) {
      R(E);
      var O = E.length;
      if (O < 4 && De(E, h) < 0)
        switch (O) {
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
    function R(E) {
      for (var O = E.length; E[--O] === 0; )
        ;
      E.length = O + 1;
    }
    function D(E) {
      for (var O = new Array(E), L = -1; ++L < E; )
        O[L] = 0;
      return O;
    }
    function _(E) {
      return E > 0 ? Math.floor(E) : Math.ceil(E);
    }
    function x(E, O) {
      var L = E.length, M = O.length, m = new Array(L), o = 0, l = i, T, A;
      for (A = 0; A < M; A++)
        T = E[A] + O[A] + o, o = T >= l ? 1 : 0, m[A] = T - o * l;
      for (; A < L; )
        T = E[A] + o, o = T === l ? 1 : 0, m[A++] = T - o * l;
      return o > 0 && m.push(o), m;
    }
    function F(E, O) {
      return E.length >= O.length ? x(E, O) : x(O, E);
    }
    function C(E, O) {
      var L = E.length, M = new Array(L), m = i, o, l;
      for (l = 0; l < L; l++)
        o = E[l] - m + O, O = Math.floor(o / m), M[l] = o - O * m, O += 1;
      for (; O > 0; )
        M[l++] = O % m, O = Math.floor(O / m);
      return M;
    }
    a.prototype.add = function(E) {
      var O = de(E);
      if (this.sign !== O.sign)
        return this.subtract(O.negate());
      var L = this.value, M = O.value;
      return O.isSmall ? new a(C(L, Math.abs(M)), this.sign) : new a(F(L, M), this.sign);
    }, a.prototype.plus = a.prototype.add, g.prototype.add = function(E) {
      var O = de(E), L = this.value;
      if (L < 0 !== O.sign)
        return this.subtract(O.negate());
      var M = O.value;
      if (O.isSmall) {
        if (w(L + M))
          return new g(L + M);
        M = $(Math.abs(M));
      }
      return new a(C(M, Math.abs(L)), L < 0);
    }, g.prototype.plus = g.prototype.add, d.prototype.add = function(E) {
      return new d(this.value + de(E).value);
    }, d.prototype.plus = d.prototype.add;
    function z(E, O) {
      var L = E.length, M = O.length, m = new Array(L), o = 0, l = i, T, A;
      for (T = 0; T < M; T++)
        A = E[T] - o - O[T], A < 0 ? (A += l, o = 1) : o = 0, m[T] = A;
      for (T = M; T < L; T++) {
        if (A = E[T] - o, A < 0)
          A += l;
        else {
          m[T++] = A;
          break;
        }
        m[T] = A;
      }
      for (; T < L; T++)
        m[T] = E[T];
      return R(m), m;
    }
    function q(E, O, L) {
      var M;
      return De(E, O) >= 0 ? M = z(E, O) : (M = z(O, E), L = !L), M = I(M), typeof M == "number" ? (L && (M = -M), new g(M)) : new a(M, L);
    }
    function G(E, O, L) {
      var M = E.length, m = new Array(M), o = -O, l = i, T, A;
      for (T = 0; T < M; T++)
        A = E[T] + o, o = Math.floor(A / l), A %= l, m[T] = A < 0 ? A + l : A;
      return m = I(m), typeof m == "number" ? (L && (m = -m), new g(m)) : new a(m, L);
    }
    a.prototype.subtract = function(E) {
      var O = de(E);
      if (this.sign !== O.sign)
        return this.add(O.negate());
      var L = this.value, M = O.value;
      return O.isSmall ? G(L, Math.abs(M), this.sign) : q(L, M, this.sign);
    }, a.prototype.minus = a.prototype.subtract, g.prototype.subtract = function(E) {
      var O = de(E), L = this.value;
      if (L < 0 !== O.sign)
        return this.add(O.negate());
      var M = O.value;
      return O.isSmall ? new g(L - M) : G(M, Math.abs(L), L >= 0);
    }, g.prototype.minus = g.prototype.subtract, d.prototype.subtract = function(E) {
      return new d(this.value - de(E).value);
    }, d.prototype.minus = d.prototype.subtract, a.prototype.negate = function() {
      return new a(this.value, !this.sign);
    }, g.prototype.negate = function() {
      var E = this.sign, O = new g(-this.value);
      return O.sign = !E, O;
    }, d.prototype.negate = function() {
      return new d(-this.value);
    }, a.prototype.abs = function() {
      return new a(this.value, !1);
    }, g.prototype.abs = function() {
      return new g(Math.abs(this.value));
    }, d.prototype.abs = function() {
      return new d(this.value >= 0 ? this.value : -this.value);
    };
    function X(E, O) {
      var L = E.length, M = O.length, m = L + M, o = D(m), l = i, T, A, k, j, te;
      for (k = 0; k < L; ++k) {
        j = E[k];
        for (var ce = 0; ce < M; ++ce)
          te = O[ce], T = j * te + o[k + ce], A = Math.floor(T / l), o[k + ce] = T - A * l, o[k + ce + 1] += A;
      }
      return R(o), o;
    }
    function Z(E, O) {
      var L = E.length, M = new Array(L), m = i, o = 0, l, T;
      for (T = 0; T < L; T++)
        l = E[T] * O + o, o = Math.floor(l / m), M[T] = l - o * m;
      for (; o > 0; )
        M[T++] = o % m, o = Math.floor(o / m);
      return M;
    }
    function H(E, O) {
      for (var L = []; O-- > 0; )
        L.push(0);
      return L.concat(E);
    }
    function Y(E, O) {
      var L = Math.max(E.length, O.length);
      if (L <= 30)
        return X(E, O);
      L = Math.ceil(L / 2);
      var M = E.slice(L), m = E.slice(0, L), o = O.slice(L), l = O.slice(0, L), T = Y(m, l), A = Y(M, o), k = Y(F(m, M), F(l, o)), j = F(F(T, H(z(z(k, T), A), L)), H(A, 2 * L));
      return R(j), j;
    }
    function V(E, O) {
      return -0.012 * E - 0.012 * O + 15e-6 * E * O > 0;
    }
    a.prototype.multiply = function(E) {
      var O = de(E), L = this.value, M = O.value, m = this.sign !== O.sign, o;
      if (O.isSmall) {
        if (M === 0)
          return u[0];
        if (M === 1)
          return this;
        if (M === -1)
          return this.negate();
        if (o = Math.abs(M), o < i)
          return new a(Z(L, o), m);
        M = $(o);
      }
      return V(L.length, M.length) ? new a(Y(L, M), m) : new a(X(L, M), m);
    }, a.prototype.times = a.prototype.multiply;
    function re(E, O, L) {
      return E < i ? new a(Z(O, E), L) : new a(X(O, $(E)), L);
    }
    g.prototype._multiplyBySmall = function(E) {
      return w(E.value * this.value) ? new g(E.value * this.value) : re(Math.abs(E.value), $(Math.abs(this.value)), this.sign !== E.sign);
    }, a.prototype._multiplyBySmall = function(E) {
      return E.value === 0 ? u[0] : E.value === 1 ? this : E.value === -1 ? this.negate() : re(Math.abs(E.value), this.value, this.sign !== E.sign);
    }, g.prototype.multiply = function(E) {
      return de(E)._multiplyBySmall(this);
    }, g.prototype.times = g.prototype.multiply, d.prototype.multiply = function(E) {
      return new d(this.value * de(E).value);
    }, d.prototype.times = d.prototype.multiply;
    function he(E) {
      var O = E.length, L = D(O + O), M = i, m, o, l, T, A;
      for (l = 0; l < O; l++) {
        T = E[l], o = 0 - T * T;
        for (var k = l; k < O; k++)
          A = E[k], m = 2 * (T * A) + L[l + k] + o, o = Math.floor(m / M), L[l + k] = m - o * M;
        L[l + O] = o;
      }
      return R(L), L;
    }
    a.prototype.square = function() {
      return new a(he(this.value), !1);
    }, g.prototype.square = function() {
      var E = this.value * this.value;
      return w(E) ? new g(E) : new a(he($(Math.abs(this.value))), !1);
    }, d.prototype.square = function(E) {
      return new d(this.value * this.value);
    };
    function xe(E, O) {
      var L = E.length, M = O.length, m = i, o = D(O.length), l = O[M - 1], T = Math.ceil(m / (2 * l)), A = Z(E, T), k = Z(O, T), j, te, ce, le, pe, Re, tr;
      for (A.length <= L && A.push(0), k.push(0), l = k[M - 1], te = L - M; te >= 0; te--) {
        for (j = m - 1, A[te + M] !== l && (j = Math.floor((A[te + M] * m + A[te + M - 1]) / l)), ce = 0, le = 0, Re = k.length, pe = 0; pe < Re; pe++)
          ce += j * k[pe], tr = Math.floor(ce / m), le += A[te + pe] - (ce - tr * m), ce = tr, le < 0 ? (A[te + pe] = le + m, le = -1) : (A[te + pe] = le, le = 0);
        for (; le !== 0; ) {
          for (j -= 1, ce = 0, pe = 0; pe < Re; pe++)
            ce += A[te + pe] - m + k[pe], ce < 0 ? (A[te + pe] = ce + m, ce = 0) : (A[te + pe] = ce, ce = 1);
          le += ce;
        }
        o[te] = j;
      }
      return A = Te(A, T)[0], [I(o), I(A)];
    }
    function fe(E, O) {
      for (var L = E.length, M = O.length, m = [], o = [], l = i, T, A, k, j, te; L; ) {
        if (o.unshift(E[--L]), R(o), De(o, O) < 0) {
          m.push(0);
          continue;
        }
        A = o.length, k = o[A - 1] * l + o[A - 2], j = O[M - 1] * l + O[M - 2], A > M && (k = (k + 1) * l), T = Math.ceil(k / j);
        do {
          if (te = Z(O, T), De(te, o) <= 0)
            break;
          T--;
        } while (T);
        m.push(T), o = z(o, te);
      }
      return m.reverse(), [I(m), I(o)];
    }
    function Te(E, O) {
      var L = E.length, M = D(L), m = i, o, l, T, A;
      for (T = 0, o = L - 1; o >= 0; --o)
        A = T * m + E[o], l = _(A / O), T = A - l * O, M[o] = l | 0;
      return [M, T | 0];
    }
    function ye(E, O) {
      var L, M = de(O);
      if (v)
        return [new d(E.value / M.value), new d(E.value % M.value)];
      var m = E.value, o = M.value, l;
      if (o === 0)
        throw new Error("Cannot divide by zero");
      if (E.isSmall)
        return M.isSmall ? [new g(_(m / o)), new g(m % o)] : [u[0], E];
      if (M.isSmall) {
        if (o === 1)
          return [E, u[0]];
        if (o == -1)
          return [E.negate(), u[0]];
        var T = Math.abs(o);
        if (T < i) {
          L = Te(m, T), l = I(L[0]);
          var A = L[1];
          return E.sign && (A = -A), typeof l == "number" ? (E.sign !== M.sign && (l = -l), [new g(l), new g(A)]) : [new a(l, E.sign !== M.sign), new g(A)];
        }
        o = $(T);
      }
      var k = De(m, o);
      if (k === -1)
        return [u[0], E];
      if (k === 0)
        return [u[E.sign === M.sign ? 1 : -1], u[0]];
      m.length + o.length <= 200 ? L = xe(m, o) : L = fe(m, o), l = L[0];
      var j = E.sign !== M.sign, te = L[1], ce = E.sign;
      return typeof l == "number" ? (j && (l = -l), l = new g(l)) : l = new a(l, j), typeof te == "number" ? (ce && (te = -te), te = new g(te)) : te = new a(te, ce), [l, te];
    }
    a.prototype.divmod = function(E) {
      var O = ye(this, E);
      return {
        quotient: O[0],
        remainder: O[1]
      };
    }, d.prototype.divmod = g.prototype.divmod = a.prototype.divmod, a.prototype.divide = function(E) {
      return ye(this, E)[0];
    }, d.prototype.over = d.prototype.divide = function(E) {
      return new d(this.value / de(E).value);
    }, g.prototype.over = g.prototype.divide = a.prototype.over = a.prototype.divide, a.prototype.mod = function(E) {
      return ye(this, E)[1];
    }, d.prototype.mod = d.prototype.remainder = function(E) {
      return new d(this.value % de(E).value);
    }, g.prototype.remainder = g.prototype.mod = a.prototype.remainder = a.prototype.mod, a.prototype.pow = function(E) {
      var O = de(E), L = this.value, M = O.value, m, o, l;
      if (M === 0)
        return u[1];
      if (L === 0)
        return u[0];
      if (L === 1)
        return u[1];
      if (L === -1)
        return O.isEven() ? u[1] : u[-1];
      if (O.sign)
        return u[0];
      if (!O.isSmall)
        throw new Error("The exponent " + O.toString() + " is too large.");
      if (this.isSmall && w(m = Math.pow(L, M)))
        return new g(_(m));
      for (o = this, l = u[1]; M & !0 && (l = l.times(o), --M), M !== 0; )
        M /= 2, o = o.square();
      return l;
    }, g.prototype.pow = a.prototype.pow, d.prototype.pow = function(E) {
      var O = de(E), L = this.value, M = O.value, m = BigInt(0), o = BigInt(1), l = BigInt(2);
      if (M === m)
        return u[1];
      if (L === m)
        return u[0];
      if (L === o)
        return u[1];
      if (L === BigInt(-1))
        return O.isEven() ? u[1] : u[-1];
      if (O.isNegative())
        return new d(m);
      for (var T = this, A = u[1]; (M & o) === o && (A = A.times(T), --M), M !== m; )
        M /= l, T = T.square();
      return A;
    }, a.prototype.modPow = function(E, O) {
      if (E = de(E), O = de(O), O.isZero())
        throw new Error("Cannot take modPow with modulus 0");
      var L = u[1], M = this.mod(O);
      for (E.isNegative() && (E = E.multiply(u[-1]), M = M.modInv(O)); E.isPositive(); ) {
        if (M.isZero())
          return u[0];
        E.isOdd() && (L = L.multiply(M).mod(O)), E = E.divide(2), M = M.square().mod(O);
      }
      return L;
    }, d.prototype.modPow = g.prototype.modPow = a.prototype.modPow;
    function De(E, O) {
      if (E.length !== O.length)
        return E.length > O.length ? 1 : -1;
      for (var L = E.length - 1; L >= 0; L--)
        if (E[L] !== O[L])
          return E[L] > O[L] ? 1 : -1;
      return 0;
    }
    a.prototype.compareAbs = function(E) {
      var O = de(E), L = this.value, M = O.value;
      return O.isSmall ? 1 : De(L, M);
    }, g.prototype.compareAbs = function(E) {
      var O = de(E), L = Math.abs(this.value), M = O.value;
      return O.isSmall ? (M = Math.abs(M), L === M ? 0 : L > M ? 1 : -1) : -1;
    }, d.prototype.compareAbs = function(E) {
      var O = this.value, L = de(E).value;
      return O = O >= 0 ? O : -O, L = L >= 0 ? L : -L, O === L ? 0 : O > L ? 1 : -1;
    }, a.prototype.compare = function(E) {
      if (E === 1 / 0)
        return -1;
      if (E === -1 / 0)
        return 1;
      var O = de(E), L = this.value, M = O.value;
      return this.sign !== O.sign ? O.sign ? 1 : -1 : O.isSmall ? this.sign ? -1 : 1 : De(L, M) * (this.sign ? -1 : 1);
    }, a.prototype.compareTo = a.prototype.compare, g.prototype.compare = function(E) {
      if (E === 1 / 0)
        return -1;
      if (E === -1 / 0)
        return 1;
      var O = de(E), L = this.value, M = O.value;
      return O.isSmall ? L == M ? 0 : L > M ? 1 : -1 : L < 0 !== O.sign ? L < 0 ? -1 : 1 : L < 0 ? 1 : -1;
    }, g.prototype.compareTo = g.prototype.compare, d.prototype.compare = function(E) {
      if (E === 1 / 0)
        return -1;
      if (E === -1 / 0)
        return 1;
      var O = this.value, L = de(E).value;
      return O === L ? 0 : O > L ? 1 : -1;
    }, d.prototype.compareTo = d.prototype.compare, a.prototype.equals = function(E) {
      return this.compare(E) === 0;
    }, d.prototype.eq = d.prototype.equals = g.prototype.eq = g.prototype.equals = a.prototype.eq = a.prototype.equals, a.prototype.notEquals = function(E) {
      return this.compare(E) !== 0;
    }, d.prototype.neq = d.prototype.notEquals = g.prototype.neq = g.prototype.notEquals = a.prototype.neq = a.prototype.notEquals, a.prototype.greater = function(E) {
      return this.compare(E) > 0;
    }, d.prototype.gt = d.prototype.greater = g.prototype.gt = g.prototype.greater = a.prototype.gt = a.prototype.greater, a.prototype.lesser = function(E) {
      return this.compare(E) < 0;
    }, d.prototype.lt = d.prototype.lesser = g.prototype.lt = g.prototype.lesser = a.prototype.lt = a.prototype.lesser, a.prototype.greaterOrEquals = function(E) {
      return this.compare(E) >= 0;
    }, d.prototype.geq = d.prototype.greaterOrEquals = g.prototype.geq = g.prototype.greaterOrEquals = a.prototype.geq = a.prototype.greaterOrEquals, a.prototype.lesserOrEquals = function(E) {
      return this.compare(E) <= 0;
    }, d.prototype.leq = d.prototype.lesserOrEquals = g.prototype.leq = g.prototype.lesserOrEquals = a.prototype.leq = a.prototype.lesserOrEquals, a.prototype.isEven = function() {
      return (this.value[0] & 1) === 0;
    }, g.prototype.isEven = function() {
      return (this.value & 1) === 0;
    }, d.prototype.isEven = function() {
      return (this.value & BigInt(1)) === BigInt(0);
    }, a.prototype.isOdd = function() {
      return (this.value[0] & 1) === 1;
    }, g.prototype.isOdd = function() {
      return (this.value & 1) === 1;
    }, d.prototype.isOdd = function() {
      return (this.value & BigInt(1)) === BigInt(1);
    }, a.prototype.isPositive = function() {
      return !this.sign;
    }, g.prototype.isPositive = function() {
      return this.value > 0;
    }, d.prototype.isPositive = g.prototype.isPositive, a.prototype.isNegative = function() {
      return this.sign;
    }, g.prototype.isNegative = function() {
      return this.value < 0;
    }, d.prototype.isNegative = g.prototype.isNegative, a.prototype.isUnit = function() {
      return !1;
    }, g.prototype.isUnit = function() {
      return Math.abs(this.value) === 1;
    }, d.prototype.isUnit = function() {
      return this.abs().value === BigInt(1);
    }, a.prototype.isZero = function() {
      return !1;
    }, g.prototype.isZero = function() {
      return this.value === 0;
    }, d.prototype.isZero = function() {
      return this.value === BigInt(0);
    }, a.prototype.isDivisibleBy = function(E) {
      var O = de(E);
      return O.isZero() ? !1 : O.isUnit() ? !0 : O.compareAbs(2) === 0 ? this.isEven() : this.mod(O).isZero();
    }, d.prototype.isDivisibleBy = g.prototype.isDivisibleBy = a.prototype.isDivisibleBy;
    function Ie(E) {
      var O = E.abs();
      if (O.isUnit())
        return !1;
      if (O.equals(2) || O.equals(3) || O.equals(5))
        return !0;
      if (O.isEven() || O.isDivisibleBy(3) || O.isDivisibleBy(5))
        return !1;
      if (O.lesser(49))
        return !0;
    }
    function Je(E, O) {
      for (var L = E.prev(), M = L, m = 0, o, l, T; M.isEven(); )
        M = M.divide(2), m++;
      e:
        for (l = 0; l < O.length; l++)
          if (!E.lesser(O[l]) && (T = e(O[l]).modPow(M, E), !(T.isUnit() || T.equals(L)))) {
            for (o = m - 1; o != 0; o--) {
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
      var O = Ie(this);
      if (O !== n)
        return O;
      var L = this.abs(), M = L.bitLength();
      if (M <= 64)
        return Je(L, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
      for (var m = Math.log(2) * M.toJSNumber(), o = Math.ceil(E === !0 ? 2 * Math.pow(m, 2) : m), l = [], T = 0; T < o; T++)
        l.push(e(T + 2));
      return Je(L, l);
    }, d.prototype.isPrime = g.prototype.isPrime = a.prototype.isPrime, a.prototype.isProbablePrime = function(E, O) {
      var L = Ie(this);
      if (L !== n)
        return L;
      for (var M = this.abs(), m = E === n ? 5 : E, o = [], l = 0; l < m; l++)
        o.push(e.randBetween(2, M.minus(2), O));
      return Je(M, o);
    }, d.prototype.isProbablePrime = g.prototype.isProbablePrime = a.prototype.isProbablePrime, a.prototype.modInv = function(E) {
      for (var O = e.zero, L = e.one, M = de(E), m = this.abs(), o, l, T; !m.isZero(); )
        o = M.divide(m), l = O, T = M, O = L, M = m, L = l.subtract(o.multiply(L)), m = T.subtract(o.multiply(m));
      if (!M.isUnit())
        throw new Error(this.toString() + " and " + E.toString() + " are not co-prime");
      return O.compare(0) === -1 && (O = O.add(E)), this.isNegative() ? O.negate() : O;
    }, d.prototype.modInv = g.prototype.modInv = a.prototype.modInv, a.prototype.next = function() {
      var E = this.value;
      return this.sign ? G(E, 1, this.sign) : new a(C(E, 1), this.sign);
    }, g.prototype.next = function() {
      var E = this.value;
      return E + 1 < c ? new g(E + 1) : new a(h, !1);
    }, d.prototype.next = function() {
      return new d(this.value + BigInt(1));
    }, a.prototype.prev = function() {
      var E = this.value;
      return this.sign ? new a(C(E, 1), !0) : G(E, 1, this.sign);
    }, g.prototype.prev = function() {
      var E = this.value;
      return E - 1 > -c ? new g(E - 1) : new a(h, !0);
    }, d.prototype.prev = function() {
      return new d(this.value - BigInt(1));
    };
    for (var $e = [1]; 2 * $e[$e.length - 1] <= i; )
      $e.push(2 * $e[$e.length - 1]);
    var Ne = $e.length, Ae = $e[Ne - 1];
    function At(E) {
      return Math.abs(E) <= i;
    }
    a.prototype.shiftLeft = function(E) {
      var O = de(E).toJSNumber();
      if (!At(O))
        throw new Error(String(O) + " is too large for shifting.");
      if (O < 0)
        return this.shiftRight(-O);
      var L = this;
      if (L.isZero())
        return L;
      for (; O >= Ne; )
        L = L.multiply(Ae), O -= Ne - 1;
      return L.multiply($e[O]);
    }, d.prototype.shiftLeft = g.prototype.shiftLeft = a.prototype.shiftLeft, a.prototype.shiftRight = function(E) {
      var O, L = de(E).toJSNumber();
      if (!At(L))
        throw new Error(String(L) + " is too large for shifting.");
      if (L < 0)
        return this.shiftLeft(-L);
      for (var M = this; L >= Ne; ) {
        if (M.isZero() || M.isNegative() && M.isUnit())
          return M;
        O = ye(M, Ae), M = O[1].isNegative() ? O[0].prev() : O[0], L -= Ne - 1;
      }
      return O = ye(M, $e[L]), O[1].isNegative() ? O[0].prev() : O[0];
    }, d.prototype.shiftRight = g.prototype.shiftRight = a.prototype.shiftRight;
    function $t(E, O, L) {
      O = de(O);
      for (var M = E.isNegative(), m = O.isNegative(), o = M ? E.not() : E, l = m ? O.not() : O, T = 0, A = 0, k = null, j = null, te = []; !o.isZero() || !l.isZero(); )
        k = ye(o, Ae), T = k[1].toJSNumber(), M && (T = Ae - 1 - T), j = ye(l, Ae), A = j[1].toJSNumber(), m && (A = Ae - 1 - A), o = k[0], l = j[0], te.push(L(T, A));
      for (var ce = L(M ? 1 : 0, m ? 1 : 0) !== 0 ? e(-1) : e(0), le = te.length - 1; le >= 0; le -= 1)
        ce = ce.multiply(Ae).add(e(te[le]));
      return ce;
    }
    a.prototype.not = function() {
      return this.negate().prev();
    }, d.prototype.not = g.prototype.not = a.prototype.not, a.prototype.and = function(E) {
      return $t(this, E, function(O, L) {
        return O & L;
      });
    }, d.prototype.and = g.prototype.and = a.prototype.and, a.prototype.or = function(E) {
      return $t(this, E, function(O, L) {
        return O | L;
      });
    }, d.prototype.or = g.prototype.or = a.prototype.or, a.prototype.xor = function(E) {
      return $t(this, E, function(O, L) {
        return O ^ L;
      });
    }, d.prototype.xor = g.prototype.xor = a.prototype.xor;
    var je = 1 << 30, er = (i & -i) * (i & -i) | je;
    function Ce(E) {
      var O = E.value, L = typeof O == "number" ? O | je : typeof O == "bigint" ? O | BigInt(je) : O[0] + O[1] * i | er;
      return L & -L;
    }
    function Qe(E, O) {
      if (O.compareTo(E) <= 0) {
        var L = Qe(E, O.square(O)), M = L.p, m = L.e, o = M.multiply(O);
        return o.compareTo(E) <= 0 ? { p: o, e: m * 2 + 1 } : { p: M, e: m * 2 };
      }
      return { p: e(1), e: 0 };
    }
    a.prototype.bitLength = function() {
      var E = this;
      return E.compareTo(e(0)) < 0 && (E = E.negate().subtract(e(1))), E.compareTo(e(0)) === 0 ? e(0) : e(Qe(E, e(2)).e).add(e(1));
    }, d.prototype.bitLength = g.prototype.bitLength = a.prototype.bitLength;
    function Mt(E, O) {
      return E = de(E), O = de(O), E.greater(O) ? E : O;
    }
    function ft(E, O) {
      return E = de(E), O = de(O), E.lesser(O) ? E : O;
    }
    function St(E, O) {
      if (E = de(E).abs(), O = de(O).abs(), E.equals(O))
        return E;
      if (E.isZero())
        return O;
      if (O.isZero())
        return E;
      for (var L = u[1], M, m; E.isEven() && O.isEven(); )
        M = ft(Ce(E), Ce(O)), E = E.divide(M), O = O.divide(M), L = L.multiply(M);
      for (; E.isEven(); )
        E = E.divide(Ce(E));
      do {
        for (; O.isEven(); )
          O = O.divide(Ce(O));
        E.greater(O) && (m = O, O = E, E = m), O = O.subtract(E);
      } while (!O.isZero());
      return L.isUnit() ? E : E.multiply(L);
    }
    function zt(E, O) {
      return E = de(E).abs(), O = de(O).abs(), E.divide(St(E, O)).multiply(O);
    }
    function Le(E, O, L) {
      E = de(E), O = de(O);
      var M = L || Math.random, m = ft(E, O), o = Mt(E, O), l = o.subtract(m).add(1);
      if (l.isSmall)
        return m.add(Math.floor(M() * l));
      for (var T = mt(l, i).value, A = [], k = !0, j = 0; j < T.length; j++) {
        var te = k ? T[j] + (j + 1 < T.length ? T[j + 1] / i : 0) : i, ce = _(M() * te);
        A.push(ce), ce < T[j] && (k = !1);
      }
      return m.add(u.fromArray(A, i, !1));
    }
    var Ge = function(E, O, L, M) {
      L = L || f, E = String(E), M || (E = E.toLowerCase(), L = L.toLowerCase());
      var m = E.length, o, l = Math.abs(O), T = {};
      for (o = 0; o < L.length; o++)
        T[L[o]] = o;
      for (o = 0; o < m; o++) {
        var A = E[o];
        if (A !== "-" && A in T && T[A] >= l) {
          if (A === "1" && l === 1)
            continue;
          throw new Error(A + " is not a valid digit in base " + O + ".");
        }
      }
      O = de(O);
      var k = [], j = E[0] === "-";
      for (o = j ? 1 : 0; o < E.length; o++) {
        var A = E[o];
        if (A in T)
          k.push(de(T[A]));
        else if (A === "<") {
          var te = o;
          do
            o++;
          while (E[o] !== ">" && o < E.length);
          k.push(de(E.slice(te + 1, o)));
        } else
          throw new Error(A + " is not a valid character");
      }
      return mr(k, O, j);
    };
    function mr(E, O, L) {
      var M = u[0], m = u[1], o;
      for (o = E.length - 1; o >= 0; o--)
        M = M.add(E[o].times(m)), m = m.times(O);
      return L ? M.negate() : M;
    }
    function Cr(E, O) {
      return O = O || f, E < O.length ? O[E] : "<" + E + ">";
    }
    function mt(E, O) {
      if (O = e(O), O.isZero()) {
        if (E.isZero())
          return { value: [0], isNegative: !1 };
        throw new Error("Cannot convert nonzero numbers to base 0.");
      }
      if (O.equals(-1)) {
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
      var M = !1;
      if (E.isNegative() && O.isPositive() && (M = !0, E = E.abs()), O.isUnit())
        return E.isZero() ? { value: [0], isNegative: !1 } : {
          value: Array.apply(null, Array(E.toJSNumber())).map(Number.prototype.valueOf, 1),
          isNegative: M
        };
      for (var m = [], o = E, l; o.isNegative() || o.compareAbs(O) >= 0; ) {
        l = o.divmod(O), o = l.quotient;
        var T = l.remainder;
        T.isNegative() && (T = O.minus(T).abs(), o = o.next()), m.push(T.toJSNumber());
      }
      return m.push(o.toJSNumber()), { value: m.reverse(), isNegative: M };
    }
    function Dt(E, O, L) {
      var M = mt(E, O);
      return (M.isNegative ? "-" : "") + M.value.map(function(m) {
        return Cr(m, L);
      }).join("");
    }
    a.prototype.toArray = function(E) {
      return mt(this, E);
    }, g.prototype.toArray = function(E) {
      return mt(this, E);
    }, d.prototype.toArray = function(E) {
      return mt(this, E);
    }, a.prototype.toString = function(E, O) {
      if (E === n && (E = 10), E !== 10 || O)
        return Dt(this, E, O);
      for (var L = this.value, M = L.length, m = String(L[--M]), o = "0000000", l; --M >= 0; )
        l = String(L[M]), m += o.slice(l.length) + l;
      var T = this.sign ? "-" : "";
      return T + m;
    }, g.prototype.toString = function(E, O) {
      return E === n && (E = 10), E != 10 || O ? Dt(this, E, O) : String(this.value);
    }, d.prototype.toString = g.prototype.toString, d.prototype.toJSON = a.prototype.toJSON = g.prototype.toJSON = function() {
      return this.toString();
    }, a.prototype.valueOf = function() {
      return parseInt(this.toString(), 10);
    }, a.prototype.toJSNumber = a.prototype.valueOf, g.prototype.valueOf = function() {
      return this.value;
    }, g.prototype.toJSNumber = g.prototype.valueOf, d.prototype.valueOf = d.prototype.toJSNumber = function() {
      return parseInt(this.toString(), 10);
    };
    function xt(E) {
      if (w(+E)) {
        var O = +E;
        if (O === _(O))
          return v ? new d(BigInt(O)) : new g(O);
        throw new Error("Invalid integer: " + E);
      }
      var L = E[0] === "-";
      L && (E = E.slice(1));
      var M = E.split(/e/i);
      if (M.length > 2)
        throw new Error("Invalid integer: " + M.join("e"));
      if (M.length === 2) {
        var m = M[1];
        if (m[0] === "+" && (m = m.slice(1)), m = +m, m !== _(m) || !w(m))
          throw new Error("Invalid integer: " + m + " is not a valid exponent.");
        var o = M[0], l = o.indexOf(".");
        if (l >= 0 && (m -= o.length - l - 1, o = o.slice(0, l) + o.slice(l + 1)), m < 0)
          throw new Error("Cannot include negative exponent part for integers");
        o += new Array(m + 1).join("0"), E = o;
      }
      var T = /^([0-9][0-9]*)$/.test(E);
      if (!T)
        throw new Error("Invalid integer: " + E);
      if (v)
        return new d(BigInt(L ? "-" + E : E));
      for (var A = [], k = E.length, j = s, te = k - j; k > 0; )
        A.push(+E.slice(te, k)), te -= j, te < 0 && (te = 0), k -= j;
      return R(A), new a(A, L);
    }
    function Nt(E) {
      if (v)
        return new d(BigInt(E));
      if (w(E)) {
        if (E !== _(E))
          throw new Error(E + " is not an integer.");
        return new g(E);
      }
      return xt(E.toString());
    }
    function de(E) {
      return typeof E == "number" ? Nt(E) : typeof E == "string" ? xt(E) : typeof E == "bigint" ? new d(E) : E;
    }
    for (var ze = 0; ze < 1e3; ze++)
      u[ze] = de(ze), ze > 0 && (u[-ze] = de(-ze));
    return u.one = u[1], u.zero = u[0], u.minusOne = u[-1], u.max = Mt, u.min = ft, u.gcd = St, u.lcm = zt, u.isInstance = function(E) {
      return E instanceof a || E instanceof g || E instanceof d;
    }, u.randBetween = Le, u.fromArray = function(E, O, L) {
      return mr(E.map(de), de(O || 10), L);
    }, u;
  }();
  r.hasOwnProperty("exports") && (r.exports = e);
})(Lp);
var tS = Lp.exports;
const rS = /* @__PURE__ */ rs(tS);
var Fp = {}, yo = {};
yo.byteLength = oS;
yo.toByteArray = sS;
yo.fromByteArray = cS;
var pr = [], jt = [], nS = typeof Uint8Array < "u" ? Uint8Array : Array, ya = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var hn = 0, iS = ya.length; hn < iS; ++hn)
  pr[hn] = ya[hn], jt[ya.charCodeAt(hn)] = hn;
jt[45] = 62;
jt[95] = 63;
function kp(r) {
  var e = r.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = r.indexOf("=");
  n === -1 && (n = e);
  var i = n === e ? 0 : 4 - n % 4;
  return [n, i];
}
function oS(r) {
  var e = kp(r), n = e[0], i = e[1];
  return (n + i) * 3 / 4 - i;
}
function aS(r, e, n) {
  return (e + n) * 3 / 4 - n;
}
function sS(r) {
  var e, n = kp(r), i = n[0], s = n[1], c = new nS(aS(r, i, s)), h = 0, f = s > 0 ? i - 4 : i, v;
  for (v = 0; v < f; v += 4)
    e = jt[r.charCodeAt(v)] << 18 | jt[r.charCodeAt(v + 1)] << 12 | jt[r.charCodeAt(v + 2)] << 6 | jt[r.charCodeAt(v + 3)], c[h++] = e >> 16 & 255, c[h++] = e >> 8 & 255, c[h++] = e & 255;
  return s === 2 && (e = jt[r.charCodeAt(v)] << 2 | jt[r.charCodeAt(v + 1)] >> 4, c[h++] = e & 255), s === 1 && (e = jt[r.charCodeAt(v)] << 10 | jt[r.charCodeAt(v + 1)] << 4 | jt[r.charCodeAt(v + 2)] >> 2, c[h++] = e >> 8 & 255, c[h++] = e & 255), c;
}
function uS(r) {
  return pr[r >> 18 & 63] + pr[r >> 12 & 63] + pr[r >> 6 & 63] + pr[r & 63];
}
function lS(r, e, n) {
  for (var i, s = [], c = e; c < n; c += 3)
    i = (r[c] << 16 & 16711680) + (r[c + 1] << 8 & 65280) + (r[c + 2] & 255), s.push(uS(i));
  return s.join("");
}
function cS(r) {
  for (var e, n = r.length, i = n % 3, s = [], c = 16383, h = 0, f = n - i; h < f; h += c)
    s.push(lS(r, h, h + c > f ? f : h + c));
  return i === 1 ? (e = r[n - 1], s.push(
    pr[e >> 2] + pr[e << 4 & 63] + "=="
  )) : i === 2 && (e = (r[n - 2] << 8) + r[n - 1], s.push(
    pr[e >> 10] + pr[e >> 4 & 63] + pr[e << 2 & 63] + "="
  )), s.join("");
}
var Bs = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Bs.read = function(r, e, n, i, s) {
  var c, h, f = s * 8 - i - 1, v = (1 << f) - 1, u = v >> 1, a = -7, g = n ? s - 1 : 0, d = n ? -1 : 1, w = r[e + g];
  for (g += d, c = w & (1 << -a) - 1, w >>= -a, a += f; a > 0; c = c * 256 + r[e + g], g += d, a -= 8)
    ;
  for (h = c & (1 << -a) - 1, c >>= -a, a += i; a > 0; h = h * 256 + r[e + g], g += d, a -= 8)
    ;
  if (c === 0)
    c = 1 - u;
  else {
    if (c === v)
      return h ? NaN : (w ? -1 : 1) * (1 / 0);
    h = h + Math.pow(2, i), c = c - u;
  }
  return (w ? -1 : 1) * h * Math.pow(2, c - i);
};
Bs.write = function(r, e, n, i, s, c) {
  var h, f, v, u = c * 8 - s - 1, a = (1 << u) - 1, g = a >> 1, d = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, w = i ? 0 : c - 1, $ = i ? 1 : -1, I = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (f = isNaN(e) ? 1 : 0, h = a) : (h = Math.floor(Math.log(e) / Math.LN2), e * (v = Math.pow(2, -h)) < 1 && (h--, v *= 2), h + g >= 1 ? e += d / v : e += d * Math.pow(2, 1 - g), e * v >= 2 && (h++, v /= 2), h + g >= a ? (f = 0, h = a) : h + g >= 1 ? (f = (e * v - 1) * Math.pow(2, s), h = h + g) : (f = e * Math.pow(2, g - 1) * Math.pow(2, s), h = 0)); s >= 8; r[n + w] = f & 255, w += $, f /= 256, s -= 8)
    ;
  for (h = h << s | f, u += s; u > 0; r[n + w] = h & 255, w += $, h /= 256, u -= 8)
    ;
  r[n + w - $] |= I * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
  const e = yo, n = Bs, i = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  r.Buffer = a, r.SlowBuffer = C, r.INSPECT_MAX_BYTES = 50;
  const s = 2147483647;
  r.kMaxLength = s;
  const { Uint8Array: c, ArrayBuffer: h, SharedArrayBuffer: f } = globalThis;
  a.TYPED_ARRAY_SUPPORT = v(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function v() {
    try {
      const m = new c(1), o = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(o, c.prototype), Object.setPrototypeOf(m, o), m.foo() === 42;
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
  function u(m) {
    if (m > s)
      throw new RangeError('The value "' + m + '" is invalid for option "size"');
    const o = new c(m);
    return Object.setPrototypeOf(o, a.prototype), o;
  }
  function a(m, o, l) {
    if (typeof m == "number") {
      if (typeof o == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return $(m);
    }
    return g(m, o, l);
  }
  a.poolSize = 8192;
  function g(m, o, l) {
    if (typeof m == "string")
      return I(m, o);
    if (h.isView(m))
      return D(m);
    if (m == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m
      );
    if (ze(m, h) || m && ze(m.buffer, h) || typeof f < "u" && (ze(m, f) || m && ze(m.buffer, f)))
      return _(m, o, l);
    if (typeof m == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const T = m.valueOf && m.valueOf();
    if (T != null && T !== m)
      return a.from(T, o, l);
    const A = x(m);
    if (A)
      return A;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof m[Symbol.toPrimitive] == "function")
      return a.from(m[Symbol.toPrimitive]("string"), o, l);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m
    );
  }
  a.from = function(m, o, l) {
    return g(m, o, l);
  }, Object.setPrototypeOf(a.prototype, c.prototype), Object.setPrototypeOf(a, c);
  function d(m) {
    if (typeof m != "number")
      throw new TypeError('"size" argument must be of type number');
    if (m < 0)
      throw new RangeError('The value "' + m + '" is invalid for option "size"');
  }
  function w(m, o, l) {
    return d(m), m <= 0 ? u(m) : o !== void 0 ? typeof l == "string" ? u(m).fill(o, l) : u(m).fill(o) : u(m);
  }
  a.alloc = function(m, o, l) {
    return w(m, o, l);
  };
  function $(m) {
    return d(m), u(m < 0 ? 0 : F(m) | 0);
  }
  a.allocUnsafe = function(m) {
    return $(m);
  }, a.allocUnsafeSlow = function(m) {
    return $(m);
  };
  function I(m, o) {
    if ((typeof o != "string" || o === "") && (o = "utf8"), !a.isEncoding(o))
      throw new TypeError("Unknown encoding: " + o);
    const l = z(m, o) | 0;
    let T = u(l);
    const A = T.write(m, o);
    return A !== l && (T = T.slice(0, A)), T;
  }
  function R(m) {
    const o = m.length < 0 ? 0 : F(m.length) | 0, l = u(o);
    for (let T = 0; T < o; T += 1)
      l[T] = m[T] & 255;
    return l;
  }
  function D(m) {
    if (ze(m, c)) {
      const o = new c(m);
      return _(o.buffer, o.byteOffset, o.byteLength);
    }
    return R(m);
  }
  function _(m, o, l) {
    if (o < 0 || m.byteLength < o)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (m.byteLength < o + (l || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let T;
    return o === void 0 && l === void 0 ? T = new c(m) : l === void 0 ? T = new c(m, o) : T = new c(m, o, l), Object.setPrototypeOf(T, a.prototype), T;
  }
  function x(m) {
    if (a.isBuffer(m)) {
      const o = F(m.length) | 0, l = u(o);
      return l.length === 0 || m.copy(l, 0, 0, o), l;
    }
    if (m.length !== void 0)
      return typeof m.length != "number" || E(m.length) ? u(0) : R(m);
    if (m.type === "Buffer" && Array.isArray(m.data))
      return R(m.data);
  }
  function F(m) {
    if (m >= s)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
    return m | 0;
  }
  function C(m) {
    return +m != m && (m = 0), a.alloc(+m);
  }
  a.isBuffer = function(o) {
    return o != null && o._isBuffer === !0 && o !== a.prototype;
  }, a.compare = function(o, l) {
    if (ze(o, c) && (o = a.from(o, o.offset, o.byteLength)), ze(l, c) && (l = a.from(l, l.offset, l.byteLength)), !a.isBuffer(o) || !a.isBuffer(l))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (o === l)
      return 0;
    let T = o.length, A = l.length;
    for (let k = 0, j = Math.min(T, A); k < j; ++k)
      if (o[k] !== l[k]) {
        T = o[k], A = l[k];
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
  }, a.concat = function(o, l) {
    if (!Array.isArray(o))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (o.length === 0)
      return a.alloc(0);
    let T;
    if (l === void 0)
      for (l = 0, T = 0; T < o.length; ++T)
        l += o[T].length;
    const A = a.allocUnsafe(l);
    let k = 0;
    for (T = 0; T < o.length; ++T) {
      let j = o[T];
      if (ze(j, c))
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
  function z(m, o) {
    if (a.isBuffer(m))
      return m.length;
    if (h.isView(m) || ze(m, h))
      return m.byteLength;
    if (typeof m != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof m
      );
    const l = m.length, T = arguments.length > 2 && arguments[2] === !0;
    if (!T && l === 0)
      return 0;
    let A = !1;
    for (; ; )
      switch (o) {
        case "ascii":
        case "latin1":
        case "binary":
          return l;
        case "utf8":
        case "utf-8":
          return mt(m).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return l * 2;
        case "hex":
          return l >>> 1;
        case "base64":
          return Nt(m).length;
        default:
          if (A)
            return T ? -1 : mt(m).length;
          o = ("" + o).toLowerCase(), A = !0;
      }
  }
  a.byteLength = z;
  function q(m, o, l) {
    let T = !1;
    if ((o === void 0 || o < 0) && (o = 0), o > this.length || ((l === void 0 || l > this.length) && (l = this.length), l <= 0) || (l >>>= 0, o >>>= 0, l <= o))
      return "";
    for (m || (m = "utf8"); ; )
      switch (m) {
        case "hex":
          return Je(this, o, l);
        case "utf8":
        case "utf-8":
          return fe(this, o, l);
        case "ascii":
          return De(this, o, l);
        case "latin1":
        case "binary":
          return Ie(this, o, l);
        case "base64":
          return xe(this, o, l);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return $e(this, o, l);
        default:
          if (T)
            throw new TypeError("Unknown encoding: " + m);
          m = (m + "").toLowerCase(), T = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function G(m, o, l) {
    const T = m[o];
    m[o] = m[l], m[l] = T;
  }
  a.prototype.swap16 = function() {
    const o = this.length;
    if (o % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let l = 0; l < o; l += 2)
      G(this, l, l + 1);
    return this;
  }, a.prototype.swap32 = function() {
    const o = this.length;
    if (o % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let l = 0; l < o; l += 4)
      G(this, l, l + 3), G(this, l + 1, l + 2);
    return this;
  }, a.prototype.swap64 = function() {
    const o = this.length;
    if (o % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let l = 0; l < o; l += 8)
      G(this, l, l + 7), G(this, l + 1, l + 6), G(this, l + 2, l + 5), G(this, l + 3, l + 4);
    return this;
  }, a.prototype.toString = function() {
    const o = this.length;
    return o === 0 ? "" : arguments.length === 0 ? fe(this, 0, o) : q.apply(this, arguments);
  }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(o) {
    if (!a.isBuffer(o))
      throw new TypeError("Argument must be a Buffer");
    return this === o ? !0 : a.compare(this, o) === 0;
  }, a.prototype.inspect = function() {
    let o = "";
    const l = r.INSPECT_MAX_BYTES;
    return o = this.toString("hex", 0, l).replace(/(.{2})/g, "$1 ").trim(), this.length > l && (o += " ... "), "<Buffer " + o + ">";
  }, i && (a.prototype[i] = a.prototype.inspect), a.prototype.compare = function(o, l, T, A, k) {
    if (ze(o, c) && (o = a.from(o, o.offset, o.byteLength)), !a.isBuffer(o))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof o
      );
    if (l === void 0 && (l = 0), T === void 0 && (T = o ? o.length : 0), A === void 0 && (A = 0), k === void 0 && (k = this.length), l < 0 || T > o.length || A < 0 || k > this.length)
      throw new RangeError("out of range index");
    if (A >= k && l >= T)
      return 0;
    if (A >= k)
      return -1;
    if (l >= T)
      return 1;
    if (l >>>= 0, T >>>= 0, A >>>= 0, k >>>= 0, this === o)
      return 0;
    let j = k - A, te = T - l;
    const ce = Math.min(j, te), le = this.slice(A, k), pe = o.slice(l, T);
    for (let Re = 0; Re < ce; ++Re)
      if (le[Re] !== pe[Re]) {
        j = le[Re], te = pe[Re];
        break;
      }
    return j < te ? -1 : te < j ? 1 : 0;
  };
  function X(m, o, l, T, A) {
    if (m.length === 0)
      return -1;
    if (typeof l == "string" ? (T = l, l = 0) : l > 2147483647 ? l = 2147483647 : l < -2147483648 && (l = -2147483648), l = +l, E(l) && (l = A ? 0 : m.length - 1), l < 0 && (l = m.length + l), l >= m.length) {
      if (A)
        return -1;
      l = m.length - 1;
    } else if (l < 0)
      if (A)
        l = 0;
      else
        return -1;
    if (typeof o == "string" && (o = a.from(o, T)), a.isBuffer(o))
      return o.length === 0 ? -1 : Z(m, o, l, T, A);
    if (typeof o == "number")
      return o = o & 255, typeof c.prototype.indexOf == "function" ? A ? c.prototype.indexOf.call(m, o, l) : c.prototype.lastIndexOf.call(m, o, l) : Z(m, [o], l, T, A);
    throw new TypeError("val must be string, number or Buffer");
  }
  function Z(m, o, l, T, A) {
    let k = 1, j = m.length, te = o.length;
    if (T !== void 0 && (T = String(T).toLowerCase(), T === "ucs2" || T === "ucs-2" || T === "utf16le" || T === "utf-16le")) {
      if (m.length < 2 || o.length < 2)
        return -1;
      k = 2, j /= 2, te /= 2, l /= 2;
    }
    function ce(pe, Re) {
      return k === 1 ? pe[Re] : pe.readUInt16BE(Re * k);
    }
    let le;
    if (A) {
      let pe = -1;
      for (le = l; le < j; le++)
        if (ce(m, le) === ce(o, pe === -1 ? 0 : le - pe)) {
          if (pe === -1 && (pe = le), le - pe + 1 === te)
            return pe * k;
        } else
          pe !== -1 && (le -= le - pe), pe = -1;
    } else
      for (l + te > j && (l = j - te), le = l; le >= 0; le--) {
        let pe = !0;
        for (let Re = 0; Re < te; Re++)
          if (ce(m, le + Re) !== ce(o, Re)) {
            pe = !1;
            break;
          }
        if (pe)
          return le;
      }
    return -1;
  }
  a.prototype.includes = function(o, l, T) {
    return this.indexOf(o, l, T) !== -1;
  }, a.prototype.indexOf = function(o, l, T) {
    return X(this, o, l, T, !0);
  }, a.prototype.lastIndexOf = function(o, l, T) {
    return X(this, o, l, T, !1);
  };
  function H(m, o, l, T) {
    l = Number(l) || 0;
    const A = m.length - l;
    T ? (T = Number(T), T > A && (T = A)) : T = A;
    const k = o.length;
    T > k / 2 && (T = k / 2);
    let j;
    for (j = 0; j < T; ++j) {
      const te = parseInt(o.substr(j * 2, 2), 16);
      if (E(te))
        return j;
      m[l + j] = te;
    }
    return j;
  }
  function Y(m, o, l, T) {
    return de(mt(o, m.length - l), m, l, T);
  }
  function V(m, o, l, T) {
    return de(Dt(o), m, l, T);
  }
  function re(m, o, l, T) {
    return de(Nt(o), m, l, T);
  }
  function he(m, o, l, T) {
    return de(xt(o, m.length - l), m, l, T);
  }
  a.prototype.write = function(o, l, T, A) {
    if (l === void 0)
      A = "utf8", T = this.length, l = 0;
    else if (T === void 0 && typeof l == "string")
      A = l, T = this.length, l = 0;
    else if (isFinite(l))
      l = l >>> 0, isFinite(T) ? (T = T >>> 0, A === void 0 && (A = "utf8")) : (A = T, T = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const k = this.length - l;
    if ((T === void 0 || T > k) && (T = k), o.length > 0 && (T < 0 || l < 0) || l > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    A || (A = "utf8");
    let j = !1;
    for (; ; )
      switch (A) {
        case "hex":
          return H(this, o, l, T);
        case "utf8":
        case "utf-8":
          return Y(this, o, l, T);
        case "ascii":
        case "latin1":
        case "binary":
          return V(this, o, l, T);
        case "base64":
          return re(this, o, l, T);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return he(this, o, l, T);
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
  function xe(m, o, l) {
    return o === 0 && l === m.length ? e.fromByteArray(m) : e.fromByteArray(m.slice(o, l));
  }
  function fe(m, o, l) {
    l = Math.min(m.length, l);
    const T = [];
    let A = o;
    for (; A < l; ) {
      const k = m[A];
      let j = null, te = k > 239 ? 4 : k > 223 ? 3 : k > 191 ? 2 : 1;
      if (A + te <= l) {
        let ce, le, pe, Re;
        switch (te) {
          case 1:
            k < 128 && (j = k);
            break;
          case 2:
            ce = m[A + 1], (ce & 192) === 128 && (Re = (k & 31) << 6 | ce & 63, Re > 127 && (j = Re));
            break;
          case 3:
            ce = m[A + 1], le = m[A + 2], (ce & 192) === 128 && (le & 192) === 128 && (Re = (k & 15) << 12 | (ce & 63) << 6 | le & 63, Re > 2047 && (Re < 55296 || Re > 57343) && (j = Re));
            break;
          case 4:
            ce = m[A + 1], le = m[A + 2], pe = m[A + 3], (ce & 192) === 128 && (le & 192) === 128 && (pe & 192) === 128 && (Re = (k & 15) << 18 | (ce & 63) << 12 | (le & 63) << 6 | pe & 63, Re > 65535 && Re < 1114112 && (j = Re));
        }
      }
      j === null ? (j = 65533, te = 1) : j > 65535 && (j -= 65536, T.push(j >>> 10 & 1023 | 55296), j = 56320 | j & 1023), T.push(j), A += te;
    }
    return ye(T);
  }
  const Te = 4096;
  function ye(m) {
    const o = m.length;
    if (o <= Te)
      return String.fromCharCode.apply(String, m);
    let l = "", T = 0;
    for (; T < o; )
      l += String.fromCharCode.apply(
        String,
        m.slice(T, T += Te)
      );
    return l;
  }
  function De(m, o, l) {
    let T = "";
    l = Math.min(m.length, l);
    for (let A = o; A < l; ++A)
      T += String.fromCharCode(m[A] & 127);
    return T;
  }
  function Ie(m, o, l) {
    let T = "";
    l = Math.min(m.length, l);
    for (let A = o; A < l; ++A)
      T += String.fromCharCode(m[A]);
    return T;
  }
  function Je(m, o, l) {
    const T = m.length;
    (!o || o < 0) && (o = 0), (!l || l < 0 || l > T) && (l = T);
    let A = "";
    for (let k = o; k < l; ++k)
      A += O[m[k]];
    return A;
  }
  function $e(m, o, l) {
    const T = m.slice(o, l);
    let A = "";
    for (let k = 0; k < T.length - 1; k += 2)
      A += String.fromCharCode(T[k] + T[k + 1] * 256);
    return A;
  }
  a.prototype.slice = function(o, l) {
    const T = this.length;
    o = ~~o, l = l === void 0 ? T : ~~l, o < 0 ? (o += T, o < 0 && (o = 0)) : o > T && (o = T), l < 0 ? (l += T, l < 0 && (l = 0)) : l > T && (l = T), l < o && (l = o);
    const A = this.subarray(o, l);
    return Object.setPrototypeOf(A, a.prototype), A;
  };
  function Ne(m, o, l) {
    if (m % 1 !== 0 || m < 0)
      throw new RangeError("offset is not uint");
    if (m + o > l)
      throw new RangeError("Trying to access beyond buffer length");
  }
  a.prototype.readUintLE = a.prototype.readUIntLE = function(o, l, T) {
    o = o >>> 0, l = l >>> 0, T || Ne(o, l, this.length);
    let A = this[o], k = 1, j = 0;
    for (; ++j < l && (k *= 256); )
      A += this[o + j] * k;
    return A;
  }, a.prototype.readUintBE = a.prototype.readUIntBE = function(o, l, T) {
    o = o >>> 0, l = l >>> 0, T || Ne(o, l, this.length);
    let A = this[o + --l], k = 1;
    for (; l > 0 && (k *= 256); )
      A += this[o + --l] * k;
    return A;
  }, a.prototype.readUint8 = a.prototype.readUInt8 = function(o, l) {
    return o = o >>> 0, l || Ne(o, 1, this.length), this[o];
  }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(o, l) {
    return o = o >>> 0, l || Ne(o, 2, this.length), this[o] | this[o + 1] << 8;
  }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(o, l) {
    return o = o >>> 0, l || Ne(o, 2, this.length), this[o] << 8 | this[o + 1];
  }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(o, l) {
    return o = o >>> 0, l || Ne(o, 4, this.length), (this[o] | this[o + 1] << 8 | this[o + 2] << 16) + this[o + 3] * 16777216;
  }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(o, l) {
    return o = o >>> 0, l || Ne(o, 4, this.length), this[o] * 16777216 + (this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3]);
  }, a.prototype.readBigUInt64LE = L(function(o) {
    o = o >>> 0, Le(o, "offset");
    const l = this[o], T = this[o + 7];
    (l === void 0 || T === void 0) && Ge(o, this.length - 8);
    const A = l + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24, k = this[++o] + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + T * 2 ** 24;
    return BigInt(A) + (BigInt(k) << BigInt(32));
  }), a.prototype.readBigUInt64BE = L(function(o) {
    o = o >>> 0, Le(o, "offset");
    const l = this[o], T = this[o + 7];
    (l === void 0 || T === void 0) && Ge(o, this.length - 8);
    const A = l * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + this[++o], k = this[++o] * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + T;
    return (BigInt(A) << BigInt(32)) + BigInt(k);
  }), a.prototype.readIntLE = function(o, l, T) {
    o = o >>> 0, l = l >>> 0, T || Ne(o, l, this.length);
    let A = this[o], k = 1, j = 0;
    for (; ++j < l && (k *= 256); )
      A += this[o + j] * k;
    return k *= 128, A >= k && (A -= Math.pow(2, 8 * l)), A;
  }, a.prototype.readIntBE = function(o, l, T) {
    o = o >>> 0, l = l >>> 0, T || Ne(o, l, this.length);
    let A = l, k = 1, j = this[o + --A];
    for (; A > 0 && (k *= 256); )
      j += this[o + --A] * k;
    return k *= 128, j >= k && (j -= Math.pow(2, 8 * l)), j;
  }, a.prototype.readInt8 = function(o, l) {
    return o = o >>> 0, l || Ne(o, 1, this.length), this[o] & 128 ? (255 - this[o] + 1) * -1 : this[o];
  }, a.prototype.readInt16LE = function(o, l) {
    o = o >>> 0, l || Ne(o, 2, this.length);
    const T = this[o] | this[o + 1] << 8;
    return T & 32768 ? T | 4294901760 : T;
  }, a.prototype.readInt16BE = function(o, l) {
    o = o >>> 0, l || Ne(o, 2, this.length);
    const T = this[o + 1] | this[o] << 8;
    return T & 32768 ? T | 4294901760 : T;
  }, a.prototype.readInt32LE = function(o, l) {
    return o = o >>> 0, l || Ne(o, 4, this.length), this[o] | this[o + 1] << 8 | this[o + 2] << 16 | this[o + 3] << 24;
  }, a.prototype.readInt32BE = function(o, l) {
    return o = o >>> 0, l || Ne(o, 4, this.length), this[o] << 24 | this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3];
  }, a.prototype.readBigInt64LE = L(function(o) {
    o = o >>> 0, Le(o, "offset");
    const l = this[o], T = this[o + 7];
    (l === void 0 || T === void 0) && Ge(o, this.length - 8);
    const A = this[o + 4] + this[o + 5] * 2 ** 8 + this[o + 6] * 2 ** 16 + (T << 24);
    return (BigInt(A) << BigInt(32)) + BigInt(l + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24);
  }), a.prototype.readBigInt64BE = L(function(o) {
    o = o >>> 0, Le(o, "offset");
    const l = this[o], T = this[o + 7];
    (l === void 0 || T === void 0) && Ge(o, this.length - 8);
    const A = (l << 24) + // Overflow
    this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + this[++o];
    return (BigInt(A) << BigInt(32)) + BigInt(this[++o] * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + T);
  }), a.prototype.readFloatLE = function(o, l) {
    return o = o >>> 0, l || Ne(o, 4, this.length), n.read(this, o, !0, 23, 4);
  }, a.prototype.readFloatBE = function(o, l) {
    return o = o >>> 0, l || Ne(o, 4, this.length), n.read(this, o, !1, 23, 4);
  }, a.prototype.readDoubleLE = function(o, l) {
    return o = o >>> 0, l || Ne(o, 8, this.length), n.read(this, o, !0, 52, 8);
  }, a.prototype.readDoubleBE = function(o, l) {
    return o = o >>> 0, l || Ne(o, 8, this.length), n.read(this, o, !1, 52, 8);
  };
  function Ae(m, o, l, T, A, k) {
    if (!a.isBuffer(m))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (o > A || o < k)
      throw new RangeError('"value" argument is out of bounds');
    if (l + T > m.length)
      throw new RangeError("Index out of range");
  }
  a.prototype.writeUintLE = a.prototype.writeUIntLE = function(o, l, T, A) {
    if (o = +o, l = l >>> 0, T = T >>> 0, !A) {
      const te = Math.pow(2, 8 * T) - 1;
      Ae(this, o, l, T, te, 0);
    }
    let k = 1, j = 0;
    for (this[l] = o & 255; ++j < T && (k *= 256); )
      this[l + j] = o / k & 255;
    return l + T;
  }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(o, l, T, A) {
    if (o = +o, l = l >>> 0, T = T >>> 0, !A) {
      const te = Math.pow(2, 8 * T) - 1;
      Ae(this, o, l, T, te, 0);
    }
    let k = T - 1, j = 1;
    for (this[l + k] = o & 255; --k >= 0 && (j *= 256); )
      this[l + k] = o / j & 255;
    return l + T;
  }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(o, l, T) {
    return o = +o, l = l >>> 0, T || Ae(this, o, l, 1, 255, 0), this[l] = o & 255, l + 1;
  }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(o, l, T) {
    return o = +o, l = l >>> 0, T || Ae(this, o, l, 2, 65535, 0), this[l] = o & 255, this[l + 1] = o >>> 8, l + 2;
  }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(o, l, T) {
    return o = +o, l = l >>> 0, T || Ae(this, o, l, 2, 65535, 0), this[l] = o >>> 8, this[l + 1] = o & 255, l + 2;
  }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(o, l, T) {
    return o = +o, l = l >>> 0, T || Ae(this, o, l, 4, 4294967295, 0), this[l + 3] = o >>> 24, this[l + 2] = o >>> 16, this[l + 1] = o >>> 8, this[l] = o & 255, l + 4;
  }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(o, l, T) {
    return o = +o, l = l >>> 0, T || Ae(this, o, l, 4, 4294967295, 0), this[l] = o >>> 24, this[l + 1] = o >>> 16, this[l + 2] = o >>> 8, this[l + 3] = o & 255, l + 4;
  };
  function At(m, o, l, T, A) {
    zt(o, T, A, m, l, 7);
    let k = Number(o & BigInt(4294967295));
    m[l++] = k, k = k >> 8, m[l++] = k, k = k >> 8, m[l++] = k, k = k >> 8, m[l++] = k;
    let j = Number(o >> BigInt(32) & BigInt(4294967295));
    return m[l++] = j, j = j >> 8, m[l++] = j, j = j >> 8, m[l++] = j, j = j >> 8, m[l++] = j, l;
  }
  function $t(m, o, l, T, A) {
    zt(o, T, A, m, l, 7);
    let k = Number(o & BigInt(4294967295));
    m[l + 7] = k, k = k >> 8, m[l + 6] = k, k = k >> 8, m[l + 5] = k, k = k >> 8, m[l + 4] = k;
    let j = Number(o >> BigInt(32) & BigInt(4294967295));
    return m[l + 3] = j, j = j >> 8, m[l + 2] = j, j = j >> 8, m[l + 1] = j, j = j >> 8, m[l] = j, l + 8;
  }
  a.prototype.writeBigUInt64LE = L(function(o, l = 0) {
    return At(this, o, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeBigUInt64BE = L(function(o, l = 0) {
    return $t(this, o, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeIntLE = function(o, l, T, A) {
    if (o = +o, l = l >>> 0, !A) {
      const ce = Math.pow(2, 8 * T - 1);
      Ae(this, o, l, T, ce - 1, -ce);
    }
    let k = 0, j = 1, te = 0;
    for (this[l] = o & 255; ++k < T && (j *= 256); )
      o < 0 && te === 0 && this[l + k - 1] !== 0 && (te = 1), this[l + k] = (o / j >> 0) - te & 255;
    return l + T;
  }, a.prototype.writeIntBE = function(o, l, T, A) {
    if (o = +o, l = l >>> 0, !A) {
      const ce = Math.pow(2, 8 * T - 1);
      Ae(this, o, l, T, ce - 1, -ce);
    }
    let k = T - 1, j = 1, te = 0;
    for (this[l + k] = o & 255; --k >= 0 && (j *= 256); )
      o < 0 && te === 0 && this[l + k + 1] !== 0 && (te = 1), this[l + k] = (o / j >> 0) - te & 255;
    return l + T;
  }, a.prototype.writeInt8 = function(o, l, T) {
    return o = +o, l = l >>> 0, T || Ae(this, o, l, 1, 127, -128), o < 0 && (o = 255 + o + 1), this[l] = o & 255, l + 1;
  }, a.prototype.writeInt16LE = function(o, l, T) {
    return o = +o, l = l >>> 0, T || Ae(this, o, l, 2, 32767, -32768), this[l] = o & 255, this[l + 1] = o >>> 8, l + 2;
  }, a.prototype.writeInt16BE = function(o, l, T) {
    return o = +o, l = l >>> 0, T || Ae(this, o, l, 2, 32767, -32768), this[l] = o >>> 8, this[l + 1] = o & 255, l + 2;
  }, a.prototype.writeInt32LE = function(o, l, T) {
    return o = +o, l = l >>> 0, T || Ae(this, o, l, 4, 2147483647, -2147483648), this[l] = o & 255, this[l + 1] = o >>> 8, this[l + 2] = o >>> 16, this[l + 3] = o >>> 24, l + 4;
  }, a.prototype.writeInt32BE = function(o, l, T) {
    return o = +o, l = l >>> 0, T || Ae(this, o, l, 4, 2147483647, -2147483648), o < 0 && (o = 4294967295 + o + 1), this[l] = o >>> 24, this[l + 1] = o >>> 16, this[l + 2] = o >>> 8, this[l + 3] = o & 255, l + 4;
  }, a.prototype.writeBigInt64LE = L(function(o, l = 0) {
    return At(this, o, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), a.prototype.writeBigInt64BE = L(function(o, l = 0) {
    return $t(this, o, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function je(m, o, l, T, A, k) {
    if (l + T > m.length)
      throw new RangeError("Index out of range");
    if (l < 0)
      throw new RangeError("Index out of range");
  }
  function er(m, o, l, T, A) {
    return o = +o, l = l >>> 0, A || je(m, o, l, 4), n.write(m, o, l, T, 23, 4), l + 4;
  }
  a.prototype.writeFloatLE = function(o, l, T) {
    return er(this, o, l, !0, T);
  }, a.prototype.writeFloatBE = function(o, l, T) {
    return er(this, o, l, !1, T);
  };
  function Ce(m, o, l, T, A) {
    return o = +o, l = l >>> 0, A || je(m, o, l, 8), n.write(m, o, l, T, 52, 8), l + 8;
  }
  a.prototype.writeDoubleLE = function(o, l, T) {
    return Ce(this, o, l, !0, T);
  }, a.prototype.writeDoubleBE = function(o, l, T) {
    return Ce(this, o, l, !1, T);
  }, a.prototype.copy = function(o, l, T, A) {
    if (!a.isBuffer(o))
      throw new TypeError("argument should be a Buffer");
    if (T || (T = 0), !A && A !== 0 && (A = this.length), l >= o.length && (l = o.length), l || (l = 0), A > 0 && A < T && (A = T), A === T || o.length === 0 || this.length === 0)
      return 0;
    if (l < 0)
      throw new RangeError("targetStart out of bounds");
    if (T < 0 || T >= this.length)
      throw new RangeError("Index out of range");
    if (A < 0)
      throw new RangeError("sourceEnd out of bounds");
    A > this.length && (A = this.length), o.length - l < A - T && (A = o.length - l + T);
    const k = A - T;
    return this === o && typeof c.prototype.copyWithin == "function" ? this.copyWithin(l, T, A) : c.prototype.set.call(
      o,
      this.subarray(T, A),
      l
    ), k;
  }, a.prototype.fill = function(o, l, T, A) {
    if (typeof o == "string") {
      if (typeof l == "string" ? (A = l, l = 0, T = this.length) : typeof T == "string" && (A = T, T = this.length), A !== void 0 && typeof A != "string")
        throw new TypeError("encoding must be a string");
      if (typeof A == "string" && !a.isEncoding(A))
        throw new TypeError("Unknown encoding: " + A);
      if (o.length === 1) {
        const j = o.charCodeAt(0);
        (A === "utf8" && j < 128 || A === "latin1") && (o = j);
      }
    } else
      typeof o == "number" ? o = o & 255 : typeof o == "boolean" && (o = Number(o));
    if (l < 0 || this.length < l || this.length < T)
      throw new RangeError("Out of range index");
    if (T <= l)
      return this;
    l = l >>> 0, T = T === void 0 ? this.length : T >>> 0, o || (o = 0);
    let k;
    if (typeof o == "number")
      for (k = l; k < T; ++k)
        this[k] = o;
    else {
      const j = a.isBuffer(o) ? o : a.from(o, A), te = j.length;
      if (te === 0)
        throw new TypeError('The value "' + o + '" is invalid for argument "value"');
      for (k = 0; k < T - l; ++k)
        this[k + l] = j[k % te];
    }
    return this;
  };
  const Qe = {};
  function Mt(m, o, l) {
    Qe[m] = class extends l {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: o.apply(this, arguments),
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
  Mt(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(m) {
      return m ? `${m} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Mt(
    "ERR_INVALID_ARG_TYPE",
    function(m, o) {
      return `The "${m}" argument must be of type number. Received type ${typeof o}`;
    },
    TypeError
  ), Mt(
    "ERR_OUT_OF_RANGE",
    function(m, o, l) {
      let T = `The value of "${m}" is out of range.`, A = l;
      return Number.isInteger(l) && Math.abs(l) > 2 ** 32 ? A = ft(String(l)) : typeof l == "bigint" && (A = String(l), (l > BigInt(2) ** BigInt(32) || l < -(BigInt(2) ** BigInt(32))) && (A = ft(A)), A += "n"), T += ` It must be ${o}. Received ${A}`, T;
    },
    RangeError
  );
  function ft(m) {
    let o = "", l = m.length;
    const T = m[0] === "-" ? 1 : 0;
    for (; l >= T + 4; l -= 3)
      o = `_${m.slice(l - 3, l)}${o}`;
    return `${m.slice(0, l)}${o}`;
  }
  function St(m, o, l) {
    Le(o, "offset"), (m[o] === void 0 || m[o + l] === void 0) && Ge(o, m.length - (l + 1));
  }
  function zt(m, o, l, T, A, k) {
    if (m > l || m < o) {
      const j = typeof o == "bigint" ? "n" : "";
      let te;
      throw k > 3 ? o === 0 || o === BigInt(0) ? te = `>= 0${j} and < 2${j} ** ${(k + 1) * 8}${j}` : te = `>= -(2${j} ** ${(k + 1) * 8 - 1}${j}) and < 2 ** ${(k + 1) * 8 - 1}${j}` : te = `>= ${o}${j} and <= ${l}${j}`, new Qe.ERR_OUT_OF_RANGE("value", te, m);
    }
    St(T, A, k);
  }
  function Le(m, o) {
    if (typeof m != "number")
      throw new Qe.ERR_INVALID_ARG_TYPE(o, "number", m);
  }
  function Ge(m, o, l) {
    throw Math.floor(m) !== m ? (Le(m, l), new Qe.ERR_OUT_OF_RANGE(l || "offset", "an integer", m)) : o < 0 ? new Qe.ERR_BUFFER_OUT_OF_BOUNDS() : new Qe.ERR_OUT_OF_RANGE(
      l || "offset",
      `>= ${l ? 1 : 0} and <= ${o}`,
      m
    );
  }
  const mr = /[^+/0-9A-Za-z-_]/g;
  function Cr(m) {
    if (m = m.split("=")[0], m = m.trim().replace(mr, ""), m.length < 2)
      return "";
    for (; m.length % 4 !== 0; )
      m = m + "=";
    return m;
  }
  function mt(m, o) {
    o = o || 1 / 0;
    let l;
    const T = m.length;
    let A = null;
    const k = [];
    for (let j = 0; j < T; ++j) {
      if (l = m.charCodeAt(j), l > 55295 && l < 57344) {
        if (!A) {
          if (l > 56319) {
            (o -= 3) > -1 && k.push(239, 191, 189);
            continue;
          } else if (j + 1 === T) {
            (o -= 3) > -1 && k.push(239, 191, 189);
            continue;
          }
          A = l;
          continue;
        }
        if (l < 56320) {
          (o -= 3) > -1 && k.push(239, 191, 189), A = l;
          continue;
        }
        l = (A - 55296 << 10 | l - 56320) + 65536;
      } else
        A && (o -= 3) > -1 && k.push(239, 191, 189);
      if (A = null, l < 128) {
        if ((o -= 1) < 0)
          break;
        k.push(l);
      } else if (l < 2048) {
        if ((o -= 2) < 0)
          break;
        k.push(
          l >> 6 | 192,
          l & 63 | 128
        );
      } else if (l < 65536) {
        if ((o -= 3) < 0)
          break;
        k.push(
          l >> 12 | 224,
          l >> 6 & 63 | 128,
          l & 63 | 128
        );
      } else if (l < 1114112) {
        if ((o -= 4) < 0)
          break;
        k.push(
          l >> 18 | 240,
          l >> 12 & 63 | 128,
          l >> 6 & 63 | 128,
          l & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return k;
  }
  function Dt(m) {
    const o = [];
    for (let l = 0; l < m.length; ++l)
      o.push(m.charCodeAt(l) & 255);
    return o;
  }
  function xt(m, o) {
    let l, T, A;
    const k = [];
    for (let j = 0; j < m.length && !((o -= 2) < 0); ++j)
      l = m.charCodeAt(j), T = l >> 8, A = l % 256, k.push(A), k.push(T);
    return k;
  }
  function Nt(m) {
    return e.toByteArray(Cr(m));
  }
  function de(m, o, l, T) {
    let A;
    for (A = 0; A < T && !(A + l >= o.length || A >= m.length); ++A)
      o[A + l] = m[A];
    return A;
  }
  function ze(m, o) {
    return m instanceof o || m != null && m.constructor != null && m.constructor.name != null && m.constructor.name === o.name;
  }
  function E(m) {
    return m !== m;
  }
  const O = function() {
    const m = "0123456789abcdef", o = new Array(256);
    for (let l = 0; l < 16; ++l) {
      const T = l * 16;
      for (let A = 0; A < 16; ++A)
        o[T + A] = m[l] + m[A];
    }
    return o;
  }();
  function L(m) {
    return typeof BigInt > "u" ? M : m;
  }
  function M() {
    throw new Error("BigInt not supported");
  }
})(Fp);
const fS = Fp.Buffer, Bt = 100 * 1e3 * 1e3, pS = 32768, hS = 9783072e5;
class dS {
  constructor(e) {
    console.info({ id: e });
  }
}
class gS {
  constructor() {
    this.debug = !1;
  }
  parse64Content(e) {
    const n = window.atob(e), i = n.length, s = new fS(i);
    for (let c = 0; c < i; c++)
      s[c] = n.charCodeAt(c);
    return this.parseBuffer(s);
  }
  parseBuffer(e) {
    if (e.toString("utf8", 0, 6) !== "bplist")
      throw new Error("Invalid binary plist. Expected 'bplist' at offset 0.");
    const s = e.slice(e.length - 32, e.length), c = s.readUInt8(6);
    this.debug && console.log("offsetSize: " + c);
    const h = s.readUInt8(7);
    this.debug && console.log("objectRefSize: " + h);
    const f = this.readUInt64BE(s, 8);
    this.debug && console.log("numObjects: " + f);
    const v = this.readUInt64BE(s, 16);
    this.debug && console.log("topObject: " + v);
    const u = this.readUInt64BE(s, 24);
    if (this.debug && console.log("offsetTableOffset: " + u), f > pS)
      throw new Error("maxObjectCount exceeded");
    const a = [];
    for (let d = 0; d < f; d++) {
      const w = e.slice(u + d * c, u + (d + 1) * c);
      a[d] = this.readUInt(w, 0), this.debug;
    }
    const g = (d) => {
      const w = a[d], $ = e[w], I = ($ & 240) >> 4, R = $ & 15, D = () => {
        switch (R) {
          case 0:
            return null;
          case 8:
            return !1;
          case 9:
            return !0;
          case 15:
            return null;
          default:
            throw new Error("Unhandled simple type 0x" + I.toString(16));
        }
      }, _ = (H) => {
        let Y = "", V;
        for (V = 0; V < H.length && H[V] === 0; V++)
          ;
        for (; V < H.length; V++) {
          const re = "00" + H[V].toString(16);
          Y += re.substr(re.length - 2);
        }
        return Y;
      }, x = () => {
        const H = Math.pow(2, R);
        if (H > 4) {
          const Y = e.slice(w + 1, w + 1 + H), V = _(Y);
          return rS(V, 16);
        }
        if (H < Bt)
          return this.readUInt(e.slice(w + 1, w + 1 + H));
        throw new Error(
          "Too little heap space available! Wanted to read " + H + " bytes, but only " + Bt + " are available."
        );
      }, F = () => {
        const H = R + 1;
        if (H < Bt)
          return new dS(this.readUInt(e.slice(w + 1, w + 1 + H)));
        throw new Error(
          "To little heap space available! Wanted to read " + H + " bytes, but only " + Bt + " are available."
        );
      }, C = () => {
        const H = Math.pow(2, R);
        if (H < Bt) {
          const Y = e.slice(w + 1, w + 1 + H);
          if (H === 4)
            return Y.readFloatBE(0);
          if (H === 8)
            return Y.readDoubleBE(0);
        } else
          throw new Error(
            "To little heap space available! Wanted to read " + H + " bytes, but only " + Bt + " are available."
          );
      }, z = () => {
        R !== 3 && console.error("Unknown date type :" + R + ". Parsing anyway...");
        const H = e.slice(w + 1, w + 9);
        return new Date(hS + 1e3 * H.readDoubleBE(0));
      }, q = () => {
        let H = 1, Y = R;
        if (R === 15) {
          const V = e[w + 1], re = (V & 240) / 16;
          re !== 1 && console.error("0x4: UNEXPECTED LENGTH-INT TYPE! " + re);
          const he = V & 15, xe = Math.pow(2, he);
          H = 2 + xe, xe < 3 ? Y = this.readUInt(e.slice(w + 2, w + 2 + xe)) : Y = this.readUInt(e.slice(w + 2, w + 2 + xe));
        }
        if (Y < Bt)
          return e.slice(w + H, w + H + Y);
        throw new Error(
          "To little heap space available! Wanted to read " + Y + " bytes, but only " + Bt + " are available."
        );
      }, G = (H) => {
        H = H || 0;
        let Y = "utf8", V = R, re = 1;
        if (R === 15) {
          const he = e[w + 1], xe = (he & 240) / 16;
          xe !== 1 && console.error("UNEXPECTED LENGTH-INT TYPE! " + xe);
          const fe = he & 15, Te = Math.pow(2, fe);
          re = 2 + Te, Te < 3 ? V = this.readUInt(e.slice(w + 2, w + 2 + Te)) : V = this.readUInt(e.slice(w + 2, w + 2 + Te));
        }
        if (V *= H + 1, V < Bt) {
          let he = e.toString("utf8", w + re, w + re + V);
          return H && (he = this.swapBytes(he), Y = "ucs2"), he.toString(Y);
        } else
          throw new Error(
            "To little heap space available! Wanted to read " + V + " bytes, but only " + Bt + " are available."
          );
      }, X = () => {
        let H = R, Y = 1;
        if (R === 15) {
          const re = e[w + 1], he = (re & 240) / 16;
          he !== 1 && console.error("0xa: UNEXPECTED LENGTH-INT TYPE! " + he);
          const xe = re & 15, fe = Math.pow(2, xe);
          Y = 2 + fe, fe < 3 ? H = this.readUInt(e.slice(w + 2, w + 2 + fe)) : H = this.readUInt(e.slice(w + 2, w + 2 + fe));
        }
        if (H * h > Bt)
          throw new Error("To little heap space available!");
        const V = [];
        for (let re = 0; re < H; re++) {
          const he = this.readUInt(
            e.slice(w + Y + re * h, w + Y + (re + 1) * h)
          );
          V[re] = g(he);
        }
        return V;
      }, Z = () => {
        let H = R, Y = 1;
        if (R === 15) {
          const re = e[w + 1], he = (re & 240) / 16;
          he !== 1 && console.error("0xD: UNEXPECTED LENGTH-INT TYPE! " + he);
          const xe = re & 15, fe = Math.pow(2, xe);
          Y = 2 + fe, fe < 3 ? H = this.readUInt(e.slice(w + 2, w + 2 + fe)) : H = this.readUInt(e.slice(w + 2, w + 2 + fe));
        }
        if (H * 2 * h > Bt)
          throw new Error("To little heap space available!");
        this.debug && console.log("Parsing dictionary #" + d);
        const V = {};
        for (let re = 0; re < H; re++) {
          const he = this.readUInt(
            e.slice(w + Y + re * h, w + Y + (re + 1) * h)
          ), xe = this.readUInt(
            e.slice(
              w + Y + H * h + re * h,
              w + Y + H * h + (re + 1) * h
            )
          ), fe = g(he), Te = g(xe);
          this.debug && console.log("  DICT #" + d + ": Mapped " + fe + " to " + Te), V[fe] = Te;
        }
        return V;
      };
      switch (I) {
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
          throw new Error("Unhandled type 0x" + I.toString(16));
      }
    };
    return [g(v)];
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
const mS = new gS(), ur = {
  skipConfirmation: "X-Skip-Confirm-Navigation=1",
  sameWindow: "X-Target=_self"
}, _r = {
  skipConfirmation: "X-Skip-Confirm-Navigation",
  sameWindow: "X-Target"
}, ic = {
  url: "",
  sameWindow: !1,
  skipConfirmation: !1
};
class Ct {
  /**
   * Generates a URL file.
   */
  static generateURLFileContent(e, n, i = !1, s = !1) {
    let c = "";
    return e && e.indexOf("[InternetShortcut]") !== -1 && e.indexOf("URL=") !== -1 ? c = e.replace(new RegExp("URL=.*", "gm"), `URL=${wt(n)}`) : c = `[InternetShortcut]\r
URL=${wt(n)}`, !i && c.indexOf(ur.sameWindow) !== -1 ? c = c.replace(ur.sameWindow, "") : i && c.indexOf(ur.sameWindow) === -1 && (c = `${c}\r
${ur.sameWindow}`), !s && c.indexOf(ur.skipConfirmation) !== -1 ? c = c.replace(ur.skipConfirmation, "") : s && c.indexOf(ur.skipConfirmation) === -1 && (c = `${c}\r
${ur.skipConfirmation}`), c = c.replace(/\r\n\r\n/gm, `\r
`).trim(), `${c}\r
`;
  }
  /**
   * Parse a URL file.
   */
  static parseURLFile(e) {
    const n = { ...ic };
    if (e) {
      const i = e.match("URL=.*");
      if (i && Array.isArray(i) && i.length > 0) {
        const s = i[0];
        n.url = wt(s.replace("URL=", ""));
      }
      e.indexOf(ur.skipConfirmation) !== -1 && (n.skipConfirmation = !0), e.indexOf(ur.sameWindow) !== -1 && (n.sameWindow = !0);
    }
    return n;
  }
  /**
   * Generates a webloc file.
   */
  static generateWeblocFileContent(e, n, i = !1, s = !1) {
    let c = "", h = !1;
    if (e) {
      const f = new window.DOMParser(), v = ac(e), u = f.parseFromString(v, "text/xml"), a = [...u.getElementsByTagName("dict"), ...u.getElementsByTagName("extra")];
      let g = !1, d = !1;
      if (a && a.length)
        for (const $ of a) {
          const I = $.getElementsByTagName("key"), R = $.getElementsByTagName("string");
          Xt(I) === "URL" && (wa(R, wt(n)), h = !0), Xt(I) === _r.sameWindow && Xt(R) === "_self" && (i ? wa(R, "_self") : u.getElementsByTagName("plist")[0].removeChild($), d = !0), Xt(I) === _r.skipConfirmation && Xt(R) === "1" && (s ? wa(R, "1") : u.getElementsByTagName("plist")[0].removeChild($), g = !0);
        }
      if (i && !d) {
        const $ = oc(u, _r.sameWindow, "_self");
        u.getElementsByTagName("plist")[0].appendChild($);
      }
      if (s && !g) {
        const $ = oc(u, _r.skipConfirmation, "1");
        u.getElementsByTagName("plist")[0].appendChild($);
      }
      c = `<?xml version="1.0" encoding="UTF-8"?>
			${new window.XMLSerializer().serializeToString(u)}`, c.indexOf("parsererror") > -1 && (console.error("Parse error", c), c = ""), c = vS(c);
    }
    return (!c || !h) && (c = `<?xml version="1.0" encoding="UTF-8"?>
				<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
				<plist version="1.0">
					<dict>
						<key>URL</key>
						<string>${wt(n)}</string>
					</dict>`, i && (c = `${c}
				<extra>
					<key>${_r.sameWindow}</key>
					<string>_self</string>
				</extra>`), s && (c = `${c}
				<extra>
					<key>${_r.skipConfirmation}</key>
					<string>1</string>
				</extra>`), c = `${c}
			</plist>`), c = yS(c), c = c.replace(/(\n|\b)\t+/g, "$1").trim(), c = c.replace(/^\s*$(?:\r\n?|\n)/gm, "").trim(), c;
  }
  /**
   * Parse a webloc file.
   */
  static parseWeblocFile(e) {
    const n = { ...ic };
    if (e)
      if (e.substring(0, 6) === "bplist")
        try {
          const i = mS.parse64Content(window.btoa(e));
          i && i.length && i[0] && i[0].URL && (n.url = i[0].URL);
        } catch (i) {
          console.info(i);
        }
      else {
        const i = new window.DOMParser(), s = ac(e), c = i.parseFromString(s, "text/xml"), h = [...c.getElementsByTagName("dict"), ...c.getElementsByTagName("extra")];
        if (h && h.length)
          for (const f of h) {
            const v = f.getElementsByTagName("key"), u = f.getElementsByTagName("string");
            Xt(v) === "URL" && (n.url = wt(Xt(u))), Xt(v) === _r.sameWindow && Xt(u) === "_self" && (n.sameWindow = !0), Xt(v) === _r.skipConfirmation && Xt(u) === "1" && (n.skipConfirmation = !0);
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
const Xt = (r) => r && r.length > 0 && r[0].childNodes && r[0].childNodes.length > 0 && r[0].childNodes[0] ? r[0].childNodes[0].nodeValue : "", wa = (r, e) => {
  r && r.length > 0 && r[0].childNodes && r[0].childNodes.length > 0 && r[0].childNodes[0] && (r[0].childNodes[0].nodeValue = e);
}, oc = (r, e, n) => {
  const i = r.createElement("extra"), s = r.createElement("key");
  s.appendChild(r.createTextNode(e)), i.appendChild(s);
  const c = r.createElement("string");
  return c.appendChild(r.createTextNode(n)), i.appendChild(c), i;
}, vS = (r) => r.replace(/></g, `>
<`), yS = (r) => r.replace(/<extra>/g, "<!-- <extra>").replace(/<\/extra>/g, "</extra> -->"), ac = (r) => r.replace(/<!-- <extra>/g, "<extra>").replace(/<\/extra> -->/g, "</extra>");
function wS(r) {
  let e, n, i, s, c = (
    /*t*/
    r[1]("files_linkeditor", "View link") + ""
  ), h, f, v;
  return {
    c() {
      e = _e("div"), n = _e("a"), i = _e("span"), s = qe(), h = ct(c), ue(i, "class", "icon icon-link"), ue(n, "href", "#/"), ue(n, "class", "button"), ue(n, "id", "downloadFile"), ue(e, "class", "directDownload");
    },
    m(u, a) {
      Me(u, e, a), ve(e, n), ve(n, i), ve(n, s), ve(n, h), f || (v = _t(n, "click", Er(function() {
        Ja(
          /*onClick*/
          r[0]
        ) && r[0].apply(this, arguments);
      })), f = !0);
    },
    p(u, [a]) {
      r = u;
    },
    i: dr,
    o: dr,
    d(u) {
      u && ke(e), f = !1, v();
    }
  };
}
function bS(r, e, n) {
  let { onClick: i } = e;
  const s = window.t;
  return r.$$set = (c) => {
    "onClick" in c && n(0, i = c.onClick);
  }, [i, s];
}
class ES extends xn {
  constructor(e) {
    super(), An(this, e, bS, wS, Vr, { onClick: 0 });
  }
}
const Ri = "application/internet-shortcut", TS = [];
class Ar {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    var i, s, c, h, f, v, u, a;
    (s = (i = window.OCA.Files) == null ? void 0 : i.fileActions) == null || s.registerAction({
      name: "editLink",
      displayName: t("files_linkeditor", "Edit link"),
      mime: Ri,
      actionHandler: async (g, d) => await Ar.loadAndChangeViewMode({ fileName: g, context: d, nextViewMode: "edit" }),
      permissions: window.OC.currentUser && window.OC.PERMISSION_UPDATE,
      iconClass: "icon-link"
    }), (h = (c = window.OCA.Files) == null ? void 0 : c.fileActions) == null || h.registerAction({
      name: "viewLink",
      displayName: t("files_linkeditor", "View link"),
      mime: Ri,
      actionHandler: async (g, d) => {
        window.OC.currentUser ? await Ar.loadAndChangeViewMode({ fileName: g, context: d, nextViewMode: "view" }) : await Ar.loadAndChangeViewMode({
          fileName: g,
          context: d,
          nextViewMode: "view",
          downloadUrl: d.fileList.getDownloadUrl(g),
          publicUser: !0
        });
      },
      permissions: window.OC.PERMISSION_READ,
      iconClass: "icon-link"
    }), (v = (f = window.OCA.Files) == null ? void 0 : f.fileActions) == null || v.setDefault(Ri, "viewLink"), (a = (u = window.OC.Plugins) == null ? void 0 : u.register) == null || a.call(u, "OCA.Files.NewFileMenu", {
      attach: function(g) {
        const d = g.fileList;
        if (d.id !== "files")
          return;
        const w = ({ id: $, displayName: I, templateName: R }) => {
          g.addMenuEntry({
            id: $,
            displayName: I,
            templateName: R,
            iconClass: "icon-link",
            fileType: Ri,
            actionHandler: function(D) {
              const _ = d.getCurrentDirectory();
              Ft.update(() => "edit"), hr.update(
                () => Gt.getFileConfig({
                  name: D,
                  dir: _,
                  isNew: !0,
                  onCreate: async (x) => {
                    await d.createFile(D, {
                      scrollTo: !1
                    });
                    const F = await Gt.load({ fileName: D, dir: _ });
                    await Ar.saveAndChangeViewMode({ ...x, fileModifiedTime: F.mtime });
                  }
                })
              );
            }
          });
        };
        w({
          id: "application-internet-shortcut",
          displayName: `${window.t("files_linkeditor", "New link")} (.URL)`,
          // TRANSLATORS default filename when creating a new link file from the files list, keep .URL at the end
          templateName: window.t("files_linkeditor", "Link.URL")
        }), w({
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
      var n = Ct.getExtension(g);
      if (n === "url" || n === "webloc") {
        const d = (document.querySelector("input#downloadURL") || { value: "" }).value;
        TS.push(
          new ES({
            anchor: document.querySelector(".directDownload"),
            target: document.querySelector(".directDownload").parentElement,
            props: {
              onClick: () => {
                Ar.loadAndChangeViewMode({
                  fileName: g,
                  nextViewMode: "view",
                  publicUser: !0,
                  downloadUrl: d
                });
              }
            }
          })
        );
      }
    }
  }
  static async loadAndChangeViewMode({ fileName: e, context: n, nextViewMode: i, publicUser: s, downloadUrl: c }) {
    const h = n ? encodeURI(n.fileList.linkTo() + "?path=" + n.dir) : window.location.href;
    Ft.update(() => i), hr.update(
      () => Gt.getFileConfig({
        name: e,
        currentUrl: h,
        dir: n ? n.dir : ""
      })
    );
    let f = {};
    if (s ? f = await Gt.loadPublic({ downloadUrl: c }) : f = await Gt.load({ fileName: e, dir: n.dir }), f) {
      const v = Ct.getExtension(e);
      let u = {};
      v === "webloc" ? u = Ct.parseWeblocFile(f.filecontents) : u = Ct.parseURLFile(f.filecontents), hr.update(
        (a) => Gt.getFileConfig({ ...a, ...u, fileModifiedTime: f.mtime, isLoaded: !0 })
      );
    } else
      window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async saveAndChangeViewMode({ name: e, dir: n, url: i, fileModifiedTime: s, sameWindow: c, skipConfirmation: h }) {
    const f = Ct.getExtension(e);
    let v = "";
    f === "webloc" ? v = Ct.generateWeblocFileContent("", i, c, h) : v = Ct.generateURLFileContent("", i, c, h), await Gt.save({ fileContent: v, name: e, dir: n, fileModifiedTime: s }), Ft.update(() => "none");
  }
}
function sc(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "Link target URL") + ""
  ), i, s, c, h, f, v, u, a, g, d, w, $, I, R, D, _;
  return {
    c() {
      e = _e("label"), i = ct(n), s = qe(), c = _e("br"), h = qe(), f = _e("input"), v = qe(), u = _e("input"), a = qe(), g = _e("label"), g.textContent = `${/*t*/
      r[2]("files_linkeditor", "Open in same window")}`, d = qe(), w = _e("input"), I = qe(), R = _e("label"), R.textContent = `${/*t*/
      r[2]("files_linkeditor", "Skip confirmation dialog before open (has to open in same window)")}`, ue(f, "type", "text"), es(f, "width", "100%"), ue(f, "class", "input-wide"), f.autofocus = !0, ue(f, "data-cy", "url-input"), ue(
        f,
        "placeholder",
        /*t*/
        r[2]("files_linkeditor", "e.g. https://example.org")
      ), ue(u, "type", "checkbox"), ue(u, "id", "linkeditor_sameWindow"), ue(u, "class", "checkbox"), ue(g, "for", "linkeditor_sameWindow"), ue(g, "class", "space-top"), ue(w, "type", "checkbox"), w.disabled = $ = !/*file*/
      r[0].sameWindow, ue(w, "id", "linkeditor_skipConfirmation"), ue(w, "class", "checkbox"), ue(R, "for", "linkeditor_skipConfirmation");
    },
    m(x, F) {
      Me(x, e, F), ve(e, i), ve(e, s), ve(e, c), ve(e, h), ve(e, f), Ui(
        f,
        /*file*/
        r[0].url
      ), Me(x, v, F), Me(x, u, F), u.checked = /*file*/
      r[0].sameWindow, Me(x, a, F), Me(x, g, F), Me(x, d, F), Me(x, w, F), w.checked = /*file*/
      r[0].skipConfirmation, Me(x, I, F), Me(x, R, F), f.focus(), D || (_ = [
        _t(
          f,
          "input",
          /*input0_input_handler*/
          r[5]
        ),
        _t(
          u,
          "change",
          /*input1_change_handler*/
          r[6]
        ),
        _t(
          w,
          "change",
          /*input2_change_handler*/
          r[7]
        )
      ], D = !0);
    },
    p(x, F) {
      F & /*file*/
      1 && f.value !== /*file*/
      x[0].url && Ui(
        f,
        /*file*/
        x[0].url
      ), F & /*file*/
      1 && (u.checked = /*file*/
      x[0].sameWindow), F & /*file*/
      1 && $ !== ($ = !/*file*/
      x[0].sameWindow) && (w.disabled = $), F & /*file*/
      1 && (w.checked = /*file*/
      x[0].skipConfirmation);
    },
    d(x) {
      x && (ke(e), ke(v), ke(u), ke(a), ke(g), ke(d), ke(w), ke(I), ke(R)), D = !1, $r(_);
    }
  };
}
function uc(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "Visit link") + ""
  ), i, s;
  return {
    c() {
      e = _e("a"), i = ct(n), ue(e, "href", s = wt(
        /*file*/
        r[0].url
      )), ue(e, "target", "_blank"), ue(e, "class", "button");
    },
    m(c, h) {
      Me(c, e, h), ve(e, i);
    },
    p(c, h) {
      h & /*file*/
      1 && s !== (s = wt(
        /*file*/
        c[0].url
      )) && ue(e, "href", s);
    },
    d(c) {
      c && ke(e);
    }
  };
}
function lc(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "Save") + ""
  ), i, s, c;
  return {
    c() {
      e = _e("a"), i = ct(n), ue(e, "href", window.location.href), ue(e, "class", "primary button");
    },
    m(h, f) {
      Me(h, e, f), ve(e, i), s || (c = _t(e, "click", Er(
        /*save*/
        r[4]
      )), s = !0);
    },
    p: dr,
    d(h) {
      h && ke(e), s = !1, c();
    }
  };
}
function $S(r) {
  let e, n, i, s = (
    /*file*/
    r[0].name + ""
  ), c, h, f, v, u, a, g, d = (
    /*t*/
    r[2]("files_linkeditor", "Cancel") + ""
  ), w, $, I, R, D = !/*loading*/
  r[1] && sc(r), _ = !/*loading*/
  r[1] && uc(r), x = !/*loading*/
  r[1] && lc(r);
  return {
    c() {
      e = _e("form"), n = _e("div"), i = _e("h3"), c = ct(s), h = qe(), D && D.c(), f = qe(), v = _e("div"), _ && _.c(), u = qe(), a = _e("div"), g = _e("a"), w = ct(d), $ = qe(), x && x.c(), ue(n, "class", "edit"), ue(v, "class", "oc-dialog-buttonrow onebutton urlvisit"), ue(g, "href", window.location.href), ue(g, "class", "cancel button"), ue(a, "class", "oc-dialog-buttonrow twobuttons"), ue(
        e,
        "action",
        /*OC*/
        r[3].generateUrl("/")
      ), ue(e, "method", "post");
    },
    m(F, C) {
      Me(F, e, C), ve(e, n), ve(n, i), ve(i, c), ve(n, h), D && D.m(n, null), ve(e, f), ve(e, v), _ && _.m(v, null), ve(e, u), ve(e, a), ve(a, g), ve(g, w), ve(a, $), x && x.m(a, null), I || (R = [
        _t(g, "click", Er(
          /*click_handler*/
          r[8]
        )),
        _t(e, "submit", Er(
          /*save*/
          r[4]
        ))
      ], I = !0);
    },
    p(F, C) {
      C & /*file*/
      1 && s !== (s = /*file*/
      F[0].name + "") && Qa(c, s), /*loading*/
      F[1] ? D && (D.d(1), D = null) : D ? D.p(F, C) : (D = sc(F), D.c(), D.m(n, null)), /*loading*/
      F[1] ? _ && (_.d(1), _ = null) : _ ? _.p(F, C) : (_ = uc(F), _.c(), _.m(v, null)), /*loading*/
      F[1] ? x && (x.d(1), x = null) : x ? x.p(F, C) : (x = lc(F), x.c(), x.m(a, null));
    },
    d(F) {
      F && ke(e), D && D.d(), _ && _.d(), x && x.d(), I = !1, $r(R);
    }
  };
}
function SS(r) {
  let e, n;
  return e = new ts({
    props: {
      loading: (
        /*loading*/
        r[1]
      ),
      $$slots: { default: [$S] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      In(e.$$.fragment);
    },
    m(i, s) {
      qr(e, i, s), n = !0;
    },
    p(i, [s]) {
      const c = {};
      s & /*loading*/
      2 && (c.loading = /*loading*/
      i[1]), s & /*$$scope, loading, file*/
      1027 && (c.$$scope = { dirty: s, ctx: i }), e.$set(c);
    },
    i(i) {
      n || (ut(e.$$.fragment, i), n = !0);
    },
    o(i) {
      Lt(e.$$.fragment, i), n = !1;
    },
    d(i) {
      zr(e, i);
    }
  };
}
function OS(r, e, n) {
  let i, s;
  const c = window.t, h = window.OC;
  let f;
  zi(() => {
    f = hr.subscribe((w) => {
      n(0, i = w), i && (i.isLoaded || i.isNew) && n(1, s = !1);
    });
  }), Hi(() => {
    f();
  });
  const v = () => {
    n(1, s = !0), i.isNew && i.onCreate ? i.onCreate({ ...i }) : Ar.saveAndChangeViewMode({ ...i });
  };
  function u() {
    i.url = this.value, n(0, i);
  }
  function a() {
    i.sameWindow = this.checked, n(0, i);
  }
  function g() {
    i.skipConfirmation = this.checked, n(0, i);
  }
  const d = () => {
    Ft.update(() => "none");
  };
  return n(0, i = Gt.getFileConfig()), n(1, s = !0), [
    i,
    s,
    c,
    h,
    v,
    u,
    a,
    g,
    d
  ];
}
class _S extends xn {
  constructor(e) {
    super(), An(this, e, OS, SS, Vr, {});
  }
}
class Ir {
  static getFileConfig({
    name: e,
    url: n,
    downloadUrl: i,
    dir: s,
    onCreate: c,
    fileModifiedTime: h,
    isNew: f,
    isLoaded: v,
    sameWindow: u,
    skipConfirmation: a,
    permissions: g,
    existingContents: d,
    templateName: w
  } = {}) {
    return {
      name: e || "?",
      downloadUrl: i || "",
      url: n ? wt(n) : "",
      dir: s || "",
      onCreate: c,
      fileModifiedTime: h || null,
      isNew: f || !1,
      isLoaded: v || !1,
      sameWindow: u || !1,
      skipConfirmation: a || !1,
      permissions: g || lt.NONE,
      existingContents: d,
      templateName: w
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
    let s = `${i}${n}`;
    i !== "/" && (s = `${i}/${n}`);
    const c = H$(), h = `${Pp}${s}`;
    try {
      if (await c.putFileContents(h, e, { overwrite: !1 })) {
        const v = await c.stat(h, { details: !0, data: W$() });
        return od("files:node:created", X$(v.data)), !0;
      }
    } catch (f) {
      console.error(f);
    }
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
}
const cc = (r) => {
  if (!(r != null && r.name) || !(r != null && r.templateName))
    return r;
  const [, e] = r.templateName.split(".") ?? [], n = r.name.toLocaleLowerCase();
  return e && !n.endsWith(e.toLocaleLowerCase()) && (r.name += `.${e}`), r;
};
function fc(r) {
  let e, n = (
    /*t*/
    r[3]("files_linkeditor", "File name") + ""
  ), i, s, c, h, f, v, u;
  return {
    c() {
      e = _e("label"), i = ct(n), s = qe(), c = _e("br"), h = qe(), f = _e("input"), ue(f, "type", "text"), es(f, "width", "100%"), ue(f, "class", "input-wide"), f.autofocus = !0, ue(f, "data-cy", "name-input");
    },
    m(a, g) {
      Me(a, e, g), ve(e, i), ve(e, s), ve(e, c), ve(e, h), ve(e, f), Ui(
        f,
        /*file*/
        r[0].name
      ), f.focus(), v || (u = [
        _t(
          f,
          "input",
          /*input_input_handler*/
          r[7]
        ),
        _t(
          f,
          "keyup",
          /*checkConflicts*/
          r[5]
        )
      ], v = !0);
    },
    p(a, g) {
      g & /*file*/
      1 && f.value !== /*file*/
      a[0].name && Ui(
        f,
        /*file*/
        a[0].name
      );
    },
    d(a) {
      a && ke(e), v = !1, $r(u);
    }
  };
}
function pc(r) {
  let e, n = (
    /*t*/
    r[3]("files_linkeditor", "Create") + ""
  ), i, s, c;
  return {
    c() {
      e = _e("button"), i = ct(n), ue(e, "type", "button"), e.disabled = /*isConflicting*/
      r[2], ue(e, "class", "primary button");
    },
    m(h, f) {
      Me(h, e, f), ve(e, i), s || (c = _t(e, "click", Er(
        /*save*/
        r[6]
      )), s = !0);
    },
    p(h, f) {
      f & /*isConflicting*/
      4 && (e.disabled = /*isConflicting*/
      h[2]);
    },
    d(h) {
      h && ke(e), s = !1, c();
    }
  };
}
function IS(r) {
  let e, n, i, s, c, h, f, v = (
    /*t*/
    r[3]("files_linkeditor", "Cancel") + ""
  ), u, a, g, d, w = !/*loading*/
  r[1] && fc(r), $ = !/*loading*/
  r[1] && pc(r);
  return {
    c() {
      e = _e("form"), n = _e("div"), i = _e("h3"), i.textContent = `${window.t("files_linkeditor", "New link")}`, s = qe(), w && w.c(), c = qe(), h = _e("div"), f = _e("a"), u = ct(v), a = qe(), $ && $.c(), ue(n, "class", "edit"), ue(f, "href", window.location.href), ue(f, "class", "cancel button"), ue(h, "class", "oc-dialog-buttonrow twobuttons"), ue(
        e,
        "action",
        /*OC*/
        r[4].generateUrl("/")
      ), ue(e, "method", "post");
    },
    m(I, R) {
      Me(I, e, R), ve(e, n), ve(n, i), ve(n, s), w && w.m(n, null), ve(e, c), ve(e, h), ve(h, f), ve(f, u), ve(h, a), $ && $.m(h, null), g || (d = [
        _t(f, "click", Er(
          /*click_handler*/
          r[8]
        )),
        _t(e, "submit", Er(
          /*save*/
          r[6]
        ))
      ], g = !0);
    },
    p(I, R) {
      /*loading*/
      I[1] ? w && (w.d(1), w = null) : w ? w.p(I, R) : (w = fc(I), w.c(), w.m(n, null)), /*loading*/
      I[1] ? $ && ($.d(1), $ = null) : $ ? $.p(I, R) : ($ = pc(I), $.c(), $.m(h, null));
    },
    d(I) {
      I && ke(e), w && w.d(), $ && $.d(), g = !1, $r(d);
    }
  };
}
function AS(r) {
  let e, n;
  return e = new ts({
    props: {
      loading: (
        /*loading*/
        r[1]
      ),
      $$slots: { default: [IS] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      In(e.$$.fragment);
    },
    m(i, s) {
      qr(e, i, s), n = !0;
    },
    p(i, [s]) {
      const c = {};
      s & /*loading*/
      2 && (c.loading = /*loading*/
      i[1]), s & /*$$scope, isConflicting, loading, file*/
      2055 && (c.$$scope = { dirty: s, ctx: i }), e.$set(c);
    },
    i(i) {
      n || (ut(e.$$.fragment, i), n = !0);
    },
    o(i) {
      Lt(e.$$.fragment, i), n = !1;
    },
    d(i) {
      zr(e, i);
    }
  };
}
function xS(r, e, n) {
  let i, s, c;
  const h = window.t, f = window.OC, v = ($, I) => {
    const R = {
      name: $,
      templateName: i.templateName
    }, D = cc(R);
    return ((I == null ? void 0 : I.map((x) => x.basename)) ?? []).includes(D.name);
  };
  let u;
  zi(() => {
    u = hr.subscribe(($) => {
      n(0, i = $), i && (i.isLoaded || i.isNew) && (n(1, s = !1), a());
    });
  }), Hi(() => {
    u();
  });
  const a = () => {
    v(i.name, i.existingContents) ? n(2, c = !0) : n(2, c = !1);
  }, g = () => {
    v(i.name, i.existingContents) || (n(1, s = !0), i.onCreate(cc({ ...i })));
  };
  function d() {
    i.name = this.value, n(0, i);
  }
  const w = () => {
    Ft.update(() => "none");
  };
  return n(0, i = Ir.getFileConfig()), n(1, s = !0), n(2, c = !0), [
    i,
    s,
    c,
    h,
    f,
    a,
    g,
    d,
    w
  ];
}
class NS extends xn {
  constructor(e) {
    super(), An(this, e, xS, AS, Vr, {});
  }
}
function hc(r) {
  let e, n;
  return e = new NS({}), {
    c() {
      In(e.$$.fragment);
    },
    m(i, s) {
      qr(e, i, s), n = !0;
    },
    i(i) {
      n || (ut(e.$$.fragment, i), n = !0);
    },
    o(i) {
      Lt(e.$$.fragment, i), n = !1;
    },
    d(i) {
      zr(e, i);
    }
  };
}
function dc(r) {
  let e, n;
  return e = new eS({}), {
    c() {
      In(e.$$.fragment);
    },
    m(i, s) {
      qr(e, i, s), n = !0;
    },
    i(i) {
      n || (ut(e.$$.fragment, i), n = !0);
    },
    o(i) {
      Lt(e.$$.fragment, i), n = !1;
    },
    d(i) {
      zr(e, i);
    }
  };
}
function gc(r) {
  let e, n;
  return e = new _S({}), {
    c() {
      In(e.$$.fragment);
    },
    m(i, s) {
      qr(e, i, s), n = !0;
    },
    i(i) {
      n || (ut(e.$$.fragment, i), n = !0);
    },
    o(i) {
      Lt(e.$$.fragment, i), n = !1;
    },
    d(i) {
      zr(e, i);
    }
  };
}
function RS(r) {
  let e, n, i, s, c = (
    /*viewMode*/
    r[0] === "filename" && hc()
  ), h = (
    /*viewMode*/
    r[0] === "view" && dc()
  ), f = (
    /*viewMode*/
    r[0] === "edit" && gc()
  );
  return {
    c() {
      c && c.c(), e = qe(), h && h.c(), n = qe(), f && f.c(), i = dh();
    },
    m(v, u) {
      c && c.m(v, u), Me(v, e, u), h && h.m(v, u), Me(v, n, u), f && f.m(v, u), Me(v, i, u), s = !0;
    },
    p(v, [u]) {
      /*viewMode*/
      v[0] === "filename" ? c ? u & /*viewMode*/
      1 && ut(c, 1) : (c = hc(), c.c(), ut(c, 1), c.m(e.parentNode, e)) : c && (Ao(), Lt(c, 1, 1, () => {
        c = null;
      }), xo()), /*viewMode*/
      v[0] === "view" ? h ? u & /*viewMode*/
      1 && ut(h, 1) : (h = dc(), h.c(), ut(h, 1), h.m(n.parentNode, n)) : h && (Ao(), Lt(h, 1, 1, () => {
        h = null;
      }), xo()), /*viewMode*/
      v[0] === "edit" ? f ? u & /*viewMode*/
      1 && ut(f, 1) : (f = gc(), f.c(), ut(f, 1), f.m(i.parentNode, i)) : f && (Ao(), Lt(f, 1, 1, () => {
        f = null;
      }), xo());
    },
    i(v) {
      s || (ut(c), ut(h), ut(f), s = !0);
    },
    o(v) {
      Lt(c), Lt(h), Lt(f), s = !1;
    },
    d(v) {
      v && (ke(e), ke(n), ke(i)), c && c.d(v), h && h.d(v), f && f.d(v);
    }
  };
}
function PS(r, e, n) {
  let i, s;
  return zi(() => {
    s = Ft.subscribe((c) => {
      n(0, i = c);
    });
  }), Hi(() => {
    s();
  }), n(0, i = ""), [i];
}
class CS extends xn {
  constructor(e) {
    super(), An(this, e, PS, RS, Vr, {});
  }
}
const mc = "application/internet-shortcut", vc = () => '<span class="icon-link"></span>';
class vn {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    Ql({
      id: "editLink",
      displayName: () => t("files_linkeditor", "Edit link"),
      iconSvgInline: vc,
      exec: async (n) => {
        await vn.loadAndChangeViewMode({
          fileName: n.basename,
          dirName: n.dirname,
          nextViewMode: "edit",
          permissions: n.permissions
        });
      },
      enabled: (n) => window.OC.currentUser && n.every((i) => i.permissions >= lt.UPDATE && mc.includes(i.mime))
    }), Ql({
      id: "viewLink",
      displayName: () => t("files_linkeditor", "View link"),
      iconSvgInline: vc,
      exec: async (n) => {
        window.OC.currentUser ? await vn.loadAndChangeViewMode({
          fileName: n.basename,
          dirName: n.dirname,
          nextViewMode: "view",
          permissions: n.permissions
        }) : await vn.loadAndChangeViewMode({
          fileName: n.basename,
          dirName: n.dirname,
          nextViewMode: "view",
          // TODO:
          downloadUrl: n.source,
          publicUser: !0,
          permissions: n.permissions
        });
      },
      enabled: (n) => n.every((i) => i.permissions >= lt.READ && mc.includes(i.mime)),
      default: () => Ap.DEFAULT
    });
    const e = ({ id: n, displayName: i, templateName: s }) => {
      Y$({
        id: n,
        displayName: i,
        enabled: (c) => c.permissions >= lt.CREATE,
        iconClass: "icon-link",
        handler: (c, h) => {
          const f = c.path;
          Ft.update(() => "filename"), hr.update(
            () => Ir.getFileConfig({
              name: s,
              templateName: s,
              dir: f,
              isNew: !0,
              existingContents: h,
              onCreate: async (v) => {
                Ft.update(() => "edit"), hr.update(
                  () => Ir.getFileConfig({
                    name: v.name,
                    dir: v.dir,
                    isNew: !0,
                    onCreate: async (u) => {
                      await vn.saveAndChangeViewMode(u);
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
  static async loadAndChangeViewMode({ fileName: e, dirName: n, nextViewMode: i, publicUser: s, downloadUrl: c, permissions: h }) {
    Ft.update(() => i), hr.update(
      () => Ir.getFileConfig({
        name: e,
        dir: n || "",
        permissions: h
      })
    );
    let f = {};
    if (s ? f = await Ir.loadPublic({ downloadUrl: c }) : f = await Ir.load({ fileName: e, dir: n }), f) {
      const v = Ct.getExtension(e);
      let u = {};
      v === "webloc" ? u = Ct.parseWeblocFile(f.filecontents) : u = Ct.parseURLFile(f.filecontents), hr.update(
        (a) => Ir.getFileConfig({
          ...a,
          ...u,
          fileModifiedTime: f.mtime,
          isLoaded: !0
        })
      );
    } else
      window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async saveAndChangeViewMode({ name: e, dir: n, url: i, fileModifiedTime: s, sameWindow: c, skipConfirmation: h }) {
    const f = Ct.getExtension(e);
    let v = "";
    f === "webloc" ? v = Ct.generateWeblocFileContent("", i, c, h) : v = Ct.generateURLFileContent("", i, c, h), await Ir.save({ fileContent: v, name: e, dir: n, fileModifiedTime: s }), Ft.update(() => "none");
  }
}
const LS = [];
LS.push(
  new CS({
    target: document.body,
    props: {}
  })
);
Ar.registerFileActions();
vn.registerFileActions();
