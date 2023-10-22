goog.provide('clojure.core.matrix.implementations');
/**
 * A map of known core.matrix implementation namespaces.
 * 
 * core.matrix will attempt to load these namespaces when an array of the specified
 * keyword type is requested.
 */
clojure.core.matrix.implementations.KNOWN_IMPLEMENTATIONS = (new cljs.core.PersistentArrayMap(null,(26),[new cljs.core.Keyword(null,"vectorz","vectorz",1550942815),new cljs.core.Symbol(null,"mikera.vectorz.matrix-api","mikera.vectorz.matrix-api",-1304124502,null),new cljs.core.Keyword(null,"vectorz-opencl","vectorz-opencl",-1227300990),new cljs.core.Symbol(null,"mikera.vectorz.opencl-api","mikera.vectorz.opencl-api",929622627,null),new cljs.core.Keyword(null,"neanderthal","neanderthal",133200757),new cljs.core.Symbol(null,"uncomplicate.neanderthal.impl.matrix-api","uncomplicate.neanderthal.impl.matrix-api",522937898,null),new cljs.core.Keyword(null,"clojure","clojure",438975815),new cljs.core.Symbol(null,"clojure.core.matrix.impl.clojure","clojure.core.matrix.impl.clojure",503611357,null),new cljs.core.Keyword(null,"ndarray","ndarray",1659822393),new cljs.core.Symbol(null,"clojure.core.matrix.impl.ndarray-object","clojure.core.matrix.impl.ndarray-object",-213967717,null),new cljs.core.Keyword(null,"ndarray-double","ndarray-double",-159242597),new cljs.core.Symbol(null,"clojure.core.matrix.impl.ndarray-double","clojure.core.matrix.impl.ndarray-double",-2055462494,null),new cljs.core.Keyword(null,"ndarray-float","ndarray-float",440096342),new cljs.core.Symbol(null,"clojure.core.matrix.impl.ndarray","clojure.core.matrix.impl.ndarray",-1263457743,null),new cljs.core.Keyword(null,"ndarray-long","ndarray-long",-219375229),new cljs.core.Symbol(null,"clojure.core.matrix.impl.ndarray","clojure.core.matrix.impl.ndarray",-1263457743,null),new cljs.core.Keyword(null,"persistent-vector","persistent-vector",2032618025),new cljs.core.Symbol(null,"clojure.core.matrix.impl.persistent-vector","clojure.core.matrix.impl.persistent-vector",-1383679619,null),new cljs.core.Keyword(null,"persistent-map","persistent-map",1676752549),new cljs.core.Symbol(null,"clojure.core.matrix.impl.sparse-map","clojure.core.matrix.impl.sparse-map",-680801962,null),new cljs.core.Keyword(null,"sequence","sequence",926807414),new cljs.core.Symbol(null,"clojure.core.matrix.impl.sequence","clojure.core.matrix.impl.sequence",-188268595,null),new cljs.core.Keyword(null,"double-array","double-array",-1383495801),new cljs.core.Symbol(null,"clojure.core.matrix.impl.double-array","clojure.core.matrix.impl.double-array",1708458108,null),new cljs.core.Keyword(null,"scalar-wrapper","scalar-wrapper",-1626299275),new cljs.core.Symbol(null,"clojure.core.matrix.impl.wrappers","clojure.core.matrix.impl.wrappers",1214427365,null),new cljs.core.Keyword(null,"slice-wrapper","slice-wrapper",449772415),new cljs.core.Symbol(null,"clojure.core.matrix.impl.wrappers","clojure.core.matrix.impl.wrappers",1214427365,null),new cljs.core.Keyword(null,"nd-wrapper","nd-wrapper",563497943),new cljs.core.Symbol(null,"clojure.core.matrix.impl.wrappers","clojure.core.matrix.impl.wrappers",1214427365,null),new cljs.core.Keyword(null,"dataset","dataset",1159262238),new cljs.core.Symbol(null,"clojure.core.matrix.impl.dataset","clojure.core.matrix.impl.dataset",750993460,null),new cljs.core.Keyword(null,"jblas","jblas",609262767),new cljs.core.Keyword(null,"TODO","TODO",-523795145),new cljs.core.Keyword(null,"clatrix","clatrix",-547812428),new cljs.core.Symbol(null,"clatrix.core","clatrix.core",972957352,null),new cljs.core.Keyword(null,"parallel-colt","parallel-colt",629381018),new cljs.core.Keyword(null,"TODO","TODO",-523795145),new cljs.core.Keyword(null,"ejml","ejml",964957572),new cljs.core.Keyword(null,"TODO","TODO",-523795145),new cljs.core.Keyword(null,"nd4j","nd4j",-1907957110),new cljs.core.Symbol(null,"nd4clj.kiw","nd4clj.kiw",-1874915324,null),new cljs.core.Keyword(null,"ujmp","ujmp",-838348489),new cljs.core.Keyword(null,"TODO","TODO",-523795145),new cljs.core.Keyword(null,"weka","weka",195496388),new cljs.core.Symbol(null,"clj-ml.matrix-api","clj-ml.matrix-api",-1914744527,null),new cljs.core.Keyword(null,"commons-math","commons-math",-1283490548),new cljs.core.Symbol(null,"apache-commons-matrix.core","apache-commons-matrix.core",1260886815,null),new cljs.core.Keyword(null,"mtj","mtj",1143798319),new cljs.core.Symbol(null,"cav.mtj.core.matrix","cav.mtj.core.matrix",349644007,null),new cljs.core.Keyword(null,"aljabr","aljabr",1424034715),new cljs.core.Symbol(null,"thinktopic.aljabr.core","thinktopic.aljabr.core",-1050414454,null)],null));
/**
 * The default implementation used in core.matrix. Currently set to `:persistent-vector` for maximum
 * compatibility with regular Clojure code.
 */
