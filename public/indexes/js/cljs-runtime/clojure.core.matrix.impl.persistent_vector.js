goog.provide('clojure.core.matrix.impl.persistent_vector');
/**
 * Ensures a vector is fully coerced to nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.coerce_nested = (function clojure$core$matrix$impl$persistent_vector$coerce_nested(v){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce,v);
});
/**
 * Maps a function over a persistent vector, only modifying the vector if the function
 * returns a different value
 */
clojure.core.matrix.impl.persistent_vector.mapv_identity_check = (function clojure$core$matrix$impl$persistent_vector$mapv_identity_check(f,v){
var n = cljs.core.count(v);
var i = (0);
var v__$1 = v;
while(true){
if((i < n)){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__$1,i);
var y = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
var G__36616 = (i + (1));
var G__36617 = (((x === y))?v__$1:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,i,y));
i = G__36616;
v__$1 = G__36617;
continue;
} else {
return v__$1;
}
break;
}
});
clojure.core.matrix.impl.persistent_vector.check_vector_shape = (function clojure$core$matrix$impl$persistent_vector$check_vector_shape(v,shape){
var and__5043__auto__ = (v instanceof cljs.core.PersistentVector);
if(and__5043__auto__){
var and__5043__auto____$1 = (cljs.core.count(v) === cljs.core.long$(cljs.core.first(shape)));
if(and__5043__auto____$1){
var temp__5802__auto__ = cljs.core.next(shape);
if(temp__5802__auto__){
var ns = temp__5802__auto__;
return cljs.core.every_QMARK_((function (p1__36516_SHARP_){
return (clojure.core.matrix.impl.persistent_vector.check_vector_shape.cljs$core$IFn$_invoke$arity$2 ? clojure.core.matrix.impl.persistent_vector.check_vector_shape.cljs$core$IFn$_invoke$arity$2(p1__36516_SHARP_,ns) : clojure.core.matrix.impl.persistent_vector.check_vector_shape.call(null,p1__36516_SHARP_,ns));
}),v);
} else {
return cljs.core.every_QMARK_((function (p1__36517_SHARP_){
return (!((p1__36517_SHARP_ instanceof cljs.core.PersistentVector)));
}),v);
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
/**
 * Test if array is already in nested persistent vector array format.
 */
clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_ = (function clojure$core$matrix$impl$persistent_vector$is_nested_persistent_vectors_QMARK_(x){
if(typeof x === 'number'){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_(x))){
return true;
} else {
if((!((x instanceof cljs.core.PersistentVector)))){
return false;
} else {
return ((cljs.core.every_QMARK_(clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_,x)) && (clojure.core.matrix.impl.persistent_vector.check_vector_shape(x,clojure.core.matrix.protocols.get_shape(x))));

}
}
}
});
/**
 * Coerces to nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce = (function clojure$core$matrix$impl$persistent_vector$persistent_vector_coerce(x){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(x));
if((dims > (0))){
return clojure.core.matrix.protocols.convert_to_nested_vectors(x);
} else {
if((((dims === (0))) && (cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(x))))){
return clojure.core.matrix.protocols.get_0d(x);
} else {
if((x == null)){
return x;
} else {
if((x instanceof cljs.core.IIterable)){
return clojure.core.matrix.impl.persistent_vector.coerce_nested(x);
} else {
if(cljs.core.sequential_QMARK_(x)){
return clojure.core.matrix.impl.persistent_vector.coerce_nested(x);
} else {
return x;

}
}
}
}
}
});
/**
 * Calculates the dimensionality (== nesting depth) of nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.vector_dimensionality = (function clojure$core$matrix$impl$persistent_vector$vector_dimensionality(m){
if(cljs.core.vector_QMARK_(m)){
if((cljs.core.count(m) > (0))){
return ((1) + (function (){var G__36518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(0));
return (clojure.core.matrix.impl.persistent_vector.vector_dimensionality.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.impl.persistent_vector.vector_dimensionality.cljs$core$IFn$_invoke$arity$1(G__36518) : clojure.core.matrix.impl.persistent_vector.vector_dimensionality.call(null,G__36518));
})());
} else {
return (1);
}
} else {
return cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));

}
});
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.Keyword(null,"persistent-vector","persistent-vector",2032618025);
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Implementation for nested Clojure persistent vectors\n             used as matrices"], null);
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var m__$1 = this;
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(length,0.0));
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var m__$1 = this;
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rows,clojure.core.matrix.protocols.new_vector(m__$1,columns)));
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var m__$1 = this;
var temp__5802__auto__ = cljs.core.seq(dims);
if(temp__5802__auto__){
var dims__$1 = temp__5802__auto__;
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(dims__$1),clojure.core.matrix.protocols.new_matrix_nd(m__$1,cljs.core.next(dims__$1))));
} else {
return 0.0;
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var m__$1 = this;
return clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce(data);
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var m__$1 = this;
return true;
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcast$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcast$broadcast$arity$2 = (function (m,target_shape){
var m__$1 = this;
var mshape = clojure.core.matrix.protocols.get_shape(m__$1);
var dims = cljs.core.long$(cljs.core.count(mshape));
var tdims = cljs.core.long$(cljs.core.count(target_shape));
if((dims > tdims)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't broadcast to a lower dimensional shape",cljs.core.PersistentArrayMap.EMPTY);
} else {
if((!(cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ__EQ_,mshape,cljs.core.take_last(dims,target_shape)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Incompatible shapes, cannot broadcast shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(mshape))," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(target_shape))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$2,dup){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(dup,m__$2));
}),m__$1,cljs.core.reverse(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2(dims,target_shape)));

}
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastLike$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastLike$broadcast_like$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast(a,clojure.core.matrix.protocols.get_shape(m__$1));
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastCoerce$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastCoerce$broadcast_coerce$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast(clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce(a),clojure.core.matrix.protocols.get_shape(m__$1));
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(x | (0)));
var x__28676__auto__ = r;
if(typeof x__28676__auto__ === 'number'){
return x__28676__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__28676__auto__);

}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(x | (0)));
return clojure.core.matrix.protocols.get_1d(row,y);
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
var temp__5802__auto__ = cljs.core.seq(indexes);
if(temp__5802__auto__){
var indexes__$1 = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.next(indexes__$1);
if(temp__5802__auto____$1){
var next_indexes = temp__5802__auto____$1;
var m__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(cljs.core.first(indexes__$1) | (0)));
return clojure.core.matrix.protocols.get_nd(m__$2,next_indexes);
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(cljs.core.first(indexes__$1) | (0)));
}
} else {
return m__$1;
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,row,v){
var m__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,row,v);
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,row,column,v){
var m__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,row,clojure.core.matrix.protocols.set_1d((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(row) : m__$1.call(null,row)),column,v));
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var m__$1 = this;
var temp__5802__auto__ = cljs.core.seq(indexes);
if(temp__5802__auto__){
var indexes__$1 = temp__5802__auto__;
var fi = cljs.core.first(indexes__$1);
if(((1) === cljs.core.count(indexes__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,fi,v);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,fi,clojure.core.matrix.protocols.set_nd((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(fi) : m__$1.call(null,fi)),cljs.core.next(indexes__$1),v));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Trying to set on a persistent vector with insufficient indexes?",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_row$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.long$(i));
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_column$arity$2 = (function (m,i){
var m__$1 = this;
return clojure.core.matrix.protocols.get_slice(m__$1,(1),i);
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_major_slice$arity$2 = (function (m,i){
var m__$1 = this;
var sl = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.long$(i));
return sl;
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_slice$arity$3 = (function (m,dimension,i){
var m__$1 = this;
var dimension__$1 = cljs.core.long$(dimension);
if((dimension__$1 === (0))){
return clojure.core.matrix.protocols.get_major_slice(m__$1,i);
} else {
var sd = (dimension__$1 - (1));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36519_SHARP_){
return clojure.core.matrix.protocols.get_slice(p1__36519_SHARP_,sd,i);
}),m__$1);
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixRows$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixRows$get_rows$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixColumns$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixColumns$get_columns$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.vec((function (){var iter__5523__auto__ = (function clojure$core$matrix$impl$persistent_vector$iter__36521(s__36522){
return (new cljs.core.LazySeq(null,(function (){
var s__36522__$1 = s__36522;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__36522__$1);
if(temp__5804__auto__){
var s__36522__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36522__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36522__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36524 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36523 = (0);
while(true){
if((i__36523 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__36523);
cljs.core.chunk_append(b__36524,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__36523,j,c__5521__auto__,size__5522__auto__,b__36524,s__36522__$2,temp__5804__auto__,m__$1){
return (function (p1__36520_SHARP_){
return clojure.core.matrix.protocols.get_1d(p1__36520_SHARP_,j);
});})(i__36523,j,c__5521__auto__,size__5522__auto__,b__36524,s__36522__$2,temp__5804__auto__,m__$1))
,m__$1));

var G__36626 = (i__36523 + (1));
i__36523 = G__36626;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36524),clojure$core$matrix$impl$persistent_vector$iter__36521(cljs.core.chunk_rest(s__36522__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36524),null);
}
} else {
var j = cljs.core.first(s__36522__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (j,s__36522__$2,temp__5804__auto__,m__$1){
return (function (p1__36520_SHARP_){
return clojure.core.matrix.protocols.get_1d(p1__36520_SHARP_,j);
});})(j,s__36522__$2,temp__5804__auto__,m__$1))
,m__$1),clojure$core$matrix$impl$persistent_vector$iter__36521(cljs.core.rest(s__36522__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m__$1,(1))));
})());
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView$get_major_slice_view$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,i);
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView2$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView2$get_slice_view$arity$3 = (function (m,dimension,i){
var m__$1 = this;
return clojure.core.matrix.protocols.get_slice(m__$1,dimension,i);
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceSeq$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceSeq$get_major_slice_seq$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceJoin$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceJoin$join$arity$2 = (function (m,a){
var m__$1 = this;
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m__$1));
var adims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a));
if((dims === adims)){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_major_slice_seq(m__$1),clojure.core.matrix.protocols.get_major_slice_seq(a)));
} else {
if((dims === (adims + (1)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,a);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Joining with array of incompatible size",cljs.core.PersistentArrayMap.EMPTY);

}
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRotate$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRotate$rotate$arity$3 = (function (m,dim,places){
var m__$1 = this;
var dim__$1 = cljs.core.long$(dim);
var places__$1 = cljs.core.long$(places);
if(((0) === dim__$1)){
var c = cljs.core.long$(cljs.core.count(m__$1));
var sh = cljs.core.long$((((c > (0)))?cljs.core.mod(places__$1,c):(0)));
if((sh === (0))){
return m__$1;
} else {
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(m__$1,sh,c),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(m__$1,(0),sh)));
}
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (s){
return clojure.core.matrix.protocols.rotate(s,(dim__$1 - (1)),places__$1);
}),m__$1);
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PTransposeDims$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PTransposeDims$transpose_dims$arity$2 = (function (m,ordering){
var m__$1 = this;
var temp__5802__auto__ = cljs.core.seq(ordering);
if(temp__5802__auto__){
var ordering__$1 = temp__5802__auto__;
var dim = cljs.core.long$(cljs.core.first(ordering__$1));
var next_ordering = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
if((i < dim)){
return i;
} else {
return (i - (1));
}
}),cljs.core.next(ordering__$1));
var slice_range = cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m__$1,dim));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (si){
return clojure.core.matrix.protocols.transpose_dims(clojure.core.matrix.protocols.get_slice(m__$1,dim,si),next_ordering);
}),slice_range);
} else {
return m__$1;
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$order$arity$2 = (function (m,indices){
var m__$1 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36525_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,p1__36525_SHARP_);
}),clojure.core.matrix.protocols.element_seq(indices));
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$order$arity$3 = (function (m,dimension,indices){
var m__$1 = this;
var dimension__$1 = cljs.core.long$(dimension);
if((dimension__$1 === (0))){
return clojure.core.matrix.protocols.order(m__$1,indices);
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36526_SHARP_){
return clojure.core.matrix.protocols.order(p1__36526_SHARP_,(dimension__$1 - (1)),indices);
}),m__$1);
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSubVector$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSubVector$subvector$arity$3 = (function (m,start,length){
var m__$1 = this;
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(m__$1,start,(cljs.core.long$(start) + cljs.core.long$(length)));
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$validate_shape$arity$1 = (function (m){
var m__$1 = this;
if(clojure.core.matrix.protocols.same_shapes_QMARK_(m__$1)){
return clojure.core.matrix.protocols.get_shape(m__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Inconsistent shape for persistent vector array.",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$validate_shape$arity$2 = (function (m,shape){
var m__$1 = this;
if(cljs.core.empty_QMARK_(shape)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Expected empty shape for persistent vector: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,cljs.core.next(shape),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.validate_shape,m__$1)))){
return shape;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Inconsistent shape for persistent vector array, expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape)," on array ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$matrix_add$arity$2 = (function (m,a){
var m__$1 = this;
var vec__36527 = clojure.core.matrix.protocols.broadcast_compatible(m__$1,a);
var m__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36527,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36527,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,m__$2,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce(a__$1));
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$matrix_sub$arity$2 = (function (m,a){
var m__$1 = this;
var vec__36530 = clojure.core.matrix.protocols.broadcast_compatible(m__$1,a);
var m__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36530,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36530,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3(cljs.core._,m__$2,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce(a__$1));
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$vector_dot$arity$2 = (function (a,b){
var a__$1 = this;
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b));
if((((dims === (1))) && (((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)))))){
var n = cljs.core.long$(cljs.core.count(a__$1));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.long$(cljs.core.long$(clojure.core.matrix.protocols.dimension_count(b,(0)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mismatched vector sizes",cljs.core.PersistentArrayMap.EMPTY);
} else {
if((b instanceof cljs.core.List)){
var b__$1 = b;
var i = (0);
var res = 0.0;
while(true){
if((i >= n)){
return res;
} else {
var G__36638 = (i + (1));
var G__36639 = (res + (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a__$1,(i | (0))) * b__$1.get((i | (0)))));
i = G__36638;
res = G__36639;
continue;
}
break;
}
} else {
if((Array === b.constructor)){
var i = (0);
var res = 0.0;
while(true){
if((i >= n)){
return res;
} else {
var G__36641 = (i + (1));
var G__36642 = (res + (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a__$1,(i | (0))) * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,i)));
i = G__36641;
res = G__36642;
continue;
}
break;
}
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,a__$1,clojure.core.matrix.protocols.element_seq(b)));

}
}
}
} else {
return clojure.core.matrix.protocols.inner_product(a__$1,b);

}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$length$arity$1 = (function (a){
var a__$1 = this;
if(typeof cljs.core.first(a__$1) === 'number'){
var n = cljs.core.long$(cljs.core.count(a__$1));
var i = (0);
var res = 0.0;
while(true){
if((i < n)){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a__$1,i);
var G__36644 = (i + (1));
var G__36645 = (res + (x * x));
i = G__36644;
res = G__36645;
continue;
} else {
return Math.sqrt(res);
}
break;
}
} else {
return Math.sqrt(clojure.core.matrix.protocols.length_squared(a__$1));
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$length_squared$arity$1 = (function (a){
var a__$1 = this;
if(typeof cljs.core.first(a__$1) === 'number'){
var n = cljs.core.long$(cljs.core.count(a__$1));
var i = (0);
var res = 0.0;
while(true){
if((i < n)){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a__$1,i);
var G__36646 = (i + (1));
var G__36647 = (res + (x * x));
i = G__36646;
res = G__36647;
continue;
} else {
return res;
}
break;
}
} else {
return clojure.core.matrix.protocols.element_reduce(a__$1,(function (r,x){
return (r + (x * x));
}),0.0);
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$normalise$arity$1 = (function (a){
var a__$1 = this;
return clojure.core.matrix.protocols.scale(a__$1,(1.0 / Math.sqrt(clojure.core.matrix.protocols.length_squared(a__$1))));
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMutableMatrixConstruction$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMutableMatrixConstruction$mutable_matrix$arity$1 = (function (m){
var m__$1 = this;
return null;
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImmutableMatrixConstruction$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImmutableMatrixConstruction$immutable_matrix$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorDistance$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorDistance$distance$arity$2 = (function (a,b){
var a__$1 = this;
return clojure.core.matrix.protocols.length(clojure.core.matrix.protocols.matrix_sub(b,a__$1));
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSummable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSummable$element_sum$arity$1 = (function (a){
var a__$1 = this;
return clojure.core.matrix.protocols.element_reduce(a__$1,cljs.core._PLUS_);
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PCoercion$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PCoercion$coerce_param$arity$2 = (function (m,param){
var m__$1 = this;
return clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce(param);
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixEquality$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixEquality$matrix_equals$arity$2 = (function (a,b){
var a__$1 = this;
var bdims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b));
var acount = cljs.core.long$(cljs.core.count(a__$1));
if((bdims <= (0))){
return false;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(acount,clojure.core.matrix.protocols.dimension_count(b,(0)))){
return false;
} else {
if(((1) === bdims)){
var and__5043__auto__ = ((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a__$1)));
if(and__5043__auto__){
var i = (0);
while(true){
if((i < acount)){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a__$1,i),clojure.core.matrix.protocols.get_1d(b,i)))){
var G__36650 = (i + (1));
i = G__36650;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__5043__auto__;
}
} else {
if(cljs.core.vector_QMARK_(b)){
var n = acount;
var i = (0);
while(true){
if((i < n)){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a__$1,i),(b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(i) : b.call(null,i))))){
var G__36651 = (i + (1));
i = G__36651;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
var sa = cljs.core.seq(a__$1);
var sb = clojure.core.matrix.protocols.get_major_slice_seq(b);
while(true){
if(sa){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals(cljs.core.first(sa),cljs.core.first(sb)))){
var G__36652 = cljs.core.next(sa);
var G__36653 = cljs.core.next(sb);
sa = G__36652;
sb = G__36653;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}

}
}
}
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$element_multiply$arity$2 = (function (m,a){
var m__$1 = this;
if(typeof a === 'number'){
return clojure.core.matrix.protocols.scale(m__$1,a);
} else {
var vec__36534 = clojure.core.matrix.protocols.broadcast_compatible(m__$1,a);
var m__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36534,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36534,(1),null);
return clojure.core.matrix.protocols.element_map(m__$2,cljs.core._STAR_,a__$1);
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$matrix_multiply$arity$2 = (function (m,a){
var m__$1 = this;
var mdims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m__$1));
var adims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a));
if((adims === (0))){
return clojure.core.matrix.protocols.scale(m__$1,a);
} else {
if((((mdims === (1))) && ((adims === (2))))){
return cljs.core.vec((function (){var iter__5523__auto__ = (function clojure$core$matrix$impl$persistent_vector$iter__36537(s__36538){
return (new cljs.core.LazySeq(null,(function (){
var s__36538__$1 = s__36538;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__36538__$1);
if(temp__5804__auto__){
var s__36538__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36538__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36538__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36540 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36539 = (0);
while(true){
if((i__36539 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__36539);
cljs.core.chunk_append(b__36540,(function (){var r = clojure.core.matrix.protocols.get_column(a,i);
return clojure.core.matrix.protocols.vector_dot(m__$1,r);
})());

var G__36657 = (i__36539 + (1));
i__36539 = G__36657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36540),clojure$core$matrix$impl$persistent_vector$iter__36537(cljs.core.chunk_rest(s__36538__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36540),null);
}
} else {
var i = cljs.core.first(s__36538__$2);
return cljs.core.cons((function (){var r = clojure.core.matrix.protocols.get_column(a,i);
return clojure.core.matrix.protocols.vector_dot(m__$1,r);
})(),clojure$core$matrix$impl$persistent_vector$iter__36537(cljs.core.rest(s__36538__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(a,(1))));
})());
} else {
if((((mdims === (1))) && ((adims === (1))))){
return clojure.core.matrix.protocols.vector_dot(m__$1,a);
} else {
if((((mdims === (2))) && ((adims === (1))))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36533_SHARP_){
return clojure.core.matrix.protocols.vector_dot(p1__36533_SHARP_,a);
}),m__$1);
} else {
if((((mdims === (2))) && ((adims === (2))))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (r){
return cljs.core.vec((function (){var iter__5523__auto__ = (function clojure$core$matrix$impl$persistent_vector$iter__36541(s__36542){
return (new cljs.core.LazySeq(null,(function (){
var s__36542__$1 = s__36542;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__36542__$1);
if(temp__5804__auto__){
var s__36542__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36542__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36542__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36544 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36543 = (0);
while(true){
if((i__36543 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__36543);
cljs.core.chunk_append(b__36544,clojure.core.matrix.protocols.vector_dot(r,clojure.core.matrix.protocols.get_column(a,j)));

var G__36660 = (i__36543 + (1));
i__36543 = G__36660;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36544),clojure$core$matrix$impl$persistent_vector$iter__36541(cljs.core.chunk_rest(s__36542__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36544),null);
}
} else {
var j = cljs.core.first(s__36542__$2);
return cljs.core.cons(clojure.core.matrix.protocols.vector_dot(r,clojure.core.matrix.protocols.get_column(a,j)),clojure$core$matrix$impl$persistent_vector$iter__36541(cljs.core.rest(s__36542__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(a,(1))));
})());
}),m__$1);
} else {
return clojure.core.matrix.protocols.inner_product(m__$1,a);

}
}
}
}
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$inner_product$arity$2 = (function (m,a){
var m__$1 = this;
var adims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a));
var mdims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m__$1));
if(((0) === adims)){
return clojure.core.matrix.protocols.scale(m__$1,clojure.core.matrix.protocols.get_0d(a));
} else {
if((!((cljs.core.long$(cljs.core.last(clojure.core.matrix.protocols.get_shape(m__$1))) === cljs.core.long$(cljs.core.first(clojure.core.matrix.protocols.get_shape(a))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Incompatible shapes for inner product: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape(m__$1))," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape(a))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if(((1) === mdims)){
if(((1) === adims)){
return clojure.core.matrix.protocols.element_sum(clojure.core.matrix.protocols.element_multiply(m__$1,a));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.matrix_add,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (sl,x){
return clojure.core.matrix.protocols.scale(sl,x);
}),clojure.core.matrix.protocols.get_major_slice_seq(a),clojure.core.matrix.protocols.get_major_slice_seq(m__$1)));
}
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36545_SHARP_){
return clojure.core.matrix.protocols.inner_product(p1__36545_SHARP_,a);
}),clojure.core.matrix.protocols.get_major_slice_seq(m__$1));

}
}
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$outer_product$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.element_map(m__$1,(function (v){
return clojure.core.matrix.protocols.pre_scale(a,v);
}));
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.matrix_multiply(m__$1,a);
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform_BANG_$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.assign_BANG_(a,clojure.core.matrix.protocols.matrix_multiply(m__$1,a));
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$scale$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$2((function (p1__36546_SHARP_){
return (p1__36546_SHARP_ * a);
}),m__$1);
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$pre_scale$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$2((function (p1__36547_SHARP_){
return (a * p1__36547_SHARP_);
}),m__$1);
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSquare$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSquare$square$arity$1 = (function (m){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,m__$1,m__$1);
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$swap_rows$arity$3 = (function (m,i,j){
var m__$1 = this;
var i__$1 = cljs.core.long$(i);
var j__$1 = cljs.core.long$(j);
if((i__$1 === j__$1)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,i__$1,(m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(j__$1) : m__$1.call(null,j__$1))),j__$1,(m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i__$1) : m__$1.call(null,i__$1)));
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$multiply_row$arity$3 = (function (m,i,factor){
var m__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,i,clojure.core.matrix.protocols.scale((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i) : m__$1.call(null,i)),factor));
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$add_row$arity$4 = (function (m,i,j,factor){
var m__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,i,clojure.core.matrix.protocols.matrix_add((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i) : m__$1.call(null,i)),clojure.core.matrix.protocols.matrix_multiply((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(j) : m__$1.call(null,j)),factor)));
}));
clojure.core.matrix.impl.persistent_vector.build_maths_function = (function clojure$core$matrix$impl$persistent_vector$build_maths_function(p__36549){
var vec__36550 = p__36549;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36550,(0),null);
var func = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36550,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"m","m",-1021758608,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.impl.common","mapmatrix","clojure.core.matrix.impl.common/mapmatrix",1588740294,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__36548__auto__","x__36548__auto__",-359954065,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,func,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__36548__auto__","x__36548__auto__",-359954065,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"m","m",-1021758608,null),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.count(m__$1))){
return (1);
} else {
return (cljs.core.long$(clojure.core.matrix.protocols.dimensionality(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(0)))) + (1));
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
var pv__35729__auto__ = m__$1;
return ((((0) === cljs.core.count(pv__35729__auto__))) || (((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pv__35729__auto__,(0)))))));
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
var c = cljs.core.count(m__$1);
return cljs.core.cons(c,(((c > (0)))?clojure.core.matrix.protocols.get_shape(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(0))):null));
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
var x__$1 = cljs.core.long$(x);
if((x__$1 === (0))){
return cljs.core.count(m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(0)),(x__$1 - (1)));
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PElementCount$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PElementCount$element_count$arity$1 = (function (m){
var m__$1 = this;
var c = cljs.core.long$(cljs.core.count(m__$1));
if((c === (0))){
return (0);
} else {
return (c * clojure.core.matrix.protocols.element_count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(0))));
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PConversion$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 = (function (m){
var m__$1 = this;
if(clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_(m__$1)){
return m__$1;
} else {
var m__$2 = clojure.core.matrix.impl.persistent_vector.mapv_identity_check(clojure.core.matrix.protocols.convert_to_nested_vectors,m__$1);
var m_shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_shape,m__$2);
if(cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.first(m_shapes)),cljs.core.rest(m_shapes))){
return m__$2;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't convert to persistent vector array: inconsistent shape.",cljs.core.PersistentArrayMap.EMPTY);
}
}
}));
/**
 * Copy an arbitrary array to a region of a double array.
 * Assumes size represents the element count of the array, must be greater than zero.
 */
clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_ = (function clojure$core$matrix$impl$persistent_vector$copy_to_double_array_BANG_(m,arr,off,size){
if(typeof m === 'number'){
if((size === (1))){
return (arr[off] = m);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid shape while copying to double array",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
if(cljs.core.vector_QMARK_(m)){
var m__$1 = m;
var ct = cljs.core.count(m__$1);
var skip = cljs.core.quot(size,ct);
var n__5636__auto__ = ct;
var i = (0);
while(true){
if((i < n__5636__auto__)){
var slc_36670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,i);
var G__36555_36671 = slc_36670;
var G__36556_36672 = arr;
var G__36557_36673 = (off + (i * skip));
var G__36558_36674 = skip;
(clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_.cljs$core$IFn$_invoke$arity$4(G__36555_36671,G__36556_36672,G__36557_36673,G__36558_36674) : clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_.call(null,G__36555_36671,G__36556_36672,G__36557_36673,G__36558_36674));

var G__36675 = (i + (1));
i = G__36675;
continue;
} else {
return null;
}
break;
}
} else {
var vals__28641__auto__ = cljs.core.seq(clojure.core.matrix.protocols.element_seq(m));
var i = cljs.core.long$((0));
while(true){
if(vals__28641__auto__){
var v = cljs.core.first(vals__28641__auto__);
(arr[(off + i)] = v);

var G__36676 = cljs.core.next(vals__28641__auto__);
var G__36677 = (i + (1));
vals__28641__auto__ = G__36676;
i = G__36677;
continue;
} else {
return null;
}
break;
}

}
}
});
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$to_double_array$arity$1 = (function (m){
var m__$1 = this;
var size = cljs.core.long$(clojure.core.matrix.protocols.element_count(m__$1));
var arr = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(size);
var ct = cljs.core.count(m__$1);
if((size > (0))){
clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_(m__$1,arr,(0),size);
} else {
}

return arr;
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$as_double_array$arity$1 = (function (m){
var m__$1 = this;
return null;
}));
clojure.core.matrix.impl.persistent_vector.copy_to_object_array = (function clojure$core$matrix$impl$persistent_vector$copy_to_object_array(m,arr,off,size){
var ct = cljs.core.count(m);
if((!(cljs.core.vector_QMARK_(m)))){
var vals__28641__auto___36678 = cljs.core.seq(clojure.core.matrix.protocols.element_seq(m));
var i_36679 = cljs.core.long$((0));
while(true){
if(vals__28641__auto___36678){
var v_36680 = cljs.core.first(vals__28641__auto___36678);
(arr[(off + i_36679)] = v_36680);

var G__36682 = cljs.core.next(vals__28641__auto___36678);
var G__36683 = (i_36679 + (1));
vals__28641__auto___36678 = G__36682;
i_36679 = G__36683;
continue;
} else {
}
break;
}
} else {
if((((size === ct)) && ((!(cljs.core.vector_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(m,(0),null))))))){
var n__5636__auto___36684 = size;
var i_36685 = (0);
while(true){
if((i_36685 < n__5636__auto___36684)){
(arr[(off + i_36685)] = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,i_36685));

var G__36686 = (i_36685 + (1));
i_36685 = G__36686;
continue;
} else {
}
break;
}
} else {
var skip_36687 = cljs.core.quot(size,ct);
var n__5636__auto___36688 = ct;
var i_36689 = (0);
while(true){
if((i_36689 < n__5636__auto___36688)){
var G__36559_36690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,i_36689);
var G__36560_36691 = arr;
var G__36561_36692 = (off + (i_36689 * skip_36687));
var G__36562_36693 = skip_36687;
(clojure.core.matrix.impl.persistent_vector.copy_to_object_array.cljs$core$IFn$_invoke$arity$4 ? clojure.core.matrix.impl.persistent_vector.copy_to_object_array.cljs$core$IFn$_invoke$arity$4(G__36559_36690,G__36560_36691,G__36561_36692,G__36562_36693) : clojure.core.matrix.impl.persistent_vector.copy_to_object_array.call(null,G__36559_36690,G__36560_36691,G__36561_36692,G__36562_36693));

var G__36694 = (i_36689 + (1));
i_36689 = G__36694;
continue;
} else {
}
break;
}

}
}

return arr;
});
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$to_object_array$arity$1 = (function (m){
var m__$1 = this;
var size = cljs.core.long$(clojure.core.matrix.protocols.element_count(m__$1));
var arr = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(size);
var ct = cljs.core.count(m__$1);
clojure.core.matrix.impl.persistent_vector.copy_to_object_array(m__$1,arr,(0),size);

return arr;
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$as_object_array$arity$1 = (function (m){
var m__$1 = this;
return null;
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.count(m__$1))){
return null;
} else {
if((cljs.core.long$(clojure.core.matrix.protocols.dimensionality(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(0)))) >= (1))){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.core.matrix.protocols.element_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));
} else {
return m__$1;

}
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$2 = (function (m,f){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$2(f,m__$1);
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$3 = (function (m,f,a){
var m__$1 = this;
var vec__36565 = clojure.core.matrix.protocols.broadcast_same_shape(m__$1,a);
var m__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36565,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36565,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3(f,m__$2,a__$1);
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var arrays = cljs.core.cons(m__$1,cljs.core.cons(a,more));
var shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_shape,arrays);
var sh = (function (){var or__5045__auto__ = clojure.core.matrix.protocols.common_shape(shapes);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Attempt to do element map with incompatible shapes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_shape,arrays))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var arrays__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36563_SHARP_){
return clojure.core.matrix.protocols.broadcast(p1__36563_SHARP_,sh);
}),arrays);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.impl.common.mapmatrix,f,arrays__$1);
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var seq__36568_36696 = cljs.core.seq(m__$1);
var chunk__36569_36697 = null;
var count__36570_36698 = (0);
var i__36571_36699 = (0);
while(true){
if((i__36571_36699 < count__36570_36698)){
var s_36700 = chunk__36569_36697.cljs$core$IIndexed$_nth$arity$2(null,i__36571_36699);
clojure.core.matrix.protocols.element_map_BANG_(s_36700,f);


var G__36701 = seq__36568_36696;
var G__36702 = chunk__36569_36697;
var G__36703 = count__36570_36698;
var G__36704 = (i__36571_36699 + (1));
seq__36568_36696 = G__36701;
chunk__36569_36697 = G__36702;
count__36570_36698 = G__36703;
i__36571_36699 = G__36704;
continue;
} else {
var temp__5804__auto___36705 = cljs.core.seq(seq__36568_36696);
if(temp__5804__auto___36705){
var seq__36568_36706__$1 = temp__5804__auto___36705;
if(cljs.core.chunked_seq_QMARK_(seq__36568_36706__$1)){
var c__5568__auto___36707 = cljs.core.chunk_first(seq__36568_36706__$1);
var G__36708 = cljs.core.chunk_rest(seq__36568_36706__$1);
var G__36709 = c__5568__auto___36707;
var G__36710 = cljs.core.count(c__5568__auto___36707);
var G__36711 = (0);
seq__36568_36696 = G__36708;
chunk__36569_36697 = G__36709;
count__36570_36698 = G__36710;
i__36571_36699 = G__36711;
continue;
} else {
var s_36712 = cljs.core.first(seq__36568_36706__$1);
clojure.core.matrix.protocols.element_map_BANG_(s_36712,f);


var G__36713 = cljs.core.next(seq__36568_36706__$1);
var G__36714 = null;
var G__36715 = (0);
var G__36716 = (0);
seq__36568_36696 = G__36713;
chunk__36569_36697 = G__36714;
count__36570_36698 = G__36715;
i__36571_36699 = G__36716;
continue;
}
} else {
}
}
break;
}

