goog.provide('tunnl71.electron_game.canvas');
tunnl71.electron_game.canvas.my_canvas = (function tunnl71$electron_game$canvas$my_canvas(canvas_state){
var dom_node = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"my canvas component",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function tunnl71$electron_game$canvas$my_canvas_$_draw_bg(this$){
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["current component ",this$], 0));
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
var w = cvs.clientWidth;
var h = cvs.clientHeight;
ctx.beginPath();

ctx.moveTo((0),(0));

ctx.lineTo(w,h);

ctx.moveTo(w,(0));

ctx.lineTo((0),h);

ctx.stroke();

(ctx.fillStyle = "black");

return ctx.fillRect((0),(0),w,h);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#canvas","canvas#canvas",-573481915),cljs.core.deref(canvas_state)], null);
})], null));
});
tunnl71.electron_game.canvas.canvas_wrapped = (function tunnl71$electron_game$canvas$canvas_wrapped(canvas_state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell-row","div.w3-cell-row",1299517718),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell","div.w3-cell",-1516627914),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"33%"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell.w3-border","div.w3-cell.w3-border",-2130787666),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.electron_game.canvas.my_canvas,canvas_state], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell","div.w3-cell",-1516627914),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"33%"], null)], null)], null)], null);
});

//# sourceMappingURL=tunnl71.electron_game.canvas.js.map
