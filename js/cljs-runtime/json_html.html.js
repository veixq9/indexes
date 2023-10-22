goog.provide('json_html.html');
json_html.html.normalize_body = (function json_html$html$normalize_body(body){
if(cljs.core.coll_QMARK_(body)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(body));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(body);
}
});
/**
 * Converts its arguments into a string using to-str.
 */
json_html.html.as_str = (function json_html$html$as_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29307 = arguments.length;
var i__5770__auto___29308 = (0);
while(true){
if((i__5770__auto___29308 < len__5769__auto___29307)){
args__5775__auto__.push((arguments[i__5770__auto___29308]));

var G__29309 = (i__5770__auto___29308 + (1));
i__5770__auto___29308 = G__29309;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return json_html.html.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(json_html.html.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(json_html.html.normalize_body,xs));
}));

(json_html.html.as_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(json_html.html.as_str.cljs$lang$applyTo = (function (seq29282){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29282));
}));

/**
 * Change special characters into HTML character entities.
 */
json_html.html.escape_html = (function json_html$html$escape_html(text){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(json_html.html.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0)),/&/,"&amp;"),/</,"&lt;"),/>/,"&gt;"),/'/,"&apos;");
});
json_html.html.xml_attribute = (function json_html$html$xml_attribute(id,value){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(json_html.html.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(id)], 0))),"=\"",json_html.html.escape_html(value),"\""].join('');
});
json_html.html.render_attribute = (function json_html$html$render_attribute(p__29283){
var vec__29284 = p__29283;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29284,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29284,(1),null);
if(value === true){
return json_html.html.xml_attribute(name,name);
} else {
if(cljs.core.not(value)){
return "";
} else {
return json_html.html.xml_attribute(name,value);

}
}
});
json_html.html.render_attr_map = (function json_html$html$render_attr_map(attrs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(json_html.html.render_attribute,attrs)));
});
json_html.html.merge_attributes = (function json_html$html$merge_attributes(p__29289,map_attrs){
var map__29290 = p__29289;
var map__29290__$1 = cljs.core.__destructure_map(map__29290);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29290__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29290__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (p1__29287_SHARP_,p2__29288_SHARP_){
if(cljs.core.truth_(p1__29287_SHARP_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29287_SHARP_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__29288_SHARP_)].join('');
} else {
return p2__29288_SHARP_;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(class$)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null):null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(id)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null):null),map_attrs], 0))], 0));
});
json_html.html.normalize_element = (function json_html$html$normalize_element(p__29295){
var vec__29297 = p__29295;
var seq__29298 = cljs.core.seq(vec__29297);
var first__29299 = cljs.core.first(seq__29298);
var seq__29298__$1 = cljs.core.next(seq__29298);
var tag = first__29299;
var content = seq__29298__$1;
var re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
var vec__29300 = cljs.core.re_matches(re_tag,json_html.html.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(tag)], 0)));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29300,(0),null);
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29300,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29300,(2),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29300,(3),null);
var tag_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(class$)?clojure.string.replace(class$,/\./," "):null)], null);
var map_attrs = cljs.core.first(content);
if(cljs.core.map_QMARK_(map_attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,json_html.html.merge_attributes(tag_attrs,map_attrs),cljs.core.next(content)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,tag_attrs,content], null);
}
});
json_html.html.render_element = (function json_html$html$render_element(p__29303){
var vec__29304 = p__29303;
var seq__29305 = cljs.core.seq(vec__29304);
var first__29306 = cljs.core.first(seq__29305);
var seq__29305__$1 = cljs.core.next(seq__29305);
var tag = first__29306;
var first__29306__$1 = cljs.core.first(seq__29305__$1);
var seq__29305__$2 = cljs.core.next(seq__29305__$1);
var attrs = first__29306__$1;
var content = seq__29305__$2;
return ["<",cljs.core.name(tag),cljs.core.str.cljs$core$IFn$_invoke$arity$1(json_html.html.render_attr_map(attrs)),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(json_html.html.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.flatten(content)], 0))),"</",cljs.core.name(tag),">"].join('');
});
json_html.html.html = (function json_html$html$html(hiccup){
return clojure.walk.postwalk((function (node){
if(cljs.core.vector_QMARK_(node)){
return json_html.html.render_element(json_html.html.normalize_element(node));
} else {
return node;
}
}),hiccup);
});

//# sourceMappingURL=json_html.html.js.map