return m__$1;
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
var n__5636__auto___36717 = cljs.core.count(m__$1);
var i_36718 = (0);
while(true){
if((i_36718 < n__5636__auto___36717)){
clojure.core.matrix.protocols.element_map_BANG_((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i_36718) : m__$1.call(null,i_36718)),f,clojure.core.matrix.protocols.get_major_slice(a,i_36718));

var G__36719 = (i_36718 + (1));
i_36718 = G__36719;
continue;
} else {
}
break;
}

return m__$1;
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__5636__auto___36720 = cljs.core.count(m__$1);
var i_36721 = (0);
while(true){
if((i_36721 < n__5636__auto___36720)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$5(clojure.core.matrix.protocols.element_map_BANG_,(m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i_36721) : m__$1.call(null,i_36721)),f,clojure.core.matrix.protocols.get_major_slice(a,i_36721),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i_36721,n__5636__auto___36720,m__$1){
return (function (p1__36564_SHARP_){
return clojure.core.matrix.protocols.get_major_slice(p1__36564_SHARP_,i_36721);
});})(i_36721,n__5636__auto___36720,m__$1))
,more));

var G__36722 = (i_36721 + (1));
i_36721 = G__36722;
continue;
} else {
}
break;
}

return m__$1;
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$2 = (function (m,f){
var m__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(f,clojure.core.matrix.protocols.element_seq(m__$1));
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$3 = (function (m,f,init){
var m__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,init,clojure.core.matrix.protocols.element_seq(m__$1));
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$2 = (function (ms,f){
var ms__$1 = this;
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(ms__$1));
if(((0) === dims)){
var G__36591 = cljs.core.PersistentVector.EMPTY;
var G__36592 = (function (){var x__28676__auto__ = ms__$1;
if(typeof x__28676__auto__ === 'number'){
return x__28676__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__28676__auto__);

}
})();
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__36591,G__36592) : f.call(null,G__36591,G__36592));
} else {
if(((1) === dims)){
return cljs.core.vec((function (){var iter__5523__auto__ = (function clojure$core$matrix$impl$persistent_vector$iter__36593(s__36594){
return (new cljs.core.LazySeq(null,(function (){
var s__36594__$1 = s__36594;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__36594__$1);
if(temp__5804__auto__){
var s__36594__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36594__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36594__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36596 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36595 = (0);
while(true){
if((i__36595 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__36595);
cljs.core.chunk_append(b__36596,(function (){var G__36597 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null);
var G__36598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ms__$1,i);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__36597,G__36598) : f.call(null,G__36597,G__36598));
})());

var G__36724 = (i__36595 + (1));
i__36595 = G__36724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36596),clojure$core$matrix$impl$persistent_vector$iter__36593(cljs.core.chunk_rest(s__36594__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36596),null);
}
} else {
var i = cljs.core.first(s__36594__$2);
return cljs.core.cons((function (){var G__36599 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null);
var G__36600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ms__$1,i);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__36599,G__36600) : f.call(null,G__36599,G__36600));
})(),clojure$core$matrix$impl$persistent_vector$iter__36593(cljs.core.rest(s__36594__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)));
})());
} else {
return cljs.core.vec((function (){var iter__5523__auto__ = (function clojure$core$matrix$impl$persistent_vector$iter__36601(s__36602){
return (new cljs.core.LazySeq(null,(function (){
var s__36602__$1 = s__36602;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__36602__$1);
if(temp__5804__auto__){
var s__36602__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36602__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36602__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36604 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36603 = (0);
while(true){
if((i__36603 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__36603);
cljs.core.chunk_append(b__36604,clojure.core.matrix.protocols.element_map_indexed(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ms__$1,i),((function (i__36603,i,c__5521__auto__,size__5522__auto__,b__36604,s__36602__$2,temp__5804__auto__,dims,ms__$1){
return (function (p1__36572_SHARP_,p2__36573_SHARP_){
var G__36605 = cljs.core.cons(i,p1__36572_SHARP_);
var G__36606 = p2__36573_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__36605,G__36606) : f.call(null,G__36605,G__36606));
});})(i__36603,i,c__5521__auto__,size__5522__auto__,b__36604,s__36602__$2,temp__5804__auto__,dims,ms__$1))
));

var G__36726 = (i__36603 + (1));
i__36603 = G__36726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36604),clojure$core$matrix$impl$persistent_vector$iter__36601(cljs.core.chunk_rest(s__36602__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36604),null);
}
} else {
var i = cljs.core.first(s__36602__$2);
return cljs.core.cons(clojure.core.matrix.protocols.element_map_indexed(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ms__$1,i),((function (i,s__36602__$2,temp__5804__auto__,dims,ms__$1){
return (function (p1__36572_SHARP_,p2__36573_SHARP_){
var G__36607 = cljs.core.cons(i,p1__36572_SHARP_);
var G__36608 = p2__36573_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__36607,G__36608) : f.call(null,G__36607,G__36608));
});})(i,s__36602__$2,temp__5804__auto__,dims,ms__$1))
),clojure$core$matrix$impl$persistent_vector$iter__36601(cljs.core.rest(s__36602__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)));
})());

}
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$3 = (function (ms,f,as){
var ms__$1 = this;
var as__$1 = clojure.core.matrix.protocols.broadcast_like(ms__$1,as);
var dima = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(as__$1));
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_(ms__$1))){
if((dima > (1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("mapping with array of higher dimensionality?",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(((((1) === dima)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.dimension_count(ms__$1,(0)),clojure.core.matrix.protocols.dimension_count(as__$1,(0)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Incompatible vector sizes",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(((0) === dima)){
var v = (function (){var x__28676__auto__ = as__$1;
if(typeof x__28676__auto__ === 'number'){
return x__28676__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__28676__auto__);

}
})();
cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36574_SHARP_,p2__36575_SHARP_){
var G__36609 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36574_SHARP_], null);
var G__36610 = p2__36575_SHARP_;
var G__36611 = v;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__36609,G__36610,G__36611) : f.call(null,G__36609,G__36610,G__36611));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)));

return ms__$1;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function() { 
var G__36727__delegate = function (p1__36576_SHARP_,rest__36577_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36576_SHARP_], null),rest__36577_SHARP_);
};
var G__36727 = function (p1__36576_SHARP_,var_args){
var rest__36577_SHARP_ = null;
if (arguments.length > 1) {
var G__36728__i = 0, G__36728__a = new Array(arguments.length -  1);
while (G__36728__i < G__36728__a.length) {G__36728__a[G__36728__i] = arguments[G__36728__i + 1]; ++G__36728__i;}
  rest__36577_SHARP_ = new cljs.core.IndexedSeq(G__36728__a,0,null);
} 
return G__36727__delegate.call(this,p1__36576_SHARP_,rest__36577_SHARP_);};
G__36727.cljs$lang$maxFixedArity = 1;
G__36727.cljs$lang$applyTo = (function (arglist__36729){
var p1__36576_SHARP_ = cljs.core.first(arglist__36729);
var rest__36577_SHARP_ = cljs.core.rest(arglist__36729);
return G__36727__delegate(p1__36576_SHARP_,rest__36577_SHARP_);
});
G__36727.cljs$core$IFn$_invoke$arity$variadic = G__36727__delegate;
return G__36727;
})()
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)),ms__$1,clojure.core.matrix.protocols.element_seq(as__$1));
}
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (i,m,a){
return clojure.core.matrix.protocols.element_map_indexed(m,(function() { 
var G__36730__delegate = function (p1__36578_SHARP_,rest__36579_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cons(i,p1__36578_SHARP_),rest__36579_SHARP_);
};
var G__36730 = function (p1__36578_SHARP_,var_args){
var rest__36579_SHARP_ = null;
if (arguments.length > 1) {
var G__36731__i = 0, G__36731__a = new Array(arguments.length -  1);
while (G__36731__i < G__36731__a.length) {G__36731__a[G__36731__i] = arguments[G__36731__i + 1]; ++G__36731__i;}
  rest__36579_SHARP_ = new cljs.core.IndexedSeq(G__36731__a,0,null);
} 
return G__36730__delegate.call(this,p1__36578_SHARP_,rest__36579_SHARP_);};
G__36730.cljs$lang$maxFixedArity = 1;
G__36730.cljs$lang$applyTo = (function (arglist__36732){
var p1__36578_SHARP_ = cljs.core.first(arglist__36732);
var rest__36579_SHARP_ = cljs.core.rest(arglist__36732);
return G__36730__delegate(p1__36578_SHARP_,rest__36579_SHARP_);
});
G__36730.cljs$core$IFn$_invoke$arity$variadic = G__36730__delegate;
return G__36730;
})()
,a);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)),ms__$1,clojure.core.matrix.protocols.get_major_slice_seq(as__$1));
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$4 = (function (ms,f,as,more){
var ms__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_(ms__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapv,(function() { 
var G__36733__delegate = function (p1__36580_SHARP_,rest__36581_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36580_SHARP_], null),rest__36581_SHARP_);
};
var G__36733 = function (p1__36580_SHARP_,var_args){
var rest__36581_SHARP_ = null;
if (arguments.length > 1) {
var G__36734__i = 0, G__36734__a = new Array(arguments.length -  1);
while (G__36734__i < G__36734__a.length) {G__36734__a[G__36734__i] = arguments[G__36734__i + 1]; ++G__36734__i;}
  rest__36581_SHARP_ = new cljs.core.IndexedSeq(G__36734__a,0,null);
} 
return G__36733__delegate.call(this,p1__36580_SHARP_,rest__36581_SHARP_);};
G__36733.cljs$lang$maxFixedArity = 1;
G__36733.cljs$lang$applyTo = (function (arglist__36735){
var p1__36580_SHARP_ = cljs.core.first(arglist__36735);
var rest__36581_SHARP_ = cljs.core.rest(arglist__36735);
return G__36733__delegate(p1__36580_SHARP_,rest__36581_SHARP_);
});
G__36733.cljs$core$IFn$_invoke$arity$variadic = G__36733__delegate;
return G__36733;
})()
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)),ms__$1,as,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapv,(function() { 
var G__36736__delegate = function (i,m,a,mr){
return clojure.core.matrix.protocols.element_map_indexed(m,(function() { 
var G__36737__delegate = function (p1__36582_SHARP_,rest__36583_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cons(i,p1__36582_SHARP_),rest__36583_SHARP_);
};
var G__36737 = function (p1__36582_SHARP_,var_args){
var rest__36583_SHARP_ = null;
if (arguments.length > 1) {
var G__36738__i = 0, G__36738__a = new Array(arguments.length -  1);
while (G__36738__i < G__36738__a.length) {G__36738__a[G__36738__i] = arguments[G__36738__i + 1]; ++G__36738__i;}
  rest__36583_SHARP_ = new cljs.core.IndexedSeq(G__36738__a,0,null);
} 
return G__36737__delegate.call(this,p1__36582_SHARP_,rest__36583_SHARP_);};
G__36737.cljs$lang$maxFixedArity = 1;
G__36737.cljs$lang$applyTo = (function (arglist__36739){
var p1__36582_SHARP_ = cljs.core.first(arglist__36739);
var rest__36583_SHARP_ = cljs.core.rest(arglist__36739);
return G__36737__delegate(p1__36582_SHARP_,rest__36583_SHARP_);
});
G__36737.cljs$core$IFn$_invoke$arity$variadic = G__36737__delegate;
return G__36737;
})()
,a,mr);
};
var G__36736 = function (i,m,a,var_args){
var mr = null;
if (arguments.length > 3) {
var G__36740__i = 0, G__36740__a = new Array(arguments.length -  3);
while (G__36740__i < G__36740__a.length) {G__36740__a[G__36740__i] = arguments[G__36740__i + 3]; ++G__36740__i;}
  mr = new cljs.core.IndexedSeq(G__36740__a,0,null);
} 
return G__36736__delegate.call(this,i,m,a,mr);};
G__36736.cljs$lang$maxFixedArity = 3;
G__36736.cljs$lang$applyTo = (function (arglist__36741){
var i = cljs.core.first(arglist__36741);
arglist__36741 = cljs.core.next(arglist__36741);
var m = cljs.core.first(arglist__36741);
arglist__36741 = cljs.core.next(arglist__36741);
var a = cljs.core.first(arglist__36741);
var mr = cljs.core.rest(arglist__36741);
return G__36736__delegate(i,m,a,mr);
});
G__36736.cljs$core$IFn$_invoke$arity$variadic = G__36736__delegate;
return G__36736;
})()
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)),ms__$1,as,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0));
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var n__5636__auto___36742 = cljs.core.count(m__$1);
var i_36743 = (0);
while(true){
if((i_36743 < n__5636__auto___36742)){
clojure.core.matrix.protocols.element_map_indexed_BANG_((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i_36743) : m__$1.call(null,i_36743)),((function (i_36743,n__5636__auto___36742,m__$1){
return (function (p1__36584_SHARP_,p2__36585_SHARP_){
var G__36612 = cljs.core.cons(i_36743,p1__36584_SHARP_);
var G__36613 = p2__36585_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__36612,G__36613) : f.call(null,G__36612,G__36613));
});})(i_36743,n__5636__auto___36742,m__$1))
);

