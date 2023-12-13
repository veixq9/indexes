goog.provide('com.rpl.specter');
com.rpl.specter.static_path_QMARK_ = (function com$rpl$specter$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_(path)){
return cljs.core.every_QMARK_(com.rpl.specter.static_path_QMARK_,path);
} else {
return (!(com.rpl.specter.impl.dynamic_param_QMARK_(path)));
}
});
com.rpl.specter.wrap_dynamic_nav = (function com$rpl$specter$wrap_dynamic_nav(f){
return (function() { 
var G__34377__delegate = function (args){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
if(((cljs.core.sequential_QMARK_(ret)) && (com.rpl.specter.static_path_QMARK_(ret)))){
return com.rpl.specter.impl.comp_paths_STAR_(ret);
} else {
if(((cljs.core.sequential_QMARK_(ret)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ret))))){
return cljs.core.first(ret);
} else {
return ret;

}
}
};
var G__34377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34378__i = 0, G__34378__a = new Array(arguments.length -  0);
while (G__34378__i < G__34378__a.length) {G__34378__a[G__34378__i] = arguments[G__34378__i + 0]; ++G__34378__i;}
  args = new cljs.core.IndexedSeq(G__34378__a,0,null);
} 
return G__34377__delegate.call(this,args);};
G__34377.cljs$lang$maxFixedArity = 0;
G__34377.cljs$lang$applyTo = (function (arglist__34379){
var args = cljs.core.seq(arglist__34379);
return G__34377__delegate(args);
});
G__34377.cljs$core$IFn$_invoke$arity$variadic = G__34377__delegate;
return G__34377;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34380 = arguments.length;
var i__5770__auto___34381 = (0);
while(true){
if((i__5770__auto___34381 < len__5769__auto___34380)){
args__5775__auto__.push((arguments[i__5770__auto___34381]));

var G__34382 = (i__5770__auto___34381 + (1));
i__5770__auto___34381 = G__34382;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_(cljs.core.vec(apath));
}));

(com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq34050){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34050));
}));

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__34051 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__34052 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__34051,G__34052) : com.rpl.specter.compiled_select.call(null,G__34051,G__34052));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__34053 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__34054 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__34053,G__34054) : com.rpl.specter.compiled_select_one.call(null,G__34053,G__34054));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__34056 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__34057 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__34056,G__34057) : com.rpl.specter.compiled_select_one_BANG_.call(null,G__34056,G__34057));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__34058 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__34059 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__34058,G__34059) : com.rpl.specter.compiled_select_first.call(null,G__34058,G__34059));
});
/**
 * Version of select-any that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_any = com.rpl.specter.impl.compiled_select_any_STAR_;
/**
 * Global value used to indicate no elements selected during
 *           [[select-any]].
 */
com.rpl.specter.NONE = com.rpl.specter.impl.NONE;
/**
 * Returns any element found or [[NONE]] if nothing selected. This is the most
 * efficient of the various selection operations.
 */
com.rpl.specter.select_any_STAR_ = (function com$rpl$specter$select_any_STAR_(path,structure){
var G__34060 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__34061 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__34060,G__34061) : com.rpl.specter.compiled_select_any.call(null,G__34060,G__34061));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__34062 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__34063 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__34062,G__34063) : com.rpl.specter.compiled_selected_any_QMARK_.call(null,G__34062,G__34063));
});
/**
 * Version of traverse that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse = com.rpl.specter.impl.do_compiled_traverse;
/**
 * Return a reducible object that traverses over `structure` to every element
 * specified by the path
 */
com.rpl.specter.traverse_STAR_ = (function com$rpl$specter$traverse_STAR_(apath,structure){
var G__34064 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__34065 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__34064,G__34065) : com.rpl.specter.compiled_traverse.call(null,G__34064,G__34065));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__34066 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__34066) : com.rpl.specter.compiled_traverse_all.call(null,G__34066));
});
/**
 * Version of transform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Version of vtransform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_vtransform = com.rpl.specter.impl.compiled_vtransform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform_STAR_ = (function com$rpl$specter$transform_STAR_(path,transform_fn,structure){
var G__34067 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__34068 = transform_fn;
var G__34069 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__34067,G__34068,G__34069) : com.rpl.specter.compiled_transform.call(null,G__34067,G__34068,G__34069));
});
/**
 * Version of `multi-transform` that takes in a path precompiled with `comp-paths`
 */
com.rpl.specter.compiled_multi_transform = com.rpl.specter.impl.compiled_multi_transform_STAR_;
/**
 * Just like `transform` but expects transform functions to be specified
 * inline in the path using `terminal` or `vterminal`. Error is thrown if navigation finishes
 * at a non-terminal navigator. `terminal-val` is a wrapper around `terminal` and is
 * the `multi-transform` equivalent of `setval`.
 */
com.rpl.specter.multi_transform_STAR_ = (function com$rpl$specter$multi_transform_STAR_(path,structure){
var G__34070 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__34071 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__34070,G__34071) : com.rpl.specter.compiled_multi_transform.call(null,G__34070,G__34071));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__34072 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__34073 = val;
var G__34074 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__34072,G__34073,G__34074) : com.rpl.specter.compiled_setval.call(null,G__34072,G__34073,G__34074));
});
/**
 * Version of replace-in that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = com.rpl.specter.impl.compiled_replace_in_STAR_;
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 * The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in_STAR_ = (function com$rpl$specter$replace_in_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34383 = arguments.length;
var i__5770__auto___34384 = (0);
while(true){
if((i__5770__auto___34384 < len__5769__auto___34383)){
args__5775__auto__.push((arguments[i__5770__auto___34384]));

var G__34385 = (i__5770__auto___34384 + (1));
i__5770__auto___34384 = G__34385;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__34083){
var map__34084 = p__34083;
var map__34084__$1 = cljs.core.__destructure_map(map__34084);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34084__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var G__34086 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__34087 = transform_fn;
var G__34088 = structure;
var G__34089 = new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341);
var G__34090 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__34086,G__34087,G__34088,G__34089,G__34090) : com.rpl.specter.compiled_replace_in.call(null,G__34086,G__34087,G__34088,G__34089,G__34090));
}));

(com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq34075){
var G__34076 = cljs.core.first(seq34075);
var seq34075__$1 = cljs.core.next(seq34075);
var G__34077 = cljs.core.first(seq34075__$1);
var seq34075__$2 = cljs.core.next(seq34075__$1);
var G__34078 = cljs.core.first(seq34075__$2);
var seq34075__$3 = cljs.core.next(seq34075__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34076,G__34077,G__34078,seq34075__$3);
}));

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
com.rpl.specter.eachnav = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (navfn){
var latenavfn = (com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1(navfn) : com.rpl.specter.late_resolved_fn.call(null,navfn));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__34386__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__34386 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34387__i = 0, G__34387__a = new Array(arguments.length -  0);
while (G__34387__i < G__34387__a.length) {G__34387__a[G__34387__i] = arguments[G__34387__i + 0]; ++G__34387__i;}
  args = new cljs.core.IndexedSeq(G__34387__a,0,null);
} 
return G__34386__delegate.call(this,args);};
G__34386.cljs$lang$maxFixedArity = 0;
G__34386.cljs$lang$applyTo = (function (arglist__34388){
var args = cljs.core.seq(arglist__34388);
return G__34386__delegate(args);
});
G__34386.cljs$core$IFn$_invoke$arity$variadic = G__34386__delegate;
return G__34386;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.local_declarepath = com.rpl.specter.impl.local_declarepath;

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34094 = (function (meta34095){
this.meta34095 = meta34095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34096,meta34095__$1){
var self__ = this;
var _34096__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34094(meta34095__$1));
}));

(com.rpl.specter.t_com$rpl$specter34094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34096){
var self__ = this;
var _34096__$1 = this;
return self__.meta34095;
}));

(com.rpl.specter.t_com$rpl$specter34094.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34094.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter34094.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return structure;
}));

(com.rpl.specter.t_com$rpl$specter34094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34095","meta34095",1539183972,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34094.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34094.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34094");

(com.rpl.specter.t_com$rpl$specter34094.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34094");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34094.
 */
com.rpl.specter.__GT_t_com$rpl$specter34094 = (function com$rpl$specter$__GT_t_com$rpl$specter34094(meta34095){
return (new com.rpl.specter.t_com$rpl$specter34094(meta34095));
});




com.rpl.specter.STOP_select_STAR_ = (function com$rpl$specter$STOP_select_STAR_(structure,next_fn){
return com.rpl.specter.NONE;
});

com.rpl.specter.STOP_transform_STAR_ = (function com$rpl$specter$STOP_transform_STAR_(structure,next_fn){
return structure;
});

/**
 * Stops navigation at this point. For selection returns nothing and for
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = (new com.rpl.specter.t_com$rpl$specter34094(null));
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.STAY_STAR_;

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34099 = (function (afn,meta34100){
this.afn = afn;
this.meta34100 = meta34100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34101,meta34100__$1){
var self__ = this;
var _34101__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34099(self__.afn,meta34100__$1));
}));

(com.rpl.specter.t_com$rpl$specter34099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34101){
var self__ = this;
var _34101__$1 = this;
return self__.meta34100;
}));

(com.rpl.specter.t_com$rpl$specter34099.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34099.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter34099.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter34099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta34100","meta34100",2064015179,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34099.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34099.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34099");

(com.rpl.specter.t_com$rpl$specter34099.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34099");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34099.
 */
com.rpl.specter.__GT_t_com$rpl$specter34099 = (function com$rpl$specter$__GT_t_com$rpl$specter34099(afn,meta34100){
return (new com.rpl.specter.t_com$rpl$specter34099(afn,meta34100));
});


/**
 * Defines an endpoint in the navigation the transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
return (new com.rpl.specter.t_com$rpl$specter34099(afn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34103 = (function (afn,meta34104){
this.afn = afn;
this.meta34104 = meta34104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34105,meta34104__$1){
var self__ = this;
var _34105__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34103(self__.afn,meta34104__$1));
}));

(com.rpl.specter.t_com$rpl$specter34103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34105){
var self__ = this;
var _34105__$1 = this;
return self__.meta34104;
}));

(com.rpl.specter.t_com$rpl$specter34103.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34103.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter34103.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(vals,structure) : self__.afn.call(null,vals,structure));
}));

(com.rpl.specter.t_com$rpl$specter34103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta34104","meta34104",-1573554002,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34103.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34103.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34103");

(com.rpl.specter.t_com$rpl$specter34103.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34103");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34103.
 */
com.rpl.specter.__GT_t_com$rpl$specter34103 = (function com$rpl$specter$__GT_t_com$rpl$specter34103(afn,meta34104){
return (new com.rpl.specter.t_com$rpl$specter34103(afn,meta34104));
});


/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
return (new com.rpl.specter.t_com$rpl$specter34103(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__34106 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__34106) : com.rpl.specter.terminal.call(null,G__34106));
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34107 = (function (meta34108){
this.meta34108 = meta34108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34109,meta34108__$1){
var self__ = this;
var _34109__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34107(meta34108__$1));
}));

(com.rpl.specter.t_com$rpl$specter34107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34109){
var self__ = this;
var _34109__$1 = this;
return self__.meta34108;
}));

(com.rpl.specter.t_com$rpl$specter34107.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34107.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter34107.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return com.rpl.specter.navs.all_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter34107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34108","meta34108",-1475752547,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34107.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34107.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34107");

