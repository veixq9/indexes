goog.provide('tunnl71.tools.core');
tunnl71.tools.core.uuid = (function tunnl71$tools$core$uuid(var_args){
var G__29905 = arguments.length;
switch (G__29905) {
case 0:
return tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.random_uuid();
}));

(tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.uuid(s);
}));

(tunnl71.tools.core.uuid.cljs$lang$maxFixedArity = 1);

tunnl71.tools.core.vector__GT_map = (function tunnl71$tools$core$vector__GT_map(v){
return cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),v);
});
tunnl71.tools.core.zip = (function tunnl71$tools$core$zip(c1,c2){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,c1,c2);
});
tunnl71.tools.core.split_every_2 = (function tunnl71$tools$core$split_every_2(coll){
return tunnl71.tools.core.zip(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),coll),cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(coll)));
});
tunnl71.tools.core.quot_rem = (function tunnl71$tools$core$quot_rem(n,m){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.quot,n,m,cljs.core.rem,n,m], null);
});
tunnl71.tools.core.invoke = (function tunnl71$tools$core$invoke(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30653 = arguments.length;
var i__5770__auto___30654 = (0);
while(true){
if((i__5770__auto___30654 < len__5769__auto___30653)){
args__5775__auto__.push((arguments[i__5770__auto___30654]));

var G__30655 = (i__5770__auto___30654 + (1));
i__5770__auto___30654 = G__30655;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return tunnl71.tools.core.invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(tunnl71.tools.core.invoke.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));

(tunnl71.tools.core.invoke.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tunnl71.tools.core.invoke.cljs$lang$applyTo = (function (seq29917){
var G__29918 = cljs.core.first(seq29917);
var seq29917__$1 = cljs.core.next(seq29917);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29918,seq29917__$1);
}));

tunnl71.tools.core.$ = cljs.core.partial;
tunnl71.tools.core.flip = (function tunnl71$tools$core$flip(f){
return (function() { 
var G__30657__delegate = function (xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.reverse(xs));
};
var G__30657 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__30658__i = 0, G__30658__a = new Array(arguments.length -  0);
while (G__30658__i < G__30658__a.length) {G__30658__a[G__30658__i] = arguments[G__30658__i + 0]; ++G__30658__i;}
  xs = new cljs.core.IndexedSeq(G__30658__a,0,null);
} 
return G__30657__delegate.call(this,xs);};
G__30657.cljs$lang$maxFixedArity = 0;
G__30657.cljs$lang$applyTo = (function (arglist__30659){
var xs = cljs.core.seq(arglist__30659);
return G__30657__delegate(xs);
});
G__30657.cljs$core$IFn$_invoke$arity$variadic = G__30657__delegate;
return G__30657;
})()
;
});
/**
 * reverse composition
 */
tunnl71.tools.core.pipe = tunnl71.tools.core.flip(cljs.core.comp);
/**
 * reverse composition
 */
tunnl71.tools.core._GT__GT__GT_ = tunnl71.tools.core.pipe;
tunnl71.tools.core.___GT_ = (function tunnl71$tools$core$___GT_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30660 = arguments.length;
var i__5770__auto___30661 = (0);
while(true){
if((i__5770__auto___30661 < len__5769__auto___30660)){
args__5775__auto__.push((arguments[i__5770__auto___30661]));

var G__30662 = (i__5770__auto___30661 + (1));
i__5770__auto___30661 = G__30662;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return tunnl71.tools.core.___GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(tunnl71.tools.core.___GT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,fs){
var fexpr__29940 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tunnl71.tools.core.pipe,fs);
return (fexpr__29940.cljs$core$IFn$_invoke$arity$1 ? fexpr__29940.cljs$core$IFn$_invoke$arity$1(x) : fexpr__29940.call(null,x));
}));

(tunnl71.tools.core.___GT_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tunnl71.tools.core.___GT_.cljs$lang$applyTo = (function (seq29937){
var G__29938 = cljs.core.first(seq29937);
var seq29937__$1 = cljs.core.next(seq29937);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29938,seq29937__$1);
}));

/**
 * (a->b) -> (c->d) -> (a,c) -> (b,d)
 */
tunnl71.tools.core.bi_arrow = (function tunnl71$tools$core$bi_arrow(var_args){
var G__29953 = arguments.length;
switch (G__29953) {
case 3:
return tunnl71.tools.core.bi_arrow.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return tunnl71.tools.core.bi_arrow.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tunnl71.tools.core.bi_arrow.cljs$core$IFn$_invoke$arity$3 = (function (f,g,p__29960){
var vec__29961 = p__29960;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29961,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29961,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(y) : g.call(null,y))], null);
}));

(tunnl71.tools.core.bi_arrow.cljs$core$IFn$_invoke$arity$4 = (function (f,g,x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(y) : g.call(null,y))], null);
}));

(tunnl71.tools.core.bi_arrow.cljs$lang$maxFixedArity = 4);

tunnl71.tools.core.diff_keys = (function tunnl71$tools$core$diff_keys(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30664 = arguments.length;
var i__5770__auto___30665 = (0);
while(true){
if((i__5770__auto___30665 < len__5769__auto___30664)){
args__5775__auto__.push((arguments[i__5770__auto___30665]));

var G__30666 = (i__5770__auto___30665 + (1));
i__5770__auto___30665 = G__30666;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return tunnl71.tools.core.diff_keys.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(tunnl71.tools.core.diff_keys.cljs$core$IFn$_invoke$arity$variadic = (function (ms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.difference,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.keys),ms));
}));

(tunnl71.tools.core.diff_keys.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tunnl71.tools.core.diff_keys.cljs$lang$applyTo = (function (seq29965){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29965));
}));

