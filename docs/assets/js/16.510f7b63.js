(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{175:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"scratch-是如何解析-sb3-文件的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scratch-是如何解析-sb3-文件的"}},[t._v("#")]),t._v(" scratch 是如何解析 sb3 文件的")]),t._v(" "),s("p",[t._v("Scratch是一款由麻省理工学院(MIT) 设计开发的少儿编程工具。其特点是：使用者可以不认识英文单词，也可以不会使用键盘。构成程序的命令和参数通过积木形状的模块来实现。用鼠标拖动模块到程序编辑栏就可以了。")]),t._v(" "),s("p",[t._v("Scratch 3.0放弃了Flash，采用了HTML5的WebGL、Web Workers和 Web Audio Javascript libraries 的来编写。")]),t._v(" "),s("p",[t._v('Scratch 3.0 保存的文件格式为"sb3"，可以读取"sb"和"sb2"文件。')]),t._v(" "),s("h2",{attrs:{id:"什么是sb3文件呢？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是sb3文件呢？"}},[t._v("#")]),t._v(" 什么是sb3文件呢？")]),t._v(" "),s("p",[t._v("一个SB文件是从头开发一个项目，一个MIT（麻省理工学院）的应用开发平台。它包括所有的项目信息，包括任何导入媒体，如精灵，声音和图像。")]),t._v(" "),s("p",[t._v("文本源代码文件是使用微软的Small Basic编程语言开发。它包括可编成使用的小型基本可执行.EXE文件的Small Basic程序代码。它经常被用来创建简单的游戏。")]),t._v(" "),s("p",[t._v("这些 SB 文件可以使用 四 种已知的软件应用程序查看，这些应用程序通常是由 MIT Media Lab开发的 MIT Scratch。 它与 四 种主要文件类型相关联，但经常以 Scratch Project File 格式出现。 SB 文件通常被归类为 Developer Files。 其他文件类型可以是 System Files 或 Audio Files。")]),t._v(" "),s("p",[t._v("SB格式：使用微软的Small Basic编程语言< /H1 >文本的源代码文件创建，包含的Small Basic程序代码，可以编译成使用的Small Basic的可执行EXE档，通常用于创建简单的游戏。\n通过提供一个简单的语法和图形用户界面，实现Small Basic帮助学生介绍编程中的教育环境。的Small Basic程序可以发布到Web上，并使用微软的Silverlight播放器播放。")]),t._v(" "),s("h2",{attrs:{id:"sb3文件是在那个模块初始化的呢？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sb3文件是在那个模块初始化的呢？"}},[t._v("#")]),t._v(" sb3文件是在那个模块初始化的呢？")]),t._v(" "),s("p",[t._v("b3文件是在scratch-vm解析的。")]),t._v(" "),s("p",[t._v("vm是在containers/gui.jsx中启动的,scratch中components是纯函数组件,而在containers文件夹中会把同名components与redux和vm连接,同时进行国际化,组件节流,版本控制,虚拟IO监听等操作。")]),t._v(" "),s("p",[t._v("在vm(virtual-machine.js)中通过io函数调用来进行初始化,vm会区分sb2,sb3的文件结构载入,downloadProjectId是从网络下载,loadProjectLocal是从本地加载,fromJSOM可以加载2.0版本,而3.0有特殊的meta字段,2.0是as(好像是ActionScript)格式的脚本文件,如果载入之后发现是2.0,会zip压缩之后再blob二进制化,这样3.0版本就能识别了,项目工程载入之后才能installtarget,target类位于vm/engine/target,通过调用target中的函数就可以控制注册的block了,例如在lib/empty-assets中有个空的项目文件,到当项目加载时,调用了vm外壳中的的installTargets函数,会将target中的custom,objname,scripts等属性加载进来.")]),t._v(" "),s("p",[t._v("loadProjectLocal是从本地加载,在这个函数中会引入scratch-parser这个模块,scratch-parser解析完成后会得到validatedInput,validatedInput是一个Array,下一步会对validatedInput进行序列化,接下来调用runtime派发各个模块工程下载,然后由你来补充.....")]),t._v(" "),s("h2",{attrs:{id:"说一下runtime是干什么的？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说一下runtime是干什么的？"}},[t._v("#")]),t._v(" 说一下runtime是干什么的？")]),t._v(" "),s("p",[t._v("runtime是内核,用于存储block,sprite和虚拟IO,内置一个sequencer队列(这是一个全局任务队列,每次对target操作都会入队,在js时钟tick时执行,直至为空为止).runtime管理着sprite,runtime与sprite之间用广播来通信,当sprite之间需要通信时,runtime在线程调度层面好像是自己实现了一个redux差不多的功能(这里我没怎么看懂,需要验证),在runtime入口定义了defaultBlockPackages类,这里面声明了每个block块的功能函数.runtime中有_registerBlockPackages函数,会加载所有block块动作.....")])])}),[],!1,null,null,null);a.default=r.exports}}]);