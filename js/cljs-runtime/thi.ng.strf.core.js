goog.provide('thi.ng.strf.core');
thi.ng.strf.core.parse_int = (function thi$ng$strf$core$parse_int(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33731 = arguments.length;
var i__5770__auto___33732 = (0);
while(true){
if((i__5770__auto___33732 < len__5769__auto___33731)){
args__5775__auto__.push((arguments[i__5770__auto___33732]));

var G__33733 = (i__5770__auto___33732 + (1));
i__5770__auto___33732 = G__33733;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic = (function (x,radix,p__33447){
var vec__33450 = p__33447;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33450,(0),null);
var x_SINGLEQUOTE_ = parseInt(x,radix);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return default$;
} else {
return x_SINGLEQUOTE_;
}
}));

(thi.ng.strf.core.parse_int.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(thi.ng.strf.core.parse_int.cljs$lang$applyTo = (function (seq33442){
var G__33443 = cljs.core.first(seq33442);
var seq33442__$1 = cljs.core.next(seq33442);
var G__33444 = cljs.core.first(seq33442__$1);
var seq33442__$2 = cljs.core.next(seq33442__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33443,G__33444,seq33442__$2);
}));

thi.ng.strf.core.parse_long = (function thi$ng$strf$core$parse_long(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33742 = arguments.length;
var i__5770__auto___33743 = (0);
while(true){
if((i__5770__auto___33743 < len__5769__auto___33742)){
args__5775__auto__.push((arguments[i__5770__auto___33743]));

var G__33744 = (i__5770__auto___33743 + (1));
i__5770__auto___33743 = G__33744;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic = (function (x,radix,p__33458){
var vec__33459 = p__33458;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33459,(0),null);
return thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic(x,radix,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
}));

(thi.ng.strf.core.parse_long.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(thi.ng.strf.core.parse_long.cljs$lang$applyTo = (function (seq33455){
var G__33456 = cljs.core.first(seq33455);
var seq33455__$1 = cljs.core.next(seq33455);
var G__33457 = cljs.core.first(seq33455__$1);
var seq33455__$2 = cljs.core.next(seq33455__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33456,G__33457,seq33455__$2);
}));

thi.ng.strf.core.parse_float = (function thi$ng$strf$core$parse_float(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33745 = arguments.length;
var i__5770__auto___33746 = (0);
while(true){
if((i__5770__auto___33746 < len__5769__auto___33745)){
args__5775__auto__.push((arguments[i__5770__auto___33746]));

var G__33747 = (i__5770__auto___33746 + (1));
i__5770__auto___33746 = G__33747;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__33464){
var vec__33465 = p__33464;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33465,(0),null);
var x_SINGLEQUOTE_ = parseFloat(x);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return default$;
} else {
return x_SINGLEQUOTE_;
}
}));

(thi.ng.strf.core.parse_float.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(thi.ng.strf.core.parse_float.cljs$lang$applyTo = (function (seq33462){
var G__33463 = cljs.core.first(seq33462);
var seq33462__$1 = cljs.core.next(seq33462);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33463,seq33462__$1);
}));

thi.ng.strf.core.parse_double = (function thi$ng$strf$core$parse_double(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33760 = arguments.length;
var i__5770__auto___33761 = (0);
while(true){
if((i__5770__auto___33761 < len__5769__auto___33760)){
args__5775__auto__.push((arguments[i__5770__auto___33761]));

var G__33762 = (i__5770__auto___33761 + (1));
i__5770__auto___33761 = G__33762;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__33474){
var vec__33475 = p__33474;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33475,(0),null);
return thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
}));

(thi.ng.strf.core.parse_double.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(thi.ng.strf.core.parse_double.cljs$lang$applyTo = (function (seq33470){
var G__33471 = cljs.core.first(seq33470);
var seq33470__$1 = cljs.core.next(seq33470);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33471,seq33470__$1);
}));

thi.ng.strf.core.parse_boolean = (function thi$ng$strf$core$parse_boolean(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",clojure.string.lower_case(x));
});
thi.ng.strf.core.int$ = cljs.core.int$;
thi.ng.strf.core.long$ = thi.ng.strf.core.int$;
thi.ng.strf.core.float$ = cljs.core.memoize((function (prec){
return (function (x){
return (new Number(x)).toFixed(prec);
});
}));
thi.ng.strf.core.double$ = cljs.core.memoize((function (prec){
return (function (x){
return (new Number(x)).toFixed(prec);
});
}));
thi.ng.strf.core.pad_left = cljs.core.memoize((function (len,fill){
var fill__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(len,fill));
return (function (x){
var l = cljs.core.count(x);
if((l < len)){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fill__$1,(0),(len - l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
} else {
return x;
}
});
}));
thi.ng.strf.core.pad_right = cljs.core.memoize((function (len,fill){
var fill__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(len,fill));
return (function (x){
var l = cljs.core.count(x);
if((l < len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fill__$1,(0),(len - l))].join('');
} else {
return x;
}
});
}));
thi.ng.strf.core.hex = cljs.core.memoize((function (len){
var pad = thi.ng.strf.core.pad_left(len,"0");
return (function (x){
var G__33494 = (new Number((thi.ng.strf.core.int$.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.int$.cljs$core$IFn$_invoke$arity$1(x) : thi.ng.strf.core.int$.call(null,x)))).toString((16));
return (pad.cljs$core$IFn$_invoke$arity$1 ? pad.cljs$core$IFn$_invoke$arity$1(G__33494) : pad.call(null,G__33494));
});
}));
thi.ng.strf.core.trunc_left = (function thi$ng$strf$core$trunc_left(len){
return (function (x){
var l = cljs.core.count(x);
if((l <= len)){
return x;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(x,(0),len);
}
});
});
thi.ng.strf.core.trunc_right = (function thi$ng$strf$core$trunc_right(len){
return (function (x){
var l = cljs.core.count(x);
if((l <= len)){
return x;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(x,(l - len));
}
});
});
thi.ng.strf.core.format = (function thi$ng$strf$core$format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33797 = arguments.length;
var i__5770__auto___33798 = (0);
while(true){
if((i__5770__auto___33798 < len__5769__auto___33797)){
args__5775__auto__.push((arguments[i__5770__auto___33798]));

var G__33799 = (i__5770__auto___33798 + (1));
i__5770__auto___33798 = G__33799;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var s = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var fmt__$1 = fmt;
var args__$1 = args;
while(true){
var temp__5802__auto__ = cljs.core.first(fmt__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
if(typeof f === 'string'){
var G__33800 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(s,f);
var G__33801 = cljs.core.next(fmt__$1);
var G__33802 = args__$1;
s = G__33800;
fmt__$1 = G__33801;
args__$1 = G__33802;
continue;
} else {
var G__33803 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(s,(function (){var G__33560 = cljs.core.first(args__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33560) : f.call(null,G__33560));
})());
var G__33804 = cljs.core.next(fmt__$1);
var G__33805 = cljs.core.next(args__$1);
s = G__33803;
fmt__$1 = G__33804;
args__$1 = G__33805;
continue;
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.persistent_BANG_(s));
}
break;
}
}));

(thi.ng.strf.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(thi.ng.strf.core.format.cljs$lang$applyTo = (function (seq33529){
var G__33530 = cljs.core.first(seq33529);
var seq33529__$1 = cljs.core.next(seq33529);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33530,seq33529__$1);
}));

thi.ng.strf.core.date_fields = (function thi$ng$strf$core$date_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getFullYear(),(d.getMonth() + (1)),d.getDate()], null)], null);
});
thi.ng.strf.core.time_fields = (function thi$ng$strf$core$time_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getHours(),d.getMinutes(),d.getSeconds()], null)], null);
});
thi.ng.strf.core.datetime_fields = (function thi$ng$strf$core$datetime_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getFullYear(),(d.getMonth() + (1)),d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds()], null)], null);
});
thi.ng.strf.core.date_formatters = (function (){var d2 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(thi.ng.strf.core.pad_left((2),"0"),cljs.core.str);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"yyyy-mm-dd","yyyy-mm-dd",1870000488),(function (d){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,"-",d2,"-",d2], null),thi.ng.strf.core.date_fields(d));
}),new cljs.core.Keyword(null,"yyyy-mm-dd-hh-mm-ss","yyyy-mm-dd-hh-mm-ss",515818629),(function (d){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,"-",d2,"-",d2," ",d2,":",d2,":",d2], null),thi.ng.strf.core.datetime_fields(d));
}),new cljs.core.Keyword(null,"yyyymmdd-hhmmss","yyyymmdd-hhmmss",1691759860),(function (d){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,d2,d2,"-",d2,d2,d2], null),thi.ng.strf.core.datetime_fields(d));
}),new cljs.core.Keyword(null,"dd-mm-yyyy","dd-mm-yyyy",-705729643),(function (d){
var vec__33586 = thi.ng.strf.core.date_fields(d);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33586,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33586,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33586,(2),null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.str], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d__$1,m,y], 0));
}),new cljs.core.Keyword(null,"mm-dd-yyyy","mm-dd-yyyy",-911118576),(function (d){
var vec__33608 = thi.ng.strf.core.date_fields(d);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33608,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33608,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33608,(2),null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.str], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,d__$1,y], 0));
}),new cljs.core.Keyword(null,"dd-mm-yy","dd-mm-yy",-664945286),(function (d){
var vec__33617 = thi.ng.strf.core.date_fields(d);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33617,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33617,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33617,(2),null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.comp.cljs$core$IFn$_invoke$arity$2(d2,(function (p1__33582_SHARP_){
return cljs.core.mod(p1__33582_SHARP_,(100));
}))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d__$1,m,y], 0));
}),new cljs.core.Keyword(null,"hh-mm-ss","hh-mm-ss",1000840174),(function (d){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,":",d2,":",d2], null),thi.ng.strf.core.time_fields(d));
})], null);
})();
thi.ng.strf.core.format_date = (function thi$ng$strf$core$format_date(var_args){
var G__33642 = arguments.length;
switch (G__33642) {
case 1:
return thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$1 = (function (d){
var fexpr__33650 = (thi.ng.strf.core.date_formatters.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.date_formatters.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"yyyy-mm-dd-hh-mm-ss","yyyy-mm-dd-hh-mm-ss",515818629)) : thi.ng.strf.core.date_formatters.call(null,new cljs.core.Keyword(null,"yyyy-mm-dd-hh-mm-ss","yyyy-mm-dd-hh-mm-ss",515818629)));
return (fexpr__33650.cljs$core$IFn$_invoke$arity$1 ? fexpr__33650.cljs$core$IFn$_invoke$arity$1(d) : fexpr__33650.call(null,d));
}));

(thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$2 = (function (fmt,d){
if(cljs.core.fn_QMARK_(fmt)){
return (fmt.cljs$core$IFn$_invoke$arity$1 ? fmt.cljs$core$IFn$_invoke$arity$1(d) : fmt.call(null,d));
} else {
var fexpr__33654 = (thi.ng.strf.core.date_formatters.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.date_formatters.cljs$core$IFn$_invoke$arity$1(fmt) : thi.ng.strf.core.date_formatters.call(null,fmt));
return (fexpr__33654.cljs$core$IFn$_invoke$arity$1 ? fexpr__33654.cljs$core$IFn$_invoke$arity$1(d) : fexpr__33654.call(null,d));
}
}));

(thi.ng.strf.core.format_date.cljs$lang$maxFixedArity = 2);

thi.ng.strf.core.now = (function thi$ng$strf$core$now(){
return (new Date());
});
thi.ng.strf.core.timestamp = (function thi$ng$strf$core$timestamp(){
return (new Date()).getTime();
});
thi.ng.strf.core.format_16bit_hex = thi.ng.strf.core.pad_left((4),"0");
thi.ng.strf.core.rand_bits = (function thi$ng$strf$core$rand_bits(bits){
var G__33669 = (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * ((1) << bits));
return (thi.ng.strf.core.int$.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.int$.cljs$core$IFn$_invoke$arity$1(G__33669) : thi.ng.strf.core.int$.call(null,G__33669));
});
thi.ng.strf.core.rand_bits_hex = (function thi$ng$strf$core$rand_bits_hex(bits){
var G__33689 = thi.ng.strf.core.rand_bits(bits).toString((16));
var fexpr__33688 = thi.ng.strf.core.pad_left(Math.ceil((bits / (4))),"0");
return (fexpr__33688.cljs$core$IFn$_invoke$arity$1 ? fexpr__33688.cljs$core$IFn$_invoke$arity$1(G__33689) : fexpr__33688.call(null,G__33689));
});
thi.ng.strf.core.rand_16bits_hex = (function thi$ng$strf$core$rand_16bits_hex(){
var G__33704 = cljs.core.rand_int((65536)).toString((16));
return (thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1(G__33704) : thi.ng.strf.core.format_16bit_hex.call(null,G__33704));
});
thi.ng.strf.core.new_uuid = (function thi$ng$strf$core$new_uuid(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__33721 = ((thi.ng.strf.core.rand_bits((16)) & (4095)) | (16384)).toString((16));
return (thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1(G__33721) : thi.ng.strf.core.format_16bit_hex.call(null,G__33721));
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__33722 = ((thi.ng.strf.core.rand_bits((16)) & (16383)) | (32768)).toString((16));
return (thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1(G__33722) : thi.ng.strf.core.format_16bit_hex.call(null,G__33722));
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex())].join('');
});
thi.ng.strf.core.html_entities = new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;","<","&lt;",">","&gt;","\"","&quot;"], null);
thi.ng.strf.core.as_str = (function thi$ng$strf$core$as_str(x){
if((((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)))){
return cljs.core.name(x);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}
});
thi.ng.strf.core.escape_html = (function thi$ng$strf$core$escape_html(x){
return clojure.string.escape(thi.ng.strf.core.as_str(x),thi.ng.strf.core.html_entities);
});

//# sourceMappingURL=thi.ng.strf.core.js.map
