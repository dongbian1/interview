<template>
  <el-dialog title="提示" :visible.sync="visible" width="30%" @close="handleClose" :before-close="beforeClose">
    <div>这是一段信息</div>
    <component v-for="(name, index) in componentArr" :is="name" :key="index" />
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
      loading: false,
      componentArr: []
    }
  },
  created() {
    this.componentArr = Object.keys(this.$options.components)
  },
  methods: {
    handleClose() {
      this.$emit('close')
    },
    async submit() {
      let res = null
      try {
        if (this.confirmText) return await this.$confirm(this.confirmText, '提示', {})
        if (this.onSubmit) {
          this.loading = true
          res = await this.onSubmit({ data: 1 })
          this.loading = false
        }
        this.visible = false
        this.$emit('submit', res)
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