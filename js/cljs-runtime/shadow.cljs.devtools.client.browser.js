goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28653 = arguments.length;
var i__5770__auto___28654 = (0);
while(true){
if((i__5770__auto___28654 < len__5769__auto___28653)){
args__5775__auto__.push((arguments[i__5770__auto___28654]));

var G__28655 = (i__5770__auto___28654 + (1));
i__5770__auto___28654 = G__28655;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq28169){
var G__28170 = cljs.core.first(seq28169);
var seq28169__$1 = cljs.core.next(seq28169);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28170,seq28169__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__28171 = cljs.core.seq(sources);
var chunk__28172 = null;
var count__28173 = (0);
var i__28174 = (0);
while(true){
if((i__28174 < count__28173)){
var map__28185 = chunk__28172.cljs$core$IIndexed$_nth$arity$2(null,i__28174);
var map__28185__$1 = cljs.core.__destructure_map(map__28185);
var src = map__28185__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28185__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28185__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28185__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28185__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e28186){var e_28656 = e28186;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_28656);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_28656.message)].join('')));
}

var G__28657 = seq__28171;
var G__28658 = chunk__28172;
var G__28659 = count__28173;
var G__28660 = (i__28174 + (1));
seq__28171 = G__28657;
chunk__28172 = G__28658;
count__28173 = G__28659;
i__28174 = G__28660;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28171);
if(temp__5804__auto__){
var seq__28171__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28171__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28171__$1);
var G__28661 = cljs.core.chunk_rest(seq__28171__$1);
var G__28662 = c__5568__auto__;
var G__28663 = cljs.core.count(c__5568__auto__);
var G__28664 = (0);
seq__28171 = G__28661;
chunk__28172 = G__28662;
count__28173 = G__28663;
i__28174 = G__28664;
continue;
} else {
var map__28187 = cljs.core.first(seq__28171__$1);
var map__28187__$1 = cljs.core.__destructure_map(map__28187);
var src = map__28187__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28187__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28187__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28187__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28187__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e28189){var e_28665 = e28189;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_28665);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_28665.message)].join('')));
}

var G__28666 = cljs.core.next(seq__28171__$1);
var G__28667 = null;
var G__28668 = (0);
var G__28669 = (0);
seq__28171 = G__28666;
chunk__28172 = G__28667;
count__28173 = G__28668;
i__28174 = G__28669;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__28192 = cljs.core.seq(js_requires);
var chunk__28193 = null;
var count__28194 = (0);
var i__28195 = (0);
while(true){
if((i__28195 < count__28194)){
var js_ns = chunk__28193.cljs$core$IIndexed$_nth$arity$2(null,i__28195);
var require_str_28672 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_28672);


var G__28673 = seq__28192;
var G__28674 = chunk__28193;
var G__28675 = count__28194;
var G__28676 = (i__28195 + (1));
seq__28192 = G__28673;
chunk__28193 = G__28674;
count__28194 = G__28675;
i__28195 = G__28676;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28192);
if(temp__5804__auto__){
var seq__28192__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28192__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28192__$1);
var G__28677 = cljs.core.chunk_rest(seq__28192__$1);
var G__28678 = c__5568__auto__;
var G__28679 = cljs.core.count(c__5568__auto__);
var G__28680 = (0);
seq__28192 = G__28677;
chunk__28193 = G__28678;
count__28194 = G__28679;
i__28195 = G__28680;
continue;
} else {
var js_ns = cljs.core.first(seq__28192__$1);
var require_str_28681 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_28681);


