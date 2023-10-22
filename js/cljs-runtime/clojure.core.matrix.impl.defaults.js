goog.provide('clojure.core.matrix.impl.defaults');
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = null;
/**
 * Returns the total count of elements in an array
 */
clojure.core.matrix.impl.defaults.calc_element_count = (function clojure$core$matrix$impl$defaults$calc_element_count(m){
var temp__5802__auto__ = clojure.core.matrix.protocols.get_shape(m);
if(cljs.core.truth_(temp__5802__auto__)){
var sh = temp__5802__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,sh);
} else {
return (1);
}
});
/**
 * Constructs a new mutable matrix with the given data.
 */
clojure.core.matrix.impl.defaults.construct_mutable_matrix = (function clojure$core$matrix$impl$defaults$construct_mutable_matrix(m){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
var type = clojure.core.matrix.protocols.element_type(m);
var double_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Number,type);
if((dims === (0))){
return clojure.core.matrix.impl.wrappers.wrap_scalar(clojure.core.matrix.protocols.get_0d(m));
} else {
if((((dims === (1))) && (double_QMARK_))){
return clojure.core.matrix.protocols.coerce_param(clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"aljabr","aljabr",1424034715)),m);
} else {
if(double_QMARK_){
return clojure.core.matrix.protocols.coerce_param(clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"aljabr","aljabr",1424034715)),m);
} else {
return clojure.core.matrix.protocols.coerce_param(clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"aljabr","aljabr",1424034715)),m);

}
}
}
});
(clojure.core.matrix.protocols.PImplementation["object"] = true);

(clojure.core.matrix.protocols.implementation_key["object"] = (function (m){
return new cljs.core.Keyword(null,"default","default",-1987822328);
}));

(clojure.core.matrix.protocols.meta_info["object"] = (function (m){
return cljs.core.PersistentArrayMap.EMPTY;
}));

(clojure.core.matrix.protocols.construct_matrix["object"] = (function (m,data){
return clojure.core.matrix.protocols.construct_matrix(cljs.core.PersistentVector.EMPTY,data);
}));

(clojure.core.matrix.protocols.new_vector["object"] = (function (m,length){
return clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,length);
}));

(clojure.core.matrix.protocols.new_matrix["object"] = (function (m,rows,columns){
return clojure.core.matrix.protocols.new_matrix(cljs.core.PersistentVector.EMPTY,rows,columns);
}));

(clojure.core.matrix.protocols.new_matrix_nd["object"] = (function (m,shape){
return clojure.core.matrix.protocols.new_matrix_nd(cljs.core.PersistentVector.EMPTY,shape);
}));

(clojure.core.matrix.protocols.supports_dimensionality_QMARK_["object"] = (function (m,dimensions){
return true;
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var m__$1 = this;
return clojure.core.matrix.protocols.meta_info(clojure.core.matrix.implementations.get_canonical_object_or_throw(m__$1));
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var m__$1 = this;
return clojure.core.matrix.protocols.construct_matrix(clojure.core.matrix.implementations.get_canonical_object_or_throw(m__$1),data);
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector(clojure.core.matrix.implementations.get_canonical_object_or_throw(m__$1),length);
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix(clojure.core.matrix.implementations.get_canonical_object_or_throw(m__$1),rows,columns);
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,shape){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd(clojure.core.matrix.implementations.get_canonical_object_or_throw(m__$1),shape);
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dimensions){
var m__$1 = this;
return clojure.core.matrix.protocols.supports_dimensionality_QMARK_(clojure.core.matrix.implementations.get_canonical_object_or_throw(m__$1),dimensions);
}));
(clojure.core.matrix.protocols.PSparse["null"] = true);

(clojure.core.matrix.protocols.sparse_coerce["null"] = (function (m,data){
return clojure.core.matrix.protocols.sparse(data);
}));

(clojure.core.matrix.protocols.sparse["null"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.PSparse["object"] = true);

(clojure.core.matrix.protocols.sparse_coerce["object"] = (function (m,data){
return null;
}));

(clojure.core.matrix.protocols.sparse["object"] = (function (m){
return m;
}));
(clojure.core.matrix.protocols.PNative["null"] = true);

(clojure.core.matrix.protocols.native$["null"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.native_QMARK_["null"] = (function (m){
return false;
}));

(clojure.core.matrix.protocols.PNative["object"] = true);

(clojure.core.matrix.protocols.native$["object"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.native_QMARK_["object"] = (function (m){
return false;
}));
(clojure.core.matrix.protocols.PNewSparseArray["object"] = true);

(clojure.core.matrix.protocols.new_sparse_array["object"] = (function (m,shape){
return null;
}));
(clojure.core.matrix.protocols.PDense["null"] = true);

(clojure.core.matrix.protocols.dense_coerce["null"] = (function (m,data){
return clojure.core.matrix.protocols.dense(data);
}));

(clojure.core.matrix.protocols.dense["null"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.PDense["object"] = true);

(clojure.core.matrix.protocols.dense_coerce["object"] = (function (m,data){
return null;
}));

(clojure.core.matrix.protocols.dense["object"] = (function (m){
return m;
}));
(clojure.core.matrix.protocols.PIndexedAccess["null"] = true);

(clojure.core.matrix.protocols.get_1d["null"] = (function (m,x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 1D get on nil",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.get_2d["null"] = (function (m,x,y){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D get on nil",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.get_nd["null"] = (function (m,indexes){
var temp__5802__auto__ = cljs.core.seq(indexes);
if(temp__5802__auto__){
var s = temp__5802__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't do ND get on nil with indexes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
}));

(clojure.core.matrix.protocols.PIndexedAccess["number"] = true);

(clojure.core.matrix.protocols.get_1d["number"] = (function (m,x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 1D get on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.get_2d["number"] = (function (m,x,y){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D get on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.get_nd["number"] = (function (m,indexes){
var temp__5802__auto__ = cljs.core.seq(indexes);
if(temp__5802__auto__){
var s = temp__5802__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't do ND get on a scalar number with indexes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
}));

(clojure.core.matrix.protocols.PIndexedAccess["object"] = true);

(clojure.core.matrix.protocols.get_1d["object"] = (function (m,x){
if((Array === m.constructor)){
return clojure.core.matrix.protocols.get_0d(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,x));
} else {
return clojure.core.matrix.protocols.get_nd(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));

}
}));

(clojure.core.matrix.protocols.get_2d["object"] = (function (m,x,y){
if((Array === m.constructor)){
return clojure.core.matrix.protocols.get_1d(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,x),y);
} else {
return clojure.core.matrix.protocols.get_nd(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

}
}));

(clojure.core.matrix.protocols.get_nd["object"] = (function (m,indexes){
if(cljs.core.seq(indexes)){
if((Array === m.constructor)){
return clojure.core.matrix.protocols.get_nd(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(indexes)),cljs.core.next(indexes));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Indexed get failed, not defined for:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
} else {
return clojure.core.matrix.protocols.get_0d(m);
}
}));

(cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,x);
}));

(cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
if(cljs.core.seqable_QMARK_(cljs.core.first(m__$1))){
return clojure.core.matrix.protocols.get_1d(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,x),y);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D get on a lazy seq",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
if(cljs.core.seq(indexes)){
return clojure.core.matrix.protocols.get_nd(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.first(indexes)),cljs.core.next(indexes));
} else {
return clojure.core.matrix.protocols.get_0d(m__$1);
}
}));

(cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,x);
}));

(cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D get on a range",cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
if(cljs.core.seq(indexes)){
return clojure.core.matrix.protocols.get_nd(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.first(indexes)),cljs.core.next(indexes));
} else {
return clojure.core.matrix.protocols.get_0d(m__$1);
}
}));
(clojure.core.matrix.protocols.PArrayMetrics["null"] = true);

(clojure.core.matrix.protocols.nonzero_count["null"] = (function (m){
return (1);
}));

(clojure.core.matrix.protocols.PArrayMetrics["number"] = true);

(clojure.core.matrix.protocols.nonzero_count["number"] = (function (m){
if((m === (0))){
return (0);
} else {
return (1);
}
}));

(clojure.core.matrix.protocols.PArrayMetrics["object"] = true);

(clojure.core.matrix.protocols.nonzero_count["object"] = (function (m){
return clojure.core.matrix.protocols.element_reduce(m,(function (cnt,e){
if((e === (0))){
return cnt;
} else {
return (cnt + (1));
}
}),(0));
}));
(clojure.core.matrix.protocols.PZeroDimensionConstruction["null"] = true);

(clojure.core.matrix.protocols.new_scalar_array["null"] = (function() {
var G__33495 = null;
var G__33495__1 = (function (m){
return 0.0;
});
var G__33495__2 = (function (m,value){
return clojure.core.matrix.impl.wrappers.wrap_scalar(value);
});
G__33495 = function(m,value){
switch(arguments.length){
case 1:
return G__33495__1.call(this,m);
case 2:
return G__33495__2.call(this,m,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33495.cljs$core$IFn$_invoke$arity$1 = G__33495__1;
G__33495.cljs$core$IFn$_invoke$arity$2 = G__33495__2;
return G__33495;
})()
);

(clojure.core.matrix.protocols.PZeroDimensionConstruction["object"] = true);

(clojure.core.matrix.protocols.new_scalar_array["object"] = (function() {
var G__33496 = null;
var G__33496__1 = (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar(0.0);
});
var G__33496__2 = (function (m,value){
return clojure.core.matrix.impl.wrappers.wrap_scalar(value);
});
G__33496 = function(m,value){
switch(arguments.length){
case 1:
return G__33496__1.call(this,m);
case 2:
return G__33496__2.call(this,m,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33496.cljs$core$IFn$_invoke$arity$1 = G__33496__1;
G__33496.cljs$core$IFn$_invoke$arity$2 = G__33496__2;
return G__33496;
})()
);
(clojure.core.matrix.protocols.PZeroDimensionAccess["null"] = true);

(clojure.core.matrix.protocols.get_0d["null"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.set_0d_BANG_["null"] = (function (m,value){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't set the value of nil!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PZeroDimensionAccess["string"] = true);

(clojure.core.matrix.protocols.get_0d["string"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.set_0d_BANG_["string"] = (function (m,value){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't set a string value!",cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$get_0d$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$set_0d_BANG_$arity$2 = (function (m,value){
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't set a keyword!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PZeroDimensionAccess["number"] = true);

(clojure.core.matrix.protocols.get_0d["number"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.set_0d_BANG_["number"] = (function (m,value){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't set a scalar number!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PZeroDimensionAccess["object"] = true);

(clojure.core.matrix.protocols.get_0d["object"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.set_0d_BANG_["object"] = (function (m,value){
return clojure.core.matrix.protocols.set_nd_BANG_(m,cljs.core.PersistentVector.EMPTY,value);
}));
(clojure.core.matrix.protocols.PZeroDimensionSet["null"] = true);

(clojure.core.matrix.protocols.set_0d["null"] = (function (m,value){
return value;
}));

(clojure.core.matrix.protocols.PZeroDimensionSet["object"] = true);

(clojure.core.matrix.protocols.set_0d["object"] = (function (m,value){
return value;
}));
(clojure.core.matrix.protocols.PIndexedSetting["null"] = true);

(clojure.core.matrix.protocols.set_1d["null"] = (function (m,row,v){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 1D set on nil",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.set_2d["null"] = (function (m,row,column,v){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D set on nil",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.set_nd["null"] = (function (m,indexes,v){
if(cljs.core.seq(indexes)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't do ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(indexes)),"D set on nil"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return v;
}
}));

(clojure.core.matrix.protocols.is_mutable_QMARK_["null"] = (function (m){
return false;
}));

(clojure.core.matrix.protocols.PIndexedSetting["number"] = true);

(clojure.core.matrix.protocols.set_1d["number"] = (function (m,row,v){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 1D set on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.set_2d["number"] = (function (m,row,column,v){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D set on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.set_nd["number"] = (function (m,indexes,v){
if(cljs.core.seq(indexes)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't do ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(indexes)),"D set on a scalar number"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return v;
}
}));

(clojure.core.matrix.protocols.is_mutable_QMARK_["number"] = (function (m){
return false;
}));

(clojure.core.matrix.protocols.PIndexedSetting["object"] = true);

(clojure.core.matrix.protocols.set_1d["object"] = (function (m,row,v){
var m__$1 = clojure.core.matrix.protocols.clone(m);
clojure.core.matrix.protocols.set_1d_BANG_(m__$1,row,v);

return m__$1;
}));

(clojure.core.matrix.protocols.set_2d["object"] = (function (m,row,column,v){
var m__$1 = clojure.core.matrix.protocols.clone(m);
clojure.core.matrix.protocols.set_2d_BANG_(m__$1,row,column,v);

return m__$1;
}));

(clojure.core.matrix.protocols.set_nd["object"] = (function (m,indexes,v){
var m__$1 = clojure.core.matrix.protocols.clone(m);
clojure.core.matrix.protocols.set_nd_BANG_(m__$1,indexes,v);

return m__$1;
}));

(clojure.core.matrix.protocols.is_mutable_QMARK_["object"] = (function (m){
return true;
}));
(clojure.core.matrix.protocols.PNumerical["number"] = true);

(clojure.core.matrix.protocols.numerical_QMARK_["number"] = (function (m){
return true;
}));

(clojure.core.matrix.protocols.PNumerical["null"] = true);

(clojure.core.matrix.protocols.numerical_QMARK_["null"] = (function (m){
return false;
}));

(clojure.core.matrix.protocols.PNumerical["object"] = true);

(clojure.core.matrix.protocols.numerical_QMARK_["object"] = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_(m))){
return false;
} else {
return cljs.core.every_QMARK_(cljs.core.number_QMARK_,clojure.core.matrix.protocols.element_seq(m));
}
}));
(clojure.core.matrix.protocols.PVectorOps["number"] = true);

(clojure.core.matrix.protocols.vector_dot["number"] = (function (a,b){
return clojure.core.matrix.protocols.pre_scale(b,a);
}));

(clojure.core.matrix.protocols.length["number"] = (function (a){
return Math.abs(a);
}));

(clojure.core.matrix.protocols.length_squared["number"] = (function (a){
var a__$1 = a;
return (a__$1 * a__$1);
}));

(clojure.core.matrix.protocols.normalise["number"] = (function (a){
var a__$1 = a;
if((a__$1 > 0.0)){
return 1.0;
} else {
if((a__$1 < 0.0)){
return -1.0;
} else {
return 0.0;

}
}
}));

(clojure.core.matrix.protocols.PVectorOps["object"] = true);

(clojure.core.matrix.protocols.vector_dot["object"] = (function (a,b){
if(((((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a)))) && (((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)))))){
return clojure.core.matrix.protocols.element_sum(clojure.core.matrix.protocols.element_multiply(a,b));
} else {
return null;
}
}));

(clojure.core.matrix.protocols.length["object"] = (function (a){
return Math.sqrt(clojure.core.matrix.protocols.length_squared(a));
}));

(clojure.core.matrix.protocols.length_squared["object"] = (function (a){
return clojure.core.matrix.protocols.element_reduce(a,(function (r,x){
return (r + (x * x));
}),0.0);
}));

(clojure.core.matrix.protocols.normalise["object"] = (function (a){
return clojure.core.matrix.protocols.scale(a,(1.0 / Math.sqrt(clojure.core.matrix.protocols.length_squared(a))));
}));
(clojure.core.matrix.protocols.PVectorDistance["number"] = true);

(clojure.core.matrix.protocols.distance["number"] = (function (a,b){
if(typeof b === 'number'){
return Math.abs((b - a));
} else {
return clojure.core.matrix.protocols.distance(b,a);
}
}));

(clojure.core.matrix.protocols.PVectorDistance["object"] = true);

(clojure.core.matrix.protocols.distance["object"] = (function (a,b){
return clojure.core.matrix.protocols.length(clojure.core.matrix.protocols.matrix_sub(a,b));
}));
(clojure.core.matrix.protocols.PVectorCross["object"] = true);

(clojure.core.matrix.protocols.cross_product["object"] = (function (a,b){
var x1 = clojure.core.matrix.protocols.get_1d(a,(0));
var y1 = clojure.core.matrix.protocols.get_1d(a,(1));
var z1 = clojure.core.matrix.protocols.get_1d(a,(2));
var x2 = clojure.core.matrix.protocols.get_1d(b,(0));
var y2 = clojure.core.matrix.protocols.get_1d(b,(1));
var z2 = clojure.core.matrix.protocols.get_1d(b,(2));
return clojure.core.matrix.protocols.construct_matrix(a,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((y1 * z2) - (z1 * y2)),((z1 * x2) - (x1 * z2)),((x1 * y2) - (y1 * x2))], null));
}));

(clojure.core.matrix.protocols.cross_product_BANG_["object"] = (function (a,b){
var x1 = clojure.core.matrix.protocols.get_1d(a,(0));
var y1 = clojure.core.matrix.protocols.get_1d(a,(1));
var z1 = clojure.core.matrix.protocols.get_1d(a,(2));
var x2 = clojure.core.matrix.protocols.get_1d(b,(0));
var y2 = clojure.core.matrix.protocols.get_1d(b,(1));
var z2 = clojure.core.matrix.protocols.get_1d(b,(2));
clojure.core.matrix.protocols.set_1d_BANG_(a,(0),((y1 * z2) - (z1 * y2)));

clojure.core.matrix.protocols.set_1d_BANG_(a,(1),((z1 * x2) - (x1 * z2)));

clojure.core.matrix.protocols.set_1d_BANG_(a,(2),((x1 * y2) - (y1 * x2)));

return a;
}));
(clojure.core.matrix.protocols.PMutableVectorOps["object"] = true);

(clojure.core.matrix.protocols.normalise_BANG_["object"] = (function (a){
return clojure.core.matrix.protocols.scale_BANG_(a,(1.0 / Math.sqrt(clojure.core.matrix.protocols.length_squared(a))));
}));
(clojure.core.matrix.protocols.PAssignment["object"] = true);

(clojure.core.matrix.protocols.assign_BANG_["object"] = (function (m,x){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
if(((0) === dims)){
return clojure.core.matrix.protocols.set_0d_BANG_(m,clojure.core.matrix.protocols.get_0d(x));
} else {
if(((1) === dims)){
if((x instanceof cljs.core.ISeq)){
var x__$1 = cljs.core.seq(x);
var msize = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
var i = (0);
var s = cljs.core.seq(x__$1);
while(true){
if((i >= msize)){
if(s){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mismatches size of sequence in assign!",cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
} else {
clojure.core.matrix.protocols.set_1d_BANG_(m,i,cljs.core.first(s));

var G__33525 = (i + (1));
var G__33526 = cljs.core.next(s);
i = G__33525;
s = G__33526;
continue;
}
break;
}
} else {
var xdims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(x));
var msize = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
if(((0) === xdims)){
var value = clojure.core.matrix.protocols.get_0d(x);
var n__5636__auto__ = msize;
var i = (0);
while(true){
if((i < n__5636__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_(m,i,value);

var G__33527 = (i + (1));
i = G__33527;
continue;
} else {
return null;
}
break;
}
} else {
if(((1) === xdims)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(msize,cljs.core.long$(clojure.core.matrix.protocols.dimension_count(x,(0))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Mismatched shapes in assign to array of shape: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape(m))," with argument of shape: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape(x))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__5636__auto__ = msize;
var i = (0);
while(true){
if((i < n__5636__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_(m,i,clojure.core.matrix.protocols.get_1d(x,i));

var G__33528 = (i + (1));
i = G__33528;
continue;
} else {
return null;
}
break;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't assign! with an argument of higher dimensionality",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
} else {
if(cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(m))){
var xdims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(x));
if((dims === xdims)){
var xss = clojure.core.matrix.protocols.get_major_slice_seq(x);
var _ = (function (){var or__5045__auto__ = clojure.core.matrix.protocols.same_shapes_QMARK_(xss);
if(or__5045__auto__){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Inconsistent slice shapes for assign!",cljs.core.PersistentArrayMap.EMPTY);
}
})();
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return clojure.core.matrix.protocols.assign_BANG_(a,b);
}),clojure.core.matrix.protocols.get_major_slice_view_seq(m),xss));
} else {
var seq__32929 = cljs.core.seq(clojure.core.matrix.protocols.get_major_slice_view_seq(m));
var chunk__32930 = null;
var count__32931 = (0);
var i__32932 = (0);
while(true){
if((i__32932 < count__32931)){
var ms = chunk__32930.cljs$core$IIndexed$_nth$arity$2(null,i__32932);
clojure.core.matrix.protocols.assign_BANG_(ms,x);


var G__33531 = seq__32929;
var G__33532 = chunk__32930;
var G__33533 = count__32931;
var G__33534 = (i__32932 + (1));
seq__32929 = G__33531;
chunk__32930 = G__33532;
count__32931 = G__33533;
i__32932 = G__33534;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32929);
if(temp__5804__auto__){
var seq__32929__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32929__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32929__$1);
var G__33535 = cljs.core.chunk_rest(seq__32929__$1);
var G__33536 = c__5568__auto__;
var G__33537 = cljs.core.count(c__5568__auto__);
var G__33538 = (0);
seq__32929 = G__33535;
chunk__32930 = G__33536;
count__32931 = G__33537;
i__32932 = G__33538;
continue;
} else {
var ms = cljs.core.first(seq__32929__$1);
clojure.core.matrix.protocols.assign_BANG_(ms,x);


var G__33539 = cljs.core.next(seq__32929__$1);
var G__33540 = null;
var G__33541 = (0);
var G__33542 = (0);
seq__32929 = G__33539;
chunk__32930 = G__33540;
count__32931 = G__33541;
i__32932 = G__33542;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't assign to a non-array object: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}));

(clojure.core.matrix.protocols.assign_array_BANG_["object"] = (function() {
var G__33544 = null;
var G__33544__2 = (function (m,arr){
var alen = cljs.core.long$(cljs.core.count(arr));
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_(m))){
var n__5636__auto__ = alen;
var i = (0);
while(true){
if((i < n__5636__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_(m,i,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arr,i));

var G__33546 = (i + (1));
i = G__33546;
continue;
} else {
return null;
}
break;
}
} else {
return clojure.core.matrix.protocols.assign_array_BANG_(m,arr,(0),alen);
}
});
var G__33544__4 = (function (m,arr,start,length){
var length__$1 = cljs.core.long$(length);
var start__$1 = cljs.core.long$(start);
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_(m))){
var n__5636__auto__ = length__$1;
var i = (0);
while(true){
if((i < n__5636__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_(m,i,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arr,(start__$1 + i)));

var G__33549 = (i + (1));
i = G__33549;
continue;
} else {
return null;
}
break;
}
} else {
var ss = cljs.core.seq(clojure.core.matrix.protocols.get_major_slice_seq(m));
var skip = cljs.core.long$(((ss)?clojure.core.matrix.impl.defaults.calc_element_count(cljs.core.first(clojure.core.matrix.protocols.get_major_slice_seq(m))):(0)));
var vals__19444__auto__ = cljs.core.seq(ss);
var i = cljs.core.long$((0));
while(true){
if(vals__19444__auto__){
var s = cljs.core.first(vals__19444__auto__);
clojure.core.matrix.protocols.assign_array_BANG_(s,arr,(start__$1 + (skip * i)),skip);

var G__33553 = cljs.core.next(vals__19444__auto__);
var G__33554 = (i + (1));
vals__19444__auto__ = G__33553;
i = G__33554;
continue;
} else {
return null;
}
break;
}
}
});
G__33544 = function(m,arr,start,length){
switch(arguments.length){
case 2:
return G__33544__2.call(this,m,arr);
case 4:
return G__33544__4.call(this,m,arr,start,length);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33544.cljs$core$IFn$_invoke$arity$2 = G__33544__2;
G__33544.cljs$core$IFn$_invoke$arity$4 = G__33544__4;
return G__33544;
})()
);
(clojure.core.matrix.protocols.PImmutableAssignment["null"] = true);

(clojure.core.matrix.protocols.assign["null"] = (function (m,source){
var r = clojure.core.matrix.protocols.broadcast_coerce(m,source);
if((r === source)){
return clojure.core.matrix.protocols.clone(r);
} else {
return r;
}
}));

(clojure.core.matrix.protocols.PImmutableAssignment["number"] = true);

(clojure.core.matrix.protocols.assign["number"] = (function (m,source){
return source;
}));

(clojure.core.matrix.protocols.PImmutableAssignment["object"] = true);

(clojure.core.matrix.protocols.assign["object"] = (function (m,source){
var r = clojure.core.matrix.protocols.broadcast_coerce(m,source);
if((r === source)){
return clojure.core.matrix.protocols.clone(r);
} else {
return r;
}
}));
(clojure.core.matrix.protocols.PMutableFill["object"] = true);

(clojure.core.matrix.protocols.fill_BANG_["object"] = (function (m,value){
return clojure.core.matrix.protocols.assign_BANG_(m,value);
}));
(clojure.core.matrix.protocols.PMatrixCloning["null"] = true);

(clojure.core.matrix.protocols.clone["null"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.PMatrixCloning["number"] = true);

(clojure.core.matrix.protocols.clone["number"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.PMatrixCloning["object"] = true);

(clojure.core.matrix.protocols.clone["object"] = (function (m){
return clojure.core.matrix.protocols.construct_matrix(m,m);
}));
(clojure.core.matrix.protocols.PSparseArray["object"] = true);

(clojure.core.matrix.protocols.is_sparse_QMARK_["object"] = (function (m){
return false;
}));
(clojure.core.matrix.protocols.PImmutableMatrixConstruction["null"] = true);

(clojure.core.matrix.protocols.immutable_matrix["null"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.PImmutableMatrixConstruction["object"] = true);

(clojure.core.matrix.protocols.immutable_matrix["object"] = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_(m))){
return clojure.core.matrix.protocols.convert_to_nested_vectors(m);
} else {
return m;
}
}));
(clojure.core.matrix.protocols.PZeroCount["null"] = true);

(clojure.core.matrix.protocols.zero_count["null"] = (function (m){
return (0);
}));

(clojure.core.matrix.protocols.PZeroCount["number"] = true);

(clojure.core.matrix.protocols.zero_count["number"] = (function (m){
if((m === (0))){
return (1);
} else {
return (0);
}
}));

(clojure.core.matrix.protocols.PZeroCount["object"] = true);

(clojure.core.matrix.protocols.zero_count["object"] = (function (m){
return clojure.core.matrix.protocols.element_reduce(m,(function (acc,e){
if((e === (0))){
return (acc + (1));
} else {
return acc;
}
}),(0));
}));
(clojure.core.matrix.protocols.PMutableMatrixConstruction["null"] = true);

(clojure.core.matrix.protocols.mutable_matrix["null"] = (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar(m);
}));

(clojure.core.matrix.protocols.PMutableMatrixConstruction["number"] = true);

(clojure.core.matrix.protocols.mutable_matrix["number"] = (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar(m);
}));

(clojure.core.matrix.protocols.PMutableMatrixConstruction["object"] = true);

(clojure.core.matrix.protocols.mutable_matrix["object"] = (function (m){
return clojure.core.matrix.impl.defaults.construct_mutable_matrix(m);
}));
(clojure.core.matrix.protocols.PMutableCoercion["null"] = true);

(clojure.core.matrix.protocols.ensure_mutable["null"] = (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar(m);
}));

(clojure.core.matrix.protocols.PMutableCoercion["number"] = true);

(clojure.core.matrix.protocols.ensure_mutable["number"] = (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar(m);
}));

(clojure.core.matrix.protocols.PMutableCoercion["object"] = true);

(clojure.core.matrix.protocols.ensure_mutable["object"] = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_(m))){
return m;
} else {
return clojure.core.matrix.impl.defaults.construct_mutable_matrix(m);
}
}));
(clojure.core.matrix.protocols.PComputeMatrix["object"] = true);

(clojure.core.matrix.protocols.compute_matrix["object"] = (function (m,shape,f){
var m__$1 = clojure.core.matrix.protocols.new_matrix_nd(m,shape);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$2,ix){
return clojure.core.matrix.protocols.set_nd(m__$2,ix,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,ix));
}),m__$1,clojure.core.matrix.utils.base_index_seq_for_shape(shape));
}));
(clojure.core.matrix.protocols.PDimensionInfo["null"] = true);

(clojure.core.matrix.protocols.dimensionality["null"] = (function (m){
return (0);
}));

(clojure.core.matrix.protocols.is_scalar_QMARK_["null"] = (function (m){
return true;
}));

(clojure.core.matrix.protocols.is_vector_QMARK_["null"] = (function (m){
return false;
}));

(clojure.core.matrix.protocols.get_shape["null"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.dimension_count["null"] = (function (m,i){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["nil has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)) + (1));
}));

(cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)));
}));

(cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
}));

(cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons(cljs.core.count(m__$1),clojure.core.matrix.protocols.get_shape(cljs.core.first(m__$1)));
}));

(cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count(m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.first(m__$1),(x - (1)));
}
}));

