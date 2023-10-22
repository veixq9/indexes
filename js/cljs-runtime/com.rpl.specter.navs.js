goog.provide('com.rpl.specter.navs');
com.rpl.specter.navs.not_selected_QMARK__STAR_ = (function com$rpl$specter$navs$not_selected_QMARK__STAR_(compiled_path,vals,structure){
return (com.rpl.specter.impl.NONE === com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3(compiled_path,vals,structure));
});
com.rpl.specter.navs.selected_QMARK__STAR_ = (function com$rpl$specter$navs$selected_QMARK__STAR_(compiled_path,vals,structure){
return (!(com.rpl.specter.navs.not_selected_QMARK__STAR_(compiled_path,vals,structure)));
});
com.rpl.specter.navs.all_select = (function com$rpl$specter$navs$all_select(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__29635__auto__,e){
var ret__29636__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(e) : next_fn.call(null,e));
if((ret__29636__auto__ === com.rpl.specter.impl.NONE)){
return curr__29635__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__29636__auto__)){
return cljs.core.reduced(ret__29636__auto__);
} else {
return ret__29636__auto__;
}
}
}),com.rpl.specter.impl.NONE,structure);
});
com.rpl.specter.navs.queue_QMARK_ = (function com$rpl$specter$navs$queue_QMARK_(coll){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(coll),cljs.core.type(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY)));
});

/**
 * @interface
 */
com.rpl.specter.navs.AllTransformProtocol = function(){};

var com$rpl$specter$navs$AllTransformProtocol$all_transform$dyn_34041 = (function (structure,next_fn){
var x__5393__auto__ = (((structure == null))?null:structure);
var m__5394__auto__ = (com.rpl.specter.navs.all_transform[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__5394__auto__.call(null,structure,next_fn));
} else {
var m__5392__auto__ = (com.rpl.specter.navs.all_transform["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__5392__auto__.call(null,structure,next_fn));
} else {
throw cljs.core.missing_protocol("AllTransformProtocol.all-transform",structure);
}
}
});
com.rpl.specter.navs.all_transform = (function com$rpl$specter$navs$all_transform(structure,next_fn){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2(structure,next_fn);
} else {
return com$rpl$specter$navs$AllTransformProtocol$all_transform$dyn_34041(structure,next_fn);
}
});

com.rpl.specter.navs.void_transformed_kv_pair_QMARK_ = (function com$rpl$specter$navs$void_transformed_kv_pair_QMARK_(newkv){
return (((newkv === com.rpl.specter.impl.NONE)) || ((cljs.core.count(newkv) < (2))));
});
com.rpl.specter.navs.non_transient_map_all_transform = (function com$rpl$specter$navs$non_transient_map_all_transform(structure,next_fn,empty_map){
return cljs.core.reduce_kv((function (m,k,v){
var newkv = (function (){var G__33965 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33965) : next_fn.call(null,G__33965));
})();
if(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_(newkv)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(1)));
}
}),empty_map,structure);
});
com.rpl.specter.navs.not_NONE_QMARK_ = (function com$rpl$specter$navs$not_NONE_QMARK_(v){
return (!((v === com.rpl.specter.impl.NONE)));
});
com.rpl.specter.navs.all_transform_list = (function com$rpl$specter$navs$all_transform_list(structure,next_fn){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(next_fn),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.not_NONE_QMARK_)),structure));
});
com.rpl.specter.navs.all_transform_record = (function com$rpl$specter$navs$all_transform_record(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,kv){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,(next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(kv) : next_fn.call(null,kv)));
}),structure,structure);
});
(com.rpl.specter.navs.AllTransformProtocol["null"] = true);

(com.rpl.specter.navs.all_transform["null"] = (function (structure,next_fn){
return null;
}));

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
var newk = (function (){var G__33966 = cljs.core.key(structure__$1);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33966) : next_fn.call(null,G__33966));
})();
var newv = (function (){var G__33967 = cljs.core.val(structure__$1);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33967) : next_fn.call(null,G__33967));
})();
return cljs.core.__GT_MapEntry(newk,newv,null);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(next_fn),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.not_NONE_QMARK_)),structure__$1);
}));

(cljs.core.PersistentHashSet.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(next_fn),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.not_NONE_QMARK_)),structure__$1);
}));

(cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.non_transient_map_all_transform(structure__$1,next_fn,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.non_transient_map_all_transform(structure__$1,next_fn,cljs.core.empty(structure__$1));
}));

(cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m,k,v){
var newkv = (function (){var G__33968 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33968) : next_fn.call(null,G__33968));
})();
if(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_(newkv)){
return m;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(1)));
}
}),cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY),structure__$1));
}));

(com.rpl.specter.navs.AllTransformProtocol["_"] = true);

(com.rpl.specter.navs.all_transform["_"] = (function (structure,next_fn){
if(cljs.core.record_QMARK_(structure)){
return com.rpl.specter.navs.all_transform_record(structure,next_fn);
} else {
var empty_structure = cljs.core.empty(structure);
if(((cljs.core.list_QMARK_(empty_structure)) && ((!(com.rpl.specter.navs.queue_QMARK_(empty_structure)))))){
return com.rpl.specter.navs.all_transform_list(structure,next_fn);
} else {
if(cljs.core.map_QMARK_(structure)){
return cljs.core.reduce_kv((function (m,k,v){
var newkv = (function (){var G__33969 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33969) : next_fn.call(null,G__33969));
})();
if(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_(newkv)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(1)));
}
}),empty_structure,structure);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(empty_structure,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(next_fn),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.not_NONE_QMARK_)),structure);

}
}
}
}));