(com.rpl.specter.t_com$rpl$specter34107.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34107");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34107.
 */
com.rpl.specter.__GT_t_com$rpl$specter34107 = (function com$rpl$specter$__GT_t_com$rpl$specter34107(meta34108){
return (new com.rpl.specter.t_com$rpl$specter34107(meta34108));
});




com.rpl.specter.ALL_select_STAR_ = (function com$rpl$specter$ALL_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_transform_STAR_ = (function com$rpl$specter$ALL_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_transform(structure,next_fn);
});

/**
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = (new com.rpl.specter.t_com$rpl$specter34107(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34112 = (function (meta34113){
this.meta34113 = meta34113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34114,meta34113__$1){
var self__ = this;
var _34114__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34112(meta34113__$1));
}));

(com.rpl.specter.t_com$rpl$specter34112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34114){
var self__ = this;
var _34114__$1 = this;
return self__.meta34113;
}));

(com.rpl.specter.t_com$rpl$specter34112.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34112.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter34112.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
}));

(com.rpl.specter.t_com$rpl$specter34112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34113","meta34113",-350726464,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34112.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34112.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34112");

(com.rpl.specter.t_com$rpl$specter34112.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34112");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34112.
 */
com.rpl.specter.__GT_t_com$rpl$specter34112 = (function com$rpl$specter$__GT_t_com$rpl$specter34112(meta34113){
return (new com.rpl.specter.t_com$rpl$specter34112(meta34113));
});




com.rpl.specter.ALL_WITH_META_select_STAR_ = (function com$rpl$specter$ALL_WITH_META_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_WITH_META_transform_STAR_ = (function com$rpl$specter$ALL_WITH_META_transform_STAR_(structure,next_fn){
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
});

/**
 * Same as ALL, except maintains metadata on the structure.
 */
com.rpl.specter.ALL_WITH_META = (new com.rpl.specter.t_com$rpl$specter34112(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34115 = (function (meta34116){
this.meta34116 = meta34116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34117,meta34116__$1){
var self__ = this;
var _34117__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34115(meta34116__$1));
}));

(com.rpl.specter.t_com$rpl$specter34115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34117){
var self__ = this;
var _34117__$1 = this;
return self__.meta34116;
}));

(com.rpl.specter.t_com$rpl$specter34115.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34115.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__29635__auto__,v){
var ret__29636__auto__ = next_fn(v);
if((ret__29636__auto__ === com.rpl.specter.NONE)){
return curr__29635__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__29636__auto__)){
return cljs.core.reduced(ret__29636__auto__);
} else {
return ret__29636__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
}));

(com.rpl.specter.t_com$rpl$specter34115.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter34115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34116","meta34116",-1424359723,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34115.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34115.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34115");

(com.rpl.specter.t_com$rpl$specter34115.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34115");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34115.
 */
com.rpl.specter.__GT_t_com$rpl$specter34115 = (function com$rpl$specter$__GT_t_com$rpl$specter34115(meta34116){
return (new com.rpl.specter.t_com$rpl$specter34115(meta34116));
});




com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__29635__auto__,v){
var ret__29636__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((ret__29636__auto__ === com.rpl.specter.NONE)){
return curr__29635__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__29636__auto__)){
return cljs.core.reduced(ret__29636__auto__);
} else {
return ret__29636__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
});

com.rpl.specter.MAP_VALS_transform_STAR_ = (function com$rpl$specter$MAP_VALS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
});

/**
 * Navigate to each value of the map. This is more efficient than
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = (new com.rpl.specter.t_com$rpl$specter34115(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34118 = (function (meta34119){
this.meta34119 = meta34119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34120,meta34119__$1){
var self__ = this;
var _34120__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34118(meta34119__$1));
}));

(com.rpl.specter.t_com$rpl$specter34118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34120){
var self__ = this;
var _34120__$1 = this;
return self__.meta34119;
}));

(com.rpl.specter.t_com$rpl$specter34118.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34118.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__29635__auto__,k){
var ret__29636__auto__ = next_fn(k);
if((ret__29636__auto__ === com.rpl.specter.NONE)){
return curr__29635__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__29636__auto__)){
return cljs.core.reduced(ret__29636__auto__);
} else {
return ret__29636__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
}));

(com.rpl.specter.t_com$rpl$specter34118.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter34118.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34119","meta34119",-1482079878,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34118.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34118.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34118");

(com.rpl.specter.t_com$rpl$specter34118.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34118");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34118.
 */
com.rpl.specter.__GT_t_com$rpl$specter34118 = (function com$rpl$specter$__GT_t_com$rpl$specter34118(meta34119){
return (new com.rpl.specter.t_com$rpl$specter34118(meta34119));
});




com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__29635__auto__,k){
var ret__29636__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((ret__29636__auto__ === com.rpl.specter.NONE)){
return curr__29635__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__29636__auto__)){
return cljs.core.reduced(ret__29636__auto__);
} else {
return ret__29636__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
});

com.rpl.specter.MAP_KEYS_transform_STAR_ = (function com$rpl$specter$MAP_KEYS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
});

/**
 * Navigate to each key of the map. This is more efficient than
 *        navigating via [ALL FIRST]
 */
com.rpl.specter.MAP_KEYS = (new com.rpl.specter.t_com$rpl$specter34118(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34121 = (function (meta34122){
this.meta34122 = meta34122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34123,meta34122__$1){
var self__ = this;
var _34123__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34121(meta34122__$1));
}));

(com.rpl.specter.t_com$rpl$specter34121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34123){
var self__ = this;
var _34123__$1 = this;
return self__.meta34122;
}));

(com.rpl.specter.t_com$rpl$specter34121.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34121.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__33066__auto__,vals__33067__auto__,structure,next_fn__33068__auto__){
var self__ = this;
var this__33066__auto____$1 = this;
var G__34124 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__33067__auto__,structure);
var G__34125 = structure;
return (next_fn__33068__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__33068__auto__.cljs$core$IFn$_invoke$arity$2(G__34124,G__34125) : next_fn__33068__auto__.call(null,G__34124,G__34125));
}));

(com.rpl.specter.t_com$rpl$specter34121.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__33066__auto__,vals__33067__auto__,structure,next_fn__33068__auto__){
var self__ = this;
var this__33066__auto____$1 = this;
var G__34126 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__33067__auto__,structure);
var G__34127 = structure;
return (next_fn__33068__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__33068__auto__.cljs$core$IFn$_invoke$arity$2(G__34126,G__34127) : next_fn__33068__auto__.call(null,G__34126,G__34127));
}));

(com.rpl.specter.t_com$rpl$specter34121.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34122","meta34122",-1376692862,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34121.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34121.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34121");

(com.rpl.specter.t_com$rpl$specter34121.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34121");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34121.
 */
com.rpl.specter.__GT_t_com$rpl$specter34121 = (function com$rpl$specter$__GT_t_com$rpl$specter34121(meta34122){
return (new com.rpl.specter.t_com$rpl$specter34121(meta34122));
});


com.rpl.specter.VAL = (new com.rpl.specter.t_com$rpl$specter34121(null));
/**
 * Navigate to the last element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.LAST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last));
/**
 * Navigate to the first element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.FIRST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34132 = (function (start_index_fn,end_index_fn,meta34133){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta34133 = meta34133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34134,meta34133__$1){
var self__ = this;
var _34134__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34132(self__.start_index_fn,self__.end_index_fn,meta34133__$1));
}));

(com.rpl.specter.t_com$rpl$specter34132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34134){
var self__ = this;
var _34134__$1 = this;
return self__.meta34133;
}));

(com.rpl.specter.t_com$rpl$specter34132.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34132.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter34132.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
var G__34135 = structure;
var G__34136 = s;
var G__34137 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__34138 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__34135,G__34136,G__34137,G__34138) : com.rpl.specter.navs.srange_transform.call(null,G__34135,G__34136,G__34137,G__34138));
}));

(com.rpl.specter.t_com$rpl$specter34132.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta34133","meta34133",-406303940,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34132.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34132.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34132");

(com.rpl.specter.t_com$rpl$specter34132.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34132");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34132.
 */
com.rpl.specter.__GT_t_com$rpl$specter34132 = (function com$rpl$specter$__GT_t_com$rpl$specter34132(start_index_fn,end_index_fn,meta34133){
return (new com.rpl.specter.t_com$rpl$specter34132(start_index_fn,end_index_fn,meta34133));
});




com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
var G__34128 = structure;
var G__34129 = s;
var G__34130 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__34131 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__34128,G__34129,G__34130,G__34131) : com.rpl.specter.navs.srange_transform.call(null,G__34128,G__34129,G__34130,G__34131));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
return (new com.rpl.specter.t_com$rpl$specter34132(start_index_fn,end_index_fn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34139 = (function (start,end,meta34140){
this.start = start;
this.end = end;
this.meta34140 = meta34140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34141,meta34140__$1){
var self__ = this;
var _34141__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34139(self__.start,self__.end,meta34140__$1));
}));

(com.rpl.specter.t_com$rpl$specter34139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34141){
var self__ = this;
var _34141__$1 = this;
return self__.meta34140;
}));

(com.rpl.specter.t_com$rpl$specter34139.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34139.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter34139.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn));
}));

(com.rpl.specter.t_com$rpl$specter34139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta34140","meta34140",-1305135734,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34139.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34139.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34139");

(com.rpl.specter.t_com$rpl$specter34139.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34139");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34139.
 */
com.rpl.specter.__GT_t_com$rpl$specter34139 = (function com$rpl$specter$__GT_t_com$rpl$specter34139(start,end,meta34140){
return (new com.rpl.specter.t_com$rpl$specter34139(start,end,meta34140));
});




com.rpl.specter.srange_select_STAR_ = (function com$rpl$specter$srange_select_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_select(structure,start,end,next_fn);
});

com.rpl.specter.srange_transform_STAR_ = (function com$rpl$specter$srange_transform_STAR_(start,end,structure,next_fn){
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,start,end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,start,end,next_fn));
});

/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.direct_nav_obj((function (start,end){
return (new com.rpl.specter.t_com$rpl$specter34139(start,end,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34146 = (function (pred,meta34147){
this.pred = pred;
this.meta34147 = meta34147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34148,meta34147__$1){
var self__ = this;
var _34148__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34146(self__.pred,meta34147__$1));
}));

(com.rpl.specter.t_com$rpl$specter34146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34148){
var self__ = this;
var _34148__$1 = this;
return self__.meta34147;
}));

(com.rpl.specter.t_com$rpl$specter34146.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34146.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__29635__auto__,p__34149){
var vec__34150 = p__34149;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34150,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34150,(1),null);
var ret__29636__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__29636__auto__ === com.rpl.specter.NONE)){
return curr__29635__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__29636__auto__)){
return cljs.core.reduced(ret__29636__auto__);
} else {
return ret__29636__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,self__.pred));
}));

(com.rpl.specter.t_com$rpl$specter34146.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter34146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta34147","meta34147",-792472468,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34146.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34146.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34146");

(com.rpl.specter.t_com$rpl$specter34146.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34146");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34146.
 */
com.rpl.specter.__GT_t_com$rpl$specter34146 = (function com$rpl$specter$__GT_t_com$rpl$specter34146(pred,meta34147){
return (new com.rpl.specter.t_com$rpl$specter34146(pred,meta34147));
});




com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__29635__auto__,p__34142){
var vec__34143 = p__34142;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34143,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34143,(1),null);
var ret__29636__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__29636__auto__ === com.rpl.specter.NONE)){
return curr__29635__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__29636__auto__)){
return cljs.core.reduced(ret__29636__auto__);
} else {
return ret__29636__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,pred));
});

com.rpl.specter.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(pred,structure,next_fn);
});

/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.direct_nav_obj((function (pred){
return (new com.rpl.specter.t_com$rpl$specter34146(pred,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34155 = (function (meta34156){
this.meta34156 = meta34156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34157,meta34156__$1){
var self__ = this;
var _34157__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34155(meta34156__$1));
}));

(com.rpl.specter.t_com$rpl$specter34155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34157){
var self__ = this;
var _34157__$1 = this;
return self__.meta34156;
}));

(com.rpl.specter.t_com$rpl$specter34155.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34155.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter34155.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn("")),structure].join('');
} else {
var to_prepend = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
}));

