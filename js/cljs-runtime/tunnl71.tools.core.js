goog.provide('tunnl71.tools.core');
tunnl71.tools.core.uuid = (function tunnl71$tools$core$uuid(var_args){
var G__15684 = arguments.length;
switch (G__15684) {
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
var len__5769__auto___17083 = arguments.length;
var i__5770__auto___17084 = (0);
while(true){
if((i__5770__auto___17084 < len__5769__auto___17083)){
args__5775__auto__.push((arguments[i__5770__auto___17084]));

var G__17085 = (i__5770__auto___17084 + (1));
i__5770__auto___17084 = G__17085;
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
(tunnl71.tools.core.invoke.cljs$lang$applyTo = (function (seq15794){
var G__15803 = cljs.core.first(seq15794);
var seq15794__$1 = cljs.core.next(seq15794);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15803,seq15794__$1);
}));

tunnl71.tools.core.$ = cljs.core.partial;
tunnl71.tools.core.flip = (function tunnl71$tools$core$flip(f){
return (function() { 
var G__17086__delegate = function (xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.reverse(xs));
};
var G__17086 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__17087__i = 0, G__17087__a = new Array(arguments.length -  0);
while (G__17087__i < G__17087__a.length) {G__17087__a[G__17087__i] = arguments[G__17087__i + 0]; ++G__17087__i;}
  xs = new cljs.core.IndexedSeq(G__17087__a,0,null);
} 
return G__17086__delegate.call(this,xs);};
G__17086.cljs$lang$maxFixedArity = 0;
G__17086.cljs$lang$applyTo = (function (arglist__17088){
var xs = cljs.core.seq(arglist__17088);
return G__17086__delegate(xs);
});
G__17086.cljs$core$IFn$_invoke$arity$variadic = G__17086__delegate;
return G__17086;
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
var len__5769__auto___17089 = arguments.length;
var i__5770__auto___17090 = (0);
while(true){
if((i__5770__auto___17090 < len__5769__auto___17089)){
args__5775__auto__.push((arguments[i__5770__auto___17090]));

var G__17091 = (i__5770__auto___17090 + (1));
i__5770__auto___17090 = G__17091;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return tunnl71.tools.core.___GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(tunnl71.tools.core.___GT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,fs){
var fexpr__15846 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tunnl71.tools.core.pipe,fs);
return (fexpr__15846.cljs$core$IFn$_invoke$arity$1 ? fexpr__15846.cljs$core$IFn$_invoke$arity$1(x) : fexpr__15846.call(null,x));
}));

(tunnl71.tools.core.___GT_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tunnl71.tools.core.___GT_.cljs$lang$applyTo = (function (seq15834){
var G__15835 = cljs.core.first(seq15834);
var seq15834__$1 = cljs.core.next(seq15834);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15835,seq15834__$1);
}));

/**
 * (a->b) -> (c->d) -> (a,c) -> (b,d)
 */
tunnl71.tools.core.bi_arrow = (function tunnl71$tools$core$bi_arrow(var_args){
var G__15863 = arguments.length;
switch (G__15863) {
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

(tunnl71.tools.core.bi_arrow.cljs$core$IFn$_invoke$arity$3 = (function (f,g,p__15871){
var vec__15873 = p__15871;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15873,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15873,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(y) : g.call(null,y))], null);
}));

(tunnl71.tools.core.bi_arrow.cljs$core$IFn$_invoke$arity$4 = (function (f,g,x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(y) : g.call(null,y))], null);
}));

(tunnl71.tools.core.bi_arrow.cljs$lang$maxFixedArity = 4);

