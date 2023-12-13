goog.provide('tunnl71.electron_node.tone.core');
var module$node_modules$tone$build$Tone=shadow.js.require("module$node_modules$tone$build$Tone", {});
tunnl71.electron_node.tone.core.tone = module$node_modules$tone$build$Tone;
tunnl71.electron_node.tone.core.now = (function tunnl71$electron_node$tone$core$now(){
return module$node_modules$tone$build$Tone.now();
});
tunnl71.electron_node.tone.core.create_timer = (function tunnl71$electron_node$tone$core$create_timer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23231 = arguments.length;
var i__5770__auto___23232 = (0);
while(true){
if((i__5770__auto___23232 < len__5769__auto___23231)){
args__5775__auto__.push((arguments[i__5770__auto___23232]));

var G__23233 = (i__5770__auto___23232 + (1));
i__5770__auto___23232 = G__23233;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return tunnl71.electron_node.tone.core.create_timer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(tunnl71.electron_node.tone.core.create_timer.cljs$core$IFn$_invoke$arity$variadic = (function (p__23217){
var vec__23218 = p__23217;
var sec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23218,(0),null);
var all = vec__23218;
var begin = tunnl71.electron_node.tone.core.now();
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sec], 0));
var interval_id = (cljs.core.truth_(sec)?setInterval((function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(tunnl71.electron_node.tone.core.now() - begin)], 0));
}),(1000)):null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["interval-id ",interval_id], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("timer","fn","timer/fn",-1350113895),(function (){
var now_ = (tunnl71.electron_node.tone.core.now() - begin);
return now_;
}),new cljs.core.Keyword("timer","interval-id","timer/interval-id",-26360789),interval_id], null);
}));

(tunnl71.electron_node.tone.core.create_timer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tunnl71.electron_node.tone.core.create_timer.cljs$lang$applyTo = (function (seq23216){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23216));
}));

tunnl71.electron_node.tone.core.player2 = (function tunnl71$electron_node$tone$core$player2(path,onload){
var this$ = (new module$node_modules$tone$build$Tone.Player());
var promise = this$.load(path);
return promise.then(onload);
});
/**
 * I𝕊REAALLLΨASYNC!!!
 */
tunnl71.electron_node.tone.core.player = (function tunnl71$electron_node$tone$core$player(var_args){
var G__23222 = arguments.length;
switch (G__23222) {
case 0:
return tunnl71.electron_node.tone.core.player.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tunnl71.electron_node.tone.core.player.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tunnl71.electron_node.tone.core.player.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tunnl71.electron_node.tone.core.player.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new module$node_modules$tone$build$Tone.Player());
}));

(tunnl71.electron_node.tone.core.player.cljs$core$IFn$_invoke$arity$1 = (function (path){
return (new module$node_modules$tone$build$Tone.Player(path));
}));

(tunnl71.electron_node.tone.core.player.cljs$core$IFn$_invoke$arity$2 = (function (path,config){
var default_config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fadeOut","fadeOut",2001571117),new cljs.core.Keyword(null,"loopEnd","loopEnd",-665237715),new cljs.core.Keyword(null,"loop","loop",-395552849),new cljs.core.Keyword(null,"loopStart","loopStart",-803215854),new cljs.core.Keyword(null,"onload","onload",113170835),new cljs.core.Keyword(null,"playbackRate","playbackRate",-1060121452),new cljs.core.Keyword(null,"fadeIn","fadeIn",663633658),new cljs.core.Keyword(null,"autostart","autostart",-2028194117),new cljs.core.Keyword(null,"reverse","reverse",-888455266)],[(0),(0),false,(0),tunnl71.electron_node.tone.core.tone.noOp,(1),(0),false,false]);
return (new module$node_modules$tone$build$Tone.Player(path)).set(cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_config,config], 0))));
}));

(tunnl71.electron_node.tone.core.player.cljs$lang$maxFixedArity = 2);

