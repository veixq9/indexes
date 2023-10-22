goog.provide('tunnl71.electron_game.render');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"react-components-aka-frames","react-components-aka-frames",-1492158556),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.electron_game.render.draw_BANG_ = (function tunnl71$electron_game$render$draw_BANG_(es){
return window.requestAnimationFrame((function (){
var seq__48196 = cljs.core.seq(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"p","p",151049309),cljs.core._LT_,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,cljs.core.vals(es))));
var chunk__48197 = null;
var count__48198 = (0);
var i__48199 = (0);
while(true){
if((i__48199 < count__48198)){
var v = chunk__48197.cljs$core$IIndexed$_nth$arity$2(null,i__48199);
var temp__5804__auto___48243 = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(temp__5804__auto___48243)){
var draw_48244 = temp__5804__auto___48243;
(draw_48244.cljs$core$IFn$_invoke$arity$1 ? draw_48244.cljs$core$IFn$_invoke$arity$1(v) : draw_48244.call(null,v));
} else {
}


var G__48245 = seq__48196;
var G__48246 = chunk__48197;
var G__48247 = count__48198;
var G__48248 = (i__48199 + (1));
seq__48196 = G__48245;
chunk__48197 = G__48246;
count__48198 = G__48247;
i__48199 = G__48248;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48196);
if(temp__5804__auto__){
var seq__48196__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48196__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48196__$1);
var G__48249 = cljs.core.chunk_rest(seq__48196__$1);
var G__48250 = c__5568__auto__;
var G__48251 = cljs.core.count(c__5568__auto__);
var G__48252 = (0);
seq__48196 = G__48249;
chunk__48197 = G__48250;
count__48198 = G__48251;
i__48199 = G__48252;
continue;
} else {
var v = cljs.core.first(seq__48196__$1);
var temp__5804__auto___48253__$1 = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(temp__5804__auto___48253__$1)){
var draw_48254 = temp__5804__auto___48253__$1;
(draw_48254.cljs$core$IFn$_invoke$arity$1 ? draw_48254.cljs$core$IFn$_invoke$arity$1(v) : draw_48254.call(null,v));
} else {
}


var G__48255 = cljs.core.next(seq__48196__$1);
var G__48256 = null;
var G__48257 = (0);
var G__48258 = (0);
seq__48196 = G__48255;
chunk__48197 = G__48256;
count__48198 = G__48257;
i__48199 = G__48258;
continue;
}
} else {
return null;
}
}
break;
}
}));
}),tunnl71.electron_game.render.serialize_indexes = (function tunnl71$electron_game$render$serialize_indexes(p__48200,p__48201){
var map__48202 = p__48200;
var map__48202__$1 = cljs.core.__destructure_map(map__48202);
var width_in_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48202__$1,new cljs.core.Keyword(null,"width-in-blocks","width-in-blocks",1520818093));
var vec__48203 = p__48201;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48203,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48203,(1),null);
return (x + (y * width_in_blocks));
}),/**
 * positions in block terms
 */