(clojure.core.matrix.protocols.PDimensionInfo["object"] = true);

(clojure.core.matrix.protocols.dimensionality["object"] = (function (m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,cljs.core.type(m))){
var n = cljs.core.long$(cljs.core.count(m));
if((n > (0))){
return (cljs.core.long$(clojure.core.matrix.protocols.dimensionality(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(0)))) + (1));
} else {
return (1);
}
} else {
return (0);

}
}));

(clojure.core.matrix.protocols.is_vector_QMARK_["object"] = (function (m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,cljs.core.type(m))){
var n = cljs.core.long$(cljs.core.count(m));
return (((n === (0))) || (((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(0)))))));
} else {
return false;

}
}));

(clojure.core.matrix.protocols.is_scalar_QMARK_["object"] = (function (m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,cljs.core.type(m))){
return false;
} else {
return true;

}
}));

(clojure.core.matrix.protocols.get_shape["object"] = (function (m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,cljs.core.type(m))){
var n = cljs.core.count(m);
if((n === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null);
} else {
return cljs.core.cons(n,clojure.core.matrix.protocols.get_shape(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(0))));
}
} else {
return null;

}
}));

(clojure.core.matrix.protocols.dimension_count["object"] = (function (m,i){
var i__$1 = cljs.core.long$(i);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,cljs.core.type(m))){
if((i__$1 === (0))){
return cljs.core.count(m);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(0)),(i__$1 - (1)));
}
} else {
if(((0) === i__$1)){
return cljs.core.count(m);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't determine count of dimension ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__$1)," on Object: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}));

(cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)) + (1));
}));

(cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)));
}));

(cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
}));

(cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons(cljs.core.count(m__$1),clojure.core.matrix.protocols.get_shape(cljs.core.first(m__$1)));
}));

(cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count(m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.first(m__$1),(x - (1)));
}
}));

(cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)) + (1));
}));

(cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)));
}));

(cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
}));

(cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons(cljs.core.count(m__$1),clojure.core.matrix.protocols.get_shape(cljs.core.first(m__$1)));
}));

(cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count(m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.first(m__$1),(x - (1)));
}
}));

(clojure.core.matrix.protocols.PDimensionInfo["number"] = true);

(clojure.core.matrix.protocols.dimensionality["number"] = (function (m){
return (0);
}));

(clojure.core.matrix.protocols.is_scalar_QMARK_["number"] = (function (m){
return true;
}));

(clojure.core.matrix.protocols.is_vector_QMARK_["number"] = (function (m){
return false;
}));

(clojure.core.matrix.protocols.get_shape["number"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.dimension_count["number"] = (function (m,i){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Number has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)) + (1));
}));

(cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)));
}));

(cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
}));

(cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons(cljs.core.count(m__$1),clojure.core.matrix.protocols.get_shape(cljs.core.first(m__$1)));
}));

(cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count(m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.first(m__$1),(x - (1)));
}
}));

(clojure.core.matrix.protocols.PDimensionInfo["string"] = true);

(clojure.core.matrix.protocols.dimensionality["string"] = (function (m){
return (0);
}));

(clojure.core.matrix.protocols.is_scalar_QMARK_["string"] = (function (m){
return true;
}));

(clojure.core.matrix.protocols.is_vector_QMARK_["string"] = (function (m){
return false;
}));

(clojure.core.matrix.protocols.get_shape["string"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.dimension_count["string"] = (function (m,i){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["String has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)) + (1));
}));

(cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)));
}));

(cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
}));

(cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons(cljs.core.count(m__$1),clojure.core.matrix.protocols.get_shape(cljs.core.first(m__$1)));
}));

(cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count(m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.first(m__$1),(x - (1)));
}
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (0);
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return true;
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return null;
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,i){
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Keyword has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));
(clojure.core.matrix.protocols.PSameShape["null"] = true);

(clojure.core.matrix.protocols.same_shape_QMARK_["null"] = (function (a,b){
return ((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)));
}));

(clojure.core.matrix.protocols.PSameShape["string"] = true);

(clojure.core.matrix.protocols.same_shape_QMARK_["string"] = (function (a,b){
return ((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)));
}));

(clojure.core.matrix.protocols.PSameShape["number"] = true);

(clojure.core.matrix.protocols.same_shape_QMARK_["number"] = (function (a,b){
return ((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)));
}));

(clojure.core.matrix.protocols.PSameShape["object"] = true);

(clojure.core.matrix.protocols.same_shape_QMARK_["object"] = (function (a,b){
return clojure.core.matrix.utils.same_shape_object_QMARK_(clojure.core.matrix.protocols.get_shape(a),clojure.core.matrix.protocols.get_shape(b));
}));
(clojure.core.matrix.protocols.PMatrixOps["null"] = true);

(clojure.core.matrix.protocols.trace["null"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.PMatrixOps["number"] = true);

(clojure.core.matrix.protocols.trace["number"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.inverse["number"] = (function (m){
return ((1) / m);
}));

(clojure.core.matrix.protocols.PMatrixOps["object"] = true);

(clojure.core.matrix.protocols.trace["object"] = (function (m){
if(((2) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Trace requires a 2D matrix",cljs.core.PersistentArrayMap.EMPTY);
}

var rc = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
var cc = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(1)));
var dims = Math.min(rc,cc);
var i = (0);
var res = 0.0;
while(true){
if((i >= dims)){
return res;
} else {
var G__33583 = (i + (1));
var G__33584 = (res + clojure.core.matrix.protocols.get_2d(m,i,i));
i = G__33583;
res = G__33584;
continue;
}
break;
}
}));

(clojure.core.matrix.protocols.determinant["object"] = (function (m){
var imp = (function (){var or__5045__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vectorz","vectorz",1550942815));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("(let Need to load an implementation which supports determinant, e.g. vectorz-clj",cljs.core.PersistentArrayMap.EMPTY);
}
})();
var m__$1 = clojure.core.matrix.protocols.coerce_param(imp,m);
return clojure.core.matrix.protocols.determinant(m__$1);
}));

(clojure.core.matrix.protocols.inverse["object"] = (function (m){
var imp = (function (){var or__5045__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vectorz","vectorz",1550942815));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Need to load an implementation which supports inverse, e.g. vectorz-clj",cljs.core.PersistentArrayMap.EMPTY);
}
})();
var mm = clojure.core.matrix.protocols.coerce_param(imp,m);
return clojure.core.matrix.protocols.coerce_param(m,clojure.core.matrix.protocols.inverse(mm));
}));
(clojure.core.matrix.protocols.PTranspose["null"] = true);

(clojure.core.matrix.protocols.transpose["null"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.PTranspose["number"] = true);

(clojure.core.matrix.protocols.transpose["number"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.PTranspose["object"] = true);

(clojure.core.matrix.protocols.transpose["object"] = (function (m){
return clojure.core.matrix.protocols.coerce_param(m,(function (){var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
var G__32998 = dims;
switch (G__32998) {
case (0):
return m;

break;
case (1):
return m;

break;
case (2):
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,clojure.core.matrix.protocols.convert_to_nested_vectors(m));

break;
default:
return clojure.core.matrix.protocols.transpose_dims(m,cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$1(dims)));

}
})());
}));
(clojure.core.matrix.protocols.PTransposeDims["null"] = true);

(clojure.core.matrix.protocols.transpose_dims["null"] = (function (m,ordering){
return m;
}));

(clojure.core.matrix.protocols.PTransposeDims["number"] = true);

(clojure.core.matrix.protocols.transpose_dims["number"] = (function (m,ordering){
return m;
}));

(clojure.core.matrix.protocols.PTransposeDims["object"] = true);

(clojure.core.matrix.protocols.transpose_dims["object"] = (function (m,ordering){
return clojure.core.matrix.protocols.transpose_dims(clojure.core.matrix.protocols.convert_to_nested_vectors(m),ordering);
}));
(clojure.core.matrix.protocols.PTransposeInPlace["object"] = true);

(clojure.core.matrix.protocols.transpose_BANG_["object"] = (function (m){
var n_33590 = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n_33590,cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(1))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("transpose! requires a quare matrix",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__5636__auto___33593 = n_33590;
var i_33594 = (0);
while(true){
if((i_33594 < n__5636__auto___33593)){
var n__5636__auto___33595__$1 = i_33594;
var j_33597 = (0);
while(true){
if((j_33597 < n__5636__auto___33595__$1)){
var t_33598 = clojure.core.matrix.protocols.get_2d(m,i_33594,j_33597);
clojure.core.matrix.protocols.set_2d_BANG_(m,i_33594,j_33597,clojure.core.matrix.protocols.get_2d(m,j_33597,i_33594));

clojure.core.matrix.protocols.set_2d_BANG_(m,j_33597,i_33594,t_33598);

var G__33599 = (j_33597 + (1));
j_33597 = G__33599;
continue;
} else {
}
break;
}

var G__33600 = (i_33594 + (1));
i_33594 = G__33600;
continue;
} else {
}
break;
}

return m;
}));
(clojure.core.matrix.protocols.PRotate["null"] = true);

(clojure.core.matrix.protocols.rotate["null"] = (function (m,dim,places){
return null;
}));

(clojure.core.matrix.protocols.PRotate["number"] = true);

(clojure.core.matrix.protocols.rotate["number"] = (function (m,dim,places){
return m;
}));

(clojure.core.matrix.protocols.PRotate["object"] = true);

(clojure.core.matrix.protocols.rotate["object"] = (function (m,dim,places){
var dim__$1 = cljs.core.long$(dim);
var places__$1 = cljs.core.long$(places);
if((cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)) <= (0))){
return m;
} else {
if(((0) === dim__$1)){
var ss = clojure.core.matrix.protocols.get_major_slice_seq(m);
var c = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
var sh = cljs.core.long$((((c > (0)))?cljs.core.long$(cljs.core.mod(places__$1,c)):(0)));
if((sh === (0))){
return m;
} else {
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take_last((c - sh),ss),cljs.core.take.cljs$core$IFn$_invoke$arity$2(sh,ss)));
}
} else {
return clojure.core.matrix.protocols.rotate(clojure.core.matrix.protocols.convert_to_nested_vectors(m),dim__$1,places__$1);

}
}
}));
(clojure.core.matrix.protocols.PRotateAll["null"] = true);

(clojure.core.matrix.protocols.rotate_all["null"] = (function (m,shifts){
return null;
}));

(clojure.core.matrix.protocols.PRotateAll["number"] = true);

(clojure.core.matrix.protocols.rotate_all["number"] = (function (m,shifts){
return m;
}));

(clojure.core.matrix.protocols.PRotateAll["object"] = true);

(clojure.core.matrix.protocols.rotate_all["object"] = (function (m,shifts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__33001){
var vec__33002 = p__33001;
var dim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33002,(0),null);
var shift = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33002,(1),null);
if((shift === (0))){
return m__$1;
} else {
return clojure.core.matrix.protocols.rotate(m__$1,dim,shift);
}
}),m,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
}),shifts));
}));
(clojure.core.matrix.protocols.PShift["object"] = true);

(clojure.core.matrix.protocols.shift["object"] = (function (m,dim,shift){
var shift__$1 = cljs.core.long$(shift);
var z = clojure.core.matrix.protocols.generic_zero(m);
var c = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,dim));
var sh = cljs.core.vec(clojure.core.matrix.protocols.get_shape(m));
if((shift__$1 === (0))){
return m;
} else {
if((shift__$1 >= c)){
return clojure.core.matrix.protocols.broadcast_coerce(m,z);
} else {
if((shift__$1 <= (- c))){
return clojure.core.matrix.protocols.broadcast_coerce(m,z);
} else {
if((shift__$1 < (0))){
return clojure.core.matrix.protocols.join_along(clojure.core.matrix.protocols.broadcast(clojure.core.matrix.protocols.construct_matrix(m,z),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sh,dim,(- shift__$1))),clojure.core.matrix.protocols.submatrix(m,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(sh),(0))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sh,dim,(c + shift__$1)))),dim);
} else {
if((shift__$1 > (0))){
return clojure.core.matrix.protocols.join_along(clojure.core.matrix.protocols.submatrix(m,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(sh),(0))),dim,shift__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sh,dim,(c - shift__$1)))),clojure.core.matrix.protocols.broadcast(clojure.core.matrix.protocols.construct_matrix(m,z),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sh,dim,shift__$1)),dim);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Shouldn't be possible!!",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
}));

(clojure.core.matrix.protocols.shift_all["object"] = (function (m,shifts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__33007){
var vec__33008 = p__33007;
var dim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33008,(0),null);
var shift = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33008,(1),null);
if((shift === (0))){
return m__$1;
} else {
return clojure.core.matrix.protocols.shift(m__$1,dim,shift);
}
}),m,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
}),shifts));
}));
(clojure.core.matrix.protocols.POrder["null"] = true);

(clojure.core.matrix.protocols.order["null"] = (function() {
var G__33613 = null;
var G__33613__2 = (function (m,indices){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't reorder a scalar nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__33613__3 = (function (m,dim,indices){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't reorder a scalar nil",cljs.core.PersistentArrayMap.EMPTY);
});
G__33613 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__33613__2.call(this,m,dim);
case 3:
return G__33613__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33613.cljs$core$IFn$_invoke$arity$2 = G__33613__2;
G__33613.cljs$core$IFn$_invoke$arity$3 = G__33613__3;
return G__33613;
})()
);

(clojure.core.matrix.protocols.POrder["number"] = true);

(clojure.core.matrix.protocols.order["number"] = (function() {
var G__33615 = null;
var G__33615__2 = (function (m,indices){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't reorder a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
var G__33615__3 = (function (m,dim,indices){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't reorder a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
G__33615 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__33615__2.call(this,m,dim);
case 3:
return G__33615__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33615.cljs$core$IFn$_invoke$arity$2 = G__33615__2;
G__33615.cljs$core$IFn$_invoke$arity$3 = G__33615__3;
return G__33615;
})()
);

(clojure.core.matrix.protocols.POrder["object"] = true);

(clojure.core.matrix.protocols.order["object"] = (function() {
var G__33616 = null;
var G__33616__2 = (function (m,indices){
var mshape = cljs.core.vec(clojure.core.matrix.protocols.get_shape(m));
var subshape = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,(0),(1));
var ss = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33011_SHARP_){
return clojure.core.matrix.protocols.broadcast(clojure.core.matrix.protocols.get_major_slice(m,p1__33011_SHARP_),subshape);
}),indices);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__33012_SHARP_,p2__33013_SHARP_){
return clojure.core.matrix.protocols.join(p1__33012_SHARP_,p2__33013_SHARP_);
}),ss);
});
var G__33616__3 = (function (m,dim,indices){
return clojure.core.matrix.protocols.order(clojure.core.matrix.protocols.convert_to_nested_vectors(m),dim,indices);
});
G__33616 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__33616__2.call(this,m,dim);
case 3:
return G__33616__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33616.cljs$core$IFn$_invoke$arity$2 = G__33616__2;
G__33616.cljs$core$IFn$_invoke$arity$3 = G__33616__3;
return G__33616;
})()
);
/**
 * Outputs a vector containing the rank of array elements, given a sorted sequence of [index value] pairs and a length
 */
clojure.core.matrix.impl.defaults.output_rank = (function clojure$core$matrix$impl$defaults$output_rank(pairs,n){
var dest = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(n);
var i_33620 = cljs.core.long$((0));
var pairs_33621__$1 = cljs.core.seq(pairs);
while(true){
if((i_33620 < n)){
(dest[cljs.core.first(cljs.core.first(pairs_33621__$1))] = Long.valueOf(i_33620));

var G__33622 = (i_33620 + (1));
var G__33623 = cljs.core.next(pairs_33621__$1);
i_33620 = G__33622;
pairs_33621__$1 = G__33623;
continue;
} else {
}
break;
}

return cljs.core.vec(dest);
});
(clojure.core.matrix.protocols.PIndexRank["object"] = true);

(clojure.core.matrix.protocols.index_rank["object"] = (function() {
var G__33624 = null;
var G__33624__1 = (function (m){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
var G__33017 = dims;
switch (G__33017) {
case (0):
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get indexed rank of a scalar value",cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
var n = cljs.core.long$(clojure.core.matrix.protocols.element_count(m));
return clojure.core.matrix.impl.defaults.output_rank(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.element_count(m)),clojure.core.matrix.protocols.element_seq(m))),n);

break;
default:
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.index_rank,clojure.core.matrix.protocols.get_major_slice_seq(m));

}
});
var G__33624__2 = (function (m,comp){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
var G__33018 = dims;
switch (G__33018) {
case (0):
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get indexed rank of a scalar value",cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
var n = cljs.core.long$(clojure.core.matrix.protocols.element_count(m));
return clojure.core.matrix.impl.defaults.output_rank(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.second,comp,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.element_count(m)),clojure.core.matrix.protocols.element_seq(m))),n);

break;
default:
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__33016_SHARP_){
return clojure.core.matrix.protocols.index_rank(p1__33016_SHARP_,comp);
}),clojure.core.matrix.protocols.get_major_slice_seq(m));

}
});
G__33624 = function(m,comp){
switch(arguments.length){
case 1:
return G__33624__1.call(this,m);
case 2:
return G__33624__2.call(this,m,comp);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33624.cljs$core$IFn$_invoke$arity$1 = G__33624__1;
G__33624.cljs$core$IFn$_invoke$arity$2 = G__33624__2;
return G__33624;
})()
);
(clojure.core.matrix.protocols.PMatrixProducts["number"] = true);

(clojure.core.matrix.protocols.inner_product["number"] = (function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale(a,m);
}
}));

(clojure.core.matrix.protocols.outer_product["number"] = (function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale(a,m);
}
}));

(clojure.core.matrix.protocols.PMatrixProducts["object"] = true);

(clojure.core.matrix.protocols.inner_product["object"] = (function (m,a){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_(m))){
return clojure.core.matrix.protocols.pre_scale(a,m);
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_(a))){
return clojure.core.matrix.protocols.scale(m,a);
} else {
if(((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))){
if(((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a)))){
return clojure.core.matrix.protocols.element_sum(clojure.core.matrix.protocols.element_multiply(m,a));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.matrix_add,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (sl,x){
return clojure.core.matrix.protocols.scale(sl,x);
}),clojure.core.matrix.protocols.get_major_slice_seq(a),clojure.core.matrix.protocols.get_major_slice_seq(m)));
}
} else {
return clojure.core.matrix.protocols.construct_matrix(clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33019_SHARP_){
return clojure.core.matrix.protocols.inner_product(p1__33019_SHARP_,a);
}),clojure.core.matrix.protocols.get_major_slice_seq(m)));

}
}
}
}));

(clojure.core.matrix.protocols.outer_product["object"] = (function (m,a){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_(m))){
return clojure.core.matrix.protocols.pre_scale(a,m);
} else {
return clojure.core.matrix.protocols.element_map(clojure.core.matrix.protocols.convert_to_nested_vectors(m),(function (x){
return clojure.core.matrix.protocols.pre_scale(a,x);
}));

}
}));
(clojure.core.matrix.protocols.PMatrixMultiply["number"] = true);

(clojure.core.matrix.protocols.element_multiply["number"] = (function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale(a,m);
}
}));

