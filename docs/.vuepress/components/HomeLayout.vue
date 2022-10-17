<template>
  <div>
    <div class="top">
      <div class="title">个人简介</div>
      <div class="avatar_div">
        <img class="avatar" :src="$withBase('/avatar.jpeg')">
        <div class="test">海賊王になりたい男です</div>
      </div>
    </div>
    <div class="list" v-for="item in pageList" :key="item.key">
      <router-link class="title" :to="{ path: item.path }">{{ item.title }}</router-link>
      <div class="explain">{{ item.explain }}</div>
      <div class="info">
        <div class="author">{{ item.author }}</div>
        <div class="date">{{ item.date }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageList: [
        { key: 1, title: 'React 自定义ModalForm组件', path: '/handbook/react/ModalFormItem.html', date: '2022-10-13', author: '陈佳鑫', explain: '一个其貌不扬但是好用得组件。。。' },
        { key: 1, title: 'VUE 可拖拽排序列表组件', path: '/handbook/vue/DragTable.html', date: '2022-10-17', author: '陈佳鑫', explain: '一个其貌不扬但是好用得组件。。。' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .top {
    width: 100%;
    height: 280px;
    background-image: url(/home_top.jpeg);
    background-size: cover;
    background-attachment: fixed;
    background-position: 0px -300px;
    .title {
      padding: 20px 0;
      color: #fff;
      font-size: 28px;
      text-align: center;
    }
    .avatar_div {
      text-align: center;
      .avatar {
        width: 100px;
        height: 100px;
        border-radius: 100px;
        margin: 20px 0;
      }
      .test{
        color: #fff;
        font-size: 20px;
      }
    }
  }
  .list {
    margin: 20px 0;
    padding: 20px 10px;
    border: 1px solid #efefef;
    .title {
      font-size: 20px;
    }
    .explain {
      margin: 10px;
    }
    .info {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      .author {
        width: 15%;
        text-align: center;
      }
      .date {
        width: 15%;
        text-align: center;
      }
    }
  }
</style>