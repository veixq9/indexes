goog.provide('clojure.core.matrix.impl.double_array');
/**
 * Creates a new zero-filled nested double array of the given shape
 */
clojure.core.matrix.impl.double_array.new_double_array = (function clojure$core$matrix$impl$double_array$new_double_array(shape){
var dims = cljs.core.count(shape);
if(((0) === dims)){
return 0.0;
} else {
if(((1) === dims)){
return cljs.core.double_array.cljs$core$IFn$_invoke$arity$1((cljs.core.first(shape) | (0)));
} else {
var ns = cljs.core.next(shape);
var rn = cljs.core.long$(cljs.core.first(shape));
var r0 = (clojure.core.matrix.impl.double_array.new_double_array.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.impl.double_array.new_double_array.cljs$core$IFn$_invoke$arity$1(ns) : clojure.core.matrix.impl.double_array.new_double_array.call(null,ns));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(r0,(function (){var iter__5523__auto__ = (function clojure$core$matrix$impl$double_array$new_double_array_$_iter__36890(s__36891){
return (new cljs.core.LazySeq(null,(function (){
var s__36891__$1 = s__36891;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__36891__$1);
if(temp__5804__auto__){
var s__36891__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36891__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36891__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36893 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36892 = (0);
while(true){
if((i__36892 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__36892);
cljs.core.chunk_append(b__36893,(clojure.core.matrix.impl.double_array.new_double_array.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.impl.double_array.new_double_array.cljs$core$IFn$_invoke$arity$1(ns) : clojure.core.matrix.impl.double_array.new_double_array.call(null,ns)));

var G__36961 = (i__36892 + (1));
i__36892 = G__36961;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36893),clojure$core$matrix$impl$double_array$new_double_array_$_iter__36890(cljs.core.chunk_rest(s__36891__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36893),null);
}
} else {
var i = cljs.core.first(s__36891__$2);
return cljs.core.cons((clojure.core.matrix.impl.double_array.new_double_array.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.impl.double_array.new_double_array.cljs$core$IFn$_invoke$arity$1(ns) : clojure.core.matrix.impl.double_array.new_double_array.call(null,ns)),clojure$core$matrix$impl$double_array$new_double_array_$_iter__36890(cljs.core.rest(s__36891__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((rn - (1))));
})()));

}
}
});
clojure.core.matrix.impl.double_array.construct_double_array = (function clojure$core$matrix$impl$double_array$construct_double_array(data){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(data));
if((dims === (1))){
var n = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(data,(0)));
var r = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(n);
var n__5636__auto___36962 = n;
var i_36963 = (0);
while(true){
if((i_36963 < n__5636__auto___36962)){
(r[i_36963] = clojure.core.matrix.protocols.get_1d(data,i_36963));

var G__36964 = (i_36963 + (1));
i_36963 = G__36964;
continue;
} else {
}
break;
}

return r;
} else {
if((dims === (0))){
return clojure.core.matrix.protocols.get_0d(data);
} else {
return null;

}
}
});
(clojure.core.matrix.protocols.PImmutableAssignment["array"] = true);

(clojure.core.matrix.protocols.assign["array"] = (function (m,source){
return null;
}));
(clojure.core.matrix.protocols.PAssignment["array"] = true);

(clojure.core.matrix.protocols.assign_BANG_["array"] = (function (m,source){
var n__5636__auto___36965 = cljs.core.count(source);
var i_36966 = (0);
while(true){
if((i_36966 < n__5636__auto___36965)){
clojure.core.matrix.protocols.set_1d_BANG_(m,i_36966,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(source,i_36966));

var G__36967 = (i_36966 + (1));
i_36966 = G__36967;
continue;
} else {
}
break;
}

return m;
}));

(clojure.core.matrix.protocols.assign_array_BANG_["array"] = (function (m,arr,start,length){
var length_36968__$1 = cljs.core.long$(length);
var start_36969__$1 = cljs.core.long$(start);
var n__5636__auto___36970 = length_36968__$1;
var i_36971 = (0);
while(true){
if((i_36971 < n__5636__auto___36970)){
clojure.core.matrix.protocols.set_1d_BANG_(m,i_36971,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arr,(start_36969__$1 + i_36971)));

var G__36972 = (i_36971 + (1));
i_36971 = G__36972;
continue;
} else {
}
break;
}

return m;
}));
(clojure.core.matrix.protocols.PImplementation["array"] = true);

(clojure.core.matrix.protocols.implementation_key["array"] = (function (m){
return new cljs.core.Keyword(null,"number-array","number-array",-676376237);
}));

(clojure.core.matrix.protocols.meta_info["array"] = (function (m){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Clojure.core.matrix implementation for JS arrays"], null);
}));

(clojure.core.matrix.protocols.new_vector["array"] = (function (m,length){
return cljs.core.double_array.cljs$core$IFn$_invoke$arity$1((length | (0)));
}));

(clojure.core.matrix.protocols.new_matrix["array"] = (function (m,rows,columns){
return clojure.core.matrix.impl.double_array.new_double_array(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,columns], null));
}));

(clojure.core.matrix.protocols.new_matrix_nd["array"] = (function (m,shape){
return clojure.core.matrix.impl.double_array.new_double_array(shape);
}));

(clojure.core.matrix.protocols.construct_matrix["array"] = (function (m,data){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(data));
if((dims === (2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Double arrays in cljs only support a single dimension currently - submit a patch!",cljs.core.PersistentArrayMap.EMPTY);
} else {
if((dims === (1))){
var n = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(data,(0)));
var arr = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(n);
var n__5636__auto___36975 = n;
var i_36976 = (0);
while(true){
if((i_36976 < n__5636__auto___36975)){
(arr[i_36976] = clojure.core.matrix.protocols.get_1d(data,i_36976));

var G__36977 = (i_36976 + (1));
i_36976 = G__36977;
continue;
} else {
}
break;
}

return arr;
} else {
if((dims === (0))){
return clojure.core.matrix.protocols.get_0d(data);
} else {
return null;

}
}
}
}));

(clojure.core.matrix.protocols.supports_dimensionality_QMARK_["array"] = (function (m,dims){
var dims__$1 = cljs.core.long$(dims);
return (((dims__$1 === (1))) || ((dims__$1 === (2))));
}));
(clojure.core.matrix.protocols.PDimensionInfo["array"] = true);

(clojure.core.matrix.protocols.dimensionality["array"] = (function (m){
return (1);
}));

(clojure.core.matrix.protocols.is_vector_QMARK_["array"] = (function (m){
return true;
}));

(clojure.core.matrix.protocols.is_scalar_QMARK_["array"] = (function (m){
return false;
}));

(clojure.core.matrix.protocols.get_shape["array"] = (function (m){
return (new cljs.core.List(null,cljs.core.count(m),null,(1),null));
}));

(clojure.core.matrix.protocols.dimension_count["array"] = (function (m,x){
if((cljs.core.long$(x) === (0))){
return cljs.core.count(m);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Double array does not have dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
(clojure.core.matrix.protocols.PReshaping["array"] = true);

(clojure.core.matrix.protocols.reshape["array"] = (function (m,shape){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_shape(m),shape)){
return m;
} else {
var gv = clojure.core.matrix.protocols.generic_value(m);
var es = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_seq(m),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(gv));
var partition_shape = (function clojure$core$matrix$impl$double_array$partition_shape(es__$1,shape__$1){
var temp__5802__auto__ = cljs.core.seq(shape__$1);
if(temp__5802__auto__){
var s = temp__5802__auto__;
var ns = cljs.core.next(s);
var plen = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,(1),ns);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36936_SHARP_){
return clojure$core$matrix$impl$double_array$partition_shape(p1__36936_SHARP_,ns);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(plen,es__$1));
} else {
return cljs.core.first(es__$1);
}
});
var temp__5802__auto__ = cljs.core.seq(shape);
if(temp__5802__auto__){
var shape__$1 = temp__5802__auto__;
var fs = cljs.core.long$(cljs.core.first(shape__$1));
var parts = partition_shape(es,shape__$1);
var or__5045__auto__ = clojure.core.matrix.protocols.construct_matrix(m,cljs.core.take.cljs$core$IFn$_invoke$arity$2(fs,parts));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.protocols.construct_matrix(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(fs,parts));
}
} else {
return cljs.core.first(es);
}
}
}));
(clojure.core.matrix.protocols.PTypeInfo["array"] = true);

