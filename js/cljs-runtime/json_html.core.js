goog.provide('json_html.core');
json_html.core.render_keyword = (function json_html$core$render_keyword(k){
return [":",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name)(k)))].join('');
});
json_html.core.str_compare = (function json_html$core$str_compare(k1,k2){
return cljs.core.compare(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k2));
});
json_html.core.sort_map = (function json_html$core$sort_map(m){
var m__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__29310){
var vec__29315 = p__29310;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29315,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29315,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(k),Object))?cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(k):k),v], null);
}),m);
try{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),m__$1);
}catch (e29319){if((e29319 instanceof Error)){
var _ = e29319;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map_by(json_html.core.str_compare),m__$1);
} else {
throw e29319;

}
}});
json_html.core.sort_set = (function json_html$core$sort_set(s){
try{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),s);
}catch (e29320){if((e29320 instanceof Error)){
var _ = e29320;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set_by(json_html.core.str_compare),s);
} else {
throw e29320;

}
}});
json_html.core.url_regex = cljs.core.re_pattern("(\\b(https?|ftp|file|ldap)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]*[-A-Za-z0-9+&@#/%=~_|])");
/**
 * Make links clickable.
 */
json_html.core.linkify_links = (function json_html$core$linkify_links(string){
return clojure.string.replace(string,json_html.core.url_regex,"<a class='jh-type-string-link' href=$1>$1</a>");
});

/**
 * @interface
 */
json_html.core.Render = function(){};

var json_html$core$Render$render$dyn_29438 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (json_html.core.render[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (json_html.core.render["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Render.render",this$);
}
}
});
/**
 * Renders the element a Hiccup structure
 */
json_html.core.render = (function json_html$core$render(this$){
if((((!((this$ == null)))) && ((!((this$.json_html$core$Render$render$arity$1 == null)))))){
return this$.json_html$core$Render$render$arity$1(this$);
} else {
return json_html$core$Render$render$dyn_29438(this$);
}
});

json_html.core.escape_html = (function json_html$core$escape_html(s){
return clojure.string.escape(s,new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;",">","&gt;","<","&lt;","\"","&quot;"], null));
});

json_html.core.obj__GT_clj = (function json_html$core$obj__GT_clj(obj){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (props,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(obj[k]));
}),cljs.core.PersistentArrayMap.EMPTY,Object.keys(obj));
});


json_html.core.render_collection = (function json_html$core$render_collection(col){
if(cljs.core.empty_QMARK_(col)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jh-type-object","div.jh-type-object",1704701538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-collection","span.jh-empty-collection",-107581393)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.jh-type-object","table.jh-type-object",-163995322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5523__auto__ = (function json_html$core$render_collection_$_iter__29329(s__29330){
return (new cljs.core.LazySeq(null,(function (){
var s__29330__$1 = s__29330;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29330__$1);
if(temp__5804__auto__){
var s__29330__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29330__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29330__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29332 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29331 = (0);
while(true){
if((i__29331 < size__5522__auto__)){
var vec__29339 = cljs.core._nth(c__5521__auto__,i__29331);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29339,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29339,(1),null);
cljs.core.chunk_append(b__29332,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-array-key","th.jh-key.jh-array-key",-1623829832),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-array-value","td.jh-value.jh-array-value",1645079212),(json_html.core.render_html.cljs$core$IFn$_invoke$arity$1 ? json_html.core.render_html.cljs$core$IFn$_invoke$arity$1(v) : json_html.core.render_html.call(null,v))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__29460 = (i__29331 + (1));
i__29331 = G__29460;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29332),json_html$core$render_collection_$_iter__29329(cljs.core.chunk_rest(s__29330__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29332),null);
}
} else {
var vec__29342 = cljs.core.first(s__29330__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29342,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29342,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-array-key","th.jh-key.jh-array-key",-1623829832),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-array-value","td.jh-value.jh-array-value",1645079212),(json_html.core.render_html.cljs$core$IFn$_invoke$arity$1 ? json_html.core.render_html.cljs$core$IFn$_invoke$arity$1(v) : json_html.core.render_html.call(null,v))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),json_html$core$render_collection_$_iter__29329(cljs.core.rest(s__29330__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,col));
})()], null)], null);
}
});