tunnl71.tools.core.diff_keys = (function tunnl71$tools$core$diff_keys(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17105 = arguments.length;
var i__5770__auto___17106 = (0);
while(true){
if((i__5770__auto___17106 < len__5769__auto___17105)){
args__5775__auto__.push((arguments[i__5770__auto___17106]));

var G__17109 = (i__5770__auto___17106 + (1));
i__5770__auto___17106 = G__17109;
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
(tunnl71.tools.core.diff_keys.cljs$lang$applyTo = (function (seq15886){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15886));
}));

tunnl71.tools.core.presents = (function tunnl71$tools$core$presents(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17112 = arguments.length;
var i__5770__auto___17113 = (0);
while(true){
if((i__5770__auto___17113 < len__5769__auto___17112)){
args__5775__auto__.push((arguments[i__5770__auto___17113]));

var G__17115 = (i__5770__auto___17113 + (1));
i__5770__auto___17113 = G__17115;
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
(tunnl71.tools.core.presents.cljs$lang$applyTo = (function (seq15962){
var G__15963 = cljs.core.first(seq15962);
var seq15962__$1 = cljs.core.next(seq15962);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15963,seq15962__$1);
}));

tunnl71.tools.core.part_QMARK_ = (function tunnl71$tools$core$part_QMARK_(s1,s2){
return clojure.set.subset_QMARK_(cljs.core.set(s1),cljs.core.set(s2));
});
tunnl71.tools.core.belongs = tunnl71.tools.core.flip(tunnl71.tools.core.presents);
tunnl71.tools.core.presents_QMARK_ = (function tunnl71$tools$core$presents_QMARK_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17125 = arguments.length;
var i__5770__auto___17126 = (0);
while(true){
if((i__5770__auto___17126 < len__5769__auto___17125)){
args__5775__auto__.push((arguments[i__5770__auto___17126]));

var G__17128 = (i__5770__auto___17126 + (1));
i__5770__auto___17126 = G__17128;
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
(tunnl71.tools.core.presents_QMARK_.cljs$lang$applyTo = (function (seq16005){
var G__16006 = cljs.core.first(seq16005);
var seq16005__$1 = cljs.core.next(seq16005);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16006,seq16005__$1);
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
/**
 * note: does not do fractions right
 */
tunnl71.tools.core.exp = (function tunnl71$tools$core$exp(var_args){
var G__16034 = arguments.length;
switch (G__16034) {
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,((cljs.core.every_QMARK_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.coll_QMARK_),coll))?coll:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16051_SHARP_){
if(cljs.core.coll_QMARK_(p1__16051_SHARP_)){
return (tunnl71.tools.core.coll__GT_map.cljs$core$IFn$_invoke$arity$1 ? tunnl71.tools.core.coll__GT_map.cljs$core$IFn$_invoke$arity$1(p1__16051_SHARP_) : tunnl71.tools.core.coll__GT_map.call(null,p1__16051_SHARP_));
} else {
return p1__16051_SHARP_;
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
return cljs.core.first((function (){var iter__5523__auto__ = (function tunnl71$tools$core$derive_spec_$_iter__16066(s__16067){
return (new cljs.core.LazySeq(null,(function (){
var s__16067__$1 = s__16067;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16067__$1);
if(temp__5804__auto__){
var s__16067__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16067__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__16067__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__16069 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__16068 = (0);
while(true){
if((i__16068 < size__5522__auto__)){
var s = cljs.core._nth(c__5521__auto__,i__16068);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(s,x)){
cljs.core.chunk_append(b__16069,s);

var G__17186 = (i__16068 + (1));
i__16068 = G__17186;
continue;
} else {
var G__17187 = (i__16068 + (1));
i__16068 = G__17187;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16069),tunnl71$tools$core$derive_spec_$_iter__16066(cljs.core.chunk_rest(s__16067__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16069),null);
}
} else {
var s = cljs.core.first(s__16067__$2);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(s,x)){
return cljs.core.cons(s,tunnl71$tools$core$derive_spec_$_iter__16066(cljs.core.rest(s__16067__$2)));
} else {
var G__17189 = cljs.core.rest(s__16067__$2);
s__16067__$1 = G__17189;
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container","div.w3-container",118818473),((cljs.core.map_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container","div.w3-container",118818473),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.w3-ul","ul.w3-ul",-892548249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null)], null),(function (){var iter__5523__auto__ = (function tunnl71$tools$core$edn__GT_hiccup_palette_$_iter__16116(s__16117){
return (new cljs.core.LazySeq(null,(function (){
var s__16117__$1 = s__16117;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16117__$1);
if(temp__5804__auto__){
var s__16117__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16117__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__16117__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__16119 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__16118 = (0);
while(true){
if((i__16118 < size__5522__auto__)){
var vec__16127 = cljs.core._nth(c__5521__auto__,i__16118);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16127,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16127,(1),null);
cljs.core.chunk_append(b__16119,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.w3-container","li.w3-container",1343237672),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-row","div.w3-row",692760586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-left.w3-padding","div.w3-left.w3-padding",1667728296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10%",new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"right","right",-452581833)], null)], null),(tunnl71.tools.core.edn__GT_hiccup_palette.cljs$core$IFn$_invoke$arity$2 ? tunnl71.tools.core.edn__GT_hiccup_palette.cljs$core$IFn$_invoke$arity$2(system,k) : tunnl71.tools.core.edn__GT_hiccup_palette.call(null,system,k))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-left.w3-padding","div.w3-left.w3-padding",1667728296),(tunnl71.tools.core.edn__GT_hiccup_palette.cljs$core$IFn$_invoke$arity$2 ? tunnl71.tools.core.edn__GT_hiccup_palette.cljs$core$IFn$_invoke$arity$2(system,v) : tunnl71.tools.core.edn__GT_hiccup_palette.call(null,system,v))], null)], null)], null));

var G__17196 = (i__16118 + (1));
i__16118 = G__17196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16119),tunnl71$tools$core$edn__GT_hiccup_palette_$_iter__16116(cljs.core.chunk_rest(s__16117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16119),null);
}
} else {
var vec__16162 = cljs.core.first(s__16117__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16162,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16162,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.w3-container","li.w3-container",1343237672),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-row","div.w3-row",692760586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-left.w3-padding","div.w3-left.w3-padding",1667728296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10%",new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"right","right",-452581833)], null)], null),(tunnl71.tools.core.edn__GT_hiccup_palette.cljs$core$IFn$_invoke$arity$2 ? tunnl71.tools.core.edn__GT_hiccup_palette.cljs$core$IFn$_invoke$arity$2(system,k) : tunnl71.tools.core.edn__GT_hiccup_palette.call(null,system,k))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-left.w3-padding","div.w3-left.w3-padding",1667728296),(tunnl71.tools.core.edn__GT_hiccup_palette.cljs$core$IFn$_invoke$arity$2 ? tunnl71.tools.core.edn__GT_hiccup_palette.cljs$core$IFn$_invoke$arity$2(system,v) : tunnl71.tools.core.edn__GT_hiccup_palette.call(null,system,v))], null)], null)], null),tunnl71$tools$core$edn__GT_hiccup_palette_$_iter__16116(cljs.core.rest(s__16117__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(edn);
})())], null):((cljs.core.sequential_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edn], 0))], null):(((edn instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.w3-left","p.w3-left",186445171),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("palette","bleak","palette/bleak",1191529623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(system)))], null)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edn], 0))], null):((((typeof edn === 'string') && ((!((cljs.core.re_matches(/http.*/,edn) == null))))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),edn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),edn], null)], null):((typeof edn === 'string')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.w3-left","p.w3-left",186445171),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edn], 0))], null):((cljs.core.boolean_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(edn)], null):(((edn == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"nil"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.w3-left","p.w3-left",186445171),cljs.core.str.cljs$core$IFn$_invoke$arity$1(edn)], null)
)))))))], null);
});
tunnl71.tools.core.edn__GT_hiccup = (function tunnl71$tools$core$edn__GT_hiccup(edn){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container","div.w3-container",118818473),((cljs.core.map_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container","div.w3-container",118818473),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.w3-ul","ul.w3-ul",-892548249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null)], null),(function (){var iter__5523__auto__ = (function tunnl71$tools$core$edn__GT_hiccup_$_iter__16195(s__16196){
return (new cljs.core.LazySeq(null,(function (){
var s__16196__$1 = s__16196;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16196__$1);
if(temp__5804__auto__){
var s__16196__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16196__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__16196__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__16198 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__16197 = (0);
while(true){
if((i__16197 < size__5522__auto__)){
var vec__16205 = cljs.core._nth(c__5521__auto__,i__16197);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16205,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16205,(1),null);
cljs.core.chunk_append(b__16198,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.w3-container","li.w3-container",1343237672),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-row","div.w3-row",692760586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-left.w3-padding","div.w3-left.w3-padding",1667728296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10%",new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"right","right",-452581833)], null)], null),(tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1 ? tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1(k) : tunnl71.tools.core.edn__GT_hiccup.call(null,k))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-left.w3-padding","div.w3-left.w3-padding",1667728296),(tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1 ? tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1(v) : tunnl71.tools.core.edn__GT_hiccup.call(null,v))], null)], null)], null));

var G__17206 = (i__16197 + (1));
i__16197 = G__17206;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16198),tunnl71$tools$core$edn__GT_hiccup_$_iter__16195(cljs.core.chunk_rest(s__16196__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16198),null);
}
} else {
var vec__16211 = cljs.core.first(s__16196__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16211,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16211,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.w3-container","li.w3-container",1343237672),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-row","div.w3-row",692760586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-left.w3-padding","div.w3-left.w3-padding",1667728296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10%",new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"right","right",-452581833)], null)], null),(tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1 ? tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1(k) : tunnl71.tools.core.edn__GT_hiccup.call(null,k))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-left.w3-padding","div.w3-left.w3-padding",1667728296),(tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1 ? tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1(v) : tunnl71.tools.core.edn__GT_hiccup.call(null,v))], null)], null)], null),tunnl71$tools$core$edn__GT_hiccup_$_iter__16195(cljs.core.rest(s__16196__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(edn);
})())], null):((cljs.core.list_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edn], 0))], null):((cljs.core.sequential_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-row.w3-border","div.w3-container.w3-row.w3-border",1983218291),(function (){var iter__5523__auto__ = (function tunnl71$tools$core$edn__GT_hiccup_$_iter__16218(s__16219){
return (new cljs.core.LazySeq(null,(function (){
var s__16219__$1 = s__16219;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16219__$1);
if(temp__5804__auto__){
var s__16219__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16219__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__16219__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__16221 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__16220 = (0);
while(true){
if((i__16220 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__16220);
cljs.core.chunk_append(b__16221,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-cell-col","div.w3-container.w3-cell-col",-1871621335),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),(tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1 ? tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1(x) : tunnl71.tools.core.edn__GT_hiccup.call(null,x))], null));

var G__17212 = (i__16220 + (1));
i__16220 = G__17212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16221),tunnl71$tools$core$edn__GT_hiccup_$_iter__16218(cljs.core.chunk_rest(s__16219__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16221),null);
}
} else {
var x = cljs.core.first(s__16219__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-cell-col","div.w3-container.w3-cell-col",-1871621335),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),(tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1 ? tunnl71.tools.core.edn__GT_hiccup.cljs$core$IFn$_invoke$arity$1(x) : tunnl71.tools.core.edn__GT_hiccup.call(null,x))], null),tunnl71$tools$core$edn__GT_hiccup_$_iter__16218(cljs.core.rest(s__16219__$2)));
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
var G__16239 = arguments.length;
switch (G__16239) {
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
var this$ = new cljs.core.Var(function(){return tunnl71.tools.core.edn__GT_hiccup_true_to_form;},new cljs.core.Symbol("tunnl71.tools.core","edn->hiccup-true-to-form","tunnl71.tools.core/edn->hiccup-true-to-form",514704826,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tunnl71.tools.core","tunnl71.tools.core",-1536590718,null),new cljs.core.Symbol(null,"edn->hiccup-true-to-form","edn->hiccup-true-to-form",1990101701,null),"tunnl71/tools/core.cljs",31,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null),new cljs.core.Symbol(null,"style","style",1143888791,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null),new cljs.core.Symbol(null,"style","style",1143888791,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,245,245,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null),new cljs.core.Symbol(null,"style","style",1143888791,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null)], null)),null,(cljs.core.truth_(tunnl71.tools.core.edn__GT_hiccup_true_to_form)?tunnl71.tools.core.edn__GT_hiccup_true_to_form.cljs$lang$test:null)]));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container","div.w3-container",118818473),((cljs.core.map_QMARK_(edn))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),style,"{"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null)], null),(function (){var iter__5523__auto__ = (function tunnl71$tools$core$iter__16249(s__16250){
return (new cljs.core.LazySeq(null,(function (){
var s__16250__$1 = s__16250;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16250__$1);
if(temp__5804__auto__){
var s__16250__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16250__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__16250__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__16252 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__16251 = (0);
while(true){
if((i__16251 < size__5522__auto__)){
var vec__16253 = cljs.core._nth(c__5521__auto__,i__16251);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16253,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16253,(1),null);
cljs.core.chunk_append(b__16252,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-row","div.w3-container.w3-row",-1500022491),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell","div.w3-cell",-1516627914),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10%",new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"color","color",1011675173),"lightgreen"], null)], null),style], 0)),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(k) : this$.call(null,k))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell","div.w3-cell",-1516627914),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"lightgrey"], null)], null),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(v) : this$.call(null,v))], null)], null));

var G__17231 = (i__16251 + (1));
i__16251 = G__17231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16252),tunnl71$tools$core$iter__16249(cljs.core.chunk_rest(s__16250__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16252),null);
}
} else {
var vec__16259 = cljs.core.first(s__16250__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16259,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16259,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-row","div.w3-container.w3-row",-1500022491),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell","div.w3-cell",-1516627914),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10%",new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"color","color",1011675173),"lightgreen"], null)], null),style], 0)),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(k) : this$.call(null,k))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell","div.w3-cell",-1516627914),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"lightgrey"], null)], null),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(v) : this$.call(null,v))], null)], null),tunnl71$tools$core$iter__16249(cljs.core.rest(s__16250__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(edn);
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),style,"}"], null)], null):((cljs.core.list_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edn], 0))], null):((cljs.core.sequential_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-row.w3-border","div.w3-container.w3-row.w3-border",1983218291),(function (){var iter__5523__auto__ = (function tunnl71$tools$core$iter__16268(s__16269){
return (new cljs.core.LazySeq(null,(function (){
var s__16269__$1 = s__16269;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16269__$1);
if(temp__5804__auto__){
var s__16269__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16269__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__16269__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__16271 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__16270 = (0);
while(true){
if((i__16270 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__16270);
cljs.core.chunk_append(b__16271,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-cell-col","div.w3-container.w3-cell-col",-1871621335),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(x) : this$.call(null,x))], null));

var G__17244 = (i__16270 + (1));
i__16270 = G__17244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16271),tunnl71$tools$core$iter__16268(cljs.core.chunk_rest(s__16269__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16271),null);
}
} else {
var x = cljs.core.first(s__16269__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-cell-col","div.w3-container.w3-cell-col",-1871621335),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(x) : this$.call(null,x))], null),tunnl71$tools$core$iter__16268(cljs.core.rest(s__16269__$2)));
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
var this$ = new cljs.core.Var(function(){return tunnl71.tools.core.edn__GT_hiccup_true_to_form;},new cljs.core.Symbol("tunnl71.tools.core","edn->hiccup-true-to-form","tunnl71.tools.core/edn->hiccup-true-to-form",514704826,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tunnl71.tools.core","tunnl71.tools.core",-1536590718,null),new cljs.core.Symbol(null,"edn->hiccup-true-to-form","edn->hiccup-true-to-form",1990101701,null),"tunnl71/tools/core.cljs",31,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null),new cljs.core.Symbol(null,"style","style",1143888791,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null),new cljs.core.Symbol(null,"style","style",1143888791,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,245,245,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null),new cljs.core.Symbol(null,"style","style",1143888791,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edn","edn",-1336594884,null)], null)),null,(cljs.core.truth_(tunnl71.tools.core.edn__GT_hiccup_true_to_form)?tunnl71.tools.core.edn__GT_hiccup_true_to_form.cljs$lang$test:null)]));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container","div.w3-container",118818473),((cljs.core.map_QMARK_(edn))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),"{"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null)], null),(function (){var iter__5523__auto__ = (function tunnl71$tools$core$iter__16281(s__16282){
return (new cljs.core.LazySeq(null,(function (){
var s__16282__$1 = s__16282;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16282__$1);
if(temp__5804__auto__){
var s__16282__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16282__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__16282__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__16284 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__16283 = (0);
while(true){
if((i__16283 < size__5522__auto__)){
var vec__16296 = cljs.core._nth(c__5521__auto__,i__16283);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16296,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16296,(1),null);
cljs.core.chunk_append(b__16284,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-row","div.w3-container.w3-row",-1500022491),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell","div.w3-cell",-1516627914),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10%",new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"color","color",1011675173),"lightgreen"], null)], null),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(k) : this$.call(null,k))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell","div.w3-cell",-1516627914),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"lightgrey"], null)], null),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(v) : this$.call(null,v))], null)], null));