(clojure.core.matrix.protocols.element_type["array"] = (function (m){
return Number;
}));
(clojure.core.matrix.protocols.PIndexedAccess["array"] = true);

(clojure.core.matrix.protocols.get_1d["array"] = (function (m,x){
return (m[(x | (0))]);
}));

(clojure.core.matrix.protocols.get_2d["array"] = (function (m,row,column){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do get-2D from 1D double array",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.get_nd["array"] = (function (m,indexes){
if(((1) === cljs.core.count(indexes))){
return (m[(cljs.core.first(indexes) | (0))]);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't get from double array with dimensionality: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(indexes))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
(clojure.core.matrix.protocols.PIndexedSetting["array"] = true);

(clojure.core.matrix.protocols.set_1d["array"] = (function (m,x,v){
var arr = m.slice();
(arr[(x | (0))] = v);

return arr;
}));

(clojure.core.matrix.protocols.set_2d["array"] = (function (m,x,y,v){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D set on double array",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.set_nd["array"] = (function (m,indexes,v){
if(((1) === cljs.core.count(indexes))){
var arr = m.slice();
var x = (cljs.core.first(indexes) | (0));
(arr[(x | (0))] = v);

return arr;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't set on double array with dimensionality: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(indexes))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));

(clojure.core.matrix.protocols.is_mutable_QMARK_["array"] = (function (m){
return true;
}));
(clojure.core.matrix.protocols.PIndexedSettingMutable["array"] = true);

(clojure.core.matrix.protocols.set_1d_BANG_["array"] = (function (m,x,v){
(m[(x | (0))] = v);

return m;
}));

(clojure.core.matrix.protocols.set_2d_BANG_["array"] = (function (m,x,y,v){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D set on double array",cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.set_nd_BANG_["array"] = (function (m,indexes,v){
if(((1) === cljs.core.count(indexes))){
(m[(cljs.core.first(indexes) | (0))] = v);

return m;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't set on double array with dimensionality: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(indexes))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
(clojure.core.matrix.protocols.PMutableMatrixConstruction["array"] = true);

(clojure.core.matrix.protocols.mutable_matrix["array"] = (function (m){
return m.slice();
}));
(clojure.core.matrix.protocols.PMatrixScaling["array"] = true);

(clojure.core.matrix.protocols.scale["array"] = (function (m,a){
var m__$1 = m;
var len = m__$1.length;
var arr = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(len);
var a__$1 = a;
var n__5636__auto___37008 = len;
var i_37009 = (0);
while(true){
if((i_37009 < n__5636__auto___37008)){
(arr[i_37009] = (a__$1 * (m__$1[i_37009])));

var G__37010 = (i_37009 + (1));
i_37009 = G__37010;
continue;
} else {
}
break;
}

return arr;
}));

(clojure.core.matrix.protocols.pre_scale["array"] = (function (m,a){
var m__$1 = m;
var len = m__$1.length;
var arr = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(len);
var a__$1 = a;
var n__5636__auto___37018 = len;
var i_37019 = (0);
while(true){
if((i_37019 < n__5636__auto___37018)){
(arr[i_37019] = (a__$1 * (m__$1[i_37019])));

var G__37020 = (i_37019 + (1));
i_37019 = G__37020;
continue;
} else {
}
break;
}

return arr;
}));
(clojure.core.matrix.protocols.PMatrixMutableScaling["array"] = true);

(clojure.core.matrix.protocols.scale_BANG_["array"] = (function (m,a){
var m__$1 = m;
var a__$1 = a;
var n__5636__auto__ = m__$1.length;
var i = (0);
while(true){
if((i < n__5636__auto__)){
(m__$1[i] = (a__$1 * (m__$1[i])));

var G__37021 = (i + (1));
i = G__37021;
continue;
} else {
return null;
}
break;
}
}));

(clojure.core.matrix.protocols.pre_scale_BANG_["array"] = (function (m,a){
var m__$1 = m;
var a__$1 = a;
var n__5636__auto__ = m__$1.length;
var i = (0);
while(true){
if((i < n__5636__auto__)){
(m__$1[i] = (a__$1 * (m__$1[i])));

var G__37022 = (i + (1));
i = G__37022;
continue;
} else {
return null;
}
break;
}
}));
(clojure.core.matrix.protocols.PConversion["array"] = true);

(clojure.core.matrix.protocols.convert_to_nested_vectors["array"] = (function (m){
return cljs.core.vec(m);
}));
(clojure.core.matrix.protocols.PFunctionalOperations["array"] = true);

(clojure.core.matrix.protocols.element_seq["array"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.element_map["array"] = (function() {
var G__37023 = null;
var G__37023__2 = (function (m,f){
var cnt = m.length;
var r = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(cnt);
var n__5636__auto___37024 = cnt;
var i_37025 = (0);
while(true){
if((i_37025 < n__5636__auto___37024)){
(r[i_37025] = (function (){var G__36938 = (m[i_37025]);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36938) : f.call(null,G__36938));
})());

var G__37026 = (i_37025 + (1));
i_37025 = G__37026;
continue;
} else {
}
break;
}

return r;
});
var G__37023__3 = (function (m,f,a){
var r = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(m);
var a__$1 = clojure.core.matrix.protocols.broadcast_coerce(r,a);
var n__5636__auto___37027 = m.length;
var i_37028 = (0);
while(true){
if((i_37028 < n__5636__auto___37027)){
(r[i_37028] = (function (){var G__36939 = (m[i_37028]);
var G__36940 = (a__$1[i_37028]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__36939,G__36940) : f.call(null,G__36939,G__36940));
})());

var G__37030 = (i_37028 + (1));
i_37028 = G__37030;
continue;
} else {
}
break;
}

return r;
});
var G__37023__4 = (function (m,f,a,more){
var r = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(m);
var a__$1 = clojure.core.matrix.protocols.broadcast_coerce(m,a);
var more__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36937_SHARP_){
return clojure.core.matrix.protocols.broadcast_coerce(m,p1__36937_SHARP_);
}),more);
var more_count = cljs.core.long$(cljs.core.count(more__$1));
var vs = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(more_count);
var n__5636__auto___37034 = m.length;
var i_37035 = (0);
while(true){
if((i_37035 < n__5636__auto___37034)){
var n__5636__auto___37036__$1 = more_count;
var j_37037 = (0);
while(true){
if((j_37037 < n__5636__auto___37036__$1)){
(vs[j_37037] = ((more__$1.cljs$core$IFn$_invoke$arity$1 ? more__$1.cljs$core$IFn$_invoke$arity$1(j_37037) : more__$1.call(null,j_37037))[i_37035]));

var G__37038 = (j_37037 + (1));
j_37037 = G__37038;
continue;
} else {
}
break;
}

(r[i_37035] = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,(m[i_37035]),(a__$1[i_37035]),vs));

var G__37039 = (i_37035 + (1));
i_37035 = G__37039;
continue;
} else {
}
break;
}

return r;
});
G__37023 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__37023__2.call(this,m,f);
case 3:
return G__37023__3.call(this,m,f,a);
case 4:
return G__37023__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37023.cljs$core$IFn$_invoke$arity$2 = G__37023__2;
G__37023.cljs$core$IFn$_invoke$arity$3 = G__37023__3;
G__37023.cljs$core$IFn$_invoke$arity$4 = G__37023__4;
return G__37023;
})()
);

(clojure.core.matrix.protocols.element_map_BANG_["array"] = (function() {
var G__37040 = null;
var G__37040__2 = (function (m,f){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map(m,f));
});
var G__37040__3 = (function (m,f,a){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map(m,f,a));
});
var G__37040__4 = (function (m,f,a,more){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map(m,f,a,more));
});
G__37040 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__37040__2.call(this,m,f);
case 3:
return G__37040__3.call(this,m,f,a);
case 4:
return G__37040__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37040.cljs$core$IFn$_invoke$arity$2 = G__37040__2;
G__37040.cljs$core$IFn$_invoke$arity$3 = G__37040__3;
G__37040.cljs$core$IFn$_invoke$arity$4 = G__37040__4;
return G__37040;
})()
);

(clojure.core.matrix.protocols.element_reduce["array"] = (function() {
var G__37041 = null;
var G__37041__2 = (function (m,f){
var m__$1 = m;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(f,m__$1);
});
var G__37041__3 = (function (m,f,init){
var m__$1 = m;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,init,m__$1);
});
G__37041 = function(m,f,init){
switch(arguments.length){
case 2:
return G__37041__2.call(this,m,f);
case 3:
return G__37041__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37041.cljs$core$IFn$_invoke$arity$2 = G__37041__2;
G__37041.cljs$core$IFn$_invoke$arity$3 = G__37041__3;
return G__37041;
})()
);
(clojure.core.matrix.protocols.PIndexImplementation["array"] = true);

(clojure.core.matrix.protocols.index_QMARK_["array"] = (function (m){
return true;
}));

(clojure.core.matrix.protocols.index_to_longs["array"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.index_to_ints["array"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.index_from_longs["array"] = (function (m,xs){
return cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(xs);
}));

(clojure.core.matrix.protocols.index_from_ints["array"] = (function (m,xs){
return cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(xs);
}));

(clojure.core.matrix.protocols.index_coerce["array"] = (function (m,a){
return m;
}));
(clojure.core.matrix.protocols.PBroadcast["array"] = true);

(clojure.core.matrix.protocols.broadcast["array"] = (function (m,new_shape){
var nshape = new_shape;
var mshape = clojure.core.matrix.protocols.get_shape(m);
var mdims = cljs.core.count(mshape);
var ndims = cljs.core.count(nshape);
if((((mdims === ndims)) && (clojure.core.matrix.utils.same_shape_object_QMARK_(nshape,mshape)))){
return m;
} else {
return clojure.core.matrix.impl.wrappers.wrap_broadcast(m,new_shape);

}
}));
(clojure.core.matrix.protocols.PNumerical["array"] = true);

(clojure.core.matrix.protocols.numerical_QMARK_["array"] = (function (m){
return true;
}));
(clojure.core.matrix.protocols.PSubVector["array"] = true);

(clojure.core.matrix.protocols.subvector["array"] = (function (m,start,length){
return clojure.core.matrix.impl.wrappers.wrap_nd(m).clojure$core$matrix$protocols$PSubVector$subvector$arity$3(null,start,length);
}));
(clojure.core.matrix.protocols.PMatrixEquality["array"] = true);

(clojure.core.matrix.protocols.matrix_equals["array"] = (function (a,b){
if((a === b)){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shape_QMARK_(a,b))){
if(((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a)))){
return (clojure.core.matrix.protocols.get_0d(a) === (function (){var x__28676__auto__ = b;
if(typeof x__28676__auto__ === 'number'){
return x__28676__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__28676__auto__);

}
})());
} else {
return cljs.core.not_any_QMARK_(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ__EQ_,clojure.core.matrix.protocols.element_seq(a),clojure.core.matrix.protocols.element_seq(b)));
}
} else {
return false;

}
}
}));
(clojure.core.matrix.protocols.PSameShape["array"] = true);

(clojure.core.matrix.protocols.same_shape_QMARK_["array"] = (function (a,b){
return clojure.core.matrix.utils.same_shape_object_QMARK_(clojure.core.matrix.protocols.get_shape(a),clojure.core.matrix.protocols.get_shape(b));
}));
(clojure.core.matrix.protocols.PSelect["array"] = true);

(clojure.core.matrix.protocols.select["array"] = (function (a,area){
var or__5045__auto__ = clojure.core.matrix.protocols.select_view(a,area);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.core.matrix.impl.wrappers.wrap_selection(a,area);
}
}));
(clojure.core.matrix.protocols.PLogistic["array"] = true);

