(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{180:function(v,_,t){"use strict";t.r(_);var a=t(0),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[v._v("#")]),v._v(" 数据类型")]),v._v(" "),t("p",[v._v("JavaScript 语言的每一个值，都属于某一种数据类型。JavaScript 的数据类型，共有七种：")]),v._v(" "),t("ul",[t("li",[v._v("数值（number）：整数和小数（比如1和3.14）")]),v._v(" "),t("li",[v._v("字符串（string）：文本（比如Hello World）。")]),v._v(" "),t("li",[v._v("布尔值（boolean）：表示真伪的两个特殊值，即true（真）和false（假）")]),v._v(" "),t("li",[v._v("undefined：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值")]),v._v(" "),t("li",[v._v("null：表示空值，即此处的值为空。")]),v._v(" "),t("li",[v._v("对象（object）：各种值组成的集合。")]),v._v(" "),t("li",[v._v("Symbol：通过Symbol函数生成，表示独一无二的值，用于防止对象属性名的冲突。")])]),v._v(" "),t("h2",{attrs:{id:"确定值类型的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#确定值类型的方法"}},[v._v("#")]),v._v(" 确定值类型的方法")]),v._v(" "),t("p",[v._v("JavaScript 有三种方法，可以确定一个值到底是什么类型：")]),v._v(" "),t("ul",[t("li",[v._v("typeof运算符")]),v._v(" "),t("li",[v._v("instanceof运算符")]),v._v(" "),t("li",[v._v("Object.prototype.toString方法")])]),v._v(" "),t("h3",{attrs:{id:"typeof-运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typeof-运算符"}},[v._v("#")]),v._v(" typeof 运算符")]),v._v(" "),t("p",[v._v("typeof运算符可以返回一个值的数据类型：")]),v._v(" "),t("ul",[t("li",[v._v("数值、字符串、布尔值分别返回number、string、boolean。")]),v._v(" "),t("li",[v._v("Symbol 类型 返回symbol")]),v._v(" "),t("li",[v._v("对象返回object")]),v._v(" "),t("li",[v._v("null返回object，历史原因造成的")]),v._v(" "),t("li",[v._v("函数返回function；")]),v._v(" "),t("li",[v._v("undefined返回undefined")])]),v._v(" "),t("h3",{attrs:{id:"instanceof运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instanceof运算符"}},[v._v("#")]),v._v(" instanceof运算符")]),v._v(" "),t("p",[v._v("instanceof运算符返回一个布尔值，表示对象是否为某个构造函数的实例。")]),v._v(" "),t("p",[v._v("instanceof运算符的左边是实例对象，右边是构造函数。它会检查右边构建函数的原型对象（prototype），是否在左边对象的原型链上。")]),v._v(" "),t("p",[v._v("由于instanceof检查整个原型链，因此同一个实例对象，可能会对多个构造函数都返回true。")]),v._v(" "),t("p",[v._v("由于任意对象（除了null）都是Object的实例，所以instanceof运算符可以判断一个值是否为非null的对象。")]),v._v(" "),t("p",[v._v("instanceof的原理是检查右边构造函数的prototype属性，是否在左边对象的原型链上。有一种特殊情况，就是左边对象的原型链上，只有null对象。")]),v._v(" "),t("p",[v._v("注意，instanceof运算符只能用于对象，不适用原始类型的值。")]),v._v(" "),t("p",[v._v("此外，对于undefined和null，instanceof运算符总是返回false。")]),v._v(" "),t("h3",{attrs:{id:"object-prototype-tostring方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object-prototype-tostring方法"}},[v._v("#")]),v._v(" Object.prototype.toString方法")]),v._v(" "),t("p",[v._v("toString方法的作用是返回一个对象的字符串形式，默认情况下返回类型字符串，因此可以用来判断一个值的类型。\n不同数据类型的Object.prototype.toString方法返回值如下：")]),v._v(" "),t("ul",[t("li",[v._v("数值：返回[object Number]。")]),v._v(" "),t("li",[v._v("字符串：返回[object String]。")]),v._v(" "),t("li",[v._v("布尔值：返回[object Boolean]。")]),v._v(" "),t("li",[v._v("undefined：返回[object Undefined]。")]),v._v(" "),t("li",[v._v("null：返回[object Null]。")]),v._v(" "),t("li",[v._v("数组：返回[object Array]。")]),v._v(" "),t("li",[v._v("arguments 对象：返回[object Arguments]。")]),v._v(" "),t("li",[v._v("函数：返回[object Function]。")]),v._v(" "),t("li",[v._v("Error 对象：返回[object Error]。")]),v._v(" "),t("li",[v._v("Date 对象：返回[object Date]。")]),v._v(" "),t("li",[v._v("RegExp 对象：返回[object RegExp]。")]),v._v(" "),t("li",[v._v("其他对象：返回[object Object]。\n这就是说，Object.prototype.toString可以看出一个值到底是什么类型。")])]),v._v(" "),t("p",[v._v("利用这个特性，可以写出一个比typeof运算符更准确的类型判断函数。")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("var type = function (o){\n  var s = Object.prototype.toString.call(o);\n  return s.match(/\\[object (.*?)\\]/)[1].toLowerCase();\n};\n")])])]),t("h2",{attrs:{id:"null-undefined"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#null-undefined"}},[v._v("#")]),v._v(" null, undefined")]),v._v(" "),t("p",[v._v("null与undefined都可以表示“没有”，含义非常相似。将一个变量赋值为undefined或null，老实说，语法效果几乎没区别。在if语句中，它们都会被自动转为false。")]),v._v(" "),t("p",[v._v("谷歌公司开发的 JavaScript 语言的替代品 Dart 语言，就明确规定只有null，没有undefined！")]),v._v(" "),t("p",[v._v('null是一个表示“空”的对象，转为数值时为0；undefined是一个表示"此处无定义"的原始值，转为数值时为NaN。')]),v._v(" "),t("h2",{attrs:{id:"布尔值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#布尔值"}},[v._v("#")]),v._v(" 布尔值")]),v._v(" "),t("p",[v._v("布尔值代表“真”和“假”两个状态，往往用于程序流程的控制。“真”用关键字true表示，“假”用关键字false表示。")]),v._v(" "),t("p",[v._v("如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。")]),v._v(" "),t("p",[v._v("转换规则是除了下面六个值被转为false，其他值都视为true：")]),v._v(" "),t("ul",[t("li",[v._v("undefined")]),v._v(" "),t("li",[v._v("null")]),v._v(" "),t("li",[v._v("false")]),v._v(" "),t("li",[v._v("0")]),v._v(" "),t("li",[v._v("NaN")]),v._v(" "),t("li",[v._v("\"\"或''（空字符串）")])]),v._v(" "),t("p",[v._v("空数组（[]）和空对象（{}）对应的布尔值，都是true。")]),v._v(" "),t("h2",{attrs:{id:"数值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数值"}},[v._v("#")]),v._v(" 数值")]),v._v(" "),t("p",[v._v("JavaScript 内部，所有数字都是以64位浮点数形式储存，即使整数也是如此。所以，1与1.0是相同的，是同一个数。")]),v._v(" "),t("p",[v._v("JavaScript 语言的底层根本没有整数，所有数字都是小数（64位浮点数）。")]),v._v(" "),t("p",[v._v("由于浮点数不是精确的值，所以涉及小数的比较和运算要特别小心。")]),v._v(" "),t("p",[v._v("如果一个数大于等于2的1024次方，那么就会发生“正向溢出”，即 JavaScript 无法表示这么大的数，这时就会返回Infinity。")]),v._v(" "),t("p",[v._v("如果一个数小于等于2的-1075次方（指数部分最小值-1023，再加上小数部分的52位），那么就会发生为“负向溢出”，即 JavaScript 无法表示这么小的数，这时会直接返回0。")]),v._v(" "),t("p",[v._v("JavaScript 对整数提供四种进制的表示方法：十进制、十六进制、八进制、二进制。")]),v._v(" "),t("p",[v._v("+0或-0当作分母，返回的值是不相等的，因为除以正零得到+Infinity，除以负零得到-Infinity。")]),v._v(" "),t("p",[v._v("NaN是 JavaScript 的特殊值，表示“非数字”（Not a Number），主要出现在将字符串解析成数字出错的场合。")]),v._v(" "),t("p",[v._v("NaN不是独立的数据类型，而是一个特殊数值，它的数据类型依然属于Number，使用typeof运算符可以看得很清楚。")]),v._v(" "),t("p",[v._v("NaN不等于任何值，包括它本身。NaN与任何数（包括它自己）的运算，得到的都是NaN。")]),v._v(" "),t("p",[v._v("Infinity大于一切数值（除了NaN），-Infinity小于一切数值（除了NaN）。")]),v._v(" "),t("p",[v._v("Infinity与NaN比较，总是返回false。")]),v._v(" "),t("h3",{attrs:{id:"parseint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parseint"}},[v._v("#")]),v._v(" parseInt()")]),v._v(" "),t("p",[v._v("parseInt方法用于将字符串转为整数。parseInt的返回值只有两种可能，要么是一个十进制整数，要么是NaN。")]),v._v(" "),t("p",[v._v("如果字符串头部有空格，空格会被自动去除。如果parseInt的参数不是字符串，则会先转为字符串再转换。")]),v._v(" "),t("p",[v._v("字符串转为整数的时候，是一个个字符依次转换，如果遇到不能转为数字的字符，就不再进行下去，返回已经转好的部分。")]),v._v(" "),t("p",[v._v("如果字符串的第一个字符不能转化为数字（后面跟着数字的正负号除外），返回NaN。")]),v._v(" "),t("p",[v._v("对于那些会自动转为科学计数法的数字，parseInt会将科学计数法的表示方法视为字符串，因此导致一些奇怪的结果。")]),v._v(" "),t("p",[v._v("parseInt方法还可以接受第二个参数（2到36之间），表示被解析的值的进制，返回该值对应的十进制数。默认情况下，parseInt的第二个参数为10，即默认是十进制转十进制。")]),v._v(" "),t("p",[v._v("如果第二个参数不是数值，会被自动转为一个整数。这个整数只有在2到36之间，才能得到有意义的结果，超出这个范围，则返回NaN。如果第二个参数是0、undefined和null，则直接忽略。")]),v._v(" "),t("h3",{attrs:{id:"parsefloat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parsefloat"}},[v._v("#")]),v._v(" parseFloat()")]),v._v(" "),t("p",[v._v("parseFloat方法用于将一个字符串转为浮点数。")]),v._v(" "),t("p",[v._v("parseFloat方法会自动过滤字符串前导的空格。")]),v._v(" "),t("p",[v._v("如果字符串包含不能转为浮点数的字符，则不再进行往后转换，返回已经转好的部分。")]),v._v(" "),t("p",[v._v("如果参数不是字符串，或者字符串的第一个字符不能转化为浮点数，则返回NaN。")]),v._v(" "),t("p",[v._v("parseFloat会将空字符串转为NaN。")]),v._v(" "),t("h3",{attrs:{id:"isnan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#isnan"}},[v._v("#")]),v._v(" isNaN()")]),v._v(" "),t("p",[v._v("isNaN方法可以用来判断一个值是否为NaN。")]),v._v(" "),t("p",[v._v("isNaN只对数值有效，如果传入其他值，会被先转成数值。比如，传入字符串的时候，字符串会被先转成NaN，所以最后返回true。")]),v._v(" "),t("p",[v._v("isNaN为true的值，有可能不是NaN，而是一个字符串。")]),v._v(" "),t("p",[v._v("出于同样的原因，对于对象和数组，isNaN也返回true。")]),v._v(" "),t("p",[v._v("但是，对于空数组和只有一个数值成员的数组，isNaN返回false。原因是这些数组能被Number函数转成数值。")]),v._v(" "),t("p",[v._v("因此，使用isNaN之前，最好判断一下数据类型。")]),v._v(" "),t("p",[v._v("判断NaN更可靠的方法是，利用NaN为唯一不等于自身的值的这个特点，进行判断。")]),v._v(" "),t("h3",{attrs:{id:"isfinite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#isfinite"}},[v._v("#")]),v._v(" isFinite()")]),v._v(" "),t("p",[v._v("isFinite方法返回一个布尔值，表示某个值是否为正常的数值。")]),v._v(" "),t("p",[v._v("除了Infinity、-Infinity、NaN和undefined这几个值会返回false，isFinite对于其他的数值都会返回true。")]),v._v(" "),t("h2",{attrs:{id:"字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[v._v("#")]),v._v(" 字符串")]),v._v(" "),t("p",[v._v("字符串就是零个或多个排在一起的字符，放在单引号或双引号之中。")]),v._v(" "),t("p",[v._v("如果要在单引号字符串的内部，使用单引号，就必须在内部的单引号前面加上反斜杠，用来转义。")]),v._v(" "),t("p",[v._v("由于 HTML 语言的属性值使用双引号，所以很多项目约定 JavaScript 语言的字符串只使用单引号。")]),v._v(" "),t("p",[v._v("反斜杠（\\）在字符串内有特殊含义，用来表示一些特殊字符，所以又称为转义符。")]),v._v(" "),t("p",[v._v("字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返回某个位置的字符（位置编号从0开始），字符串与数组的相似性仅此而已。实际上，无法改变字符串之中的单个字符。")]),v._v(" "),t("p",[v._v("每个字符在 JavaScript 内部都是以16位（即2个字节）的 UTF-16 格式储存。也就是说，JavaScript 的单位字符长度固定为16位长度，即2个字节。")]),v._v(" "),t("p",[v._v("Base64 就是一种编码方法，可以将任意值转成 0～9、A～Z、a-z、+和/这64个字符组成的可打印字符。使用它的主要目的，不是为了加密，而是为了不出现特殊字符，简化程序的处理。")]),v._v(" "),t("h2",{attrs:{id:"对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象"}},[v._v("#")]),v._v(" 对象")]),v._v(" "),t("p",[v._v("对象就是一组“键值对”（key-value）的集合，是一种无序的复合数据集合。")]),v._v(" "),t("p",[v._v("对象的所有键名都是字符串（ES6 又引入了 Symbol 值也可以作为键名），所以加不加引号都可以。")]),v._v(" "),t("p",[v._v("如果键名是数值，会被自动转为字符串。")]),v._v(" "),t("p",[v._v("如果键名不符合标识名的条件（比如第一个字符为数字，或者含有空格或运算符），且也不是数字，则必须加上引号，否则会报错。")]),v._v(" "),t("p",[v._v("对象的每一个键名又称为“属性”（property），它的“键值”可以是任何数据类型。如果一个属性的值为函数，通常把这个属性称为“方法”，它可以像函数那样调用。")]),v._v(" "),t("p",[v._v("如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。修改其中一个变量，会影响到其他所有变量。")]),v._v(" "),t("p",[v._v("读取对象的属性，有两种方法，一种是使用点运算符，还有一种是使用方括号运算符。")]),v._v(" "),t("p",[v._v("如果使用方括号运算符，键名必须放在引号里面，否则会被当作变量处理。")]),v._v(" "),t("p",[v._v("点运算符和方括号运算符，不仅可以用来读取值，还可以用来赋值。")]),v._v(" "),t("p",[v._v("查看一个对象本身的所有属性，可以使用Object.keys方法。")]),v._v(" "),t("p",[v._v("delete命令用于删除对象的属性，删除成功后返回true。")]),v._v(" "),t("p",[v._v("delete命令只能删除对象本身的属性，无法删除继承的属性。")]),v._v(" "),t("p",[v._v("in运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值），如果包含就返回true，否则返回false")]),v._v(" "),t("p",[v._v("可以使用对象的hasOwnProperty方法判断一下，是否为对象自身的属性。")]),v._v(" "),t("p",[v._v("for...in循环用来遍历一个对象的全部属性。")]),v._v(" "),t("h2",{attrs:{id:"数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[v._v("#")]),v._v(" 数组")]),v._v(" "),t("p",[v._v("数组（array）是按次序排列的一组值。每个值的位置都有编号（从0开始），整个数组用方括号表示。")]),v._v(" "),t("p",[v._v("任何类型的数据，都可以放入数组。")]),v._v(" "),t("p",[v._v("本质上，数组属于一种特殊的对象。typeof运算符会返回数组的类型是object。")]),v._v(" "),t("p",[v._v("JavaScript 语言规定，对象的键名一律为字符串，所以，数组的键名其实也是字符串。之所以可以用数值读取，是因为非字符串的键名会被转为字符串。")]),v._v(" "),t("p",[v._v("对象有两种读取成员的方法：点结构（object.key）和方括号结构（object[key]）。但是，对于数值的键名，不能使用点结构。")]),v._v(" "),t("p",[v._v("只要是数组，就一定有length属性。该属性是一个动态的值，等于键名中的最大整数加上1。")]),v._v(" "),t("p",[v._v("清空数组的一个有效方法，就是将length属性设为0。")]),v._v(" "),t("p",[v._v("由于数组本质上是一种对象，所以可以为数组添加属性，但是这不影响length属性的值。")]),v._v(" "),t("p",[v._v("for...in不仅会遍历数组所有的数字键，还会遍历非数字键。所以，不推荐使用for...in遍历数组。")]),v._v(" "),t("h2",{attrs:{id:"类数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类数组"}},[v._v("#")]),v._v(" 类数组")]),v._v(" "),t("p",[v._v("如果一个对象的所有键名都是正整数或零，并且有length属性，那么这个对象就很像数组，语法上称为“类似数组的对象”（array-like object）。")]),v._v(" "),t("p",[v._v("类似数组的对象”并不是数组，因为它们不具备数组特有的方法。")]),v._v(" "),t("p",[v._v("典型的“类似数组的对象”是函数的arguments对象，以及大多数 DOM 元素集，还有字符串。")]),v._v(" "),t("p",[v._v("数组的slice方法可以将“类似数组的对象”变成真正的数组。")])])}),[],!1,null,null,null);_.default=e.exports}}]);