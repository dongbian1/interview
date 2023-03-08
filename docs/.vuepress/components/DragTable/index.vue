<template>
  <div>
    <div class="title">
      <div v-for="item in columns" :key="item.key" class="block" :style="{ width: `${100 / columns.length}%` }">
        {{ item.title }}
      </div>
    </div>
    <transition-group name="drag" class="list" tag="div">
      <div
        v-for="(item, index) in data"
        :key="item[dataKey]"
        :draggable="draggable"
        class="list-item"
        @dragenter="dragenter($event, index)"
        @dragover="dragover($event, index)"
        @dragstart="dragstart(index)"
      >
        <div v-for="columnsItem in columns" :key="columnsItem.key" class="column" :style="{ width: `${100 / columns.length}%` }">
          <RenderJSX v-if="columnsItem.render" :render-fn="columnsItem.render" :params="item" />
          <slot v-else :row="item" :name="columnsItem.key" :index="index">
            {{ columnsItem.formatter ? columnsItem.formatter(item) : item[columnsItem.key] }}
          </slot>
        </div>
      </div>
    </transition-group>
  </div>
</template>
<script>
import RenderJSX from './RenderJSX'

export default {
  name: 'DragTable',
  components: {
    RenderJSX
  },
  props: {
    draggable: {
      type: Boolean,
      default: true
    },
    /** 表格数据 */
    data: {
      type: Array,
      default: () => []
    },
    dataKey: {
      type: String,
      default: ''
    },
    /** 表格列 */
    columns: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      dragIndex: '',
      enterIndex: ''
    }
  },
  created() {
    console.log(this.data)
  },
  methods: {
    dragstart(index) {
      this.dragIndex = index
    },
    dragenter(e, index) {
      e.preventDefault()
      if (this.dragIndex !== index) {
        const moving = this.data[this.dragIndex]
        const newData = this.data.concat([])
        newData.splice(this.dragIndex, 1)
        newData.splice(index, 0, moving)
        this.dragIndex = index
        this.$emit('onDrag', newData)
      }
    },
    dragover(e, index) {
      e.preventDefault()
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  display: flex;
  .block {
    padding: 12px 0;
    text-align: center;
    font-weight: bold;
    word-break: break-word;
    background-color: #e3e3e3;
    color: #515a6e;
    font-size: 13px;
  }
}
.list {
  list-style: none;
  .drag-move {
    transition: transform 0.3s;
  }
  .list-item {
    width: 100%;
    cursor: move;
    display: flex;
    background-color: #FAFAFA;
    .column {
      padding: 12px 0;
      text-align: center;
      border-bottom: 1px solid #dfe6ec;
    }

  }
}
</style>