(clojure.core.matrix.protocols.matrix_multiply["number"] = (function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
if(cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(a))){
return clojure.core.matrix.protocols.pre_scale(a,m);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Don't know how to multiply number with: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(a))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}));

(clojure.core.matrix.protocols.PMatrixMultiply["object"] = true);

(clojure.core.matrix.protocols.matrix_multiply["object"] = (function (m,a){
var mdims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
var adims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a));
if((adims === (0))){
return clojure.core.matrix.protocols.scale(m,a);
} else {
if((((mdims === (1))) && ((adims === (1))))){
return clojure.core.matrix.protocols.vector_dot(m,a);
} else {
if((((mdims === (1))) && ((adims === (2))))){
var vec__33022 = clojure.core.matrix.protocols.get_shape(a);
var arows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33022,(0),null);
var acols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33022,(1),null);
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.matrix_multiply(clojure.core.matrix.protocols.reshape(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),arows], null)),a),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [acols], null));
} else {
if((((mdims === (2))) && ((adims === (1))))){
var mshape = clojure.core.matrix.protocols.get_shape(m);
var vec__33025 = mshape;
var mrows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33025,(0),null);
var mcols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33025,(1),null);
var acount = clojure.core.matrix.protocols.element_count(a);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(mcols,acount)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't multiply matrix of shape: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mshape)," with a vector of length ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(acount)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.matrix_multiply(m,clojure.core.matrix.protocols.reshape(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols,(1)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrows], null));
} else {
if((((mdims === (2))) && ((adims === (2))))){
var mutable = clojure.core.matrix.protocols.is_mutable_QMARK_(m);
var vec__33028 = clojure.core.matrix.protocols.get_shape(m);
var mrows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33028,(0),null);
var mcols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33028,(1),null);
var vec__33031 = clojure.core.matrix.protocols.get_shape(a);
var arows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33031,(0),null);
var acols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33031,(1),null);
var new_m_type = (cljs.core.truth_(mutable)?m:clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ndarray","ndarray",1659822393)));
var new_m = clojure.core.matrix.protocols.new_matrix(new_m_type,mrows,acols);
var i_33643 = cljs.core.long$((0));
while(true){
if((i_33643 < mrows)){
var j_33644 = cljs.core.long$((0));
while(true){
if((j_33644 < acols)){
clojure.core.matrix.protocols.set_2d_BANG_(new_m,i_33643,j_33644,(0));

var G__33645 = (j_33644 + (1));
j_33644 = G__33645;
continue;
} else {
}
break;
}

var G__33646 = (i_33643 + (1));
i_33643 = G__33646;
continue;
} else {
}
break;
}


var i_33647 = cljs.core.long$((0));
while(true){
if((i_33647 < mrows)){
var j_33648 = cljs.core.long$((0));
while(true){
if((j_33648 < acols)){
var k_33649 = cljs.core.long$((0));
while(true){
if((k_33649 < mcols)){
clojure.core.matrix.protocols.set_2d_BANG_(new_m,i_33647,j_33648,(clojure.core.matrix.protocols.get_2d(new_m,i_33647,j_33648) + (clojure.core.matrix.protocols.get_2d(m,i_33647,k_33649) * clojure.core.matrix.protocols.get_2d(a,k_33649,j_33648))));

var G__33651 = (k_33649 + (1));
k_33649 = G__33651;
continue;
} else {
}
break;
}

var G__33652 = (j_33648 + (1));
j_33648 = G__33652;
continue;
} else {
}
break;
}

var G__33653 = (i_33647 + (1));
i_33647 = G__33653;
continue;
} else {
}
break;
}


return new_m;
} else {
return null;
}
}
}
}
}
}));

(clojure.core.matrix.protocols.element_multiply["object"] = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.scale(m,a);
} else {
var vec__33034 = clojure.core.matrix.protocols.broadcast_compatible(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33034,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33034,(1),null);
return clojure.core.matrix.protocols.element_map(m__$1,cljs.core._STAR_,a__$1);
}
}));
(clojure.core.matrix.protocols.PMatrixMultiplyMutable["number"] = true);

(clojure.core.matrix.protocols.element_multiply_BANG_["number"] = (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do mutable multiply on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.matrix_multiply_BANG_["number"] = (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do mutable multiply on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PMatrixMultiplyMutable["object"] = true);

(clojure.core.matrix.protocols.element_multiply_BANG_["object"] = (function (m,a){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_multiply(m,a));
}));

(clojure.core.matrix.protocols.matrix_multiply_BANG_["object"] = (function (m,a){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.matrix_multiply(m,a));
}));
(clojure.core.matrix.protocols.PMatrixDivide["number"] = true);

