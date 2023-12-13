goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26989){
var map__26990 = p__26989;
var map__26990__$1 = cljs.core.__destructure_map(map__26990);
var m = map__26990__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26990__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26990__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26995_27305 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26996_27306 = null;
var count__26997_27307 = (0);
var i__26998_27308 = (0);
while(true){
if((i__26998_27308 < count__26997_27307)){
var f_27309 = chunk__26996_27306.cljs$core$IIndexed$_nth$arity$2(null,i__26998_27308);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27309], 0));


var G__27310 = seq__26995_27305;
var G__27311 = chunk__26996_27306;
var G__27312 = count__26997_27307;
var G__27313 = (i__26998_27308 + (1));
seq__26995_27305 = G__27310;
chunk__26996_27306 = G__27311;
count__26997_27307 = G__27312;
i__26998_27308 = G__27313;
continue;
} else {
var temp__5804__auto___27314 = cljs.core.seq(seq__26995_27305);
if(temp__5804__auto___27314){
var seq__26995_27320__$1 = temp__5804__auto___27314;
if(cljs.core.chunked_seq_QMARK_(seq__26995_27320__$1)){
var c__5568__auto___27321 = cljs.core.chunk_first(seq__26995_27320__$1);
var G__27322 = cljs.core.chunk_rest(seq__26995_27320__$1);
var G__27323 = c__5568__auto___27321;
var G__27324 = cljs.core.count(c__5568__auto___27321);
var G__27325 = (0);
seq__26995_27305 = G__27322;
chunk__26996_27306 = G__27323;
count__26997_27307 = G__27324;
i__26998_27308 = G__27325;
continue;
} else {
var f_27326 = cljs.core.first(seq__26995_27320__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27326], 0));


var G__27327 = cljs.core.next(seq__26995_27320__$1);
var G__27328 = null;
var G__27329 = (0);
var G__27330 = (0);
seq__26995_27305 = G__27327;
chunk__26996_27306 = G__27328;
count__26997_27307 = G__27329;
i__26998_27308 = G__27330;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27331 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27331], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_27331)))?cljs.core.second(arglists_27331):arglists_27331)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27017_27333 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27018_27334 = null;
var count__27019_27335 = (0);
var i__27020_27336 = (0);
while(true){
if((i__27020_27336 < count__27019_27335)){
var vec__27033_27337 = chunk__27018_27334.cljs$core$IIndexed$_nth$arity$2(null,i__27020_27336);
var name_27338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27033_27337,(0),null);
var map__27036_27339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27033_27337,(1),null);
var map__27036_27340__$1 = cljs.core.__destructure_map(map__27036_27339);
var doc_27341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27036_27340__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27036_27340__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27338], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27342], 0));

if(cljs.core.truth_(doc_27341)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27341], 0));
} else {
}


var G__27348 = seq__27017_27333;
var G__27349 = chunk__27018_27334;
var G__27350 = count__27019_27335;
var G__27351 = (i__27020_27336 + (1));
seq__27017_27333 = G__27348;
chunk__27018_27334 = G__27349;
count__27019_27335 = G__27350;
i__27020_27336 = G__27351;
continue;
} else {
var temp__5804__auto___27352 = cljs.core.seq(seq__27017_27333);
if(temp__5804__auto___27352){
var seq__27017_27353__$1 = temp__5804__auto___27352;
if(cljs.core.chunked_seq_QMARK_(seq__27017_27353__$1)){
var c__5568__auto___27354 = cljs.core.chunk_first(seq__27017_27353__$1);
var G__27355 = cljs.core.chunk_rest(seq__27017_27353__$1);
var G__27356 = c__5568__auto___27354;
var G__27357 = cljs.core.count(c__5568__auto___27354);
var G__27358 = (0);
seq__27017_27333 = G__27355;
chunk__27018_27334 = G__27356;
count__27019_27335 = G__27357;
i__27020_27336 = G__27358;
continue;
} else {
var vec__27044_27359 = cljs.core.first(seq__27017_27353__$1);
var name_27360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27044_27359,(0),null);
var map__27047_27361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27044_27359,(1),null);
var map__27047_27362__$1 = cljs.core.__destructure_map(map__27047_27361);
var doc_27363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27047_27362__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27047_27362__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27360], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27364], 0));

if(cljs.core.truth_(doc_27363)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27363], 0));
} else {
}


var G__27365 = cljs.core.next(seq__27017_27353__$1);
var G__27366 = null;
var G__27367 = (0);
var G__27368 = (0);
seq__27017_27333 = G__27365;
chunk__27018_27334 = G__27366;
count__27019_27335 = G__27367;
i__27020_27336 = G__27368;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__27058 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27059 = null;
var count__27060 = (0);
var i__27061 = (0);
while(true){
if((i__27061 < count__27060)){
var role = chunk__27059.cljs$core$IIndexed$_nth$arity$2(null,i__27061);
var temp__5804__auto___27369__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___27369__$1)){
var spec_27370 = temp__5804__auto___27369__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27370)], 0));
} else {
}


var G__27371 = seq__27058;
var G__27372 = chunk__27059;
var G__27373 = count__27060;
var G__27374 = (i__27061 + (1));
seq__27058 = G__27371;
chunk__27059 = G__27372;
count__27060 = G__27373;
i__27061 = G__27374;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__27058);
if(temp__5804__auto____$1){
var seq__27058__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__27058__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27058__$1);
var G__27388 = cljs.core.chunk_rest(seq__27058__$1);
var G__27389 = c__5568__auto__;
var G__27390 = cljs.core.count(c__5568__auto__);
var G__27391 = (0);
seq__27058 = G__27388;
chunk__27059 = G__27389;
count__27060 = G__27390;
i__27061 = G__27391;
continue;
} else {
var role = cljs.core.first(seq__27058__$1);
var temp__5804__auto___27392__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___27392__$2)){
var spec_27394 = temp__5804__auto___27392__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27394)], 0));
} else {
}


