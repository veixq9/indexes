goog.provide('promesa.impl');
promesa.impl._STAR_default_promise_STAR_ = Promise;
promesa.impl.resolved = (function promesa$impl$resolved(v){
return promesa.impl._STAR_default_promise_STAR_.resolve(v);
});
promesa.impl.rejected = (function promesa$impl$rejected(v){
return promesa.impl._STAR_default_promise_STAR_.reject(v);
});
promesa.impl.deferred = (function promesa$impl$deferred(){
var state = ({});
var obj = (new promesa.impl._STAR_default_promise_STAR_((function (resolve,reject){
(state.resolve = resolve);

return (state.reject = reject);
})));
var x20558 = obj;
(x20558.promesa$protocols$ICompletable$ = cljs.core.PROTOCOL_SENTINEL);

(x20558.promesa$protocols$ICompletable$_resolve_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.resolve(v);
}));

(x20558.promesa$protocols$ICompletable$_reject_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.reject(v);
}));

return x20558;
});
promesa.impl.extend_promise_BANG_ = (function promesa$impl$extend_promise_BANG_(t){
(t.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
}));

(t.prototype.promesa$protocols$IPromise$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromise$_map$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__20564_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__20564_SHARP_) : f.call(null,p1__20564_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_map$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__20565_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__20565_SHARP_) : f.call(null,p1__20565_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__20566_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__20566_SHARP_) : f.call(null,p1__20566_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__20567_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__20567_SHARP_) : f.call(null,p1__20567_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__20568_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__20568_SHARP_) : f.call(null,p1__20568_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__20569_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__20569_SHARP_) : f.call(null,p1__20569_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__20570_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__20570_SHARP_) : f.call(null,p1__20570_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__20571_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__20571_SHARP_) : f.call(null,p1__20571_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__20572_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__20572_SHARP_) : f.call(null,p1__20572_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__20573_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__20573_SHARP_) : f.call(null,p1__20573_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__20574_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__20574_SHARP_,null) : f.call(null,p1__20574_SHARP_,null));
}),(function (p1__20575_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__20575_SHARP_) : f.call(null,null,p1__20575_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__20576_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__20576_SHARP_,null) : f.call(null,p1__20576_SHARP_,null));
}),(function (p1__20577_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__20577_SHARP_) : f.call(null,null,p1__20577_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_finally$arity$2 = (function (it,f){
var it__$1 = this;
it__$1.then((function (p1__20578_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__20578_SHARP_,null) : f.call(null,p1__20578_SHARP_,null));
}),(function (p1__20579_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__20579_SHARP_) : f.call(null,null,p1__20579_SHARP_));
}));

return it__$1;
}));

return (t.prototype.promesa$protocols$IPromise$_finally$arity$3 = (function (it,f,executor){
var it__$1 = this;
it__$1.then((function (p1__20580_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__20580_SHARP_,null) : f.call(null,p1__20580_SHARP_,null));
}),(function (p1__20581_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__20581_SHARP_) : f.call(null,null,p1__20581_SHARP_));
}));

return it__$1;
}));
});
promesa.impl.extend_promise_BANG_(Promise);
(Error.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(Error.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.rejected(e__$1);
}));

(promesa.protocols.IPromiseFactory["_"] = true);

(promesa.protocols._promise["_"] = (function (v){
return promesa.impl.resolved(v);
}));
promesa.impl.promise__GT_str = (function promesa$impl$promise__GT_str(p){
return "#<Promise[~]>";
});
(Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write(writer,promesa.impl.promise__GT_str(p__$1));
}));

//# sourceMappingURL=promesa.impl.js.map