(clojure.core.matrix.protocols.element_divide["number"] = (function() {
var G__33655 = null;
var G__33655__1 = (function (m){
return ((1) / m);
});
var G__33655__2 = (function (m,a){
return clojure.core.matrix.protocols.pre_scale(clojure.core.matrix.protocols.element_divide(a),m);
});
G__33655 = function(m,a){
switch(arguments.length){
case 1:
return G__33655__1.call(this,m);
case 2:
return G__33655__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33655.cljs$core$IFn$_invoke$arity$1 = G__33655__1;
G__33655.cljs$core$IFn$_invoke$arity$2 = G__33655__2;
return G__33655;
})()
);

(clojure.core.matrix.protocols.PMatrixDivide["object"] = true);

(clojure.core.matrix.protocols.element_divide["object"] = (function() {
var G__33657 = null;
var G__33657__1 = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.get_shape(m))){
return clojure.core.matrix.protocols.element_map(m,clojure.core.matrix.protocols.element_divide);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Don't know how to take reciprocal of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
var G__33657__2 = (function (m,a){
return clojure.core.matrix.protocols.element_multiply(m,clojure.core.matrix.protocols.element_divide(a));
});
G__33657 = function(m,a){
switch(arguments.length){
case 1:
return G__33657__1.call(this,m);
case 2:
return G__33657__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33657.cljs$core$IFn$_invoke$arity$1 = G__33657__1;
G__33657.cljs$core$IFn$_invoke$arity$2 = G__33657__2;
return G__33657;
})()
);
(clojure.core.matrix.protocols.PMatrixDivideMutable["number"] = true);

(clojure.core.matrix.protocols.element_divide_BANG_["number"] = (function() {
var G__33660 = null;
var G__33660__1 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do mutable divide on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
var G__33660__2 = (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do mutable divide on a scalar numer",cljs.core.PersistentArrayMap.EMPTY);
});
G__33660 = function(m,a){
switch(arguments.length){
case 1:
return G__33660__1.call(this,m);
case 2:
return G__33660__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33660.cljs$core$IFn$_invoke$arity$1 = G__33660__1;
G__33660.cljs$core$IFn$_invoke$arity$2 = G__33660__2;
return G__33660;
})()
);

(clojure.core.matrix.protocols.PMatrixDivideMutable["object"] = true);

(clojure.core.matrix.protocols.element_divide_BANG_["object"] = (function() {
var G__33661 = null;
var G__33661__1 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,cljs.core._SLASH_);
});
var G__33661__2 = (function (m,a){
var vec__33039 = clojure.core.matrix.protocols.broadcast_compatible(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33039,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33039,(1),null);
return clojure.core.matrix.protocols.element_map_BANG_(m__$1,cljs.core._SLASH_,a__$1);
});
G__33661 = function(m,a){
switch(arguments.length){
case 1:
return G__33661__1.call(this,m);
case 2:
return G__33661__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33661.cljs$core$IFn$_invoke$arity$1 = G__33661__1;
G__33661.cljs$core$IFn$_invoke$arity$2 = G__33661__2;
return G__33661;
})()
);
(clojure.core.matrix.protocols.PSummable["number"] = true);

(clojure.core.matrix.protocols.element_sum["number"] = (function (a){
return a;
}));

(clojure.core.matrix.protocols.PSummable["object"] = true);

(clojure.core.matrix.protocols.element_sum["object"] = (function (a){
return clojure.core.matrix.protocols.element_reduce(a,(cljs.core.truth_(clojure.core.matrix.protocols.numerical_QMARK_(a))?cljs.core._PLUS_:clojure.core.matrix.protocols.matrix_add));
}));
(clojure.core.matrix.protocols.PElementMinMax["number"] = true);

(clojure.core.matrix.protocols.element_min["number"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.element_max["number"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.element_clamp["number"] = (function (m,a,b){
if((!((a <= b)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["min argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," should be <= max argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if((m < a)){
return a;
} else {
if((m > b)){
return b;
} else {
return m;
}
}
}
}));

(clojure.core.matrix.protocols.PElementMinMax["object"] = true);

(clojure.core.matrix.protocols.element_min["object"] = (function (m){
return clojure.core.matrix.protocols.element_reduce(m,(function (best,v){
if(((cljs.core.not(best)) || ((v < best)))){
return v;
} else {
return best;
}
}),null);
}));

(clojure.core.matrix.protocols.element_max["object"] = (function (m){
return clojure.core.matrix.protocols.element_reduce(m,(function (best,v){
if(((cljs.core.not(best)) || ((v > best)))){
return v;
} else {
return best;
}
}),null);
}));

(clojure.core.matrix.protocols.element_clamp["object"] = (function (m,a,b){
if((!((a <= b)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["min argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," should be <= max argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return clojure.core.matrix.protocols.element_map(m,(function (p1__33042_SHARP_){
if((p1__33042_SHARP_ < a)){
return a;
} else {
if((p1__33042_SHARP_ > b)){
return b;
} else {
return p1__33042_SHARP_;
}
}
}));
}
}));
(clojure.core.matrix.protocols.PCompare["number"] = true);

(clojure.core.matrix.protocols.element_compare["number"] = (function (a,b){
if(typeof b === 'number'){
return cljs.core.long$(clojure.core.matrix.impl.mathsops.signum((a - b)));
} else {
return clojure.core.matrix.protocols.signum(clojure.core.matrix.protocols.matrix_sub(a,b));
}
}));

(clojure.core.matrix.protocols.element_if["number"] = (function (m,a,b){
var vec__33072 = clojure.core.matrix.protocols.broadcast_same_shape(a,b);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33072,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33072,(1),null);
if((m > (0))){
return a__$1;
} else {
return b__$1;
}
}));

(clojure.core.matrix.protocols.element_lt["number"] = (function (m,a){
if(typeof a === 'number'){
if((m < a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_gt(a,m);
}
}));

(clojure.core.matrix.protocols.element_le["number"] = (function (m,a){
if(typeof a === 'number'){
if((m <= a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_ge(a,m);
}
}));

(clojure.core.matrix.protocols.element_gt["number"] = (function (m,a){
if(typeof a === 'number'){
if((m > a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_lt(a,m);
}
}));

(clojure.core.matrix.protocols.element_ge["number"] = (function (m,a){
if(typeof a === 'number'){
if((m >= a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_le(a,m);
}
}));

(clojure.core.matrix.protocols.element_ne["number"] = (function (m,a){
if(typeof a === 'number'){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(m,a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_ne(a,m);
}
}));

(clojure.core.matrix.protocols.element_eq["number"] = (function (m,a){
if(typeof a === 'number'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m,a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_eq(a,m);
}
}));

(clojure.core.matrix.protocols.PCompare["object"] = true);

(clojure.core.matrix.protocols.element_compare["object"] = (function (a,b){
return clojure.core.matrix.protocols.element_map(clojure.core.matrix.protocols.matrix_sub(a,b),(function (p1__33043_SHARP_){
return cljs.core.long$(clojure.core.matrix.impl.mathsops.signum(p1__33043_SHARP_));
}));
}));

(clojure.core.matrix.protocols.element_if["object"] = (function (m,a,b){
if(((typeof a === 'number') && (typeof b === 'number'))){
return clojure.core.matrix.protocols.element_map(m,(function (p1__33044_SHARP_){
if((p1__33044_SHARP_ > (0))){
return a;
} else {
return b;
}
}));
} else {
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map(m,(function (p1__33045_SHARP_,p2__33046_SHARP_){
if((p1__33045_SHARP_ > (0))){
return a;
} else {
return p2__33046_SHARP_;
}
}),b);
} else {
if(typeof b === 'number'){
return clojure.core.matrix.protocols.element_map(m,(function (p1__33047_SHARP_,p2__33048_SHARP_){
if((p1__33047_SHARP_ > (0))){
return p2__33048_SHARP_;
} else {
return b;
}
}),a);
} else {
return clojure.core.matrix.protocols.element_map(m,(function (p1__33050_SHARP_,p2__33051_SHARP_,p3__33052_SHARP_){
if((p1__33050_SHARP_ > (0))){
return p2__33051_SHARP_;
} else {
return p3__33052_SHARP_;
}
}),a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null));

}
}
}
}));

(clojure.core.matrix.protocols.element_lt["object"] = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map(m,(function (p1__33053_SHARP_){
if((p1__33053_SHARP_ < a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map(m,(function (p1__33054_SHARP_,p2__33055_SHARP_){
if((p1__33054_SHARP_ < p2__33055_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

(clojure.core.matrix.protocols.element_le["object"] = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map(m,(function (p1__33056_SHARP_){
if((p1__33056_SHARP_ <= a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map(m,(function (p1__33058_SHARP_,p2__33059_SHARP_){
if((p1__33058_SHARP_ <= p2__33059_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

(clojure.core.matrix.protocols.element_gt["object"] = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map(m,(function (p1__33060_SHARP_){
if((p1__33060_SHARP_ > a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map(m,(function (p1__33061_SHARP_,p2__33062_SHARP_){
if((p1__33061_SHARP_ > p2__33062_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

(clojure.core.matrix.protocols.element_ge["object"] = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map(m,(function (p1__33063_SHARP_){
if((p1__33063_SHARP_ >= a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map(m,(function (p1__33064_SHARP_,p2__33065_SHARP_){
if((p1__33064_SHARP_ >= p2__33065_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

(clojure.core.matrix.protocols.element_ne["object"] = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map(m,(function (p1__33066_SHARP_){
if((!((p1__33066_SHARP_ === a)))){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map(m,(function (p1__33067_SHARP_,p2__33068_SHARP_){
if((!((p1__33067_SHARP_ === p2__33068_SHARP_)))){
return (1);
} else {
return (0);
}
}),a);
}
}));

(clojure.core.matrix.protocols.element_eq["object"] = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map(m,(function (p1__33069_SHARP_){
if((p1__33069_SHARP_ === a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map(m,(function (p1__33070_SHARP_,p2__33071_SHARP_){
if((p1__33070_SHARP_ === p2__33071_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));
(clojure.core.matrix.protocols.PAddProduct["number"] = true);

(clojure.core.matrix.protocols.add_product["number"] = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add(clojure.core.matrix.protocols.element_multiply(a,b),m);
}));

(clojure.core.matrix.protocols.PAddProduct["object"] = true);

(clojure.core.matrix.protocols.add_product["object"] = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add(m,clojure.core.matrix.protocols.element_multiply(a,b));
}));
(clojure.core.matrix.protocols.PAddProductMutable["number"] = true);

(clojure.core.matrix.protocols.add_product_BANG_["number"] = (function (m,a,b){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Numbers are not mutable",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PAddProductMutable["object"] = true);

(clojure.core.matrix.protocols.add_product_BANG_["object"] = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_(m,clojure.core.matrix.protocols.element_multiply(a,b));
}));
(clojure.core.matrix.protocols.PAddScaled["number"] = true);

(clojure.core.matrix.protocols.add_scaled["number"] = (function (m,a,factor){
return clojure.core.matrix.protocols.matrix_add(clojure.core.matrix.protocols.scale(a,factor),m);
}));

(clojure.core.matrix.protocols.PAddScaled["object"] = true);

(clojure.core.matrix.protocols.add_scaled["object"] = (function (m,a,factor){
return clojure.core.matrix.protocols.matrix_add(m,clojure.core.matrix.protocols.scale(a,factor));
}));
(clojure.core.matrix.protocols.PAddScaledMutable["number"] = true);

(clojure.core.matrix.protocols.add_scaled_BANG_["number"] = (function (m,a,factor){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Numbers are not mutable",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PAddScaledMutable["object"] = true);

(clojure.core.matrix.protocols.add_scaled_BANG_["object"] = (function (m,a,factor){
return clojure.core.matrix.protocols.matrix_add_BANG_(m,clojure.core.matrix.protocols.scale(a,factor));
}));
(clojure.core.matrix.protocols.PAddScaledProduct["number"] = true);

(clojure.core.matrix.protocols.add_scaled_product["number"] = (function (m,a,b,factor){
return clojure.core.matrix.protocols.matrix_add(clojure.core.matrix.protocols.scale(clojure.core.matrix.protocols.element_multiply(a,b),factor),m);
}));

(clojure.core.matrix.protocols.PAddScaledProduct["object"] = true);

(clojure.core.matrix.protocols.add_scaled_product["object"] = (function (m,a,b,factor){
return clojure.core.matrix.protocols.matrix_add(m,clojure.core.matrix.protocols.scale(clojure.core.matrix.protocols.element_multiply(a,b),factor));
}));
(clojure.core.matrix.protocols.PAddScaledProductMutable["number"] = true);

(clojure.core.matrix.protocols.add_scaled_product_BANG_["number"] = (function (m,a,b,factor){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Numbers are not mutable",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PAddScaledProductMutable["object"] = true);

(clojure.core.matrix.protocols.add_scaled_product_BANG_["object"] = (function (m,a,b,factor){
return clojure.core.matrix.protocols.matrix_add_BANG_(m,clojure.core.matrix.protocols.scale(clojure.core.matrix.protocols.element_multiply(a,b),factor));
}));
(clojure.core.matrix.protocols.PScaleAdd["object"] = true);

(clojure.core.matrix.protocols.scale_add_BANG_["object"] = (function (m1,a,m2,b,constant){
clojure.core.matrix.protocols.element_multiply_BANG_(m1,a);

if(((typeof b === 'number') && ((b === (0))))){
} else {
clojure.core.matrix.protocols.add_product_BANG_(m1,m2,b);
}

if(((typeof constant === 'number') && ((constant === (0))))){
} else {
clojure.core.matrix.protocols.matrix_add_BANG_(m1,constant);
}

return m1;
}));
(clojure.core.matrix.protocols.PScaleAdd2["object"] = true);

(clojure.core.matrix.protocols.scale_add["object"] = (function (m1,a,m2,b,constant){
var r = clojure.core.matrix.protocols.matrix_add(clojure.core.matrix.protocols.scale(m1,a),clojure.core.matrix.protocols.scale(m2,b));
if((0.0 === constant)){
return r;
} else {
return clojure.core.matrix.protocols.matrix_add(r,constant);
}
}));
(clojure.core.matrix.protocols.PLerp["object"] = true);

(clojure.core.matrix.protocols.lerp["object"] = (function (a,b,factor){
return clojure.core.matrix.protocols.scale_add(a,(1.0 - factor),b,factor,0.0);
}));

(clojure.core.matrix.protocols.lerp_BANG_["object"] = (function (a,b,factor){
return clojure.core.matrix.protocols.scale_add_BANG_(a,(1.0 - factor),b,factor,0.0);
}));
(clojure.core.matrix.protocols.PAddInnerProductMutable["object"] = true);

(clojure.core.matrix.protocols.add_inner_product_BANG_["object"] = (function() {
var G__33728 = null;
var G__33728__3 = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_(m,clojure.core.matrix.protocols.inner_product(a,b));
});
var G__33728__4 = (function (m,a,b,factor){
return clojure.core.matrix.protocols.add_scaled_BANG_(m,clojure.core.matrix.protocols.inner_product(a,b),factor);
});
G__33728 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__33728__3.call(this,m,a,b);
case 4:
return G__33728__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33728.cljs$core$IFn$_invoke$arity$3 = G__33728__3;
G__33728.cljs$core$IFn$_invoke$arity$4 = G__33728__4;
return G__33728;
})()
);
(clojure.core.matrix.protocols.PAddOuterProductMutable["object"] = true);

(clojure.core.matrix.protocols.add_outer_product_BANG_["object"] = (function() {
var G__33729 = null;
var G__33729__3 = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_(m,clojure.core.matrix.protocols.outer_product(a,b));
});
var G__33729__4 = (function (m,a,b,factor){
return clojure.core.matrix.protocols.add_scaled_BANG_(m,clojure.core.matrix.protocols.outer_product(a,b),factor);
});
G__33729 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__33729__3.call(this,m,a,b);
case 4:
return G__33729__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33729.cljs$core$IFn$_invoke$arity$3 = G__33729__3;
G__33729.cljs$core$IFn$_invoke$arity$4 = G__33729__4;
return G__33729;
})()
);
(clojure.core.matrix.protocols.PSetInnerProductMutable["object"] = true);

(clojure.core.matrix.protocols.set_inner_product_BANG_["object"] = (function() {
var G__33730 = null;
var G__33730__3 = (function (m,a,b){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.inner_product(a,b));
});
var G__33730__4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.inner_product(a,b));

return clojure.core.matrix.protocols.scale_BANG_(m,factor);
});
G__33730 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__33730__3.call(this,m,a,b);
case 4:
return G__33730__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33730.cljs$core$IFn$_invoke$arity$3 = G__33730__3;
G__33730.cljs$core$IFn$_invoke$arity$4 = G__33730__4;
return G__33730;
})()
);
(clojure.core.matrix.protocols.PTypeInfo["null"] = true);

(clojure.core.matrix.protocols.element_type["null"] = (function (a){
return Object;
}));

(clojure.core.matrix.protocols.PTypeInfo["object"] = true);

(clojure.core.matrix.protocols.element_type["object"] = (function (a){
if((Array === a.constructor)){
return cljs.core.type(a).getComponentType();
} else {
return Object;
}
}));
(clojure.core.matrix.protocols.PGenericValues["object"] = true);

(clojure.core.matrix.protocols.generic_zero["object"] = (function (m){
return (0);
}));

(clojure.core.matrix.protocols.generic_one["object"] = (function (m){
return (1);
}));

(clojure.core.matrix.protocols.generic_value["object"] = (function (m){
return (0);
}));
(cljs.core.IFn.prototype.clojure$core$matrix$protocols$PVectorTransform$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IFn.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform$arity$2 = (function (m,a){
var m__$1 = this;
if(cljs.core.vector_QMARK_(m__$1)){
return clojure.core.matrix.protocols.matrix_multiply(m__$1,a);
} else {
return (m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(a) : m__$1.call(null,a));
}
}));

(cljs.core.IFn.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform_BANG_$arity$2 = (function (m,a){
var m__$1 = this;
if(cljs.core.vector_QMARK_(m__$1)){
return clojure.core.matrix.protocols.assign_BANG_(a,clojure.core.matrix.protocols.matrix_multiply(m__$1,a));
} else {
return clojure.core.matrix.protocols.assign_BANG_(a,(m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(a) : m__$1.call(null,a)));
}
}));

(clojure.core.matrix.protocols.PVectorTransform["object"] = true);

(clojure.core.matrix.protocols.vector_transform["object"] = (function (m,a){
if(((2) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))){
return clojure.core.matrix.protocols.matrix_multiply(m,a);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Don't know how to transform using: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}));

(clojure.core.matrix.protocols.vector_transform_BANG_["object"] = (function (m,a){
return clojure.core.matrix.protocols.assign_BANG_(a,clojure.core.matrix.protocols.vector_transform(m,a));
}));
(clojure.core.matrix.protocols.PMatrixScaling["number"] = true);

(clojure.core.matrix.protocols.scale["number"] = (function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale(a,m);
}
}));

(clojure.core.matrix.protocols.pre_scale["number"] = (function (m,a){
if(typeof a === 'number'){
return (a * m);
} else {
return clojure.core.matrix.protocols.scale(a,m);
}
}));

(clojure.core.matrix.protocols.PMatrixScaling["object"] = true);

(clojure.core.matrix.protocols.scale["object"] = (function (m,a){
return clojure.core.matrix.protocols.element_map(m,(function (p1__33081_SHARP_){
return (p1__33081_SHARP_ * a);
}));
}));

(clojure.core.matrix.protocols.pre_scale["object"] = (function (m,a){
return clojure.core.matrix.protocols.element_map(m,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,a));
}));
(clojure.core.matrix.protocols.PMatrixMutableScaling["number"] = true);

(clojure.core.matrix.protocols.scale_BANG_["number"] = (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't scale! a numeric value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.pre_scale_BANG_["number"] = (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't pre-scale! a numeric value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PMatrixMutableScaling["object"] = true);

(clojure.core.matrix.protocols.scale_BANG_["object"] = (function (m,a){
clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__33082_SHARP_){
return (p1__33082_SHARP_ * a);
}));

return m;
}));

(clojure.core.matrix.protocols.pre_scale_BANG_["object"] = (function (m,a){
clojure.core.matrix.protocols.element_map_BANG_(m,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,a));

return m;
}));
(clojure.core.matrix.protocols.PMatrixAdd["number"] = true);

(clojure.core.matrix.protocols.matrix_add["number"] = (function (m,a){
if(typeof a === 'number'){
return (m + a);
} else {
return clojure.core.matrix.protocols.matrix_add(a,m);
}
}));

(clojure.core.matrix.protocols.matrix_sub["number"] = (function (m,a){
if(typeof a === 'number'){
return (m - a);
} else {
return clojure.core.matrix.protocols.negate(clojure.core.matrix.protocols.matrix_sub(a,m));
}
}));

(clojure.core.matrix.protocols.PMatrixAdd["object"] = true);

(clojure.core.matrix.protocols.matrix_add["object"] = (function (m,a){
var vec__33085 = clojure.core.matrix.protocols.broadcast_compatible(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33085,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33085,(1),null);
return clojure.core.matrix.protocols.element_map(m__$1,cljs.core._PLUS_,a__$1);
}));

(clojure.core.matrix.protocols.matrix_sub["object"] = (function (m,a){
var vec__33088 = clojure.core.matrix.protocols.broadcast_compatible(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33088,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33088,(1),null);
return clojure.core.matrix.protocols.element_map(m__$1,cljs.core._,a__$1);
}));
(clojure.core.matrix.protocols.PMatrixAddMutable["number"] = true);

(clojure.core.matrix.protocols.matrix_add_BANG_["number"] = (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do mutable add! on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.matrix_sub_BANG_["number"] = (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do mutable sub! on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PMatrixAddMutable["object"] = true);

(clojure.core.matrix.protocols.matrix_add_BANG_["object"] = (function (m,a){
return clojure.core.matrix.protocols.element_map_BANG_(m,cljs.core._PLUS_,a);
}));

(clojure.core.matrix.protocols.matrix_sub_BANG_["object"] = (function (m,a){
return clojure.core.matrix.protocols.element_map_BANG_(m,cljs.core._,a);
}));
(clojure.core.matrix.protocols.PNegation["null"] = true);

(clojure.core.matrix.protocols.negate["null"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't negate nil!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PNegation["number"] = true);

(clojure.core.matrix.protocols.negate["number"] = (function (m){
return (- m);
}));

(clojure.core.matrix.protocols.PNegation["object"] = true);

(clojure.core.matrix.protocols.negate["object"] = (function (m){
return clojure.core.matrix.protocols.scale(m,-1.0);
}));
(clojure.core.matrix.protocols.PMatrixEquality["null"] = true);

(clojure.core.matrix.protocols.matrix_equals["null"] = (function (a,b){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("nil is not a valid numerical value in equality testing",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PMatrixEquality["number"] = true);

(clojure.core.matrix.protocols.matrix_equals["number"] = (function (a,b){
if(typeof b === 'number'){
return (a === b);
} else {
if(((0) === clojure.core.matrix.protocols.dimensionality(b))){
return clojure.core.matrix.protocols.matrix_equals(b,a);
} else {
return false;

}
}
}));

(clojure.core.matrix.protocols.PMatrixEquality["object"] = true);

(clojure.core.matrix.protocols.matrix_equals["object"] = (function (a,b){
if((a === b)){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shape_QMARK_(a,b))){
if(((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a)))){
return (clojure.core.matrix.protocols.get_0d(a) === (function (){var x__19479__auto__ = b;
if(typeof x__19479__auto__ === 'number'){
return x__19479__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__19479__auto__);

}
})());
} else {
return cljs.core.not_any_QMARK_(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ__EQ_,clojure.core.matrix.protocols.element_seq(a),clojure.core.matrix.protocols.element_seq(b)));
}
} else {
return false;

}
}
}));
(clojure.core.matrix.protocols.PValueEquality["null"] = true);

(clojure.core.matrix.protocols.value_equals["null"] = (function (a,b){
return (((b == null)) || (((((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)))) && ((clojure.core.matrix.protocols.get_0d(b) == null)))));
}));

(clojure.core.matrix.protocols.PValueEquality["number"] = true);

(clojure.core.matrix.protocols.value_equals["number"] = (function (a,b){
return ((((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)))) && ((a === clojure.core.matrix.protocols.get_0d(b))));
}));

(clojure.core.matrix.protocols.PValueEquality["object"] = true);

(clojure.core.matrix.protocols.value_equals["object"] = (function (a,b){
var and__5043__auto__ = clojure.core.matrix.protocols.same_shape_QMARK_(a,b);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,clojure.core.matrix.protocols.element_seq(a),clojure.core.matrix.protocols.element_seq(b)));
} else {
return and__5043__auto__;
}
}));
(clojure.core.matrix.protocols.PMatrixEqualityEpsilon["null"] = true);

(clojure.core.matrix.protocols.matrix_equals_epsilon["null"] = (function (a,b,eps){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("nil is not a valid numerical value in equality testing",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PMatrixEqualityEpsilon["number"] = true);

(clojure.core.matrix.protocols.matrix_equals_epsilon["number"] = (function (a,b,eps){
if(typeof b === 'number'){
return (Math.abs((a - b)) <= eps);
} else {
if(((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)))){
return (Math.abs((a - clojure.core.matrix.protocols.get_0d(b))) <= eps);
} else {
return false;

}
}
}));

(clojure.core.matrix.protocols.PMatrixEqualityEpsilon["object"] = true);

(clojure.core.matrix.protocols.matrix_equals_epsilon["object"] = (function (a,b,eps){
if((a === b)){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shape_QMARK_(a,b))){
var eps__$1 = eps;
return cljs.core.every_QMARK_((function (p1__33093_SHARP_){
return (Math.abs(p1__33093_SHARP_) <= eps__$1);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,clojure.core.matrix.protocols.element_seq(a),clojure.core.matrix.protocols.element_seq(b)));
} else {
return false;

}
}
}));
(clojure.core.matrix.protocols.PDoubleArrayOutput["number"] = true);

(clojure.core.matrix.protocols.to_double_array["number"] = (function (m){
var arr = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1((1));
(arr[(0)] = m);

return arr;
}));

(clojure.core.matrix.protocols.as_double_array["number"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.PDoubleArrayOutput["object"] = true);

(clojure.core.matrix.protocols.to_double_array["object"] = (function (m){
return cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.element_seq(m));
}));

(clojure.core.matrix.protocols.as_double_array["object"] = (function (m){
return null;
}));
(clojure.core.matrix.protocols.PObjectArrayOutput["null"] = true);

(clojure.core.matrix.protocols.to_object_array["null"] = (function (m){
var arr = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
return arr;
}));

(clojure.core.matrix.protocols.as_object_array["null"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.PObjectArrayOutput["number"] = true);

(clojure.core.matrix.protocols.to_object_array["number"] = (function (m){
var arr = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(arr[(0)] = m);

return arr;
}));

(clojure.core.matrix.protocols.as_object_array["number"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.PObjectArrayOutput["object"] = true);

(clojure.core.matrix.protocols.to_object_array["object"] = (function (m){
return cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.element_seq(m));
}));

(clojure.core.matrix.protocols.as_object_array["object"] = (function (m){
return null;
}));
(clojure.core.matrix.protocols.PRowOperations["object"] = true);

(clojure.core.matrix.protocols.swap_rows["object"] = (function (m,i,j){
return clojure.core.matrix.protocols.swap_rows(clojure.core.matrix.protocols.convert_to_nested_vectors(m),i,j);
}));

(clojure.core.matrix.protocols.multiply_row["object"] = (function (m,i,k){
return clojure.core.matrix.protocols.multiply_row(clojure.core.matrix.protocols.convert_to_nested_vectors(m),i,k);
}));

(clojure.core.matrix.protocols.add_row["object"] = (function (m,i,j,k){
return clojure.core.matrix.protocols.add_row(clojure.core.matrix.protocols.convert_to_nested_vectors(m),i,j,k);
}));
(clojure.core.matrix.protocols.PRowSetting["object"] = true);

(clojure.core.matrix.protocols.set_row["object"] = (function (m,i,row){
var svec = cljs.core.vec(clojure.core.matrix.protocols.get_major_slice_seq(m));
var row__$1 = clojure.core.matrix.protocols.broadcast_like((svec.cljs$core$IFn$_invoke$arity$1 ? svec.cljs$core$IFn$_invoke$arity$1((0)) : svec.call(null,(0))),row);
return clojure.core.matrix.protocols.coerce_param(m,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(svec,i,row__$1));
}));

(clojure.core.matrix.protocols.set_row_BANG_["object"] = (function (m,i,row){
var sl = clojure.core.matrix.protocols.get_major_slice_view(m,i);
var row__$1 = clojure.core.matrix.protocols.broadcast_like(sl,row);
clojure.core.matrix.protocols.assign_BANG_(sl,row__$1);

return m;
}));
(clojure.core.matrix.protocols.PColumnSetting["object"] = true);

(clojure.core.matrix.protocols.set_column["object"] = (function (m,i,column){
var scol = clojure.core.matrix.protocols.get_column(m,(0));
var column__$1 = clojure.core.matrix.protocols.broadcast_like(scol,column);
var indices = cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(column__$1,(0)));
var new_m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,idx){
return clojure.core.matrix.protocols.set_2d(acc,idx,i,clojure.core.matrix.protocols.get_1d(column__$1,idx));
}),m,indices);
return clojure.core.matrix.protocols.coerce_param(m,new_m);
}));

(clojure.core.matrix.protocols.set_column_BANG_["object"] = (function (m,i,column){
var scol = clojure.core.matrix.protocols.get_column(m,(0));
var column__$1 = clojure.core.matrix.protocols.broadcast_like(scol,column);
var n__5636__auto__ = clojure.core.matrix.protocols.dimension_count(column__$1,(0));
var j = (0);
while(true){
if((j < n__5636__auto__)){
clojure.core.matrix.protocols.set_2d_BANG_(m,j,i,clojure.core.matrix.protocols.get_1d(column__$1,j));

var G__33752 = (j + (1));
j = G__33752;
continue;
} else {
return null;
}
break;
}
}));
(clojure.core.matrix.protocols.PSliceMap["object"] = true);

(clojure.core.matrix.protocols.slice_map["object"] = (function() {
var G__33753 = null;
var G__33753__2 = (function (m,f){
return clojure.core.matrix.impl.common.construct_matrix(m,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f,clojure.core.matrix.protocols.get_major_slice_seq(m)));
});
var G__33753__3 = (function (m,f,a){
return clojure.core.matrix.impl.common.construct_matrix(m,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(f,clojure.core.matrix.protocols.get_major_slice_seq(m),clojure.core.matrix.protocols.get_major_slice_seq(a)));
});
var G__33753__4 = (function (m,f,a,more){
return clojure.core.matrix.impl.common.construct_matrix(m,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.mapv,f,clojure.core.matrix.protocols.get_major_slice_seq(m),clojure.core.matrix.protocols.get_major_slice_seq(a),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_major_slice_seq,more)));
});
G__33753 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33753__2.call(this,m,f);
case 3:
return G__33753__3.call(this,m,f,a);
case 4:
return G__33753__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33753.cljs$core$IFn$_invoke$arity$2 = G__33753__2;
G__33753.cljs$core$IFn$_invoke$arity$3 = G__33753__3;
G__33753.cljs$core$IFn$_invoke$arity$4 = G__33753__4;
return G__33753;
})()
);
(clojure.core.matrix.protocols.PFilterSlices["object"] = true);

(clojure.core.matrix.protocols.filter_slices["object"] = (function (m,f){
var slcs = cljs.core.filterv(f,clojure.core.matrix.protocols.get_major_slice_seq(m));
if(cljs.core.seq(slcs)){
return slcs;
} else {
return null;
}
}));
(clojure.core.matrix.protocols.PAddEmap["object"] = true);

(clojure.core.matrix.protocols.add_emap_BANG_["object"] = (function() {
var G__33758 = null;
var G__33758__3 = (function (dest,f,a){
return clojure.core.matrix.protocols.matrix_add_BANG_(dest,clojure.core.matrix.protocols.element_map(a,f));
});
var G__33758__4 = (function (dest,f,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_(dest,clojure.core.matrix.protocols.element_map(a,f,b));
});
var G__33758__5 = (function (dest,f,a,b,more){
return clojure.core.matrix.protocols.matrix_add_BANG_(dest,clojure.core.matrix.protocols.element_map(a,f,b,more));
});
G__33758 = function(dest,f,a,b,more){
switch(arguments.length){
case 3:
return G__33758__3.call(this,dest,f,a);
case 4:
return G__33758__4.call(this,dest,f,a,b);
case 5:
return G__33758__5.call(this,dest,f,a,b,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33758.cljs$core$IFn$_invoke$arity$3 = G__33758__3;
G__33758.cljs$core$IFn$_invoke$arity$4 = G__33758__4;
G__33758.cljs$core$IFn$_invoke$arity$5 = G__33758__5;
return G__33758;
})()
);
(clojure.core.matrix.protocols.PSetEmap["object"] = true);

(clojure.core.matrix.protocols.set_emap_BANG_["object"] = (function() {
var G__33759 = null;
var G__33759__3 = (function (dest,f,a){
return clojure.core.matrix.protocols.assign_BANG_(dest,clojure.core.matrix.protocols.element_map(a,f));
});
var G__33759__4 = (function (dest,f,a,b){
return clojure.core.matrix.protocols.assign_BANG_(dest,clojure.core.matrix.protocols.element_map(a,f,b));
});
var G__33759__5 = (function (dest,f,a,b,more){
return clojure.core.matrix.protocols.assign_BANG_(dest,clojure.core.matrix.protocols.element_map(a,f,b,more));
});
G__33759 = function(dest,f,a,b,more){
switch(arguments.length){
case 3:
return G__33759__3.call(this,dest,f,a);
case 4:
return G__33759__4.call(this,dest,f,a,b);
case 5:
return G__33759__5.call(this,dest,f,a,b,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33759.cljs$core$IFn$_invoke$arity$3 = G__33759__3;
G__33759.cljs$core$IFn$_invoke$arity$4 = G__33759__4;
G__33759.cljs$core$IFn$_invoke$arity$5 = G__33759__5;
return G__33759;
})()
);
(clojure.core.matrix.protocols.PFunctionalOperations["number"] = true);

(clojure.core.matrix.protocols.element_seq["number"] = (function (m){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[m],null));
}));

(clojure.core.matrix.protocols.element_map["number"] = (function() {
var G__33763 = null;
var G__33763__2 = (function (m,f){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
});
var G__33763__3 = (function (m,f,a){
return clojure.core.matrix.protocols.element_map(a,(function (p1__33098_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(m,p1__33098_SHARP_) : f.call(null,m,p1__33098_SHARP_));
}));
});
var G__33763__4 = (function (m,f,a,more){
var temp__5802__auto__ = cljs.core.next(more);
if(temp__5802__auto__){
var moremore = temp__5802__auto__;
return clojure.core.matrix.protocols.element_map(a,(function() { 
var G__33764__delegate = function (p1__33099_SHARP_,p2__33100_SHARP_,rest__33101_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,m,p1__33099_SHARP_,p2__33100_SHARP_,rest__33101_SHARP_);
};
var G__33764 = function (p1__33099_SHARP_,p2__33100_SHARP_,var_args){
var rest__33101_SHARP_ = null;
if (arguments.length > 2) {
var G__33765__i = 0, G__33765__a = new Array(arguments.length -  2);
while (G__33765__i < G__33765__a.length) {G__33765__a[G__33765__i] = arguments[G__33765__i + 2]; ++G__33765__i;}
  rest__33101_SHARP_ = new cljs.core.IndexedSeq(G__33765__a,0,null);
} 
return G__33764__delegate.call(this,p1__33099_SHARP_,p2__33100_SHARP_,rest__33101_SHARP_);};
G__33764.cljs$lang$maxFixedArity = 2;
G__33764.cljs$lang$applyTo = (function (arglist__33766){
var p1__33099_SHARP_ = cljs.core.first(arglist__33766);
arglist__33766 = cljs.core.next(arglist__33766);
var p2__33100_SHARP_ = cljs.core.first(arglist__33766);
var rest__33101_SHARP_ = cljs.core.rest(arglist__33766);
return G__33764__delegate(p1__33099_SHARP_,p2__33100_SHARP_,rest__33101_SHARP_);
});
G__33764.cljs$core$IFn$_invoke$arity$variadic = G__33764__delegate;
return G__33764;
})()
,cljs.core.first(more),moremore);
} else {
return clojure.core.matrix.protocols.element_map(a,(function (p1__33102_SHARP_,p2__33103_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(m,p1__33102_SHARP_,p2__33103_SHARP_) : f.call(null,m,p1__33102_SHARP_,p2__33103_SHARP_));
}),cljs.core.first(more));
}
});
G__33763 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33763__2.call(this,m,f);
case 3:
return G__33763__3.call(this,m,f,a);
case 4:
return G__33763__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33763.cljs$core$IFn$_invoke$arity$2 = G__33763__2;
G__33763.cljs$core$IFn$_invoke$arity$3 = G__33763__3;
G__33763.cljs$core$IFn$_invoke$arity$4 = G__33763__4;
return G__33763;
})()
);

(clojure.core.matrix.protocols.element_map_BANG_["number"] = (function() {
var G__33770 = null;
var G__33770__2 = (function (m,f){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
var G__33770__3 = (function (m,f,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
var G__33770__4 = (function (m,f,a,more){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
G__33770 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33770__2.call(this,m,f);
case 3:
return G__33770__3.call(this,m,f,a);
case 4:
return G__33770__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33770.cljs$core$IFn$_invoke$arity$2 = G__33770__2;
G__33770.cljs$core$IFn$_invoke$arity$3 = G__33770__3;
G__33770.cljs$core$IFn$_invoke$arity$4 = G__33770__4;
return G__33770;
})()
);

(clojure.core.matrix.protocols.element_reduce["number"] = (function() {
var G__33771 = null;
var G__33771__2 = (function (m,f){
return m;
});
var G__33771__3 = (function (m,f,init){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(init,m) : f.call(null,init,m));
});
G__33771 = function(m,f,init){
switch(arguments.length){
case 2:
return G__33771__2.call(this,m,f);
case 3:
return G__33771__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33771.cljs$core$IFn$_invoke$arity$2 = G__33771__2;
G__33771.cljs$core$IFn$_invoke$arity$3 = G__33771__3;
return G__33771;
})()
);

(clojure.core.matrix.protocols.PFunctionalOperations["object"] = true);

(clojure.core.matrix.protocols.element_seq["object"] = (function (m){
var c = cljs.core.type(m);
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
if((dims > (1))){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.core.matrix.protocols.element_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.core.matrix.protocols.get_major_slice_seq(m)], 0));
} else {
if(cljs.core.seq_QMARK_(m)){
return m;
} else {
if(((0) === dims)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[clojure.core.matrix.protocols.get_0d(m)],null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,c)){
return m;
} else {
if(((1) === dims)){
return clojure.core.matrix.protocols.convert_to_nested_vectors(m);
} else {
if(cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(m))){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.core.matrix.protocols.element_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.core.matrix.protocols.get_major_slice_seq(m)], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Don't know how to create element-seq from: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
}
}));

(clojure.core.matrix.protocols.element_map["object"] = (function() {
var G__33775 = null;
var G__33775__2 = (function (m,f){
return clojure.core.matrix.impl.common.construct_matrix(m,clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$2(f,m));
});
var G__33775__3 = (function (m,f,a){
var vec__33107 = clojure.core.matrix.protocols.broadcast_same_shape(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33107,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33107,(1),null);
return clojure.core.matrix.impl.common.construct_matrix(m__$1,clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3(f,m__$1,a__$1));
});
var G__33775__4 = (function (m,f,a,more){
var arrays = cljs.core.cons(m,cljs.core.cons(a,more));
var shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_shape,arrays);
var sh = (function (){var or__5045__auto__ = clojure.core.matrix.protocols.common_shape(shapes);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Attempt to do element map with incompatible shapes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_shape,arrays))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var arrays__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33104_SHARP_){
return clojure.core.matrix.protocols.broadcast(p1__33104_SHARP_,sh);
}),arrays);
return clojure.core.matrix.impl.common.construct_matrix(m,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.impl.common.mapmatrix,f,arrays__$1));
});
G__33775 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33775__2.call(this,m,f);
case 3:
return G__33775__3.call(this,m,f,a);
case 4:
return G__33775__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33775.cljs$core$IFn$_invoke$arity$2 = G__33775__2;
G__33775.cljs$core$IFn$_invoke$arity$3 = G__33775__3;
G__33775.cljs$core$IFn$_invoke$arity$4 = G__33775__4;
return G__33775;
})()
);

(clojure.core.matrix.protocols.element_map_BANG_["object"] = (function() {
var G__33783 = null;
var G__33783__2 = (function (m,f){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map(m,f));
});
var G__33783__3 = (function (m,f,a){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map(m,f,a));
});
var G__33783__4 = (function (m,f,a,more){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map(m,f,a,more));
});
G__33783 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33783__2.call(this,m,f);
case 3:
return G__33783__3.call(this,m,f,a);
case 4:
return G__33783__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33783.cljs$core$IFn$_invoke$arity$2 = G__33783__2;
G__33783.cljs$core$IFn$_invoke$arity$3 = G__33783__3;
G__33783.cljs$core$IFn$_invoke$arity$4 = G__33783__4;
return G__33783;
})()
);

(clojure.core.matrix.protocols.element_reduce["object"] = (function() {
var G__33784 = null;
var G__33784__2 = (function (m,f){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(f,clojure.core.matrix.protocols.element_seq(m));
});
var G__33784__3 = (function (m,f,init){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,init,clojure.core.matrix.protocols.element_seq(m));
});
G__33784 = function(m,f,init){
switch(arguments.length){
case 2:
return G__33784__2.call(this,m,f);
case 3:
return G__33784__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33784.cljs$core$IFn$_invoke$arity$2 = G__33784__2;
G__33784.cljs$core$IFn$_invoke$arity$3 = G__33784__3;
return G__33784;
})()
);

(clojure.core.matrix.protocols.PFunctionalOperations["null"] = true);

(clojure.core.matrix.protocols.element_seq["null"] = (function (m){
return cljs.core.list(null);
}));

(clojure.core.matrix.protocols.element_map["null"] = (function() {
var G__33794 = null;
var G__33794__2 = (function (m,f){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(null) : f.call(null,null));
});
var G__33794__3 = (function (m,f,a){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,a) : f.call(null,null,a));
});
var G__33794__4 = (function (m,f,a,more){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,null,a,more);
});
G__33794 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33794__2.call(this,m,f);
case 3:
return G__33794__3.call(this,m,f,a);
case 4:
return G__33794__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33794.cljs$core$IFn$_invoke$arity$2 = G__33794__2;
G__33794.cljs$core$IFn$_invoke$arity$3 = G__33794__3;
G__33794.cljs$core$IFn$_invoke$arity$4 = G__33794__4;
return G__33794;
})()
);

(clojure.core.matrix.protocols.element_map_BANG_["null"] = (function() {
var G__33795 = null;
var G__33795__2 = (function (m,f){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do element-map! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__33795__3 = (function (m,f,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do element-map! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__33795__4 = (function (m,f,a,more){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do element-map! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
G__33795 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33795__2.call(this,m,f);
case 3:
return G__33795__3.call(this,m,f,a);
case 4:
return G__33795__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33795.cljs$core$IFn$_invoke$arity$2 = G__33795__2;
G__33795.cljs$core$IFn$_invoke$arity$3 = G__33795__3;
G__33795.cljs$core$IFn$_invoke$arity$4 = G__33795__4;
return G__33795;
})()
);

(clojure.core.matrix.protocols.element_reduce["null"] = (function() {
var G__33796 = null;
var G__33796__2 = (function (m,f){
return null;
});
var G__33796__3 = (function (m,f,init){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(init,null) : f.call(null,init,null));
});
G__33796 = function(m,f,init){
switch(arguments.length){
case 2:
return G__33796__2.call(this,m,f);
case 3:
return G__33796__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33796.cljs$core$IFn$_invoke$arity$2 = G__33796__2;
G__33796.cljs$core$IFn$_invoke$arity$3 = G__33796__3;
return G__33796;
})()
);

(cljs.core.List.prototype.clojure$core$matrix$protocols$PFunctionalOperations$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1 = (function (m){
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
clojure.core.matrix.impl.defaults.cart = (function clojure$core$matrix$impl$defaults$cart(colls){
if(cljs.core.empty_QMARK_(colls)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
var iter__5523__auto__ = (function clojure$core$matrix$impl$defaults$cart_$_iter__33110(s__33111){
return (new cljs.core.LazySeq(null,(function (){
var s__33111__$1 = s__33111;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33111__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var x = cljs.core.first(xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__33111__$1,x,xs__6360__auto__,temp__5804__auto__){
return (function clojure$core$matrix$impl$defaults$cart_$_iter__33110_$_iter__33112(s__33113){
return (new cljs.core.LazySeq(null,((function (s__33111__$1,x,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__33113__$1 = s__33113;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__33113__$1);
if(temp__5804__auto____$1){
var s__33113__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__33113__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33113__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33115 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33114 = (0);
while(true){
if((i__33114 < size__5522__auto__)){
var more = cljs.core._nth(c__5521__auto__,i__33114);
cljs.core.chunk_append(b__33115,cljs.core.cons(x,more));

var G__33815 = (i__33114 + (1));
i__33114 = G__33815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33115),clojure$core$matrix$impl$defaults$cart_$_iter__33110_$_iter__33112(cljs.core.chunk_rest(s__33113__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33115),null);
}
} else {
var more = cljs.core.first(s__33113__$2);
return cljs.core.cons(cljs.core.cons(x,more),clojure$core$matrix$impl$defaults$cart_$_iter__33110_$_iter__33112(cljs.core.rest(s__33113__$2)));
}
} else {
return null;
}
break;
}
});})(s__33111__$1,x,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__33111__$1,x,xs__6360__auto__,temp__5804__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__((function (){var G__33116 = cljs.core.rest(colls);
return (clojure.core.matrix.impl.defaults.cart.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.impl.defaults.cart.cljs$core$IFn$_invoke$arity$1(G__33116) : clojure.core.matrix.impl.defaults.cart.call(null,G__33116));
})()));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,clojure$core$matrix$impl$defaults$cart_$_iter__33110(cljs.core.rest(s__33111__$1)));
} else {
var G__33816 = cljs.core.rest(s__33111__$1);
s__33111__$1 = G__33816;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.first(colls));
}
});
clojure.core.matrix.impl.defaults.indices_seq = (function clojure$core$matrix$impl$defaults$indices_seq(m){
return clojure.core.matrix.impl.defaults.cart(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.range,clojure.core.matrix.protocols.get_shape(m)));
});
(clojure.core.matrix.protocols.PMapIndexed["number"] = true);

(clojure.core.matrix.protocols.element_map_indexed["number"] = (function() {
var G__33817 = null;
var G__33817__2 = (function (m,f){
var G__33125 = cljs.core.PersistentVector.EMPTY;
var G__33126 = m;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__33125,G__33126) : f.call(null,G__33125,G__33126));
});
var G__33817__3 = (function (m,f,a){
return clojure.core.matrix.protocols.element_map(a,(function (p1__33117_SHARP_){
var G__33127 = cljs.core.PersistentVector.EMPTY;
var G__33128 = m;
var G__33129 = p1__33117_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__33127,G__33128,G__33129) : f.call(null,G__33127,G__33128,G__33129));
}));
});
var G__33817__4 = (function (m,f,a,more){
var temp__5802__auto__ = cljs.core.next(more);
if(temp__5802__auto__){
var moremore = temp__5802__auto__;
return clojure.core.matrix.protocols.element_map(a,(function() { 
var G__33823__delegate = function (p1__33118_SHARP_,p2__33119_SHARP_,rest__33120_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.PersistentVector.EMPTY,m,p1__33118_SHARP_,p2__33119_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33120_SHARP_], 0));
};
var G__33823 = function (p1__33118_SHARP_,p2__33119_SHARP_,var_args){
var rest__33120_SHARP_ = null;
if (arguments.length > 2) {
var G__33825__i = 0, G__33825__a = new Array(arguments.length -  2);
while (G__33825__i < G__33825__a.length) {G__33825__a[G__33825__i] = arguments[G__33825__i + 2]; ++G__33825__i;}
  rest__33120_SHARP_ = new cljs.core.IndexedSeq(G__33825__a,0,null);
} 
return G__33823__delegate.call(this,p1__33118_SHARP_,p2__33119_SHARP_,rest__33120_SHARP_);};
G__33823.cljs$lang$maxFixedArity = 2;
G__33823.cljs$lang$applyTo = (function (arglist__33827){
var p1__33118_SHARP_ = cljs.core.first(arglist__33827);
arglist__33827 = cljs.core.next(arglist__33827);
var p2__33119_SHARP_ = cljs.core.first(arglist__33827);
var rest__33120_SHARP_ = cljs.core.rest(arglist__33827);
return G__33823__delegate(p1__33118_SHARP_,p2__33119_SHARP_,rest__33120_SHARP_);
});
G__33823.cljs$core$IFn$_invoke$arity$variadic = G__33823__delegate;
return G__33823;
})()
,cljs.core.first(more),moremore);
} else {
return clojure.core.matrix.protocols.element_map(a,(function (p1__33121_SHARP_,p2__33122_SHARP_){
var G__33130 = cljs.core.PersistentVector.EMPTY;
var G__33131 = m;
var G__33132 = p1__33121_SHARP_;
var G__33133 = p2__33122_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__33130,G__33131,G__33132,G__33133) : f.call(null,G__33130,G__33131,G__33132,G__33133));
}),cljs.core.first(more));
}
});
G__33817 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33817__2.call(this,m,f);
case 3:
return G__33817__3.call(this,m,f,a);
case 4:
return G__33817__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33817.cljs$core$IFn$_invoke$arity$2 = G__33817__2;
G__33817.cljs$core$IFn$_invoke$arity$3 = G__33817__3;
G__33817.cljs$core$IFn$_invoke$arity$4 = G__33817__4;
return G__33817;
})()
);

(clojure.core.matrix.protocols.element_map_indexed_BANG_["number"] = (function() {
var G__33832 = null;
var G__33832__2 = (function (m,f){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
var G__33832__3 = (function (m,f,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
var G__33832__4 = (function (m,f,a,more){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
G__33832 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33832__2.call(this,m,f);
case 3:
return G__33832__3.call(this,m,f,a);
case 4:
return G__33832__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33832.cljs$core$IFn$_invoke$arity$2 = G__33832__2;
G__33832.cljs$core$IFn$_invoke$arity$3 = G__33832__3;
G__33832.cljs$core$IFn$_invoke$arity$4 = G__33832__4;
return G__33832;
})()
);

(clojure.core.matrix.protocols.PMapIndexed["object"] = true);

(clojure.core.matrix.protocols.element_map_indexed["object"] = (function() {
var G__33833 = null;
var G__33833__2 = (function (m,f){
if(((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))){
var G__33134 = cljs.core.PersistentVector.EMPTY;
var G__33135 = clojure.core.matrix.protocols.get_0d(m);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__33134,G__33135) : f.call(null,G__33134,G__33135));
} else {
var s = cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,clojure.core.matrix.impl.defaults.indices_seq(m),clojure.core.matrix.protocols.element_seq(m));
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.coerce_param(m,s),clojure.core.matrix.protocols.get_shape(m));
}
});
var G__33833__3 = (function (m,f,a){
if(((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))){
var v = clojure.core.matrix.protocols.get_0d(m);
return clojure.core.matrix.protocols.element_map_indexed(a,(function (p1__33123_SHARP_,p2__33124_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(p1__33123_SHARP_,v,p2__33124_SHARP_) : f.call(null,p1__33123_SHARP_,v,p2__33124_SHARP_));
}));
} else {
var vec__33136 = clojure.core.matrix.protocols.broadcast_compatible(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33136,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33136,(1),null);
var s = cljs.core.map.cljs$core$IFn$_invoke$arity$4(f,clojure.core.matrix.impl.defaults.indices_seq(m__$1),clojure.core.matrix.protocols.element_seq(m__$1),clojure.core.matrix.protocols.element_seq(a__$1));
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.coerce_param(m__$1,s),clojure.core.matrix.protocols.get_shape(m__$1));
}
});
var G__33833__4 = (function (m,f,a,more){
var s = cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,clojure.core.matrix.protocols.element_seq(m),clojure.core.matrix.protocols.element_seq(a));
var s__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(clojure.core.matrix.impl.defaults.indices_seq(m),clojure.core.matrix.protocols.element_seq(m),clojure.core.matrix.protocols.element_seq(a),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_seq,more)));
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.coerce_param(m,s__$1),clojure.core.matrix.protocols.get_shape(m));
});
G__33833 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33833__2.call(this,m,f);
case 3:
return G__33833__3.call(this,m,f,a);
case 4:
return G__33833__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33833.cljs$core$IFn$_invoke$arity$2 = G__33833__2;
G__33833.cljs$core$IFn$_invoke$arity$3 = G__33833__3;
G__33833.cljs$core$IFn$_invoke$arity$4 = G__33833__4;
return G__33833;
})()
);

(clojure.core.matrix.protocols.element_map_indexed_BANG_["object"] = (function() {
var G__33834 = null;
var G__33834__2 = (function (m,f){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map_indexed(m,f));
});
var G__33834__3 = (function (m,f,a){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map_indexed(m,f,a));
});
var G__33834__4 = (function (m,f,a,more){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map_indexed(m,f,a,more));
});
G__33834 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33834__2.call(this,m,f);
case 3:
return G__33834__3.call(this,m,f,a);
case 4:
return G__33834__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33834.cljs$core$IFn$_invoke$arity$2 = G__33834__2;
G__33834.cljs$core$IFn$_invoke$arity$3 = G__33834__3;
G__33834.cljs$core$IFn$_invoke$arity$4 = G__33834__4;
return G__33834;
})()
);

(clojure.core.matrix.protocols.PMapIndexed["null"] = true);

(clojure.core.matrix.protocols.element_map_indexed["null"] = (function() {
var G__33836 = null;
var G__33836__2 = (function (m,f){
var G__33139 = cljs.core.PersistentVector.EMPTY;
var G__33140 = null;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__33139,G__33140) : f.call(null,G__33139,G__33140));
});
var G__33836__3 = (function (m,f,a){
var G__33141 = cljs.core.PersistentVector.EMPTY;
var G__33142 = null;
var G__33143 = a;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__33141,G__33142,G__33143) : f.call(null,G__33141,G__33142,G__33143));
});
var G__33836__4 = (function (m,f,a,more){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.PersistentVector.EMPTY,null,a,more);
});
G__33836 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33836__2.call(this,m,f);
case 3:
return G__33836__3.call(this,m,f,a);
case 4:
return G__33836__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33836.cljs$core$IFn$_invoke$arity$2 = G__33836__2;
G__33836.cljs$core$IFn$_invoke$arity$3 = G__33836__3;
G__33836.cljs$core$IFn$_invoke$arity$4 = G__33836__4;
return G__33836;
})()
);

(clojure.core.matrix.protocols.element_map_indexed_BANG_["null"] = (function() {
var G__33837 = null;
var G__33837__2 = (function (m,f){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do element-map-indexed! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__33837__3 = (function (m,f,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do element-map-indexed! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__33837__4 = (function (m,f,a,more){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do element-map-indexed! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
G__33837 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33837__2.call(this,m,f);
case 3:
return G__33837__3.call(this,m,f,a);
case 4:
return G__33837__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33837.cljs$core$IFn$_invoke$arity$2 = G__33837__2;
G__33837.cljs$core$IFn$_invoke$arity$3 = G__33837__3;
G__33837.cljs$core$IFn$_invoke$arity$4 = G__33837__4;
return G__33837;
})()
);
(clojure.core.matrix.protocols.PElementCount["null"] = true);

(clojure.core.matrix.protocols.element_count["null"] = (function (m){
return (1);
}));

(clojure.core.matrix.protocols.PElementCount["number"] = true);

(clojure.core.matrix.protocols.element_count["number"] = (function (m){
return (1);
}));

(clojure.core.matrix.protocols.PElementCount["object"] = true);

(clojure.core.matrix.protocols.element_count["object"] = (function (m){
return clojure.core.matrix.impl.defaults.calc_element_count(m);
}));
(clojure.core.matrix.protocols.PValidateShape["null"] = true);

(clojure.core.matrix.protocols.validate_shape["null"] = (function() {
var G__33838 = null;
var G__33838__1 = (function (m){
return null;
});
var G__33838__2 = (function (m,shape){
if((shape == null)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Shape validation failed, was scalar but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
G__33838 = function(m,shape){
switch(arguments.length){
case 1:
return G__33838__1.call(this,m);
case 2:
return G__33838__2.call(this,m,shape);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33838.cljs$core$IFn$_invoke$arity$1 = G__33838__1;
G__33838.cljs$core$IFn$_invoke$arity$2 = G__33838__2;
return G__33838;
})()
);

(clojure.core.matrix.protocols.PValidateShape["object"] = true);

(clojure.core.matrix.protocols.validate_shape["object"] = (function() {
var G__33839 = null;
var G__33839__1 = (function (m){
return clojure.core.matrix.protocols.validate_shape(m,clojure.core.matrix.protocols.get_shape(m));
});
var G__33839__2 = (function (m,expected_shape){
if(((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))){
var sh = clojure.core.matrix.protocols.get_shape(m);
if((sh == null)){
if((expected_shape == null)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Shape validation failed, was scalar but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sh),cljs.core.vec(expected_shape))){
return sh;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Shape validation failed, was ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sh)," but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
} else {
var sh = clojure.core.matrix.protocols.get_shape(m);
var ss = clojure.core.matrix.protocols.get_major_slice_seq(m);
var efirst = (function (){var or__5045__auto__ = cljs.core.first(expected_shape);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Shape validation failed, was ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sh)," but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var enext = cljs.core.next(expected_shape);
var shapes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__33144_SHARP_){
return clojure.core.matrix.protocols.validate_shape(p1__33144_SHARP_,enext);
}),ss);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,enext,shapes))){
return cljs.core.vec(cljs.core.cons(clojure.core.matrix.protocols.dimension_count(m,(0)),cljs.core.first(shapes)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Inconsistent shapes for sub arrays in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

}
});
G__33839 = function(m,expected_shape){
switch(arguments.length){
case 1:
return G__33839__1.call(this,m);
case 2:
return G__33839__2.call(this,m,expected_shape);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33839.cljs$core$IFn$_invoke$arity$1 = G__33839__1;
G__33839.cljs$core$IFn$_invoke$arity$2 = G__33839__2;
return G__33839;
})()
);
(clojure.core.matrix.protocols.PMatrixSlices["object"] = true);

(clojure.core.matrix.protocols.get_row["object"] = (function (m,i){
if((Array === m.constructor)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,i);
} else {
return clojure.core.matrix.protocols.get_major_slice(m,i);
}
}));

(clojure.core.matrix.protocols.get_column["object"] = (function (m,i){
return clojure.core.matrix.protocols.get_slice(m,(1),i);
}));

(clojure.core.matrix.protocols.get_major_slice["object"] = (function (m,i){
if((Array === m.constructor)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,i);
} else {
if(((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))){
return clojure.core.matrix.protocols.get_1d(m,i);
} else {
return clojure.core.matrix.impl.wrappers.wrap_slice(m,i);

}
}
}));

(clojure.core.matrix.protocols.get_slice["object"] = (function (m,dimension,i){
var ldimension = cljs.core.long$(dimension);
if(((0) === ldimension)){
return clojure.core.matrix.protocols.get_major_slice(m,i);
} else {
return clojure.core.matrix.protocols.get_slice(clojure.core.matrix.protocols.convert_to_nested_vectors(m),dimension,i);

}
}));
(clojure.core.matrix.protocols.PBLASBase["object"] = true);

(clojure.core.matrix.protocols.gemm_BANG_["object"] = (function (c,trans_a_QMARK_,trans_b_QMARK_,alpha,a,b,beta){
var a__$1 = (cljs.core.truth_(trans_a_QMARK_)?clojure.core.matrix.protocols.transpose(a):a);
var b__$1 = (cljs.core.truth_(trans_b_QMARK_)?clojure.core.matrix.protocols.transpose(b):b);
if((!((1.0 === beta)))){
clojure.core.matrix.protocols.scale_BANG_(c,beta);
} else {
}

return clojure.core.matrix.protocols.add_inner_product_BANG_(c,a__$1,b__$1,alpha);
}));

(clojure.core.matrix.protocols.gemv_BANG_["object"] = (function (c,trans_a_QMARK_,alpha,a,b,beta){
var a__$1 = (cljs.core.truth_(trans_a_QMARK_)?clojure.core.matrix.protocols.transpose(a):a);
if((!((1.0 === beta)))){
clojure.core.matrix.protocols.scale_BANG_(c,beta);
} else {
}

return clojure.core.matrix.protocols.add_inner_product_BANG_(c,a__$1,b,alpha);
}));
(clojure.core.matrix.protocols.PMatrixColumns["object"] = true);

(clojure.core.matrix.protocols.get_columns["object"] = (function (m){
var G__33148 = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
switch (G__33148) {
case (0):
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get columns of a 0-dimensional object",cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get columns of a 1-dimensional object",cljs.core.PersistentArrayMap.EMPTY);

break;
case (2):
return cljs.core.vec(clojure.core.matrix.protocols.get_slice_seq(m,(1)));

break;
default:
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.core.matrix.protocols.get_columns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.core.matrix.protocols.get_major_slice_seq(m)], 0)));

}
}));
(clojure.core.matrix.protocols.PMatrixRows["object"] = true);

(clojure.core.matrix.protocols.get_rows["object"] = (function (m){
var G__33149 = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
switch (G__33149) {
case (0):
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get rows of a 0-dimensional object",cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get rows of a 1-dimensional object",cljs.core.PersistentArrayMap.EMPTY);

break;
case (2):
return cljs.core.vec(clojure.core.matrix.protocols.get_major_slice_seq(m));

break;
default:
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.core.matrix.protocols.get_rows,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.core.matrix.protocols.get_major_slice_seq(m)], 0)));

}
}));
(clojure.core.matrix.protocols.PSliceView["object"] = true);

(clojure.core.matrix.protocols.get_major_slice_view["object"] = (function (m,i){
if((Array === m.constructor)){
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,i);
if(cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(ss))){
return ss;
} else {
return clojure.core.matrix.impl.wrappers.wrap_slice(m,i);
}
} else {
return clojure.core.matrix.impl.wrappers.wrap_slice(m,i);

}
}));
(clojure.core.matrix.protocols.PSliceView2["object"] = true);

(clojure.core.matrix.protocols.get_slice_view["object"] = (function (m,dim,i){
if((dim === (0))){
return clojure.core.matrix.protocols.get_major_slice_view(m,i);
} else {
return clojure.core.matrix.impl.wrappers.wrap_nd(m).clojure$core$matrix$protocols$PSliceView2$get_slice_view$arity$3(null,dim,i);
}
}));
(clojure.core.matrix.protocols.PSliceSeq["object"] = true);

(clojure.core.matrix.protocols.get_major_slice_seq["object"] = (function (m){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
if((dims <= (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't get slices on [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dims),"]-dimensional object"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,cljs.core.type(m))){
return cljs.core.seq(m);
} else {
if((dims === (1))){
var iter__5523__auto__ = (function clojure$core$matrix$impl$defaults$iter__33152(s__33153){
return (new cljs.core.LazySeq(null,(function (){
var s__33153__$1 = s__33153;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33153__$1);
if(temp__5804__auto__){
var s__33153__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33153__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33153__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33155 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33154 = (0);
while(true){
if((i__33154 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__33154);
cljs.core.chunk_append(b__33155,clojure.core.matrix.protocols.get_1d(m,i));

var G__33858 = (i__33154 + (1));
i__33154 = G__33858;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33155),clojure$core$matrix$impl$defaults$iter__33152(cljs.core.chunk_rest(s__33153__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33155),null);
}
} else {
var i = cljs.core.first(s__33153__$2);
return cljs.core.cons(clojure.core.matrix.protocols.get_1d(m,i),clojure$core$matrix$impl$defaults$iter__33152(cljs.core.rest(s__33153__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m,(0))));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33150_SHARP_){
return clojure.core.matrix.protocols.get_major_slice(m,p1__33150_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m,(0))));

}
}
}
}));
(clojure.core.matrix.protocols.PSliceSeq2["object"] = true);

(clojure.core.matrix.protocols.get_slice_seq["object"] = (function (m,dimension){
var ldimension = cljs.core.long$(dimension);
if((ldimension === (0))){
return clojure.core.matrix.protocols.get_major_slice_seq(m);
} else {
if((ldimension < (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't get slices of a negative dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dimension)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33157_SHARP_){
return clojure.core.matrix.protocols.get_slice(m,dimension,p1__33157_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m,dimension)));

}
}
}));
(clojure.core.matrix.protocols.PSliceViewSeq["object"] = true);

(clojure.core.matrix.protocols.get_major_slice_view_seq["object"] = (function (m){
var n = clojure.core.matrix.protocols.dimension_count(m,(0));
var iter__5523__auto__ = (function clojure$core$matrix$impl$defaults$iter__33162(s__33163){
return (new cljs.core.LazySeq(null,(function (){
var s__33163__$1 = s__33163;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33163__$1);
if(temp__5804__auto__){
var s__33163__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33163__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33163__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33165 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33164 = (0);
while(true){
if((i__33164 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__33164);
cljs.core.chunk_append(b__33165,clojure.core.matrix.protocols.get_major_slice_view(m,i));

var G__33864 = (i__33164 + (1));
i__33164 = G__33864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33165),clojure$core$matrix$impl$defaults$iter__33162(cljs.core.chunk_rest(s__33163__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33165),null);
}
} else {
var i = cljs.core.first(s__33163__$2);
return cljs.core.cons(clojure.core.matrix.protocols.get_major_slice_view(m,i),clojure$core$matrix$impl$defaults$iter__33162(cljs.core.rest(s__33163__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
}));
(clojure.core.matrix.protocols.PSliceJoin["null"] = true);

(clojure.core.matrix.protocols.join["null"] = (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't join an array to a nil value!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PSliceJoin["number"] = true);

(clojure.core.matrix.protocols.join["number"] = (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't join an array to a scalar number!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PSliceJoin["object"] = true);

(clojure.core.matrix.protocols.join["object"] = (function (m,a){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
var adims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a));
if((dims === (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't join to a 0-dimensional array!",cljs.core.PersistentArrayMap.EMPTY);
} else {
if((dims === adims)){
return clojure.core.matrix.protocols.coerce_param(m,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_major_slice_seq(m),clojure.core.matrix.protocols.get_major_slice_seq(a)));
} else {
if((dims === (adims + (1)))){
return clojure.core.matrix.protocols.coerce_param(m,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_major_slice_seq(m),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Joining with array of incompatible size",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}));
(clojure.core.matrix.protocols.PSliceJoinAlong["null"] = true);

(clojure.core.matrix.protocols.join_along["null"] = (function (m,a,dim){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't join an array to a nil value!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PSliceJoinAlong["number"] = true);

(clojure.core.matrix.protocols.join_along["number"] = (function (m,a,dim){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't join an array to a scalar number!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PSliceJoinAlong["object"] = true);

(clojure.core.matrix.protocols.join_along["object"] = (function (m,a,dim){
return clojure.core.matrix.protocols.coerce_param(m,(function (){var dim__$1 = cljs.core.long$(dim);
if((dim__$1 === (0))){
return clojure.core.matrix.protocols.join(m,a);
} else {
var ddim = (dim__$1 - (1));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__33182_SHARP_,p2__33183_SHARP_){
return clojure.core.matrix.protocols.join_along(p1__33182_SHARP_,p2__33183_SHARP_,ddim);
}),clojure.core.matrix.protocols.get_major_slice_seq(m),clojure.core.matrix.protocols.get_major_slice_seq(a));

}
})());
}));
(clojure.core.matrix.protocols.PSubVector["null"] = true);

(clojure.core.matrix.protocols.subvector["null"] = (function (m,start,length){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't take subvector of nil",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PSubVector["number"] = true);

(clojure.core.matrix.protocols.subvector["number"] = (function (m,start,length){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't take subvector of a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PSubVector["object"] = true);

(clojure.core.matrix.protocols.subvector["object"] = (function (m,start,length){
return clojure.core.matrix.impl.wrappers.wrap_nd(m).clojure$core$matrix$protocols$PSubVector$subvector$arity$3(null,start,length);
}));
(clojure.core.matrix.protocols.PSubMatrix["null"] = true);

(clojure.core.matrix.protocols.submatrix["null"] = (function (m,index_ranges){
if(cljs.core.seq(index_ranges)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't take partial submatrix of nil",cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
}));

(clojure.core.matrix.protocols.PSubMatrix["number"] = true);

(clojure.core.matrix.protocols.submatrix["number"] = (function (m,index_ranges){
if(cljs.core.seq(index_ranges)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't take partial submatrix of a scalar number",cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
}));

(clojure.core.matrix.protocols.PSubMatrix["object"] = true);

(clojure.core.matrix.protocols.submatrix["object"] = (function (m,index_ranges){
return clojure.core.matrix.impl.wrappers.wrap_submatrix(m,index_ranges);
}));
(clojure.core.matrix.protocols.PBroadcast["null"] = true);

(clojure.core.matrix.protocols.broadcast["null"] = (function (m,new_shape){
return clojure.core.matrix.impl.wrappers.wrap_broadcast(m,new_shape);
}));

(clojure.core.matrix.protocols.PBroadcast["number"] = true);

(clojure.core.matrix.protocols.broadcast["number"] = (function (m,new_shape){
return clojure.core.matrix.impl.wrappers.wrap_broadcast(m,new_shape);
}));

(clojure.core.matrix.protocols.PBroadcast["object"] = true);

(clojure.core.matrix.protocols.broadcast["object"] = (function (m,new_shape){
var nshape = new_shape;
var mshape = clojure.core.matrix.protocols.get_shape(m);
var mdims = cljs.core.count(mshape);
var ndims = cljs.core.count(nshape);
if((((mdims === ndims)) && (clojure.core.matrix.utils.same_shape_object_QMARK_(nshape,mshape)))){
return m;
} else {
return clojure.core.matrix.impl.wrappers.wrap_broadcast(m,new_shape);

}
}));
(clojure.core.matrix.protocols.PBroadcastLike["null"] = true);

(clojure.core.matrix.protocols.broadcast_like["null"] = (function (m,a){
return clojure.core.matrix.impl.wrappers.wrap_broadcast(a,clojure.core.matrix.protocols.get_shape(m));
}));

(clojure.core.matrix.protocols.PBroadcastLike["object"] = true);

(clojure.core.matrix.protocols.broadcast_like["object"] = (function (m,a){
var sm = clojure.core.matrix.protocols.get_shape(m);
var sa = clojure.core.matrix.protocols.get_shape(a);
if(clojure.core.matrix.utils.same_shape_object_QMARK_(sm,sa)){
return a;
} else {
return clojure.core.matrix.protocols.broadcast(a,sm);
}
}));
(clojure.core.matrix.protocols.PBroadcastCoerce["null"] = true);

(clojure.core.matrix.protocols.broadcast_coerce["null"] = (function (m,a){
return clojure.core.matrix.protocols.coerce_param(m,clojure.core.matrix.protocols.broadcast_like(m,a));
}));

(clojure.core.matrix.protocols.PBroadcastCoerce["object"] = true);

(clojure.core.matrix.protocols.broadcast_coerce["object"] = (function (m,a){
return clojure.core.matrix.protocols.coerce_param(m,clojure.core.matrix.protocols.broadcast_like(m,a));
}));
(clojure.core.matrix.protocols.PPack["null"] = true);

(clojure.core.matrix.protocols.pack["null"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.PPack["object"] = true);

(clojure.core.matrix.protocols.pack["object"] = (function (m){
return m;
}));
(clojure.core.matrix.protocols.PConversion["null"] = true);

(clojure.core.matrix.protocols.convert_to_nested_vectors["null"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.PConversion["number"] = true);

(clojure.core.matrix.protocols.convert_to_nested_vectors["number"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.PConversion["object"] = true);

(clojure.core.matrix.protocols.convert_to_nested_vectors["object"] = (function (m){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
if((dims === (0))){
return clojure.core.matrix.protocols.get_0d(m);
} else {
if(((1) === dims)){
if(((cljs.core.seq_QMARK_(m)) || (cljs.core.sequential_QMARK_(m)))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_0d,m);
} else {
var n = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
var i = (0);
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < n)){
var G__33876 = (i + (1));
var G__33877 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,clojure.core.matrix.protocols.get_1d(m,i));
i = G__33876;
res = G__33877;
continue;
} else {
return res;
}
break;
}
}
} else {
if(cljs.core.sequential_QMARK_(m)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.convert_to_nested_vectors,m);
} else {
if(cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(m))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.convert_to_nested_vectors,clojure.core.matrix.protocols.get_major_slice_seq(m));
} else {
if(cljs.core.seq_QMARK_(m)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.convert_to_nested_vectors,m);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't work out how to convert to nested vectors: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
}));
(clojure.core.matrix.protocols.PRowColMatrix["null"] = true);

(clojure.core.matrix.protocols.column_matrix["null"] = (function (m,data){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't create a column matrix from nil",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.row_matrix["null"] = (function (m,data){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't create a column matrix from nil",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PRowColMatrix["object"] = true);

(clojure.core.matrix.protocols.column_matrix["object"] = (function (m,data){
if(((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(data)))){
return clojure.core.matrix.protocols.coerce_param(m,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,clojure.core.matrix.protocols.element_seq(data)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't create a column matrix: input must be 1D vector",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(clojure.core.matrix.protocols.row_matrix["object"] = (function (m,data){
if(((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(data)))){
return clojure.core.matrix.protocols.coerce_param(m,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[data],null)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't create a row matrix: input must be 1D vector",cljs.core.PersistentArrayMap.EMPTY);
}
}));
(clojure.core.matrix.protocols.PVectorView["null"] = true);

(clojure.core.matrix.protocols.as_vector["null"] = (function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
}));

(clojure.core.matrix.protocols.PVectorView["number"] = true);

(clojure.core.matrix.protocols.as_vector["number"] = (function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null);
}));

(clojure.core.matrix.protocols.PVectorView["object"] = true);

(clojure.core.matrix.protocols.as_vector["object"] = (function (m){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
if((dims === (0))){
return clojure.core.matrix.protocols.broadcast(clojure.core.matrix.impl.wrappers.wrap_nd(m),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
} else {
if((dims === (1))){
return m;
} else {
if(cljs.core.not(clojure.core.matrix.protocols.is_mutable_QMARK_(m))){
return clojure.core.matrix.protocols.to_vector(m);
} else {
return null;

}
}
}
}));
(clojure.core.matrix.protocols.PVectorisable["null"] = true);

(clojure.core.matrix.protocols.to_vector["null"] = (function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
}));

(clojure.core.matrix.protocols.PVectorisable["number"] = true);

(clojure.core.matrix.protocols.to_vector["number"] = (function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null);
}));

(clojure.core.matrix.protocols.PVectorisable["object"] = true);

(clojure.core.matrix.protocols.to_vector["object"] = (function (m){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
if(((0) === dims)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.protocols.get_0d(m)], null);
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_(m))){
return clojure.core.matrix.protocols.clone(m);
} else {
return cljs.core.vec(clojure.core.matrix.protocols.element_seq(m));

}
}
}));
(clojure.core.matrix.protocols.PReshaping["null"] = true);

(clojure.core.matrix.protocols.reshape["null"] = (function (m,shape){
return clojure.core.matrix.protocols.reshape(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),shape);
}));

(clojure.core.matrix.protocols.PReshaping["number"] = true);

(clojure.core.matrix.protocols.reshape["number"] = (function (m,shape){
return clojure.core.matrix.protocols.reshape(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null),shape);
}));

(clojure.core.matrix.protocols.PReshaping["object"] = true);

(clojure.core.matrix.protocols.reshape["object"] = (function (m,shape){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_shape(m),shape)){
return m;
} else {
var gv = clojure.core.matrix.protocols.generic_value(m);
var es = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_seq(m),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(gv));
var partition_shape = (function clojure$core$matrix$impl$defaults$partition_shape(es__$1,shape__$1){
var temp__5802__auto__ = cljs.core.seq(shape__$1);
if(temp__5802__auto__){
var s = temp__5802__auto__;
var ns = cljs.core.next(s);
var plen = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,(1),ns);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33211_SHARP_){
return clojure$core$matrix$impl$defaults$partition_shape(p1__33211_SHARP_,ns);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(plen,es__$1));
} else {
return cljs.core.first(es__$1);
}
});
var temp__5802__auto__ = cljs.core.seq(shape);
if(temp__5802__auto__){
var shape__$1 = temp__5802__auto__;
var fs = cljs.core.long$(cljs.core.first(shape__$1));
var parts = partition_shape(es,shape__$1);
var or__5045__auto__ = clojure.core.matrix.protocols.construct_matrix(m,cljs.core.take.cljs$core$IFn$_invoke$arity$2(fs,parts));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.protocols.construct_matrix(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(fs,parts));
}
} else {
return cljs.core.first(es);
}
}
}));
(clojure.core.matrix.protocols.PReshapeView["null"] = true);

(clojure.core.matrix.protocols.reshape_view["null"] = (function (m,shape){
return clojure.core.matrix.protocols.broadcast(null,shape);
}));

(clojure.core.matrix.protocols.PReshapeView["number"] = true);

(clojure.core.matrix.protocols.reshape_view["number"] = (function (m,shape){
return clojure.core.matrix.protocols.broadcast(m,shape);
}));

(clojure.core.matrix.protocols.PReshapeView["object"] = true);

(clojure.core.matrix.protocols.reshape_view["object"] = (function (m,shape){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_(m))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["TODO: ","reshape-view not supported on mutable array of type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((clojure.core.matrix.impl.defaults.class$.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.impl.defaults.class$.cljs$core$IFn$_invoke$arity$1(m) : clojure.core.matrix.impl.defaults.class$.call(null,m)))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return clojure.core.matrix.protocols.reshape(m,shape);
}
}));
(clojure.core.matrix.protocols.PCoercion["null"] = true);

(clojure.core.matrix.protocols.coerce_param["null"] = (function (m,param){
return param;
}));

(clojure.core.matrix.protocols.PCoercion["number"] = true);

(clojure.core.matrix.protocols.coerce_param["number"] = (function (m,param){
return param;
}));

(clojure.core.matrix.protocols.PCoercion["object"] = true);

(clojure.core.matrix.protocols.coerce_param["object"] = (function (m,param){
var param__$1 = (((param instanceof cljs.core.ISeq))?clojure.core.matrix.protocols.convert_to_nested_vectors(param):param);
var or__5045__auto__ = clojure.core.matrix.protocols.construct_matrix(m,param__$1);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return param__$1;
}
}));
(clojure.core.matrix.protocols.PExponent["number"] = true);

(clojure.core.matrix.protocols.element_pow["number"] = (function (m,exponent){
if(cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(exponent))){
return clojure.core.matrix.protocols.element_map(exponent,(function (p1__33215_SHARP_){
return Math.pow(m,p1__33215_SHARP_);
}));
} else {
return Math.pow(m,exponent);
}
}));

(clojure.core.matrix.protocols.PExponent["object"] = true);

(clojure.core.matrix.protocols.element_pow["object"] = (function (m,exponent){
if(cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(exponent))){
return clojure.core.matrix.protocols.element_map(m,(function (p1__33219_SHARP_,p2__33220_SHARP_){
return Math.pow(p1__33219_SHARP_,p2__33220_SHARP_);
}),exponent);
} else {
return clojure.core.matrix.protocols.element_map(m,(function (p1__33221_SHARP_){
return Math.pow(p1__33221_SHARP_,exponent);
}));
}
}));
(clojure.core.matrix.protocols.PSquare["number"] = true);

(clojure.core.matrix.protocols.square["number"] = (function (m){
return (m * m);
}));

(clojure.core.matrix.protocols.PSquare["object"] = true);

(clojure.core.matrix.protocols.square["object"] = (function (m){
return clojure.core.matrix.protocols.element_multiply(m,m);
}));
(clojure.core.matrix.protocols.PLogistic["number"] = true);

(clojure.core.matrix.protocols.logistic["number"] = (function (m){
var e_t = Math.exp((- m));
return (1.0 / (1.0 + e_t));
}));

(clojure.core.matrix.protocols.PLogistic["object"] = true);

(clojure.core.matrix.protocols.logistic["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,clojure.core.matrix.impl.common.logistic_fn);
}));
(clojure.core.matrix.protocols.PLogisticMutable["object"] = true);

(clojure.core.matrix.protocols.logistic_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,clojure.core.matrix.impl.common.logistic_fn);
}));
(clojure.core.matrix.protocols.PSoftplus["number"] = true);

(clojure.core.matrix.protocols.softplus["number"] = (function (m){
var et = Math.exp(m);
return Math.log((1.0 + et));
}));

(clojure.core.matrix.protocols.PSoftplus["object"] = true);

(clojure.core.matrix.protocols.softplus["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,clojure.core.matrix.impl.common.softplus_fn);
}));
(clojure.core.matrix.protocols.PSoftmax["object"] = true);

(clojure.core.matrix.protocols.softmax["object"] = (function (m){
var em = clojure.core.matrix.protocols.exp(m);
return clojure.core.matrix.protocols.element_divide(em,clojure.core.matrix.protocols.element_sum(em));
}));
(clojure.core.matrix.protocols.PSoftmaxMutable["object"] = true);

(clojure.core.matrix.protocols.softmax_BANG_["object"] = (function (m){
clojure.core.matrix.protocols.exp_BANG_(m);

clojure.core.matrix.protocols.element_divide_BANG_(m,clojure.core.matrix.protocols.element_sum(m));

return m;
}));
(clojure.core.matrix.protocols.PSoftplusMutable["object"] = true);

(clojure.core.matrix.protocols.softplus_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,clojure.core.matrix.impl.common.softplus_fn);
}));
(clojure.core.matrix.protocols.PReLU["number"] = true);

(clojure.core.matrix.protocols.relu["number"] = (function (m){
return Math.max(0.0,m);
}));

(clojure.core.matrix.protocols.PReLU["object"] = true);

(clojure.core.matrix.protocols.relu["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,clojure.core.matrix.impl.common.relu_fn);
}));
(clojure.core.matrix.protocols.PReLUMutable["object"] = true);

(clojure.core.matrix.protocols.relu_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,clojure.core.matrix.impl.common.relu_fn);
}));
(clojure.core.matrix.protocols.PMathsFunctions["number"] = true);

(clojure.core.matrix.protocols.abs["number"] = (function (m){
return Math.abs(m);
}));

(clojure.core.matrix.protocols.acos["number"] = (function (m){
return Math.acos(m);
}));

(clojure.core.matrix.protocols.asin["number"] = (function (m){
return Math.asin(m);
}));

(clojure.core.matrix.protocols.atan["number"] = (function (m){
return Math.atan(m);
}));

(clojure.core.matrix.protocols.cbrt["number"] = (function (m){
return Math.cbrt(m);
}));

(clojure.core.matrix.protocols.ceil["number"] = (function (m){
return Math.ceil(m);
}));

(clojure.core.matrix.protocols.cos["number"] = (function (m){
return Math.cos(m);
}));

(clojure.core.matrix.protocols.cosh["number"] = (function (m){
return Math.cosh(m);
}));

(clojure.core.matrix.protocols.exp["number"] = (function (m){
return Math.exp(m);
}));

(clojure.core.matrix.protocols.floor["number"] = (function (m){
return Math.floor(m);
}));

(clojure.core.matrix.protocols.log["number"] = (function (m){
return Math.log(m);
}));

(clojure.core.matrix.protocols.log10["number"] = (function (m){
return Math.log10(m);
}));

(clojure.core.matrix.protocols.round["number"] = (function (m){
return Math.rint(m);
}));

(clojure.core.matrix.protocols.signum["number"] = (function (m){
return Math.sign(m);
}));

(clojure.core.matrix.protocols.sin["number"] = (function (m){
return Math.sin(m);
}));

(clojure.core.matrix.protocols.sinh["number"] = (function (m){
return Math.sinh(m);
}));

(clojure.core.matrix.protocols.sqrt["number"] = (function (m){
return Math.sqrt(m);
}));

(clojure.core.matrix.protocols.tan["number"] = (function (m){
return Math.tan(m);
}));

(clojure.core.matrix.protocols.tanh["number"] = (function (m){
return Math.tanh(m);
}));

(clojure.core.matrix.protocols.to_degrees["number"] = (function (m){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_(m);
}));

(clojure.core.matrix.protocols.to_radians["number"] = (function (m){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_(m);
}));

(clojure.core.matrix.protocols.PMathsFunctions["object"] = true);

(clojure.core.matrix.protocols.abs["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32147__32148__auto__){
return Math.abs(p1__32147__32148__auto__);
}));
}));

(clojure.core.matrix.protocols.acos["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32147__32148__auto__){
return Math.acos(p1__32147__32148__auto__);
}));
}));

(clojure.core.matrix.protocols.asin["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32147__32148__auto__){
return Math.asin(p1__32147__32148__auto__);
}));
}));

(clojure.core.matrix.protocols.atan["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32147__32148__auto__){
return Math.atan(p1__32147__32148__auto__);
}));
}));

(clojure.core.matrix.protocols.cbrt["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32147__32148__auto__){
return Math.cbrt(p1__32147__32148__auto__);
}));
}));

(clojure.core.matrix.protocols.ceil["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32147__32148__auto__){
return Math.ceil(p1__32147__32148__auto__);
}));
}));

(clojure.core.matrix.protocols.cos["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32147__32148__auto__){
return Math.cos(p1__32147__32148__auto__);
}));
}));

(clojure.core.matrix.protocols.cosh["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32147__32148__auto__){
return Math.cosh(p1__32147__32148__auto__);
}));
}));

(clojure.core.matrix.protocols.exp["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32147__32148__auto__){
return Math.exp(p1__32147__32148__auto__);
}));
}));

(clojure.core.matrix.protocols.floor["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32147__32148__auto__){
return Math.floor(p1__32147__32148__auto__);
}));
}));

(clojure.core.matrix.protocols.log["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32147__32148__auto__){
return Math.log(p1__32147__32148__auto__);
}));
}));

(clojure.core.matrix.protocols.log10["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32147__32148__auto__){
return Math.log10(p1__32147__32148__auto__);
}));
}));

