goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21429 = (function (f,blockable,meta21430){
this.f = f;
this.blockable = blockable;
this.meta21430 = meta21430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21431,meta21430__$1){
var self__ = this;
var _21431__$1 = this;
return (new cljs.core.async.t_cljs$core$async21429(self__.f,self__.blockable,meta21430__$1));
}));

(cljs.core.async.t_cljs$core$async21429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21431){
var self__ = this;
var _21431__$1 = this;
return self__.meta21430;
}));

(cljs.core.async.t_cljs$core$async21429.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21429.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async21429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async21429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21430","meta21430",1642149584,null)], null);
}));

(cljs.core.async.t_cljs$core$async21429.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21429");

(cljs.core.async.t_cljs$core$async21429.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21429");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21429.
 */
cljs.core.async.__GT_t_cljs$core$async21429 = (function cljs$core$async$__GT_t_cljs$core$async21429(f,blockable,meta21430){
return (new cljs.core.async.t_cljs$core$async21429(f,blockable,meta21430));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__21428 = arguments.length;
switch (G__21428) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async21429(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__21454 = arguments.length;
switch (G__21454) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__21460 = arguments.length;
switch (G__21460) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__21465 = arguments.length;
switch (G__21465) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_23520 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23520) : fn1.call(null,val_23520));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23520) : fn1.call(null,val_23520));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__21469 = arguments.length;
switch (G__21469) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___23522 = n;
var x_23523 = (0);
while(true){
if((x_23523 < n__5636__auto___23522)){
(a[x_23523] = x_23523);

var G__23524 = (x_23523 + (1));
x_23523 = G__23524;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21471 = (function (flag,meta21472){
this.flag = flag;
this.meta21472 = meta21472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21473,meta21472__$1){
var self__ = this;
var _21473__$1 = this;
return (new cljs.core.async.t_cljs$core$async21471(self__.flag,meta21472__$1));
}));

(cljs.core.async.t_cljs$core$async21471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21473){
var self__ = this;
var _21473__$1 = this;
return self__.meta21472;
}));

(cljs.core.async.t_cljs$core$async21471.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21471.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async21471.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21471.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async21471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21472","meta21472",1878067387,null)], null);
}));

(cljs.core.async.t_cljs$core$async21471.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21471");

(cljs.core.async.t_cljs$core$async21471.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21471");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21471.
 */
cljs.core.async.__GT_t_cljs$core$async21471 = (function cljs$core$async$__GT_t_cljs$core$async21471(flag,meta21472){
return (new cljs.core.async.t_cljs$core$async21471(flag,meta21472));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async21471(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21479 = (function (flag,cb,meta21480){
this.flag = flag;
this.cb = cb;
this.meta21480 = meta21480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21481,meta21480__$1){
var self__ = this;
var _21481__$1 = this;
return (new cljs.core.async.t_cljs$core$async21479(self__.flag,self__.cb,meta21480__$1));
}));

(cljs.core.async.t_cljs$core$async21479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21481){
var self__ = this;
var _21481__$1 = this;
return self__.meta21480;
}));

(cljs.core.async.t_cljs$core$async21479.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async21479.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async21479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21480","meta21480",1770012459,null)], null);
}));

