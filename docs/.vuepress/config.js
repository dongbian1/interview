module.exports = {
  title: '码上升天',
  description: '一个不甘平凡又非常平凡的人',
  theme: 'reco',
  base: '/interview/',
  themeConfig: {
    subSidebar: 'auto',
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    sass: { indentedSyntax: true },
    chainWebpack: (config, isServer) => {
      config.resolveLoader
          .modules
          .add(path.resolve(__dirname, './node_modules'))
    },
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
        collapsable: true,
        children: [
          { title: "自定义ModalForm", path: "/handbook/react/ModalFormItem" },
        ]
      },
      {
        title: "VUE",
        path: "/handbook/vue/DragTable",
        collapsable: true,
        children: [
          { title: "可托拽排序列表DragTable", path: "/handbook/vue/DragTable" },
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