tunnl71.tools.core.presents = (function tunnl71$tools$core$presents(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30667 = arguments.length;
var i__5770__auto___30668 = (0);
while(true){
if((i__5770__auto___30668 < len__5769__auto___30667)){
args__5775__auto__.push((arguments[i__5770__auto___30668]));

var G__30669 = (i__5770__auto___30668 + (1));
i__5770__auto___30668 = G__30669;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return tunnl71.tools.core.presents.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(tunnl71.tools.core.presents.cljs$core$IFn$_invoke$arity$variadic = (function (coll,xs){
return cljs.core.some(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,xs),coll);
}));

(tunnl71.tools.core.presents.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tunnl71.tools.core.presents.cljs$lang$applyTo = (function (seq29967){
var G__29968 = cljs.core.first(seq29967);
var seq29967__$1 = cljs.core.next(seq29967);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29968,seq29967__$1);
}));

tunnl71.tools.core.part_QMARK_ = (function tunnl71$tools$core$part_QMARK_(s1,s2){
return clojure.set.subset_QMARK_(cljs.core.set(s1),cljs.core.set(s2));
});
tunnl71.tools.core.belongs = tunnl71.tools.core.flip(tunnl71.tools.core.presents);
tunnl71.tools.core.presents_QMARK_ = (function tunnl71$tools$core$presents_QMARK_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30670 = arguments.length;
var i__5770__auto___30671 = (0);
while(true){
if((i__5770__auto___30671 < len__5769__auto___30670)){
args__5775__auto__.push((arguments[i__5770__auto___30671]));

var G__30672 = (i__5770__auto___30671 + (1));
i__5770__auto___30671 = G__30672;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return tunnl71.tools.core.presents_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(tunnl71.tools.core.presents_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (coll,xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,tunnl71.tools.core.presents),coll,xs);
}));

(tunnl71.tools.core.presents_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tunnl71.tools.core.presents_QMARK_.cljs$lang$applyTo = (function (seq29974){
var G__29975 = cljs.core.first(seq29974);
var seq29974__$1 = cljs.core.next(seq29974);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29975,seq29974__$1);
}));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,tunnl71.tools.core.presents_QMARK_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(3),(4)], 0)))){
} else {
throw (new Error("Assert failed: (= true (presents? [1 2 3] 2 3 4))"));
}
tunnl71.tools.core.belongs_QMARK_ = (function tunnl71$tools$core$belongs_QMARK_(x,coll){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,tunnl71.tools.core.belongs)(x,coll);
});
tunnl71.tools.core.factorial = (function tunnl71$tools$core$factorial(n){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
});
tunnl71.tools.core.exp = (function tunnl71$tools$core$exp(var_args){
var G__29982 = arguments.length;
switch (G__29982) {
case 2:
return tunnl71.tools.core.exp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return tunnl71.tools.core.exp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tunnl71.tools.core.exp.cljs$core$IFn$_invoke$arity$2 = (function (b,i){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(i,b));
}));

(tunnl71.tools.core.exp.cljs$core$IFn$_invoke$arity$1 = (function (i){
return Math.exp(i);
}));

(tunnl71.tools.core.exp.cljs$lang$maxFixedArity = 2);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),tunnl71.tools.core.exp.cljs$core$IFn$_invoke$arity$1((0)))){
} else {
throw (new Error("Assert failed: (= 1 (exp 0))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Math.exp((1)),tunnl71.tools.core.exp.cljs$core$IFn$_invoke$arity$1((1)))){
} else {
throw (new Error("Assert failed: (= (js/Math.exp 1) (exp 1))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) / Math.exp((1))),tunnl71.tools.core.exp.cljs$core$IFn$_invoke$arity$1((-1)))){
} else {
throw (new Error("Assert failed: (= (/ 1 (js/Math.exp 1)) (exp -1))"));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),tunnl71.tools.core.exp.cljs$core$IFn$_invoke$arity$2((2),(3)))){
} else {
throw (new Error("Assert failed: (= 8 (exp 2 3))"));
}
tunnl71.tools.core.coll__GT_map = (function tunnl71$tools$core$coll__GT_map(coll){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,((cljs.core.every_QMARK_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.coll_QMARK_),coll))?coll:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30031_SHARP_){
if(cljs.core.coll_QMARK_(p1__30031_SHARP_)){
return (tunnl71.tools.core.coll__GT_map.cljs$core$IFn$_invoke$arity$1 ? tunnl71.tools.core.coll__GT_map.cljs$core$IFn$_invoke$arity$1(p1__30031_SHARP_) : tunnl71.tools.core.coll__GT_map.call(null,p1__30031_SHARP_));
} else {
return p1__30031_SHARP_;
}
}),coll)));
});
tunnl71.tools.core.map_entry = (function tunnl71$tools$core$map_entry(k,v){
return (new cljs.core.MapEntry(k,v,null));
});
/**
 * wraps a map in a name
 */
