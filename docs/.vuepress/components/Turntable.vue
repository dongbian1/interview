<template>
  <div class="index" :style="{ '--prizeAngle': prizeAngle }">
    <div :style="{ width: width + 2 + 'px', position: 'relative', margin: 'auto', overflow: 'hidden' }">
      <div
        :class="isTake ? 'disc move' : 'disc'"
        :style="{ width: width + 'px', transform: prizeAngle }"
      >
        <div
          v-for="(item, index) in prizeList"
          :key="item.index"
          class="part constellation-part"
          :style="{
            transform: `rotate(${calculationAngle(
              index
            )}deg) skewY(-${calculationAngle(index, true)}deg)`,
          }"
        >
          <div
            class="text"
            :style="{
              width: `${(width / prizeList.length) * 2}px`,
              transform: `skewY(${calculationAngle(index, true)}deg)`,
            }"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="triangle-up" />
      <div class="circular" />
    </div>
    <button v-if="!isTake" class="but" @click="luckDraw">抽 奖</button>
    <div v-else class="prizeName">中奖：{{ prizeName }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      width: 500,
      isTake: false,
      prizeAngle: 0,
      prizeList: [
        { index: 1, name: "一等奖", color: "red" },
        { index: 2, name: "二等奖", color: "red" },
        { index: 3, name: "三等奖", color: "red" },
        { index: 4, name: "四等奖", color: "red" },
        { index: 5, name: "五等奖", color: "red" },
        { index: 6, name: "六等奖", color: "red" },
        { index: 7, name: "谢谢惠顾", color: "red" },
        { index: 8, name: "再来一次", color: "red" },
      ],
      prizeName: null,
      style: {}
    };
  },
  methods: {
    calculationAngle(index, isSkewY) {
      const number = this.prizeList.length;
      let surplus = 360 % number;
      let angle = 360;
      if (surplus !== 0) {
        angle = angle - surplus;
      }
      let value = angle / number;
      let rotate = value * index - value / 2;
      let skewY = 90 - value;
      if (index === number - 1) {
        skewY -= surplus;
      }
      return isSkewY ? skewY : rotate;
    },
    luckDraw() {
      const prize = Math.abs(
        Math.round(Math.random() * this.prizeList.length - 1)
      );
      console.log(prize, this.calculationAngle(prize));
      // 计算夹角
      const includedAngle = parseInt(360 / this.prizeList.length);
     
      this.prizeAngle = `rotate(${
        3600 + 360 - (this.calculationAngle(prize) + includedAngle / 2)
      }deg)`;
      this.prizeName = this.prizeList[prize].name
      this.isTake = true;
      setTimeout(() => {
        this.isTake = false;
      },10000)
    },
  },
};
</script>
<style lang="scss" scoped>
.index {
  text-align: center;

  .disc {
    margin: 0 auto;
    width: 500px;
    height: 500px;
    border-radius: 500px;
    position: relative;
    overflow: hidden;
    border: 1px solid;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: var(--prizeAngle);
    }
  }
  .move {
    animation: rotate 10s 1 ease-in-out;
    transform: var(--prizeAngle);
  }

  .constellation-part {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 50%;
    transform-origin: 0 100%;
  }
  .part {
    border-left: 1px solid #333;
    .text {
      text-align: center;
      position: relative;
      top: 120px;
    }
  }
  .triangle-up {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 250px solid red;
    position: absolute;
    top: 0px;
    left: 246px;
  }
  .circular {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    position: absolute;
    top: 225px;
    left: 226px;
    background: red;
  }

  .but {
    margin-top: 50px;
    width: 200px;
    height: 50px;
    border-style: none;
    background: #409eff;
    color: #fff;
    font-size: 16px;
    border-radius: 10px;
  }

  .prizeName {
    margin-top: 50px;
    color: red;
    font-size: 18px;
  }
}
</style>