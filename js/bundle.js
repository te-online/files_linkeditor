var ha = Object.defineProperty;
var Ki = (n) => {
  throw TypeError(n);
};
var pa = (n, e, r) => e in n ? ha(n, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[e] = r;
var pe = (n, e, r) => pa(n, typeof e != "symbol" ? e + "" : e, r), Mn = (n, e, r) => e.has(n) || Ki("Cannot " + r);
var X = (n, e, r) => (Mn(n, e, "read from private field"), r ? r.call(n) : e.get(n)), tt = (n, e, r) => e.has(n) ? Ki("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, r), Te = (n, e, r, i) => (Mn(n, e, "write to private field"), i ? i.call(n, r) : e.set(n, r), r), Kt = (n, e, r) => (Mn(n, e, "access private method"), r);
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
    return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
    i(o);
  new MutationObserver((o) => {
    for (const u of o)
      if (u.type === "childList")
        for (const p of u.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && i(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const u = {};
    return o.integrity && (u.integrity = o.integrity), o.referrerPolicy && (u.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? u.credentials = "include" : o.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin", u;
  }
  function i(o) {
    if (o.ep)
      return;
    o.ep = !0;
    const u = r(o);
    fetch(o.href, u);
  }
})();
function Dt() {
}
function da(n, e) {
  for (const r in e) n[r] = e[r];
  return (
    /** @type {T & S} */
    n
  );
}
function as(n) {
  return n();
}
function Ji() {
  return /* @__PURE__ */ Object.create(null);
}
function Vt(n) {
  n.forEach(as);
}
function mi(n) {
  return typeof n == "function";
}
function dr(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function ga(n) {
  return Object.keys(n).length === 0;
}
function ma(n, e, r, i) {
  if (n) {
    const o = us(n, e, r, i);
    return n[0](o);
  }
}
function us(n, e, r, i) {
  return n[1] && i ? da(r.ctx.slice(), n[1](i(e))) : r.ctx;
}
function ya(n, e, r, i) {
  if (n[2] && i) {
    const o = n[2](i(r));
    if (e.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const u = [], p = Math.max(e.dirty.length, o.length);
      for (let f = 0; f < p; f += 1)
        u[f] = e.dirty[f] | o[f];
      return u;
    }
    return e.dirty | o;
  }
  return e.dirty;
}
function wa(n, e, r, i, o, u) {
  if (o) {
    const p = us(e, r, i, u);
    n.p(p, o);
  }
}
function Ea(n) {
  if (n.ctx.length > 32) {
    const e = [], r = n.ctx.length / 32;
    for (let i = 0; i < r; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
const nn = globalThis || void 0 || self;
function ee(n, e) {
  n.appendChild(e);
}
function de(n, e, r) {
  n.insertBefore(e, r || null);
}
function he(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function se(n) {
  return document.createElement(n);
}
function Ue(n) {
  return document.createTextNode(n);
}
function be() {
  return Ue(" ");
}
function va() {
  return Ue("");
}
function rt(n, e, r, i) {
  return n.addEventListener(e, r, i), () => n.removeEventListener(e, r, i);
}
function Wt(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function q(n, e, r) {
  r == null ? n.removeAttribute(e) : n.getAttribute(e) !== r && n.setAttribute(e, r);
}
function ba(n) {
  return Array.from(n.childNodes);
}
function yi(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function yn(n, e) {
  n.value = e ?? "";
}
function wi(n, e, r, i) {
  r == null ? n.style.removeProperty(e) : n.style.setProperty(e, r, "");
}
let Zr;
function qr(n) {
  Zr = n;
}
function ls() {
  if (!Zr) throw new Error("Function called outside component initialization");
  return Zr;
}
function On(n) {
  ls().$$.on_mount.push(n);
}
function Rn(n) {
  ls().$$.on_destroy.push(n);
}
const Tr = [], Qi = [];
let xr = [];
const eo = [], Aa = /* @__PURE__ */ Promise.resolve();
let ni = !1;
function _a() {
  ni || (ni = !0, Aa.then(cs));
}
function ii(n) {
  xr.push(n);
}
const kn = /* @__PURE__ */ new Set();
let vr = 0;
function cs() {
  if (vr !== 0)
    return;
  const n = Zr;
  do {
    try {
      for (; vr < Tr.length; ) {
        const e = Tr[vr];
        vr++, qr(e), Ia(e.$$);
      }
    } catch (e) {
      throw Tr.length = 0, vr = 0, e;
    }
    for (qr(null), Tr.length = 0, vr = 0; Qi.length; ) Qi.pop()();
    for (let e = 0; e < xr.length; e += 1) {
      const r = xr[e];
      kn.has(r) || (kn.add(r), r());
    }
    xr.length = 0;
  } while (Tr.length);
  for (; eo.length; )
    eo.pop()();
  ni = !1, kn.clear(), qr(n);
}
function Ia(n) {
  if (n.fragment !== null) {
    n.update(), Vt(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(ii);
  }
}
function Ta(n) {
  const e = [], r = [];
  xr.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : r.push(i)), r.forEach((i) => i()), xr = e;
}
const hn = /* @__PURE__ */ new Set();
let lr;
function Un() {
  lr = {
    r: 0,
    c: [],
    p: lr
    // parent group
  };
}
function Bn() {
  lr.r || Vt(lr.c), lr = lr.p;
}
function Me(n, e) {
  n && n.i && (hn.delete(n), n.i(e));
}
function at(n, e, r, i) {
  if (n && n.o) {
    if (hn.has(n)) return;
    hn.add(n), lr.c.push(() => {
      hn.delete(n), i && (r && n.d(1), i());
    }), n.o(e);
  } else i && i();
}
function Pr(n) {
  n && n.c();
}
function gr(n, e, r) {
  const { fragment: i, after_update: o } = n.$$;
  i && i.m(e, r), ii(() => {
    const u = n.$$.on_mount.map(as).filter(mi);
    n.$$.on_destroy ? n.$$.on_destroy.push(...u) : Vt(u), n.$$.on_mount = [];
  }), o.forEach(ii);
}
function mr(n, e) {
  const r = n.$$;
  r.fragment !== null && (Ta(r.after_update), Vt(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Na(n, e) {
  n.$$.dirty[0] === -1 && (Tr.push(n), _a(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function $r(n, e, r, i, o, u, p = null, f = [-1]) {
  const h = Zr;
  qr(n);
  const a = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: Dt,
    not_equal: o,
    bound: Ji(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (h ? h.$$.context : [])),
    // everything else
    callbacks: Ji(),
    dirty: f,
    skip_bound: !1,
    root: e.target || h.$$.root
  };
  p && p(a.root);
  let s = !1;
  if (a.ctx = r ? r(n, e.props || {}, (g, d, ...w) => {
    const y = w.length ? w[0] : d;
    return a.ctx && o(a.ctx[g], a.ctx[g] = y) && (!a.skip_bound && a.bound[g] && a.bound[g](y), s && Na(n, g)), d;
  }) : [], a.update(), s = !0, Vt(a.before_update), a.fragment = i ? i(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const g = ba(e.target);
      a.fragment && a.fragment.l(g), g.forEach(he);
    } else
      a.fragment && a.fragment.c();
    e.intro && Me(n.$$.fragment), gr(n, e.target, e.anchor), cs();
  }
  qr(h);
}
class Fr {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    pe(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    pe(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    mr(this, 1), this.$destroy = Dt;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, r) {
    if (!mi(r))
      return Dt;
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
    this.$$set && !ga(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Oa = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Oa);
function Ra(n) {
  let e, r, i, o, u;
  const p = (
    /*#slots*/
    n[2].default
  ), f = ma(
    p,
    n,
    /*$$scope*/
    n[1],
    null
  );
  return {
    c() {
      e = se("div"), r = be(), i = se("div"), f && f.c(), q(e, "class", "oc-dialog-dim"), q(i, "class", o = `oc-dialog ${/*loading*/
      n[0] ? "icon-loading" : ""}`), wi(i, "position", "fixed");
    },
    m(h, a) {
      de(h, e, a), de(h, r, a), de(h, i, a), f && f.m(i, null), u = !0;
    },
    p(h, [a]) {
      f && f.p && (!u || a & /*$$scope*/
      2) && wa(
        f,
        p,
        h,
        /*$$scope*/
        h[1],
        u ? ya(
          p,
          /*$$scope*/
          h[1],
          a,
          null
        ) : Ea(
          /*$$scope*/
          h[1]
        ),
        null
      ), (!u || a & /*loading*/
      1 && o !== (o = `oc-dialog ${/*loading*/
      h[0] ? "icon-loading" : ""}`)) && q(i, "class", o);
    },
    i(h) {
      u || (Me(f, h), u = !0);
    },
    o(h) {
      at(f, h), u = !1;
    },
    d(h) {
      h && (he(e), he(r), he(i)), f && f.d(h);
    }
  };
}
function xa(n, e, r) {
  let { $$slots: i = {}, $$scope: o } = e, { loading: u = !1 } = e;
  return n.$$set = (p) => {
    "loading" in p && r(0, u = p.loading), "$$scope" in p && r(1, o = p.$$scope);
  }, [u, o, i];
}
class Ei extends Fr {
  constructor(e) {
    super(), $r(this, e, xa, Ra, dr, { loading: 0 });
  }
}
const br = [];
function fs(n, e = Dt) {
  let r;
  const i = /* @__PURE__ */ new Set();
  function o(f) {
    if (dr(n, f) && (n = f, r)) {
      const h = !br.length;
      for (const a of i)
        a[1](), br.push(a, n);
      if (h) {
        for (let a = 0; a < br.length; a += 2)
          br[a][0](br[a + 1]);
        br.length = 0;
      }
    }
  }
  function u(f) {
    o(f(n));
  }
  function p(f, h = Dt) {
    const a = [f, h];
    return i.add(a), i.size === 1 && (r = e(o, u) || Dt), f(n), () => {
      i.delete(a), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: o, update: u, subscribe: p };
}
function vi(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var bi = {}, Ge = {};
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.BLANK_URL = Ge.relativeFirstCharacters = Ge.urlSchemeRegex = Ge.ctrlCharactersRegex = Ge.htmlCtrlEntityRegex = Ge.htmlEntitiesRegex = Ge.invalidProtocolRegex = void 0;
Ge.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
Ge.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
Ge.htmlCtrlEntityRegex = /&(newline|tab);/gi;
Ge.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
Ge.urlSchemeRegex = /^.+(:|&colon;)/gim;
Ge.relativeFirstCharacters = [".", "/"];
Ge.BLANK_URL = "about:blank";
Object.defineProperty(bi, "__esModule", { value: !0 });
var He = bi.sanitizeUrl = void 0, ot = Ge;
function Sa(n) {
  return ot.relativeFirstCharacters.indexOf(n[0]) > -1;
}
function La(n) {
  var e = n.replace(ot.ctrlCharactersRegex, "");
  return e.replace(ot.htmlEntitiesRegex, function(r, i) {
    return String.fromCharCode(i);
  });
}
function Ca(n) {
  if (!n)
    return ot.BLANK_URL;
  var e, r = n;
  do
    r = La(r).replace(ot.htmlCtrlEntityRegex, "").replace(ot.ctrlCharactersRegex, "").trim(), e = r.match(ot.ctrlCharactersRegex) || r.match(ot.htmlEntitiesRegex) || r.match(ot.htmlCtrlEntityRegex);
  while (e && e.length > 0);
  var i = r;
  if (!i)
    return ot.BLANK_URL;
  if (Sa(i))
    return i;
  var o = i.match(ot.urlSchemeRegex);
  if (!o)
    return i;
  var u = o[0];
  return ot.invalidProtocolRegex.test(u) ? ot.BLANK_URL : i;
}
He = bi.sanitizeUrl = Ca;
class wt {
  static getFileConfig({
    name: e,
    url: r,
    downloadUrl: i,
    dir: o,
    onCreate: u,
    fileModifiedTime: p,
    isNew: f,
    isLoaded: h,
    sameWindow: a,
    skipConfirmation: s
  } = {}) {
    return {
      name: e || "?",
      downloadUrl: i || "",
      url: r ? He(r) : "",
      dir: o || "",
      onCreate: u,
      fileModifiedTime: p || null,
      isNew: f || !1,
      isLoaded: h || !1,
      sameWindow: a || !1,
      skipConfirmation: s || !1
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
  static async save({ fileContent: e, name: r, fileModifiedTime: i, dir: o } = {}) {
    let u = `${o}${r}`;
    o !== "/" && (u = `${o}/${r}`);
    const p = await window.fetch(window.OC.generateUrl("/apps/files_linkeditor/ajax/savefile"), {
      method: "PUT",
      body: JSON.stringify({
        filecontents: e,
        path: u,
        mtime: i
      }),
      headers: {
        requesttoken: window.OC.requestToken,
        "Content-Type": "application/json"
      }
    });
    if (p && p.ok)
      return !0;
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static userCanEdit() {
    var e, r, i, o;
    return window.FileList && window.OC && window.OC.currentUser && (window.OC.PERMISSION_ALL === ((r = (e = window.FileList) == null ? void 0 : e.getDirectoryPermissions) == null ? void 0 : r.call(e)) || window.OC.PERMISSION_UPDATE === ((o = (i = window.FileList) == null ? void 0 : i.getDirectoryPermissions) == null ? void 0 : o.call(i)));
  }
}
const ut = fs(""), Ft = fs(wt.getFileConfig());
function Pa(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var hs = { exports: {} }, Ne = hs.exports = {}, Lt, Ct;
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
    typeof clearTimeout == "function" ? Ct = clearTimeout : Ct = si;
  } catch {
    Ct = si;
  }
})();
function ps(n) {
  if (Lt === setTimeout)
    return setTimeout(n, 0);
  if ((Lt === oi || !Lt) && setTimeout)
    return Lt = setTimeout, setTimeout(n, 0);
  try {
    return Lt(n, 0);
  } catch {
    try {
      return Lt.call(null, n, 0);
    } catch {
      return Lt.call(this, n, 0);
    }
  }
}
function $a(n) {
  if (Ct === clearTimeout)
    return clearTimeout(n);
  if ((Ct === si || !Ct) && clearTimeout)
    return Ct = clearTimeout, clearTimeout(n);
  try {
    return Ct(n);
  } catch {
    try {
      return Ct.call(null, n);
    } catch {
      return Ct.call(this, n);
    }
  }
}
var Gt = [], Sr = !1, cr, pn = -1;
function Fa() {
  !Sr || !cr || (Sr = !1, cr.length ? Gt = cr.concat(Gt) : pn = -1, Gt.length && ds());
}
function ds() {
  if (!Sr) {
    var n = ps(Fa);
    Sr = !0;
    for (var e = Gt.length; e; ) {
      for (cr = Gt, Gt = []; ++pn < e; )
        cr && cr[pn].run();
      pn = -1, e = Gt.length;
    }
    cr = null, Sr = !1, $a(n);
  }
}
Ne.nextTick = function(n) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      e[r - 1] = arguments[r];
  Gt.push(new gs(n, e)), Gt.length === 1 && !Sr && ps(ds);
};
function gs(n, e) {
  this.fun = n, this.array = e;
}
gs.prototype.run = function() {
  this.fun.apply(null, this.array);
};
Ne.title = "browser";
Ne.browser = !0;
Ne.env = {};
Ne.argv = [];
Ne.version = "";
Ne.versions = {};
function Xt() {
}
Ne.on = Xt;
Ne.addListener = Xt;
Ne.once = Xt;
Ne.off = Xt;
Ne.removeListener = Xt;
Ne.removeAllListeners = Xt;
Ne.emit = Xt;
Ne.prependListener = Xt;
Ne.prependOnceListener = Xt;
Ne.listeners = function(n) {
  return [];
};
Ne.binding = function(n) {
  throw new Error("process.binding is not supported");
};
Ne.cwd = function() {
  return "/";
};
Ne.chdir = function(n) {
  throw new Error("process.chdir is not supported");
};
Ne.umask = function() {
  return 0;
};
var Da = hs.exports;
const We = /* @__PURE__ */ Pa(Da), Ma = typeof We == "object" && We.env && We.env.NODE_DEBUG && /\bsemver\b/i.test(We.env.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
};
var ms = Ma;
const ka = "2.0.0", ys = 256, Ua = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, Ba = 16, ja = ys - 6, Ga = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var ws = {
  MAX_LENGTH: ys,
  MAX_SAFE_COMPONENT_LENGTH: Ba,
  MAX_SAFE_BUILD_LENGTH: ja,
  MAX_SAFE_INTEGER: Ua,
  RELEASE_TYPES: Ga,
  SEMVER_SPEC_VERSION: ka,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
}, ai = { exports: {} };
(function(n, e) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: r,
    MAX_SAFE_BUILD_LENGTH: i,
    MAX_LENGTH: o
  } = ws, u = ms;
  e = n.exports = {};
  const p = e.re = [], f = e.safeRe = [], h = e.src = [], a = e.t = {};
  let s = 0;
  const g = "[a-zA-Z0-9-]", d = [
    ["\\s", 1],
    ["\\d", o],
    [g, i]
  ], w = (b) => {
    for (const [I, R] of d)
      b = b.split(`${I}*`).join(`${I}{0,${R}}`).split(`${I}+`).join(`${I}{1,${R}}`);
    return b;
  }, y = (b, I, R) => {
    const A = w(I), T = s++;
    u(b, T, I), a[b] = T, h[T] = I, p[T] = new RegExp(I, R ? "g" : void 0), f[T] = new RegExp(A, R ? "g" : void 0);
  };
  y("NUMERICIDENTIFIER", "0|[1-9]\\d*"), y("NUMERICIDENTIFIERLOOSE", "\\d+"), y("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${g}*`), y("MAINVERSION", `(${h[a.NUMERICIDENTIFIER]})\\.(${h[a.NUMERICIDENTIFIER]})\\.(${h[a.NUMERICIDENTIFIER]})`), y("MAINVERSIONLOOSE", `(${h[a.NUMERICIDENTIFIERLOOSE]})\\.(${h[a.NUMERICIDENTIFIERLOOSE]})\\.(${h[a.NUMERICIDENTIFIERLOOSE]})`), y("PRERELEASEIDENTIFIER", `(?:${h[a.NUMERICIDENTIFIER]}|${h[a.NONNUMERICIDENTIFIER]})`), y("PRERELEASEIDENTIFIERLOOSE", `(?:${h[a.NUMERICIDENTIFIERLOOSE]}|${h[a.NONNUMERICIDENTIFIER]})`), y("PRERELEASE", `(?:-(${h[a.PRERELEASEIDENTIFIER]}(?:\\.${h[a.PRERELEASEIDENTIFIER]})*))`), y("PRERELEASELOOSE", `(?:-?(${h[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${h[a.PRERELEASEIDENTIFIERLOOSE]})*))`), y("BUILDIDENTIFIER", `${g}+`), y("BUILD", `(?:\\+(${h[a.BUILDIDENTIFIER]}(?:\\.${h[a.BUILDIDENTIFIER]})*))`), y("FULLPLAIN", `v?${h[a.MAINVERSION]}${h[a.PRERELEASE]}?${h[a.BUILD]}?`), y("FULL", `^${h[a.FULLPLAIN]}$`), y("LOOSEPLAIN", `[v=\\s]*${h[a.MAINVERSIONLOOSE]}${h[a.PRERELEASELOOSE]}?${h[a.BUILD]}?`), y("LOOSE", `^${h[a.LOOSEPLAIN]}$`), y("GTLT", "((?:<|>)?=?)"), y("XRANGEIDENTIFIERLOOSE", `${h[a.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), y("XRANGEIDENTIFIER", `${h[a.NUMERICIDENTIFIER]}|x|X|\\*`), y("XRANGEPLAIN", `[v=\\s]*(${h[a.XRANGEIDENTIFIER]})(?:\\.(${h[a.XRANGEIDENTIFIER]})(?:\\.(${h[a.XRANGEIDENTIFIER]})(?:${h[a.PRERELEASE]})?${h[a.BUILD]}?)?)?`), y("XRANGEPLAINLOOSE", `[v=\\s]*(${h[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${h[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${h[a.XRANGEIDENTIFIERLOOSE]})(?:${h[a.PRERELEASELOOSE]})?${h[a.BUILD]}?)?)?`), y("XRANGE", `^${h[a.GTLT]}\\s*${h[a.XRANGEPLAIN]}$`), y("XRANGELOOSE", `^${h[a.GTLT]}\\s*${h[a.XRANGEPLAINLOOSE]}$`), y("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), y("COERCE", `${h[a.COERCEPLAIN]}(?:$|[^\\d])`), y("COERCEFULL", h[a.COERCEPLAIN] + `(?:${h[a.PRERELEASE]})?(?:${h[a.BUILD]})?(?:$|[^\\d])`), y("COERCERTL", h[a.COERCE], !0), y("COERCERTLFULL", h[a.COERCEFULL], !0), y("LONETILDE", "(?:~>?)"), y("TILDETRIM", `(\\s*)${h[a.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", y("TILDE", `^${h[a.LONETILDE]}${h[a.XRANGEPLAIN]}$`), y("TILDELOOSE", `^${h[a.LONETILDE]}${h[a.XRANGEPLAINLOOSE]}$`), y("LONECARET", "(?:\\^)"), y("CARETTRIM", `(\\s*)${h[a.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", y("CARET", `^${h[a.LONECARET]}${h[a.XRANGEPLAIN]}$`), y("CARETLOOSE", `^${h[a.LONECARET]}${h[a.XRANGEPLAINLOOSE]}$`), y("COMPARATORLOOSE", `^${h[a.GTLT]}\\s*(${h[a.LOOSEPLAIN]})$|^$`), y("COMPARATOR", `^${h[a.GTLT]}\\s*(${h[a.FULLPLAIN]})$|^$`), y("COMPARATORTRIM", `(\\s*)${h[a.GTLT]}\\s*(${h[a.LOOSEPLAIN]}|${h[a.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", y("HYPHENRANGE", `^\\s*(${h[a.XRANGEPLAIN]})\\s+-\\s+(${h[a.XRANGEPLAIN]})\\s*$`), y("HYPHENRANGELOOSE", `^\\s*(${h[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${h[a.XRANGEPLAINLOOSE]})\\s*$`), y("STAR", "(<|>)?=?\\s*\\*"), y("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), y("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(ai, ai.exports);
var Wa = ai.exports;
const za = Object.freeze({ loose: !0 }), Va = Object.freeze({}), Xa = (n) => n ? typeof n != "object" ? za : n : Va;
var qa = Xa;
const to = /^[0-9]+$/, Es = (n, e) => {
  const r = to.test(n), i = to.test(e);
  return r && i && (n = +n, e = +e), n === e ? 0 : r && !i ? -1 : i && !r ? 1 : n < e ? -1 : 1;
}, Ha = (n, e) => Es(e, n);
var Ya = {
  compareIdentifiers: Es,
  rcompareIdentifiers: Ha
};
const on = ms, { MAX_LENGTH: ro, MAX_SAFE_INTEGER: sn } = ws, { safeRe: no, t: io } = Wa, Za = qa, { compareIdentifiers: Ar } = Ya;
let Ka = class St {
  constructor(e, r) {
    if (r = Za(r), e instanceof St) {
      if (e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
    if (e.length > ro)
      throw new TypeError(
        `version is longer than ${ro} characters`
      );
    on("SemVer", e, r), this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease;
    const i = e.trim().match(r.loose ? no[io.LOOSE] : no[io.FULL]);
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
        const u = +o;
        if (u >= 0 && u < sn)
          return u;
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
    if (on("SemVer.compare", this.version, this.options, e), !(e instanceof St)) {
      if (typeof e == "string" && e === this.version)
        return 0;
      e = new St(e, this.options);
    }
    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
  }
  compareMain(e) {
    return e instanceof St || (e = new St(e, this.options)), Ar(this.major, e.major) || Ar(this.minor, e.minor) || Ar(this.patch, e.patch);
  }
  comparePre(e) {
    if (e instanceof St || (e = new St(e, this.options)), this.prerelease.length && !e.prerelease.length)
      return -1;
    if (!this.prerelease.length && e.prerelease.length)
      return 1;
    if (!this.prerelease.length && !e.prerelease.length)
      return 0;
    let r = 0;
    do {
      const i = this.prerelease[r], o = e.prerelease[r];
      if (on("prerelease compare", r, i, o), i === void 0 && o === void 0)
        return 0;
      if (o === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === o)
        continue;
      return Ar(i, o);
    } while (++r);
  }
  compareBuild(e) {
    e instanceof St || (e = new St(e, this.options));
    let r = 0;
    do {
      const i = this.build[r], o = e.build[r];
      if (on("build compare", r, i, o), i === void 0 && o === void 0)
        return 0;
      if (o === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === o)
        continue;
      return Ar(i, o);
    } while (++r);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(e, r, i) {
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
        if (!r && i === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (this.prerelease.length === 0)
          this.prerelease = [o];
        else {
          let u = this.prerelease.length;
          for (; --u >= 0; )
            typeof this.prerelease[u] == "number" && (this.prerelease[u]++, u = -2);
          if (u === -1) {
            if (r === this.prerelease.join(".") && i === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(o);
          }
        }
        if (r) {
          let u = [r, o];
          i === !1 && (u = [r]), Ar(this.prerelease[0], r) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = u) : this.prerelease = u;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${e}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var vs = Ka;
const oo = vs, Ja = (n, e, r = !1) => {
  if (n instanceof oo)
    return n;
  try {
    return new oo(n, e);
  } catch (i) {
    if (!r)
      return null;
    throw i;
  }
};
var Qa = Ja;
const eu = Qa, tu = (n, e) => {
  const r = eu(n, e);
  return r ? r.version : null;
};
var ru = tu;
const nu = /* @__PURE__ */ vi(ru), iu = vs, ou = (n, e) => new iu(n, e).major;
var su = ou;
const so = /* @__PURE__ */ vi(su);
class au {
  constructor(e) {
    pe(this, "bus");
    typeof e.getVersion != "function" || !nu(e.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : so(e.getVersion()) !== so(this.getVersion()) && console.warn(
      "Proxying an event bus of version " + e.getVersion() + " with " + this.getVersion()
    ), this.bus = e;
  }
  getVersion() {
    return "3.3.1";
  }
  subscribe(e, r) {
    this.bus.subscribe(e, r);
  }
  unsubscribe(e, r) {
    this.bus.unsubscribe(e, r);
  }
  emit(e, r) {
    this.bus.emit(e, r);
  }
}
class uu {
  constructor() {
    pe(this, "handlers", /* @__PURE__ */ new Map());
  }
  getVersion() {
    return "3.3.1";
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
  emit(e, r) {
    (this.handlers.get(e) || []).forEach((i) => {
      try {
        i(r);
      } catch (o) {
        console.error("could not invoke event listener", o);
      }
    });
  }
}
let Mr = null;
function bs() {
  var n;
  return Mr !== null ? Mr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : ((n = window.OC) != null && n._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof (window == null ? void 0 : window._nc_event_bus) < "u" ? Mr = new au(window._nc_event_bus) : Mr = window._nc_event_bus = new uu(), Mr);
}
function lu(n, e) {
  bs().subscribe(n, e);
}
function cu(n, e) {
  bs().emit(n, e);
}
var xn = {}, Sn = {}, en = {};
Object.defineProperty(en, "__esModule", {
  value: !0
});
en.default = void 0;
function wn(n, e, r) {
  return e = fu(e), e in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = r, n;
}
function fu(n) {
  var e = hu(n, "string");
  return typeof e == "symbol" ? e : e + "";
}
function hu(n, e) {
  if (typeof n != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(n, e || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
class Cr {
  constructor(e, r, i) {
    wn(this, "scope", void 0), wn(this, "wrapped", void 0), this.scope = "".concat(i ? Cr.GLOBAL_SCOPE_PERSISTENT : Cr.GLOBAL_SCOPE_VOLATILE, "_").concat(btoa(e), "_"), this.wrapped = r;
  }
  scopeKey(e) {
    return "".concat(this.scope).concat(e);
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
}
en.default = Cr;
wn(Cr, "GLOBAL_SCOPE_VOLATILE", "nextcloud_vol");
wn(Cr, "GLOBAL_SCOPE_PERSISTENT", "nextcloud_per");
Object.defineProperty(Sn, "__esModule", {
  value: !0
});
Sn.default = void 0;
var pu = du(en);
function du(n) {
  return n && n.__esModule ? n : { default: n };
}
function jn(n, e, r) {
  return e = gu(e), e in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = r, n;
}
function gu(n) {
  var e = mu(n, "string");
  return typeof e == "symbol" ? e : e + "";
}
function mu(n, e) {
  if (typeof n != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(n, e || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
class yu {
  constructor(e) {
    jn(this, "appId", void 0), jn(this, "persisted", !1), jn(this, "clearedOnLogout", !1), this.appId = e;
  }
  persist() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    return this.persisted = e, this;
  }
  clearOnLogout() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    return this.clearedOnLogout = e, this;
  }
  build() {
    return new pu.default(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
Sn.default = yu;
Object.defineProperty(xn, "__esModule", {
  value: !0
});
xn.clearAll = Au;
xn.clearNonPersistent = _u;
var wu = xn.getBuilder = bu, Eu = As(Sn), vu = As(en);
function As(n) {
  return n && n.__esModule ? n : { default: n };
}
function bu(n) {
  return new Eu.default(n);
}
function _s(n, e) {
  Object.keys(n).filter((r) => e ? e(r) : !0).map(n.removeItem.bind(n));
}
function Au() {
  [window.sessionStorage, window.localStorage].map((e) => _s(e));
}
function _u() {
  [window.sessionStorage, window.localStorage].map((e) => _s(e, (r) => !r.startsWith(vu.default.GLOBAL_SCOPE_PERSISTENT)));
}
let Hr;
const Is = [];
function Iu() {
  return Hr === void 0 && (Hr = document.head.dataset.requesttoken ?? null), Hr;
}
function Tu(n) {
  Is.push(n);
}
lu("csrf-token-update", (n) => {
  Hr = n.token, Is.forEach((e) => {
    try {
      e(Hr);
    } catch (r) {
      console.error("Error updating CSRF token observer", r);
    }
  });
});
wu("public").persist().build();
let _r;
const ao = (n, e) => n ? n.getAttribute(e) : null;
function Ai() {
  if (_r !== void 0)
    return _r;
  const n = document == null ? void 0 : document.getElementsByTagName("head")[0];
  if (!n)
    return null;
  const e = ao(n, "data-user");
  return e === null ? (_r = null, _r) : (_r = {
    uid: e,
    displayName: ao(n, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, _r);
}
var Oe = /* @__PURE__ */ ((n) => (n[n.Debug = 0] = "Debug", n[n.Info = 1] = "Info", n[n.Warn = 2] = "Warn", n[n.Error = 3] = "Error", n[n.Fatal = 4] = "Fatal", n))(Oe || {}), Nu = Object.defineProperty, Ou = (n, e, r) => e in n ? Nu(n, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[e] = r, Ru = (n, e, r) => (Ou(n, e + "", r), r);
class xu {
  constructor(e) {
    Ru(this, "context"), this.context = e || {};
  }
  formatMessage(e, r, i) {
    let o = "[" + Oe[r].toUpperCase() + "] ";
    return i && i.app && (o += i.app + ": "), typeof e == "string" ? o + e : (o += "Unexpected ".concat(e.name), e.message && (o += ' "'.concat(e.message, '"')), r === Oe.Debug && e.stack && (o += `

Stack trace:
`.concat(e.stack)), o);
  }
  log(e, r, i) {
    var o, u;
    if (!(typeof ((o = this.context) == null ? void 0 : o.level) == "number" && e < ((u = this.context) == null ? void 0 : u.level)))
      switch (typeof r == "object" && (i == null ? void 0 : i.error) === void 0 && (i.error = r), e) {
        case Oe.Debug:
          console.debug(this.formatMessage(r, Oe.Debug, i), i);
          break;
        case Oe.Info:
          console.info(this.formatMessage(r, Oe.Info, i), i);
          break;
        case Oe.Warn:
          console.warn(this.formatMessage(r, Oe.Warn, i), i);
          break;
        case Oe.Error:
          console.error(this.formatMessage(r, Oe.Error, i), i);
          break;
        case Oe.Fatal:
        default:
          console.error(this.formatMessage(r, Oe.Fatal, i), i);
          break;
      }
  }
  debug(e, r) {
    this.log(Oe.Debug, e, Object.assign({}, this.context, r));
  }
  info(e, r) {
    this.log(Oe.Info, e, Object.assign({}, this.context, r));
  }
  warn(e, r) {
    this.log(Oe.Warn, e, Object.assign({}, this.context, r));
  }
  error(e, r) {
    this.log(Oe.Error, e, Object.assign({}, this.context, r));
  }
  fatal(e, r) {
    this.log(Oe.Fatal, e, Object.assign({}, this.context, r));
  }
}
function Su(n) {
  return new xu(n);
}
var Lu = Object.defineProperty, Cu = (n, e, r) => e in n ? Lu(n, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[e] = r, uo = (n, e, r) => (Cu(n, typeof e != "symbol" ? e + "" : e, r), r);
class Pu {
  constructor(e) {
    uo(this, "context"), uo(this, "factory"), this.context = {}, this.factory = e;
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
    const e = Ai();
    return e !== null && (this.context.uid = e.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const e = this, r = () => {
      var i, o;
      document.readyState === "complete" || document.readyState === "interactive" ? (e.context.level = (o = (i = window._oc_config) == null ? void 0 : i.loglevel) != null ? o : Oe.Warn, window._oc_debug && (e.context.level = Oe.Debug), document.removeEventListener("readystatechange", r)) : document.addEventListener("readystatechange", r);
    };
    return r(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function $u() {
  return new Pu(Su);
}
function Rt(n) {
  if (typeof n != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(n));
}
function lo(n, e) {
  for (var r = "", i = 0, o = -1, u = 0, p, f = 0; f <= n.length; ++f) {
    if (f < n.length)
      p = n.charCodeAt(f);
    else {
      if (p === 47)
        break;
      p = 47;
    }
    if (p === 47) {
      if (!(o === f - 1 || u === 1)) if (o !== f - 1 && u === 2) {
        if (r.length < 2 || i !== 2 || r.charCodeAt(r.length - 1) !== 46 || r.charCodeAt(r.length - 2) !== 46) {
          if (r.length > 2) {
            var h = r.lastIndexOf("/");
            if (h !== r.length - 1) {
              h === -1 ? (r = "", i = 0) : (r = r.slice(0, h), i = r.length - 1 - r.lastIndexOf("/")), o = f, u = 0;
              continue;
            }
          } else if (r.length === 2 || r.length === 1) {
            r = "", i = 0, o = f, u = 0;
            continue;
          }
        }
        e && (r.length > 0 ? r += "/.." : r = "..", i = 2);
      } else
        r.length > 0 ? r += "/" + n.slice(o + 1, f) : r = n.slice(o + 1, f), i = f - o - 1;
      o = f, u = 0;
    } else p === 46 && u !== -1 ? ++u : u = -1;
  }
  return r;
}
function Fu(n, e) {
  var r = e.dir || e.root, i = e.base || (e.name || "") + (e.ext || "");
  return r ? r === e.root ? r + i : r + n + i : i;
}
var Lr = {
  // path.resolve([from ...], to)
  resolve: function() {
    for (var e = "", r = !1, i, o = arguments.length - 1; o >= -1 && !r; o--) {
      var u;
      o >= 0 ? u = arguments[o] : (i === void 0 && (i = We.cwd()), u = i), Rt(u), u.length !== 0 && (e = u + "/" + e, r = u.charCodeAt(0) === 47);
    }
    return e = lo(e, !r), r ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
  },
  normalize: function(e) {
    if (Rt(e), e.length === 0) return ".";
    var r = e.charCodeAt(0) === 47, i = e.charCodeAt(e.length - 1) === 47;
    return e = lo(e, !r), e.length === 0 && !r && (e = "."), e.length > 0 && i && (e += "/"), r ? "/" + e : e;
  },
  isAbsolute: function(e) {
    return Rt(e), e.length > 0 && e.charCodeAt(0) === 47;
  },
  join: function() {
    if (arguments.length === 0)
      return ".";
    for (var e, r = 0; r < arguments.length; ++r) {
      var i = arguments[r];
      Rt(i), i.length > 0 && (e === void 0 ? e = i : e += "/" + i);
    }
    return e === void 0 ? "." : Lr.normalize(e);
  },
  relative: function(e, r) {
    if (Rt(e), Rt(r), e === r || (e = Lr.resolve(e), r = Lr.resolve(r), e === r)) return "";
    for (var i = 1; i < e.length && e.charCodeAt(i) === 47; ++i)
      ;
    for (var o = e.length, u = o - i, p = 1; p < r.length && r.charCodeAt(p) === 47; ++p)
      ;
    for (var f = r.length, h = f - p, a = u < h ? u : h, s = -1, g = 0; g <= a; ++g) {
      if (g === a) {
        if (h > a) {
          if (r.charCodeAt(p + g) === 47)
            return r.slice(p + g + 1);
          if (g === 0)
            return r.slice(p + g);
        } else u > a && (e.charCodeAt(i + g) === 47 ? s = g : g === 0 && (s = 0));
        break;
      }
      var d = e.charCodeAt(i + g), w = r.charCodeAt(p + g);
      if (d !== w)
        break;
      d === 47 && (s = g);
    }
    var y = "";
    for (g = i + s + 1; g <= o; ++g)
      (g === o || e.charCodeAt(g) === 47) && (y.length === 0 ? y += ".." : y += "/..");
    return y.length > 0 ? y + r.slice(p + s) : (p += s, r.charCodeAt(p) === 47 && ++p, r.slice(p));
  },
  _makeLong: function(e) {
    return e;
  },
  dirname: function(e) {
    if (Rt(e), e.length === 0) return ".";
    for (var r = e.charCodeAt(0), i = r === 47, o = -1, u = !0, p = e.length - 1; p >= 1; --p)
      if (r = e.charCodeAt(p), r === 47) {
        if (!u) {
          o = p;
          break;
        }
      } else
        u = !1;
    return o === -1 ? i ? "/" : "." : i && o === 1 ? "//" : e.slice(0, o);
  },
  basename: function(e, r) {
    if (r !== void 0 && typeof r != "string") throw new TypeError('"ext" argument must be a string');
    Rt(e);
    var i = 0, o = -1, u = !0, p;
    if (r !== void 0 && r.length > 0 && r.length <= e.length) {
      if (r.length === e.length && r === e) return "";
      var f = r.length - 1, h = -1;
      for (p = e.length - 1; p >= 0; --p) {
        var a = e.charCodeAt(p);
        if (a === 47) {
          if (!u) {
            i = p + 1;
            break;
          }
        } else
          h === -1 && (u = !1, h = p + 1), f >= 0 && (a === r.charCodeAt(f) ? --f === -1 && (o = p) : (f = -1, o = h));
      }
      return i === o ? o = h : o === -1 && (o = e.length), e.slice(i, o);
    } else {
      for (p = e.length - 1; p >= 0; --p)
        if (e.charCodeAt(p) === 47) {
          if (!u) {
            i = p + 1;
            break;
          }
        } else o === -1 && (u = !1, o = p + 1);
      return o === -1 ? "" : e.slice(i, o);
    }
  },
  extname: function(e) {
    Rt(e);
    for (var r = -1, i = 0, o = -1, u = !0, p = 0, f = e.length - 1; f >= 0; --f) {
      var h = e.charCodeAt(f);
      if (h === 47) {
        if (!u) {
          i = f + 1;
          break;
        }
        continue;
      }
      o === -1 && (u = !1, o = f + 1), h === 46 ? r === -1 ? r = f : p !== 1 && (p = 1) : r !== -1 && (p = -1);
    }
    return r === -1 || o === -1 || // We saw a non-dot character immediately before the dot
    p === 0 || // The (right-most) trimmed path component is exactly '..'
    p === 1 && r === o - 1 && r === i + 1 ? "" : e.slice(r, o);
  },
  format: function(e) {
    if (e === null || typeof e != "object")
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
    return Fu("/", e);
  },
  parse: function(e) {
    Rt(e);
    var r = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0) return r;
    var i = e.charCodeAt(0), o = i === 47, u;
    o ? (r.root = "/", u = 1) : u = 0;
    for (var p = -1, f = 0, h = -1, a = !0, s = e.length - 1, g = 0; s >= u; --s) {
      if (i = e.charCodeAt(s), i === 47) {
        if (!a) {
          f = s + 1;
          break;
        }
        continue;
      }
      h === -1 && (a = !1, h = s + 1), i === 46 ? p === -1 ? p = s : g !== 1 && (g = 1) : p !== -1 && (g = -1);
    }
    return p === -1 || h === -1 || // We saw a non-dot character immediately before the dot
    g === 0 || // The (right-most) trimmed path component is exactly '..'
    g === 1 && p === h - 1 && p === f + 1 ? h !== -1 && (f === 0 && o ? r.base = r.name = e.slice(1, h) : r.base = r.name = e.slice(f, h)) : (f === 0 && o ? (r.name = e.slice(1, p), r.base = e.slice(1, h)) : (r.name = e.slice(f, p), r.base = e.slice(f, h)), r.ext = e.slice(p, h)), f > 0 ? r.dir = e.slice(0, f - 1) : o && (r.dir = "/"), r;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
Lr.posix = Lr;
var ar = Lr;
function Du(n) {
  return n && n.split("/").map(encodeURIComponent).join("/");
}
const Mu = (n) => "/remote.php/" + n, ku = (n, e) => {
  var r;
  return ((r = void 0) != null ? r : Uu()) + Mu(n);
}, Uu = () => window.location.protocol + "//" + window.location.host + Bu();
function Bu() {
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
function ir(n, e, r) {
  return e in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = r, n;
}
function co(n, e, r) {
  ju(n, e), e.set(n, r);
}
function ju(n, e) {
  if (e.has(n))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function De(n, e) {
  var r = Ts(n, e, "get");
  return Gu(n, r);
}
function Gu(n, e) {
  return e.get ? e.get.call(n) : e.value;
}
function fo(n, e, r) {
  var i = Ts(n, e, "set");
  return Wu(n, i, r), r;
}
function Ts(n, e, r) {
  if (!e.has(n))
    throw new TypeError("attempted to " + r + " private field on non-instance");
  return e.get(n);
}
function Wu(n, e, r) {
  if (e.set)
    e.set.call(n, r);
  else {
    if (!e.writable)
      throw new TypeError("attempted to set read only private field");
    e.value = r;
  }
}
var zu = typeof Symbol < "u" ? Symbol.toStringTag : "@@toStringTag", je = /* @__PURE__ */ new WeakMap(), kr = /* @__PURE__ */ new WeakMap();
class Ln {
  constructor(e) {
    var {
      executor: r = () => {
      },
      internals: i = Ii(),
      promise: o = new Promise((u, p) => r(u, p, (f) => {
        i.onCancelList.push(f);
      }))
    } = e;
    co(this, je, {
      writable: !0,
      value: void 0
    }), co(this, kr, {
      writable: !0,
      value: void 0
    }), ir(this, zu, "CancelablePromise"), this.cancel = this.cancel.bind(this), fo(this, je, i), fo(this, kr, o || new Promise((u, p) => r(u, p, (f) => {
      i.onCancelList.push(f);
    })));
  }
  then(e, r) {
    return dn(De(this, kr).then(an(e, De(this, je)), an(r, De(this, je))), De(this, je));
  }
  catch(e) {
    return dn(De(this, kr).catch(an(e, De(this, je))), De(this, je));
  }
  finally(e, r) {
    return r && De(this, je).onCancelList.push(e), dn(De(this, kr).finally(an(() => {
      if (e)
        return r && (De(this, je).onCancelList = De(this, je).onCancelList.filter((i) => i !== e)), e();
    }, De(this, je))), De(this, je));
  }
  cancel() {
    De(this, je).isCanceled = !0;
    var e = De(this, je).onCancelList;
    De(this, je).onCancelList = [];
    for (var r of e)
      if (typeof r == "function")
        try {
          r();
        } catch (i) {
          console.error(i);
        }
  }
  isCanceled() {
    return De(this, je).isCanceled === !0;
  }
}
class or extends Ln {
  constructor(e) {
    super({
      executor: e
    });
  }
}
ir(or, "all", function(e) {
  return Cn(e, Promise.all(e));
});
ir(or, "allSettled", function(e) {
  return Cn(e, Promise.allSettled(e));
});
ir(or, "any", function(e) {
  return Cn(e, Promise.any(e));
});
ir(or, "race", function(e) {
  return Cn(e, Promise.race(e));
});
ir(or, "resolve", function(e) {
  return Ns(Promise.resolve(e));
});
ir(or, "reject", function(e) {
  return Ns(Promise.reject(e));
});
ir(or, "isCancelable", _i);
function Ns(n) {
  return dn(n, Ii());
}
function _i(n) {
  return n instanceof or || n instanceof Ln;
}
function an(n, e) {
  if (n)
    return (r) => {
      if (!e.isCanceled) {
        var i = n(r);
        return _i(i) && e.onCancelList.push(i.cancel), i;
      }
      return r;
    };
}
function dn(n, e) {
  return new Ln({
    internals: e,
    promise: n
  });
}
function Cn(n, e) {
  var r = Ii();
  return r.onCancelList.push(() => {
    for (var i of n)
      _i(i) && i.cancel();
  }), new Ln({
    internals: r,
    promise: e
  });
}
function Ii() {
  return {
    isCanceled: !1,
    onCancelList: []
  };
}
/*! For license information please see index.js.LICENSE.txt */
var Vu = { 2: (n) => {
  function e(o, u, p) {
    o instanceof RegExp && (o = r(o, p)), u instanceof RegExp && (u = r(u, p));
    var f = i(o, u, p);
    return f && { start: f[0], end: f[1], pre: p.slice(0, f[0]), body: p.slice(f[0] + o.length, f[1]), post: p.slice(f[1] + u.length) };
  }
  function r(o, u) {
    var p = u.match(o);
    return p ? p[0] : null;
  }
  function i(o, u, p) {
    var f, h, a, s, g, d = p.indexOf(o), w = p.indexOf(u, d + 1), y = d;
    if (d >= 0 && w > 0) {
      for (f = [], a = p.length; y >= 0 && !g; ) y == d ? (f.push(y), d = p.indexOf(o, y + 1)) : f.length == 1 ? g = [f.pop(), w] : ((h = f.pop()) < a && (a = h, s = w), w = p.indexOf(u, y + 1)), y = d < w && d >= 0 ? d : w;
      f.length && (g = [a, s]);
    }
    return g;
  }
  n.exports = e, e.range = i;
}, 101: function(n, e, r) {
  var i;
  n = r.nmd(n), function(o) {
    var u = (n && n.exports, typeof nn == "object" && nn);
    u.global !== u && u.window;
    var p = function(g) {
      this.message = g;
    };
    (p.prototype = new Error()).name = "InvalidCharacterError";
    var f = function(g) {
      throw new p(g);
    }, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = /[\t\n\f\r ]/g, s = { encode: function(g) {
      g = String(g), /[^\0-\xFF]/.test(g) && f("The string to be encoded contains characters outside of the Latin1 range.");
      for (var d, w, y, b, I = g.length % 3, R = "", A = -1, T = g.length - I; ++A < T; ) d = g.charCodeAt(A) << 16, w = g.charCodeAt(++A) << 8, y = g.charCodeAt(++A), R += h.charAt((b = d + w + y) >> 18 & 63) + h.charAt(b >> 12 & 63) + h.charAt(b >> 6 & 63) + h.charAt(63 & b);
      return I == 2 ? (d = g.charCodeAt(A) << 8, w = g.charCodeAt(++A), R += h.charAt((b = d + w) >> 10) + h.charAt(b >> 4 & 63) + h.charAt(b << 2 & 63) + "=") : I == 1 && (b = g.charCodeAt(A), R += h.charAt(b >> 2) + h.charAt(b << 4 & 63) + "=="), R;
    }, decode: function(g) {
      var d = (g = String(g).replace(a, "")).length;
      d % 4 == 0 && (d = (g = g.replace(/==?$/, "")).length), (d % 4 == 1 || /[^+a-zA-Z0-9/]/.test(g)) && f("Invalid character: the string to be decoded is not correctly encoded.");
      for (var w, y, b = 0, I = "", R = -1; ++R < d; ) y = h.indexOf(g.charAt(R)), w = b % 4 ? 64 * w + y : y, b++ % 4 && (I += String.fromCharCode(255 & w >> (-2 * b & 6)));
      return I;
    }, version: "1.0.0" };
    (i = (function() {
      return s;
    }).call(e, r, e, n)) === void 0 || (n.exports = i);
  }();
}, 172: (n, e) => {
  e.d = function(r) {
    if (!r) return 0;
    for (var i = (r = r.toString()).length, o = r.length; o--; ) {
      var u = r.charCodeAt(o);
      56320 <= u && u <= 57343 && o--, 127 < u && u <= 2047 ? i++ : 2047 < u && u <= 65535 && (i += 2);
    }
    return i;
  };
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
    for (var o = [], u = 0, p = 0; u < i.length; u++, p += 8) o[p >>> 5] |= i[u] << 24 - p % 32;
    return o;
  }, wordsToBytes: function(i) {
    for (var o = [], u = 0; u < 32 * i.length; u += 8) o.push(i[u >>> 5] >>> 24 - u % 32 & 255);
    return o;
  }, bytesToHex: function(i) {
    for (var o = [], u = 0; u < i.length; u++) o.push((i[u] >>> 4).toString(16)), o.push((15 & i[u]).toString(16));
    return o.join("");
  }, hexToBytes: function(i) {
    for (var o = [], u = 0; u < i.length; u += 2) o.push(parseInt(i.substr(u, 2), 16));
    return o;
  }, bytesToBase64: function(i) {
    for (var o = [], u = 0; u < i.length; u += 3) for (var p = i[u] << 16 | i[u + 1] << 8 | i[u + 2], f = 0; f < 4; f++) 8 * u + 6 * f <= 8 * i.length ? o.push(e.charAt(p >>> 6 * (3 - f) & 63)) : o.push("=");
    return o.join("");
  }, base64ToBytes: function(i) {
    i = i.replace(/[^A-Z0-9+\/]/gi, "");
    for (var o = [], u = 0, p = 0; u < i.length; p = ++u % 4) p != 0 && o.push((e.indexOf(i.charAt(u - 1)) & Math.pow(2, -2 * p + 8) - 1) << 2 * p | e.indexOf(i.charAt(u)) >>> 6 - 2 * p);
    return o;
  } }, n.exports = r;
}, 635: (n, e, r) => {
  const i = r(31), o = r(338), u = r(221);
  n.exports = { XMLParser: o, XMLValidator: i, XMLBuilder: u };
}, 705: (n, e) => {
  const r = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", i = "[" + r + "][" + r + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*", o = new RegExp("^" + i + "$");
  e.isExist = function(u) {
    return u !== void 0;
  }, e.isEmptyObject = function(u) {
    return Object.keys(u).length === 0;
  }, e.merge = function(u, p, f) {
    if (p) {
      const h = Object.keys(p), a = h.length;
      for (let s = 0; s < a; s++) u[h[s]] = f === "strict" ? [p[h[s]]] : p[h[s]];
    }
  }, e.getValue = function(u) {
    return e.isExist(u) ? u : "";
  }, e.isName = function(u) {
    return o.exec(u) != null;
  }, e.getAllMatches = function(u, p) {
    const f = [];
    let h = p.exec(u);
    for (; h; ) {
      const a = [];
      a.startIndex = p.lastIndex - h[0].length;
      const s = h.length;
      for (let g = 0; g < s; g++) a.push(h[g]);
      f.push(a), h = p.exec(u);
    }
    return f;
  }, e.nameRegexp = i;
}, 31: (n, e, r) => {
  const i = r(705), o = { allowBooleanAttributes: !1, unpairedTags: [] };
  function u(A) {
    return A === " " || A === "	" || A === `
` || A === "\r";
  }
  function p(A, T) {
    const x = T;
    for (; T < A.length; T++) if (!(A[T] != "?" && A[T] != " ")) {
      const O = A.substr(x, T - x);
      if (T > 5 && O === "xml") return y("InvalidXml", "XML declaration allowed only at the start of the document.", I(A, T));
      if (A[T] == "?" && A[T + 1] == ">") {
        T++;
        break;
      }
    }
    return T;
  }
  function f(A, T) {
    if (A.length > T + 5 && A[T + 1] === "-" && A[T + 2] === "-") {
      for (T += 3; T < A.length; T++) if (A[T] === "-" && A[T + 1] === "-" && A[T + 2] === ">") {
        T += 2;
        break;
      }
    } else if (A.length > T + 8 && A[T + 1] === "D" && A[T + 2] === "O" && A[T + 3] === "C" && A[T + 4] === "T" && A[T + 5] === "Y" && A[T + 6] === "P" && A[T + 7] === "E") {
      let x = 1;
      for (T += 8; T < A.length; T++) if (A[T] === "<") x++;
      else if (A[T] === ">" && (x--, x === 0)) break;
    } else if (A.length > T + 9 && A[T + 1] === "[" && A[T + 2] === "C" && A[T + 3] === "D" && A[T + 4] === "A" && A[T + 5] === "T" && A[T + 6] === "A" && A[T + 7] === "[") {
      for (T += 8; T < A.length; T++) if (A[T] === "]" && A[T + 1] === "]" && A[T + 2] === ">") {
        T += 2;
        break;
      }
    }
    return T;
  }
  e.validate = function(A, T) {
    T = Object.assign({}, o, T);
    const x = [];
    let O = !1, M = !1;
    A[0] === "\uFEFF" && (A = A.substr(1));
    for (let $ = 0; $ < A.length; $++) if (A[$] === "<" && A[$ + 1] === "?") {
      if ($ += 2, $ = p(A, $), $.err) return $;
    } else {
      if (A[$] !== "<") {
        if (u(A[$])) continue;
        return y("InvalidChar", "char '" + A[$] + "' is not expected.", I(A, $));
      }
      {
        let B = $;
        if ($++, A[$] === "!") {
          $ = f(A, $);
          continue;
        }
        {
          let W = !1;
          A[$] === "/" && (W = !0, $++);
          let k = "";
          for (; $ < A.length && A[$] !== ">" && A[$] !== " " && A[$] !== "	" && A[$] !== `
` && A[$] !== "\r"; $++) k += A[$];
          if (k = k.trim(), k[k.length - 1] === "/" && (k = k.substring(0, k.length - 1), $--), F = k, !i.isName(F)) {
            let G;
            return G = k.trim().length === 0 ? "Invalid space after '<'." : "Tag '" + k + "' is an invalid name.", y("InvalidTag", G, I(A, $));
          }
          const j = s(A, $);
          if (j === !1) return y("InvalidAttr", "Attributes for '" + k + "' have open quote.", I(A, $));
          let U = j.value;
          if ($ = j.index, U[U.length - 1] === "/") {
            const G = $ - U.length;
            U = U.substring(0, U.length - 1);
            const H = d(U, T);
            if (H !== !0) return y(H.err.code, H.err.msg, I(A, G + H.err.line));
            O = !0;
          } else if (W) {
            if (!j.tagClosed) return y("InvalidTag", "Closing tag '" + k + "' doesn't have proper closing.", I(A, $));
            if (U.trim().length > 0) return y("InvalidTag", "Closing tag '" + k + "' can't have attributes or invalid starting.", I(A, B));
            if (x.length === 0) return y("InvalidTag", "Closing tag '" + k + "' has not been opened.", I(A, B));
            {
              const G = x.pop();
              if (k !== G.tagName) {
                let H = I(A, G.tagStartPos);
                return y("InvalidTag", "Expected closing tag '" + G.tagName + "' (opened in line " + H.line + ", col " + H.col + ") instead of closing tag '" + k + "'.", I(A, B));
              }
              x.length == 0 && (M = !0);
            }
          } else {
            const G = d(U, T);
            if (G !== !0) return y(G.err.code, G.err.msg, I(A, $ - U.length + G.err.line));
            if (M === !0) return y("InvalidXml", "Multiple possible root nodes found.", I(A, $));
            T.unpairedTags.indexOf(k) !== -1 || x.push({ tagName: k, tagStartPos: B }), O = !0;
          }
          for ($++; $ < A.length; $++) if (A[$] === "<") {
            if (A[$ + 1] === "!") {
              $++, $ = f(A, $);
              continue;
            }
            if (A[$ + 1] !== "?") break;
            if ($ = p(A, ++$), $.err) return $;
          } else if (A[$] === "&") {
            const G = w(A, $);
            if (G == -1) return y("InvalidChar", "char '&' is not expected.", I(A, $));
            $ = G;
          } else if (M === !0 && !u(A[$])) return y("InvalidXml", "Extra text at the end", I(A, $));
          A[$] === "<" && $--;
        }
      }
    }
    var F;
    return O ? x.length == 1 ? y("InvalidTag", "Unclosed tag '" + x[0].tagName + "'.", I(A, x[0].tagStartPos)) : !(x.length > 0) || y("InvalidXml", "Invalid '" + JSON.stringify(x.map(($) => $.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 }) : y("InvalidXml", "Start tag expected.", 1);
  };
  const h = '"', a = "'";
  function s(A, T) {
    let x = "", O = "", M = !1;
    for (; T < A.length; T++) {
      if (A[T] === h || A[T] === a) O === "" ? O = A[T] : O !== A[T] || (O = "");
      else if (A[T] === ">" && O === "") {
        M = !0;
        break;
      }
      x += A[T];
    }
    return O === "" && { value: x, index: T, tagClosed: M };
  }
  const g = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
  function d(A, T) {
    const x = i.getAllMatches(A, g), O = {};
    for (let M = 0; M < x.length; M++) {
      if (x[M][1].length === 0) return y("InvalidAttr", "Attribute '" + x[M][2] + "' has no space in starting.", R(x[M]));
      if (x[M][3] !== void 0 && x[M][4] === void 0) return y("InvalidAttr", "Attribute '" + x[M][2] + "' is without value.", R(x[M]));
      if (x[M][3] === void 0 && !T.allowBooleanAttributes) return y("InvalidAttr", "boolean attribute '" + x[M][2] + "' is not allowed.", R(x[M]));
      const F = x[M][2];
      if (!b(F)) return y("InvalidAttr", "Attribute '" + F + "' is an invalid name.", R(x[M]));
      if (O.hasOwnProperty(F)) return y("InvalidAttr", "Attribute '" + F + "' is repeated.", R(x[M]));
      O[F] = 1;
    }
    return !0;
  }
  function w(A, T) {
    if (A[++T] === ";") return -1;
    if (A[T] === "#") return function(O, M) {
      let F = /\d/;
      for (O[M] === "x" && (M++, F = /[\da-fA-F]/); M < O.length; M++) {
        if (O[M] === ";") return M;
        if (!O[M].match(F)) break;
      }
      return -1;
    }(A, ++T);
    let x = 0;
    for (; T < A.length; T++, x++) if (!(A[T].match(/\w/) && x < 20)) {
      if (A[T] === ";") break;
      return -1;
    }
    return T;
  }
  function y(A, T, x) {
    return { err: { code: A, msg: T, line: x.line || x, col: x.col } };
  }
  function b(A) {
    return i.isName(A);
  }
  function I(A, T) {
    const x = A.substring(0, T).split(/\r?\n/);
    return { line: x.length, col: x[x.length - 1].length + 1 };
  }
  function R(A) {
    return A.startIndex + A[1].length;
  }
}, 221: (n, e, r) => {
  const i = r(87), o = { attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, cdataPropName: !1, format: !1, indentBy: "  ", suppressEmptyNode: !1, suppressUnpairedNode: !0, suppressBooleanAttributes: !0, tagValueProcessor: function(a, s) {
    return s;
  }, attributeValueProcessor: function(a, s) {
    return s;
  }, preserveOrder: !1, commentPropName: !1, unpairedTags: [], entities: [{ regex: new RegExp("&", "g"), val: "&amp;" }, { regex: new RegExp(">", "g"), val: "&gt;" }, { regex: new RegExp("<", "g"), val: "&lt;" }, { regex: new RegExp("'", "g"), val: "&apos;" }, { regex: new RegExp('"', "g"), val: "&quot;" }], processEntities: !0, stopNodes: [], oneListGroup: !1 };
  function u(a) {
    this.options = Object.assign({}, o, a), this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function() {
      return !1;
    } : (this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = h), this.processTextOrObjNode = p, this.options.format ? (this.indentate = f, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
      return "";
    }, this.tagEndChar = ">", this.newLine = "");
  }
  function p(a, s, g) {
    const d = this.j2x(a, g + 1);
    return a[this.options.textNodeName] !== void 0 && Object.keys(a).length === 1 ? this.buildTextValNode(a[this.options.textNodeName], s, d.attrStr, g) : this.buildObjectNode(d.val, s, d.attrStr, g);
  }
  function f(a) {
    return this.options.indentBy.repeat(a);
  }
  function h(a) {
    return !(!a.startsWith(this.options.attributeNamePrefix) || a === this.options.textNodeName) && a.substr(this.attrPrefixLen);
  }
  u.prototype.build = function(a) {
    return this.options.preserveOrder ? i(a, this.options) : (Array.isArray(a) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (a = { [this.options.arrayNodeName]: a }), this.j2x(a, 0).val);
  }, u.prototype.j2x = function(a, s) {
    let g = "", d = "";
    for (let w in a) if (Object.prototype.hasOwnProperty.call(a, w)) if (a[w] === void 0) this.isAttribute(w) && (d += "");
    else if (a[w] === null) this.isAttribute(w) ? d += "" : w[0] === "?" ? d += this.indentate(s) + "<" + w + "?" + this.tagEndChar : d += this.indentate(s) + "<" + w + "/" + this.tagEndChar;
    else if (a[w] instanceof Date) d += this.buildTextValNode(a[w], w, "", s);
    else if (typeof a[w] != "object") {
      const y = this.isAttribute(w);
      if (y) g += this.buildAttrPairStr(y, "" + a[w]);
      else if (w === this.options.textNodeName) {
        let b = this.options.tagValueProcessor(w, "" + a[w]);
        d += this.replaceEntitiesValue(b);
      } else d += this.buildTextValNode(a[w], w, "", s);
    } else if (Array.isArray(a[w])) {
      const y = a[w].length;
      let b = "", I = "";
      for (let R = 0; R < y; R++) {
        const A = a[w][R];
        if (A !== void 0) if (A === null) w[0] === "?" ? d += this.indentate(s) + "<" + w + "?" + this.tagEndChar : d += this.indentate(s) + "<" + w + "/" + this.tagEndChar;
        else if (typeof A == "object") if (this.options.oneListGroup) {
          const T = this.j2x(A, s + 1);
          b += T.val, this.options.attributesGroupName && A.hasOwnProperty(this.options.attributesGroupName) && (I += T.attrStr);
        } else b += this.processTextOrObjNode(A, w, s);
        else if (this.options.oneListGroup) {
          let T = this.options.tagValueProcessor(w, A);
          T = this.replaceEntitiesValue(T), b += T;
        } else b += this.buildTextValNode(A, w, "", s);
      }
      this.options.oneListGroup && (b = this.buildObjectNode(b, w, I, s)), d += b;
    } else if (this.options.attributesGroupName && w === this.options.attributesGroupName) {
      const y = Object.keys(a[w]), b = y.length;
      for (let I = 0; I < b; I++) g += this.buildAttrPairStr(y[I], "" + a[w][y[I]]);
    } else d += this.processTextOrObjNode(a[w], w, s);
    return { attrStr: g, val: d };
  }, u.prototype.buildAttrPairStr = function(a, s) {
    return s = this.options.attributeValueProcessor(a, "" + s), s = this.replaceEntitiesValue(s), this.options.suppressBooleanAttributes && s === "true" ? " " + a : " " + a + '="' + s + '"';
  }, u.prototype.buildObjectNode = function(a, s, g, d) {
    if (a === "") return s[0] === "?" ? this.indentate(d) + "<" + s + g + "?" + this.tagEndChar : this.indentate(d) + "<" + s + g + this.closeTag(s) + this.tagEndChar;
    {
      let w = "</" + s + this.tagEndChar, y = "";
      return s[0] === "?" && (y = "?", w = ""), !g && g !== "" || a.indexOf("<") !== -1 ? this.options.commentPropName !== !1 && s === this.options.commentPropName && y.length === 0 ? this.indentate(d) + `<!--${a}-->` + this.newLine : this.indentate(d) + "<" + s + g + y + this.tagEndChar + a + this.indentate(d) + w : this.indentate(d) + "<" + s + g + y + ">" + a + w;
    }
  }, u.prototype.closeTag = function(a) {
    let s = "";
    return this.options.unpairedTags.indexOf(a) !== -1 ? this.options.suppressUnpairedNode || (s = "/") : s = this.options.suppressEmptyNode ? "/" : `></${a}`, s;
  }, u.prototype.buildTextValNode = function(a, s, g, d) {
    if (this.options.cdataPropName !== !1 && s === this.options.cdataPropName) return this.indentate(d) + `<![CDATA[${a}]]>` + this.newLine;
    if (this.options.commentPropName !== !1 && s === this.options.commentPropName) return this.indentate(d) + `<!--${a}-->` + this.newLine;
    if (s[0] === "?") return this.indentate(d) + "<" + s + g + "?" + this.tagEndChar;
    {
      let w = this.options.tagValueProcessor(s, a);
      return w = this.replaceEntitiesValue(w), w === "" ? this.indentate(d) + "<" + s + g + this.closeTag(s) + this.tagEndChar : this.indentate(d) + "<" + s + g + ">" + w + "</" + s + this.tagEndChar;
    }
  }, u.prototype.replaceEntitiesValue = function(a) {
    if (a && a.length > 0 && this.options.processEntities) for (let s = 0; s < this.options.entities.length; s++) {
      const g = this.options.entities[s];
      a = a.replace(g.regex, g.val);
    }
    return a;
  }, n.exports = u;
}, 87: (n) => {
  function e(p, f, h, a) {
    let s = "", g = !1;
    for (let d = 0; d < p.length; d++) {
      const w = p[d], y = r(w);
      if (y === void 0) continue;
      let b = "";
      if (b = h.length === 0 ? y : `${h}.${y}`, y === f.textNodeName) {
        let T = w[y];
        o(b, f) || (T = f.tagValueProcessor(y, T), T = u(T, f)), g && (s += a), s += T, g = !1;
        continue;
      }
      if (y === f.cdataPropName) {
        g && (s += a), s += `<![CDATA[${w[y][0][f.textNodeName]}]]>`, g = !1;
        continue;
      }
      if (y === f.commentPropName) {
        s += a + `<!--${w[y][0][f.textNodeName]}-->`, g = !0;
        continue;
      }
      if (y[0] === "?") {
        const T = i(w[":@"], f), x = y === "?xml" ? "" : a;
        let O = w[y][0][f.textNodeName];
        O = O.length !== 0 ? " " + O : "", s += x + `<${y}${O}${T}?>`, g = !0;
        continue;
      }
      let I = a;
      I !== "" && (I += f.indentBy);
      const R = a + `<${y}${i(w[":@"], f)}`, A = e(w[y], f, b, I);
      f.unpairedTags.indexOf(y) !== -1 ? f.suppressUnpairedNode ? s += R + ">" : s += R + "/>" : A && A.length !== 0 || !f.suppressEmptyNode ? A && A.endsWith(">") ? s += R + `>${A}${a}</${y}>` : (s += R + ">", A && a !== "" && (A.includes("/>") || A.includes("</")) ? s += a + f.indentBy + A + a : s += A, s += `</${y}>`) : s += R + "/>", g = !0;
    }
    return s;
  }
  function r(p) {
    const f = Object.keys(p);
    for (let h = 0; h < f.length; h++) {
      const a = f[h];
      if (p.hasOwnProperty(a) && a !== ":@") return a;
    }
  }
  function i(p, f) {
    let h = "";
    if (p && !f.ignoreAttributes) for (let a in p) {
      if (!p.hasOwnProperty(a)) continue;
      let s = f.attributeValueProcessor(a, p[a]);
      s = u(s, f), s === !0 && f.suppressBooleanAttributes ? h += ` ${a.substr(f.attributeNamePrefix.length)}` : h += ` ${a.substr(f.attributeNamePrefix.length)}="${s}"`;
    }
    return h;
  }
  function o(p, f) {
    let h = (p = p.substr(0, p.length - f.textNodeName.length - 1)).substr(p.lastIndexOf(".") + 1);
    for (let a in f.stopNodes) if (f.stopNodes[a] === p || f.stopNodes[a] === "*." + h) return !0;
    return !1;
  }
  function u(p, f) {
    if (p && p.length > 0 && f.processEntities) for (let h = 0; h < f.entities.length; h++) {
      const a = f.entities[h];
      p = p.replace(a.regex, a.val);
    }
    return p;
  }
  n.exports = function(p, f) {
    let h = "";
    return f.format && f.indentBy.length > 0 && (h = `
`), e(p, f, "", h);
  };
}, 193: (n, e, r) => {
  const i = r(705);
  function o(g, d) {
    let w = "";
    for (; d < g.length && g[d] !== "'" && g[d] !== '"'; d++) w += g[d];
    if (w = w.trim(), w.indexOf(" ") !== -1) throw new Error("External entites are not supported");
    const y = g[d++];
    let b = "";
    for (; d < g.length && g[d] !== y; d++) b += g[d];
    return [w, b, d];
  }
  function u(g, d) {
    return g[d + 1] === "!" && g[d + 2] === "-" && g[d + 3] === "-";
  }
  function p(g, d) {
    return g[d + 1] === "!" && g[d + 2] === "E" && g[d + 3] === "N" && g[d + 4] === "T" && g[d + 5] === "I" && g[d + 6] === "T" && g[d + 7] === "Y";
  }
  function f(g, d) {
    return g[d + 1] === "!" && g[d + 2] === "E" && g[d + 3] === "L" && g[d + 4] === "E" && g[d + 5] === "M" && g[d + 6] === "E" && g[d + 7] === "N" && g[d + 8] === "T";
  }
  function h(g, d) {
    return g[d + 1] === "!" && g[d + 2] === "A" && g[d + 3] === "T" && g[d + 4] === "T" && g[d + 5] === "L" && g[d + 6] === "I" && g[d + 7] === "S" && g[d + 8] === "T";
  }
  function a(g, d) {
    return g[d + 1] === "!" && g[d + 2] === "N" && g[d + 3] === "O" && g[d + 4] === "T" && g[d + 5] === "A" && g[d + 6] === "T" && g[d + 7] === "I" && g[d + 8] === "O" && g[d + 9] === "N";
  }
  function s(g) {
    if (i.isName(g)) return g;
    throw new Error(`Invalid entity name ${g}`);
  }
  n.exports = function(g, d) {
    const w = {};
    if (g[d + 3] !== "O" || g[d + 4] !== "C" || g[d + 5] !== "T" || g[d + 6] !== "Y" || g[d + 7] !== "P" || g[d + 8] !== "E") throw new Error("Invalid Tag instead of DOCTYPE");
    {
      d += 9;
      let y = 1, b = !1, I = !1, R = "";
      for (; d < g.length; d++) if (g[d] !== "<" || I) if (g[d] === ">") {
        if (I ? g[d - 1] === "-" && g[d - 2] === "-" && (I = !1, y--) : y--, y === 0) break;
      } else g[d] === "[" ? b = !0 : R += g[d];
      else {
        if (b && p(g, d)) d += 7, [entityName, val, d] = o(g, d + 1), val.indexOf("&") === -1 && (w[s(entityName)] = { regx: RegExp(`&${entityName};`, "g"), val });
        else if (b && f(g, d)) d += 8;
        else if (b && h(g, d)) d += 8;
        else if (b && a(g, d)) d += 9;
        else {
          if (!u) throw new Error("Invalid DOCTYPE");
          I = !0;
        }
        y++, R = "";
      }
      if (y !== 0) throw new Error("Unclosed DOCTYPE");
    }
    return { entities: w, i: d };
  };
}, 63: (n, e) => {
  const r = { preserveOrder: !1, attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, removeNSPrefix: !1, allowBooleanAttributes: !1, parseTagValue: !0, parseAttributeValue: !1, trimValues: !0, cdataPropName: !1, numberParseOptions: { hex: !0, leadingZeros: !0, eNotation: !0 }, tagValueProcessor: function(i, o) {
    return o;
  }, attributeValueProcessor: function(i, o) {
    return o;
  }, stopNodes: [], alwaysCreateTextNode: !1, isArray: () => !1, commentPropName: !1, unpairedTags: [], processEntities: !0, htmlEntities: !1, ignoreDeclaration: !1, ignorePiTags: !1, transformTagName: !1, transformAttributeName: !1, updateTag: function(i, o, u) {
    return i;
  } };
  e.buildOptions = function(i) {
    return Object.assign({}, r, i);
  }, e.defaultOptions = r;
}, 299: (n, e, r) => {
  const i = r(705), o = r(365), u = r(193), p = r(494);
  function f(O) {
    const M = Object.keys(O);
    for (let F = 0; F < M.length; F++) {
      const $ = M[F];
      this.lastEntities[$] = { regex: new RegExp("&" + $ + ";", "g"), val: O[$] };
    }
  }
  function h(O, M, F, $, B, W, k) {
    if (O !== void 0 && (this.options.trimValues && !$ && (O = O.trim()), O.length > 0)) {
      k || (O = this.replaceEntitiesValue(O));
      const j = this.options.tagValueProcessor(M, O, F, B, W);
      return j == null ? O : typeof j != typeof O || j !== O ? j : this.options.trimValues || O.trim() === O ? x(O, this.options.parseTagValue, this.options.numberParseOptions) : O;
    }
  }
  function a(O) {
    if (this.options.removeNSPrefix) {
      const M = O.split(":"), F = O.charAt(0) === "/" ? "/" : "";
      if (M[0] === "xmlns") return "";
      M.length === 2 && (O = F + M[1]);
    }
    return O;
  }
  const s = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
  function g(O, M, F) {
    if (!this.options.ignoreAttributes && typeof O == "string") {
      const $ = i.getAllMatches(O, s), B = $.length, W = {};
      for (let k = 0; k < B; k++) {
        const j = this.resolveNameSpace($[k][1]);
        let U = $[k][4], G = this.options.attributeNamePrefix + j;
        if (j.length) if (this.options.transformAttributeName && (G = this.options.transformAttributeName(G)), G === "__proto__" && (G = "#__proto__"), U !== void 0) {
          this.options.trimValues && (U = U.trim()), U = this.replaceEntitiesValue(U);
          const H = this.options.attributeValueProcessor(j, U, M);
          W[G] = H == null ? U : typeof H != typeof U || H !== U ? H : x(U, this.options.parseAttributeValue, this.options.numberParseOptions);
        } else this.options.allowBooleanAttributes && (W[G] = !0);
      }
      if (!Object.keys(W).length) return;
      if (this.options.attributesGroupName) {
        const k = {};
        return k[this.options.attributesGroupName] = W, k;
      }
      return W;
    }
  }
  const d = function(O) {
    O = O.replace(/\r\n?/g, `
`);
    const M = new o("!xml");
    let F = M, $ = "", B = "";
    for (let W = 0; W < O.length; W++) if (O[W] === "<") if (O[W + 1] === "/") {
      const k = R(O, ">", W, "Closing Tag is not closed.");
      let j = O.substring(W + 2, k).trim();
      if (this.options.removeNSPrefix) {
        const H = j.indexOf(":");
        H !== -1 && (j = j.substr(H + 1));
      }
      this.options.transformTagName && (j = this.options.transformTagName(j)), F && ($ = this.saveTextToParentTag($, F, B));
      const U = B.substring(B.lastIndexOf(".") + 1);
      if (j && this.options.unpairedTags.indexOf(j) !== -1) throw new Error(`Unpaired tag can not be used as closing tag: </${j}>`);
      let G = 0;
      U && this.options.unpairedTags.indexOf(U) !== -1 ? (G = B.lastIndexOf(".", B.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : G = B.lastIndexOf("."), B = B.substring(0, G), F = this.tagsNodeStack.pop(), $ = "", W = k;
    } else if (O[W + 1] === "?") {
      let k = A(O, W, !1, "?>");
      if (!k) throw new Error("Pi Tag is not closed.");
      if ($ = this.saveTextToParentTag($, F, B), !(this.options.ignoreDeclaration && k.tagName === "?xml" || this.options.ignorePiTags)) {
        const j = new o(k.tagName);
        j.add(this.options.textNodeName, ""), k.tagName !== k.tagExp && k.attrExpPresent && (j[":@"] = this.buildAttributesMap(k.tagExp, B, k.tagName)), this.addChild(F, j, B);
      }
      W = k.closeIndex + 1;
    } else if (O.substr(W + 1, 3) === "!--") {
      const k = R(O, "-->", W + 4, "Comment is not closed.");
      if (this.options.commentPropName) {
        const j = O.substring(W + 4, k - 2);
        $ = this.saveTextToParentTag($, F, B), F.add(this.options.commentPropName, [{ [this.options.textNodeName]: j }]);
      }
      W = k;
    } else if (O.substr(W + 1, 2) === "!D") {
      const k = u(O, W);
      this.docTypeEntities = k.entities, W = k.i;
    } else if (O.substr(W + 1, 2) === "![") {
      const k = R(O, "]]>", W, "CDATA is not closed.") - 2, j = O.substring(W + 9, k);
      $ = this.saveTextToParentTag($, F, B);
      let U = this.parseTextData(j, F.tagname, B, !0, !1, !0, !0);
      U == null && (U = ""), this.options.cdataPropName ? F.add(this.options.cdataPropName, [{ [this.options.textNodeName]: j }]) : F.add(this.options.textNodeName, U), W = k + 2;
    } else {
      let k = A(O, W, this.options.removeNSPrefix), j = k.tagName;
      const U = k.rawTagName;
      let G = k.tagExp, H = k.attrExpPresent, ce = k.closeIndex;
      this.options.transformTagName && (j = this.options.transformTagName(j)), F && $ && F.tagname !== "!xml" && ($ = this.saveTextToParentTag($, F, B, !1));
      const ne = F;
      if (ne && this.options.unpairedTags.indexOf(ne.tagname) !== -1 && (F = this.tagsNodeStack.pop(), B = B.substring(0, B.lastIndexOf("."))), j !== M.tagname && (B += B ? "." + j : j), this.isItStopNode(this.options.stopNodes, B, j)) {
        let te = "";
        if (G.length > 0 && G.lastIndexOf("/") === G.length - 1) j[j.length - 1] === "/" ? (j = j.substr(0, j.length - 1), B = B.substr(0, B.length - 1), G = j) : G = G.substr(0, G.length - 1), W = k.closeIndex;
        else if (this.options.unpairedTags.indexOf(j) !== -1) W = k.closeIndex;
        else {
          const ge = this.readStopNodeData(O, U, ce + 1);
          if (!ge) throw new Error(`Unexpected end of ${U}`);
          W = ge.i, te = ge.tagContent;
        }
        const we = new o(j);
        j !== G && H && (we[":@"] = this.buildAttributesMap(G, B, j)), te && (te = this.parseTextData(te, j, B, !0, H, !0, !0)), B = B.substr(0, B.lastIndexOf(".")), we.add(this.options.textNodeName, te), this.addChild(F, we, B);
      } else {
        if (G.length > 0 && G.lastIndexOf("/") === G.length - 1) {
          j[j.length - 1] === "/" ? (j = j.substr(0, j.length - 1), B = B.substr(0, B.length - 1), G = j) : G = G.substr(0, G.length - 1), this.options.transformTagName && (j = this.options.transformTagName(j));
          const te = new o(j);
          j !== G && H && (te[":@"] = this.buildAttributesMap(G, B, j)), this.addChild(F, te, B), B = B.substr(0, B.lastIndexOf("."));
        } else {
          const te = new o(j);
          this.tagsNodeStack.push(F), j !== G && H && (te[":@"] = this.buildAttributesMap(G, B, j)), this.addChild(F, te, B), F = te;
        }
        $ = "", W = ce;
      }
    }
    else $ += O[W];
    return M.child;
  };
  function w(O, M, F) {
    const $ = this.options.updateTag(M.tagname, F, M[":@"]);
    $ === !1 || (typeof $ == "string" && (M.tagname = $), O.addChild(M));
  }
  const y = function(O) {
    if (this.options.processEntities) {
      for (let M in this.docTypeEntities) {
        const F = this.docTypeEntities[M];
        O = O.replace(F.regx, F.val);
      }
      for (let M in this.lastEntities) {
        const F = this.lastEntities[M];
        O = O.replace(F.regex, F.val);
      }
      if (this.options.htmlEntities) for (let M in this.htmlEntities) {
        const F = this.htmlEntities[M];
        O = O.replace(F.regex, F.val);
      }
      O = O.replace(this.ampEntity.regex, this.ampEntity.val);
    }
    return O;
  };
  function b(O, M, F, $) {
    return O && ($ === void 0 && ($ = Object.keys(M.child).length === 0), (O = this.parseTextData(O, M.tagname, F, !1, !!M[":@"] && Object.keys(M[":@"]).length !== 0, $)) !== void 0 && O !== "" && M.add(this.options.textNodeName, O), O = ""), O;
  }
  function I(O, M, F) {
    const $ = "*." + F;
    for (const B in O) {
      const W = O[B];
      if ($ === W || M === W) return !0;
    }
    return !1;
  }
  function R(O, M, F, $) {
    const B = O.indexOf(M, F);
    if (B === -1) throw new Error($);
    return B + M.length - 1;
  }
  function A(O, M, F) {
    const $ = function(H, ce) {
      let ne, te = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ">", we = "";
      for (let ge = ce; ge < H.length; ge++) {
        let ie = H[ge];
        if (ne) ie === ne && (ne = "");
        else if (ie === '"' || ie === "'") ne = ie;
        else if (ie === te[0]) {
          if (!te[1]) return { data: we, index: ge };
          if (H[ge + 1] === te[1]) return { data: we, index: ge };
        } else ie === "	" && (ie = " ");
        we += ie;
      }
    }(O, M + 1, arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ">");
    if (!$) return;
    let B = $.data;
    const W = $.index, k = B.search(/\s/);
    let j = B, U = !0;
    k !== -1 && (j = B.substring(0, k), B = B.substring(k + 1).trimStart());
    const G = j;
    if (F) {
      const H = j.indexOf(":");
      H !== -1 && (j = j.substr(H + 1), U = j !== $.data.substr(H + 1));
    }
    return { tagName: j, tagExp: B, closeIndex: W, attrExpPresent: U, rawTagName: G };
  }
  function T(O, M, F) {
    const $ = F;
    let B = 1;
    for (; F < O.length; F++) if (O[F] === "<") if (O[F + 1] === "/") {
      const W = R(O, ">", F, `${M} is not closed`);
      if (O.substring(F + 2, W).trim() === M && (B--, B === 0)) return { tagContent: O.substring($, F), i: W };
      F = W;
    } else if (O[F + 1] === "?") F = R(O, "?>", F + 1, "StopNode is not closed.");
    else if (O.substr(F + 1, 3) === "!--") F = R(O, "-->", F + 3, "StopNode is not closed.");
    else if (O.substr(F + 1, 2) === "![") F = R(O, "]]>", F, "StopNode is not closed.") - 2;
    else {
      const W = A(O, F, ">");
      W && ((W && W.tagName) === M && W.tagExp[W.tagExp.length - 1] !== "/" && B++, F = W.closeIndex);
    }
  }
  function x(O, M, F) {
    if (M && typeof O == "string") {
      const $ = O.trim();
      return $ === "true" || $ !== "false" && p(O, F);
    }
    return i.isExist(O) ? O : "";
  }
  n.exports = class {
    constructor(O) {
      this.options = O, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = { apos: { regex: /&(apos|#39|#x27);/g, val: "'" }, gt: { regex: /&(gt|#62|#x3E);/g, val: ">" }, lt: { regex: /&(lt|#60|#x3C);/g, val: "<" }, quot: { regex: /&(quot|#34|#x22);/g, val: '"' } }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = { space: { regex: /&(nbsp|#160);/g, val: " " }, cent: { regex: /&(cent|#162);/g, val: "¢" }, pound: { regex: /&(pound|#163);/g, val: "£" }, yen: { regex: /&(yen|#165);/g, val: "¥" }, euro: { regex: /&(euro|#8364);/g, val: "€" }, copyright: { regex: /&(copy|#169);/g, val: "©" }, reg: { regex: /&(reg|#174);/g, val: "®" }, inr: { regex: /&(inr|#8377);/g, val: "₹" }, num_dec: { regex: /&#([0-9]{1,7});/g, val: (M, F) => String.fromCharCode(Number.parseInt(F, 10)) }, num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (M, F) => String.fromCharCode(Number.parseInt(F, 16)) } }, this.addExternalEntities = f, this.parseXml = d, this.parseTextData = h, this.resolveNameSpace = a, this.buildAttributesMap = g, this.isItStopNode = I, this.replaceEntitiesValue = y, this.readStopNodeData = T, this.saveTextToParentTag = b, this.addChild = w;
    }
  };
}, 338: (n, e, r) => {
  const { buildOptions: i } = r(63), o = r(299), { prettify: u } = r(728), p = r(31);
  n.exports = class {
    constructor(f) {
      this.externalEntities = {}, this.options = i(f);
    }
    parse(f, h) {
      if (typeof f != "string") {
        if (!f.toString) throw new Error("XML data is accepted in String or Bytes[] form.");
        f = f.toString();
      }
      if (h) {
        h === !0 && (h = {});
        const g = p.validate(f, h);
        if (g !== !0) throw Error(`${g.err.msg}:${g.err.line}:${g.err.col}`);
      }
      const a = new o(this.options);
      a.addExternalEntities(this.externalEntities);
      const s = a.parseXml(f);
      return this.options.preserveOrder || s === void 0 ? s : u(s, this.options);
    }
    addEntity(f, h) {
      if (h.indexOf("&") !== -1) throw new Error("Entity value can't have '&'");
      if (f.indexOf("&") !== -1 || f.indexOf(";") !== -1) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
      if (h === "&") throw new Error("An entity with value '&' is not permitted");
      this.externalEntities[f] = h;
    }
  };
}, 728: (n, e) => {
  function r(p, f, h) {
    let a;
    const s = {};
    for (let g = 0; g < p.length; g++) {
      const d = p[g], w = i(d);
      let y = "";
      if (y = h === void 0 ? w : h + "." + w, w === f.textNodeName) a === void 0 ? a = d[w] : a += "" + d[w];
      else {
        if (w === void 0) continue;
        if (d[w]) {
          let b = r(d[w], f, y);
          const I = u(b, f);
          d[":@"] ? o(b, d[":@"], y, f) : Object.keys(b).length !== 1 || b[f.textNodeName] === void 0 || f.alwaysCreateTextNode ? Object.keys(b).length === 0 && (f.alwaysCreateTextNode ? b[f.textNodeName] = "" : b = "") : b = b[f.textNodeName], s[w] !== void 0 && s.hasOwnProperty(w) ? (Array.isArray(s[w]) || (s[w] = [s[w]]), s[w].push(b)) : f.isArray(w, y, I) ? s[w] = [b] : s[w] = b;
        }
      }
    }
    return typeof a == "string" ? a.length > 0 && (s[f.textNodeName] = a) : a !== void 0 && (s[f.textNodeName] = a), s;
  }
  function i(p) {
    const f = Object.keys(p);
    for (let h = 0; h < f.length; h++) {
      const a = f[h];
      if (a !== ":@") return a;
    }
  }
  function o(p, f, h, a) {
    if (f) {
      const s = Object.keys(f), g = s.length;
      for (let d = 0; d < g; d++) {
        const w = s[d];
        a.isArray(w, h + "." + w, !0, !0) ? p[w] = [f[w]] : p[w] = f[w];
      }
    }
  }
  function u(p, f) {
    const { textNodeName: h } = f, a = Object.keys(p).length;
    return a === 0 || !(a !== 1 || !p[h] && typeof p[h] != "boolean" && p[h] !== 0);
  }
  e.prettify = function(p, f) {
    return r(p, f);
  };
}, 365: (n) => {
  n.exports = class {
    constructor(e) {
      this.tagname = e, this.child = [], this[":@"] = {};
    }
    add(e, r) {
      e === "__proto__" && (e = "#__proto__"), this.child.push({ [e]: r });
    }
    addChild(e) {
      e.tagname === "__proto__" && (e.tagname = "#__proto__"), e[":@"] && Object.keys(e[":@"]).length > 0 ? this.child.push({ [e.tagname]: e.child, ":@": e[":@"] }) : this.child.push({ [e.tagname]: e.child });
    }
  };
}, 135: (n) => {
  function e(r) {
    return !!r.constructor && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r);
  }
  n.exports = function(r) {
    return r != null && (e(r) || function(i) {
      return typeof i.readFloatLE == "function" && typeof i.slice == "function" && e(i.slice(0, 0));
    }(r) || !!r._isBuffer);
  };
}, 542: (n, e, r) => {
  (function() {
    var i = r(298), o = r(526).utf8, u = r(135), p = r(526).bin, f = function(h, a) {
      h.constructor == String ? h = a && a.encoding === "binary" ? p.stringToBytes(h) : o.stringToBytes(h) : u(h) ? h = Array.prototype.slice.call(h, 0) : Array.isArray(h) || h.constructor === Uint8Array || (h = h.toString());
      for (var s = i.bytesToWords(h), g = 8 * h.length, d = 1732584193, w = -271733879, y = -1732584194, b = 271733878, I = 0; I < s.length; I++) s[I] = 16711935 & (s[I] << 8 | s[I] >>> 24) | 4278255360 & (s[I] << 24 | s[I] >>> 8);
      s[g >>> 5] |= 128 << g % 32, s[14 + (g + 64 >>> 9 << 4)] = g;
      var R = f._ff, A = f._gg, T = f._hh, x = f._ii;
      for (I = 0; I < s.length; I += 16) {
        var O = d, M = w, F = y, $ = b;
        d = R(d, w, y, b, s[I + 0], 7, -680876936), b = R(b, d, w, y, s[I + 1], 12, -389564586), y = R(y, b, d, w, s[I + 2], 17, 606105819), w = R(w, y, b, d, s[I + 3], 22, -1044525330), d = R(d, w, y, b, s[I + 4], 7, -176418897), b = R(b, d, w, y, s[I + 5], 12, 1200080426), y = R(y, b, d, w, s[I + 6], 17, -1473231341), w = R(w, y, b, d, s[I + 7], 22, -45705983), d = R(d, w, y, b, s[I + 8], 7, 1770035416), b = R(b, d, w, y, s[I + 9], 12, -1958414417), y = R(y, b, d, w, s[I + 10], 17, -42063), w = R(w, y, b, d, s[I + 11], 22, -1990404162), d = R(d, w, y, b, s[I + 12], 7, 1804603682), b = R(b, d, w, y, s[I + 13], 12, -40341101), y = R(y, b, d, w, s[I + 14], 17, -1502002290), d = A(d, w = R(w, y, b, d, s[I + 15], 22, 1236535329), y, b, s[I + 1], 5, -165796510), b = A(b, d, w, y, s[I + 6], 9, -1069501632), y = A(y, b, d, w, s[I + 11], 14, 643717713), w = A(w, y, b, d, s[I + 0], 20, -373897302), d = A(d, w, y, b, s[I + 5], 5, -701558691), b = A(b, d, w, y, s[I + 10], 9, 38016083), y = A(y, b, d, w, s[I + 15], 14, -660478335), w = A(w, y, b, d, s[I + 4], 20, -405537848), d = A(d, w, y, b, s[I + 9], 5, 568446438), b = A(b, d, w, y, s[I + 14], 9, -1019803690), y = A(y, b, d, w, s[I + 3], 14, -187363961), w = A(w, y, b, d, s[I + 8], 20, 1163531501), d = A(d, w, y, b, s[I + 13], 5, -1444681467), b = A(b, d, w, y, s[I + 2], 9, -51403784), y = A(y, b, d, w, s[I + 7], 14, 1735328473), d = T(d, w = A(w, y, b, d, s[I + 12], 20, -1926607734), y, b, s[I + 5], 4, -378558), b = T(b, d, w, y, s[I + 8], 11, -2022574463), y = T(y, b, d, w, s[I + 11], 16, 1839030562), w = T(w, y, b, d, s[I + 14], 23, -35309556), d = T(d, w, y, b, s[I + 1], 4, -1530992060), b = T(b, d, w, y, s[I + 4], 11, 1272893353), y = T(y, b, d, w, s[I + 7], 16, -155497632), w = T(w, y, b, d, s[I + 10], 23, -1094730640), d = T(d, w, y, b, s[I + 13], 4, 681279174), b = T(b, d, w, y, s[I + 0], 11, -358537222), y = T(y, b, d, w, s[I + 3], 16, -722521979), w = T(w, y, b, d, s[I + 6], 23, 76029189), d = T(d, w, y, b, s[I + 9], 4, -640364487), b = T(b, d, w, y, s[I + 12], 11, -421815835), y = T(y, b, d, w, s[I + 15], 16, 530742520), d = x(d, w = T(w, y, b, d, s[I + 2], 23, -995338651), y, b, s[I + 0], 6, -198630844), b = x(b, d, w, y, s[I + 7], 10, 1126891415), y = x(y, b, d, w, s[I + 14], 15, -1416354905), w = x(w, y, b, d, s[I + 5], 21, -57434055), d = x(d, w, y, b, s[I + 12], 6, 1700485571), b = x(b, d, w, y, s[I + 3], 10, -1894986606), y = x(y, b, d, w, s[I + 10], 15, -1051523), w = x(w, y, b, d, s[I + 1], 21, -2054922799), d = x(d, w, y, b, s[I + 8], 6, 1873313359), b = x(b, d, w, y, s[I + 15], 10, -30611744), y = x(y, b, d, w, s[I + 6], 15, -1560198380), w = x(w, y, b, d, s[I + 13], 21, 1309151649), d = x(d, w, y, b, s[I + 4], 6, -145523070), b = x(b, d, w, y, s[I + 11], 10, -1120210379), y = x(y, b, d, w, s[I + 2], 15, 718787259), w = x(w, y, b, d, s[I + 9], 21, -343485551), d = d + O >>> 0, w = w + M >>> 0, y = y + F >>> 0, b = b + $ >>> 0;
      }
      return i.endian([d, w, y, b]);
    };
    f._ff = function(h, a, s, g, d, w, y) {
      var b = h + (a & s | ~a & g) + (d >>> 0) + y;
      return (b << w | b >>> 32 - w) + a;
    }, f._gg = function(h, a, s, g, d, w, y) {
      var b = h + (a & g | s & ~g) + (d >>> 0) + y;
      return (b << w | b >>> 32 - w) + a;
    }, f._hh = function(h, a, s, g, d, w, y) {
      var b = h + (a ^ s ^ g) + (d >>> 0) + y;
      return (b << w | b >>> 32 - w) + a;
    }, f._ii = function(h, a, s, g, d, w, y) {
      var b = h + (s ^ (a | ~g)) + (d >>> 0) + y;
      return (b << w | b >>> 32 - w) + a;
    }, f._blocksize = 16, f._digestsize = 16, n.exports = function(h, a) {
      if (h == null) throw new Error("Illegal argument " + h);
      var s = i.wordsToBytes(f(h, a));
      return a && a.asBytes ? s : a && a.asString ? p.bytesToString(s) : i.bytesToHex(s);
    };
  })();
}, 285: (n, e, r) => {
  var i = r(2);
  n.exports = function(R) {
    return R ? (R.substr(0, 2) === "{}" && (R = "\\{\\}" + R.substr(2)), I(function(A) {
      return A.split("\\\\").join(o).split("\\{").join(u).split("\\}").join(p).split("\\,").join(f).split("\\.").join(h);
    }(R), !0).map(s)) : [];
  };
  var o = "\0SLASH" + Math.random() + "\0", u = "\0OPEN" + Math.random() + "\0", p = "\0CLOSE" + Math.random() + "\0", f = "\0COMMA" + Math.random() + "\0", h = "\0PERIOD" + Math.random() + "\0";
  function a(R) {
    return parseInt(R, 10) == R ? parseInt(R, 10) : R.charCodeAt(0);
  }
  function s(R) {
    return R.split(o).join("\\").split(u).join("{").split(p).join("}").split(f).join(",").split(h).join(".");
  }
  function g(R) {
    if (!R) return [""];
    var A = [], T = i("{", "}", R);
    if (!T) return R.split(",");
    var x = T.pre, O = T.body, M = T.post, F = x.split(",");
    F[F.length - 1] += "{" + O + "}";
    var $ = g(M);
    return M.length && (F[F.length - 1] += $.shift(), F.push.apply(F, $)), A.push.apply(A, F), A;
  }
  function d(R) {
    return "{" + R + "}";
  }
  function w(R) {
    return /^-?0\d/.test(R);
  }
  function y(R, A) {
    return R <= A;
  }
  function b(R, A) {
    return R >= A;
  }
  function I(R, A) {
    var T = [], x = i("{", "}", R);
    if (!x) return [R];
    var O = x.pre, M = x.post.length ? I(x.post, !1) : [""];
    if (/\$$/.test(x.pre)) for (var F = 0; F < M.length; F++) {
      var $ = O + "{" + x.body + "}" + M[F];
      T.push($);
    }
    else {
      var B, W, k = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(x.body), j = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(x.body), U = k || j, G = x.body.indexOf(",") >= 0;
      if (!U && !G) return x.post.match(/,.*\}/) ? I(R = x.pre + "{" + x.body + p + x.post) : [R];
      if (U) B = x.body.split(/\.\./);
      else if ((B = g(x.body)).length === 1 && (B = I(B[0], !1).map(d)).length === 1) return M.map(function(nt) {
        return x.pre + B[0] + nt;
      });
      if (U) {
        var H = a(B[0]), ce = a(B[1]), ne = Math.max(B[0].length, B[1].length), te = B.length == 3 ? Math.abs(a(B[2])) : 1, we = y;
        ce < H && (te *= -1, we = b);
        var ge = B.some(w);
        W = [];
        for (var ie = H; we(ie, ce); ie += te) {
          var $e;
          if (j) ($e = String.fromCharCode(ie)) === "\\" && ($e = "");
          else if ($e = String(ie), ge) {
            var ue = ne - $e.length;
            if (ue > 0) {
              var fe = new Array(ue + 1).join("0");
              $e = ie < 0 ? "-" + fe + $e.slice(1) : fe + $e;
            }
          }
          W.push($e);
        }
      } else {
        W = [];
        for (var Q = 0; Q < B.length; Q++) W.push.apply(W, I(B[Q], !1));
      }
      for (Q = 0; Q < W.length; Q++) for (F = 0; F < M.length; F++) $ = O + W[Q] + M[F], (!A || U || $) && T.push($);
    }
    return T;
  }
}, 829: (n) => {
  function e(a) {
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, e(a);
  }
  function r(a) {
    var s = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return r = function(g) {
      if (g === null || (d = g, Function.toString.call(d).indexOf("[native code]") === -1)) return g;
      var d;
      if (typeof g != "function") throw new TypeError("Super expression must either be null or a function");
      if (s !== void 0) {
        if (s.has(g)) return s.get(g);
        s.set(g, w);
      }
      function w() {
        return i(g, arguments, u(this).constructor);
      }
      return w.prototype = Object.create(g.prototype, { constructor: { value: w, enumerable: !1, writable: !0, configurable: !0 } }), o(w, g);
    }, r(a);
  }
  function i(a, s, g) {
    return i = function() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }() ? Reflect.construct : function(d, w, y) {
      var b = [null];
      b.push.apply(b, w);
      var I = new (Function.bind.apply(d, b))();
      return y && o(I, y.prototype), I;
    }, i.apply(null, arguments);
  }
  function o(a, s) {
    return o = Object.setPrototypeOf || function(g, d) {
      return g.__proto__ = d, g;
    }, o(a, s);
  }
  function u(a) {
    return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, u(a);
  }
  var p = function(a) {
    function s(g) {
      var d;
      return function(w, y) {
        if (!(w instanceof y)) throw new TypeError("Cannot call a class as a function");
      }(this, s), (d = function(w, y) {
        return !y || e(y) !== "object" && typeof y != "function" ? function(b) {
          if (b === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return b;
        }(w) : y;
      }(this, u(s).call(this, g))).name = "ObjectPrototypeMutationError", d;
    }
    return function(g, d) {
      if (typeof d != "function" && d !== null) throw new TypeError("Super expression must either be null or a function");
      g.prototype = Object.create(d && d.prototype, { constructor: { value: g, writable: !0, configurable: !0 } }), d && o(g, d);
    }(s, a), s;
  }(r(Error));
  function f(a, s) {
    for (var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
    }, d = s.split("."), w = d.length, y = function(R) {
      var A = d[R];
      if (!a) return { v: void 0 };
      if (A === "+") {
        if (Array.isArray(a)) return { v: a.map(function(x, O) {
          var M = d.slice(R + 1);
          return M.length > 0 ? f(x, M.join("."), g) : g(a, O, d, R);
        }) };
        var T = d.slice(0, R).join(".");
        throw new Error("Object at wildcard (".concat(T, ") is not an array"));
      }
      a = g(a, A, d, R);
    }, b = 0; b < w; b++) {
      var I = y(b);
      if (e(I) === "object") return I.v;
    }
    return a;
  }
  function h(a, s) {
    return a.length === s + 1;
  }
  n.exports = { set: function(a, s, g) {
    if (e(a) != "object" || a === null || s === void 0) return a;
    if (typeof s == "number") return a[s] = g, a[s];
    try {
      return f(a, s, function(d, w, y, b) {
        if (d === Reflect.getPrototypeOf({})) throw new p("Attempting to mutate Object.prototype");
        if (!d[w]) {
          var I = Number.isInteger(Number(y[b + 1])), R = y[b + 1] === "+";
          d[w] = I || R ? [] : {};
        }
        return h(y, b) && (d[w] = g), d[w];
      });
    } catch (d) {
      if (d instanceof p) throw d;
      return a;
    }
  }, get: function(a, s) {
    if (e(a) != "object" || a === null || s === void 0) return a;
    if (typeof s == "number") return a[s];
    try {
      return f(a, s, function(g, d) {
        return g[d];
      });
    } catch {
      return a;
    }
  }, has: function(a, s) {
    var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (e(a) != "object" || a === null || s === void 0) return !1;
    if (typeof s == "number") return s in a;
    try {
      var d = !1;
      return f(a, s, function(w, y, b, I) {
        if (!h(b, I)) return w && w[y];
        d = g.own ? w.hasOwnProperty(y) : y in w;
      }), d;
    } catch {
      return !1;
    }
  }, hasOwn: function(a, s, g) {
    return this.has(a, s, g || { own: !0 });
  }, isIn: function(a, s, g) {
    var d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (e(a) != "object" || a === null || s === void 0) return !1;
    try {
      var w = !1, y = !1;
      return f(a, s, function(b, I, R, A) {
        return w = w || b === g || !!b && b[I] === g, y = h(R, A) && e(b) === "object" && I in b, b && b[I];
      }), d.validPath ? w && y : w;
    } catch {
      return !1;
    }
  }, ObjectPrototypeMutationError: p };
}, 47: (n, e, r) => {
  var i = r(410), o = function(a) {
    return typeof a == "string";
  };
  function u(a, s) {
    for (var g = [], d = 0; d < a.length; d++) {
      var w = a[d];
      w && w !== "." && (w === ".." ? g.length && g[g.length - 1] !== ".." ? g.pop() : s && g.push("..") : g.push(w));
    }
    return g;
  }
  var p = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, f = {};
  function h(a) {
    return p.exec(a).slice(1);
  }
  f.resolve = function() {
    for (var a = "", s = !1, g = arguments.length - 1; g >= -1 && !s; g--) {
      var d = g >= 0 ? arguments[g] : We.cwd();
      if (!o(d)) throw new TypeError("Arguments to path.resolve must be strings");
      d && (a = d + "/" + a, s = d.charAt(0) === "/");
    }
    return (s ? "/" : "") + (a = u(a.split("/"), !s).join("/")) || ".";
  }, f.normalize = function(a) {
    var s = f.isAbsolute(a), g = a.substr(-1) === "/";
    return (a = u(a.split("/"), !s).join("/")) || s || (a = "."), a && g && (a += "/"), (s ? "/" : "") + a;
  }, f.isAbsolute = function(a) {
    return a.charAt(0) === "/";
  }, f.join = function() {
    for (var a = "", s = 0; s < arguments.length; s++) {
      var g = arguments[s];
      if (!o(g)) throw new TypeError("Arguments to path.join must be strings");
      g && (a += a ? "/" + g : g);
    }
    return f.normalize(a);
  }, f.relative = function(a, s) {
    function g(A) {
      for (var T = 0; T < A.length && A[T] === ""; T++) ;
      for (var x = A.length - 1; x >= 0 && A[x] === ""; x--) ;
      return T > x ? [] : A.slice(T, x + 1);
    }
    a = f.resolve(a).substr(1), s = f.resolve(s).substr(1);
    for (var d = g(a.split("/")), w = g(s.split("/")), y = Math.min(d.length, w.length), b = y, I = 0; I < y; I++) if (d[I] !== w[I]) {
      b = I;
      break;
    }
    var R = [];
    for (I = b; I < d.length; I++) R.push("..");
    return (R = R.concat(w.slice(b))).join("/");
  }, f._makeLong = function(a) {
    return a;
  }, f.dirname = function(a) {
    var s = h(a), g = s[0], d = s[1];
    return g || d ? (d && (d = d.substr(0, d.length - 1)), g + d) : ".";
  }, f.basename = function(a, s) {
    var g = h(a)[2];
    return s && g.substr(-1 * s.length) === s && (g = g.substr(0, g.length - s.length)), g;
  }, f.extname = function(a) {
    return h(a)[3];
  }, f.format = function(a) {
    if (!i.isObject(a)) throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof a);
    var s = a.root || "";
    if (!o(s)) throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof a.root);
    return (a.dir ? a.dir + f.sep : "") + (a.base || "");
  }, f.parse = function(a) {
    if (!o(a)) throw new TypeError("Parameter 'pathString' must be a string, not " + typeof a);
    var s = h(a);
    if (!s || s.length !== 4) throw new TypeError("Invalid path '" + a + "'");
    return s[1] = s[1] || "", s[2] = s[2] || "", s[3] = s[3] || "", { root: s[0], dir: s[0] + s[1].slice(0, s[1].length - 1), base: s[2], ext: s[3], name: s[2].slice(0, s[2].length - s[3].length) };
  }, f.sep = "/", f.delimiter = ":", n.exports = f;
}, 647: (n, e) => {
  var r = Object.prototype.hasOwnProperty;
  function i(u) {
    try {
      return decodeURIComponent(u.replace(/\+/g, " "));
    } catch {
      return null;
    }
  }
  function o(u) {
    try {
      return encodeURIComponent(u);
    } catch {
      return null;
    }
  }
  e.stringify = function(u, p) {
    p = p || "";
    var f, h, a = [];
    for (h in typeof p != "string" && (p = "?"), u) if (r.call(u, h)) {
      if ((f = u[h]) || f != null && !isNaN(f) || (f = ""), h = o(h), f = o(f), h === null || f === null) continue;
      a.push(h + "=" + f);
    }
    return a.length ? p + a.join("&") : "";
  }, e.parse = function(u) {
    for (var p, f = /([^=?#&]+)=?([^&]*)/g, h = {}; p = f.exec(u); ) {
      var a = i(p[1]), s = i(p[2]);
      a === null || s === null || a in h || (h[a] = s);
    }
    return h;
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
}, 494: (n) => {
  const e = /^[-+]?0x[a-fA-F0-9]+$/, r = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
  !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt), !Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
  const i = { hex: !0, leadingZeros: !0, decimalPoint: ".", eNotation: !0 };
  n.exports = function(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (u = Object.assign({}, i, u), !o || typeof o != "string") return o;
    let p = o.trim();
    if (u.skipLike !== void 0 && u.skipLike.test(p)) return o;
    if (u.hex && e.test(p)) return Number.parseInt(p, 16);
    {
      const h = r.exec(p);
      if (h) {
        const a = h[1], s = h[2];
        let g = ((f = h[3]) && f.indexOf(".") !== -1 && ((f = f.replace(/0+$/, "")) === "." ? f = "0" : f[0] === "." ? f = "0" + f : f[f.length - 1] === "." && (f = f.substr(0, f.length - 1))), f);
        const d = h[4] || h[6];
        if (!u.leadingZeros && s.length > 0 && a && p[2] !== "." || !u.leadingZeros && s.length > 0 && !a && p[1] !== ".") return o;
        {
          const w = Number(p), y = "" + w;
          return y.search(/[eE]/) !== -1 || d ? u.eNotation ? w : o : p.indexOf(".") !== -1 ? y === "0" && g === "" || y === g || a && y === "-" + g ? w : o : s ? g === y || a + g === y ? w : o : p === y || p === a + y ? w : o;
        }
      }
      return o;
    }
    var f;
  };
}, 737: (n, e, r) => {
  var i = r(670), o = r(647), u = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, p = /[\n\r\t]/g, f = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, h = /:\d+$/, a = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, s = /^[a-zA-Z]:/;
  function g(A) {
    return (A || "").toString().replace(u, "");
  }
  var d = [["#", "hash"], ["?", "query"], function(A, T) {
    return b(T.protocol) ? A.replace(/\\/g, "/") : A;
  }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]], w = { hash: 1, query: 1 };
  function y(A) {
    var T, x = (typeof window < "u" ? window : typeof nn < "u" ? nn : typeof self < "u" ? self : {}).location || {}, O = {}, M = typeof (A = A || x);
    if (A.protocol === "blob:") O = new R(unescape(A.pathname), {});
    else if (M === "string") for (T in O = new R(A, {}), w) delete O[T];
    else if (M === "object") {
      for (T in A) T in w || (O[T] = A[T]);
      O.slashes === void 0 && (O.slashes = f.test(A.href));
    }
    return O;
  }
  function b(A) {
    return A === "file:" || A === "ftp:" || A === "http:" || A === "https:" || A === "ws:" || A === "wss:";
  }
  function I(A, T) {
    A = (A = g(A)).replace(p, ""), T = T || {};
    var x, O = a.exec(A), M = O[1] ? O[1].toLowerCase() : "", F = !!O[2], $ = !!O[3], B = 0;
    return F ? $ ? (x = O[2] + O[3] + O[4], B = O[2].length + O[3].length) : (x = O[2] + O[4], B = O[2].length) : $ ? (x = O[3] + O[4], B = O[3].length) : x = O[4], M === "file:" ? B >= 2 && (x = x.slice(2)) : b(M) ? x = O[4] : M ? F && (x = x.slice(2)) : B >= 2 && b(T.protocol) && (x = O[4]), { protocol: M, slashes: F || b(M), slashesCount: B, rest: x };
  }
  function R(A, T, x) {
    if (A = (A = g(A)).replace(p, ""), !(this instanceof R)) return new R(A, T, x);
    var O, M, F, $, B, W, k = d.slice(), j = typeof T, U = this, G = 0;
    for (j !== "object" && j !== "string" && (x = T, T = null), x && typeof x != "function" && (x = o.parse), O = !(M = I(A || "", T = y(T))).protocol && !M.slashes, U.slashes = M.slashes || O && T.slashes, U.protocol = M.protocol || T.protocol || "", A = M.rest, (M.protocol === "file:" && (M.slashesCount !== 2 || s.test(A)) || !M.slashes && (M.protocol || M.slashesCount < 2 || !b(U.protocol))) && (k[3] = [/(.*)/, "pathname"]); G < k.length; G++) typeof ($ = k[G]) != "function" ? (F = $[0], W = $[1], F != F ? U[W] = A : typeof F == "string" ? ~(B = F === "@" ? A.lastIndexOf(F) : A.indexOf(F)) && (typeof $[2] == "number" ? (U[W] = A.slice(0, B), A = A.slice(B + $[2])) : (U[W] = A.slice(B), A = A.slice(0, B))) : (B = F.exec(A)) && (U[W] = B[1], A = A.slice(0, B.index)), U[W] = U[W] || O && $[3] && T[W] || "", $[4] && (U[W] = U[W].toLowerCase())) : A = $(A, U);
    x && (U.query = x(U.query)), O && T.slashes && U.pathname.charAt(0) !== "/" && (U.pathname !== "" || T.pathname !== "") && (U.pathname = function(H, ce) {
      if (H === "") return ce;
      for (var ne = (ce || "/").split("/").slice(0, -1).concat(H.split("/")), te = ne.length, we = ne[te - 1], ge = !1, ie = 0; te--; ) ne[te] === "." ? ne.splice(te, 1) : ne[te] === ".." ? (ne.splice(te, 1), ie++) : ie && (te === 0 && (ge = !0), ne.splice(te, 1), ie--);
      return ge && ne.unshift(""), we !== "." && we !== ".." || ne.push(""), ne.join("/");
    }(U.pathname, T.pathname)), U.pathname.charAt(0) !== "/" && b(U.protocol) && (U.pathname = "/" + U.pathname), i(U.port, U.protocol) || (U.host = U.hostname, U.port = ""), U.username = U.password = "", U.auth && (~(B = U.auth.indexOf(":")) ? (U.username = U.auth.slice(0, B), U.username = encodeURIComponent(decodeURIComponent(U.username)), U.password = U.auth.slice(B + 1), U.password = encodeURIComponent(decodeURIComponent(U.password))) : U.username = encodeURIComponent(decodeURIComponent(U.auth)), U.auth = U.password ? U.username + ":" + U.password : U.username), U.origin = U.protocol !== "file:" && b(U.protocol) && U.host ? U.protocol + "//" + U.host : "null", U.href = U.toString();
  }
  R.prototype = { set: function(A, T, x) {
    var O = this;
    switch (A) {
      case "query":
        typeof T == "string" && T.length && (T = (x || o.parse)(T)), O[A] = T;
        break;
      case "port":
        O[A] = T, i(T, O.protocol) ? T && (O.host = O.hostname + ":" + T) : (O.host = O.hostname, O[A] = "");
        break;
      case "hostname":
        O[A] = T, O.port && (T += ":" + O.port), O.host = T;
        break;
      case "host":
        O[A] = T, h.test(T) ? (T = T.split(":"), O.port = T.pop(), O.hostname = T.join(":")) : (O.hostname = T, O.port = "");
        break;
      case "protocol":
        O.protocol = T.toLowerCase(), O.slashes = !x;
        break;
      case "pathname":
      case "hash":
        if (T) {
          var M = A === "pathname" ? "/" : "#";
          O[A] = T.charAt(0) !== M ? M + T : T;
        } else O[A] = T;
        break;
      case "username":
      case "password":
        O[A] = encodeURIComponent(T);
        break;
      case "auth":
        var F = T.indexOf(":");
        ~F ? (O.username = T.slice(0, F), O.username = encodeURIComponent(decodeURIComponent(O.username)), O.password = T.slice(F + 1), O.password = encodeURIComponent(decodeURIComponent(O.password))) : O.username = encodeURIComponent(decodeURIComponent(T));
    }
    for (var $ = 0; $ < d.length; $++) {
      var B = d[$];
      B[4] && (O[B[1]] = O[B[1]].toLowerCase());
    }
    return O.auth = O.password ? O.username + ":" + O.password : O.username, O.origin = O.protocol !== "file:" && b(O.protocol) && O.host ? O.protocol + "//" + O.host : "null", O.href = O.toString(), O;
  }, toString: function(A) {
    A && typeof A == "function" || (A = o.stringify);
    var T, x = this, O = x.host, M = x.protocol;
    M && M.charAt(M.length - 1) !== ":" && (M += ":");
    var F = M + (x.protocol && x.slashes || b(x.protocol) ? "//" : "");
    return x.username ? (F += x.username, x.password && (F += ":" + x.password), F += "@") : x.password ? (F += ":" + x.password, F += "@") : x.protocol !== "file:" && b(x.protocol) && !O && x.pathname !== "/" && (F += "@"), (O[O.length - 1] === ":" || h.test(x.hostname) && !x.port) && (O += ":"), F += O + x.pathname, (T = typeof x.query == "object" ? A(x.query) : x.query) && (F += T.charAt(0) !== "?" ? "?" + T : T), x.hash && (F += x.hash), F;
  } }, R.extractProtocol = I, R.location = y, R.trimLeft = g, R.qs = o, n.exports = R;
}, 410: () => {
}, 388: () => {
}, 805: () => {
}, 345: () => {
}, 800: () => {
} }, ho = {};
function me(n) {
  var e = ho[n];
  if (e !== void 0) return e.exports;
  var r = ho[n] = { id: n, loaded: !1, exports: {} };
  return Vu[n].call(r.exports, r, r.exports, me), r.loaded = !0, r.exports;
}
me.n = (n) => {
  var e = n && n.__esModule ? () => n.default : () => n;
  return me.d(e, { a: e }), e;
}, me.d = (n, e) => {
  for (var r in e) me.o(e, r) && !me.o(n, r) && Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
}, me.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e), me.nmd = (n) => (n.paths = [], n.children || (n.children = []), n);
var vt = {};
me.d(vt, { hT: () => Ye, O4: () => zt, Kd: () => el, YK: () => tl, UU: () => ac, Gu: () => Ss, ky: () => js, h4: () => tn, ch: () => Pn, hq: () => yr, i5: () => Gs });
var Xu = me(737), qu = me.n(Xu);
function Gn(n) {
  if (!ui(n)) throw new Error("Parameter was not an error");
}
function ui(n) {
  return !!n && typeof n == "object" && (e = n, Object.prototype.toString.call(e) === "[object Error]") || n instanceof Error;
  var e;
}
class Ke extends Error {
  constructor(e, r) {
    const i = [...arguments], { options: o, shortMessage: u } = function(f) {
      let h, a = "";
      if (f.length === 0) h = {};
      else if (ui(f[0])) h = { cause: f[0] }, a = f.slice(1).join(" ") || "";
      else if (f[0] && typeof f[0] == "object") h = Object.assign({}, f[0]), a = f.slice(1).join(" ") || "";
      else {
        if (typeof f[0] != "string") throw new Error("Invalid arguments passed to Layerr");
        h = {}, a = a = f.join(" ") || "";
      }
      return { options: h, shortMessage: a };
    }(i);
    let p = u;
    if (o.cause && (p = `${p}: ${o.cause.message}`), super(p), this.message = p, o.name && typeof o.name == "string" ? this.name = o.name : this.name = "Layerr", o.cause && Object.defineProperty(this, "_cause", { value: o.cause }), Object.defineProperty(this, "_info", { value: {} }), o.info && typeof o.info == "object" && Object.assign(this._info, o.info), Error.captureStackTrace) {
      const f = o.constructorOpt || this.constructor;
      Error.captureStackTrace(this, f);
    }
  }
  static cause(e) {
    return Gn(e), e._cause && ui(e._cause) ? e._cause : null;
  }
  static fullStack(e) {
    Gn(e);
    const r = Ke.cause(e);
    return r ? `${e.stack}
caused by: ${Ke.fullStack(r)}` : e.stack ?? "";
  }
  static info(e) {
    Gn(e);
    const r = {}, i = Ke.cause(e);
    return i && Object.assign(r, Ke.info(i)), e._info && Object.assign(r, e._info), r;
  }
  toString() {
    let e = this.name || this.constructor.name || this.constructor.prototype.name;
    return this.message && (e = `${e}: ${this.message}`), e;
  }
}
var Hu = me(47), En = me.n(Hu);
const po = "__PATH_SEPARATOR_POSIX__", go = "__PATH_SEPARATOR_WINDOWS__";
function Ae(n) {
  try {
    const e = n.replace(/\//g, po).replace(/\\\\/g, go);
    return encodeURIComponent(e).split(go).join("\\\\").split(po).join("/");
  } catch (e) {
    throw new Ke(e, "Failed encoding path");
  }
}
function mo(n) {
  return n.startsWith("/") ? n : "/" + n;
}
function Kr(n) {
  let e = n;
  return e[0] !== "/" && (e = "/" + e), /^.+\/$/.test(e) && (e = e.substr(0, e.length - 1)), e;
}
function Yu(n) {
  let e = new (qu())(n).pathname;
  return e.length <= 0 && (e = "/"), Kr(e);
}
function _e() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
  return function() {
    return function(i) {
      var o = [];
      if (i.length === 0) return "";
      if (typeof i[0] != "string") throw new TypeError("Url must be a string. Received " + i[0]);
      if (i[0].match(/^[^/:]+:\/*$/) && i.length > 1) {
        var u = i.shift();
        i[0] = u + i[0];
      }
      i[0].match(/^file:\/\/\//) ? i[0] = i[0].replace(/^([^/:]+):\/*/, "$1:///") : i[0] = i[0].replace(/^([^/:]+):\/*/, "$1://");
      for (var p = 0; p < i.length; p++) {
        var f = i[p];
        if (typeof f != "string") throw new TypeError("Url must be a string. Received " + f);
        f !== "" && (p > 0 && (f = f.replace(/^[\/]+/, "")), f = p < i.length - 1 ? f.replace(/[\/]+$/, "") : f.replace(/[\/]+$/, "/"), o.push(f));
      }
      var h = o.join("/"), a = (h = h.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
      return a.shift() + (a.length > 0 ? "?" : "") + a.join("&");
    }(typeof arguments[0] == "object" ? arguments[0] : [].slice.call(arguments));
  }(e.reduce((i, o, u) => ((u === 0 || o !== "/" || o === "/" && i[i.length - 1] !== "/") && i.push(o), i), []));
}
var Zu = me(542), Ur = me.n(Zu);
const Ku = "abcdef0123456789";
function yo(n, e) {
  const r = n.url.replace("//", ""), i = r.indexOf("/") == -1 ? "/" : r.slice(r.indexOf("/")), o = n.method ? n.method.toUpperCase() : "GET", u = !!/(^|,)\s*auth\s*($|,)/.test(e.qop) && "auth", p = `00000000${e.nc}`.slice(-8), f = function(d, w, y, b, I, R, A) {
    const T = A || Ur()(`${w}:${y}:${b}`);
    return d && d.toLowerCase() === "md5-sess" ? Ur()(`${T}:${I}:${R}`) : T;
  }(e.algorithm, e.username, e.realm, e.password, e.nonce, e.cnonce, e.ha1), h = Ur()(`${o}:${i}`), a = u ? Ur()(`${f}:${e.nonce}:${p}:${e.cnonce}:${u}:${h}`) : Ur()(`${f}:${e.nonce}:${h}`), s = { username: e.username, realm: e.realm, nonce: e.nonce, uri: i, qop: u, response: a, nc: p, cnonce: e.cnonce, algorithm: e.algorithm, opaque: e.opaque }, g = [];
  for (const d in s) s[d] && (d === "qop" || d === "nc" || d === "algorithm" ? g.push(`${d}=${s[d]}`) : g.push(`${d}="${s[d]}"`));
  return `Digest ${g.join(", ")}`;
}
function Os(n) {
  return (n.headers && n.headers.get("www-authenticate") || "").split(/\s/)[0].toLowerCase() === "digest";
}
var Ju = me(101), Rs = me.n(Ju);
function wo(n) {
  return Rs().decode(n);
}
function Eo(n, e) {
  var r;
  return `Basic ${r = `${n}:${e}`, Rs().encode(r)}`;
}
const vn = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : typeof window < "u" ? window : globalThis, Qu = vn.fetch.bind(vn), el = vn.Request, tl = vn.Response;
let Ye = function(n) {
  return n.Auto = "auto", n.Digest = "digest", n.None = "none", n.Password = "password", n.Token = "token", n;
}({}), zt = function(n) {
  return n.DataTypeNoLength = "data-type-no-length", n.InvalidAuthType = "invalid-auth-type", n.InvalidOutputFormat = "invalid-output-format", n.LinkUnsupportedAuthType = "link-unsupported-auth", n.InvalidUpdateRange = "invalid-update-range", n.NotSupported = "not-supported", n;
}({});
function xs(n, e, r, i, o) {
  switch (n.authType) {
    case Ye.Auto:
      e && r && (n.headers.Authorization = Eo(e, r));
      break;
    case Ye.Digest:
      n.digest = /* @__PURE__ */ function(p, f, h) {
        return { username: p, password: f, ha1: h, nc: 0, algorithm: "md5", hasDigestAuth: !1 };
      }(e, r, o);
      break;
    case Ye.None:
      break;
    case Ye.Password:
      n.headers.Authorization = Eo(e, r);
      break;
    case Ye.Token:
      n.headers.Authorization = `${(u = i).token_type} ${u.access_token}`;
      break;
    default:
      throw new Ke({ info: { code: zt.InvalidAuthType } }, `Invalid auth type: ${n.authType}`);
  }
  var u;
}
me(345), me(800);
const vo = "@@HOTPATCHER", rl = () => {
};
function Wn(n) {
  return { original: n, methods: [n], final: !1 };
}
class nl {
  constructor() {
    this._configuration = { registry: {}, getEmptyAction: "null" }, this.__type__ = vo;
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
    if (!e || e.__type__ !== vo) throw new Error("Failed taking control of target HotPatcher instance: Invalid type or object");
    return Object.keys(e.configuration.registry).forEach((i) => {
      this.configuration.registry.hasOwnProperty(i) ? r && (this.configuration.registry[i] = Object.assign({}, e.configuration.registry[i])) : this.configuration.registry[i] = Object.assign({}, e.configuration.registry[i]);
    }), e._configuration = this.configuration, this;
  }
  execute(e) {
    const r = this.get(e) || rl;
    for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++) o[u - 1] = arguments[u];
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
      for (var i = arguments.length, o = new Array(i), u = 0; u < i; u++) o[u] = arguments[u];
      if (o.length === 0) throw new Error("Failed creating sequence: No functions provided");
      return function() {
        for (var p = arguments.length, f = new Array(p), h = 0; h < p; h++) f[h] = arguments[h];
        let a = f;
        const s = this;
        for (; o.length > 0; ) a = [o.shift().apply(s, a)];
        return a[0];
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
    if (o) this.configuration.registry[e] ? this.configuration.registry[e].methods.push(r) : this.configuration.registry[e] = Wn(r);
    else if (this.isPatched(e)) {
      const { original: u } = this.configuration.registry[e];
      this.configuration.registry[e] = Object.assign(Wn(r), { original: u });
    } else this.configuration.registry[e] = Wn(r);
    return this;
  }
  patchInline(e, r) {
    this.isPatched(e) || this.patch(e, r);
    for (var i = arguments.length, o = new Array(i > 2 ? i - 2 : 0), u = 2; u < i; u++) o[u - 2] = arguments[u];
    return this.execute(e, ...o);
  }
  plugin(e) {
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
    return i.forEach((u) => {
      this.patch(e, u, { chain: !0 });
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
function Ss() {
  return zn || (zn = new nl()), zn;
}
function bn(n) {
  return function(e) {
    if (typeof e != "object" || e === null || Object.prototype.toString.call(e) != "[object Object]") return !1;
    if (Object.getPrototypeOf(e) === null) return !0;
    let r = e;
    for (; Object.getPrototypeOf(r) !== null; ) r = Object.getPrototypeOf(r);
    return Object.getPrototypeOf(e) === r;
  }(n) ? Object.assign({}, n) : Object.setPrototypeOf(Object.assign({}, n), Object.getPrototypeOf(n));
}
function bo() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
  let i = null, o = [...e];
  for (; o.length > 0; ) {
    const u = o.shift();
    i = i ? Ls(i, u) : bn(u);
  }
  return i;
}
function Ls(n, e) {
  const r = bn(n);
  return Object.keys(e).forEach((i) => {
    r.hasOwnProperty(i) ? Array.isArray(e[i]) ? r[i] = Array.isArray(r[i]) ? [...r[i], ...e[i]] : [...e[i]] : typeof e[i] == "object" && e[i] ? r[i] = typeof r[i] == "object" && r[i] ? Ls(r[i], e[i]) : bn(e[i]) : r[i] = e[i] : r[i] = e[i];
  }), r;
}
function il(n) {
  const e = {};
  for (const r of n.keys()) e[r] = n.get(r);
  return e;
}
function li() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
  if (e.length === 0) return {};
  const i = {};
  return e.reduce((o, u) => (Object.keys(u).forEach((p) => {
    const f = p.toLowerCase();
    i.hasOwnProperty(f) ? o[i[f]] = u[p] : (i[f] = p, o[p] = u[p]);
  }), o), {});
}
me(805);
const ol = typeof ArrayBuffer == "function", { toString: sl } = Object.prototype;
function Cs(n) {
  return ol && (n instanceof ArrayBuffer || sl.call(n) === "[object ArrayBuffer]");
}
function Ps(n) {
  return n != null && n.constructor != null && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n);
}
function Ti(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
function ci(n, e, r) {
  return n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n;
}
const $s = Ti(function(n) {
  const e = n._digest;
  return delete n._digest, e.hasDigestAuth && (n = bo(n, { headers: { Authorization: yo(n, e) } })), ci(An(n), function(r) {
    let i = !1;
    return o = function(p) {
      return i ? p : r;
    }, (u = function() {
      if (r.status == 401) return e.hasDigestAuth = function(p, f) {
        if (!Os(p)) return !1;
        const h = /([a-z0-9_-]+)=(?:"([^"]+)"|([a-z0-9_-]+))/gi;
        for (; ; ) {
          const a = p.headers && p.headers.get("www-authenticate") || "", s = h.exec(a);
          if (!s) break;
          f[s[1]] = s[2] || s[3];
        }
        return f.nc += 1, f.cnonce = function() {
          let a = "";
          for (let s = 0; s < 32; ++s) a = `${a}${Ku[Math.floor(16 * Math.random())]}`;
          return a;
        }(), !0;
      }(r, e), function() {
        if (e.hasDigestAuth) return ci(An(n = bo(n, { headers: { Authorization: yo(n, e) } })), function(p) {
          return p.status == 401 ? e.hasDigestAuth = !1 : e.nc++, i = !0, p;
        });
      }();
      e.nc++;
    }()) && u.then ? u.then(o) : o(u);
    var o, u;
  });
}), al = Ti(function(n, e) {
  return ci(An(n), function(r) {
    return r.ok ? (e.authType = Ye.Password, r) : r.status == 401 && Os(r) ? (e.authType = Ye.Digest, xs(e, e.username, e.password, void 0, void 0), n._digest = e.digest, $s(n)) : r;
  });
}), Se = Ti(function(n, e) {
  return e.authType === Ye.Auto ? al(n, e) : n._digest ? $s(n) : An(n);
});
function Le(n, e, r) {
  const i = bn(n);
  return i.headers = li(e.headers, i.headers || {}, r.headers || {}), r.data !== void 0 && (i.data = r.data), r.signal && (i.signal = r.signal), e.httpAgent && (i.httpAgent = e.httpAgent), e.httpsAgent && (i.httpsAgent = e.httpsAgent), e.digest && (i._digest = e.digest), typeof e.withCredentials == "boolean" && (i.withCredentials = e.withCredentials), i;
}
function An(n) {
  const e = Ss();
  return e.patchInline("request", (r) => e.patchInline("fetch", Qu, r.url, function(i) {
    let o = {};
    const u = { method: i.method };
    if (i.headers && (o = li(o, i.headers)), i.data !== void 0) {
      const [p, f] = function(h) {
        if (typeof h == "string") return [h, {}];
        if (Ps(h)) return [h, {}];
        if (Cs(h)) return [h, {}];
        if (h && typeof h == "object") return [JSON.stringify(h), { "content-type": "application/json" }];
        throw new Error("Unable to convert request body: Unexpected body type: " + typeof h);
      }(i.data);
      u.body = p, o = li(o, f);
    }
    return i.signal && (u.signal = i.signal), i.withCredentials && (u.credentials = "include"), u.headers = o, u;
  }(r)), n);
}
var ul = me(285);
const _n = (n) => {
  if (typeof n != "string") throw new TypeError("invalid pattern");
  if (n.length > 65536) throw new TypeError("pattern is too long");
}, ll = { "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", !0], "[:alpha:]": ["\\p{L}\\p{Nl}", !0], "[:ascii:]": ["\\x00-\\x7f", !1], "[:blank:]": ["\\p{Zs}\\t", !0], "[:cntrl:]": ["\\p{Cc}", !0], "[:digit:]": ["\\p{Nd}", !0], "[:graph:]": ["\\p{Z}\\p{C}", !0, !0], "[:lower:]": ["\\p{Ll}", !0], "[:print:]": ["\\p{C}", !0], "[:punct:]": ["\\p{P}", !0], "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", !0], "[:upper:]": ["\\p{Lu}", !0], "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", !0], "[:xdigit:]": ["A-Fa-f0-9", !1] }, Br = (n) => n.replace(/[[\]\\-]/g, "\\$&"), Ao = (n) => n.join(""), cl = (n, e) => {
  const r = e;
  if (n.charAt(r) !== "[") throw new Error("not in a brace expression");
  const i = [], o = [];
  let u = r + 1, p = !1, f = !1, h = !1, a = !1, s = r, g = "";
  e: for (; u < n.length; ) {
    const b = n.charAt(u);
    if (b !== "!" && b !== "^" || u !== r + 1) {
      if (b === "]" && p && !h) {
        s = u + 1;
        break;
      }
      if (p = !0, b !== "\\" || h) {
        if (b === "[" && !h) {
          for (const [I, [R, A, T]] of Object.entries(ll)) if (n.startsWith(I, u)) {
            if (g) return ["$.", !1, n.length - r, !0];
            u += I.length, T ? o.push(R) : i.push(R), f = f || A;
            continue e;
          }
        }
        h = !1, g ? (b > g ? i.push(Br(g) + "-" + Br(b)) : b === g && i.push(Br(b)), g = "", u++) : n.startsWith("-]", u + 1) ? (i.push(Br(b + "-")), u += 2) : n.startsWith("-", u + 1) ? (g = b, u += 2) : (i.push(Br(b)), u++);
      } else h = !0, u++;
    } else a = !0, u++;
  }
  if (s < u) return ["", !1, 0, !1];
  if (!i.length && !o.length) return ["$.", !1, n.length - r, !0];
  if (o.length === 0 && i.length === 1 && /^\\?.$/.test(i[0]) && !a)
    return [(d = i[0].length === 2 ? i[0].slice(-1) : i[0], d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")), !1, s - r, !1];
  var d;
  const w = "[" + (a ? "^" : "") + Ao(i) + "]", y = "[" + (a ? "" : "^") + Ao(o) + "]";
  return [i.length && o.length ? "(" + w + "|" + y + ")" : i.length ? w : y, f, s - r, !0];
}, Xr = function(n) {
  let { windowsPathsNoEscape: e = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return e ? n.replace(/\[([^\/\\])\]/g, "$1") : n.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
}, fl = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), _o = (n) => fl.has(n), Vn = "(?!\\.)", hl = /* @__PURE__ */ new Set(["[", "."]), pl = /* @__PURE__ */ new Set(["..", "."]), dl = new Set("().*{}+?[]^$\\!"), Ni = "[^/]", Io = Ni + "*?", To = Ni + "+?";
var xe, Pe, jt, ve, Re, tr, fr, rr, Pt, hr, Qr, pr, Fs, nr, gn, fi, Ds;
const qe = class qe {
  constructor(e, r) {
    tt(this, pr);
    pe(this, "type");
    tt(this, xe);
    tt(this, Pe);
    tt(this, jt, !1);
    tt(this, ve, []);
    tt(this, Re);
    tt(this, tr);
    tt(this, fr);
    tt(this, rr, !1);
    tt(this, Pt);
    tt(this, hr);
    tt(this, Qr, !1);
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.type = e, e && Te(this, Pe, !0), Te(this, Re, r), Te(this, xe, X(this, Re) ? X(X(this, Re), xe) : this), Te(this, Pt, X(this, xe) === this ? i : X(X(this, xe), Pt)), Te(this, fr, X(this, xe) === this ? [] : X(X(this, xe), fr)), e !== "!" || X(X(this, xe), rr) || X(this, fr).push(this), Te(this, tr, X(this, Re) ? X(X(this, Re), ve).length : 0);
  }
  get hasMagic() {
    if (X(this, Pe) !== void 0) return X(this, Pe);
    for (const e of X(this, ve)) if (typeof e != "string" && (e.type || e.hasMagic)) return Te(this, Pe, !0);
    return X(this, Pe);
  }
  toString() {
    return X(this, hr) !== void 0 ? X(this, hr) : this.type ? Te(this, hr, this.type + "(" + X(this, ve).map((e) => String(e)).join("|") + ")") : Te(this, hr, X(this, ve).map((e) => String(e)).join(""));
  }
  push() {
    for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
    for (const o of r) if (o !== "") {
      if (typeof o != "string" && !(o instanceof qe && X(o, Re) === this)) throw new Error("invalid part: " + o);
      X(this, ve).push(o);
    }
  }
  toJSON() {
    var r;
    const e = this.type === null ? X(this, ve).slice().map((i) => typeof i == "string" ? i : i.toJSON()) : [this.type, ...X(this, ve).map((i) => i.toJSON())];
    return this.isStart() && !this.type && e.unshift([]), this.isEnd() && (this === X(this, xe) || X(X(this, xe), rr) && ((r = X(this, Re)) == null ? void 0 : r.type) === "!") && e.push({}), e;
  }
  isStart() {
    var r;
    if (X(this, xe) === this) return !0;
    if (!((r = X(this, Re)) != null && r.isStart())) return !1;
    if (X(this, tr) === 0) return !0;
    const e = X(this, Re);
    for (let i = 0; i < X(this, tr); i++) {
      const o = X(e, ve)[i];
      if (!(o instanceof qe && o.type === "!")) return !1;
    }
    return !0;
  }
  isEnd() {
    var r, i, o;
    if (X(this, xe) === this || ((r = X(this, Re)) == null ? void 0 : r.type) === "!") return !0;
    if (!((i = X(this, Re)) != null && i.isEnd())) return !1;
    if (!this.type) return (o = X(this, Re)) == null ? void 0 : o.isEnd();
    const e = X(this, Re) ? X(X(this, Re), ve).length : 0;
    return X(this, tr) === e - 1;
  }
  copyIn(e) {
    typeof e == "string" ? this.push(e) : this.push(e.clone(this));
  }
  clone(e) {
    const r = new qe(this.type, e);
    for (const i of X(this, ve)) r.copyIn(i);
    return r;
  }
  static fromGlob(e) {
    var o;
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = new qe(null, void 0, r);
    return Kt(o = qe, nr, gn).call(o, e, i, 0, r), i;
  }
  toMMPattern() {
    if (this !== X(this, xe)) return X(this, xe).toMMPattern();
    const e = this.toString(), [r, i, o, u] = this.toRegExpSource();
    if (!(o || X(this, Pe) || X(this, Pt).nocase && !X(this, Pt).nocaseMagicOnly && e.toUpperCase() !== e.toLowerCase())) return i;
    const p = (X(this, Pt).nocase ? "i" : "") + (u ? "u" : "");
    return Object.assign(new RegExp(`^${r}$`, p), { _src: r, _glob: e });
  }
  get options() {
    return X(this, Pt);
  }
  toRegExpSource(e) {
    var h;
    const r = e ?? !!X(this, Pt).dot;
    if (X(this, xe) === this && Kt(this, pr, Fs).call(this), !this.type) {
      const a = this.isStart() && this.isEnd(), s = X(this, ve).map((w) => {
        var A;
        const [y, b, I, R] = typeof w == "string" ? Kt(A = qe, nr, Ds).call(A, w, X(this, Pe), a) : w.toRegExpSource(e);
        return Te(this, Pe, X(this, Pe) || I), Te(this, jt, X(this, jt) || R), y;
      }).join("");
      let g = "";
      if (this.isStart() && typeof X(this, ve)[0] == "string" && (X(this, ve).length !== 1 || !pl.has(X(this, ve)[0]))) {
        const w = hl, y = r && w.has(s.charAt(0)) || s.startsWith("\\.") && w.has(s.charAt(2)) || s.startsWith("\\.\\.") && w.has(s.charAt(4)), b = !r && !e && w.has(s.charAt(0));
        g = y ? "(?!(?:^|/)\\.\\.?(?:$|/))" : b ? Vn : "";
      }
      let d = "";
      return this.isEnd() && X(X(this, xe), rr) && ((h = X(this, Re)) == null ? void 0 : h.type) === "!" && (d = "(?:$|\\/)"), [g + s + d, Xr(s), Te(this, Pe, !!X(this, Pe)), X(this, jt)];
    }
    const i = this.type === "*" || this.type === "+", o = this.type === "!" ? "(?:(?!(?:" : "(?:";
    let u = Kt(this, pr, fi).call(this, r);
    if (this.isStart() && this.isEnd() && !u && this.type !== "!") {
      const a = this.toString();
      return Te(this, ve, [a]), this.type = null, Te(this, Pe, void 0), [a, Xr(this.toString()), !1, !1];
    }
    let p = !i || e || r ? "" : Kt(this, pr, fi).call(this, !0);
    p === u && (p = ""), p && (u = `(?:${u})(?:${p})*?`);
    let f = "";
    return f = this.type === "!" && X(this, Qr) ? (this.isStart() && !r ? Vn : "") + To : o + u + (this.type === "!" ? "))" + (!this.isStart() || r || e ? "" : Vn) + Io + ")" : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && p ? ")" : this.type === "*" && p ? ")?" : `)${this.type}`), [f, Xr(u), Te(this, Pe, !!X(this, Pe)), X(this, jt)];
  }
};
xe = new WeakMap(), Pe = new WeakMap(), jt = new WeakMap(), ve = new WeakMap(), Re = new WeakMap(), tr = new WeakMap(), fr = new WeakMap(), rr = new WeakMap(), Pt = new WeakMap(), hr = new WeakMap(), Qr = new WeakMap(), pr = new WeakSet(), Fs = function() {
  if (this !== X(this, xe)) throw new Error("should only call on root");
  if (X(this, rr)) return this;
  let e;
  for (this.toString(), Te(this, rr, !0); e = X(this, fr).pop(); ) {
    if (e.type !== "!") continue;
    let r = e, i = X(r, Re);
    for (; i; ) {
      for (let o = X(r, tr) + 1; !i.type && o < X(i, ve).length; o++) for (const u of X(e, ve)) {
        if (typeof u == "string") throw new Error("string part in extglob AST??");
        u.copyIn(X(i, ve)[o]);
      }
      r = i, i = X(r, Re);
    }
  }
  return this;
}, nr = new WeakSet(), gn = function(e, r, i, o) {
  var w, y;
  let u = !1, p = !1, f = -1, h = !1;
  if (r.type === null) {
    let b = i, I = "";
    for (; b < e.length; ) {
      const R = e.charAt(b++);
      if (u || R === "\\") u = !u, I += R;
      else if (p) b === f + 1 ? R !== "^" && R !== "!" || (h = !0) : R !== "]" || b === f + 2 && h || (p = !1), I += R;
      else if (R !== "[") if (o.noext || !_o(R) || e.charAt(b) !== "(") I += R;
      else {
        r.push(I), I = "";
        const A = new qe(R, r);
        b = Kt(w = qe, nr, gn).call(w, e, A, b, o), r.push(A);
      }
      else p = !0, f = b, h = !1, I += R;
    }
    return r.push(I), b;
  }
  let a = i + 1, s = new qe(null, r);
  const g = [];
  let d = "";
  for (; a < e.length; ) {
    const b = e.charAt(a++);
    if (u || b === "\\") u = !u, d += b;
    else if (p) a === f + 1 ? b !== "^" && b !== "!" || (h = !0) : b !== "]" || a === f + 2 && h || (p = !1), d += b;
    else if (b !== "[") if (_o(b) && e.charAt(a) === "(") {
      s.push(d), d = "";
      const I = new qe(b, s);
      s.push(I), a = Kt(y = qe, nr, gn).call(y, e, I, a, o);
    } else if (b !== "|") {
      if (b === ")") return d === "" && X(r, ve).length === 0 && Te(r, Qr, !0), s.push(d), d = "", r.push(...g, s), a;
      d += b;
    } else s.push(d), d = "", g.push(s), s = new qe(null, r);
    else p = !0, f = a, h = !1, d += b;
  }
  return r.type = null, Te(r, Pe, void 0), Te(r, ve, [e.substring(i - 1)]), a;
}, fi = function(e) {
  return X(this, ve).map((r) => {
    if (typeof r == "string") throw new Error("string type in extglob ast??");
    const [i, o, u, p] = r.toRegExpSource(e);
    return Te(this, jt, X(this, jt) || p), i;
  }).filter((r) => !(this.isStart() && this.isEnd() && !r)).join("|");
}, Ds = function(e, r) {
  let i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], o = !1, u = "", p = !1;
  for (let f = 0; f < e.length; f++) {
    const h = e.charAt(f);
    if (o) o = !1, u += (dl.has(h) ? "\\" : "") + h;
    else if (h !== "\\") {
      if (h === "[") {
        const [a, s, g, d] = cl(e, f);
        if (g) {
          u += a, p = p || s, f += g - 1, r = r || d;
          continue;
        }
      }
      h !== "*" ? h !== "?" ? u += h.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : (u += Ni, r = !0) : (u += i && e === "*" ? To : Io, r = !0);
    } else f === e.length - 1 ? u += "\\\\" : o = !0;
  }
  return [u, Xr(e), !!r, p];
}, tt(qe, nr);
let In = qe;
const ze = function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return _n(e), !(!r.nocomment && e.charAt(0) === "#") && new Tn(e, r).match(n);
}, gl = /^\*+([^+@!?\*\[\(]*)$/, ml = (n) => (e) => !e.startsWith(".") && e.endsWith(n), yl = (n) => (e) => e.endsWith(n), wl = (n) => (n = n.toLowerCase(), (e) => !e.startsWith(".") && e.toLowerCase().endsWith(n)), El = (n) => (n = n.toLowerCase(), (e) => e.toLowerCase().endsWith(n)), vl = /^\*+\.\*+$/, bl = (n) => !n.startsWith(".") && n.includes("."), Al = (n) => n !== "." && n !== ".." && n.includes("."), _l = /^\.\*+$/, Il = (n) => n !== "." && n !== ".." && n.startsWith("."), Tl = /^\*+$/, Nl = (n) => n.length !== 0 && !n.startsWith("."), Ol = (n) => n.length !== 0 && n !== "." && n !== "..", Rl = /^\?+([^+@!?\*\[\(]*)?$/, xl = (n) => {
  let [e, r = ""] = n;
  const i = Ms([e]);
  return r ? (r = r.toLowerCase(), (o) => i(o) && o.toLowerCase().endsWith(r)) : i;
}, Sl = (n) => {
  let [e, r = ""] = n;
  const i = ks([e]);
  return r ? (r = r.toLowerCase(), (o) => i(o) && o.toLowerCase().endsWith(r)) : i;
}, Ll = (n) => {
  let [e, r = ""] = n;
  const i = ks([e]);
  return r ? (o) => i(o) && o.endsWith(r) : i;
}, Cl = (n) => {
  let [e, r = ""] = n;
  const i = Ms([e]);
  return r ? (o) => i(o) && o.endsWith(r) : i;
}, Ms = (n) => {
  let [e] = n;
  const r = e.length;
  return (i) => i.length === r && !i.startsWith(".");
}, ks = (n) => {
  let [e] = n;
  const r = e.length;
  return (i) => i.length === r && i !== "." && i !== "..";
}, Us = typeof We == "object" && We ? typeof We.env == "object" && We.env && We.env.__MINIMATCH_TESTING_PLATFORM__ || We.platform : "posix";
ze.sep = Us === "win32" ? "\\" : "/";
const mt = Symbol("globstar **");
ze.GLOBSTAR = mt, ze.filter = function(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return (r) => ze(r, n, e);
};
const dt = function(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Object.assign({}, n, e);
};
ze.defaults = (n) => {
  if (!n || typeof n != "object" || !Object.keys(n).length) return ze;
  const e = ze;
  return Object.assign(function(r, i) {
    return e(r, i, dt(n, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}));
  }, { Minimatch: class extends e.Minimatch {
    constructor(r) {
      super(r, dt(n, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}));
    }
    static defaults(r) {
      return e.defaults(dt(n, r)).Minimatch;
    }
  }, AST: class extends e.AST {
    constructor(r, i) {
      super(r, i, dt(n, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}));
    }
    static fromGlob(r) {
      let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return e.AST.fromGlob(r, dt(n, i));
    }
  }, unescape: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.unescape(r, dt(n, i));
  }, escape: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.escape(r, dt(n, i));
  }, filter: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.filter(r, dt(n, i));
  }, defaults: (r) => e.defaults(dt(n, r)), makeRe: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.makeRe(r, dt(n, i));
  }, braceExpand: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.braceExpand(r, dt(n, i));
  }, match: function(r, i) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return e.match(r, i, dt(n, o));
  }, sep: e.sep, GLOBSTAR: mt });
};
const Bs = function(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return _n(n), e.nobrace || !/\{(?:(?!\{).)*\}/.test(n) ? [n] : ul(n);
};
ze.braceExpand = Bs, ze.makeRe = function(n) {
  return new Tn(n, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).makeRe();
}, ze.match = function(n, e) {
  const r = new Tn(e, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {});
  return n = n.filter((i) => r.match(i)), r.options.nonull && !n.length && n.push(e), n;
};
const No = /[?*]|[+@!]\(.*?\)|\[|\]/;
class Tn {
  constructor(e) {
    pe(this, "options");
    pe(this, "set");
    pe(this, "pattern");
    pe(this, "windowsPathsNoEscape");
    pe(this, "nonegate");
    pe(this, "negate");
    pe(this, "comment");
    pe(this, "empty");
    pe(this, "preserveMultipleSlashes");
    pe(this, "partial");
    pe(this, "globSet");
    pe(this, "globParts");
    pe(this, "nocase");
    pe(this, "isWindows");
    pe(this, "platform");
    pe(this, "windowsNoMagicRoot");
    pe(this, "regexp");
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _n(e), r = r || {}, this.options = r, this.pattern = e, this.platform = r.platform || Us, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!r.windowsPathsNoEscape || r.allowWindowsEscape === !1, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!r.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!r.nonegate, this.comment = !1, this.empty = !1, this.partial = !!r.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = r.windowsNoMagicRoot !== void 0 ? r.windowsNoMagicRoot : !(!this.isWindows || !this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
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
    const i = this.globSet.map((u) => this.slashSplit(u));
    this.globParts = this.preprocess(i), this.debug(this.pattern, this.globParts);
    let o = this.globParts.map((u, p, f) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        const h = !(u[0] !== "" || u[1] !== "" || u[2] !== "?" && No.test(u[2]) || No.test(u[3])), a = /^[a-z]:/i.test(u[0]);
        if (h) return [...u.slice(0, 4), ...u.slice(4).map((s) => this.parse(s))];
        if (a) return [u[0], ...u.slice(1).map((s) => this.parse(s))];
      }
      return u.map((h) => this.parse(h));
    });
    if (this.debug(this.pattern, o), this.set = o.filter((u) => u.indexOf(!1) === -1), this.isWindows) for (let u = 0; u < this.set.length; u++) {
      const p = this.set[u];
      p[0] === "" && p[1] === "" && this.globParts[u][2] === "?" && typeof p[3] == "string" && /^[a-z]:$/i.test(p[3]) && (p[2] = "?");
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
      const u = i[i.length - 1];
      return o === "**" && u === "**" ? i : o === ".." && u && u !== ".." && u !== "." && u !== "**" ? (i.pop(), i) : (i.push(o), i);
    }, [])).length === 0 ? [""] : r);
  }
  levelTwoFileOptimize(e) {
    Array.isArray(e) || (e = this.slashSplit(e));
    let r = !1;
    do {
      if (r = !1, !this.preserveMultipleSlashes) {
        for (let o = 1; o < e.length - 1; o++) {
          const u = e[o];
          o === 1 && u === "" && e[0] === "" || u !== "." && u !== "" || (r = !0, e.splice(o, 1), o--);
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
          let p = o;
          for (; i[p + 1] === "**"; ) p++;
          p > o && i.splice(o + 1, p - o);
          let f = i[o + 1];
          const h = i[o + 2], a = i[o + 3];
          if (f !== ".." || !h || h === "." || h === ".." || !a || a === "." || a === "..") continue;
          r = !0, i.splice(o, 1);
          const s = i.slice(0);
          s[o] = "**", e.push(s), o--;
        }
        if (!this.preserveMultipleSlashes) {
          for (let p = 1; p < i.length - 1; p++) {
            const f = i[p];
            p === 1 && f === "" && i[0] === "" || f !== "." && f !== "" || (r = !0, i.splice(p, 1), p--);
          }
          i[0] !== "." || i.length !== 2 || i[1] !== "." && i[1] !== "" || (r = !0, i.pop());
        }
        let u = 0;
        for (; (u = i.indexOf("..", u + 1)) !== -1; ) {
          const p = i[u - 1];
          if (p && p !== "." && p !== ".." && p !== "**") {
            r = !0;
            const f = u === 1 && i[u + 1] === "**" ? ["."] : [];
            i.splice(u - 1, 2, ...f), i.length === 0 && i.push(""), u -= 2;
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
    let i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], o = 0, u = 0, p = [], f = "";
    for (; o < e.length && u < r.length; ) if (e[o] === r[u]) p.push(f === "b" ? r[u] : e[o]), o++, u++;
    else if (i && e[o] === "**" && r[u] === e[o + 1]) p.push(e[o]), o++;
    else if (i && r[u] === "**" && e[o] === r[u + 1]) p.push(r[u]), u++;
    else if (e[o] !== "*" || !r[u] || !this.options.dot && r[u].startsWith(".") || r[u] === "**") {
      if (r[u] !== "*" || !e[o] || !this.options.dot && e[o].startsWith(".") || e[o] === "**" || f === "a") return !1;
      f = "b", p.push(r[u]), o++, u++;
    } else {
      if (f === "b") return !1;
      f = "a", p.push(e[o]), o++, u++;
    }
    return e.length === r.length && p;
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
      const b = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]), I = !b && e[0] === "" && e[1] === "" && e[2] === "?" && /^[a-z]:$/i.test(e[3]), R = typeof r[0] == "string" && /^[a-z]:$/i.test(r[0]), A = I ? 3 : b ? 0 : void 0, T = !R && r[0] === "" && r[1] === "" && r[2] === "?" && typeof r[3] == "string" && /^[a-z]:$/i.test(r[3]) ? 3 : R ? 0 : void 0;
      if (typeof A == "number" && typeof T == "number") {
        const [x, O] = [e[A], r[T]];
        x.toLowerCase() === O.toLowerCase() && (r[T] = x, T > A ? r = r.slice(T) : A > T && (e = e.slice(A)));
      }
    }
    const { optimizationLevel: u = 1 } = this.options;
    u >= 2 && (e = this.levelTwoFileOptimize(e)), this.debug("matchOne", this, { file: e, pattern: r }), this.debug("matchOne", e.length, r.length);
    for (var p = 0, f = 0, h = e.length, a = r.length; p < h && f < a; p++, f++) {
      this.debug("matchOne loop");
      var s = r[f], g = e[p];
      if (this.debug(r, s, g), s === !1) return !1;
      if (s === mt) {
        this.debug("GLOBSTAR", [r, s, g]);
        var d = p, w = f + 1;
        if (w === a) {
          for (this.debug("** at the end"); p < h; p++) if (e[p] === "." || e[p] === ".." || !o.dot && e[p].charAt(0) === ".") return !1;
          return !0;
        }
        for (; d < h; ) {
          var y = e[d];
          if (this.debug(`
globstar while`, e, d, r, w, y), this.matchOne(e.slice(d), r.slice(w), i)) return this.debug("globstar found match!", d, h, y), !0;
          if (y === "." || y === ".." || !o.dot && y.charAt(0) === ".") {
            this.debug("dot detected!", e, d, r, w);
            break;
          }
          this.debug("globstar swallow a segment, and continue"), d++;
        }
        return !(!i || (this.debug(`
>>> no match, partial?`, e, d, r, w), d !== h));
      }
      let b;
      if (typeof s == "string" ? (b = g === s, this.debug("string match", s, g, b)) : (b = s.test(g), this.debug("pattern match", s, g, b)), !b) return !1;
    }
    if (p === h && f === a) return !0;
    if (p === h) return i;
    if (f === a) return p === h - 1 && e[p] === "";
    throw new Error("wtf?");
  }
  braceExpand() {
    return Bs(this.pattern, this.options);
  }
  parse(e) {
    _n(e);
    const r = this.options;
    if (e === "**") return mt;
    if (e === "") return "";
    let i, o = null;
    (i = e.match(Tl)) ? o = r.dot ? Ol : Nl : (i = e.match(gl)) ? o = (r.nocase ? r.dot ? El : wl : r.dot ? yl : ml)(i[1]) : (i = e.match(Rl)) ? o = (r.nocase ? r.dot ? Sl : xl : r.dot ? Ll : Cl)(i) : (i = e.match(vl)) ? o = r.dot ? Al : bl : (i = e.match(_l)) && (o = Il);
    const u = In.fromGlob(e, this.options).toMMPattern();
    return o && typeof u == "object" && Reflect.defineProperty(u, "test", { value: o }), u;
  }
  makeRe() {
    if (this.regexp || this.regexp === !1) return this.regexp;
    const e = this.set;
    if (!e.length) return this.regexp = !1, this.regexp;
    const r = this.options, i = r.noglobstar ? "[^/]*?" : r.dot ? "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?" : "(?:(?!(?:\\/|^)\\.).)*?", o = new Set(r.nocase ? ["i"] : []);
    let u = e.map((h) => {
      const a = h.map((s) => {
        if (s instanceof RegExp) for (const g of s.flags.split("")) o.add(g);
        return typeof s == "string" ? s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : s === mt ? mt : s._src;
      });
      return a.forEach((s, g) => {
        const d = a[g + 1], w = a[g - 1];
        s === mt && w !== mt && (w === void 0 ? d !== void 0 && d !== mt ? a[g + 1] = "(?:\\/|" + i + "\\/)?" + d : a[g] = i : d === void 0 ? a[g - 1] = w + "(?:\\/|" + i + ")?" : d !== mt && (a[g - 1] = w + "(?:\\/|\\/" + i + "\\/)" + d, a[g + 1] = mt));
      }), a.filter((s) => s !== mt).join("/");
    }).join("|");
    const [p, f] = e.length > 1 ? ["(?:", ")"] : ["", ""];
    u = "^" + p + u + f + "$", this.negate && (u = "^(?!" + u + ").+$");
    try {
      this.regexp = new RegExp(u, [...o].join(""));
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
    const u = this.set;
    this.debug(this.pattern, "set", u);
    let p = o[o.length - 1];
    if (!p) for (let f = o.length - 2; !p && f >= 0; f--) p = o[f];
    for (let f = 0; f < u.length; f++) {
      const h = u[f];
      let a = o;
      if (i.matchBase && h.length === 1 && (a = [p]), this.matchOne(a, h, r)) return !!i.flipNegate || !this.negate;
    }
    return !i.flipNegate && this.negate;
  }
  static defaults(e) {
    return ze.defaults(e).Minimatch;
  }
}
function Oi(n) {
  const e = new Error(`${arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""}Invalid response: ${n.status} ${n.statusText}`);
  return e.status = n.status, e.response = n, e;
}
function Ce(n, e) {
  const { status: r } = e;
  if (r === 401 && n.digest) return e;
  if (r >= 400) throw Oi(e);
  return e;
}
function yr(n, e) {
  return arguments.length > 2 && arguments[2] !== void 0 && arguments[2] ? { data: e, headers: n.headers ? il(n.headers) : {}, status: n.status, statusText: n.statusText } : e;
}
ze.AST = In, ze.Minimatch = Tn, ze.escape = function(n) {
  let { windowsPathsNoEscape: e = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return e ? n.replace(/[?*()[\]]/g, "[$&]") : n.replace(/[?*()[\]\\]/g, "\\$&");
}, ze.unescape = Xr;
const Pl = (Oo = function(n, e, r) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = Le({ url: _e(n.remoteURL, Ae(e)), method: "COPY", headers: { Destination: _e(n.remoteURL, Ae(r)), Overwrite: i.overwrite === !1 ? "F" : "T", Depth: i.shallow ? "0" : "infinity" } }, n, i);
  return p = function(f) {
    Ce(n, f);
  }, (u = Se(o, n)) && u.then || (u = Promise.resolve(u)), p ? u.then(p) : u;
  var u, p;
}, function() {
  for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
  try {
    return Promise.resolve(Oo.apply(this, n));
  } catch (r) {
    return Promise.reject(r);
  }
});
var Oo, Ri = me(635), $l = me(829), Bt = me.n($l), Nr = function(n) {
  return n.Array = "array", n.Object = "object", n.Original = "original", n;
}(Nr || {});
function un(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Nr.Original;
  const i = Bt().get(n, e);
  return r === "array" && Array.isArray(i) === !1 ? [i] : r === "object" && Array.isArray(i) ? i[0] : i;
}
function tn(n) {
  return new Promise((e) => {
    e(function(r) {
      const { multistatus: i } = r;
      if (i === "") return { multistatus: { response: [] } };
      if (!i) throw new Error("Invalid response: No root multistatus found");
      const o = { multistatus: Array.isArray(i) ? i[0] : i };
      return Bt().set(o, "multistatus.response", un(o, "multistatus.response", Nr.Array)), Bt().set(o, "multistatus.response", Bt().get(o, "multistatus.response").map((u) => function(p) {
        const f = Object.assign({}, p);
        return f.status ? Bt().set(f, "status", un(f, "status", Nr.Object)) : (Bt().set(f, "propstat", un(f, "propstat", Nr.Object)), Bt().set(f, "propstat.prop", un(f, "propstat.prop", Nr.Object))), f;
      }(u))), o;
    }(new Ri.XMLParser({ removeNSPrefix: !0, numberParseOptions: { hex: !0, leadingZeros: !1 } }).parse(n)));
  });
}
function Pn(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
  const { getlastmodified: i = null, getcontentlength: o = "0", resourcetype: u = null, getcontenttype: p = null, getetag: f = null } = n, h = u && typeof u == "object" && u.collection !== void 0 ? "directory" : "file", a = { filename: e, basename: En().basename(e), lastmod: i, size: parseInt(o, 10), type: h, etag: typeof f == "string" ? f.replace(/"/g, "") : null };
  return h === "file" && (a.mime = p && typeof p == "string" ? p.split(";")[0] : ""), r && (n.displayname !== void 0 && (n.displayname = String(n.displayname)), a.props = n), a;
}
function js(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], i = null;
  try {
    n.multistatus.response[0].propstat && (i = n.multistatus.response[0]);
  } catch {
  }
  if (!i) throw new Error("Failed getting item stat: bad response");
  const { propstat: { prop: o, status: u } } = i, [p, f, h] = u.split(" ", 3), a = parseInt(f, 10);
  if (a >= 400) {
    const s = new Error(`Invalid response: ${a} ${h}`);
    throw s.status = a, s;
  }
  return Pn(o, Kr(e), r);
}
function Gs(n) {
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
function Xn(n, e, r) {
  return n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n;
}
const xi = /* @__PURE__ */ function(n) {
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
  const { details: i = !1 } = r, o = Le({ url: _e(n.remoteURL, Ae(e)), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, n, r);
  return Xn(Se(o, n), function(u) {
    return Ce(n, u), Xn(u.text(), function(p) {
      return Xn(tn(p), function(f) {
        const h = js(f, e, i);
        return yr(u, h, i);
      });
    });
  });
});
function Ws(n, e, r) {
  return n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n;
}
const Fl = zs(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = function(u) {
    if (!u || u === "/") return [];
    let p = u;
    const f = [];
    do
      f.push(p), p = En().dirname(p);
    while (p && p !== "/");
    return f;
  }(Kr(e));
  i.sort((u, p) => u.length > p.length ? 1 : p.length > u.length ? -1 : 0);
  let o = !1;
  return function(u, p, f) {
    if (typeof u[xo] == "function") {
      let I = function(R) {
        try {
          for (; !(h = g.next()).done; ) if ((R = p(h.value)) && R.then) {
            if (!So(R)) return void R.then(I, s || (s = Ze.bind(null, a = new Or(), 2)));
            R = R.v;
          }
          a ? Ze(a, 1, R) : a = R;
        } catch (A) {
          Ze(a || (a = new Or()), 2, A);
        }
      };
      var b = I, h, a, s, g = u[xo]();
      if (I(), g.return) {
        var d = function(R) {
          try {
            h.done || g.return();
          } catch {
          }
          return R;
        };
        if (a && a.then) return a.then(d, function(R) {
          throw d(R);
        });
        d();
      }
      return a;
    }
    if (!("length" in u)) throw new TypeError("Object is not iterable");
    for (var w = [], y = 0; y < u.length; y++) w.push(u[y]);
    return function(I, R, A) {
      var T, x, O = -1;
      return function M(F) {
        try {
          for (; ++O < I.length && (!A || !A()); ) if ((F = R(O)) && F.then) {
            if (!So(F)) return void F.then(M, x || (x = Ze.bind(null, T = new Or(), 2)));
            F = F.v;
          }
          T ? Ze(T, 1, F) : T = F;
        } catch ($) {
          Ze(T || (T = new Or()), 2, $);
        }
      }(), T;
    }(w, function(I) {
      return p(w[I]);
    }, f);
  }(i, function(u) {
    return p = function() {
      return function(h, a) {
        try {
          var s = Ws(xi(n, u), function(g) {
            if (g.type !== "directory") throw new Error(`Path includes a file: ${e}`);
          });
        } catch (g) {
          return a(g);
        }
        return s && s.then ? s.then(void 0, a) : s;
      }(0, function(h) {
        const a = h;
        return function() {
          if (a.status === 404) return o = !0, Ro(hi(n, u, { ...r, recursive: !1 }));
          throw h;
        }();
      });
    }, (f = function() {
      if (o) return Ro(hi(n, u, { ...r, recursive: !1 }));
    }()) && f.then ? f.then(p) : p();
    var p, f;
  }, function() {
    return !1;
  });
});
function zs(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
function Dl() {
}
function Ro(n, e) {
  return n && n.then ? n.then(Dl) : Promise.resolve();
}
const xo = typeof Symbol < "u" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
function Ze(n, e, r) {
  if (!n.s) {
    if (r instanceof Or) {
      if (!r.s) return void (r.o = Ze.bind(null, n, e));
      1 & e && (e = r.s), r = r.v;
    }
    if (r && r.then) return void r.then(Ze.bind(null, n, e), Ze.bind(null, n, 2));
    n.s = e, n.v = r;
    const i = n.o;
    i && i(n);
  }
}
const Or = function() {
  function n() {
  }
  return n.prototype.then = function(e, r) {
    const i = new n(), o = this.s;
    if (o) {
      const u = 1 & o ? e : r;
      if (u) {
        try {
          Ze(i, 1, u(this.v));
        } catch (p) {
          Ze(i, 2, p);
        }
        return i;
      }
      return this;
    }
    return this.o = function(u) {
      try {
        const p = u.v;
        1 & u.s ? Ze(i, 1, e ? e(p) : p) : r ? Ze(i, 1, r(p)) : Ze(i, 2, p);
      } catch (p) {
        Ze(i, 2, p);
      }
    }, i;
  }, n;
}();
function So(n) {
  return n instanceof Or && 1 & n.s;
}
const hi = zs(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (r.recursive === !0) return Fl(n, e, r);
  const i = Le({ url: _e(n.remoteURL, (o = Ae(e), o.endsWith("/") ? o : o + "/")), method: "MKCOL" }, n, r);
  var o;
  return Ws(Se(i, n), function(u) {
    Ce(n, u);
  });
});
var Ml = me(388), Lo = me.n(Ml);
const kl = /* @__PURE__ */ function(n) {
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
  const o = Le({ url: _e(n.remoteURL, Ae(e)), method: "GET", headers: i }, n, r);
  return p = function(f) {
    if (Ce(n, f), i.Range && f.status !== 206) {
      const h = new Error(`Invalid response code for partial request: ${f.status}`);
      throw h.status = f.status, h;
    }
    return r.callback && setTimeout(() => {
      r.callback(f);
    }, 0), f.body;
  }, (u = Se(o, n)) && u.then || (u = Promise.resolve(u)), p ? u.then(p) : u;
  var u, p;
}), Ul = () => {
}, Bl = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e, r) {
  r.url || (r.url = _e(n.remoteURL, Ae(e)));
  const i = Le(r, n, {});
  return u = function(p) {
    return Ce(n, p), p;
  }, (o = Se(i, n)) && o.then || (o = Promise.resolve(o)), u ? o.then(u) : o;
  var o, u;
}), jl = /* @__PURE__ */ function(n) {
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
  const i = Le({ url: _e(n.remoteURL, Ae(e)), method: "DELETE" }, n, r);
  return u = function(p) {
    Ce(n, p);
  }, (o = Se(i, n)) && o.then || (o = Promise.resolve(o)), u ? o.then(u) : o;
  var o, u;
}), Gl = /* @__PURE__ */ function(n) {
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
      var u = (p = xi(n, e, r), f = function() {
        return !0;
      }, h ? f ? f(p) : p : (p && p.then || (p = Promise.resolve(p)), f ? p.then(f) : p));
    } catch (a) {
      return o(a);
    }
    var p, f, h;
    return u && u.then ? u.then(void 0, o) : u;
  }(0, function(i) {
    if (i.status === 404) return !1;
    throw i;
  });
});
function qn(n, e, r) {
  return n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n;
}
const Wl = /* @__PURE__ */ function(n) {
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
  const i = Le({ url: _e(n.remoteURL, Ae(e), "/"), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: r.deep ? "infinity" : "1" } }, n, r);
  return qn(Se(i, n), function(o) {
    return Ce(n, o), qn(o.text(), function(u) {
      if (!u) throw new Error("Failed parsing directory contents: Empty response");
      return qn(tn(u), function(p) {
        const f = mo(e);
        let h = function(a, s, g) {
          let d = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], w = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
          const y = En().join(s, "/"), { multistatus: { response: b } } = a, I = b.map((R) => {
            const A = function(x) {
              try {
                return x.replace(/^https?:\/\/[^\/]+/, "");
              } catch (O) {
                throw new Ke(O, "Failed normalising HREF");
              }
            }(R.href), { propstat: { prop: T } } = R;
            return Pn(T, y === "/" ? decodeURIComponent(Kr(A)) : Kr(En().relative(decodeURIComponent(y), decodeURIComponent(A))), d);
          });
          return w ? I : I.filter((R) => R.basename && (R.type === "file" || R.filename !== g.replace(/\/$/, "")));
        }(p, mo(n.remoteBasePath || n.remotePath), f, r.details, r.includeSelf);
        return r.glob && (h = function(a, s) {
          return a.filter((g) => ze(g.filename, s, { matchBase: !0 }));
        }(h, r.glob)), yr(o, h, r.details);
      });
    });
  });
});
function Si(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
const zl = Si(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = Le({ url: _e(n.remoteURL, Ae(e)), method: "GET", headers: { Accept: "text/plain" }, transformResponse: [ql] }, n, r);
  return Nn(Se(i, n), function(o) {
    return Ce(n, o), Nn(o.text(), function(u) {
      return yr(o, u, r.details);
    });
  });
});
function Nn(n, e, r) {
  return n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n;
}
const Vl = Si(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = Le({ url: _e(n.remoteURL, Ae(e)), method: "GET" }, n, r);
  return Nn(Se(i, n), function(o) {
    let u;
    return Ce(n, o), function(p, f) {
      var h = p();
      return h && h.then ? h.then(f) : f();
    }(function() {
      return Nn(o.arrayBuffer(), function(p) {
        u = p;
      });
    }, function() {
      return yr(o, u, r.details);
    });
  });
}), Xl = Si(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { format: i = "binary" } = r;
  if (i !== "binary" && i !== "text") throw new Ke({ info: { code: zt.InvalidOutputFormat } }, `Invalid output format: ${i}`);
  return i === "text" ? zl(n, e, r) : Vl(n, e, r);
}), ql = (n) => n;
function Hl(n) {
  return new Ri.XMLBuilder({ attributeNamePrefix: "@_", format: !0, ignoreAttributes: !1, suppressEmptyNode: !0 }).build(Vs({ lockinfo: { "@_xmlns:d": "DAV:", lockscope: { exclusive: {} }, locktype: { write: {} }, owner: { href: n } } }, "d"));
}
function Vs(n, e) {
  const r = { ...n };
  for (const i in r) r.hasOwnProperty(i) && (r[i] && typeof r[i] == "object" && i.indexOf(":") === -1 ? (r[`${e}:${i}`] = Vs(r[i], e), delete r[i]) : /^@_/.test(i) === !1 && (r[`${e}:${i}`] = r[i], delete r[i]));
  return r;
}
function pi(n, e, r) {
  return n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n;
}
function Xs(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
const Yl = Xs(function(n, e, r) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = Le({ url: _e(n.remoteURL, Ae(e)), method: "UNLOCK", headers: { "Lock-Token": r } }, n, i);
  return pi(Se(o, n), function(u) {
    if (Ce(n, u), u.status !== 204 && u.status !== 200) throw Oi(u);
  });
}), Zl = Xs(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { refreshToken: i, timeout: o = Kl } = r, u = { Accept: "text/plain,application/xml", Timeout: o };
  i && (u.If = i);
  const p = Le({ url: _e(n.remoteURL, Ae(e)), method: "LOCK", headers: u, data: Hl(n.contactHref) }, n, r);
  return pi(Se(p, n), function(f) {
    return Ce(n, f), pi(f.text(), function(h) {
      const a = (d = h, new Ri.XMLParser({ removeNSPrefix: !0, parseAttributeValue: !0, parseTagValue: !0 }).parse(d)), s = Bt().get(a, "prop.lockdiscovery.activelock.locktoken.href"), g = Bt().get(a, "prop.lockdiscovery.activelock.timeout");
      var d;
      if (!s) throw Oi(f, "No lock token received: ");
      return { token: s, serverTimeout: g };
    });
  });
}), Kl = "Infinite, Second-4100000000";
function Hn(n, e, r) {
  return n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n;
}
const Jl = /* @__PURE__ */ function(n) {
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
  const r = e.path || "/", i = Le({ url: _e(n.remoteURL, r), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, n, e);
  return Hn(Se(i, n), function(o) {
    return Ce(n, o), Hn(o.text(), function(u) {
      return Hn(tn(u), function(p) {
        const f = function(h) {
          try {
            const [a] = h.multistatus.response, { propstat: { prop: { "quota-used-bytes": s, "quota-available-bytes": g } } } = a;
            return s !== void 0 && g !== void 0 ? { used: parseInt(String(s), 10), available: Gs(g) } : null;
          } catch {
          }
          return null;
        }(p);
        return yr(o, f, e.details);
      });
    });
  });
});
function Yn(n, e, r) {
  return n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n;
}
const Ql = /* @__PURE__ */ function(n) {
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
  const { details: i = !1 } = r, o = Le({ url: _e(n.remoteURL, Ae(e)), method: "SEARCH", headers: { Accept: "text/plain,application/xml", "Content-Type": n.headers["Content-Type"] || "application/xml; charset=utf-8" } }, n, r);
  return Yn(Se(o, n), function(u) {
    return Ce(n, u), Yn(u.text(), function(p) {
      return Yn(tn(p), function(f) {
        const h = function(a, s, g) {
          const d = { truncated: !1, results: [] };
          return d.truncated = a.multistatus.response.some((w) => {
            var y, b;
            return ((b = (w.status || ((y = w.propstat) == null ? void 0 : y.status)).split(" ", 3)) == null ? void 0 : b[1]) === "507" && w.href.replace(/\/$/, "").endsWith(Ae(s).replace(/\/$/, ""));
          }), a.multistatus.response.forEach((w) => {
            if (w.propstat === void 0) return;
            const y = w.href.split("/").map(decodeURIComponent).join("/");
            d.results.push(Pn(w.propstat.prop, y, g));
          }), d;
        }(f, e, i);
        return yr(u, h, i);
      });
    });
  });
}), ec = /* @__PURE__ */ function(n) {
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
  const o = Le({ url: _e(n.remoteURL, Ae(e)), method: "MOVE", headers: { Destination: _e(n.remoteURL, Ae(r)), Overwrite: i.overwrite === !1 ? "F" : "T" } }, n, i);
  return p = function(f) {
    Ce(n, f);
  }, (u = Se(o, n)) && u.then || (u = Promise.resolve(u)), p ? u.then(p) : u;
  var u, p;
});
var tc = me(172);
const rc = /* @__PURE__ */ function(n) {
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
  const { contentLength: o = !0, overwrite: u = !0 } = i, p = { "Content-Type": "application/octet-stream" };
  o === !1 || (p["Content-Length"] = typeof o == "number" ? `${o}` : `${function(s) {
    if (Cs(s)) return s.byteLength;
    if (Ps(s)) return s.length;
    if (typeof s == "string") return (0, tc.d)(s);
    throw new Ke({ info: { code: zt.DataTypeNoLength } }, "Cannot calculate data length: Invalid type");
  }(r)}`), u || (p["If-None-Match"] = "*");
  const f = Le({ url: _e(n.remoteURL, Ae(e)), method: "PUT", headers: p, data: r }, n, i);
  return a = function(s) {
    try {
      Ce(n, s);
    } catch (g) {
      const d = g;
      if (d.status !== 412 || u) throw d;
      return !1;
    }
    return !0;
  }, (h = Se(f, n)) && h.then || (h = Promise.resolve(h)), a ? h.then(a) : h;
  var h, a;
}), qs = /* @__PURE__ */ function(n) {
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
  const i = Le({ url: _e(n.remoteURL, Ae(e)), method: "OPTIONS" }, n, r);
  return u = function(p) {
    try {
      Ce(n, p);
    } catch (f) {
      throw f;
    }
    return { compliance: (p.headers.get("DAV") ?? "").split(",").map((f) => f.trim()), server: p.headers.get("Server") ?? "" };
  }, (o = Se(i, n)) && o.then || (o = Promise.resolve(o)), u ? o.then(u) : o;
  var o, u;
});
function Yr(n, e, r) {
  return n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n;
}
const nc = Li(function(n, e, r, i, o) {
  let u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  if (r > i || r < 0) throw new Ke({ info: { code: zt.InvalidUpdateRange } }, `Invalid update range ${r} for partial update`);
  const p = { "Content-Type": "application/octet-stream", "Content-Length": "" + (i - r + 1), "Content-Range": `bytes ${r}-${i}/*` }, f = Le({ url: _e(n.remoteURL, Ae(e)), method: "PUT", headers: p, data: o }, n, u);
  return Yr(Se(f, n), function(h) {
    Ce(n, h);
  });
});
function Co(n, e) {
  var r = n();
  return r && r.then ? r.then(e) : e(r);
}
const ic = Li(function(n, e, r, i, o) {
  let u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  if (r > i || r < 0) throw new Ke({ info: { code: zt.InvalidUpdateRange } }, `Invalid update range ${r} for partial update`);
  const p = { "Content-Type": "application/x-sabredav-partialupdate", "Content-Length": "" + (i - r + 1), "X-Update-Range": `bytes=${r}-${i}` }, f = Le({ url: _e(n.remoteURL, Ae(e)), method: "PATCH", headers: p, data: o }, n, u);
  return Yr(Se(f, n), function(h) {
    Ce(n, h);
  });
});
function Li(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
const oc = Li(function(n, e, r, i, o) {
  let u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  return Yr(qs(n, e, u), function(p) {
    let f = !1;
    return Co(function() {
      if (p.compliance.includes("sabredav-partialupdate")) return Yr(ic(n, e, r, i, o, u), function(h) {
        return f = !0, h;
      });
    }, function(h) {
      let a = !1;
      return f ? h : Co(function() {
        if (p.server.includes("Apache") && p.compliance.includes("<http://apache.org/dav/propset/fs/1>")) return Yr(nc(n, e, r, i, o, u), function(s) {
          return a = !0, s;
        });
      }, function(s) {
        if (a) return s;
        throw new Ke({ info: { code: zt.NotSupported } }, "Not supported");
      });
    });
  });
}), sc = "https://github.com/perry-mitchell/webdav-client/blob/master/LOCK_CONTACT.md";
function ac(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { authType: r = null, remoteBasePath: i, contactHref: o = sc, ha1: u, headers: p = {}, httpAgent: f, httpsAgent: h, password: a, token: s, username: g, withCredentials: d } = e;
  let w = r;
  w || (w = g || a ? Ye.Password : Ye.None);
  const y = { authType: w, remoteBasePath: i, contactHref: o, ha1: u, headers: Object.assign({}, p), httpAgent: f, httpsAgent: h, password: a, remotePath: Yu(n), remoteURL: n, token: s, username: g, withCredentials: d };
  return xs(y, g, a, s, u), { copyFile: (b, I, R) => Pl(y, b, I, R), createDirectory: (b, I) => hi(y, b, I), createReadStream: (b, I) => function(R, A) {
    let T = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const x = new (Lo()).PassThrough();
    return kl(R, A, T).then((O) => {
      O.pipe(x);
    }).catch((O) => {
      x.emit("error", O);
    }), x;
  }(y, b, I), createWriteStream: (b, I, R) => function(A, T) {
    let x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, O = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Ul;
    const M = new (Lo()).PassThrough(), F = {};
    x.overwrite === !1 && (F["If-None-Match"] = "*");
    const $ = Le({ url: _e(A.remoteURL, Ae(T)), method: "PUT", headers: F, data: M, maxRedirects: 0 }, A, x);
    return Se($, A).then((B) => Ce(A, B)).then((B) => {
      setTimeout(() => {
        O(B);
      }, 0);
    }).catch((B) => {
      M.emit("error", B);
    }), M;
  }(y, b, I, R), customRequest: (b, I) => Bl(y, b, I), deleteFile: (b, I) => jl(y, b, I), exists: (b, I) => Gl(y, b, I), getDirectoryContents: (b, I) => Wl(y, b, I), getFileContents: (b, I) => Xl(y, b, I), getFileDownloadLink: (b) => function(I, R) {
    let A = _e(I.remoteURL, Ae(R));
    const T = /^https:/i.test(A) ? "https" : "http";
    switch (I.authType) {
      case Ye.None:
        break;
      case Ye.Password: {
        const x = wo(I.headers.Authorization.replace(/^Basic /i, "").trim());
        A = A.replace(/^https?:\/\//, `${T}://${x}@`);
        break;
      }
      default:
        throw new Ke({ info: { code: zt.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${I.authType}`);
    }
    return A;
  }(y, b), getFileUploadLink: (b) => function(I, R) {
    let A = `${_e(I.remoteURL, Ae(R))}?Content-Type=application/octet-stream`;
    const T = /^https:/i.test(A) ? "https" : "http";
    switch (I.authType) {
      case Ye.None:
        break;
      case Ye.Password: {
        const x = wo(I.headers.Authorization.replace(/^Basic /i, "").trim());
        A = A.replace(/^https?:\/\//, `${T}://${x}@`);
        break;
      }
      default:
        throw new Ke({ info: { code: zt.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${I.authType}`);
    }
    return A;
  }(y, b), getHeaders: () => Object.assign({}, y.headers), getQuota: (b) => Jl(y, b), lock: (b, I) => Zl(y, b, I), moveFile: (b, I, R) => ec(y, b, I, R), putFileContents: (b, I, R) => rc(y, b, I, R), partialUpdateFileContents: (b, I, R, A, T) => oc(y, b, I, R, A, T), getDAVCompliance: (b) => qs(y, b), search: (b, I) => Ql(y, b, I), setHeaders: (b) => {
    y.headers = Object.assign({}, b);
  }, stat: (b, I) => xi(y, b, I), unlock: (b, I, R) => Yl(y, b, I, R) };
}
vt.hT;
vt.O4;
vt.Kd;
vt.YK;
var uc = vt.UU, lc = vt.Gu;
vt.ky;
vt.h4;
vt.ch;
vt.hq;
vt.i5;
function Hs(n, e, r) {
  const i = document.querySelector(`#initial-state-${n}-${e}`);
  if (i === null)
    return r;
  try {
    return JSON.parse(atob(i.value));
  } catch {
    throw new Error(`Could not parse initial state ${e} of ${n}`);
  }
}
function Ci() {
  return Hs("files_sharing", "isPublic", null) ?? document.querySelector(
    'input#isPublic[type="hidden"][name="isPublic"][value="1"]'
  ) !== null;
}
function cc() {
  var n;
  return Hs("files_sharing", "sharingToken", null) ?? ((n = document.querySelector('input#sharingToken[type="hidden"]')) == null ? void 0 : n.value) ?? null;
}
/*! @license DOMPurify 3.1.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.6/LICENSE */
const {
  entries: Ys,
  setPrototypeOf: Po,
  isFrozen: fc,
  getPrototypeOf: hc,
  getOwnPropertyDescriptor: pc
} = Object;
let {
  freeze: Je,
  seal: Et,
  create: Zs
} = Object, {
  apply: di,
  construct: gi
} = typeof Reflect < "u" && Reflect;
Je || (Je = function(e) {
  return e;
});
Et || (Et = function(e) {
  return e;
});
di || (di = function(e, r, i) {
  return e.apply(r, i);
});
gi || (gi = function(e, r) {
  return new e(...r);
});
const ln = lt(Array.prototype.forEach), $o = lt(Array.prototype.pop), jr = lt(Array.prototype.push), mn = lt(String.prototype.toLowerCase), Zn = lt(String.prototype.toString), Fo = lt(String.prototype.match), Gr = lt(String.prototype.replace), dc = lt(String.prototype.indexOf), gc = lt(String.prototype.trim), At = lt(Object.prototype.hasOwnProperty), Xe = lt(RegExp.prototype.test), Wr = mc(TypeError);
function lt(n) {
  return function(e) {
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      i[o - 1] = arguments[o];
    return di(n, e, i);
  };
}
function mc(n) {
  return function() {
    for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
      r[i] = arguments[i];
    return gi(n, r);
  };
}
function ae(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : mn;
  Po && Po(n, null);
  let i = e.length;
  for (; i--; ) {
    let o = e[i];
    if (typeof o == "string") {
      const u = r(o);
      u !== o && (fc(e) || (e[i] = u), o = u);
    }
    n[o] = !0;
  }
  return n;
}
function yc(n) {
  for (let e = 0; e < n.length; e++)
    At(n, e) || (n[e] = null);
  return n;
}
function ur(n) {
  const e = Zs(null);
  for (const [r, i] of Ys(n))
    At(n, r) && (Array.isArray(i) ? e[r] = yc(i) : i && typeof i == "object" && i.constructor === Object ? e[r] = ur(i) : e[r] = i);
  return e;
}
function zr(n, e) {
  for (; n !== null; ) {
    const i = pc(n, e);
    if (i) {
      if (i.get)
        return lt(i.get);
      if (typeof i.value == "function")
        return lt(i.value);
    }
    n = hc(n);
  }
  function r() {
    return null;
  }
  return r;
}
const Do = Je(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Kn = Je(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Jn = Je(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), wc = Je(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Qn = Je(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Ec = Je(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Mo = Je(["#text"]), ko = Je(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ei = Je(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Uo = Je(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), cn = Je(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), vc = Et(/\{\{[\w\W]*|[\w\W]*\}\}/gm), bc = Et(/<%[\w\W]*|[\w\W]*%>/gm), Ac = Et(/\${[\w\W]*}/gm), _c = Et(/^data-[\-\w.\u00B7-\uFFFF]/), Ic = Et(/^aria-[\-\w]+$/), Ks = Et(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Tc = Et(/^(?:\w+script|data):/i), Nc = Et(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Js = Et(/^html$/i), Oc = Et(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Bo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: vc,
  ERB_EXPR: bc,
  TMPLIT_EXPR: Ac,
  DATA_ATTR: _c,
  ARIA_ATTR: Ic,
  IS_ALLOWED_URI: Ks,
  IS_SCRIPT_OR_DATA: Tc,
  ATTR_WHITESPACE: Nc,
  DOCTYPE_NAME: Js,
  CUSTOM_ELEMENT: Oc
});
const Vr = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, Rc = function() {
  return typeof window > "u" ? null : window;
}, xc = function(e, r) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let i = null;
  const o = "data-tt-policy-suffix";
  r && r.hasAttribute(o) && (i = r.getAttribute(o));
  const u = "dompurify" + (i ? "#" + i : "");
  try {
    return e.createPolicy(u, {
      createHTML(p) {
        return p;
      },
      createScriptURL(p) {
        return p;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + u + " could not be created."), null;
  }
};
function Qs() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Rc();
  const e = (K) => Qs(K);
  if (e.version = "3.1.6", e.removed = [], !n || !n.document || n.document.nodeType !== Vr.document)
    return e.isSupported = !1, e;
  let {
    document: r
  } = n;
  const i = r, o = i.currentScript, {
    DocumentFragment: u,
    HTMLTemplateElement: p,
    Node: f,
    Element: h,
    NodeFilter: a,
    NamedNodeMap: s = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: g,
    DOMParser: d,
    trustedTypes: w
  } = n, y = h.prototype, b = zr(y, "cloneNode"), I = zr(y, "remove"), R = zr(y, "nextSibling"), A = zr(y, "childNodes"), T = zr(y, "parentNode");
  if (typeof p == "function") {
    const K = r.createElement("template");
    K.content && K.content.ownerDocument && (r = K.content.ownerDocument);
  }
  let x, O = "";
  const {
    implementation: M,
    createNodeIterator: F,
    createDocumentFragment: $,
    getElementsByTagName: B
  } = r, {
    importNode: W
  } = i;
  let k = {};
  e.isSupported = typeof Ys == "function" && typeof T == "function" && M && M.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: j,
    ERB_EXPR: U,
    TMPLIT_EXPR: G,
    DATA_ATTR: H,
    ARIA_ATTR: ce,
    IS_SCRIPT_OR_DATA: ne,
    ATTR_WHITESPACE: te,
    CUSTOM_ELEMENT: we
  } = Bo;
  let {
    IS_ALLOWED_URI: ge
  } = Bo, ie = null;
  const $e = ae({}, [...Do, ...Kn, ...Jn, ...Qn, ...Mo]);
  let ue = null;
  const fe = ae({}, [...ko, ...ei, ...Uo, ...cn]);
  let Q = Object.seal(Zs(null, {
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
  })), nt = null, _t = null, Mt = !0, qt = !0, It = !1, ct = !0, it = !1, Tt = !0, ft = !1, Ht = !1, ht = !1, Qe = !1, kt = !1, Yt = !1, pt = !0, sr = !1;
  const wr = "user-content-";
  let Zt = !0, Z = !1, Ee = {}, E = null;
  const _ = ae({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let S = null;
  const P = ae({}, ["audio", "video", "img", "source", "image", "track"]);
  let m = null;
  const l = ae({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), c = "http://www.w3.org/1998/Math/MathML", v = "http://www.w3.org/2000/svg", N = "http://www.w3.org/1999/xhtml";
  let L = N, D = !1, V = null;
  const J = ae({}, [c, v, N], Zn);
  let re = null;
  const oe = ["application/xhtml+xml", "text/html"], le = "text/html";
  let Ie = null, Er = null;
  const ua = r.createElement("form"), Di = function(C) {
    return C instanceof RegExp || C instanceof Function;
  }, Dn = function() {
    let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Er && Er === C)) {
      if ((!C || typeof C != "object") && (C = {}), C = ur(C), re = // eslint-disable-next-line unicorn/prefer-includes
      oe.indexOf(C.PARSER_MEDIA_TYPE) === -1 ? le : C.PARSER_MEDIA_TYPE, Ie = re === "application/xhtml+xml" ? Zn : mn, ie = At(C, "ALLOWED_TAGS") ? ae({}, C.ALLOWED_TAGS, Ie) : $e, ue = At(C, "ALLOWED_ATTR") ? ae({}, C.ALLOWED_ATTR, Ie) : fe, V = At(C, "ALLOWED_NAMESPACES") ? ae({}, C.ALLOWED_NAMESPACES, Zn) : J, m = At(C, "ADD_URI_SAFE_ATTR") ? ae(
        ur(l),
        // eslint-disable-line indent
        C.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        Ie
        // eslint-disable-line indent
      ) : l, S = At(C, "ADD_DATA_URI_TAGS") ? ae(
        ur(P),
        // eslint-disable-line indent
        C.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        Ie
        // eslint-disable-line indent
      ) : P, E = At(C, "FORBID_CONTENTS") ? ae({}, C.FORBID_CONTENTS, Ie) : _, nt = At(C, "FORBID_TAGS") ? ae({}, C.FORBID_TAGS, Ie) : {}, _t = At(C, "FORBID_ATTR") ? ae({}, C.FORBID_ATTR, Ie) : {}, Ee = At(C, "USE_PROFILES") ? C.USE_PROFILES : !1, Mt = C.ALLOW_ARIA_ATTR !== !1, qt = C.ALLOW_DATA_ATTR !== !1, It = C.ALLOW_UNKNOWN_PROTOCOLS || !1, ct = C.ALLOW_SELF_CLOSE_IN_ATTR !== !1, it = C.SAFE_FOR_TEMPLATES || !1, Tt = C.SAFE_FOR_XML !== !1, ft = C.WHOLE_DOCUMENT || !1, Qe = C.RETURN_DOM || !1, kt = C.RETURN_DOM_FRAGMENT || !1, Yt = C.RETURN_TRUSTED_TYPE || !1, ht = C.FORCE_BODY || !1, pt = C.SANITIZE_DOM !== !1, sr = C.SANITIZE_NAMED_PROPS || !1, Zt = C.KEEP_CONTENT !== !1, Z = C.IN_PLACE || !1, ge = C.ALLOWED_URI_REGEXP || Ks, L = C.NAMESPACE || N, Q = C.CUSTOM_ELEMENT_HANDLING || {}, C.CUSTOM_ELEMENT_HANDLING && Di(C.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Q.tagNameCheck = C.CUSTOM_ELEMENT_HANDLING.tagNameCheck), C.CUSTOM_ELEMENT_HANDLING && Di(C.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Q.attributeNameCheck = C.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), C.CUSTOM_ELEMENT_HANDLING && typeof C.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Q.allowCustomizedBuiltInElements = C.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), it && (qt = !1), kt && (Qe = !0), Ee && (ie = ae({}, Mo), ue = [], Ee.html === !0 && (ae(ie, Do), ae(ue, ko)), Ee.svg === !0 && (ae(ie, Kn), ae(ue, ei), ae(ue, cn)), Ee.svgFilters === !0 && (ae(ie, Jn), ae(ue, ei), ae(ue, cn)), Ee.mathMl === !0 && (ae(ie, Qn), ae(ue, Uo), ae(ue, cn))), C.ADD_TAGS && (ie === $e && (ie = ur(ie)), ae(ie, C.ADD_TAGS, Ie)), C.ADD_ATTR && (ue === fe && (ue = ur(ue)), ae(ue, C.ADD_ATTR, Ie)), C.ADD_URI_SAFE_ATTR && ae(m, C.ADD_URI_SAFE_ATTR, Ie), C.FORBID_CONTENTS && (E === _ && (E = ur(E)), ae(E, C.FORBID_CONTENTS, Ie)), Zt && (ie["#text"] = !0), ft && ae(ie, ["html", "head", "body"]), ie.table && (ae(ie, ["tbody"]), delete nt.tbody), C.TRUSTED_TYPES_POLICY) {
        if (typeof C.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Wr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof C.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Wr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        x = C.TRUSTED_TYPES_POLICY, O = x.createHTML("");
      } else
        x === void 0 && (x = xc(w, o)), x !== null && typeof O == "string" && (O = x.createHTML(""));
      Je && Je(C), Er = C;
    }
  }, Mi = ae({}, ["mi", "mo", "mn", "ms", "mtext"]), ki = ae({}, ["foreignobject", "annotation-xml"]), la = ae({}, ["title", "style", "font", "a", "script"]), Ui = ae({}, [...Kn, ...Jn, ...wc]), Bi = ae({}, [...Qn, ...Ec]), ca = function(C) {
    let z = T(C);
    (!z || !z.tagName) && (z = {
      namespaceURI: L,
      tagName: "template"
    });
    const Y = mn(C.tagName), ye = mn(z.tagName);
    return V[C.namespaceURI] ? C.namespaceURI === v ? z.namespaceURI === N ? Y === "svg" : z.namespaceURI === c ? Y === "svg" && (ye === "annotation-xml" || Mi[ye]) : !!Ui[Y] : C.namespaceURI === c ? z.namespaceURI === N ? Y === "math" : z.namespaceURI === v ? Y === "math" && ki[ye] : !!Bi[Y] : C.namespaceURI === N ? z.namespaceURI === v && !ki[ye] || z.namespaceURI === c && !Mi[ye] ? !1 : !Bi[Y] && (la[Y] || !Ui[Y]) : !!(re === "application/xhtml+xml" && V[C.namespaceURI]) : !1;
  }, Nt = function(C) {
    jr(e.removed, {
      element: C
    });
    try {
      T(C).removeChild(C);
    } catch {
      I(C);
    }
  }, rn = function(C, z) {
    try {
      jr(e.removed, {
        attribute: z.getAttributeNode(C),
        from: z
      });
    } catch {
      jr(e.removed, {
        attribute: null,
        from: z
      });
    }
    if (z.removeAttribute(C), C === "is" && !ue[C])
      if (Qe || kt)
        try {
          Nt(z);
        } catch {
        }
      else
        try {
          z.setAttribute(C, "");
        } catch {
        }
  }, ji = function(C) {
    let z = null, Y = null;
    if (ht)
      C = "<remove></remove>" + C;
    else {
      const Fe = Fo(C, /^[\r\n\t ]+/);
      Y = Fe && Fe[0];
    }
    re === "application/xhtml+xml" && L === N && (C = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + C + "</body></html>");
    const ye = x ? x.createHTML(C) : C;
    if (L === N)
      try {
        z = new d().parseFromString(ye, re);
      } catch {
      }
    if (!z || !z.documentElement) {
      z = M.createDocument(L, "template", null);
      try {
        z.documentElement.innerHTML = D ? O : ye;
      } catch {
      }
    }
    const Be = z.body || z.documentElement;
    return C && Y && Be.insertBefore(r.createTextNode(Y), Be.childNodes[0] || null), L === N ? B.call(z, ft ? "html" : "body")[0] : ft ? z.documentElement : Be;
  }, Gi = function(C) {
    return F.call(
      C.ownerDocument || C,
      C,
      // eslint-disable-next-line no-bitwise
      a.SHOW_ELEMENT | a.SHOW_COMMENT | a.SHOW_TEXT | a.SHOW_PROCESSING_INSTRUCTION | a.SHOW_CDATA_SECTION,
      null
    );
  }, Wi = function(C) {
    return C instanceof g && (typeof C.nodeName != "string" || typeof C.textContent != "string" || typeof C.removeChild != "function" || !(C.attributes instanceof s) || typeof C.removeAttribute != "function" || typeof C.setAttribute != "function" || typeof C.namespaceURI != "string" || typeof C.insertBefore != "function" || typeof C.hasChildNodes != "function");
  }, zi = function(C) {
    return typeof f == "function" && C instanceof f;
  }, Ut = function(C, z, Y) {
    k[C] && ln(k[C], (ye) => {
      ye.call(e, z, Y, Er);
    });
  }, Vi = function(C) {
    let z = null;
    if (Ut("beforeSanitizeElements", C, null), Wi(C))
      return Nt(C), !0;
    const Y = Ie(C.nodeName);
    if (Ut("uponSanitizeElement", C, {
      tagName: Y,
      allowedTags: ie
    }), C.hasChildNodes() && !zi(C.firstElementChild) && Xe(/<[/\w]/g, C.innerHTML) && Xe(/<[/\w]/g, C.textContent) || C.nodeType === Vr.progressingInstruction || Tt && C.nodeType === Vr.comment && Xe(/<[/\w]/g, C.data))
      return Nt(C), !0;
    if (!ie[Y] || nt[Y]) {
      if (!nt[Y] && qi(Y) && (Q.tagNameCheck instanceof RegExp && Xe(Q.tagNameCheck, Y) || Q.tagNameCheck instanceof Function && Q.tagNameCheck(Y)))
        return !1;
      if (Zt && !E[Y]) {
        const ye = T(C) || C.parentNode, Be = A(C) || C.childNodes;
        if (Be && ye) {
          const Fe = Be.length;
          for (let et = Fe - 1; et >= 0; --et) {
            const Ot = b(Be[et], !0);
            Ot.__removalCount = (C.__removalCount || 0) + 1, ye.insertBefore(Ot, R(C));
          }
        }
      }
      return Nt(C), !0;
    }
    return C instanceof h && !ca(C) || (Y === "noscript" || Y === "noembed" || Y === "noframes") && Xe(/<\/no(script|embed|frames)/i, C.innerHTML) ? (Nt(C), !0) : (it && C.nodeType === Vr.text && (z = C.textContent, ln([j, U, G], (ye) => {
      z = Gr(z, ye, " ");
    }), C.textContent !== z && (jr(e.removed, {
      element: C.cloneNode()
    }), C.textContent = z)), Ut("afterSanitizeElements", C, null), !1);
  }, Xi = function(C, z, Y) {
    if (pt && (z === "id" || z === "name") && (Y in r || Y in ua))
      return !1;
    if (!(qt && !_t[z] && Xe(H, z))) {
      if (!(Mt && Xe(ce, z))) {
        if (!ue[z] || _t[z]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(qi(C) && (Q.tagNameCheck instanceof RegExp && Xe(Q.tagNameCheck, C) || Q.tagNameCheck instanceof Function && Q.tagNameCheck(C)) && (Q.attributeNameCheck instanceof RegExp && Xe(Q.attributeNameCheck, z) || Q.attributeNameCheck instanceof Function && Q.attributeNameCheck(z)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            z === "is" && Q.allowCustomizedBuiltInElements && (Q.tagNameCheck instanceof RegExp && Xe(Q.tagNameCheck, Y) || Q.tagNameCheck instanceof Function && Q.tagNameCheck(Y)))
          ) return !1;
        } else if (!m[z]) {
          if (!Xe(ge, Gr(Y, te, ""))) {
            if (!((z === "src" || z === "xlink:href" || z === "href") && C !== "script" && dc(Y, "data:") === 0 && S[C])) {
              if (!(It && !Xe(ne, Gr(Y, te, "")))) {
                if (Y)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, qi = function(C) {
    return C !== "annotation-xml" && Fo(C, we);
  }, Hi = function(C) {
    Ut("beforeSanitizeAttributes", C, null);
    const {
      attributes: z
    } = C;
    if (!z)
      return;
    const Y = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ue
    };
    let ye = z.length;
    for (; ye--; ) {
      const Be = z[ye], {
        name: Fe,
        namespaceURI: et,
        value: Ot
      } = Be, Dr = Ie(Fe);
      let Ve = Fe === "value" ? Ot : gc(Ot);
      if (Y.attrName = Dr, Y.attrValue = Ve, Y.keepAttr = !0, Y.forceKeepAttr = void 0, Ut("uponSanitizeAttribute", C, Y), Ve = Y.attrValue, Tt && Xe(/((--!?|])>)|<\/(style|title)/i, Ve)) {
        rn(Fe, C);
        continue;
      }
      if (Y.forceKeepAttr || (rn(Fe, C), !Y.keepAttr))
        continue;
      if (!ct && Xe(/\/>/i, Ve)) {
        rn(Fe, C);
        continue;
      }
      it && ln([j, U, G], (Zi) => {
        Ve = Gr(Ve, Zi, " ");
      });
      const Yi = Ie(C.nodeName);
      if (Xi(Yi, Dr, Ve)) {
        if (sr && (Dr === "id" || Dr === "name") && (rn(Fe, C), Ve = wr + Ve), x && typeof w == "object" && typeof w.getAttributeType == "function" && !et)
          switch (w.getAttributeType(Yi, Dr)) {
            case "TrustedHTML": {
              Ve = x.createHTML(Ve);
              break;
            }
            case "TrustedScriptURL": {
              Ve = x.createScriptURL(Ve);
              break;
            }
          }
        try {
          et ? C.setAttributeNS(et, Fe, Ve) : C.setAttribute(Fe, Ve), Wi(C) ? Nt(C) : $o(e.removed);
        } catch {
        }
      }
    }
    Ut("afterSanitizeAttributes", C, null);
  }, fa = function K(C) {
    let z = null;
    const Y = Gi(C);
    for (Ut("beforeSanitizeShadowDOM", C, null); z = Y.nextNode(); )
      Ut("uponSanitizeShadowNode", z, null), !Vi(z) && (z.content instanceof u && K(z.content), Hi(z));
    Ut("afterSanitizeShadowDOM", C, null);
  };
  return e.sanitize = function(K) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, z = null, Y = null, ye = null, Be = null;
    if (D = !K, D && (K = "<!-->"), typeof K != "string" && !zi(K))
      if (typeof K.toString == "function") {
        if (K = K.toString(), typeof K != "string")
          throw Wr("dirty is not a string, aborting");
      } else
        throw Wr("toString is not a function");
    if (!e.isSupported)
      return K;
    if (Ht || Dn(C), e.removed = [], typeof K == "string" && (Z = !1), Z) {
      if (K.nodeName) {
        const Ot = Ie(K.nodeName);
        if (!ie[Ot] || nt[Ot])
          throw Wr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (K instanceof f)
      z = ji("<!---->"), Y = z.ownerDocument.importNode(K, !0), Y.nodeType === Vr.element && Y.nodeName === "BODY" || Y.nodeName === "HTML" ? z = Y : z.appendChild(Y);
    else {
      if (!Qe && !it && !ft && // eslint-disable-next-line unicorn/prefer-includes
      K.indexOf("<") === -1)
        return x && Yt ? x.createHTML(K) : K;
      if (z = ji(K), !z)
        return Qe ? null : Yt ? O : "";
    }
    z && ht && Nt(z.firstChild);
    const Fe = Gi(Z ? K : z);
    for (; ye = Fe.nextNode(); )
      Vi(ye) || (ye.content instanceof u && fa(ye.content), Hi(ye));
    if (Z)
      return K;
    if (Qe) {
      if (kt)
        for (Be = $.call(z.ownerDocument); z.firstChild; )
          Be.appendChild(z.firstChild);
      else
        Be = z;
      return (ue.shadowroot || ue.shadowrootmode) && (Be = W.call(i, Be, !0)), Be;
    }
    let et = ft ? z.outerHTML : z.innerHTML;
    return ft && ie["!doctype"] && z.ownerDocument && z.ownerDocument.doctype && z.ownerDocument.doctype.name && Xe(Js, z.ownerDocument.doctype.name) && (et = "<!DOCTYPE " + z.ownerDocument.doctype.name + `>
` + et), it && ln([j, U, G], (Ot) => {
      et = Gr(et, Ot, " ");
    }), x && Yt ? x.createHTML(et) : et;
  }, e.setConfig = function() {
    let K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Dn(K), Ht = !0;
  }, e.clearConfig = function() {
    Er = null, Ht = !1;
  }, e.isValidAttribute = function(K, C, z) {
    Er || Dn({});
    const Y = Ie(K), ye = Ie(C);
    return Xi(Y, ye, z);
  }, e.addHook = function(K, C) {
    typeof C == "function" && (k[K] = k[K] || [], jr(k[K], C));
  }, e.removeHook = function(K) {
    if (k[K])
      return $o(k[K]);
  }, e.removeHooks = function(K) {
    k[K] && (k[K] = []);
  }, e.removeAllHooks = function() {
    k = {};
  }, e;
}
Qs();
const Jr = $u().setApp("@nextcloud/files").detectUser().build();
class Sc {
  constructor() {
    pe(this, "_entries", []);
  }
  registerEntry(e) {
    this.validateEntry(e), e.category = e.category ?? 1, this._entries.push(e);
  }
  unregisterEntry(e) {
    const r = typeof e == "string" ? this.getEntryIndex(e) : this.getEntryIndex(e.id);
    if (r === -1) {
      Jr.warn("Entry not found, nothing removed", { entry: e, entries: this.getEntries() });
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
const Lc = function() {
  return typeof window._nc_newfilemenu > "u" && (window._nc_newfilemenu = new Sc(), Jr.debug("NewFileMenu initialized")), window._nc_newfilemenu;
};
var ea = /* @__PURE__ */ ((n) => (n.DEFAULT = "default", n.HIDDEN = "hidden", n))(ea || {});
const jo = function(n) {
  if (typeof window._nc_fileactions > "u" && (window._nc_fileactions = [], Jr.debug("FileActions initialized")), window._nc_fileactions.find((e) => e.id === n.id)) {
    Jr.error(`FileAction ${n.id} already registered`, { action: n });
    return;
  }
  window._nc_fileactions.push(n);
};
var ke = /* @__PURE__ */ ((n) => (n[n.NONE = 0] = "NONE", n[n.CREATE = 4] = "CREATE", n[n.READ = 1] = "READ", n[n.UPDATE = 2] = "UPDATE", n[n.DELETE = 8] = "DELETE", n[n.SHARE = 16] = "SHARE", n[n.ALL = 31] = "ALL", n))(ke || {});
const Cc = [
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
], Pc = {
  d: "DAV:",
  nc: "http://nextcloud.org/ns",
  oc: "http://owncloud.org/ns",
  ocs: "http://open-collaboration-services.org/ns"
}, $c = function() {
  return typeof window._nc_dav_properties > "u" && (window._nc_dav_properties = [...Cc]), window._nc_dav_properties.map((n) => `<${n} />`).join(" ");
}, Fc = function() {
  return typeof window._nc_dav_namespaces > "u" && (window._nc_dav_namespaces = { ...Pc }), Object.keys(window._nc_dav_namespaces).map((n) => {
    var e;
    return `xmlns:${n}="${(e = window._nc_dav_namespaces) == null ? void 0 : e[n]}"`;
  }).join(" ");
}, Dc = function() {
  return `<?xml version="1.0"?>
		<d:propfind ${Fc()}>
			<d:prop>
				${$c()}
			</d:prop>
		</d:propfind>`;
}, Mc = function(n = "") {
  let e = ke.NONE;
  return n && ((n.includes("C") || n.includes("K")) && (e |= ke.CREATE), n.includes("G") && (e |= ke.READ), (n.includes("W") || n.includes("N") || n.includes("V")) && (e |= ke.UPDATE), n.includes("D") && (e |= ke.DELETE), n.includes("R") && (e |= ke.SHARE)), e;
};
var Pi = /* @__PURE__ */ ((n) => (n.Folder = "folder", n.File = "file", n))(Pi || {});
const ta = function(n, e) {
  return n.match(e) !== null;
}, Go = (n, e) => {
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
  if ("permissions" in n && n.permissions !== void 0 && !(typeof n.permissions == "number" && n.permissions >= ke.NONE && n.permissions <= ke.ALL))
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
  if (n.root && ta(n.source, e)) {
    const r = n.source.match(e)[0];
    if (!n.source.includes(ar.join(r, n.root)))
      throw new Error("The root must be relative to the service. e.g /files/emma");
  }
  if (n.status && !Object.values($i).includes(n.status))
    throw new Error("Status must be a valid NodeStatus");
};
var $i = /* @__PURE__ */ ((n) => (n.NEW = "new", n.FAILED = "failed", n.LOADING = "loading", n.LOCKED = "locked", n))($i || {});
class $n {
  constructor(e, r) {
    pe(this, "_data");
    pe(this, "_attributes");
    pe(this, "_knownDavService", /(remote|public)\.php\/(web)?dav/i);
    pe(this, "readonlyAttributes", Object.entries(Object.getOwnPropertyDescriptors($n.prototype)).filter((e) => typeof e[1].get == "function" && e[0] !== "__proto__").map((e) => e[0]));
    pe(this, "handler", {
      set: (e, r, i) => this.readonlyAttributes.includes(r) ? !1 : Reflect.set(e, r, i),
      deleteProperty: (e, r) => this.readonlyAttributes.includes(r) ? !1 : Reflect.deleteProperty(e, r),
      // TODO: This is deprecated and only needed for files v3
      get: (e, r, i) => this.readonlyAttributes.includes(r) ? (Jr.warn(`Accessing "Node.attributes.${r}" is deprecated, access it directly on the Node instance.`), Reflect.get(this, r)) : Reflect.get(e, r, i)
    });
    var i;
    Go(e, r || this._knownDavService), this._data = {
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
    return e + Du(this.source.slice(e.length));
  }
  /**
   * Get this object name
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get basename() {
    return ar.basename(this.source);
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
    this._data.displayname = e;
  }
  /**
   * Get this object's extension
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get extension() {
    return ar.extname(this.source);
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
      this.isDavRessource && (r = r.split(this._knownDavService).pop());
      const i = r.indexOf(this.root), o = this.root.replace(/\/$/, "");
      return ar.dirname(r.slice(i + o.length) || "/");
    }
    const e = new URL(this.source);
    return ar.dirname(e.pathname);
  }
  /**
   * Get the file mime
   * There is no setter as the mime is not meant to be changed
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
   * Set the file modification time
   */
  set mtime(e) {
    this._data.mtime = e;
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
    this.updateMtime(), this._data.size = e;
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
    return this.owner === null && !this.isDavRessource ? ke.READ : this._data.permissions !== void 0 ? this._data.permissions : ke.NONE;
  }
  /**
   * Set the file permissions
   */
  set permissions(e) {
    this.updateMtime(), this._data.permissions = e;
  }
  /**
   * Get the file owner
   * There is no setter as the owner is not meant to be changed
   */
  get owner() {
    return this.isDavRessource ? this._data.owner : null;
  }
  /**
   * Is this a dav-related ressource ?
   */
  get isDavRessource() {
    return ta(this.source, this._knownDavService);
  }
  /**
   * Get the dav root of this object
   * There is no setter as the root is not meant to be changed
   */
  get root() {
    return this._data.root ? this._data.root.replace(/^(.+)\/$/, "$1") : this.isDavRessource && ar.dirname(this.source).split(this._knownDavService).pop() || null;
  }
  /**
   * Get the absolute path of this object relative to the root
   */
  get path() {
    if (this.root) {
      let e = this.source;
      this.isDavRessource && (e = e.split(this._knownDavService).pop());
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
    this._data.status = e;
  }
  /**
   * Move the node to a new destination
   *
   * @param {string} destination the new source.
   * e.g. https://cloud.domain.com/remote.php/dav/files/emma/Photos/picture.jpg
   */
  move(e) {
    Go({ ...this._data, source: e }, this._knownDavService);
    const r = this.basename;
    this._data.source = e, this.displayname === r && this.basename !== r && (this.displayname = this.basename), this.updateMtime();
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
    this.move(ar.dirname(this.source) + "/" + e);
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
class kc extends $n {
  get type() {
    return Pi.File;
  }
}
class Uc extends $n {
  constructor(e) {
    super({
      ...e,
      mime: "httpd/unix-directory"
    });
  }
  get type() {
    return Pi.Folder;
  }
  get extension() {
    return null;
  }
  get mime() {
    return "httpd/unix-directory";
  }
}
function Bc() {
  var n;
  return Ci() ? `/files/${cc()}` : `/files/${(n = Ai()) == null ? void 0 : n.uid}`;
}
const ra = Bc();
function jc() {
  const n = ku("dav");
  return Ci() ? n.replace("remote.php", "public.php") : n;
}
const na = jc(), Gc = function(n = na, e = {}) {
  const r = uc(n, { headers: e });
  function i(u) {
    r.setHeaders({
      ...e,
      // Add this so the server knows it is an request from the browser
      "X-Requested-With": "XMLHttpRequest",
      // Inject user auth
      requesttoken: u ?? ""
    });
  }
  return Tu(i), i(Iu()), lc().patch("fetch", (u, p) => {
    const f = p.headers;
    return f != null && f.method && (p.method = f.method, delete f.method), fetch(u, p);
  }), r;
}, Wc = function(n, e = ra, r = na) {
  var a, s;
  let i = (a = Ai()) == null ? void 0 : a.uid;
  if (Ci())
    i = i ?? "anonymous";
  else if (!i)
    throw new Error("No user id found");
  const o = n.props, u = Mc(o == null ? void 0 : o.permissions), p = String((o == null ? void 0 : o["owner-id"]) || i), f = o.fileid || 0, h = {
    id: f,
    source: `${r}${n.filename}`,
    mtime: new Date(Date.parse(n.lastmod)),
    mime: n.mime || "application/octet-stream",
    // Manually cast to work around for https://github.com/perry-mitchell/webdav-client/pull/380
    displayname: o.displayname !== void 0 ? String(o.displayname) : void 0,
    size: (o == null ? void 0 : o.size) || Number.parseInt(o.getcontentlength || "0"),
    // The fileid is set to -1 for failed requests
    status: f < 0 ? $i.FAILED : void 0,
    permissions: u,
    owner: p,
    root: e,
    attributes: {
      ...n,
      ...o,
      hasPreview: o == null ? void 0 : o["has-preview"]
    }
  };
  return (s = h.attributes) == null || delete s.props, n.type === "file" ? new kc(h) : new Uc(h);
};
var zc = {};
(function(n) {
  const e = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", r = e + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", i = "[" + e + "][" + r + "]*", o = new RegExp("^" + i + "$"), u = function(f, h) {
    const a = [];
    let s = h.exec(f);
    for (; s; ) {
      const g = [];
      g.startIndex = h.lastIndex - s[0].length;
      const d = s.length;
      for (let w = 0; w < d; w++)
        g.push(s[w]);
      a.push(g), s = h.exec(f);
    }
    return a;
  }, p = function(f) {
    const h = o.exec(f);
    return !(h === null || typeof h > "u");
  };
  n.isExist = function(f) {
    return typeof f < "u";
  }, n.isEmptyObject = function(f) {
    return Object.keys(f).length === 0;
  }, n.merge = function(f, h, a) {
    if (h) {
      const s = Object.keys(h), g = s.length;
      for (let d = 0; d < g; d++)
        a === "strict" ? f[s[d]] = [h[s[d]]] : f[s[d]] = h[s[d]];
    }
  }, n.getValue = function(f) {
    return n.isExist(f) ? f : "";
  }, n.isName = p, n.getAllMatches = u, n.nameRegexp = i;
})(zc);
!Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt);
!Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
const Vc = typeof We == "object" && We.env && We.env.NODE_DEBUG && /\bsemver\b/i.test(We.env.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
};
var Xc = Vc;
const qc = "2.0.0", ia = 256, Hc = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, Yc = 16, Zc = ia - 6, Kc = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var Jc = {
  MAX_LENGTH: ia,
  MAX_SAFE_COMPONENT_LENGTH: Yc,
  MAX_SAFE_BUILD_LENGTH: Zc,
  MAX_SAFE_INTEGER: Hc,
  RELEASE_TYPES: Kc,
  SEMVER_SPEC_VERSION: qc,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
}, Wo = { exports: {} };
(function(n, e) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: r,
    MAX_SAFE_BUILD_LENGTH: i,
    MAX_LENGTH: o
  } = Jc, u = Xc;
  e = n.exports = {};
  const p = e.re = [], f = e.safeRe = [], h = e.src = [], a = e.t = {};
  let s = 0;
  const g = "[a-zA-Z0-9-]", d = [
    ["\\s", 1],
    ["\\d", o],
    [g, i]
  ], w = (b) => {
    for (const [I, R] of d)
      b = b.split(`${I}*`).join(`${I}{0,${R}}`).split(`${I}+`).join(`${I}{1,${R}}`);
    return b;
  }, y = (b, I, R) => {
    const A = w(I), T = s++;
    u(b, T, I), a[b] = T, h[T] = I, p[T] = new RegExp(I, R ? "g" : void 0), f[T] = new RegExp(A, R ? "g" : void 0);
  };
  y("NUMERICIDENTIFIER", "0|[1-9]\\d*"), y("NUMERICIDENTIFIERLOOSE", "\\d+"), y("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${g}*`), y("MAINVERSION", `(${h[a.NUMERICIDENTIFIER]})\\.(${h[a.NUMERICIDENTIFIER]})\\.(${h[a.NUMERICIDENTIFIER]})`), y("MAINVERSIONLOOSE", `(${h[a.NUMERICIDENTIFIERLOOSE]})\\.(${h[a.NUMERICIDENTIFIERLOOSE]})\\.(${h[a.NUMERICIDENTIFIERLOOSE]})`), y("PRERELEASEIDENTIFIER", `(?:${h[a.NUMERICIDENTIFIER]}|${h[a.NONNUMERICIDENTIFIER]})`), y("PRERELEASEIDENTIFIERLOOSE", `(?:${h[a.NUMERICIDENTIFIERLOOSE]}|${h[a.NONNUMERICIDENTIFIER]})`), y("PRERELEASE", `(?:-(${h[a.PRERELEASEIDENTIFIER]}(?:\\.${h[a.PRERELEASEIDENTIFIER]})*))`), y("PRERELEASELOOSE", `(?:-?(${h[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${h[a.PRERELEASEIDENTIFIERLOOSE]})*))`), y("BUILDIDENTIFIER", `${g}+`), y("BUILD", `(?:\\+(${h[a.BUILDIDENTIFIER]}(?:\\.${h[a.BUILDIDENTIFIER]})*))`), y("FULLPLAIN", `v?${h[a.MAINVERSION]}${h[a.PRERELEASE]}?${h[a.BUILD]}?`), y("FULL", `^${h[a.FULLPLAIN]}$`), y("LOOSEPLAIN", `[v=\\s]*${h[a.MAINVERSIONLOOSE]}${h[a.PRERELEASELOOSE]}?${h[a.BUILD]}?`), y("LOOSE", `^${h[a.LOOSEPLAIN]}$`), y("GTLT", "((?:<|>)?=?)"), y("XRANGEIDENTIFIERLOOSE", `${h[a.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), y("XRANGEIDENTIFIER", `${h[a.NUMERICIDENTIFIER]}|x|X|\\*`), y("XRANGEPLAIN", `[v=\\s]*(${h[a.XRANGEIDENTIFIER]})(?:\\.(${h[a.XRANGEIDENTIFIER]})(?:\\.(${h[a.XRANGEIDENTIFIER]})(?:${h[a.PRERELEASE]})?${h[a.BUILD]}?)?)?`), y("XRANGEPLAINLOOSE", `[v=\\s]*(${h[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${h[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${h[a.XRANGEIDENTIFIERLOOSE]})(?:${h[a.PRERELEASELOOSE]})?${h[a.BUILD]}?)?)?`), y("XRANGE", `^${h[a.GTLT]}\\s*${h[a.XRANGEPLAIN]}$`), y("XRANGELOOSE", `^${h[a.GTLT]}\\s*${h[a.XRANGEPLAINLOOSE]}$`), y("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), y("COERCE", `${h[a.COERCEPLAIN]}(?:$|[^\\d])`), y("COERCEFULL", h[a.COERCEPLAIN] + `(?:${h[a.PRERELEASE]})?(?:${h[a.BUILD]})?(?:$|[^\\d])`), y("COERCERTL", h[a.COERCE], !0), y("COERCERTLFULL", h[a.COERCEFULL], !0), y("LONETILDE", "(?:~>?)"), y("TILDETRIM", `(\\s*)${h[a.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", y("TILDE", `^${h[a.LONETILDE]}${h[a.XRANGEPLAIN]}$`), y("TILDELOOSE", `^${h[a.LONETILDE]}${h[a.XRANGEPLAINLOOSE]}$`), y("LONECARET", "(?:\\^)"), y("CARETTRIM", `(\\s*)${h[a.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", y("CARET", `^${h[a.LONECARET]}${h[a.XRANGEPLAIN]}$`), y("CARETLOOSE", `^${h[a.LONECARET]}${h[a.XRANGEPLAINLOOSE]}$`), y("COMPARATORLOOSE", `^${h[a.GTLT]}\\s*(${h[a.LOOSEPLAIN]})$|^$`), y("COMPARATOR", `^${h[a.GTLT]}\\s*(${h[a.FULLPLAIN]})$|^$`), y("COMPARATORTRIM", `(\\s*)${h[a.GTLT]}\\s*(${h[a.LOOSEPLAIN]}|${h[a.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", y("HYPHENRANGE", `^\\s*(${h[a.XRANGEPLAIN]})\\s+-\\s+(${h[a.XRANGEPLAIN]})\\s*$`), y("HYPHENRANGELOOSE", `^\\s*(${h[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${h[a.XRANGEPLAINLOOSE]})\\s*$`), y("STAR", "(<|>)?=?\\s*\\*"), y("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), y("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(Wo, Wo.exports);
const Qc = function(n) {
  return Lc().registerEntry(n);
};
function zo(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "You are about to visit:") + ""
  ), i, o, u, p, f = (
    /*file*/
    n[0].url + ""
  ), h, a, s;
  return {
    c() {
      e = se("p"), i = Ue(r), o = be(), u = se("em"), p = se("a"), h = Ue(f), q(p, "href", a = He(
        /*file*/
        n[0].url
      )), q(p, "target", s = /*file*/
      n[0].sameWindow ? "_self" : "_blank"), q(e, "class", "urldisplay");
    },
    m(g, d) {
      de(g, e, d), ee(e, i), ee(e, o), ee(e, u), ee(u, p), ee(p, h);
    },
    p(g, d) {
      d & /*file*/
      1 && f !== (f = /*file*/
      g[0].url + "") && yi(h, f), d & /*file*/
      1 && a !== (a = He(
        /*file*/
        g[0].url
      )) && q(p, "href", a), d & /*file*/
      1 && s !== (s = /*file*/
      g[0].sameWindow ? "_self" : "_blank") && q(p, "target", s);
    },
    d(g) {
      g && he(e);
    }
  };
}
function Vo(n) {
  let e = wt.userCanEdit() || /*file*/
  n[0].permissions >= ke.UPDATE, r, i, o = (
    /*t*/
    n[2]("files_linkeditor", "Visit link") + ""
  ), u, p, f, h = e && Xo(n);
  return {
    c() {
      h && h.c(), r = be(), i = se("a"), u = Ue(o), q(i, "href", p = He(
        /*file*/
        n[0].url
      )), q(i, "target", f = /*file*/
      n[0].sameWindow ? "_self" : "_blank"), q(i, "class", "button primary");
    },
    m(a, s) {
      h && h.m(a, s), de(a, r, s), de(a, i, s), ee(i, u);
    },
    p(a, s) {
      s & /*file*/
      1 && (e = wt.userCanEdit() || /*file*/
      a[0].permissions >= ke.UPDATE), e ? h ? h.p(a, s) : (h = Xo(a), h.c(), h.m(r.parentNode, r)) : h && (h.d(1), h = null), s & /*file*/
      1 && p !== (p = He(
        /*file*/
        a[0].url
      )) && q(i, "href", p), s & /*file*/
      1 && f !== (f = /*file*/
      a[0].sameWindow ? "_self" : "_blank") && q(i, "target", f);
    },
    d(a) {
      a && (he(r), he(i)), h && h.d(a);
    }
  };
}
function Xo(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Edit link") + ""
  ), i, o, u;
  return {
    c() {
      e = se("a"), i = Ue(r), q(e, "href", window.location.href), q(e, "class", "button");
    },
    m(p, f) {
      de(p, e, f), ee(e, i), o || (u = rt(e, "click", Wt(
        /*click_handler_1*/
        n[4]
      )), o = !0);
    },
    p: Dt,
    d(p) {
      p && he(e), o = !1, u();
    }
  };
}
function ef(n) {
  let e, r, i = (
    /*file*/
    n[0].name + ""
  ), o, u, p, f, h, a = (
    /*t*/
    n[2]("files_linkeditor", "Cancel") + ""
  ), s, g, d, w, y = !/*loading*/
  n[1] && zo(n), b = !/*loading*/
  n[1] && Vo(n);
  return {
    c() {
      e = se("div"), r = se("h3"), o = Ue(i), u = be(), y && y.c(), p = be(), f = se("div"), h = se("a"), s = Ue(a), g = be(), b && b.c(), q(e, "class", "edit push-bottom"), q(h, "href", window.location.href), q(h, "class", "button"), q(f, "class", "oc-dialog-buttonrow twobuttons");
    },
    m(I, R) {
      de(I, e, R), ee(e, r), ee(r, o), ee(e, u), y && y.m(e, null), de(I, p, R), de(I, f, R), ee(f, h), ee(h, s), ee(f, g), b && b.m(f, null), d || (w = rt(h, "click", Wt(
        /*click_handler*/
        n[3]
      )), d = !0);
    },
    p(I, R) {
      R & /*file*/
      1 && i !== (i = /*file*/
      I[0].name + "") && yi(o, i), /*loading*/
      I[1] ? y && (y.d(1), y = null) : y ? y.p(I, R) : (y = zo(I), y.c(), y.m(e, null)), /*loading*/
      I[1] ? b && (b.d(1), b = null) : b ? b.p(I, R) : (b = Vo(I), b.c(), b.m(f, null));
    },
    d(I) {
      I && (he(e), he(p), he(f)), y && y.d(), b && b.d(), d = !1, w();
    }
  };
}
function tf(n) {
  let e, r;
  return e = new Ei({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [ef] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Pr(e.$$.fragment);
    },
    m(i, o) {
      gr(e, i, o), r = !0;
    },
    p(i, [o]) {
      const u = {};
      o & /*loading*/
      2 && (u.loading = /*loading*/
      i[1]), o & /*$$scope, file, loading*/
      67 && (u.$$scope = { dirty: o, ctx: i }), e.$set(u);
    },
    i(i) {
      r || (Me(e.$$.fragment, i), r = !0);
    },
    o(i) {
      at(e.$$.fragment, i), r = !1;
    },
    d(i) {
      mr(e, i);
    }
  };
}
function rf(n, e, r) {
  let i, o;
  const u = window.t;
  let p;
  On(() => {
    p = Ft.subscribe(async (a) => {
      if (r(0, i = a), i && i.isLoaded) {
        if (r(1, o = !1), !i.url) {
          OC.dialogs.alert(u("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."), u("files_linkeditor", "A slight problem"));
          return;
        }
        i.skipConfirmation && i.sameWindow && (window.location.href = i.url, ut.update(() => "none"));
      }
    });
  }), Rn(() => {
    p();
  });
  const f = () => {
    ut.update(() => "none");
  }, h = () => {
    ut.update(() => "edit");
  };
  return r(0, i = wt.getFileConfig()), r(1, o = !0), [i, o, u, f, h];
}
class nf extends Fr {
  constructor(e) {
    super(), $r(this, e, rf, tf, dr, {});
  }
}
var oa = { exports: {} };
(function(n) {
  var e = function(r) {
    var i = 1e7, o = 7, u = 9007199254740992, p = y(u), f = "0123456789abcdefghijklmnopqrstuvwxyz", h = typeof BigInt == "function";
    function a(E, _, S, P) {
      return typeof E > "u" ? a[0] : typeof _ < "u" ? +_ == 10 && !S ? Z(E) : Qe(E, _, S, P) : Z(E);
    }
    function s(E, _) {
      this.value = E, this.sign = _, this.isSmall = !1;
    }
    s.prototype = Object.create(a.prototype);
    function g(E) {
      this.value = E, this.sign = E < 0, this.isSmall = !0;
    }
    g.prototype = Object.create(a.prototype);
    function d(E) {
      this.value = E;
    }
    d.prototype = Object.create(a.prototype);
    function w(E) {
      return -u < E && E < u;
    }
    function y(E) {
      return E < 1e7 ? [E] : E < 1e14 ? [E % 1e7, Math.floor(E / 1e7)] : [E % 1e7, Math.floor(E / 1e7) % 1e7, Math.floor(E / 1e14)];
    }
    function b(E) {
      I(E);
      var _ = E.length;
      if (_ < 4 && ge(E, p) < 0)
        switch (_) {
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
    function I(E) {
      for (var _ = E.length; E[--_] === 0; ) ;
      E.length = _ + 1;
    }
    function R(E) {
      for (var _ = new Array(E), S = -1; ++S < E; )
        _[S] = 0;
      return _;
    }
    function A(E) {
      return E > 0 ? Math.floor(E) : Math.ceil(E);
    }
    function T(E, _) {
      var S = E.length, P = _.length, m = new Array(S), l = 0, c = i, v, N;
      for (N = 0; N < P; N++)
        v = E[N] + _[N] + l, l = v >= c ? 1 : 0, m[N] = v - l * c;
      for (; N < S; )
        v = E[N] + l, l = v === c ? 1 : 0, m[N++] = v - l * c;
      return l > 0 && m.push(l), m;
    }
    function x(E, _) {
      return E.length >= _.length ? T(E, _) : T(_, E);
    }
    function O(E, _) {
      var S = E.length, P = new Array(S), m = i, l, c;
      for (c = 0; c < S; c++)
        l = E[c] - m + _, _ = Math.floor(l / m), P[c] = l - _ * m, _ += 1;
      for (; _ > 0; )
        P[c++] = _ % m, _ = Math.floor(_ / m);
      return P;
    }
    s.prototype.add = function(E) {
      var _ = Z(E);
      if (this.sign !== _.sign)
        return this.subtract(_.negate());
      var S = this.value, P = _.value;
      return _.isSmall ? new s(O(S, Math.abs(P)), this.sign) : new s(x(S, P), this.sign);
    }, s.prototype.plus = s.prototype.add, g.prototype.add = function(E) {
      var _ = Z(E), S = this.value;
      if (S < 0 !== _.sign)
        return this.subtract(_.negate());
      var P = _.value;
      if (_.isSmall) {
        if (w(S + P)) return new g(S + P);
        P = y(Math.abs(P));
      }
      return new s(O(P, Math.abs(S)), S < 0);
    }, g.prototype.plus = g.prototype.add, d.prototype.add = function(E) {
      return new d(this.value + Z(E).value);
    }, d.prototype.plus = d.prototype.add;
    function M(E, _) {
      var S = E.length, P = _.length, m = new Array(S), l = 0, c = i, v, N;
      for (v = 0; v < P; v++)
        N = E[v] - l - _[v], N < 0 ? (N += c, l = 1) : l = 0, m[v] = N;
      for (v = P; v < S; v++) {
        if (N = E[v] - l, N < 0) N += c;
        else {
          m[v++] = N;
          break;
        }
        m[v] = N;
      }
      for (; v < S; v++)
        m[v] = E[v];
      return I(m), m;
    }
    function F(E, _, S) {
      var P;
      return ge(E, _) >= 0 ? P = M(E, _) : (P = M(_, E), S = !S), P = b(P), typeof P == "number" ? (S && (P = -P), new g(P)) : new s(P, S);
    }
    function $(E, _, S) {
      var P = E.length, m = new Array(P), l = -_, c = i, v, N;
      for (v = 0; v < P; v++)
        N = E[v] + l, l = Math.floor(N / c), N %= c, m[v] = N < 0 ? N + c : N;
      return m = b(m), typeof m == "number" ? (S && (m = -m), new g(m)) : new s(m, S);
    }
    s.prototype.subtract = function(E) {
      var _ = Z(E);
      if (this.sign !== _.sign)
        return this.add(_.negate());
      var S = this.value, P = _.value;
      return _.isSmall ? $(S, Math.abs(P), this.sign) : F(S, P, this.sign);
    }, s.prototype.minus = s.prototype.subtract, g.prototype.subtract = function(E) {
      var _ = Z(E), S = this.value;
      if (S < 0 !== _.sign)
        return this.add(_.negate());
      var P = _.value;
      return _.isSmall ? new g(S - P) : $(P, Math.abs(S), S >= 0);
    }, g.prototype.minus = g.prototype.subtract, d.prototype.subtract = function(E) {
      return new d(this.value - Z(E).value);
    }, d.prototype.minus = d.prototype.subtract, s.prototype.negate = function() {
      return new s(this.value, !this.sign);
    }, g.prototype.negate = function() {
      var E = this.sign, _ = new g(-this.value);
      return _.sign = !E, _;
    }, d.prototype.negate = function() {
      return new d(-this.value);
    }, s.prototype.abs = function() {
      return new s(this.value, !1);
    }, g.prototype.abs = function() {
      return new g(Math.abs(this.value));
    }, d.prototype.abs = function() {
      return new d(this.value >= 0 ? this.value : -this.value);
    };
    function B(E, _) {
      var S = E.length, P = _.length, m = S + P, l = R(m), c = i, v, N, L, D, V;
      for (L = 0; L < S; ++L) {
        D = E[L];
        for (var J = 0; J < P; ++J)
          V = _[J], v = D * V + l[L + J], N = Math.floor(v / c), l[L + J] = v - N * c, l[L + J + 1] += N;
      }
      return I(l), l;
    }
    function W(E, _) {
      var S = E.length, P = new Array(S), m = i, l = 0, c, v;
      for (v = 0; v < S; v++)
        c = E[v] * _ + l, l = Math.floor(c / m), P[v] = c - l * m;
      for (; l > 0; )
        P[v++] = l % m, l = Math.floor(l / m);
      return P;
    }
    function k(E, _) {
      for (var S = []; _-- > 0; ) S.push(0);
      return S.concat(E);
    }
    function j(E, _) {
      var S = Math.max(E.length, _.length);
      if (S <= 30) return B(E, _);
      S = Math.ceil(S / 2);
      var P = E.slice(S), m = E.slice(0, S), l = _.slice(S), c = _.slice(0, S), v = j(m, c), N = j(P, l), L = j(x(m, P), x(c, l)), D = x(x(v, k(M(M(L, v), N), S)), k(N, 2 * S));
      return I(D), D;
    }
    function U(E, _) {
      return -0.012 * E - 0.012 * _ + 15e-6 * E * _ > 0;
    }
    s.prototype.multiply = function(E) {
      var _ = Z(E), S = this.value, P = _.value, m = this.sign !== _.sign, l;
      if (_.isSmall) {
        if (P === 0) return a[0];
        if (P === 1) return this;
        if (P === -1) return this.negate();
        if (l = Math.abs(P), l < i)
          return new s(W(S, l), m);
        P = y(l);
      }
      return U(S.length, P.length) ? new s(j(S, P), m) : new s(B(S, P), m);
    }, s.prototype.times = s.prototype.multiply;
    function G(E, _, S) {
      return E < i ? new s(W(_, E), S) : new s(B(_, y(E)), S);
    }
    g.prototype._multiplyBySmall = function(E) {
      return w(E.value * this.value) ? new g(E.value * this.value) : G(Math.abs(E.value), y(Math.abs(this.value)), this.sign !== E.sign);
    }, s.prototype._multiplyBySmall = function(E) {
      return E.value === 0 ? a[0] : E.value === 1 ? this : E.value === -1 ? this.negate() : G(Math.abs(E.value), this.value, this.sign !== E.sign);
    }, g.prototype.multiply = function(E) {
      return Z(E)._multiplyBySmall(this);
    }, g.prototype.times = g.prototype.multiply, d.prototype.multiply = function(E) {
      return new d(this.value * Z(E).value);
    }, d.prototype.times = d.prototype.multiply;
    function H(E) {
      var _ = E.length, S = R(_ + _), P = i, m, l, c, v, N;
      for (c = 0; c < _; c++) {
        v = E[c], l = 0 - v * v;
        for (var L = c; L < _; L++)
          N = E[L], m = 2 * (v * N) + S[c + L] + l, l = Math.floor(m / P), S[c + L] = m - l * P;
        S[c + _] = l;
      }
      return I(S), S;
    }
    s.prototype.square = function() {
      return new s(H(this.value), !1);
    }, g.prototype.square = function() {
      var E = this.value * this.value;
      return w(E) ? new g(E) : new s(H(y(Math.abs(this.value))), !1);
    }, d.prototype.square = function(E) {
      return new d(this.value * this.value);
    };
    function ce(E, _) {
      var S = E.length, P = _.length, m = i, l = R(_.length), c = _[P - 1], v = Math.ceil(m / (2 * c)), N = W(E, v), L = W(_, v), D, V, J, re, oe, le, Ie;
      for (N.length <= S && N.push(0), L.push(0), c = L[P - 1], V = S - P; V >= 0; V--) {
        for (D = m - 1, N[V + P] !== c && (D = Math.floor((N[V + P] * m + N[V + P - 1]) / c)), J = 0, re = 0, le = L.length, oe = 0; oe < le; oe++)
          J += D * L[oe], Ie = Math.floor(J / m), re += N[V + oe] - (J - Ie * m), J = Ie, re < 0 ? (N[V + oe] = re + m, re = -1) : (N[V + oe] = re, re = 0);
        for (; re !== 0; ) {
          for (D -= 1, J = 0, oe = 0; oe < le; oe++)
            J += N[V + oe] - m + L[oe], J < 0 ? (N[V + oe] = J + m, J = 0) : (N[V + oe] = J, J = 1);
          re += J;
        }
        l[V] = D;
      }
      return N = te(N, v)[0], [b(l), b(N)];
    }
    function ne(E, _) {
      for (var S = E.length, P = _.length, m = [], l = [], c = i, v, N, L, D, V; S; ) {
        if (l.unshift(E[--S]), I(l), ge(l, _) < 0) {
          m.push(0);
          continue;
        }
        N = l.length, L = l[N - 1] * c + l[N - 2], D = _[P - 1] * c + _[P - 2], N > P && (L = (L + 1) * c), v = Math.ceil(L / D);
        do {
          if (V = W(_, v), ge(V, l) <= 0) break;
          v--;
        } while (v);
        m.push(v), l = M(l, V);
      }
      return m.reverse(), [b(m), b(l)];
    }
    function te(E, _) {
      var S = E.length, P = R(S), m = i, l, c, v, N;
      for (v = 0, l = S - 1; l >= 0; --l)
        N = v * m + E[l], c = A(N / _), v = N - c * _, P[l] = c | 0;
      return [P, v | 0];
    }
    function we(E, _) {
      var S, P = Z(_);
      if (h)
        return [new d(E.value / P.value), new d(E.value % P.value)];
      var m = E.value, l = P.value, c;
      if (l === 0) throw new Error("Cannot divide by zero");
      if (E.isSmall)
        return P.isSmall ? [new g(A(m / l)), new g(m % l)] : [a[0], E];
      if (P.isSmall) {
        if (l === 1) return [E, a[0]];
        if (l == -1) return [E.negate(), a[0]];
        var v = Math.abs(l);
        if (v < i) {
          S = te(m, v), c = b(S[0]);
          var N = S[1];
          return E.sign && (N = -N), typeof c == "number" ? (E.sign !== P.sign && (c = -c), [new g(c), new g(N)]) : [new s(c, E.sign !== P.sign), new g(N)];
        }
        l = y(v);
      }
      var L = ge(m, l);
      if (L === -1) return [a[0], E];
      if (L === 0) return [a[E.sign === P.sign ? 1 : -1], a[0]];
      m.length + l.length <= 200 ? S = ce(m, l) : S = ne(m, l), c = S[0];
      var D = E.sign !== P.sign, V = S[1], J = E.sign;
      return typeof c == "number" ? (D && (c = -c), c = new g(c)) : c = new s(c, D), typeof V == "number" ? (J && (V = -V), V = new g(V)) : V = new s(V, J), [c, V];
    }
    s.prototype.divmod = function(E) {
      var _ = we(this, E);
      return {
        quotient: _[0],
        remainder: _[1]
      };
    }, d.prototype.divmod = g.prototype.divmod = s.prototype.divmod, s.prototype.divide = function(E) {
      return we(this, E)[0];
    }, d.prototype.over = d.prototype.divide = function(E) {
      return new d(this.value / Z(E).value);
    }, g.prototype.over = g.prototype.divide = s.prototype.over = s.prototype.divide, s.prototype.mod = function(E) {
      return we(this, E)[1];
    }, d.prototype.mod = d.prototype.remainder = function(E) {
      return new d(this.value % Z(E).value);
    }, g.prototype.remainder = g.prototype.mod = s.prototype.remainder = s.prototype.mod, s.prototype.pow = function(E) {
      var _ = Z(E), S = this.value, P = _.value, m, l, c;
      if (P === 0) return a[1];
      if (S === 0) return a[0];
      if (S === 1) return a[1];
      if (S === -1) return _.isEven() ? a[1] : a[-1];
      if (_.sign)
        return a[0];
      if (!_.isSmall) throw new Error("The exponent " + _.toString() + " is too large.");
      if (this.isSmall && w(m = Math.pow(S, P)))
        return new g(A(m));
      for (l = this, c = a[1]; P & !0 && (c = c.times(l), --P), P !== 0; )
        P /= 2, l = l.square();
      return c;
    }, g.prototype.pow = s.prototype.pow, d.prototype.pow = function(E) {
      var _ = Z(E), S = this.value, P = _.value, m = BigInt(0), l = BigInt(1), c = BigInt(2);
      if (P === m) return a[1];
      if (S === m) return a[0];
      if (S === l) return a[1];
      if (S === BigInt(-1)) return _.isEven() ? a[1] : a[-1];
      if (_.isNegative()) return new d(m);
      for (var v = this, N = a[1]; (P & l) === l && (N = N.times(v), --P), P !== m; )
        P /= c, v = v.square();
      return N;
    }, s.prototype.modPow = function(E, _) {
      if (E = Z(E), _ = Z(_), _.isZero()) throw new Error("Cannot take modPow with modulus 0");
      var S = a[1], P = this.mod(_);
      for (E.isNegative() && (E = E.multiply(a[-1]), P = P.modInv(_)); E.isPositive(); ) {
        if (P.isZero()) return a[0];
        E.isOdd() && (S = S.multiply(P).mod(_)), E = E.divide(2), P = P.square().mod(_);
      }
      return S;
    }, d.prototype.modPow = g.prototype.modPow = s.prototype.modPow;
    function ge(E, _) {
      if (E.length !== _.length)
        return E.length > _.length ? 1 : -1;
      for (var S = E.length - 1; S >= 0; S--)
        if (E[S] !== _[S]) return E[S] > _[S] ? 1 : -1;
      return 0;
    }
    s.prototype.compareAbs = function(E) {
      var _ = Z(E), S = this.value, P = _.value;
      return _.isSmall ? 1 : ge(S, P);
    }, g.prototype.compareAbs = function(E) {
      var _ = Z(E), S = Math.abs(this.value), P = _.value;
      return _.isSmall ? (P = Math.abs(P), S === P ? 0 : S > P ? 1 : -1) : -1;
    }, d.prototype.compareAbs = function(E) {
      var _ = this.value, S = Z(E).value;
      return _ = _ >= 0 ? _ : -_, S = S >= 0 ? S : -S, _ === S ? 0 : _ > S ? 1 : -1;
    }, s.prototype.compare = function(E) {
      if (E === 1 / 0)
        return -1;
      if (E === -1 / 0)
        return 1;
      var _ = Z(E), S = this.value, P = _.value;
      return this.sign !== _.sign ? _.sign ? 1 : -1 : _.isSmall ? this.sign ? -1 : 1 : ge(S, P) * (this.sign ? -1 : 1);
    }, s.prototype.compareTo = s.prototype.compare, g.prototype.compare = function(E) {
      if (E === 1 / 0)
        return -1;
      if (E === -1 / 0)
        return 1;
      var _ = Z(E), S = this.value, P = _.value;
      return _.isSmall ? S == P ? 0 : S > P ? 1 : -1 : S < 0 !== _.sign ? S < 0 ? -1 : 1 : S < 0 ? 1 : -1;
    }, g.prototype.compareTo = g.prototype.compare, d.prototype.compare = function(E) {
      if (E === 1 / 0)
        return -1;
      if (E === -1 / 0)
        return 1;
      var _ = this.value, S = Z(E).value;
      return _ === S ? 0 : _ > S ? 1 : -1;
    }, d.prototype.compareTo = d.prototype.compare, s.prototype.equals = function(E) {
      return this.compare(E) === 0;
    }, d.prototype.eq = d.prototype.equals = g.prototype.eq = g.prototype.equals = s.prototype.eq = s.prototype.equals, s.prototype.notEquals = function(E) {
      return this.compare(E) !== 0;
    }, d.prototype.neq = d.prototype.notEquals = g.prototype.neq = g.prototype.notEquals = s.prototype.neq = s.prototype.notEquals, s.prototype.greater = function(E) {
      return this.compare(E) > 0;
    }, d.prototype.gt = d.prototype.greater = g.prototype.gt = g.prototype.greater = s.prototype.gt = s.prototype.greater, s.prototype.lesser = function(E) {
      return this.compare(E) < 0;
    }, d.prototype.lt = d.prototype.lesser = g.prototype.lt = g.prototype.lesser = s.prototype.lt = s.prototype.lesser, s.prototype.greaterOrEquals = function(E) {
      return this.compare(E) >= 0;
    }, d.prototype.geq = d.prototype.greaterOrEquals = g.prototype.geq = g.prototype.greaterOrEquals = s.prototype.geq = s.prototype.greaterOrEquals, s.prototype.lesserOrEquals = function(E) {
      return this.compare(E) <= 0;
    }, d.prototype.leq = d.prototype.lesserOrEquals = g.prototype.leq = g.prototype.lesserOrEquals = s.prototype.leq = s.prototype.lesserOrEquals, s.prototype.isEven = function() {
      return (this.value[0] & 1) === 0;
    }, g.prototype.isEven = function() {
      return (this.value & 1) === 0;
    }, d.prototype.isEven = function() {
      return (this.value & BigInt(1)) === BigInt(0);
    }, s.prototype.isOdd = function() {
      return (this.value[0] & 1) === 1;
    }, g.prototype.isOdd = function() {
      return (this.value & 1) === 1;
    }, d.prototype.isOdd = function() {
      return (this.value & BigInt(1)) === BigInt(1);
    }, s.prototype.isPositive = function() {
      return !this.sign;
    }, g.prototype.isPositive = function() {
      return this.value > 0;
    }, d.prototype.isPositive = g.prototype.isPositive, s.prototype.isNegative = function() {
      return this.sign;
    }, g.prototype.isNegative = function() {
      return this.value < 0;
    }, d.prototype.isNegative = g.prototype.isNegative, s.prototype.isUnit = function() {
      return !1;
    }, g.prototype.isUnit = function() {
      return Math.abs(this.value) === 1;
    }, d.prototype.isUnit = function() {
      return this.abs().value === BigInt(1);
    }, s.prototype.isZero = function() {
      return !1;
    }, g.prototype.isZero = function() {
      return this.value === 0;
    }, d.prototype.isZero = function() {
      return this.value === BigInt(0);
    }, s.prototype.isDivisibleBy = function(E) {
      var _ = Z(E);
      return _.isZero() ? !1 : _.isUnit() ? !0 : _.compareAbs(2) === 0 ? this.isEven() : this.mod(_).isZero();
    }, d.prototype.isDivisibleBy = g.prototype.isDivisibleBy = s.prototype.isDivisibleBy;
    function ie(E) {
      var _ = E.abs();
      if (_.isUnit()) return !1;
      if (_.equals(2) || _.equals(3) || _.equals(5)) return !0;
      if (_.isEven() || _.isDivisibleBy(3) || _.isDivisibleBy(5)) return !1;
      if (_.lesser(49)) return !0;
    }
    function $e(E, _) {
      for (var S = E.prev(), P = S, m = 0, l, c, v; P.isEven(); ) P = P.divide(2), m++;
      e: for (c = 0; c < _.length; c++)
        if (!E.lesser(_[c]) && (v = e(_[c]).modPow(P, E), !(v.isUnit() || v.equals(S)))) {
          for (l = m - 1; l != 0; l--) {
            if (v = v.square().mod(E), v.isUnit()) return !1;
            if (v.equals(S)) continue e;
          }
          return !1;
        }
      return !0;
    }
    s.prototype.isPrime = function(E) {
      var _ = ie(this);
      if (_ !== r) return _;
      var S = this.abs(), P = S.bitLength();
      if (P <= 64)
        return $e(S, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
      for (var m = Math.log(2) * P.toJSNumber(), l = Math.ceil(E === !0 ? 2 * Math.pow(m, 2) : m), c = [], v = 0; v < l; v++)
        c.push(e(v + 2));
      return $e(S, c);
    }, d.prototype.isPrime = g.prototype.isPrime = s.prototype.isPrime, s.prototype.isProbablePrime = function(E, _) {
      var S = ie(this);
      if (S !== r) return S;
      for (var P = this.abs(), m = E === r ? 5 : E, l = [], c = 0; c < m; c++)
        l.push(e.randBetween(2, P.minus(2), _));
      return $e(P, l);
    }, d.prototype.isProbablePrime = g.prototype.isProbablePrime = s.prototype.isProbablePrime, s.prototype.modInv = function(E) {
      for (var _ = e.zero, S = e.one, P = Z(E), m = this.abs(), l, c, v; !m.isZero(); )
        l = P.divide(m), c = _, v = P, _ = S, P = m, S = c.subtract(l.multiply(S)), m = v.subtract(l.multiply(m));
      if (!P.isUnit()) throw new Error(this.toString() + " and " + E.toString() + " are not co-prime");
      return _.compare(0) === -1 && (_ = _.add(E)), this.isNegative() ? _.negate() : _;
    }, d.prototype.modInv = g.prototype.modInv = s.prototype.modInv, s.prototype.next = function() {
      var E = this.value;
      return this.sign ? $(E, 1, this.sign) : new s(O(E, 1), this.sign);
    }, g.prototype.next = function() {
      var E = this.value;
      return E + 1 < u ? new g(E + 1) : new s(p, !1);
    }, d.prototype.next = function() {
      return new d(this.value + BigInt(1));
    }, s.prototype.prev = function() {
      var E = this.value;
      return this.sign ? new s(O(E, 1), !0) : $(E, 1, this.sign);
    }, g.prototype.prev = function() {
      var E = this.value;
      return E - 1 > -u ? new g(E - 1) : new s(p, !0);
    }, d.prototype.prev = function() {
      return new d(this.value - BigInt(1));
    };
    for (var ue = [1]; 2 * ue[ue.length - 1] <= i; ) ue.push(2 * ue[ue.length - 1]);
    var fe = ue.length, Q = ue[fe - 1];
    function nt(E) {
      return Math.abs(E) <= i;
    }
    s.prototype.shiftLeft = function(E) {
      var _ = Z(E).toJSNumber();
      if (!nt(_))
        throw new Error(String(_) + " is too large for shifting.");
      if (_ < 0) return this.shiftRight(-_);
      var S = this;
      if (S.isZero()) return S;
      for (; _ >= fe; )
        S = S.multiply(Q), _ -= fe - 1;
      return S.multiply(ue[_]);
    }, d.prototype.shiftLeft = g.prototype.shiftLeft = s.prototype.shiftLeft, s.prototype.shiftRight = function(E) {
      var _, S = Z(E).toJSNumber();
      if (!nt(S))
        throw new Error(String(S) + " is too large for shifting.");
      if (S < 0) return this.shiftLeft(-S);
      for (var P = this; S >= fe; ) {
        if (P.isZero() || P.isNegative() && P.isUnit()) return P;
        _ = we(P, Q), P = _[1].isNegative() ? _[0].prev() : _[0], S -= fe - 1;
      }
      return _ = we(P, ue[S]), _[1].isNegative() ? _[0].prev() : _[0];
    }, d.prototype.shiftRight = g.prototype.shiftRight = s.prototype.shiftRight;
    function _t(E, _, S) {
      _ = Z(_);
      for (var P = E.isNegative(), m = _.isNegative(), l = P ? E.not() : E, c = m ? _.not() : _, v = 0, N = 0, L = null, D = null, V = []; !l.isZero() || !c.isZero(); )
        L = we(l, Q), v = L[1].toJSNumber(), P && (v = Q - 1 - v), D = we(c, Q), N = D[1].toJSNumber(), m && (N = Q - 1 - N), l = L[0], c = D[0], V.push(S(v, N));
      for (var J = S(P ? 1 : 0, m ? 1 : 0) !== 0 ? e(-1) : e(0), re = V.length - 1; re >= 0; re -= 1)
        J = J.multiply(Q).add(e(V[re]));
      return J;
    }
    s.prototype.not = function() {
      return this.negate().prev();
    }, d.prototype.not = g.prototype.not = s.prototype.not, s.prototype.and = function(E) {
      return _t(this, E, function(_, S) {
        return _ & S;
      });
    }, d.prototype.and = g.prototype.and = s.prototype.and, s.prototype.or = function(E) {
      return _t(this, E, function(_, S) {
        return _ | S;
      });
    }, d.prototype.or = g.prototype.or = s.prototype.or, s.prototype.xor = function(E) {
      return _t(this, E, function(_, S) {
        return _ ^ S;
      });
    }, d.prototype.xor = g.prototype.xor = s.prototype.xor;
    var Mt = 1 << 30, qt = (i & -i) * (i & -i) | Mt;
    function It(E) {
      var _ = E.value, S = typeof _ == "number" ? _ | Mt : typeof _ == "bigint" ? _ | BigInt(Mt) : _[0] + _[1] * i | qt;
      return S & -S;
    }
    function ct(E, _) {
      if (_.compareTo(E) <= 0) {
        var S = ct(E, _.square(_)), P = S.p, m = S.e, l = P.multiply(_);
        return l.compareTo(E) <= 0 ? { p: l, e: m * 2 + 1 } : { p: P, e: m * 2 };
      }
      return { p: e(1), e: 0 };
    }
    s.prototype.bitLength = function() {
      var E = this;
      return E.compareTo(e(0)) < 0 && (E = E.negate().subtract(e(1))), E.compareTo(e(0)) === 0 ? e(0) : e(ct(E, e(2)).e).add(e(1));
    }, d.prototype.bitLength = g.prototype.bitLength = s.prototype.bitLength;
    function it(E, _) {
      return E = Z(E), _ = Z(_), E.greater(_) ? E : _;
    }
    function Tt(E, _) {
      return E = Z(E), _ = Z(_), E.lesser(_) ? E : _;
    }
    function ft(E, _) {
      if (E = Z(E).abs(), _ = Z(_).abs(), E.equals(_)) return E;
      if (E.isZero()) return _;
      if (_.isZero()) return E;
      for (var S = a[1], P, m; E.isEven() && _.isEven(); )
        P = Tt(It(E), It(_)), E = E.divide(P), _ = _.divide(P), S = S.multiply(P);
      for (; E.isEven(); )
        E = E.divide(It(E));
      do {
        for (; _.isEven(); )
          _ = _.divide(It(_));
        E.greater(_) && (m = _, _ = E, E = m), _ = _.subtract(E);
      } while (!_.isZero());
      return S.isUnit() ? E : E.multiply(S);
    }
    function Ht(E, _) {
      return E = Z(E).abs(), _ = Z(_).abs(), E.divide(ft(E, _)).multiply(_);
    }
    function ht(E, _, S) {
      E = Z(E), _ = Z(_);
      var P = S || Math.random, m = Tt(E, _), l = it(E, _), c = l.subtract(m).add(1);
      if (c.isSmall) return m.add(Math.floor(P() * c));
      for (var v = pt(c, i).value, N = [], L = !0, D = 0; D < v.length; D++) {
        var V = L ? v[D] + (D + 1 < v.length ? v[D + 1] / i : 0) : i, J = A(P() * V);
        N.push(J), J < v[D] && (L = !1);
      }
      return m.add(a.fromArray(N, i, !1));
    }
    var Qe = function(E, _, S, P) {
      S = S || f, E = String(E), P || (E = E.toLowerCase(), S = S.toLowerCase());
      var m = E.length, l, c = Math.abs(_), v = {};
      for (l = 0; l < S.length; l++)
        v[S[l]] = l;
      for (l = 0; l < m; l++) {
        var N = E[l];
        if (N !== "-" && N in v && v[N] >= c) {
          if (N === "1" && c === 1) continue;
          throw new Error(N + " is not a valid digit in base " + _ + ".");
        }
      }
      _ = Z(_);
      var L = [], D = E[0] === "-";
      for (l = D ? 1 : 0; l < E.length; l++) {
        var N = E[l];
        if (N in v) L.push(Z(v[N]));
        else if (N === "<") {
          var V = l;
          do
            l++;
          while (E[l] !== ">" && l < E.length);
          L.push(Z(E.slice(V + 1, l)));
        } else throw new Error(N + " is not a valid character");
      }
      return kt(L, _, D);
    };
    function kt(E, _, S) {
      var P = a[0], m = a[1], l;
      for (l = E.length - 1; l >= 0; l--)
        P = P.add(E[l].times(m)), m = m.times(_);
      return S ? P.negate() : P;
    }
    function Yt(E, _) {
      return _ = _ || f, E < _.length ? _[E] : "<" + E + ">";
    }
    function pt(E, _) {
      if (_ = e(_), _.isZero()) {
        if (E.isZero()) return { value: [0], isNegative: !1 };
        throw new Error("Cannot convert nonzero numbers to base 0.");
      }
      if (_.equals(-1)) {
        if (E.isZero()) return { value: [0], isNegative: !1 };
        if (E.isNegative())
          return {
            value: [].concat.apply(
              [],
              Array.apply(null, Array(-E.toJSNumber())).map(Array.prototype.valueOf, [1, 0])
            ),
            isNegative: !1
          };
        var S = Array.apply(null, Array(E.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
        return S.unshift([1]), {
          value: [].concat.apply([], S),
          isNegative: !1
        };
      }
      var P = !1;
      if (E.isNegative() && _.isPositive() && (P = !0, E = E.abs()), _.isUnit())
        return E.isZero() ? { value: [0], isNegative: !1 } : {
          value: Array.apply(null, Array(E.toJSNumber())).map(Number.prototype.valueOf, 1),
          isNegative: P
        };
      for (var m = [], l = E, c; l.isNegative() || l.compareAbs(_) >= 0; ) {
        c = l.divmod(_), l = c.quotient;
        var v = c.remainder;
        v.isNegative() && (v = _.minus(v).abs(), l = l.next()), m.push(v.toJSNumber());
      }
      return m.push(l.toJSNumber()), { value: m.reverse(), isNegative: P };
    }
    function sr(E, _, S) {
      var P = pt(E, _);
      return (P.isNegative ? "-" : "") + P.value.map(function(m) {
        return Yt(m, S);
      }).join("");
    }
    s.prototype.toArray = function(E) {
      return pt(this, E);
    }, g.prototype.toArray = function(E) {
      return pt(this, E);
    }, d.prototype.toArray = function(E) {
      return pt(this, E);
    }, s.prototype.toString = function(E, _) {
      if (E === r && (E = 10), E !== 10 || _) return sr(this, E, _);
      for (var S = this.value, P = S.length, m = String(S[--P]), l = "0000000", c; --P >= 0; )
        c = String(S[P]), m += l.slice(c.length) + c;
      var v = this.sign ? "-" : "";
      return v + m;
    }, g.prototype.toString = function(E, _) {
      return E === r && (E = 10), E != 10 || _ ? sr(this, E, _) : String(this.value);
    }, d.prototype.toString = g.prototype.toString, d.prototype.toJSON = s.prototype.toJSON = g.prototype.toJSON = function() {
      return this.toString();
    }, s.prototype.valueOf = function() {
      return parseInt(this.toString(), 10);
    }, s.prototype.toJSNumber = s.prototype.valueOf, g.prototype.valueOf = function() {
      return this.value;
    }, g.prototype.toJSNumber = g.prototype.valueOf, d.prototype.valueOf = d.prototype.toJSNumber = function() {
      return parseInt(this.toString(), 10);
    };
    function wr(E) {
      if (w(+E)) {
        var _ = +E;
        if (_ === A(_))
          return h ? new d(BigInt(_)) : new g(_);
        throw new Error("Invalid integer: " + E);
      }
      var S = E[0] === "-";
      S && (E = E.slice(1));
      var P = E.split(/e/i);
      if (P.length > 2) throw new Error("Invalid integer: " + P.join("e"));
      if (P.length === 2) {
        var m = P[1];
        if (m[0] === "+" && (m = m.slice(1)), m = +m, m !== A(m) || !w(m)) throw new Error("Invalid integer: " + m + " is not a valid exponent.");
        var l = P[0], c = l.indexOf(".");
        if (c >= 0 && (m -= l.length - c - 1, l = l.slice(0, c) + l.slice(c + 1)), m < 0) throw new Error("Cannot include negative exponent part for integers");
        l += new Array(m + 1).join("0"), E = l;
      }
      var v = /^([0-9][0-9]*)$/.test(E);
      if (!v) throw new Error("Invalid integer: " + E);
      if (h)
        return new d(BigInt(S ? "-" + E : E));
      for (var N = [], L = E.length, D = o, V = L - D; L > 0; )
        N.push(+E.slice(V, L)), V -= D, V < 0 && (V = 0), L -= D;
      return I(N), new s(N, S);
    }
    function Zt(E) {
      if (h)
        return new d(BigInt(E));
      if (w(E)) {
        if (E !== A(E)) throw new Error(E + " is not an integer.");
        return new g(E);
      }
      return wr(E.toString());
    }
    function Z(E) {
      return typeof E == "number" ? Zt(E) : typeof E == "string" ? wr(E) : typeof E == "bigint" ? new d(E) : E;
    }
    for (var Ee = 0; Ee < 1e3; Ee++)
      a[Ee] = Z(Ee), Ee > 0 && (a[-Ee] = Z(-Ee));
    return a.one = a[1], a.zero = a[0], a.minusOne = a[-1], a.max = it, a.min = Tt, a.gcd = ft, a.lcm = Ht, a.isInstance = function(E) {
      return E instanceof s || E instanceof g || E instanceof d;
    }, a.randBetween = ht, a.fromArray = function(E, _, S) {
      return kt(E.map(Z), Z(_ || 10), S);
    }, a;
  }();
  n.hasOwnProperty("exports") && (n.exports = e);
})(oa);
var of = oa.exports;
const sf = /* @__PURE__ */ vi(of);
var sa = {}, Fn = {};
Fn.byteLength = lf;
Fn.toByteArray = ff;
Fn.fromByteArray = df;
var $t = [], yt = [], af = typeof Uint8Array < "u" ? Uint8Array : Array, ti = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Ir = 0, uf = ti.length; Ir < uf; ++Ir)
  $t[Ir] = ti[Ir], yt[ti.charCodeAt(Ir)] = Ir;
yt[45] = 62;
yt[95] = 63;
function aa(n) {
  var e = n.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = n.indexOf("=");
  r === -1 && (r = e);
  var i = r === e ? 0 : 4 - r % 4;
  return [r, i];
}
function lf(n) {
  var e = aa(n), r = e[0], i = e[1];
  return (r + i) * 3 / 4 - i;
}
function cf(n, e, r) {
  return (e + r) * 3 / 4 - r;
}
function ff(n) {
  var e, r = aa(n), i = r[0], o = r[1], u = new af(cf(n, i, o)), p = 0, f = o > 0 ? i - 4 : i, h;
  for (h = 0; h < f; h += 4)
    e = yt[n.charCodeAt(h)] << 18 | yt[n.charCodeAt(h + 1)] << 12 | yt[n.charCodeAt(h + 2)] << 6 | yt[n.charCodeAt(h + 3)], u[p++] = e >> 16 & 255, u[p++] = e >> 8 & 255, u[p++] = e & 255;
  return o === 2 && (e = yt[n.charCodeAt(h)] << 2 | yt[n.charCodeAt(h + 1)] >> 4, u[p++] = e & 255), o === 1 && (e = yt[n.charCodeAt(h)] << 10 | yt[n.charCodeAt(h + 1)] << 4 | yt[n.charCodeAt(h + 2)] >> 2, u[p++] = e >> 8 & 255, u[p++] = e & 255), u;
}
function hf(n) {
  return $t[n >> 18 & 63] + $t[n >> 12 & 63] + $t[n >> 6 & 63] + $t[n & 63];
}
function pf(n, e, r) {
  for (var i, o = [], u = e; u < r; u += 3)
    i = (n[u] << 16 & 16711680) + (n[u + 1] << 8 & 65280) + (n[u + 2] & 255), o.push(hf(i));
  return o.join("");
}
function df(n) {
  for (var e, r = n.length, i = r % 3, o = [], u = 16383, p = 0, f = r - i; p < f; p += u)
    o.push(pf(n, p, p + u > f ? f : p + u));
  return i === 1 ? (e = n[r - 1], o.push(
    $t[e >> 2] + $t[e << 4 & 63] + "=="
  )) : i === 2 && (e = (n[r - 2] << 8) + n[r - 1], o.push(
    $t[e >> 10] + $t[e >> 4 & 63] + $t[e << 2 & 63] + "="
  )), o.join("");
}
var Fi = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Fi.read = function(n, e, r, i, o) {
  var u, p, f = o * 8 - i - 1, h = (1 << f) - 1, a = h >> 1, s = -7, g = r ? o - 1 : 0, d = r ? -1 : 1, w = n[e + g];
  for (g += d, u = w & (1 << -s) - 1, w >>= -s, s += f; s > 0; u = u * 256 + n[e + g], g += d, s -= 8)
    ;
  for (p = u & (1 << -s) - 1, u >>= -s, s += i; s > 0; p = p * 256 + n[e + g], g += d, s -= 8)
    ;
  if (u === 0)
    u = 1 - a;
  else {
    if (u === h)
      return p ? NaN : (w ? -1 : 1) * (1 / 0);
    p = p + Math.pow(2, i), u = u - a;
  }
  return (w ? -1 : 1) * p * Math.pow(2, u - i);
};
Fi.write = function(n, e, r, i, o, u) {
  var p, f, h, a = u * 8 - o - 1, s = (1 << a) - 1, g = s >> 1, d = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, w = i ? 0 : u - 1, y = i ? 1 : -1, b = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (f = isNaN(e) ? 1 : 0, p = s) : (p = Math.floor(Math.log(e) / Math.LN2), e * (h = Math.pow(2, -p)) < 1 && (p--, h *= 2), p + g >= 1 ? e += d / h : e += d * Math.pow(2, 1 - g), e * h >= 2 && (p++, h /= 2), p + g >= s ? (f = 0, p = s) : p + g >= 1 ? (f = (e * h - 1) * Math.pow(2, o), p = p + g) : (f = e * Math.pow(2, g - 1) * Math.pow(2, o), p = 0)); o >= 8; n[r + w] = f & 255, w += y, f /= 256, o -= 8)
    ;
  for (p = p << o | f, a += o; a > 0; n[r + w] = p & 255, w += y, p /= 256, a -= 8)
    ;
  n[r + w - y] |= b * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(n) {
  const e = Fn, r = Fi, i = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  n.Buffer = s, n.SlowBuffer = O, n.INSPECT_MAX_BYTES = 50;
  const o = 2147483647;
  n.kMaxLength = o;
  const { Uint8Array: u, ArrayBuffer: p, SharedArrayBuffer: f } = globalThis;
  s.TYPED_ARRAY_SUPPORT = h(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function h() {
    try {
      const m = new u(1), l = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(l, u.prototype), Object.setPrototypeOf(m, l), m.foo() === 42;
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
  function a(m) {
    if (m > o)
      throw new RangeError('The value "' + m + '" is invalid for option "size"');
    const l = new u(m);
    return Object.setPrototypeOf(l, s.prototype), l;
  }
  function s(m, l, c) {
    if (typeof m == "number") {
      if (typeof l == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return y(m);
    }
    return g(m, l, c);
  }
  s.poolSize = 8192;
  function g(m, l, c) {
    if (typeof m == "string")
      return b(m, l);
    if (p.isView(m))
      return R(m);
    if (m == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m
      );
    if (Ee(m, p) || m && Ee(m.buffer, p) || typeof f < "u" && (Ee(m, f) || m && Ee(m.buffer, f)))
      return A(m, l, c);
    if (typeof m == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const v = m.valueOf && m.valueOf();
    if (v != null && v !== m)
      return s.from(v, l, c);
    const N = T(m);
    if (N) return N;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof m[Symbol.toPrimitive] == "function")
      return s.from(m[Symbol.toPrimitive]("string"), l, c);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m
    );
  }
  s.from = function(m, l, c) {
    return g(m, l, c);
  }, Object.setPrototypeOf(s.prototype, u.prototype), Object.setPrototypeOf(s, u);
  function d(m) {
    if (typeof m != "number")
      throw new TypeError('"size" argument must be of type number');
    if (m < 0)
      throw new RangeError('The value "' + m + '" is invalid for option "size"');
  }
  function w(m, l, c) {
    return d(m), m <= 0 ? a(m) : l !== void 0 ? typeof c == "string" ? a(m).fill(l, c) : a(m).fill(l) : a(m);
  }
  s.alloc = function(m, l, c) {
    return w(m, l, c);
  };
  function y(m) {
    return d(m), a(m < 0 ? 0 : x(m) | 0);
  }
  s.allocUnsafe = function(m) {
    return y(m);
  }, s.allocUnsafeSlow = function(m) {
    return y(m);
  };
  function b(m, l) {
    if ((typeof l != "string" || l === "") && (l = "utf8"), !s.isEncoding(l))
      throw new TypeError("Unknown encoding: " + l);
    const c = M(m, l) | 0;
    let v = a(c);
    const N = v.write(m, l);
    return N !== c && (v = v.slice(0, N)), v;
  }
  function I(m) {
    const l = m.length < 0 ? 0 : x(m.length) | 0, c = a(l);
    for (let v = 0; v < l; v += 1)
      c[v] = m[v] & 255;
    return c;
  }
  function R(m) {
    if (Ee(m, u)) {
      const l = new u(m);
      return A(l.buffer, l.byteOffset, l.byteLength);
    }
    return I(m);
  }
  function A(m, l, c) {
    if (l < 0 || m.byteLength < l)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (m.byteLength < l + (c || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let v;
    return l === void 0 && c === void 0 ? v = new u(m) : c === void 0 ? v = new u(m, l) : v = new u(m, l, c), Object.setPrototypeOf(v, s.prototype), v;
  }
  function T(m) {
    if (s.isBuffer(m)) {
      const l = x(m.length) | 0, c = a(l);
      return c.length === 0 || m.copy(c, 0, 0, l), c;
    }
    if (m.length !== void 0)
      return typeof m.length != "number" || E(m.length) ? a(0) : I(m);
    if (m.type === "Buffer" && Array.isArray(m.data))
      return I(m.data);
  }
  function x(m) {
    if (m >= o)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
    return m | 0;
  }
  function O(m) {
    return +m != m && (m = 0), s.alloc(+m);
  }
  s.isBuffer = function(l) {
    return l != null && l._isBuffer === !0 && l !== s.prototype;
  }, s.compare = function(l, c) {
    if (Ee(l, u) && (l = s.from(l, l.offset, l.byteLength)), Ee(c, u) && (c = s.from(c, c.offset, c.byteLength)), !s.isBuffer(l) || !s.isBuffer(c))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (l === c) return 0;
    let v = l.length, N = c.length;
    for (let L = 0, D = Math.min(v, N); L < D; ++L)
      if (l[L] !== c[L]) {
        v = l[L], N = c[L];
        break;
      }
    return v < N ? -1 : N < v ? 1 : 0;
  }, s.isEncoding = function(l) {
    switch (String(l).toLowerCase()) {
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
  }, s.concat = function(l, c) {
    if (!Array.isArray(l))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (l.length === 0)
      return s.alloc(0);
    let v;
    if (c === void 0)
      for (c = 0, v = 0; v < l.length; ++v)
        c += l[v].length;
    const N = s.allocUnsafe(c);
    let L = 0;
    for (v = 0; v < l.length; ++v) {
      let D = l[v];
      if (Ee(D, u))
        L + D.length > N.length ? (s.isBuffer(D) || (D = s.from(D)), D.copy(N, L)) : u.prototype.set.call(
          N,
          D,
          L
        );
      else if (s.isBuffer(D))
        D.copy(N, L);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      L += D.length;
    }
    return N;
  };
  function M(m, l) {
    if (s.isBuffer(m))
      return m.length;
    if (p.isView(m) || Ee(m, p))
      return m.byteLength;
    if (typeof m != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof m
      );
    const c = m.length, v = arguments.length > 2 && arguments[2] === !0;
    if (!v && c === 0) return 0;
    let N = !1;
    for (; ; )
      switch (l) {
        case "ascii":
        case "latin1":
        case "binary":
          return c;
        case "utf8":
        case "utf-8":
          return pt(m).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return c * 2;
        case "hex":
          return c >>> 1;
        case "base64":
          return Zt(m).length;
        default:
          if (N)
            return v ? -1 : pt(m).length;
          l = ("" + l).toLowerCase(), N = !0;
      }
  }
  s.byteLength = M;
  function F(m, l, c) {
    let v = !1;
    if ((l === void 0 || l < 0) && (l = 0), l > this.length || ((c === void 0 || c > this.length) && (c = this.length), c <= 0) || (c >>>= 0, l >>>= 0, c <= l))
      return "";
    for (m || (m = "utf8"); ; )
      switch (m) {
        case "hex":
          return $e(this, l, c);
        case "utf8":
        case "utf-8":
          return ne(this, l, c);
        case "ascii":
          return ge(this, l, c);
        case "latin1":
        case "binary":
          return ie(this, l, c);
        case "base64":
          return ce(this, l, c);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ue(this, l, c);
        default:
          if (v) throw new TypeError("Unknown encoding: " + m);
          m = (m + "").toLowerCase(), v = !0;
      }
  }
  s.prototype._isBuffer = !0;
  function $(m, l, c) {
    const v = m[l];
    m[l] = m[c], m[c] = v;
  }
  s.prototype.swap16 = function() {
    const l = this.length;
    if (l % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let c = 0; c < l; c += 2)
      $(this, c, c + 1);
    return this;
  }, s.prototype.swap32 = function() {
    const l = this.length;
    if (l % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let c = 0; c < l; c += 4)
      $(this, c, c + 3), $(this, c + 1, c + 2);
    return this;
  }, s.prototype.swap64 = function() {
    const l = this.length;
    if (l % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let c = 0; c < l; c += 8)
      $(this, c, c + 7), $(this, c + 1, c + 6), $(this, c + 2, c + 5), $(this, c + 3, c + 4);
    return this;
  }, s.prototype.toString = function() {
    const l = this.length;
    return l === 0 ? "" : arguments.length === 0 ? ne(this, 0, l) : F.apply(this, arguments);
  }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(l) {
    if (!s.isBuffer(l)) throw new TypeError("Argument must be a Buffer");
    return this === l ? !0 : s.compare(this, l) === 0;
  }, s.prototype.inspect = function() {
    let l = "";
    const c = n.INSPECT_MAX_BYTES;
    return l = this.toString("hex", 0, c).replace(/(.{2})/g, "$1 ").trim(), this.length > c && (l += " ... "), "<Buffer " + l + ">";
  }, i && (s.prototype[i] = s.prototype.inspect), s.prototype.compare = function(l, c, v, N, L) {
    if (Ee(l, u) && (l = s.from(l, l.offset, l.byteLength)), !s.isBuffer(l))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof l
      );
    if (c === void 0 && (c = 0), v === void 0 && (v = l ? l.length : 0), N === void 0 && (N = 0), L === void 0 && (L = this.length), c < 0 || v > l.length || N < 0 || L > this.length)
      throw new RangeError("out of range index");
    if (N >= L && c >= v)
      return 0;
    if (N >= L)
      return -1;
    if (c >= v)
      return 1;
    if (c >>>= 0, v >>>= 0, N >>>= 0, L >>>= 0, this === l) return 0;
    let D = L - N, V = v - c;
    const J = Math.min(D, V), re = this.slice(N, L), oe = l.slice(c, v);
    for (let le = 0; le < J; ++le)
      if (re[le] !== oe[le]) {
        D = re[le], V = oe[le];
        break;
      }
    return D < V ? -1 : V < D ? 1 : 0;
  };
  function B(m, l, c, v, N) {
    if (m.length === 0) return -1;
    if (typeof c == "string" ? (v = c, c = 0) : c > 2147483647 ? c = 2147483647 : c < -2147483648 && (c = -2147483648), c = +c, E(c) && (c = N ? 0 : m.length - 1), c < 0 && (c = m.length + c), c >= m.length) {
      if (N) return -1;
      c = m.length - 1;
    } else if (c < 0)
      if (N) c = 0;
      else return -1;
    if (typeof l == "string" && (l = s.from(l, v)), s.isBuffer(l))
      return l.length === 0 ? -1 : W(m, l, c, v, N);
    if (typeof l == "number")
      return l = l & 255, typeof u.prototype.indexOf == "function" ? N ? u.prototype.indexOf.call(m, l, c) : u.prototype.lastIndexOf.call(m, l, c) : W(m, [l], c, v, N);
    throw new TypeError("val must be string, number or Buffer");
  }
  function W(m, l, c, v, N) {
    let L = 1, D = m.length, V = l.length;
    if (v !== void 0 && (v = String(v).toLowerCase(), v === "ucs2" || v === "ucs-2" || v === "utf16le" || v === "utf-16le")) {
      if (m.length < 2 || l.length < 2)
        return -1;
      L = 2, D /= 2, V /= 2, c /= 2;
    }
    function J(oe, le) {
      return L === 1 ? oe[le] : oe.readUInt16BE(le * L);
    }
    let re;
    if (N) {
      let oe = -1;
      for (re = c; re < D; re++)
        if (J(m, re) === J(l, oe === -1 ? 0 : re - oe)) {
          if (oe === -1 && (oe = re), re - oe + 1 === V) return oe * L;
        } else
          oe !== -1 && (re -= re - oe), oe = -1;
    } else
      for (c + V > D && (c = D - V), re = c; re >= 0; re--) {
        let oe = !0;
        for (let le = 0; le < V; le++)
          if (J(m, re + le) !== J(l, le)) {
            oe = !1;
            break;
          }
        if (oe) return re;
      }
    return -1;
  }
  s.prototype.includes = function(l, c, v) {
    return this.indexOf(l, c, v) !== -1;
  }, s.prototype.indexOf = function(l, c, v) {
    return B(this, l, c, v, !0);
  }, s.prototype.lastIndexOf = function(l, c, v) {
    return B(this, l, c, v, !1);
  };
  function k(m, l, c, v) {
    c = Number(c) || 0;
    const N = m.length - c;
    v ? (v = Number(v), v > N && (v = N)) : v = N;
    const L = l.length;
    v > L / 2 && (v = L / 2);
    let D;
    for (D = 0; D < v; ++D) {
      const V = parseInt(l.substr(D * 2, 2), 16);
      if (E(V)) return D;
      m[c + D] = V;
    }
    return D;
  }
  function j(m, l, c, v) {
    return Z(pt(l, m.length - c), m, c, v);
  }
  function U(m, l, c, v) {
    return Z(sr(l), m, c, v);
  }
  function G(m, l, c, v) {
    return Z(Zt(l), m, c, v);
  }
  function H(m, l, c, v) {
    return Z(wr(l, m.length - c), m, c, v);
  }
  s.prototype.write = function(l, c, v, N) {
    if (c === void 0)
      N = "utf8", v = this.length, c = 0;
    else if (v === void 0 && typeof c == "string")
      N = c, v = this.length, c = 0;
    else if (isFinite(c))
      c = c >>> 0, isFinite(v) ? (v = v >>> 0, N === void 0 && (N = "utf8")) : (N = v, v = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const L = this.length - c;
    if ((v === void 0 || v > L) && (v = L), l.length > 0 && (v < 0 || c < 0) || c > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    N || (N = "utf8");
    let D = !1;
    for (; ; )
      switch (N) {
        case "hex":
          return k(this, l, c, v);
        case "utf8":
        case "utf-8":
          return j(this, l, c, v);
        case "ascii":
        case "latin1":
        case "binary":
          return U(this, l, c, v);
        case "base64":
          return G(this, l, c, v);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return H(this, l, c, v);
        default:
          if (D) throw new TypeError("Unknown encoding: " + N);
          N = ("" + N).toLowerCase(), D = !0;
      }
  }, s.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function ce(m, l, c) {
    return l === 0 && c === m.length ? e.fromByteArray(m) : e.fromByteArray(m.slice(l, c));
  }
  function ne(m, l, c) {
    c = Math.min(m.length, c);
    const v = [];
    let N = l;
    for (; N < c; ) {
      const L = m[N];
      let D = null, V = L > 239 ? 4 : L > 223 ? 3 : L > 191 ? 2 : 1;
      if (N + V <= c) {
        let J, re, oe, le;
        switch (V) {
          case 1:
            L < 128 && (D = L);
            break;
          case 2:
            J = m[N + 1], (J & 192) === 128 && (le = (L & 31) << 6 | J & 63, le > 127 && (D = le));
            break;
          case 3:
            J = m[N + 1], re = m[N + 2], (J & 192) === 128 && (re & 192) === 128 && (le = (L & 15) << 12 | (J & 63) << 6 | re & 63, le > 2047 && (le < 55296 || le > 57343) && (D = le));
            break;
          case 4:
            J = m[N + 1], re = m[N + 2], oe = m[N + 3], (J & 192) === 128 && (re & 192) === 128 && (oe & 192) === 128 && (le = (L & 15) << 18 | (J & 63) << 12 | (re & 63) << 6 | oe & 63, le > 65535 && le < 1114112 && (D = le));
        }
      }
      D === null ? (D = 65533, V = 1) : D > 65535 && (D -= 65536, v.push(D >>> 10 & 1023 | 55296), D = 56320 | D & 1023), v.push(D), N += V;
    }
    return we(v);
  }
  const te = 4096;
  function we(m) {
    const l = m.length;
    if (l <= te)
      return String.fromCharCode.apply(String, m);
    let c = "", v = 0;
    for (; v < l; )
      c += String.fromCharCode.apply(
        String,
        m.slice(v, v += te)
      );
    return c;
  }
  function ge(m, l, c) {
    let v = "";
    c = Math.min(m.length, c);
    for (let N = l; N < c; ++N)
      v += String.fromCharCode(m[N] & 127);
    return v;
  }
  function ie(m, l, c) {
    let v = "";
    c = Math.min(m.length, c);
    for (let N = l; N < c; ++N)
      v += String.fromCharCode(m[N]);
    return v;
  }
  function $e(m, l, c) {
    const v = m.length;
    (!l || l < 0) && (l = 0), (!c || c < 0 || c > v) && (c = v);
    let N = "";
    for (let L = l; L < c; ++L)
      N += _[m[L]];
    return N;
  }
  function ue(m, l, c) {
    const v = m.slice(l, c);
    let N = "";
    for (let L = 0; L < v.length - 1; L += 2)
      N += String.fromCharCode(v[L] + v[L + 1] * 256);
    return N;
  }
  s.prototype.slice = function(l, c) {
    const v = this.length;
    l = ~~l, c = c === void 0 ? v : ~~c, l < 0 ? (l += v, l < 0 && (l = 0)) : l > v && (l = v), c < 0 ? (c += v, c < 0 && (c = 0)) : c > v && (c = v), c < l && (c = l);
    const N = this.subarray(l, c);
    return Object.setPrototypeOf(N, s.prototype), N;
  };
  function fe(m, l, c) {
    if (m % 1 !== 0 || m < 0) throw new RangeError("offset is not uint");
    if (m + l > c) throw new RangeError("Trying to access beyond buffer length");
  }
  s.prototype.readUintLE = s.prototype.readUIntLE = function(l, c, v) {
    l = l >>> 0, c = c >>> 0, v || fe(l, c, this.length);
    let N = this[l], L = 1, D = 0;
    for (; ++D < c && (L *= 256); )
      N += this[l + D] * L;
    return N;
  }, s.prototype.readUintBE = s.prototype.readUIntBE = function(l, c, v) {
    l = l >>> 0, c = c >>> 0, v || fe(l, c, this.length);
    let N = this[l + --c], L = 1;
    for (; c > 0 && (L *= 256); )
      N += this[l + --c] * L;
    return N;
  }, s.prototype.readUint8 = s.prototype.readUInt8 = function(l, c) {
    return l = l >>> 0, c || fe(l, 1, this.length), this[l];
  }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(l, c) {
    return l = l >>> 0, c || fe(l, 2, this.length), this[l] | this[l + 1] << 8;
  }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(l, c) {
    return l = l >>> 0, c || fe(l, 2, this.length), this[l] << 8 | this[l + 1];
  }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(l, c) {
    return l = l >>> 0, c || fe(l, 4, this.length), (this[l] | this[l + 1] << 8 | this[l + 2] << 16) + this[l + 3] * 16777216;
  }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(l, c) {
    return l = l >>> 0, c || fe(l, 4, this.length), this[l] * 16777216 + (this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3]);
  }, s.prototype.readBigUInt64LE = S(function(l) {
    l = l >>> 0, ht(l, "offset");
    const c = this[l], v = this[l + 7];
    (c === void 0 || v === void 0) && Qe(l, this.length - 8);
    const N = c + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24, L = this[++l] + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + v * 2 ** 24;
    return BigInt(N) + (BigInt(L) << BigInt(32));
  }), s.prototype.readBigUInt64BE = S(function(l) {
    l = l >>> 0, ht(l, "offset");
    const c = this[l], v = this[l + 7];
    (c === void 0 || v === void 0) && Qe(l, this.length - 8);
    const N = c * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l], L = this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + v;
    return (BigInt(N) << BigInt(32)) + BigInt(L);
  }), s.prototype.readIntLE = function(l, c, v) {
    l = l >>> 0, c = c >>> 0, v || fe(l, c, this.length);
    let N = this[l], L = 1, D = 0;
    for (; ++D < c && (L *= 256); )
      N += this[l + D] * L;
    return L *= 128, N >= L && (N -= Math.pow(2, 8 * c)), N;
  }, s.prototype.readIntBE = function(l, c, v) {
    l = l >>> 0, c = c >>> 0, v || fe(l, c, this.length);
    let N = c, L = 1, D = this[l + --N];
    for (; N > 0 && (L *= 256); )
      D += this[l + --N] * L;
    return L *= 128, D >= L && (D -= Math.pow(2, 8 * c)), D;
  }, s.prototype.readInt8 = function(l, c) {
    return l = l >>> 0, c || fe(l, 1, this.length), this[l] & 128 ? (255 - this[l] + 1) * -1 : this[l];
  }, s.prototype.readInt16LE = function(l, c) {
    l = l >>> 0, c || fe(l, 2, this.length);
    const v = this[l] | this[l + 1] << 8;
    return v & 32768 ? v | 4294901760 : v;
  }, s.prototype.readInt16BE = function(l, c) {
    l = l >>> 0, c || fe(l, 2, this.length);
    const v = this[l + 1] | this[l] << 8;
    return v & 32768 ? v | 4294901760 : v;
  }, s.prototype.readInt32LE = function(l, c) {
    return l = l >>> 0, c || fe(l, 4, this.length), this[l] | this[l + 1] << 8 | this[l + 2] << 16 | this[l + 3] << 24;
  }, s.prototype.readInt32BE = function(l, c) {
    return l = l >>> 0, c || fe(l, 4, this.length), this[l] << 24 | this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3];
  }, s.prototype.readBigInt64LE = S(function(l) {
    l = l >>> 0, ht(l, "offset");
    const c = this[l], v = this[l + 7];
    (c === void 0 || v === void 0) && Qe(l, this.length - 8);
    const N = this[l + 4] + this[l + 5] * 2 ** 8 + this[l + 6] * 2 ** 16 + (v << 24);
    return (BigInt(N) << BigInt(32)) + BigInt(c + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24);
  }), s.prototype.readBigInt64BE = S(function(l) {
    l = l >>> 0, ht(l, "offset");
    const c = this[l], v = this[l + 7];
    (c === void 0 || v === void 0) && Qe(l, this.length - 8);
    const N = (c << 24) + // Overflow
    this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l];
    return (BigInt(N) << BigInt(32)) + BigInt(this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + v);
  }), s.prototype.readFloatLE = function(l, c) {
    return l = l >>> 0, c || fe(l, 4, this.length), r.read(this, l, !0, 23, 4);
  }, s.prototype.readFloatBE = function(l, c) {
    return l = l >>> 0, c || fe(l, 4, this.length), r.read(this, l, !1, 23, 4);
  }, s.prototype.readDoubleLE = function(l, c) {
    return l = l >>> 0, c || fe(l, 8, this.length), r.read(this, l, !0, 52, 8);
  }, s.prototype.readDoubleBE = function(l, c) {
    return l = l >>> 0, c || fe(l, 8, this.length), r.read(this, l, !1, 52, 8);
  };
  function Q(m, l, c, v, N, L) {
    if (!s.isBuffer(m)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (l > N || l < L) throw new RangeError('"value" argument is out of bounds');
    if (c + v > m.length) throw new RangeError("Index out of range");
  }
  s.prototype.writeUintLE = s.prototype.writeUIntLE = function(l, c, v, N) {
    if (l = +l, c = c >>> 0, v = v >>> 0, !N) {
      const V = Math.pow(2, 8 * v) - 1;
      Q(this, l, c, v, V, 0);
    }
    let L = 1, D = 0;
    for (this[c] = l & 255; ++D < v && (L *= 256); )
      this[c + D] = l / L & 255;
    return c + v;
  }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(l, c, v, N) {
    if (l = +l, c = c >>> 0, v = v >>> 0, !N) {
      const V = Math.pow(2, 8 * v) - 1;
      Q(this, l, c, v, V, 0);
    }
    let L = v - 1, D = 1;
    for (this[c + L] = l & 255; --L >= 0 && (D *= 256); )
      this[c + L] = l / D & 255;
    return c + v;
  }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(l, c, v) {
    return l = +l, c = c >>> 0, v || Q(this, l, c, 1, 255, 0), this[c] = l & 255, c + 1;
  }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(l, c, v) {
    return l = +l, c = c >>> 0, v || Q(this, l, c, 2, 65535, 0), this[c] = l & 255, this[c + 1] = l >>> 8, c + 2;
  }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(l, c, v) {
    return l = +l, c = c >>> 0, v || Q(this, l, c, 2, 65535, 0), this[c] = l >>> 8, this[c + 1] = l & 255, c + 2;
  }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(l, c, v) {
    return l = +l, c = c >>> 0, v || Q(this, l, c, 4, 4294967295, 0), this[c + 3] = l >>> 24, this[c + 2] = l >>> 16, this[c + 1] = l >>> 8, this[c] = l & 255, c + 4;
  }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(l, c, v) {
    return l = +l, c = c >>> 0, v || Q(this, l, c, 4, 4294967295, 0), this[c] = l >>> 24, this[c + 1] = l >>> 16, this[c + 2] = l >>> 8, this[c + 3] = l & 255, c + 4;
  };
  function nt(m, l, c, v, N) {
    Ht(l, v, N, m, c, 7);
    let L = Number(l & BigInt(4294967295));
    m[c++] = L, L = L >> 8, m[c++] = L, L = L >> 8, m[c++] = L, L = L >> 8, m[c++] = L;
    let D = Number(l >> BigInt(32) & BigInt(4294967295));
    return m[c++] = D, D = D >> 8, m[c++] = D, D = D >> 8, m[c++] = D, D = D >> 8, m[c++] = D, c;
  }
  function _t(m, l, c, v, N) {
    Ht(l, v, N, m, c, 7);
    let L = Number(l & BigInt(4294967295));
    m[c + 7] = L, L = L >> 8, m[c + 6] = L, L = L >> 8, m[c + 5] = L, L = L >> 8, m[c + 4] = L;
    let D = Number(l >> BigInt(32) & BigInt(4294967295));
    return m[c + 3] = D, D = D >> 8, m[c + 2] = D, D = D >> 8, m[c + 1] = D, D = D >> 8, m[c] = D, c + 8;
  }
  s.prototype.writeBigUInt64LE = S(function(l, c = 0) {
    return nt(this, l, c, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeBigUInt64BE = S(function(l, c = 0) {
    return _t(this, l, c, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeIntLE = function(l, c, v, N) {
    if (l = +l, c = c >>> 0, !N) {
      const J = Math.pow(2, 8 * v - 1);
      Q(this, l, c, v, J - 1, -J);
    }
    let L = 0, D = 1, V = 0;
    for (this[c] = l & 255; ++L < v && (D *= 256); )
      l < 0 && V === 0 && this[c + L - 1] !== 0 && (V = 1), this[c + L] = (l / D >> 0) - V & 255;
    return c + v;
  }, s.prototype.writeIntBE = function(l, c, v, N) {
    if (l = +l, c = c >>> 0, !N) {
      const J = Math.pow(2, 8 * v - 1);
      Q(this, l, c, v, J - 1, -J);
    }
    let L = v - 1, D = 1, V = 0;
    for (this[c + L] = l & 255; --L >= 0 && (D *= 256); )
      l < 0 && V === 0 && this[c + L + 1] !== 0 && (V = 1), this[c + L] = (l / D >> 0) - V & 255;
    return c + v;
  }, s.prototype.writeInt8 = function(l, c, v) {
    return l = +l, c = c >>> 0, v || Q(this, l, c, 1, 127, -128), l < 0 && (l = 255 + l + 1), this[c] = l & 255, c + 1;
  }, s.prototype.writeInt16LE = function(l, c, v) {
    return l = +l, c = c >>> 0, v || Q(this, l, c, 2, 32767, -32768), this[c] = l & 255, this[c + 1] = l >>> 8, c + 2;
  }, s.prototype.writeInt16BE = function(l, c, v) {
    return l = +l, c = c >>> 0, v || Q(this, l, c, 2, 32767, -32768), this[c] = l >>> 8, this[c + 1] = l & 255, c + 2;
  }, s.prototype.writeInt32LE = function(l, c, v) {
    return l = +l, c = c >>> 0, v || Q(this, l, c, 4, 2147483647, -2147483648), this[c] = l & 255, this[c + 1] = l >>> 8, this[c + 2] = l >>> 16, this[c + 3] = l >>> 24, c + 4;
  }, s.prototype.writeInt32BE = function(l, c, v) {
    return l = +l, c = c >>> 0, v || Q(this, l, c, 4, 2147483647, -2147483648), l < 0 && (l = 4294967295 + l + 1), this[c] = l >>> 24, this[c + 1] = l >>> 16, this[c + 2] = l >>> 8, this[c + 3] = l & 255, c + 4;
  }, s.prototype.writeBigInt64LE = S(function(l, c = 0) {
    return nt(this, l, c, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), s.prototype.writeBigInt64BE = S(function(l, c = 0) {
    return _t(this, l, c, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Mt(m, l, c, v, N, L) {
    if (c + v > m.length) throw new RangeError("Index out of range");
    if (c < 0) throw new RangeError("Index out of range");
  }
  function qt(m, l, c, v, N) {
    return l = +l, c = c >>> 0, N || Mt(m, l, c, 4), r.write(m, l, c, v, 23, 4), c + 4;
  }
  s.prototype.writeFloatLE = function(l, c, v) {
    return qt(this, l, c, !0, v);
  }, s.prototype.writeFloatBE = function(l, c, v) {
    return qt(this, l, c, !1, v);
  };
  function It(m, l, c, v, N) {
    return l = +l, c = c >>> 0, N || Mt(m, l, c, 8), r.write(m, l, c, v, 52, 8), c + 8;
  }
  s.prototype.writeDoubleLE = function(l, c, v) {
    return It(this, l, c, !0, v);
  }, s.prototype.writeDoubleBE = function(l, c, v) {
    return It(this, l, c, !1, v);
  }, s.prototype.copy = function(l, c, v, N) {
    if (!s.isBuffer(l)) throw new TypeError("argument should be a Buffer");
    if (v || (v = 0), !N && N !== 0 && (N = this.length), c >= l.length && (c = l.length), c || (c = 0), N > 0 && N < v && (N = v), N === v || l.length === 0 || this.length === 0) return 0;
    if (c < 0)
      throw new RangeError("targetStart out of bounds");
    if (v < 0 || v >= this.length) throw new RangeError("Index out of range");
    if (N < 0) throw new RangeError("sourceEnd out of bounds");
    N > this.length && (N = this.length), l.length - c < N - v && (N = l.length - c + v);
    const L = N - v;
    return this === l && typeof u.prototype.copyWithin == "function" ? this.copyWithin(c, v, N) : u.prototype.set.call(
      l,
      this.subarray(v, N),
      c
    ), L;
  }, s.prototype.fill = function(l, c, v, N) {
    if (typeof l == "string") {
      if (typeof c == "string" ? (N = c, c = 0, v = this.length) : typeof v == "string" && (N = v, v = this.length), N !== void 0 && typeof N != "string")
        throw new TypeError("encoding must be a string");
      if (typeof N == "string" && !s.isEncoding(N))
        throw new TypeError("Unknown encoding: " + N);
      if (l.length === 1) {
        const D = l.charCodeAt(0);
        (N === "utf8" && D < 128 || N === "latin1") && (l = D);
      }
    } else typeof l == "number" ? l = l & 255 : typeof l == "boolean" && (l = Number(l));
    if (c < 0 || this.length < c || this.length < v)
      throw new RangeError("Out of range index");
    if (v <= c)
      return this;
    c = c >>> 0, v = v === void 0 ? this.length : v >>> 0, l || (l = 0);
    let L;
    if (typeof l == "number")
      for (L = c; L < v; ++L)
        this[L] = l;
    else {
      const D = s.isBuffer(l) ? l : s.from(l, N), V = D.length;
      if (V === 0)
        throw new TypeError('The value "' + l + '" is invalid for argument "value"');
      for (L = 0; L < v - c; ++L)
        this[L + c] = D[L % V];
    }
    return this;
  };
  const ct = {};
  function it(m, l, c) {
    ct[m] = class extends c {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: l.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${m}]`, this.stack, delete this.name;
      }
      get code() {
        return m;
      }
      set code(N) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: N,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${m}]: ${this.message}`;
      }
    };
  }
  it(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(m) {
      return m ? `${m} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), it(
    "ERR_INVALID_ARG_TYPE",
    function(m, l) {
      return `The "${m}" argument must be of type number. Received type ${typeof l}`;
    },
    TypeError
  ), it(
    "ERR_OUT_OF_RANGE",
    function(m, l, c) {
      let v = `The value of "${m}" is out of range.`, N = c;
      return Number.isInteger(c) && Math.abs(c) > 2 ** 32 ? N = Tt(String(c)) : typeof c == "bigint" && (N = String(c), (c > BigInt(2) ** BigInt(32) || c < -(BigInt(2) ** BigInt(32))) && (N = Tt(N)), N += "n"), v += ` It must be ${l}. Received ${N}`, v;
    },
    RangeError
  );
  function Tt(m) {
    let l = "", c = m.length;
    const v = m[0] === "-" ? 1 : 0;
    for (; c >= v + 4; c -= 3)
      l = `_${m.slice(c - 3, c)}${l}`;
    return `${m.slice(0, c)}${l}`;
  }
  function ft(m, l, c) {
    ht(l, "offset"), (m[l] === void 0 || m[l + c] === void 0) && Qe(l, m.length - (c + 1));
  }
  function Ht(m, l, c, v, N, L) {
    if (m > c || m < l) {
      const D = typeof l == "bigint" ? "n" : "";
      let V;
      throw l === 0 || l === BigInt(0) ? V = `>= 0${D} and < 2${D} ** ${(L + 1) * 8}${D}` : V = `>= -(2${D} ** ${(L + 1) * 8 - 1}${D}) and < 2 ** ${(L + 1) * 8 - 1}${D}`, new ct.ERR_OUT_OF_RANGE("value", V, m);
    }
    ft(v, N, L);
  }
  function ht(m, l) {
    if (typeof m != "number")
      throw new ct.ERR_INVALID_ARG_TYPE(l, "number", m);
  }
  function Qe(m, l, c) {
    throw Math.floor(m) !== m ? (ht(m, c), new ct.ERR_OUT_OF_RANGE("offset", "an integer", m)) : l < 0 ? new ct.ERR_BUFFER_OUT_OF_BOUNDS() : new ct.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${l}`,
      m
    );
  }
  const kt = /[^+/0-9A-Za-z-_]/g;
  function Yt(m) {
    if (m = m.split("=")[0], m = m.trim().replace(kt, ""), m.length < 2) return "";
    for (; m.length % 4 !== 0; )
      m = m + "=";
    return m;
  }
  function pt(m, l) {
    l = l || 1 / 0;
    let c;
    const v = m.length;
    let N = null;
    const L = [];
    for (let D = 0; D < v; ++D) {
      if (c = m.charCodeAt(D), c > 55295 && c < 57344) {
        if (!N) {
          if (c > 56319) {
            (l -= 3) > -1 && L.push(239, 191, 189);
            continue;
          } else if (D + 1 === v) {
            (l -= 3) > -1 && L.push(239, 191, 189);
            continue;
          }
          N = c;
          continue;
        }
        if (c < 56320) {
          (l -= 3) > -1 && L.push(239, 191, 189), N = c;
          continue;
        }
        c = (N - 55296 << 10 | c - 56320) + 65536;
      } else N && (l -= 3) > -1 && L.push(239, 191, 189);
      if (N = null, c < 128) {
        if ((l -= 1) < 0) break;
        L.push(c);
      } else if (c < 2048) {
        if ((l -= 2) < 0) break;
        L.push(
          c >> 6 | 192,
          c & 63 | 128
        );
      } else if (c < 65536) {
        if ((l -= 3) < 0) break;
        L.push(
          c >> 12 | 224,
          c >> 6 & 63 | 128,
          c & 63 | 128
        );
      } else if (c < 1114112) {
        if ((l -= 4) < 0) break;
        L.push(
          c >> 18 | 240,
          c >> 12 & 63 | 128,
          c >> 6 & 63 | 128,
          c & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return L;
  }
  function sr(m) {
    const l = [];
    for (let c = 0; c < m.length; ++c)
      l.push(m.charCodeAt(c) & 255);
    return l;
  }
  function wr(m, l) {
    let c, v, N;
    const L = [];
    for (let D = 0; D < m.length && !((l -= 2) < 0); ++D)
      c = m.charCodeAt(D), v = c >> 8, N = c % 256, L.push(N), L.push(v);
    return L;
  }
  function Zt(m) {
    return e.toByteArray(Yt(m));
  }
  function Z(m, l, c, v) {
    let N;
    for (N = 0; N < v && !(N + c >= l.length || N >= m.length); ++N)
      l[N + c] = m[N];
    return N;
  }
  function Ee(m, l) {
    return m instanceof l || m != null && m.constructor != null && m.constructor.name != null && m.constructor.name === l.name;
  }
  function E(m) {
    return m !== m;
  }
  const _ = function() {
    const m = "0123456789abcdef", l = new Array(256);
    for (let c = 0; c < 16; ++c) {
      const v = c * 16;
      for (let N = 0; N < 16; ++N)
        l[v + N] = m[c] + m[N];
    }
    return l;
  }();
  function S(m) {
    return typeof BigInt > "u" ? P : m;
  }
  function P() {
    throw new Error("BigInt not supported");
  }
})(sa);
const gf = sa.Buffer, gt = 100 * 1e3 * 1e3, mf = 32768, yf = 9783072e5;
class wf {
  constructor(e) {
    console.info({ id: e });
  }
}
class Ef {
  constructor() {
    this.debug = !1;
  }
  parse64Content(e) {
    const r = window.atob(e), i = r.length, o = new gf(i);
    for (let u = 0; u < i; u++)
      o[u] = r.charCodeAt(u);
    return this.parseBuffer(o);
  }
  parseBuffer(e) {
    if (e.toString("utf8", 0, 6) !== "bplist")
      throw new Error("Invalid binary plist. Expected 'bplist' at offset 0.");
    const o = e.slice(e.length - 32, e.length), u = o.readUInt8(6);
    this.debug && console.log("offsetSize: " + u);
    const p = o.readUInt8(7);
    this.debug && console.log("objectRefSize: " + p);
    const f = this.readUInt64BE(o, 8);
    this.debug && console.log("numObjects: " + f);
    const h = this.readUInt64BE(o, 16);
    this.debug && console.log("topObject: " + h);
    const a = this.readUInt64BE(o, 24);
    if (this.debug && console.log("offsetTableOffset: " + a), f > mf)
      throw new Error("maxObjectCount exceeded");
    const s = [];
    for (let d = 0; d < f; d++) {
      const w = e.slice(a + d * u, a + (d + 1) * u);
      s[d] = this.readUInt(w, 0), this.debug;
    }
    const g = (d) => {
      const w = s[d], y = e[w], b = (y & 240) >> 4, I = y & 15, R = () => {
        switch (I) {
          case 0:
            return null;
          case 8:
            return !1;
          case 9:
            return !0;
          case 15:
            return null;
          default:
            throw new Error("Unhandled simple type 0x" + b.toString(16));
        }
      }, A = (k) => {
        let j = "", U;
        for (U = 0; U < k.length && k[U] === 0; U++)
          ;
        for (; U < k.length; U++) {
          const G = "00" + k[U].toString(16);
          j += G.substr(G.length - 2);
        }
        return j;
      }, T = () => {
        const k = Math.pow(2, I);
        if (k > 4) {
          const j = e.slice(w + 1, w + 1 + k), U = A(j);
          return sf(U, 16);
        }
        if (k < gt)
          return this.readUInt(e.slice(w + 1, w + 1 + k));
        throw new Error(
          "Too little heap space available! Wanted to read " + k + " bytes, but only " + gt + " are available."
        );
      }, x = () => {
        const k = I + 1;
        if (k < gt)
          return new wf(this.readUInt(e.slice(w + 1, w + 1 + k)));
        throw new Error(
          "To little heap space available! Wanted to read " + k + " bytes, but only " + gt + " are available."
        );
      }, O = () => {
        const k = Math.pow(2, I);
        if (k < gt) {
          const j = e.slice(w + 1, w + 1 + k);
          if (k === 4)
            return j.readFloatBE(0);
          if (k === 8)
            return j.readDoubleBE(0);
        } else
          throw new Error(
            "To little heap space available! Wanted to read " + k + " bytes, but only " + gt + " are available."
          );
      }, M = () => {
        I !== 3 && console.error("Unknown date type :" + I + ". Parsing anyway...");
        const k = e.slice(w + 1, w + 9);
        return new Date(yf + 1e3 * k.readDoubleBE(0));
      }, F = () => {
        let k = 1, j = I;
        if (I === 15) {
          const U = e[w + 1], G = (U & 240) / 16;
          G !== 1 && console.error("0x4: UNEXPECTED LENGTH-INT TYPE! " + G);
          const H = U & 15, ce = Math.pow(2, H);
          k = 2 + ce, ce < 3 ? j = this.readUInt(e.slice(w + 2, w + 2 + ce)) : j = this.readUInt(e.slice(w + 2, w + 2 + ce));
        }
        if (j < gt)
          return e.slice(w + k, w + k + j);
        throw new Error(
          "To little heap space available! Wanted to read " + j + " bytes, but only " + gt + " are available."
        );
      }, $ = (k) => {
        k = k || 0;
        let j = "utf8", U = I, G = 1;
        if (I === 15) {
          const H = e[w + 1], ce = (H & 240) / 16;
          ce !== 1 && console.error("UNEXPECTED LENGTH-INT TYPE! " + ce);
          const ne = H & 15, te = Math.pow(2, ne);
          G = 2 + te, te < 3 ? U = this.readUInt(e.slice(w + 2, w + 2 + te)) : U = this.readUInt(e.slice(w + 2, w + 2 + te));
        }
        if (U *= k + 1, U < gt) {
          let H = e.toString("utf8", w + G, w + G + U);
          return k && (H = this.swapBytes(H), j = "ucs2"), H.toString(j);
        } else
          throw new Error(
            "To little heap space available! Wanted to read " + U + " bytes, but only " + gt + " are available."
          );
      }, B = () => {
        let k = I, j = 1;
        if (I === 15) {
          const G = e[w + 1], H = (G & 240) / 16;
          H !== 1 && console.error("0xa: UNEXPECTED LENGTH-INT TYPE! " + H);
          const ce = G & 15, ne = Math.pow(2, ce);
          j = 2 + ne, ne < 3 ? k = this.readUInt(e.slice(w + 2, w + 2 + ne)) : k = this.readUInt(e.slice(w + 2, w + 2 + ne));
        }
        if (k * p > gt)
          throw new Error("To little heap space available!");
        const U = [];
        for (let G = 0; G < k; G++) {
          const H = this.readUInt(
            e.slice(w + j + G * p, w + j + (G + 1) * p)
          );
          U[G] = g(H);
        }
        return U;
      }, W = () => {
        let k = I, j = 1;
        if (I === 15) {
          const G = e[w + 1], H = (G & 240) / 16;
          H !== 1 && console.error("0xD: UNEXPECTED LENGTH-INT TYPE! " + H);
          const ce = G & 15, ne = Math.pow(2, ce);
          j = 2 + ne, ne < 3 ? k = this.readUInt(e.slice(w + 2, w + 2 + ne)) : k = this.readUInt(e.slice(w + 2, w + 2 + ne));
        }
        if (k * 2 * p > gt)
          throw new Error("To little heap space available!");
        this.debug && console.log("Parsing dictionary #" + d);
        const U = {};
        for (let G = 0; G < k; G++) {
          const H = this.readUInt(
            e.slice(w + j + G * p, w + j + (G + 1) * p)
          ), ce = this.readUInt(
            e.slice(
              w + j + k * p + G * p,
              w + j + k * p + (G + 1) * p
            )
          ), ne = g(H), te = g(ce);
          this.debug && console.log("  DICT #" + d + ": Mapped " + ne + " to " + te), U[ne] = te;
        }
        return U;
      };
      switch (b) {
        case 0:
          return R();
        case 1:
          return T();
        case 8:
          return x();
        case 2:
          return O();
        case 3:
          return M();
        case 4:
          return F();
        case 5:
          return $();
        case 6:
          return $(!0);
        case 10:
          return B();
        case 13:
          return W();
        default:
          throw new Error("Unhandled type 0x" + b.toString(16));
      }
    };
    return [g(h)];
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
const vf = new Ef(), xt = {
  skipConfirmation: "X-Skip-Confirm-Navigation=1",
  sameWindow: "X-Target=_self"
}, Jt = {
  skipConfirmation: "X-Skip-Confirm-Navigation",
  sameWindow: "X-Target"
}, qo = {
  url: "",
  sameWindow: !1,
  skipConfirmation: !1
};
class st {
  /**
   * Generates a URL file.
   */
  static generateURLFileContent(e, r, i = !1, o = !1) {
    let u = "";
    return e && e.indexOf("[InternetShortcut]") !== -1 && e.indexOf("URL=") !== -1 ? u = e.replace(new RegExp("URL=.*", "gm"), `URL=${He(r)}`) : u = `[InternetShortcut]\r
URL=${He(r)}`, !i && u.indexOf(xt.sameWindow) !== -1 ? u = u.replace(xt.sameWindow, "") : i && u.indexOf(xt.sameWindow) === -1 && (u = `${u}\r
${xt.sameWindow}`), !o && u.indexOf(xt.skipConfirmation) !== -1 ? u = u.replace(xt.skipConfirmation, "") : o && u.indexOf(xt.skipConfirmation) === -1 && (u = `${u}\r
${xt.skipConfirmation}`), u = u.replace(/\r\n\r\n/gm, `\r
`).trim(), `${u}\r
`;
  }
  /**
   * Parse a URL file.
   */
  static parseURLFile(e) {
    const r = { ...qo };
    if (e) {
      const i = e.match("URL=.*");
      if (i && Array.isArray(i) && i.length > 0) {
        const o = i[0];
        r.url = He(o.replace("URL=", ""));
      }
      e.indexOf(xt.skipConfirmation) !== -1 && (r.skipConfirmation = !0), e.indexOf(xt.sameWindow) !== -1 && (r.sameWindow = !0);
    }
    return r;
  }
  /**
   * Generates a webloc file.
   */
  static generateWeblocFileContent(e, r, i = !1, o = !1) {
    let u = "", p = !1;
    if (e) {
      const f = new window.DOMParser(), h = Yo(e), a = f.parseFromString(h, "text/xml"), s = [...a.getElementsByTagName("dict"), ...a.getElementsByTagName("extra")];
      let g = !1, d = !1;
      if (s && s.length)
        for (const y of s) {
          const b = y.getElementsByTagName("key"), I = y.getElementsByTagName("string");
          bt(b) === "URL" && (ri(I, He(r)), p = !0), bt(b) === Jt.sameWindow && bt(I) === "_self" && (i ? ri(I, "_self") : a.getElementsByTagName("plist")[0].removeChild(y), d = !0), bt(b) === Jt.skipConfirmation && bt(I) === "1" && (o ? ri(I, "1") : a.getElementsByTagName("plist")[0].removeChild(y), g = !0);
        }
      if (i && !d) {
        const y = Ho(a, Jt.sameWindow, "_self");
        a.getElementsByTagName("plist")[0].appendChild(y);
      }
      if (o && !g) {
        const y = Ho(a, Jt.skipConfirmation, "1");
        a.getElementsByTagName("plist")[0].appendChild(y);
      }
      u = `<?xml version="1.0" encoding="UTF-8"?>
			${new window.XMLSerializer().serializeToString(a)}`, u.indexOf("parsererror") > -1 && (console.error("Parse error", u), u = ""), u = bf(u);
    }
    return (!u || !p) && (u = `<?xml version="1.0" encoding="UTF-8"?>
				<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
				<plist version="1.0">
					<dict>
						<key>URL</key>
						<string>${He(r)}</string>
					</dict>`, i && (u = `${u}
				<extra>
					<key>${Jt.sameWindow}</key>
					<string>_self</string>
				</extra>`), o && (u = `${u}
				<extra>
					<key>${Jt.skipConfirmation}</key>
					<string>1</string>
				</extra>`), u = `${u}
			</plist>`), u = Af(u), u = u.replace(/(\n|\b)\t+/g, "$1").trim(), u = u.replace(/^\s*$(?:\r\n?|\n)/gm, "").trim(), u;
  }
  /**
   * Parse a webloc file.
   */
  static parseWeblocFile(e) {
    const r = { ...qo };
    if (e)
      if (e.substring(0, 6) === "bplist")
        try {
          const i = vf.parse64Content(window.btoa(e));
          i && i.length && i[0] && i[0].URL && (r.url = i[0].URL);
        } catch (i) {
          console.info(i);
        }
      else {
        const i = new window.DOMParser(), o = Yo(e), u = i.parseFromString(o, "text/xml"), p = [...u.getElementsByTagName("dict"), ...u.getElementsByTagName("extra")];
        if (p && p.length)
          for (const f of p) {
            const h = f.getElementsByTagName("key"), a = f.getElementsByTagName("string");
            bt(h) === "URL" && (r.url = He(bt(a))), bt(h) === Jt.sameWindow && bt(a) === "_self" && (r.sameWindow = !0), bt(h) === Jt.skipConfirmation && bt(a) === "1" && (r.skipConfirmation = !0);
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
const bt = (n) => n && n.length > 0 && n[0].childNodes && n[0].childNodes.length > 0 && n[0].childNodes[0] ? n[0].childNodes[0].nodeValue : "", ri = (n, e) => {
  n && n.length > 0 && n[0].childNodes && n[0].childNodes.length > 0 && n[0].childNodes[0] && (n[0].childNodes[0].nodeValue = e);
}, Ho = (n, e, r) => {
  const i = n.createElement("extra"), o = n.createElement("key");
  o.appendChild(n.createTextNode(e)), i.appendChild(o);
  const u = n.createElement("string");
  return u.appendChild(n.createTextNode(r)), i.appendChild(u), i;
}, bf = (n) => n.replace(/></g, `>
<`), Af = (n) => n.replace(/<extra>/g, "<!-- <extra>").replace(/<\/extra>/g, "</extra> -->"), Yo = (n) => n.replace(/<!-- <extra>/g, "<extra>").replace(/<\/extra> -->/g, "</extra>");
function _f(n) {
  let e, r, i, o, u = (
    /*t*/
    n[1]("files_linkeditor", "View link") + ""
  ), p, f, h;
  return {
    c() {
      e = se("div"), r = se("a"), i = se("span"), o = be(), p = Ue(u), q(i, "class", "icon icon-link"), q(r, "href", "#/"), q(r, "class", "button"), q(r, "id", "downloadFile"), q(e, "class", "directDownload");
    },
    m(a, s) {
      de(a, e, s), ee(e, r), ee(r, i), ee(r, o), ee(r, p), f || (h = rt(r, "click", Wt(function() {
        mi(
          /*onClick*/
          n[0]
        ) && n[0].apply(this, arguments);
      })), f = !0);
    },
    p(a, [s]) {
      n = a;
    },
    i: Dt,
    o: Dt,
    d(a) {
      a && he(e), f = !1, h();
    }
  };
}
function If(n, e, r) {
  let { onClick: i } = e;
  const o = window.t;
  return n.$$set = (u) => {
    "onClick" in u && r(0, i = u.onClick);
  }, [i, o];
}
class Tf extends Fr {
  constructor(e) {
    super(), $r(this, e, If, _f, dr, { onClick: 0 });
  }
}
const fn = "application/internet-shortcut", Nf = [];
class er {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    var i, o, u, p, f, h, a, s;
    (o = (i = window.OCA.Files) == null ? void 0 : i.fileActions) == null || o.registerAction({
      name: "editLink",
      displayName: t("files_linkeditor", "Edit link"),
      mime: fn,
      actionHandler: async (g, d) => await er.loadAndChangeViewMode({ fileName: g, context: d, nextViewMode: "edit" }),
      permissions: window.OC.currentUser && window.OC.PERMISSION_UPDATE,
      iconClass: "icon-link"
    }), (p = (u = window.OCA.Files) == null ? void 0 : u.fileActions) == null || p.registerAction({
      name: "viewLink",
      displayName: t("files_linkeditor", "View link"),
      mime: fn,
      actionHandler: async (g, d) => {
        window.OC.currentUser ? await er.loadAndChangeViewMode({ fileName: g, context: d, nextViewMode: "view" }) : await er.loadAndChangeViewMode({
          fileName: g,
          context: d,
          nextViewMode: "view",
          downloadUrl: d.fileList.getDownloadUrl(g),
          publicUser: !0
        });
      },
      permissions: window.OC.PERMISSION_READ,
      iconClass: "icon-link"
    }), (h = (f = window.OCA.Files) == null ? void 0 : f.fileActions) == null || h.setDefault(fn, "viewLink"), (s = (a = window.OC.Plugins) == null ? void 0 : a.register) == null || s.call(a, "OCA.Files.NewFileMenu", {
      attach: function(g) {
        const d = g.fileList;
        if (d.id !== "files")
          return;
        const w = ({ id: y, displayName: b, templateName: I }) => {
          g.addMenuEntry({
            id: y,
            displayName: b,
            templateName: I,
            iconClass: "icon-link",
            fileType: fn,
            actionHandler: function(R) {
              const A = d.getCurrentDirectory();
              ut.update(() => "edit"), Ft.update(
                () => wt.getFileConfig({
                  name: R,
                  dir: A,
                  isNew: !0,
                  onCreate: async (T) => {
                    await d.createFile(R, {
                      scrollTo: !1
                    });
                    const x = await wt.load({ fileName: R, dir: A });
                    await er.saveAndChangeViewMode({ ...T, fileModifiedTime: x.mtime });
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
      var r = st.getExtension(g);
      if (r === "url" || r === "webloc") {
        const d = (document.querySelector("input#downloadURL") || { value: "" }).value;
        Nf.push(
          new Tf({
            anchor: document.querySelector(".directDownload"),
            target: document.querySelector(".directDownload").parentElement,
            props: {
              onClick: () => {
                er.loadAndChangeViewMode({
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
  static async loadAndChangeViewMode({ fileName: e, context: r, nextViewMode: i, publicUser: o, downloadUrl: u }) {
    const p = r ? encodeURI(r.fileList.linkTo() + "?path=" + r.dir) : window.location.href;
    ut.update(() => i), Ft.update(
      () => wt.getFileConfig({
        name: e,
        currentUrl: p,
        dir: r ? r.dir : ""
      })
    );
    let f = {};
    if (o ? f = await wt.loadPublic({ downloadUrl: u }) : f = await wt.load({ fileName: e, dir: r.dir }), f) {
      const h = st.getExtension(e);
      let a = {};
      h === "webloc" ? a = st.parseWeblocFile(f.filecontents) : a = st.parseURLFile(f.filecontents), Ft.update(
        (s) => wt.getFileConfig({ ...s, ...a, fileModifiedTime: f.mtime, isLoaded: !0 })
      );
    } else
      window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async saveAndChangeViewMode({ name: e, dir: r, url: i, fileModifiedTime: o, sameWindow: u, skipConfirmation: p }) {
    const f = st.getExtension(e);
    let h = "";
    f === "webloc" ? h = st.generateWeblocFileContent("", i, u, p) : h = st.generateURLFileContent("", i, u, p), await wt.save({ fileContent: h, name: e, dir: r, fileModifiedTime: o }), ut.update(() => "none");
  }
}
function Zo(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Link target URL") + ""
  ), i, o, u, p, f, h, a, s, g, d, w, y, b, I, R, A;
  return {
    c() {
      e = se("label"), i = Ue(r), o = be(), u = se("br"), p = be(), f = se("input"), h = be(), a = se("input"), s = be(), g = se("label"), g.textContent = `${/*t*/
      n[2]("files_linkeditor", "Open in same window")}`, d = be(), w = se("input"), b = be(), I = se("label"), I.textContent = `${/*t*/
      n[2]("files_linkeditor", "Skip confirmation dialog before open (has to open in same window)")}`, q(f, "type", "text"), wi(f, "width", "100%"), q(f, "class", "input-wide"), f.autofocus = !0, q(f, "data-cy", "url-input"), q(
        f,
        "placeholder",
        /*t*/
        n[2]("files_linkeditor", "e.g. https://example.org")
      ), q(a, "type", "checkbox"), q(a, "id", "linkeditor_sameWindow"), q(a, "class", "checkbox"), q(g, "for", "linkeditor_sameWindow"), q(g, "class", "space-top"), q(w, "type", "checkbox"), w.disabled = y = !/*file*/
      n[0].sameWindow, q(w, "id", "linkeditor_skipConfirmation"), q(w, "class", "checkbox"), q(I, "for", "linkeditor_skipConfirmation");
    },
    m(T, x) {
      de(T, e, x), ee(e, i), ee(e, o), ee(e, u), ee(e, p), ee(e, f), yn(
        f,
        /*file*/
        n[0].url
      ), de(T, h, x), de(T, a, x), a.checked = /*file*/
      n[0].sameWindow, de(T, s, x), de(T, g, x), de(T, d, x), de(T, w, x), w.checked = /*file*/
      n[0].skipConfirmation, de(T, b, x), de(T, I, x), f.focus(), R || (A = [
        rt(
          f,
          "input",
          /*input0_input_handler*/
          n[5]
        ),
        rt(
          a,
          "change",
          /*input1_change_handler*/
          n[6]
        ),
        rt(
          w,
          "change",
          /*input2_change_handler*/
          n[7]
        )
      ], R = !0);
    },
    p(T, x) {
      x & /*file*/
      1 && f.value !== /*file*/
      T[0].url && yn(
        f,
        /*file*/
        T[0].url
      ), x & /*file*/
      1 && (a.checked = /*file*/
      T[0].sameWindow), x & /*file*/
      1 && y !== (y = !/*file*/
      T[0].sameWindow) && (w.disabled = y), x & /*file*/
      1 && (w.checked = /*file*/
      T[0].skipConfirmation);
    },
    d(T) {
      T && (he(e), he(h), he(a), he(s), he(g), he(d), he(w), he(b), he(I)), R = !1, Vt(A);
    }
  };
}
function Ko(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Visit link") + ""
  ), i, o;
  return {
    c() {
      e = se("a"), i = Ue(r), q(e, "href", o = He(
        /*file*/
        n[0].url
      )), q(e, "target", "_blank"), q(e, "class", "button");
    },
    m(u, p) {
      de(u, e, p), ee(e, i);
    },
    p(u, p) {
      p & /*file*/
      1 && o !== (o = He(
        /*file*/
        u[0].url
      )) && q(e, "href", o);
    },
    d(u) {
      u && he(e);
    }
  };
}
function Jo(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Save") + ""
  ), i, o, u;
  return {
    c() {
      e = se("a"), i = Ue(r), q(e, "href", window.location.href), q(e, "class", "primary button");
    },
    m(p, f) {
      de(p, e, f), ee(e, i), o || (u = rt(e, "click", Wt(
        /*save*/
        n[4]
      )), o = !0);
    },
    p: Dt,
    d(p) {
      p && he(e), o = !1, u();
    }
  };
}
function Of(n) {
  let e, r, i, o = (
    /*file*/
    n[0].name + ""
  ), u, p, f, h, a, s, g, d = (
    /*t*/
    n[2]("files_linkeditor", "Cancel") + ""
  ), w, y, b, I, R = !/*loading*/
  n[1] && Zo(n), A = !/*loading*/
  n[1] && Ko(n), T = !/*loading*/
  n[1] && Jo(n);
  return {
    c() {
      e = se("form"), r = se("div"), i = se("h3"), u = Ue(o), p = be(), R && R.c(), f = be(), h = se("div"), A && A.c(), a = be(), s = se("div"), g = se("a"), w = Ue(d), y = be(), T && T.c(), q(r, "class", "edit"), q(h, "class", "oc-dialog-buttonrow onebutton urlvisit"), q(g, "href", window.location.href), q(g, "class", "cancel button"), q(s, "class", "oc-dialog-buttonrow twobuttons"), q(
        e,
        "action",
        /*OC*/
        n[3].generateUrl("/")
      ), q(e, "method", "post");
    },
    m(x, O) {
      de(x, e, O), ee(e, r), ee(r, i), ee(i, u), ee(r, p), R && R.m(r, null), ee(e, f), ee(e, h), A && A.m(h, null), ee(e, a), ee(e, s), ee(s, g), ee(g, w), ee(s, y), T && T.m(s, null), b || (I = [
        rt(g, "click", Wt(
          /*click_handler*/
          n[8]
        )),
        rt(e, "submit", Wt(
          /*save*/
          n[4]
        ))
      ], b = !0);
    },
    p(x, O) {
      O & /*file*/
      1 && o !== (o = /*file*/
      x[0].name + "") && yi(u, o), /*loading*/
      x[1] ? R && (R.d(1), R = null) : R ? R.p(x, O) : (R = Zo(x), R.c(), R.m(r, null)), /*loading*/
      x[1] ? A && (A.d(1), A = null) : A ? A.p(x, O) : (A = Ko(x), A.c(), A.m(h, null)), /*loading*/
      x[1] ? T && (T.d(1), T = null) : T ? T.p(x, O) : (T = Jo(x), T.c(), T.m(s, null));
    },
    d(x) {
      x && he(e), R && R.d(), A && A.d(), T && T.d(), b = !1, Vt(I);
    }
  };
}
function Rf(n) {
  let e, r;
  return e = new Ei({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [Of] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Pr(e.$$.fragment);
    },
    m(i, o) {
      gr(e, i, o), r = !0;
    },
    p(i, [o]) {
      const u = {};
      o & /*loading*/
      2 && (u.loading = /*loading*/
      i[1]), o & /*$$scope, loading, file*/
      1027 && (u.$$scope = { dirty: o, ctx: i }), e.$set(u);
    },
    i(i) {
      r || (Me(e.$$.fragment, i), r = !0);
    },
    o(i) {
      at(e.$$.fragment, i), r = !1;
    },
    d(i) {
      mr(e, i);
    }
  };
}
function xf(n, e, r) {
  let i, o;
  const u = window.t, p = window.OC;
  let f;
  On(() => {
    f = Ft.subscribe((w) => {
      r(0, i = w), i && (i.isLoaded || i.isNew) && r(1, o = !1);
    });
  }), Rn(() => {
    f();
  });
  const h = () => {
    r(1, o = !0), i.isNew && i.onCreate ? i.onCreate({ ...i }) : er.saveAndChangeViewMode({ ...i });
  };
  function a() {
    i.url = this.value, r(0, i);
  }
  function s() {
    i.sameWindow = this.checked, r(0, i);
  }
  function g() {
    i.skipConfirmation = this.checked, r(0, i);
  }
  const d = () => {
    ut.update(() => "none");
  };
  return r(0, i = wt.getFileConfig()), r(1, o = !0), [
    i,
    o,
    u,
    p,
    h,
    a,
    s,
    g,
    d
  ];
}
class Sf extends Fr {
  constructor(e) {
    super(), $r(this, e, xf, Rf, dr, {});
  }
}
class Qt {
  static getFileConfig({
    name: e,
    url: r,
    downloadUrl: i,
    dir: o,
    onCreate: u,
    fileModifiedTime: p,
    isNew: f,
    isLoaded: h,
    sameWindow: a,
    skipConfirmation: s,
    permissions: g,
    existingContents: d,
    templateName: w
  } = {}) {
    return {
      name: e || "?",
      downloadUrl: i || "",
      url: r ? He(r) : "",
      dir: o || "",
      onCreate: u,
      fileModifiedTime: p || null,
      isNew: f || !1,
      isLoaded: h || !1,
      sameWindow: a || !1,
      skipConfirmation: s || !1,
      permissions: g || ke.NONE,
      existingContents: d,
      templateName: w
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
    const u = Gc(), p = `${ra}${o}`;
    try {
      if (await u.putFileContents(p, e, { overwrite: !1 })) {
        const h = await u.stat(p, { details: !0, data: Dc() });
        return cu("files:node:created", Wc(h.data)), !0;
      }
    } catch (f) {
      console.error(f);
    }
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
}
const Qo = (n) => {
  if (!(n != null && n.name) || !(n != null && n.templateName))
    return n;
  const [, e] = n.templateName.split(".") ?? [], r = n.name.toLocaleLowerCase();
  return e && !r.endsWith(e.toLocaleLowerCase()) && (n.name += `.${e}`), n;
};
function es(n) {
  let e, r = (
    /*t*/
    n[3]("files_linkeditor", "File name") + ""
  ), i, o, u, p, f, h, a;
  return {
    c() {
      e = se("label"), i = Ue(r), o = be(), u = se("br"), p = be(), f = se("input"), q(f, "type", "text"), wi(f, "width", "100%"), q(f, "class", "input-wide"), f.autofocus = !0, q(f, "data-cy", "name-input");
    },
    m(s, g) {
      de(s, e, g), ee(e, i), ee(e, o), ee(e, u), ee(e, p), ee(e, f), yn(
        f,
        /*file*/
        n[0].name
      ), f.focus(), h || (a = [
        rt(
          f,
          "input",
          /*input_input_handler*/
          n[7]
        ),
        rt(
          f,
          "keyup",
          /*checkConflicts*/
          n[5]
        )
      ], h = !0);
    },
    p(s, g) {
      g & /*file*/
      1 && f.value !== /*file*/
      s[0].name && yn(
        f,
        /*file*/
        s[0].name
      );
    },
    d(s) {
      s && he(e), h = !1, Vt(a);
    }
  };
}
function ts(n) {
  let e, r = (
    /*t*/
    n[3]("files_linkeditor", "Create") + ""
  ), i, o, u;
  return {
    c() {
      e = se("button"), i = Ue(r), q(e, "type", "button"), e.disabled = /*isConflicting*/
      n[2], q(e, "class", "primary button");
    },
    m(p, f) {
      de(p, e, f), ee(e, i), o || (u = rt(e, "click", Wt(
        /*save*/
        n[6]
      )), o = !0);
    },
    p(p, f) {
      f & /*isConflicting*/
      4 && (e.disabled = /*isConflicting*/
      p[2]);
    },
    d(p) {
      p && he(e), o = !1, u();
    }
  };
}
function Lf(n) {
  let e, r, i, o, u, p, f, h = (
    /*t*/
    n[3]("files_linkeditor", "Cancel") + ""
  ), a, s, g, d, w = !/*loading*/
  n[1] && es(n), y = !/*loading*/
  n[1] && ts(n);
  return {
    c() {
      e = se("form"), r = se("div"), i = se("h3"), i.textContent = `${window.t("files_linkeditor", "New link")}`, o = be(), w && w.c(), u = be(), p = se("div"), f = se("a"), a = Ue(h), s = be(), y && y.c(), q(r, "class", "edit"), q(f, "href", window.location.href), q(f, "class", "cancel button"), q(p, "class", "oc-dialog-buttonrow twobuttons"), q(
        e,
        "action",
        /*OC*/
        n[4].generateUrl("/")
      ), q(e, "method", "post");
    },
    m(b, I) {
      de(b, e, I), ee(e, r), ee(r, i), ee(r, o), w && w.m(r, null), ee(e, u), ee(e, p), ee(p, f), ee(f, a), ee(p, s), y && y.m(p, null), g || (d = [
        rt(f, "click", Wt(
          /*click_handler*/
          n[8]
        )),
        rt(e, "submit", Wt(
          /*save*/
          n[6]
        ))
      ], g = !0);
    },
    p(b, I) {
      /*loading*/
      b[1] ? w && (w.d(1), w = null) : w ? w.p(b, I) : (w = es(b), w.c(), w.m(r, null)), /*loading*/
      b[1] ? y && (y.d(1), y = null) : y ? y.p(b, I) : (y = ts(b), y.c(), y.m(p, null));
    },
    d(b) {
      b && he(e), w && w.d(), y && y.d(), g = !1, Vt(d);
    }
  };
}
function Cf(n) {
  let e, r;
  return e = new Ei({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [Lf] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Pr(e.$$.fragment);
    },
    m(i, o) {
      gr(e, i, o), r = !0;
    },
    p(i, [o]) {
      const u = {};
      o & /*loading*/
      2 && (u.loading = /*loading*/
      i[1]), o & /*$$scope, isConflicting, loading, file*/
      2055 && (u.$$scope = { dirty: o, ctx: i }), e.$set(u);
    },
    i(i) {
      r || (Me(e.$$.fragment, i), r = !0);
    },
    o(i) {
      at(e.$$.fragment, i), r = !1;
    },
    d(i) {
      mr(e, i);
    }
  };
}
function Pf(n, e, r) {
  let i, o, u;
  const p = window.t, f = window.OC, h = (y, b) => {
    const I = {
      name: y,
      templateName: i.templateName
    }, R = Qo(I);
    return ((b == null ? void 0 : b.map((T) => T.basename)) ?? []).includes(R.name);
  };
  let a;
  On(() => {
    a = Ft.subscribe((y) => {
      r(0, i = y), i && (i.isLoaded || i.isNew) && (r(1, o = !1), s());
    });
  }), Rn(() => {
    a();
  });
  const s = () => {
    h(i.name, i.existingContents) ? r(2, u = !0) : r(2, u = !1);
  }, g = () => {
    h(i.name, i.existingContents) || (r(1, o = !0), i.onCreate(Qo({ ...i })));
  };
  function d() {
    i.name = this.value, r(0, i);
  }
  const w = () => {
    ut.update(() => "none");
  };
  return r(0, i = Qt.getFileConfig()), r(1, o = !0), r(2, u = !0), [
    i,
    o,
    u,
    p,
    f,
    s,
    g,
    d,
    w
  ];
}
class $f extends Fr {
  constructor(e) {
    super(), $r(this, e, Pf, Cf, dr, {});
  }
}
function rs(n) {
  let e, r;
  return e = new $f({}), {
    c() {
      Pr(e.$$.fragment);
    },
    m(i, o) {
      gr(e, i, o), r = !0;
    },
    i(i) {
      r || (Me(e.$$.fragment, i), r = !0);
    },
    o(i) {
      at(e.$$.fragment, i), r = !1;
    },
    d(i) {
      mr(e, i);
    }
  };
}
function ns(n) {
  let e, r;
  return e = new nf({}), {
    c() {
      Pr(e.$$.fragment);
    },
    m(i, o) {
      gr(e, i, o), r = !0;
    },
    i(i) {
      r || (Me(e.$$.fragment, i), r = !0);
    },
    o(i) {
      at(e.$$.fragment, i), r = !1;
    },
    d(i) {
      mr(e, i);
    }
  };
}
function is(n) {
  let e, r;
  return e = new Sf({}), {
    c() {
      Pr(e.$$.fragment);
    },
    m(i, o) {
      gr(e, i, o), r = !0;
    },
    i(i) {
      r || (Me(e.$$.fragment, i), r = !0);
    },
    o(i) {
      at(e.$$.fragment, i), r = !1;
    },
    d(i) {
      mr(e, i);
    }
  };
}
function Ff(n) {
  let e, r, i, o, u = (
    /*viewMode*/
    n[0] === "filename" && rs()
  ), p = (
    /*viewMode*/
    n[0] === "view" && ns()
  ), f = (
    /*viewMode*/
    n[0] === "edit" && is()
  );
  return {
    c() {
      u && u.c(), e = be(), p && p.c(), r = be(), f && f.c(), i = va();
    },
    m(h, a) {
      u && u.m(h, a), de(h, e, a), p && p.m(h, a), de(h, r, a), f && f.m(h, a), de(h, i, a), o = !0;
    },
    p(h, [a]) {
      /*viewMode*/
      h[0] === "filename" ? u ? a & /*viewMode*/
      1 && Me(u, 1) : (u = rs(), u.c(), Me(u, 1), u.m(e.parentNode, e)) : u && (Un(), at(u, 1, 1, () => {
        u = null;
      }), Bn()), /*viewMode*/
      h[0] === "view" ? p ? a & /*viewMode*/
      1 && Me(p, 1) : (p = ns(), p.c(), Me(p, 1), p.m(r.parentNode, r)) : p && (Un(), at(p, 1, 1, () => {
        p = null;
      }), Bn()), /*viewMode*/
      h[0] === "edit" ? f ? a & /*viewMode*/
      1 && Me(f, 1) : (f = is(), f.c(), Me(f, 1), f.m(i.parentNode, i)) : f && (Un(), at(f, 1, 1, () => {
        f = null;
      }), Bn());
    },
    i(h) {
      o || (Me(u), Me(p), Me(f), o = !0);
    },
    o(h) {
      at(u), at(p), at(f), o = !1;
    },
    d(h) {
      h && (he(e), he(r), he(i)), u && u.d(h), p && p.d(h), f && f.d(h);
    }
  };
}
function Df(n, e, r) {
  let i, o;
  return On(() => {
    o = ut.subscribe((u) => {
      r(0, i = u);
    });
  }), Rn(() => {
    o();
  }), r(0, i = ""), [i];
}
class Mf extends Fr {
  constructor(e) {
    super(), $r(this, e, Df, Ff, dr, {});
  }
}
const os = "application/internet-shortcut", ss = () => '<span class="icon-link"></span>';
class Rr {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    jo({
      id: "editLink",
      displayName: () => t("files_linkeditor", "Edit link"),
      iconSvgInline: ss,
      exec: async (r) => {
        await Rr.loadAndChangeViewMode({
          fileName: r.basename,
          dirName: r.dirname,
          nextViewMode: "edit",
          permissions: r.permissions
        });
      },
      enabled: (r) => window.OC.currentUser && r.every((i) => i.permissions >= ke.UPDATE && os.includes(i.mime))
    }), jo({
      id: "viewLink",
      displayName: () => t("files_linkeditor", "View link"),
      iconSvgInline: ss,
      exec: async (r) => {
        window.OC.currentUser ? await Rr.loadAndChangeViewMode({
          fileName: r.basename,
          dirName: r.dirname,
          nextViewMode: "view",
          permissions: r.permissions
        }) : await Rr.loadAndChangeViewMode({
          fileName: r.basename,
          dirName: r.dirname,
          nextViewMode: "view",
          // TODO:
          downloadUrl: r.source,
          publicUser: !0,
          permissions: r.permissions
        });
      },
      enabled: (r) => r.every((i) => i.permissions >= ke.READ && os.includes(i.mime)),
      default: () => ea.DEFAULT
    });
    const e = ({ id: r, displayName: i, templateName: o }) => {
      Qc({
        id: r,
        displayName: i,
        enabled: (u) => u.permissions >= ke.CREATE,
        iconClass: "icon-link",
        handler: (u, p) => {
          const f = u.path;
          ut.update(() => "filename"), Ft.update(
            () => Qt.getFileConfig({
              name: o,
              templateName: o,
              dir: f,
              isNew: !0,
              existingContents: p,
              onCreate: async (h) => {
                ut.update(() => "edit"), Ft.update(
                  () => Qt.getFileConfig({
                    name: h.name,
                    dir: h.dir,
                    isNew: !0,
                    onCreate: async (a) => {
                      await Rr.saveAndChangeViewMode(a);
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
  static async loadAndChangeViewMode({ fileName: e, dirName: r, nextViewMode: i, publicUser: o, downloadUrl: u, permissions: p }) {
    ut.update(() => i), Ft.update(
      () => Qt.getFileConfig({
        name: e,
        dir: r || "",
        permissions: p
      })
    );
    let f = {};
    if (o ? f = await Qt.loadPublic({ downloadUrl: u }) : f = await Qt.load({ fileName: e, dir: r }), f) {
      const h = st.getExtension(e);
      let a = {};
      h === "webloc" ? a = st.parseWeblocFile(f.filecontents) : a = st.parseURLFile(f.filecontents), Ft.update(
        (s) => Qt.getFileConfig({
          ...s,
          ...a,
          fileModifiedTime: f.mtime,
          isLoaded: !0
        })
      );
    } else
      window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async saveAndChangeViewMode({ name: e, dir: r, url: i, fileModifiedTime: o, sameWindow: u, skipConfirmation: p }) {
    const f = st.getExtension(e);
    let h = "";
    f === "webloc" ? h = st.generateWeblocFileContent("", i, u, p) : h = st.generateURLFileContent("", i, u, p), await Qt.save({ fileContent: h, name: e, dir: r, fileModifiedTime: o }), ut.update(() => "none");
  }
}
const kf = [];
kf.push(
  new Mf({
    target: document.body,
    props: {}
  })
);
er.registerFileActions();
Rr.registerFileActions();
