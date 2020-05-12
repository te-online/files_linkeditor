(function () {
    'use strict';

    function noop() {}

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
      return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
    }

    function detach(node) {
      node.parentNode.removeChild(node);
    }

    function children(element) {
      return Array.from(element.childNodes);
    }

    let current_component;

    function set_current_component(component) {
      current_component = component;
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
      if (flushing) return;
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

        while (binding_callbacks.length) binding_callbacks.pop()(); // then, once components are updated, call
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

    function transition_in(block, local) {
      if (block && block.i) {
        outroing.delete(block);
        block.i(local);
      }
    }

    function mount_component(component, target, anchor) {
      const {
        fragment,
        on_mount,
        on_destroy,
        after_update
      } = component.$$;
      fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

      add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);

        if (on_destroy) {
          on_destroy.push(...new_on_destroy);
        } else {
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
        $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
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

      component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
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
      $$.ctx = instance ? instance(component, prop_values, (i, ret, ...rest) => {
        const value = rest.length ? rest[0] : ret;

        if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
          if ($$.bound[i]) $$.bound[i](value);
          if (ready) make_dirty(component, i);
        }

        return ret;
      }) : [];
      $$.update();
      ready = true;
      run_all($$.before_update); // `false` as a special case of no DOM component

      $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

      if (options.target) {
        if (options.hydrate) {
          const nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

          $$.fragment && $$.fragment.l(nodes);
          nodes.forEach(detach);
        } else {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          $$.fragment && $$.fragment.c();
        }

        if (options.intro) transition_in(component.$$.fragment);
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
        const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return () => {
          const index = callbacks.indexOf(callback);
          if (index !== -1) callbacks.splice(index, 1);
        };
      }

      $set() {// overridden by instance, if it has props
      }

    }

    /* js/templates/App.svelte generated by Svelte v3.22.2 */

    class App extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, null, null, safe_not_equal, {});
    	}
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
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


    var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
      var keys = objectGetOwnPropertyNames.f(anObject(it));
      var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
      return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
    };

    var copyConstructorProperties = function (target, source) {
      var keys = ownKeys(source);
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

    var aFunction$1 = function (it) {
      if (typeof it != 'function') {
        throw TypeError(String(it) + ' is not a function');
      }

      return it;
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

    // `ToObject` abstract operation
    // https://tc39.github.io/ecma262/#sec-toobject


    var toObject = function (argument) {
      return Object(requireObjectCoercible(argument));
    };

    // `IsArray` abstract operation
    // https://tc39.github.io/ecma262/#sec-isarray


    var isArray = Array.isArray || function isArray(arg) {
      return classofRaw(arg) == 'Array';
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

    var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation

    var createMethod$1 = function (TYPE) {
      var IS_MAP = TYPE == 1;
      var IS_FILTER = TYPE == 2;
      var IS_SOME = TYPE == 3;
      var IS_EVERY = TYPE == 4;
      var IS_FIND_INDEX = TYPE == 6;
      var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
      return function ($this, callbackfn, that, specificCreate) {
        var O = toObject($this);
        var self = indexedObject(O);
        var boundFunction = functionBindContext(callbackfn, that, 3);
        var length = toLength(self.length);
        var index = 0;
        var create = specificCreate || arraySpeciesCreate;
        var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
        var value, result;

        for (; length > index; index++) if (NO_HOLES || index in self) {
          value = self[index];
          result = boundFunction(value, index, O);

          if (TYPE) {
            if (IS_MAP) target[index] = result; // map
            else if (result) switch (TYPE) {
                case 3:
                  return true;
                // some

                case 5:
                  return value;
                // find

                case 6:
                  return index;
                // findIndex

                case 2:
                  push.call(target, value);
                // filter
              } else if (IS_EVERY) return false; // every
          }
        }

        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
      };
    };

    var arrayIteration = {
      // `Array.prototype.forEach` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
      forEach: createMethod$1(0),
      // `Array.prototype.map` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.map
      map: createMethod$1(1),
      // `Array.prototype.filter` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.filter
      filter: createMethod$1(2),
      // `Array.prototype.some` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.some
      some: createMethod$1(3),
      // `Array.prototype.every` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.every
      every: createMethod$1(4),
      // `Array.prototype.find` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.find
      find: createMethod$1(5),
      // `Array.prototype.findIndex` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
      findIndex: createMethod$1(6)
    };

    var arrayMethodIsStrict = function (METHOD_NAME, argument) {
      var method = [][METHOD_NAME];
      return !!method && fails(function () {
        // eslint-disable-next-line no-useless-call,no-throw-literal
        method.call(null, argument || function () {
          throw 1;
        }, 1);
      });
    };

    var defineProperty = Object.defineProperty;
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
        if (ACCESSORS) defineProperty(O, 1, {
          enumerable: true,
          get: thrower
        });else O[1] = 1;
        method.call(O, argument0, argument1);
      });
    };

    var $forEach = arrayIteration.forEach;





    var STRICT_METHOD = arrayMethodIsStrict('forEach');
    var USES_TO_LENGTH = arrayMethodUsesToLength('forEach'); // `Array.prototype.forEach` method implementation
    // https://tc39.github.io/ecma262/#sec-array.prototype.foreach

    var arrayForEach = !STRICT_METHOD || !USES_TO_LENGTH ? function forEach(callbackfn
    /* , thisArg */
    ) {
      return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    } : [].forEach;

    // `Array.prototype.forEach` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.foreach


    _export({
      target: 'Array',
      proto: true,
      forced: [].forEach != arrayForEach
    }, {
      forEach: arrayForEach
    });

    var $indexOf = arrayIncludes.indexOf;





    var nativeIndexOf = [].indexOf;
    var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
    var STRICT_METHOD$1 = arrayMethodIsStrict('indexOf');
    var USES_TO_LENGTH$1 = arrayMethodUsesToLength('indexOf', {
      ACCESSORS: true,
      1: 0
    }); // `Array.prototype.indexOf` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.indexof

    _export({
      target: 'Array',
      proto: true,
      forced: NEGATIVE_ZERO || !STRICT_METHOD$1 || !USES_TO_LENGTH$1
    }, {
      indexOf: function indexOf(searchElement
      /* , fromIndex = 0 */
      ) {
        return NEGATIVE_ZERO // convert -0 to +0
        ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
      }
    });

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

    var SPECIES$1 = wellKnownSymbol('species');

    var setSpecies = function (CONSTRUCTOR_NAME) {
      var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
      var defineProperty = objectDefineProperty.f;

      if (descriptors && Constructor && !Constructor[SPECIES$1]) {
        defineProperty(Constructor, SPECIES$1, {
          configurable: true,
          get: function () {
            return this;
          }
        });
      }
    };

    var defineProperty$1 = objectDefineProperty.f;

    var getOwnPropertyNames = objectGetOwnPropertyNames.f;











    var setInternalState = internalState.set;





    var MATCH$1 = wellKnownSymbol('match');
    var NativeRegExp = global_1.RegExp;
    var RegExpPrototype = NativeRegExp.prototype;
    var re1 = /a/g;
    var re2 = /a/g; // "new" should create a new object, old webkit bug

    var CORRECT_NEW = new NativeRegExp(re1) !== re1;
    var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y;
    var FORCED = descriptors && isForced_1('RegExp', !CORRECT_NEW || UNSUPPORTED_Y$1 || fails(function () {
      re2[MATCH$1] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

      return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
    })); // `RegExp` constructor
    // https://tc39.github.io/ecma262/#sec-regexp-constructor

    if (FORCED) {
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

        if (UNSUPPORTED_Y$1) {
          sticky = !!flags && flags.indexOf('y') > -1;
          if (sticky) flags = flags.replace(/y/g, '');
        }

        var result = inheritIfRequired(CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);
        if (UNSUPPORTED_Y$1 && sticky) setInternalState(result, {
          sticky: sticky
        });
        return result;
      };

      var proxy = function (key) {
        key in RegExpWrapper || defineProperty$1(RegExpWrapper, key, {
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

    var UNSUPPORTED_Y$2 = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

    var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
    var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$2;

    if (PATCH) {
      patchedExec = function exec(str) {
        var re = this;
        var lastIndex, reCopy, match, i;
        var sticky = UNSUPPORTED_Y$2 && re.sticky;
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

    var SPECIES$2 = wellKnownSymbol('species');
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

          re.constructor[SPECIES$2] = function () {
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


    var createMethod$2 = function (CONVERT_TO_STRING) {
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
      codeAt: createMethod$2(false),
      // `String.prototype.at` method
      // https://github.com/mathiasbynens/String.prototype.at
      charAt: createMethod$2(true)
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

    var SPECIES$3 = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
    // https://tc39.github.io/ecma262/#sec-speciesconstructor

    var speciesConstructor = function (O, defaultConstructor) {
      var C = anObject(O).constructor;
      var S;
      return C === undefined || (S = anObject(C)[SPECIES$3]) == undefined ? defaultConstructor : aFunction$1(S);
    };

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

    // iterable DOM collections
    // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
    var domIterables = {
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
    };

    for (var COLLECTION_NAME in domIterables) {
      var Collection = global_1[COLLECTION_NAME];
      var CollectionPrototype = Collection && Collection.prototype; // some Chrome versions have non-configurable methods on DOMTokenList

      if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
        createNonEnumerableProperty(CollectionPrototype, 'forEach', arrayForEach);
      } catch (error) {
        CollectionPrototype.forEach = arrayForEach;
      }
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

    var LinkeditorService = /*#__PURE__*/function () {
      function LinkeditorService() {
        _classCallCheck(this, LinkeditorService);
      }

      _createClass(LinkeditorService, null, [{
        key: "registerFileActions",

        /**
         * Registers the file actions
         */
        value: function registerFileActions() {
          var mimes = LinkeditorService.getSupportedMimetypes();
          mimes.forEach(function (value) {
            window.OCA.Files.fileActions.registerAction({
              name: "editLink",
              displayName: t("files_linkeditor", "Edit link"),
              mime: value,
              // @TODO:
              actionHandler: function actionHandler(something) {
                console.log({
                  edit: true,
                  something: something
                });
              },
              permissions: window.OC.PERMISSION_UPDATE,
              iconClass: "icon-link"
            });
            window.OCA.Files.fileActions.registerAction({
              name: "viewLink",
              displayName: t("files_linkeditor", "View link"),
              mime: value,
              actionHandler: function actionHandler(filename, context) {
                window.context = context; // Build the download url.

                var downloadUrl = context.fileList.getDownloadUrl(filename); // Find out where we are to use this link for the cancel button.

                var currentUrl = encodeURI(context.fileList.linkTo() + "?path=" + context.dir); // Find the element we are clicking on.

                var linkElement = document.querySelector('[href="' + downloadUrl + '"]'); // Trigger view Action
                // @TODO:

                console.log({
                  view: true,
                  filename: filename,
                  downloadUrl: downloadUrl,
                  currentUrl: currentUrl,
                  linkElement: linkElement
                });
              },
              permissions: window.OC.PERMISSION_READ,
              iconClass: "icon-link"
            }); // Use Link viewing as default action.

            window.OCA.Files.fileActions.setDefault(value, "viewLink");
          });
          window.OC.Plugins.register("OCA.Files.NewFileMenu", {
            attach: function attach(menu) {
              var fileList = menu.fileList; // Only attach to main file list

              if (fileList.id !== "files") {
                return;
              } // Register the new menu entry


              menu.addMenuEntry({
                id: "application-internet-shortcut",
                displayName: window.t("files_linkeditor", "New link"),
                templateName: window.t("files_linkeditor", "Link.URL"),
                iconClass: "icon-link",
                fileType: "application/internet-shortcut",
                actionHandler: function actionHandler(name) {
                  var dir = fileList.getCurrentDirectory(); // First create the file

                  fileList.createFile(name, {
                    scrollTo: false
                  }).then(function () {
                    // once the file got successfully created,
                    // open the editor
                    // @TODO:
                    console.log({
                      new: true,
                      fileList: fileList,
                      dir: dir,
                      name: name
                    });
                  });
                }
              });
            }
          });
        }
      }, {
        key: "getSupportedMimetypes",
        value: function getSupportedMimetypes() {
          return ["application/internet-shortcut"];
        }
      }, {
        key: "encodeURI",
        value: function encodeURI() {}
        /**
         * Generates a URL file.
         */

      }, {
        key: "generateURLFileContent",
        value: function generateURLFileContent(oldcontent, url) {
          // Find if this is already a shortcut file.
          if (oldcontent && oldcontent.indexOf("[InternetShortcut]") !== -1 && oldcontent.indexOf("URL=") !== -1) {
            // Seems like it, replace the url.
            return oldcontent.replace(new RegExp("URL=.*", "gm"), "URL=" + sanitizeUrl(url));
          } else {
            // Okay, let's create a new file.
            return "[InternetShortcut]\r\nURL=" + sanitizeUrl(url) + "\r\n";
          }
        }
        /**
         * Parse a URL file.
         */

      }, {
        key: "parseURLFile",
        value: function parseURLFile(filecontent) {
          if (filecontent) {
            // Match for URL line.
            var urllines = filecontent.match("URL=.*"); // See if matches were found.

            if (urllines && Array.isArray(urllines) && urllines.length > 0) {
              // Let's use the first match.
              var url = urllines[0]; // Return only the URL.

              return sanitizeUrl(url.replace("URL=", ""));
            }
          }

          return "";
        }
        /**
         * Generates a webloc file.
         */

      }, {
        key: "generateWeblocFileContent",
        value: function generateWeblocFileContent(oldcontent, url) {
          // Find if this is already a shortcut file.
          // Match for URL line.
          var urlmatch = oldcontent.match("<key>URL</key>\n.<string>(.*)</string>"); // See if at least two matches were found (the whole expression and the url itself).

          if (urlmatch && Array.isArray(urlmatch) && urlmatch.length > 1) {
            // Seems like it, replace the url.
            return oldcontent.replace(urlmatch[1], sanitizeUrl(url));
          } else {
            // Okay, let's create a new file.
            return '<?xml version="1.0" encoding="UTF-8"?>\n' + '<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n' + '<plist version="1.0">\n' + "	<dict>\n" + "		<key>URL</key>\n" + "		<string>" + sanitizeUrl(url) + "</string>\n" + "	</dict>\n" + "</plist>";
          }
        }
        /**
         * Parse a webloc file.
         */

      }, {
        key: "parseWeblocFile",
        value: function parseWeblocFile(filecontent) {
          if (filecontent) {
            // Match for URL line.
            var urlmatch = filecontent.match("<key>URL</key>\n.<string>(.*)</string>"); // See if at least two matches were found (the whole expression and the url itself).

            if (urlmatch && Array.isArray(urlmatch) && urlmatch.length > 1) {
              // Let's use the first match.
              return sanitizeUrl(urlmatch[1]);
            }
          }

          return "";
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

      return LinkeditorService;
    }();

    var components = [];
    components.push(new App({
      target: document.body,
      props: {}
    }));
    LinkeditorService.registerFileActions();

}());
