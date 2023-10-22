goog.provide('clojure.core.matrix.impl.wrappers');



/**
* @constructor
 * @implements {clojure.core.matrix.protocols.PDimensionInfo}
 * @implements {clojure.core.matrix.protocols.PIndexedAccess}
 * @implements {clojure.core.matrix.protocols.PIndexedSetting}
 * @implements {clojure.core.matrix.protocols.PImplementation}
 * @implements {clojure.core.matrix.protocols.PConversion}
 * @implements {clojure.core.matrix.protocols.PMatrixCloning}
 * @implements {clojure.core.matrix.protocols.PZeroDimensionAccess}
*/
clojure.core.matrix.impl.wrappers.ScalarWrapper = (function (value){
this.value = value;
});
(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.toString = (function (){
var self__ = this;
var m = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.value);
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return new cljs.core.Keyword(null,"scalar-wrapper","scalar-wrapper",-1626299275);
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps a single scalar as a mutable 0-D array"], null);
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,length);
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix(cljs.core.PersistentVector.EMPTY,rows,columns);
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd(cljs.core.PersistentVector.EMPTY,dims);
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var self__ = this;
var m__$1 = this;
if(((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(data)))){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_(data))){
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(data));
} else {
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(clojure.core.matrix.protocols.get_0d(data)));
}
} else {
return clojure.core.matrix.protocols.clone(data);
}
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return (cljs.core.long$(dims) === (0));
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return (0);
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return cljs.core.PersistentVector.EMPTY;
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return false;
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return false;
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,dimension_number){
var self__ = this;
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get dimension-count of ScalarWrapper: no dimensions exist",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,row){
var self__ = this;
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get-1d on ScalarWrapper.",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,row,column){
var self__ = this;
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get-2d on ScalarWrapper.",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var self__ = this;
var m__$1 = this;
if(cljs.core.seq(indexes)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get-1d on ScalarWrapper.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return self__.value;
}
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,x,v){
var self__ = this;
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 1D set on 0D array",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,x,y,v){
var self__ = this;
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D set on 0D array",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var self__ = this;
var m__$1 = this;
if(cljs.core.not(cljs.core.seq(indexes))){
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(v));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't set on 0D array with dimensionality: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(indexes))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return true;
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PConversion$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return self__.value;
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$get_0d$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return self__.value;
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$set_0d_BANG_$arity$2 = (function (m,v){
var self__ = this;
var m__$1 = this;
return (self__.value = v);
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PMatrixCloning$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PMatrixCloning$clone$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(self__.value));
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null))], null);
}));

(clojure.core.matrix.impl.wrappers.ScalarWrapper.cljs$lang$type = true);

(clojure.core.matrix.impl.wrappers.ScalarWrapper.cljs$lang$ctorStr = "clojure.core.matrix.impl.wrappers/ScalarWrapper");

(clojure.core.matrix.impl.wrappers.ScalarWrapper.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"clojure.core.matrix.impl.wrappers/ScalarWrapper");
}));

/**
 * Positional factory function for clojure.core.matrix.impl.wrappers/ScalarWrapper.
 */
clojure.core.matrix.impl.wrappers.__GT_ScalarWrapper = (function clojure$core$matrix$impl$wrappers$__GT_ScalarWrapper(value){
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(value));
});


