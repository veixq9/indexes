goog.provide('clojure.core.matrix');
clojure.core.matrix.class$ = cljs.core.type;

/**
 * Constructs a new n-dimensional array from the given data.
 * 
 * This function will examine the data in order to construct an array of the appropriate shape.
 * 
 * The data may be in one of the following forms:
 * - A valid existing array (which will be converted to the implementation)
 * - Nested sequences of scalar values, e.g. Clojure vectors (must have regular shape)
 * - A sequence of slices, each of which must be valid array data
 * - A single scalar value, which will be wrapped or coerced as necessary for the implementation
 * 
 * If implementation is not specified, uses the current matrix library as specified
 * in *matrix-implementation*
 * 
 * If the implementation does not support the shape or type of data provided, may either
 * create an array using a different implementation on a best-efforts basis or
 * alternatively throw an error. This behaviour is implementation-specific.
 */
clojure.core.matrix.array = (function clojure$core$matrix$array(var_args){
var G__34597 = arguments.length;
switch (G__34597) {
case 1:
return clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$1 = (function (data){
var or__5045__auto__ = clojure.core.matrix.protocols.construct_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param(cljs.core.PersistentVector.EMPTY,data);
}
}));

(clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__5045__auto__ = clojure.core.matrix.protocols.construct_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param(cljs.core.PersistentVector.EMPTY,data);
}
}));

(clojure.core.matrix.array.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a new 2-dimensional matrix from the given numerical data.
 * 
 * The data may be in one of the following forms:
 * - A valid existing numerical array
 * - Nested sequences of scalar values, e.g. Clojure vectors
 * - A sequence of slices, each of which must be valid matrix data
 * 
 * If implementation is not specified, uses the current matrix library as specified
 * in *matrix-implementation*
 * 
 * `matrix` works as a synonym for `array`
 */
clojure.core.matrix.matrix = (function clojure$core$matrix$matrix(var_args){
var G__34599 = arguments.length;
switch (G__34599) {
case 1:
return clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$1(data);
}));

(clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
return clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$2(implementation,data);
}));

(clojure.core.matrix.matrix.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a new 1-dimensional integer index from given data.
 * 
 * The data may be in one of the following forms:
 * - A valid existing index
 * - A 1D array of integer values
 * - A sequence of integer values
 * 
 * If implementation is not specified, uses the current matrix library as specified
 * in *matrix-implementation* to produce the index object.
 * 
 * If the implementation does not support its own native index types, will return a
 * valid index from a default implementation.
 */
clojure.core.matrix.index = (function clojure$core$matrix$index(var_args){
var G__34601 = arguments.length;
switch (G__34601) {
case 1:
return clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$1 = (function (data){
var or__5045__auto__ = clojure.core.matrix.protocols.index_coerce((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.protocols.index_coerce(cljs.core.PersistentVector.EMPTY,data);
}
}));

(clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__5045__auto__ = clojure.core.matrix.protocols.index_coerce((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.protocols.index_coerce(cljs.core.PersistentVector.EMPTY,data);
}
}));

(clojure.core.matrix.index.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a new zero-filled numerical vector with the given length.
 * 
 * Implementations are encouraged to return immutable vectors or sparse vectors
 * for efficency whre available.
 */
clojure.core.matrix.zero_vector = (function clojure$core$matrix$zero_vector(var_args){
var G__34603 = arguments.length;
switch (G__34603) {
case 1:
return clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$1 = (function (length){
return clojure.core.matrix.protocols.new_vector((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),length);
}));

(clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$2 = (function (implementation,length){
return clojure.core.matrix.protocols.new_vector((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),length);
}));

(clojure.core.matrix.zero_vector.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a new vector with the given length.
 * New matrix will contain default values as defined by the implementation (usually null or zero).
 * If the implementation supports mutable vectors, then the new vector will be fully mutable.
 */
clojure.core.matrix.new_vector = (function clojure$core$matrix$new_vector(var_args){
var G__34605 = arguments.length;
switch (G__34605) {
case 1:
return clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$1 = (function (length){
return clojure.core.matrix.protocols.new_vector((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),length);
}));

(clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$2 = (function (implementation,length){
return clojure.core.matrix.protocols.new_vector((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),length);
}));

(clojure.core.matrix.new_vector.cljs$lang$maxFixedArity = 2);

/**
 * Returns a zero-filled numerical matrix with the given dimensions, for the given implementation or the current
 * implementation if not specified.
 * 
 * May produce a lightweight immutable zero matrix if supported by the implementation.
 */
clojure.core.matrix.zero_matrix = (function clojure$core$matrix$zero_matrix(var_args){
var G__34607 = arguments.length;
switch (G__34607) {
case 2:
return clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$2 = (function (rows,columns){
return clojure.core.matrix.protocols.new_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),rows,columns);
}));

(clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$3 = (function (implementation,rows,columns){
return clojure.core.matrix.protocols.new_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),rows,columns);
}));

(clojure.core.matrix.zero_matrix.cljs$lang$maxFixedArity = 3);

/**
 * Constructs a new 2D array (matrix) with the given dimensions.
 * The new matrix will contain default values as defined by the implementation (usually null or zero).
 * If the implementation supports mutable matrices, then the new matrix will be fully mutable.
 */
clojure.core.matrix.new_matrix = (function clojure$core$matrix$new_matrix(var_args){
var G__34609 = arguments.length;
switch (G__34609) {
case 2:
return clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$2 = (function (rows,columns){
return clojure.core.matrix.protocols.new_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),rows,columns);
}));

(clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$3 = (function (implementation,rows,columns){
return clojure.core.matrix.protocols.new_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),rows,columns);
}));

(clojure.core.matrix.new_matrix.cljs$lang$maxFixedArity = 3);

/**
 * Creates a new zero-filled numerical array with the given shape.
 */
clojure.core.matrix.zero_array = (function clojure$core$matrix$zero_array(var_args){
var G__34611 = arguments.length;
switch (G__34611) {
case 1:
return clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$1 = (function (shape){
var or__5045__auto__ = clojure.core.matrix.protocols.new_matrix_nd((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),shape);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.protocols.new_matrix_nd(cljs.core.PersistentVector.EMPTY,shape);
}
}));

(clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,shape){
var or__5045__auto__ = clojure.core.matrix.protocols.new_matrix_nd((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),shape);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.protocols.new_matrix_nd(cljs.core.PersistentVector.EMPTY,shape);
}
}));

(clojure.core.matrix.zero_array.cljs$lang$maxFixedArity = 2);

/**
 * Creates a new array with the given shape.
 * New array will contain default values as defined by the implementation (usually null or zero).
 * If the implementation supports mutable matrices, then the new matrix will be fully mutable.
 */
clojure.core.matrix.new_array = (function clojure$core$matrix$new_array(var_args){
var G__34613 = arguments.length;
switch (G__34613) {
case 1:
return clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$1 = (function (shape){
var or__5045__auto__ = clojure.core.matrix.protocols.new_matrix_nd((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),shape);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.protocols.new_matrix_nd(cljs.core.PersistentVector.EMPTY,shape);
}
}));

(clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,shape){
var or__5045__auto__ = clojure.core.matrix.protocols.new_matrix_nd((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),shape);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = clojure.core.matrix.protocols.new_matrix_nd((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),shape);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return clojure.core.matrix.protocols.new_matrix_nd(cljs.core.PersistentVector.EMPTY,shape);
}
}
}));

(clojure.core.matrix.new_array.cljs$lang$maxFixedArity = 2);

/**
 * Creates a new sparse array with the given shape.
 * New array will contain default values as defined by the implementation (usually zero).
 * If the implementation supports mutable sparse matrices, then the new matrix should be fully mutable.
 */
clojure.core.matrix.new_sparse_array = (function clojure$core$matrix$new_sparse_array(var_args){
var G__34615 = arguments.length;
switch (G__34615) {
case 1:
return clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return clojure.core.matrix.protocols.new_sparse_array((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),shape);
}));

(clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,shape){
var or__5045__auto__ = clojure.core.matrix.protocols.new_sparse_array((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),shape);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Implementation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.implementation_key(implementation))," does not support sparse arrays of shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(shape))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));

(clojure.core.matrix.new_sparse_array.cljs$lang$maxFixedArity = 2);

/**
 * Returns a new mutable scalar array containing the scalar value zero.
 */
clojure.core.matrix.new_scalar_array = (function clojure$core$matrix$new_scalar_array(var_args){
var G__34617 = arguments.length;
switch (G__34617) {
case 0:
return clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_);
}));

(clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$1 = (function (implementation){
var implementation__$1 = (clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation));
return clojure.core.matrix.protocols.new_scalar_array(implementation__$1);
}));

(clojure.core.matrix.new_scalar_array.cljs$lang$maxFixedArity = 1);

/**
 * Creates a new zero-dimensional array containing the specified scalar value.
 */
clojure.core.matrix.scalar_array = (function clojure$core$matrix$scalar_array(var_args){
var G__34619 = arguments.length;
switch (G__34619) {
case 1:
return clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$1 = (function (value){
return clojure.core.matrix.protocols.new_scalar_array((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),value);
}));

(clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,value){
return clojure.core.matrix.protocols.new_scalar_array((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),value);
}));

(clojure.core.matrix.scalar_array.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a row matrix with the given data. The returned matrix is a 2D 1xN row matrix.
 * 
 * The data must be either a valid existing vector or a sequence of scalar values.
 */
clojure.core.matrix.row_matrix = (function clojure$core$matrix$row_matrix(var_args){
var G__34621 = arguments.length;
switch (G__34621) {
case 1:
return clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.protocols.row_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),data);
}));

(clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
return clojure.core.matrix.protocols.row_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),data);
}));

(clojure.core.matrix.row_matrix.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a column matrix with the given data. The returned matrix is a 2D Nx1 column matrix.
 * 
 * The data must be either a valid existing vector or a sequence of scalar values.
 */
clojure.core.matrix.column_matrix = (function clojure$core$matrix$column_matrix(var_args){
var G__34623 = arguments.length;
switch (G__34623) {
case 1:
return clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.protocols.column_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),data);
}));

(clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
return clojure.core.matrix.protocols.column_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),data);
}));

(clojure.core.matrix.column_matrix.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a 2D identity matrix with the given number of rows.
 * 
 * Identity matrices constructed with this function may not be fully mutable because they may be
 * implemented with a specialised identity matrix type. Use (mutable (identity-matrix ...)) if you
 * need to guarantee a mutable matrix.
 */
clojure.core.matrix.identity_matrix = (function clojure$core$matrix$identity_matrix(var_args){
var G__34625 = arguments.length;
switch (G__34625) {
case 1:
return clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$1 = (function (dims){
return clojure.core.matrix.protocols.identity_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),dims);
}));

(clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,dims){
return clojure.core.matrix.protocols.identity_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),dims);
}));

(clojure.core.matrix.identity_matrix.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a permutation matrix for a given permutation vector. The permutation vector should
 * contain a distinct set of integers 0...n-1, representing the re-ordering performed by
 * the permutation matrix.
 */
clojure.core.matrix.permutation_matrix = (function clojure$core$matrix$permutation_matrix(var_args){
var G__34627 = arguments.length;
switch (G__34627) {
case 1:
return clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$1 = (function (permutation){
return clojure.core.matrix.protocols.permutation_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),permutation);
}));

(clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,permutation){
return clojure.core.matrix.protocols.permutation_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),permutation);
}));

(clojure.core.matrix.permutation_matrix.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a block diagonal matrix for a given vector of 2D square matrices and arranges
 *   the matrices along the main diagonal of the 2D matrix
 */
clojure.core.matrix.block_diagonal_matrix = (function clojure$core$matrix$block_diagonal_matrix(var_args){
var G__34629 = arguments.length;
switch (G__34629) {
case 1:
return clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$1 = (function (blocks){
return clojure.core.matrix.protocols.block_diagonal_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),blocks);
}));

(clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,blocks){
return clojure.core.matrix.protocols.block_diagonal_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),blocks);
}));

(clojure.core.matrix.block_diagonal_matrix.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a fully mutable copy of the given array data. 
 * 
 * If the current implementation does not support mutable matrices, will return a mutable array
 * from another core.matrix implementation that supports either the same element type or a broader type.
 */
clojure.core.matrix.mutable = (function clojure$core$matrix$mutable(var_args){
var G__34631 = arguments.length;
switch (G__34631) {
case 1:
return clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$1 = (function (data){
try{var or__5045__auto__ = clojure.core.matrix.protocols.mutable_matrix(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$2((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),data);
}
}catch (e34632){if((e34632 instanceof clojure.core.matrix.Throwable)){
var t = e34632;
return clojure.core.matrix.impl.defaults.construct_mutable_matrix(data);
} else {
throw e34632;

}
}}));

(clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var imp = (clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation));
var r = clojure.core.matrix.protocols.construct_matrix(imp,data);
var or__5045__auto__ = (function (){var and__5043__auto__ = r;
if(cljs.core.truth_(and__5043__auto__)){
return clojure.core.matrix.protocols.ensure_mutable(r);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = clojure.core.matrix.impl.defaults.construct_mutable_matrix(data);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unable to create mutable array for implementation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.implementation_key(imp))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
}));

(clojure.core.matrix.mutable.cljs$lang$maxFixedArity = 2);

/**
 * Returns an immutable array containing the given array data.
 * 
 * May return the same array if it is already immutable.
 * 
 * If the implementation does not support immutable matrices, will return an immutable array
 * from another core.matrix implementation that supports either the same element type or a broader type.
 */
clojure.core.matrix.immutable = (function clojure$core$matrix$immutable(data){
var or__5045__auto__ = clojure.core.matrix.protocols.immutable_matrix(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (clojure.core.matrix.to_nested_vectors.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.to_nested_vectors.cljs$core$IFn$_invoke$arity$1(data) : clojure.core.matrix.to_nested_vectors.call(null,data));
}
});
/**
 * Checks if an array is mutable, and if not converts to a new mutable array. Guarantees
 * that the result will be mutable, but may not be the same type as the original array.
 */
clojure.core.matrix.ensure_mutable = (function clojure$core$matrix$ensure_mutable(m){
return clojure.core.matrix.protocols.ensure_mutable(m);
});
/**
 * Constructs a 2D diagonal matrix with the given numerical values on the main diagonal.
 * All off-diagonal elements will be zero, and diagonal-values may be a vector or any
 *   Clojure sequence of values.
 * 
 * Diagonal matrices constructed this way may use specialised storage formats, hence may not be fully mutable.
 * Use (mutable (diagonal-matrix ...)) if you need to guarantee a mutable matrix.
 */
clojure.core.matrix.diagonal_matrix = (function clojure$core$matrix$diagonal_matrix(var_args){
var G__34634 = arguments.length;
switch (G__34634) {
case 1:
return clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$1 = (function (diagonal_values){
return clojure.core.matrix.protocols.diagonal_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),diagonal_values);
}));

(clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,diagonal_values){
return clojure.core.matrix.protocols.diagonal_matrix(clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(implementation),diagonal_values);
}));

(clojure.core.matrix.diagonal_matrix.cljs$lang$maxFixedArity = 2);

/**
 * Creates a array with the specified shape, and each element specified by (f i j k...)
 * Where i, j, k... are the index positions of each element in the matrix
 */
clojure.core.matrix.compute_matrix = (function clojure$core$matrix$compute_matrix(var_args){
var G__34636 = arguments.length;
switch (G__34636) {
case 2:
return clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$2 = (function (shape,f){
return clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$3((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),shape,f);
}));

(clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$3 = (function (implementation,shape,f){
var m = (clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation));
return clojure.core.matrix.protocols.compute_matrix(m,shape,f);
}));

(clojure.core.matrix.compute_matrix.cljs$lang$maxFixedArity = 3);

/**
 * Creates a sparse array with the given data, using a specified implementation
 *   or the current implementation if not specified.
 * 
 *   Throws an exception if creation of a sparse array is not possible
 */
clojure.core.matrix.sparse_array = (function clojure$core$matrix$sparse_array(var_args){
var G__34638 = arguments.length;
switch (G__34638) {
case 1:
return clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$2((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),data);
}));

(clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__5045__auto__ = clojure.core.matrix.protocols.sparse_coerce((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Sparse implementation not available",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(clojure.core.matrix.sparse_array.cljs$lang$maxFixedArity = 2);

/**
 * Creates a sparse matrix with the given data, using a specified implementation
 *   or the current implementation if not specified. Sparse matrices are required to store
 *   a M*N matrix with E non-zero elements in approx O(M+N+E) space or less.
 * 
 *   Throws an exception if creation of a sparse matrix is not possible.
 * 
 *   `sparse-matrix` wqorks as a synonym for `sparse-array`.
 */
clojure.core.matrix.sparse_matrix = (function clojure$core$matrix$sparse_matrix(var_args){
var G__34640 = arguments.length;
switch (G__34640) {
case 1:
return clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$1(data);
}));

(clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
return clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$2(implementation,data);
}));

(clojure.core.matrix.sparse_matrix.cljs$lang$maxFixedArity = 2);

/**
 * Coerces an array to a sparse format if possible. Sparse arrays are expected to
 * minimise space usage for zero elements.
 * 
 * Returns the array unchanged if such coercion is not possible, or if the array is already sparse.
 */
clojure.core.matrix.sparse = (function clojure$core$matrix$sparse(var_args){
var G__34642 = arguments.length;
switch (G__34642) {
case 1:
return clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.protocols.sparse(data);
}));

(clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var implementation__$1 = (clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation));
var or__5045__auto__ = clojure.core.matrix.protocols.sparse_coerce(implementation__$1,data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param(implementation__$1,data);
}
}));

(clojure.core.matrix.sparse.cljs$lang$maxFixedArity = 2);

/**
 * Coerces an array to a dense format if possible. Dense arrays are expected to
 * allocate contiguous storage space for all elements. Either row-major or column-major
 * storage may be alloacted, depending on the implementation.
 * 
 * 'dense' should not be used with very large arrays, and may throw an OutOfMemoryError
 *  if the dense array is too large to fit in available memory.
 * 
 * Returns the array unchanged if such coercion is not possible, or if the array is already dense.
 */
clojure.core.matrix.dense = (function clojure$core$matrix$dense(var_args){
var G__34644 = arguments.length;
switch (G__34644) {
case 1:
return clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.protocols.dense(data);
}));

(clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__5045__auto__ = clojure.core.matrix.protocols.dense_coerce(implementation,data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param(implementation,data);
}
}));

(clojure.core.matrix.dense.cljs$lang$maxFixedArity = 2);

/**
 * Coerces an array into a native format array if possible. Native arrays may offer
 * superior performance for some operations, depending on the implementation.
 * Returns nil if no appropriate native format exists.
 */
clojure.core.matrix.native$ = (function clojure$core$matrix$native(var_args){
var G__34646 = arguments.length;
switch (G__34646) {
case 1:
return clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$1 = (function (a){
var or__5045__auto__ = clojure.core.matrix.protocols.native$(a);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$2((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),a);
}
}));

(clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$2 = (function (impl,a){
var a__$1 = clojure.core.matrix.protocols.coerce_param(impl,a);
return clojure.core.matrix.protocols.native$(a__$1);
}));

(clojure.core.matrix.native$.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the array is in a native format.
 * 
 * Native formats are implementation defined, and may use non-Java resources (e.g. GPU memory).
 */
clojure.core.matrix.native_QMARK_ = (function clojure$core$matrix$native_QMARK_(a){
return clojure.core.matrix.protocols.native_QMARK_(a);
});
/**
 * Returns true if the implementation for a given matrix supports a specific dimensionality, i.e.
 * can natively create and manipulate matrices with the given number of dimensions
 */
clojure.core.matrix.supports_dimensionality_QMARK_ = (function clojure$core$matrix$supports_dimensionality_QMARK_(m,dimension_count){
var m__$1 = (clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(m) : clojure.core.matrix.implementation_check.call(null,m));
return clojure.core.matrix.protocols.supports_dimensionality_QMARK_(m__$1,dimension_count);
});
/**
 * Returns true if the implementation supports creation of matrices with a specific shape.
 */
clojure.core.matrix.supports_shape_QMARK_ = (function clojure$core$matrix$supports_shape_QMARK_(m,shape){
var m__$1 = (((m instanceof cljs.core.Keyword))?clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(m):m);
return clojure.core.matrix.protocols.supports_dimensionality_QMARK_(m__$1,cljs.core.count(shape));
});
/**
 * Assigns a new value to an array. Sets the values of the target element-wise, broadcasting where necessary.
 * Returns the mutated array. The new value may be either a scalar or a array of compatible (maybe smaller) shape.
 */
clojure.core.matrix.assign_BANG_ = (function clojure$core$matrix$assign_BANG_(dest,src){
clojure.core.matrix.protocols.assign_BANG_(dest,src);

return dest;
});
/**
 * Assigns values to a destination core.matrix array from a Java array, in element-wise order. 
 * The element type of Java array must be compatible.
 * Returns the mutated core.matrix array
 */
clojure.core.matrix.assign_array_BANG_ = (function clojure$core$matrix$assign_array_BANG_(var_args){
var G__34648 = arguments.length;
switch (G__34648) {
case 2:
return clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dest,java_array){
clojure.core.matrix.protocols.assign_array_BANG_(dest,java_array);

return dest;
}));

(clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dest,java_array,offset){
clojure.core.matrix.protocols.assign_array_BANG_(dest,java_array,offset,clojure.core.matrix.protocols.element_count(dest));

return dest;
}));

