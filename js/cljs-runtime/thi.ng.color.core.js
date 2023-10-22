goog.provide('thi.ng.color.core');







thi.ng.color.core.hex6 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#",thi.ng.strf.core.hex((6))], null);
thi.ng.color.core.ns_prefix = "#thi.ng.color.core.";

/**
 * @interface
 */
thi.ng.color.core.IRGBConvert = function(){};

var thi$ng$color$core$IRGBConvert$as_rgba$dyn_35972 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.as_rgba[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (thi.ng.color.core.as_rgba["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IRGBConvert.as-rgba",_);
}
}
});
thi.ng.color.core.as_rgba = (function thi$ng$color$core$as_rgba(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 == null)))))){
return _.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(_);
} else {
return thi$ng$color$core$IRGBConvert$as_rgba$dyn_35972(_);
}
});


/**
 * @interface
 */
thi.ng.color.core.IHSVConvert = function(){};

var thi$ng$color$core$IHSVConvert$as_hsva$dyn_35973 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.as_hsva[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (thi.ng.color.core.as_hsva["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IHSVConvert.as-hsva",_);
}
}
});
thi.ng.color.core.as_hsva = (function thi$ng$color$core$as_hsva(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 == null)))))){
return _.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(_);
} else {
return thi$ng$color$core$IHSVConvert$as_hsva$dyn_35973(_);
}
});


/**
 * @interface
 */
thi.ng.color.core.IHSLConvert = function(){};

var thi$ng$color$core$IHSLConvert$as_hsla$dyn_35974 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.as_hsla[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (thi.ng.color.core.as_hsla["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IHSLConvert.as-hsla",_);
}
}
});
thi.ng.color.core.as_hsla = (function thi$ng$color$core$as_hsla(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 == null)))))){
return _.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(_);
} else {
return thi$ng$color$core$IHSLConvert$as_hsla$dyn_35974(_);
}
});


/**
 * @interface
 */
thi.ng.color.core.ICMYKConvert = function(){};

var thi$ng$color$core$ICMYKConvert$as_cmyka$dyn_35975 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.as_cmyka[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (thi.ng.color.core.as_cmyka["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICMYKConvert.as-cmyka",_);
}
}
});
thi.ng.color.core.as_cmyka = (function thi$ng$color$core$as_cmyka(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 == null)))))){
return _.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(_);
} else {
return thi$ng$color$core$ICMYKConvert$as_cmyka$dyn_35975(_);
}
});


/**
 * @interface
 */
thi.ng.color.core.ICSSConvert = function(){};

var thi$ng$color$core$ICSSConvert$as_css$dyn_35976 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.as_css[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (thi.ng.color.core.as_css["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICSSConvert.as-css",_);
}
}
});
thi.ng.color.core.as_css = (function thi$ng$color$core$as_css(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$ICSSConvert$as_css$arity$1 == null)))))){
return _.thi$ng$color$core$ICSSConvert$as_css$arity$1(_);
} else {
return thi$ng$color$core$ICSSConvert$as_css$dyn_35976(_);
}
});


/**
 * @interface
 */
thi.ng.color.core.IIntConvert = function(){};

var thi$ng$color$core$IIntConvert$as_int24$dyn_35977 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.as_int24[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (thi.ng.color.core.as_int24["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IIntConvert.as-int24",_);
}
}
});
thi.ng.color.core.as_int24 = (function thi$ng$color$core$as_int24(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IIntConvert$as_int24$arity$1 == null)))))){
return _.thi$ng$color$core$IIntConvert$as_int24$arity$1(_);
} else {
return thi$ng$color$core$IIntConvert$as_int24$dyn_35977(_);
}
});

var thi$ng$color$core$IIntConvert$as_int32$dyn_35978 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.as_int32[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (thi.ng.color.core.as_int32["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IIntConvert.as-int32",_);
}
}
});
thi.ng.color.core.as_int32 = (function thi$ng$color$core$as_int32(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IIntConvert$as_int32$arity$1 == null)))))){
return _.thi$ng$color$core$IIntConvert$as_int32$arity$1(_);
} else {
return thi$ng$color$core$IIntConvert$as_int32$dyn_35978(_);
}
});


/**
 * @interface
 */
thi.ng.color.core.IColorComponents = function(){};

var thi$ng$color$core$IColorComponents$red$dyn_35979 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.red[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (thi.ng.color.core.red["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.red",_);
}
}
});
thi.ng.color.core.red = (function thi$ng$color$core$red(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$red$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$red$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$red$dyn_35979(_);
}
});

var thi$ng$color$core$IColorComponents$green$dyn_35980 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.green[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (thi.ng.color.core.green["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.green",_);
}
}
});
thi.ng.color.core.green = (function thi$ng$color$core$green(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$green$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$green$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$green$dyn_35980(_);
}
});

var thi$ng$color$core$IColorComponents$blue$dyn_35981 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.blue[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (thi.ng.color.core.blue["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.blue",_);
}
}
});
thi.ng.color.core.blue = (function thi$ng$color$core$blue(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$blue$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$blue$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$blue$dyn_35981(_);
}
});

var thi$ng$color$core$IColorComponents$alpha$dyn_35982 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.alpha[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (thi.ng.color.core.alpha["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.alpha",_);
}
}
});
thi.ng.color.core.alpha = (function thi$ng$color$core$alpha(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$alpha$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$alpha$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$alpha$dyn_35982(_);
}
});

var thi$ng$color$core$IColorComponents$hue$dyn_35983 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.hue[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (thi.ng.color.core.hue["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.hue",_);
}
}
});
thi.ng.color.core.hue = (function thi$ng$color$core$hue(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$hue$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$hue$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$hue$dyn_35983(_);
}
});

var thi$ng$color$core$IColorComponents$saturation$dyn_35984 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.saturation[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (thi.ng.color.core.saturation["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.saturation",_);
}
}
});
thi.ng.color.core.saturation = (function thi$ng$color$core$saturation(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$saturation$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$saturation$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$saturation$dyn_35984(_);
}
});

var thi$ng$color$core$IColorComponents$brightness$dyn_35985 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.brightness[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (thi.ng.color.core.brightness["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.brightness",_);
}
}
});
thi.ng.color.core.brightness = (function thi$ng$color$core$brightness(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$brightness$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$brightness$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$brightness$dyn_35985(_);
}
});

var thi$ng$color$core$IColorComponents$luminance$dyn_35986 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.luminance[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (thi.ng.color.core.luminance["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.luminance",_);
}
}
});
thi.ng.color.core.luminance = (function thi$ng$color$core$luminance(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$luminance$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$luminance$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$luminance$dyn_35986(_);
}
});

var thi$ng$color$core$IColorComponents$cyan$dyn_35987 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.cyan[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (thi.ng.color.core.cyan["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.cyan",_);
}
}
});
thi.ng.color.core.cyan = (function thi$ng$color$core$cyan(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$cyan$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$cyan$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$cyan$dyn_35987(_);
}
});

var thi$ng$color$core$IColorComponents$magenta$dyn_35988 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.magenta[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (thi.ng.color.core.magenta["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.magenta",_);
}
}
});
thi.ng.color.core.magenta = (function thi$ng$color$core$magenta(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$magenta$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$magenta$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$magenta$dyn_35988(_);
}
});

var thi$ng$color$core$IColorComponents$yellow$dyn_35989 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.yellow[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (thi.ng.color.core.yellow["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.yellow",_);
}
}
});
thi.ng.color.core.yellow = (function thi$ng$color$core$yellow(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$yellow$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$yellow$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$yellow$dyn_35989(_);
}
});

var thi$ng$color$core$IColorComponents$black$dyn_35990 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.black[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (thi.ng.color.core.black["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.black",_);
}
}
});
thi.ng.color.core.black = (function thi$ng$color$core$black(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$black$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$black$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$black$dyn_35990(_);
}
});


/**
 * @interface
 */
thi.ng.color.core.IColorOps = function(){};

var thi$ng$color$core$IColorOps$rotate_hue$dyn_35991 = (function (_,theta){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.rotate_hue[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,theta) : m__5394__auto__.call(null,_,theta));
} else {
var m__5392__auto__ = (thi.ng.color.core.rotate_hue["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,theta) : m__5392__auto__.call(null,_,theta));
} else {
throw cljs.core.missing_protocol("IColorOps.rotate-hue",_);
}
}
});
/**
 * Rotate hue by radians.
 */
thi.ng.color.core.rotate_hue = (function thi$ng$color$core$rotate_hue(_,theta){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorOps$rotate_hue$arity$2 == null)))))){
return _.thi$ng$color$core$IColorOps$rotate_hue$arity$2(_,theta);
} else {
return thi$ng$color$core$IColorOps$rotate_hue$dyn_35991(_,theta);
}
});

var thi$ng$color$core$IColorOps$adjust_saturation$dyn_35992 = (function (_,offset){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.adjust_saturation[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__5394__auto__.call(null,_,offset));
} else {
var m__5392__auto__ = (thi.ng.color.core.adjust_saturation["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__5392__auto__.call(null,_,offset));
} else {
throw cljs.core.missing_protocol("IColorOps.adjust-saturation",_);
}
}
});
/**
 * Adjust saturation up or down, clamping result to 0.0-1.0
 */
thi.ng.color.core.adjust_saturation = (function thi$ng$color$core$adjust_saturation(_,offset){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 == null)))))){
return _.thi$ng$color$core$IColorOps$adjust_saturation$arity$2(_,offset);
} else {
return thi$ng$color$core$IColorOps$adjust_saturation$dyn_35992(_,offset);
}
});

var thi$ng$color$core$IColorOps$adjust_brightness$dyn_35993 = (function (_,offset){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.adjust_brightness[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__5394__auto__.call(null,_,offset));
} else {
var m__5392__auto__ = (thi.ng.color.core.adjust_brightness["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__5392__auto__.call(null,_,offset));
} else {
throw cljs.core.missing_protocol("IColorOps.adjust-brightness",_);
}
}
});
/**
 * Adjust brightness (per HSV norms) up or down, clamping result to 0.0-1.0
 */
thi.ng.color.core.adjust_brightness = (function thi$ng$color$core$adjust_brightness(_,offset){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 == null)))))){
return _.thi$ng$color$core$IColorOps$adjust_brightness$arity$2(_,offset);
} else {
return thi$ng$color$core$IColorOps$adjust_brightness$dyn_35993(_,offset);
}
});

var thi$ng$color$core$IColorOps$adjust_luminance$dyn_35994 = (function (_,offset){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.adjust_luminance[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__5394__auto__.call(null,_,offset));
} else {
var m__5392__auto__ = (thi.ng.color.core.adjust_luminance["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__5392__auto__.call(null,_,offset));
} else {
throw cljs.core.missing_protocol("IColorOps.adjust-luminance",_);
}
}
});
/**
 * Adjust lightness (per HSL) up or down, clamping result to 0.0-1.0
 */
thi.ng.color.core.adjust_luminance = (function thi$ng$color$core$adjust_luminance(_,offset){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorOps$adjust_luminance$arity$2 == null)))))){
return _.thi$ng$color$core$IColorOps$adjust_luminance$arity$2(_,offset);
} else {
return thi$ng$color$core$IColorOps$adjust_luminance$dyn_35994(_,offset);
}
});

