(window.webpackJsonp=window.webpackJsonp||[]).push([[11,18],{417:function(t,e,a){},430:function(t,e,a){"use strict";a(417)},472:function(t,e,a){"use strict";a.r(e);var r={name:"DragTable",components:{RenderJSX:a(0).default.extend({props:{renderFn:{type:Function,required:!0},params:{type:Object,default:()=>({})}},render(t){return this.renderFn(t,this.params)}})},props:{draggable:{type:Boolean,default:!0},data:{type:Array,default:()=>[]},dataKey:{type:String,default:""},columns:{type:Array,default:()=>[]}},data:()=>({dragIndex:"",enterIndex:""}),created(){console.log(this.data)},methods:{dragstart(t){this.dragIndex=t},dragenter(t,e){if(t.preventDefault(),this.dragIndex!==e){const t=this.data[this.dragIndex],a=this.data.concat([]);a.splice(this.dragIndex,1),a.splice(e,0,t),this.dragIndex=e,this.$emit("onDrag",a)}},dragover(t,e){t.preventDefault()}}},n=(a(430),a(3)),d=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"title"},t._l(t.columns,(function(a){return e("div",{key:a.key,staticClass:"block",style:{width:100/t.columns.length+"%"}},[t._v("\n      "+t._s(a.title)+"\n    ")])})),0),t._v(" "),e("transition-group",{staticClass:"list",attrs:{name:"drag",tag:"div"}},t._l(t.data,(function(a,r){return e("div",{key:a[t.dataKey],staticClass:"list-item",attrs:{draggable:t.draggable},on:{dragenter:function(e){return t.dragenter(e,r)},dragover:function(e){return t.dragover(e,r)},dragstart:function(e){return t.dragstart(r)}}},t._l(t.columns,(function(n){return e("div",{key:n.key,staticClass:"column",style:{width:100/t.columns.length+"%"}},[n.render?e("RenderJSX",{attrs:{"render-fn":n.render,params:a}}):t._t(n.key,(function(){return[t._v("\n          "+t._s(n.formatter?n.formatter(a):a[n.key])+"\n        ")]}),{row:a,index:r})],2)})),0)})),0)],1)}),[],!1,null,"49a52d54",null);e.default=d.exports},529:function(t,e,a){"use strict";a.r(e);var r={components:{DragTable:a(472).default},data:()=>({debounce:null,awardsData:[{lotteryActivityAwardId:1,awardName:"奖品一",winRate:1e3,totalNum:100,num:20,usedNum:20},{lotteryActivityAwardId:2,awardName:"奖品二",winRate:1e3,totalNum:100,num:20,usedNum:20},{lotteryActivityAwardId:3,awardName:"奖品三",winRate:1e3,totalNum:100,num:20,usedNum:20},{lotteryActivityAwardId:4,awardName:"奖品四",winRate:1e3,totalNum:100,num:20,usedNum:20},{lotteryActivityAwardId:5,awardName:"奖品五",winRate:1e3,totalNum:100,num:20,usedNum:20},{lotteryActivityAwardId:6,awardName:"奖品六",winRate:1e3,totalNum:100,num:20,usedNum:20}]}),computed:{columns(){const t=this.$createElement;return[{title:"序号",key:"lotteryActivityAwardId"},{title:"奖品名",key:"awardName"},{title:"概率（总和100%）",key:"winRate",formatter:t=>null!=t.winRate?t.winRate/100+"%":"未设置"},{title:"总数量",key:"totalNum"},{title:"剩余数量",key:"num"},{title:"抽取数量",key:"usedNum",render:e=>t("div",["21312312"])},{title:"操作",key:"action"}]}},methods:{onDrag(t){this.awardsData=t.map((t,e)=>({...t,sortNum:e+1}))}}},n=a(3),d=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("DragTable",{attrs:{columns:t.columns,"data-key":"lotteryActivityAwardId",data:t.awardsData},on:{onDrag:t.onDrag},scopedSlots:t._u([{key:"action",fn:function(){return[e("button",[t._v("编辑")]),t._v(" "),e("button",[t._v("删除")])]},proxy:!0}])})}),[],!1,null,null,null);e.default=d.exports}}]);