(com.rpl.specter.t_com$rpl$specter34155.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34156","meta34156",-644150852,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34155.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34155.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34155");

(com.rpl.specter.t_com$rpl$specter34155.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34155");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34155.
 */
com.rpl.specter.__GT_t_com$rpl$specter34155 = (function com$rpl$specter$__GT_t_com$rpl$specter34155(meta34156){
return (new com.rpl.specter.t_com$rpl$specter34155(meta34156));
});




com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__34153 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__34153) : next_fn.call(null,G__34153));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,""))),structure].join('');
} else {
var to_prepend = (function (){var G__34154 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__34154) : next_fn.call(null,G__34154));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (new com.rpl.specter.t_com$rpl$specter34155(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34160 = (function (meta34161){
this.meta34161 = meta34161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34162,meta34161__$1){
var self__ = this;
var _34162__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34160(meta34161__$1));
}));

(com.rpl.specter.t_com$rpl$specter34160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34162){
var self__ = this;
var _34162__$1 = this;
return self__.meta34161;
}));

(com.rpl.specter.t_com$rpl$specter34160.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34160.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter34160.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn(""))].join('');
} else {
var to_append = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all(structure,to_append);
}
}));

(com.rpl.specter.t_com$rpl$specter34160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34161","meta34161",1925764649,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34160.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34160.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34160");

(com.rpl.specter.t_com$rpl$specter34160.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34160");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34160.
 */
com.rpl.specter.__GT_t_com$rpl$specter34160 = (function com$rpl$specter$__GT_t_com$rpl$specter34160(meta34161){
return (new com.rpl.specter.t_com$rpl$specter34160(meta34161));
});




com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__34158 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__34158) : next_fn.call(null,G__34158));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,"")))].join('');
} else {
var to_append = (function (){var G__34159 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__34159) : next_fn.call(null,G__34159));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (new com.rpl.specter.t_com$rpl$specter34160(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34163 = (function (meta34164){
this.meta34164 = meta34164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34165,meta34164__$1){
var self__ = this;
var _34165__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34163(meta34164__$1));
}));

(com.rpl.specter.t_com$rpl$specter34163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34165){
var self__ = this;
var _34165__$1 = this;
return self__.meta34164;
}));

(com.rpl.specter.t_com$rpl$specter34163.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34163.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter34163.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
}));

(com.rpl.specter.t_com$rpl$specter34163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34164","meta34164",-1868565816,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34163.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34163.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34163");

(com.rpl.specter.t_com$rpl$specter34163.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34163");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34163.
 */
com.rpl.specter.__GT_t_com$rpl$specter34163 = (function com$rpl$specter$__GT_t_com$rpl$specter34163(meta34164){
return (new com.rpl.specter.t_com$rpl$specter34163(meta34164));
});




com.rpl.specter.NONE_ELEM_select_STAR_ = (function com$rpl$specter$NONE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.NONE_ELEM_transform_STAR_ = (function com$rpl$specter$NONE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
});

/**
 * Navigate to 'void' elem in the set.
 *        For transformations - if result is not `NONE`,
 *        then add that value to the set.
 */
com.rpl.specter.NONE_ELEM = (new com.rpl.specter.t_com$rpl$specter34163(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34166 = (function (meta34167){
this.meta34167 = meta34167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34168,meta34167__$1){
var self__ = this;
var _34168__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34166(meta34167__$1));
}));

(com.rpl.specter.t_com$rpl$specter34166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34168){
var self__ = this;
var _34168__$1 = this;
return self__.meta34167;
}));

(com.rpl.specter.t_com$rpl$specter34166.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34166.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter34166.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter34166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34167","meta34167",813629785,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34166.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34166.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34166");

(com.rpl.specter.t_com$rpl$specter34166.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34166");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34166.
 */
com.rpl.specter.__GT_t_com$rpl$specter34166 = (function com$rpl$specter$__GT_t_com$rpl$specter34166(meta34167){
return (new com.rpl.specter.t_com$rpl$specter34166(meta34167));
});




com.rpl.specter.BEFORE_ELEM_select_STAR_ = (function com$rpl$specter$BEFORE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.BEFORE_ELEM_transform_STAR_ = (function com$rpl$specter$BEFORE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
});

/**
 * Navigate to 'void' element before the sequence.
 *        For transformations – if result is not `NONE`,
 *        then prepend that value.
 */
com.rpl.specter.BEFORE_ELEM = (new com.rpl.specter.t_com$rpl$specter34166(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34169 = (function (meta34170){
this.meta34170 = meta34170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34171,meta34170__$1){
var self__ = this;
var _34171__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34169(meta34170__$1));
}));

(com.rpl.specter.t_com$rpl$specter34169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34171){
var self__ = this;
var _34171__$1 = this;
return self__.meta34170;
}));

(com.rpl.specter.t_com$rpl$specter34169.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34169.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter34169.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter34169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34170","meta34170",-630624044,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34169.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34169.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34169");

(com.rpl.specter.t_com$rpl$specter34169.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34169");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34169.
 */
com.rpl.specter.__GT_t_com$rpl$specter34169 = (function com$rpl$specter$__GT_t_com$rpl$specter34169(meta34170){
return (new com.rpl.specter.t_com$rpl$specter34169(meta34170));
});




com.rpl.specter.AFTER_ELEM_select_STAR_ = (function com$rpl$specter$AFTER_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.AFTER_ELEM_transform_STAR_ = (function com$rpl$specter$AFTER_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
});

/**
 * Navigate to 'void' element after the sequence.
 *        For transformations – if result is not `NONE`,
 *        then append that value.
 */
com.rpl.specter.AFTER_ELEM = (new com.rpl.specter.t_com$rpl$specter34169(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34173 = (function (aset,meta34174){
this.aset = aset;
this.meta34174 = meta34174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34175,meta34174__$1){
var self__ = this;
var _34175__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34173(self__.aset,meta34174__$1));
}));

(com.rpl.specter.t_com$rpl$specter34173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34175){
var self__ = this;
var _34175__$1 = this;
return self__.meta34174;
}));

(com.rpl.specter.t_com$rpl$specter34173.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34173.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
}));

(com.rpl.specter.t_com$rpl$specter34173.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset);
var newset = next_fn(subset);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
}));

(com.rpl.specter.t_com$rpl$specter34173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta34174","meta34174",1589288616,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34173.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34173.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34173");

(com.rpl.specter.t_com$rpl$specter34173.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34173");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34173.
 */
com.rpl.specter.__GT_t_com$rpl$specter34173 = (function com$rpl$specter$__GT_t_com$rpl$specter34173(aset,meta34174){
return (new com.rpl.specter.t_com$rpl$specter34173(aset,meta34174));
});




com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__34172 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__34172) : next_fn.call(null,G__34172));
});

com.rpl.specter.subset_transform_STAR_ = (function com$rpl$specter$subset_transform_STAR_(aset,structure,next_fn){
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
var newset = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(subset) : next_fn.call(null,subset));
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
});

/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.direct_nav_obj((function (aset){
return (new com.rpl.specter.t_com$rpl$specter34173(aset,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34177 = (function (m_keys,meta34178){
this.m_keys = m_keys;
this.meta34178 = meta34178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34179,meta34178__$1){
var self__ = this;
var _34179__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34177(self__.m_keys,meta34178__$1));
}));

(com.rpl.specter.t_com$rpl$specter34177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34179){
var self__ = this;
var _34179__$1 = this;
return self__.meta34178;
}));

(com.rpl.specter.t_com$rpl$specter34177.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34177.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
}));

(com.rpl.specter.t_com$rpl$specter34177.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
var submap = cljs.core.select_keys(structure,self__.m_keys);
var newmap = next_fn(submap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,self__.m_keys),newmap], 0));
}));

(com.rpl.specter.t_com$rpl$specter34177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta34178","meta34178",-714569336,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34177.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34177.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34177");

(com.rpl.specter.t_com$rpl$specter34177.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34177");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34177.
 */
com.rpl.specter.__GT_t_com$rpl$specter34177 = (function com$rpl$specter$__GT_t_com$rpl$specter34177(m_keys,meta34178){
return (new com.rpl.specter.t_com$rpl$specter34177(m_keys,meta34178));
});




com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__34176 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__34176) : next_fn.call(null,G__34176));
});

com.rpl.specter.submap_transform_STAR_ = (function com$rpl$specter$submap_transform_STAR_(m_keys,structure,next_fn){
var submap = cljs.core.select_keys(structure,m_keys);
var newmap = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(submap) : next_fn.call(null,submap));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,m_keys),newmap], 0));
});

/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.direct_nav_obj((function (m_keys){
return (new com.rpl.specter.t_com$rpl$specter34177(m_keys,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34180 = (function (path,late,meta34181){
this.path = path;
this.late = late;
this.meta34181 = meta34181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34182,meta34181__$1){
var self__ = this;
var _34182__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34180(self__.path,self__.late,meta34181__$1));
}));

(com.rpl.specter.t_com$rpl$specter34180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34182){
var self__ = this;
var _34182__$1 = this;
return self__.meta34181;
}));

(com.rpl.specter.t_com$rpl$specter34180.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34180.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter34180.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
var select_result = (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure));
var transformed = next_fn(select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(transformed));
var G__34183 = self__.late;
var G__34184 = (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});
var G__34185 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__34183,G__34184,G__34185) : com.rpl.specter.compiled_transform.call(null,G__34183,G__34184,G__34185));
}));

(com.rpl.specter.t_com$rpl$specter34180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta34181","meta34181",-598106893,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34180.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34180.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34180");

(com.rpl.specter.t_com$rpl$specter34180.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34180");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34180.
 */
com.rpl.specter.__GT_t_com$rpl$specter34180 = (function com$rpl$specter$__GT_t_com$rpl$specter34180(path,late,meta34181){
return (new com.rpl.specter.t_com$rpl$specter34180(path,late,meta34181));
});


/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 * 
 *   If transformed sequence is smaller than input sequence, missing entries
 *   will be filled in with NONE, triggering removal if supported by that navigator.
 * 
 *   Value collection (e.g. collect, collect-one) may not be used in the subpath.
 */
com.rpl.specter.subselect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__34389__delegate = function (path){
var builder__33069__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter34180(path,late,null));
}));
var curr_params__33070__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__33070__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__33069__auto__,curr_params__33070__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__33069__auto__,curr_params__33070__auto__,null);
}
};
var G__34389 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__34390__i = 0, G__34390__a = new Array(arguments.length -  0);
while (G__34390__i < G__34390__a.length) {G__34390__a[G__34390__i] = arguments[G__34390__i + 0]; ++G__34390__i;}
  path = new cljs.core.IndexedSeq(G__34390__a,0,null);
} 
return G__34389__delegate.call(this,path);};
G__34389.cljs$lang$maxFixedArity = 0;
G__34389.cljs$lang$applyTo = (function (arglist__34391){
var path = cljs.core.seq(arglist__34391);
return G__34389__delegate(path);
});
G__34389.cljs$core$IFn$_invoke$arity$variadic = G__34389__delegate;
return G__34389;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34186 = (function (key,meta34187){
this.key = key;
this.meta34187 = meta34187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34188,meta34187__$1){
var self__ = this;
var _34188__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34186(self__.key,meta34187__$1));
}));

(com.rpl.specter.t_com$rpl$specter34186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34188){
var self__ = this;
var _34188__$1 = this;
return self__.meta34187;
}));

