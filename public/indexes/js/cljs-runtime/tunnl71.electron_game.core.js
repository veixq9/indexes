goog.provide('tunnl71.electron_game.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
tunnl71.electron_game.core.init_state_BANG_ = (function tunnl71$electron_game$core$init_state_BANG_(){
var counter = tunnl71.tools.core.counter();
var w = (1000);
var h = (1000);
var n = (w * h);
var l = (30);
var width_in_blocks = (w / l);
var height_in_blocks = (h / l);
var block_count = (n / (l * l));
var context = (function (){
return document.getElementById("canvas").getContext("2d");
});
var m0 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"inspiration","inspiration",-1556199417),new cljs.core.Keyword(null,"orb","orb",-57761718),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"generator","generator",-572962281),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"executor","executor",1197215162),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Keyword(null,"step","step",1288888124)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tree of dependencies \u00E1 l\u00E1 'evolution'","larva tokens that mutate based on temperature"], null),(1000),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"byblock","byblock",-1299035938),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"n","n",562130025),n,new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),h,new cljs.core.Keyword(null,"l","l",1395893423),l,new cljs.core.Keyword(null,"width-in-blocks","width-in-blocks",1520818093),width_in_blocks,new cljs.core.Keyword(null,"height-in-blocks","height-in-blocks",1038472465),height_in_blocks], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1288888124),(function (state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"orb","orb",-57761718),(function (p1__51540_SHARP_){
return (p1__51540_SHARP_ + (1));
}));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nu","nu",866281201),(100),new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),(0)], null),new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nu","nu",866281201),(10)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nu","nu",866281201),(1)], null)]);
return m0;
});
/**
 * map -> map
 */
tunnl71.electron_game.core.step_clock_BANG_ = (function tunnl71$electron_game$core$step_clock_BANG_(state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698)], null),cljs.core.inc);
});
/**
 * map -> map
 */
tunnl71.electron_game.core.step_BANG_ = (function tunnl71$electron_game$core$step_BANG_(state){
var seq__51541 = cljs.core.seq(cljs.core.deref(state));
var chunk__51542 = null;
var count__51543 = (0);
var i__51544 = (0);
while(true){
if((i__51544 < count__51543)){
var vec__51551 = chunk__51542.cljs$core$IIndexed$_nth$arity$2(null,i__51544);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51551,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51551,(1),null);
if((!((new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(v) == null)))){
cljs.core.tap_GT_(new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(v));
} else {
}


var G__51583 = seq__51541;
var G__51584 = chunk__51542;
var G__51585 = count__51543;
var G__51586 = (i__51544 + (1));
seq__51541 = G__51583;
chunk__51542 = G__51584;
count__51543 = G__51585;
i__51544 = G__51586;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51541);
if(temp__5804__auto__){
var seq__51541__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51541__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51541__$1);
var G__51587 = cljs.core.chunk_rest(seq__51541__$1);
var G__51588 = c__5568__auto__;
var G__51589 = cljs.core.count(c__5568__auto__);
var G__51590 = (0);
seq__51541 = G__51587;
chunk__51542 = G__51588;
count__51543 = G__51589;
i__51544 = G__51590;
continue;
} else {
var vec__51554 = cljs.core.first(seq__51541__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51554,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51554,(1),null);
if((!((new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(v) == null)))){
cljs.core.tap_GT_(new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(v));
} else {
}


var G__51591 = cljs.core.next(seq__51541__$1);
var G__51592 = null;
var G__51593 = (0);
var G__51594 = (0);
seq__51541 = G__51591;
chunk__51542 = G__51592;
count__51543 = G__51593;
i__51544 = G__51594;
continue;
}
} else {
return null;
}
}
break;
}
});
tunnl71.electron_game.core.draw_BANG_ = (function tunnl71$electron_game$core$draw_BANG_(state){
return window.requestAnimationFrame((function (){
var seq__51557 = cljs.core.seq(cljs.core.deref(state));
var chunk__51558 = null;
var count__51559 = (0);
var i__51560 = (0);
while(true){
if((i__51560 < count__51559)){
var vec__51569 = chunk__51558.cljs$core$IIndexed$_nth$arity$2(null,i__51560);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51569,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51569,(1),null);
var temp__5804__auto___51595 = new cljs.core.Keyword(null,"draw!","draw!",-781339504).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(temp__5804__auto___51595)){
var draw_BANG__51596 = temp__5804__auto___51595;
var G__51572_51597 = new cljs.core.Keyword(null,"core","core",-86019209).cljs$core$IFn$_invoke$arity$1(v);
(draw_BANG__51596.cljs$core$IFn$_invoke$arity$1 ? draw_BANG__51596.cljs$core$IFn$_invoke$arity$1(G__51572_51597) : draw_BANG__51596.call(null,G__51572_51597));
} else {
}


var G__51598 = seq__51557;
var G__51599 = chunk__51558;
var G__51600 = count__51559;
var G__51601 = (i__51560 + (1));
seq__51557 = G__51598;
chunk__51558 = G__51599;
count__51559 = G__51600;
i__51560 = G__51601;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51557);
if(temp__5804__auto__){
var seq__51557__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51557__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51557__$1);
var G__51602 = cljs.core.chunk_rest(seq__51557__$1);
var G__51603 = c__5568__auto__;
var G__51604 = cljs.core.count(c__5568__auto__);
var G__51605 = (0);
seq__51557 = G__51602;
chunk__51558 = G__51603;
count__51559 = G__51604;
i__51560 = G__51605;
continue;
} else {
var vec__51573 = cljs.core.first(seq__51557__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51573,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51573,(1),null);
var temp__5804__auto___51606__$1 = new cljs.core.Keyword(null,"draw!","draw!",-781339504).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(temp__5804__auto___51606__$1)){
var draw_BANG__51607 = temp__5804__auto___51606__$1;
var G__51576_51608 = new cljs.core.Keyword(null,"core","core",-86019209).cljs$core$IFn$_invoke$arity$1(v);
(draw_BANG__51607.cljs$core$IFn$_invoke$arity$1 ? draw_BANG__51607.cljs$core$IFn$_invoke$arity$1(G__51576_51608) : draw_BANG__51607.call(null,G__51576_51608));
} else {
}


var G__51609 = cljs.core.next(seq__51557__$1);
var G__51610 = null;
var G__51611 = (0);
var G__51612 = (0);
seq__51557 = G__51609;
chunk__51558 = G__51610;
count__51559 = G__51611;
i__51560 = G__51612;
continue;
}
} else {
return null;
}
}
break;
}
}));
});
tunnl71.electron_game.core.draw_ticker_init_BANG_ = (function tunnl71$electron_game$core$draw_ticker_init_BANG_(state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Keyword(null,"interval-id","interval-id",79285360)], null),setInterval(tunnl71.electron_game.core.draw_BANG_,((1000) / new cljs.core.Keyword(null,"nu","nu",866281201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))),state));
});
tunnl71.electron_game.core.track_step_interval_BANG_ = (function tunnl71$electron_game$core$track_step_interval_BANG_(state,nu_cursor){
return reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (nu_cursor__$1){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"interval-id","interval-id",79285360)], null),(function (p1__51577_SHARP_){
return clearInterval(p1__51577_SHARP_);
}));