tunnl71.electron_game.render.window = (function tunnl71$electron_game$render$window(x,y,w,h){
var iter__5523__auto__ = (function tunnl71$electron_game$render$window_$_iter__48206(s__48207){
return (new cljs.core.LazySeq(null,(function (){
var s__48207__$1 = s__48207;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__48207__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var _PLUS_x = cljs.core.first(xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__48207__$1,_PLUS_x,xs__6360__auto__,temp__5804__auto__){
return (function tunnl71$electron_game$render$window_$_iter__48206_$_iter__48208(s__48209){
return (new cljs.core.LazySeq(null,((function (s__48207__$1,_PLUS_x,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__48209__$1 = s__48209;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__48209__$1);
if(temp__5804__auto____$1){
var s__48209__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48209__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__48209__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__48211 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__48210 = (0);
while(true){
if((i__48210 < size__5522__auto__)){
var _PLUS_y = cljs.core._nth(c__5521__auto__,i__48210);
cljs.core.chunk_append(b__48211,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x + _PLUS_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y + _PLUS_y)], null));

var G__48259 = (i__48210 + (1));
i__48210 = G__48259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48211),tunnl71$electron_game$render$window_$_iter__48206_$_iter__48208(cljs.core.chunk_rest(s__48209__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48211),null);
}
} else {
var _PLUS_y = cljs.core.first(s__48209__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x + _PLUS_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y + _PLUS_y)], null),tunnl71$electron_game$render$window_$_iter__48206_$_iter__48208(cljs.core.rest(s__48209__$2)));
}
} else {
return null;
}
break;
}
});})(s__48207__$1,_PLUS_x,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__48207__$1,_PLUS_x,xs__6360__auto__,temp__5804__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(h)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,tunnl71$electron_game$render$window_$_iter__48206(cljs.core.rest(s__48207__$1)));
} else {
var G__48260 = cljs.core.rest(s__48207__$1);
s__48207__$1 = G__48260;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(w));
}),/**
 * positions in block terms
 */
tunnl71.electron_game.render.random_window = (function tunnl71$electron_game$render$random_window(p__48212,w,h){
var map__48213 = p__48212;
var map__48213__$1 = cljs.core.__destructure_map(map__48213);
var width_in_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48213__$1,new cljs.core.Keyword(null,"width-in-blocks","width-in-blocks",1520818093));
var height_in_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48213__$1,new cljs.core.Keyword(null,"height-in-blocks","height-in-blocks",1038472465));
var x = cljs.core.rand_int(width_in_blocks);
var y = cljs.core.rand_int(height_in_blocks);
return tunnl71.electron_game.render.window(x,y,w,h);
}),tunnl71.electron_game.render.step_entities = (function tunnl71$electron_game$render$step_entities(state){
return null;
}),tunnl71.electron_game.render.step_BANG_ = (function tunnl71$electron_game$render$step_BANG_(state){
var state_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(state),(function (){var seq__48214 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,cljs.core.vals(cljs.core.deref(state))));
var chunk__48215 = null;
var count__48216 = (0);
var i__48217 = (0);
while(true){
if((i__48217 < count__48216)){
var e = chunk__48215.cljs$core$IIndexed$_nth$arity$2(null,i__48217);
var temp__5804__auto___48261 = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(temp__5804__auto___48261)){
var step_48262 = temp__5804__auto___48261;
(step_48262.cljs$core$IFn$_invoke$arity$1 ? step_48262.cljs$core$IFn$_invoke$arity$1(e) : step_48262.call(null,e));
} else {
}


var G__48263 = seq__48214;
var G__48264 = chunk__48215;
var G__48265 = count__48216;
var G__48266 = (i__48217 + (1));
seq__48214 = G__48263;
chunk__48215 = G__48264;
count__48216 = G__48265;
i__48217 = G__48266;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48214);
if(temp__5804__auto__){
var seq__48214__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48214__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48214__$1);
var G__48267 = cljs.core.chunk_rest(seq__48214__$1);
var G__48268 = c__5568__auto__;
var G__48269 = cljs.core.count(c__5568__auto__);
var G__48270 = (0);
seq__48214 = G__48267;
chunk__48215 = G__48268;
count__48216 = G__48269;
i__48217 = G__48270;
continue;
} else {
var e = cljs.core.first(seq__48214__$1);
var temp__5804__auto___48271__$1 = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(temp__5804__auto___48271__$1)){
var step_48272 = temp__5804__auto___48271__$1;
(step_48272.cljs$core$IFn$_invoke$arity$1 ? step_48272.cljs$core$IFn$_invoke$arity$1(e) : step_48272.call(null,e));
} else {
}


var G__48273 = cljs.core.next(seq__48214__$1);
var G__48274 = null;
var G__48275 = (0);
var G__48276 = (0);
seq__48214 = G__48273;
chunk__48215 = G__48274;
count__48216 = G__48275;
i__48217 = G__48276;
continue;
}
} else {
return null;
}
}
break;
}
})()], 0));
cljs.core.reset_BANG_(state,state_SINGLEQUOTE_);

