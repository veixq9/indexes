goog.provide('tunnl71.tools.obj');
tunnl71.tools.obj.method_names = (function tunnl71$tools$obj$method_names(obj){
return Object.getOwnPropertyNames(Object.getPrototypeOf(obj));
});
tunnl71.tools.obj.prop_names = (function tunnl71$tools$obj$prop_names(obj){
return Object.getOwnPropertyNames(obj);
});
tunnl71.tools.obj.props = (function tunnl71$tools$obj$props(obj){
var iter__5523__auto__ = (function tunnl71$tools$obj$props_$_iter__17460(s__17461){
return (new cljs.core.LazySeq(null,(function (){
var s__17461__$1 = s__17461;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17461__$1);
if(temp__5804__auto__){
var s__17461__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17461__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17461__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17463 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17462 = (0);
while(true){
if((i__17462 < size__5522__auto__)){
var p = cljs.core._nth(c__5521__auto__,i__17462);
cljs.core.chunk_append(b__17463,(function (){var result = (obj[p]);
return result;
})());

var G__17476 = (i__17462 + (1));
i__17462 = G__17476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17463),tunnl71$tools$obj$props_$_iter__17460(cljs.core.chunk_rest(s__17461__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17463),null);
}
} else {
var p = cljs.core.first(s__17461__$2);
return cljs.core.cons((function (){var result = (obj[p]);
return result;
})(),tunnl71$tools$obj$props_$_iter__17460(cljs.core.rest(s__17461__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(tunnl71.tools.obj.prop_names(obj));
});
tunnl71.tools.obj.__GT_map = (function tunnl71$tools$obj$__GT_map(obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__5523__auto__ = (function tunnl71$tools$obj$__GT_map_$_iter__17464(s__17465){
return (new cljs.core.LazySeq(null,(function (){
var s__17465__$1 = s__17465;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17465__$1);
if(temp__5804__auto__){
var s__17465__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17465__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17465__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17467 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17466 = (0);
while(true){
if((i__17466 < size__5522__auto__)){
var p = cljs.core._nth(c__5521__auto__,i__17466);
cljs.core.chunk_append(b__17467,(function (){var result = (obj[p]);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),result]);
})());

var G__17477 = (i__17466 + (1));
i__17466 = G__17477;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17467),tunnl71$tools$obj$__GT_map_$_iter__17464(cljs.core.chunk_rest(s__17465__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17467),null);
}
} else {
var p = cljs.core.first(s__17465__$2);
return cljs.core.cons((function (){var result = (obj[p]);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),result]);
})(),tunnl71$tools$obj$__GT_map_$_iter__17464(cljs.core.rest(s__17465__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(tunnl71.tools.obj.prop_names(obj),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], null)], 0)));
})());
});
tunnl71.tools.obj.__GT_map_recursive = (function tunnl71$tools$obj$__GT_map_recursive(var_args){
var G__17469 = arguments.length;
switch (G__17469) {
case 1:
return tunnl71.tools.obj.__GT_map_recursive.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tunnl71.tools.obj.__GT_map_recursive.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tunnl71.tools.obj.__GT_map_recursive.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return tunnl71.tools.obj.__GT_map_recursive.cljs$core$IFn$_invoke$arity$2(obj,(0));
}));

(tunnl71.tools.obj.__GT_map_recursive.cljs$core$IFn$_invoke$arity$2 = (function (obj,max_depth){
if(((typeof obj === 'string') || (((cljs.core.coll_QMARK_(obj)) || (cljs.core.array_QMARK_(obj)))))){
return obj;
} else {
var ps = tunnl71.tools.obj.prop_names(obj);
var ps_clj = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(ps,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),false], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__5523__auto__ = (function tunnl71$tools$obj$iter__17470(s__17471){
return (new cljs.core.LazySeq(null,(function (){
var s__17471__$1 = s__17471;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17471__$1);
if(temp__5804__auto__){
var s__17471__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17471__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17471__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17473 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17472 = (0);
while(true){
if((i__17472 < size__5522__auto__)){
var p = cljs.core._nth(c__5521__auto__,i__17472);
cljs.core.chunk_append(b__17473,(function (){var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p], 0));
var result_ = (obj[p]);
var result = (((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_depth,(0)))))?(function (){try{return tunnl71.tools.obj.__GT_map_recursive.cljs$core$IFn$_invoke$arity$2(result_,(max_depth - (1)));
}catch (e17474){if((e17474 instanceof Object)){
var e = e17474;
console.log(e);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["yo"], 0));

return result_;
} else {
throw e17474;

}
}})():result_);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),result]);
})());

var G__17479 = (i__17472 + (1));
i__17472 = G__17479;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17473),tunnl71$tools$obj$iter__17470(cljs.core.chunk_rest(s__17471__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17473),null);
}
} else {
var p = cljs.core.first(s__17471__$2);
return cljs.core.cons((function (){var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p], 0));
var result_ = (obj[p]);
var result = (((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_depth,(0)))))?(function (){try{return tunnl71.tools.obj.__GT_map_recursive.cljs$core$IFn$_invoke$arity$2(result_,(max_depth - (1)));
}catch (e17475){if((e17475 instanceof Object)){
var e = e17475;
console.log(e);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["yo"], 0));

return result_;
} else {
throw e17475;

}
}})():result_);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p),result]);
})(),tunnl71$tools$obj$iter__17470(cljs.core.rest(s__17471__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(ps_clj);
})());

}
}));

(tunnl71.tools.obj.__GT_map_recursive.cljs$lang$maxFixedArity = 2);

tunnl71.tools.obj.o = Object;
(tunnl71.tools.obj.o.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(tunnl71.tools.obj.o.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (obj){
var obj__$1 = this;
return tunnl71.tools.obj.__GT_map_recursive.cljs$core$IFn$_invoke$arity$1(obj__$1);
}));

//# sourceMappingURL=tunnl71.tools.obj.js.map
