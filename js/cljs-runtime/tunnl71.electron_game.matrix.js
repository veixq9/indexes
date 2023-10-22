goog.provide('tunnl71.electron_game.matrix');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
tunnl71.electron_game.matrix.step = (function tunnl71$electron_game$matrix$step(var_args){
var G__48146 = arguments.length;
switch (G__48146) {
case 1:
return tunnl71.electron_game.matrix.step.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tunnl71.electron_game.matrix.step.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tunnl71.electron_game.matrix.step.cljs$core$IFn$_invoke$arity$1 = (function (matrix_){
var automata_fn = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),(0)]);
return tunnl71.electron_game.matrix.step.cljs$core$IFn$_invoke$arity$2(matrix_,automata_fn);
}));

(tunnl71.electron_game.matrix.step.cljs$core$IFn$_invoke$arity$2 = (function (matrix_,automata_fn){
return clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$1((function (){var vec__48151 = clojure.core.matrix.shape(matrix_);
var nrow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48151,(0),null);
var ncol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48151,(1),null);
var iter__5523__auto__ = (function tunnl71$electron_game$matrix$iter__48156(s__48157){
return (new cljs.core.LazySeq(null,(function (){
var s__48157__$1 = s__48157;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__48157__$1);
if(temp__5804__auto__){
var s__48157__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48157__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__48157__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__48159 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__48158 = (0);
while(true){
if((i__48158 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__48158);
cljs.core.chunk_append(b__48159,(function (){var iter__5523__auto__ = ((function (i__48158,i,c__5521__auto__,size__5522__auto__,b__48159,s__48157__$2,temp__5804__auto__,vec__48151,nrow,ncol){
return (function tunnl71$electron_game$matrix$iter__48156_$_iter__48164(s__48165){
return (new cljs.core.LazySeq(null,((function (i__48158,i,c__5521__auto__,size__5522__auto__,b__48159,s__48157__$2,temp__5804__auto__,vec__48151,nrow,ncol){
return (function (){
var s__48165__$1 = s__48165;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__48165__$1);
if(temp__5804__auto____$1){
var s__48165__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48165__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__48165__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__48167 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__48166 = (0);
while(true){
if((i__48166 < size__5522__auto____$1)){
var j = cljs.core._nth(c__5521__auto____$1,i__48166);
cljs.core.chunk_append(b__48167,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,(ncol - (1))))))?clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$3(matrix_,i,j):(function (){var G__48174 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__48166,i__48158,j,c__5521__auto____$1,size__5522__auto____$1,b__48167,s__48165__$2,temp__5804__auto____$1,i,c__5521__auto__,size__5522__auto__,b__48159,s__48157__$2,temp__5804__auto__,vec__48151,nrow,ncol){
return (function (p1__48143_SHARP_){
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$3(matrix_,i,p1__48143_SHARP_);
});})(i__48166,i__48158,j,c__5521__auto____$1,size__5522__auto____$1,b__48167,s__48165__$2,temp__5804__auto____$1,i,c__5521__auto__,size__5522__auto__,b__48159,s__48157__$2,temp__5804__auto__,vec__48151,nrow,ncol))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(j - (1)),j,(j + (1))], null));
return (automata_fn.cljs$core$IFn$_invoke$arity$1 ? automata_fn.cljs$core$IFn$_invoke$arity$1(G__48174) : automata_fn.call(null,G__48174));
})()
));

var G__48243 = (i__48166 + (1));
i__48166 = G__48243;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48167),tunnl71$electron_game$matrix$iter__48156_$_iter__48164(cljs.core.chunk_rest(s__48165__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48167),null);
}
} else {
var j = cljs.core.first(s__48165__$2);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,(ncol - (1))))))?clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$3(matrix_,i,j):(function (){var G__48178 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__48158,j,s__48165__$2,temp__5804__auto____$1,i,c__5521__auto__,size__5522__auto__,b__48159,s__48157__$2,temp__5804__auto__,vec__48151,nrow,ncol){
return (function (p1__48143_SHARP_){
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$3(matrix_,i,p1__48143_SHARP_);
});})(i__48158,j,s__48165__$2,temp__5804__auto____$1,i,c__5521__auto__,size__5522__auto__,b__48159,s__48157__$2,temp__5804__auto__,vec__48151,nrow,ncol))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(j - (1)),j,(j + (1))], null));
return (automata_fn.cljs$core$IFn$_invoke$arity$1 ? automata_fn.cljs$core$IFn$_invoke$arity$1(G__48178) : automata_fn.call(null,G__48178));
})()
),tunnl71$electron_game$matrix$iter__48156_$_iter__48164(cljs.core.rest(s__48165__$2)));
}
} else {
return null;
}
break;
}
});})(i__48158,i,c__5521__auto__,size__5522__auto__,b__48159,s__48157__$2,temp__5804__auto__,vec__48151,nrow,ncol))
,null,null));
});})(i__48158,i,c__5521__auto__,size__5522__auto__,b__48159,s__48157__$2,temp__5804__auto__,vec__48151,nrow,ncol))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(ncol));
})());

