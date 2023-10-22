goog.provide('thi.ng.typedarrays.core');
/**
 * Returns true if JS runtime supports typed arrays
 */
thi.ng.typedarrays.core.typed_arrays_supported_QMARK_ = (function thi$ng$typedarrays$core$typed_arrays_supported_QMARK_(){
return (!(((window["ArrayBuffer"]) == null)));
});
thi.ng.typedarrays.core.array_types = cljs.core.PersistentHashMap.fromArrays(["Float64Array","Uint8Array","Int8Array","Uint8ClampedArray","Uint16Array","Int16Array","Uint32Array","Float32Array","Int32Array"],[new cljs.core.Keyword(null,"float64","float64",1881838306),new cljs.core.Keyword(null,"uint8","uint8",956521151),new cljs.core.Keyword(null,"int8","int8",-1834023920),new cljs.core.Keyword(null,"uint8-clamped","uint8-clamped",1439331936),new cljs.core.Keyword(null,"uint16","uint16",-588869202),new cljs.core.Keyword(null,"int16","int16",-188764863),new cljs.core.Keyword(null,"uint32","uint32",-418789486),new cljs.core.Keyword(null,"float32","float32",-2119815775),new cljs.core.Keyword(null,"int32","int32",1718804896)]);
/**
 * Returns truthy value if the given arg is a typed array instance
 */