var thi$ng$color$core$IColorOps$adjust_alpha$dyn_35995 = (function (_,offset){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (thi.ng.color.core.adjust_alpha[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__5394__auto__.call(null,_,offset));
} else {
var m__5392__auto__ = (thi.ng.color.core.adjust_alpha["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__5392__auto__.call(null,_,offset));
} else {
throw cljs.core.missing_protocol("IColorOps.adjust-alpha",_);
}
}
});
/**
 * Adjust alpha up or down, clamping result to 0.0-1.0
 */
thi.ng.color.core.adjust_alpha = (function thi$ng$color$core$adjust_alpha(_,offset){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 == null)))))){
return _.thi$ng$color$core$IColorOps$adjust_alpha$arity$2(_,offset);
} else {
return thi$ng$color$core$IColorOps$adjust_alpha$dyn_35995(_,offset);
}
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.RGBA = (function (r,g,b,a,__meta,__extmap,__hash){
this.r = r;
this.g = g;
this.b = b;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.color.core.RGBA.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.typedarrays.core.float32(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.r,self__.g,self__.b,self__.a], null));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35734,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35738 = k35734;
var G__35738__$1 = (((G__35738 instanceof cljs.core.Keyword))?G__35738.fqn:null);
switch (G__35738__$1) {
case "r":
return self__.r;

break;
case "g":
return self__.g;

break;
case "b":
return self__.b;

break;
case "a":
return self__.a;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35734,else__5346__auto__);

}
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35739){
var vec__35740 = p__35739;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35740,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35740,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__35743 = ((((((thi.ng.math.core.clamp01(self__.r) * (255)) + 0.5) | (0)) << (16)) | ((((thi.ng.math.core.clamp01(self__.g) * (255)) + 0.5) | (0)) << (8))) | (((thi.ng.math.core.clamp01(self__.b) * (255)) + 0.5) | (0)));
return (thi.ng.color.core.int24.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.int24.cljs$core$IFn$_invoke$arity$1(G__35743) : thi.ng.color.core.int24.call(null,G__35743));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__35744 = (((((((thi.ng.math.core.clamp01(self__.r) * (255)) + 0.5) | (0)) << (16)) | ((((thi.ng.math.core.clamp01(self__.g) * (255)) + 0.5) | (0)) << (8))) | (((thi.ng.math.core.clamp01(self__.b) * (255)) + 0.5) | (0))) | ((((thi.ng.math.core.clamp01(self__.a) * (255)) + 0.5) | (0)) << (24)));
return (thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1(G__35744) : thi.ng.color.core.int32.call(null,G__35744));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#thi.ng.color.core.RGBA{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"g","g",1738089905),self__.g],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"b","b",1482224470),self__.b],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35733){
var self__ = this;
var G__35733__$1 = this;
return (new cljs.core.RecordIter((0),G__35733__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"a","a",-2123407586)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((1.0 - self__.r),(1.0 - self__.g),(1.0 - self__.b),self__.a,null,null,null));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (171696367 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35735,other35736){
var self__ = this;
var this35735__$1 = this;
return (((!((other35736 == null)))) && ((((this35735__$1.constructor === other35736.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35735__$1.r,other35736.r)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35735__$1.g,other35736.g)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35735__$1.b,other35736.b)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35735__$1.a,other35736.a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35735__$1.__extmap,other35736.__extmap)))))))))))));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
(dest[idx] = self__.r);

(dest[(idx + (1))] = self__.g);

(dest[(idx + (2))] = self__.b);

(dest[(idx + (3))] = self__.a);

return (idx + stride);
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba(thi.ng.color.core.rotate_hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),theta));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba(thi.ng.color.core.adjust_saturation(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba(thi.ng.color.core.adjust_brightness(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_luminance$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba(thi.ng.color.core.adjust_luminance(___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null),offset));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,thi.ng.math.core.clamp01((self__.a + offset)),null,null,null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.a < 1.0)){
var r__$1 = ((255) * thi.ng.math.core.clamp01(self__.r));
var g__$1 = ((255) * thi.ng.math.core.clamp01(self__.g));
var b__$1 = ((255) * thi.ng.math.core.clamp01(self__.b));
var G__35745 = ["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((r__$1 | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((g__$1 | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((b__$1 | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__5130__auto__ = 0.0;
var y__5131__auto__ = self__.a;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})()),")"].join('');
return (thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1(G__35745) : thi.ng.color.core.css.call(null,G__35745));
} else {
return thi.ng.color.core.as_css(___$1.thi$ng$color$core$IIntConvert$as_int24$arity$1(null));
}
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var v = (function (){var x__5130__auto__ = (function (){var x__5130__auto__ = self__.r;
var y__5131__auto__ = self__.g;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var y__5131__auto__ = self__.b;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,v))){
return 0.0;
} else {
return ((v - (function (){var x__5133__auto__ = (function (){var x__5133__auto__ = self__.r;
var y__5134__auto__ = self__.g;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var y__5134__auto__ = self__.b;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})()) / v);
}
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.g;
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var x__5130__auto__ = (function (){var x__5130__auto__ = self__.r;
var y__5131__auto__ = self__.g;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var y__5131__auto__ = self__.b;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (((0.299 * self__.r) + (0.587 * self__.g)) + (0.114 * self__.b));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.r;
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.b;
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"g","g",1738089905),null,new cljs.core.Keyword(null,"b","b",1482224470),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_rgba(dest);
return (new thi.ng.color.core.RGBA((function (){var a__35324__auto__ = self__.r;
return (((dest__$1.r - a__35324__auto__) * t) + a__35324__auto__);
})(),(function (){var a__35324__auto__ = self__.g;
return (((dest__$1.g - a__35324__auto__) * t) + a__35324__auto__);
})(),(function (){var a__35324__auto__ = self__.b;
return (((dest__$1.b - a__35324__auto__) * t) + a__35324__auto__);
})(),(function (){var a__35324__auto__ = self__.a;
return (((dest__$1.a - a__35324__auto__) * t) + a__35324__auto__);
})(),null,null,null));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35734){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35746 = k35734;
var G__35746__$1 = (((G__35746 instanceof cljs.core.Keyword))?G__35746.fqn:null);
switch (G__35746__$1) {
case "r":
case "g":
case "b":
case "a":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35734);

}
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35733){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35747 = cljs.core.keyword_identical_QMARK_;
var expr__35748 = k__5352__auto__;
if(cljs.core.truth_((pred__35747.cljs$core$IFn$_invoke$arity$2 ? pred__35747.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"r","r",-471384190),expr__35748) : pred__35747.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__35748)))){
return (new thi.ng.color.core.RGBA(G__35733,self__.g,self__.b,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35747.cljs$core$IFn$_invoke$arity$2 ? pred__35747.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"g","g",1738089905),expr__35748) : pred__35747.call(null,new cljs.core.Keyword(null,"g","g",1738089905),expr__35748)))){
return (new thi.ng.color.core.RGBA(self__.r,G__35733,self__.b,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35747.cljs$core$IFn$_invoke$arity$2 ? pred__35747.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"b","b",1482224470),expr__35748) : pred__35747.call(null,new cljs.core.Keyword(null,"b","b",1482224470),expr__35748)))){
return (new thi.ng.color.core.RGBA(self__.r,self__.g,G__35733,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35747.cljs$core$IFn$_invoke$arity$2 ? pred__35747.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"a","a",-2123407586),expr__35748) : pred__35747.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__35748)))){
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,G__35733,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35733),null));
}
}
}
}
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"r","r",-471384190),self__.r,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"g","g",1738089905),self__.g,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"b","b",1482224470),self__.b,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"a","a",-2123407586),self__.a,null))], null),self__.__extmap));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var r__$1 = thi.ng.math.core.clamp01(self__.r);
var g__$1 = thi.ng.math.core.clamp01(self__.g);
var b__$1 = thi.ng.math.core.clamp01(self__.b);
var v = (function (){var x__5130__auto__ = (function (){var x__5130__auto__ = r__$1;
var y__5131__auto__ = g__$1;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var y__5131__auto__ = b__$1;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var d = (v - (function (){var x__5133__auto__ = (function (){var x__5133__auto__ = r__$1;
var y__5134__auto__ = g__$1;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var y__5134__auto__ = b__$1;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})());
var s = (cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,v))?0.0:(d / v));
var h = (cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,s))?0.0:(function (){var pred__35750 = cljs.core._EQ__EQ_;
var expr__35751 = v;
if(cljs.core.truth_((pred__35750.cljs$core$IFn$_invoke$arity$2 ? pred__35750.cljs$core$IFn$_invoke$arity$2(r__$1,expr__35751) : pred__35750.call(null,r__$1,expr__35751)))){
return ((g__$1 - b__$1) / d);
} else {
if(cljs.core.truth_((pred__35750.cljs$core$IFn$_invoke$arity$2 ? pred__35750.cljs$core$IFn$_invoke$arity$2(g__$1,expr__35751) : pred__35750.call(null,g__$1,expr__35751)))){
return (2.0 + ((b__$1 - r__$1) / d));
} else {
return (4.0 + ((r__$1 - g__$1) / d));
}
}
})());
var h__$1 = (h / 6.0);
var G__35753 = (((h__$1 < (0)))?(h__$1 + (1)):h__$1);
var G__35754 = s;
var G__35755 = v;
var G__35756 = thi.ng.math.core.clamp01(self__.a);
return (thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$4 ? thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$4(G__35753,G__35754,G__35755,G__35756) : thi.ng.color.core.hsva.call(null,G__35753,G__35754,G__35755,G__35756));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35733){
var self__ = this;
var this__5342__auto____$1 = this;
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,G__35733,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (1.0 - thi.ng.math.core.clamp01(self__.r));
var m = (1.0 - thi.ng.math.core.clamp01(self__.g));
var y = (1.0 - thi.ng.math.core.clamp01(self__.b));
var k = (function (){var x__5133__auto__ = (function (){var x__5133__auto__ = c;
var y__5134__auto__ = m;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var y__5134__auto__ = y;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var G__35757 = (function (){var x__5130__auto__ = (c - k);
var y__5131__auto__ = 0.0;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var G__35758 = (function (){var x__5130__auto__ = (m - k);
var y__5131__auto__ = 0.0;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var G__35759 = (function (){var x__5130__auto__ = (y - k);
var y__5131__auto__ = 0.0;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var G__35760 = (function (){var x__5130__auto__ = k;
var y__5131__auto__ = 0.0;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var G__35761 = thi.ng.math.core.clamp01(self__.a);
return (thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$5 ? thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$5(G__35757,G__35758,G__35759,G__35760,G__35761) : thi.ng.color.core.cmyka.call(null,G__35757,G__35758,G__35759,G__35760,G__35761));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.r,self__.g,self__.b,self__.a], null);
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var r__$1 = thi.ng.math.core.clamp01(self__.r);
var g__$1 = thi.ng.math.core.clamp01(self__.g);
var b__$1 = thi.ng.math.core.clamp01(self__.b);
var a__$1 = thi.ng.math.core.clamp01(self__.a);
var f1 = (function (){var x__5133__auto__ = (function (){var x__5133__auto__ = r__$1;
var y__5134__auto__ = g__$1;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var y__5134__auto__ = b__$1;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var f2 = (function (){var x__5130__auto__ = (function (){var x__5130__auto__ = r__$1;
var y__5131__auto__ = g__$1;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var y__5131__auto__ = b__$1;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var l = ((f1 + f2) * 0.5);
var d = (f2 - f1);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,d))){
return (thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4 ? thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4(0.0,0.0,l,a__$1) : thi.ng.color.core.hsla.call(null,0.0,0.0,l,a__$1));
} else {
var s = (((l < 0.5))?(d / (f1 + f2)):(d / ((2.0 - f2) - f1)));
var d2 = (0.5 * d);
var dr = ((((f2 - r__$1) * thi.ng.math.core.SIXTH) + d2) / d);
var dg = ((((f2 - g__$1) * thi.ng.math.core.SIXTH) + d2) / d);
var db = ((((f2 - b__$1) * thi.ng.math.core.SIXTH) + d2) / d);
var h = (function (){var pred__35762 = cljs.core._EQ__EQ_;
var expr__35763 = f2;
if(cljs.core.truth_((pred__35762.cljs$core$IFn$_invoke$arity$2 ? pred__35762.cljs$core$IFn$_invoke$arity$2(r__$1,expr__35763) : pred__35762.call(null,r__$1,expr__35763)))){
return (db - dg);
} else {
if(cljs.core.truth_((pred__35762.cljs$core$IFn$_invoke$arity$2 ? pred__35762.cljs$core$IFn$_invoke$arity$2(g__$1,expr__35763) : pred__35762.call(null,g__$1,expr__35763)))){
return ((thi.ng.math.core.THIRD + dr) - db);
} else {
return ((thi.ng.math.core.TWO_THIRD + dg) - dr);
}
}
})();
var h__$1 = (((h < (0)))?(h + (1)):(((h >= 1.0))?(h - (1)):h));
return (thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4 ? thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4(h__$1,s,l,a__$1) : thi.ng.color.core.hsla.call(null,h__$1,s,l,a__$1));
}
}));

(thi.ng.color.core.RGBA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
}));

(thi.ng.color.core.RGBA.cljs$lang$type = true);

(thi.ng.color.core.RGBA.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"thi.ng.color.core/RGBA",null,(1),null));
}));

(thi.ng.color.core.RGBA.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"thi.ng.color.core/RGBA");
}));

/**
 * Positional factory function for thi.ng.color.core/RGBA.
 */
thi.ng.color.core.__GT_RGBA = (function thi$ng$color$core$__GT_RGBA(r,g,b,a){
return (new thi.ng.color.core.RGBA(r,g,b,a,null,null,null));
});

/**
 * Factory function for thi.ng.color.core/RGBA, taking a map of keywords to field values.
 */
thi.ng.color.core.map__GT_RGBA = (function thi$ng$color$core$map__GT_RGBA(G__35737){
var extmap__5385__auto__ = (function (){var G__35765 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35737,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"a","a",-2123407586)], 0));
if(cljs.core.record_QMARK_(G__35737)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35765);
} else {
return G__35765;
}
})();
return (new thi.ng.color.core.RGBA(new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__35737),new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(G__35737),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(G__35737),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__35737),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.Int24 = (function (col,__meta,__extmap,__hash){
this.col = col;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.color.core.Int24.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(thi.ng.color.core.Int24.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35767,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35771 = k35767;
var G__35771__$1 = (((G__35771 instanceof cljs.core.Keyword))?G__35771.fqn:null);
switch (G__35771__$1) {
case "col":
return self__.col;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35767,else__5346__auto__);

}
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35772){
var vec__35773 = p__35772;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35773,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35773,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__35776 = (self__.col | (4278190080));
return (thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1(G__35776) : thi.ng.color.core.int32.call(null,G__35776));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#thi.ng.color.core.Int24{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35766){
var self__ = this;
var G__35766__$1 = this;
return (new cljs.core.RecordIter((0),G__35766__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.color.core.Int24.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new thi.ng.color.core.Int24(self__.col,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.Int24((self__.col ^ (16777215)),null,null,null));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-586101510 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35768,other35769){
var self__ = this;
var this35768__$1 = this;
return (((!((other35769 == null)))) && ((((this35768__$1.constructor === other35769.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35768__$1.col,other35769.col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35768__$1.__extmap,other35769.__extmap)))))));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null),dest,stride,idx);
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(thi.ng.color.core.rotate_hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),theta));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(thi.ng.color.core.adjust_saturation(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(thi.ng.color.core.adjust_brightness(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_luminance$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(thi.ng.color.core.adjust_luminance(___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null),offset));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.adjust_alpha(___$1.thi$ng$color$core$IIntConvert$as_int32$arity$1(null),offset);
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__35777 = thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(thi.ng.color.core.hex6,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(self__.col & (16777215))], 0));
return (thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1(G__35777) : thi.ng.color.core.css.call(null,G__35777));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >> (8)) & (255)));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >> (16)) & (255)));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * (self__.col & (255)));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((thi.ng.math.core.INV8BIT * ((self__.col >> (16)) & (255))),(thi.ng.math.core.INV8BIT * ((self__.col >> (8)) & (255))),(thi.ng.math.core.INV8BIT * (self__.col & (255))),1.0,null,null,null));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col","col",-1959363084),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new thi.ng.color.core.Int24(self__.col,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var r = ((self__.col >> (16)) & (255));
var g = ((self__.col >> (8)) & (255));
var b = (self__.col & (255));
var dest__$1 = thi.ng.color.core.as_rgba(dest);
return (new thi.ng.color.core.Int24((((((0.5 + (function (){var a__35324__auto__ = r;
return ((((dest__$1.r * (255)) - a__35324__auto__) * t) + a__35324__auto__);
})()) | (0)) << (16)) | (((0.5 + (function (){var a__35324__auto__ = g;
return ((((dest__$1.g * (255)) - a__35324__auto__) * t) + a__35324__auto__);
})()) | (0)) << (8))) | ((0.5 + (function (){var a__35324__auto__ = b;
return ((((dest__$1.b * (255)) - a__35324__auto__) * t) + a__35324__auto__);
})()) | (0))),null,null,null));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35767){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35778 = k35767;
var G__35778__$1 = (((G__35778 instanceof cljs.core.Keyword))?G__35778.fqn:null);
switch (G__35778__$1) {
case "col":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35767);

}
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35766){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35779 = cljs.core.keyword_identical_QMARK_;
var expr__35780 = k__5352__auto__;
if(cljs.core.truth_((pred__35779.cljs$core$IFn$_invoke$arity$2 ? pred__35779.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"col","col",-1959363084),expr__35780) : pred__35779.call(null,new cljs.core.Keyword(null,"col","col",-1959363084),expr__35780)))){
return (new thi.ng.color.core.Int24(G__35766,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.Int24(self__.col,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35766),null));
}
}));

