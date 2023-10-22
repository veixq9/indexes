goog.provide('clojure.core.matrix.impl.sequence');
(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.Keyword(null,"sequence","sequence",926807414);
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Core.matrix implementation for Clojure ISeq objects"], null);
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,length);
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix(cljs.core.PersistentVector.EMPTY,rows,columns);
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd(cljs.core.PersistentVector.EMPTY,dims);
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var m__$1 = this;
return clojure.core.matrix.protocols.coerce_param(cljs.core.PersistentVector.EMPTY,data);
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var m__$1 = this;
return true;
}));
(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
var x__28676__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,x);
if(typeof x__28676__auto__ === 'number'){
return x__28676__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__28676__auto__);

}
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,x);
return clojure.core.matrix.protocols.get_1d(row,y);
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
var temp__5802__auto__ = cljs.core.seq(indexes);
if(temp__5802__auto__){
var indexes__$1 = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.next(indexes__$1);
if(temp__5802__auto____$1){
var next_indexes = temp__5802__auto____$1;
var mv = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.first(indexes__$1));
return clojure.core.matrix.protocols.get_nd(mv,next_indexes);
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.first(indexes__$1));
}
} else {
return m__$1;
}
}));
(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,row,v){
var m__$1 = this;
return clojure.core.matrix.protocols.set_1d(clojure.core.matrix.protocols.convert_to_nested_vectors(m__$1),row,v);
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,row,column,v){
var m__$1 = this;
return clojure.core.matrix.protocols.set_2d(clojure.core.matrix.protocols.convert_to_nested_vectors(m__$1),row,column,v);
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var m__$1 = this;
return clojure.core.matrix.protocols.set_nd(clojure.core.matrix.protocols.convert_to_nested_vectors(m__$1),indexes,v);
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
}));
(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PBroadcast$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PBroadcast$broadcast$arity$2 = (function (m,new_shape){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast(clojure.core.matrix.protocols.convert_to_nested_vectors(m__$1),new_shape);
}));
(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PBroadcastLike$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PBroadcastLike$broadcast_like$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast(clojure.core.matrix.protocols.convert_to_nested_vectors(a),clojure.core.matrix.protocols.get_shape(m__$1));
}));
(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceView$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceView$get_major_slice_view$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,i);
}));
(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceSeq$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceSeq$get_major_slice_seq$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.vec(m__$1);
}));
(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMatrixRows$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMatrixRows$get_rows$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.vec(m__$1);
}));
(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMatrixColumns$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMatrixColumns$get_columns$arity$1 = (function (m){
var m__$1 = this;
var m__$2 = clojure.core.matrix.protocols.coerce_param(cljs.core.PersistentVector.EMPTY,m__$1);
return clojure.core.matrix.protocols.get_columns(m__$2);
}));
(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceSeq2$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceSeq2$get_slice_seq$arity$2 = (function (m,dimension){
var m__$1 = this;
var ldimension = cljs.core.long$(dimension);
if((ldimension === (0))){
return clojure.core.matrix.protocols.get_major_slice_seq(m__$1);
} else {
if((ldimension < (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't get slices of a negative dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dimension)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36829_SHARP_){
return clojure.core.matrix.protocols.get_slice(m__$1,dimension,p1__36829_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m__$1,dimension)));

}
}
}));
(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PConversion$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 = (function (m){
var m__$1 = this;
if((clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)) > (0))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.convert_to_nested_vectors,m__$1);
} else {
return cljs.core.vec(m__$1);
}
}));
(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)) + (1));
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)));
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
console.log(["shape of seq: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m__$1)].join(''));

return cljs.core.cons(cljs.core.count(m__$1),clojure.core.matrix.protocols.get_shape(cljs.core.first(m__$1)));
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count(m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.first(m__$1),(x - (1)));
}
}));
(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1))))){
return m__$1;
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.core.matrix.protocols.element_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));
}
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$2 = (function (m,f){
var m__$1 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36830_SHARP_){
return clojure.core.matrix.protocols.element_map(p1__36830_SHARP_,f);
}),m__$1);
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$3 = (function (m,f,a){
var m__$1 = this;
var vec__36836 = clojure.core.matrix.protocols.broadcast_compatible(m__$1,a);
var m__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36836,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36836,(1),null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__36831_SHARP_,p2__36832_SHARP_){
return clojure.core.matrix.protocols.element_map(p1__36831_SHARP_,f,p2__36832_SHARP_);
}),m__$2,clojure.core.matrix.protocols.get_major_slice_seq(a__$1));
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var vec__36839 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clojure.core.matrix.protocols.broadcast_compatible,m__$1,a,more);
var seq__36840 = cljs.core.seq(vec__36839);
var first__36841 = cljs.core.first(seq__36840);
var seq__36840__$1 = cljs.core.next(seq__36840);
var m__$2 = first__36841;
var first__36841__$1 = cljs.core.first(seq__36840__$1);
var seq__36840__$2 = cljs.core.next(seq__36840__$1);
var a__$1 = first__36841__$1;
var more__$1 = seq__36840__$2;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (p1__36833_SHARP_,p2__36834_SHARP_,p3__36835_SHARP_){
return clojure.core.matrix.protocols.element_map(p1__36833_SHARP_,f,p2__36834_SHARP_,p3__36835_SHARP_);
}),m__$2,clojure.core.matrix.protocols.get_major_slice_seq(a__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_major_slice_seq,more__$1));
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Sequence arrays are not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Sequence arrays are not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Sequence arrays are not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$2 = (function (m,f){
var m__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(f,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.core.matrix.protocols.element_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0)));
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$3 = (function (m,f,init){
var m__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,init,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.core.matrix.protocols.element_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0)));
}));
(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$2 = (function (ms,f){
var ms__$1 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (i,m){
return clojure.core.matrix.protocols.element_map_indexed(m,(function() { 
var G__36865__delegate = function (p1__36844_SHARP_,rest__36845_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cons(i,p1__36844_SHARP_),rest__36845_SHARP_);
};
var G__36865 = function (p1__36844_SHARP_,var_args){
var rest__36845_SHARP_ = null;
if (arguments.length > 1) {
var G__36866__i = 0, G__36866__a = new Array(arguments.length -  1);
while (G__36866__i < G__36866__a.length) {G__36866__a[G__36866__i] = arguments[G__36866__i + 1]; ++G__36866__i;}
  rest__36845_SHARP_ = new cljs.core.IndexedSeq(G__36866__a,0,null);
} 
return G__36865__delegate.call(this,p1__36844_SHARP_,rest__36845_SHARP_);};
G__36865.cljs$lang$maxFixedArity = 1;
G__36865.cljs$lang$applyTo = (function (arglist__36867){
var p1__36844_SHARP_ = cljs.core.first(arglist__36867);
var rest__36845_SHARP_ = cljs.core.rest(arglist__36867);
return G__36865__delegate(p1__36844_SHARP_,rest__36845_SHARP_);
});
G__36865.cljs$core$IFn$_invoke$arity$variadic = G__36865__delegate;
return G__36865;
})()
);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)),ms__$1);
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$3 = (function (ms,f,as){
var ms__$1 = this;
var vec__36850 = clojure.core.matrix.protocols.broadcast_compatible(ms__$1,as);
var ms__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36850,(0),null);
var as__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36850,(1),null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (i,m,a){
return clojure.core.matrix.protocols.element_map_indexed(m,(function() { 
var G__36868__delegate = function (p1__36846_SHARP_,rest__36847_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cons(i,p1__36846_SHARP_),rest__36847_SHARP_);
};
var G__36868 = function (p1__36846_SHARP_,var_args){
var rest__36847_SHARP_ = null;
if (arguments.length > 1) {
var G__36869__i = 0, G__36869__a = new Array(arguments.length -  1);
while (G__36869__i < G__36869__a.length) {G__36869__a[G__36869__i] = arguments[G__36869__i + 1]; ++G__36869__i;}
  rest__36847_SHARP_ = new cljs.core.IndexedSeq(G__36869__a,0,null);
} 
return G__36868__delegate.call(this,p1__36846_SHARP_,rest__36847_SHARP_);};
G__36868.cljs$lang$maxFixedArity = 1;
G__36868.cljs$lang$applyTo = (function (arglist__36870){
var p1__36846_SHARP_ = cljs.core.first(arglist__36870);
var rest__36847_SHARP_ = cljs.core.rest(arglist__36870);
return G__36868__delegate(p1__36846_SHARP_,rest__36847_SHARP_);
});
G__36868.cljs$core$IFn$_invoke$arity$variadic = G__36868__delegate;
return G__36868;
})()
,a);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$2)),ms__$2,clojure.core.matrix.protocols.get_major_slice_seq(as__$1));
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$4 = (function (ms,f,as,more){
var ms__$1 = this;
var vec__36854 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clojure.core.matrix.protocols.broadcast_compatible,ms__$1,as,more);
var seq__36855 = cljs.core.seq(vec__36854);
var first__36856 = cljs.core.first(seq__36855);
var seq__36855__$1 = cljs.core.next(seq__36855);
var ms__$2 = first__36856;
var first__36856__$1 = cljs.core.first(seq__36855__$1);
var seq__36855__$2 = cljs.core.next(seq__36855__$1);
var as__$1 = first__36856__$1;
var more__$1 = seq__36855__$2;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$variadic((function() { 
var G__36871__delegate = function (i,m,a,mr){
return clojure.core.matrix.protocols.element_map_indexed(m,(function() { 
var G__36872__delegate = function (p1__36848_SHARP_,rest__36849_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cons(i,p1__36848_SHARP_),rest__36849_SHARP_);
};
var G__36872 = function (p1__36848_SHARP_,var_args){
var rest__36849_SHARP_ = null;
if (arguments.length > 1) {
var G__36873__i = 0, G__36873__a = new Array(arguments.length -  1);
while (G__36873__i < G__36873__a.length) {G__36873__a[G__36873__i] = arguments[G__36873__i + 1]; ++G__36873__i;}
  rest__36849_SHARP_ = new cljs.core.IndexedSeq(G__36873__a,0,null);
} 
return G__36872__delegate.call(this,p1__36848_SHARP_,rest__36849_SHARP_);};
G__36872.cljs$lang$maxFixedArity = 1;
G__36872.cljs$lang$applyTo = (function (arglist__36874){
var p1__36848_SHARP_ = cljs.core.first(arglist__36874);
var rest__36849_SHARP_ = cljs.core.rest(arglist__36874);
return G__36872__delegate(p1__36848_SHARP_,rest__36849_SHARP_);
});
G__36872.cljs$core$IFn$_invoke$arity$variadic = G__36872__delegate;
return G__36872;
})()
,a,mr);
};
var G__36871 = function (i,m,a,var_args){
var mr = null;
if (arguments.length > 3) {
var G__36875__i = 0, G__36875__a = new Array(arguments.length -  3);
while (G__36875__i < G__36875__a.length) {G__36875__a[G__36875__i] = arguments[G__36875__i + 3]; ++G__36875__i;}
  mr = new cljs.core.IndexedSeq(G__36875__a,0,null);
} 
return G__36871__delegate.call(this,i,m,a,mr);};
G__36871.cljs$lang$maxFixedArity = 3;
G__36871.cljs$lang$applyTo = (function (arglist__36876){
var i = cljs.core.first(arglist__36876);
arglist__36876 = cljs.core.next(arglist__36876);
var m = cljs.core.first(arglist__36876);
arglist__36876 = cljs.core.next(arglist__36876);
var a = cljs.core.first(arglist__36876);
var mr = cljs.core.rest(arglist__36876);
return G__36871__delegate(i,m,a,mr);
});
G__36871.cljs$core$IFn$_invoke$arity$variadic = G__36871__delegate;
return G__36871;
})()
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$2)),ms__$2,clojure.core.matrix.protocols.get_major_slice_seq(as__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_major_slice_seq,more__$1)], 0));
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Sequence arrays are not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Sequence arrays are not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Sequence arrays are not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

//# sourceMappingURL=clojure.core.matrix.impl.sequence.js.map