(clojure.core.matrix.protocols.logistic["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,clojure.core.matrix.impl.common.logistic_fn);
}));
(clojure.core.matrix.protocols.PLogisticMutable["array"] = true);

(clojure.core.matrix.protocols.logistic_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,clojure.core.matrix.impl.common.logistic_fn);
}));
(clojure.core.matrix.protocols.PSoftplus["array"] = true);

(clojure.core.matrix.protocols.softplus["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,clojure.core.matrix.impl.common.softplus_fn);
}));
(clojure.core.matrix.protocols.PSoftmax["array"] = true);

(clojure.core.matrix.protocols.softmax["array"] = (function (m){
var em = clojure.core.matrix.protocols.exp(m);
return clojure.core.matrix.protocols.element_divide(em,clojure.core.matrix.protocols.element_sum(em));
}));
(clojure.core.matrix.protocols.PSoftmaxMutable["array"] = true);

(clojure.core.matrix.protocols.softmax_BANG_["array"] = (function (m){
clojure.core.matrix.protocols.exp_BANG_(m);

clojure.core.matrix.protocols.element_divide_BANG_(m,clojure.core.matrix.protocols.element_sum(m));

return m;
}));
(clojure.core.matrix.protocols.PSoftplusMutable["array"] = true);

(clojure.core.matrix.protocols.softplus_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,clojure.core.matrix.impl.common.softplus_fn);
}));
(clojure.core.matrix.protocols.PReLU["array"] = true);

