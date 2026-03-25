"use strict";var b=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var q=b(function(A,y){"use strict";var p=require("@stdlib/assert-is-number").isPrimitive,w=require("@stdlib/assert-is-plain-object"),u=require("@stdlib/assert-has-own-property"),c=require("@stdlib/assert-is-array-like"),h=require("@stdlib/ndarray-base-shape2strides"),E=require("@stdlib/array-empty"),O=require("@stdlib/buffer-alloc-unsafe"),P=require("@stdlib/ndarray-base-numel"),T=require("@stdlib/ndarray-ctor"),f=require("@stdlib/ndarray-defaults"),m=require("@stdlib/string-format"),l=f.get("dtypes.default"),g=f.get("order");function V(r){var e,i,n,d,s,o,a,v,t;if(s={},arguments.length>1){if(e=arguments[1],!w(e))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",e));u(e,"dtype")?i=e.dtype:i=l,u(e,"order")?n=e.order:n=g,u(e,"mode")&&(s.mode=e.mode),u(e,"submode")&&(s.submode=e.submode)}else i=l,n=g;if(p(r))t=[r];else if(c(r))t=r;else throw new TypeError(m("invalid argument. First argument must be either a nonnegative integer or an array of nonnegative integers. Value: `%s`.",r));if(d=t.length,d>0){if(a=P(t),a!==a||a<0)throw new TypeError(m("invalid argument. First argument must be either a nonnegative integer or an array of nonnegative integers. Value: `%s`.",r));v=h(t,n)}else a=1,v=[0];return i==="binary"?o=O(a):o=E(a,i),new T(i,o,t,v,0,n,s)}y.exports=V});var j=q();module.exports=j;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
