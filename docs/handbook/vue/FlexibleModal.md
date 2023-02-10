---
title: 动态modal弹出框
author: 陈佳鑫
date: '2022-11-11'
---

使用`Vue.extend`动态创建Modal，并且可以传递组件及参数，使用`document`创建Div将Div挂载在body上，使用`$mount`将Modal挂载在div上，使用`$once`注册Modal抛出事件，
当modal关闭时使用`$destroy`注销组件，最后通过`document`删除div

<FlexibleModal />

### Modal代码 ###
```vue
<template>
  <el-dialog title="提示" :visible.sync="visible" width="30%" @close="handleClose" :before-close="beforeClose">
    <div>这是一段信息</div>
    <component :is="component" />
    <span slot="footer" class="dialog-footer">
      <el-button @click="close" :loading="loading">取 消</el-button>
      <el-button type="primary" @click="submit" :loading="loading">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>


export default {
  props: {
    a: Number,
    confirmText: String
  },
  data() {
    return {
      visible: true,
      loading: false
    }
  },
  created() {
    this.component = Object.keys(this.$options.components)[0]
  },
  methods: {
    handleClose() {
      this.$emit('close')
    },
    async submit() {
      await this.$confirm(this.confirmText, '提示', {})
      this.loading = true
      try {
        const res = await this.onSubmit({ data: 1 })
        console.log(res)
        this.loading = false
        this.visible = false
        this.$emit('submit', { name: '点击确定' })
      } catch (error) {
        this.loading = false
      }
    },
    beforeClose(done) {
      if (!this.loading) {
        done()
      }
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
      propsData: options.props,
      components: options.components,
      methods: options.methods,
      el: document.createElement('div'),
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

### Com 组件 ###
```vue
<template>
    <span>这是自定义组件</span>
</template>
```

### 调用方法 ###
```vue
<template>
  <el-button type="primary" @click="handleOpen">打开Modal</el-button>
</template>
<script>

import { ModalClass } from './FlexibleModal/index'
import Com from './FlexibleModal/com.vue'

export default {
  data() {
    return {
      
    }
  },
  methods: {
    async handleOpen() {
      const options = {
        props: { 
          a: 1,
          confirmText: '是否确定新增当前数据？'
        },
        component: { Com },
        methods: {
          onSubmit: (params) => {
            return new Promise((resolve, reject) => {
              setInterval(() => {
                resolve(params)
              }, 3000)
            })
          }
        }
      }
      const res = await ModalClass(options)
      console.log(res)
      this.$message({
        message: '新增数据成功~',
        type: 'success'
      });
    }
  }
}
</script>
```