var G__28682 = cljs.core.next(seq__28192__$1);
var G__28683 = null;
var G__28684 = (0);
var G__28685 = (0);
seq__28192 = G__28682;
chunk__28193 = G__28683;
count__28194 = G__28684;
i__28195 = G__28685;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__28207){
var map__28208 = p__28207;
var map__28208__$1 = cljs.core.__destructure_map(map__28208);
var msg = map__28208__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28208__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28208__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28209(s__28210){
return (new cljs.core.LazySeq(null,(function (){
var s__28210__$1 = s__28210;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28210__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__28216 = cljs.core.first(xs__6360__auto__);
var map__28216__$1 = cljs.core.__destructure_map(map__28216);
var src = map__28216__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28216__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28216__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__28210__$1,map__28216,map__28216__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__28208,map__28208__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28209_$_iter__28211(s__28212){
return (new cljs.core.LazySeq(null,((function (s__28210__$1,map__28216,map__28216__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__28208,map__28208__$1,msg,info,reload_info){
return (function (){
var s__28212__$1 = s__28212;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__28212__$1);
if(temp__5804__auto____$1){
var s__28212__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28212__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__28212__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__28214 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__28213 = (0);
while(true){
if((i__28213 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__28213);
cljs.core.chunk_append(b__28214,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__28686 = (i__28213 + (1));
i__28213 = G__28686;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28214),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28209_$_iter__28211(cljs.core.chunk_rest(s__28212__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28214),null);
}
} else {
var warning = cljs.core.first(s__28212__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28209_$_iter__28211(cljs.core.rest(s__28212__$2)));
}
} else {
return null;
}
break;
}
});})(s__28210__$1,map__28216,map__28216__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__28208,map__28208__$1,msg,info,reload_info))
,null,null));
});})(s__28210__$1,map__28216,map__28216__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__28208,map__28208__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28209(cljs.core.rest(s__28210__$1)));
} else {
var G__28687 = cljs.core.rest(s__28210__$1);
s__28210__$1 = G__28687;
continue;
}
} else {
var G__28688 = cljs.core.rest(s__28210__$1);
s__28210__$1 = G__28688;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__28228_28689 = cljs.core.seq(warnings);
var chunk__28229_28690 = null;
var count__28230_28691 = (0);
var i__28231_28692 = (0);
while(true){
if((i__28231_28692 < count__28230_28691)){
var map__28242_28693 = chunk__28229_28690.cljs$core$IIndexed$_nth$arity$2(null,i__28231_28692);
var map__28242_28694__$1 = cljs.core.__destructure_map(map__28242_28693);
var w_28695 = map__28242_28694__$1;
var msg_28696__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28242_28694__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_28697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28242_28694__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_28698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28242_28694__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_28699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28242_28694__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_28699)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_28697),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_28698),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_28696__$1)].join(''));


var G__28700 = seq__28228_28689;
var G__28701 = chunk__28229_28690;
var G__28702 = count__28230_28691;
var G__28703 = (i__28231_28692 + (1));
seq__28228_28689 = G__28700;
chunk__28229_28690 = G__28701;
count__28230_28691 = G__28702;
i__28231_28692 = G__28703;
continue;
} else {
var temp__5804__auto___28704 = cljs.core.seq(seq__28228_28689);
if(temp__5804__auto___28704){
var seq__28228_28705__$1 = temp__5804__auto___28704;
if(cljs.core.chunked_seq_QMARK_(seq__28228_28705__$1)){
var c__5568__auto___28706 = cljs.core.chunk_first(seq__28228_28705__$1);
var G__28707 = cljs.core.chunk_rest(seq__28228_28705__$1);
var G__28708 = c__5568__auto___28706;
var G__28709 = cljs.core.count(c__5568__auto___28706);
var G__28710 = (0);
seq__28228_28689 = G__28707;
chunk__28229_28690 = G__28708;
count__28230_28691 = G__28709;
i__28231_28692 = G__28710;
continue;
} else {
var map__28267_28711 = cljs.core.first(seq__28228_28705__$1);
var map__28267_28712__$1 = cljs.core.__destructure_map(map__28267_28711);
var w_28713 = map__28267_28712__$1;
var msg_28714__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28267_28712__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_28715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28267_28712__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_28716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28267_28712__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_28717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28267_28712__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_28717)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_28715),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_28716),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_28714__$1)].join(''));


