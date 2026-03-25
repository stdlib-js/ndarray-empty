"use strict";var b=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var q=b(function(R,y){"use strict";var w=require("@stdlib/ndarray-base-assert-is-data-type"),E=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,c=require("@stdlib/assert-is-plain-object"),s=require("@stdlib/assert-has-own-property"),T=require("@stdlib/assert-is-nonnegative-integer-array").primitives,h=require("@stdlib/assert-is-empty-collection"),D=require("@stdlib/ndarray-base-shape2strides"),O=require("@stdlib/array-empty"),A=require("@stdlib/buffer-alloc-unsafe"),N=require("@stdlib/ndarray-base-dtype-resolve-str"),P=require("@stdlib/ndarray-base-numel"),j=require("@stdlib/ndarray-ctor"),p=require("@stdlib/ndarray-defaults"),F=require("@stdlib/ndarray-dtypes"),U=require("@stdlib/array-base-join"),d=require("@stdlib/string-format"),f=p.get("dtypes.default"),g=p.get("order");function x(r){var e,i,a,m,n,u,o,v,l,t;if(n={},arguments.length>1){if(e=arguments[1],!c(e))throw new TypeError(d("invalid argument. Options argument must be an object. Value: `%s`.",e));if(s(e,"dtype")){if(i=e.dtype,!w(i))throw new TypeError(d('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"dtype",U(F(),'", "'),i))}else i=f;s(e,"order")?a=e.order:a=g,s(e,"mode")&&(n.mode=e.mode),s(e,"submode")&&(n.submode=e.submode)}else i=f,a=g;if(E(r))t=[r];else if(T(r)||h(r))t=r;else throw new TypeError(d("invalid argument. First argument must be either a nonnegative integer or an array of nonnegative integers. Value: `%s`.",r));return m=t.length,m>0?(o=P(t),l=D(t,a)):(o=1,l=[0]),v=N(i),v==="binary"?u=A(o):u=O(o,v),new j(i,u,t,l,0,a,n)}y.exports=x});var I=q();module.exports=I;
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
