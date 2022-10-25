<template>
  <DragTable :columns="columns" :data-key="'lotteryActivityAwardId'" :data="awardsData" @onDrag="onDrag">
    <template v-slot:action>
      <button>编辑</button>
      <button>删除</button>
    </template>
  </DragTable>
</template>
<script>
import DragTable from './DragTable/index.vue'

export default {
  components: {
    DragTable
  },
  data() {
    return {
      debounce: null,
      awardsData: [
        { lotteryActivityAwardId: 1, awardName: '奖品一', winRate: 1000, totalNum: 100, num: 20, usedNum: 20 },
        { lotteryActivityAwardId: 2, awardName: '奖品二', winRate: 1000, totalNum: 100, num: 20, usedNum: 20 },
        { lotteryActivityAwardId: 3, awardName: '奖品三', winRate: 1000, totalNum: 100, num: 20, usedNum: 20 },
        { lotteryActivityAwardId: 4, awardName: '奖品四', winRate: 1000, totalNum: 100, num: 20, usedNum: 20 },
        { lotteryActivityAwardId: 5, awardName: '奖品五', winRate: 1000, totalNum: 100, num: 20, usedNum: 20 },
        { lotteryActivityAwardId: 6, awardName: '奖品六', winRate: 1000, totalNum: 100, num: 20, usedNum: 20 },
      ]
    }
  },
  computed: {
    columns() {
      return [
        { title: '序号', key: 'lotteryActivityAwardId' },
        { title: '奖品名', key: 'awardName' },
        { title: '概率（总和100%）', key: 'winRate', formatter: row => row.winRate != null ? row.winRate / 100 + '%' : '未设置' },
        { title: '总数量', key: 'totalNum' },
        { title: '剩余数量', key: 'num' },
        { title: '抽取数量', key: 'usedNum' },
        { title: '操作', key: 'action' }
      ]
    },
  },
  methods: {
    onDrag(arr) {
      // this.awardsData = arr.map((item, index) => {
      //   return { ...item, sortNum: index + 1 }
      // })
    },
  }
}
</script>