(thi.ng.color.core.Int24.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"col","col",-1959363084),self__.col,null))], null),self__.__extmap));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35766){
var self__ = this;
var this__5342__auto____$1 = this;
return (new thi.ng.color.core.Int24(self__.col,G__35766,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"col","col",-318831557,null)], null);
}));

(thi.ng.color.core.Int24.cljs$lang$type = true);

(thi.ng.color.core.Int24.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"thi.ng.color.core/Int24",null,(1),null));
}));

(thi.ng.color.core.Int24.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"thi.ng.color.core/Int24");
}));

/**
 * Positional factory function for thi.ng.color.core/Int24.
 */
thi.ng.color.core.__GT_Int24 = (function thi$ng$color$core$__GT_Int24(col){
return (new thi.ng.color.core.Int24(col,null,null,null));
});

/**
 * Factory function for thi.ng.color.core/Int24, taking a map of keywords to field values.
 */
thi.ng.color.core.map__GT_Int24 = (function thi$ng$color$core$map__GT_Int24(G__35770){
var extmap__5385__auto__ = (function (){var G__35782 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35770,new cljs.core.Keyword(null,"col","col",-1959363084));
if(cljs.core.record_QMARK_(G__35770)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35782);
} else {
return G__35782;
}
})();
return (new thi.ng.color.core.Int24(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(G__35770),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.Int32 = (function (col,__meta,__extmap,__hash){
this.col = col;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.color.core.Int32.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(thi.ng.color.core.Int32.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35784,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35788 = k35784;
var G__35788__$1 = (((G__35788 instanceof cljs.core.Keyword))?G__35788.fqn:null);
switch (G__35788__$1) {
case "col":
return self__.col;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35784,else__5346__auto__);

}
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35789){
var vec__35790 = p__35789;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35790,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35790,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.Int24((self__.col & (16777215)),null,null,null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#thi.ng.color.core.Int32{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35783){
var self__ = this;
var G__35783__$1 = this;
return (new cljs.core.RecordIter((0),G__35783__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.color.core.Int32.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new thi.ng.color.core.Int32(self__.col,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.Int32((self__.col ^ (16777215)),null,null,null));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (958597195 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35785,other35786){
var self__ = this;
var this35785__$1 = this;
return (((!((other35786 == null)))) && ((((this35785__$1.constructor === other35786.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35785__$1.col,other35786.col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35785__$1.__extmap,other35786.__extmap)))))));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null),dest,stride,idx);
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(thi.ng.color.core.rotate_hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),theta));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(thi.ng.color.core.adjust_saturation(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(thi.ng.color.core.adjust_brightness(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_luminance$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(thi.ng.color.core.adjust_luminance(___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null),offset));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
var a = (thi.ng.math.core.INV8BIT * ((self__.col >>> (24)) & (255)));
var a__$1 = (((255) * thi.ng.math.core.clamp01((a + offset))) | (0));
return (new thi.ng.color.core.Int32(((self__.col & (16777215)) | (a__$1 << (24))),null,null,null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((4278190080) === (self__.col & (4278190080)))){
var G__35793 = thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(thi.ng.color.core.hex6,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(self__.col & (16777215))], 0));
return (thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1(G__35793) : thi.ng.color.core.css.call(null,G__35793));
} else {
return thi.ng.color.core.as_css(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >> (8)) & (255)));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >> (16)) & (255)));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * (self__.col & (255)));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >>> (24)) & (255)));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((thi.ng.math.core.INV8BIT * ((self__.col >> (16)) & (255))),(thi.ng.math.core.INV8BIT * ((self__.col >> (8)) & (255))),(thi.ng.math.core.INV8BIT * (self__.col & (255))),(thi.ng.math.core.INV8BIT * ((self__.col >>> (24)) & (255))),null,null,null));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col","col",-1959363084),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new thi.ng.color.core.Int32(self__.col,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var r = ((self__.col >> (16)) & (255));
var g = ((self__.col >> (8)) & (255));
var b = (self__.col & (255));
var a = (self__.col >>> (24));
var dest__$1 = thi.ng.color.core.as_rgba(dest);
return (new thi.ng.color.core.Int32(((((((0.5 + (function (){var a__35324__auto__ = r;
return ((((dest__$1.r * (255)) - a__35324__auto__) * t) + a__35324__auto__);
})()) | (0)) << (16)) | (((0.5 + (function (){var a__35324__auto__ = g;
return ((((dest__$1.g * (255)) - a__35324__auto__) * t) + a__35324__auto__);
})()) | (0)) << (8))) | ((0.5 + (function (){var a__35324__auto__ = b;
return ((((dest__$1.b * (255)) - a__35324__auto__) * t) + a__35324__auto__);
})()) | (0))) | (((0.5 + (function (){var a__35324__auto__ = a;
return ((((dest__$1.a * (255)) - a__35324__auto__) * t) + a__35324__auto__);
})()) | (0)) << (24))),null,null,null));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35784){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35794 = k35784;
var G__35794__$1 = (((G__35794 instanceof cljs.core.Keyword))?G__35794.fqn:null);
switch (G__35794__$1) {
case "col":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35784);

}
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35783){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35795 = cljs.core.keyword_identical_QMARK_;
var expr__35796 = k__5352__auto__;
if(cljs.core.truth_((pred__35795.cljs$core$IFn$_invoke$arity$2 ? pred__35795.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"col","col",-1959363084),expr__35796) : pred__35795.call(null,new cljs.core.Keyword(null,"col","col",-1959363084),expr__35796)))){
return (new thi.ng.color.core.Int32(G__35783,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.Int32(self__.col,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35783),null));
}
}));