var G__27395 = cljs.core.next(seq__27058__$1);
var G__27396 = null;
var G__27397 = (0);
var G__27398 = (0);
seq__27058 = G__27395;
chunk__27059 = G__27396;
count__27060 = G__27397;
i__27061 = G__27398;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__27403 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__27404 = cljs.core.ex_cause(t);
via = G__27403;
t = G__27404;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__27110 = datafied_throwable;
var map__27110__$1 = cljs.core.__destructure_map(map__27110);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27110__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27110__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27110__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27111 = cljs.core.last(via);
var map__27111__$1 = cljs.core.__destructure_map(map__27111);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27111__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27111__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27111__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__27112 = data;
var map__27112__$1 = cljs.core.__destructure_map(map__27112);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27112__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27112__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27112__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__27113 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__27113__$1 = cljs.core.__destructure_map(map__27113);
var top_data = map__27113__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27113__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__27123 = phase;
var G__27123__$1 = (((G__27123 instanceof cljs.core.Keyword))?G__27123.fqn:null);
switch (G__27123__$1) {
case "read-source":
var map__27137 = data;
var map__27137__$1 = cljs.core.__destructure_map(map__27137);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27137__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27137__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__27139 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__27139__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27139,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27139);
var G__27139__$2 = (cljs.core.truth_((function (){var fexpr__27148 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27148.cljs$core$IFn$_invoke$arity$1 ? fexpr__27148.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27148.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27139__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27139__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27139__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27139__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27149 = top_data;
var G__27149__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27149,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27149);
var G__27149__$2 = (cljs.core.truth_((function (){var fexpr__27154 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27154.cljs$core$IFn$_invoke$arity$1 ? fexpr__27154.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27154.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27149__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27149__$1);
var G__27149__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27149__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27149__$2);
var G__27149__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27149__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27149__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27149__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27149__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27166 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27166,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27166,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27166,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27166,(3),null);
var G__27169 = top_data;
var G__27169__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27169,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27169);
var G__27169__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27169__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27169__$1);
var G__27169__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27169__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27169__$2);
var G__27169__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27169__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27169__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27169__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27169__$4;
}

break;
case "execution":
var vec__27202 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27202,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27202,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27202,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27202,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__27107_SHARP_){
var or__5045__auto__ = (p1__27107_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__27212 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27212.cljs$core$IFn$_invoke$arity$1 ? fexpr__27212.cljs$core$IFn$_invoke$arity$1(p1__27107_SHARP_) : fexpr__27212.call(null,p1__27107_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__27229 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27229__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27229,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27229);
var G__27229__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27229__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27229__$1);
var G__27229__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27229__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27229__$2);
var G__27229__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27229__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27229__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27229__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27229__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27123__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27239){
var map__27240 = p__27239;
var map__27240__$1 = cljs.core.__destructure_map(map__27240);
var triage_data = map__27240__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27240__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27240__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27240__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27240__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27240__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27240__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27240__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27240__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__27244 = phase;
var G__27244__$1 = (((G__27244 instanceof cljs.core.Keyword))?G__27244.fqn:null);
switch (G__27244__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__27247 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__27248 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27249 = loc;
var G__27250 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27251_27440 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27252_27441 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27253_27442 = true;
var _STAR_print_fn_STAR__temp_val__27254_27443 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27253_27442);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27254_27443);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27235_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27235_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27252_27441);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27251_27440);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27247,G__27248,G__27249,G__27250) : format.call(null,G__27247,G__27248,G__27249,G__27250));

break;
case "macroexpansion":
var G__27259 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__27260 = cause_type;
var G__27261 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27262 = loc;
var G__27263 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27259,G__27260,G__27261,G__27262,G__27263) : format.call(null,G__27259,G__27260,G__27261,G__27262,G__27263));

break;
case "compile-syntax-check":
var G__27264 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__27265 = cause_type;
var G__27266 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27267 = loc;
var G__27268 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27264,G__27265,G__27266,G__27267,G__27268) : format.call(null,G__27264,G__27265,G__27266,G__27267,G__27268));

break;
case "compilation":
var G__27269 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__27270 = cause_type;
var G__27271 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27272 = loc;
var G__27273 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27269,G__27270,G__27271,G__27272,G__27273) : format.call(null,G__27269,G__27270,G__27271,G__27272,G__27273));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__27275 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__27276 = symbol;
var G__27277 = loc;
var G__27278 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27279_27450 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27280_27451 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27281_27452 = true;
var _STAR_print_fn_STAR__temp_val__27282_27453 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27281_27452);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27282_27453);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27237_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27237_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27280_27451);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27279_27450);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27275,G__27276,G__27277,G__27278) : format.call(null,G__27275,G__27276,G__27277,G__27278));
} else {
var G__27286 = "Execution error%s at %s(%s).\n%s\n";
var G__27287 = cause_type;
var G__27288 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27289 = loc;
var G__27290 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27286,G__27287,G__27288,G__27289,G__27290) : format.call(null,G__27286,G__27287,G__27288,G__27289,G__27290));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27244__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
