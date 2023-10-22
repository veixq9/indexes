goog.provide('clojure.core.matrix.impl.common');
/**
 * Returns a list of available implementations' objects
 */
clojure.core.matrix.impl.common.get_impl_objs = (function clojure$core$matrix$impl$common$get_impl_objs(){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(function (){var iter__5523__auto__ = (function clojure$core$matrix$impl$common$get_impl_objs_$_iter__22271(s__22272){
return (new cljs.core.LazySeq(null,(function (){
var s__22272__$1 = s__22272;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22272__$1);
if(temp__5804__auto__){
var s__22272__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22272__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22272__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22274 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22273 = (0);
while(true){
if((i__22273 < size__5522__auto__)){
var vec__22275 = cljs.core._nth(c__5521__auto__,i__22273);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22275,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22275,(1),null);
if(cljs.core.not((function (){var fexpr__22278 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"persistent-vector","persistent-vector",2032618025),null,new cljs.core.Keyword(null,"TODO","TODO",-523795145),null], null), null);
return (fexpr__22278.cljs$core$IFn$_invoke$arity$1 ? fexpr__22278.cljs$core$IFn$_invoke$arity$1(ns) : fexpr__22278.call(null,ns));
})())){
cljs.core.chunk_append(b__22274,(function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"obj","obj",981763962),clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(name)], null);
}catch (e22279){if((e22279 instanceof Error)){
var t = e22279;
return null;
} else {
throw e22279;

}
}})());

var G__22374 = (i__22273 + (1));
i__22273 = G__22374;
continue;
} else {
var G__22375 = (i__22273 + (1));
i__22273 = G__22375;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22274),clojure$core$matrix$impl$common$get_impl_objs_$_iter__22271(cljs.core.chunk_rest(s__22272__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22274),null);
}
} else {
var vec__22281 = cljs.core.first(s__22272__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22281,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22281,(1),null);
if(cljs.core.not((function (){var fexpr__22285 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"persistent-vector","persistent-vector",2032618025),null,new cljs.core.Keyword(null,"TODO","TODO",-523795145),null], null), null);
return (fexpr__22285.cljs$core$IFn$_invoke$arity$1 ? fexpr__22285.cljs$core$IFn$_invoke$arity$1(ns) : fexpr__22285.call(null,ns));
})())){
return cljs.core.cons((function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"obj","obj",981763962),clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(name)], null);
}catch (e22289){if((e22289 instanceof Error)){
var t = e22289;
return null;
} else {
throw e22289;

}
}})(),clojure$core$matrix$impl$common$get_impl_objs_$_iter__22271(cljs.core.rest(s__22272__$2)));
} else {
var G__22391 = cljs.core.rest(s__22272__$2);
s__22272__$1 = G__22391;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(clojure.core.matrix.implementations.KNOWN_IMPLEMENTATIONS);
})());
});
/**
 * Constructs an array from the provided data, attempting to use the given implementation.
 * Uses a default implementation if needed
 */
clojure.core.matrix.impl.common.construct_matrix = (function clojure$core$matrix$impl$common$construct_matrix(impl,data){
var or__5045__auto__ = clojure.core.matrix.protocols.construct_matrix(impl,data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){try{return clojure.core.matrix.protocols.construct_matrix(clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_,data);
}catch (e22301){if((e22301 instanceof clojure.core.matrix.impl.common.ClassCastException)){
var t = e22301;
return null;
} else {
throw e22301;

}
}})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return clojure.core.matrix.protocols.construct_matrix(cljs.core.PersistentVector.EMPTY,data);
}
}
});
/**
 * Maps a function over all components of a persistent vector matrix. Like mapv but for matrices.
 * Assumes correct dimensionality / shape.
 * 
 * First array argument must be nested persistent vectors. Others may be
 * any arrays of the same shape.
 * 
 * Returns a nested persistent vector matrix or a scalar value.
 */
