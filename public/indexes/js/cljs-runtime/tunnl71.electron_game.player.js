goog.provide('tunnl71.electron_game.player');
tunnl71.electron_game.player.n = (1);
tunnl71.electron_game.player.refresh = (function tunnl71$electron_game$player$refresh(state){
return (function (state__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w3-button.w3-hover-black","button.w3-button.w3-hover-black",130300744),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state__$1,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tunnl71.electron-game.matrix","tunnl71.electron-game.matrix",-1659333227),new cljs.core.Keyword(null,"core","core",-86019209)], null),tunnl71.electron_game.matrix.refresh.cljs$core$IFn$_invoke$arity$0());
})], null),"\u23CE"], null);
});
});
tunnl71.electron_game.player.speed_update_fn = (function tunnl71$electron_game$player$speed_update_fn(state,n){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (this$){
var x__5130__auto__ = (0);
var y__5131__auto__ = (n + this$);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
}));
});
});
tunnl71.electron_game.player.speed_up = (function tunnl71$electron_game$player$speed_up(state){
return (function (state__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w3-button.w3-hover-black","button.w3-button.w3-hover-black",130300744),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),tunnl71.electron_game.player.speed_update_fn(state__$1,tunnl71.electron_game.player.n)], null),">"], null);
});
});
tunnl71.electron_game.player.speed_up_PLUS_ = (function tunnl71$electron_game$player$speed_up_PLUS_(state){
return (function (state__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w3-button.w3-hover-black","button.w3-button.w3-hover-black",130300744),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),tunnl71.electron_game.player.speed_update_fn(state__$1,((2) * tunnl71.electron_game.player.n))], null),">>"], null);
});
});
tunnl71.electron_game.player.speed_down = (function tunnl71$electron_game$player$speed_down(state){
return (function (state__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w3-button.w3-hover-black","button.w3-button.w3-hover-black",130300744),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),tunnl71.electron_game.player.speed_update_fn(state__$1,(- tunnl71.electron_game.player.n))], null),"<"], null);
});
});
tunnl71.electron_game.player.speed_down_PLUS_ = (function tunnl71$electron_game$player$speed_down_PLUS_(state){
return (function (state__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w3-button.w3-hover-black","button.w3-button.w3-hover-black",130300744),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),tunnl71.electron_game.player.speed_update_fn(state__$1,(- ((2) * tunnl71.electron_game.player.n)))], null),"<<"], null);
});
});
tunnl71.electron_game.player.pause = (function tunnl71$electron_game$player$pause(state){
var with_let65457 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let65457","with-let65457",129287395));
var temp__5808__auto___65460 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___65460 == null)){
} else {
var c__19097__auto___65461 = temp__5808__auto___65460;
if((with_let65457.generation === c__19097__auto___65461.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let65457.generation = c__19097__auto___65461.ratomGeneration);
}

var init65458 = (with_let65457.length === (0));
var previous_state = ((((init65458) || (cljs.core.not(with_let65457.hasOwnProperty((0))))))?(with_let65457[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let65457[(0)]));
var res65459 = (function (state__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w3-button.w3-hover-black","button.w3-button.w3-hover-black",130300744),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(state__$1))){
return cljs.core.reset_BANG_(state__$1,cljs.core.deref(previous_state));
} else {
cljs.core.reset_BANG_(previous_state,cljs.core.deref(state__$1));

return cljs.core.reset_BANG_(state__$1,(0));
}
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(state__$1)))?"\u25B6":"\u23F8")], null);
});
return res65459;
});
tunnl71.electron_game.player.controls = (function tunnl71$electron_game$player$controls(state){
var tick = reagent.core.cursor(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"nu","nu",866281201)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-cell-row","div.w3-cell-row",1299517718),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-center","div.w3-center",555275622),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.electron_game.player.refresh,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),cljs.core.deref(tick)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.electron_game.player.speed_down_PLUS_,tick], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.electron_game.player.speed_down,tick], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.electron_game.player.pause,tick], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.electron_game.player.speed_up,tick], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.electron_game.player.speed_up_PLUS_,tick], null)], null)], null);
});

//# sourceMappingURL=tunnl71.electron_game.player.js.map