/**
* @constructor
 * @implements {clojure.core.matrix.protocols.PDimensionInfo}
 * @implements {clojure.core.matrix.protocols.PIndexedSettingMutable}
 * @implements {clojure.core.matrix.protocols.PIndexedAccess}
 * @implements {clojure.core.matrix.protocols.PIndexedSetting}
 * @implements {clojure.core.matrix.protocols.PImplementation}
 * @implements {cljs.core.ISeqable}
 * @implements {clojure.core.matrix.protocols.PConversion}
 * @implements {clojure.core.matrix.protocols.PMatrixCloning}
 * @implements {clojure.core.matrix.protocols.PZeroDimensionAccess}
*/
clojure.core.matrix.impl.wrappers.SliceWrapper = (function (array,slice){
this.array = array;
this.slice = slice;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.toString = (function (){
var self__ = this;
var m = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(m.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1(null));
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PConversion$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_(self__.array))){
return clojure.core.matrix.protocols.get_1d(self__.array,self__.slice);
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.convert_to_nested_vectors,clojure.core.matrix.protocols.get_major_slice_seq(m__$1));
}
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PMatrixCloning$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PMatrixCloning$clone$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
var G__36842 = clojure.core.matrix.protocols.clone(self__.array);
var G__36843 = self__.slice;
return (clojure.core.matrix.impl.wrappers.wrap_slice.cljs$core$IFn$_invoke$arity$2 ? clojure.core.matrix.impl.wrappers.wrap_slice.cljs$core$IFn$_invoke$arity$2(G__36842,G__36843) : clojure.core.matrix.impl.wrappers.wrap_slice.call(null,G__36842,G__36843));
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$get_0d$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_1d(self__.array,self__.slice);
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$set_0d_BANG_$arity$2 = (function (m,value){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_1d_BANG_(self__.array,self__.slice,value);
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return (cljs.core.long$(clojure.core.matrix.protocols.dimensionality(self__.array)) - (1));
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return cljs.core.next(clojure.core.matrix.protocols.get_shape(self__.array));
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return false;
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return ((2) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(self__.array)));
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,dimension_number){
var self__ = this;
var m__$1 = this;
var dimension_number__$1 = cljs.core.long$(dimension_number);
if((dimension_number__$1 < (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't access negative dimension!",cljs.core.PersistentArrayMap.EMPTY);
} else {
return clojure.core.matrix.protocols.dimension_count(self__.array,(dimension_number__$1 + (1)));
}
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_1d_BANG_$arity$3 = (function (m,row,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_2d_BANG_(self__.array,self__.slice,row,v);
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_2d_BANG_$arity$4 = (function (m,row,column,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_nd_BANG_(self__.array,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.slice,row,column], null),v);
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_nd_BANG_$arity$3 = (function (m,indexes,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_nd_BANG_(self__.array,cljs.core.cons(self__.slice,indexes),v);
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,row){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_2d(self__.array,self__.slice,row);
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,row,column){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_nd(self__.array,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.slice,row,column], null));
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_nd(self__.array,cljs.core.cons(self__.slice,indexes));
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,row,v){
var self__ = this;
var m__$1 = this;
var m__$2 = m__$1.clojure$core$matrix$protocols$PMatrixCloning$clone$arity$1(null);
clojure.core.matrix.protocols.set_1d_BANG_(m__$2,row,v);

return m__$2;
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,row,column,v){
var self__ = this;
var m__$1 = this;
var m__$2 = m__$1.clojure$core$matrix$protocols$PMatrixCloning$clone$arity$1(null);
clojure.core.matrix.protocols.set_2d_BANG_(m__$2,row,column,v);

return m__$2;
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var self__ = this;
var m__$1 = this;
var m__$2 = m__$1.clojure$core$matrix$protocols$PMatrixCloning$clone$arity$1(null);
clojure.core.matrix.protocols.set_nd_BANG_(m__$2,indexes,v);

return m__$2;
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.is_mutable_QMARK_(self__.array);
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_major_slice_seq(m__$1);
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return new cljs.core.Keyword(null,"slice-wrapper","slice-wrapper",449772415);
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps a row-major slice of an array"], null);
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,length);
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix(cljs.core.PersistentVector.EMPTY,rows,columns);
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd(cljs.core.PersistentVector.EMPTY,dims);
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.construct_matrix(cljs.core.PersistentVector.EMPTY,data);
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return true;
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"array","array",-440182315,null),cljs.core.with_meta(new cljs.core.Symbol(null,"slice","slice",-353076229,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(clojure.core.matrix.impl.wrappers.SliceWrapper.cljs$lang$type = true);

(clojure.core.matrix.impl.wrappers.SliceWrapper.cljs$lang$ctorStr = "clojure.core.matrix.impl.wrappers/SliceWrapper");

(clojure.core.matrix.impl.wrappers.SliceWrapper.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"clojure.core.matrix.impl.wrappers/SliceWrapper");
}));

/**
 * Positional factory function for clojure.core.matrix.impl.wrappers/SliceWrapper.
 */
clojure.core.matrix.impl.wrappers.__GT_SliceWrapper = (function clojure$core$matrix$impl$wrappers$__GT_SliceWrapper(array,slice){
return (new clojure.core.matrix.impl.wrappers.SliceWrapper(array,slice));
});


/**
* @constructor
 * @implements {clojure.core.matrix.protocols.PDimensionInfo}
 * @implements {clojure.core.matrix.protocols.PIndexedSettingMutable}
 * @implements {cljs.core.IIndexed}
 * @implements {clojure.core.matrix.protocols.PSubVector}
 * @implements {clojure.core.matrix.protocols.PIndexedAccess}
 * @implements {clojure.core.matrix.protocols.PSliceView2}
 * @implements {clojure.core.matrix.protocols.PIndexedSetting}
 * @implements {cljs.core.ICounted}
 * @implements {clojure.core.matrix.protocols.PImplementation}
 * @implements {cljs.core.ISeqable}
 * @implements {clojure.core.matrix.protocols.PZeroDimensionAccess}
*/
clojure.core.matrix.impl.wrappers.NDWrapper = (function (array,shape,dim_map,index_maps,source_position){
this.array = array;
this.shape = shape;
this.dim_map = dim_map;
this.index_maps = index_maps;
this.source_position = source_position;
this.cljs$lang$protocol_mask$partition0$ = 8388626;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.toString = (function (){
var self__ = this;
var m = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.persistent_vector_coerce(m));
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (m,i){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_major_slice(m__$1,i);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (m,i,not_found){
var self__ = this;
var m__$1 = this;
if(((cljs.core.integer_QMARK_(i)) && (((((0) <= i)) && ((i < (self__.shape[(0)]))))))){
return clojure.core.matrix.protocols.get_major_slice(m__$1,i);
} else {
return not_found;
}
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.cljs$core$ICounted$_count$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return (self__.shape[(0)]);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$get_0d$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_nd(self__.array,self__.source_position);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$set_0d_BANG_$arity$2 = (function (m,value){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_nd_BANG_(self__.array,self__.source_position,value);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return self__.shape.length;
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return self__.shape;
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return false;
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return ((1) === self__.shape.length);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,dimension_number){
var self__ = this;
var m__$1 = this;
return (self__.shape[(dimension_number | (0))]);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_1d_BANG_$arity$3 = (function (m,row,v){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array(self__.source_position);
var im = (self__.index_maps[(0)]);
var i36857_36894 = (0);
var tdim__36658__auto___36895 = (self__.dim_map[i36857_36894]);
if((tdim__36658__auto___36895 >= (0))){
(ix[tdim__36658__auto___36895] = ((self__.index_maps[i36857_36894])[row]));
} else {
}

return clojure.core.matrix.protocols.set_nd_BANG_(self__.array,ix,v);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_2d_BANG_$arity$4 = (function (m,row,column,v){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array(self__.source_position);
var i36858_36896 = (0);
var tdim__36658__auto___36897 = (self__.dim_map[i36858_36896]);
if((tdim__36658__auto___36897 >= (0))){
(ix[tdim__36658__auto___36897] = ((self__.index_maps[i36858_36896])[row]));
} else {
}

var i36859_36898 = (1);
var tdim__36658__auto___36899 = (self__.dim_map[i36859_36898]);
if((tdim__36658__auto___36899 >= (0))){
(ix[tdim__36658__auto___36899] = ((self__.index_maps[i36859_36898])[column]));
} else {
}

return clojure.core.matrix.protocols.set_nd_BANG_(self__.array,ix,v);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_nd_BANG_$arity$3 = (function (m,indexes,v){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array(self__.source_position);
var n = self__.shape.length;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.count(indexes))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["set-nd! called with index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(indexes))," indexes on wrapped array of shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__5636__auto___36900 = self__.shape.length;
var i_36901 = (0);
while(true){
if((i_36901 < n__5636__auto___36900)){
var i36860_36902 = i_36901;
var tdim__36658__auto___36903 = (self__.dim_map[i36860_36902]);
if((tdim__36658__auto___36903 >= (0))){
(ix[tdim__36658__auto___36903] = ((self__.index_maps[i36860_36902])[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(indexes,i_36901)]));
} else {
}

var G__36904 = (i_36901 + (1));
i_36901 = G__36904;
continue;
} else {
}
break;
}

return clojure.core.matrix.protocols.set_nd_BANG_(self__.array,ix,v);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PSubVector$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PSubVector$subvector$arity$3 = (function (m,start,length){
var self__ = this;
var m__$1 = this;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),self__.shape.length)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't take subvector: wrong dimensionality = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.shape.length)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var vlen = cljs.core.long$((self__.shape[(0)]));
var start__$1 = cljs.core.long$(start);
var length__$1 = cljs.core.long$(length);
var end = (start__$1 + length__$1);
var old_index_map = (self__.index_maps[(0)]);
var new_index_map = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(length__$1);
if((start__$1 < (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Start index out of bounds: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if((end > vlen)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["End index out of bounds: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__5636__auto___36905 = length__$1;
var i_36906 = (0);
while(true){
if((i_36906 < n__5636__auto___36905)){
(new_index_map[i_36906] = (old_index_map[(start__$1 + i_36906)]));

var G__36907 = (i_36906 + (1));
i_36906 = G__36907;
continue;
} else {
}
break;
}

return (new clojure.core.matrix.impl.wrappers.NDWrapper(self__.array,clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$1(length__$1),self__.dim_map,clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$1(new_index_map),clojure.core.matrix.utils.copy_long_array(self__.source_position)));
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,row){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array(self__.source_position);
var im = (self__.index_maps[(0)]);
var i36861_36908 = (0);
var tdim__36658__auto___36909 = (self__.dim_map[i36861_36908]);
if((tdim__36658__auto___36909 >= (0))){
(ix[tdim__36658__auto___36909] = ((self__.index_maps[i36861_36908])[row]));
} else {
}

return clojure.core.matrix.protocols.get_nd(self__.array,ix);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,row,column){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array(self__.source_position);
var i36862_36910 = (0);
var tdim__36658__auto___36911 = (self__.dim_map[i36862_36910]);
if((tdim__36658__auto___36911 >= (0))){
(ix[tdim__36658__auto___36911] = ((self__.index_maps[i36862_36910])[row]));
} else {
}

var i36863_36912 = (1);
var tdim__36658__auto___36913 = (self__.dim_map[i36863_36912]);
if((tdim__36658__auto___36913 >= (0))){
(ix[tdim__36658__auto___36913] = ((self__.index_maps[i36863_36912])[column]));
} else {
}

return clojure.core.matrix.protocols.get_nd(self__.array,ix);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array(self__.source_position);
var n__5636__auto___36914 = self__.shape.length;
var i_36915 = (0);
while(true){
if((i_36915 < n__5636__auto___36914)){
var i36864_36916 = i_36915;
var tdim__36658__auto___36917 = (self__.dim_map[i36864_36916]);
if((tdim__36658__auto___36917 >= (0))){
(ix[tdim__36658__auto___36917] = ((self__.index_maps[i36864_36916])[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(indexes,i_36915)]));
} else {
}

var G__36918 = (i_36915 + (1));
i_36915 = G__36918;
continue;
} else {
}
break;
}

return clojure.core.matrix.protocols.get_nd(self__.array,ix);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PSliceView2$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PSliceView2$get_slice_view$arity$3 = (function (m,dim,i){
var self__ = this;
var m__$1 = this;
var i__$1 = cljs.core.long$(i);
var dim__$1 = cljs.core.long$(dim);
var nsp = clojure.core.matrix.utils.copy_long_array(self__.source_position);
var sdim = cljs.core.long$((self__.dim_map[dim__$1]));
(nsp[sdim] = i__$1);

return (new clojure.core.matrix.impl.wrappers.NDWrapper(self__.array,(function (){var n__28998__auto__ = self__.shape.length;
var length__28999__auto__ = ((n__28998__auto__ - (1)) | (0));
var new_xs__29000__auto__ = self__.shape.slice((0),length__28999__auto__);
var j__29001__auto___36919 = (dim__$1 | (0));
while(true){
if((j__29001__auto___36919 < (n__28998__auto__ - (1)))){
(new_xs__29000__auto__[(j__29001__auto___36919 | (0))] = (self__.shape[((j__29001__auto___36919 + (1)) | (0))]));

var G__36920 = (j__29001__auto___36919 + (1));
j__29001__auto___36919 = G__36920;
continue;
} else {
}
break;
}


return new_xs__29000__auto__;
})(),(function (){var n__28998__auto__ = self__.dim_map.length;
var length__28999__auto__ = ((n__28998__auto__ - (1)) | (0));
var new_xs__29000__auto__ = self__.dim_map.slice((0),length__28999__auto__);
var j__29001__auto___36921 = (dim__$1 | (0));
while(true){
if((j__29001__auto___36921 < (n__28998__auto__ - (1)))){
(new_xs__29000__auto__[(j__29001__auto___36921 | (0))] = (self__.dim_map[((j__29001__auto___36921 + (1)) | (0))]));

var G__36922 = (j__29001__auto___36921 + (1));
j__29001__auto___36921 = G__36922;
continue;
} else {
}
break;
}


return new_xs__29000__auto__;
})(),(function (){var n__28998__auto__ = self__.index_maps.length;
var length__28999__auto__ = ((n__28998__auto__ - (1)) | (0));
var new_xs__29000__auto__ = self__.index_maps.slice((0),length__28999__auto__);
var j__29001__auto___36923 = (dim__$1 | (0));
while(true){
if((j__29001__auto___36923 < (n__28998__auto__ - (1)))){
(new_xs__29000__auto__[(j__29001__auto___36923 | (0))] = (self__.index_maps[((j__29001__auto___36923 + (1)) | (0))]));

var G__36924 = (j__29001__auto___36923 + (1));
j__29001__auto___36923 = G__36924;
continue;
} else {
}
break;
}


return new_xs__29000__auto__;
})(),nsp));
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,x,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_1d(clojure.core.matrix.protocols.coerce_param(clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0(),m__$1),x,v);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,x,y,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_2d(clojure.core.matrix.protocols.coerce_param(clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0(),m__$1),x,y,v);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_nd(clojure.core.matrix.protocols.coerce_param(clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0(),m__$1),indexes,v);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.is_mutable_QMARK_(self__.array);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_major_slice_seq(m__$1);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return new cljs.core.Keyword(null,"nd-wrapper","nd-wrapper",563497943);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps an N-dimensional subset or broadcast of an array"], null);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,length);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix(cljs.core.PersistentVector.EMPTY,rows,columns);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd(cljs.core.PersistentVector.EMPTY,dims);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.construct_matrix(cljs.core.PersistentVector.EMPTY,data);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return true;
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"array","array",-440182315,null),cljs.core.with_meta(new cljs.core.Symbol(null,"shape","shape",-1463741763,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"longs","longs",-1017696020,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dim-map","dim-map",-1307232993,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"longs","longs",-1017696020,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"index-maps","index-maps",-257128425,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"objects","objects",-554722035,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"source-position","source-position",915497720,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"longs","longs",-1017696020,null)], null))], null);
}));

(clojure.core.matrix.impl.wrappers.NDWrapper.cljs$lang$type = true);

(clojure.core.matrix.impl.wrappers.NDWrapper.cljs$lang$ctorStr = "clojure.core.matrix.impl.wrappers/NDWrapper");

(clojure.core.matrix.impl.wrappers.NDWrapper.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"clojure.core.matrix.impl.wrappers/NDWrapper");
}));

/**
 * Positional factory function for clojure.core.matrix.impl.wrappers/NDWrapper.
 */
clojure.core.matrix.impl.wrappers.__GT_NDWrapper = (function clojure$core$matrix$impl$wrappers$__GT_NDWrapper(array,shape,dim_map,index_maps,source_position){
return (new clojure.core.matrix.impl.wrappers.NDWrapper(array,shape,dim_map,index_maps,source_position));
});

/**
 * Creates a view of a major slice of an array.
 */
clojure.core.matrix.impl.wrappers.wrap_slice = (function clojure$core$matrix$impl$wrappers$wrap_slice(m,slice){
var slice__$1 = cljs.core.long$(slice);
if((slice__$1 >= cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Slice ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slice__$1)," does not exist on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return (new clojure.core.matrix.impl.wrappers.SliceWrapper(m,slice__$1));
});
/**
 * Wraps an array in a NDWrapper view. Useful for taking submatrices, subviews etc.
 */
clojure.core.matrix.impl.wrappers.wrap_nd = (function clojure$core$matrix$impl$wrappers$wrap_nd(m){
var shp = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape(m));
var dims = shp.length;
return (new clojure.core.matrix.impl.wrappers.NDWrapper(m,shp,clojure.core.matrix.utils.long_range(dims),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36877_SHARP_){
return clojure.core.matrix.utils.long_range(clojure.core.matrix.protocols.dimension_count(m,p1__36877_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(dims))),cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(dims)));
});
/**
 * Wraps an array using a selection of indexes for each dimension.
 */
clojure.core.matrix.impl.wrappers.wrap_selection = (function clojure$core$matrix$impl$wrappers$wrap_selection(m,indices){
var shp = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,indices));
var dims = cljs.core.count(shp);
return (new clojure.core.matrix.impl.wrappers.NDWrapper(m,shp,cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(dims)),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.long_array,indices)),cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(dims,(0)))));
});
/**
 * Wraps an array using a selection of [start length] ranges for each dimension.
 */
clojure.core.matrix.impl.wrappers.wrap_submatrix = (function clojure$core$matrix$impl$wrappers$wrap_submatrix(m,dim_ranges){
var shp = clojure.core.matrix.protocols.get_shape(m);
var dims = cljs.core.count(shp);
var _ = (((!((dims === cljs.core.count(dim_ranges)))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["submatrix ranges ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dim_ranges)," do not match matrix dimensionality of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shp)].join(''),cljs.core.PersistentArrayMap.EMPTY)})():null);
var dim_ranges__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (a,cnt){
if(cljs.core.truth_(a)){
return cljs.core.vec(a);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cnt], null);
}
}),dim_ranges,shp);
var new_shape = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36878){
var vec__36879 = p__36878;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36879,(0),null);
var len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36879,(1),null);
return len;
}),dim_ranges__$1));
return (new clojure.core.matrix.impl.wrappers.NDWrapper(m,new_shape,cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(shp))),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36882){
var vec__36883 = p__36882;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36883,(0),null);
var len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36883,(1),null);
return cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,(start + len)));
}),dim_ranges__$1)),cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(dims,(0)))));
});
/**
 * Wraps an array with broadcasting to the given target shape.
 */