thi.ng.typedarrays.core.typed_array_QMARK_ = (function thi$ng$typedarrays$core$typed_array_QMARK_(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("object",goog.typeOf(x))){
if(typeof x.BYTES_PER_ELEMENT === 'number'){
return x.buffer;
} else {
return null;
}
} else {
return null;
}
});
thi.ng.typedarrays.core.array_type = (function thi$ng$typedarrays$core$array_type(x){
if(cljs.core.array_QMARK_(x)){
return new cljs.core.Keyword(null,"array","array",-2080713842);
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(x))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(thi.ng.typedarrays.core.array_types,cljs.core.first(cljs.core.re_find(/((Uint|Int|Float)\d+(Clamped)?Array)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.constructor))));
} else {
return null;
}
}
});
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_arrays_supported_QMARK_)){
cljs.core.run_BANG_((function (type){
if(cljs.core.truth_((self[type]).prototype.slice)){
return null;
} else {
return ((self[type]).prototype.slice = (function (from,to){
var this$ = this;
var from__$1 = (((from < (0)))?((this$.length + from) | (0)):(from | (0)));
var to__$1 = (cljs.core.truth_(goog.isNumber(to))?(((to < (0)))?((this$.length + to) | (0)):Math.min(to,this$.length)):this$.length);
var len = Math.max((to__$1 - from__$1),(0));
var ctor = this$.constructor;
var dest = new ctor(len);
var i_35449 = (0);
while(true){
if((i_35449 < len)){
(dest[i_35449] = (this$[(from__$1 + i_35449)]));

var G__35450 = (i_35449 + (1));
i_35449 = G__35450;
continue;
} else {
}
break;
}

return dest;
}));
}
}),cljs.core.keys(thi.ng.typedarrays.core.array_types));
} else {
}
/**
 * Creates a native Int8Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.int8 = (function thi$ng$typedarrays$core$int8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int8Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return (new Int8Array(size_or_coll));
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Int8Array(len));
var i_35451 = (0);
var coll_35452 = size_or_coll;
while(true){
if((i_35451 < len)){
(buf[i_35451] = cljs.core.first(coll_35452));

var G__35453 = (i_35451 + (1));
var G__35454 = cljs.core.next(coll_35452);
i_35451 = G__35453;
coll_35452 = G__35454;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Int8Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.int8_view = (function thi$ng$typedarrays$core$int8_view(var_args){
var G__35399 = arguments.length;
switch (G__35399) {
case 1:
return thi.ng.typedarrays.core.int8_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.int8_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.typedarrays.core.int8_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Int8Array(a.buffer));
}));

(thi.ng.typedarrays.core.int8_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Int8Array(a.buffer,offset,len));
}));

(thi.ng.typedarrays.core.int8_view.cljs$lang$maxFixedArity = 3);

/**
 * Creates a native Uint8Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.uint8 = (function thi$ng$typedarrays$core$uint8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return (new Uint8Array(size_or_coll));
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Uint8Array(len));
var i_35470 = (0);
var coll_35471 = size_or_coll;
while(true){
if((i_35470 < len)){
(buf[i_35470] = cljs.core.first(coll_35471));

var G__35472 = (i_35470 + (1));
var G__35473 = cljs.core.next(coll_35471);
i_35470 = G__35472;
coll_35471 = G__35473;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Uint8Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.uint8_view = (function thi$ng$typedarrays$core$uint8_view(var_args){
var G__35403 = arguments.length;
switch (G__35403) {
case 1:
return thi.ng.typedarrays.core.uint8_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint8_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.typedarrays.core.uint8_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Uint8Array(a.buffer));
}));

(thi.ng.typedarrays.core.uint8_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Uint8Array(a.buffer,offset,len));
}));

(thi.ng.typedarrays.core.uint8_view.cljs$lang$maxFixedArity = 3);

/**
 * Creates a native Uint8ClampedArray of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.uint8_clamped = (function thi$ng$typedarrays$core$uint8_clamped(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8ClampedArray(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return (new Uint8ClampedArray(size_or_coll));
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Uint8ClampedArray(len));
var i_35475 = (0);
var coll_35476 = size_or_coll;
while(true){
if((i_35475 < len)){
(buf[i_35475] = cljs.core.first(coll_35476));

var G__35477 = (i_35475 + (1));
var G__35478 = cljs.core.next(coll_35476);
i_35475 = G__35477;
coll_35476 = G__35478;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Uint8ClampedArray view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.uint8_clamped_view = (function thi$ng$typedarrays$core$uint8_clamped_view(var_args){
var G__35406 = arguments.length;
switch (G__35406) {
case 1:
return thi.ng.typedarrays.core.uint8_clamped_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint8_clamped_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.typedarrays.core.uint8_clamped_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Uint8ClampedArray(a.buffer));
}));

(thi.ng.typedarrays.core.uint8_clamped_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Uint8ClampedArray(a.buffer,offset,len));
}));

(thi.ng.typedarrays.core.uint8_clamped_view.cljs$lang$maxFixedArity = 3);

/**
 * Creates a native Int16Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.int16 = (function thi$ng$typedarrays$core$int16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int16Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return (new Int16Array(size_or_coll));
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Int16Array(len));
var i_35480 = (0);
var coll_35481 = size_or_coll;
while(true){
if((i_35480 < len)){
(buf[i_35480] = cljs.core.first(coll_35481));

var G__35482 = (i_35480 + (1));
var G__35483 = cljs.core.next(coll_35481);
i_35480 = G__35482;
coll_35481 = G__35483;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Int16Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.int16_view = (function thi$ng$typedarrays$core$int16_view(var_args){
var G__35408 = arguments.length;
switch (G__35408) {
case 1:
return thi.ng.typedarrays.core.int16_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.int16_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.typedarrays.core.int16_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Int16Array(a.buffer));
}));

(thi.ng.typedarrays.core.int16_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Int16Array(a.buffer,offset,len));
}));

(thi.ng.typedarrays.core.int16_view.cljs$lang$maxFixedArity = 3);

/**
 * Creates a native Uint16Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.uint16 = (function thi$ng$typedarrays$core$uint16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint16Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return (new Uint16Array(size_or_coll));
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Uint16Array(len));
var i_35485 = (0);
var coll_35486 = size_or_coll;
while(true){
if((i_35485 < len)){
(buf[i_35485] = cljs.core.first(coll_35486));

var G__35487 = (i_35485 + (1));
var G__35488 = cljs.core.next(coll_35486);
i_35485 = G__35487;
coll_35486 = G__35488;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Uint16Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.uint16_view = (function thi$ng$typedarrays$core$uint16_view(var_args){
var G__35416 = arguments.length;
switch (G__35416) {
case 1:
return thi.ng.typedarrays.core.uint16_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint16_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.typedarrays.core.uint16_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Uint16Array(a.buffer));
}));

(thi.ng.typedarrays.core.uint16_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Uint16Array(a.buffer,offset,len));
}));

(thi.ng.typedarrays.core.uint16_view.cljs$lang$maxFixedArity = 3);

/**
 * Creates a native Int32Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.int32 = (function thi$ng$typedarrays$core$int32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return (new Int32Array(size_or_coll));
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Int32Array(len));
var i_35493 = (0);
var coll_35494 = size_or_coll;
while(true){
if((i_35493 < len)){
(buf[i_35493] = cljs.core.first(coll_35494));

var G__35495 = (i_35493 + (1));
var G__35496 = cljs.core.next(coll_35494);
i_35493 = G__35495;
coll_35494 = G__35496;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Int32Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.int32_view = (function thi$ng$typedarrays$core$int32_view(var_args){
var G__35430 = arguments.length;
switch (G__35430) {
case 1:
return thi.ng.typedarrays.core.int32_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.int32_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.typedarrays.core.int32_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Int32Array(a.buffer));
}));

(thi.ng.typedarrays.core.int32_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Int32Array(a.buffer,offset,len));
}));

(thi.ng.typedarrays.core.int32_view.cljs$lang$maxFixedArity = 3);

/**
 * Creates a native Uint32Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.uint32 = (function thi$ng$typedarrays$core$uint32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return (new Uint32Array(size_or_coll));
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Uint32Array(len));
var i_35505 = (0);
var coll_35506 = size_or_coll;
while(true){
if((i_35505 < len)){
(buf[i_35505] = cljs.core.first(coll_35506));

var G__35507 = (i_35505 + (1));
var G__35508 = cljs.core.next(coll_35506);
i_35505 = G__35507;
coll_35506 = G__35508;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Uint32Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.uint32_view = (function thi$ng$typedarrays$core$uint32_view(var_args){
var G__35433 = arguments.length;
switch (G__35433) {
case 1:
return thi.ng.typedarrays.core.uint32_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint32_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.typedarrays.core.uint32_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Uint32Array(a.buffer));
}));

(thi.ng.typedarrays.core.uint32_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Uint32Array(a.buffer,offset,len));
}));

(thi.ng.typedarrays.core.uint32_view.cljs$lang$maxFixedArity = 3);

/**
 * Creates a native Float32Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.float32 = (function thi$ng$typedarrays$core$float32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return (new Float32Array(size_or_coll));
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Float32Array(len));
var i_35511 = (0);
var coll_35512 = size_or_coll;
while(true){
if((i_35511 < len)){
(buf[i_35511] = cljs.core.first(coll_35512));

var G__35513 = (i_35511 + (1));
var G__35514 = cljs.core.next(coll_35512);
i_35511 = G__35513;
coll_35512 = G__35514;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Float32Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.float32_view = (function thi$ng$typedarrays$core$float32_view(var_args){
var G__35439 = arguments.length;
switch (G__35439) {
case 1:
return thi.ng.typedarrays.core.float32_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.float32_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.typedarrays.core.float32_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Float32Array(a.buffer));
}));

(thi.ng.typedarrays.core.float32_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Float32Array(a.buffer,offset,len));
}));

(thi.ng.typedarrays.core.float32_view.cljs$lang$maxFixedArity = 3);

/**
 * Creates a native Float64Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.float64 = (function thi$ng$typedarrays$core$float64(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float64Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return (new Float64Array(size_or_coll));
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Float64Array(len));
var i_35517 = (0);
var coll_35518 = size_or_coll;
while(true){
if((i_35517 < len)){
(buf[i_35517] = cljs.core.first(coll_35518));

var G__35519 = (i_35517 + (1));
var G__35520 = cljs.core.next(coll_35518);
i_35517 = G__35519;
coll_35518 = G__35520;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Float64Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.float64_view = (function thi$ng$typedarrays$core$float64_view(var_args){
var G__35448 = arguments.length;
switch (G__35448) {
case 1:
return thi.ng.typedarrays.core.float64_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.float64_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.typedarrays.core.float64_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Float64Array(a.buffer));
}));

(thi.ng.typedarrays.core.float64_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Float64Array(a.buffer,offset,len));
}));

(thi.ng.typedarrays.core.float64_view.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=thi.ng.typedarrays.core.js.map