/**
 * @interface
 */
com.rpl.specter.navs.MapTransformProtocol = function(){};

var com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$dyn_34046 = (function (structure,next_fn){
var x__5393__auto__ = (((structure == null))?null:structure);
var m__5394__auto__ = (com.rpl.specter.navs.map_vals_transform[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__5394__auto__.call(null,structure,next_fn));
} else {
var m__5392__auto__ = (com.rpl.specter.navs.map_vals_transform["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__5392__auto__.call(null,structure,next_fn));
} else {
throw cljs.core.missing_protocol("MapTransformProtocol.map-vals-transform",structure);
}
}
});
com.rpl.specter.navs.map_vals_transform = (function com$rpl$specter$navs$map_vals_transform(structure,next_fn){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 == null)))))){
return structure.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2(structure,next_fn);
} else {
return com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$dyn_34046(structure,next_fn);
}
});

var com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$dyn_34055 = (function (structure,next_fn){
var x__5393__auto__ = (((structure == null))?null:structure);
var m__5394__auto__ = (com.rpl.specter.navs.map_keys_transform[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__5394__auto__.call(null,structure,next_fn));
} else {
var m__5392__auto__ = (com.rpl.specter.navs.map_keys_transform["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__5392__auto__.call(null,structure,next_fn));
} else {
throw cljs.core.missing_protocol("MapTransformProtocol.map-keys-transform",structure);
}
}
});
com.rpl.specter.navs.map_keys_transform = (function com$rpl$specter$navs$map_keys_transform(structure,next_fn){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 == null)))))){
return structure.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2(structure,next_fn);
} else {
return com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$dyn_34055(structure,next_fn);
}
});

com.rpl.specter.navs.map_vals_non_transient_transform = (function com$rpl$specter$navs$map_vals_non_transient_transform(structure,empty_map,next_fn){
return cljs.core.reduce_kv((function (m,k,v){
var newv = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newv);
}
}),empty_map,structure);
});
com.rpl.specter.navs.map_keys_non_transient_transform = (function com$rpl$specter$navs$map_keys_non_transient_transform(structure,empty_map,next_fn){
return cljs.core.reduce_kv((function (m,k,v){
var newk = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,newk,v);
}
}),empty_map,structure);
});
(com.rpl.specter.navs.MapTransformProtocol["null"] = true);

(com.rpl.specter.navs.map_vals_transform["null"] = (function (structure,next_fn){
return null;
}));

(com.rpl.specter.navs.map_keys_transform["null"] = (function (structure,next_fn){
return null;
}));

(cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_vals_non_transient_transform(structure__$1,cljs.core.PersistentArrayMap.EMPTY,next_fn);
}));

(cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_keys_non_transient_transform(structure__$1,cljs.core.PersistentArrayMap.EMPTY,next_fn);
}));

(cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_vals_non_transient_transform(structure__$1,cljs.core.empty(structure__$1),next_fn);
}));

(cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_keys_non_transient_transform(structure__$1,cljs.core.empty(structure__$1),next_fn);
}));

(cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m,k,v){
var newv = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,newv);
}
}),cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY),structure__$1));
}));

(cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m,k,v){
var newk = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,newk,v);
}
}),cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY),structure__$1));
}));

(com.rpl.specter.navs.MapTransformProtocol["_"] = true);

(com.rpl.specter.navs.map_vals_transform["_"] = (function (structure,next_fn){
return cljs.core.reduce_kv((function (m,k,v){
var newv = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newv);
}
}),cljs.core.empty(structure),structure);
}));

(com.rpl.specter.navs.map_keys_transform["_"] = (function (structure,next_fn){
return cljs.core.reduce_kv((function (m,k,v){
var newk = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,newk,v);
}
}),cljs.core.empty(structure),structure);
}));
com.rpl.specter.navs.srange_select = (function com$rpl$specter$navs$srange_select(structure,start,end,next_fn){
var G__33970 = ((typeof structure === 'string')?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,start,end):cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(structure),start,end));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33970) : next_fn.call(null,G__33970));
});
com.rpl.specter.navs.srange_transform = com.rpl.specter.impl.srange_transform_STAR_;
com.rpl.specter.navs.extract_basic_filter_fn = (function com$rpl$specter$navs$extract_basic_filter_fn(path){
if(cljs.core.fn_QMARK_(path)){
return path;
} else {
if(((cljs.core.coll_QMARK_(path)) && (cljs.core.every_QMARK_(cljs.core.fn_QMARK_,path)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (combined,afn){
return (function (structure){
var and__5043__auto__ = (combined.cljs$core$IFn$_invoke$arity$1 ? combined.cljs$core$IFn$_invoke$arity$1(structure) : combined.call(null,structure));
if(cljs.core.truth_(and__5043__auto__)){
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure));
} else {
return and__5043__auto__;
}
});
}),path);
} else {
return null;
}
}
});
com.rpl.specter.navs.if_select = (function com$rpl$specter$navs$if_select(vals,structure,next_fn,then_tester,then_nav,else_nav){
return com.rpl.specter.protocols.select_STAR_((cljs.core.truth_((then_tester.cljs$core$IFn$_invoke$arity$1 ? then_tester.cljs$core$IFn$_invoke$arity$1(structure) : then_tester.call(null,structure)))?then_nav:else_nav),vals,structure,next_fn);
});
com.rpl.specter.navs.if_transform = (function com$rpl$specter$navs$if_transform(vals,structure,next_fn,then_tester,then_nav,else_nav){
return com.rpl.specter.protocols.transform_STAR_((cljs.core.truth_((then_tester.cljs$core$IFn$_invoke$arity$1 ? then_tester.cljs$core$IFn$_invoke$arity$1(structure) : then_tester.call(null,structure)))?then_nav:else_nav),vals,structure,next_fn);
});

