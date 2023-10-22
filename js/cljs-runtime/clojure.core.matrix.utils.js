goog.provide('clojure.core.matrix.utils');
clojure.core.matrix.utils.class$ = cljs.core.type;
/**
 * returns true if the given object is a valid core.matrix array shape.
 */
clojure.core.matrix.utils.valid_shape_QMARK_ = (function clojure$core$matrix$utils$valid_shape_QMARK_(shape){
try{return (((cljs.core.count(shape) >= (0))) && (cljs.core.every_QMARK_(cljs.core.integer_QMARK_,shape)));
}catch (e19550){if((e19550 instanceof Error)){
var t = e19550;
return false;
} else {
throw e19550;

}
}});
/**
 * Returns true if two shapes are the same.
 */
clojure.core.matrix.utils.same_shape_object_QMARK_ = (function clojure$core$matrix$utils$same_shape_object_QMARK_(sa,sb){
if((sa === sb)){
return true;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(sa),cljs.core.count(sb))){
return false;
} else {
var ca = cljs.core.count(sa);
var i = (0);
while(true){
if((i >= ca)){
return true;
} else {
if((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sa,i) === cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sb,i))){
var G__19874 = (i + (1));
i = G__19874;
continue;
} else {
return false;
}
}
break;
}

}
}
});
/**
 * Returns the logical xor of a set of values, considered as booleans
 */
clojure.core.matrix.utils.xor = (function clojure$core$matrix$utils$xor(var_args){
var G__19670 = arguments.length;
switch (G__19670) {
case 0:
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___19881 = arguments.length;
var i__5770__auto___19882 = (0);
while(true){
if((i__5770__auto___19882 < len__5769__auto___19881)){
args_arr__5794__auto__.push((arguments[i__5770__auto___19882]));

var G__19883 = (i__5770__auto___19882 + (1));
i__5770__auto___19882 = G__19883;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$0 = (function (){
return false;
}));

(clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$1 = (function (x){
return cljs.core.boolean$(x);
}));

(clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(cljs.core.truth_(x)){
return cljs.core.not(y);
} else {
return cljs.core.boolean$(y);
}
}));

(clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var p = clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$2(x,y);
var ss = cljs.core.seq(more);
while(true){
if(ss){
var G__19884 = (cljs.core.truth_(cljs.core.first(ss))?(!(p)):p);
var G__19885 = cljs.core.next(ss);
p = G__19884;
ss = G__19885;
continue;
} else {
return p;
}
break;
}
}));

/** @this {Function} */
(clojure.core.matrix.utils.xor.cljs$lang$applyTo = (function (seq19659){
var G__19668 = cljs.core.first(seq19659);
var seq19659__$1 = cljs.core.next(seq19659);
var G__19669 = cljs.core.first(seq19659__$1);
var seq19659__$2 = cljs.core.next(seq19659__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19668,G__19669,seq19659__$2);
}));

(clojure.core.matrix.utils.xor.cljs$lang$maxFixedArity = (2));

/**
 * Returns a copy of a double array
 */
clojure.core.matrix.utils.copy_double_array = (function clojure$core$matrix$utils$copy_double_array(arr){
return arr.slice((0));
});
/**
 * Returns a copy of a long array
 */
clojure.core.matrix.utils.copy_long_array = (function clojure$core$matrix$utils$copy_long_array(arr){
return arr.slice((0));
});
/**
 * Returns a copy of a long array
 */
clojure.core.matrix.utils.copy_object_array = (function clojure$core$matrix$utils$copy_object_array(arr){
return arr.slice((0));
});
/**
 * Returns a range of longs in a long[] array
 */
clojure.core.matrix.utils.long_range = (function clojure$core$matrix$utils$long_range(end){
var end__$1 = (end | (0));
var arr = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(end__$1);
var n__5636__auto___19890 = end__$1;
var i_19891 = (0);
while(true){
if((i_19891 < n__5636__auto___19890)){
(arr[i_19891] = cljs.core.long$(i_19891));

var G__19893 = (i_19891 + (1));
i_19891 = G__19893;
continue;
} else {
}
break;
}

return arr;
});
/**
 * Creates a long array with the specified values.
 */
