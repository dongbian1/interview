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