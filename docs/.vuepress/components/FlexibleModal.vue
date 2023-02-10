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
        components: { Com },
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