json_html.core.render_set = (function json_html$core$render_set(s){
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jh-type-set","div.jh-type-set",-367189823),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-set","span.jh-empty-set",-1364654969)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = (function json_html$core$render_set_$_iter__29347(s__29348){
return (new cljs.core.LazySeq(null,(function (){
var s__29348__$1 = s__29348;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29348__$1);
if(temp__5804__auto__){
var s__29348__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29348__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29348__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29350 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29349 = (0);
while(true){
if((i__29349 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__29349);
cljs.core.chunk_append(b__29350,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.jh-value","li.jh-value",-344939266),(json_html.core.render_html.cljs$core$IFn$_invoke$arity$1 ? json_html.core.render_html.cljs$core$IFn$_invoke$arity$1(item) : json_html.core.render_html.call(null,item))], null));

var G__29468 = (i__29349 + (1));
i__29349 = G__29468;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29350),json_html$core$render_set_$_iter__29347(cljs.core.chunk_rest(s__29348__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29350),null);
}
} else {
var item = cljs.core.first(s__29348__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.jh-value","li.jh-value",-344939266),(json_html.core.render_html.cljs$core$IFn$_invoke$arity$1 ? json_html.core.render_html.cljs$core$IFn$_invoke$arity$1(item) : json_html.core.render_html.call(null,item))], null),json_html$core$render_set_$_iter__29347(cljs.core.rest(s__29348__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(json_html.core.sort_set(s));
})()], null);
}
});

json_html.core.render_map = (function json_html$core$render_map(m){
if(cljs.core.empty_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jh-type-object","div.jh-type-object",1704701538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-map","span.jh-empty-map",-2061532971)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.jh-type-object","table.jh-type-object",-163995322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5523__auto__ = (function json_html$core$render_map_$_iter__29360(s__29361){
return (new cljs.core.LazySeq(null,(function (){
var s__29361__$1 = s__29361;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29361__$1);
if(temp__5804__auto__){
var s__29361__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29361__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29361__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29363 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29362 = (0);
while(true){
if((i__29362 < size__5522__auto__)){
var vec__29371 = cljs.core._nth(c__5521__auto__,i__29362);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29371,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29371,(1),null);
cljs.core.chunk_append(b__29363,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-object-key","th.jh-key.jh-object-key",1382268279),(json_html.core.render_html.cljs$core$IFn$_invoke$arity$1 ? json_html.core.render_html.cljs$core$IFn$_invoke$arity$1(k) : json_html.core.render_html.call(null,k))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-object-value","td.jh-value.jh-object-value",-2080818691),(json_html.core.render_html.cljs$core$IFn$_invoke$arity$1 ? json_html.core.render_html.cljs$core$IFn$_invoke$arity$1(v) : json_html.core.render_html.call(null,v))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__29469 = (i__29362 + (1));
i__29362 = G__29469;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29363),json_html$core$render_map_$_iter__29360(cljs.core.chunk_rest(s__29361__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29363),null);
}
} else {
var vec__29386 = cljs.core.first(s__29361__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29386,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29386,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-object-key","th.jh-key.jh-object-key",1382268279),(json_html.core.render_html.cljs$core$IFn$_invoke$arity$1 ? json_html.core.render_html.cljs$core$IFn$_invoke$arity$1(k) : json_html.core.render_html.call(null,k))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-object-value","td.jh-value.jh-object-value",-2080818691),(json_html.core.render_html.cljs$core$IFn$_invoke$arity$1 ? json_html.core.render_html.cljs$core$IFn$_invoke$arity$1(v) : json_html.core.render_html.call(null,v))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),json_html$core$render_map_$_iter__29360(cljs.core.rest(s__29361__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(json_html.core.sort_map(m));
})()], null)], null);
}
});

json_html.core.render_string = (function json_html$core$render_string(s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-string","span.jh-type-string",-94106783),((clojure.string.blank_QMARK_(s))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-string","span.jh-empty-string",1227187446)], null):json_html.core.escape_html(s))], null);
});

json_html.core.render_html = (function json_html$core$render_html(v){
var t = cljs.core.type(v);
if((((!((v == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === v.json_html$core$Render$))))?true:(((!v.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(json_html.core.Render,v):false)):cljs.core.native_satisfies_QMARK_(json_html.core.Render,v))){
return json_html.core.render(v);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-string","span.jh-type-string",-94106783),json_html.core.render_keyword(v)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-string","span.jh-type-string",-94106783),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,String)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-string","span.jh-type-string",-94106783),json_html.core.render_string(v)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,Date)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-date","span.jh-type-date",-1243309956),v.toString()], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,Boolean)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-bool","span.jh-type-bool",53751640),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,Number)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-number","span.jh-type-number",1495617844),v], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,Array)){
var G__29393 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(v);
return (json_html.core.render_html.cljs$core$IFn$_invoke$arity$1 ? json_html.core.render_html.cljs$core$IFn$_invoke$arity$1(G__29393) : json_html.core.render_html.call(null,G__29393));
} else {
if((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IMap$))))?true:(((!v.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,v):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,v))){
return json_html.core.render_map(v);
} else {
if((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$ISet$))))?true:(((!v.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,v):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,v))){
return json_html.core.render_set(v);
} else {
if((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (8))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$ICollection$))))?true:(((!v.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,v):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,v))){
return json_html.core.render_collection(v);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,Object)){
var G__29408 = json_html.core.obj__GT_clj(v);
return (json_html.core.render_html.cljs$core$IFn$_invoke$arity$1 ? json_html.core.render_html.cljs$core$IFn$_invoke$arity$1(G__29408) : json_html.core.render_html.call(null,G__29408));
} else {
return null;

}
}
}
}
}
}
}
}
}
}
}
}
});

json_html.core.edn__GT_hiccup = (function json_html$core$edn__GT_hiccup(edn){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jh-root","div.jh-root",-111047998),json_html.core.render_html(edn)], null);
});

json_html.core.edn__GT_html = (function json_html$core$edn__GT_html(edn){
return json_html.core.linkify_links(json_html.html.html(json_html.core.edn__GT_hiccup(edn)));
});

json_html.core.json__GT_hiccup = (function json_html$core$json__GT_hiccup(json){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jh-root","div.jh-root",-111047998),json_html.core.render_html(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(json))], null);
});

json_html.core.json__GT_html = (function json_html$core$json__GT_html(json){
return json_html.core.linkify_links(json_html.html.html(json_html.core.json__GT_hiccup(json)));
});

//# sourceMappingURL=json_html.core.js.map
