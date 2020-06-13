(function () {
  'use strict';

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
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

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
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
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
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
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
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
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
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
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
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
        it = o[Symbol.iterator]();
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

  function noop() { }
  function assign(tar, src) {
      // @ts-ignore
      for (const k in src)
          tar[k] = src[k];
      return tar;
  }
  function run(fn) {
      return fn();
  }
  function blank_object() {
      return Object.create(null);
  }
  function run_all(fns) {
      fns.forEach(run);
  }
  function is_function(thing) {
      return typeof thing === 'function';
  }
  function safe_not_equal(a, b) {
      return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
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
  function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
      const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
      if (slot_changes) {
          const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
          slot.p(slot_context, slot_changes);
      }
  }

  function append(target, node) {
      target.appendChild(node);
  }
  function insert(target, node, anchor) {
      target.insertBefore(node, anchor || null);
  }
  function detach(node) {
      node.parentNode.removeChild(node);
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
  function empty() {
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
      if (text.data !== data)
          text.data = data;
  }
  function set_input_value(input, value) {
      input.value = value == null ? '' : value;
  }
  function set_style(node, key, value, important) {
      node.style.setProperty(key, value, important ? 'important' : '');
  }

  let current_component;
  function set_current_component(component) {
      current_component = component;
  }
  function get_current_component() {
      if (!current_component)
          throw new Error(`Function called outside component initialization`);
      return current_component;
  }
  function onMount(fn) {
      get_current_component().$$.on_mount.push(fn);
  }
  function onDestroy(fn) {
      get_current_component().$$.on_destroy.push(fn);
  }

  const dirty_components = [];
  const binding_callbacks = [];
  const render_callbacks = [];
  const flush_callbacks = [];
  const resolved_promise = Promise.resolve();
  let update_scheduled = false;
  function schedule_update() {
      if (!update_scheduled) {
          update_scheduled = true;
          resolved_promise.then(flush);
      }
  }
  function add_render_callback(fn) {
      render_callbacks.push(fn);
  }
  let flushing = false;
  const seen_callbacks = new Set();
  function flush() {
      if (flushing)
          return;
      flushing = true;
      do {
          // first, call beforeUpdate functions
          // and update components
          for (let i = 0; i < dirty_components.length; i += 1) {
              const component = dirty_components[i];
              set_current_component(component);
              update(component.$$);
          }
          dirty_components.length = 0;
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
      flushing = false;
      seen_callbacks.clear();
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
  }
  function create_component(block) {
      block && block.c();
  }
  function mount_component(component, target, anchor) {
      const { fragment, on_mount, on_destroy, after_update } = component.$$;
      fragment && fragment.m(target, anchor);
      // onMount happens before the initial afterUpdate
      add_render_callback(() => {
          const new_on_destroy = on_mount.map(run).filter(is_function);
          if (on_destroy) {
              on_destroy.push(...new_on_destroy);
          }
          else {
              // Edge case - component was destroyed immediately,
              // most likely as a result of a binding initialising
              run_all(new_on_destroy);
          }
          component.$$.on_mount = [];
      });
      after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
      const $$ = component.$$;
      if ($$.fragment !== null) {
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
  function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
      const parent_component = current_component;
      set_current_component(component);
      const prop_values = options.props || {};
      const $$ = component.$$ = {
          fragment: null,
          ctx: null,
          // state
          props,
          update: noop,
          not_equal,
          bound: blank_object(),
          // lifecycle
          on_mount: [],
          on_destroy: [],
          before_update: [],
          after_update: [],
          context: new Map(parent_component ? parent_component.$$.context : []),
          // everything else
          callbacks: blank_object(),
          dirty
      };
      let ready = false;
      $$.ctx = instance
          ? instance(component, prop_values, (i, ret, ...rest) => {
              const value = rest.length ? rest[0] : ret;
              if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                  if ($$.bound[i])
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
          mount_component(component, options.target, options.anchor);
          flush();
      }
      set_current_component(parent_component);
  }
  class SvelteComponent {
      $destroy() {
          destroy_component(this, 1);
          this.$destroy = noop;
      }
      $on(type, callback) {
          const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
          callbacks.push(callback);
          return () => {
              const index = callbacks.indexOf(callback);
              if (index !== -1)
                  callbacks.splice(index, 1);
          };
      }
      $set() {
          // overridden by instance, if it has props
      }
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

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

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        prototype[method] = function (arg) {
          return this._invoke(method, arg);
        };
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;

        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function () {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
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

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function (record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports );

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
  });

  function create_fragment(ctx) {
    var div0;
    var t;
    var div1;
    var div1_class_value;
    var current;
    var default_slot_template =
    /*$$slots*/
    ctx[2].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[1], null);
    return {
      c() {
        div0 = element("div");
        t = space();
        div1 = element("div");
        if (default_slot) default_slot.c();
        attr(div0, "class", "oc-dialog-dim");
        attr(div1, "class", div1_class_value = "oc-dialog ".concat(
        /*loading*/
        ctx[0] ? "icon-loading" : ""));
        set_style(div1, "position", "fixed");
      },

      m(target, anchor) {
        insert(target, div0, anchor);
        insert(target, t, anchor);
        insert(target, div1, anchor);

        if (default_slot) {
          default_slot.m(div1, null);
        }

        current = true;
      },

      p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (default_slot) {
          if (default_slot.p && dirty &
          /*$$scope*/
          2) {
            update_slot(default_slot, default_slot_template, ctx,
            /*$$scope*/
            ctx[1], dirty, null, null);
          }
        }

        if (!current || dirty &
        /*loading*/
        1 && div1_class_value !== (div1_class_value = "oc-dialog ".concat(
        /*loading*/
        ctx[0] ? "icon-loading" : ""))) {
          attr(div1, "class", div1_class_value);
        }
      },

      i(local) {
        if (current) return;
        transition_in(default_slot, local);
        current = true;
      },

      o(local) {
        transition_out(default_slot, local);
        current = false;
      },

      d(detaching) {
        if (detaching) detach(div0);
        if (detaching) detach(t);
        if (detaching) detach(div1);
        if (default_slot) default_slot.d(detaching);
      }

    };
  }

  function instance($$self, $$props, $$invalidate) {
    var _$$props$loading = $$props.loading,
        loading = _$$props$loading === void 0 ? false : _$$props$loading;
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;

    $$self.$set = function ($$props) {
      if ("loading" in $$props) $$invalidate(0, loading = $$props.loading);
      if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
    };

    return [loading, $$scope, $$slots];
  }

  var Overlay = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Overlay, _SvelteComponent);

    var _super = _createSuper(Overlay);

    function Overlay(options) {
      var _this;

      _classCallCheck(this, Overlay);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
        loading: 0
      });
      return _this;
    }

    return Overlay;
  }(SvelteComponent);

  const subscriber_queue = [];
  /**
   * Create a `Writable` store that allows both updating and reading by subscription.
   * @param {*=}value initial value
   * @param {StartStopNotifier=}start start and stop notifications for subscriptions
   */
  function writable(value, start = noop) {
      let stop;
      const subscribers = [];
      function set(new_value) {
          if (safe_not_equal(value, new_value)) {
              value = new_value;
              if (stop) { // store is ready
                  const run_queue = !subscriber_queue.length;
                  for (let i = 0; i < subscribers.length; i += 1) {
                      const s = subscribers[i];
                      s[1]();
                      subscriber_queue.push(s, value);
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
      function subscribe(run, invalidate = noop) {
          const subscriber = [run, invalidate];
          subscribers.push(subscriber);
          if (subscribers.length === 1) {
              stop = start(set) || noop;
          }
          run(value);
          return () => {
              const index = subscribers.indexOf(subscriber);
              if (index !== -1) {
                  subscribers.splice(index, 1);
              }
              if (subscribers.length === 0) {
                  stop();
                  stop = null;
              }
          };
      }
      return { set, update, subscribe };
  }

  var check = function (it) {
    return it && it.Math == Math && it;
  }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


  var global_1 = // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func
  Function('return this')();

  var fails = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty


  var descriptors = !fails(function () {
    return Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      }
    })[1] != 7;
  });

  var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

  var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
    1: 2
  }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable

  var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
  } : nativePropertyIsEnumerable;

  var objectPropertyIsEnumerable = {
  	f: f
  };

  var createPropertyDescriptor = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var toString = {}.toString;

  var classofRaw = function (it) {
    return toString.call(it).slice(8, -1);
  };

  var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
  } : Object;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings




  var toIndexedObject = function (it) {
    return indexedObject(requireObjectCoercible(it));
  };

  var isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  // `ToPrimitive` abstract operation
  // https://tc39.github.io/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string


  var toPrimitive = function (input, PREFERRED_STRING) {
    if (!isObject(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var hasOwnProperty = {}.hasOwnProperty;

  var has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var document$1 = global_1.document; // typeof document.createElement is 'object' in old IE

  var EXISTS = isObject(document$1) && isObject(document$1.createElement);

  var documentCreateElement = function (it) {
    return EXISTS ? document$1.createElement(it) : {};
  };

  // Thank's IE8 for his funny defineProperty


  var ie8DomDefine = !descriptors && !fails(function () {
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });

  var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

  var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (ie8DomDefine) try {
      return nativeGetOwnPropertyDescriptor(O, P);
    } catch (error) {
      /* empty */
    }
    if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
  };

  var objectGetOwnPropertyDescriptor = {
  	f: f$1
  };

  var anObject = function (it) {
    if (!isObject(it)) {
      throw TypeError(String(it) + ' is not an object');
    }

    return it;
  };

  var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty

  var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return nativeDefineProperty(O, P, Attributes);
    } catch (error) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var objectDefineProperty = {
  	f: f$2
  };

  var createNonEnumerableProperty = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var setGlobal = function (key, value) {
    try {
      createNonEnumerableProperty(global_1, key, value);
    } catch (error) {
      global_1[key] = value;
    }

    return value;
  };

  var SHARED = '__core-js_shared__';
  var store = global_1[SHARED] || setGlobal(SHARED, {});
  var sharedStore = store;

  var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

  if (typeof sharedStore.inspectSource != 'function') {
    sharedStore.inspectSource = function (it) {
      return functionToString.call(it);
    };
  }

  var inspectSource = sharedStore.inspectSource;

  var WeakMap = global_1.WeakMap;
  var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

  var shared = createCommonjsModule(function (module) {
  (module.exports = function (key, value) {
    return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.6.5',
    mode:  'global',
    copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
  });
  });

  var id = 0;
  var postfix = Math.random();

  var uid = function (key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
  };

  var keys = shared('keys');

  var sharedKey = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys = {};

  var WeakMap$1 = global_1.WeakMap;
  var set, get, has$1;

  var enforce = function (it) {
    return has$1(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;

      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      }

      return state;
    };
  };

  if (nativeWeakMap) {
    var store$1 = new WeakMap$1();
    var wmget = store$1.get;
    var wmhas = store$1.has;
    var wmset = store$1.set;

    set = function (it, metadata) {
      wmset.call(store$1, it, metadata);
      return metadata;
    };

    get = function (it) {
      return wmget.call(store$1, it) || {};
    };

    has$1 = function (it) {
      return wmhas.call(store$1, it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;

    set = function (it, metadata) {
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };

    get = function (it) {
      return has(it, STATE) ? it[STATE] : {};
    };

    has$1 = function (it) {
      return has(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has$1,
    enforce: enforce,
    getterFor: getterFor
  };

  var redefine = createCommonjsModule(function (module) {
  var getInternalState = internalState.get;
  var enforceInternalState = internalState.enforce;
  var TEMPLATE = String(String).split('String');
  (module.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;

    if (typeof value == 'function') {
      if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
      enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }

    if (O === global_1) {
      if (simple) O[key] = value;else setGlobal(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }

    if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
  });
  });

  var path = global_1;

  var aFunction = function (variable) {
    return typeof variable == 'function' ? variable : undefined;
  };

  var getBuiltIn = function (namespace, method) {
    return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace]) : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
  };

  var ceil = Math.ceil;
  var floor = Math.floor; // `ToInteger` abstract operation
  // https://tc39.github.io/ecma262/#sec-tointeger

  var toInteger = function (argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
  };

  var min = Math.min; // `ToLength` abstract operation
  // https://tc39.github.io/ecma262/#sec-tolength

  var toLength = function (argument) {
    return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min; // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

  var toAbsoluteIndex = function (index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
  };

  // `Array.prototype.{ indexOf, includes }` methods implementation


  var createMethod = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
  };

  var indexOf = arrayIncludes.indexOf;



  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key); // Don't enum bug & hidden keys


    while (names.length > i) if (has(O, key = names[i++])) {
      ~indexOf(result, key) || result.push(key);
    }

    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

  var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames

  var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys$1);
  };

  var objectGetOwnPropertyNames = {
  	f: f$3
  };

  var f$4 = Object.getOwnPropertySymbols;

  var objectGetOwnPropertySymbols = {
  	f: f$4
  };

  // all object keys, includes non-enumerable and symbols


  var ownKeys$1 = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties = function (target, source) {
    var keys = ownKeys$1(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var replacement = /#|\.prototype\./;

  var isForced = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
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
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */


  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;

    if (GLOBAL) {
      target = global_1;
    } else if (STATIC) {
      target = global_1[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global_1[TARGET] || {}).prototype;
    }

    if (target) for (key in source) {
      sourceProperty = source[key];

      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];

      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      } // add a flag to not completely full polyfills


      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty(sourceProperty, 'sham', true);
      } // extend global


      redefine(target, key, sourceProperty, options);
    }
  };

  // `IsArray` abstract operation
  // https://tc39.github.io/ecma262/#sec-isarray


  var isArray = Array.isArray || function isArray(arg) {
    return classofRaw(arg) == 'Array';
  };

  // `ToObject` abstract operation
  // https://tc39.github.io/ecma262/#sec-toobject


  var toObject = function (argument) {
    return Object(requireObjectCoercible(argument));
  };

  var createProperty = function (object, key, value) {
    var propertyKey = toPrimitive(key);
    if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
  };

  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
    // Chrome 38 Symbol has incorrect toString conversion
    // eslint-disable-next-line no-undef
    return !String(Symbol());
  });

  var useSymbolAsUid = nativeSymbol // eslint-disable-next-line no-undef
  && !Symbol.sham // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';

  var WellKnownSymbolsStore = shared('wks');
  var Symbol$1 = global_1.Symbol;
  var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

  var wellKnownSymbol = function (name) {
    if (!has(WellKnownSymbolsStore, name)) {
      if (nativeSymbol && has(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name];else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }

    return WellKnownSymbolsStore[name];
  };

  var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
  // https://tc39.github.io/ecma262/#sec-arrayspeciescreate

  var arraySpeciesCreate = function (originalArray, length) {
    var C;

    if (isArray(originalArray)) {
      C = originalArray.constructor; // cross-realm fallback

      if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
        C = C[SPECIES];
        if (C === null) C = undefined;
      }
    }

    return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
  };

  var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

  var process = global_1.process;
  var versions = process && process.versions;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    version = match[0] + match[1];
  } else if (engineUserAgent) {
    match = engineUserAgent.match(/Edge\/(\d+)/);

    if (!match || match[1] >= 74) {
      match = engineUserAgent.match(/Chrome\/(\d+)/);
      if (match) version = match[1];
    }
  }

  var engineV8Version = version && +version;

  var SPECIES$1 = wellKnownSymbol('species');

  var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return engineV8Version >= 51 || !fails(function () {
      var array = [];
      var constructor = array.constructor = {};

      constructor[SPECIES$1] = function () {
        return {
          foo: 1
        };
      };

      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679

  var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });
  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

  var isConcatSpreadable = function (O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };

  var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species

  _export({
    target: 'Array',
    proto: true,
    forced: FORCED
  }, {
    concat: function concat(arg) {
      // eslint-disable-line no-unused-vars
      var O = toObject(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;

      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];

        if (isConcatSpreadable(E)) {
          len = toLength(E.length);
          if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

          for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
        } else {
          if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          createProperty(A, n++, E);
        }
      }

      A.length = n;
      return A;
    }
  });

  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  var test = {};
  test[TO_STRING_TAG] = 'z';
  var toStringTagSupport = String(test) === '[object z]';

  var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag'); // ES3 wrong here

  var CORRECT_ARGUMENTS = classofRaw(function () {
    return arguments;
  }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) {
      /* empty */
    }
  }; // getting tag from ES6+ `Object.prototype.toString`


  var classof = toStringTagSupport ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
  };

  // `Object.prototype.toString` method implementation
  // https://tc39.github.io/ecma262/#sec-object.prototype.tostring


  var objectToString = toStringTagSupport ? {}.toString : function toString() {
    return '[object ' + classof(this) + ']';
  };

  // `Object.prototype.toString` method
  // https://tc39.github.io/ecma262/#sec-object.prototype.tostring


  if (!toStringTagSupport) {
    redefine(Object.prototype, 'toString', objectToString, {
      unsafe: true
    });
  }

  var nativePromiseConstructor = global_1.Promise;

  var redefineAll = function (target, src, options) {
    for (var key in src) redefine(target, key, src[key], options);

    return target;
  };

  var defineProperty = objectDefineProperty.f;





  var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');

  var setToStringTag = function (it, TAG, STATIC) {
    if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG$2)) {
      defineProperty(it, TO_STRING_TAG$2, {
        configurable: true,
        value: TAG
      });
    }
  };

  var SPECIES$2 = wellKnownSymbol('species');

  var setSpecies = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    var defineProperty = objectDefineProperty.f;

    if (descriptors && Constructor && !Constructor[SPECIES$2]) {
      defineProperty(Constructor, SPECIES$2, {
        configurable: true,
        get: function () {
          return this;
        }
      });
    }
  };

  var aFunction$1 = function (it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    }

    return it;
  };

  var anInstance = function (it, Constructor, name) {
    if (!(it instanceof Constructor)) {
      throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
    }

    return it;
  };

  var iterators = {};

  var ITERATOR = wellKnownSymbol('iterator');
  var ArrayPrototype = Array.prototype; // check on default Array iterator

  var isArrayIteratorMethod = function (it) {
    return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR] === it);
  };

  // optional / simple context binding


  var functionBindContext = function (fn, that, length) {
    aFunction$1(fn);
    if (that === undefined) return fn;

    switch (length) {
      case 0:
        return function () {
          return fn.call(that);
        };

      case 1:
        return function (a) {
          return fn.call(that, a);
        };

      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };

      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }

    return function ()
    /* ...args */
    {
      return fn.apply(that, arguments);
    };
  };

  var ITERATOR$1 = wellKnownSymbol('iterator');

  var getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$1] || it['@@iterator'] || iterators[classof(it)];
  };

  // call something on iterator step with safe closing on error


  var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
    } catch (error) {
      var returnMethod = iterator['return'];
      if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
      throw error;
    }
  };

  var iterate_1 = createCommonjsModule(function (module) {
  var Result = function (stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
    var boundFunction = functionBindContext(fn, that, AS_ENTRIES ? 2 : 1);
    var iterator, iterFn, index, length, result, next, step;

    if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod(iterable);
      if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

      if (isArrayIteratorMethod(iterFn)) {
        for (index = 0, length = toLength(iterable.length); length > index; index++) {
          result = AS_ENTRIES ? boundFunction(anObject(step = iterable[index])[0], step[1]) : boundFunction(iterable[index]);
          if (result && result instanceof Result) return result;
        }

        return new Result(false);
      }

      iterator = iterFn.call(iterable);
    }

    next = iterator.next;

    while (!(step = next.call(iterator)).done) {
      result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
      if (typeof result == 'object' && result && result instanceof Result) return result;
    }

    return new Result(false);
  };

  iterate.stop = function (result) {
    return new Result(true, result);
  };
  });

  var ITERATOR$2 = wellKnownSymbol('iterator');
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

    iteratorWithReturn[ITERATOR$2] = function () {
      return this;
    }; // eslint-disable-next-line no-throw-literal


    Array.from(iteratorWithReturn, function () {
      throw 2;
    });
  } catch (error) {
    /* empty */
  }

  var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;

    try {
      var object = {};

      object[ITERATOR$2] = function () {
        return {
          next: function () {
            return {
              done: ITERATION_SUPPORT = true
            };
          }
        };
      };

      exec(object);
    } catch (error) {
      /* empty */
    }

    return ITERATION_SUPPORT;
  };

  var SPECIES$3 = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
  // https://tc39.github.io/ecma262/#sec-speciesconstructor

  var speciesConstructor = function (O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES$3]) == undefined ? defaultConstructor : aFunction$1(S);
  };

  var html = getBuiltIn('document', 'documentElement');

  var engineIsIos = /(iphone|ipod|ipad).*applewebkit/i.test(engineUserAgent);

  var location = global_1.location;
  var set$1 = global_1.setImmediate;
  var clear = global_1.clearImmediate;
  var process$1 = global_1.process;
  var MessageChannel = global_1.MessageChannel;
  var Dispatch = global_1.Dispatch;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var defer, channel, port;

  var run$1 = function (id) {
    // eslint-disable-next-line no-prototype-builtins
    if (queue.hasOwnProperty(id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };

  var runner = function (id) {
    return function () {
      run$1(id);
    };
  };

  var listener = function (event) {
    run$1(event.data);
  };

  var post = function (id) {
    // old engines have not location.origin
    global_1.postMessage(id + '', location.protocol + '//' + location.host);
  }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


  if (!set$1 || !clear) {
    set$1 = function setImmediate(fn) {
      var args = [];
      var i = 1;

      while (arguments.length > i) args.push(arguments[i++]);

      queue[++counter] = function () {
        // eslint-disable-next-line no-new-func
        (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
      };

      defer(counter);
      return counter;
    };

    clear = function clearImmediate(id) {
      delete queue[id];
    }; // Node.js 0.8-


    if (classofRaw(process$1) == 'process') {
      defer = function (id) {
        process$1.nextTick(runner(id));
      }; // Sphere (JS game engine) Dispatch API

    } else if (Dispatch && Dispatch.now) {
      defer = function (id) {
        Dispatch.now(runner(id));
      }; // Browsers with MessageChannel, includes WebWorkers
      // except iOS - https://github.com/zloirock/core-js/issues/624

    } else if (MessageChannel && !engineIsIos) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = functionBindContext(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global_1.addEventListener && typeof postMessage == 'function' && !global_1.importScripts && !fails(post) && location.protocol !== 'file:') {
      defer = post;
      global_1.addEventListener('message', listener, false); // IE8-
    } else if (ONREADYSTATECHANGE in documentCreateElement('script')) {
      defer = function (id) {
        html.appendChild(documentCreateElement('script'))[ONREADYSTATECHANGE] = function () {
          html.removeChild(this);
          run$1(id);
        };
      }; // Rest old browsers

    } else {
      defer = function (id) {
        setTimeout(runner(id), 0);
      };
    }
  }

  var task = {
    set: set$1,
    clear: clear
  };

  var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;



  var macrotask = task.set;



  var MutationObserver = global_1.MutationObserver || global_1.WebKitMutationObserver;
  var process$2 = global_1.process;
  var Promise$1 = global_1.Promise;
  var IS_NODE = classofRaw(process$2) == 'process'; // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`

  var queueMicrotaskDescriptor = getOwnPropertyDescriptor$2(global_1, 'queueMicrotask');
  var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
  var flush$1, head, last, notify, toggle, node, promise, then; // modern engines have queueMicrotask method

  if (!queueMicrotask) {
    flush$1 = function () {
      var parent, fn;
      if (IS_NODE && (parent = process$2.domain)) parent.exit();

      while (head) {
        fn = head.fn;
        head = head.next;

        try {
          fn();
        } catch (error) {
          if (head) notify();else last = undefined;
          throw error;
        }
      }

      last = undefined;
      if (parent) parent.enter();
    }; // Node.js


    if (IS_NODE) {
      notify = function () {
        process$2.nextTick(flush$1);
      }; // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339

    } else if (MutationObserver && !engineIsIos) {
      toggle = true;
      node = document.createTextNode('');
      new MutationObserver(flush$1).observe(node, {
        characterData: true
      });

      notify = function () {
        node.data = toggle = !toggle;
      }; // environments with maybe non-completely correct, but existent Promise

    } else if (Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      promise = Promise$1.resolve(undefined);
      then = promise.then;

      notify = function () {
        then.call(promise, flush$1);
      }; // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout

    } else {
      notify = function () {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(global_1, flush$1);
      };
    }
  }

  var microtask = queueMicrotask || function (fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if (last) last.next = task;

    if (!head) {
      head = task;
      notify();
    }

    last = task;
  };

  var PromiseCapability = function (C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aFunction$1(resolve);
    this.reject = aFunction$1(reject);
  }; // 25.4.1.5 NewPromiseCapability(C)


  var f$5 = function (C) {
    return new PromiseCapability(C);
  };

  var newPromiseCapability = {
  	f: f$5
  };

  var promiseResolve = function (C, x) {
    anObject(C);
    if (isObject(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var hostReportErrors = function (a, b) {
    var console = global_1.console;

    if (console && console.error) {
      arguments.length === 1 ? console.error(a) : console.error(a, b);
    }
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

  var task$1 = task.set;



















  var SPECIES$4 = wellKnownSymbol('species');
  var PROMISE = 'Promise';
  var getInternalState = internalState.get;
  var setInternalState = internalState.set;
  var getInternalPromiseState = internalState.getterFor(PROMISE);
  var PromiseConstructor = nativePromiseConstructor;
  var TypeError$1 = global_1.TypeError;
  var document$2 = global_1.document;
  var process$3 = global_1.process;
  var $fetch = getBuiltIn('fetch');
  var newPromiseCapability$1 = newPromiseCapability.f;
  var newGenericPromiseCapability = newPromiseCapability$1;
  var IS_NODE$1 = classofRaw(process$3) == 'process';
  var DISPATCH_EVENT = !!(document$2 && document$2.createEvent && global_1.dispatchEvent);
  var UNHANDLED_REJECTION = 'unhandledrejection';
  var REJECTION_HANDLED = 'rejectionhandled';
  var PENDING = 0;
  var FULFILLED = 1;
  var REJECTED = 2;
  var HANDLED = 1;
  var UNHANDLED = 2;
  var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
  var FORCED$1 = isForced_1(PROMISE, function () {
    var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);

    if (!GLOBAL_CORE_JS_PROMISE) {
      // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // We can't detect it synchronously, so just check versions
      if (engineV8Version === 66) return true; // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test

      if (!IS_NODE$1 && typeof PromiseRejectionEvent != 'function') return true;
    } // We need Promise#finally in the pure version for preventing prototype pollution
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679

    if (engineV8Version >= 51 && /native code/.test(PromiseConstructor)) return false; // Detect correctness of subclassing with @@species support

    var promise = PromiseConstructor.resolve(1);

    var FakePromise = function (exec) {
      exec(function () {
        /* empty */
      }, function () {
        /* empty */
      });
    };

    var constructor = promise.constructor = {};
    constructor[SPECIES$4] = FakePromise;
    return !(promise.then(function () {
      /* empty */
    }) instanceof FakePromise);
  });
  var INCORRECT_ITERATION = FORCED$1 || !checkCorrectnessOfIteration(function (iterable) {
    PromiseConstructor.all(iterable)['catch'](function () {
      /* empty */
    });
  }); // helpers

  var isThenable = function (it) {
    var then;
    return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
  };

  var notify$1 = function (promise, state, isReject) {
    if (state.notified) return;
    state.notified = true;
    var chain = state.reactions;
    microtask(function () {
      var value = state.value;
      var ok = state.state == FULFILLED;
      var index = 0; // variable length - can't use forEach

      while (chain.length > index) {
        var reaction = chain[index++];
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then, exited;

        try {
          if (handler) {
            if (!ok) {
              if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
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
              then.call(result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (error) {
          if (domain && !exited) domain.exit();
          reject(error);
        }
      }

      state.reactions = [];
      state.notified = false;
      if (isReject && !state.rejection) onUnhandled(promise, state);
    });
  };

  var dispatchEvent = function (name, promise, reason) {
    var event, handler;

    if (DISPATCH_EVENT) {
      event = document$2.createEvent('Event');
      event.promise = promise;
      event.reason = reason;
      event.initEvent(name, false, true);
      global_1.dispatchEvent(event);
    } else event = {
      promise: promise,
      reason: reason
    };

    if (handler = global_1['on' + name]) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  };

  var onUnhandled = function (promise, state) {
    task$1.call(global_1, function () {
      var value = state.value;
      var IS_UNHANDLED = isUnhandled(state);
      var result;

      if (IS_UNHANDLED) {
        result = perform(function () {
          if (IS_NODE$1) {
            process$3.emit('unhandledRejection', value, promise);
          } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
        }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

        state.rejection = IS_NODE$1 || isUnhandled(state) ? UNHANDLED : HANDLED;
        if (result.error) throw result.value;
      }
    });
  };

  var isUnhandled = function (state) {
    return state.rejection !== HANDLED && !state.parent;
  };

  var onHandleUnhandled = function (promise, state) {
    task$1.call(global_1, function () {
      if (IS_NODE$1) {
        process$3.emit('rejectionHandled', promise);
      } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
  };

  var bind = function (fn, promise, state, unwrap) {
    return function (value) {
      fn(promise, state, value, unwrap);
    };
  };

  var internalReject = function (promise, state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify$1(promise, state, true);
  };

  var internalResolve = function (promise, state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;

    try {
      if (promise === value) throw TypeError$1("Promise can't be resolved itself");
      var then = isThenable(value);

      if (then) {
        microtask(function () {
          var wrapper = {
            done: false
          };

          try {
            then.call(value, bind(internalResolve, promise, wrapper, state), bind(internalReject, promise, wrapper, state));
          } catch (error) {
            internalReject(promise, wrapper, error, state);
          }
        });
      } else {
        state.value = value;
        state.state = FULFILLED;
        notify$1(promise, state, false);
      }
    } catch (error) {
      internalReject(promise, {
        done: false
      }, error, state);
    }
  }; // constructor polyfill


  if (FORCED$1) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise(executor) {
      anInstance(this, PromiseConstructor, PROMISE);
      aFunction$1(executor);
      Internal.call(this);
      var state = getInternalState(this);

      try {
        executor(bind(internalResolve, this, state), bind(internalReject, this, state));
      } catch (error) {
        internalReject(this, state, error);
      }
    }; // eslint-disable-next-line no-unused-vars


    Internal = function Promise(executor) {
      setInternalState(this, {
        type: PROMISE,
        done: false,
        notified: false,
        parent: false,
        reactions: [],
        rejection: false,
        state: PENDING,
        value: undefined
      });
    };

    Internal.prototype = redefineAll(PromiseConstructor.prototype, {
      // `Promise.prototype.then` method
      // https://tc39.github.io/ecma262/#sec-promise.prototype.then
      then: function then(onFulfilled, onRejected) {
        var state = getInternalPromiseState(this);
        var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = IS_NODE$1 ? process$3.domain : undefined;
        state.parent = true;
        state.reactions.push(reaction);
        if (state.state != PENDING) notify$1(this, state, false);
        return reaction.promise;
      },
      // `Promise.prototype.catch` method
      // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
      'catch': function (onRejected) {
        return this.then(undefined, onRejected);
      }
    });

    OwnPromiseCapability = function () {
      var promise = new Internal();
      var state = getInternalState(promise);
      this.promise = promise;
      this.resolve = bind(internalResolve, promise, state);
      this.reject = bind(internalReject, promise, state);
    };

    newPromiseCapability.f = newPromiseCapability$1 = function (C) {
      return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };

    if ( typeof nativePromiseConstructor == 'function') {
      nativeThen = nativePromiseConstructor.prototype.then; // wrap native Promise#then for native async functions

      redefine(nativePromiseConstructor.prototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          nativeThen.call(that, resolve, reject);
        }).then(onFulfilled, onRejected); // https://github.com/zloirock/core-js/issues/640
      }, {
        unsafe: true
      }); // wrap fetch result

      if (typeof $fetch == 'function') _export({
        global: true,
        enumerable: true,
        forced: true
      }, {
        // eslint-disable-next-line no-unused-vars
        fetch: function fetch(input
        /* , init */
        ) {
          return promiseResolve(PromiseConstructor, $fetch.apply(global_1, arguments));
        }
      });
    }
  }

  _export({
    global: true,
    wrap: true,
    forced: FORCED$1
  }, {
    Promise: PromiseConstructor
  });
  setToStringTag(PromiseConstructor, PROMISE, false);
  setSpecies(PROMISE);
  PromiseWrapper = getBuiltIn(PROMISE); // statics

  _export({
    target: PROMISE,
    stat: true,
    forced: FORCED$1
  }, {
    // `Promise.reject` method
    // https://tc39.github.io/ecma262/#sec-promise.reject
    reject: function reject(r) {
      var capability = newPromiseCapability$1(this);
      capability.reject.call(undefined, r);
      return capability.promise;
    }
  });
  _export({
    target: PROMISE,
    stat: true,
    forced:  FORCED$1
  }, {
    // `Promise.resolve` method
    // https://tc39.github.io/ecma262/#sec-promise.resolve
    resolve: function resolve(x) {
      return promiseResolve( this, x);
    }
  });
  _export({
    target: PROMISE,
    stat: true,
    forced: INCORRECT_ITERATION
  }, {
    // `Promise.all` method
    // https://tc39.github.io/ecma262/#sec-promise.all
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability$1(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aFunction$1(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate_1(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          $promiseResolve.call(C, promise).then(function (value) {
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
    },
    // `Promise.race` method
    // https://tc39.github.io/ecma262/#sec-promise.race
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability$1(C);
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aFunction$1(C.resolve);
        iterate_1(iterable, function (promise) {
          $promiseResolve.call(C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var arrayMethodIsStrict = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails(function () {
      // eslint-disable-next-line no-useless-call,no-throw-literal
      method.call(null, argument || function () {
        throw 1;
      }, 1);
    });
  };

  var defineProperty$1 = Object.defineProperty;
  var cache = {};

  var thrower = function (it) {
    throw it;
  };

  var arrayMethodUsesToLength = function (METHOD_NAME, options) {
    if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
    if (!options) options = {};
    var method = [][METHOD_NAME];
    var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
    var argument0 = has(options, 0) ? options[0] : thrower;
    var argument1 = has(options, 1) ? options[1] : undefined;
    return cache[METHOD_NAME] = !!method && !fails(function () {
      if (ACCESSORS && !descriptors) return true;
      var O = {
        length: -1
      };
      if (ACCESSORS) defineProperty$1(O, 1, {
        enumerable: true,
        get: thrower
      });else O[1] = 1;
      method.call(O, argument0, argument1);
    });
  };

  var $indexOf = arrayIncludes.indexOf;





  var nativeIndexOf = [].indexOf;
  var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
  var STRICT_METHOD = arrayMethodIsStrict('indexOf');
  var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', {
    ACCESSORS: true,
    1: 0
  }); // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof

  _export({
    target: 'Array',
    proto: true,
    forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH
  }, {
    indexOf: function indexOf(searchElement
    /* , fromIndex = 0 */
    ) {
      return NEGATIVE_ZERO // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags


  var regexpFlags = function () {
    var that = anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
  // so we use an intermediate function.


  function RE(s, f) {
    return RegExp(s, f);
  }

  var UNSUPPORTED_Y = fails(function () {
    // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
    var re = RE('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });
  var BROKEN_CARET = fails(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = RE('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });

  var regexpStickyHelpers = {
  	UNSUPPORTED_Y: UNSUPPORTED_Y,
  	BROKEN_CARET: BROKEN_CARET
  };

  var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
  // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
  // which loads this file before patching the method.

  var nativeReplace = String.prototype.replace;
  var patchedExec = nativeExec;

  var UPDATES_LAST_INDEX_WRONG = function () {
    var re1 = /a/;
    var re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  }();

  var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;
      var sticky = UNSUPPORTED_Y$1 && re.sticky;
      var flags = regexpFlags.call(re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = flags.replace('y', '');

        if (flags.indexOf('g') === -1) {
          flags += 'g';
        }

        strCopy = String(str).slice(re.lastIndex); // Support anchored sticky behavior.

        if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        } // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.


        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }

      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
      match = nativeExec.call(sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = match.input.slice(charsAdded);
          match[0] = match[0].slice(charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }

      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  var regexpExec = patchedExec;

  _export({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== regexpExec
  }, {
    exec: regexpExec
  });

  var SPECIES$5 = wellKnownSymbol('species');
  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;

    re.exec = function () {
      var result = [];
      result.groups = {
        a: '7'
      };
      return result;
    };

    return ''.replace(re, '$<a>') !== '7';
  }); // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0

  var REPLACE_KEEPS_$0 = function () {
    return 'a'.replace(/./, '$0') === '$0';
  }();

  var REPLACE = wellKnownSymbol('replace'); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string

  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }

    return false;
  }(); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper


  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
    var re = /(?:)/;
    var originalExec = re.exec;

    re.exec = function () {
      return originalExec.apply(this, arguments);
    };

    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  });

  var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
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
        re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.

        re.constructor = {};

        re.constructor[SPECIES$5] = function () {
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

    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return {
              done: true,
              value: nativeRegExpMethod.call(regexp, str, arg2)
            };
          }

          return {
            done: true,
            value: nativeMethod.call(str, regexp, arg2)
          };
        }

        return {
          done: false
        };
      }, {
        REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
      });
      var stringMethod = methods[0];
      var regexMethod = methods[1];
      redefine(String.prototype, KEY, stringMethod);
      redefine(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) {
        return regexMethod.call(string, this, arg);
      } // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) {
        return regexMethod.call(string, this);
      });
    }

    if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
  };

  // `String.prototype.{ codePointAt, at }` methods implementation


  var createMethod$1 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = String(requireObjectCoercible($this));
      var position = toInteger(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = S.charCodeAt(position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$1(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$1(true)
  };

  var charAt = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
  // https://tc39.github.io/ecma262/#sec-advancestringindex


  var advanceStringIndex = function (S, index, unicode) {
    return index + (unicode ? charAt(S, index).length : 1);
  };

  // `RegExpExec` abstract operation
  // https://tc39.github.io/ecma262/#sec-regexpexec


  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;

    if (typeof exec === 'function') {
      var result = exec.call(R, S);

      if (typeof result !== 'object') {
        throw TypeError('RegExp exec method returned something other than an Object or null');
      }

      return result;
    }

    if (classofRaw(R) !== 'RegExp') {
      throw TypeError('RegExp#exec called on incompatible receiver');
    }

    return regexpExec.call(R, S);
  };

  // @@match logic


  fixRegexpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
    return [// `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    }, // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regexpExecAbstract(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;

      while ((result = regexpExecAbstract(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }

      return n === 0 ? null : A;
    }];
  });

  var max$1 = Math.max;
  var min$2 = Math.min;
  var floor$1 = Math.floor;
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  }; // @@replace logic


  fixRegexpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
    var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
    var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
    return [// `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
    }, // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0 || typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;

      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];

      while (true) {
        var result = regexpExecAbstract(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;

      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max$1(min$2(toInteger(result.index), S.length), 0);
        var captures = []; // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));

        var namedCaptures = result.groups;

        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }

        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + S.slice(nextSourcePosition);
    }]; // https://tc39.github.io/ecma262/#sec-getsubstitution

    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

      if (namedCaptures !== undefined) {
        namedCaptures = toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }

      return nativeReplace.call(replacement, symbols, function (match, ch) {
        var capture;

        switch (ch.charAt(0)) {
          case '$':
            return '$';

          case '&':
            return matched;

          case '`':
            return str.slice(0, position);

          case "'":
            return str.slice(tailPos);

          case '<':
            capture = namedCaptures[ch.slice(1, -1)];
            break;

          default:
            // \d\d?
            var n = +ch;
            if (n === 0) return match;

            if (n > m) {
              var f = floor$1(n / 10);
              if (f === 0) return match;
              if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
              return match;
            }

            capture = captures[n - 1];
        }

        return capture === undefined ? '' : capture;
      });
    }
  });

  /**
  /*
  /* from https://github.com/braintree/sanitize-url,
  /* assumed MIT license
  /*
  **/
  var invalidPrototcolRegex = /^(%20|\s)*(javascript|data)/im;
  var ctrlCharactersRegex = /[^\x20-\x7E]/gim;
  var urlSchemeRegex = /^([^:]+):/gm;
  var relativeFirstCharacters = [".", "/"];
  function isRelativeUrl(url) {
    return relativeFirstCharacters.indexOf(url[0]) > -1;
  }
  function sanitizeUrl(url) {
    var urlScheme, urlSchemeParseResults;
    var sanitizedUrl = url.replace(ctrlCharactersRegex, "");

    if (isRelativeUrl(sanitizedUrl)) {
      return sanitizedUrl;
    }

    urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);

    if (!urlSchemeParseResults) {
      return "about:blank";
    }

    urlScheme = urlSchemeParseResults[0];

    if (invalidPrototcolRegex.test(urlScheme)) {
      return "about:blank";
    }

    return sanitizedUrl;
  }

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
          url: url ? sanitizeUrl(url) : "",
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
        var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _ref2,
              fileName,
              dir,
              result,
              _args = arguments;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _ref2 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, fileName = _ref2.fileName, dir = _ref2.dir;
                  _context.next = 3;
                  return window.fetch("".concat(window.OC.generateUrl("/apps/files_linkeditor/ajax/loadfile"), "?filename=").concat(encodeURIComponent(fileName), "&dir=").concat(encodeURIComponent(dir)), {
                    method: "GET",
                    headers: {
                      requesttoken: window.OC.requestToken
                    }
                  });

                case 3:
                  result = _context.sent;

                  if (!(result && result.ok)) {
                    _context.next = 8;
                    break;
                  }

                  _context.next = 7;
                  return result.json();

                case 7:
                  return _context.abrupt("return", _context.sent);

                case 8:
                  window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function load() {
          return _load.apply(this, arguments);
        }

        return load;
      }()
    }, {
      key: "loadPublic",
      value: function () {
        var _loadPublic = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var _ref3,
              downloadUrl,
              result,
              _args2 = arguments;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _ref3 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, downloadUrl = _ref3.downloadUrl;
                  _context2.next = 3;
                  return window.fetch(downloadUrl, {
                    method: "GET",
                    headers: {
                      requesttoken: window.OC.requestToken
                    }
                  });

                case 3:
                  result = _context2.sent;

                  if (!(result && result.ok)) {
                    _context2.next = 9;
                    break;
                  }

                  _context2.next = 7;
                  return result.text();

                case 7:
                  _context2.t0 = _context2.sent;
                  return _context2.abrupt("return", {
                    filecontents: _context2.t0
                  });

                case 9:
                  window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function loadPublic() {
          return _loadPublic.apply(this, arguments);
        }

        return loadPublic;
      }()
    }, {
      key: "save",
      value: function () {
        var _save = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var _ref4,
              fileContent,
              name,
              fileModifiedTime,
              dir,
              path,
              result,
              _args3 = arguments;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _ref4 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, fileContent = _ref4.fileContent, name = _ref4.name, fileModifiedTime = _ref4.fileModifiedTime, dir = _ref4.dir;
                  // Send the PUT request
                  path = "".concat(dir).concat(name);

                  if (dir !== "/") {
                    path = "".concat(dir, "/").concat(name);
                  }

                  _context3.next = 5;
                  return window.fetch(window.OC.generateUrl("/apps/files_linkeditor/ajax/savefile"), {
                    method: "PUT",
                    body: JSON.stringify({
                      filecontents: fileContent,
                      path,
                      mtime: fileModifiedTime
                    }),
                    headers: {
                      requesttoken: window.OC.requestToken,
                      "Content-Type": "application/json"
                    }
                  });

                case 5:
                  result = _context3.sent;

                  if (!(result && result.ok)) {
                    _context3.next = 8;
                    break;
                  }

                  return _context3.abrupt("return", true);

                case 8:
                  window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));

                case 9:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        function save() {
          return _save.apply(this, arguments);
        }

        return save;
      }()
    }, {
      key: "userCanEdit",
      value: function userCanEdit() {
        return window.FileList && window.OC && (window.OC.PERMISSION_ALL === window.FileList.getDirectoryPermissions() || window.OC.PERMISSION_UPDATE === window.FileList.getDirectoryPermissions());
      }
    }]);

    return FileService;
  }();

  var viewMode = writable(""); // 'edit' or 'view'

  var currentFile = writable(FileService.getFileConfig());

  function create_if_block_2(ctx) {
    var p;
    var t0_value =
    /*t*/
    ctx[2]("files_linkeditor", "You are about to visit:") + "";
    var t0;
    var t1;
    var em;
    var a;
    var t2_value =
    /*file*/
    ctx[0].url + "";
    var t2;
    var a_href_value;
    var a_target_value;
    return {
      c() {
        p = element("p");
        t0 = text(t0_value);
        t1 = space();
        em = element("em");
        a = element("a");
        t2 = text(t2_value);
        attr(a, "href", a_href_value = sanitizeUrl(
        /*file*/
        ctx[0].url));
        attr(a, "target", a_target_value =
        /*file*/
        ctx[0].sameWindow ? "_self" : "_blank");
        attr(p, "class", "urldisplay");
      },

      m(target, anchor) {
        insert(target, p, anchor);
        append(p, t0);
        append(p, t1);
        append(p, em);
        append(em, a);
        append(a, t2);
      },

      p(ctx, dirty) {
        if (dirty &
        /*file*/
        1 && t2_value !== (t2_value =
        /*file*/
        ctx[0].url + "")) set_data(t2, t2_value);

        if (dirty &
        /*file*/
        1 && a_href_value !== (a_href_value = sanitizeUrl(
        /*file*/
        ctx[0].url))) {
          attr(a, "href", a_href_value);
        }

        if (dirty &
        /*file*/
        1 && a_target_value !== (a_target_value =
        /*file*/
        ctx[0].sameWindow ? "_self" : "_blank")) {
          attr(a, "target", a_target_value);
        }
      },

      d(detaching) {
        if (detaching) detach(p);
      }

    };
  } // (63:2) {#if !loading}


  function create_if_block(ctx) {
    var show_if = FileService.userCanEdit();
    var t0;
    var a;
    var t1_value =
    /*t*/
    ctx[2]("files_linkeditor", "Visit link") + "";
    var t1;
    var a_href_value;
    var a_target_value;
    var if_block = show_if && create_if_block_1(ctx);
    return {
      c() {
        if (if_block) if_block.c();
        t0 = space();
        a = element("a");
        t1 = text(t1_value);
        attr(a, "href", a_href_value = sanitizeUrl(
        /*file*/
        ctx[0].url));
        attr(a, "target", a_target_value =
        /*file*/
        ctx[0].sameWindow ? "_self" : "_blank");
        attr(a, "class", "button primary");
      },

      m(target, anchor) {
        if (if_block) if_block.m(target, anchor);
        insert(target, t0, anchor);
        insert(target, a, anchor);
        append(a, t1);
      },

      p(ctx, dirty) {
        if (show_if) if_block.p(ctx, dirty);

        if (dirty &
        /*file*/
        1 && a_href_value !== (a_href_value = sanitizeUrl(
        /*file*/
        ctx[0].url))) {
          attr(a, "href", a_href_value);
        }

        if (dirty &
        /*file*/
        1 && a_target_value !== (a_target_value =
        /*file*/
        ctx[0].sameWindow ? "_self" : "_blank")) {
          attr(a, "target", a_target_value);
        }
      },

      d(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach(t0);
        if (detaching) detach(a);
      }

    };
  } // (64:3) {#if FileService.userCanEdit()}


  function create_if_block_1(ctx) {
    var a;
    var t_1_value =
    /*t*/
    ctx[2]("files_linkeditor", "Edit link") + "";
    var t_1;
    var a_href_value;
    var mounted;
    var dispose;
    return {
      c() {
        a = element("a");
        t_1 = text(t_1_value);
        attr(a, "href", a_href_value =
        /*file*/
        ctx[0].currentUrl);
        attr(a, "class", "button");
      },

      m(target, anchor) {
        insert(target, a, anchor);
        append(a, t_1);

        if (!mounted) {
          dispose = listen(a, "click", prevent_default(
          /*click_handler_1*/
          ctx[5]));
          mounted = true;
        }
      },

      p(ctx, dirty) {
        if (dirty &
        /*file*/
        1 && a_href_value !== (a_href_value =
        /*file*/
        ctx[0].currentUrl)) {
          attr(a, "href", a_href_value);
        }
      },

      d(detaching) {
        if (detaching) detach(a);
        mounted = false;
        dispose();
      }

    };
  } // (42:0) <Overlay {loading}>


  function create_default_slot(ctx) {
    var div0;
    var h3;
    var t0_value =
    /*file*/
    ctx[0].name + "";
    var t0;
    var t1;
    var t2;
    var div1;
    var a;
    var t3_value =
    /*t*/
    ctx[2]("files_linkeditor", "Cancel") + "";
    var t3;
    var a_href_value;
    var t4;
    var mounted;
    var dispose;
    var if_block0 = !
    /*loading*/
    ctx[1] && create_if_block_2(ctx);
    var if_block1 = !
    /*loading*/
    ctx[1] && create_if_block(ctx);
    return {
      c() {
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
        attr(a, "href", a_href_value =
        /*file*/
        ctx[0].currentUrl);
        attr(a, "class", "button");
        attr(div1, "class", "oc-dialog-buttonrow twobuttons");
      },

      m(target, anchor) {
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
          dispose = listen(a, "click", prevent_default(
          /*click_handler*/
          ctx[4]));
          mounted = true;
        }
      },

      p(ctx, dirty) {
        if (dirty &
        /*file*/
        1 && t0_value !== (t0_value =
        /*file*/
        ctx[0].name + "")) set_data(t0, t0_value);

        if (!
        /*loading*/
        ctx[1]) {
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

        if (dirty &
        /*file*/
        1 && a_href_value !== (a_href_value =
        /*file*/
        ctx[0].currentUrl)) {
          attr(a, "href", a_href_value);
        }

        if (!
        /*loading*/
        ctx[1]) {
          if (if_block1) {
            if_block1.p(ctx, dirty);
          } else {
            if_block1 = create_if_block(ctx);
            if_block1.c();
            if_block1.m(div1, null);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
      },

      d(detaching) {
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

  function create_fragment$1(ctx) {
    var current;
    var overlay = new Overlay({
      props: {
        loading:
        /*loading*/
        ctx[1],
        $$slots: {
          default: [create_default_slot]
        },
        $$scope: {
          ctx
        }
      }
    });
    return {
      c() {
        create_component(overlay.$$.fragment);
      },

      m(target, anchor) {
        mount_component(overlay, target, anchor);
        current = true;
      },

      p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        var overlay_changes = {};
        if (dirty &
        /*loading*/
        2) overlay_changes.loading =
        /*loading*/
        ctx[1];

        if (dirty &
        /*$$scope, file, loading*/
        67) {
          overlay_changes.$$scope = {
            dirty,
            ctx
          };
        }

        overlay.$set(overlay_changes);
      },

      i(local) {
        if (current) return;
        transition_in(overlay.$$.fragment, local);
        current = true;
      },

      o(local) {
        transition_out(overlay.$$.fragment, local);
        current = false;
      },

      d(detaching) {
        destroy_component(overlay, detaching);
      }

    };
  }

  function instance$1($$self, $$props, $$invalidate) {
    var t = window.t;
    var unsubscribe;
    onMount(function () {
      // Subscribe to changes of the current file
      unsubscribe = currentFile.subscribe( /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(fileUpdate) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  $$invalidate(0, file = fileUpdate);

                  if (!(file && file.isLoaded)) {
                    _context.next = 7;
                    break;
                  }

                  $$invalidate(1, loading = false); // Show error when url is permanently empty (or maybe show editor?)

                  if (file.url) {
                    _context.next = 6;
                    break;
                  }

                  OC.dialogs.alert(t("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."), t("files_linkeditor", "A slight problem"));
                  return _context.abrupt("return");

                case 6:
                  // Open the link without confirmation
                  if (file.skipConfirmation && file.sameWindow) {
                    window.location.href = file.url; // Hide viewer

                    viewMode.update(function () {
                      return "none";
                    });
                  }

                case 7:
                case "end":
                  return _context.stop();
              }
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
        return "none";
      });
    };

    var click_handler_1 = function click_handler_1() {
      viewMode.update(function () {
        return "edit";
      });
    };

    var file;
    var loading;

     $$invalidate(0, file = FileService.getFileConfig());

     $$invalidate(1, loading = true);

    return [file, loading, t, unsubscribe, click_handler, click_handler_1];
  }

  var Viewer = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Viewer, _SvelteComponent);

    var _super = _createSuper(Viewer);

    function Viewer(options) {
      var _this;

      _classCallCheck(this, Viewer);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
      return _this;
    }

    return Viewer;
  }(SvelteComponent);

  var aPossiblePrototype = function (it) {
    if (!isObject(it) && it !== null) {
      throw TypeError("Can't set " + String(it) + ' as a prototype');
    }

    return it;
  };

  // `Object.setPrototypeOf` method
  // https://tc39.github.io/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.

  /* eslint-disable no-proto */


  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;

    try {
      setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
      setter.call(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) {
      /* empty */
    }

    return function setPrototypeOf(O, proto) {
      anObject(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  // makes subclassing work correct for wrapped built-ins


  var inheritIfRequired = function ($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if ( // it can work only with native `setPrototypeOf`
    objectSetPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) objectSetPrototypeOf($this, NewTargetPrototype);
    return $this;
  };

  var MATCH = wellKnownSymbol('match'); // `IsRegExp` abstract operation
  // https://tc39.github.io/ecma262/#sec-isregexp

  var isRegexp = function (it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
  };

  var defineProperty$2 = objectDefineProperty.f;

  var getOwnPropertyNames = objectGetOwnPropertyNames.f;











  var setInternalState$1 = internalState.set;





  var MATCH$1 = wellKnownSymbol('match');
  var NativeRegExp = global_1.RegExp;
  var RegExpPrototype = NativeRegExp.prototype;
  var re1 = /a/g;
  var re2 = /a/g; // "new" should create a new object, old webkit bug

  var CORRECT_NEW = new NativeRegExp(re1) !== re1;
  var UNSUPPORTED_Y$2 = regexpStickyHelpers.UNSUPPORTED_Y;
  var FORCED$2 = descriptors && isForced_1('RegExp', !CORRECT_NEW || UNSUPPORTED_Y$2 || fails(function () {
    re2[MATCH$1] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  })); // `RegExp` constructor
  // https://tc39.github.io/ecma262/#sec-regexp-constructor

  if (FORCED$2) {
    var RegExpWrapper = function RegExp(pattern, flags) {
      var thisIsRegExp = this instanceof RegExpWrapper;
      var patternIsRegExp = isRegexp(pattern);
      var flagsAreUndefined = flags === undefined;
      var sticky;

      if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
        return pattern;
      }

      if (CORRECT_NEW) {
        if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
      } else if (pattern instanceof RegExpWrapper) {
        if (flagsAreUndefined) flags = regexpFlags.call(pattern);
        pattern = pattern.source;
      }

      if (UNSUPPORTED_Y$2) {
        sticky = !!flags && flags.indexOf('y') > -1;
        if (sticky) flags = flags.replace(/y/g, '');
      }

      var result = inheritIfRequired(CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);
      if (UNSUPPORTED_Y$2 && sticky) setInternalState$1(result, {
        sticky: sticky
      });
      return result;
    };

    var proxy = function (key) {
      key in RegExpWrapper || defineProperty$2(RegExpWrapper, key, {
        configurable: true,
        get: function () {
          return NativeRegExp[key];
        },
        set: function (it) {
          NativeRegExp[key] = it;
        }
      });
    };

    var keys$1 = getOwnPropertyNames(NativeRegExp);
    var index = 0;

    while (keys$1.length > index) proxy(keys$1[index++]);

    RegExpPrototype.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype;
    redefine(global_1, 'RegExp', RegExpWrapper);
  } // https://tc39.github.io/ecma262/#sec-get-regexp-@@species


  setSpecies('RegExp');

  var TO_STRING = 'toString';
  var RegExpPrototype$1 = RegExp.prototype;
  var nativeToString = RegExpPrototype$1[TO_STRING];
  var NOT_GENERIC = fails(function () {
    return nativeToString.call({
      source: 'a',
      flags: 'b'
    }) != '/a/b';
  }); // FF44- RegExp#toString has a wrong name

  var INCORRECT_NAME = nativeToString.name != TO_STRING; // `RegExp.prototype.toString` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring

  if (NOT_GENERIC || INCORRECT_NAME) {
    redefine(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject(this);
      var p = String(R.source);
      var rf = R.flags;
      var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype$1) ? regexpFlags.call(R) : rf);
      return '/' + p + '/' + f;
    }, {
      unsafe: true
    });
  }

  var arrayPush = [].push;
  var min$3 = Math.min;
  var MAX_UINT32 = 0xFFFFFFFF; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

  var SUPPORTS_Y = !fails(function () {
    return !RegExp(MAX_UINT32, 'y');
  }); // @@split logic

  fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;

    if ('abbc'.split(/(b)*/)[1] == 'c' || 'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = String(requireObjectCoercible(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

        if (!isRegexp(separator)) {
          return nativeSplit.call(string, separator, lim);
        }

        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;

        while (match = regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;

          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }

          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }

        if (lastLastIndex === string.length) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));

        return output.length > lim ? output.slice(0, lim) : output;
      }; // Chakra, V8

    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
      };
    } else internalSplit = nativeSplit;

    return [// `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
    }, // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.

      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];

      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;

        if (z === null || (e = min$3(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;

          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }

          q = p = e;
        }
      }

      A.push(S.slice(p));
      return A;
    }];
  }, !SUPPORTS_Y);

  // a string of all valid unicode whitespaces
  // eslint-disable-next-line max-len
  var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var whitespace = '[' + whitespaces + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

  var createMethod$2 = function (TYPE) {
    return function ($this) {
      var string = String(requireObjectCoercible($this));
      if (TYPE & 1) string = string.replace(ltrim, '');
      if (TYPE & 2) string = string.replace(rtrim, '');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
    start: createMethod$2(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
    end: createMethod$2(2),
    // `String.prototype.trim` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.trim
    trim: createMethod$2(3)
  };

  var non = '\u200B\u0085\u180E'; // check that a method works with the correct list
  // of whitespaces and has a correct name

  var stringTrimForced = function (METHOD_NAME) {
    return fails(function () {
      return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
  };

  var $trim = stringTrim.trim;

   // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim


  _export({
    target: 'String',
    proto: true,
    forced: stringTrimForced('trim')
  }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
  var USES_TO_LENGTH$1 = arrayMethodUsesToLength('slice', {
    ACCESSORS: true,
    0: 0,
    1: 2
  });
  var SPECIES$6 = wellKnownSymbol('species');
  var nativeSlice = [].slice;
  var max$2 = Math.max; // `Array.prototype.slice` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects

  _export({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH$1
  }, {
    slice: function slice(start, end) {
      var O = toIndexedObject(this);
      var length = toLength(O.length);
      var k = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

      var Constructor, result, n;

      if (isArray(O)) {
        Constructor = O.constructor; // cross-realm fallback

        if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject(Constructor)) {
          Constructor = Constructor[SPECIES$6];
          if (Constructor === null) Constructor = undefined;
        }

        if (Constructor === Array || Constructor === undefined) {
          return nativeSlice.call(O, k, fin);
        }
      }

      result = new (Constructor === undefined ? Array : Constructor)(max$2(fin - k, 0));

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
    } // The following function is derived from a surface fit of a graph plotting the performance difference
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

      if (useKaratsuba(a.length, b.length)) // Karatsuba is only faster for certain array sizes
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
        } // quotientDigit <= base - 1


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
      } // denormalization


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
      if (comparison === 0) return [Integer[self.sign === n.sign ? 1 : -1], Integer[0]]; // divMod1 is faster on smaller input sizes

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
      if (n.lesser(49)) return true; // we don't know if it's prime: let the other functions figure it out
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
    } // Set "strict" to true to force GRH-supported lower bound of 2*log(N)^2


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
        var top = restricted ? digits[i] : BASE;
        var digit = truncate(usedRNG() * top);
        result.push(digit);
        if (digit < top) restricted = false;
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
    } // Pre-define numbers in range [-999,999]


    for (var i = 0; i < 1000; i++) {
      Integer[i] = parseValue(i);
      if (i > 0) Integer[-i] = parseValue(-i);
    } // Backwards compatibility


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
  }(); // Node.js check


  if ( module.hasOwnProperty("exports")) {
    module.exports = bigInt;
  } //amd check
  });

  var b64 = createCommonjsModule(function (module, exports) {

  (function (exports) {

    var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
    var PLUS = '+'.charCodeAt(0);
    var SLASH = '/'.charCodeAt(0);
    var NUMBER = '0'.charCodeAt(0);
    var LOWER = 'a'.charCodeAt(0);
    var UPPER = 'A'.charCodeAt(0);
    var PLUS_URL_SAFE = '-'.charCodeAt(0);
    var SLASH_URL_SAFE = '_'.charCodeAt(0);

    function decode(elt) {
      var code = elt.charCodeAt(0);
      if (code === PLUS || code === PLUS_URL_SAFE) return 62; // '+'

      if (code === SLASH || code === SLASH_URL_SAFE) return 63; // '/'

      if (code < NUMBER) return -1; // no match

      if (code < NUMBER + 10) return code - NUMBER + 26 + 26;
      if (code < UPPER + 26) return code - UPPER;
      if (code < LOWER + 26) return code - LOWER + 26;
    }

    function b64ToByteArray(b64) {
      var i, j, l, tmp, placeHolders, arr;

      if (b64.length % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4');
      } // the number of equal signs (place holders)
      // if there are two placeholders, than the two characters before it
      // represent one byte
      // if there is only one, then the three characters before it represent 2 bytes
      // this is just a cheap hack to not do indexOf twice


      var len = b64.length;
      placeHolders = b64.charAt(len - 2) === '=' ? 2 : b64.charAt(len - 1) === '=' ? 1 : 0; // base64 is 4/3 + up to two characters of the original data

      arr = new Arr(b64.length * 3 / 4 - placeHolders); // if there are placeholders, only get up to the last complete 4 chars

      l = placeHolders > 0 ? b64.length - 4 : b64.length;
      var L = 0;

      function push(v) {
        arr[L++] = v;
      }

      for (i = 0, j = 0; i < l; i += 4, j += 3) {
        tmp = decode(b64.charAt(i)) << 18 | decode(b64.charAt(i + 1)) << 12 | decode(b64.charAt(i + 2)) << 6 | decode(b64.charAt(i + 3));
        push((tmp & 0xFF0000) >> 16);
        push((tmp & 0xFF00) >> 8);
        push(tmp & 0xFF);
      }

      if (placeHolders === 2) {
        tmp = decode(b64.charAt(i)) << 2 | decode(b64.charAt(i + 1)) >> 4;
        push(tmp & 0xFF);
      } else if (placeHolders === 1) {
        tmp = decode(b64.charAt(i)) << 10 | decode(b64.charAt(i + 1)) << 4 | decode(b64.charAt(i + 2)) >> 2;
        push(tmp >> 8 & 0xFF);
        push(tmp & 0xFF);
      }

      return arr;
    }

    function uint8ToBase64(uint8) {
      var i;
      var extraBytes = uint8.length % 3; // if we have 1 byte left, pad 2 bytes

      var output = '';
      var temp, length;

      function encode(num) {
        return lookup.charAt(num);
      }

      function tripletToBase64(num) {
        return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F);
      } // go through the array every three bytes, we'll deal with trailing stuff later


      for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
        temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
        output += tripletToBase64(temp);
      } // pad the end with zeros, but make sure to not forget the extra bytes


      switch (extraBytes) {
        case 1:
          temp = uint8[uint8.length - 1];
          output += encode(temp >> 2);
          output += encode(temp << 4 & 0x3F);
          output += '==';
          break;

        case 2:
          temp = (uint8[uint8.length - 2] << 8) + uint8[uint8.length - 1];
          output += encode(temp >> 10);
          output += encode(temp >> 4 & 0x3F);
          output += encode(temp << 2 & 0x3F);
          output += '=';
          break;
      }

      return output;
    }

    exports.toByteArray = b64ToByteArray;
    exports.fromByteArray = uint8ToBase64;
  })( exports);
  });

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





  var customInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : null;
  exports.Buffer = Buffer;
  exports.SlowBuffer = SlowBuffer;
  exports.INSPECT_MAX_BYTES = 50;
  var K_MAX_LENGTH = 0x7fffffff;
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
      var arr = new Uint8Array(1);
      var proto = {
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
    } // Return an augmented `Uint8Array` instance


    var buf = new Uint8Array(length);
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
      return fromArrayLike(value);
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

    var valueOf = value.valueOf && value.valueOf();

    if (valueOf != null && valueOf !== value) {
      return Buffer.from(valueOf, encodingOrOffset, length);
    }

    var b = fromObject(value);
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
  }; // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
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
      // be interpretted as a start offset.
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

    var length = byteLength(string, encoding) | 0;
    var buf = createBuffer(length);
    var actual = buf.write(string, encoding);

    if (actual !== length) {
      // Writing a hex string, for example, that contains invalid characters will
      // cause everything after the first invalid character to be ignored. (e.g.
      // 'abxxcd' will be treated as 'ab')
      buf = buf.slice(0, actual);
    }

    return buf;
  }

  function fromArrayLike(array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(length);

    for (var i = 0; i < length; i += 1) {
      buf[i] = array[i] & 255;
    }

    return buf;
  }

  function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('"offset" is outside of buffer bounds');
    }

    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('"length" is outside of buffer bounds');
    }

    var buf;

    if (byteOffset === undefined && length === undefined) {
      buf = new Uint8Array(array);
    } else if (length === undefined) {
      buf = new Uint8Array(array, byteOffset);
    } else {
      buf = new Uint8Array(array, byteOffset, length);
    } // Return an augmented `Uint8Array` instance


    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
  }

  function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
      var len = checked(obj.length) | 0;
      var buf = createBuffer(len);

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
    var x = a.length;
    var y = b.length;

    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
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

    var i;

    if (length === undefined) {
      length = 0;

      for (i = 0; i < list.length; ++i) {
        length += list[i].length;
      }
    }

    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;

    for (i = 0; i < list.length; ++i) {
      var buf = list[i];

      if (isInstance(buf, Uint8Array)) {
        buf = Buffer.from(buf);
      }

      if (!Buffer.isBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }

      buf.copy(buffer, pos);
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

    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0; // Use a for loop to avoid recursion

    var loweredCase = false;

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
    var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

    if (start === undefined || start < 0) {
      start = 0;
    } // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.


    if (start > this.length) {
      return '';
    }

    if (end === undefined || end > this.length) {
      end = this.length;
    }

    if (end <= 0) {
      return '';
    } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


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
  } // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
  // to detect a Buffer instance. It's not possible to use `instanceof Buffer`
  // reliably in a browserify context because there could be multiple different
  // copies of the 'buffer' package in use. This method works even for Buffer
  // instances that were created from another copy of the `buffer` package.
  // See: https://github.com/feross/buffer/issues/154


  Buffer.prototype._isBuffer = true;

  function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
  }

  Buffer.prototype.swap16 = function swap16() {
    var len = this.length;

    if (len % 2 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 16-bits');
    }

    for (var i = 0; i < len; i += 2) {
      swap(this, i, i + 1);
    }

    return this;
  };

  Buffer.prototype.swap32 = function swap32() {
    var len = this.length;

    if (len % 4 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 32-bits');
    }

    for (var i = 0; i < len; i += 4) {
      swap(this, i, i + 3);
      swap(this, i + 1, i + 2);
    }

    return this;
  };

  Buffer.prototype.swap64 = function swap64() {
    var len = this.length;

    if (len % 8 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 64-bits');
    }

    for (var i = 0; i < len; i += 8) {
      swap(this, i, i + 7);
      swap(this, i + 1, i + 6);
      swap(this, i + 2, i + 5);
      swap(this, i + 3, i + 4);
    }

    return this;
  };

  Buffer.prototype.toString = function toString() {
    var length = this.length;
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
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
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
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);

    for (var i = 0; i < len; ++i) {
      if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
      }
    }

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  }; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
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
    if (buffer.length === 0) return -1; // Normalize byteOffset

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
    } // Normalize byteOffset: negative offsets start from the end of the buffer


    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

    if (byteOffset >= buffer.length) {
      if (dir) return -1;else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
      if (dir) byteOffset = 0;else return -1;
    } // Normalize val


    if (typeof val === 'string') {
      val = Buffer.from(val, encoding);
    } // Finally, search either indexOf (if dir is true) or lastIndexOf


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
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;

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

    var i;

    if (dir) {
      var foundIndex = -1;

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
        var found = true;

        for (var j = 0; j < valLength; j++) {
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
    var remaining = buf.length - offset;

    if (!length) {
      length = remaining;
    } else {
      length = Number(length);

      if (length > remaining) {
        length = remaining;
      }
    }

    var strLen = string.length;

    if (length > strLen / 2) {
      length = strLen / 2;
    }

    for (var i = 0; i < length; ++i) {
      var parsed = parseInt(string.substr(i * 2, 2), 16);
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

  function latin1Write(buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length);
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
      offset = 0; // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset;
      length = this.length;
      offset = 0; // Buffer#write(string, offset[, length][, encoding])
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

    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;

    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
      throw new RangeError('Attempt to write outside buffer bounds');
    }

    if (!encoding) encoding = 'utf8';
    var loweredCase = false;

    for (;;) {
      switch (encoding) {
        case 'hex':
          return hexWrite(this, string, offset, length);

        case 'utf8':
        case 'utf-8':
          return utf8Write(this, string, offset, length);

        case 'ascii':
          return asciiWrite(this, string, offset, length);

        case 'latin1':
        case 'binary':
          return latin1Write(this, string, offset, length);

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
      return b64.fromByteArray(buf);
    } else {
      return b64.fromByteArray(buf.slice(start, end));
    }
  }

  function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;

    while (i < end) {
      var firstByte = buf[i];
      var codePoint = null;
      var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

      if (i + bytesPerSequence <= end) {
        var secondByte, thirdByte, fourthByte, tempCodePoint;

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
  } // Based on http://stackoverflow.com/a/22747272/680742, the browser with
  // the lowest limit is Chrome, with 0x10000 args.
  // We go 1 magnitude less, for safety


  var MAX_ARGUMENTS_LENGTH = 0x1000;

  function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;

    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
    } // Decode in chunks to avoid "call stack size exceeded".


    var res = '';
    var i = 0;

    while (i < len) {
      res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    }

    return res;
  }

  function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i] & 0x7F);
    }

    return ret;
  }

  function latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i]);
    }

    return ret;
  }

  function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = '';

    for (var i = start; i < end; ++i) {
      out += hexSliceLookupTable[buf[i]];
    }

    return out;
  }

  function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';

    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }

    return res;
  }

  Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
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
    var newBuf = this.subarray(start, end); // Return an augmented `Uint8Array` instance

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

  Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;

    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }

    return val;
  };

  Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;

    if (!noAssert) {
      checkOffset(offset, byteLength, this.length);
    }

    var val = this[offset + --byteLength];
    var mul = 1;

    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul;
    }

    return val;
  };

  Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
  };

  Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
  };

  Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
  };

  Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
  };

  Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
  };

  Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;

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
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];

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
    var val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
  };

  Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
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

  Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;

    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt(this, value, offset, byteLength, maxBytes, 0);
    }

    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;

    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = value / mul & 0xFF;
    }

    return offset + byteLength;
  };

  Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;

    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt(this, value, offset, byteLength, maxBytes, 0);
    }

    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;

    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = value / mul & 0xFF;
    }

    return offset + byteLength;
  };

  Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
  };

  Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
  };

  Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
  };

  Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
  };

  Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
  };

  Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;

    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);
      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = 0;
    var mul = 1;
    var sub = 0;
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
      var limit = Math.pow(2, 8 * byteLength - 1);
      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
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
  }; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


  Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds');
    }

    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

    if (end > this.length) end = this.length;

    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }

    var len = end - start;

    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
      // Use built-in when available, missing from IE11
      this.copyWithin(targetStart, start, end);
    } else if (this === target && start < targetStart && targetStart < end) {
      // descending copy from end
      for (var i = len - 1; i >= 0; --i) {
        target[i + targetStart] = this[i + start];
      }
    } else {
      Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    }

    return len;
  }; // Usage:
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
        var code = val.charCodeAt(0);

        if (encoding === 'utf8' && code < 128 || encoding === 'latin1') {
          // Fast path: If `val` fits into a single byte, use that numeric value.
          val = code;
        }
      }
    } else if (typeof val === 'number') {
      val = val & 255;
    } else if (typeof val === 'boolean') {
      val = Number(val);
    } // Invalid ranges are not set to a default, so can range check early.


    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError('Out of range index');
    }

    if (end <= start) {
      return this;
    }

    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;

    if (typeof val === 'number') {
      for (i = start; i < end; ++i) {
        this[i] = val;
      }
    } else {
      var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
      var len = bytes.length;

      if (len === 0) {
        throw new TypeError('The value "' + val + '" is invalid for argument "value"');
      }

      for (i = 0; i < end - start; ++i) {
        this[i + start] = bytes[i % len];
      }
    }

    return this;
  }; // HELPER FUNCTIONS
  // ================


  var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;

  function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0]; // Node strips out invalid characters like \n and \t from the string, base64-js does not

    str = str.trim().replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

    if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

    while (str.length % 4 !== 0) {
      str = str + '=';
    }

    return str;
  }

  function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];

    for (var i = 0; i < length; ++i) {
      codePoint = string.charCodeAt(i); // is surrogate component

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
          } // valid lead


          leadSurrogate = codePoint;
          continue;
        } // 2 leads in a row


        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          leadSurrogate = codePoint;
          continue;
        } // valid surrogate pair


        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
      } else if (leadSurrogate) {
        // valid bmp char, but last char was a lead
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
      }

      leadSurrogate = null; // encode utf8

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
    var byteArray = [];

    for (var i = 0; i < str.length; ++i) {
      // Node's code seems to be doing this and not & 0x7F..
      byteArray.push(str.charCodeAt(i) & 0xFF);
    }

    return byteArray;
  }

  function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];

    for (var i = 0; i < str.length; ++i) {
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
    return b64.toByteArray(base64clean(str));
  }

  function blitBuffer(src, dst, offset, length) {
    for (var i = 0; i < length; ++i) {
      if (i + offset >= dst.length || i >= src.length) break;
      dst[i + offset] = src[i];
    }

    return i;
  } // ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
  // the `instanceof` check but they should be treated as of that type.
  // See: https://github.com/feross/buffer/issues/166


  function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
  }

  function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj; // eslint-disable-line no-self-compare
  } // Create lookup table for `toString('hex')`
  // See: https://github.com/feross/buffer/issues/219


  var hexSliceLookupTable = function () {
    var alphabet = '0123456789abcdef';
    var table = new Array(256);

    for (var i = 0; i < 16; ++i) {
      var i16 = i * 16;

      for (var j = 0; j < 16; ++j) {
        table[i16 + j] = alphabet[i] + alphabet[j];
      }
    }

    return table;
  }();
  });
  var buffer_1 = buffer.Buffer;
  var buffer_2 = buffer.SlowBuffer;
  var buffer_3 = buffer.INSPECT_MAX_BYTES;
  var buffer_4 = buffer.kMaxLength;

  var maxObjectSize = 100 * 1000 * 1000; // 100Meg

  var maxObjectCount = 32768; // EPOCH = new SimpleDateFormat("yyyy MM dd zzz").parse("2001 01 01 GMT").getTime();
  // ...but that's annoying in a static initializer because it can throw exceptions, ick.
  // So we just hardcode the correct value.

  var EPOCH = 978307200000; // UID object definition

  var UID = function UID(id) {
    _classCallCheck(this, UID);

    console.info({
      id
    });
  };
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
        } // Handle trailer, last 32 bytes of the file


        var trailer = buffer.slice(buffer.length - 32, buffer.length); // 6 null bytes (index 0 to 5)

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
        } // Handle offset table


        var offsetTable = [];

        for (var i = 0; i < numObjects; i++) {
          var offsetBytes = buffer.slice(offsetTableOffset + i * offsetSize, offsetTableOffset + (i + 1) * offsetSize);
          offsetTable[i] = this.readUInt(offsetBytes, 0);

          if (this.debug) ;
        } // Parses an object inside the currently parsed binary property list.
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
            } // length is String length -> to get byte length multiply by 2, as 1 character takes 2 bytes in UTF-16


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
      } // we're just going to toss the high order bits because javascript doesn't have 64-bit ints

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

      /**
       * Generates a URL file.
       */
      value: function generateURLFileContent(oldContent, url) {
        var sameWindow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var skipConfirmation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var newContent = ""; // Find if this is already a shortcut file.

        if (oldContent && oldContent.indexOf("[InternetShortcut]") !== -1 && oldContent.indexOf("URL=") !== -1) {
          // Seems like it, replace the url.
          newContent = oldContent.replace(new RegExp("URL=.*", "gm"), "URL=".concat(sanitizeUrl(url)));
        } else {
          // Okay, let's create a new file.
          newContent = "[InternetShortcut]\r\nURL=".concat(sanitizeUrl(url));
        } // Adjust same window property


        if (!sameWindow && newContent.indexOf(extraFields.sameWindow) !== -1) {
          newContent = newContent.replace(extraFields.sameWindow, "");
        } else if (sameWindow && newContent.indexOf(extraFields.sameWindow) === -1) {
          newContent = "".concat(newContent, "\r\n").concat(extraFields.sameWindow);
        } // Adjust skip navigation confirmation property


        if (!skipConfirmation && newContent.indexOf(extraFields.skipConfirmation) !== -1) {
          newContent = newContent.replace(extraFields.skipConfirmation, "");
        } else if (skipConfirmation && newContent.indexOf(extraFields.skipConfirmation) === -1) {
          newContent = "".concat(newContent, "\r\n").concat(extraFields.skipConfirmation);
        } // Remove blank new lines


        newContent = newContent.replace(/\r\n\r\n/gm, "\r\n").trim(); // Add a newline at the end

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
          var urllines = filecontent.match("URL=.*"); // See if matches were found.

          if (urllines && Array.isArray(urllines) && urllines.length > 0) {
            // Let's use the first match.
            var url = urllines[0]; // Return only the URL.

            result.url = sanitizeUrl(url.replace("URL=", ""));
          } // If this extra field is present, we skip the navigation confirmation view


          if (filecontent.indexOf(extraFields.skipConfirmation) !== -1) {
            result.skipConfirmation = true;
          } // If this extra field is present, the link opens in the same window


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
        var urlMatch = false; // Editing existing file

        if (oldcontent) {
          // Parse XML file
          var parser = new window.DOMParser(); // Remove comment characters around extra fields

          var xmlContent = uncommentExtraFields(oldcontent);
          var xmlDoc = parser.parseFromString(xmlContent, "text/xml"); // There can be <dict> and <extra> tags on the root <plist>

          var elements = [].concat(_toConsumableArray(xmlDoc.getElementsByTagName("dict")), _toConsumableArray(xmlDoc.getElementsByTagName("extra")));
          var skipConfirmationMatch = false;
          var sameWindowMatch = false; // Map over all child elements

          if (elements && elements.length) {
            var _iterator = _createForOfIteratorHelper(elements),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var element = _step.value;
                var key = element.getElementsByTagName("key");
                var string = element.getElementsByTagName("string"); // Match for URL line

                if (getXMLTagValue(key) === "URL") {
                  setXMLTagValue(string, sanitizeUrl(url));
                  urlMatch = true;
                } // If this extra field is present, the link opens in the same window


                if (getXMLTagValue(key) === extraFieldNames.sameWindow && getXMLTagValue(string) === "_self") {
                  if (sameWindow) {
                    // Update sameWindow field
                    setXMLTagValue(string, "_self");
                  } else {
                    // Remove field
                    xmlDoc.getElementsByTagName("plist")[0].removeChild(element);
                  }

                  sameWindowMatch = true;
                } // If this extra field is present, we skip the navigation confirmation view


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
          } // The sameWindow field is not present, but needs to be added


          if (sameWindow && !sameWindowMatch) {
            var sameWindowElement = createExtraElement(xmlDoc, extraFieldNames.sameWindow, "_self");
            xmlDoc.getElementsByTagName("plist")[0].appendChild(sameWindowElement);
          } // The skipConfirmation field is not present, but needs to be added


          if (skipConfirmation && !skipConfirmationMatch) {
            var skipConfirmationElement = createExtraElement(xmlDoc, extraFieldNames.skipConfirmation, "1");
            xmlDoc.getElementsByTagName("plist")[0].appendChild(skipConfirmationElement);
          } // Instantiate XML serializer


          var serializer = new window.XMLSerializer(); // Add XML header, serialize

          newContent = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\t\t\t".concat(serializer.serializeToString(xmlDoc));

          if (newContent.indexOf("parsererror") > -1) {
            // Bail if parse error was "thrown"
            console.error("Parse error", newContent);
            newContent = "";
          } // pretty print XML


          newContent = formatXml(newContent);
        } // No content or URL not found in content


        if (!newContent || !urlMatch) {
          // Okay, let's create a new file.
          newContent = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\t\t\t\t<!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\">\n\t\t\t\t<plist version=\"1.0\">\n\t\t\t\t\t<dict>\n\t\t\t\t\t\t<key>URL</key>\n\t\t\t\t\t\t<string>".concat(sanitizeUrl(url), "</string>\n\t\t\t\t\t</dict>");

          if (sameWindow) {
            newContent = "".concat(newContent, "\n\t\t\t\t<extra>\n\t\t\t\t\t<key>").concat(extraFieldNames.sameWindow, "</key>\n\t\t\t\t\t<string>_self</string>\n\t\t\t\t</extra>");
          }

          if (skipConfirmation) {
            newContent = "".concat(newContent, "\n\t\t\t\t<extra>\n\t\t\t\t\t<key>").concat(extraFieldNames.skipConfirmation, "</key>\n\t\t\t\t\t<string>1</string>\n\t\t\t\t</extra>");
          }

          newContent = "".concat(newContent, "\n\t\t\t</plist>");
        } // Comment extra fields


        newContent = commentExtraFields(newContent); // Trim and remove indentation

        newContent = newContent.replace(/(\n|\b)\t+/g, "$1").trim(); // Remove empty newlines

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
              var parsed = binaryPlistParser.parse64Content(window.btoa(filecontent)); // Was able to parse and has URL

              if (parsed && parsed.length && parsed[0] && parsed[0].URL) {
                // Return URL, no custom metadata can be saved to the binary file
                result.url = parsed[0].URL;
              }
            } catch (error) {
              console.info(error);
            }
          } else {
            // Try parsing a XML file
            var parser = new window.DOMParser(); // Remove comment characters around extra fields

            var xmlContent = uncommentExtraFields(filecontent); // Parse XML file

            var xmlDoc = parser.parseFromString(xmlContent, "text/xml"); // There can be <dict> and <extra> tags on the root <plist>

            var elements = [].concat(_toConsumableArray(xmlDoc.getElementsByTagName("dict")), _toConsumableArray(xmlDoc.getElementsByTagName("extra"))); // Map over all child elements

            if (elements && elements.length) {
              var _iterator2 = _createForOfIteratorHelper(elements),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var element = _step2.value;
                  var key = element.getElementsByTagName("key");
                  var string = element.getElementsByTagName("string"); // Match for URL line

                  if (getXMLTagValue(key) === "URL") {
                    result.url = sanitizeUrl(getXMLTagValue(string));
                  } // If this extra field is present, the link opens in the same window


                  if (getXMLTagValue(key) === extraFieldNames.sameWindow && getXMLTagValue(string) === "_self") {
                    result.sameWindow = true;
                  } // If this extra field is present, we skip the navigation confirmation view


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
          var parts = filename.split("."); // See if there was a dot in the name.

          if (parts && Array.isArray(parts) && parts.length > 1) {
            // Get extension.
            var extension = parts[parts.length - 1]; // Return the last part after the last dot.

            if (extension) {
              return extension.toLowerCase();
            }
          }
        }

        return "";
      }
    }]);

    return Parser;
  }(); // Get the actual value of an XML node

  var getXMLTagValue = function getXMLTagValue(element) {
    if (element && element.length > 0 && element[0].childNodes && element[0].childNodes.length > 0 && element[0].childNodes[0]) {
      return element[0].childNodes[0].nodeValue;
    }

    return "";
  }; // Set the value of an XML node


  var setXMLTagValue = function setXMLTagValue(element, value) {
    if (element && element.length > 0 && element[0].childNodes && element[0].childNodes.length > 0 && element[0].childNodes[0]) {
      element[0].childNodes[0].nodeValue = value;
    }
  }; // Creates an <extra> XML element


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
    var t1_value =
    /*t*/
    ctx[1]("files_linkeditor", "View link") + "";
    var t1;
    var mounted;
    var dispose;
    return {
      c() {
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

      m(target, anchor) {
        insert(target, div, anchor);
        append(div, a);
        append(a, span);
        append(a, t0);
        append(a, t1);

        if (!mounted) {
          dispose = listen(a, "click", prevent_default(function () {
            if (is_function(
            /*onClick*/
            ctx[0]))
              /*onClick*/
              ctx[0].apply(this, arguments);
          }));
          mounted = true;
        }
      },

      p(new_ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        ctx = new_ctx;
      },

      i: noop,
      o: noop,

      d(detaching) {
        if (detaching) detach(div);
        mounted = false;
        dispose();
      }

    };
  }

  function instance$2($$self, $$props, $$invalidate) {
    var onClick = $$props.onClick;
    var t = window.t;

    $$self.$set = function ($$props) {
      if ("onClick" in $$props) $$invalidate(0, onClick = $$props.onClick);
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

    return PublicButton;
  }(SvelteComponent);

  var supportedMimetype = "application/internet-shortcut";
  var buttons = [];
  var LinkeditorService = /*#__PURE__*/function () {
    function LinkeditorService() {
      _classCallCheck(this, LinkeditorService);
    }

    _createClass(LinkeditorService, null, [{
      key: "registerFileActions",

      /**
       * Registers the file actions with files app
       */
      value: function registerFileActions() {
        // Edit action on single file
        window.OCA.Files.fileActions.registerAction({
          name: "editLink",
          displayName: t("files_linkeditor", "Edit link"),
          mime: supportedMimetype,
          actionHandler: function () {
            var _actionHandler = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(fileName, context) {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return LinkeditorService.loadAndChangeViewMode({
                        fileName,
                        context,
                        nextViewMode: "edit"
                      });

                    case 2:
                      return _context.abrupt("return", _context.sent);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            function actionHandler(_x, _x2) {
              return _actionHandler.apply(this, arguments);
            }

            return actionHandler;
          }(),
          permissions: window.OC.PERMISSION_UPDATE,
          iconClass: "icon-link"
        }); // View action on single file

        window.OCA.Files.fileActions.registerAction({
          name: "viewLink",
          displayName: t("files_linkeditor", "View link"),
          mime: supportedMimetype,
          actionHandler: function () {
            var _actionHandler2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(fileName, context) {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!window.OC.currentUser) {
                        _context2.next = 5;
                        break;
                      }

                      _context2.next = 3;
                      return LinkeditorService.loadAndChangeViewMode({
                        fileName,
                        context,
                        nextViewMode: "view"
                      });

                    case 3:
                      _context2.next = 7;
                      break;

                    case 5:
                      _context2.next = 7;
                      return LinkeditorService.loadAndChangeViewMode({
                        fileName,
                        context,
                        nextViewMode: "view",
                        downloadUrl: context.fileList.getDownloadUrl(fileName),
                        publicUser: true
                      });

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
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
        }); // Use Link viewing as default action.

        window.OCA.Files.fileActions.setDefault(supportedMimetype, "viewLink");
        window.OC.Plugins.register("OCA.Files.NewFileMenu", {
          attach: function attach(menu) {
            var fileList = menu.fileList; // Only attach to main file list

            if (fileList.id !== "files") {
              return;
            }

            var menuEntryFactory = function menuEntryFactory(_ref) {
              var id = _ref.id,
                  displayName = _ref.displayName,
                  templateName = _ref.templateName;
              // Register the new menu entry
              menu.addMenuEntry({
                id,
                displayName,
                templateName,
                iconClass: "icon-link",
                fileType: supportedMimetype,
                actionHandler: function actionHandler(name) {
                  var dir = fileList.getCurrentDirectory(); // First create the file

                  viewMode.update(function () {
                    return "edit";
                  });
                  currentFile.update(function () {
                    return FileService.getFileConfig({
                      name,
                      dir,
                      isNew: true,
                      onCreate: function () {
                        var _onCreate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(file) {
                          var newFile;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  _context3.next = 2;
                                  return fileList.createFile(name, {
                                    scrollTo: false
                                  });

                                case 2:
                                  _context3.next = 4;
                                  return FileService.load({
                                    fileName: name,
                                    dir
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
              templateName: window.t("files_linkeditor", "Link.URL")
            });
            menuEntryFactory({
              id: "application-internet-shortcut-webloc",
              displayName: "".concat(window.t("files_linkeditor", "New link"), " (.webloc)"),
              templateName: window.t("files_linkeditor", "Link.webloc")
            });
          }
        }); // Public shares where only the link file is shared

        var directDownload = document.querySelectorAll(".directDownload");

        if (directDownload && directDownload.length > 0) {
          // Get the filename
          var filename = (document.querySelector("input#filename") || {
            value: ""
          }).value; // Get extension

          var extension = Parser.getExtension(filename); // Public download page, single file

          if (extension === "url" || extension === "webloc") {
            // Get the download URL
            var downloadUrl = (document.querySelector("input#downloadURL") || {
              value: ""
            }).value; // Replace link and id on new button, add icon and label

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
                    downloadUrl
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
        var _loadAndChangeViewMode = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref2) {
          var fileName, context, nextViewMode, publicUser, downloadUrl, currentUrl, file, extension, parsedFile;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  fileName = _ref2.fileName, context = _ref2.context, nextViewMode = _ref2.nextViewMode, publicUser = _ref2.publicUser, downloadUrl = _ref2.downloadUrl;
                  // Find out where we are to use this link for the cancel button.
                  currentUrl = context ? encodeURI(context.fileList.linkTo() + "?path=" + context.dir) : window.location.href; // Get ready to show viewer

                  viewMode.update(function () {
                    return nextViewMode;
                  }); // Preliminary file config update

                  currentFile.update(function () {
                    return FileService.getFileConfig({
                      name: fileName,
                      currentUrl,
                      dir: context ? context.dir : ""
                    });
                  }); // Load file from backend

                  file = {};

                  if (!publicUser) {
                    _context4.next = 11;
                    break;
                  }

                  _context4.next = 8;
                  return FileService.loadPublic({
                    downloadUrl
                  });

                case 8:
                  file = _context4.sent;
                  _context4.next = 14;
                  break;

                case 11:
                  _context4.next = 13;
                  return FileService.load({
                    fileName,
                    dir: context.dir
                  });

                case 13:
                  file = _context4.sent;

                case 14:
                  if (file) {
                    // Read extension and run fitting parser.
                    extension = Parser.getExtension(fileName); // Parse the filecontent to get to the URL.

                    parsedFile = {};

                    if (extension === "webloc") {
                      parsedFile = Parser.parseWeblocFile(file.filecontents);
                    } else {
                      parsedFile = Parser.parseURLFile(file.filecontents);
                    } // Update file info in store


                    currentFile.update(function (fileConfig) {
                      return FileService.getFileConfig(_objectSpread2(_objectSpread2(_objectSpread2({}, fileConfig), parsedFile), {}, {
                        fileModifiedTime: file.mtime,
                        isLoaded: true
                      }));
                    });
                  } else {
                    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
                  }

                case 15:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        function loadAndChangeViewMode(_x6) {
          return _loadAndChangeViewMode.apply(this, arguments);
        }

        return loadAndChangeViewMode;
      }()
    }, {
      key: "saveAndChangeViewMode",
      value: function () {
        var _saveAndChangeViewMode = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref3) {
          var name, dir, url, fileModifiedTime, sameWindow, skipConfirmation, extension, fileContent;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  name = _ref3.name, dir = _ref3.dir, url = _ref3.url, fileModifiedTime = _ref3.fileModifiedTime, sameWindow = _ref3.sameWindow, skipConfirmation = _ref3.skipConfirmation;
                  // Read extension and run fitting parser.
                  extension = Parser.getExtension(name); // Parse the filecontent to get to the URL.

                  fileContent = "";

                  if (extension === "webloc") {
                    fileContent = Parser.generateWeblocFileContent("", url, sameWindow, skipConfirmation);
                  } else {
                    fileContent = Parser.generateURLFileContent("", url, sameWindow, skipConfirmation);
                  } // Save file


                  _context5.next = 6;
                  return FileService.save({
                    fileContent,
                    name,
                    dir,
                    fileModifiedTime
                  });

                case 6:
                  // Hide editor
                  viewMode.update(function () {
                    return "none";
                  });

                case 7:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        function saveAndChangeViewMode(_x7) {
          return _saveAndChangeViewMode.apply(this, arguments);
        }

        return saveAndChangeViewMode;
      }()
    }]);

    return LinkeditorService;
  }();

  function create_if_block_2$1(ctx) {
    var label0;
    var t0_value =
    /*t*/
    ctx[2]("files_linkeditor", "Link target URL") + "";
    var t0;
    var t1;
    var br;
    var t2;
    var input0;
    var input0_placeholder_value;
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
      c() {
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
        label1.textContent = "".concat(
        /*t*/
        ctx[2]("files_linkeditor", "Open in same window"));
        t6 = space();
        input2 = element("input");
        t7 = space();
        label2 = element("label");
        label2.textContent = "".concat(
        /*t*/
        ctx[2]("files_linkeditor", "Skip confirmation dialog before open (has to open in same window)"));
        attr(input0, "type", "text");
        set_style(input0, "width", "100%");
        attr(input0, "class", "input-wide");
        input0.autofocus = true;
        attr(input0, "placeholder", input0_placeholder_value =
        /*t*/
        ctx[2]("files_linkeditor", "e.g. https://example.org"));
        attr(input1, "type", "checkbox");
        attr(input1, "id", "linkeditor_sameWindow");
        attr(input1, "class", "checkbox");
        attr(label1, "for", "linkeditor_sameWindow");
        attr(label1, "class", "space-top");
        attr(input2, "type", "checkbox");
        input2.disabled = input2_disabled_value = !
        /*file*/
        ctx[0].sameWindow;
        attr(input2, "id", "linkeditor_skipConfirmation");
        attr(input2, "class", "checkbox");
        attr(label2, "for", "linkeditor_skipConfirmation");
      },

      m(target, anchor) {
        insert(target, label0, anchor);
        append(label0, t0);
        append(label0, t1);
        append(label0, br);
        append(label0, t2);
        append(label0, input0);
        set_input_value(input0,
        /*file*/
        ctx[0].url);
        insert(target, t3, anchor);
        insert(target, input1, anchor);
        input1.checked =
        /*file*/
        ctx[0].sameWindow;
        insert(target, t4, anchor);
        insert(target, label1, anchor);
        insert(target, t6, anchor);
        insert(target, input2, anchor);
        input2.checked =
        /*file*/
        ctx[0].skipConfirmation;
        insert(target, t7, anchor);
        insert(target, label2, anchor);
        input0.focus();

        if (!mounted) {
          dispose = [listen(input0, "input",
          /*input0_input_handler*/
          ctx[6]), listen(input1, "change",
          /*input1_change_handler*/
          ctx[7]), listen(input2, "change",
          /*input2_change_handler*/
          ctx[8])];
          mounted = true;
        }
      },

      p(ctx, dirty) {
        if (dirty &
        /*file*/
        1 && input0.value !==
        /*file*/
        ctx[0].url) {
          set_input_value(input0,
          /*file*/
          ctx[0].url);
        }

        if (dirty &
        /*file*/
        1) {
          input1.checked =
          /*file*/
          ctx[0].sameWindow;
        }

        if (dirty &
        /*file*/
        1 && input2_disabled_value !== (input2_disabled_value = !
        /*file*/
        ctx[0].sameWindow)) {
          input2.disabled = input2_disabled_value;
        }

        if (dirty &
        /*file*/
        1) {
          input2.checked =
          /*file*/
          ctx[0].skipConfirmation;
        }
      },

      d(detaching) {
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
  } // (69:3) {#if !loading}


  function create_if_block_1$1(ctx) {
    var a;
    var t_1_value =
    /*t*/
    ctx[2]("files_linkeditor", "Visit link") + "";
    var t_1;
    var a_href_value;
    return {
      c() {
        a = element("a");
        t_1 = text(t_1_value);
        attr(a, "href", a_href_value = sanitizeUrl(
        /*file*/
        ctx[0].url));
        attr(a, "target", "_blank");
        attr(a, "class", "button");
      },

      m(target, anchor) {
        insert(target, a, anchor);
        append(a, t_1);
      },

      p(ctx, dirty) {
        if (dirty &
        /*file*/
        1 && a_href_value !== (a_href_value = sanitizeUrl(
        /*file*/
        ctx[0].url))) {
          attr(a, "href", a_href_value);
        }
      },

      d(detaching) {
        if (detaching) detach(a);
      }

    };
  } // (82:3) {#if !loading}


  function create_if_block$1(ctx) {
    var a;
    var t_1_value =
    /*t*/
    ctx[2]("files_linkeditor", "Save") + "";
    var t_1;
    var a_href_value;
    var mounted;
    var dispose;
    return {
      c() {
        a = element("a");
        t_1 = text(t_1_value);
        attr(a, "href", a_href_value =
        /*file*/
        ctx[0].currentUrl);
        attr(a, "class", "primary button");
      },

      m(target, anchor) {
        insert(target, a, anchor);
        append(a, t_1);

        if (!mounted) {
          dispose = listen(a, "click", prevent_default(
          /*save*/
          ctx[4]));
          mounted = true;
        }
      },

      p(ctx, dirty) {
        if (dirty &
        /*file*/
        1 && a_href_value !== (a_href_value =
        /*file*/
        ctx[0].currentUrl)) {
          attr(a, "href", a_href_value);
        }
      },

      d(detaching) {
        if (detaching) detach(a);
        mounted = false;
        dispose();
      }

    };
  } // (39:0) <Overlay {loading}>


  function create_default_slot$1(ctx) {
    var form;
    var div0;
    var h3;
    var t0_value =
    /*file*/
    ctx[0].name + "";
    var t0;
    var t1;
    var t2;
    var div1;
    var t3;
    var div2;
    var a;
    var t4_value =
    /*t*/
    ctx[2]("files_linkeditor", "Cancel") + "";
    var t4;
    var a_href_value;
    var t5;
    var form_action_value;
    var mounted;
    var dispose;
    var if_block0 = !
    /*loading*/
    ctx[1] && create_if_block_2$1(ctx);
    var if_block1 = !
    /*loading*/
    ctx[1] && create_if_block_1$1(ctx);
    var if_block2 = !
    /*loading*/
    ctx[1] && create_if_block$1(ctx);
    return {
      c() {
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
        attr(a, "href", a_href_value =
        /*file*/
        ctx[0].currentUrl);
        attr(a, "class", "cancel button");
        attr(div2, "class", "oc-dialog-buttonrow twobuttons");
        attr(form, "action", form_action_value =
        /*OC*/
        ctx[3].generateUrl("/"));
        attr(form, "method", "post");
      },

      m(target, anchor) {
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
          dispose = [listen(a, "click", prevent_default(
          /*click_handler*/
          ctx[9])), listen(form, "submit", prevent_default(
          /*save*/
          ctx[4]))];
          mounted = true;
        }
      },

      p(ctx, dirty) {
        if (dirty &
        /*file*/
        1 && t0_value !== (t0_value =
        /*file*/
        ctx[0].name + "")) set_data(t0, t0_value);

        if (!
        /*loading*/
        ctx[1]) {
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

        if (!
        /*loading*/
        ctx[1]) {
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

        if (dirty &
        /*file*/
        1 && a_href_value !== (a_href_value =
        /*file*/
        ctx[0].currentUrl)) {
          attr(a, "href", a_href_value);
        }

        if (!
        /*loading*/
        ctx[1]) {
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

      d(detaching) {
        if (detaching) detach(form);
        if (if_block0) if_block0.d();
        if (if_block1) if_block1.d();
        if (if_block2) if_block2.d();
        mounted = false;
        run_all(dispose);
      }

    };
  }

  function create_fragment$3(ctx) {
    var current;
    var overlay = new Overlay({
      props: {
        loading:
        /*loading*/
        ctx[1],
        $$slots: {
          default: [create_default_slot$1]
        },
        $$scope: {
          ctx
        }
      }
    });
    return {
      c() {
        create_component(overlay.$$.fragment);
      },

      m(target, anchor) {
        mount_component(overlay, target, anchor);
        current = true;
      },

      p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        var overlay_changes = {};
        if (dirty &
        /*loading*/
        2) overlay_changes.loading =
        /*loading*/
        ctx[1];

        if (dirty &
        /*$$scope, file, loading*/
        1027) {
          overlay_changes.$$scope = {
            dirty,
            ctx
          };
        }

        overlay.$set(overlay_changes);
      },

      i(local) {
        if (current) return;
        transition_in(overlay.$$.fragment, local);
        current = true;
      },

      o(local) {
        transition_out(overlay.$$.fragment, local);
        current = false;
      },

      d(detaching) {
        destroy_component(overlay, detaching);
      }

    };
  }

  function instance$3($$self, $$props, $$invalidate) {
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
        return "none";
      });
    };

    var file;
    var loading;

     $$invalidate(0, file = FileService.getFileConfig());

     $$invalidate(1, loading = true);

    return [file, loading, t, OC, save, unsubscribe, input0_input_handler, input1_change_handler, input2_change_handler, click_handler];
  }

  var Editor = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Editor, _SvelteComponent);

    var _super = _createSuper(Editor);

    function Editor(options) {
      var _this;

      _classCallCheck(this, Editor);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {});
      return _this;
    }

    return Editor;
  }(SvelteComponent);

  function create_if_block_1$2(ctx) {
    var current;
    var viewer = new Viewer({});
    return {
      c() {
        create_component(viewer.$$.fragment);
      },

      m(target, anchor) {
        mount_component(viewer, target, anchor);
        current = true;
      },

      i(local) {
        if (current) return;
        transition_in(viewer.$$.fragment, local);
        current = true;
      },

      o(local) {
        transition_out(viewer.$$.fragment, local);
        current = false;
      },

      d(detaching) {
        destroy_component(viewer, detaching);
      }

    };
  } // (25:0) {#if viewMode === 'edit'}


  function create_if_block$2(ctx) {
    var current;
    var editor = new Editor({});
    return {
      c() {
        create_component(editor.$$.fragment);
      },

      m(target, anchor) {
        mount_component(editor, target, anchor);
        current = true;
      },

      i(local) {
        if (current) return;
        transition_in(editor.$$.fragment, local);
        current = true;
      },

      o(local) {
        transition_out(editor.$$.fragment, local);
        current = false;
      },

      d(detaching) {
        destroy_component(editor, detaching);
      }

    };
  }

  function create_fragment$4(ctx) {
    var t;
    var if_block1_anchor;
    var current;
    var if_block0 =
    /*viewMode*/
    ctx[0] === "view" && create_if_block_1$2();
    var if_block1 =
    /*viewMode*/
    ctx[0] === "edit" && create_if_block$2();
    return {
      c() {
        if (if_block0) if_block0.c();
        t = space();
        if (if_block1) if_block1.c();
        if_block1_anchor = empty();
      },

      m(target, anchor) {
        if (if_block0) if_block0.m(target, anchor);
        insert(target, t, anchor);
        if (if_block1) if_block1.m(target, anchor);
        insert(target, if_block1_anchor, anchor);
        current = true;
      },

      p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (
        /*viewMode*/
        ctx[0] === "view") {
          if (if_block0) {
            if (dirty &
            /*viewMode*/
            1) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_1$2();
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

        if (
        /*viewMode*/
        ctx[0] === "edit") {
          if (if_block1) {
            if (dirty &
            /*viewMode*/
            1) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block$2();
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

      i(local) {
        if (current) return;
        transition_in(if_block0);
        transition_in(if_block1);
        current = true;
      },

      o(local) {
        transition_out(if_block0);
        transition_out(if_block1);
        current = false;
      },

      d(detaching) {
        if (if_block0) if_block0.d(detaching);
        if (detaching) detach(t);
        if (if_block1) if_block1.d(detaching);
        if (detaching) detach(if_block1_anchor);
      }

    };
  }

  function instance$4($$self, $$props, $$invalidate) {
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
    var viewMode$1;

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
      init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {});
      return _this;
    }

    return App;
  }(SvelteComponent);

  var components = [];
  components.push(new App({
    target: document.body,
    props: {}
  }));
  LinkeditorService.registerFileActions();

}());