/**
 * @interface
 */
com.rpl.specter.navs.AddExtremes = function(){};

var com$rpl$specter$navs$AddExtremes$append_all$dyn_34079 = (function (structure,elements){
var x__5393__auto__ = (((structure == null))?null:structure);
var m__5394__auto__ = (com.rpl.specter.navs.append_all[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(structure,elements) : m__5394__auto__.call(null,structure,elements));
} else {
var m__5392__auto__ = (com.rpl.specter.navs.append_all["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(structure,elements) : m__5392__auto__.call(null,structure,elements));
} else {
throw cljs.core.missing_protocol("AddExtremes.append-all",structure);
}
}
});
com.rpl.specter.navs.append_all = (function com$rpl$specter$navs$append_all(structure,elements){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AddExtremes$append_all$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AddExtremes$append_all$arity$2(structure,elements);
} else {
return com$rpl$specter$navs$AddExtremes$append_all$dyn_34079(structure,elements);
}
});

var com$rpl$specter$navs$AddExtremes$prepend_all$dyn_34080 = (function (structure,elements){
var x__5393__auto__ = (((structure == null))?null:structure);
var m__5394__auto__ = (com.rpl.specter.navs.prepend_all[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(structure,elements) : m__5394__auto__.call(null,structure,elements));
} else {
var m__5392__auto__ = (com.rpl.specter.navs.prepend_all["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(structure,elements) : m__5392__auto__.call(null,structure,elements));
} else {
throw cljs.core.missing_protocol("AddExtremes.prepend-all",structure);
}
}
});
com.rpl.specter.navs.prepend_all = (function com$rpl$specter$navs$prepend_all(structure,elements){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2(structure,elements);
} else {
return com$rpl$specter$navs$AddExtremes$prepend_all$dyn_34080(structure,elements);
}
});

var com$rpl$specter$navs$AddExtremes$append_one$dyn_34081 = (function (structure,elem){
var x__5393__auto__ = (((structure == null))?null:structure);
var m__5394__auto__ = (com.rpl.specter.navs.append_one[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(structure,elem) : m__5394__auto__.call(null,structure,elem));
} else {
var m__5392__auto__ = (com.rpl.specter.navs.append_one["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(structure,elem) : m__5392__auto__.call(null,structure,elem));
} else {
throw cljs.core.missing_protocol("AddExtremes.append-one",structure);
}
}
});
com.rpl.specter.navs.append_one = (function com$rpl$specter$navs$append_one(structure,elem){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AddExtremes$append_one$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AddExtremes$append_one$arity$2(structure,elem);
} else {
return com$rpl$specter$navs$AddExtremes$append_one$dyn_34081(structure,elem);
}
});

var com$rpl$specter$navs$AddExtremes$prepend_one$dyn_34082 = (function (structure,elem){
var x__5393__auto__ = (((structure == null))?null:structure);
var m__5394__auto__ = (com.rpl.specter.navs.prepend_one[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(structure,elem) : m__5394__auto__.call(null,structure,elem));
} else {
var m__5392__auto__ = (com.rpl.specter.navs.prepend_one["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(structure,elem) : m__5392__auto__.call(null,structure,elem));
} else {
throw cljs.core.missing_protocol("AddExtremes.prepend-one",structure);
}
}
});
com.rpl.specter.navs.prepend_one = (function com$rpl$specter$navs$prepend_one(structure,elem){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2(structure,elem);
} else {
return com$rpl$specter$navs$AddExtremes$prepend_one$dyn_34082(structure,elem);
}
});

(com.rpl.specter.navs.AddExtremes["null"] = true);

(com.rpl.specter.navs.append_all["null"] = (function (_,elements){
return elements;
}));

(com.rpl.specter.navs.prepend_all["null"] = (function (_,elements){
return elements;
}));

(com.rpl.specter.navs.append_one["null"] = (function (_,elem){
return (new cljs.core.List(null,elem,null,(1),null));
}));

(com.rpl.specter.navs.prepend_one["null"] = (function (_,elem){
return (new cljs.core.List(null,elem,null,(1),null));
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$append_all$arity$2 = (function (structure,elements){
var structure__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,structure__$1,elements);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2 = (function (structure,elements){
var structure__$1 = this;
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _LT__GT_ = ret;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,_LT__GT_,elements);
var _LT__GT___$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,_LT__GT___$1,structure__$1);
return cljs.core.persistent_BANG_(_LT__GT___$2);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$append_one$arity$2 = (function (structure,elem){
var structure__$1 = this;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure__$1,elem);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2 = (function (structure,elem){
var structure__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null),structure__$1);
}));

(cljs.core.Subvec.prototype.com$rpl$specter$navs$AddExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.com$rpl$specter$navs$AddExtremes$append_all$arity$2 = (function (structure,elements){
var structure__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,structure__$1,elements);
}));

(cljs.core.Subvec.prototype.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2 = (function (structure,elements){
var structure__$1 = this;
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _LT__GT_ = ret;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,_LT__GT_,elements);
var _LT__GT___$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,_LT__GT___$1,structure__$1);
return cljs.core.persistent_BANG_(_LT__GT___$2);
}));