(clojure.core.matrix.protocols.relu["array"] = (function (m){
return clojure.core.matrix.protocols.element_map(m,clojure.core.matrix.impl.common.relu_fn);
}));
(clojure.core.matrix.protocols.PReLUMutable["array"] = true);

(clojure.core.matrix.protocols.relu_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,clojure.core.matrix.impl.common.relu_fn);
}));
(clojure.core.matrix.protocols.PMatrixPredicates["array"] = true);

(clojure.core.matrix.protocols.identity_matrix_QMARK_["array"] = (function (m){
var rc = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
var cc = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(1)));
if((((cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)) === (2))) && ((rc === cc)))){
var i = cljs.core.long$((0));
while(true){
if((i < rc)){
if((function (){var j = cljs.core.long$((0));
while(true){
if((j < cc)){
var elem = clojure.core.matrix.protocols.get_2d(m,i,j);
if(typeof elem === 'number'){
if((i === j)){
if((elem === 1.0)){
var G__37065 = (j + (1));
j = G__37065;
continue;
} else {
return false;
}
} else {
if((elem === (0))){
var G__37067 = (j + (1));
j = G__37067;
continue;
} else {
return false;
}
}
} else {
return false;
}
} else {
return true;
}
break;
}
})()){
var G__37069 = (i + (1));
i = G__37069;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
}));

(clojure.core.matrix.protocols.zero_matrix_QMARK_["array"] = (function (m){
return cljs.core.every_QMARK_((function (p1__36941_SHARP_){
return ((typeof p1__36941_SHARP_ === 'number') && ((p1__36941_SHARP_ === (0))));
}),clojure.core.matrix.protocols.element_seq(m));
}));

(clojure.core.matrix.protocols.symmetric_QMARK_["array"] = (function (m){
var G__36942 = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
switch (G__36942) {
case (0):
return true;

break;
case (1):
return true;

break;
case (2):
var and__5043__auto__ = clojure.core.matrix.impl.common.square_QMARK_(m);
if(and__5043__auto__){
return clojure.core.matrix.impl.common.symmetric_matrix_entries_QMARK_(m);
} else {
return and__5043__auto__;
}

break;
default:
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.protocols.transpose(m));

}
}));