var G__17247 = (i__16283 + (1));
i__16283 = G__17247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16284),tunnl71$tools$core$iter__16281(cljs.core.chunk_rest(s__16282__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16284),null);
}
} else {
var vec__16302 = cljs.core.first(s__16282__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16302,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16302,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-row","div.w3-container.w3-row",-1500022491),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell","div.w3-cell",-1516627914),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10%",new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"color","color",1011675173),"lightgreen"], null)], null),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(k) : this$.call(null,k))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell","div.w3-cell",-1516627914),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"lightgrey"], null)], null),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(v) : this$.call(null,v))], null)], null),tunnl71$tools$core$iter__16281(cljs.core.rest(s__16282__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(edn);
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),"}"], null)], null):((cljs.core.list_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edn], 0))], null):((cljs.core.sequential_QMARK_(edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-row.w3-border","div.w3-container.w3-row.w3-border",1983218291),(function (){var iter__5523__auto__ = (function tunnl71$tools$core$iter__16307(s__16308){
return (new cljs.core.LazySeq(null,(function (){
var s__16308__$1 = s__16308;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16308__$1);
if(temp__5804__auto__){
var s__16308__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16308__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__16308__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__16310 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__16309 = (0);
while(true){
if((i__16309 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__16309);
cljs.core.chunk_append(b__16310,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-cell-col","div.w3-container.w3-cell-col",-1871621335),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(x) : this$.call(null,x))], null));

var G__17261 = (i__16309 + (1));
i__16309 = G__17261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16310),tunnl71$tools$core$iter__16307(cljs.core.chunk_rest(s__16308__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16310),null);
}
} else {
var x = cljs.core.first(s__16308__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container.w3-cell-col","div.w3-container.w3-cell-col",-1871621335),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0()], null),(this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(x) : this$.call(null,x))], null),tunnl71$tools$core$iter__16307(cljs.core.rest(s__16308__$2)));
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

(tunnl71.tools.core.Ref.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k16329,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__16394 = k16329;
var G__16394__$1 = (((G__16394 instanceof cljs.core.Keyword))?G__16394.fqn:null);
switch (G__16394__$1) {
case "address":
return self__.address;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16329,else__5346__auto__);

}
}));

(tunnl71.tools.core.Ref.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__16407){
var vec__16409 = p__16407;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16409,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16409,(1),null);
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

(tunnl71.tools.core.Ref.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16328){
var self__ = this;
var G__16328__$1 = this;
return (new cljs.core.RecordIter((0),G__16328__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(tunnl71.tools.core.Ref.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16330,other16331){
var self__ = this;
var this16330__$1 = this;
return (((!((other16331 == null)))) && ((((this16330__$1.constructor === other16331.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16330__$1.address,other16331.address)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16330__$1.__extmap,other16331.__extmap)))))));
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

(tunnl71.tools.core.Ref.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k16329){
var self__ = this;
var this__5350__auto____$1 = this;
var G__16457 = k16329;
var G__16457__$1 = (((G__16457 instanceof cljs.core.Keyword))?G__16457.fqn:null);
switch (G__16457__$1) {
case "address":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16329);

}
}));

(tunnl71.tools.core.Ref.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__16328){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__16466 = cljs.core.keyword_identical_QMARK_;
var expr__16467 = k__5352__auto__;
if(cljs.core.truth_((pred__16466.cljs$core$IFn$_invoke$arity$2 ? pred__16466.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426),expr__16467) : pred__16466.call(null,new cljs.core.Keyword(null,"address","address",559499426),expr__16467)))){
return (new tunnl71.tools.core.Ref(G__16328,self__.__meta,self__.__extmap,null));
} else {
return (new tunnl71.tools.core.Ref(self__.address,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__16328),null));
}
}));