tunnl71.tools.core.wrap = (function tunnl71$tools$core$wrap(m,new_ns){
return cljs.core.reduce_kv((function (m__$1,k,v){
var new_k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.name(new_ns),cljs.core.name(k));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,new_k,v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * [spec] -> data -> spec
 */
tunnl71.tools.core.derive_spec = (function tunnl71$tools$core$derive_spec(specs,x){
return cljs.core.first((function (){var iter__5523__auto__ = (function tunnl71$tools$core$derive_spec_$_iter__30038(s__30039){
return (new cljs.core.LazySeq(null,(function (){
var s__30039__$1 = s__30039;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30039__$1);
if(temp__5804__auto__){
var s__30039__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30039__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30039__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30041 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30040 = (0);
while(true){
if((i__30040 < size__5522__auto__)){
var s = cljs.core._nth(c__5521__auto__,i__30040);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(s,x)){
cljs.core.chunk_append(b__30041,s);

var G__30678 = (i__30040 + (1));
i__30040 = G__30678;
continue;
} else {
var G__30679 = (i__30040 + (1));
i__30040 = G__30679;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30041),tunnl71$tools$core$derive_spec_$_iter__30038(cljs.core.chunk_rest(s__30039__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30041),null);
}
} else {
var s = cljs.core.first(s__30039__$2);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(s,x)){
return cljs.core.cons(s,tunnl71$tools$core$derive_spec_$_iter__30038(cljs.core.rest(s__30039__$2)));
} else {
var G__30680 = cljs.core.rest(s__30039__$2);
s__30039__$1 = G__30680;
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
return iter__5523__auto__(specs);
})());
});
/**
 * traverses data, keeping track of depth, avoiding the halting points
 */
tunnl71.tools.core.walk_transform = (function tunnl71$tools$core$walk_transform(data,halting_points,f,level){
return null;
});
tunnl71.tools.core.edn__GT_hiccup_palette = (function tunnl71$tools$core$edn__GT_hiccup_palette(system,edn){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container","div.w3-container",118818473),((cljs.core.map_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container","div.w3-container",118818473),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.w3-ul","ul.w3-ul",-892548249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null)], null),(function (){var iter__5523__auto__ = (function tunnl71$tools$core$edn__GT_hiccup_palette_$_iter__30058(s__30059){
return (new cljs.core.LazySeq(null,(function (){
var s__30059__$1 = s__30059;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30059__$1);
if(temp__5804__auto__){
var s__30059__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30059__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30059__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30061 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30060 = (0);
while(true){
if((i__30060 < size__5522__auto__)){
var vec__30064 = cljs.core._nth(c__5521__auto__,i__30060);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30064,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30064,(1),null);
cljs.core.chunk_append(b__30061,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.w3-container","li.w3-container",1343237672),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-row","div.w3-row",692760586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-left.w3-padding","div.w3-left.w3-padding",1667728296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10%",new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"right","right",-452581833)], null)], null),(tunnl71.tools.core.edn__GT_hiccup_palette.cljs$core$IFn$_invoke$arity$2 ? tunnl71.tools.core.edn__GT_hiccup_palette.cljs$core$IFn$_invoke$arity$2(system,k) : tunnl71.tools.core.edn__GT_hiccup_palette.call(null,system,k))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-left.w3-padding","div.w3-left.w3-padding",1667728296),(tunnl71.tools.core.edn__GT_hiccup_palette.cljs$core$IFn$_invoke$arity$2 ? tunnl71.tools.core.edn__GT_hiccup_palette.cljs$core$IFn$_invoke$arity$2(system,v) : tunnl71.tools.core.edn__GT_hiccup_palette.call(null,system,v))], null)], null)], null));

var G__30681 = (i__30060 + (1));
i__30060 = G__30681;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30061),tunnl71$tools$core$edn__GT_hiccup_palette_$_iter__30058(cljs.core.chunk_rest(s__30059__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30061),null);
}
} else {
var vec__30079 = cljs.core.first(s__30059__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30079,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30079,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.w3-container","li.w3-container",1343237672),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-row","div.w3-row",692760586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-left.w3-padding","div.w3-left.w3-padding",1667728296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10%",new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"right","right",-452581833)], null)], null),(tunnl71.tools.core.edn__GT_hiccup_palette.cljs$core$IFn$_invoke$arity$2 ? tunnl71.tools.core.edn__GT_hiccup_palette.cljs$core$IFn$_invoke$arity$2(system,k) : tunnl71.tools.core.edn__GT_hiccup_palette.call(null,system,k))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-left.w3-padding","div.w3-left.w3-padding",1667728296),(tunnl71.tools.core.edn__GT_hiccup_palette.cljs$core$IFn$_invoke$arity$2 ? tunnl71.tools.core.edn__GT_hiccup_palette.cljs$core$IFn$_invoke$arity$2(system,v) : tunnl71.tools.core.edn__GT_hiccup_palette.call(null,system,v))], null)], null)], null),tunnl71$tools$core$edn__GT_hiccup_palette_$_iter__30058(cljs.core.rest(s__30059__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(edn);
})())], null):((cljs.core.sequential_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edn], 0))], null):(((edn instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.w3-left","p.w3-left",186445171),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("palette","bleak","palette/bleak",1191529623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(system)))], null)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edn], 0))], null):((((typeof edn === 'string') && ((!((cljs.core.re_matches(/http.*/,edn) == null))))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),edn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),edn], null)], null):((typeof edn === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.w3-left","p.w3-left",186445171),edn], null):((cljs.core.boolean_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(edn)], null):(((edn == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"nil"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.w3-left","p.w3-left",186445171),cljs.core.str.cljs$core$IFn$_invoke$arity$1(edn)], null)
)))))))], null);
});
tunnl71.tools.core.edn__GT_hiccup = (function tunnl71$tools$core$edn__GT_hiccup(edn){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container","div.w3-container",118818473),((cljs.core.map_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container","div.w3-container",118818473),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.w3-ul","ul.w3-ul",-892548249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null)], null),(function (){var iter__5523__auto__ = (function tunnl71$tools$core$edn__GT_hiccup_$_iter__30097(s__30098){
return (new cljs.core.LazySeq(null,(function (){
var s__30098__$1 = s__30098;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30098__$1);
if(temp__5804__auto__){
var s__30098__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30098__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30098__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30100 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30099 = (0);
while(true){
if((i__30099 < size__5522__auto__)){
var vec__30105 = cljs.core._nth(c__5521__auto__,i__30099);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30105,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30105,(1),null);
cljs.core.chunk_append(b__30100,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.w3-container","li.w3-container",1343237672),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-row","div.w3-row",692760586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-left.w3-padding","div.w3-left.w3-padding",1667728296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10%",new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"right","right",-452581833)], null)], null),(tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1 ? tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1(k) : tunnl71.tools.core.edn__GT_hiccup.call(null,k))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-left.w3-padding","div.w3-left.w3-padding",1667728296),(tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1 ? tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1(v) : tunnl71.tools.core.edn__GT_hiccup.call(null,v))], null)], null)], null));

var G__30688 = (i__30099 + (1));
i__30099 = G__30688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30100),tunnl71$tools$core$edn__GT_hiccup_$_iter__30097(cljs.core.chunk_rest(s__30098__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30100),null);
}
} else {
var vec__30108 = cljs.core.first(s__30098__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30108,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30108,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.w3-container","li.w3-container",1343237672),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-row","div.w3-row",692760586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-left.w3-padding","div.w3-left.w3-padding",1667728296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10%",new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"right","right",-452581833)], null)], null),(tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1 ? tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1(k) : tunnl71.tools.core.edn__GT_hiccup.call(null,k))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-left.w3-padding","div.w3-left.w3-padding",1667728296),(tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1 ? tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1(v) : tunnl71.tools.core.edn__GT_hiccup.call(null,v))], null)], null)], null),tunnl71$tools$core$edn__GT_hiccup_$_iter__30097(cljs.core.rest(s__30098__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(edn);
})())], null):((cljs.core.list_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edn], 0))], null):((cljs.core.sequential_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-row.w3-border","div.w3-container.w3-row.w3-border",1983218291),(function (){var iter__5523__auto__ = (function tunnl71$tools$core$edn__GT_hiccup_$_iter__30114(s__30115){
return (new cljs.core.LazySeq(null,(function (){
var s__30115__$1 = s__30115;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30115__$1);
if(temp__5804__auto__){
var s__30115__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30115__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30115__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30117 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30116 = (0);
while(true){
if((i__30116 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__30116);
cljs.core.chunk_append(b__30117,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-cell-col","div.w3-container.w3-cell-col",-1871621335),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),(tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1 ? tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1(x) : tunnl71.tools.core.edn__GT_hiccup.call(null,x))], null));

var G__30694 = (i__30116 + (1));
i__30116 = G__30694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30117),tunnl71$tools$core$edn__GT_hiccup_$_iter__30114(cljs.core.chunk_rest(s__30115__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30117),null);
}
} else {
var x = cljs.core.first(s__30115__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-cell-col","div.w3-container.w3-cell-col",-1871621335),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),(tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1 ? tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1(x) : tunnl71.tools.core.edn__GT_hiccup.call(null,x))], null),tunnl71$tools$core$edn__GT_hiccup_$_iter__30114(cljs.core.rest(s__30115__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(edn);
})()], null):(((edn instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.w3-left","p.w3-left",186445171),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edn], 0))], null):((((typeof edn === 'string') && ((!((cljs.core.re_matches(/http.*/,edn) == null))))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),edn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),edn], null)], null):((typeof edn === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.w3-left","p.w3-left",186445171),edn], null):((cljs.core.boolean_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(edn)], null):(((edn == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"nil"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.w3-left","p.w3-left",186445171),cljs.core.str.cljs$core$IFn$_invoke$arity$1(edn)], null)
))))))))], null);
});
tunnl71.tools.core.edn__GT_hiccup_true_to_form = (function tunnl71$tools$core$edn__GT_hiccup_true_to_form(var_args){
var G__30137 = arguments.length;
switch (G__30137) {
case 2:
return tunnl71.tools.core.edn__GT_hiccup_true_to_form.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return tunnl71.tools.core.edn__GT_hiccup_true_to_form.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tunnl71.tools.core.edn__GT_hiccup_true_to_form.cljs$core$IFn$_invoke$arity$2 = (function (edn,style){
var this$ = new cljs.core.Var(function(){return tunnl71.tools.core.edn__GT_hiccup_true_to_form;},new cljs.core.Symbol("tunnl71.tools.core","edn->hiccup-true-to-form","tunnl71.tools.core/edn->hiccup-true-to-form",514704826,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tunnl71.tools.core","tunnl71.tools.core",-1536590718,null),new cljs.core.Symbol(null,"edn->hiccup-true-to-form","edn->hiccup-true-to-form",1990101701,null),"tunnl71/tools/core.cljs",31,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null),new cljs.core.Symbol(null,"style","style",1143888791,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null),new cljs.core.Symbol(null,"style","style",1143888791,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,243,243,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null),new cljs.core.Symbol(null,"style","style",1143888791,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null)], null)),null,(cljs.core.truth_(tunnl71.tools.core.edn__GT_hiccup_true_to_form)?tunnl71.tools.core.edn__GT_hiccup_true_to_form.cljs$lang$test:null)]));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container","div.w3-container",118818473),((cljs.core.map_QMARK_(edn))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),style,"{"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null)], null),(function (){var iter__5523__auto__ = (function tunnl71$tools$core$iter__30139(s__30140){
return (new cljs.core.LazySeq(null,(function (){
var s__30140__$1 = s__30140;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30140__$1);
if(temp__5804__auto__){
var s__30140__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30140__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30140__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30142 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30141 = (0);
while(true){
if((i__30141 < size__5522__auto__)){
var vec__30153 = cljs.core._nth(c__5521__auto__,i__30141);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30153,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30153,(1),null);
cljs.core.chunk_append(b__30142,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-row","div.w3-container.w3-row",-1500022491),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell","div.w3-cell",-1516627914),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10%",new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"color","color",1011675173),"lightgreen"], null)], null),style], 0)),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(k) : this$.call(null,k))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell","div.w3-cell",-1516627914),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"lightgrey"], null)], null),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(v) : this$.call(null,v))], null)], null));

var G__30698 = (i__30141 + (1));
i__30141 = G__30698;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30142),tunnl71$tools$core$iter__30139(cljs.core.chunk_rest(s__30140__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30142),null);
}
} else {
var vec__30157 = cljs.core.first(s__30140__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30157,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30157,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-row","div.w3-container.w3-row",-1500022491),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell","div.w3-cell",-1516627914),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10%",new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"color","color",1011675173),"lightgreen"], null)], null),style], 0)),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(k) : this$.call(null,k))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell","div.w3-cell",-1516627914),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"lightgrey"], null)], null),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(v) : this$.call(null,v))], null)], null),tunnl71$tools$core$iter__30139(cljs.core.rest(s__30140__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(edn);
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),style,"}"], null)], null):((cljs.core.list_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edn], 0))], null):((cljs.core.sequential_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-row.w3-border","div.w3-container.w3-row.w3-border",1983218291),(function (){var iter__5523__auto__ = (function tunnl71$tools$core$iter__30164(s__30165){
return (new cljs.core.LazySeq(null,(function (){
var s__30165__$1 = s__30165;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30165__$1);
if(temp__5804__auto__){
var s__30165__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30165__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30165__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30167 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30166 = (0);
while(true){
if((i__30166 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__30166);
cljs.core.chunk_append(b__30167,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-cell-col","div.w3-container.w3-cell-col",-1871621335),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(x) : this$.call(null,x))], null));

var G__30699 = (i__30166 + (1));
i__30166 = G__30699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30167),tunnl71$tools$core$iter__30164(cljs.core.chunk_rest(s__30165__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30167),null);
}
} else {
var x = cljs.core.first(s__30165__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-cell-col","div.w3-container.w3-cell-col",-1871621335),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(x) : this$.call(null,x))], null),tunnl71$tools$core$iter__30164(cljs.core.rest(s__30165__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(edn);
})()], null):(((edn instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.w3-left","p.w3-left",186445171),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edn], 0))], null):((((typeof edn === 'string') && ((!((cljs.core.re_matches(/http.*/,edn) == null))))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),edn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),edn], null)], null):((typeof edn === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.w3-left","p.w3-left",186445171),edn], null):((cljs.core.boolean_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(edn)], null):(((edn == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"nil"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.w3-left","p.w3-left",186445171),cljs.core.str.cljs$core$IFn$_invoke$arity$1(edn)], null)
))))))))], null);
}));