(clojure.core.matrix.protocols.PMatrixPredicates["number"] = true);

(clojure.core.matrix.protocols.identity_matrix_QMARK_["number"] = (function (m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),m);
}));

(clojure.core.matrix.protocols.zero_matrix_QMARK_["number"] = (function (m){
return (m === (0));
}));

(clojure.core.matrix.protocols.symmetric_QMARK_["number"] = (function (m){
return true;
}));
(clojure.core.matrix.protocols.PSummable["array"] = true);

(clojure.core.matrix.protocols.element_sum["array"] = (function (a){
return clojure.core.matrix.protocols.element_reduce(a,(cljs.core.truth_(clojure.core.matrix.protocols.numerical_QMARK_(a))?cljs.core._PLUS_:clojure.core.matrix.protocols.matrix_add));
}));
(clojure.core.matrix.protocols.PMatrixMultiply["array"] = true);

(clojure.core.matrix.protocols.matrix_multiply["array"] = (function (m,a){
var mdims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
var adims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a));
if((adims === (0))){
return clojure.core.matrix.protocols.scale(m,a);
} else {
if((((mdims === (1))) && ((adims === (1))))){
return clojure.core.matrix.protocols.vector_dot(m,a);
} else {
if((((mdims === (1))) && ((adims === (2))))){
var vec__36943 = clojure.core.matrix.protocols.get_shape(a);
var arows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36943,(0),null);
var acols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36943,(1),null);
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.matrix_multiply(clojure.core.matrix.protocols.reshape(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),arows], null)),a),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [acols], null));
} else {
if((((mdims === (2))) && ((adims === (1))))){
var vec__36946 = clojure.core.matrix.protocols.get_shape(m);
var mrows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36946,(0),null);
var mcols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36946,(1),null);
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.matrix_multiply(m,clojure.core.matrix.protocols.reshape(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols,(1)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols], null));
} else {
if((((mdims === (2))) && ((adims === (2))))){
var mutable = clojure.core.matrix.protocols.is_mutable_QMARK_(m);
var vec__36949 = clojure.core.matrix.protocols.get_shape(m);
var mrows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36949,(0),null);
var mcols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36949,(1),null);
var vec__36952 = clojure.core.matrix.protocols.get_shape(a);
var arows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36952,(0),null);
var acols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36952,(1),null);
var new_m_type = (cljs.core.truth_(mutable)?m:clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ndarray","ndarray",1659822393)));
var new_m = clojure.core.matrix.protocols.new_matrix(new_m_type,mrows,acols);
var i_37086 = cljs.core.long$((0));
while(true){
if((i_37086 < mrows)){
var j_37087 = cljs.core.long$((0));
while(true){
if((j_37087 < acols)){
clojure.core.matrix.protocols.set_2d_BANG_(new_m,i_37086,j_37087,(0));

var G__37089 = (j_37087 + (1));
j_37087 = G__37089;
continue;
} else {
}
break;
}

var G__37090 = (i_37086 + (1));
i_37086 = G__37090;
continue;
} else {
}
break;
}


var i_37091 = cljs.core.long$((0));
while(true){
if((i_37091 < mrows)){
var j_37092 = cljs.core.long$((0));
while(true){
if((j_37092 < acols)){
var k_37094 = cljs.core.long$((0));
while(true){
if((k_37094 < mcols)){
clojure.core.matrix.protocols.set_2d_BANG_(new_m,i_37091,j_37092,(clojure.core.matrix.protocols.get_2d(new_m,i_37091,j_37092) + (clojure.core.matrix.protocols.get_2d(m,i_37091,k_37094) * clojure.core.matrix.protocols.get_2d(a,k_37094,j_37092))));

var G__37098 = (k_37094 + (1));
k_37094 = G__37098;
continue;
} else {
}
break;
}

var G__37099 = (j_37092 + (1));
j_37092 = G__37099;
continue;
} else {
}
break;
}

var G__37100 = (i_37091 + (1));
i_37091 = G__37100;
continue;
} else {
}
break;
}


return new_m;
} else {
return null;
}
}
}
}
}
}));

