goog.provide('tunnl71.electron_node.helpers');
tunnl71.electron_node.helpers.audio_context = (new AudioContext());
tunnl71.electron_node.helpers.now = (function tunnl71$electron_node$helpers$now(){
return tunnl71.electron_node.helpers.audio_context.currentTime;
});
tunnl71.electron_node.helpers.node_COLON_gain = (function tunnl71$electron_node$helpers$node_COLON_gain(){
return tunnl71.electron_node.helpers.audio_context.createGain();
});
tunnl71.electron_node.helpers.panner = (function tunnl71$electron_node$helpers$panner(p__24025){
var map__24026 = p__24025;
var map__24026__$1 = cljs.core.__destructure_map(map__24026);
var ks_ = map__24026__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24026__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var coneInnerAngle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24026__$1,new cljs.core.Keyword(null,"coneInnerAngle","coneInnerAngle",1624263611));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24026__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var coneOuterGain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24026__$1,new cljs.core.Keyword(null,"coneOuterGain","coneOuterGain",-2058561789));
var maxDistance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24026__$1,new cljs.core.Keyword(null,"maxDistance","maxDistance",1547413575));
var refDistance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24026__$1,new cljs.core.Keyword(null,"refDistance","refDistance",1956525615));
var rollOfFactor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24026__$1,new cljs.core.Keyword(null,"rollOfFactor","rollOfFactor",406825841));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24026__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var coneOuterAngle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24026__$1,new cljs.core.Keyword(null,"coneOuterAngle","coneOuterAngle",146318676));
var distanceModel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24026__$1,new cljs.core.Keyword(null,"distanceModel","distanceModel",631944118));
var panningModel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24026__$1,new cljs.core.Keyword(null,"panningModel","panningModel",-2023315081));
var defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"coneOuterGain","coneOuterGain",-2058561789),new cljs.core.Keyword(null,"maxDistance","maxDistance",1547413575),new cljs.core.Keyword(null,"refDistance","refDistance",1956525615),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"rollOfFactor","rollOfFactor",406825841),new cljs.core.Keyword(null,"coneOuterAngle","coneOuterAngle",146318676),new cljs.core.Keyword(null,"distanceModel","distanceModel",631944118),new cljs.core.Keyword(null,"panningModel","panningModel",-2023315081),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"coneInnerAngle","coneInnerAngle",1624263611)],[(0),(0),(10000),(1),(0),(1),(0),"inverse","equalpower",(0),(360)]);
var ks = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,ks_], 0));
var p = tunnl71.electron_node.helpers.audio_context.createPanner(cljs.core.clj__GT_js(ks));
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ks);
cljs.core.add_watch(state,new cljs.core.Keyword(null,"x","x",2099068185),(function tunnl71$electron_node$helpers$panner_$_set_val_BANG_(){
tunnl71.electron_node.helpers.panner.orientationX.setValueAtTime((1),tunnl71.electron_node.helpers.audio_context.currentTime);

tunnl71.electron_node.helpers.panner.orientationY.setValueAtTime((1),tunnl71.electron_node.helpers.audio_context.currentTime);

return tunnl71.electron_node.helpers.panner.orientationZ.setValueAtTime((0),tunnl71.electron_node.helpers.audio_context.currentTime);
}));

return state;
});
tunnl71.electron_node.helpers.alternate_stereo_pan = (function tunnl71$electron_node$helpers$alternate_stereo_pan(p__24027){
var map__24028 = p__24027;
var map__24028__$1 = cljs.core.__destructure_map(map__24028);
var stereo_panner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24028__$1,new cljs.core.Keyword(null,"stereo-panner","stereo-panner",237023616));
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24028__$1,new cljs.core.Keyword(null,"dt","dt",-368444759),0.5);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((100),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (v,t){
return stereo_panner.valueOf().pan.setValueAtTime(v,t);
}),tunnl71.electron_node.signals.cos(Math.PI),cljs.core.iterate(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,dt),tunnl71.electron_node.helpers.now()))));
});
tunnl71.electron_node.helpers.node_COLON_panner_equalpower = (function tunnl71$electron_node$helpers$node_COLON_panner_equalpower(){
return tunnl71.electron_node.helpers.audio_context.createPanner(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panningModel","panningModel",-2023315081),"equalpower"], null)));
});
tunnl71.electron_node.helpers.panner_3d = (function tunnl71$electron_node$helpers$panner_3d(){
return tunnl71.electron_node.helpers.audio_context.createPanner(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"panningModel","panningModel",-2023315081),"hr???",new cljs.core.Keyword(null,"distanceModel","distanceModel",631944118),"inverse",new cljs.core.Keyword(null,"refDistance","refDistance",1956525615),(1),new cljs.core.Keyword(null,"maxDistance","maxDistance",1547413575),(10000),new cljs.core.Keyword(null,"rollOfFactor","rollOfFactor",406825841),(1),new cljs.core.Keyword(null,"coneInnerAngle","coneInnerAngle",1624263611),(360),new cljs.core.Keyword(null,"coneOuterAngle","coneOuterAngle",146318676),(0),new cljs.core.Keyword(null,"coneOuterGain","coneOuterGain",-2058561789),(0)], null)));
});
tunnl71.electron_node.helpers.node_COLON_stereo_panner = (function tunnl71$electron_node$helpers$node_COLON_stereo_panner(){
return tunnl71.electron_node.helpers.audio_context.createStereoPanner();
});
tunnl71.electron_node.helpers.connect = (function tunnl71$electron_node$helpers$connect(source,nodes){
var n = source;
var ns = nodes;
while(true){
if(cljs.core.empty_QMARK_(ns)){
return n.connect(tunnl71.electron_node.helpers.audio_context.destination);
} else {
n.connect(cljs.core.first(ns));

var G__24038 = cljs.core.first(ns);
var G__24039 = cljs.core.rest(ns);
n = G__24038;
ns = G__24039;
continue;
}
break;
}
});
tunnl71.electron_node.helpers.new_source_BANG_ = (function tunnl71$electron_node$helpers$new_source_BANG_(source_path){
var decoded_source = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
fetch(source_path).then((function (result){
return result.arrayBuffer().then((function (ab){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ab], 0));

return tunnl71.electron_node.helpers.audio_context.decodeAudioData(ab);
})).then((function (decoded){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["decoded",decoded], 0));

return cljs.core.reset_BANG_(decoded_source,(new AudioBufferSourceNode(tunnl71.electron_node.helpers.audio_context,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",617295198),decoded], null)))));
}));
}));