clojure.core.matrix.implementations.DEFAULT_IMPLEMENTATION = new cljs.core.Keyword(null,"persistent-vector","persistent-vector",2032618025);
/**
 * A dynamic var specifying the current core.matrix implementation in use.
 * 
 * May be re-bound to temporarily use a different core.matrix implementation.
 */
clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_ = clojure.core.matrix.implementations.DEFAULT_IMPLEMENTATION;
/**
 * A dynamic var specifying the current core.matrix numeric implementation in use.
 * 
 * May be re-bound to temporarily use a different core.matrix implementation.
 */
clojure.core.matrix.implementations._STAR_numeric_implementation_STAR_ = new cljs.core.Keyword(null,"ndarray-double","ndarray-double",-159242597);
if((typeof clojure !== 'undefined') && (typeof clojure.core !== 'undefined') && (typeof clojure.core.matrix !== 'undefined') && (typeof clojure.core.matrix.implementations !== 'undefined') && (typeof clojure.core.matrix.implementations._STAR_debug_options_STAR_ !== 'undefined')){
} else {
/**
 * A dynamic var supporting debugging option for core.matrix implementers.
 * 
 * Currently supported values:
 *   :print-registrations  - print when core.matrix implementations are registered
 *   :reload-namespaces  - require :reload implementation namespaces when setting the current implementation
 */
clojure.core.matrix.implementations._STAR_debug_options_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"print-registrations","print-registrations",64241995),false,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134),false], null);
}
if((typeof clojure !== 'undefined') && (typeof clojure.core !== 'undefined') && (typeof clojure.core.matrix !== 'undefined') && (typeof clojure.core.matrix.implementations !== 'undefined') && (typeof clojure.core.matrix.implementations.canonical_objects !== 'undefined')){
} else {
/**
 * An atom holding a map of canonical objects for each loaded core.matrix implementation.
 * 
 * Canonical objects may be used to invoke protocol methods on an instance of the correct
 * type to get implementation-specific behaviour. Canonical objects are required to support
 * all mandatory core.matrix protocols.
 */
clojure.core.matrix.implementations.canonical_objects = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Returns the implementation keyword  for a given object
 */
clojure.core.matrix.implementations.get_implementation_key = (function clojure$core$matrix$implementations$get_implementation_key(m){
if((m instanceof cljs.core.Keyword)){
return m;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_(m))){
return null;
} else {
return clojure.core.matrix.protocols.implementation_key(m);

}
}
});
/**
 * Registers a matrix implementation for use. Should be called by all implementations
 * when they are loaded, once for each implementation keyword registered. Safe to call multiple times.
 */
clojure.core.matrix.implementations.register_implementation = (function clojure$core$matrix$implementations$register_implementation(var_args){
var G__28851 = arguments.length;
switch (G__28851) {
case 1:
return clojure.core.matrix.implementations.register_implementation.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.implementations.register_implementation.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.implementations.register_implementation.cljs$core$IFn$_invoke$arity$1 = (function (canonical_object){
return clojure.core.matrix.implementations.register_implementation.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.implementation_key(canonical_object),canonical_object);
}));

(clojure.core.matrix.implementations.register_implementation.cljs$core$IFn$_invoke$arity$2 = (function (key,canonical_object){
if((key instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Implementation key must be a Clojure keyword but got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(key))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"print-registrations","print-registrations",64241995).cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.implementations._STAR_debug_options_STAR_))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Registering core.matrix implementation [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"] with canonical object [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(canonical_object)),"]"].join('')], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(clojure.core.matrix.implementations.canonical_objects,cljs.core.assoc,key,canonical_object);
}));