var G__48247 = (i__48158 + (1));
i__48158 = G__48247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48159),tunnl71$electron_game$matrix$iter__48156(cljs.core.chunk_rest(s__48157__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48159),null);
}
} else {
var i = cljs.core.first(s__48157__$2);
return cljs.core.cons((function (){var iter__5523__auto__ = ((function (i,s__48157__$2,temp__5804__auto__,vec__48151,nrow,ncol){
return (function tunnl71$electron_game$matrix$iter__48156_$_iter__48180(s__48181){
return (new cljs.core.LazySeq(null,(function (){
var s__48181__$1 = s__48181;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__48181__$1);
if(temp__5804__auto____$1){
var s__48181__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48181__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__48181__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__48183 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__48182 = (0);
while(true){
if((i__48182 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__48182);
cljs.core.chunk_append(b__48183,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,(ncol - (1))))))?clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$3(matrix_,i,j):(function (){var G__48186 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__48182,j,c__5521__auto__,size__5522__auto__,b__48183,s__48181__$2,temp__5804__auto____$1,i,s__48157__$2,temp__5804__auto__,vec__48151,nrow,ncol){
return (function (p1__48143_SHARP_){
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$3(matrix_,i,p1__48143_SHARP_);
});})(i__48182,j,c__5521__auto__,size__5522__auto__,b__48183,s__48181__$2,temp__5804__auto____$1,i,s__48157__$2,temp__5804__auto__,vec__48151,nrow,ncol))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(j - (1)),j,(j + (1))], null));
return (automata_fn.cljs$core$IFn$_invoke$arity$1 ? automata_fn.cljs$core$IFn$_invoke$arity$1(G__48186) : automata_fn.call(null,G__48186));
})()
));

var G__48251 = (i__48182 + (1));
i__48182 = G__48251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48183),tunnl71$electron_game$matrix$iter__48156_$_iter__48180(cljs.core.chunk_rest(s__48181__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48183),null);
}
} else {
var j = cljs.core.first(s__48181__$2);
return cljs.core.cons(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,(ncol - (1))))))?clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$3(matrix_,i,j):(function (){var G__48188 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (j,s__48181__$2,temp__5804__auto____$1,i,s__48157__$2,temp__5804__auto__,vec__48151,nrow,ncol){
return (function (p1__48143_SHARP_){
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$3(matrix_,i,p1__48143_SHARP_);
});})(j,s__48181__$2,temp__5804__auto____$1,i,s__48157__$2,temp__5804__auto__,vec__48151,nrow,ncol))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(j - (1)),j,(j + (1))], null));
return (automata_fn.cljs$core$IFn$_invoke$arity$1 ? automata_fn.cljs$core$IFn$_invoke$arity$1(G__48188) : automata_fn.call(null,G__48188));
})()
),tunnl71$electron_game$matrix$iter__48156_$_iter__48180(cljs.core.rest(s__48181__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__48157__$2,temp__5804__auto__,vec__48151,nrow,ncol))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(ncol));
})(),tunnl71$electron_game$matrix$iter__48156(cljs.core.rest(s__48157__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(nrow));
})());
}));

(tunnl71.electron_game.matrix.step.cljs$lang$maxFixedArity = 2);