tunnl71.electron_game.render.draw_BANG_(state_SINGLEQUOTE_);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword("tick","elapsed","tick/elapsed",-1281483973),cljs.core.inc);
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("component","speed","component/speed",-144240644),cljs.core.PersistentHashSet.createAsIfByAssoc([tunnl71.electron_game.render.speed_down = (function tunnl71$electron_game$render$speed_down(state){
return (function (state__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w3-button.w3-hover-black","button.w3-button.w3-hover-black",130300744),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state__$1,(function (this$){
var x__5130__auto__ = (this$ - 0.25);
var y__5131__auto__ = (0);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
}));
})], null),"<<"], null);
});
}),tunnl71.electron_game.render.pause = (function tunnl71$electron_game$render$pause(state){
var with_let48218 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let48218","with-let48218",-625207387));
var temp__5808__auto___48277 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___48277 == null)){
} else {
var c__20863__auto___48278 = temp__5808__auto___48277;
if((with_let48218.generation === c__20863__auto___48278.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let48218.generation = c__20863__auto___48278.ratomGeneration);
}

var init48219 = (with_let48218.length === (0));
var previous_state = ((((init48219) || (cljs.core.not(with_let48218.hasOwnProperty((0))))))?(with_let48218[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let48218[(0)]));
var res48220 = (function (state__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w3-button.w3-hover-black","button.w3-button.w3-hover-black",130300744),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(state__$1))){
return cljs.core.reset_BANG_(state__$1,cljs.core.deref(previous_state));
} else {
cljs.core.reset_BANG_(previous_state,cljs.core.deref(state__$1));

return cljs.core.reset_BANG_(state__$1,(0));
}
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(state__$1)))?"\u25B6":"\u23F8")], null);
});
return res48220;
}),tunnl71.electron_game.render.speed_up = (function tunnl71$electron_game$render$speed_up(state){
return (function (state__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w3-button.w3-hover-black","button.w3-button.w3-hover-black",130300744),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state__$1,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,0.25));
})], null),">>"], null);
});
})])], null),tunnl71.electron_game.render.rc_state = (function tunnl71$electron_game$render$rc_state(state){
return (function (state__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),tunnl71.tools.core.edn__GT_hiccup(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153)))], null);
});
}),tunnl71.electron_game.render.frame_canvas = (function tunnl71$electron_game$render$frame_canvas(canvas_state){
return (function (canvas_state__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#canvas","canvas#canvas",-573481915),canvas_state__$1], null);
});
}),tunnl71.electron_game.render.root_frame = (function tunnl71$electron_game$render$root_frame(state){
return (function (state__$1){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-left","div.w3-left",-100193729),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"150%",new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"background-color","background-color",570434026),"green"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-center","div.w3-center",555275622),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Phase Automata"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-center","div.w3-center",555275622),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.electron_game.render.speed_down,reagent.core.cursor(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tick","per-second","tick/per-second",-1111497267)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.electron_game.render.pause,reagent.core.cursor(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tick","per-second","tick/per-second",-1111497267)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.electron_game.render.speed_up,reagent.core.cursor(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tick","per-second","tick/per-second",-1111497267)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-center","div.w3-center",555275622),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.electron_game.render.frame_canvas,cljs.core.deref(reagent.core.cursor(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489)], null)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.electron_game.render.rc_state,cljs.core.deref(state__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w3-center","div.w3-center",555275622),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"tunnl71"], null)], null)], null)], null);
});
})], null)], null);
cljs.core.enable_console_print_BANG_();
if((typeof tunnl71 !== 'undefined') && (typeof tunnl71.electron_game !== 'undefined') && (typeof tunnl71.electron_game.render !== 'undefined') && (typeof tunnl71.electron_game.render.state !== 'undefined')){
} else {
tunnl71.electron_game.render.state = (function (){var counter = tunnl71.tools.core.counter();
var w = (1500);
var h = (1500);
var n = (w * h);
var l = (30);
var width_in_blocks = (w / l);
var height_in_blocks = (h / l);
var block_count = (n / (l * l));
var context = (function (){
return document.getElementById("canvas").getContext("2d");
});
var blocks = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(block_count,(-1)));
var blocks_2d = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(height_in_blocks,blocks));
var nums = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(2),(3),(5),(7),(21)], null);
var block_types = cljs.core.list(new cljs.core.Keyword(null,"full","full",436801220),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"portal","portal",2002989957),new cljs.core.Keyword(null,"heart","heart",1848849955),new cljs.core.Keyword(null,"treasury","treasury",-1232279093),new cljs.core.Keyword(null,"imp","imp",-1661098259));
var block_map = cljs.core.zipmap(block_types,nums);
var color_map = cljs.core.zipmap(nums,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black","brown","purple","darkBlue","gold","green","silver"], null));
var m0 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"block-map","block-map",-1505056440),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"mobiles","mobiles",633400618),new cljs.core.Keyword(null,"color-map","color-map",-207789684),new cljs.core.Keyword("tick","per-second","tick/per-second",-1111497267),new cljs.core.Keyword(null,"width-in-blocks","width-in-blocks",1520818093),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"height-in-blocks","height-in-blocks",1038472465),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"tunnl71.electron-game.matrix","tunnl71.electron-game.matrix",-1659333227),new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"circular","circular",-1815834918),new cljs.core.Keyword("tick","elapsed","tick/elapsed",-1281483973)],[block_map,n,w,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"imp","imp",-1661098259),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"money","money",250333921),"the impin"], null)], null),color_map,0.5,width_in_blocks,l,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null),height_in_blocks,h,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p","p",151049309),(1),new cljs.core.Keyword(null,"step","step",1288888124),(function (this$){
return tunnl71.electron_game.matrix.step.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"core","core",-86019209).cljs$core$IFn$_invoke$arity$1(this$));
}),new cljs.core.Keyword(null,"draw","draw",1358331674),cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__48221_SHARP_){
return tunnl71.electron_game.matrix.draw_BANG_(p1__48221_SHARP_,w,h,l);
}),new cljs.core.Keyword(null,"core","core",-86019209)),new cljs.core.Keyword(null,"core","core",-86019209),tunnl71.electron_game.matrix.test_matrix], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"p","p",151049309),(0),new cljs.core.Keyword(null,"core","core",-86019209),blocks,new cljs.core.Keyword(null,"draw","draw",1358331674),(function (this$){
var ctx = document.getElementById("canvas").getContext("2d");
var seq__48222 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),w,l));
var chunk__48227 = null;
var count__48228 = (0);
var i__48229 = (0);
while(true){
if((i__48229 < count__48228)){
var x = chunk__48227.cljs$core$IIndexed$_nth$arity$2(null,i__48229);
var seq__48230_48279 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),h,l));
var chunk__48231_48280 = null;
var count__48232_48281 = (0);
var i__48233_48282 = (0);
while(true){
if((i__48233_48282 < count__48232_48281)){
var y_48283 = chunk__48231_48280.cljs$core$IIndexed$_nth$arity$2(null,i__48233_48282);
(ctx.fillStyle = "black");

ctx.fillRect(x,y_48283,l,l);


var G__48284 = seq__48230_48279;
var G__48285 = chunk__48231_48280;
var G__48286 = count__48232_48281;
var G__48287 = (i__48233_48282 + (1));
seq__48230_48279 = G__48284;
chunk__48231_48280 = G__48285;
count__48232_48281 = G__48286;
i__48233_48282 = G__48287;
continue;
} else {
var temp__5804__auto___48288 = cljs.core.seq(seq__48230_48279);
if(temp__5804__auto___48288){
var seq__48230_48289__$1 = temp__5804__auto___48288;
if(cljs.core.chunked_seq_QMARK_(seq__48230_48289__$1)){
var c__5568__auto___48290 = cljs.core.chunk_first(seq__48230_48289__$1);
var G__48291 = cljs.core.chunk_rest(seq__48230_48289__$1);
var G__48292 = c__5568__auto___48290;
var G__48293 = cljs.core.count(c__5568__auto___48290);
var G__48294 = (0);
seq__48230_48279 = G__48291;
chunk__48231_48280 = G__48292;
count__48232_48281 = G__48293;
i__48233_48282 = G__48294;
continue;
} else {
var y_48295 = cljs.core.first(seq__48230_48289__$1);
(ctx.fillStyle = "black");

ctx.fillRect(x,y_48295,l,l);


var G__48296 = cljs.core.next(seq__48230_48289__$1);
var G__48297 = null;
var G__48298 = (0);
var G__48299 = (0);
seq__48230_48279 = G__48296;
chunk__48231_48280 = G__48297;
count__48232_48281 = G__48298;
i__48233_48282 = G__48299;
continue;
}
} else {
}
}
break;
}