(thi.ng.color.core.Int32.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"col","col",-1959363084),self__.col,null))], null),self__.__extmap));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35783){
var self__ = this;
var this__5342__auto____$1 = this;
return (new thi.ng.color.core.Int32(self__.col,G__35783,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"col","col",-318831557,null)], null);
}));

(thi.ng.color.core.Int32.cljs$lang$type = true);

(thi.ng.color.core.Int32.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"thi.ng.color.core/Int32",null,(1),null));
}));

(thi.ng.color.core.Int32.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"thi.ng.color.core/Int32");
}));

/**
 * Positional factory function for thi.ng.color.core/Int32.
 */
thi.ng.color.core.__GT_Int32 = (function thi$ng$color$core$__GT_Int32(col){
return (new thi.ng.color.core.Int32(col,null,null,null));
});

/**
 * Factory function for thi.ng.color.core/Int32, taking a map of keywords to field values.
 */
thi.ng.color.core.map__GT_Int32 = (function thi$ng$color$core$map__GT_Int32(G__35787){
var extmap__5385__auto__ = (function (){var G__35798 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35787,new cljs.core.Keyword(null,"col","col",-1959363084));
if(cljs.core.record_QMARK_(G__35787)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35798);
} else {
return G__35798;
}
})();
return (new thi.ng.color.core.Int32(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(G__35787),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.HSVA = (function (h,s,v,a,__meta,__extmap,__hash){
this.h = h;
this.s = s;
this.v = v;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.color.core.HSVA.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.typedarrays.core.float32(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.v,self__.a], null));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35800,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35804 = k35800;
var G__35804__$1 = (((G__35804 instanceof cljs.core.Keyword))?G__35804.fqn:null);
switch (G__35804__$1) {
case "h":
return self__.h;

break;
case "s":
return self__.s;

break;
case "v":
return self__.v;

break;
case "a":
return self__.a;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35800,else__5346__auto__);

}
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35805){
var vec__35806 = p__35805;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35806,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35806,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#thi.ng.color.core.HSVA{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35799){
var self__ = this;
var G__35799__$1 = this;
return (new cljs.core.RecordIter((0),G__35799__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"a","a",-2123407586)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(cljs.core.mod((0.5 + self__.h),1.0),(1.0 - self__.s),(1.0 - self__.v),self__.a,null,null,null));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1912636902 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35801,other35802){
var self__ = this;
var this35801__$1 = this;
return (((!((other35802 == null)))) && ((((this35801__$1.constructor === other35802.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35801__$1.h,other35802.h)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35801__$1.s,other35802.s)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35801__$1.v,other35802.v)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35801__$1.a,other35802.a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35801__$1.__extmap,other35802.__extmap)))))))))))));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
(dest[idx] = self__.h);

(dest[(idx + (1))] = self__.s);

(dest[(idx + (2))] = self__.v);

(dest[(idx + (3))] = self__.a);

return (idx + stride);
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var h__$1 = (self__.h + (cljs.core.rem(theta,thi.ng.math.core.TWO_PI) / thi.ng.math.core.TWO_PI));
return (new thi.ng.color.core.HSVA((((h__$1 < (0)))?(h__$1 + (1)):(((h__$1 >= 1.0))?(h__$1 - (1)):h__$1)),self__.s,self__.v,self__.a,null,null,null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,thi.ng.math.core.clamp01((offset + self__.s)),self__.v,self__.a,null,null,null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,thi.ng.math.core.clamp01((offset + self__.v)),self__.a,null,null,null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_luminance$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva(thi.ng.color.core.adjust_luminance(___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null),offset));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,thi.ng.math.core.clamp01((offset + self__.a)),null,null,null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.as_hsla(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null)));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.h;
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.s;
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.v;
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,self__.s))){
return (new thi.ng.color.core.RGBA(self__.v,self__.v,self__.v,self__.a,null,null,null));
} else {
var h__$1 = cljs.core.rem((self__.h * 6.0),6.0);
var i = (h__$1 | (0));
var f = (h__$1 - i);
var p = (self__.v * (1.0 - self__.s));
var q = (self__.v * (1.0 - (self__.s * f)));
var t = (self__.v * (1.0 - ((1.0 - f) * self__.s)));
var G__35809 = i;
switch (G__35809) {
case (0):
return (new thi.ng.color.core.RGBA(self__.v,t,p,self__.a,null,null,null));

break;
case (1):
return (new thi.ng.color.core.RGBA(q,self__.v,p,self__.a,null,null,null));

break;
case (2):
return (new thi.ng.color.core.RGBA(p,self__.v,t,self__.a,null,null,null));

break;
case (3):
return (new thi.ng.color.core.RGBA(p,q,self__.v,self__.a,null,null,null));

break;
case (4):
return (new thi.ng.color.core.RGBA(t,p,self__.v,self__.a,null,null,null));

break;
default:
return (new thi.ng.color.core.RGBA(self__.v,p,q,self__.a,null,null,null));

}
}
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"v","v",21465059),null,new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"h","h",1109658740),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_hsva(dest);
var h2 = dest__$1.h;
var hd = thi.ng.math.core.abs_diff(self__.h,h2);
return (new thi.ng.color.core.HSVA((((hd > 0.5))?(((h2 > self__.h))?cljs.core.rem((function (){var a__35324__auto__ = (self__.h + (1));
return (((h2 - a__35324__auto__) * t) + a__35324__auto__);
})(),1.0):cljs.core.rem((function (){var a__35324__auto__ = self__.h;
return ((((h2 + (1)) - a__35324__auto__) * t) + a__35324__auto__);
})(),1.0)):(function (){var a__35324__auto__ = self__.h;
return (((h2 - a__35324__auto__) * t) + a__35324__auto__);
})()),(function (){var a__35324__auto__ = self__.s;
return (((dest__$1.s - a__35324__auto__) * t) + a__35324__auto__);
})(),(function (){var a__35324__auto__ = self__.v;
return (((dest__$1.v - a__35324__auto__) * t) + a__35324__auto__);
})(),(function (){var a__35324__auto__ = self__.a;
return (((dest__$1.a - a__35324__auto__) * t) + a__35324__auto__);
})(),null,null,null));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35800){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35810 = k35800;
var G__35810__$1 = (((G__35810 instanceof cljs.core.Keyword))?G__35810.fqn:null);
switch (G__35810__$1) {
case "h":
case "s":
case "v":
case "a":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35800);

}
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35799){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35811 = cljs.core.keyword_identical_QMARK_;
var expr__35812 = k__5352__auto__;
if(cljs.core.truth_((pred__35811.cljs$core$IFn$_invoke$arity$2 ? pred__35811.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35812) : pred__35811.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35812)))){
return (new thi.ng.color.core.HSVA(G__35799,self__.s,self__.v,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35811.cljs$core$IFn$_invoke$arity$2 ? pred__35811.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"s","s",1705939918),expr__35812) : pred__35811.call(null,new cljs.core.Keyword(null,"s","s",1705939918),expr__35812)))){
return (new thi.ng.color.core.HSVA(self__.h,G__35799,self__.v,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35811.cljs$core$IFn$_invoke$arity$2 ? pred__35811.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),expr__35812) : pred__35811.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__35812)))){
return (new thi.ng.color.core.HSVA(self__.h,self__.s,G__35799,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35811.cljs$core$IFn$_invoke$arity$2 ? pred__35811.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"a","a",-2123407586),expr__35812) : pred__35811.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__35812)))){
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,G__35799,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35799),null));
}
}
}
}
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"s","s",1705939918),self__.s,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"v","v",21465059),self__.v,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"a","a",-2123407586),self__.a,null))], null),self__.__extmap));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35799){
var self__ = this;
var this__5342__auto____$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,G__35799,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.v,self__.a], null);
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var l = (((2) - self__.s) * (self__.v * 0.5));
var s_SINGLEQUOTE_ = (((l === (0)))?0.0:((self__.s * self__.v) / ((1) - (function (){var G__35814 = (((2) * l) - (1));
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__35814) : thi.ng.math.core.abs_STAR_.call(null,G__35814));
})())));
return (thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4 ? thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4(self__.h,s_SINGLEQUOTE_,l,self__.a) : thi.ng.color.core.hsla.call(null,self__.h,s_SINGLEQUOTE_,l,self__.a));
}));

(thi.ng.color.core.HSVA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
}));

(thi.ng.color.core.HSVA.cljs$lang$type = true);

(thi.ng.color.core.HSVA.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"thi.ng.color.core/HSVA",null,(1),null));
}));

(thi.ng.color.core.HSVA.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"thi.ng.color.core/HSVA");
}));

/**
 * Positional factory function for thi.ng.color.core/HSVA.
 */
thi.ng.color.core.__GT_HSVA = (function thi$ng$color$core$__GT_HSVA(h,s,v,a){
return (new thi.ng.color.core.HSVA(h,s,v,a,null,null,null));
});

/**
 * Factory function for thi.ng.color.core/HSVA, taking a map of keywords to field values.
 */