tunnl71.electron_game.matrix.draw_BANG_ = (function tunnl71$electron_game$matrix$draw_BANG_(var_args){
var G__48191 = arguments.length;
switch (G__48191) {
case 6:
return tunnl71.electron_game.matrix.draw_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 4:
return tunnl71.electron_game.matrix.draw_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tunnl71.electron_game.matrix.draw_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (matrix_,w,h,l,row0,col0){
var ctx = document.getElementById("canvas").getContext("2d");
var seq__48192 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.row_count(matrix_)));
var chunk__48193 = null;
var count__48194 = (0);
var i__48195 = (0);
while(true){
if((i__48195 < count__48194)){
var row = chunk__48193.cljs$core$IIndexed$_nth$arity$2(null,i__48195);
var seq__48217_48256 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.column_count(matrix_)));
var chunk__48218_48257 = null;
var count__48219_48258 = (0);
var i__48220_48259 = (0);
while(true){
if((i__48220_48259 < count__48219_48258)){
var col_48262 = chunk__48218_48257.cljs$core$IIndexed$_nth$arity$2(null,i__48220_48259);
(ctx.fillStyle = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$3(matrix_,row,col_48262)))?"#111111":"#00eecc"));

ctx.fillRect((col0 + (col_48262 * l)),(row0 + (row * l)),l,l);


var G__48264 = seq__48217_48256;
var G__48265 = chunk__48218_48257;
var G__48266 = count__48219_48258;
var G__48267 = (i__48220_48259 + (1));
seq__48217_48256 = G__48264;
chunk__48218_48257 = G__48265;
count__48219_48258 = G__48266;
i__48220_48259 = G__48267;
continue;
} else {
var temp__5804__auto___48268 = cljs.core.seq(seq__48217_48256);
if(temp__5804__auto___48268){
var seq__48217_48269__$1 = temp__5804__auto___48268;
if(cljs.core.chunked_seq_QMARK_(seq__48217_48269__$1)){
var c__5568__auto___48270 = cljs.core.chunk_first(seq__48217_48269__$1);
var G__48271 = cljs.core.chunk_rest(seq__48217_48269__$1);
var G__48272 = c__5568__auto___48270;
var G__48273 = cljs.core.count(c__5568__auto___48270);
var G__48274 = (0);
seq__48217_48256 = G__48271;
chunk__48218_48257 = G__48272;
count__48219_48258 = G__48273;
i__48220_48259 = G__48274;
continue;
} else {
var col_48275 = cljs.core.first(seq__48217_48269__$1);
(ctx.fillStyle = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$3(matrix_,row,col_48275)))?"#111111":"#00eecc"));

ctx.fillRect((col0 + (col_48275 * l)),(row0 + (row * l)),l,l);


var G__48276 = cljs.core.next(seq__48217_48269__$1);
var G__48277 = null;
var G__48278 = (0);
var G__48279 = (0);
seq__48217_48256 = G__48276;
chunk__48218_48257 = G__48277;
count__48219_48258 = G__48278;
i__48220_48259 = G__48279;
continue;
}
} else {
}
}
break;
}


var G__48280 = seq__48192;
var G__48281 = chunk__48193;
var G__48282 = count__48194;
var G__48283 = (i__48195 + (1));
seq__48192 = G__48280;
chunk__48193 = G__48281;
count__48194 = G__48282;
i__48195 = G__48283;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48192);
if(temp__5804__auto__){
var seq__48192__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48192__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48192__$1);
var G__48285 = cljs.core.chunk_rest(seq__48192__$1);
var G__48286 = c__5568__auto__;
var G__48287 = cljs.core.count(c__5568__auto__);
var G__48288 = (0);
seq__48192 = G__48285;
chunk__48193 = G__48286;
count__48194 = G__48287;
i__48195 = G__48288;
continue;
} else {
var row = cljs.core.first(seq__48192__$1);
var seq__48222_48289 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.column_count(matrix_)));
var chunk__48223_48290 = null;
var count__48224_48291 = (0);
var i__48225_48292 = (0);
while(true){
if((i__48225_48292 < count__48224_48291)){
var col_48293 = chunk__48223_48290.cljs$core$IIndexed$_nth$arity$2(null,i__48225_48292);
(ctx.fillStyle = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$3(matrix_,row,col_48293)))?"#111111":"#00eecc"));

