<template>
  <el-button type="primary" @click="handleOpen">打开Modal</el-button>
</template>
<script>
import { ModalClass } from './FlexibleModal/index'

export default {
  data() {
    return {
      
    }
  },
  methods: {
    handleOpen() {
      ModalClass({ a: 1 }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>