(tunnl71.tools.core.Ref.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"address","address",559499426),self__.address,null))], null),self__.__extmap));
}));

(tunnl71.tools.core.Ref.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__16328){
var self__ = this;
var this__5342__auto____$1 = this;
return (new tunnl71.tools.core.Ref(self__.address,G__16328,self__.__extmap,self__.__hash));
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
tunnl71.tools.core.map__GT_Ref = (function tunnl71$tools$core$map__GT_Ref(G__16366){
var extmap__5385__auto__ = (function (){var G__16474 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16366,new cljs.core.Keyword(null,"address","address",559499426));
if(cljs.core.record_QMARK_(G__16366)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16474);
} else {
return G__16474;
}
})();
return (new tunnl71.tools.core.Ref(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(G__16366),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__16480 = arguments.length;
switch (G__16480) {
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),root_k,new cljs.core.Keyword(null,"outs","outs",729500157),cljs.core.vec((function (){var iter__5523__auto__ = (function tunnl71$tools$core$iter__16488(s__16489){
return (new cljs.core.LazySeq(null,(function (){
var s__16489__$1 = s__16489;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16489__$1);
if(temp__5804__auto__){
var s__16489__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16489__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__16489__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__16491 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__16490 = (0);
while(true){
if((i__16490 < size__5522__auto__)){
var vec__16493 = cljs.core._nth(c__5521__auto__,i__16490);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16493,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16493,(1),null);
cljs.core.chunk_append(b__16491,tunnl71.tools.core.edn__GT_node.cljs$core$IFn$_invoke$arity$2(k,v));

var G__17323 = (i__16490 + (1));
i__16490 = G__17323;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16491),tunnl71$tools$core$iter__16488(cljs.core.chunk_rest(s__16489__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16491),null);
}
} else {
var vec__16496 = cljs.core.first(s__16489__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16496,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16496,(1),null);
return cljs.core.cons(tunnl71.tools.core.edn__GT_node.cljs$core$IFn$_invoke$arity$2(k,v),tunnl71$tools$core$iter__16488(cljs.core.rest(s__16489__$2)));
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
var G__16500 = arguments.length;
switch (G__16500) {
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),root_k,new cljs.core.Keyword(null,"outs","outs",729500157),cljs.core.vec((function (){var iter__5523__auto__ = (function tunnl71$tools$core$iter__16503(s__16504){
return (new cljs.core.LazySeq(null,(function (){
var s__16504__$1 = s__16504;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16504__$1);
if(temp__5804__auto__){
var s__16504__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16504__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__16504__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__16506 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__16505 = (0);
while(true){
if((i__16505 < size__5522__auto__)){
var vec__16526 = cljs.core._nth(c__5521__auto__,i__16505);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16526,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16526,(1),null);
cljs.core.chunk_append(b__16506,tunnl71.tools.core.edge__GT_node.cljs$core$IFn$_invoke$arity$2(k,v));

var G__17332 = (i__16505 + (1));
i__16505 = G__17332;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16506),tunnl71$tools$core$iter__16503(cljs.core.chunk_rest(s__16504__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16506),null);
}
} else {
var vec__16716 = cljs.core.first(s__16504__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16716,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16716,(1),null);
return cljs.core.cons(tunnl71.tools.core.edge__GT_node.cljs$core$IFn$_invoke$arity$2(k,v),tunnl71$tools$core$iter__16503(cljs.core.rest(s__16504__$2)));
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
var G__16720 = arguments.length;
switch (G__16720) {
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
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16721){
var vec__16722 = p__16721;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16722,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16722,(1),null);
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
var G__16729 = arguments.length;
switch (G__16729) {
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
var G__17352__delegate = function (xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.zipmap,ks,xs);
};
var G__17352 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__17353__i = 0, G__17353__a = new Array(arguments.length -  0);
while (G__17353__i < G__17353__a.length) {G__17353__a[G__17353__i] = arguments[G__17353__i + 0]; ++G__17353__i;}
  xs = new cljs.core.IndexedSeq(G__17353__a,0,null);
} 
return G__17352__delegate.call(this,xs);};
G__17352.cljs$lang$maxFixedArity = 0;
G__17352.cljs$lang$applyTo = (function (arglist__17354){
var xs = cljs.core.seq(arglist__17354);
return G__17352__delegate(xs);
});
G__17352.cljs$core$IFn$_invoke$arity$variadic = G__17352__delegate;
return G__17352;
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
var vec__16740 = cljs.core.split_at(length_training,xs);
var training_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16740,(0),null);
var test_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16740,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [training_set,test_set], null);
});
/**
 * deprecated
 */
tunnl71.tools.core.countd = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.distinct);
tunnl71.tools.core.random_take = (function tunnl71$tools$core$random_take(n,coll){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__16750_SHARP_,p2__16751_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__16750_SHARP_,p2__16751_SHARP_);
}),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,coll),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.rand_int(cljs.core.count(coll));
})));
});
tunnl71.tools.core.nil_chain = (function tunnl71$tools$core$nil_chain(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17365 = arguments.length;
var i__5770__auto___17366 = (0);
while(true){
if((i__5770__auto___17366 < len__5769__auto___17365)){
args__5775__auto__.push((arguments[i__5770__auto___17366]));

var G__17367 = (i__5770__auto___17366 + (1));
i__5770__auto___17366 = G__17367;
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
return cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16752_SHARP_){
return (p1__16752_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16752_SHARP_.cljs$core$IFn$_invoke$arity$1(x) : p1__16752_SHARP_.call(null,x));
}),fs)));
});
}));