tunnl71.electron_node.tone.core.player_delay = (function tunnl71$electron_node$tone$core$player_delay(var_args){
var G__23224 = arguments.length;
switch (G__23224) {
case 1:
return tunnl71.electron_node.tone.core.player_delay.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tunnl71.electron_node.tone.core.player_delay.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tunnl71.electron_node.tone.core.player_delay.cljs$core$IFn$_invoke$arity$1 = (function (path){
return tunnl71.electron_node.tone.core.player.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(tunnl71.electron_node.tone.core.player_delay.cljs$core$IFn$_invoke$arity$2 = (function (path,config){
var default_config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fadeOut","fadeOut",2001571117),new cljs.core.Keyword(null,"loopEnd","loopEnd",-665237715),new cljs.core.Keyword(null,"loop","loop",-395552849),new cljs.core.Keyword(null,"loopStart","loopStart",-803215854),new cljs.core.Keyword(null,"onload","onload",113170835),new cljs.core.Keyword(null,"playbackRate","playbackRate",-1060121452),new cljs.core.Keyword(null,"fadeIn","fadeIn",663633658),new cljs.core.Keyword(null,"autostart","autostart",-2028194117),new cljs.core.Keyword(null,"reverse","reverse",-888455266)],[(0),(0),false,(0),tunnl71.electron_node.tone.core.tone.noOp,(1),(0),false,false]);
return (new cljs.core.Delay((function (){
return (new module$node_modules$tone$build$Tone.Player(path)).set(cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_config,config], 0))));
}),null));
}));

(tunnl71.electron_node.tone.core.player_delay.cljs$lang$maxFixedArity = 2);

tunnl71.electron_node.tone.core.delay_effect = (function tunnl71$electron_node$tone$core$delay_effect(sec){
return (new tunnl71.electron_node.tone.core.tone.Delay(sec));
});
/**
 * 1 octave = 12
 */
tunnl71.electron_node.tone.core.pitch_shift = (function tunnl71$electron_node$tone$core$pitch_shift(var_args){
var G__23226 = arguments.length;
switch (G__23226) {
case 0:
return tunnl71.electron_node.tone.core.pitch_shift.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tunnl71.electron_node.tone.core.pitch_shift.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tunnl71.electron_node.tone.core.pitch_shift.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new module$node_modules$tone$build$Tone.PitchShift());
}));

(tunnl71.electron_node.tone.core.pitch_shift.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new module$node_modules$tone$build$Tone.PitchShift(x));
}));

(tunnl71.electron_node.tone.core.pitch_shift.cljs$lang$maxFixedArity = 1);

tunnl71.electron_node.tone.core.destination = module$node_modules$tone$build$Tone.Destination;
tunnl71.electron_node.tone.core.max_volume = (0);
tunnl71.electron_node.tone.core.master_volume = (function tunnl71$electron_node$tone$core$master_volume(){
return module$node_modules$tone$build$Tone.Master.volume.value;
});
tunnl71.electron_node.tone.core.set_master_volume_BANG_ = (function tunnl71$electron_node$tone$core$set_master_volume_BANG_(x){
if((x > tunnl71.electron_node.tone.core.max_volume)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["vol too loud"], 0));
} else {
return (module$node_modules$tone$build$Tone.Master.volume.value = x);
}
});
tunnl71.electron_node.tone.core.current_volume = (function tunnl71$electron_node$tone$core$current_volume(){
return new cljs.core.Keyword(null,"volume","volume",1900330799).cljs$core$IFn$_invoke$arity$1(clojure.datafy.datafy(tunnl71.electron_node.tone.core.player)).value;
});
tunnl71.electron_node.tone.core.volume_update_BANG_ = (function tunnl71$electron_node$tone$core$volume_update_BANG_(delta){
var x = tunnl71.electron_node.tone.core.player.volume.value;
return (tunnl71.electron_node.tone.core.player.volume.value = (delta + x));
});
tunnl71.electron_node.tone.core.volume_up_BANG_ = (function tunnl71$electron_node$tone$core$volume_up_BANG_(var_args){
var G__23228 = arguments.length;
switch (G__23228) {
case 0:
return tunnl71.electron_node.tone.core.volume_up_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tunnl71.electron_node.tone.core.volume_up_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tunnl71.electron_node.tone.core.volume_up_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return tunnl71.electron_node.tone.core.volume_up_BANG_.cljs$core$IFn$_invoke$arity$1((10));
}));

(tunnl71.electron_node.tone.core.volume_up_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (delta){
return tunnl71.electron_node.tone.core.volume_update_BANG_(delta);
}));

(tunnl71.electron_node.tone.core.volume_up_BANG_.cljs$lang$maxFixedArity = 1);

tunnl71.electron_node.tone.core.volume_down_BANG_ = (function tunnl71$electron_node$tone$core$volume_down_BANG_(var_args){
var G__23230 = arguments.length;
switch (G__23230) {
case 0:
return tunnl71.electron_node.tone.core.volume_down_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tunnl71.electron_node.tone.core.volume_down_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tunnl71.electron_node.tone.core.volume_down_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return tunnl71.electron_node.tone.core.volume_down_BANG_.cljs$core$IFn$_invoke$arity$1((10));
}));

(tunnl71.electron_node.tone.core.volume_down_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (δ){
return tunnl71.electron_node.tone.core.volume_update_BANG_((- δ));
}));

(tunnl71.electron_node.tone.core.volume_down_BANG_.cljs$lang$maxFixedArity = 1);

tunnl71.electron_node.tone.core.play_BANG_ = (function tunnl71$electron_node$tone$core$play_BANG_(player){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tunnl71.electron_node.tone.core.current_volume()], 0));

while(true){
if((tunnl71.electron_node.tone.core.current_volume() >= (-10))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["too loud"], 0));

tunnl71.electron_node.tone.core.volume_down_BANG_.cljs$core$IFn$_invoke$arity$0();

continue;
} else {
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("started",player.state)){
player.stop();
} else {
player.start();
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["volume: ",tunnl71.electron_node.tone.core.current_volume()], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([player.state], 0));
});

//# sourceMappingURL=tunnl71.electron_node.tone.core.js.map