thi.ng.color.core.map__GT_HSVA = (function thi$ng$color$core$map__GT_HSVA(G__35803){
var extmap__5385__auto__ = (function (){var G__35815 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35803,new cljs.core.Keyword(null,"h","h",1109658740),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"a","a",-2123407586)], 0));
if(cljs.core.record_QMARK_(G__35803)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35815);
} else {
return G__35815;
}
})();
return (new thi.ng.color.core.HSVA(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35803),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(G__35803),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__35803),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__35803),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.HSLA = (function (h,s,l,a,__meta,__extmap,__hash){
this.h = h;
this.s = s;
this.l = l;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.color.core.HSLA.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.typedarrays.core.float32(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.l,self__.a], null));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35817,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35821 = k35817;
var G__35821__$1 = (((G__35821 instanceof cljs.core.Keyword))?G__35821.fqn:null);
switch (G__35821__$1) {
case "h":
return self__.h;

break;
case "s":
return self__.s;

break;
case "l":
return self__.l;

break;
case "a":
return self__.a;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35817,else__5346__auto__);

}
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35822){
var vec__35823 = p__35822;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35823,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35823,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#thi.ng.color.core.HSLA{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"l","l",1395893423),self__.l],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35816){
var self__ = this;
var G__35816__$1 = this;
return (new cljs.core.RecordIter((0),G__35816__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"a","a",-2123407586)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(cljs.core.mod((0.5 + self__.h),1.0),(1.0 - self__.s),(1.0 - self__.l),self__.a,null,null,null));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1684519653 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35818,other35819){
var self__ = this;
var this35818__$1 = this;
return (((!((other35819 == null)))) && ((((this35818__$1.constructor === other35819.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35818__$1.h,other35819.h)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35818__$1.s,other35819.s)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35818__$1.l,other35819.l)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35818__$1.a,other35819.a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35818__$1.__extmap,other35819.__extmap)))))))))))));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
(dest[idx] = self__.h);

(dest[(idx + (1))] = self__.s);

(dest[(idx + (2))] = self__.l);

(dest[(idx + (3))] = self__.a);

return (idx + stride);
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var h__$1 = (self__.h + (cljs.core.rem(theta,thi.ng.math.core.TWO_PI) / thi.ng.math.core.TWO_PI));
return (new thi.ng.color.core.HSLA((((h__$1 < (0)))?(h__$1 + (1)):(((h__$1 >= 1.0))?(h__$1 - (1)):h__$1)),self__.s,self__.l,self__.a,null,null,null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,thi.ng.math.core.clamp01((offset + self__.s)),self__.l,self__.a,null,null,null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla(thi.ng.color.core.adjust_brightness(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_luminance$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,self__.s,thi.ng.math.core.clamp01((offset + self__.l)),self__.a,null,null,null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,thi.ng.math.core.clamp01((offset + self__.a)),null,null,null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var h__$1 = Math.round((self__.h * 360.0));
var s__$1 = Math.round((self__.s * 100.0));
var l__$1 = Math.round((self__.l * 100.0));
var G__35826 = (((self__.a < (1)))?["hsla(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h__$1),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1),"%,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l__$1),"%,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.a),")"].join(''):["hsl(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h__$1),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1),"%,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l__$1),"%)"].join(''));
return (thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1(G__35826) : thi.ng.color.core.css.call(null,G__35826));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.h;
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.s;
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.l;
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,self__.s))){
return (new thi.ng.color.core.RGBA(self__.l,self__.l,self__.l,self__.a,null,null,null));
} else {
var f2 = (((self__.l < 0.5))?(self__.l * (self__.s + (1))):((self__.l + self__.s) - (self__.l * self__.s)));
var f1 = ((2.0 * self__.l) - f2);
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp01((function (){var G__35827 = f1;
var G__35828 = f2;
var G__35829 = (self__.h + thi.ng.math.core.THIRD);
return (thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3 ? thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3(G__35827,G__35828,G__35829) : thi.ng.color.core.hsl_hue.call(null,G__35827,G__35828,G__35829));
})()),thi.ng.math.core.clamp01((thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3 ? thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3(f1,f2,self__.h) : thi.ng.color.core.hsl_hue.call(null,f1,f2,self__.h))),thi.ng.math.core.clamp01((function (){var G__35830 = f1;
var G__35831 = f2;
var G__35832 = (self__.h - thi.ng.math.core.THIRD);
return (thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3 ? thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3(G__35830,G__35831,G__35832) : thi.ng.color.core.hsl_hue.call(null,G__35830,G__35831,G__35832));
})()),self__.a,null,null,null));
}
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"l","l",1395893423),null,new cljs.core.Keyword(null,"h","h",1109658740),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_hsla(dest);
var h2 = dest__$1.h;
var hd = thi.ng.math.core.abs_diff(self__.h,h2);
return (new thi.ng.color.core.HSLA((((hd > 0.5))?(((h2 > self__.h))?cljs.core.rem((function (){var a__35324__auto__ = (self__.h + (1));
return (((h2 - a__35324__auto__) * t) + a__35324__auto__);
})(),1.0):cljs.core.rem((function (){var a__35324__auto__ = self__.h;
return ((((h2 + (1)) - a__35324__auto__) * t) + a__35324__auto__);
})(),1.0)):(function (){var a__35324__auto__ = self__.h;
return (((h2 - a__35324__auto__) * t) + a__35324__auto__);
})()),(function (){var a__35324__auto__ = self__.s;
return (((dest__$1.s - a__35324__auto__) * t) + a__35324__auto__);
})(),(function (){var a__35324__auto__ = self__.l;
return (((dest__$1.l - a__35324__auto__) * t) + a__35324__auto__);
})(),(function (){var a__35324__auto__ = self__.a;
return (((dest__$1.a - a__35324__auto__) * t) + a__35324__auto__);
})(),null,null,null));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35817){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35833 = k35817;
var G__35833__$1 = (((G__35833 instanceof cljs.core.Keyword))?G__35833.fqn:null);
switch (G__35833__$1) {
case "h":
case "s":
case "l":
case "a":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35817);

}
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35816){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35834 = cljs.core.keyword_identical_QMARK_;
var expr__35835 = k__5352__auto__;
if(cljs.core.truth_((pred__35834.cljs$core$IFn$_invoke$arity$2 ? pred__35834.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35835) : pred__35834.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35835)))){
return (new thi.ng.color.core.HSLA(G__35816,self__.s,self__.l,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35834.cljs$core$IFn$_invoke$arity$2 ? pred__35834.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"s","s",1705939918),expr__35835) : pred__35834.call(null,new cljs.core.Keyword(null,"s","s",1705939918),expr__35835)))){
return (new thi.ng.color.core.HSLA(self__.h,G__35816,self__.l,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35834.cljs$core$IFn$_invoke$arity$2 ? pred__35834.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"l","l",1395893423),expr__35835) : pred__35834.call(null,new cljs.core.Keyword(null,"l","l",1395893423),expr__35835)))){
return (new thi.ng.color.core.HSLA(self__.h,self__.s,G__35816,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35834.cljs$core$IFn$_invoke$arity$2 ? pred__35834.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"a","a",-2123407586),expr__35835) : pred__35834.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__35835)))){
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,G__35816,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35816),null));
}
}
}
}
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"s","s",1705939918),self__.s,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"l","l",1395893423),self__.l,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"a","a",-2123407586),self__.a,null))], null),self__.__extmap));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var l2 = ((2) * self__.l);
var v = ((l2 + (self__.s * ((1) - (function (){var G__35837 = (l2 - (1));
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__35837) : thi.ng.math.core.abs_STAR_.call(null,G__35837));
})()))) / (2));
var s_SINGLEQUOTE_ = (((v === (0)))?0.0:(((2) * (v - self__.l)) / v));
return (new thi.ng.color.core.HSVA(self__.h,s_SINGLEQUOTE_,v,self__.a,null,null,null));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35816){
var self__ = this;
var this__5342__auto____$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,G__35816,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.l,self__.a], null);
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.HSLA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"l","l",-1258542346,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
}));

(thi.ng.color.core.HSLA.cljs$lang$type = true);

(thi.ng.color.core.HSLA.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"thi.ng.color.core/HSLA",null,(1),null));
}));

(thi.ng.color.core.HSLA.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"thi.ng.color.core/HSLA");
}));

/**
 * Positional factory function for thi.ng.color.core/HSLA.
 */
thi.ng.color.core.__GT_HSLA = (function thi$ng$color$core$__GT_HSLA(h,s,l,a){
return (new thi.ng.color.core.HSLA(h,s,l,a,null,null,null));
});

/**
 * Factory function for thi.ng.color.core/HSLA, taking a map of keywords to field values.
 */
thi.ng.color.core.map__GT_HSLA = (function thi$ng$color$core$map__GT_HSLA(G__35820){
var extmap__5385__auto__ = (function (){var G__35838 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35820,new cljs.core.Keyword(null,"h","h",1109658740),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"a","a",-2123407586)], 0));
if(cljs.core.record_QMARK_(G__35820)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35838);
} else {
return G__35838;
}
})();
return (new thi.ng.color.core.HSLA(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35820),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(G__35820),new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(G__35820),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__35820),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.CMYKA = (function (c,m,y,k,a,__meta,__extmap,__hash){
this.c = c;
this.m = m;
this.y = y;
this.k = k;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.color.core.CMYKA.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35840,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35844 = k35840;
var G__35844__$1 = (((G__35844 instanceof cljs.core.Keyword))?G__35844.fqn:null);
switch (G__35844__$1) {
case "c":
return self__.c;

break;
case "m":
return self__.m;

break;
case "y":
return self__.y;

break;
case "k":
return self__.k;

break;
case "a":
return self__.a;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35840,else__5346__auto__);

}
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35845){
var vec__35846 = p__35845;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35846,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35846,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#thi.ng.color.core.CMYKA{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"c","c",-1763192079),self__.c],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"m","m",1632677161),self__.m],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35839){
var self__ = this;
var G__35839__$1 = this;
return (new cljs.core.RecordIter((0),G__35839__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"a","a",-2123407586)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.CMYKA((1.0 - self__.c),(1.0 - self__.m),(1.0 - self__.y),(1.0 - self__.k),self__.a,null,null,null));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (495080490 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35841,other35842){
var self__ = this;
var this35841__$1 = this;
return (((!((other35842 == null)))) && ((((this35841__$1.constructor === other35842.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35841__$1.c,other35842.c)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35841__$1.m,other35842.m)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35841__$1.y,other35842.y)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35841__$1.k,other35842.k)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35841__$1.a,other35842.a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35841__$1.__extmap,other35842.__extmap)))))))))))))));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null),dest,stride,idx);
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(thi.ng.color.core.rotate_hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),theta));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(thi.ng.color.core.adjust_saturation(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(thi.ng.color.core.adjust_brightness(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_luminance$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(thi.ng.color.core.adjust_luminance(___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null),offset));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,thi.ng.math.core.clamp01((offset + self__.a)),null,null,null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.k;
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.y;
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.c;
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((1.0 - (function (){var x__5133__auto__ = 1.0;
var y__5134__auto__ = (self__.c + self__.k);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})()),(1.0 - (function (){var x__5133__auto__ = 1.0;
var y__5134__auto__ = (self__.m + self__.k);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})()),(1.0 - (function (){var x__5133__auto__ = 1.0;
var y__5134__auto__ = (self__.y + self__.k);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})()),self__.a,null,null,null));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"m","m",1632677161),null,new cljs.core.Keyword(null,"k","k",-2146297393),null,new cljs.core.Keyword(null,"c","c",-1763192079),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_cmyka(dest);
return (new thi.ng.color.core.CMYKA((function (){var a__35324__auto__ = self__.c;
return (((dest__$1.c - a__35324__auto__) * t) + a__35324__auto__);
})(),(function (){var a__35324__auto__ = self__.m;
return (((dest__$1.m - a__35324__auto__) * t) + a__35324__auto__);
})(),(function (){var a__35324__auto__ = self__.y;
return (((dest__$1.y - a__35324__auto__) * t) + a__35324__auto__);
})(),(function (){var a__35324__auto__ = self__.k;
return (((dest__$1.k - a__35324__auto__) * t) + a__35324__auto__);
})(),(function (){var a__35324__auto__ = self__.a;
return (((dest__$1.a - a__35324__auto__) * t) + a__35324__auto__);
})(),null,null,null));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35840){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35849 = k35840;
var G__35849__$1 = (((G__35849 instanceof cljs.core.Keyword))?G__35849.fqn:null);
switch (G__35849__$1) {
case "c":
case "m":
case "y":
case "k":
case "a":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35840);

}
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35839){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35850 = cljs.core.keyword_identical_QMARK_;
var expr__35851 = k__5352__auto__;
if(cljs.core.truth_((pred__35850.cljs$core$IFn$_invoke$arity$2 ? pred__35850.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"c","c",-1763192079),expr__35851) : pred__35850.call(null,new cljs.core.Keyword(null,"c","c",-1763192079),expr__35851)))){
return (new thi.ng.color.core.CMYKA(G__35839,self__.m,self__.y,self__.k,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35850.cljs$core$IFn$_invoke$arity$2 ? pred__35850.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"m","m",1632677161),expr__35851) : pred__35850.call(null,new cljs.core.Keyword(null,"m","m",1632677161),expr__35851)))){
return (new thi.ng.color.core.CMYKA(self__.c,G__35839,self__.y,self__.k,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35850.cljs$core$IFn$_invoke$arity$2 ? pred__35850.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35851) : pred__35850.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35851)))){
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,G__35839,self__.k,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35850.cljs$core$IFn$_invoke$arity$2 ? pred__35850.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"k","k",-2146297393),expr__35851) : pred__35850.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__35851)))){
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,G__35839,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35850.cljs$core$IFn$_invoke$arity$2 ? pred__35850.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"a","a",-2123407586),expr__35851) : pred__35850.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__35851)))){
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,G__35839,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35839),null));
}
}
}
}
}
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"c","c",-1763192079),self__.c,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"m","m",1632677161),self__.m,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"a","a",-2123407586),self__.a,null))], null),self__.__extmap));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35839){
var self__ = this;
var this__5342__auto____$1 = this;
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,G__35839,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.c,self__.m,self__.y,self__.k,self__.a], null);
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
}));