(tunnl71.tools.core.edn__GT_hiccup_true_to_form.cljs$core$IFn$_invoke$arity$1 = (function (edn){
var this$ = new cljs.core.Var(function(){return tunnl71.tools.core.edn__GT_hiccup_true_to_form;},new cljs.core.Symbol("tunnl71.tools.core","edn->hiccup-true-to-form","tunnl71.tools.core/edn->hiccup-true-to-form",514704826,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tunnl71.tools.core","tunnl71.tools.core",-1536590718,null),new cljs.core.Symbol(null,"edn->hiccup-true-to-form","edn->hiccup-true-to-form",1990101701,null),"tunnl71/tools/core.cljs",31,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null),new cljs.core.Symbol(null,"style","style",1143888791,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null),new cljs.core.Symbol(null,"style","style",1143888791,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,243,243,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null),new cljs.core.Symbol(null,"style","style",1143888791,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null)], null)),null,(cljs.core.truth_(tunnl71.tools.core.edn__GT_hiccup_true_to_form)?tunnl71.tools.core.edn__GT_hiccup_true_to_form.cljs$lang$test:null)]));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container","div.w3-container",118818473),((cljs.core.map_QMARK_(edn))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),"{"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null)], null),(function (){var iter__5523__auto__ = (function tunnl71$tools$core$iter__30173(s__30174){
return (new cljs.core.LazySeq(null,(function (){
var s__30174__$1 = s__30174;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30174__$1);
if(temp__5804__auto__){
var s__30174__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30174__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30174__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30176 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30175 = (0);
while(true){
if((i__30175 < size__5522__auto__)){
var vec__30182 = cljs.core._nth(c__5521__auto__,i__30175);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30182,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30182,(1),null);
cljs.core.chunk_append(b__30176,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-row","div.w3-container.w3-row",-1500022491),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell","div.w3-cell",-1516627914),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10%",new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"color","color",1011675173),"lightgreen"], null)], null),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(k) : this$.call(null,k))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell","div.w3-cell",-1516627914),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"lightgrey"], null)], null),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(v) : this$.call(null,v))], null)], null));

var G__30704 = (i__30175 + (1));
i__30175 = G__30704;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30176),tunnl71$tools$core$iter__30173(cljs.core.chunk_rest(s__30174__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30176),null);
}
} else {
var vec__30186 = cljs.core.first(s__30174__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30186,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30186,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-row","div.w3-container.w3-row",-1500022491),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell","div.w3-cell",-1516627914),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10%",new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"color","color",1011675173),"lightgreen"], null)], null),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(k) : this$.call(null,k))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell","div.w3-cell",-1516627914),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"lightgrey"], null)], null),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(v) : this$.call(null,v))], null)], null),tunnl71$tools$core$iter__30173(cljs.core.rest(s__30174__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(edn);
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),"}"], null)], null):((cljs.core.list_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edn], 0))], null):((cljs.core.sequential_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-row.w3-border","div.w3-container.w3-row.w3-border",1983218291),(function (){var iter__5523__auto__ = (function tunnl71$tools$core$iter__30193(s__30194){
return (new cljs.core.LazySeq(null,(function (){
var s__30194__$1 = s__30194;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30194__$1);
if(temp__5804__auto__){
var s__30194__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30194__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30194__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30196 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30195 = (0);
while(true){
if((i__30195 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__30195);
cljs.core.chunk_append(b__30196,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-cell-col","div.w3-container.w3-cell-col",-1871621335),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(x) : this$.call(null,x))], null));

var G__30705 = (i__30195 + (1));
i__30195 = G__30705;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30196),tunnl71$tools$core$iter__30193(cljs.core.chunk_rest(s__30194__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30196),null);
}
} else {
var x = cljs.core.first(s__30194__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-cell-col","div.w3-container.w3-cell-col",-1871621335),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(x) : this$.call(null,x))], null),tunnl71$tools$core$iter__30193(cljs.core.rest(s__30194__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(edn);
})()], null):(((edn instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.w3-left","p.w3-left",186445171),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edn], 0))], null):((((typeof edn === 'string') && ((!((cljs.core.re_matches(/http.*/,edn) == null))))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),edn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),edn], null)], null):((typeof edn === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.w3-left","p.w3-left",186445171),edn], null):((cljs.core.boolean_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(edn)], null):(((edn == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"nil"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.w3-left","p.w3-left",186445171),cljs.core.str.cljs$core$IFn$_invoke$arity$1(edn)], null)
))))))))], null);
}));

(tunnl71.tools.core.edn__GT_hiccup_true_to_form.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tunnl71.tools.core.Ref = (function (address,__meta,__extmap,__hash){
this.address = address;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(tunnl71.tools.core.Ref.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(tunnl71.tools.core.Ref.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k30202,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__30210 = k30202;
var G__30210__$1 = (((G__30210 instanceof cljs.core.Keyword))?G__30210.fqn:null);
switch (G__30210__$1) {
case "address":
return self__.address;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30202,else__5346__auto__);

}
}));

(tunnl71.tools.core.Ref.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__30214){
var vec__30215 = p__30214;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30215,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30215,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(tunnl71.tools.core.Ref.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#tunnl71.tools.core.Ref{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"address","address",559499426),self__.address],null))], null),self__.__extmap));
}));

(tunnl71.tools.core.Ref.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30201){
var self__ = this;
var G__30201__$1 = this;
return (new cljs.core.RecordIter((0),G__30201__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(tunnl71.tools.core.Ref.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(tunnl71.tools.core.Ref.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new tunnl71.tools.core.Ref(self__.address,self__.__meta,self__.__extmap,self__.__hash));
}));

(tunnl71.tools.core.Ref.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(tunnl71.tools.core.Ref.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-305714464 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(tunnl71.tools.core.Ref.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30203,other30204){
var self__ = this;
var this30203__$1 = this;
return (((!((other30204 == null)))) && ((((this30203__$1.constructor === other30204.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30203__$1.address,other30204.address)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30203__$1.__extmap,other30204.__extmap)))))));
}));

(tunnl71.tools.core.Ref.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new tunnl71.tools.core.Ref(self__.address,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(tunnl71.tools.core.Ref.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k30202){
var self__ = this;
var this__5350__auto____$1 = this;
var G__30373 = k30202;
var G__30373__$1 = (((G__30373 instanceof cljs.core.Keyword))?G__30373.fqn:null);
switch (G__30373__$1) {
case "address":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k30202);

}
}));

(tunnl71.tools.core.Ref.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__30201){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__30429 = cljs.core.keyword_identical_QMARK_;
var expr__30430 = k__5352__auto__;
if(cljs.core.truth_((pred__30429.cljs$core$IFn$_invoke$arity$2 ? pred__30429.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426),expr__30430) : pred__30429.call(null,new cljs.core.Keyword(null,"address","address",559499426),expr__30430)))){
return (new tunnl71.tools.core.Ref(G__30201,self__.__meta,self__.__extmap,null));
} else {
return (new tunnl71.tools.core.Ref(self__.address,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__30201),null));
}
}));