return decoded_source;
});
tunnl71.electron_node.helpers.add_pann_effect_BANG_ = (function tunnl71$electron_node$helpers$add_pann_effect_BANG_(p__24030){
var map__24031 = p__24030;
var map__24031__$1 = cljs.core.__destructure_map(map__24031);
var dz = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24031__$1,new cljs.core.Keyword(null,"dz","dz",887240762),0.1);
var z0 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24031__$1,new cljs.core.Keyword(null,"z0","z0",1878850682),tunnl71.electron_node.helpers.panner.positionZ.value0);
var x0 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24031__$1,new cljs.core.Keyword(null,"x0","x0",410843387),tunnl71.electron_node.helpers.panner.positionX.value);
var dx = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24031__$1,new cljs.core.Keyword(null,"dx","dx",-381796732),0.1);
var amplitude = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24031__$1,new cljs.core.Keyword(null,"amplitude","amplitude",-1387734203),(32));
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24031__$1,new cljs.core.Keyword(null,"dt","dt",-368444759),0.1);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24031__$1,new cljs.core.Keyword(null,"n","n",562130025),(1));
var dy = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24031__$1,new cljs.core.Keyword(null,"dy","dy",1719547243),0.1);
var y0 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24031__$1,new cljs.core.Keyword(null,"y0","y0",111454807),tunnl71.electron_node.helpers.panner.positionX.value);
var t0 = tunnl71.electron_node.helpers.now();
var ts = cljs.core.iterate((function (p1__24029_SHARP_){
return (p1__24029_SHARP_ + dt);
}),t0);
var dws = (function (d){
return cljs.core.cycle(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(amplitude,d),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(amplitude,d)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(amplitude,d)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(amplitude,d)], 0)));
});
var dxs = dws(dx);
var dys = dws(dy);
var dzs = dws(dz);
var xs = cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,x0,dxs);
var ys = cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,y0,dys);
var zs = cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,z0,dzs);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p__24032,t){
var vec__24033 = p__24032;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24033,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24033,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24033,(2),null);
tunnl71.electron_node.helpers.panner.positionX.setValueAtTime(x,t);

tunnl71.electron_node.helpers.panner.positionY.setValueAtTime(y,t);

return tunnl71.electron_node.helpers.panner.positionZ.setValueAtTime(z,t);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,xs,ys,zs),ts)));
});
tunnl71.electron_node.helpers.just_play_BANG_ = (function tunnl71$electron_node$helpers$just_play_BANG_(source_path,p__24036){
var map__24037 = p__24036;
var map__24037__$1 = cljs.core.__destructure_map(map__24037);
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24037__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24037__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24037__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24037__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.PersistentVector.EMPTY);
var decoded_source = tunnl71.electron_node.helpers.new_source_BANG_(source_path);
setTimeout((function (){
tunnl71.electron_node.helpers.connect(cljs.core.deref(decoded_source),nodes);

return cljs.core.deref(decoded_source).start(when,offset,duration);
}),(4000));

return decoded_source;
});
tunnl71.electron_node.helpers.init = (function tunnl71$electron_node$helpers$init(source_path){
return (
tunnl71.electron_node.helpers.source = tunnl71.electron_node.helpers.new_source_BANG_("/home/veix/Downloads/Solaris Ft Rubey\uFF08a song for Andrei Tarkovsky\uFF09.mp3"))
;
});

//# sourceMappingURL=tunnl71.electron_node.helpers.js.map