(com.rpl.specter.t_com$rpl$specter34186.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34186.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter34186.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
var newkey = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
var dissoced = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(structure,self__.key);
if((com.rpl.specter.NONE === newkey)){
return dissoced;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dissoced,newkey,cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.key));
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter34186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta34187","meta34187",-942155076,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34186.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34186.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34186");

(com.rpl.specter.t_com$rpl$specter34186.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34186");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34186.
 */
com.rpl.specter.__GT_t_com$rpl$specter34186 = (function com$rpl$specter$__GT_t_com$rpl$specter34186(key,meta34187){
return (new com.rpl.specter.t_com$rpl$specter34186(key,meta34187));
});


/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
return (new com.rpl.specter.t_com$rpl$specter34186(key,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34189 = (function (elem,meta34190){
this.elem = elem;
this.meta34190 = meta34190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34191,meta34190__$1){
var self__ = this;
var _34191__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34189(self__.elem,meta34190__$1));
}));

(com.rpl.specter.t_com$rpl$specter34189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34191){
var self__ = this;
var _34191__$1 = this;
return self__.meta34190;
}));

(com.rpl.specter.t_com$rpl$specter34189.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34189.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter34189.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
var newelem = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
var removed = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(structure,self__.elem);
if((com.rpl.specter.NONE === newelem)){
return removed;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(removed,newelem);
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter34189.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta34190","meta34190",-649768901,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34189.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34189.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34189");

(com.rpl.specter.t_com$rpl$specter34189.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34189");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34189.
 */
com.rpl.specter.__GT_t_com$rpl$specter34189 = (function com$rpl$specter$__GT_t_com$rpl$specter34189(elem,meta34190){
return (new com.rpl.specter.t_com$rpl$specter34189(elem,meta34190));
});


/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
return (new com.rpl.specter.t_com$rpl$specter34189(elem,null));
}));
/**
 * Navigate to the specified keys one after another. If navigate to NONE,
 *           that element is removed from the map or vector.
 */
com.rpl.specter.keypath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.keypath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_));
/**
 * Navigate to the specified keys one after another, only if they exist
 *           in the data structure. If navigate to NONE, that element is removed
 *           from the map or vector.
 */
com.rpl.specter.must = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.must_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_));
/**
 * Navigate to the specified indices one after another. If navigate to
 *          NONE, that element is removed from the sequence.
 */
com.rpl.specter.nthpath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.nthpath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.nthpath_STAR_));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34192 = (function (index,meta34193){
this.index = index;
this.meta34193 = meta34193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34194,meta34193__$1){
var self__ = this;
var _34194__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34192(self__.index,meta34193__$1));
}));

(com.rpl.specter.t_com$rpl$specter34192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34194){
var self__ = this;
var _34194__$1 = this;
return self__.meta34193;
}));

(com.rpl.specter.t_com$rpl$specter34192.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34192.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter34192.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,com.rpl.specter.NONE) : next_fn.call(null,vals,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.navs.insert_before_idx(structure,self__.index,v);
}
}));

(com.rpl.specter.t_com$rpl$specter34192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta34193","meta34193",-813471741,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34192.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34192.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34192");

(com.rpl.specter.t_com$rpl$specter34192.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34192");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34192.
 */
com.rpl.specter.__GT_t_com$rpl$specter34192 = (function com$rpl$specter$__GT_t_com$rpl$specter34192(index,meta34193){
return (new com.rpl.specter.t_com$rpl$specter34192(index,meta34193));
});


/**
 * Navigates to the empty space between the index and the prior index. For select
 *        navigates to NONE, and transforms to non-NONE insert at that position.
 */
com.rpl.specter.before_index = com.rpl.specter.impl.direct_nav_obj((function (index){
return (new com.rpl.specter.t_com$rpl$specter34192(index,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34195 = (function (i,meta34196){
this.i = i;
this.meta34196 = meta34196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34197,meta34196__$1){
var self__ = this;
var _34197__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34195(self__.i,meta34196__$1));
}));

(com.rpl.specter.t_com$rpl$specter34195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34197){
var self__ = this;
var _34197__$1 = this;
return self__.meta34196;
}));

(com.rpl.specter.t_com$rpl$specter34195.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34195.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter34195.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
var newi = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(newi,self__.i)){
return structure;
} else {
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
if(cljs.core.vector_QMARK_(structure)){
var shifted = (((newi < self__.i))?(function (){var j = (self__.i - (1));
var s = structure;
while(true){
if((j < newi)){
return s;
} else {
var G__34392 = (j - (1));
var G__34393 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__34392;
s = G__34393;
continue;
}
break;
}
})():(function (){var j = (self__.i + (1));
var s = structure;
while(true){
if((j > newi)){
return s;
} else {
var G__34394 = (j + (1));
var G__34395 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j - (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__34394;
s = G__34395;
continue;
}
break;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__33076__auto__ = com.rpl.specter.pathcache34198;
var info__33076__auto____$1 = (((info__33076__auto__ == null))?(function (){var info34199 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"com/rpl/specter.cljc",15,1,1004,1007,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache34198 = info34199;

return info34199;
})():info__33076__auto__);
var precompiled34200 = com.rpl.specter.impl.cached_path_info_precompiled(info__33076__auto____$1);
var dynamic_QMARK___33077__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__33076__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___33077__auto__)){
var G__34201 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null);
return (precompiled34200.cljs$core$IFn$_invoke$arity$1 ? precompiled34200.cljs$core$IFn$_invoke$arity$1(G__34201) : precompiled34200.call(null,G__34201));
} else {
return precompiled34200;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__33076__auto__ = com.rpl.specter.pathcache34202;
var info__33076__auto____$1 = (((info__33076__auto__ == null))?(function (){var info34203 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,999,1001,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache34202 = info34203;

return info34203;
})():info__33076__auto__);
var precompiled34204 = com.rpl.specter.impl.cached_path_info_precompiled(info__33076__auto____$1);
var dynamic_QMARK___33077__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__33076__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___33077__auto__)){
var G__34205 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null);
return (precompiled34204.cljs$core$IFn$_invoke$arity$1 ? precompiled34204.cljs$core$IFn$_invoke$arity$1(G__34205) : precompiled34204.call(null,G__34205));
} else {
return precompiled34204;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter34195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta34196","meta34196",-1363812980,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34195.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34195.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34195");

(com.rpl.specter.t_com$rpl$specter34195.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34195");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34195.
 */
com.rpl.specter.__GT_t_com$rpl$specter34195 = (function com$rpl$specter$__GT_t_com$rpl$specter34195(i,meta34196){
return (new com.rpl.specter.t_com$rpl$specter34195(i,meta34196));
});


/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj((function (i){
return (new com.rpl.specter.t_com$rpl$specter34195(i,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34225 = (function (start,meta34226){
this.start = start;
this.meta34226 = meta34226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34227,meta34226__$1){
var self__ = this;
var _34227__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34225(self__.start,meta34226__$1));
}));

(com.rpl.specter.t_com$rpl$specter34225.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34227){
var self__ = this;
var _34227__$1 = this;
return self__.meta34226;
}));

(com.rpl.specter.t_com$rpl$specter34225.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34225.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((self__.start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__29635__auto__,e){
var ret__29636__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

return next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null));
})()
;
if((ret__29636__auto__ === com.rpl.specter.NONE)){
return curr__29635__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__29636__auto__)){
return cljs.core.reduced(ret__29636__auto__);
} else {
return ret__29636__auto__;
}
}
}),com.rpl.specter.NONE,structure);
}));

(com.rpl.specter.t_com$rpl$specter34225.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__34228 = next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34228,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34228,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__33076__auto__ = com.rpl.specter.pathcache34231;
var info__33076__auto____$1 = (((info__33076__auto__ == null))?(function (){var info34232 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,715,718,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__34206_SHARP_){
return (p1__34206_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34206#","p1__34206#",-214382144,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__34206#","p1__34206#",-214382144,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__34207_SHARP_){
return (p1__34207_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34207#","p1__34207#",-1786664213,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__34207#","p1__34207#",-1786664213,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34206#","p1__34206#",-214382144,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__34206#","p1__34206#",-214382144,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34207#","p1__34207#",-1786664213,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__34207#","p1__34207#",-1786664213,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34206#","p1__34206#",-214382144,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__34206#","p1__34206#",-214382144,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34207#","p1__34207#",-1786664213,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__34207#","p1__34207#",-1786664213,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache34231 = info34232;

return info34232;
})():info__33076__auto__);
var precompiled34233 = com.rpl.specter.impl.cached_path_info_precompiled(info__33076__auto____$1);
var dynamic_QMARK___33077__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__33076__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___33077__auto__)){
var G__34234 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__34206_SHARP_){
return (p1__34206_SHARP_ >= (curri + (1)));
}),(function (p1__34207_SHARP_){
return (p1__34207_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__34206_SHARP_){
return (p1__34206_SHARP_ >= (curri + (1)));
}),(function (p1__34207_SHARP_){
return (p1__34207_SHARP_ <= newi);
})], null);
return (precompiled34233.cljs$core$IFn$_invoke$arity$1 ? precompiled34233.cljs$core$IFn$_invoke$arity$1(G__34234) : precompiled34233.call(null,G__34234));
} else {
return precompiled34233;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__33076__auto__ = com.rpl.specter.pathcache34235;
var info__33076__auto____$1 = (((info__33076__auto__ == null))?(function (){var info34236 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,1018,1021,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache34235 = info34236;

return info34236;
})():info__33076__auto__);
var precompiled34237 = com.rpl.specter.impl.cached_path_info_precompiled(info__33076__auto____$1);
var dynamic_QMARK___33077__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__33076__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___33077__auto__)){
var G__34238 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled34237.cljs$core$IFn$_invoke$arity$1 ? precompiled34237.cljs$core$IFn$_invoke$arity$1(G__34238) : precompiled34237.call(null,G__34238));
} else {
return precompiled34237;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__33076__auto__ = com.rpl.specter.pathcache34239;
var info__33076__auto____$1 = (((info__33076__auto__ == null))?(function (){var info34240 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,999,1001,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache34239 = info34240;

return info34240;
})():info__33076__auto__);
var precompiled34241 = com.rpl.specter.impl.cached_path_info_precompiled(info__33076__auto____$1);
var dynamic_QMARK___33077__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__33076__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___33077__auto__)){
var G__34242 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled34241.cljs$core$IFn$_invoke$arity$1 ? precompiled34241.cljs$core$IFn$_invoke$arity$1(G__34242) : precompiled34241.call(null,G__34242));
} else {
return precompiled34241;
}
})(),newe,s));
}),structure,structure);
}));

(com.rpl.specter.t_com$rpl$specter34225.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta34226","meta34226",-2010856599,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34225.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34225.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34225");

(com.rpl.specter.t_com$rpl$specter34225.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34225");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34225.
 */
com.rpl.specter.__GT_t_com$rpl$specter34225 = (function com$rpl$specter$__GT_t_com$rpl$specter34225(start,meta34226){
return (new com.rpl.specter.t_com$rpl$specter34225(start,meta34226));
});




com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__29635__auto__,e){
var ret__29636__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

var G__34208 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__34208) : next_fn.call(null,G__34208));
})()
;
if((ret__29636__auto__ === com.rpl.specter.NONE)){
return curr__29635__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__29636__auto__)){
return cljs.core.reduced(ret__29636__auto__);
} else {
return ret__29636__auto__;
}
}
}),com.rpl.specter.NONE,structure);
});