(tunnl71.tools.core.Ref.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"address","address",559499426),self__.address,null))], null),self__.__extmap));
}));

(tunnl71.tools.core.Ref.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__30201){
var self__ = this;
var this__5342__auto____$1 = this;
return (new tunnl71.tools.core.Ref(self__.address,G__30201,self__.__extmap,self__.__hash));
}));

(tunnl71.tools.core.Ref.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(tunnl71.tools.core.Ref.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"address","address",-2094936343,null)], null);
}));

(tunnl71.tools.core.Ref.cljs$lang$type = true);

(tunnl71.tools.core.Ref.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"tunnl71.tools.core/Ref",null,(1),null));
}));

(tunnl71.tools.core.Ref.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"tunnl71.tools.core/Ref");
}));

/**
 * Positional factory function for tunnl71.tools.core/Ref.
 */
tunnl71.tools.core.__GT_Ref = (function tunnl71$tools$core$__GT_Ref(address){
return (new tunnl71.tools.core.Ref(address,null,null,null));
});

/**
 * Factory function for tunnl71.tools.core/Ref, taking a map of keywords to field values.
 */
tunnl71.tools.core.map__GT_Ref = (function tunnl71$tools$core$map__GT_Ref(G__30205){
var extmap__5385__auto__ = (function (){var G__30453 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__30205,new cljs.core.Keyword(null,"address","address",559499426));
if(cljs.core.record_QMARK_(G__30205)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30453);
} else {
return G__30453;
}
})();
return (new tunnl71.tools.core.Ref(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(G__30205),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

/**
 * turns a nested edn-map to a tree of form {:in some-key @#{:out :outs} some-child(ren)}
 * 
 *   does NOT dig into vectors!
 * 
 *   possibly better names for it:
 * 
 *   io-map, edge-tree, ...
 */
tunnl71.tools.core.edn__GT_node = (function tunnl71$tools$core$edn__GT_node(var_args){
var G__30455 = arguments.length;
switch (G__30455) {
case 1:
return tunnl71.tools.core.edn__GT_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tunnl71.tools.core.edn__GT_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tunnl71.tools.core.edn__GT_node.cljs$core$IFn$_invoke$arity$1 = (function (value){
return tunnl71.tools.core.edn__GT_node.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("$","root","$/root",-448657441),value);
}));

(tunnl71.tools.core.edn__GT_node.cljs$core$IFn$_invoke$arity$2 = (function (root_k,value){
if(cljs.core.map_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),root_k,new cljs.core.Keyword(null,"outs","outs",729500157),cljs.core.vec((function (){var iter__5523__auto__ = (function tunnl71$tools$core$iter__30456(s__30457){
return (new cljs.core.LazySeq(null,(function (){
var s__30457__$1 = s__30457;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30457__$1);
if(temp__5804__auto__){
var s__30457__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30457__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30457__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30459 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30458 = (0);
while(true){
if((i__30458 < size__5522__auto__)){
var vec__30460 = cljs.core._nth(c__5521__auto__,i__30458);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30460,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30460,(1),null);
cljs.core.chunk_append(b__30459,tunnl71.tools.core.edn__GT_node.cljs$core$IFn$_invoke$arity$2(k,v));

var G__30723 = (i__30458 + (1));
i__30458 = G__30723;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30459),tunnl71$tools$core$iter__30456(cljs.core.chunk_rest(s__30457__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30459),null);
}
} else {
var vec__30463 = cljs.core.first(s__30457__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30463,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30463,(1),null);
return cljs.core.cons(tunnl71.tools.core.edn__GT_node.cljs$core$IFn$_invoke$arity$2(k,v),tunnl71$tools$core$iter__30456(cljs.core.rest(s__30457__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(value);
})())], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),root_k,new cljs.core.Keyword(null,"out","out",-910545517),value], null);
}
}));

(tunnl71.tools.core.edn__GT_node.cljs$lang$maxFixedArity = 2);

/**
 * turns a nested edn-map to a tree of form {:in some-key @#{:out :outs} some-child(ren)}
 * 
 *  treats VECTORS as int-indexed maps
 *   possibly better names for it:
 * 
 *   io-map, edge-tree, ...
 */
tunnl71.tools.core.edge__GT_node = (function tunnl71$tools$core$edge__GT_node(var_args){
var G__30467 = arguments.length;
switch (G__30467) {
case 1:
return tunnl71.tools.core.edge__GT_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tunnl71.tools.core.edge__GT_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tunnl71.tools.core.edge__GT_node.cljs$core$IFn$_invoke$arity$1 = (function (out){
return tunnl71.tools.core.edge__GT_node.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("$","root","$/root",-448657441),out);
}));

(tunnl71.tools.core.edge__GT_node.cljs$core$IFn$_invoke$arity$2 = (function (root_k,out){
if(cljs.core.vector_QMARK_(out)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),root_k,new cljs.core.Keyword(null,"outs","outs",729500157),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (i,x){
return tunnl71.tools.core.edge__GT_node.cljs$core$IFn$_invoke$arity$2(i,x);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),out)], null);
} else {
if(cljs.core.map_QMARK_(out)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),root_k,new cljs.core.Keyword(null,"outs","outs",729500157),cljs.core.vec((function (){var iter__5523__auto__ = (function tunnl71$tools$core$iter__30468(s__30469){
return (new cljs.core.LazySeq(null,(function (){
var s__30469__$1 = s__30469;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30469__$1);
if(temp__5804__auto__){
var s__30469__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30469__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30469__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30471 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30470 = (0);
while(true){
if((i__30470 < size__5522__auto__)){
var vec__30472 = cljs.core._nth(c__5521__auto__,i__30470);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30472,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30472,(1),null);
cljs.core.chunk_append(b__30471,tunnl71.tools.core.edge__GT_node.cljs$core$IFn$_invoke$arity$2(k,v));

var G__30725 = (i__30470 + (1));
i__30470 = G__30725;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30471),tunnl71$tools$core$iter__30468(cljs.core.chunk_rest(s__30469__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30471),null);
}
} else {
var vec__30475 = cljs.core.first(s__30469__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30475,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30475,(1),null);
return cljs.core.cons(tunnl71.tools.core.edge__GT_node.cljs$core$IFn$_invoke$arity$2(k,v),tunnl71$tools$core$iter__30468(cljs.core.rest(s__30469__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(out);
})())], null);
} else {
if((!(cljs.core.associative_QMARK_(out)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),root_k,new cljs.core.Keyword(null,"out","out",-910545517),out], null);
} else {
return null;
}
}
}
}));

(tunnl71.tools.core.edge__GT_node.cljs$lang$maxFixedArity = 2);

tunnl71.tools.core.edge__GT_node_mappy = (function tunnl71$tools$core$edge__GT_node_mappy(var_args){
var G__30479 = arguments.length;
switch (G__30479) {
case 1:
return tunnl71.tools.core.edge__GT_node_mappy.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tunnl71.tools.core.edge__GT_node_mappy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tunnl71.tools.core.edge__GT_node_mappy.cljs$core$IFn$_invoke$arity$1 = (function (out){
return tunnl71.tools.core.edge__GT_node_mappy.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),out);
}));

(tunnl71.tools.core.edge__GT_node_mappy.cljs$core$IFn$_invoke$arity$2 = (function (k,out){
if(cljs.core.vector_QMARK_(out)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(tunnl71.tools.core.edge__GT_node_mappy,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),out))]);
} else {
if(cljs.core.map_QMARK_(out)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30480){
var vec__30481 = p__30480;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30481,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30481,(1),null);
return tunnl71.tools.core.edge__GT_node_mappy.cljs$core$IFn$_invoke$arity$2(k__$1,v);
}),out))]);
} else {
if((!(cljs.core.associative_QMARK_(out)))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,out]);
} else {
return null;
}
}
}
}));