(thi.ng.color.core.CMYKA.cljs$lang$type = true);

(thi.ng.color.core.CMYKA.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"thi.ng.color.core/CMYKA",null,(1),null));
}));

(thi.ng.color.core.CMYKA.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"thi.ng.color.core/CMYKA");
}));

/**
 * Positional factory function for thi.ng.color.core/CMYKA.
 */
thi.ng.color.core.__GT_CMYKA = (function thi$ng$color$core$__GT_CMYKA(c,m,y,k,a){
return (new thi.ng.color.core.CMYKA(c,m,y,k,a,null,null,null));
});

/**
 * Factory function for thi.ng.color.core/CMYKA, taking a map of keywords to field values.
 */
thi.ng.color.core.map__GT_CMYKA = (function thi$ng$color$core$map__GT_CMYKA(G__35843){
var extmap__5385__auto__ = (function (){var G__35853 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35843,new cljs.core.Keyword(null,"c","c",-1763192079),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"a","a",-2123407586)], 0));
if(cljs.core.record_QMARK_(G__35843)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35853);
} else {
return G__35853;
}
})();
return (new thi.ng.color.core.CMYKA(new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(G__35843),new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(G__35843),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35843),new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__35843),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__35843),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.CSS = (function (col,__meta,__extmap,__hash){
this.col = col;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.color.core.CSS.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(thi.ng.color.core.CSS.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35855,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35859 = k35855;
var G__35859__$1 = (((G__35859 instanceof cljs.core.Keyword))?G__35859.fqn:null);
switch (G__35859__$1) {
case "col":
return self__.col;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35855,else__5346__auto__);

}
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35860){
var vec__35861 = p__35860;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35861,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35861,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col));
if((c instanceof thi.ng.color.core.Int24)){
return c;
} else {
return thi.ng.color.core.as_int24(c);
}
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col));
if((c instanceof thi.ng.color.core.Int32)){
return c;
} else {
return thi.ng.color.core.as_int32(c);
}
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#thi.ng.color.core.CSS{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35854){
var self__ = this;
var G__35854__$1 = this;
return (new cljs.core.RecordIter((0),G__35854__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.color.core.CSS.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new thi.ng.color.core.CSS(self__.col,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.math.core.invert(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null)));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (272537508 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35856,other35857){
var self__ = this;
var this35856__$1 = this;
return (((!((other35857 == null)))) && ((((this35856__$1.constructor === other35857.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35856__$1.col,other35857.col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35856__$1.__extmap,other35857.__extmap)))))));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null),dest,stride,idx);
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.rotate_hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),theta));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.adjust_saturation(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.adjust_brightness(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_luminance$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.adjust_luminance(___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null),offset));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.adjust_alpha(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null),offset));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation((thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col)));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness((thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col)));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.alpha((thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col)));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col));
if((c instanceof thi.ng.color.core.RGBA)){
return c;
} else {
return thi.ng.color.core.as_rgba(c);
}
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col","col",-1959363084),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new thi.ng.color.core.CSS(self__.col,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.math.core.mix(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null),dest,t));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35855){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35864 = k35855;
var G__35864__$1 = (((G__35864 instanceof cljs.core.Keyword))?G__35864.fqn:null);
switch (G__35864__$1) {
case "col":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35855);

}
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35854){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35865 = cljs.core.keyword_identical_QMARK_;
var expr__35866 = k__5352__auto__;
if(cljs.core.truth_((pred__35865.cljs$core$IFn$_invoke$arity$2 ? pred__35865.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"col","col",-1959363084),expr__35866) : pred__35865.call(null,new cljs.core.Keyword(null,"col","col",-1959363084),expr__35866)))){
return (new thi.ng.color.core.CSS(G__35854,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.CSS(self__.col,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35854),null));
}
}));

(thi.ng.color.core.CSS.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"col","col",-1959363084),self__.col,null))], null),self__.__extmap));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35854){
var self__ = this;
var this__5342__auto____$1 = this;
return (new thi.ng.color.core.CSS(self__.col,G__35854,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col));
if((c instanceof thi.ng.color.core.HSLA)){
return c;
} else {
return thi.ng.color.core.as_hsla(c);
}
}));

(thi.ng.color.core.CSS.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"String","String",-2070057435,null)], null))], null);
}));

(thi.ng.color.core.CSS.cljs$lang$type = true);

(thi.ng.color.core.CSS.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"thi.ng.color.core/CSS",null,(1),null));
}));

(thi.ng.color.core.CSS.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"thi.ng.color.core/CSS");
}));

/**
 * Positional factory function for thi.ng.color.core/CSS.
 */
thi.ng.color.core.__GT_CSS = (function thi$ng$color$core$__GT_CSS(col){
return (new thi.ng.color.core.CSS(col,null,null,null));
});

/**
 * Factory function for thi.ng.color.core/CSS, taking a map of keywords to field values.
 */
thi.ng.color.core.map__GT_CSS = (function thi$ng$color$core$map__GT_CSS(G__35858){
var extmap__5385__auto__ = (function (){var G__35868 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35858,new cljs.core.Keyword(null,"col","col",-1959363084));
if(cljs.core.record_QMARK_(G__35858)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35868);
} else {
return G__35868;
}
})();
return (new thi.ng.color.core.CSS(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(G__35858),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.IMeta}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
*/
thi.ng.color.core.t_thi$ng$color$core35869 = (function (to_rgba,from_rgba,ctor,col,meta35870){
this.to_rgba = to_rgba;
this.from_rgba = from_rgba;
this.ctor = ctor;
this.col = col;
this.meta35870 = meta35870;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.col], 0));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__35872 = (function (){var G__35873 = thi.ng.math.core.invert((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
return (self__.from_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.from_rgba.cljs$core$IFn$_invoke$arity$1(G__35873) : self__.from_rgba.call(null,G__35873));
})();
return (self__.ctor.cljs$core$IFn$_invoke$arity$1 ? self__.ctor.cljs$core$IFn$_invoke$arity$1(G__35872) : self__.ctor.call(null,G__35872));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)),dest,stride,idx);
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var G__35874 = (function (){var G__35875 = thi.ng.color.core.rotate_hue((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)),theta);
return (self__.from_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.from_rgba.cljs$core$IFn$_invoke$arity$1(G__35875) : self__.from_rgba.call(null,G__35875));
})();
return (self__.ctor.cljs$core$IFn$_invoke$arity$1 ? self__.ctor.cljs$core$IFn$_invoke$arity$1(G__35874) : self__.ctor.call(null,G__35874));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
var G__35876 = (function (){var G__35877 = thi.ng.color.core.adjust_saturation((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)),offset);
return (self__.from_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.from_rgba.cljs$core$IFn$_invoke$arity$1(G__35877) : self__.from_rgba.call(null,G__35877));
})();
return (self__.ctor.cljs$core$IFn$_invoke$arity$1 ? self__.ctor.cljs$core$IFn$_invoke$arity$1(G__35876) : self__.ctor.call(null,G__35876));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
var G__35878 = (function (){var G__35879 = thi.ng.color.core.adjust_brightness((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)),offset);
return (self__.from_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.from_rgba.cljs$core$IFn$_invoke$arity$1(G__35879) : self__.from_rgba.call(null,G__35879));
})();
return (self__.ctor.cljs$core$IFn$_invoke$arity$1 ? self__.ctor.cljs$core$IFn$_invoke$arity$1(G__35878) : self__.ctor.call(null,G__35878));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IColorOps$adjust_luminance$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
var G__35880 = (function (){var G__35881 = thi.ng.color.core.adjust_luminance((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)),offset);
return (self__.from_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.from_rgba.cljs$core$IFn$_invoke$arity$1(G__35881) : self__.from_rgba.call(null,G__35881));
})();
return (self__.ctor.cljs$core$IFn$_invoke$arity$1 ? self__.ctor.cljs$core$IFn$_invoke$arity$1(G__35880) : self__.ctor.call(null,G__35880));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.alpha((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35871){
var self__ = this;
var _35871__$1 = this;
return self__.meta35870;
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var G__35882 = (function (){var G__35883 = thi.ng.math.core.mix((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)),dest,t);
return (self__.from_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.from_rgba.cljs$core$IFn$_invoke$arity$1(G__35883) : self__.from_rgba.call(null,G__35883));
})();
return (self__.ctor.cljs$core$IFn$_invoke$arity$1 ? self__.ctor.cljs$core$IFn$_invoke$arity$1(G__35882) : self__.ctor.call(null,G__35882));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35871,meta35870__$1){
var self__ = this;
var _35871__$1 = this;
return (new thi.ng.color.core.t_thi$ng$color$core35869(self__.to_rgba,self__.from_rgba,self__.ctor,self__.col,meta35870__$1));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
}));

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core35869.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core35869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"to-rgba","to-rgba",-145176828,null),new cljs.core.Symbol(null,"from-rgba","from-rgba",2048003927,null),new cljs.core.Symbol(null,"ctor","ctor",-903570967,null),new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.Symbol(null,"meta35870","meta35870",633649756,null)], null);
}));