(clojure.core.matrix.assign_array_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Copies array src element-wise, broadcasting to fill the whole shape of m.
 * Similar to assign!, except returns a new destination array.
 * Returns a new array, of the same shape and implementation as the original m.
 */
clojure.core.matrix.assign = (function clojure$core$matrix$assign(dest,src){
return clojure.core.matrix.protocols.assign(dest,src);
});
/**
 * Constructs a (shallow) clone of the array. This function is intended to
 * allow safe defensive usage of matrices / vectors. If the intent is to create a mutable clone of
 * some array data, it is recommended to use mutable instead.
 * 
 * Guarantees that:
 * 1. Mutating the returned array will not modify any other array (defensive copy)
 * 2. The returned array will be fully mutable, if the implementation supports mutable matrices.
 * 
 * The clone may or may not be of the same implementation: implementations are encouraged to do so but
 * this is not mandatory.
 * 
 * A core.matrix implementation which only provides immutable arrays may safely return the same array.
 */
clojure.core.matrix.clone = (function clojure$core$matrix$clone(m){
return clojure.core.matrix.protocols.clone(m);
});
/**
 * Converts an array to an idiomatic, immutable nested Clojure vector format. The bottom level of the
 * nested vectors will contain the element values. Higher levels will all implement IPersistentVector.
 * 
 * The depth of nesting will be equal to the dimensionality of the array.
 */
clojure.core.matrix.to_nested_vectors = (function clojure$core$matrix$to_nested_vectors(m){
return clojure.core.matrix.protocols.convert_to_nested_vectors(m);
});
/**
 * Coerces m to a scalar value. Result is guaranteed not to be an array.
 * Will throw an exception if m is not zero-dimensional.
 */
clojure.core.matrix.scalar = (function clojure$core$matrix$scalar(m){
return clojure.core.matrix.protocols.get_0d(m);
});
/**
 * Returns true if the parameter is a valid core.matrix N-dimensional array, for any N>=0.
 */
clojure.core.matrix.array_QMARK_ = (function clojure$core$matrix$array_QMARK_(m){
return cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(m));
});
/**
 * Returns true if parameter is a valid core.matrix matrix (i.e. an array with dimensionality == 2)
 */
clojure.core.matrix.matrix_QMARK_ = (function clojure$core$matrix$matrix_QMARK_(m){
return (cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)) === (2));
});
/**
 * Returns true if the parameter is a core.matrix vector (1-dimensional array)
 */
clojure.core.matrix.vec_QMARK_ = (function clojure$core$matrix$vec_QMARK_(m){
return clojure.core.matrix.protocols.is_vector_QMARK_(m);
});
/**
 * Returns true if the parameter is a scalar value (i.e. acceptable as matrix element value).
 * A 0-d array containing a scalar is *not* itself a scalar value.
 */
clojure.core.matrix.scalar_QMARK_ = (function clojure$core$matrix$scalar_QMARK_(v){
return clojure.core.matrix.protocols.is_scalar_QMARK_(v);
});
/**
 * Returns true if the parameter has zero dimensions. i.e. it is a 0-d array or a scalar value.
 * 
 * Behaviour is the same as `scalar?`, except that true is returned for 0-dimensional arrays.
 */
clojure.core.matrix.zero_dimensional_QMARK_ = (function clojure$core$matrix$zero_dimensional_QMARK_(m){
return ((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)));
});
/**
 * Returns true if the parameter is an identity-matrix, i.e. a symmetric square matrix with element values
 * of 1 on the leading diagonal and 0 elsewhere.
 */
clojure.core.matrix.identity_matrix_QMARK_ = (function clojure$core$matrix$identity_matrix_QMARK_(m){
return clojure.core.matrix.protocols.identity_matrix_QMARK_(m);
});
/**
 * Returns true if all the elements of the parameter are zero.
 */
clojure.core.matrix.zero_matrix_QMARK_ = (function clojure$core$matrix$zero_matrix_QMARK_(m){
return clojure.core.matrix.protocols.zero_matrix_QMARK_(m);
});
/**
 * Returns true if the parameter is a symmetric matrix, i.e. Aij = Aji for all i,j.
 */
clojure.core.matrix.symmetric_QMARK_ = (function clojure$core$matrix$symmetric_QMARK_(m){
return clojure.core.matrix.protocols.symmetric_QMARK_(m);
});
/**
 * Returns true if the parameter is a diagonal matrix.
 */
clojure.core.matrix.diagonal_QMARK_ = (function clojure$core$matrix$diagonal_QMARK_(m){
return clojure.core.matrix.protocols.diagonal_QMARK_(m);
});
/**
 * Returns true if the parameter is a upper triangular matrix.
 */
clojure.core.matrix.upper_triangular_QMARK_ = (function clojure$core$matrix$upper_triangular_QMARK_(m){
return clojure.core.matrix.protocols.upper_triangular_QMARK_(m);
});
/**
 * Returns true if the parameter is a lower triangular matrix.
 */
clojure.core.matrix.lower_triangular_QMARK_ = (function clojure$core$matrix$lower_triangular_QMARK_(m){
return clojure.core.matrix.protocols.lower_triangular_QMARK_(m);
});
/**
 * Returns true if the parameter is an orthogonal matrix.
 */
clojure.core.matrix.orthogonal_QMARK_ = (function clojure$core$matrix$orthogonal_QMARK_(var_args){
var G__34650 = arguments.length;
switch (G__34650) {
case 2:
return clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (m,eps){
return clojure.core.matrix.protocols.orthogonal_QMARK_(m,eps);
}));

(clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.orthogonal_QMARK_(m,1.0E-5);
}));

(clojure.core.matrix.orthogonal_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if an array is sparse, i.e. the implementation supports storage of the entire
 * array in less memory than would normally be implied by the number of elements.
 * 
 * Sparse matrices may have memory requirements that scale with the number of non-zero elements
 * rather than the total number of elements, for example.
 */
clojure.core.matrix.sparse_QMARK_ = (function clojure$core$matrix$sparse_QMARK_(m){
return clojure.core.matrix.protocols.is_sparse_QMARK_(m);
});
/**
 * Returns the class of elements that can be in the array. For example, a numerical array may return
 * the class java.lang.Double.
 */
clojure.core.matrix.element_type = (function clojure$core$matrix$element_type(m){
return clojure.core.matrix.protocols.element_type(m);
});
/**
 * Returns the dimensionality of an array. The dimensionality is equal to
 * the number of dimensions in the array's shape.
 */
clojure.core.matrix.dimensionality = (function clojure$core$matrix$dimensionality(m){
return cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
});
/**
 * Returns the size of the specified dimension in a matrix. Will throw an error if the matrix
 * does not have the specified dimension.
 */
clojure.core.matrix.dimension_count = (function clojure$core$matrix$dimension_count(m,dim){
return cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,dim));
});
/**
 * Returns the number of rows in a matrix or vector (array must be 1D or more).
 */
clojure.core.matrix.row_count = (function clojure$core$matrix$row_count(m){
return clojure.core.matrix.dimension_count(m,(0));
});
/**
 * Returns the number of columns in a matrix (array must be 2D or more)
 */
clojure.core.matrix.column_count = (function clojure$core$matrix$column_count(m){
return clojure.core.matrix.dimension_count(m,(1));
});
/**
 * Returns the number of slices in an array (array must be 1D or more). The array is sliced
 * in row-major order, i.e. this is the dimension count of the first dimension.
 */
clojure.core.matrix.slice_count = (function clojure$core$matrix$slice_count(m){
return clojure.core.matrix.dimension_count(m,(0));
});
/**
 * Returns the total count of elements in an array, as an integer value.
 * 
 * Equal to the product of the lengths of each dimension in the array's shape.
 * 
 * Result will usually be a Long, however callers should note that for very large sparse arrays
 * the element count may be a BigInteger, i.e. equal to or larger than 2^63.
 * 
 * Returns 1 for a zero-dimensional array or scalar. 
 */
clojure.core.matrix.ecount = (function clojure$core$matrix$ecount(m){
return clojure.core.matrix.protocols.element_count(m);
});
/**
 * Returns true if matrix is square (i.e. a 2D array with same number of rows and columns)
 */
clojure.core.matrix.square_QMARK_ = (function clojure$core$matrix$square_QMARK_(m){
return ((((2) === clojure.core.matrix.dimensionality(m))) && ((clojure.core.matrix.dimension_count(m,(0)) === clojure.core.matrix.dimension_count(m,(1)))));
});
/**
 * Returns true if a matrix is a row-matrix (i.e. is 2D and has exactly one row)
 */
clojure.core.matrix.row_matrix_QMARK_ = (function clojure$core$matrix$row_matrix_QMARK_(m){
return (((cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)) === (2))) && (((1) === clojure.core.matrix.dimension_count(m,(0)))));
});
/**
 * Returns true if a matrix is a column-matrix (i.e. is 2D and has has exactly one column)
 */
clojure.core.matrix.column_matrix_QMARK_ = (function clojure$core$matrix$column_matrix_QMARK_(m){
return (((cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)) === (2))) && (((1) === clojure.core.matrix.dimension_count(m,(1)))));
});
/**
 * Returns the rank of each element in an array, as an array of indexes with 0 being first, in ascending order.
 * 
 * If passed a higher dimensional array, returns an array of ranks along the last dimension.
 * 
 * An optional comparator may be provided, otherwise the default comparator will be used. Comparator should
 * support java.util.Comparator on the JVM, although some implementations may support alternative comparator types 
 * e.g. Clojure predicates. Please check the documentation for your core.matrix implementation.
 */
clojure.core.matrix.rank = (function clojure$core$matrix$rank(var_args){
var G__34652 = arguments.length;
switch (G__34652) {
case 1:
return clojure.core.matrix.rank.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.rank.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.rank.cljs$core$IFn$_invoke$arity$1 = (function (a){
return clojure.core.matrix.protocols.index_rank(a);
}));

(clojure.core.matrix.rank.cljs$core$IFn$_invoke$arity$2 = (function (comparator,a){
return clojure.core.matrix.protocols.index_rank(a,comparator);
}));

(clojure.core.matrix.rank.cljs$lang$maxFixedArity = 2);

/**
 * Returns the shape of an array, i.e. the dimension sizes for all dimensions.
 * 
 * The result will be a vector containing only integer index values, with a count
 * equal to the dimensionality of the array.
 * 
 * Returns nil the if object is not an array (i.e. is a scalar value)
 */
clojure.core.matrix.shape = (function clojure$core$matrix$shape(m){
var temp__5802__auto__ = clojure.core.matrix.protocols.get_shape(m);
if(cljs.core.truth_(temp__5802__auto__)){
var sh = temp__5802__auto__;
return cljs.core.vec(sh);
} else {
return null;
}
});
/**
 * Like shape, but validates the shape of the array and throws an exception if the array does not have the
 * expected shape. Useful for ensuring that mixed implementation arrays or nested Clojure vectors conform to
 * the expected shape.
 * 
 * Returns the shape of the array if sucessful, or nil if the object is not a core.matrix array.
 */
clojure.core.matrix.validate_shape = (function clojure$core$matrix$validate_shape(var_args){
var G__34654 = arguments.length;
switch (G__34654) {
case 1:
return clojure.core.matrix.validate_shape.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.validate_shape.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.validate_shape.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.validate_shape(m);
}));

(clojure.core.matrix.validate_shape.cljs$core$IFn$_invoke$arity$2 = (function (m,shape){
return clojure.core.matrix.protocols.validate_shape(m,shape);
}));

(clojure.core.matrix.validate_shape.cljs$lang$maxFixedArity = 2);

/**
 * Returns the number of zeros in an array.
 * 
 * Result will usually be a Long, however callers should note that for very large sparse arrays
 * the zero count may be a BigInteger, i.e. equal to or larger than 2^63.
 */
clojure.core.matrix.zero_count = (function clojure$core$matrix$zero_count(m){
return clojure.core.matrix.protocols.zero_count(m);
});
/**
 * Returns the density of the matrix, defined as the proportion of non-zero elements
 */
clojure.core.matrix.density = (function clojure$core$matrix$density(m){
var zeros = clojure.core.matrix.protocols.zero_count(m);
var elems = clojure.core.matrix.protocols.element_count(m);
return ((elems - zeros) / elems);
});
/**
 * Returns true if the matrix is mutable, i.e. supports setting of values.
 * 
 * It is possible for some matrix implementations to have constraints on mutability (e.g. mutable only in diagonal elements),
 * this method will still return true for such cases.
 */
clojure.core.matrix.mutable_QMARK_ = (function clojure$core$matrix$mutable_QMARK_(m){
return clojure.core.matrix.protocols.is_mutable_QMARK_(m);
});
/**
 * Returns true if the parameter is a valid array index type. An index is a seq-able 1D list
 * of integer values that can be used to index into arrays.
 */
clojure.core.matrix.index_QMARK_ = (function clojure$core$matrix$index_QMARK_(m){
return clojure.core.matrix.protocols.index_QMARK_(m);
});
/**
 * Returns true if two arrays have a conforming shape. Two arrays are conforming if there
 * exists a common shape that both can broadcast to. This is a requirement for element-wise
 * operations to work correctly on two different-shaped arrays.
 */
clojure.core.matrix.conforming_QMARK_ = (function clojure$core$matrix$conforming_QMARK_(var_args){
var G__34656 = arguments.length;
switch (G__34656) {
case 1:
return clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return true;
}));

(clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var sa = clojure.core.matrix.protocols.get_shape(a);
var sb = clojure.core.matrix.protocols.get_shape(b);
return (((cljs.core.count(sa) >= cljs.core.count(sb))) && (cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,cljs.core.reverse(sa),cljs.core.reverse(sb)))));
}));

(clojure.core.matrix.conforming_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the arrays have the same shape, false otherwise
 */
clojure.core.matrix.same_shape_QMARK_ = (function clojure$core$matrix$same_shape_QMARK_(var_args){
var G__34661 = arguments.length;
switch (G__34661) {
case 0:
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___34965 = arguments.length;
var i__5770__auto___34966 = (0);
while(true){
if((i__5770__auto___34966 < len__5769__auto___34965)){
args_arr__5794__auto__.push((arguments[i__5770__auto___34966]));

var G__34967 = (i__5770__auto___34966 + (1));
i__5770__auto___34966 = G__34967;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return true;
}));

(clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (m){
return true;
}));

(clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (m,n){
var or__5045__auto__ = (m === n);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return clojure.core.matrix.protocols.same_shape_QMARK_(m,n);
}
}));

(clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (m,n,more){
var m__$1 = m;
var n__$1 = n;
var more__$1 = cljs.core.seq(more);
while(true){
if(cljs.core.truth_((function (){var or__5045__auto__ = (m__$1 === n__$1);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return clojure.core.matrix.protocols.same_shape_QMARK_(m__$1,n__$1);
}
})())){
if(more__$1){
var G__34968 = n__$1;
var G__34969 = cljs.core.first(more__$1);
var G__34970 = cljs.core.next(more__$1);
m__$1 = G__34968;
n__$1 = G__34969;
more__$1 = G__34970;
continue;
} else {
return true;
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(clojure.core.matrix.same_shape_QMARK_.cljs$lang$applyTo = (function (seq34658){
var G__34659 = cljs.core.first(seq34658);
var seq34658__$1 = cljs.core.next(seq34658);
var G__34660 = cljs.core.first(seq34658__$1);
var seq34658__$2 = cljs.core.next(seq34658__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34659,G__34660,seq34658__$2);
}));

(clojure.core.matrix.same_shape_QMARK_.cljs$lang$maxFixedArity = (2));

/**
 * Returns true if the matrix is a valid numerical matrix (i.e. supports numerical core.matrix operations).
 */
clojure.core.matrix.numerical_QMARK_ = (function clojure$core$matrix$numerical_QMARK_(m){
return clojure.core.matrix.protocols.numerical_QMARK_(m);
});
/**
 * Returns a Java double[] array containing the values of a numerical array m in row-major order. Will
 *  throw an error if any of the array elements cannot be converted to doubles.
 * 
 *  If want-copy? is true, will guarantee a new double array (defensive copy).
 *  If want-copy? is false, will return the internal array used by m, or nil if not supported
 *  by the implementation.
 *  If want-copy? is not specified, will return either a copy or the internal array
 */
clojure.core.matrix.to_double_array = (function clojure$core$matrix$to_double_array(var_args){
var G__34663 = arguments.length;
switch (G__34663) {
case 1:
return clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.to_double_array(m);
}));

(clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$2 = (function (m,want_copy_QMARK_){
var arr = clojure.core.matrix.protocols.as_double_array(m);
if(cljs.core.truth_(want_copy_QMARK_)){
if(cljs.core.truth_(arr)){
return clojure.core.matrix.utils.copy_double_array(arr);
} else {
return clojure.core.matrix.protocols.to_double_array(m);
}
} else {
return arr;
}
}));

(clojure.core.matrix.to_double_array.cljs$lang$maxFixedArity = 2);

/**
 * Returns a Java Object[] array containing the values of an array m in row-major order.
 * 
 *  If want-copy? is true, will guarantee a new Object array (defensive copy).
 *  If want-copy? is false, will return the internal array used by m, or nil if not supported
 *  by the implementation.
 *  If want-copy? is not specified, will return either a copy or the internal array
 */
clojure.core.matrix.to_object_array = (function clojure$core$matrix$to_object_array(var_args){
var G__34665 = arguments.length;
switch (G__34665) {
case 1:
return clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.to_object_array(m);
}));

(clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$2 = (function (m,want_copy_QMARK_){
var arr = clojure.core.matrix.protocols.as_object_array(m);
if(cljs.core.truth_(want_copy_QMARK_)){
if(cljs.core.truth_(arr)){
return clojure.core.matrix.utils.copy_object_array(arr);
} else {
return clojure.core.matrix.protocols.to_object_array(m);
}
} else {
return arr;
}
}));

(clojure.core.matrix.to_object_array.cljs$lang$maxFixedArity = 2);

/**
 * Packs array data in the most efficient format as defined by the implementation. May return the
 * same array if no additional packing is required.
 */
clojure.core.matrix.pack = (function clojure$core$matrix$pack(a){
return clojure.core.matrix.protocols.pack(a);
});
/**
 * Coerces param (which may be any array) into a format preferred by a specific matrix implementation.
 * If the matrix implementation is not specified, uses the current matrix implementation.
 * If param is already in a format deemed usable by the implementation, may return it unchanged.
 * 
 * coerce should never alter the shape of the array, but may convert element types where necessary
 * (e.g. turning real values into complex values when converting to a complex array type).
 */
clojure.core.matrix.coerce = (function clojure$core$matrix$coerce(var_args){
var G__34667 = arguments.length;
switch (G__34667) {
case 1:
return clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$1 = (function (param){
var m = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();
var or__5045__auto__ = clojure.core.matrix.protocols.coerce_param(m,param);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param(m,clojure.core.matrix.protocols.convert_to_nested_vectors(param));
}
}));

(clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$2 = (function (matrix_or_implementation,param){
var m = (((matrix_or_implementation instanceof cljs.core.Keyword))?clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(matrix_or_implementation):matrix_or_implementation);
var or__5045__auto__ = clojure.core.matrix.protocols.coerce_param(m,param);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param(m,clojure.core.matrix.protocols.convert_to_nested_vectors(param));
}
}));

(clojure.core.matrix.coerce.cljs$lang$maxFixedArity = 2);

/**
 * Gets a scalar value from an array at the specified position. Supports any number of dimensions.
 */
clojure.core.matrix.mget = (function clojure$core$matrix$mget(var_args){
var G__34673 = arguments.length;
switch (G__34673) {
case 1:
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___34975 = arguments.length;
var i__5770__auto___34976 = (0);
while(true){
if((i__5770__auto___34976 < len__5769__auto___34975)){
args_arr__5794__auto__.push((arguments[i__5770__auto___34976]));

var G__34977 = (i__5770__auto___34976 + (1));
i__5770__auto___34976 = G__34977;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((3)),(0),null));
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.get_0d(m);
}));

(clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$2 = (function (m,x){
return clojure.core.matrix.protocols.get_1d(m,x);
}));

(clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$3 = (function (m,x,y){
return clojure.core.matrix.protocols.get_2d(m,x,y);
}));

(clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$variadic = (function (m,x,y,more){
return clojure.core.matrix.protocols.get_nd(m,cljs.core.cons(x,cljs.core.cons(y,more)));
}));

/** @this {Function} */
(clojure.core.matrix.mget.cljs$lang$applyTo = (function (seq34669){
var G__34670 = cljs.core.first(seq34669);
var seq34669__$1 = cljs.core.next(seq34669);
var G__34671 = cljs.core.first(seq34669__$1);
var seq34669__$2 = cljs.core.next(seq34669__$1);
var G__34672 = cljs.core.first(seq34669__$2);
var seq34669__$3 = cljs.core.next(seq34669__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34670,G__34671,G__34672,seq34669__$3);
}));

(clojure.core.matrix.mget.cljs$lang$maxFixedArity = (3));

/**
 * Sets a scalar value in an array at the specified position. Supports any number of dimensions.
 * 
 * Returns a new matrix and leaves the original unchanged.
 * 
 * WARNING: performance of this operation may be as high as O(N) where N is the number of elements in
 * the array. Consider using mutable arrays and `mset!` when setting large numbers of individual elements
 * is required.
 */
clojure.core.matrix.mset = (function clojure$core$matrix$mset(var_args){
var G__34680 = arguments.length;
switch (G__34680) {
case 2:
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___34979 = arguments.length;
var i__5770__auto___34980 = (0);
while(true){
if((i__5770__auto___34980 < len__5769__auto___34979)){
args_arr__5794__auto__.push((arguments[i__5770__auto___34980]));

var G__34981 = (i__5770__auto___34980 + (1));
i__5770__auto___34980 = G__34981;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((4)),(0),null));
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$2 = (function (m,v){
return clojure.core.matrix.protocols.set_0d(m,v);
}));

(clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$3 = (function (m,x,v){
return clojure.core.matrix.protocols.set_1d(m,x,v);
}));

(clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$4 = (function (m,x,y,v){
return clojure.core.matrix.protocols.set_2d(m,x,y,v);
}));

(clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$variadic = (function (m,x,y,z,more){
return clojure.core.matrix.protocols.set_nd(m,cljs.core.cons(x,cljs.core.cons(y,cljs.core.cons(z,cljs.core.butlast(more)))),cljs.core.last(more));
}));

/** @this {Function} */
(clojure.core.matrix.mset.cljs$lang$applyTo = (function (seq34675){
var G__34676 = cljs.core.first(seq34675);
var seq34675__$1 = cljs.core.next(seq34675);
var G__34677 = cljs.core.first(seq34675__$1);
var seq34675__$2 = cljs.core.next(seq34675__$1);
var G__34678 = cljs.core.first(seq34675__$2);
var seq34675__$3 = cljs.core.next(seq34675__$2);
var G__34679 = cljs.core.first(seq34675__$3);
var seq34675__$4 = cljs.core.next(seq34675__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34676,G__34677,G__34678,G__34679,seq34675__$4);
}));

(clojure.core.matrix.mset.cljs$lang$maxFixedArity = (4));

/**
 * Mutates a scalar value in an array at the specified position. Supports any number of dimensions.
 * 
 * Will throw an exception if the matrix is not mutable at the specified position. Note that it
 * is possible for some arrays to be mutable in places and immutable in others (e.g. sparse arrays)
 * 
 * Returns the modified matrix (it is guaranteed to return the same instance)
 */
clojure.core.matrix.mset_BANG_ = (function clojure$core$matrix$mset_BANG_(var_args){
var G__34688 = arguments.length;
switch (G__34688) {
case 2:
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___34983 = arguments.length;
var i__5770__auto___34984 = (0);
while(true){
if((i__5770__auto___34984 < len__5769__auto___34983)){
args_arr__5794__auto__.push((arguments[i__5770__auto___34984]));

var G__34985 = (i__5770__auto___34984 + (1));
i__5770__auto___34984 = G__34985;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((5)),(0),null));
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (m,v){
clojure.core.matrix.protocols.set_0d_BANG_(m,v);

return m;
}));

(clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,x,v){
clojure.core.matrix.protocols.set_1d_BANG_(m,x,v);

return m;
}));

(clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,x,y,v){
clojure.core.matrix.protocols.set_2d_BANG_(m,x,y,v);

return m;
}));

(clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (m,x,y,z,v){
clojure.core.matrix.protocols.set_nd_BANG_(m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null),v);

return m;
}));

(clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (m,x,y,z,t,more){
clojure.core.matrix.protocols.set_nd_BANG_(m,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z,t], null),cljs.core.butlast(more)),cljs.core.last(more));

return m;
}));

/** @this {Function} */
(clojure.core.matrix.mset_BANG_.cljs$lang$applyTo = (function (seq34682){
var G__34683 = cljs.core.first(seq34682);
var seq34682__$1 = cljs.core.next(seq34682);
var G__34684 = cljs.core.first(seq34682__$1);
var seq34682__$2 = cljs.core.next(seq34682__$1);
var G__34685 = cljs.core.first(seq34682__$2);
var seq34682__$3 = cljs.core.next(seq34682__$2);
var G__34686 = cljs.core.first(seq34682__$3);
var seq34682__$4 = cljs.core.next(seq34682__$3);
var G__34687 = cljs.core.first(seq34682__$4);
var seq34682__$5 = cljs.core.next(seq34682__$4);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34683,G__34684,G__34685,G__34686,G__34687,seq34682__$5);
}));

(clojure.core.matrix.mset_BANG_.cljs$lang$maxFixedArity = (5));

/**
 * Gets a row of a matrix, as a 1D vector.
 * 
 * The format of the returned 1D vector is determined by the implementation of the source matrix. 
 * get-row may return a lightweight mutable view if supported by the implementation.
 */
clojure.core.matrix.get_row = (function clojure$core$matrix$get_row(m,x){
return clojure.core.matrix.protocols.get_row(m,x);
});
/**
 * Gets a column of a matrix, as a 1D vector.
 * 
 * The format of the returned 1D vector is determined by the implementation of the source matrix. 
 * get-column may return a lightweight mutable view if supported by the implementation.
 */
clojure.core.matrix.get_column = (function clojure$core$matrix$get_column(m,col_index){
return clojure.core.matrix.protocols.get_column(m,col_index);
});
/**
 * Slices along all dimensions where there is a numerical argument
 */
clojure.core.matrix.slice_dims = (function clojure$core$matrix$slice_dims(m,args,slice_func){
var shape = clojure.core.matrix.protocols.get_shape(m);
var N = cljs.core.count(args);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(N,clojure.core.matrix.dimensionality(m))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Inconsistent count of selection arguments ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)," for shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var m__$1 = m;
var i = (0);
var args__$1 = cljs.core.seq(args);
while(true){
if(args__$1){
var ix = cljs.core.first(args__$1);
if(typeof ix === 'number'){
var G__34986 = (slice_func.cljs$core$IFn$_invoke$arity$3 ? slice_func.cljs$core$IFn$_invoke$arity$3(m__$1,i,ix) : slice_func.call(null,m__$1,i,ix));
var G__34987 = i;
var G__34988 = cljs.core.next(args__$1);
m__$1 = G__34986;
i = G__34987;
args__$1 = G__34988;
continue;
} else {
var G__34989 = m__$1;
var G__34990 = (i + (1));
var G__34991 = cljs.core.next(args__$1);
m__$1 = G__34989;
i = G__34990;
args__$1 = G__34991;
continue;
}
} else {
return m__$1;
}
break;
}
});
/**
 * Normalises arg to either a number of a sequable list of indexes
 */
clojure.core.matrix.normalise_arg = (function clojure$core$matrix$normalise_arg(arg,dim_count){
if(typeof arg === 'number'){
return arg;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),arg)){
return cljs.core.vec(cljs.core.range.cljs$core$IFn$_invoke$arity$1(dim_count));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"last","last",1105735132),arg)){
return (dim_count - (1));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"butlast","butlast",-67491942),arg)){
return cljs.core.vec(cljs.core.range.cljs$core$IFn$_invoke$arity$1((dim_count - (1))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",-644103046),arg)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rest","rest",-1241696419),arg)){
return cljs.core.vec(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),dim_count));
} else {
return arg;

}
}
}
}
}
}
});
/**
 * Normalises arguments by mapping :all to the complete range
 */
clojure.core.matrix.normalise_args = (function clojure$core$matrix$normalise_args(args,m){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.normalise_arg,args,clojure.core.matrix.protocols.get_shape(m));
});
/**
 * Returns an array containing all elements in a which are at the positions
 * of the Cartesian product of args. An argument can be:
 *  - a number - slices at this dimension (eliminates the dimension),
 *  - a keyword which selects specific slices (:first :last)
 *  - a 1-dimensional array of numbers which selects the slices at these indices
 *  - a keyword which selects a range of slices (:all :butlast :rest)
 * 
 * The number of args must match the dimensionality of a.
 * 
 * Examples:
 * (select [[1 2][3 4]] 0 0) ;=> 1
 * (select [[1 2][3 4]] 0 :all) ;=> [1 2]
 * (select [[1 2][3 4]] [0 1] [0]) ;=> [[1] [3]]
 * (select [[1 2][3 4]] :all 0) ;=> [1 3]
 */
clojure.core.matrix.select = (function clojure$core$matrix$select(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34992 = arguments.length;
var i__5770__auto___34993 = (0);
while(true){
if((i__5770__auto___34993 < len__5769__auto___34992)){
args__5775__auto__.push((arguments[i__5770__auto___34993]));

var G__34994 = (i__5770__auto___34993 + (1));
i__5770__auto___34993 = G__34994;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return clojure.core.matrix.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(clojure.core.matrix.select.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var args__$1 = clojure.core.matrix.normalise_args(args,a);
var a__$1 = clojure.core.matrix.slice_dims(a,args__$1,clojure.core.matrix.slice);
var selecting_args = cljs.core.filterv(cljs.core.complement(cljs.core.number_QMARK_),args__$1);
return clojure.core.matrix.protocols.select(a__$1,selecting_args);
}));

(clojure.core.matrix.select.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.core.matrix.select.cljs$lang$applyTo = (function (seq34689){
var G__34690 = cljs.core.first(seq34689);
var seq34689__$1 = cljs.core.next(seq34689);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34690,seq34689__$1);
}));

/**
 * Like `select`, but guarantees a view over the original data.
 */
clojure.core.matrix.select_view = (function clojure$core$matrix$select_view(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34995 = arguments.length;
var i__5770__auto___34996 = (0);
while(true){
if((i__5770__auto___34996 < len__5769__auto___34995)){
args__5775__auto__.push((arguments[i__5770__auto___34996]));

var G__34997 = (i__5770__auto___34996 + (1));
i__5770__auto___34996 = G__34997;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return clojure.core.matrix.select_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(clojure.core.matrix.select_view.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var args__$1 = clojure.core.matrix.normalise_args(args,a);
var a__$1 = clojure.core.matrix.slice_dims(a,args__$1,clojure.core.matrix.slice_view);
var selecting_args = cljs.core.filterv(cljs.core.complement(cljs.core.number_QMARK_),args__$1);
var or__5045__auto__ = clojure.core.matrix.protocols.select_view(a__$1,selecting_args);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.impl.wrappers.wrap_selection(a__$1,selecting_args);
}
}));

(clojure.core.matrix.select_view.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.core.matrix.select_view.cljs$lang$applyTo = (function (seq34691){
var G__34692 = cljs.core.first(seq34691);
var seq34691__$1 = cljs.core.next(seq34691);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34692,seq34691__$1);
}));

/**
 * Returns a one-dimensional array of the elements which are at the specified
 * indices. An index is a one-dimensional array which element-count matches the
 * dimensionality of a. Examples:
 * (select-indices [[1 2] [3 4]] [[0 0][1 1]]) ;=> [1 4]
 */
clojure.core.matrix.select_indices = (function clojure$core$matrix$select_indices(a,indices){
return clojure.core.matrix.protocols.get_indices(a,indices);
});
/**
 * Like set-selection but mutates the array in place. Will throw an error if array is immutable.
 */
clojure.core.matrix.set_selection_BANG_ = (function clojure$core$matrix$set_selection_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34998 = arguments.length;
var i__5770__auto___34999 = (0);
while(true){
if((i__5770__auto___34999 < len__5769__auto___34998)){
args__5775__auto__.push((arguments[i__5770__auto___34999]));

var G__35000 = (i__5770__auto___34999 + (1));
i__5770__auto___34999 = G__35000;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return clojure.core.matrix.set_selection_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(clojure.core.matrix.set_selection_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var value = cljs.core.last(args);
var args__$1 = cljs.core.butlast(args);
clojure.core.matrix.assign_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.select_view,a,args__$1),value);

return a;
}));

(clojure.core.matrix.set_selection_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.core.matrix.set_selection_BANG_.cljs$lang$applyTo = (function (seq34693){
var G__34694 = cljs.core.first(seq34693);
var seq34693__$1 = cljs.core.next(seq34693);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34694,seq34693__$1);
}));

/**
 * Like select but sets the elements in the selection to the value of the final argument.
 * Leaves a unchanged and returns the modified array
 */
clojure.core.matrix.set_selection = (function clojure$core$matrix$set_selection(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35001 = arguments.length;
var i__5770__auto___35002 = (0);
while(true){
if((i__5770__auto___35002 < len__5769__auto___35001)){
args__5775__auto__.push((arguments[i__5770__auto___35002]));

var G__35003 = (i__5770__auto___35002 + (1));
i__5770__auto___35002 = G__35003;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return clojure.core.matrix.set_selection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(clojure.core.matrix.set_selection.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var a__$1 = clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$1(a);
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.set_selection_BANG_,a__$1,args);
return clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$2(a__$1,r);
}));

(clojure.core.matrix.set_selection.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.core.matrix.set_selection.cljs$lang$applyTo = (function (seq34695){
var G__34696 = cljs.core.first(seq34695);
var seq34695__$1 = cljs.core.next(seq34695);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34696,seq34695__$1);
}));

/**
 * like select-indices but sets the elements at the specified indices to values.
 * Leaves the original array (a) unchanged and returns a modified array
 */
clojure.core.matrix.set_indices = (function clojure$core$matrix$set_indices(a,indices,values){
return clojure.core.matrix.protocols.set_indices(a,indices,values);
});
/**
 * like set-indices but destructively modifies array in place
 */
clojure.core.matrix.set_indices_BANG_ = (function clojure$core$matrix$set_indices_BANG_(a,indices,values){
clojure.core.matrix.protocols.set_indices_BANG_(a,indices,values);

return a;
});
/**
 * Gets a view of a submatrix, for a set of index ranges.
 * 
 * If Index ranges are used they must be a sequence [start, length] pairs,
 * with the special exception that these pairs can be nil (gets the whole range).
 * 
 * May be a mutable view if supported by the implementation.
 */
clojure.core.matrix.submatrix = (function clojure$core$matrix$submatrix(var_args){
var G__34698 = arguments.length;
switch (G__34698) {
case 2:
return clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$2 = (function (m,index_ranges){
return clojure.core.matrix.protocols.submatrix(m,index_ranges);
}));

(clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,index_range){
return clojure.core.matrix.protocols.submatrix(m,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.dimensionality(m),null)),dimension,index_range));
}));

(clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$5 = (function (m,row_start,row_length,col_start,col_length){
return clojure.core.matrix.protocols.submatrix(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,row_start,(new cljs.core.List(null,row_length,null,(1),null)),(2),null)),(new cljs.core.List(null,col_start,(new cljs.core.List(null,col_length,null,(1),null)),(2),null))], null));
}));

(clojure.core.matrix.submatrix.cljs$lang$maxFixedArity = 5);

/**
 * Gets a view of part of a vector, specifed by a start index and length.
 * 
 * The view maintains a reference to the original,
 * so can be used to modify the original vector if it is mutable.
 */
clojure.core.matrix.subvector = (function clojure$core$matrix$subvector(m,start,length){
return clojure.core.matrix.protocols.subvector(m,start,length);
});
/**
 * Gets a slice of an array along a specific dimension.
 * 
 * The returned array will have one less dimension, i.e. slicing a matrix will return a vector
 * and slicing a 1D vector will return a scalar.
 * 
 * Slicing on the first dimension (dimension 0) is likely to perform better
 * for many array implementations. This is the default.
 */
clojure.core.matrix.slice = (function clojure$core$matrix$slice(var_args){
var G__34700 = arguments.length;
switch (G__34700) {
case 2:
return clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$2 = (function (m,index){
return clojure.core.matrix.protocols.get_slice(m,(0),index);
}));

(clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,index){
return clojure.core.matrix.protocols.get_slice(m,dimension,index);
}));

(clojure.core.matrix.slice.cljs$lang$maxFixedArity = 3);

/**
 * Gets a sequence of slices of an array. If dimension is supplied, slices along a given dimension,
 * otherwise slices along the first dimension.
 * 
 * Returns a sequence of scalar values if the array is 1-dimensional.
 */
clojure.core.matrix.slices = (function clojure$core$matrix$slices(var_args){
var G__34702 = arguments.length;
switch (G__34702) {
case 1:
return clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.get_major_slice_seq(m);
}));

(clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$2 = (function (m,dimension){
return clojure.core.matrix.protocols.get_slice_seq(m,dimension);
}));

(clojure.core.matrix.slices.cljs$lang$maxFixedArity = 2);

/**
 * Gets a sequence of views of the slices of an array. If dimension is supplied, slices along a given dimension,
 * otherwise slices along the first dimension. If the matrix implementation supports mutable views, these views
 * can be used to mutate portions of the original array.
 * 
 * A key difference between 'slices' and 'slice-views' is that 'slice-views' must always return views. In order
 * to ensure this behaviour on mutable 1-dimensional arrays, it must return a sequence of 0-dimensional arrays.
 */
clojure.core.matrix.slice_views = (function clojure$core$matrix$slice_views(var_args){
var G__34705 = arguments.length;
switch (G__34705) {
case 1:
return clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.get_major_slice_view_seq(m);
}));

(clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$2 = (function (m,dimension){
if(((0) === cljs.core.long$(dimension))){
return clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$1(m);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34703_SHARP_){
return clojure.core.matrix.protocols.get_slice_view(m,dimension,p1__34703_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m,dimension)));
}
}));

(clojure.core.matrix.slice_views.cljs$lang$maxFixedArity = 2);

/**
 * Gets a view of an array slice. Guaranteed to return a mutable view if the array is mutable.
 */
clojure.core.matrix.slice_view = (function clojure$core$matrix$slice_view(var_args){
var G__34707 = arguments.length;
switch (G__34707) {
case 2:
return clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$2 = (function (m,i){
return clojure.core.matrix.protocols.get_major_slice_view(m,i);
}));

(clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,i){
if(((0) === cljs.core.long$(dimension))){
return clojure.core.matrix.protocols.get_major_slice_view(m,i);
} else {
return clojure.core.matrix.protocols.get_slice_view(m,dimension,i);
}
}));

(clojure.core.matrix.slice_view.cljs$lang$maxFixedArity = 3);

/**
 * Gets the rows of a matrix, as a sequence of 1D vectors.
 * 
 * If the array has more than 2 dimensions, will return the rows from all slices in order.
 */
clojure.core.matrix.rows = (function clojure$core$matrix$rows(m){
return clojure.core.matrix.protocols.get_rows(m);
});
/**
 * Gets the columns of a matrix, as a seqable collection of 1D vectors.
 * 
 * If the array has more than 2 dimensions, will return the columns from all slices in order.
 */