(cljs.core.Subvec.prototype.com$rpl$specter$navs$AddExtremes$append_one$arity$2 = (function (structure,elem){
var structure__$1 = this;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure__$1,elem);
}));

(cljs.core.Subvec.prototype.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2 = (function (structure,elem){
var structure__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null),structure__$1);
}));

(com.rpl.specter.navs.AddExtremes["_"] = true);

(com.rpl.specter.navs.append_all["_"] = (function (structure,elements){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(structure,elements);
}));

(com.rpl.specter.navs.prepend_all["_"] = (function (structure,elements){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(elements,structure);
}));

(com.rpl.specter.navs.append_one["_"] = (function (structure,elem){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(structure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null));
}));

(com.rpl.specter.navs.prepend_one["_"] = (function (structure,elem){
return cljs.core.cons(elem,structure);
}));

/**
 * @interface
 */
com.rpl.specter.navs.UpdateExtremes = function(){};

var com$rpl$specter$navs$UpdateExtremes$update_first$dyn_34085 = (function (s,afn){
var x__5393__auto__ = (((s == null))?null:s);
var m__5394__auto__ = (com.rpl.specter.navs.update_first[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(s,afn) : m__5394__auto__.call(null,s,afn));
} else {
var m__5392__auto__ = (com.rpl.specter.navs.update_first["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(s,afn) : m__5392__auto__.call(null,s,afn));
} else {
throw cljs.core.missing_protocol("UpdateExtremes.update-first",s);
}
}
});
com.rpl.specter.navs.update_first = (function com$rpl$specter$navs$update_first(s,afn){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 == null)))))){
return s.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2(s,afn);
} else {
return com$rpl$specter$navs$UpdateExtremes$update_first$dyn_34085(s,afn);
}
});

var com$rpl$specter$navs$UpdateExtremes$update_last$dyn_34091 = (function (s,afn){
var x__5393__auto__ = (((s == null))?null:s);
var m__5394__auto__ = (com.rpl.specter.navs.update_last[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(s,afn) : m__5394__auto__.call(null,s,afn));
} else {
var m__5392__auto__ = (com.rpl.specter.navs.update_last["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(s,afn) : m__5392__auto__.call(null,s,afn));
} else {
throw cljs.core.missing_protocol("UpdateExtremes.update-last",s);
}
}
});
com.rpl.specter.navs.update_last = (function com$rpl$specter$navs$update_last(s,afn){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 == null)))))){
return s.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2(s,afn);
} else {
return com$rpl$specter$navs$UpdateExtremes$update_last$dyn_34091(s,afn);
}
});


/**
 * @interface
 */
com.rpl.specter.navs.GetExtremes = function(){};

var com$rpl$specter$navs$GetExtremes$get_first$dyn_34092 = (function (s){
var x__5393__auto__ = (((s == null))?null:s);
var m__5394__auto__ = (com.rpl.specter.navs.get_first[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__5394__auto__.call(null,s));
} else {
var m__5392__auto__ = (com.rpl.specter.navs.get_first["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__5392__auto__.call(null,s));
} else {
throw cljs.core.missing_protocol("GetExtremes.get-first",s);
}
}
});
com.rpl.specter.navs.get_first = (function com$rpl$specter$navs$get_first(s){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$GetExtremes$get_first$arity$1 == null)))))){
return s.com$rpl$specter$navs$GetExtremes$get_first$arity$1(s);
} else {
return com$rpl$specter$navs$GetExtremes$get_first$dyn_34092(s);
}
});

var com$rpl$specter$navs$GetExtremes$get_last$dyn_34093 = (function (s){
var x__5393__auto__ = (((s == null))?null:s);
var m__5394__auto__ = (com.rpl.specter.navs.get_last[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__5394__auto__.call(null,s));
} else {
var m__5392__auto__ = (com.rpl.specter.navs.get_last["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__5392__auto__.call(null,s));
} else {
throw cljs.core.missing_protocol("GetExtremes.get-last",s);
}
}
});
com.rpl.specter.navs.get_last = (function com$rpl$specter$navs$get_last(s){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$GetExtremes$get_last$arity$1 == null)))))){
return s.com$rpl$specter$navs$GetExtremes$get_last$arity$1(s);
} else {
return com$rpl$specter$navs$GetExtremes$get_last$dyn_34093(s);
}
});


/**
 * @interface
 */
com.rpl.specter.navs.FastEmpty = function(){};

var com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$dyn_34097 = (function (s){
var x__5393__auto__ = (((s == null))?null:s);
var m__5394__auto__ = (com.rpl.specter.navs.fast_empty_QMARK_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__5394__auto__.call(null,s));
} else {
var m__5392__auto__ = (com.rpl.specter.navs.fast_empty_QMARK_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__5392__auto__.call(null,s));
} else {
throw cljs.core.missing_protocol("FastEmpty.fast-empty?",s);
}
}
});
com.rpl.specter.navs.fast_empty_QMARK_ = (function com$rpl$specter$navs$fast_empty_QMARK_(s){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 == null)))))){
return s.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1(s);
} else {
return com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$dyn_34097(s);
}
});


/**
 * @interface
 */
com.rpl.specter.navs.InsertBeforeIndex = function(){};

