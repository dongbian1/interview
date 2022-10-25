import Vue from 'vue'

export default Vue.extend({
  props: {
    renderFn: {
      type: Function,
      required: true
    },
    params: {
      type: Object,
      default: () => ({})
    }
  },
  render(h) {
    return this.renderFn(h, this.params)
  }
})