clojure.core.matrix.columns = (function clojure$core$matrix$columns(m){
return clojure.core.matrix.protocols.get_columns(m);
});
/**
 * Returns the main diagonal of a matrix or general array, as a vector.
 * The main diagonal of a general array is defined as those elements where the all the
 * indexes are equal, i.e. the index is of the form [i i ... i]
 * Works on both square and rectangular matrices.
 */
clojure.core.matrix.main_diagonal = (function clojure$core$matrix$main_diagonal(m){
return clojure.core.matrix.protocols.main_diagonal(m);
});
/**
 * Returns the specified diagonal of a 2D matrix as a vector.
 * If k>0, returns a diagonal above the main diagonal.
 * If k<0, returns a diagonal below the main diagonal.
 * Works on both square and rectangular matrices.
 * Returns empty vector if value of k is out of range (outside matrix)
 */
clojure.core.matrix.diagonal = (function clojure$core$matrix$diagonal(var_args){
var G__34709 = arguments.length;
switch (G__34709) {
case 1:
return clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.main_diagonal(m);
}));

(clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$2 = (function (m,k){
var k__$1 = cljs.core.long$(k);
if((k__$1 < (0))){
return clojure.core.matrix.protocols.main_diagonal(clojure.core.matrix.protocols.submatrix(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- k__$1),(clojure.core.matrix.dimension_count(m,(0)) + k__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),clojure.core.matrix.dimension_count(m,(1))], null)], null)));
} else {
if((k__$1 > (0))){
return clojure.core.matrix.protocols.main_diagonal(clojure.core.matrix.protocols.submatrix(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),clojure.core.matrix.dimension_count(m,(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,(clojure.core.matrix.dimension_count(m,(1)) - k__$1)], null)], null)));
} else {
return clojure.core.matrix.protocols.main_diagonal(m);

}
}
}));

(clojure.core.matrix.diagonal.cljs$lang$maxFixedArity = 2);

/**
 * Joins arrays together, along the major dimension 0. For 1D vectors, this behaves as simple concatenation.
 * Other dimensions must be compatible. To join arrays along a different dimension, use 'join-along' instead.
 */
clojure.core.matrix.join = (function clojure$core$matrix$join(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35010 = arguments.length;
var i__5770__auto___35011 = (0);
while(true){
if((i__5770__auto___35011 < len__5769__auto___35010)){
args__5775__auto__.push((arguments[i__5770__auto___35011]));

var G__35012 = (i__5770__auto___35011 + (1));
i__5770__auto___35011 = G__35012;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return clojure.core.matrix.join.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(clojure.core.matrix.join.cljs$core$IFn$_invoke$arity$variadic = (function (arrays){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.join,arrays);
}));

(clojure.core.matrix.join.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(clojure.core.matrix.join.cljs$lang$applyTo = (function (seq34710){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34710));
}));

/**
 * Joins arrays together, concatenating them along the specified dimension.
 * 
 * Other dimensions must be compatible.
 */
clojure.core.matrix.join_along = (function clojure$core$matrix$join_along(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35013 = arguments.length;
var i__5770__auto___35014 = (0);
while(true){
if((i__5770__auto___35014 < len__5769__auto___35013)){
args__5775__auto__.push((arguments[i__5770__auto___35014]));

var G__35015 = (i__5770__auto___35014 + (1));
i__5770__auto___35014 = G__35015;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic = (function (dimension,arrays){
var or__5045__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__34711_SHARP_,p2__34712_SHARP_){
return clojure.core.matrix.protocols.join_along(p1__34711_SHARP_,p2__34712_SHARP_,dimension);
}),arrays);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Failure to joins arrays",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(clojure.core.matrix.join_along.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.core.matrix.join_along.cljs$lang$applyTo = (function (seq34713){
var G__34714 = cljs.core.first(seq34713);
var seq34713__$1 = cljs.core.next(seq34713);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34714,seq34713__$1);
}));

/**
 * Adds a new value [b] as a new slice to an array [a], returning the extended array.
 * Broadcasts the new value to the correct shape of a slice of a if necessary.
 * 
 * This can be considered as the array equivalent of clojure.core/conj
 */
clojure.core.matrix.conjoin = (function clojure$core$matrix$conjoin(var_args){
var G__34720 = arguments.length;
switch (G__34720) {
case 2:
return clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35017 = arguments.length;
var i__5770__auto___35018 = (0);
while(true){
if((i__5770__auto___35018 < len__5769__auto___35017)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35018]));

var G__35019 = (i__5770__auto___35018 + (1));
i__5770__auto___35018 = G__35019;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var ss = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(clojure.core.matrix.protocols.get_shape(a)),(0),(1));
return clojure.core.matrix.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,clojure.core.matrix.protocols.broadcast(b,ss)], 0));
}));

(clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
var ss = cljs.core.vec(cljs.core.next(clojure.core.matrix.protocols.get_shape(a)));
var slcs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__34715_SHARP_){
return clojure.core.matrix.protocols.broadcast(p1__34715_SHARP_,ss);
}),cljs.core.cons(b,more));
return clojure.core.matrix.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,slcs], 0));
}));

/** @this {Function} */
(clojure.core.matrix.conjoin.cljs$lang$applyTo = (function (seq34717){
var G__34718 = cljs.core.first(seq34717);
var seq34717__$1 = cljs.core.next(seq34717);
var G__34719 = cljs.core.first(seq34717__$1);
var seq34717__$2 = cljs.core.next(seq34717__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34718,G__34719,seq34717__$2);
}));

(clojure.core.matrix.conjoin.cljs$lang$maxFixedArity = (2));

/**
 * Adds a new value [b] as a new slice to an array [a] along the given dimension,
 * returning the extended array.
 * Broadcasts the new value to the correct shape of a slice of a if necessary.
 * 
 * This can be considered as the array equivalent of clojure.core/conj using
 * a specified dimension
 */
clojure.core.matrix.conjoin_along = (function clojure$core$matrix$conjoin_along(var_args){
var G__34726 = arguments.length;
switch (G__34726) {
case 3:
return clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35021 = arguments.length;
var i__5770__auto___35022 = (0);
while(true){
if((i__5770__auto___35022 < len__5769__auto___35021)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35022]));

var G__35023 = (i__5770__auto___35022 + (1));
i__5770__auto___35022 = G__35023;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((3)),(0),null));
return clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$3 = (function (dim,a,b){
if((cljs.core.long$(dim) === (0))){
return clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
var ss = clojure.core.matrix.protocols.get_shape(clojure.core.matrix.protocols.get_slice(a,dim,(0)));
return clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic(dim,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,clojure.core.matrix.protocols.broadcast(b,ss)], 0));
}
}));

(clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$variadic = (function (dim,a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a__$1,b__$1){
return clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$3(dim,a__$1,b__$1);
}),clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$3(dim,a,b),more);
}));

/** @this {Function} */
(clojure.core.matrix.conjoin_along.cljs$lang$applyTo = (function (seq34722){
var G__34723 = cljs.core.first(seq34722);
var seq34722__$1 = cljs.core.next(seq34722);
var G__34724 = cljs.core.first(seq34722__$1);
var seq34722__$2 = cljs.core.next(seq34722__$1);
var G__34725 = cljs.core.first(seq34722__$2);
var seq34722__$3 = cljs.core.next(seq34722__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34723,G__34724,G__34725,seq34722__$3);
}));

(clojure.core.matrix.conjoin_along.cljs$lang$maxFixedArity = (3));

/**
 * Rotates an array along specified dimensions.
 * 
 * Elements rotated off will re-appear at the other side. The shape of the array will not be modified.
 */
clojure.core.matrix.rotate = (function clojure$core$matrix$rotate(var_args){
var G__34728 = arguments.length;
switch (G__34728) {
case 3:
return clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,shift_amount){
return clojure.core.matrix.protocols.rotate(m,dimension,shift_amount);
}));

(clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$2 = (function (m,shifts){
return clojure.core.matrix.protocols.rotate_all(m,shifts);
}));

(clojure.core.matrix.rotate.cljs$lang$maxFixedArity = 3);

/**
 * Shifts all elements of an array along specified dimensions, maintaining the shape of the array.
 * 
 * New spaces shifted into the array are filled with zero.
 */
clojure.core.matrix.shift = (function clojure$core$matrix$shift(var_args){
var G__34730 = arguments.length;
switch (G__34730) {
case 3:
return clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,shift_amount){
return clojure.core.matrix.protocols.shift(m,dimension,shift_amount);
}));

(clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$2 = (function (m,shifts){
return clojure.core.matrix.protocols.shift_all(m,shifts);
}));

(clojure.core.matrix.shift.cljs$lang$maxFixedArity = 3);

/**
 * Reorders slices of an array along a specified dimension. Re-orders along major dimension
 * if no dimension is specified.
 * 
 * Indicies can be any seqable object containing the indices along the specified dimension to select.
 * An index can be selected multiple times (which created repreated slices), or not at all (which excludes
 * the slice from the result).
 */
clojure.core.matrix.order = (function clojure$core$matrix$order(var_args){
var G__34732 = arguments.length;
switch (G__34732) {
case 2:
return clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$2 = (function (m,indices){
return clojure.core.matrix.protocols.order(m,indices);
}));

(clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,indices){
return clojure.core.matrix.protocols.order(m,dimension,indices);
}));

(clojure.core.matrix.order.cljs$lang$maxFixedArity = 3);

/**
 * Creates a view of an array as a single flattened vector.
 * 
 * Returns nil if this is not supported by the implementation. You should use `to-vector` instead to
 * obtain a flattened vector without guaranteeing a view.
 */
clojure.core.matrix.as_vector = (function clojure$core$matrix$as_vector(m){
return clojure.core.matrix.protocols.as_vector(m);
});
/**
 * Creates a new array representing the elements of array m as a single flattened vector.
 * 
 * This operation guarantees a new copy of the data.
 */
clojure.core.matrix.to_vector = (function clojure$core$matrix$to_vector(m){
var or__5045__auto__ = clojure.core.matrix.protocols.to_vector(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.protocols.to_object_array(m));
}
});
/**
 * Broadcasts an array to a specified shape. Returns a new array with the shape specified.
 * The broadcasted array may be a view over the original array: attempting to modify the
 * broadcasted array therefore has implementation-dependent results.
 * 
 * Will throw an exception if broadcast to the target shape is not possible.
 */
clojure.core.matrix.broadcast = (function clojure$core$matrix$broadcast(m,shape){
var or__5045__auto__ = clojure.core.matrix.protocols.broadcast(m,shape);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.protocols.broadcast(clojure.core.matrix.protocols.coerce_param((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),m),shape);
}
});
/**
 * Broadcasts the second array to the shape of the first. See 'broadcast'.
 */
clojure.core.matrix.broadcast_like = (function clojure$core$matrix$broadcast_like(m,a){
return clojure.core.matrix.protocols.broadcast_like(m,a);
});
/**
 * Broadcasts and coerces the second array to the same shape and type of the first.
 * Equivalent to (coerce m (broadcast-like m a)).
 * 
 * Useful for converting arrays to the correct shape and type for efficient future operations.
 */
clojure.core.matrix.broadcast_coerce = (function clojure$core$matrix$broadcast_coerce(m,a){
return clojure.core.matrix.protocols.broadcast_coerce(m,a);
});
/**
 * Transposes an array, returning a new array. 
 * 
 * Assuming no specific ordering is provided:
 *  - 1D vectors and scalars will be returned unchanged
 *  - For 2D matrices, rows and columns are swapped.
 *  - The dimension indices are reversed for any shape of a higher order N-dimensional array. 
 * 
 * If ordering is provided, will re-order dimensions according to the provided order. The 
 * provided ordering must be of the same length as the dimensionality of the array and
 * contain all the integers in the range 0...(dims-1).
 */
clojure.core.matrix.transpose = (function clojure$core$matrix$transpose(var_args){
var G__34734 = arguments.length;
switch (G__34734) {
case 1:
return clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.transpose(m);
}));

(clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$2 = (function (m,ordering){
return clojure.core.matrix.protocols.transpose_dims(m,ordering);
}));

(clojure.core.matrix.transpose.cljs$lang$maxFixedArity = 2);

/**
 * Transposes a square 2D matrix in-place.
 * 
 * Will throw an exception if not possible (e.g. if the matrix is not square or not mutable).
 */
clojure.core.matrix.transpose_BANG_ = (function clojure$core$matrix$transpose_BANG_(m){
clojure.core.matrix.protocols.transpose_BANG_(m);

return m;
});
/**
 * Changes the shape of a matrix to the specified new shape. shape can be any sequence of dimension sizes.
 * 
 * Preserves the row-major order of matrix elements. Truncates the sequence of elements if the shape is smaller
 * than the original shape.
 * 
 * Pads with default values (dependent on implementation - normally zero) if the shape is larger.
 */
clojure.core.matrix.reshape = (function clojure$core$matrix$reshape(m,shape){
return clojure.core.matrix.protocols.reshape(m,shape);
});
/**
 * Returns a view over an array with the specified new shape. shape can be any sequence of dimension sizes.
 * 
 * Preserves the row-major order of matrix elements. Truncates the sequence of elements if the shape is smaller
 * than the original shape.
 * 
 * Behaviour is currently undefined if the new shape is larger than the original array.
 */
clojure.core.matrix.reshape_view = (function clojure$core$matrix$reshape_view(m,shape){
return clojure.core.matrix.protocols.reshape_view(m,shape);
});
/**
 * Fills an array with a single scalar value. The scalar value must be compatible with the element-type
 * of the array.
 * 
 * Similar to assign!, but only supports scalar values (and may be more efficient).
 */
clojure.core.matrix.fill_BANG_ = (function clojure$core$matrix$fill_BANG_(m,value){
clojure.core.matrix.protocols.fill_BANG_(m,value);

return m;
});
/**
 * Fills an array with a single scalar value. The scalar value must be compatible with the element-type
 * of the array. Returns a new array.
 * 
 * Functionally similar to `assign!` except only intended for use with a scalar value.
 */
clojure.core.matrix.fill = (function clojure$core$matrix$fill(m,value){
return clojure.core.matrix.assign(m,clojure.core.matrix.protocols.get_0d(value));
});
/**
 * Returns true if two arrays are numerically equal.
 * 
 * Will return false for arrays of different shapes.
 * 
 * May either return false or throw an error if the arrays are not numerical.
 * 
 * If epsilon is provided, performs an equality test
 * with the given maximum tolerance (default is 0.0, i.e. exact numerical equivalence)
 */
clojure.core.matrix.equals = (function clojure$core$matrix$equals(var_args){
var G__34736 = arguments.length;
switch (G__34736) {
case 1:
return clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$1 = (function (a){
return true;
}));

(clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.matrix_equals(a,b);
}));

(clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$3 = (function (a,b,epsilon){
return clojure.core.matrix.protocols.matrix_equals_epsilon(a,b,epsilon);
}));

(clojure.core.matrix.equals.cljs$lang$maxFixedArity = 3);

/**
 * Element-wise of comparisons of two arrays. Returns the signum of the difference
 * between corresponding elements in two arrays.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (cmp 1 3) ;=> -1
 *   (cmp 0 0) ;=> 0
 *   (cmp 1 -1) ;=> 1
 *   (cmp [[1 3] [5 5]] [[3 3] [5 3]]) ;=> [[-1 0] [0 1]]
 *   (cmp [[1 4][1 5][1 8]] [[1 2][1 5][2 7]]) ;=> [[0 1][0 0][-1 1]]
 *   
 */
clojure.core.matrix.cmp = (function clojure$core$matrix$cmp(a,b){
return clojure.core.matrix.protocols.element_compare(a,b);
});
/**
 * Element-wise if. Tranverses each element, x, of an array, m. If x > 0,
 *   returns a (if a is a scalar) or the corresponding element from a (if a is an
 *   array or matrix). If x <= 0, returns b (if b is a scalar) or the corresponding
 *   element from array b (if b is an array or matrix).
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (eif (lt 1 3) 3 6) ;=> 3
 *   (eif (lt 5 3) 3 6) ;=> 6
 *   (eif (eq A B) 1 2) ;=> [[1 2] [2 1]]
 *   (eif (eq A B) 1 D) ;=> [[1 1] [9 1]]
 *   (eif (eq A B) C 2) ;=> [[2 2] [2 2]]
 *   (eif [[1 0][0 1] [[2 3][4 5]] [[6 7][8 9]]) ;=> [[2 7][8 5]]
 *   (eif (gt [[2 6][3 5]] 4) [[0 0][0 0]] [[1 1][1 1]] ;=> [[0 1][0 1]]
 */
clojure.core.matrix.eif = (function clojure$core$matrix$eif(m,a,b){
return clojure.core.matrix.protocols.element_if(m,a,b);
});
/**
 * Element-wise less-than comparison operation. Returns a binary array where
 *   elements less-than the argument are represented by 1 and elements greater-
 *   than or equal to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (lt 1 4) ;=> 1
 *   (lt 3 3) ;=> 0
 *   (lt [[1 5] [3 6]] 3) ;=> [[1 0] [0 0]]
 *   (lt [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[1 0] [1 0]]
 */
clojure.core.matrix.lt = (function clojure$core$matrix$lt(var_args){
var G__34741 = arguments.length;
switch (G__34741) {
case 2:
return clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35030 = arguments.length;
var i__5770__auto___35031 = (0);
while(true){
if((i__5770__auto___35031 < len__5769__auto___35030)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35031]));

var G__35032 = (i__5770__auto___35031 + (1));
i__5770__auto___35031 = G__35032;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_lt(m,a);
}));

(clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons(m,cljs.core.cons(a,more));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_multiply,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,clojure.core.matrix.protocols.element_lt),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),arrays)));
}));

/** @this {Function} */
(clojure.core.matrix.lt.cljs$lang$applyTo = (function (seq34738){
var G__34739 = cljs.core.first(seq34738);
var seq34738__$1 = cljs.core.next(seq34738);
var G__34740 = cljs.core.first(seq34738__$1);
var seq34738__$2 = cljs.core.next(seq34738__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34739,G__34740,seq34738__$2);
}));

(clojure.core.matrix.lt.cljs$lang$maxFixedArity = (2));

/**
 * Element-wise less-than-or-equal-to comparison operation. Returns a binary
 *   array where elements less-than or equal to the argument are represented by 1
 *   and elements greater-than to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (le 3 3) ;=> 1
 *   (le 4 3) ;=> 0
 *   (le [[1 5] [3 6]] 3) ;=> [[1 0] [1 0]]
 *   (le [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[1 0] [1 1]]
 */
clojure.core.matrix.le = (function clojure$core$matrix$le(var_args){
var G__34746 = arguments.length;
switch (G__34746) {
case 2:
return clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35034 = arguments.length;
var i__5770__auto___35035 = (0);
while(true){
if((i__5770__auto___35035 < len__5769__auto___35034)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35035]));

var G__35036 = (i__5770__auto___35035 + (1));
i__5770__auto___35035 = G__35036;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_le(m,a);
}));

(clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons(m,cljs.core.cons(a,more));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_multiply,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,clojure.core.matrix.protocols.element_le),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),arrays)));
}));

/** @this {Function} */
(clojure.core.matrix.le.cljs$lang$applyTo = (function (seq34743){
var G__34744 = cljs.core.first(seq34743);
var seq34743__$1 = cljs.core.next(seq34743);
var G__34745 = cljs.core.first(seq34743__$1);
var seq34743__$2 = cljs.core.next(seq34743__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34744,G__34745,seq34743__$2);
}));

(clojure.core.matrix.le.cljs$lang$maxFixedArity = (2));

/**
 * Element-wise greater-than comparison operation. Returns a binary array where
 *   elements greater-than the argument are represented by 1 and elements less-
 *   than or equal to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (gt 4 3) ;=> 1
 *   (gt 3 3) ;=> 0
 *   (gt [[1 5] [3 6]] 3) ;=> [[0 1] [0 1]]
 *   (gt [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[0 1] [0 0]]
 */
clojure.core.matrix.gt = (function clojure$core$matrix$gt(var_args){
var G__34751 = arguments.length;
switch (G__34751) {
case 2:
return clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35038 = arguments.length;
var i__5770__auto___35039 = (0);
while(true){
if((i__5770__auto___35039 < len__5769__auto___35038)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35039]));

var G__35040 = (i__5770__auto___35039 + (1));
i__5770__auto___35039 = G__35040;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_gt(m,a);
}));

(clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons(m,cljs.core.cons(a,more));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_multiply,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,clojure.core.matrix.protocols.element_gt),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),arrays)));
}));

/** @this {Function} */
(clojure.core.matrix.gt.cljs$lang$applyTo = (function (seq34748){
var G__34749 = cljs.core.first(seq34748);
var seq34748__$1 = cljs.core.next(seq34748);
var G__34750 = cljs.core.first(seq34748__$1);
var seq34748__$2 = cljs.core.next(seq34748__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34749,G__34750,seq34748__$2);
}));

(clojure.core.matrix.gt.cljs$lang$maxFixedArity = (2));

/**
 * Element-wise greater-than-or-equal-to comparison operation. Returns a binary
 *   array where elements greater-than or equal to the argument are represented by 1
 *   and elements less-than to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (ge 2 3) ;=> 0
 *   (ge 3 3) ;=> 1
 *   (ge [[1 5] [3 6]] 3) ;=> [[0 1] [1 1]]
 *   (ge [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[0 1] [0 1]]
 */
clojure.core.matrix.ge = (function clojure$core$matrix$ge(var_args){
var G__34756 = arguments.length;
switch (G__34756) {
case 2:
return clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35042 = arguments.length;
var i__5770__auto___35043 = (0);
while(true){
if((i__5770__auto___35043 < len__5769__auto___35042)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35043]));

var G__35044 = (i__5770__auto___35043 + (1));
i__5770__auto___35043 = G__35044;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_ge(m,a);
}));

(clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons(m,cljs.core.cons(a,more));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_multiply,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,clojure.core.matrix.protocols.element_ge),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),arrays)));
}));

/** @this {Function} */
(clojure.core.matrix.ge.cljs$lang$applyTo = (function (seq34753){
var G__34754 = cljs.core.first(seq34753);
var seq34753__$1 = cljs.core.next(seq34753);
var G__34755 = cljs.core.first(seq34753__$1);
var seq34753__$2 = cljs.core.next(seq34753__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34754,G__34755,seq34753__$2);
}));

(clojure.core.matrix.ge.cljs$lang$maxFixedArity = (2));

/**
 * Element-wise not-equal comparison operation. Returns a binary array where
 *   elements not-equal to the argument are represented by 1 and elements equal to
 *   the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (ne 1 1) ;=> 0
 *   (ne 5 1) ;=> 1
 *   (ne [[1 5] [3 6]] 3) ;=> [[1 1] [0 1]]
 *   (ne [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[1 1] [1 0]]
 */
clojure.core.matrix.ne = (function clojure$core$matrix$ne(m,a){
return clojure.core.matrix.protocols.element_ne(m,a);
});
/**
 * Element-wise equal comparison operation. Returns a binary
 * array where elements equal to the argument are represented by 1 and
 * elements not-equal to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (eq 1 1) ;=> 1
 *   (eq 5 1) ;=> 0
 *   (eq [[1 5] [3 6]] 3) ;=> [[0 0] [1 0]]
 *   (eq [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[0 0] [0 1]]
 */
clojure.core.matrix.eq = (function clojure$core$matrix$eq(m,a){
return clojure.core.matrix.protocols.element_eq(m,a);
});
/**
 * Returns true if all corresponding array elements are equal (using the semantics of clojure.core/=).
 * 
 * WARNING: a java.lang.Long does not equal a java.lang.Double.
 * Use 'equals' or 'e==' instead if you want to test for numerical equality.
 */
clojure.core.matrix.e_EQ_ = (function clojure$core$matrix$e_EQ_(var_args){
var G__34761 = arguments.length;
switch (G__34761) {
case 1:
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35046 = arguments.length;
var i__5770__auto___35047 = (0);
while(true){
if((i__5770__auto___35047 < len__5769__auto___35046)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35047]));

var G__35048 = (i__5770__auto___35047 + (1));
i__5770__auto___35047 = G__35048;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$1 = (function (m1){
return true;
}));

(clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (m1,m2){
return clojure.core.matrix.protocols.value_equals(m1,m2);
}));

(clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (m1,m2,more){
var and__5043__auto__ = clojure.core.matrix.protocols.value_equals(m1,m2);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.e_EQ_,m2,more);
} else {
return and__5043__auto__;
}
}));

/** @this {Function} */
(clojure.core.matrix.e_EQ_.cljs$lang$applyTo = (function (seq34758){
var G__34759 = cljs.core.first(seq34758);
var seq34758__$1 = cljs.core.next(seq34758);
var G__34760 = cljs.core.first(seq34758__$1);
var seq34758__$2 = cljs.core.next(seq34758__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34759,G__34760,seq34758__$2);
}));

(clojure.core.matrix.e_EQ_.cljs$lang$maxFixedArity = (2));

/**
 * Returns true if all corresponding array elements are numerically equal.
 * 
 * Throws an error if any elements of the arrays being compared are not numerical values.
 */
clojure.core.matrix.e_EQ__EQ_ = (function clojure$core$matrix$e_EQ__EQ_(var_args){
var G__34766 = arguments.length;
switch (G__34766) {
case 1:
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35050 = arguments.length;
var i__5770__auto___35051 = (0);
while(true){
if((i__5770__auto___35051 < len__5769__auto___35050)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35051]));

var G__35052 = (i__5770__auto___35051 + (1));
i__5770__auto___35051 = G__35052;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (m1){
return true;
}));

(clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (m1,m2){
return clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$2(m1,m2);
}));

(clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (m1,m2,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.equals,clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$2(m1,m2),more);
}));

/** @this {Function} */
(clojure.core.matrix.e_EQ__EQ_.cljs$lang$applyTo = (function (seq34763){
var G__34764 = cljs.core.first(seq34763);
var seq34763__$1 = cljs.core.next(seq34763);
var G__34765 = cljs.core.first(seq34763__$1);
var seq34763__$2 = cljs.core.next(seq34763__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34764,G__34765,seq34763__$2);
}));

(clojure.core.matrix.e_EQ__EQ_.cljs$lang$maxFixedArity = (2));

/**
 * Returns a label for the specified position along a given array dimension. Returns nil if the dimension is unlabelled.
 */
clojure.core.matrix.label = (function clojure$core$matrix$label(m,dim,i){
return clojure.core.matrix.protocols.label(m,dim,i);
});
/**
 * Return a vector of labels for a given array dimension. Return nil if the dimension is unlabelled.
 */
clojure.core.matrix.labels = (function clojure$core$matrix$labels(m,dim){
return clojure.core.matrix.protocols.labels(m,dim);
});
/**
 * Return the index of a label along a given dimension. Returns nil if the label does not exist.
 */
clojure.core.matrix.label_index = (function clojure$core$matrix$label_index(m,dim,label){
var ls = clojure.core.matrix.protocols.labels(m,dim);
var and__5043__auto__ = ls;
if(cljs.core.truth_(and__5043__auto__)){
return clojure.core.matrix.utils.find_index(ls,label);
} else {
return and__5043__auto__;
}
});
/**
 * Performs element-wise multiplication with scalars and numerical arrays.
 * 
 * Examples: 
 *   (mul [1 2] [3 4]) ;=> [3 8]
 * 
 * Behaves like clojure.core/* for scalar values.
 */
clojure.core.matrix.mul = (function clojure$core$matrix$mul(var_args){
var G__34771 = arguments.length;
switch (G__34771) {
case 0:
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35054 = arguments.length;
var i__5770__auto___35055 = (0);
while(true){
if((i__5770__auto___35055 < len__5769__auto___35054)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35055]));

var G__35056 = (i__5770__auto___35055 + (1));
i__5770__auto___35055 = G__35056;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
}));

(clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.element_multiply(a,b);
}));

(clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.protocols.element_multiply,clojure.core.matrix.protocols.element_multiply(a,b),more);
}));

/** @this {Function} */
(clojure.core.matrix.mul.cljs$lang$applyTo = (function (seq34768){
var G__34769 = cljs.core.first(seq34768);
var seq34768__$1 = cljs.core.next(seq34768);
var G__34770 = cljs.core.first(seq34768__$1);
var seq34768__$2 = cljs.core.next(seq34768__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34769,G__34770,seq34768__$2);
}));

(clojure.core.matrix.mul.cljs$lang$maxFixedArity = (2));

/**
 * DEPRECATED: please use mul instead.
 */
clojure.core.matrix.emul = (function clojure$core$matrix$emul(var_args){
var G__34776 = arguments.length;
switch (G__34776) {
case 0:
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35058 = arguments.length;
var i__5770__auto___35059 = (0);
while(true){
if((i__5770__auto___35059 < len__5769__auto___35058)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35059]));

var G__35060 = (i__5770__auto___35059 + (1));
i__5770__auto___35059 = G__35060;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
}));

(clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.element_multiply(a,b);
}));

(clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.protocols.element_multiply,clojure.core.matrix.protocols.element_multiply(a,b),more);
}));

/** @this {Function} */
(clojure.core.matrix.emul.cljs$lang$applyTo = (function (seq34773){
var G__34774 = cljs.core.first(seq34773);
var seq34773__$1 = cljs.core.next(seq34773);
var G__34775 = cljs.core.first(seq34773__$1);
var seq34773__$2 = cljs.core.next(seq34773__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34774,G__34775,seq34773__$2);
}));

(clojure.core.matrix.emul.cljs$lang$maxFixedArity = (2));

/**
 * Performs matrix multiplication on matrices or vectors. 
 * 
 * Equivalent to inner-product, but may be more efficient for matrices.
 */
clojure.core.matrix.mmul = (function clojure$core$matrix$mmul(var_args){
var G__34781 = arguments.length;
switch (G__34781) {
case 0:
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35062 = arguments.length;
var i__5770__auto___35063 = (0);
while(true){
if((i__5770__auto___35063 < len__5769__auto___35062)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35063]));

var G__35064 = (i__5770__auto___35063 + (1));
i__5770__auto___35063 = G__35064;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
}));

(clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var or__5045__auto__ = clojure.core.matrix.protocols.matrix_multiply(a,b);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.protocols.inner_product(a,b);
}
}));

(clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.protocols.matrix_multiply,clojure.core.matrix.protocols.matrix_multiply(a,b),more);
}));

/** @this {Function} */
(clojure.core.matrix.mmul.cljs$lang$applyTo = (function (seq34778){
var G__34779 = cljs.core.first(seq34778);
var seq34778__$1 = cljs.core.next(seq34778);
var G__34780 = cljs.core.first(seq34778__$1);
var seq34778__$2 = cljs.core.next(seq34778__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34779,G__34780,seq34778__$2);
}));

(clojure.core.matrix.mmul.cljs$lang$maxFixedArity = (2));

/**
 * An element-wise multiply operator equivalent to `mul`.
 */
clojure.core.matrix.e_STAR_ = (function clojure$core$matrix$e_STAR_(var_args){
var G__34786 = arguments.length;
switch (G__34786) {
case 0:
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35066 = arguments.length;
var i__5770__auto___35067 = (0);
while(true){
if((i__5770__auto___35067 < len__5769__auto___35066)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35067]));

var G__35068 = (i__5770__auto___35067 + (1));
i__5770__auto___35067 = G__35068;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
}));

(clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.element_multiply(a,b);
}));

(clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.e_STAR_,clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$2(a,b),more);
}));

/** @this {Function} */
(clojure.core.matrix.e_STAR_.cljs$lang$applyTo = (function (seq34783){
var G__34784 = cljs.core.first(seq34783);
var seq34783__$1 = cljs.core.next(seq34783);
var G__34785 = cljs.core.first(seq34783__$1);
var seq34783__$2 = cljs.core.next(seq34783__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34784,G__34785,seq34783__$2);
}));

(clojure.core.matrix.e_STAR_.cljs$lang$maxFixedArity = (2));

/**
 * Performs element-wise division on numerical arrays.
 * 
 * Computes the reciprocal of each element when passed a single argument (similar to clojure.core//).
 */
clojure.core.matrix.div = (function clojure$core$matrix$div(var_args){
var G__34791 = arguments.length;
switch (G__34791) {
case 1:
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35070 = arguments.length;
var i__5770__auto___35071 = (0);
while(true){
if((i__5770__auto___35071 < len__5769__auto___35070)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35071]));

var G__35072 = (i__5770__auto___35071 + (1));
i__5770__auto___35071 = G__35072;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$1 = (function (a){
return clojure.core.matrix.protocols.element_divide(a);
}));

(clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.element_divide(a,b);
}));

(clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.protocols.element_divide,clojure.core.matrix.protocols.element_divide(a,b),more);
}));

/** @this {Function} */
(clojure.core.matrix.div.cljs$lang$applyTo = (function (seq34788){
var G__34789 = cljs.core.first(seq34788);
var seq34788__$1 = cljs.core.next(seq34788);
var G__34790 = cljs.core.first(seq34788__$1);
var seq34788__$2 = cljs.core.next(seq34788__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34789,G__34790,seq34788__$2);
}));

(clojure.core.matrix.div.cljs$lang$maxFixedArity = (2));

/**
 * Performs in-place element-wise matrix division for numerical arrays.
 * 
 * All arguments after the first must be broadcastable to the shape of the first array.
 * 
 * Computes the reciprocal of each element when passed a single argument (similar to clojure.core//).
 */
clojure.core.matrix.div_BANG_ = (function clojure$core$matrix$div_BANG_(var_args){
var G__34796 = arguments.length;
switch (G__34796) {
case 1:
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35074 = arguments.length;
var i__5770__auto___35075 = (0);
while(true){
if((i__5770__auto___35075 < len__5769__auto___35074)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35075]));

var G__35076 = (i__5770__auto___35075 + (1));
i__5770__auto___35075 = G__35076;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
clojure.core.matrix.protocols.element_divide_BANG_(a);

return a;
}));

(clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.element_divide_BANG_(a,b);

return a;
}));

(clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.element_divide_BANG_(a,b);

var seq__34797_35077 = cljs.core.seq(more);
var chunk__34798_35078 = null;
var count__34799_35079 = (0);
var i__34800_35080 = (0);
while(true){
if((i__34800_35080 < count__34799_35079)){
var c_35081 = chunk__34798_35078.cljs$core$IIndexed$_nth$arity$2(null,i__34800_35080);
clojure.core.matrix.protocols.element_divide_BANG_(a,c_35081);


var G__35082 = seq__34797_35077;
var G__35083 = chunk__34798_35078;
var G__35084 = count__34799_35079;
var G__35085 = (i__34800_35080 + (1));
seq__34797_35077 = G__35082;
chunk__34798_35078 = G__35083;
count__34799_35079 = G__35084;
i__34800_35080 = G__35085;
continue;
} else {
var temp__5804__auto___35086 = cljs.core.seq(seq__34797_35077);
if(temp__5804__auto___35086){
var seq__34797_35087__$1 = temp__5804__auto___35086;
if(cljs.core.chunked_seq_QMARK_(seq__34797_35087__$1)){
var c__5568__auto___35088 = cljs.core.chunk_first(seq__34797_35087__$1);
var G__35089 = cljs.core.chunk_rest(seq__34797_35087__$1);
var G__35090 = c__5568__auto___35088;
var G__35091 = cljs.core.count(c__5568__auto___35088);
var G__35092 = (0);
seq__34797_35077 = G__35089;
chunk__34798_35078 = G__35090;
count__34799_35079 = G__35091;
i__34800_35080 = G__35092;
continue;
} else {
var c_35093 = cljs.core.first(seq__34797_35087__$1);
clojure.core.matrix.protocols.element_divide_BANG_(a,c_35093);


var G__35094 = cljs.core.next(seq__34797_35087__$1);
var G__35095 = null;
var G__35096 = (0);
var G__35097 = (0);
seq__34797_35077 = G__35094;
chunk__34798_35078 = G__35095;
count__34799_35079 = G__35096;
i__34800_35080 = G__35097;
continue;
}
} else {
}
}
break;
}

return a;
}));

/** @this {Function} */
(clojure.core.matrix.div_BANG_.cljs$lang$applyTo = (function (seq34793){
var G__34794 = cljs.core.first(seq34793);
var seq34793__$1 = cljs.core.next(seq34793);
var G__34795 = cljs.core.first(seq34793__$1);
var seq34793__$2 = cljs.core.next(seq34793__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34794,G__34795,seq34793__$2);
}));

(clojure.core.matrix.div_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Performs in-place element-wise multiplication of numerical arrays.
 * 
 * All arguments after the first must be broadcastable to the shape of the first array.
 * 
 * Returns the first argument after mutation.
 */
clojure.core.matrix.mul_BANG_ = (function clojure$core$matrix$mul_BANG_(var_args){
var G__34805 = arguments.length;
switch (G__34805) {
case 1:
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35099 = arguments.length;
var i__5770__auto___35100 = (0);
while(true){
if((i__5770__auto___35100 < len__5769__auto___35099)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35100]));

var G__35101 = (i__5770__auto___35100 + (1));
i__5770__auto___35100 = G__35101;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.element_multiply_BANG_(a,b);

return a;
}));

(clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.element_multiply_BANG_(a,b);

var seq__34806_35102 = cljs.core.seq(more);
var chunk__34807_35103 = null;
var count__34808_35104 = (0);
var i__34809_35105 = (0);
while(true){
if((i__34809_35105 < count__34808_35104)){
var c_35106 = chunk__34807_35103.cljs$core$IIndexed$_nth$arity$2(null,i__34809_35105);
clojure.core.matrix.protocols.element_multiply_BANG_(a,c_35106);


var G__35107 = seq__34806_35102;
var G__35108 = chunk__34807_35103;
var G__35109 = count__34808_35104;
var G__35110 = (i__34809_35105 + (1));
seq__34806_35102 = G__35107;
chunk__34807_35103 = G__35108;
count__34808_35104 = G__35109;
i__34809_35105 = G__35110;
continue;
} else {
var temp__5804__auto___35111 = cljs.core.seq(seq__34806_35102);
if(temp__5804__auto___35111){
var seq__34806_35112__$1 = temp__5804__auto___35111;
if(cljs.core.chunked_seq_QMARK_(seq__34806_35112__$1)){
var c__5568__auto___35113 = cljs.core.chunk_first(seq__34806_35112__$1);
var G__35114 = cljs.core.chunk_rest(seq__34806_35112__$1);
var G__35115 = c__5568__auto___35113;
var G__35116 = cljs.core.count(c__5568__auto___35113);
var G__35117 = (0);
seq__34806_35102 = G__35114;
chunk__34807_35103 = G__35115;
count__34808_35104 = G__35116;
i__34809_35105 = G__35117;
continue;
} else {
var c_35118 = cljs.core.first(seq__34806_35112__$1);
clojure.core.matrix.protocols.element_multiply_BANG_(a,c_35118);


var G__35119 = cljs.core.next(seq__34806_35112__$1);
var G__35120 = null;
var G__35121 = (0);
var G__35122 = (0);
seq__34806_35102 = G__35119;
chunk__34807_35103 = G__35120;
count__34808_35104 = G__35121;
i__34809_35105 = G__35122;
continue;
}
} else {
}
}
break;
}

return a;
}));

/** @this {Function} */
(clojure.core.matrix.mul_BANG_.cljs$lang$applyTo = (function (seq34802){
var G__34803 = cljs.core.first(seq34802);
var seq34802__$1 = cljs.core.next(seq34802);
var G__34804 = cljs.core.first(seq34802__$1);
var seq34802__$2 = cljs.core.next(seq34802__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34803,G__34804,seq34802__$2);
}));

(clojure.core.matrix.mul_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Performs in-place element-wise multiplication of numerical arrays.
 * 
 * Returns the first argument after mutation.
 */
clojure.core.matrix.emul_BANG_ = (function clojure$core$matrix$emul_BANG_(var_args){
var G__34814 = arguments.length;
switch (G__34814) {
case 1:
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35124 = arguments.length;
var i__5770__auto___35125 = (0);
while(true){
if((i__5770__auto___35125 < len__5769__auto___35124)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35125]));

var G__35126 = (i__5770__auto___35125 + (1));
i__5770__auto___35125 = G__35126;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.element_multiply_BANG_(a,b);

return a;
}));

(clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.element_multiply_BANG_(a,b);

var seq__34815_35127 = cljs.core.seq(more);
var chunk__34816_35128 = null;
var count__34817_35129 = (0);
var i__34818_35130 = (0);
while(true){
if((i__34818_35130 < count__34817_35129)){
var c_35131 = chunk__34816_35128.cljs$core$IIndexed$_nth$arity$2(null,i__34818_35130);
clojure.core.matrix.protocols.element_multiply_BANG_(a,c_35131);


var G__35132 = seq__34815_35127;
var G__35133 = chunk__34816_35128;
var G__35134 = count__34817_35129;
var G__35135 = (i__34818_35130 + (1));
seq__34815_35127 = G__35132;
chunk__34816_35128 = G__35133;
count__34817_35129 = G__35134;
i__34818_35130 = G__35135;
continue;
} else {
var temp__5804__auto___35136 = cljs.core.seq(seq__34815_35127);
if(temp__5804__auto___35136){
var seq__34815_35137__$1 = temp__5804__auto___35136;
if(cljs.core.chunked_seq_QMARK_(seq__34815_35137__$1)){
var c__5568__auto___35138 = cljs.core.chunk_first(seq__34815_35137__$1);
var G__35139 = cljs.core.chunk_rest(seq__34815_35137__$1);
var G__35140 = c__5568__auto___35138;
var G__35141 = cljs.core.count(c__5568__auto___35138);
var G__35142 = (0);
seq__34815_35127 = G__35139;
chunk__34816_35128 = G__35140;
count__34817_35129 = G__35141;
i__34818_35130 = G__35142;
continue;
} else {
var c_35143 = cljs.core.first(seq__34815_35137__$1);
clojure.core.matrix.protocols.element_multiply_BANG_(a,c_35143);


var G__35144 = cljs.core.next(seq__34815_35137__$1);
var G__35145 = null;
var G__35146 = (0);
var G__35147 = (0);
seq__34815_35127 = G__35144;
chunk__34816_35128 = G__35145;
count__34817_35129 = G__35146;
i__34818_35130 = G__35147;
continue;
}
} else {
}
}
break;
}

return a;
}));

/** @this {Function} */
(clojure.core.matrix.emul_BANG_.cljs$lang$applyTo = (function (seq34811){
var G__34812 = cljs.core.first(seq34811);
var seq34811__$1 = cljs.core.next(seq34811);
var G__34813 = cljs.core.first(seq34811__$1);
var seq34811__$2 = cljs.core.next(seq34811__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34812,G__34813,seq34811__$2);
}));

(clojure.core.matrix.emul_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Transforms a given vector with a transformation, returning a new vector.
 * 
 * The transformation may be a 2D matrix, but other types of transformation may also be supported
 * e.g. affine transformations, unary operators.
 */
clojure.core.matrix.transform = (function clojure$core$matrix$transform(t,v){
return clojure.core.matrix.protocols.vector_transform(t,v);
});
/**
 * Transforms a given vector in place. This is a mutable equivalent to `transform`.
 * 
 * Returns the transformed vector.
 * 
 * The transformation must map an n-dimensional vector to another n-dimensional vector, i.e.
 * if it is a 2D matrix then it must have shape [n x n].
 */
clojure.core.matrix.transform_BANG_ = (function clojure$core$matrix$transform_BANG_(t,v){
clojure.core.matrix.protocols.vector_transform_BANG_(t,v);

return v;
});
/**
 * Performs element-wise addition on one or more numerical arrays.
 * 
 * Will broadcast to the smallest shape compatible will addition of all input arrays.
 */
clojure.core.matrix.add = (function clojure$core$matrix$add(var_args){
var G__34823 = arguments.length;
switch (G__34823) {
case 0:
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35149 = arguments.length;
var i__5770__auto___35150 = (0);
while(true){
if((i__5770__auto___35150 < len__5769__auto___35149)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35150]));

var G__35151 = (i__5770__auto___35150 + (1));
i__5770__auto___35150 = G__35151;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$0 = (function (){
return 0.0;
}));

(clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.matrix_add(a,b);
}));

(clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.protocols.matrix_add,clojure.core.matrix.protocols.matrix_add(a,b),more);
}));

/** @this {Function} */
(clojure.core.matrix.add.cljs$lang$applyTo = (function (seq34820){
var G__34821 = cljs.core.first(seq34820);
var seq34820__$1 = cljs.core.next(seq34820);
var G__34822 = cljs.core.first(seq34820__$1);
var seq34820__$2 = cljs.core.next(seq34820__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34821,G__34822,seq34820__$2);
}));

(clojure.core.matrix.add.cljs$lang$maxFixedArity = (2));

/**
 * Performs element-wise mutable addition on one or more numerical arrays. This is the mutable
 * equivalent of `add`.
 * 
 * All arguments after the first must be broadcastable to the shape of the first array.
 * 
 * When adding many arrays, use of `add!` with a mutable array as the first argument is
 * usually faster than repreated use of `add` because it can avoid unnecessary copying.
 * 
 * Returns the first array after it has been mutated.
 */
clojure.core.matrix.add_BANG_ = (function clojure$core$matrix$add_BANG_(var_args){
var G__34828 = arguments.length;
switch (G__34828) {
case 1:
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35153 = arguments.length;
var i__5770__auto___35154 = (0);
while(true){
if((i__5770__auto___35154 < len__5769__auto___35153)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35154]));

var G__35155 = (i__5770__auto___35154 + (1));
i__5770__auto___35154 = G__35155;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.matrix_add_BANG_(a,b);

return a;
}));

(clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.matrix_add_BANG_(a,b);

var seq__34829_35156 = cljs.core.seq(more);
var chunk__34830_35157 = null;
var count__34831_35158 = (0);
var i__34832_35159 = (0);
while(true){
if((i__34832_35159 < count__34831_35158)){
var m_35160 = chunk__34830_35157.cljs$core$IIndexed$_nth$arity$2(null,i__34832_35159);
clojure.core.matrix.protocols.matrix_add_BANG_(a,m_35160);


var G__35161 = seq__34829_35156;
var G__35162 = chunk__34830_35157;
var G__35163 = count__34831_35158;
var G__35164 = (i__34832_35159 + (1));
seq__34829_35156 = G__35161;
chunk__34830_35157 = G__35162;
count__34831_35158 = G__35163;
i__34832_35159 = G__35164;
continue;
} else {
var temp__5804__auto___35165 = cljs.core.seq(seq__34829_35156);
if(temp__5804__auto___35165){
var seq__34829_35166__$1 = temp__5804__auto___35165;
if(cljs.core.chunked_seq_QMARK_(seq__34829_35166__$1)){
var c__5568__auto___35167 = cljs.core.chunk_first(seq__34829_35166__$1);
var G__35168 = cljs.core.chunk_rest(seq__34829_35166__$1);
var G__35169 = c__5568__auto___35167;
var G__35170 = cljs.core.count(c__5568__auto___35167);
var G__35171 = (0);
seq__34829_35156 = G__35168;
chunk__34830_35157 = G__35169;
count__34831_35158 = G__35170;
i__34832_35159 = G__35171;
continue;
} else {
var m_35172 = cljs.core.first(seq__34829_35166__$1);
clojure.core.matrix.protocols.matrix_add_BANG_(a,m_35172);


var G__35173 = cljs.core.next(seq__34829_35166__$1);
var G__35174 = null;
var G__35175 = (0);
var G__35176 = (0);
seq__34829_35156 = G__35173;
chunk__34830_35157 = G__35174;
count__34831_35158 = G__35175;
i__34832_35159 = G__35176;
continue;
}
} else {
}
}
break;
}

return a;
}));

/** @this {Function} */
(clojure.core.matrix.add_BANG_.cljs$lang$applyTo = (function (seq34825){
var G__34826 = cljs.core.first(seq34825);
var seq34825__$1 = cljs.core.next(seq34825);
var G__34827 = cljs.core.first(seq34825__$1);
var seq34825__$2 = cljs.core.next(seq34825__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34826,G__34827,seq34825__$2);
}));

(clojure.core.matrix.add_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Adds the element-wise product of two numerical arrays to the first array.
 * 
 * Arrays should be the same shape, some implementations may support broadcasting.
 */
clojure.core.matrix.add_product = (function clojure$core$matrix$add_product(m,a,b){
return clojure.core.matrix.protocols.add_product(m,a,b);
});
/**
 * Adds the product of two numerical arrays to the first array. Returns the mutated array.
 * 
 * Arrays should be the same shape, some implementations may support broadcasting.
 */
clojure.core.matrix.add_product_BANG_ = (function clojure$core$matrix$add_product_BANG_(m,a,b){
clojure.core.matrix.protocols.add_product_BANG_(m,a,b);

return m;
});
/**
 * Adds a numerical array scaled by a given factor to the first array. 
 * 
 * Factor should be a scalar numerical value.
 */
clojure.core.matrix.add_scaled = (function clojure$core$matrix$add_scaled(m,a,factor){
return clojure.core.matrix.protocols.add_scaled(m,a,factor);
});
/**
 * Scales array m1 by factor a, then adds an array m2 scaled by factor b. May optionally add a constant.
 * Broadly equivalent to (add (mul m1 a) (mul m2 b) constant)
 * 
 * Returns a new array.
 */
clojure.core.matrix.scale_add = (function clojure$core$matrix$scale_add(var_args){
var G__34834 = arguments.length;
switch (G__34834) {
case 4:
return clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$4 = (function (m1,a,m2,b){
return clojure.core.matrix.protocols.scale_add(m1,a,m2,b,0.0);
}));

(clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$5 = (function (m1,a,m2,b,constant){
return clojure.core.matrix.protocols.scale_add(m1,a,m2,b,constant);
}));

(clojure.core.matrix.scale_add.cljs$lang$maxFixedArity = 5);

/**
 * Scales array m1 by factor a, then adds an array m2 scaled by factor b. May optionally add a constant.
 * Broadly equivalent to (add! (mul! m1 a) (mul m2 b) constant)
 * 
 * Returns the mutated array `m1`. The array `m2` will not be changed.
 */
clojure.core.matrix.scale_add_BANG_ = (function clojure$core$matrix$scale_add_BANG_(var_args){
var G__34836 = arguments.length;
switch (G__34836) {
case 4:
return clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m1,a,m2,b){
return clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$5(m1,a,m2,b,0.0);
}));

(clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (m1,a,m2,b,constant){
clojure.core.matrix.protocols.scale_add_BANG_(m1,a,m2,b,constant);

return m1;
}));

(clojure.core.matrix.scale_add_BANG_.cljs$lang$maxFixedArity = 5);

/**
 * Performs linear interpolation between two arrays. If factor is 0.0, result will be equal to the first vector.
 * If factor is 1.0, result will be equal to the second vector. Returns a new array.
 */
clojure.core.matrix.lerp = (function clojure$core$matrix$lerp(a,b,factor){
return clojure.core.matrix.protocols.lerp(a,b,factor);
});
/**
 * Performs linear interpolation between two arrays. If factor is 0.0, result will be equal to the first vector.
 * If factor is 1.0, result will be equal to the second vector. Returns a the mutated first array.
 */
clojure.core.matrix.lerp_BANG_ = (function clojure$core$matrix$lerp_BANG_(a,b,factor){
clojure.core.matrix.protocols.lerp_BANG_(a,b,factor);

return a;
});
/**
 * Adds a numerical array scaled by a given factor to the first array. Returns the mutated array.
 */
clojure.core.matrix.add_scaled_BANG_ = (function clojure$core$matrix$add_scaled_BANG_(m,a,factor){
clojure.core.matrix.protocols.add_scaled_BANG_(m,a,factor);

return m;
});
/**
 * Adds the product of two numerical arrays scaled by a given factor to the first array.
 * 
 * This is equivalent to (add m (mul a b factor)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.add_scaled_product = (function clojure$core$matrix$add_scaled_product(m,a,b,factor){
return clojure.core.matrix.protocols.add_scaled_product(m,a,b,factor);
});
/**
 * Adds the product of two numerical arrays scaled by a given factor to the first array.
 * Returns the mutated array.
 * This is equivalent to (add! m (mul a b factor)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.add_scaled_product_BANG_ = (function clojure$core$matrix$add_scaled_product_BANG_(m,a,b,factor){
clojure.core.matrix.protocols.add_scaled_product_BANG_(m,a,b,factor);

return m;
});
/**
 * Adds the inner product of two numerical arrays to the first array.
 * Returns the mutated array.
 * This is equivalent to (add! m (inner-product a b)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.add_inner_product_BANG_ = (function clojure$core$matrix$add_inner_product_BANG_(var_args){
var G__34838 = arguments.length;
switch (G__34838) {
case 3:
return clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,a,b){
clojure.core.matrix.protocols.add_inner_product_BANG_(m,a,b);

return m;
}));

(clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.add_inner_product_BANG_(m,a,b,factor);

return m;
}));

(clojure.core.matrix.add_inner_product_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Adds the inner product of two numerical arrays to the first array.
 * 
 * Returns the mutated array.
 * 
 * This is equivalent to (add! m (outer-product a b)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.add_outer_product_BANG_ = (function clojure$core$matrix$add_outer_product_BANG_(var_args){
var G__34840 = arguments.length;
switch (G__34840) {
case 3:
return clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,a,b){
clojure.core.matrix.protocols.add_outer_product_BANG_(m,a,b);

return m;
}));

(clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.add_outer_product_BANG_(m,a,b,factor);

return m;
}));

(clojure.core.matrix.add_outer_product_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Sets an array equal to the inner product of two numerical arrays.
 * Returns the mutated first array.
 * This is equivalent to (assign! m (inner-product a b)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.set_inner_product_BANG_ = (function clojure$core$matrix$set_inner_product_BANG_(var_args){
var G__34842 = arguments.length;
switch (G__34842) {
case 3:
return clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,a,b){
clojure.core.matrix.protocols.set_inner_product_BANG_(m,a,b);

return m;
}));

(clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.set_inner_product_BANG_(m,a,b,factor);

return m;
}));

(clojure.core.matrix.set_inner_product_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Performs element-wise subtraction on one or more numerical arrays.
 * 
 * For a single argument, returns the negation.
 * 
 * Returns a new array.
 */
clojure.core.matrix.sub = (function clojure$core$matrix$sub(var_args){
var G__34847 = arguments.length;
switch (G__34847) {
case 1:
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35183 = arguments.length;
var i__5770__auto___35184 = (0);
while(true){
if((i__5770__auto___35184 < len__5769__auto___35183)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35184]));

var G__35185 = (i__5770__auto___35184 + (1));
i__5770__auto___35184 = G__35185;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$1 = (function (a){
return clojure.core.matrix.protocols.negate(a);
}));

(clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.matrix_sub(a,b);
}));

(clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.protocols.matrix_sub,clojure.core.matrix.protocols.matrix_sub(a,b),more);
}));

/** @this {Function} */
(clojure.core.matrix.sub.cljs$lang$applyTo = (function (seq34844){
var G__34845 = cljs.core.first(seq34844);
var seq34844__$1 = cljs.core.next(seq34844);
var G__34846 = cljs.core.first(seq34844__$1);
var seq34844__$2 = cljs.core.next(seq34844__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34845,G__34846,seq34844__$2);
}));

(clojure.core.matrix.sub.cljs$lang$maxFixedArity = (2));

/**
 * Performs element-wise mutable subtraction on one or more numerical arrays.
 * 
 * NOTE: For a single argument, returns the argument unchanged: use negate! instead if you wish to negate a mutable
 * array in place. This is intentional, so that you can do (apply sub! m list-of-arrays) and get the expected
 * result if the list of arrays is empty.
 * 
 * Returns the first array, after it has been mutated.
 */
clojure.core.matrix.sub_BANG_ = (function clojure$core$matrix$sub_BANG_(var_args){
var G__34852 = arguments.length;
switch (G__34852) {
case 1:
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35187 = arguments.length;
var i__5770__auto___35188 = (0);
while(true){
if((i__5770__auto___35188 < len__5769__auto___35187)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35188]));

var G__35189 = (i__5770__auto___35188 + (1));
i__5770__auto___35188 = G__35189;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.matrix_sub_BANG_(a,b);

return a;
}));

(clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.matrix_sub_BANG_(a,b);

var seq__34853_35190 = cljs.core.seq(more);
var chunk__34854_35191 = null;
var count__34855_35192 = (0);
var i__34856_35193 = (0);
while(true){
if((i__34856_35193 < count__34855_35192)){
var m_35194 = chunk__34854_35191.cljs$core$IIndexed$_nth$arity$2(null,i__34856_35193);
clojure.core.matrix.protocols.matrix_sub_BANG_(a,m_35194);


var G__35195 = seq__34853_35190;
var G__35196 = chunk__34854_35191;
var G__35197 = count__34855_35192;
var G__35198 = (i__34856_35193 + (1));
seq__34853_35190 = G__35195;
chunk__34854_35191 = G__35196;
count__34855_35192 = G__35197;
i__34856_35193 = G__35198;
continue;
} else {
var temp__5804__auto___35199 = cljs.core.seq(seq__34853_35190);
if(temp__5804__auto___35199){
var seq__34853_35200__$1 = temp__5804__auto___35199;
if(cljs.core.chunked_seq_QMARK_(seq__34853_35200__$1)){
var c__5568__auto___35201 = cljs.core.chunk_first(seq__34853_35200__$1);
var G__35202 = cljs.core.chunk_rest(seq__34853_35200__$1);
var G__35203 = c__5568__auto___35201;
var G__35204 = cljs.core.count(c__5568__auto___35201);
var G__35205 = (0);
seq__34853_35190 = G__35202;
chunk__34854_35191 = G__35203;
count__34855_35192 = G__35204;
i__34856_35193 = G__35205;
continue;
} else {
var m_35206 = cljs.core.first(seq__34853_35200__$1);
clojure.core.matrix.protocols.matrix_sub_BANG_(a,m_35206);


var G__35207 = cljs.core.next(seq__34853_35200__$1);
var G__35208 = null;
var G__35209 = (0);
var G__35210 = (0);
seq__34853_35190 = G__35207;
chunk__34854_35191 = G__35208;
count__34855_35192 = G__35209;
i__34856_35193 = G__35210;
continue;
}
} else {
}
}
break;
}

return a;
}));

/** @this {Function} */
(clojure.core.matrix.sub_BANG_.cljs$lang$applyTo = (function (seq34849){
var G__34850 = cljs.core.first(seq34849);
var seq34849__$1 = cljs.core.next(seq34849);
var G__34851 = cljs.core.first(seq34849__$1);
var seq34849__$2 = cljs.core.next(seq34849__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34850,G__34851,seq34849__$2);
}));

(clojure.core.matrix.sub_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Scales a array by one or more scalar factors. The default implementation supports numerical arrays and
 * numbers as scalar values, however matrix implementations may extend this to support other scalar types.
 * 
 * Returns a new scaled matrix.
 */
clojure.core.matrix.scale = (function clojure$core$matrix$scale(var_args){
var G__34861 = arguments.length;
switch (G__34861) {
case 2:
return clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35212 = arguments.length;
var i__5770__auto___35213 = (0);
while(true){
if((i__5770__auto___35213 < len__5769__auto___35212)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35213]));

var G__35214 = (i__5770__auto___35213 + (1));
i__5770__auto___35213 = G__35214;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$2 = (function (m,factor){
return clojure.core.matrix.protocols.scale(m,factor);
}));

(clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$variadic = (function (m,factor,more_factors){
return clojure.core.matrix.protocols.scale(m,clojure.core.matrix.protocols.element_multiply(factor,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_multiply,more_factors)));
}));

/** @this {Function} */
(clojure.core.matrix.scale.cljs$lang$applyTo = (function (seq34858){
var G__34859 = cljs.core.first(seq34858);
var seq34858__$1 = cljs.core.next(seq34858);
var G__34860 = cljs.core.first(seq34858__$1);
var seq34858__$2 = cljs.core.next(seq34858__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34859,G__34860,seq34858__$2);
}));

(clojure.core.matrix.scale.cljs$lang$maxFixedArity = (2));

/**
 * Scales a numerical array by one or more scalar factors (in place). The default implementation supports
 * numerical arrays and numbers as scalar values, however matrix implementations may extend this to
 * support other scalar types (e.g. complex numbers).
 * 
 * Returns the array after it has been mutated.
 */
clojure.core.matrix.scale_BANG_ = (function clojure$core$matrix$scale_BANG_(var_args){
var G__34866 = arguments.length;
switch (G__34866) {
case 2:
return clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35216 = arguments.length;
var i__5770__auto___35217 = (0);
while(true){
if((i__5770__auto___35217 < len__5769__auto___35216)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35217]));

var G__35218 = (i__5770__auto___35217 + (1));
i__5770__auto___35217 = G__35218;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (m,factor){
clojure.core.matrix.protocols.scale_BANG_(m,factor);

return m;
}));

(clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (m,factor,more_factors){
clojure.core.matrix.protocols.scale_BANG_(m,clojure.core.matrix.protocols.element_multiply(factor,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_multiply,more_factors)));

return m;
}));

