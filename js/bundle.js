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
