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
      reject('关闭modal框')
    })
  })
}