/** @this {Function} */
(clojure.core.matrix.scale_BANG_.cljs$lang$applyTo = (function (seq34863){
var G__34864 = cljs.core.first(seq34863);
var seq34863__$1 = cljs.core.next(seq34863);
var G__34865 = cljs.core.first(seq34863__$1);
var seq34863__$2 = cljs.core.next(seq34863__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34864,G__34865,seq34863__$2);
}));

(clojure.core.matrix.scale_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Squares every element of a numerical array. Returns a new array.
 */
clojure.core.matrix.square = (function clojure$core$matrix$square(m){
return clojure.core.matrix.protocols.square(m);
});
/**
 * Normalises a numerical vector (scales to unit length, i.e. the L2 norm). 
 * 
 * Returns a new normalised vector.
 * 
 * The result is undefined if the initial length of the vector is zero (it is possible the
 * implementation may return NaNs or zeros). If this is a concern, it is recommended to check
 * the length of the vector first in order to handle this as a special case.
 */
clojure.core.matrix.normalise = (function clojure$core$matrix$normalise(v){
return clojure.core.matrix.protocols.normalise(v);
});
/**
 * Like 'normalise', but mutates a numerical vector in-place (scales to unit length).
 * Returns the modified vector.
 */
clojure.core.matrix.normalise_BANG_ = (function clojure$core$matrix$normalise_BANG_(v){
clojure.core.matrix.protocols.normalise_BANG_(v);

return v;
});
/**
 * Efficiently computes the scalar dot product (1Dx1D inner product) of two numerical vectors. Prefer this API
 * function if you are performing a dot product on 1D vectors and require a scalar result.
 * 
 * If either argument is not a vector, will compute and return a higher dimensional inner-product.
 */
clojure.core.matrix.dot = (function clojure$core$matrix$dot(a,b){
var or__5045__auto__ = clojure.core.matrix.protocols.vector_dot(a,b);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var v = clojure.core.matrix.protocols.inner_product(a,b);
if(typeof v === 'number'){
return v;
} else {
if(((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(v)))){
return clojure.core.matrix.protocols.get_0d(v);
} else {
return v;

}
}
}
});
/**
 * Computes the inner product of numerical arrays.
 * 
 * For matrix/matrix and matrix/vector arguments, this is equivalent to matrix multiplication.
 * 
 * The inner product of two arrays with indexed dimensions {..i j} and {j k..} has dimensions {..i k..}. The inner-product of two vectors will be scalar.
 */
clojure.core.matrix.inner_product = (function clojure$core$matrix$inner_product(var_args){
var G__34871 = arguments.length;
switch (G__34871) {
case 0:
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35220 = arguments.length;
var i__5770__auto___35221 = (0);
while(true){
if((i__5770__auto___35221 < len__5769__auto___35220)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35221]));

var G__35222 = (i__5770__auto___35221 + (1));
i__5770__auto___35221 = G__35222;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
}));

(clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.inner_product(a,b);
}));

(clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.protocols.inner_product,clojure.core.matrix.protocols.inner_product(a,b),more);
}));

/** @this {Function} */
(clojure.core.matrix.inner_product.cljs$lang$applyTo = (function (seq34868){
var G__34869 = cljs.core.first(seq34868);
var seq34868__$1 = cljs.core.next(seq34868);
var G__34870 = cljs.core.first(seq34868__$1);
var seq34868__$2 = cljs.core.next(seq34868__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34869,G__34870,seq34868__$2);
}));

(clojure.core.matrix.inner_product.cljs$lang$maxFixedArity = (2));

/**
 * Computes the outer product of numerical arrays.
 * 
 * For two vectors of size m and n, the result will be a m x n matrix.
 * 
 * In general, the outer product fior higher diemnsional arrays is defined as the 
 * tensor product (see https://en.wikipedia.org/wiki/Tensor_product)
 * i.e. The outer product of two arrays with indexed dimensions {i..j} and {k..l} 
 * has dimensions {i..j k..l}. The dimensionality of the result will be the
 * sum of the dimensionalities of the two arguments.
 */
clojure.core.matrix.outer_product = (function clojure$core$matrix$outer_product(var_args){
var G__34876 = arguments.length;
switch (G__34876) {
case 0:
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35224 = arguments.length;
var i__5770__auto___35225 = (0);
while(true){
if((i__5770__auto___35225 < len__5769__auto___35224)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35225]));

var G__35226 = (i__5770__auto___35225 + (1));
i__5770__auto___35225 = G__35226;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
}));

(clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var or__5045__auto__ = clojure.core.matrix.protocols.outer_product(a,b);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.protocols.outer_product(clojure.core.matrix.protocols.convert_to_nested_vectors(a),b);
}
}));

(clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.outer_product,clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$2(a,b),more);
}));

/** @this {Function} */
(clojure.core.matrix.outer_product.cljs$lang$applyTo = (function (seq34873){
var G__34874 = cljs.core.first(seq34873);
var seq34873__$1 = cljs.core.next(seq34873);
var G__34875 = cljs.core.first(seq34873__$1);
var seq34873__$2 = cljs.core.next(seq34873__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34874,G__34875,seq34873__$2);
}));

(clojure.core.matrix.outer_product.cljs$lang$maxFixedArity = (2));

/**
 * Computes the 3D cross-product of two numerical vectors.
 * 
 * Behavior on other types is undefined.
 */
clojure.core.matrix.cross = (function clojure$core$matrix$cross(a,b){
return clojure.core.matrix.protocols.cross_product(a,b);
});
/**
 * Computes the cross-product of two numerical 3D vectors a and b, storing the result in the first vector.
 * 
 * Returns the (mutated) first vector.
 */
clojure.core.matrix.cross_BANG_ = (function clojure$core$matrix$cross_BANG_(var_args){
var G__34878 = arguments.length;
switch (G__34878) {
case 2:
return clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.cross_product_BANG_(a,b);

return a;
}));

(clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dest,a,b){
clojure.core.matrix.protocols.assign_BANG_(dest,a);

return clojure.core.matrix.protocols.cross_product_BANG_(dest,b);
}));

(clojure.core.matrix.cross_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Calculates the euclidean distance between two numerical vectors, as a single numerical scalar value.
 * 
 * This is equivalent to (norm 2 (sub a b)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.distance = (function clojure$core$matrix$distance(a,b){
return clojure.core.matrix.protocols.distance(a,b);
});
/**
 * Calculates the determinant of a 2D square numerical matrix, as a single numerical scalar value.
 */
clojure.core.matrix.det = (function clojure$core$matrix$det(a){
var or__5045__auto__ = clojure.core.matrix.protocols.determinant(a);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.protocols.determinant(clojure.core.matrix.protocols.coerce_param(clojure.core.matrix.implementations._STAR_numeric_implementation_STAR_,a));
}
});
/**
 * Calculates the inverse of a square 2D numerical matrix.
 * 
 * Returns nil if the matrix is singular. 
 * 
 * Throws an error is the argument is not a sqaure 2D matrix.
 */
clojure.core.matrix.inverse = (function clojure$core$matrix$inverse(m){
return clojure.core.matrix.protocols.inverse(m);
});
/**
 * Calculates the negation of a numerical array. Generally equivalent to (scale m -1.0)
 */
clojure.core.matrix.negate = (function clojure$core$matrix$negate(m){
return clojure.core.matrix.protocols.negate(m);
});
/**
 * Calculates the negation of a numerical array in place. Generally equivalent to (scale! m -1.0)
 */
clojure.core.matrix.negate_BANG_ = (function clojure$core$matrix$negate_BANG_(m){
clojure.core.matrix.protocols.scale_BANG_(m,-1.0);

return m;
});
/**
 * Calculates the trace of a 2D numerical matrix (sum of elements on main diagonal).
 * 
 * The matrix need not be square.
 */
clojure.core.matrix.trace = (function clojure$core$matrix$trace(a){
return clojure.core.matrix.protocols.trace(a);
});
/**
 * Calculates the magnitude over all elements in an array.
 * 
 * This is the 2-norm: equivalent to the Frobenius norm on matrices, or the Euclidean length on vectors.
 */
clojure.core.matrix.magnitude = (function clojure$core$matrix$magnitude(m){
return clojure.core.matrix.protocols.length(m);
});
/**
 * Calculates the squared magnitude over all elements in an array.
 * 
 * This may be more efficient that computing the magnitude in some implementations.
 */
clojure.core.matrix.magnitude_squared = (function clojure$core$matrix$magnitude_squared(m){
return clojure.core.matrix.protocols.length_squared(m);
});
/**
 * DEPRECATED: please use magnitude instead.
 */
clojure.core.matrix.length = (function clojure$core$matrix$length(m){
return clojure.core.matrix.protocols.length(m);
});
/**
 * DEPRECATED: please use magnitude-squared instead.
 */
clojure.core.matrix.length_squared = (function clojure$core$matrix$length_squared(m){
return clojure.core.matrix.protocols.length_squared(m);
});
/**
 * Raises every element of a numerical matrix by the given exponent.
 * 
 * Note that behaviour for large exponents may depend on the underlying implementation:
 * for example double-based matrices may overflow to Double/POSITIVE_INFINITY.
 */
clojure.core.matrix.pow = (function clojure$core$matrix$pow(var_args){
var G__34883 = arguments.length;
switch (G__34883) {
case 1:
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35229 = arguments.length;
var i__5770__auto___35230 = (0);
while(true){
if((i__5770__auto___35230 < len__5769__auto___35229)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35230]));

var G__35231 = (i__5770__auto___35230 + (1));
i__5770__auto___35230 = G__35231;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$1 = (function (m){
return m;
}));

(clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$2 = (function (m,exponent){
return clojure.core.matrix.protocols.element_pow(m,exponent);
}));

(clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$variadic = (function (m,exponent,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,x){
return clojure.core.matrix.protocols.element_pow(m__$1,x);
}),clojure.core.matrix.protocols.element_pow(m,exponent),more);
}));

/** @this {Function} */
(clojure.core.matrix.pow.cljs$lang$applyTo = (function (seq34880){
var G__34881 = cljs.core.first(seq34880);
var seq34880__$1 = cljs.core.next(seq34880);
var G__34882 = cljs.core.first(seq34880__$1);
var seq34880__$2 = cljs.core.next(seq34880__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34881,G__34882,seq34880__$2);
}));

(clojure.core.matrix.pow.cljs$lang$maxFixedArity = (2));

/**
 * Mutable exponent function, see 'pow'
 */
clojure.core.matrix.pow_BANG_ = (function clojure$core$matrix$pow_BANG_(m,a){
clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$2(m,a));

return m;
});
/**
 * Computes the abs function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.abs = (function clojure$core$matrix$abs(m){
return clojure.core.matrix.protocols.abs(m);
});

/**
 * Computes the abs function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.abs_BANG_ = (function clojure$core$matrix$abs_BANG_(m){
clojure.core.matrix.protocols.abs_BANG_(m);

return m;
});

/**
 * Computes the acos function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.acos = (function clojure$core$matrix$acos(m){
return clojure.core.matrix.protocols.acos(m);
});

/**
 * Computes the acos function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.acos_BANG_ = (function clojure$core$matrix$acos_BANG_(m){
clojure.core.matrix.protocols.acos_BANG_(m);

return m;
});

/**
 * Computes the asin function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.asin = (function clojure$core$matrix$asin(m){
return clojure.core.matrix.protocols.asin(m);
});

/**
 * Computes the asin function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.asin_BANG_ = (function clojure$core$matrix$asin_BANG_(m){
clojure.core.matrix.protocols.asin_BANG_(m);

return m;
});

/**
 * Computes the atan function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.atan = (function clojure$core$matrix$atan(m){
return clojure.core.matrix.protocols.atan(m);
});

/**
 * Computes the atan function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.atan_BANG_ = (function clojure$core$matrix$atan_BANG_(m){
clojure.core.matrix.protocols.atan_BANG_(m);

return m;
});

/**
 * Computes the cbrt function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.cbrt = (function clojure$core$matrix$cbrt(m){
return clojure.core.matrix.protocols.cbrt(m);
});

/**
 * Computes the cbrt function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.cbrt_BANG_ = (function clojure$core$matrix$cbrt_BANG_(m){
clojure.core.matrix.protocols.cbrt_BANG_(m);

return m;
});

/**
 * Computes the ceil function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.ceil = (function clojure$core$matrix$ceil(m){
return clojure.core.matrix.protocols.ceil(m);
});

/**
 * Computes the ceil function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.ceil_BANG_ = (function clojure$core$matrix$ceil_BANG_(m){
clojure.core.matrix.protocols.ceil_BANG_(m);

return m;
});

/**
 * Computes the cos function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.cos = (function clojure$core$matrix$cos(m){
return clojure.core.matrix.protocols.cos(m);
});

/**
 * Computes the cos function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.cos_BANG_ = (function clojure$core$matrix$cos_BANG_(m){
clojure.core.matrix.protocols.cos_BANG_(m);

return m;
});

/**
 * Computes the cosh function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.cosh = (function clojure$core$matrix$cosh(m){
return clojure.core.matrix.protocols.cosh(m);
});

/**
 * Computes the cosh function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.cosh_BANG_ = (function clojure$core$matrix$cosh_BANG_(m){
clojure.core.matrix.protocols.cosh_BANG_(m);

return m;
});

/**
 * Computes the exp function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.exp = (function clojure$core$matrix$exp(m){
return clojure.core.matrix.protocols.exp(m);
});

/**
 * Computes the exp function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.exp_BANG_ = (function clojure$core$matrix$exp_BANG_(m){
clojure.core.matrix.protocols.exp_BANG_(m);

return m;
});

/**
 * Computes the floor function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.floor = (function clojure$core$matrix$floor(m){
return clojure.core.matrix.protocols.floor(m);
});

/**
 * Computes the floor function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.floor_BANG_ = (function clojure$core$matrix$floor_BANG_(m){
clojure.core.matrix.protocols.floor_BANG_(m);

return m;
});

/**
 * Computes the log function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.log = (function clojure$core$matrix$log(m){
return clojure.core.matrix.protocols.log(m);
});

/**
 * Computes the log function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.log_BANG_ = (function clojure$core$matrix$log_BANG_(m){
clojure.core.matrix.protocols.log_BANG_(m);

return m;
});

/**
 * Computes the log10 function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.log10 = (function clojure$core$matrix$log10(m){
return clojure.core.matrix.protocols.log10(m);
});

/**
 * Computes the log10 function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.log10_BANG_ = (function clojure$core$matrix$log10_BANG_(m){
clojure.core.matrix.protocols.log10_BANG_(m);

return m;
});

/**
 * Computes the round function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.round = (function clojure$core$matrix$round(m){
return clojure.core.matrix.protocols.round(m);
});

/**
 * Computes the round function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.round_BANG_ = (function clojure$core$matrix$round_BANG_(m){
clojure.core.matrix.protocols.round_BANG_(m);

return m;
});

/**
 * Computes the signum function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.signum = (function clojure$core$matrix$signum(m){
return clojure.core.matrix.protocols.signum(m);
});

/**
 * Computes the signum function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.signum_BANG_ = (function clojure$core$matrix$signum_BANG_(m){
clojure.core.matrix.protocols.signum_BANG_(m);

return m;
});

/**
 * Computes the sin function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.sin = (function clojure$core$matrix$sin(m){
return clojure.core.matrix.protocols.sin(m);
});

/**
 * Computes the sin function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.sin_BANG_ = (function clojure$core$matrix$sin_BANG_(m){
clojure.core.matrix.protocols.sin_BANG_(m);

return m;
});

/**
 * Computes the sinh function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.sinh = (function clojure$core$matrix$sinh(m){
return clojure.core.matrix.protocols.sinh(m);
});

/**
 * Computes the sinh function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.sinh_BANG_ = (function clojure$core$matrix$sinh_BANG_(m){
clojure.core.matrix.protocols.sinh_BANG_(m);

return m;
});

/**
 * Computes the sqrt function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.sqrt = (function clojure$core$matrix$sqrt(m){
return clojure.core.matrix.protocols.sqrt(m);
});

/**
 * Computes the sqrt function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.sqrt_BANG_ = (function clojure$core$matrix$sqrt_BANG_(m){
clojure.core.matrix.protocols.sqrt_BANG_(m);

return m;
});

/**
 * Computes the tan function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.tan = (function clojure$core$matrix$tan(m){
return clojure.core.matrix.protocols.tan(m);
});

/**
 * Computes the tan function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.tan_BANG_ = (function clojure$core$matrix$tan_BANG_(m){
clojure.core.matrix.protocols.tan_BANG_(m);

return m;
});

/**
 * Computes the tanh function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.tanh = (function clojure$core$matrix$tanh(m){
return clojure.core.matrix.protocols.tanh(m);
});

/**
 * Computes the tanh function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.tanh_BANG_ = (function clojure$core$matrix$tanh_BANG_(m){
clojure.core.matrix.protocols.tanh_BANG_(m);

return m;
});

/**
 * Computes the to-degrees function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.to_degrees = (function clojure$core$matrix$to_degrees(m){
return clojure.core.matrix.protocols.to_degrees(m);
});

/**
 * Computes the to-degrees function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.to_degrees_BANG_ = (function clojure$core$matrix$to_degrees_BANG_(m){
clojure.core.matrix.protocols.to_degrees_BANG_(m);

return m;
});

/**
 * Computes the to-radians function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.to_radians = (function clojure$core$matrix$to_radians(m){
return clojure.core.matrix.protocols.to_radians(m);
});

/**
 * Computes the to-radians function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.to_radians_BANG_ = (function clojure$core$matrix$to_radians_BANG_(m){
clojure.core.matrix.protocols.to_radians_BANG_(m);

return m;
});
/**
 * Computes the sigmoid (logistic) function for every element of an array.
 */
clojure.core.matrix.logistic = (function clojure$core$matrix$logistic(a){
return clojure.core.matrix.protocols.logistic(a);
});
/**
 * Computes the sigmoid (logistic) function for every element of an array. Mutates the array.
 */
clojure.core.matrix.logistic_BANG_ = (function clojure$core$matrix$logistic_BANG_(a){
clojure.core.matrix.protocols.logistic_BANG_(a);

return a;
});
/**
 * Computes the softplus function for every element of an array.
 */
clojure.core.matrix.softplus = (function clojure$core$matrix$softplus(a){
return clojure.core.matrix.protocols.softplus(a);
});
/**
 * Computes the softplus function for every element of an array. Mutates the array.
 */
clojure.core.matrix.softplus_BANG_ = (function clojure$core$matrix$softplus_BANG_(a){
clojure.core.matrix.protocols.softplus_BANG_(a);

return a;
});
/**
 * Computes the ReLU (rectified linear) function for every element of an array.
 */
clojure.core.matrix.relu = (function clojure$core$matrix$relu(a){
return clojure.core.matrix.protocols.relu(a);
});
/**
 * Computes the ReLU (rectified linear) function for every element of an array. Mutates the array.
 */
clojure.core.matrix.relu_BANG_ = (function clojure$core$matrix$relu_BANG_(a){
clojure.core.matrix.protocols.relu_BANG_(a);

return a;
});
/**
 * Computes the softmax function for a numerical vector.
 */
clojure.core.matrix.softmax = (function clojure$core$matrix$softmax(a){
return clojure.core.matrix.protocols.softmax(a);
});
/**
 * Computes the softmax function for every element of a numerical vector. Mutates the vector.
 */
clojure.core.matrix.softmax_BANG_ = (function clojure$core$matrix$softmax_BANG_(a){
clojure.core.matrix.protocols.softmax_BANG_(a);

return a;
});
/**
 * Swap row i with row j in a matrix, returning a new matrix
 * 
 * This is one of the three elementary row operation (see https://en.wikipedia.org/wiki/Elementary_matrix).
 */
clojure.core.matrix.swap_rows = (function clojure$core$matrix$swap_rows(m,i,j){
return clojure.core.matrix.protocols.swap_rows(m,i,j);
});
/**
 * Multiply row i in a matrix by a constant factor, returning a new matrix
 * 
 * This is one of the three elementary row operation (see https://en.wikipedia.org/wiki/Elementary_matrix).
 */