(clojure.core.matrix.protocols.round["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32147__32148__auto__){
return Math.rint(p1__32147__32148__auto__);
}));
}));

(clojure.core.matrix.protocols.signum["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32147__32148__auto__){
return Math.sign(p1__32147__32148__auto__);
}));
}));

(clojure.core.matrix.protocols.sin["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32147__32148__auto__){
return Math.sin(p1__32147__32148__auto__);
}));
}));

(clojure.core.matrix.protocols.sinh["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32147__32148__auto__){
return Math.sinh(p1__32147__32148__auto__);
}));
}));

(clojure.core.matrix.protocols.sqrt["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32147__32148__auto__){
return Math.sqrt(p1__32147__32148__auto__);
}));
}));

(clojure.core.matrix.protocols.tan["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32147__32148__auto__){
return Math.tan(p1__32147__32148__auto__);
}));
}));

(clojure.core.matrix.protocols.tanh["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32147__32148__auto__){
return Math.tanh(p1__32147__32148__auto__);
}));
}));

(clojure.core.matrix.protocols.to_degrees["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32147__32148__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_(p1__32147__32148__auto__);
}));
}));

(clojure.core.matrix.protocols.to_radians["object"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32147__32148__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_(p1__32147__32148__auto__);
}));
}));

(clojure.core.matrix.protocols.PMathsFunctions["array"] = true);