(tunnl71.tools.core.nil_chain.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tunnl71.tools.core.nil_chain.cljs$lang$applyTo = (function (seq16753){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16753));
}));

tunnl71.tools.core.to_keyword = (function tunnl71$tools$core$to_keyword(s){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(s," ","-"));
});
tunnl71.tools.core.add = (function tunnl71$tools$core$add(coll,x){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(coll,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
tunnl71.tools.core.csv__GT_edn = (function tunnl71$tools$core$csv__GT_edn(string){
var s_s_str = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16760_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__16760_SHARP_,/,/);
}),clojure.string.split_lines(string));
var ks = cljs.core.first(s_s_str);
var s_vs = cljs.core.rest(s_s_str);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16761_SHARP_){
return cljs.core.zipmap(ks,p1__16761_SHARP_);
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__16769_SHARP_,p2__16770_SHARP_){
return cljs.core.zipmap(p1__16769_SHARP_,p2__16770_SHARP_);
}),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(ks),tunnl71.tools.core.transpose(vs));
});
tunnl71.tools.core.tree__GT_routes = (function tunnl71$tools$core$tree__GT_routes(var_args){
var G__16782 = arguments.length;
switch (G__16782) {
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
var result = (function (){var iter__5523__auto__ = (function tunnl71$tools$core$iter__16801(s__16802){
return (new cljs.core.LazySeq(null,(function (){
var s__16802__$1 = s__16802;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16802__$1);
if(temp__5804__auto__){
var s__16802__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16802__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__16802__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__16804 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__16803 = (0);
while(true){
if((i__16803 < size__5522__auto__)){
var vec__16807 = cljs.core._nth(c__5521__auto__,i__16803);
var kx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16807,(0),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16807,(1),null);
cljs.core.chunk_append(b__16804,tunnl71.tools.core.tree__GT_routes.cljs$core$IFn$_invoke$arity$3(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)),kx,vx));

var G__17378 = (i__16803 + (1));
i__16803 = G__17378;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16804),tunnl71$tools$core$iter__16801(cljs.core.chunk_rest(s__16802__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16804),null);
}
} else {
var vec__16811 = cljs.core.first(s__16802__$2);
var kx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16811,(0),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16811,(1),null);
return cljs.core.cons(tunnl71.tools.core.tree__GT_routes.cljs$core$IFn$_invoke$arity$3(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)),kx,vx),tunnl71$tools$core$iter__16801(cljs.core.rest(s__16802__$2)));
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
var len__5769__auto___17379 = arguments.length;
var i__5770__auto___17380 = (0);
while(true){
if((i__5770__auto___17380 < len__5769__auto___17379)){
args__5775__auto__.push((arguments[i__5770__auto___17380]));

var G__17383 = (i__5770__auto___17380 + (1));
i__5770__auto___17380 = G__17383;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return tunnl71.tools.core.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(tunnl71.tools.core.path.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return tunnl71.tools.core.___GT_.cljs$core$IFn$_invoke$arity$variadic(xs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__16814_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,p1__16814_SHARP_);
}),(function (xs__$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16815_SHARP_){
if(cljs.core.truth_(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__16815_SHARP_))){
return cljs.core.name(p1__16815_SHARP_);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16815_SHARP_);
}
}),xs__$1);
}),(function (p1__16816_SHARP_){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("/",p1__16816_SHARP_);
}),(function (p1__16817_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__16817_SHARP_);
}),(function (p1__16818_SHARP_){
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16818_SHARP_)].join('');
}),(function (p1__16819_SHARP_){
return clojure.string.replace(p1__16819_SHARP_,/\/+/,"/");
})], 0));
}));