var G__48300 = seq__48222;
var G__48301 = chunk__48227;
var G__48302 = count__48228;
var G__48303 = (i__48229 + (1));
seq__48222 = G__48300;
chunk__48227 = G__48301;
count__48228 = G__48302;
i__48229 = G__48303;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48222);
if(temp__5804__auto__){
var seq__48222__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48222__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48222__$1);
var G__48304 = cljs.core.chunk_rest(seq__48222__$1);
var G__48305 = c__5568__auto__;
var G__48306 = cljs.core.count(c__5568__auto__);
var G__48307 = (0);
seq__48222 = G__48304;
chunk__48227 = G__48305;
count__48228 = G__48306;
i__48229 = G__48307;
continue;
} else {
var x = cljs.core.first(seq__48222__$1);
var seq__48223_48308 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),h,l));
var chunk__48224_48309 = null;
var count__48225_48310 = (0);
var i__48226_48311 = (0);
while(true){
if((i__48226_48311 < count__48225_48310)){
var y_48312 = chunk__48224_48309.cljs$core$IIndexed$_nth$arity$2(null,i__48226_48311);
(ctx.fillStyle = "black");

ctx.fillRect(x,y_48312,l,l);


var G__48313 = seq__48223_48308;
var G__48314 = chunk__48224_48309;
var G__48315 = count__48225_48310;
var G__48316 = (i__48226_48311 + (1));
seq__48223_48308 = G__48313;
chunk__48224_48309 = G__48314;
count__48225_48310 = G__48315;
i__48226_48311 = G__48316;
continue;
} else {
var temp__5804__auto___48317__$1 = cljs.core.seq(seq__48223_48308);
if(temp__5804__auto___48317__$1){
var seq__48223_48318__$1 = temp__5804__auto___48317__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48223_48318__$1)){
var c__5568__auto___48319 = cljs.core.chunk_first(seq__48223_48318__$1);
var G__48320 = cljs.core.chunk_rest(seq__48223_48318__$1);
var G__48321 = c__5568__auto___48319;
var G__48322 = cljs.core.count(c__5568__auto___48319);
var G__48323 = (0);
seq__48223_48308 = G__48320;
chunk__48224_48309 = G__48321;
count__48225_48310 = G__48322;
i__48226_48311 = G__48323;
continue;
} else {
var y_48324 = cljs.core.first(seq__48223_48318__$1);
(ctx.fillStyle = "black");

ctx.fillRect(x,y_48324,l,l);


var G__48325 = cljs.core.next(seq__48223_48318__$1);
var G__48326 = null;
var G__48327 = (0);
var G__48328 = (0);
seq__48223_48308 = G__48325;
chunk__48224_48309 = G__48326;
count__48225_48310 = G__48327;
i__48226_48311 = G__48328;
continue;
}
} else {
}
}
break;
}

