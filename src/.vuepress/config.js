module.exports = {
  base: '/blog/',
  dest: 'docs',
  title:'Sarah的博客',
  description:'财务大魔王！',
  head:[
    ['link', { rel: 'icon', href: 'shficon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  themeConfig: {
    sidebarDepth: 3,
    navBar: true,
    nav: [
      {
        text: '日常总结',
        items: [
          { text: 'JS方法封装', link: '/often/js' },
          { text: 'CSS样式封装', link: '/often/css' },
          { text: 'Scratch篇', link: '/often/scratch1' },
        ]
      },
    ],
    sidebar: {
      '/often/': genSidebarConfig('Scratch相关技术点', ['scratch1', 'scratch2', 'scratch3', 'scratch4', 'scratch5']),
    }
  }
}

function genSidebarConfig (title, children) {
  return [
    { title, children }
  ]
}