com.rpl.specter.indexed_vals_transform_STAR_ = (function com$rpl$specter$indexed_vals_transform_STAR_(start,structure,next_fn){
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__34209 = (function (){var G__34212 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__34212) : next_fn.call(null,G__34212));
})();
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34209,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34209,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__33076__auto__ = com.rpl.specter.pathcache34213;
var info__33076__auto____$1 = (((info__33076__auto__ == null))?(function (){var info34214 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,715,718,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__34206_SHARP_){
return (p1__34206_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34206#","p1__34206#",-214382144,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__34206#","p1__34206#",-214382144,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__34207_SHARP_){
return (p1__34207_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34207#","p1__34207#",-1786664213,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__34207#","p1__34207#",-1786664213,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34206#","p1__34206#",-214382144,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__34206#","p1__34206#",-214382144,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34207#","p1__34207#",-1786664213,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__34207#","p1__34207#",-1786664213,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34206#","p1__34206#",-214382144,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__34206#","p1__34206#",-214382144,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34207#","p1__34207#",-1786664213,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__34207#","p1__34207#",-1786664213,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache34213 = info34214;

return info34214;
})():info__33076__auto__);
var precompiled34215 = com.rpl.specter.impl.cached_path_info_precompiled(info__33076__auto____$1);
var dynamic_QMARK___33077__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__33076__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___33077__auto__)){
var G__34216 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__34206_SHARP_){
return (p1__34206_SHARP_ >= (curri + (1)));
}),(function (p1__34207_SHARP_){
return (p1__34207_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__34206_SHARP_){
return (p1__34206_SHARP_ >= (curri + (1)));
}),(function (p1__34207_SHARP_){
return (p1__34207_SHARP_ <= newi);
})], null);
return (precompiled34215.cljs$core$IFn$_invoke$arity$1 ? precompiled34215.cljs$core$IFn$_invoke$arity$1(G__34216) : precompiled34215.call(null,G__34216));
} else {
return precompiled34215;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__33076__auto__ = com.rpl.specter.pathcache34217;
var info__33076__auto____$1 = (((info__33076__auto__ == null))?(function (){var info34218 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,1018,1021,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache34217 = info34218;

return info34218;
})():info__33076__auto__);
var precompiled34219 = com.rpl.specter.impl.cached_path_info_precompiled(info__33076__auto____$1);
var dynamic_QMARK___33077__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__33076__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___33077__auto__)){
var G__34220 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled34219.cljs$core$IFn$_invoke$arity$1 ? precompiled34219.cljs$core$IFn$_invoke$arity$1(G__34220) : precompiled34219.call(null,G__34220));
} else {
return precompiled34219;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__33076__auto__ = com.rpl.specter.pathcache34221;
var info__33076__auto____$1 = (((info__33076__auto__ == null))?(function (){var info34222 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,999,1001,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache34221 = info34222;

return info34222;
})():info__33076__auto__);
var precompiled34223 = com.rpl.specter.impl.cached_path_info_precompiled(info__33076__auto____$1);
var dynamic_QMARK___33077__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__33076__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___33077__auto__)){
var G__34224 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled34223.cljs$core$IFn$_invoke$arity$1 ? precompiled34223.cljs$core$IFn$_invoke$arity$1(G__34224) : precompiled34223.call(null,G__34224));
} else {
return precompiled34223;
}
})(),newe,s));
}),structure,structure);
});

/**
 * Navigate to [index elem] pairs for each element in a sequence. The sequence will be indexed
 *        starting from `start`. Changing index in transform has same effect as `index-nav`. Indices seen
 *        during transform take into account any shifting from prior sequence elements changing indices.
 */
com.rpl.specter.indexed_vals = com.rpl.specter.impl.direct_nav_obj((function (start){
return (new com.rpl.specter.t_com$rpl$specter34225(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = (com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1((0)) : com.rpl.specter.indexed_vals.call(null,(0)));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34243 = (function (afn,meta34244){
this.afn = afn;
this.meta34244 = meta34244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34245,meta34244__$1){
var self__ = this;
var _34245__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34243(self__.afn,meta34244__$1));
}));

(com.rpl.specter.t_com$rpl$specter34243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34245){
var self__ = this;
var _34245__$1 = this;
return self__.meta34244;
}));

(com.rpl.specter.t_com$rpl$specter34243.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34243.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__34246 = vals;
var G__34247 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__34246,G__34247) : next_fn.call(null,G__34246,G__34247));
}));

(com.rpl.specter.t_com$rpl$specter34243.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__34248 = vals;
var G__34249 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__34248,G__34249) : next_fn.call(null,G__34248,G__34249));
}));

(com.rpl.specter.t_com$rpl$specter34243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta34244","meta34244",-1594384478,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34243.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34243.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34243");

(com.rpl.specter.t_com$rpl$specter34243.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34243");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34243.
 */
com.rpl.specter.__GT_t_com$rpl$specter34243 = (function com$rpl$specter$__GT_t_com$rpl$specter34243(afn,meta34244){
return (new com.rpl.specter.t_com$rpl$specter34243(afn,meta34244));
});


/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
return (new com.rpl.specter.t_com$rpl$specter34243(afn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34253 = (function (parse_fn,unparse_fn,meta34254){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta34254 = meta34254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34255,meta34254__$1){
var self__ = this;
var _34255__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34253(self__.parse_fn,self__.unparse_fn,meta34254__$1));
}));

(com.rpl.specter.t_com$rpl$specter34253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34255){
var self__ = this;
var _34255__$1 = this;
return self__.meta34254;
}));

(com.rpl.specter.t_com$rpl$specter34253.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34253.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
}));

(com.rpl.specter.t_com$rpl$specter34253.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
var G__34256 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__34256) : self__.unparse_fn.call(null,G__34256));
}));

(com.rpl.specter.t_com$rpl$specter34253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta34254","meta34254",-1770146121,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34253.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34253.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34253");

(com.rpl.specter.t_com$rpl$specter34253.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34253");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34253.
 */
com.rpl.specter.__GT_t_com$rpl$specter34253 = (function com$rpl$specter$__GT_t_com$rpl$specter34253(parse_fn,unparse_fn,meta34254){
return (new com.rpl.specter.t_com$rpl$specter34253(parse_fn,unparse_fn,meta34254));
});




com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__34250 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__34250) : next_fn.call(null,G__34250));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__34251 = (function (){var G__34252 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__34252) : next_fn.call(null,G__34252));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__34251) : unparse_fn.call(null,G__34251));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
return (new com.rpl.specter.t_com$rpl$specter34253(parse_fn,unparse_fn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34258 = (function (meta34259){
this.meta34259 = meta34259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34260,meta34259__$1){
var self__ = this;
var _34260__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34258(meta34259__$1));
}));

(com.rpl.specter.t_com$rpl$specter34258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34260){
var self__ = this;
var _34260__$1 = this;
return self__.meta34259;
}));

(com.rpl.specter.t_com$rpl$specter34258.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34258.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return next_fn(cljs.core.deref(structure));
}));

(com.rpl.specter.t_com$rpl$specter34258.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
}));

(com.rpl.specter.t_com$rpl$specter34258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34259","meta34259",519194118,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34258.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34258.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34258");

(com.rpl.specter.t_com$rpl$specter34258.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34258");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34258.
 */
com.rpl.specter.__GT_t_com$rpl$specter34258 = (function com$rpl$specter$__GT_t_com$rpl$specter34258(meta34259){
return (new com.rpl.specter.t_com$rpl$specter34258(meta34259));
});




com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__34257 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__34257) : next_fn.call(null,G__34257));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (new com.rpl.specter.t_com$rpl$specter34258(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34261 = (function (re,meta34262){
this.re = re;
this.meta34262 = meta34262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34263,meta34262__$1){
var self__ = this;
var _34263__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34261(self__.re,meta34262__$1));
}));

(com.rpl.specter.t_com$rpl$specter34261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34263){
var self__ = this;
var _34263__$1 = this;
return self__.meta34262;
}));

(com.rpl.specter.t_com$rpl$specter34261.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34261.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__29635__auto__,s){
var ret__29636__auto__ = next_fn(s);
if((ret__29636__auto__ === com.rpl.specter.NONE)){
return curr__29635__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__29636__auto__)){
return cljs.core.reduced(ret__29636__auto__);
} else {
return ret__29636__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(self__.re,structure));
}));

(com.rpl.specter.t_com$rpl$specter34261.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return clojure.string.replace(structure,self__.re,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter34261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta34262","meta34262",1220401395,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34261.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34261.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34261");

(com.rpl.specter.t_com$rpl$specter34261.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34261");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34261.
 */
com.rpl.specter.__GT_t_com$rpl$specter34261 = (function com$rpl$specter$__GT_t_com$rpl$specter34261(re,meta34262){
return (new com.rpl.specter.t_com$rpl$specter34261(re,meta34262));
});




com.rpl.specter.regex_nav_select_STAR_ = (function com$rpl$specter$regex_nav_select_STAR_(re,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__29635__auto__,s){
var ret__29636__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(s) : next_fn.call(null,s));
if((ret__29636__auto__ === com.rpl.specter.NONE)){
return curr__29635__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__29636__auto__)){
return cljs.core.reduced(ret__29636__auto__);
} else {
return ret__29636__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(re,structure));
});

com.rpl.specter.regex_nav_transform_STAR_ = (function com$rpl$specter$regex_nav_transform_STAR_(re,structure,next_fn){
return clojure.string.replace(structure,re,next_fn);
});

com.rpl.specter.regex_nav = com.rpl.specter.impl.direct_nav_obj((function (re){
return (new com.rpl.specter.t_com$rpl$specter34261(re,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34266 = (function (path,temp__5802__auto__,late,meta34267){
this.path = path;
this.temp__5802__auto__ = temp__5802__auto__;
this.late = late;
this.meta34267 = meta34267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34268,meta34267__$1){
var self__ = this;
var _34268__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34266(self__.path,self__.temp__5802__auto__,self__.late,meta34267__$1));
}));

(com.rpl.specter.t_com$rpl$specter34266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34268){
var self__ = this;
var _34268__$1 = this;
return self__.meta34267;
}));

(com.rpl.specter.t_com$rpl$specter34266.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34266.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__34264_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__34264_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter34266.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__34265_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__34265_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter34266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta34267","meta34267",-2078433234,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34266.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34266.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34266");

(com.rpl.specter.t_com$rpl$specter34266.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34266");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34266.
 */
com.rpl.specter.__GT_t_com$rpl$specter34266 = (function com$rpl$specter$__GT_t_com$rpl$specter34266(path,temp__5802__auto__,late,meta34267){
return (new com.rpl.specter.t_com$rpl$specter34266(path,temp__5802__auto__,late,meta34267));
});


/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__34396__delegate = function (path){
var temp__5802__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5802__auto__)){
var afn = temp__5802__auto__;
return afn;
} else {
var builder__33069__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter34266(path,temp__5802__auto__,late,null));
}));
var curr_params__33070__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__33070__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__33069__auto__,curr_params__33070__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__33069__auto__,curr_params__33070__auto__,null);
}
}
};
var G__34396 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__34397__i = 0, G__34397__a = new Array(arguments.length -  0);
while (G__34397__i < G__34397__a.length) {G__34397__a[G__34397__i] = arguments[G__34397__i + 0]; ++G__34397__i;}
  path = new cljs.core.IndexedSeq(G__34397__a,0,null);
} 
return G__34396__delegate.call(this,path);};
G__34396.cljs$lang$maxFixedArity = 0;
G__34396.cljs$lang$applyTo = (function (arglist__34398){
var path = cljs.core.seq(arglist__34398);
return G__34396__delegate(path);
});
G__34396.cljs$core$IFn$_invoke$arity$variadic = G__34396__delegate;
return G__34396;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34271 = (function (path,temp__5802__auto__,late,meta34272){
this.path = path;
this.temp__5802__auto__ = temp__5802__auto__;
this.late = late;
this.meta34272 = meta34272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34273,meta34272__$1){
var self__ = this;
var _34273__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34271(self__.path,self__.temp__5802__auto__,self__.late,meta34272__$1));
}));

