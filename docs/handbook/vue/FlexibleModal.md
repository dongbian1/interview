---
title: 动态modal弹出框
author: 陈佳鑫
date: '2022-11-11'
---

使用`Vue.extend`动态创建Modal，使用`document`创建Div将Div挂载在body上，使用`$mount`将Modal挂载在div上，使用`$once`注册Modal抛出事件，
当modal关闭时使用`$destroy`注销组件，最后通过`document`删除div

<FlexibleModal />

### Modal代码 ###
```vue
<template>
  <el-dialog title="提示" :visible.sync="visible" width="30%" @close="handleClose">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      visible: true
    }
  },
  methods: {
    handleClose() {
      this.$emit('close')
    },
    submit() {
      this.visible = false
      this.$emit('submit', { name: '点击确定' })
    },
    close() {
      this.visible = false
    }
  }
}
</script>
```
### index代码 ###
```js
import Vue from 'vue'
import Modal from './Modal.vue'

export function ModalClass(options) {
  return new Promise((resolve, reject) => {
    const Template = Vue.extend(Modal)
    const instance = new Template({
      propsData: options,
      el: document.createElement('div')
    })
    
    document.body.appendChild(instance.$el)

    instance.$once('submit', (res) => {
      resolve(res)
    })

    instance.$once('close', () => {
      instance.$destroy()
      document.body.removeChild(instance.$el)
      reject()
    })
  })
}
```