(clojure.core.matrix.implementations.register_implementation.cljs$lang$maxFixedArity = 2);

/**
 * Attempts to load an implementation for the given keyword.
 * Returns nil if not possible, a non-nil matrix value of the correct implementation otherwise.
 */
clojure.core.matrix.implementations.try_load_implementation = (function clojure$core$matrix$implementations$try_load_implementation(k){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INFO: No dynamic loading of implementations in Clojurescript.\nYou must require an implementation explicitly in a namespace, for example thinktopic.aljabr.core"], 0));
});
/**
 * Attempts to load the implementation for a given keyword or matrix object.
 * Returns nil if not possible, a non-nil matrix value of the correct implementation otherwise.
 */
clojure.core.matrix.implementations.load_implementation = (function clojure$core$matrix$implementations$load_implementation(korm){
if((korm instanceof cljs.core.Keyword)){
return clojure.core.matrix.implementations.try_load_implementation(korm);
} else {
return clojure.core.matrix.implementations.try_load_implementation(clojure.core.matrix.protocols.implementation_key(korm));
}
});
/**
 * Gets the canonical object for a specific implementation. The canonical object is used
 * to call implementation-specific protocol functions where required (e.g. creation of new
 * arrays of the correct type for the implementation).
 * 
 * Returns nil if the implementation cannot be found.
 */
clojure.core.matrix.implementations.get_canonical_object = (function clojure$core$matrix$implementations$get_canonical_object(var_args){
var G__28853 = arguments.length;
switch (G__28853) {
case 0:
return clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_);
}));

(clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1 = (function (m){
var k = clojure.core.matrix.implementations.get_implementation_key(m);
var obj = (function (){var fexpr__28854 = cljs.core.deref(clojure.core.matrix.implementations.canonical_objects);
return (fexpr__28854.cljs$core$IFn$_invoke$arity$1 ? fexpr__28854.cljs$core$IFn$_invoke$arity$1(k) : fexpr__28854.call(null,k));
})();
if(cljs.core.truth_(k)){
var or__5045__auto__ = obj;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (cljs.core.truth_(clojure.core.matrix.implementations.try_load_implementation(k))?(function (){var fexpr__28855 = cljs.core.deref(clojure.core.matrix.implementations.canonical_objects);
return (fexpr__28855.cljs$core$IFn$_invoke$arity$1 ? fexpr__28855.cljs$core$IFn$_invoke$arity$1(k) : fexpr__28855.call(null,k));
})():null);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (((m instanceof cljs.core.Keyword))?null:m);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return null;
}
}
}
} else {
return null;
}
}));

(clojure.core.matrix.implementations.get_canonical_object.cljs$lang$maxFixedArity = 1);

/**
 * Like get-canonical-object, except it throws an exception if the implementation cannot be found
 */
clojure.core.matrix.implementations.get_canonical_object_or_throw = (function clojure$core$matrix$implementations$get_canonical_object_or_throw(mk){
var or__5045__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(mk);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot find implementation for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mk)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Attempts to construct an array according to the type of array m. If not possible,
 * returns another array type.
 */
clojure.core.matrix.implementations.construct = (function clojure$core$matrix$implementations$construct(m,data){
var or__5045__auto__ = clojure.core.matrix.protocols.construct_matrix(m,data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = clojure.core.matrix.protocols.coerce_param(m,data);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return clojure.core.matrix.protocols.coerce_param(cljs.core.PersistentVector.EMPTY,data);
}
}
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
clojure.core.matrix.implementations.set_current_implementation = (function clojure$core$matrix$implementations$set_current_implementation(m){
if((m instanceof cljs.core.Keyword)){
var or__5045__auto___28866 = clojure.core.matrix.implementations.try_load_implementation(m);
if(cljs.core.truth_(or__5045__auto___28866)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unable to load matrix implementation: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
}

return (clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_ = clojure.core.matrix.implementations.get_implementation_key(m));
});

//# sourceMappingURL=clojure.core.matrix.implementations.js.map