(com.rpl.specter.t_com$rpl$specter34271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34273){
var self__ = this;
var _34273__$1 = this;
return self__.meta34272;
}));

(com.rpl.specter.t_com$rpl$specter34271.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34271.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__34269_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__34269_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter34271.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__34270_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__34270_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter34271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta34272","meta34272",1468655981,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34271.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34271.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34271");

(com.rpl.specter.t_com$rpl$specter34271.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34271");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34271.
 */
com.rpl.specter.__GT_t_com$rpl$specter34271 = (function com$rpl$specter$__GT_t_com$rpl$specter34271(path,temp__5802__auto__,late,meta34272){
return (new com.rpl.specter.t_com$rpl$specter34271(path,temp__5802__auto__,late,meta34272));
});


com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__34399__delegate = function (path){
var temp__5802__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5802__auto__)){
var afn = temp__5802__auto__;
return (function (s){
return cljs.core.not((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(s) : afn.call(null,s)));
});
} else {
var builder__33069__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter34271(path,temp__5802__auto__,late,null));
}));
var curr_params__33070__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__33070__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__33069__auto__,curr_params__33070__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__33069__auto__,curr_params__33070__auto__,null);
}
}
};
var G__34399 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__34400__i = 0, G__34400__a = new Array(arguments.length -  0);
while (G__34400__i < G__34400__a.length) {G__34400__a[G__34400__i] = arguments[G__34400__i + 0]; ++G__34400__i;}
  path = new cljs.core.IndexedSeq(G__34400__a,0,null);
} 
return G__34399__delegate.call(this,path);};
G__34399.cljs$lang$maxFixedArity = 0;
G__34399.cljs$lang$applyTo = (function (arglist__34401){
var path = cljs.core.seq(arglist__34401);
return G__34399__delegate(path);
});
G__34399.cljs$core$IFn$_invoke$arity$variadic = G__34399__delegate;
return G__34399;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 * 
 *   For transformation: `NONE` entries in the result sequence cause corresponding entries in
 *   input to be removed. A result sequence smaller than the input sequence is equivalent to
 *   padding the result sequence with `NONE` at the end until the same size as the input.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__34402__delegate = function (path){
var G__34274 = com.rpl.specter.ALL;
var G__34275 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null,path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__34274,G__34275) : com.rpl.specter.subselect.call(null,G__34274,G__34275));
};
var G__34402 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__34403__i = 0, G__34403__a = new Array(arguments.length -  0);
while (G__34403__i < G__34403__a.length) {G__34403__a[G__34403__i] = arguments[G__34403__i + 0]; ++G__34403__i;}
  path = new cljs.core.IndexedSeq(G__34403__a,0,null);
} 
return G__34402__delegate.call(this,path);};
G__34402.cljs$lang$maxFixedArity = 0;
G__34402.cljs$lang$applyTo = (function (arglist__34404){
var path = cljs.core.seq(arglist__34404);
return G__34402__delegate(path);
});
G__34402.cljs$core$IFn$_invoke$arity$variadic = G__34402__delegate;
return G__34402;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34276 = (function (path,update_fn,late,late_fn,meta34277){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta34277 = meta34277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34278,meta34277__$1){
var self__ = this;
var _34278__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34276(self__.path,self__.update_fn,self__.late,self__.late_fn,meta34277__$1));
}));

(com.rpl.specter.t_com$rpl$specter34276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34278){
var self__ = this;
var _34278__$1 = this;
return self__.meta34277;
}));

(com.rpl.specter.t_com$rpl$specter34276.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34276.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter34276.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter34276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta34277","meta34277",-1355711192,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34276.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34276.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34276");

(com.rpl.specter.t_com$rpl$specter34276.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34276");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34276.
 */
com.rpl.specter.__GT_t_com$rpl$specter34276 = (function com$rpl$specter$__GT_t_com$rpl$specter34276(path,update_fn,late,late_fn,meta34277){
return (new com.rpl.specter.t_com$rpl$specter34276(path,update_fn,late,late_fn,meta34277));
});


/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__33069__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
return (new com.rpl.specter.t_com$rpl$specter34276(path,update_fn,late,late_fn,null));
}));
var curr_params__33070__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),update_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__33070__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__33069__auto__,curr_params__33070__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__33069__auto__,curr_params__33070__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34279 = (function (path,reduce_fn,late,late_fn,meta34280){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta34280 = meta34280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34281,meta34280__$1){
var self__ = this;
var _34281__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34279(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta34280__$1));
}));

(com.rpl.specter.t_com$rpl$specter34279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34281){
var self__ = this;
var _34281__$1 = this;
return self__.meta34280;
}));

(com.rpl.specter.t_com$rpl$specter34279.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34279.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter34279.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter34279.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta34280","meta34280",567021092,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34279.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34279.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34279");

(com.rpl.specter.t_com$rpl$specter34279.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34279");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34279.
 */
com.rpl.specter.__GT_t_com$rpl$specter34279 = (function com$rpl$specter$__GT_t_com$rpl$specter34279(path,reduce_fn,late,late_fn,meta34280){
return (new com.rpl.specter.t_com$rpl$specter34279(path,reduce_fn,late,late_fn,meta34280));
});


/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,reduce_fn){
var builder__33069__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
return (new com.rpl.specter.t_com$rpl$specter34279(path,reduce_fn,late,late_fn,null));
}));
var curr_params__33070__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),reduce_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__33070__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__33069__auto__,curr_params__33070__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__33069__auto__,curr_params__33070__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
var G__34283 = (function (p1__34282_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__34282_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__34283) : com.rpl.specter.pred.call(null,G__34283));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__34285 = (function (p1__34284_SHARP_){
return (p1__34284_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__34285) : com.rpl.specter.pred.call(null,G__34285));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__34287 = (function (p1__34286_SHARP_){
return (p1__34286_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__34287) : com.rpl.specter.pred.call(null,G__34287));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__34289 = (function (p1__34288_SHARP_){
return (p1__34288_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__34289) : com.rpl.specter.pred.call(null,G__34289));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__34291 = (function (p1__34290_SHARP_){
return (p1__34290_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__34291) : com.rpl.specter.pred.call(null,G__34291));
});
(com.rpl.specter.protocols.ImplicitNav["null"] = true);

(com.rpl.specter.protocols.implicit_nav["null"] = (function (this$){
return com.rpl.specter.STAY;
}));
(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
(com.rpl.specter.protocols.ImplicitNav["string"] = true);

(com.rpl.specter.protocols.implicit_nav["string"] = (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
(com.rpl.specter.protocols.ImplicitNav["number"] = true);

(com.rpl.specter.protocols.implicit_nav["number"] = (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
(com.rpl.specter.protocols.ImplicitNav["boolean"] = true);

(com.rpl.specter.protocols.implicit_nav["boolean"] = (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
(com.rpl.specter.protocols.ImplicitNav["function"] = true);

(com.rpl.specter.protocols.implicit_nav["function"] = (function (this$){
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.pred.call(null,this$));
}));
(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.pred.call(null,this$__$1));
}));
(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.regex_nav.call(null,this$__$1));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34294 = (function (v,meta34295){
this.v = v;
this.meta34295 = meta34295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34296,meta34295__$1){
var self__ = this;
var _34296__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34294(self__.v,meta34295__$1));
}));

(com.rpl.specter.t_com$rpl$specter34294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34296){
var self__ = this;
var _34296__$1 = this;
return self__.meta34295;
}));

(com.rpl.specter.t_com$rpl$specter34294.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34294.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter34294.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter34294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta34295","meta34295",1555148874,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34294.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34294.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34294");

(com.rpl.specter.t_com$rpl$specter34294.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34294");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34294.
 */
com.rpl.specter.__GT_t_com$rpl$specter34294 = (function com$rpl$specter$__GT_t_com$rpl$specter34294(v,meta34295){
return (new com.rpl.specter.t_com$rpl$specter34294(v,meta34295));
});




com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
var G__34292 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__34292) : next_fn.call(null,G__34292));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__34293 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__34293) : next_fn.call(null,G__34293));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
return (new com.rpl.specter.t_com$rpl$specter34294(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__34297 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__34297) : com.rpl.specter.nil__GT_val.call(null,G__34297));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__34298 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__34298) : com.rpl.specter.nil__GT_val.call(null,G__34298));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__34299 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__34299) : com.rpl.specter.nil__GT_val.call(null,G__34299));
})();

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34302 = (function (meta34303){
this.meta34303 = meta34303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34304,meta34303__$1){
var self__ = this;
var _34304__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34302(meta34303__$1));
}));

(com.rpl.specter.t_com$rpl$specter34302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34304){
var self__ = this;
var _34304__$1 = this;
return self__.meta34303;
}));

(com.rpl.specter.t_com$rpl$specter34302.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34302.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return next_fn(cljs.core.meta(structure));
}));

(com.rpl.specter.t_com$rpl$specter34302.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
}));

(com.rpl.specter.t_com$rpl$specter34302.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34303","meta34303",1869445249,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34302.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34302.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34302");

(com.rpl.specter.t_com$rpl$specter34302.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34302");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34302.
 */
com.rpl.specter.__GT_t_com$rpl$specter34302 = (function com$rpl$specter$__GT_t_com$rpl$specter34302(meta34303){
return (new com.rpl.specter.t_com$rpl$specter34302(meta34303));
});




com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__34300 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__34300) : next_fn.call(null,G__34300));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__34301 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__34301) : next_fn.call(null,G__34301));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (new com.rpl.specter.t_com$rpl$specter34302(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34307 = (function (meta34308){
this.meta34308 = meta34308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34309,meta34308__$1){
var self__ = this;
var _34309__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34307(meta34308__$1));
}));

(com.rpl.specter.t_com$rpl$specter34307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34309){
var self__ = this;
var _34309__$1 = this;
return self__.meta34308;
}));

(com.rpl.specter.t_com$rpl$specter34307.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34307.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return next_fn(cljs.core.name(structure));
}));

(com.rpl.specter.t_com$rpl$specter34307.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
var new_name = next_fn(cljs.core.name(structure));
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("NAME can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
}));

(com.rpl.specter.t_com$rpl$specter34307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34308","meta34308",-176810753,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34307.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34307.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34307");

(com.rpl.specter.t_com$rpl$specter34307.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34307");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34307.
 */
com.rpl.specter.__GT_t_com$rpl$specter34307 = (function com$rpl$specter$__GT_t_com$rpl$specter34307(meta34308){
return (new com.rpl.specter.t_com$rpl$specter34307(meta34308));
});




com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__34305 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__34305) : next_fn.call(null,G__34305));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__34306 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__34306) : next_fn.call(null,G__34306));
})();
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("NAME can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
});

/**
 * Navigates to the name portion of the keyword or symbol
 */
com.rpl.specter.NAME = (new com.rpl.specter.t_com$rpl$specter34307(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34312 = (function (meta34313){
this.meta34313 = meta34313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34314,meta34313__$1){
var self__ = this;
var _34314__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34312(meta34313__$1));
}));

(com.rpl.specter.t_com$rpl$specter34312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34314){
var self__ = this;
var _34314__$1 = this;
return self__.meta34313;
}));

(com.rpl.specter.t_com$rpl$specter34312.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34312.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
return next_fn(cljs.core.namespace(structure));
}));

