(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{408:function(t,s,e){},422:function(t,s,e){"use strict";e(408)},428:function(t,s,e){"use strict";e.r(s);e(21);var i=e(156),a={name:"Images",components:{Draggable:e.n(i).a},props:{data:{type:Object,default:()=>{}}},data:()=>({list:{},url:"",index:null,show:!1,imageIndex:null}),computed:{size(){return"images"==this.list.type?"750*750":"750*400"},len(){return"images"==this.list.type?8:10}},mounted(){this.list=this.data},methods:{close(){this.show=!1,this.url=""},confirm(){this.list.data[this.index].link=this.url,this.close()},urlPopup(t){this.show=!0,this.index=t,this.url=link},removeImage(t){this.list.data.splice(t,1)},addImage(t){this.imageIndex=t,this.$refs.upload.$children[0].$refs.input.click()},upload(t){if(this.list.data.length>=this.len)return void this.$message.error(`最多添加${this.len}张图片!`);const s=t.file,e=[{text:"只能上传图片格式png、jpg、gif!",result:-1!=s.type.indexOf("image")},{text:"只能上传大小小于5M",result:s.size/1024/1024<5}];for(let t of e)if(!t.result)return void this.$message.error(t.text);const i=new FormData;i.append("file",s),i.append("clientType","multipart/form-data");const a=this.imageIndex,l={name:s.name,url:URL.createObjectURL(s),form:i};null!==a?this.$set(this.list.data,a,l):this.list.data.push(l)}}},l=(e(422),e(3)),n=Object(l.a)(a,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"image-content"},[s("p",{staticClass:"desc"},[t._v("添加图片 (最多"+t._s(t.len)+"张，可拖动排序）")]),t._v(" "),t.list.data&&t.list.data.length>0?s("Draggable",{staticClass:"image-list",class:{disable:2==t.data.tabType},attrs:{tag:"ul",draggable:"li"},model:{value:t.list.data,callback:function(s){t.$set(t.list,"data",s)},expression:"list.data"}},t._l(t.list.data,(function(e,i){return s("li",{key:i},[s("div",{staticClass:"l-info"},[s("p",[s("span",{staticClass:"sort"},[t._v("排序"+t._s(i+1))])]),t._v(" "),s("p",[s("span",[t._v("名称：")]),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(e&&e.name))])]),t._v(" "),s("p",[s("span",[t._v("链接：")]),t._v(" "),e.link?s("el-tooltip",{attrs:{effect:"dark",content:e.link,placement:"top"}},[s("span",{staticClass:"text",on:{click:function(s){return t.urlPopup(i,e.link)}}},[t._v(t._s(e.link))])]):s("span",{staticClass:"link",on:{click:function(s){return t.urlPopup(i)}}},[t._v("请输入跳转链接")])],1)]),t._v(" "),s("div",{staticClass:"r-image"},[s("span",{staticClass:"el-icon-close",on:{click:function(s){return t.removeImage(i)}}}),t._v(" "),s("div",{staticClass:"image-box"},[s("img",{attrs:{src:e&&e.url}}),t._v(" "),s("span",{staticClass:"el-icon-edit-outline",on:{click:function(s){return t.addImage(i)}}})])])])})),0):t._e(),t._v(" "),t.list.data&&t.list.data.length<t.len?[s("el-button",{staticClass:"add-image",attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(s){return t.addImage(null)}}},[t._v("\n            添加图片\n        ")]),t._v(" "),s("p",{staticClass:"size"},[t._v("（建议尺寸："+t._s(t.size)+"）")])]:t._e(),t._v(" "),s("el-upload",{ref:"upload",staticStyle:{display:"none"},attrs:{"http-request":t.upload,"show-file-list":!1,multiple:"",action:""}}),t._v(" "),s("el-dialog",{attrs:{title:"请填写图片跳转链接",visible:t.show},on:{"update:visible":function(s){t.show=s},close:t.close}},[s("el-form",{attrs:{"label-width":"100px"}},[s("el-form-item",{attrs:{label:"跳转链接"}},[s("el-input",{model:{value:t.url,callback:function(s){t.url=s},expression:"url"}})],1),t._v(" "),s("el-form-item",{attrs:{label:""}},[s("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确定")])],1)],1)],1)],2)}),[],!1,null,"3373197f",null);s.default=n.exports}}]);