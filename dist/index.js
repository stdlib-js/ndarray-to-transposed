"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=t(function(g,s){
var u=require('@stdlib/assert-is-ndarray-like/dist'),i=require('@stdlib/ndarray-base-ndims/dist'),v=require('@stdlib/ndarray-base-ndarraylike2ndarray/dist'),d=require('@stdlib/ndarray-base-transpose/dist'),m=require('@stdlib/ndarray-empty-like/dist'),p=require('@stdlib/ndarray-base-assign/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function q(e){var r,a;if(!u(e))throw new TypeError(n('nullDv',e));if(i(e)<2)throw new RangeError(n("invalid argument. Must provide an ndarray having two or more dimensions. Number of dimensions: `%u`.",i(e)));return a=v(e),a=d(a,!1),r=m(a),p([a,r]),r}s.exports=q
});var y=o();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