(clojure.core.matrix.protocols.abs["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32149__32150__auto__){
return Math.abs(p1__32149__32150__auto__);
}));
}));

(clojure.core.matrix.protocols.acos["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32149__32150__auto__){
return Math.acos(p1__32149__32150__auto__);
}));
}));

(clojure.core.matrix.protocols.asin["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32149__32150__auto__){
return Math.asin(p1__32149__32150__auto__);
}));
}));

(clojure.core.matrix.protocols.atan["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32149__32150__auto__){
return Math.atan(p1__32149__32150__auto__);
}));
}));

(clojure.core.matrix.protocols.cbrt["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32149__32150__auto__){
return Math.cbrt(p1__32149__32150__auto__);
}));
}));

(clojure.core.matrix.protocols.ceil["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32149__32150__auto__){
return Math.ceil(p1__32149__32150__auto__);
}));
}));

(clojure.core.matrix.protocols.cos["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32149__32150__auto__){
return Math.cos(p1__32149__32150__auto__);
}));
}));

(clojure.core.matrix.protocols.cosh["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32149__32150__auto__){
return Math.cosh(p1__32149__32150__auto__);
}));
}));

(clojure.core.matrix.protocols.exp["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32149__32150__auto__){
return Math.exp(p1__32149__32150__auto__);
}));
}));

(clojure.core.matrix.protocols.floor["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32149__32150__auto__){
return Math.floor(p1__32149__32150__auto__);
}));
}));

(clojure.core.matrix.protocols.log["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32149__32150__auto__){
return Math.log(p1__32149__32150__auto__);
}));
}));

(clojure.core.matrix.protocols.log10["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32149__32150__auto__){
return Math.log10(p1__32149__32150__auto__);
}));
}));

(clojure.core.matrix.protocols.round["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32149__32150__auto__){
return Math.rint(p1__32149__32150__auto__);
}));
}));

(clojure.core.matrix.protocols.signum["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32149__32150__auto__){
return Math.sign(p1__32149__32150__auto__);
}));
}));

(clojure.core.matrix.protocols.sin["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32149__32150__auto__){
return Math.sin(p1__32149__32150__auto__);
}));
}));

(clojure.core.matrix.protocols.sinh["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32149__32150__auto__){
return Math.sinh(p1__32149__32150__auto__);
}));
}));

(clojure.core.matrix.protocols.sqrt["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32149__32150__auto__){
return Math.sqrt(p1__32149__32150__auto__);
}));
}));

(clojure.core.matrix.protocols.tan["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32149__32150__auto__){
return Math.tan(p1__32149__32150__auto__);
}));
}));

(clojure.core.matrix.protocols.tanh["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32149__32150__auto__){
return Math.tanh(p1__32149__32150__auto__);
}));
}));

(clojure.core.matrix.protocols.to_degrees["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32149__32150__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_(p1__32149__32150__auto__);
}));
}));

(clojure.core.matrix.protocols.to_radians["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,(function (p1__32149__32150__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_(p1__32149__32150__auto__);
}));
}));
(clojure.core.matrix.protocols.PMathsFunctionsMutable["number"] = true);