var com$rpl$specter$navs$InsertBeforeIndex$insert_before_idx$dyn_34098 = (function (aseq,idx,val){
var x__5393__auto__ = (((aseq == null))?null:aseq);
var m__5394__auto__ = (com.rpl.specter.navs.insert_before_idx[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(aseq,idx,val) : m__5394__auto__.call(null,aseq,idx,val));
} else {
var m__5392__auto__ = (com.rpl.specter.navs.insert_before_idx["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(aseq,idx,val) : m__5392__auto__.call(null,aseq,idx,val));
} else {
throw cljs.core.missing_protocol("InsertBeforeIndex.insert-before-idx",aseq);
}
}
});
com.rpl.specter.navs.insert_before_idx = (function com$rpl$specter$navs$insert_before_idx(aseq,idx,val){
if((((!((aseq == null)))) && ((!((aseq.com$rpl$specter$navs$InsertBeforeIndex$insert_before_idx$arity$3 == null)))))){
return aseq.com$rpl$specter$navs$InsertBeforeIndex$insert_before_idx$arity$3(aseq,idx,val);
} else {
return com$rpl$specter$navs$InsertBeforeIndex$insert_before_idx$dyn_34098(aseq,idx,val);
}
});


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs33974 = (function (getter,updater,meta33975){
this.getter = getter;
this.updater = updater;
this.meta33975 = meta33975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.navs.t_com$rpl$specter$navs33974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33976,meta33975__$1){
var self__ = this;
var _33976__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs33974(self__.getter,self__.updater,meta33975__$1));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs33974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33976){
var self__ = this;
var _33976__$1 = this;
return self__.meta33975;
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs33974.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.navs.t_com$rpl$specter$navs33974.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
if(cljs.core.not(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
return next_fn((self__.getter.cljs$core$IFn$_invoke$arity$1 ? self__.getter.cljs$core$IFn$_invoke$arity$1(structure) : self__.getter.call(null,structure)));
} else {
return com.rpl.specter.impl.NONE;
}
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs33974.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__32394__auto__,vals__32395__auto__,structure,next_fn__32396__auto__){
var self__ = this;
var this__32394__auto____$1 = this;
var next_fn = (function (s__32397__auto__){
return (next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__32396__auto__.cljs$core$IFn$_invoke$arity$2(vals__32395__auto__,s__32397__auto__) : next_fn__32396__auto__.call(null,vals__32395__auto__,s__32397__auto__));
});
if(cljs.core.truth_(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
return structure;
} else {
return (self__.updater.cljs$core$IFn$_invoke$arity$2 ? self__.updater.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : self__.updater.call(null,structure,next_fn));
}
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs33974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"updater","updater",2107748764,null),new cljs.core.Symbol(null,"meta33975","meta33975",76660696,null)], null);
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs33974.cljs$lang$type = true);

(com.rpl.specter.navs.t_com$rpl$specter$navs33974.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs33974");

(com.rpl.specter.navs.t_com$rpl$specter$navs33974.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs33974");
}));

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs33974.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs33974 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs33974(getter,updater,meta33975){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs33974(getter,updater,meta33975));
});




com.rpl.specter.navs.PosNavigator_select_STAR_ = (function com$rpl$specter$navs$PosNavigator_select_STAR_(getter,updater,structure,next_fn){
if(cljs.core.not(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
var G__33973 = (getter.cljs$core$IFn$_invoke$arity$1 ? getter.cljs$core$IFn$_invoke$arity$1(structure) : getter.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__33973) : next_fn.call(null,G__33973));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.navs.PosNavigator_transform_STAR_ = (function com$rpl$specter$navs$PosNavigator_transform_STAR_(getter,updater,structure,next_fn){
if(cljs.core.truth_(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
return structure;
} else {
return (updater.cljs$core$IFn$_invoke$arity$2 ? updater.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : updater.call(null,structure,next_fn));
}
});

com.rpl.specter.navs.PosNavigator = com.rpl.specter.impl.direct_nav_obj((function (getter,updater){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs33974(getter,updater,null));
}));
com.rpl.specter.navs.vec_count = (function com$rpl$specter$navs$vec_count(v){
return cljs.core.count(v);
});
com.rpl.specter.navs.update_first_list = (function com$rpl$specter$navs$update_first_list(l,afn){
var newf = (function (){var G__33977 = cljs.core.first(l);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__33977) : afn.call(null,G__33977));
})();
var restl = cljs.core.rest(l);
if((com.rpl.specter.impl.NONE === newf)){
return restl;
} else {
return cljs.core.cons(newf,restl);
}
});
com.rpl.specter.navs.update_last_list = (function com$rpl$specter$navs$update_last_list(l,afn){
var lastl = (function (){var G__33978 = cljs.core.last(l);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__33978) : afn.call(null,G__33978));
})();
var bl = cljs.core.butlast(l);
if((com.rpl.specter.impl.NONE === lastl)){
if((bl == null)){
return cljs.core.List.EMPTY;
} else {
return bl;
}
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(bl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lastl], null));
}
});
com.rpl.specter.navs.update_first_vector = (function com$rpl$specter$navs$update_first_vector(v,afn){
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));
var newv = (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(val) : afn.call(null,val));
if((com.rpl.specter.impl.NONE === newv)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,(0),newv);
}
});
com.rpl.specter.navs.update_last_vector = (function com$rpl$specter$navs$update_last_vector(v,afn){
var c = (com.rpl.specter.navs.vec_count(v) | (0));
var G__33979 = c;
switch (G__33979) {
case (1):
var vec__33980 = v;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33980,(0),null);
var newe = (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(e) : afn.call(null,e));
if((com.rpl.specter.impl.NONE === newe)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [newe], null);
}

break;
case (2):
var vec__33983 = v;
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33983,(0),null);
var e2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33983,(1),null);
var newe = (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(e2) : afn.call(null,e2));
if((com.rpl.specter.impl.NONE === newe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,newe], null);
}

