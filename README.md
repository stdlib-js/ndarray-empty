<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# empty

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an uninitialized [ndarray][@stdlib/ndarray/ctor] having a specified shape and [data type][@stdlib/ndarray/dtypes].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
empty = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-empty@v0.0.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var empty = require( 'path/to/vendor/umd/ndarray-empty/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-empty@v0.0.1-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.empty;
})();
</script>
```

#### empty( shape\[, options] )

Creates an uninitialized [ndarray][@stdlib/ndarray/ctor] having a specified shape and [data type][@stdlib/ndarray/dtypes].

```javascript
var arr = empty( [ 2, 2 ] );
// returns <ndarray>

var sh = arr.shape;
// returns [ 2, 2 ]

var dt = arr.dtype;
// returns 'float64'
```

The specified output [ndarray][@stdlib/ndarray/ctor] `shape` may be either an array-like object or an integer value.

```javascript
var arr = empty( 2 );
// returns <ndarray>

var sh = arr.shape;
// returns [ 2 ]

var dt = arr.dtype;
// returns 'float64'
```

The function accepts the following `options`:

-   **dtype**: underlying [data type][@stdlib/ndarray/dtypes]. Default: `'float64'`.
-   **order**: specifies whether an [ndarray][@stdlib/ndarray/ctor] is `'row-major'` (C-style) or `'column-major'` (Fortran-style). Default: `'row-major'`.
-   **mode**: specifies how to handle indices which exceed array dimensions (see [`ndarray`][@stdlib/ndarray/ctor]). Default: `'throw'`.
-   **submode**: a mode array which specifies for each dimension how to handle subscripts which exceed array dimensions  (see [`ndarray`][@stdlib/ndarray/ctor]). If provided fewer modes than dimensions, the constructor recycles modes using modulo arithmetic. Default: `[ options.mode ]`.

By default, the function returns an [ndarray][@stdlib/ndarray/ctor] having a [`float64`][@stdlib/ndarray/dtypes] data type. To specify an alternative [data type][@stdlib/ndarray/dtypes], provide a `dtype` option.

```javascript
var arr = empty( [ 2, 2 ], {
    'dtype': 'float32'
});
// returns <ndarray>

var sh = arr.shape;
// returns [ 2, 2 ]

var dt = arr.dtype;
// returns 'float32'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If the `dtype` option is `'generic'`, the function always returns a zero-filled ndarray.
-   For returned [ndarrays][@stdlib/ndarray/ctor] whose underlying memory is **not** initialized, memory contents are unknown and may contain **sensitive** data.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-empty@v0.0.1-umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Get a list of data types:
var dt = dtypes();

// Generate uninitialized arrays...
var arr;
var i;
for ( i = 0; i < dt.length; i++ ) {
    arr = empty( [ 2, 2 ], {
        'dtype': dt[ i ]
    });
    console.log( arr.data );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-empty.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-empty

[test-image]: https://github.com/stdlib-js/ndarray-empty/actions/workflows/test.yml/badge.svg?branch=v0.0.1
[test-url]: https://github.com/stdlib-js/ndarray-empty/actions/workflows/test.yml?query=branch:v0.0.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-empty/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-empty?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-empty.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-empty/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-empty/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-empty/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-empty/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-empty/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-empty/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/stdlib/tree/umd

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/stdlib/tree/umd

</section>

<!-- /.links -->