(clojure.core.matrix.protocols.abs_BANG_["number"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.acos_BANG_["number"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.asin_BANG_["number"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.atan_BANG_["number"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.cbrt_BANG_["number"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.ceil_BANG_["number"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.cos_BANG_["number"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.cosh_BANG_["number"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.exp_BANG_["number"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.floor_BANG_["number"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.log_BANG_["number"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.log10_BANG_["number"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.round_BANG_["number"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.signum_BANG_["number"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.sin_BANG_["number"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.sinh_BANG_["number"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.sqrt_BANG_["number"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.tan_BANG_["number"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.tanh_BANG_["number"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.to_degrees_BANG_["number"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.to_radians_BANG_["number"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PMathsFunctionsMutable["object"] = true);

(clojure.core.matrix.protocols.abs_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32151__32152__auto__){
return Math.abs(p1__32151__32152__auto__);
}));
}));

(clojure.core.matrix.protocols.acos_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32151__32152__auto__){
return Math.acos(p1__32151__32152__auto__);
}));
}));

(clojure.core.matrix.protocols.asin_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32151__32152__auto__){
return Math.asin(p1__32151__32152__auto__);
}));
}));

(clojure.core.matrix.protocols.atan_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32151__32152__auto__){
return Math.atan(p1__32151__32152__auto__);
}));
}));

(clojure.core.matrix.protocols.cbrt_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32151__32152__auto__){
return Math.cbrt(p1__32151__32152__auto__);
}));
}));

(clojure.core.matrix.protocols.ceil_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32151__32152__auto__){
return Math.ceil(p1__32151__32152__auto__);
}));
}));

(clojure.core.matrix.protocols.cos_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32151__32152__auto__){
return Math.cos(p1__32151__32152__auto__);
}));
}));

(clojure.core.matrix.protocols.cosh_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32151__32152__auto__){
return Math.cosh(p1__32151__32152__auto__);
}));
}));

(clojure.core.matrix.protocols.exp_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32151__32152__auto__){
return Math.exp(p1__32151__32152__auto__);
}));
}));

(clojure.core.matrix.protocols.floor_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32151__32152__auto__){
return Math.floor(p1__32151__32152__auto__);
}));
}));

(clojure.core.matrix.protocols.log_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32151__32152__auto__){
return Math.log(p1__32151__32152__auto__);
}));
}));

(clojure.core.matrix.protocols.log10_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32151__32152__auto__){
return Math.log10(p1__32151__32152__auto__);
}));
}));

(clojure.core.matrix.protocols.round_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32151__32152__auto__){
return Math.rint(p1__32151__32152__auto__);
}));
}));

(clojure.core.matrix.protocols.signum_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32151__32152__auto__){
return Math.sign(p1__32151__32152__auto__);
}));
}));

(clojure.core.matrix.protocols.sin_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32151__32152__auto__){
return Math.sin(p1__32151__32152__auto__);
}));
}));

(clojure.core.matrix.protocols.sinh_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32151__32152__auto__){
return Math.sinh(p1__32151__32152__auto__);
}));
}));

(clojure.core.matrix.protocols.sqrt_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32151__32152__auto__){
return Math.sqrt(p1__32151__32152__auto__);
}));
}));

(clojure.core.matrix.protocols.tan_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32151__32152__auto__){
return Math.tan(p1__32151__32152__auto__);
}));
}));

(clojure.core.matrix.protocols.tanh_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32151__32152__auto__){
return Math.tanh(p1__32151__32152__auto__);
}));
}));

(clojure.core.matrix.protocols.to_degrees_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32151__32152__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_(p1__32151__32152__auto__);
}));
}));

(clojure.core.matrix.protocols.to_radians_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32151__32152__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_(p1__32151__32152__auto__);
}));
}));

(clojure.core.matrix.protocols.PMathsFunctionsMutable["array"] = true);

(clojure.core.matrix.protocols.abs_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32153__32154__auto__){
return Math.abs(p1__32153__32154__auto__);
}));
}));

(clojure.core.matrix.protocols.acos_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32153__32154__auto__){
return Math.acos(p1__32153__32154__auto__);
}));
}));

(clojure.core.matrix.protocols.asin_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32153__32154__auto__){
return Math.asin(p1__32153__32154__auto__);
}));
}));

(clojure.core.matrix.protocols.atan_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32153__32154__auto__){
return Math.atan(p1__32153__32154__auto__);
}));
}));

(clojure.core.matrix.protocols.cbrt_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32153__32154__auto__){
return Math.cbrt(p1__32153__32154__auto__);
}));
}));

(clojure.core.matrix.protocols.ceil_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32153__32154__auto__){
return Math.ceil(p1__32153__32154__auto__);
}));
}));

(clojure.core.matrix.protocols.cos_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32153__32154__auto__){
return Math.cos(p1__32153__32154__auto__);
}));
}));

(clojure.core.matrix.protocols.cosh_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32153__32154__auto__){
return Math.cosh(p1__32153__32154__auto__);
}));
}));

(clojure.core.matrix.protocols.exp_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32153__32154__auto__){
return Math.exp(p1__32153__32154__auto__);
}));
}));

(clojure.core.matrix.protocols.floor_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32153__32154__auto__){
return Math.floor(p1__32153__32154__auto__);
}));
}));

(clojure.core.matrix.protocols.log_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32153__32154__auto__){
return Math.log(p1__32153__32154__auto__);
}));
}));

(clojure.core.matrix.protocols.log10_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32153__32154__auto__){
return Math.log10(p1__32153__32154__auto__);
}));
}));

(clojure.core.matrix.protocols.round_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32153__32154__auto__){
return Math.rint(p1__32153__32154__auto__);
}));
}));

(clojure.core.matrix.protocols.signum_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32153__32154__auto__){
return Math.sign(p1__32153__32154__auto__);
}));
}));

(clojure.core.matrix.protocols.sin_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32153__32154__auto__){
return Math.sin(p1__32153__32154__auto__);
}));
}));

(clojure.core.matrix.protocols.sinh_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32153__32154__auto__){
return Math.sinh(p1__32153__32154__auto__);
}));
}));

(clojure.core.matrix.protocols.sqrt_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32153__32154__auto__){
return Math.sqrt(p1__32153__32154__auto__);
}));
}));

(clojure.core.matrix.protocols.tan_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32153__32154__auto__){
return Math.tan(p1__32153__32154__auto__);
}));
}));

(clojure.core.matrix.protocols.tanh_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32153__32154__auto__){
return Math.tanh(p1__32153__32154__auto__);
}));
}));

(clojure.core.matrix.protocols.to_degrees_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32153__32154__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_(p1__32153__32154__auto__);
}));
}));

(clojure.core.matrix.protocols.to_radians_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,(function (p1__32153__32154__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_(p1__32153__32154__auto__);
}));
}));
(clojure.core.matrix.protocols.PMatrixSubComponents["object"] = true);

(clojure.core.matrix.protocols.main_diagonal["object"] = (function (m){
var sh = clojure.core.matrix.protocols.get_shape(m);
var rank = cljs.core.count(sh);
var dims = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,sh);
var diag_vals = (function (){var iter__5523__auto__ = (function clojure$core$matrix$impl$defaults$iter__33274(s__33275){
return (new cljs.core.LazySeq(null,(function (){
var s__33275__$1 = s__33275;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33275__$1);
if(temp__5804__auto__){
var s__33275__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33275__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33275__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33277 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33276 = (0);
while(true){
if((i__33276 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__33276);
cljs.core.chunk_append(b__33277,clojure.core.matrix.protocols.get_nd(m,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rank,i)));

var G__33908 = (i__33276 + (1));
i__33276 = G__33908;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33277),clojure$core$matrix$impl$defaults$iter__33274(cljs.core.chunk_rest(s__33275__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33277),null);
}
} else {
var i = cljs.core.first(s__33275__$2);
return cljs.core.cons(clojure.core.matrix.protocols.get_nd(m,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rank,i)),clojure$core$matrix$impl$defaults$iter__33274(cljs.core.rest(s__33275__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(dims));
})();
return clojure.core.matrix.implementations.construct(m,diag_vals);
}));
(clojure.core.matrix.protocols.PSpecialisedConstructors["object"] = true);

(clojure.core.matrix.protocols.identity_matrix["object"] = (function (m,dims){
return clojure.core.matrix.protocols.diagonal_matrix(m,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(dims,1.0));
}));

(clojure.core.matrix.protocols.diagonal_matrix["object"] = (function (m,diagonal_values){
var dims = cljs.core.count(diagonal_values);
var diagonal_values__$1 = clojure.core.matrix.protocols.convert_to_nested_vectors(diagonal_values);
var zs = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(dims,0.0));
var dm = cljs.core.vec((function (){var iter__5523__auto__ = (function clojure$core$matrix$impl$defaults$iter__33287(s__33288){
return (new cljs.core.LazySeq(null,(function (){
var s__33288__$1 = s__33288;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33288__$1);
if(temp__5804__auto__){
var s__33288__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33288__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33288__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33290 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33289 = (0);
while(true){
if((i__33289 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__33289);
cljs.core.chunk_append(b__33290,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(zs,i,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(diagonal_values__$1,i)));

var G__33919 = (i__33289 + (1));
i__33289 = G__33919;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33290),clojure$core$matrix$impl$defaults$iter__33287(cljs.core.chunk_rest(s__33288__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33290),null);
}
} else {
var i = cljs.core.first(s__33288__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(zs,i,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(diagonal_values__$1,i)),clojure$core$matrix$impl$defaults$iter__33287(cljs.core.rest(s__33288__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(dims));
})());
return clojure.core.matrix.protocols.coerce_param(m,dm);
}));
(clojure.core.matrix.protocols.PPermutationMatrix["object"] = true);

(clojure.core.matrix.protocols.permutation_matrix["object"] = (function (m,permutation){
var v = clojure.core.matrix.protocols.convert_to_nested_vectors(permutation);
var n = cljs.core.count(v);
var r = clojure.core.matrix.protocols.new_matrix(m,n,n);
var r__$1 = (cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_(r))?r:clojure.core.matrix.impl.defaults.construct_mutable_matrix(r));
var n__5636__auto___33924 = n;
var i_33925 = (0);
while(true){
if((i_33925 < n__5636__auto___33924)){
clojure.core.matrix.protocols.set_2d_BANG_(r__$1,i_33925,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i_33925) : v.call(null,i_33925)),1.0);

var G__33928 = (i_33925 + (1));
i_33925 = G__33928;
continue;
} else {
}
break;
}

return r__$1;
}));
(clojure.core.matrix.protocols.PBlockDiagonalMatrix["object"] = true);

(clojure.core.matrix.protocols.block_diagonal_matrix["object"] = (function (m,blocks){
var aux = (function clojure$core$matrix$impl$defaults$aux(acc,blocks__$1){
if(cljs.core.empty_QMARK_(blocks__$1)){
return acc;
} else {
var acc_dim = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(acc,(0)));
var new_block = (blocks__$1.cljs$core$IFn$_invoke$arity$1 ? blocks__$1.cljs$core$IFn$_invoke$arity$1((0)) : blocks__$1.call(null,(0)));
var new_block_dim = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(new_block,(0)));
var new_dim = (acc_dim + new_block_dim);
var dm = cljs.core.vec((function (){var iter__5523__auto__ = (function clojure$core$matrix$impl$defaults$aux_$_iter__33295(s__33297){
return (new cljs.core.LazySeq(null,(function (){
var s__33297__$1 = s__33297;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33297__$1);
if(temp__5804__auto__){
var s__33297__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33297__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33297__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33299 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33298 = (0);
while(true){
if((i__33298 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__33298);
cljs.core.chunk_append(b__33299,(((i < acc_dim))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2((acc.cljs$core$IFn$_invoke$arity$1 ? acc.cljs$core$IFn$_invoke$arity$1(i) : acc.call(null,i)),clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,new_block_dim))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,acc_dim),(function (){var G__33302 = (i - acc_dim);
return (new_block.cljs$core$IFn$_invoke$arity$1 ? new_block.cljs$core$IFn$_invoke$arity$1(G__33302) : new_block.call(null,G__33302));
})()))));

var G__33934 = (i__33298 + (1));
i__33298 = G__33934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33299),clojure$core$matrix$impl$defaults$aux_$_iter__33295(cljs.core.chunk_rest(s__33297__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33299),null);
}
} else {
var i = cljs.core.first(s__33297__$2);
return cljs.core.cons((((i < acc_dim))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2((acc.cljs$core$IFn$_invoke$arity$1 ? acc.cljs$core$IFn$_invoke$arity$1(i) : acc.call(null,i)),clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,new_block_dim))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,acc_dim),(function (){var G__33304 = (i - acc_dim);
return (new_block.cljs$core$IFn$_invoke$arity$1 ? new_block.cljs$core$IFn$_invoke$arity$1(G__33304) : new_block.call(null,G__33304));
})()))),clojure$core$matrix$impl$defaults$aux_$_iter__33295(cljs.core.rest(s__33297__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(new_dim));
})());
return clojure$core$matrix$impl$defaults$aux(dm,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(blocks__$1,(1)));
}
});
return aux(cljs.core.PersistentVector.EMPTY,blocks);
}));
(clojure.core.matrix.protocols.PMatrixPredicates["object"] = true);

(clojure.core.matrix.protocols.identity_matrix_QMARK_["object"] = (function (m){
var rc = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
var cc = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(1)));
if((((cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)) === (2))) && ((rc === cc)))){
var i = cljs.core.long$((0));
while(true){
if((i < rc)){
if((function (){var j = cljs.core.long$((0));
while(true){
if((j < cc)){
var elem = clojure.core.matrix.protocols.get_2d(m,i,j);
if(typeof elem === 'number'){
if((i === j)){
if((elem === 1.0)){
var G__33943 = (j + (1));
j = G__33943;
continue;
} else {
return false;
}
} else {
if((elem === (0))){
var G__33944 = (j + (1));
j = G__33944;
continue;
} else {
return false;
}
}
} else {
return false;
}
} else {
return true;
}
break;
}
})()){
var G__33946 = (i + (1));
i = G__33946;
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
return false;
}
}));

(clojure.core.matrix.protocols.zero_matrix_QMARK_["object"] = (function (m){
return cljs.core.every_QMARK_((function (p1__33307_SHARP_){
return ((typeof p1__33307_SHARP_ === 'number') && ((p1__33307_SHARP_ === (0))));
}),clojure.core.matrix.protocols.element_seq(m));
}));

(clojure.core.matrix.protocols.symmetric_QMARK_["object"] = (function (m){
var G__33311 = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
switch (G__33311) {
case (0):
return true;

break;
case (1):
return true;

break;
case (2):
var and__5043__auto__ = clojure.core.matrix.impl.common.square_QMARK_(m);
if(and__5043__auto__){
return clojure.core.matrix.impl.common.symmetric_matrix_entries_QMARK_(m);
} else {
return and__5043__auto__;
}

break;
default:
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.protocols.transpose(m));

}
}));

(clojure.core.matrix.protocols.PMatrixPredicates["null"] = true);

(clojure.core.matrix.protocols.identity_matrix_QMARK_["null"] = (function (m){
return false;
}));

(clojure.core.matrix.protocols.zero_matrix_QMARK_["null"] = (function (m){
return false;
}));

(clojure.core.matrix.protocols.symmetric_QMARK_["null"] = (function (m){
return true;
}));
(clojure.core.matrix.protocols.PIndicesAccess["object"] = true);

(clojure.core.matrix.protocols.get_indices["object"] = (function (a,indices){
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33315_SHARP_){
return clojure.core.matrix.protocols.get_nd(a,p1__33315_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_seq,indices));
var or__5045__auto__ = ((cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(a)))?clojure.core.matrix.protocols.construct_matrix(a,vals):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.protocols.construct_matrix(cljs.core.PersistentVector.EMPTY,vals);
}
}));
(clojure.core.matrix.protocols.PIndicesSetting["object"] = true);

(clojure.core.matrix.protocols.set_indices["object"] = (function (a,indices,values){
var indices__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_seq,indices);
var values__$1 = clojure.core.matrix.protocols.element_seq(clojure.core.matrix.protocols.broadcast(values,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(indices__$1)], null)));
var a__$1 = a;
var G__33326 = indices__$1;
var vec__33328 = G__33326;
var seq__33329 = cljs.core.seq(vec__33328);
var first__33330 = cljs.core.first(seq__33329);
var seq__33329__$1 = cljs.core.next(seq__33329);
var id = first__33330;
var idx = seq__33329__$1;
var G__33327 = values__$1;
var vec__33331 = G__33327;
var seq__33332 = cljs.core.seq(vec__33331);
var first__33333 = cljs.core.first(seq__33332);
var seq__33332__$1 = cljs.core.next(seq__33332);
var v = first__33333;
var vs = seq__33332__$1;
var a__$2 = a__$1;
var G__33326__$1 = G__33326;
var G__33327__$1 = G__33327;
while(true){
var a__$3 = a__$2;
var vec__33342 = G__33326__$1;
var seq__33343 = cljs.core.seq(vec__33342);
var first__33344 = cljs.core.first(seq__33343);
var seq__33343__$1 = cljs.core.next(seq__33343);
var id__$1 = first__33344;
var idx__$1 = seq__33343__$1;
var vec__33345 = G__33327__$1;
var seq__33346 = cljs.core.seq(vec__33345);
var first__33347 = cljs.core.first(seq__33346);
var seq__33346__$1 = cljs.core.next(seq__33346);
var v__$1 = first__33347;
var vs__$1 = seq__33346__$1;
if(cljs.core.truth_(id__$1)){
var G__33954 = clojure.core.matrix.protocols.set_nd(a__$3,id__$1,v__$1);
var G__33955 = idx__$1;
var G__33956 = vs__$1;
a__$2 = G__33954;
G__33326__$1 = G__33955;
G__33327__$1 = G__33956;
continue;
} else {
return a__$3;
}
break;
}
}));

(clojure.core.matrix.protocols.set_indices_BANG_["object"] = (function (a,indices,values){
var indices__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_seq,indices);
var values__$1 = clojure.core.matrix.protocols.element_seq(clojure.core.matrix.protocols.broadcast(values,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(indices__$1)], null)));
var G__33354 = indices__$1;
var vec__33356 = G__33354;
var seq__33357 = cljs.core.seq(vec__33356);
var first__33358 = cljs.core.first(seq__33357);
var seq__33357__$1 = cljs.core.next(seq__33357);
var id = first__33358;
var idx = seq__33357__$1;
var G__33355 = values__$1;
var vec__33359 = G__33355;
var seq__33360 = cljs.core.seq(vec__33359);
var first__33361 = cljs.core.first(seq__33360);
var seq__33360__$1 = cljs.core.next(seq__33360);
var v = first__33361;
var vs = seq__33360__$1;
var G__33354__$1 = G__33354;
var G__33355__$1 = G__33355;
while(true){
var vec__33368 = G__33354__$1;
var seq__33369 = cljs.core.seq(vec__33368);
var first__33370 = cljs.core.first(seq__33369);
var seq__33369__$1 = cljs.core.next(seq__33369);
var id__$1 = first__33370;
var idx__$1 = seq__33369__$1;
var vec__33371 = G__33355__$1;
var seq__33372 = cljs.core.seq(vec__33371);
var first__33373 = cljs.core.first(seq__33372);
var seq__33372__$1 = cljs.core.next(seq__33372);
var v__$1 = first__33373;
var vs__$1 = seq__33372__$1;
if(cljs.core.truth_(id__$1)){
clojure.core.matrix.protocols.set_nd_BANG_(a,id__$1,v__$1);

var G__33961 = idx__$1;
var G__33962 = vs__$1;
G__33354__$1 = G__33961;
G__33355__$1 = G__33962;
continue;
} else {
return null;
}
break;
}
}));
(clojure.core.matrix.protocols.PNonZeroIndices["object"] = true);

(clojure.core.matrix.protocols.non_zero_indices["object"] = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_(m))){
return cljs.core.vec((function (){var iter__5523__auto__ = (function clojure$core$matrix$impl$defaults$iter__33375(s__33376){
return (new cljs.core.LazySeq(null,(function (){
var s__33376__$1 = s__33376;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33376__$1);
if(temp__5804__auto__){
var s__33376__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33376__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33376__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33378 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33377 = (0);
while(true){
if((i__33377 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__33377);
if((!((clojure.core.matrix.protocols.get_1d(m,i) === (0))))){
cljs.core.chunk_append(b__33378,i);

var G__33967 = (i__33377 + (1));
i__33377 = G__33967;
continue;
} else {
var G__33968 = (i__33377 + (1));
i__33377 = G__33968;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33378),clojure$core$matrix$impl$defaults$iter__33375(cljs.core.chunk_rest(s__33376__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33378),null);
}
} else {
var i = cljs.core.first(s__33376__$2);
if((!((clojure.core.matrix.protocols.get_1d(m,i) === (0))))){
return cljs.core.cons(i,clojure$core$matrix$impl$defaults$iter__33375(cljs.core.rest(s__33376__$2)));
} else {
var G__33970 = cljs.core.rest(s__33376__$2);
s__33376__$1 = G__33970;
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
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m,(0))));
})());
} else {
return cljs.core.vec((function (){var iter__5523__auto__ = (function clojure$core$matrix$impl$defaults$iter__33385(s__33386){
return (new cljs.core.LazySeq(null,(function (){
var s__33386__$1 = s__33386;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33386__$1);
if(temp__5804__auto__){
var s__33386__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33386__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33386__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33388 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33387 = (0);
while(true){
if((i__33387 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__33387);
cljs.core.chunk_append(b__33388,clojure.core.matrix.protocols.non_zero_indices(clojure.core.matrix.protocols.get_major_slice(m,i)));

var G__33972 = (i__33387 + (1));
i__33387 = G__33972;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33388),clojure$core$matrix$impl$defaults$iter__33385(cljs.core.chunk_rest(s__33386__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33388),null);
}
} else {
var i = cljs.core.first(s__33386__$2);
return cljs.core.cons(clojure.core.matrix.protocols.non_zero_indices(clojure.core.matrix.protocols.get_major_slice(m,i)),clojure$core$matrix$impl$defaults$iter__33385(cljs.core.rest(s__33386__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m,(0))));
})());
}
}));
(clojure.core.matrix.protocols.PMatrixTypes["object"] = true);

(clojure.core.matrix.protocols.diagonal_QMARK_["object"] = (function (m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)),(2))){
var vec__33394 = clojure.core.matrix.protocols.get_shape(m);
var mrows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33394,(0),null);
var mcols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33394,(1),null);
return cljs.core.every_QMARK_((function (p__33398){
var vec__33399 = p__33398;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33399,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33399,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33399,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,j)){
return true;
} else {
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,j)) && ((v === (0))))){
return true;
} else {
return false;

}
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (i,elem){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.quot(i,mcols),cljs.core.rem(i,mcols),elem],null));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((mrows * mcols)),clojure.core.matrix.protocols.element_seq(m)));
} else {
return false;
}
}));

(clojure.core.matrix.protocols.upper_triangular_QMARK_["object"] = (function (m){
if(clojure.core.matrix.impl.common.square_QMARK_(m)){
return cljs.core.every_QMARK_(cljs.core.zero_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__33403){
var vec__33404 = p__33403;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33404,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33404,(1),null);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(idx,xs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),clojure.core.matrix.protocols.get_slice_seq(m,(0)))], 0)));
} else {
return false;
}
}));

(clojure.core.matrix.protocols.lower_triangular_QMARK_["object"] = (function (m){
if(clojure.core.matrix.impl.common.square_QMARK_(m)){
return cljs.core.every_QMARK_(cljs.core.zero_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__33407){
var vec__33408 = p__33407;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33408,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33408,(1),null);
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((idx + (1)),xs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),clojure.core.matrix.protocols.get_slice_seq(m,(0)))], 0)));
} else {
return false;
}
}));

(clojure.core.matrix.protocols.positive_definite_QMARK_["object"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("TODO: Not yet implemented",cljs.core.PersistentArrayMap.EMPTY);

return clojure.core.matrix.protocols.positive_definite_QMARK_(clojure.core.matrix.protocols.convert_to_nested_vectors(m));
}));