var G__36744 = (i_36743 + (1));
i_36743 = G__36744;
continue;
} else {
}
break;
}

return m__$1;
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
var n__5636__auto___36746 = cljs.core.count(m__$1);
var i_36747 = (0);
while(true){
if((i_36747 < n__5636__auto___36746)){
clojure.core.matrix.protocols.element_map_indexed_BANG_((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i_36747) : m__$1.call(null,i_36747)),((function (i_36747,n__5636__auto___36746,m__$1){
return (function() { 
var G__36748__delegate = function (p1__36586_SHARP_,rest__36587_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cons(i_36747,p1__36586_SHARP_),rest__36587_SHARP_);
};
var G__36748 = function (p1__36586_SHARP_,var_args){
var rest__36587_SHARP_ = null;
if (arguments.length > 1) {
var G__36749__i = 0, G__36749__a = new Array(arguments.length -  1);
while (G__36749__i < G__36749__a.length) {G__36749__a[G__36749__i] = arguments[G__36749__i + 1]; ++G__36749__i;}
  rest__36587_SHARP_ = new cljs.core.IndexedSeq(G__36749__a,0,null);
} 
return G__36748__delegate.call(this,p1__36586_SHARP_,rest__36587_SHARP_);};
G__36748.cljs$lang$maxFixedArity = 1;
G__36748.cljs$lang$applyTo = (function (arglist__36750){
var p1__36586_SHARP_ = cljs.core.first(arglist__36750);
var rest__36587_SHARP_ = cljs.core.rest(arglist__36750);
return G__36748__delegate(p1__36586_SHARP_,rest__36587_SHARP_);
});
G__36748.cljs$core$IFn$_invoke$arity$variadic = G__36748__delegate;
return G__36748;
})()
;})(i_36747,n__5636__auto___36746,m__$1))
,clojure.core.matrix.protocols.get_major_slice(a,i_36747));