(com.rpl.specter.t_com$rpl$specter34312.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
var name = cljs.core.name(structure);
var new_ns = next_fn(cljs.core.namespace(structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("NAMESPACE can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
}));

(com.rpl.specter.t_com$rpl$specter34312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34313","meta34313",-1557079289,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34312.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34312.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34312");

(com.rpl.specter.t_com$rpl$specter34312.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34312");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34312.
 */
com.rpl.specter.__GT_t_com$rpl$specter34312 = (function com$rpl$specter$__GT_t_com$rpl$specter34312(meta34313){
return (new com.rpl.specter.t_com$rpl$specter34312(meta34313));
});




com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__34310 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__34310) : next_fn.call(null,G__34310));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__34311 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__34311) : next_fn.call(null,G__34311));
})();
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("NAMESPACE can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
});

/**
 * Navigates to the namespace portion of the keyword or symbol
 */
com.rpl.specter.NAMESPACE = (new com.rpl.specter.t_com$rpl$specter34312(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34315 = (function (path,late,meta34316){
this.path = path;
this.late = late;
this.meta34316 = meta34316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34317,meta34316__$1){
var self__ = this;
var _34317__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34315(self__.path,self__.late,meta34316__$1));
}));

(com.rpl.specter.t_com$rpl$specter34315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34317){
var self__ = this;
var _34317__$1 = this;
return self__.meta34316;
}));

(com.rpl.specter.t_com$rpl$specter34315.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34315.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__33066__auto__,vals__33067__auto__,structure,next_fn__33068__auto__){
var self__ = this;
var this__33066__auto____$1 = this;
var G__34318 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__33067__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__34319 = structure;
return (next_fn__33068__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__33068__auto__.cljs$core$IFn$_invoke$arity$2(G__34318,G__34319) : next_fn__33068__auto__.call(null,G__34318,G__34319));
}));

(com.rpl.specter.t_com$rpl$specter34315.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__33066__auto__,vals__33067__auto__,structure,next_fn__33068__auto__){
var self__ = this;
var this__33066__auto____$1 = this;
var G__34320 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__33067__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__34321 = structure;
return (next_fn__33068__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__33068__auto__.cljs$core$IFn$_invoke$arity$2(G__34320,G__34321) : next_fn__33068__auto__.call(null,G__34320,G__34321));
}));

(com.rpl.specter.t_com$rpl$specter34315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta34316","meta34316",1731630655,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34315.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34315.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34315");

(com.rpl.specter.t_com$rpl$specter34315.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34315");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34315.
 */
com.rpl.specter.__GT_t_com$rpl$specter34315 = (function com$rpl$specter$__GT_t_com$rpl$specter34315(path,late,meta34316){
return (new com.rpl.specter.t_com$rpl$specter34315(path,late,meta34316));
});


com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__34405__delegate = function (path){
var builder__33069__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter34315(path,late,null));
}));
var curr_params__33070__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__33070__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__33069__auto__,curr_params__33070__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__33069__auto__,curr_params__33070__auto__,null);
}
};
var G__34405 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__34406__i = 0, G__34406__a = new Array(arguments.length -  0);
while (G__34406__i < G__34406__a.length) {G__34406__a[G__34406__i] = arguments[G__34406__i + 0]; ++G__34406__i;}
  path = new cljs.core.IndexedSeq(G__34406__a,0,null);
} 
return G__34405__delegate.call(this,path);};
G__34405.cljs$lang$maxFixedArity = 0;
G__34405.cljs$lang$applyTo = (function (arglist__34407){
var path = cljs.core.seq(arglist__34407);
return G__34405__delegate(path);
});
G__34405.cljs$core$IFn$_invoke$arity$variadic = G__34405__delegate;
return G__34405;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34322 = (function (path,late,meta34323){
this.path = path;
this.late = late;
this.meta34323 = meta34323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34324,meta34323__$1){
var self__ = this;
var _34324__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34322(self__.path,self__.late,meta34323__$1));
}));

(com.rpl.specter.t_com$rpl$specter34322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34324){
var self__ = this;
var _34324__$1 = this;
return self__.meta34323;
}));

(com.rpl.specter.t_com$rpl$specter34322.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34322.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__33066__auto__,vals__33067__auto__,structure,next_fn__33068__auto__){
var self__ = this;
var this__33066__auto____$1 = this;
var G__34325 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__33067__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__34326 = structure;
return (next_fn__33068__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__33068__auto__.cljs$core$IFn$_invoke$arity$2(G__34325,G__34326) : next_fn__33068__auto__.call(null,G__34325,G__34326));
}));

(com.rpl.specter.t_com$rpl$specter34322.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__33066__auto__,vals__33067__auto__,structure,next_fn__33068__auto__){
var self__ = this;
var this__33066__auto____$1 = this;
var G__34327 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__33067__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__34328 = structure;
return (next_fn__33068__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__33068__auto__.cljs$core$IFn$_invoke$arity$2(G__34327,G__34328) : next_fn__33068__auto__.call(null,G__34327,G__34328));
}));

(com.rpl.specter.t_com$rpl$specter34322.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta34323","meta34323",-116766963,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34322.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34322.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34322");

(com.rpl.specter.t_com$rpl$specter34322.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34322");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34322.
 */
com.rpl.specter.__GT_t_com$rpl$specter34322 = (function com$rpl$specter$__GT_t_com$rpl$specter34322(path,late,meta34323){
return (new com.rpl.specter.t_com$rpl$specter34322(path,late,meta34323));
});


com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__34408__delegate = function (path){
var builder__33069__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter34322(path,late,null));
}));
var curr_params__33070__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__33070__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__33069__auto__,curr_params__33070__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__33069__auto__,curr_params__33070__auto__,null);
}
};
var G__34408 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__34409__i = 0, G__34409__a = new Array(arguments.length -  0);
while (G__34409__i < G__34409__a.length) {G__34409__a[G__34409__i] = arguments[G__34409__i + 0]; ++G__34409__i;}
  path = new cljs.core.IndexedSeq(G__34409__a,0,null);
} 
return G__34408__delegate.call(this,path);};
G__34408.cljs$lang$maxFixedArity = 0;
G__34408.cljs$lang$applyTo = (function (arglist__34410){
var path = cljs.core.seq(arglist__34410);
return G__34408__delegate(path);
});
G__34408.cljs$core$IFn$_invoke$arity$variadic = G__34408__delegate;
return G__34408;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34329 = (function (val,meta34330){
this.val = val;
this.meta34330 = meta34330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34331,meta34330__$1){
var self__ = this;
var _34331__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34329(self__.val,meta34330__$1));
}));

(com.rpl.specter.t_com$rpl$specter34329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34331){
var self__ = this;
var _34331__$1 = this;
return self__.meta34330;
}));

(com.rpl.specter.t_com$rpl$specter34329.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34329.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__33066__auto__,vals__33067__auto__,structure,next_fn__33068__auto__){
var self__ = this;
var this__33066__auto____$1 = this;
var G__34332 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__33067__auto__,self__.val);
var G__34333 = structure;
return (next_fn__33068__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__33068__auto__.cljs$core$IFn$_invoke$arity$2(G__34332,G__34333) : next_fn__33068__auto__.call(null,G__34332,G__34333));
}));

(com.rpl.specter.t_com$rpl$specter34329.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__33066__auto__,vals__33067__auto__,structure,next_fn__33068__auto__){
var self__ = this;
var this__33066__auto____$1 = this;
var G__34334 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__33067__auto__,self__.val);
var G__34335 = structure;
return (next_fn__33068__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__33068__auto__.cljs$core$IFn$_invoke$arity$2(G__34334,G__34335) : next_fn__33068__auto__.call(null,G__34334,G__34335));
}));

(com.rpl.specter.t_com$rpl$specter34329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta34330","meta34330",1146170060,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34329.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34329.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34329");

(com.rpl.specter.t_com$rpl$specter34329.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34329");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34329.
 */
com.rpl.specter.__GT_t_com$rpl$specter34329 = (function com$rpl$specter$__GT_t_com$rpl$specter34329(val,meta34330){
return (new com.rpl.specter.t_com$rpl$specter34329(val,meta34330));
});


/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = com.rpl.specter.impl.direct_nav_obj((function (val){
return (new com.rpl.specter.t_com$rpl$specter34329(val,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34336 = (function (path,late,meta34337){
this.path = path;
this.late = late;
this.meta34337 = meta34337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34338,meta34337__$1){
var self__ = this;
var _34338__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34336(self__.path,self__.late,meta34337__$1));
}));

(com.rpl.specter.t_com$rpl$specter34336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34338){
var self__ = this;
var _34338__$1 = this;
return self__.meta34337;
}));

(com.rpl.specter.t_com$rpl$specter34336.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34336.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter34336.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter34336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta34337","meta34337",1916410680,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34336.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34336.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34336");

(com.rpl.specter.t_com$rpl$specter34336.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34336");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34336.
 */
com.rpl.specter.__GT_t_com$rpl$specter34336 = (function com$rpl$specter$__GT_t_com$rpl$specter34336(path,late,meta34337){
return (new com.rpl.specter.t_com$rpl$specter34336(path,late,meta34337));
});


com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__34411__delegate = function (path){
var builder__33069__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter34336(path,late,null));
}));
var curr_params__33070__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__33070__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__33069__auto__,curr_params__33070__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__33069__auto__,curr_params__33070__auto__,null);
}
};
var G__34411 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__34412__i = 0, G__34412__a = new Array(arguments.length -  0);
while (G__34412__i < G__34412__a.length) {G__34412__a[G__34412__i] = arguments[G__34412__i + 0]; ++G__34412__i;}
  path = new cljs.core.IndexedSeq(G__34412__a,0,null);
} 
return G__34411__delegate.call(this,path);};
G__34411.cljs$lang$maxFixedArity = 0;
G__34411.cljs$lang$applyTo = (function (arglist__34413){
var path = cljs.core.seq(arglist__34413);
return G__34411__delegate(path);
});
G__34411.cljs$core$IFn$_invoke$arity$variadic = G__34411__delegate;
return G__34411;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34341 = (function (meta34342){
this.meta34342 = meta34342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34343,meta34342__$1){
var self__ = this;
var _34343__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34341(meta34342__$1));
}));

(com.rpl.specter.t_com$rpl$specter34341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34343){
var self__ = this;
var _34343__$1 = this;
return self__.meta34342;
}));

(com.rpl.specter.t_com$rpl$specter34341.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34341.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__34344 = cljs.core.PersistentVector.EMPTY;
var G__34345 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__34344,G__34345) : next_fn.call(null,G__34344,G__34345));
}));

(com.rpl.specter.t_com$rpl$specter34341.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__34346 = cljs.core.PersistentVector.EMPTY;
var G__34347 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__34346,G__34347) : next_fn.call(null,G__34346,G__34347));
}));

(com.rpl.specter.t_com$rpl$specter34341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34342","meta34342",817471502,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34341.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34341.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34341");

(com.rpl.specter.t_com$rpl$specter34341.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34341");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34341.
 */
com.rpl.specter.__GT_t_com$rpl$specter34341 = (function com$rpl$specter$__GT_t_com$rpl$specter34341(meta34342){
return (new com.rpl.specter.t_com$rpl$specter34341(meta34342));
});


/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (new com.rpl.specter.t_com$rpl$specter34341(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34350 = (function (cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,meta34351){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5802__auto__ = temp__5802__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta34351 = meta34351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34352,meta34351__$1){
var self__ = this;
var _34352__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34350(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5802__auto__,self__.afn,self__.late_then,self__.late_else,meta34351__$1));
}));

(com.rpl.specter.t_com$rpl$specter34350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34352){
var self__ = this;
var _34352__$1 = this;
return self__.meta34351;
}));

(com.rpl.specter.t_com$rpl$specter34350.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34350.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter34350.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter34350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta34351","meta34351",-207253899,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34350.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34350.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34350");