var G__28718 = cljs.core.next(seq__28228_28705__$1);
var G__28719 = null;
var G__28720 = (0);
var G__28721 = (0);
seq__28228_28689 = G__28718;
chunk__28229_28690 = G__28719;
count__28230_28691 = G__28720;
i__28231_28692 = G__28721;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__28203_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__28203_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__28288){
var map__28289 = p__28288;
var map__28289__$1 = cljs.core.__destructure_map(map__28289);
var msg = map__28289__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28289__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28289__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__28292 = cljs.core.seq(updates);
var chunk__28296 = null;
var count__28297 = (0);
var i__28298 = (0);
while(true){
if((i__28298 < count__28297)){
var path = chunk__28296.cljs$core$IIndexed$_nth$arity$2(null,i__28298);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__28440_28722 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__28444_28723 = null;
var count__28445_28724 = (0);
var i__28446_28725 = (0);
while(true){
if((i__28446_28725 < count__28445_28724)){
var node_28726 = chunk__28444_28723.cljs$core$IIndexed$_nth$arity$2(null,i__28446_28725);
if(cljs.core.not(node_28726.shadow$old)){
var path_match_28727 = shadow.cljs.devtools.client.browser.match_paths(node_28726.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28727)){
var new_link_28728 = (function (){var G__28482 = node_28726.cloneNode(true);
G__28482.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28727),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__28482;
})();
(node_28726.shadow$old = true);

(new_link_28728.onload = ((function (seq__28440_28722,chunk__28444_28723,count__28445_28724,i__28446_28725,seq__28292,chunk__28296,count__28297,i__28298,new_link_28728,path_match_28727,node_28726,path,map__28289,map__28289__$1,msg,updates,reload_info){
return (function (e){
var seq__28483_28729 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__28485_28730 = null;
var count__28486_28731 = (0);
var i__28487_28732 = (0);
while(true){
if((i__28487_28732 < count__28486_28731)){
var map__28492_28733 = chunk__28485_28730.cljs$core$IIndexed$_nth$arity$2(null,i__28487_28732);
var map__28492_28734__$1 = cljs.core.__destructure_map(map__28492_28733);
var task_28735 = map__28492_28734__$1;
var fn_str_28736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28492_28734__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28492_28734__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28738 = goog.getObjectByName(fn_str_28736,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28737)].join(''));

(fn_obj_28738.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28738.cljs$core$IFn$_invoke$arity$2(path,new_link_28728) : fn_obj_28738.call(null,path,new_link_28728));


var G__28739 = seq__28483_28729;
var G__28740 = chunk__28485_28730;
var G__28741 = count__28486_28731;
var G__28742 = (i__28487_28732 + (1));
seq__28483_28729 = G__28739;
chunk__28485_28730 = G__28740;
count__28486_28731 = G__28741;
i__28487_28732 = G__28742;
continue;
} else {
var temp__5804__auto___28743 = cljs.core.seq(seq__28483_28729);
if(temp__5804__auto___28743){
var seq__28483_28744__$1 = temp__5804__auto___28743;
if(cljs.core.chunked_seq_QMARK_(seq__28483_28744__$1)){
var c__5568__auto___28745 = cljs.core.chunk_first(seq__28483_28744__$1);
var G__28746 = cljs.core.chunk_rest(seq__28483_28744__$1);
var G__28747 = c__5568__auto___28745;
var G__28748 = cljs.core.count(c__5568__auto___28745);
var G__28749 = (0);
seq__28483_28729 = G__28746;
chunk__28485_28730 = G__28747;
count__28486_28731 = G__28748;
i__28487_28732 = G__28749;
continue;
} else {
var map__28493_28750 = cljs.core.first(seq__28483_28744__$1);
var map__28493_28751__$1 = cljs.core.__destructure_map(map__28493_28750);
var task_28752 = map__28493_28751__$1;
var fn_str_28753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28493_28751__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28493_28751__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28755 = goog.getObjectByName(fn_str_28753,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28754)].join(''));

(fn_obj_28755.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28755.cljs$core$IFn$_invoke$arity$2(path,new_link_28728) : fn_obj_28755.call(null,path,new_link_28728));


var G__28756 = cljs.core.next(seq__28483_28744__$1);
var G__28757 = null;
var G__28758 = (0);
var G__28759 = (0);
seq__28483_28729 = G__28756;
chunk__28485_28730 = G__28757;
count__28486_28731 = G__28758;
i__28487_28732 = G__28759;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_28726);
});})(seq__28440_28722,chunk__28444_28723,count__28445_28724,i__28446_28725,seq__28292,chunk__28296,count__28297,i__28298,new_link_28728,path_match_28727,node_28726,path,map__28289,map__28289__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28727], 0));

goog.dom.insertSiblingAfter(new_link_28728,node_28726);


var G__28760 = seq__28440_28722;
var G__28761 = chunk__28444_28723;
var G__28762 = count__28445_28724;
var G__28763 = (i__28446_28725 + (1));
seq__28440_28722 = G__28760;
chunk__28444_28723 = G__28761;
count__28445_28724 = G__28762;
i__28446_28725 = G__28763;
continue;
} else {
var G__28764 = seq__28440_28722;
var G__28765 = chunk__28444_28723;
var G__28766 = count__28445_28724;
var G__28767 = (i__28446_28725 + (1));
seq__28440_28722 = G__28764;
chunk__28444_28723 = G__28765;
count__28445_28724 = G__28766;
i__28446_28725 = G__28767;
continue;
}
} else {
var G__28768 = seq__28440_28722;
var G__28769 = chunk__28444_28723;
var G__28770 = count__28445_28724;
var G__28771 = (i__28446_28725 + (1));
seq__28440_28722 = G__28768;
chunk__28444_28723 = G__28769;
count__28445_28724 = G__28770;
i__28446_28725 = G__28771;
continue;
}
} else {
var temp__5804__auto___28772 = cljs.core.seq(seq__28440_28722);
if(temp__5804__auto___28772){
var seq__28440_28773__$1 = temp__5804__auto___28772;
if(cljs.core.chunked_seq_QMARK_(seq__28440_28773__$1)){
var c__5568__auto___28774 = cljs.core.chunk_first(seq__28440_28773__$1);
var G__28776 = cljs.core.chunk_rest(seq__28440_28773__$1);
var G__28777 = c__5568__auto___28774;
var G__28779 = cljs.core.count(c__5568__auto___28774);
var G__28780 = (0);
seq__28440_28722 = G__28776;
chunk__28444_28723 = G__28777;
count__28445_28724 = G__28779;
i__28446_28725 = G__28780;
continue;
} else {
var node_28782 = cljs.core.first(seq__28440_28773__$1);
if(cljs.core.not(node_28782.shadow$old)){
var path_match_28783 = shadow.cljs.devtools.client.browser.match_paths(node_28782.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28783)){
var new_link_28784 = (function (){var G__28494 = node_28782.cloneNode(true);
G__28494.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28783),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__28494;
})();
(node_28782.shadow$old = true);

(new_link_28784.onload = ((function (seq__28440_28722,chunk__28444_28723,count__28445_28724,i__28446_28725,seq__28292,chunk__28296,count__28297,i__28298,new_link_28784,path_match_28783,node_28782,seq__28440_28773__$1,temp__5804__auto___28772,path,map__28289,map__28289__$1,msg,updates,reload_info){
return (function (e){
var seq__28495_28785 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__28497_28786 = null;
var count__28498_28787 = (0);
var i__28499_28788 = (0);
while(true){
if((i__28499_28788 < count__28498_28787)){
var map__28503_28789 = chunk__28497_28786.cljs$core$IIndexed$_nth$arity$2(null,i__28499_28788);
var map__28503_28790__$1 = cljs.core.__destructure_map(map__28503_28789);
var task_28791 = map__28503_28790__$1;
var fn_str_28792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28503_28790__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28503_28790__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28794 = goog.getObjectByName(fn_str_28792,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28793)].join(''));

(fn_obj_28794.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28794.cljs$core$IFn$_invoke$arity$2(path,new_link_28784) : fn_obj_28794.call(null,path,new_link_28784));


var G__28796 = seq__28495_28785;
var G__28797 = chunk__28497_28786;
var G__28798 = count__28498_28787;
var G__28799 = (i__28499_28788 + (1));
seq__28495_28785 = G__28796;
chunk__28497_28786 = G__28797;
count__28498_28787 = G__28798;
i__28499_28788 = G__28799;
continue;
} else {
var temp__5804__auto___28800__$1 = cljs.core.seq(seq__28495_28785);
if(temp__5804__auto___28800__$1){
var seq__28495_28801__$1 = temp__5804__auto___28800__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28495_28801__$1)){
var c__5568__auto___28802 = cljs.core.chunk_first(seq__28495_28801__$1);
var G__28803 = cljs.core.chunk_rest(seq__28495_28801__$1);
var G__28804 = c__5568__auto___28802;
var G__28805 = cljs.core.count(c__5568__auto___28802);
var G__28806 = (0);
seq__28495_28785 = G__28803;
chunk__28497_28786 = G__28804;
count__28498_28787 = G__28805;
i__28499_28788 = G__28806;
continue;
} else {
var map__28504_28807 = cljs.core.first(seq__28495_28801__$1);
var map__28504_28808__$1 = cljs.core.__destructure_map(map__28504_28807);
var task_28809 = map__28504_28808__$1;
var fn_str_28810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28504_28808__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28504_28808__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28812 = goog.getObjectByName(fn_str_28810,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28811)].join(''));

(fn_obj_28812.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28812.cljs$core$IFn$_invoke$arity$2(path,new_link_28784) : fn_obj_28812.call(null,path,new_link_28784));


var G__28813 = cljs.core.next(seq__28495_28801__$1);
var G__28814 = null;
var G__28815 = (0);
var G__28816 = (0);
seq__28495_28785 = G__28813;
chunk__28497_28786 = G__28814;
count__28498_28787 = G__28815;
i__28499_28788 = G__28816;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_28782);
});})(seq__28440_28722,chunk__28444_28723,count__28445_28724,i__28446_28725,seq__28292,chunk__28296,count__28297,i__28298,new_link_28784,path_match_28783,node_28782,seq__28440_28773__$1,temp__5804__auto___28772,path,map__28289,map__28289__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28783], 0));

goog.dom.insertSiblingAfter(new_link_28784,node_28782);


var G__28817 = cljs.core.next(seq__28440_28773__$1);
var G__28818 = null;
var G__28819 = (0);
var G__28820 = (0);
seq__28440_28722 = G__28817;
chunk__28444_28723 = G__28818;
count__28445_28724 = G__28819;
i__28446_28725 = G__28820;
continue;
} else {
var G__28821 = cljs.core.next(seq__28440_28773__$1);
var G__28822 = null;
var G__28823 = (0);
var G__28824 = (0);
seq__28440_28722 = G__28821;
chunk__28444_28723 = G__28822;
count__28445_28724 = G__28823;
i__28446_28725 = G__28824;
continue;
}
} else {
var G__28825 = cljs.core.next(seq__28440_28773__$1);
var G__28826 = null;
var G__28827 = (0);
var G__28828 = (0);
seq__28440_28722 = G__28825;
chunk__28444_28723 = G__28826;
count__28445_28724 = G__28827;
i__28446_28725 = G__28828;
continue;
}
}
} else {
}
}
break;
}