break;
default:
var i = (c - (1));
var newe = (function (){var G__33986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__33986) : afn.call(null,G__33986));
})();
if((com.rpl.specter.impl.NONE === newe)){
return cljs.core.pop(v);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,i,newe);
}

}
});
com.rpl.specter.navs.transient_vec_count = (function com$rpl$specter$navs$transient_vec_count(v){
return cljs.core.count(v);
});
(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 = (function (v,afn){
var v__$1 = this;
return com.rpl.specter.navs.update_first_vector(v__$1,afn);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 = (function (v,afn){
var v__$1 = this;
return com.rpl.specter.navs.update_last_vector(v__$1,afn);
}));

(cljs.core.Subvec.prototype.com$rpl$specter$navs$UpdateExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 = (function (v,afn){
var v__$1 = this;
return com.rpl.specter.navs.update_first_vector(v__$1,afn);
}));

(cljs.core.Subvec.prototype.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 = (function (v,afn){
var v__$1 = this;
return com.rpl.specter.navs.update_last_vector(v__$1,afn);
}));

(com.rpl.specter.navs.UpdateExtremes["string"] = true);

(com.rpl.specter.navs.update_first["string"] = (function (s,afn){
var rests = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),cljs.core.count(s));
var newb = (function (){var G__33987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0));
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__33987) : afn.call(null,G__33987));
})();
if((com.rpl.specter.impl.NONE === newb)){
return rests;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(newb),rests].join('');
}
}));

(com.rpl.specter.navs.update_last["string"] = (function (s,afn){
var last_idx = (cljs.core.count(s) - (1));
var newl = (function (){var G__33988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,last_idx);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__33988) : afn.call(null,G__33988));
})();
var begins = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_idx);
if((com.rpl.specter.impl.NONE === newl)){
return begins;
} else {
return [begins,cljs.core.str.cljs$core$IFn$_invoke$arity$1(newl)].join('');
}
}));

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$UpdateExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 = (function (e,afn){
var e__$1 = this;
return cljs.core.__GT_MapEntry((function (){var G__33989 = cljs.core.key(e__$1);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__33989) : afn.call(null,G__33989));
})(),cljs.core.val(e__$1),null);
}));

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 = (function (e,afn){
var e__$1 = this;
return cljs.core.__GT_MapEntry(cljs.core.key(e__$1),(function (){var G__33990 = cljs.core.val(e__$1);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__33990) : afn.call(null,G__33990));
})(),null);
}));

(com.rpl.specter.navs.UpdateExtremes["_"] = true);

(com.rpl.specter.navs.update_first["_"] = (function (l,val){
return com.rpl.specter.navs.update_first_list(l,val);
}));

(com.rpl.specter.navs.update_last["_"] = (function (l,val){
return com.rpl.specter.navs.update_last_list(l,val);
}));
(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$get_first$arity$1 = (function (v){
var v__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__$1,(0));
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$get_last$arity$1 = (function (v){
var v__$1 = this;
return cljs.core.peek(v__$1);
}));

(com.rpl.specter.navs.GetExtremes["_"] = true);

(com.rpl.specter.navs.get_first["_"] = (function (s){
return cljs.core.first(s);
}));

(com.rpl.specter.navs.get_last["_"] = (function (s){
return cljs.core.last(s);
}));

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$GetExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$GetExtremes$get_first$arity$1 = (function (e){
var e__$1 = this;
return cljs.core.key(e__$1);
}));

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$GetExtremes$get_last$arity$1 = (function (e){
var e__$1 = this;
return cljs.core.val(e__$1);
}));

(com.rpl.specter.navs.GetExtremes["string"] = true);

(com.rpl.specter.navs.get_first["string"] = (function (s){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0));
}));

(com.rpl.specter.navs.get_last["string"] = (function (s){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
}));
(com.rpl.specter.navs.FastEmpty["null"] = true);

(com.rpl.specter.navs.fast_empty_QMARK_["null"] = (function (_){
return true;
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$FastEmpty$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 = (function (v){
var v__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),com.rpl.specter.navs.vec_count(v__$1));
}));

(cljs.core.TransientVector.prototype.com$rpl$specter$navs$FastEmpty$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.TransientVector.prototype.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 = (function (v){
var v__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),com.rpl.specter.navs.transient_vec_count(v__$1));
}));

(com.rpl.specter.navs.FastEmpty["_"] = true);