(tunnl71.tools.core.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tunnl71.tools.core.path.cljs$lang$applyTo = (function (seq16820){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16820));
}));

tunnl71.tools.core.mapply = (function tunnl71$tools$core$mapply(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17397 = arguments.length;
var i__5770__auto___17399 = (0);
while(true){
if((i__5770__auto___17399 < len__5769__auto___17397)){
args__5775__auto__.push((arguments[i__5770__auto___17399]));

var G__17400 = (i__5770__auto___17399 + (1));
i__5770__auto___17399 = G__17400;
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
(tunnl71.tools.core.mapply.cljs$lang$applyTo = (function (seq16821){
var G__16822 = cljs.core.first(seq16821);
var seq16821__$1 = cljs.core.next(seq16821);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16822,seq16821__$1);
}));

tunnl71.tools.core.lconj = (function tunnl71$tools$core$lconj(coll,x){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),coll);
});
tunnl71.tools.core.concatv = (function tunnl71$tools$core$concatv(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17405 = arguments.length;
var i__5770__auto___17407 = (0);
while(true){
if((i__5770__auto___17407 < len__5769__auto___17405)){
args__5775__auto__.push((arguments[i__5770__auto___17407]));

var G__17410 = (i__5770__auto___17407 + (1));
i__5770__auto___17407 = G__17410;
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
(tunnl71.tools.core.concatv.cljs$lang$applyTo = (function (seq16830){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16830));
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
var len__5769__auto___17422 = arguments.length;
var i__5770__auto___17423 = (0);
while(true){
if((i__5770__auto___17423 < len__5769__auto___17422)){
args__5775__auto__.push((arguments[i__5770__auto___17423]));

var G__17429 = (i__5770__auto___17423 + (1));
i__5770__auto___17423 = G__17429;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return tunnl71.tools.core.record.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(tunnl71.tools.core.record.cljs$core$IFn$_invoke$arity$variadic = (function (namesp,k_v_s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function tunnl71$tools$core$iter__16850(s__16851){
return (new cljs.core.LazySeq(null,(function (){
var s__16851__$1 = s__16851;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16851__$1);
if(temp__5804__auto__){
var s__16851__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16851__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__16851__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__16853 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__16852 = (0);
while(true){
if((i__16852 < size__5522__auto__)){
var vec__16857 = cljs.core._nth(c__5521__auto__,i__16852);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16857,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16857,(1),null);
cljs.core.chunk_append(b__16853,tunnl71.tools.core.map_entry(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(namesp,k),v));

var G__17434 = (i__16852 + (1));
i__16852 = G__17434;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16853),tunnl71$tools$core$iter__16850(cljs.core.chunk_rest(s__16851__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16853),null);
}
} else {
var vec__16860 = cljs.core.first(s__16851__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16860,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16860,(1),null);
return cljs.core.cons(tunnl71.tools.core.map_entry(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(namesp,k),v),tunnl71$tools$core$iter__16850(cljs.core.rest(s__16851__$2)));
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
(tunnl71.tools.core.record.cljs$lang$applyTo = (function (seq16844){
var G__16845 = cljs.core.first(seq16844);
var seq16844__$1 = cljs.core.next(seq16844);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16845,seq16844__$1);
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
var c__15208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15209__auto__ = (function (){var switch__15138__auto__ = (function (state_16891){
var state_val_16892 = (state_16891[(1)]);
if((state_val_16892 === (1))){
var state_16891__$1 = state_16891;
var statearr_16903_17435 = state_16891__$1;
(statearr_16903_17435[(2)] = null);

(statearr_16903_17435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (2))){
var state_16891__$1 = state_16891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16891__$1,(4),out);
} else {
if((state_val_16892 === (3))){
var inst_16889 = (state_16891[(2)]);
var state_16891__$1 = state_16891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16891__$1,inst_16889);
} else {
if((state_val_16892 === (4))){
var inst_16882 = (state_16891[(2)]);
var state_16891__$1 = state_16891;
if(cljs.core.truth_(inst_16882)){
var statearr_16907_17438 = state_16891__$1;
(statearr_16907_17438[(1)] = (5));

} else {
var statearr_16908_17439 = state_16891__$1;
(statearr_16908_17439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (5))){
var state_16891__$1 = state_16891;
var statearr_16909_17441 = state_16891__$1;
(statearr_16909_17441[(2)] = null);

(statearr_16909_17441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (6))){
var state_16891__$1 = state_16891;
var statearr_16916_17444 = state_16891__$1;
(statearr_16916_17444[(2)] = null);

(statearr_16916_17444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (7))){
var inst_16887 = (state_16891[(2)]);
var state_16891__$1 = state_16891;
var statearr_16917_17449 = state_16891__$1;
(statearr_16917_17449[(2)] = inst_16887);

(statearr_16917_17449[(1)] = (3));


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
var tunnl71$tools$core$consume_BANG__$_state_machine__15139__auto__ = null;
var tunnl71$tools$core$consume_BANG__$_state_machine__15139__auto____0 = (function (){
var statearr_16922 = [null,null,null,null,null,null,null];
(statearr_16922[(0)] = tunnl71$tools$core$consume_BANG__$_state_machine__15139__auto__);

(statearr_16922[(1)] = (1));

return statearr_16922;
});
var tunnl71$tools$core$consume_BANG__$_state_machine__15139__auto____1 = (function (state_16891){
while(true){
var ret_value__15140__auto__ = (function (){try{while(true){
var result__15141__auto__ = switch__15138__auto__(state_16891);
if(cljs.core.keyword_identical_QMARK_(result__15141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15141__auto__;
}
break;
}
}catch (e16929){var ex__15142__auto__ = e16929;
var statearr_16930_17467 = state_16891;
(statearr_16930_17467[(2)] = ex__15142__auto__);


if(cljs.core.seq((state_16891[(4)]))){
var statearr_16931_17468 = state_16891;
(statearr_16931_17468[(1)] = cljs.core.first((state_16891[(4)])));

} else {
throw ex__15142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17469 = state_16891;
state_16891 = G__17469;
continue;
} else {
return ret_value__15140__auto__;
}
break;
}
});
tunnl71$tools$core$consume_BANG__$_state_machine__15139__auto__ = function(state_16891){
switch(arguments.length){
case 0:
return tunnl71$tools$core$consume_BANG__$_state_machine__15139__auto____0.call(this);
case 1:
return tunnl71$tools$core$consume_BANG__$_state_machine__15139__auto____1.call(this,state_16891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tunnl71$tools$core$consume_BANG__$_state_machine__15139__auto__.cljs$core$IFn$_invoke$arity$0 = tunnl71$tools$core$consume_BANG__$_state_machine__15139__auto____0;
tunnl71$tools$core$consume_BANG__$_state_machine__15139__auto__.cljs$core$IFn$_invoke$arity$1 = tunnl71$tools$core$consume_BANG__$_state_machine__15139__auto____1;
return tunnl71$tools$core$consume_BANG__$_state_machine__15139__auto__;
})()
})();
var state__15210__auto__ = (function (){var statearr_16940 = f__15209__auto__();
(statearr_16940[(6)] = c__15208__auto__);

return statearr_16940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15210__auto__);
}));

return c__15208__auto__;
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
var G__16976 = arguments.length;
switch (G__16976) {
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
return goog.events.listen(document,"keydown",(function (p1__17001_SHARP_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__17001_SHARP_.keyCode], 0))], 0));
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
var G__17025 = arguments.length;
switch (G__17025) {
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
tunnl71.tools.core.remove_white_space = (function tunnl71$tools$core$remove_white_space(string_){
return clojure.string.replace(string_,/[\ \t\n]/,"");
});
tunnl71.tools.core._PLUS__PLUS_ = cljs.core.inc;
tunnl71.tools.core.__ = cljs.core.dec;

//# sourceMappingURL=tunnl71.tools.core.js.map