var nu = cljs.core.deref(nu_cursor__$1);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),nu)))){
var i_id = setInterval(tunnl71.electron_game.core.step_BANG_,((1000) / nu),state);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"interval-id","interval-id",79285360)], null),i_id);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nu_cursor], 0));
});
tunnl71.electron_game.core.item_for_sale = (function tunnl71$electron_game$core$item_for_sale(state){
return (function (state__$1){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["recreating item-for-sale"], 0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-round-xxlarge.w3-border","div.w3-round-xxlarge.w3-border",-1266490943),(function (){var with_let51580 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let51580","with-let51580",-328367733));
var temp__5808__auto___51613 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___51613 == null)){
} else {
var c__19232__auto___51614 = temp__5808__auto___51613;
if((with_let51580.generation === c__19232__auto___51614.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let51580.generation = c__19232__auto___51614.ratomGeneration);
}

var init51581 = (with_let51580.length === (0));
var generate_item = ((((init51581) || (cljs.core.not(with_let51580.hasOwnProperty((0))))))?(with_let51580[(0)] = (function (){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),["orb factory-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tunnl71.tools.core.uuid.cljs$core$IFn$_invoke$arity$0())].join(''),new cljs.core.Keyword(null,"name","name",1843675177),"orb factory",new cljs.core.Keyword(null,"description","description",-1428560544),"produces (1 orb / sec)",new cljs.core.Keyword(null,"step","step",1288888124),(function (state__$2){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state__$2,cljs.core.update,new cljs.core.Keyword(null,"orb","orb",-57761718),(function (p1__51578_SHARP_){
return (p1__51578_SHARP_ + (1));
}));
}),new cljs.core.Keyword(null,"submodule","submodule",-405889973),null], null);
})):(with_let51580[(0)]));
var init_cost = ((((init51581) || (cljs.core.not(with_let51580.hasOwnProperty((1))))))?(with_let51580[(1)] = (100)):(with_let51580[(1)]));
var costs = ((((init51581) || (cljs.core.not(with_let51580.hasOwnProperty((2))))))?(with_let51580[(2)] = cljs.core.iterate((function (p1__51579_SHARP_){
return ((p1__51579_SHARP_ + (tunnl71.tools.core.exp.cljs$core$IFn$_invoke$arity$2((p1__51579_SHARP_ + 0.05),(2)) - tunnl71.tools.core.exp.cljs$core$IFn$_invoke$arity$2(p1__51579_SHARP_,(2)))) | (0));
}),init_cost)):(with_let51580[(2)]));
var costs_atom = ((((init51581) || (cljs.core.not(with_let51580.hasOwnProperty((3))))))?(with_let51580[(3)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(costs)):(with_let51580[(3)]));
var res51582 = (function (){var item = (generate_item.cljs$core$IFn$_invoke$arity$0 ? generate_item.cljs$core$IFn$_invoke$arity$0() : generate_item.call(null));
var cost = cljs.core.first(cljs.core.deref(costs_atom));
var item_sales_view = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544)], null)),new cljs.core.Keyword(null,"cost","cost",-1094861735),cost);
var kv = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),item]);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),tunnl71.tools.core.edn__GT_hiccup_true_to_form(item_sales_view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-center","div.w3-center",555275622),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w3-button.w3-hover-black.w3-border","button.w3-button.w3-hover-black.w3-border",-1254244354),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["buyed ","at ",cost], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(costs_atom,cljs.core.rest);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state__$1,(function (this$){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"orb","orb",-57761718)], null),(function (en){
return (en - cost);
})),kv], 0));
}));
})], null),"buy!"], null)], null)], null);
})();
return res51582;
})()], null);
});
});
tunnl71.electron_game.core.root_frame = (function tunnl71$electron_game$core$root_frame(state){
return (function (state__$1){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-container","div.w3-container",118818473),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"150%",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#002152"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell-row","div.w3-cell-row",1299517718),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-center","div.w3-center",555275622),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Phase Automata"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.electron_game.player.controls,state__$1], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell-row.w3-container","div.w3-cell-row.w3-container",116741411),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell.w3-cell-top","div.w3-cell.w3-cell-top",1458542352),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"33%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"UI"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u25CF ",new cljs.core.Keyword(null,"orb","orb",-57761718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state__$1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"assets ",tunnl71.tools.core.edn__GT_hiccup_true_to_form(cljs.core.frequencies(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.vals(cljs.core.deref(state__$1))))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"cards "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"units "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"lots "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"dice "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"available menu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.electron_game.core.item_for_sale,state__$1], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell.w3-border","div.w3-cell.w3-border",-2130787666),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.electron_game.canvas.my_canvas,reagent.core.cursor(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell.w3-cell-top.w3-container","div.w3-cell.w3-cell-top.w3-container",2063016528),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"33%"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell-row","div.w3-cell-row",1299517718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),(function (){var state_sans_system = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,cljs.core.deref(state__$1),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"executor","executor",1197215162),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"canvas","canvas",-1798817489)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.tools.core.edn__GT_hiccup_true_to_form,state_sans_system], null);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-center","div.w3-center",555275622),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"tunnl71"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.pr_str,cljs.core.deref(state__$1)], null)], null)], null)], null);
});
});
tunnl71.electron_game.core.render = (function tunnl71$electron_game$core$render(state){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.electron_game.core.root_frame,state], null),document.getElementById("app"));
});
tunnl71.electron_game.core.init_BANG_ = (function tunnl71$electron_game$core$init_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["init! hello"], 0));

