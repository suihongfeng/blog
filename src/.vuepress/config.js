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
        text: '我的笔记',
        items: [
          {text: '第一天', link: '/day/1'}
        ]
      }
    ],
    sidebar: {
      
    }
  }
}

function genSidebarConfig (title, children) {
  return [
    { title, children }
  ]
}