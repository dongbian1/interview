(window.webpackJsonp=window.webpackJsonp||[]).push([[19,24,25],{477:function(t,e,o){"use strict";o.r(e);var n={props:{a:Number,confirmText:String},data:()=>({visible:!0,loading:!1,componentArr:[]}),created(){this.componentArr=Object.keys(this.$options.components)},methods:{handleClose(){this.$emit("close")},async submit(){let t=null;try{if(this.confirmText)return await this.$confirm(this.confirmText,"提示",{});this.onSubmit&&(this.loading=!0,t=await this.onSubmit({data:1}),this.loading=!1),this.visible=!1,this.$emit("submit",t)}catch(t){return this.loading=!1,console.error(t)}},beforeClose(t){this.loading||t()},close(){this.visible=!1}}},s=o(3),i=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{title:"提示",visible:t.visible,width:"30%","before-close":t.beforeClose},on:{"update:visible":function(e){t.visible=e},close:t.handleClose}},[e("div",[t._v("这是一段信息")]),t._v(" "),t._l(t.componentArr,(function(t,o){return e(t,{key:o,tag:"component"})})),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{loading:t.loading},on:{click:t.close}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.submit}},[t._v("确 定")])],1)],2)}),[],!1,null,null,null);e.default=i.exports},480:function(t,e,o){"use strict";o.r(e);var n=o(3),s=Object(n.a)({},(function(){return(0,this._self._c)("span",[this._v("这是自定义组件")])}),[],!1,null,null,null);e.default=s.exports},523:function(t,e,o){"use strict";o.r(e);var n=o(0),s=o(477);var i=o(480),l={data:()=>({}),methods:{async handleOpen(){const t={props:{a:1,confirmText:"是否确定新增当前数据？"},components:{Com:i.default,coma:i.default},methods:{onSubmit:t=>new Promise((e,o)=>{setInterval(()=>{e(t)},3e3)})}};try{const e=await function(t){return new Promise((e,o)=>{const i=new(n.default.extend(s.default))({propsData:t.props,components:t.components,methods:t.methods,el:document.createElement("div")});document.body.appendChild(i.$el),i.$once("submit",t=>{e(t)}),i.$once("close",()=>{i.$destroy(),document.body.removeChild(i.$el),o("关闭modal框")})})}(t);console.log(e),this.$message({message:"新增数据成功~",type:"success"})}catch(t){console.error(t)}}}},r=o(3),a=Object(r.a)(l,(function(){return(0,this._self._c)("el-button",{attrs:{type:"primary"},on:{click:this.handleOpen}},[this._v("打开Modal")])}),[],!1,null,null,null);e.default=a.exports}}]);