(tunnl71.tools.core.edge__GT_node_mappy.cljs$lang$maxFixedArity = 2);

tunnl71.tools.core.node__GT_edn_helper = (function tunnl71$tools$core$node__GT_edn_helper(node){
if(cljs.core.contains_QMARK_(node,new cljs.core.Keyword(null,"out","out",-910545517))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(node)]);
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(node),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(tunnl71.tools.core.node__GT_edn_helper,new cljs.core.Keyword(null,"outs","outs",729500157).cljs$core$IFn$_invoke$arity$1(node)))]);
}
});
tunnl71.tools.core.node__GT_edn = (function tunnl71$tools$core$node__GT_edn(node){
var result = tunnl71.tools.core.node__GT_edn_helper(node);
if(cljs.core.contains_QMARK_(result,new cljs.core.Keyword("$","root","$/root",-448657441))){
return new cljs.core.Keyword("$","root","$/root",-448657441).cljs$core$IFn$_invoke$arity$1(result);
} else {
return result;
}
});
/**
 * [k] -> [v] -> [kv]
 */
tunnl71.tools.core.label = (function tunnl71$tools$core$label(var_args){
var G__30486 = arguments.length;
switch (G__30486) {
case 2:
return tunnl71.tools.core.label.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return tunnl71.tools.core.label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tunnl71.tools.core.label.cljs$core$IFn$_invoke$arity$2 = (function (ks,coll){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function() { 
var G__30728__delegate = function (xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.zipmap,ks,xs);
};
var G__30728 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__30729__i = 0, G__30729__a = new Array(arguments.length -  0);
while (G__30729__i < G__30729__a.length) {G__30729__a[G__30729__i] = arguments[G__30729__i + 0]; ++G__30729__i;}
  xs = new cljs.core.IndexedSeq(G__30729__a,0,null);
} 
return G__30728__delegate.call(this,xs);};
G__30728.cljs$lang$maxFixedArity = 0;
G__30728.cljs$lang$applyTo = (function (arglist__30730){
var xs = cljs.core.seq(arglist__30730);
return G__30728__delegate(xs);
});
G__30728.cljs$core$IFn$_invoke$arity$variadic = G__30728__delegate;
return G__30728;
})()
,coll);
}));

(tunnl71.tools.core.label.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return tunnl71.tools.core.label.cljs$core$IFn$_invoke$arity$2(cljs.core.first(coll),cljs.core.rest(coll));
}));

(tunnl71.tools.core.label.cljs$lang$maxFixedArity = 2);

/**
 * sum of n terms with multiplying factor r.
 *   a + ar + ar2 + ... + ar^(n - 1)
 */
tunnl71.tools.core.geometric_sum = (function tunnl71$tools$core$geometric_sum(n,a,r){
return (a * ((Math.pow(r,n) - (1)) / (r - (1))));
});
tunnl71.tools.core.math_symbols = "\u2211\u2207\u2202\u0394\u03B7";
tunnl71.tools.core.divide_set = (function tunnl71$tools$core$divide_set(ratio,xs){
var n = cljs.core.count(xs);
var length_training = ((n * ratio) | (0));
var vec__30496 = cljs.core.split_at(length_training,xs);
var training_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30496,(0),null);
var test_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30496,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [training_set,test_set], null);
});
/**
 * deprecated
 */
tunnl71.tools.core.countd = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.distinct);
tunnl71.tools.core.random_take = (function tunnl71$tools$core$random_take(n,coll){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__30503_SHARP_,p2__30504_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__30503_SHARP_,p2__30504_SHARP_);
}),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,coll),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.rand_int(cljs.core.count(coll));
})));
});
tunnl71.tools.core.nil_chain = (function tunnl71$tools$core$nil_chain(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30732 = arguments.length;
var i__5770__auto___30733 = (0);
while(true){
if((i__5770__auto___30733 < len__5769__auto___30732)){
args__5775__auto__.push((arguments[i__5770__auto___30733]));

var G__30734 = (i__5770__auto___30733 + (1));
i__5770__auto___30733 = G__30734;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return tunnl71.tools.core.nil_chain.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(tunnl71.tools.core.nil_chain.cljs$core$IFn$_invoke$arity$variadic = (function (fs){
return (function (x){
return cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30505_SHARP_){
return (p1__30505_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30505_SHARP_.cljs$core$IFn$_invoke$arity$1(x) : p1__30505_SHARP_.call(null,x));
}),fs)));
});
}));

(tunnl71.tools.core.nil_chain.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tunnl71.tools.core.nil_chain.cljs$lang$applyTo = (function (seq30506){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30506));
}));

tunnl71.tools.core.to_keyword = (function tunnl71$tools$core$to_keyword(s){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(s," ","-"));
});
tunnl71.tools.core.add = (function tunnl71$tools$core$add(coll,x){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(coll,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
tunnl71.tools.core.csv__GT_edn = (function tunnl71$tools$core$csv__GT_edn(string){
var s_s_str = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30511_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__30511_SHARP_,/,/);
}),clojure.string.split_lines(string));
var ks = cljs.core.first(s_s_str);
var s_vs = cljs.core.rest(s_s_str);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30512_SHARP_){
return cljs.core.zipmap(ks,p1__30512_SHARP_);
}),s_vs);
});
tunnl71.tools.core.counter = (function tunnl71$tools$core$counter(){
var x = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.inc);

return cljs.core.deref(x);
});
});
tunnl71.tools.core.add_id = (function tunnl71$tools$core$add_id(doc){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"tunnl71.id","tunnl71.id",-55804638),tunnl71.tools.core.counter());
});
tunnl71.tools.core.transpose = (function tunnl71$tools$core$transpose(vs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,vs);
});
/**
 * mapseq -> seqmap
 */
tunnl71.tools.core.__GT_seqmap = (function tunnl71$tools$core$__GT_seqmap(mapseq){
var ks = cljs.core.keys(mapseq);
var vs = cljs.core.vals(mapseq);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__30520_SHARP_,p2__30521_SHARP_){
return cljs.core.zipmap(p1__30520_SHARP_,p2__30521_SHARP_);
}),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(ks),tunnl71.tools.core.transpose(vs));
});
tunnl71.tools.core.tree__GT_routes = (function tunnl71$tools$core$tree__GT_routes(var_args){
var G__30523 = arguments.length;
switch (G__30523) {
case 1:
return tunnl71.tools.core.tree__GT_routes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return tunnl71.tools.core.tree__GT_routes.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tunnl71.tools.core.tree__GT_routes.cljs$core$IFn$_invoke$arity$1 = (function (t){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,tunnl71.tools.core.tree__GT_routes.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,null,t));
}));