(clojure.core.matrix.protocols.positive_semidefinite_QMARK_["object"] = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("TODO: Not yet implemented",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.orthogonal_QMARK_["object"] = (function (m,eps){
var and__5043__auto__ = clojure.core.matrix.impl.common.square_QMARK_(m);
if(and__5043__auto__){
return clojure.core.matrix.protocols.matrix_equals_epsilon(clojure.core.matrix.protocols.matrix_multiply(m,clojure.core.matrix.protocols.transpose(m)),clojure.core.matrix.protocols.identity_matrix(m,clojure.core.matrix.protocols.dimension_count(m,(0))),eps);
} else {
return and__5043__auto__;
}
}));
(clojure.core.matrix.protocols.PSelect["null"] = true);

(clojure.core.matrix.protocols.select["null"] = (function (a,area){
if(cljs.core.seq(area)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Trying to select on nil with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return null;
}));

(clojure.core.matrix.protocols.PSelect["number"] = true);

(clojure.core.matrix.protocols.select["number"] = (function (a,area){
if(cljs.core.seq(area)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Trying to select on numerical scalar with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return a;
}));

(clojure.core.matrix.protocols.PSelect["object"] = true);

(clojure.core.matrix.protocols.select["object"] = (function (a,area){
var or__5045__auto__ = clojure.core.matrix.protocols.select_view(a,area);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.impl.wrappers.wrap_selection(a,area);
}
}));
(clojure.core.matrix.protocols.PSelectView["null"] = true);

(clojure.core.matrix.protocols.select_view["null"] = (function (a,area){
if(cljs.core.seq(area)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Trying to select on nil with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return null;
}));

(clojure.core.matrix.protocols.PSelectView["object"] = true);

(clojure.core.matrix.protocols.select_view["object"] = (function (a,area){
return clojure.core.matrix.impl.wrappers.wrap_selection(a,area);
}));

(clojure.core.matrix.protocols.PSelectView["number"] = true);

(clojure.core.matrix.protocols.select_view["number"] = (function (a,area){
if(cljs.core.seq(area)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Trying to select on numerical scalar with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return a;
}));
(clojure.core.matrix.protocols.PSelect["number"] = true);

(clojure.core.matrix.protocols.select["number"] = (function (a,area){
if(cljs.core.empty_QMARK_(area)){
return a;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Non empty area argument in select, called on Number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
clojure.core.matrix.impl.defaults.area_indices = (function clojure$core$matrix$impl$defaults$area_indices(area){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (io,in$){
var iter__5523__auto__ = (function clojure$core$matrix$impl$defaults$area_indices_$_iter__33414(s__33415){
return (new cljs.core.LazySeq(null,(function (){
var s__33415__$1 = s__33415;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33415__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var a = cljs.core.first(xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__33415__$1,a,xs__6360__auto__,temp__5804__auto__){
return (function clojure$core$matrix$impl$defaults$area_indices_$_iter__33414_$_iter__33416(s__33417){
return (new cljs.core.LazySeq(null,((function (s__33415__$1,a,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__33417__$1 = s__33417;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__33417__$1);
if(temp__5804__auto____$1){
var s__33417__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__33417__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33417__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33419 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33418 = (0);
while(true){
if((i__33418 < size__5522__auto__)){
var b = cljs.core._nth(c__5521__auto__,i__33418);
cljs.core.chunk_append(b__33419,cljs.core.cons(a,b));

var G__33990 = (i__33418 + (1));
i__33418 = G__33990;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33419),clojure$core$matrix$impl$defaults$area_indices_$_iter__33414_$_iter__33416(cljs.core.chunk_rest(s__33417__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33419),null);
}
} else {
var b = cljs.core.first(s__33417__$2);
return cljs.core.cons(cljs.core.cons(a,b),clojure$core$matrix$impl$defaults$area_indices_$_iter__33414_$_iter__33416(cljs.core.rest(s__33417__$2)));
}
} else {
return null;
}
break;
}
});})(s__33415__$1,a,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__33415__$1,a,xs__6360__auto__,temp__5804__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(io));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,clojure$core$matrix$impl$defaults$area_indices_$_iter__33414(cljs.core.rest(s__33415__$1)));
} else {
var G__33992 = cljs.core.rest(s__33415__$1);
s__33415__$1 = G__33992;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(in$);
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.last(area)),cljs.core.rest(cljs.core.reverse(area)));
});
clojure.core.matrix.impl.defaults.indices = (function clojure$core$matrix$impl$defaults$indices(vals){
return clojure.core.matrix.impl.defaults.area_indices(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.range,clojure.core.matrix.protocols.get_shape(vals)));
});
(clojure.core.matrix.protocols.PSetSelection["object"] = true);

(clojure.core.matrix.protocols.set_selection["object"] = (function (m,area,vals){
var mm = (function (){var or__5045__auto__ = clojure.core.matrix.protocols.mutable_matrix(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.impl.defaults.construct_mutable_matrix(m);
}
})();
var v = clojure.core.matrix.protocols.select_view(m,area);
clojure.core.matrix.protocols.assign_BANG_(v,vals);

return mm;
}));
(clojure.core.matrix.protocols.PIndexImplementation["object"] = true);

(clojure.core.matrix.protocols.index_QMARK_["object"] = (function (m){
return false;
}));

(clojure.core.matrix.protocols.index_to_longs["object"] = (function (m){
return cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.element_seq(m));
}));

(clojure.core.matrix.protocols.index_to_ints["object"] = (function (m){
return cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.element_seq(m));
}));

(clojure.core.matrix.protocols.index_from_longs["object"] = (function (m,xs){
return cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(xs);
}));

(clojure.core.matrix.protocols.index_from_ints["object"] = (function (m,xs){
return cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(xs);
}));

(clojure.core.matrix.protocols.index_coerce["object"] = (function (m,a){
return clojure.core.matrix.protocols.index_to_longs(m);
}));
(clojure.core.matrix.protocols.PDimensionLabels["object"] = true);

(clojure.core.matrix.protocols.label["object"] = (function (m,dim,i){
if(((((0) <= cljs.core.long$(i))) && ((cljs.core.long$(i) <= (cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,dim)) - (1)))))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Dimension index out of range: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));

(clojure.core.matrix.protocols.labels["object"] = (function (m,dim){
if(((((0) <= cljs.core.long$(dim))) && ((cljs.core.long$(dim) <= (cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)) - (1)))))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Dimension out of range: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dim)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
(clojure.core.matrix.protocols.PColumnNames["object"] = true);

(clojure.core.matrix.protocols.column_name["object"] = (function (m,i){
var dim = (cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)) - (1));
return clojure.core.matrix.protocols.label(m,dim,i);
}));

(clojure.core.matrix.protocols.column_names["object"] = (function (m){
var dim = (cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)) - (1));
return clojure.core.matrix.protocols.labels(m,dim);
}));
(clojure.core.matrix.protocols.PNorm["object"] = true);

(clojure.core.matrix.protocols.norm["object"] = (function (m,p){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,Number.POSITIVE_INFINITY)){
return clojure.core.matrix.protocols.element_max(clojure.core.matrix.protocols.element_map(m,clojure.core.matrix.impl.mathsops.abs));
} else {
if(typeof p === 'number'){
var sum_of_element_powers = clojure.core.matrix.protocols.element_sum(clojure.core.matrix.protocols.element_pow(clojure.core.matrix.protocols.element_map(m,clojure.core.matrix.impl.mathsops.abs),p));
var pred__33421 = cljs.core._EQ__EQ_;
var expr__33422 = p;
if(cljs.core.truth_((pred__33421.cljs$core$IFn$_invoke$arity$2 ? pred__33421.cljs$core$IFn$_invoke$arity$2((1),expr__33422) : pred__33421.call(null,(1),expr__33422)))){
return sum_of_element_powers;
} else {
if(cljs.core.truth_((pred__33421.cljs$core$IFn$_invoke$arity$2 ? pred__33421.cljs$core$IFn$_invoke$arity$2((2),expr__33422) : pred__33421.call(null,(2),expr__33422)))){
return Math.sqrt(sum_of_element_powers);
} else {
if(cljs.core.truth_((pred__33421.cljs$core$IFn$_invoke$arity$2 ? pred__33421.cljs$core$IFn$_invoke$arity$2((3),expr__33422) : pred__33421.call(null,(3),expr__33422)))){
return Math.cbrt(sum_of_element_powers);
} else {
return Math.pow(sum_of_element_powers,(1.0 / p));
}
}
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("p must be a number",cljs.core.PersistentArrayMap.EMPTY);

}
}
}));
clojure.core.matrix.impl.defaults.compute_q = (function clojure$core$matrix$impl$defaults$compute_q(m,qr_data,mcols,mrows,min_len,us,vs,gammas){
var q = clojure.core.matrix.protocols.to_double_array(clojure.core.matrix.protocols.identity_matrix(cljs.core.PersistentVector.EMPTY,mrows));
var mcols__$1 = cljs.core.long$(mcols);
var mrows__$1 = cljs.core.long$(mrows);
var min_len__$1 = cljs.core.long$(min_len);
var i_34004 = (min_len__$1 - (1));
while(true){
if((i_34004 > (-1))){
var gamma_34006 = (gammas[i_34004]);
(us[i_34004] = 1.0);

var j_34007 = (i_34004 + (1));
while(true){
if((j_34007 < mrows__$1)){
(us[j_34007] = (qr_data[((j_34007 * mcols__$1) + i_34004)]));

var G__34009 = (j_34007 + (1));
j_34007 = G__34009;
continue;
} else {
}
break;
}


var j_34010 = i_34004;
while(true){
if((j_34010 < mrows__$1)){
(vs[j_34010] = ((us[i_34004]) * (q[((i_34004 * mrows__$1) + j_34010)])));

var G__34012 = (j_34010 + (1));
j_34010 = G__34012;
continue;
} else {
}
break;
}


var j_34013 = (i_34004 + (1));
while(true){
if((j_34013 < mrows__$1)){
var u_34014 = (us[j_34013]);
var k_34015 = i_34004;
while(true){
if((k_34015 < mrows__$1)){
var q_idx_34016 = (((j_34013 * mrows__$1) + i_34004) + (k_34015 - i_34004));
(vs[k_34015] = ((vs[k_34015]) + (u_34014 * (q[q_idx_34016]))));

var G__34017 = (k_34015 + (1));
k_34015 = G__34017;
continue;
} else {
}
break;
}


var G__34019 = (j_34013 + (1));
j_34013 = G__34019;
continue;
} else {
}
break;
}


var j_34020 = i_34004;
while(true){
if((j_34020 < mrows__$1)){
(vs[j_34020] = ((vs[j_34020]) * gamma_34006));

var G__34022 = (j_34020 + (1));
j_34020 = G__34022;
continue;
} else {
}
break;
}


var j_34024 = i_34004;
while(true){
if((j_34024 < mrows__$1)){
var u_34025 = (us[j_34024]);
var k_34026 = i_34004;
while(true){
if((k_34026 < mrows__$1)){
var qr_idx_34028 = (((j_34024 * mrows__$1) + i_34004) + (k_34026 - i_34004));
(q[qr_idx_34028] = ((q[qr_idx_34028]) - (u_34025 * (vs[k_34026]))));

var G__34029 = (k_34026 + (1));
k_34026 = G__34029;
continue;
} else {
}
break;
}


var G__34030 = (j_34024 + (1));
j_34024 = G__34030;
continue;
} else {
}
break;
}


var G__34031 = (i_34004 - (1));
i_34004 = G__34031;
continue;
} else {
}
break;
}


return clojure.core.matrix.protocols.compute_matrix(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrows__$1,mrows__$1], null),(function (i,j){
return (q[((i * mrows__$1) + j)]);
}));
});
clojure.core.matrix.impl.defaults.compute_r = (function clojure$core$matrix$impl$defaults$compute_r(m,data,mcols,mrows,min_len,compact_QMARK_){
var mrows__$1 = cljs.core.long$(mrows);
var mcols__$1 = cljs.core.long$(mcols);
var min_len__$1 = cljs.core.long$(min_len);
var cm = clojure.core.matrix.protocols.compute_matrix(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrows__$1,mcols__$1], null),(function (i,j){
if((((i < min_len__$1)) && ((((j >= i)) && ((j < mcols__$1)))))){
return (data[((i * mcols__$1) + j)]);
} else {
return (0);
}
}));
if(cljs.core.truth_(compact_QMARK_)){
var slcs = clojure.core.matrix.protocols.get_major_slice_seq(cm);
var non_zero_rows = cljs.core.long$(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cnt,slice){
if(cljs.core.every_QMARK_(cljs.core.zero_QMARK_,slice)){
return (cnt + (1));
} else {
return cnt;
}
}),(0),slcs));
return clojure.core.matrix.protocols.reshape(cm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols__$1,(mrows__$1 - non_zero_rows)], null));
} else {
return cm;
}
});
clojure.core.matrix.impl.defaults.householder_qr = (function clojure$core$matrix$impl$defaults$householder_qr(qr_data,idx,mcols,mrows,us,gammas){
var idx__$1 = cljs.core.long$(idx);
var mcols__$1 = cljs.core.long$(mcols);
var mrows__$1 = cljs.core.long$(mrows);
var qr_idx_34040 = cljs.core.long$((idx__$1 + (idx__$1 * mcols__$1)));
var i_34041 = cljs.core.long$(idx__$1);
while(true){
if((i_34041 < mrows__$1)){
(us[i_34041] = (qr_data[qr_idx_34040]));

var G__34043 = (qr_idx_34040 + mcols__$1);
var G__34044 = (i_34041 + (1));
qr_idx_34040 = G__34043;
i_34041 = G__34044;
continue;
} else {
}
break;
}

var max_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33424_SHARP_){
return Math.abs(p1__33424_SHARP_);
}),clojure.core.matrix.protocols.subvector(us,idx__$1,(mrows__$1 - idx__$1))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_,0.0)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null);
} else {
var _ = (function (){
var i_34049 = idx__$1;
while(true){
if((i_34049 < mrows__$1)){
(us[i_34049] = ((us[i_34049]) / max_));

var G__34050 = (i_34049 + (1));
i_34049 = G__34050;
continue;
} else {
}
break;
}

return null;
})()
;
var tau = Math.sqrt(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
return (acc + (x * x));
}),0.0,clojure.core.matrix.protocols.subvector(us,idx__$1,(mrows__$1 - idx__$1))));
var u_idx = (us[idx__$1]);
var tau__$1 = (((u_idx < (0)))?(- tau):tau);
var u_0 = (u_idx + tau__$1);
var gamma = (u_0 / tau__$1);
var tau__$2 = (tau__$1 * max_);
(gammas[idx__$1] = gamma);

var i_34051 = (idx__$1 + (1));
while(true){
if((i_34051 < mrows__$1)){
(us[i_34051] = ((us[i_34051]) / u_0));

var G__34053 = (i_34051 + (1));
i_34051 = G__34053;
continue;
} else {
}
break;
}


(us[idx__$1] = 1.0);

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gamma","gamma",1883969687),gamma,new cljs.core.Keyword(null,"gammas","gammas",-195052461),gammas,new cljs.core.Keyword(null,"us","us",746429226),us,new cljs.core.Keyword(null,"tau","tau",89782904),tau__$2,new cljs.core.Keyword(null,"error","error",-978969032),false], null);
}
});
clojure.core.matrix.impl.defaults.update_qr = (function clojure$core$matrix$impl$defaults$update_qr(qr_data,idx,mcols,mrows,vs,us,gamma,tau){
var idx__$1 = cljs.core.long$(idx);
var mrows__$1 = cljs.core.long$(mrows);
var mcols__$1 = cljs.core.long$(mcols);
var u = (us[idx__$1]);
var idx_PLUS_1 = (idx__$1 + (1));
var gamma__$1 = gamma;
var tau__$1 = tau;
var i_34057 = idx_PLUS_1;
while(true){
if((i_34057 < mcols__$1)){
(vs[i_34057] = (qr_data[(i_34057 + (idx__$1 * mcols__$1))]));

var G__34058 = (i_34057 + (1));
i_34057 = G__34058;
continue;
} else {
}
break;
}


var i_34059 = idx_PLUS_1;
while(true){
if((i_34059 < mrows__$1)){
var qr_idx_34061 = (idx_PLUS_1 + (i_34059 * mcols__$1));
var j_34062 = idx_PLUS_1;
while(true){
if((j_34062 < mcols__$1)){
(vs[j_34062] = ((vs[j_34062]) + ((us[i_34059]) * (qr_data[(qr_idx_34061 + (j_34062 - idx_PLUS_1))]))));

var G__34064 = (j_34062 + (1));
j_34062 = G__34064;
continue;
} else {
}
break;
}


var G__34065 = (i_34059 + (1));
i_34059 = G__34065;
continue;
} else {
}
break;
}


var i_34066 = idx_PLUS_1;
while(true){
if((i_34066 < mcols__$1)){
(vs[i_34066] = ((vs[i_34066]) * gamma__$1));

var G__34067 = (i_34066 + (1));
i_34066 = G__34067;
continue;
} else {
}
break;
}


var i_34068 = idx__$1;
while(true){
if((i_34068 < mrows__$1)){
var u_34069__$1 = (us[i_34068]);
var j_34070 = idx_PLUS_1;
while(true){
if((j_34070 < mcols__$1)){
var qr_idx_34071 = (((i_34068 * mcols__$1) + idx_PLUS_1) + (j_34070 - idx_PLUS_1));
(qr_data[qr_idx_34071] = ((qr_data[qr_idx_34071]) - (u_34069__$1 * (vs[j_34070]))));

var G__34072 = (j_34070 + (1));
j_34070 = G__34072;
continue;
} else {
}
break;
}


var G__34073 = (i_34068 + (1));
i_34068 = G__34073;
continue;
} else {
}
break;
}


if((idx__$1 < mcols__$1)){
(qr_data[(idx__$1 + (idx__$1 * mcols__$1))] = (- tau__$1));
} else {
}

var i_34074 = idx_PLUS_1;
while(true){
if((i_34074 < mrows__$1)){
(qr_data[(idx__$1 + (i_34074 * mcols__$1))] = (us[i_34074]));

var G__34075 = (i_34074 + (1));
i_34074 = G__34075;
continue;
} else {
}
break;
}


return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"qr-data","qr-data",-504970292),qr_data,new cljs.core.Keyword(null,"vs","vs",-2022097090),vs], null);
});
(clojure.core.matrix.protocols.PQRDecomposition["object"] = true);

(clojure.core.matrix.protocols.qr["object"] = (function (m,options){
var vec__33425 = clojure.core.matrix.protocols.get_shape(m);
var mrows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33425,(0),null);
var mcols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33425,(1),null);
var mrows__$1 = cljs.core.long$(mrows);
var mcols__$1 = cljs.core.long$(mcols);
var min_len = (function (){var x__5133__auto__ = mcols__$1;
var y__5134__auto__ = mrows__$1;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var max_len = (function (){var x__5130__auto__ = mcols__$1;
var y__5131__auto__ = mrows__$1;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var qr_data = clojure.core.matrix.protocols.to_double_array(m);
var vs = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(max_len);
var us = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(max_len);
var gammas = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(min_len);
var gamma = 0.0;
var tau = 0.0;
var i = (0);
while(true){
if((i < min_len)){
var map__33434 = clojure.core.matrix.impl.defaults.householder_qr(qr_data,i,mcols__$1,mrows__$1,us,gammas);
var map__33434__$1 = cljs.core.__destructure_map(map__33434);
var us__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33434__$1,new cljs.core.Keyword(null,"us","us",746429226));
var gamma__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33434__$1,new cljs.core.Keyword(null,"gamma","gamma",1883969687));
var gammas__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33434__$1,new cljs.core.Keyword(null,"gammas","gammas",-195052461));
var tau__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33434__$1,new cljs.core.Keyword(null,"tau","tau",89782904));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33434__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return null;
} else {
var map__33435 = clojure.core.matrix.impl.defaults.update_qr(qr_data,i,mcols__$1,mrows__$1,vs,us__$1,gamma__$1,tau__$1);
var map__33435__$1 = cljs.core.__destructure_map(map__33435);
var qr_data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33435__$1,new cljs.core.Keyword(null,"qr-data","qr-data",-504970292));
var vs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33435__$1,new cljs.core.Keyword(null,"vs","vs",-2022097090));
var G__34081 = qr_data__$1;
var G__34082 = vs__$1;
var G__34083 = us__$1;
var G__34084 = gammas__$1;
var G__34085 = gamma__$1;
var G__34086 = tau__$1;
var G__34087 = (i + (1));
qr_data = G__34081;
vs = G__34082;
us = G__34083;
gammas = G__34084;
gamma = G__34085;
tau = G__34086;
i = G__34087;
continue;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (qr_data,vs,us,gammas,gamma,tau,i,vec__33425,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len){
return (function (p__33436){
var vec__33437 = p__33436;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33437,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33437,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(v.cljs$core$IFn$_invoke$arity$0 ? v.cljs$core$IFn$_invoke$arity$0() : v.call(null))], null);
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__33425,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len))
,cljs.core.select_keys(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Q","Q",663320520),((function (qr_data,vs,us,gammas,gamma,tau,i,vec__33425,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len){
return (function (){
return clojure.core.matrix.impl.defaults.compute_q(m,qr_data,mcols__$1,mrows__$1,min_len,us,vs,gammas);
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__33425,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len))
,new cljs.core.Keyword(null,"R","R",-936662523),((function (qr_data,vs,us,gammas,gamma,tau,i,vec__33425,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len){
return (function (){
return clojure.core.matrix.impl.defaults.compute_r(m,qr_data,mcols__$1,mrows__$1,min_len,new cljs.core.Keyword(null,"compact","compact",-348732150).cljs$core$IFn$_invoke$arity$1(options));
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__33425,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len))
], null),new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(options))));
}
break;
}
}));
(clojure.core.matrix.protocols.PCholeskyDecomposition["object"] = true);

(clojure.core.matrix.protocols.cholesky["object"] = (function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__33440 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__33441 = true;
(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__33441);

try{var imp__22412__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();
var m__$1 = clojure.core.matrix.protocols.coerce_param(imp__22412__auto__,m);
return clojure.core.matrix.protocols.cholesky(m__$1,options);
}finally {(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__33440);
}} else {
return null;
}
}));
(clojure.core.matrix.protocols.PLUDecomposition["object"] = true);

(clojure.core.matrix.protocols.lu["object"] = (function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__33445 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__33446 = true;
(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__33446);

try{var imp__22412__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();
var m__$1 = clojure.core.matrix.protocols.coerce_param(imp__22412__auto__,m);
return clojure.core.matrix.protocols.lu(m__$1,options);
}finally {(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__33445);
}} else {
return null;
}
}));
(clojure.core.matrix.protocols.PSVDDecomposition["object"] = true);

(clojure.core.matrix.protocols.svd["object"] = (function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__33448 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__33449 = true;
(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__33449);

try{var imp__22412__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();
var m__$1 = clojure.core.matrix.protocols.coerce_param(imp__22412__auto__,m);
return clojure.core.matrix.protocols.svd(m__$1,options);
}finally {(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__33448);
}} else {
return null;
}
}));
(clojure.core.matrix.protocols.PEigenDecomposition["object"] = true);

(clojure.core.matrix.protocols.eigen["object"] = (function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__33453 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__33454 = true;
(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__33454);

try{var imp__22412__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();
var m__$1 = clojure.core.matrix.protocols.coerce_param(imp__22412__auto__,m);
return clojure.core.matrix.protocols.eigen(m__$1,options);
}finally {(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__33453);
}} else {
return null;
}
}));
(clojure.core.matrix.protocols.PSolveLinear["object"] = true);

(clojure.core.matrix.protocols.solve["object"] = (function (a,b){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__33468 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__33469 = true;
(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__33469);

try{var imp__22412__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();
var a__$1 = clojure.core.matrix.protocols.coerce_param(imp__22412__auto__,a);
return clojure.core.matrix.protocols.solve(a__$1,b);
}finally {(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__33468);
}} else {
return null;
}
}));
(clojure.core.matrix.protocols.PLeastSquares["object"] = true);

(clojure.core.matrix.protocols.least_squares["object"] = (function (a,b){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__33472 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__33473 = true;
(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__33473);

try{var imp__22412__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();
var a__$1 = clojure.core.matrix.protocols.coerce_param(imp__22412__auto__,a);
return clojure.core.matrix.protocols.least_squares(a__$1,b);
}finally {(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__33472);
}} else {
return null;
}
}));

//# sourceMappingURL=clojure.core.matrix.impl.defaults.js.map
