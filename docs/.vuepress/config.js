module.exports = {
  title: '码上升天',
  description: '一个不甘平凡又非常平凡的人',
  theme: 'reco',
  base: '/interview/',
  themeConfig: {
    subSidebar: 'auto',
  },
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  plugins: [['vuepress-plugin-code-copy', { successText: '复制成功', align: 'top' }]],
  sass: { indentedSyntax: true },
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: "首页", link: "/" },
      // {
      //   text: "codinglin 的博客",
      //   items: [
      //     { text: "掘金", link: "https://juejin.cn/user/726107228492253" },
      //     { text: "Github", link: "https://github.com/gemini-hjl" }
      //   ]
      // }
    ],
    sidebar: [
      {
        title: "博客简介",
        path: "/",
        collapsable: false,  // 是否折叠
      },
      {
        title: "React",
        path: "/handbook/react/ModalFormItem",
        collapsable: false,
        children: [
          { title: "自定义ModalForm", path: "/handbook/react/ModalFormItem" },
        ]
      },
      {
        title: "VUE",
        path: "/handbook/vue/DragTable",
        collapsable: false,
        children: [
          { title: "可托拽排序列表DragTable", path: "/handbook/vue/DragTable" },
          { title: "Taro开发微信小程序无感知登录", path: "/handbook/vue/TaroRequest" },
          { title: "转盘抽奖小游戏", path: "/handbook/vue/Turntable" },
          { title: "卡牌抽奖小游戏", path: "/handbook/vue/TurnOver" },
          { title: "动态Modal弹出框", path: "/handbook/vue/FlexibleModal" },
        ]
      },
      {
        title: "md编写文档",
        path: "/handbook/blog_utils",
        collapsable: false,  // 是否折叠
      } 
    ]
  }
}