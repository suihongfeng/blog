module.exports = {
  base: '/blog/',
  dest: 'docs',
  title:'Bert\'s Blog',
  description:'执着于更高的技术追求！',
  head:[
    ['link', { rel: 'icon', href: 'favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  themeConfig: {
    sidebarDepth: 3,
    navBar: true,
    nav: [
      {
        text: '教程',
        items: [
          { text: '环境配置', link: '/fun/env'},
          { text: 'eslint规则', link: '/fun/eslint'},
          { text: '性能优化', link: '/fun/opt'},
          { text: '深入webpack', link: '/fun/webpack' },
          { text: 'webpack随手记', link: '/fun/webpack-note' },
          { text: 'webpack配置vue', link: '/fun/webpack-vue' },
          { text: '公众号开发总结', link: '/fun/wechat' },
          { text: '深入浅出前端脚手架', link: '/fun/scaffold' },
          { text: '前端基础JS系列', link: '/fun/javascript-basic' },
          { text: '移动端性能优化(一)', link: '/fun/optimize' },
          { text: '移动端性能优化(二)', link: '/fun/optimize2' },
          { text: '移动端的那些坑(一)', link: '/fun/mobile-bug' },
          { text: 'markdown语法', link: '/fun/md' },
        ]
      },
      {
        text: '重点技术',
        items: [
          { text: '深入skulpt', link: '/skulpt/1'},
          { text: '深入scratch', link: '/scratch/links' },
        ]
      },
      {
        text: '实战分享',
        items: [
          { text: '开发环境配置参考', link: '/share/env'},
          { text: 'vue服务端渲染', link: '/share/ssr'},
          { text: '小程序开发总结', link: '/share/mp'},
          { text: 'go+vue前后端分离实战', link: '/share/iris'},
          { text: 'uni-app多端开发回顾', link: '/share/uni'},
          { text: 'koa+vue全栈开发实战', link: '/share/koa'},
        ]
      },
      {
        text: '计算机英语',
        items: [
          { text: 'webpack 英文', link: '/en/webpack'},
          { text: 'npm 英文', link: '/en/npm'},
          { text: 'skulpt 英文', link: '/en/skulpt'},
          { text: 'scratch 英文', link: '/en/scratch'},
          { text: 'ecma 英文', link: '/en/ecma'},
        ]
      },
      {
        text: '常用网址',
        link: '/url/fe'
      },
      {
        text: 'github',
        link: 'https://github.com/tianbaoliu'
      },
    ],
    sidebar: {
      '/skulpt/': genSidebarConfig('skulpt', ['links', '1']),
      '/scratch/': genSidebarConfig('深入scratch', ['links', '1', 'sb3']),
    }
  }
}

function genSidebarConfig (title, children) {
  return [
    { title, children }
  ]
}