var G__28829 = seq__28292;
var G__28830 = chunk__28296;
var G__28831 = count__28297;
var G__28832 = (i__28298 + (1));
seq__28292 = G__28829;
chunk__28296 = G__28830;
count__28297 = G__28831;
i__28298 = G__28832;
continue;
} else {
var G__28833 = seq__28292;
var G__28834 = chunk__28296;
var G__28835 = count__28297;
var G__28836 = (i__28298 + (1));
seq__28292 = G__28833;
chunk__28296 = G__28834;
count__28297 = G__28835;
i__28298 = G__28836;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28292);
if(temp__5804__auto__){
var seq__28292__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28292__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28292__$1);
var G__28837 = cljs.core.chunk_rest(seq__28292__$1);
var G__28838 = c__5568__auto__;
var G__28839 = cljs.core.count(c__5568__auto__);
var G__28840 = (0);
seq__28292 = G__28837;
chunk__28296 = G__28838;
count__28297 = G__28839;
i__28298 = G__28840;
continue;
} else {
var path = cljs.core.first(seq__28292__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__28505_28841 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__28509_28842 = null;
var count__28510_28843 = (0);
var i__28511_28844 = (0);
while(true){
if((i__28511_28844 < count__28510_28843)){
var node_28845 = chunk__28509_28842.cljs$core$IIndexed$_nth$arity$2(null,i__28511_28844);
if(cljs.core.not(node_28845.shadow$old)){
var path_match_28846 = shadow.cljs.devtools.client.browser.match_paths(node_28845.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28846)){
var new_link_28847 = (function (){var G__28565 = node_28845.cloneNode(true);
G__28565.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28846),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__28565;
})();
(node_28845.shadow$old = true);

(new_link_28847.onload = ((function (seq__28505_28841,chunk__28509_28842,count__28510_28843,i__28511_28844,seq__28292,chunk__28296,count__28297,i__28298,new_link_28847,path_match_28846,node_28845,path,seq__28292__$1,temp__5804__auto__,map__28289,map__28289__$1,msg,updates,reload_info){
return (function (e){
var seq__28566_28848 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__28568_28849 = null;
var count__28569_28850 = (0);
var i__28570_28851 = (0);
while(true){
if((i__28570_28851 < count__28569_28850)){
var map__28577_28854 = chunk__28568_28849.cljs$core$IIndexed$_nth$arity$2(null,i__28570_28851);
var map__28577_28855__$1 = cljs.core.__destructure_map(map__28577_28854);
var task_28856 = map__28577_28855__$1;
var fn_str_28857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28577_28855__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28577_28855__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28859 = goog.getObjectByName(fn_str_28857,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28858)].join(''));

(fn_obj_28859.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28859.cljs$core$IFn$_invoke$arity$2(path,new_link_28847) : fn_obj_28859.call(null,path,new_link_28847));


var G__28860 = seq__28566_28848;
var G__28861 = chunk__28568_28849;
var G__28862 = count__28569_28850;
var G__28863 = (i__28570_28851 + (1));
seq__28566_28848 = G__28860;
chunk__28568_28849 = G__28861;
count__28569_28850 = G__28862;
i__28570_28851 = G__28863;
continue;
} else {
var temp__5804__auto___28864__$1 = cljs.core.seq(seq__28566_28848);
if(temp__5804__auto___28864__$1){
var seq__28566_28865__$1 = temp__5804__auto___28864__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28566_28865__$1)){
var c__5568__auto___28866 = cljs.core.chunk_first(seq__28566_28865__$1);
var G__28867 = cljs.core.chunk_rest(seq__28566_28865__$1);
var G__28868 = c__5568__auto___28866;
var G__28869 = cljs.core.count(c__5568__auto___28866);
var G__28870 = (0);
seq__28566_28848 = G__28867;
chunk__28568_28849 = G__28868;
count__28569_28850 = G__28869;
i__28570_28851 = G__28870;
continue;
} else {
var map__28581_28871 = cljs.core.first(seq__28566_28865__$1);
var map__28581_28872__$1 = cljs.core.__destructure_map(map__28581_28871);
var task_28873 = map__28581_28872__$1;
var fn_str_28874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28581_28872__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28581_28872__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28876 = goog.getObjectByName(fn_str_28874,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28875)].join(''));

(fn_obj_28876.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28876.cljs$core$IFn$_invoke$arity$2(path,new_link_28847) : fn_obj_28876.call(null,path,new_link_28847));


var G__28877 = cljs.core.next(seq__28566_28865__$1);
var G__28878 = null;
var G__28879 = (0);
var G__28880 = (0);
seq__28566_28848 = G__28877;
chunk__28568_28849 = G__28878;
count__28569_28850 = G__28879;
i__28570_28851 = G__28880;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_28845);
});})(seq__28505_28841,chunk__28509_28842,count__28510_28843,i__28511_28844,seq__28292,chunk__28296,count__28297,i__28298,new_link_28847,path_match_28846,node_28845,path,seq__28292__$1,temp__5804__auto__,map__28289,map__28289__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28846], 0));

goog.dom.insertSiblingAfter(new_link_28847,node_28845);


var G__28881 = seq__28505_28841;
var G__28882 = chunk__28509_28842;
var G__28883 = count__28510_28843;
var G__28884 = (i__28511_28844 + (1));
seq__28505_28841 = G__28881;
chunk__28509_28842 = G__28882;
count__28510_28843 = G__28883;
i__28511_28844 = G__28884;
continue;
} else {
var G__28885 = seq__28505_28841;
var G__28886 = chunk__28509_28842;
var G__28887 = count__28510_28843;
var G__28888 = (i__28511_28844 + (1));
seq__28505_28841 = G__28885;
chunk__28509_28842 = G__28886;
count__28510_28843 = G__28887;
i__28511_28844 = G__28888;
continue;
}
} else {
var G__28889 = seq__28505_28841;
var G__28890 = chunk__28509_28842;
var G__28891 = count__28510_28843;
var G__28892 = (i__28511_28844 + (1));
seq__28505_28841 = G__28889;
chunk__28509_28842 = G__28890;
count__28510_28843 = G__28891;
i__28511_28844 = G__28892;
continue;
}
} else {
var temp__5804__auto___28893__$1 = cljs.core.seq(seq__28505_28841);
if(temp__5804__auto___28893__$1){
var seq__28505_28894__$1 = temp__5804__auto___28893__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28505_28894__$1)){
var c__5568__auto___28895 = cljs.core.chunk_first(seq__28505_28894__$1);
var G__28896 = cljs.core.chunk_rest(seq__28505_28894__$1);
var G__28897 = c__5568__auto___28895;
var G__28898 = cljs.core.count(c__5568__auto___28895);
var G__28899 = (0);
seq__28505_28841 = G__28896;
chunk__28509_28842 = G__28897;
count__28510_28843 = G__28898;
i__28511_28844 = G__28899;
continue;
} else {
var node_28900 = cljs.core.first(seq__28505_28894__$1);
if(cljs.core.not(node_28900.shadow$old)){
var path_match_28901 = shadow.cljs.devtools.client.browser.match_paths(node_28900.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28901)){
var new_link_28902 = (function (){var G__28587 = node_28900.cloneNode(true);
G__28587.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28901),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__28587;
})();
(node_28900.shadow$old = true);

(new_link_28902.onload = ((function (seq__28505_28841,chunk__28509_28842,count__28510_28843,i__28511_28844,seq__28292,chunk__28296,count__28297,i__28298,new_link_28902,path_match_28901,node_28900,seq__28505_28894__$1,temp__5804__auto___28893__$1,path,seq__28292__$1,temp__5804__auto__,map__28289,map__28289__$1,msg,updates,reload_info){
return (function (e){
var seq__28588_28903 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__28590_28904 = null;
var count__28591_28905 = (0);
var i__28592_28906 = (0);
while(true){
if((i__28592_28906 < count__28591_28905)){
var map__28600_28907 = chunk__28590_28904.cljs$core$IIndexed$_nth$arity$2(null,i__28592_28906);
var map__28600_28908__$1 = cljs.core.__destructure_map(map__28600_28907);
var task_28909 = map__28600_28908__$1;
var fn_str_28910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28600_28908__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28600_28908__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28912 = goog.getObjectByName(fn_str_28910,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28911)].join(''));

(fn_obj_28912.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28912.cljs$core$IFn$_invoke$arity$2(path,new_link_28902) : fn_obj_28912.call(null,path,new_link_28902));


var G__28913 = seq__28588_28903;
var G__28914 = chunk__28590_28904;
var G__28915 = count__28591_28905;
var G__28916 = (i__28592_28906 + (1));
seq__28588_28903 = G__28913;
chunk__28590_28904 = G__28914;
count__28591_28905 = G__28915;
i__28592_28906 = G__28916;
continue;
} else {
var temp__5804__auto___28917__$2 = cljs.core.seq(seq__28588_28903);
if(temp__5804__auto___28917__$2){
var seq__28588_28918__$1 = temp__5804__auto___28917__$2;
if(cljs.core.chunked_seq_QMARK_(seq__28588_28918__$1)){
var c__5568__auto___28919 = cljs.core.chunk_first(seq__28588_28918__$1);
var G__28920 = cljs.core.chunk_rest(seq__28588_28918__$1);
var G__28921 = c__5568__auto___28919;
var G__28922 = cljs.core.count(c__5568__auto___28919);
var G__28923 = (0);
seq__28588_28903 = G__28920;
chunk__28590_28904 = G__28921;
count__28591_28905 = G__28922;
i__28592_28906 = G__28923;
continue;
} else {
var map__28601_28924 = cljs.core.first(seq__28588_28918__$1);
var map__28601_28925__$1 = cljs.core.__destructure_map(map__28601_28924);
var task_28926 = map__28601_28925__$1;
var fn_str_28927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28601_28925__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28601_28925__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28929 = goog.getObjectByName(fn_str_28927,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28928)].join(''));

(fn_obj_28929.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28929.cljs$core$IFn$_invoke$arity$2(path,new_link_28902) : fn_obj_28929.call(null,path,new_link_28902));


var G__28930 = cljs.core.next(seq__28588_28918__$1);
var G__28931 = null;
var G__28932 = (0);
var G__28933 = (0);
seq__28588_28903 = G__28930;
chunk__28590_28904 = G__28931;
count__28591_28905 = G__28932;
i__28592_28906 = G__28933;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_28900);
});})(seq__28505_28841,chunk__28509_28842,count__28510_28843,i__28511_28844,seq__28292,chunk__28296,count__28297,i__28298,new_link_28902,path_match_28901,node_28900,seq__28505_28894__$1,temp__5804__auto___28893__$1,path,seq__28292__$1,temp__5804__auto__,map__28289,map__28289__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28901], 0));