var G__48329 = cljs.core.next(seq__48222__$1);
var G__48330 = null;
var G__48331 = (0);
var G__48332 = (0);
seq__48222 = G__48329;
chunk__48227 = G__48330;
count__48228 = G__48331;
i__48229 = G__48332;
continue;
}
} else {
return null;
}
}
break;
}
})], null),(function (){var state_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cycle(cljs.core.list("/","\u2014","\\ ","|")));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"p","p",151049309)],[(407),"white",l,l,counter(),(103),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),null], null), null),(function (p__48234){
var map__48235 = p__48234;
var map__48235__$1 = cljs.core.__destructure_map(map__48235);
var this$ = map__48235__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48235__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48235__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48235__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48235__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48235__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48235__$1,new cljs.core.Keyword(null,"v","v",21465059));
var ctx = document.getElementById("canvas").getContext("2d");
(ctx.font = "84px serif");

return ctx.fillText(cljs.core.first(cljs.core.deref(state_)),x,y);
}),(function (this$){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_,cljs.core.rest);
}),(7)]);
})(),(0)]);
var offset_x = ((10) * l);
var offset_y = ((10) * l);
var x = cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$3(offset_x,(w - offset_x),l));
var y = cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$3(offset_y,(h - offset_y),l));
var heart = (function (){var id = counter();
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Keyword(null,"p","p",151049309)],[y,"blue",(l * (4)),(l * (4)),id,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heart","heart",1848849955),null], null), null),(function (p__48236){
var map__48237 = p__48236;
var map__48237__$1 = cljs.core.__destructure_map(map__48237);
var this$ = map__48237__$1;
var x__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48237__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48237__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48237__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48237__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48237__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var ctx = document.getElementById("canvas").getContext("2d");
(ctx.fillStyle = color);

return ctx.fillRect(x__$1,y__$1,w__$1,h__$1);
}),(2)])]);
})();
var imp = (function (){var id = counter();
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"agenda","agenda",-887941807),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Keyword(null,"p","p",151049309)],[y,"yellow",l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"explore","explore",1024581016)], null),l,id,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"imp","imp",-1661098259),null], null), null),(function (p__48238){
var map__48239 = p__48238;
var map__48239__$1 = cljs.core.__destructure_map(map__48239);
var this$ = map__48239__$1;
var x__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48239__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48239__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48239__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48239__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48239__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var ctx = context();
(ctx.fillStyle = color);

return ctx.fillRect(x__$1,y__$1,w__$1,h__$1);
}),(3)])]);
})();
var m1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m0,heart,imp], 0));
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(m1);
})();
}
tunnl71.electron_game.render.render = (function tunnl71$electron_game$render$render(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["init! cybergame"], 0));