(com.rpl.specter.navs.fast_empty_QMARK_["_"] = (function (s){
return cljs.core.empty_QMARK_(s);
}));
com.rpl.specter.navs.do_keypath_transform = (function com$rpl$specter$navs$do_keypath_transform(vals,structure,key,next_fn){
var newv = (function (){var G__33991 = vals;
var G__33992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,key);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__33991,G__33992) : next_fn.call(null,G__33991,G__33992));
})();
if((newv === com.rpl.specter.impl.NONE)){
if(cljs.core.sequential_QMARK_(structure)){
return com.rpl.specter.impl.srange_transform_STAR_(structure,key,(key + (1)),(function (_){
return cljs.core.PersistentVector.EMPTY;
}));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(structure,key);
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(structure,key,newv);
}
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs33993 = (function (key,meta33994){
this.key = key;
this.meta33994 = meta33994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.navs.t_com$rpl$specter$navs33993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33995,meta33994__$1){
var self__ = this;
var _33995__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs33993(self__.key,meta33994__$1));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs33993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33995){
var self__ = this;
var _33995__$1 = this;
return self__.meta33994;
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs33993.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.navs.t_com$rpl$specter$navs33993.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__33996 = vals;
var G__33997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.key);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__33996,G__33997) : next_fn.call(null,G__33996,G__33997));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs33993.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.do_keypath_transform(vals,structure,self__.key,next_fn);
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs33993.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta33994","meta33994",1051810472,null)], null);
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs33993.cljs$lang$type = true);

(com.rpl.specter.navs.t_com$rpl$specter$navs33993.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs33993");

(com.rpl.specter.navs.t_com$rpl$specter$navs33993.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs33993");
}));

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs33993.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs33993 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs33993(key,meta33994){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs33993(key,meta33994));
});


/**
 * Navigates to the specified key, navigating to nil if it does not exist.
 *        Setting the value to NONE will remove it from the collection.
 */
com.rpl.specter.navs.keypath_STAR_ = com.rpl.specter.impl.direct_nav_obj((function (key){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs33993(key,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs33998 = (function (k,meta33999){
this.k = k;
this.meta33999 = meta33999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.navs.t_com$rpl$specter$navs33998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34000,meta33999__$1){
var self__ = this;
var _34000__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs33998(self__.k,meta33999__$1));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs33998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34000){
var self__ = this;
var _34000__$1 = this;
return self__.meta33999;
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs33998.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.navs.t_com$rpl$specter$navs33998.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.k)){
var G__34001 = vals;
var G__34002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.k);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__34001,G__34002) : next_fn.call(null,G__34001,G__34002));
} else {
return com.rpl.specter.impl.NONE;
}
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs33998.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.k)){
return com.rpl.specter.navs.do_keypath_transform(vals,structure,self__.k,next_fn);
} else {
return structure;
}
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs33998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta33999","meta33999",-246167549,null)], null);
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs33998.cljs$lang$type = true);

(com.rpl.specter.navs.t_com$rpl$specter$navs33998.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs33998");

(com.rpl.specter.navs.t_com$rpl$specter$navs33998.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs33998");
}));

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs33998.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs33998 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs33998(k,meta33999){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs33998(k,meta33999));
});


/**
 * Navigates to the key only if it exists in the map. Setting the value to NONE
 *        will remove it from the collection.
 */
com.rpl.specter.navs.must_STAR_ = com.rpl.specter.impl.direct_nav_obj((function (k){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs33998(k,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs34003 = (function (i,meta34004){
this.i = i;
this.meta34004 = meta34004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.navs.t_com$rpl$specter$navs34003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34005,meta34004__$1){
var self__ = this;
var _34005__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs34003(self__.i,meta34004__$1));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs34003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34005){
var self__ = this;
var _34005__$1 = this;
return self__.meta34004;
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs34003.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.navs.t_com$rpl$specter$navs34003.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__34006 = vals;
var G__34007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__34006,G__34007) : next_fn.call(null,G__34006,G__34007));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs34003.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(structure)){
var newv = (function (){var G__34008 = vals;
var G__34009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__34008,G__34009) : next_fn.call(null,G__34008,G__34009));
})();
if((newv === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.srange_transform_STAR_(structure,self__.i,(self__.i + (1)),(function (_){
return cljs.core.PersistentVector.EMPTY;
}));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(structure,self__.i,newv);
}
} else {
return com.rpl.specter.impl.srange_transform_STAR_(structure,self__.i,(self__.i + (1)),(function (p__34010){
var vec__34011 = p__34010;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34011,(0),null);
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,e) : next_fn.call(null,vals,e));
if((v === com.rpl.specter.impl.NONE)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
}));
}
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs34003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta34004","meta34004",685900949,null)], null);
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs34003.cljs$lang$type = true);

(com.rpl.specter.navs.t_com$rpl$specter$navs34003.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs34003");

(com.rpl.specter.navs.t_com$rpl$specter$navs34003.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs34003");
}));

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs34003.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs34003 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs34003(i,meta34004){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs34003(i,meta34004));
});


