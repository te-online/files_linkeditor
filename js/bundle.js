(function () {
  'use strict';

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return exports;
    };
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty = Object.defineProperty || function (obj, key, desc) {
        obj[key] = desc.value;
      },
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg,
            value = result.value;
          return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function (method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method,
        method = delegate.iterator[methodName];
      if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
              return next.value = undefined, next.done = !0, next;
            };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) keys.push(key);
      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      },
      stop: function () {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function (record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      catch: function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  function noop$1() { }
  function assign(tar, src) {
      // @ts-ignore
      for (const k in src)
          tar[k] = src[k];
      return tar;
  }
  function run$1(fn) {
      return fn();
  }
  function blank_object() {
      return Object.create(null);
  }
  function run_all(fns) {
      fns.forEach(run$1);
  }
  function is_function(thing) {
      return typeof thing === 'function';
  }
  function safe_not_equal(a, b) {
      return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
  }
  function is_empty(obj) {
      return Object.keys(obj).length === 0;
  }
  function create_slot(definition, ctx, $$scope, fn) {
      if (definition) {
          const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
          return definition[0](slot_ctx);
      }
  }
  function get_slot_context(definition, ctx, $$scope, fn) {
      return definition[1] && fn
          ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
          : $$scope.ctx;
  }
  function get_slot_changes(definition, $$scope, dirty, fn) {
      if (definition[2] && fn) {
          const lets = definition[2](fn(dirty));
          if ($$scope.dirty === undefined) {
              return lets;
          }
          if (typeof lets === 'object') {
              const merged = [];
              const len = Math.max($$scope.dirty.length, lets.length);
              for (let i = 0; i < len; i += 1) {
                  merged[i] = $$scope.dirty[i] | lets[i];
              }
              return merged;
          }
          return $$scope.dirty | lets;
      }
      return $$scope.dirty;
  }
  function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
      if (slot_changes) {
          const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
          slot.p(slot_context, slot_changes);
      }
  }
  function get_all_dirty_from_scope($$scope) {
      if ($$scope.ctx.length > 32) {
          const dirty = [];
          const length = $$scope.ctx.length / 32;
          for (let i = 0; i < length; i++) {
              dirty[i] = -1;
          }
          return dirty;
      }
      return -1;
  }
  function append(target, node) {
      target.appendChild(node);
  }
  function insert(target, node, anchor) {
      target.insertBefore(node, anchor || null);
  }
  function detach(node) {
      if (node.parentNode) {
          node.parentNode.removeChild(node);
      }
  }
  function element(name) {
      return document.createElement(name);
  }
  function text(data) {
      return document.createTextNode(data);
  }
  function space() {
      return text(' ');
  }
  function empty$1() {
      return text('');
  }
  function listen(node, event, handler, options) {
      node.addEventListener(event, handler, options);
      return () => node.removeEventListener(event, handler, options);
  }
  function prevent_default(fn) {
      return function (event) {
          event.preventDefault();
          // @ts-ignore
          return fn.call(this, event);
      };
  }
  function attr(node, attribute, value) {
      if (value == null)
          node.removeAttribute(attribute);
      else if (node.getAttribute(attribute) !== value)
          node.setAttribute(attribute, value);
  }
  function children(element) {
      return Array.from(element.childNodes);
  }
  function set_data(text, data) {
      data = '' + data;
      if (text.data === data)
          return;
      text.data = data;
  }
  function set_input_value(input, value) {
      input.value = value == null ? '' : value;
  }
  function set_style(node, key, value, important) {
      if (value === null) {
          node.style.removeProperty(key);
      }
      else {
          node.style.setProperty(key, value, important ? 'important' : '');
      }
  }

  let current_component;
  function set_current_component(component) {
      current_component = component;
  }
  function get_current_component() {
      if (!current_component)
          throw new Error('Function called outside component initialization');
      return current_component;
  }
  /**
   * The `onMount` function schedules a callback to run as soon as the component has been mounted to the DOM.
   * It must be called during the component's initialisation (but doesn't need to live *inside* the component;
   * it can be called from an external module).
   *
   * `onMount` does not run inside a [server-side component](/docs#run-time-server-side-component-api).
   *
   * https://svelte.dev/docs#run-time-svelte-onmount
   */
  function onMount(fn) {
      get_current_component().$$.on_mount.push(fn);
  }
  /**
   * Schedules a callback to run immediately before the component is unmounted.
   *
   * Out of `onMount`, `beforeUpdate`, `afterUpdate` and `onDestroy`, this is the
   * only one that runs inside a server-side component.
   *
   * https://svelte.dev/docs#run-time-svelte-ondestroy
   */
  function onDestroy(fn) {
      get_current_component().$$.on_destroy.push(fn);
  }

  const dirty_components = [];
  const binding_callbacks = [];
  let render_callbacks = [];
  const flush_callbacks = [];
  const resolved_promise = /* @__PURE__ */ Promise.resolve();
  let update_scheduled = false;
  function schedule_update() {
      if (!update_scheduled) {
          update_scheduled = true;
          resolved_promise.then(flush$1);
      }
  }
  function add_render_callback(fn) {
      render_callbacks.push(fn);
  }
  // flush() calls callbacks in this order:
  // 1. All beforeUpdate callbacks, in order: parents before children
  // 2. All bind:this callbacks, in reverse order: children before parents.
  // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
  //    for afterUpdates called during the initial onMount, which are called in
  //    reverse order: children before parents.
  // Since callbacks might update component values, which could trigger another
  // call to flush(), the following steps guard against this:
  // 1. During beforeUpdate, any updated components will be added to the
  //    dirty_components array and will cause a reentrant call to flush(). Because
  //    the flush index is kept outside the function, the reentrant call will pick
  //    up where the earlier call left off and go through all dirty components. The
  //    current_component value is saved and restored so that the reentrant call will
  //    not interfere with the "parent" flush() call.
  // 2. bind:this callbacks cannot trigger new flush() calls.
  // 3. During afterUpdate, any updated components will NOT have their afterUpdate
  //    callback called a second time; the seen_callbacks set, outside the flush()
  //    function, guarantees this behavior.
  const seen_callbacks = new Set();
  let flushidx = 0; // Do *not* move this inside the flush() function
  function flush$1() {
      // Do not reenter flush while dirty components are updated, as this can
      // result in an infinite loop. Instead, let the inner flush handle it.
      // Reentrancy is ok afterwards for bindings etc.
      if (flushidx !== 0) {
          return;
      }
      const saved_component = current_component;
      do {
          // first, call beforeUpdate functions
          // and update components
          try {
              while (flushidx < dirty_components.length) {
                  const component = dirty_components[flushidx];
                  flushidx++;
                  set_current_component(component);
                  update(component.$$);
              }
          }
          catch (e) {
              // reset dirty state to not end up in a deadlocked state and then rethrow
              dirty_components.length = 0;
              flushidx = 0;
              throw e;
          }
          set_current_component(null);
          dirty_components.length = 0;
          flushidx = 0;
          while (binding_callbacks.length)
              binding_callbacks.pop()();
          // then, once components are updated, call
          // afterUpdate functions. This may cause
          // subsequent updates...
          for (let i = 0; i < render_callbacks.length; i += 1) {
              const callback = render_callbacks[i];
              if (!seen_callbacks.has(callback)) {
                  // ...so guard against infinite loops
                  seen_callbacks.add(callback);
                  callback();
              }
          }
          render_callbacks.length = 0;
      } while (dirty_components.length);
      while (flush_callbacks.length) {
          flush_callbacks.pop()();
      }
      update_scheduled = false;
      seen_callbacks.clear();
      set_current_component(saved_component);
  }
  function update($$) {
      if ($$.fragment !== null) {
          $$.update();
          run_all($$.before_update);
          const dirty = $$.dirty;
          $$.dirty = [-1];
          $$.fragment && $$.fragment.p($$.ctx, dirty);
          $$.after_update.forEach(add_render_callback);
      }
  }
  /**
   * Useful for example to execute remaining `afterUpdate` callbacks before executing `destroy`.
   */
  function flush_render_callbacks(fns) {
      const filtered = [];
      const targets = [];
      render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
      targets.forEach((c) => c());
      render_callbacks = filtered;
  }
  const outroing = new Set();
  let outros;
  function group_outros() {
      outros = {
          r: 0,
          c: [],
          p: outros // parent group
      };
  }
  function check_outros() {
      if (!outros.r) {
          run_all(outros.c);
      }
      outros = outros.p;
  }
  function transition_in(block, local) {
      if (block && block.i) {
          outroing.delete(block);
          block.i(local);
      }
  }
  function transition_out(block, local, detach, callback) {
      if (block && block.o) {
          if (outroing.has(block))
              return;
          outroing.add(block);
          outros.c.push(() => {
              outroing.delete(block);
              if (callback) {
                  if (detach)
                      block.d(1);
                  callback();
              }
          });
          block.o(local);
      }
      else if (callback) {
          callback();
      }
  }
  function create_component(block) {
      block && block.c();
  }
  function mount_component(component, target, anchor, customElement) {
      const { fragment, after_update } = component.$$;
      fragment && fragment.m(target, anchor);
      if (!customElement) {
          // onMount happens before the initial afterUpdate
          add_render_callback(() => {
              const new_on_destroy = component.$$.on_mount.map(run$1).filter(is_function);
              // if the component was destroyed immediately
              // it will update the `$$.on_destroy` reference to `null`.
              // the destructured on_destroy may still reference to the old array
              if (component.$$.on_destroy) {
                  component.$$.on_destroy.push(...new_on_destroy);
              }
              else {
                  // Edge case - component was destroyed immediately,
                  // most likely as a result of a binding initialising
                  run_all(new_on_destroy);
              }
              component.$$.on_mount = [];
          });
      }
      after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
      const $$ = component.$$;
      if ($$.fragment !== null) {
          flush_render_callbacks($$.after_update);
          run_all($$.on_destroy);
          $$.fragment && $$.fragment.d(detaching);
          // TODO null out other refs, including component.$$ (but need to
          // preserve final state?)
          $$.on_destroy = $$.fragment = null;
          $$.ctx = [];
      }
  }
  function make_dirty(component, i) {
      if (component.$$.dirty[0] === -1) {
          dirty_components.push(component);
          schedule_update();
          component.$$.dirty.fill(0);
      }
      component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
  }
  function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
      const parent_component = current_component;
      set_current_component(component);
      const $$ = component.$$ = {
          fragment: null,
          ctx: [],
          // state
          props,
          update: noop$1,
          not_equal,
          bound: blank_object(),
          // lifecycle
          on_mount: [],
          on_destroy: [],
          on_disconnect: [],
          before_update: [],
          after_update: [],
          context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
          // everything else
          callbacks: blank_object(),
          dirty,
          skip_bound: false,
          root: options.target || parent_component.$$.root
      };
      append_styles && append_styles($$.root);
      let ready = false;
      $$.ctx = instance
          ? instance(component, options.props || {}, (i, ret, ...rest) => {
              const value = rest.length ? rest[0] : ret;
              if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                  if (!$$.skip_bound && $$.bound[i])
                      $$.bound[i](value);
                  if (ready)
                      make_dirty(component, i);
              }
              return ret;
          })
          : [];
      $$.update();
      ready = true;
      run_all($$.before_update);
      // `false` as a special case of no DOM component
      $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
      if (options.target) {
          if (options.hydrate) {
              const nodes = children(options.target);
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              $$.fragment && $$.fragment.l(nodes);
              nodes.forEach(detach);
          }
          else {
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              $$.fragment && $$.fragment.c();
          }
          if (options.intro)
              transition_in(component.$$.fragment);
          mount_component(component, options.target, options.anchor, options.customElement);
          flush$1();
      }
      set_current_component(parent_component);
  }
  /**
   * Base class for Svelte components. Used when dev=false.
   */
  class SvelteComponent {
      $destroy() {
          destroy_component(this, 1);
          this.$destroy = noop$1;
      }
      $on(type, callback) {
          if (!is_function(callback)) {
              return noop$1;
          }
          const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
          callbacks.push(callback);
          return () => {
              const index = callbacks.indexOf(callback);
              if (index !== -1)
                  callbacks.splice(index, 1);
          };
      }
      $set($$props) {
          if (this.$$set && !is_empty($$props)) {
              this.$$.skip_bound = true;
              this.$$set($$props);
              this.$$.skip_bound = false;
          }
      }
  }

  function create_fragment$4(ctx) {
    var div0;
    var t;
    var div1;
    var div1_class_value;
    var current;
    var default_slot_template = /*#slots*/ctx[2].default;
    var default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ctx[1], null);
    return {
      c: function c() {
        div0 = element("div");
        t = space();
        div1 = element("div");
        if (default_slot) default_slot.c();
        attr(div0, "class", "oc-dialog-dim");
        attr(div1, "class", div1_class_value = "oc-dialog ".concat( /*loading*/ctx[0] ? 'icon-loading' : ''));
        set_style(div1, "position", "fixed");
      },
      m: function m(target, anchor) {
        insert(target, div0, anchor);
        insert(target, t, anchor);
        insert(target, div1, anchor);
        if (default_slot) {
          default_slot.m(div1, null);
        }
        current = true;
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];
        if (default_slot) {
          if (default_slot.p && (!current || dirty & /*$$scope*/2)) {
            update_slot_base(default_slot, default_slot_template, ctx, /*$$scope*/ctx[1], !current ? get_all_dirty_from_scope( /*$$scope*/ctx[1]) : get_slot_changes(default_slot_template, /*$$scope*/ctx[1], dirty, null), null);
          }
        }
        if (!current || dirty & /*loading*/1 && div1_class_value !== (div1_class_value = "oc-dialog ".concat( /*loading*/ctx[0] ? 'icon-loading' : ''))) {
          attr(div1, "class", div1_class_value);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(default_slot, local);
        current = true;
      },
      o: function o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(div0);
        if (detaching) detach(t);
        if (detaching) detach(div1);
        if (default_slot) default_slot.d(detaching);
      }
    };
  }
  function instance$4($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
    var _$$props$loading = $$props.loading,
      loading = _$$props$loading === void 0 ? false : _$$props$loading;
    $$self.$$set = function ($$props) {
      if ('loading' in $$props) $$invalidate(0, loading = $$props.loading);
      if ('$$scope' in $$props) $$invalidate(1, $$scope = $$props.$$scope);
    };
    return [loading, $$scope, slots];
  }
  var Overlay = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Overlay, _SvelteComponent);
    var _super = _createSuper(Overlay);
    function Overlay(options) {
      var _this;
      _classCallCheck(this, Overlay);
      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {
        loading: 0
      });
      return _this;
    }
    return _createClass(Overlay);
  }(SvelteComponent);

  const subscriber_queue = [];
  /**
   * Create a `Writable` store that allows both updating and reading by subscription.
   * @param {*=}value initial value
   * @param {StartStopNotifier=}start start and stop notifications for subscriptions
   */
  function writable(value, start = noop$1) {
      let stop;
      const subscribers = new Set();
      function set(new_value) {
          if (safe_not_equal(value, new_value)) {
              value = new_value;
              if (stop) { // store is ready
                  const run_queue = !subscriber_queue.length;
                  for (const subscriber of subscribers) {
                      subscriber[1]();
                      subscriber_queue.push(subscriber, value);
                  }
                  if (run_queue) {
                      for (let i = 0; i < subscriber_queue.length; i += 2) {
                          subscriber_queue[i][0](subscriber_queue[i + 1]);
                      }
                      subscriber_queue.length = 0;
                  }
              }
          }
      }
      function update(fn) {
          set(fn(value));
      }
      function subscribe(run, invalidate = noop$1) {
          const subscriber = [run, invalidate];
          subscribers.add(subscriber);
          if (subscribers.size === 1) {
              stop = start(set) || noop$1;
          }
          run(value);
          return () => {
              subscribers.delete(subscriber);
              if (subscribers.size === 0 && stop) {
                  stop();
                  stop = null;
              }
          };
      }
      return { set, update, subscribe };
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global_1 =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  function () {
    return this;
  }() || Function('return this')();

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$2 = Object.defineProperty;
  var defineGlobalProperty = function (key, value) {
    try {
      defineProperty$2(global_1, key, {
        value: value,
        configurable: true,
        writable: true
      });
    } catch (error) {
      global_1[key] = value;
    }
    return value;
  };

  var SHARED = '__core-js_shared__';
  var store$1 = global_1[SHARED] || defineGlobalProperty(SHARED, {});
  var sharedStore = store$1;

  var shared = createCommonjsModule(function (module) {
  (module.exports = function (key, value) {
    return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.30.0',
    mode: 'global',
    copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.30.0/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });
  });

  var fails = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var functionBindNative = !fails(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = function () {/* empty */}.bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var FunctionPrototype$2 = Function.prototype;
  var call$2 = FunctionPrototype$2.call;
  var uncurryThisWithBind = functionBindNative && FunctionPrototype$2.bind.bind(call$2, call$2);
  var functionUncurryThis = functionBindNative ? uncurryThisWithBind : function (fn) {
    return function () {
      return call$2.apply(fn, arguments);
    };
  };

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined = function (it) {
    return it === null || it === undefined;
  };

  var $TypeError$e = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible = function (it) {
    if (isNullOrUndefined(it)) throw $TypeError$e("Can't call method on " + it);
    return it;
  };

  var $Object$3 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject = function (argument) {
    return $Object$3(requireObjectCoercible(argument));
  };

  var hasOwnProperty = functionUncurryThis({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
  };

  var id = 0;
  var postfix = Math.random();
  var toString$1 = functionUncurryThis(1.0.toString);
  var uid = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$1(++id + postfix, 36);
  };

  var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

  var process$4 = global_1.process;
  var Deno$1 = global_1.Deno;
  var versions = process$4 && process$4.versions || Deno$1 && Deno$1.version;
  var v8 = versions && versions.v8;
  var match, version;
  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && engineUserAgent) {
    match = engineUserAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = engineUserAgent.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }
  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */



  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails(function () {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && engineV8Version && engineV8Version < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */

  var useSymbolAsUid = symbolConstructorDetection && !Symbol.sham && typeof Symbol.iterator == 'symbol';

  var Symbol$1 = global_1.Symbol;
  var WellKnownSymbolsStore = shared('wks');
  var createWellKnownSymbol = useSymbolAsUid ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;
  var wellKnownSymbol = function (name) {
    if (!hasOwnProperty_1(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = symbolConstructorDetection && hasOwnProperty_1(Symbol$1, name) ? Symbol$1[name] : createWellKnownSymbol('Symbol.' + name);
    }
    return WellKnownSymbolsStore[name];
  };

  var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
  var test = {};
  test[TO_STRING_TAG$2] = 'z';
  var toStringTagSupport = String(test) === '[object z]';

  var documentAll$2 = typeof document == 'object' && document.all;

  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;
  var documentAll_1 = {
    all: documentAll$2,
    IS_HTMLDDA: IS_HTMLDDA
  };

  var documentAll$1 = documentAll_1.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  var isCallable = documentAll_1.IS_HTMLDDA ? function (argument) {
    return typeof argument == 'function' || argument === documentAll$1;
  } : function (argument) {
    return typeof argument == 'function';
  };

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      }
    })[1] != 7;
  });

  var documentAll = documentAll_1.all;
  var isObject = documentAll_1.IS_HTMLDDA ? function (it) {
    return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
  } : function (it) {
    return typeof it == 'object' ? it !== null : isCallable(it);
  };

  var document$3 = global_1.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject(document$3) && isObject(document$3.createElement);
  var documentCreateElement = function (it) {
    return EXISTS$1 ? document$3.createElement(it) : {};
  };

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !descriptors && !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = descriptors && fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () {/* empty */}, 'prototype', {
      value: 42,
      writable: false
    }).prototype != 42;
  });

  var $String$3 = String;
  var $TypeError$d = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject = function (argument) {
    if (isObject(argument)) return argument;
    throw $TypeError$d($String$3(argument) + ' is not an object');
  };

  var call$1 = Function.prototype.call;
  var functionCall = functionBindNative ? call$1.bind(call$1) : function () {
    return call$1.apply(call$1, arguments);
  };

  var aFunction = function (argument) {
    return isCallable(argument) ? argument : undefined;
  };
  var getBuiltIn = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global_1[namespace]) : global_1[namespace] && global_1[namespace][method];
  };

  var objectIsPrototypeOf = functionUncurryThis({}.isPrototypeOf);

  var $Object$2 = Object;
  var isSymbol = useSymbolAsUid ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn('Symbol');
    return isCallable($Symbol) && objectIsPrototypeOf($Symbol.prototype, $Object$2(it));
  };

  var $String$2 = String;
  var tryToString = function (argument) {
    try {
      return $String$2(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var $TypeError$c = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable = function (argument) {
    if (isCallable(argument)) return argument;
    throw $TypeError$c(tryToString(argument) + ' is not a function');
  };

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod = function (V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
  };

  var $TypeError$b = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = functionCall(fn, input))) return val;
    if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
    throw $TypeError$b("Can't convert object to primitive value");
  };

  var $TypeError$a = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive = function (input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = functionCall(exoticToPrim, input, pref);
      if (!isObject(result) || isSymbol(result)) return result;
      throw $TypeError$a("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey = function (argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
  };

  var $TypeError$9 = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  var f$6 = descriptors ? v8PrototypeDefineBug ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor$1(O, P);
      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    }
    return $defineProperty(O, P, Attributes);
  } : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) {/* empty */}
    if ('get' in Attributes || 'set' in Attributes) throw $TypeError$9('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var objectDefineProperty = {
  	f: f$6
  };

  var FunctionPrototype$1 = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = descriptors && Object.getOwnPropertyDescriptor;
  var EXISTS = hasOwnProperty_1(FunctionPrototype$1, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && function something() {/* empty */}.name === 'something';
  var CONFIGURABLE = EXISTS && (!descriptors || descriptors && getDescriptor(FunctionPrototype$1, 'name').configurable);
  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var functionToString = functionUncurryThis(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable(sharedStore.inspectSource)) {
    sharedStore.inspectSource = function (it) {
      return functionToString(it);
    };
  }
  var inspectSource = sharedStore.inspectSource;

  var WeakMap$1 = global_1.WeakMap;
  var weakMapBasicDetection = isCallable(WeakMap$1) && /native code/.test(String(WeakMap$1));

  var createPropertyDescriptor = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var createNonEnumerableProperty = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var keys$1 = shared('keys');
  var sharedKey = function (key) {
    return keys$1[key] || (keys$1[key] = uid(key));
  };

  var hiddenKeys$1 = {};

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$2 = global_1.TypeError;
  var WeakMap = global_1.WeakMap;
  var set$1, get, has;
  var enforce = function (it) {
    return has(it) ? get(it) : set$1(it, {});
  };
  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError$2('Incompatible receiver, ' + TYPE + ' required');
      }
      return state;
    };
  };
  if (weakMapBasicDetection || sharedStore.state) {
    var store = sharedStore.state || (sharedStore.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */
    store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */
    set$1 = function (it, metadata) {
      if (store.has(it)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store.set(it, metadata);
      return metadata;
    };
    get = function (it) {
      return store.get(it) || {};
    };
    has = function (it) {
      return store.has(it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys$1[STATE] = true;
    set$1 = function (it, metadata) {
      if (hasOwnProperty_1(it, STATE)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwnProperty_1(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwnProperty_1(it, STATE);
    };
  }
  var internalState = {
    set: set$1,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var makeBuiltIn_1 = createCommonjsModule(function (module) {
  var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;


  var enforceInternalState = internalState.enforce;
  var getInternalState = internalState.get;
  var $String = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty = Object.defineProperty;
  var stringSlice = functionUncurryThis(''.slice);
  var replace = functionUncurryThis(''.replace);
  var join = functionUncurryThis([].join);
  var CONFIGURABLE_LENGTH = descriptors && !fails(function () {
    return defineProperty(function () {/* empty */}, 'length', {
      value: 8
    }).length !== 8;
  });
  var TEMPLATE = String(String).split('String');
  var makeBuiltIn = module.exports = function (value, name, options) {
    if (stringSlice($String(name), 0, 7) === 'Symbol(') {
      name = '[' + replace($String(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwnProperty_1(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      if (descriptors) defineProperty(value, 'name', {
        value: name,
        configurable: true
      });else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwnProperty_1(options, 'arity') && value.length !== options.arity) {
      defineProperty(value, 'length', {
        value: options.arity
      });
    }
    try {
      if (options && hasOwnProperty_1(options, 'constructor') && options.constructor) {
        if (descriptors) defineProperty(value, 'prototype', {
          writable: false
        });
        // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) {/* empty */}
    var state = enforceInternalState(value);
    if (!hasOwnProperty_1(state, 'source')) {
      state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    }
    return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
  }, 'toString');
  });

  var defineBuiltIn = function (O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn_1(value, name, options);
    if (options.global) {
      if (simple) O[key] = value;else defineGlobalProperty(key, value);
    } else {
      try {
        if (!options.unsafe) delete O[key];else if (O[key]) simple = true;
      } catch (error) {/* empty */}
      if (simple) O[key] = value;else objectDefineProperty.f(O, key, {
        value: value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
    }
    return O;
  };

  var toString = functionUncurryThis({}.toString);
  var stringSlice$5 = functionUncurryThis(''.slice);
  var classofRaw = function (it) {
    return stringSlice$5(toString(it), 8, -1);
  };

  var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
  var $Object$1 = Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () {
    return arguments;
  }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) {/* empty */}
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof = toStringTagSupport ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$1)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
  };

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = toStringTagSupport ? {}.toString : function toString() {
    return '[object ' + classof(this) + ']';
  };

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!toStringTagSupport) {
    defineBuiltIn(Object.prototype, 'toString', objectToString, {
      unsafe: true
    });
  }

  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({
    1: 2
  }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  var f$5 = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$2(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;

  var objectPropertyIsEnumerable = {
  	f: f$5
  };

  var $Object = Object;
  var split = functionUncurryThis(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw(it) == 'String' ? split(it, '') : $Object(it);
  } : $Object;

  // toObject with fallback for non-array-like ES3 strings


  var toIndexedObject = function (it) {
    return indexedObject(requireObjectCoercible(it));
  };

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  var f$4 = descriptors ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (ie8DomDefine) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) {/* empty */}
    if (hasOwnProperty_1(O, P)) return createPropertyDescriptor(!functionCall(objectPropertyIsEnumerable.f, O, P), O[P]);
  };

  var objectGetOwnPropertyDescriptor = {
  	f: f$4
  };

  var ceil = Math.ceil;
  var floor$1 = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  var mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor$1 : ceil)(n);
  };

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity = function (argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : mathTrunc(number);
  };

  var max$2 = Math.max;
  var min$2 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex = function (index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max$2(integer + length, 0) : min$2(integer, length);
  };

  var min$1 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength = function (argument) {
    return argument > 0 ? min$1(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike = function (obj) {
    return toLength(obj.length);
  };

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$2 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = lengthOfArrayLike(O);
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };
  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$2(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$2(false)
  };

  var indexOf$1 = arrayIncludes.indexOf;

  var push$1 = functionUncurryThis([].push);
  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwnProperty_1(hiddenKeys$1, key) && hasOwnProperty_1(O, key) && push$1(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwnProperty_1(O, key = names[i++])) {
      ~indexOf$1(result, key) || push$1(result, key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

  var hiddenKeys = enumBugKeys.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys);
  };

  var objectGetOwnPropertyNames = {
  	f: f$3
  };

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  var f$2 = Object.getOwnPropertySymbols;

  var objectGetOwnPropertySymbols = {
  	f: f$2
  };

  var concat$1 = functionUncurryThis([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties = function (target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwnProperty_1(target, key) && !(exceptions && hasOwnProperty_1(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var replacement = /#|\.prototype\./;
  var isForced = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
  };
  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };
  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';
  var isForced_1 = isForced;

  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






  /*
    options.target         - name of the target object
    options.global         - target is the global object
    options.stat           - export as static methods of target
    options.proto          - export as prototype methods of target
    options.real           - real prototype method for the `pure` version
    options.forced         - export even if the native feature is available
    options.bind           - bind methods to the target, required for the `pure` version
    options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe         - use the simple assignment of property instead of delete + defineProperty
    options.sham           - add a flag to not completely full polyfills
    options.enumerable     - export as enumerable property
    options.dontCallGetSet - prevent calling a getter on target
    options.name           - the .name of the function if it does not match the key
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global_1;
    } else if (STATIC) {
      target = global_1[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = (global_1[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty(sourceProperty, 'sham', true);
      }
      defineBuiltIn(target, key, sourceProperty, options);
    }
  };

  var engineIsNode = typeof process != 'undefined' && classofRaw(process) == 'process';

  var functionUncurryThisAccessor = function (object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return functionUncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) {/* empty */}
  };

  var $String$1 = String;
  var $TypeError$8 = TypeError;
  var aPossiblePrototype = function (argument) {
    if (typeof argument == 'object' || isCallable(argument)) return argument;
    throw $TypeError$8("Can't set " + $String$1(argument) + ' as a prototype');
  };

  /* eslint-disable no-proto -- safe */




  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      setter = functionUncurryThisAccessor(Object.prototype, '__proto__', 'set');
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) {/* empty */}
    return function setPrototypeOf(O, proto) {
      anObject(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var defineProperty$1 = objectDefineProperty.f;


  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  var setToStringTag = function (target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwnProperty_1(target, TO_STRING_TAG)) {
      defineProperty$1(target, TO_STRING_TAG, {
        configurable: true,
        value: TAG
      });
    }
  };

  var defineBuiltInAccessor = function (target, name, descriptor) {
    if (descriptor.get) makeBuiltIn_1(descriptor.get, name, {
      getter: true
    });
    if (descriptor.set) makeBuiltIn_1(descriptor.set, name, {
      setter: true
    });
    return objectDefineProperty.f(target, name, descriptor);
  };

  var SPECIES$6 = wellKnownSymbol('species');
  var setSpecies = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    if (descriptors && Constructor && !Constructor[SPECIES$6]) {
      defineBuiltInAccessor(Constructor, SPECIES$6, {
        configurable: true,
        get: function () {
          return this;
        }
      });
    }
  };

  var $TypeError$7 = TypeError;
  var anInstance = function (it, Prototype) {
    if (objectIsPrototypeOf(Prototype, it)) return it;
    throw $TypeError$7('Incorrect invocation');
  };

  var noop = function () {/* empty */};
  var empty = [];
  var construct = getBuiltIn('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$1 = functionUncurryThis(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    try {
      construct(noop, empty, argument);
      return true;
    } catch (error) {
      return false;
    }
  };
  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    switch (classof(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction':
        return false;
    }
    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource(argument));
    } catch (error) {
      return true;
    }
  };
  isConstructorLegacy.sham = true;

  // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  var isConstructor = !construct || fails(function () {
    var called;
    return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
      called = true;
    }) || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var $TypeError$6 = TypeError;

  // `Assert: IsConstructor(argument) is true`
  var aConstructor = function (argument) {
    if (isConstructor(argument)) return argument;
    throw $TypeError$6(tryToString(argument) + ' is not a constructor');
  };

  var SPECIES$5 = wellKnownSymbol('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor
  var speciesConstructor = function (O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES$5]) ? defaultConstructor : aConstructor(S);
  };

  var FunctionPrototype = Function.prototype;
  var apply = FunctionPrototype.apply;
  var call = FunctionPrototype.call;

  // eslint-disable-next-line es/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (functionBindNative ? call.bind(apply) : function () {
    return call.apply(apply, arguments);
  });

  var functionUncurryThisClause = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return functionUncurryThis(fn);
  };

  var bind$1 = functionUncurryThisClause(functionUncurryThisClause.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable(fn);
    return that === undefined ? fn : functionBindNative ? bind$1(fn, that) : function /* ...args */
    () {
      return fn.apply(that, arguments);
    };
  };

  var html = getBuiltIn('document', 'documentElement');

  var arraySlice = functionUncurryThis([].slice);

  var $TypeError$5 = TypeError;
  var validateArgumentsLength = function (passed, required) {
    if (passed < required) throw $TypeError$5('Not enough arguments');
    return passed;
  };

  // eslint-disable-next-line redos/no-vulnerable -- safe
  var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(engineUserAgent);

  var set = global_1.setImmediate;
  var clear = global_1.clearImmediate;
  var process$3 = global_1.process;
  var Dispatch = global_1.Dispatch;
  var Function$1 = global_1.Function;
  var MessageChannel = global_1.MessageChannel;
  var String$1 = global_1.String;
  var counter = 0;
  var queue$2 = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var $location, defer, channel, port;
  fails(function () {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global_1.location;
  });
  var run = function (id) {
    if (hasOwnProperty_1(queue$2, id)) {
      var fn = queue$2[id];
      delete queue$2[id];
      fn();
    }
  };
  var runner = function (id) {
    return function () {
      run(id);
    };
  };
  var eventListener = function (event) {
    run(event.data);
  };
  var globalPostMessageDefer = function (id) {
    // old engines have not location.origin
    global_1.postMessage(String$1(id), $location.protocol + '//' + $location.host);
  };

  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!set || !clear) {
    set = function setImmediate(handler) {
      validateArgumentsLength(arguments.length, 1);
      var fn = isCallable(handler) ? handler : Function$1(handler);
      var args = arraySlice(arguments, 1);
      queue$2[++counter] = function () {
        functionApply(fn, undefined, args);
      };
      defer(counter);
      return counter;
    };
    clear = function clearImmediate(id) {
      delete queue$2[id];
    };
    // Node.js 0.8-
    if (engineIsNode) {
      defer = function (id) {
        process$3.nextTick(runner(id));
      };
      // Sphere (JS game engine) Dispatch API
    } else if (Dispatch && Dispatch.now) {
      defer = function (id) {
        Dispatch.now(runner(id));
      };
      // Browsers with MessageChannel, includes WebWorkers
      // except iOS - https://github.com/zloirock/core-js/issues/624
    } else if (MessageChannel && !engineIsIos) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = eventListener;
      defer = functionBindContext(port.postMessage, port);
      // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global_1.addEventListener && isCallable(global_1.postMessage) && !global_1.importScripts && $location && $location.protocol !== 'file:' && !fails(globalPostMessageDefer)) {
      defer = globalPostMessageDefer;
      global_1.addEventListener('message', eventListener, false);
      // IE8-
    } else if (ONREADYSTATECHANGE in documentCreateElement('script')) {
      defer = function (id) {
        html.appendChild(documentCreateElement('script'))[ONREADYSTATECHANGE] = function () {
          html.removeChild(this);
          run(id);
        };
      };
      // Rest old browsers
    } else {
      defer = function (id) {
        setTimeout(runner(id), 0);
      };
    }
  }
  var task$1 = {
    set: set,
    clear: clear
  };

  var Queue = function () {
    this.head = null;
    this.tail = null;
  };
  Queue.prototype = {
    add: function (item) {
      var entry = {
        item: item,
        next: null
      };
      var tail = this.tail;
      if (tail) tail.next = entry;else this.head = entry;
      this.tail = entry;
    },
    get: function () {
      var entry = this.head;
      if (entry) {
        var next = this.head = entry.next;
        if (next === null) this.tail = null;
        return entry.item;
      }
    }
  };
  var queue$1 = Queue;

  var engineIsIosPebble = /ipad|iphone|ipod/i.test(engineUserAgent) && typeof Pebble != 'undefined';

  var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(engineUserAgent);

  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var macrotask = task$1.set;





  var MutationObserver = global_1.MutationObserver || global_1.WebKitMutationObserver;
  var document$2 = global_1.document;
  var process$2 = global_1.process;
  var Promise$1 = global_1.Promise;
  // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
  var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global_1, 'queueMicrotask');
  var microtask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
  var notify$1, toggle, node, promise, then;

  // modern engines have queueMicrotask method
  if (!microtask) {
    var queue = new queue$1();
    var flush = function () {
      var parent, fn;
      if (engineIsNode && (parent = process$2.domain)) parent.exit();
      while (fn = queue.get()) try {
        fn();
      } catch (error) {
        if (queue.head) notify$1();
        throw error;
      }
      if (parent) parent.enter();
    };

    // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    if (!engineIsIos && !engineIsNode && !engineIsWebosWebkit && MutationObserver && document$2) {
      toggle = true;
      node = document$2.createTextNode('');
      new MutationObserver(flush).observe(node, {
        characterData: true
      });
      notify$1 = function () {
        node.data = toggle = !toggle;
      };
      // environments with maybe non-completely correct, but existent Promise
    } else if (!engineIsIosPebble && Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      promise = Promise$1.resolve(undefined);
      // workaround of WebKit ~ iOS Safari 10.1 bug
      promise.constructor = Promise$1;
      then = functionBindContext(promise.then, promise);
      notify$1 = function () {
        then(flush);
      };
      // Node.js without promises
    } else if (engineIsNode) {
      notify$1 = function () {
        process$2.nextTick(flush);
      };
      // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessage
      // - onreadystatechange
      // - setTimeout
    } else {
      // `webpack` dev server bug on IE global methods - use bind(fn, global)
      macrotask = functionBindContext(macrotask, global_1);
      notify$1 = function () {
        macrotask(flush);
      };
    }
    microtask = function (fn) {
      if (!queue.head) notify$1();
      queue.add(fn);
    };
  }
  var microtask_1 = microtask;

  var hostReportErrors = function (a, b) {
    try {
      // eslint-disable-next-line no-console -- safe
      arguments.length == 1 ? console.error(a) : console.error(a, b);
    } catch (error) {/* empty */}
  };

  var perform = function (exec) {
    try {
      return {
        error: false,
        value: exec()
      };
    } catch (error) {
      return {
        error: true,
        value: error
      };
    }
  };

  var promiseNativeConstructor = global_1.Promise;

  /* global Deno -- Deno case */
  var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

  var engineIsBrowser = !engineIsDeno && !engineIsNode && typeof window == 'object' && typeof document == 'object';

  promiseNativeConstructor && promiseNativeConstructor.prototype;
  var SPECIES$4 = wellKnownSymbol('species');
  var SUBCLASSING = false;
  var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable(global_1.PromiseRejectionEvent);
  var FORCED_PROMISE_CONSTRUCTOR$5 = isForced_1('Promise', function () {
    var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(promiseNativeConstructor);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(promiseNativeConstructor);
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (!GLOBAL_CORE_JS_PROMISE && engineV8Version === 66) return true;
    // We can't use @@species feature detection in V8 since it causes
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679
    if (!engineV8Version || engineV8Version < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
      // Detect correctness of subclassing with @@species support
      var promise = new promiseNativeConstructor(function (resolve) {
        resolve(1);
      });
      var FakePromise = function (exec) {
        exec(function () {/* empty */}, function () {/* empty */});
      };
      var constructor = promise.constructor = {};
      constructor[SPECIES$4] = FakePromise;
      SUBCLASSING = promise.then(function () {/* empty */}) instanceof FakePromise;
      if (!SUBCLASSING) return true;
      // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    }
    return !GLOBAL_CORE_JS_PROMISE && (engineIsBrowser || engineIsDeno) && !NATIVE_PROMISE_REJECTION_EVENT$1;
  });
  var promiseConstructorDetection = {
    CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
    REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
    SUBCLASSING: SUBCLASSING
  };

  var $TypeError$4 = TypeError;
  var PromiseCapability = function (C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw $TypeError$4('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aCallable(resolve);
    this.reject = aCallable(reject);
  };

  // `NewPromiseCapability` abstract operation
  // https://tc39.es/ecma262/#sec-newpromisecapability
  var f$1 = function (C) {
    return new PromiseCapability(C);
  };

  var newPromiseCapability$1 = {
  	f: f$1
  };

  var task = task$1.set;








  var PROMISE = 'Promise';
  var FORCED_PROMISE_CONSTRUCTOR$4 = promiseConstructorDetection.CONSTRUCTOR;
  var NATIVE_PROMISE_REJECTION_EVENT = promiseConstructorDetection.REJECTION_EVENT;
  var NATIVE_PROMISE_SUBCLASSING = promiseConstructorDetection.SUBCLASSING;
  var getInternalPromiseState = internalState.getterFor(PROMISE);
  var setInternalState = internalState.set;
  var NativePromisePrototype$1 = promiseNativeConstructor && promiseNativeConstructor.prototype;
  var PromiseConstructor = promiseNativeConstructor;
  var PromisePrototype = NativePromisePrototype$1;
  var TypeError$1 = global_1.TypeError;
  var document$1 = global_1.document;
  var process$1 = global_1.process;
  var newPromiseCapability = newPromiseCapability$1.f;
  var newGenericPromiseCapability = newPromiseCapability;
  var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global_1.dispatchEvent);
  var UNHANDLED_REJECTION = 'unhandledrejection';
  var REJECTION_HANDLED = 'rejectionhandled';
  var PENDING = 0;
  var FULFILLED = 1;
  var REJECTED = 2;
  var HANDLED = 1;
  var UNHANDLED = 2;
  var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

  // helpers
  var isThenable = function (it) {
    var then;
    return isObject(it) && isCallable(then = it.then) ? then : false;
  };
  var callReaction = function (reaction, state) {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var handler = ok ? reaction.ok : reaction.fail;
    var resolve = reaction.resolve;
    var reject = reaction.reject;
    var domain = reaction.domain;
    var result, then, exited;
    try {
      if (handler) {
        if (!ok) {
          if (state.rejection === UNHANDLED) onHandleUnhandled(state);
          state.rejection = HANDLED;
        }
        if (handler === true) result = value;else {
          if (domain) domain.enter();
          result = handler(value); // can throw
          if (domain) {
            domain.exit();
            exited = true;
          }
        }
        if (result === reaction.promise) {
          reject(TypeError$1('Promise-chain cycle'));
        } else if (then = isThenable(result)) {
          functionCall(then, result, resolve, reject);
        } else resolve(result);
      } else reject(value);
    } catch (error) {
      if (domain && !exited) domain.exit();
      reject(error);
    }
  };
  var notify = function (state, isReject) {
    if (state.notified) return;
    state.notified = true;
    microtask_1(function () {
      var reactions = state.reactions;
      var reaction;
      while (reaction = reactions.get()) {
        callReaction(reaction, state);
      }
      state.notified = false;
      if (isReject && !state.rejection) onUnhandled(state);
    });
  };
  var dispatchEvent = function (name, promise, reason) {
    var event, handler;
    if (DISPATCH_EVENT) {
      event = document$1.createEvent('Event');
      event.promise = promise;
      event.reason = reason;
      event.initEvent(name, false, true);
      global_1.dispatchEvent(event);
    } else event = {
      promise: promise,
      reason: reason
    };
    if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global_1['on' + name])) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  };
  var onUnhandled = function (state) {
    functionCall(task, global_1, function () {
      var promise = state.facade;
      var value = state.value;
      var IS_UNHANDLED = isUnhandled(state);
      var result;
      if (IS_UNHANDLED) {
        result = perform(function () {
          if (engineIsNode) {
            process$1.emit('unhandledRejection', value, promise);
          } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
        });
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        state.rejection = engineIsNode || isUnhandled(state) ? UNHANDLED : HANDLED;
        if (result.error) throw result.value;
      }
    });
  };
  var isUnhandled = function (state) {
    return state.rejection !== HANDLED && !state.parent;
  };
  var onHandleUnhandled = function (state) {
    functionCall(task, global_1, function () {
      var promise = state.facade;
      if (engineIsNode) {
        process$1.emit('rejectionHandled', promise);
      } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
  };
  var bind = function (fn, state, unwrap) {
    return function (value) {
      fn(state, value, unwrap);
    };
  };
  var internalReject = function (state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify(state, true);
  };
  var internalResolve = function (state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    try {
      if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
      var then = isThenable(value);
      if (then) {
        microtask_1(function () {
          var wrapper = {
            done: false
          };
          try {
            functionCall(then, value, bind(internalResolve, wrapper, state), bind(internalReject, wrapper, state));
          } catch (error) {
            internalReject(wrapper, error, state);
          }
        });
      } else {
        state.value = value;
        state.state = FULFILLED;
        notify(state, false);
      }
    } catch (error) {
      internalReject({
        done: false
      }, error, state);
    }
  };

  // constructor polyfill
  if (FORCED_PROMISE_CONSTRUCTOR$4) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise(executor) {
      anInstance(this, PromisePrototype);
      aCallable(executor);
      functionCall(Internal, this);
      var state = getInternalPromiseState(this);
      try {
        executor(bind(internalResolve, state), bind(internalReject, state));
      } catch (error) {
        internalReject(state, error);
      }
    };
    PromisePrototype = PromiseConstructor.prototype;

    // eslint-disable-next-line no-unused-vars -- required for `.length`
    Internal = function Promise(executor) {
      setInternalState(this, {
        type: PROMISE,
        done: false,
        notified: false,
        parent: false,
        reactions: new queue$1(),
        rejection: false,
        state: PENDING,
        value: undefined
      });
    };

    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      state.parent = true;
      reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable(onRejected) && onRejected;
      reaction.domain = engineIsNode ? process$1.domain : undefined;
      if (state.state == PENDING) state.reactions.add(reaction);else microtask_1(function () {
        callReaction(reaction, state);
      });
      return reaction.promise;
    });
    OwnPromiseCapability = function () {
      var promise = new Internal();
      var state = getInternalPromiseState(promise);
      this.promise = promise;
      this.resolve = bind(internalResolve, state);
      this.reject = bind(internalReject, state);
    };
    newPromiseCapability$1.f = newPromiseCapability = function (C) {
      return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
    if (isCallable(promiseNativeConstructor) && NativePromisePrototype$1 !== Object.prototype) {
      nativeThen = NativePromisePrototype$1.then;
      if (!NATIVE_PROMISE_SUBCLASSING) {
        // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        defineBuiltIn(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
          var that = this;
          return new PromiseConstructor(function (resolve, reject) {
            functionCall(nativeThen, that, resolve, reject);
          }).then(onFulfilled, onRejected);
          // https://github.com/zloirock/core-js/issues/640
        }, {
          unsafe: true
        });
      }

      // make `.constructor === Promise` work for native promise-based APIs
      try {
        delete NativePromisePrototype$1.constructor;
      } catch (error) {/* empty */}

      // make `instanceof Promise` work for native promise-based APIs
      if (objectSetPrototypeOf) {
        objectSetPrototypeOf(NativePromisePrototype$1, PromisePrototype);
      }
    }
  }
  _export({
    global: true,
    constructor: true,
    wrap: true,
    forced: FORCED_PROMISE_CONSTRUCTOR$4
  }, {
    Promise: PromiseConstructor
  });
  setToStringTag(PromiseConstructor, PROMISE, false);
  setSpecies(PROMISE);

  var iterators = {};

  var ITERATOR$2 = wellKnownSymbol('iterator');
  var ArrayPrototype = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod = function (it) {
    return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR$2] === it);
  };

  var ITERATOR$1 = wellKnownSymbol('iterator');
  var getIteratorMethod = function (it) {
    if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR$1) || getMethod(it, '@@iterator') || iterators[classof(it)];
  };

  var $TypeError$3 = TypeError;
  var getIterator = function (argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
    if (aCallable(iteratorMethod)) return anObject(functionCall(iteratorMethod, argument));
    throw $TypeError$3(tryToString(argument) + ' is not iterable');
  };

  var iteratorClose = function (iterator, kind, value) {
    var innerResult, innerError;
    anObject(iterator);
    try {
      innerResult = getMethod(iterator, 'return');
      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }
      innerResult = functionCall(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject(innerResult);
    return value;
  };

  var $TypeError$2 = TypeError;
  var Result = function (stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };
  var ResultPrototype = Result.prototype;
  var iterate = function (iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_RECORD = !!(options && options.IS_RECORD);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = functionBindContext(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function (condition) {
      if (iterator) iteratorClose(iterator, 'normal', condition);
      return new Result(true, condition);
    };
    var callFn = function (value) {
      if (AS_ENTRIES) {
        anObject(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      }
      return INTERRUPTED ? fn(value, stop) : fn(value);
    };
    if (IS_RECORD) {
      iterator = iterable.iterator;
    } else if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod(iterable);
      if (!iterFn) throw $TypeError$2(tryToString(iterable) + ' is not iterable');
      // optimisation for array iterators
      if (isArrayIteratorMethod(iterFn)) {
        for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && objectIsPrototypeOf(ResultPrototype, result)) return result;
        }
        return new Result(false);
      }
      iterator = getIterator(iterable, iterFn);
    }
    next = IS_RECORD ? iterable.next : iterator.next;
    while (!(step = functionCall(next, iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose(iterator, 'throw', error);
      }
      if (typeof result == 'object' && result && objectIsPrototypeOf(ResultPrototype, result)) return result;
    }
    return new Result(false);
  };

  var ITERATOR = wellKnownSymbol('iterator');
  var SAFE_CLOSING = false;
  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function () {
        return {
          done: !!called++
        };
      },
      'return': function () {
        SAFE_CLOSING = true;
      }
    };
    iteratorWithReturn[ITERATOR] = function () {
      return this;
    };
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function () {
      throw 2;
    });
  } catch (error) {/* empty */}
  var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[ITERATOR] = function () {
        return {
          next: function () {
            return {
              done: ITERATION_SUPPORT = true
            };
          }
        };
      };
      exec(object);
    } catch (error) {/* empty */}
    return ITERATION_SUPPORT;
  };

  var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;
  var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function (iterable) {
    promiseNativeConstructor.all(iterable).then(undefined, function () {/* empty */});
  });

  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  _export({
    target: 'Promise',
    stat: true,
    forced: promiseStaticsIncorrectIteration
  }, {
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability$1.f(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aCallable(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          remaining++;
          functionCall($promiseResolve, C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;




  var NativePromisePrototype = promiseNativeConstructor && promiseNativeConstructor.prototype;

  // `Promise.prototype.catch` method
  // https://tc39.es/ecma262/#sec-promise.prototype.catch
  _export({
    target: 'Promise',
    proto: true,
    forced: FORCED_PROMISE_CONSTRUCTOR$2,
    real: true
  }, {
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });

  // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
  if (isCallable(promiseNativeConstructor)) {
    var method = getBuiltIn('Promise').prototype['catch'];
    if (NativePromisePrototype['catch'] !== method) {
      defineBuiltIn(NativePromisePrototype, 'catch', method, {
        unsafe: true
      });
    }
  }

  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  _export({
    target: 'Promise',
    stat: true,
    forced: promiseStaticsIncorrectIteration
  }, {
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability$1.f(C);
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aCallable(C.resolve);
        iterate(iterable, function (promise) {
          functionCall($promiseResolve, C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  _export({
    target: 'Promise',
    stat: true,
    forced: FORCED_PROMISE_CONSTRUCTOR$1
  }, {
    reject: function reject(r) {
      var capability = newPromiseCapability$1.f(this);
      functionCall(capability.reject, undefined, r);
      return capability.promise;
    }
  });

  var promiseResolve = function (C, x) {
    anObject(C);
    if (isObject(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability$1.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;

  getBuiltIn('Promise');

  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  _export({
    target: 'Promise',
    stat: true,
    forced: FORCED_PROMISE_CONSTRUCTOR
  }, {
    resolve: function resolve(x) {
      return promiseResolve(this, x);
    }
  });

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray = Array.isArray || function isArray(argument) {
    return classofRaw(argument) == 'Array';
  };

  var $TypeError$1 = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger = function (it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError$1('Maximum allowed index exceeded');
    return it;
  };

  var createProperty = function (object, key, value) {
    var propertyKey = toPropertyKey(key);
    if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
  };

  var SPECIES$3 = wellKnownSymbol('species');
  var $Array$1 = Array;

  // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesConstructor = function (originalArray) {
    var C;
    if (isArray(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (isConstructor(C) && (C === $Array$1 || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
        C = C[SPECIES$3];
        if (C === null) C = undefined;
      }
    }
    return C === undefined ? $Array$1 : C;
  };

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate = function (originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };

  var SPECIES$2 = wellKnownSymbol('species');
  var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return engineV8Version >= 51 || !fails(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$2] = function () {
        return {
          foo: 1
        };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });
  var isConcatSpreadable = function (O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };
  var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  _export({
    target: 'Array',
    proto: true,
    arity: 1,
    forced: FORCED$1
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike(E);
          doesNotExceedSafeInteger(n + len);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
        } else {
          doesNotExceedSafeInteger(n + 1);
          createProperty(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  var dist = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.sanitizeUrl = void 0;
  var invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
  var htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
  var htmlCtrlEntityRegex = /&(newline|tab);/gi;
  var ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
  var urlSchemeRegex = /^.+(:|&colon;)/gim;
  var relativeFirstCharacters = [".", "/"];
  function isRelativeUrlWithoutProtocol(url) {
    return relativeFirstCharacters.indexOf(url[0]) > -1;
  }
  // adapted from https://stackoverflow.com/a/29824550/2601552
  function decodeHtmlCharacters(str) {
    return str.replace(htmlEntitiesRegex, function (match, dec) {
      return String.fromCharCode(dec);
    });
  }
  function sanitizeUrl(url) {
    var sanitizedUrl = decodeHtmlCharacters(url || "").replace(htmlCtrlEntityRegex, "").replace(ctrlCharactersRegex, "").trim();
    if (!sanitizedUrl) {
      return "about:blank";
    }
    if (isRelativeUrlWithoutProtocol(sanitizedUrl)) {
      return sanitizedUrl;
    }
    var urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);
    if (!urlSchemeParseResults) {
      return sanitizedUrl;
    }
    var urlScheme = urlSchemeParseResults[0];
    if (invalidProtocolRegex.test(urlScheme)) {
      return "about:blank";
    }
    return sanitizedUrl;
  }
  exports.sanitizeUrl = sanitizeUrl;
  });

  unwrapExports(dist);
  var dist_1 = dist.sanitizeUrl;

  var FileService = /*#__PURE__*/function () {
    function FileService() {
      _classCallCheck(this, FileService);
    }
    _createClass(FileService, null, [{
      key: "getFileConfig",
      value: function getFileConfig() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          name = _ref.name,
          url = _ref.url,
          downloadUrl = _ref.downloadUrl,
          currentUrl = _ref.currentUrl,
          dir = _ref.dir,
          onCreate = _ref.onCreate,
          fileModifiedTime = _ref.fileModifiedTime,
          isNew = _ref.isNew,
          isLoaded = _ref.isLoaded,
          sameWindow = _ref.sameWindow,
          skipConfirmation = _ref.skipConfirmation;
        return {
          name: name || "?",
          downloadUrl: downloadUrl || "",
          url: url ? dist_1(url) : "",
          dir: dir || "",
          currentUrl: currentUrl || "",
          onCreate: onCreate,
          fileModifiedTime: fileModifiedTime || null,
          isNew: isNew || false,
          isLoaded: isLoaded || false,
          sameWindow: sameWindow || false,
          skipConfirmation: skipConfirmation || false
        };
      }
    }, {
      key: "load",
      value: function () {
        var _load = _asyncToGenerator(function () {
          var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            fileName = _ref2.fileName,
            dir = _ref2.dir;
          return /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var result;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return window.fetch("".concat(window.OC.generateUrl("/apps/files_linkeditor/ajax/loadfile"), "?filename=").concat(encodeURIComponent(fileName), "&dir=").concat(encodeURIComponent(dir)), {
                    method: "GET",
                    headers: {
                      requesttoken: window.OC.requestToken
                    }
                  });
                case 2:
                  result = _context.sent;
                  if (!(result && result.ok)) {
                    _context.next = 7;
                    break;
                  }
                  _context.next = 6;
                  return result.json();
                case 6:
                  return _context.abrupt("return", _context.sent);
                case 7:
                  window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })();
        });
        function load() {
          return _load.apply(this, arguments);
        }
        return load;
      }()
    }, {
      key: "loadPublic",
      value: function () {
        var _loadPublic = _asyncToGenerator(function () {
          var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            downloadUrl = _ref3.downloadUrl;
          return /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var result;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return window.fetch(downloadUrl, {
                    method: "GET",
                    headers: {
                      requesttoken: window.OC.requestToken
                    }
                  });
                case 2:
                  result = _context2.sent;
                  if (!(result && result.ok)) {
                    _context2.next = 8;
                    break;
                  }
                  _context2.next = 6;
                  return result.text();
                case 6:
                  _context2.t0 = _context2.sent;
                  return _context2.abrupt("return", {
                    filecontents: _context2.t0
                  });
                case 8:
                  window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          })();
        });
        function loadPublic() {
          return _loadPublic.apply(this, arguments);
        }
        return loadPublic;
      }()
    }, {
      key: "save",
      value: function () {
        var _save = _asyncToGenerator(function () {
          var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            fileContent = _ref4.fileContent,
            name = _ref4.name,
            fileModifiedTime = _ref4.fileModifiedTime,
            dir = _ref4.dir;
          return /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var path, result;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  // Send the PUT request
                  path = "".concat(dir).concat(name);
                  if (dir !== "/") {
                    path = "".concat(dir, "/").concat(name);
                  }
                  _context3.next = 4;
                  return window.fetch(window.OC.generateUrl("/apps/files_linkeditor/ajax/savefile"), {
                    method: "PUT",
                    body: JSON.stringify({
                      filecontents: fileContent,
                      path: path,
                      mtime: fileModifiedTime
                    }),
                    headers: {
                      requesttoken: window.OC.requestToken,
                      "Content-Type": "application/json"
                    }
                  });
                case 4:
                  result = _context3.sent;
                  if (!(result && result.ok)) {
                    _context3.next = 7;
                    break;
                  }
                  return _context3.abrupt("return", true);
                case 7:
                  window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
                case 8:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          })();
        });
        function save() {
          return _save.apply(this, arguments);
        }
        return save;
      }()
    }, {
      key: "userCanEdit",
      value: function userCanEdit() {
        return window.FileList && window.OC && window.OC.currentUser && (window.OC.PERMISSION_ALL === window.FileList.getDirectoryPermissions() || window.OC.PERMISSION_UPDATE === window.FileList.getDirectoryPermissions());
      }
    }]);
    return FileService;
  }();

  var viewMode = writable(""); // 'edit' or 'view'
  var currentFile = writable(FileService.getFileConfig());

  function create_if_block_2$1(ctx) {
    var p;
    var t0_value = /*t*/ctx[2]('files_linkeditor', 'You are about to visit:') + "";
    var t0;
    var t1;
    var em;
    var a;
    var t2_value = /*file*/ctx[0].url + "";
    var t2;
    var a_href_value;
    var a_target_value;
    return {
      c: function c() {
        p = element("p");
        t0 = text(t0_value);
        t1 = space();
        em = element("em");
        a = element("a");
        t2 = text(t2_value);
        attr(a, "href", a_href_value = dist_1( /*file*/ctx[0].url));
        attr(a, "target", a_target_value = /*file*/ctx[0].sameWindow ? '_self' : '_blank');
        attr(p, "class", "urldisplay");
      },
      m: function m(target, anchor) {
        insert(target, p, anchor);
        append(p, t0);
        append(p, t1);
        append(p, em);
        append(em, a);
        append(a, t2);
      },
      p: function p(ctx, dirty) {
        if (dirty & /*file*/1 && t2_value !== (t2_value = /*file*/ctx[0].url + "")) set_data(t2, t2_value);
        if (dirty & /*file*/1 && a_href_value !== (a_href_value = dist_1( /*file*/ctx[0].url))) {
          attr(a, "href", a_href_value);
        }
        if (dirty & /*file*/1 && a_target_value !== (a_target_value = /*file*/ctx[0].sameWindow ? '_self' : '_blank')) {
          attr(a, "target", a_target_value);
        }
      },
      d: function d(detaching) {
        if (detaching) detach(p);
      }
    };
  }

  // (63:2) {#if !loading}
  function create_if_block$2(ctx) {
    var show_if = FileService.userCanEdit();
    var t0;
    var a;
    var t1_value = /*t*/ctx[2]('files_linkeditor', 'Visit link') + "";
    var t1;
    var a_href_value;
    var a_target_value;
    var if_block = show_if && create_if_block_1$2(ctx);
    return {
      c: function c() {
        if (if_block) if_block.c();
        t0 = space();
        a = element("a");
        t1 = text(t1_value);
        attr(a, "href", a_href_value = dist_1( /*file*/ctx[0].url));
        attr(a, "target", a_target_value = /*file*/ctx[0].sameWindow ? '_self' : '_blank');
        attr(a, "class", "button primary");
      },
      m: function m(target, anchor) {
        if (if_block) if_block.m(target, anchor);
        insert(target, t0, anchor);
        insert(target, a, anchor);
        append(a, t1);
      },
      p: function p(ctx, dirty) {
        if (show_if) if_block.p(ctx, dirty);
        if (dirty & /*file*/1 && a_href_value !== (a_href_value = dist_1( /*file*/ctx[0].url))) {
          attr(a, "href", a_href_value);
        }
        if (dirty & /*file*/1 && a_target_value !== (a_target_value = /*file*/ctx[0].sameWindow ? '_self' : '_blank')) {
          attr(a, "target", a_target_value);
        }
      },
      d: function d(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach(t0);
        if (detaching) detach(a);
      }
    };
  }

  // (64:3) {#if FileService.userCanEdit()}
  function create_if_block_1$2(ctx) {
    var a;
    var t_1_value = /*t*/ctx[2]('files_linkeditor', 'Edit link') + "";
    var t_1;
    var a_href_value;
    var mounted;
    var dispose;
    return {
      c: function c() {
        a = element("a");
        t_1 = text(t_1_value);
        attr(a, "href", a_href_value = /*file*/ctx[0].currentUrl);
        attr(a, "class", "button");
      },
      m: function m(target, anchor) {
        insert(target, a, anchor);
        append(a, t_1);
        if (!mounted) {
          dispose = listen(a, "click", prevent_default( /*click_handler_1*/ctx[4]));
          mounted = true;
        }
      },
      p: function p(ctx, dirty) {
        if (dirty & /*file*/1 && a_href_value !== (a_href_value = /*file*/ctx[0].currentUrl)) {
          attr(a, "href", a_href_value);
        }
      },
      d: function d(detaching) {
        if (detaching) detach(a);
        mounted = false;
        dispose();
      }
    };
  }

  // (42:0) <Overlay {loading}>
  function create_default_slot$1(ctx) {
    var div0;
    var h3;
    var t0_value = /*file*/ctx[0].name + "";
    var t0;
    var t1;
    var t2;
    var div1;
    var a;
    var t3_value = /*t*/ctx[2]('files_linkeditor', 'Cancel') + "";
    var t3;
    var a_href_value;
    var t4;
    var mounted;
    var dispose;
    var if_block0 = ! /*loading*/ctx[1] && create_if_block_2$1(ctx);
    var if_block1 = ! /*loading*/ctx[1] && create_if_block$2(ctx);
    return {
      c: function c() {
        div0 = element("div");
        h3 = element("h3");
        t0 = text(t0_value);
        t1 = space();
        if (if_block0) if_block0.c();
        t2 = space();
        div1 = element("div");
        a = element("a");
        t3 = text(t3_value);
        t4 = space();
        if (if_block1) if_block1.c();
        attr(div0, "class", "urledit push-bottom");
        attr(a, "href", a_href_value = /*file*/ctx[0].currentUrl);
        attr(a, "class", "button");
        attr(div1, "class", "oc-dialog-buttonrow twobuttons");
      },
      m: function m(target, anchor) {
        insert(target, div0, anchor);
        append(div0, h3);
        append(h3, t0);
        append(div0, t1);
        if (if_block0) if_block0.m(div0, null);
        insert(target, t2, anchor);
        insert(target, div1, anchor);
        append(div1, a);
        append(a, t3);
        append(div1, t4);
        if (if_block1) if_block1.m(div1, null);
        if (!mounted) {
          dispose = listen(a, "click", prevent_default( /*click_handler*/ctx[3]));
          mounted = true;
        }
      },
      p: function p(ctx, dirty) {
        if (dirty & /*file*/1 && t0_value !== (t0_value = /*file*/ctx[0].name + "")) set_data(t0, t0_value);
        if (! /*loading*/ctx[1]) {
          if (if_block0) {
            if_block0.p(ctx, dirty);
          } else {
            if_block0 = create_if_block_2$1(ctx);
            if_block0.c();
            if_block0.m(div0, null);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (dirty & /*file*/1 && a_href_value !== (a_href_value = /*file*/ctx[0].currentUrl)) {
          attr(a, "href", a_href_value);
        }
        if (! /*loading*/ctx[1]) {
          if (if_block1) {
            if_block1.p(ctx, dirty);
          } else {
            if_block1 = create_if_block$2(ctx);
            if_block1.c();
            if_block1.m(div1, null);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
      },
      d: function d(detaching) {
        if (detaching) detach(div0);
        if (if_block0) if_block0.d();
        if (detaching) detach(t2);
        if (detaching) detach(div1);
        if (if_block1) if_block1.d();
        mounted = false;
        dispose();
      }
    };
  }
  function create_fragment$3(ctx) {
    var overlay;
    var current;
    overlay = new Overlay({
      props: {
        loading: /*loading*/ctx[1],
        $$slots: {
          default: [create_default_slot$1]
        },
        $$scope: {
          ctx: ctx
        }
      }
    });
    return {
      c: function c() {
        create_component(overlay.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(overlay, target, anchor);
        current = true;
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];
        var overlay_changes = {};
        if (dirty & /*loading*/2) overlay_changes.loading = /*loading*/ctx[1];
        if (dirty & /*$$scope, file, loading*/67) {
          overlay_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }
        overlay.$set(overlay_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(overlay.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(overlay.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(overlay, detaching);
      }
    };
  }
  function instance$3($$self, $$props, $$invalidate) {
    var file;
    var loading;
    var t = window.t;
    var unsubscribe;
    onMount(function () {
      // Subscribe to changes of the current file
      unsubscribe = currentFile.subscribe( /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(fileUpdate) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                $$invalidate(0, file = fileUpdate);
                if (!(file && file.isLoaded)) {
                  _context.next = 7;
                  break;
                }
                $$invalidate(1, loading = false);

                // Show error when url is permanently empty (or maybe show editor?)
                if (file.url) {
                  _context.next = 6;
                  break;
                }
                OC.dialogs.alert(t("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."), t("files_linkeditor", "A slight problem"));
                return _context.abrupt("return");
              case 6:
                // Open the link without confirmation
                if (file.skipConfirmation && file.sameWindow) {
                  window.location.href = file.url;

                  // Hide viewer
                  viewMode.update(function () {
                    return "none";
                  });
                }
              case 7:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }());
    });
    onDestroy(function () {
      // Unsubscribe from store to avoid memory leaks
      unsubscribe();
    });
    var click_handler = function click_handler() {
      viewMode.update(function () {
        return 'none';
      });
    };
    var click_handler_1 = function click_handler_1() {
      viewMode.update(function () {
        return 'edit';
      });
    };
    $$invalidate(0, file = FileService.getFileConfig());
    $$invalidate(1, loading = true);
    return [file, loading, t, click_handler, click_handler_1];
  }
  var Viewer = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Viewer, _SvelteComponent);
    var _super = _createSuper(Viewer);
    function Viewer(options) {
      var _this;
      _classCallCheck(this, Viewer);
      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {});
      return _this;
    }
    return _createClass(Viewer);
  }(SvelteComponent);

  var arrayMethodIsStrict = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () {
        return 1;
      }, 1);
    });
  };

  /* eslint-disable es/no-array-prototype-indexof -- required for testing */


  var $indexOf = arrayIncludes.indexOf;

  var nativeIndexOf = functionUncurryThisClause([].indexOf);
  var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
  var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');

  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  _export({
    target: 'Array',
    proto: true,
    forced: FORCED
  }, {
    indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
      var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
      return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf(this, searchElement, fromIndex) || 0 : $indexOf(this, searchElement, fromIndex);
    }
  });

  var $String = String;
  var toString_1 = function (argument) {
    if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return $String(argument);
  };

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags = function () {
    var that = anObject(this);
    var result = '';
    if (that.hasIndices) result += 'd';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.unicodeSets) result += 'v';
    if (that.sticky) result += 'y';
    return result;
  };

  // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var $RegExp$2 = global_1.RegExp;
  var UNSUPPORTED_Y$2 = fails(function () {
    var re = $RegExp$2('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });

  // UC Browser bug
  // https://github.com/zloirock/core-js/issues/1008
  var MISSED_STICKY$1 = UNSUPPORTED_Y$2 || fails(function () {
    return !$RegExp$2('a', 'y').sticky;
  });
  var BROKEN_CARET = UNSUPPORTED_Y$2 || fails(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp$2('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });
  var regexpStickyHelpers = {
    BROKEN_CARET: BROKEN_CARET,
    MISSED_STICKY: MISSED_STICKY$1,
    UNSUPPORTED_Y: UNSUPPORTED_Y$2
  };

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys = Object.keys || function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
  };

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  var f = descriptors && !v8PrototypeDefineBug ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var props = toIndexedObject(Properties);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) objectDefineProperty.f(O, key = keys[index++], props[key]);
    return O;
  };

  var objectDefineProperties = {
  	f: f
  };

  /* global ActiveXObject -- old IE, WSH */







  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO = sharedKey('IE_PROTO');
  var EmptyConstructor = function () {/* empty */};
  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) {/* ignore */}
    NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
    : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys.length;
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
  };
  hiddenKeys$1[IE_PROTO] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  // eslint-disable-next-line es/no-object-create -- safe
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : objectDefineProperties.f(result, Properties);
  };

  // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var $RegExp$1 = global_1.RegExp;
  var regexpUnsupportedDotAll = fails(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.exec('\n') && re.flags === 's');
  });

  // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
  var $RegExp = global_1.RegExp;
  var regexpUnsupportedNcg = fails(function () {
    var re = $RegExp('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
  });

  /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  /* eslint-disable regexp/no-useless-quantifier -- testing */







  var getInternalState = internalState.get;


  var nativeReplace = shared('native-string-replace', String.prototype.replace);
  var nativeExec = RegExp.prototype.exec;
  var patchedExec = nativeExec;
  var charAt$4 = functionUncurryThis(''.charAt);
  var indexOf = functionUncurryThis(''.indexOf);
  var replace$3 = functionUncurryThis(''.replace);
  var stringSlice$4 = functionUncurryThis(''.slice);
  var UPDATES_LAST_INDEX_WRONG = function () {
    var re1 = /a/;
    var re2 = /b*/g;
    functionCall(nativeExec, re1, 'a');
    functionCall(nativeExec, re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  }();
  var UNSUPPORTED_Y$1 = regexpStickyHelpers.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || regexpUnsupportedDotAll || regexpUnsupportedNcg;
  if (PATCH) {
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState(re);
      var str = toString_1(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;
      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = functionCall(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }
      var groups = state.groups;
      var sticky = UNSUPPORTED_Y$1 && re.sticky;
      var flags = functionCall(regexpFlags, re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;
      if (sticky) {
        flags = replace$3(flags, 'y', '');
        if (indexOf(flags, 'g') === -1) {
          flags += 'g';
        }
        strCopy = stringSlice$4(str, re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$4(str, re.lastIndex - 1) !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
      }
      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
      match = functionCall(nativeExec, sticky ? reCopy : re, strCopy);
      if (sticky) {
        if (match) {
          match.input = stringSlice$4(match.input, charsAdded);
          match[0] = stringSlice$4(match[0], charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
        functionCall(nativeReplace, match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }
      if (match && groups) {
        match.groups = object = objectCreate(null);
        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }
      return match;
    };
  }
  var regexpExec = patchedExec;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  _export({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== regexpExec
  }, {
    exec: regexpExec
  });

  // TODO: Remove from `core-js@4` since it's moved to entry points







  var SPECIES$1 = wellKnownSymbol('species');
  var RegExpPrototype$3 = RegExp.prototype;
  var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol(KEY);
    var DELEGATES_TO_SYMBOL = !fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () {
        return 7;
      };
      return ''[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;
      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {};
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES$1] = function () {
          return re;
        };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }
      re.exec = function () {
        execCalled = true;
        return null;
      };
      re[SYMBOL]('');
      return !execCalled;
    });
    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
      var uncurriedNativeRegExpMethod = functionUncurryThisClause(/./[SYMBOL]);
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var uncurriedNativeMethod = functionUncurryThisClause(nativeMethod);
        var $exec = regexp.exec;
        if ($exec === regexpExec || $exec === RegExpPrototype$3.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return {
              done: true,
              value: uncurriedNativeRegExpMethod(regexp, str, arg2)
            };
          }
          return {
            done: true,
            value: uncurriedNativeMethod(str, regexp, arg2)
          };
        }
        return {
          done: false
        };
      });
      defineBuiltIn(String.prototype, KEY, methods[0]);
      defineBuiltIn(RegExpPrototype$3, SYMBOL, methods[1]);
    }
    if (SHAM) createNonEnumerableProperty(RegExpPrototype$3[SYMBOL], 'sham', true);
  };

  var charAt$3 = functionUncurryThis(''.charAt);
  var charCodeAt = functionUncurryThis(''.charCodeAt);
  var stringSlice$3 = functionUncurryThis(''.slice);
  var createMethod$1 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString_1(requireObjectCoercible($this));
      var position = toIntegerOrInfinity(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$3(S, position) : first : CONVERT_TO_STRING ? stringSlice$3(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };
  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$1(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$1(true)
  };

  var charAt$2 = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex = function (S, index, unicode) {
    return index + (unicode ? charAt$2(S, index).length : 1);
  };

  var floor = Math.floor;
  var charAt$1 = functionUncurryThis(''.charAt);
  var replace$2 = functionUncurryThis(''.replace);
  var stringSlice$2 = functionUncurryThis(''.slice);
  // eslint-disable-next-line redos/no-vulnerable -- safe
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

  // `GetSubstitution` abstract operation
  // https://tc39.es/ecma262/#sec-getsubstitution
  var getSubstitution = function (matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace$2(replacement, symbols, function (match, ch) {
      var capture;
      switch (charAt$1(ch, 0)) {
        case '$':
          return '$';
        case '&':
          return matched;
        case '`':
          return stringSlice$2(str, 0, position);
        case "'":
          return stringSlice$2(str, tailPos);
        case '<':
          capture = namedCaptures[stringSlice$2(ch, 1, -1)];
          break;
        default:
          // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? charAt$1(ch, 1) : captures[f - 1] + charAt$1(ch, 1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  };

  var $TypeError = TypeError;

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (isCallable(exec)) {
      var result = functionCall(exec, R, S);
      if (result !== null) anObject(result);
      return result;
    }
    if (classofRaw(R) === 'RegExp') return functionCall(regexpExec, R, S);
    throw $TypeError('RegExp#exec called on incompatible receiver');
  };

  var REPLACE = wellKnownSymbol('replace');
  var max$1 = Math.max;
  var min = Math.min;
  var concat = functionUncurryThis([].concat);
  var push = functionUncurryThis([].push);
  var stringIndexOf$1 = functionUncurryThis(''.indexOf);
  var stringSlice$1 = functionUncurryThis(''.slice);
  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var REPLACE_KEEPS_$0 = function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  }();

  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }
    return false;
  }();
  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = {
        a: '7'
      };
      return result;
    };
    // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
    return ''.replace(re, '$<a>') !== '7';
  });

  // @@replace logic
  fixRegexpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
    return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer ? functionCall(replacer, searchValue, O, replaceValue) : functionCall(nativeReplace, toString_1(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString_1(string);
      if (typeof replaceValue == 'string' && stringIndexOf$1(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf$1(replaceValue, '$<') === -1) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }
      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString_1(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regexpExecAbstract(rx, S);
        if (result === null) break;
        push(results, result);
        if (!global) break;
        var matchStr = toString_1(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = toString_1(result[0]);
        var position = max$1(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString_1(functionApply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice$1(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice$1(S, nextSourcePosition);
    }];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  // makes subclassing work correct for wrapped built-ins
  var inheritIfRequired = function ($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
    // it can work only with native `setPrototypeOf`
    objectSetPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) objectSetPrototypeOf($this, NewTargetPrototype);
    return $this;
  };

  var MATCH$1 = wellKnownSymbol('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
  };

  var RegExpPrototype$2 = RegExp.prototype;
  var regexpGetFlags = function (R) {
    var flags = R.flags;
    return flags === undefined && !('flags' in RegExpPrototype$2) && !hasOwnProperty_1(R, 'flags') && objectIsPrototypeOf(RegExpPrototype$2, R) ? functionCall(regexpFlags, R) : flags;
  };

  var defineProperty = objectDefineProperty.f;
  var proxyAccessor = function (Target, Source, key) {
    key in Target || defineProperty(Target, key, {
      configurable: true,
      get: function () {
        return Source[key];
      },
      set: function (it) {
        Source[key] = it;
      }
    });
  };

  var getOwnPropertyNames = objectGetOwnPropertyNames.f;









  var enforceInternalState = internalState.enforce;




  var MATCH = wellKnownSymbol('match');
  var NativeRegExp = global_1.RegExp;
  var RegExpPrototype$1 = NativeRegExp.prototype;
  var SyntaxError = global_1.SyntaxError;
  var exec = functionUncurryThis(RegExpPrototype$1.exec);
  var charAt = functionUncurryThis(''.charAt);
  var replace$1 = functionUncurryThis(''.replace);
  var stringIndexOf = functionUncurryThis(''.indexOf);
  var stringSlice = functionUncurryThis(''.slice);
  // TODO: Use only proper RegExpIdentifierName
  var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  var re1 = /a/g;
  var re2 = /a/g;

  // "new" should create a new object, old webkit bug
  var CORRECT_NEW = new NativeRegExp(re1) !== re1;
  var MISSED_STICKY = regexpStickyHelpers.MISSED_STICKY;
  var UNSUPPORTED_Y = regexpStickyHelpers.UNSUPPORTED_Y;
  var BASE_FORCED = descriptors && (!CORRECT_NEW || MISSED_STICKY || regexpUnsupportedDotAll || regexpUnsupportedNcg || fails(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));
  var handleDotAll = function (string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var brackets = false;
    var chr;
    for (; index <= length; index++) {
      chr = charAt(string, index);
      if (chr === '\\') {
        result += chr + charAt(string, ++index);
        continue;
      }
      if (!brackets && chr === '.') {
        result += '[\\s\\S]';
      } else {
        if (chr === '[') {
          brackets = true;
        } else if (chr === ']') {
          brackets = false;
        }
        result += chr;
      }
    }
    return result;
  };
  var handleNCG = function (string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var named = [];
    var names = {};
    var brackets = false;
    var ncg = false;
    var groupid = 0;
    var groupname = '';
    var chr;
    for (; index <= length; index++) {
      chr = charAt(string, index);
      if (chr === '\\') {
        chr = chr + charAt(string, ++index);
      } else if (chr === ']') {
        brackets = false;
      } else if (!brackets) switch (true) {
        case chr === '[':
          brackets = true;
          break;
        case chr === '(':
          if (exec(IS_NCG, stringSlice(string, index + 1))) {
            index += 2;
            ncg = true;
          }
          result += chr;
          groupid++;
          continue;
        case chr === '>' && ncg:
          if (groupname === '' || hasOwnProperty_1(names, groupname)) {
            throw new SyntaxError('Invalid capture group name');
          }
          names[groupname] = true;
          named[named.length] = [groupname, groupid];
          ncg = false;
          groupname = '';
          continue;
      }
      if (ncg) groupname += chr;else result += chr;
    }
    return [result, named];
  };

  // `RegExp` constructor
  // https://tc39.es/ecma262/#sec-regexp-constructor
  if (isForced_1('RegExp', BASE_FORCED)) {
    var RegExpWrapper = function RegExp(pattern, flags) {
      var thisIsRegExp = objectIsPrototypeOf(RegExpPrototype$1, this);
      var patternIsRegExp = isRegexp(pattern);
      var flagsAreUndefined = flags === undefined;
      var groups = [];
      var rawPattern = pattern;
      var rawFlags, dotAll, sticky, handled, result, state;
      if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
        return pattern;
      }
      if (patternIsRegExp || objectIsPrototypeOf(RegExpPrototype$1, pattern)) {
        pattern = pattern.source;
        if (flagsAreUndefined) flags = regexpGetFlags(rawPattern);
      }
      pattern = pattern === undefined ? '' : toString_1(pattern);
      flags = flags === undefined ? '' : toString_1(flags);
      rawPattern = pattern;
      if (regexpUnsupportedDotAll && 'dotAll' in re1) {
        dotAll = !!flags && stringIndexOf(flags, 's') > -1;
        if (dotAll) flags = replace$1(flags, /s/g, '');
      }
      rawFlags = flags;
      if (MISSED_STICKY && 'sticky' in re1) {
        sticky = !!flags && stringIndexOf(flags, 'y') > -1;
        if (sticky && UNSUPPORTED_Y) flags = replace$1(flags, /y/g, '');
      }
      if (regexpUnsupportedNcg) {
        handled = handleNCG(pattern);
        pattern = handled[0];
        groups = handled[1];
      }
      result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$1, RegExpWrapper);
      if (dotAll || sticky || groups.length) {
        state = enforceInternalState(result);
        if (dotAll) {
          state.dotAll = true;
          state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
        }
        if (sticky) state.sticky = true;
        if (groups.length) state.groups = groups;
      }
      if (pattern !== rawPattern) try {
        // fails in old engines, but we have no alternatives for unsupported regex syntax
        createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
      } catch (error) {/* empty */}
      return result;
    };
    for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
      proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
    }
    RegExpPrototype$1.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype$1;
    defineBuiltIn(global_1, 'RegExp', RegExpWrapper, {
      constructor: true
    });
  }

  // https://tc39.es/ecma262/#sec-get-regexp-@@species
  setSpecies('RegExp');

  var PROPER_FUNCTION_NAME$1 = functionName.PROPER;





  var TO_STRING = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var nativeToString = RegExpPrototype[TO_STRING];
  var NOT_GENERIC = fails(function () {
    return nativeToString.call({
      source: 'a',
      flags: 'b'
    }) != '/a/b';
  });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = PROPER_FUNCTION_NAME$1 && nativeToString.name != TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject(this);
      var pattern = toString_1(R.source);
      var flags = toString_1(regexpGetFlags(R));
      return '/' + pattern + '/' + flags;
    }, {
      unsafe: true
    });
  }

  // a string of all valid unicode whitespaces
  var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' + '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var replace = functionUncurryThis(''.replace);
  var ltrim = RegExp('^[' + whitespaces + ']+');
  var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod = function (TYPE) {
    return function ($this) {
      var string = toString_1(requireObjectCoercible($this));
      if (TYPE & 1) string = replace(string, ltrim, '');
      if (TYPE & 2) string = replace(string, rtrim, '$1');
      return string;
    };
  };
  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod(3)
  };

  var PROPER_FUNCTION_NAME = functionName.PROPER;


  var non = '\u200B\u0085\u180E';

  // check that a method works with the correct list
  // of whitespaces and has a correct name
  var stringTrimForced = function (METHOD_NAME) {
    return fails(function () {
      return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
  };

  var $trim = stringTrim.trim;


  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  _export({
    target: 'String',
    proto: true,
    forced: stringTrimForced('trim')
  }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  // @@match logic
  fixRegexpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
    return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
      return matcher ? functionCall(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString_1(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString_1(string);
      var res = maybeCallNative(nativeMatch, rx, S);
      if (res.done) return res.value;
      if (!rx.global) return regexpExecAbstract(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regexpExecAbstract(rx, S)) !== null) {
        var matchStr = toString_1(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }];
  });

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
  var SPECIES = wellKnownSymbol('species');
  var $Array = Array;
  var max = Math.max;

  // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  _export({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
  }, {
    slice: function slice(start, end) {
      var O = toIndexedObject(this);
      var length = lengthOfArrayLike(O);
      var k = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length);
      // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
      var Constructor, result, n;
      if (isArray(O)) {
        Constructor = O.constructor;
        // cross-realm fallback
        if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject(Constructor)) {
          Constructor = Constructor[SPECIES];
          if (Constructor === null) Constructor = undefined;
        }
        if (Constructor === $Array || Constructor === undefined) {
          return arraySlice(O, k, fin);
        }
      }
      result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
      for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
      result.length = n;
      return result;
    }
  });

  var BigInteger = createCommonjsModule(function (module) {
  var bigInt = function (undefined$1) {

    var BASE = 1e7,
      LOG_BASE = 7,
      MAX_INT = 9007199254740992,
      MAX_INT_ARR = smallToArray(MAX_INT),
      DEFAULT_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz";
    var supportsNativeBigInt = typeof BigInt === "function";
    function Integer(v, radix, alphabet, caseSensitive) {
      if (typeof v === "undefined") return Integer[0];
      if (typeof radix !== "undefined") return +radix === 10 && !alphabet ? parseValue(v) : parseBase(v, radix, alphabet, caseSensitive);
      return parseValue(v);
    }
    function BigInteger(value, sign) {
      this.value = value;
      this.sign = sign;
      this.isSmall = false;
    }
    BigInteger.prototype = Object.create(Integer.prototype);
    function SmallInteger(value) {
      this.value = value;
      this.sign = value < 0;
      this.isSmall = true;
    }
    SmallInteger.prototype = Object.create(Integer.prototype);
    function NativeBigInt(value) {
      this.value = value;
    }
    NativeBigInt.prototype = Object.create(Integer.prototype);
    function isPrecise(n) {
      return -MAX_INT < n && n < MAX_INT;
    }
    function smallToArray(n) {
      // For performance reasons doesn't reference BASE, need to change this function if BASE changes
      if (n < 1e7) return [n];
      if (n < 1e14) return [n % 1e7, Math.floor(n / 1e7)];
      return [n % 1e7, Math.floor(n / 1e7) % 1e7, Math.floor(n / 1e14)];
    }
    function arrayToSmall(arr) {
      // If BASE changes this function may need to change
      trim(arr);
      var length = arr.length;
      if (length < 4 && compareAbs(arr, MAX_INT_ARR) < 0) {
        switch (length) {
          case 0:
            return 0;
          case 1:
            return arr[0];
          case 2:
            return arr[0] + arr[1] * BASE;
          default:
            return arr[0] + (arr[1] + arr[2] * BASE) * BASE;
        }
      }
      return arr;
    }
    function trim(v) {
      var i = v.length;
      while (v[--i] === 0);
      v.length = i + 1;
    }
    function createArray(length) {
      // function shamelessly stolen from Yaffle's library https://github.com/Yaffle/BigInteger
      var x = new Array(length);
      var i = -1;
      while (++i < length) {
        x[i] = 0;
      }
      return x;
    }
    function truncate(n) {
      if (n > 0) return Math.floor(n);
      return Math.ceil(n);
    }
    function add(a, b) {
      // assumes a and b are arrays with a.length >= b.length
      var l_a = a.length,
        l_b = b.length,
        r = new Array(l_a),
        carry = 0,
        base = BASE,
        sum,
        i;
      for (i = 0; i < l_b; i++) {
        sum = a[i] + b[i] + carry;
        carry = sum >= base ? 1 : 0;
        r[i] = sum - carry * base;
      }
      while (i < l_a) {
        sum = a[i] + carry;
        carry = sum === base ? 1 : 0;
        r[i++] = sum - carry * base;
      }
      if (carry > 0) r.push(carry);
      return r;
    }
    function addAny(a, b) {
      if (a.length >= b.length) return add(a, b);
      return add(b, a);
    }
    function addSmall(a, carry) {
      // assumes a is array, carry is number with 0 <= carry < MAX_INT
      var l = a.length,
        r = new Array(l),
        base = BASE,
        sum,
        i;
      for (i = 0; i < l; i++) {
        sum = a[i] - base + carry;
        carry = Math.floor(sum / base);
        r[i] = sum - carry * base;
        carry += 1;
      }
      while (carry > 0) {
        r[i++] = carry % base;
        carry = Math.floor(carry / base);
      }
      return r;
    }
    BigInteger.prototype.add = function (v) {
      var n = parseValue(v);
      if (this.sign !== n.sign) {
        return this.subtract(n.negate());
      }
      var a = this.value,
        b = n.value;
      if (n.isSmall) {
        return new BigInteger(addSmall(a, Math.abs(b)), this.sign);
      }
      return new BigInteger(addAny(a, b), this.sign);
    };
    BigInteger.prototype.plus = BigInteger.prototype.add;
    SmallInteger.prototype.add = function (v) {
      var n = parseValue(v);
      var a = this.value;
      if (a < 0 !== n.sign) {
        return this.subtract(n.negate());
      }
      var b = n.value;
      if (n.isSmall) {
        if (isPrecise(a + b)) return new SmallInteger(a + b);
        b = smallToArray(Math.abs(b));
      }
      return new BigInteger(addSmall(b, Math.abs(a)), a < 0);
    };
    SmallInteger.prototype.plus = SmallInteger.prototype.add;
    NativeBigInt.prototype.add = function (v) {
      return new NativeBigInt(this.value + parseValue(v).value);
    };
    NativeBigInt.prototype.plus = NativeBigInt.prototype.add;
    function subtract(a, b) {
      // assumes a and b are arrays with a >= b
      var a_l = a.length,
        b_l = b.length,
        r = new Array(a_l),
        borrow = 0,
        base = BASE,
        i,
        difference;
      for (i = 0; i < b_l; i++) {
        difference = a[i] - borrow - b[i];
        if (difference < 0) {
          difference += base;
          borrow = 1;
        } else borrow = 0;
        r[i] = difference;
      }
      for (i = b_l; i < a_l; i++) {
        difference = a[i] - borrow;
        if (difference < 0) difference += base;else {
          r[i++] = difference;
          break;
        }
        r[i] = difference;
      }
      for (; i < a_l; i++) {
        r[i] = a[i];
      }
      trim(r);
      return r;
    }
    function subtractAny(a, b, sign) {
      var value;
      if (compareAbs(a, b) >= 0) {
        value = subtract(a, b);
      } else {
        value = subtract(b, a);
        sign = !sign;
      }
      value = arrayToSmall(value);
      if (typeof value === "number") {
        if (sign) value = -value;
        return new SmallInteger(value);
      }
      return new BigInteger(value, sign);
    }
    function subtractSmall(a, b, sign) {
      // assumes a is array, b is number with 0 <= b < MAX_INT
      var l = a.length,
        r = new Array(l),
        carry = -b,
        base = BASE,
        i,
        difference;
      for (i = 0; i < l; i++) {
        difference = a[i] + carry;
        carry = Math.floor(difference / base);
        difference %= base;
        r[i] = difference < 0 ? difference + base : difference;
      }
      r = arrayToSmall(r);
      if (typeof r === "number") {
        if (sign) r = -r;
        return new SmallInteger(r);
      }
      return new BigInteger(r, sign);
    }
    BigInteger.prototype.subtract = function (v) {
      var n = parseValue(v);
      if (this.sign !== n.sign) {
        return this.add(n.negate());
      }
      var a = this.value,
        b = n.value;
      if (n.isSmall) return subtractSmall(a, Math.abs(b), this.sign);
      return subtractAny(a, b, this.sign);
    };
    BigInteger.prototype.minus = BigInteger.prototype.subtract;
    SmallInteger.prototype.subtract = function (v) {
      var n = parseValue(v);
      var a = this.value;
      if (a < 0 !== n.sign) {
        return this.add(n.negate());
      }
      var b = n.value;
      if (n.isSmall) {
        return new SmallInteger(a - b);
      }
      return subtractSmall(b, Math.abs(a), a >= 0);
    };
    SmallInteger.prototype.minus = SmallInteger.prototype.subtract;
    NativeBigInt.prototype.subtract = function (v) {
      return new NativeBigInt(this.value - parseValue(v).value);
    };
    NativeBigInt.prototype.minus = NativeBigInt.prototype.subtract;
    BigInteger.prototype.negate = function () {
      return new BigInteger(this.value, !this.sign);
    };
    SmallInteger.prototype.negate = function () {
      var sign = this.sign;
      var small = new SmallInteger(-this.value);
      small.sign = !sign;
      return small;
    };
    NativeBigInt.prototype.negate = function () {
      return new NativeBigInt(-this.value);
    };
    BigInteger.prototype.abs = function () {
      return new BigInteger(this.value, false);
    };
    SmallInteger.prototype.abs = function () {
      return new SmallInteger(Math.abs(this.value));
    };
    NativeBigInt.prototype.abs = function () {
      return new NativeBigInt(this.value >= 0 ? this.value : -this.value);
    };
    function multiplyLong(a, b) {
      var a_l = a.length,
        b_l = b.length,
        l = a_l + b_l,
        r = createArray(l),
        base = BASE,
        product,
        carry,
        i,
        a_i,
        b_j;
      for (i = 0; i < a_l; ++i) {
        a_i = a[i];
        for (var j = 0; j < b_l; ++j) {
          b_j = b[j];
          product = a_i * b_j + r[i + j];
          carry = Math.floor(product / base);
          r[i + j] = product - carry * base;
          r[i + j + 1] += carry;
        }
      }
      trim(r);
      return r;
    }
    function multiplySmall(a, b) {
      // assumes a is array, b is number with |b| < BASE
      var l = a.length,
        r = new Array(l),
        base = BASE,
        carry = 0,
        product,
        i;
      for (i = 0; i < l; i++) {
        product = a[i] * b + carry;
        carry = Math.floor(product / base);
        r[i] = product - carry * base;
      }
      while (carry > 0) {
        r[i++] = carry % base;
        carry = Math.floor(carry / base);
      }
      return r;
    }
    function shiftLeft(x, n) {
      var r = [];
      while (n-- > 0) r.push(0);
      return r.concat(x);
    }
    function multiplyKaratsuba(x, y) {
      var n = Math.max(x.length, y.length);
      if (n <= 30) return multiplyLong(x, y);
      n = Math.ceil(n / 2);
      var b = x.slice(n),
        a = x.slice(0, n),
        d = y.slice(n),
        c = y.slice(0, n);
      var ac = multiplyKaratsuba(a, c),
        bd = multiplyKaratsuba(b, d),
        abcd = multiplyKaratsuba(addAny(a, b), addAny(c, d));
      var product = addAny(addAny(ac, shiftLeft(subtract(subtract(abcd, ac), bd), n)), shiftLeft(bd, 2 * n));
      trim(product);
      return product;
    }

    // The following function is derived from a surface fit of a graph plotting the performance difference
    // between long multiplication and karatsuba multiplication versus the lengths of the two arrays.
    function useKaratsuba(l1, l2) {
      return -0.012 * l1 - 0.012 * l2 + 0.000015 * l1 * l2 > 0;
    }
    BigInteger.prototype.multiply = function (v) {
      var n = parseValue(v),
        a = this.value,
        b = n.value,
        sign = this.sign !== n.sign,
        abs;
      if (n.isSmall) {
        if (b === 0) return Integer[0];
        if (b === 1) return this;
        if (b === -1) return this.negate();
        abs = Math.abs(b);
        if (abs < BASE) {
          return new BigInteger(multiplySmall(a, abs), sign);
        }
        b = smallToArray(abs);
      }
      if (useKaratsuba(a.length, b.length))
        // Karatsuba is only faster for certain array sizes
        return new BigInteger(multiplyKaratsuba(a, b), sign);
      return new BigInteger(multiplyLong(a, b), sign);
    };
    BigInteger.prototype.times = BigInteger.prototype.multiply;
    function multiplySmallAndArray(a, b, sign) {
      // a >= 0
      if (a < BASE) {
        return new BigInteger(multiplySmall(b, a), sign);
      }
      return new BigInteger(multiplyLong(b, smallToArray(a)), sign);
    }
    SmallInteger.prototype._multiplyBySmall = function (a) {
      if (isPrecise(a.value * this.value)) {
        return new SmallInteger(a.value * this.value);
      }
      return multiplySmallAndArray(Math.abs(a.value), smallToArray(Math.abs(this.value)), this.sign !== a.sign);
    };
    BigInteger.prototype._multiplyBySmall = function (a) {
      if (a.value === 0) return Integer[0];
      if (a.value === 1) return this;
      if (a.value === -1) return this.negate();
      return multiplySmallAndArray(Math.abs(a.value), this.value, this.sign !== a.sign);
    };
    SmallInteger.prototype.multiply = function (v) {
      return parseValue(v)._multiplyBySmall(this);
    };
    SmallInteger.prototype.times = SmallInteger.prototype.multiply;
    NativeBigInt.prototype.multiply = function (v) {
      return new NativeBigInt(this.value * parseValue(v).value);
    };
    NativeBigInt.prototype.times = NativeBigInt.prototype.multiply;
    function square(a) {
      //console.assert(2 * BASE * BASE < MAX_INT);
      var l = a.length,
        r = createArray(l + l),
        base = BASE,
        product,
        carry,
        i,
        a_i,
        a_j;
      for (i = 0; i < l; i++) {
        a_i = a[i];
        carry = 0 - a_i * a_i;
        for (var j = i; j < l; j++) {
          a_j = a[j];
          product = 2 * (a_i * a_j) + r[i + j] + carry;
          carry = Math.floor(product / base);
          r[i + j] = product - carry * base;
        }
        r[i + l] = carry;
      }
      trim(r);
      return r;
    }
    BigInteger.prototype.square = function () {
      return new BigInteger(square(this.value), false);
    };
    SmallInteger.prototype.square = function () {
      var value = this.value * this.value;
      if (isPrecise(value)) return new SmallInteger(value);
      return new BigInteger(square(smallToArray(Math.abs(this.value))), false);
    };
    NativeBigInt.prototype.square = function (v) {
      return new NativeBigInt(this.value * this.value);
    };
    function divMod1(a, b) {
      // Left over from previous version. Performs faster than divMod2 on smaller input sizes.
      var a_l = a.length,
        b_l = b.length,
        base = BASE,
        result = createArray(b.length),
        divisorMostSignificantDigit = b[b_l - 1],
        // normalization
        lambda = Math.ceil(base / (2 * divisorMostSignificantDigit)),
        remainder = multiplySmall(a, lambda),
        divisor = multiplySmall(b, lambda),
        quotientDigit,
        shift,
        carry,
        borrow,
        i,
        l,
        q;
      if (remainder.length <= a_l) remainder.push(0);
      divisor.push(0);
      divisorMostSignificantDigit = divisor[b_l - 1];
      for (shift = a_l - b_l; shift >= 0; shift--) {
        quotientDigit = base - 1;
        if (remainder[shift + b_l] !== divisorMostSignificantDigit) {
          quotientDigit = Math.floor((remainder[shift + b_l] * base + remainder[shift + b_l - 1]) / divisorMostSignificantDigit);
        }
        // quotientDigit <= base - 1
        carry = 0;
        borrow = 0;
        l = divisor.length;
        for (i = 0; i < l; i++) {
          carry += quotientDigit * divisor[i];
          q = Math.floor(carry / base);
          borrow += remainder[shift + i] - (carry - q * base);
          carry = q;
          if (borrow < 0) {
            remainder[shift + i] = borrow + base;
            borrow = -1;
          } else {
            remainder[shift + i] = borrow;
            borrow = 0;
          }
        }
        while (borrow !== 0) {
          quotientDigit -= 1;
          carry = 0;
          for (i = 0; i < l; i++) {
            carry += remainder[shift + i] - base + divisor[i];
            if (carry < 0) {
              remainder[shift + i] = carry + base;
              carry = 0;
            } else {
              remainder[shift + i] = carry;
              carry = 1;
            }
          }
          borrow += carry;
        }
        result[shift] = quotientDigit;
      }
      // denormalization
      remainder = divModSmall(remainder, lambda)[0];
      return [arrayToSmall(result), arrayToSmall(remainder)];
    }
    function divMod2(a, b) {
      // Implementation idea shamelessly stolen from Silent Matt's library http://silentmatt.com/biginteger/
      // Performs faster than divMod1 on larger input sizes.
      var a_l = a.length,
        b_l = b.length,
        result = [],
        part = [],
        base = BASE,
        guess,
        xlen,
        highx,
        highy,
        check;
      while (a_l) {
        part.unshift(a[--a_l]);
        trim(part);
        if (compareAbs(part, b) < 0) {
          result.push(0);
          continue;
        }
        xlen = part.length;
        highx = part[xlen - 1] * base + part[xlen - 2];
        highy = b[b_l - 1] * base + b[b_l - 2];
        if (xlen > b_l) {
          highx = (highx + 1) * base;
        }
        guess = Math.ceil(highx / highy);
        do {
          check = multiplySmall(b, guess);
          if (compareAbs(check, part) <= 0) break;
          guess--;
        } while (guess);
        result.push(guess);
        part = subtract(part, check);
      }
      result.reverse();
      return [arrayToSmall(result), arrayToSmall(part)];
    }
    function divModSmall(value, lambda) {
      var length = value.length,
        quotient = createArray(length),
        base = BASE,
        i,
        q,
        remainder,
        divisor;
      remainder = 0;
      for (i = length - 1; i >= 0; --i) {
        divisor = remainder * base + value[i];
        q = truncate(divisor / lambda);
        remainder = divisor - q * lambda;
        quotient[i] = q | 0;
      }
      return [quotient, remainder | 0];
    }
    function divModAny(self, v) {
      var value,
        n = parseValue(v);
      if (supportsNativeBigInt) {
        return [new NativeBigInt(self.value / n.value), new NativeBigInt(self.value % n.value)];
      }
      var a = self.value,
        b = n.value;
      var quotient;
      if (b === 0) throw new Error("Cannot divide by zero");
      if (self.isSmall) {
        if (n.isSmall) {
          return [new SmallInteger(truncate(a / b)), new SmallInteger(a % b)];
        }
        return [Integer[0], self];
      }
      if (n.isSmall) {
        if (b === 1) return [self, Integer[0]];
        if (b == -1) return [self.negate(), Integer[0]];
        var abs = Math.abs(b);
        if (abs < BASE) {
          value = divModSmall(a, abs);
          quotient = arrayToSmall(value[0]);
          var remainder = value[1];
          if (self.sign) remainder = -remainder;
          if (typeof quotient === "number") {
            if (self.sign !== n.sign) quotient = -quotient;
            return [new SmallInteger(quotient), new SmallInteger(remainder)];
          }
          return [new BigInteger(quotient, self.sign !== n.sign), new SmallInteger(remainder)];
        }
        b = smallToArray(abs);
      }
      var comparison = compareAbs(a, b);
      if (comparison === -1) return [Integer[0], self];
      if (comparison === 0) return [Integer[self.sign === n.sign ? 1 : -1], Integer[0]];

      // divMod1 is faster on smaller input sizes
      if (a.length + b.length <= 200) value = divMod1(a, b);else value = divMod2(a, b);
      quotient = value[0];
      var qSign = self.sign !== n.sign,
        mod = value[1],
        mSign = self.sign;
      if (typeof quotient === "number") {
        if (qSign) quotient = -quotient;
        quotient = new SmallInteger(quotient);
      } else quotient = new BigInteger(quotient, qSign);
      if (typeof mod === "number") {
        if (mSign) mod = -mod;
        mod = new SmallInteger(mod);
      } else mod = new BigInteger(mod, mSign);
      return [quotient, mod];
    }
    BigInteger.prototype.divmod = function (v) {
      var result = divModAny(this, v);
      return {
        quotient: result[0],
        remainder: result[1]
      };
    };
    NativeBigInt.prototype.divmod = SmallInteger.prototype.divmod = BigInteger.prototype.divmod;
    BigInteger.prototype.divide = function (v) {
      return divModAny(this, v)[0];
    };
    NativeBigInt.prototype.over = NativeBigInt.prototype.divide = function (v) {
      return new NativeBigInt(this.value / parseValue(v).value);
    };
    SmallInteger.prototype.over = SmallInteger.prototype.divide = BigInteger.prototype.over = BigInteger.prototype.divide;
    BigInteger.prototype.mod = function (v) {
      return divModAny(this, v)[1];
    };
    NativeBigInt.prototype.mod = NativeBigInt.prototype.remainder = function (v) {
      return new NativeBigInt(this.value % parseValue(v).value);
    };
    SmallInteger.prototype.remainder = SmallInteger.prototype.mod = BigInteger.prototype.remainder = BigInteger.prototype.mod;
    BigInteger.prototype.pow = function (v) {
      var n = parseValue(v),
        a = this.value,
        b = n.value,
        value,
        x,
        y;
      if (b === 0) return Integer[1];
      if (a === 0) return Integer[0];
      if (a === 1) return Integer[1];
      if (a === -1) return n.isEven() ? Integer[1] : Integer[-1];
      if (n.sign) {
        return Integer[0];
      }
      if (!n.isSmall) throw new Error("The exponent " + n.toString() + " is too large.");
      if (this.isSmall) {
        if (isPrecise(value = Math.pow(a, b))) return new SmallInteger(truncate(value));
      }
      x = this;
      y = Integer[1];
      while (true) {
        if (b & 1 === 1) {
          y = y.times(x);
          --b;
        }
        if (b === 0) break;
        b /= 2;
        x = x.square();
      }
      return y;
    };
    SmallInteger.prototype.pow = BigInteger.prototype.pow;
    NativeBigInt.prototype.pow = function (v) {
      var n = parseValue(v);
      var a = this.value,
        b = n.value;
      var _0 = BigInt(0),
        _1 = BigInt(1),
        _2 = BigInt(2);
      if (b === _0) return Integer[1];
      if (a === _0) return Integer[0];
      if (a === _1) return Integer[1];
      if (a === BigInt(-1)) return n.isEven() ? Integer[1] : Integer[-1];
      if (n.isNegative()) return new NativeBigInt(_0);
      var x = this;
      var y = Integer[1];
      while (true) {
        if ((b & _1) === _1) {
          y = y.times(x);
          --b;
        }
        if (b === _0) break;
        b /= _2;
        x = x.square();
      }
      return y;
    };
    BigInteger.prototype.modPow = function (exp, mod) {
      exp = parseValue(exp);
      mod = parseValue(mod);
      if (mod.isZero()) throw new Error("Cannot take modPow with modulus 0");
      var r = Integer[1],
        base = this.mod(mod);
      if (exp.isNegative()) {
        exp = exp.multiply(Integer[-1]);
        base = base.modInv(mod);
      }
      while (exp.isPositive()) {
        if (base.isZero()) return Integer[0];
        if (exp.isOdd()) r = r.multiply(base).mod(mod);
        exp = exp.divide(2);
        base = base.square().mod(mod);
      }
      return r;
    };
    NativeBigInt.prototype.modPow = SmallInteger.prototype.modPow = BigInteger.prototype.modPow;
    function compareAbs(a, b) {
      if (a.length !== b.length) {
        return a.length > b.length ? 1 : -1;
      }
      for (var i = a.length - 1; i >= 0; i--) {
        if (a[i] !== b[i]) return a[i] > b[i] ? 1 : -1;
      }
      return 0;
    }
    BigInteger.prototype.compareAbs = function (v) {
      var n = parseValue(v),
        a = this.value,
        b = n.value;
      if (n.isSmall) return 1;
      return compareAbs(a, b);
    };
    SmallInteger.prototype.compareAbs = function (v) {
      var n = parseValue(v),
        a = Math.abs(this.value),
        b = n.value;
      if (n.isSmall) {
        b = Math.abs(b);
        return a === b ? 0 : a > b ? 1 : -1;
      }
      return -1;
    };
    NativeBigInt.prototype.compareAbs = function (v) {
      var a = this.value;
      var b = parseValue(v).value;
      a = a >= 0 ? a : -a;
      b = b >= 0 ? b : -b;
      return a === b ? 0 : a > b ? 1 : -1;
    };
    BigInteger.prototype.compare = function (v) {
      // See discussion about comparison with Infinity:
      // https://github.com/peterolson/BigInteger.js/issues/61
      if (v === Infinity) {
        return -1;
      }
      if (v === -Infinity) {
        return 1;
      }
      var n = parseValue(v),
        a = this.value,
        b = n.value;
      if (this.sign !== n.sign) {
        return n.sign ? 1 : -1;
      }
      if (n.isSmall) {
        return this.sign ? -1 : 1;
      }
      return compareAbs(a, b) * (this.sign ? -1 : 1);
    };
    BigInteger.prototype.compareTo = BigInteger.prototype.compare;
    SmallInteger.prototype.compare = function (v) {
      if (v === Infinity) {
        return -1;
      }
      if (v === -Infinity) {
        return 1;
      }
      var n = parseValue(v),
        a = this.value,
        b = n.value;
      if (n.isSmall) {
        return a == b ? 0 : a > b ? 1 : -1;
      }
      if (a < 0 !== n.sign) {
        return a < 0 ? -1 : 1;
      }
      return a < 0 ? 1 : -1;
    };
    SmallInteger.prototype.compareTo = SmallInteger.prototype.compare;
    NativeBigInt.prototype.compare = function (v) {
      if (v === Infinity) {
        return -1;
      }
      if (v === -Infinity) {
        return 1;
      }
      var a = this.value;
      var b = parseValue(v).value;
      return a === b ? 0 : a > b ? 1 : -1;
    };
    NativeBigInt.prototype.compareTo = NativeBigInt.prototype.compare;
    BigInteger.prototype.equals = function (v) {
      return this.compare(v) === 0;
    };
    NativeBigInt.prototype.eq = NativeBigInt.prototype.equals = SmallInteger.prototype.eq = SmallInteger.prototype.equals = BigInteger.prototype.eq = BigInteger.prototype.equals;
    BigInteger.prototype.notEquals = function (v) {
      return this.compare(v) !== 0;
    };
    NativeBigInt.prototype.neq = NativeBigInt.prototype.notEquals = SmallInteger.prototype.neq = SmallInteger.prototype.notEquals = BigInteger.prototype.neq = BigInteger.prototype.notEquals;
    BigInteger.prototype.greater = function (v) {
      return this.compare(v) > 0;
    };
    NativeBigInt.prototype.gt = NativeBigInt.prototype.greater = SmallInteger.prototype.gt = SmallInteger.prototype.greater = BigInteger.prototype.gt = BigInteger.prototype.greater;
    BigInteger.prototype.lesser = function (v) {
      return this.compare(v) < 0;
    };
    NativeBigInt.prototype.lt = NativeBigInt.prototype.lesser = SmallInteger.prototype.lt = SmallInteger.prototype.lesser = BigInteger.prototype.lt = BigInteger.prototype.lesser;
    BigInteger.prototype.greaterOrEquals = function (v) {
      return this.compare(v) >= 0;
    };
    NativeBigInt.prototype.geq = NativeBigInt.prototype.greaterOrEquals = SmallInteger.prototype.geq = SmallInteger.prototype.greaterOrEquals = BigInteger.prototype.geq = BigInteger.prototype.greaterOrEquals;
    BigInteger.prototype.lesserOrEquals = function (v) {
      return this.compare(v) <= 0;
    };
    NativeBigInt.prototype.leq = NativeBigInt.prototype.lesserOrEquals = SmallInteger.prototype.leq = SmallInteger.prototype.lesserOrEquals = BigInteger.prototype.leq = BigInteger.prototype.lesserOrEquals;
    BigInteger.prototype.isEven = function () {
      return (this.value[0] & 1) === 0;
    };
    SmallInteger.prototype.isEven = function () {
      return (this.value & 1) === 0;
    };
    NativeBigInt.prototype.isEven = function () {
      return (this.value & BigInt(1)) === BigInt(0);
    };
    BigInteger.prototype.isOdd = function () {
      return (this.value[0] & 1) === 1;
    };
    SmallInteger.prototype.isOdd = function () {
      return (this.value & 1) === 1;
    };
    NativeBigInt.prototype.isOdd = function () {
      return (this.value & BigInt(1)) === BigInt(1);
    };
    BigInteger.prototype.isPositive = function () {
      return !this.sign;
    };
    SmallInteger.prototype.isPositive = function () {
      return this.value > 0;
    };
    NativeBigInt.prototype.isPositive = SmallInteger.prototype.isPositive;
    BigInteger.prototype.isNegative = function () {
      return this.sign;
    };
    SmallInteger.prototype.isNegative = function () {
      return this.value < 0;
    };
    NativeBigInt.prototype.isNegative = SmallInteger.prototype.isNegative;
    BigInteger.prototype.isUnit = function () {
      return false;
    };
    SmallInteger.prototype.isUnit = function () {
      return Math.abs(this.value) === 1;
    };
    NativeBigInt.prototype.isUnit = function () {
      return this.abs().value === BigInt(1);
    };
    BigInteger.prototype.isZero = function () {
      return false;
    };
    SmallInteger.prototype.isZero = function () {
      return this.value === 0;
    };
    NativeBigInt.prototype.isZero = function () {
      return this.value === BigInt(0);
    };
    BigInteger.prototype.isDivisibleBy = function (v) {
      var n = parseValue(v);
      if (n.isZero()) return false;
      if (n.isUnit()) return true;
      if (n.compareAbs(2) === 0) return this.isEven();
      return this.mod(n).isZero();
    };
    NativeBigInt.prototype.isDivisibleBy = SmallInteger.prototype.isDivisibleBy = BigInteger.prototype.isDivisibleBy;
    function isBasicPrime(v) {
      var n = v.abs();
      if (n.isUnit()) return false;
      if (n.equals(2) || n.equals(3) || n.equals(5)) return true;
      if (n.isEven() || n.isDivisibleBy(3) || n.isDivisibleBy(5)) return false;
      if (n.lesser(49)) return true;
      // we don't know if it's prime: let the other functions figure it out
    }

    function millerRabinTest(n, a) {
      var nPrev = n.prev(),
        b = nPrev,
        r = 0,
        d,
        i,
        x;
      while (b.isEven()) b = b.divide(2), r++;
      next: for (i = 0; i < a.length; i++) {
        if (n.lesser(a[i])) continue;
        x = bigInt(a[i]).modPow(b, n);
        if (x.isUnit() || x.equals(nPrev)) continue;
        for (d = r - 1; d != 0; d--) {
          x = x.square().mod(n);
          if (x.isUnit()) return false;
          if (x.equals(nPrev)) continue next;
        }
        return false;
      }
      return true;
    }

    // Set "strict" to true to force GRH-supported lower bound of 2*log(N)^2
    BigInteger.prototype.isPrime = function (strict) {
      var isPrime = isBasicPrime(this);
      if (isPrime !== undefined$1) return isPrime;
      var n = this.abs();
      var bits = n.bitLength();
      if (bits <= 64) return millerRabinTest(n, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
      var logN = Math.log(2) * bits.toJSNumber();
      var t = Math.ceil(strict === true ? 2 * Math.pow(logN, 2) : logN);
      for (var a = [], i = 0; i < t; i++) {
        a.push(bigInt(i + 2));
      }
      return millerRabinTest(n, a);
    };
    NativeBigInt.prototype.isPrime = SmallInteger.prototype.isPrime = BigInteger.prototype.isPrime;
    BigInteger.prototype.isProbablePrime = function (iterations, rng) {
      var isPrime = isBasicPrime(this);
      if (isPrime !== undefined$1) return isPrime;
      var n = this.abs();
      var t = iterations === undefined$1 ? 5 : iterations;
      for (var a = [], i = 0; i < t; i++) {
        a.push(bigInt.randBetween(2, n.minus(2), rng));
      }
      return millerRabinTest(n, a);
    };
    NativeBigInt.prototype.isProbablePrime = SmallInteger.prototype.isProbablePrime = BigInteger.prototype.isProbablePrime;
    BigInteger.prototype.modInv = function (n) {
      var t = bigInt.zero,
        newT = bigInt.one,
        r = parseValue(n),
        newR = this.abs(),
        q,
        lastT,
        lastR;
      while (!newR.isZero()) {
        q = r.divide(newR);
        lastT = t;
        lastR = r;
        t = newT;
        r = newR;
        newT = lastT.subtract(q.multiply(newT));
        newR = lastR.subtract(q.multiply(newR));
      }
      if (!r.isUnit()) throw new Error(this.toString() + " and " + n.toString() + " are not co-prime");
      if (t.compare(0) === -1) {
        t = t.add(n);
      }
      if (this.isNegative()) {
        return t.negate();
      }
      return t;
    };
    NativeBigInt.prototype.modInv = SmallInteger.prototype.modInv = BigInteger.prototype.modInv;
    BigInteger.prototype.next = function () {
      var value = this.value;
      if (this.sign) {
        return subtractSmall(value, 1, this.sign);
      }
      return new BigInteger(addSmall(value, 1), this.sign);
    };
    SmallInteger.prototype.next = function () {
      var value = this.value;
      if (value + 1 < MAX_INT) return new SmallInteger(value + 1);
      return new BigInteger(MAX_INT_ARR, false);
    };
    NativeBigInt.prototype.next = function () {
      return new NativeBigInt(this.value + BigInt(1));
    };
    BigInteger.prototype.prev = function () {
      var value = this.value;
      if (this.sign) {
        return new BigInteger(addSmall(value, 1), true);
      }
      return subtractSmall(value, 1, this.sign);
    };
    SmallInteger.prototype.prev = function () {
      var value = this.value;
      if (value - 1 > -MAX_INT) return new SmallInteger(value - 1);
      return new BigInteger(MAX_INT_ARR, true);
    };
    NativeBigInt.prototype.prev = function () {
      return new NativeBigInt(this.value - BigInt(1));
    };
    var powersOfTwo = [1];
    while (2 * powersOfTwo[powersOfTwo.length - 1] <= BASE) powersOfTwo.push(2 * powersOfTwo[powersOfTwo.length - 1]);
    var powers2Length = powersOfTwo.length,
      highestPower2 = powersOfTwo[powers2Length - 1];
    function shift_isSmall(n) {
      return Math.abs(n) <= BASE;
    }
    BigInteger.prototype.shiftLeft = function (v) {
      var n = parseValue(v).toJSNumber();
      if (!shift_isSmall(n)) {
        throw new Error(String(n) + " is too large for shifting.");
      }
      if (n < 0) return this.shiftRight(-n);
      var result = this;
      if (result.isZero()) return result;
      while (n >= powers2Length) {
        result = result.multiply(highestPower2);
        n -= powers2Length - 1;
      }
      return result.multiply(powersOfTwo[n]);
    };
    NativeBigInt.prototype.shiftLeft = SmallInteger.prototype.shiftLeft = BigInteger.prototype.shiftLeft;
    BigInteger.prototype.shiftRight = function (v) {
      var remQuo;
      var n = parseValue(v).toJSNumber();
      if (!shift_isSmall(n)) {
        throw new Error(String(n) + " is too large for shifting.");
      }
      if (n < 0) return this.shiftLeft(-n);
      var result = this;
      while (n >= powers2Length) {
        if (result.isZero() || result.isNegative() && result.isUnit()) return result;
        remQuo = divModAny(result, highestPower2);
        result = remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
        n -= powers2Length - 1;
      }
      remQuo = divModAny(result, powersOfTwo[n]);
      return remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
    };
    NativeBigInt.prototype.shiftRight = SmallInteger.prototype.shiftRight = BigInteger.prototype.shiftRight;
    function bitwise(x, y, fn) {
      y = parseValue(y);
      var xSign = x.isNegative(),
        ySign = y.isNegative();
      var xRem = xSign ? x.not() : x,
        yRem = ySign ? y.not() : y;
      var xDigit = 0,
        yDigit = 0;
      var xDivMod = null,
        yDivMod = null;
      var result = [];
      while (!xRem.isZero() || !yRem.isZero()) {
        xDivMod = divModAny(xRem, highestPower2);
        xDigit = xDivMod[1].toJSNumber();
        if (xSign) {
          xDigit = highestPower2 - 1 - xDigit; // two's complement for negative numbers
        }

        yDivMod = divModAny(yRem, highestPower2);
        yDigit = yDivMod[1].toJSNumber();
        if (ySign) {
          yDigit = highestPower2 - 1 - yDigit; // two's complement for negative numbers
        }

        xRem = xDivMod[0];
        yRem = yDivMod[0];
        result.push(fn(xDigit, yDigit));
      }
      var sum = fn(xSign ? 1 : 0, ySign ? 1 : 0) !== 0 ? bigInt(-1) : bigInt(0);
      for (var i = result.length - 1; i >= 0; i -= 1) {
        sum = sum.multiply(highestPower2).add(bigInt(result[i]));
      }
      return sum;
    }
    BigInteger.prototype.not = function () {
      return this.negate().prev();
    };
    NativeBigInt.prototype.not = SmallInteger.prototype.not = BigInteger.prototype.not;
    BigInteger.prototype.and = function (n) {
      return bitwise(this, n, function (a, b) {
        return a & b;
      });
    };
    NativeBigInt.prototype.and = SmallInteger.prototype.and = BigInteger.prototype.and;
    BigInteger.prototype.or = function (n) {
      return bitwise(this, n, function (a, b) {
        return a | b;
      });
    };
    NativeBigInt.prototype.or = SmallInteger.prototype.or = BigInteger.prototype.or;
    BigInteger.prototype.xor = function (n) {
      return bitwise(this, n, function (a, b) {
        return a ^ b;
      });
    };
    NativeBigInt.prototype.xor = SmallInteger.prototype.xor = BigInteger.prototype.xor;
    var LOBMASK_I = 1 << 30,
      LOBMASK_BI = (BASE & -BASE) * (BASE & -BASE) | LOBMASK_I;
    function roughLOB(n) {
      // get lowestOneBit (rough)
      // SmallInteger: return Min(lowestOneBit(n), 1 << 30)
      // BigInteger: return Min(lowestOneBit(n), 1 << 14) [BASE=1e7]
      var v = n.value,
        x = typeof v === "number" ? v | LOBMASK_I : typeof v === "bigint" ? v | BigInt(LOBMASK_I) : v[0] + v[1] * BASE | LOBMASK_BI;
      return x & -x;
    }
    function integerLogarithm(value, base) {
      if (base.compareTo(value) <= 0) {
        var tmp = integerLogarithm(value, base.square(base));
        var p = tmp.p;
        var e = tmp.e;
        var t = p.multiply(base);
        return t.compareTo(value) <= 0 ? {
          p: t,
          e: e * 2 + 1
        } : {
          p: p,
          e: e * 2
        };
      }
      return {
        p: bigInt(1),
        e: 0
      };
    }
    BigInteger.prototype.bitLength = function () {
      var n = this;
      if (n.compareTo(bigInt(0)) < 0) {
        n = n.negate().subtract(bigInt(1));
      }
      if (n.compareTo(bigInt(0)) === 0) {
        return bigInt(0);
      }
      return bigInt(integerLogarithm(n, bigInt(2)).e).add(bigInt(1));
    };
    NativeBigInt.prototype.bitLength = SmallInteger.prototype.bitLength = BigInteger.prototype.bitLength;
    function max(a, b) {
      a = parseValue(a);
      b = parseValue(b);
      return a.greater(b) ? a : b;
    }
    function min(a, b) {
      a = parseValue(a);
      b = parseValue(b);
      return a.lesser(b) ? a : b;
    }
    function gcd(a, b) {
      a = parseValue(a).abs();
      b = parseValue(b).abs();
      if (a.equals(b)) return a;
      if (a.isZero()) return b;
      if (b.isZero()) return a;
      var c = Integer[1],
        d,
        t;
      while (a.isEven() && b.isEven()) {
        d = min(roughLOB(a), roughLOB(b));
        a = a.divide(d);
        b = b.divide(d);
        c = c.multiply(d);
      }
      while (a.isEven()) {
        a = a.divide(roughLOB(a));
      }
      do {
        while (b.isEven()) {
          b = b.divide(roughLOB(b));
        }
        if (a.greater(b)) {
          t = b;
          b = a;
          a = t;
        }
        b = b.subtract(a);
      } while (!b.isZero());
      return c.isUnit() ? a : a.multiply(c);
    }
    function lcm(a, b) {
      a = parseValue(a).abs();
      b = parseValue(b).abs();
      return a.divide(gcd(a, b)).multiply(b);
    }
    function randBetween(a, b, rng) {
      a = parseValue(a);
      b = parseValue(b);
      var usedRNG = rng || Math.random;
      var low = min(a, b),
        high = max(a, b);
      var range = high.subtract(low).add(1);
      if (range.isSmall) return low.add(Math.floor(usedRNG() * range));
      var digits = toBase(range, BASE).value;
      var result = [],
        restricted = true;
      for (var i = 0; i < digits.length; i++) {
        var top = restricted ? digits[i] + (i + 1 < digits.length ? digits[i + 1] / BASE : 0) : BASE;
        var digit = truncate(usedRNG() * top);
        result.push(digit);
        if (digit < digits[i]) restricted = false;
      }
      return low.add(Integer.fromArray(result, BASE, false));
    }
    var parseBase = function (text, base, alphabet, caseSensitive) {
      alphabet = alphabet || DEFAULT_ALPHABET;
      text = String(text);
      if (!caseSensitive) {
        text = text.toLowerCase();
        alphabet = alphabet.toLowerCase();
      }
      var length = text.length;
      var i;
      var absBase = Math.abs(base);
      var alphabetValues = {};
      for (i = 0; i < alphabet.length; i++) {
        alphabetValues[alphabet[i]] = i;
      }
      for (i = 0; i < length; i++) {
        var c = text[i];
        if (c === "-") continue;
        if (c in alphabetValues) {
          if (alphabetValues[c] >= absBase) {
            if (c === "1" && absBase === 1) continue;
            throw new Error(c + " is not a valid digit in base " + base + ".");
          }
        }
      }
      base = parseValue(base);
      var digits = [];
      var isNegative = text[0] === "-";
      for (i = isNegative ? 1 : 0; i < text.length; i++) {
        var c = text[i];
        if (c in alphabetValues) digits.push(parseValue(alphabetValues[c]));else if (c === "<") {
          var start = i;
          do {
            i++;
          } while (text[i] !== ">" && i < text.length);
          digits.push(parseValue(text.slice(start + 1, i)));
        } else throw new Error(c + " is not a valid character");
      }
      return parseBaseFromArray(digits, base, isNegative);
    };
    function parseBaseFromArray(digits, base, isNegative) {
      var val = Integer[0],
        pow = Integer[1],
        i;
      for (i = digits.length - 1; i >= 0; i--) {
        val = val.add(digits[i].times(pow));
        pow = pow.times(base);
      }
      return isNegative ? val.negate() : val;
    }
    function stringify(digit, alphabet) {
      alphabet = alphabet || DEFAULT_ALPHABET;
      if (digit < alphabet.length) {
        return alphabet[digit];
      }
      return "<" + digit + ">";
    }
    function toBase(n, base) {
      base = bigInt(base);
      if (base.isZero()) {
        if (n.isZero()) return {
          value: [0],
          isNegative: false
        };
        throw new Error("Cannot convert nonzero numbers to base 0.");
      }
      if (base.equals(-1)) {
        if (n.isZero()) return {
          value: [0],
          isNegative: false
        };
        if (n.isNegative()) return {
          value: [].concat.apply([], Array.apply(null, Array(-n.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
          isNegative: false
        };
        var arr = Array.apply(null, Array(n.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
        arr.unshift([1]);
        return {
          value: [].concat.apply([], arr),
          isNegative: false
        };
      }
      var neg = false;
      if (n.isNegative() && base.isPositive()) {
        neg = true;
        n = n.abs();
      }
      if (base.isUnit()) {
        if (n.isZero()) return {
          value: [0],
          isNegative: false
        };
        return {
          value: Array.apply(null, Array(n.toJSNumber())).map(Number.prototype.valueOf, 1),
          isNegative: neg
        };
      }
      var out = [];
      var left = n,
        divmod;
      while (left.isNegative() || left.compareAbs(base) >= 0) {
        divmod = left.divmod(base);
        left = divmod.quotient;
        var digit = divmod.remainder;
        if (digit.isNegative()) {
          digit = base.minus(digit).abs();
          left = left.next();
        }
        out.push(digit.toJSNumber());
      }
      out.push(left.toJSNumber());
      return {
        value: out.reverse(),
        isNegative: neg
      };
    }
    function toBaseString(n, base, alphabet) {
      var arr = toBase(n, base);
      return (arr.isNegative ? "-" : "") + arr.value.map(function (x) {
        return stringify(x, alphabet);
      }).join('');
    }
    BigInteger.prototype.toArray = function (radix) {
      return toBase(this, radix);
    };
    SmallInteger.prototype.toArray = function (radix) {
      return toBase(this, radix);
    };
    NativeBigInt.prototype.toArray = function (radix) {
      return toBase(this, radix);
    };
    BigInteger.prototype.toString = function (radix, alphabet) {
      if (radix === undefined$1) radix = 10;
      if (radix !== 10) return toBaseString(this, radix, alphabet);
      var v = this.value,
        l = v.length,
        str = String(v[--l]),
        zeros = "0000000",
        digit;
      while (--l >= 0) {
        digit = String(v[l]);
        str += zeros.slice(digit.length) + digit;
      }
      var sign = this.sign ? "-" : "";
      return sign + str;
    };
    SmallInteger.prototype.toString = function (radix, alphabet) {
      if (radix === undefined$1) radix = 10;
      if (radix != 10) return toBaseString(this, radix, alphabet);
      return String(this.value);
    };
    NativeBigInt.prototype.toString = SmallInteger.prototype.toString;
    NativeBigInt.prototype.toJSON = BigInteger.prototype.toJSON = SmallInteger.prototype.toJSON = function () {
      return this.toString();
    };
    BigInteger.prototype.valueOf = function () {
      return parseInt(this.toString(), 10);
    };
    BigInteger.prototype.toJSNumber = BigInteger.prototype.valueOf;
    SmallInteger.prototype.valueOf = function () {
      return this.value;
    };
    SmallInteger.prototype.toJSNumber = SmallInteger.prototype.valueOf;
    NativeBigInt.prototype.valueOf = NativeBigInt.prototype.toJSNumber = function () {
      return parseInt(this.toString(), 10);
    };
    function parseStringValue(v) {
      if (isPrecise(+v)) {
        var x = +v;
        if (x === truncate(x)) return supportsNativeBigInt ? new NativeBigInt(BigInt(x)) : new SmallInteger(x);
        throw new Error("Invalid integer: " + v);
      }
      var sign = v[0] === "-";
      if (sign) v = v.slice(1);
      var split = v.split(/e/i);
      if (split.length > 2) throw new Error("Invalid integer: " + split.join("e"));
      if (split.length === 2) {
        var exp = split[1];
        if (exp[0] === "+") exp = exp.slice(1);
        exp = +exp;
        if (exp !== truncate(exp) || !isPrecise(exp)) throw new Error("Invalid integer: " + exp + " is not a valid exponent.");
        var text = split[0];
        var decimalPlace = text.indexOf(".");
        if (decimalPlace >= 0) {
          exp -= text.length - decimalPlace - 1;
          text = text.slice(0, decimalPlace) + text.slice(decimalPlace + 1);
        }
        if (exp < 0) throw new Error("Cannot include negative exponent part for integers");
        text += new Array(exp + 1).join("0");
        v = text;
      }
      var isValid = /^([0-9][0-9]*)$/.test(v);
      if (!isValid) throw new Error("Invalid integer: " + v);
      if (supportsNativeBigInt) {
        return new NativeBigInt(BigInt(sign ? "-" + v : v));
      }
      var r = [],
        max = v.length,
        l = LOG_BASE,
        min = max - l;
      while (max > 0) {
        r.push(+v.slice(min, max));
        min -= l;
        if (min < 0) min = 0;
        max -= l;
      }
      trim(r);
      return new BigInteger(r, sign);
    }
    function parseNumberValue(v) {
      if (supportsNativeBigInt) {
        return new NativeBigInt(BigInt(v));
      }
      if (isPrecise(v)) {
        if (v !== truncate(v)) throw new Error(v + " is not an integer.");
        return new SmallInteger(v);
      }
      return parseStringValue(v.toString());
    }
    function parseValue(v) {
      if (typeof v === "number") {
        return parseNumberValue(v);
      }
      if (typeof v === "string") {
        return parseStringValue(v);
      }
      if (typeof v === "bigint") {
        return new NativeBigInt(v);
      }
      return v;
    }
    // Pre-define numbers in range [-999,999]
    for (var i = 0; i < 1000; i++) {
      Integer[i] = parseValue(i);
      if (i > 0) Integer[-i] = parseValue(-i);
    }
    // Backwards compatibility
    Integer.one = Integer[1];
    Integer.zero = Integer[0];
    Integer.minusOne = Integer[-1];
    Integer.max = max;
    Integer.min = min;
    Integer.gcd = gcd;
    Integer.lcm = lcm;
    Integer.isInstance = function (x) {
      return x instanceof BigInteger || x instanceof SmallInteger || x instanceof NativeBigInt;
    };
    Integer.randBetween = randBetween;
    Integer.fromArray = function (digits, base, isNegative) {
      return parseBaseFromArray(digits.map(parseValue), parseValue(base || 10), isNegative);
    };
    return Integer;
  }();

  // Node.js check
  if (module.hasOwnProperty("exports")) {
    module.exports = bigInt;
  }
  });

  var byteLength_1 = byteLength;
  var toByteArray_1 = toByteArray;
  var fromByteArray_1 = fromByteArray;
  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }

  // Support decoding URL-safe base64 strings, as Node.js does.
  // See: https://en.wikipedia.org/wiki/Base64#URL_applications
  revLookup['-'.charCodeAt(0)] = 62;
  revLookup['_'.charCodeAt(0)] = 63;
  function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4');
    }

    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [validLen, placeHoldersLen];
  }

  // base64 is 4/3 + up to two characters of the original data
  function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;

    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for (i = 0; i < len; i += 4) {
      tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
      arr[curByte++] = tmp >> 16 & 0xFF;
      arr[curByte++] = tmp >> 8 & 0xFF;
      arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
      tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
      arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
      tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
      arr[curByte++] = tmp >> 8 & 0xFF;
      arr[curByte++] = tmp & 0xFF;
    }
    return arr;
  }
  function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
  }
  function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for (var i = start; i < end; i += 3) {
      tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
      output.push(tripletToBase64(tmp));
    }
    return output.join('');
  }
  function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
    var parts = [];
    var maxChunkLength = 16383; // must be multiple of 3

    // go through the array every three bytes, we'll deal with trailing stuff later
    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
      parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    }

    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
      tmp = uint8[len - 1];
      parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
    } else if (extraBytes === 2) {
      tmp = (uint8[len - 2] << 8) + uint8[len - 1];
      parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
    }
    return parts.join('');
  }

  var base64Js = {
  	byteLength: byteLength_1,
  	toByteArray: toByteArray_1,
  	fromByteArray: fromByteArray_1
  };

  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
  var read = function (buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  };
  var write = function (buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }
      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }
    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
    e = e << mLen | m;
    eLen += mLen;
    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
    buffer[offset + i - d] |= s * 128;
  };

  var ieee754 = {
  	read: read,
  	write: write
  };

  var buffer = createCommonjsModule(function (module, exports) {



  const customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' // eslint-disable-line dot-notation
  ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
  : null;
  exports.Buffer = Buffer;
  exports.SlowBuffer = SlowBuffer;
  exports.INSPECT_MAX_BYTES = 50;
  const K_MAX_LENGTH = 0x7fffffff;
  exports.kMaxLength = K_MAX_LENGTH;

  /**
   * If `Buffer.TYPED_ARRAY_SUPPORT`:
   *   === true    Use Uint8Array implementation (fastest)
   *   === false   Print warning and recommend using `buffer` v4.x which has an Object
   *               implementation (most compatible, even IE6)
   *
   * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
   * Opera 11.6+, iOS 4.2+.
   *
   * We report that the browser does not support typed arrays if the are not subclassable
   * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
   * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
   * for __proto__ and has a buggy typed array implementation.
   */
  Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
  if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
  }
  function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
      const arr = new Uint8Array(1);
      const proto = {
        foo: function () {
          return 42;
        }
      };
      Object.setPrototypeOf(proto, Uint8Array.prototype);
      Object.setPrototypeOf(arr, proto);
      return arr.foo() === 42;
    } catch (e) {
      return false;
    }
  }
  Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function () {
      if (!Buffer.isBuffer(this)) return undefined;
      return this.buffer;
    }
  });
  Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function () {
      if (!Buffer.isBuffer(this)) return undefined;
      return this.byteOffset;
    }
  });
  function createBuffer(length) {
    if (length > K_MAX_LENGTH) {
      throw new RangeError('The value "' + length + '" is invalid for option "size"');
    }
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
  }

  /**
   * The Buffer constructor returns instances of `Uint8Array` that have their
   * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
   * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
   * and the `Uint8Array` methods. Square bracket notation works as expected -- it
   * returns a single octet.
   *
   * The `Uint8Array` prototype remains unmodified.
   */

  function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
      if (typeof encodingOrOffset === 'string') {
        throw new TypeError('The "string" argument must be of type string. Received type number');
      }
      return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
  }
  Buffer.poolSize = 8192; // not used by this implementation

  function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') {
      return fromString(value, encodingOrOffset);
    }
    if (ArrayBuffer.isView(value)) {
      return fromArrayView(value);
    }
    if (value == null) {
      throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
    }
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
      return fromArrayBuffer(value, encodingOrOffset, length);
    }
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
      return fromArrayBuffer(value, encodingOrOffset, length);
    }
    if (typeof value === 'number') {
      throw new TypeError('The "value" argument must not be of type number. Received type number');
    }
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) {
      return Buffer.from(valueOf, encodingOrOffset, length);
    }
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') {
      return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    }
    throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
  }

  /**
   * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
   * if value is a number.
   * Buffer.from(str[, encoding])
   * Buffer.from(array)
   * Buffer.from(buffer)
   * Buffer.from(arrayBuffer[, byteOffset[, length]])
   **/
  Buffer.from = function (value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
  };

  // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
  // https://github.com/feross/buffer/pull/148
  Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(Buffer, Uint8Array);
  function assertSize(size) {
    if (typeof size !== 'number') {
      throw new TypeError('"size" argument must be of type number');
    } else if (size < 0) {
      throw new RangeError('The value "' + size + '" is invalid for option "size"');
    }
  }
  function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) {
      return createBuffer(size);
    }
    if (fill !== undefined) {
      // Only pay attention to encoding if it's a string. This
      // prevents accidentally sending in a number that would
      // be interpreted as a start offset.
      return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    }
    return createBuffer(size);
  }

  /**
   * Creates a new filled Buffer instance.
   * alloc(size[, fill[, encoding]])
   **/
  Buffer.alloc = function (size, fill, encoding) {
    return alloc(size, fill, encoding);
  };
  function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
  }

  /**
   * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
   * */
  Buffer.allocUnsafe = function (size) {
    return allocUnsafe(size);
  };
  /**
   * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
   */
  Buffer.allocUnsafeSlow = function (size) {
    return allocUnsafe(size);
  };
  function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') {
      encoding = 'utf8';
    }
    if (!Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) {
      // Writing a hex string, for example, that contains invalid characters will
      // cause everything after the first invalid character to be ignored. (e.g.
      // 'abxxcd' will be treated as 'ab')
      buf = buf.slice(0, actual);
    }
    return buf;
  }
  function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for (let i = 0; i < length; i += 1) {
      buf[i] = array[i] & 255;
    }
    return buf;
  }
  function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
      const copy = new Uint8Array(arrayView);
      return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
  }
  function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('"offset" is outside of buffer bounds');
    }
    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('"length" is outside of buffer bounds');
    }
    let buf;
    if (byteOffset === undefined && length === undefined) {
      buf = new Uint8Array(array);
    } else if (length === undefined) {
      buf = new Uint8Array(array, byteOffset);
    } else {
      buf = new Uint8Array(array, byteOffset, length);
    }

    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
  }
  function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
      const len = checked(obj.length) | 0;
      const buf = createBuffer(len);
      if (buf.length === 0) {
        return buf;
      }
      obj.copy(buf, 0, 0, len);
      return buf;
    }
    if (obj.length !== undefined) {
      if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
        return createBuffer(0);
      }
      return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike(obj.data);
    }
  }
  function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
    }
    return length | 0;
  }
  function SlowBuffer(length) {
    if (+length != length) {
      // eslint-disable-line eqeqeq
      length = 0;
    }
    return Buffer.alloc(+length);
  }
  Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype; // so Buffer.isBuffer(Buffer.prototype) will be false
  };

  Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    }
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for (let i = 0, len = Math.min(x, y); i < len; ++i) {
      if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
      }
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  };
  Buffer.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true;
      default:
        return false;
    }
  };
  Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    if (list.length === 0) {
      return Buffer.alloc(0);
    }
    let i;
    if (length === undefined) {
      length = 0;
      for (i = 0; i < list.length; ++i) {
        length += list[i].length;
      }
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for (i = 0; i < list.length; ++i) {
      let buf = list[i];
      if (isInstance(buf, Uint8Array)) {
        if (pos + buf.length > buffer.length) {
          if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
          buf.copy(buffer, pos);
        } else {
          Uint8Array.prototype.set.call(buffer, buf, pos);
        }
      } else if (!Buffer.isBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      } else {
        buf.copy(buffer, pos);
      }
      pos += buf.length;
    }
    return buffer;
  };
  function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) {
      return string.length;
    }
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
      return string.byteLength;
    }
    if (typeof string !== 'string') {
      throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + 'Received type ' + typeof string);
    }
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;

    // Use a for loop to avoid recursion
    let loweredCase = false;
    for (;;) {
      switch (encoding) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return len;
        case 'utf8':
        case 'utf-8':
          return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2;
        case 'hex':
          return len >>> 1;
        case 'base64':
          return base64ToBytes(string).length;
        default:
          if (loweredCase) {
            return mustMatch ? -1 : utf8ToBytes(string).length; // assume utf8
          }

          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer.byteLength = byteLength;
  function slowToString(encoding, start, end) {
    let loweredCase = false;

    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.

    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) {
      start = 0;
    }
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) {
      return '';
    }
    if (end === undefined || end > this.length) {
      end = this.length;
    }
    if (end <= 0) {
      return '';
    }

    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) {
      return '';
    }
    if (!encoding) encoding = 'utf8';
    while (true) {
      switch (encoding) {
        case 'hex':
          return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
          return utf8Slice(this, start, end);
        case 'ascii':
          return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
          return latin1Slice(this, start, end);
        case 'base64':
          return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return utf16leSlice(this, start, end);
        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
          encoding = (encoding + '').toLowerCase();
          loweredCase = true;
      }
    }
  }

  // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
  // to detect a Buffer instance. It's not possible to use `instanceof Buffer`
  // reliably in a browserify context because there could be multiple different
  // copies of the 'buffer' package in use. This method works even for Buffer
  // instances that were created from another copy of the `buffer` package.
  // See: https://github.com/feross/buffer/issues/154
  Buffer.prototype._isBuffer = true;
  function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
  }
  Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 16-bits');
    }
    for (let i = 0; i < len; i += 2) {
      swap(this, i, i + 1);
    }
    return this;
  };
  Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 32-bits');
    }
    for (let i = 0; i < len; i += 4) {
      swap(this, i, i + 3);
      swap(this, i + 1, i + 2);
    }
    return this;
  };
  Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 64-bits');
    }
    for (let i = 0; i < len; i += 8) {
      swap(this, i, i + 7);
      swap(this, i + 1, i + 6);
      swap(this, i + 2, i + 5);
      swap(this, i + 3, i + 4);
    }
    return this;
  };
  Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
  };
  Buffer.prototype.toLocaleString = Buffer.prototype.toString;
  Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
  };
  Buffer.prototype.inspect = function inspect() {
    let str = '';
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
  };
  if (customInspectSymbol) {
    Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
  }
  Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) {
      target = Buffer.from(target, target.offset, target.byteLength);
    }
    if (!Buffer.isBuffer(target)) {
      throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + 'Received type ' + typeof target);
    }
    if (start === undefined) {
      start = 0;
    }
    if (end === undefined) {
      end = target ? target.length : 0;
    }
    if (thisStart === undefined) {
      thisStart = 0;
    }
    if (thisEnd === undefined) {
      thisEnd = this.length;
    }
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError('out of range index');
    }
    if (thisStart >= thisEnd && start >= end) {
      return 0;
    }
    if (thisStart >= thisEnd) {
      return -1;
    }
    if (start >= end) {
      return 1;
    }
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for (let i = 0; i < len; ++i) {
      if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
      }
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  };

  // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
  // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
  //
  // Arguments:
  // - buffer - a Buffer to search
  // - val - a string, Buffer, or number
  // - byteOffset - an index into `buffer`; will be clamped to an int32
  // - encoding - an optional encoding, relevant is val is a string
  // - dir - true for indexOf, false for lastIndexOf
  function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;

    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
      encoding = byteOffset;
      byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) {
      byteOffset = 0x7fffffff;
    } else if (byteOffset < -0x80000000) {
      byteOffset = -0x80000000;
    }
    byteOffset = +byteOffset; // Coerce to Number.
    if (numberIsNaN(byteOffset)) {
      // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
      byteOffset = dir ? 0 : buffer.length - 1;
    }

    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
      if (dir) return -1;else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
      if (dir) byteOffset = 0;else return -1;
    }

    // Normalize val
    if (typeof val === 'string') {
      val = Buffer.from(val, encoding);
    }

    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
      // Special case: looking for empty string/buffer always fails
      if (val.length === 0) {
        return -1;
      }
      return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
      val = val & 0xFF; // Search for a byte value [0-255]
      if (typeof Uint8Array.prototype.indexOf === 'function') {
        if (dir) {
          return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
        } else {
          return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
      }
      return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
  }
  function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
      encoding = String(encoding).toLowerCase();
      if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
        if (arr.length < 2 || val.length < 2) {
          return -1;
        }
        indexSize = 2;
        arrLength /= 2;
        valLength /= 2;
        byteOffset /= 2;
      }
    }
    function read(buf, i) {
      if (indexSize === 1) {
        return buf[i];
      } else {
        return buf.readUInt16BE(i * indexSize);
      }
    }
    let i;
    if (dir) {
      let foundIndex = -1;
      for (i = byteOffset; i < arrLength; i++) {
        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
          if (foundIndex === -1) foundIndex = i;
          if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
          if (foundIndex !== -1) i -= i - foundIndex;
          foundIndex = -1;
        }
      }
    } else {
      if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
      for (i = byteOffset; i >= 0; i--) {
        let found = true;
        for (let j = 0; j < valLength; j++) {
          if (read(arr, i + j) !== read(val, j)) {
            found = false;
            break;
          }
        }
        if (found) return i;
      }
    }
    return -1;
  }
  Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
  };
  Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
  };
  Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
  };
  function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }
    const strLen = string.length;
    if (length > strLen / 2) {
      length = strLen / 2;
    }
    let i;
    for (i = 0; i < length; ++i) {
      const parsed = parseInt(string.substr(i * 2, 2), 16);
      if (numberIsNaN(parsed)) return i;
      buf[offset + i] = parsed;
    }
    return i;
  }
  function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
  }
  function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
  }
  function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
  }
  function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  }
  Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
      encoding = 'utf8';
      length = this.length;
      offset = 0;
      // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset;
      length = this.length;
      offset = 0;
      // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
      offset = offset >>> 0;
      if (isFinite(length)) {
        length = length >>> 0;
        if (encoding === undefined) encoding = 'utf8';
      } else {
        encoding = length;
        length = undefined;
      }
    } else {
      throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    }
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
      throw new RangeError('Attempt to write outside buffer bounds');
    }
    if (!encoding) encoding = 'utf8';
    let loweredCase = false;
    for (;;) {
      switch (encoding) {
        case 'hex':
          return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
          return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
          return asciiWrite(this, string, offset, length);
        case 'base64':
          // Warning: maxLength not taken into account in base64Write
          return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ucs2Write(this, string, offset, length);
        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };
  Buffer.prototype.toJSON = function toJSON() {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
      return base64Js.fromByteArray(buf);
    } else {
      return base64Js.fromByteArray(buf.slice(start, end));
    }
  }
  function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while (i < end) {
      const firstByte = buf[i];
      let codePoint = null;
      let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
      if (i + bytesPerSequence <= end) {
        let secondByte, thirdByte, fourthByte, tempCodePoint;
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf[i + 1];
            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint;
              }
            }
        }
      }
      if (codePoint === null) {
        // we did not generate a valid codePoint so insert a
        // replacement char (U+FFFD) and advance only 1 byte
        codePoint = 0xFFFD;
        bytesPerSequence = 1;
      } else if (codePoint > 0xFFFF) {
        // encode to utf16 (surrogate pair dance)
        codePoint -= 0x10000;
        res.push(codePoint >>> 10 & 0x3FF | 0xD800);
        codePoint = 0xDC00 | codePoint & 0x3FF;
      }
      res.push(codePoint);
      i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
  }

  // Based on http://stackoverflow.com/a/22747272/680742, the browser with
  // the lowest limit is Chrome, with 0x10000 args.
  // We go 1 magnitude less, for safety
  const MAX_ARGUMENTS_LENGTH = 0x1000;
  function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
    }

    // Decode in chunks to avoid "call stack size exceeded".
    let res = '';
    let i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    }
    return res;
  }
  function asciiSlice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for (let i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i] & 0x7F);
    }
    return ret;
  }
  function latin1Slice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for (let i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i]);
    }
    return ret;
  }
  function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = '';
    for (let i = start; i < end; ++i) {
      out += hexSliceLookupTable[buf[i]];
    }
    return out;
  }
  function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for (let i = 0; i < bytes.length - 1; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
  }
  Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
      start += len;
      if (start < 0) start = 0;
    } else if (start > len) {
      start = len;
    }
    if (end < 0) {
      end += len;
      if (end < 0) end = 0;
    } else if (end > len) {
      end = len;
    }
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
  };

  /*
   * Need to make sure that buffer isn't trying to write out of bounds.
   */
  function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
  }
  Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    return val;
  };
  Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
      checkOffset(offset, byteLength, this.length);
    }
    let val = this[offset + --byteLength];
    let mul = 1;
    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul;
    }
    return val;
  };
  Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
  };
  Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
  };
  Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
  };
  Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
  };
  Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
  };
  Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) {
      boundsError(offset, this.length - 8);
    }
    const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
  });
  Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) {
      boundsError(offset, this.length - 8);
    }
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
  });
  Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
  };
  Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul;
    }
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
  };
  Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
  };
  Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
  };
  Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
  };
  Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
  };
  Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
  };
  Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) {
      boundsError(offset, this.length - 8);
    }
    const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24); // Overflow

    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
  });
  Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) {
      boundsError(offset, this.length - 8);
    }
    const val = (first << 24) +
    // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
  });
  Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
  };
  Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
  };
  Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
  };
  Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
  };
  function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
  }
  Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
      const maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = value / mul & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
      const maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = value / mul & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
  };
  Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
  };
  Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
  };
  Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
  };
  Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
  };
  function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
  }
  function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
  }
  Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
  });
  Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
  });
  Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      const limit = Math.pow(2, 8 * byteLength - 1);
      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      const limit = Math.pow(2, 8 * byteLength - 1);
      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
  };
  Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
  };
  Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
  };
  Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
  };
  Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
  };
  Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
  });
  Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
  });
  function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
  }
  function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4);
    }
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
  }
  Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
  };
  Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
  };
  function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8);
    }
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
  }
  Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
  };
  Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
  };

  // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
  Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;

    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;

    // Fatal error conditions
    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds');
    }
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');

    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
      // Use built-in when available, missing from IE11
      this.copyWithin(targetStart, start, end);
    } else {
      Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    }
    return len;
  };

  // Usage:
  //    buffer.fill(number[, offset[, end]])
  //    buffer.fill(buffer[, offset[, end]])
  //    buffer.fill(string[, offset[, end]][, encoding])
  Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
      if (typeof start === 'string') {
        encoding = start;
        start = 0;
        end = this.length;
      } else if (typeof end === 'string') {
        encoding = end;
        end = this.length;
      }
      if (encoding !== undefined && typeof encoding !== 'string') {
        throw new TypeError('encoding must be a string');
      }
      if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding);
      }
      if (val.length === 1) {
        const code = val.charCodeAt(0);
        if (encoding === 'utf8' && code < 128 || encoding === 'latin1') {
          // Fast path: If `val` fits into a single byte, use that numeric value.
          val = code;
        }
      }
    } else if (typeof val === 'number') {
      val = val & 255;
    } else if (typeof val === 'boolean') {
      val = Number(val);
    }

    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError('Out of range index');
    }
    if (end <= start) {
      return this;
    }
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === 'number') {
      for (i = start; i < end; ++i) {
        this[i] = val;
      }
    } else {
      const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
      const len = bytes.length;
      if (len === 0) {
        throw new TypeError('The value "' + val + '" is invalid for argument "value"');
      }
      for (i = 0; i < end - start; ++i) {
        this[i + start] = bytes[i % len];
      }
    }
    return this;
  };

  // CUSTOM ERRORS
  // =============

  // Simplified versions from Node, changed for Buffer-only usage
  const errors = {};
  function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
      constructor() {
        super();
        Object.defineProperty(this, 'message', {
          value: getMessage.apply(this, arguments),
          writable: true,
          configurable: true
        });

        // Add the error code to the name to include it in the stack trace.
        this.name = `${this.name} [${sym}]`;
        // Access the stack to generate the error message including the error code
        // from the name.
        this.stack; // eslint-disable-line no-unused-expressions
        // Reset the name to the actual name.
        delete this.name;
      }
      get code() {
        return sym;
      }
      set code(value) {
        Object.defineProperty(this, 'code', {
          configurable: true,
          enumerable: true,
          value,
          writable: true
        });
      }
      toString() {
        return `${this.name} [${sym}]: ${this.message}`;
      }
    };
  }
  E('ERR_BUFFER_OUT_OF_BOUNDS', function (name) {
    if (name) {
      return `${name} is outside of buffer bounds`;
    }
    return 'Attempt to access memory outside buffer bounds';
  }, RangeError);
  E('ERR_INVALID_ARG_TYPE', function (name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
  }, TypeError);
  E('ERR_OUT_OF_RANGE', function (str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
      received = addNumericalSeparator(String(input));
    } else if (typeof input === 'bigint') {
      received = String(input);
      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
        received = addNumericalSeparator(received);
      }
      received += 'n';
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
  }, RangeError);
  function addNumericalSeparator(val) {
    let res = '';
    let i = val.length;
    const start = val[0] === '-' ? 1 : 0;
    for (; i >= start + 4; i -= 3) {
      res = `_${val.slice(i - 3, i)}${res}`;
    }
    return `${val.slice(0, i)}${res}`;
  }

  // CHECK FUNCTIONS
  // ===============

  function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, 'offset');
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
      boundsError(offset, buf.length - (byteLength + 1));
    }
  }
  function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
      const n = typeof min === 'bigint' ? 'n' : '';
      let range;
      if (byteLength > 3) {
        if (min === 0 || min === BigInt(0)) {
          range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
        } else {
          range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        }
      } else {
        range = `>= ${min}${n} and <= ${max}${n}`;
      }
      throw new errors.ERR_OUT_OF_RANGE('value', range, value);
    }
    checkBounds(buf, offset, byteLength);
  }
  function validateNumber(value, name) {
    if (typeof value !== 'number') {
      throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
    }
  }
  function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
      validateNumber(value, type);
      throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value);
    }
    if (length < 0) {
      throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    }
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', `>= ${type ? 1 : 0} and <= ${length}`, value);
  }

  // HELPER FUNCTIONS
  // ================

  const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
  function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while (str.length % 4 !== 0) {
      str = str + '=';
    }
    return str;
  }
  function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for (let i = 0; i < length; ++i) {
      codePoint = string.charCodeAt(i);

      // is surrogate component
      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        // last char was a lead
        if (!leadSurrogate) {
          // no lead yet
          if (codePoint > 0xDBFF) {
            // unexpected trail
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          } else if (i + 1 === length) {
            // unpaired lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          }

          // valid lead
          leadSurrogate = codePoint;
          continue;
        }

        // 2 leads in a row
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          leadSurrogate = codePoint;
          continue;
        }

        // valid surrogate pair
        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
      } else if (leadSurrogate) {
        // valid bmp char, but last char was a lead
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
      }
      leadSurrogate = null;

      // encode utf8
      if (codePoint < 0x80) {
        if ((units -= 1) < 0) break;
        bytes.push(codePoint);
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0) break;
        bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0) break;
        bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0) break;
        bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else {
        throw new Error('Invalid code point');
      }
    }
    return bytes;
  }
  function asciiToBytes(str) {
    const byteArray = [];
    for (let i = 0; i < str.length; ++i) {
      // Node's code seems to be doing this and not & 0x7F..
      byteArray.push(str.charCodeAt(i) & 0xFF);
    }
    return byteArray;
  }
  function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for (let i = 0; i < str.length; ++i) {
      if ((units -= 2) < 0) break;
      c = str.charCodeAt(i);
      hi = c >> 8;
      lo = c % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }
    return byteArray;
  }
  function base64ToBytes(str) {
    return base64Js.toByteArray(base64clean(str));
  }
  function blitBuffer(src, dst, offset, length) {
    let i;
    for (i = 0; i < length; ++i) {
      if (i + offset >= dst.length || i >= src.length) break;
      dst[i + offset] = src[i];
    }
    return i;
  }

  // ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
  // the `instanceof` check but they should be treated as of that type.
  // See: https://github.com/feross/buffer/issues/166
  function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
  }
  function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj; // eslint-disable-line no-self-compare
  }

  // Create lookup table for `toString('hex')`
  // See: https://github.com/feross/buffer/issues/219
  const hexSliceLookupTable = function () {
    const alphabet = '0123456789abcdef';
    const table = new Array(256);
    for (let i = 0; i < 16; ++i) {
      const i16 = i * 16;
      for (let j = 0; j < 16; ++j) {
        table[i16 + j] = alphabet[i] + alphabet[j];
      }
    }
    return table;
  }();

  // Return not function with Error if BigInt not supported
  function defineBigIntMethod(fn) {
    return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn;
  }
  function BufferBigIntNotDefined() {
    throw new Error('BigInt not supported');
  }
  });
  var buffer_1 = buffer.Buffer;
  buffer.SlowBuffer;
  buffer.INSPECT_MAX_BYTES;
  buffer.kMaxLength;

  var maxObjectSize = 100 * 1000 * 1000; // 100Meg
  var maxObjectCount = 32768;

  // EPOCH = new SimpleDateFormat("yyyy MM dd zzz").parse("2001 01 01 GMT").getTime();
  // ...but that's annoying in a static initializer because it can throw exceptions, ick.
  // So we just hardcode the correct value.
  var EPOCH = 978307200000;

  // UID object definition
  var UID = /*#__PURE__*/_createClass(function UID(id) {
    _classCallCheck(this, UID);
    console.info({
      id: id
    });
  });
  var BinaryPlistParserService = /*#__PURE__*/function () {
    function BinaryPlistParserService() {
      _classCallCheck(this, BinaryPlistParserService);
      this.debug = false;
    }
    _createClass(BinaryPlistParserService, [{
      key: "parse64Content",
      value: function parse64Content(base64Content) {
        var raw = window.atob(base64Content);
        var rawLength = raw.length;
        var array = new buffer_1(rawLength);
        for (var i = 0; i < rawLength; i++) {
          array[i] = raw.charCodeAt(i);
        }
        return this.parseBuffer(array);
      }
    }, {
      key: "parseBuffer",
      value: function parseBuffer(buffer) {
        var _this = this;
        // check header
        var l = "bplist".length;
        var header = buffer.toString("utf8", 0, l);
        if (header !== "bplist") {
          throw new Error("Invalid binary plist. Expected 'bplist' at offset 0.");
        }

        // Handle trailer, last 32 bytes of the file
        var trailer = buffer.slice(buffer.length - 32, buffer.length);
        // 6 null bytes (index 0 to 5)
        var offsetSize = trailer.readUInt8(6);
        if (this.debug) {
          console.log("offsetSize: " + offsetSize);
        }
        var objectRefSize = trailer.readUInt8(7);
        if (this.debug) {
          console.log("objectRefSize: " + objectRefSize);
        }
        var numObjects = this.readUInt64BE(trailer, 8);
        if (this.debug) {
          console.log("numObjects: " + numObjects);
        }
        var topObject = this.readUInt64BE(trailer, 16);
        if (this.debug) {
          console.log("topObject: " + topObject);
        }
        var offsetTableOffset = this.readUInt64BE(trailer, 24);
        if (this.debug) {
          console.log("offsetTableOffset: " + offsetTableOffset);
        }
        if (numObjects > maxObjectCount) {
          throw new Error("maxObjectCount exceeded");
        }

        // Handle offset table
        var offsetTable = [];
        for (var i = 0; i < numObjects; i++) {
          var offsetBytes = buffer.slice(offsetTableOffset + i * offsetSize, offsetTableOffset + (i + 1) * offsetSize);
          offsetTable[i] = this.readUInt(offsetBytes, 0);
          if (this.debug) ;
        }

        // Parses an object inside the currently parsed binary property list.
        // For the format specification check
        // <a href="http://www.opensource.apple.com/source/CF/CF-635/CFBinaryPList.c">
        // Apple's binary property list parser implementation</a>.
        var parseObject = function parseObject(tableOffset) {
          var offset = offsetTable[tableOffset];
          var type = buffer[offset];
          var objType = (type & 0xf0) >> 4; // First  4 bits
          var objInfo = type & 0x0f; // Second 4 bits

          var parseSimple = function parseSimple() {
            // Simple
            switch (objInfo) {
              case 0x0:
                // null
                return null;
              case 0x8:
                // false
                return false;
              case 0x9:
                // true
                return true;
              case 0xf:
                // filler byte
                return null;
              default:
                throw new Error("Unhandled simple type 0x" + objType.toString(16));
            }
          };
          var bufferToHexString = function bufferToHexString(_buffer) {
            var str = "";
            var i;
            for (i = 0; i < _buffer.length; i++) {
              if (_buffer[i] !== 0x00) {
                break;
              }
            }
            for (; i < _buffer.length; i++) {
              var part = "00" + _buffer[i].toString(16);
              str += part.substr(part.length - 2);
            }
            return str;
          };
          var parseInteger = function parseInteger() {
            var length = Math.pow(2, objInfo);
            if (length > 4) {
              var data = buffer.slice(offset + 1, offset + 1 + length);
              var str = bufferToHexString(data);
              return BigInteger(str, 16);
            }
            if (length < maxObjectSize) {
              return _this.readUInt(buffer.slice(offset + 1, offset + 1 + length));
            } else {
              throw new Error("Too little heap space available! Wanted to read " + length + " bytes, but only " + maxObjectSize + " are available.");
            }
          };
          var parseUID = function parseUID() {
            var length = objInfo + 1;
            if (length < maxObjectSize) {
              return new UID(_this.readUInt(buffer.slice(offset + 1, offset + 1 + length)));
            } else {
              throw new Error("To little heap space available! Wanted to read " + length + " bytes, but only " + maxObjectSize + " are available.");
            }
          };
          var parseReal = function parseReal() {
            var length = Math.pow(2, objInfo);
            if (length < maxObjectSize) {
              var realBuffer = buffer.slice(offset + 1, offset + 1 + length);
              if (length === 4) {
                return realBuffer.readFloatBE(0);
              } else if (length === 8) {
                return realBuffer.readDoubleBE(0);
              }
            } else {
              throw new Error("To little heap space available! Wanted to read " + length + " bytes, but only " + maxObjectSize + " are available.");
            }
          };
          var parseDate = function parseDate() {
            if (objInfo !== 0x3) {
              console.error("Unknown date type :" + objInfo + ". Parsing anyway...");
            }
            var dateBuffer = buffer.slice(offset + 1, offset + 9);
            return new Date(EPOCH + 1000 * dateBuffer.readDoubleBE(0));
          };
          var parseData = function parseData() {
            var dataoffset = 1;
            var length = objInfo;
            if (objInfo === 0xf) {
              var int_type = buffer[offset + 1];
              var intType = (int_type & 0xf0) / 0x10;
              if (intType !== 0x1) {
                console.error("0x4: UNEXPECTED LENGTH-INT TYPE! " + intType);
              }
              var intInfo = int_type & 0x0f;
              var intLength = Math.pow(2, intInfo);
              dataoffset = 2 + intLength;
              if (intLength < 3) {
                length = _this.readUInt(buffer.slice(offset + 2, offset + 2 + intLength));
              } else {
                length = _this.readUInt(buffer.slice(offset + 2, offset + 2 + intLength));
              }
            }
            if (length < maxObjectSize) {
              return buffer.slice(offset + dataoffset, offset + dataoffset + length);
            } else {
              throw new Error("To little heap space available! Wanted to read " + length + " bytes, but only " + maxObjectSize + " are available.");
            }
          };
          var parsePlistString = function parsePlistString(isUtf16) {
            isUtf16 = isUtf16 || 0;
            var enc = "utf8";
            var length = objInfo;
            var stroffset = 1;
            if (objInfo === 0xf) {
              var int_type = buffer[offset + 1];
              var intType = (int_type & 0xf0) / 0x10;
              if (intType !== 0x1) {
                console.error("UNEXPECTED LENGTH-INT TYPE! " + intType);
              }
              var intInfo = int_type & 0x0f;
              var intLength = Math.pow(2, intInfo);
              stroffset = 2 + intLength;
              if (intLength < 3) {
                length = _this.readUInt(buffer.slice(offset + 2, offset + 2 + intLength));
              } else {
                length = _this.readUInt(buffer.slice(offset + 2, offset + 2 + intLength));
              }
            }
            // length is String length -> to get byte length multiply by 2, as 1 character takes 2 bytes in UTF-16
            length *= isUtf16 + 1;
            if (length < maxObjectSize) {
              var plistString = buffer.toString("utf8", offset + stroffset, offset + stroffset + length);
              if (isUtf16) {
                plistString = _this.swapBytes(plistString);
                enc = "ucs2";
              }
              return plistString.toString(enc);
            } else {
              throw new Error("To little heap space available! Wanted to read " + length + " bytes, but only " + maxObjectSize + " are available.");
            }
          };
          var parseArray = function parseArray() {
            var length = objInfo;
            var arrayoffset = 1;
            if (objInfo === 0xf) {
              var int_type = buffer[offset + 1];
              var intType = (int_type & 0xf0) / 0x10;
              if (intType !== 0x1) {
                console.error("0xa: UNEXPECTED LENGTH-INT TYPE! " + intType);
              }
              var intInfo = int_type & 0x0f;
              var intLength = Math.pow(2, intInfo);
              arrayoffset = 2 + intLength;
              if (intLength < 3) {
                length = _this.readUInt(buffer.slice(offset + 2, offset + 2 + intLength));
              } else {
                length = _this.readUInt(buffer.slice(offset + 2, offset + 2 + intLength));
              }
            }
            if (length * objectRefSize > maxObjectSize) {
              throw new Error("To little heap space available!");
            }
            var array = [];
            for (var _i = 0; _i < length; _i++) {
              var objRef = _this.readUInt(buffer.slice(offset + arrayoffset + _i * objectRefSize, offset + arrayoffset + (_i + 1) * objectRefSize));
              array[_i] = parseObject(objRef);
            }
            return array;
          };
          var parseDictionary = function parseDictionary() {
            var length = objInfo;
            var dictoffset = 1;
            if (objInfo === 0xf) {
              var int_type = buffer[offset + 1];
              var intType = (int_type & 0xf0) / 0x10;
              if (intType !== 0x1) {
                console.error("0xD: UNEXPECTED LENGTH-INT TYPE! " + intType);
              }
              var intInfo = int_type & 0x0f;
              var intLength = Math.pow(2, intInfo);
              dictoffset = 2 + intLength;
              if (intLength < 3) {
                length = _this.readUInt(buffer.slice(offset + 2, offset + 2 + intLength));
              } else {
                length = _this.readUInt(buffer.slice(offset + 2, offset + 2 + intLength));
              }
            }
            if (length * 2 * objectRefSize > maxObjectSize) {
              throw new Error("To little heap space available!");
            }
            if (_this.debug) {
              console.log("Parsing dictionary #" + tableOffset);
            }
            var dict = {};
            for (var _i2 = 0; _i2 < length; _i2++) {
              var keyRef = _this.readUInt(buffer.slice(offset + dictoffset + _i2 * objectRefSize, offset + dictoffset + (_i2 + 1) * objectRefSize));
              var valRef = _this.readUInt(buffer.slice(offset + dictoffset + length * objectRefSize + _i2 * objectRefSize, offset + dictoffset + length * objectRefSize + (_i2 + 1) * objectRefSize));
              var key = parseObject(keyRef);
              var val = parseObject(valRef);
              if (_this.debug) {
                console.log("  DICT #" + tableOffset + ": Mapped " + key + " to " + val);
              }
              dict[key] = val;
            }
            return dict;
          };
          switch (objType) {
            case 0x0:
              return parseSimple();
            case 0x1:
              return parseInteger();
            case 0x8:
              return parseUID();
            case 0x2:
              return parseReal();
            case 0x3:
              return parseDate();
            case 0x4:
              return parseData();
            case 0x5:
              // ASCII
              return parsePlistString();
            case 0x6:
              // UTF-16
              return parsePlistString(true);
            case 0xa:
              return parseArray();
            case 0xd:
              return parseDictionary();
            default:
              throw new Error("Unhandled type 0x" + objType.toString(16));
          }
        };
        return [parseObject(topObject)];
      }
    }, {
      key: "readUInt",
      value: function readUInt(buffer, start) {
        start = start || 0;
        var l = 0;
        for (var i = start; i < buffer.length; i++) {
          l <<= 8;
          l |= buffer[i] & 0xff;
        }
        return l;
      }

      // we're just going to toss the high order bits because javascript doesn't have 64-bit ints
    }, {
      key: "readUInt64BE",
      value: function readUInt64BE(buffer, start) {
        var data = buffer.slice(start, start + 8);
        return data.readUInt32BE(4, 8);
      }
    }, {
      key: "swapBytes",
      value: function swapBytes(buffer) {
        var len = buffer.length;
        for (var i = 0; i < len; i += 2) {
          var a = buffer[i];
          buffer[i] = buffer[i + 1];
          buffer[i + 1] = a;
        }
        return buffer;
      }
    }]);
    return BinaryPlistParserService;
  }();

  var binaryPlistParser = new BinaryPlistParserService();
  var extraFields = {
    skipConfirmation: "X-Skip-Confirm-Navigation=1",
    sameWindow: "X-Target=_self"
  };
  var extraFieldNames = {
    skipConfirmation: "X-Skip-Confirm-Navigation",
    sameWindow: "X-Target"
  };
  var emptyFile = {
    url: "",
    sameWindow: false,
    skipConfirmation: false
  };
  var Parser = /*#__PURE__*/function () {
    function Parser() {
      _classCallCheck(this, Parser);
    }
    _createClass(Parser, null, [{
      key: "generateURLFileContent",
      value:
      /**
       * Generates a URL file.
       */
      function generateURLFileContent(oldContent, url) {
        var sameWindow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var skipConfirmation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var newContent = "";
        // Find if this is already a shortcut file.
        if (oldContent && oldContent.indexOf("[InternetShortcut]") !== -1 && oldContent.indexOf("URL=") !== -1) {
          // Seems like it, replace the url.
          newContent = oldContent.replace(new RegExp("URL=.*", "gm"), "URL=".concat(dist_1(url)));
        } else {
          // Okay, let's create a new file.
          newContent = "[InternetShortcut]\r\nURL=".concat(dist_1(url));
        }
        // Adjust same window property
        if (!sameWindow && newContent.indexOf(extraFields.sameWindow) !== -1) {
          newContent = newContent.replace(extraFields.sameWindow, "");
        } else if (sameWindow && newContent.indexOf(extraFields.sameWindow) === -1) {
          newContent = "".concat(newContent, "\r\n").concat(extraFields.sameWindow);
        }

        // Adjust skip navigation confirmation property
        if (!skipConfirmation && newContent.indexOf(extraFields.skipConfirmation) !== -1) {
          newContent = newContent.replace(extraFields.skipConfirmation, "");
        } else if (skipConfirmation && newContent.indexOf(extraFields.skipConfirmation) === -1) {
          newContent = "".concat(newContent, "\r\n").concat(extraFields.skipConfirmation);
        }

        // Remove blank new lines
        newContent = newContent.replace(/\r\n\r\n/gm, "\r\n").trim();
        // Add a newline at the end
        return "".concat(newContent, "\r\n");
      }

      /**
       * Parse a URL file.
       */
    }, {
      key: "parseURLFile",
      value: function parseURLFile(filecontent) {
        var result = _objectSpread2({}, emptyFile);
        if (filecontent) {
          // Match for URL line.
          var urllines = filecontent.match("URL=.*");
          // See if matches were found.
          if (urllines && Array.isArray(urllines) && urllines.length > 0) {
            // Let's use the first match.
            var url = urllines[0];
            // Return only the URL.
            result.url = dist_1(url.replace("URL=", ""));
          }

          // If this extra field is present, we skip the navigation confirmation view
          if (filecontent.indexOf(extraFields.skipConfirmation) !== -1) {
            result.skipConfirmation = true;
          }
          // If this extra field is present, the link opens in the same window
          if (filecontent.indexOf(extraFields.sameWindow) !== -1) {
            result.sameWindow = true;
          }
        }
        return result;
      }

      /**
       * Generates a webloc file.
       */
    }, {
      key: "generateWeblocFileContent",
      value: function generateWeblocFileContent(oldcontent, url) {
        var sameWindow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var skipConfirmation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var newContent = "";
        var urlMatch = false;

        // Editing existing file
        if (oldcontent) {
          // Parse XML file
          var parser = new window.DOMParser();
          // Remove comment characters around extra fields
          var xmlContent = uncommentExtraFields(oldcontent);
          var xmlDoc = parser.parseFromString(xmlContent, "text/xml");
          // There can be <dict> and <extra> tags on the root <plist>
          var elements = [].concat(_toConsumableArray(xmlDoc.getElementsByTagName("dict")), _toConsumableArray(xmlDoc.getElementsByTagName("extra")));
          var skipConfirmationMatch = false;
          var sameWindowMatch = false;
          // Map over all child elements
          if (elements && elements.length) {
            var _iterator = _createForOfIteratorHelper(elements),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var element = _step.value;
                var key = element.getElementsByTagName("key");
                var string = element.getElementsByTagName("string");
                // Match for URL line
                if (getXMLTagValue(key) === "URL") {
                  setXMLTagValue(string, dist_1(url));
                  urlMatch = true;
                }
                // If this extra field is present, the link opens in the same window
                if (getXMLTagValue(key) === extraFieldNames.sameWindow && getXMLTagValue(string) === "_self") {
                  if (sameWindow) {
                    // Update sameWindow field
                    setXMLTagValue(string, "_self");
                  } else {
                    // Remove field
                    xmlDoc.getElementsByTagName("plist")[0].removeChild(element);
                  }
                  sameWindowMatch = true;
                }
                // If this extra field is present, we skip the navigation confirmation view
                if (getXMLTagValue(key) === extraFieldNames.skipConfirmation && getXMLTagValue(string) === "1") {
                  if (skipConfirmation) {
                    // Update skipNavigation field
                    setXMLTagValue(string, "1");
                  } else {
                    // Remove field
                    xmlDoc.getElementsByTagName("plist")[0].removeChild(element);
                  }
                  skipConfirmationMatch = true;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          // The sameWindow field is not present, but needs to be added
          if (sameWindow && !sameWindowMatch) {
            var sameWindowElement = createExtraElement(xmlDoc, extraFieldNames.sameWindow, "_self");
            xmlDoc.getElementsByTagName("plist")[0].appendChild(sameWindowElement);
          }

          // The skipConfirmation field is not present, but needs to be added
          if (skipConfirmation && !skipConfirmationMatch) {
            var skipConfirmationElement = createExtraElement(xmlDoc, extraFieldNames.skipConfirmation, "1");
            xmlDoc.getElementsByTagName("plist")[0].appendChild(skipConfirmationElement);
          }

          // Instantiate XML serializer
          var serializer = new window.XMLSerializer();
          // Add XML header, serialize
          newContent = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\t\t\t".concat(serializer.serializeToString(xmlDoc));
          if (newContent.indexOf("parsererror") > -1) {
            // Bail if parse error was "thrown"
            console.error("Parse error", newContent);
            newContent = "";
          }
          // pretty print XML
          newContent = formatXml(newContent);
        }

        // No content or URL not found in content
        if (!newContent || !urlMatch) {
          // Okay, let's create a new file.
          newContent = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\t\t\t\t<!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\">\n\t\t\t\t<plist version=\"1.0\">\n\t\t\t\t\t<dict>\n\t\t\t\t\t\t<key>URL</key>\n\t\t\t\t\t\t<string>".concat(dist_1(url), "</string>\n\t\t\t\t\t</dict>");
          if (sameWindow) {
            newContent = "".concat(newContent, "\n\t\t\t\t<extra>\n\t\t\t\t\t<key>").concat(extraFieldNames.sameWindow, "</key>\n\t\t\t\t\t<string>_self</string>\n\t\t\t\t</extra>");
          }
          if (skipConfirmation) {
            newContent = "".concat(newContent, "\n\t\t\t\t<extra>\n\t\t\t\t\t<key>").concat(extraFieldNames.skipConfirmation, "</key>\n\t\t\t\t\t<string>1</string>\n\t\t\t\t</extra>");
          }
          newContent = "".concat(newContent, "\n\t\t\t</plist>");
        }

        // Comment extra fields
        newContent = commentExtraFields(newContent);
        // Trim and remove indentation
        newContent = newContent.replace(/(\n|\b)\t+/g, "$1").trim();
        // Remove empty newlines
        newContent = newContent.replace(/^\s*$(?:\r\n?|\n)/gm, "").trim();
        return newContent;
      }

      /**
       * Parse a webloc file.
       */
    }, {
      key: "parseWeblocFile",
      value: function parseWeblocFile(filecontent) {
        var result = _objectSpread2({}, emptyFile);
        if (filecontent) {
          if (filecontent.substring(0, 6) === "bplist") {
            // Try parsing as binary file
            try {
              var parsed = binaryPlistParser.parse64Content(window.btoa(filecontent));
              // Was able to parse and has URL
              if (parsed && parsed.length && parsed[0] && parsed[0].URL) {
                // Return URL, no custom metadata can be saved to the binary file
                result.url = parsed[0].URL;
              }
            } catch (error) {
              console.info(error);
            }
          } else {
            // Try parsing a XML file
            var parser = new window.DOMParser();
            // Remove comment characters around extra fields
            var xmlContent = uncommentExtraFields(filecontent);
            // Parse XML file
            var xmlDoc = parser.parseFromString(xmlContent, "text/xml");
            // There can be <dict> and <extra> tags on the root <plist>
            var elements = [].concat(_toConsumableArray(xmlDoc.getElementsByTagName("dict")), _toConsumableArray(xmlDoc.getElementsByTagName("extra")));

            // Map over all child elements
            if (elements && elements.length) {
              var _iterator2 = _createForOfIteratorHelper(elements),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var element = _step2.value;
                  var key = element.getElementsByTagName("key");
                  var string = element.getElementsByTagName("string");
                  // Match for URL line
                  if (getXMLTagValue(key) === "URL") {
                    result.url = dist_1(getXMLTagValue(string));
                  }
                  // If this extra field is present, the link opens in the same window
                  if (getXMLTagValue(key) === extraFieldNames.sameWindow && getXMLTagValue(string) === "_self") {
                    result.sameWindow = true;
                  }
                  // If this extra field is present, we skip the navigation confirmation view
                  if (getXMLTagValue(key) === extraFieldNames.skipConfirmation && getXMLTagValue(string) === "1") {
                    result.skipConfirmation = true;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }
        }
        return result;
      }

      /**
       * Get extension from filename.
       */
    }, {
      key: "getExtension",
      value: function getExtension(filename) {
        if (filename) {
          // Split at dot.
          var parts = filename.split(".");
          // See if there was a dot in the name.
          if (parts && Array.isArray(parts) && parts.length > 1) {
            // Get extension.
            var extension = parts[parts.length - 1];
            // Return the last part after the last dot.
            if (extension) {
              return extension.toLowerCase();
            }
          }
        }
        return "";
      }
    }]);
    return Parser;
  }();

  // Get the actual value of an XML node
  var getXMLTagValue = function getXMLTagValue(element) {
    if (element && element.length > 0 && element[0].childNodes && element[0].childNodes.length > 0 && element[0].childNodes[0]) {
      return element[0].childNodes[0].nodeValue;
    }
    return "";
  };

  // Set the value of an XML node
  var setXMLTagValue = function setXMLTagValue(element, value) {
    if (element && element.length > 0 && element[0].childNodes && element[0].childNodes.length > 0 && element[0].childNodes[0]) {
      element[0].childNodes[0].nodeValue = value;
    }
  };

  // Creates an <extra> XML element
  var createExtraElement = function createExtraElement(xmlDoc, keyValue, stringValue) {
    var extra = xmlDoc.createElement("extra");
    var key = xmlDoc.createElement("key");
    key.appendChild(xmlDoc.createTextNode(keyValue));
    extra.appendChild(key);
    var string = xmlDoc.createElement("string");
    string.appendChild(xmlDoc.createTextNode(stringValue));
    extra.appendChild(string);
    return extra;
  };
  var formatXml = function formatXml(xml) {
    return xml.replace(/></g, ">\n<");
  };
  var commentExtraFields = function commentExtraFields(xml) {
    return xml.replace(/<extra>/g, "<!-- <extra>").replace(/<\/extra>/g, "</extra> -->");
  };
  var uncommentExtraFields = function uncommentExtraFields(xml) {
    return xml.replace(/<!-- <extra>/g, "<extra>").replace(/<\/extra> -->/g, "</extra>");
  };

  function create_fragment$2(ctx) {
    var div;
    var a;
    var span;
    var t0;
    var t1_value = /*t*/ctx[1]('files_linkeditor', 'View link') + "";
    var t1;
    var mounted;
    var dispose;
    return {
      c: function c() {
        div = element("div");
        a = element("a");
        span = element("span");
        t0 = space();
        t1 = text(t1_value);
        attr(span, "class", "icon icon-link");
        attr(a, "href", "#/");
        attr(a, "class", "button");
        attr(a, "id", "downloadFile");
        attr(div, "class", "directDownload");
      },
      m: function m(target, anchor) {
        insert(target, div, anchor);
        append(div, a);
        append(a, span);
        append(a, t0);
        append(a, t1);
        if (!mounted) {
          dispose = listen(a, "click", prevent_default(function () {
            if (is_function( /*onClick*/ctx[0])) /*onClick*/ctx[0].apply(this, arguments);
          }));
          mounted = true;
        }
      },
      p: function p(new_ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1);
          _ref2[0];
        ctx = new_ctx;
      },
      i: noop$1,
      o: noop$1,
      d: function d(detaching) {
        if (detaching) detach(div);
        mounted = false;
        dispose();
      }
    };
  }
  function instance$2($$self, $$props, $$invalidate) {
    var onClick = $$props.onClick;
    var t = window.t;
    $$self.$$set = function ($$props) {
      if ('onClick' in $$props) $$invalidate(0, onClick = $$props.onClick);
    };
    return [onClick, t];
  }
  var PublicButton = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(PublicButton, _SvelteComponent);
    var _super = _createSuper(PublicButton);
    function PublicButton(options) {
      var _this;
      _classCallCheck(this, PublicButton);
      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
        onClick: 0
      });
      return _this;
    }
    return _createClass(PublicButton);
  }(SvelteComponent);

  var supportedMimetype = "application/internet-shortcut";
  var buttons = [];
  var LinkeditorService = /*#__PURE__*/function () {
    function LinkeditorService() {
      _classCallCheck(this, LinkeditorService);
    }
    _createClass(LinkeditorService, null, [{
      key: "registerFileActions",
      value:
      /**
       * Registers the file actions with files app
       */
      function registerFileActions() {
        // Edit action on single file
        window.OCA.Files.fileActions.registerAction({
          name: "editLink",
          displayName: t("files_linkeditor", "Edit link"),
          mime: supportedMimetype,
          actionHandler: function () {
            var _actionHandler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(fileName, context) {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return LinkeditorService.loadAndChangeViewMode({
                      fileName: fileName,
                      context: context,
                      nextViewMode: "edit"
                    });
                  case 2:
                    return _context.abrupt("return", _context.sent);
                  case 3:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            function actionHandler(_x, _x2) {
              return _actionHandler.apply(this, arguments);
            }
            return actionHandler;
          }(),
          permissions: window.OC.currentUser && window.OC.PERMISSION_UPDATE,
          iconClass: "icon-link"
        });

        // View action on single file
        window.OCA.Files.fileActions.registerAction({
          name: "viewLink",
          displayName: t("files_linkeditor", "View link"),
          mime: supportedMimetype,
          actionHandler: function () {
            var _actionHandler2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(fileName, context) {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!window.OC.currentUser) {
                      _context2.next = 5;
                      break;
                    }
                    _context2.next = 3;
                    return LinkeditorService.loadAndChangeViewMode({
                      fileName: fileName,
                      context: context,
                      nextViewMode: "view"
                    });
                  case 3:
                    _context2.next = 7;
                    break;
                  case 5:
                    _context2.next = 7;
                    return LinkeditorService.loadAndChangeViewMode({
                      fileName: fileName,
                      context: context,
                      nextViewMode: "view",
                      downloadUrl: context.fileList.getDownloadUrl(fileName),
                      publicUser: true
                    });
                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            function actionHandler(_x3, _x4) {
              return _actionHandler2.apply(this, arguments);
            }
            return actionHandler;
          }(),
          permissions: window.OC.PERMISSION_READ,
          iconClass: "icon-link"
        });

        // Use Link viewing as default action.
        window.OCA.Files.fileActions.setDefault(supportedMimetype, "viewLink");
        window.OC.Plugins.register("OCA.Files.NewFileMenu", {
          attach: function attach(menu) {
            var fileList = menu.fileList;

            // Only attach to main file list
            if (fileList.id !== "files") {
              return;
            }
            var menuEntryFactory = function menuEntryFactory(_ref) {
              var id = _ref.id,
                displayName = _ref.displayName,
                templateName = _ref.templateName;
              // Register the new menu entry
              menu.addMenuEntry({
                id: id,
                displayName: displayName,
                templateName: templateName,
                iconClass: "icon-link",
                fileType: supportedMimetype,
                actionHandler: function actionHandler(name) {
                  var dir = fileList.getCurrentDirectory();
                  // First create the file
                  viewMode.update(function () {
                    return "edit";
                  });
                  currentFile.update(function () {
                    return FileService.getFileConfig({
                      name: name,
                      dir: dir,
                      isNew: true,
                      onCreate: function () {
                        var _onCreate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(file) {
                          var newFile;
                          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                            while (1) switch (_context3.prev = _context3.next) {
                              case 0:
                                _context3.next = 2;
                                return fileList.createFile(name, {
                                  scrollTo: false
                                });
                              case 2:
                                _context3.next = 4;
                                return FileService.load({
                                  fileName: name,
                                  dir: dir
                                });
                              case 4:
                                newFile = _context3.sent;
                                _context3.next = 7;
                                return LinkeditorService.saveAndChangeViewMode(_objectSpread2(_objectSpread2({}, file), {}, {
                                  fileModifiedTime: newFile.mtime
                                }));
                              case 7:
                              case "end":
                                return _context3.stop();
                            }
                          }, _callee3);
                        }));
                        function onCreate(_x5) {
                          return _onCreate.apply(this, arguments);
                        }
                        return onCreate;
                      }()
                    });
                  });
                }
              });
            };
            menuEntryFactory({
              id: "application-internet-shortcut",
              displayName: "".concat(window.t("files_linkeditor", "New link"), " (.URL)"),
              // TRANSLATORS default filename when creating a new link file from the files list, keep .URL at the end
              templateName: window.t("files_linkeditor", "Link.URL")
            });
            menuEntryFactory({
              id: "application-internet-shortcut-webloc",
              displayName: "".concat(window.t("files_linkeditor", "New link"), " (.webloc)"),
              // TRANSLATORS default filename when creating a new link file from the files list, keep .webloc at the end
              templateName: window.t("files_linkeditor", "Link.webloc")
            });
          }
        });

        // Public shares where only the link file is shared
        var directDownload = document.querySelectorAll(".directDownload");
        if (directDownload && directDownload.length > 0) {
          // Get the filename
          var filename = (document.querySelector("input#filename") || {
            value: ""
          }).value;
          // Get extension
          var extension = Parser.getExtension(filename);
          // Public download page, single file
          if (extension === "url" || extension === "webloc") {
            // Get the download URL
            var downloadUrl = (document.querySelector("input#downloadURL") || {
              value: ""
            }).value;
            // Replace link and id on new button, add icon and label
            buttons.push(new PublicButton({
              anchor: document.querySelector(".directDownload"),
              target: document.querySelector(".directDownload").parentElement,
              props: {
                onClick: function onClick() {
                  // Show view modal when clicked
                  LinkeditorService.loadAndChangeViewMode({
                    fileName: filename,
                    nextViewMode: "view",
                    publicUser: true,
                    downloadUrl: downloadUrl
                  });
                }
              }
            }));
          }
        }
      }
    }, {
      key: "loadAndChangeViewMode",
      value: function () {
        var _loadAndChangeViewMode = _asyncToGenerator(function (_ref2) {
          var fileName = _ref2.fileName,
            context = _ref2.context,
            nextViewMode = _ref2.nextViewMode,
            publicUser = _ref2.publicUser,
            downloadUrl = _ref2.downloadUrl;
          return /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var currentUrl, file, extension, parsedFile;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  // Find out where we are to use this link for the cancel button.
                  currentUrl = context ? encodeURI(context.fileList.linkTo() + "?path=" + context.dir) : window.location.href; // Get ready to show viewer
                  viewMode.update(function () {
                    return nextViewMode;
                  });
                  // Preliminary file config update
                  currentFile.update(function () {
                    return FileService.getFileConfig({
                      name: fileName,
                      currentUrl: currentUrl,
                      dir: context ? context.dir : ""
                    });
                  });
                  // Load file from backend
                  file = {};
                  if (!publicUser) {
                    _context4.next = 10;
                    break;
                  }
                  _context4.next = 7;
                  return FileService.loadPublic({
                    downloadUrl: downloadUrl
                  });
                case 7:
                  file = _context4.sent;
                  _context4.next = 13;
                  break;
                case 10:
                  _context4.next = 12;
                  return FileService.load({
                    fileName: fileName,
                    dir: context.dir
                  });
                case 12:
                  file = _context4.sent;
                case 13:
                  if (file) {
                    // Read extension and run fitting parser.
                    extension = Parser.getExtension(fileName); // Parse the filecontent to get to the URL.
                    parsedFile = {};
                    if (extension === "webloc") {
                      parsedFile = Parser.parseWeblocFile(file.filecontents);
                    } else {
                      parsedFile = Parser.parseURLFile(file.filecontents);
                    }
                    // Update file info in store
                    currentFile.update(function (fileConfig) {
                      return FileService.getFileConfig(_objectSpread2(_objectSpread2(_objectSpread2({}, fileConfig), parsedFile), {}, {
                        fileModifiedTime: file.mtime,
                        isLoaded: true
                      }));
                    });
                  } else {
                    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
                  }
                case 14:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          })();
        });
        function loadAndChangeViewMode(_x6) {
          return _loadAndChangeViewMode.apply(this, arguments);
        }
        return loadAndChangeViewMode;
      }()
    }, {
      key: "saveAndChangeViewMode",
      value: function () {
        var _saveAndChangeViewMode = _asyncToGenerator(function (_ref3) {
          var name = _ref3.name,
            dir = _ref3.dir,
            url = _ref3.url,
            fileModifiedTime = _ref3.fileModifiedTime,
            sameWindow = _ref3.sameWindow,
            skipConfirmation = _ref3.skipConfirmation;
          return /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var extension, fileContent;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  // Read extension and run fitting parser.
                  extension = Parser.getExtension(name); // Parse the filecontent to get to the URL.
                  fileContent = "";
                  if (extension === "webloc") {
                    fileContent = Parser.generateWeblocFileContent("", url, sameWindow, skipConfirmation);
                  } else {
                    fileContent = Parser.generateURLFileContent("", url, sameWindow, skipConfirmation);
                  }
                  // Save file
                  _context5.next = 5;
                  return FileService.save({
                    fileContent: fileContent,
                    name: name,
                    dir: dir,
                    fileModifiedTime: fileModifiedTime
                  });
                case 5:
                  // Hide editor
                  viewMode.update(function () {
                    return "none";
                  });
                case 6:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          })();
        });
        function saveAndChangeViewMode(_x7) {
          return _saveAndChangeViewMode.apply(this, arguments);
        }
        return saveAndChangeViewMode;
      }()
    }]);
    return LinkeditorService;
  }();

  function create_if_block_2(ctx) {
    var label0;
    var t0_value = /*t*/ctx[2]('files_linkeditor', 'Link target URL') + "";
    var t0;
    var t1;
    var br;
    var t2;
    var input0;
    var t3;
    var input1;
    var t4;
    var label1;
    var t6;
    var input2;
    var input2_disabled_value;
    var t7;
    var label2;
    var mounted;
    var dispose;
    return {
      c: function c() {
        label0 = element("label");
        t0 = text(t0_value);
        t1 = space();
        br = element("br");
        t2 = space();
        input0 = element("input");
        t3 = space();
        input1 = element("input");
        t4 = space();
        label1 = element("label");
        label1.textContent = "".concat( /*t*/ctx[2]('files_linkeditor', 'Open in same window'));
        t6 = space();
        input2 = element("input");
        t7 = space();
        label2 = element("label");
        label2.textContent = "".concat( /*t*/ctx[2]('files_linkeditor', 'Skip confirmation dialog before open (has to open in same window)'));
        attr(input0, "type", "text");
        set_style(input0, "width", "100%");
        attr(input0, "class", "input-wide");
        input0.autofocus = true;
        attr(input0, "placeholder", /*t*/ctx[2]('files_linkeditor', 'e.g. https://example.org'));
        attr(input1, "type", "checkbox");
        attr(input1, "id", "linkeditor_sameWindow");
        attr(input1, "class", "checkbox");
        attr(label1, "for", "linkeditor_sameWindow");
        attr(label1, "class", "space-top");
        attr(input2, "type", "checkbox");
        input2.disabled = input2_disabled_value = ! /*file*/ctx[0].sameWindow;
        attr(input2, "id", "linkeditor_skipConfirmation");
        attr(input2, "class", "checkbox");
        attr(label2, "for", "linkeditor_skipConfirmation");
      },
      m: function m(target, anchor) {
        insert(target, label0, anchor);
        append(label0, t0);
        append(label0, t1);
        append(label0, br);
        append(label0, t2);
        append(label0, input0);
        set_input_value(input0, /*file*/ctx[0].url);
        insert(target, t3, anchor);
        insert(target, input1, anchor);
        input1.checked = /*file*/ctx[0].sameWindow;
        insert(target, t4, anchor);
        insert(target, label1, anchor);
        insert(target, t6, anchor);
        insert(target, input2, anchor);
        input2.checked = /*file*/ctx[0].skipConfirmation;
        insert(target, t7, anchor);
        insert(target, label2, anchor);
        input0.focus();
        if (!mounted) {
          dispose = [listen(input0, "input", /*input0_input_handler*/ctx[5]), listen(input1, "change", /*input1_change_handler*/ctx[6]), listen(input2, "change", /*input2_change_handler*/ctx[7])];
          mounted = true;
        }
      },
      p: function p(ctx, dirty) {
        if (dirty & /*file*/1 && input0.value !== /*file*/ctx[0].url) {
          set_input_value(input0, /*file*/ctx[0].url);
        }
        if (dirty & /*file*/1) {
          input1.checked = /*file*/ctx[0].sameWindow;
        }
        if (dirty & /*file*/1 && input2_disabled_value !== (input2_disabled_value = ! /*file*/ctx[0].sameWindow)) {
          input2.disabled = input2_disabled_value;
        }
        if (dirty & /*file*/1) {
          input2.checked = /*file*/ctx[0].skipConfirmation;
        }
      },
      d: function d(detaching) {
        if (detaching) detach(label0);
        if (detaching) detach(t3);
        if (detaching) detach(input1);
        if (detaching) detach(t4);
        if (detaching) detach(label1);
        if (detaching) detach(t6);
        if (detaching) detach(input2);
        if (detaching) detach(t7);
        if (detaching) detach(label2);
        mounted = false;
        run_all(dispose);
      }
    };
  }

  // (69:3) {#if !loading}
  function create_if_block_1$1(ctx) {
    var a;
    var t_1_value = /*t*/ctx[2]('files_linkeditor', 'Visit link') + "";
    var t_1;
    var a_href_value;
    return {
      c: function c() {
        a = element("a");
        t_1 = text(t_1_value);
        attr(a, "href", a_href_value = dist_1( /*file*/ctx[0].url));
        attr(a, "target", "_blank");
        attr(a, "class", "button");
      },
      m: function m(target, anchor) {
        insert(target, a, anchor);
        append(a, t_1);
      },
      p: function p(ctx, dirty) {
        if (dirty & /*file*/1 && a_href_value !== (a_href_value = dist_1( /*file*/ctx[0].url))) {
          attr(a, "href", a_href_value);
        }
      },
      d: function d(detaching) {
        if (detaching) detach(a);
      }
    };
  }

  // (82:3) {#if !loading}
  function create_if_block$1(ctx) {
    var a;
    var t_1_value = /*t*/ctx[2]('files_linkeditor', 'Save') + "";
    var t_1;
    var a_href_value;
    var mounted;
    var dispose;
    return {
      c: function c() {
        a = element("a");
        t_1 = text(t_1_value);
        attr(a, "href", a_href_value = /*file*/ctx[0].currentUrl);
        attr(a, "class", "primary button");
      },
      m: function m(target, anchor) {
        insert(target, a, anchor);
        append(a, t_1);
        if (!mounted) {
          dispose = listen(a, "click", prevent_default( /*save*/ctx[4]));
          mounted = true;
        }
      },
      p: function p(ctx, dirty) {
        if (dirty & /*file*/1 && a_href_value !== (a_href_value = /*file*/ctx[0].currentUrl)) {
          attr(a, "href", a_href_value);
        }
      },
      d: function d(detaching) {
        if (detaching) detach(a);
        mounted = false;
        dispose();
      }
    };
  }

  // (39:0) <Overlay {loading}>
  function create_default_slot(ctx) {
    var form;
    var div0;
    var h3;
    var t0_value = /*file*/ctx[0].name + "";
    var t0;
    var t1;
    var t2;
    var div1;
    var t3;
    var div2;
    var a;
    var t4_value = /*t*/ctx[2]('files_linkeditor', 'Cancel') + "";
    var t4;
    var a_href_value;
    var t5;
    var mounted;
    var dispose;
    var if_block0 = ! /*loading*/ctx[1] && create_if_block_2(ctx);
    var if_block1 = ! /*loading*/ctx[1] && create_if_block_1$1(ctx);
    var if_block2 = ! /*loading*/ctx[1] && create_if_block$1(ctx);
    return {
      c: function c() {
        form = element("form");
        div0 = element("div");
        h3 = element("h3");
        t0 = text(t0_value);
        t1 = space();
        if (if_block0) if_block0.c();
        t2 = space();
        div1 = element("div");
        if (if_block1) if_block1.c();
        t3 = space();
        div2 = element("div");
        a = element("a");
        t4 = text(t4_value);
        t5 = space();
        if (if_block2) if_block2.c();
        attr(div0, "class", "urledit");
        attr(div1, "class", "oc-dialog-buttonrow onebutton urlvisit");
        attr(a, "href", a_href_value = /*file*/ctx[0].currentUrl);
        attr(a, "class", "cancel button");
        attr(div2, "class", "oc-dialog-buttonrow twobuttons");
        attr(form, "action", /*OC*/ctx[3].generateUrl('/'));
        attr(form, "method", "post");
      },
      m: function m(target, anchor) {
        insert(target, form, anchor);
        append(form, div0);
        append(div0, h3);
        append(h3, t0);
        append(div0, t1);
        if (if_block0) if_block0.m(div0, null);
        append(form, t2);
        append(form, div1);
        if (if_block1) if_block1.m(div1, null);
        append(form, t3);
        append(form, div2);
        append(div2, a);
        append(a, t4);
        append(div2, t5);
        if (if_block2) if_block2.m(div2, null);
        if (!mounted) {
          dispose = [listen(a, "click", prevent_default( /*click_handler*/ctx[8])), listen(form, "submit", prevent_default( /*save*/ctx[4]))];
          mounted = true;
        }
      },
      p: function p(ctx, dirty) {
        if (dirty & /*file*/1 && t0_value !== (t0_value = /*file*/ctx[0].name + "")) set_data(t0, t0_value);
        if (! /*loading*/ctx[1]) {
          if (if_block0) {
            if_block0.p(ctx, dirty);
          } else {
            if_block0 = create_if_block_2(ctx);
            if_block0.c();
            if_block0.m(div0, null);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (! /*loading*/ctx[1]) {
          if (if_block1) {
            if_block1.p(ctx, dirty);
          } else {
            if_block1 = create_if_block_1$1(ctx);
            if_block1.c();
            if_block1.m(div1, null);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (dirty & /*file*/1 && a_href_value !== (a_href_value = /*file*/ctx[0].currentUrl)) {
          attr(a, "href", a_href_value);
        }
        if (! /*loading*/ctx[1]) {
          if (if_block2) {
            if_block2.p(ctx, dirty);
          } else {
            if_block2 = create_if_block$1(ctx);
            if_block2.c();
            if_block2.m(div2, null);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }
      },
      d: function d(detaching) {
        if (detaching) detach(form);
        if (if_block0) if_block0.d();
        if (if_block1) if_block1.d();
        if (if_block2) if_block2.d();
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_fragment$1(ctx) {
    var overlay;
    var current;
    overlay = new Overlay({
      props: {
        loading: /*loading*/ctx[1],
        $$slots: {
          default: [create_default_slot]
        },
        $$scope: {
          ctx: ctx
        }
      }
    });
    return {
      c: function c() {
        create_component(overlay.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(overlay, target, anchor);
        current = true;
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];
        var overlay_changes = {};
        if (dirty & /*loading*/2) overlay_changes.loading = /*loading*/ctx[1];
        if (dirty & /*$$scope, file, loading*/1027) {
          overlay_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }
        overlay.$set(overlay_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(overlay.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(overlay.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(overlay, detaching);
      }
    };
  }
  function instance$1($$self, $$props, $$invalidate) {
    var file;
    var loading;
    var t = window.t;
    var OC = window.OC;
    var unsubscribe;
    onMount(function () {
      // Subscribe to changes of the current file
      unsubscribe = currentFile.subscribe(function (fileUpdate) {
        $$invalidate(0, file = fileUpdate);
        if (file && (file.isLoaded || file.isNew)) {
          $$invalidate(1, loading = false);
        }
      });
    });
    onDestroy(function () {
      // Unsubscribe from store to avoid memory leaks
      unsubscribe();
    });
    var save = function save() {
      $$invalidate(1, loading = true);
      if (file.isNew && file.onCreate) {
        file.onCreate(_objectSpread2({}, file));
      } else {
        LinkeditorService.saveAndChangeViewMode(_objectSpread2({}, file));
      }
    };
    function input0_input_handler() {
      file.url = this.value;
      $$invalidate(0, file);
    }
    function input1_change_handler() {
      file.sameWindow = this.checked;
      $$invalidate(0, file);
    }
    function input2_change_handler() {
      file.skipConfirmation = this.checked;
      $$invalidate(0, file);
    }
    var click_handler = function click_handler() {
      viewMode.update(function () {
        return 'none';
      });
    };
    $$invalidate(0, file = FileService.getFileConfig());
    $$invalidate(1, loading = true);
    return [file, loading, t, OC, save, input0_input_handler, input1_change_handler, input2_change_handler, click_handler];
  }
  var Editor = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Editor, _SvelteComponent);
    var _super = _createSuper(Editor);
    function Editor(options) {
      var _this;
      _classCallCheck(this, Editor);
      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
      return _this;
    }
    return _createClass(Editor);
  }(SvelteComponent);

  function create_if_block_1(ctx) {
    var viewer;
    var current;
    viewer = new Viewer({});
    return {
      c: function c() {
        create_component(viewer.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(viewer, target, anchor);
        current = true;
      },
      i: function i(local) {
        if (current) return;
        transition_in(viewer.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(viewer.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(viewer, detaching);
      }
    };
  }

  // (25:0) {#if viewMode === 'edit'}
  function create_if_block(ctx) {
    var editor;
    var current;
    editor = new Editor({});
    return {
      c: function c() {
        create_component(editor.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(editor, target, anchor);
        current = true;
      },
      i: function i(local) {
        if (current) return;
        transition_in(editor.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(editor.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(editor, detaching);
      }
    };
  }
  function create_fragment(ctx) {
    var t;
    var if_block1_anchor;
    var current;
    var if_block0 = /*viewMode*/ctx[0] === 'view' && create_if_block_1();
    var if_block1 = /*viewMode*/ctx[0] === 'edit' && create_if_block();
    return {
      c: function c() {
        if (if_block0) if_block0.c();
        t = space();
        if (if_block1) if_block1.c();
        if_block1_anchor = empty$1();
      },
      m: function m(target, anchor) {
        if (if_block0) if_block0.m(target, anchor);
        insert(target, t, anchor);
        if (if_block1) if_block1.m(target, anchor);
        insert(target, if_block1_anchor, anchor);
        current = true;
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];
        if ( /*viewMode*/ctx[0] === 'view') {
          if (if_block0) {
            if (dirty & /*viewMode*/1) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_1();
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(t.parentNode, t);
          }
        } else if (if_block0) {
          group_outros();
          transition_out(if_block0, 1, 1, function () {
            if_block0 = null;
          });
          check_outros();
        }
        if ( /*viewMode*/ctx[0] === 'edit') {
          if (if_block1) {
            if (dirty & /*viewMode*/1) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block();
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, function () {
            if_block1 = null;
          });
          check_outros();
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(if_block0);
        transition_in(if_block1);
        current = true;
      },
      o: function o(local) {
        transition_out(if_block0);
        transition_out(if_block1);
        current = false;
      },
      d: function d(detaching) {
        if (if_block0) if_block0.d(detaching);
        if (detaching) detach(t);
        if (if_block1) if_block1.d(detaching);
        if (detaching) detach(if_block1_anchor);
      }
    };
  }
  function instance($$self, $$props, $$invalidate) {
    var viewMode$1;
    var unsubscribe;
    onMount(function () {
      // Subscribe to changes of the viewmode
      unsubscribe = viewMode.subscribe(function (mode) {
        $$invalidate(0, viewMode$1 = mode);
      });
    });
    onDestroy(function () {
      // Unsubscribe from store to avoid memory leaks
      unsubscribe();
    });
    $$invalidate(0, viewMode$1 = "");
    return [viewMode$1];
  }
  var App = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(App, _SvelteComponent);
    var _super = _createSuper(App);
    function App(options) {
      var _this;
      _classCallCheck(this, App);
      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
      return _this;
    }
    return _createClass(App);
  }(SvelteComponent);

  var components = [];
  components.push(new App({
    target: document.body,
    props: {}
  }));
  LinkeditorService.registerFileActions();

})();