clojure.core.matrix.multiply_row = (function clojure$core$matrix$multiply_row(m,i,factor){
return clojure.core.matrix.protocols.multiply_row(m,i,factor);
});
/**
 * Add a row j (optionally multiplied by a scalar factor) to a row i
 * and replace row i with the result. Returns a new matrix.
 * 
 * This is one of the three elementary row operation (see https://en.wikipedia.org/wiki/Elementary_matrix).
 */
clojure.core.matrix.add_row = (function clojure$core$matrix$add_row(var_args){
var G__34885 = arguments.length;
switch (G__34885) {
case 3:
return clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$3 = (function (m,i,j){
return clojure.core.matrix.protocols.add_row(m,i,j,1.0);
}));

(clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$4 = (function (m,i,j,factor){
return clojure.core.matrix.protocols.add_row(m,i,j,factor);
}));

(clojure.core.matrix.add_row.cljs$lang$maxFixedArity = 4);

/**
 * Sets a row in a matrix using a specified vector.
 */
clojure.core.matrix.set_row = (function clojure$core$matrix$set_row(m,i,row){
return clojure.core.matrix.protocols.set_row(m,i,row);
});
/**
 * Sets a row in a matrix in-place using a specified vector.
 */
clojure.core.matrix.set_row_BANG_ = (function clojure$core$matrix$set_row_BANG_(m,i,row){
clojure.core.matrix.protocols.set_row_BANG_(m,i,row);

return m;
});
/**
 * Sets a column in a matrix using a specified vector.
 */
clojure.core.matrix.set_column = (function clojure$core$matrix$set_column(m,i,column){
return clojure.core.matrix.protocols.set_column(m,i,column);
});
/**
 * Sets a column in a matrix using a specified vector.
 */
clojure.core.matrix.set_column_BANG_ = (function clojure$core$matrix$set_column_BANG_(m,i,column){
clojure.core.matrix.protocols.set_column_BANG_(m,i,column);

return m;
});
/**
 * Counts the number of non-zero values in a numerical array.
 * May perform a full array scan, but will often be quicker for specialised
 * sparse arrays - sometimes as fast as O(1)
 */
clojure.core.matrix.non_zero_count = (function clojure$core$matrix$non_zero_count(m){
return clojure.core.matrix.protocols.nonzero_count(m);
});
/**
 * Gets the non-zero indices of an array.
 * - For a 1D vector, returns an ordered index list.
 * - For a higher dimensional array, returns the non-zero-indices for each slice in row-major order.
 */
clojure.core.matrix.non_zero_indices = (function clojure$core$matrix$non_zero_indices(m){
return clojure.core.matrix.protocols.non_zero_indices(m);
});
/**
 * Returns all elements of an array as a Clojure sequence in row-major order.
 * 
 * Like clojure.core/seq, Returns nil if the array has no elements.
 */
clojure.core.matrix.eseq = (function clojure$core$matrix$eseq(m){
return cljs.core.seq(clojure.core.matrix.protocols.element_seq(m));
});
/**
 * Element-wise reduce on all elements of an array. 
 * 
 * It is *not* guaranteed that the reduction may be stopped early using clojure.core/reduced. If this 
 * behaviour is wanted, please check the details of the specific implementation or use the more generic 
 * Clojure code:
 *   (reduce f (eseq m))
 */
clojure.core.matrix.ereduce = (function clojure$core$matrix$ereduce(var_args){
var G__34887 = arguments.length;
switch (G__34887) {
case 2:
return clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.element_reduce(m,f);
}));

(clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,m){
return clojure.core.matrix.protocols.element_reduce(m,f,init);
}));

(clojure.core.matrix.ereduce.cljs$lang$maxFixedArity = 3);

/**
 * Element-wise map over all elements of one or more arrays.
 * 
 * f must return a result compatible with the element-type of the array m. If a more general 
 * type is required, try coercing to a more general array type first, e.g.
 *   
 *   (emap (fn [x] (str x)) (double-array [1 2 3]))             ;; Throws an error
 *   (emap (fn [x] (str x)) (coerce [] (double-array [1 2 3]))) ;; OK!
 * 
 * Implemenations may *optionally* support custom function types. If this is the case, the
 * parameter m must be a valid array from the given implementation.
 * 
 * Returns a new array of the same element-type and shape as the array m.
 */
clojure.core.matrix.emap = (function clojure$core$matrix$emap(var_args){
var G__34893 = arguments.length;
switch (G__34893) {
case 2:
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35235 = arguments.length;
var i__5770__auto___35236 = (0);
while(true){
if((i__5770__auto___35236 < len__5769__auto___35235)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35236]));

var G__35237 = (i__5770__auto___35236 + (1));
i__5770__auto___35236 = G__35237;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((3)),(0),null));
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.element_map(m,f);
}));

(clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$3 = (function (f,m,a){
return clojure.core.matrix.protocols.element_map(m,f,a);
}));

(clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$variadic = (function (f,m,a,more){
return clojure.core.matrix.protocols.element_map(m,f,a,more);
}));

/** @this {Function} */
(clojure.core.matrix.emap.cljs$lang$applyTo = (function (seq34889){
var G__34890 = cljs.core.first(seq34889);
var seq34889__$1 = cljs.core.next(seq34889);
var G__34891 = cljs.core.first(seq34889__$1);
var seq34889__$2 = cljs.core.next(seq34889__$1);
var G__34892 = cljs.core.first(seq34889__$2);
var seq34889__$3 = cljs.core.next(seq34889__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34890,G__34891,G__34892,seq34889__$3);
}));

(clojure.core.matrix.emap.cljs$lang$maxFixedArity = (3));

/**
 * Element-wise map-indexed over all elements of one or more arrays. Like
 * emap, but provides an index as the second argument to the mapping function.
 * 
 * f must accept as first argument the index vector of the current element,
 * and return a result compatible with the element-type of the array m
 * 
 * Returns a new array of the same element-type and shape as the array m.
 */
clojure.core.matrix.emap_indexed = (function clojure$core$matrix$emap_indexed(var_args){
var G__34899 = arguments.length;
switch (G__34899) {
case 2:
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35239 = arguments.length;
var i__5770__auto___35240 = (0);
while(true){
if((i__5770__auto___35240 < len__5769__auto___35239)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35240]));

var G__35241 = (i__5770__auto___35240 + (1));
i__5770__auto___35240 = G__35241;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((3)),(0),null));
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.element_map_indexed(m,f);
}));

(clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$3 = (function (f,m,a){
return clojure.core.matrix.protocols.element_map_indexed(m,f,a);
}));

(clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$variadic = (function (f,m,a,more){
return clojure.core.matrix.protocols.element_map_indexed(m,f,a,more);
}));

/** @this {Function} */
(clojure.core.matrix.emap_indexed.cljs$lang$applyTo = (function (seq34895){
var G__34896 = cljs.core.first(seq34895);
var seq34895__$1 = cljs.core.next(seq34895);
var G__34897 = cljs.core.first(seq34895__$1);
var seq34895__$2 = cljs.core.next(seq34895__$1);
var G__34898 = cljs.core.first(seq34895__$2);
var seq34895__$3 = cljs.core.next(seq34895__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34896,G__34897,G__34898,seq34895__$3);
}));

(clojure.core.matrix.emap_indexed.cljs$lang$maxFixedArity = (3));

/**
 * Maps a function over all slices of one or more array
 */
clojure.core.matrix.slice_map = (function clojure$core$matrix$slice_map(var_args){
var G__34905 = arguments.length;
switch (G__34905) {
case 2:
return clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35243 = arguments.length;
var i__5770__auto___35244 = (0);
while(true){
if((i__5770__auto___35244 < len__5769__auto___35243)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35244]));

var G__35245 = (i__5770__auto___35244 + (1));
i__5770__auto___35244 = G__35245;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((3)),(0),null));
return clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.slice_map(m,f);
}));

(clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$3 = (function (f,m1,m2){
return clojure.core.matrix.protocols.slice_map(m1,f,m2);
}));

(clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$variadic = (function (f,m1,m2,more){
return clojure.core.matrix.protocols.slice_map(m1,f,m2,more);
}));

/** @this {Function} */
(clojure.core.matrix.slice_map.cljs$lang$applyTo = (function (seq34901){
var G__34902 = cljs.core.first(seq34901);
var seq34901__$1 = cljs.core.next(seq34901);
var G__34903 = cljs.core.first(seq34901__$1);
var seq34901__$2 = cljs.core.next(seq34901__$1);
var G__34904 = cljs.core.first(seq34901__$2);
var seq34901__$3 = cljs.core.next(seq34901__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34902,G__34903,G__34904,seq34901__$3);
}));

(clojure.core.matrix.slice_map.cljs$lang$maxFixedArity = (3));

/**
 * Filters the slices of a core.matrix array, returning only those slices where (pred slice) is truthy.
 * 
 * Will result in an nil value if no slices satify the criteria. If not nil, the return value is 
 * guaranteed to be a seqable core.matrix array, e.g. you can:
 *  - use (seq (filter-slices m)) to get a sequence of slices
 *  - use (when-let [z (filter-slices m)] ...) to operate on the result as a core.matrix array.
 */
clojure.core.matrix.filter_slices = (function clojure$core$matrix$filter_slices(pred,m){
return clojure.core.matrix.protocols.filter_slices(m,pred);
});
/**
 * Calculates the sum of all the elements in a numerical array.
 */
clojure.core.matrix.esum = (function clojure$core$matrix$esum(m){
return clojure.core.matrix.protocols.element_sum(m);
});
/**
 * Gets the minimum element value from a numerical array
 */
clojure.core.matrix.emin = (function clojure$core$matrix$emin(m){
return clojure.core.matrix.protocols.element_min(m);
});
/**
 * Gets the maximum element value from a numerical array
 */
clojure.core.matrix.emax = (function clojure$core$matrix$emax(m){
return clojure.core.matrix.protocols.element_max(m);
});
/**
 * Gets the minimum element value from a numerical array
 */
clojure.core.matrix.minimum = (function clojure$core$matrix$minimum(m){
return clojure.core.matrix.protocols.element_min(m);
});
/**
 * Gets the maximum element value from a numerical array
 */
clojure.core.matrix.maximum = (function clojure$core$matrix$maximum(m){
return clojure.core.matrix.protocols.element_max(m);
});
/**
 * Clamps each element in a numerical array between lower and upper bounds
 *   specified by a and b, respectively.
 * 
 *   Examples:
 *   (clamp [[1 5 1] [4 10 2] [5 6 3]] 2 8) ;=> [[2 5 2] [4 8 2] [5 6 3]]
 *   
 */
clojure.core.matrix.clamp = (function clojure$core$matrix$clamp(m,a,b){
return clojure.core.matrix.protocols.element_clamp(m,a,b);
});
/**
 * Element-wise map of a function f over all elements of one or more arrays.
 * 
 * f must return a result compatible with the element-type of the array m
 * 
 * Performs in-place modification of the first array argument.
 */
clojure.core.matrix.emap_BANG_ = (function clojure$core$matrix$emap_BANG_(var_args){
var G__34911 = arguments.length;
switch (G__34911) {
case 2:
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35247 = arguments.length;
var i__5770__auto___35248 = (0);
while(true){
if((i__5770__auto___35248 < len__5769__auto___35247)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35248]));

var G__35249 = (i__5770__auto___35248 + (1));
i__5770__auto___35248 = G__35249;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((3)),(0),null));
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
clojure.core.matrix.protocols.element_map_BANG_(m,f);

return m;
}));

(clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (f,m,a){
clojure.core.matrix.protocols.element_map_BANG_(m,f,a);

return m;
}));

(clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,m,a,more){
clojure.core.matrix.protocols.element_map_BANG_(m,f,a,more);

return m;
}));

/** @this {Function} */
(clojure.core.matrix.emap_BANG_.cljs$lang$applyTo = (function (seq34907){
var G__34908 = cljs.core.first(seq34907);
var seq34907__$1 = cljs.core.next(seq34907);
var G__34909 = cljs.core.first(seq34907__$1);
var seq34907__$2 = cljs.core.next(seq34907__$1);
var G__34910 = cljs.core.first(seq34907__$2);
var seq34907__$3 = cljs.core.next(seq34907__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34908,G__34909,G__34910,seq34907__$3);
}));

(clojure.core.matrix.emap_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Adds the result of emap to a destination array.
 * 
 * dest must be a mutable numerical array. Returns dest.
 */
clojure.core.matrix.add_emap_BANG_ = (function clojure$core$matrix$add_emap_BANG_(var_args){
var G__34918 = arguments.length;
switch (G__34918) {
case 3:
return clojure.core.matrix.add_emap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_emap_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35251 = arguments.length;
var i__5770__auto___35252 = (0);
while(true){
if((i__5770__auto___35252 < len__5769__auto___35251)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35252]));

var G__35253 = (i__5770__auto___35252 + (1));
i__5770__auto___35252 = G__35253;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((4)),(0),null));
return clojure.core.matrix.add_emap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.add_emap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dest,f,a){
clojure.core.matrix.protocols.add_emap_BANG_(dest,f,a);

return dest;
}));

(clojure.core.matrix.add_emap_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (dest,f,a,b){
clojure.core.matrix.protocols.add_emap_BANG_(dest,f,a,b);

return dest;
}));

(clojure.core.matrix.add_emap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (dest,f,a,b,more){
clojure.core.matrix.protocols.add_emap_BANG_(dest,f,a,b,more);

return dest;
}));

/** @this {Function} */
(clojure.core.matrix.add_emap_BANG_.cljs$lang$applyTo = (function (seq34913){
var G__34914 = cljs.core.first(seq34913);
var seq34913__$1 = cljs.core.next(seq34913);
var G__34915 = cljs.core.first(seq34913__$1);
var seq34913__$2 = cljs.core.next(seq34913__$1);
var G__34916 = cljs.core.first(seq34913__$2);
var seq34913__$3 = cljs.core.next(seq34913__$2);
var G__34917 = cljs.core.first(seq34913__$3);
var seq34913__$4 = cljs.core.next(seq34913__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34914,G__34915,G__34916,G__34917,seq34913__$4);
}));

(clojure.core.matrix.add_emap_BANG_.cljs$lang$maxFixedArity = (4));

/**
 * Sets the destination array to the result of an emap operation.
 * 
 * dest must be a mutable array. Returns dest.
 */
clojure.core.matrix.set_emap_BANG_ = (function clojure$core$matrix$set_emap_BANG_(var_args){
var G__34925 = arguments.length;
switch (G__34925) {
case 3:
return clojure.core.matrix.set_emap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.set_emap_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35255 = arguments.length;
var i__5770__auto___35256 = (0);
while(true){
if((i__5770__auto___35256 < len__5769__auto___35255)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35256]));

var G__35257 = (i__5770__auto___35256 + (1));
i__5770__auto___35256 = G__35257;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((4)),(0),null));
return clojure.core.matrix.set_emap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.set_emap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dest,f,a){
clojure.core.matrix.protocols.set_emap_BANG_(dest,f,a);

return dest;
}));

(clojure.core.matrix.set_emap_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (dest,f,a,b){
clojure.core.matrix.protocols.set_emap_BANG_(dest,f,a,b);

return dest;
}));

(clojure.core.matrix.set_emap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (dest,f,a,b,more){
clojure.core.matrix.protocols.set_emap_BANG_(dest,f,a,b,more);

return dest;
}));

/** @this {Function} */
(clojure.core.matrix.set_emap_BANG_.cljs$lang$applyTo = (function (seq34920){
var G__34921 = cljs.core.first(seq34920);
var seq34920__$1 = cljs.core.next(seq34920);
var G__34922 = cljs.core.first(seq34920__$1);
var seq34920__$2 = cljs.core.next(seq34920__$1);
var G__34923 = cljs.core.first(seq34920__$2);
var seq34920__$3 = cljs.core.next(seq34920__$2);
var G__34924 = cljs.core.first(seq34920__$3);
var seq34920__$4 = cljs.core.next(seq34920__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34921,G__34922,G__34923,G__34924,seq34920__$4);
}));

(clojure.core.matrix.set_emap_BANG_.cljs$lang$maxFixedArity = (4));

/**
 * Element-wise map-indexed over all elements of one or more arrays.
 * 
 * f must accept as first argument the index vector of the current element,
 * and return a result compatible with the element-type of the array m
 * 
 * Performs in-place modification of the first array argument.
 */
clojure.core.matrix.emap_indexed_BANG_ = (function clojure$core$matrix$emap_indexed_BANG_(var_args){
var G__34931 = arguments.length;
switch (G__34931) {
case 2:
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___35259 = arguments.length;
var i__5770__auto___35260 = (0);
while(true){
if((i__5770__auto___35260 < len__5769__auto___35259)){
args_arr__5794__auto__.push((arguments[i__5770__auto___35260]));

var G__35261 = (i__5770__auto___35260 + (1));
i__5770__auto___35260 = G__35261;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((3)),(0),null));
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5795__auto__);

}
});

(clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.element_map_indexed_BANG_(m,f);
}));

(clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (f,m,a){
return clojure.core.matrix.protocols.element_map_indexed_BANG_(m,f,a);
}));

(clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,m,a,more){
return clojure.core.matrix.protocols.element_map_indexed_BANG_(m,f,a,more);
}));

/** @this {Function} */
(clojure.core.matrix.emap_indexed_BANG_.cljs$lang$applyTo = (function (seq34927){
var G__34928 = cljs.core.first(seq34927);
var seq34927__$1 = cljs.core.next(seq34927);
var G__34929 = cljs.core.first(seq34927__$1);
var seq34927__$2 = cljs.core.next(seq34927__$1);
var G__34930 = cljs.core.first(seq34927__$2);
var seq34927__$3 = cljs.core.next(seq34927__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34928,G__34929,G__34930,seq34927__$3);
}));

(clojure.core.matrix.emap_indexed_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Returns a sequence of all possible index vectors for a given shape, in row-major order
 */
clojure.core.matrix.index_seq_for_shape = (function clojure$core$matrix$index_seq_for_shape(sh){
return clojure.core.matrix.utils.base_index_seq_for_shape(sh);
});
/**
 * Returns a sequence of all possible index vectors into an array, in row-major order.
 */
clojure.core.matrix.index_seq = (function clojure$core$matrix$index_seq(m){
return clojure.core.matrix.index_seq_for_shape(clojure.core.matrix.protocols.get_shape(m));
});
/**
 * Gets the currently active matrix implementation as a keyword, e.g. :vectorz
 */
clojure.core.matrix.current_implementation = (function clojure$core$matrix$current_implementation(){
return clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_;
});
/**
 * Gets a canonical matrix object for a given implementation (keyword or array), or the current implementation
 * if not otherwise specified. Scalars are regarded as conforming to the current implementation
 * Throws an exception if none is available.
 */
clojure.core.matrix.implementation_check = (function clojure$core$matrix$implementation_check(var_args){
var G__34933 = arguments.length;
switch (G__34933) {
case 0:
return clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 = (function (){
var or__5045__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No current clojure.core.matrix implementation available (no canonical)",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 = (function (impl){
var temp__5802__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__5802__auto__)){
var im = temp__5802__auto__;
return im;
} else {
if(cljs.core.truth_(clojure.core.matrix.scalar_QMARK_(impl))){
return clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_);
} else {
var or__5045__auto__ = clojure.core.matrix.implementations.load_implementation(impl);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["No clojure.core.matrix implementation available - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(impl)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

}
}
}));

(clojure.core.matrix.implementation_check.cljs$lang$maxFixedArity = 1);

/**
 * Gets a canonical object for the currently active matrix implementation. This object
 * can be used to pass as an implementation parameter, or to query implementation internals via core.matrix protocols.
 */
clojure.core.matrix.current_implementation_object = (function clojure$core$matrix$current_implementation_object(){
return clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.current_implementation());
});
/**
 * Sets the currently active core.matrix implementation.
 * 
 * Parameter may be
 *  - A known keyword for the implementation e.g. :vectorz
 *  - An existing instance from the implementation
 * 
 * Throws an exception if the implementation cannot be loaded.
 * 
 * This is used primarily for functions that construct new matrices, i.e. it determines the
 * implementation used for expressions like: (matrix [[1 2] [3 4]])
 */
clojure.core.matrix.set_current_implementation = (function clojure$core$matrix$set_current_implementation(m){
return clojure.core.matrix.implementations.set_current_implementation(m);
});

//# sourceMappingURL=clojure.core.matrix.js.map