com.rpl.specter.navs.nthpath_STAR_ = com.rpl.specter.impl.direct_nav_obj((function (i){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs34003(i,null));
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.navs.SrangeEndFunction = (function (end_fn,__meta,__extmap,__hash){
this.end_fn = end_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k34015,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__34019 = k34015;
var G__34019__$1 = (((G__34019 instanceof cljs.core.Keyword))?G__34019.fqn:null);
switch (G__34019__$1) {
case "end-fn":
return self__.end_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34015,else__5346__auto__);

}
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__34020){
var vec__34021 = p__34020;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34021,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34021,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#com.rpl.specter.navs.SrangeEndFunction{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-fn","end-fn",54055684),self__.end_fn],null))], null),self__.__extmap));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34014){
var self__ = this;
var G__34014__$1 = this;
return (new cljs.core.RecordIter((0),G__34014__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-fn","end-fn",54055684)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-674086206 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34016,other34017){
var self__ = this;
var this34016__$1 = this;
return (((!((other34017 == null)))) && ((((this34016__$1.constructor === other34017.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34016__$1.end_fn,other34017.end_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34016__$1.__extmap,other34017.__extmap)))))));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end-fn","end-fn",54055684),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k34015){
var self__ = this;
var this__5350__auto____$1 = this;
var G__34024 = k34015;
var G__34024__$1 = (((G__34024 instanceof cljs.core.Keyword))?G__34024.fqn:null);
switch (G__34024__$1) {
case "end-fn":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34015);

}
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__34014){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__34025 = cljs.core.keyword_identical_QMARK_;
var expr__34026 = k__5352__auto__;
if(cljs.core.truth_((pred__34025.cljs$core$IFn$_invoke$arity$2 ? pred__34025.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-fn","end-fn",54055684),expr__34026) : pred__34025.call(null,new cljs.core.Keyword(null,"end-fn","end-fn",54055684),expr__34026)))){
return (new com.rpl.specter.navs.SrangeEndFunction(G__34014,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__34014),null));
}
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-fn","end-fn",54055684),self__.end_fn,null))], null),self__.__extmap));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__34014){
var self__ = this;
var this__5342__auto____$1 = this;
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,G__34014,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(com.rpl.specter.navs.SrangeEndFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end-fn","end-fn",1694587211,null)], null);
}));

(com.rpl.specter.navs.SrangeEndFunction.cljs$lang$type = true);

(com.rpl.specter.navs.SrangeEndFunction.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"com.rpl.specter.navs/SrangeEndFunction",null,(1),null));
}));

(com.rpl.specter.navs.SrangeEndFunction.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"com.rpl.specter.navs/SrangeEndFunction");
}));

/**
 * Positional factory function for com.rpl.specter.navs/SrangeEndFunction.
 */
com.rpl.specter.navs.__GT_SrangeEndFunction = (function com$rpl$specter$navs$__GT_SrangeEndFunction(end_fn){
return (new com.rpl.specter.navs.SrangeEndFunction(end_fn,null,null,null));
});

/**
 * Factory function for com.rpl.specter.navs/SrangeEndFunction, taking a map of keywords to field values.
 */
com.rpl.specter.navs.map__GT_SrangeEndFunction = (function com$rpl$specter$navs$map__GT_SrangeEndFunction(G__34018){
var extmap__5385__auto__ = (function (){var G__34028 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34018,new cljs.core.Keyword(null,"end-fn","end-fn",54055684));
if(cljs.core.record_QMARK_(G__34018)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34028);
} else {
return G__34028;
}
})();
return (new com.rpl.specter.navs.SrangeEndFunction(new cljs.core.Keyword(null,"end-fn","end-fn",54055684).cljs$core$IFn$_invoke$arity$1(G__34018),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

com.rpl.specter.navs.invoke_end_fn = (function com$rpl$specter$navs$invoke_end_fn(end_fn,structure,start){
if((end_fn instanceof com.rpl.specter.navs.SrangeEndFunction)){
var fexpr__34029 = end_fn.end_fn;
return (fexpr__34029.cljs$core$IFn$_invoke$arity$2 ? fexpr__34029.cljs$core$IFn$_invoke$arity$2(structure,start) : fexpr__34029.call(null,structure,start));
} else {
return (end_fn.cljs$core$IFn$_invoke$arity$1 ? end_fn.cljs$core$IFn$_invoke$arity$1(structure) : end_fn.call(null,structure));
}
});
com.rpl.specter.navs.insert_before_index_list = (function com$rpl$specter$navs$insert_before_index_list(lst,idx,val){
var vec__34030 = cljs.core.split_at(idx,lst);
var front = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34030,(0),null);
var back = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34030,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(front,cljs.core.cons(val,back));
});
(com.rpl.specter.navs.InsertBeforeIndex["null"] = true);

(com.rpl.specter.navs.insert_before_idx["null"] = (function (_,idx,val){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),idx)){
return (new cljs.core.List(null,val,null,(1),null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("For a nil structure, can only insert before index 0",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insertion-index","insertion-index",837916882),idx], null));
}
}));

(com.rpl.specter.navs.InsertBeforeIndex["string"] = true);

(com.rpl.specter.navs.insert_before_idx["string"] = (function (aseq,idx,val){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,com.rpl.specter.navs.insert_before_index_list(aseq,idx,val));
}));

(cljs.core.LazySeq.prototype.com$rpl$specter$navs$InsertBeforeIndex$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.com$rpl$specter$navs$InsertBeforeIndex$insert_before_idx$arity$3 = (function (aseq,idx,val){
var aseq__$1 = this;
return com.rpl.specter.navs.insert_before_index_list(aseq__$1,idx,val);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$InsertBeforeIndex$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$InsertBeforeIndex$insert_before_idx$arity$3 = (function (aseq,idx,val){
var aseq__$1 = this;
var front = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(aseq__$1,(0),idx);
var back = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(aseq__$1,idx);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(front,val),back);
}));

(cljs.core.List.prototype.com$rpl$specter$navs$InsertBeforeIndex$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.com$rpl$specter$navs$InsertBeforeIndex$insert_before_idx$arity$3 = (function (aseq,idx,val){
var aseq__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,(0))){
return cljs.core.cons(val,aseq__$1);
} else {
return com.rpl.specter.navs.insert_before_index_list(aseq__$1,idx,val);

}
}));

//# sourceMappingURL=com.rpl.specter.navs.js.map