var tick_per_second_48333 = reagent.core.cursor(tunnl71.electron_game.render.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tick","per-second","tick/per-second",-1111497267)], null));
reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var with_let48240 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let48240","with-let48240",-1755572504));
var temp__5808__auto___48334 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___48334 == null)){
} else {
var c__20863__auto___48335 = temp__5808__auto___48334;
if((with_let48240.generation === c__20863__auto___48335.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let48240.generation = c__20863__auto___48335.ratomGeneration);
}

var init48241 = (with_let48240.length === (0));
var interval_id = ((((init48241) || (cljs.core.not(with_let48240.hasOwnProperty((0))))))?(with_let48240[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let48240[(0)]));
var res48242 = (function (tick_per_second_){
var tick_per_second__ = cljs.core.deref(tick_per_second_);
clearInterval(cljs.core.deref(interval_id));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),tick_per_second__)){
return cljs.core.reset_BANG_(interval_id,setInterval(tunnl71.electron_game.render.step_BANG_,((1000) / tick_per_second__),tunnl71.electron_game.render.state));
} else {
return null;
}
});
return res48242;
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick_per_second_48333], 0));

tunnl71.electron_game.render.step_BANG_(tunnl71.electron_game.render.state);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tunnl71.electron_game.render.root_frame,tunnl71.electron_game.render.state], null),document.getElementById("app"));
});

//# sourceMappingURL=tunnl71.electron_game.render.js.map