(cljs.core.async.t_cljs$core$async21479.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21479");

(cljs.core.async.t_cljs$core$async21479.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21479");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21479.
 */
cljs.core.async.__GT_t_cljs$core$async21479 = (function cljs$core$async$__GT_t_cljs$core$async21479(flag,cb,meta21480){
return (new cljs.core.async.t_cljs$core$async21479(flag,cb,meta21480));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async21479(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21490_SHARP_){
var G__21501 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21490_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21501) : fret.call(null,G__21501));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21491_SHARP_){
var G__21502 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21491_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21502) : fret.call(null,G__21502));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23529 = (i + (1));
i = G__23529;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23532 = arguments.length;
var i__5770__auto___23533 = (0);
while(true){
if((i__5770__auto___23533 < len__5769__auto___23532)){
args__5775__auto__.push((arguments[i__5770__auto___23533]));

var G__23534 = (i__5770__auto___23533 + (1));
i__5770__auto___23533 = G__23534;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21508){
var map__21510 = p__21508;
var map__21510__$1 = cljs.core.__destructure_map(map__21510);
var opts = map__21510__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21504){
var G__21505 = cljs.core.first(seq21504);
var seq21504__$1 = cljs.core.next(seq21504);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21505,seq21504__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__21513 = arguments.length;
switch (G__21513) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21307__auto___23536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = (function (state_21553){
var state_val_21554 = (state_21553[(1)]);
if((state_val_21554 === (7))){
var inst_21537 = (state_21553[(2)]);
var state_21553__$1 = state_21553;
var statearr_21562_23537 = state_21553__$1;
(statearr_21562_23537[(2)] = inst_21537);

(statearr_21562_23537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21554 === (1))){
var state_21553__$1 = state_21553;
var statearr_21563_23538 = state_21553__$1;
(statearr_21563_23538[(2)] = null);

(statearr_21563_23538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21554 === (4))){
var inst_21520 = (state_21553[(7)]);
var inst_21520__$1 = (state_21553[(2)]);
var inst_21521 = (inst_21520__$1 == null);
var state_21553__$1 = (function (){var statearr_21564 = state_21553;
(statearr_21564[(7)] = inst_21520__$1);

return statearr_21564;
})();
if(cljs.core.truth_(inst_21521)){
var statearr_21565_23539 = state_21553__$1;
(statearr_21565_23539[(1)] = (5));

} else {
var statearr_21566_23540 = state_21553__$1;
(statearr_21566_23540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21554 === (13))){
var state_21553__$1 = state_21553;
var statearr_21567_23541 = state_21553__$1;
(statearr_21567_23541[(2)] = null);

(statearr_21567_23541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21554 === (6))){
var inst_21520 = (state_21553[(7)]);
var state_21553__$1 = state_21553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21553__$1,(11),to,inst_21520);
} else {
if((state_val_21554 === (3))){
var inst_21551 = (state_21553[(2)]);
var state_21553__$1 = state_21553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21553__$1,inst_21551);
} else {
if((state_val_21554 === (12))){
var state_21553__$1 = state_21553;
var statearr_21572_23542 = state_21553__$1;
(statearr_21572_23542[(2)] = null);

(statearr_21572_23542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21554 === (2))){
var state_21553__$1 = state_21553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21553__$1,(4),from);
} else {
if((state_val_21554 === (11))){
var inst_21530 = (state_21553[(2)]);
var state_21553__$1 = state_21553;
if(cljs.core.truth_(inst_21530)){
var statearr_21578_23543 = state_21553__$1;
(statearr_21578_23543[(1)] = (12));

} else {
var statearr_21579_23544 = state_21553__$1;
(statearr_21579_23544[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21554 === (9))){
var state_21553__$1 = state_21553;
var statearr_21582_23545 = state_21553__$1;
(statearr_21582_23545[(2)] = null);

(statearr_21582_23545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21554 === (5))){
var state_21553__$1 = state_21553;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21589_23546 = state_21553__$1;
(statearr_21589_23546[(1)] = (8));

} else {
var statearr_21591_23547 = state_21553__$1;
(statearr_21591_23547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21554 === (14))){
var inst_21535 = (state_21553[(2)]);
var state_21553__$1 = state_21553;
var statearr_21597_23548 = state_21553__$1;
(statearr_21597_23548[(2)] = inst_21535);

(statearr_21597_23548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21554 === (10))){
var inst_21527 = (state_21553[(2)]);
var state_21553__$1 = state_21553;
var statearr_21600_23549 = state_21553__$1;
(statearr_21600_23549[(2)] = inst_21527);

(statearr_21600_23549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21554 === (8))){
var inst_21524 = cljs.core.async.close_BANG_(to);
var state_21553__$1 = state_21553;
var statearr_21603_23550 = state_21553__$1;
(statearr_21603_23550[(2)] = inst_21524);

(statearr_21603_23550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});
return (function() {
var cljs$core$async$state_machine__21179__auto__ = null;
var cljs$core$async$state_machine__21179__auto____0 = (function (){
var statearr_21613 = [null,null,null,null,null,null,null,null];
(statearr_21613[(0)] = cljs$core$async$state_machine__21179__auto__);

(statearr_21613[(1)] = (1));

return statearr_21613;
});
var cljs$core$async$state_machine__21179__auto____1 = (function (state_21553){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_21553);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e21616){var ex__21182__auto__ = e21616;
var statearr_21617_23551 = state_21553;
(statearr_21617_23551[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_21553[(4)]))){
var statearr_21618_23552 = state_21553;
(statearr_21618_23552[(1)] = cljs.core.first((state_21553[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23553 = state_21553;
state_21553 = G__23553;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
cljs$core$async$state_machine__21179__auto__ = function(state_21553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21179__auto____1.call(this,state_21553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21179__auto____0;
cljs$core$async$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21179__auto____1;
return cljs$core$async$state_machine__21179__auto__;
})()
})();
var state__21309__auto__ = (function (){var statearr_21639 = f__21308__auto__();
(statearr_21639[(6)] = c__21307__auto___23536);

return statearr_21639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__21672){
var vec__21673 = p__21672;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21673,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21673,(1),null);
var job = vec__21673;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__21307__auto___23554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = (function (state_21681){
var state_val_21682 = (state_21681[(1)]);
if((state_val_21682 === (1))){
var state_21681__$1 = state_21681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21681__$1,(2),res,v);
} else {
if((state_val_21682 === (2))){
var inst_21678 = (state_21681[(2)]);
var inst_21679 = cljs.core.async.close_BANG_(res);
var state_21681__$1 = (function (){var statearr_21686 = state_21681;
(statearr_21686[(7)] = inst_21678);

return statearr_21686;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21681__$1,inst_21679);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____0 = (function (){
var statearr_21687 = [null,null,null,null,null,null,null,null];
(statearr_21687[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__);

(statearr_21687[(1)] = (1));

return statearr_21687;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____1 = (function (state_21681){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_21681);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e21688){var ex__21182__auto__ = e21688;
var statearr_21689_23555 = state_21681;
(statearr_21689_23555[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_21681[(4)]))){
var statearr_21690_23556 = state_21681;
(statearr_21690_23556[(1)] = cljs.core.first((state_21681[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23557 = state_21681;
state_21681 = G__23557;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__ = function(state_21681){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____1.call(this,state_21681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__;
})()
})();
var state__21309__auto__ = (function (){var statearr_21691 = f__21308__auto__();
(statearr_21691[(6)] = c__21307__auto___23554);

return statearr_21691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__21692){
var vec__21694 = p__21692;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21694,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21694,(1),null);
var job = vec__21694;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___23558 = n;
var __23559 = (0);
while(true){
if((__23559 < n__5636__auto___23558)){
var G__21697_23560 = type;
var G__21697_23561__$1 = (((G__21697_23560 instanceof cljs.core.Keyword))?G__21697_23560.fqn:null);
switch (G__21697_23561__$1) {
case "compute":
var c__21307__auto___23563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23559,c__21307__auto___23563,G__21697_23560,G__21697_23561__$1,n__5636__auto___23558,jobs,results,process__$1,async){
return (function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = ((function (__23559,c__21307__auto___23563,G__21697_23560,G__21697_23561__$1,n__5636__auto___23558,jobs,results,process__$1,async){
return (function (state_21714){
var state_val_21715 = (state_21714[(1)]);
if((state_val_21715 === (1))){
var state_21714__$1 = state_21714;
var statearr_21716_23564 = state_21714__$1;
(statearr_21716_23564[(2)] = null);

(statearr_21716_23564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21715 === (2))){
var state_21714__$1 = state_21714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21714__$1,(4),jobs);
} else {
if((state_val_21715 === (3))){
var inst_21712 = (state_21714[(2)]);
var state_21714__$1 = state_21714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21714__$1,inst_21712);
} else {
if((state_val_21715 === (4))){
var inst_21700 = (state_21714[(2)]);
var inst_21705 = process__$1(inst_21700);
var state_21714__$1 = state_21714;
if(cljs.core.truth_(inst_21705)){
var statearr_21720_23565 = state_21714__$1;
(statearr_21720_23565[(1)] = (5));

} else {
var statearr_21721_23566 = state_21714__$1;
(statearr_21721_23566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21715 === (5))){
var state_21714__$1 = state_21714;
var statearr_21722_23567 = state_21714__$1;
(statearr_21722_23567[(2)] = null);

(statearr_21722_23567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21715 === (6))){
var state_21714__$1 = state_21714;
var statearr_21724_23568 = state_21714__$1;
(statearr_21724_23568[(2)] = null);

(statearr_21724_23568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21715 === (7))){
var inst_21710 = (state_21714[(2)]);
var state_21714__$1 = state_21714;
var statearr_21725_23569 = state_21714__$1;
(statearr_21725_23569[(2)] = inst_21710);

(statearr_21725_23569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23559,c__21307__auto___23563,G__21697_23560,G__21697_23561__$1,n__5636__auto___23558,jobs,results,process__$1,async))
;
return ((function (__23559,switch__21178__auto__,c__21307__auto___23563,G__21697_23560,G__21697_23561__$1,n__5636__auto___23558,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____0 = (function (){
var statearr_21728 = [null,null,null,null,null,null,null];
(statearr_21728[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__);

(statearr_21728[(1)] = (1));

return statearr_21728;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____1 = (function (state_21714){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_21714);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e21729){var ex__21182__auto__ = e21729;
var statearr_21730_23570 = state_21714;
(statearr_21730_23570[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_21714[(4)]))){
var statearr_21731_23571 = state_21714;
(statearr_21731_23571[(1)] = cljs.core.first((state_21714[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23572 = state_21714;
state_21714 = G__23572;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__ = function(state_21714){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____1.call(this,state_21714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__;
})()
;})(__23559,switch__21178__auto__,c__21307__auto___23563,G__21697_23560,G__21697_23561__$1,n__5636__auto___23558,jobs,results,process__$1,async))
})();
var state__21309__auto__ = (function (){var statearr_21733 = f__21308__auto__();
(statearr_21733[(6)] = c__21307__auto___23563);

return statearr_21733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
});})(__23559,c__21307__auto___23563,G__21697_23560,G__21697_23561__$1,n__5636__auto___23558,jobs,results,process__$1,async))
);


break;
case "async":
var c__21307__auto___23573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23559,c__21307__auto___23573,G__21697_23560,G__21697_23561__$1,n__5636__auto___23558,jobs,results,process__$1,async){
return (function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = ((function (__23559,c__21307__auto___23573,G__21697_23560,G__21697_23561__$1,n__5636__auto___23558,jobs,results,process__$1,async){
return (function (state_21749){
var state_val_21750 = (state_21749[(1)]);
if((state_val_21750 === (1))){
var state_21749__$1 = state_21749;
var statearr_21751_23574 = state_21749__$1;
(statearr_21751_23574[(2)] = null);

(statearr_21751_23574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21750 === (2))){
var state_21749__$1 = state_21749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21749__$1,(4),jobs);
} else {
if((state_val_21750 === (3))){
var inst_21747 = (state_21749[(2)]);
var state_21749__$1 = state_21749;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21749__$1,inst_21747);
} else {
if((state_val_21750 === (4))){
var inst_21739 = (state_21749[(2)]);
var inst_21740 = async(inst_21739);
var state_21749__$1 = state_21749;
if(cljs.core.truth_(inst_21740)){
var statearr_21752_23575 = state_21749__$1;
(statearr_21752_23575[(1)] = (5));

} else {
var statearr_21753_23576 = state_21749__$1;
(statearr_21753_23576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21750 === (5))){
var state_21749__$1 = state_21749;
var statearr_21754_23577 = state_21749__$1;
(statearr_21754_23577[(2)] = null);

(statearr_21754_23577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21750 === (6))){
var state_21749__$1 = state_21749;
var statearr_21755_23578 = state_21749__$1;
(statearr_21755_23578[(2)] = null);

(statearr_21755_23578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21750 === (7))){
var inst_21745 = (state_21749[(2)]);
var state_21749__$1 = state_21749;
var statearr_21756_23579 = state_21749__$1;
(statearr_21756_23579[(2)] = inst_21745);

(statearr_21756_23579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23559,c__21307__auto___23573,G__21697_23560,G__21697_23561__$1,n__5636__auto___23558,jobs,results,process__$1,async))
;
return ((function (__23559,switch__21178__auto__,c__21307__auto___23573,G__21697_23560,G__21697_23561__$1,n__5636__auto___23558,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____0 = (function (){
var statearr_21757 = [null,null,null,null,null,null,null];
(statearr_21757[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__);

(statearr_21757[(1)] = (1));

return statearr_21757;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____1 = (function (state_21749){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_21749);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e21758){var ex__21182__auto__ = e21758;
var statearr_21759_23580 = state_21749;
(statearr_21759_23580[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_21749[(4)]))){
var statearr_21762_23581 = state_21749;
(statearr_21762_23581[(1)] = cljs.core.first((state_21749[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23582 = state_21749;
state_21749 = G__23582;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__ = function(state_21749){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____1.call(this,state_21749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__;
})()
;})(__23559,switch__21178__auto__,c__21307__auto___23573,G__21697_23560,G__21697_23561__$1,n__5636__auto___23558,jobs,results,process__$1,async))
})();
var state__21309__auto__ = (function (){var statearr_21767 = f__21308__auto__();
(statearr_21767[(6)] = c__21307__auto___23573);

return statearr_21767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
});})(__23559,c__21307__auto___23573,G__21697_23560,G__21697_23561__$1,n__5636__auto___23558,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21697_23561__$1)].join('')));

}

var G__23583 = (__23559 + (1));
__23559 = G__23583;
continue;
} else {
}
break;
}

var c__21307__auto___23584 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = (function (state_21789){
var state_val_21790 = (state_21789[(1)]);
if((state_val_21790 === (7))){
var inst_21785 = (state_21789[(2)]);
var state_21789__$1 = state_21789;
var statearr_21791_23585 = state_21789__$1;
(statearr_21791_23585[(2)] = inst_21785);

(statearr_21791_23585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21790 === (1))){
var state_21789__$1 = state_21789;
var statearr_21792_23586 = state_21789__$1;
(statearr_21792_23586[(2)] = null);

(statearr_21792_23586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21790 === (4))){
var inst_21770 = (state_21789[(7)]);
var inst_21770__$1 = (state_21789[(2)]);
var inst_21771 = (inst_21770__$1 == null);
var state_21789__$1 = (function (){var statearr_21795 = state_21789;
(statearr_21795[(7)] = inst_21770__$1);

return statearr_21795;
})();
if(cljs.core.truth_(inst_21771)){
var statearr_21798_23587 = state_21789__$1;
(statearr_21798_23587[(1)] = (5));

} else {
var statearr_21799_23588 = state_21789__$1;
(statearr_21799_23588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21790 === (6))){
var inst_21775 = (state_21789[(8)]);
var inst_21770 = (state_21789[(7)]);
var inst_21775__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_21776 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21777 = [inst_21770,inst_21775__$1];
var inst_21778 = (new cljs.core.PersistentVector(null,2,(5),inst_21776,inst_21777,null));
var state_21789__$1 = (function (){var statearr_21802 = state_21789;
(statearr_21802[(8)] = inst_21775__$1);

return statearr_21802;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21789__$1,(8),jobs,inst_21778);
} else {
if((state_val_21790 === (3))){
var inst_21787 = (state_21789[(2)]);
var state_21789__$1 = state_21789;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21789__$1,inst_21787);
} else {
if((state_val_21790 === (2))){
var state_21789__$1 = state_21789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21789__$1,(4),from);
} else {
if((state_val_21790 === (9))){
var inst_21782 = (state_21789[(2)]);
var state_21789__$1 = (function (){var statearr_21803 = state_21789;
(statearr_21803[(9)] = inst_21782);

return statearr_21803;
})();
var statearr_21804_23589 = state_21789__$1;
(statearr_21804_23589[(2)] = null);

(statearr_21804_23589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21790 === (5))){
var inst_21773 = cljs.core.async.close_BANG_(jobs);
var state_21789__$1 = state_21789;
var statearr_21805_23590 = state_21789__$1;
(statearr_21805_23590[(2)] = inst_21773);

(statearr_21805_23590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21790 === (8))){
var inst_21775 = (state_21789[(8)]);
var inst_21780 = (state_21789[(2)]);
var state_21789__$1 = (function (){var statearr_21806 = state_21789;
(statearr_21806[(10)] = inst_21780);

return statearr_21806;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21789__$1,(9),results,inst_21775);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____0 = (function (){
var statearr_21807 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21807[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__);

(statearr_21807[(1)] = (1));

return statearr_21807;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____1 = (function (state_21789){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_21789);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e21808){var ex__21182__auto__ = e21808;
var statearr_21809_23591 = state_21789;
(statearr_21809_23591[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_21789[(4)]))){
var statearr_21810_23592 = state_21789;
(statearr_21810_23592[(1)] = cljs.core.first((state_21789[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23593 = state_21789;
state_21789 = G__23593;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__ = function(state_21789){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____1.call(this,state_21789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__;
})()
})();
var state__21309__auto__ = (function (){var statearr_21811 = f__21308__auto__();
(statearr_21811[(6)] = c__21307__auto___23584);

return statearr_21811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
}));


var c__21307__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = (function (state_21859){
var state_val_21860 = (state_21859[(1)]);
if((state_val_21860 === (7))){
var inst_21855 = (state_21859[(2)]);
var state_21859__$1 = state_21859;
var statearr_21861_23594 = state_21859__$1;
(statearr_21861_23594[(2)] = inst_21855);

(statearr_21861_23594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (20))){
var state_21859__$1 = state_21859;
var statearr_21862_23595 = state_21859__$1;
(statearr_21862_23595[(2)] = null);

(statearr_21862_23595[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (1))){
var state_21859__$1 = state_21859;
var statearr_21863_23596 = state_21859__$1;
(statearr_21863_23596[(2)] = null);

(statearr_21863_23596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (4))){
var inst_21820 = (state_21859[(7)]);
var inst_21820__$1 = (state_21859[(2)]);
var inst_21821 = (inst_21820__$1 == null);
var state_21859__$1 = (function (){var statearr_21865 = state_21859;
(statearr_21865[(7)] = inst_21820__$1);

return statearr_21865;
})();
if(cljs.core.truth_(inst_21821)){
var statearr_21866_23597 = state_21859__$1;
(statearr_21866_23597[(1)] = (5));

} else {
var statearr_21867_23598 = state_21859__$1;
(statearr_21867_23598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (15))){
var inst_21837 = (state_21859[(8)]);
var state_21859__$1 = state_21859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21859__$1,(18),to,inst_21837);
} else {
if((state_val_21860 === (21))){
var inst_21850 = (state_21859[(2)]);
var state_21859__$1 = state_21859;
var statearr_21868_23599 = state_21859__$1;
(statearr_21868_23599[(2)] = inst_21850);

(statearr_21868_23599[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (13))){
var inst_21852 = (state_21859[(2)]);
var state_21859__$1 = (function (){var statearr_21869 = state_21859;
(statearr_21869[(9)] = inst_21852);

return statearr_21869;
})();
var statearr_21870_23600 = state_21859__$1;
(statearr_21870_23600[(2)] = null);

(statearr_21870_23600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (6))){
var inst_21820 = (state_21859[(7)]);
var state_21859__$1 = state_21859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21859__$1,(11),inst_21820);
} else {
if((state_val_21860 === (17))){
var inst_21845 = (state_21859[(2)]);
var state_21859__$1 = state_21859;
if(cljs.core.truth_(inst_21845)){
var statearr_21871_23601 = state_21859__$1;
(statearr_21871_23601[(1)] = (19));

} else {
var statearr_21872_23602 = state_21859__$1;
(statearr_21872_23602[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (3))){
var inst_21857 = (state_21859[(2)]);
var state_21859__$1 = state_21859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21859__$1,inst_21857);
} else {
if((state_val_21860 === (12))){
var inst_21830 = (state_21859[(10)]);
var state_21859__$1 = state_21859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21859__$1,(14),inst_21830);
} else {
if((state_val_21860 === (2))){
var state_21859__$1 = state_21859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21859__$1,(4),results);
} else {
if((state_val_21860 === (19))){
var state_21859__$1 = state_21859;
var statearr_21873_23603 = state_21859__$1;
(statearr_21873_23603[(2)] = null);

(statearr_21873_23603[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (11))){
var inst_21830 = (state_21859[(2)]);
var state_21859__$1 = (function (){var statearr_21874 = state_21859;
(statearr_21874[(10)] = inst_21830);

return statearr_21874;
})();
var statearr_21875_23604 = state_21859__$1;
(statearr_21875_23604[(2)] = null);

(statearr_21875_23604[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (9))){
var state_21859__$1 = state_21859;
var statearr_21876_23605 = state_21859__$1;
(statearr_21876_23605[(2)] = null);

(statearr_21876_23605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (5))){
var state_21859__$1 = state_21859;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21877_23606 = state_21859__$1;
(statearr_21877_23606[(1)] = (8));

} else {
var statearr_21878_23607 = state_21859__$1;
(statearr_21878_23607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (14))){
var inst_21837 = (state_21859[(8)]);
var inst_21839 = (state_21859[(11)]);
var inst_21837__$1 = (state_21859[(2)]);
var inst_21838 = (inst_21837__$1 == null);
var inst_21839__$1 = cljs.core.not(inst_21838);
var state_21859__$1 = (function (){var statearr_21880 = state_21859;
(statearr_21880[(8)] = inst_21837__$1);

(statearr_21880[(11)] = inst_21839__$1);

return statearr_21880;
})();
if(inst_21839__$1){
var statearr_21881_23608 = state_21859__$1;
(statearr_21881_23608[(1)] = (15));

} else {
var statearr_21882_23609 = state_21859__$1;
(statearr_21882_23609[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (16))){
var inst_21839 = (state_21859[(11)]);
var state_21859__$1 = state_21859;
var statearr_21883_23610 = state_21859__$1;
(statearr_21883_23610[(2)] = inst_21839);

(statearr_21883_23610[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (10))){
var inst_21827 = (state_21859[(2)]);
var state_21859__$1 = state_21859;
var statearr_21884_23611 = state_21859__$1;
(statearr_21884_23611[(2)] = inst_21827);

(statearr_21884_23611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (18))){
var inst_21842 = (state_21859[(2)]);
var state_21859__$1 = state_21859;
var statearr_21885_23612 = state_21859__$1;
(statearr_21885_23612[(2)] = inst_21842);

(statearr_21885_23612[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (8))){
var inst_21824 = cljs.core.async.close_BANG_(to);
var state_21859__$1 = state_21859;
var statearr_21887_23613 = state_21859__$1;
(statearr_21887_23613[(2)] = inst_21824);

(statearr_21887_23613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____0 = (function (){
var statearr_21889 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21889[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__);

(statearr_21889[(1)] = (1));

return statearr_21889;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____1 = (function (state_21859){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_21859);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e21890){var ex__21182__auto__ = e21890;
var statearr_21891_23616 = state_21859;
(statearr_21891_23616[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_21859[(4)]))){
var statearr_21892_23617 = state_21859;
(statearr_21892_23617[(1)] = cljs.core.first((state_21859[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23618 = state_21859;
state_21859 = G__23618;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__ = function(state_21859){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____1.call(this,state_21859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21179__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21179__auto__;
})()
})();
var state__21309__auto__ = (function (){var statearr_21893 = f__21308__auto__();
(statearr_21893[(6)] = c__21307__auto__);

return statearr_21893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
}));

return c__21307__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__21895 = arguments.length;
switch (G__21895) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__21900 = arguments.length;
switch (G__21900) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__21905 = arguments.length;
switch (G__21905) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__21307__auto___23622 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = (function (state_21933){
var state_val_21934 = (state_21933[(1)]);
if((state_val_21934 === (7))){
var inst_21929 = (state_21933[(2)]);
var state_21933__$1 = state_21933;
var statearr_21935_23623 = state_21933__$1;
(statearr_21935_23623[(2)] = inst_21929);

(statearr_21935_23623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21934 === (1))){
var state_21933__$1 = state_21933;
var statearr_21936_23624 = state_21933__$1;
(statearr_21936_23624[(2)] = null);

(statearr_21936_23624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21934 === (4))){
var inst_21910 = (state_21933[(7)]);
var inst_21910__$1 = (state_21933[(2)]);
var inst_21911 = (inst_21910__$1 == null);
var state_21933__$1 = (function (){var statearr_21941 = state_21933;
(statearr_21941[(7)] = inst_21910__$1);

return statearr_21941;
})();
if(cljs.core.truth_(inst_21911)){
var statearr_21946_23625 = state_21933__$1;
(statearr_21946_23625[(1)] = (5));

} else {
var statearr_21951_23626 = state_21933__$1;
(statearr_21951_23626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21934 === (13))){
var state_21933__$1 = state_21933;
var statearr_21952_23627 = state_21933__$1;
(statearr_21952_23627[(2)] = null);

(statearr_21952_23627[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21934 === (6))){
var inst_21910 = (state_21933[(7)]);
var inst_21916 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21910) : p.call(null,inst_21910));
var state_21933__$1 = state_21933;
if(cljs.core.truth_(inst_21916)){
var statearr_21953_23628 = state_21933__$1;
(statearr_21953_23628[(1)] = (9));

} else {
var statearr_21954_23629 = state_21933__$1;
(statearr_21954_23629[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21934 === (3))){
var inst_21931 = (state_21933[(2)]);
var state_21933__$1 = state_21933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21933__$1,inst_21931);
} else {
if((state_val_21934 === (12))){
var state_21933__$1 = state_21933;
var statearr_21955_23630 = state_21933__$1;
(statearr_21955_23630[(2)] = null);

(statearr_21955_23630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21934 === (2))){
var state_21933__$1 = state_21933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21933__$1,(4),ch);
} else {
if((state_val_21934 === (11))){
var inst_21910 = (state_21933[(7)]);
var inst_21920 = (state_21933[(2)]);
var state_21933__$1 = state_21933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21933__$1,(8),inst_21920,inst_21910);
} else {
if((state_val_21934 === (9))){
var state_21933__$1 = state_21933;
var statearr_21956_23631 = state_21933__$1;
(statearr_21956_23631[(2)] = tc);

(statearr_21956_23631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21934 === (5))){
var inst_21913 = cljs.core.async.close_BANG_(tc);
var inst_21914 = cljs.core.async.close_BANG_(fc);
var state_21933__$1 = (function (){var statearr_21957 = state_21933;
(statearr_21957[(8)] = inst_21913);

return statearr_21957;
})();
var statearr_21958_23632 = state_21933__$1;
(statearr_21958_23632[(2)] = inst_21914);

(statearr_21958_23632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21934 === (14))){
var inst_21927 = (state_21933[(2)]);
var state_21933__$1 = state_21933;
var statearr_21961_23633 = state_21933__$1;
(statearr_21961_23633[(2)] = inst_21927);

(statearr_21961_23633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21934 === (10))){
var state_21933__$1 = state_21933;
var statearr_21963_23634 = state_21933__$1;
(statearr_21963_23634[(2)] = fc);

(statearr_21963_23634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21934 === (8))){
var inst_21922 = (state_21933[(2)]);
var state_21933__$1 = state_21933;
if(cljs.core.truth_(inst_21922)){
var statearr_21964_23635 = state_21933__$1;
(statearr_21964_23635[(1)] = (12));

} else {
var statearr_21965_23636 = state_21933__$1;
(statearr_21965_23636[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});
return (function() {
var cljs$core$async$state_machine__21179__auto__ = null;
var cljs$core$async$state_machine__21179__auto____0 = (function (){
var statearr_21966 = [null,null,null,null,null,null,null,null,null];
(statearr_21966[(0)] = cljs$core$async$state_machine__21179__auto__);

(statearr_21966[(1)] = (1));

return statearr_21966;
});
var cljs$core$async$state_machine__21179__auto____1 = (function (state_21933){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_21933);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e21969){var ex__21182__auto__ = e21969;
var statearr_21970_23637 = state_21933;
(statearr_21970_23637[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_21933[(4)]))){
var statearr_21973_23638 = state_21933;
(statearr_21973_23638[(1)] = cljs.core.first((state_21933[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23639 = state_21933;
state_21933 = G__23639;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
cljs$core$async$state_machine__21179__auto__ = function(state_21933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21179__auto____1.call(this,state_21933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21179__auto____0;
cljs$core$async$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21179__auto____1;
return cljs$core$async$state_machine__21179__auto__;
})()
})();
var state__21309__auto__ = (function (){var statearr_21976 = f__21308__auto__();
(statearr_21976[(6)] = c__21307__auto___23622);

return statearr_21976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21307__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = (function (state_22000){
var state_val_22001 = (state_22000[(1)]);
if((state_val_22001 === (7))){
var inst_21996 = (state_22000[(2)]);
var state_22000__$1 = state_22000;
var statearr_22002_23640 = state_22000__$1;
(statearr_22002_23640[(2)] = inst_21996);

(statearr_22002_23640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22001 === (1))){
var inst_21979 = init;
var inst_21980 = inst_21979;
var state_22000__$1 = (function (){var statearr_22003 = state_22000;
(statearr_22003[(7)] = inst_21980);

return statearr_22003;
})();
var statearr_22004_23641 = state_22000__$1;
(statearr_22004_23641[(2)] = null);

(statearr_22004_23641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22001 === (4))){
var inst_21983 = (state_22000[(8)]);
var inst_21983__$1 = (state_22000[(2)]);
var inst_21984 = (inst_21983__$1 == null);
var state_22000__$1 = (function (){var statearr_22005 = state_22000;
(statearr_22005[(8)] = inst_21983__$1);

return statearr_22005;
})();
if(cljs.core.truth_(inst_21984)){
var statearr_22011_23642 = state_22000__$1;
(statearr_22011_23642[(1)] = (5));

} else {
var statearr_22012_23643 = state_22000__$1;
(statearr_22012_23643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22001 === (6))){
var inst_21983 = (state_22000[(8)]);
var inst_21980 = (state_22000[(7)]);
var inst_21987 = (state_22000[(9)]);
var inst_21987__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_21980,inst_21983) : f.call(null,inst_21980,inst_21983));
var inst_21988 = cljs.core.reduced_QMARK_(inst_21987__$1);
var state_22000__$1 = (function (){var statearr_22013 = state_22000;
(statearr_22013[(9)] = inst_21987__$1);

return statearr_22013;
})();
if(inst_21988){
var statearr_22014_23644 = state_22000__$1;
(statearr_22014_23644[(1)] = (8));

} else {
var statearr_22015_23645 = state_22000__$1;
(statearr_22015_23645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22001 === (3))){
var inst_21998 = (state_22000[(2)]);
var state_22000__$1 = state_22000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22000__$1,inst_21998);
} else {
if((state_val_22001 === (2))){
var state_22000__$1 = state_22000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22000__$1,(4),ch);
} else {
if((state_val_22001 === (9))){
var inst_21987 = (state_22000[(9)]);
var inst_21980 = inst_21987;
var state_22000__$1 = (function (){var statearr_22016 = state_22000;
(statearr_22016[(7)] = inst_21980);

return statearr_22016;
})();
var statearr_22017_23646 = state_22000__$1;
(statearr_22017_23646[(2)] = null);

(statearr_22017_23646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22001 === (5))){
var inst_21980 = (state_22000[(7)]);
var state_22000__$1 = state_22000;
var statearr_22019_23647 = state_22000__$1;
(statearr_22019_23647[(2)] = inst_21980);

(statearr_22019_23647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22001 === (10))){
var inst_21994 = (state_22000[(2)]);
var state_22000__$1 = state_22000;
var statearr_22021_23648 = state_22000__$1;
(statearr_22021_23648[(2)] = inst_21994);

(statearr_22021_23648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22001 === (8))){
var inst_21987 = (state_22000[(9)]);
var inst_21990 = cljs.core.deref(inst_21987);
var state_22000__$1 = state_22000;
var statearr_22023_23649 = state_22000__$1;
(statearr_22023_23649[(2)] = inst_21990);

(statearr_22023_23649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__21179__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21179__auto____0 = (function (){
var statearr_22024 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22024[(0)] = cljs$core$async$reduce_$_state_machine__21179__auto__);

(statearr_22024[(1)] = (1));

return statearr_22024;
});
var cljs$core$async$reduce_$_state_machine__21179__auto____1 = (function (state_22000){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_22000);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e22025){var ex__21182__auto__ = e22025;
var statearr_22026_23650 = state_22000;
(statearr_22026_23650[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_22000[(4)]))){
var statearr_22027_23651 = state_22000;
(statearr_22027_23651[(1)] = cljs.core.first((state_22000[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23652 = state_22000;
state_22000 = G__23652;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21179__auto__ = function(state_22000){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21179__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21179__auto____1.call(this,state_22000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21179__auto____0;
cljs$core$async$reduce_$_state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21179__auto____1;
return cljs$core$async$reduce_$_state_machine__21179__auto__;
})()
})();
var state__21309__auto__ = (function (){var statearr_22028 = f__21308__auto__();
(statearr_22028[(6)] = c__21307__auto__);

return statearr_22028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
}));

return c__21307__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__21307__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = (function (state_22034){
var state_val_22035 = (state_22034[(1)]);
if((state_val_22035 === (1))){
var inst_22029 = cljs.core.async.reduce(f__$1,init,ch);
var state_22034__$1 = state_22034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22034__$1,(2),inst_22029);
} else {
if((state_val_22035 === (2))){
var inst_22031 = (state_22034[(2)]);
var inst_22032 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_22031) : f__$1.call(null,inst_22031));
var state_22034__$1 = state_22034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22034__$1,inst_22032);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__21179__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21179__auto____0 = (function (){
var statearr_22037 = [null,null,null,null,null,null,null];
(statearr_22037[(0)] = cljs$core$async$transduce_$_state_machine__21179__auto__);

(statearr_22037[(1)] = (1));

return statearr_22037;
});
var cljs$core$async$transduce_$_state_machine__21179__auto____1 = (function (state_22034){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_22034);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e22038){var ex__21182__auto__ = e22038;
var statearr_22039_23653 = state_22034;
(statearr_22039_23653[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_22034[(4)]))){
var statearr_22040_23654 = state_22034;
(statearr_22040_23654[(1)] = cljs.core.first((state_22034[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23655 = state_22034;
state_22034 = G__23655;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21179__auto__ = function(state_22034){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21179__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21179__auto____1.call(this,state_22034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21179__auto____0;
cljs$core$async$transduce_$_state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21179__auto____1;
return cljs$core$async$transduce_$_state_machine__21179__auto__;
})()
})();
var state__21309__auto__ = (function (){var statearr_22044 = f__21308__auto__();
(statearr_22044[(6)] = c__21307__auto__);

return statearr_22044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
}));

return c__21307__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__22046 = arguments.length;
switch (G__22046) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21307__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = (function (state_22071){
var state_val_22072 = (state_22071[(1)]);
if((state_val_22072 === (7))){
var inst_22053 = (state_22071[(2)]);
var state_22071__$1 = state_22071;
var statearr_22073_23657 = state_22071__$1;
(statearr_22073_23657[(2)] = inst_22053);

(statearr_22073_23657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22072 === (1))){
var inst_22047 = cljs.core.seq(coll);
var inst_22048 = inst_22047;
var state_22071__$1 = (function (){var statearr_22075 = state_22071;
(statearr_22075[(7)] = inst_22048);

return statearr_22075;
})();
var statearr_22076_23658 = state_22071__$1;
(statearr_22076_23658[(2)] = null);

(statearr_22076_23658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22072 === (4))){
var inst_22048 = (state_22071[(7)]);
var inst_22051 = cljs.core.first(inst_22048);
var state_22071__$1 = state_22071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22071__$1,(7),ch,inst_22051);
} else {
if((state_val_22072 === (13))){
var inst_22065 = (state_22071[(2)]);
var state_22071__$1 = state_22071;
var statearr_22077_23659 = state_22071__$1;
(statearr_22077_23659[(2)] = inst_22065);

(statearr_22077_23659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22072 === (6))){
var inst_22056 = (state_22071[(2)]);
var state_22071__$1 = state_22071;
if(cljs.core.truth_(inst_22056)){
var statearr_22078_23660 = state_22071__$1;
(statearr_22078_23660[(1)] = (8));

} else {
var statearr_22079_23661 = state_22071__$1;
(statearr_22079_23661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22072 === (3))){
var inst_22069 = (state_22071[(2)]);
var state_22071__$1 = state_22071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22071__$1,inst_22069);
} else {
if((state_val_22072 === (12))){
var state_22071__$1 = state_22071;
var statearr_22080_23662 = state_22071__$1;
(statearr_22080_23662[(2)] = null);

(statearr_22080_23662[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22072 === (2))){
var inst_22048 = (state_22071[(7)]);
var state_22071__$1 = state_22071;
if(cljs.core.truth_(inst_22048)){
var statearr_22081_23663 = state_22071__$1;
(statearr_22081_23663[(1)] = (4));

} else {
var statearr_22082_23664 = state_22071__$1;
(statearr_22082_23664[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22072 === (11))){
var inst_22062 = cljs.core.async.close_BANG_(ch);
var state_22071__$1 = state_22071;
var statearr_22083_23665 = state_22071__$1;
(statearr_22083_23665[(2)] = inst_22062);

(statearr_22083_23665[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22072 === (9))){
var state_22071__$1 = state_22071;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22084_23666 = state_22071__$1;
(statearr_22084_23666[(1)] = (11));

} else {
var statearr_22085_23667 = state_22071__$1;
(statearr_22085_23667[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22072 === (5))){
var inst_22048 = (state_22071[(7)]);
var state_22071__$1 = state_22071;
var statearr_22086_23668 = state_22071__$1;
(statearr_22086_23668[(2)] = inst_22048);

(statearr_22086_23668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22072 === (10))){
var inst_22067 = (state_22071[(2)]);
var state_22071__$1 = state_22071;
var statearr_22087_23669 = state_22071__$1;
(statearr_22087_23669[(2)] = inst_22067);

(statearr_22087_23669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22072 === (8))){
var inst_22048 = (state_22071[(7)]);
var inst_22058 = cljs.core.next(inst_22048);
var inst_22048__$1 = inst_22058;
var state_22071__$1 = (function (){var statearr_22088 = state_22071;
(statearr_22088[(7)] = inst_22048__$1);

return statearr_22088;
})();
var statearr_22089_23670 = state_22071__$1;
(statearr_22089_23670[(2)] = null);

(statearr_22089_23670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});
return (function() {
var cljs$core$async$state_machine__21179__auto__ = null;
var cljs$core$async$state_machine__21179__auto____0 = (function (){
var statearr_22090 = [null,null,null,null,null,null,null,null];
(statearr_22090[(0)] = cljs$core$async$state_machine__21179__auto__);

(statearr_22090[(1)] = (1));

return statearr_22090;
});
var cljs$core$async$state_machine__21179__auto____1 = (function (state_22071){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_22071);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e22091){var ex__21182__auto__ = e22091;
var statearr_22092_23671 = state_22071;
(statearr_22092_23671[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_22071[(4)]))){
var statearr_22093_23672 = state_22071;
(statearr_22093_23672[(1)] = cljs.core.first((state_22071[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23674 = state_22071;
state_22071 = G__23674;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
cljs$core$async$state_machine__21179__auto__ = function(state_22071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21179__auto____1.call(this,state_22071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21179__auto____0;
cljs$core$async$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21179__auto____1;
return cljs$core$async$state_machine__21179__auto__;
})()
})();
var state__21309__auto__ = (function (){var statearr_22094 = f__21308__auto__();
(statearr_22094[(6)] = c__21307__auto__);

return statearr_22094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
}));

return c__21307__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__22108 = arguments.length;
switch (G__22108) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_23676 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_23676(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_23677 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_23677(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_23678 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_23678(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_23679 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_23679(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22139 = (function (ch,cs,meta22140){
this.ch = ch;
this.cs = cs;
this.meta22140 = meta22140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22141,meta22140__$1){
var self__ = this;
var _22141__$1 = this;
return (new cljs.core.async.t_cljs$core$async22139(self__.ch,self__.cs,meta22140__$1));
}));

(cljs.core.async.t_cljs$core$async22139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22141){
var self__ = this;
var _22141__$1 = this;
return self__.meta22140;
}));

(cljs.core.async.t_cljs$core$async22139.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22139.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async22139.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22139.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async22139.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async22139.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async22139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22140","meta22140",709059063,null)], null);
}));

(cljs.core.async.t_cljs$core$async22139.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22139");

(cljs.core.async.t_cljs$core$async22139.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async22139");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22139.
 */
cljs.core.async.__GT_t_cljs$core$async22139 = (function cljs$core$async$__GT_t_cljs$core$async22139(ch,cs,meta22140){
return (new cljs.core.async.t_cljs$core$async22139(ch,cs,meta22140));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async22139(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__21307__auto___23682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = (function (state_22289){
var state_val_22290 = (state_22289[(1)]);
if((state_val_22290 === (7))){
var inst_22282 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22293_23683 = state_22289__$1;
(statearr_22293_23683[(2)] = inst_22282);

(statearr_22293_23683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (20))){
var inst_22183 = (state_22289[(7)]);
var inst_22196 = cljs.core.first(inst_22183);
var inst_22197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22196,(0),null);
var inst_22198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22196,(1),null);
var state_22289__$1 = (function (){var statearr_22294 = state_22289;
(statearr_22294[(8)] = inst_22197);

return statearr_22294;
})();
if(cljs.core.truth_(inst_22198)){
var statearr_22295_23684 = state_22289__$1;
(statearr_22295_23684[(1)] = (22));

} else {
var statearr_22296_23685 = state_22289__$1;
(statearr_22296_23685[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (27))){
var inst_22151 = (state_22289[(9)]);
var inst_22228 = (state_22289[(10)]);
var inst_22233 = (state_22289[(11)]);
var inst_22226 = (state_22289[(12)]);
var inst_22233__$1 = cljs.core._nth(inst_22226,inst_22228);
var inst_22234 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22233__$1,inst_22151,done);
var state_22289__$1 = (function (){var statearr_22297 = state_22289;
(statearr_22297[(11)] = inst_22233__$1);

return statearr_22297;
})();
if(cljs.core.truth_(inst_22234)){
var statearr_22298_23686 = state_22289__$1;
(statearr_22298_23686[(1)] = (30));

} else {
var statearr_22299_23687 = state_22289__$1;
(statearr_22299_23687[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (1))){
var state_22289__$1 = state_22289;
var statearr_22300_23688 = state_22289__$1;
(statearr_22300_23688[(2)] = null);

(statearr_22300_23688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (24))){
var inst_22183 = (state_22289[(7)]);
var inst_22203 = (state_22289[(2)]);
var inst_22204 = cljs.core.next(inst_22183);
var inst_22160 = inst_22204;
var inst_22161 = null;
var inst_22162 = (0);
var inst_22163 = (0);
var state_22289__$1 = (function (){var statearr_22313 = state_22289;
(statearr_22313[(13)] = inst_22160);

(statearr_22313[(14)] = inst_22203);

(statearr_22313[(15)] = inst_22163);

(statearr_22313[(16)] = inst_22161);

(statearr_22313[(17)] = inst_22162);

return statearr_22313;
})();
var statearr_22314_23689 = state_22289__$1;
(statearr_22314_23689[(2)] = null);

(statearr_22314_23689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (39))){
var state_22289__$1 = state_22289;
var statearr_22318_23690 = state_22289__$1;
(statearr_22318_23690[(2)] = null);

(statearr_22318_23690[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (4))){
var inst_22151 = (state_22289[(9)]);
var inst_22151__$1 = (state_22289[(2)]);
var inst_22152 = (inst_22151__$1 == null);
var state_22289__$1 = (function (){var statearr_22319 = state_22289;
(statearr_22319[(9)] = inst_22151__$1);

return statearr_22319;
})();
if(cljs.core.truth_(inst_22152)){
var statearr_22320_23691 = state_22289__$1;
(statearr_22320_23691[(1)] = (5));

} else {
var statearr_22321_23692 = state_22289__$1;
(statearr_22321_23692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (15))){
var inst_22160 = (state_22289[(13)]);
var inst_22163 = (state_22289[(15)]);
var inst_22161 = (state_22289[(16)]);
var inst_22162 = (state_22289[(17)]);
var inst_22178 = (state_22289[(2)]);
var inst_22179 = (inst_22163 + (1));
var tmp22315 = inst_22160;
var tmp22316 = inst_22161;
var tmp22317 = inst_22162;
var inst_22160__$1 = tmp22315;
var inst_22161__$1 = tmp22316;
var inst_22162__$1 = tmp22317;
var inst_22163__$1 = inst_22179;
var state_22289__$1 = (function (){var statearr_22322 = state_22289;
(statearr_22322[(13)] = inst_22160__$1);

(statearr_22322[(18)] = inst_22178);

(statearr_22322[(15)] = inst_22163__$1);

(statearr_22322[(16)] = inst_22161__$1);

(statearr_22322[(17)] = inst_22162__$1);

return statearr_22322;
})();
var statearr_22323_23693 = state_22289__$1;
(statearr_22323_23693[(2)] = null);

(statearr_22323_23693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (21))){
var inst_22207 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22327_23695 = state_22289__$1;
(statearr_22327_23695[(2)] = inst_22207);

(statearr_22327_23695[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (31))){
var inst_22233 = (state_22289[(11)]);
var inst_22237 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22233);
var state_22289__$1 = state_22289;
var statearr_22329_23696 = state_22289__$1;
(statearr_22329_23696[(2)] = inst_22237);

(statearr_22329_23696[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (32))){
var inst_22227 = (state_22289[(19)]);
var inst_22228 = (state_22289[(10)]);
var inst_22225 = (state_22289[(20)]);
var inst_22226 = (state_22289[(12)]);
var inst_22239 = (state_22289[(2)]);
var inst_22240 = (inst_22228 + (1));
var tmp22324 = inst_22227;
var tmp22325 = inst_22225;
var tmp22326 = inst_22226;
var inst_22225__$1 = tmp22325;
var inst_22226__$1 = tmp22326;
var inst_22227__$1 = tmp22324;
var inst_22228__$1 = inst_22240;
var state_22289__$1 = (function (){var statearr_22330 = state_22289;
(statearr_22330[(21)] = inst_22239);

(statearr_22330[(19)] = inst_22227__$1);

(statearr_22330[(10)] = inst_22228__$1);

(statearr_22330[(20)] = inst_22225__$1);

(statearr_22330[(12)] = inst_22226__$1);

return statearr_22330;
})();
var statearr_22331_23698 = state_22289__$1;
(statearr_22331_23698[(2)] = null);

(statearr_22331_23698[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (40))){
var inst_22255 = (state_22289[(22)]);
var inst_22259 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22255);
var state_22289__$1 = state_22289;
var statearr_22336_23699 = state_22289__$1;
(statearr_22336_23699[(2)] = inst_22259);

(statearr_22336_23699[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (33))){
var inst_22243 = (state_22289[(23)]);
var inst_22248 = cljs.core.chunked_seq_QMARK_(inst_22243);
var state_22289__$1 = state_22289;
if(inst_22248){
var statearr_22339_23700 = state_22289__$1;
(statearr_22339_23700[(1)] = (36));

} else {
var statearr_22341_23701 = state_22289__$1;
(statearr_22341_23701[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (13))){
var inst_22172 = (state_22289[(24)]);
var inst_22175 = cljs.core.async.close_BANG_(inst_22172);
var state_22289__$1 = state_22289;
var statearr_22345_23702 = state_22289__$1;
(statearr_22345_23702[(2)] = inst_22175);

(statearr_22345_23702[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (22))){
var inst_22197 = (state_22289[(8)]);
var inst_22200 = cljs.core.async.close_BANG_(inst_22197);
var state_22289__$1 = state_22289;
var statearr_22346_23703 = state_22289__$1;
(statearr_22346_23703[(2)] = inst_22200);

(statearr_22346_23703[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (36))){
var inst_22243 = (state_22289[(23)]);
var inst_22250 = cljs.core.chunk_first(inst_22243);
var inst_22251 = cljs.core.chunk_rest(inst_22243);
var inst_22252 = cljs.core.count(inst_22250);
var inst_22225 = inst_22251;
var inst_22226 = inst_22250;
var inst_22227 = inst_22252;
var inst_22228 = (0);
var state_22289__$1 = (function (){var statearr_22348 = state_22289;
(statearr_22348[(19)] = inst_22227);

(statearr_22348[(10)] = inst_22228);

(statearr_22348[(20)] = inst_22225);

(statearr_22348[(12)] = inst_22226);

return statearr_22348;
})();
var statearr_22349_23704 = state_22289__$1;
(statearr_22349_23704[(2)] = null);

(statearr_22349_23704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (41))){
var inst_22243 = (state_22289[(23)]);
var inst_22261 = (state_22289[(2)]);
var inst_22262 = cljs.core.next(inst_22243);
var inst_22225 = inst_22262;
var inst_22226 = null;
var inst_22227 = (0);
var inst_22228 = (0);
var state_22289__$1 = (function (){var statearr_22350 = state_22289;
(statearr_22350[(25)] = inst_22261);

(statearr_22350[(19)] = inst_22227);

(statearr_22350[(10)] = inst_22228);

(statearr_22350[(20)] = inst_22225);

(statearr_22350[(12)] = inst_22226);

return statearr_22350;
})();
var statearr_22351_23705 = state_22289__$1;
(statearr_22351_23705[(2)] = null);

(statearr_22351_23705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (43))){
var state_22289__$1 = state_22289;
var statearr_22352_23706 = state_22289__$1;
(statearr_22352_23706[(2)] = null);

(statearr_22352_23706[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (29))){
var inst_22270 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22353_23707 = state_22289__$1;
(statearr_22353_23707[(2)] = inst_22270);

(statearr_22353_23707[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (44))){
var inst_22279 = (state_22289[(2)]);
var state_22289__$1 = (function (){var statearr_22358 = state_22289;
(statearr_22358[(26)] = inst_22279);

return statearr_22358;
})();
var statearr_22359_23708 = state_22289__$1;
(statearr_22359_23708[(2)] = null);

(statearr_22359_23708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (6))){
var inst_22217 = (state_22289[(27)]);
var inst_22216 = cljs.core.deref(cs);
var inst_22217__$1 = cljs.core.keys(inst_22216);
var inst_22218 = cljs.core.count(inst_22217__$1);
var inst_22219 = cljs.core.reset_BANG_(dctr,inst_22218);
var inst_22224 = cljs.core.seq(inst_22217__$1);
var inst_22225 = inst_22224;
var inst_22226 = null;
var inst_22227 = (0);
var inst_22228 = (0);
var state_22289__$1 = (function (){var statearr_22368 = state_22289;
(statearr_22368[(19)] = inst_22227);

(statearr_22368[(10)] = inst_22228);

(statearr_22368[(28)] = inst_22219);

(statearr_22368[(20)] = inst_22225);

(statearr_22368[(12)] = inst_22226);

(statearr_22368[(27)] = inst_22217__$1);

return statearr_22368;
})();
var statearr_22369_23709 = state_22289__$1;
(statearr_22369_23709[(2)] = null);

(statearr_22369_23709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (28))){
var inst_22225 = (state_22289[(20)]);
var inst_22243 = (state_22289[(23)]);
var inst_22243__$1 = cljs.core.seq(inst_22225);
var state_22289__$1 = (function (){var statearr_22370 = state_22289;
(statearr_22370[(23)] = inst_22243__$1);

return statearr_22370;
})();
if(inst_22243__$1){
var statearr_22371_23710 = state_22289__$1;
(statearr_22371_23710[(1)] = (33));

} else {
var statearr_22372_23711 = state_22289__$1;
(statearr_22372_23711[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (25))){
var inst_22227 = (state_22289[(19)]);
var inst_22228 = (state_22289[(10)]);
var inst_22230 = (inst_22228 < inst_22227);
var inst_22231 = inst_22230;
var state_22289__$1 = state_22289;
if(cljs.core.truth_(inst_22231)){
var statearr_22373_23713 = state_22289__$1;
(statearr_22373_23713[(1)] = (27));

} else {
var statearr_22374_23714 = state_22289__$1;
(statearr_22374_23714[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (34))){
var state_22289__$1 = state_22289;
var statearr_22375_23716 = state_22289__$1;
(statearr_22375_23716[(2)] = null);

(statearr_22375_23716[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (17))){
var state_22289__$1 = state_22289;
var statearr_22376_23717 = state_22289__$1;
(statearr_22376_23717[(2)] = null);

(statearr_22376_23717[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (3))){
var inst_22285 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22289__$1,inst_22285);
} else {
if((state_val_22290 === (12))){
var inst_22212 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22378_23718 = state_22289__$1;
(statearr_22378_23718[(2)] = inst_22212);

(statearr_22378_23718[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (2))){
var state_22289__$1 = state_22289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22289__$1,(4),ch);
} else {
if((state_val_22290 === (23))){
var state_22289__$1 = state_22289;
var statearr_22379_23719 = state_22289__$1;
(statearr_22379_23719[(2)] = null);

(statearr_22379_23719[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (35))){
var inst_22268 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22380_23720 = state_22289__$1;
(statearr_22380_23720[(2)] = inst_22268);

(statearr_22380_23720[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (19))){
var inst_22183 = (state_22289[(7)]);
var inst_22188 = cljs.core.chunk_first(inst_22183);
var inst_22189 = cljs.core.chunk_rest(inst_22183);
var inst_22190 = cljs.core.count(inst_22188);
var inst_22160 = inst_22189;
var inst_22161 = inst_22188;
var inst_22162 = inst_22190;
var inst_22163 = (0);
var state_22289__$1 = (function (){var statearr_22381 = state_22289;
(statearr_22381[(13)] = inst_22160);

(statearr_22381[(15)] = inst_22163);

(statearr_22381[(16)] = inst_22161);

(statearr_22381[(17)] = inst_22162);

return statearr_22381;
})();
var statearr_22382_23721 = state_22289__$1;
(statearr_22382_23721[(2)] = null);

(statearr_22382_23721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (11))){
var inst_22160 = (state_22289[(13)]);
var inst_22183 = (state_22289[(7)]);
var inst_22183__$1 = cljs.core.seq(inst_22160);
var state_22289__$1 = (function (){var statearr_22385 = state_22289;
(statearr_22385[(7)] = inst_22183__$1);

return statearr_22385;
})();
if(inst_22183__$1){
var statearr_22388_23722 = state_22289__$1;
(statearr_22388_23722[(1)] = (16));

} else {
var statearr_22389_23723 = state_22289__$1;
(statearr_22389_23723[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (9))){
var inst_22214 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22393_23724 = state_22289__$1;
(statearr_22393_23724[(2)] = inst_22214);

(statearr_22393_23724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (5))){
var inst_22158 = cljs.core.deref(cs);
var inst_22159 = cljs.core.seq(inst_22158);
var inst_22160 = inst_22159;
var inst_22161 = null;
var inst_22162 = (0);
var inst_22163 = (0);
var state_22289__$1 = (function (){var statearr_22395 = state_22289;
(statearr_22395[(13)] = inst_22160);

(statearr_22395[(15)] = inst_22163);

(statearr_22395[(16)] = inst_22161);

(statearr_22395[(17)] = inst_22162);

return statearr_22395;
})();
var statearr_22396_23725 = state_22289__$1;
(statearr_22396_23725[(2)] = null);

(statearr_22396_23725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (14))){
var state_22289__$1 = state_22289;
var statearr_22400_23726 = state_22289__$1;
(statearr_22400_23726[(2)] = null);

(statearr_22400_23726[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (45))){
var inst_22276 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22401_23727 = state_22289__$1;
(statearr_22401_23727[(2)] = inst_22276);

(statearr_22401_23727[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (26))){
var inst_22217 = (state_22289[(27)]);
var inst_22272 = (state_22289[(2)]);
var inst_22273 = cljs.core.seq(inst_22217);
var state_22289__$1 = (function (){var statearr_22405 = state_22289;
(statearr_22405[(29)] = inst_22272);

return statearr_22405;
})();
if(inst_22273){
var statearr_22406_23728 = state_22289__$1;
(statearr_22406_23728[(1)] = (42));

} else {
var statearr_22407_23729 = state_22289__$1;
(statearr_22407_23729[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (16))){
var inst_22183 = (state_22289[(7)]);
var inst_22185 = cljs.core.chunked_seq_QMARK_(inst_22183);
var state_22289__$1 = state_22289;
if(inst_22185){
var statearr_22409_23730 = state_22289__$1;
(statearr_22409_23730[(1)] = (19));

} else {
var statearr_22410_23731 = state_22289__$1;
(statearr_22410_23731[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (38))){
var inst_22265 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22411_23732 = state_22289__$1;
(statearr_22411_23732[(2)] = inst_22265);

(statearr_22411_23732[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (30))){
var state_22289__$1 = state_22289;
var statearr_22412_23733 = state_22289__$1;
(statearr_22412_23733[(2)] = null);

(statearr_22412_23733[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (10))){
var inst_22163 = (state_22289[(15)]);
var inst_22161 = (state_22289[(16)]);
var inst_22171 = cljs.core._nth(inst_22161,inst_22163);
var inst_22172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22171,(0),null);
var inst_22173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22171,(1),null);
var state_22289__$1 = (function (){var statearr_22415 = state_22289;
(statearr_22415[(24)] = inst_22172);

return statearr_22415;
})();
if(cljs.core.truth_(inst_22173)){
var statearr_22416_23734 = state_22289__$1;
(statearr_22416_23734[(1)] = (13));

} else {
var statearr_22417_23735 = state_22289__$1;
(statearr_22417_23735[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (18))){
var inst_22210 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22418_23736 = state_22289__$1;
(statearr_22418_23736[(2)] = inst_22210);

(statearr_22418_23736[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (42))){
var state_22289__$1 = state_22289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22289__$1,(45),dchan);
} else {
if((state_val_22290 === (37))){
var inst_22151 = (state_22289[(9)]);
var inst_22255 = (state_22289[(22)]);
var inst_22243 = (state_22289[(23)]);
var inst_22255__$1 = cljs.core.first(inst_22243);
var inst_22256 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22255__$1,inst_22151,done);
var state_22289__$1 = (function (){var statearr_22421 = state_22289;
(statearr_22421[(22)] = inst_22255__$1);

return statearr_22421;
})();
if(cljs.core.truth_(inst_22256)){
var statearr_22422_23737 = state_22289__$1;
(statearr_22422_23737[(1)] = (39));

} else {
var statearr_22423_23738 = state_22289__$1;
(statearr_22423_23738[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (8))){
var inst_22163 = (state_22289[(15)]);
var inst_22162 = (state_22289[(17)]);
var inst_22165 = (inst_22163 < inst_22162);
var inst_22166 = inst_22165;
var state_22289__$1 = state_22289;
if(cljs.core.truth_(inst_22166)){
var statearr_22426_23740 = state_22289__$1;
(statearr_22426_23740[(1)] = (10));

} else {
var statearr_22427_23741 = state_22289__$1;
(statearr_22427_23741[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
return (function() {
var cljs$core$async$mult_$_state_machine__21179__auto__ = null;
var cljs$core$async$mult_$_state_machine__21179__auto____0 = (function (){
var statearr_22432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22432[(0)] = cljs$core$async$mult_$_state_machine__21179__auto__);

(statearr_22432[(1)] = (1));

return statearr_22432;
});
var cljs$core$async$mult_$_state_machine__21179__auto____1 = (function (state_22289){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_22289);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e22436){var ex__21182__auto__ = e22436;
var statearr_22437_23743 = state_22289;
(statearr_22437_23743[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_22289[(4)]))){
var statearr_22438_23744 = state_22289;
(statearr_22438_23744[(1)] = cljs.core.first((state_22289[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23745 = state_22289;
state_22289 = G__23745;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21179__auto__ = function(state_22289){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21179__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21179__auto____1.call(this,state_22289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21179__auto____0;
cljs$core$async$mult_$_state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21179__auto____1;
return cljs$core$async$mult_$_state_machine__21179__auto__;
})()
})();
var state__21309__auto__ = (function (){var statearr_22440 = f__21308__auto__();
(statearr_22440[(6)] = c__21307__auto___23682);

return statearr_22440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__22445 = arguments.length;
switch (G__22445) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_23747 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_23747(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_23748 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_23748(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_23749 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_23749(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_23750 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_23750(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_23751 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_23751(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23752 = arguments.length;
var i__5770__auto___23753 = (0);
while(true){
if((i__5770__auto___23753 < len__5769__auto___23752)){
args__5775__auto__.push((arguments[i__5770__auto___23753]));

var G__23754 = (i__5770__auto___23753 + (1));
i__5770__auto___23753 = G__23754;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22458){
var map__22459 = p__22458;
var map__22459__$1 = cljs.core.__destructure_map(map__22459);
var opts = map__22459__$1;
var statearr_22460_23755 = state;
(statearr_22460_23755[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_22461_23756 = state;
(statearr_22461_23756[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_22462_23757 = state;
(statearr_22462_23757[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22454){
var G__22455 = cljs.core.first(seq22454);
var seq22454__$1 = cljs.core.next(seq22454);
var G__22456 = cljs.core.first(seq22454__$1);
var seq22454__$2 = cljs.core.next(seq22454__$1);
var G__22457 = cljs.core.first(seq22454__$2);
var seq22454__$3 = cljs.core.next(seq22454__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22455,G__22456,G__22457,seq22454__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22465 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22466){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22466 = meta22466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22467,meta22466__$1){
var self__ = this;
var _22467__$1 = this;
return (new cljs.core.async.t_cljs$core$async22465(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22466__$1));
}));

(cljs.core.async.t_cljs$core$async22465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22467){
var self__ = this;
var _22467__$1 = this;
return self__.meta22466;
}));

(cljs.core.async.t_cljs$core$async22465.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22465.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async22465.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22465.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async22465.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async22465.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async22465.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async22465.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async22465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22466","meta22466",495880347,null)], null);
}));

(cljs.core.async.t_cljs$core$async22465.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22465");

(cljs.core.async.t_cljs$core$async22465.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async22465");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22465.
 */
cljs.core.async.__GT_t_cljs$core$async22465 = (function cljs$core$async$__GT_t_cljs$core$async22465(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22466){
return (new cljs.core.async.t_cljs$core$async22465(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22466));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async22465(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__21307__auto___23760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = (function (state_22546){
var state_val_22547 = (state_22546[(1)]);
if((state_val_22547 === (7))){
var inst_22504 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
if(cljs.core.truth_(inst_22504)){
var statearr_22548_23761 = state_22546__$1;
(statearr_22548_23761[(1)] = (8));

} else {
var statearr_22550_23762 = state_22546__$1;
(statearr_22550_23762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (20))){
var inst_22496 = (state_22546[(7)]);
var state_22546__$1 = state_22546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22546__$1,(23),out,inst_22496);
} else {
if((state_val_22547 === (1))){
var inst_22478 = calc_state();
var inst_22479 = cljs.core.__destructure_map(inst_22478);
var inst_22480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22479,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22479,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22479,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22483 = inst_22478;
var state_22546__$1 = (function (){var statearr_22552 = state_22546;
(statearr_22552[(8)] = inst_22481);

(statearr_22552[(9)] = inst_22480);

(statearr_22552[(10)] = inst_22482);

(statearr_22552[(11)] = inst_22483);

return statearr_22552;
})();
var statearr_22556_23763 = state_22546__$1;
(statearr_22556_23763[(2)] = null);

(statearr_22556_23763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (24))){
var inst_22486 = (state_22546[(12)]);
var inst_22483 = inst_22486;
var state_22546__$1 = (function (){var statearr_22558 = state_22546;
(statearr_22558[(11)] = inst_22483);

return statearr_22558;
})();
var statearr_22559_23764 = state_22546__$1;
(statearr_22559_23764[(2)] = null);

(statearr_22559_23764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (4))){
var inst_22499 = (state_22546[(13)]);
var inst_22496 = (state_22546[(7)]);
var inst_22495 = (state_22546[(2)]);
var inst_22496__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22495,(0),null);
var inst_22497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22495,(1),null);
var inst_22499__$1 = (inst_22496__$1 == null);
var state_22546__$1 = (function (){var statearr_22566 = state_22546;
(statearr_22566[(13)] = inst_22499__$1);

(statearr_22566[(7)] = inst_22496__$1);

(statearr_22566[(14)] = inst_22497);

return statearr_22566;
})();
if(cljs.core.truth_(inst_22499__$1)){
var statearr_22567_23765 = state_22546__$1;
(statearr_22567_23765[(1)] = (5));

} else {
var statearr_22568_23766 = state_22546__$1;
(statearr_22568_23766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (15))){
var inst_22519 = (state_22546[(15)]);
var inst_22487 = (state_22546[(16)]);
var inst_22519__$1 = cljs.core.empty_QMARK_(inst_22487);
var state_22546__$1 = (function (){var statearr_22572 = state_22546;
(statearr_22572[(15)] = inst_22519__$1);

return statearr_22572;
})();
if(inst_22519__$1){
var statearr_22575_23767 = state_22546__$1;
(statearr_22575_23767[(1)] = (17));

} else {
var statearr_22577_23768 = state_22546__$1;
(statearr_22577_23768[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (21))){
var inst_22486 = (state_22546[(12)]);
var inst_22483 = inst_22486;
var state_22546__$1 = (function (){var statearr_22578 = state_22546;
(statearr_22578[(11)] = inst_22483);

return statearr_22578;
})();
var statearr_22579_23769 = state_22546__$1;
(statearr_22579_23769[(2)] = null);

(statearr_22579_23769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (13))){
var inst_22511 = (state_22546[(2)]);
var inst_22512 = calc_state();
var inst_22483 = inst_22512;
var state_22546__$1 = (function (){var statearr_22583 = state_22546;
(statearr_22583[(17)] = inst_22511);

(statearr_22583[(11)] = inst_22483);

return statearr_22583;
})();
var statearr_22586_23770 = state_22546__$1;
(statearr_22586_23770[(2)] = null);

(statearr_22586_23770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (22))){
var inst_22540 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
var statearr_22588_23771 = state_22546__$1;
(statearr_22588_23771[(2)] = inst_22540);

(statearr_22588_23771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (6))){
var inst_22497 = (state_22546[(14)]);
var inst_22502 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22497,change);
var state_22546__$1 = state_22546;
var statearr_22590_23772 = state_22546__$1;
(statearr_22590_23772[(2)] = inst_22502);

(statearr_22590_23772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (25))){
var state_22546__$1 = state_22546;
var statearr_22595_23773 = state_22546__$1;
(statearr_22595_23773[(2)] = null);

(statearr_22595_23773[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (17))){
var inst_22489 = (state_22546[(18)]);
var inst_22497 = (state_22546[(14)]);
var inst_22521 = (inst_22489.cljs$core$IFn$_invoke$arity$1 ? inst_22489.cljs$core$IFn$_invoke$arity$1(inst_22497) : inst_22489.call(null,inst_22497));
var inst_22522 = cljs.core.not(inst_22521);
var state_22546__$1 = state_22546;
var statearr_22597_23774 = state_22546__$1;
(statearr_22597_23774[(2)] = inst_22522);

(statearr_22597_23774[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (3))){
var inst_22544 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22546__$1,inst_22544);
} else {
if((state_val_22547 === (12))){
var state_22546__$1 = state_22546;
var statearr_22602_23775 = state_22546__$1;
(statearr_22602_23775[(2)] = null);

(statearr_22602_23775[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (2))){
var inst_22483 = (state_22546[(11)]);
var inst_22486 = (state_22546[(12)]);
var inst_22486__$1 = cljs.core.__destructure_map(inst_22483);
var inst_22487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22486__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22486__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22486__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22546__$1 = (function (){var statearr_22603 = state_22546;
(statearr_22603[(18)] = inst_22489);

(statearr_22603[(12)] = inst_22486__$1);

(statearr_22603[(16)] = inst_22487);

return statearr_22603;
})();
return cljs.core.async.ioc_alts_BANG_(state_22546__$1,(4),inst_22490);
} else {
if((state_val_22547 === (23))){
var inst_22530 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
if(cljs.core.truth_(inst_22530)){
var statearr_22604_23776 = state_22546__$1;
(statearr_22604_23776[(1)] = (24));

} else {
var statearr_22605_23777 = state_22546__$1;
(statearr_22605_23777[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (19))){
var inst_22525 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
var statearr_22606_23778 = state_22546__$1;
(statearr_22606_23778[(2)] = inst_22525);

(statearr_22606_23778[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (11))){
var inst_22497 = (state_22546[(14)]);
var inst_22508 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_22497);
var state_22546__$1 = state_22546;
var statearr_22615_23779 = state_22546__$1;
(statearr_22615_23779[(2)] = inst_22508);

(statearr_22615_23779[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (9))){
var inst_22497 = (state_22546[(14)]);
var inst_22515 = (state_22546[(19)]);
var inst_22487 = (state_22546[(16)]);
var inst_22515__$1 = (inst_22487.cljs$core$IFn$_invoke$arity$1 ? inst_22487.cljs$core$IFn$_invoke$arity$1(inst_22497) : inst_22487.call(null,inst_22497));
var state_22546__$1 = (function (){var statearr_22625 = state_22546;
(statearr_22625[(19)] = inst_22515__$1);

return statearr_22625;
})();
if(cljs.core.truth_(inst_22515__$1)){
var statearr_22626_23780 = state_22546__$1;
(statearr_22626_23780[(1)] = (14));

} else {
var statearr_22635_23781 = state_22546__$1;
(statearr_22635_23781[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (5))){
var inst_22499 = (state_22546[(13)]);
var state_22546__$1 = state_22546;
var statearr_22636_23783 = state_22546__$1;
(statearr_22636_23783[(2)] = inst_22499);

(statearr_22636_23783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (14))){
var inst_22515 = (state_22546[(19)]);
var state_22546__$1 = state_22546;
var statearr_22637_23784 = state_22546__$1;
(statearr_22637_23784[(2)] = inst_22515);

(statearr_22637_23784[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (26))){
var inst_22535 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
var statearr_22638_23785 = state_22546__$1;
(statearr_22638_23785[(2)] = inst_22535);

(statearr_22638_23785[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (16))){
var inst_22527 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
if(cljs.core.truth_(inst_22527)){
var statearr_22639_23786 = state_22546__$1;
(statearr_22639_23786[(1)] = (20));

} else {
var statearr_22640_23787 = state_22546__$1;
(statearr_22640_23787[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (10))){
var inst_22542 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
var statearr_22641_23788 = state_22546__$1;
(statearr_22641_23788[(2)] = inst_22542);

(statearr_22641_23788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (18))){
var inst_22519 = (state_22546[(15)]);
var state_22546__$1 = state_22546;
var statearr_22642_23789 = state_22546__$1;
(statearr_22642_23789[(2)] = inst_22519);

(statearr_22642_23789[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (8))){
var inst_22496 = (state_22546[(7)]);
var inst_22506 = (inst_22496 == null);
var state_22546__$1 = state_22546;
if(cljs.core.truth_(inst_22506)){
var statearr_22643_23790 = state_22546__$1;
(statearr_22643_23790[(1)] = (11));

} else {
var statearr_22644_23791 = state_22546__$1;
(statearr_22644_23791[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__21179__auto__ = null;
var cljs$core$async$mix_$_state_machine__21179__auto____0 = (function (){
var statearr_22645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22645[(0)] = cljs$core$async$mix_$_state_machine__21179__auto__);

(statearr_22645[(1)] = (1));

return statearr_22645;
});
var cljs$core$async$mix_$_state_machine__21179__auto____1 = (function (state_22546){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_22546);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e22649){var ex__21182__auto__ = e22649;
var statearr_22650_23792 = state_22546;
(statearr_22650_23792[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_22546[(4)]))){
var statearr_22651_23793 = state_22546;
(statearr_22651_23793[(1)] = cljs.core.first((state_22546[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23795 = state_22546;
state_22546 = G__23795;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21179__auto__ = function(state_22546){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21179__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21179__auto____1.call(this,state_22546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21179__auto____0;
cljs$core$async$mix_$_state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21179__auto____1;
return cljs$core$async$mix_$_state_machine__21179__auto__;
})()
})();
var state__21309__auto__ = (function (){var statearr_22652 = f__21308__auto__();
(statearr_22652[(6)] = c__21307__auto___23760);

return statearr_22652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_23796 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_23796(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_23797 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_23797(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_23798 = (function() {
var G__23799 = null;
var G__23799__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__23799__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__23799 = function(p,v){
switch(arguments.length){
case 1:
return G__23799__1.call(this,p);
case 2:
return G__23799__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23799.cljs$core$IFn$_invoke$arity$1 = G__23799__1;
G__23799.cljs$core$IFn$_invoke$arity$2 = G__23799__2;
return G__23799;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__22659 = arguments.length;
switch (G__22659) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_23798(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_23798(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22681 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22682){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22682 = meta22682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22683,meta22682__$1){
var self__ = this;
var _22683__$1 = this;
return (new cljs.core.async.t_cljs$core$async22681(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22682__$1));
}));

(cljs.core.async.t_cljs$core$async22681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22683){
var self__ = this;
var _22683__$1 = this;
return self__.meta22682;
}));

(cljs.core.async.t_cljs$core$async22681.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22681.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async22681.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22681.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async22681.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async22681.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async22681.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async22681.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22682","meta22682",-768602461,null)], null);
}));

(cljs.core.async.t_cljs$core$async22681.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22681");

(cljs.core.async.t_cljs$core$async22681.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async22681");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22681.
 */
cljs.core.async.__GT_t_cljs$core$async22681 = (function cljs$core$async$__GT_t_cljs$core$async22681(ch,topic_fn,buf_fn,mults,ensure_mult,meta22682){
return (new cljs.core.async.t_cljs$core$async22681(ch,topic_fn,buf_fn,mults,ensure_mult,meta22682));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__22674 = arguments.length;
switch (G__22674) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__22669_SHARP_){
if(cljs.core.truth_((p1__22669_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22669_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__22669_SHARP_.call(null,topic)))){
return p1__22669_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22669_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async22681(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__21307__auto___23803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = (function (state_22778){
var state_val_22779 = (state_22778[(1)]);
if((state_val_22779 === (7))){
var inst_22774 = (state_22778[(2)]);
var state_22778__$1 = state_22778;
var statearr_22780_23804 = state_22778__$1;
(statearr_22780_23804[(2)] = inst_22774);

(statearr_22780_23804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (20))){
var state_22778__$1 = state_22778;
var statearr_22781_23805 = state_22778__$1;
(statearr_22781_23805[(2)] = null);

(statearr_22781_23805[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (1))){
var state_22778__$1 = state_22778;
var statearr_22782_23806 = state_22778__$1;
(statearr_22782_23806[(2)] = null);

(statearr_22782_23806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (24))){
var inst_22757 = (state_22778[(7)]);
var inst_22766 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_22757);
var state_22778__$1 = state_22778;
var statearr_22783_23807 = state_22778__$1;
(statearr_22783_23807[(2)] = inst_22766);

(statearr_22783_23807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (4))){
var inst_22703 = (state_22778[(8)]);
var inst_22703__$1 = (state_22778[(2)]);
var inst_22707 = (inst_22703__$1 == null);
var state_22778__$1 = (function (){var statearr_22784 = state_22778;
(statearr_22784[(8)] = inst_22703__$1);

return statearr_22784;
})();
if(cljs.core.truth_(inst_22707)){
var statearr_22785_23808 = state_22778__$1;
(statearr_22785_23808[(1)] = (5));

} else {
var statearr_22786_23809 = state_22778__$1;
(statearr_22786_23809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (15))){
var inst_22751 = (state_22778[(2)]);
var state_22778__$1 = state_22778;
var statearr_22787_23810 = state_22778__$1;
(statearr_22787_23810[(2)] = inst_22751);

(statearr_22787_23810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (21))){
var inst_22771 = (state_22778[(2)]);
var state_22778__$1 = (function (){var statearr_22788 = state_22778;
(statearr_22788[(9)] = inst_22771);

return statearr_22788;
})();
var statearr_22789_23811 = state_22778__$1;
(statearr_22789_23811[(2)] = null);

(statearr_22789_23811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (13))){
var inst_22733 = (state_22778[(10)]);
var inst_22735 = cljs.core.chunked_seq_QMARK_(inst_22733);
var state_22778__$1 = state_22778;
if(inst_22735){
var statearr_22790_23812 = state_22778__$1;
(statearr_22790_23812[(1)] = (16));

} else {
var statearr_22791_23813 = state_22778__$1;
(statearr_22791_23813[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (22))){
var inst_22763 = (state_22778[(2)]);
var state_22778__$1 = state_22778;
if(cljs.core.truth_(inst_22763)){
var statearr_22792_23814 = state_22778__$1;
(statearr_22792_23814[(1)] = (23));

} else {
var statearr_22793_23815 = state_22778__$1;
(statearr_22793_23815[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (6))){
var inst_22703 = (state_22778[(8)]);
var inst_22759 = (state_22778[(11)]);
var inst_22757 = (state_22778[(7)]);
var inst_22757__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_22703) : topic_fn.call(null,inst_22703));
var inst_22758 = cljs.core.deref(mults);
var inst_22759__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22758,inst_22757__$1);
var state_22778__$1 = (function (){var statearr_22794 = state_22778;
(statearr_22794[(11)] = inst_22759__$1);

(statearr_22794[(7)] = inst_22757__$1);

return statearr_22794;
})();
if(cljs.core.truth_(inst_22759__$1)){
var statearr_22795_23816 = state_22778__$1;
(statearr_22795_23816[(1)] = (19));

} else {
var statearr_22796_23817 = state_22778__$1;
(statearr_22796_23817[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (25))){
var inst_22768 = (state_22778[(2)]);
var state_22778__$1 = state_22778;
var statearr_22797_23818 = state_22778__$1;
(statearr_22797_23818[(2)] = inst_22768);

(statearr_22797_23818[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (17))){
var inst_22733 = (state_22778[(10)]);
var inst_22742 = cljs.core.first(inst_22733);
var inst_22743 = cljs.core.async.muxch_STAR_(inst_22742);
var inst_22744 = cljs.core.async.close_BANG_(inst_22743);
var inst_22745 = cljs.core.next(inst_22733);
var inst_22716 = inst_22745;
var inst_22717 = null;
var inst_22718 = (0);
var inst_22719 = (0);
var state_22778__$1 = (function (){var statearr_22798 = state_22778;
(statearr_22798[(12)] = inst_22744);

(statearr_22798[(13)] = inst_22718);

(statearr_22798[(14)] = inst_22717);

(statearr_22798[(15)] = inst_22716);

(statearr_22798[(16)] = inst_22719);

return statearr_22798;
})();
var statearr_22799_23819 = state_22778__$1;
(statearr_22799_23819[(2)] = null);

(statearr_22799_23819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (3))){
var inst_22776 = (state_22778[(2)]);
var state_22778__$1 = state_22778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22778__$1,inst_22776);
} else {
if((state_val_22779 === (12))){
var inst_22753 = (state_22778[(2)]);
var state_22778__$1 = state_22778;
var statearr_22800_23820 = state_22778__$1;
(statearr_22800_23820[(2)] = inst_22753);

(statearr_22800_23820[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (2))){
var state_22778__$1 = state_22778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22778__$1,(4),ch);
} else {
if((state_val_22779 === (23))){
var state_22778__$1 = state_22778;
var statearr_22801_23821 = state_22778__$1;
(statearr_22801_23821[(2)] = null);

(statearr_22801_23821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (19))){
var inst_22703 = (state_22778[(8)]);
var inst_22759 = (state_22778[(11)]);
var inst_22761 = cljs.core.async.muxch_STAR_(inst_22759);
var state_22778__$1 = state_22778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22778__$1,(22),inst_22761,inst_22703);
} else {
if((state_val_22779 === (11))){
var inst_22716 = (state_22778[(15)]);
var inst_22733 = (state_22778[(10)]);
var inst_22733__$1 = cljs.core.seq(inst_22716);
var state_22778__$1 = (function (){var statearr_22802 = state_22778;
(statearr_22802[(10)] = inst_22733__$1);

return statearr_22802;
})();
if(inst_22733__$1){
var statearr_22803_23822 = state_22778__$1;
(statearr_22803_23822[(1)] = (13));

} else {
var statearr_22804_23823 = state_22778__$1;
(statearr_22804_23823[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (9))){
var inst_22755 = (state_22778[(2)]);
var state_22778__$1 = state_22778;
var statearr_22805_23824 = state_22778__$1;
(statearr_22805_23824[(2)] = inst_22755);

(statearr_22805_23824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (5))){
var inst_22713 = cljs.core.deref(mults);
var inst_22714 = cljs.core.vals(inst_22713);
var inst_22715 = cljs.core.seq(inst_22714);
var inst_22716 = inst_22715;
var inst_22717 = null;
var inst_22718 = (0);
var inst_22719 = (0);
var state_22778__$1 = (function (){var statearr_22806 = state_22778;
(statearr_22806[(13)] = inst_22718);

(statearr_22806[(14)] = inst_22717);

(statearr_22806[(15)] = inst_22716);

(statearr_22806[(16)] = inst_22719);

return statearr_22806;
})();
var statearr_22807_23825 = state_22778__$1;
(statearr_22807_23825[(2)] = null);

(statearr_22807_23825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (14))){
var state_22778__$1 = state_22778;
var statearr_22811_23826 = state_22778__$1;
(statearr_22811_23826[(2)] = null);

(statearr_22811_23826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (16))){
var inst_22733 = (state_22778[(10)]);
var inst_22737 = cljs.core.chunk_first(inst_22733);
var inst_22738 = cljs.core.chunk_rest(inst_22733);
var inst_22739 = cljs.core.count(inst_22737);
var inst_22716 = inst_22738;
var inst_22717 = inst_22737;
var inst_22718 = inst_22739;
var inst_22719 = (0);
var state_22778__$1 = (function (){var statearr_22812 = state_22778;
(statearr_22812[(13)] = inst_22718);

(statearr_22812[(14)] = inst_22717);

(statearr_22812[(15)] = inst_22716);

(statearr_22812[(16)] = inst_22719);

return statearr_22812;
})();
var statearr_22813_23827 = state_22778__$1;
(statearr_22813_23827[(2)] = null);

(statearr_22813_23827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (10))){
var inst_22718 = (state_22778[(13)]);
var inst_22717 = (state_22778[(14)]);
var inst_22716 = (state_22778[(15)]);
var inst_22719 = (state_22778[(16)]);
var inst_22727 = cljs.core._nth(inst_22717,inst_22719);
var inst_22728 = cljs.core.async.muxch_STAR_(inst_22727);
var inst_22729 = cljs.core.async.close_BANG_(inst_22728);
var inst_22730 = (inst_22719 + (1));
var tmp22808 = inst_22718;
var tmp22809 = inst_22717;
var tmp22810 = inst_22716;
var inst_22716__$1 = tmp22810;
var inst_22717__$1 = tmp22809;
var inst_22718__$1 = tmp22808;
var inst_22719__$1 = inst_22730;
var state_22778__$1 = (function (){var statearr_22814 = state_22778;
(statearr_22814[(13)] = inst_22718__$1);

(statearr_22814[(14)] = inst_22717__$1);

(statearr_22814[(15)] = inst_22716__$1);

(statearr_22814[(17)] = inst_22729);

(statearr_22814[(16)] = inst_22719__$1);

return statearr_22814;
})();
var statearr_22815_23832 = state_22778__$1;
(statearr_22815_23832[(2)] = null);

(statearr_22815_23832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (18))){
var inst_22748 = (state_22778[(2)]);
var state_22778__$1 = state_22778;
var statearr_22819_23833 = state_22778__$1;
(statearr_22819_23833[(2)] = inst_22748);

(statearr_22819_23833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22779 === (8))){
var inst_22718 = (state_22778[(13)]);
var inst_22719 = (state_22778[(16)]);
var inst_22724 = (inst_22719 < inst_22718);
var inst_22725 = inst_22724;
var state_22778__$1 = state_22778;
if(cljs.core.truth_(inst_22725)){
var statearr_22820_23834 = state_22778__$1;
(statearr_22820_23834[(1)] = (10));

} else {
var statearr_22821_23835 = state_22778__$1;
(statearr_22821_23835[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});
return (function() {
var cljs$core$async$state_machine__21179__auto__ = null;
var cljs$core$async$state_machine__21179__auto____0 = (function (){
var statearr_22822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22822[(0)] = cljs$core$async$state_machine__21179__auto__);

(statearr_22822[(1)] = (1));

return statearr_22822;
});
var cljs$core$async$state_machine__21179__auto____1 = (function (state_22778){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_22778);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e22824){var ex__21182__auto__ = e22824;
var statearr_22825_23836 = state_22778;
(statearr_22825_23836[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_22778[(4)]))){
var statearr_22826_23837 = state_22778;
(statearr_22826_23837[(1)] = cljs.core.first((state_22778[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23838 = state_22778;
state_22778 = G__23838;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
cljs$core$async$state_machine__21179__auto__ = function(state_22778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21179__auto____1.call(this,state_22778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21179__auto____0;
cljs$core$async$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21179__auto____1;
return cljs$core$async$state_machine__21179__auto__;
})()
})();
var state__21309__auto__ = (function (){var statearr_22827 = f__21308__auto__();
(statearr_22827[(6)] = c__21307__auto___23803);

return statearr_22827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__22830 = arguments.length;
switch (G__22830) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__22834 = arguments.length;
switch (G__22834) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__22839 = arguments.length;
switch (G__22839) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__21307__auto___23842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = (function (state_22887){
var state_val_22888 = (state_22887[(1)]);
if((state_val_22888 === (7))){
var state_22887__$1 = state_22887;
var statearr_22891_23843 = state_22887__$1;
(statearr_22891_23843[(2)] = null);

(statearr_22891_23843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22888 === (1))){
var state_22887__$1 = state_22887;
var statearr_22895_23844 = state_22887__$1;
(statearr_22895_23844[(2)] = null);

(statearr_22895_23844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22888 === (4))){
var inst_22845 = (state_22887[(7)]);
var inst_22844 = (state_22887[(8)]);
var inst_22847 = (inst_22845 < inst_22844);
var state_22887__$1 = state_22887;
if(cljs.core.truth_(inst_22847)){
var statearr_22897_23845 = state_22887__$1;
(statearr_22897_23845[(1)] = (6));

} else {
var statearr_22899_23846 = state_22887__$1;
(statearr_22899_23846[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22888 === (15))){
var inst_22870 = (state_22887[(9)]);
var inst_22875 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_22870);
var state_22887__$1 = state_22887;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22887__$1,(17),out,inst_22875);
} else {
if((state_val_22888 === (13))){
var inst_22870 = (state_22887[(9)]);
var inst_22870__$1 = (state_22887[(2)]);
var inst_22871 = cljs.core.some(cljs.core.nil_QMARK_,inst_22870__$1);
var state_22887__$1 = (function (){var statearr_22901 = state_22887;
(statearr_22901[(9)] = inst_22870__$1);

return statearr_22901;
})();
if(cljs.core.truth_(inst_22871)){
var statearr_22902_23847 = state_22887__$1;
(statearr_22902_23847[(1)] = (14));

} else {
var statearr_22903_23848 = state_22887__$1;
(statearr_22903_23848[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22888 === (6))){
var state_22887__$1 = state_22887;
var statearr_22907_23849 = state_22887__$1;
(statearr_22907_23849[(2)] = null);

(statearr_22907_23849[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22888 === (17))){
var inst_22877 = (state_22887[(2)]);
var state_22887__$1 = (function (){var statearr_22939 = state_22887;
(statearr_22939[(10)] = inst_22877);

return statearr_22939;
})();
var statearr_22945_23850 = state_22887__$1;
(statearr_22945_23850[(2)] = null);

(statearr_22945_23850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22888 === (3))){
var inst_22882 = (state_22887[(2)]);
var state_22887__$1 = state_22887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22887__$1,inst_22882);
} else {
if((state_val_22888 === (12))){
var _ = (function (){var statearr_22958 = state_22887;
(statearr_22958[(4)] = cljs.core.rest((state_22887[(4)])));

return statearr_22958;
})();
var state_22887__$1 = state_22887;
var ex22933 = (state_22887__$1[(2)]);
var statearr_22959_23851 = state_22887__$1;
(statearr_22959_23851[(5)] = ex22933);


if((ex22933 instanceof Object)){
var statearr_22963_23852 = state_22887__$1;
(statearr_22963_23852[(1)] = (11));

(statearr_22963_23852[(5)] = null);

} else {
throw ex22933;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22888 === (2))){
var inst_22843 = cljs.core.reset_BANG_(dctr,cnt);
var inst_22844 = cnt;
var inst_22845 = (0);
var state_22887__$1 = (function (){var statearr_22966 = state_22887;
(statearr_22966[(11)] = inst_22843);

(statearr_22966[(7)] = inst_22845);

(statearr_22966[(8)] = inst_22844);

return statearr_22966;
})();
var statearr_22968_23853 = state_22887__$1;
(statearr_22968_23853[(2)] = null);

(statearr_22968_23853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22888 === (11))){
var inst_22849 = (state_22887[(2)]);
var inst_22850 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_22887__$1 = (function (){var statearr_22973 = state_22887;
(statearr_22973[(12)] = inst_22849);

return statearr_22973;
})();
var statearr_22975_23854 = state_22887__$1;
(statearr_22975_23854[(2)] = inst_22850);

(statearr_22975_23854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22888 === (9))){
var inst_22845 = (state_22887[(7)]);
var _ = (function (){var statearr_22977 = state_22887;
(statearr_22977[(4)] = cljs.core.cons((12),(state_22887[(4)])));

return statearr_22977;
})();
var inst_22856 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_22845) : chs__$1.call(null,inst_22845));
var inst_22857 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_22845) : done.call(null,inst_22845));
var inst_22858 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_22856,inst_22857);
var ___$1 = (function (){var statearr_22979 = state_22887;
(statearr_22979[(4)] = cljs.core.rest((state_22887[(4)])));

return statearr_22979;
})();
var state_22887__$1 = state_22887;
var statearr_22980_23855 = state_22887__$1;
(statearr_22980_23855[(2)] = inst_22858);

(statearr_22980_23855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22888 === (5))){
var inst_22868 = (state_22887[(2)]);
var state_22887__$1 = (function (){var statearr_22981 = state_22887;
(statearr_22981[(13)] = inst_22868);

return statearr_22981;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22887__$1,(13),dchan);
} else {
if((state_val_22888 === (14))){
var inst_22873 = cljs.core.async.close_BANG_(out);
var state_22887__$1 = state_22887;
var statearr_22986_23856 = state_22887__$1;
(statearr_22986_23856[(2)] = inst_22873);

(statearr_22986_23856[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22888 === (16))){
var inst_22880 = (state_22887[(2)]);
var state_22887__$1 = state_22887;
var statearr_22987_23857 = state_22887__$1;
(statearr_22987_23857[(2)] = inst_22880);

(statearr_22987_23857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22888 === (10))){
var inst_22845 = (state_22887[(7)]);
var inst_22861 = (state_22887[(2)]);
var inst_22862 = (inst_22845 + (1));
var inst_22845__$1 = inst_22862;
var state_22887__$1 = (function (){var statearr_22990 = state_22887;
(statearr_22990[(7)] = inst_22845__$1);

(statearr_22990[(14)] = inst_22861);

return statearr_22990;
})();
var statearr_22992_23858 = state_22887__$1;
(statearr_22992_23858[(2)] = null);

(statearr_22992_23858[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22888 === (8))){
var inst_22866 = (state_22887[(2)]);
var state_22887__$1 = state_22887;
var statearr_22993_23859 = state_22887__$1;
(statearr_22993_23859[(2)] = inst_22866);

(statearr_22993_23859[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21179__auto__ = null;
var cljs$core$async$state_machine__21179__auto____0 = (function (){
var statearr_22996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22996[(0)] = cljs$core$async$state_machine__21179__auto__);

(statearr_22996[(1)] = (1));

return statearr_22996;
});
var cljs$core$async$state_machine__21179__auto____1 = (function (state_22887){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_22887);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e22997){var ex__21182__auto__ = e22997;
var statearr_22998_23861 = state_22887;
(statearr_22998_23861[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_22887[(4)]))){
var statearr_23000_23862 = state_22887;
(statearr_23000_23862[(1)] = cljs.core.first((state_22887[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23863 = state_22887;
state_22887 = G__23863;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
cljs$core$async$state_machine__21179__auto__ = function(state_22887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21179__auto____1.call(this,state_22887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21179__auto____0;
cljs$core$async$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21179__auto____1;
return cljs$core$async$state_machine__21179__auto__;
})()
})();
var state__21309__auto__ = (function (){var statearr_23001 = f__21308__auto__();
(statearr_23001[(6)] = c__21307__auto___23842);

return statearr_23001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__23005 = arguments.length;
switch (G__23005) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21307__auto___23865 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = (function (state_23049){
var state_val_23050 = (state_23049[(1)]);
if((state_val_23050 === (7))){
var inst_23027 = (state_23049[(7)]);
var inst_23026 = (state_23049[(8)]);
var inst_23026__$1 = (state_23049[(2)]);
var inst_23027__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23026__$1,(0),null);
var inst_23028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23026__$1,(1),null);
var inst_23030 = (inst_23027__$1 == null);
var state_23049__$1 = (function (){var statearr_23051 = state_23049;
(statearr_23051[(7)] = inst_23027__$1);

(statearr_23051[(8)] = inst_23026__$1);

(statearr_23051[(9)] = inst_23028);

return statearr_23051;
})();
if(cljs.core.truth_(inst_23030)){
var statearr_23052_23866 = state_23049__$1;
(statearr_23052_23866[(1)] = (8));

} else {
var statearr_23053_23867 = state_23049__$1;
(statearr_23053_23867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23050 === (1))){
var inst_23006 = cljs.core.vec(chs);
var inst_23007 = inst_23006;
var state_23049__$1 = (function (){var statearr_23054 = state_23049;
(statearr_23054[(10)] = inst_23007);

return statearr_23054;
})();
var statearr_23055_23868 = state_23049__$1;
(statearr_23055_23868[(2)] = null);

(statearr_23055_23868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23050 === (4))){
var inst_23007 = (state_23049[(10)]);
var state_23049__$1 = state_23049;
return cljs.core.async.ioc_alts_BANG_(state_23049__$1,(7),inst_23007);
} else {
if((state_val_23050 === (6))){
var inst_23045 = (state_23049[(2)]);
var state_23049__$1 = state_23049;
var statearr_23056_23869 = state_23049__$1;
(statearr_23056_23869[(2)] = inst_23045);

(statearr_23056_23869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23050 === (3))){
var inst_23047 = (state_23049[(2)]);
var state_23049__$1 = state_23049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23049__$1,inst_23047);
} else {
if((state_val_23050 === (2))){
var inst_23007 = (state_23049[(10)]);
var inst_23019 = cljs.core.count(inst_23007);
var inst_23020 = (inst_23019 > (0));
var state_23049__$1 = state_23049;
if(cljs.core.truth_(inst_23020)){
var statearr_23058_23870 = state_23049__$1;
(statearr_23058_23870[(1)] = (4));

} else {
var statearr_23059_23871 = state_23049__$1;
(statearr_23059_23871[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23050 === (11))){
var inst_23007 = (state_23049[(10)]);
var inst_23038 = (state_23049[(2)]);
var tmp23057 = inst_23007;
var inst_23007__$1 = tmp23057;
var state_23049__$1 = (function (){var statearr_23060 = state_23049;
(statearr_23060[(11)] = inst_23038);

(statearr_23060[(10)] = inst_23007__$1);

return statearr_23060;
})();
var statearr_23061_23873 = state_23049__$1;
(statearr_23061_23873[(2)] = null);

(statearr_23061_23873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23050 === (9))){
var inst_23027 = (state_23049[(7)]);
var state_23049__$1 = state_23049;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23049__$1,(11),out,inst_23027);
} else {
if((state_val_23050 === (5))){
var inst_23043 = cljs.core.async.close_BANG_(out);
var state_23049__$1 = state_23049;
var statearr_23062_23874 = state_23049__$1;
(statearr_23062_23874[(2)] = inst_23043);

(statearr_23062_23874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23050 === (10))){
var inst_23041 = (state_23049[(2)]);
var state_23049__$1 = state_23049;
var statearr_23063_23875 = state_23049__$1;
(statearr_23063_23875[(2)] = inst_23041);

(statearr_23063_23875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23050 === (8))){
var inst_23027 = (state_23049[(7)]);
var inst_23007 = (state_23049[(10)]);
var inst_23026 = (state_23049[(8)]);
var inst_23028 = (state_23049[(9)]);
var inst_23032 = (function (){var cs = inst_23007;
var vec__23022 = inst_23026;
var v = inst_23027;
var c = inst_23028;
return (function (p1__23002_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__23002_SHARP_);
});
})();
var inst_23033 = cljs.core.filterv(inst_23032,inst_23007);
var inst_23007__$1 = inst_23033;
var state_23049__$1 = (function (){var statearr_23064 = state_23049;
(statearr_23064[(10)] = inst_23007__$1);

return statearr_23064;
})();
var statearr_23065_23876 = state_23049__$1;
(statearr_23065_23876[(2)] = null);

(statearr_23065_23876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__21179__auto__ = null;
var cljs$core$async$state_machine__21179__auto____0 = (function (){
var statearr_23066 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23066[(0)] = cljs$core$async$state_machine__21179__auto__);

(statearr_23066[(1)] = (1));

return statearr_23066;
});
var cljs$core$async$state_machine__21179__auto____1 = (function (state_23049){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_23049);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e23067){var ex__21182__auto__ = e23067;
var statearr_23068_23877 = state_23049;
(statearr_23068_23877[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_23049[(4)]))){
var statearr_23069_23878 = state_23049;
(statearr_23069_23878[(1)] = cljs.core.first((state_23049[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23879 = state_23049;
state_23049 = G__23879;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
cljs$core$async$state_machine__21179__auto__ = function(state_23049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21179__auto____1.call(this,state_23049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21179__auto____0;
cljs$core$async$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21179__auto____1;
return cljs$core$async$state_machine__21179__auto__;
})()
})();
var state__21309__auto__ = (function (){var statearr_23070 = f__21308__auto__();
(statearr_23070[(6)] = c__21307__auto___23865);

return statearr_23070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__23072 = arguments.length;
switch (G__23072) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21307__auto___23881 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = (function (state_23096){
var state_val_23097 = (state_23096[(1)]);
if((state_val_23097 === (7))){
var inst_23078 = (state_23096[(7)]);
var inst_23078__$1 = (state_23096[(2)]);
var inst_23079 = (inst_23078__$1 == null);
var inst_23080 = cljs.core.not(inst_23079);
var state_23096__$1 = (function (){var statearr_23098 = state_23096;
(statearr_23098[(7)] = inst_23078__$1);

return statearr_23098;
})();
if(inst_23080){
var statearr_23099_23882 = state_23096__$1;
(statearr_23099_23882[(1)] = (8));

} else {
var statearr_23100_23883 = state_23096__$1;
(statearr_23100_23883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23097 === (1))){
var inst_23073 = (0);
var state_23096__$1 = (function (){var statearr_23101 = state_23096;
(statearr_23101[(8)] = inst_23073);

return statearr_23101;
})();
var statearr_23102_23884 = state_23096__$1;
(statearr_23102_23884[(2)] = null);

(statearr_23102_23884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23097 === (4))){
var state_23096__$1 = state_23096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23096__$1,(7),ch);
} else {
if((state_val_23097 === (6))){
var inst_23091 = (state_23096[(2)]);
var state_23096__$1 = state_23096;
var statearr_23103_23885 = state_23096__$1;
(statearr_23103_23885[(2)] = inst_23091);

(statearr_23103_23885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23097 === (3))){
var inst_23093 = (state_23096[(2)]);
var inst_23094 = cljs.core.async.close_BANG_(out);
var state_23096__$1 = (function (){var statearr_23104 = state_23096;
(statearr_23104[(9)] = inst_23093);

return statearr_23104;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23096__$1,inst_23094);
} else {
if((state_val_23097 === (2))){
var inst_23073 = (state_23096[(8)]);
var inst_23075 = (inst_23073 < n);
var state_23096__$1 = state_23096;
if(cljs.core.truth_(inst_23075)){
var statearr_23105_23886 = state_23096__$1;
(statearr_23105_23886[(1)] = (4));

} else {
var statearr_23106_23887 = state_23096__$1;
(statearr_23106_23887[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23097 === (11))){
var inst_23073 = (state_23096[(8)]);
var inst_23083 = (state_23096[(2)]);
var inst_23084 = (inst_23073 + (1));
var inst_23073__$1 = inst_23084;
var state_23096__$1 = (function (){var statearr_23107 = state_23096;
(statearr_23107[(10)] = inst_23083);

(statearr_23107[(8)] = inst_23073__$1);

return statearr_23107;
})();
var statearr_23108_23888 = state_23096__$1;
(statearr_23108_23888[(2)] = null);

(statearr_23108_23888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23097 === (9))){
var state_23096__$1 = state_23096;
var statearr_23109_23889 = state_23096__$1;
(statearr_23109_23889[(2)] = null);

(statearr_23109_23889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23097 === (5))){
var state_23096__$1 = state_23096;
var statearr_23110_23890 = state_23096__$1;
(statearr_23110_23890[(2)] = null);

(statearr_23110_23890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23097 === (10))){
var inst_23088 = (state_23096[(2)]);
var state_23096__$1 = state_23096;
var statearr_23111_23891 = state_23096__$1;
(statearr_23111_23891[(2)] = inst_23088);

(statearr_23111_23891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23097 === (8))){
var inst_23078 = (state_23096[(7)]);
var state_23096__$1 = state_23096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23096__$1,(11),out,inst_23078);
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
});
return (function() {
var cljs$core$async$state_machine__21179__auto__ = null;
var cljs$core$async$state_machine__21179__auto____0 = (function (){
var statearr_23112 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23112[(0)] = cljs$core$async$state_machine__21179__auto__);

(statearr_23112[(1)] = (1));

return statearr_23112;
});
var cljs$core$async$state_machine__21179__auto____1 = (function (state_23096){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_23096);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e23113){var ex__21182__auto__ = e23113;
var statearr_23114_23892 = state_23096;
(statearr_23114_23892[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_23096[(4)]))){
var statearr_23115_23893 = state_23096;
(statearr_23115_23893[(1)] = cljs.core.first((state_23096[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23894 = state_23096;
state_23096 = G__23894;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
cljs$core$async$state_machine__21179__auto__ = function(state_23096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21179__auto____1.call(this,state_23096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21179__auto____0;
cljs$core$async$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21179__auto____1;
return cljs$core$async$state_machine__21179__auto__;
})()
})();
var state__21309__auto__ = (function (){var statearr_23116 = f__21308__auto__();
(statearr_23116[(6)] = c__21307__auto___23881);

return statearr_23116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23123 = (function (f,ch,meta23120,_,fn1,meta23124){
this.f = f;
this.ch = ch;
this.meta23120 = meta23120;
this._ = _;
this.fn1 = fn1;
this.meta23124 = meta23124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23125,meta23124__$1){
var self__ = this;
var _23125__$1 = this;
return (new cljs.core.async.t_cljs$core$async23123(self__.f,self__.ch,self__.meta23120,self__._,self__.fn1,meta23124__$1));
}));

(cljs.core.async.t_cljs$core$async23123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23125){
var self__ = this;
var _23125__$1 = this;
return self__.meta23124;
}));

(cljs.core.async.t_cljs$core$async23123.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23123.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async23123.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23123.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__23117_SHARP_){
var G__23134 = (((p1__23117_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23117_SHARP_) : self__.f.call(null,p1__23117_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__23134) : f1.call(null,G__23134));
});
}));

(cljs.core.async.t_cljs$core$async23123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23120","meta23120",-827020278,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23119","cljs.core.async/t_cljs$core$async23119",109125072,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23124","meta23124",292829809,null)], null);
}));

(cljs.core.async.t_cljs$core$async23123.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23123");

(cljs.core.async.t_cljs$core$async23123.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async23123");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23123.
 */
cljs.core.async.__GT_t_cljs$core$async23123 = (function cljs$core$async$__GT_t_cljs$core$async23123(f,ch,meta23120,_,fn1,meta23124){
return (new cljs.core.async.t_cljs$core$async23123(f,ch,meta23120,_,fn1,meta23124));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23119 = (function (f,ch,meta23120){
this.f = f;
this.ch = ch;
this.meta23120 = meta23120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23121,meta23120__$1){
var self__ = this;
var _23121__$1 = this;
return (new cljs.core.async.t_cljs$core$async23119(self__.f,self__.ch,meta23120__$1));
}));

(cljs.core.async.t_cljs$core$async23119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23121){
var self__ = this;
var _23121__$1 = this;
return self__.meta23120;
}));

(cljs.core.async.t_cljs$core$async23119.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23119.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async23119.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async23119.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23119.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async23123(self__.f,self__.ch,self__.meta23120,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__23149 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23149) : self__.f.call(null,G__23149));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async23119.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23119.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async23119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23120","meta23120",-827020278,null)], null);
}));

(cljs.core.async.t_cljs$core$async23119.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23119");

(cljs.core.async.t_cljs$core$async23119.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async23119");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23119.
 */
cljs.core.async.__GT_t_cljs$core$async23119 = (function cljs$core$async$__GT_t_cljs$core$async23119(f,ch,meta23120){
return (new cljs.core.async.t_cljs$core$async23119(f,ch,meta23120));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async23119(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23153 = (function (f,ch,meta23154){
this.f = f;
this.ch = ch;
this.meta23154 = meta23154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23155,meta23154__$1){
var self__ = this;
var _23155__$1 = this;
return (new cljs.core.async.t_cljs$core$async23153(self__.f,self__.ch,meta23154__$1));
}));

(cljs.core.async.t_cljs$core$async23153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23155){
var self__ = this;
var _23155__$1 = this;
return self__.meta23154;
}));

(cljs.core.async.t_cljs$core$async23153.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23153.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async23153.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23153.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async23153.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23153.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async23153.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23154","meta23154",-1434435383,null)], null);
}));

(cljs.core.async.t_cljs$core$async23153.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23153.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23153");

(cljs.core.async.t_cljs$core$async23153.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async23153");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23153.
 */
cljs.core.async.__GT_t_cljs$core$async23153 = (function cljs$core$async$__GT_t_cljs$core$async23153(f,ch,meta23154){
return (new cljs.core.async.t_cljs$core$async23153(f,ch,meta23154));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async23153(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23158 = (function (p,ch,meta23159){
this.p = p;
this.ch = ch;
this.meta23159 = meta23159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23160,meta23159__$1){
var self__ = this;
var _23160__$1 = this;
return (new cljs.core.async.t_cljs$core$async23158(self__.p,self__.ch,meta23159__$1));
}));

(cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23160){
var self__ = this;
var _23160__$1 = this;
return self__.meta23159;
}));

(cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async23158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23159","meta23159",659072257,null)], null);
}));

(cljs.core.async.t_cljs$core$async23158.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23158");

(cljs.core.async.t_cljs$core$async23158.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async23158");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23158.
 */
cljs.core.async.__GT_t_cljs$core$async23158 = (function cljs$core$async$__GT_t_cljs$core$async23158(p,ch,meta23159){
return (new cljs.core.async.t_cljs$core$async23158(p,ch,meta23159));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async23158(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__23162 = arguments.length;
switch (G__23162) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21307__auto___23906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = (function (state_23183){
var state_val_23184 = (state_23183[(1)]);
if((state_val_23184 === (7))){
var inst_23179 = (state_23183[(2)]);
var state_23183__$1 = state_23183;
var statearr_23185_23910 = state_23183__$1;
(statearr_23185_23910[(2)] = inst_23179);

(statearr_23185_23910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23184 === (1))){
var state_23183__$1 = state_23183;
var statearr_23186_23911 = state_23183__$1;
(statearr_23186_23911[(2)] = null);

(statearr_23186_23911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23184 === (4))){
var inst_23165 = (state_23183[(7)]);
var inst_23165__$1 = (state_23183[(2)]);
var inst_23166 = (inst_23165__$1 == null);
var state_23183__$1 = (function (){var statearr_23187 = state_23183;
(statearr_23187[(7)] = inst_23165__$1);

return statearr_23187;
})();
if(cljs.core.truth_(inst_23166)){
var statearr_23188_23912 = state_23183__$1;
(statearr_23188_23912[(1)] = (5));

} else {
var statearr_23189_23913 = state_23183__$1;
(statearr_23189_23913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23184 === (6))){
var inst_23165 = (state_23183[(7)]);
var inst_23170 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23165) : p.call(null,inst_23165));
var state_23183__$1 = state_23183;
if(cljs.core.truth_(inst_23170)){
var statearr_23190_23914 = state_23183__$1;
(statearr_23190_23914[(1)] = (8));

} else {
var statearr_23191_23915 = state_23183__$1;
(statearr_23191_23915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23184 === (3))){
var inst_23181 = (state_23183[(2)]);
var state_23183__$1 = state_23183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23183__$1,inst_23181);
} else {
if((state_val_23184 === (2))){
var state_23183__$1 = state_23183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23183__$1,(4),ch);
} else {
if((state_val_23184 === (11))){
var inst_23173 = (state_23183[(2)]);
var state_23183__$1 = state_23183;
var statearr_23192_23916 = state_23183__$1;
(statearr_23192_23916[(2)] = inst_23173);

(statearr_23192_23916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23184 === (9))){
var state_23183__$1 = state_23183;
var statearr_23193_23917 = state_23183__$1;
(statearr_23193_23917[(2)] = null);

(statearr_23193_23917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23184 === (5))){
var inst_23168 = cljs.core.async.close_BANG_(out);
var state_23183__$1 = state_23183;
var statearr_23194_23918 = state_23183__$1;
(statearr_23194_23918[(2)] = inst_23168);

(statearr_23194_23918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23184 === (10))){
var inst_23176 = (state_23183[(2)]);
var state_23183__$1 = (function (){var statearr_23195 = state_23183;
(statearr_23195[(8)] = inst_23176);

return statearr_23195;
})();
var statearr_23196_23919 = state_23183__$1;
(statearr_23196_23919[(2)] = null);

(statearr_23196_23919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23184 === (8))){
var inst_23165 = (state_23183[(7)]);
var state_23183__$1 = state_23183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23183__$1,(11),out,inst_23165);
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
});
return (function() {
var cljs$core$async$state_machine__21179__auto__ = null;
var cljs$core$async$state_machine__21179__auto____0 = (function (){
var statearr_23197 = [null,null,null,null,null,null,null,null,null];
(statearr_23197[(0)] = cljs$core$async$state_machine__21179__auto__);

(statearr_23197[(1)] = (1));

return statearr_23197;
});
var cljs$core$async$state_machine__21179__auto____1 = (function (state_23183){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_23183);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e23198){var ex__21182__auto__ = e23198;
var statearr_23199_23923 = state_23183;
(statearr_23199_23923[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_23183[(4)]))){
var statearr_23200_23924 = state_23183;
(statearr_23200_23924[(1)] = cljs.core.first((state_23183[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23925 = state_23183;
state_23183 = G__23925;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
cljs$core$async$state_machine__21179__auto__ = function(state_23183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21179__auto____1.call(this,state_23183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21179__auto____0;
cljs$core$async$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21179__auto____1;
return cljs$core$async$state_machine__21179__auto__;
})()
})();
var state__21309__auto__ = (function (){var statearr_23201 = f__21308__auto__();
(statearr_23201[(6)] = c__21307__auto___23906);

return statearr_23201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__23203 = arguments.length;
switch (G__23203) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21307__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = (function (state_23265){
var state_val_23266 = (state_23265[(1)]);
if((state_val_23266 === (7))){
var inst_23261 = (state_23265[(2)]);
var state_23265__$1 = state_23265;
var statearr_23267_23927 = state_23265__$1;
(statearr_23267_23927[(2)] = inst_23261);

(statearr_23267_23927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (20))){
var inst_23231 = (state_23265[(7)]);
var inst_23242 = (state_23265[(2)]);
var inst_23243 = cljs.core.next(inst_23231);
var inst_23217 = inst_23243;
var inst_23218 = null;
var inst_23219 = (0);
var inst_23220 = (0);
var state_23265__$1 = (function (){var statearr_23268 = state_23265;
(statearr_23268[(8)] = inst_23217);

(statearr_23268[(9)] = inst_23219);

(statearr_23268[(10)] = inst_23220);

(statearr_23268[(11)] = inst_23218);

(statearr_23268[(12)] = inst_23242);

return statearr_23268;
})();
var statearr_23269_23928 = state_23265__$1;
(statearr_23269_23928[(2)] = null);

(statearr_23269_23928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (1))){
var state_23265__$1 = state_23265;
var statearr_23270_23929 = state_23265__$1;
(statearr_23270_23929[(2)] = null);

(statearr_23270_23929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (4))){
var inst_23206 = (state_23265[(13)]);
var inst_23206__$1 = (state_23265[(2)]);
var inst_23207 = (inst_23206__$1 == null);
var state_23265__$1 = (function (){var statearr_23271 = state_23265;
(statearr_23271[(13)] = inst_23206__$1);

return statearr_23271;
})();
if(cljs.core.truth_(inst_23207)){
var statearr_23272_23934 = state_23265__$1;
(statearr_23272_23934[(1)] = (5));

} else {
var statearr_23273_23935 = state_23265__$1;
(statearr_23273_23935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (15))){
var state_23265__$1 = state_23265;
var statearr_23277_23936 = state_23265__$1;
(statearr_23277_23936[(2)] = null);

(statearr_23277_23936[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (21))){
var state_23265__$1 = state_23265;
var statearr_23278_23937 = state_23265__$1;
(statearr_23278_23937[(2)] = null);

(statearr_23278_23937[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (13))){
var inst_23217 = (state_23265[(8)]);
var inst_23219 = (state_23265[(9)]);
var inst_23220 = (state_23265[(10)]);
var inst_23218 = (state_23265[(11)]);
var inst_23227 = (state_23265[(2)]);
var inst_23228 = (inst_23220 + (1));
var tmp23274 = inst_23217;
var tmp23275 = inst_23219;
var tmp23276 = inst_23218;
var inst_23217__$1 = tmp23274;
var inst_23218__$1 = tmp23276;
var inst_23219__$1 = tmp23275;
var inst_23220__$1 = inst_23228;
var state_23265__$1 = (function (){var statearr_23279 = state_23265;
(statearr_23279[(8)] = inst_23217__$1);

(statearr_23279[(14)] = inst_23227);

(statearr_23279[(9)] = inst_23219__$1);

(statearr_23279[(10)] = inst_23220__$1);

(statearr_23279[(11)] = inst_23218__$1);

return statearr_23279;
})();
var statearr_23280_23938 = state_23265__$1;
(statearr_23280_23938[(2)] = null);

(statearr_23280_23938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (22))){
var state_23265__$1 = state_23265;
var statearr_23281_23939 = state_23265__$1;
(statearr_23281_23939[(2)] = null);

(statearr_23281_23939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (6))){
var inst_23206 = (state_23265[(13)]);
var inst_23215 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23206) : f.call(null,inst_23206));
var inst_23216 = cljs.core.seq(inst_23215);
var inst_23217 = inst_23216;
var inst_23218 = null;
var inst_23219 = (0);
var inst_23220 = (0);
var state_23265__$1 = (function (){var statearr_23282 = state_23265;
(statearr_23282[(8)] = inst_23217);

(statearr_23282[(9)] = inst_23219);

(statearr_23282[(10)] = inst_23220);

(statearr_23282[(11)] = inst_23218);

return statearr_23282;
})();
var statearr_23283_23943 = state_23265__$1;
(statearr_23283_23943[(2)] = null);

(statearr_23283_23943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (17))){
var inst_23231 = (state_23265[(7)]);
var inst_23235 = cljs.core.chunk_first(inst_23231);
var inst_23236 = cljs.core.chunk_rest(inst_23231);
var inst_23237 = cljs.core.count(inst_23235);
var inst_23217 = inst_23236;
var inst_23218 = inst_23235;
var inst_23219 = inst_23237;
var inst_23220 = (0);
var state_23265__$1 = (function (){var statearr_23284 = state_23265;
(statearr_23284[(8)] = inst_23217);

(statearr_23284[(9)] = inst_23219);

(statearr_23284[(10)] = inst_23220);

(statearr_23284[(11)] = inst_23218);

return statearr_23284;
})();
var statearr_23285_23944 = state_23265__$1;
(statearr_23285_23944[(2)] = null);

(statearr_23285_23944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (3))){
var inst_23263 = (state_23265[(2)]);
var state_23265__$1 = state_23265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23265__$1,inst_23263);
} else {
if((state_val_23266 === (12))){
var inst_23251 = (state_23265[(2)]);
var state_23265__$1 = state_23265;
var statearr_23286_23945 = state_23265__$1;
(statearr_23286_23945[(2)] = inst_23251);

(statearr_23286_23945[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (2))){
var state_23265__$1 = state_23265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23265__$1,(4),in$);
} else {
if((state_val_23266 === (23))){
var inst_23259 = (state_23265[(2)]);
var state_23265__$1 = state_23265;
var statearr_23287_23946 = state_23265__$1;
(statearr_23287_23946[(2)] = inst_23259);

(statearr_23287_23946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (19))){
var inst_23246 = (state_23265[(2)]);
var state_23265__$1 = state_23265;
var statearr_23288_23947 = state_23265__$1;
(statearr_23288_23947[(2)] = inst_23246);

(statearr_23288_23947[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (11))){
var inst_23217 = (state_23265[(8)]);
var inst_23231 = (state_23265[(7)]);
var inst_23231__$1 = cljs.core.seq(inst_23217);
var state_23265__$1 = (function (){var statearr_23289 = state_23265;
(statearr_23289[(7)] = inst_23231__$1);

return statearr_23289;
})();
if(inst_23231__$1){
var statearr_23290_23948 = state_23265__$1;
(statearr_23290_23948[(1)] = (14));

} else {
var statearr_23291_23949 = state_23265__$1;
(statearr_23291_23949[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (9))){
var inst_23253 = (state_23265[(2)]);
var inst_23254 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_23265__$1 = (function (){var statearr_23292 = state_23265;
(statearr_23292[(15)] = inst_23253);

return statearr_23292;
})();
if(cljs.core.truth_(inst_23254)){
var statearr_23293_23950 = state_23265__$1;
(statearr_23293_23950[(1)] = (21));

} else {
var statearr_23294_23951 = state_23265__$1;
(statearr_23294_23951[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (5))){
var inst_23209 = cljs.core.async.close_BANG_(out);
var state_23265__$1 = state_23265;
var statearr_23295_23952 = state_23265__$1;
(statearr_23295_23952[(2)] = inst_23209);

(statearr_23295_23952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (14))){
var inst_23231 = (state_23265[(7)]);
var inst_23233 = cljs.core.chunked_seq_QMARK_(inst_23231);
var state_23265__$1 = state_23265;
if(inst_23233){
var statearr_23296_23953 = state_23265__$1;
(statearr_23296_23953[(1)] = (17));

} else {
var statearr_23297_23957 = state_23265__$1;
(statearr_23297_23957[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (16))){
var inst_23249 = (state_23265[(2)]);
var state_23265__$1 = state_23265;
var statearr_23298_23958 = state_23265__$1;
(statearr_23298_23958[(2)] = inst_23249);

(statearr_23298_23958[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23266 === (10))){
var inst_23220 = (state_23265[(10)]);
var inst_23218 = (state_23265[(11)]);
var inst_23225 = cljs.core._nth(inst_23218,inst_23220);
var state_23265__$1 = state_23265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23265__$1,(13),out,inst_23225);
} else {
if((state_val_23266 === (18))){
var inst_23231 = (state_23265[(7)]);
var inst_23240 = cljs.core.first(inst_23231);
var state_23265__$1 = state_23265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23265__$1,(20),out,inst_23240);
} else {
if((state_val_23266 === (8))){
var inst_23219 = (state_23265[(9)]);
var inst_23220 = (state_23265[(10)]);
var inst_23222 = (inst_23220 < inst_23219);
var inst_23223 = inst_23222;
var state_23265__$1 = state_23265;
if(cljs.core.truth_(inst_23223)){
var statearr_23299_23959 = state_23265__$1;
(statearr_23299_23959[(1)] = (10));

} else {
var statearr_23300_23960 = state_23265__$1;
(statearr_23300_23960[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21179__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21179__auto____0 = (function (){
var statearr_23301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23301[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21179__auto__);

(statearr_23301[(1)] = (1));

return statearr_23301;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21179__auto____1 = (function (state_23265){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_23265);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e23302){var ex__21182__auto__ = e23302;
var statearr_23303_23961 = state_23265;
(statearr_23303_23961[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_23265[(4)]))){
var statearr_23304_23962 = state_23265;
(statearr_23304_23962[(1)] = cljs.core.first((state_23265[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23963 = state_23265;
state_23265 = G__23963;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21179__auto__ = function(state_23265){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21179__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21179__auto____1.call(this,state_23265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21179__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21179__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21179__auto__;
})()
})();
var state__21309__auto__ = (function (){var statearr_23305 = f__21308__auto__();
(statearr_23305[(6)] = c__21307__auto__);

return statearr_23305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
}));

return c__21307__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__23307 = arguments.length;
switch (G__23307) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__23309 = arguments.length;
switch (G__23309) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__23311 = arguments.length;
switch (G__23311) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21307__auto___23970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = (function (state_23335){
var state_val_23336 = (state_23335[(1)]);
if((state_val_23336 === (7))){
var inst_23330 = (state_23335[(2)]);
var state_23335__$1 = state_23335;
var statearr_23337_23971 = state_23335__$1;
(statearr_23337_23971[(2)] = inst_23330);

(statearr_23337_23971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23336 === (1))){
var inst_23312 = null;
var state_23335__$1 = (function (){var statearr_23338 = state_23335;
(statearr_23338[(7)] = inst_23312);

return statearr_23338;
})();
var statearr_23339_23972 = state_23335__$1;
(statearr_23339_23972[(2)] = null);

(statearr_23339_23972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23336 === (4))){
var inst_23315 = (state_23335[(8)]);
var inst_23315__$1 = (state_23335[(2)]);
var inst_23316 = (inst_23315__$1 == null);
var inst_23317 = cljs.core.not(inst_23316);
var state_23335__$1 = (function (){var statearr_23340 = state_23335;
(statearr_23340[(8)] = inst_23315__$1);

return statearr_23340;
})();
if(inst_23317){
var statearr_23341_23973 = state_23335__$1;
(statearr_23341_23973[(1)] = (5));

} else {
var statearr_23342_23974 = state_23335__$1;
(statearr_23342_23974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23336 === (6))){
var state_23335__$1 = state_23335;
var statearr_23343_23978 = state_23335__$1;
(statearr_23343_23978[(2)] = null);

(statearr_23343_23978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23336 === (3))){
var inst_23332 = (state_23335[(2)]);
var inst_23333 = cljs.core.async.close_BANG_(out);
var state_23335__$1 = (function (){var statearr_23344 = state_23335;
(statearr_23344[(9)] = inst_23332);

return statearr_23344;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23335__$1,inst_23333);
} else {
if((state_val_23336 === (2))){
var state_23335__$1 = state_23335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23335__$1,(4),ch);
} else {
if((state_val_23336 === (11))){
var inst_23315 = (state_23335[(8)]);
var inst_23324 = (state_23335[(2)]);
var inst_23312 = inst_23315;
var state_23335__$1 = (function (){var statearr_23345 = state_23335;
(statearr_23345[(10)] = inst_23324);

(statearr_23345[(7)] = inst_23312);

return statearr_23345;
})();
var statearr_23346_23979 = state_23335__$1;
(statearr_23346_23979[(2)] = null);

(statearr_23346_23979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23336 === (9))){
var inst_23315 = (state_23335[(8)]);
var state_23335__$1 = state_23335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23335__$1,(11),out,inst_23315);
} else {
if((state_val_23336 === (5))){
var inst_23315 = (state_23335[(8)]);
var inst_23312 = (state_23335[(7)]);
var inst_23319 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23315,inst_23312);
var state_23335__$1 = state_23335;
if(inst_23319){
var statearr_23348_23980 = state_23335__$1;
(statearr_23348_23980[(1)] = (8));

} else {
var statearr_23349_23981 = state_23335__$1;
(statearr_23349_23981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23336 === (10))){
var inst_23327 = (state_23335[(2)]);
var state_23335__$1 = state_23335;
var statearr_23350_23982 = state_23335__$1;
(statearr_23350_23982[(2)] = inst_23327);

(statearr_23350_23982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23336 === (8))){
var inst_23312 = (state_23335[(7)]);
var tmp23347 = inst_23312;
var inst_23312__$1 = tmp23347;
var state_23335__$1 = (function (){var statearr_23351 = state_23335;
(statearr_23351[(7)] = inst_23312__$1);

return statearr_23351;
})();
var statearr_23352_23983 = state_23335__$1;
(statearr_23352_23983[(2)] = null);

(statearr_23352_23983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__21179__auto__ = null;
var cljs$core$async$state_machine__21179__auto____0 = (function (){
var statearr_23353 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23353[(0)] = cljs$core$async$state_machine__21179__auto__);

(statearr_23353[(1)] = (1));

return statearr_23353;
});
var cljs$core$async$state_machine__21179__auto____1 = (function (state_23335){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_23335);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e23354){var ex__21182__auto__ = e23354;
var statearr_23355_23984 = state_23335;
(statearr_23355_23984[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_23335[(4)]))){
var statearr_23356_23985 = state_23335;
(statearr_23356_23985[(1)] = cljs.core.first((state_23335[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23986 = state_23335;
state_23335 = G__23986;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
cljs$core$async$state_machine__21179__auto__ = function(state_23335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21179__auto____1.call(this,state_23335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21179__auto____0;
cljs$core$async$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21179__auto____1;
return cljs$core$async$state_machine__21179__auto__;
})()
})();
var state__21309__auto__ = (function (){var statearr_23357 = f__21308__auto__();
(statearr_23357[(6)] = c__21307__auto___23970);

return statearr_23357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__23359 = arguments.length;
switch (G__23359) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21307__auto___23988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = (function (state_23397){
var state_val_23398 = (state_23397[(1)]);
if((state_val_23398 === (7))){
var inst_23393 = (state_23397[(2)]);
var state_23397__$1 = state_23397;
var statearr_23399_23989 = state_23397__$1;
(statearr_23399_23989[(2)] = inst_23393);

(statearr_23399_23989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23398 === (1))){
var inst_23360 = (new Array(n));
var inst_23361 = inst_23360;
var inst_23362 = (0);
var state_23397__$1 = (function (){var statearr_23400 = state_23397;
(statearr_23400[(7)] = inst_23362);

(statearr_23400[(8)] = inst_23361);

return statearr_23400;
})();
var statearr_23401_23990 = state_23397__$1;
(statearr_23401_23990[(2)] = null);

(statearr_23401_23990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23398 === (4))){
var inst_23365 = (state_23397[(9)]);
var inst_23365__$1 = (state_23397[(2)]);
var inst_23366 = (inst_23365__$1 == null);
var inst_23367 = cljs.core.not(inst_23366);
var state_23397__$1 = (function (){var statearr_23402 = state_23397;
(statearr_23402[(9)] = inst_23365__$1);

return statearr_23402;
})();
if(inst_23367){
var statearr_23403_23992 = state_23397__$1;
(statearr_23403_23992[(1)] = (5));

} else {
var statearr_23404_23993 = state_23397__$1;
(statearr_23404_23993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23398 === (15))){
var inst_23387 = (state_23397[(2)]);
var state_23397__$1 = state_23397;
var statearr_23405_23994 = state_23397__$1;
(statearr_23405_23994[(2)] = inst_23387);

(statearr_23405_23994[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23398 === (13))){
var state_23397__$1 = state_23397;
var statearr_23406_23995 = state_23397__$1;
(statearr_23406_23995[(2)] = null);

(statearr_23406_23995[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23398 === (6))){
var inst_23362 = (state_23397[(7)]);
var inst_23383 = (inst_23362 > (0));
var state_23397__$1 = state_23397;
if(cljs.core.truth_(inst_23383)){
var statearr_23407_23996 = state_23397__$1;
(statearr_23407_23996[(1)] = (12));

} else {
var statearr_23408_23997 = state_23397__$1;
(statearr_23408_23997[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23398 === (3))){
var inst_23395 = (state_23397[(2)]);
var state_23397__$1 = state_23397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23397__$1,inst_23395);
} else {
if((state_val_23398 === (12))){
var inst_23361 = (state_23397[(8)]);
var inst_23385 = cljs.core.vec(inst_23361);
var state_23397__$1 = state_23397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23397__$1,(15),out,inst_23385);
} else {
if((state_val_23398 === (2))){
var state_23397__$1 = state_23397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23397__$1,(4),ch);
} else {
if((state_val_23398 === (11))){
var inst_23377 = (state_23397[(2)]);
var inst_23378 = (new Array(n));
var inst_23361 = inst_23378;
var inst_23362 = (0);
var state_23397__$1 = (function (){var statearr_23409 = state_23397;
(statearr_23409[(7)] = inst_23362);

(statearr_23409[(10)] = inst_23377);

(statearr_23409[(8)] = inst_23361);

return statearr_23409;
})();
var statearr_23410_23998 = state_23397__$1;
(statearr_23410_23998[(2)] = null);

(statearr_23410_23998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23398 === (9))){
var inst_23361 = (state_23397[(8)]);
var inst_23375 = cljs.core.vec(inst_23361);
var state_23397__$1 = state_23397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23397__$1,(11),out,inst_23375);
} else {
if((state_val_23398 === (5))){
var inst_23365 = (state_23397[(9)]);
var inst_23362 = (state_23397[(7)]);
var inst_23361 = (state_23397[(8)]);
var inst_23370 = (state_23397[(11)]);
var inst_23369 = (inst_23361[inst_23362] = inst_23365);
var inst_23370__$1 = (inst_23362 + (1));
var inst_23371 = (inst_23370__$1 < n);
var state_23397__$1 = (function (){var statearr_23411 = state_23397;
(statearr_23411[(12)] = inst_23369);

(statearr_23411[(11)] = inst_23370__$1);

return statearr_23411;
})();
if(cljs.core.truth_(inst_23371)){
var statearr_23412_23999 = state_23397__$1;
(statearr_23412_23999[(1)] = (8));

} else {
var statearr_23413_24000 = state_23397__$1;
(statearr_23413_24000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23398 === (14))){
var inst_23390 = (state_23397[(2)]);
var inst_23391 = cljs.core.async.close_BANG_(out);
var state_23397__$1 = (function (){var statearr_23415 = state_23397;
(statearr_23415[(13)] = inst_23390);

return statearr_23415;
})();
var statearr_23416_24001 = state_23397__$1;
(statearr_23416_24001[(2)] = inst_23391);

(statearr_23416_24001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23398 === (10))){
var inst_23381 = (state_23397[(2)]);
var state_23397__$1 = state_23397;
var statearr_23417_24002 = state_23397__$1;
(statearr_23417_24002[(2)] = inst_23381);

(statearr_23417_24002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23398 === (8))){
var inst_23361 = (state_23397[(8)]);
var inst_23370 = (state_23397[(11)]);
var tmp23414 = inst_23361;
var inst_23361__$1 = tmp23414;
var inst_23362 = inst_23370;
var state_23397__$1 = (function (){var statearr_23418 = state_23397;
(statearr_23418[(7)] = inst_23362);

(statearr_23418[(8)] = inst_23361__$1);

return statearr_23418;
})();
var statearr_23419_24003 = state_23397__$1;
(statearr_23419_24003[(2)] = null);

(statearr_23419_24003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21179__auto__ = null;
var cljs$core$async$state_machine__21179__auto____0 = (function (){
var statearr_23420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23420[(0)] = cljs$core$async$state_machine__21179__auto__);

(statearr_23420[(1)] = (1));

return statearr_23420;
});
var cljs$core$async$state_machine__21179__auto____1 = (function (state_23397){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_23397);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e23421){var ex__21182__auto__ = e23421;
var statearr_23422_24004 = state_23397;
(statearr_23422_24004[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_23397[(4)]))){
var statearr_23423_24005 = state_23397;
(statearr_23423_24005[(1)] = cljs.core.first((state_23397[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24006 = state_23397;
state_23397 = G__24006;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
cljs$core$async$state_machine__21179__auto__ = function(state_23397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21179__auto____1.call(this,state_23397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21179__auto____0;
cljs$core$async$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21179__auto____1;
return cljs$core$async$state_machine__21179__auto__;
})()
})();
var state__21309__auto__ = (function (){var statearr_23424 = f__21308__auto__();
(statearr_23424[(6)] = c__21307__auto___23988);

return statearr_23424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23426 = arguments.length;
switch (G__23426) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21307__auto___24008 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21308__auto__ = (function (){var switch__21178__auto__ = (function (state_23471){
var state_val_23472 = (state_23471[(1)]);
if((state_val_23472 === (7))){
var inst_23467 = (state_23471[(2)]);
var state_23471__$1 = state_23471;
var statearr_23473_24009 = state_23471__$1;
(statearr_23473_24009[(2)] = inst_23467);

(statearr_23473_24009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (1))){
var inst_23427 = [];
var inst_23428 = inst_23427;
var inst_23429 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23471__$1 = (function (){var statearr_23474 = state_23471;
(statearr_23474[(7)] = inst_23429);

(statearr_23474[(8)] = inst_23428);

return statearr_23474;
})();
var statearr_23475_24010 = state_23471__$1;
(statearr_23475_24010[(2)] = null);

(statearr_23475_24010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (4))){
var inst_23432 = (state_23471[(9)]);
var inst_23432__$1 = (state_23471[(2)]);
var inst_23433 = (inst_23432__$1 == null);
var inst_23434 = cljs.core.not(inst_23433);
var state_23471__$1 = (function (){var statearr_23476 = state_23471;
(statearr_23476[(9)] = inst_23432__$1);

return statearr_23476;
})();
if(inst_23434){
var statearr_23477_24011 = state_23471__$1;
(statearr_23477_24011[(1)] = (5));

} else {
var statearr_23478_24012 = state_23471__$1;
(statearr_23478_24012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (15))){
var inst_23428 = (state_23471[(8)]);
var inst_23459 = cljs.core.vec(inst_23428);
var state_23471__$1 = state_23471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23471__$1,(18),out,inst_23459);
} else {
if((state_val_23472 === (13))){
var inst_23454 = (state_23471[(2)]);
var state_23471__$1 = state_23471;
var statearr_23479_24013 = state_23471__$1;
(statearr_23479_24013[(2)] = inst_23454);

(statearr_23479_24013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (6))){
var inst_23428 = (state_23471[(8)]);
var inst_23456 = inst_23428.length;
var inst_23457 = (inst_23456 > (0));
var state_23471__$1 = state_23471;
if(cljs.core.truth_(inst_23457)){
var statearr_23480_24014 = state_23471__$1;
(statearr_23480_24014[(1)] = (15));

} else {
var statearr_23481_24015 = state_23471__$1;
(statearr_23481_24015[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (17))){
var inst_23464 = (state_23471[(2)]);
var inst_23465 = cljs.core.async.close_BANG_(out);
var state_23471__$1 = (function (){var statearr_23482 = state_23471;
(statearr_23482[(10)] = inst_23464);

return statearr_23482;
})();
var statearr_23483_24016 = state_23471__$1;
(statearr_23483_24016[(2)] = inst_23465);

(statearr_23483_24016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (3))){
var inst_23469 = (state_23471[(2)]);
var state_23471__$1 = state_23471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23471__$1,inst_23469);
} else {
if((state_val_23472 === (12))){
var inst_23428 = (state_23471[(8)]);
var inst_23447 = cljs.core.vec(inst_23428);
var state_23471__$1 = state_23471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23471__$1,(14),out,inst_23447);
} else {
if((state_val_23472 === (2))){
var state_23471__$1 = state_23471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23471__$1,(4),ch);
} else {
if((state_val_23472 === (11))){
var inst_23432 = (state_23471[(9)]);
var inst_23436 = (state_23471[(11)]);
var inst_23428 = (state_23471[(8)]);
var inst_23444 = inst_23428.push(inst_23432);
var tmp23484 = inst_23428;
var inst_23428__$1 = tmp23484;
var inst_23429 = inst_23436;
var state_23471__$1 = (function (){var statearr_23485 = state_23471;
(statearr_23485[(12)] = inst_23444);

(statearr_23485[(7)] = inst_23429);

(statearr_23485[(8)] = inst_23428__$1);

return statearr_23485;
})();
var statearr_23486_24017 = state_23471__$1;
(statearr_23486_24017[(2)] = null);

(statearr_23486_24017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (9))){
var inst_23429 = (state_23471[(7)]);
var inst_23440 = cljs.core.keyword_identical_QMARK_(inst_23429,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_23471__$1 = state_23471;
var statearr_23487_24018 = state_23471__$1;
(statearr_23487_24018[(2)] = inst_23440);

(statearr_23487_24018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (5))){
var inst_23437 = (state_23471[(13)]);
var inst_23429 = (state_23471[(7)]);
var inst_23432 = (state_23471[(9)]);
var inst_23436 = (state_23471[(11)]);
var inst_23436__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23432) : f.call(null,inst_23432));
var inst_23437__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23436__$1,inst_23429);
var state_23471__$1 = (function (){var statearr_23488 = state_23471;
(statearr_23488[(13)] = inst_23437__$1);

(statearr_23488[(11)] = inst_23436__$1);

return statearr_23488;
})();
if(inst_23437__$1){
var statearr_23489_24019 = state_23471__$1;
(statearr_23489_24019[(1)] = (8));

} else {
var statearr_23490_24020 = state_23471__$1;
(statearr_23490_24020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (14))){
var inst_23432 = (state_23471[(9)]);
var inst_23436 = (state_23471[(11)]);
var inst_23449 = (state_23471[(2)]);
var inst_23450 = [];
var inst_23451 = inst_23450.push(inst_23432);
var inst_23428 = inst_23450;
var inst_23429 = inst_23436;
var state_23471__$1 = (function (){var statearr_23491 = state_23471;
(statearr_23491[(14)] = inst_23451);

(statearr_23491[(7)] = inst_23429);

(statearr_23491[(8)] = inst_23428);

(statearr_23491[(15)] = inst_23449);

return statearr_23491;
})();
var statearr_23492_24021 = state_23471__$1;
(statearr_23492_24021[(2)] = null);

(statearr_23492_24021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (16))){
var state_23471__$1 = state_23471;
var statearr_23493_24022 = state_23471__$1;
(statearr_23493_24022[(2)] = null);

(statearr_23493_24022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (10))){
var inst_23442 = (state_23471[(2)]);
var state_23471__$1 = state_23471;
if(cljs.core.truth_(inst_23442)){
var statearr_23494_24023 = state_23471__$1;
(statearr_23494_24023[(1)] = (11));

} else {
var statearr_23495_24024 = state_23471__$1;
(statearr_23495_24024[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (18))){
var inst_23461 = (state_23471[(2)]);
var state_23471__$1 = state_23471;
var statearr_23496_24025 = state_23471__$1;
(statearr_23496_24025[(2)] = inst_23461);

(statearr_23496_24025[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23472 === (8))){
var inst_23437 = (state_23471[(13)]);
var state_23471__$1 = state_23471;
var statearr_23497_24026 = state_23471__$1;
(statearr_23497_24026[(2)] = inst_23437);

(statearr_23497_24026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21179__auto__ = null;
var cljs$core$async$state_machine__21179__auto____0 = (function (){
var statearr_23498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23498[(0)] = cljs$core$async$state_machine__21179__auto__);

(statearr_23498[(1)] = (1));

return statearr_23498;
});
var cljs$core$async$state_machine__21179__auto____1 = (function (state_23471){
while(true){
var ret_value__21180__auto__ = (function (){try{while(true){
var result__21181__auto__ = switch__21178__auto__(state_23471);
if(cljs.core.keyword_identical_QMARK_(result__21181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21181__auto__;
}
break;
}
}catch (e23499){var ex__21182__auto__ = e23499;
var statearr_23500_24027 = state_23471;
(statearr_23500_24027[(2)] = ex__21182__auto__);


if(cljs.core.seq((state_23471[(4)]))){
var statearr_23501_24028 = state_23471;
(statearr_23501_24028[(1)] = cljs.core.first((state_23471[(4)])));

} else {
throw ex__21182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24029 = state_23471;
state_23471 = G__24029;
continue;
} else {
return ret_value__21180__auto__;
}
break;
}
});
cljs$core$async$state_machine__21179__auto__ = function(state_23471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21179__auto____1.call(this,state_23471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21179__auto____0;
cljs$core$async$state_machine__21179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21179__auto____1;
return cljs$core$async$state_machine__21179__auto__;
})()
})();
var state__21309__auto__ = (function (){var statearr_23502 = f__21308__auto__();
(statearr_23502[(6)] = c__21307__auto___24008);

return statearr_23502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21309__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
