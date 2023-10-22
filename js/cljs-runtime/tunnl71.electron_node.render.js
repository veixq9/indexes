goog.provide('tunnl71.electron_node.render');
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
cljs.core.enable_console_print_BANG_();
if((typeof tunnl71 !== 'undefined') && (typeof tunnl71.electron_node !== 'undefined') && (typeof tunnl71.electron_node.render !== 'undefined') && (typeof tunnl71.electron_node.render.state !== 'undefined')){
} else {
tunnl71.electron_node.render.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
tunnl71.electron_node.render.root_component = (function tunnl71$electron_node$render$root_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tunnl71.electron_node.render.state,cljs.core.inc);
})], null),["Clicked ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tunnl71.electron_node.render.state))," times"].join('')], null)], null);
});
tunnl71.electron_node.render.render = (function tunnl71$electron_node$render$render(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.electron_node.render.root_component], null),document.getElementById("app"));
});

//# sourceMappingURL=tunnl71.electron_node.render.js.map
