goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_24228 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_24228(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_24229 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_24229(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__23614 = coll;
var G__23615 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__23614,G__23615) : shadow.dom.lazy_native_coll_seq.call(null,G__23614,G__23615));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__23681 = arguments.length;
switch (G__23681) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__23697 = arguments.length;
switch (G__23697) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__23715 = arguments.length;
switch (G__23715) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__23742 = arguments.length;
switch (G__23742) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__23759 = arguments.length;
switch (G__23759) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__23794 = arguments.length;
switch (G__23794) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e23801){if((e23801 instanceof Object)){
var e = e23801;
return console.log("didnt support attachEvent",el,e);
} else {
throw e23801;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__23828 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__23829 = null;
var count__23830 = (0);
var i__23831 = (0);
while(true){
if((i__23831 < count__23830)){
var el = chunk__23829.cljs$core$IIndexed$_nth$arity$2(null,i__23831);
var handler_24236__$1 = ((function (seq__23828,chunk__23829,count__23830,i__23831,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__23828,chunk__23829,count__23830,i__23831,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_24236__$1);


var G__24237 = seq__23828;
var G__24238 = chunk__23829;
var G__24239 = count__23830;
var G__24240 = (i__23831 + (1));
seq__23828 = G__24237;
chunk__23829 = G__24238;
count__23830 = G__24239;
i__23831 = G__24240;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23828);
if(temp__5804__auto__){
var seq__23828__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23828__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23828__$1);
var G__24241 = cljs.core.chunk_rest(seq__23828__$1);
var G__24242 = c__5568__auto__;
var G__24243 = cljs.core.count(c__5568__auto__);
var G__24244 = (0);
seq__23828 = G__24241;
chunk__23829 = G__24242;
count__23830 = G__24243;
i__23831 = G__24244;
continue;
} else {
var el = cljs.core.first(seq__23828__$1);
var handler_24245__$1 = ((function (seq__23828,chunk__23829,count__23830,i__23831,el,seq__23828__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__23828,chunk__23829,count__23830,i__23831,el,seq__23828__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_24245__$1);


var G__24246 = cljs.core.next(seq__23828__$1);
var G__24247 = null;
var G__24248 = (0);
var G__24249 = (0);
seq__23828 = G__24246;
chunk__23829 = G__24247;
count__23830 = G__24248;
i__23831 = G__24249;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__23872 = arguments.length;
switch (G__23872) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__23895 = cljs.core.seq(events);
var chunk__23896 = null;
var count__23897 = (0);
var i__23898 = (0);
while(true){
if((i__23898 < count__23897)){
var vec__23907 = chunk__23896.cljs$core$IIndexed$_nth$arity$2(null,i__23898);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23907,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23907,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__24251 = seq__23895;
var G__24252 = chunk__23896;
var G__24253 = count__23897;
var G__24254 = (i__23898 + (1));
seq__23895 = G__24251;
chunk__23896 = G__24252;
count__23897 = G__24253;
i__23898 = G__24254;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23895);
if(temp__5804__auto__){
var seq__23895__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23895__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23895__$1);
var G__24255 = cljs.core.chunk_rest(seq__23895__$1);
var G__24256 = c__5568__auto__;
var G__24257 = cljs.core.count(c__5568__auto__);
var G__24258 = (0);
seq__23895 = G__24255;
chunk__23896 = G__24256;
count__23897 = G__24257;
i__23898 = G__24258;
continue;
} else {
var vec__23920 = cljs.core.first(seq__23895__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23920,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23920,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__24259 = cljs.core.next(seq__23895__$1);
var G__24260 = null;
var G__24261 = (0);
var G__24262 = (0);
seq__23895 = G__24259;
chunk__23896 = G__24260;
count__23897 = G__24261;
i__23898 = G__24262;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__23930 = cljs.core.seq(styles);
var chunk__23931 = null;
var count__23932 = (0);
var i__23933 = (0);
while(true){
if((i__23933 < count__23932)){
var vec__23965 = chunk__23931.cljs$core$IIndexed$_nth$arity$2(null,i__23933);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23965,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23965,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__24263 = seq__23930;
var G__24264 = chunk__23931;
var G__24265 = count__23932;
var G__24266 = (i__23933 + (1));
seq__23930 = G__24263;
chunk__23931 = G__24264;
count__23932 = G__24265;
i__23933 = G__24266;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23930);
if(temp__5804__auto__){
var seq__23930__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23930__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23930__$1);
var G__24267 = cljs.core.chunk_rest(seq__23930__$1);
var G__24268 = c__5568__auto__;
var G__24269 = cljs.core.count(c__5568__auto__);
var G__24270 = (0);
seq__23930 = G__24267;
chunk__23931 = G__24268;
count__23932 = G__24269;
i__23933 = G__24270;
continue;
} else {
var vec__23975 = cljs.core.first(seq__23930__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23975,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23975,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__24271 = cljs.core.next(seq__23930__$1);
var G__24272 = null;
var G__24273 = (0);
var G__24274 = (0);
seq__23930 = G__24271;
chunk__23931 = G__24272;
count__23932 = G__24273;
i__23933 = G__24274;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__23991_24275 = key;
var G__23991_24276__$1 = (((G__23991_24275 instanceof cljs.core.Keyword))?G__23991_24275.fqn:null);
switch (G__23991_24276__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_24278 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_24278,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_24278,"aria-");
}
})())){
el.setAttribute(ks_24278,value);
} else {
(el[ks_24278] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__24030){
var map__24031 = p__24030;
var map__24031__$1 = cljs.core.__destructure_map(map__24031);
var props = map__24031__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24031__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__24032 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24032,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24032,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24032,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__24035 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__24035,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__24035;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__24037 = arguments.length;
switch (G__24037) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__24038){
var vec__24039 = p__24038;
var seq__24040 = cljs.core.seq(vec__24039);
var first__24041 = cljs.core.first(seq__24040);
var seq__24040__$1 = cljs.core.next(seq__24040);
var nn = first__24041;
var first__24041__$1 = cljs.core.first(seq__24040__$1);
var seq__24040__$2 = cljs.core.next(seq__24040__$1);
var np = first__24041__$1;
var nc = seq__24040__$2;
var node = vec__24039;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24042 = nn;
var G__24043 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__24042,G__24043) : create_fn.call(null,G__24042,G__24043));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24044 = nn;
var G__24045 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__24044,G__24045) : create_fn.call(null,G__24044,G__24045));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__24046 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24046,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24046,(1),null);
var seq__24049_24280 = cljs.core.seq(node_children);
var chunk__24050_24281 = null;
var count__24051_24282 = (0);
var i__24052_24283 = (0);
while(true){
if((i__24052_24283 < count__24051_24282)){
var child_struct_24284 = chunk__24050_24281.cljs$core$IIndexed$_nth$arity$2(null,i__24052_24283);
var children_24285 = shadow.dom.dom_node(child_struct_24284);
if(cljs.core.seq_QMARK_(children_24285)){
var seq__24065_24286 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_24285));
var chunk__24067_24287 = null;
var count__24068_24288 = (0);
var i__24069_24289 = (0);
while(true){
if((i__24069_24289 < count__24068_24288)){
var child_24290 = chunk__24067_24287.cljs$core$IIndexed$_nth$arity$2(null,i__24069_24289);
if(cljs.core.truth_(child_24290)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24290);


var G__24291 = seq__24065_24286;
var G__24292 = chunk__24067_24287;
var G__24293 = count__24068_24288;
var G__24294 = (i__24069_24289 + (1));
seq__24065_24286 = G__24291;
chunk__24067_24287 = G__24292;
count__24068_24288 = G__24293;
i__24069_24289 = G__24294;
continue;
} else {
var G__24295 = seq__24065_24286;
var G__24296 = chunk__24067_24287;
var G__24297 = count__24068_24288;
var G__24298 = (i__24069_24289 + (1));
seq__24065_24286 = G__24295;
chunk__24067_24287 = G__24296;
count__24068_24288 = G__24297;
i__24069_24289 = G__24298;
continue;
}
} else {
var temp__5804__auto___24299 = cljs.core.seq(seq__24065_24286);
if(temp__5804__auto___24299){
var seq__24065_24300__$1 = temp__5804__auto___24299;
if(cljs.core.chunked_seq_QMARK_(seq__24065_24300__$1)){
var c__5568__auto___24301 = cljs.core.chunk_first(seq__24065_24300__$1);
var G__24302 = cljs.core.chunk_rest(seq__24065_24300__$1);
var G__24303 = c__5568__auto___24301;
var G__24304 = cljs.core.count(c__5568__auto___24301);
var G__24305 = (0);
seq__24065_24286 = G__24302;
chunk__24067_24287 = G__24303;
count__24068_24288 = G__24304;
i__24069_24289 = G__24305;
continue;
} else {
var child_24306 = cljs.core.first(seq__24065_24300__$1);
if(cljs.core.truth_(child_24306)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24306);


var G__24307 = cljs.core.next(seq__24065_24300__$1);
var G__24308 = null;
var G__24309 = (0);
var G__24310 = (0);
seq__24065_24286 = G__24307;
chunk__24067_24287 = G__24308;
count__24068_24288 = G__24309;
i__24069_24289 = G__24310;
continue;
} else {
var G__24311 = cljs.core.next(seq__24065_24300__$1);
var G__24312 = null;
var G__24313 = (0);
var G__24314 = (0);
seq__24065_24286 = G__24311;
chunk__24067_24287 = G__24312;
count__24068_24288 = G__24313;
i__24069_24289 = G__24314;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_24285);
}


var G__24315 = seq__24049_24280;
var G__24316 = chunk__24050_24281;
var G__24317 = count__24051_24282;
var G__24318 = (i__24052_24283 + (1));
seq__24049_24280 = G__24315;
chunk__24050_24281 = G__24316;
count__24051_24282 = G__24317;
i__24052_24283 = G__24318;
continue;
} else {
var temp__5804__auto___24319 = cljs.core.seq(seq__24049_24280);
if(temp__5804__auto___24319){
var seq__24049_24320__$1 = temp__5804__auto___24319;
if(cljs.core.chunked_seq_QMARK_(seq__24049_24320__$1)){
var c__5568__auto___24321 = cljs.core.chunk_first(seq__24049_24320__$1);
var G__24322 = cljs.core.chunk_rest(seq__24049_24320__$1);
var G__24323 = c__5568__auto___24321;
var G__24324 = cljs.core.count(c__5568__auto___24321);
var G__24325 = (0);
seq__24049_24280 = G__24322;
chunk__24050_24281 = G__24323;
count__24051_24282 = G__24324;
i__24052_24283 = G__24325;
continue;
} else {
var child_struct_24326 = cljs.core.first(seq__24049_24320__$1);
var children_24327 = shadow.dom.dom_node(child_struct_24326);
if(cljs.core.seq_QMARK_(children_24327)){
var seq__24071_24328 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_24327));
var chunk__24073_24329 = null;
var count__24074_24330 = (0);
var i__24075_24331 = (0);
while(true){
if((i__24075_24331 < count__24074_24330)){
var child_24333 = chunk__24073_24329.cljs$core$IIndexed$_nth$arity$2(null,i__24075_24331);
if(cljs.core.truth_(child_24333)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24333);


var G__24334 = seq__24071_24328;
var G__24335 = chunk__24073_24329;
var G__24336 = count__24074_24330;
var G__24337 = (i__24075_24331 + (1));
seq__24071_24328 = G__24334;
chunk__24073_24329 = G__24335;
count__24074_24330 = G__24336;
i__24075_24331 = G__24337;
continue;
} else {
var G__24338 = seq__24071_24328;
var G__24339 = chunk__24073_24329;
var G__24340 = count__24074_24330;
var G__24341 = (i__24075_24331 + (1));
seq__24071_24328 = G__24338;
chunk__24073_24329 = G__24339;
count__24074_24330 = G__24340;
i__24075_24331 = G__24341;
continue;
}
} else {
var temp__5804__auto___24343__$1 = cljs.core.seq(seq__24071_24328);
if(temp__5804__auto___24343__$1){
var seq__24071_24344__$1 = temp__5804__auto___24343__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24071_24344__$1)){
var c__5568__auto___24345 = cljs.core.chunk_first(seq__24071_24344__$1);
var G__24346 = cljs.core.chunk_rest(seq__24071_24344__$1);
var G__24347 = c__5568__auto___24345;
var G__24348 = cljs.core.count(c__5568__auto___24345);
var G__24349 = (0);
seq__24071_24328 = G__24346;
chunk__24073_24329 = G__24347;
count__24074_24330 = G__24348;
i__24075_24331 = G__24349;
continue;
} else {
var child_24350 = cljs.core.first(seq__24071_24344__$1);
if(cljs.core.truth_(child_24350)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24350);


var G__24351 = cljs.core.next(seq__24071_24344__$1);
var G__24352 = null;
var G__24353 = (0);
var G__24354 = (0);
seq__24071_24328 = G__24351;
chunk__24073_24329 = G__24352;
count__24074_24330 = G__24353;
i__24075_24331 = G__24354;
continue;
} else {
var G__24355 = cljs.core.next(seq__24071_24344__$1);
var G__24356 = null;
var G__24357 = (0);
var G__24358 = (0);
seq__24071_24328 = G__24355;
chunk__24073_24329 = G__24356;
count__24074_24330 = G__24357;
i__24075_24331 = G__24358;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_24327);
}


var G__24359 = cljs.core.next(seq__24049_24320__$1);
var G__24360 = null;
var G__24361 = (0);
var G__24362 = (0);
seq__24049_24280 = G__24359;
chunk__24050_24281 = G__24360;
count__24051_24282 = G__24361;
i__24052_24283 = G__24362;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__24078 = cljs.core.seq(node);
var chunk__24079 = null;
var count__24080 = (0);
var i__24081 = (0);
while(true){
if((i__24081 < count__24080)){
var n = chunk__24079.cljs$core$IIndexed$_nth$arity$2(null,i__24081);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__24363 = seq__24078;
var G__24364 = chunk__24079;
var G__24365 = count__24080;
var G__24366 = (i__24081 + (1));
seq__24078 = G__24363;
chunk__24079 = G__24364;
count__24080 = G__24365;
i__24081 = G__24366;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24078);
if(temp__5804__auto__){
var seq__24078__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24078__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24078__$1);
var G__24367 = cljs.core.chunk_rest(seq__24078__$1);
var G__24368 = c__5568__auto__;
var G__24369 = cljs.core.count(c__5568__auto__);
var G__24370 = (0);
seq__24078 = G__24367;
chunk__24079 = G__24368;
count__24080 = G__24369;
i__24081 = G__24370;
continue;
} else {
var n = cljs.core.first(seq__24078__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__24371 = cljs.core.next(seq__24078__$1);
var G__24372 = null;
var G__24373 = (0);
var G__24374 = (0);
seq__24078 = G__24371;
chunk__24079 = G__24372;
count__24080 = G__24373;
i__24081 = G__24374;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__24083 = arguments.length;
switch (G__24083) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__24085 = arguments.length;
switch (G__24085) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__24087 = arguments.length;
switch (G__24087) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24378 = arguments.length;
var i__5770__auto___24379 = (0);
while(true){
if((i__5770__auto___24379 < len__5769__auto___24378)){
args__5775__auto__.push((arguments[i__5770__auto___24379]));

var G__24380 = (i__5770__auto___24379 + (1));
i__5770__auto___24379 = G__24380;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__24089_24381 = cljs.core.seq(nodes);
var chunk__24090_24382 = null;
var count__24091_24383 = (0);
var i__24092_24384 = (0);
while(true){
if((i__24092_24384 < count__24091_24383)){
var node_24385 = chunk__24090_24382.cljs$core$IIndexed$_nth$arity$2(null,i__24092_24384);
fragment.appendChild(shadow.dom._to_dom(node_24385));


var G__24386 = seq__24089_24381;
var G__24387 = chunk__24090_24382;
var G__24388 = count__24091_24383;
var G__24389 = (i__24092_24384 + (1));
seq__24089_24381 = G__24386;
chunk__24090_24382 = G__24387;
count__24091_24383 = G__24388;
i__24092_24384 = G__24389;
continue;
} else {
var temp__5804__auto___24390 = cljs.core.seq(seq__24089_24381);
if(temp__5804__auto___24390){
var seq__24089_24391__$1 = temp__5804__auto___24390;
if(cljs.core.chunked_seq_QMARK_(seq__24089_24391__$1)){
var c__5568__auto___24392 = cljs.core.chunk_first(seq__24089_24391__$1);
var G__24393 = cljs.core.chunk_rest(seq__24089_24391__$1);
var G__24394 = c__5568__auto___24392;
var G__24395 = cljs.core.count(c__5568__auto___24392);
var G__24396 = (0);
seq__24089_24381 = G__24393;
chunk__24090_24382 = G__24394;
count__24091_24383 = G__24395;
i__24092_24384 = G__24396;
continue;
} else {
var node_24397 = cljs.core.first(seq__24089_24391__$1);
fragment.appendChild(shadow.dom._to_dom(node_24397));


var G__24398 = cljs.core.next(seq__24089_24391__$1);
var G__24399 = null;
var G__24400 = (0);
var G__24401 = (0);
seq__24089_24381 = G__24398;
chunk__24090_24382 = G__24399;
count__24091_24383 = G__24400;
i__24092_24384 = G__24401;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq24088){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24088));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__24093_24402 = cljs.core.seq(scripts);
var chunk__24094_24403 = null;
var count__24095_24404 = (0);
var i__24096_24405 = (0);
while(true){
if((i__24096_24405 < count__24095_24404)){
var vec__24103_24406 = chunk__24094_24403.cljs$core$IIndexed$_nth$arity$2(null,i__24096_24405);
var script_tag_24407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24103_24406,(0),null);
var script_body_24408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24103_24406,(1),null);
eval(script_body_24408);


var G__24409 = seq__24093_24402;
var G__24410 = chunk__24094_24403;
var G__24411 = count__24095_24404;
var G__24412 = (i__24096_24405 + (1));
seq__24093_24402 = G__24409;
chunk__24094_24403 = G__24410;
count__24095_24404 = G__24411;
i__24096_24405 = G__24412;
continue;
} else {
var temp__5804__auto___24413 = cljs.core.seq(seq__24093_24402);
if(temp__5804__auto___24413){
var seq__24093_24414__$1 = temp__5804__auto___24413;
if(cljs.core.chunked_seq_QMARK_(seq__24093_24414__$1)){
var c__5568__auto___24415 = cljs.core.chunk_first(seq__24093_24414__$1);
var G__24416 = cljs.core.chunk_rest(seq__24093_24414__$1);
var G__24417 = c__5568__auto___24415;
var G__24418 = cljs.core.count(c__5568__auto___24415);
var G__24419 = (0);
seq__24093_24402 = G__24416;
chunk__24094_24403 = G__24417;
count__24095_24404 = G__24418;
i__24096_24405 = G__24419;
continue;
} else {
var vec__24106_24420 = cljs.core.first(seq__24093_24414__$1);
var script_tag_24421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24106_24420,(0),null);
var script_body_24422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24106_24420,(1),null);
eval(script_body_24422);


var G__24423 = cljs.core.next(seq__24093_24414__$1);
var G__24424 = null;
var G__24425 = (0);
var G__24426 = (0);
seq__24093_24402 = G__24423;
chunk__24094_24403 = G__24424;
count__24095_24404 = G__24425;
i__24096_24405 = G__24426;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__24109){
var vec__24110 = p__24109;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24110,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24110,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__24114 = arguments.length;
switch (G__24114) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__24115 = cljs.core.seq(style_keys);
var chunk__24116 = null;
var count__24117 = (0);
var i__24118 = (0);
while(true){
if((i__24118 < count__24117)){
var it = chunk__24116.cljs$core$IIndexed$_nth$arity$2(null,i__24118);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__24432 = seq__24115;
var G__24433 = chunk__24116;
var G__24434 = count__24117;
var G__24435 = (i__24118 + (1));
seq__24115 = G__24432;
chunk__24116 = G__24433;
count__24117 = G__24434;
i__24118 = G__24435;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24115);
if(temp__5804__auto__){
var seq__24115__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24115__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24115__$1);
var G__24436 = cljs.core.chunk_rest(seq__24115__$1);
var G__24437 = c__5568__auto__;
var G__24438 = cljs.core.count(c__5568__auto__);
var G__24439 = (0);
seq__24115 = G__24436;
chunk__24116 = G__24437;
count__24117 = G__24438;
i__24118 = G__24439;
continue;
} else {
var it = cljs.core.first(seq__24115__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__24440 = cljs.core.next(seq__24115__$1);
var G__24441 = null;
var G__24442 = (0);
var G__24443 = (0);
seq__24115 = G__24440;
chunk__24116 = G__24441;
count__24117 = G__24442;
i__24118 = G__24443;
continue;
}
} else {
return null;
}
}
break;
}
});

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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k24120,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__24124 = k24120;
var G__24124__$1 = (((G__24124 instanceof cljs.core.Keyword))?G__24124.fqn:null);
switch (G__24124__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24120,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__24125){
var vec__24126 = p__24125;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24126,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24126,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24119){
var self__ = this;
var G__24119__$1 = this;
return (new cljs.core.RecordIter((0),G__24119__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24121,other24122){
var self__ = this;
var this24121__$1 = this;
return (((!((other24122 == null)))) && ((((this24121__$1.constructor === other24122.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24121__$1.x,other24122.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24121__$1.y,other24122.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24121__$1.__extmap,other24122.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k24120){
var self__ = this;
var this__5350__auto____$1 = this;
var G__24129 = k24120;
var G__24129__$1 = (((G__24129 instanceof cljs.core.Keyword))?G__24129.fqn:null);
switch (G__24129__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k24120);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__24119){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__24130 = cljs.core.keyword_identical_QMARK_;
var expr__24131 = k__5352__auto__;
if(cljs.core.truth_((pred__24130.cljs$core$IFn$_invoke$arity$2 ? pred__24130.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__24131) : pred__24130.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__24131)))){
return (new shadow.dom.Coordinate(G__24119,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__24130.cljs$core$IFn$_invoke$arity$2 ? pred__24130.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__24131) : pred__24130.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__24131)))){
return (new shadow.dom.Coordinate(self__.x,G__24119,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__24119),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__24119){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__24119,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__24123){
var extmap__5385__auto__ = (function (){var G__24133 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24123,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__24123)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24133);
} else {
return G__24133;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__24123),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__24123),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k24135,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__24139 = k24135;
var G__24139__$1 = (((G__24139 instanceof cljs.core.Keyword))?G__24139.fqn:null);
switch (G__24139__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24135,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__24140){
var vec__24141 = p__24140;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24141,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24141,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24134){
var self__ = this;
var G__24134__$1 = this;
return (new cljs.core.RecordIter((0),G__24134__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24136,other24137){
var self__ = this;
var this24136__$1 = this;
return (((!((other24137 == null)))) && ((((this24136__$1.constructor === other24137.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24136__$1.w,other24137.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24136__$1.h,other24137.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24136__$1.__extmap,other24137.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k24135){
var self__ = this;
var this__5350__auto____$1 = this;
var G__24144 = k24135;
var G__24144__$1 = (((G__24144 instanceof cljs.core.Keyword))?G__24144.fqn:null);
switch (G__24144__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k24135);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__24134){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__24145 = cljs.core.keyword_identical_QMARK_;
var expr__24146 = k__5352__auto__;
if(cljs.core.truth_((pred__24145.cljs$core$IFn$_invoke$arity$2 ? pred__24145.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__24146) : pred__24145.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__24146)))){
return (new shadow.dom.Size(G__24134,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__24145.cljs$core$IFn$_invoke$arity$2 ? pred__24145.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__24146) : pred__24145.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__24146)))){
return (new shadow.dom.Size(self__.w,G__24134,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__24134),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__24134){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__24134,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__24138){
var extmap__5385__auto__ = (function (){var G__24148 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24138,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__24138)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24148);
} else {
return G__24148;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__24138),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__24138),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__24456 = (i + (1));
var G__24457 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__24456;
ret = G__24457;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24153){
var vec__24154 = p__24153;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24154,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24154,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__24158 = arguments.length;
switch (G__24158) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__24459 = ps;
var G__24460 = (i + (1));
el__$1 = G__24459;
i = G__24460;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__24159 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24159,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24159,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24159,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__24162_24464 = cljs.core.seq(props);
var chunk__24163_24465 = null;
var count__24164_24466 = (0);
var i__24165_24467 = (0);
while(true){
if((i__24165_24467 < count__24164_24466)){
var vec__24172_24468 = chunk__24163_24465.cljs$core$IIndexed$_nth$arity$2(null,i__24165_24467);
var k_24469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24172_24468,(0),null);
var v_24470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24172_24468,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_24469);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_24469),v_24470);


var G__24471 = seq__24162_24464;
var G__24472 = chunk__24163_24465;
var G__24473 = count__24164_24466;
var G__24474 = (i__24165_24467 + (1));
seq__24162_24464 = G__24471;
chunk__24163_24465 = G__24472;
count__24164_24466 = G__24473;
i__24165_24467 = G__24474;
continue;
} else {
var temp__5804__auto___24475 = cljs.core.seq(seq__24162_24464);
if(temp__5804__auto___24475){
var seq__24162_24476__$1 = temp__5804__auto___24475;
if(cljs.core.chunked_seq_QMARK_(seq__24162_24476__$1)){
var c__5568__auto___24477 = cljs.core.chunk_first(seq__24162_24476__$1);
var G__24478 = cljs.core.chunk_rest(seq__24162_24476__$1);
var G__24479 = c__5568__auto___24477;
var G__24480 = cljs.core.count(c__5568__auto___24477);
var G__24481 = (0);
seq__24162_24464 = G__24478;
chunk__24163_24465 = G__24479;
count__24164_24466 = G__24480;
i__24165_24467 = G__24481;
continue;
} else {
var vec__24175_24482 = cljs.core.first(seq__24162_24476__$1);
var k_24483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24175_24482,(0),null);
var v_24484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24175_24482,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_24483);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_24483),v_24484);


var G__24485 = cljs.core.next(seq__24162_24476__$1);
var G__24486 = null;
var G__24487 = (0);
var G__24488 = (0);
seq__24162_24464 = G__24485;
chunk__24163_24465 = G__24486;
count__24164_24466 = G__24487;
i__24165_24467 = G__24488;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__24179 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24179,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24179,(1),null);
var seq__24182_24493 = cljs.core.seq(node_children);
var chunk__24184_24494 = null;
var count__24185_24495 = (0);
var i__24186_24496 = (0);
while(true){
if((i__24186_24496 < count__24185_24495)){
var child_struct_24497 = chunk__24184_24494.cljs$core$IIndexed$_nth$arity$2(null,i__24186_24496);
if((!((child_struct_24497 == null)))){
if(typeof child_struct_24497 === 'string'){
var text_24498 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_24498),child_struct_24497].join(''));
} else {
var children_24499 = shadow.dom.svg_node(child_struct_24497);
if(cljs.core.seq_QMARK_(children_24499)){
var seq__24200_24500 = cljs.core.seq(children_24499);
var chunk__24202_24501 = null;
var count__24203_24502 = (0);
var i__24204_24503 = (0);
while(true){
if((i__24204_24503 < count__24203_24502)){
var child_24504 = chunk__24202_24501.cljs$core$IIndexed$_nth$arity$2(null,i__24204_24503);
if(cljs.core.truth_(child_24504)){
node.appendChild(child_24504);


var G__24505 = seq__24200_24500;
var G__24506 = chunk__24202_24501;
var G__24507 = count__24203_24502;
var G__24508 = (i__24204_24503 + (1));
seq__24200_24500 = G__24505;
chunk__24202_24501 = G__24506;
count__24203_24502 = G__24507;
i__24204_24503 = G__24508;
continue;
} else {
var G__24509 = seq__24200_24500;
var G__24510 = chunk__24202_24501;
var G__24511 = count__24203_24502;
var G__24512 = (i__24204_24503 + (1));
seq__24200_24500 = G__24509;
chunk__24202_24501 = G__24510;
count__24203_24502 = G__24511;
i__24204_24503 = G__24512;
continue;
}
} else {
var temp__5804__auto___24513 = cljs.core.seq(seq__24200_24500);
if(temp__5804__auto___24513){
var seq__24200_24514__$1 = temp__5804__auto___24513;
if(cljs.core.chunked_seq_QMARK_(seq__24200_24514__$1)){
var c__5568__auto___24515 = cljs.core.chunk_first(seq__24200_24514__$1);
var G__24516 = cljs.core.chunk_rest(seq__24200_24514__$1);
var G__24517 = c__5568__auto___24515;
var G__24518 = cljs.core.count(c__5568__auto___24515);
var G__24519 = (0);
seq__24200_24500 = G__24516;
chunk__24202_24501 = G__24517;
count__24203_24502 = G__24518;
i__24204_24503 = G__24519;
continue;
} else {
var child_24520 = cljs.core.first(seq__24200_24514__$1);
if(cljs.core.truth_(child_24520)){
node.appendChild(child_24520);


var G__24521 = cljs.core.next(seq__24200_24514__$1);
var G__24522 = null;
var G__24523 = (0);
var G__24524 = (0);
seq__24200_24500 = G__24521;
chunk__24202_24501 = G__24522;
count__24203_24502 = G__24523;
i__24204_24503 = G__24524;
continue;
} else {
var G__24525 = cljs.core.next(seq__24200_24514__$1);
var G__24526 = null;
var G__24527 = (0);
var G__24528 = (0);
seq__24200_24500 = G__24525;
chunk__24202_24501 = G__24526;
count__24203_24502 = G__24527;
i__24204_24503 = G__24528;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_24499);
}
}


var G__24529 = seq__24182_24493;
var G__24530 = chunk__24184_24494;
var G__24531 = count__24185_24495;
var G__24532 = (i__24186_24496 + (1));
seq__24182_24493 = G__24529;
chunk__24184_24494 = G__24530;
count__24185_24495 = G__24531;
i__24186_24496 = G__24532;
continue;
} else {
var G__24533 = seq__24182_24493;
var G__24534 = chunk__24184_24494;
var G__24535 = count__24185_24495;
var G__24536 = (i__24186_24496 + (1));
seq__24182_24493 = G__24533;
chunk__24184_24494 = G__24534;
count__24185_24495 = G__24535;
i__24186_24496 = G__24536;
continue;
}
} else {
var temp__5804__auto___24537 = cljs.core.seq(seq__24182_24493);
if(temp__5804__auto___24537){
var seq__24182_24538__$1 = temp__5804__auto___24537;
if(cljs.core.chunked_seq_QMARK_(seq__24182_24538__$1)){
var c__5568__auto___24539 = cljs.core.chunk_first(seq__24182_24538__$1);
var G__24540 = cljs.core.chunk_rest(seq__24182_24538__$1);
var G__24541 = c__5568__auto___24539;
var G__24542 = cljs.core.count(c__5568__auto___24539);
var G__24543 = (0);
seq__24182_24493 = G__24540;
chunk__24184_24494 = G__24541;
count__24185_24495 = G__24542;
i__24186_24496 = G__24543;
continue;
} else {
var child_struct_24544 = cljs.core.first(seq__24182_24538__$1);
if((!((child_struct_24544 == null)))){
if(typeof child_struct_24544 === 'string'){
var text_24545 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_24545),child_struct_24544].join(''));
} else {
var children_24546 = shadow.dom.svg_node(child_struct_24544);
if(cljs.core.seq_QMARK_(children_24546)){
var seq__24206_24547 = cljs.core.seq(children_24546);
var chunk__24208_24548 = null;
var count__24209_24549 = (0);
var i__24210_24550 = (0);
while(true){
if((i__24210_24550 < count__24209_24549)){
var child_24551 = chunk__24208_24548.cljs$core$IIndexed$_nth$arity$2(null,i__24210_24550);
if(cljs.core.truth_(child_24551)){
node.appendChild(child_24551);


var G__24552 = seq__24206_24547;
var G__24553 = chunk__24208_24548;
var G__24554 = count__24209_24549;
var G__24555 = (i__24210_24550 + (1));
seq__24206_24547 = G__24552;
chunk__24208_24548 = G__24553;
count__24209_24549 = G__24554;
i__24210_24550 = G__24555;
continue;
} else {
var G__24556 = seq__24206_24547;
var G__24557 = chunk__24208_24548;
var G__24558 = count__24209_24549;
var G__24559 = (i__24210_24550 + (1));
seq__24206_24547 = G__24556;
chunk__24208_24548 = G__24557;
count__24209_24549 = G__24558;
i__24210_24550 = G__24559;
continue;
}
} else {
var temp__5804__auto___24560__$1 = cljs.core.seq(seq__24206_24547);
if(temp__5804__auto___24560__$1){
var seq__24206_24561__$1 = temp__5804__auto___24560__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24206_24561__$1)){
var c__5568__auto___24562 = cljs.core.chunk_first(seq__24206_24561__$1);
var G__24563 = cljs.core.chunk_rest(seq__24206_24561__$1);
var G__24564 = c__5568__auto___24562;
var G__24565 = cljs.core.count(c__5568__auto___24562);
var G__24566 = (0);
seq__24206_24547 = G__24563;
chunk__24208_24548 = G__24564;
count__24209_24549 = G__24565;
i__24210_24550 = G__24566;
continue;
} else {
var child_24567 = cljs.core.first(seq__24206_24561__$1);
if(cljs.core.truth_(child_24567)){
node.appendChild(child_24567);


var G__24568 = cljs.core.next(seq__24206_24561__$1);
var G__24569 = null;
var G__24570 = (0);
var G__24571 = (0);
seq__24206_24547 = G__24568;
chunk__24208_24548 = G__24569;
count__24209_24549 = G__24570;
i__24210_24550 = G__24571;
continue;
} else {
var G__24572 = cljs.core.next(seq__24206_24561__$1);
var G__24573 = null;
var G__24574 = (0);
var G__24575 = (0);
seq__24206_24547 = G__24572;
chunk__24208_24548 = G__24573;
count__24209_24549 = G__24574;
i__24210_24550 = G__24575;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_24546);
}
}


var G__24576 = cljs.core.next(seq__24182_24538__$1);
var G__24577 = null;
var G__24578 = (0);
var G__24579 = (0);
seq__24182_24493 = G__24576;
chunk__24184_24494 = G__24577;
count__24185_24495 = G__24578;
i__24186_24496 = G__24579;
continue;
} else {
var G__24580 = cljs.core.next(seq__24182_24538__$1);
var G__24581 = null;
var G__24582 = (0);
var G__24583 = (0);
seq__24182_24493 = G__24580;
chunk__24184_24494 = G__24581;
count__24185_24495 = G__24582;
i__24186_24496 = G__24583;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24584 = arguments.length;
var i__5770__auto___24585 = (0);
while(true){
if((i__5770__auto___24585 < len__5769__auto___24584)){
args__5775__auto__.push((arguments[i__5770__auto___24585]));

var G__24586 = (i__5770__auto___24585 + (1));
i__5770__auto___24585 = G__24586;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq24212){
var G__24213 = cljs.core.first(seq24212);
var seq24212__$1 = cljs.core.next(seq24212);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24213,seq24212__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__24215 = arguments.length;
switch (G__24215) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__21307__auto___24588 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = (function (state_24220){
var state_val_24221 = (state_24220[(1)]);
if((state_val_24221 === (1))){
var state_24220__$1 = state_24220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24220__$1,(2),once_or_cleanup);
} else {
if((state_val_24221 === (2))){
var inst_24217 = (state_24220[(2)]);
var inst_24218 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_24220__$1 = (function (){var statearr_24222 = state_24220;
(statearr_24222[(7)] = inst_24217);

return statearr_24222;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24220__$1,inst_24218);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__21179__auto__ = null;
var shadow$dom$state_machine__21179__auto____0 = (function (){
var statearr_24223 = [null,null,null,null,null,null,null,null];
(statearr_24223[(0)] = shadow$dom$state_machine__21179__auto__);

(statearr_24223[(1)] = (1));

return statearr_24223;
});
var shadow$dom$state_machine__21179__auto____1 = (function (state_24220){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_24220);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e24224){var ex__21182__auto__ = e24224;
var statearr_24225_24589 = state_24220;
(statearr_24225_24589[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_24220[(4)]))){
var statearr_24226_24590 = state_24220;
(statearr_24226_24590[(1)] = cljs.core.first((state_24220[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24591 = state_24220;
state_24220 = G__24591;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
shadow$dom$state_machine__21179__auto__ = function(state_24220){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__21179__auto____0.call(this);
case 1:
return shadow$dom$state_machine__21179__auto____1.call(this,state_24220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__21179__auto____0;
shadow$dom$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__21179__auto____1;
return shadow$dom$state_machine__21179__auto__;
})()
})();
var state__21309__auto__ = (function (){var statearr_24227 = f__21308__auto__();
(statearr_24227[(6)] = c__21307__auto___24588);

return statearr_24227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