var G__36751 = (i_36747 + (1));
i_36747 = G__36751;
continue;
} else {
}
break;
}

return m__$1;
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__5636__auto___36756 = cljs.core.count(m__$1);
var i_36761 = (0);
while(true){
if((i_36761 < n__5636__auto___36756)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$5(clojure.core.matrix.protocols.element_map_indexed_BANG_,(m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i_36761) : m__$1.call(null,i_36761)),((function (i_36761,n__5636__auto___36756,m__$1){
return (function() { 
var G__36766__delegate = function (p1__36588_SHARP_,rest__36589_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cons(i_36761,p1__36588_SHARP_),rest__36589_SHARP_);
};
var G__36766 = function (p1__36588_SHARP_,var_args){
var rest__36589_SHARP_ = null;
if (arguments.length > 1) {
var G__36770__i = 0, G__36770__a = new Array(arguments.length -  1);
while (G__36770__i < G__36770__a.length) {G__36770__a[G__36770__i] = arguments[G__36770__i + 1]; ++G__36770__i;}
  rest__36589_SHARP_ = new cljs.core.IndexedSeq(G__36770__a,0,null);
} 
return G__36766__delegate.call(this,p1__36588_SHARP_,rest__36589_SHARP_);};
G__36766.cljs$lang$maxFixedArity = 1;
G__36766.cljs$lang$applyTo = (function (arglist__36772){
var p1__36588_SHARP_ = cljs.core.first(arglist__36772);
var rest__36589_SHARP_ = cljs.core.rest(arglist__36772);
return G__36766__delegate(p1__36588_SHARP_,rest__36589_SHARP_);
});
G__36766.cljs$core$IFn$_invoke$arity$variadic = G__36766__delegate;
return G__36766;
})()
;})(i_36761,n__5636__auto___36756,m__$1))
,clojure.core.matrix.protocols.get_major_slice(a,i_36761),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i_36761,n__5636__auto___36756,m__$1){
return (function (p1__36590_SHARP_){
return clojure.core.matrix.protocols.get_major_slice(p1__36590_SHARP_,i_36761);
});})(i_36761,n__5636__auto___36756,m__$1))
,more));

var G__36775 = (i_36761 + (1));
i_36761 = G__36775;
continue;
} else {
}
break;
}

return m__$1;
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSelect$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSelect$select$arity$2 = (function (a,args){
var a__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),clojure.core.matrix.protocols.dimensionality(a__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36614_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a__$1,p1__36614_SHARP_);
}),cljs.core.first(args)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Array dimension does not match length of args",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36615_SHARP_){
return clojure.core.matrix.protocols.select(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a__$1,p1__36615_SHARP_),cljs.core.next(args));
}),cljs.core.first(args)));
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexImplementation$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexImplementation$index_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return true;
}));
clojure.core.matrix.implementations.register_implementation.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));

//# sourceMappingURL=clojure.core.matrix.impl.persistent_vector.js.map