(tunnl71.tools.core.tree__GT_routes.cljs$core$IFn$_invoke$arity$3 = (function (p,k,v){
if(cljs.core.map_QMARK_(v)){
var result = (function (){var iter__5523__auto__ = (function tunnl71$tools$core$iter__30524(s__30525){
return (new cljs.core.LazySeq(null,(function (){
var s__30525__$1 = s__30525;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30525__$1);
if(temp__5804__auto__){
var s__30525__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30525__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30525__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30527 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30526 = (0);
while(true){
if((i__30526 < size__5522__auto__)){
var vec__30528 = cljs.core._nth(c__5521__auto__,i__30526);
var kx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30528,(0),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30528,(1),null);
cljs.core.chunk_append(b__30527,tunnl71.tools.core.tree__GT_routes.cljs$core$IFn$_invoke$arity$3(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)),kx,vx));

var G__30739 = (i__30526 + (1));
i__30526 = G__30739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30527),tunnl71$tools$core$iter__30524(cljs.core.chunk_rest(s__30525__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30527),null);
}
} else {
var vec__30531 = cljs.core.first(s__30525__$2);
var kx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30531,(0),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30531,(1),null);
return cljs.core.cons(tunnl71.tools.core.tree__GT_routes.cljs$core$IFn$_invoke$arity$3(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)),kx,vx),tunnl71$tools$core$iter__30524(cljs.core.rest(s__30525__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(v);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,result);
} else {
var result = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null);
}
}));

(tunnl71.tools.core.tree__GT_routes.cljs$lang$maxFixedArity = 3);

tunnl71.tools.core.path = (function tunnl71$tools$core$path(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30741 = arguments.length;
var i__5770__auto___30742 = (0);
while(true){
if((i__5770__auto___30742 < len__5769__auto___30741)){
args__5775__auto__.push((arguments[i__5770__auto___30742]));

var G__30743 = (i__5770__auto___30742 + (1));
i__5770__auto___30742 = G__30743;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return tunnl71.tools.core.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(tunnl71.tools.core.path.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return tunnl71.tools.core.___GT_.cljs$core$IFn$_invoke$arity$variadic(xs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__30534_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,p1__30534_SHARP_);
}),(function (xs__$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30535_SHARP_){
if(cljs.core.truth_(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__30535_SHARP_))){
return cljs.core.name(p1__30535_SHARP_);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30535_SHARP_);
}
}),xs__$1);
}),(function (p1__30536_SHARP_){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("/",p1__30536_SHARP_);
}),(function (p1__30537_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__30537_SHARP_);
}),(function (p1__30538_SHARP_){
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30538_SHARP_)].join('');
}),(function (p1__30539_SHARP_){
return clojure.string.replace(p1__30539_SHARP_,/\/+/,"/");
})], 0));
}));

(tunnl71.tools.core.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tunnl71.tools.core.path.cljs$lang$applyTo = (function (seq30540){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30540));
}));

tunnl71.tools.core.mapply = (function tunnl71$tools$core$mapply(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30749 = arguments.length;
var i__5770__auto___30750 = (0);
while(true){
if((i__5770__auto___30750 < len__5769__auto___30749)){
args__5775__auto__.push((arguments[i__5770__auto___30750]));

var G__30751 = (i__5770__auto___30750 + (1));
i__5770__auto___30750 = G__30751;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return tunnl71.tools.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(tunnl71.tools.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,f),xs);
}));

(tunnl71.tools.core.mapply.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tunnl71.tools.core.mapply.cljs$lang$applyTo = (function (seq30543){
var G__30544 = cljs.core.first(seq30543);
var seq30543__$1 = cljs.core.next(seq30543);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30544,seq30543__$1);
}));

tunnl71.tools.core.lconj = (function tunnl71$tools$core$lconj(coll,x){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),coll);
});
tunnl71.tools.core.concatv = (function tunnl71$tools$core$concatv(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30752 = arguments.length;
var i__5770__auto___30753 = (0);
while(true){
if((i__5770__auto___30753 < len__5769__auto___30752)){
args__5775__auto__.push((arguments[i__5770__auto___30753]));

var G__30754 = (i__5770__auto___30753 + (1));
i__5770__auto___30753 = G__30754;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return tunnl71.tools.core.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(tunnl71.tools.core.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,vs));
}));

(tunnl71.tools.core.concatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tunnl71.tools.core.concatv.cljs$lang$applyTo = (function (seq30549){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30549));
}));

tunnl71.tools.core.drop_until = (function tunnl71$tools$core$drop_until(pred,coll){
return cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,pred),coll));
});
tunnl71.tools.core.take_until = (function tunnl71$tools$core$take_until(pred,coll){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,pred),coll);
});
tunnl71.tools.core.dir = (function tunnl71$tools$core$dir(x){
return console.dir(x);
});
tunnl71.tools.core.str__GT_json = (function tunnl71$tools$core$str__GT_json(string_){
return JSON.parse(string_);
});
tunnl71.tools.core.json__GT_str = (function tunnl71$tools$core$json__GT_str(json_){
return JSON.stringify(json_);
});
/**
 * namespace + k v + k v + ... -> namespaced-record
 */
tunnl71.tools.core.record = (function tunnl71$tools$core$record(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30756 = arguments.length;
var i__5770__auto___30757 = (0);
while(true){
if((i__5770__auto___30757 < len__5769__auto___30756)){
args__5775__auto__.push((arguments[i__5770__auto___30757]));

var G__30759 = (i__5770__auto___30757 + (1));
i__5770__auto___30757 = G__30759;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return tunnl71.tools.core.record.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(tunnl71.tools.core.record.cljs$core$IFn$_invoke$arity$variadic = (function (namesp,k_v_s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function tunnl71$tools$core$iter__30557(s__30558){
return (new cljs.core.LazySeq(null,(function (){
var s__30558__$1 = s__30558;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30558__$1);
if(temp__5804__auto__){
var s__30558__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30558__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30558__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30560 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30559 = (0);
while(true){
if((i__30559 < size__5522__auto__)){
var vec__30563 = cljs.core._nth(c__5521__auto__,i__30559);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30563,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30563,(1),null);
cljs.core.chunk_append(b__30560,tunnl71.tools.core.map_entry(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(namesp,k),v));

var G__30767 = (i__30559 + (1));
i__30559 = G__30767;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30560),tunnl71$tools$core$iter__30557(cljs.core.chunk_rest(s__30558__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30560),null);
}
} else {
var vec__30569 = cljs.core.first(s__30558__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30569,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30569,(1),null);
return cljs.core.cons(tunnl71.tools.core.map_entry(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(namesp,k),v),tunnl71$tools$core$iter__30557(cljs.core.rest(s__30558__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),k_v_s));
})());
}));

(tunnl71.tools.core.record.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tunnl71.tools.core.record.cljs$lang$applyTo = (function (seq30555){
var G__30556 = cljs.core.first(seq30555);
var seq30555__$1 = cljs.core.next(seq30555);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30556,seq30555__$1);
}));

/**
 * String -> Uint8Array
 */
tunnl71.tools.core.encode = (function tunnl71$tools$core$encode(s){
return (new TextEncoder()).encode(s);
});
/**
 * Uint8Array -> String
 */
tunnl71.tools.core.decode = (function tunnl71$tools$core$decode(uintarray){
return (new TextDecoder()).decode(uintarray);
});
/**
 * suck!
 */
tunnl71.tools.core.consume_BANG_ = (function tunnl71$tools$core$consume_BANG_(out){
var c__21307__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = (function (state_30583){
var state_val_30584 = (state_30583[(1)]);
if((state_val_30584 === (1))){
var state_30583__$1 = state_30583;
var statearr_30585_30768 = state_30583__$1;
(statearr_30585_30768[(2)] = null);

(statearr_30585_30768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (2))){
var state_30583__$1 = state_30583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30583__$1,(4),out);
} else {
if((state_val_30584 === (3))){
var inst_30581 = (state_30583[(2)]);
var state_30583__$1 = state_30583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30583__$1,inst_30581);
} else {
if((state_val_30584 === (4))){
var inst_30574 = (state_30583[(2)]);
var state_30583__$1 = state_30583;
if(cljs.core.truth_(inst_30574)){
var statearr_30586_30769 = state_30583__$1;
(statearr_30586_30769[(1)] = (5));

} else {
var statearr_30587_30770 = state_30583__$1;
(statearr_30587_30770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (5))){
var state_30583__$1 = state_30583;
var statearr_30589_30771 = state_30583__$1;
(statearr_30589_30771[(2)] = null);

(statearr_30589_30771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (6))){
var state_30583__$1 = state_30583;
var statearr_30590_30772 = state_30583__$1;
(statearr_30590_30772[(2)] = null);

(statearr_30590_30772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (7))){
var inst_30579 = (state_30583[(2)]);
var state_30583__$1 = state_30583;
var statearr_30591_30773 = state_30583__$1;
(statearr_30591_30773[(2)] = inst_30579);

(statearr_30591_30773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var tunnl71$tools$core$consume_BANG__$_state_machine__21179__auto__ = null;
var tunnl71$tools$core$consume_BANG__$_state_machine__21179__auto____0 = (function (){
var statearr_30595 = [null,null,null,null,null,null,null];
(statearr_30595[(0)] = tunnl71$tools$core$consume_BANG__$_state_machine__21179__auto__);

(statearr_30595[(1)] = (1));

return statearr_30595;
});
var tunnl71$tools$core$consume_BANG__$_state_machine__21179__auto____1 = (function (state_30583){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_30583);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e30596){var ex__21182__auto__ = e30596;
var statearr_30597_30774 = state_30583;
(statearr_30597_30774[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_30583[(4)]))){
var statearr_30598_30775 = state_30583;
(statearr_30598_30775[(1)] = cljs.core.first((state_30583[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30776 = state_30583;
state_30583 = G__30776;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
tunnl71$tools$core$consume_BANG__$_state_machine__21179__auto__ = function(state_30583){
switch(arguments.length){
case 0:
return tunnl71$tools$core$consume_BANG__$_state_machine__21179__auto____0.call(this);
case 1:
return tunnl71$tools$core$consume_BANG__$_state_machine__21179__auto____1.call(this,state_30583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tunnl71$tools$core$consume_BANG__$_state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = tunnl71$tools$core$consume_BANG__$_state_machine__21179__auto____0;
tunnl71$tools$core$consume_BANG__$_state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = tunnl71$tools$core$consume_BANG__$_state_machine__21179__auto____1;
return tunnl71$tools$core$consume_BANG__$_state_machine__21179__auto__;
})()
})();
var state__21309__auto__ = (function (){var statearr_30599 = f__21308__auto__();
(statearr_30599[(6)] = c__21307__auto__);

return statearr_30599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
}));

return c__21307__auto__;
});
tunnl71.tools.core.seq__GT_fn = (function tunnl71$tools$core$seq__GT_fn(seq_){
var v = cljs.core.volatile_BANG_(seq_);
return (function (){
var result = cljs.core.first(cljs.core.deref(v));
v.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.rest(v.cljs$core$IDeref$_deref$arity$1(null)));

return result;
});
});
tunnl71.tools.core.log = (function tunnl71$tools$core$log(var_args){
var G__30601 = arguments.length;
switch (G__30601) {
case 2:
return tunnl71.tools.core.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return tunnl71.tools.core.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tunnl71.tools.core.log.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return (Math.log(a) / Math.log(b));
}));

(tunnl71.tools.core.log.cljs$core$IFn$_invoke$arity$1 = (function (a){
return Math.log(a);
}));

(tunnl71.tools.core.log.cljs$lang$maxFixedArity = 2);

tunnl71.tools.core.e = Math.exp((1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),tunnl71.tools.core.log.cljs$core$IFn$_invoke$arity$2((32),(2)))){
} else {
throw (new Error("Assert failed: (= 5 (log 32 2))"));
}
tunnl71.tools.core.add_keyboard_event_listener_BANG_ = (function tunnl71$tools$core$add_keyboard_event_listener_BANG_(){
return goog.events.listen(document,"keydown",(function (p1__30608_SHARP_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__30608_SHARP_.keyCode], 0))], 0));
}));
});
tunnl71.tools.core.html__GT_hiccup = (function tunnl71$tools$core$html__GT_hiccup(string_){
return cljs.core.first(cljs.core.nnext(cljs.core.first(cljs.core.next(cljs.core.nnext(cljs.core.first(hickory.core.as_hiccup(hickory.core.parse(string_))))))));
});
/**
 * applies f until application becomes idempotent
 */
tunnl71.tools.core.iterate_fix = (function tunnl71$tools$core$iterate_fix(f,x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (b,a){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,a)){
return cljs.core.reduced(b);
} else {
return a;

}
}),cljs.core.iterate(f,x));
});
tunnl71.tools.core.rangev = tunnl71.tools.core._GT__GT__GT_(cljs.core.range,cljs.core.vec);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((tunnl71.tools.core.rangev.cljs$core$IFn$_invoke$arity$3 ? tunnl71.tools.core.rangev.cljs$core$IFn$_invoke$arity$3((2),(10),(3)) : tunnl71.tools.core.rangev.call(null,(2),(10),(3))),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$3((2),(9),(3))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8)], null)], 0))){
} else {
throw (new Error("Assert failed: (= (rangev 2 10 3) (into [] (range 2 9 3)) [2 5 8])"));
}
/**
 * end inclusive range
 */