clojure.core.matrix.impl.wrappers.wrap_broadcast = (function clojure$core$matrix$impl$wrappers$wrap_broadcast(m,target_shape){
var tshape = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(target_shape);
var tdims = tshape.length;
var mshape = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape(m));
var mdims = mshape.length;
var dim_map = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((tdims - mdims),(-1)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(mdims)));
return (new clojure.core.matrix.impl.wrappers.NDWrapper(m,tshape,dim_map,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function clojure$core$matrix$impl$wrappers$wrap_broadcast_$_iter__36886(s__36887){
return (new cljs.core.LazySeq(null,(function (){
var s__36887__$1 = s__36887;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__36887__$1);
if(temp__5804__auto__){
var s__36887__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36887__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36887__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36889 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36888 = (0);
while(true){
if((i__36888 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__36888);
cljs.core.chunk_append(b__36889,(function (){var i__$1 = cljs.core.long$(i);
var arr = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1((tshape[i__$1]));
var mdim = (i__$1 - (tdims - mdims));
if((mdim >= (0))){
var mdc_36925 = (mshape[mdim]);
var tdc_36926 = (tshape[i__$1]);
if((mdc_36925 === (1))){
} else {
if((mdc_36925 === tdc_36926)){
var n__5636__auto___36927 = mdc_36925;
var i_36928__$2 = (0);
while(true){
if((i_36928__$2 < n__5636__auto___36927)){
(arr[i_36928__$2] = i_36928__$2);

var G__36929 = (i_36928__$2 + (1));
i_36928__$2 = G__36929;
continue;
} else {
}
break;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't broadcast shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(mshape))," to target shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(tshape))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
} else {
}

return arr;
})());

var G__36930 = (i__36888 + (1));
i__36888 = G__36930;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36889),clojure$core$matrix$impl$wrappers$wrap_broadcast_$_iter__36886(cljs.core.chunk_rest(s__36887__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36889),null);
}
} else {
var i = cljs.core.first(s__36887__$2);
return cljs.core.cons((function (){var i__$1 = cljs.core.long$(i);
var arr = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1((tshape[i__$1]));
var mdim = (i__$1 - (tdims - mdims));
if((mdim >= (0))){
var mdc_36931 = (mshape[mdim]);
var tdc_36932 = (tshape[i__$1]);
if((mdc_36931 === (1))){
} else {
if((mdc_36931 === tdc_36932)){
var n__5636__auto___36933 = mdc_36931;
var i_36934__$2 = (0);
while(true){
if((i_36934__$2 < n__5636__auto___36933)){
(arr[i_36934__$2] = i_36934__$2);

var G__36935 = (i_36934__$2 + (1));
i_36934__$2 = G__36935;
continue;
} else {
}
break;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't broadcast shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(mshape))," to target shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(tshape))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
} else {
}

return arr;
})(),clojure$core$matrix$impl$wrappers$wrap_broadcast_$_iter__36886(cljs.core.rest(s__36887__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tdims));
})()),cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(mdims)));
});
/**
 * Wraps a scalar value into a mutable 0D array.
 */
clojure.core.matrix.impl.wrappers.wrap_scalar = (function clojure$core$matrix$impl$wrappers$wrap_scalar(m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_(m))){
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(m));
} else {
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(clojure.core.matrix.protocols.get_0d(m)));

}
});
clojure.core.matrix.implementations.register_implementation.cljs$core$IFn$_invoke$arity$1((new clojure.core.matrix.impl.wrappers.ScalarWrapper((13))));
clojure.core.matrix.implementations.register_implementation.cljs$core$IFn$_invoke$arity$1((new clojure.core.matrix.impl.wrappers.NDWrapper(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.long_array.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.long_array.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)))));

//# sourceMappingURL=clojure.core.matrix.impl.wrappers.js.map