clojure.core.matrix.utils.long_array_of = (function clojure$core$matrix$utils$long_array_of(var_args){
var G__19704 = arguments.length;
switch (G__19704) {
case 0:
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___19897 = arguments.length;
var i__5770__auto___19898 = (0);
while(true){
if((i__5770__auto___19898 < len__5769__auto___19897)){
args_arr__5794__auto__.push((arguments[i__5770__auto___19898]));

var G__19899 = (i__5770__auto___19898 + (1));
i__5770__auto___19898 = G__19899;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.long_array.cljs$core$IFn$_invoke$arity$1((0));
}));

(clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$1 = (function (a){
var arr = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1((1));
(arr[(0)] = cljs.core.long$(a));

return arr;
}));

(clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var arr = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1((2));
(arr[(0)] = cljs.core.long$(a));

(arr[(1)] = cljs.core.long$(b));

return arr;
}));

(clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
var arr = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(((2) + cljs.core.count(more)));
(arr[(0)] = cljs.core.long$(a));

(arr[(1)] = cljs.core.long$(b));

var G__19713_19900 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.utils.x,more,clojure.core.matrix.utils.i], null);
var G__19714_19901 = (arr[((2) + clojure.core.matrix.utils.i)] = cljs.core.long$(clojure.core.matrix.utils.x));
(clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$2 ? clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$2(G__19713_19900,G__19714_19901) : clojure.core.matrix.utils.doseq_indexed.call(null,G__19713_19900,G__19714_19901));

return arr;
}));

/** @this {Function} */
(clojure.core.matrix.utils.long_array_of.cljs$lang$applyTo = (function (seq19701){
var G__19702 = cljs.core.first(seq19701);
var seq19701__$1 = cljs.core.next(seq19701);
var G__19703 = cljs.core.first(seq19701__$1);
var seq19701__$2 = cljs.core.next(seq19701__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19702,G__19703,seq19701__$2);
}));

(clojure.core.matrix.utils.long_array_of.cljs$lang$maxFixedArity = (2));

/**
 * Creates a long array with the specified values.
 */
clojure.core.matrix.utils.object_array_of = (function clojure$core$matrix$utils$object_array_of(var_args){
var G__19725 = arguments.length;
switch (G__19725) {
case 0:
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___19903 = arguments.length;
var i__5770__auto___19904 = (0);
while(true){
if((i__5770__auto___19904 < len__5769__auto___19903)){
args_arr__5794__auto__.push((arguments[i__5770__auto___19904]));

var G__19908 = (i__5770__auto___19904 + (1));
i__5770__auto___19904 = G__19908;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((0));
}));

(clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$1 = (function (a){
var arr = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(arr[(0)] = a);

return arr;
}));

(clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var arr = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(arr[(0)] = a);

(arr[(1)] = b);

return arr;
}));

(clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
var arr = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((2) + cljs.core.count(more)));
(arr[(0)] = a);

(arr[(1)] = b);

var G__19740_19913 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.utils.x,more,clojure.core.matrix.utils.i], null);
var G__19741_19914 = (arr[((2) + clojure.core.matrix.utils.i)] = clojure.core.matrix.utils.x);
(clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$2 ? clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$2(G__19740_19913,G__19741_19914) : clojure.core.matrix.utils.doseq_indexed.call(null,G__19740_19913,G__19741_19914));

return arr;
}));

/** @this {Function} */
(clojure.core.matrix.utils.object_array_of.cljs$lang$applyTo = (function (seq19721){
var G__19722 = cljs.core.first(seq19721);
var seq19721__$1 = cljs.core.next(seq19721);
var G__19723 = cljs.core.first(seq19721__$1);
var seq19721__$2 = cljs.core.next(seq19721__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19722,G__19723,seq19721__$2);
}));

(clojure.core.matrix.utils.object_array_of.cljs$lang$maxFixedArity = (2));

/**
 * Returns the index of a value in a vector, or nil if not present
 */