tunnl71.tools.core.range_PLUS_ = (function tunnl71$tools$core$range_PLUS_(var_args){
var G__30616 = arguments.length;
switch (G__30616) {
case 0:
return tunnl71.tools.core.range_PLUS_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tunnl71.tools.core.range_PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tunnl71.tools.core.range_PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tunnl71.tools.core.range_PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tunnl71.tools.core.range_PLUS_.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.range.cljs$core$IFn$_invoke$arity$0();
}));

(tunnl71.tools.core.range_PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (end){
return cljs.core.range.cljs$core$IFn$_invoke$arity$1((end + (1)));
}));

(tunnl71.tools.core.range_PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (start,end){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,(end + (1)));
}));

(tunnl71.tools.core.range_PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (start,end,step){
return cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,(end + (1)),step);
}));

(tunnl71.tools.core.range_PLUS_.cljs$lang$maxFixedArity = 3);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),tunnl71.tools.core.range_PLUS_.cljs$core$IFn$_invoke$arity$0()),cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.range.cljs$core$IFn$_invoke$arity$0()))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tunnl71.tools.core.range_PLUS_.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.list((0)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tunnl71.tools.core.range_PLUS_.cljs$core$IFn$_invoke$arity$1((1)),cljs.core.list((0),(1)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tunnl71.tools.core.range_PLUS_.cljs$core$IFn$_invoke$arity$1((3)),cljs.core.list((0),(1),(2),(3)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tunnl71.tools.core.range_PLUS_.cljs$core$IFn$_invoke$arity$2((2),(3)),cljs.core.list((2),(3)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tunnl71.tools.core.range_PLUS_.cljs$core$IFn$_invoke$arity$2((99),(99)),cljs.core.list((99)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tunnl71.tools.core.range_PLUS_.cljs$core$IFn$_invoke$arity$2((99),(99)),cljs.core.range.cljs$core$IFn$_invoke$arity$2((99),(100)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tunnl71.tools.core.range_PLUS_.cljs$core$IFn$_invoke$arity$3((1000),(1006),(5)),cljs.core.range.cljs$core$IFn$_invoke$arity$3((1000),(1006),(5)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tunnl71.tools.core.range_PLUS_.cljs$core$IFn$_invoke$arity$3((1000),(1006),(2)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$3((1000),(1006),(2)),cljs.core.list((1006))))))))))))))))))))){
} else {
throw (new Error("Assert failed: (and (= (take 10 (range+)) (take 10 (range))) (= (range+ 0) (quote (0))) (= (range+ 1) (quote (0 1))) (= (range+ 3) (quote (0 1 2 3))) (= (range+ 2 3) (quote (2 3))) (= (range+ 99 99) (quote (99))) (= (range+ 99 99) (range 99 100)) (= (range+ 1000 1006 5) (range 1000 1006 5)) (= (range+ 1000 1006 2) (concat (range 1000 1006 2) (quote (1006)))))"));
}
tunnl71.tools.core.rangev_PLUS_ = tunnl71.tools.core._GT__GT__GT_(tunnl71.tools.core.range_PLUS_,cljs.core.vec);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((tunnl71.tools.core.rangev_PLUS_.cljs$core$IFn$_invoke$arity$3 ? tunnl71.tools.core.rangev_PLUS_.cljs$core$IFn$_invoke$arity$3((2),(10),(2)) : tunnl71.tools.core.rangev_PLUS_.call(null,(2),(10),(2))),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$3((2),(10),(2))),(10)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6),(8),(10)], null)], 0))){
} else {
throw (new Error("Assert failed: (= (rangev+ 2 10 2) (conj (into [] (range 2 10 2)) 10) [2 4 6 8 10])"));
}
tunnl71.tools.core.now = (function tunnl71$tools$core$now(){
return (new Date()).toISOString();
});

//# sourceMappingURL=tunnl71.tools.core.js.map
