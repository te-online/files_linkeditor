var uu = Object.defineProperty;
var No = (n) => {
  throw TypeError(n);
};
var lu = (n, e, r) => e in n ? uu(n, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[e] = r;
var ge = (n, e, r) => lu(n, typeof e != "symbol" ? e + "" : e, r), jn = (n, e, r) => e.has(n) || No("Cannot " + r);
var z = (n, e, r) => (jn(n, e, "read from private field"), r ? r.call(n) : e.get(n)), rt = (n, e, r) => e.has(n) ? No("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, r), Te = (n, e, r, i) => (jn(n, e, "write to private field"), i ? i.call(n, r) : e.set(n, r), r), Kt = (n, e, r) => (jn(n, e, "access private method"), r);
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
    return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
    i(l);
  new MutationObserver((l) => {
    for (const a of l)
      if (a.type === "childList")
        for (const h of a.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && i(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(l) {
    const a = {};
    return l.integrity && (a.integrity = l.integrity), l.referrerPolicy && (a.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? a.credentials = "include" : l.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
  }
  function i(l) {
    if (l.ep)
      return;
    l.ep = !0;
    const a = r(l);
    fetch(l.href, a);
  }
})();
function kt() {
}
function cu(n, e) {
  for (const r in e) n[r] = e[r];
  return (
    /** @type {T & S} */
    n
  );
}
function Qs(n) {
  return n();
}
function Ao() {
  return /* @__PURE__ */ Object.create(null);
}
function Xt(n) {
  n.forEach(Qs);
}
function Di(n) {
  return typeof n == "function";
}
function gr(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function fu(n) {
  return Object.keys(n).length === 0;
}
function hu(n, e, r, i) {
  if (n) {
    const l = ea(n, e, r, i);
    return n[0](l);
  }
}
function ea(n, e, r, i) {
  return n[1] && i ? cu(r.ctx.slice(), n[1](i(e))) : r.ctx;
}
function pu(n, e, r, i) {
  return n[2], e.dirty;
}
function du(n, e, r, i, l, a) {
  if (l) {
    const h = ea(e, r, i, a);
    n.p(h, l);
  }
}
function gu(n) {
  if (n.ctx.length > 32) {
    const e = [], r = n.ctx.length / 32;
    for (let i = 0; i < r; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
const on = globalThis || void 0 || self;
function ee(n, e) {
  n.appendChild(e);
}
function me(n, e, r) {
  n.insertBefore(e, r || null);
}
function de(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function ue(n) {
  return document.createElement(n);
}
function Be(n) {
  return document.createTextNode(n);
}
function be() {
  return Be(" ");
}
function mu() {
  return Be("");
}
function nt(n, e, r, i) {
  return n.addEventListener(e, r, i), () => n.removeEventListener(e, r, i);
}
function Vt(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function H(n, e, r) {
  r == null ? n.removeAttribute(e) : n.getAttribute(e) !== r && n.setAttribute(e, r);
}
function yu(n) {
  return Array.from(n.childNodes);
}
function ji(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function vn(n, e) {
  n.value = e ?? "";
}
function Gi(n, e, r, i) {
  r == null ? n.style.removeProperty(e) : n.style.setProperty(e, r, "");
}
let Jr;
function Hr(n) {
  Jr = n;
}
function ta() {
  if (!Jr) throw new Error("Function called outside component initialization");
  return Jr;
}
function Sn(n) {
  ta().$$.on_mount.push(n);
}
function Cn(n) {
  ta().$$.on_destroy.push(n);
}
const _r = [], To = [];
let Sr = [];
const Io = [], wu = /* @__PURE__ */ Promise.resolve();
let Oi = !1;
function Eu() {
  Oi || (Oi = !0, wu.then(ra));
}
function Ri(n) {
  Sr.push(n);
}
const Gn = /* @__PURE__ */ new Set();
let br = 0;
function ra() {
  if (br !== 0)
    return;
  const n = Jr;
  do {
    try {
      for (; br < _r.length; ) {
        const e = _r[br];
        br++, Hr(e), vu(e.$$);
      }
    } catch (e) {
      throw _r.length = 0, br = 0, e;
    }
    for (Hr(null), _r.length = 0, br = 0; To.length; ) To.pop()();
    for (let e = 0; e < Sr.length; e += 1) {
      const r = Sr[e];
      Gn.has(r) || (Gn.add(r), r());
    }
    Sr.length = 0;
  } while (_r.length);
  for (; Io.length; )
    Io.pop()();
  Oi = !1, Gn.clear(), Hr(n);
}
function vu(n) {
  if (n.fragment !== null) {
    n.update(), Xt(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Ri);
  }
}
function bu(n) {
  const e = [], r = [];
  Sr.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : r.push(i)), r.forEach((i) => i()), Sr = e;
}
const gn = /* @__PURE__ */ new Set();
let cr;
function qn() {
  cr = {
    r: 0,
    c: [],
    p: cr
    // parent group
  };
}
function Vn() {
  cr.r || Xt(cr.c), cr = cr.p;
}
function Me(n, e) {
  n && n.i && (gn.delete(n), n.i(e));
}
function ut(n, e, r, i) {
  if (n && n.o) {
    if (gn.has(n)) return;
    gn.add(n), cr.c.push(() => {
      gn.delete(n), i && (r && n.d(1), i());
    }), n.o(e);
  } else i && i();
}
function $r(n) {
  n && n.c();
}
function mr(n, e, r) {
  const { fragment: i, after_update: l } = n.$$;
  i && i.m(e, r), Ri(() => {
    const a = n.$$.on_mount.map(Qs).filter(Di);
    n.$$.on_destroy ? n.$$.on_destroy.push(...a) : Xt(a), n.$$.on_mount = [];
  }), l.forEach(Ri);
}
function yr(n, e) {
  const r = n.$$;
  r.fragment !== null && (bu(r.after_update), Xt(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Nu(n, e) {
  n.$$.dirty[0] === -1 && (_r.push(n), Eu(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Fr(n, e, r, i, l, a, h = null, c = [-1]) {
  const u = Jr;
  Hr(n);
  const o = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: kt,
    not_equal: l,
    bound: Ao(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Ao(),
    dirty: c,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  h && h(o.root);
  let s = !1;
  if (o.ctx = r ? r(n, e.props || {}, (g, d, ...m) => {
    const y = m.length ? m[0] : d;
    return o.ctx && l(o.ctx[g], o.ctx[g] = y) && (!o.skip_bound && o.bound[g] && o.bound[g](y), s && Nu(n, g)), d;
  }) : [], o.update(), s = !0, Xt(o.before_update), o.fragment = i ? i(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      const g = yu(e.target);
      o.fragment && o.fragment.l(g), g.forEach(de);
    } else
      o.fragment && o.fragment.c();
    e.intro && Me(n.$$.fragment), mr(n, e.target, e.anchor), ra();
  }
  Hr(u);
}
class kr {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ge(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ge(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    yr(this, 1), this.$destroy = kt;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, r) {
    if (!Di(r))
      return kt;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(r), () => {
      const l = i.indexOf(r);
      l !== -1 && i.splice(l, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !fu(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Au = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Au);
function Tu(n) {
  let e, r, i, l, a;
  const h = (
    /*#slots*/
    n[2].default
  ), c = hu(
    h,
    n,
    /*$$scope*/
    n[1],
    null
  );
  return {
    c() {
      e = ue("div"), r = be(), i = ue("div"), c && c.c(), H(e, "class", "oc-dialog-dim"), H(i, "class", l = `oc-dialog ${/*loading*/
      n[0] ? "icon-loading" : ""}`), Gi(i, "position", "fixed");
    },
    m(u, o) {
      me(u, e, o), me(u, r, o), me(u, i, o), c && c.m(i, null), a = !0;
    },
    p(u, [o]) {
      c && c.p && (!a || o & /*$$scope*/
      2) && du(
        c,
        h,
        u,
        /*$$scope*/
        u[1],
        a ? pu(
          h,
          /*$$scope*/
          u[1],
          o,
          null
        ) : gu(
          /*$$scope*/
          u[1]
        ),
        null
      ), (!a || o & /*loading*/
      1 && l !== (l = `oc-dialog ${/*loading*/
      u[0] ? "icon-loading" : ""}`)) && H(i, "class", l);
    },
    i(u) {
      a || (Me(c, u), a = !0);
    },
    o(u) {
      ut(c, u), a = !1;
    },
    d(u) {
      u && (de(e), de(r), de(i)), c && c.d(u);
    }
  };
}
function Iu(n, e, r) {
  let { $$slots: i = {}, $$scope: l } = e, { loading: a = !1 } = e;
  return n.$$set = (h) => {
    "loading" in h && r(0, a = h.loading), "$$scope" in h && r(1, l = h.$$scope);
  }, [a, l, i];
}
class qi extends kr {
  constructor(e) {
    super(), Fr(this, e, Iu, Tu, gr, { loading: 0 });
  }
}
const Nr = [];
function na(n, e = kt) {
  let r;
  const i = /* @__PURE__ */ new Set();
  function l(c) {
    if (gr(n, c) && (n = c, r)) {
      const u = !Nr.length;
      for (const o of i)
        o[1](), Nr.push(o, n);
      if (u) {
        for (let o = 0; o < Nr.length; o += 2)
          Nr[o][0](Nr[o + 1]);
        Nr.length = 0;
      }
    }
  }
  function a(c) {
    l(c(n));
  }
  function h(c, u = kt) {
    const o = [c, u];
    return i.add(o), i.size === 1 && (r = e(l, a) || kt), c(n), () => {
      i.delete(o), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: l, update: a, subscribe: h };
}
function Vi(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Wi = {}, Ge = {};
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.BLANK_URL = Ge.relativeFirstCharacters = Ge.urlSchemeRegex = Ge.ctrlCharactersRegex = Ge.htmlCtrlEntityRegex = Ge.htmlEntitiesRegex = Ge.invalidProtocolRegex = void 0;
Ge.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
Ge.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
Ge.htmlCtrlEntityRegex = /&(newline|tab);/gi;
Ge.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
Ge.urlSchemeRegex = /^.+(:|&colon;)/gim;
Ge.relativeFirstCharacters = [".", "/"];
Ge.BLANK_URL = "about:blank";
Object.defineProperty(Wi, "__esModule", { value: !0 });
var He = Wi.sanitizeUrl = void 0, st = Ge;
function _u(n) {
  return st.relativeFirstCharacters.indexOf(n[0]) > -1;
}
function Ou(n) {
  var e = n.replace(st.ctrlCharactersRegex, "");
  return e.replace(st.htmlEntitiesRegex, function(r, i) {
    return String.fromCharCode(i);
  });
}
function Ru(n) {
  if (!n)
    return st.BLANK_URL;
  var e, r = n;
  do
    r = Ou(r).replace(st.htmlCtrlEntityRegex, "").replace(st.ctrlCharactersRegex, "").trim(), e = r.match(st.ctrlCharactersRegex) || r.match(st.htmlEntitiesRegex) || r.match(st.htmlCtrlEntityRegex);
  while (e && e.length > 0);
  var i = r;
  if (!i)
    return st.BLANK_URL;
  if (_u(i))
    return i;
  var l = i.match(st.urlSchemeRegex);
  if (!l)
    return i;
  var a = l[0];
  return st.invalidProtocolRegex.test(a) ? st.BLANK_URL : i;
}
He = Wi.sanitizeUrl = Ru;
function xu(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var ia = { exports: {} }, Ie = ia.exports = {}, Ct, Lt;
function xi() {
  throw new Error("setTimeout has not been defined");
}
function Si() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Ct = setTimeout : Ct = xi;
  } catch {
    Ct = xi;
  }
  try {
    typeof clearTimeout == "function" ? Lt = clearTimeout : Lt = Si;
  } catch {
    Lt = Si;
  }
})();
function oa(n) {
  if (Ct === setTimeout)
    return setTimeout(n, 0);
  if ((Ct === xi || !Ct) && setTimeout)
    return Ct = setTimeout, setTimeout(n, 0);
  try {
    return Ct(n, 0);
  } catch {
    try {
      return Ct.call(null, n, 0);
    } catch {
      return Ct.call(this, n, 0);
    }
  }
}
function Su(n) {
  if (Lt === clearTimeout)
    return clearTimeout(n);
  if ((Lt === Si || !Lt) && clearTimeout)
    return Lt = clearTimeout, clearTimeout(n);
  try {
    return Lt(n);
  } catch {
    try {
      return Lt.call(null, n);
    } catch {
      return Lt.call(this, n);
    }
  }
}
var qt = [], Cr = !1, fr, mn = -1;
function Cu() {
  !Cr || !fr || (Cr = !1, fr.length ? qt = fr.concat(qt) : mn = -1, qt.length && sa());
}
function sa() {
  if (!Cr) {
    var n = oa(Cu);
    Cr = !0;
    for (var e = qt.length; e; ) {
      for (fr = qt, qt = []; ++mn < e; )
        fr && fr[mn].run();
      mn = -1, e = qt.length;
    }
    fr = null, Cr = !1, Su(n);
  }
}
Ie.nextTick = function(n) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      e[r - 1] = arguments[r];
  qt.push(new aa(n, e)), qt.length === 1 && !Cr && oa(sa);
};
function aa(n, e) {
  this.fun = n, this.array = e;
}
aa.prototype.run = function() {
  this.fun.apply(null, this.array);
};
Ie.title = "browser";
Ie.browser = !0;
Ie.env = {};
Ie.argv = [];
Ie.version = "";
Ie.versions = {};
function zt() {
}
Ie.on = zt;
Ie.addListener = zt;
Ie.once = zt;
Ie.off = zt;
Ie.removeListener = zt;
Ie.removeAllListeners = zt;
Ie.emit = zt;
Ie.prependListener = zt;
Ie.prependOnceListener = zt;
Ie.listeners = function(n) {
  return [];
};
Ie.binding = function(n) {
  throw new Error("process.binding is not supported");
};
Ie.cwd = function() {
  return "/";
};
Ie.chdir = function(n) {
  throw new Error("process.chdir is not supported");
};
Ie.umask = function() {
  return 0;
};
var Lu = ia.exports;
const qe = /* @__PURE__ */ xu(Lu);
function Rt(n) {
  if (typeof n != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(n));
}
function _o(n, e) {
  for (var r = "", i = 0, l = -1, a = 0, h, c = 0; c <= n.length; ++c) {
    if (c < n.length)
      h = n.charCodeAt(c);
    else {
      if (h === 47)
        break;
      h = 47;
    }
    if (h === 47) {
      if (!(l === c - 1 || a === 1)) if (l !== c - 1 && a === 2) {
        if (r.length < 2 || i !== 2 || r.charCodeAt(r.length - 1) !== 46 || r.charCodeAt(r.length - 2) !== 46) {
          if (r.length > 2) {
            var u = r.lastIndexOf("/");
            if (u !== r.length - 1) {
              u === -1 ? (r = "", i = 0) : (r = r.slice(0, u), i = r.length - 1 - r.lastIndexOf("/")), l = c, a = 0;
              continue;
            }
          } else if (r.length === 2 || r.length === 1) {
            r = "", i = 0, l = c, a = 0;
            continue;
          }
        }
        e && (r.length > 0 ? r += "/.." : r = "..", i = 2);
      } else
        r.length > 0 ? r += "/" + n.slice(l + 1, c) : r = n.slice(l + 1, c), i = c - l - 1;
      l = c, a = 0;
    } else h === 46 && a !== -1 ? ++a : a = -1;
  }
  return r;
}
function Pu(n, e) {
  var r = e.dir || e.root, i = e.base || (e.name || "") + (e.ext || "");
  return r ? r === e.root ? r + i : r + n + i : i;
}
var Lr = {
  // path.resolve([from ...], to)
  resolve: function() {
    for (var e = "", r = !1, i, l = arguments.length - 1; l >= -1 && !r; l--) {
      var a;
      l >= 0 ? a = arguments[l] : (i === void 0 && (i = qe.cwd()), a = i), Rt(a), a.length !== 0 && (e = a + "/" + e, r = a.charCodeAt(0) === 47);
    }
    return e = _o(e, !r), r ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
  },
  normalize: function(e) {
    if (Rt(e), e.length === 0) return ".";
    var r = e.charCodeAt(0) === 47, i = e.charCodeAt(e.length - 1) === 47;
    return e = _o(e, !r), e.length === 0 && !r && (e = "."), e.length > 0 && i && (e += "/"), r ? "/" + e : e;
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
    for (var l = e.length, a = l - i, h = 1; h < r.length && r.charCodeAt(h) === 47; ++h)
      ;
    for (var c = r.length, u = c - h, o = a < u ? a : u, s = -1, g = 0; g <= o; ++g) {
      if (g === o) {
        if (u > o) {
          if (r.charCodeAt(h + g) === 47)
            return r.slice(h + g + 1);
          if (g === 0)
            return r.slice(h + g);
        } else a > o && (e.charCodeAt(i + g) === 47 ? s = g : g === 0 && (s = 0));
        break;
      }
      var d = e.charCodeAt(i + g), m = r.charCodeAt(h + g);
      if (d !== m)
        break;
      d === 47 && (s = g);
    }
    var y = "";
    for (g = i + s + 1; g <= l; ++g)
      (g === l || e.charCodeAt(g) === 47) && (y.length === 0 ? y += ".." : y += "/..");
    return y.length > 0 ? y + r.slice(h + s) : (h += s, r.charCodeAt(h) === 47 && ++h, r.slice(h));
  },
  _makeLong: function(e) {
    return e;
  },
  dirname: function(e) {
    if (Rt(e), e.length === 0) return ".";
    for (var r = e.charCodeAt(0), i = r === 47, l = -1, a = !0, h = e.length - 1; h >= 1; --h)
      if (r = e.charCodeAt(h), r === 47) {
        if (!a) {
          l = h;
          break;
        }
      } else
        a = !1;
    return l === -1 ? i ? "/" : "." : i && l === 1 ? "//" : e.slice(0, l);
  },
  basename: function(e, r) {
    if (r !== void 0 && typeof r != "string") throw new TypeError('"ext" argument must be a string');
    Rt(e);
    var i = 0, l = -1, a = !0, h;
    if (r !== void 0 && r.length > 0 && r.length <= e.length) {
      if (r.length === e.length && r === e) return "";
      var c = r.length - 1, u = -1;
      for (h = e.length - 1; h >= 0; --h) {
        var o = e.charCodeAt(h);
        if (o === 47) {
          if (!a) {
            i = h + 1;
            break;
          }
        } else
          u === -1 && (a = !1, u = h + 1), c >= 0 && (o === r.charCodeAt(c) ? --c === -1 && (l = h) : (c = -1, l = u));
      }
      return i === l ? l = u : l === -1 && (l = e.length), e.slice(i, l);
    } else {
      for (h = e.length - 1; h >= 0; --h)
        if (e.charCodeAt(h) === 47) {
          if (!a) {
            i = h + 1;
            break;
          }
        } else l === -1 && (a = !1, l = h + 1);
      return l === -1 ? "" : e.slice(i, l);
    }
  },
  extname: function(e) {
    Rt(e);
    for (var r = -1, i = 0, l = -1, a = !0, h = 0, c = e.length - 1; c >= 0; --c) {
      var u = e.charCodeAt(c);
      if (u === 47) {
        if (!a) {
          i = c + 1;
          break;
        }
        continue;
      }
      l === -1 && (a = !1, l = c + 1), u === 46 ? r === -1 ? r = c : h !== 1 && (h = 1) : r !== -1 && (h = -1);
    }
    return r === -1 || l === -1 || // We saw a non-dot character immediately before the dot
    h === 0 || // The (right-most) trimmed path component is exactly '..'
    h === 1 && r === l - 1 && r === i + 1 ? "" : e.slice(r, l);
  },
  format: function(e) {
    if (e === null || typeof e != "object")
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
    return Pu("/", e);
  },
  parse: function(e) {
    Rt(e);
    var r = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0) return r;
    var i = e.charCodeAt(0), l = i === 47, a;
    l ? (r.root = "/", a = 1) : a = 0;
    for (var h = -1, c = 0, u = -1, o = !0, s = e.length - 1, g = 0; s >= a; --s) {
      if (i = e.charCodeAt(s), i === 47) {
        if (!o) {
          c = s + 1;
          break;
        }
        continue;
      }
      u === -1 && (o = !1, u = s + 1), i === 46 ? h === -1 ? h = s : g !== 1 && (g = 1) : h !== -1 && (g = -1);
    }
    return h === -1 || u === -1 || // We saw a non-dot character immediately before the dot
    g === 0 || // The (right-most) trimmed path component is exactly '..'
    g === 1 && h === u - 1 && h === c + 1 ? u !== -1 && (c === 0 && l ? r.base = r.name = e.slice(1, u) : r.base = r.name = e.slice(c, u)) : (c === 0 && l ? (r.name = e.slice(1, h), r.base = e.slice(1, u)) : (r.name = e.slice(c, h), r.base = e.slice(c, u)), r.ext = e.slice(h, u)), c > 0 ? r.dir = e.slice(0, c - 1) : l && (r.dir = "/"), r;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
Lr.posix = Lr;
var ur = Lr;
function $u(n) {
  return n && n.split("/").map(encodeURIComponent).join("/");
}
const Fu = typeof qe == "object" && qe.env && qe.env.NODE_DEBUG && /\bsemver\b/i.test(qe.env.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
};
var ua = Fu;
const la = 256, ku = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, Mu = 16, Uu = la - 6;
var ca = {
  MAX_LENGTH: la,
  MAX_SAFE_COMPONENT_LENGTH: Mu,
  MAX_SAFE_BUILD_LENGTH: Uu,
  MAX_SAFE_INTEGER: ku
}, Ci = { exports: {} };
(function(n, e) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: r,
    MAX_SAFE_BUILD_LENGTH: i,
    MAX_LENGTH: l
  } = ca, a = ua;
  e = n.exports = {};
  const h = e.re = [], c = e.safeRe = [], u = e.src = [], o = e.t = {};
  let s = 0;
  const g = "[a-zA-Z0-9-]", d = [
    ["\\s", 1],
    ["\\d", l],
    [g, i]
  ], m = (v) => {
    for (const [_, T] of d)
      v = v.split(`${_}*`).join(`${_}{0,${T}}`).split(`${_}+`).join(`${_}{1,${T}}`);
    return v;
  }, y = (v, _, T) => {
    const E = m(_), I = s++;
    a(v, I, _), o[v] = I, u[I] = _, h[I] = new RegExp(_, T ? "g" : void 0), c[I] = new RegExp(E, T ? "g" : void 0);
  };
  y("NUMERICIDENTIFIER", "0|[1-9]\\d*"), y("NUMERICIDENTIFIERLOOSE", "\\d+"), y("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${g}*`), y("MAINVERSION", `(${u[o.NUMERICIDENTIFIER]})\\.(${u[o.NUMERICIDENTIFIER]})\\.(${u[o.NUMERICIDENTIFIER]})`), y("MAINVERSIONLOOSE", `(${u[o.NUMERICIDENTIFIERLOOSE]})\\.(${u[o.NUMERICIDENTIFIERLOOSE]})\\.(${u[o.NUMERICIDENTIFIERLOOSE]})`), y("PRERELEASEIDENTIFIER", `(?:${u[o.NUMERICIDENTIFIER]}|${u[o.NONNUMERICIDENTIFIER]})`), y("PRERELEASEIDENTIFIERLOOSE", `(?:${u[o.NUMERICIDENTIFIERLOOSE]}|${u[o.NONNUMERICIDENTIFIER]})`), y("PRERELEASE", `(?:-(${u[o.PRERELEASEIDENTIFIER]}(?:\\.${u[o.PRERELEASEIDENTIFIER]})*))`), y("PRERELEASELOOSE", `(?:-?(${u[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[o.PRERELEASEIDENTIFIERLOOSE]})*))`), y("BUILDIDENTIFIER", `${g}+`), y("BUILD", `(?:\\+(${u[o.BUILDIDENTIFIER]}(?:\\.${u[o.BUILDIDENTIFIER]})*))`), y("FULLPLAIN", `v?${u[o.MAINVERSION]}${u[o.PRERELEASE]}?${u[o.BUILD]}?`), y("FULL", `^${u[o.FULLPLAIN]}$`), y("LOOSEPLAIN", `[v=\\s]*${u[o.MAINVERSIONLOOSE]}${u[o.PRERELEASELOOSE]}?${u[o.BUILD]}?`), y("LOOSE", `^${u[o.LOOSEPLAIN]}$`), y("GTLT", "((?:<|>)?=?)"), y("XRANGEIDENTIFIERLOOSE", `${u[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), y("XRANGEIDENTIFIER", `${u[o.NUMERICIDENTIFIER]}|x|X|\\*`), y("XRANGEPLAIN", `[v=\\s]*(${u[o.XRANGEIDENTIFIER]})(?:\\.(${u[o.XRANGEIDENTIFIER]})(?:\\.(${u[o.XRANGEIDENTIFIER]})(?:${u[o.PRERELEASE]})?${u[o.BUILD]}?)?)?`), y("XRANGEPLAINLOOSE", `[v=\\s]*(${u[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[o.XRANGEIDENTIFIERLOOSE]})(?:${u[o.PRERELEASELOOSE]})?${u[o.BUILD]}?)?)?`), y("XRANGE", `^${u[o.GTLT]}\\s*${u[o.XRANGEPLAIN]}$`), y("XRANGELOOSE", `^${u[o.GTLT]}\\s*${u[o.XRANGEPLAINLOOSE]}$`), y("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), y("COERCE", `${u[o.COERCEPLAIN]}(?:$|[^\\d])`), y("COERCEFULL", u[o.COERCEPLAIN] + `(?:${u[o.PRERELEASE]})?(?:${u[o.BUILD]})?(?:$|[^\\d])`), y("COERCERTL", u[o.COERCE], !0), y("COERCERTLFULL", u[o.COERCEFULL], !0), y("LONETILDE", "(?:~>?)"), y("TILDETRIM", `(\\s*)${u[o.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", y("TILDE", `^${u[o.LONETILDE]}${u[o.XRANGEPLAIN]}$`), y("TILDELOOSE", `^${u[o.LONETILDE]}${u[o.XRANGEPLAINLOOSE]}$`), y("LONECARET", "(?:\\^)"), y("CARETTRIM", `(\\s*)${u[o.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", y("CARET", `^${u[o.LONECARET]}${u[o.XRANGEPLAIN]}$`), y("CARETLOOSE", `^${u[o.LONECARET]}${u[o.XRANGEPLAINLOOSE]}$`), y("COMPARATORLOOSE", `^${u[o.GTLT]}\\s*(${u[o.LOOSEPLAIN]})$|^$`), y("COMPARATOR", `^${u[o.GTLT]}\\s*(${u[o.FULLPLAIN]})$|^$`), y("COMPARATORTRIM", `(\\s*)${u[o.GTLT]}\\s*(${u[o.LOOSEPLAIN]}|${u[o.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", y("HYPHENRANGE", `^\\s*(${u[o.XRANGEPLAIN]})\\s+-\\s+(${u[o.XRANGEPLAIN]})\\s*$`), y("HYPHENRANGELOOSE", `^\\s*(${u[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[o.XRANGEPLAINLOOSE]})\\s*$`), y("STAR", "(<|>)?=?\\s*\\*"), y("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), y("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(Ci, Ci.exports);
var Bu = Ci.exports;
const Du = Object.freeze({ loose: !0 }), ju = Object.freeze({}), Gu = (n) => n ? typeof n != "object" ? Du : n : ju;
var qu = Gu;
const Oo = /^[0-9]+$/, Vu = (n, e) => {
  const r = Oo.test(n), i = Oo.test(e);
  return r && i && (n = +n, e = +e), n === e ? 0 : r && !i ? -1 : i && !r ? 1 : n < e ? -1 : 1;
};
var Wu = {
  compareIdentifiers: Vu
};
const sn = ua, { MAX_LENGTH: Ro, MAX_SAFE_INTEGER: an } = ca, { safeRe: xo, t: So } = Bu, Xu = qu, { compareIdentifiers: Ar } = Wu;
let zu = class St {
  constructor(e, r) {
    if (r = Xu(r), e instanceof St) {
      if (e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
    if (e.length > Ro)
      throw new TypeError(
        `version is longer than ${Ro} characters`
      );
    sn("SemVer", e, r), this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease;
    const i = e.trim().match(r.loose ? xo[So.LOOSE] : xo[So.FULL]);
    if (!i)
      throw new TypeError(`Invalid Version: ${e}`);
    if (this.raw = e, this.major = +i[1], this.minor = +i[2], this.patch = +i[3], this.major > an || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > an || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > an || this.patch < 0)
      throw new TypeError("Invalid patch version");
    i[4] ? this.prerelease = i[4].split(".").map((l) => {
      if (/^[0-9]+$/.test(l)) {
        const a = +l;
        if (a >= 0 && a < an)
          return a;
      }
      return l;
    }) : this.prerelease = [], this.build = i[5] ? i[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(e) {
    if (sn("SemVer.compare", this.version, this.options, e), !(e instanceof St)) {
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
      const i = this.prerelease[r], l = e.prerelease[r];
      if (sn("prerelease compare", r, i, l), i === void 0 && l === void 0)
        return 0;
      if (l === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === l)
        continue;
      return Ar(i, l);
    } while (++r);
  }
  compareBuild(e) {
    e instanceof St || (e = new St(e, this.options));
    let r = 0;
    do {
      const i = this.build[r], l = e.build[r];
      if (sn("build compare", r, i, l), i === void 0 && l === void 0)
        return 0;
      if (l === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === l)
        continue;
      return Ar(i, l);
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
        const l = Number(i) ? 1 : 0;
        if (!r && i === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (this.prerelease.length === 0)
          this.prerelease = [l];
        else {
          let a = this.prerelease.length;
          for (; --a >= 0; )
            typeof this.prerelease[a] == "number" && (this.prerelease[a]++, a = -2);
          if (a === -1) {
            if (r === this.prerelease.join(".") && i === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(l);
          }
        }
        if (r) {
          let a = [r, l];
          i === !1 && (a = [r]), Ar(this.prerelease[0], r) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = a) : this.prerelease = a;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${e}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var fa = zu;
const Co = fa, Hu = (n, e, r = !1) => {
  if (n instanceof Co)
    return n;
  try {
    return new Co(n, e);
  } catch (i) {
    if (!r)
      return null;
    throw i;
  }
};
var Yu = Hu;
const Zu = Yu, Ju = (n, e) => {
  const r = Zu(n, e);
  return r ? r.version : null;
};
var Ku = Ju;
const Qu = /* @__PURE__ */ Vi(Ku), el = fa, tl = (n, e) => new el(n, e).major;
var rl = tl;
const Lo = /* @__PURE__ */ Vi(rl);
class nl {
  constructor(e) {
    ge(this, "bus");
    typeof e.getVersion != "function" || !Qu(e.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Lo(e.getVersion()) !== Lo(this.getVersion()) && console.warn(
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
class il {
  constructor() {
    ge(this, "handlers", /* @__PURE__ */ new Map());
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
      } catch (l) {
        console.error("could not invoke event listener", l);
      }
    });
  }
}
let Ur = null;
function ha() {
  var n;
  return Ur !== null ? Ur : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : ((n = window.OC) != null && n._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof (window == null ? void 0 : window._nc_event_bus) < "u" ? Ur = new nl(window._nc_event_bus) : Ur = window._nc_event_bus = new il(), Ur);
}
function ol(n, e) {
  ha().subscribe(n, e);
}
function sl(n, e) {
  ha().emit(n, e);
}
var Ln = {}, Pn = {}, tn = {};
Object.defineProperty(tn, "__esModule", {
  value: !0
});
tn.default = void 0;
function bn(n, e, r) {
  return e = al(e), e in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = r, n;
}
function al(n) {
  var e = ul(n, "string");
  return typeof e == "symbol" ? e : e + "";
}
function ul(n, e) {
  if (typeof n != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(n, e);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
class Pr {
  constructor(e, r, i) {
    bn(this, "scope", void 0), bn(this, "wrapped", void 0), this.scope = "".concat(i ? Pr.GLOBAL_SCOPE_PERSISTENT : Pr.GLOBAL_SCOPE_VOLATILE, "_").concat(btoa(e), "_"), this.wrapped = r;
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
tn.default = Pr;
bn(Pr, "GLOBAL_SCOPE_VOLATILE", "nextcloud_vol");
bn(Pr, "GLOBAL_SCOPE_PERSISTENT", "nextcloud_per");
Object.defineProperty(Pn, "__esModule", {
  value: !0
});
Pn.default = void 0;
var ll = cl(tn);
function cl(n) {
  return n && n.__esModule ? n : { default: n };
}
function Wn(n, e, r) {
  return e = fl(e), e in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = r, n;
}
function fl(n) {
  var e = hl(n, "string");
  return typeof e == "symbol" ? e : e + "";
}
function hl(n, e) {
  if (typeof n != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(n, e);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
class pl {
  constructor(e) {
    Wn(this, "appId", void 0), Wn(this, "persisted", !1), Wn(this, "clearedOnLogout", !1), this.appId = e;
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
    return new ll.default(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
Pn.default = pl;
Object.defineProperty(Ln, "__esModule", {
  value: !0
});
Ln.clearAll = wl;
Ln.clearNonPersistent = El;
var dl = Ln.getBuilder = yl, gl = pa(Pn), ml = pa(tn);
function pa(n) {
  return n && n.__esModule ? n : { default: n };
}
function yl(n) {
  return new gl.default(n);
}
function da(n, e) {
  Object.keys(n).filter((r) => e ? e(r) : !0).map(n.removeItem.bind(n));
}
function wl() {
  [window.sessionStorage, window.localStorage].map((e) => da(e));
}
function El() {
  [window.sessionStorage, window.localStorage].map((e) => da(e, (r) => !r.startsWith(ml.default.GLOBAL_SCOPE_PERSISTENT)));
}
let Yr;
const ga = [];
function vl() {
  return Yr === void 0 && (Yr = document.head.dataset.requesttoken ?? null), Yr;
}
function bl(n) {
  ga.push(n);
}
ol("csrf-token-update", (n) => {
  Yr = n.token, ga.forEach((e) => {
    try {
      e(Yr);
    } catch (r) {
      console.error("Error updating CSRF token observer", r);
    }
  });
});
dl("public").persist().build();
let Tr;
const Po = (n, e) => n ? n.getAttribute(e) : null;
function Xi() {
  if (Tr !== void 0)
    return Tr;
  const n = document == null ? void 0 : document.getElementsByTagName("head")[0];
  if (!n)
    return null;
  const e = Po(n, "data-user");
  return e === null ? (Tr = null, Tr) : (Tr = {
    uid: e,
    displayName: Po(n, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Tr);
}
var _e = /* @__PURE__ */ ((n) => (n[n.Debug = 0] = "Debug", n[n.Info = 1] = "Info", n[n.Warn = 2] = "Warn", n[n.Error = 3] = "Error", n[n.Fatal = 4] = "Fatal", n))(_e || {}), Nl = Object.defineProperty, Al = (n, e, r) => e in n ? Nl(n, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[e] = r, Tl = (n, e, r) => (Al(n, e + "", r), r);
class Il {
  constructor(e) {
    Tl(this, "context"), this.context = e || {};
  }
  formatMessage(e, r, i) {
    let l = "[" + _e[r].toUpperCase() + "] ";
    return i && i.app && (l += i.app + ": "), typeof e == "string" ? l + e : (l += "Unexpected ".concat(e.name), e.message && (l += ' "'.concat(e.message, '"')), r === _e.Debug && e.stack && (l += `

Stack trace:
`.concat(e.stack)), l);
  }
  log(e, r, i) {
    var l, a;
    if (!(typeof ((l = this.context) == null ? void 0 : l.level) == "number" && e < ((a = this.context) == null ? void 0 : a.level)))
      switch (typeof r == "object" && (i == null ? void 0 : i.error) === void 0 && (i.error = r), e) {
        case _e.Debug:
          console.debug(this.formatMessage(r, _e.Debug, i), i);
          break;
        case _e.Info:
          console.info(this.formatMessage(r, _e.Info, i), i);
          break;
        case _e.Warn:
          console.warn(this.formatMessage(r, _e.Warn, i), i);
          break;
        case _e.Error:
          console.error(this.formatMessage(r, _e.Error, i), i);
          break;
        case _e.Fatal:
        default:
          console.error(this.formatMessage(r, _e.Fatal, i), i);
          break;
      }
  }
  debug(e, r) {
    this.log(_e.Debug, e, Object.assign({}, this.context, r));
  }
  info(e, r) {
    this.log(_e.Info, e, Object.assign({}, this.context, r));
  }
  warn(e, r) {
    this.log(_e.Warn, e, Object.assign({}, this.context, r));
  }
  error(e, r) {
    this.log(_e.Error, e, Object.assign({}, this.context, r));
  }
  fatal(e, r) {
    this.log(_e.Fatal, e, Object.assign({}, this.context, r));
  }
}
function _l(n) {
  return new Il(n);
}
var Ol = Object.defineProperty, Rl = (n, e, r) => e in n ? Ol(n, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[e] = r, $o = (n, e, r) => (Rl(n, typeof e != "symbol" ? e + "" : e, r), r);
class xl {
  constructor(e) {
    $o(this, "context"), $o(this, "factory"), this.context = {}, this.factory = e;
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
    const e = Xi();
    return e !== null && (this.context.uid = e.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const e = this, r = () => {
      var i, l;
      document.readyState === "complete" || document.readyState === "interactive" ? (e.context.level = (l = (i = window._oc_config) == null ? void 0 : i.loglevel) != null ? l : _e.Warn, window._oc_debug && (e.context.level = _e.Debug), document.removeEventListener("readystatechange", r)) : document.addEventListener("readystatechange", r);
    };
    return r(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function Sl() {
  return new xl(_l);
}
const Cl = (n) => "/remote.php/" + n, Ll = (n, e) => {
  var r;
  return ((r = void 0) != null ? r : Pl()) + Cl(n);
}, Pl = () => window.location.protocol + "//" + window.location.host + $l();
function $l() {
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
function or(n, e, r) {
  return e in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = r, n;
}
function Fo(n, e, r) {
  Fl(n, e), e.set(n, r);
}
function Fl(n, e) {
  if (e.has(n))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function ke(n, e) {
  var r = ma(n, e, "get");
  return kl(n, r);
}
function kl(n, e) {
  return e.get ? e.get.call(n) : e.value;
}
function ko(n, e, r) {
  var i = ma(n, e, "set");
  return Ml(n, i, r), r;
}
function ma(n, e, r) {
  if (!e.has(n))
    throw new TypeError("attempted to " + r + " private field on non-instance");
  return e.get(n);
}
function Ml(n, e, r) {
  if (e.set)
    e.set.call(n, r);
  else {
    if (!e.writable)
      throw new TypeError("attempted to set read only private field");
    e.value = r;
  }
}
var Ul = typeof Symbol < "u" ? Symbol.toStringTag : "@@toStringTag", je = /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ new WeakMap();
class $n {
  constructor(e) {
    var {
      executor: r = () => {
      },
      internals: i = Hi(),
      promise: l = new Promise((a, h) => r(a, h, (c) => {
        i.onCancelList.push(c);
      }))
    } = e;
    Fo(this, je, {
      writable: !0,
      value: void 0
    }), Fo(this, Br, {
      writable: !0,
      value: void 0
    }), or(this, Ul, "CancelablePromise"), this.cancel = this.cancel.bind(this), ko(this, je, i), ko(this, Br, l || new Promise((a, h) => r(a, h, (c) => {
      i.onCancelList.push(c);
    })));
  }
  then(e, r) {
    return yn(ke(this, Br).then(un(e, ke(this, je)), un(r, ke(this, je))), ke(this, je));
  }
  catch(e) {
    return yn(ke(this, Br).catch(un(e, ke(this, je))), ke(this, je));
  }
  finally(e, r) {
    return r && ke(this, je).onCancelList.push(e), yn(ke(this, Br).finally(un(() => {
      if (e)
        return r && (ke(this, je).onCancelList = ke(this, je).onCancelList.filter((i) => i !== e)), e();
    }, ke(this, je))), ke(this, je));
  }
  cancel() {
    ke(this, je).isCanceled = !0;
    var e = ke(this, je).onCancelList;
    ke(this, je).onCancelList = [];
    for (var r of e)
      if (typeof r == "function")
        try {
          r();
        } catch (i) {
          console.error(i);
        }
  }
  isCanceled() {
    return ke(this, je).isCanceled === !0;
  }
}
class sr extends $n {
  constructor(e) {
    super({
      executor: e
    });
  }
}
or(sr, "all", function(e) {
  return Fn(e, Promise.all(e));
});
or(sr, "allSettled", function(e) {
  return Fn(e, Promise.allSettled(e));
});
or(sr, "any", function(e) {
  return Fn(e, Promise.any(e));
});
or(sr, "race", function(e) {
  return Fn(e, Promise.race(e));
});
or(sr, "resolve", function(e) {
  return ya(Promise.resolve(e));
});
or(sr, "reject", function(e) {
  return ya(Promise.reject(e));
});
or(sr, "isCancelable", zi);
function ya(n) {
  return yn(n, Hi());
}
function zi(n) {
  return n instanceof sr || n instanceof $n;
}
function un(n, e) {
  if (n)
    return (r) => {
      if (!e.isCanceled) {
        var i = n(r);
        return zi(i) && e.onCancelList.push(i.cancel), i;
      }
      return r;
    };
}
function yn(n, e) {
  return new $n({
    internals: e,
    promise: n
  });
}
function Fn(n, e) {
  var r = Hi();
  return r.onCancelList.push(() => {
    for (var i of n)
      zi(i) && i.cancel();
  }), new $n({
    internals: r,
    promise: e
  });
}
function Hi() {
  return {
    isCanceled: !1,
    onCancelList: []
  };
}
/*! For license information please see index.js.LICENSE.txt */
var Bl = { 2: (n) => {
  function e(l, a, h) {
    l instanceof RegExp && (l = r(l, h)), a instanceof RegExp && (a = r(a, h));
    var c = i(l, a, h);
    return c && { start: c[0], end: c[1], pre: h.slice(0, c[0]), body: h.slice(c[0] + l.length, c[1]), post: h.slice(c[1] + a.length) };
  }
  function r(l, a) {
    var h = a.match(l);
    return h ? h[0] : null;
  }
  function i(l, a, h) {
    var c, u, o, s, g, d = h.indexOf(l), m = h.indexOf(a, d + 1), y = d;
    if (d >= 0 && m > 0) {
      for (c = [], o = h.length; y >= 0 && !g; ) y == d ? (c.push(y), d = h.indexOf(l, y + 1)) : c.length == 1 ? g = [c.pop(), m] : ((u = c.pop()) < o && (o = u, s = m), m = h.indexOf(a, y + 1)), y = d < m && d >= 0 ? d : m;
      c.length && (g = [o, s]);
    }
    return g;
  }
  n.exports = e, e.range = i;
}, 101: function(n, e, r) {
  var i;
  n = r.nmd(n), function(l) {
    var a = (n && n.exports, typeof on == "object" && on);
    a.global !== a && a.window;
    var h = function(g) {
      this.message = g;
    };
    (h.prototype = new Error()).name = "InvalidCharacterError";
    var c = function(g) {
      throw new h(g);
    }, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = /[\t\n\f\r ]/g, s = { encode: function(g) {
      g = String(g), /[^\0-\xFF]/.test(g) && c("The string to be encoded contains characters outside of the Latin1 range.");
      for (var d, m, y, v, _ = g.length % 3, T = "", E = -1, I = g.length - _; ++E < I; ) d = g.charCodeAt(E) << 16, m = g.charCodeAt(++E) << 8, y = g.charCodeAt(++E), T += u.charAt((v = d + m + y) >> 18 & 63) + u.charAt(v >> 12 & 63) + u.charAt(v >> 6 & 63) + u.charAt(63 & v);
      return _ == 2 ? (d = g.charCodeAt(E) << 8, m = g.charCodeAt(++E), T += u.charAt((v = d + m) >> 10) + u.charAt(v >> 4 & 63) + u.charAt(v << 2 & 63) + "=") : _ == 1 && (v = g.charCodeAt(E), T += u.charAt(v >> 2) + u.charAt(v << 4 & 63) + "=="), T;
    }, decode: function(g) {
      var d = (g = String(g).replace(o, "")).length;
      d % 4 == 0 && (d = (g = g.replace(/==?$/, "")).length), (d % 4 == 1 || /[^+a-zA-Z0-9/]/.test(g)) && c("Invalid character: the string to be decoded is not correctly encoded.");
      for (var m, y, v = 0, _ = "", T = -1; ++T < d; ) y = u.indexOf(g.charAt(T)), m = v % 4 ? 64 * m + y : y, v++ % 4 && (_ += String.fromCharCode(255 & m >> (-2 * v & 6)));
      return _;
    }, version: "1.0.0" };
    (i = (function() {
      return s;
    }).call(e, r, e, n)) === void 0 || (n.exports = i);
  }();
}, 172: (n, e) => {
  e.d = function(r) {
    if (!r) return 0;
    for (var i = (r = r.toString()).length, l = r.length; l--; ) {
      var a = r.charCodeAt(l);
      56320 <= a && a <= 57343 && l--, 127 < a && a <= 2047 ? i++ : 2047 < a && a <= 65535 && (i += 2);
    }
    return i;
  };
}, 526: (n) => {
  var e = { utf8: { stringToBytes: function(r) {
    return e.bin.stringToBytes(unescape(encodeURIComponent(r)));
  }, bytesToString: function(r) {
    return decodeURIComponent(escape(e.bin.bytesToString(r)));
  } }, bin: { stringToBytes: function(r) {
    for (var i = [], l = 0; l < r.length; l++) i.push(255 & r.charCodeAt(l));
    return i;
  }, bytesToString: function(r) {
    for (var i = [], l = 0; l < r.length; l++) i.push(String.fromCharCode(r[l]));
    return i.join("");
  } } };
  n.exports = e;
}, 298: (n) => {
  var e, r;
  e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = { rotl: function(i, l) {
    return i << l | i >>> 32 - l;
  }, rotr: function(i, l) {
    return i << 32 - l | i >>> l;
  }, endian: function(i) {
    if (i.constructor == Number) return 16711935 & r.rotl(i, 8) | 4278255360 & r.rotl(i, 24);
    for (var l = 0; l < i.length; l++) i[l] = r.endian(i[l]);
    return i;
  }, randomBytes: function(i) {
    for (var l = []; i > 0; i--) l.push(Math.floor(256 * Math.random()));
    return l;
  }, bytesToWords: function(i) {
    for (var l = [], a = 0, h = 0; a < i.length; a++, h += 8) l[h >>> 5] |= i[a] << 24 - h % 32;
    return l;
  }, wordsToBytes: function(i) {
    for (var l = [], a = 0; a < 32 * i.length; a += 8) l.push(i[a >>> 5] >>> 24 - a % 32 & 255);
    return l;
  }, bytesToHex: function(i) {
    for (var l = [], a = 0; a < i.length; a++) l.push((i[a] >>> 4).toString(16)), l.push((15 & i[a]).toString(16));
    return l.join("");
  }, hexToBytes: function(i) {
    for (var l = [], a = 0; a < i.length; a += 2) l.push(parseInt(i.substr(a, 2), 16));
    return l;
  }, bytesToBase64: function(i) {
    for (var l = [], a = 0; a < i.length; a += 3) for (var h = i[a] << 16 | i[a + 1] << 8 | i[a + 2], c = 0; c < 4; c++) 8 * a + 6 * c <= 8 * i.length ? l.push(e.charAt(h >>> 6 * (3 - c) & 63)) : l.push("=");
    return l.join("");
  }, base64ToBytes: function(i) {
    i = i.replace(/[^A-Z0-9+\/]/gi, "");
    for (var l = [], a = 0, h = 0; a < i.length; h = ++a % 4) h != 0 && l.push((e.indexOf(i.charAt(a - 1)) & Math.pow(2, -2 * h + 8) - 1) << 2 * h | e.indexOf(i.charAt(a)) >>> 6 - 2 * h);
    return l;
  } }, n.exports = r;
}, 635: (n, e, r) => {
  const i = r(31), l = r(338), a = r(221);
  n.exports = { XMLParser: l, XMLValidator: i, XMLBuilder: a };
}, 705: (n, e) => {
  const r = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", i = "[" + r + "][" + r + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*", l = new RegExp("^" + i + "$");
  e.isExist = function(a) {
    return a !== void 0;
  }, e.isEmptyObject = function(a) {
    return Object.keys(a).length === 0;
  }, e.merge = function(a, h, c) {
    if (h) {
      const u = Object.keys(h), o = u.length;
      for (let s = 0; s < o; s++) a[u[s]] = c === "strict" ? [h[u[s]]] : h[u[s]];
    }
  }, e.getValue = function(a) {
    return e.isExist(a) ? a : "";
  }, e.isName = function(a) {
    return l.exec(a) != null;
  }, e.getAllMatches = function(a, h) {
    const c = [];
    let u = h.exec(a);
    for (; u; ) {
      const o = [];
      o.startIndex = h.lastIndex - u[0].length;
      const s = u.length;
      for (let g = 0; g < s; g++) o.push(u[g]);
      c.push(o), u = h.exec(a);
    }
    return c;
  }, e.nameRegexp = i;
}, 31: (n, e, r) => {
  const i = r(705), l = { allowBooleanAttributes: !1, unpairedTags: [] };
  function a(E) {
    return E === " " || E === "	" || E === `
` || E === "\r";
  }
  function h(E, I) {
    const S = I;
    for (; I < E.length; I++) if (!(E[I] != "?" && E[I] != " ")) {
      const A = E.substr(S, I - S);
      if (I > 5 && A === "xml") return y("InvalidXml", "XML declaration allowed only at the start of the document.", _(E, I));
      if (E[I] == "?" && E[I + 1] == ">") {
        I++;
        break;
      }
    }
    return I;
  }
  function c(E, I) {
    if (E.length > I + 5 && E[I + 1] === "-" && E[I + 2] === "-") {
      for (I += 3; I < E.length; I++) if (E[I] === "-" && E[I + 1] === "-" && E[I + 2] === ">") {
        I += 2;
        break;
      }
    } else if (E.length > I + 8 && E[I + 1] === "D" && E[I + 2] === "O" && E[I + 3] === "C" && E[I + 4] === "T" && E[I + 5] === "Y" && E[I + 6] === "P" && E[I + 7] === "E") {
      let S = 1;
      for (I += 8; I < E.length; I++) if (E[I] === "<") S++;
      else if (E[I] === ">" && (S--, S === 0)) break;
    } else if (E.length > I + 9 && E[I + 1] === "[" && E[I + 2] === "C" && E[I + 3] === "D" && E[I + 4] === "A" && E[I + 5] === "T" && E[I + 6] === "A" && E[I + 7] === "[") {
      for (I += 8; I < E.length; I++) if (E[I] === "]" && E[I + 1] === "]" && E[I + 2] === ">") {
        I += 2;
        break;
      }
    }
    return I;
  }
  e.validate = function(E, I) {
    I = Object.assign({}, l, I);
    const S = [];
    let A = !1, x = !1;
    E[0] === "\uFEFF" && (E = E.substr(1));
    for (let P = 0; P < E.length; P++) if (E[P] === "<" && E[P + 1] === "?") {
      if (P += 2, P = h(E, P), P.err) return P;
    } else {
      if (E[P] !== "<") {
        if (a(E[P])) continue;
        return y("InvalidChar", "char '" + E[P] + "' is not expected.", _(E, P));
      }
      {
        let F = P;
        if (P++, E[P] === "!") {
          P = c(E, P);
          continue;
        }
        {
          let j = !1;
          E[P] === "/" && (j = !0, P++);
          let D = "";
          for (; P < E.length && E[P] !== ">" && E[P] !== " " && E[P] !== "	" && E[P] !== `
` && E[P] !== "\r"; P++) D += E[P];
          if (D = D.trim(), D[D.length - 1] === "/" && (D = D.substring(0, D.length - 1), P--), C = D, !i.isName(C)) {
            let q;
            return q = D.trim().length === 0 ? "Invalid space after '<'." : "Tag '" + D + "' is an invalid name.", y("InvalidTag", q, _(E, P));
          }
          const B = s(E, P);
          if (B === !1) return y("InvalidAttr", "Attributes for '" + D + "' have open quote.", _(E, P));
          let $ = B.value;
          if (P = B.index, $[$.length - 1] === "/") {
            const q = P - $.length;
            $ = $.substring(0, $.length - 1);
            const V = d($, I);
            if (V !== !0) return y(V.err.code, V.err.msg, _(E, q + V.err.line));
            A = !0;
          } else if (j) {
            if (!B.tagClosed) return y("InvalidTag", "Closing tag '" + D + "' doesn't have proper closing.", _(E, P));
            if ($.trim().length > 0) return y("InvalidTag", "Closing tag '" + D + "' can't have attributes or invalid starting.", _(E, F));
            if (S.length === 0) return y("InvalidTag", "Closing tag '" + D + "' has not been opened.", _(E, F));
            {
              const q = S.pop();
              if (D !== q.tagName) {
                let V = _(E, q.tagStartPos);
                return y("InvalidTag", "Expected closing tag '" + q.tagName + "' (opened in line " + V.line + ", col " + V.col + ") instead of closing tag '" + D + "'.", _(E, F));
              }
              S.length == 0 && (x = !0);
            }
          } else {
            const q = d($, I);
            if (q !== !0) return y(q.err.code, q.err.msg, _(E, P - $.length + q.err.line));
            if (x === !0) return y("InvalidXml", "Multiple possible root nodes found.", _(E, P));
            I.unpairedTags.indexOf(D) !== -1 || S.push({ tagName: D, tagStartPos: F }), A = !0;
          }
          for (P++; P < E.length; P++) if (E[P] === "<") {
            if (E[P + 1] === "!") {
              P++, P = c(E, P);
              continue;
            }
            if (E[P + 1] !== "?") break;
            if (P = h(E, ++P), P.err) return P;
          } else if (E[P] === "&") {
            const q = m(E, P);
            if (q == -1) return y("InvalidChar", "char '&' is not expected.", _(E, P));
            P = q;
          } else if (x === !0 && !a(E[P])) return y("InvalidXml", "Extra text at the end", _(E, P));
          E[P] === "<" && P--;
        }
      }
    }
    var C;
    return A ? S.length == 1 ? y("InvalidTag", "Unclosed tag '" + S[0].tagName + "'.", _(E, S[0].tagStartPos)) : !(S.length > 0) || y("InvalidXml", "Invalid '" + JSON.stringify(S.map((P) => P.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 }) : y("InvalidXml", "Start tag expected.", 1);
  };
  const u = '"', o = "'";
  function s(E, I) {
    let S = "", A = "", x = !1;
    for (; I < E.length; I++) {
      if (E[I] === u || E[I] === o) A === "" ? A = E[I] : A !== E[I] || (A = "");
      else if (E[I] === ">" && A === "") {
        x = !0;
        break;
      }
      S += E[I];
    }
    return A === "" && { value: S, index: I, tagClosed: x };
  }
  const g = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
  function d(E, I) {
    const S = i.getAllMatches(E, g), A = {};
    for (let x = 0; x < S.length; x++) {
      if (S[x][1].length === 0) return y("InvalidAttr", "Attribute '" + S[x][2] + "' has no space in starting.", T(S[x]));
      if (S[x][3] !== void 0 && S[x][4] === void 0) return y("InvalidAttr", "Attribute '" + S[x][2] + "' is without value.", T(S[x]));
      if (S[x][3] === void 0 && !I.allowBooleanAttributes) return y("InvalidAttr", "boolean attribute '" + S[x][2] + "' is not allowed.", T(S[x]));
      const C = S[x][2];
      if (!v(C)) return y("InvalidAttr", "Attribute '" + C + "' is an invalid name.", T(S[x]));
      if (A.hasOwnProperty(C)) return y("InvalidAttr", "Attribute '" + C + "' is repeated.", T(S[x]));
      A[C] = 1;
    }
    return !0;
  }
  function m(E, I) {
    if (E[++I] === ";") return -1;
    if (E[I] === "#") return function(A, x) {
      let C = /\d/;
      for (A[x] === "x" && (x++, C = /[\da-fA-F]/); x < A.length; x++) {
        if (A[x] === ";") return x;
        if (!A[x].match(C)) break;
      }
      return -1;
    }(E, ++I);
    let S = 0;
    for (; I < E.length; I++, S++) if (!(E[I].match(/\w/) && S < 20)) {
      if (E[I] === ";") break;
      return -1;
    }
    return I;
  }
  function y(E, I, S) {
    return { err: { code: E, msg: I, line: S.line || S, col: S.col } };
  }
  function v(E) {
    return i.isName(E);
  }
  function _(E, I) {
    const S = E.substring(0, I).split(/\r?\n/);
    return { line: S.length, col: S[S.length - 1].length + 1 };
  }
  function T(E) {
    return E.startIndex + E[1].length;
  }
}, 221: (n, e, r) => {
  const i = r(87), l = { attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, cdataPropName: !1, format: !1, indentBy: "  ", suppressEmptyNode: !1, suppressUnpairedNode: !0, suppressBooleanAttributes: !0, tagValueProcessor: function(o, s) {
    return s;
  }, attributeValueProcessor: function(o, s) {
    return s;
  }, preserveOrder: !1, commentPropName: !1, unpairedTags: [], entities: [{ regex: new RegExp("&", "g"), val: "&amp;" }, { regex: new RegExp(">", "g"), val: "&gt;" }, { regex: new RegExp("<", "g"), val: "&lt;" }, { regex: new RegExp("'", "g"), val: "&apos;" }, { regex: new RegExp('"', "g"), val: "&quot;" }], processEntities: !0, stopNodes: [], oneListGroup: !1 };
  function a(o) {
    this.options = Object.assign({}, l, o), this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function() {
      return !1;
    } : (this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = u), this.processTextOrObjNode = h, this.options.format ? (this.indentate = c, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
      return "";
    }, this.tagEndChar = ">", this.newLine = "");
  }
  function h(o, s, g) {
    const d = this.j2x(o, g + 1);
    return o[this.options.textNodeName] !== void 0 && Object.keys(o).length === 1 ? this.buildTextValNode(o[this.options.textNodeName], s, d.attrStr, g) : this.buildObjectNode(d.val, s, d.attrStr, g);
  }
  function c(o) {
    return this.options.indentBy.repeat(o);
  }
  function u(o) {
    return !(!o.startsWith(this.options.attributeNamePrefix) || o === this.options.textNodeName) && o.substr(this.attrPrefixLen);
  }
  a.prototype.build = function(o) {
    return this.options.preserveOrder ? i(o, this.options) : (Array.isArray(o) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (o = { [this.options.arrayNodeName]: o }), this.j2x(o, 0).val);
  }, a.prototype.j2x = function(o, s) {
    let g = "", d = "";
    for (let m in o) if (Object.prototype.hasOwnProperty.call(o, m)) if (o[m] === void 0) this.isAttribute(m) && (d += "");
    else if (o[m] === null) this.isAttribute(m) ? d += "" : m[0] === "?" ? d += this.indentate(s) + "<" + m + "?" + this.tagEndChar : d += this.indentate(s) + "<" + m + "/" + this.tagEndChar;
    else if (o[m] instanceof Date) d += this.buildTextValNode(o[m], m, "", s);
    else if (typeof o[m] != "object") {
      const y = this.isAttribute(m);
      if (y) g += this.buildAttrPairStr(y, "" + o[m]);
      else if (m === this.options.textNodeName) {
        let v = this.options.tagValueProcessor(m, "" + o[m]);
        d += this.replaceEntitiesValue(v);
      } else d += this.buildTextValNode(o[m], m, "", s);
    } else if (Array.isArray(o[m])) {
      const y = o[m].length;
      let v = "", _ = "";
      for (let T = 0; T < y; T++) {
        const E = o[m][T];
        if (E !== void 0) if (E === null) m[0] === "?" ? d += this.indentate(s) + "<" + m + "?" + this.tagEndChar : d += this.indentate(s) + "<" + m + "/" + this.tagEndChar;
        else if (typeof E == "object") if (this.options.oneListGroup) {
          const I = this.j2x(E, s + 1);
          v += I.val, this.options.attributesGroupName && E.hasOwnProperty(this.options.attributesGroupName) && (_ += I.attrStr);
        } else v += this.processTextOrObjNode(E, m, s);
        else if (this.options.oneListGroup) {
          let I = this.options.tagValueProcessor(m, E);
          I = this.replaceEntitiesValue(I), v += I;
        } else v += this.buildTextValNode(E, m, "", s);
      }
      this.options.oneListGroup && (v = this.buildObjectNode(v, m, _, s)), d += v;
    } else if (this.options.attributesGroupName && m === this.options.attributesGroupName) {
      const y = Object.keys(o[m]), v = y.length;
      for (let _ = 0; _ < v; _++) g += this.buildAttrPairStr(y[_], "" + o[m][y[_]]);
    } else d += this.processTextOrObjNode(o[m], m, s);
    return { attrStr: g, val: d };
  }, a.prototype.buildAttrPairStr = function(o, s) {
    return s = this.options.attributeValueProcessor(o, "" + s), s = this.replaceEntitiesValue(s), this.options.suppressBooleanAttributes && s === "true" ? " " + o : " " + o + '="' + s + '"';
  }, a.prototype.buildObjectNode = function(o, s, g, d) {
    if (o === "") return s[0] === "?" ? this.indentate(d) + "<" + s + g + "?" + this.tagEndChar : this.indentate(d) + "<" + s + g + this.closeTag(s) + this.tagEndChar;
    {
      let m = "</" + s + this.tagEndChar, y = "";
      return s[0] === "?" && (y = "?", m = ""), !g && g !== "" || o.indexOf("<") !== -1 ? this.options.commentPropName !== !1 && s === this.options.commentPropName && y.length === 0 ? this.indentate(d) + `<!--${o}-->` + this.newLine : this.indentate(d) + "<" + s + g + y + this.tagEndChar + o + this.indentate(d) + m : this.indentate(d) + "<" + s + g + y + ">" + o + m;
    }
  }, a.prototype.closeTag = function(o) {
    let s = "";
    return this.options.unpairedTags.indexOf(o) !== -1 ? this.options.suppressUnpairedNode || (s = "/") : s = this.options.suppressEmptyNode ? "/" : `></${o}`, s;
  }, a.prototype.buildTextValNode = function(o, s, g, d) {
    if (this.options.cdataPropName !== !1 && s === this.options.cdataPropName) return this.indentate(d) + `<![CDATA[${o}]]>` + this.newLine;
    if (this.options.commentPropName !== !1 && s === this.options.commentPropName) return this.indentate(d) + `<!--${o}-->` + this.newLine;
    if (s[0] === "?") return this.indentate(d) + "<" + s + g + "?" + this.tagEndChar;
    {
      let m = this.options.tagValueProcessor(s, o);
      return m = this.replaceEntitiesValue(m), m === "" ? this.indentate(d) + "<" + s + g + this.closeTag(s) + this.tagEndChar : this.indentate(d) + "<" + s + g + ">" + m + "</" + s + this.tagEndChar;
    }
  }, a.prototype.replaceEntitiesValue = function(o) {
    if (o && o.length > 0 && this.options.processEntities) for (let s = 0; s < this.options.entities.length; s++) {
      const g = this.options.entities[s];
      o = o.replace(g.regex, g.val);
    }
    return o;
  }, n.exports = a;
}, 87: (n) => {
  function e(h, c, u, o) {
    let s = "", g = !1;
    for (let d = 0; d < h.length; d++) {
      const m = h[d], y = r(m);
      if (y === void 0) continue;
      let v = "";
      if (v = u.length === 0 ? y : `${u}.${y}`, y === c.textNodeName) {
        let I = m[y];
        l(v, c) || (I = c.tagValueProcessor(y, I), I = a(I, c)), g && (s += o), s += I, g = !1;
        continue;
      }
      if (y === c.cdataPropName) {
        g && (s += o), s += `<![CDATA[${m[y][0][c.textNodeName]}]]>`, g = !1;
        continue;
      }
      if (y === c.commentPropName) {
        s += o + `<!--${m[y][0][c.textNodeName]}-->`, g = !0;
        continue;
      }
      if (y[0] === "?") {
        const I = i(m[":@"], c), S = y === "?xml" ? "" : o;
        let A = m[y][0][c.textNodeName];
        A = A.length !== 0 ? " " + A : "", s += S + `<${y}${A}${I}?>`, g = !0;
        continue;
      }
      let _ = o;
      _ !== "" && (_ += c.indentBy);
      const T = o + `<${y}${i(m[":@"], c)}`, E = e(m[y], c, v, _);
      c.unpairedTags.indexOf(y) !== -1 ? c.suppressUnpairedNode ? s += T + ">" : s += T + "/>" : E && E.length !== 0 || !c.suppressEmptyNode ? E && E.endsWith(">") ? s += T + `>${E}${o}</${y}>` : (s += T + ">", E && o !== "" && (E.includes("/>") || E.includes("</")) ? s += o + c.indentBy + E + o : s += E, s += `</${y}>`) : s += T + "/>", g = !0;
    }
    return s;
  }
  function r(h) {
    const c = Object.keys(h);
    for (let u = 0; u < c.length; u++) {
      const o = c[u];
      if (h.hasOwnProperty(o) && o !== ":@") return o;
    }
  }
  function i(h, c) {
    let u = "";
    if (h && !c.ignoreAttributes) for (let o in h) {
      if (!h.hasOwnProperty(o)) continue;
      let s = c.attributeValueProcessor(o, h[o]);
      s = a(s, c), s === !0 && c.suppressBooleanAttributes ? u += ` ${o.substr(c.attributeNamePrefix.length)}` : u += ` ${o.substr(c.attributeNamePrefix.length)}="${s}"`;
    }
    return u;
  }
  function l(h, c) {
    let u = (h = h.substr(0, h.length - c.textNodeName.length - 1)).substr(h.lastIndexOf(".") + 1);
    for (let o in c.stopNodes) if (c.stopNodes[o] === h || c.stopNodes[o] === "*." + u) return !0;
    return !1;
  }
  function a(h, c) {
    if (h && h.length > 0 && c.processEntities) for (let u = 0; u < c.entities.length; u++) {
      const o = c.entities[u];
      h = h.replace(o.regex, o.val);
    }
    return h;
  }
  n.exports = function(h, c) {
    let u = "";
    return c.format && c.indentBy.length > 0 && (u = `
`), e(h, c, "", u);
  };
}, 193: (n, e, r) => {
  const i = r(705);
  function l(g, d) {
    let m = "";
    for (; d < g.length && g[d] !== "'" && g[d] !== '"'; d++) m += g[d];
    if (m = m.trim(), m.indexOf(" ") !== -1) throw new Error("External entites are not supported");
    const y = g[d++];
    let v = "";
    for (; d < g.length && g[d] !== y; d++) v += g[d];
    return [m, v, d];
  }
  function a(g, d) {
    return g[d + 1] === "!" && g[d + 2] === "-" && g[d + 3] === "-";
  }
  function h(g, d) {
    return g[d + 1] === "!" && g[d + 2] === "E" && g[d + 3] === "N" && g[d + 4] === "T" && g[d + 5] === "I" && g[d + 6] === "T" && g[d + 7] === "Y";
  }
  function c(g, d) {
    return g[d + 1] === "!" && g[d + 2] === "E" && g[d + 3] === "L" && g[d + 4] === "E" && g[d + 5] === "M" && g[d + 6] === "E" && g[d + 7] === "N" && g[d + 8] === "T";
  }
  function u(g, d) {
    return g[d + 1] === "!" && g[d + 2] === "A" && g[d + 3] === "T" && g[d + 4] === "T" && g[d + 5] === "L" && g[d + 6] === "I" && g[d + 7] === "S" && g[d + 8] === "T";
  }
  function o(g, d) {
    return g[d + 1] === "!" && g[d + 2] === "N" && g[d + 3] === "O" && g[d + 4] === "T" && g[d + 5] === "A" && g[d + 6] === "T" && g[d + 7] === "I" && g[d + 8] === "O" && g[d + 9] === "N";
  }
  function s(g) {
    if (i.isName(g)) return g;
    throw new Error(`Invalid entity name ${g}`);
  }
  n.exports = function(g, d) {
    const m = {};
    if (g[d + 3] !== "O" || g[d + 4] !== "C" || g[d + 5] !== "T" || g[d + 6] !== "Y" || g[d + 7] !== "P" || g[d + 8] !== "E") throw new Error("Invalid Tag instead of DOCTYPE");
    {
      d += 9;
      let y = 1, v = !1, _ = !1, T = "";
      for (; d < g.length; d++) if (g[d] !== "<" || _) if (g[d] === ">") {
        if (_ ? g[d - 1] === "-" && g[d - 2] === "-" && (_ = !1, y--) : y--, y === 0) break;
      } else g[d] === "[" ? v = !0 : T += g[d];
      else {
        if (v && h(g, d)) d += 7, [entityName, val, d] = l(g, d + 1), val.indexOf("&") === -1 && (m[s(entityName)] = { regx: RegExp(`&${entityName};`, "g"), val });
        else if (v && c(g, d)) d += 8;
        else if (v && u(g, d)) d += 8;
        else if (v && o(g, d)) d += 9;
        else {
          if (!a) throw new Error("Invalid DOCTYPE");
          _ = !0;
        }
        y++, T = "";
      }
      if (y !== 0) throw new Error("Unclosed DOCTYPE");
    }
    return { entities: m, i: d };
  };
}, 63: (n, e) => {
  const r = { preserveOrder: !1, attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, removeNSPrefix: !1, allowBooleanAttributes: !1, parseTagValue: !0, parseAttributeValue: !1, trimValues: !0, cdataPropName: !1, numberParseOptions: { hex: !0, leadingZeros: !0, eNotation: !0 }, tagValueProcessor: function(i, l) {
    return l;
  }, attributeValueProcessor: function(i, l) {
    return l;
  }, stopNodes: [], alwaysCreateTextNode: !1, isArray: () => !1, commentPropName: !1, unpairedTags: [], processEntities: !0, htmlEntities: !1, ignoreDeclaration: !1, ignorePiTags: !1, transformTagName: !1, transformAttributeName: !1, updateTag: function(i, l, a) {
    return i;
  } };
  e.buildOptions = function(i) {
    return Object.assign({}, r, i);
  }, e.defaultOptions = r;
}, 299: (n, e, r) => {
  const i = r(705), l = r(365), a = r(193), h = r(494);
  function c(A) {
    const x = Object.keys(A);
    for (let C = 0; C < x.length; C++) {
      const P = x[C];
      this.lastEntities[P] = { regex: new RegExp("&" + P + ";", "g"), val: A[P] };
    }
  }
  function u(A, x, C, P, F, j, D) {
    if (A !== void 0 && (this.options.trimValues && !P && (A = A.trim()), A.length > 0)) {
      D || (A = this.replaceEntitiesValue(A));
      const B = this.options.tagValueProcessor(x, A, C, F, j);
      return B == null ? A : typeof B != typeof A || B !== A ? B : this.options.trimValues || A.trim() === A ? S(A, this.options.parseTagValue, this.options.numberParseOptions) : A;
    }
  }
  function o(A) {
    if (this.options.removeNSPrefix) {
      const x = A.split(":"), C = A.charAt(0) === "/" ? "/" : "";
      if (x[0] === "xmlns") return "";
      x.length === 2 && (A = C + x[1]);
    }
    return A;
  }
  const s = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
  function g(A, x, C) {
    if (!this.options.ignoreAttributes && typeof A == "string") {
      const P = i.getAllMatches(A, s), F = P.length, j = {};
      for (let D = 0; D < F; D++) {
        const B = this.resolveNameSpace(P[D][1]);
        let $ = P[D][4], q = this.options.attributeNamePrefix + B;
        if (B.length) if (this.options.transformAttributeName && (q = this.options.transformAttributeName(q)), q === "__proto__" && (q = "#__proto__"), $ !== void 0) {
          this.options.trimValues && ($ = $.trim()), $ = this.replaceEntitiesValue($);
          const V = this.options.attributeValueProcessor(B, $, x);
          j[q] = V == null ? $ : typeof V != typeof $ || V !== $ ? V : S($, this.options.parseAttributeValue, this.options.numberParseOptions);
        } else this.options.allowBooleanAttributes && (j[q] = !0);
      }
      if (!Object.keys(j).length) return;
      if (this.options.attributesGroupName) {
        const D = {};
        return D[this.options.attributesGroupName] = j, D;
      }
      return j;
    }
  }
  const d = function(A) {
    A = A.replace(/\r\n?/g, `
`);
    const x = new l("!xml");
    let C = x, P = "", F = "";
    for (let j = 0; j < A.length; j++) if (A[j] === "<") if (A[j + 1] === "/") {
      const D = T(A, ">", j, "Closing Tag is not closed.");
      let B = A.substring(j + 2, D).trim();
      if (this.options.removeNSPrefix) {
        const V = B.indexOf(":");
        V !== -1 && (B = B.substr(V + 1));
      }
      this.options.transformTagName && (B = this.options.transformTagName(B)), C && (P = this.saveTextToParentTag(P, C, F));
      const $ = F.substring(F.lastIndexOf(".") + 1);
      if (B && this.options.unpairedTags.indexOf(B) !== -1) throw new Error(`Unpaired tag can not be used as closing tag: </${B}>`);
      let q = 0;
      $ && this.options.unpairedTags.indexOf($) !== -1 ? (q = F.lastIndexOf(".", F.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : q = F.lastIndexOf("."), F = F.substring(0, q), C = this.tagsNodeStack.pop(), P = "", j = D;
    } else if (A[j + 1] === "?") {
      let D = E(A, j, !1, "?>");
      if (!D) throw new Error("Pi Tag is not closed.");
      if (P = this.saveTextToParentTag(P, C, F), !(this.options.ignoreDeclaration && D.tagName === "?xml" || this.options.ignorePiTags)) {
        const B = new l(D.tagName);
        B.add(this.options.textNodeName, ""), D.tagName !== D.tagExp && D.attrExpPresent && (B[":@"] = this.buildAttributesMap(D.tagExp, F, D.tagName)), this.addChild(C, B, F);
      }
      j = D.closeIndex + 1;
    } else if (A.substr(j + 1, 3) === "!--") {
      const D = T(A, "-->", j + 4, "Comment is not closed.");
      if (this.options.commentPropName) {
        const B = A.substring(j + 4, D - 2);
        P = this.saveTextToParentTag(P, C, F), C.add(this.options.commentPropName, [{ [this.options.textNodeName]: B }]);
      }
      j = D;
    } else if (A.substr(j + 1, 2) === "!D") {
      const D = a(A, j);
      this.docTypeEntities = D.entities, j = D.i;
    } else if (A.substr(j + 1, 2) === "![") {
      const D = T(A, "]]>", j, "CDATA is not closed.") - 2, B = A.substring(j + 9, D);
      P = this.saveTextToParentTag(P, C, F);
      let $ = this.parseTextData(B, C.tagname, F, !0, !1, !0, !0);
      $ == null && ($ = ""), this.options.cdataPropName ? C.add(this.options.cdataPropName, [{ [this.options.textNodeName]: B }]) : C.add(this.options.textNodeName, $), j = D + 2;
    } else {
      let D = E(A, j, this.options.removeNSPrefix), B = D.tagName;
      const $ = D.rawTagName;
      let q = D.tagExp, V = D.attrExpPresent, oe = D.closeIndex;
      this.options.transformTagName && (B = this.options.transformTagName(B)), C && P && C.tagname !== "!xml" && (P = this.saveTextToParentTag(P, C, F, !1));
      const ne = C;
      if (ne && this.options.unpairedTags.indexOf(ne.tagname) !== -1 && (C = this.tagsNodeStack.pop(), F = F.substring(0, F.lastIndexOf("."))), B !== x.tagname && (F += F ? "." + B : B), this.isItStopNode(this.options.stopNodes, F, B)) {
        let te = "";
        if (q.length > 0 && q.lastIndexOf("/") === q.length - 1) B[B.length - 1] === "/" ? (B = B.substr(0, B.length - 1), F = F.substr(0, F.length - 1), q = B) : q = q.substr(0, q.length - 1), j = D.closeIndex;
        else if (this.options.unpairedTags.indexOf(B) !== -1) j = D.closeIndex;
        else {
          const fe = this.readStopNodeData(A, $, oe + 1);
          if (!fe) throw new Error(`Unexpected end of ${$}`);
          j = fe.i, te = fe.tagContent;
        }
        const ae = new l(B);
        B !== q && V && (ae[":@"] = this.buildAttributesMap(q, F, B)), te && (te = this.parseTextData(te, B, F, !0, V, !0, !0)), F = F.substr(0, F.lastIndexOf(".")), ae.add(this.options.textNodeName, te), this.addChild(C, ae, F);
      } else {
        if (q.length > 0 && q.lastIndexOf("/") === q.length - 1) {
          B[B.length - 1] === "/" ? (B = B.substr(0, B.length - 1), F = F.substr(0, F.length - 1), q = B) : q = q.substr(0, q.length - 1), this.options.transformTagName && (B = this.options.transformTagName(B));
          const te = new l(B);
          B !== q && V && (te[":@"] = this.buildAttributesMap(q, F, B)), this.addChild(C, te, F), F = F.substr(0, F.lastIndexOf("."));
        } else {
          const te = new l(B);
          this.tagsNodeStack.push(C), B !== q && V && (te[":@"] = this.buildAttributesMap(q, F, B)), this.addChild(C, te, F), C = te;
        }
        P = "", j = oe;
      }
    }
    else P += A[j];
    return x.child;
  };
  function m(A, x, C) {
    const P = this.options.updateTag(x.tagname, C, x[":@"]);
    P === !1 || (typeof P == "string" && (x.tagname = P), A.addChild(x));
  }
  const y = function(A) {
    if (this.options.processEntities) {
      for (let x in this.docTypeEntities) {
        const C = this.docTypeEntities[x];
        A = A.replace(C.regx, C.val);
      }
      for (let x in this.lastEntities) {
        const C = this.lastEntities[x];
        A = A.replace(C.regex, C.val);
      }
      if (this.options.htmlEntities) for (let x in this.htmlEntities) {
        const C = this.htmlEntities[x];
        A = A.replace(C.regex, C.val);
      }
      A = A.replace(this.ampEntity.regex, this.ampEntity.val);
    }
    return A;
  };
  function v(A, x, C, P) {
    return A && (P === void 0 && (P = Object.keys(x.child).length === 0), (A = this.parseTextData(A, x.tagname, C, !1, !!x[":@"] && Object.keys(x[":@"]).length !== 0, P)) !== void 0 && A !== "" && x.add(this.options.textNodeName, A), A = ""), A;
  }
  function _(A, x, C) {
    const P = "*." + C;
    for (const F in A) {
      const j = A[F];
      if (P === j || x === j) return !0;
    }
    return !1;
  }
  function T(A, x, C, P) {
    const F = A.indexOf(x, C);
    if (F === -1) throw new Error(P);
    return F + x.length - 1;
  }
  function E(A, x, C) {
    const P = function(V, oe) {
      let ne, te = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ">", ae = "";
      for (let fe = oe; fe < V.length; fe++) {
        let re = V[fe];
        if (ne) re === ne && (ne = "");
        else if (re === '"' || re === "'") ne = re;
        else if (re === te[0]) {
          if (!te[1]) return { data: ae, index: fe };
          if (V[fe + 1] === te[1]) return { data: ae, index: fe };
        } else re === "	" && (re = " ");
        ae += re;
      }
    }(A, x + 1, arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ">");
    if (!P) return;
    let F = P.data;
    const j = P.index, D = F.search(/\s/);
    let B = F, $ = !0;
    D !== -1 && (B = F.substring(0, D), F = F.substring(D + 1).trimStart());
    const q = B;
    if (C) {
      const V = B.indexOf(":");
      V !== -1 && (B = B.substr(V + 1), $ = B !== P.data.substr(V + 1));
    }
    return { tagName: B, tagExp: F, closeIndex: j, attrExpPresent: $, rawTagName: q };
  }
  function I(A, x, C) {
    const P = C;
    let F = 1;
    for (; C < A.length; C++) if (A[C] === "<") if (A[C + 1] === "/") {
      const j = T(A, ">", C, `${x} is not closed`);
      if (A.substring(C + 2, j).trim() === x && (F--, F === 0)) return { tagContent: A.substring(P, C), i: j };
      C = j;
    } else if (A[C + 1] === "?") C = T(A, "?>", C + 1, "StopNode is not closed.");
    else if (A.substr(C + 1, 3) === "!--") C = T(A, "-->", C + 3, "StopNode is not closed.");
    else if (A.substr(C + 1, 2) === "![") C = T(A, "]]>", C, "StopNode is not closed.") - 2;
    else {
      const j = E(A, C, ">");
      j && ((j && j.tagName) === x && j.tagExp[j.tagExp.length - 1] !== "/" && F++, C = j.closeIndex);
    }
  }
  function S(A, x, C) {
    if (x && typeof A == "string") {
      const P = A.trim();
      return P === "true" || P !== "false" && h(A, C);
    }
    return i.isExist(A) ? A : "";
  }
  n.exports = class {
    constructor(A) {
      this.options = A, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = { apos: { regex: /&(apos|#39|#x27);/g, val: "'" }, gt: { regex: /&(gt|#62|#x3E);/g, val: ">" }, lt: { regex: /&(lt|#60|#x3C);/g, val: "<" }, quot: { regex: /&(quot|#34|#x22);/g, val: '"' } }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = { space: { regex: /&(nbsp|#160);/g, val: " " }, cent: { regex: /&(cent|#162);/g, val: "¢" }, pound: { regex: /&(pound|#163);/g, val: "£" }, yen: { regex: /&(yen|#165);/g, val: "¥" }, euro: { regex: /&(euro|#8364);/g, val: "€" }, copyright: { regex: /&(copy|#169);/g, val: "©" }, reg: { regex: /&(reg|#174);/g, val: "®" }, inr: { regex: /&(inr|#8377);/g, val: "₹" }, num_dec: { regex: /&#([0-9]{1,7});/g, val: (x, C) => String.fromCharCode(Number.parseInt(C, 10)) }, num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (x, C) => String.fromCharCode(Number.parseInt(C, 16)) } }, this.addExternalEntities = c, this.parseXml = d, this.parseTextData = u, this.resolveNameSpace = o, this.buildAttributesMap = g, this.isItStopNode = _, this.replaceEntitiesValue = y, this.readStopNodeData = I, this.saveTextToParentTag = v, this.addChild = m;
    }
  };
}, 338: (n, e, r) => {
  const { buildOptions: i } = r(63), l = r(299), { prettify: a } = r(728), h = r(31);
  n.exports = class {
    constructor(c) {
      this.externalEntities = {}, this.options = i(c);
    }
    parse(c, u) {
      if (typeof c != "string") {
        if (!c.toString) throw new Error("XML data is accepted in String or Bytes[] form.");
        c = c.toString();
      }
      if (u) {
        u === !0 && (u = {});
        const g = h.validate(c, u);
        if (g !== !0) throw Error(`${g.err.msg}:${g.err.line}:${g.err.col}`);
      }
      const o = new l(this.options);
      o.addExternalEntities(this.externalEntities);
      const s = o.parseXml(c);
      return this.options.preserveOrder || s === void 0 ? s : a(s, this.options);
    }
    addEntity(c, u) {
      if (u.indexOf("&") !== -1) throw new Error("Entity value can't have '&'");
      if (c.indexOf("&") !== -1 || c.indexOf(";") !== -1) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
      if (u === "&") throw new Error("An entity with value '&' is not permitted");
      this.externalEntities[c] = u;
    }
  };
}, 728: (n, e) => {
  function r(h, c, u) {
    let o;
    const s = {};
    for (let g = 0; g < h.length; g++) {
      const d = h[g], m = i(d);
      let y = "";
      if (y = u === void 0 ? m : u + "." + m, m === c.textNodeName) o === void 0 ? o = d[m] : o += "" + d[m];
      else {
        if (m === void 0) continue;
        if (d[m]) {
          let v = r(d[m], c, y);
          const _ = a(v, c);
          d[":@"] ? l(v, d[":@"], y, c) : Object.keys(v).length !== 1 || v[c.textNodeName] === void 0 || c.alwaysCreateTextNode ? Object.keys(v).length === 0 && (c.alwaysCreateTextNode ? v[c.textNodeName] = "" : v = "") : v = v[c.textNodeName], s[m] !== void 0 && s.hasOwnProperty(m) ? (Array.isArray(s[m]) || (s[m] = [s[m]]), s[m].push(v)) : c.isArray(m, y, _) ? s[m] = [v] : s[m] = v;
        }
      }
    }
    return typeof o == "string" ? o.length > 0 && (s[c.textNodeName] = o) : o !== void 0 && (s[c.textNodeName] = o), s;
  }
  function i(h) {
    const c = Object.keys(h);
    for (let u = 0; u < c.length; u++) {
      const o = c[u];
      if (o !== ":@") return o;
    }
  }
  function l(h, c, u, o) {
    if (c) {
      const s = Object.keys(c), g = s.length;
      for (let d = 0; d < g; d++) {
        const m = s[d];
        o.isArray(m, u + "." + m, !0, !0) ? h[m] = [c[m]] : h[m] = c[m];
      }
    }
  }
  function a(h, c) {
    const { textNodeName: u } = c, o = Object.keys(h).length;
    return o === 0 || !(o !== 1 || !h[u] && typeof h[u] != "boolean" && h[u] !== 0);
  }
  e.prettify = function(h, c) {
    return r(h, c);
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
    var i = r(298), l = r(526).utf8, a = r(135), h = r(526).bin, c = function(u, o) {
      u.constructor == String ? u = o && o.encoding === "binary" ? h.stringToBytes(u) : l.stringToBytes(u) : a(u) ? u = Array.prototype.slice.call(u, 0) : Array.isArray(u) || u.constructor === Uint8Array || (u = u.toString());
      for (var s = i.bytesToWords(u), g = 8 * u.length, d = 1732584193, m = -271733879, y = -1732584194, v = 271733878, _ = 0; _ < s.length; _++) s[_] = 16711935 & (s[_] << 8 | s[_] >>> 24) | 4278255360 & (s[_] << 24 | s[_] >>> 8);
      s[g >>> 5] |= 128 << g % 32, s[14 + (g + 64 >>> 9 << 4)] = g;
      var T = c._ff, E = c._gg, I = c._hh, S = c._ii;
      for (_ = 0; _ < s.length; _ += 16) {
        var A = d, x = m, C = y, P = v;
        d = T(d, m, y, v, s[_ + 0], 7, -680876936), v = T(v, d, m, y, s[_ + 1], 12, -389564586), y = T(y, v, d, m, s[_ + 2], 17, 606105819), m = T(m, y, v, d, s[_ + 3], 22, -1044525330), d = T(d, m, y, v, s[_ + 4], 7, -176418897), v = T(v, d, m, y, s[_ + 5], 12, 1200080426), y = T(y, v, d, m, s[_ + 6], 17, -1473231341), m = T(m, y, v, d, s[_ + 7], 22, -45705983), d = T(d, m, y, v, s[_ + 8], 7, 1770035416), v = T(v, d, m, y, s[_ + 9], 12, -1958414417), y = T(y, v, d, m, s[_ + 10], 17, -42063), m = T(m, y, v, d, s[_ + 11], 22, -1990404162), d = T(d, m, y, v, s[_ + 12], 7, 1804603682), v = T(v, d, m, y, s[_ + 13], 12, -40341101), y = T(y, v, d, m, s[_ + 14], 17, -1502002290), d = E(d, m = T(m, y, v, d, s[_ + 15], 22, 1236535329), y, v, s[_ + 1], 5, -165796510), v = E(v, d, m, y, s[_ + 6], 9, -1069501632), y = E(y, v, d, m, s[_ + 11], 14, 643717713), m = E(m, y, v, d, s[_ + 0], 20, -373897302), d = E(d, m, y, v, s[_ + 5], 5, -701558691), v = E(v, d, m, y, s[_ + 10], 9, 38016083), y = E(y, v, d, m, s[_ + 15], 14, -660478335), m = E(m, y, v, d, s[_ + 4], 20, -405537848), d = E(d, m, y, v, s[_ + 9], 5, 568446438), v = E(v, d, m, y, s[_ + 14], 9, -1019803690), y = E(y, v, d, m, s[_ + 3], 14, -187363961), m = E(m, y, v, d, s[_ + 8], 20, 1163531501), d = E(d, m, y, v, s[_ + 13], 5, -1444681467), v = E(v, d, m, y, s[_ + 2], 9, -51403784), y = E(y, v, d, m, s[_ + 7], 14, 1735328473), d = I(d, m = E(m, y, v, d, s[_ + 12], 20, -1926607734), y, v, s[_ + 5], 4, -378558), v = I(v, d, m, y, s[_ + 8], 11, -2022574463), y = I(y, v, d, m, s[_ + 11], 16, 1839030562), m = I(m, y, v, d, s[_ + 14], 23, -35309556), d = I(d, m, y, v, s[_ + 1], 4, -1530992060), v = I(v, d, m, y, s[_ + 4], 11, 1272893353), y = I(y, v, d, m, s[_ + 7], 16, -155497632), m = I(m, y, v, d, s[_ + 10], 23, -1094730640), d = I(d, m, y, v, s[_ + 13], 4, 681279174), v = I(v, d, m, y, s[_ + 0], 11, -358537222), y = I(y, v, d, m, s[_ + 3], 16, -722521979), m = I(m, y, v, d, s[_ + 6], 23, 76029189), d = I(d, m, y, v, s[_ + 9], 4, -640364487), v = I(v, d, m, y, s[_ + 12], 11, -421815835), y = I(y, v, d, m, s[_ + 15], 16, 530742520), d = S(d, m = I(m, y, v, d, s[_ + 2], 23, -995338651), y, v, s[_ + 0], 6, -198630844), v = S(v, d, m, y, s[_ + 7], 10, 1126891415), y = S(y, v, d, m, s[_ + 14], 15, -1416354905), m = S(m, y, v, d, s[_ + 5], 21, -57434055), d = S(d, m, y, v, s[_ + 12], 6, 1700485571), v = S(v, d, m, y, s[_ + 3], 10, -1894986606), y = S(y, v, d, m, s[_ + 10], 15, -1051523), m = S(m, y, v, d, s[_ + 1], 21, -2054922799), d = S(d, m, y, v, s[_ + 8], 6, 1873313359), v = S(v, d, m, y, s[_ + 15], 10, -30611744), y = S(y, v, d, m, s[_ + 6], 15, -1560198380), m = S(m, y, v, d, s[_ + 13], 21, 1309151649), d = S(d, m, y, v, s[_ + 4], 6, -145523070), v = S(v, d, m, y, s[_ + 11], 10, -1120210379), y = S(y, v, d, m, s[_ + 2], 15, 718787259), m = S(m, y, v, d, s[_ + 9], 21, -343485551), d = d + A >>> 0, m = m + x >>> 0, y = y + C >>> 0, v = v + P >>> 0;
      }
      return i.endian([d, m, y, v]);
    };
    c._ff = function(u, o, s, g, d, m, y) {
      var v = u + (o & s | ~o & g) + (d >>> 0) + y;
      return (v << m | v >>> 32 - m) + o;
    }, c._gg = function(u, o, s, g, d, m, y) {
      var v = u + (o & g | s & ~g) + (d >>> 0) + y;
      return (v << m | v >>> 32 - m) + o;
    }, c._hh = function(u, o, s, g, d, m, y) {
      var v = u + (o ^ s ^ g) + (d >>> 0) + y;
      return (v << m | v >>> 32 - m) + o;
    }, c._ii = function(u, o, s, g, d, m, y) {
      var v = u + (s ^ (o | ~g)) + (d >>> 0) + y;
      return (v << m | v >>> 32 - m) + o;
    }, c._blocksize = 16, c._digestsize = 16, n.exports = function(u, o) {
      if (u == null) throw new Error("Illegal argument " + u);
      var s = i.wordsToBytes(c(u, o));
      return o && o.asBytes ? s : o && o.asString ? h.bytesToString(s) : i.bytesToHex(s);
    };
  })();
}, 285: (n, e, r) => {
  var i = r(2);
  n.exports = function(T) {
    return T ? (T.substr(0, 2) === "{}" && (T = "\\{\\}" + T.substr(2)), _(function(E) {
      return E.split("\\\\").join(l).split("\\{").join(a).split("\\}").join(h).split("\\,").join(c).split("\\.").join(u);
    }(T), !0).map(s)) : [];
  };
  var l = "\0SLASH" + Math.random() + "\0", a = "\0OPEN" + Math.random() + "\0", h = "\0CLOSE" + Math.random() + "\0", c = "\0COMMA" + Math.random() + "\0", u = "\0PERIOD" + Math.random() + "\0";
  function o(T) {
    return parseInt(T, 10) == T ? parseInt(T, 10) : T.charCodeAt(0);
  }
  function s(T) {
    return T.split(l).join("\\").split(a).join("{").split(h).join("}").split(c).join(",").split(u).join(".");
  }
  function g(T) {
    if (!T) return [""];
    var E = [], I = i("{", "}", T);
    if (!I) return T.split(",");
    var S = I.pre, A = I.body, x = I.post, C = S.split(",");
    C[C.length - 1] += "{" + A + "}";
    var P = g(x);
    return x.length && (C[C.length - 1] += P.shift(), C.push.apply(C, P)), E.push.apply(E, C), E;
  }
  function d(T) {
    return "{" + T + "}";
  }
  function m(T) {
    return /^-?0\d/.test(T);
  }
  function y(T, E) {
    return T <= E;
  }
  function v(T, E) {
    return T >= E;
  }
  function _(T, E) {
    var I = [], S = i("{", "}", T);
    if (!S) return [T];
    var A = S.pre, x = S.post.length ? _(S.post, !1) : [""];
    if (/\$$/.test(S.pre)) for (var C = 0; C < x.length; C++) {
      var P = A + "{" + S.body + "}" + x[C];
      I.push(P);
    }
    else {
      var F, j, D = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(S.body), B = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(S.body), $ = D || B, q = S.body.indexOf(",") >= 0;
      if (!$ && !q) return S.post.match(/,.*\}/) ? _(T = S.pre + "{" + S.body + h + S.post) : [T];
      if ($) F = S.body.split(/\.\./);
      else if ((F = g(S.body)).length === 1 && (F = _(F[0], !1).map(d)).length === 1) return x.map(function(it) {
        return S.pre + F[0] + it;
      });
      if ($) {
        var V = o(F[0]), oe = o(F[1]), ne = Math.max(F[0].length, F[1].length), te = F.length == 3 ? Math.abs(o(F[2])) : 1, ae = y;
        oe < V && (te *= -1, ae = v);
        var fe = F.some(m);
        j = [];
        for (var re = V; ae(re, oe); re += te) {
          var $e;
          if (B) ($e = String.fromCharCode(re)) === "\\" && ($e = "");
          else if ($e = String(re), fe) {
            var he = ne - $e.length;
            if (he > 0) {
              var pe = new Array(he + 1).join("0");
              $e = re < 0 ? "-" + pe + $e.slice(1) : pe + $e;
            }
          }
          j.push($e);
        }
      } else {
        j = [];
        for (var Q = 0; Q < F.length; Q++) j.push.apply(j, _(F[Q], !1));
      }
      for (Q = 0; Q < j.length; Q++) for (C = 0; C < x.length; C++) P = A + j[Q] + x[C], (!E || $ || P) && I.push(P);
    }
    return I;
  }
}, 829: (n) => {
  function e(o) {
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, e(o);
  }
  function r(o) {
    var s = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return r = function(g) {
      if (g === null || (d = g, Function.toString.call(d).indexOf("[native code]") === -1)) return g;
      var d;
      if (typeof g != "function") throw new TypeError("Super expression must either be null or a function");
      if (s !== void 0) {
        if (s.has(g)) return s.get(g);
        s.set(g, m);
      }
      function m() {
        return i(g, arguments, a(this).constructor);
      }
      return m.prototype = Object.create(g.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), l(m, g);
    }, r(o);
  }
  function i(o, s, g) {
    return i = function() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }() ? Reflect.construct : function(d, m, y) {
      var v = [null];
      v.push.apply(v, m);
      var _ = new (Function.bind.apply(d, v))();
      return y && l(_, y.prototype), _;
    }, i.apply(null, arguments);
  }
  function l(o, s) {
    return l = Object.setPrototypeOf || function(g, d) {
      return g.__proto__ = d, g;
    }, l(o, s);
  }
  function a(o) {
    return a = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, a(o);
  }
  var h = function(o) {
    function s(g) {
      var d;
      return function(m, y) {
        if (!(m instanceof y)) throw new TypeError("Cannot call a class as a function");
      }(this, s), (d = function(m, y) {
        return !y || e(y) !== "object" && typeof y != "function" ? function(v) {
          if (v === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return v;
        }(m) : y;
      }(this, a(s).call(this, g))).name = "ObjectPrototypeMutationError", d;
    }
    return function(g, d) {
      if (typeof d != "function" && d !== null) throw new TypeError("Super expression must either be null or a function");
      g.prototype = Object.create(d && d.prototype, { constructor: { value: g, writable: !0, configurable: !0 } }), d && l(g, d);
    }(s, o), s;
  }(r(Error));
  function c(o, s) {
    for (var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
    }, d = s.split("."), m = d.length, y = function(T) {
      var E = d[T];
      if (!o) return { v: void 0 };
      if (E === "+") {
        if (Array.isArray(o)) return { v: o.map(function(S, A) {
          var x = d.slice(T + 1);
          return x.length > 0 ? c(S, x.join("."), g) : g(o, A, d, T);
        }) };
        var I = d.slice(0, T).join(".");
        throw new Error("Object at wildcard (".concat(I, ") is not an array"));
      }
      o = g(o, E, d, T);
    }, v = 0; v < m; v++) {
      var _ = y(v);
      if (e(_) === "object") return _.v;
    }
    return o;
  }
  function u(o, s) {
    return o.length === s + 1;
  }
  n.exports = { set: function(o, s, g) {
    if (e(o) != "object" || o === null || s === void 0) return o;
    if (typeof s == "number") return o[s] = g, o[s];
    try {
      return c(o, s, function(d, m, y, v) {
        if (d === Reflect.getPrototypeOf({})) throw new h("Attempting to mutate Object.prototype");
        if (!d[m]) {
          var _ = Number.isInteger(Number(y[v + 1])), T = y[v + 1] === "+";
          d[m] = _ || T ? [] : {};
        }
        return u(y, v) && (d[m] = g), d[m];
      });
    } catch (d) {
      if (d instanceof h) throw d;
      return o;
    }
  }, get: function(o, s) {
    if (e(o) != "object" || o === null || s === void 0) return o;
    if (typeof s == "number") return o[s];
    try {
      return c(o, s, function(g, d) {
        return g[d];
      });
    } catch {
      return o;
    }
  }, has: function(o, s) {
    var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (e(o) != "object" || o === null || s === void 0) return !1;
    if (typeof s == "number") return s in o;
    try {
      var d = !1;
      return c(o, s, function(m, y, v, _) {
        if (!u(v, _)) return m && m[y];
        d = g.own ? m.hasOwnProperty(y) : y in m;
      }), d;
    } catch {
      return !1;
    }
  }, hasOwn: function(o, s, g) {
    return this.has(o, s, g || { own: !0 });
  }, isIn: function(o, s, g) {
    var d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (e(o) != "object" || o === null || s === void 0) return !1;
    try {
      var m = !1, y = !1;
      return c(o, s, function(v, _, T, E) {
        return m = m || v === g || !!v && v[_] === g, y = u(T, E) && e(v) === "object" && _ in v, v && v[_];
      }), d.validPath ? m && y : m;
    } catch {
      return !1;
    }
  }, ObjectPrototypeMutationError: h };
}, 47: (n, e, r) => {
  var i = r(410), l = function(o) {
    return typeof o == "string";
  };
  function a(o, s) {
    for (var g = [], d = 0; d < o.length; d++) {
      var m = o[d];
      m && m !== "." && (m === ".." ? g.length && g[g.length - 1] !== ".." ? g.pop() : s && g.push("..") : g.push(m));
    }
    return g;
  }
  var h = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, c = {};
  function u(o) {
    return h.exec(o).slice(1);
  }
  c.resolve = function() {
    for (var o = "", s = !1, g = arguments.length - 1; g >= -1 && !s; g--) {
      var d = g >= 0 ? arguments[g] : qe.cwd();
      if (!l(d)) throw new TypeError("Arguments to path.resolve must be strings");
      d && (o = d + "/" + o, s = d.charAt(0) === "/");
    }
    return (s ? "/" : "") + (o = a(o.split("/"), !s).join("/")) || ".";
  }, c.normalize = function(o) {
    var s = c.isAbsolute(o), g = o.substr(-1) === "/";
    return (o = a(o.split("/"), !s).join("/")) || s || (o = "."), o && g && (o += "/"), (s ? "/" : "") + o;
  }, c.isAbsolute = function(o) {
    return o.charAt(0) === "/";
  }, c.join = function() {
    for (var o = "", s = 0; s < arguments.length; s++) {
      var g = arguments[s];
      if (!l(g)) throw new TypeError("Arguments to path.join must be strings");
      g && (o += o ? "/" + g : g);
    }
    return c.normalize(o);
  }, c.relative = function(o, s) {
    function g(E) {
      for (var I = 0; I < E.length && E[I] === ""; I++) ;
      for (var S = E.length - 1; S >= 0 && E[S] === ""; S--) ;
      return I > S ? [] : E.slice(I, S + 1);
    }
    o = c.resolve(o).substr(1), s = c.resolve(s).substr(1);
    for (var d = g(o.split("/")), m = g(s.split("/")), y = Math.min(d.length, m.length), v = y, _ = 0; _ < y; _++) if (d[_] !== m[_]) {
      v = _;
      break;
    }
    var T = [];
    for (_ = v; _ < d.length; _++) T.push("..");
    return (T = T.concat(m.slice(v))).join("/");
  }, c._makeLong = function(o) {
    return o;
  }, c.dirname = function(o) {
    var s = u(o), g = s[0], d = s[1];
    return g || d ? (d && (d = d.substr(0, d.length - 1)), g + d) : ".";
  }, c.basename = function(o, s) {
    var g = u(o)[2];
    return s && g.substr(-1 * s.length) === s && (g = g.substr(0, g.length - s.length)), g;
  }, c.extname = function(o) {
    return u(o)[3];
  }, c.format = function(o) {
    if (!i.isObject(o)) throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof o);
    var s = o.root || "";
    if (!l(s)) throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof o.root);
    return (o.dir ? o.dir + c.sep : "") + (o.base || "");
  }, c.parse = function(o) {
    if (!l(o)) throw new TypeError("Parameter 'pathString' must be a string, not " + typeof o);
    var s = u(o);
    if (!s || s.length !== 4) throw new TypeError("Invalid path '" + o + "'");
    return s[1] = s[1] || "", s[2] = s[2] || "", s[3] = s[3] || "", { root: s[0], dir: s[0] + s[1].slice(0, s[1].length - 1), base: s[2], ext: s[3], name: s[2].slice(0, s[2].length - s[3].length) };
  }, c.sep = "/", c.delimiter = ":", n.exports = c;
}, 647: (n, e) => {
  var r = Object.prototype.hasOwnProperty;
  function i(a) {
    try {
      return decodeURIComponent(a.replace(/\+/g, " "));
    } catch {
      return null;
    }
  }
  function l(a) {
    try {
      return encodeURIComponent(a);
    } catch {
      return null;
    }
  }
  e.stringify = function(a, h) {
    h = h || "";
    var c, u, o = [];
    for (u in typeof h != "string" && (h = "?"), a) if (r.call(a, u)) {
      if ((c = a[u]) || c != null && !isNaN(c) || (c = ""), u = l(u), c = l(c), u === null || c === null) continue;
      o.push(u + "=" + c);
    }
    return o.length ? h + o.join("&") : "";
  }, e.parse = function(a) {
    for (var h, c = /([^=?#&]+)=?([^&]*)/g, u = {}; h = c.exec(a); ) {
      var o = i(h[1]), s = i(h[2]);
      o === null || s === null || o in u || (u[o] = s);
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
}, 494: (n) => {
  const e = /^[-+]?0x[a-fA-F0-9]+$/, r = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
  !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt), !Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
  const i = { hex: !0, leadingZeros: !0, decimalPoint: ".", eNotation: !0 };
  n.exports = function(l) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (a = Object.assign({}, i, a), !l || typeof l != "string") return l;
    let h = l.trim();
    if (a.skipLike !== void 0 && a.skipLike.test(h)) return l;
    if (a.hex && e.test(h)) return Number.parseInt(h, 16);
    {
      const u = r.exec(h);
      if (u) {
        const o = u[1], s = u[2];
        let g = ((c = u[3]) && c.indexOf(".") !== -1 && ((c = c.replace(/0+$/, "")) === "." ? c = "0" : c[0] === "." ? c = "0" + c : c[c.length - 1] === "." && (c = c.substr(0, c.length - 1))), c);
        const d = u[4] || u[6];
        if (!a.leadingZeros && s.length > 0 && o && h[2] !== "." || !a.leadingZeros && s.length > 0 && !o && h[1] !== ".") return l;
        {
          const m = Number(h), y = "" + m;
          return y.search(/[eE]/) !== -1 || d ? a.eNotation ? m : l : h.indexOf(".") !== -1 ? y === "0" && g === "" || y === g || o && y === "-" + g ? m : l : s ? g === y || o + g === y ? m : l : h === y || h === o + y ? m : l;
        }
      }
      return l;
    }
    var c;
  };
}, 737: (n, e, r) => {
  var i = r(670), l = r(647), a = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, h = /[\n\r\t]/g, c = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, u = /:\d+$/, o = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, s = /^[a-zA-Z]:/;
  function g(E) {
    return (E || "").toString().replace(a, "");
  }
  var d = [["#", "hash"], ["?", "query"], function(E, I) {
    return v(I.protocol) ? E.replace(/\\/g, "/") : E;
  }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]], m = { hash: 1, query: 1 };
  function y(E) {
    var I, S = (typeof window < "u" ? window : typeof on < "u" ? on : typeof self < "u" ? self : {}).location || {}, A = {}, x = typeof (E = E || S);
    if (E.protocol === "blob:") A = new T(unescape(E.pathname), {});
    else if (x === "string") for (I in A = new T(E, {}), m) delete A[I];
    else if (x === "object") {
      for (I in E) I in m || (A[I] = E[I]);
      A.slashes === void 0 && (A.slashes = c.test(E.href));
    }
    return A;
  }
  function v(E) {
    return E === "file:" || E === "ftp:" || E === "http:" || E === "https:" || E === "ws:" || E === "wss:";
  }
  function _(E, I) {
    E = (E = g(E)).replace(h, ""), I = I || {};
    var S, A = o.exec(E), x = A[1] ? A[1].toLowerCase() : "", C = !!A[2], P = !!A[3], F = 0;
    return C ? P ? (S = A[2] + A[3] + A[4], F = A[2].length + A[3].length) : (S = A[2] + A[4], F = A[2].length) : P ? (S = A[3] + A[4], F = A[3].length) : S = A[4], x === "file:" ? F >= 2 && (S = S.slice(2)) : v(x) ? S = A[4] : x ? C && (S = S.slice(2)) : F >= 2 && v(I.protocol) && (S = A[4]), { protocol: x, slashes: C || v(x), slashesCount: F, rest: S };
  }
  function T(E, I, S) {
    if (E = (E = g(E)).replace(h, ""), !(this instanceof T)) return new T(E, I, S);
    var A, x, C, P, F, j, D = d.slice(), B = typeof I, $ = this, q = 0;
    for (B !== "object" && B !== "string" && (S = I, I = null), S && typeof S != "function" && (S = l.parse), A = !(x = _(E || "", I = y(I))).protocol && !x.slashes, $.slashes = x.slashes || A && I.slashes, $.protocol = x.protocol || I.protocol || "", E = x.rest, (x.protocol === "file:" && (x.slashesCount !== 2 || s.test(E)) || !x.slashes && (x.protocol || x.slashesCount < 2 || !v($.protocol))) && (D[3] = [/(.*)/, "pathname"]); q < D.length; q++) typeof (P = D[q]) != "function" ? (C = P[0], j = P[1], C != C ? $[j] = E : typeof C == "string" ? ~(F = C === "@" ? E.lastIndexOf(C) : E.indexOf(C)) && (typeof P[2] == "number" ? ($[j] = E.slice(0, F), E = E.slice(F + P[2])) : ($[j] = E.slice(F), E = E.slice(0, F))) : (F = C.exec(E)) && ($[j] = F[1], E = E.slice(0, F.index)), $[j] = $[j] || A && P[3] && I[j] || "", P[4] && ($[j] = $[j].toLowerCase())) : E = P(E, $);
    S && ($.query = S($.query)), A && I.slashes && $.pathname.charAt(0) !== "/" && ($.pathname !== "" || I.pathname !== "") && ($.pathname = function(V, oe) {
      if (V === "") return oe;
      for (var ne = (oe || "/").split("/").slice(0, -1).concat(V.split("/")), te = ne.length, ae = ne[te - 1], fe = !1, re = 0; te--; ) ne[te] === "." ? ne.splice(te, 1) : ne[te] === ".." ? (ne.splice(te, 1), re++) : re && (te === 0 && (fe = !0), ne.splice(te, 1), re--);
      return fe && ne.unshift(""), ae !== "." && ae !== ".." || ne.push(""), ne.join("/");
    }($.pathname, I.pathname)), $.pathname.charAt(0) !== "/" && v($.protocol) && ($.pathname = "/" + $.pathname), i($.port, $.protocol) || ($.host = $.hostname, $.port = ""), $.username = $.password = "", $.auth && (~(F = $.auth.indexOf(":")) ? ($.username = $.auth.slice(0, F), $.username = encodeURIComponent(decodeURIComponent($.username)), $.password = $.auth.slice(F + 1), $.password = encodeURIComponent(decodeURIComponent($.password))) : $.username = encodeURIComponent(decodeURIComponent($.auth)), $.auth = $.password ? $.username + ":" + $.password : $.username), $.origin = $.protocol !== "file:" && v($.protocol) && $.host ? $.protocol + "//" + $.host : "null", $.href = $.toString();
  }
  T.prototype = { set: function(E, I, S) {
    var A = this;
    switch (E) {
      case "query":
        typeof I == "string" && I.length && (I = (S || l.parse)(I)), A[E] = I;
        break;
      case "port":
        A[E] = I, i(I, A.protocol) ? I && (A.host = A.hostname + ":" + I) : (A.host = A.hostname, A[E] = "");
        break;
      case "hostname":
        A[E] = I, A.port && (I += ":" + A.port), A.host = I;
        break;
      case "host":
        A[E] = I, u.test(I) ? (I = I.split(":"), A.port = I.pop(), A.hostname = I.join(":")) : (A.hostname = I, A.port = "");
        break;
      case "protocol":
        A.protocol = I.toLowerCase(), A.slashes = !S;
        break;
      case "pathname":
      case "hash":
        if (I) {
          var x = E === "pathname" ? "/" : "#";
          A[E] = I.charAt(0) !== x ? x + I : I;
        } else A[E] = I;
        break;
      case "username":
      case "password":
        A[E] = encodeURIComponent(I);
        break;
      case "auth":
        var C = I.indexOf(":");
        ~C ? (A.username = I.slice(0, C), A.username = encodeURIComponent(decodeURIComponent(A.username)), A.password = I.slice(C + 1), A.password = encodeURIComponent(decodeURIComponent(A.password))) : A.username = encodeURIComponent(decodeURIComponent(I));
    }
    for (var P = 0; P < d.length; P++) {
      var F = d[P];
      F[4] && (A[F[1]] = A[F[1]].toLowerCase());
    }
    return A.auth = A.password ? A.username + ":" + A.password : A.username, A.origin = A.protocol !== "file:" && v(A.protocol) && A.host ? A.protocol + "//" + A.host : "null", A.href = A.toString(), A;
  }, toString: function(E) {
    E && typeof E == "function" || (E = l.stringify);
    var I, S = this, A = S.host, x = S.protocol;
    x && x.charAt(x.length - 1) !== ":" && (x += ":");
    var C = x + (S.protocol && S.slashes || v(S.protocol) ? "//" : "");
    return S.username ? (C += S.username, S.password && (C += ":" + S.password), C += "@") : S.password ? (C += ":" + S.password, C += "@") : S.protocol !== "file:" && v(S.protocol) && !A && S.pathname !== "/" && (C += "@"), (A[A.length - 1] === ":" || u.test(S.hostname) && !S.port) && (A += ":"), C += A + S.pathname, (I = typeof S.query == "object" ? E(S.query) : S.query) && (C += I.charAt(0) !== "?" ? "?" + I : I), S.hash && (C += S.hash), C;
  } }, T.extractProtocol = _, T.location = y, T.trimLeft = g, T.qs = l, n.exports = T;
}, 410: () => {
}, 388: () => {
}, 805: () => {
}, 345: () => {
}, 800: () => {
} }, Mo = {};
function ye(n) {
  var e = Mo[n];
  if (e !== void 0) return e.exports;
  var r = Mo[n] = { id: n, loaded: !1, exports: {} };
  return Bl[n].call(r.exports, r, r.exports, ye), r.loaded = !0, r.exports;
}
ye.n = (n) => {
  var e = n && n.__esModule ? () => n.default : () => n;
  return ye.d(e, { a: e }), e;
}, ye.d = (n, e) => {
  for (var r in e) ye.o(e, r) && !ye.o(n, r) && Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
}, ye.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e), ye.nmd = (n) => (n.paths = [], n.children || (n.children = []), n);
var vt = {};
ye.d(vt, { hT: () => Ye, O4: () => Wt, Kd: () => Hl, YK: () => Yl, UU: () => tf, Gu: () => ba, ky: () => La, h4: () => rn, ch: () => kn, hq: () => wr, i5: () => Pa });
var Dl = ye(737), jl = ye.n(Dl);
function Xn(n) {
  if (!Li(n)) throw new Error("Parameter was not an error");
}
function Li(n) {
  return !!n && typeof n == "object" && (e = n, Object.prototype.toString.call(e) === "[object Error]") || n instanceof Error;
  var e;
}
class Je extends Error {
  constructor(e, r) {
    const i = [...arguments], { options: l, shortMessage: a } = function(c) {
      let u, o = "";
      if (c.length === 0) u = {};
      else if (Li(c[0])) u = { cause: c[0] }, o = c.slice(1).join(" ") || "";
      else if (c[0] && typeof c[0] == "object") u = Object.assign({}, c[0]), o = c.slice(1).join(" ") || "";
      else {
        if (typeof c[0] != "string") throw new Error("Invalid arguments passed to Layerr");
        u = {}, o = o = c.join(" ") || "";
      }
      return { options: u, shortMessage: o };
    }(i);
    let h = a;
    if (l.cause && (h = `${h}: ${l.cause.message}`), super(h), this.message = h, l.name && typeof l.name == "string" ? this.name = l.name : this.name = "Layerr", l.cause && Object.defineProperty(this, "_cause", { value: l.cause }), Object.defineProperty(this, "_info", { value: {} }), l.info && typeof l.info == "object" && Object.assign(this._info, l.info), Error.captureStackTrace) {
      const c = l.constructorOpt || this.constructor;
      Error.captureStackTrace(this, c);
    }
  }
  static cause(e) {
    return Xn(e), e._cause && Li(e._cause) ? e._cause : null;
  }
  static fullStack(e) {
    Xn(e);
    const r = Je.cause(e);
    return r ? `${e.stack}
caused by: ${Je.fullStack(r)}` : e.stack ?? "";
  }
  static info(e) {
    Xn(e);
    const r = {}, i = Je.cause(e);
    return i && Object.assign(r, Je.info(i)), e._info && Object.assign(r, e._info), r;
  }
  toString() {
    let e = this.name || this.constructor.name || this.constructor.prototype.name;
    return this.message && (e = `${e}: ${this.message}`), e;
  }
}
var Gl = ye(47), Nn = ye.n(Gl);
const Uo = "__PATH_SEPARATOR_POSIX__", Bo = "__PATH_SEPARATOR_WINDOWS__";
function Ne(n) {
  try {
    const e = n.replace(/\//g, Uo).replace(/\\\\/g, Bo);
    return encodeURIComponent(e).split(Bo).join("\\\\").split(Uo).join("/");
  } catch (e) {
    throw new Je(e, "Failed encoding path");
  }
}
function Do(n) {
  return n.startsWith("/") ? n : "/" + n;
}
function Kr(n) {
  let e = n;
  return e[0] !== "/" && (e = "/" + e), /^.+\/$/.test(e) && (e = e.substr(0, e.length - 1)), e;
}
function ql(n) {
  let e = new (jl())(n).pathname;
  return e.length <= 0 && (e = "/"), Kr(e);
}
function Ae() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
  return function() {
    return function(i) {
      var l = [];
      if (i.length === 0) return "";
      if (typeof i[0] != "string") throw new TypeError("Url must be a string. Received " + i[0]);
      if (i[0].match(/^[^/:]+:\/*$/) && i.length > 1) {
        var a = i.shift();
        i[0] = a + i[0];
      }
      i[0].match(/^file:\/\/\//) ? i[0] = i[0].replace(/^([^/:]+):\/*/, "$1:///") : i[0] = i[0].replace(/^([^/:]+):\/*/, "$1://");
      for (var h = 0; h < i.length; h++) {
        var c = i[h];
        if (typeof c != "string") throw new TypeError("Url must be a string. Received " + c);
        c !== "" && (h > 0 && (c = c.replace(/^[\/]+/, "")), c = h < i.length - 1 ? c.replace(/[\/]+$/, "") : c.replace(/[\/]+$/, "/"), l.push(c));
      }
      var u = l.join("/"), o = (u = u.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
      return o.shift() + (o.length > 0 ? "?" : "") + o.join("&");
    }(typeof arguments[0] == "object" ? arguments[0] : [].slice.call(arguments));
  }(e.reduce((i, l, a) => ((a === 0 || l !== "/" || l === "/" && i[i.length - 1] !== "/") && i.push(l), i), []));
}
var Vl = ye(542), Dr = ye.n(Vl);
const Wl = "abcdef0123456789";
function jo(n, e) {
  const r = n.url.replace("//", ""), i = r.indexOf("/") == -1 ? "/" : r.slice(r.indexOf("/")), l = n.method ? n.method.toUpperCase() : "GET", a = !!/(^|,)\s*auth\s*($|,)/.test(e.qop) && "auth", h = `00000000${e.nc}`.slice(-8), c = function(d, m, y, v, _, T, E) {
    const I = E || Dr()(`${m}:${y}:${v}`);
    return d && d.toLowerCase() === "md5-sess" ? Dr()(`${I}:${_}:${T}`) : I;
  }(e.algorithm, e.username, e.realm, e.password, e.nonce, e.cnonce, e.ha1), u = Dr()(`${l}:${i}`), o = a ? Dr()(`${c}:${e.nonce}:${h}:${e.cnonce}:${a}:${u}`) : Dr()(`${c}:${e.nonce}:${u}`), s = { username: e.username, realm: e.realm, nonce: e.nonce, uri: i, qop: a, response: o, nc: h, cnonce: e.cnonce, algorithm: e.algorithm, opaque: e.opaque }, g = [];
  for (const d in s) s[d] && (d === "qop" || d === "nc" || d === "algorithm" ? g.push(`${d}=${s[d]}`) : g.push(`${d}="${s[d]}"`));
  return `Digest ${g.join(", ")}`;
}
function wa(n) {
  return (n.headers && n.headers.get("www-authenticate") || "").split(/\s/)[0].toLowerCase() === "digest";
}
var Xl = ye(101), Ea = ye.n(Xl);
function Go(n) {
  return Ea().decode(n);
}
function qo(n, e) {
  var r;
  return `Basic ${r = `${n}:${e}`, Ea().encode(r)}`;
}
const An = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : typeof window < "u" ? window : globalThis, zl = An.fetch.bind(An), Hl = An.Request, Yl = An.Response;
let Ye = function(n) {
  return n.Auto = "auto", n.Digest = "digest", n.None = "none", n.Password = "password", n.Token = "token", n;
}({}), Wt = function(n) {
  return n.DataTypeNoLength = "data-type-no-length", n.InvalidAuthType = "invalid-auth-type", n.InvalidOutputFormat = "invalid-output-format", n.LinkUnsupportedAuthType = "link-unsupported-auth", n.InvalidUpdateRange = "invalid-update-range", n.NotSupported = "not-supported", n;
}({});
function va(n, e, r, i, l) {
  switch (n.authType) {
    case Ye.Auto:
      e && r && (n.headers.Authorization = qo(e, r));
      break;
    case Ye.Digest:
      n.digest = /* @__PURE__ */ function(h, c, u) {
        return { username: h, password: c, ha1: u, nc: 0, algorithm: "md5", hasDigestAuth: !1 };
      }(e, r, l);
      break;
    case Ye.None:
      break;
    case Ye.Password:
      n.headers.Authorization = qo(e, r);
      break;
    case Ye.Token:
      n.headers.Authorization = `${(a = i).token_type} ${a.access_token}`;
      break;
    default:
      throw new Je({ info: { code: Wt.InvalidAuthType } }, `Invalid auth type: ${n.authType}`);
  }
  var a;
}
ye(345), ye(800);
const Vo = "@@HOTPATCHER", Zl = () => {
};
function zn(n) {
  return { original: n, methods: [n], final: !1 };
}
class Jl {
  constructor() {
    this._configuration = { registry: {}, getEmptyAction: "null" }, this.__type__ = Vo;
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
    if (!e || e.__type__ !== Vo) throw new Error("Failed taking control of target HotPatcher instance: Invalid type or object");
    return Object.keys(e.configuration.registry).forEach((i) => {
      this.configuration.registry.hasOwnProperty(i) ? r && (this.configuration.registry[i] = Object.assign({}, e.configuration.registry[i])) : this.configuration.registry[i] = Object.assign({}, e.configuration.registry[i]);
    }), e._configuration = this.configuration, this;
  }
  execute(e) {
    const r = this.get(e) || Zl;
    for (var i = arguments.length, l = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) l[a - 1] = arguments[a];
    return r(...l);
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
      for (var i = arguments.length, l = new Array(i), a = 0; a < i; a++) l[a] = arguments[a];
      if (l.length === 0) throw new Error("Failed creating sequence: No functions provided");
      return function() {
        for (var h = arguments.length, c = new Array(h), u = 0; u < h; u++) c[u] = arguments[u];
        let o = c;
        const s = this;
        for (; l.length > 0; ) o = [l.shift().apply(s, o)];
        return o[0];
      };
    }(...r.methods);
  }
  isPatched(e) {
    return !!this.configuration.registry[e];
  }
  patch(e, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { chain: l = !1 } = i;
    if (this.configuration.registry[e] && this.configuration.registry[e].final) throw new Error(`Failed patching '${e}': Method marked as being final`);
    if (typeof r != "function") throw new Error(`Failed patching '${e}': Provided method is not a function`);
    if (l) this.configuration.registry[e] ? this.configuration.registry[e].methods.push(r) : this.configuration.registry[e] = zn(r);
    else if (this.isPatched(e)) {
      const { original: a } = this.configuration.registry[e];
      this.configuration.registry[e] = Object.assign(zn(r), { original: a });
    } else this.configuration.registry[e] = zn(r);
    return this;
  }
  patchInline(e, r) {
    this.isPatched(e) || this.patch(e, r);
    for (var i = arguments.length, l = new Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) l[a - 2] = arguments[a];
    return this.execute(e, ...l);
  }
  plugin(e) {
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++) i[l - 1] = arguments[l];
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
let Hn = null;
function ba() {
  return Hn || (Hn = new Jl()), Hn;
}
function Tn(n) {
  return function(e) {
    if (typeof e != "object" || e === null || Object.prototype.toString.call(e) != "[object Object]") return !1;
    if (Object.getPrototypeOf(e) === null) return !0;
    let r = e;
    for (; Object.getPrototypeOf(r) !== null; ) r = Object.getPrototypeOf(r);
    return Object.getPrototypeOf(e) === r;
  }(n) ? Object.assign({}, n) : Object.setPrototypeOf(Object.assign({}, n), Object.getPrototypeOf(n));
}
function Wo() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
  let i = null, l = [...e];
  for (; l.length > 0; ) {
    const a = l.shift();
    i = i ? Na(i, a) : Tn(a);
  }
  return i;
}
function Na(n, e) {
  const r = Tn(n);
  return Object.keys(e).forEach((i) => {
    r.hasOwnProperty(i) ? Array.isArray(e[i]) ? r[i] = Array.isArray(r[i]) ? [...r[i], ...e[i]] : [...e[i]] : typeof e[i] == "object" && e[i] ? r[i] = typeof r[i] == "object" && r[i] ? Na(r[i], e[i]) : Tn(e[i]) : r[i] = e[i] : r[i] = e[i];
  }), r;
}
function Kl(n) {
  const e = {};
  for (const r of n.keys()) e[r] = n.get(r);
  return e;
}
function Pi() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
  if (e.length === 0) return {};
  const i = {};
  return e.reduce((l, a) => (Object.keys(a).forEach((h) => {
    const c = h.toLowerCase();
    i.hasOwnProperty(c) ? l[i[c]] = a[h] : (i[c] = h, l[h] = a[h]);
  }), l), {});
}
ye(805);
const Ql = typeof ArrayBuffer == "function", { toString: ec } = Object.prototype;
function Aa(n) {
  return Ql && (n instanceof ArrayBuffer || ec.call(n) === "[object ArrayBuffer]");
}
function Ta(n) {
  return n != null && n.constructor != null && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n);
}
function Yi(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
function $i(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const Ia = Yi(function(n) {
  const e = n._digest;
  return delete n._digest, e.hasDigestAuth && (n = Wo(n, { headers: { Authorization: jo(n, e) } })), $i(In(n), function(r) {
    let i = !1;
    return l = function(h) {
      return i ? h : r;
    }, (a = function() {
      if (r.status == 401) return e.hasDigestAuth = function(h, c) {
        if (!wa(h)) return !1;
        const u = /([a-z0-9_-]+)=(?:"([^"]+)"|([a-z0-9_-]+))/gi;
        for (; ; ) {
          const o = h.headers && h.headers.get("www-authenticate") || "", s = u.exec(o);
          if (!s) break;
          c[s[1]] = s[2] || s[3];
        }
        return c.nc += 1, c.cnonce = function() {
          let o = "";
          for (let s = 0; s < 32; ++s) o = `${o}${Wl[Math.floor(16 * Math.random())]}`;
          return o;
        }(), !0;
      }(r, e), function() {
        if (e.hasDigestAuth) return $i(In(n = Wo(n, { headers: { Authorization: jo(n, e) } })), function(h) {
          return h.status == 401 ? e.hasDigestAuth = !1 : e.nc++, i = !0, h;
        });
      }();
      e.nc++;
    }()) && a.then ? a.then(l) : l(a);
    var l, a;
  });
}), tc = Yi(function(n, e) {
  return $i(In(n), function(r) {
    return r.ok ? (e.authType = Ye.Password, r) : r.status == 401 && wa(r) ? (e.authType = Ye.Digest, va(e, e.username, e.password, void 0, void 0), n._digest = e.digest, Ia(n)) : r;
  });
}), xe = Yi(function(n, e) {
  return e.authType === Ye.Auto ? tc(n, e) : n._digest ? Ia(n) : In(n);
});
function Se(n, e, r) {
  const i = Tn(n);
  return i.headers = Pi(e.headers, i.headers || {}, r.headers || {}), r.data !== void 0 && (i.data = r.data), r.signal && (i.signal = r.signal), e.httpAgent && (i.httpAgent = e.httpAgent), e.httpsAgent && (i.httpsAgent = e.httpsAgent), e.digest && (i._digest = e.digest), typeof e.withCredentials == "boolean" && (i.withCredentials = e.withCredentials), i;
}
function In(n) {
  const e = ba();
  return e.patchInline("request", (r) => e.patchInline("fetch", zl, r.url, function(i) {
    let l = {};
    const a = { method: i.method };
    if (i.headers && (l = Pi(l, i.headers)), i.data !== void 0) {
      const [h, c] = function(u) {
        if (typeof u == "string") return [u, {}];
        if (Ta(u)) return [u, {}];
        if (Aa(u)) return [u, {}];
        if (u && typeof u == "object") return [JSON.stringify(u), { "content-type": "application/json" }];
        throw new Error("Unable to convert request body: Unexpected body type: " + typeof u);
      }(i.data);
      a.body = h, l = Pi(l, c);
    }
    return i.signal && (a.signal = i.signal), i.withCredentials && (a.credentials = "include"), a.headers = l, a;
  }(r)), n);
}
var rc = ye(285);
const _n = (n) => {
  if (typeof n != "string") throw new TypeError("invalid pattern");
  if (n.length > 65536) throw new TypeError("pattern is too long");
}, nc = { "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", !0], "[:alpha:]": ["\\p{L}\\p{Nl}", !0], "[:ascii:]": ["\\x00-\\x7f", !1], "[:blank:]": ["\\p{Zs}\\t", !0], "[:cntrl:]": ["\\p{Cc}", !0], "[:digit:]": ["\\p{Nd}", !0], "[:graph:]": ["\\p{Z}\\p{C}", !0, !0], "[:lower:]": ["\\p{Ll}", !0], "[:print:]": ["\\p{C}", !0], "[:punct:]": ["\\p{P}", !0], "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", !0], "[:upper:]": ["\\p{Lu}", !0], "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", !0], "[:xdigit:]": ["A-Fa-f0-9", !1] }, jr = (n) => n.replace(/[[\]\\-]/g, "\\$&"), Xo = (n) => n.join(""), ic = (n, e) => {
  const r = e;
  if (n.charAt(r) !== "[") throw new Error("not in a brace expression");
  const i = [], l = [];
  let a = r + 1, h = !1, c = !1, u = !1, o = !1, s = r, g = "";
  e: for (; a < n.length; ) {
    const v = n.charAt(a);
    if (v !== "!" && v !== "^" || a !== r + 1) {
      if (v === "]" && h && !u) {
        s = a + 1;
        break;
      }
      if (h = !0, v !== "\\" || u) {
        if (v === "[" && !u) {
          for (const [_, [T, E, I]] of Object.entries(nc)) if (n.startsWith(_, a)) {
            if (g) return ["$.", !1, n.length - r, !0];
            a += _.length, I ? l.push(T) : i.push(T), c = c || E;
            continue e;
          }
        }
        u = !1, g ? (v > g ? i.push(jr(g) + "-" + jr(v)) : v === g && i.push(jr(v)), g = "", a++) : n.startsWith("-]", a + 1) ? (i.push(jr(v + "-")), a += 2) : n.startsWith("-", a + 1) ? (g = v, a += 2) : (i.push(jr(v)), a++);
      } else u = !0, a++;
    } else o = !0, a++;
  }
  if (s < a) return ["", !1, 0, !1];
  if (!i.length && !l.length) return ["$.", !1, n.length - r, !0];
  if (l.length === 0 && i.length === 1 && /^\\?.$/.test(i[0]) && !o)
    return [(d = i[0].length === 2 ? i[0].slice(-1) : i[0], d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")), !1, s - r, !1];
  var d;
  const m = "[" + (o ? "^" : "") + Xo(i) + "]", y = "[" + (o ? "" : "^") + Xo(l) + "]";
  return [i.length && l.length ? "(" + m + "|" + y + ")" : i.length ? m : y, c, s - r, !0];
}, zr = function(n) {
  let { windowsPathsNoEscape: e = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return e ? n.replace(/\[([^\/\\])\]/g, "$1") : n.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
}, oc = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), zo = (n) => oc.has(n), Yn = "(?!\\.)", sc = /* @__PURE__ */ new Set(["[", "."]), ac = /* @__PURE__ */ new Set(["..", "."]), uc = new Set("().*{}+?[]^$\\!"), Zi = "[^/]", Ho = Zi + "*?", Yo = Zi + "+?";
var Re, Pe, Gt, ve, Oe, rr, hr, nr, Pt, pr, en, dr, _a, ir, wn, Fi, Oa;
const ze = class ze {
  constructor(e, r) {
    rt(this, dr);
    ge(this, "type");
    rt(this, Re);
    rt(this, Pe);
    rt(this, Gt, !1);
    rt(this, ve, []);
    rt(this, Oe);
    rt(this, rr);
    rt(this, hr);
    rt(this, nr, !1);
    rt(this, Pt);
    rt(this, pr);
    rt(this, en, !1);
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.type = e, e && Te(this, Pe, !0), Te(this, Oe, r), Te(this, Re, z(this, Oe) ? z(z(this, Oe), Re) : this), Te(this, Pt, z(this, Re) === this ? i : z(z(this, Re), Pt)), Te(this, hr, z(this, Re) === this ? [] : z(z(this, Re), hr)), e !== "!" || z(z(this, Re), nr) || z(this, hr).push(this), Te(this, rr, z(this, Oe) ? z(z(this, Oe), ve).length : 0);
  }
  get hasMagic() {
    if (z(this, Pe) !== void 0) return z(this, Pe);
    for (const e of z(this, ve)) if (typeof e != "string" && (e.type || e.hasMagic)) return Te(this, Pe, !0);
    return z(this, Pe);
  }
  toString() {
    return z(this, pr) !== void 0 ? z(this, pr) : this.type ? Te(this, pr, this.type + "(" + z(this, ve).map((e) => String(e)).join("|") + ")") : Te(this, pr, z(this, ve).map((e) => String(e)).join(""));
  }
  push() {
    for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
    for (const l of r) if (l !== "") {
      if (typeof l != "string" && !(l instanceof ze && z(l, Oe) === this)) throw new Error("invalid part: " + l);
      z(this, ve).push(l);
    }
  }
  toJSON() {
    var r;
    const e = this.type === null ? z(this, ve).slice().map((i) => typeof i == "string" ? i : i.toJSON()) : [this.type, ...z(this, ve).map((i) => i.toJSON())];
    return this.isStart() && !this.type && e.unshift([]), this.isEnd() && (this === z(this, Re) || z(z(this, Re), nr) && ((r = z(this, Oe)) == null ? void 0 : r.type) === "!") && e.push({}), e;
  }
  isStart() {
    var r;
    if (z(this, Re) === this) return !0;
    if (!((r = z(this, Oe)) != null && r.isStart())) return !1;
    if (z(this, rr) === 0) return !0;
    const e = z(this, Oe);
    for (let i = 0; i < z(this, rr); i++) {
      const l = z(e, ve)[i];
      if (!(l instanceof ze && l.type === "!")) return !1;
    }
    return !0;
  }
  isEnd() {
    var r, i, l;
    if (z(this, Re) === this || ((r = z(this, Oe)) == null ? void 0 : r.type) === "!") return !0;
    if (!((i = z(this, Oe)) != null && i.isEnd())) return !1;
    if (!this.type) return (l = z(this, Oe)) == null ? void 0 : l.isEnd();
    const e = z(this, Oe) ? z(z(this, Oe), ve).length : 0;
    return z(this, rr) === e - 1;
  }
  copyIn(e) {
    typeof e == "string" ? this.push(e) : this.push(e.clone(this));
  }
  clone(e) {
    const r = new ze(this.type, e);
    for (const i of z(this, ve)) r.copyIn(i);
    return r;
  }
  static fromGlob(e) {
    var l;
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = new ze(null, void 0, r);
    return Kt(l = ze, ir, wn).call(l, e, i, 0, r), i;
  }
  toMMPattern() {
    if (this !== z(this, Re)) return z(this, Re).toMMPattern();
    const e = this.toString(), [r, i, l, a] = this.toRegExpSource();
    if (!(l || z(this, Pe) || z(this, Pt).nocase && !z(this, Pt).nocaseMagicOnly && e.toUpperCase() !== e.toLowerCase())) return i;
    const h = (z(this, Pt).nocase ? "i" : "") + (a ? "u" : "");
    return Object.assign(new RegExp(`^${r}$`, h), { _src: r, _glob: e });
  }
  get options() {
    return z(this, Pt);
  }
  toRegExpSource(e) {
    var u;
    const r = e ?? !!z(this, Pt).dot;
    if (z(this, Re) === this && Kt(this, dr, _a).call(this), !this.type) {
      const o = this.isStart() && this.isEnd(), s = z(this, ve).map((m) => {
        var E;
        const [y, v, _, T] = typeof m == "string" ? Kt(E = ze, ir, Oa).call(E, m, z(this, Pe), o) : m.toRegExpSource(e);
        return Te(this, Pe, z(this, Pe) || _), Te(this, Gt, z(this, Gt) || T), y;
      }).join("");
      let g = "";
      if (this.isStart() && typeof z(this, ve)[0] == "string" && (z(this, ve).length !== 1 || !ac.has(z(this, ve)[0]))) {
        const m = sc, y = r && m.has(s.charAt(0)) || s.startsWith("\\.") && m.has(s.charAt(2)) || s.startsWith("\\.\\.") && m.has(s.charAt(4)), v = !r && !e && m.has(s.charAt(0));
        g = y ? "(?!(?:^|/)\\.\\.?(?:$|/))" : v ? Yn : "";
      }
      let d = "";
      return this.isEnd() && z(z(this, Re), nr) && ((u = z(this, Oe)) == null ? void 0 : u.type) === "!" && (d = "(?:$|\\/)"), [g + s + d, zr(s), Te(this, Pe, !!z(this, Pe)), z(this, Gt)];
    }
    const i = this.type === "*" || this.type === "+", l = this.type === "!" ? "(?:(?!(?:" : "(?:";
    let a = Kt(this, dr, Fi).call(this, r);
    if (this.isStart() && this.isEnd() && !a && this.type !== "!") {
      const o = this.toString();
      return Te(this, ve, [o]), this.type = null, Te(this, Pe, void 0), [o, zr(this.toString()), !1, !1];
    }
    let h = !i || e || r ? "" : Kt(this, dr, Fi).call(this, !0);
    h === a && (h = ""), h && (a = `(?:${a})(?:${h})*?`);
    let c = "";
    return c = this.type === "!" && z(this, en) ? (this.isStart() && !r ? Yn : "") + Yo : l + a + (this.type === "!" ? "))" + (!this.isStart() || r || e ? "" : Yn) + Ho + ")" : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && h ? ")" : this.type === "*" && h ? ")?" : `)${this.type}`), [c, zr(a), Te(this, Pe, !!z(this, Pe)), z(this, Gt)];
  }
};
Re = new WeakMap(), Pe = new WeakMap(), Gt = new WeakMap(), ve = new WeakMap(), Oe = new WeakMap(), rr = new WeakMap(), hr = new WeakMap(), nr = new WeakMap(), Pt = new WeakMap(), pr = new WeakMap(), en = new WeakMap(), dr = new WeakSet(), _a = function() {
  if (this !== z(this, Re)) throw new Error("should only call on root");
  if (z(this, nr)) return this;
  let e;
  for (this.toString(), Te(this, nr, !0); e = z(this, hr).pop(); ) {
    if (e.type !== "!") continue;
    let r = e, i = z(r, Oe);
    for (; i; ) {
      for (let l = z(r, rr) + 1; !i.type && l < z(i, ve).length; l++) for (const a of z(e, ve)) {
        if (typeof a == "string") throw new Error("string part in extglob AST??");
        a.copyIn(z(i, ve)[l]);
      }
      r = i, i = z(r, Oe);
    }
  }
  return this;
}, ir = new WeakSet(), wn = function(e, r, i, l) {
  var m, y;
  let a = !1, h = !1, c = -1, u = !1;
  if (r.type === null) {
    let v = i, _ = "";
    for (; v < e.length; ) {
      const T = e.charAt(v++);
      if (a || T === "\\") a = !a, _ += T;
      else if (h) v === c + 1 ? T !== "^" && T !== "!" || (u = !0) : T !== "]" || v === c + 2 && u || (h = !1), _ += T;
      else if (T !== "[") if (l.noext || !zo(T) || e.charAt(v) !== "(") _ += T;
      else {
        r.push(_), _ = "";
        const E = new ze(T, r);
        v = Kt(m = ze, ir, wn).call(m, e, E, v, l), r.push(E);
      }
      else h = !0, c = v, u = !1, _ += T;
    }
    return r.push(_), v;
  }
  let o = i + 1, s = new ze(null, r);
  const g = [];
  let d = "";
  for (; o < e.length; ) {
    const v = e.charAt(o++);
    if (a || v === "\\") a = !a, d += v;
    else if (h) o === c + 1 ? v !== "^" && v !== "!" || (u = !0) : v !== "]" || o === c + 2 && u || (h = !1), d += v;
    else if (v !== "[") if (zo(v) && e.charAt(o) === "(") {
      s.push(d), d = "";
      const _ = new ze(v, s);
      s.push(_), o = Kt(y = ze, ir, wn).call(y, e, _, o, l);
    } else if (v !== "|") {
      if (v === ")") return d === "" && z(r, ve).length === 0 && Te(r, en, !0), s.push(d), d = "", r.push(...g, s), o;
      d += v;
    } else s.push(d), d = "", g.push(s), s = new ze(null, r);
    else h = !0, c = o, u = !1, d += v;
  }
  return r.type = null, Te(r, Pe, void 0), Te(r, ve, [e.substring(i - 1)]), o;
}, Fi = function(e) {
  return z(this, ve).map((r) => {
    if (typeof r == "string") throw new Error("string type in extglob ast??");
    const [i, l, a, h] = r.toRegExpSource(e);
    return Te(this, Gt, z(this, Gt) || h), i;
  }).filter((r) => !(this.isStart() && this.isEnd() && !r)).join("|");
}, Oa = function(e, r) {
  let i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], l = !1, a = "", h = !1;
  for (let c = 0; c < e.length; c++) {
    const u = e.charAt(c);
    if (l) l = !1, a += (uc.has(u) ? "\\" : "") + u;
    else if (u !== "\\") {
      if (u === "[") {
        const [o, s, g, d] = ic(e, c);
        if (g) {
          a += o, h = h || s, c += g - 1, r = r || d;
          continue;
        }
      }
      u !== "*" ? u !== "?" ? a += u.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : (a += Zi, r = !0) : (a += i && e === "*" ? Yo : Ho, r = !0);
    } else c === e.length - 1 ? a += "\\\\" : l = !0;
  }
  return [a, zr(e), !!r, h];
}, rt(ze, ir);
let On = ze;
const Ve = function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return _n(e), !(!r.nocomment && e.charAt(0) === "#") && new Rn(e, r).match(n);
}, lc = /^\*+([^+@!?\*\[\(]*)$/, cc = (n) => (e) => !e.startsWith(".") && e.endsWith(n), fc = (n) => (e) => e.endsWith(n), hc = (n) => (n = n.toLowerCase(), (e) => !e.startsWith(".") && e.toLowerCase().endsWith(n)), pc = (n) => (n = n.toLowerCase(), (e) => e.toLowerCase().endsWith(n)), dc = /^\*+\.\*+$/, gc = (n) => !n.startsWith(".") && n.includes("."), mc = (n) => n !== "." && n !== ".." && n.includes("."), yc = /^\.\*+$/, wc = (n) => n !== "." && n !== ".." && n.startsWith("."), Ec = /^\*+$/, vc = (n) => n.length !== 0 && !n.startsWith("."), bc = (n) => n.length !== 0 && n !== "." && n !== "..", Nc = /^\?+([^+@!?\*\[\(]*)?$/, Ac = (n) => {
  let [e, r = ""] = n;
  const i = Ra([e]);
  return r ? (r = r.toLowerCase(), (l) => i(l) && l.toLowerCase().endsWith(r)) : i;
}, Tc = (n) => {
  let [e, r = ""] = n;
  const i = xa([e]);
  return r ? (r = r.toLowerCase(), (l) => i(l) && l.toLowerCase().endsWith(r)) : i;
}, Ic = (n) => {
  let [e, r = ""] = n;
  const i = xa([e]);
  return r ? (l) => i(l) && l.endsWith(r) : i;
}, _c = (n) => {
  let [e, r = ""] = n;
  const i = Ra([e]);
  return r ? (l) => i(l) && l.endsWith(r) : i;
}, Ra = (n) => {
  let [e] = n;
  const r = e.length;
  return (i) => i.length === r && !i.startsWith(".");
}, xa = (n) => {
  let [e] = n;
  const r = e.length;
  return (i) => i.length === r && i !== "." && i !== "..";
}, Sa = typeof qe == "object" && qe ? typeof qe.env == "object" && qe.env && qe.env.__MINIMATCH_TESTING_PLATFORM__ || qe.platform : "posix";
Ve.sep = Sa === "win32" ? "\\" : "/";
const mt = Symbol("globstar **");
Ve.GLOBSTAR = mt, Ve.filter = function(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return (r) => Ve(r, n, e);
};
const dt = function(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Object.assign({}, n, e);
};
Ve.defaults = (n) => {
  if (!n || typeof n != "object" || !Object.keys(n).length) return Ve;
  const e = Ve;
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
    let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return e.match(r, i, dt(n, l));
  }, sep: e.sep, GLOBSTAR: mt });
};
const Ca = function(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return _n(n), e.nobrace || !/\{(?:(?!\{).)*\}/.test(n) ? [n] : rc(n);
};
Ve.braceExpand = Ca, Ve.makeRe = function(n) {
  return new Rn(n, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).makeRe();
}, Ve.match = function(n, e) {
  const r = new Rn(e, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {});
  return n = n.filter((i) => r.match(i)), r.options.nonull && !n.length && n.push(e), n;
};
const Zo = /[?*]|[+@!]\(.*?\)|\[|\]/;
class Rn {
  constructor(e) {
    ge(this, "options");
    ge(this, "set");
    ge(this, "pattern");
    ge(this, "windowsPathsNoEscape");
    ge(this, "nonegate");
    ge(this, "negate");
    ge(this, "comment");
    ge(this, "empty");
    ge(this, "preserveMultipleSlashes");
    ge(this, "partial");
    ge(this, "globSet");
    ge(this, "globParts");
    ge(this, "nocase");
    ge(this, "isWindows");
    ge(this, "platform");
    ge(this, "windowsNoMagicRoot");
    ge(this, "regexp");
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _n(e), r = r || {}, this.options = r, this.pattern = e, this.platform = r.platform || Sa, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!r.windowsPathsNoEscape || r.allowWindowsEscape === !1, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!r.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!r.nonegate, this.comment = !1, this.empty = !1, this.partial = !!r.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = r.windowsNoMagicRoot !== void 0 ? r.windowsNoMagicRoot : !(!this.isWindows || !this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
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
    let l = this.globParts.map((a, h, c) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        const u = !(a[0] !== "" || a[1] !== "" || a[2] !== "?" && Zo.test(a[2]) || Zo.test(a[3])), o = /^[a-z]:/i.test(a[0]);
        if (u) return [...a.slice(0, 4), ...a.slice(4).map((s) => this.parse(s))];
        if (o) return [a[0], ...a.slice(1).map((s) => this.parse(s))];
      }
      return a.map((u) => this.parse(u));
    });
    if (this.debug(this.pattern, l), this.set = l.filter((a) => a.indexOf(!1) === -1), this.isWindows) for (let a = 0; a < this.set.length; a++) {
      const h = this.set[a];
      h[0] === "" && h[1] === "" && this.globParts[a][2] === "?" && typeof h[3] == "string" && /^[a-z]:$/i.test(h[3]) && (h[2] = "?");
    }
    this.debug(this.pattern, this.set);
  }
  preprocess(e) {
    if (this.options.noglobstar) for (let i = 0; i < e.length; i++) for (let l = 0; l < e[i].length; l++) e[i][l] === "**" && (e[i][l] = "*");
    const { optimizationLevel: r = 1 } = this.options;
    return r >= 2 ? (e = this.firstPhasePreProcess(e), e = this.secondPhasePreProcess(e)) : e = r >= 1 ? this.levelOneOptimize(e) : this.adjascentGlobstarOptimize(e), e;
  }
  adjascentGlobstarOptimize(e) {
    return e.map((r) => {
      let i = -1;
      for (; (i = r.indexOf("**", i + 1)) !== -1; ) {
        let l = i;
        for (; r[l + 1] === "**"; ) l++;
        l !== i && r.splice(i, l - i);
      }
      return r;
    });
  }
  levelOneOptimize(e) {
    return e.map((r) => (r = r.reduce((i, l) => {
      const a = i[i.length - 1];
      return l === "**" && a === "**" ? i : l === ".." && a && a !== ".." && a !== "." && a !== "**" ? (i.pop(), i) : (i.push(l), i);
    }, [])).length === 0 ? [""] : r);
  }
  levelTwoFileOptimize(e) {
    Array.isArray(e) || (e = this.slashSplit(e));
    let r = !1;
    do {
      if (r = !1, !this.preserveMultipleSlashes) {
        for (let l = 1; l < e.length - 1; l++) {
          const a = e[l];
          l === 1 && a === "" && e[0] === "" || a !== "." && a !== "" || (r = !0, e.splice(l, 1), l--);
        }
        e[0] !== "." || e.length !== 2 || e[1] !== "." && e[1] !== "" || (r = !0, e.pop());
      }
      let i = 0;
      for (; (i = e.indexOf("..", i + 1)) !== -1; ) {
        const l = e[i - 1];
        l && l !== "." && l !== ".." && l !== "**" && (r = !0, e.splice(i - 1, 2), i -= 2);
      }
    } while (r);
    return e.length === 0 ? [""] : e;
  }
  firstPhasePreProcess(e) {
    let r = !1;
    do {
      r = !1;
      for (let i of e) {
        let l = -1;
        for (; (l = i.indexOf("**", l + 1)) !== -1; ) {
          let h = l;
          for (; i[h + 1] === "**"; ) h++;
          h > l && i.splice(l + 1, h - l);
          let c = i[l + 1];
          const u = i[l + 2], o = i[l + 3];
          if (c !== ".." || !u || u === "." || u === ".." || !o || o === "." || o === "..") continue;
          r = !0, i.splice(l, 1);
          const s = i.slice(0);
          s[l] = "**", e.push(s), l--;
        }
        if (!this.preserveMultipleSlashes) {
          for (let h = 1; h < i.length - 1; h++) {
            const c = i[h];
            h === 1 && c === "" && i[0] === "" || c !== "." && c !== "" || (r = !0, i.splice(h, 1), h--);
          }
          i[0] !== "." || i.length !== 2 || i[1] !== "." && i[1] !== "" || (r = !0, i.pop());
        }
        let a = 0;
        for (; (a = i.indexOf("..", a + 1)) !== -1; ) {
          const h = i[a - 1];
          if (h && h !== "." && h !== ".." && h !== "**") {
            r = !0;
            const c = a === 1 && i[a + 1] === "**" ? ["."] : [];
            i.splice(a - 1, 2, ...c), i.length === 0 && i.push(""), a -= 2;
          }
        }
      }
    } while (r);
    return e;
  }
  secondPhasePreProcess(e) {
    for (let r = 0; r < e.length - 1; r++) for (let i = r + 1; i < e.length; i++) {
      const l = this.partsMatch(e[r], e[i], !this.preserveMultipleSlashes);
      if (l) {
        e[r] = [], e[i] = l;
        break;
      }
    }
    return e.filter((r) => r.length);
  }
  partsMatch(e, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], l = 0, a = 0, h = [], c = "";
    for (; l < e.length && a < r.length; ) if (e[l] === r[a]) h.push(c === "b" ? r[a] : e[l]), l++, a++;
    else if (i && e[l] === "**" && r[a] === e[l + 1]) h.push(e[l]), l++;
    else if (i && r[a] === "**" && e[l] === r[a + 1]) h.push(r[a]), a++;
    else if (e[l] !== "*" || !r[a] || !this.options.dot && r[a].startsWith(".") || r[a] === "**") {
      if (r[a] !== "*" || !e[l] || !this.options.dot && e[l].startsWith(".") || e[l] === "**" || c === "a") return !1;
      c = "b", h.push(r[a]), l++, a++;
    } else {
      if (c === "b") return !1;
      c = "a", h.push(e[l]), l++, a++;
    }
    return e.length === r.length && h;
  }
  parseNegate() {
    if (this.nonegate) return;
    const e = this.pattern;
    let r = !1, i = 0;
    for (let l = 0; l < e.length && e.charAt(l) === "!"; l++) r = !r, i++;
    i && (this.pattern = e.slice(i)), this.negate = r;
  }
  matchOne(e, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    const l = this.options;
    if (this.isWindows) {
      const v = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]), _ = !v && e[0] === "" && e[1] === "" && e[2] === "?" && /^[a-z]:$/i.test(e[3]), T = typeof r[0] == "string" && /^[a-z]:$/i.test(r[0]), E = _ ? 3 : v ? 0 : void 0, I = !T && r[0] === "" && r[1] === "" && r[2] === "?" && typeof r[3] == "string" && /^[a-z]:$/i.test(r[3]) ? 3 : T ? 0 : void 0;
      if (typeof E == "number" && typeof I == "number") {
        const [S, A] = [e[E], r[I]];
        S.toLowerCase() === A.toLowerCase() && (r[I] = S, I > E ? r = r.slice(I) : E > I && (e = e.slice(E)));
      }
    }
    const { optimizationLevel: a = 1 } = this.options;
    a >= 2 && (e = this.levelTwoFileOptimize(e)), this.debug("matchOne", this, { file: e, pattern: r }), this.debug("matchOne", e.length, r.length);
    for (var h = 0, c = 0, u = e.length, o = r.length; h < u && c < o; h++, c++) {
      this.debug("matchOne loop");
      var s = r[c], g = e[h];
      if (this.debug(r, s, g), s === !1) return !1;
      if (s === mt) {
        this.debug("GLOBSTAR", [r, s, g]);
        var d = h, m = c + 1;
        if (m === o) {
          for (this.debug("** at the end"); h < u; h++) if (e[h] === "." || e[h] === ".." || !l.dot && e[h].charAt(0) === ".") return !1;
          return !0;
        }
        for (; d < u; ) {
          var y = e[d];
          if (this.debug(`
globstar while`, e, d, r, m, y), this.matchOne(e.slice(d), r.slice(m), i)) return this.debug("globstar found match!", d, u, y), !0;
          if (y === "." || y === ".." || !l.dot && y.charAt(0) === ".") {
            this.debug("dot detected!", e, d, r, m);
            break;
          }
          this.debug("globstar swallow a segment, and continue"), d++;
        }
        return !(!i || (this.debug(`
>>> no match, partial?`, e, d, r, m), d !== u));
      }
      let v;
      if (typeof s == "string" ? (v = g === s, this.debug("string match", s, g, v)) : (v = s.test(g), this.debug("pattern match", s, g, v)), !v) return !1;
    }
    if (h === u && c === o) return !0;
    if (h === u) return i;
    if (c === o) return h === u - 1 && e[h] === "";
    throw new Error("wtf?");
  }
  braceExpand() {
    return Ca(this.pattern, this.options);
  }
  parse(e) {
    _n(e);
    const r = this.options;
    if (e === "**") return mt;
    if (e === "") return "";
    let i, l = null;
    (i = e.match(Ec)) ? l = r.dot ? bc : vc : (i = e.match(lc)) ? l = (r.nocase ? r.dot ? pc : hc : r.dot ? fc : cc)(i[1]) : (i = e.match(Nc)) ? l = (r.nocase ? r.dot ? Tc : Ac : r.dot ? Ic : _c)(i) : (i = e.match(dc)) ? l = r.dot ? mc : gc : (i = e.match(yc)) && (l = wc);
    const a = On.fromGlob(e, this.options).toMMPattern();
    return l && typeof a == "object" && Reflect.defineProperty(a, "test", { value: l }), a;
  }
  makeRe() {
    if (this.regexp || this.regexp === !1) return this.regexp;
    const e = this.set;
    if (!e.length) return this.regexp = !1, this.regexp;
    const r = this.options, i = r.noglobstar ? "[^/]*?" : r.dot ? "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?" : "(?:(?!(?:\\/|^)\\.).)*?", l = new Set(r.nocase ? ["i"] : []);
    let a = e.map((u) => {
      const o = u.map((s) => {
        if (s instanceof RegExp) for (const g of s.flags.split("")) l.add(g);
        return typeof s == "string" ? s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : s === mt ? mt : s._src;
      });
      return o.forEach((s, g) => {
        const d = o[g + 1], m = o[g - 1];
        s === mt && m !== mt && (m === void 0 ? d !== void 0 && d !== mt ? o[g + 1] = "(?:\\/|" + i + "\\/)?" + d : o[g] = i : d === void 0 ? o[g - 1] = m + "(?:\\/|" + i + ")?" : d !== mt && (o[g - 1] = m + "(?:\\/|\\/" + i + "\\/)" + d, o[g + 1] = mt));
      }), o.filter((s) => s !== mt).join("/");
    }).join("|");
    const [h, c] = e.length > 1 ? ["(?:", ")"] : ["", ""];
    a = "^" + h + a + c + "$", this.negate && (a = "^(?!" + a + ").+$");
    try {
      this.regexp = new RegExp(a, [...l].join(""));
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
    const l = this.slashSplit(e);
    this.debug(this.pattern, "split", l);
    const a = this.set;
    this.debug(this.pattern, "set", a);
    let h = l[l.length - 1];
    if (!h) for (let c = l.length - 2; !h && c >= 0; c--) h = l[c];
    for (let c = 0; c < a.length; c++) {
      const u = a[c];
      let o = l;
      if (i.matchBase && u.length === 1 && (o = [h]), this.matchOne(o, u, r)) return !!i.flipNegate || !this.negate;
    }
    return !i.flipNegate && this.negate;
  }
  static defaults(e) {
    return Ve.defaults(e).Minimatch;
  }
}
function Ji(n) {
  const e = new Error(`${arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""}Invalid response: ${n.status} ${n.statusText}`);
  return e.status = n.status, e.response = n, e;
}
function Ce(n, e) {
  const { status: r } = e;
  if (r === 401 && n.digest) return e;
  if (r >= 400) throw Ji(e);
  return e;
}
function wr(n, e) {
  return arguments.length > 2 && arguments[2] !== void 0 && arguments[2] ? { data: e, headers: n.headers ? Kl(n.headers) : {}, status: n.status, statusText: n.statusText } : e;
}
Ve.AST = On, Ve.Minimatch = Rn, Ve.escape = function(n) {
  let { windowsPathsNoEscape: e = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return e ? n.replace(/[?*()[\]]/g, "[$&]") : n.replace(/[?*()[\]\\]/g, "\\$&");
}, Ve.unescape = zr;
const Oc = (Jo = function(n, e, r) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const l = Se({ url: Ae(n.remoteURL, Ne(e)), method: "COPY", headers: { Destination: Ae(n.remoteURL, Ne(r)), Overwrite: i.overwrite === !1 ? "F" : "T", Depth: i.shallow ? "0" : "infinity" } }, n, i);
  return h = function(c) {
    Ce(n, c);
  }, (a = xe(l, n)) && a.then || (a = Promise.resolve(a)), h ? a.then(h) : a;
  var a, h;
}, function() {
  for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
  try {
    return Promise.resolve(Jo.apply(this, n));
  } catch (r) {
    return Promise.reject(r);
  }
});
var Jo, Ki = ye(635), Rc = ye(829), jt = ye.n(Rc), Or = function(n) {
  return n.Array = "array", n.Object = "object", n.Original = "original", n;
}(Or || {});
function ln(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Or.Original;
  const i = jt().get(n, e);
  return r === "array" && Array.isArray(i) === !1 ? [i] : r === "object" && Array.isArray(i) ? i[0] : i;
}
function rn(n) {
  return new Promise((e) => {
    e(function(r) {
      const { multistatus: i } = r;
      if (i === "") return { multistatus: { response: [] } };
      if (!i) throw new Error("Invalid response: No root multistatus found");
      const l = { multistatus: Array.isArray(i) ? i[0] : i };
      return jt().set(l, "multistatus.response", ln(l, "multistatus.response", Or.Array)), jt().set(l, "multistatus.response", jt().get(l, "multistatus.response").map((a) => function(h) {
        const c = Object.assign({}, h);
        return c.status ? jt().set(c, "status", ln(c, "status", Or.Object)) : (jt().set(c, "propstat", ln(c, "propstat", Or.Object)), jt().set(c, "propstat.prop", ln(c, "propstat.prop", Or.Object))), c;
      }(a))), l;
    }(new Ki.XMLParser({ removeNSPrefix: !0, numberParseOptions: { hex: !0, leadingZeros: !1 } }).parse(n)));
  });
}
function kn(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
  const { getlastmodified: i = null, getcontentlength: l = "0", resourcetype: a = null, getcontenttype: h = null, getetag: c = null } = n, u = a && typeof a == "object" && a.collection !== void 0 ? "directory" : "file", o = { filename: e, basename: Nn().basename(e), lastmod: i, size: parseInt(l, 10), type: u, etag: typeof c == "string" ? c.replace(/"/g, "") : null };
  return u === "file" && (o.mime = h && typeof h == "string" ? h.split(";")[0] : ""), r && (n.displayname !== void 0 && (n.displayname = String(n.displayname)), o.props = n), o;
}
function La(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], i = null;
  try {
    n.multistatus.response[0].propstat && (i = n.multistatus.response[0]);
  } catch {
  }
  if (!i) throw new Error("Failed getting item stat: bad response");
  const { propstat: { prop: l, status: a } } = i, [h, c, u] = a.split(" ", 3), o = parseInt(c, 10);
  if (o >= 400) {
    const s = new Error(`Invalid response: ${o} ${u}`);
    throw s.status = o, s;
  }
  return kn(l, Kr(e), r);
}
function Pa(n) {
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
function Zn(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const Qi = /* @__PURE__ */ function(n) {
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
  const { details: i = !1 } = r, l = Se({ url: Ae(n.remoteURL, Ne(e)), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, n, r);
  return Zn(xe(l, n), function(a) {
    return Ce(n, a), Zn(a.text(), function(h) {
      return Zn(rn(h), function(c) {
        const u = La(c, e, i);
        return wr(a, u, i);
      });
    });
  });
});
function $a(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const xc = Fa(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = function(a) {
    if (!a || a === "/") return [];
    let h = a;
    const c = [];
    do
      c.push(h), h = Nn().dirname(h);
    while (h && h !== "/");
    return c;
  }(Kr(e));
  i.sort((a, h) => a.length > h.length ? 1 : h.length > a.length ? -1 : 0);
  let l = !1;
  return function(a, h, c) {
    if (typeof a[Qo] == "function") {
      let _ = function(T) {
        try {
          for (; !(u = g.next()).done; ) if ((T = h(u.value)) && T.then) {
            if (!es(T)) return void T.then(_, s || (s = Ze.bind(null, o = new Rr(), 2)));
            T = T.v;
          }
          o ? Ze(o, 1, T) : o = T;
        } catch (E) {
          Ze(o || (o = new Rr()), 2, E);
        }
      };
      var v = _, u, o, s, g = a[Qo]();
      if (_(), g.return) {
        var d = function(T) {
          try {
            u.done || g.return();
          } catch {
          }
          return T;
        };
        if (o && o.then) return o.then(d, function(T) {
          throw d(T);
        });
        d();
      }
      return o;
    }
    if (!("length" in a)) throw new TypeError("Object is not iterable");
    for (var m = [], y = 0; y < a.length; y++) m.push(a[y]);
    return function(_, T, E) {
      var I, S, A = -1;
      return function x(C) {
        try {
          for (; ++A < _.length && (!E || !E()); ) if ((C = T(A)) && C.then) {
            if (!es(C)) return void C.then(x, S || (S = Ze.bind(null, I = new Rr(), 2)));
            C = C.v;
          }
          I ? Ze(I, 1, C) : I = C;
        } catch (P) {
          Ze(I || (I = new Rr()), 2, P);
        }
      }(), I;
    }(m, function(_) {
      return h(m[_]);
    }, c);
  }(i, function(a) {
    return h = function() {
      return function(u, o) {
        try {
          var s = $a(Qi(n, a), function(g) {
            if (g.type !== "directory") throw new Error(`Path includes a file: ${e}`);
          });
        } catch (g) {
          return o(g);
        }
        return s && s.then ? s.then(void 0, o) : s;
      }(0, function(u) {
        const o = u;
        return function() {
          if (o.status === 404) return l = !0, Ko(ki(n, a, { ...r, recursive: !1 }));
          throw u;
        }();
      });
    }, (c = function() {
      if (l) return Ko(ki(n, a, { ...r, recursive: !1 }));
    }()) && c.then ? c.then(h) : h();
    var h, c;
  }, function() {
    return !1;
  });
});
function Fa(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
function Sc() {
}
function Ko(n, e) {
  return n && n.then ? n.then(Sc) : Promise.resolve();
}
const Qo = typeof Symbol < "u" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
function Ze(n, e, r) {
  if (!n.s) {
    if (r instanceof Rr) {
      if (!r.s) return void (r.o = Ze.bind(null, n, e));
      1 & e && (e = r.s), r = r.v;
    }
    if (r && r.then) return void r.then(Ze.bind(null, n, e), Ze.bind(null, n, 2));
    n.s = e, n.v = r;
    const i = n.o;
    i && i(n);
  }
}
const Rr = function() {
  function n() {
  }
  return n.prototype.then = function(e, r) {
    const i = new n(), l = this.s;
    if (l) {
      const a = 1 & l ? e : r;
      if (a) {
        try {
          Ze(i, 1, a(this.v));
        } catch (h) {
          Ze(i, 2, h);
        }
        return i;
      }
      return this;
    }
    return this.o = function(a) {
      try {
        const h = a.v;
        1 & a.s ? Ze(i, 1, e ? e(h) : h) : r ? Ze(i, 1, r(h)) : Ze(i, 2, h);
      } catch (h) {
        Ze(i, 2, h);
      }
    }, i;
  }, n;
}();
function es(n) {
  return n instanceof Rr && 1 & n.s;
}
const ki = Fa(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (r.recursive === !0) return xc(n, e, r);
  const i = Se({ url: Ae(n.remoteURL, (l = Ne(e), l.endsWith("/") ? l : l + "/")), method: "MKCOL" }, n, r);
  var l;
  return $a(xe(i, n), function(a) {
    Ce(n, a);
  });
});
var Cc = ye(388), ts = ye.n(Cc);
const Lc = /* @__PURE__ */ function(n) {
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
    let c = `bytes=${r.range.start}-`;
    typeof r.range.end == "number" && (c = `${c}${r.range.end}`), i.Range = c;
  }
  const l = Se({ url: Ae(n.remoteURL, Ne(e)), method: "GET", headers: i }, n, r);
  return h = function(c) {
    if (Ce(n, c), i.Range && c.status !== 206) {
      const u = new Error(`Invalid response code for partial request: ${c.status}`);
      throw u.status = c.status, u;
    }
    return r.callback && setTimeout(() => {
      r.callback(c);
    }, 0), c.body;
  }, (a = xe(l, n)) && a.then || (a = Promise.resolve(a)), h ? a.then(h) : a;
  var a, h;
}), Pc = () => {
}, $c = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e, r) {
  r.url || (r.url = Ae(n.remoteURL, Ne(e)));
  const i = Se(r, n, {});
  return a = function(h) {
    return Ce(n, h), h;
  }, (l = xe(i, n)) && l.then || (l = Promise.resolve(l)), a ? l.then(a) : l;
  var l, a;
}), Fc = /* @__PURE__ */ function(n) {
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
  const i = Se({ url: Ae(n.remoteURL, Ne(e)), method: "DELETE" }, n, r);
  return a = function(h) {
    Ce(n, h);
  }, (l = xe(i, n)) && l.then || (l = Promise.resolve(l)), a ? l.then(a) : l;
  var l, a;
}), kc = /* @__PURE__ */ function(n) {
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
  return function(i, l) {
    try {
      var a = (h = Qi(n, e, r), c = function() {
        return !0;
      }, u ? c ? c(h) : h : (h && h.then || (h = Promise.resolve(h)), c ? h.then(c) : h));
    } catch (o) {
      return l(o);
    }
    var h, c, u;
    return a && a.then ? a.then(void 0, l) : a;
  }(0, function(i) {
    if (i.status === 404) return !1;
    throw i;
  });
});
function Jn(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const Mc = /* @__PURE__ */ function(n) {
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
  const i = Se({ url: Ae(n.remoteURL, Ne(e), "/"), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: r.deep ? "infinity" : "1" } }, n, r);
  return Jn(xe(i, n), function(l) {
    return Ce(n, l), Jn(l.text(), function(a) {
      if (!a) throw new Error("Failed parsing directory contents: Empty response");
      return Jn(rn(a), function(h) {
        const c = Do(e);
        let u = function(o, s, g) {
          let d = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], m = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
          const y = Nn().join(s, "/"), { multistatus: { response: v } } = o, _ = v.map((T) => {
            const E = function(S) {
              try {
                return S.replace(/^https?:\/\/[^\/]+/, "");
              } catch (A) {
                throw new Je(A, "Failed normalising HREF");
              }
            }(T.href), { propstat: { prop: I } } = T;
            return kn(I, y === "/" ? decodeURIComponent(Kr(E)) : Kr(Nn().relative(decodeURIComponent(y), decodeURIComponent(E))), d);
          });
          return m ? _ : _.filter((T) => T.basename && (T.type === "file" || T.filename !== g.replace(/\/$/, "")));
        }(h, Do(n.remoteBasePath || n.remotePath), c, r.details, r.includeSelf);
        return r.glob && (u = function(o, s) {
          return o.filter((g) => Ve(g.filename, s, { matchBase: !0 }));
        }(u, r.glob)), wr(l, u, r.details);
      });
    });
  });
});
function eo(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
const Uc = eo(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = Se({ url: Ae(n.remoteURL, Ne(e)), method: "GET", headers: { Accept: "text/plain" }, transformResponse: [jc] }, n, r);
  return xn(xe(i, n), function(l) {
    return Ce(n, l), xn(l.text(), function(a) {
      return wr(l, a, r.details);
    });
  });
});
function xn(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const Bc = eo(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = Se({ url: Ae(n.remoteURL, Ne(e)), method: "GET" }, n, r);
  return xn(xe(i, n), function(l) {
    let a;
    return Ce(n, l), function(h, c) {
      var u = h();
      return u && u.then ? u.then(c) : c();
    }(function() {
      return xn(l.arrayBuffer(), function(h) {
        a = h;
      });
    }, function() {
      return wr(l, a, r.details);
    });
  });
}), Dc = eo(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { format: i = "binary" } = r;
  if (i !== "binary" && i !== "text") throw new Je({ info: { code: Wt.InvalidOutputFormat } }, `Invalid output format: ${i}`);
  return i === "text" ? Uc(n, e, r) : Bc(n, e, r);
}), jc = (n) => n;
function Gc(n) {
  return new Ki.XMLBuilder({ attributeNamePrefix: "@_", format: !0, ignoreAttributes: !1, suppressEmptyNode: !0 }).build(ka({ lockinfo: { "@_xmlns:d": "DAV:", lockscope: { exclusive: {} }, locktype: { write: {} }, owner: { href: n } } }, "d"));
}
function ka(n, e) {
  const r = { ...n };
  for (const i in r) r.hasOwnProperty(i) && (r[i] && typeof r[i] == "object" && i.indexOf(":") === -1 ? (r[`${e}:${i}`] = ka(r[i], e), delete r[i]) : /^@_/.test(i) === !1 && (r[`${e}:${i}`] = r[i], delete r[i]));
  return r;
}
function Mi(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
function Ma(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
const qc = Ma(function(n, e, r) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const l = Se({ url: Ae(n.remoteURL, Ne(e)), method: "UNLOCK", headers: { "Lock-Token": r } }, n, i);
  return Mi(xe(l, n), function(a) {
    if (Ce(n, a), a.status !== 204 && a.status !== 200) throw Ji(a);
  });
}), Vc = Ma(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { refreshToken: i, timeout: l = Wc } = r, a = { Accept: "text/plain,application/xml", Timeout: l };
  i && (a.If = i);
  const h = Se({ url: Ae(n.remoteURL, Ne(e)), method: "LOCK", headers: a, data: Gc(n.contactHref) }, n, r);
  return Mi(xe(h, n), function(c) {
    return Ce(n, c), Mi(c.text(), function(u) {
      const o = (d = u, new Ki.XMLParser({ removeNSPrefix: !0, parseAttributeValue: !0, parseTagValue: !0 }).parse(d)), s = jt().get(o, "prop.lockdiscovery.activelock.locktoken.href"), g = jt().get(o, "prop.lockdiscovery.activelock.timeout");
      var d;
      if (!s) throw Ji(c, "No lock token received: ");
      return { token: s, serverTimeout: g };
    });
  });
}), Wc = "Infinite, Second-4100000000";
function Kn(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const Xc = /* @__PURE__ */ function(n) {
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
  const r = e.path || "/", i = Se({ url: Ae(n.remoteURL, r), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, n, e);
  return Kn(xe(i, n), function(l) {
    return Ce(n, l), Kn(l.text(), function(a) {
      return Kn(rn(a), function(h) {
        const c = function(u) {
          try {
            const [o] = u.multistatus.response, { propstat: { prop: { "quota-used-bytes": s, "quota-available-bytes": g } } } = o;
            return s !== void 0 && g !== void 0 ? { used: parseInt(String(s), 10), available: Pa(g) } : null;
          } catch {
          }
          return null;
        }(h);
        return wr(l, c, e.details);
      });
    });
  });
});
function Qn(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const zc = /* @__PURE__ */ function(n) {
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
  const { details: i = !1 } = r, l = Se({ url: Ae(n.remoteURL, Ne(e)), method: "SEARCH", headers: { Accept: "text/plain,application/xml", "Content-Type": n.headers["Content-Type"] || "application/xml; charset=utf-8" } }, n, r);
  return Qn(xe(l, n), function(a) {
    return Ce(n, a), Qn(a.text(), function(h) {
      return Qn(rn(h), function(c) {
        const u = function(o, s, g) {
          const d = { truncated: !1, results: [] };
          return d.truncated = o.multistatus.response.some((m) => {
            var y, v;
            return ((v = (m.status || ((y = m.propstat) == null ? void 0 : y.status)).split(" ", 3)) == null ? void 0 : v[1]) === "507" && m.href.replace(/\/$/, "").endsWith(Ne(s).replace(/\/$/, ""));
          }), o.multistatus.response.forEach((m) => {
            if (m.propstat === void 0) return;
            const y = m.href.split("/").map(decodeURIComponent).join("/");
            d.results.push(kn(m.propstat.prop, y, g));
          }), d;
        }(c, e, i);
        return wr(a, u, i);
      });
    });
  });
}), Hc = /* @__PURE__ */ function(n) {
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
  const l = Se({ url: Ae(n.remoteURL, Ne(e)), method: "MOVE", headers: { Destination: Ae(n.remoteURL, Ne(r)), Overwrite: i.overwrite === !1 ? "F" : "T" } }, n, i);
  return h = function(c) {
    Ce(n, c);
  }, (a = xe(l, n)) && a.then || (a = Promise.resolve(a)), h ? a.then(h) : a;
  var a, h;
});
var Yc = ye(172);
const Zc = /* @__PURE__ */ function(n) {
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
  const { contentLength: l = !0, overwrite: a = !0 } = i, h = { "Content-Type": "application/octet-stream" };
  l === !1 || (h["Content-Length"] = typeof l == "number" ? `${l}` : `${function(s) {
    if (Aa(s)) return s.byteLength;
    if (Ta(s)) return s.length;
    if (typeof s == "string") return (0, Yc.d)(s);
    throw new Je({ info: { code: Wt.DataTypeNoLength } }, "Cannot calculate data length: Invalid type");
  }(r)}`), a || (h["If-None-Match"] = "*");
  const c = Se({ url: Ae(n.remoteURL, Ne(e)), method: "PUT", headers: h, data: r }, n, i);
  return o = function(s) {
    try {
      Ce(n, s);
    } catch (g) {
      const d = g;
      if (d.status !== 412 || a) throw d;
      return !1;
    }
    return !0;
  }, (u = xe(c, n)) && u.then || (u = Promise.resolve(u)), o ? u.then(o) : u;
  var u, o;
}), Ua = /* @__PURE__ */ function(n) {
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
  const i = Se({ url: Ae(n.remoteURL, Ne(e)), method: "OPTIONS" }, n, r);
  return a = function(h) {
    try {
      Ce(n, h);
    } catch (c) {
      throw c;
    }
    return { compliance: (h.headers.get("DAV") ?? "").split(",").map((c) => c.trim()), server: h.headers.get("Server") ?? "" };
  }, (l = xe(i, n)) && l.then || (l = Promise.resolve(l)), a ? l.then(a) : l;
  var l, a;
});
function Zr(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const Jc = to(function(n, e, r, i, l) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  if (r > i || r < 0) throw new Je({ info: { code: Wt.InvalidUpdateRange } }, `Invalid update range ${r} for partial update`);
  const h = { "Content-Type": "application/octet-stream", "Content-Length": "" + (i - r + 1), "Content-Range": `bytes ${r}-${i}/*` }, c = Se({ url: Ae(n.remoteURL, Ne(e)), method: "PUT", headers: h, data: l }, n, a);
  return Zr(xe(c, n), function(u) {
    Ce(n, u);
  });
});
function rs(n, e) {
  var r = n();
  return r && r.then ? r.then(e) : e(r);
}
const Kc = to(function(n, e, r, i, l) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  if (r > i || r < 0) throw new Je({ info: { code: Wt.InvalidUpdateRange } }, `Invalid update range ${r} for partial update`);
  const h = { "Content-Type": "application/x-sabredav-partialupdate", "Content-Length": "" + (i - r + 1), "X-Update-Range": `bytes=${r}-${i}` }, c = Se({ url: Ae(n.remoteURL, Ne(e)), method: "PATCH", headers: h, data: l }, n, a);
  return Zr(xe(c, n), function(u) {
    Ce(n, u);
  });
});
function to(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
const Qc = to(function(n, e, r, i, l) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  return Zr(Ua(n, e, a), function(h) {
    let c = !1;
    return rs(function() {
      if (h.compliance.includes("sabredav-partialupdate")) return Zr(Kc(n, e, r, i, l, a), function(u) {
        return c = !0, u;
      });
    }, function(u) {
      let o = !1;
      return c ? u : rs(function() {
        if (h.server.includes("Apache") && h.compliance.includes("<http://apache.org/dav/propset/fs/1>")) return Zr(Jc(n, e, r, i, l, a), function(s) {
          return o = !0, s;
        });
      }, function(s) {
        if (o) return s;
        throw new Je({ info: { code: Wt.NotSupported } }, "Not supported");
      });
    });
  });
}), ef = "https://github.com/perry-mitchell/webdav-client/blob/master/LOCK_CONTACT.md";
function tf(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { authType: r = null, remoteBasePath: i, contactHref: l = ef, ha1: a, headers: h = {}, httpAgent: c, httpsAgent: u, password: o, token: s, username: g, withCredentials: d } = e;
  let m = r;
  m || (m = g || o ? Ye.Password : Ye.None);
  const y = { authType: m, remoteBasePath: i, contactHref: l, ha1: a, headers: Object.assign({}, h), httpAgent: c, httpsAgent: u, password: o, remotePath: ql(n), remoteURL: n, token: s, username: g, withCredentials: d };
  return va(y, g, o, s, a), { copyFile: (v, _, T) => Oc(y, v, _, T), createDirectory: (v, _) => ki(y, v, _), createReadStream: (v, _) => function(T, E) {
    let I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const S = new (ts()).PassThrough();
    return Lc(T, E, I).then((A) => {
      A.pipe(S);
    }).catch((A) => {
      S.emit("error", A);
    }), S;
  }(y, v, _), createWriteStream: (v, _, T) => function(E, I) {
    let S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, A = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Pc;
    const x = new (ts()).PassThrough(), C = {};
    S.overwrite === !1 && (C["If-None-Match"] = "*");
    const P = Se({ url: Ae(E.remoteURL, Ne(I)), method: "PUT", headers: C, data: x, maxRedirects: 0 }, E, S);
    return xe(P, E).then((F) => Ce(E, F)).then((F) => {
      setTimeout(() => {
        A(F);
      }, 0);
    }).catch((F) => {
      x.emit("error", F);
    }), x;
  }(y, v, _, T), customRequest: (v, _) => $c(y, v, _), deleteFile: (v, _) => Fc(y, v, _), exists: (v, _) => kc(y, v, _), getDirectoryContents: (v, _) => Mc(y, v, _), getFileContents: (v, _) => Dc(y, v, _), getFileDownloadLink: (v) => function(_, T) {
    let E = Ae(_.remoteURL, Ne(T));
    const I = /^https:/i.test(E) ? "https" : "http";
    switch (_.authType) {
      case Ye.None:
        break;
      case Ye.Password: {
        const S = Go(_.headers.Authorization.replace(/^Basic /i, "").trim());
        E = E.replace(/^https?:\/\//, `${I}://${S}@`);
        break;
      }
      default:
        throw new Je({ info: { code: Wt.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${_.authType}`);
    }
    return E;
  }(y, v), getFileUploadLink: (v) => function(_, T) {
    let E = `${Ae(_.remoteURL, Ne(T))}?Content-Type=application/octet-stream`;
    const I = /^https:/i.test(E) ? "https" : "http";
    switch (_.authType) {
      case Ye.None:
        break;
      case Ye.Password: {
        const S = Go(_.headers.Authorization.replace(/^Basic /i, "").trim());
        E = E.replace(/^https?:\/\//, `${I}://${S}@`);
        break;
      }
      default:
        throw new Je({ info: { code: Wt.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${_.authType}`);
    }
    return E;
  }(y, v), getHeaders: () => Object.assign({}, y.headers), getQuota: (v) => Xc(y, v), lock: (v, _) => Vc(y, v, _), moveFile: (v, _, T) => Hc(y, v, _, T), putFileContents: (v, _, T) => Zc(y, v, _, T), partialUpdateFileContents: (v, _, T, E, I) => Qc(y, v, _, T, E, I), getDAVCompliance: (v) => Ua(y, v), search: (v, _) => zc(y, v, _), setHeaders: (v) => {
    y.headers = Object.assign({}, v);
  }, stat: (v, _) => Qi(y, v, _), unlock: (v, _, T) => qc(y, v, _, T) };
}
vt.hT;
vt.O4;
vt.Kd;
vt.YK;
var rf = vt.UU, nf = vt.Gu;
vt.ky;
vt.h4;
vt.ch;
vt.hq;
vt.i5;
function Ba(n, e, r) {
  const i = document.querySelector(`#initial-state-${n}-${e}`);
  if (i === null)
    return r;
  try {
    return JSON.parse(atob(i.value));
  } catch {
    throw new Error(`Could not parse initial state ${e} of ${n}`);
  }
}
function ro() {
  return Ba("files_sharing", "isPublic", null) ?? document.querySelector(
    'input#isPublic[type="hidden"][name="isPublic"][value="1"]'
  ) !== null;
}
function of() {
  var n;
  return Ba("files_sharing", "sharingToken", null) ?? ((n = document.querySelector('input#sharingToken[type="hidden"]')) == null ? void 0 : n.value) ?? null;
}
const Qr = Sl().setApp("@nextcloud/files").detectUser().build();
var Ue = /* @__PURE__ */ ((n) => (n[n.NONE = 0] = "NONE", n[n.CREATE = 4] = "CREATE", n[n.READ = 1] = "READ", n[n.UPDATE = 2] = "UPDATE", n[n.DELETE = 8] = "DELETE", n[n.SHARE = 16] = "SHARE", n[n.ALL = 31] = "ALL", n))(Ue || {}), no = /* @__PURE__ */ ((n) => (n.Folder = "folder", n.File = "file", n))(no || {});
const Da = function(n, e) {
  return n.match(e) !== null;
}, ns = (n, e) => {
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
  if ("permissions" in n && n.permissions !== void 0 && !(typeof n.permissions == "number" && n.permissions >= Ue.NONE && n.permissions <= Ue.ALL))
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
  if (n.root && Da(n.source, e)) {
    const r = n.source.match(e)[0];
    if (!n.source.includes(ur.join(r, n.root)))
      throw new Error("The root must be relative to the service. e.g /files/emma");
  }
  if (n.status && !Object.values(io).includes(n.status))
    throw new Error("Status must be a valid NodeStatus");
};
var io = /* @__PURE__ */ ((n) => (n.NEW = "new", n.FAILED = "failed", n.LOADING = "loading", n.LOCKED = "locked", n))(io || {});
class Mn {
  constructor(e, r) {
    ge(this, "_data");
    ge(this, "_attributes");
    ge(this, "_knownDavService", /(remote|public)\.php\/(web)?dav/i);
    ge(this, "readonlyAttributes", Object.entries(Object.getOwnPropertyDescriptors(Mn.prototype)).filter((e) => typeof e[1].get == "function" && e[0] !== "__proto__").map((e) => e[0]));
    ge(this, "handler", {
      set: (e, r, i) => this.readonlyAttributes.includes(r) ? !1 : Reflect.set(e, r, i),
      deleteProperty: (e, r) => this.readonlyAttributes.includes(r) ? !1 : Reflect.deleteProperty(e, r),
      // TODO: This is deprecated and only needed for files v3
      get: (e, r, i) => this.readonlyAttributes.includes(r) ? (Qr.warn(`Accessing "Node.attributes.${r}" is deprecated, access it directly on the Node instance.`), Reflect.get(this, r)) : Reflect.get(e, r, i)
    });
    var i;
    ns(e, r || this._knownDavService), this._data = {
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
    return e + $u(this.source.slice(e.length));
  }
  /**
   * Get this object name
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get basename() {
    return ur.basename(this.source);
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
    return ur.extname(this.source);
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
      const i = r.indexOf(this.root), l = this.root.replace(/\/$/, "");
      return ur.dirname(r.slice(i + l.length) || "/");
    }
    const e = new URL(this.source);
    return ur.dirname(e.pathname);
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
    return this.owner === null && !this.isDavResource ? Ue.READ : this._data.permissions !== void 0 ? this._data.permissions : Ue.NONE;
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
    return this.isDavResource ? this._data.owner : null;
  }
  /**
   * Is this a dav-related resource ?
   */
  get isDavResource() {
    return Da(this.source, this._knownDavService);
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
    return this._data.root ? this._data.root.replace(/^(.+)\/$/, "$1") : this.isDavResource && ur.dirname(this.source).split(this._knownDavService).pop() || null;
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
    this._data.status = e;
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
    ns({ ...this._data, source: e }, this._knownDavService);
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
    this.move(ur.dirname(this.source) + "/" + e);
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
      } catch (l) {
        if (l instanceof TypeError)
          continue;
        throw l;
      }
  }
}
class oo extends Mn {
  get type() {
    return no.File;
  }
  /**
   * Returns a clone of the file
   */
  clone() {
    return new oo(this.data);
  }
}
class so extends Mn {
  constructor(e) {
    super({
      ...e,
      mime: "httpd/unix-directory"
    });
  }
  get type() {
    return no.Folder;
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
    return new so(this.data);
  }
}
const sf = function(n = "") {
  let e = Ue.NONE;
  return n && ((n.includes("C") || n.includes("K")) && (e |= Ue.CREATE), n.includes("G") && (e |= Ue.READ), (n.includes("W") || n.includes("N") || n.includes("V")) && (e |= Ue.UPDATE), n.includes("D") && (e |= Ue.DELETE), n.includes("R") && (e |= Ue.SHARE)), e;
}, af = [
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
], uf = {
  d: "DAV:",
  nc: "http://nextcloud.org/ns",
  oc: "http://owncloud.org/ns",
  ocs: "http://open-collaboration-services.org/ns"
}, lf = function() {
  return typeof window._nc_dav_properties > "u" && (window._nc_dav_properties = [...af]), window._nc_dav_properties.map((n) => `<${n} />`).join(" ");
}, cf = function() {
  return typeof window._nc_dav_namespaces > "u" && (window._nc_dav_namespaces = { ...uf }), Object.keys(window._nc_dav_namespaces).map((n) => {
    var e;
    return `xmlns:${n}="${(e = window._nc_dav_namespaces) == null ? void 0 : e[n]}"`;
  }).join(" ");
}, ff = function() {
  return `<?xml version="1.0"?>
		<d:propfind ${cf()}>
			<d:prop>
				${lf()}
			</d:prop>
		</d:propfind>`;
};
function hf() {
  var n;
  return ro() ? `/files/${of()}` : `/files/${(n = Xi()) == null ? void 0 : n.uid}`;
}
const ja = hf();
function pf() {
  const n = Ll("dav");
  return ro() ? n.replace("remote.php", "public.php") : n;
}
const Ga = pf(), df = function(n = Ga, e = {}) {
  const r = rf(n, { headers: e });
  function i(a) {
    r.setHeaders({
      ...e,
      // Add this so the server knows it is an request from the browser
      "X-Requested-With": "XMLHttpRequest",
      // Inject user auth
      requesttoken: a ?? ""
    });
  }
  return bl(i), i(vl()), nf().patch("fetch", (a, h) => {
    const c = h.headers;
    return c != null && c.method && (h.method = c.method, delete c.method), fetch(a, h);
  }), r;
}, gf = function(n, e = ja, r = Ga) {
  var g, d;
  let i = (g = Xi()) == null ? void 0 : g.uid;
  if (ro())
    i = i ?? "anonymous";
  else if (!i)
    throw new Error("No user id found");
  const l = n.props, a = sf(l == null ? void 0 : l.permissions), h = String((l == null ? void 0 : l["owner-id"]) || i), c = l.fileid || 0, u = new Date(Date.parse(n.lastmod)), o = new Date(Date.parse(l.creationdate)), s = {
    id: c,
    source: `${r}${n.filename}`,
    mtime: !isNaN(u.getTime()) && u.getTime() !== 0 ? u : void 0,
    crtime: !isNaN(o.getTime()) && o.getTime() !== 0 ? o : void 0,
    mime: n.mime || "application/octet-stream",
    // Manually cast to work around for https://github.com/perry-mitchell/webdav-client/pull/380
    displayname: l.displayname !== void 0 ? String(l.displayname) : void 0,
    size: (l == null ? void 0 : l.size) || Number.parseInt(l.getcontentlength || "0"),
    // The fileid is set to -1 for failed requests
    status: c < 0 ? io.FAILED : void 0,
    permissions: a,
    owner: h,
    root: e,
    attributes: {
      ...n,
      ...l,
      hasPreview: l == null ? void 0 : l["has-preview"]
    }
  };
  return (d = s.attributes) == null || delete d.props, n.type === "file" ? new oo(s) : new so(s);
};
/*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */
const {
  entries: qa,
  setPrototypeOf: is,
  isFrozen: mf,
  getPrototypeOf: yf,
  getOwnPropertyDescriptor: wf
} = Object;
let {
  freeze: Ke,
  seal: Et,
  create: Va
} = Object, {
  apply: Ui,
  construct: Bi
} = typeof Reflect < "u" && Reflect;
Ke || (Ke = function(e) {
  return e;
});
Et || (Et = function(e) {
  return e;
});
Ui || (Ui = function(e, r, i) {
  return e.apply(r, i);
});
Bi || (Bi = function(e, r) {
  return new e(...r);
});
const cn = Qe(Array.prototype.forEach), Ef = Qe(Array.prototype.lastIndexOf), os = Qe(Array.prototype.pop), Gr = Qe(Array.prototype.push), vf = Qe(Array.prototype.splice), En = Qe(String.prototype.toLowerCase), ei = Qe(String.prototype.toString), ss = Qe(String.prototype.match), qr = Qe(String.prototype.replace), bf = Qe(String.prototype.indexOf), Nf = Qe(String.prototype.trim), Nt = Qe(Object.prototype.hasOwnProperty), Xe = Qe(RegExp.prototype.test), Vr = Af(TypeError);
function Qe(n) {
  return function(e) {
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
      i[l - 1] = arguments[l];
    return Ui(n, e, i);
  };
}
function Af(n) {
  return function() {
    for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
      r[i] = arguments[i];
    return Bi(n, r);
  };
}
function le(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : En;
  is && is(n, null);
  let i = e.length;
  for (; i--; ) {
    let l = e[i];
    if (typeof l == "string") {
      const a = r(l);
      a !== l && (mf(e) || (e[i] = a), l = a);
    }
    n[l] = !0;
  }
  return n;
}
function Tf(n) {
  for (let e = 0; e < n.length; e++)
    Nt(n, e) || (n[e] = null);
  return n;
}
function lr(n) {
  const e = Va(null);
  for (const [r, i] of qa(n))
    Nt(n, r) && (Array.isArray(i) ? e[r] = Tf(i) : i && typeof i == "object" && i.constructor === Object ? e[r] = lr(i) : e[r] = i);
  return e;
}
function Wr(n, e) {
  for (; n !== null; ) {
    const i = wf(n, e);
    if (i) {
      if (i.get)
        return Qe(i.get);
      if (typeof i.value == "function")
        return Qe(i.value);
    }
    n = yf(n);
  }
  function r() {
    return null;
  }
  return r;
}
const as = Ke(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ti = Ke(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ri = Ke(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), If = Ke(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ni = Ke(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), _f = Ke(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), us = Ke(["#text"]), ls = Ke(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ii = Ke(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), cs = Ke(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), fn = Ke(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Of = Et(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Rf = Et(/<%[\w\W]*|[\w\W]*%>/gm), xf = Et(/\$\{[\w\W]*/gm), Sf = Et(/^data-[\-\w.\u00B7-\uFFFF]+$/), Cf = Et(/^aria-[\-\w]+$/), Wa = Et(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Lf = Et(/^(?:\w+script|data):/i), Pf = Et(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Xa = Et(/^html$/i), $f = Et(/^[a-z][.\w]*(-[.\w]+)+$/i);
var fs = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Cf,
  ATTR_WHITESPACE: Pf,
  CUSTOM_ELEMENT: $f,
  DATA_ATTR: Sf,
  DOCTYPE_NAME: Xa,
  ERB_EXPR: Rf,
  IS_ALLOWED_URI: Wa,
  IS_SCRIPT_OR_DATA: Lf,
  MUSTACHE_EXPR: Of,
  TMPLIT_EXPR: xf
});
const Xr = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Ff = function() {
  return typeof window > "u" ? null : window;
}, kf = function(e, r) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let i = null;
  const l = "data-tt-policy-suffix";
  r && r.hasAttribute(l) && (i = r.getAttribute(l));
  const a = "dompurify" + (i ? "#" + i : "");
  try {
    return e.createPolicy(a, {
      createHTML(h) {
        return h;
      },
      createScriptURL(h) {
        return h;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
}, hs = function() {
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
function za() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ff();
  const e = (K) => za(K);
  if (e.version = "3.2.4", e.removed = [], !n || !n.document || n.document.nodeType !== Xr.document || !n.Element)
    return e.isSupported = !1, e;
  let {
    document: r
  } = n;
  const i = r, l = i.currentScript, {
    DocumentFragment: a,
    HTMLTemplateElement: h,
    Node: c,
    Element: u,
    NodeFilter: o,
    NamedNodeMap: s = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: g,
    DOMParser: d,
    trustedTypes: m
  } = n, y = u.prototype, v = Wr(y, "cloneNode"), _ = Wr(y, "remove"), T = Wr(y, "nextSibling"), E = Wr(y, "childNodes"), I = Wr(y, "parentNode");
  if (typeof h == "function") {
    const K = r.createElement("template");
    K.content && K.content.ownerDocument && (r = K.content.ownerDocument);
  }
  let S, A = "";
  const {
    implementation: x,
    createNodeIterator: C,
    createDocumentFragment: P,
    getElementsByTagName: F
  } = r, {
    importNode: j
  } = i;
  let D = hs();
  e.isSupported = typeof qa == "function" && typeof I == "function" && x && x.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: B,
    ERB_EXPR: $,
    TMPLIT_EXPR: q,
    DATA_ATTR: V,
    ARIA_ATTR: oe,
    IS_SCRIPT_OR_DATA: ne,
    ATTR_WHITESPACE: te,
    CUSTOM_ELEMENT: ae
  } = fs;
  let {
    IS_ALLOWED_URI: fe
  } = fs, re = null;
  const $e = le({}, [...as, ...ti, ...ri, ...ni, ...us]);
  let he = null;
  const pe = le({}, [...ls, ...ii, ...cs, ...fn]);
  let Q = Object.seal(Va(null, {
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
  })), it = null, At = null, Mt = !0, Ht = !0, Tt = !1, ct = !0, ot = !1, It = !0, ft = !1, Yt = !1, ht = !1, et = !1, Ut = !1, Zt = !1, pt = !0, ar = !1;
  const Er = "user-content-";
  let Jt = !0, Z = !1, we = {}, b = null;
  const O = le({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let L = null;
  const U = le({}, ["audio", "video", "img", "source", "image", "track"]);
  let w = null;
  const f = le({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), p = "http://www.w3.org/1998/Math/MathML", N = "http://www.w3.org/2000/svg", R = "http://www.w3.org/1999/xhtml";
  let k = R, G = !1, X = null;
  const J = le({}, [p, N, R], ei);
  let ie = le({}, ["mi", "mo", "mn", "ms", "mtext"]), se = le({}, ["annotation-xml"]);
  const ce = le({}, ["title", "style", "font", "a", "script"]);
  let Bt = null;
  const nu = ["application/xhtml+xml", "text/html"], iu = "text/html";
  let Le = null, vr = null;
  const ou = r.createElement("form"), lo = function(M) {
    return M instanceof RegExp || M instanceof Function;
  }, Bn = function() {
    let M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(vr && vr === M)) {
      if ((!M || typeof M != "object") && (M = {}), M = lr(M), Bt = // eslint-disable-next-line unicorn/prefer-includes
      nu.indexOf(M.PARSER_MEDIA_TYPE) === -1 ? iu : M.PARSER_MEDIA_TYPE, Le = Bt === "application/xhtml+xml" ? ei : En, re = Nt(M, "ALLOWED_TAGS") ? le({}, M.ALLOWED_TAGS, Le) : $e, he = Nt(M, "ALLOWED_ATTR") ? le({}, M.ALLOWED_ATTR, Le) : pe, X = Nt(M, "ALLOWED_NAMESPACES") ? le({}, M.ALLOWED_NAMESPACES, ei) : J, w = Nt(M, "ADD_URI_SAFE_ATTR") ? le(lr(f), M.ADD_URI_SAFE_ATTR, Le) : f, L = Nt(M, "ADD_DATA_URI_TAGS") ? le(lr(U), M.ADD_DATA_URI_TAGS, Le) : U, b = Nt(M, "FORBID_CONTENTS") ? le({}, M.FORBID_CONTENTS, Le) : O, it = Nt(M, "FORBID_TAGS") ? le({}, M.FORBID_TAGS, Le) : {}, At = Nt(M, "FORBID_ATTR") ? le({}, M.FORBID_ATTR, Le) : {}, we = Nt(M, "USE_PROFILES") ? M.USE_PROFILES : !1, Mt = M.ALLOW_ARIA_ATTR !== !1, Ht = M.ALLOW_DATA_ATTR !== !1, Tt = M.ALLOW_UNKNOWN_PROTOCOLS || !1, ct = M.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ot = M.SAFE_FOR_TEMPLATES || !1, It = M.SAFE_FOR_XML !== !1, ft = M.WHOLE_DOCUMENT || !1, et = M.RETURN_DOM || !1, Ut = M.RETURN_DOM_FRAGMENT || !1, Zt = M.RETURN_TRUSTED_TYPE || !1, ht = M.FORCE_BODY || !1, pt = M.SANITIZE_DOM !== !1, ar = M.SANITIZE_NAMED_PROPS || !1, Jt = M.KEEP_CONTENT !== !1, Z = M.IN_PLACE || !1, fe = M.ALLOWED_URI_REGEXP || Wa, k = M.NAMESPACE || R, ie = M.MATHML_TEXT_INTEGRATION_POINTS || ie, se = M.HTML_INTEGRATION_POINTS || se, Q = M.CUSTOM_ELEMENT_HANDLING || {}, M.CUSTOM_ELEMENT_HANDLING && lo(M.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Q.tagNameCheck = M.CUSTOM_ELEMENT_HANDLING.tagNameCheck), M.CUSTOM_ELEMENT_HANDLING && lo(M.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Q.attributeNameCheck = M.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), M.CUSTOM_ELEMENT_HANDLING && typeof M.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Q.allowCustomizedBuiltInElements = M.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ot && (Ht = !1), Ut && (et = !0), we && (re = le({}, us), he = [], we.html === !0 && (le(re, as), le(he, ls)), we.svg === !0 && (le(re, ti), le(he, ii), le(he, fn)), we.svgFilters === !0 && (le(re, ri), le(he, ii), le(he, fn)), we.mathMl === !0 && (le(re, ni), le(he, cs), le(he, fn))), M.ADD_TAGS && (re === $e && (re = lr(re)), le(re, M.ADD_TAGS, Le)), M.ADD_ATTR && (he === pe && (he = lr(he)), le(he, M.ADD_ATTR, Le)), M.ADD_URI_SAFE_ATTR && le(w, M.ADD_URI_SAFE_ATTR, Le), M.FORBID_CONTENTS && (b === O && (b = lr(b)), le(b, M.FORBID_CONTENTS, Le)), Jt && (re["#text"] = !0), ft && le(re, ["html", "head", "body"]), re.table && (le(re, ["tbody"]), delete it.tbody), M.TRUSTED_TYPES_POLICY) {
        if (typeof M.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Vr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof M.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Vr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        S = M.TRUSTED_TYPES_POLICY, A = S.createHTML("");
      } else
        S === void 0 && (S = kf(m, l)), S !== null && typeof A == "string" && (A = S.createHTML(""));
      Ke && Ke(M), vr = M;
    }
  }, co = le({}, [...ti, ...ri, ...If]), fo = le({}, [...ni, ..._f]), su = function(M) {
    let W = I(M);
    (!W || !W.tagName) && (W = {
      namespaceURI: k,
      tagName: "template"
    });
    const Y = En(M.tagName), Ee = En(W.tagName);
    return X[M.namespaceURI] ? M.namespaceURI === N ? W.namespaceURI === R ? Y === "svg" : W.namespaceURI === p ? Y === "svg" && (Ee === "annotation-xml" || ie[Ee]) : !!co[Y] : M.namespaceURI === p ? W.namespaceURI === R ? Y === "math" : W.namespaceURI === N ? Y === "math" && se[Ee] : !!fo[Y] : M.namespaceURI === R ? W.namespaceURI === N && !se[Ee] || W.namespaceURI === p && !ie[Ee] ? !1 : !fo[Y] && (ce[Y] || !co[Y]) : !!(Bt === "application/xhtml+xml" && X[M.namespaceURI]) : !1;
  }, _t = function(M) {
    Gr(e.removed, {
      element: M
    });
    try {
      I(M).removeChild(M);
    } catch {
      _(M);
    }
  }, nn = function(M, W) {
    try {
      Gr(e.removed, {
        attribute: W.getAttributeNode(M),
        from: W
      });
    } catch {
      Gr(e.removed, {
        attribute: null,
        from: W
      });
    }
    if (W.removeAttribute(M), M === "is")
      if (et || Ut)
        try {
          _t(W);
        } catch {
        }
      else
        try {
          W.setAttribute(M, "");
        } catch {
        }
  }, ho = function(M) {
    let W = null, Y = null;
    if (ht)
      M = "<remove></remove>" + M;
    else {
      const Fe = ss(M, /^[\r\n\t ]+/);
      Y = Fe && Fe[0];
    }
    Bt === "application/xhtml+xml" && k === R && (M = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + M + "</body></html>");
    const Ee = S ? S.createHTML(M) : M;
    if (k === R)
      try {
        W = new d().parseFromString(Ee, Bt);
      } catch {
      }
    if (!W || !W.documentElement) {
      W = x.createDocument(k, "template", null);
      try {
        W.documentElement.innerHTML = G ? A : Ee;
      } catch {
      }
    }
    const De = W.body || W.documentElement;
    return M && Y && De.insertBefore(r.createTextNode(Y), De.childNodes[0] || null), k === R ? F.call(W, ft ? "html" : "body")[0] : ft ? W.documentElement : De;
  }, po = function(M) {
    return C.call(
      M.ownerDocument || M,
      M,
      // eslint-disable-next-line no-bitwise
      o.SHOW_ELEMENT | o.SHOW_COMMENT | o.SHOW_TEXT | o.SHOW_PROCESSING_INSTRUCTION | o.SHOW_CDATA_SECTION,
      null
    );
  }, Dn = function(M) {
    return M instanceof g && (typeof M.nodeName != "string" || typeof M.textContent != "string" || typeof M.removeChild != "function" || !(M.attributes instanceof s) || typeof M.removeAttribute != "function" || typeof M.setAttribute != "function" || typeof M.namespaceURI != "string" || typeof M.insertBefore != "function" || typeof M.hasChildNodes != "function");
  }, go = function(M) {
    return typeof c == "function" && M instanceof c;
  };
  function Dt(K, M, W) {
    cn(K, (Y) => {
      Y.call(e, M, W, vr);
    });
  }
  const mo = function(M) {
    let W = null;
    if (Dt(D.beforeSanitizeElements, M, null), Dn(M))
      return _t(M), !0;
    const Y = Le(M.nodeName);
    if (Dt(D.uponSanitizeElement, M, {
      tagName: Y,
      allowedTags: re
    }), M.hasChildNodes() && !go(M.firstElementChild) && Xe(/<[/\w]/g, M.innerHTML) && Xe(/<[/\w]/g, M.textContent) || M.nodeType === Xr.progressingInstruction || It && M.nodeType === Xr.comment && Xe(/<[/\w]/g, M.data))
      return _t(M), !0;
    if (!re[Y] || it[Y]) {
      if (!it[Y] && wo(Y) && (Q.tagNameCheck instanceof RegExp && Xe(Q.tagNameCheck, Y) || Q.tagNameCheck instanceof Function && Q.tagNameCheck(Y)))
        return !1;
      if (Jt && !b[Y]) {
        const Ee = I(M) || M.parentNode, De = E(M) || M.childNodes;
        if (De && Ee) {
          const Fe = De.length;
          for (let tt = Fe - 1; tt >= 0; --tt) {
            const Ot = v(De[tt], !0);
            Ot.__removalCount = (M.__removalCount || 0) + 1, Ee.insertBefore(Ot, T(M));
          }
        }
      }
      return _t(M), !0;
    }
    return M instanceof u && !su(M) || (Y === "noscript" || Y === "noembed" || Y === "noframes") && Xe(/<\/no(script|embed|frames)/i, M.innerHTML) ? (_t(M), !0) : (ot && M.nodeType === Xr.text && (W = M.textContent, cn([B, $, q], (Ee) => {
      W = qr(W, Ee, " ");
    }), M.textContent !== W && (Gr(e.removed, {
      element: M.cloneNode()
    }), M.textContent = W)), Dt(D.afterSanitizeElements, M, null), !1);
  }, yo = function(M, W, Y) {
    if (pt && (W === "id" || W === "name") && (Y in r || Y in ou))
      return !1;
    if (!(Ht && !At[W] && Xe(V, W))) {
      if (!(Mt && Xe(oe, W))) {
        if (!he[W] || At[W]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(wo(M) && (Q.tagNameCheck instanceof RegExp && Xe(Q.tagNameCheck, M) || Q.tagNameCheck instanceof Function && Q.tagNameCheck(M)) && (Q.attributeNameCheck instanceof RegExp && Xe(Q.attributeNameCheck, W) || Q.attributeNameCheck instanceof Function && Q.attributeNameCheck(W)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            W === "is" && Q.allowCustomizedBuiltInElements && (Q.tagNameCheck instanceof RegExp && Xe(Q.tagNameCheck, Y) || Q.tagNameCheck instanceof Function && Q.tagNameCheck(Y)))
          ) return !1;
        } else if (!w[W]) {
          if (!Xe(fe, qr(Y, te, ""))) {
            if (!((W === "src" || W === "xlink:href" || W === "href") && M !== "script" && bf(Y, "data:") === 0 && L[M])) {
              if (!(Tt && !Xe(ne, qr(Y, te, "")))) {
                if (Y)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, wo = function(M) {
    return M !== "annotation-xml" && ss(M, ae);
  }, Eo = function(M) {
    Dt(D.beforeSanitizeAttributes, M, null);
    const {
      attributes: W
    } = M;
    if (!W || Dn(M))
      return;
    const Y = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: he,
      forceKeepAttr: void 0
    };
    let Ee = W.length;
    for (; Ee--; ) {
      const De = W[Ee], {
        name: Fe,
        namespaceURI: tt,
        value: Ot
      } = De, Mr = Le(Fe);
      let We = Fe === "value" ? Ot : Nf(Ot);
      if (Y.attrName = Mr, Y.attrValue = We, Y.keepAttr = !0, Y.forceKeepAttr = void 0, Dt(D.uponSanitizeAttribute, M, Y), We = Y.attrValue, ar && (Mr === "id" || Mr === "name") && (nn(Fe, M), We = Er + We), It && Xe(/((--!?|])>)|<\/(style|title)/i, We)) {
        nn(Fe, M);
        continue;
      }
      if (Y.forceKeepAttr || (nn(Fe, M), !Y.keepAttr))
        continue;
      if (!ct && Xe(/\/>/i, We)) {
        nn(Fe, M);
        continue;
      }
      ot && cn([B, $, q], (bo) => {
        We = qr(We, bo, " ");
      });
      const vo = Le(M.nodeName);
      if (yo(vo, Mr, We)) {
        if (S && typeof m == "object" && typeof m.getAttributeType == "function" && !tt)
          switch (m.getAttributeType(vo, Mr)) {
            case "TrustedHTML": {
              We = S.createHTML(We);
              break;
            }
            case "TrustedScriptURL": {
              We = S.createScriptURL(We);
              break;
            }
          }
        try {
          tt ? M.setAttributeNS(tt, Fe, We) : M.setAttribute(Fe, We), Dn(M) ? _t(M) : os(e.removed);
        } catch {
        }
      }
    }
    Dt(D.afterSanitizeAttributes, M, null);
  }, au = function K(M) {
    let W = null;
    const Y = po(M);
    for (Dt(D.beforeSanitizeShadowDOM, M, null); W = Y.nextNode(); )
      Dt(D.uponSanitizeShadowNode, W, null), mo(W), Eo(W), W.content instanceof a && K(W.content);
    Dt(D.afterSanitizeShadowDOM, M, null);
  };
  return e.sanitize = function(K) {
    let M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, W = null, Y = null, Ee = null, De = null;
    if (G = !K, G && (K = "<!-->"), typeof K != "string" && !go(K))
      if (typeof K.toString == "function") {
        if (K = K.toString(), typeof K != "string")
          throw Vr("dirty is not a string, aborting");
      } else
        throw Vr("toString is not a function");
    if (!e.isSupported)
      return K;
    if (Yt || Bn(M), e.removed = [], typeof K == "string" && (Z = !1), Z) {
      if (K.nodeName) {
        const Ot = Le(K.nodeName);
        if (!re[Ot] || it[Ot])
          throw Vr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (K instanceof c)
      W = ho("<!---->"), Y = W.ownerDocument.importNode(K, !0), Y.nodeType === Xr.element && Y.nodeName === "BODY" || Y.nodeName === "HTML" ? W = Y : W.appendChild(Y);
    else {
      if (!et && !ot && !ft && // eslint-disable-next-line unicorn/prefer-includes
      K.indexOf("<") === -1)
        return S && Zt ? S.createHTML(K) : K;
      if (W = ho(K), !W)
        return et ? null : Zt ? A : "";
    }
    W && ht && _t(W.firstChild);
    const Fe = po(Z ? K : W);
    for (; Ee = Fe.nextNode(); )
      mo(Ee), Eo(Ee), Ee.content instanceof a && au(Ee.content);
    if (Z)
      return K;
    if (et) {
      if (Ut)
        for (De = P.call(W.ownerDocument); W.firstChild; )
          De.appendChild(W.firstChild);
      else
        De = W;
      return (he.shadowroot || he.shadowrootmode) && (De = j.call(i, De, !0)), De;
    }
    let tt = ft ? W.outerHTML : W.innerHTML;
    return ft && re["!doctype"] && W.ownerDocument && W.ownerDocument.doctype && W.ownerDocument.doctype.name && Xe(Xa, W.ownerDocument.doctype.name) && (tt = "<!DOCTYPE " + W.ownerDocument.doctype.name + `>
` + tt), ot && cn([B, $, q], (Ot) => {
      tt = qr(tt, Ot, " ");
    }), S && Zt ? S.createHTML(tt) : tt;
  }, e.setConfig = function() {
    let K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Bn(K), Yt = !0;
  }, e.clearConfig = function() {
    vr = null, Yt = !1;
  }, e.isValidAttribute = function(K, M, W) {
    vr || Bn({});
    const Y = Le(K), Ee = Le(M);
    return yo(Y, Ee, W);
  }, e.addHook = function(K, M) {
    typeof M == "function" && Gr(D[K], M);
  }, e.removeHook = function(K, M) {
    if (M !== void 0) {
      const W = Ef(D[K], M);
      return W === -1 ? void 0 : vf(D[K], W, 1)[0];
    }
    return os(D[K]);
  }, e.removeHooks = function(K) {
    D[K] = [];
  }, e.removeAllHooks = function() {
    D = hs();
  }, e;
}
za();
class Mf {
  constructor() {
    ge(this, "_entries", []);
  }
  registerEntry(e) {
    this.validateEntry(e), e.category = e.category ?? 1, this._entries.push(e);
  }
  unregisterEntry(e) {
    const r = typeof e == "string" ? this.getEntryIndex(e) : this.getEntryIndex(e.id);
    if (r === -1) {
      Qr.warn("Entry not found, nothing removed", { entry: e, entries: this.getEntries() });
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
const Uf = function() {
  return typeof window._nc_newfilemenu > "u" && (window._nc_newfilemenu = new Mf(), Qr.debug("NewFileMenu initialized")), window._nc_newfilemenu;
};
var Ha = /* @__PURE__ */ ((n) => (n.DEFAULT = "default", n.HIDDEN = "hidden", n))(Ha || {});
const ps = function(n) {
  if (typeof window._nc_fileactions > "u" && (window._nc_fileactions = [], Qr.debug("FileActions initialized")), window._nc_fileactions.find((e) => e.id === n.id)) {
    Qr.error(`FileAction ${n.id} already registered`, { action: n });
    return;
  }
  window._nc_fileactions.push(n);
};
var oi = {}, si = {}, ds;
function ao() {
  return ds || (ds = 1, function(n) {
    const e = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", r = e + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", i = "[" + e + "][" + r + "]*", l = new RegExp("^" + i + "$"), a = function(c, u) {
      const o = [];
      let s = u.exec(c);
      for (; s; ) {
        const g = [];
        g.startIndex = u.lastIndex - s[0].length;
        const d = s.length;
        for (let m = 0; m < d; m++)
          g.push(s[m]);
        o.push(g), s = u.exec(c);
      }
      return o;
    }, h = function(c) {
      const u = l.exec(c);
      return !(u === null || typeof u > "u");
    };
    n.isExist = function(c) {
      return typeof c < "u";
    }, n.isEmptyObject = function(c) {
      return Object.keys(c).length === 0;
    }, n.merge = function(c, u, o) {
      if (u) {
        const s = Object.keys(u), g = s.length;
        for (let d = 0; d < g; d++)
          o === "strict" ? c[s[d]] = [u[s[d]]] : c[s[d]] = u[s[d]];
      }
    }, n.getValue = function(c) {
      return n.isExist(c) ? c : "";
    }, n.isName = h, n.getAllMatches = a, n.nameRegexp = i;
  }(si)), si;
}
var gs;
function Ya() {
  if (gs) return oi;
  gs = 1;
  const n = ao(), e = {
    allowBooleanAttributes: !1,
    //A tag can have attributes without any value
    unpairedTags: []
  };
  oi.validate = function(T, E) {
    E = Object.assign({}, e, E);
    const I = [];
    let S = !1, A = !1;
    T[0] === "\uFEFF" && (T = T.substr(1));
    for (let x = 0; x < T.length; x++)
      if (T[x] === "<" && T[x + 1] === "?") {
        if (x += 2, x = i(T, x), x.err) return x;
      } else if (T[x] === "<") {
        let C = x;
        if (x++, T[x] === "!") {
          x = l(T, x);
          continue;
        } else {
          let P = !1;
          T[x] === "/" && (P = !0, x++);
          let F = "";
          for (; x < T.length && T[x] !== ">" && T[x] !== " " && T[x] !== "	" && T[x] !== `
` && T[x] !== "\r"; x++)
            F += T[x];
          if (F = F.trim(), F[F.length - 1] === "/" && (F = F.substring(0, F.length - 1), x--), !y(F)) {
            let B;
            return F.trim().length === 0 ? B = "Invalid space after '<'." : B = "Tag '" + F + "' is an invalid name.", d("InvalidTag", B, v(T, x));
          }
          const j = c(T, x);
          if (j === !1)
            return d("InvalidAttr", "Attributes for '" + F + "' have open quote.", v(T, x));
          let D = j.value;
          if (x = j.index, D[D.length - 1] === "/") {
            const B = x - D.length;
            D = D.substring(0, D.length - 1);
            const $ = o(D, E);
            if ($ === !0)
              S = !0;
            else
              return d($.err.code, $.err.msg, v(T, B + $.err.line));
          } else if (P)
            if (j.tagClosed) {
              if (D.trim().length > 0)
                return d("InvalidTag", "Closing tag '" + F + "' can't have attributes or invalid starting.", v(T, C));
              if (I.length === 0)
                return d("InvalidTag", "Closing tag '" + F + "' has not been opened.", v(T, C));
              {
                const B = I.pop();
                if (F !== B.tagName) {
                  let $ = v(T, B.tagStartPos);
                  return d(
                    "InvalidTag",
                    "Expected closing tag '" + B.tagName + "' (opened in line " + $.line + ", col " + $.col + ") instead of closing tag '" + F + "'.",
                    v(T, C)
                  );
                }
                I.length == 0 && (A = !0);
              }
            } else return d("InvalidTag", "Closing tag '" + F + "' doesn't have proper closing.", v(T, x));
          else {
            const B = o(D, E);
            if (B !== !0)
              return d(B.err.code, B.err.msg, v(T, x - D.length + B.err.line));
            if (A === !0)
              return d("InvalidXml", "Multiple possible root nodes found.", v(T, x));
            E.unpairedTags.indexOf(F) !== -1 || I.push({ tagName: F, tagStartPos: C }), S = !0;
          }
          for (x++; x < T.length; x++)
            if (T[x] === "<")
              if (T[x + 1] === "!") {
                x++, x = l(T, x);
                continue;
              } else if (T[x + 1] === "?") {
                if (x = i(T, ++x), x.err) return x;
              } else
                break;
            else if (T[x] === "&") {
              const B = g(T, x);
              if (B == -1)
                return d("InvalidChar", "char '&' is not expected.", v(T, x));
              x = B;
            } else if (A === !0 && !r(T[x]))
              return d("InvalidXml", "Extra text at the end", v(T, x));
          T[x] === "<" && x--;
        }
      } else {
        if (r(T[x]))
          continue;
        return d("InvalidChar", "char '" + T[x] + "' is not expected.", v(T, x));
      }
    if (S) {
      if (I.length == 1)
        return d("InvalidTag", "Unclosed tag '" + I[0].tagName + "'.", v(T, I[0].tagStartPos));
      if (I.length > 0)
        return d("InvalidXml", "Invalid '" + JSON.stringify(I.map((x) => x.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
    } else return d("InvalidXml", "Start tag expected.", 1);
    return !0;
  };
  function r(T) {
    return T === " " || T === "	" || T === `
` || T === "\r";
  }
  function i(T, E) {
    const I = E;
    for (; E < T.length; E++)
      if (T[E] == "?" || T[E] == " ") {
        const S = T.substr(I, E - I);
        if (E > 5 && S === "xml")
          return d("InvalidXml", "XML declaration allowed only at the start of the document.", v(T, E));
        if (T[E] == "?" && T[E + 1] == ">") {
          E++;
          break;
        } else
          continue;
      }
    return E;
  }
  function l(T, E) {
    if (T.length > E + 5 && T[E + 1] === "-" && T[E + 2] === "-") {
      for (E += 3; E < T.length; E++)
        if (T[E] === "-" && T[E + 1] === "-" && T[E + 2] === ">") {
          E += 2;
          break;
        }
    } else if (T.length > E + 8 && T[E + 1] === "D" && T[E + 2] === "O" && T[E + 3] === "C" && T[E + 4] === "T" && T[E + 5] === "Y" && T[E + 6] === "P" && T[E + 7] === "E") {
      let I = 1;
      for (E += 8; E < T.length; E++)
        if (T[E] === "<")
          I++;
        else if (T[E] === ">" && (I--, I === 0))
          break;
    } else if (T.length > E + 9 && T[E + 1] === "[" && T[E + 2] === "C" && T[E + 3] === "D" && T[E + 4] === "A" && T[E + 5] === "T" && T[E + 6] === "A" && T[E + 7] === "[") {
      for (E += 8; E < T.length; E++)
        if (T[E] === "]" && T[E + 1] === "]" && T[E + 2] === ">") {
          E += 2;
          break;
        }
    }
    return E;
  }
  const a = '"', h = "'";
  function c(T, E) {
    let I = "", S = "", A = !1;
    for (; E < T.length; E++) {
      if (T[E] === a || T[E] === h)
        S === "" ? S = T[E] : S !== T[E] || (S = "");
      else if (T[E] === ">" && S === "") {
        A = !0;
        break;
      }
      I += T[E];
    }
    return S !== "" ? !1 : {
      value: I,
      index: E,
      tagClosed: A
    };
  }
  const u = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
  function o(T, E) {
    const I = n.getAllMatches(T, u), S = {};
    for (let A = 0; A < I.length; A++) {
      if (I[A][1].length === 0)
        return d("InvalidAttr", "Attribute '" + I[A][2] + "' has no space in starting.", _(I[A]));
      if (I[A][3] !== void 0 && I[A][4] === void 0)
        return d("InvalidAttr", "Attribute '" + I[A][2] + "' is without value.", _(I[A]));
      if (I[A][3] === void 0 && !E.allowBooleanAttributes)
        return d("InvalidAttr", "boolean attribute '" + I[A][2] + "' is not allowed.", _(I[A]));
      const x = I[A][2];
      if (!m(x))
        return d("InvalidAttr", "Attribute '" + x + "' is an invalid name.", _(I[A]));
      if (!S.hasOwnProperty(x))
        S[x] = 1;
      else
        return d("InvalidAttr", "Attribute '" + x + "' is repeated.", _(I[A]));
    }
    return !0;
  }
  function s(T, E) {
    let I = /\d/;
    for (T[E] === "x" && (E++, I = /[\da-fA-F]/); E < T.length; E++) {
      if (T[E] === ";")
        return E;
      if (!T[E].match(I))
        break;
    }
    return -1;
  }
  function g(T, E) {
    if (E++, T[E] === ";")
      return -1;
    if (T[E] === "#")
      return E++, s(T, E);
    let I = 0;
    for (; E < T.length; E++, I++)
      if (!(T[E].match(/\w/) && I < 20)) {
        if (T[E] === ";")
          break;
        return -1;
      }
    return E;
  }
  function d(T, E, I) {
    return {
      err: {
        code: T,
        msg: E,
        line: I.line || I,
        col: I.col
      }
    };
  }
  function m(T) {
    return n.isName(T);
  }
  function y(T) {
    return n.isName(T);
  }
  function v(T, E) {
    const I = T.substring(0, E).split(/\r?\n/);
    return {
      line: I.length,
      // column number is last line's length + 1, because column numbering starts at 1:
      col: I[I.length - 1].length + 1
    };
  }
  function _(T) {
    return T.startIndex + T[1].length;
  }
  return oi;
}
var hn = {}, ms;
function Bf() {
  if (ms) return hn;
  ms = 1;
  const n = {
    preserveOrder: !1,
    attributeNamePrefix: "@_",
    attributesGroupName: !1,
    textNodeName: "#text",
    ignoreAttributes: !0,
    removeNSPrefix: !1,
    // remove NS from tag name or attribute name if true
    allowBooleanAttributes: !1,
    //a tag can have attributes without any value
    //ignoreRootElement : false,
    parseTagValue: !0,
    parseAttributeValue: !1,
    trimValues: !0,
    //Trim string values of tag and attributes
    cdataPropName: !1,
    numberParseOptions: {
      hex: !0,
      leadingZeros: !0,
      eNotation: !0
    },
    tagValueProcessor: function(r, i) {
      return i;
    },
    attributeValueProcessor: function(r, i) {
      return i;
    },
    stopNodes: [],
    //nested tags will not be parsed even for errors
    alwaysCreateTextNode: !1,
    isArray: () => !1,
    commentPropName: !1,
    unpairedTags: [],
    processEntities: !0,
    htmlEntities: !1,
    ignoreDeclaration: !1,
    ignorePiTags: !1,
    transformTagName: !1,
    transformAttributeName: !1,
    updateTag: function(r, i, l) {
      return r;
    }
    // skipEmptyListItem: false
  }, e = function(r) {
    return Object.assign({}, n, r);
  };
  return hn.buildOptions = e, hn.defaultOptions = n, hn;
}
var ai, ys;
function Df() {
  if (ys) return ai;
  ys = 1;
  class n {
    constructor(r) {
      this.tagname = r, this.child = [], this[":@"] = {};
    }
    add(r, i) {
      r === "__proto__" && (r = "#__proto__"), this.child.push({ [r]: i });
    }
    addChild(r) {
      r.tagname === "__proto__" && (r.tagname = "#__proto__"), r[":@"] && Object.keys(r[":@"]).length > 0 ? this.child.push({ [r.tagname]: r.child, ":@": r[":@"] }) : this.child.push({ [r.tagname]: r.child });
    }
  }
  return ai = n, ai;
}
var ui, ws;
function jf() {
  if (ws) return ui;
  ws = 1;
  const n = ao();
  function e(u, o) {
    const s = {};
    if (u[o + 3] === "O" && u[o + 4] === "C" && u[o + 5] === "T" && u[o + 6] === "Y" && u[o + 7] === "P" && u[o + 8] === "E") {
      o = o + 9;
      let g = 1, d = !1, m = !1, y = "";
      for (; o < u.length; o++)
        if (u[o] === "<" && !m) {
          if (d && i(u, o)) {
            o += 7;
            let v, _;
            [v, _, o] = r(u, o + 1), _.indexOf("&") === -1 && (s[c(v)] = {
              regx: RegExp(`&${v};`, "g"),
              val: _
            });
          } else d && l(u, o) || d && a(u, o) ? o += 8 : d && h(u, o) ? o += 9 : m = !0;
          g++, y = "";
        } else if (u[o] === ">") {
          if (m ? u[o - 1] === "-" && u[o - 2] === "-" && (m = !1, g--) : g--, g === 0)
            break;
        } else u[o] === "[" ? d = !0 : y += u[o];
      if (g !== 0)
        throw new Error("Unclosed DOCTYPE");
    } else
      throw new Error("Invalid Tag instead of DOCTYPE");
    return { entities: s, i: o };
  }
  function r(u, o) {
    let s = "";
    for (; o < u.length && u[o] !== "'" && u[o] !== '"'; o++)
      s += u[o];
    if (s = s.trim(), s.indexOf(" ") !== -1) throw new Error("External entites are not supported");
    const g = u[o++];
    let d = "";
    for (; o < u.length && u[o] !== g; o++)
      d += u[o];
    return [s, d, o];
  }
  function i(u, o) {
    return u[o + 1] === "!" && u[o + 2] === "E" && u[o + 3] === "N" && u[o + 4] === "T" && u[o + 5] === "I" && u[o + 6] === "T" && u[o + 7] === "Y";
  }
  function l(u, o) {
    return u[o + 1] === "!" && u[o + 2] === "E" && u[o + 3] === "L" && u[o + 4] === "E" && u[o + 5] === "M" && u[o + 6] === "E" && u[o + 7] === "N" && u[o + 8] === "T";
  }
  function a(u, o) {
    return u[o + 1] === "!" && u[o + 2] === "A" && u[o + 3] === "T" && u[o + 4] === "T" && u[o + 5] === "L" && u[o + 6] === "I" && u[o + 7] === "S" && u[o + 8] === "T";
  }
  function h(u, o) {
    return u[o + 1] === "!" && u[o + 2] === "N" && u[o + 3] === "O" && u[o + 4] === "T" && u[o + 5] === "A" && u[o + 6] === "T" && u[o + 7] === "I" && u[o + 8] === "O" && u[o + 9] === "N";
  }
  function c(u) {
    if (n.isName(u))
      return u;
    throw new Error(`Invalid entity name ${u}`);
  }
  return ui = e, ui;
}
var li, Es;
function Gf() {
  if (Es) return li;
  Es = 1;
  const n = /^[-+]?0x[a-fA-F0-9]+$/, e = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
  !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt), !Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
  const r = {
    hex: !0,
    leadingZeros: !0,
    decimalPoint: ".",
    eNotation: !0
    //skipLike: /regex/
  };
  function i(a, h = {}) {
    if (h = Object.assign({}, r, h), !a || typeof a != "string") return a;
    let c = a.trim();
    if (h.skipLike !== void 0 && h.skipLike.test(c)) return a;
    if (h.hex && n.test(c))
      return Number.parseInt(c, 16);
    {
      const u = e.exec(c);
      if (u) {
        const o = u[1], s = u[2];
        let g = l(u[3]);
        const d = u[4] || u[6];
        if (!h.leadingZeros && s.length > 0 && o && c[2] !== ".") return a;
        if (!h.leadingZeros && s.length > 0 && !o && c[1] !== ".") return a;
        {
          const m = Number(c), y = "" + m;
          return y.search(/[eE]/) !== -1 || d ? h.eNotation ? m : a : c.indexOf(".") !== -1 ? y === "0" && g === "" || y === g || o && y === "-" + g ? m : a : s ? g === y || o + g === y ? m : a : c === y || c === o + y ? m : a;
        }
      } else
        return a;
    }
  }
  function l(a) {
    return a && a.indexOf(".") !== -1 && (a = a.replace(/0+$/, ""), a === "." ? a = "0" : a[0] === "." ? a = "0" + a : a[a.length - 1] === "." && (a = a.substr(0, a.length - 1))), a;
  }
  return li = i, li;
}
var ci, vs;
function Za() {
  if (vs) return ci;
  vs = 1;
  function n(e) {
    return typeof e == "function" ? e : Array.isArray(e) ? (r) => {
      for (const i of e)
        if (typeof i == "string" && r === i || i instanceof RegExp && i.test(r))
          return !0;
    } : () => !1;
  }
  return ci = n, ci;
}
var fi, bs;
function qf() {
  if (bs) return fi;
  bs = 1;
  const n = ao(), e = Df(), r = jf(), i = Gf(), l = Za();
  class a {
    constructor(x) {
      this.options = x, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
        apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
        gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
        lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
        quot: { regex: /&(quot|#34|#x22);/g, val: '"' }
      }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = {
        space: { regex: /&(nbsp|#160);/g, val: " " },
        // "lt" : { regex: /&(lt|#60);/g, val: "<" },
        // "gt" : { regex: /&(gt|#62);/g, val: ">" },
        // "amp" : { regex: /&(amp|#38);/g, val: "&" },
        // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
        // "apos" : { regex: /&(apos|#39);/g, val: "'" },
        cent: { regex: /&(cent|#162);/g, val: "¢" },
        pound: { regex: /&(pound|#163);/g, val: "£" },
        yen: { regex: /&(yen|#165);/g, val: "¥" },
        euro: { regex: /&(euro|#8364);/g, val: "€" },
        copyright: { regex: /&(copy|#169);/g, val: "©" },
        reg: { regex: /&(reg|#174);/g, val: "®" },
        inr: { regex: /&(inr|#8377);/g, val: "₹" },
        num_dec: { regex: /&#([0-9]{1,7});/g, val: (C, P) => String.fromCharCode(Number.parseInt(P, 10)) },
        num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (C, P) => String.fromCharCode(Number.parseInt(P, 16)) }
      }, this.addExternalEntities = h, this.parseXml = g, this.parseTextData = c, this.resolveNameSpace = u, this.buildAttributesMap = s, this.isItStopNode = v, this.replaceEntitiesValue = m, this.readStopNodeData = I, this.saveTextToParentTag = y, this.addChild = d, this.ignoreAttributesFn = l(this.options.ignoreAttributes);
    }
  }
  function h(A) {
    const x = Object.keys(A);
    for (let C = 0; C < x.length; C++) {
      const P = x[C];
      this.lastEntities[P] = {
        regex: new RegExp("&" + P + ";", "g"),
        val: A[P]
      };
    }
  }
  function c(A, x, C, P, F, j, D) {
    if (A !== void 0 && (this.options.trimValues && !P && (A = A.trim()), A.length > 0)) {
      D || (A = this.replaceEntitiesValue(A));
      const B = this.options.tagValueProcessor(x, A, C, F, j);
      return B == null ? A : typeof B != typeof A || B !== A ? B : this.options.trimValues ? S(A, this.options.parseTagValue, this.options.numberParseOptions) : A.trim() === A ? S(A, this.options.parseTagValue, this.options.numberParseOptions) : A;
    }
  }
  function u(A) {
    if (this.options.removeNSPrefix) {
      const x = A.split(":"), C = A.charAt(0) === "/" ? "/" : "";
      if (x[0] === "xmlns")
        return "";
      x.length === 2 && (A = C + x[1]);
    }
    return A;
  }
  const o = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
  function s(A, x, C) {
    if (this.options.ignoreAttributes !== !0 && typeof A == "string") {
      const P = n.getAllMatches(A, o), F = P.length, j = {};
      for (let D = 0; D < F; D++) {
        const B = this.resolveNameSpace(P[D][1]);
        if (this.ignoreAttributesFn(B, x))
          continue;
        let $ = P[D][4], q = this.options.attributeNamePrefix + B;
        if (B.length)
          if (this.options.transformAttributeName && (q = this.options.transformAttributeName(q)), q === "__proto__" && (q = "#__proto__"), $ !== void 0) {
            this.options.trimValues && ($ = $.trim()), $ = this.replaceEntitiesValue($);
            const V = this.options.attributeValueProcessor(B, $, x);
            V == null ? j[q] = $ : typeof V != typeof $ || V !== $ ? j[q] = V : j[q] = S(
              $,
              this.options.parseAttributeValue,
              this.options.numberParseOptions
            );
          } else this.options.allowBooleanAttributes && (j[q] = !0);
      }
      if (!Object.keys(j).length)
        return;
      if (this.options.attributesGroupName) {
        const D = {};
        return D[this.options.attributesGroupName] = j, D;
      }
      return j;
    }
  }
  const g = function(A) {
    A = A.replace(/\r\n?/g, `
`);
    const x = new e("!xml");
    let C = x, P = "", F = "";
    for (let j = 0; j < A.length; j++)
      if (A[j] === "<")
        if (A[j + 1] === "/") {
          const B = T(A, ">", j, "Closing Tag is not closed.");
          let $ = A.substring(j + 2, B).trim();
          if (this.options.removeNSPrefix) {
            const oe = $.indexOf(":");
            oe !== -1 && ($ = $.substr(oe + 1));
          }
          this.options.transformTagName && ($ = this.options.transformTagName($)), C && (P = this.saveTextToParentTag(P, C, F));
          const q = F.substring(F.lastIndexOf(".") + 1);
          if ($ && this.options.unpairedTags.indexOf($) !== -1)
            throw new Error(`Unpaired tag can not be used as closing tag: </${$}>`);
          let V = 0;
          q && this.options.unpairedTags.indexOf(q) !== -1 ? (V = F.lastIndexOf(".", F.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : V = F.lastIndexOf("."), F = F.substring(0, V), C = this.tagsNodeStack.pop(), P = "", j = B;
        } else if (A[j + 1] === "?") {
          let B = E(A, j, !1, "?>");
          if (!B) throw new Error("Pi Tag is not closed.");
          if (P = this.saveTextToParentTag(P, C, F), !(this.options.ignoreDeclaration && B.tagName === "?xml" || this.options.ignorePiTags)) {
            const $ = new e(B.tagName);
            $.add(this.options.textNodeName, ""), B.tagName !== B.tagExp && B.attrExpPresent && ($[":@"] = this.buildAttributesMap(B.tagExp, F, B.tagName)), this.addChild(C, $, F);
          }
          j = B.closeIndex + 1;
        } else if (A.substr(j + 1, 3) === "!--") {
          const B = T(A, "-->", j + 4, "Comment is not closed.");
          if (this.options.commentPropName) {
            const $ = A.substring(j + 4, B - 2);
            P = this.saveTextToParentTag(P, C, F), C.add(this.options.commentPropName, [{ [this.options.textNodeName]: $ }]);
          }
          j = B;
        } else if (A.substr(j + 1, 2) === "!D") {
          const B = r(A, j);
          this.docTypeEntities = B.entities, j = B.i;
        } else if (A.substr(j + 1, 2) === "![") {
          const B = T(A, "]]>", j, "CDATA is not closed.") - 2, $ = A.substring(j + 9, B);
          P = this.saveTextToParentTag(P, C, F);
          let q = this.parseTextData($, C.tagname, F, !0, !1, !0, !0);
          q == null && (q = ""), this.options.cdataPropName ? C.add(this.options.cdataPropName, [{ [this.options.textNodeName]: $ }]) : C.add(this.options.textNodeName, q), j = B + 2;
        } else {
          let B = E(A, j, this.options.removeNSPrefix), $ = B.tagName;
          const q = B.rawTagName;
          let V = B.tagExp, oe = B.attrExpPresent, ne = B.closeIndex;
          this.options.transformTagName && ($ = this.options.transformTagName($)), C && P && C.tagname !== "!xml" && (P = this.saveTextToParentTag(P, C, F, !1));
          const te = C;
          if (te && this.options.unpairedTags.indexOf(te.tagname) !== -1 && (C = this.tagsNodeStack.pop(), F = F.substring(0, F.lastIndexOf("."))), $ !== x.tagname && (F += F ? "." + $ : $), this.isItStopNode(this.options.stopNodes, F, $)) {
            let ae = "";
            if (V.length > 0 && V.lastIndexOf("/") === V.length - 1)
              $[$.length - 1] === "/" ? ($ = $.substr(0, $.length - 1), F = F.substr(0, F.length - 1), V = $) : V = V.substr(0, V.length - 1), j = B.closeIndex;
            else if (this.options.unpairedTags.indexOf($) !== -1)
              j = B.closeIndex;
            else {
              const re = this.readStopNodeData(A, q, ne + 1);
              if (!re) throw new Error(`Unexpected end of ${q}`);
              j = re.i, ae = re.tagContent;
            }
            const fe = new e($);
            $ !== V && oe && (fe[":@"] = this.buildAttributesMap(V, F, $)), ae && (ae = this.parseTextData(ae, $, F, !0, oe, !0, !0)), F = F.substr(0, F.lastIndexOf(".")), fe.add(this.options.textNodeName, ae), this.addChild(C, fe, F);
          } else {
            if (V.length > 0 && V.lastIndexOf("/") === V.length - 1) {
              $[$.length - 1] === "/" ? ($ = $.substr(0, $.length - 1), F = F.substr(0, F.length - 1), V = $) : V = V.substr(0, V.length - 1), this.options.transformTagName && ($ = this.options.transformTagName($));
              const ae = new e($);
              $ !== V && oe && (ae[":@"] = this.buildAttributesMap(V, F, $)), this.addChild(C, ae, F), F = F.substr(0, F.lastIndexOf("."));
            } else {
              const ae = new e($);
              this.tagsNodeStack.push(C), $ !== V && oe && (ae[":@"] = this.buildAttributesMap(V, F, $)), this.addChild(C, ae, F), C = ae;
            }
            P = "", j = ne;
          }
        }
      else
        P += A[j];
    return x.child;
  };
  function d(A, x, C) {
    const P = this.options.updateTag(x.tagname, C, x[":@"]);
    P === !1 || (typeof P == "string" && (x.tagname = P), A.addChild(x));
  }
  const m = function(A) {
    if (this.options.processEntities) {
      for (let x in this.docTypeEntities) {
        const C = this.docTypeEntities[x];
        A = A.replace(C.regx, C.val);
      }
      for (let x in this.lastEntities) {
        const C = this.lastEntities[x];
        A = A.replace(C.regex, C.val);
      }
      if (this.options.htmlEntities)
        for (let x in this.htmlEntities) {
          const C = this.htmlEntities[x];
          A = A.replace(C.regex, C.val);
        }
      A = A.replace(this.ampEntity.regex, this.ampEntity.val);
    }
    return A;
  };
  function y(A, x, C, P) {
    return A && (P === void 0 && (P = Object.keys(x.child).length === 0), A = this.parseTextData(
      A,
      x.tagname,
      C,
      !1,
      x[":@"] ? Object.keys(x[":@"]).length !== 0 : !1,
      P
    ), A !== void 0 && A !== "" && x.add(this.options.textNodeName, A), A = ""), A;
  }
  function v(A, x, C) {
    const P = "*." + C;
    for (const F in A) {
      const j = A[F];
      if (P === j || x === j) return !0;
    }
    return !1;
  }
  function _(A, x, C = ">") {
    let P, F = "";
    for (let j = x; j < A.length; j++) {
      let D = A[j];
      if (P)
        D === P && (P = "");
      else if (D === '"' || D === "'")
        P = D;
      else if (D === C[0])
        if (C[1]) {
          if (A[j + 1] === C[1])
            return {
              data: F,
              index: j
            };
        } else
          return {
            data: F,
            index: j
          };
      else D === "	" && (D = " ");
      F += D;
    }
  }
  function T(A, x, C, P) {
    const F = A.indexOf(x, C);
    if (F === -1)
      throw new Error(P);
    return F + x.length - 1;
  }
  function E(A, x, C, P = ">") {
    const F = _(A, x + 1, P);
    if (!F) return;
    let j = F.data;
    const D = F.index, B = j.search(/\s/);
    let $ = j, q = !0;
    B !== -1 && ($ = j.substring(0, B), j = j.substring(B + 1).trimStart());
    const V = $;
    if (C) {
      const oe = $.indexOf(":");
      oe !== -1 && ($ = $.substr(oe + 1), q = $ !== F.data.substr(oe + 1));
    }
    return {
      tagName: $,
      tagExp: j,
      closeIndex: D,
      attrExpPresent: q,
      rawTagName: V
    };
  }
  function I(A, x, C) {
    const P = C;
    let F = 1;
    for (; C < A.length; C++)
      if (A[C] === "<")
        if (A[C + 1] === "/") {
          const j = T(A, ">", C, `${x} is not closed`);
          if (A.substring(C + 2, j).trim() === x && (F--, F === 0))
            return {
              tagContent: A.substring(P, C),
              i: j
            };
          C = j;
        } else if (A[C + 1] === "?")
          C = T(A, "?>", C + 1, "StopNode is not closed.");
        else if (A.substr(C + 1, 3) === "!--")
          C = T(A, "-->", C + 3, "StopNode is not closed.");
        else if (A.substr(C + 1, 2) === "![")
          C = T(A, "]]>", C, "StopNode is not closed.") - 2;
        else {
          const j = E(A, C, ">");
          j && ((j && j.tagName) === x && j.tagExp[j.tagExp.length - 1] !== "/" && F++, C = j.closeIndex);
        }
  }
  function S(A, x, C) {
    if (x && typeof A == "string") {
      const P = A.trim();
      return P === "true" ? !0 : P === "false" ? !1 : i(A, C);
    } else
      return n.isExist(A) ? A : "";
  }
  return fi = a, fi;
}
var hi = {}, Ns;
function Vf() {
  if (Ns) return hi;
  Ns = 1;
  function n(a, h) {
    return e(a, h);
  }
  function e(a, h, c) {
    let u;
    const o = {};
    for (let s = 0; s < a.length; s++) {
      const g = a[s], d = r(g);
      let m = "";
      if (c === void 0 ? m = d : m = c + "." + d, d === h.textNodeName)
        u === void 0 ? u = g[d] : u += "" + g[d];
      else {
        if (d === void 0)
          continue;
        if (g[d]) {
          let y = e(g[d], h, m);
          const v = l(y, h);
          g[":@"] ? i(y, g[":@"], m, h) : Object.keys(y).length === 1 && y[h.textNodeName] !== void 0 && !h.alwaysCreateTextNode ? y = y[h.textNodeName] : Object.keys(y).length === 0 && (h.alwaysCreateTextNode ? y[h.textNodeName] = "" : y = ""), o[d] !== void 0 && o.hasOwnProperty(d) ? (Array.isArray(o[d]) || (o[d] = [o[d]]), o[d].push(y)) : h.isArray(d, m, v) ? o[d] = [y] : o[d] = y;
        }
      }
    }
    return typeof u == "string" ? u.length > 0 && (o[h.textNodeName] = u) : u !== void 0 && (o[h.textNodeName] = u), o;
  }
  function r(a) {
    const h = Object.keys(a);
    for (let c = 0; c < h.length; c++) {
      const u = h[c];
      if (u !== ":@") return u;
    }
  }
  function i(a, h, c, u) {
    if (h) {
      const o = Object.keys(h), s = o.length;
      for (let g = 0; g < s; g++) {
        const d = o[g];
        u.isArray(d, c + "." + d, !0, !0) ? a[d] = [h[d]] : a[d] = h[d];
      }
    }
  }
  function l(a, h) {
    const { textNodeName: c } = h, u = Object.keys(a).length;
    return !!(u === 0 || u === 1 && (a[c] || typeof a[c] == "boolean" || a[c] === 0));
  }
  return hi.prettify = n, hi;
}
var pi, As;
function Wf() {
  if (As) return pi;
  As = 1;
  const { buildOptions: n } = Bf(), e = qf(), { prettify: r } = Vf(), i = Ya();
  class l {
    constructor(h) {
      this.externalEntities = {}, this.options = n(h);
    }
    /**
     * Parse XML dats to JS object 
     * @param {string|Buffer} xmlData 
     * @param {boolean|Object} validationOption 
     */
    parse(h, c) {
      if (typeof h != "string") if (h.toString)
        h = h.toString();
      else
        throw new Error("XML data is accepted in String or Bytes[] form.");
      if (c) {
        c === !0 && (c = {});
        const s = i.validate(h, c);
        if (s !== !0)
          throw Error(`${s.err.msg}:${s.err.line}:${s.err.col}`);
      }
      const u = new e(this.options);
      u.addExternalEntities(this.externalEntities);
      const o = u.parseXml(h);
      return this.options.preserveOrder || o === void 0 ? o : r(o, this.options);
    }
    /**
     * Add Entity which is not by default supported by this library
     * @param {string} key 
     * @param {string} value 
     */
    addEntity(h, c) {
      if (c.indexOf("&") !== -1)
        throw new Error("Entity value can't have '&'");
      if (h.indexOf("&") !== -1 || h.indexOf(";") !== -1)
        throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
      if (c === "&")
        throw new Error("An entity with value '&' is not permitted");
      this.externalEntities[h] = c;
    }
  }
  return pi = l, pi;
}
var di, Ts;
function Xf() {
  if (Ts) return di;
  Ts = 1;
  const n = `
`;
  function e(c, u) {
    let o = "";
    return u.format && u.indentBy.length > 0 && (o = n), r(c, u, "", o);
  }
  function r(c, u, o, s) {
    let g = "", d = !1;
    for (let m = 0; m < c.length; m++) {
      const y = c[m], v = i(y);
      if (v === void 0) continue;
      let _ = "";
      if (o.length === 0 ? _ = v : _ = `${o}.${v}`, v === u.textNodeName) {
        let A = y[v];
        a(_, u) || (A = u.tagValueProcessor(v, A), A = h(A, u)), d && (g += s), g += A, d = !1;
        continue;
      } else if (v === u.cdataPropName) {
        d && (g += s), g += `<![CDATA[${y[v][0][u.textNodeName]}]]>`, d = !1;
        continue;
      } else if (v === u.commentPropName) {
        g += s + `<!--${y[v][0][u.textNodeName]}-->`, d = !0;
        continue;
      } else if (v[0] === "?") {
        const A = l(y[":@"], u), x = v === "?xml" ? "" : s;
        let C = y[v][0][u.textNodeName];
        C = C.length !== 0 ? " " + C : "", g += x + `<${v}${C}${A}?>`, d = !0;
        continue;
      }
      let T = s;
      T !== "" && (T += u.indentBy);
      const E = l(y[":@"], u), I = s + `<${v}${E}`, S = r(y[v], u, _, T);
      u.unpairedTags.indexOf(v) !== -1 ? u.suppressUnpairedNode ? g += I + ">" : g += I + "/>" : (!S || S.length === 0) && u.suppressEmptyNode ? g += I + "/>" : S && S.endsWith(">") ? g += I + `>${S}${s}</${v}>` : (g += I + ">", S && s !== "" && (S.includes("/>") || S.includes("</")) ? g += s + u.indentBy + S + s : g += S, g += `</${v}>`), d = !0;
    }
    return g;
  }
  function i(c) {
    const u = Object.keys(c);
    for (let o = 0; o < u.length; o++) {
      const s = u[o];
      if (c.hasOwnProperty(s) && s !== ":@")
        return s;
    }
  }
  function l(c, u) {
    let o = "";
    if (c && !u.ignoreAttributes)
      for (let s in c) {
        if (!c.hasOwnProperty(s)) continue;
        let g = u.attributeValueProcessor(s, c[s]);
        g = h(g, u), g === !0 && u.suppressBooleanAttributes ? o += ` ${s.substr(u.attributeNamePrefix.length)}` : o += ` ${s.substr(u.attributeNamePrefix.length)}="${g}"`;
      }
    return o;
  }
  function a(c, u) {
    c = c.substr(0, c.length - u.textNodeName.length - 1);
    let o = c.substr(c.lastIndexOf(".") + 1);
    for (let s in u.stopNodes)
      if (u.stopNodes[s] === c || u.stopNodes[s] === "*." + o) return !0;
    return !1;
  }
  function h(c, u) {
    if (c && c.length > 0 && u.processEntities)
      for (let o = 0; o < u.entities.length; o++) {
        const s = u.entities[o];
        c = c.replace(s.regex, s.val);
      }
    return c;
  }
  return di = e, di;
}
var gi, Is;
function zf() {
  if (Is) return gi;
  Is = 1;
  const n = Xf(), e = Za(), r = {
    attributeNamePrefix: "@_",
    attributesGroupName: !1,
    textNodeName: "#text",
    ignoreAttributes: !0,
    cdataPropName: !1,
    format: !1,
    indentBy: "  ",
    suppressEmptyNode: !1,
    suppressUnpairedNode: !0,
    suppressBooleanAttributes: !0,
    tagValueProcessor: function(c, u) {
      return u;
    },
    attributeValueProcessor: function(c, u) {
      return u;
    },
    preserveOrder: !1,
    commentPropName: !1,
    unpairedTags: [],
    entities: [
      { regex: new RegExp("&", "g"), val: "&amp;" },
      //it must be on top
      { regex: new RegExp(">", "g"), val: "&gt;" },
      { regex: new RegExp("<", "g"), val: "&lt;" },
      { regex: new RegExp("'", "g"), val: "&apos;" },
      { regex: new RegExp('"', "g"), val: "&quot;" }
    ],
    processEntities: !0,
    stopNodes: [],
    // transformTagName: false,
    // transformAttributeName: false,
    oneListGroup: !1
  };
  function i(c) {
    this.options = Object.assign({}, r, c), this.options.ignoreAttributes === !0 || this.options.attributesGroupName ? this.isAttribute = function() {
      return !1;
    } : (this.ignoreAttributesFn = e(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = h), this.processTextOrObjNode = l, this.options.format ? (this.indentate = a, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
      return "";
    }, this.tagEndChar = ">", this.newLine = "");
  }
  i.prototype.build = function(c) {
    return this.options.preserveOrder ? n(c, this.options) : (Array.isArray(c) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (c = {
      [this.options.arrayNodeName]: c
    }), this.j2x(c, 0, []).val);
  }, i.prototype.j2x = function(c, u, o) {
    let s = "", g = "";
    const d = o.join(".");
    for (let m in c)
      if (Object.prototype.hasOwnProperty.call(c, m))
        if (typeof c[m] > "u")
          this.isAttribute(m) && (g += "");
        else if (c[m] === null)
          this.isAttribute(m) ? g += "" : m[0] === "?" ? g += this.indentate(u) + "<" + m + "?" + this.tagEndChar : g += this.indentate(u) + "<" + m + "/" + this.tagEndChar;
        else if (c[m] instanceof Date)
          g += this.buildTextValNode(c[m], m, "", u);
        else if (typeof c[m] != "object") {
          const y = this.isAttribute(m);
          if (y && !this.ignoreAttributesFn(y, d))
            s += this.buildAttrPairStr(y, "" + c[m]);
          else if (!y)
            if (m === this.options.textNodeName) {
              let v = this.options.tagValueProcessor(m, "" + c[m]);
              g += this.replaceEntitiesValue(v);
            } else
              g += this.buildTextValNode(c[m], m, "", u);
        } else if (Array.isArray(c[m])) {
          const y = c[m].length;
          let v = "", _ = "";
          for (let T = 0; T < y; T++) {
            const E = c[m][T];
            if (!(typeof E > "u")) if (E === null)
              m[0] === "?" ? g += this.indentate(u) + "<" + m + "?" + this.tagEndChar : g += this.indentate(u) + "<" + m + "/" + this.tagEndChar;
            else if (typeof E == "object")
              if (this.options.oneListGroup) {
                const I = this.j2x(E, u + 1, o.concat(m));
                v += I.val, this.options.attributesGroupName && E.hasOwnProperty(this.options.attributesGroupName) && (_ += I.attrStr);
              } else
                v += this.processTextOrObjNode(E, m, u, o);
            else if (this.options.oneListGroup) {
              let I = this.options.tagValueProcessor(m, E);
              I = this.replaceEntitiesValue(I), v += I;
            } else
              v += this.buildTextValNode(E, m, "", u);
          }
          this.options.oneListGroup && (v = this.buildObjectNode(v, m, _, u)), g += v;
        } else if (this.options.attributesGroupName && m === this.options.attributesGroupName) {
          const y = Object.keys(c[m]), v = y.length;
          for (let _ = 0; _ < v; _++)
            s += this.buildAttrPairStr(y[_], "" + c[m][y[_]]);
        } else
          g += this.processTextOrObjNode(c[m], m, u, o);
    return { attrStr: s, val: g };
  }, i.prototype.buildAttrPairStr = function(c, u) {
    return u = this.options.attributeValueProcessor(c, "" + u), u = this.replaceEntitiesValue(u), this.options.suppressBooleanAttributes && u === "true" ? " " + c : " " + c + '="' + u + '"';
  };
  function l(c, u, o, s) {
    const g = this.j2x(c, o + 1, s.concat(u));
    return c[this.options.textNodeName] !== void 0 && Object.keys(c).length === 1 ? this.buildTextValNode(c[this.options.textNodeName], u, g.attrStr, o) : this.buildObjectNode(g.val, u, g.attrStr, o);
  }
  i.prototype.buildObjectNode = function(c, u, o, s) {
    if (c === "")
      return u[0] === "?" ? this.indentate(s) + "<" + u + o + "?" + this.tagEndChar : this.indentate(s) + "<" + u + o + this.closeTag(u) + this.tagEndChar;
    {
      let g = "</" + u + this.tagEndChar, d = "";
      return u[0] === "?" && (d = "?", g = ""), (o || o === "") && c.indexOf("<") === -1 ? this.indentate(s) + "<" + u + o + d + ">" + c + g : this.options.commentPropName !== !1 && u === this.options.commentPropName && d.length === 0 ? this.indentate(s) + `<!--${c}-->` + this.newLine : this.indentate(s) + "<" + u + o + d + this.tagEndChar + c + this.indentate(s) + g;
    }
  }, i.prototype.closeTag = function(c) {
    let u = "";
    return this.options.unpairedTags.indexOf(c) !== -1 ? this.options.suppressUnpairedNode || (u = "/") : this.options.suppressEmptyNode ? u = "/" : u = `></${c}`, u;
  }, i.prototype.buildTextValNode = function(c, u, o, s) {
    if (this.options.cdataPropName !== !1 && u === this.options.cdataPropName)
      return this.indentate(s) + `<![CDATA[${c}]]>` + this.newLine;
    if (this.options.commentPropName !== !1 && u === this.options.commentPropName)
      return this.indentate(s) + `<!--${c}-->` + this.newLine;
    if (u[0] === "?")
      return this.indentate(s) + "<" + u + o + "?" + this.tagEndChar;
    {
      let g = this.options.tagValueProcessor(u, c);
      return g = this.replaceEntitiesValue(g), g === "" ? this.indentate(s) + "<" + u + o + this.closeTag(u) + this.tagEndChar : this.indentate(s) + "<" + u + o + ">" + g + "</" + u + this.tagEndChar;
    }
  }, i.prototype.replaceEntitiesValue = function(c) {
    if (c && c.length > 0 && this.options.processEntities)
      for (let u = 0; u < this.options.entities.length; u++) {
        const o = this.options.entities[u];
        c = c.replace(o.regex, o.val);
      }
    return c;
  };
  function a(c) {
    return this.options.indentBy.repeat(c);
  }
  function h(c) {
    return c.startsWith(this.options.attributeNamePrefix) && c !== this.options.textNodeName ? c.substr(this.attrPrefixLen) : !1;
  }
  return gi = i, gi;
}
var mi, _s;
function Hf() {
  if (_s) return mi;
  _s = 1;
  const n = Ya(), e = Wf(), r = zf();
  return mi = {
    XMLParser: e,
    XMLValidator: n,
    XMLBuilder: r
  }, mi;
}
Hf();
var yi, Os;
function Ja() {
  return Os || (Os = 1, yi = typeof qe == "object" && qe.env && qe.env.NODE_DEBUG && /\bsemver\b/i.test(qe.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
  }), yi;
}
var wi, Rs;
function Ka() {
  if (Rs) return wi;
  Rs = 1;
  const n = "2.0.0", e = 256, r = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, l = e - 6;
  return wi = {
    MAX_LENGTH: e,
    MAX_SAFE_COMPONENT_LENGTH: i,
    MAX_SAFE_BUILD_LENGTH: l,
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
  }, wi;
}
var pn = { exports: {} }, xs;
function Yf() {
  return xs || (xs = 1, function(n, e) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: r,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: l
    } = Ka(), a = Ja();
    e = n.exports = {};
    const h = e.re = [], c = e.safeRe = [], u = e.src = [], o = e.t = {};
    let s = 0;
    const g = "[a-zA-Z0-9-]", d = [
      ["\\s", 1],
      ["\\d", l],
      [g, i]
    ], m = (v) => {
      for (const [_, T] of d)
        v = v.split(`${_}*`).join(`${_}{0,${T}}`).split(`${_}+`).join(`${_}{1,${T}}`);
      return v;
    }, y = (v, _, T) => {
      const E = m(_), I = s++;
      a(v, I, _), o[v] = I, u[I] = _, h[I] = new RegExp(_, T ? "g" : void 0), c[I] = new RegExp(E, T ? "g" : void 0);
    };
    y("NUMERICIDENTIFIER", "0|[1-9]\\d*"), y("NUMERICIDENTIFIERLOOSE", "\\d+"), y("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${g}*`), y("MAINVERSION", `(${u[o.NUMERICIDENTIFIER]})\\.(${u[o.NUMERICIDENTIFIER]})\\.(${u[o.NUMERICIDENTIFIER]})`), y("MAINVERSIONLOOSE", `(${u[o.NUMERICIDENTIFIERLOOSE]})\\.(${u[o.NUMERICIDENTIFIERLOOSE]})\\.(${u[o.NUMERICIDENTIFIERLOOSE]})`), y("PRERELEASEIDENTIFIER", `(?:${u[o.NUMERICIDENTIFIER]}|${u[o.NONNUMERICIDENTIFIER]})`), y("PRERELEASEIDENTIFIERLOOSE", `(?:${u[o.NUMERICIDENTIFIERLOOSE]}|${u[o.NONNUMERICIDENTIFIER]})`), y("PRERELEASE", `(?:-(${u[o.PRERELEASEIDENTIFIER]}(?:\\.${u[o.PRERELEASEIDENTIFIER]})*))`), y("PRERELEASELOOSE", `(?:-?(${u[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[o.PRERELEASEIDENTIFIERLOOSE]})*))`), y("BUILDIDENTIFIER", `${g}+`), y("BUILD", `(?:\\+(${u[o.BUILDIDENTIFIER]}(?:\\.${u[o.BUILDIDENTIFIER]})*))`), y("FULLPLAIN", `v?${u[o.MAINVERSION]}${u[o.PRERELEASE]}?${u[o.BUILD]}?`), y("FULL", `^${u[o.FULLPLAIN]}$`), y("LOOSEPLAIN", `[v=\\s]*${u[o.MAINVERSIONLOOSE]}${u[o.PRERELEASELOOSE]}?${u[o.BUILD]}?`), y("LOOSE", `^${u[o.LOOSEPLAIN]}$`), y("GTLT", "((?:<|>)?=?)"), y("XRANGEIDENTIFIERLOOSE", `${u[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), y("XRANGEIDENTIFIER", `${u[o.NUMERICIDENTIFIER]}|x|X|\\*`), y("XRANGEPLAIN", `[v=\\s]*(${u[o.XRANGEIDENTIFIER]})(?:\\.(${u[o.XRANGEIDENTIFIER]})(?:\\.(${u[o.XRANGEIDENTIFIER]})(?:${u[o.PRERELEASE]})?${u[o.BUILD]}?)?)?`), y("XRANGEPLAINLOOSE", `[v=\\s]*(${u[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[o.XRANGEIDENTIFIERLOOSE]})(?:${u[o.PRERELEASELOOSE]})?${u[o.BUILD]}?)?)?`), y("XRANGE", `^${u[o.GTLT]}\\s*${u[o.XRANGEPLAIN]}$`), y("XRANGELOOSE", `^${u[o.GTLT]}\\s*${u[o.XRANGEPLAINLOOSE]}$`), y("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), y("COERCE", `${u[o.COERCEPLAIN]}(?:$|[^\\d])`), y("COERCEFULL", u[o.COERCEPLAIN] + `(?:${u[o.PRERELEASE]})?(?:${u[o.BUILD]})?(?:$|[^\\d])`), y("COERCERTL", u[o.COERCE], !0), y("COERCERTLFULL", u[o.COERCEFULL], !0), y("LONETILDE", "(?:~>?)"), y("TILDETRIM", `(\\s*)${u[o.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", y("TILDE", `^${u[o.LONETILDE]}${u[o.XRANGEPLAIN]}$`), y("TILDELOOSE", `^${u[o.LONETILDE]}${u[o.XRANGEPLAINLOOSE]}$`), y("LONECARET", "(?:\\^)"), y("CARETTRIM", `(\\s*)${u[o.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", y("CARET", `^${u[o.LONECARET]}${u[o.XRANGEPLAIN]}$`), y("CARETLOOSE", `^${u[o.LONECARET]}${u[o.XRANGEPLAINLOOSE]}$`), y("COMPARATORLOOSE", `^${u[o.GTLT]}\\s*(${u[o.LOOSEPLAIN]})$|^$`), y("COMPARATOR", `^${u[o.GTLT]}\\s*(${u[o.FULLPLAIN]})$|^$`), y("COMPARATORTRIM", `(\\s*)${u[o.GTLT]}\\s*(${u[o.LOOSEPLAIN]}|${u[o.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", y("HYPHENRANGE", `^\\s*(${u[o.XRANGEPLAIN]})\\s+-\\s+(${u[o.XRANGEPLAIN]})\\s*$`), y("HYPHENRANGELOOSE", `^\\s*(${u[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[o.XRANGEPLAINLOOSE]})\\s*$`), y("STAR", "(<|>)?=?\\s*\\*"), y("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), y("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }(pn, pn.exports)), pn.exports;
}
var Ei, Ss;
function Zf() {
  if (Ss) return Ei;
  Ss = 1;
  const n = Object.freeze({ loose: !0 }), e = Object.freeze({});
  return Ei = (i) => i ? typeof i != "object" ? n : i : e, Ei;
}
var vi, Cs;
function Jf() {
  if (Cs) return vi;
  Cs = 1;
  const n = /^[0-9]+$/, e = (i, l) => {
    const a = n.test(i), h = n.test(l);
    return a && h && (i = +i, l = +l), i === l ? 0 : a && !h ? -1 : h && !a ? 1 : i < l ? -1 : 1;
  };
  return vi = {
    compareIdentifiers: e,
    rcompareIdentifiers: (i, l) => e(l, i)
  }, vi;
}
var bi, Ls;
function Qa() {
  if (Ls) return bi;
  Ls = 1;
  const n = Ja(), { MAX_LENGTH: e, MAX_SAFE_INTEGER: r } = Ka(), { safeRe: i, t: l } = Yf(), a = Zf(), { compareIdentifiers: h } = Jf();
  class c {
    constructor(o, s) {
      if (s = a(s), o instanceof c) {
        if (o.loose === !!s.loose && o.includePrerelease === !!s.includePrerelease)
          return o;
        o = o.version;
      } else if (typeof o != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof o}".`);
      if (o.length > e)
        throw new TypeError(
          `version is longer than ${e} characters`
        );
      n("SemVer", o, s), this.options = s, this.loose = !!s.loose, this.includePrerelease = !!s.includePrerelease;
      const g = o.trim().match(s.loose ? i[l.LOOSE] : i[l.FULL]);
      if (!g)
        throw new TypeError(`Invalid Version: ${o}`);
      if (this.raw = o, this.major = +g[1], this.minor = +g[2], this.patch = +g[3], this.major > r || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > r || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > r || this.patch < 0)
        throw new TypeError("Invalid patch version");
      g[4] ? this.prerelease = g[4].split(".").map((d) => {
        if (/^[0-9]+$/.test(d)) {
          const m = +d;
          if (m >= 0 && m < r)
            return m;
        }
        return d;
      }) : this.prerelease = [], this.build = g[5] ? g[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(o) {
      if (n("SemVer.compare", this.version, this.options, o), !(o instanceof c)) {
        if (typeof o == "string" && o === this.version)
          return 0;
        o = new c(o, this.options);
      }
      return o.version === this.version ? 0 : this.compareMain(o) || this.comparePre(o);
    }
    compareMain(o) {
      return o instanceof c || (o = new c(o, this.options)), h(this.major, o.major) || h(this.minor, o.minor) || h(this.patch, o.patch);
    }
    comparePre(o) {
      if (o instanceof c || (o = new c(o, this.options)), this.prerelease.length && !o.prerelease.length)
        return -1;
      if (!this.prerelease.length && o.prerelease.length)
        return 1;
      if (!this.prerelease.length && !o.prerelease.length)
        return 0;
      let s = 0;
      do {
        const g = this.prerelease[s], d = o.prerelease[s];
        if (n("prerelease compare", s, g, d), g === void 0 && d === void 0)
          return 0;
        if (d === void 0)
          return 1;
        if (g === void 0)
          return -1;
        if (g === d)
          continue;
        return h(g, d);
      } while (++s);
    }
    compareBuild(o) {
      o instanceof c || (o = new c(o, this.options));
      let s = 0;
      do {
        const g = this.build[s], d = o.build[s];
        if (n("build compare", s, g, d), g === void 0 && d === void 0)
          return 0;
        if (d === void 0)
          return 1;
        if (g === void 0)
          return -1;
        if (g === d)
          continue;
        return h(g, d);
      } while (++s);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(o, s, g) {
      switch (o) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", s, g);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", s, g);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", s, g), this.inc("pre", s, g);
          break;
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", s, g), this.inc("pre", s, g);
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
          const d = Number(g) ? 1 : 0;
          if (!s && g === !1)
            throw new Error("invalid increment argument: identifier is empty");
          if (this.prerelease.length === 0)
            this.prerelease = [d];
          else {
            let m = this.prerelease.length;
            for (; --m >= 0; )
              typeof this.prerelease[m] == "number" && (this.prerelease[m]++, m = -2);
            if (m === -1) {
              if (s === this.prerelease.join(".") && g === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(d);
            }
          }
          if (s) {
            let m = [s, d];
            g === !1 && (m = [s]), h(this.prerelease[0], s) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = m) : this.prerelease = m;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${o}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return bi = c, bi;
}
var Ni, Ps;
function Kf() {
  if (Ps) return Ni;
  Ps = 1;
  const n = Qa();
  return Ni = (r, i, l = !1) => {
    if (r instanceof n)
      return r;
    try {
      return new n(r, i);
    } catch (a) {
      if (!l)
        return null;
      throw a;
    }
  }, Ni;
}
var Ai, $s;
function Qf() {
  if ($s) return Ai;
  $s = 1;
  const n = Kf();
  return Ai = (r, i) => {
    const l = n(r, i);
    return l ? l.version : null;
  }, Ai;
}
Qf();
var Ti, Fs;
function eh() {
  if (Fs) return Ti;
  Fs = 1;
  const n = Qa();
  return Ti = (r, i) => new n(r, i).major, Ti;
}
eh();
const th = function(n) {
  return Uf().registerEntry(n);
};
class wt {
  static getFileConfig({
    name: e,
    url: r,
    downloadUrl: i,
    dir: l,
    onCreate: a,
    fileModifiedTime: h,
    isNew: c,
    isLoaded: u,
    sameWindow: o,
    skipConfirmation: s
  } = {}) {
    return {
      name: e || "?",
      downloadUrl: i || "",
      url: r ? He(r) : "",
      dir: l || "",
      onCreate: a,
      fileModifiedTime: h || null,
      isNew: c || !1,
      isLoaded: u || !1,
      sameWindow: o || !1,
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
  static async save({ fileContent: e, name: r, fileModifiedTime: i, dir: l } = {}) {
    let a = `${l}${r}`;
    l !== "/" && (a = `${l}/${r}`);
    const h = await window.fetch(window.OC.generateUrl("/apps/files_linkeditor/ajax/savefile"), {
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
    if (h && h.ok)
      return !0;
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static userCanEdit(e) {
    var r, i, l, a;
    return window.FileList && window.OC && window.OC.currentUser && (window.OC.PERMISSION_ALL === ((i = (r = window.FileList) == null ? void 0 : r.getDirectoryPermissions) == null ? void 0 : i.call(r)) || window.OC.PERMISSION_UPDATE === ((a = (l = window.FileList) == null ? void 0 : l.getDirectoryPermissions) == null ? void 0 : a.call(l))) || e >= Ue.UPDATE && e < Ue.SHARE;
  }
}
const lt = na(""), Ft = na(wt.getFileConfig());
function ks(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "You are about to visit:") + ""
  ), i, l, a, h, c = (
    /*file*/
    n[0].url + ""
  ), u, o, s;
  return {
    c() {
      e = ue("p"), i = Be(r), l = be(), a = ue("em"), h = ue("a"), u = Be(c), H(h, "href", o = He(
        /*file*/
        n[0].url
      )), H(h, "target", s = /*file*/
      n[0].sameWindow ? "_self" : "_blank"), H(e, "class", "urldisplay");
    },
    m(g, d) {
      me(g, e, d), ee(e, i), ee(e, l), ee(e, a), ee(a, h), ee(h, u);
    },
    p(g, d) {
      d & /*file*/
      1 && c !== (c = /*file*/
      g[0].url + "") && ji(u, c), d & /*file*/
      1 && o !== (o = He(
        /*file*/
        g[0].url
      )) && H(h, "href", o), d & /*file*/
      1 && s !== (s = /*file*/
      g[0].sameWindow ? "_self" : "_blank") && H(h, "target", s);
    },
    d(g) {
      g && de(e);
    }
  };
}
function Ms(n) {
  let e = wt.userCanEdit(
    /*file*/
    n[0].permissions
  ), r, i, l = (
    /*t*/
    n[2]("files_linkeditor", "Visit link") + ""
  ), a, h, c, u = e && Us(n);
  return {
    c() {
      u && u.c(), r = be(), i = ue("a"), a = Be(l), H(i, "href", h = He(
        /*file*/
        n[0].url
      )), H(i, "target", c = /*file*/
      n[0].sameWindow ? "_self" : "_blank"), H(i, "class", "button primary");
    },
    m(o, s) {
      u && u.m(o, s), me(o, r, s), me(o, i, s), ee(i, a);
    },
    p(o, s) {
      s & /*file*/
      1 && (e = wt.userCanEdit(
        /*file*/
        o[0].permissions
      )), e ? u ? u.p(o, s) : (u = Us(o), u.c(), u.m(r.parentNode, r)) : u && (u.d(1), u = null), s & /*file*/
      1 && h !== (h = He(
        /*file*/
        o[0].url
      )) && H(i, "href", h), s & /*file*/
      1 && c !== (c = /*file*/
      o[0].sameWindow ? "_self" : "_blank") && H(i, "target", c);
    },
    d(o) {
      o && (de(r), de(i)), u && u.d(o);
    }
  };
}
function Us(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Edit link") + ""
  ), i, l, a;
  return {
    c() {
      e = ue("a"), i = Be(r), H(e, "href", window.location.href), H(e, "class", "button");
    },
    m(h, c) {
      me(h, e, c), ee(e, i), l || (a = nt(e, "click", Vt(
        /*click_handler_1*/
        n[4]
      )), l = !0);
    },
    p: kt,
    d(h) {
      h && de(e), l = !1, a();
    }
  };
}
function rh(n) {
  let e, r, i = (
    /*file*/
    n[0].name + ""
  ), l, a, h, c, u, o = (
    /*t*/
    n[2]("files_linkeditor", "Cancel") + ""
  ), s, g, d, m, y = !/*loading*/
  n[1] && ks(n), v = !/*loading*/
  n[1] && Ms(n);
  return {
    c() {
      e = ue("div"), r = ue("h3"), l = Be(i), a = be(), y && y.c(), h = be(), c = ue("div"), u = ue("a"), s = Be(o), g = be(), v && v.c(), H(e, "class", "edit push-bottom"), H(u, "href", window.location.href), H(u, "class", "button"), H(c, "class", "oc-dialog-buttonrow twobuttons");
    },
    m(_, T) {
      me(_, e, T), ee(e, r), ee(r, l), ee(e, a), y && y.m(e, null), me(_, h, T), me(_, c, T), ee(c, u), ee(u, s), ee(c, g), v && v.m(c, null), d || (m = nt(u, "click", Vt(
        /*click_handler*/
        n[3]
      )), d = !0);
    },
    p(_, T) {
      T & /*file*/
      1 && i !== (i = /*file*/
      _[0].name + "") && ji(l, i), /*loading*/
      _[1] ? y && (y.d(1), y = null) : y ? y.p(_, T) : (y = ks(_), y.c(), y.m(e, null)), /*loading*/
      _[1] ? v && (v.d(1), v = null) : v ? v.p(_, T) : (v = Ms(_), v.c(), v.m(c, null));
    },
    d(_) {
      _ && (de(e), de(h), de(c)), y && y.d(), v && v.d(), d = !1, m();
    }
  };
}
function nh(n) {
  let e, r;
  return e = new qi({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [rh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      $r(e.$$.fragment);
    },
    m(i, l) {
      mr(e, i, l), r = !0;
    },
    p(i, [l]) {
      const a = {};
      l & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), l & /*$$scope, file, loading*/
      67 && (a.$$scope = { dirty: l, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (Me(e.$$.fragment, i), r = !0);
    },
    o(i) {
      ut(e.$$.fragment, i), r = !1;
    },
    d(i) {
      yr(e, i);
    }
  };
}
function ih(n, e, r) {
  let i, l;
  const a = window.t;
  let h;
  Sn(() => {
    h = Ft.subscribe(async (o) => {
      if (r(0, i = o), i && i.isLoaded) {
        if (r(1, l = !1), !i.url) {
          OC.dialogs.alert(a("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."), a("files_linkeditor", "A slight problem"));
          return;
        }
        i.skipConfirmation && i.sameWindow && window.OC.currentUser && (window.location.href = i.url, lt.update(() => "none"));
      }
    });
  }), Cn(() => {
    h();
  });
  const c = () => {
    lt.update(() => "none");
  }, u = () => {
    lt.update(() => "edit");
  };
  return r(0, i = wt.getFileConfig()), r(1, l = !0), [i, l, a, c, u];
}
class oh extends kr {
  constructor(e) {
    super(), Fr(this, e, ih, nh, gr, {});
  }
}
var eu = { exports: {} };
(function(n) {
  var e = function(r) {
    var i = 1e7, l = 7, a = 9007199254740992, h = y(a), c = "0123456789abcdefghijklmnopqrstuvwxyz", u = typeof BigInt == "function";
    function o(b, O, L, U) {
      return typeof b > "u" ? o[0] : typeof O < "u" ? +O == 10 && !L ? Z(b) : et(b, O, L, U) : Z(b);
    }
    function s(b, O) {
      this.value = b, this.sign = O, this.isSmall = !1;
    }
    s.prototype = Object.create(o.prototype);
    function g(b) {
      this.value = b, this.sign = b < 0, this.isSmall = !0;
    }
    g.prototype = Object.create(o.prototype);
    function d(b) {
      this.value = b;
    }
    d.prototype = Object.create(o.prototype);
    function m(b) {
      return -9007199254740992 < b && b < a;
    }
    function y(b) {
      return b < 1e7 ? [b] : b < 1e14 ? [b % 1e7, Math.floor(b / 1e7)] : [b % 1e7, Math.floor(b / 1e7) % 1e7, Math.floor(b / 1e14)];
    }
    function v(b) {
      _(b);
      var O = b.length;
      if (O < 4 && fe(b, h) < 0)
        switch (O) {
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
    function _(b) {
      for (var O = b.length; b[--O] === 0; ) ;
      b.length = O + 1;
    }
    function T(b) {
      for (var O = new Array(b), L = -1; ++L < b; )
        O[L] = 0;
      return O;
    }
    function E(b) {
      return b > 0 ? Math.floor(b) : Math.ceil(b);
    }
    function I(b, O) {
      var L = b.length, U = O.length, w = new Array(L), f = 0, p = i, N, R;
      for (R = 0; R < U; R++)
        N = b[R] + O[R] + f, f = N >= p ? 1 : 0, w[R] = N - f * p;
      for (; R < L; )
        N = b[R] + f, f = N === p ? 1 : 0, w[R++] = N - f * p;
      return f > 0 && w.push(f), w;
    }
    function S(b, O) {
      return b.length >= O.length ? I(b, O) : I(O, b);
    }
    function A(b, O) {
      var L = b.length, U = new Array(L), w = i, f, p;
      for (p = 0; p < L; p++)
        f = b[p] - w + O, O = Math.floor(f / w), U[p] = f - O * w, O += 1;
      for (; O > 0; )
        U[p++] = O % w, O = Math.floor(O / w);
      return U;
    }
    s.prototype.add = function(b) {
      var O = Z(b);
      if (this.sign !== O.sign)
        return this.subtract(O.negate());
      var L = this.value, U = O.value;
      return O.isSmall ? new s(A(L, Math.abs(U)), this.sign) : new s(S(L, U), this.sign);
    }, s.prototype.plus = s.prototype.add, g.prototype.add = function(b) {
      var O = Z(b), L = this.value;
      if (L < 0 !== O.sign)
        return this.subtract(O.negate());
      var U = O.value;
      if (O.isSmall) {
        if (m(L + U)) return new g(L + U);
        U = y(Math.abs(U));
      }
      return new s(A(U, Math.abs(L)), L < 0);
    }, g.prototype.plus = g.prototype.add, d.prototype.add = function(b) {
      return new d(this.value + Z(b).value);
    }, d.prototype.plus = d.prototype.add;
    function x(b, O) {
      var L = b.length, U = O.length, w = new Array(L), f = 0, p = i, N, R;
      for (N = 0; N < U; N++)
        R = b[N] - f - O[N], R < 0 ? (R += p, f = 1) : f = 0, w[N] = R;
      for (N = U; N < L; N++) {
        if (R = b[N] - f, R < 0) R += p;
        else {
          w[N++] = R;
          break;
        }
        w[N] = R;
      }
      for (; N < L; N++)
        w[N] = b[N];
      return _(w), w;
    }
    function C(b, O, L) {
      var U;
      return fe(b, O) >= 0 ? U = x(b, O) : (U = x(O, b), L = !L), U = v(U), typeof U == "number" ? (L && (U = -U), new g(U)) : new s(U, L);
    }
    function P(b, O, L) {
      var U = b.length, w = new Array(U), f = -O, p = i, N, R;
      for (N = 0; N < U; N++)
        R = b[N] + f, f = Math.floor(R / p), R %= p, w[N] = R < 0 ? R + p : R;
      return w = v(w), typeof w == "number" ? (L && (w = -w), new g(w)) : new s(w, L);
    }
    s.prototype.subtract = function(b) {
      var O = Z(b);
      if (this.sign !== O.sign)
        return this.add(O.negate());
      var L = this.value, U = O.value;
      return O.isSmall ? P(L, Math.abs(U), this.sign) : C(L, U, this.sign);
    }, s.prototype.minus = s.prototype.subtract, g.prototype.subtract = function(b) {
      var O = Z(b), L = this.value;
      if (L < 0 !== O.sign)
        return this.add(O.negate());
      var U = O.value;
      return O.isSmall ? new g(L - U) : P(U, Math.abs(L), L >= 0);
    }, g.prototype.minus = g.prototype.subtract, d.prototype.subtract = function(b) {
      return new d(this.value - Z(b).value);
    }, d.prototype.minus = d.prototype.subtract, s.prototype.negate = function() {
      return new s(this.value, !this.sign);
    }, g.prototype.negate = function() {
      var b = this.sign, O = new g(-this.value);
      return O.sign = !b, O;
    }, d.prototype.negate = function() {
      return new d(-this.value);
    }, s.prototype.abs = function() {
      return new s(this.value, !1);
    }, g.prototype.abs = function() {
      return new g(Math.abs(this.value));
    }, d.prototype.abs = function() {
      return new d(this.value >= 0 ? this.value : -this.value);
    };
    function F(b, O) {
      var L = b.length, U = O.length, w = L + U, f = T(w), p = i, N, R, k, G, X;
      for (k = 0; k < L; ++k) {
        G = b[k];
        for (var J = 0; J < U; ++J)
          X = O[J], N = G * X + f[k + J], R = Math.floor(N / p), f[k + J] = N - R * p, f[k + J + 1] += R;
      }
      return _(f), f;
    }
    function j(b, O) {
      var L = b.length, U = new Array(L), w = i, f = 0, p, N;
      for (N = 0; N < L; N++)
        p = b[N] * O + f, f = Math.floor(p / w), U[N] = p - f * w;
      for (; f > 0; )
        U[N++] = f % w, f = Math.floor(f / w);
      return U;
    }
    function D(b, O) {
      for (var L = []; O-- > 0; ) L.push(0);
      return L.concat(b);
    }
    function B(b, O) {
      var L = Math.max(b.length, O.length);
      if (L <= 30) return F(b, O);
      L = Math.ceil(L / 2);
      var U = b.slice(L), w = b.slice(0, L), f = O.slice(L), p = O.slice(0, L), N = B(w, p), R = B(U, f), k = B(S(w, U), S(p, f)), G = S(S(N, D(x(x(k, N), R), L)), D(R, 2 * L));
      return _(G), G;
    }
    function $(b, O) {
      return -0.012 * b - 0.012 * O + 15e-6 * b * O > 0;
    }
    s.prototype.multiply = function(b) {
      var O = Z(b), L = this.value, U = O.value, w = this.sign !== O.sign, f;
      if (O.isSmall) {
        if (U === 0) return o[0];
        if (U === 1) return this;
        if (U === -1) return this.negate();
        if (f = Math.abs(U), f < i)
          return new s(j(L, f), w);
        U = y(f);
      }
      return $(L.length, U.length) ? new s(B(L, U), w) : new s(F(L, U), w);
    }, s.prototype.times = s.prototype.multiply;
    function q(b, O, L) {
      return b < i ? new s(j(O, b), L) : new s(F(O, y(b)), L);
    }
    g.prototype._multiplyBySmall = function(b) {
      return m(b.value * this.value) ? new g(b.value * this.value) : q(Math.abs(b.value), y(Math.abs(this.value)), this.sign !== b.sign);
    }, s.prototype._multiplyBySmall = function(b) {
      return b.value === 0 ? o[0] : b.value === 1 ? this : b.value === -1 ? this.negate() : q(Math.abs(b.value), this.value, this.sign !== b.sign);
    }, g.prototype.multiply = function(b) {
      return Z(b)._multiplyBySmall(this);
    }, g.prototype.times = g.prototype.multiply, d.prototype.multiply = function(b) {
      return new d(this.value * Z(b).value);
    }, d.prototype.times = d.prototype.multiply;
    function V(b) {
      var O = b.length, L = T(O + O), U = i, w, f, p, N, R;
      for (p = 0; p < O; p++) {
        N = b[p], f = 0 - N * N;
        for (var k = p; k < O; k++)
          R = b[k], w = 2 * (N * R) + L[p + k] + f, f = Math.floor(w / U), L[p + k] = w - f * U;
        L[p + O] = f;
      }
      return _(L), L;
    }
    s.prototype.square = function() {
      return new s(V(this.value), !1);
    }, g.prototype.square = function() {
      var b = this.value * this.value;
      return m(b) ? new g(b) : new s(V(y(Math.abs(this.value))), !1);
    }, d.prototype.square = function(b) {
      return new d(this.value * this.value);
    };
    function oe(b, O) {
      var L = b.length, U = O.length, w = i, f = T(O.length), p = O[U - 1], N = Math.ceil(w / (2 * p)), R = j(b, N), k = j(O, N), G, X, J, ie, se, ce, Bt;
      for (R.length <= L && R.push(0), k.push(0), p = k[U - 1], X = L - U; X >= 0; X--) {
        for (G = w - 1, R[X + U] !== p && (G = Math.floor((R[X + U] * w + R[X + U - 1]) / p)), J = 0, ie = 0, ce = k.length, se = 0; se < ce; se++)
          J += G * k[se], Bt = Math.floor(J / w), ie += R[X + se] - (J - Bt * w), J = Bt, ie < 0 ? (R[X + se] = ie + w, ie = -1) : (R[X + se] = ie, ie = 0);
        for (; ie !== 0; ) {
          for (G -= 1, J = 0, se = 0; se < ce; se++)
            J += R[X + se] - w + k[se], J < 0 ? (R[X + se] = J + w, J = 0) : (R[X + se] = J, J = 1);
          ie += J;
        }
        f[X] = G;
      }
      return R = te(R, N)[0], [v(f), v(R)];
    }
    function ne(b, O) {
      for (var L = b.length, U = O.length, w = [], f = [], p = i, N, R, k, G, X; L; ) {
        if (f.unshift(b[--L]), _(f), fe(f, O) < 0) {
          w.push(0);
          continue;
        }
        R = f.length, k = f[R - 1] * p + f[R - 2], G = O[U - 1] * p + O[U - 2], R > U && (k = (k + 1) * p), N = Math.ceil(k / G);
        do {
          if (X = j(O, N), fe(X, f) <= 0) break;
          N--;
        } while (N);
        w.push(N), f = x(f, X);
      }
      return w.reverse(), [v(w), v(f)];
    }
    function te(b, O) {
      var L = b.length, U = T(L), w = i, f, p, N, R;
      for (N = 0, f = L - 1; f >= 0; --f)
        R = N * w + b[f], p = E(R / O), N = R - p * O, U[f] = p | 0;
      return [U, N | 0];
    }
    function ae(b, O) {
      var L, U = Z(O);
      if (u)
        return [new d(b.value / U.value), new d(b.value % U.value)];
      var w = b.value, f = U.value, p;
      if (f === 0) throw new Error("Cannot divide by zero");
      if (b.isSmall)
        return U.isSmall ? [new g(E(w / f)), new g(w % f)] : [o[0], b];
      if (U.isSmall) {
        if (f === 1) return [b, o[0]];
        if (f == -1) return [b.negate(), o[0]];
        var N = Math.abs(f);
        if (N < i) {
          L = te(w, N), p = v(L[0]);
          var R = L[1];
          return b.sign && (R = -R), typeof p == "number" ? (b.sign !== U.sign && (p = -p), [new g(p), new g(R)]) : [new s(p, b.sign !== U.sign), new g(R)];
        }
        f = y(N);
      }
      var k = fe(w, f);
      if (k === -1) return [o[0], b];
      if (k === 0) return [o[b.sign === U.sign ? 1 : -1], o[0]];
      w.length + f.length <= 200 ? L = oe(w, f) : L = ne(w, f), p = L[0];
      var G = b.sign !== U.sign, X = L[1], J = b.sign;
      return typeof p == "number" ? (G && (p = -p), p = new g(p)) : p = new s(p, G), typeof X == "number" ? (J && (X = -X), X = new g(X)) : X = new s(X, J), [p, X];
    }
    s.prototype.divmod = function(b) {
      var O = ae(this, b);
      return {
        quotient: O[0],
        remainder: O[1]
      };
    }, d.prototype.divmod = g.prototype.divmod = s.prototype.divmod, s.prototype.divide = function(b) {
      return ae(this, b)[0];
    }, d.prototype.over = d.prototype.divide = function(b) {
      return new d(this.value / Z(b).value);
    }, g.prototype.over = g.prototype.divide = s.prototype.over = s.prototype.divide, s.prototype.mod = function(b) {
      return ae(this, b)[1];
    }, d.prototype.mod = d.prototype.remainder = function(b) {
      return new d(this.value % Z(b).value);
    }, g.prototype.remainder = g.prototype.mod = s.prototype.remainder = s.prototype.mod, s.prototype.pow = function(b) {
      var O = Z(b), L = this.value, U = O.value, w, f, p;
      if (U === 0) return o[1];
      if (L === 0) return o[0];
      if (L === 1) return o[1];
      if (L === -1) return O.isEven() ? o[1] : o[-1];
      if (O.sign)
        return o[0];
      if (!O.isSmall) throw new Error("The exponent " + O.toString() + " is too large.");
      if (this.isSmall && m(w = Math.pow(L, U)))
        return new g(E(w));
      for (f = this, p = o[1]; U & !0 && (p = p.times(f), --U), U !== 0; )
        U /= 2, f = f.square();
      return p;
    }, g.prototype.pow = s.prototype.pow, d.prototype.pow = function(b) {
      var O = Z(b), L = this.value, U = O.value, w = BigInt(0), f = BigInt(1), p = BigInt(2);
      if (U === w) return o[1];
      if (L === w) return o[0];
      if (L === f) return o[1];
      if (L === BigInt(-1)) return O.isEven() ? o[1] : o[-1];
      if (O.isNegative()) return new d(w);
      for (var N = this, R = o[1]; (U & f) === f && (R = R.times(N), --U), U !== w; )
        U /= p, N = N.square();
      return R;
    }, s.prototype.modPow = function(b, O) {
      if (b = Z(b), O = Z(O), O.isZero()) throw new Error("Cannot take modPow with modulus 0");
      var L = o[1], U = this.mod(O);
      for (b.isNegative() && (b = b.multiply(o[-1]), U = U.modInv(O)); b.isPositive(); ) {
        if (U.isZero()) return o[0];
        b.isOdd() && (L = L.multiply(U).mod(O)), b = b.divide(2), U = U.square().mod(O);
      }
      return L;
    }, d.prototype.modPow = g.prototype.modPow = s.prototype.modPow;
    function fe(b, O) {
      if (b.length !== O.length)
        return b.length > O.length ? 1 : -1;
      for (var L = b.length - 1; L >= 0; L--)
        if (b[L] !== O[L]) return b[L] > O[L] ? 1 : -1;
      return 0;
    }
    s.prototype.compareAbs = function(b) {
      var O = Z(b), L = this.value, U = O.value;
      return O.isSmall ? 1 : fe(L, U);
    }, g.prototype.compareAbs = function(b) {
      var O = Z(b), L = Math.abs(this.value), U = O.value;
      return O.isSmall ? (U = Math.abs(U), L === U ? 0 : L > U ? 1 : -1) : -1;
    }, d.prototype.compareAbs = function(b) {
      var O = this.value, L = Z(b).value;
      return O = O >= 0 ? O : -O, L = L >= 0 ? L : -L, O === L ? 0 : O > L ? 1 : -1;
    }, s.prototype.compare = function(b) {
      if (b === 1 / 0)
        return -1;
      if (b === -1 / 0)
        return 1;
      var O = Z(b), L = this.value, U = O.value;
      return this.sign !== O.sign ? O.sign ? 1 : -1 : O.isSmall ? this.sign ? -1 : 1 : fe(L, U) * (this.sign ? -1 : 1);
    }, s.prototype.compareTo = s.prototype.compare, g.prototype.compare = function(b) {
      if (b === 1 / 0)
        return -1;
      if (b === -1 / 0)
        return 1;
      var O = Z(b), L = this.value, U = O.value;
      return O.isSmall ? L == U ? 0 : L > U ? 1 : -1 : L < 0 !== O.sign ? L < 0 ? -1 : 1 : L < 0 ? 1 : -1;
    }, g.prototype.compareTo = g.prototype.compare, d.prototype.compare = function(b) {
      if (b === 1 / 0)
        return -1;
      if (b === -1 / 0)
        return 1;
      var O = this.value, L = Z(b).value;
      return O === L ? 0 : O > L ? 1 : -1;
    }, d.prototype.compareTo = d.prototype.compare, s.prototype.equals = function(b) {
      return this.compare(b) === 0;
    }, d.prototype.eq = d.prototype.equals = g.prototype.eq = g.prototype.equals = s.prototype.eq = s.prototype.equals, s.prototype.notEquals = function(b) {
      return this.compare(b) !== 0;
    }, d.prototype.neq = d.prototype.notEquals = g.prototype.neq = g.prototype.notEquals = s.prototype.neq = s.prototype.notEquals, s.prototype.greater = function(b) {
      return this.compare(b) > 0;
    }, d.prototype.gt = d.prototype.greater = g.prototype.gt = g.prototype.greater = s.prototype.gt = s.prototype.greater, s.prototype.lesser = function(b) {
      return this.compare(b) < 0;
    }, d.prototype.lt = d.prototype.lesser = g.prototype.lt = g.prototype.lesser = s.prototype.lt = s.prototype.lesser, s.prototype.greaterOrEquals = function(b) {
      return this.compare(b) >= 0;
    }, d.prototype.geq = d.prototype.greaterOrEquals = g.prototype.geq = g.prototype.greaterOrEquals = s.prototype.geq = s.prototype.greaterOrEquals, s.prototype.lesserOrEquals = function(b) {
      return this.compare(b) <= 0;
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
    }, s.prototype.isDivisibleBy = function(b) {
      var O = Z(b);
      return O.isZero() ? !1 : O.isUnit() ? !0 : O.compareAbs(2) === 0 ? this.isEven() : this.mod(O).isZero();
    }, d.prototype.isDivisibleBy = g.prototype.isDivisibleBy = s.prototype.isDivisibleBy;
    function re(b) {
      var O = b.abs();
      if (O.isUnit()) return !1;
      if (O.equals(2) || O.equals(3) || O.equals(5)) return !0;
      if (O.isEven() || O.isDivisibleBy(3) || O.isDivisibleBy(5)) return !1;
      if (O.lesser(49)) return !0;
    }
    function $e(b, O) {
      for (var L = b.prev(), U = L, w = 0, f, p, N; U.isEven(); ) U = U.divide(2), w++;
      e: for (p = 0; p < O.length; p++)
        if (!b.lesser(O[p]) && (N = e(O[p]).modPow(U, b), !(N.isUnit() || N.equals(L)))) {
          for (f = w - 1; f != 0; f--) {
            if (N = N.square().mod(b), N.isUnit()) return !1;
            if (N.equals(L)) continue e;
          }
          return !1;
        }
      return !0;
    }
    s.prototype.isPrime = function(b) {
      var O = re(this);
      if (O !== r) return O;
      var L = this.abs(), U = L.bitLength();
      if (U <= 64)
        return $e(L, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
      for (var w = Math.log(2) * U.toJSNumber(), f = Math.ceil(b === !0 ? 2 * Math.pow(w, 2) : w), p = [], N = 0; N < f; N++)
        p.push(e(N + 2));
      return $e(L, p);
    }, d.prototype.isPrime = g.prototype.isPrime = s.prototype.isPrime, s.prototype.isProbablePrime = function(b, O) {
      var L = re(this);
      if (L !== r) return L;
      for (var U = this.abs(), w = b === r ? 5 : b, f = [], p = 0; p < w; p++)
        f.push(e.randBetween(2, U.minus(2), O));
      return $e(U, f);
    }, d.prototype.isProbablePrime = g.prototype.isProbablePrime = s.prototype.isProbablePrime, s.prototype.modInv = function(b) {
      for (var O = e.zero, L = e.one, U = Z(b), w = this.abs(), f, p, N; !w.isZero(); )
        f = U.divide(w), p = O, N = U, O = L, U = w, L = p.subtract(f.multiply(L)), w = N.subtract(f.multiply(w));
      if (!U.isUnit()) throw new Error(this.toString() + " and " + b.toString() + " are not co-prime");
      return O.compare(0) === -1 && (O = O.add(b)), this.isNegative() ? O.negate() : O;
    }, d.prototype.modInv = g.prototype.modInv = s.prototype.modInv, s.prototype.next = function() {
      var b = this.value;
      return this.sign ? P(b, 1, this.sign) : new s(A(b, 1), this.sign);
    }, g.prototype.next = function() {
      var b = this.value;
      return b + 1 < a ? new g(b + 1) : new s(h, !1);
    }, d.prototype.next = function() {
      return new d(this.value + BigInt(1));
    }, s.prototype.prev = function() {
      var b = this.value;
      return this.sign ? new s(A(b, 1), !0) : P(b, 1, this.sign);
    }, g.prototype.prev = function() {
      var b = this.value;
      return b - 1 > -9007199254740992 ? new g(b - 1) : new s(h, !0);
    }, d.prototype.prev = function() {
      return new d(this.value - BigInt(1));
    };
    for (var he = [1]; 2 * he[he.length - 1] <= i; ) he.push(2 * he[he.length - 1]);
    var pe = he.length, Q = he[pe - 1];
    function it(b) {
      return Math.abs(b) <= i;
    }
    s.prototype.shiftLeft = function(b) {
      var O = Z(b).toJSNumber();
      if (!it(O))
        throw new Error(String(O) + " is too large for shifting.");
      if (O < 0) return this.shiftRight(-O);
      var L = this;
      if (L.isZero()) return L;
      for (; O >= pe; )
        L = L.multiply(Q), O -= pe - 1;
      return L.multiply(he[O]);
    }, d.prototype.shiftLeft = g.prototype.shiftLeft = s.prototype.shiftLeft, s.prototype.shiftRight = function(b) {
      var O, L = Z(b).toJSNumber();
      if (!it(L))
        throw new Error(String(L) + " is too large for shifting.");
      if (L < 0) return this.shiftLeft(-L);
      for (var U = this; L >= pe; ) {
        if (U.isZero() || U.isNegative() && U.isUnit()) return U;
        O = ae(U, Q), U = O[1].isNegative() ? O[0].prev() : O[0], L -= pe - 1;
      }
      return O = ae(U, he[L]), O[1].isNegative() ? O[0].prev() : O[0];
    }, d.prototype.shiftRight = g.prototype.shiftRight = s.prototype.shiftRight;
    function At(b, O, L) {
      O = Z(O);
      for (var U = b.isNegative(), w = O.isNegative(), f = U ? b.not() : b, p = w ? O.not() : O, N = 0, R = 0, k = null, G = null, X = []; !f.isZero() || !p.isZero(); )
        k = ae(f, Q), N = k[1].toJSNumber(), U && (N = Q - 1 - N), G = ae(p, Q), R = G[1].toJSNumber(), w && (R = Q - 1 - R), f = k[0], p = G[0], X.push(L(N, R));
      for (var J = L(U ? 1 : 0, w ? 1 : 0) !== 0 ? e(-1) : e(0), ie = X.length - 1; ie >= 0; ie -= 1)
        J = J.multiply(Q).add(e(X[ie]));
      return J;
    }
    s.prototype.not = function() {
      return this.negate().prev();
    }, d.prototype.not = g.prototype.not = s.prototype.not, s.prototype.and = function(b) {
      return At(this, b, function(O, L) {
        return O & L;
      });
    }, d.prototype.and = g.prototype.and = s.prototype.and, s.prototype.or = function(b) {
      return At(this, b, function(O, L) {
        return O | L;
      });
    }, d.prototype.or = g.prototype.or = s.prototype.or, s.prototype.xor = function(b) {
      return At(this, b, function(O, L) {
        return O ^ L;
      });
    }, d.prototype.xor = g.prototype.xor = s.prototype.xor;
    var Mt = 1 << 30, Ht = (i & -1e7) * (i & -1e7) | Mt;
    function Tt(b) {
      var O = b.value, L = typeof O == "number" ? O | Mt : typeof O == "bigint" ? O | BigInt(Mt) : O[0] + O[1] * i | Ht;
      return L & -L;
    }
    function ct(b, O) {
      if (O.compareTo(b) <= 0) {
        var L = ct(b, O.square(O)), U = L.p, w = L.e, f = U.multiply(O);
        return f.compareTo(b) <= 0 ? { p: f, e: w * 2 + 1 } : { p: U, e: w * 2 };
      }
      return { p: e(1), e: 0 };
    }
    s.prototype.bitLength = function() {
      var b = this;
      return b.compareTo(e(0)) < 0 && (b = b.negate().subtract(e(1))), b.compareTo(e(0)) === 0 ? e(0) : e(ct(b, e(2)).e).add(e(1));
    }, d.prototype.bitLength = g.prototype.bitLength = s.prototype.bitLength;
    function ot(b, O) {
      return b = Z(b), O = Z(O), b.greater(O) ? b : O;
    }
    function It(b, O) {
      return b = Z(b), O = Z(O), b.lesser(O) ? b : O;
    }
    function ft(b, O) {
      if (b = Z(b).abs(), O = Z(O).abs(), b.equals(O)) return b;
      if (b.isZero()) return O;
      if (O.isZero()) return b;
      for (var L = o[1], U, w; b.isEven() && O.isEven(); )
        U = It(Tt(b), Tt(O)), b = b.divide(U), O = O.divide(U), L = L.multiply(U);
      for (; b.isEven(); )
        b = b.divide(Tt(b));
      do {
        for (; O.isEven(); )
          O = O.divide(Tt(O));
        b.greater(O) && (w = O, O = b, b = w), O = O.subtract(b);
      } while (!O.isZero());
      return L.isUnit() ? b : b.multiply(L);
    }
    function Yt(b, O) {
      return b = Z(b).abs(), O = Z(O).abs(), b.divide(ft(b, O)).multiply(O);
    }
    function ht(b, O, L) {
      b = Z(b), O = Z(O);
      var U = L || Math.random, w = It(b, O), f = ot(b, O), p = f.subtract(w).add(1);
      if (p.isSmall) return w.add(Math.floor(U() * p));
      for (var N = pt(p, i).value, R = [], k = !0, G = 0; G < N.length; G++) {
        var X = k ? N[G] + (G + 1 < N.length ? N[G + 1] / i : 0) : i, J = E(U() * X);
        R.push(J), J < N[G] && (k = !1);
      }
      return w.add(o.fromArray(R, i, !1));
    }
    var et = function(b, O, L, U) {
      L = L || c, b = String(b), U || (b = b.toLowerCase(), L = L.toLowerCase());
      var w = b.length, f, p = Math.abs(O), N = {};
      for (f = 0; f < L.length; f++)
        N[L[f]] = f;
      for (f = 0; f < w; f++) {
        var R = b[f];
        if (R !== "-" && R in N && N[R] >= p) {
          if (R === "1" && p === 1) continue;
          throw new Error(R + " is not a valid digit in base " + O + ".");
        }
      }
      O = Z(O);
      var k = [], G = b[0] === "-";
      for (f = G ? 1 : 0; f < b.length; f++) {
        var R = b[f];
        if (R in N) k.push(Z(N[R]));
        else if (R === "<") {
          var X = f;
          do
            f++;
          while (b[f] !== ">" && f < b.length);
          k.push(Z(b.slice(X + 1, f)));
        } else throw new Error(R + " is not a valid character");
      }
      return Ut(k, O, G);
    };
    function Ut(b, O, L) {
      var U = o[0], w = o[1], f;
      for (f = b.length - 1; f >= 0; f--)
        U = U.add(b[f].times(w)), w = w.times(O);
      return L ? U.negate() : U;
    }
    function Zt(b, O) {
      return O = O || c, b < O.length ? O[b] : "<" + b + ">";
    }
    function pt(b, O) {
      if (O = e(O), O.isZero()) {
        if (b.isZero()) return { value: [0], isNegative: !1 };
        throw new Error("Cannot convert nonzero numbers to base 0.");
      }
      if (O.equals(-1)) {
        if (b.isZero()) return { value: [0], isNegative: !1 };
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
      var U = !1;
      if (b.isNegative() && O.isPositive() && (U = !0, b = b.abs()), O.isUnit())
        return b.isZero() ? { value: [0], isNegative: !1 } : {
          value: Array.apply(null, Array(b.toJSNumber())).map(Number.prototype.valueOf, 1),
          isNegative: U
        };
      for (var w = [], f = b, p; f.isNegative() || f.compareAbs(O) >= 0; ) {
        p = f.divmod(O), f = p.quotient;
        var N = p.remainder;
        N.isNegative() && (N = O.minus(N).abs(), f = f.next()), w.push(N.toJSNumber());
      }
      return w.push(f.toJSNumber()), { value: w.reverse(), isNegative: U };
    }
    function ar(b, O, L) {
      var U = pt(b, O);
      return (U.isNegative ? "-" : "") + U.value.map(function(w) {
        return Zt(w, L);
      }).join("");
    }
    s.prototype.toArray = function(b) {
      return pt(this, b);
    }, g.prototype.toArray = function(b) {
      return pt(this, b);
    }, d.prototype.toArray = function(b) {
      return pt(this, b);
    }, s.prototype.toString = function(b, O) {
      if (b === r && (b = 10), b !== 10 || O) return ar(this, b, O);
      for (var L = this.value, U = L.length, w = String(L[--U]), f = "0000000", p; --U >= 0; )
        p = String(L[U]), w += f.slice(p.length) + p;
      var N = this.sign ? "-" : "";
      return N + w;
    }, g.prototype.toString = function(b, O) {
      return b === r && (b = 10), b != 10 || O ? ar(this, b, O) : String(this.value);
    }, d.prototype.toString = g.prototype.toString, d.prototype.toJSON = s.prototype.toJSON = g.prototype.toJSON = function() {
      return this.toString();
    }, s.prototype.valueOf = function() {
      return parseInt(this.toString(), 10);
    }, s.prototype.toJSNumber = s.prototype.valueOf, g.prototype.valueOf = function() {
      return this.value;
    }, g.prototype.toJSNumber = g.prototype.valueOf, d.prototype.valueOf = d.prototype.toJSNumber = function() {
      return parseInt(this.toString(), 10);
    };
    function Er(b) {
      if (m(+b)) {
        var O = +b;
        if (O === E(O))
          return u ? new d(BigInt(O)) : new g(O);
        throw new Error("Invalid integer: " + b);
      }
      var L = b[0] === "-";
      L && (b = b.slice(1));
      var U = b.split(/e/i);
      if (U.length > 2) throw new Error("Invalid integer: " + U.join("e"));
      if (U.length === 2) {
        var w = U[1];
        if (w[0] === "+" && (w = w.slice(1)), w = +w, w !== E(w) || !m(w)) throw new Error("Invalid integer: " + w + " is not a valid exponent.");
        var f = U[0], p = f.indexOf(".");
        if (p >= 0 && (w -= f.length - p - 1, f = f.slice(0, p) + f.slice(p + 1)), w < 0) throw new Error("Cannot include negative exponent part for integers");
        f += new Array(w + 1).join("0"), b = f;
      }
      var N = /^([0-9][0-9]*)$/.test(b);
      if (!N) throw new Error("Invalid integer: " + b);
      if (u)
        return new d(BigInt(L ? "-" + b : b));
      for (var R = [], k = b.length, G = l, X = k - G; k > 0; )
        R.push(+b.slice(X, k)), X -= G, X < 0 && (X = 0), k -= G;
      return _(R), new s(R, L);
    }
    function Jt(b) {
      if (u)
        return new d(BigInt(b));
      if (m(b)) {
        if (b !== E(b)) throw new Error(b + " is not an integer.");
        return new g(b);
      }
      return Er(b.toString());
    }
    function Z(b) {
      return typeof b == "number" ? Jt(b) : typeof b == "string" ? Er(b) : typeof b == "bigint" ? new d(b) : b;
    }
    for (var we = 0; we < 1e3; we++)
      o[we] = Z(we), we > 0 && (o[-we] = Z(-we));
    return o.one = o[1], o.zero = o[0], o.minusOne = o[-1], o.max = ot, o.min = It, o.gcd = ft, o.lcm = Yt, o.isInstance = function(b) {
      return b instanceof s || b instanceof g || b instanceof d;
    }, o.randBetween = ht, o.fromArray = function(b, O, L) {
      return Ut(b.map(Z), Z(O || 10), L);
    }, o;
  }();
  n.hasOwnProperty("exports") && (n.exports = e);
})(eu);
var sh = eu.exports;
const ah = /* @__PURE__ */ Vi(sh);
var tu = {}, Un = {};
Un.byteLength = ch;
Un.toByteArray = hh;
Un.fromByteArray = gh;
var $t = [], yt = [], uh = typeof Uint8Array < "u" ? Uint8Array : Array, Ii = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Ir = 0, lh = Ii.length; Ir < lh; ++Ir)
  $t[Ir] = Ii[Ir], yt[Ii.charCodeAt(Ir)] = Ir;
yt[45] = 62;
yt[95] = 63;
function ru(n) {
  var e = n.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = n.indexOf("=");
  r === -1 && (r = e);
  var i = r === e ? 0 : 4 - r % 4;
  return [r, i];
}
function ch(n) {
  var e = ru(n), r = e[0], i = e[1];
  return (r + i) * 3 / 4 - i;
}
function fh(n, e, r) {
  return (e + r) * 3 / 4 - r;
}
function hh(n) {
  var e, r = ru(n), i = r[0], l = r[1], a = new uh(fh(n, i, l)), h = 0, c = l > 0 ? i - 4 : i, u;
  for (u = 0; u < c; u += 4)
    e = yt[n.charCodeAt(u)] << 18 | yt[n.charCodeAt(u + 1)] << 12 | yt[n.charCodeAt(u + 2)] << 6 | yt[n.charCodeAt(u + 3)], a[h++] = e >> 16 & 255, a[h++] = e >> 8 & 255, a[h++] = e & 255;
  return l === 2 && (e = yt[n.charCodeAt(u)] << 2 | yt[n.charCodeAt(u + 1)] >> 4, a[h++] = e & 255), l === 1 && (e = yt[n.charCodeAt(u)] << 10 | yt[n.charCodeAt(u + 1)] << 4 | yt[n.charCodeAt(u + 2)] >> 2, a[h++] = e >> 8 & 255, a[h++] = e & 255), a;
}
function ph(n) {
  return $t[n >> 18 & 63] + $t[n >> 12 & 63] + $t[n >> 6 & 63] + $t[n & 63];
}
function dh(n, e, r) {
  for (var i, l = [], a = e; a < r; a += 3)
    i = (n[a] << 16 & 16711680) + (n[a + 1] << 8 & 65280) + (n[a + 2] & 255), l.push(ph(i));
  return l.join("");
}
function gh(n) {
  for (var e, r = n.length, i = r % 3, l = [], a = 16383, h = 0, c = r - i; h < c; h += a)
    l.push(dh(n, h, h + a > c ? c : h + a));
  return i === 1 ? (e = n[r - 1], l.push(
    $t[e >> 2] + $t[e << 4 & 63] + "=="
  )) : i === 2 && (e = (n[r - 2] << 8) + n[r - 1], l.push(
    $t[e >> 10] + $t[e >> 4 & 63] + $t[e << 2 & 63] + "="
  )), l.join("");
}
var uo = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
uo.read = function(n, e, r, i, l) {
  var a, h, c = l * 8 - i - 1, u = (1 << c) - 1, o = u >> 1, s = -7, g = r ? l - 1 : 0, d = r ? -1 : 1, m = n[e + g];
  for (g += d, a = m & (1 << -s) - 1, m >>= -s, s += c; s > 0; a = a * 256 + n[e + g], g += d, s -= 8)
    ;
  for (h = a & (1 << -s) - 1, a >>= -s, s += i; s > 0; h = h * 256 + n[e + g], g += d, s -= 8)
    ;
  if (a === 0)
    a = 1 - o;
  else {
    if (a === u)
      return h ? NaN : (m ? -1 : 1) * (1 / 0);
    h = h + Math.pow(2, i), a = a - o;
  }
  return (m ? -1 : 1) * h * Math.pow(2, a - i);
};
uo.write = function(n, e, r, i, l, a) {
  var h, c, u, o = a * 8 - l - 1, s = (1 << o) - 1, g = s >> 1, d = l === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, m = i ? 0 : a - 1, y = i ? 1 : -1, v = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (c = isNaN(e) ? 1 : 0, h = s) : (h = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -h)) < 1 && (h--, u *= 2), h + g >= 1 ? e += d / u : e += d * Math.pow(2, 1 - g), e * u >= 2 && (h++, u /= 2), h + g >= s ? (c = 0, h = s) : h + g >= 1 ? (c = (e * u - 1) * Math.pow(2, l), h = h + g) : (c = e * Math.pow(2, g - 1) * Math.pow(2, l), h = 0)); l >= 8; n[r + m] = c & 255, m += y, c /= 256, l -= 8)
    ;
  for (h = h << l | c, o += l; o > 0; n[r + m] = h & 255, m += y, h /= 256, o -= 8)
    ;
  n[r + m - y] |= v * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(n) {
  const e = Un, r = uo, i = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  n.Buffer = s, n.SlowBuffer = A, n.INSPECT_MAX_BYTES = 50;
  const l = 2147483647;
  n.kMaxLength = l;
  const { Uint8Array: a, ArrayBuffer: h, SharedArrayBuffer: c } = globalThis;
  s.TYPED_ARRAY_SUPPORT = u(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function u() {
    try {
      const w = new a(1), f = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(f, a.prototype), Object.setPrototypeOf(w, f), w.foo() === 42;
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
  function o(w) {
    if (w > l)
      throw new RangeError('The value "' + w + '" is invalid for option "size"');
    const f = new a(w);
    return Object.setPrototypeOf(f, s.prototype), f;
  }
  function s(w, f, p) {
    if (typeof w == "number") {
      if (typeof f == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return y(w);
    }
    return g(w, f, p);
  }
  s.poolSize = 8192;
  function g(w, f, p) {
    if (typeof w == "string")
      return v(w, f);
    if (h.isView(w))
      return T(w);
    if (w == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof w
      );
    if (we(w, h) || w && we(w.buffer, h) || typeof c < "u" && (we(w, c) || w && we(w.buffer, c)))
      return E(w, f, p);
    if (typeof w == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const N = w.valueOf && w.valueOf();
    if (N != null && N !== w)
      return s.from(N, f, p);
    const R = I(w);
    if (R) return R;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof w[Symbol.toPrimitive] == "function")
      return s.from(w[Symbol.toPrimitive]("string"), f, p);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof w
    );
  }
  s.from = function(w, f, p) {
    return g(w, f, p);
  }, Object.setPrototypeOf(s.prototype, a.prototype), Object.setPrototypeOf(s, a);
  function d(w) {
    if (typeof w != "number")
      throw new TypeError('"size" argument must be of type number');
    if (w < 0)
      throw new RangeError('The value "' + w + '" is invalid for option "size"');
  }
  function m(w, f, p) {
    return d(w), w <= 0 ? o(w) : f !== void 0 ? typeof p == "string" ? o(w).fill(f, p) : o(w).fill(f) : o(w);
  }
  s.alloc = function(w, f, p) {
    return m(w, f, p);
  };
  function y(w) {
    return d(w), o(w < 0 ? 0 : S(w) | 0);
  }
  s.allocUnsafe = function(w) {
    return y(w);
  }, s.allocUnsafeSlow = function(w) {
    return y(w);
  };
  function v(w, f) {
    if ((typeof f != "string" || f === "") && (f = "utf8"), !s.isEncoding(f))
      throw new TypeError("Unknown encoding: " + f);
    const p = x(w, f) | 0;
    let N = o(p);
    const R = N.write(w, f);
    return R !== p && (N = N.slice(0, R)), N;
  }
  function _(w) {
    const f = w.length < 0 ? 0 : S(w.length) | 0, p = o(f);
    for (let N = 0; N < f; N += 1)
      p[N] = w[N] & 255;
    return p;
  }
  function T(w) {
    if (we(w, a)) {
      const f = new a(w);
      return E(f.buffer, f.byteOffset, f.byteLength);
    }
    return _(w);
  }
  function E(w, f, p) {
    if (f < 0 || w.byteLength < f)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (w.byteLength < f + (p || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let N;
    return f === void 0 && p === void 0 ? N = new a(w) : p === void 0 ? N = new a(w, f) : N = new a(w, f, p), Object.setPrototypeOf(N, s.prototype), N;
  }
  function I(w) {
    if (s.isBuffer(w)) {
      const f = S(w.length) | 0, p = o(f);
      return p.length === 0 || w.copy(p, 0, 0, f), p;
    }
    if (w.length !== void 0)
      return typeof w.length != "number" || b(w.length) ? o(0) : _(w);
    if (w.type === "Buffer" && Array.isArray(w.data))
      return _(w.data);
  }
  function S(w) {
    if (w >= l)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + l.toString(16) + " bytes");
    return w | 0;
  }
  function A(w) {
    return +w != w && (w = 0), s.alloc(+w);
  }
  s.isBuffer = function(f) {
    return f != null && f._isBuffer === !0 && f !== s.prototype;
  }, s.compare = function(f, p) {
    if (we(f, a) && (f = s.from(f, f.offset, f.byteLength)), we(p, a) && (p = s.from(p, p.offset, p.byteLength)), !s.isBuffer(f) || !s.isBuffer(p))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (f === p) return 0;
    let N = f.length, R = p.length;
    for (let k = 0, G = Math.min(N, R); k < G; ++k)
      if (f[k] !== p[k]) {
        N = f[k], R = p[k];
        break;
      }
    return N < R ? -1 : R < N ? 1 : 0;
  }, s.isEncoding = function(f) {
    switch (String(f).toLowerCase()) {
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
  }, s.concat = function(f, p) {
    if (!Array.isArray(f))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (f.length === 0)
      return s.alloc(0);
    let N;
    if (p === void 0)
      for (p = 0, N = 0; N < f.length; ++N)
        p += f[N].length;
    const R = s.allocUnsafe(p);
    let k = 0;
    for (N = 0; N < f.length; ++N) {
      let G = f[N];
      if (we(G, a))
        k + G.length > R.length ? (s.isBuffer(G) || (G = s.from(G)), G.copy(R, k)) : a.prototype.set.call(
          R,
          G,
          k
        );
      else if (s.isBuffer(G))
        G.copy(R, k);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      k += G.length;
    }
    return R;
  };
  function x(w, f) {
    if (s.isBuffer(w))
      return w.length;
    if (h.isView(w) || we(w, h))
      return w.byteLength;
    if (typeof w != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof w
      );
    const p = w.length, N = arguments.length > 2 && arguments[2] === !0;
    if (!N && p === 0) return 0;
    let R = !1;
    for (; ; )
      switch (f) {
        case "ascii":
        case "latin1":
        case "binary":
          return p;
        case "utf8":
        case "utf-8":
          return pt(w).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return p * 2;
        case "hex":
          return p >>> 1;
        case "base64":
          return Jt(w).length;
        default:
          if (R)
            return N ? -1 : pt(w).length;
          f = ("" + f).toLowerCase(), R = !0;
      }
  }
  s.byteLength = x;
  function C(w, f, p) {
    let N = !1;
    if ((f === void 0 || f < 0) && (f = 0), f > this.length || ((p === void 0 || p > this.length) && (p = this.length), p <= 0) || (p >>>= 0, f >>>= 0, p <= f))
      return "";
    for (w || (w = "utf8"); ; )
      switch (w) {
        case "hex":
          return $e(this, f, p);
        case "utf8":
        case "utf-8":
          return ne(this, f, p);
        case "ascii":
          return fe(this, f, p);
        case "latin1":
        case "binary":
          return re(this, f, p);
        case "base64":
          return oe(this, f, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return he(this, f, p);
        default:
          if (N) throw new TypeError("Unknown encoding: " + w);
          w = (w + "").toLowerCase(), N = !0;
      }
  }
  s.prototype._isBuffer = !0;
  function P(w, f, p) {
    const N = w[f];
    w[f] = w[p], w[p] = N;
  }
  s.prototype.swap16 = function() {
    const f = this.length;
    if (f % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let p = 0; p < f; p += 2)
      P(this, p, p + 1);
    return this;
  }, s.prototype.swap32 = function() {
    const f = this.length;
    if (f % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let p = 0; p < f; p += 4)
      P(this, p, p + 3), P(this, p + 1, p + 2);
    return this;
  }, s.prototype.swap64 = function() {
    const f = this.length;
    if (f % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let p = 0; p < f; p += 8)
      P(this, p, p + 7), P(this, p + 1, p + 6), P(this, p + 2, p + 5), P(this, p + 3, p + 4);
    return this;
  }, s.prototype.toString = function() {
    const f = this.length;
    return f === 0 ? "" : arguments.length === 0 ? ne(this, 0, f) : C.apply(this, arguments);
  }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(f) {
    if (!s.isBuffer(f)) throw new TypeError("Argument must be a Buffer");
    return this === f ? !0 : s.compare(this, f) === 0;
  }, s.prototype.inspect = function() {
    let f = "";
    const p = n.INSPECT_MAX_BYTES;
    return f = this.toString("hex", 0, p).replace(/(.{2})/g, "$1 ").trim(), this.length > p && (f += " ... "), "<Buffer " + f + ">";
  }, i && (s.prototype[i] = s.prototype.inspect), s.prototype.compare = function(f, p, N, R, k) {
    if (we(f, a) && (f = s.from(f, f.offset, f.byteLength)), !s.isBuffer(f))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof f
      );
    if (p === void 0 && (p = 0), N === void 0 && (N = f ? f.length : 0), R === void 0 && (R = 0), k === void 0 && (k = this.length), p < 0 || N > f.length || R < 0 || k > this.length)
      throw new RangeError("out of range index");
    if (R >= k && p >= N)
      return 0;
    if (R >= k)
      return -1;
    if (p >= N)
      return 1;
    if (p >>>= 0, N >>>= 0, R >>>= 0, k >>>= 0, this === f) return 0;
    let G = k - R, X = N - p;
    const J = Math.min(G, X), ie = this.slice(R, k), se = f.slice(p, N);
    for (let ce = 0; ce < J; ++ce)
      if (ie[ce] !== se[ce]) {
        G = ie[ce], X = se[ce];
        break;
      }
    return G < X ? -1 : X < G ? 1 : 0;
  };
  function F(w, f, p, N, R) {
    if (w.length === 0) return -1;
    if (typeof p == "string" ? (N = p, p = 0) : p > 2147483647 ? p = 2147483647 : p < -2147483648 && (p = -2147483648), p = +p, b(p) && (p = R ? 0 : w.length - 1), p < 0 && (p = w.length + p), p >= w.length) {
      if (R) return -1;
      p = w.length - 1;
    } else if (p < 0)
      if (R) p = 0;
      else return -1;
    if (typeof f == "string" && (f = s.from(f, N)), s.isBuffer(f))
      return f.length === 0 ? -1 : j(w, f, p, N, R);
    if (typeof f == "number")
      return f = f & 255, typeof a.prototype.indexOf == "function" ? R ? a.prototype.indexOf.call(w, f, p) : a.prototype.lastIndexOf.call(w, f, p) : j(w, [f], p, N, R);
    throw new TypeError("val must be string, number or Buffer");
  }
  function j(w, f, p, N, R) {
    let k = 1, G = w.length, X = f.length;
    if (N !== void 0 && (N = String(N).toLowerCase(), N === "ucs2" || N === "ucs-2" || N === "utf16le" || N === "utf-16le")) {
      if (w.length < 2 || f.length < 2)
        return -1;
      k = 2, G /= 2, X /= 2, p /= 2;
    }
    function J(se, ce) {
      return k === 1 ? se[ce] : se.readUInt16BE(ce * k);
    }
    let ie;
    if (R) {
      let se = -1;
      for (ie = p; ie < G; ie++)
        if (J(w, ie) === J(f, se === -1 ? 0 : ie - se)) {
          if (se === -1 && (se = ie), ie - se + 1 === X) return se * k;
        } else
          se !== -1 && (ie -= ie - se), se = -1;
    } else
      for (p + X > G && (p = G - X), ie = p; ie >= 0; ie--) {
        let se = !0;
        for (let ce = 0; ce < X; ce++)
          if (J(w, ie + ce) !== J(f, ce)) {
            se = !1;
            break;
          }
        if (se) return ie;
      }
    return -1;
  }
  s.prototype.includes = function(f, p, N) {
    return this.indexOf(f, p, N) !== -1;
  }, s.prototype.indexOf = function(f, p, N) {
    return F(this, f, p, N, !0);
  }, s.prototype.lastIndexOf = function(f, p, N) {
    return F(this, f, p, N, !1);
  };
  function D(w, f, p, N) {
    p = Number(p) || 0;
    const R = w.length - p;
    N ? (N = Number(N), N > R && (N = R)) : N = R;
    const k = f.length;
    N > k / 2 && (N = k / 2);
    let G;
    for (G = 0; G < N; ++G) {
      const X = parseInt(f.substr(G * 2, 2), 16);
      if (b(X)) return G;
      w[p + G] = X;
    }
    return G;
  }
  function B(w, f, p, N) {
    return Z(pt(f, w.length - p), w, p, N);
  }
  function $(w, f, p, N) {
    return Z(ar(f), w, p, N);
  }
  function q(w, f, p, N) {
    return Z(Jt(f), w, p, N);
  }
  function V(w, f, p, N) {
    return Z(Er(f, w.length - p), w, p, N);
  }
  s.prototype.write = function(f, p, N, R) {
    if (p === void 0)
      R = "utf8", N = this.length, p = 0;
    else if (N === void 0 && typeof p == "string")
      R = p, N = this.length, p = 0;
    else if (isFinite(p))
      p = p >>> 0, isFinite(N) ? (N = N >>> 0, R === void 0 && (R = "utf8")) : (R = N, N = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const k = this.length - p;
    if ((N === void 0 || N > k) && (N = k), f.length > 0 && (N < 0 || p < 0) || p > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    R || (R = "utf8");
    let G = !1;
    for (; ; )
      switch (R) {
        case "hex":
          return D(this, f, p, N);
        case "utf8":
        case "utf-8":
          return B(this, f, p, N);
        case "ascii":
        case "latin1":
        case "binary":
          return $(this, f, p, N);
        case "base64":
          return q(this, f, p, N);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return V(this, f, p, N);
        default:
          if (G) throw new TypeError("Unknown encoding: " + R);
          R = ("" + R).toLowerCase(), G = !0;
      }
  }, s.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function oe(w, f, p) {
    return f === 0 && p === w.length ? e.fromByteArray(w) : e.fromByteArray(w.slice(f, p));
  }
  function ne(w, f, p) {
    p = Math.min(w.length, p);
    const N = [];
    let R = f;
    for (; R < p; ) {
      const k = w[R];
      let G = null, X = k > 239 ? 4 : k > 223 ? 3 : k > 191 ? 2 : 1;
      if (R + X <= p) {
        let J, ie, se, ce;
        switch (X) {
          case 1:
            k < 128 && (G = k);
            break;
          case 2:
            J = w[R + 1], (J & 192) === 128 && (ce = (k & 31) << 6 | J & 63, ce > 127 && (G = ce));
            break;
          case 3:
            J = w[R + 1], ie = w[R + 2], (J & 192) === 128 && (ie & 192) === 128 && (ce = (k & 15) << 12 | (J & 63) << 6 | ie & 63, ce > 2047 && (ce < 55296 || ce > 57343) && (G = ce));
            break;
          case 4:
            J = w[R + 1], ie = w[R + 2], se = w[R + 3], (J & 192) === 128 && (ie & 192) === 128 && (se & 192) === 128 && (ce = (k & 15) << 18 | (J & 63) << 12 | (ie & 63) << 6 | se & 63, ce > 65535 && ce < 1114112 && (G = ce));
        }
      }
      G === null ? (G = 65533, X = 1) : G > 65535 && (G -= 65536, N.push(G >>> 10 & 1023 | 55296), G = 56320 | G & 1023), N.push(G), R += X;
    }
    return ae(N);
  }
  const te = 4096;
  function ae(w) {
    const f = w.length;
    if (f <= te)
      return String.fromCharCode.apply(String, w);
    let p = "", N = 0;
    for (; N < f; )
      p += String.fromCharCode.apply(
        String,
        w.slice(N, N += te)
      );
    return p;
  }
  function fe(w, f, p) {
    let N = "";
    p = Math.min(w.length, p);
    for (let R = f; R < p; ++R)
      N += String.fromCharCode(w[R] & 127);
    return N;
  }
  function re(w, f, p) {
    let N = "";
    p = Math.min(w.length, p);
    for (let R = f; R < p; ++R)
      N += String.fromCharCode(w[R]);
    return N;
  }
  function $e(w, f, p) {
    const N = w.length;
    (!f || f < 0) && (f = 0), (!p || p < 0 || p > N) && (p = N);
    let R = "";
    for (let k = f; k < p; ++k)
      R += O[w[k]];
    return R;
  }
  function he(w, f, p) {
    const N = w.slice(f, p);
    let R = "";
    for (let k = 0; k < N.length - 1; k += 2)
      R += String.fromCharCode(N[k] + N[k + 1] * 256);
    return R;
  }
  s.prototype.slice = function(f, p) {
    const N = this.length;
    f = ~~f, p = p === void 0 ? N : ~~p, f < 0 ? (f += N, f < 0 && (f = 0)) : f > N && (f = N), p < 0 ? (p += N, p < 0 && (p = 0)) : p > N && (p = N), p < f && (p = f);
    const R = this.subarray(f, p);
    return Object.setPrototypeOf(R, s.prototype), R;
  };
  function pe(w, f, p) {
    if (w % 1 !== 0 || w < 0) throw new RangeError("offset is not uint");
    if (w + f > p) throw new RangeError("Trying to access beyond buffer length");
  }
  s.prototype.readUintLE = s.prototype.readUIntLE = function(f, p, N) {
    f = f >>> 0, p = p >>> 0, N || pe(f, p, this.length);
    let R = this[f], k = 1, G = 0;
    for (; ++G < p && (k *= 256); )
      R += this[f + G] * k;
    return R;
  }, s.prototype.readUintBE = s.prototype.readUIntBE = function(f, p, N) {
    f = f >>> 0, p = p >>> 0, N || pe(f, p, this.length);
    let R = this[f + --p], k = 1;
    for (; p > 0 && (k *= 256); )
      R += this[f + --p] * k;
    return R;
  }, s.prototype.readUint8 = s.prototype.readUInt8 = function(f, p) {
    return f = f >>> 0, p || pe(f, 1, this.length), this[f];
  }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(f, p) {
    return f = f >>> 0, p || pe(f, 2, this.length), this[f] | this[f + 1] << 8;
  }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(f, p) {
    return f = f >>> 0, p || pe(f, 2, this.length), this[f] << 8 | this[f + 1];
  }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(f, p) {
    return f = f >>> 0, p || pe(f, 4, this.length), (this[f] | this[f + 1] << 8 | this[f + 2] << 16) + this[f + 3] * 16777216;
  }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(f, p) {
    return f = f >>> 0, p || pe(f, 4, this.length), this[f] * 16777216 + (this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3]);
  }, s.prototype.readBigUInt64LE = L(function(f) {
    f = f >>> 0, ht(f, "offset");
    const p = this[f], N = this[f + 7];
    (p === void 0 || N === void 0) && et(f, this.length - 8);
    const R = p + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24, k = this[++f] + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + N * 2 ** 24;
    return BigInt(R) + (BigInt(k) << BigInt(32));
  }), s.prototype.readBigUInt64BE = L(function(f) {
    f = f >>> 0, ht(f, "offset");
    const p = this[f], N = this[f + 7];
    (p === void 0 || N === void 0) && et(f, this.length - 8);
    const R = p * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f], k = this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + N;
    return (BigInt(R) << BigInt(32)) + BigInt(k);
  }), s.prototype.readIntLE = function(f, p, N) {
    f = f >>> 0, p = p >>> 0, N || pe(f, p, this.length);
    let R = this[f], k = 1, G = 0;
    for (; ++G < p && (k *= 256); )
      R += this[f + G] * k;
    return k *= 128, R >= k && (R -= Math.pow(2, 8 * p)), R;
  }, s.prototype.readIntBE = function(f, p, N) {
    f = f >>> 0, p = p >>> 0, N || pe(f, p, this.length);
    let R = p, k = 1, G = this[f + --R];
    for (; R > 0 && (k *= 256); )
      G += this[f + --R] * k;
    return k *= 128, G >= k && (G -= Math.pow(2, 8 * p)), G;
  }, s.prototype.readInt8 = function(f, p) {
    return f = f >>> 0, p || pe(f, 1, this.length), this[f] & 128 ? (255 - this[f] + 1) * -1 : this[f];
  }, s.prototype.readInt16LE = function(f, p) {
    f = f >>> 0, p || pe(f, 2, this.length);
    const N = this[f] | this[f + 1] << 8;
    return N & 32768 ? N | 4294901760 : N;
  }, s.prototype.readInt16BE = function(f, p) {
    f = f >>> 0, p || pe(f, 2, this.length);
    const N = this[f + 1] | this[f] << 8;
    return N & 32768 ? N | 4294901760 : N;
  }, s.prototype.readInt32LE = function(f, p) {
    return f = f >>> 0, p || pe(f, 4, this.length), this[f] | this[f + 1] << 8 | this[f + 2] << 16 | this[f + 3] << 24;
  }, s.prototype.readInt32BE = function(f, p) {
    return f = f >>> 0, p || pe(f, 4, this.length), this[f] << 24 | this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3];
  }, s.prototype.readBigInt64LE = L(function(f) {
    f = f >>> 0, ht(f, "offset");
    const p = this[f], N = this[f + 7];
    (p === void 0 || N === void 0) && et(f, this.length - 8);
    const R = this[f + 4] + this[f + 5] * 2 ** 8 + this[f + 6] * 2 ** 16 + (N << 24);
    return (BigInt(R) << BigInt(32)) + BigInt(p + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24);
  }), s.prototype.readBigInt64BE = L(function(f) {
    f = f >>> 0, ht(f, "offset");
    const p = this[f], N = this[f + 7];
    (p === void 0 || N === void 0) && et(f, this.length - 8);
    const R = (p << 24) + // Overflow
    this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f];
    return (BigInt(R) << BigInt(32)) + BigInt(this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + N);
  }), s.prototype.readFloatLE = function(f, p) {
    return f = f >>> 0, p || pe(f, 4, this.length), r.read(this, f, !0, 23, 4);
  }, s.prototype.readFloatBE = function(f, p) {
    return f = f >>> 0, p || pe(f, 4, this.length), r.read(this, f, !1, 23, 4);
  }, s.prototype.readDoubleLE = function(f, p) {
    return f = f >>> 0, p || pe(f, 8, this.length), r.read(this, f, !0, 52, 8);
  }, s.prototype.readDoubleBE = function(f, p) {
    return f = f >>> 0, p || pe(f, 8, this.length), r.read(this, f, !1, 52, 8);
  };
  function Q(w, f, p, N, R, k) {
    if (!s.isBuffer(w)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (f > R || f < k) throw new RangeError('"value" argument is out of bounds');
    if (p + N > w.length) throw new RangeError("Index out of range");
  }
  s.prototype.writeUintLE = s.prototype.writeUIntLE = function(f, p, N, R) {
    if (f = +f, p = p >>> 0, N = N >>> 0, !R) {
      const X = Math.pow(2, 8 * N) - 1;
      Q(this, f, p, N, X, 0);
    }
    let k = 1, G = 0;
    for (this[p] = f & 255; ++G < N && (k *= 256); )
      this[p + G] = f / k & 255;
    return p + N;
  }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(f, p, N, R) {
    if (f = +f, p = p >>> 0, N = N >>> 0, !R) {
      const X = Math.pow(2, 8 * N) - 1;
      Q(this, f, p, N, X, 0);
    }
    let k = N - 1, G = 1;
    for (this[p + k] = f & 255; --k >= 0 && (G *= 256); )
      this[p + k] = f / G & 255;
    return p + N;
  }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(f, p, N) {
    return f = +f, p = p >>> 0, N || Q(this, f, p, 1, 255, 0), this[p] = f & 255, p + 1;
  }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(f, p, N) {
    return f = +f, p = p >>> 0, N || Q(this, f, p, 2, 65535, 0), this[p] = f & 255, this[p + 1] = f >>> 8, p + 2;
  }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(f, p, N) {
    return f = +f, p = p >>> 0, N || Q(this, f, p, 2, 65535, 0), this[p] = f >>> 8, this[p + 1] = f & 255, p + 2;
  }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(f, p, N) {
    return f = +f, p = p >>> 0, N || Q(this, f, p, 4, 4294967295, 0), this[p + 3] = f >>> 24, this[p + 2] = f >>> 16, this[p + 1] = f >>> 8, this[p] = f & 255, p + 4;
  }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(f, p, N) {
    return f = +f, p = p >>> 0, N || Q(this, f, p, 4, 4294967295, 0), this[p] = f >>> 24, this[p + 1] = f >>> 16, this[p + 2] = f >>> 8, this[p + 3] = f & 255, p + 4;
  };
  function it(w, f, p, N, R) {
    Yt(f, N, R, w, p, 7);
    let k = Number(f & BigInt(4294967295));
    w[p++] = k, k = k >> 8, w[p++] = k, k = k >> 8, w[p++] = k, k = k >> 8, w[p++] = k;
    let G = Number(f >> BigInt(32) & BigInt(4294967295));
    return w[p++] = G, G = G >> 8, w[p++] = G, G = G >> 8, w[p++] = G, G = G >> 8, w[p++] = G, p;
  }
  function At(w, f, p, N, R) {
    Yt(f, N, R, w, p, 7);
    let k = Number(f & BigInt(4294967295));
    w[p + 7] = k, k = k >> 8, w[p + 6] = k, k = k >> 8, w[p + 5] = k, k = k >> 8, w[p + 4] = k;
    let G = Number(f >> BigInt(32) & BigInt(4294967295));
    return w[p + 3] = G, G = G >> 8, w[p + 2] = G, G = G >> 8, w[p + 1] = G, G = G >> 8, w[p] = G, p + 8;
  }
  s.prototype.writeBigUInt64LE = L(function(f, p = 0) {
    return it(this, f, p, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeBigUInt64BE = L(function(f, p = 0) {
    return At(this, f, p, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeIntLE = function(f, p, N, R) {
    if (f = +f, p = p >>> 0, !R) {
      const J = Math.pow(2, 8 * N - 1);
      Q(this, f, p, N, J - 1, -J);
    }
    let k = 0, G = 1, X = 0;
    for (this[p] = f & 255; ++k < N && (G *= 256); )
      f < 0 && X === 0 && this[p + k - 1] !== 0 && (X = 1), this[p + k] = (f / G >> 0) - X & 255;
    return p + N;
  }, s.prototype.writeIntBE = function(f, p, N, R) {
    if (f = +f, p = p >>> 0, !R) {
      const J = Math.pow(2, 8 * N - 1);
      Q(this, f, p, N, J - 1, -J);
    }
    let k = N - 1, G = 1, X = 0;
    for (this[p + k] = f & 255; --k >= 0 && (G *= 256); )
      f < 0 && X === 0 && this[p + k + 1] !== 0 && (X = 1), this[p + k] = (f / G >> 0) - X & 255;
    return p + N;
  }, s.prototype.writeInt8 = function(f, p, N) {
    return f = +f, p = p >>> 0, N || Q(this, f, p, 1, 127, -128), f < 0 && (f = 255 + f + 1), this[p] = f & 255, p + 1;
  }, s.prototype.writeInt16LE = function(f, p, N) {
    return f = +f, p = p >>> 0, N || Q(this, f, p, 2, 32767, -32768), this[p] = f & 255, this[p + 1] = f >>> 8, p + 2;
  }, s.prototype.writeInt16BE = function(f, p, N) {
    return f = +f, p = p >>> 0, N || Q(this, f, p, 2, 32767, -32768), this[p] = f >>> 8, this[p + 1] = f & 255, p + 2;
  }, s.prototype.writeInt32LE = function(f, p, N) {
    return f = +f, p = p >>> 0, N || Q(this, f, p, 4, 2147483647, -2147483648), this[p] = f & 255, this[p + 1] = f >>> 8, this[p + 2] = f >>> 16, this[p + 3] = f >>> 24, p + 4;
  }, s.prototype.writeInt32BE = function(f, p, N) {
    return f = +f, p = p >>> 0, N || Q(this, f, p, 4, 2147483647, -2147483648), f < 0 && (f = 4294967295 + f + 1), this[p] = f >>> 24, this[p + 1] = f >>> 16, this[p + 2] = f >>> 8, this[p + 3] = f & 255, p + 4;
  }, s.prototype.writeBigInt64LE = L(function(f, p = 0) {
    return it(this, f, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), s.prototype.writeBigInt64BE = L(function(f, p = 0) {
    return At(this, f, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Mt(w, f, p, N, R, k) {
    if (p + N > w.length) throw new RangeError("Index out of range");
    if (p < 0) throw new RangeError("Index out of range");
  }
  function Ht(w, f, p, N, R) {
    return f = +f, p = p >>> 0, R || Mt(w, f, p, 4), r.write(w, f, p, N, 23, 4), p + 4;
  }
  s.prototype.writeFloatLE = function(f, p, N) {
    return Ht(this, f, p, !0, N);
  }, s.prototype.writeFloatBE = function(f, p, N) {
    return Ht(this, f, p, !1, N);
  };
  function Tt(w, f, p, N, R) {
    return f = +f, p = p >>> 0, R || Mt(w, f, p, 8), r.write(w, f, p, N, 52, 8), p + 8;
  }
  s.prototype.writeDoubleLE = function(f, p, N) {
    return Tt(this, f, p, !0, N);
  }, s.prototype.writeDoubleBE = function(f, p, N) {
    return Tt(this, f, p, !1, N);
  }, s.prototype.copy = function(f, p, N, R) {
    if (!s.isBuffer(f)) throw new TypeError("argument should be a Buffer");
    if (N || (N = 0), !R && R !== 0 && (R = this.length), p >= f.length && (p = f.length), p || (p = 0), R > 0 && R < N && (R = N), R === N || f.length === 0 || this.length === 0) return 0;
    if (p < 0)
      throw new RangeError("targetStart out of bounds");
    if (N < 0 || N >= this.length) throw new RangeError("Index out of range");
    if (R < 0) throw new RangeError("sourceEnd out of bounds");
    R > this.length && (R = this.length), f.length - p < R - N && (R = f.length - p + N);
    const k = R - N;
    return this === f && typeof a.prototype.copyWithin == "function" ? this.copyWithin(p, N, R) : a.prototype.set.call(
      f,
      this.subarray(N, R),
      p
    ), k;
  }, s.prototype.fill = function(f, p, N, R) {
    if (typeof f == "string") {
      if (typeof p == "string" ? (R = p, p = 0, N = this.length) : typeof N == "string" && (R = N, N = this.length), R !== void 0 && typeof R != "string")
        throw new TypeError("encoding must be a string");
      if (typeof R == "string" && !s.isEncoding(R))
        throw new TypeError("Unknown encoding: " + R);
      if (f.length === 1) {
        const G = f.charCodeAt(0);
        (R === "utf8" && G < 128 || R === "latin1") && (f = G);
      }
    } else typeof f == "number" ? f = f & 255 : typeof f == "boolean" && (f = Number(f));
    if (p < 0 || this.length < p || this.length < N)
      throw new RangeError("Out of range index");
    if (N <= p)
      return this;
    p = p >>> 0, N = N === void 0 ? this.length : N >>> 0, f || (f = 0);
    let k;
    if (typeof f == "number")
      for (k = p; k < N; ++k)
        this[k] = f;
    else {
      const G = s.isBuffer(f) ? f : s.from(f, R), X = G.length;
      if (X === 0)
        throw new TypeError('The value "' + f + '" is invalid for argument "value"');
      for (k = 0; k < N - p; ++k)
        this[k + p] = G[k % X];
    }
    return this;
  };
  const ct = {};
  function ot(w, f, p) {
    ct[w] = class extends p {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: f.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${w}]`, this.stack, delete this.name;
      }
      get code() {
        return w;
      }
      set code(R) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: R,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${w}]: ${this.message}`;
      }
    };
  }
  ot(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(w) {
      return w ? `${w} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), ot(
    "ERR_INVALID_ARG_TYPE",
    function(w, f) {
      return `The "${w}" argument must be of type number. Received type ${typeof f}`;
    },
    TypeError
  ), ot(
    "ERR_OUT_OF_RANGE",
    function(w, f, p) {
      let N = `The value of "${w}" is out of range.`, R = p;
      return Number.isInteger(p) && Math.abs(p) > 2 ** 32 ? R = It(String(p)) : typeof p == "bigint" && (R = String(p), (p > BigInt(2) ** BigInt(32) || p < -(BigInt(2) ** BigInt(32))) && (R = It(R)), R += "n"), N += ` It must be ${f}. Received ${R}`, N;
    },
    RangeError
  );
  function It(w) {
    let f = "", p = w.length;
    const N = w[0] === "-" ? 1 : 0;
    for (; p >= N + 4; p -= 3)
      f = `_${w.slice(p - 3, p)}${f}`;
    return `${w.slice(0, p)}${f}`;
  }
  function ft(w, f, p) {
    ht(f, "offset"), (w[f] === void 0 || w[f + p] === void 0) && et(f, w.length - (p + 1));
  }
  function Yt(w, f, p, N, R, k) {
    if (w > p || w < f) {
      const G = typeof f == "bigint" ? "n" : "";
      let X;
      throw f === 0 || f === BigInt(0) ? X = `>= 0${G} and < 2${G} ** ${(k + 1) * 8}${G}` : X = `>= -(2${G} ** ${(k + 1) * 8 - 1}${G}) and < 2 ** ${(k + 1) * 8 - 1}${G}`, new ct.ERR_OUT_OF_RANGE("value", X, w);
    }
    ft(N, R, k);
  }
  function ht(w, f) {
    if (typeof w != "number")
      throw new ct.ERR_INVALID_ARG_TYPE(f, "number", w);
  }
  function et(w, f, p) {
    throw Math.floor(w) !== w ? (ht(w, p), new ct.ERR_OUT_OF_RANGE("offset", "an integer", w)) : f < 0 ? new ct.ERR_BUFFER_OUT_OF_BOUNDS() : new ct.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${f}`,
      w
    );
  }
  const Ut = /[^+/0-9A-Za-z-_]/g;
  function Zt(w) {
    if (w = w.split("=")[0], w = w.trim().replace(Ut, ""), w.length < 2) return "";
    for (; w.length % 4 !== 0; )
      w = w + "=";
    return w;
  }
  function pt(w, f) {
    f = f || 1 / 0;
    let p;
    const N = w.length;
    let R = null;
    const k = [];
    for (let G = 0; G < N; ++G) {
      if (p = w.charCodeAt(G), p > 55295 && p < 57344) {
        if (!R) {
          if (p > 56319) {
            (f -= 3) > -1 && k.push(239, 191, 189);
            continue;
          } else if (G + 1 === N) {
            (f -= 3) > -1 && k.push(239, 191, 189);
            continue;
          }
          R = p;
          continue;
        }
        if (p < 56320) {
          (f -= 3) > -1 && k.push(239, 191, 189), R = p;
          continue;
        }
        p = (R - 55296 << 10 | p - 56320) + 65536;
      } else R && (f -= 3) > -1 && k.push(239, 191, 189);
      if (R = null, p < 128) {
        if ((f -= 1) < 0) break;
        k.push(p);
      } else if (p < 2048) {
        if ((f -= 2) < 0) break;
        k.push(
          p >> 6 | 192,
          p & 63 | 128
        );
      } else if (p < 65536) {
        if ((f -= 3) < 0) break;
        k.push(
          p >> 12 | 224,
          p >> 6 & 63 | 128,
          p & 63 | 128
        );
      } else if (p < 1114112) {
        if ((f -= 4) < 0) break;
        k.push(
          p >> 18 | 240,
          p >> 12 & 63 | 128,
          p >> 6 & 63 | 128,
          p & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return k;
  }
  function ar(w) {
    const f = [];
    for (let p = 0; p < w.length; ++p)
      f.push(w.charCodeAt(p) & 255);
    return f;
  }
  function Er(w, f) {
    let p, N, R;
    const k = [];
    for (let G = 0; G < w.length && !((f -= 2) < 0); ++G)
      p = w.charCodeAt(G), N = p >> 8, R = p % 256, k.push(R), k.push(N);
    return k;
  }
  function Jt(w) {
    return e.toByteArray(Zt(w));
  }
  function Z(w, f, p, N) {
    let R;
    for (R = 0; R < N && !(R + p >= f.length || R >= w.length); ++R)
      f[R + p] = w[R];
    return R;
  }
  function we(w, f) {
    return w instanceof f || w != null && w.constructor != null && w.constructor.name != null && w.constructor.name === f.name;
  }
  function b(w) {
    return w !== w;
  }
  const O = function() {
    const w = "0123456789abcdef", f = new Array(256);
    for (let p = 0; p < 16; ++p) {
      const N = p * 16;
      for (let R = 0; R < 16; ++R)
        f[N + R] = w[p] + w[R];
    }
    return f;
  }();
  function L(w) {
    return typeof BigInt > "u" ? U : w;
  }
  function U() {
    throw new Error("BigInt not supported");
  }
})(tu);
const mh = tu.Buffer, gt = 100 * 1e3 * 1e3, yh = 32768, wh = 9783072e5;
class Eh {
  constructor(e) {
    console.info({ id: e });
  }
}
class vh {
  constructor() {
    this.debug = !1;
  }
  parse64Content(e) {
    const r = window.atob(e), i = r.length, l = new mh(i);
    for (let a = 0; a < i; a++)
      l[a] = r.charCodeAt(a);
    return this.parseBuffer(l);
  }
  parseBuffer(e) {
    if (e.toString("utf8", 0, 6) !== "bplist")
      throw new Error("Invalid binary plist. Expected 'bplist' at offset 0.");
    const l = e.slice(e.length - 32, e.length), a = l.readUInt8(6);
    this.debug && console.log("offsetSize: " + a);
    const h = l.readUInt8(7);
    this.debug && console.log("objectRefSize: " + h);
    const c = this.readUInt64BE(l, 8);
    this.debug && console.log("numObjects: " + c);
    const u = this.readUInt64BE(l, 16);
    this.debug && console.log("topObject: " + u);
    const o = this.readUInt64BE(l, 24);
    if (this.debug && console.log("offsetTableOffset: " + o), c > yh)
      throw new Error("maxObjectCount exceeded");
    const s = [];
    for (let d = 0; d < c; d++) {
      const m = e.slice(o + d * a, o + (d + 1) * a);
      s[d] = this.readUInt(m, 0), this.debug;
    }
    const g = (d) => {
      const m = s[d], y = e[m], v = (y & 240) >> 4, _ = y & 15, T = () => {
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
            throw new Error("Unhandled simple type 0x" + v.toString(16));
        }
      }, E = (D) => {
        let B = "", $;
        for ($ = 0; $ < D.length && D[$] === 0; $++)
          ;
        for (; $ < D.length; $++) {
          const q = "00" + D[$].toString(16);
          B += q.substr(q.length - 2);
        }
        return B;
      }, I = () => {
        const D = Math.pow(2, _);
        if (D > 4) {
          const B = e.slice(m + 1, m + 1 + D), $ = E(B);
          return ah($, 16);
        }
        if (D < gt)
          return this.readUInt(e.slice(m + 1, m + 1 + D));
        throw new Error(
          "Too little heap space available! Wanted to read " + D + " bytes, but only " + gt + " are available."
        );
      }, S = () => {
        const D = _ + 1;
        if (D < gt)
          return new Eh(this.readUInt(e.slice(m + 1, m + 1 + D)));
        throw new Error(
          "To little heap space available! Wanted to read " + D + " bytes, but only " + gt + " are available."
        );
      }, A = () => {
        const D = Math.pow(2, _);
        if (D < gt) {
          const B = e.slice(m + 1, m + 1 + D);
          if (D === 4)
            return B.readFloatBE(0);
          if (D === 8)
            return B.readDoubleBE(0);
        } else
          throw new Error(
            "To little heap space available! Wanted to read " + D + " bytes, but only " + gt + " are available."
          );
      }, x = () => {
        _ !== 3 && console.error("Unknown date type :" + _ + ". Parsing anyway...");
        const D = e.slice(m + 1, m + 9);
        return new Date(wh + 1e3 * D.readDoubleBE(0));
      }, C = () => {
        let D = 1, B = _;
        if (_ === 15) {
          const $ = e[m + 1], q = ($ & 240) / 16;
          q !== 1 && console.error("0x4: UNEXPECTED LENGTH-INT TYPE! " + q);
          const V = $ & 15, oe = Math.pow(2, V);
          D = 2 + oe, oe < 3 ? B = this.readUInt(e.slice(m + 2, m + 2 + oe)) : B = this.readUInt(e.slice(m + 2, m + 2 + oe));
        }
        if (B < gt)
          return e.slice(m + D, m + D + B);
        throw new Error(
          "To little heap space available! Wanted to read " + B + " bytes, but only " + gt + " are available."
        );
      }, P = (D) => {
        D = D || 0;
        let B = "utf8", $ = _, q = 1;
        if (_ === 15) {
          const V = e[m + 1], oe = (V & 240) / 16;
          oe !== 1 && console.error("UNEXPECTED LENGTH-INT TYPE! " + oe);
          const ne = V & 15, te = Math.pow(2, ne);
          q = 2 + te, te < 3 ? $ = this.readUInt(e.slice(m + 2, m + 2 + te)) : $ = this.readUInt(e.slice(m + 2, m + 2 + te));
        }
        if ($ *= D + 1, $ < gt) {
          let V = e.toString("utf8", m + q, m + q + $);
          return D && (V = this.swapBytes(V), B = "ucs2"), V.toString(B);
        } else
          throw new Error(
            "To little heap space available! Wanted to read " + $ + " bytes, but only " + gt + " are available."
          );
      }, F = () => {
        let D = _, B = 1;
        if (_ === 15) {
          const q = e[m + 1], V = (q & 240) / 16;
          V !== 1 && console.error("0xa: UNEXPECTED LENGTH-INT TYPE! " + V);
          const oe = q & 15, ne = Math.pow(2, oe);
          B = 2 + ne, ne < 3 ? D = this.readUInt(e.slice(m + 2, m + 2 + ne)) : D = this.readUInt(e.slice(m + 2, m + 2 + ne));
        }
        if (D * h > gt)
          throw new Error("To little heap space available!");
        const $ = [];
        for (let q = 0; q < D; q++) {
          const V = this.readUInt(
            e.slice(m + B + q * h, m + B + (q + 1) * h)
          );
          $[q] = g(V);
        }
        return $;
      }, j = () => {
        let D = _, B = 1;
        if (_ === 15) {
          const q = e[m + 1], V = (q & 240) / 16;
          V !== 1 && console.error("0xD: UNEXPECTED LENGTH-INT TYPE! " + V);
          const oe = q & 15, ne = Math.pow(2, oe);
          B = 2 + ne, ne < 3 ? D = this.readUInt(e.slice(m + 2, m + 2 + ne)) : D = this.readUInt(e.slice(m + 2, m + 2 + ne));
        }
        if (D * 2 * h > gt)
          throw new Error("To little heap space available!");
        this.debug && console.log("Parsing dictionary #" + d);
        const $ = {};
        for (let q = 0; q < D; q++) {
          const V = this.readUInt(
            e.slice(m + B + q * h, m + B + (q + 1) * h)
          ), oe = this.readUInt(
            e.slice(
              m + B + D * h + q * h,
              m + B + D * h + (q + 1) * h
            )
          ), ne = g(V), te = g(oe);
          this.debug && console.log("  DICT #" + d + ": Mapped " + ne + " to " + te), $[ne] = te;
        }
        return $;
      };
      switch (v) {
        case 0:
          return T();
        case 1:
          return I();
        case 8:
          return S();
        case 2:
          return A();
        case 3:
          return x();
        case 4:
          return C();
        case 5:
          return P();
        case 6:
          return P(!0);
        case 10:
          return F();
        case 13:
          return j();
        default:
          throw new Error("Unhandled type 0x" + v.toString(16));
      }
    };
    return [g(u)];
  }
  readUInt(e, r) {
    r = r || 0;
    let i = 0;
    for (let l = r; l < e.length; l++)
      i <<= 8, i |= e[l] & 255;
    return i;
  }
  // we're just going to toss the high order bits because javascript doesn't have 64-bit ints
  readUInt64BE(e, r) {
    return e.slice(r, r + 8).readUInt32BE(4, 8);
  }
  swapBytes(e) {
    const r = e.length;
    for (let i = 0; i < r; i += 2) {
      const l = e[i];
      e[i] = e[i + 1], e[i + 1] = l;
    }
    return e;
  }
}
const bh = new vh(), xt = {
  skipConfirmation: "X-Skip-Confirm-Navigation=1",
  sameWindow: "X-Target=_self"
}, Qt = {
  skipConfirmation: "X-Skip-Confirm-Navigation",
  sameWindow: "X-Target"
}, Bs = {
  url: "",
  sameWindow: !1,
  skipConfirmation: !1
};
class at {
  /**
   * Generates a URL file.
   */
  static generateURLFileContent(e, r, i = !1, l = !1) {
    let a = "";
    return e && e.indexOf("[InternetShortcut]") !== -1 && e.indexOf("URL=") !== -1 ? a = e.replace(new RegExp("URL=.*", "gm"), `URL=${He(r)}`) : a = `[InternetShortcut]\r
URL=${He(r)}`, !i && a.indexOf(xt.sameWindow) !== -1 ? a = a.replace(xt.sameWindow, "") : i && a.indexOf(xt.sameWindow) === -1 && (a = `${a}\r
${xt.sameWindow}`), !l && a.indexOf(xt.skipConfirmation) !== -1 ? a = a.replace(xt.skipConfirmation, "") : l && a.indexOf(xt.skipConfirmation) === -1 && (a = `${a}\r
${xt.skipConfirmation}`), a = a.replace(/\r\n\r\n/gm, `\r
`).trim(), `${a}\r
`;
  }
  /**
   * Parse a URL file.
   */
  static parseURLFile(e) {
    const r = { ...Bs };
    if (e) {
      const i = e.match("URL=.*");
      if (i && Array.isArray(i) && i.length > 0) {
        const l = i[0];
        r.url = He(l.replace("URL=", ""));
      }
      e.indexOf(xt.skipConfirmation) !== -1 && (r.skipConfirmation = !0), e.indexOf(xt.sameWindow) !== -1 && (r.sameWindow = !0);
    }
    return r;
  }
  /**
   * Generates a webloc file.
   */
  static generateWeblocFileContent(e, r, i = !1, l = !1) {
    let a = "", h = !1;
    if (e) {
      const c = new window.DOMParser(), u = js(e), o = c.parseFromString(u, "text/xml"), s = [...o.getElementsByTagName("dict"), ...o.getElementsByTagName("extra")];
      let g = !1, d = !1;
      if (s && s.length)
        for (const y of s) {
          const v = y.getElementsByTagName("key"), _ = y.getElementsByTagName("string");
          bt(v) === "URL" && (_i(_, He(r)), h = !0), bt(v) === Qt.sameWindow && bt(_) === "_self" && (i ? _i(_, "_self") : o.getElementsByTagName("plist")[0].removeChild(y), d = !0), bt(v) === Qt.skipConfirmation && bt(_) === "1" && (l ? _i(_, "1") : o.getElementsByTagName("plist")[0].removeChild(y), g = !0);
        }
      if (i && !d) {
        const y = Ds(o, Qt.sameWindow, "_self");
        o.getElementsByTagName("plist")[0].appendChild(y);
      }
      if (l && !g) {
        const y = Ds(o, Qt.skipConfirmation, "1");
        o.getElementsByTagName("plist")[0].appendChild(y);
      }
      a = `<?xml version="1.0" encoding="UTF-8"?>
			${new window.XMLSerializer().serializeToString(o)}`, a.indexOf("parsererror") > -1 && (console.error("Parse error", a), a = ""), a = Nh(a);
    }
    return (!a || !h) && (a = `<?xml version="1.0" encoding="UTF-8"?>
				<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
				<plist version="1.0">
					<dict>
						<key>URL</key>
						<string>${He(r)}</string>
					</dict>`, i && (a = `${a}
				<extra>
					<key>${Qt.sameWindow}</key>
					<string>_self</string>
				</extra>`), l && (a = `${a}
				<extra>
					<key>${Qt.skipConfirmation}</key>
					<string>1</string>
				</extra>`), a = `${a}
			</plist>`), a = Ah(a), a = a.replace(/(\n|\b)\t+/g, "$1").trim(), a = a.replace(/^\s*$(?:\r\n?|\n)/gm, "").trim(), a;
  }
  /**
   * Parse a webloc file.
   */
  static parseWeblocFile(e) {
    const r = { ...Bs };
    if (e)
      if (e.substring(0, 6) === "bplist")
        try {
          const i = bh.parse64Content(window.btoa(e));
          i && i.length && i[0] && i[0].URL && (r.url = i[0].URL);
        } catch (i) {
          console.info(i);
        }
      else {
        const i = new window.DOMParser(), l = js(e), a = i.parseFromString(l, "text/xml"), h = [...a.getElementsByTagName("dict"), ...a.getElementsByTagName("extra")];
        if (h && h.length)
          for (const c of h) {
            const u = c.getElementsByTagName("key"), o = c.getElementsByTagName("string");
            bt(u) === "URL" && (r.url = He(bt(o))), bt(u) === Qt.sameWindow && bt(o) === "_self" && (r.sameWindow = !0), bt(u) === Qt.skipConfirmation && bt(o) === "1" && (r.skipConfirmation = !0);
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
const bt = (n) => n && n.length > 0 && n[0].childNodes && n[0].childNodes.length > 0 && n[0].childNodes[0] ? n[0].childNodes[0].nodeValue : "", _i = (n, e) => {
  n && n.length > 0 && n[0].childNodes && n[0].childNodes.length > 0 && n[0].childNodes[0] && (n[0].childNodes[0].nodeValue = e);
}, Ds = (n, e, r) => {
  const i = n.createElement("extra"), l = n.createElement("key");
  l.appendChild(n.createTextNode(e)), i.appendChild(l);
  const a = n.createElement("string");
  return a.appendChild(n.createTextNode(r)), i.appendChild(a), i;
}, Nh = (n) => n.replace(/></g, `>
<`), Ah = (n) => n.replace(/<extra>/g, "<!-- <extra>").replace(/<\/extra>/g, "</extra> -->"), js = (n) => n.replace(/<!-- <extra>/g, "<extra>").replace(/<\/extra> -->/g, "</extra>");
function Th(n) {
  let e, r, i, l, a = (
    /*t*/
    n[1]("files_linkeditor", "View link") + ""
  ), h, c, u;
  return {
    c() {
      e = ue("div"), r = ue("a"), i = ue("span"), l = be(), h = Be(a), H(i, "class", "icon icon-link"), H(r, "href", "#/"), H(r, "class", "button"), H(r, "id", "downloadFile"), H(e, "class", "directDownload");
    },
    m(o, s) {
      me(o, e, s), ee(e, r), ee(r, i), ee(r, l), ee(r, h), c || (u = nt(r, "click", Vt(function() {
        Di(
          /*onClick*/
          n[0]
        ) && n[0].apply(this, arguments);
      })), c = !0);
    },
    p(o, [s]) {
      n = o;
    },
    i: kt,
    o: kt,
    d(o) {
      o && de(e), c = !1, u();
    }
  };
}
function Ih(n, e, r) {
  let { onClick: i } = e;
  const l = window.t;
  return n.$$set = (a) => {
    "onClick" in a && r(0, i = a.onClick);
  }, [i, l];
}
class _h extends kr {
  constructor(e) {
    super(), Fr(this, e, Ih, Th, gr, { onClick: 0 });
  }
}
const dn = "application/internet-shortcut", Oh = [];
class tr {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    var i, l, a, h, c, u, o, s;
    (l = (i = window.OCA.Files) == null ? void 0 : i.fileActions) == null || l.registerAction({
      name: "editLink",
      displayName: t("files_linkeditor", "Edit link"),
      mime: dn,
      actionHandler: async (g, d) => await tr.loadAndChangeViewMode({ fileName: g, context: d, nextViewMode: "edit" }),
      permissions: window.OC.currentUser && window.OC.PERMISSION_UPDATE,
      iconClass: "icon-link"
    }), (h = (a = window.OCA.Files) == null ? void 0 : a.fileActions) == null || h.registerAction({
      name: "viewLink",
      displayName: t("files_linkeditor", "View link"),
      mime: dn,
      actionHandler: async (g, d) => {
        window.OC.currentUser ? await tr.loadAndChangeViewMode({ fileName: g, context: d, nextViewMode: "view" }) : await tr.loadAndChangeViewMode({
          fileName: g,
          context: d,
          nextViewMode: "view",
          downloadUrl: d.fileList.getDownloadUrl(g),
          publicUser: !0
        });
      },
      permissions: window.OC.PERMISSION_READ,
      iconClass: "icon-link"
    }), (u = (c = window.OCA.Files) == null ? void 0 : c.fileActions) == null || u.setDefault(dn, "viewLink"), (s = (o = window.OC.Plugins) == null ? void 0 : o.register) == null || s.call(o, "OCA.Files.NewFileMenu", {
      attach: function(g) {
        const d = g.fileList;
        if (d.id !== "files")
          return;
        const m = ({ id: y, displayName: v, templateName: _ }) => {
          g.addMenuEntry({
            id: y,
            displayName: v,
            templateName: _,
            iconClass: "icon-link",
            fileType: dn,
            actionHandler: function(T) {
              const E = d.getCurrentDirectory();
              lt.update(() => "edit"), Ft.update(
                () => wt.getFileConfig({
                  name: T,
                  dir: E,
                  isNew: !0,
                  onCreate: async (I) => {
                    await d.createFile(T, {
                      scrollTo: !1
                    });
                    const S = await wt.load({ fileName: T, dir: E });
                    await tr.saveAndChangeViewMode({ ...I, fileModifiedTime: S.mtime });
                  }
                })
              );
            }
          });
        };
        m({
          id: "application-internet-shortcut",
          displayName: `${window.t("files_linkeditor", "New link")} (.URL)`,
          // TRANSLATORS default filename when creating a new link file from the files list, keep .URL at the end
          templateName: window.t("files_linkeditor", "Link.URL")
        }), m({
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
      var r = at.getExtension(g);
      if (r === "url" || r === "webloc") {
        const d = (document.querySelector("input#downloadURL") || { value: "" }).value;
        Oh.push(
          new _h({
            anchor: document.querySelector(".directDownload"),
            target: document.querySelector(".directDownload").parentElement,
            props: {
              onClick: () => {
                tr.loadAndChangeViewMode({
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
  static async loadAndChangeViewMode({ fileName: e, context: r, nextViewMode: i, publicUser: l, downloadUrl: a }) {
    const h = r ? encodeURI(r.fileList.linkTo() + "?path=" + r.dir) : window.location.href;
    lt.update(() => i), Ft.update(
      () => wt.getFileConfig({
        name: e,
        currentUrl: h,
        dir: r ? r.dir : ""
      })
    );
    let c = {};
    if (l ? c = await wt.loadPublic({ downloadUrl: a }) : c = await wt.load({ fileName: e, dir: r.dir }), c) {
      const u = at.getExtension(e);
      let o = {};
      u === "webloc" ? o = at.parseWeblocFile(c.filecontents) : o = at.parseURLFile(c.filecontents), Ft.update(
        (s) => wt.getFileConfig({ ...s, ...o, fileModifiedTime: c.mtime, isLoaded: !0 })
      );
    } else
      window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async saveAndChangeViewMode({ name: e, dir: r, url: i, fileModifiedTime: l, sameWindow: a, skipConfirmation: h }) {
    const c = at.getExtension(e);
    let u = "";
    c === "webloc" ? u = at.generateWeblocFileContent("", i, a, h) : u = at.generateURLFileContent("", i, a, h), await wt.save({ fileContent: u, name: e, dir: r, fileModifiedTime: l }), lt.update(() => "none");
  }
}
function Gs(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Link target URL") + ""
  ), i, l, a, h, c, u, o, s, g, d, m, y, v, _, T, E;
  return {
    c() {
      e = ue("label"), i = Be(r), l = be(), a = ue("br"), h = be(), c = ue("input"), u = be(), o = ue("input"), s = be(), g = ue("label"), g.textContent = `${/*t*/
      n[2]("files_linkeditor", "Open in same window")}`, d = be(), m = ue("input"), v = be(), _ = ue("label"), _.textContent = `${/*t*/
      n[2]("files_linkeditor", "Skip confirmation dialog before open (has to open in same window)")}`, H(c, "type", "text"), Gi(c, "width", "100%"), H(c, "class", "input-wide"), c.autofocus = !0, H(c, "data-cy", "url-input"), H(
        c,
        "placeholder",
        /*t*/
        n[2]("files_linkeditor", "e.g. https://example.org")
      ), H(o, "type", "checkbox"), H(o, "id", "linkeditor_sameWindow"), H(o, "class", "checkbox"), H(g, "for", "linkeditor_sameWindow"), H(g, "class", "space-top"), H(m, "type", "checkbox"), m.disabled = y = !/*file*/
      n[0].sameWindow, H(m, "id", "linkeditor_skipConfirmation"), H(m, "class", "checkbox"), H(_, "for", "linkeditor_skipConfirmation");
    },
    m(I, S) {
      me(I, e, S), ee(e, i), ee(e, l), ee(e, a), ee(e, h), ee(e, c), vn(
        c,
        /*file*/
        n[0].url
      ), me(I, u, S), me(I, o, S), o.checked = /*file*/
      n[0].sameWindow, me(I, s, S), me(I, g, S), me(I, d, S), me(I, m, S), m.checked = /*file*/
      n[0].skipConfirmation, me(I, v, S), me(I, _, S), c.focus(), T || (E = [
        nt(
          c,
          "input",
          /*input0_input_handler*/
          n[5]
        ),
        nt(
          o,
          "change",
          /*input1_change_handler*/
          n[6]
        ),
        nt(
          m,
          "change",
          /*input2_change_handler*/
          n[7]
        )
      ], T = !0);
    },
    p(I, S) {
      S & /*file*/
      1 && c.value !== /*file*/
      I[0].url && vn(
        c,
        /*file*/
        I[0].url
      ), S & /*file*/
      1 && (o.checked = /*file*/
      I[0].sameWindow), S & /*file*/
      1 && y !== (y = !/*file*/
      I[0].sameWindow) && (m.disabled = y), S & /*file*/
      1 && (m.checked = /*file*/
      I[0].skipConfirmation);
    },
    d(I) {
      I && (de(e), de(u), de(o), de(s), de(g), de(d), de(m), de(v), de(_)), T = !1, Xt(E);
    }
  };
}
function qs(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Visit link") + ""
  ), i, l;
  return {
    c() {
      e = ue("a"), i = Be(r), H(e, "href", l = He(
        /*file*/
        n[0].url
      )), H(e, "target", "_blank"), H(e, "class", "button");
    },
    m(a, h) {
      me(a, e, h), ee(e, i);
    },
    p(a, h) {
      h & /*file*/
      1 && l !== (l = He(
        /*file*/
        a[0].url
      )) && H(e, "href", l);
    },
    d(a) {
      a && de(e);
    }
  };
}
function Vs(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Save") + ""
  ), i, l, a;
  return {
    c() {
      e = ue("a"), i = Be(r), H(e, "href", window.location.href), H(e, "class", "primary button");
    },
    m(h, c) {
      me(h, e, c), ee(e, i), l || (a = nt(e, "click", Vt(
        /*save*/
        n[4]
      )), l = !0);
    },
    p: kt,
    d(h) {
      h && de(e), l = !1, a();
    }
  };
}
function Rh(n) {
  let e, r, i, l = (
    /*file*/
    n[0].name + ""
  ), a, h, c, u, o, s, g, d = (
    /*t*/
    n[2]("files_linkeditor", "Cancel") + ""
  ), m, y, v, _, T = !/*loading*/
  n[1] && Gs(n), E = !/*loading*/
  n[1] && qs(n), I = !/*loading*/
  n[1] && Vs(n);
  return {
    c() {
      e = ue("form"), r = ue("div"), i = ue("h3"), a = Be(l), h = be(), T && T.c(), c = be(), u = ue("div"), E && E.c(), o = be(), s = ue("div"), g = ue("a"), m = Be(d), y = be(), I && I.c(), H(r, "class", "edit"), H(u, "class", "oc-dialog-buttonrow onebutton urlvisit"), H(g, "href", window.location.href), H(g, "class", "cancel button"), H(s, "class", "oc-dialog-buttonrow twobuttons"), H(
        e,
        "action",
        /*OC*/
        n[3].generateUrl("/")
      ), H(e, "method", "post");
    },
    m(S, A) {
      me(S, e, A), ee(e, r), ee(r, i), ee(i, a), ee(r, h), T && T.m(r, null), ee(e, c), ee(e, u), E && E.m(u, null), ee(e, o), ee(e, s), ee(s, g), ee(g, m), ee(s, y), I && I.m(s, null), v || (_ = [
        nt(g, "click", Vt(
          /*click_handler*/
          n[8]
        )),
        nt(e, "submit", Vt(
          /*save*/
          n[4]
        ))
      ], v = !0);
    },
    p(S, A) {
      A & /*file*/
      1 && l !== (l = /*file*/
      S[0].name + "") && ji(a, l), /*loading*/
      S[1] ? T && (T.d(1), T = null) : T ? T.p(S, A) : (T = Gs(S), T.c(), T.m(r, null)), /*loading*/
      S[1] ? E && (E.d(1), E = null) : E ? E.p(S, A) : (E = qs(S), E.c(), E.m(u, null)), /*loading*/
      S[1] ? I && (I.d(1), I = null) : I ? I.p(S, A) : (I = Vs(S), I.c(), I.m(s, null));
    },
    d(S) {
      S && de(e), T && T.d(), E && E.d(), I && I.d(), v = !1, Xt(_);
    }
  };
}
function xh(n) {
  let e, r;
  return e = new qi({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [Rh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      $r(e.$$.fragment);
    },
    m(i, l) {
      mr(e, i, l), r = !0;
    },
    p(i, [l]) {
      const a = {};
      l & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), l & /*$$scope, loading, file*/
      1027 && (a.$$scope = { dirty: l, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (Me(e.$$.fragment, i), r = !0);
    },
    o(i) {
      ut(e.$$.fragment, i), r = !1;
    },
    d(i) {
      yr(e, i);
    }
  };
}
function Sh(n, e, r) {
  let i, l;
  const a = window.t, h = window.OC;
  let c;
  Sn(() => {
    c = Ft.subscribe((m) => {
      r(0, i = m), i && (i.isLoaded || i.isNew) && r(1, l = !1);
    });
  }), Cn(() => {
    c();
  });
  const u = () => {
    r(1, l = !0), i.isNew && i.onCreate ? i.onCreate({ ...i }) : tr.saveAndChangeViewMode({ ...i });
  };
  function o() {
    i.url = this.value, r(0, i);
  }
  function s() {
    i.sameWindow = this.checked, r(0, i);
  }
  function g() {
    i.skipConfirmation = this.checked, r(0, i);
  }
  const d = () => {
    lt.update(() => "none");
  };
  return r(0, i = wt.getFileConfig()), r(1, l = !0), [
    i,
    l,
    a,
    h,
    u,
    o,
    s,
    g,
    d
  ];
}
class Ch extends kr {
  constructor(e) {
    super(), Fr(this, e, Sh, xh, gr, {});
  }
}
class er {
  static getFileConfig({
    name: e,
    url: r,
    downloadUrl: i,
    dir: l,
    onCreate: a,
    fileModifiedTime: h,
    isNew: c,
    isLoaded: u,
    sameWindow: o,
    skipConfirmation: s,
    permissions: g,
    existingContents: d,
    templateName: m
  } = {}) {
    return {
      name: e || "?",
      downloadUrl: i || "",
      url: r ? He(r) : "",
      dir: l || "",
      onCreate: a,
      fileModifiedTime: h || null,
      isNew: c || !1,
      isLoaded: u || !1,
      sameWindow: o || !1,
      skipConfirmation: s || !1,
      permissions: g || Ue.NONE,
      existingContents: d,
      templateName: m
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
    let l = `${i}${r}`;
    i !== "/" && (l = `${i}/${r}`);
    const a = df(), h = `${ja}${l}`;
    try {
      if (await a.putFileContents(h, e, { overwrite: !1 })) {
        const u = await a.stat(h, { details: !0, data: ff() });
        return sl("files:node:created", gf(u.data)), !0;
      }
    } catch (c) {
      console.error(c);
    }
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
}
const Ws = (n) => {
  if (!(n != null && n.name) || !(n != null && n.templateName))
    return n;
  const [, e] = n.templateName.split(".") ?? [], r = n.name.toLocaleLowerCase();
  return e && !r.endsWith(e.toLocaleLowerCase()) && (n.name += `.${e}`), n;
};
function Xs(n) {
  let e, r = (
    /*t*/
    n[3]("files_linkeditor", "File name") + ""
  ), i, l, a, h, c, u, o;
  return {
    c() {
      e = ue("label"), i = Be(r), l = be(), a = ue("br"), h = be(), c = ue("input"), H(c, "type", "text"), Gi(c, "width", "100%"), H(c, "class", "input-wide"), c.autofocus = !0, H(c, "data-cy", "name-input");
    },
    m(s, g) {
      me(s, e, g), ee(e, i), ee(e, l), ee(e, a), ee(e, h), ee(e, c), vn(
        c,
        /*file*/
        n[0].name
      ), c.focus(), u || (o = [
        nt(
          c,
          "input",
          /*input_input_handler*/
          n[7]
        ),
        nt(
          c,
          "keyup",
          /*checkConflicts*/
          n[5]
        )
      ], u = !0);
    },
    p(s, g) {
      g & /*file*/
      1 && c.value !== /*file*/
      s[0].name && vn(
        c,
        /*file*/
        s[0].name
      );
    },
    d(s) {
      s && de(e), u = !1, Xt(o);
    }
  };
}
function zs(n) {
  let e, r = (
    /*t*/
    n[3]("files_linkeditor", "Create") + ""
  ), i, l, a;
  return {
    c() {
      e = ue("button"), i = Be(r), H(e, "type", "button"), e.disabled = /*isConflicting*/
      n[2], H(e, "class", "primary button");
    },
    m(h, c) {
      me(h, e, c), ee(e, i), l || (a = nt(e, "click", Vt(
        /*save*/
        n[6]
      )), l = !0);
    },
    p(h, c) {
      c & /*isConflicting*/
      4 && (e.disabled = /*isConflicting*/
      h[2]);
    },
    d(h) {
      h && de(e), l = !1, a();
    }
  };
}
function Lh(n) {
  let e, r, i, l, a, h, c, u = (
    /*t*/
    n[3]("files_linkeditor", "Cancel") + ""
  ), o, s, g, d, m = !/*loading*/
  n[1] && Xs(n), y = !/*loading*/
  n[1] && zs(n);
  return {
    c() {
      e = ue("form"), r = ue("div"), i = ue("h3"), i.textContent = `${window.t("files_linkeditor", "New link")}`, l = be(), m && m.c(), a = be(), h = ue("div"), c = ue("a"), o = Be(u), s = be(), y && y.c(), H(r, "class", "edit"), H(c, "href", window.location.href), H(c, "class", "cancel button"), H(h, "class", "oc-dialog-buttonrow twobuttons"), H(
        e,
        "action",
        /*OC*/
        n[4].generateUrl("/")
      ), H(e, "method", "post");
    },
    m(v, _) {
      me(v, e, _), ee(e, r), ee(r, i), ee(r, l), m && m.m(r, null), ee(e, a), ee(e, h), ee(h, c), ee(c, o), ee(h, s), y && y.m(h, null), g || (d = [
        nt(c, "click", Vt(
          /*click_handler*/
          n[8]
        )),
        nt(e, "submit", Vt(
          /*save*/
          n[6]
        ))
      ], g = !0);
    },
    p(v, _) {
      /*loading*/
      v[1] ? m && (m.d(1), m = null) : m ? m.p(v, _) : (m = Xs(v), m.c(), m.m(r, null)), /*loading*/
      v[1] ? y && (y.d(1), y = null) : y ? y.p(v, _) : (y = zs(v), y.c(), y.m(h, null));
    },
    d(v) {
      v && de(e), m && m.d(), y && y.d(), g = !1, Xt(d);
    }
  };
}
function Ph(n) {
  let e, r;
  return e = new qi({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [Lh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      $r(e.$$.fragment);
    },
    m(i, l) {
      mr(e, i, l), r = !0;
    },
    p(i, [l]) {
      const a = {};
      l & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), l & /*$$scope, isConflicting, loading, file*/
      2055 && (a.$$scope = { dirty: l, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (Me(e.$$.fragment, i), r = !0);
    },
    o(i) {
      ut(e.$$.fragment, i), r = !1;
    },
    d(i) {
      yr(e, i);
    }
  };
}
function $h(n, e, r) {
  let i, l, a;
  const h = window.t, c = window.OC, u = (y, v) => {
    const _ = {
      name: y,
      templateName: i.templateName
    }, T = Ws(_);
    return ((v == null ? void 0 : v.map((I) => I.basename)) ?? []).includes(T.name);
  };
  let o;
  Sn(() => {
    o = Ft.subscribe((y) => {
      r(0, i = y), i && (i.isLoaded || i.isNew) && (r(1, l = !1), s());
    });
  }), Cn(() => {
    o();
  });
  const s = () => {
    u(i.name, i.existingContents) ? r(2, a = !0) : r(2, a = !1);
  }, g = () => {
    u(i.name, i.existingContents) || (r(1, l = !0), i.onCreate(Ws({ ...i })));
  };
  function d() {
    i.name = this.value, r(0, i);
  }
  const m = () => {
    lt.update(() => "none");
  };
  return r(0, i = er.getFileConfig()), r(1, l = !0), r(2, a = !0), [
    i,
    l,
    a,
    h,
    c,
    s,
    g,
    d,
    m
  ];
}
class Fh extends kr {
  constructor(e) {
    super(), Fr(this, e, $h, Ph, gr, {});
  }
}
function Hs(n) {
  let e, r;
  return e = new Fh({}), {
    c() {
      $r(e.$$.fragment);
    },
    m(i, l) {
      mr(e, i, l), r = !0;
    },
    i(i) {
      r || (Me(e.$$.fragment, i), r = !0);
    },
    o(i) {
      ut(e.$$.fragment, i), r = !1;
    },
    d(i) {
      yr(e, i);
    }
  };
}
function Ys(n) {
  let e, r;
  return e = new oh({}), {
    c() {
      $r(e.$$.fragment);
    },
    m(i, l) {
      mr(e, i, l), r = !0;
    },
    i(i) {
      r || (Me(e.$$.fragment, i), r = !0);
    },
    o(i) {
      ut(e.$$.fragment, i), r = !1;
    },
    d(i) {
      yr(e, i);
    }
  };
}
function Zs(n) {
  let e, r;
  return e = new Ch({}), {
    c() {
      $r(e.$$.fragment);
    },
    m(i, l) {
      mr(e, i, l), r = !0;
    },
    i(i) {
      r || (Me(e.$$.fragment, i), r = !0);
    },
    o(i) {
      ut(e.$$.fragment, i), r = !1;
    },
    d(i) {
      yr(e, i);
    }
  };
}
function kh(n) {
  let e, r, i, l, a = (
    /*viewMode*/
    n[0] === "filename" && Hs()
  ), h = (
    /*viewMode*/
    n[0] === "view" && Ys()
  ), c = (
    /*viewMode*/
    n[0] === "edit" && Zs()
  );
  return {
    c() {
      a && a.c(), e = be(), h && h.c(), r = be(), c && c.c(), i = mu();
    },
    m(u, o) {
      a && a.m(u, o), me(u, e, o), h && h.m(u, o), me(u, r, o), c && c.m(u, o), me(u, i, o), l = !0;
    },
    p(u, [o]) {
      /*viewMode*/
      u[0] === "filename" ? a ? o & /*viewMode*/
      1 && Me(a, 1) : (a = Hs(), a.c(), Me(a, 1), a.m(e.parentNode, e)) : a && (qn(), ut(a, 1, 1, () => {
        a = null;
      }), Vn()), /*viewMode*/
      u[0] === "view" ? h ? o & /*viewMode*/
      1 && Me(h, 1) : (h = Ys(), h.c(), Me(h, 1), h.m(r.parentNode, r)) : h && (qn(), ut(h, 1, 1, () => {
        h = null;
      }), Vn()), /*viewMode*/
      u[0] === "edit" ? c ? o & /*viewMode*/
      1 && Me(c, 1) : (c = Zs(), c.c(), Me(c, 1), c.m(i.parentNode, i)) : c && (qn(), ut(c, 1, 1, () => {
        c = null;
      }), Vn());
    },
    i(u) {
      l || (Me(a), Me(h), Me(c), l = !0);
    },
    o(u) {
      ut(a), ut(h), ut(c), l = !1;
    },
    d(u) {
      u && (de(e), de(r), de(i)), a && a.d(u), h && h.d(u), c && c.d(u);
    }
  };
}
function Mh(n, e, r) {
  let i, l;
  return Sn(() => {
    l = lt.subscribe((a) => {
      r(0, i = a);
    });
  }), Cn(() => {
    l();
  }), r(0, i = ""), [i];
}
class Uh extends kr {
  constructor(e) {
    super(), Fr(this, e, Mh, kh, gr, {});
  }
}
const Js = "application/internet-shortcut", Ks = () => '<span class="icon-link"></span>';
window.OC.dialogs.alert = function(n, e) {
  window.OC.dialogs.message(
    t("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."),
    t("files_linkeditor", "A slight problem"),
    "alert",
    71
    // Dialogs.OK_BUTTONS
  );
};
class xr {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    ps({
      id: "editLink",
      displayName: () => t("files_linkeditor", "Edit link"),
      iconSvgInline: Ks,
      exec: async (r) => {
        await xr.loadAndChangeViewMode({
          fileName: r.basename,
          dirName: r.dirname,
          nextViewMode: "edit",
          permissions: r.permissions
        });
      },
      enabled: (r) => window.OC.currentUser && r.every((i) => i.permissions >= Ue.UPDATE && Js.includes(i.mime))
    }), ps({
      id: "viewLink",
      displayName: () => t("files_linkeditor", "View link"),
      iconSvgInline: Ks,
      exec: async (r) => {
        window.OC.currentUser ? await xr.loadAndChangeViewMode({
          fileName: r.basename,
          dirName: r.dirname,
          nextViewMode: "view",
          permissions: r.permissions
        }) : await xr.loadAndChangeViewMode({
          fileName: r.displayname ?? r.basename,
          dirName: r.dirname,
          nextViewMode: "view",
          // TODO:
          downloadUrl: r.source,
          publicUser: !0,
          permissions: r.permissions
        });
      },
      enabled: (r) => r.every((i) => i.permissions >= Ue.READ && Js.includes(i.mime)),
      default: () => Ha.DEFAULT
    });
    const e = ({ id: r, displayName: i, templateName: l }) => {
      th({
        id: r,
        displayName: i,
        enabled: (a) => a.permissions >= Ue.CREATE,
        iconClass: "icon-link",
        handler: (a, h) => {
          const c = a.path;
          lt.update(() => "filename"), Ft.update(
            () => er.getFileConfig({
              name: l,
              templateName: l,
              dir: c,
              isNew: !0,
              existingContents: h,
              onCreate: async (u) => {
                lt.update(() => "edit"), Ft.update(
                  () => er.getFileConfig({
                    name: u.name,
                    dir: u.dir,
                    isNew: !0,
                    onCreate: async (o) => {
                      await xr.saveAndChangeViewMode(o);
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
  static async loadAndChangeViewMode({ fileName: e, dirName: r, nextViewMode: i, publicUser: l, downloadUrl: a, permissions: h }) {
    lt.update(() => i), Ft.update(
      () => er.getFileConfig({
        name: e,
        dir: r || "",
        permissions: h
      })
    );
    let c = {};
    if (l ? c = await er.loadPublic({ downloadUrl: a }) : c = await er.load({ fileName: e, dir: r }), c) {
      const u = at.getExtension(e);
      let o = {};
      u === "webloc" ? o = at.parseWeblocFile(c.filecontents) : o = at.parseURLFile(c.filecontents), Ft.update(
        (s) => er.getFileConfig({
          ...s,
          ...o,
          fileModifiedTime: c.mtime,
          isLoaded: !0
        })
      );
    } else
      window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async saveAndChangeViewMode({ name: e, dir: r, url: i, fileModifiedTime: l, sameWindow: a, skipConfirmation: h }) {
    const c = at.getExtension(e);
    let u = "";
    c === "webloc" ? u = at.generateWeblocFileContent("", i, a, h) : u = at.generateURLFileContent("", i, a, h), await er.save({ fileContent: u, name: e, dir: r, fileModifiedTime: l }), lt.update(() => "none");
  }
}
const Bh = [];
Bh.push(
  new Uh({
    target: document.body,
    props: {}
  })
);
tr.registerFileActions();
xr.registerFileActions();
