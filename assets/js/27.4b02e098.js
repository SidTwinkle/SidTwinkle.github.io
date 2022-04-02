(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{580:function(s,n,e){"use strict";e.r(n);var a=e(13),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"进阶vue篇-三"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进阶vue篇-三"}},[s._v("#")]),s._v(" 进阶Vue篇（三）")]),s._v(" "),e("h2",{attrs:{id:"一-render函数的应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-render函数的应用"}},[s._v("#")]),s._v(" 一."),e("code",[s._v("render")]),s._v("函数的应用")]),s._v(" "),e("h3",{attrs:{id:"_1-模板缺陷"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-模板缺陷"}},[s._v("#")]),s._v(" 1.模板缺陷")]),s._v(" "),e("p",[s._v("模板的最大特点是扩展难度大，不易扩展。可能会造成逻辑冗余")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<Level :type="1">哈哈</Level>\n<Level :type="2">哈哈</Level>\n<Level :type="3">哈哈</Level>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("Level组件需要对不同的type产生不同的标签")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<template>\n <h1 v-if="type==1">\n  <slot></slot>\n </h1>\n <h2 v-else-if="type==2">\n  <slot></slot>\n </h2>\n <h3 v-else-if="type==3">\n  <slot></slot>\n </h3>\n</template>\n<script>\nexport default {\n props: {\n  type: {\n   type: Number\n  }\n }\n};\n<\/script>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("h3",{attrs:{id:"_2-使用render函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用render函数"}},[s._v("#")]),s._v(" 2.使用Render函数")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('export default {\n render(h) {\n  return h("h" + this.type, {}, this.$slots.default);\n },\n props: {\n  type: {\n   type: Number\n  }\n }\n};\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("blockquote",[e("p",[s._v("复杂的逻辑变得非常简单")])]),s._v(" "),e("h3",{attrs:{id:"_3-函数式组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-函数式组件"}},[s._v("#")]),s._v(" 3.函数式组件")]),s._v(" "),e("p",[s._v("如果只是接受一些 prop 的话可以标记为"),e("code",[s._v("functional")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Vue.component('my-component', {\n  functional: true,\n  props: {},\n  render: function (createElement, context) {\n    // ...\n  }\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("blockquote",[e("p",[s._v("函数式组件只是函数，所以渲染开销也低很多。 （没有this、没有状态、没有生命周期）")])]),s._v(" "),e("h2",{attrs:{id:"二-作用域插槽"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-作用域插槽"}},[s._v("#")]),s._v(" 二.作用域插槽")]),s._v(" "),e("h3",{attrs:{id:"_1-render函数的应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-render函数的应用"}},[s._v("#")]),s._v(" 1.render函数的应用")]),s._v(" "),e("p",[s._v("如果我们想定制化一个列表的展现结构，我们可以使用render函数来实现")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<List :data="data"></List>\n<script>\nimport List from "./components/List";\nexport default {\n data() {\n  return { data: ["苹果", "香蕉", "橘子"] };\n },\n components: {\n  List\n }\n};\n<\/script>\n\n\x3c!-- List组件渲染列表 --\x3e\n<template>\n <div class="list">\n  <div v-for="(item,index) in data" :key="index">\n   <li>{{item}}</li>\n  </div>\n </div>\n</template>\n<script>\nexport default {\n props: {\n  data: Array,\n  default: () => []\n }\n};\n<\/script>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br")])]),e("p",[s._v("通过render方法来订制组件,在父组件中传入render方法")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<List :data="data" :render="render"></List>\nrender(h, name) {\n   return <span>{name}</span>;\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("blockquote",[e("p",[s._v("我们需要createElement方法，就会想到可以编写个render函数，将createElement方法传递出来")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<template>\n <div class="list">\n  <div v-for="(item,index) in data" :key="index">\n   <li v-if="!render">{{item}}</li>\n   \x3c!-- 将render方法传到函数组件中，将渲染项传入到组件中，在内部回调这个render方法 --\x3e\n   <ListItem v-else :item="item" :render="render"></ListItem>\n  </div>\n </div>\n</template>\n<script>\nimport ListItem from "./ListItem";\nexport default {\n components: {\n  ListItem\n },\n props: {\n  render: {\n   type: Function\n  },\n  data: Array,\n  default: () => []\n }\n};\n<\/script>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("p",[s._v("ListItem.vue调用最外层的render方法，将createElement和当前项传递出来")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<script>\nexport default {\n props: {\n  render: {\n   type: Function\n  },\n  item: {}\n },\n render(h) {\n  return this.render(h, this.item);\n }\n};\n<\/script>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h3",{attrs:{id:"_2-使用scope-slot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用scope-slot"}},[s._v("#")]),s._v(" 2.使用scope-slot")]),s._v(" "),e("p",[s._v("我们不难发现使用render函数确实可以大大提高灵活度，但是代码量偏多，这样我们可以使用作用域插槽来简化逻辑")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<List :arr="arr">\n    <template v-slot="{item}">\n        {{item}}\n    </template>\n</List>\n\n<div v-for="(item,key) in arr" :key="key">\n    <slot :item="item"></slot>\n</div>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("blockquote",[e("p",[s._v("目前像"),e("code",[s._v("iview")]),s._v("已经支持render函数和作用域插槽两种写法")])]),s._v(" "),e("h2",{attrs:{id:"三-递归组件的应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-递归组件的应用"}},[s._v("#")]),s._v(" 三.递归组件的应用")]),s._v(" "),e("h3",{attrs:{id:"_1-案例-实现无限极菜单组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-案例-实现无限极菜单组件"}},[s._v("#")]),s._v(" 1.案例:实现无限极菜单组件")]),s._v(" "),e("h4",{attrs:{id:"使用模板来实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用模板来实现"}},[s._v("#")]),s._v(" 使用模板来实现")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<el-menu>\n    <template v-for="d in data">\n        <resub :data="d" :key="d.id"></resub>\n    </template>\n</el-menu>\n\n\n<el-submenu :key="data.id" v-if="data.children">\n    <template slot="title">{{data.title}}</template>\n    <template v-for="d in data.children">\n        <resub :key="d.id" :data="d"></resub>\n    </template>\n  </el-submenu>\n<el-menu-item :key="data.id" v-else>{{data.title}}</el-menu-item>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h4",{attrs:{id:"使用render函数来实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用render函数来实现"}},[s._v("#")]),s._v(" 使用render函数来实现")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('import elMenu from "./components/el-menu.vue";\nimport elMenuItem from "./components/el-menu-item.vue";\nimport elSubmenu from "./components/el-submenu.vue";\nexport  default {\n    props:{\n        data:{\n            type:Array,\n            default:()=>[]\n        }\n    },\n    render(){ // react语法 \n        let renderChildren  = (data) =>{\n            return data.map(child=>{\n                return child.children? \n                <elSubmenu>\n                    <div slot="title">{child.title}</div>\n                    {renderChildren(child.children)}\n                </elSubmenu>:\n                <elMenuItem nativeOnClick={()=>{\n                    alert(1)\n                }}>{child.title}</elMenuItem>\n            })\n        }\n        return <elMenu>\n            {renderChildren(this.data)}\n        </elMenu>\n    }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br")])]),e("h2",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])])])}),[],!1,null,null,null);n.default=t.exports}}]);