(thi.ng.color.core.t_thi$ng$color$core35869.cljs$lang$type = true);

(thi.ng.color.core.t_thi$ng$color$core35869.cljs$lang$ctorStr = "thi.ng.color.core/t_thi$ng$color$core35869");

(thi.ng.color.core.t_thi$ng$color$core35869.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"thi.ng.color.core/t_thi$ng$color$core35869");
}));

/**
 * Positional factory function for thi.ng.color.core/t_thi$ng$color$core35869.
 */
thi.ng.color.core.__GT_t_thi$ng$color$core35869 = (function thi$ng$color$core$__GT_t_thi$ng$color$core35869(to_rgba,from_rgba,ctor,col,meta35870){
return (new thi.ng.color.core.t_thi$ng$color$core35869(to_rgba,from_rgba,ctor,col,meta35870));
});


thi.ng.color.core.proxied_color_type = (function thi$ng$color$core$proxied_color_type(to_rgba,from_rgba){
return (function thi$ng$color$core$proxied_color_type_$_ctor(col){
return (new thi.ng.color.core.t_thi$ng$color$core35869(to_rgba,from_rgba,thi$ng$color$core$proxied_color_type_$_ctor,col,cljs.core.PersistentArrayMap.EMPTY));
});
});
thi.ng.color.core.rgba = (function thi$ng$color$core$rgba(var_args){
var G__35885 = arguments.length;
switch (G__35885) {
case 1:
return thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$1 = (function (p__35886){
var vec__35887 = p__35886;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35887,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35887,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35887,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35887,(3),null);
return (new thi.ng.color.core.RGBA(r,g,b,(cljs.core.truth_(a)?a:1.0),null,null,null));
}));

(thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return (new thi.ng.color.core.RGBA(r,g,b,1.0,null,null,null));
}));

(thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return (new thi.ng.color.core.RGBA(r,g,b,a,null,null,null));
}));

(thi.ng.color.core.rgba.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.int24 = (function thi$ng$color$core$int24(col){
return (new thi.ng.color.core.Int24((col & (16777215)),null,null,null));
});
thi.ng.color.core.int32 = (function thi$ng$color$core$int32(var_args){
var G__35891 = arguments.length;
switch (G__35891) {
case 1:
return thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1 = (function (col){
return (new thi.ng.color.core.Int32(col,null,null,null));
}));

(thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$2 = (function (col,alpha){
var a = (((255) * thi.ng.math.core.clamp01(alpha)) | (0));
return (new thi.ng.color.core.Int32(((col & (16777215)) | (a << (24))),null,null,null));
}));

(thi.ng.color.core.int32.cljs$lang$maxFixedArity = 2);

thi.ng.color.core.hsva = (function thi$ng$color$core$hsva(var_args){
var G__35893 = arguments.length;
switch (G__35893) {
case 1:
return thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$1 = (function (p__35894){
var vec__35895 = p__35894;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35895,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35895,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35895,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35895,(3),null);
return (new thi.ng.color.core.HSVA(h,s,v,(cljs.core.truth_(a)?a:1.0),null,null,null));
}));

(thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$3 = (function (h,s,v){
return (new thi.ng.color.core.HSVA(h,s,v,1.0,null,null,null));
}));

(thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$4 = (function (h,s,v,a){
return (new thi.ng.color.core.HSVA(h,s,v,a,null,null,null));
}));

(thi.ng.color.core.hsva.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.hsla = (function thi$ng$color$core$hsla(var_args){
var G__35899 = arguments.length;
switch (G__35899) {
case 1:
return thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$1 = (function (p__35900){
var vec__35901 = p__35900;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35901,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35901,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35901,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35901,(3),null);
return (new thi.ng.color.core.HSLA(h,s,l,(cljs.core.truth_(a)?a:1.0),null,null,null));
}));

(thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$3 = (function (h,s,l){
return (new thi.ng.color.core.HSLA(h,s,l,1.0,null,null,null));
}));

(thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4 = (function (h,s,l,a){
return (new thi.ng.color.core.HSLA(h,s,l,a,null,null,null));
}));

(thi.ng.color.core.hsla.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.cmyka = (function thi$ng$color$core$cmyka(var_args){
var G__35905 = arguments.length;
switch (G__35905) {
case 1:
return thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$1 = (function (p__35906){
var vec__35907 = p__35906;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35907,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35907,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35907,(2),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35907,(3),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35907,(4),null);
return (new thi.ng.color.core.CMYKA(c,m,y,k,(cljs.core.truth_(a)?a:1.0),null,null,null));
}));

(thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$4 = (function (c,m,y,k){
return (new thi.ng.color.core.CMYKA(c,m,y,k,1.0,null,null,null));
}));

(thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$5 = (function (c,m,y,k,a){
return (new thi.ng.color.core.CMYKA(c,m,y,k,a,null,null,null));
}));

(thi.ng.color.core.cmyka.cljs$lang$maxFixedArity = 5);

thi.ng.color.core.css = (function thi$ng$color$core$css(col){
return (new thi.ng.color.core.CSS(col,null,null,null));
});
/**
 * Returns a random RGBA color with 100% alpha
 */
thi.ng.color.core.random_rgb = (function thi$ng$color$core$random_rgb(){
return (new thi.ng.color.core.RGBA(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0(),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0(),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0(),1.0,null,null,null));
});
thi.ng.color.core.RED = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((1),(0),(0),(1));
thi.ng.color.core.GREEN = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((0),(1),(0),(1));
thi.ng.color.core.BLUE = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((0),(0),(1),(1));
thi.ng.color.core.CYAN = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((0),(1),(1),(1));
thi.ng.color.core.MAGENTA = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((1),(0),(1),(1));
thi.ng.color.core.YELLOW = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((1),(1),(0),(1));
thi.ng.color.core.BLACK = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((0),(0),(0),(1));
thi.ng.color.core.WHITE = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((1),(1),(1),(1));
thi.ng.color.core.GRAY = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4(0.5,0.5,0.5,(1));
thi.ng.color.core.hsl_hue = (function thi$ng$color$core$hsl_hue(f1,f2,h){
var h__$1 = (((h < (0)))?(h + (1)):(((h >= 1.0))?(h - (1)):h));
if((h__$1 < thi.ng.math.core.SIXTH)){
var a__35324__auto__ = f1;
return (((f2 - a__35324__auto__) * (6.0 * h__$1)) + a__35324__auto__);
} else {
if((h__$1 < 0.5)){
return f2;
} else {
if((h__$1 < thi.ng.math.core.TWO_THIRD)){
var a__35324__auto__ = f1;
return (((f2 - a__35324__auto__) * ((thi.ng.math.core.TWO_THIRD - h__$1) * 6.0)) + a__35324__auto__);
} else {
return f1;

}
}
}
});
thi.ng.color.core.hue__GT_rgb = (function thi$ng$color$core$hue__GT_rgb(h){
var h__$1 = cljs.core.mod((6.0 * h),6.0);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp01(((function (){var G__35910 = (h__$1 - 3.0);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__35910) : thi.ng.math.core.abs_STAR_.call(null,G__35910));
})() - (1))),thi.ng.math.core.clamp01((2.0 - (function (){var G__35911 = (h__$1 - 2.0);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__35911) : thi.ng.math.core.abs_STAR_.call(null,G__35911));
})())),thi.ng.math.core.clamp01((2.0 - (function (){var G__35912 = (h__$1 - 4.0);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__35912) : thi.ng.math.core.abs_STAR_.call(null,G__35912));
})()))], null);
});
thi.ng.color.core.rgba__GT_hcva = (function thi$ng$color$core$rgba__GT_hcva(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
var vec__35913 = (((g < b))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,g,-1.0,thi.ng.math.core.TWO_THIRD], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,b,0.0,(- thi.ng.math.core.THIRD)], null));
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35913,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35913,(1),null);
var pz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35913,(2),null);
var pw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35913,(3),null);
var vec__35916 = (((r < px))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [px,py,pw,r], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,py,pz,px], null));
var qx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35916,(0),null);
var qy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35916,(1),null);
var qz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35916,(2),null);
var qw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35916,(3),null);
var c = (qx - (function (){var x__5133__auto__ = qw;
var y__5134__auto__ = qy;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})());
var h = (function (){var G__35919 = (((qw - qy) / ((6.0 * c) + 1.0E-10)) + qz);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__35919) : thi.ng.math.core.abs_STAR_.call(null,G__35919));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp01(h),thi.ng.math.core.clamp01(c),thi.ng.math.core.clamp01(qx),a], null);
});
thi.ng.color.core.rgba__GT_hcya = (function thi$ng$color$core$rgba__GT_hcya(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var vec__35920 = thi.ng.color.core.rgba__GT_hcva(rgba);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35920,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35920,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35920,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35920,(3),null);
var y = (((0.299 * r) + (0.587 * g)) + (0.114 * b));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,c))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,c,y,a], null);
} else {
var vec__35923 = thi.ng.color.core.hue__GT_rgb(h);
var r_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35923,(0),null);
var g_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35923,(1),null);
var b_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35923,(2),null);
var z = (((0.299 * r_SINGLEQUOTE_) + (0.587 * g_SINGLEQUOTE_)) + (0.114 * b_SINGLEQUOTE_));
if(((y - z) > 1.0E-5)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,thi.ng.math.core.clamp01((c * ((1.0 - z) / (1.0 - y)))),y,a], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,thi.ng.math.core.clamp01((c * (z / y))),y,a], null);
}
}
});
thi.ng.color.core.hcya__GT_rgba = (function thi$ng$color$core$hcya__GT_rgba(var_args){
var G__35927 = arguments.length;
switch (G__35927) {
case 1:
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (hcya){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.color.core.hcya__GT_rgba,hcya);
}));

(thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (h,c,y){
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$4(h,c,y,1.0);
}));

(thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (h,c,y,a){
var vec__35928 = thi.ng.color.core.hue__GT_rgb(h);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35928,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35928,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35928,(2),null);
var z = (((0.299 * r) + (0.587 * g)) + (0.114 * b));
var c_SINGLEQUOTE_ = (((y < z))?(c * (y / z)):(((z < 1.0))?(c * ((1.0 - y) / (1.0 - z))):c));
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp01((((r - z) * c_SINGLEQUOTE_) + y)),thi.ng.math.core.clamp01((((g - z) * c_SINGLEQUOTE_) + y)),thi.ng.math.core.clamp01((((b - z) * c_SINGLEQUOTE_) + y)),a,null,null,null));
}));

(thi.ng.color.core.hcya__GT_rgba.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.ycbcra__GT_rgba = (function thi$ng$color$core$ycbcra__GT_rgba(var_args){
var G__35932 = arguments.length;
switch (G__35932) {
case 1:
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (ycbcra){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.color.core.ycbcra__GT_rgba,ycbcra);
}));

(thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (y,cb,cr){
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$4(y,cb,cr,1.0);
}));

(thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (y,cb,cr,a){
var cb_SINGLEQUOTE_ = (cb - 0.5);
var cr_SINGLEQUOTE_ = (cr - 0.5);
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp01(((cr_SINGLEQUOTE_ * 1.402) + y)),thi.ng.math.core.clamp01((y - ((cb_SINGLEQUOTE_ * 0.34414) + (cr_SINGLEQUOTE_ * 0.71414)))),thi.ng.math.core.clamp01(((cb_SINGLEQUOTE_ * 1.772) + y)),a,null,null,null));
}));

(thi.ng.color.core.ycbcra__GT_rgba.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.rgba__GT_ycbcra = (function thi$ng$color$core$rgba__GT_ycbcra(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp01((((0.299 * r) + (0.587 * g)) + (0.114 * b))),thi.ng.math.core.clamp01((((0.5 - (0.16874 * r)) - (0.33126 * g)) + (0.5 * b))),thi.ng.math.core.clamp01((((0.5 + (0.5 * r)) - (0.418688 * g)) - (0.081312 * b)))], null);
});
thi.ng.color.core.rgba__GT_yuva = (function thi$ng$color$core$rgba__GT_yuva(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((0.299 * r) + (0.587 * g)) + (0.114 * b)),(((-0.1473 * r) + (-0.28886 * g)) + (0.436 * b)),(((0.615 * r) + (-0.51499 * g)) + (-0.10001 * b)),a], null);
});
thi.ng.color.core.yuva__GT_rgba = (function thi$ng$color$core$yuva__GT_rgba(var_args){
var G__35934 = arguments.length;
switch (G__35934) {
case 1:
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (yuva){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.color.core.yuva__GT_rgba,yuva);
}));

(thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (y,u,v){
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$4(y,u,v,1.0);
}));

(thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (y,u,v,a){
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp01(((1.13983 * v) + y)),thi.ng.math.core.clamp01((y - ((0.39465 * u) + (0.5806 * v)))),thi.ng.math.core.clamp01(((2.03211 * u) + y)),a,null,null,null));
}));

(thi.ng.color.core.yuva__GT_rgba.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.cie1931_gamma_correct = (function thi$ng$color$core$cie1931_gamma_correct(x){
return thi.ng.math.core.clamp01((((x < 0.0031308))?(12.92 * x):((1.055 * Math.pow(x,((1) / 2.4))) - 0.055)));
});
thi.ng.color.core.cie1931__GT_rgba = (function thi$ng$color$core$cie1931__GT_rgba(var_args){
var G__35936 = arguments.length;
switch (G__35936) {
case 1:
return thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (xyz){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.color.core.cie1931__GT_rgba,xyz);
}));

(thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$4(x,y,z,1.0);
}));

(thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,a){
return (new thi.ng.color.core.RGBA(thi.ng.color.core.cie1931_gamma_correct((((3.2406 * x) + (-1.5372 * y)) + (-0.4986 * z))),thi.ng.color.core.cie1931_gamma_correct((((-0.9689 * x) + (1.8758 * y)) + (0.0415 * z))),thi.ng.color.core.cie1931_gamma_correct((((0.0557 * x) + (-0.204 * y)) + (1.057 * z))),a,null,null,null));
}));

(thi.ng.color.core.cie1931__GT_rgba.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.hex__GT_int = (function thi$ng$color$core$hex__GT_int(hex){
var hex__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(hex)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(hex,(1)):hex);
var len = cljs.core.count(hex__$1);
if(((3) === len)){
var vec__35937 = hex__$1;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35937,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35937,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35937,(2),null);
return thi.ng.color.core.int24(thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''),(16),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)));
} else {
if((len < (7))){
return thi.ng.color.core.int24(thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic(hex__$1,(16),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)));
} else {
return thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic(hex__$1,(16),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)));
}
}
});
thi.ng.color.core.parse_channel_val = (function thi$ng$color$core$parse_channel_val(c){
if((c.indexOf("%") > (0))){
return (0.01 * thi.ng.strf.core.parse_float(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(c,(0),(cljs.core.count(c) - (1)))));
} else {
return (thi.ng.math.core.INV8BIT * thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic(c,(10),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)));
}
});
thi.ng.color.core.parse_css = (function thi$ng$color$core$parse_css(col){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(col))){
return thi.ng.color.core.hex__GT_int(col);
} else {
var vec__35940 = cljs.core.re_seq(/(rgb|hsl)a?\((\d+%?),(\d+%?),(\d+%?),?([0-9\.]+)?\)/,clojure.string.replace(col,/\s+/,""));
var vec__35943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35940,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35943,(0),null);
var mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35943,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35943,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35943,(3),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35943,(4),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35943,(5),null);
if(cljs.core.truth_(mode)){
if(cljs.core.truth_((function (){var fexpr__35946 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["rgba",null,"rgb",null], null), null);
return (fexpr__35946.cljs$core$IFn$_invoke$arity$1 ? fexpr__35946.cljs$core$IFn$_invoke$arity$1(mode) : fexpr__35946.call(null,mode));
})())){
return (new thi.ng.color.core.RGBA(thi.ng.color.core.parse_channel_val(a),thi.ng.color.core.parse_channel_val(b),thi.ng.color.core.parse_channel_val(c),thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([1.0], 0)),null,null,null));
} else {
return (new thi.ng.color.core.HSLA((thi.ng.strf.core.parse_float(a) / 360.0),thi.ng.color.core.parse_channel_val(b),thi.ng.color.core.parse_channel_val(c),thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([1.0], 0)),null,null,null)).thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null);
}
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(col);
}
}
});
thi.ng.color.core.hcya = thi.ng.color.core.proxied_color_type(thi.ng.color.core.hcya__GT_rgba,thi.ng.color.core.rgba__GT_hcya);
thi.ng.color.core.yuva = thi.ng.color.core.proxied_color_type(thi.ng.color.core.yuva__GT_rgba,thi.ng.color.core.rgba__GT_yuva);
thi.ng.color.core.ycbcra = thi.ng.color.core.proxied_color_type(thi.ng.color.core.ycbcra__GT_rgba,thi.ng.color.core.rgba__GT_ycbcra);
thi.ng.color.core.cie1931 = thi.ng.color.core.proxied_color_type(thi.ng.color.core.cie1931__GT_rgba,thi.ng.xerror.core.unsupported_BANG_);
thi.ng.color.core.hues = cljs.core.zipmap(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"lime","lime",-1796425088),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"teal","teal",1231496088),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"azure","azure",1864287702),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35947_SHARP_){
return (p1__35947_SHARP_ / 360.0);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(360),(30))));
thi.ng.color.core.primary_hues = cljs.core.select_keys(thi.ng.color.core.hues,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null));
/**
 * Takes a color and map of hues (e.g. thi.ng.color.core.primary-hues),
 *   returns key of closest hue.
 */
thi.ng.color.core.closest_hue = (function thi$ng$color$core$closest_hue(var_args){
var G__35949 = arguments.length;
switch (G__35949) {
case 1:
return thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$1 = (function (col){
return thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$2(col,thi.ng.color.core.hues);
}));

(thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$2 = (function (col,hues){
var h = thi.ng.color.core.hue(col);
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__35950,p__35951){
var vec__35952 = p__35950;
var h_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35952,(0),null);
var d_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35952,(1),null);
var vec__35955 = p__35951;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35955,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35955,(1),null);
var d = (function (){var x__5133__auto__ = thi.ng.math.core.abs_diff(h,v);
var y__5134__auto__ = thi.ng.math.core.abs_diff((h - (1)),v);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
if((d < d_SINGLEQUOTE_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,d], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_SINGLEQUOTE_,d_SINGLEQUOTE_], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,1000000.0], null),hues));
}));

(thi.ng.color.core.closest_hue.cljs$lang$maxFixedArity = 2);

/**
 * Returns gamma corrected version of color as RGBA
 */
thi.ng.color.core.gamma_correct = (function thi$ng$color$core$gamma_correct(col,gamma){
var col__$1 = thi.ng.color.core.as_rgba(col);
return (new thi.ng.color.core.RGBA(Math.pow(col__$1.r,gamma),Math.pow(col__$1.g,gamma),Math.pow(col__$1.b,gamma),col__$1.a,null,null,null));
});
/**
 * Returns new color of same type with its hue rotated by 180 degrees.
 */
thi.ng.color.core.complementary = (function thi$ng$color$core$complementary(col){
return thi.ng.color.core.rotate_hue(col,thi.ng.math.core.PI);
});
/**
 * Returns new color of same type with its hue rotated and adjusted
 *   saturation & brightness.
 */
thi.ng.color.core.analog = (function thi$ng$color$core$analog(col,theta,sat,bright){
return thi.ng.color.core.adjust_brightness(thi.ng.color.core.adjust_saturation(thi.ng.color.core.rotate_hue(col,theta),sat),bright);
});
/**
 * Returns new color of same type with its hue rotated and adjusted
 *   saturation & brightness within given tolerances (+/-).
 */
thi.ng.color.core.random_analog = (function thi$ng$color$core$random_analog(var_args){
var G__35959 = arguments.length;
switch (G__35959) {
case 2:
return thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$2 = (function (col,delta){
return thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$4(col,delta,delta,delta);
}));

(thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$4 = (function (col,theta,sat,bright){
return thi.ng.color.core.analog(col,(thi.ng.math.core.randnorm() * theta),(thi.ng.math.core.randnorm() * sat),(thi.ng.math.core.randnorm() * bright));
}));

(thi.ng.color.core.random_analog.cljs$lang$maxFixedArity = 4);

/**
 * Returns RGB distance of any two colors
 */
thi.ng.color.core.dist_rgb = (function thi$ng$color$core$dist_rgb(a,b){
var vec__35960 = cljs.core.deref(thi.ng.color.core.as_rgba(a));
var ra = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35960,(0),null);
var ga = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35960,(1),null);
var ba = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35960,(2),null);
var vec__35963 = cljs.core.deref(thi.ng.color.core.as_rgba(b));
var rb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35963,(0),null);
var gb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35963,(1),null);
var bb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35963,(2),null);
var dr = (ra - rb);
var dg = (ga - gb);
var db = (ba - bb);
return Math.sqrt((((dr * dr) + (dg * dg)) + (db * db)));
});
/**
 * Returns HSV distance of any two colors (in cartesian space).
 */
thi.ng.color.core.dist_hsv = (function thi$ng$color$core$dist_hsv(a,b){
var vec__35966 = cljs.core.deref(thi.ng.color.core.as_hsva(a));
var ha = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35966,(0),null);
var sa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35966,(1),null);
var va = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35966,(2),null);
var vec__35969 = cljs.core.deref(thi.ng.color.core.as_hsva(b));
var hb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35969,(0),null);
var sb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35969,(1),null);
var vb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35969,(2),null);
var ha__$1 = (thi.ng.math.core.TWO_PI * ha);
var hb__$1 = (thi.ng.math.core.TWO_PI * hb);
var dh = ((sa * Math.cos(ha__$1)) - (sb * Math.cos(hb__$1)));
var ds = ((sa * Math.sin(ha__$1)) - (sb * Math.sin(hb__$1)));
var dv = (va - vb);
return Math.sqrt((((dh * dh) + (ds * ds)) + (dv * dv)));
});

//# sourceMappingURL=thi.ng.color.core.js.map
