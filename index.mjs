// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2offset@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-empty@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-alloc-unsafe@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-defaults@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";var j=l.get("dtypes.default"),a=l.get("order");function f(l){var f,h,b,v,y,g,c,u;if(v={},arguments.length>1){if(!e(f=arguments[1]))throw new TypeError(p("1db2V,FD",f));h=s(f,"dtype")?f.dtype:j,b=s(f,"order")?f.order:a,s(f,"mode")&&(v.mode=f.mode),s(f,"submode")&&(v.submode=f.submode)}else h=j,b=a;if("number"==typeof l)u=[l];else{if(!r(l))throw new TypeError(p("1db5s,Kf",l));u=l}if(u.length>0){if((g=n(u))!=g||g<0)throw new TypeError(p("1db5s,Kf",l));c=t(u,b)}else g=1,c=[0];return y="binary"===h?m(g):i(g,h),new o(h,y,u,c,d(u,c),b,v)}export{f as default};
//# sourceMappingURL=index.mjs.map