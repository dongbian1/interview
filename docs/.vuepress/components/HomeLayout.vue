<template>
  <div class="index">
    <div class="top">
      <div class="title">码上升天</div>
      <div class="avatar_div">
        <img class="avatar" :src="$withBase('/avatar.jpeg')">
        <div class="test">海賊王になりたい男です</div>
      </div>
    </div>
    <div class="bottom">
      <div class="list" v-for="item in pageList" :key="item.key">
        <router-link class="title" :to="{ path: item.path }">{{ item.title }}</router-link>
        <div class="explain">{{ item.explain }}</div>
        <div class="info">
          <div class="author">{{ item.author }}</div>
          <div class="date">{{ item.date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageList: [
        { key: 1, title: 'React 自定义ModalForm组件', path: '/handbook/react/ModalFormItem.html', date: '2022-10-13', author: '陈佳鑫', explain: '避免频繁使用modal框新建简单表单' },
        { key: 2, title: 'VUE 可拖拽排序列表组件', path: '/handbook/vue/DragTable.html', date: '2022-10-17', author: '陈佳鑫', explain: '因业务需求要对列表进行拖拽排序' },
        { key: 3, title: 'Taro微信小程序无感知登录', path: '/handbook/vue/TaroRequest.html', date: '2022-10-24', author: '陈佳鑫', explain: '针对于微信小程序登录过期后，实现无感知登录，减少用户重新登录' },
        { key: 4, title: 'VUE 转盘抽奖小游戏', path: '/handbook/vue/Turntable.html', date: '2022-10-25', author: '陈佳鑫', explain: '使用CSS动画完成转盘抽奖小游戏' },
        { key: 5, title: 'VUE 卡牌抽奖小游戏', path: '/handbook/vue/TurnOver.html', date: '2022-10-31', author: '陈佳鑫', explain: '使用CSS动画完成卡牌抽奖小游戏' },
        { key: 6, title: 'VUE 动态Modal弹出框', path: '/handbook/vue/FlexibleModal.html', date: '2022-11-11', author: '陈佳鑫', explain: '使用Vue.extend注册modal挂载在body上实现任意弹框' },
        { key: 7, title: 'React 自定义useModal', path: '/handbook/react/useModal.html', date: '2023-2-7', author: '陈佳鑫', explain: '避免使用modal动态弹出框维护多个变量' },
        { key: 8, title: 'Vue 拖拽编辑界面', path: '/handbook/vue/DragVue.html', date: '2023-2-13', author: '陈佳鑫', explain: '使用npm vuedraggable 编写一个可自定义拖拽编辑界面dome' },
        { key: 9, title: 'React 自定义DictHooks', path: '/handbook/react/DictHooks.html', date: '2023-2-22', author: '陈佳鑫', explain: '使字典类型存储在本地避免频繁调用字典接口，只有字典产生更新或者，用户重新登陆' },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .index {
    padding: 10px;
  }
  .top {
    width: 100%;
    height: 280px;
    background-image: url(../public/home_top.jpeg);
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
  .bottom {
    height: calc(100vh - 340px);
    overflow-y: auto;
    margin-top: 20px;
    .list {
      margin-top: 20px;
      border: 1px solid red;
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
  }
</style>