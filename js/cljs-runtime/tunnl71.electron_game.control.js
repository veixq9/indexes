goog.provide('tunnl71.electron_game.control');
tunnl71.electron_game.control.tapper_constructor = (function tunnl71$electron_game$control$tapper_constructor(state){
var c = new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return (function (p1__70687_SHARP_){
var c__18802__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18803__auto__ = (function (){var switch__18732__auto__ = (function (state_70691){
var state_val_70692 = (state_70691[(1)]);
if((state_val_70692 === (1))){
var state_70691__$1 = state_70691;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70691__$1,(2),c,p1__70687_SHARP_);
} else {
if((state_val_70692 === (2))){
var inst_70689 = (state_70691[(2)]);
var state_70691__$1 = state_70691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70691__$1,inst_70689);
} else {
return null;
}
}
});
return (function() {
var tunnl71$electron_game$control$tapper_constructor_$_state_machine__18733__auto__ = null;
var tunnl71$electron_game$control$tapper_constructor_$_state_machine__18733__auto____0 = (function (){
var statearr_70693 = [null,null,null,null,null,null,null];
(statearr_70693[(0)] = tunnl71$electron_game$control$tapper_constructor_$_state_machine__18733__auto__);

(statearr_70693[(1)] = (1));

return statearr_70693;
});
var tunnl71$electron_game$control$tapper_constructor_$_state_machine__18733__auto____1 = (function (state_70691){
while(true){
var ret_value__18734__auto__ = (function (){try{while(true){
var result__18735__auto__ = switch__18732__auto__(state_70691);
if(cljs.core.keyword_identical_QMARK_(result__18735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18735__auto__;
}
break;
}
}catch (e70694){var ex__18736__auto__ = e70694;
var statearr_70695_70727 = state_70691;
(statearr_70695_70727[(2)] = ex__18736__auto__);


if(cljs.core.seq((state_70691[(4)]))){
var statearr_70696_70728 = state_70691;
(statearr_70696_70728[(1)] = cljs.core.first((state_70691[(4)])));

} else {
throw ex__18736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70729 = state_70691;
state_70691 = G__70729;
continue;
} else {
return ret_value__18734__auto__;
}
break;
}
});
tunnl71$electron_game$control$tapper_constructor_$_state_machine__18733__auto__ = function(state_70691){
switch(arguments.length){
case 0:
return tunnl71$electron_game$control$tapper_constructor_$_state_machine__18733__auto____0.call(this);
case 1:
return tunnl71$electron_game$control$tapper_constructor_$_state_machine__18733__auto____1.call(this,state_70691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tunnl71$electron_game$control$tapper_constructor_$_state_machine__18733__auto__.cljs$core$IFn$_invoke$arity$0 = tunnl71$electron_game$control$tapper_constructor_$_state_machine__18733__auto____0;
tunnl71$electron_game$control$tapper_constructor_$_state_machine__18733__auto__.cljs$core$IFn$_invoke$arity$1 = tunnl71$electron_game$control$tapper_constructor_$_state_machine__18733__auto____1;
return tunnl71$electron_game$control$tapper_constructor_$_state_machine__18733__auto__;
})()
})();
var state__18804__auto__ = (function (){var statearr_70697 = f__18803__auto__();
(statearr_70697[(6)] = c__18802__auto__);

return statearr_70697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18804__auto__);
}));

return c__18802__auto__;
});
});
tunnl71.electron_game.control.init_tapper_BANG_ = (function tunnl71$electron_game$control$init_tapper_BANG_(state){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["init-tapper!"], 0));

return cljs.core.add_tap(tunnl71.electron_game.control.tapper_constructor(state));
});
tunnl71.electron_game.control.stop_tapper_BANG_ = (function tunnl71$electron_game$control$stop_tapper_BANG_(state){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stop-tapper!"], 0));

return cljs.core.remove_tap(tunnl71.electron_game.control.tapper_constructor(state));
});
tunnl71.electron_game.control.init_executor_BANG_ = (function tunnl71$electron_game$control$init_executor_BANG_(state){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["init-executor!"], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"executor","executor",1197215162),new cljs.core.Keyword(null,"running","running",1554969103));

var c = new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var c__18802__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18803__auto__ = (function (){var switch__18732__auto__ = (function (state_70713){
var state_val_70714 = (state_70713[(1)]);
if((state_val_70714 === (1))){
var state_70713__$1 = state_70713;
var statearr_70715_70754 = state_70713__$1;
(statearr_70715_70754[(2)] = null);

(statearr_70715_70754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70714 === (2))){
var state_70713__$1 = state_70713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70713__$1,(4),c);
} else {
if((state_val_70714 === (3))){
var inst_70711 = (state_70713[(2)]);
var state_70713__$1 = state_70713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70713__$1,inst_70711);
} else {
if((state_val_70714 === (4))){
var inst_70700 = (state_70713[(2)]);
var inst_70701 = (inst_70700.cljs$core$IFn$_invoke$arity$1 ? inst_70700.cljs$core$IFn$_invoke$arity$1(state) : inst_70700.call(null,state));
var inst_70702 = cljs.core.deref(state);
var inst_70703 = new cljs.core.Keyword(null,"executor","executor",1197215162).cljs$core$IFn$_invoke$arity$1(inst_70702);
var inst_70704 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"running","running",1554969103),inst_70703);
var state_70713__$1 = (function (){var statearr_70716 = state_70713;
(statearr_70716[(7)] = inst_70701);

return statearr_70716;
})();
if(inst_70704){
var statearr_70717_70756 = state_70713__$1;
(statearr_70717_70756[(1)] = (5));

} else {
var statearr_70718_70757 = state_70713__$1;
(statearr_70718_70757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70714 === (5))){
var state_70713__$1 = state_70713;
var statearr_70719_70758 = state_70713__$1;
(statearr_70719_70758[(2)] = null);

(statearr_70719_70758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70714 === (6))){
var state_70713__$1 = state_70713;
var statearr_70720_70759 = state_70713__$1;
(statearr_70720_70759[(2)] = null);

(statearr_70720_70759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70714 === (7))){
var inst_70709 = (state_70713[(2)]);
var state_70713__$1 = state_70713;
var statearr_70721_70760 = state_70713__$1;
(statearr_70721_70760[(2)] = inst_70709);

(statearr_70721_70760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var tunnl71$electron_game$control$init_executor_BANG__$_state_machine__18733__auto__ = null;
var tunnl71$electron_game$control$init_executor_BANG__$_state_machine__18733__auto____0 = (function (){
var statearr_70722 = [null,null,null,null,null,null,null,null];
(statearr_70722[(0)] = tunnl71$electron_game$control$init_executor_BANG__$_state_machine__18733__auto__);

(statearr_70722[(1)] = (1));

return statearr_70722;
});
var tunnl71$electron_game$control$init_executor_BANG__$_state_machine__18733__auto____1 = (function (state_70713){
while(true){
var ret_value__18734__auto__ = (function (){try{while(true){
var result__18735__auto__ = switch__18732__auto__(state_70713);
if(cljs.core.keyword_identical_QMARK_(result__18735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18735__auto__;
}
break;
}
}catch (e70723){var ex__18736__auto__ = e70723;
var statearr_70724_70764 = state_70713;
(statearr_70724_70764[(2)] = ex__18736__auto__);


if(cljs.core.seq((state_70713[(4)]))){
var statearr_70725_70765 = state_70713;
(statearr_70725_70765[(1)] = cljs.core.first((state_70713[(4)])));

} else {
throw ex__18736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70766 = state_70713;
state_70713 = G__70766;
continue;
} else {
return ret_value__18734__auto__;
}
break;
}
});
tunnl71$electron_game$control$init_executor_BANG__$_state_machine__18733__auto__ = function(state_70713){
switch(arguments.length){
case 0:
return tunnl71$electron_game$control$init_executor_BANG__$_state_machine__18733__auto____0.call(this);
case 1:
return tunnl71$electron_game$control$init_executor_BANG__$_state_machine__18733__auto____1.call(this,state_70713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tunnl71$electron_game$control$init_executor_BANG__$_state_machine__18733__auto__.cljs$core$IFn$_invoke$arity$0 = tunnl71$electron_game$control$init_executor_BANG__$_state_machine__18733__auto____0;
tunnl71$electron_game$control$init_executor_BANG__$_state_machine__18733__auto__.cljs$core$IFn$_invoke$arity$1 = tunnl71$electron_game$control$init_executor_BANG__$_state_machine__18733__auto____1;
return tunnl71$electron_game$control$init_executor_BANG__$_state_machine__18733__auto__;
})()
})();
var state__18804__auto__ = (function (){var statearr_70726 = f__18803__auto__();
(statearr_70726[(6)] = c__18802__auto__);

return statearr_70726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18804__auto__);
}));

return c__18802__auto__;
});
tunnl71.electron_game.control.stop_executor_BANG_ = (function tunnl71$electron_game$control$stop_executor_BANG_(state){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stop-executor!"], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"executor","executor",1197215162),new cljs.core.Keyword(null,"stopped","stopped",-1490414640));
});

//# sourceMappingURL=tunnl71.electron_game.control.js.map
