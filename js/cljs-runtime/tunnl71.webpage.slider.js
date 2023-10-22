goog.provide('tunnl71.webpage.slider');
tunnl71.webpage.slider.hex__GT_rgba = (function tunnl71$webpage$slider$hex__GT_rgba(hex){
return cljs.core.reduce_kv((function (acc,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(v * (255)));
}),cljs.core.PersistentArrayMap.EMPTY,thi.ng.color.core.as_rgba(thi.ng.color.core.hex__GT_int(hex)));
});
tunnl71.webpage.slider.rgba__GT_hex = (function tunnl71$webpage$slider$rgba__GT_hex(map_rgba){
return new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(thi.ng.color.core.as_css(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.color.core.rgba,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49217_SHARP_){
return (p1__49217_SHARP_ / (255));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.get,map_rgba),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"a","a",-2123407586)], null))))));
});
tunnl71.webpage.slider.slider_input = (function tunnl71$webpage$slider$slider_input(color_element){
return (function (color_element__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(color_element__$1),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(255),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var new_value = parseInt(e.target.value);
return cljs.core.reset_BANG_(color_element__$1,new_value);
})], null)], null);
});
});
/**
 * rgba
 */
tunnl71.webpage.slider.slider = (function tunnl71$webpage$slider$slider(cursor_palette){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(tunnl71.webpage.slider.hex__GT_rgba(new cljs.core.Keyword(null,"background-color","background-color",570434026).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cursor_palette))));
var vec__49222 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent.core.cursor,state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null)], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49222,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49222,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49222,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49222,(3),null);
reagent.core.track_BANG_((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cursor_palette,cljs.core.assoc,new cljs.core.Keyword(null,"background-color","background-color",570434026),tunnl71.webpage.slider.rgba__GT_hex(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.deref(r),new cljs.core.Keyword(null,"g","g",1738089905),cljs.core.deref(g),new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.deref(b),new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.deref(a)], null)));
}));

reagent.core.track_BANG_((function (){
return cljs.core.reset_BANG_(state,tunnl71.webpage.slider.hex__GT_rgba(new cljs.core.Keyword(null,"background-color","background-color",570434026).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cursor_palette))));
}));

return (function (cursor_palette__$1){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container","div.w3-container",118818473),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"300%",new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"both","both",-393648840)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-row","div.w3-row",692760586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.w3-cell","p.w3-cell",-899334996),"colors"], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-row","div.w3-row",692760586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell","div.w3-cell",-1516627914),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),new cljs.core.Keyword(null,"background-color","background-color",570434026).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cursor_palette__$1))], null)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__49220_SHARP_,p2__49221_SHARP_){
return cljs.core.identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell","div.w3-cell",-1516627914),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),p1__49220_SHARP_,new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__49221_SHARP_)], null)], null));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","green","blue","white"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(r),cljs.core.deref(g),cljs.core.deref(b),cljs.core.deref(a)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.webpage.slider.slider_input,r], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.webpage.slider.slider_input,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.webpage.slider.slider_input,b], null)], null);
});
});

//# sourceMappingURL=tunnl71.webpage.slider.js.map