ctx.fillRect((col0 + (col_48293 * l)),(row0 + (row * l)),l,l);


var G__48295 = seq__48222_48289;
var G__48296 = chunk__48223_48290;
var G__48297 = count__48224_48291;
var G__48298 = (i__48225_48292 + (1));
seq__48222_48289 = G__48295;
chunk__48223_48290 = G__48296;
count__48224_48291 = G__48297;
i__48225_48292 = G__48298;
continue;
} else {
var temp__5804__auto___48299__$1 = cljs.core.seq(seq__48222_48289);
if(temp__5804__auto___48299__$1){
var seq__48222_48300__$1 = temp__5804__auto___48299__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48222_48300__$1)){
var c__5568__auto___48301 = cljs.core.chunk_first(seq__48222_48300__$1);
var G__48302 = cljs.core.chunk_rest(seq__48222_48300__$1);
var G__48303 = c__5568__auto___48301;
var G__48304 = cljs.core.count(c__5568__auto___48301);
var G__48305 = (0);
seq__48222_48289 = G__48302;
chunk__48223_48290 = G__48303;
count__48224_48291 = G__48304;
i__48225_48292 = G__48305;
continue;
} else {
var col_48306 = cljs.core.first(seq__48222_48300__$1);
(ctx.fillStyle = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$3(matrix_,row,col_48306)))?"#111111":"#00eecc"));

ctx.fillRect((col0 + (col_48306 * l)),(row0 + (row * l)),l,l);


var G__48308 = cljs.core.next(seq__48222_48300__$1);
var G__48309 = null;
var G__48310 = (0);
var G__48311 = (0);
seq__48222_48289 = G__48308;
chunk__48223_48290 = G__48309;
count__48224_48291 = G__48310;
i__48225_48292 = G__48311;
continue;
}
} else {
}
}
break;
}


var G__48312 = cljs.core.next(seq__48192__$1);
var G__48313 = null;
var G__48314 = (0);
var G__48315 = (0);
seq__48192 = G__48312;
chunk__48193 = G__48313;
count__48194 = G__48314;
i__48195 = G__48315;
continue;
}
} else {
return null;
}
}
break;
}
}));

(tunnl71.electron_game.matrix.draw_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (matrix_,w,h,l){
return tunnl71.electron_game.matrix.draw_BANG_.cljs$core$IFn$_invoke$arity$6(matrix_,w,h,l,(30),(0));
}));

(tunnl71.electron_game.matrix.draw_BANG_.cljs$lang$maxFixedArity = 6);

tunnl71.electron_game.matrix.refresh = (function tunnl71$electron_game$matrix$refresh(var_args){
var G__48232 = arguments.length;
switch (G__48232) {
case 2:
return tunnl71.electron_game.matrix.refresh.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 0:
return tunnl71.electron_game.matrix.refresh.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tunnl71.electron_game.matrix.refresh.cljs$core$IFn$_invoke$arity$2 = (function (ncol,nrow){
return clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$1(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(nrow,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((nrow * ncol),(function (){
return cljs.core.rand_int((2));
}))));
}));

(tunnl71.electron_game.matrix.refresh.cljs$core$IFn$_invoke$arity$0 = (function (){
return tunnl71.electron_game.matrix.refresh.cljs$core$IFn$_invoke$arity$2((10),(10));
}));

(tunnl71.electron_game.matrix.refresh.cljs$lang$maxFixedArity = 2);

tunnl71.electron_game.matrix.test_matrix = tunnl71.electron_game.matrix.refresh.cljs$core$IFn$_invoke$arity$0();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.shape(tunnl71.electron_game.matrix.test_matrix),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null))){
} else {
throw (new Error("Assert failed: (= (m/shape test-matrix) [10 10])"));
}
if(clojure.core.matrix.matrix_QMARK_(tunnl71.electron_game.matrix.step.cljs$core$IFn$_invoke$arity$1(tunnl71.electron_game.matrix.test_matrix))){
} else {
throw (new Error("Assert failed: (m/matrix? (tunnl71.electron-game.matrix/step test-matrix))"));
}

//# sourceMappingURL=tunnl71.electron_game.matrix.js.map
