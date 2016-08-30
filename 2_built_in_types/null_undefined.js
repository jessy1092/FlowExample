// @flow

(null: null);
// (null: void);  // Error

(undefined: void);
// (undefined: null);  // Error

// Optional function parameters
// foo?: string === foo: string | void
function optional_func(foo?: string) {
  (foo: string | void);
}

optional_func('foo');
optional_func(undefined);
optional_func();
// optional_func(null);  // Error, null not the void type

type optional_obj = {foo?: string}

({foo: 'foo'}: optional_obj);
({foo: undefined}: optional_obj);
({}: optional_obj);
// ({foo: null}: optional_obj);  // Error

// Function can set default parameter
function default_func(foo: string = 'default') {
  (foo: string);
}

default_func('foo');
default_func(undefined);  // Because pass undefined value would use the default parameter
default_func();
// default_func(null);  // Error, pass null value would not use the default parameter

// Function with type T | void | null
function maybe_func(foo: ?string) {
  (foo: string | void | null);
}
maybe_func('foo');
maybe_func(undefined);
maybe_func();
maybe_func(null);