goog.dom.insertSiblingAfter(new_link_28902,node_28900);


var G__28934 = cljs.core.next(seq__28505_28894__$1);
var G__28935 = null;
var G__28936 = (0);
var G__28937 = (0);
seq__28505_28841 = G__28934;
chunk__28509_28842 = G__28935;
count__28510_28843 = G__28936;
i__28511_28844 = G__28937;
continue;
} else {
var G__28938 = cljs.core.next(seq__28505_28894__$1);
var G__28939 = null;
var G__28940 = (0);
var G__28941 = (0);
seq__28505_28841 = G__28938;
chunk__28509_28842 = G__28939;
count__28510_28843 = G__28940;
i__28511_28844 = G__28941;
continue;
}
} else {
var G__28942 = cljs.core.next(seq__28505_28894__$1);
var G__28943 = null;
var G__28944 = (0);
var G__28945 = (0);
seq__28505_28841 = G__28942;
chunk__28509_28842 = G__28943;
count__28510_28843 = G__28944;
i__28511_28844 = G__28945;
continue;
}
}
} else {
}
}
break;
}


var G__28946 = cljs.core.next(seq__28292__$1);
var G__28947 = null;
var G__28948 = (0);
var G__28949 = (0);
seq__28292 = G__28946;
chunk__28296 = G__28947;
count__28297 = G__28948;
i__28298 = G__28949;
continue;
} else {
var G__28950 = cljs.core.next(seq__28292__$1);
var G__28951 = null;
var G__28952 = (0);
var G__28953 = (0);
seq__28292 = G__28950;
chunk__28296 = G__28951;
count__28297 = G__28952;
i__28298 = G__28953;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__28622){
var map__28623 = p__28622;
var map__28623__$1 = cljs.core.__destructure_map(map__28623);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28623__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__28626,done,error){
var map__28627 = p__28626;
var map__28627__$1 = cljs.core.__destructure_map(map__28627);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28627__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__28631,done,error){
var map__28633 = p__28631;
var map__28633__$1 = cljs.core.__destructure_map(map__28633);
var msg = map__28633__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28633__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28633__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28633__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__28635){
var map__28636 = p__28635;
var map__28636__$1 = cljs.core.__destructure_map(map__28636);
var src = map__28636__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28636__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__28637 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__28637) : done.call(null,G__28637));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__28639){
var map__28640 = p__28639;
var map__28640__$1 = cljs.core.__destructure_map(map__28640);
var msg__$1 = map__28640__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28640__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e28642){var ex = e28642;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__28643){
var map__28644 = p__28643;
var map__28644__$1 = cljs.core.__destructure_map(map__28644);
var env = map__28644__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28644__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__28649){
var map__28650 = p__28649;
var map__28650__$1 = cljs.core.__destructure_map(map__28650);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28650__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28650__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__28651){
var map__28652 = p__28651;
var map__28652__$1 = cljs.core.__destructure_map(map__28652);
var svc = map__28652__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28652__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