clojure.core.matrix.impl.common.mapmatrix = (function clojure$core$matrix$impl$common$mapmatrix(var_args){
var G__22322 = arguments.length;
switch (G__22322) {
case 2:
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___22401 = arguments.length;
var i__5770__auto___22402 = (0);
while(true){
if((i__5770__auto___22402 < len__5769__auto___22401)){
args_arr__5794__auto__.push((arguments[i__5770__auto___22402]));

var G__22403 = (i__5770__auto___22402 + (1));
i__5770__auto___22402 = G__22403;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((4)),(0),null));
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
if(((0) === dims)){
var G__22323 = (function (){var x__19479__auto__ = m;
if(typeof x__19479__auto__ === 'number'){
return x__19479__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__19479__auto__);

}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22323) : f.call(null,G__22323));
} else {
if(((1) === dims)){
return clojure.core.matrix.impl.common.construct_matrix(m,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,clojure.core.matrix.protocols.element_seq(m)));
} else {
var res = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.impl.common.mapmatrix,f),clojure.core.matrix.protocols.get_major_slice_seq(m));
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.coerce_param(m,res),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clojure.core.matrix.protocols.get_shape(m))], null),cljs.core.next(clojure.core.matrix.protocols.get_shape(res)))));

}
}
}));

(clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3 = (function (f,m1,m2){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m1));
if(((0) === dims)){
var G__22326 = (function (){var x__19479__auto__ = m1;
if(typeof x__19479__auto__ === 'number'){
return x__19479__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__19479__auto__);

}
})();
var G__22327 = (function (){var x__19479__auto__ = m2;
if(typeof x__19479__auto__ === 'number'){
return x__19479__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__19479__auto__);

}
})();
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22326,G__22327) : f.call(null,G__22326,G__22327));
} else {
if(((1) === dims)){
return clojure.core.matrix.impl.common.construct_matrix(m1,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,clojure.core.matrix.protocols.element_seq(m1),clojure.core.matrix.protocols.element_seq(m2)));
} else {
var res = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.impl.common.mapmatrix,f),clojure.core.matrix.protocols.get_major_slice_seq(m1),clojure.core.matrix.protocols.get_major_slice_seq(m2));
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.coerce_param(m1,res),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clojure.core.matrix.protocols.get_shape(m1))], null),cljs.core.next(clojure.core.matrix.protocols.get_shape(res)))));

}
}
}));

(clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$4 = (function (f,m1,m2,m3){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m1));
if(((0) === dims)){
var G__22331 = (function (){var x__19479__auto__ = m1;
if(typeof x__19479__auto__ === 'number'){
return x__19479__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__19479__auto__);

}
})();
var G__22332 = (function (){var x__19479__auto__ = m2;
if(typeof x__19479__auto__ === 'number'){
return x__19479__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__19479__auto__);

}
})();
var G__22333 = (function (){var x__19479__auto__ = m3;
if(typeof x__19479__auto__ === 'number'){
return x__19479__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__19479__auto__);

}
})();
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22331,G__22332,G__22333) : f.call(null,G__22331,G__22332,G__22333));
} else {
if(((1) === dims)){
return clojure.core.matrix.impl.common.construct_matrix(m1,cljs.core.map.cljs$core$IFn$_invoke$arity$4(f,clojure.core.matrix.protocols.element_seq(m1),clojure.core.matrix.protocols.element_seq(m2),clojure.core.matrix.protocols.element_seq(m3)));
} else {
var res = cljs.core.mapv.cljs$core$IFn$_invoke$arity$4(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.impl.common.mapmatrix,f),clojure.core.matrix.protocols.get_major_slice_seq(m1),clojure.core.matrix.protocols.get_major_slice_seq(m2),clojure.core.matrix.protocols.get_major_slice_seq(m3));
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.coerce_param(m1,res),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clojure.core.matrix.protocols.get_shape(m1))], null),cljs.core.next(clojure.core.matrix.protocols.get_shape(res)))));

}
}
}));

(clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$variadic = (function (f,m1,m2,m3,more){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m1));
if(((0) === dims)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(function (){var x__19479__auto__ = m1;
if(typeof x__19479__auto__ === 'number'){
return x__19479__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__19479__auto__);

}
})(),(function (){var x__19479__auto__ = m2;
if(typeof x__19479__auto__ === 'number'){
return x__19479__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__19479__auto__);

}
})(),(function (){var x__19479__auto__ = m3;
if(typeof x__19479__auto__ === 'number'){
return x__19479__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__19479__auto__);

}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_0d,more));
} else {
if(((1) === dims)){
return clojure.core.matrix.impl.common.construct_matrix(m1,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map,f,clojure.core.matrix.protocols.element_seq(m1),clojure.core.matrix.protocols.element_seq(m2),clojure.core.matrix.protocols.element_seq(m3),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_seq,more)], 0)));
} else {
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.impl.common.mapmatrix,f),clojure.core.matrix.protocols.get_major_slice_seq(m1),clojure.core.matrix.protocols.get_major_slice_seq(m2),clojure.core.matrix.protocols.get_major_slice_seq(m3),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_major_slice_seq,more)], 0));
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.coerce_param(m1,res),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clojure.core.matrix.protocols.get_shape(m1))], null),cljs.core.next(clojure.core.matrix.protocols.get_shape(res)))));

}
}
}));

/** @this {Function} */
(clojure.core.matrix.impl.common.mapmatrix.cljs$lang$applyTo = (function (seq22317){
var G__22318 = cljs.core.first(seq22317);
var seq22317__$1 = cljs.core.next(seq22317);
var G__22319 = cljs.core.first(seq22317__$1);
var seq22317__$2 = cljs.core.next(seq22317__$1);
var G__22320 = cljs.core.first(seq22317__$2);
var seq22317__$3 = cljs.core.next(seq22317__$2);
var G__22321 = cljs.core.first(seq22317__$3);
var seq22317__$4 = cljs.core.next(seq22317__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22318,G__22319,G__22320,G__22321,seq22317__$4);
}));

(clojure.core.matrix.impl.common.mapmatrix.cljs$lang$maxFixedArity = (4));

/**
 * Logistic function, with primitive type hints
 */
clojure.core.matrix.impl.common.logistic_fn = (function clojure$core$matrix$impl$common$logistic_fn(t){
var e_t = Math.exp((- t));
return (1.0 / (1.0 + e_t));
});
/**
 * Softplus function, with primitive type hints
 */
clojure.core.matrix.impl.common.softplus_fn = (function clojure$core$matrix$impl$common$softplus_fn(t){
if((t > 100.0)){
return t;
} else {
var et = Math.exp(t);
return Math.log((1.0 + et));
}
});
/**
 * ReLU function, with primitive type hints
 */
clojure.core.matrix.impl.common.relu_fn = (function clojure$core$matrix$impl$common$relu_fn(t){
return Math.max(0.0,t);
});
/**
 * Returns true if matrix is square (2D with same number of rows and columns)
 */
clojure.core.matrix.impl.common.square_QMARK_ = (function clojure$core$matrix$impl$common$square_QMARK_(m){
return ((((2) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))) && ((cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0))) === cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(1))))));
});
/**
 * Returns true iff square matrix m is symmetric.
 */
clojure.core.matrix.impl.common.symmetric_matrix_entries_QMARK_ = (function clojure$core$matrix$impl$common$symmetric_matrix_entries_QMARK_(m){
var dim = cljs.core.long$(cljs.core.first(clojure.core.matrix.protocols.get_shape(m)));
var f = (function clojure$core$matrix$impl$common$symmetric_matrix_entries_QMARK__$_f(i,j){
while(true){
if((i >= dim)){
return true;
} else {
if((j >= dim)){
var G__22435 = ((1) + i);
var G__22436 = ((2) + i);
i = G__22435;
j = G__22436;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_2d(m,i,j),clojure.core.matrix.protocols.get_2d(m,j,i))){
var G__22444 = i;
var G__22445 = (j + (1));
i = G__22444;
j = G__22445;
continue;
} else {
return false;

}
}
}
break;
}
});
return f((0),(1));
});

//# sourceMappingURL=clojure.core.matrix.impl.common.js.map