(clojure.core.matrix.protocols.element_multiply["array"] = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.scale(m,a);
} else {
var vec__36955 = clojure.core.matrix.protocols.broadcast_compatible(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36955,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36955,(1),null);
return clojure.core.matrix.protocols.element_map(m__$1,cljs.core._STAR_,a__$1);
}
}));
(clojure.core.matrix.protocols.PMatrixMultiplyMutable["array"] = true);

(clojure.core.matrix.protocols.element_multiply_BANG_["array"] = (function (m,a){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_multiply(m,a));
}));

(clojure.core.matrix.protocols.matrix_multiply_BANG_["array"] = (function (m,a){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.matrix_multiply(m,a));
}));
(clojure.core.matrix.protocols.PMatrixDivide["array"] = true);

(clojure.core.matrix.protocols.element_divide["array"] = (function() {
var G__37102 = null;
var G__37102__1 = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.get_shape(m))){
return clojure.core.matrix.protocols.element_map(m,clojure.core.matrix.protocols.element_divide);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Don't know how to take reciprocal of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
var G__37102__2 = (function (m,a){
return clojure.core.matrix.protocols.element_multiply(m,clojure.core.matrix.protocols.element_divide(a));
});
G__37102 = function(m,a){
switch(arguments.length){
case 1:
return G__37102__1.call(this,m);
case 2:
return G__37102__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37102.cljs$core$IFn$_invoke$arity$1 = G__37102__1;
G__37102.cljs$core$IFn$_invoke$arity$2 = G__37102__2;
return G__37102;
})()
);
(clojure.core.matrix.protocols.PMatrixDivideMutable["array"] = true);

(clojure.core.matrix.protocols.element_divide_BANG_["array"] = (function() {
var G__37107 = null;
var G__37107__1 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_(m,cljs.core._SLASH_);
});
var G__37107__2 = (function (m,a){
var vec__36958 = clojure.core.matrix.protocols.broadcast_compatible(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36958,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36958,(1),null);
return clojure.core.matrix.protocols.element_map_BANG_(m__$1,cljs.core._SLASH_,a__$1);
});
G__37107 = function(m,a){
switch(arguments.length){
case 1:
return G__37107__1.call(this,m);
case 2:
return G__37107__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37107.cljs$core$IFn$_invoke$arity$1 = G__37107__1;
G__37107.cljs$core$IFn$_invoke$arity$2 = G__37107__2;
return G__37107;
})()
);
(clojure.core.matrix.protocols.PBroadcastCoerce["array"] = true);

(clojure.core.matrix.protocols.broadcast_coerce["array"] = (function (m,a){
return clojure.core.matrix.protocols.coerce_param(m,clojure.core.matrix.protocols.broadcast_like(m,a));
}));
(clojure.core.matrix.protocols.PCoercion["array"] = true);

(clojure.core.matrix.protocols.coerce_param["array"] = (function (m,param){
var param__$1 = (((param instanceof cljs.core.ISeq))?clojure.core.matrix.protocols.convert_to_nested_vectors(param):param);
var or__5045__auto__ = clojure.core.matrix.protocols.construct_matrix(m,param__$1);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return param__$1;
}
}));
(clojure.core.matrix.protocols.PBroadcastLike["array"] = true);

(clojure.core.matrix.protocols.broadcast_like["array"] = (function (m,a){
var sm = clojure.core.matrix.protocols.get_shape(m);
var sa = clojure.core.matrix.protocols.get_shape(a);
if(clojure.core.matrix.utils.same_shape_object_QMARK_(sm,sa)){
return a;
} else {
return clojure.core.matrix.protocols.broadcast(a,sm);
}
}));
(clojure.core.matrix.protocols.PMatrixOps["array"] = true);

(clojure.core.matrix.protocols.trace["array"] = (function (m){
if(((2) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Trace requires a 2D matrix",cljs.core.PersistentArrayMap.EMPTY);
}

var rc = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
var cc = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(1)));
var dims = Math.min(rc,cc);
var i = (0);
var res = 0.0;
while(true){
if((i >= dims)){
return res;
} else {
var G__37121 = (i + (1));
var G__37122 = (res + clojure.core.matrix.protocols.get_2d(m,i,i));
i = G__37121;
res = G__37122;
continue;
}
break;
}
}));

(clojure.core.matrix.protocols.determinant["array"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.inverse["array"] = (function (m){
return null;
}));

//# sourceMappingURL=clojure.core.matrix.impl.double_array.js.map