clojure.core.matrix.utils.find_index = (function clojure$core$matrix$utils$find_index(v,value){
var n = cljs.core.count(v);
var i = (0);
while(true){
if((i < n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i))){
return i;
} else {
var G__19923 = (i + (1));
i = G__19923;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Returns a sequence of all possible index vectors for a given shape, in row-major order
 */
clojure.core.matrix.utils.base_index_seq_for_shape = (function clojure$core$matrix$utils$base_index_seq_for_shape(sh){
var gen = (function clojure$core$matrix$utils$base_index_seq_for_shape_$_gen(prefix,rem){
if(cljs.core.truth_(rem)){
var nrem = cljs.core.next(rem);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__19754_SHARP_){
return clojure$core$matrix$utils$base_index_seq_for_shape_$_gen(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,p1__19754_SHARP_),nrem);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.first(rem))], 0));
} else {
return (new cljs.core.List(null,prefix,null,(1),null));
}
});
return gen(cljs.core.PersistentVector.EMPTY,cljs.core.seq(sh));
});
/**
 * Returns the smallest shape that both shapes a and b can broadcast to, or nil if the the shapes
 * are not compatible.
 */
clojure.core.matrix.utils.broadcast_shape_STAR_ = (function clojure$core$matrix$utils$broadcast_shape_STAR_(var_args){
var G__19795 = arguments.length;
switch (G__19795) {
case 2:
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.empty_QMARK_(a)){
var or__5045__auto__ = b;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.List.EMPTY;
}
} else {
if(cljs.core.empty_QMARK_(b)){
return a;
} else {
if(((1) === cljs.core.first(a))){
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(b),cljs.core.next(a),cljs.core.next(b));
} else {
if(((1) === cljs.core.first(b))){
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a),cljs.core.next(a),cljs.core.next(b));
} else {
if((cljs.core.first(a) === cljs.core.first(b))){
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a),cljs.core.next(a),cljs.core.next(b));
} else {
return null;

}
}
}
}
}
}));

(clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (prefix,a,b){
if(cljs.core.truth_((function (){var or__5045__auto__ = a;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return b;
}
})())){
var r = clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$2(a,b);
if(cljs.core.truth_(r)){
return cljs.core.cons(prefix,r);
} else {
return null;
}
} else {
return cljs.core.cons(prefix,null);
}
}));

(clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Returns the smallest compatible shape that a set of shapes can all broadcast to.
 * Returns nil if this is not possible (i.e. the shapes are incompatible).
 * Returns an empty list if both shape sequences are empty (i.e. represent scalars)
 */
clojure.core.matrix.utils.broadcast_shape = (function clojure$core$matrix$utils$broadcast_shape(var_args){
var G__19820 = arguments.length;
switch (G__19820) {
case 1:
return clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var a__$1 = cljs.core.seq(cljs.core.reverse(a));
var b__$1 = cljs.core.seq(cljs.core.reverse(b));
var r = clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$2(a__$1,b__$1);
if(cljs.core.truth_(r)){
return cljs.core.reverse(r);
} else {
return null;
}
}));

(clojure.core.matrix.utils.broadcast_shape.cljs$lang$maxFixedArity = 2);

/**
 * Returns truthy if the first shape a can be broadcast to the shape b
 */
clojure.core.matrix.utils.can_broadcast = (function clojure$core$matrix$utils$can_broadcast(from_shape,to_shape){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("TODO: not yet implemented",cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Returns true if an argument is a protocol'
 */
clojure.core.matrix.utils.protocol_QMARK_ = (function clojure$core$matrix$utils$protocol_QMARK_(p){
var and__5043__auto__ = cljs.core.map_QMARK_(p);
if(and__5043__auto__){
var and__5043__auto____$1 = new cljs.core.Keyword(null,"on-interface","on-interface",1993482222).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(and__5043__auto____$1)){
return new cljs.core.Keyword(null,"on-interface","on-interface",1993482222).cljs$core$IFn$_invoke$arity$1(p).isInterface();
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
/**
 * Transform MapEntry to just map with some additional fields
 */
clojure.core.matrix.utils.enhance_protocol_kv = (function clojure$core$matrix$utils$enhance_protocol_kv(p__19836){
var vec__19849 = p__19836;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19849,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19849,(1),null);
var m = cljs.core.meta(new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(p)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(p),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(m),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"name","name",1843675177),name], 0));
});
clojure.core.matrix.utils.update_indexed = (function clojure$core$matrix$utils$update_indexed(xs,idxs,f){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19860_SHARP_,p2__19861_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19860_SHARP_,p2__19861_SHARP_,(function (){var G__19862 = p2__19861_SHARP_;
var G__19863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__19860_SHARP_,p2__19861_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19862,G__19863) : f.call(null,G__19862,G__19863));
})());
}),xs,idxs);
});

//# sourceMappingURL=clojure.core.matrix.utils.js.map
