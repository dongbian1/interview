---
title: 可拖拽排序列表
author: 陈佳鑫
date: '2022-10-17'
---

VUE Element UI Table组件不支持拖拽排序，特编写完成开发需求
<br/>
<img class="avatar" :src="$withBase('/DragTable/1.jpg')">
<br/>
<img class="avatar" :src="$withBase('/DragTable/2.jpg')">

### template代码块 ###
``` vue
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
        :key="item[rowKey]"
        draggable
        class="list-item"
        @dragenter="dragenter($event, index)"
        @dragover="dragover($event, index)"
        @dragstart="dragstart(index)"
      >
        <div v-for="columnsItem in columns" :key="columnsItem.key" class="column" :style="{ width: `${100 / columns.length}%` }">
          <slot :row="item" :name="columnsItem.key" :index="index">
            {{ columnsItem.formatter ? columnsItem.formatter(item) : item[columnsItem.key] }}
          </slot>
        </div>
      </div>
    </transition-group>
  </div>
</template>
```

### props属性 ###
```js
props: {
  data: {
    type: Array,
    default: () => []
  },
  rowKey: {
    type: String,
    default: ''
  },
  columns: {
    type: Array,
    default: () => []
  }
}
```

| 属性 | 类型 | 说明 |
|:-----|:----|:----|
| data | `Array<any>` | 列表数据 |
| rowKey | String | 每一行key值 |
| columns | Array | 列表渲染数据 |

### Columns 属性 ###
``` js
columns() {
  return [
    { title: '序号', key: 'lotteryActivityAwardId' },
    { title: '奖品名', key: 'awardName' },
    { title: '概率（总和100%）', key: 'winRate', formatter: row => row.winRate != null ? row.winRate / 100 + '%' : '未设置' },
    { title: '总数量', key: 'totalNum', formatter: row => row.addTotalNum ? row.totalNum + ' + ' + row.addTotalNum + '(增补)' : row.totalNum },
    { title: '剩余数量', key: 'num', formatter: (row) => (row.totalNum || 0) - (row.usedNum || 0) },
    { title: '抽取数量', key: 'usedNum' },
    { title: '操作', key: 'action' }
  ]
}
```
columns计算属性声明
| 属性 | 类型 | 说明 |
|:-----|:----|:----|
| title | string | 列表标题 |
| key | string | 当前列渲染数据key |
| formatter | Function | 对渲染数据进行格式处理 |

### 完整代码 ###
```vue
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
        draggable
        class="list-item"
        @dragenter="dragenter($event, index)"
        @dragover="dragover($event, index)"
        @dragstart="dragstart(index)"
      >
        <div v-for="columnsItem in columns" :key="columnsItem.key" class="column" :style="{ width: `${100 / columns.length}%` }">
          <slot :row="item" :name="columnsItem.key" :index="index">
            {{ columnsItem.formatter ? columnsItem.formatter(item) : item[columnsItem.key] }}
          </slot>
        </div>
      </div>
    </transition-group>
  </div>
</template>
<script>

export default {
  name: 'DragTable',
  props: {
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
    height: 40px;
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
``` 

### DragTable组件 ###
```vue
<DragTable v-if="awardsData.length > 0" :columns="columns" :data-key="'awardInfo'" :data="awardsData" @onDrag="onDrag">
  <template #action="{ row, index }">
    <el-button type="text" @click="handleOpenAward(row, index)">编辑</el-button>
    <el-button v-if="!isStarted" type="text" @click="handleRemoveAward(index)">删除</el-button>
  </template>
</DragTable>
```
| 属性 | 类型 | 说明 |
|:-----|:----|:----|
| onDrag | function(arr) | 拖拽完成后返回新数组 |
<br>
可通过插槽 slot 对列进行改变，name 为当前列 key
