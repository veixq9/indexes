goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__27666,p__27667){
var map__27668 = p__27666;
var map__27668__$1 = cljs.core.__destructure_map(map__27668);
var svc = map__27668__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27668__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27668__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27668__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__27669 = p__27667;
var map__27669__$1 = cljs.core.__destructure_map(map__27669);
var msg = map__27669__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27669__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27669__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27669__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27669__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__27676,p__27677){
var map__27678 = p__27676;
var map__27678__$1 = cljs.core.__destructure_map(map__27678);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27678__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__27679 = p__27677;
var map__27679__$1 = cljs.core.__destructure_map(map__27679);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27679__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__27681,p__27682){
var map__27683 = p__27681;
var map__27683__$1 = cljs.core.__destructure_map(map__27683);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27683__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27683__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__27684 = p__27682;
var map__27684__$1 = cljs.core.__destructure_map(map__27684);
var msg = map__27684__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27684__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__27685,tid){
var map__27686 = p__27685;
var map__27686__$1 = cljs.core.__destructure_map(map__27686);
var svc = map__27686__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27686__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__27691 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__27692 = null;
var count__27693 = (0);
var i__27694 = (0);
while(true){
if((i__27694 < count__27693)){
var vec__27709 = chunk__27692.cljs$core$IIndexed$_nth$arity$2(null,i__27694);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27709,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27709,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__27737 = seq__27691;
var G__27738 = chunk__27692;
var G__27739 = count__27693;
var G__27740 = (i__27694 + (1));
seq__27691 = G__27737;
chunk__27692 = G__27738;
count__27693 = G__27739;
i__27694 = G__27740;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27691);
if(temp__5804__auto__){
var seq__27691__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27691__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27691__$1);
var G__27741 = cljs.core.chunk_rest(seq__27691__$1);
var G__27742 = c__5568__auto__;
var G__27743 = cljs.core.count(c__5568__auto__);
var G__27744 = (0);
seq__27691 = G__27741;
chunk__27692 = G__27742;
count__27693 = G__27743;
i__27694 = G__27744;
continue;
} else {
var vec__27712 = cljs.core.first(seq__27691__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27712,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27712,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__27745 = cljs.core.next(seq__27691__$1);
var G__27746 = null;
var G__27747 = (0);
var G__27748 = (0);
seq__27691 = G__27745;
chunk__27692 = G__27746;
count__27693 = G__27747;
i__27694 = G__27748;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__27687_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__27687_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__27688_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__27688_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__27689_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__27689_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__27690_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__27690_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__27715){
var map__27716 = p__27715;
var map__27716__$1 = cljs.core.__destructure_map(map__27716);
var svc = map__27716__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27716__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27716__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
