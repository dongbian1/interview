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
        this.$emit('submit', '点击确定')
      } catch (error) {
        this.loading = false
        return console.error(error)
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