(com.rpl.specter.t_com$rpl$specter34350.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34350");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34350.
 */
com.rpl.specter.__GT_t_com$rpl$specter34350 = (function com$rpl$specter$__GT_t_com$rpl$specter34350(cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,meta34351){
return (new com.rpl.specter.t_com$rpl$specter34350(cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,meta34351));
});



/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34353 = (function (cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,meta34354){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5802__auto__ = temp__5802__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta34354 = meta34354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34355,meta34354__$1){
var self__ = this;
var _34355__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34353(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5802__auto__,self__.late_cond,self__.late_then,self__.late_else,meta34354__$1));
}));

(com.rpl.specter.t_com$rpl$specter34353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34355){
var self__ = this;
var _34355__$1 = this;
return self__.meta34354;
}));

(com.rpl.specter.t_com$rpl$specter34353.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34353.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,(function (p1__34348_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__34348_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter34353.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,(function (p1__34349_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__34349_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter34353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta34354","meta34354",373622051,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34353.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34353.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34353");

(com.rpl.specter.t_com$rpl$specter34353.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34353");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34353.
 */
com.rpl.specter.__GT_t_com$rpl$specter34353 = (function com$rpl$specter$__GT_t_com$rpl$specter34353(cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,meta34354){
return (new com.rpl.specter.t_com$rpl$specter34353(cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,meta34354));
});


/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__34414 = null;
var G__34414__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP));
});
var G__34414__3 = (function (cond_p,then_path,else_path){
var temp__5802__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5802__auto__)){
var afn = temp__5802__auto__;
var builder__33069__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_then,late_else){
return (new com.rpl.specter.t_com$rpl$specter34350(cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,null));
}));
var curr_params__33070__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__33070__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__33069__auto__,curr_params__33070__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__33069__auto__,curr_params__33070__auto__,null);
}
} else {
var builder__33069__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_cond,late_then,late_else){
return (new com.rpl.specter.t_com$rpl$specter34353(cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,null));
}));
var curr_params__33070__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(cond_p) : com.rpl.specter.late_path.call(null,cond_p)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__33070__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__33069__auto__,curr_params__33070__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__33069__auto__,curr_params__33070__auto__,null);
}
}
});
G__34414 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__34414__2.call(this,cond_p,then_path);
case 3:
return G__34414__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34414.cljs$core$IFn$_invoke$arity$2 = G__34414__2;
G__34414.cljs$core$IFn$_invoke$arity$3 = G__34414__3;
return G__34414;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 */
com.rpl.specter.cond_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__34415__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p,p__34356){
var vec__34357 = p__34356;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34357,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34357,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null,tester,apath,p));
}),com.rpl.specter.STOP,pairs);
};
var G__34415 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__34416__i = 0, G__34416__a = new Array(arguments.length -  0);
while (G__34416__i < G__34416__a.length) {G__34416__a[G__34416__i] = arguments[G__34416__i + 0]; ++G__34416__i;}
  conds = new cljs.core.IndexedSeq(G__34416__a,0,null);
} 
return G__34415__delegate.call(this,conds);};
G__34415.cljs$lang$maxFixedArity = 0;
G__34415.cljs$lang$applyTo = (function (arglist__34417){
var conds = cljs.core.seq(arglist__34417);
return G__34415__delegate(conds);
});
G__34415.cljs$core$IFn$_invoke$arity$variadic = G__34415__delegate;
return G__34415;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter34360 = (function (path1,path2,late1,late2,meta34361){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta34361 = meta34361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter34360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34362,meta34361__$1){
var self__ = this;
var _34362__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter34360(self__.path1,self__.path2,self__.late1,self__.late2,meta34361__$1));
}));

(com.rpl.specter.t_com$rpl$specter34360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34362){
var self__ = this;
var _34362__$1 = this;
return self__.meta34361;
}));

(com.rpl.specter.t_com$rpl$specter34360.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter34360.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var res1 = com.rpl.specter.protocols.select_STAR_(self__.late1,vals,structure,next_fn);
if(cljs.core.reduced_QMARK_(res1)){
return res1;
} else {
var res2 = com.rpl.specter.protocols.select_STAR_(self__.late2,vals,structure,next_fn);
if((com.rpl.specter.NONE === res1)){
return res2;
} else {
return res1;
}
}
}));

(com.rpl.specter.t_com$rpl$specter34360.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter34360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta34361","meta34361",-1661721914,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter34360.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter34360.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter34360");

(com.rpl.specter.t_com$rpl$specter34360.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter34360");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter34360.
 */
com.rpl.specter.__GT_t_com$rpl$specter34360 = (function com$rpl$specter$__GT_t_com$rpl$specter34360(path1,path2,late1,late2,meta34361){
return (new com.rpl.specter.t_com$rpl$specter34360(path1,path2,late1,late2,meta34361));
});


/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__34418 = null;
var G__34418__0 = (function (){
return com.rpl.specter.STAY;
});
var G__34418__1 = (function (path){
return path;
});
var G__34418__2 = (function (path1,path2){
var builder__33069__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
return (new com.rpl.specter.t_com$rpl$specter34360(path1,path2,late1,late2,null));
}));
var curr_params__33070__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null,path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null,path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__33070__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__33069__auto__,curr_params__33070__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__33069__auto__,curr_params__33070__auto__,null);
}
});
var G__34418__3 = (function() { 
var G__34419__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null,path1,path2)),paths);
};
var G__34419 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__34420__i = 0, G__34420__a = new Array(arguments.length -  2);
while (G__34420__i < G__34420__a.length) {G__34420__a[G__34420__i] = arguments[G__34420__i + 2]; ++G__34420__i;}
  paths = new cljs.core.IndexedSeq(G__34420__a,0,null);
} 
return G__34419__delegate.call(this,path1,path2,paths);};
G__34419.cljs$lang$maxFixedArity = 2;
G__34419.cljs$lang$applyTo = (function (arglist__34421){
var path1 = cljs.core.first(arglist__34421);
arglist__34421 = cljs.core.next(arglist__34421);
var path2 = cljs.core.first(arglist__34421);
var paths = cljs.core.rest(arglist__34421);
return G__34419__delegate(path1,path2,paths);
});
G__34419.cljs$core$IFn$_invoke$arity$variadic = G__34419__delegate;
return G__34419;
})()
;
G__34418 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__34418__0.call(this);
case 1:
return G__34418__1.call(this,path1);
case 2:
return G__34418__2.call(this,path1,path2);
default:
var G__34422 = null;
if (arguments.length > 2) {
var G__34423__i = 0, G__34423__a = new Array(arguments.length -  2);
while (G__34423__i < G__34423__a.length) {G__34423__a[G__34423__i] = arguments[G__34423__i + 2]; ++G__34423__i;}
G__34422 = new cljs.core.IndexedSeq(G__34423__a,0,null);
}
return G__34418__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__34422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34418.cljs$lang$maxFixedArity = 2;
G__34418.cljs$lang$applyTo = G__34418__3.cljs$lang$applyTo;
G__34418.cljs$core$IFn$_invoke$arity$0 = G__34418__0;
G__34418.cljs$core$IFn$_invoke$arity$1 = G__34418__1;
G__34418.cljs$core$IFn$_invoke$arity$2 = G__34418__2;
G__34418.cljs$core$IFn$_invoke$arity$variadic = G__34418__3.cljs$core$IFn$_invoke$arity$variadic;
return G__34418;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__34424__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path));
};
var G__34424 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__34425__i = 0, G__34425__a = new Array(arguments.length -  0);
while (G__34425__i < G__34425__a.length) {G__34425__a[G__34425__i] = arguments[G__34425__i + 0]; ++G__34425__i;}
  path = new cljs.core.IndexedSeq(G__34425__a,0,null);
} 
return G__34424__delegate.call(this,path);};
G__34424.cljs$lang$maxFixedArity = 0;
G__34424.cljs$lang$applyTo = (function (arglist__34426){
var path = cljs.core.seq(arglist__34426);
return G__34424__delegate(path);
});
G__34424.cljs$core$IFn$_invoke$arity$variadic = G__34424__delegate;
return G__34424;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__34427__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY));
};
var G__34427 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__34428__i = 0, G__34428__a = new Array(arguments.length -  0);
while (G__34428__i < G__34428__a.length) {G__34428__a[G__34428__i] = arguments[G__34428__i + 0]; ++G__34428__i;}
  path = new cljs.core.IndexedSeq(G__34428__a,0,null);
} 
return G__34427__delegate.call(this,path);};
G__34427.cljs$lang$maxFixedArity = 0;
G__34427.cljs$lang$applyTo = (function (arglist__34429){
var path = cljs.core.seq(arglist__34429);
return G__34427__delegate(path);
});
G__34427.cljs$core$IFn$_invoke$arity$variadic = G__34427__delegate;
return G__34427;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__33076__auto__ = com.rpl.specter.pathcache34367;
var info__33076__auto____$1 = (((info__33076__auto__ == null))?(function (){var info34368 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",new cljs.core.Keyword(null,"file","file",-1269645878),"com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),1430,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)], null)),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1210,1214,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,680,682,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2138,2138,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,715,718,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache34367 = info34368;

return info34368;
})():info__33076__auto__);
var precompiled34369 = com.rpl.specter.impl.cached_path_info_precompiled(info__33076__auto____$1);
var dynamic_QMARK___33077__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__33076__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___33077__auto__)){
var G__34370 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled34369.cljs$core$IFn$_invoke$arity$1 ? precompiled34369.cljs$core$IFn$_invoke$arity$1(G__34370) : precompiled34369.call(null,G__34370));
} else {
return precompiled34369;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__33076__auto__ = com.rpl.specter.pathcache34371;
var info__33076__auto____$1 = (((info__33076__auto__ == null))?(function (){var info34372 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",new cljs.core.Keyword(null,"file","file",-1269645878),"com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),1430,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)], null)),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1210,1214,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,680,682,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2138,2138,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"com/rpl/specter.cljc",16,1,725,727,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache34371 = info34372;

return info34372;
})():info__33076__auto__);
var precompiled34373 = com.rpl.specter.impl.cached_path_info_precompiled(info__33076__auto____$1);
var dynamic_QMARK___33077__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__33076__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___33077__auto__)){
var G__34374 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled34373.cljs$core$IFn$_invoke$arity$1 ? precompiled34373.cljs$core$IFn$_invoke$arity$1(G__34374) : precompiled34373.call(null,G__34374));
} else {
return precompiled34373;
}
})());

return p;
}));
var empty__GT_NONE_34430 = (function (){var G__34375 = cljs.core.empty_QMARK_;
var G__34376 = com.rpl.specter.terminal_val(com.rpl.specter.NONE);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2(G__34375,G__34376) : com.rpl.specter.if_path.call(null,G__34375,G__34376));
})();
var compact_STAR__34431 = (function (nav){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(nav,empty__GT_NONE_34430) : com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_34430));
});
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__34432__delegate = function (path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(compact_STAR__34431,path);
};
var G__34432 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__34433__i = 0, G__34433__a = new Array(arguments.length -  0);
while (G__34433__i < G__34433__a.length) {G__34433__a[G__34433__i] = arguments[G__34433__i + 0]; ++G__34433__i;}
  path = new cljs.core.IndexedSeq(G__34433__a,0,null);
} 
return G__34432__delegate.call(this,path);};
G__34432.cljs$lang$maxFixedArity = 0;
G__34432.cljs$lang$applyTo = (function (arglist__34434){
var path = cljs.core.seq(arglist__34434);
return G__34432__delegate(path);
});
G__34432.cljs$core$IFn$_invoke$arity$variadic = G__34432__delegate;
return G__34432;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=com.rpl.specter.js.map
