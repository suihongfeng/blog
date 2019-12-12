(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{226:function(s,a,t){"use strict";t.r(a);var n=t(0),l=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux-入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-入门"}},[s._v("#")]),s._v(" Linux 入门")]),s._v(" "),t("p",[s._v("本文将分享Linux的基础教程及常用命令。")]),s._v(" "),t("h2",{attrs:{id:"什么是linux？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是linux？"}},[s._v("#")]),s._v(" 什么是Linux？")]),s._v(" "),t("p",[s._v("Linux是三种主流的操作系统之一，其他两种是我们熟知的windows系统和Mac系统，普通大众一般不知道，因为Linux更多的是应用于服务器上。\n它是一套免费使用和自由传播的类Unix操作系统，并且继承了Unix以网络为核心的设计思想。")]),s._v(" "),t("h2",{attrs:{id:"什么是终端？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是终端？"}},[s._v("#")]),s._v(" 什么是终端？")]),s._v(" "),t("p",[s._v("怎样看出电影中哪个人是电脑大神？就是看他是不是在用终端。操作系统分为两个部分：")]),s._v(" "),t("ul",[t("li",[s._v("内核：负责系统的全部逻辑操作，由海量命令组成；")]),s._v(" "),t("li",[s._v("用户交互界面：开机之后所有我们所看到的东西，比如窗口，软件等")])]),s._v(" "),t("p",[s._v("终端就是连接内核与交互界面的这座桥，它允许用户在交互界面上打开一个叫做「Terminal 终端」的应用程序，在其中输入命令，系统会直接给出反馈。")]),s._v(" "),t("h2",{attrs:{id:"如何打开终端？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何打开终端？"}},[s._v("#")]),s._v(" 如何打开终端？")]),s._v(" "),t("ul",[t("li",[s._v("对于Windows，win10以下版本，不支持Linux风格的terminal，一般需要安装git bash, 里面集成了大多数的Linux命令；")]),s._v(" "),t("li",[s._v("对于Mac 系统，有如下三种打开方式：首先，F4 去找 到对应的 图标， 其次，可以在搜索框 输入Terminal，最后可以把把固定到 面板，经常使用的话 会 特别 便利。")])]),s._v(" "),t("h2",{attrs:{id:"什么是命令？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是命令？"}},[s._v("#")]),s._v(" 什么是命令？")]),s._v(" "),t("p",[s._v("命令就是 你告诉电脑希望它做什么的 那句话，分为：")]),s._v(" "),t("ul",[t("li",[s._v("系统自带命令，如ls，cd等命令；")]),s._v(" "),t("li",[s._v("需要安装才能使用的命令，如node和npm等命令；")])]),s._v(" "),t("h2",{attrs:{id:"什么是路径？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是路径？"}},[s._v("#")]),s._v(" 什么是路径？")]),s._v(" "),t("p",[s._v("当你需要使用终端对文件夹进行操作时，终端需要你告诉它，你想要修改的文件在哪里，这时我们需要了解路径的概念。系统中的每一个文件都有一个存放位置，这一存放位置就称作路径。")]),s._v(" "),t("p",[s._v("终端启动后，它的默认路径在当前用户文件夹的根目录上，为了确定这一点，你可以输入 pwd 命令来查看当前路径。若你想改变当前路径，则可以输入 cd /其他文件夹")]),s._v(" "),t("p",[s._v("但路径其实分为两种：")]),s._v(" "),t("ul",[t("li",[s._v("相对路径：路径的最前面为一个点(代表当前路径)或两个点(代表当前路径的上一路径)， 如'./', '../static'等；")]),s._v(" "),t("li",[s._v("绝对路径：路径的最前面只为'/'，如'/root/static', '/home/user';")])]),s._v(" "),t("h2",{attrs:{id:"常用linux命令？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用linux命令？"}},[s._v("#")]),s._v(" 常用Linux命令？")]),s._v(" "),t("ul",[t("li",[s._v("ls 查看目录下包含的文件或目录；")]),s._v(" "),t("li",[s._v("pwd 在终端打印当前 目录；")]),s._v(" "),t("li",[s._v("cd 切换路径；")]),s._v(" "),t("li",[s._v("mkdir 创建目录；")]),s._v(" "),t("li",[s._v("touch 创建文件")]),s._v(" "),t("li",[s._v("rm 删除文件或目录，删除目录时需要加 -rf 参数；")]),s._v(" "),t("li",[s._v("mv 移动文件或目录，在当前目录下移动时为 修改名字；")]),s._v(" "),t("li",[s._v("ssh 登录远程服务器；")]),s._v(" "),t("li",[s._v("npm install 安装node项目依赖；")]),s._v(" "),t("li",[s._v("git pull 从远程仓库 拉取最新代码；")]),s._v(" "),t("li",[s._v("man 超级命令 去查看的有关命令的介绍。")])]),s._v(" "),t("p",[s._v("linux系统自带和可安装使用的终端命令很多很多，我们只介绍了最常用的几个命令，其他命令用到时去查即可。")]),s._v(" "),t("h2",{attrs:{id:"统一配置terminal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#统一配置terminal"}},[s._v("#")]),s._v(" 统一配置terminal")]),s._v(" "),t("p",[s._v("把terminal放在mac的快捷入口，然后把shell改为oh~my-zsh, 因为shell的类型有很多种，Mac默认的bash的功能虽然已经很强大，但提示功能不够强大，界面也不够炫。")]),s._v(" "),t("p",[s._v("而zsh的功能极其强大，只是配置过于复杂，起初只有极客才在用。后来，有个穷极无聊的程序员创建了一个名为oh-my-zsh的开源项目...")]),s._v(" "),t("p",[s._v("从此，只需简单的安装配置，小白们就可以用上狂拽炫酷吊炸天的zsh,配置过程如下：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('查看系统是否安装了zsh:\n  cat /etc/shells \nMac默认有，没有\b则安装：\n  brew install zsh\n查看当前系统的shell:\n  echo $SHELL\n不是zsh，则切换\n  chsh -s /bin/zsh\n安装oh my zsh:\n  sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"\n配置文件\n  cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc\n')])])]),t("p",[s._v("然后把常用的Linux命令写到 .zshrc文件中：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("vi ~/.zshrc\n// 编辑后需要提交才生效\nsource ~/.zshrc\n")])])]),t("p",[s._v("比如我们团队的.zshrc配置如下：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('export ZSH=$HOME/.oh-my-zsh\nZSH_THEME="robbyrussell"\nplugins=(git)\nsource $ZSH/oh-my-zsh.sh\n\nalias vb="vi ~/.zshrc"\nalias sb="source ~/.zshrc"\n\nalias ni="npm install"\nalias ns="npm start"\nalias nl="npm run lint"\nalias nb="npm run build"\nalias nd="npm run dev"\nalias npd="npm run pd"\nalias ndd="npm run td"\n\nalias ga="git add ."\nalias gs="git status"\nalias gp="git push"\nalias gl="git pull"\nalias gr="git reset --hard"\nalias gc="git clone"\nalias gcd="git checkout dev"\nalias gcm="git checkout master"\nalias gst="git stash"\nalias gsp="git stash pop"\n\nalias cp="cd ~/kpl"\nalias cpv="cd ~/kpl/vue"\nalias cpm="cd ~/kpl/uni"\n\nalias cvm="cd ~/kpl/vue/vue-music-class"\nalias cvs="cd ~/kpl/vue/ops_client"\n')])])])])}),[],!1,null,null,null);a.default=l.exports}}]);