if((typeof tunnl71 !== 'undefined') && (typeof tunnl71.electron_game !== 'undefined') && (typeof tunnl71.electron_game.core !== 'undefined') && (typeof tunnl71.electron_game.core.state !== 'undefined')){
} else {
tunnl71.electron_game.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}

if((!((cljs.core.deref(tunnl71.electron_game.core.state) == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tunnl71.electron_game.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"nu","nu",866281201)], null),(0));

tunnl71.electron_game.control.stop_executor_BANG_(tunnl71.electron_game.core.state);

tunnl71.electron_game.control.stop_tapper_BANG_(tunnl71.electron_game.core.state);
} else {
}

cljs.core.reset_BANG_(tunnl71.electron_game.core.state,tunnl71.electron_game.core.init_state_BANG_());

tunnl71.electron_game.control.init_tapper_BANG_(tunnl71.electron_game.core.state);

tunnl71.electron_game.control.init_executor_BANG_(tunnl71.electron_game.core.state);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tunnl71.electron_game.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"interval-fn","interval-fn",-1549607730)], null),setInterval(tunnl71.electron_game.core.step_clock_BANG_,((1000) / new cljs.core.Keyword(null,"nu","nu",866281201).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clock","clock",-894301127).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tunnl71.electron_game.core.state)))),tunnl71.electron_game.core.state));

tunnl71.electron_game.core.track_step_interval_BANG_(tunnl71.electron_game.core.state,reagent.core.cursor(tunnl71.electron_game.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"nu","nu",866281201)], null)));

tunnl71.electron_game.core.draw_ticker_init_BANG_(tunnl71.electron_game.core.state);

return tunnl71.electron_game.core.render(tunnl71.electron_game.core.state);
});

//# sourceMappingURL=tunnl71.electron_game.core.js.map
