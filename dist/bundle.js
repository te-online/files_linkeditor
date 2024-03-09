var kp = Object.defineProperty;
var Bp = (r, e, n) => e in r ? kp(r, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[e] = n;
var Sn = (r, e, n) => (Bp(r, typeof e != "symbol" ? e + "" : e, n), n);
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
function wr() {
}
function Up(r, e) {
  for (const n in e)
    r[n] = e[n];
  return (
    /** @type {T & S} */
    r
  );
}
function tc(r) {
  return r();
}
function Cs() {
  return /* @__PURE__ */ Object.create(null);
}
function Mr(r) {
  r.forEach(tc);
}
function Ua(r) {
  return typeof r == "function";
}
function gn(r, e) {
  return r != r ? e == e : r !== e || r && typeof r == "object" || typeof r == "function";
}
function Dp(r) {
  return Object.keys(r).length === 0;
}
function jp(r, e, n, i) {
  if (r) {
    const s = rc(r, e, n, i);
    return r[0](s);
  }
}
function rc(r, e, n, i) {
  return r[1] && i ? Up(n.ctx.slice(), r[1](i(e))) : n.ctx;
}
function Gp(r, e, n, i) {
  if (r[2] && i) {
    const s = r[2](i(n));
    if (e.dirty === void 0)
      return s;
    if (typeof s == "object") {
      const c = [], v = Math.max(e.dirty.length, s.length);
      for (let h = 0; h < v; h += 1)
        c[h] = e.dirty[h] | s[h];
      return c;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function Wp(r, e, n, i, s, c) {
  if (s) {
    const v = rc(e, n, i, c);
    r.p(v, s);
  }
}
function Vp(r) {
  if (r.ctx.length > 32) {
    const e = [], n = r.ctx.length / 32;
    for (let i = 0; i < n; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
const ai = globalThis || void 0 || self;
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
function St(r) {
  return document.createTextNode(r);
}
function nt() {
  return St(" ");
}
function qp() {
  return St("");
}
function dr(r, e, n, i) {
  return r.addEventListener(e, n, i), () => r.removeEventListener(e, n, i);
}
function ln(r) {
  return function(e) {
    return e.preventDefault(), r.call(this, e);
  };
}
function ge(r, e, n) {
  n == null ? r.removeAttribute(e) : r.getAttribute(e) !== n && r.setAttribute(e, n);
}
function zp(r) {
  return Array.from(r.childNodes);
}
function Da(r, e) {
  e = "" + e, r.data !== e && (r.data = /** @type {string} */
  e);
}
function Ls(r, e) {
  r.value = e ?? "";
}
function nc(r, e, n, i) {
  n == null ? r.style.removeProperty(e) : r.style.setProperty(e, n, i ? "important" : "");
}
let Mn;
function Ln(r) {
  Mn = r;
}
function ic() {
  if (!Mn)
    throw new Error("Function called outside component initialization");
  return Mn;
}
function ja(r) {
  ic().$$.on_mount.push(r);
}
function Ga(r) {
  ic().$$.on_destroy.push(r);
}
const rn = [], Fs = [];
let an = [];
const Ms = [], Hp = /* @__PURE__ */ Promise.resolve();
let sa = !1;
function Xp() {
  sa || (sa = !0, Hp.then(oc));
}
function ua(r) {
  an.push(r);
}
const vo = /* @__PURE__ */ new Set();
let zr = 0;
function oc() {
  if (zr !== 0)
    return;
  const r = Mn;
  do {
    try {
      for (; zr < rn.length; ) {
        const e = rn[zr];
        zr++, Ln(e), Yp(e.$$);
      }
    } catch (e) {
      throw rn.length = 0, zr = 0, e;
    }
    for (Ln(null), rn.length = 0, zr = 0; Fs.length; )
      Fs.pop()();
    for (let e = 0; e < an.length; e += 1) {
      const n = an[e];
      vo.has(n) || (vo.add(n), n());
    }
    an.length = 0;
  } while (rn.length);
  for (; Ms.length; )
    Ms.pop()();
  sa = !1, vo.clear(), Ln(r);
}
function Yp(r) {
  if (r.fragment !== null) {
    r.update(), Mr(r.before_update);
    const e = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, e), r.after_update.forEach(ua);
  }
}
function Kp(r) {
  const e = [], n = [];
  an.forEach((i) => r.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), an = e;
}
const $i = /* @__PURE__ */ new Set();
let Nr;
function ks() {
  Nr = {
    r: 0,
    c: [],
    p: Nr
    // parent group
  };
}
function Bs() {
  Nr.r || Mr(Nr.c), Nr = Nr.p;
}
function Mt(r, e) {
  r && r.i && ($i.delete(r), r.i(e));
}
function pr(r, e, n, i) {
  if (r && r.o) {
    if ($i.has(r))
      return;
    $i.add(r), Nr.c.push(() => {
      $i.delete(r), i && (n && r.d(1), i());
    }), r.o(e);
  } else
    i && i();
}
function ki(r) {
  r && r.c();
}
function Dn(r, e, n) {
  const { fragment: i, after_update: s } = r.$$;
  i && i.m(e, n), ua(() => {
    const c = r.$$.on_mount.map(tc).filter(Ua);
    r.$$.on_destroy ? r.$$.on_destroy.push(...c) : Mr(c), r.$$.on_mount = [];
  }), s.forEach(ua);
}
function jn(r, e) {
  const n = r.$$;
  n.fragment !== null && (Kp(n.after_update), Mr(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Zp(r, e) {
  r.$$.dirty[0] === -1 && (rn.push(r), Xp(), r.$$.dirty.fill(0)), r.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Gn(r, e, n, i, s, c, v = null, h = [-1]) {
  const y = Mn;
  Ln(r);
  const l = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: c,
    update: wr,
    not_equal: s,
    bound: Cs(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (y ? y.$$.context : [])),
    // everything else
    callbacks: Cs(),
    dirty: h,
    skip_bound: !1,
    root: e.target || y.$$.root
  };
  v && v(l.root);
  let a = !1;
  if (l.ctx = n ? n(r, e.props || {}, (g, p, ...E) => {
    const O = E.length ? E[0] : p;
    return l.ctx && s(l.ctx[g], l.ctx[g] = O) && (!l.skip_bound && l.bound[g] && l.bound[g](O), a && Zp(r, g)), p;
  }) : [], l.update(), a = !0, Mr(l.before_update), l.fragment = i ? i(l.ctx) : !1, e.target) {
    if (e.hydrate) {
      const g = zp(e.target);
      l.fragment && l.fragment.l(g), g.forEach(Ge);
    } else
      l.fragment && l.fragment.c();
    e.intro && Mt(r.$$.fragment), Dn(r, e.target, e.anchor), oc();
  }
  Ln(y);
}
class Wn {
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
    jn(this, 1), this.$destroy = wr;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!Ua(n))
      return wr;
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
    this.$$set && !Dp(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Jp = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Jp);
function Qp(r) {
  let e, n, i, s, c;
  const v = (
    /*#slots*/
    r[2].default
  ), h = jp(
    v,
    r,
    /*$$scope*/
    r[1],
    null
  );
  return {
    c() {
      e = Fe("div"), n = nt(), i = Fe("div"), h && h.c(), ge(e, "class", "oc-dialog-dim"), ge(i, "class", s = `oc-dialog ${/*loading*/
      r[0] ? "icon-loading" : ""}`), nc(i, "position", "fixed");
    },
    m(y, l) {
      We(y, e, l), We(y, n, l), We(y, i, l), h && h.m(i, null), c = !0;
    },
    p(y, [l]) {
      h && h.p && (!c || l & /*$$scope*/
      2) && Wp(
        h,
        v,
        y,
        /*$$scope*/
        y[1],
        c ? Gp(
          v,
          /*$$scope*/
          y[1],
          l,
          null
        ) : Vp(
          /*$$scope*/
          y[1]
        ),
        null
      ), (!c || l & /*loading*/
      1 && s !== (s = `oc-dialog ${/*loading*/
      y[0] ? "icon-loading" : ""}`)) && ge(i, "class", s);
    },
    i(y) {
      c || (Mt(h, y), c = !0);
    },
    o(y) {
      pr(h, y), c = !1;
    },
    d(y) {
      y && (Ge(e), Ge(n), Ge(i)), h && h.d(y);
    }
  };
}
function eh(r, e, n) {
  let { $$slots: i = {}, $$scope: s } = e, { loading: c = !1 } = e;
  return r.$$set = (v) => {
    "loading" in v && n(0, c = v.loading), "$$scope" in v && n(1, s = v.$$scope);
  }, [c, s, i];
}
class ac extends Wn {
  constructor(e) {
    super(), Gn(this, e, eh, Qp, gn, { loading: 0 });
  }
}
const Hr = [];
function sc(r, e = wr) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function s(h) {
    if (gn(r, h) && (r = h, n)) {
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
  function c(h) {
    s(h(r));
  }
  function v(h, y = wr) {
    const l = [h, y];
    return i.add(l), i.size === 1 && (n = e(s, c) || wr), h(r), () => {
      i.delete(l), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: s, update: c, subscribe: v };
}
var si = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Wa(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function th(r) {
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
var Va = {};
Object.defineProperty(Va, "__esModule", { value: !0 });
var Et = Va.sanitizeUrl = void 0, rh = /^([^\w]*)(javascript|data|vbscript)/im, nh = /&#(\w+)(^\w|;)?/g, ih = /&(newline|tab);/gi, oh = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, ah = /^.+(:|&colon;)/gim, sh = [".", "/"];
function uh(r) {
  return sh.indexOf(r[0]) > -1;
}
function lh(r) {
  return r.replace(nh, function(e, n) {
    return String.fromCharCode(n);
  });
}
function ch(r) {
  var e = lh(r || "").replace(ih, "").replace(oh, "").trim();
  if (!e)
    return "about:blank";
  if (uh(e))
    return e;
  var n = e.match(ah);
  if (!n)
    return e;
  var i = n[0];
  return rh.test(i) ? "about:blank" : e;
}
Et = Va.sanitizeUrl = ch;
class ft {
  static getFileConfig({
    name: e,
    url: n,
    downloadUrl: i,
    currentUrl: s,
    dir: c,
    onCreate: v,
    fileModifiedTime: h,
    isNew: y,
    isLoaded: l,
    sameWindow: a,
    skipConfirmation: g
  } = {}) {
    return {
      name: e || "?",
      downloadUrl: i || "",
      url: n ? Et(n) : "",
      dir: c || "",
      currentUrl: s || "",
      onCreate: v,
      fileModifiedTime: h || null,
      isNew: y || !1,
      isLoaded: l || !1,
      sameWindow: a || !1,
      skipConfirmation: g || !1
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
    return window.FileList && window.OC && window.OC.currentUser && (window.OC.PERMISSION_ALL === window.FileList.getDirectoryPermissions() || window.OC.PERMISSION_UPDATE === window.FileList.getDirectoryPermissions());
  }
}
const ar = sc(""), Rr = sc(ft.getFileConfig());
function Us(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "You are about to visit:") + ""
  ), i, s, c, v, h = (
    /*file*/
    r[0].url + ""
  ), y, l, a;
  return {
    c() {
      e = Fe("p"), i = St(n), s = nt(), c = Fe("em"), v = Fe("a"), y = St(h), ge(v, "href", l = Et(
        /*file*/
        r[0].url
      )), ge(v, "target", a = /*file*/
      r[0].sameWindow ? "_self" : "_blank"), ge(e, "class", "urldisplay");
    },
    m(g, p) {
      We(g, e, p), Ne(e, i), Ne(e, s), Ne(e, c), Ne(c, v), Ne(v, y);
    },
    p(g, p) {
      p & /*file*/
      1 && h !== (h = /*file*/
      g[0].url + "") && Da(y, h), p & /*file*/
      1 && l !== (l = Et(
        /*file*/
        g[0].url
      )) && ge(v, "href", l), p & /*file*/
      1 && a !== (a = /*file*/
      g[0].sameWindow ? "_self" : "_blank") && ge(v, "target", a);
    },
    d(g) {
      g && Ge(e);
    }
  };
}
function Ds(r) {
  let e = ft.userCanEdit(), n, i, s = (
    /*t*/
    r[2]("files_linkeditor", "Visit link") + ""
  ), c, v, h, y = e && fh(r);
  return {
    c() {
      y && y.c(), n = nt(), i = Fe("a"), c = St(s), ge(i, "href", v = Et(
        /*file*/
        r[0].url
      )), ge(i, "target", h = /*file*/
      r[0].sameWindow ? "_self" : "_blank"), ge(i, "class", "button primary");
    },
    m(l, a) {
      y && y.m(l, a), We(l, n, a), We(l, i, a), Ne(i, c);
    },
    p(l, a) {
      e && y.p(l, a), a & /*file*/
      1 && v !== (v = Et(
        /*file*/
        l[0].url
      )) && ge(i, "href", v), a & /*file*/
      1 && h !== (h = /*file*/
      l[0].sameWindow ? "_self" : "_blank") && ge(i, "target", h);
    },
    d(l) {
      l && (Ge(n), Ge(i)), y && y.d(l);
    }
  };
}
function fh(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "Edit link") + ""
  ), i, s, c, v;
  return {
    c() {
      e = Fe("a"), i = St(n), ge(e, "href", s = /*file*/
      r[0].currentUrl), ge(e, "class", "button");
    },
    m(h, y) {
      We(h, e, y), Ne(e, i), c || (v = dr(e, "click", ln(
        /*click_handler_1*/
        r[4]
      )), c = !0);
    },
    p(h, y) {
      y & /*file*/
      1 && s !== (s = /*file*/
      h[0].currentUrl) && ge(e, "href", s);
    },
    d(h) {
      h && Ge(e), c = !1, v();
    }
  };
}
function ph(r) {
  let e, n, i = (
    /*file*/
    r[0].name + ""
  ), s, c, v, h, y, l = (
    /*t*/
    r[2]("files_linkeditor", "Cancel") + ""
  ), a, g, p, E, O, _ = !/*loading*/
  r[1] && Us(r), P = !/*loading*/
  r[1] && Ds(r);
  return {
    c() {
      e = Fe("div"), n = Fe("h3"), s = St(i), c = nt(), _ && _.c(), v = nt(), h = Fe("div"), y = Fe("a"), a = St(l), p = nt(), P && P.c(), ge(e, "class", "urledit push-bottom"), ge(y, "href", g = /*file*/
      r[0].currentUrl), ge(y, "class", "button"), ge(h, "class", "oc-dialog-buttonrow twobuttons");
    },
    m(D, I) {
      We(D, e, I), Ne(e, n), Ne(n, s), Ne(e, c), _ && _.m(e, null), We(D, v, I), We(D, h, I), Ne(h, y), Ne(y, a), Ne(h, p), P && P.m(h, null), E || (O = dr(y, "click", ln(
        /*click_handler*/
        r[3]
      )), E = !0);
    },
    p(D, I) {
      I & /*file*/
      1 && i !== (i = /*file*/
      D[0].name + "") && Da(s, i), /*loading*/
      D[1] ? _ && (_.d(1), _ = null) : _ ? _.p(D, I) : (_ = Us(D), _.c(), _.m(e, null)), I & /*file*/
      1 && g !== (g = /*file*/
      D[0].currentUrl) && ge(y, "href", g), /*loading*/
      D[1] ? P && (P.d(1), P = null) : P ? P.p(D, I) : (P = Ds(D), P.c(), P.m(h, null));
    },
    d(D) {
      D && (Ge(e), Ge(v), Ge(h)), _ && _.d(), P && P.d(), E = !1, O();
    }
  };
}
function hh(r) {
  let e, n;
  return e = new ac({
    props: {
      loading: (
        /*loading*/
        r[1]
      ),
      $$slots: { default: [ph] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      ki(e.$$.fragment);
    },
    m(i, s) {
      Dn(e, i, s), n = !0;
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
      pr(e.$$.fragment, i), n = !1;
    },
    d(i) {
      jn(e, i);
    }
  };
}
function dh(r, e, n) {
  let i, s;
  const c = window.t;
  let v;
  ja(() => {
    v = Rr.subscribe(async (l) => {
      if (n(0, i = l), i && i.isLoaded) {
        if (n(1, s = !1), !i.url) {
          OC.dialogs.alert(c("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."), c("files_linkeditor", "A slight problem"));
          return;
        }
        i.skipConfirmation && i.sameWindow && (window.location.href = i.url, ar.update(() => "none"));
      }
    });
  }), Ga(() => {
    v();
  });
  const h = () => {
    ar.update(() => "none");
  }, y = () => {
    ar.update(() => "edit");
  };
  return n(0, i = ft.getFileConfig()), n(1, s = !0), [i, s, c, h, y];
}
class gh extends Wn {
  constructor(e) {
    super(), Gn(this, e, dh, hh, gn, {});
  }
}
var uc = { exports: {} };
(function(r) {
  var e = function(n) {
    var i = 1e7, s = 7, c = 9007199254740992, v = O(c), h = "0123456789abcdefghijklmnopqrstuvwxyz", y = typeof BigInt == "function";
    function l(b, $, L, k) {
      return typeof b > "u" ? l[0] : typeof $ < "u" ? +$ == 10 && !L ? he(b) : De(b, $, L, k) : he(b);
    }
    function a(b, $) {
      this.value = b, this.sign = $, this.isSmall = !1;
    }
    a.prototype = Object.create(l.prototype);
    function g(b) {
      this.value = b, this.sign = b < 0, this.isSmall = !0;
    }
    g.prototype = Object.create(l.prototype);
    function p(b) {
      this.value = b;
    }
    p.prototype = Object.create(l.prototype);
    function E(b) {
      return -c < b && b < c;
    }
    function O(b) {
      return b < 1e7 ? [b] : b < 1e14 ? [b % 1e7, Math.floor(b / 1e7)] : [b % 1e7, Math.floor(b / 1e7) % 1e7, Math.floor(b / 1e14)];
    }
    function _(b) {
      P(b);
      var $ = b.length;
      if ($ < 4 && Me(b, v) < 0)
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
      var L = b.length, k = $.length, d = new Array(L), o = 0, u = i, T, A;
      for (A = 0; A < k; A++)
        T = b[A] + $[A] + o, o = T >= u ? 1 : 0, d[A] = T - o * u;
      for (; A < L; )
        T = b[A] + o, o = T === u ? 1 : 0, d[A++] = T - o * u;
      return o > 0 && d.push(o), d;
    }
    function F(b, $) {
      return b.length >= $.length ? x(b, $) : x($, b);
    }
    function R(b, $) {
      var L = b.length, k = new Array(L), d = i, o, u;
      for (u = 0; u < L; u++)
        o = b[u] - d + $, $ = Math.floor(o / d), k[u] = o - $ * d, $ += 1;
      for (; $ > 0; )
        k[u++] = $ % d, $ = Math.floor($ / d);
      return k;
    }
    a.prototype.add = function(b) {
      var $ = he(b);
      if (this.sign !== $.sign)
        return this.subtract($.negate());
      var L = this.value, k = $.value;
      return $.isSmall ? new a(R(L, Math.abs(k)), this.sign) : new a(F(L, k), this.sign);
    }, a.prototype.plus = a.prototype.add, g.prototype.add = function(b) {
      var $ = he(b), L = this.value;
      if (L < 0 !== $.sign)
        return this.subtract($.negate());
      var k = $.value;
      if ($.isSmall) {
        if (E(L + k))
          return new g(L + k);
        k = O(Math.abs(k));
      }
      return new a(R(k, Math.abs(L)), L < 0);
    }, g.prototype.plus = g.prototype.add, p.prototype.add = function(b) {
      return new p(this.value + he(b).value);
    }, p.prototype.plus = p.prototype.add;
    function V(b, $) {
      var L = b.length, k = $.length, d = new Array(L), o = 0, u = i, T, A;
      for (T = 0; T < k; T++)
        A = b[T] - o - $[T], A < 0 ? (A += u, o = 1) : o = 0, d[T] = A;
      for (T = k; T < L; T++) {
        if (A = b[T] - o, A < 0)
          A += u;
        else {
          d[T++] = A;
          break;
        }
        d[T] = A;
      }
      for (; T < L; T++)
        d[T] = b[T];
      return P(d), d;
    }
    function z(b, $, L) {
      var k;
      return Me(b, $) >= 0 ? k = V(b, $) : (k = V($, b), L = !L), k = _(k), typeof k == "number" ? (L && (k = -k), new g(k)) : new a(k, L);
    }
    function G(b, $, L) {
      var k = b.length, d = new Array(k), o = -$, u = i, T, A;
      for (T = 0; T < k; T++)
        A = b[T] + o, o = Math.floor(A / u), A %= u, d[T] = A < 0 ? A + u : A;
      return d = _(d), typeof d == "number" ? (L && (d = -d), new g(d)) : new a(d, L);
    }
    a.prototype.subtract = function(b) {
      var $ = he(b);
      if (this.sign !== $.sign)
        return this.add($.negate());
      var L = this.value, k = $.value;
      return $.isSmall ? G(L, Math.abs(k), this.sign) : z(L, k, this.sign);
    }, a.prototype.minus = a.prototype.subtract, g.prototype.subtract = function(b) {
      var $ = he(b), L = this.value;
      if (L < 0 !== $.sign)
        return this.add($.negate());
      var k = $.value;
      return $.isSmall ? new g(L - k) : G(k, Math.abs(L), L >= 0);
    }, g.prototype.minus = g.prototype.subtract, p.prototype.subtract = function(b) {
      return new p(this.value - he(b).value);
    }, p.prototype.minus = p.prototype.subtract, a.prototype.negate = function() {
      return new a(this.value, !this.sign);
    }, g.prototype.negate = function() {
      var b = this.sign, $ = new g(-this.value);
      return $.sign = !b, $;
    }, p.prototype.negate = function() {
      return new p(-this.value);
    }, a.prototype.abs = function() {
      return new a(this.value, !1);
    }, g.prototype.abs = function() {
      return new g(Math.abs(this.value));
    }, p.prototype.abs = function() {
      return new p(this.value >= 0 ? this.value : -this.value);
    };
    function X(b, $) {
      var L = b.length, k = $.length, d = L + k, o = D(d), u = i, T, A, M, j, te;
      for (M = 0; M < L; ++M) {
        j = b[M];
        for (var le = 0; le < k; ++le)
          te = $[le], T = j * te + o[M + le], A = Math.floor(T / u), o[M + le] = T - A * u, o[M + le + 1] += A;
      }
      return P(o), o;
    }
    function Z(b, $) {
      var L = b.length, k = new Array(L), d = i, o = 0, u, T;
      for (T = 0; T < L; T++)
        u = b[T] * $ + o, o = Math.floor(u / d), k[T] = u - o * d;
      for (; o > 0; )
        k[T++] = o % d, o = Math.floor(o / d);
      return k;
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
      var k = b.slice(L), d = b.slice(0, L), o = $.slice(L), u = $.slice(0, L), T = K(d, u), A = K(k, o), M = K(F(d, k), F(u, o)), j = F(F(T, H(V(V(M, T), A), L)), H(A, 2 * L));
      return P(j), j;
    }
    function q(b, $) {
      return -0.012 * b - 0.012 * $ + 15e-6 * b * $ > 0;
    }
    a.prototype.multiply = function(b) {
      var $ = he(b), L = this.value, k = $.value, d = this.sign !== $.sign, o;
      if ($.isSmall) {
        if (k === 0)
          return l[0];
        if (k === 1)
          return this;
        if (k === -1)
          return this.negate();
        if (o = Math.abs(k), o < i)
          return new a(Z(L, o), d);
        k = O(o);
      }
      return q(L.length, k.length) ? new a(K(L, k), d) : new a(X(L, k), d);
    }, a.prototype.times = a.prototype.multiply;
    function re(b, $, L) {
      return b < i ? new a(Z($, b), L) : new a(X($, O(b)), L);
    }
    g.prototype._multiplyBySmall = function(b) {
      return E(b.value * this.value) ? new g(b.value * this.value) : re(Math.abs(b.value), O(Math.abs(this.value)), this.sign !== b.sign);
    }, a.prototype._multiplyBySmall = function(b) {
      return b.value === 0 ? l[0] : b.value === 1 ? this : b.value === -1 ? this.negate() : re(Math.abs(b.value), this.value, this.sign !== b.sign);
    }, g.prototype.multiply = function(b) {
      return he(b)._multiplyBySmall(this);
    }, g.prototype.times = g.prototype.multiply, p.prototype.multiply = function(b) {
      return new p(this.value * he(b).value);
    }, p.prototype.times = p.prototype.multiply;
    function pe(b) {
      var $ = b.length, L = D($ + $), k = i, d, o, u, T, A;
      for (u = 0; u < $; u++) {
        T = b[u], o = 0 - T * T;
        for (var M = u; M < $; M++)
          A = b[M], d = 2 * (T * A) + L[u + M] + o, o = Math.floor(d / k), L[u + M] = d - o * k;
        L[u + $] = o;
      }
      return P(L), L;
    }
    a.prototype.square = function() {
      return new a(pe(this.value), !1);
    }, g.prototype.square = function() {
      var b = this.value * this.value;
      return E(b) ? new g(b) : new a(pe(O(Math.abs(this.value))), !1);
    }, p.prototype.square = function(b) {
      return new p(this.value * this.value);
    };
    function Ae(b, $) {
      var L = b.length, k = $.length, d = i, o = D($.length), u = $[k - 1], T = Math.ceil(d / (2 * u)), A = Z(b, T), M = Z($, T), j, te, le, ue, fe, xe, Xt;
      for (A.length <= L && A.push(0), M.push(0), u = M[k - 1], te = L - k; te >= 0; te--) {
        for (j = d - 1, A[te + k] !== u && (j = Math.floor((A[te + k] * d + A[te + k - 1]) / u)), le = 0, ue = 0, xe = M.length, fe = 0; fe < xe; fe++)
          le += j * M[fe], Xt = Math.floor(le / d), ue += A[te + fe] - (le - Xt * d), le = Xt, ue < 0 ? (A[te + fe] = ue + d, ue = -1) : (A[te + fe] = ue, ue = 0);
        for (; ue !== 0; ) {
          for (j -= 1, le = 0, fe = 0; fe < xe; fe++)
            le += A[te + fe] - d + M[fe], le < 0 ? (A[te + fe] = le + d, le = 0) : (A[te + fe] = le, le = 1);
          ue += le;
        }
        o[te] = j;
      }
      return A = Ee(A, T)[0], [_(o), _(A)];
    }
    function ce(b, $) {
      for (var L = b.length, k = $.length, d = [], o = [], u = i, T, A, M, j, te; L; ) {
        if (o.unshift(b[--L]), P(o), Me(o, $) < 0) {
          d.push(0);
          continue;
        }
        A = o.length, M = o[A - 1] * u + o[A - 2], j = $[k - 1] * u + $[k - 2], A > k && (M = (M + 1) * u), T = Math.ceil(M / j);
        do {
          if (te = Z($, T), Me(te, o) <= 0)
            break;
          T--;
        } while (T);
        d.push(T), o = V(o, te);
      }
      return d.reverse(), [_(d), _(o)];
    }
    function Ee(b, $) {
      var L = b.length, k = D(L), d = i, o, u, T, A;
      for (T = 0, o = L - 1; o >= 0; --o)
        A = T * d + b[o], u = I(A / $), T = A - u * $, k[o] = u | 0;
      return [k, T | 0];
    }
    function me(b, $) {
      var L, k = he($);
      if (y)
        return [new p(b.value / k.value), new p(b.value % k.value)];
      var d = b.value, o = k.value, u;
      if (o === 0)
        throw new Error("Cannot divide by zero");
      if (b.isSmall)
        return k.isSmall ? [new g(I(d / o)), new g(d % o)] : [l[0], b];
      if (k.isSmall) {
        if (o === 1)
          return [b, l[0]];
        if (o == -1)
          return [b.negate(), l[0]];
        var T = Math.abs(o);
        if (T < i) {
          L = Ee(d, T), u = _(L[0]);
          var A = L[1];
          return b.sign && (A = -A), typeof u == "number" ? (b.sign !== k.sign && (u = -u), [new g(u), new g(A)]) : [new a(u, b.sign !== k.sign), new g(A)];
        }
        o = O(T);
      }
      var M = Me(d, o);
      if (M === -1)
        return [l[0], b];
      if (M === 0)
        return [l[b.sign === k.sign ? 1 : -1], l[0]];
      d.length + o.length <= 200 ? L = Ae(d, o) : L = ce(d, o), u = L[0];
      var j = b.sign !== k.sign, te = L[1], le = b.sign;
      return typeof u == "number" ? (j && (u = -u), u = new g(u)) : u = new a(u, j), typeof te == "number" ? (le && (te = -te), te = new g(te)) : te = new a(te, le), [u, te];
    }
    a.prototype.divmod = function(b) {
      var $ = me(this, b);
      return {
        quotient: $[0],
        remainder: $[1]
      };
    }, p.prototype.divmod = g.prototype.divmod = a.prototype.divmod, a.prototype.divide = function(b) {
      return me(this, b)[0];
    }, p.prototype.over = p.prototype.divide = function(b) {
      return new p(this.value / he(b).value);
    }, g.prototype.over = g.prototype.divide = a.prototype.over = a.prototype.divide, a.prototype.mod = function(b) {
      return me(this, b)[1];
    }, p.prototype.mod = p.prototype.remainder = function(b) {
      return new p(this.value % he(b).value);
    }, g.prototype.remainder = g.prototype.mod = a.prototype.remainder = a.prototype.mod, a.prototype.pow = function(b) {
      var $ = he(b), L = this.value, k = $.value, d, o, u;
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
      if (this.isSmall && E(d = Math.pow(L, k)))
        return new g(I(d));
      for (o = this, u = l[1]; k & !0 && (u = u.times(o), --k), k !== 0; )
        k /= 2, o = o.square();
      return u;
    }, g.prototype.pow = a.prototype.pow, p.prototype.pow = function(b) {
      var $ = he(b), L = this.value, k = $.value, d = BigInt(0), o = BigInt(1), u = BigInt(2);
      if (k === d)
        return l[1];
      if (L === d)
        return l[0];
      if (L === o)
        return l[1];
      if (L === BigInt(-1))
        return $.isEven() ? l[1] : l[-1];
      if ($.isNegative())
        return new p(d);
      for (var T = this, A = l[1]; (k & o) === o && (A = A.times(T), --k), k !== d; )
        k /= u, T = T.square();
      return A;
    }, a.prototype.modPow = function(b, $) {
      if (b = he(b), $ = he($), $.isZero())
        throw new Error("Cannot take modPow with modulus 0");
      var L = l[1], k = this.mod($);
      for (b.isNegative() && (b = b.multiply(l[-1]), k = k.modInv($)); b.isPositive(); ) {
        if (k.isZero())
          return l[0];
        b.isOdd() && (L = L.multiply(k).mod($)), b = b.divide(2), k = k.square().mod($);
      }
      return L;
    }, p.prototype.modPow = g.prototype.modPow = a.prototype.modPow;
    function Me(b, $) {
      if (b.length !== $.length)
        return b.length > $.length ? 1 : -1;
      for (var L = b.length - 1; L >= 0; L--)
        if (b[L] !== $[L])
          return b[L] > $[L] ? 1 : -1;
      return 0;
    }
    a.prototype.compareAbs = function(b) {
      var $ = he(b), L = this.value, k = $.value;
      return $.isSmall ? 1 : Me(L, k);
    }, g.prototype.compareAbs = function(b) {
      var $ = he(b), L = Math.abs(this.value), k = $.value;
      return $.isSmall ? (k = Math.abs(k), L === k ? 0 : L > k ? 1 : -1) : -1;
    }, p.prototype.compareAbs = function(b) {
      var $ = this.value, L = he(b).value;
      return $ = $ >= 0 ? $ : -$, L = L >= 0 ? L : -L, $ === L ? 0 : $ > L ? 1 : -1;
    }, a.prototype.compare = function(b) {
      if (b === 1 / 0)
        return -1;
      if (b === -1 / 0)
        return 1;
      var $ = he(b), L = this.value, k = $.value;
      return this.sign !== $.sign ? $.sign ? 1 : -1 : $.isSmall ? this.sign ? -1 : 1 : Me(L, k) * (this.sign ? -1 : 1);
    }, a.prototype.compareTo = a.prototype.compare, g.prototype.compare = function(b) {
      if (b === 1 / 0)
        return -1;
      if (b === -1 / 0)
        return 1;
      var $ = he(b), L = this.value, k = $.value;
      return $.isSmall ? L == k ? 0 : L > k ? 1 : -1 : L < 0 !== $.sign ? L < 0 ? -1 : 1 : L < 0 ? 1 : -1;
    }, g.prototype.compareTo = g.prototype.compare, p.prototype.compare = function(b) {
      if (b === 1 / 0)
        return -1;
      if (b === -1 / 0)
        return 1;
      var $ = this.value, L = he(b).value;
      return $ === L ? 0 : $ > L ? 1 : -1;
    }, p.prototype.compareTo = p.prototype.compare, a.prototype.equals = function(b) {
      return this.compare(b) === 0;
    }, p.prototype.eq = p.prototype.equals = g.prototype.eq = g.prototype.equals = a.prototype.eq = a.prototype.equals, a.prototype.notEquals = function(b) {
      return this.compare(b) !== 0;
    }, p.prototype.neq = p.prototype.notEquals = g.prototype.neq = g.prototype.notEquals = a.prototype.neq = a.prototype.notEquals, a.prototype.greater = function(b) {
      return this.compare(b) > 0;
    }, p.prototype.gt = p.prototype.greater = g.prototype.gt = g.prototype.greater = a.prototype.gt = a.prototype.greater, a.prototype.lesser = function(b) {
      return this.compare(b) < 0;
    }, p.prototype.lt = p.prototype.lesser = g.prototype.lt = g.prototype.lesser = a.prototype.lt = a.prototype.lesser, a.prototype.greaterOrEquals = function(b) {
      return this.compare(b) >= 0;
    }, p.prototype.geq = p.prototype.greaterOrEquals = g.prototype.geq = g.prototype.greaterOrEquals = a.prototype.geq = a.prototype.greaterOrEquals, a.prototype.lesserOrEquals = function(b) {
      return this.compare(b) <= 0;
    }, p.prototype.leq = p.prototype.lesserOrEquals = g.prototype.leq = g.prototype.lesserOrEquals = a.prototype.leq = a.prototype.lesserOrEquals, a.prototype.isEven = function() {
      return (this.value[0] & 1) === 0;
    }, g.prototype.isEven = function() {
      return (this.value & 1) === 0;
    }, p.prototype.isEven = function() {
      return (this.value & BigInt(1)) === BigInt(0);
    }, a.prototype.isOdd = function() {
      return (this.value[0] & 1) === 1;
    }, g.prototype.isOdd = function() {
      return (this.value & 1) === 1;
    }, p.prototype.isOdd = function() {
      return (this.value & BigInt(1)) === BigInt(1);
    }, a.prototype.isPositive = function() {
      return !this.sign;
    }, g.prototype.isPositive = function() {
      return this.value > 0;
    }, p.prototype.isPositive = g.prototype.isPositive, a.prototype.isNegative = function() {
      return this.sign;
    }, g.prototype.isNegative = function() {
      return this.value < 0;
    }, p.prototype.isNegative = g.prototype.isNegative, a.prototype.isUnit = function() {
      return !1;
    }, g.prototype.isUnit = function() {
      return Math.abs(this.value) === 1;
    }, p.prototype.isUnit = function() {
      return this.abs().value === BigInt(1);
    }, a.prototype.isZero = function() {
      return !1;
    }, g.prototype.isZero = function() {
      return this.value === 0;
    }, p.prototype.isZero = function() {
      return this.value === BigInt(0);
    }, a.prototype.isDivisibleBy = function(b) {
      var $ = he(b);
      return $.isZero() ? !1 : $.isUnit() ? !0 : $.compareAbs(2) === 0 ? this.isEven() : this.mod($).isZero();
    }, p.prototype.isDivisibleBy = g.prototype.isDivisibleBy = a.prototype.isDivisibleBy;
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
      for (var L = b.prev(), k = L, d = 0, o, u, T; k.isEven(); )
        k = k.divide(2), d++;
      e:
        for (u = 0; u < $.length; u++)
          if (!b.lesser($[u]) && (T = e($[u]).modPow(k, b), !(T.isUnit() || T.equals(L)))) {
            for (o = d - 1; o != 0; o--) {
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
      var L = this.abs(), k = L.bitLength();
      if (k <= 64)
        return Ze(L, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
      for (var d = Math.log(2) * k.toJSNumber(), o = Math.ceil(b === !0 ? 2 * Math.pow(d, 2) : d), u = [], T = 0; T < o; T++)
        u.push(e(T + 2));
      return Ze(L, u);
    }, p.prototype.isPrime = g.prototype.isPrime = a.prototype.isPrime, a.prototype.isProbablePrime = function(b, $) {
      var L = $e(this);
      if (L !== n)
        return L;
      for (var k = this.abs(), d = b === n ? 5 : b, o = [], u = 0; u < d; u++)
        o.push(e.randBetween(2, k.minus(2), $));
      return Ze(k, o);
    }, p.prototype.isProbablePrime = g.prototype.isProbablePrime = a.prototype.isProbablePrime, a.prototype.modInv = function(b) {
      for (var $ = e.zero, L = e.one, k = he(b), d = this.abs(), o, u, T; !d.isZero(); )
        o = k.divide(d), u = $, T = k, $ = L, k = d, L = u.subtract(o.multiply(L)), d = T.subtract(o.multiply(d));
      if (!k.isUnit())
        throw new Error(this.toString() + " and " + b.toString() + " are not co-prime");
      return $.compare(0) === -1 && ($ = $.add(b)), this.isNegative() ? $.negate() : $;
    }, p.prototype.modInv = g.prototype.modInv = a.prototype.modInv, a.prototype.next = function() {
      var b = this.value;
      return this.sign ? G(b, 1, this.sign) : new a(R(b, 1), this.sign);
    }, g.prototype.next = function() {
      var b = this.value;
      return b + 1 < c ? new g(b + 1) : new a(v, !1);
    }, p.prototype.next = function() {
      return new p(this.value + BigInt(1));
    }, a.prototype.prev = function() {
      var b = this.value;
      return this.sign ? new a(R(b, 1), !0) : G(b, 1, this.sign);
    }, g.prototype.prev = function() {
      var b = this.value;
      return b - 1 > -c ? new g(b - 1) : new a(v, !0);
    }, p.prototype.prev = function() {
      return new p(this.value - BigInt(1));
    };
    for (var Te = [1]; 2 * Te[Te.length - 1] <= i; )
      Te.push(2 * Te[Te.length - 1]);
    var _e = Te.length, Ie = Te[_e - 1];
    function $t(b) {
      return Math.abs(b) <= i;
    }
    a.prototype.shiftLeft = function(b) {
      var $ = he(b).toJSNumber();
      if (!$t($))
        throw new Error(String($) + " is too large for shifting.");
      if ($ < 0)
        return this.shiftRight(-$);
      var L = this;
      if (L.isZero())
        return L;
      for (; $ >= _e; )
        L = L.multiply(Ie), $ -= _e - 1;
      return L.multiply(Te[$]);
    }, p.prototype.shiftLeft = g.prototype.shiftLeft = a.prototype.shiftLeft, a.prototype.shiftRight = function(b) {
      var $, L = he(b).toJSNumber();
      if (!$t(L))
        throw new Error(String(L) + " is too large for shifting.");
      if (L < 0)
        return this.shiftLeft(-L);
      for (var k = this; L >= _e; ) {
        if (k.isZero() || k.isNegative() && k.isUnit())
          return k;
        $ = me(k, Ie), k = $[1].isNegative() ? $[0].prev() : $[0], L -= _e - 1;
      }
      return $ = me(k, Te[L]), $[1].isNegative() ? $[0].prev() : $[0];
    }, p.prototype.shiftRight = g.prototype.shiftRight = a.prototype.shiftRight;
    function wt(b, $, L) {
      $ = he($);
      for (var k = b.isNegative(), d = $.isNegative(), o = k ? b.not() : b, u = d ? $.not() : $, T = 0, A = 0, M = null, j = null, te = []; !o.isZero() || !u.isZero(); )
        M = me(o, Ie), T = M[1].toJSNumber(), k && (T = Ie - 1 - T), j = me(u, Ie), A = j[1].toJSNumber(), d && (A = Ie - 1 - A), o = M[0], u = j[0], te.push(L(T, A));
      for (var le = L(k ? 1 : 0, d ? 1 : 0) !== 0 ? e(-1) : e(0), ue = te.length - 1; ue >= 0; ue -= 1)
        le = le.multiply(Ie).add(e(te[ue]));
      return le;
    }
    a.prototype.not = function() {
      return this.negate().prev();
    }, p.prototype.not = g.prototype.not = a.prototype.not, a.prototype.and = function(b) {
      return wt(this, b, function($, L) {
        return $ & L;
      });
    }, p.prototype.and = g.prototype.and = a.prototype.and, a.prototype.or = function(b) {
      return wt(this, b, function($, L) {
        return $ | L;
      });
    }, p.prototype.or = g.prototype.or = a.prototype.or, a.prototype.xor = function(b) {
      return wt(this, b, function($, L) {
        return $ ^ L;
      });
    }, p.prototype.xor = g.prototype.xor = a.prototype.xor;
    var Ue = 1 << 30, Ht = (i & -i) * (i & -i) | Ue;
    function Re(b) {
      var $ = b.value, L = typeof $ == "number" ? $ | Ue : typeof $ == "bigint" ? $ | BigInt(Ue) : $[0] + $[1] * i | Ht;
      return L & -L;
    }
    function Je(b, $) {
      if ($.compareTo(b) <= 0) {
        var L = Je(b, $.square($)), k = L.p, d = L.e, o = k.multiply($);
        return o.compareTo(b) <= 0 ? { p: o, e: d * 2 + 1 } : { p: k, e: d * 2 };
      }
      return { p: e(1), e: 0 };
    }
    a.prototype.bitLength = function() {
      var b = this;
      return b.compareTo(e(0)) < 0 && (b = b.negate().subtract(e(1))), b.compareTo(e(0)) === 0 ? e(0) : e(Je(b, e(2)).e).add(e(1));
    }, p.prototype.bitLength = g.prototype.bitLength = a.prototype.bitLength;
    function Pt(b, $) {
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
      for (var L = l[1], k, d; b.isEven() && $.isEven(); )
        k = ut(Re(b), Re($)), b = b.divide(k), $ = $.divide(k), L = L.multiply(k);
      for (; b.isEven(); )
        b = b.divide(Re(b));
      do {
        for (; $.isEven(); )
          $ = $.divide(Re($));
        b.greater($) && (d = $, $ = b, b = d), $ = $.subtract(b);
      } while (!$.isZero());
      return L.isUnit() ? b : b.multiply(L);
    }
    function jt(b, $) {
      return b = he(b).abs(), $ = he($).abs(), b.divide(bt(b, $)).multiply($);
    }
    function Ce(b, $, L) {
      b = he(b), $ = he($);
      var k = L || Math.random, d = ut(b, $), o = Pt(b, $), u = o.subtract(d).add(1);
      if (u.isSmall)
        return d.add(Math.floor(k() * u));
      for (var T = ht(u, i).value, A = [], M = !0, j = 0; j < T.length; j++) {
        var te = M ? T[j] + (j + 1 < T.length ? T[j + 1] / i : 0) : i, le = I(k() * te);
        A.push(le), le < T[j] && (M = !1);
      }
      return d.add(l.fromArray(A, i, !1));
    }
    var De = function(b, $, L, k) {
      L = L || h, b = String(b), k || (b = b.toLowerCase(), L = L.toLowerCase());
      var d = b.length, o, u = Math.abs($), T = {};
      for (o = 0; o < L.length; o++)
        T[L[o]] = o;
      for (o = 0; o < d; o++) {
        var A = b[o];
        if (A !== "-" && A in T && T[A] >= u) {
          if (A === "1" && u === 1)
            continue;
          throw new Error(A + " is not a valid digit in base " + $ + ".");
        }
      }
      $ = he($);
      var M = [], j = b[0] === "-";
      for (o = j ? 1 : 0; o < b.length; o++) {
        var A = b[o];
        if (A in T)
          M.push(he(T[A]));
        else if (A === "<") {
          var te = o;
          do
            o++;
          while (b[o] !== ">" && o < b.length);
          M.push(he(b.slice(te + 1, o)));
        } else
          throw new Error(A + " is not a valid character");
      }
      return lr(M, $, j);
    };
    function lr(b, $, L) {
      var k = l[0], d = l[1], o;
      for (o = b.length - 1; o >= 0; o--)
        k = k.add(b[o].times(d)), d = d.times($);
      return L ? k.negate() : k;
    }
    function Or(b, $) {
      return $ = $ || h, b < $.length ? $[b] : "<" + b + ">";
    }
    function ht(b, $) {
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
      var k = !1;
      if (b.isNegative() && $.isPositive() && (k = !0, b = b.abs()), $.isUnit())
        return b.isZero() ? { value: [0], isNegative: !1 } : {
          value: Array.apply(null, Array(b.toJSNumber())).map(Number.prototype.valueOf, 1),
          isNegative: k
        };
      for (var d = [], o = b, u; o.isNegative() || o.compareAbs($) >= 0; ) {
        u = o.divmod($), o = u.quotient;
        var T = u.remainder;
        T.isNegative() && (T = $.minus(T).abs(), o = o.next()), d.push(T.toJSNumber());
      }
      return d.push(o.toJSNumber()), { value: d.reverse(), isNegative: k };
    }
    function Rt(b, $, L) {
      var k = ht(b, $);
      return (k.isNegative ? "-" : "") + k.value.map(function(d) {
        return Or(d, L);
      }).join("");
    }
    a.prototype.toArray = function(b) {
      return ht(this, b);
    }, g.prototype.toArray = function(b) {
      return ht(this, b);
    }, p.prototype.toArray = function(b) {
      return ht(this, b);
    }, a.prototype.toString = function(b, $) {
      if (b === n && (b = 10), b !== 10)
        return Rt(this, b, $);
      for (var L = this.value, k = L.length, d = String(L[--k]), o = "0000000", u; --k >= 0; )
        u = String(L[k]), d += o.slice(u.length) + u;
      var T = this.sign ? "-" : "";
      return T + d;
    }, g.prototype.toString = function(b, $) {
      return b === n && (b = 10), b != 10 ? Rt(this, b, $) : String(this.value);
    }, p.prototype.toString = g.prototype.toString, p.prototype.toJSON = a.prototype.toJSON = g.prototype.toJSON = function() {
      return this.toString();
    }, a.prototype.valueOf = function() {
      return parseInt(this.toString(), 10);
    }, a.prototype.toJSNumber = a.prototype.valueOf, g.prototype.valueOf = function() {
      return this.value;
    }, g.prototype.toJSNumber = g.prototype.valueOf, p.prototype.valueOf = p.prototype.toJSNumber = function() {
      return parseInt(this.toString(), 10);
    };
    function It(b) {
      if (E(+b)) {
        var $ = +b;
        if ($ === I($))
          return y ? new p(BigInt($)) : new g($);
        throw new Error("Invalid integer: " + b);
      }
      var L = b[0] === "-";
      L && (b = b.slice(1));
      var k = b.split(/e/i);
      if (k.length > 2)
        throw new Error("Invalid integer: " + k.join("e"));
      if (k.length === 2) {
        var d = k[1];
        if (d[0] === "+" && (d = d.slice(1)), d = +d, d !== I(d) || !E(d))
          throw new Error("Invalid integer: " + d + " is not a valid exponent.");
        var o = k[0], u = o.indexOf(".");
        if (u >= 0 && (d -= o.length - u - 1, o = o.slice(0, u) + o.slice(u + 1)), d < 0)
          throw new Error("Cannot include negative exponent part for integers");
        o += new Array(d + 1).join("0"), b = o;
      }
      var T = /^([0-9][0-9]*)$/.test(b);
      if (!T)
        throw new Error("Invalid integer: " + b);
      if (y)
        return new p(BigInt(L ? "-" + b : b));
      for (var A = [], M = b.length, j = s, te = M - j; M > 0; )
        A.push(+b.slice(te, M)), te -= j, te < 0 && (te = 0), M -= j;
      return P(A), new a(A, L);
    }
    function At(b) {
      if (y)
        return new p(BigInt(b));
      if (E(b)) {
        if (b !== I(b))
          throw new Error(b + " is not an integer.");
        return new g(b);
      }
      return It(b.toString());
    }
    function he(b) {
      return typeof b == "number" ? At(b) : typeof b == "string" ? It(b) : typeof b == "bigint" ? new p(b) : b;
    }
    for (var qe = 0; qe < 1e3; qe++)
      l[qe] = he(qe), qe > 0 && (l[-qe] = he(-qe));
    return l.one = l[1], l.zero = l[0], l.minusOne = l[-1], l.max = Pt, l.min = ut, l.gcd = bt, l.lcm = jt, l.isInstance = function(b) {
      return b instanceof a || b instanceof g || b instanceof p;
    }, l.randBetween = Ce, l.fromArray = function(b, $, L) {
      return lr(b.map(he), he($ || 10), L);
    }, l;
  }();
  r.hasOwnProperty("exports") && (r.exports = e);
})(uc);
var vh = uc.exports;
const mh = /* @__PURE__ */ Wa(vh);
var lc = {}, Bi = {};
Bi.byteLength = bh;
Bi.toByteArray = Th;
Bi.fromByteArray = $h;
var or = [], Ft = [], yh = typeof Uint8Array < "u" ? Uint8Array : Array, mo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Xr = 0, wh = mo.length; Xr < wh; ++Xr)
  or[Xr] = mo[Xr], Ft[mo.charCodeAt(Xr)] = Xr;
Ft[45] = 62;
Ft[95] = 63;
function cc(r) {
  var e = r.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = r.indexOf("=");
  n === -1 && (n = e);
  var i = n === e ? 0 : 4 - n % 4;
  return [n, i];
}
function bh(r) {
  var e = cc(r), n = e[0], i = e[1];
  return (n + i) * 3 / 4 - i;
}
function Eh(r, e, n) {
  return (e + n) * 3 / 4 - n;
}
function Th(r) {
  var e, n = cc(r), i = n[0], s = n[1], c = new yh(Eh(r, i, s)), v = 0, h = s > 0 ? i - 4 : i, y;
  for (y = 0; y < h; y += 4)
    e = Ft[r.charCodeAt(y)] << 18 | Ft[r.charCodeAt(y + 1)] << 12 | Ft[r.charCodeAt(y + 2)] << 6 | Ft[r.charCodeAt(y + 3)], c[v++] = e >> 16 & 255, c[v++] = e >> 8 & 255, c[v++] = e & 255;
  return s === 2 && (e = Ft[r.charCodeAt(y)] << 2 | Ft[r.charCodeAt(y + 1)] >> 4, c[v++] = e & 255), s === 1 && (e = Ft[r.charCodeAt(y)] << 10 | Ft[r.charCodeAt(y + 1)] << 4 | Ft[r.charCodeAt(y + 2)] >> 2, c[v++] = e >> 8 & 255, c[v++] = e & 255), c;
}
function Sh(r) {
  return or[r >> 18 & 63] + or[r >> 12 & 63] + or[r >> 6 & 63] + or[r & 63];
}
function Oh(r, e, n) {
  for (var i, s = [], c = e; c < n; c += 3)
    i = (r[c] << 16 & 16711680) + (r[c + 1] << 8 & 65280) + (r[c + 2] & 255), s.push(Sh(i));
  return s.join("");
}
function $h(r) {
  for (var e, n = r.length, i = n % 3, s = [], c = 16383, v = 0, h = n - i; v < h; v += c)
    s.push(Oh(r, v, v + c > h ? h : v + c));
  return i === 1 ? (e = r[n - 1], s.push(
    or[e >> 2] + or[e << 4 & 63] + "=="
  )) : i === 2 && (e = (r[n - 2] << 8) + r[n - 1], s.push(
    or[e >> 10] + or[e >> 4 & 63] + or[e << 2 & 63] + "="
  )), s.join("");
}
var qa = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
qa.read = function(r, e, n, i, s) {
  var c, v, h = s * 8 - i - 1, y = (1 << h) - 1, l = y >> 1, a = -7, g = n ? s - 1 : 0, p = n ? -1 : 1, E = r[e + g];
  for (g += p, c = E & (1 << -a) - 1, E >>= -a, a += h; a > 0; c = c * 256 + r[e + g], g += p, a -= 8)
    ;
  for (v = c & (1 << -a) - 1, c >>= -a, a += i; a > 0; v = v * 256 + r[e + g], g += p, a -= 8)
    ;
  if (c === 0)
    c = 1 - l;
  else {
    if (c === y)
      return v ? NaN : (E ? -1 : 1) * (1 / 0);
    v = v + Math.pow(2, i), c = c - l;
  }
  return (E ? -1 : 1) * v * Math.pow(2, c - i);
};
qa.write = function(r, e, n, i, s, c) {
  var v, h, y, l = c * 8 - s - 1, a = (1 << l) - 1, g = a >> 1, p = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, E = i ? 0 : c - 1, O = i ? 1 : -1, _ = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (h = isNaN(e) ? 1 : 0, v = a) : (v = Math.floor(Math.log(e) / Math.LN2), e * (y = Math.pow(2, -v)) < 1 && (v--, y *= 2), v + g >= 1 ? e += p / y : e += p * Math.pow(2, 1 - g), e * y >= 2 && (v++, y /= 2), v + g >= a ? (h = 0, v = a) : v + g >= 1 ? (h = (e * y - 1) * Math.pow(2, s), v = v + g) : (h = e * Math.pow(2, g - 1) * Math.pow(2, s), v = 0)); s >= 8; r[n + E] = h & 255, E += O, h /= 256, s -= 8)
    ;
  for (v = v << s | h, l += s; l > 0; r[n + E] = v & 255, E += O, v /= 256, l -= 8)
    ;
  r[n + E - O] |= _ * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
  const e = Bi, n = qa, i = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  r.Buffer = a, r.SlowBuffer = R, r.INSPECT_MAX_BYTES = 50;
  const s = 2147483647;
  r.kMaxLength = s;
  const { Uint8Array: c, ArrayBuffer: v, SharedArrayBuffer: h } = globalThis;
  a.TYPED_ARRAY_SUPPORT = y(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function y() {
    try {
      const d = new c(1), o = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(o, c.prototype), Object.setPrototypeOf(d, o), d.foo() === 42;
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
  function l(d) {
    if (d > s)
      throw new RangeError('The value "' + d + '" is invalid for option "size"');
    const o = new c(d);
    return Object.setPrototypeOf(o, a.prototype), o;
  }
  function a(d, o, u) {
    if (typeof d == "number") {
      if (typeof o == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return O(d);
    }
    return g(d, o, u);
  }
  a.poolSize = 8192;
  function g(d, o, u) {
    if (typeof d == "string")
      return _(d, o);
    if (v.isView(d))
      return D(d);
    if (d == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof d
      );
    if (qe(d, v) || d && qe(d.buffer, v) || typeof h < "u" && (qe(d, h) || d && qe(d.buffer, h)))
      return I(d, o, u);
    if (typeof d == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const T = d.valueOf && d.valueOf();
    if (T != null && T !== d)
      return a.from(T, o, u);
    const A = x(d);
    if (A)
      return A;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof d[Symbol.toPrimitive] == "function")
      return a.from(d[Symbol.toPrimitive]("string"), o, u);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof d
    );
  }
  a.from = function(d, o, u) {
    return g(d, o, u);
  }, Object.setPrototypeOf(a.prototype, c.prototype), Object.setPrototypeOf(a, c);
  function p(d) {
    if (typeof d != "number")
      throw new TypeError('"size" argument must be of type number');
    if (d < 0)
      throw new RangeError('The value "' + d + '" is invalid for option "size"');
  }
  function E(d, o, u) {
    return p(d), d <= 0 ? l(d) : o !== void 0 ? typeof u == "string" ? l(d).fill(o, u) : l(d).fill(o) : l(d);
  }
  a.alloc = function(d, o, u) {
    return E(d, o, u);
  };
  function O(d) {
    return p(d), l(d < 0 ? 0 : F(d) | 0);
  }
  a.allocUnsafe = function(d) {
    return O(d);
  }, a.allocUnsafeSlow = function(d) {
    return O(d);
  };
  function _(d, o) {
    if ((typeof o != "string" || o === "") && (o = "utf8"), !a.isEncoding(o))
      throw new TypeError("Unknown encoding: " + o);
    const u = V(d, o) | 0;
    let T = l(u);
    const A = T.write(d, o);
    return A !== u && (T = T.slice(0, A)), T;
  }
  function P(d) {
    const o = d.length < 0 ? 0 : F(d.length) | 0, u = l(o);
    for (let T = 0; T < o; T += 1)
      u[T] = d[T] & 255;
    return u;
  }
  function D(d) {
    if (qe(d, c)) {
      const o = new c(d);
      return I(o.buffer, o.byteOffset, o.byteLength);
    }
    return P(d);
  }
  function I(d, o, u) {
    if (o < 0 || d.byteLength < o)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (d.byteLength < o + (u || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let T;
    return o === void 0 && u === void 0 ? T = new c(d) : u === void 0 ? T = new c(d, o) : T = new c(d, o, u), Object.setPrototypeOf(T, a.prototype), T;
  }
  function x(d) {
    if (a.isBuffer(d)) {
      const o = F(d.length) | 0, u = l(o);
      return u.length === 0 || d.copy(u, 0, 0, o), u;
    }
    if (d.length !== void 0)
      return typeof d.length != "number" || b(d.length) ? l(0) : P(d);
    if (d.type === "Buffer" && Array.isArray(d.data))
      return P(d.data);
  }
  function F(d) {
    if (d >= s)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
    return d | 0;
  }
  function R(d) {
    return +d != d && (d = 0), a.alloc(+d);
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
  function V(d, o) {
    if (a.isBuffer(d))
      return d.length;
    if (v.isView(d) || qe(d, v))
      return d.byteLength;
    if (typeof d != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof d
      );
    const u = d.length, T = arguments.length > 2 && arguments[2] === !0;
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
          return ht(d).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return u * 2;
        case "hex":
          return u >>> 1;
        case "base64":
          return At(d).length;
        default:
          if (A)
            return T ? -1 : ht(d).length;
          o = ("" + o).toLowerCase(), A = !0;
      }
  }
  a.byteLength = V;
  function z(d, o, u) {
    let T = !1;
    if ((o === void 0 || o < 0) && (o = 0), o > this.length || ((u === void 0 || u > this.length) && (u = this.length), u <= 0) || (u >>>= 0, o >>>= 0, u <= o))
      return "";
    for (d || (d = "utf8"); ; )
      switch (d) {
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
            throw new TypeError("Unknown encoding: " + d);
          d = (d + "").toLowerCase(), T = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function G(d, o, u) {
    const T = d[o];
    d[o] = d[u], d[u] = T;
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
    return o === 0 ? "" : arguments.length === 0 ? ce(this, 0, o) : z.apply(this, arguments);
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
  function X(d, o, u, T, A) {
    if (d.length === 0)
      return -1;
    if (typeof u == "string" ? (T = u, u = 0) : u > 2147483647 ? u = 2147483647 : u < -2147483648 && (u = -2147483648), u = +u, b(u) && (u = A ? 0 : d.length - 1), u < 0 && (u = d.length + u), u >= d.length) {
      if (A)
        return -1;
      u = d.length - 1;
    } else if (u < 0)
      if (A)
        u = 0;
      else
        return -1;
    if (typeof o == "string" && (o = a.from(o, T)), a.isBuffer(o))
      return o.length === 0 ? -1 : Z(d, o, u, T, A);
    if (typeof o == "number")
      return o = o & 255, typeof c.prototype.indexOf == "function" ? A ? c.prototype.indexOf.call(d, o, u) : c.prototype.lastIndexOf.call(d, o, u) : Z(d, [o], u, T, A);
    throw new TypeError("val must be string, number or Buffer");
  }
  function Z(d, o, u, T, A) {
    let M = 1, j = d.length, te = o.length;
    if (T !== void 0 && (T = String(T).toLowerCase(), T === "ucs2" || T === "ucs-2" || T === "utf16le" || T === "utf-16le")) {
      if (d.length < 2 || o.length < 2)
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
        if (le(d, ue) === le(o, fe === -1 ? 0 : ue - fe)) {
          if (fe === -1 && (fe = ue), ue - fe + 1 === te)
            return fe * M;
        } else
          fe !== -1 && (ue -= ue - fe), fe = -1;
    } else
      for (u + te > j && (u = j - te), ue = u; ue >= 0; ue--) {
        let fe = !0;
        for (let xe = 0; xe < te; xe++)
          if (le(d, ue + xe) !== le(o, xe)) {
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
  function H(d, o, u, T) {
    u = Number(u) || 0;
    const A = d.length - u;
    T ? (T = Number(T), T > A && (T = A)) : T = A;
    const M = o.length;
    T > M / 2 && (T = M / 2);
    let j;
    for (j = 0; j < T; ++j) {
      const te = parseInt(o.substr(j * 2, 2), 16);
      if (b(te))
        return j;
      d[u + j] = te;
    }
    return j;
  }
  function K(d, o, u, T) {
    return he(ht(o, d.length - u), d, u, T);
  }
  function q(d, o, u, T) {
    return he(Rt(o), d, u, T);
  }
  function re(d, o, u, T) {
    return he(At(o), d, u, T);
  }
  function pe(d, o, u, T) {
    return he(It(o, d.length - u), d, u, T);
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
          return q(this, o, u, T);
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
  function Ae(d, o, u) {
    return o === 0 && u === d.length ? e.fromByteArray(d) : e.fromByteArray(d.slice(o, u));
  }
  function ce(d, o, u) {
    u = Math.min(d.length, u);
    const T = [];
    let A = o;
    for (; A < u; ) {
      const M = d[A];
      let j = null, te = M > 239 ? 4 : M > 223 ? 3 : M > 191 ? 2 : 1;
      if (A + te <= u) {
        let le, ue, fe, xe;
        switch (te) {
          case 1:
            M < 128 && (j = M);
            break;
          case 2:
            le = d[A + 1], (le & 192) === 128 && (xe = (M & 31) << 6 | le & 63, xe > 127 && (j = xe));
            break;
          case 3:
            le = d[A + 1], ue = d[A + 2], (le & 192) === 128 && (ue & 192) === 128 && (xe = (M & 15) << 12 | (le & 63) << 6 | ue & 63, xe > 2047 && (xe < 55296 || xe > 57343) && (j = xe));
            break;
          case 4:
            le = d[A + 1], ue = d[A + 2], fe = d[A + 3], (le & 192) === 128 && (ue & 192) === 128 && (fe & 192) === 128 && (xe = (M & 15) << 18 | (le & 63) << 12 | (ue & 63) << 6 | fe & 63, xe > 65535 && xe < 1114112 && (j = xe));
        }
      }
      j === null ? (j = 65533, te = 1) : j > 65535 && (j -= 65536, T.push(j >>> 10 & 1023 | 55296), j = 56320 | j & 1023), T.push(j), A += te;
    }
    return me(T);
  }
  const Ee = 4096;
  function me(d) {
    const o = d.length;
    if (o <= Ee)
      return String.fromCharCode.apply(String, d);
    let u = "", T = 0;
    for (; T < o; )
      u += String.fromCharCode.apply(
        String,
        d.slice(T, T += Ee)
      );
    return u;
  }
  function Me(d, o, u) {
    let T = "";
    u = Math.min(d.length, u);
    for (let A = o; A < u; ++A)
      T += String.fromCharCode(d[A] & 127);
    return T;
  }
  function $e(d, o, u) {
    let T = "";
    u = Math.min(d.length, u);
    for (let A = o; A < u; ++A)
      T += String.fromCharCode(d[A]);
    return T;
  }
  function Ze(d, o, u) {
    const T = d.length;
    (!o || o < 0) && (o = 0), (!u || u < 0 || u > T) && (u = T);
    let A = "";
    for (let M = o; M < u; ++M)
      A += $[d[M]];
    return A;
  }
  function Te(d, o, u) {
    const T = d.slice(o, u);
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
  function _e(d, o, u) {
    if (d % 1 !== 0 || d < 0)
      throw new RangeError("offset is not uint");
    if (d + o > u)
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
    (u === void 0 || T === void 0) && De(o, this.length - 8);
    const A = u + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24, M = this[++o] + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + T * 2 ** 24;
    return BigInt(A) + (BigInt(M) << BigInt(32));
  }), a.prototype.readBigUInt64BE = L(function(o) {
    o = o >>> 0, Ce(o, "offset");
    const u = this[o], T = this[o + 7];
    (u === void 0 || T === void 0) && De(o, this.length - 8);
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
  function Ie(d, o, u, T, A, M) {
    if (!a.isBuffer(d))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (o > A || o < M)
      throw new RangeError('"value" argument is out of bounds');
    if (u + T > d.length)
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
  function $t(d, o, u, T, A) {
    jt(o, T, A, d, u, 7);
    let M = Number(o & BigInt(4294967295));
    d[u++] = M, M = M >> 8, d[u++] = M, M = M >> 8, d[u++] = M, M = M >> 8, d[u++] = M;
    let j = Number(o >> BigInt(32) & BigInt(4294967295));
    return d[u++] = j, j = j >> 8, d[u++] = j, j = j >> 8, d[u++] = j, j = j >> 8, d[u++] = j, u;
  }
  function wt(d, o, u, T, A) {
    jt(o, T, A, d, u, 7);
    let M = Number(o & BigInt(4294967295));
    d[u + 7] = M, M = M >> 8, d[u + 6] = M, M = M >> 8, d[u + 5] = M, M = M >> 8, d[u + 4] = M;
    let j = Number(o >> BigInt(32) & BigInt(4294967295));
    return d[u + 3] = j, j = j >> 8, d[u + 2] = j, j = j >> 8, d[u + 1] = j, j = j >> 8, d[u] = j, u + 8;
  }
  a.prototype.writeBigUInt64LE = L(function(o, u = 0) {
    return $t(this, o, u, BigInt(0), BigInt("0xffffffffffffffff"));
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
    return $t(this, o, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), a.prototype.writeBigInt64BE = L(function(o, u = 0) {
    return wt(this, o, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Ue(d, o, u, T, A, M) {
    if (u + T > d.length)
      throw new RangeError("Index out of range");
    if (u < 0)
      throw new RangeError("Index out of range");
  }
  function Ht(d, o, u, T, A) {
    return o = +o, u = u >>> 0, A || Ue(d, o, u, 4), n.write(d, o, u, T, 23, 4), u + 4;
  }
  a.prototype.writeFloatLE = function(o, u, T) {
    return Ht(this, o, u, !0, T);
  }, a.prototype.writeFloatBE = function(o, u, T) {
    return Ht(this, o, u, !1, T);
  };
  function Re(d, o, u, T, A) {
    return o = +o, u = u >>> 0, A || Ue(d, o, u, 8), n.write(d, o, u, T, 52, 8), u + 8;
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
  function Pt(d, o, u) {
    Je[d] = class extends u {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: o.apply(this, arguments),
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
  Pt(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(d) {
      return d ? `${d} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Pt(
    "ERR_INVALID_ARG_TYPE",
    function(d, o) {
      return `The "${d}" argument must be of type number. Received type ${typeof o}`;
    },
    TypeError
  ), Pt(
    "ERR_OUT_OF_RANGE",
    function(d, o, u) {
      let T = `The value of "${d}" is out of range.`, A = u;
      return Number.isInteger(u) && Math.abs(u) > 2 ** 32 ? A = ut(String(u)) : typeof u == "bigint" && (A = String(u), (u > BigInt(2) ** BigInt(32) || u < -(BigInt(2) ** BigInt(32))) && (A = ut(A)), A += "n"), T += ` It must be ${o}. Received ${A}`, T;
    },
    RangeError
  );
  function ut(d) {
    let o = "", u = d.length;
    const T = d[0] === "-" ? 1 : 0;
    for (; u >= T + 4; u -= 3)
      o = `_${d.slice(u - 3, u)}${o}`;
    return `${d.slice(0, u)}${o}`;
  }
  function bt(d, o, u) {
    Ce(o, "offset"), (d[o] === void 0 || d[o + u] === void 0) && De(o, d.length - (u + 1));
  }
  function jt(d, o, u, T, A, M) {
    if (d > u || d < o) {
      const j = typeof o == "bigint" ? "n" : "";
      let te;
      throw M > 3 ? o === 0 || o === BigInt(0) ? te = `>= 0${j} and < 2${j} ** ${(M + 1) * 8}${j}` : te = `>= -(2${j} ** ${(M + 1) * 8 - 1}${j}) and < 2 ** ${(M + 1) * 8 - 1}${j}` : te = `>= ${o}${j} and <= ${u}${j}`, new Je.ERR_OUT_OF_RANGE("value", te, d);
    }
    bt(T, A, M);
  }
  function Ce(d, o) {
    if (typeof d != "number")
      throw new Je.ERR_INVALID_ARG_TYPE(o, "number", d);
  }
  function De(d, o, u) {
    throw Math.floor(d) !== d ? (Ce(d, u), new Je.ERR_OUT_OF_RANGE(u || "offset", "an integer", d)) : o < 0 ? new Je.ERR_BUFFER_OUT_OF_BOUNDS() : new Je.ERR_OUT_OF_RANGE(
      u || "offset",
      `>= ${u ? 1 : 0} and <= ${o}`,
      d
    );
  }
  const lr = /[^+/0-9A-Za-z-_]/g;
  function Or(d) {
    if (d = d.split("=")[0], d = d.trim().replace(lr, ""), d.length < 2)
      return "";
    for (; d.length % 4 !== 0; )
      d = d + "=";
    return d;
  }
  function ht(d, o) {
    o = o || 1 / 0;
    let u;
    const T = d.length;
    let A = null;
    const M = [];
    for (let j = 0; j < T; ++j) {
      if (u = d.charCodeAt(j), u > 55295 && u < 57344) {
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
  function Rt(d) {
    const o = [];
    for (let u = 0; u < d.length; ++u)
      o.push(d.charCodeAt(u) & 255);
    return o;
  }
  function It(d, o) {
    let u, T, A;
    const M = [];
    for (let j = 0; j < d.length && !((o -= 2) < 0); ++j)
      u = d.charCodeAt(j), T = u >> 8, A = u % 256, M.push(A), M.push(T);
    return M;
  }
  function At(d) {
    return e.toByteArray(Or(d));
  }
  function he(d, o, u, T) {
    let A;
    for (A = 0; A < T && !(A + u >= o.length || A >= d.length); ++A)
      o[A + u] = d[A];
    return A;
  }
  function qe(d, o) {
    return d instanceof o || d != null && d.constructor != null && d.constructor.name != null && d.constructor.name === o.name;
  }
  function b(d) {
    return d !== d;
  }
  const $ = function() {
    const d = "0123456789abcdef", o = new Array(256);
    for (let u = 0; u < 16; ++u) {
      const T = u * 16;
      for (let A = 0; A < 16; ++A)
        o[T + A] = d[u] + d[A];
    }
    return o;
  }();
  function L(d) {
    return typeof BigInt > "u" ? k : d;
  }
  function k() {
    throw new Error("BigInt not supported");
  }
})(lc);
const Ih = lc.Buffer, Lt = 100 * 1e3 * 1e3, Ah = 32768, _h = 9783072e5;
class xh {
  constructor(e) {
    console.info({ id: e });
  }
}
class Nh {
  constructor() {
    this.debug = !1;
  }
  parse64Content(e) {
    const n = window.atob(e), i = n.length, s = new Ih(i);
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
    const h = this.readUInt64BE(s, 8);
    this.debug && console.log("numObjects: " + h);
    const y = this.readUInt64BE(s, 16);
    this.debug && console.log("topObject: " + y);
    const l = this.readUInt64BE(s, 24);
    if (this.debug && console.log("offsetTableOffset: " + l), h > Ah)
      throw new Error("maxObjectCount exceeded");
    const a = [];
    for (let p = 0; p < h; p++) {
      const E = e.slice(l + p * c, l + (p + 1) * c);
      a[p] = this.readUInt(E, 0), this.debug;
    }
    const g = (p) => {
      const E = a[p], O = e[E], _ = (O & 240) >> 4, P = O & 15, D = () => {
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
        let K = "", q;
        for (q = 0; q < H.length && H[q] === 0; q++)
          ;
        for (; q < H.length; q++) {
          const re = "00" + H[q].toString(16);
          K += re.substr(re.length - 2);
        }
        return K;
      }, x = () => {
        const H = Math.pow(2, P);
        if (H > 4) {
          const K = e.slice(E + 1, E + 1 + H), q = I(K);
          return mh(q, 16);
        }
        if (H < Lt)
          return this.readUInt(e.slice(E + 1, E + 1 + H));
        throw new Error(
          "Too little heap space available! Wanted to read " + H + " bytes, but only " + Lt + " are available."
        );
      }, F = () => {
        const H = P + 1;
        if (H < Lt)
          return new xh(this.readUInt(e.slice(E + 1, E + 1 + H)));
        throw new Error(
          "To little heap space available! Wanted to read " + H + " bytes, but only " + Lt + " are available."
        );
      }, R = () => {
        const H = Math.pow(2, P);
        if (H < Lt) {
          const K = e.slice(E + 1, E + 1 + H);
          if (H === 4)
            return K.readFloatBE(0);
          if (H === 8)
            return K.readDoubleBE(0);
        } else
          throw new Error(
            "To little heap space available! Wanted to read " + H + " bytes, but only " + Lt + " are available."
          );
      }, V = () => {
        P !== 3 && console.error("Unknown date type :" + P + ". Parsing anyway...");
        const H = e.slice(E + 1, E + 9);
        return new Date(_h + 1e3 * H.readDoubleBE(0));
      }, z = () => {
        let H = 1, K = P;
        if (P === 15) {
          const q = e[E + 1], re = (q & 240) / 16;
          re !== 1 && console.error("0x4: UNEXPECTED LENGTH-INT TYPE! " + re);
          const pe = q & 15, Ae = Math.pow(2, pe);
          H = 2 + Ae, Ae < 3 ? K = this.readUInt(e.slice(E + 2, E + 2 + Ae)) : K = this.readUInt(e.slice(E + 2, E + 2 + Ae));
        }
        if (K < Lt)
          return e.slice(E + H, E + H + K);
        throw new Error(
          "To little heap space available! Wanted to read " + K + " bytes, but only " + Lt + " are available."
        );
      }, G = (H) => {
        H = H || 0;
        let K = "utf8", q = P, re = 1;
        if (P === 15) {
          const pe = e[E + 1], Ae = (pe & 240) / 16;
          Ae !== 1 && console.error("UNEXPECTED LENGTH-INT TYPE! " + Ae);
          const ce = pe & 15, Ee = Math.pow(2, ce);
          re = 2 + Ee, Ee < 3 ? q = this.readUInt(e.slice(E + 2, E + 2 + Ee)) : q = this.readUInt(e.slice(E + 2, E + 2 + Ee));
        }
        if (q *= H + 1, q < Lt) {
          let pe = e.toString("utf8", E + re, E + re + q);
          return H && (pe = this.swapBytes(pe), K = "ucs2"), pe.toString(K);
        } else
          throw new Error(
            "To little heap space available! Wanted to read " + q + " bytes, but only " + Lt + " are available."
          );
      }, X = () => {
        let H = P, K = 1;
        if (P === 15) {
          const re = e[E + 1], pe = (re & 240) / 16;
          pe !== 1 && console.error("0xa: UNEXPECTED LENGTH-INT TYPE! " + pe);
          const Ae = re & 15, ce = Math.pow(2, Ae);
          K = 2 + ce, ce < 3 ? H = this.readUInt(e.slice(E + 2, E + 2 + ce)) : H = this.readUInt(e.slice(E + 2, E + 2 + ce));
        }
        if (H * v > Lt)
          throw new Error("To little heap space available!");
        const q = [];
        for (let re = 0; re < H; re++) {
          const pe = this.readUInt(
            e.slice(E + K + re * v, E + K + (re + 1) * v)
          );
          q[re] = g(pe);
        }
        return q;
      }, Z = () => {
        let H = P, K = 1;
        if (P === 15) {
          const re = e[E + 1], pe = (re & 240) / 16;
          pe !== 1 && console.error("0xD: UNEXPECTED LENGTH-INT TYPE! " + pe);
          const Ae = re & 15, ce = Math.pow(2, Ae);
          K = 2 + ce, ce < 3 ? H = this.readUInt(e.slice(E + 2, E + 2 + ce)) : H = this.readUInt(e.slice(E + 2, E + 2 + ce));
        }
        if (H * 2 * v > Lt)
          throw new Error("To little heap space available!");
        this.debug && console.log("Parsing dictionary #" + p);
        const q = {};
        for (let re = 0; re < H; re++) {
          const pe = this.readUInt(
            e.slice(E + K + re * v, E + K + (re + 1) * v)
          ), Ae = this.readUInt(
            e.slice(
              E + K + H * v + re * v,
              E + K + H * v + (re + 1) * v
            )
          ), ce = g(pe), Ee = g(Ae);
          this.debug && console.log("  DICT #" + p + ": Mapped " + ce + " to " + Ee), q[ce] = Ee;
        }
        return q;
      };
      switch (_) {
        case 0:
          return D();
        case 1:
          return x();
        case 8:
          return F();
        case 2:
          return R();
        case 3:
          return V();
        case 4:
          return z();
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
    return [g(y)];
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
const Ph = new Nh(), Qt = {
  skipConfirmation: "X-Skip-Confirm-Navigation=1",
  sameWindow: "X-Target=_self"
}, mr = {
  skipConfirmation: "X-Skip-Confirm-Navigation",
  sameWindow: "X-Target"
}, js = {
  url: "",
  sameWindow: !1,
  skipConfirmation: !1
};
class xt {
  /**
   * Generates a URL file.
   */
  static generateURLFileContent(e, n, i = !1, s = !1) {
    let c = "";
    return e && e.indexOf("[InternetShortcut]") !== -1 && e.indexOf("URL=") !== -1 ? c = e.replace(new RegExp("URL=.*", "gm"), `URL=${Et(n)}`) : c = `[InternetShortcut]\r
URL=${Et(n)}`, !i && c.indexOf(Qt.sameWindow) !== -1 ? c = c.replace(Qt.sameWindow, "") : i && c.indexOf(Qt.sameWindow) === -1 && (c = `${c}\r
${Qt.sameWindow}`), !s && c.indexOf(Qt.skipConfirmation) !== -1 ? c = c.replace(Qt.skipConfirmation, "") : s && c.indexOf(Qt.skipConfirmation) === -1 && (c = `${c}\r
${Qt.skipConfirmation}`), c = c.replace(/\r\n\r\n/gm, `\r
`).trim(), `${c}\r
`;
  }
  /**
   * Parse a URL file.
   */
  static parseURLFile(e) {
    const n = { ...js };
    if (e) {
      const i = e.match("URL=.*");
      if (i && Array.isArray(i) && i.length > 0) {
        const s = i[0];
        n.url = Et(s.replace("URL=", ""));
      }
      e.indexOf(Qt.skipConfirmation) !== -1 && (n.skipConfirmation = !0), e.indexOf(Qt.sameWindow) !== -1 && (n.sameWindow = !0);
    }
    return n;
  }
  /**
   * Generates a webloc file.
   */
  static generateWeblocFileContent(e, n, i = !1, s = !1) {
    let c = "", v = !1;
    if (e) {
      const h = new window.DOMParser(), y = Ws(e), l = h.parseFromString(y, "text/xml"), a = [...l.getElementsByTagName("dict"), ...l.getElementsByTagName("extra")];
      let g = !1, p = !1;
      if (a && a.length)
        for (const O of a) {
          const _ = O.getElementsByTagName("key"), P = O.getElementsByTagName("string");
          Wt(_) === "URL" && (yo(P, Et(n)), v = !0), Wt(_) === mr.sameWindow && Wt(P) === "_self" && (i ? yo(P, "_self") : l.getElementsByTagName("plist")[0].removeChild(O), p = !0), Wt(_) === mr.skipConfirmation && Wt(P) === "1" && (s ? yo(P, "1") : l.getElementsByTagName("plist")[0].removeChild(O), g = !0);
        }
      if (i && !p) {
        const O = Gs(l, mr.sameWindow, "_self");
        l.getElementsByTagName("plist")[0].appendChild(O);
      }
      if (s && !g) {
        const O = Gs(l, mr.skipConfirmation, "1");
        l.getElementsByTagName("plist")[0].appendChild(O);
      }
      c = `<?xml version="1.0" encoding="UTF-8"?>
			${new window.XMLSerializer().serializeToString(l)}`, c.indexOf("parsererror") > -1 && (console.error("Parse error", c), c = ""), c = Rh(c);
    }
    return (!c || !v) && (c = `<?xml version="1.0" encoding="UTF-8"?>
				<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
				<plist version="1.0">
					<dict>
						<key>URL</key>
						<string>${Et(n)}</string>
					</dict>`, i && (c = `${c}
				<extra>
					<key>${mr.sameWindow}</key>
					<string>_self</string>
				</extra>`), s && (c = `${c}
				<extra>
					<key>${mr.skipConfirmation}</key>
					<string>1</string>
				</extra>`), c = `${c}
			</plist>`), c = Ch(c), c = c.replace(/(\n|\b)\t+/g, "$1").trim(), c = c.replace(/^\s*$(?:\r\n?|\n)/gm, "").trim(), c;
  }
  /**
   * Parse a webloc file.
   */
  static parseWeblocFile(e) {
    const n = { ...js };
    if (e)
      if (e.substring(0, 6) === "bplist")
        try {
          const i = Ph.parse64Content(window.btoa(e));
          i && i.length && i[0] && i[0].URL && (n.url = i[0].URL);
        } catch (i) {
          console.info(i);
        }
      else {
        const i = new window.DOMParser(), s = Ws(e), c = i.parseFromString(s, "text/xml"), v = [...c.getElementsByTagName("dict"), ...c.getElementsByTagName("extra")];
        if (v && v.length)
          for (const h of v) {
            const y = h.getElementsByTagName("key"), l = h.getElementsByTagName("string");
            Wt(y) === "URL" && (n.url = Et(Wt(l))), Wt(y) === mr.sameWindow && Wt(l) === "_self" && (n.sameWindow = !0), Wt(y) === mr.skipConfirmation && Wt(l) === "1" && (n.skipConfirmation = !0);
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
const Wt = (r) => r && r.length > 0 && r[0].childNodes && r[0].childNodes.length > 0 && r[0].childNodes[0] ? r[0].childNodes[0].nodeValue : "", yo = (r, e) => {
  r && r.length > 0 && r[0].childNodes && r[0].childNodes.length > 0 && r[0].childNodes[0] && (r[0].childNodes[0].nodeValue = e);
}, Gs = (r, e, n) => {
  const i = r.createElement("extra"), s = r.createElement("key");
  s.appendChild(r.createTextNode(e)), i.appendChild(s);
  const c = r.createElement("string");
  return c.appendChild(r.createTextNode(n)), i.appendChild(c), i;
}, Rh = (r) => r.replace(/></g, `>
<`), Ch = (r) => r.replace(/<extra>/g, "<!-- <extra>").replace(/<\/extra>/g, "</extra> -->"), Ws = (r) => r.replace(/<!-- <extra>/g, "<extra>").replace(/<\/extra> -->/g, "</extra>");
function Lh(r) {
  let e, n, i, s, c = (
    /*t*/
    r[1]("files_linkeditor", "View link") + ""
  ), v, h, y;
  return {
    c() {
      e = Fe("div"), n = Fe("a"), i = Fe("span"), s = nt(), v = St(c), ge(i, "class", "icon icon-link"), ge(n, "href", "#/"), ge(n, "class", "button"), ge(n, "id", "downloadFile"), ge(e, "class", "directDownload");
    },
    m(l, a) {
      We(l, e, a), Ne(e, n), Ne(n, i), Ne(n, s), Ne(n, v), h || (y = dr(n, "click", ln(function() {
        Ua(
          /*onClick*/
          r[0]
        ) && r[0].apply(this, arguments);
      })), h = !0);
    },
    p(l, [a]) {
      r = l;
    },
    i: wr,
    o: wr,
    d(l) {
      l && Ge(e), h = !1, y();
    }
  };
}
function Fh(r, e, n) {
  let { onClick: i } = e;
  const s = window.t;
  return r.$$set = (c) => {
    "onClick" in c && n(0, i = c.onClick);
  }, [i, s];
}
class Mh extends Wn {
  constructor(e) {
    super(), Gn(this, e, Fh, Lh, gn, { onClick: 0 });
  }
}
const ui = "application/internet-shortcut", kh = [];
class xr {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    window.OCA.Files.fileActions.registerAction({
      name: "editLink",
      displayName: t("files_linkeditor", "Edit link"),
      mime: ui,
      actionHandler: async (i, s) => await xr.loadAndChangeViewMode({ fileName: i, context: s, nextViewMode: "edit" }),
      permissions: window.OC.currentUser && window.OC.PERMISSION_UPDATE,
      iconClass: "icon-link"
    }), window.OCA.Files.fileActions.registerAction({
      name: "viewLink",
      displayName: t("files_linkeditor", "View link"),
      mime: ui,
      actionHandler: async (i, s) => {
        window.OC.currentUser ? await xr.loadAndChangeViewMode({ fileName: i, context: s, nextViewMode: "view" }) : await xr.loadAndChangeViewMode({
          fileName: i,
          context: s,
          nextViewMode: "view",
          downloadUrl: s.fileList.getDownloadUrl(i),
          publicUser: !0
        });
      },
      permissions: window.OC.PERMISSION_READ,
      iconClass: "icon-link"
    }), window.OCA.Files.fileActions.setDefault(ui, "viewLink"), window.OC.Plugins.register("OCA.Files.NewFileMenu", {
      attach: function(i) {
        const s = i.fileList;
        if (s.id !== "files")
          return;
        const c = ({ id: v, displayName: h, templateName: y }) => {
          i.addMenuEntry({
            id: v,
            displayName: h,
            templateName: y,
            iconClass: "icon-link",
            fileType: ui,
            actionHandler: function(l) {
              const a = s.getCurrentDirectory();
              ar.update(() => "edit"), Rr.update(
                () => ft.getFileConfig({
                  name: l,
                  dir: a,
                  isNew: !0,
                  onCreate: async (g) => {
                    await s.createFile(l, {
                      scrollTo: !1
                    });
                    const p = await ft.load({ fileName: l, dir: a });
                    await xr.saveAndChangeViewMode({ ...g, fileModifiedTime: p.mtime });
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
      var n = xt.getExtension(i);
      if (n === "url" || n === "webloc") {
        const s = (document.querySelector("input#downloadURL") || { value: "" }).value;
        kh.push(
          new Mh({
            anchor: document.querySelector(".directDownload"),
            target: document.querySelector(".directDownload").parentElement,
            props: {
              onClick: () => {
                xr.loadAndChangeViewMode({
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
    const v = n ? encodeURI(n.fileList.linkTo() + "?path=" + n.dir) : window.location.href;
    ar.update(() => i), Rr.update(
      () => ft.getFileConfig({
        name: e,
        currentUrl: v,
        dir: n ? n.dir : ""
      })
    );
    let h = {};
    if (s ? h = await ft.loadPublic({ downloadUrl: c }) : h = await ft.load({ fileName: e, dir: n.dir }), h) {
      const y = xt.getExtension(e);
      let l = {};
      y === "webloc" ? l = xt.parseWeblocFile(h.filecontents) : l = xt.parseURLFile(h.filecontents), Rr.update(
        (a) => ft.getFileConfig({ ...a, ...l, fileModifiedTime: h.mtime, isLoaded: !0 })
      );
    } else
      window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async saveAndChangeViewMode({ name: e, dir: n, url: i, fileModifiedTime: s, sameWindow: c, skipConfirmation: v }) {
    const h = xt.getExtension(e);
    let y = "";
    h === "webloc" ? y = xt.generateWeblocFileContent("", i, c, v) : y = xt.generateURLFileContent("", i, c, v), await ft.save({ fileContent: y, name: e, dir: n, fileModifiedTime: s }), ar.update(() => "none");
  }
}
function Vs(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "Link target URL") + ""
  ), i, s, c, v, h, y, l, a, g, p, E, O, _, P, D, I;
  return {
    c() {
      e = Fe("label"), i = St(n), s = nt(), c = Fe("br"), v = nt(), h = Fe("input"), y = nt(), l = Fe("input"), a = nt(), g = Fe("label"), g.textContent = `${/*t*/
      r[2]("files_linkeditor", "Open in same window")}`, p = nt(), E = Fe("input"), _ = nt(), P = Fe("label"), P.textContent = `${/*t*/
      r[2]("files_linkeditor", "Skip confirmation dialog before open (has to open in same window)")}`, ge(h, "type", "text"), nc(h, "width", "100%"), ge(h, "class", "input-wide"), h.autofocus = !0, ge(h, "data-cy", "url-input"), ge(
        h,
        "placeholder",
        /*t*/
        r[2]("files_linkeditor", "e.g. https://example.org")
      ), ge(l, "type", "checkbox"), ge(l, "id", "linkeditor_sameWindow"), ge(l, "class", "checkbox"), ge(g, "for", "linkeditor_sameWindow"), ge(g, "class", "space-top"), ge(E, "type", "checkbox"), E.disabled = O = !/*file*/
      r[0].sameWindow, ge(E, "id", "linkeditor_skipConfirmation"), ge(E, "class", "checkbox"), ge(P, "for", "linkeditor_skipConfirmation");
    },
    m(x, F) {
      We(x, e, F), Ne(e, i), Ne(e, s), Ne(e, c), Ne(e, v), Ne(e, h), Ls(
        h,
        /*file*/
        r[0].url
      ), We(x, y, F), We(x, l, F), l.checked = /*file*/
      r[0].sameWindow, We(x, a, F), We(x, g, F), We(x, p, F), We(x, E, F), E.checked = /*file*/
      r[0].skipConfirmation, We(x, _, F), We(x, P, F), h.focus(), D || (I = [
        dr(
          h,
          "input",
          /*input0_input_handler*/
          r[5]
        ),
        dr(
          l,
          "change",
          /*input1_change_handler*/
          r[6]
        ),
        dr(
          E,
          "change",
          /*input2_change_handler*/
          r[7]
        )
      ], D = !0);
    },
    p(x, F) {
      F & /*file*/
      1 && h.value !== /*file*/
      x[0].url && Ls(
        h,
        /*file*/
        x[0].url
      ), F & /*file*/
      1 && (l.checked = /*file*/
      x[0].sameWindow), F & /*file*/
      1 && O !== (O = !/*file*/
      x[0].sameWindow) && (E.disabled = O), F & /*file*/
      1 && (E.checked = /*file*/
      x[0].skipConfirmation);
    },
    d(x) {
      x && (Ge(e), Ge(y), Ge(l), Ge(a), Ge(g), Ge(p), Ge(E), Ge(_), Ge(P)), D = !1, Mr(I);
    }
  };
}
function qs(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "Visit link") + ""
  ), i, s;
  return {
    c() {
      e = Fe("a"), i = St(n), ge(e, "href", s = Et(
        /*file*/
        r[0].url
      )), ge(e, "target", "_blank"), ge(e, "class", "button");
    },
    m(c, v) {
      We(c, e, v), Ne(e, i);
    },
    p(c, v) {
      v & /*file*/
      1 && s !== (s = Et(
        /*file*/
        c[0].url
      )) && ge(e, "href", s);
    },
    d(c) {
      c && Ge(e);
    }
  };
}
function zs(r) {
  let e, n = (
    /*t*/
    r[2]("files_linkeditor", "Save") + ""
  ), i, s, c, v;
  return {
    c() {
      e = Fe("a"), i = St(n), ge(e, "href", s = /*file*/
      r[0].currentUrl), ge(e, "class", "primary button");
    },
    m(h, y) {
      We(h, e, y), Ne(e, i), c || (v = dr(e, "click", ln(
        /*save*/
        r[4]
      )), c = !0);
    },
    p(h, y) {
      y & /*file*/
      1 && s !== (s = /*file*/
      h[0].currentUrl) && ge(e, "href", s);
    },
    d(h) {
      h && Ge(e), c = !1, v();
    }
  };
}
function Bh(r) {
  let e, n, i, s = (
    /*file*/
    r[0].name + ""
  ), c, v, h, y, l, a, g, p = (
    /*t*/
    r[2]("files_linkeditor", "Cancel") + ""
  ), E, O, _, P, D, I = !/*loading*/
  r[1] && Vs(r), x = !/*loading*/
  r[1] && qs(r), F = !/*loading*/
  r[1] && zs(r);
  return {
    c() {
      e = Fe("form"), n = Fe("div"), i = Fe("h3"), c = St(s), v = nt(), I && I.c(), h = nt(), y = Fe("div"), x && x.c(), l = nt(), a = Fe("div"), g = Fe("a"), E = St(p), _ = nt(), F && F.c(), ge(n, "class", "urledit"), ge(y, "class", "oc-dialog-buttonrow onebutton urlvisit"), ge(g, "href", O = /*file*/
      r[0].currentUrl), ge(g, "class", "cancel button"), ge(a, "class", "oc-dialog-buttonrow twobuttons"), ge(
        e,
        "action",
        /*OC*/
        r[3].generateUrl("/")
      ), ge(e, "method", "post");
    },
    m(R, V) {
      We(R, e, V), Ne(e, n), Ne(n, i), Ne(i, c), Ne(n, v), I && I.m(n, null), Ne(e, h), Ne(e, y), x && x.m(y, null), Ne(e, l), Ne(e, a), Ne(a, g), Ne(g, E), Ne(a, _), F && F.m(a, null), P || (D = [
        dr(g, "click", ln(
          /*click_handler*/
          r[8]
        )),
        dr(e, "submit", ln(
          /*save*/
          r[4]
        ))
      ], P = !0);
    },
    p(R, V) {
      V & /*file*/
      1 && s !== (s = /*file*/
      R[0].name + "") && Da(c, s), /*loading*/
      R[1] ? I && (I.d(1), I = null) : I ? I.p(R, V) : (I = Vs(R), I.c(), I.m(n, null)), /*loading*/
      R[1] ? x && (x.d(1), x = null) : x ? x.p(R, V) : (x = qs(R), x.c(), x.m(y, null)), V & /*file*/
      1 && O !== (O = /*file*/
      R[0].currentUrl) && ge(g, "href", O), /*loading*/
      R[1] ? F && (F.d(1), F = null) : F ? F.p(R, V) : (F = zs(R), F.c(), F.m(a, null));
    },
    d(R) {
      R && Ge(e), I && I.d(), x && x.d(), F && F.d(), P = !1, Mr(D);
    }
  };
}
function Uh(r) {
  let e, n;
  return e = new ac({
    props: {
      loading: (
        /*loading*/
        r[1]
      ),
      $$slots: { default: [Bh] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      ki(e.$$.fragment);
    },
    m(i, s) {
      Dn(e, i, s), n = !0;
    },
    p(i, [s]) {
      const c = {};
      s & /*loading*/
      2 && (c.loading = /*loading*/
      i[1]), s & /*$$scope, file, loading*/
      1027 && (c.$$scope = { dirty: s, ctx: i }), e.$set(c);
    },
    i(i) {
      n || (Mt(e.$$.fragment, i), n = !0);
    },
    o(i) {
      pr(e.$$.fragment, i), n = !1;
    },
    d(i) {
      jn(e, i);
    }
  };
}
function Dh(r, e, n) {
  let i, s;
  const c = window.t, v = window.OC;
  let h;
  ja(() => {
    h = Rr.subscribe((E) => {
      n(0, i = E), i && (i.isLoaded || i.isNew) && n(1, s = !1);
    });
  }), Ga(() => {
    h();
  });
  const y = () => {
    n(1, s = !0), i.isNew && i.onCreate ? i.onCreate({ ...i }) : xr.saveAndChangeViewMode({ ...i });
  };
  function l() {
    i.url = this.value, n(0, i);
  }
  function a() {
    i.sameWindow = this.checked, n(0, i);
  }
  function g() {
    i.skipConfirmation = this.checked, n(0, i);
  }
  const p = () => {
    ar.update(() => "none");
  };
  return n(0, i = ft.getFileConfig()), n(1, s = !0), [
    i,
    s,
    c,
    v,
    y,
    l,
    a,
    g,
    p
  ];
}
class jh extends Wn {
  constructor(e) {
    super(), Gn(this, e, Dh, Uh, gn, {});
  }
}
function Hs(r) {
  let e, n;
  return e = new gh({}), {
    c() {
      ki(e.$$.fragment);
    },
    m(i, s) {
      Dn(e, i, s), n = !0;
    },
    i(i) {
      n || (Mt(e.$$.fragment, i), n = !0);
    },
    o(i) {
      pr(e.$$.fragment, i), n = !1;
    },
    d(i) {
      jn(e, i);
    }
  };
}
function Xs(r) {
  let e, n;
  return e = new jh({}), {
    c() {
      ki(e.$$.fragment);
    },
    m(i, s) {
      Dn(e, i, s), n = !0;
    },
    i(i) {
      n || (Mt(e.$$.fragment, i), n = !0);
    },
    o(i) {
      pr(e.$$.fragment, i), n = !1;
    },
    d(i) {
      jn(e, i);
    }
  };
}
function Gh(r) {
  let e, n, i, s = (
    /*viewMode*/
    r[0] === "view" && Hs()
  ), c = (
    /*viewMode*/
    r[0] === "edit" && Xs()
  );
  return {
    c() {
      s && s.c(), e = nt(), c && c.c(), n = qp();
    },
    m(v, h) {
      s && s.m(v, h), We(v, e, h), c && c.m(v, h), We(v, n, h), i = !0;
    },
    p(v, [h]) {
      /*viewMode*/
      v[0] === "view" ? s ? h & /*viewMode*/
      1 && Mt(s, 1) : (s = Hs(), s.c(), Mt(s, 1), s.m(e.parentNode, e)) : s && (ks(), pr(s, 1, 1, () => {
        s = null;
      }), Bs()), /*viewMode*/
      v[0] === "edit" ? c ? h & /*viewMode*/
      1 && Mt(c, 1) : (c = Xs(), c.c(), Mt(c, 1), c.m(n.parentNode, n)) : c && (ks(), pr(c, 1, 1, () => {
        c = null;
      }), Bs());
    },
    i(v) {
      i || (Mt(s), Mt(c), i = !0);
    },
    o(v) {
      pr(s), pr(c), i = !1;
    },
    d(v) {
      v && (Ge(e), Ge(n)), s && s.d(v), c && c.d(v);
    }
  };
}
function Wh(r, e, n) {
  let i, s;
  return ja(() => {
    s = ar.subscribe((c) => {
      n(0, i = c);
    });
  }), Ga(() => {
    s();
  }), n(0, i = ""), [i];
}
class Vh extends Wn {
  constructor(e) {
    super(), Gn(this, e, Wh, Gh, gn, {});
  }
}
function qh(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var fc = { exports: {} }, He = fc.exports = {}, nr, ir;
function la() {
  throw new Error("setTimeout has not been defined");
}
function ca() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? nr = setTimeout : nr = la;
  } catch {
    nr = la;
  }
  try {
    typeof clearTimeout == "function" ? ir = clearTimeout : ir = ca;
  } catch {
    ir = ca;
  }
})();
function pc(r) {
  if (nr === setTimeout)
    return setTimeout(r, 0);
  if ((nr === la || !nr) && setTimeout)
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
function zh(r) {
  if (ir === clearTimeout)
    return clearTimeout(r);
  if ((ir === ca || !ir) && clearTimeout)
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
var hr = [], sn = !1, Pr, Ii = -1;
function Hh() {
  !sn || !Pr || (sn = !1, Pr.length ? hr = Pr.concat(hr) : Ii = -1, hr.length && hc());
}
function hc() {
  if (!sn) {
    var r = pc(Hh);
    sn = !0;
    for (var e = hr.length; e; ) {
      for (Pr = hr, hr = []; ++Ii < e; )
        Pr && Pr[Ii].run();
      Ii = -1, e = hr.length;
    }
    Pr = null, sn = !1, zh(r);
  }
}
He.nextTick = function(r) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var n = 1; n < arguments.length; n++)
      e[n - 1] = arguments[n];
  hr.push(new dc(r, e)), hr.length === 1 && !sn && pc(hc);
};
function dc(r, e) {
  this.fun = r, this.array = e;
}
dc.prototype.run = function() {
  this.fun.apply(null, this.array);
};
He.title = "browser";
He.browser = !0;
He.env = {};
He.argv = [];
He.version = "";
He.versions = {};
function vr() {
}
He.on = vr;
He.addListener = vr;
He.once = vr;
He.off = vr;
He.removeListener = vr;
He.removeAllListeners = vr;
He.emit = vr;
He.prependListener = vr;
He.prependOnceListener = vr;
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
var Xh = fc.exports;
const kt = /* @__PURE__ */ qh(Xh), Yh = typeof kt == "object" && kt.env && kt.env.NODE_DEBUG && /\bsemver\b/i.test(kt.env.NODE_DEBUG) ? (...r) => console.error("SEMVER", ...r) : () => {
};
var gc = Yh;
const Kh = "2.0.0", vc = 256, Zh = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, Jh = 16, Qh = vc - 6, ed = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var mc = {
  MAX_LENGTH: vc,
  MAX_SAFE_COMPONENT_LENGTH: Jh,
  MAX_SAFE_BUILD_LENGTH: Qh,
  MAX_SAFE_INTEGER: Zh,
  RELEASE_TYPES: ed,
  SEMVER_SPEC_VERSION: Kh,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
}, fa = { exports: {} };
(function(r, e) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: n,
    MAX_SAFE_BUILD_LENGTH: i,
    MAX_LENGTH: s
  } = mc, c = gc;
  e = r.exports = {};
  const v = e.re = [], h = e.safeRe = [], y = e.src = [], l = e.t = {};
  let a = 0;
  const g = "[a-zA-Z0-9-]", p = [
    ["\\s", 1],
    ["\\d", s],
    [g, i]
  ], E = (_) => {
    for (const [P, D] of p)
      _ = _.split(`${P}*`).join(`${P}{0,${D}}`).split(`${P}+`).join(`${P}{1,${D}}`);
    return _;
  }, O = (_, P, D) => {
    const I = E(P), x = a++;
    c(_, x, P), l[_] = x, y[x] = P, v[x] = new RegExp(P, D ? "g" : void 0), h[x] = new RegExp(I, D ? "g" : void 0);
  };
  O("NUMERICIDENTIFIER", "0|[1-9]\\d*"), O("NUMERICIDENTIFIERLOOSE", "\\d+"), O("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${g}*`), O("MAINVERSION", `(${y[l.NUMERICIDENTIFIER]})\\.(${y[l.NUMERICIDENTIFIER]})\\.(${y[l.NUMERICIDENTIFIER]})`), O("MAINVERSIONLOOSE", `(${y[l.NUMERICIDENTIFIERLOOSE]})\\.(${y[l.NUMERICIDENTIFIERLOOSE]})\\.(${y[l.NUMERICIDENTIFIERLOOSE]})`), O("PRERELEASEIDENTIFIER", `(?:${y[l.NUMERICIDENTIFIER]}|${y[l.NONNUMERICIDENTIFIER]})`), O("PRERELEASEIDENTIFIERLOOSE", `(?:${y[l.NUMERICIDENTIFIERLOOSE]}|${y[l.NONNUMERICIDENTIFIER]})`), O("PRERELEASE", `(?:-(${y[l.PRERELEASEIDENTIFIER]}(?:\\.${y[l.PRERELEASEIDENTIFIER]})*))`), O("PRERELEASELOOSE", `(?:-?(${y[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${y[l.PRERELEASEIDENTIFIERLOOSE]})*))`), O("BUILDIDENTIFIER", `${g}+`), O("BUILD", `(?:\\+(${y[l.BUILDIDENTIFIER]}(?:\\.${y[l.BUILDIDENTIFIER]})*))`), O("FULLPLAIN", `v?${y[l.MAINVERSION]}${y[l.PRERELEASE]}?${y[l.BUILD]}?`), O("FULL", `^${y[l.FULLPLAIN]}$`), O("LOOSEPLAIN", `[v=\\s]*${y[l.MAINVERSIONLOOSE]}${y[l.PRERELEASELOOSE]}?${y[l.BUILD]}?`), O("LOOSE", `^${y[l.LOOSEPLAIN]}$`), O("GTLT", "((?:<|>)?=?)"), O("XRANGEIDENTIFIERLOOSE", `${y[l.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), O("XRANGEIDENTIFIER", `${y[l.NUMERICIDENTIFIER]}|x|X|\\*`), O("XRANGEPLAIN", `[v=\\s]*(${y[l.XRANGEIDENTIFIER]})(?:\\.(${y[l.XRANGEIDENTIFIER]})(?:\\.(${y[l.XRANGEIDENTIFIER]})(?:${y[l.PRERELEASE]})?${y[l.BUILD]}?)?)?`), O("XRANGEPLAINLOOSE", `[v=\\s]*(${y[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${y[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${y[l.XRANGEIDENTIFIERLOOSE]})(?:${y[l.PRERELEASELOOSE]})?${y[l.BUILD]}?)?)?`), O("XRANGE", `^${y[l.GTLT]}\\s*${y[l.XRANGEPLAIN]}$`), O("XRANGELOOSE", `^${y[l.GTLT]}\\s*${y[l.XRANGEPLAINLOOSE]}$`), O("COERCE", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`), O("COERCERTL", y[l.COERCE], !0), O("LONETILDE", "(?:~>?)"), O("TILDETRIM", `(\\s*)${y[l.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", O("TILDE", `^${y[l.LONETILDE]}${y[l.XRANGEPLAIN]}$`), O("TILDELOOSE", `^${y[l.LONETILDE]}${y[l.XRANGEPLAINLOOSE]}$`), O("LONECARET", "(?:\\^)"), O("CARETTRIM", `(\\s*)${y[l.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", O("CARET", `^${y[l.LONECARET]}${y[l.XRANGEPLAIN]}$`), O("CARETLOOSE", `^${y[l.LONECARET]}${y[l.XRANGEPLAINLOOSE]}$`), O("COMPARATORLOOSE", `^${y[l.GTLT]}\\s*(${y[l.LOOSEPLAIN]})$|^$`), O("COMPARATOR", `^${y[l.GTLT]}\\s*(${y[l.FULLPLAIN]})$|^$`), O("COMPARATORTRIM", `(\\s*)${y[l.GTLT]}\\s*(${y[l.LOOSEPLAIN]}|${y[l.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", O("HYPHENRANGE", `^\\s*(${y[l.XRANGEPLAIN]})\\s+-\\s+(${y[l.XRANGEPLAIN]})\\s*$`), O("HYPHENRANGELOOSE", `^\\s*(${y[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${y[l.XRANGEPLAINLOOSE]})\\s*$`), O("STAR", "(<|>)?=?\\s*\\*"), O("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), O("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(fa, fa.exports);
var td = fa.exports;
const rd = Object.freeze({ loose: !0 }), nd = Object.freeze({}), id = (r) => r ? typeof r != "object" ? rd : r : nd;
var od = id;
const Ys = /^[0-9]+$/, yc = (r, e) => {
  const n = Ys.test(r), i = Ys.test(e);
  return n && i && (r = +r, e = +e), r === e ? 0 : n && !i ? -1 : i && !n ? 1 : r < e ? -1 : 1;
}, ad = (r, e) => yc(e, r);
var sd = {
  compareIdentifiers: yc,
  rcompareIdentifiers: ad
};
const li = gc, { MAX_LENGTH: Ks, MAX_SAFE_INTEGER: ci } = mc, { safeRe: Zs, t: Js } = td, ud = od, { compareIdentifiers: Yr } = sd;
let ld = class rr {
  constructor(e, n) {
    if (n = ud(n), e instanceof rr) {
      if (e.loose === !!n.loose && e.includePrerelease === !!n.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
    if (e.length > Ks)
      throw new TypeError(
        `version is longer than ${Ks} characters`
      );
    li("SemVer", e, n), this.options = n, this.loose = !!n.loose, this.includePrerelease = !!n.includePrerelease;
    const i = e.trim().match(n.loose ? Zs[Js.LOOSE] : Zs[Js.FULL]);
    if (!i)
      throw new TypeError(`Invalid Version: ${e}`);
    if (this.raw = e, this.major = +i[1], this.minor = +i[2], this.patch = +i[3], this.major > ci || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > ci || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > ci || this.patch < 0)
      throw new TypeError("Invalid patch version");
    i[4] ? this.prerelease = i[4].split(".").map((s) => {
      if (/^[0-9]+$/.test(s)) {
        const c = +s;
        if (c >= 0 && c < ci)
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
    if (li("SemVer.compare", this.version, this.options, e), !(e instanceof rr)) {
      if (typeof e == "string" && e === this.version)
        return 0;
      e = new rr(e, this.options);
    }
    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
  }
  compareMain(e) {
    return e instanceof rr || (e = new rr(e, this.options)), Yr(this.major, e.major) || Yr(this.minor, e.minor) || Yr(this.patch, e.patch);
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
      if (li("prerelease compare", n, i, s), i === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === s)
        continue;
      return Yr(i, s);
    } while (++n);
  }
  compareBuild(e) {
    e instanceof rr || (e = new rr(e, this.options));
    let n = 0;
    do {
      const i = this.build[n], s = e.build[n];
      if (li("prerelease compare", n, i, s), i === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === s)
        continue;
      return Yr(i, s);
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
          i === !1 && (c = [n]), Yr(this.prerelease[0], n) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = c) : this.prerelease = c;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${e}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var wc = ld;
const Qs = wc, cd = (r, e, n = !1) => {
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
var fd = cd;
const pd = fd, hd = (r, e) => {
  const n = pd(r, e);
  return n ? n.version : null;
};
var dd = hd;
const gd = /* @__PURE__ */ Wa(dd), vd = wc, md = (r, e) => new vd(r, e).major;
var yd = md;
const eu = /* @__PURE__ */ Wa(yd);
class wd {
  constructor(e) {
    Sn(this, "bus");
    typeof e.getVersion != "function" || !gd(e.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : eu(e.getVersion()) !== eu(this.getVersion()) && console.warn("Proxying an event bus of version " + e.getVersion() + " with " + this.getVersion()), this.bus = e;
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
class bd {
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
let On = null;
function Ed() {
  return On !== null ? On : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error("Window not available, EventBus can not be established!")
  }) : (typeof window.OC < "u" && window.OC._eventBus && typeof window._nc_event_bus > "u" && (console.warn("found old event bus instance at OC._eventBus. Update your version!"), window._nc_event_bus = window.OC._eventBus), typeof (window == null ? void 0 : window._nc_event_bus) < "u" ? On = new wd(window._nc_event_bus) : On = window._nc_event_bus = new bd(), On);
}
function Td(r, e) {
  Ed().subscribe(r, e);
}
let Ai;
const bc = [];
function Sd() {
  if (Ai === void 0) {
    const r = document == null ? void 0 : document.getElementsByTagName("head")[0];
    Ai = r ? r.getAttribute("data-requesttoken") : null;
  }
  return Ai;
}
function Od(r) {
  bc.push(r);
}
Td("csrf-token-update", (r) => {
  Ai = r.token, bc.forEach((e) => {
    try {
      e(r.token);
    } catch (n) {
      console.error("error updating CSRF token observer", n);
    }
  });
});
const tu = (r, e) => r ? r.getAttribute(e) : null;
let Kr;
function za() {
  if (Kr !== void 0)
    return Kr;
  const r = document == null ? void 0 : document.getElementsByTagName("head")[0];
  if (!r)
    return null;
  const e = tu(r, "data-user");
  return e === null ? (Kr = null, Kr) : (Kr = {
    uid: e,
    displayName: tu(r, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Kr);
}
const $d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getCurrentUser: za,
  getRequestToken: Sd,
  onRequestTokenUpdate: Od
}, Symbol.toStringTag, { value: "Module" }));
var pa = {}, $n = function(r) {
  return r && r.Math === Math && r;
}, et = (
  // eslint-disable-next-line es/no-global-this -- safe
  $n(typeof globalThis == "object" && globalThis) || $n(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  $n(typeof self == "object" && self) || $n(typeof si == "object" && si) || $n(typeof si == "object" && si) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), Vn = {}, Ve = function(r) {
  try {
    return !!r();
  } catch {
    return !0;
  }
}, Id = Ve, mt = !Id(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), Ad = Ve, Ui = !Ad(function() {
  var r = (function() {
  }).bind();
  return typeof r != "function" || r.hasOwnProperty("prototype");
}), _d = Ui, fi = Function.prototype.call, Nt = _d ? fi.bind(fi) : function() {
  return fi.apply(fi, arguments);
}, Di = {}, Ec = {}.propertyIsEnumerable, Tc = Object.getOwnPropertyDescriptor, xd = Tc && !Ec.call({ 1: 2 }, 1);
Di.f = xd ? function(e) {
  var n = Tc(this, e);
  return !!n && n.enumerable;
} : Ec;
var qn = function(r, e) {
  return {
    enumerable: !(r & 1),
    configurable: !(r & 2),
    writable: !(r & 4),
    value: e
  };
}, Sc = Ui, Oc = Function.prototype, ha = Oc.call, Nd = Sc && Oc.bind.bind(ha, ha), Be = Sc ? Nd : function(r) {
  return function() {
    return ha.apply(r, arguments);
  };
}, $c = Be, Pd = $c({}.toString), Rd = $c("".slice), Er = function(r) {
  return Rd(Pd(r), 8, -1);
}, Cd = Be, Ld = Ve, Fd = Er, wo = Object, Md = Cd("".split), ji = Ld(function() {
  return !wo("z").propertyIsEnumerable(0);
}) ? function(r) {
  return Fd(r) === "String" ? Md(r, "") : wo(r);
} : wo, zn = function(r) {
  return r == null;
}, kd = zn, Bd = TypeError, vn = function(r) {
  if (kd(r))
    throw new Bd("Can't call method on " + r);
  return r;
}, Ud = ji, Dd = vn, kr = function(r) {
  return Ud(Dd(r));
}, bo = typeof document == "object" && document.all, Xe = typeof bo > "u" && bo !== void 0 ? function(r) {
  return typeof r == "function" || r === bo;
} : function(r) {
  return typeof r == "function";
}, jd = Xe, sr = function(r) {
  return typeof r == "object" ? r !== null : jd(r);
}, Eo = et, Gd = Xe, Wd = function(r) {
  return Gd(r) ? r : void 0;
}, Br = function(r, e) {
  return arguments.length < 2 ? Wd(Eo[r]) : Eo[r] && Eo[r][e];
}, Vd = Be, Gi = Vd({}.isPrototypeOf), qd = typeof navigator < "u" && String(navigator.userAgent) || "", Ic = et, To = qd, ru = Ic.process, nu = Ic.Deno, iu = ru && ru.versions || nu && nu.version, ou = iu && iu.v8, Vt, Ri;
ou && (Vt = ou.split("."), Ri = Vt[0] > 0 && Vt[0] < 4 ? 1 : +(Vt[0] + Vt[1]));
!Ri && To && (Vt = To.match(/Edge\/(\d+)/), (!Vt || Vt[1] >= 74) && (Vt = To.match(/Chrome\/(\d+)/), Vt && (Ri = +Vt[1])));
var Wi = Ri, au = Wi, zd = Ve, Hd = et, Xd = Hd.String, mn = !!Object.getOwnPropertySymbols && !zd(function() {
  var r = Symbol("symbol detection");
  return !Xd(r) || !(Object(r) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && au && au < 41;
}), Yd = mn, Ac = Yd && !Symbol.sham && typeof Symbol.iterator == "symbol", Kd = Br, Zd = Xe, Jd = Gi, Qd = Ac, eg = Object, Hn = Qd ? function(r) {
  return typeof r == "symbol";
} : function(r) {
  var e = Kd("Symbol");
  return Zd(e) && Jd(e.prototype, eg(r));
}, tg = String, Ha = function(r) {
  try {
    return tg(r);
  } catch {
    return "Object";
  }
}, rg = Xe, ng = Ha, ig = TypeError, Vi = function(r) {
  if (rg(r))
    return r;
  throw new ig(ng(r) + " is not a function");
}, og = Vi, ag = zn, Xa = function(r, e) {
  var n = r[e];
  return ag(n) ? void 0 : og(n);
}, So = Nt, Oo = Xe, $o = sr, sg = TypeError, _c = function(r, e) {
  var n, i;
  if (e === "string" && Oo(n = r.toString) && !$o(i = So(n, r)) || Oo(n = r.valueOf) && !$o(i = So(n, r)) || e !== "string" && Oo(n = r.toString) && !$o(i = So(n, r)))
    return i;
  throw new sg("Can't convert object to primitive value");
}, xc = { exports: {} }, ug = !1, su = et, lg = Object.defineProperty, Ya = function(r, e) {
  try {
    lg(su, r, { value: e, configurable: !0, writable: !0 });
  } catch {
    su[r] = e;
  }
  return e;
}, cg = et, fg = Ya, uu = "__core-js_shared__", lu = xc.exports = cg[uu] || fg(uu, {});
(lu.versions || (lu.versions = [])).push({
  version: "3.36.0",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var Ka = xc.exports, cu = Ka, yn = function(r, e) {
  return cu[r] || (cu[r] = e || {});
}, pg = vn, hg = Object, Tr = function(r) {
  return hg(pg(r));
}, dg = Be, gg = Tr, vg = dg({}.hasOwnProperty), pt = Object.hasOwn || function(e, n) {
  return vg(gg(e), n);
}, mg = Be, yg = 0, wg = Math.random(), bg = mg(1 .toString), Za = function(r) {
  return "Symbol(" + (r === void 0 ? "" : r) + ")_" + bg(++yg + wg, 36);
}, Eg = et, Tg = yn, fu = pt, Sg = Za, Og = mn, $g = Ac, nn = Eg.Symbol, Io = Tg("wks"), Ig = $g ? nn.for || nn : nn && nn.withoutSetter || Sg, ot = function(r) {
  return fu(Io, r) || (Io[r] = Og && fu(nn, r) ? nn[r] : Ig("Symbol." + r)), Io[r];
}, Ag = Nt, pu = sr, hu = Hn, _g = Xa, xg = _c, Ng = ot, Pg = TypeError, Rg = Ng("toPrimitive"), Nc = function(r, e) {
  if (!pu(r) || hu(r))
    return r;
  var n = _g(r, Rg), i;
  if (n) {
    if (e === void 0 && (e = "default"), i = Ag(n, r, e), !pu(i) || hu(i))
      return i;
    throw new Pg("Can't convert object to primitive value");
  }
  return e === void 0 && (e = "number"), xg(r, e);
}, Cg = Nc, Lg = Hn, Ja = function(r) {
  var e = Cg(r, "string");
  return Lg(e) ? e : e + "";
}, Fg = et, du = sr, da = Fg.document, Mg = du(da) && du(da.createElement), Qa = function(r) {
  return Mg ? da.createElement(r) : {};
}, kg = mt, Bg = Ve, Ug = Qa, Pc = !kg && !Bg(function() {
  return Object.defineProperty(Ug("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), Dg = mt, jg = Nt, Gg = Di, Wg = qn, Vg = kr, qg = Ja, zg = pt, Hg = Pc, gu = Object.getOwnPropertyDescriptor;
Vn.f = Dg ? gu : function(e, n) {
  if (e = Vg(e), n = qg(n), Hg)
    try {
      return gu(e, n);
    } catch {
    }
  if (zg(e, n))
    return Wg(!jg(Gg.f, e, n), e[n]);
};
var Ot = {}, Xg = mt, Yg = Ve, Rc = Xg && Yg(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), Kg = sr, Zg = String, Jg = TypeError, Dt = function(r) {
  if (Kg(r))
    return r;
  throw new Jg(Zg(r) + " is not an object");
}, Qg = mt, ev = Pc, tv = Rc, pi = Dt, vu = Ja, rv = TypeError, Ao = Object.defineProperty, nv = Object.getOwnPropertyDescriptor, _o = "enumerable", xo = "configurable", No = "writable";
Ot.f = Qg ? tv ? function(e, n, i) {
  if (pi(e), n = vu(n), pi(i), typeof e == "function" && n === "prototype" && "value" in i && No in i && !i[No]) {
    var s = nv(e, n);
    s && s[No] && (e[n] = i.value, i = {
      configurable: xo in i ? i[xo] : s[xo],
      enumerable: _o in i ? i[_o] : s[_o],
      writable: !1
    });
  }
  return Ao(e, n, i);
} : Ao : function(e, n, i) {
  if (pi(e), n = vu(n), pi(i), ev)
    try {
      return Ao(e, n, i);
    } catch {
    }
  if ("get" in i || "set" in i)
    throw new rv("Accessors not supported");
  return "value" in i && (e[n] = i.value), e;
};
var iv = mt, ov = Ot, av = qn, Xn = iv ? function(r, e, n) {
  return ov.f(r, e, av(1, n));
} : function(r, e, n) {
  return r[e] = n, r;
}, Cc = { exports: {} }, ga = mt, sv = pt, Lc = Function.prototype, uv = ga && Object.getOwnPropertyDescriptor, es = sv(Lc, "name"), lv = es && (function() {
}).name === "something", cv = es && (!ga || ga && uv(Lc, "name").configurable), Fc = {
  EXISTS: es,
  PROPER: lv,
  CONFIGURABLE: cv
}, fv = Be, pv = Xe, va = Ka, hv = fv(Function.toString);
pv(va.inspectSource) || (va.inspectSource = function(r) {
  return hv(r);
});
var Mc = va.inspectSource, dv = et, gv = Xe, mu = dv.WeakMap, vv = gv(mu) && /native code/.test(String(mu)), mv = yn, yv = Za, yu = mv("keys"), qi = function(r) {
  return yu[r] || (yu[r] = yv(r));
}, zi = {}, wv = vv, kc = et, bv = sr, Ev = Xn, Po = pt, Ro = Ka, Tv = qi, Sv = zi, wu = "Object already initialized", ma = kc.TypeError, Ov = kc.WeakMap, Ci, kn, Li, $v = function(r) {
  return Li(r) ? kn(r) : Ci(r, {});
}, Iv = function(r) {
  return function(e) {
    var n;
    if (!bv(e) || (n = kn(e)).type !== r)
      throw new ma("Incompatible receiver, " + r + " required");
    return n;
  };
};
if (wv || Ro.state) {
  var er = Ro.state || (Ro.state = new Ov());
  er.get = er.get, er.has = er.has, er.set = er.set, Ci = function(r, e) {
    if (er.has(r))
      throw new ma(wu);
    return e.facade = r, er.set(r, e), e;
  }, kn = function(r) {
    return er.get(r) || {};
  }, Li = function(r) {
    return er.has(r);
  };
} else {
  var Zr = Tv("state");
  Sv[Zr] = !0, Ci = function(r, e) {
    if (Po(r, Zr))
      throw new ma(wu);
    return e.facade = r, Ev(r, Zr, e), e;
  }, kn = function(r) {
    return Po(r, Zr) ? r[Zr] : {};
  }, Li = function(r) {
    return Po(r, Zr);
  };
}
var Yn = {
  set: Ci,
  get: kn,
  has: Li,
  enforce: $v,
  getterFor: Iv
}, ts = Be, Av = Ve, _v = Xe, hi = pt, ya = mt, xv = Fc.CONFIGURABLE, Nv = Mc, Bc = Yn, Pv = Bc.enforce, Rv = Bc.get, bu = String, _i = Object.defineProperty, Cv = ts("".slice), Lv = ts("".replace), Fv = ts([].join), Mv = ya && !Av(function() {
  return _i(function() {
  }, "length", { value: 8 }).length !== 8;
}), kv = String(String).split("String"), Bv = Cc.exports = function(r, e, n) {
  Cv(bu(e), 0, 7) === "Symbol(" && (e = "[" + Lv(bu(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), n && n.getter && (e = "get " + e), n && n.setter && (e = "set " + e), (!hi(r, "name") || xv && r.name !== e) && (ya ? _i(r, "name", { value: e, configurable: !0 }) : r.name = e), Mv && n && hi(n, "arity") && r.length !== n.arity && _i(r, "length", { value: n.arity });
  try {
    n && hi(n, "constructor") && n.constructor ? ya && _i(r, "prototype", { writable: !1 }) : r.prototype && (r.prototype = void 0);
  } catch {
  }
  var i = Pv(r);
  return hi(i, "source") || (i.source = Fv(kv, typeof e == "string" ? e : "")), r;
};
Function.prototype.toString = Bv(function() {
  return _v(this) && Rv(this).source || Nv(this);
}, "toString");
var Uc = Cc.exports, Uv = Xe, Dv = Ot, jv = Uc, Gv = Ya, Sr = function(r, e, n, i) {
  i || (i = {});
  var s = i.enumerable, c = i.name !== void 0 ? i.name : e;
  if (Uv(n) && jv(n, c, i), i.global)
    s ? r[e] = n : Gv(e, n);
  else {
    try {
      i.unsafe ? r[e] && (s = !0) : delete r[e];
    } catch {
    }
    s ? r[e] = n : Dv.f(r, e, {
      value: n,
      enumerable: !1,
      configurable: !i.nonConfigurable,
      writable: !i.nonWritable
    });
  }
  return r;
}, Kn = {}, Wv = Math.ceil, Vv = Math.floor, qv = Math.trunc || function(e) {
  var n = +e;
  return (n > 0 ? Vv : Wv)(n);
}, zv = qv, Hi = function(r) {
  var e = +r;
  return e !== e || e === 0 ? 0 : zv(e);
}, Hv = Hi, Xv = Math.max, Yv = Math.min, Kv = function(r, e) {
  var n = Hv(r);
  return n < 0 ? Xv(n + e, 0) : Yv(n, e);
}, Zv = Hi, Jv = Math.min, rs = function(r) {
  var e = Zv(r);
  return e > 0 ? Jv(e, 9007199254740991) : 0;
}, Qv = rs, Xi = function(r) {
  return Qv(r.length);
}, em = kr, tm = Kv, rm = Xi, Eu = function(r) {
  return function(e, n, i) {
    var s = em(e), c = rm(s);
    if (c === 0)
      return !r && -1;
    var v = tm(i, c), h;
    if (r && n !== n) {
      for (; c > v; )
        if (h = s[v++], h !== h)
          return !0;
    } else
      for (; c > v; v++)
        if ((r || v in s) && s[v] === n)
          return r || v || 0;
    return !r && -1;
  };
}, nm = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: Eu(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: Eu(!1)
}, im = Be, Co = pt, om = kr, am = nm.indexOf, sm = zi, Tu = im([].push), Dc = function(r, e) {
  var n = om(r), i = 0, s = [], c;
  for (c in n)
    !Co(sm, c) && Co(n, c) && Tu(s, c);
  for (; e.length > i; )
    Co(n, c = e[i++]) && (~am(s, c) || Tu(s, c));
  return s;
}, ns = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], um = Dc, lm = ns, cm = lm.concat("length", "prototype");
Kn.f = Object.getOwnPropertyNames || function(e) {
  return um(e, cm);
};
var Zn = {};
Zn.f = Object.getOwnPropertySymbols;
var fm = Br, pm = Be, hm = Kn, dm = Zn, gm = Dt, vm = pm([].concat), mm = fm("Reflect", "ownKeys") || function(e) {
  var n = hm.f(gm(e)), i = dm.f;
  return i ? vm(n, i(e)) : n;
}, Su = pt, ym = mm, wm = Vn, bm = Ot, jc = function(r, e, n) {
  for (var i = ym(e), s = bm.f, c = wm.f, v = 0; v < i.length; v++) {
    var h = i[v];
    !Su(r, h) && !(n && Su(n, h)) && s(r, h, c(e, h));
  }
}, Em = Ve, Tm = Xe, Sm = /#|\.prototype\./, Jn = function(r, e) {
  var n = $m[Om(r)];
  return n === Am ? !0 : n === Im ? !1 : Tm(e) ? Em(e) : !!e;
}, Om = Jn.normalize = function(r) {
  return String(r).replace(Sm, ".").toLowerCase();
}, $m = Jn.data = {}, Im = Jn.NATIVE = "N", Am = Jn.POLYFILL = "P", Gc = Jn, di = et, _m = Vn.f, xm = Xn, Nm = Sr, Pm = Ya, Rm = jc, Cm = Gc, yt = function(r, e) {
  var n = r.target, i = r.global, s = r.stat, c, v, h, y, l, a;
  if (i ? v = di : s ? v = di[n] || Pm(n, {}) : v = di[n] && di[n].prototype, v)
    for (h in e) {
      if (l = e[h], r.dontCallGetSet ? (a = _m(v, h), y = a && a.value) : y = v[h], c = Cm(i ? h : n + (s ? "." : "#") + h, r.forced), !c && y !== void 0) {
        if (typeof l == typeof y)
          continue;
        Rm(l, y);
      }
      (r.sham || y && y.sham) && xm(l, "sham", !0), Nm(v, h, l, r);
    }
}, Lm = yt, Fm = mt, Ou = Ot.f;
Lm({ target: "Object", stat: !0, forced: Object.defineProperty !== Ou, sham: !Fm }, {
  defineProperty: Ou
});
var Qn = {}, Mm = et, Wc = Mm, is = {}, km = ot;
is.f = km;
var $u = Wc, Bm = pt, Um = is, Dm = Ot.f, os = function(r) {
  var e = $u.Symbol || ($u.Symbol = {});
  Bm(e, r) || Dm(e, r, {
    value: Um.f(r)
  });
}, jm = os;
jm("iterator");
var as = {}, Gm = Dc, Wm = ns, ss = Object.keys || function(e) {
  return Gm(e, Wm);
}, Vm = mt, qm = Rc, zm = Ot, Hm = Dt, Xm = kr, Ym = ss;
as.f = Vm && !qm ? Object.defineProperties : function(e, n) {
  Hm(e);
  for (var i = Xm(n), s = Ym(n), c = s.length, v = 0, h; c > v; )
    zm.f(e, h = s[v++], i[h]);
  return e;
};
var Km = Br, Zm = Km("document", "documentElement"), Jm = Dt, Qm = as, Iu = ns, e0 = zi, t0 = Zm, r0 = Qa, n0 = qi, Au = ">", _u = "<", wa = "prototype", ba = "script", Vc = n0("IE_PROTO"), Lo = function() {
}, qc = function(r) {
  return _u + ba + Au + r + _u + "/" + ba + Au;
}, xu = function(r) {
  r.write(qc("")), r.close();
  var e = r.parentWindow.Object;
  return r = null, e;
}, i0 = function() {
  var r = r0("iframe"), e = "java" + ba + ":", n;
  return r.style.display = "none", t0.appendChild(r), r.src = String(e), n = r.contentWindow.document, n.open(), n.write(qc("document.F=Object")), n.close(), n.F;
}, gi, xi = function() {
  try {
    gi = new ActiveXObject("htmlfile");
  } catch {
  }
  xi = typeof document < "u" ? document.domain && gi ? xu(gi) : i0() : xu(gi);
  for (var r = Iu.length; r--; )
    delete xi[wa][Iu[r]];
  return xi();
};
e0[Vc] = !0;
var Yi = Object.create || function(e, n) {
  var i;
  return e !== null ? (Lo[wa] = Jm(e), i = new Lo(), Lo[wa] = null, i[Vc] = e) : i = xi(), n === void 0 ? i : Qm.f(i, n);
}, o0 = ot, a0 = Yi, s0 = Ot.f, Ea = o0("unscopables"), Ta = Array.prototype;
Ta[Ea] === void 0 && s0(Ta, Ea, {
  configurable: !0,
  value: a0(null)
});
var u0 = function(r) {
  Ta[Ea][r] = !0;
}, us = {}, l0 = Ve, c0 = !l0(function() {
  function r() {
  }
  return r.prototype.constructor = null, Object.getPrototypeOf(new r()) !== r.prototype;
}), f0 = pt, p0 = Xe, h0 = Tr, d0 = qi, g0 = c0, Nu = d0("IE_PROTO"), Sa = Object, v0 = Sa.prototype, zc = g0 ? Sa.getPrototypeOf : function(r) {
  var e = h0(r);
  if (f0(e, Nu))
    return e[Nu];
  var n = e.constructor;
  return p0(n) && e instanceof n ? n.prototype : e instanceof Sa ? v0 : null;
}, m0 = Ve, y0 = Xe, w0 = sr, Pu = zc, b0 = Sr, E0 = ot, Oa = E0("iterator"), Hc = !1, Fr, Fo, Mo;
[].keys && (Mo = [].keys(), "next" in Mo ? (Fo = Pu(Pu(Mo)), Fo !== Object.prototype && (Fr = Fo)) : Hc = !0);
var T0 = !w0(Fr) || m0(function() {
  var r = {};
  return Fr[Oa].call(r) !== r;
});
T0 && (Fr = {});
y0(Fr[Oa]) || b0(Fr, Oa, function() {
  return this;
});
var Xc = {
  IteratorPrototype: Fr,
  BUGGY_SAFARI_ITERATORS: Hc
}, S0 = Ot.f, O0 = pt, $0 = ot, Ru = $0("toStringTag"), Ki = function(r, e, n) {
  r && !n && (r = r.prototype), r && !O0(r, Ru) && S0(r, Ru, { configurable: !0, value: e });
}, I0 = Xc.IteratorPrototype, A0 = Yi, _0 = qn, x0 = Ki, N0 = us, P0 = function() {
  return this;
}, R0 = function(r, e, n, i) {
  var s = e + " Iterator";
  return r.prototype = A0(I0, { next: _0(+!i, n) }), x0(r, s, !1), N0[s] = P0, r;
}, C0 = Be, L0 = Vi, F0 = function(r, e, n) {
  try {
    return C0(L0(Object.getOwnPropertyDescriptor(r, e)[n]));
  } catch {
  }
}, M0 = sr, k0 = function(r) {
  return M0(r) || r === null;
}, B0 = k0, U0 = String, D0 = TypeError, j0 = function(r) {
  if (B0(r))
    return r;
  throw new D0("Can't set " + U0(r) + " as a prototype");
}, G0 = F0, W0 = Dt, V0 = j0, Yc = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var r = !1, e = {}, n;
  try {
    n = G0(Object.prototype, "__proto__", "set"), n(e, []), r = e instanceof Array;
  } catch {
  }
  return function(s, c) {
    return W0(s), V0(c), r ? n(s, c) : s.__proto__ = c, s;
  };
}() : void 0), q0 = yt, z0 = Nt, Kc = Fc, H0 = Xe, X0 = R0, Cu = zc, Lu = Yc, Y0 = Ki, K0 = Xn, ko = Sr, Z0 = ot, J0 = us, Zc = Xc, Q0 = Kc.PROPER, ey = Kc.CONFIGURABLE, Fu = Zc.IteratorPrototype, vi = Zc.BUGGY_SAFARI_ITERATORS, In = Z0("iterator"), Mu = "keys", An = "values", ku = "entries", ty = function() {
  return this;
}, Jc = function(r, e, n, i, s, c, v) {
  X0(n, e, i);
  var h = function(D) {
    if (D === s && p)
      return p;
    if (!vi && D && D in a)
      return a[D];
    switch (D) {
      case Mu:
        return function() {
          return new n(this, D);
        };
      case An:
        return function() {
          return new n(this, D);
        };
      case ku:
        return function() {
          return new n(this, D);
        };
    }
    return function() {
      return new n(this);
    };
  }, y = e + " Iterator", l = !1, a = r.prototype, g = a[In] || a["@@iterator"] || s && a[s], p = !vi && g || h(s), E = e === "Array" && a.entries || g, O, _, P;
  if (E && (O = Cu(E.call(new r())), O !== Object.prototype && O.next && (Cu(O) !== Fu && (Lu ? Lu(O, Fu) : H0(O[In]) || ko(O, In, ty)), Y0(O, y, !0))), Q0 && s === An && g && g.name !== An && (ey ? K0(a, "name", An) : (l = !0, p = function() {
    return z0(g, this);
  })), s)
    if (_ = {
      values: h(An),
      keys: c ? p : h(Mu),
      entries: h(ku)
    }, v)
      for (P in _)
        (vi || l || !(P in a)) && ko(a, P, _[P]);
    else
      q0({ target: e, proto: !0, forced: vi || l }, _);
  return a[In] !== p && ko(a, In, p, { name: s }), J0[e] = p, _;
}, Qc = function(r, e) {
  return { value: r, done: e };
}, ry = kr, ls = u0, Bu = us, ef = Yn, ny = Ot.f, iy = Jc, mi = Qc, oy = mt, tf = "Array Iterator", ay = ef.set, sy = ef.getterFor(tf), uy = iy(Array, "Array", function(r, e) {
  ay(this, {
    type: tf,
    target: ry(r),
    // target
    index: 0,
    // next index
    kind: e
    // kind
  });
}, function() {
  var r = sy(this), e = r.target, n = r.index++;
  if (!e || n >= e.length)
    return r.target = void 0, mi(void 0, !0);
  switch (r.kind) {
    case "keys":
      return mi(n, !1);
    case "values":
      return mi(e[n], !1);
  }
  return mi([n, e[n]], !1);
}, "values"), Uu = Bu.Arguments = Bu.Array;
ls("keys");
ls("values");
ls("entries");
if (oy && Uu.name !== "values")
  try {
    ny(Uu, "name", { value: "values" });
  } catch {
  }
var ly = ot, cy = ly("toStringTag"), rf = {};
rf[cy] = "z";
var cs = String(rf) === "[object z]", fy = cs, py = Xe, Ni = Er, hy = ot, dy = hy("toStringTag"), gy = Object, vy = Ni(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments", my = function(r, e) {
  try {
    return r[e];
  } catch {
  }
}, fs = fy ? Ni : function(r) {
  var e, n, i;
  return r === void 0 ? "Undefined" : r === null ? "Null" : typeof (n = my(e = gy(r), dy)) == "string" ? n : vy ? Ni(e) : (i = Ni(e)) === "Object" && py(e.callee) ? "Arguments" : i;
}, yy = fs, wy = String, ur = function(r) {
  if (yy(r) === "Symbol")
    throw new TypeError("Cannot convert a Symbol value to a string");
  return wy(r);
}, ps = Be, by = Hi, Ey = ur, Ty = vn, Sy = ps("".charAt), Du = ps("".charCodeAt), Oy = ps("".slice), ju = function(r) {
  return function(e, n) {
    var i = Ey(Ty(e)), s = by(n), c = i.length, v, h;
    return s < 0 || s >= c ? r ? "" : void 0 : (v = Du(i, s), v < 55296 || v > 56319 || s + 1 === c || (h = Du(i, s + 1)) < 56320 || h > 57343 ? r ? Sy(i, s) : v : r ? Oy(i, s, s + 2) : (v - 55296 << 10) + (h - 56320) + 65536);
  };
}, nf = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: ju(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: ju(!0)
}, $y = nf.charAt, Iy = ur, of = Yn, Ay = Jc, Gu = Qc, af = "String Iterator", _y = of.set, xy = of.getterFor(af);
Ay(String, "String", function(r) {
  _y(this, {
    type: af,
    string: Iy(r),
    index: 0
  });
}, function() {
  var e = xy(this), n = e.string, i = e.index, s;
  return i >= n.length ? Gu(void 0, !0) : (s = $y(n, i), e.index += s.length, Gu(s, !1));
});
var Ny = {
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
}, Py = Qa, Bo = Py("span").classList, Wu = Bo && Bo.constructor && Bo.constructor.prototype, Ry = Wu === Object.prototype ? void 0 : Wu, Vu = et, sf = Ny, Cy = Ry, Rn = uy, qu = Xn, Ly = Ki, Fy = ot, Uo = Fy("iterator"), Do = Rn.values, uf = function(r, e) {
  if (r) {
    if (r[Uo] !== Do)
      try {
        qu(r, Uo, Do);
      } catch {
        r[Uo] = Do;
      }
    if (Ly(r, e, !0), sf[e]) {
      for (var n in Rn)
        if (r[n] !== Rn[n])
          try {
            qu(r, n, Rn[n]);
          } catch {
            r[n] = Rn[n];
          }
    }
  }
};
for (var jo in sf)
  uf(Vu[jo] && Vu[jo].prototype, jo);
uf(Cy, "DOMTokenList");
var zu = mt, My = Be, ky = Nt, By = Ve, Go = ss, Uy = Zn, Dy = Di, jy = Tr, Gy = ji, Jr = Object.assign, Hu = Object.defineProperty, Wy = My([].concat), Vy = !Jr || By(function() {
  if (zu && Jr({ b: 1 }, Jr(Hu({}, "a", {
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
  }), Jr({}, r)[n] !== 7 || Go(Jr({}, e)).join("") !== i;
}) ? function(e, n) {
  for (var i = jy(e), s = arguments.length, c = 1, v = Uy.f, h = Dy.f; s > c; )
    for (var y = Gy(arguments[c++]), l = v ? Wy(Go(y), v(y)) : Go(y), a = l.length, g = 0, p; a > g; )
      p = l[g++], (!zu || ky(h, y, p)) && (i[p] = y[p]);
  return i;
} : Jr, qy = yt, Xu = Vy;
qy({ target: "Object", stat: !0, arity: 2, forced: Object.assign !== Xu }, {
  assign: Xu
});
var zy = Nt, Hy = Br, Xy = ot, Yy = Sr, lf = function() {
  var r = Hy("Symbol"), e = r && r.prototype, n = e && e.valueOf, i = Xy("toPrimitive");
  e && !e[i] && Yy(e, i, function(s) {
    return zy(n, this);
  }, { arity: 1 });
}, Ky = os, Zy = lf;
Ky("toPrimitive");
Zy();
var Jy = Dt, Qy = _c, e1 = TypeError, t1 = function(r) {
  if (Jy(this), r === "string" || r === "default")
    r = "string";
  else if (r !== "number")
    throw new e1("Incorrect hint");
  return Qy(this, r);
}, r1 = pt, n1 = Sr, i1 = t1, o1 = ot, Yu = o1("toPrimitive"), Ku = Date.prototype;
r1(Ku, Yu) || n1(Ku, Yu, i1);
var cf = {}, a1 = Be, ff = a1([].slice), s1 = Er, u1 = kr, pf = Kn.f, l1 = ff, hf = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], c1 = function(r) {
  try {
    return pf(r);
  } catch {
    return l1(hf);
  }
};
cf.f = function(e) {
  return hf && s1(e) === "Window" ? c1(e) : pf(u1(e));
};
var Zu = Uc, f1 = Ot, df = function(r, e, n) {
  return n.get && Zu(n.get, e, { getter: !0 }), n.set && Zu(n.set, e, { setter: !0 }), f1.f(r, e, n);
}, p1 = Er, h1 = Be, d1 = function(r) {
  if (p1(r) === "Function")
    return h1(r);
}, Ju = d1, g1 = Vi, v1 = Ui, m1 = Ju(Ju.bind), y1 = function(r, e) {
  return g1(r), e === void 0 ? r : v1 ? m1(r, e) : function() {
    return r.apply(e, arguments);
  };
}, w1 = Er, hs = Array.isArray || function(e) {
  return w1(e) === "Array";
}, b1 = Be, E1 = Ve, gf = Xe, T1 = fs, S1 = Br, O1 = Mc, vf = function() {
}, mf = S1("Reflect", "construct"), ds = /^\s*(?:class|function)\b/, $1 = b1(ds.exec), I1 = !ds.test(vf), _n = function(e) {
  if (!gf(e))
    return !1;
  try {
    return mf(vf, [], e), !0;
  } catch {
    return !1;
  }
}, yf = function(e) {
  if (!gf(e))
    return !1;
  switch (T1(e)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return I1 || !!$1(ds, O1(e));
  } catch {
    return !0;
  }
};
yf.sham = !0;
var wf = !mf || E1(function() {
  var r;
  return _n(_n.call) || !_n(Object) || !_n(function() {
    r = !0;
  }) || r;
}) ? yf : _n, Qu = hs, A1 = wf, _1 = sr, x1 = ot, N1 = x1("species"), el = Array, P1 = function(r) {
  var e;
  return Qu(r) && (e = r.constructor, A1(e) && (e === el || Qu(e.prototype)) ? e = void 0 : _1(e) && (e = e[N1], e === null && (e = void 0))), e === void 0 ? el : e;
}, R1 = P1, bf = function(r, e) {
  return new (R1(r))(e === 0 ? 0 : e);
}, C1 = y1, L1 = Be, F1 = ji, M1 = Tr, k1 = Xi, B1 = bf, tl = L1([].push), yr = function(r) {
  var e = r === 1, n = r === 2, i = r === 3, s = r === 4, c = r === 6, v = r === 7, h = r === 5 || c;
  return function(y, l, a, g) {
    for (var p = M1(y), E = F1(p), O = k1(E), _ = C1(l, a), P = 0, D = g || B1, I = e ? D(y, O) : n || v ? D(y, 0) : void 0, x, F; O > P; P++)
      if ((h || P in E) && (x = E[P], F = _(x, P, p), r))
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
              tl(I, x);
          }
        else
          switch (r) {
            case 4:
              return !1;
            case 7:
              tl(I, x);
          }
    return c ? -1 : i || s ? s : I;
  };
}, gs = {
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
}, Zi = yt, ei = et, vs = Nt, U1 = Be, cn = mt, fn = mn, D1 = Ve, it = pt, j1 = Gi, $a = Dt, Ji = kr, ms = Ja, G1 = ur, Ia = qn, pn = Yi, Ef = ss, W1 = Kn, Tf = cf, V1 = Zn, Sf = Vn, Of = Ot, q1 = as, $f = Di, Wo = Sr, z1 = df, ys = yn, H1 = qi, If = zi, rl = Za, X1 = ot, Y1 = is, K1 = os, Z1 = lf, J1 = Ki, Af = Yn, Qi = gs.forEach, Tt = H1("hidden"), eo = "Symbol", Bn = "prototype", Q1 = Af.set, nl = Af.getterFor(eo), Bt = Object[Bn], Cr = ei.Symbol, Cn = Cr && Cr[Bn], ew = ei.RangeError, tw = ei.TypeError, Vo = ei.QObject, _f = Sf.f, Lr = Of.f, xf = Tf.f, rw = $f.f, Nf = U1([].push), gr = ys("symbols"), ti = ys("op-symbols"), nw = ys("wks"), Aa = !Vo || !Vo[Bn] || !Vo[Bn].findChild, Pf = function(r, e, n) {
  var i = _f(Bt, e);
  i && delete Bt[e], Lr(r, e, n), i && r !== Bt && Lr(Bt, e, i);
}, _a = cn && D1(function() {
  return pn(Lr({}, "a", {
    get: function() {
      return Lr(this, "a", { value: 7 }).a;
    }
  })).a !== 7;
}) ? Pf : Lr, qo = function(r, e) {
  var n = gr[r] = pn(Cn);
  return Q1(n, {
    type: eo,
    tag: r,
    description: e
  }), cn || (n.description = e), n;
}, to = function(e, n, i) {
  e === Bt && to(ti, n, i), $a(e);
  var s = ms(n);
  return $a(i), it(gr, s) ? (i.enumerable ? (it(e, Tt) && e[Tt][s] && (e[Tt][s] = !1), i = pn(i, { enumerable: Ia(0, !1) })) : (it(e, Tt) || Lr(e, Tt, Ia(1, pn(null))), e[Tt][s] = !0), _a(e, s, i)) : Lr(e, s, i);
}, ws = function(e, n) {
  $a(e);
  var i = Ji(n), s = Ef(i).concat(Lf(i));
  return Qi(s, function(c) {
    (!cn || vs(xa, i, c)) && to(e, c, i[c]);
  }), e;
}, iw = function(e, n) {
  return n === void 0 ? pn(e) : ws(pn(e), n);
}, xa = function(e) {
  var n = ms(e), i = vs(rw, this, n);
  return this === Bt && it(gr, n) && !it(ti, n) ? !1 : i || !it(this, n) || !it(gr, n) || it(this, Tt) && this[Tt][n] ? i : !0;
}, Rf = function(e, n) {
  var i = Ji(e), s = ms(n);
  if (!(i === Bt && it(gr, s) && !it(ti, s))) {
    var c = _f(i, s);
    return c && it(gr, s) && !(it(i, Tt) && i[Tt][s]) && (c.enumerable = !0), c;
  }
}, Cf = function(e) {
  var n = xf(Ji(e)), i = [];
  return Qi(n, function(s) {
    !it(gr, s) && !it(If, s) && Nf(i, s);
  }), i;
}, Lf = function(r) {
  var e = r === Bt, n = xf(e ? ti : Ji(r)), i = [];
  return Qi(n, function(s) {
    it(gr, s) && (!e || it(Bt, s)) && Nf(i, gr[s]);
  }), i;
};
fn || (Cr = function() {
  if (j1(Cn, this))
    throw new tw("Symbol is not a constructor");
  var e = !arguments.length || arguments[0] === void 0 ? void 0 : G1(arguments[0]), n = rl(e), i = function(s) {
    var c = this === void 0 ? ei : this;
    c === Bt && vs(i, ti, s), it(c, Tt) && it(c[Tt], n) && (c[Tt][n] = !1);
    var v = Ia(1, s);
    try {
      _a(c, n, v);
    } catch (h) {
      if (!(h instanceof ew))
        throw h;
      Pf(c, n, v);
    }
  };
  return cn && Aa && _a(Bt, n, { configurable: !0, set: i }), qo(n, e);
}, Cn = Cr[Bn], Wo(Cn, "toString", function() {
  return nl(this).tag;
}), Wo(Cr, "withoutSetter", function(r) {
  return qo(rl(r), r);
}), $f.f = xa, Of.f = to, q1.f = ws, Sf.f = Rf, W1.f = Tf.f = Cf, V1.f = Lf, Y1.f = function(r) {
  return qo(X1(r), r);
}, cn && (z1(Cn, "description", {
  configurable: !0,
  get: function() {
    return nl(this).description;
  }
}), Wo(Bt, "propertyIsEnumerable", xa, { unsafe: !0 })));
Zi({ global: !0, constructor: !0, wrap: !0, forced: !fn, sham: !fn }, {
  Symbol: Cr
});
Qi(Ef(nw), function(r) {
  K1(r);
});
Zi({ target: eo, stat: !0, forced: !fn }, {
  useSetter: function() {
    Aa = !0;
  },
  useSimple: function() {
    Aa = !1;
  }
});
Zi({ target: "Object", stat: !0, forced: !fn, sham: !cn }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: iw,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: to,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: ws,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: Rf
});
Zi({ target: "Object", stat: !0, forced: !fn }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: Cf
});
Z1();
J1(Cr, eo);
If[Tt] = !0;
var ow = mn, Ff = ow && !!Symbol.for && !!Symbol.keyFor, aw = yt, sw = Br, uw = pt, lw = ur, Mf = yn, cw = Ff, zo = Mf("string-to-symbol-registry"), fw = Mf("symbol-to-string-registry");
aw({ target: "Symbol", stat: !0, forced: !cw }, {
  for: function(r) {
    var e = lw(r);
    if (uw(zo, e))
      return zo[e];
    var n = sw("Symbol")(e);
    return zo[e] = n, fw[n] = e, n;
  }
});
var pw = yt, hw = pt, dw = Hn, gw = Ha, vw = yn, mw = Ff, il = vw("symbol-to-string-registry");
pw({ target: "Symbol", stat: !0, forced: !mw }, {
  keyFor: function(e) {
    if (!dw(e))
      throw new TypeError(gw(e) + " is not a symbol");
    if (hw(il, e))
      return il[e];
  }
});
var yw = Ui, kf = Function.prototype, ol = kf.apply, al = kf.call, Bf = typeof Reflect == "object" && Reflect.apply || (yw ? al.bind(ol) : function() {
  return al.apply(ol, arguments);
}), ww = Be, sl = hs, bw = Xe, ul = Er, Ew = ur, ll = ww([].push), Tw = function(r) {
  if (bw(r))
    return r;
  if (sl(r)) {
    for (var e = r.length, n = [], i = 0; i < e; i++) {
      var s = r[i];
      typeof s == "string" ? ll(n, s) : (typeof s == "number" || ul(s) === "Number" || ul(s) === "String") && ll(n, Ew(s));
    }
    var c = n.length, v = !0;
    return function(h, y) {
      if (v)
        return v = !1, y;
      if (sl(this))
        return y;
      for (var l = 0; l < c; l++)
        if (n[l] === h)
          return y;
    };
  }
}, Sw = yt, Uf = Br, Df = Bf, Ow = Nt, ri = Be, jf = Ve, cl = Xe, fl = Hn, Gf = ff, $w = Tw, Iw = mn, Aw = String, br = Uf("JSON", "stringify"), yi = ri(/./.exec), pl = ri("".charAt), _w = ri("".charCodeAt), xw = ri("".replace), Nw = ri(1 .toString), Pw = /[\uD800-\uDFFF]/g, hl = /^[\uD800-\uDBFF]$/, dl = /^[\uDC00-\uDFFF]$/, gl = !Iw || jf(function() {
  var r = Uf("Symbol")("stringify detection");
  return br([r]) !== "[null]" || br({ a: r }) !== "{}" || br(Object(r)) !== "{}";
}), vl = jf(function() {
  return br("\uDF06\uD834") !== '"\\udf06\\ud834"' || br("\uDEAD") !== '"\\udead"';
}), Rw = function(r, e) {
  var n = Gf(arguments), i = $w(e);
  if (!(!cl(i) && (r === void 0 || fl(r))))
    return n[1] = function(s, c) {
      if (cl(i) && (c = Ow(i, this, Aw(s), c)), !fl(c))
        return c;
    }, Df(br, null, n);
}, Cw = function(r, e, n) {
  var i = pl(n, e - 1), s = pl(n, e + 1);
  return yi(hl, r) && !yi(dl, s) || yi(dl, r) && !yi(hl, i) ? "\\u" + Nw(_w(r, 0), 16) : r;
};
br && Sw({ target: "JSON", stat: !0, arity: 3, forced: gl || vl }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  stringify: function(e, n, i) {
    var s = Gf(arguments), c = Df(gl ? Rw : br, null, s);
    return vl && typeof c == "string" ? xw(c, Pw, Cw) : c;
  }
});
var Lw = yt, Fw = mn, Mw = Ve, Wf = Zn, kw = Tr, Bw = !Fw || Mw(function() {
  Wf.f(1);
});
Lw({ target: "Object", stat: !0, forced: Bw }, {
  getOwnPropertySymbols: function(e) {
    var n = Wf.f;
    return n ? n(kw(e)) : [];
  }
});
var Uw = yt, Dw = mt, jw = et, wi = Be, Gw = pt, Ww = Xe, Vw = Gi, qw = ur, zw = df, Hw = jc, fr = jw.Symbol, _r = fr && fr.prototype;
if (Dw && Ww(fr) && (!("description" in _r) || // Safari 12 bug
fr().description !== void 0)) {
  var ml = {}, bi = function() {
    var e = arguments.length < 1 || arguments[0] === void 0 ? void 0 : qw(arguments[0]), n = Vw(_r, this) ? new fr(e) : e === void 0 ? fr() : fr(e);
    return e === "" && (ml[n] = !0), n;
  };
  Hw(bi, fr), bi.prototype = _r, _r.constructor = bi;
  var Xw = String(fr("description detection")) === "Symbol(description detection)", Yw = wi(_r.valueOf), Kw = wi(_r.toString), Zw = /^Symbol\((.*)\)[^)]+$/, Jw = wi("".replace), Qw = wi("".slice);
  zw(_r, "description", {
    configurable: !0,
    get: function() {
      var e = Yw(this);
      if (Gw(ml, e))
        return "";
      var n = Kw(e), i = Xw ? Qw(n, 7, -1) : Jw(n, Zw, "$1");
      return i === "" ? void 0 : i;
    }
  }), Uw({ global: !0, constructor: !0, forced: !0 }, {
    Symbol: bi
  });
}
var eb = cs, tb = fs, rb = eb ? {}.toString : function() {
  return "[object " + tb(this) + "]";
}, nb = cs, ib = Sr, ob = rb;
nb || ib(Object.prototype, "toString", ob, { unsafe: !0 });
var ab = Xe, sb = sr, yl = Yc, ub = function(r, e, n) {
  var i, s;
  return (
    // it can work only with native `setPrototypeOf`
    yl && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    ab(i = e.constructor) && i !== n && sb(s = i.prototype) && s !== n.prototype && yl(r, s), r
  );
}, lb = Be, cb = lb(1 .valueOf), fb = `	
\v\f\r                　\u2028\u2029\uFEFF`, pb = Be, hb = vn, db = ur, Na = fb, wl = pb("".replace), gb = RegExp("^[" + Na + "]+"), vb = RegExp("(^|[^" + Na + "])[" + Na + "]+$"), Ho = function(r) {
  return function(e) {
    var n = db(hb(e));
    return r & 1 && (n = wl(n, gb, "")), r & 2 && (n = wl(n, vb, "$1")), n;
  };
}, mb = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: Ho(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: Ho(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: Ho(3)
}, yb = yt, Vf = ug, wb = mt, qf = et, zf = Wc, Hf = Be, bb = Gc, bl = pt, Eb = ub, Tb = Gi, Sb = Hn, Xf = Nc, Ob = Ve, $b = Kn.f, Ib = Vn.f, Ab = Ot.f, _b = cb, xb = mb.trim, ro = "Number", un = qf[ro];
zf[ro];
var bs = un.prototype, Nb = qf.TypeError, Pb = Hf("".slice), Ei = Hf("".charCodeAt), Rb = function(r) {
  var e = Xf(r, "number");
  return typeof e == "bigint" ? e : Cb(e);
}, Cb = function(r) {
  var e = Xf(r, "number"), n, i, s, c, v, h, y, l;
  if (Sb(e))
    throw new Nb("Cannot convert a Symbol value to a number");
  if (typeof e == "string" && e.length > 2) {
    if (e = xb(e), n = Ei(e, 0), n === 43 || n === 45) {
      if (i = Ei(e, 2), i === 88 || i === 120)
        return NaN;
    } else if (n === 48) {
      switch (Ei(e, 1)) {
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
      for (v = Pb(e, 2), h = v.length, y = 0; y < h; y++)
        if (l = Ei(v, y), l < 48 || l > c)
          return NaN;
      return parseInt(v, s);
    }
  }
  return +e;
}, Es = bb(ro, !un(" 0o1") || !un("0b1") || un("+0x1")), Lb = function(r) {
  return Tb(bs, r) && Ob(function() {
    _b(r);
  });
}, no = function(e) {
  var n = arguments.length < 1 ? 0 : un(Rb(e));
  return Lb(this) ? Eb(Object(n), this, no) : n;
};
no.prototype = bs;
Es && !Vf && (bs.constructor = no);
yb({ global: !0, constructor: !0, wrap: !0, forced: Es }, {
  Number: no
});
var Fb = function(r, e) {
  for (var n = wb ? $b(e) : (
    // ES3:
    "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(",")
  ), i = 0, s; n.length > i; i++)
    bl(e, s = n[i]) && !bl(r, s) && Ab(r, s, Ib(e, s));
};
(Es || Vf) && Fb(zf[ro], un);
var wn = {};
Object.defineProperty(wn, "__esModule", {
  value: !0
});
wn.LogLevel = void 0;
var Mb = /* @__PURE__ */ function(r) {
  return r[r.Debug = 0] = "Debug", r[r.Info = 1] = "Info", r[r.Warn = 2] = "Warn", r[r.Error = 3] = "Error", r[r.Fatal = 4] = "Fatal", r;
}({});
wn.LogLevel = Mb;
Object.defineProperty(Qn, "__esModule", {
  value: !0
});
Qn.ConsoleLogger = void 0;
Qn.buildConsoleLogger = jb;
var st = wn;
function hn(r) {
  "@babel/helpers - typeof";
  return hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, hn(r);
}
function kb(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function El(r, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, Yf(i.key), i);
  }
}
function Bb(r, e, n) {
  return e && El(r.prototype, e), n && El(r, n), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Ub(r, e, n) {
  return e = Yf(e), e in r ? Object.defineProperty(r, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = n, r;
}
function Yf(r) {
  var e = Db(r, "string");
  return hn(e) === "symbol" ? e : String(e);
}
function Db(r, e) {
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
var Kf = /* @__PURE__ */ function() {
  function r(e) {
    kb(this, r), Ub(this, "context", void 0), this.context = e || {};
  }
  return Bb(r, [{
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
Qn.ConsoleLogger = Kf;
function jb(r) {
  return new Kf(r);
}
var io = {};
const Gb = /* @__PURE__ */ th($d);
Object.defineProperty(io, "__esModule", {
  value: !0
});
io.LoggerBuilder = void 0;
var Wb = Gb, Tl = wn;
function Un(r) {
  "@babel/helpers - typeof";
  return Un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Un(r);
}
function Vb(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Sl(r, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, Zf(i.key), i);
  }
}
function qb(r, e, n) {
  return e && Sl(r.prototype, e), n && Sl(r, n), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Ol(r, e, n) {
  return e = Zf(e), e in r ? Object.defineProperty(r, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = n, r;
}
function Zf(r) {
  var e = zb(r, "string");
  return Un(e) === "symbol" ? e : String(e);
}
function zb(r, e) {
  if (Un(r) !== "object" || r === null)
    return r;
  var n = r[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(r, e || "default");
    if (Un(i) !== "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
var Hb = /* @__PURE__ */ function() {
  function r(e) {
    Vb(this, r), Ol(this, "context", void 0), Ol(this, "factory", void 0), this.context = {}, this.factory = e;
  }
  return qb(r, [{
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
      var n = (0, Wb.getCurrentUser)();
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
          n.context.level = (c = (v = window._oc_config) === null || v === void 0 ? void 0 : v.loglevel) !== null && c !== void 0 ? c : Tl.LogLevel.Warn, window._oc_debug && (n.context.level = Tl.LogLevel.Debug), document.removeEventListener("readystatechange", s);
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
io.LoggerBuilder = Hb;
(function(r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "LogLevel", {
    enumerable: !0,
    get: function() {
      return i.LogLevel;
    }
  }), r.getLogger = c, r.getLoggerBuilder = s;
  var e = Qn, n = io, i = wn;
  function s() {
    return new n.LoggerBuilder(e.buildConsoleLogger);
  }
  function c() {
    return s().build();
  }
})(pa);
var gt = {};
Object.defineProperty(gt, "__esModule", {
  value: !0
});
gt.linkTo = gt.imagePath = gt.getRootUrl = gt.generateUrl = Jf = gt.generateRemoteUrl = gt.generateOcsUrl = gt.generateFilePath = void 0;
const Xb = (r, e) => Fi(r, "", e);
gt.linkTo = Xb;
const Yb = (r) => dn() + "/remote.php/" + r, Kb = (r) => window.location.protocol + "//" + window.location.host + Yb(r);
var Jf = gt.generateRemoteUrl = Kb;
const Zb = (r, e, n) => {
  const s = Object.assign({
    ocsVersion: 2
  }, n || {}).ocsVersion === 1 ? 1 : 2;
  return window.location.protocol + "//" + window.location.host + dn() + "/ocs/v" + s + ".php" + Pa(r, e, n);
};
gt.generateOcsUrl = Zb;
const Pa = (r, e, n) => {
  const i = Object.assign({
    escape: !0
  }, n || {}), s = function(c, v) {
    return v = v || {}, c.replace(/{([^{}]*)}/g, function(h, y) {
      var l = v[y];
      return i.escape ? encodeURIComponent(typeof l == "string" || typeof l == "number" ? l.toString() : h) : typeof l == "string" || typeof l == "number" ? l.toString() : h;
    });
  };
  return r.charAt(0) !== "/" && (r = "/" + r), s(r, e || {});
}, Jb = (r, e, n) => {
  var s, c;
  const i = Object.assign({
    noRewrite: !1
  }, n || {});
  return ((c = (s = window == null ? void 0 : window.OC) == null ? void 0 : s.config) == null ? void 0 : c.modRewriteWorking) === !0 && !i.noRewrite ? dn() + Pa(r, e, n) : dn() + "/index.php" + Pa(r, e, n);
};
gt.generateUrl = Jb;
const Qb = (r, e) => e.indexOf(".") === -1 ? Fi(r, "img", e + ".svg") : Fi(r, "img", e);
gt.imagePath = Qb;
const Fi = (r, e, n) => {
  var c, v, h, y;
  const i = ((v = (c = window == null ? void 0 : window.OC) == null ? void 0 : c.coreApps) == null ? void 0 : v.indexOf(r)) !== -1;
  let s = dn();
  return n.substring(n.length - 3) === "php" && !i ? (s += "/index.php/apps/" + r, n !== "index.php" && (s += "/", e && (s += encodeURI(e + "/")), s += n)) : n.substring(n.length - 3) !== "php" && !i ? (s = (y = (h = window == null ? void 0 : window.OC) == null ? void 0 : h.appswebroots) == null ? void 0 : y[r], e && (s += "/" + e + "/"), s.substring(s.length - 1) !== "/" && (s += "/"), s += n) : ((r === "settings" || r === "core" || r === "search") && e === "ajax" ? s += "/index.php/" : s += "/", i || (s += "apps/"), r !== "" && (r += "/", s += r), e && (s += e + "/"), s += n), s;
};
gt.generateFilePath = Fi;
const dn = () => {
  var r;
  return ((r = window == null ? void 0 : window.OC) == null ? void 0 : r.webroot) || "";
};
gt.getRootUrl = dn;
/*! @license DOMPurify 3.0.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.6/LICENSE */
const {
  entries: Qf,
  setPrototypeOf: $l,
  isFrozen: eE,
  getPrototypeOf: tE,
  getOwnPropertyDescriptor: ep
} = Object;
let {
  freeze: vt,
  seal: qt,
  create: tp
} = Object, {
  apply: Ra,
  construct: Ca
} = typeof Reflect < "u" && Reflect;
vt || (vt = function(e) {
  return e;
});
qt || (qt = function(e) {
  return e;
});
Ra || (Ra = function(e, n, i) {
  return e.apply(n, i);
});
Ca || (Ca = function(e, n) {
  return new e(...n);
});
const Ti = Ut(Array.prototype.forEach), Il = Ut(Array.prototype.pop), xn = Ut(Array.prototype.push), Pi = Ut(String.prototype.toLowerCase), Xo = Ut(String.prototype.toString), rE = Ut(String.prototype.match), Nn = Ut(String.prototype.replace), nE = Ut(String.prototype.indexOf), iE = Ut(String.prototype.trim), _t = Ut(RegExp.prototype.test), Pn = oE(TypeError);
function Ut(r) {
  return function(e) {
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      i[s - 1] = arguments[s];
    return Ra(r, e, i);
  };
}
function oE(r) {
  return function() {
    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
      n[i] = arguments[i];
    return Ca(r, n);
  };
}
function be(r, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Pi;
  $l && $l(r, null);
  let i = e.length;
  for (; i--; ) {
    let s = e[i];
    if (typeof s == "string") {
      const c = n(s);
      c !== s && (eE(e) || (e[i] = c), s = c);
    }
    r[s] = !0;
  }
  return r;
}
function Qr(r) {
  const e = tp(null);
  for (const [n, i] of Qf(r))
    ep(r, n) !== void 0 && (e[n] = i);
  return e;
}
function Si(r, e) {
  for (; r !== null; ) {
    const i = ep(r, e);
    if (i) {
      if (i.get)
        return Ut(i.get);
      if (typeof i.value == "function")
        return Ut(i.value);
    }
    r = tE(r);
  }
  function n(i) {
    return console.warn("fallback value for", i), null;
  }
  return n;
}
const Al = vt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Yo = vt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ko = vt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), aE = vt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Zo = vt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), sE = vt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), _l = vt(["#text"]), xl = vt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Jo = vt(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Nl = vt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Oi = vt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), uE = qt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), lE = qt(/<%[\w\W]*|[\w\W]*%>/gm), cE = qt(/\${[\w\W]*}/gm), fE = qt(/^data-[\-\w.\u00B7-\uFFFF]/), pE = qt(/^aria-[\-\w]+$/), rp = qt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), hE = qt(/^(?:\w+script|data):/i), dE = qt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), np = qt(/^html$/i);
var Pl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: uE,
  ERB_EXPR: lE,
  TMPLIT_EXPR: cE,
  DATA_ATTR: fE,
  ARIA_ATTR: pE,
  IS_ALLOWED_URI: rp,
  IS_SCRIPT_OR_DATA: hE,
  ATTR_WHITESPACE: dE,
  DOCTYPE_NAME: np
});
const gE = function() {
  return typeof window > "u" ? null : window;
}, vE = function(e, n) {
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
function ip() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : gE();
  const e = (se) => ip(se);
  if (e.version = "3.0.6", e.removed = [], !r || !r.document || r.document.nodeType !== 9)
    return e.isSupported = !1, e;
  let {
    document: n
  } = r;
  const i = n, s = i.currentScript, {
    DocumentFragment: c,
    HTMLTemplateElement: v,
    Node: h,
    Element: y,
    NodeFilter: l,
    NamedNodeMap: a = r.NamedNodeMap || r.MozNamedAttrMap,
    HTMLFormElement: g,
    DOMParser: p,
    trustedTypes: E
  } = r, O = y.prototype, _ = Si(O, "cloneNode"), P = Si(O, "nextSibling"), D = Si(O, "childNodes"), I = Si(O, "parentNode");
  if (typeof v == "function") {
    const se = n.createElement("template");
    se.content && se.content.ownerDocument && (n = se.content.ownerDocument);
  }
  let x, F = "";
  const {
    implementation: R,
    createNodeIterator: V,
    createDocumentFragment: z,
    getElementsByTagName: G
  } = n, {
    importNode: X
  } = i;
  let Z = {};
  e.isSupported = typeof Qf == "function" && typeof I == "function" && R && R.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: H,
    ERB_EXPR: K,
    TMPLIT_EXPR: q,
    DATA_ATTR: re,
    ARIA_ATTR: pe,
    IS_SCRIPT_OR_DATA: Ae,
    ATTR_WHITESPACE: ce
  } = Pl;
  let {
    IS_ALLOWED_URI: Ee
  } = Pl, me = null;
  const Me = be({}, [...Al, ...Yo, ...Ko, ...Zo, ..._l]);
  let $e = null;
  const Ze = be({}, [...xl, ...Jo, ...Nl, ...Oi]);
  let Te = Object.seal(tp(null, {
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
  })), _e = null, Ie = null, $t = !0, wt = !0, Ue = !1, Ht = !0, Re = !1, Je = !1, Pt = !1, ut = !1, bt = !1, jt = !1, Ce = !1, De = !0, lr = !1;
  const Or = "user-content-";
  let ht = !0, Rt = !1, It = {}, At = null;
  const he = be({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let qe = null;
  const b = be({}, ["audio", "video", "img", "source", "image", "track"]);
  let $ = null;
  const L = be({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), k = "http://www.w3.org/1998/Math/MathML", d = "http://www.w3.org/2000/svg", o = "http://www.w3.org/1999/xhtml";
  let u = o, T = !1, A = null;
  const M = be({}, [k, d, o], Xo);
  let j = null;
  const te = ["application/xhtml+xml", "text/html"], le = "text/html";
  let ue = null, fe = null;
  const xe = n.createElement("form"), Xt = function(U) {
    return U instanceof RegExp || U instanceof Function;
  }, $r = function() {
    let U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(fe && fe === U)) {
      if ((!U || typeof U != "object") && (U = {}), U = Qr(U), j = // eslint-disable-next-line unicorn/prefer-includes
      te.indexOf(U.PARSER_MEDIA_TYPE) === -1 ? j = le : j = U.PARSER_MEDIA_TYPE, ue = j === "application/xhtml+xml" ? Xo : Pi, me = "ALLOWED_TAGS" in U ? be({}, U.ALLOWED_TAGS, ue) : Me, $e = "ALLOWED_ATTR" in U ? be({}, U.ALLOWED_ATTR, ue) : Ze, A = "ALLOWED_NAMESPACES" in U ? be({}, U.ALLOWED_NAMESPACES, Xo) : M, $ = "ADD_URI_SAFE_ATTR" in U ? be(
        Qr(L),
        // eslint-disable-line indent
        U.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        ue
        // eslint-disable-line indent
      ) : L, qe = "ADD_DATA_URI_TAGS" in U ? be(
        Qr(b),
        // eslint-disable-line indent
        U.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        ue
        // eslint-disable-line indent
      ) : b, At = "FORBID_CONTENTS" in U ? be({}, U.FORBID_CONTENTS, ue) : he, _e = "FORBID_TAGS" in U ? be({}, U.FORBID_TAGS, ue) : {}, Ie = "FORBID_ATTR" in U ? be({}, U.FORBID_ATTR, ue) : {}, It = "USE_PROFILES" in U ? U.USE_PROFILES : !1, $t = U.ALLOW_ARIA_ATTR !== !1, wt = U.ALLOW_DATA_ATTR !== !1, Ue = U.ALLOW_UNKNOWN_PROTOCOLS || !1, Ht = U.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Re = U.SAFE_FOR_TEMPLATES || !1, Je = U.WHOLE_DOCUMENT || !1, bt = U.RETURN_DOM || !1, jt = U.RETURN_DOM_FRAGMENT || !1, Ce = U.RETURN_TRUSTED_TYPE || !1, ut = U.FORCE_BODY || !1, De = U.SANITIZE_DOM !== !1, lr = U.SANITIZE_NAMED_PROPS || !1, ht = U.KEEP_CONTENT !== !1, Rt = U.IN_PLACE || !1, Ee = U.ALLOWED_URI_REGEXP || rp, u = U.NAMESPACE || o, Te = U.CUSTOM_ELEMENT_HANDLING || {}, U.CUSTOM_ELEMENT_HANDLING && Xt(U.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Te.tagNameCheck = U.CUSTOM_ELEMENT_HANDLING.tagNameCheck), U.CUSTOM_ELEMENT_HANDLING && Xt(U.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Te.attributeNameCheck = U.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), U.CUSTOM_ELEMENT_HANDLING && typeof U.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Te.allowCustomizedBuiltInElements = U.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Re && (wt = !1), jt && (bt = !0), It && (me = be({}, [..._l]), $e = [], It.html === !0 && (be(me, Al), be($e, xl)), It.svg === !0 && (be(me, Yo), be($e, Jo), be($e, Oi)), It.svgFilters === !0 && (be(me, Ko), be($e, Jo), be($e, Oi)), It.mathMl === !0 && (be(me, Zo), be($e, Nl), be($e, Oi))), U.ADD_TAGS && (me === Me && (me = Qr(me)), be(me, U.ADD_TAGS, ue)), U.ADD_ATTR && ($e === Ze && ($e = Qr($e)), be($e, U.ADD_ATTR, ue)), U.ADD_URI_SAFE_ATTR && be($, U.ADD_URI_SAFE_ATTR, ue), U.FORBID_CONTENTS && (At === he && (At = Qr(At)), be(At, U.FORBID_CONTENTS, ue)), ht && (me["#text"] = !0), Je && be(me, ["html", "head", "body"]), me.table && (be(me, ["tbody"]), delete _e.tbody), U.TRUSTED_TYPES_POLICY) {
        if (typeof U.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Pn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof U.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Pn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        x = U.TRUSTED_TYPES_POLICY, F = x.createHTML("");
      } else
        x === void 0 && (x = vE(E, s)), x !== null && typeof F == "string" && (F = x.createHTML(""));
      vt && vt(U), fe = U;
    }
  }, En = be({}, ["mi", "mo", "mn", "ms", "mtext"]), ni = be({}, ["foreignobject", "desc", "title", "annotation-xml"]), so = be({}, ["title", "style", "font", "a", "script"]), dt = be({}, Yo);
  be(dt, Ko), be(dt, aE);
  const Ur = be({}, Zo);
  be(Ur, sE);
  const Dr = function(U) {
    let ee = I(U);
    (!ee || !ee.tagName) && (ee = {
      namespaceURI: u,
      tagName: "template"
    });
    const ae = Pi(U.tagName), Le = Pi(ee.tagName);
    return A[U.namespaceURI] ? U.namespaceURI === d ? ee.namespaceURI === o ? ae === "svg" : ee.namespaceURI === k ? ae === "svg" && (Le === "annotation-xml" || En[Le]) : !!dt[ae] : U.namespaceURI === k ? ee.namespaceURI === o ? ae === "math" : ee.namespaceURI === d ? ae === "math" && ni[Le] : !!Ur[ae] : U.namespaceURI === o ? ee.namespaceURI === d && !ni[Le] || ee.namespaceURI === k && !En[Le] ? !1 : !Ur[ae] && (so[ae] || !dt[ae]) : !!(j === "application/xhtml+xml" && A[U.namespaceURI]) : !1;
  }, Yt = function(U) {
    xn(e.removed, {
      element: U
    });
    try {
      U.parentNode.removeChild(U);
    } catch {
      U.remove();
    }
  }, jr = function(U, ee) {
    try {
      xn(e.removed, {
        attribute: ee.getAttributeNode(U),
        from: ee
      });
    } catch {
      xn(e.removed, {
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
  }, Ir = function(U) {
    let ee = null, ae = null;
    if (ut)
      U = "<remove></remove>" + U;
    else {
      const Qe = rE(U, /^[\r\n\t ]+/);
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
      ee = R.createDocument(u, "template", null);
      try {
        ee.documentElement.innerHTML = T ? F : Le;
      } catch {
      }
    }
    const Ye = ee.body || ee.documentElement;
    return U && ae && Ye.insertBefore(n.createTextNode(ae), Ye.childNodes[0] || null), u === o ? G.call(ee, Je ? "html" : "body")[0] : Je ? ee.documentElement : Ye;
  }, Gr = function(U) {
    return V.call(
      U.ownerDocument || U,
      U,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT,
      null
    );
  }, tt = function(U) {
    return U instanceof g && (typeof U.nodeName != "string" || typeof U.textContent != "string" || typeof U.removeChild != "function" || !(U.attributes instanceof a) || typeof U.removeAttribute != "function" || typeof U.setAttribute != "function" || typeof U.namespaceURI != "string" || typeof U.insertBefore != "function" || typeof U.hasChildNodes != "function");
  }, Kt = function(U) {
    return typeof h == "function" && U instanceof h;
  }, Gt = function(U, ee, ae) {
    Z[U] && Ti(Z[U], (Le) => {
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
    }), U.hasChildNodes() && !Kt(U.firstElementChild) && _t(/<[/\w]/g, U.innerHTML) && _t(/<[/\w]/g, U.textContent))
      return Yt(U), !0;
    if (!me[ae] || _e[ae]) {
      if (!_e[ae] && Ct(ae) && (Te.tagNameCheck instanceof RegExp && _t(Te.tagNameCheck, ae) || Te.tagNameCheck instanceof Function && Te.tagNameCheck(ae)))
        return !1;
      if (ht && !At[ae]) {
        const Le = I(U) || U.parentNode, Ye = D(U) || U.childNodes;
        if (Ye && Le) {
          const Qe = Ye.length;
          for (let lt = Qe - 1; lt >= 0; --lt)
            Le.insertBefore(_(Ye[lt], !0), P(U));
        }
      }
      return Yt(U), !0;
    }
    return U instanceof y && !Dr(U) || (ae === "noscript" || ae === "noembed" || ae === "noframes") && _t(/<\/no(script|embed|frames)/i, U.innerHTML) ? (Yt(U), !0) : (Re && U.nodeType === 3 && (ee = U.textContent, Ti([H, K, q], (Le) => {
      ee = Nn(ee, Le, " ");
    }), U.textContent !== ee && (xn(e.removed, {
      element: U.cloneNode()
    }), U.textContent = ee)), Gt("afterSanitizeElements", U, null), !1);
  }, ii = function(U, ee, ae) {
    if (De && (ee === "id" || ee === "name") && (ae in n || ae in xe))
      return !1;
    if (!(wt && !Ie[ee] && _t(re, ee))) {
      if (!($t && _t(pe, ee))) {
        if (!$e[ee] || Ie[ee]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Ct(U) && (Te.tagNameCheck instanceof RegExp && _t(Te.tagNameCheck, U) || Te.tagNameCheck instanceof Function && Te.tagNameCheck(U)) && (Te.attributeNameCheck instanceof RegExp && _t(Te.attributeNameCheck, ee) || Te.attributeNameCheck instanceof Function && Te.attributeNameCheck(ee)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            ee === "is" && Te.allowCustomizedBuiltInElements && (Te.tagNameCheck instanceof RegExp && _t(Te.tagNameCheck, ae) || Te.tagNameCheck instanceof Function && Te.tagNameCheck(ae)))
          )
            return !1;
        } else if (!$[ee]) {
          if (!_t(Ee, Nn(ae, ce, ""))) {
            if (!((ee === "src" || ee === "xlink:href" || ee === "href") && U !== "script" && nE(ae, "data:") === 0 && qe[U])) {
              if (!(Ue && !_t(Ae, Nn(ae, ce, "")))) {
                if (ae)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Ct = function(U) {
    return U.indexOf("-") > 0;
  }, cr = function(U) {
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
      } = Ye, Ar = ue(Qe);
      let at = Qe === "value" ? Zt : iE(Zt);
      if (ae.attrName = Ar, ae.attrValue = at, ae.keepAttr = !0, ae.forceKeepAttr = void 0, Gt("uponSanitizeAttribute", U, ae), at = ae.attrValue, ae.forceKeepAttr || (jr(Qe, U), !ae.keepAttr))
        continue;
      if (!Ht && _t(/\/>/i, at)) {
        jr(Qe, U);
        continue;
      }
      Re && Ti([H, K, q], (rt) => {
        at = Nn(at, rt, " ");
      });
      const Tn = ue(U.nodeName);
      if (ii(Tn, Ar, at)) {
        if (lr && (Ar === "id" || Ar === "name") && (jr(Qe, U), at = Or + at), x && typeof E == "object" && typeof E.getAttributeType == "function" && !lt)
          switch (E.getAttributeType(Tn, Ar)) {
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
          lt ? U.setAttributeNS(lt, Qe, at) : U.setAttribute(Qe, at), Il(e.removed);
        } catch {
        }
      }
    }
    Gt("afterSanitizeAttributes", U, null);
  }, Vr = function se(U) {
    let ee = null;
    const ae = Gr(U);
    for (Gt("beforeSanitizeShadowDOM", U, null); ee = ae.nextNode(); )
      Gt("uponSanitizeShadowNode", ee, null), !Wr(ee) && (ee.content instanceof c && se(ee.content), cr(ee));
    Gt("afterSanitizeShadowDOM", U, null);
  };
  return e.sanitize = function(se) {
    let U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ee = null, ae = null, Le = null, Ye = null;
    if (T = !se, T && (se = "<!-->"), typeof se != "string" && !Kt(se))
      if (typeof se.toString == "function") {
        if (se = se.toString(), typeof se != "string")
          throw Pn("dirty is not a string, aborting");
      } else
        throw Pn("toString is not a function");
    if (!e.isSupported)
      return se;
    if (Pt || $r(U), e.removed = [], typeof se == "string" && (Rt = !1), Rt) {
      if (se.nodeName) {
        const Zt = ue(se.nodeName);
        if (!me[Zt] || _e[Zt])
          throw Pn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (se instanceof h)
      ee = Ir("<!---->"), ae = ee.ownerDocument.importNode(se, !0), ae.nodeType === 1 && ae.nodeName === "BODY" || ae.nodeName === "HTML" ? ee = ae : ee.appendChild(ae);
    else {
      if (!bt && !Re && !Je && // eslint-disable-next-line unicorn/prefer-includes
      se.indexOf("<") === -1)
        return x && Ce ? x.createHTML(se) : se;
      if (ee = Ir(se), !ee)
        return bt ? null : Ce ? F : "";
    }
    ee && ut && Yt(ee.firstChild);
    const Qe = Gr(Rt ? se : ee);
    for (; Le = Qe.nextNode(); )
      Wr(Le) || (Le.content instanceof c && Vr(Le.content), cr(Le));
    if (Rt)
      return se;
    if (bt) {
      if (jt)
        for (Ye = z.call(ee.ownerDocument); ee.firstChild; )
          Ye.appendChild(ee.firstChild);
      else
        Ye = ee;
      return ($e.shadowroot || $e.shadowrootmode) && (Ye = X.call(i, Ye, !0)), Ye;
    }
    let lt = Je ? ee.outerHTML : ee.innerHTML;
    return Je && me["!doctype"] && ee.ownerDocument && ee.ownerDocument.doctype && ee.ownerDocument.doctype.name && _t(np, ee.ownerDocument.doctype.name) && (lt = "<!DOCTYPE " + ee.ownerDocument.doctype.name + `>
` + lt), Re && Ti([H, K, q], (Zt) => {
      lt = Nn(lt, Zt, " ");
    }), x && Ce ? x.createHTML(lt) : lt;
  }, e.setConfig = function() {
    let se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    $r(se), Pt = !0;
  }, e.clearConfig = function() {
    fe = null, Pt = !1;
  }, e.isValidAttribute = function(se, U, ee) {
    fe || $r({});
    const ae = ue(se), Le = ue(U);
    return ii(ae, Le, ee);
  }, e.addHook = function(se, U) {
    typeof U == "function" && (Z[se] = Z[se] || [], xn(Z[se], U));
  }, e.removeHook = function(se) {
    if (Z[se])
      return Il(Z[se]);
  }, e.removeHooks = function(se) {
    Z[se] && (Z[se] = []);
  }, e.removeAllHooks = function() {
    Z = {};
  }, e;
}
ip();
function tr(r) {
  if (typeof r != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(r));
}
function Rl(r, e) {
  for (var n = "", i = 0, s = -1, c = 0, v, h = 0; h <= r.length; ++h) {
    if (h < r.length)
      v = r.charCodeAt(h);
    else {
      if (v === 47)
        break;
      v = 47;
    }
    if (v === 47) {
      if (!(s === h - 1 || c === 1))
        if (s !== h - 1 && c === 2) {
          if (n.length < 2 || i !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length - 2) !== 46) {
            if (n.length > 2) {
              var y = n.lastIndexOf("/");
              if (y !== n.length - 1) {
                y === -1 ? (n = "", i = 0) : (n = n.slice(0, y), i = n.length - 1 - n.lastIndexOf("/")), s = h, c = 0;
                continue;
              }
            } else if (n.length === 2 || n.length === 1) {
              n = "", i = 0, s = h, c = 0;
              continue;
            }
          }
          e && (n.length > 0 ? n += "/.." : n = "..", i = 2);
        } else
          n.length > 0 ? n += "/" + r.slice(s + 1, h) : n = r.slice(s + 1, h), i = h - s - 1;
      s = h, c = 0;
    } else
      v === 46 && c !== -1 ? ++c : c = -1;
  }
  return n;
}
function mE(r, e) {
  var n = e.dir || e.root, i = e.base || (e.name || "") + (e.ext || "");
  return n ? n === e.root ? n + i : n + r + i : i;
}
var Fn = {
  // path.resolve([from ...], to)
  resolve: function() {
    for (var e = "", n = !1, i, s = arguments.length - 1; s >= -1 && !n; s--) {
      var c;
      s >= 0 ? c = arguments[s] : (i === void 0 && (i = kt.cwd()), c = i), tr(c), c.length !== 0 && (e = c + "/" + e, n = c.charCodeAt(0) === 47);
    }
    return e = Rl(e, !n), n ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
  },
  normalize: function(e) {
    if (tr(e), e.length === 0)
      return ".";
    var n = e.charCodeAt(0) === 47, i = e.charCodeAt(e.length - 1) === 47;
    return e = Rl(e, !n), e.length === 0 && !n && (e = "."), e.length > 0 && i && (e += "/"), n ? "/" + e : e;
  },
  isAbsolute: function(e) {
    return tr(e), e.length > 0 && e.charCodeAt(0) === 47;
  },
  join: function() {
    if (arguments.length === 0)
      return ".";
    for (var e, n = 0; n < arguments.length; ++n) {
      var i = arguments[n];
      tr(i), i.length > 0 && (e === void 0 ? e = i : e += "/" + i);
    }
    return e === void 0 ? "." : Fn.normalize(e);
  },
  relative: function(e, n) {
    if (tr(e), tr(n), e === n || (e = Fn.resolve(e), n = Fn.resolve(n), e === n))
      return "";
    for (var i = 1; i < e.length && e.charCodeAt(i) === 47; ++i)
      ;
    for (var s = e.length, c = s - i, v = 1; v < n.length && n.charCodeAt(v) === 47; ++v)
      ;
    for (var h = n.length, y = h - v, l = c < y ? c : y, a = -1, g = 0; g <= l; ++g) {
      if (g === l) {
        if (y > l) {
          if (n.charCodeAt(v + g) === 47)
            return n.slice(v + g + 1);
          if (g === 0)
            return n.slice(v + g);
        } else
          c > l && (e.charCodeAt(i + g) === 47 ? a = g : g === 0 && (a = 0));
        break;
      }
      var p = e.charCodeAt(i + g), E = n.charCodeAt(v + g);
      if (p !== E)
        break;
      p === 47 && (a = g);
    }
    var O = "";
    for (g = i + a + 1; g <= s; ++g)
      (g === s || e.charCodeAt(g) === 47) && (O.length === 0 ? O += ".." : O += "/..");
    return O.length > 0 ? O + n.slice(v + a) : (v += a, n.charCodeAt(v) === 47 && ++v, n.slice(v));
  },
  _makeLong: function(e) {
    return e;
  },
  dirname: function(e) {
    if (tr(e), e.length === 0)
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
    tr(e);
    var i = 0, s = -1, c = !0, v;
    if (n !== void 0 && n.length > 0 && n.length <= e.length) {
      if (n.length === e.length && n === e)
        return "";
      var h = n.length - 1, y = -1;
      for (v = e.length - 1; v >= 0; --v) {
        var l = e.charCodeAt(v);
        if (l === 47) {
          if (!c) {
            i = v + 1;
            break;
          }
        } else
          y === -1 && (c = !1, y = v + 1), h >= 0 && (l === n.charCodeAt(h) ? --h === -1 && (s = v) : (h = -1, s = y));
      }
      return i === s ? s = y : s === -1 && (s = e.length), e.slice(i, s);
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
    tr(e);
    for (var n = -1, i = 0, s = -1, c = !0, v = 0, h = e.length - 1; h >= 0; --h) {
      var y = e.charCodeAt(h);
      if (y === 47) {
        if (!c) {
          i = h + 1;
          break;
        }
        continue;
      }
      s === -1 && (c = !1, s = h + 1), y === 46 ? n === -1 ? n = h : v !== 1 && (v = 1) : n !== -1 && (v = -1);
    }
    return n === -1 || s === -1 || // We saw a non-dot character immediately before the dot
    v === 0 || // The (right-most) trimmed path component is exactly '..'
    v === 1 && n === s - 1 && n === i + 1 ? "" : e.slice(n, s);
  },
  format: function(e) {
    if (e === null || typeof e != "object")
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
    return mE("/", e);
  },
  parse: function(e) {
    tr(e);
    var n = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0)
      return n;
    var i = e.charCodeAt(0), s = i === 47, c;
    s ? (n.root = "/", c = 1) : c = 0;
    for (var v = -1, h = 0, y = -1, l = !0, a = e.length - 1, g = 0; a >= c; --a) {
      if (i = e.charCodeAt(a), i === 47) {
        if (!l) {
          h = a + 1;
          break;
        }
        continue;
      }
      y === -1 && (l = !1, y = a + 1), i === 46 ? v === -1 ? v = a : g !== 1 && (g = 1) : v !== -1 && (g = -1);
    }
    return v === -1 || y === -1 || // We saw a non-dot character immediately before the dot
    g === 0 || // The (right-most) trimmed path component is exactly '..'
    g === 1 && v === y - 1 && v === h + 1 ? y !== -1 && (h === 0 && s ? n.base = n.name = e.slice(1, y) : n.base = n.name = e.slice(h, y)) : (h === 0 && s ? (n.name = e.slice(1, v), n.base = e.slice(1, y)) : (n.name = e.slice(h, v), n.base = e.slice(h, y)), n.ext = e.slice(v, y)), h > 0 ? n.dir = e.slice(0, h - 1) : s && (n.dir = "/"), n;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
Fn.posix = Fn;
var bn = {}, yE = Ve, wE = ot, bE = Wi, EE = wE("species"), Ts = function(r) {
  return bE >= 51 || !yE(function() {
    var e = [], n = e.constructor = {};
    return n[EE] = function() {
      return { foo: 1 };
    }, e[r](Boolean).foo !== 1;
  });
}, TE = yt, SE = gs.map, OE = Ts, $E = OE("map");
TE({ target: "Array", proto: !0, forced: !$E }, {
  map: function(e) {
    return SE(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var IE = Dt, AE = function() {
  var r = IE(this), e = "";
  return r.hasIndices && (e += "d"), r.global && (e += "g"), r.ignoreCase && (e += "i"), r.multiline && (e += "m"), r.dotAll && (e += "s"), r.unicode && (e += "u"), r.unicodeSets && (e += "v"), r.sticky && (e += "y"), e;
}, Ss = Ve, _E = et, Os = _E.RegExp, $s = Ss(function() {
  var r = Os("a", "y");
  return r.lastIndex = 2, r.exec("abcd") !== null;
}), xE = $s || Ss(function() {
  return !Os("a", "y").sticky;
}), NE = $s || Ss(function() {
  var r = Os("^r", "gy");
  return r.lastIndex = 2, r.exec("str") !== null;
}), op = {
  BROKEN_CARET: NE,
  MISSED_STICKY: xE,
  UNSUPPORTED_Y: $s
}, PE = Ve, RE = et, CE = RE.RegExp, LE = PE(function() {
  var r = CE(".", "s");
  return !(r.dotAll && r.test(`
`) && r.flags === "s");
}), FE = Ve, ME = et, kE = ME.RegExp, BE = FE(function() {
  var r = kE("(?<a>b)", "g");
  return r.exec("b").groups.a !== "b" || "b".replace(r, "$<a>c") !== "bc";
}), on = Nt, oo = Be, UE = ur, DE = AE, jE = op, GE = yn, WE = Yi, VE = Yn.get, qE = LE, zE = BE, HE = GE("native-string-replace", String.prototype.replace), Mi = RegExp.prototype.exec, La = Mi, XE = oo("".charAt), YE = oo("".indexOf), KE = oo("".replace), Qo = oo("".slice), Fa = function() {
  var r = /a/, e = /b*/g;
  return on(Mi, r, "a"), on(Mi, e, "a"), r.lastIndex !== 0 || e.lastIndex !== 0;
}(), ap = jE.BROKEN_CARET, Ma = /()??/.exec("")[1] !== void 0, ZE = Fa || Ma || ap || qE || zE;
ZE && (La = function(e) {
  var n = this, i = VE(n), s = UE(e), c = i.raw, v, h, y, l, a, g, p;
  if (c)
    return c.lastIndex = n.lastIndex, v = on(La, c, s), n.lastIndex = c.lastIndex, v;
  var E = i.groups, O = ap && n.sticky, _ = on(DE, n), P = n.source, D = 0, I = s;
  if (O && (_ = KE(_, "y", ""), YE(_, "g") === -1 && (_ += "g"), I = Qo(s, n.lastIndex), n.lastIndex > 0 && (!n.multiline || n.multiline && XE(s, n.lastIndex - 1) !== `
`) && (P = "(?: " + P + ")", I = " " + I, D++), h = new RegExp("^(?:" + P + ")", _)), Ma && (h = new RegExp("^" + P + "$(?!\\s)", _)), Fa && (y = n.lastIndex), l = on(Mi, O ? h : n, I), O ? l ? (l.input = Qo(l.input, D), l[0] = Qo(l[0], D), l.index = n.lastIndex, n.lastIndex += l[0].length) : n.lastIndex = 0 : Fa && l && (n.lastIndex = n.global ? l.index + l[0].length : y), Ma && l && l.length > 1 && on(HE, l[0], h, function() {
    for (a = 1; a < arguments.length - 2; a++)
      arguments[a] === void 0 && (l[a] = void 0);
  }), l && E)
    for (l.groups = g = WE(null), a = 0; a < E.length; a++)
      p = E[a], g[p[0]] = l[p[1]];
  return l;
});
var Is = La, JE = yt, Cl = Is;
JE({ target: "RegExp", proto: !0, forced: /./.exec !== Cl }, {
  exec: Cl
});
var Ll = Nt, Fl = Sr, QE = Is, Ml = Ve, sp = ot, eT = Xn, tT = sp("species"), ea = RegExp.prototype, up = function(r, e, n, i) {
  var s = sp(r), c = !Ml(function() {
    var l = {};
    return l[s] = function() {
      return 7;
    }, ""[r](l) !== 7;
  }), v = c && !Ml(function() {
    var l = !1, a = /a/;
    return r === "split" && (a = {}, a.constructor = {}, a.constructor[tT] = function() {
      return a;
    }, a.flags = "", a[s] = /./[s]), a.exec = function() {
      return l = !0, null;
    }, a[s](""), !l;
  });
  if (!c || !v || n) {
    var h = /./[s], y = e(s, ""[r], function(l, a, g, p, E) {
      var O = a.exec;
      return O === QE || O === ea.exec ? c && !E ? { done: !0, value: Ll(h, a, g, p) } : { done: !0, value: Ll(l, g, a, p) } : { done: !1 };
    });
    Fl(String.prototype, r, y[0]), Fl(ea, s, y[1]);
  }
  i && eT(ea[s], "sham", !0);
}, rT = wf, nT = Ha, iT = TypeError, oT = function(r) {
  if (rT(r))
    return r;
  throw new iT(nT(r) + " is not a constructor");
}, kl = Dt, aT = oT, sT = zn, uT = ot, lT = uT("species"), cT = function(r, e) {
  var n = kl(r).constructor, i;
  return n === void 0 || sT(i = kl(n)[lT]) ? e : aT(i);
}, fT = nf.charAt, lp = function(r, e, n) {
  return e + (n ? fT(r, e).length : 1);
}, Bl = Nt, pT = Dt, hT = Xe, dT = Er, gT = Is, vT = TypeError, cp = function(r, e) {
  var n = r.exec;
  if (hT(n)) {
    var i = Bl(n, r, e);
    return i !== null && pT(i), i;
  }
  if (dT(r) === "RegExp")
    return Bl(gT, r, e);
  throw new vT("RegExp#exec called on incompatible receiver");
}, ta = Nt, fp = Be, mT = up, yT = Dt, wT = zn, bT = vn, ET = cT, TT = lp, ST = rs, Ul = ur, OT = Xa, Dl = cp, $T = op, IT = Ve, en = $T.UNSUPPORTED_Y, AT = 4294967295, _T = Math.min, ra = fp([].push), na = fp("".slice), xT = !IT(function() {
  var r = /(?:)/, e = r.exec;
  r.exec = function() {
    return e.apply(this, arguments);
  };
  var n = "ab".split(r);
  return n.length !== 2 || n[0] !== "a" || n[1] !== "b";
}), jl = "abbc".split(/(b)*/)[1] === "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
"test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
".".split(/()()/).length > 1 || "".split(/.?/).length;
mT("split", function(r, e, n) {
  var i = "0".split(void 0, 0).length ? function(s, c) {
    return s === void 0 && c === 0 ? [] : ta(e, this, s, c);
  } : e;
  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function(c, v) {
      var h = bT(this), y = wT(c) ? void 0 : OT(c, r);
      return y ? ta(y, c, h, v) : ta(i, Ul(h), c, v);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function(s, c) {
      var v = yT(this), h = Ul(s);
      if (!jl) {
        var y = n(i, v, h, c, i !== e);
        if (y.done)
          return y.value;
      }
      var l = ET(v, RegExp), a = v.unicode, g = (v.ignoreCase ? "i" : "") + (v.multiline ? "m" : "") + (v.unicode ? "u" : "") + (en ? "g" : "y"), p = new l(en ? "^(?:" + v.source + ")" : v, g), E = c === void 0 ? AT : c >>> 0;
      if (E === 0)
        return [];
      if (h.length === 0)
        return Dl(p, h) === null ? [h] : [];
      for (var O = 0, _ = 0, P = []; _ < h.length; ) {
        p.lastIndex = en ? 0 : _;
        var D = Dl(p, en ? na(h, _) : h), I;
        if (D === null || (I = _T(ST(p.lastIndex + (en ? _ : 0)), h.length)) === O)
          _ = TT(h, _, a);
        else {
          if (ra(P, na(h, O, _)), P.length === E)
            return P;
          for (var x = 1; x <= D.length - 1; x++)
            if (ra(P, D[x]), P.length === E)
              return P;
          _ = O = I;
        }
      }
      return ra(P, na(h, O)), P;
    }
  ];
}, jl || !xT, en);
var As = Be, NT = Tr, PT = Math.floor, ia = As("".charAt), RT = As("".replace), oa = As("".slice), CT = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, LT = /\$([$&'`]|\d{1,2})/g, FT = function(r, e, n, i, s, c) {
  var v = n + r.length, h = i.length, y = LT;
  return s !== void 0 && (s = NT(s), y = CT), RT(c, y, function(l, a) {
    var g;
    switch (ia(a, 0)) {
      case "$":
        return "$";
      case "&":
        return r;
      case "`":
        return oa(e, 0, n);
      case "'":
        return oa(e, v);
      case "<":
        g = s[oa(a, 1, -1)];
        break;
      default:
        var p = +a;
        if (p === 0)
          return l;
        if (p > h) {
          var E = PT(p / 10);
          return E === 0 ? l : E <= h ? i[E - 1] === void 0 ? ia(a, 1) : i[E - 1] + ia(a, 1) : l;
        }
        g = i[p - 1];
    }
    return g === void 0 ? "" : g;
  });
}, MT = Bf, Gl = Nt, ao = Be, kT = up, BT = Ve, UT = Dt, DT = Xe, jT = zn, GT = Hi, WT = rs, tn = ur, VT = vn, qT = lp, zT = Xa, HT = FT, XT = cp, YT = ot, ka = YT("replace"), KT = Math.max, ZT = Math.min, JT = ao([].concat), aa = ao([].push), Wl = ao("".indexOf), Vl = ao("".slice), QT = function(r) {
  return r === void 0 ? r : String(r);
}, eS = function() {
  return "a".replace(/./, "$0") === "$0";
}(), ql = function() {
  return /./[ka] ? /./[ka]("a", "$0") === "" : !1;
}(), tS = !BT(function() {
  var r = /./;
  return r.exec = function() {
    var e = [];
    return e.groups = { a: "7" }, e;
  }, "".replace(r, "$<a>") !== "7";
});
kT("replace", function(r, e, n) {
  var i = ql ? "$" : "$0";
  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function(c, v) {
      var h = VT(this), y = jT(c) ? void 0 : zT(c, ka);
      return y ? Gl(y, c, h, v) : Gl(e, tn(h), c, v);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function(s, c) {
      var v = UT(this), h = tn(s);
      if (typeof c == "string" && Wl(c, i) === -1 && Wl(c, "$<") === -1) {
        var y = n(e, v, h, c);
        if (y.done)
          return y.value;
      }
      var l = DT(c);
      l || (c = tn(c));
      var a = v.global, g;
      a && (g = v.unicode, v.lastIndex = 0);
      for (var p = [], E; E = XT(v, h), !(E === null || (aa(p, E), !a)); ) {
        var O = tn(E[0]);
        O === "" && (v.lastIndex = qT(h, WT(v.lastIndex), g));
      }
      for (var _ = "", P = 0, D = 0; D < p.length; D++) {
        E = p[D];
        for (var I = tn(E[0]), x = KT(ZT(GT(E.index), h.length), 0), F = [], R, V = 1; V < E.length; V++)
          aa(F, QT(E[V]));
        var z = E.groups;
        if (l) {
          var G = JT([I], F, x, h);
          z !== void 0 && aa(G, z), R = tn(MT(c, void 0, G));
        } else
          R = HT(I, h, x, F, z, c);
        x >= P && (_ += Vl(h, P, x) + R, P = x + I.length);
      }
      return _ + Vl(h, P);
    }
  ];
}, !tS || !eS || ql);
var rS = yt, nS = gs.filter, iS = Ts, oS = iS("filter");
rS({ target: "Array", proto: !0, forced: !oS }, {
  filter: function(e) {
    return nS(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var aS = Vi, sS = Tr, uS = ji, lS = Xi, zl = TypeError, Hl = "Reduce of empty array with no initial value", Xl = function(r) {
  return function(e, n, i, s) {
    var c = sS(e), v = uS(c), h = lS(c);
    if (aS(n), h === 0 && i < 2)
      throw new zl(Hl);
    var y = r ? h - 1 : 0, l = r ? -1 : 1;
    if (i < 2)
      for (; ; ) {
        if (y in v) {
          s = v[y], y += l;
          break;
        }
        if (y += l, r ? y < 0 : h <= y)
          throw new zl(Hl);
      }
    for (; r ? y >= 0 : h > y; y += l)
      y in v && (s = n(s, v[y], y, c));
    return s;
  };
}, cS = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: Xl(!1),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: Xl(!0)
}, fS = Ve, pS = function(r, e) {
  var n = [][r];
  return !!n && fS(function() {
    n.call(null, e || function() {
      return 1;
    }, 1);
  });
}, hS = et, dS = Er, gS = dS(hS.process) === "process", vS = yt, mS = cS.left, yS = pS, Yl = Wi, wS = gS, bS = !wS && Yl > 79 && Yl < 83, ES = bS || !yS("reduce");
vS({ target: "Array", proto: !0, forced: ES }, {
  reduce: function(e) {
    var n = arguments.length;
    return mS(this, e, n, n > 1 ? arguments[1] : void 0);
  }
});
var TS = TypeError, SS = 9007199254740991, OS = function(r) {
  if (r > SS)
    throw TS("Maximum allowed index exceeded");
  return r;
}, $S = mt, IS = Ot, AS = qn, _S = function(r, e, n) {
  $S ? IS.f(r, e, AS(0, n)) : r[e] = n;
}, xS = yt, NS = Ve, PS = hs, RS = sr, CS = Tr, LS = Xi, Kl = OS, Zl = _S, FS = bf, MS = Ts, kS = ot, BS = Wi, pp = kS("isConcatSpreadable"), US = BS >= 51 || !NS(function() {
  var r = [];
  return r[pp] = !1, r.concat()[0] !== r;
}), DS = function(r) {
  if (!RS(r))
    return !1;
  var e = r[pp];
  return e !== void 0 ? !!e : PS(r);
}, jS = !US || !MS("concat");
xS({ target: "Array", proto: !0, arity: 1, forced: jS }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function(e) {
    var n = CS(this), i = FS(n, 0), s = 0, c, v, h, y, l;
    for (c = -1, h = arguments.length; c < h; c++)
      if (l = c === -1 ? n : arguments[c], DS(l))
        for (y = LS(l), Kl(s + y), v = 0; v < y; v++, s++)
          v in l && Zl(i, s, l[v]);
      else
        Kl(s + 1), Zl(i, s++, l);
    return i.length = s, i;
  }
});
Object.defineProperty(bn, "__esModule", {
  value: !0
});
bn.encodePath = GS;
bn.basename = WS;
bn.dirname = VS;
bn.joinPaths = Ba;
bn.isSamePath = qS;
function GS(r) {
  return r && r.split("/").map(encodeURIComponent).join("/");
}
function WS(r) {
  return r.replace(/\\/g, "/").replace(/.*\//, "");
}
function VS(r) {
  return r.replace(/\\/g, "/").replace(/\/[^\/]*$/, "");
}
function Ba() {
  for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
    e[n] = arguments[n];
  if (arguments.length < 1)
    return "";
  var i = e.filter(function(a) {
    return a.length > 0;
  });
  if (i.length < 1)
    return "";
  var s = i[i.length - 1], c = i[0].charAt(0) === "/", v = s.charAt(s.length - 1) === "/", h = i.reduce(function(a, g) {
    return a.concat(g.split("/"));
  }, []), y = !c, l = h.reduce(function(a, g) {
    return g === "" ? a : y ? (y = !1, a + g) : a + "/" + g;
  }, "");
  return v ? l + "/" : l;
}
function qS(r, e) {
  var n = (r || "").split("/").filter(function(s) {
    return s !== ".";
  }), i = (e || "").split("/").filter(function(s) {
    return s !== ".";
  });
  return r = Ba.apply(void 0, n), e = Ba.apply(void 0, i), r === e;
}
/*! For license information please see index.js.LICENSE.txt */
var zS = { 2: (r) => {
  function e(s, c, v) {
    s instanceof RegExp && (s = n(s, v)), c instanceof RegExp && (c = n(c, v));
    var h = i(s, c, v);
    return h && { start: h[0], end: h[1], pre: v.slice(0, h[0]), body: v.slice(h[0] + s.length, h[1]), post: v.slice(h[1] + c.length) };
  }
  function n(s, c) {
    var v = c.match(s);
    return v ? v[0] : null;
  }
  function i(s, c, v) {
    var h, y, l, a, g, p = v.indexOf(s), E = v.indexOf(c, p + 1), O = p;
    if (p >= 0 && E > 0) {
      for (h = [], l = v.length; O >= 0 && !g; )
        O == p ? (h.push(O), p = v.indexOf(s, O + 1)) : h.length == 1 ? g = [h.pop(), E] : ((y = h.pop()) < l && (l = y, a = E), E = v.indexOf(c, O + 1)), O = p < E && p >= 0 ? p : E;
      h.length && (g = [l, a]);
    }
    return g;
  }
  r.exports = e, e.range = i;
}, 101: function(r, e, n) {
  var i;
  r = n.nmd(r), function(s) {
    var c = (r && r.exports, typeof ai == "object" && ai);
    c.global !== c && c.window;
    var v = function(g) {
      this.message = g;
    };
    (v.prototype = new Error()).name = "InvalidCharacterError";
    var h = function(g) {
      throw new v(g);
    }, y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = /[\t\n\f\r ]/g, a = { encode: function(g) {
      g = String(g), /[^\0-\xFF]/.test(g) && h("The string to be encoded contains characters outside of the Latin1 range.");
      for (var p, E, O, _, P = g.length % 3, D = "", I = -1, x = g.length - P; ++I < x; )
        p = g.charCodeAt(I) << 16, E = g.charCodeAt(++I) << 8, O = g.charCodeAt(++I), D += y.charAt((_ = p + E + O) >> 18 & 63) + y.charAt(_ >> 12 & 63) + y.charAt(_ >> 6 & 63) + y.charAt(63 & _);
      return P == 2 ? (p = g.charCodeAt(I) << 8, E = g.charCodeAt(++I), D += y.charAt((_ = p + E) >> 10) + y.charAt(_ >> 4 & 63) + y.charAt(_ << 2 & 63) + "=") : P == 1 && (_ = g.charCodeAt(I), D += y.charAt(_ >> 2) + y.charAt(_ << 4 & 63) + "=="), D;
    }, decode: function(g) {
      var p = (g = String(g).replace(l, "")).length;
      p % 4 == 0 && (p = (g = g.replace(/==?$/, "")).length), (p % 4 == 1 || /[^+a-zA-Z0-9/]/.test(g)) && h("Invalid character: the string to be decoded is not correctly encoded.");
      for (var E, O, _ = 0, P = "", D = -1; ++D < p; )
        O = y.indexOf(g.charAt(D)), E = _ % 4 ? 64 * E + O : O, _++ % 4 && (P += String.fromCharCode(255 & E >> (-2 * _ & 6)));
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
      for (var v = i[c] << 16 | i[c + 1] << 8 | i[c + 2], h = 0; h < 4; h++)
        8 * c + 6 * h <= 8 * i.length ? s.push(e.charAt(v >>> 6 * (3 - h) & 63)) : s.push("=");
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
  }, e.merge = function(c, v, h) {
    if (v) {
      const y = Object.keys(v), l = y.length;
      for (let a = 0; a < l; a++)
        c[y[a]] = h === "strict" ? [v[y[a]]] : v[y[a]];
    }
  }, e.getValue = function(c) {
    return e.isExist(c) ? c : "";
  }, e.isName = function(c) {
    return s.exec(c) != null;
  }, e.getAllMatches = function(c, v) {
    const h = [];
    let y = v.exec(c);
    for (; y; ) {
      const l = [];
      l.startIndex = v.lastIndex - y[0].length;
      const a = y.length;
      for (let g = 0; g < a; g++)
        l.push(y[g]);
      h.push(l), y = v.exec(c);
    }
    return h;
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
        const R = I.substr(F, x - F);
        if (x > 5 && R === "xml")
          return O("InvalidXml", "XML declaration allowed only at the start of the document.", P(I, x));
        if (I[x] == "?" && I[x + 1] == ">") {
          x++;
          break;
        }
      }
    return x;
  }
  function h(I, x) {
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
    let R = !1, V = !1;
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
            G = h(I, G);
            continue;
          }
          {
            let Z = !1;
            I[G] === "/" && (Z = !0, G++);
            let H = "";
            for (; G < I.length && I[G] !== ">" && I[G] !== " " && I[G] !== "	" && I[G] !== `
` && I[G] !== "\r"; G++)
              H += I[G];
            if (H = H.trim(), H[H.length - 1] === "/" && (H = H.substring(0, H.length - 1), G--), z = H, !i.isName(z)) {
              let re;
              return re = H.trim().length === 0 ? "Invalid space after '<'." : "Tag '" + H + "' is an invalid name.", O("InvalidTag", re, P(I, G));
            }
            const K = a(I, G);
            if (K === !1)
              return O("InvalidAttr", "Attributes for '" + H + "' have open quote.", P(I, G));
            let q = K.value;
            if (G = K.index, q[q.length - 1] === "/") {
              const re = G - q.length;
              q = q.substring(0, q.length - 1);
              const pe = p(q, x);
              if (pe !== !0)
                return O(pe.err.code, pe.err.msg, P(I, re + pe.err.line));
              R = !0;
            } else if (Z) {
              if (!K.tagClosed)
                return O("InvalidTag", "Closing tag '" + H + "' doesn't have proper closing.", P(I, G));
              if (q.trim().length > 0)
                return O("InvalidTag", "Closing tag '" + H + "' can't have attributes or invalid starting.", P(I, X));
              {
                const re = F.pop();
                if (H !== re.tagName) {
                  let pe = P(I, re.tagStartPos);
                  return O("InvalidTag", "Expected closing tag '" + re.tagName + "' (opened in line " + pe.line + ", col " + pe.col + ") instead of closing tag '" + H + "'.", P(I, X));
                }
                F.length == 0 && (V = !0);
              }
            } else {
              const re = p(q, x);
              if (re !== !0)
                return O(re.err.code, re.err.msg, P(I, G - q.length + re.err.line));
              if (V === !0)
                return O("InvalidXml", "Multiple possible root nodes found.", P(I, G));
              x.unpairedTags.indexOf(H) !== -1 || F.push({ tagName: H, tagStartPos: X }), R = !0;
            }
            for (G++; G < I.length; G++)
              if (I[G] === "<") {
                if (I[G + 1] === "!") {
                  G++, G = h(I, G);
                  continue;
                }
                if (I[G + 1] !== "?")
                  break;
                if (G = v(I, ++G), G.err)
                  return G;
              } else if (I[G] === "&") {
                const re = E(I, G);
                if (re == -1)
                  return O("InvalidChar", "char '&' is not expected.", P(I, G));
                G = re;
              } else if (V === !0 && !c(I[G]))
                return O("InvalidXml", "Extra text at the end", P(I, G));
            I[G] === "<" && G--;
          }
        }
      }
    var z;
    return R ? F.length == 1 ? O("InvalidTag", "Unclosed tag '" + F[0].tagName + "'.", P(I, F[0].tagStartPos)) : !(F.length > 0) || O("InvalidXml", "Invalid '" + JSON.stringify(F.map((G) => G.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 }) : O("InvalidXml", "Start tag expected.", 1);
  };
  const y = '"', l = "'";
  function a(I, x) {
    let F = "", R = "", V = !1;
    for (; x < I.length; x++) {
      if (I[x] === y || I[x] === l)
        R === "" ? R = I[x] : R !== I[x] || (R = "");
      else if (I[x] === ">" && R === "") {
        V = !0;
        break;
      }
      F += I[x];
    }
    return R === "" && { value: F, index: x, tagClosed: V };
  }
  const g = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
  function p(I, x) {
    const F = i.getAllMatches(I, g), R = {};
    for (let V = 0; V < F.length; V++) {
      if (F[V][1].length === 0)
        return O("InvalidAttr", "Attribute '" + F[V][2] + "' has no space in starting.", D(F[V]));
      if (F[V][3] !== void 0 && F[V][4] === void 0)
        return O("InvalidAttr", "Attribute '" + F[V][2] + "' is without value.", D(F[V]));
      if (F[V][3] === void 0 && !x.allowBooleanAttributes)
        return O("InvalidAttr", "boolean attribute '" + F[V][2] + "' is not allowed.", D(F[V]));
      const z = F[V][2];
      if (!_(z))
        return O("InvalidAttr", "Attribute '" + z + "' is an invalid name.", D(F[V]));
      if (R.hasOwnProperty(z))
        return O("InvalidAttr", "Attribute '" + z + "' is repeated.", D(F[V]));
      R[z] = 1;
    }
    return !0;
  }
  function E(I, x) {
    if (I[++x] === ";")
      return -1;
    if (I[x] === "#")
      return function(R, V) {
        let z = /\d/;
        for (R[V] === "x" && (V++, z = /[\da-fA-F]/); V < R.length; V++) {
          if (R[V] === ";")
            return V;
          if (!R[V].match(z))
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
    } : (this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = y), this.processTextOrObjNode = v, this.options.format ? (this.indentate = h, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
      return "";
    }, this.tagEndChar = ">", this.newLine = "");
  }
  function v(l, a, g) {
    const p = this.j2x(l, g + 1);
    return l[this.options.textNodeName] !== void 0 && Object.keys(l).length === 1 ? this.buildTextValNode(l[this.options.textNodeName], a, p.attrStr, g) : this.buildObjectNode(p.val, a, p.attrStr, g);
  }
  function h(l) {
    return this.options.indentBy.repeat(l);
  }
  function y(l) {
    return !(!l.startsWith(this.options.attributeNamePrefix) || l === this.options.textNodeName) && l.substr(this.attrPrefixLen);
  }
  c.prototype.build = function(l) {
    return this.options.preserveOrder ? i(l, this.options) : (Array.isArray(l) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (l = { [this.options.arrayNodeName]: l }), this.j2x(l, 0).val);
  }, c.prototype.j2x = function(l, a) {
    let g = "", p = "";
    for (let E in l)
      if (l[E] === void 0)
        this.isAttribute(E) && (p += "");
      else if (l[E] === null)
        this.isAttribute(E) ? p += "" : E[0] === "?" ? p += this.indentate(a) + "<" + E + "?" + this.tagEndChar : p += this.indentate(a) + "<" + E + "/" + this.tagEndChar;
      else if (l[E] instanceof Date)
        p += this.buildTextValNode(l[E], E, "", a);
      else if (typeof l[E] != "object") {
        const O = this.isAttribute(E);
        if (O)
          g += this.buildAttrPairStr(O, "" + l[E]);
        else if (E === this.options.textNodeName) {
          let _ = this.options.tagValueProcessor(E, "" + l[E]);
          p += this.replaceEntitiesValue(_);
        } else
          p += this.buildTextValNode(l[E], E, "", a);
      } else if (Array.isArray(l[E])) {
        const O = l[E].length;
        let _ = "";
        for (let P = 0; P < O; P++) {
          const D = l[E][P];
          D === void 0 || (D === null ? E[0] === "?" ? p += this.indentate(a) + "<" + E + "?" + this.tagEndChar : p += this.indentate(a) + "<" + E + "/" + this.tagEndChar : typeof D == "object" ? this.options.oneListGroup ? _ += this.j2x(D, a + 1).val : _ += this.processTextOrObjNode(D, E, a) : _ += this.buildTextValNode(D, E, "", a));
        }
        this.options.oneListGroup && (_ = this.buildObjectNode(_, E, "", a)), p += _;
      } else if (this.options.attributesGroupName && E === this.options.attributesGroupName) {
        const O = Object.keys(l[E]), _ = O.length;
        for (let P = 0; P < _; P++)
          g += this.buildAttrPairStr(O[P], "" + l[E][O[P]]);
      } else
        p += this.processTextOrObjNode(l[E], E, a);
    return { attrStr: g, val: p };
  }, c.prototype.buildAttrPairStr = function(l, a) {
    return a = this.options.attributeValueProcessor(l, "" + a), a = this.replaceEntitiesValue(a), this.options.suppressBooleanAttributes && a === "true" ? " " + l : " " + l + '="' + a + '"';
  }, c.prototype.buildObjectNode = function(l, a, g, p) {
    if (l === "")
      return a[0] === "?" ? this.indentate(p) + "<" + a + g + "?" + this.tagEndChar : this.indentate(p) + "<" + a + g + this.closeTag(a) + this.tagEndChar;
    {
      let E = "</" + a + this.tagEndChar, O = "";
      return a[0] === "?" && (O = "?", E = ""), !g && g !== "" || l.indexOf("<") !== -1 ? this.options.commentPropName !== !1 && a === this.options.commentPropName && O.length === 0 ? this.indentate(p) + "<!--".concat(l, "-->") + this.newLine : this.indentate(p) + "<" + a + g + O + this.tagEndChar + l + this.indentate(p) + E : this.indentate(p) + "<" + a + g + O + ">" + l + E;
    }
  }, c.prototype.closeTag = function(l) {
    let a = "";
    return this.options.unpairedTags.indexOf(l) !== -1 ? this.options.suppressUnpairedNode || (a = "/") : a = this.options.suppressEmptyNode ? "/" : "></".concat(l), a;
  }, c.prototype.buildTextValNode = function(l, a, g, p) {
    if (this.options.cdataPropName !== !1 && a === this.options.cdataPropName)
      return this.indentate(p) + "<![CDATA[".concat(l, "]]>") + this.newLine;
    if (this.options.commentPropName !== !1 && a === this.options.commentPropName)
      return this.indentate(p) + "<!--".concat(l, "-->") + this.newLine;
    if (a[0] === "?")
      return this.indentate(p) + "<" + a + g + "?" + this.tagEndChar;
    {
      let E = this.options.tagValueProcessor(a, l);
      return E = this.replaceEntitiesValue(E), E === "" ? this.indentate(p) + "<" + a + g + this.closeTag(a) + this.tagEndChar : this.indentate(p) + "<" + a + g + ">" + E + "</" + a + this.tagEndChar;
    }
  }, c.prototype.replaceEntitiesValue = function(l) {
    if (l && l.length > 0 && this.options.processEntities)
      for (let a = 0; a < this.options.entities.length; a++) {
        const g = this.options.entities[a];
        l = l.replace(g.regex, g.val);
      }
    return l;
  }, r.exports = c;
}, 87: (r) => {
  function e(v, h, y, l) {
    let a = "", g = !1;
    for (let p = 0; p < v.length; p++) {
      const E = v[p], O = n(E);
      let _ = "";
      if (_ = y.length === 0 ? O : "".concat(y, ".").concat(O), O === h.textNodeName) {
        let F = E[O];
        s(_, h) || (F = h.tagValueProcessor(O, F), F = c(F, h)), g && (a += l), a += F, g = !1;
        continue;
      }
      if (O === h.cdataPropName) {
        g && (a += l), a += "<![CDATA[".concat(E[O][0][h.textNodeName], "]]>"), g = !1;
        continue;
      }
      if (O === h.commentPropName) {
        a += l + "<!--".concat(E[O][0][h.textNodeName], "-->"), g = !0;
        continue;
      }
      if (O[0] === "?") {
        const F = i(E[":@"], h), R = O === "?xml" ? "" : l;
        let V = E[O][0][h.textNodeName];
        V = V.length !== 0 ? " " + V : "", a += R + "<".concat(O).concat(V).concat(F, "?>"), g = !0;
        continue;
      }
      let P = l;
      P !== "" && (P += h.indentBy);
      const D = i(E[":@"], h), I = l + "<".concat(O).concat(D), x = e(E[O], h, _, P);
      h.unpairedTags.indexOf(O) !== -1 ? h.suppressUnpairedNode ? a += I + ">" : a += I + "/>" : x && x.length !== 0 || !h.suppressEmptyNode ? x && x.endsWith(">") ? a += I + ">".concat(x).concat(l, "</").concat(O, ">") : (a += I + ">", x && l !== "" && (x.includes("/>") || x.includes("</")) ? a += l + h.indentBy + x + l : a += x, a += "</".concat(O, ">")) : a += I + "/>", g = !0;
    }
    return a;
  }
  function n(v) {
    const h = Object.keys(v);
    for (let y = 0; y < h.length; y++) {
      const l = h[y];
      if (l !== ":@")
        return l;
    }
  }
  function i(v, h) {
    let y = "";
    if (v && !h.ignoreAttributes)
      for (let l in v) {
        let a = h.attributeValueProcessor(l, v[l]);
        a = c(a, h), a === !0 && h.suppressBooleanAttributes ? y += " ".concat(l.substr(h.attributeNamePrefix.length)) : y += " ".concat(l.substr(h.attributeNamePrefix.length), '="').concat(a, '"');
      }
    return y;
  }
  function s(v, h) {
    let y = (v = v.substr(0, v.length - h.textNodeName.length - 1)).substr(v.lastIndexOf(".") + 1);
    for (let l in h.stopNodes)
      if (h.stopNodes[l] === v || h.stopNodes[l] === "*." + y)
        return !0;
    return !1;
  }
  function c(v, h) {
    if (v && v.length > 0 && h.processEntities)
      for (let y = 0; y < h.entities.length; y++) {
        const l = h.entities[y];
        v = v.replace(l.regex, l.val);
      }
    return v;
  }
  r.exports = function(v, h) {
    let y = "";
    return h.format && h.indentBy.length > 0 && (y = `
`), e(v, h, "", y);
  };
}, 193: (r, e, n) => {
  const i = n(705);
  function s(g, p) {
    let E = "";
    for (; p < g.length && g[p] !== "'" && g[p] !== '"'; p++)
      E += g[p];
    if (E = E.trim(), E.indexOf(" ") !== -1)
      throw new Error("External entites are not supported");
    const O = g[p++];
    let _ = "";
    for (; p < g.length && g[p] !== O; p++)
      _ += g[p];
    return [E, _, p];
  }
  function c(g, p) {
    return g[p + 1] === "!" && g[p + 2] === "-" && g[p + 3] === "-";
  }
  function v(g, p) {
    return g[p + 1] === "!" && g[p + 2] === "E" && g[p + 3] === "N" && g[p + 4] === "T" && g[p + 5] === "I" && g[p + 6] === "T" && g[p + 7] === "Y";
  }
  function h(g, p) {
    return g[p + 1] === "!" && g[p + 2] === "E" && g[p + 3] === "L" && g[p + 4] === "E" && g[p + 5] === "M" && g[p + 6] === "E" && g[p + 7] === "N" && g[p + 8] === "T";
  }
  function y(g, p) {
    return g[p + 1] === "!" && g[p + 2] === "A" && g[p + 3] === "T" && g[p + 4] === "T" && g[p + 5] === "L" && g[p + 6] === "I" && g[p + 7] === "S" && g[p + 8] === "T";
  }
  function l(g, p) {
    return g[p + 1] === "!" && g[p + 2] === "N" && g[p + 3] === "O" && g[p + 4] === "T" && g[p + 5] === "A" && g[p + 6] === "T" && g[p + 7] === "I" && g[p + 8] === "O" && g[p + 9] === "N";
  }
  function a(g) {
    if (i.isName(g))
      return g;
    throw new Error("Invalid entity name ".concat(g));
  }
  r.exports = function(g, p) {
    const E = {};
    if (g[p + 3] !== "O" || g[p + 4] !== "C" || g[p + 5] !== "T" || g[p + 6] !== "Y" || g[p + 7] !== "P" || g[p + 8] !== "E")
      throw new Error("Invalid Tag instead of DOCTYPE");
    {
      p += 9;
      let O = 1, _ = !1, P = !1, D = "";
      for (; p < g.length; p++)
        if (g[p] !== "<" || P)
          if (g[p] === ">") {
            if (P ? g[p - 1] === "-" && g[p - 2] === "-" && (P = !1, O--) : O--, O === 0)
              break;
          } else
            g[p] === "[" ? _ = !0 : D += g[p];
        else {
          if (_ && v(g, p))
            p += 7, [entityName, val, p] = s(g, p + 1), val.indexOf("&") === -1 && (E[a(entityName)] = { regx: RegExp("&".concat(entityName, ";"), "g"), val });
          else if (_ && h(g, p))
            p += 8;
          else if (_ && y(g, p))
            p += 8;
          else if (_ && l(g, p))
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
  const i = n(705), s = n(365), c = n(193), v = n(494);
  function h(R) {
    const V = Object.keys(R);
    for (let z = 0; z < V.length; z++) {
      const G = V[z];
      this.lastEntities[G] = { regex: new RegExp("&" + G + ";", "g"), val: R[G] };
    }
  }
  function y(R, V, z, G, X, Z, H) {
    if (R !== void 0 && (this.options.trimValues && !G && (R = R.trim()), R.length > 0)) {
      H || (R = this.replaceEntitiesValue(R));
      const K = this.options.tagValueProcessor(V, R, z, X, Z);
      return K == null ? R : typeof K != typeof R || K !== R ? K : this.options.trimValues || R.trim() === R ? F(R, this.options.parseTagValue, this.options.numberParseOptions) : R;
    }
  }
  function l(R) {
    if (this.options.removeNSPrefix) {
      const V = R.split(":"), z = R.charAt(0) === "/" ? "/" : "";
      if (V[0] === "xmlns")
        return "";
      V.length === 2 && (R = z + V[1]);
    }
    return R;
  }
  "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, i.nameRegexp);
  const a = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
  function g(R, V, z) {
    if (!this.options.ignoreAttributes && typeof R == "string") {
      const G = i.getAllMatches(R, a), X = G.length, Z = {};
      for (let H = 0; H < X; H++) {
        const K = this.resolveNameSpace(G[H][1]);
        let q = G[H][4], re = this.options.attributeNamePrefix + K;
        if (K.length)
          if (this.options.transformAttributeName && (re = this.options.transformAttributeName(re)), re === "__proto__" && (re = "#__proto__"), q !== void 0) {
            this.options.trimValues && (q = q.trim()), q = this.replaceEntitiesValue(q);
            const pe = this.options.attributeValueProcessor(K, q, V);
            Z[re] = pe == null ? q : typeof pe != typeof q || pe !== q ? pe : F(q, this.options.parseAttributeValue, this.options.numberParseOptions);
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
  const p = function(R) {
    R = R.replace(/\r\n?/g, `
`);
    const V = new s("!xml");
    let z = V, G = "", X = "";
    for (let Z = 0; Z < R.length; Z++)
      if (R[Z] === "<")
        if (R[Z + 1] === "/") {
          const H = D(R, ">", Z, "Closing Tag is not closed.");
          let K = R.substring(Z + 2, H).trim();
          if (this.options.removeNSPrefix) {
            const pe = K.indexOf(":");
            pe !== -1 && (K = K.substr(pe + 1));
          }
          this.options.transformTagName && (K = this.options.transformTagName(K)), z && (G = this.saveTextToParentTag(G, z, X));
          const q = X.substring(X.lastIndexOf(".") + 1);
          if (K && this.options.unpairedTags.indexOf(K) !== -1)
            throw new Error("Unpaired tag can not be used as closing tag: </".concat(K, ">"));
          let re = 0;
          q && this.options.unpairedTags.indexOf(q) !== -1 ? (re = X.lastIndexOf(".", X.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : re = X.lastIndexOf("."), X = X.substring(0, re), z = this.tagsNodeStack.pop(), G = "", Z = H;
        } else if (R[Z + 1] === "?") {
          let H = I(R, Z, !1, "?>");
          if (!H)
            throw new Error("Pi Tag is not closed.");
          if (G = this.saveTextToParentTag(G, z, X), !(this.options.ignoreDeclaration && H.tagName === "?xml" || this.options.ignorePiTags)) {
            const K = new s(H.tagName);
            K.add(this.options.textNodeName, ""), H.tagName !== H.tagExp && H.attrExpPresent && (K[":@"] = this.buildAttributesMap(H.tagExp, X, H.tagName)), this.addChild(z, K, X);
          }
          Z = H.closeIndex + 1;
        } else if (R.substr(Z + 1, 3) === "!--") {
          const H = D(R, "-->", Z + 4, "Comment is not closed.");
          if (this.options.commentPropName) {
            const K = R.substring(Z + 4, H - 2);
            G = this.saveTextToParentTag(G, z, X), z.add(this.options.commentPropName, [{ [this.options.textNodeName]: K }]);
          }
          Z = H;
        } else if (R.substr(Z + 1, 2) === "!D") {
          const H = c(R, Z);
          this.docTypeEntities = H.entities, Z = H.i;
        } else if (R.substr(Z + 1, 2) === "![") {
          const H = D(R, "]]>", Z, "CDATA is not closed.") - 2, K = R.substring(Z + 9, H);
          if (G = this.saveTextToParentTag(G, z, X), this.options.cdataPropName)
            z.add(this.options.cdataPropName, [{ [this.options.textNodeName]: K }]);
          else {
            let q = this.parseTextData(K, z.tagname, X, !0, !1, !0);
            q == null && (q = ""), z.add(this.options.textNodeName, q);
          }
          Z = H + 2;
        } else {
          let H = I(R, Z, this.options.removeNSPrefix), K = H.tagName, q = H.tagExp, re = H.attrExpPresent, pe = H.closeIndex;
          this.options.transformTagName && (K = this.options.transformTagName(K)), z && G && z.tagname !== "!xml" && (G = this.saveTextToParentTag(G, z, X, !1));
          const Ae = z;
          if (Ae && this.options.unpairedTags.indexOf(Ae.tagname) !== -1 && (z = this.tagsNodeStack.pop(), X = X.substring(0, X.lastIndexOf("."))), K !== V.tagname && (X += X ? "." + K : K), this.isItStopNode(this.options.stopNodes, X, K)) {
            let ce = "";
            if (q.length > 0 && q.lastIndexOf("/") === q.length - 1)
              Z = H.closeIndex;
            else if (this.options.unpairedTags.indexOf(K) !== -1)
              Z = H.closeIndex;
            else {
              const me = this.readStopNodeData(R, K, pe + 1);
              if (!me)
                throw new Error("Unexpected end of ".concat(K));
              Z = me.i, ce = me.tagContent;
            }
            const Ee = new s(K);
            K !== q && re && (Ee[":@"] = this.buildAttributesMap(q, X, K)), ce && (ce = this.parseTextData(ce, K, X, !0, re, !0, !0)), X = X.substr(0, X.lastIndexOf(".")), Ee.add(this.options.textNodeName, ce), this.addChild(z, Ee, X);
          } else {
            if (q.length > 0 && q.lastIndexOf("/") === q.length - 1) {
              K[K.length - 1] === "/" ? (K = K.substr(0, K.length - 1), X = X.substr(0, X.length - 1), q = K) : q = q.substr(0, q.length - 1), this.options.transformTagName && (K = this.options.transformTagName(K));
              const ce = new s(K);
              K !== q && re && (ce[":@"] = this.buildAttributesMap(q, X, K)), this.addChild(z, ce, X), X = X.substr(0, X.lastIndexOf("."));
            } else {
              const ce = new s(K);
              this.tagsNodeStack.push(z), K !== q && re && (ce[":@"] = this.buildAttributesMap(q, X, K)), this.addChild(z, ce, X), z = ce;
            }
            G = "", Z = pe;
          }
        }
      else
        G += R[Z];
    return V.child;
  };
  function E(R, V, z) {
    const G = this.options.updateTag(V.tagname, z, V[":@"]);
    G === !1 || (typeof G == "string" && (V.tagname = G), R.addChild(V));
  }
  const O = function(R) {
    if (this.options.processEntities) {
      for (let V in this.docTypeEntities) {
        const z = this.docTypeEntities[V];
        R = R.replace(z.regx, z.val);
      }
      for (let V in this.lastEntities) {
        const z = this.lastEntities[V];
        R = R.replace(z.regex, z.val);
      }
      if (this.options.htmlEntities)
        for (let V in this.htmlEntities) {
          const z = this.htmlEntities[V];
          R = R.replace(z.regex, z.val);
        }
      R = R.replace(this.ampEntity.regex, this.ampEntity.val);
    }
    return R;
  };
  function _(R, V, z, G) {
    return R && (G === void 0 && (G = Object.keys(V.child).length === 0), (R = this.parseTextData(R, V.tagname, z, !1, !!V[":@"] && Object.keys(V[":@"]).length !== 0, G)) !== void 0 && R !== "" && V.add(this.options.textNodeName, R), R = ""), R;
  }
  function P(R, V, z) {
    const G = "*." + z;
    for (const X in R) {
      const Z = R[X];
      if (G === Z || V === Z)
        return !0;
    }
    return !1;
  }
  function D(R, V, z, G) {
    const X = R.indexOf(V, z);
    if (X === -1)
      throw new Error(G);
    return X + V.length - 1;
  }
  function I(R, V, z) {
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
    }(R, V + 1, arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ">");
    if (!G)
      return;
    let X = G.data;
    const Z = G.index, H = X.search(/\s/);
    let K = X, q = !0;
    if (H !== -1 && (K = X.substr(0, H).replace(/\s\s*$/, ""), X = X.substr(H + 1)), z) {
      const re = K.indexOf(":");
      re !== -1 && (K = K.substr(re + 1), q = K !== G.data.substr(re + 1));
    }
    return { tagName: K, tagExp: X, closeIndex: Z, attrExpPresent: q };
  }
  function x(R, V, z) {
    const G = z;
    let X = 1;
    for (; z < R.length; z++)
      if (R[z] === "<")
        if (R[z + 1] === "/") {
          const Z = D(R, ">", z, "".concat(V, " is not closed"));
          if (R.substring(z + 2, Z).trim() === V && (X--, X === 0))
            return { tagContent: R.substring(G, z), i: Z };
          z = Z;
        } else if (R[z + 1] === "?")
          z = D(R, "?>", z + 1, "StopNode is not closed.");
        else if (R.substr(z + 1, 3) === "!--")
          z = D(R, "-->", z + 3, "StopNode is not closed.");
        else if (R.substr(z + 1, 2) === "![")
          z = D(R, "]]>", z, "StopNode is not closed.") - 2;
        else {
          const Z = I(R, z, ">");
          Z && ((Z && Z.tagName) === V && Z.tagExp[Z.tagExp.length - 1] !== "/" && X++, z = Z.closeIndex);
        }
  }
  function F(R, V, z) {
    if (V && typeof R == "string") {
      const G = R.trim();
      return G === "true" || G !== "false" && v(R, z);
    }
    return i.isExist(R) ? R : "";
  }
  r.exports = class {
    constructor(R) {
      this.options = R, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = { apos: { regex: /&(apos|#39|#x27);/g, val: "'" }, gt: { regex: /&(gt|#62|#x3E);/g, val: ">" }, lt: { regex: /&(lt|#60|#x3C);/g, val: "<" }, quot: { regex: /&(quot|#34|#x22);/g, val: '"' } }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = { space: { regex: /&(nbsp|#160);/g, val: " " }, cent: { regex: /&(cent|#162);/g, val: "¢" }, pound: { regex: /&(pound|#163);/g, val: "£" }, yen: { regex: /&(yen|#165);/g, val: "¥" }, euro: { regex: /&(euro|#8364);/g, val: "€" }, copyright: { regex: /&(copy|#169);/g, val: "©" }, reg: { regex: /&(reg|#174);/g, val: "®" }, inr: { regex: /&(inr|#8377);/g, val: "₹" } }, this.addExternalEntities = h, this.parseXml = p, this.parseTextData = y, this.resolveNameSpace = l, this.buildAttributesMap = g, this.isItStopNode = P, this.replaceEntitiesValue = O, this.readStopNodeData = x, this.saveTextToParentTag = _, this.addChild = E;
    }
  };
}, 338: (r, e, n) => {
  const { buildOptions: i } = n(63), s = n(299), { prettify: c } = n(728), v = n(31);
  r.exports = class {
    constructor(h) {
      this.externalEntities = {}, this.options = i(h);
    }
    parse(h, y) {
      if (typeof h != "string") {
        if (!h.toString)
          throw new Error("XML data is accepted in String or Bytes[] form.");
        h = h.toString();
      }
      if (y) {
        y === !0 && (y = {});
        const g = v.validate(h, y);
        if (g !== !0)
          throw Error("".concat(g.err.msg, ":").concat(g.err.line, ":").concat(g.err.col));
      }
      const l = new s(this.options);
      l.addExternalEntities(this.externalEntities);
      const a = l.parseXml(h);
      return this.options.preserveOrder || a === void 0 ? a : c(a, this.options);
    }
    addEntity(h, y) {
      if (y.indexOf("&") !== -1)
        throw new Error("Entity value can't have '&'");
      if (h.indexOf("&") !== -1 || h.indexOf(";") !== -1)
        throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
      if (y === "&")
        throw new Error("An entity with value '&' is not permitted");
      this.externalEntities[h] = y;
    }
  };
}, 728: (r, e) => {
  function n(v, h, y) {
    let l;
    const a = {};
    for (let g = 0; g < v.length; g++) {
      const p = v[g], E = i(p);
      let O = "";
      if (O = y === void 0 ? E : y + "." + E, E === h.textNodeName)
        l === void 0 ? l = p[E] : l += "" + p[E];
      else {
        if (E === void 0)
          continue;
        if (p[E]) {
          let _ = n(p[E], h, O);
          const P = c(_, h);
          p[":@"] ? s(_, p[":@"], O, h) : Object.keys(_).length !== 1 || _[h.textNodeName] === void 0 || h.alwaysCreateTextNode ? Object.keys(_).length === 0 && (h.alwaysCreateTextNode ? _[h.textNodeName] = "" : _ = "") : _ = _[h.textNodeName], a[E] !== void 0 && a.hasOwnProperty(E) ? (Array.isArray(a[E]) || (a[E] = [a[E]]), a[E].push(_)) : h.isArray(E, O, P) ? a[E] = [_] : a[E] = _;
        }
      }
    }
    return typeof l == "string" ? l.length > 0 && (a[h.textNodeName] = l) : l !== void 0 && (a[h.textNodeName] = l), a;
  }
  function i(v) {
    const h = Object.keys(v);
    for (let y = 0; y < h.length; y++) {
      const l = h[y];
      if (l !== ":@")
        return l;
    }
  }
  function s(v, h, y, l) {
    if (h) {
      const a = Object.keys(h), g = a.length;
      for (let p = 0; p < g; p++) {
        const E = a[p];
        l.isArray(E, y + "." + E, !0, !0) ? v[E] = [h[E]] : v[E] = h[E];
      }
    }
  }
  function c(v, h) {
    const { textNodeName: y } = h, l = Object.keys(v).length;
    return l === 0 || !(l !== 1 || !v[y] && typeof v[y] != "boolean" && v[y] !== 0);
  }
  e.prettify = function(v, h) {
    return n(v, h);
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
  var i, s, c, v, h;
  i = n(298), s = n(526).utf8, c = n(135), v = n(526).bin, (h = function(y, l) {
    y.constructor == String ? y = l && l.encoding === "binary" ? v.stringToBytes(y) : s.stringToBytes(y) : c(y) ? y = Array.prototype.slice.call(y, 0) : Array.isArray(y) || y.constructor === Uint8Array || (y = y.toString());
    for (var a = i.bytesToWords(y), g = 8 * y.length, p = 1732584193, E = -271733879, O = -1732584194, _ = 271733878, P = 0; P < a.length; P++)
      a[P] = 16711935 & (a[P] << 8 | a[P] >>> 24) | 4278255360 & (a[P] << 24 | a[P] >>> 8);
    a[g >>> 5] |= 128 << g % 32, a[14 + (g + 64 >>> 9 << 4)] = g;
    var D = h._ff, I = h._gg, x = h._hh, F = h._ii;
    for (P = 0; P < a.length; P += 16) {
      var R = p, V = E, z = O, G = _;
      p = D(p, E, O, _, a[P + 0], 7, -680876936), _ = D(_, p, E, O, a[P + 1], 12, -389564586), O = D(O, _, p, E, a[P + 2], 17, 606105819), E = D(E, O, _, p, a[P + 3], 22, -1044525330), p = D(p, E, O, _, a[P + 4], 7, -176418897), _ = D(_, p, E, O, a[P + 5], 12, 1200080426), O = D(O, _, p, E, a[P + 6], 17, -1473231341), E = D(E, O, _, p, a[P + 7], 22, -45705983), p = D(p, E, O, _, a[P + 8], 7, 1770035416), _ = D(_, p, E, O, a[P + 9], 12, -1958414417), O = D(O, _, p, E, a[P + 10], 17, -42063), E = D(E, O, _, p, a[P + 11], 22, -1990404162), p = D(p, E, O, _, a[P + 12], 7, 1804603682), _ = D(_, p, E, O, a[P + 13], 12, -40341101), O = D(O, _, p, E, a[P + 14], 17, -1502002290), p = I(p, E = D(E, O, _, p, a[P + 15], 22, 1236535329), O, _, a[P + 1], 5, -165796510), _ = I(_, p, E, O, a[P + 6], 9, -1069501632), O = I(O, _, p, E, a[P + 11], 14, 643717713), E = I(E, O, _, p, a[P + 0], 20, -373897302), p = I(p, E, O, _, a[P + 5], 5, -701558691), _ = I(_, p, E, O, a[P + 10], 9, 38016083), O = I(O, _, p, E, a[P + 15], 14, -660478335), E = I(E, O, _, p, a[P + 4], 20, -405537848), p = I(p, E, O, _, a[P + 9], 5, 568446438), _ = I(_, p, E, O, a[P + 14], 9, -1019803690), O = I(O, _, p, E, a[P + 3], 14, -187363961), E = I(E, O, _, p, a[P + 8], 20, 1163531501), p = I(p, E, O, _, a[P + 13], 5, -1444681467), _ = I(_, p, E, O, a[P + 2], 9, -51403784), O = I(O, _, p, E, a[P + 7], 14, 1735328473), p = x(p, E = I(E, O, _, p, a[P + 12], 20, -1926607734), O, _, a[P + 5], 4, -378558), _ = x(_, p, E, O, a[P + 8], 11, -2022574463), O = x(O, _, p, E, a[P + 11], 16, 1839030562), E = x(E, O, _, p, a[P + 14], 23, -35309556), p = x(p, E, O, _, a[P + 1], 4, -1530992060), _ = x(_, p, E, O, a[P + 4], 11, 1272893353), O = x(O, _, p, E, a[P + 7], 16, -155497632), E = x(E, O, _, p, a[P + 10], 23, -1094730640), p = x(p, E, O, _, a[P + 13], 4, 681279174), _ = x(_, p, E, O, a[P + 0], 11, -358537222), O = x(O, _, p, E, a[P + 3], 16, -722521979), E = x(E, O, _, p, a[P + 6], 23, 76029189), p = x(p, E, O, _, a[P + 9], 4, -640364487), _ = x(_, p, E, O, a[P + 12], 11, -421815835), O = x(O, _, p, E, a[P + 15], 16, 530742520), p = F(p, E = x(E, O, _, p, a[P + 2], 23, -995338651), O, _, a[P + 0], 6, -198630844), _ = F(_, p, E, O, a[P + 7], 10, 1126891415), O = F(O, _, p, E, a[P + 14], 15, -1416354905), E = F(E, O, _, p, a[P + 5], 21, -57434055), p = F(p, E, O, _, a[P + 12], 6, 1700485571), _ = F(_, p, E, O, a[P + 3], 10, -1894986606), O = F(O, _, p, E, a[P + 10], 15, -1051523), E = F(E, O, _, p, a[P + 1], 21, -2054922799), p = F(p, E, O, _, a[P + 8], 6, 1873313359), _ = F(_, p, E, O, a[P + 15], 10, -30611744), O = F(O, _, p, E, a[P + 6], 15, -1560198380), E = F(E, O, _, p, a[P + 13], 21, 1309151649), p = F(p, E, O, _, a[P + 4], 6, -145523070), _ = F(_, p, E, O, a[P + 11], 10, -1120210379), O = F(O, _, p, E, a[P + 2], 15, 718787259), E = F(E, O, _, p, a[P + 9], 21, -343485551), p = p + R >>> 0, E = E + V >>> 0, O = O + z >>> 0, _ = _ + G >>> 0;
    }
    return i.endian([p, E, O, _]);
  })._ff = function(y, l, a, g, p, E, O) {
    var _ = y + (l & a | ~l & g) + (p >>> 0) + O;
    return (_ << E | _ >>> 32 - E) + l;
  }, h._gg = function(y, l, a, g, p, E, O) {
    var _ = y + (l & g | a & ~g) + (p >>> 0) + O;
    return (_ << E | _ >>> 32 - E) + l;
  }, h._hh = function(y, l, a, g, p, E, O) {
    var _ = y + (l ^ a ^ g) + (p >>> 0) + O;
    return (_ << E | _ >>> 32 - E) + l;
  }, h._ii = function(y, l, a, g, p, E, O) {
    var _ = y + (a ^ (l | ~g)) + (p >>> 0) + O;
    return (_ << E | _ >>> 32 - E) + l;
  }, h._blocksize = 16, h._digestsize = 16, r.exports = function(y, l) {
    if (y == null)
      throw new Error("Illegal argument " + y);
    var a = i.wordsToBytes(h(y, l));
    return l && l.asBytes ? a : l && l.asString ? v.bytesToString(a) : i.bytesToHex(a);
  };
}, 285: (r, e, n) => {
  var i = n(2);
  r.exports = function(D) {
    return D ? (D.substr(0, 2) === "{}" && (D = "\\{\\}" + D.substr(2)), P(function(I) {
      return I.split("\\\\").join(s).split("\\{").join(c).split("\\}").join(v).split("\\,").join(h).split("\\.").join(y);
    }(D), !0).map(a)) : [];
  };
  var s = "\0SLASH" + Math.random() + "\0", c = "\0OPEN" + Math.random() + "\0", v = "\0CLOSE" + Math.random() + "\0", h = "\0COMMA" + Math.random() + "\0", y = "\0PERIOD" + Math.random() + "\0";
  function l(D) {
    return parseInt(D, 10) == D ? parseInt(D, 10) : D.charCodeAt(0);
  }
  function a(D) {
    return D.split(s).join("\\").split(c).join("{").split(v).join("}").split(h).join(",").split(y).join(".");
  }
  function g(D) {
    if (!D)
      return [""];
    var I = [], x = i("{", "}", D);
    if (!x)
      return D.split(",");
    var F = x.pre, R = x.body, V = x.post, z = F.split(",");
    z[z.length - 1] += "{" + R + "}";
    var G = g(V);
    return V.length && (z[z.length - 1] += G.shift(), z.push.apply(z, G)), I.push.apply(I, z), I;
  }
  function p(D) {
    return "{" + D + "}";
  }
  function E(D) {
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
    var R = F.pre, V = F.post.length ? P(F.post, !1) : [""];
    if (/\$$/.test(F.pre))
      for (var z = 0; z < V.length; z++) {
        var G = R + "{" + F.body + "}" + V[z];
        x.push(G);
      }
    else {
      var X, Z, H = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(F.body), K = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(F.body), q = H || K, re = F.body.indexOf(",") >= 0;
      if (!q && !re)
        return F.post.match(/,.*\}/) ? P(D = F.pre + "{" + F.body + v + F.post) : [D];
      if (q)
        X = F.body.split(/\.\./);
      else if ((X = g(F.body)).length === 1 && (X = P(X[0], !1).map(p)).length === 1)
        return V.map(function($t) {
          return F.pre + X[0] + $t;
        });
      if (q) {
        var pe = l(X[0]), Ae = l(X[1]), ce = Math.max(X[0].length, X[1].length), Ee = X.length == 3 ? Math.abs(l(X[2])) : 1, me = O;
        Ae < pe && (Ee *= -1, me = _);
        var Me = X.some(E);
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
        for (z = 0; z < V.length; z++)
          G = R + Z[Ie] + V[z], (!I || q || G) && x.push(G);
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
    return n = function(g) {
      if (g === null || (p = g, Function.toString.call(p).indexOf("[native code]") === -1))
        return g;
      var p;
      if (typeof g != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (a !== void 0) {
        if (a.has(g))
          return a.get(g);
        a.set(g, E);
      }
      function E() {
        return i(g, arguments, c(this).constructor);
      }
      return E.prototype = Object.create(g.prototype, { constructor: { value: E, enumerable: !1, writable: !0, configurable: !0 } }), s(E, g);
    }, n(l);
  }
  function i(l, a, g) {
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
    }() ? Reflect.construct : function(p, E, O) {
      var _ = [null];
      _.push.apply(_, E);
      var P = new (Function.bind.apply(p, _))();
      return O && s(P, O.prototype), P;
    }, i.apply(null, arguments);
  }
  function s(l, a) {
    return s = Object.setPrototypeOf || function(g, p) {
      return g.__proto__ = p, g;
    }, s(l, a);
  }
  function c(l) {
    return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
      return a.__proto__ || Object.getPrototypeOf(a);
    }, c(l);
  }
  var v = function(l) {
    function a(g) {
      var p;
      return function(E, O) {
        if (!(E instanceof O))
          throw new TypeError("Cannot call a class as a function");
      }(this, a), (p = function(E, O) {
        return !O || e(O) !== "object" && typeof O != "function" ? function(_) {
          if (_ === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return _;
        }(E) : O;
      }(this, c(a).call(this, g))).name = "ObjectPrototypeMutationError", p;
    }
    return function(g, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Super expression must either be null or a function");
      g.prototype = Object.create(p && p.prototype, { constructor: { value: g, writable: !0, configurable: !0 } }), p && s(g, p);
    }(a, l), a;
  }(n(Error));
  function h(l, a) {
    for (var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
    }, p = a.split("."), E = p.length, O = function(D) {
      var I = p[D];
      if (!l)
        return { v: void 0 };
      if (I === "+") {
        if (Array.isArray(l))
          return { v: l.map(function(F, R) {
            var V = p.slice(D + 1);
            return V.length > 0 ? h(F, V.join("."), g) : g(l, R, p, D);
          }) };
        var x = p.slice(0, D).join(".");
        throw new Error("Object at wildcard (".concat(x, ") is not an array"));
      }
      l = g(l, I, p, D);
    }, _ = 0; _ < E; _++) {
      var P = O(_);
      if (e(P) === "object")
        return P.v;
    }
    return l;
  }
  function y(l, a) {
    return l.length === a + 1;
  }
  r.exports = { set: function(l, a, g) {
    if (e(l) != "object" || l === null || a === void 0)
      return l;
    if (typeof a == "number")
      return l[a] = g, l[a];
    try {
      return h(l, a, function(p, E, O, _) {
        if (p === Reflect.getPrototypeOf({}))
          throw new v("Attempting to mutate Object.prototype");
        if (!p[E]) {
          var P = Number.isInteger(Number(O[_ + 1])), D = O[_ + 1] === "+";
          p[E] = P || D ? [] : {};
        }
        return y(O, _) && (p[E] = g), p[E];
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
      return h(l, a, function(g, p) {
        return g[p];
      });
    } catch {
      return l;
    }
  }, has: function(l, a) {
    var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (e(l) != "object" || l === null || a === void 0)
      return !1;
    if (typeof a == "number")
      return a in l;
    try {
      var p = !1;
      return h(l, a, function(E, O, _, P) {
        if (!y(_, P))
          return E && E[O];
        p = g.own ? E.hasOwnProperty(O) : O in E;
      }), p;
    } catch {
      return !1;
    }
  }, hasOwn: function(l, a, g) {
    return this.has(l, a, g || { own: !0 });
  }, isIn: function(l, a, g) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (e(l) != "object" || l === null || a === void 0)
      return !1;
    try {
      var E = !1, O = !1;
      return h(l, a, function(_, P, D, I) {
        return E = E || _ === g || !!_ && _[P] === g, O = y(D, I) && e(_) === "object" && P in _, _ && _[P];
      }), p.validPath ? E && O : E;
    } catch {
      return !1;
    }
  }, ObjectPrototypeMutationError: v };
}, 47: (r, e, n) => {
  var i = n(410), s = function(l) {
    return typeof l == "string";
  };
  function c(l, a) {
    for (var g = [], p = 0; p < l.length; p++) {
      var E = l[p];
      E && E !== "." && (E === ".." ? g.length && g[g.length - 1] !== ".." ? g.pop() : a && g.push("..") : g.push(E));
    }
    return g;
  }
  var v = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, h = {};
  function y(l) {
    return v.exec(l).slice(1);
  }
  h.resolve = function() {
    for (var l = "", a = !1, g = arguments.length - 1; g >= -1 && !a; g--) {
      var p = g >= 0 ? arguments[g] : kt.cwd();
      if (!s(p))
        throw new TypeError("Arguments to path.resolve must be strings");
      p && (l = p + "/" + l, a = p.charAt(0) === "/");
    }
    return (a ? "/" : "") + (l = c(l.split("/"), !a).join("/")) || ".";
  }, h.normalize = function(l) {
    var a = h.isAbsolute(l), g = l.substr(-1) === "/";
    return (l = c(l.split("/"), !a).join("/")) || a || (l = "."), l && g && (l += "/"), (a ? "/" : "") + l;
  }, h.isAbsolute = function(l) {
    return l.charAt(0) === "/";
  }, h.join = function() {
    for (var l = "", a = 0; a < arguments.length; a++) {
      var g = arguments[a];
      if (!s(g))
        throw new TypeError("Arguments to path.join must be strings");
      g && (l += l ? "/" + g : g);
    }
    return h.normalize(l);
  }, h.relative = function(l, a) {
    function g(I) {
      for (var x = 0; x < I.length && I[x] === ""; x++)
        ;
      for (var F = I.length - 1; F >= 0 && I[F] === ""; F--)
        ;
      return x > F ? [] : I.slice(x, F + 1);
    }
    l = h.resolve(l).substr(1), a = h.resolve(a).substr(1);
    for (var p = g(l.split("/")), E = g(a.split("/")), O = Math.min(p.length, E.length), _ = O, P = 0; P < O; P++)
      if (p[P] !== E[P]) {
        _ = P;
        break;
      }
    var D = [];
    for (P = _; P < p.length; P++)
      D.push("..");
    return (D = D.concat(E.slice(_))).join("/");
  }, h._makeLong = function(l) {
    return l;
  }, h.dirname = function(l) {
    var a = y(l), g = a[0], p = a[1];
    return g || p ? (p && (p = p.substr(0, p.length - 1)), g + p) : ".";
  }, h.basename = function(l, a) {
    var g = y(l)[2];
    return a && g.substr(-1 * a.length) === a && (g = g.substr(0, g.length - a.length)), g;
  }, h.extname = function(l) {
    return y(l)[3];
  }, h.format = function(l) {
    if (!i.isObject(l))
      throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof l);
    var a = l.root || "";
    if (!s(a))
      throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof l.root);
    return (l.dir ? l.dir + h.sep : "") + (l.base || "");
  }, h.parse = function(l) {
    if (!s(l))
      throw new TypeError("Parameter 'pathString' must be a string, not " + typeof l);
    var a = y(l);
    if (!a || a.length !== 4)
      throw new TypeError("Invalid path '" + l + "'");
    return a[1] = a[1] || "", a[2] = a[2] || "", a[3] = a[3] || "", { root: a[0], dir: a[0] + a[1].slice(0, a[1].length - 1), base: a[2], ext: a[3], name: a[2].slice(0, a[2].length - a[3].length) };
  }, h.sep = "/", h.delimiter = ":", r.exports = h;
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
    var h, y, l = [];
    for (y in typeof v != "string" && (v = "?"), c)
      if (n.call(c, y)) {
        if ((h = c[y]) || h != null && !isNaN(h) || (h = ""), y = s(y), h = s(h), y === null || h === null)
          continue;
        l.push(y + "=" + h);
      }
    return l.length ? v + l.join("&") : "";
  }, e.parse = function(c) {
    for (var v, h = /([^=?#&]+)=?([^&]*)/g, y = {}; v = h.exec(c); ) {
      var l = i(v[1]), a = i(v[2]);
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
    let v = s.trim();
    if (c.skipLike !== void 0 && c.skipLike.test(v))
      return s;
    if (c.hex && e.test(v))
      return Number.parseInt(v, 16);
    {
      const y = n.exec(v);
      if (y) {
        const l = y[1], a = y[2];
        let g = ((h = y[3]) && h.indexOf(".") !== -1 && ((h = h.replace(/0+$/, "")) === "." ? h = "0" : h[0] === "." ? h = "0" + h : h[h.length - 1] === "." && (h = h.substr(0, h.length - 1))), h);
        const p = y[4] || y[6];
        if (!c.leadingZeros && a.length > 0 && l && v[2] !== "." || !c.leadingZeros && a.length > 0 && !l && v[1] !== ".")
          return s;
        {
          const E = Number(v), O = "" + E;
          return O.search(/[eE]/) !== -1 || p ? c.eNotation ? E : s : v.indexOf(".") !== -1 ? O === "0" && g === "" || O === g || l && O === "-" + g ? E : s : a ? g === O || l + g === O ? E : s : v === O || v === l + O ? E : s;
        }
      }
      return s;
    }
    var h;
  };
}, 737: (r, e, n) => {
  var i = n(670), s = n(647), c = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, v = /[\n\r\t]/g, h = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, y = /:\d+$/, l = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, a = /^[a-zA-Z]:/;
  function g(I) {
    return (I || "").toString().replace(c, "");
  }
  var p = [["#", "hash"], ["?", "query"], function(I, x) {
    return _(x.protocol) ? I.replace(/\\/g, "/") : I;
  }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]], E = { hash: 1, query: 1 };
  function O(I) {
    var x, F = (typeof window < "u" ? window : typeof ai < "u" ? ai : typeof self < "u" ? self : {}).location || {}, R = {}, V = typeof (I = I || F);
    if (I.protocol === "blob:")
      R = new D(unescape(I.pathname), {});
    else if (V === "string")
      for (x in R = new D(I, {}), E)
        delete R[x];
    else if (V === "object") {
      for (x in I)
        x in E || (R[x] = I[x]);
      R.slashes === void 0 && (R.slashes = h.test(I.href));
    }
    return R;
  }
  function _(I) {
    return I === "file:" || I === "ftp:" || I === "http:" || I === "https:" || I === "ws:" || I === "wss:";
  }
  function P(I, x) {
    I = (I = g(I)).replace(v, ""), x = x || {};
    var F, R = l.exec(I), V = R[1] ? R[1].toLowerCase() : "", z = !!R[2], G = !!R[3], X = 0;
    return z ? G ? (F = R[2] + R[3] + R[4], X = R[2].length + R[3].length) : (F = R[2] + R[4], X = R[2].length) : G ? (F = R[3] + R[4], X = R[3].length) : F = R[4], V === "file:" ? X >= 2 && (F = F.slice(2)) : _(V) ? F = R[4] : V ? z && (F = F.slice(2)) : X >= 2 && _(x.protocol) && (F = R[4]), { protocol: V, slashes: z || _(V), slashesCount: X, rest: F };
  }
  function D(I, x, F) {
    if (I = (I = g(I)).replace(v, ""), !(this instanceof D))
      return new D(I, x, F);
    var R, V, z, G, X, Z, H = p.slice(), K = typeof x, q = this, re = 0;
    for (K !== "object" && K !== "string" && (F = x, x = null), F && typeof F != "function" && (F = s.parse), R = !(V = P(I || "", x = O(x))).protocol && !V.slashes, q.slashes = V.slashes || R && x.slashes, q.protocol = V.protocol || x.protocol || "", I = V.rest, (V.protocol === "file:" && (V.slashesCount !== 2 || a.test(I)) || !V.slashes && (V.protocol || V.slashesCount < 2 || !_(q.protocol))) && (H[3] = [/(.*)/, "pathname"]); re < H.length; re++)
      typeof (G = H[re]) != "function" ? (z = G[0], Z = G[1], z != z ? q[Z] = I : typeof z == "string" ? ~(X = z === "@" ? I.lastIndexOf(z) : I.indexOf(z)) && (typeof G[2] == "number" ? (q[Z] = I.slice(0, X), I = I.slice(X + G[2])) : (q[Z] = I.slice(X), I = I.slice(0, X))) : (X = z.exec(I)) && (q[Z] = X[1], I = I.slice(0, X.index)), q[Z] = q[Z] || R && G[3] && x[Z] || "", G[4] && (q[Z] = q[Z].toLowerCase())) : I = G(I, q);
    F && (q.query = F(q.query)), R && x.slashes && q.pathname.charAt(0) !== "/" && (q.pathname !== "" || x.pathname !== "") && (q.pathname = function(pe, Ae) {
      if (pe === "")
        return Ae;
      for (var ce = (Ae || "/").split("/").slice(0, -1).concat(pe.split("/")), Ee = ce.length, me = ce[Ee - 1], Me = !1, $e = 0; Ee--; )
        ce[Ee] === "." ? ce.splice(Ee, 1) : ce[Ee] === ".." ? (ce.splice(Ee, 1), $e++) : $e && (Ee === 0 && (Me = !0), ce.splice(Ee, 1), $e--);
      return Me && ce.unshift(""), me !== "." && me !== ".." || ce.push(""), ce.join("/");
    }(q.pathname, x.pathname)), q.pathname.charAt(0) !== "/" && _(q.protocol) && (q.pathname = "/" + q.pathname), i(q.port, q.protocol) || (q.host = q.hostname, q.port = ""), q.username = q.password = "", q.auth && (~(X = q.auth.indexOf(":")) ? (q.username = q.auth.slice(0, X), q.username = encodeURIComponent(decodeURIComponent(q.username)), q.password = q.auth.slice(X + 1), q.password = encodeURIComponent(decodeURIComponent(q.password))) : q.username = encodeURIComponent(decodeURIComponent(q.auth)), q.auth = q.password ? q.username + ":" + q.password : q.username), q.origin = q.protocol !== "file:" && _(q.protocol) && q.host ? q.protocol + "//" + q.host : "null", q.href = q.toString();
  }
  D.prototype = { set: function(I, x, F) {
    var R = this;
    switch (I) {
      case "query":
        typeof x == "string" && x.length && (x = (F || s.parse)(x)), R[I] = x;
        break;
      case "port":
        R[I] = x, i(x, R.protocol) ? x && (R.host = R.hostname + ":" + x) : (R.host = R.hostname, R[I] = "");
        break;
      case "hostname":
        R[I] = x, R.port && (x += ":" + R.port), R.host = x;
        break;
      case "host":
        R[I] = x, y.test(x) ? (x = x.split(":"), R.port = x.pop(), R.hostname = x.join(":")) : (R.hostname = x, R.port = "");
        break;
      case "protocol":
        R.protocol = x.toLowerCase(), R.slashes = !F;
        break;
      case "pathname":
      case "hash":
        if (x) {
          var V = I === "pathname" ? "/" : "#";
          R[I] = x.charAt(0) !== V ? V + x : x;
        } else
          R[I] = x;
        break;
      case "username":
      case "password":
        R[I] = encodeURIComponent(x);
        break;
      case "auth":
        var z = x.indexOf(":");
        ~z ? (R.username = x.slice(0, z), R.username = encodeURIComponent(decodeURIComponent(R.username)), R.password = x.slice(z + 1), R.password = encodeURIComponent(decodeURIComponent(R.password))) : R.username = encodeURIComponent(decodeURIComponent(x));
    }
    for (var G = 0; G < p.length; G++) {
      var X = p[G];
      X[4] && (R[X[1]] = R[X[1]].toLowerCase());
    }
    return R.auth = R.password ? R.username + ":" + R.password : R.username, R.origin = R.protocol !== "file:" && _(R.protocol) && R.host ? R.protocol + "//" + R.host : "null", R.href = R.toString(), R;
  }, toString: function(I) {
    I && typeof I == "function" || (I = s.stringify);
    var x, F = this, R = F.host, V = F.protocol;
    V && V.charAt(V.length - 1) !== ":" && (V += ":");
    var z = V + (F.protocol && F.slashes || _(F.protocol) ? "//" : "");
    return F.username ? (z += F.username, F.password && (z += ":" + F.password), z += "@") : F.password ? (z += ":" + F.password, z += "@") : F.protocol !== "file:" && _(F.protocol) && !R && F.pathname !== "/" && (z += "@"), (R[R.length - 1] === ":" || y.test(F.hostname) && !F.port) && (R += ":"), z += R + F.pathname, (x = typeof F.query == "object" ? I(F.query) : F.query) && (z += x.charAt(0) !== "?" ? "?" + x : x), F.hash && (z += F.hash), z;
  } }, D.extractProtocol = P, D.location = O, D.trimLeft = g, D.qs = s, r.exports = D;
}, 410: () => {
}, 388: () => {
}, 805: () => {
}, 800: () => {
} }, Jl = {};
function je(r) {
  var e = Jl[r];
  if (e !== void 0)
    return e.exports;
  var n = Jl[r] = { id: r, loaded: !1, exports: {} };
  return zS[r].call(n.exports, n, n.exports, je), n.loaded = !0, n.exports;
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
  je.d(zt, { hT: () => X, O4: () => Z, Kd: () => z, YK: () => G, UU: () => Fp, Gu: () => Ae, ky: () => ee, h4: () => se, hq: () => Kt, i5: () => ae });
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
      const S = [...arguments], { options: C, shortMessage: N } = function(W) {
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
      let B = N;
      if (C.cause && (B = "".concat(B, ": ").concat(C.cause.message)), super(B), this.message = B, C.name && typeof C.name == "string" ? this.name = C.name : this.name = "Layerr", C.cause && Object.defineProperty(this, "_cause", { value: C.cause }), Object.defineProperty(this, "_info", { value: {} }), C.info && typeof C.info == "object" && Object.assign(this._info, C.info), Error.captureStackTrace) {
        const W = C.constructorOpt || this.constructor;
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
      const m = {}, S = s.cause(f);
      return S && Object.assign(m, s.info(S)), f._info && Object.assign(m, f._info), m;
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
  const h = "__PATH_SEPARATOR_POSIX__", y = "__PATH_SEPARATOR_WINDOWS__";
  function l(w) {
    try {
      const f = w.replace(/\//g, h).replace(/\\\\/g, y);
      return encodeURIComponent(f).split(y).join("\\\\").split(h).join("/");
    } catch (f) {
      throw new s(f, "Failed encoding path");
    }
  }
  function a(w) {
    return w.startsWith("/") ? w : "/" + w;
  }
  function g(w) {
    let f = w;
    return f[0] !== "/" && (f = "/" + f), /^.+\/$/.test(f) && (f = f.substr(0, f.length - 1)), f;
  }
  function p(w) {
    let f = new (e())(w).pathname;
    return f.length <= 0 && (f = "/"), g(f);
  }
  function E() {
    for (var w = arguments.length, f = new Array(w), m = 0; m < w; m++)
      f[m] = arguments[m];
    return function() {
      return function(S) {
        var C = [];
        if (S.length === 0)
          return "";
        if (typeof S[0] != "string")
          throw new TypeError("Url must be a string. Received " + S[0]);
        if (S[0].match(/^[^/:]+:\/*$/) && S.length > 1) {
          var N = S.shift();
          S[0] = N + S[0];
        }
        S[0].match(/^file:\/\/\//) ? S[0] = S[0].replace(/^([^/:]+):\/*/, "$1:///") : S[0] = S[0].replace(/^([^/:]+):\/*/, "$1://");
        for (var B = 0; B < S.length; B++) {
          var W = S[B];
          if (typeof W != "string")
            throw new TypeError("Url must be a string. Received " + W);
          W !== "" && (B > 0 && (W = W.replace(/^[\/]+/, "")), W = B < S.length - 1 ? W.replace(/[\/]+$/, "") : W.replace(/[\/]+$/, "/"), C.push(W));
        }
        var Y = C.join("/"), Q = (Y = Y.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
        return Q.shift() + (Q.length > 0 ? "?" : "") + Q.join("&");
      }(typeof arguments[0] == "object" ? arguments[0] : [].slice.call(arguments));
    }(f.reduce((S, C, N) => ((N === 0 || C !== "/" || C === "/" && S[S.length - 1] !== "/") && S.push(C), S), []));
  }
  var O = je(542), _ = je.n(O);
  const P = "abcdef0123456789";
  function D(w, f) {
    const m = w.url.replace("//", ""), S = m.indexOf("/") == -1 ? "/" : m.slice(m.indexOf("/")), C = w.method ? w.method.toUpperCase() : "GET", N = !!/(^|,)\s*auth\s*($|,)/.test(f.qop) && "auth", B = "00000000".concat(f.nc).slice(-8), W = function(we, Pe, ye, ne, ie, de, Se) {
      const ve = Se || _()("".concat(Pe, ":").concat(ye, ":").concat(ne));
      return we && we.toLowerCase() === "md5-sess" ? _()("".concat(ve, ":").concat(ie, ":").concat(de)) : ve;
    }(f.algorithm, f.username, f.realm, f.password, f.nonce, f.cnonce, f.ha1), Y = _()("".concat(C, ":").concat(S)), Q = N ? _()("".concat(W, ":").concat(f.nonce, ":").concat(B, ":").concat(f.cnonce, ":").concat(N, ":").concat(Y)) : _()("".concat(W, ":").concat(f.nonce, ":").concat(Y)), J = { username: f.username, realm: f.realm, nonce: f.nonce, uri: S, qop: N, response: Q, nc: B, cnonce: f.cnonce, algorithm: f.algorithm, opaque: f.opaque }, oe = [];
    for (const we in J)
      J[we] && (we === "qop" || we === "nc" || we === "algorithm" ? oe.push("".concat(we, "=").concat(J[we])) : oe.push("".concat(we, '="').concat(J[we], '"')));
    return "Digest ".concat(oe.join(", "));
  }
  var I = je(101), x = je.n(I);
  function F(w) {
    return x().decode(w);
  }
  const R = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : typeof window < "u" ? window : globalThis, V = R.fetch.bind(R), z = R.Request, G = R.Response;
  let X = function(w) {
    return w.Digest = "digest", w.None = "none", w.Password = "password", w.Token = "token", w;
  }({}), Z = function(w) {
    return w.DataTypeNoLength = "data-type-no-length", w.InvalidAuthType = "invalid-auth-type", w.InvalidOutputFormat = "invalid-output-format", w.LinkUnsupportedAuthType = "link-unsupported-auth", w;
  }({});
  je(800);
  const H = "@@HOTPATCHER", K = () => {
  };
  function q(w) {
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
      return Object.keys(f.configuration.registry).forEach((S) => {
        this.configuration.registry.hasOwnProperty(S) ? m && (this.configuration.registry[S] = Object.assign({}, f.configuration.registry[S])) : this.configuration.registry[S] = Object.assign({}, f.configuration.registry[S]);
      }), f._configuration = this.configuration, this;
    }
    execute(f) {
      const m = this.get(f) || K;
      for (var S = arguments.length, C = new Array(S > 1 ? S - 1 : 0), N = 1; N < S; N++)
        C[N - 1] = arguments[N];
      return m(...C);
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
        for (var S = arguments.length, C = new Array(S), N = 0; N < S; N++)
          C[N] = arguments[N];
        if (C.length === 0)
          throw new Error("Failed creating sequence: No functions provided");
        return function() {
          for (var B = arguments.length, W = new Array(B), Y = 0; Y < B; Y++)
            W[Y] = arguments[Y];
          let Q = W;
          const J = this;
          for (; C.length > 0; )
            Q = [C.shift().apply(J, Q)];
          return Q[0];
        };
      }(...m.methods);
    }
    isPatched(f) {
      return !!this.configuration.registry[f];
    }
    patch(f, m) {
      let S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      const { chain: C = !1 } = S;
      if (this.configuration.registry[f] && this.configuration.registry[f].final)
        throw new Error("Failed patching '".concat(f, "': Method marked as being final"));
      if (typeof m != "function")
        throw new Error("Failed patching '".concat(f, "': Provided method is not a function"));
      if (C)
        this.configuration.registry[f] ? this.configuration.registry[f].methods.push(m) : this.configuration.registry[f] = q(m);
      else if (this.isPatched(f)) {
        const { original: N } = this.configuration.registry[f];
        this.configuration.registry[f] = Object.assign(q(m), { original: N });
      } else
        this.configuration.registry[f] = q(m);
      return this;
    }
    patchInline(f, m) {
      this.isPatched(f) || this.patch(f, m);
      for (var S = arguments.length, C = new Array(S > 2 ? S - 2 : 0), N = 2; N < S; N++)
        C[N - 2] = arguments[N];
      return this.execute(f, ...C);
    }
    plugin(f) {
      for (var m = arguments.length, S = new Array(m > 1 ? m - 1 : 0), C = 1; C < m; C++)
        S[C - 1] = arguments[C];
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
      let m = f;
      for (; Object.getPrototypeOf(m) !== null; )
        m = Object.getPrototypeOf(m);
      return Object.getPrototypeOf(f) === m;
    }(w) ? Object.assign({}, w) : Object.setPrototypeOf(Object.assign({}, w), Object.getPrototypeOf(w));
  }
  function Ee() {
    for (var w = arguments.length, f = new Array(w), m = 0; m < w; m++)
      f[m] = arguments[m];
    let S = null, C = [...f];
    for (; C.length > 0; ) {
      const N = C.shift();
      S = S ? me(S, N) : ce(N);
    }
    return S;
  }
  function me(w, f) {
    const m = ce(w);
    return Object.keys(f).forEach((S) => {
      m.hasOwnProperty(S) ? Array.isArray(f[S]) ? m[S] = Array.isArray(m[S]) ? [...m[S], ...f[S]] : [...f[S]] : typeof f[S] == "object" && f[S] ? m[S] = typeof m[S] == "object" && m[S] ? me(m[S], f[S]) : ce(f[S]) : m[S] = f[S] : m[S] = f[S];
    }), m;
  }
  function Me(w) {
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
    const S = {};
    return f.reduce((C, N) => (Object.keys(N).forEach((B) => {
      const W = B.toLowerCase();
      S.hasOwnProperty(W) ? C[S[W]] = N[B] : (S[W] = B, C[B] = N[B]);
    }), C), {});
  }
  je(805);
  const Ze = typeof ArrayBuffer == "function", { toString: Te } = Object.prototype;
  function _e(w) {
    return Ze && (w instanceof ArrayBuffer || Te.call(w) === "[object ArrayBuffer]");
  }
  function Ie(w) {
    return w != null && w.constructor != null && typeof w.constructor.isBuffer == "function" && w.constructor.isBuffer(w);
  }
  function $t(w, f, m) {
    return m ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  function wt(w) {
    const f = Ae();
    return f.patchInline("request", (m) => f.patchInline("fetch", V, m.url, function(S) {
      let C = {};
      const N = { method: S.method };
      if (S.headers && (C = $e(C, S.headers)), S.data !== void 0) {
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
        }(S.data);
        N.body = B, C = $e(C, W);
      }
      return S.signal && (N.signal = S.signal), S.withCredentials && (N.credentials = "include"), N.headers = C, N;
    }(m)), w);
  }
  const Ue = (Ht = function(w) {
    if (!w._digest)
      return wt(w);
    const f = w._digest;
    return delete w._digest, f.hasDigestAuth && (w = Ee(w, { headers: { Authorization: D(w, f) } })), $t(wt(w), function(m) {
      let S = !1;
      return C = function(B) {
        return S ? B : m;
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
              return $t(wt(w = Ee(w, { headers: { Authorization: D(w, f) } })), function(B) {
                return B.status == 401 ? f.hasDigestAuth = !1 : f.nc++, S = !0, B;
              });
          }();
        f.nc++;
      }()) && N.then ? N.then(C) : C(N);
      var C, N;
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
    const S = ce(w);
    return S.headers = $e(f.headers, S.headers || {}, m.headers || {}), m.data !== void 0 && (S.data = m.data), m.signal && (S.signal = m.signal), f.httpAgent && (S.httpAgent = f.httpAgent), f.httpsAgent && (S.httpsAgent = f.httpsAgent), f.digest && (S._digest = f.digest), typeof f.withCredentials == "boolean" && (S.withCredentials = f.withCredentials), S;
  }
  var Je = je(285);
  const Pt = { "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", !0], "[:alpha:]": ["\\p{L}\\p{Nl}", !0], "[:ascii:]": ["\\x00-\\x7f", !1], "[:blank:]": ["\\p{Zs}\\t", !0], "[:cntrl:]": ["\\p{Cc}", !0], "[:digit:]": ["\\p{Nd}", !0], "[:graph:]": ["\\p{Z}\\p{C}", !0, !0], "[:lower:]": ["\\p{Ll}", !0], "[:print:]": ["\\p{C}", !0], "[:punct:]": ["\\p{P}", !0], "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", !0], "[:upper:]": ["\\p{Lu}", !0], "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", !0], "[:xdigit:]": ["A-Fa-f0-9", !1] }, ut = (w) => w.replace(/[[\]\\-]/g, "\\$&"), bt = (w) => w.join(""), jt = (w, f) => {
    const m = f;
    if (w.charAt(m) !== "[")
      throw new Error("not in a brace expression");
    const S = [], C = [];
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
              for (const [ie, [de, Se, ve]] of Object.entries(Pt))
                if (w.startsWith(ie, N)) {
                  if (oe)
                    return ["$.", !1, w.length - m, !0];
                  N += ie.length, ve ? C.push(de) : S.push(de), W = W || Se;
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
    if (!S.length && !C.length)
      return ["$.", !1, w.length - m, !0];
    if (C.length === 0 && S.length === 1 && /^\\?.$/.test(S[0]) && !Q)
      return [(we = S[0].length === 2 ? S[0].slice(-1) : S[0], we.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")), !1, J - m, !1];
    var we;
    const Pe = "[" + (Q ? "^" : "") + bt(S) + "]", ye = "[" + (Q ? "" : "^") + bt(C) + "]";
    return [S.length && C.length ? "(" + Pe + "|" + ye + ")" : S.length ? Pe : ye, W, J - m, !0];
  };
  function Ce(w, f, m) {
    var S;
    return (f = typeof (S = function(C, N) {
      if (typeof C != "object" || !C)
        return C;
      var B = C[Symbol.toPrimitive];
      if (B !== void 0) {
        var W = B.call(C, "string");
        if (typeof W != "object")
          return W;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(C);
    }(f)) == "symbol" ? S : String(S)) in w ? Object.defineProperty(w, f, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : w[f] = m, w;
  }
  const De = function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return Dr(f), !(!m.nocomment && f.charAt(0) === "#") && new Ir(f, m).match(w);
  }, lr = De, Or = /^\*+([^+@!?\*\[\(]*)$/, ht = (w) => (f) => !f.startsWith(".") && f.endsWith(w), Rt = (w) => (f) => f.endsWith(w), It = (w) => (w = w.toLowerCase(), (f) => !f.startsWith(".") && f.toLowerCase().endsWith(w)), At = (w) => (w = w.toLowerCase(), (f) => f.toLowerCase().endsWith(w)), he = /^\*+\.\*+$/, qe = (w) => !w.startsWith(".") && w.includes("."), b = (w) => w !== "." && w !== ".." && w.includes("."), $ = /^\.\*+$/, L = (w) => w !== "." && w !== ".." && w.startsWith("."), k = /^\*+$/, d = (w) => w.length !== 0 && !w.startsWith("."), o = (w) => w.length !== 0 && w !== "." && w !== "..", u = /^\?+([^+@!?\*\[\(]*)?$/, T = (w) => {
    let [f, m = ""] = w;
    const S = te([f]);
    return m ? (m = m.toLowerCase(), (C) => S(C) && C.toLowerCase().endsWith(m)) : S;
  }, A = (w) => {
    let [f, m = ""] = w;
    const S = le([f]);
    return m ? (m = m.toLowerCase(), (C) => S(C) && C.toLowerCase().endsWith(m)) : S;
  }, M = (w) => {
    let [f, m = ""] = w;
    const S = le([f]);
    return m ? (C) => S(C) && C.endsWith(m) : S;
  }, j = (w) => {
    let [f, m = ""] = w;
    const S = te([f]);
    return m ? (C) => S(C) && C.endsWith(m) : S;
  }, te = (w) => {
    let [f] = w;
    const m = f.length;
    return (S) => S.length === m && !S.startsWith(".");
  }, le = (w) => {
    let [f] = w;
    const m = f.length;
    return (S) => S.length === m && S !== "." && S !== "..";
  }, ue = typeof kt == "object" && kt ? typeof kt.env == "object" && kt.env && kt.env.__MINIMATCH_TESTING_PLATFORM__ || kt.platform : "posix";
  De.sep = ue === "win32" ? "\\" : "/";
  const fe = Symbol("globstar **");
  De.GLOBSTAR = fe;
  const xe = { "!": { open: "(?:(?!(?:", close: "))[^/]*?)" }, "?": { open: "(?:", close: ")?" }, "+": { open: "(?:", close: ")+" }, "*": { open: "(?:", close: ")*" }, "@": { open: "(?:", close: ")" } }, Xt = "[^/]", $r = Xt + "*?", En = (w) => w.split("").reduce((f, m) => (f[m] = !0, f), {}), ni = En("().*{}+?[]^$\\!"), so = En("[.(");
  De.filter = function(w) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return (m) => De(m, w, f);
  };
  const dt = function(w) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.assign({}, w, f);
  };
  De.defaults = (w) => {
    if (!w || typeof w != "object" || !Object.keys(w).length)
      return De;
    const f = De;
    return Object.assign(function(m, S) {
      return f(m, S, dt(w, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}));
    }, { Minimatch: class extends f.Minimatch {
      constructor(m) {
        super(m, dt(w, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}));
      }
      static defaults(m) {
        return f.defaults(dt(w, m)).Minimatch;
      }
    }, unescape: function(m) {
      let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return f.unescape(m, dt(w, S));
    }, escape: function(m) {
      let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return f.escape(m, dt(w, S));
    }, filter: function(m) {
      let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return f.filter(m, dt(w, S));
    }, defaults: (m) => f.defaults(dt(w, m)), makeRe: function(m) {
      let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return f.makeRe(m, dt(w, S));
    }, braceExpand: function(m) {
      let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return f.braceExpand(m, dt(w, S));
    }, match: function(m, S) {
      let C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return f.match(m, S, dt(w, C));
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
    return new Ir(w, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).makeRe();
  }, De.match = function(w, f) {
    const m = new Ir(f, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {});
    return w = w.filter((S) => m.match(S)), m.options.nonull && !w.length && w.push(f), w;
  };
  const Yt = /[?*]|[+@!]\(.*?\)|\[|\]/, jr = (w) => w.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  class Ir {
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
      const S = this.globSet.map((N) => this.slashSplit(N));
      this.globParts = this.preprocess(S), this.debug(this.pattern, this.globParts);
      let C = this.globParts.map((N, B, W) => {
        if (this.isWindows && this.windowsNoMagicRoot) {
          const Y = !(N[0] !== "" || N[1] !== "" || N[2] !== "?" && Yt.test(N[2]) || Yt.test(N[3])), Q = /^[a-z]:/i.test(N[0]);
          if (Y)
            return [...N.slice(0, 4), ...N.slice(4).map((J) => this.parse(J))];
          if (Q)
            return [N[0], ...N.slice(1).map((J) => this.parse(J))];
        }
        return N.map((Y) => this.parse(Y));
      });
      if (this.debug(this.pattern, C), this.set = C.filter((N) => N.indexOf(!1) === -1), this.isWindows)
        for (let N = 0; N < this.set.length; N++) {
          const B = this.set[N];
          B[0] === "" && B[1] === "" && this.globParts[N][2] === "?" && typeof B[3] == "string" && /^[a-z]:$/i.test(B[3]) && (B[2] = "?");
        }
      this.debug(this.pattern, this.set);
    }
    preprocess(f) {
      if (this.options.noglobstar)
        for (let S = 0; S < f.length; S++)
          for (let C = 0; C < f[S].length; C++)
            f[S][C] === "**" && (f[S][C] = "*");
      const { optimizationLevel: m = 1 } = this.options;
      return m >= 2 ? (f = this.firstPhasePreProcess(f), f = this.secondPhasePreProcess(f)) : f = m >= 1 ? this.levelOneOptimize(f) : this.adjascentGlobstarOptimize(f), f;
    }
    adjascentGlobstarOptimize(f) {
      return f.map((m) => {
        let S = -1;
        for (; (S = m.indexOf("**", S + 1)) !== -1; ) {
          let C = S;
          for (; m[C + 1] === "**"; )
            C++;
          C !== S && m.splice(S, C - S);
        }
        return m;
      });
    }
    levelOneOptimize(f) {
      return f.map((m) => (m = m.reduce((S, C) => {
        const N = S[S.length - 1];
        return C === "**" && N === "**" ? S : C === ".." && N && N !== ".." && N !== "." && N !== "**" ? (S.pop(), S) : (S.push(C), S);
      }, [])).length === 0 ? [""] : m);
    }
    levelTwoFileOptimize(f) {
      Array.isArray(f) || (f = this.slashSplit(f));
      let m = !1;
      do {
        if (m = !1, !this.preserveMultipleSlashes) {
          for (let C = 1; C < f.length - 1; C++) {
            const N = f[C];
            C === 1 && N === "" && f[0] === "" || N !== "." && N !== "" || (m = !0, f.splice(C, 1), C--);
          }
          f[0] !== "." || f.length !== 2 || f[1] !== "." && f[1] !== "" || (m = !0, f.pop());
        }
        let S = 0;
        for (; (S = f.indexOf("..", S + 1)) !== -1; ) {
          const C = f[S - 1];
          C && C !== "." && C !== ".." && C !== "**" && (m = !0, f.splice(S - 1, 2), S -= 2);
        }
      } while (m);
      return f.length === 0 ? [""] : f;
    }
    firstPhasePreProcess(f) {
      let m = !1;
      do {
        m = !1;
        for (let S of f) {
          let C = -1;
          for (; (C = S.indexOf("**", C + 1)) !== -1; ) {
            let B = C;
            for (; S[B + 1] === "**"; )
              B++;
            B > C && S.splice(C + 1, B - C);
            let W = S[C + 1];
            const Y = S[C + 2], Q = S[C + 3];
            if (W !== ".." || !Y || Y === "." || Y === ".." || !Q || Q === "." || Q === "..")
              continue;
            m = !0, S.splice(C, 1);
            const J = S.slice(0);
            J[C] = "**", f.push(J), C--;
          }
          if (!this.preserveMultipleSlashes) {
            for (let B = 1; B < S.length - 1; B++) {
              const W = S[B];
              B === 1 && W === "" && S[0] === "" || W !== "." && W !== "" || (m = !0, S.splice(B, 1), B--);
            }
            S[0] !== "." || S.length !== 2 || S[1] !== "." && S[1] !== "" || (m = !0, S.pop());
          }
          let N = 0;
          for (; (N = S.indexOf("..", N + 1)) !== -1; ) {
            const B = S[N - 1];
            if (B && B !== "." && B !== ".." && B !== "**") {
              m = !0;
              const W = N === 1 && S[N + 1] === "**" ? ["."] : [];
              S.splice(N - 1, 2, ...W), S.length === 0 && S.push(""), N -= 2;
            }
          }
        }
      } while (m);
      return f;
    }
    secondPhasePreProcess(f) {
      for (let m = 0; m < f.length - 1; m++)
        for (let S = m + 1; S < f.length; S++) {
          const C = this.partsMatch(f[m], f[S], !this.preserveMultipleSlashes);
          C && (f[m] = C, f[S] = []);
        }
      return f.filter((m) => m.length);
    }
    partsMatch(f, m) {
      let S = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], C = 0, N = 0, B = [], W = "";
      for (; C < f.length && N < m.length; )
        if (f[C] === m[N])
          B.push(W === "b" ? m[N] : f[C]), C++, N++;
        else if (S && f[C] === "**" && m[N] === f[C + 1])
          B.push(f[C]), C++;
        else if (S && m[N] === "**" && f[C] === m[N + 1])
          B.push(m[N]), N++;
        else if (f[C] !== "*" || !m[N] || !this.options.dot && m[N].startsWith(".") || m[N] === "**") {
          if (m[N] !== "*" || !f[C] || !this.options.dot && f[C].startsWith(".") || f[C] === "**" || W === "a")
            return !1;
          W = "b", B.push(m[N]), C++, N++;
        } else {
          if (W === "b")
            return !1;
          W = "a", B.push(f[C]), C++, N++;
        }
      return f.length === m.length && B;
    }
    parseNegate() {
      if (this.nonegate)
        return;
      const f = this.pattern;
      let m = !1, S = 0;
      for (let C = 0; C < f.length && f.charAt(C) === "!"; C++)
        m = !m, S++;
      S && (this.pattern = f.slice(S)), this.negate = m;
    }
    matchOne(f, m) {
      let S = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
      const C = this.options;
      if (this.isWindows) {
        const ne = f[0] === "" && f[1] === "" && f[2] === "?" && typeof f[3] == "string" && /^[a-z]:$/i.test(f[3]), ie = m[0] === "" && m[1] === "" && m[2] === "?" && typeof m[3] == "string" && /^[a-z]:$/i.test(m[3]);
        if (ne && ie) {
          const de = f[3], Se = m[3];
          de.toLowerCase() === Se.toLowerCase() && (f[3] = Se);
        } else if (ie && typeof f[0] == "string") {
          const de = m[3], Se = f[0];
          de.toLowerCase() === Se.toLowerCase() && (m[3] = Se, m = m.slice(3));
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
              if (f[B] === "." || f[B] === ".." || !C.dot && f[B].charAt(0) === ".")
                return !1;
            return !0;
          }
          for (; we < Y; ) {
            var ye = f[we];
            if (this.debug(`
globstar while`, f, we, m, Pe, ye), this.matchOne(f.slice(we), m.slice(Pe), S))
              return this.debug("globstar found match!", we, Y, ye), !0;
            if (ye === "." || ye === ".." || !C.dot && ye.charAt(0) === ".") {
              this.debug("dot detected!", f, we, m, Pe);
              break;
            }
            this.debug("globstar swallow a segment, and continue"), we++;
          }
          return !(!S || (this.debug(`
>>> no match, partial?`, f, we, m, Pe), we !== Y));
        }
        let ne;
        if (typeof J == "string" ? (ne = oe === J, this.debug("string match", J, oe, ne)) : (ne = J.test(oe), this.debug("pattern match", J, oe, ne)), !ne)
          return !1;
      }
      if (B === Y && W === Q)
        return !0;
      if (B === Y)
        return S;
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
      let S, C = null;
      (S = f.match(k)) ? C = m.dot ? o : d : (S = f.match(Or)) ? C = (m.nocase ? m.dot ? At : It : m.dot ? Rt : ht)(S[1]) : (S = f.match(u)) ? C = (m.nocase ? m.dot ? A : T : m.dot ? M : j)(S) : (S = f.match(he)) ? C = m.dot ? b : qe : (S = f.match($)) && (C = L);
      let N = "", B = !1, W = !1;
      const Y = [], Q = [];
      let J, oe = !1, we = !1, Pe = f.charAt(0) === ".", ye = m.dot || Pe;
      const ne = (ve) => ve.charAt(0) === "." ? "" : m.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)", ie = () => {
        if (oe) {
          switch (oe) {
            case "*":
              N += $r, B = !0;
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
      for (let ve, Oe = 0; Oe < f.length && (ve = f.charAt(Oe)); Oe++)
        if (this.debug("%s	%s %s %j", f, Oe, N, ve), W) {
          if (ve === "/")
            return !1;
          ni[ve] && (N += "\\"), N += ve, W = !1;
        } else
          switch (ve) {
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
              this.debug("%s	%s %s %j <-- stateChar", f, Oe, N, ve), this.debug("call clearStateChar %j", oe), ie(), oe = ve, m.noext && ie();
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
              Y.pop(), ie(), B = !0, J = Ke, N += J.close, J.type === "!" && Q.push(Object.assign(J, { reEnd: N.length }));
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
              ke ? (N += ze, we = we || ct, Oe += ke - 1, B = B || Jt) : N += "\\[";
              continue;
            case "]":
              N += "\\" + ve;
              continue;
            default:
              ie(), N += jr(ve);
          }
      for (J = Y.pop(); J; J = Y.pop()) {
        let ve;
        ve = N.slice(J.reStart + J.open.length), this.debug(this.pattern, "setting tail", N, J), ve = ve.replace(/((?:\\{2}){0,64})(\\?)\|/g, (ze, ct, ke) => (ke || (ke = "\\"), ct + ct + ke + "|")), this.debug(`tail=%j
   %s`, ve, ve, J, N);
        const Oe = J.type === "*" ? $r : J.type === "?" ? Xt : "\\" + J.type;
        B = !0, N = N.slice(0, J.reStart) + Oe + "\\(" + ve;
      }
      ie(), W && (N += "\\\\");
      const de = so[N.charAt(0)];
      for (let ve = Q.length - 1; ve > -1; ve--) {
        const Oe = Q[ve], ze = N.slice(0, Oe.reStart), ct = N.slice(Oe.reStart, Oe.reEnd - 8);
        let ke = N.slice(Oe.reEnd);
        const Jt = N.slice(Oe.reEnd - 8, Oe.reEnd) + ke, Ke = ze.split(")").length, Mp = ze.split("(").length - Ke;
        let go = ke;
        for (let Rs = 0; Rs < Mp; Rs++)
          go = go.replace(/\)[+*?]?/, "");
        ke = go, N = ze + ct + ke + (ke === "" ? "(?:$|\\/)" : "") + Jt;
      }
      if (N !== "" && B && (N = "(?=.)" + N), de && (N = (Pe ? "" : ye ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)") + N), !m.nocase || B || m.nocaseMagicOnly || (B = f.toUpperCase() !== f.toLowerCase()), !B)
        return N.replace(/\\(.)/g, "$1");
      const Se = (m.nocase ? "i" : "") + (we ? "u" : "");
      try {
        const ve = C ? { _glob: f, _src: N, test: C } : { _glob: f, _src: N };
        return Object.assign(new RegExp("^" + N + "$", Se), ve);
      } catch (ve) {
        return this.debug("invalid regexp", ve), new RegExp("$.");
      }
    }
    makeRe() {
      if (this.regexp || this.regexp === !1)
        return this.regexp;
      const f = this.set;
      if (!f.length)
        return this.regexp = !1, this.regexp;
      const m = this.options, S = m.noglobstar ? $r : m.dot ? "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?" : "(?:(?!(?:\\/|^)\\.).)*?", C = m.nocase ? "i" : "";
      let N = f.map((B) => {
        const W = B.map((Y) => typeof Y == "string" ? jr(Y) : Y === fe ? fe : Y._src);
        return W.forEach((Y, Q) => {
          const J = W[Q + 1], oe = W[Q - 1];
          Y === fe && oe !== fe && (oe === void 0 ? J !== void 0 && J !== fe ? W[Q + 1] = "(?:\\/|" + S + "\\/)?" + J : W[Q] = S : J === void 0 ? W[Q - 1] = oe + "(?:\\/|" + S + ")?" : J !== fe && (W[Q - 1] = oe + "(?:\\/|\\/" + S + "\\/)" + J, W[Q + 1] = fe));
        }), W.filter((Y) => Y !== fe).join("/");
      }).join("|");
      N = "^(?:" + N + ")$", this.negate && (N = "^(?!" + N + ").*$");
      try {
        this.regexp = new RegExp(N, C);
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
      const S = this.options;
      this.isWindows && (f = f.split("\\").join("/"));
      const C = this.slashSplit(f);
      this.debug(this.pattern, "split", C);
      const N = this.set;
      this.debug(this.pattern, "set", N);
      let B = C[C.length - 1];
      if (!B)
        for (let W = C.length - 2; !B && W >= 0; W--)
          B = C[W];
      for (let W = 0; W < N.length; W++) {
        const Y = N[W];
        let Q = C;
        if (S.matchBase && Y.length === 1 && (Q = [B]), this.matchOne(Q, Y, m))
          return !!S.flipNegate || !this.negate;
      }
      return !S.flipNegate && this.negate;
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
    return arguments.length > 2 && arguments[2] !== void 0 && arguments[2] ? { data: f, headers: w.headers ? Me(w.headers) : {}, status: w.status, statusText: w.statusText } : f;
  }
  De.Minimatch = Ir, De.escape = function(w) {
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
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(w, f, m) {
    let S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const C = Re({ url: E(w.remoteURL, l(f)), method: "COPY", headers: { Destination: E(w.remoteURL, l(m)) } }, w, S);
    return B = function(W) {
      tt(w, W);
    }, (N = Ue(C)) && N.then || (N = Promise.resolve(N)), B ? N.then(B) : N;
    var N, B;
  });
  var Wr = je(635), ii = je(829), Ct = je.n(ii), cr = function(w) {
    return w.Array = "array", w.Object = "object", w.Original = "original", w;
  }(cr || {});
  function Vr(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : cr.Original;
    const S = Ct().get(w, f);
    return m === "array" && Array.isArray(S) === !1 ? [S] : m === "object" && Array.isArray(S) ? S[0] : S;
  }
  function se(w) {
    return new Promise((f) => {
      f(function(m) {
        const { multistatus: S } = m;
        if (S === "")
          return { multistatus: { response: [] } };
        if (!S)
          throw new Error("Invalid response: No root multistatus found");
        const C = { multistatus: Array.isArray(S) ? S[0] : S };
        return Ct().set(C, "multistatus.response", Vr(C, "multistatus.response", cr.Array)), Ct().set(C, "multistatus.response", Ct().get(C, "multistatus.response").map((N) => function(B) {
          const W = Object.assign({}, B);
          return W.status ? Ct().set(W, "status", Vr(W, "status", cr.Object)) : (Ct().set(W, "propstat", Vr(W, "propstat", cr.Object)), Ct().set(W, "propstat.prop", Vr(W, "propstat.prop", cr.Object))), W;
        }(N))), C;
      }(new Wr.XMLParser({ removeNSPrefix: !0, numberParseOptions: { hex: !0, leadingZeros: !1 } }).parse(w)));
    });
  }
  function U(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    const { getlastmodified: S = null, getcontentlength: C = "0", resourcetype: N = null, getcontenttype: B = null, getetag: W = null } = w, Y = N && typeof N == "object" && N.collection !== void 0 ? "directory" : "file", Q = { filename: f, basename: v().basename(f), lastmod: S, size: parseInt(C, 10), type: Y, etag: typeof W == "string" ? W.replace(/"/g, "") : null };
    return Y === "file" && (Q.mime = B && typeof B == "string" ? B.split(";")[0] : ""), m && (Q.props = w), Q;
  }
  function ee(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], S = null;
    try {
      w.multistatus.response[0].propstat && (S = w.multistatus.response[0]);
    } catch {
    }
    if (!S)
      throw new Error("Failed getting item stat: bad response");
    const { propstat: { prop: C, status: N } } = S, [B, W, Y] = N.split(" ", 3), Q = parseInt(W, 10);
    if (Q >= 400) {
      const J = new Error("Invalid response: ".concat(Q, " ").concat(Y));
      throw J.status = Q, J;
    }
    return U(C, g(f), m);
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
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { details: S = !1 } = m, C = Re({ url: E(w.remoteURL, l(f)), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, w, m);
    return Le(Ue(C), function(N) {
      return tt(w, N), Le(N.text(), function(B) {
        return Le(se(B), function(W) {
          const Y = ee(W, f, S);
          return Kt(N, Y, S);
        });
      });
    });
  });
  function Qe(w, f, m) {
    return m ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  const lt = Zt(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const S = function(N) {
      if (!N || N === "/")
        return [];
      let B = N;
      const W = [];
      do
        W.push(B), B = v().dirname(B);
      while (B && B !== "/");
      return W;
    }(g(f));
    S.sort((N, B) => N.length > B.length ? 1 : B.length > N.length ? -1 : 0);
    let C = !1;
    return function(N, B, W) {
      if (typeof N[Tn] == "function") {
        let ie = function(de) {
          try {
            for (; !(Y = oe.next()).done; )
              if ((de = B(Y.value)) && de.then) {
                if (!_s(de))
                  return void de.then(ie, J || (J = rt.bind(null, Q = new qr(), 2)));
                de = de.v;
              }
            Q ? rt(Q, 1, de) : Q = de;
          } catch (Se) {
            rt(Q || (Q = new qr()), 2, Se);
          }
        };
        var ne = ie, Y, Q, J, oe = N[Tn]();
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
        var ve, Oe, ze = -1;
        return function ct(ke) {
          try {
            for (; ++ze < ie.length && (!Se || !Se()); )
              if ((ke = de(ze)) && ke.then) {
                if (!_s(ke))
                  return void ke.then(ct, Oe || (Oe = rt.bind(null, ve = new qr(), 2)));
                ke = ke.v;
              }
            ve ? rt(ve, 1, ke) : ve = ke;
          } catch (Jt) {
            rt(ve || (ve = new qr()), 2, Jt);
          }
        }(), ve;
      }(Pe, function(ie) {
        return B(Pe[ie]);
      }, W);
    }(S, function(N) {
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
              return C = !0, at(uo(w, N, { ...m, recursive: !1 }));
            throw Y;
          }();
        });
      }, (W = function() {
        if (C)
          return at(uo(w, N, { ...m, recursive: !1 }));
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
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }
  function Ar() {
  }
  function at(w, f) {
    if (!f)
      return w && w.then ? w.then(Ar) : Promise.resolve();
  }
  const Tn = typeof Symbol < "u" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
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
      const S = w.o;
      S && S(w);
    }
  }
  const qr = function() {
    function w() {
    }
    return w.prototype.then = function(f, m) {
      const S = new w(), C = this.s;
      if (C) {
        const N = 1 & C ? f : m;
        if (N) {
          try {
            rt(S, 1, N(this.v));
          } catch (B) {
            rt(S, 2, B);
          }
          return S;
        }
        return this;
      }
      return this.o = function(N) {
        try {
          const B = N.v;
          1 & N.s ? rt(S, 1, f ? f(B) : B) : m ? rt(S, 1, m(B)) : rt(S, 2, B);
        } catch (B) {
          rt(S, 2, B);
        }
      }, S;
    }, w;
  }();
  function _s(w) {
    return w instanceof qr && 1 & w.s;
  }
  const uo = Zt(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (m.recursive === !0)
      return lt(w, f, m);
    const S = Re({ url: E(w.remoteURL, (C = l(f), C.endsWith("/") ? C : C + "/")), method: "MKCOL" }, w, m);
    var C;
    return Qe(Ue(S), function(N) {
      tt(w, N);
    });
  });
  var dp = je(388), xs = je.n(dp);
  const gp = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const S = {};
    if (typeof m.range == "object" && typeof m.range.start == "number") {
      let W = "bytes=".concat(m.range.start, "-");
      typeof m.range.end == "number" && (W = "".concat(W).concat(m.range.end)), S.Range = W;
    }
    const C = Re({ url: E(w.remoteURL, l(f)), method: "GET", headers: S }, w, m);
    return B = function(W) {
      if (tt(w, W), S.Range && W.status !== 206) {
        const Y = new Error("Invalid response code for partial request: ".concat(W.status));
        throw Y.status = W.status, Y;
      }
      return m.callback && setTimeout(() => {
        m.callback(W);
      }, 0), W.body;
    }, (N = Ue(C)) && N.then || (N = Promise.resolve(N)), B ? N.then(B) : N;
    var N, B;
  }), vp = () => {
  }, mp = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(w, f, m) {
    m.url || (m.url = E(w.remoteURL, l(f)));
    const S = Re(m, w, {});
    return N = function(B) {
      return tt(w, B), B;
    }, (C = Ue(S)) && C.then || (C = Promise.resolve(C)), N ? C.then(N) : C;
    var C, N;
  }), yp = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const S = Re({ url: E(w.remoteURL, l(f)), method: "DELETE" }, w, m);
    return N = function(B) {
      tt(w, B);
    }, (C = Ue(S)) && C.then || (C = Promise.resolve(C)), N ? C.then(N) : C;
    var C, N;
  }), wp = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function(S, C) {
      try {
        var N = (B = Ye(w, f, m), W = function() {
          return !0;
        }, Y ? W ? W(B) : B : (B && B.then || (B = Promise.resolve(B)), W ? B.then(W) : B));
      } catch (Q) {
        return C(Q);
      }
      var B, W, Y;
      return N && N.then ? N.then(void 0, C) : N;
    }(0, function(S) {
      if (S.status === 404)
        return !1;
      throw S;
    });
  });
  function lo(w, f, m) {
    return m ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  const bp = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const S = Re({ url: E(w.remoteURL, l(f), "/"), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: m.deep ? "infinity" : "1" } }, w, m);
    return lo(Ue(S), function(C) {
      return tt(w, C), lo(C.text(), function(N) {
        if (!N)
          throw new Error("Failed parsing directory contents: Empty response");
        return lo(se(N), function(B) {
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
              }(de.href), { propstat: { prop: ve } } = de;
              return U(ve, ye === "/" ? decodeURIComponent(g(Se)) : g(v().relative(decodeURIComponent(ye), decodeURIComponent(Se))), we);
            });
            return Pe ? ie : ie.filter((de) => de.basename && (de.type === "file" || de.filename !== oe.replace(/\/$/, "")));
          }(B, a(w.remoteBasePath || w.remotePath), W, m.details, m.includeSelf);
          return m.glob && (Y = function(Q, J) {
            return Q.filter((oe) => lr(oe.filename, J, { matchBase: !0 }));
          }(Y, m.glob)), Kt(C, Y, m.details);
        });
      });
    });
  });
  function co(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }
  const Ep = co(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const S = Re({ url: E(w.remoteURL, l(f)), method: "GET", headers: { Accept: "text/plain" }, transformResponse: [Op] }, w, m);
    return oi(Ue(S), function(C) {
      return tt(w, C), oi(C.text(), function(N) {
        return Kt(C, N, m.details);
      });
    });
  });
  function oi(w, f, m) {
    return m ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  const Tp = co(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const S = Re({ url: E(w.remoteURL, l(f)), method: "GET" }, w, m);
    return oi(Ue(S), function(C) {
      let N;
      return tt(w, C), function(B, W) {
        var Y = B();
        return Y && Y.then ? Y.then(W) : W();
      }(function() {
        return oi(C.arrayBuffer(), function(B) {
          N = B;
        });
      }, function() {
        return Kt(C, N, m.details);
      });
    });
  }), Sp = co(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { format: S = "binary" } = m;
    if (S !== "binary" && S !== "text")
      throw new s({ info: { code: Z.InvalidOutputFormat } }, "Invalid output format: ".concat(S));
    return S === "text" ? Ep(w, f, m) : Tp(w, f, m);
  }), Op = (w) => w;
  function $p(w) {
    return new Wr.XMLBuilder({ attributeNamePrefix: "@_", format: !0, ignoreAttributes: !1, suppressEmptyNode: !0 }).build(Ns({ lockinfo: { "@_xmlns:d": "DAV:", lockscope: { exclusive: {} }, locktype: { write: {} }, owner: { href: w } } }, "d"));
  }
  function Ns(w, f) {
    const m = { ...w };
    for (const S in m)
      m.hasOwnProperty(S) && (m[S] && typeof m[S] == "object" && S.indexOf(":") === -1 ? (m["".concat(f, ":").concat(S)] = Ns(m[S], f), delete m[S]) : /^@_/.test(S) === !1 && (m["".concat(f, ":").concat(S)] = m[S], delete m[S]));
    return m;
  }
  function fo(w, f, m) {
    return m ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  function Ps(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }
  const Ip = Ps(function(w, f, m) {
    let S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const C = Re({ url: E(w.remoteURL, l(f)), method: "UNLOCK", headers: { "Lock-Token": m } }, w, S);
    return fo(Ue(C), function(N) {
      if (tt(w, N), N.status !== 204 && N.status !== 200)
        throw Gr(N);
    });
  }), Ap = Ps(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { refreshToken: S, timeout: C = _p } = m, N = { Accept: "text/plain,application/xml", Timeout: C };
    S && (N.If = S);
    const B = Re({ url: E(w.remoteURL, l(f)), method: "LOCK", headers: N, data: $p(w.contactHref) }, w, m);
    return fo(Ue(B), function(W) {
      return tt(w, W), fo(W.text(), function(Y) {
        const Q = (we = Y, new Wr.XMLParser({ removeNSPrefix: !0, parseAttributeValue: !0, parseTagValue: !0 }).parse(we)), J = Ct().get(Q, "prop.lockdiscovery.activelock.locktoken.href"), oe = Ct().get(Q, "prop.lockdiscovery.activelock.timeout");
        var we;
        if (!J)
          throw Gr(W, "No lock token received: ");
        return { token: J, serverTimeout: oe };
      });
    });
  }), _p = "Infinite, Second-4100000000";
  function po(w, f, m) {
    return m ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  const xp = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(w) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const m = f.path || "/", S = Re({ url: E(w.remoteURL, m), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, w, f);
    return po(Ue(S), function(C) {
      return tt(w, C), po(C.text(), function(N) {
        return po(se(N), function(B) {
          const W = function(Y) {
            try {
              const [Q] = Y.multistatus.response, { propstat: { prop: { "quota-used-bytes": J, "quota-available-bytes": oe } } } = Q;
              return J !== void 0 && oe !== void 0 ? { used: parseInt(J, 10), available: ae(oe) } : null;
            } catch {
            }
            return null;
          }(B);
          return Kt(C, W, f.details);
        });
      });
    });
  });
  function ho(w, f, m) {
    return m ? f ? f(w) : w : (w && w.then || (w = Promise.resolve(w)), f ? w.then(f) : w);
  }
  const Np = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(w, f) {
    let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { details: S = !1 } = m, C = Re({ url: E(w.remoteURL, l(f)), method: "SEARCH", headers: { Accept: "text/plain,application/xml", "Content-Type": w.headers["Content-Type"] || "application/xml; charset=utf-8" } }, w, m);
    return ho(Ue(C), function(N) {
      return tt(w, N), ho(N.text(), function(B) {
        return ho(se(B), function(W) {
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
          }(W, f, S);
          return Kt(N, Y, S);
        });
      });
    });
  }), Pp = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(w, f, m) {
    let S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const C = Re({ url: E(w.remoteURL, l(f)), method: "MOVE", headers: { Destination: E(w.remoteURL, l(m)) } }, w, S);
    return B = function(W) {
      tt(w, W);
    }, (N = Ue(C)) && N.then || (N = Promise.resolve(N)), B ? N.then(B) : N;
    var N, B;
  });
  var Rp = je(172);
  const Cp = /* @__PURE__ */ function(w) {
    return function() {
      for (var f = [], m = 0; m < arguments.length; m++)
        f[m] = arguments[m];
      try {
        return Promise.resolve(w.apply(this, f));
      } catch (S) {
        return Promise.reject(S);
      }
    };
  }(function(w, f, m) {
    let S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const { contentLength: C = !0, overwrite: N = !0 } = S, B = { "Content-Type": "application/octet-stream" };
    C === !1 || (B["Content-Length"] = "".concat(typeof C == "number" ? C : function(J) {
      if (_e(J))
        return J.byteLength;
      if (Ie(J))
        return J.length;
      if (typeof J == "string")
        return (0, Rp.d)(J);
      throw new s({ info: { code: Z.DataTypeNoLength } }, "Cannot calculate data length: Invalid type");
    }(m))), N || (B["If-None-Match"] = "*");
    const W = Re({ url: E(w.remoteURL, l(f)), method: "PUT", headers: B, data: m }, w, S);
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
  }), Lp = "https://github.com/perry-mitchell/webdav-client/blob/master/LOCK_CONTACT.md";
  function Fp(w) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { authType: m = null, remoteBasePath: S, contactHref: C = Lp, ha1: N, headers: B = {}, httpAgent: W, httpsAgent: Y, password: Q, token: J, username: oe, withCredentials: we } = f;
    let Pe = m;
    Pe || (Pe = oe || Q ? X.Password : X.None);
    const ye = { authType: Pe, remoteBasePath: S, contactHref: C, ha1: N, headers: Object.assign({}, B), httpAgent: W, httpsAgent: Y, password: Q, remotePath: p(w), remoteURL: w, token: J, username: oe, withCredentials: we };
    return function(ne, ie, de, Se, ve) {
      switch (ne.authType) {
        case X.Digest:
          ne.digest = /* @__PURE__ */ function(ze, ct, ke) {
            return { username: ze, password: ct, ha1: ke, nc: 0, algorithm: "md5", hasDigestAuth: !1 };
          }(ie, de, ve);
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
    }(ye, oe, Q, J, N), { copyFile: (ne, ie, de) => Gt(ye, ne, ie, de), createDirectory: (ne, ie) => uo(ye, ne, ie), createReadStream: (ne, ie) => function(de, Se) {
      let ve = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      const Oe = new (xs()).PassThrough();
      return gp(de, Se, ve).then((ze) => {
        ze.pipe(Oe);
      }).catch((ze) => {
        Oe.emit("error", ze);
      }), Oe;
    }(ye, ne, ie), createWriteStream: (ne, ie, de) => function(Se, ve) {
      let Oe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, ze = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : vp;
      const ct = new (xs()).PassThrough(), ke = {};
      Oe.overwrite === !1 && (ke["If-None-Match"] = "*");
      const Jt = Re({ url: E(Se.remoteURL, l(ve)), method: "PUT", headers: ke, data: ct, maxRedirects: 0 }, Se, Oe);
      return Ue(Jt).then((Ke) => tt(Se, Ke)).then((Ke) => {
        setTimeout(() => {
          ze(Ke);
        }, 0);
      }).catch((Ke) => {
        ct.emit("error", Ke);
      }), ct;
    }(ye, ne, ie, de), customRequest: (ne, ie) => mp(ye, ne, ie), deleteFile: (ne, ie) => yp(ye, ne, ie), exists: (ne, ie) => wp(ye, ne, ie), getDirectoryContents: (ne, ie) => bp(ye, ne, ie), getFileContents: (ne, ie) => Sp(ye, ne, ie), getFileDownloadLink: (ne) => function(ie, de) {
      let Se = E(ie.remoteURL, l(de));
      const ve = /^https:/i.test(Se) ? "https" : "http";
      switch (ie.authType) {
        case X.None:
          break;
        case X.Password: {
          const Oe = F(ie.headers.Authorization.replace(/^Basic /i, "").trim());
          Se = Se.replace(/^https?:\/\//, "".concat(ve, "://").concat(Oe, "@"));
          break;
        }
        default:
          throw new s({ info: { code: Z.LinkUnsupportedAuthType } }, "Unsupported auth type for file link: ".concat(ie.authType));
      }
      return Se;
    }(ye, ne), getFileUploadLink: (ne) => function(ie, de) {
      let Se = "".concat(E(ie.remoteURL, l(de)), "?Content-Type=application/octet-stream");
      const ve = /^https:/i.test(Se) ? "https" : "http";
      switch (ie.authType) {
        case X.None:
          break;
        case X.Password: {
          const Oe = F(ie.headers.Authorization.replace(/^Basic /i, "").trim());
          Se = Se.replace(/^https?:\/\//, "".concat(ve, "://").concat(Oe, "@"));
          break;
        }
        default:
          throw new s({ info: { code: Z.LinkUnsupportedAuthType } }, "Unsupported auth type for file link: ".concat(ie.authType));
      }
      return Se;
    }(ye, ne), getHeaders: () => Object.assign({}, ye.headers), getQuota: (ne) => xp(ye, ne), lock: (ne, ie) => Ap(ye, ne, ie), moveFile: (ne, ie, de) => Pp(ye, ne, ie, de), putFileContents: (ne, ie, de) => Cp(ye, ne, ie, de), search: (ne, ie) => Np(ye, ne, ie), setHeaders: (ne) => {
      ye.headers = Object.assign({}, ne);
    }, stat: (ne, ie) => Ye(ye, ne, ie), unlock: (ne, ie, de) => Ip(ye, ne, ie, de) };
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
const HS = (r) => r === null ? pa.getLoggerBuilder().setApp("files").build() : pa.getLoggerBuilder().setApp("files").setUid(r.uid).build(), Ql = HS(za()), XS = function(r) {
  if (typeof window._nc_fileactions > "u" && (window._nc_fileactions = [], Ql.debug("FileActions initialized")), window._nc_fileactions.find((e) => e.id === r.id)) {
    Ql.error(`FileAction ${r.id} already registered`, { action: r });
    return;
  }
  window._nc_fileactions.push(r);
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
var ec;
`${(ec = za()) == null ? void 0 : ec.uid}`;
Jf("dav");
var hp = {};
(function(r) {
  const e = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", n = e + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", i = "[" + e + "][" + n + "]*", s = new RegExp("^" + i + "$"), c = function(h, y) {
    const l = [];
    let a = y.exec(h);
    for (; a; ) {
      const g = [];
      g.startIndex = y.lastIndex - a[0].length;
      const p = a.length;
      for (let E = 0; E < p; E++)
        g.push(a[E]);
      l.push(g), a = y.exec(h);
    }
    return l;
  }, v = function(h) {
    const y = s.exec(h);
    return !(y === null || typeof y > "u");
  };
  r.isExist = function(h) {
    return typeof h < "u";
  }, r.isEmptyObject = function(h) {
    return Object.keys(h).length === 0;
  }, r.merge = function(h, y, l) {
    if (y) {
      const a = Object.keys(y), g = a.length;
      for (let p = 0; p < g; p++)
        l === "strict" ? h[a[p]] = [y[a[p]]] : h[a[p]] = y[a[p]];
    }
  }, r.getValue = function(h) {
    return r.isExist(h) ? h : "";
  }, r.isName = v, r.getAllMatches = c, r.nameRegexp = i;
})(hp);
!Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt);
!Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
const YS = hp;
"<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, YS.nameRegexp);
const KS = "application/internet-shortcut";
class ZS {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    XS({
      id: "editLink",
      displayName: () => t("files_linkeditor", "Edit link"),
      // TODO:
      iconSvgInline: () => "link",
      exec: async (e, n, i) => {
        alert("Not implemented");
      },
      permissions: window.OC.currentUser && window.OC.PERMISSION_UPDATE,
      enabled: (e, n) => e.every((i) => KS.includes(i.mime)) && window.OC.currentUser && window.OC.PERMISSION_UPDATE
    });
  }
  static async loadAndChangeViewMode({ fileName: e, context: n, nextViewMode: i, publicUser: s, downloadUrl: c }) {
    const v = n ? encodeURI(n.fileList.linkTo() + "?path=" + n.dir) : window.location.href;
    ar.update(() => i), Rr.update(
      () => ft.getFileConfig({
        name: e,
        currentUrl: v,
        dir: n ? n.dir : ""
      })
    );
    let h = {};
    if (s ? h = await ft.loadPublic({ downloadUrl: c }) : h = await ft.load({ fileName: e, dir: n.dir }), h) {
      const y = xt.getExtension(e);
      let l = {};
      y === "webloc" ? l = xt.parseWeblocFile(h.filecontents) : l = xt.parseURLFile(h.filecontents), Rr.update(
        (a) => ft.getFileConfig({ ...a, ...l, fileModifiedTime: h.mtime, isLoaded: !0 })
      );
    } else
      window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async saveAndChangeViewMode({ name: e, dir: n, url: i, fileModifiedTime: s, sameWindow: c, skipConfirmation: v }) {
    const h = xt.getExtension(e);
    let y = "";
    h === "webloc" ? y = xt.generateWeblocFileContent("", i, c, v) : y = xt.generateURLFileContent("", i, c, v), await ft.save({ fileContent: y, name: e, dir: n, fileModifiedTime: s }), ar.update(() => "none");
  }
}
const JS = [];
JS.push(
  new Vh({
    target: document.body,
    props: {}
  })
);
ZS.registerFileActions();
