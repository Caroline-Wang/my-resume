import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    resume:{
      name:'王彤彤',
      work:'前端开发工程师',
      personalInfo:{
        "renderType":"table",
        "title":"个人资料",
        "content":[
            {
                key:"性别", value:"女"
            },
            {
                key:"年龄", value:"24岁"
            },
            {
                key:"电话", value:"13737373737"
            },
            {
                key:"Q Q", value:"2387391668"
            },
            {
                key:"邮箱", value:"2387391668"
            },
            {
                key:"博客", value:"jianshu.com/u/6f9f5b38c8ac"
            },
            {
                key:"GitHub", value:"github.com/Caroline-Wang"
            }
        ],
      },
      introduction:{
          "renderType":"text",
          "title":"自我评价",
          "content":`
                我是一个对前端充满热情的人，乐于钻研，思维活跃，并且具有较强的学习能力和较强的自我驱动能力。对生活和工作充满信心，能够积极面对压力。
                我坚信，前端是一份感性和理性相结合的工作，它以简洁和优雅吸引人。我希望自己的技术能够日益精进，希望能够加入一个技术氛围浓厚、有成长空间的公司！
            `
      },
      education:{
          "renderType":"list",
          "title":"教育背景",
          "content":["2016年毕业于西安电子科技大学","专业：通信工程，排名：79/569","奖学金，英语四六级"],
      },
      projects:{
          "title":"项目经历",
          "renderType":"multiList",
          "content":[
              {
                  "titleLeft":"食品安全与溯源平台",
                  "titleMiddle":"食品安全与溯源平台",
                  "titleRight":"食品安全与溯源平台",
                  "description":`技术栈：ZUI框架、Layui框架、jQuery
                                 项目职责：平台模块页面设计、代码编写和优化、与后台交互
                                 项目描述：
                                    该平台为食品生产者、经营者和消费者提供了食品从生产到销售的溯源依据，包含基础信息平台、生产模块、库存模块、监管模块等。
                                    该平台使用ZUI的数据表格和Layui的分页进行固定列表格的增删改查，使用Layui中的layer弹层组件进行悬浮消息的展示，使用ZUI的uploader插件进行图片文件的上传、展示和编辑，通过RAP文档进行接口交互联调；同时我编写了树形表格插件，对高级搜索、图片上传、多选择框联动、表单提交验证、功能权限等都进行了不同程度的封装。
                    `
              },
              {
                  "titleLeft":"商家和监管APP",
                  "titleMiddle":"前端开发",
                  "titleRight":"2017.1.1-2018.2.10",
                  "description":`技术栈：MUI框架、HTML5+、Zepto、Sass
                                 项目职责：APP页面设计、代码编写和优化、与后台交互
                                 项目描述：
                                    商家和监管APP作为食品安全与溯源平台的移动精简版，商家APP包含生产和库存相关模块，用来方便生产商、经销商的生产、进货、出库等操作；监管APP包含商品监管、商家监管、监管记录等功能，方便监管人员进行实地监管。
                                    该APP使用MUI框架进行页面布局，使用HTML5+的plus.native.UI进行悬浮消息的展示，使用plus.uploader进行图片的上传，使用plus.zip进行图片的压缩；同时对图片选择和上传、表单提交验证、页面跳转、功能权限等都进行了不同程度的封装。
                                `
              },
              {
                  "titleLeft":"基于Vue的简历编辑器",
                  "titleMiddle":"前端开发",
                  "titleRight":"2018.1.15-2018.2.10",
                  "description":`技术栈：vue、vuex、vue-cli、webpack、Sass
                                 项目职责：页面设计、代码编写和优化
                                 项目描述：
                                    一个简洁的在线简历编辑器，可保存为PDF和图片。
                                    该项目基于vue构建，引入vuex对数据进行统一管理，使用sass编写样式，使用SVG图标；抽象出合理的子组件，并对其进行有效复用；使用html2canvas+jsPDF将网页保存为图片和PDF。
                                `
              }
          ]
      },
      works:{
          "title":"工作经历",
          "renderType":"multiList",
          "content":[
              {
                  "titleLeft":"四川虹信软件有限公司",
                  "titleMiddle":"前端开发",
                  "titleRight":"前端开发",
                  "description":"工作描述：负责商品溯源项目组的前端开发工作，包括界面的设计、代码的编写、优化和重构等，同时与后台人员讨论需求，进行接口联调。"
              }
          ]
      },
      skills:{
          "title":"专业技能",
          "renderType":"blockList",
          "content":[
              {
                  "title":"HTML5、CSS3",
                  "description":"熟练使用HTML5和CSS3，具有像素级还原设计稿的能力；了解不同dpr手机屏幕的移动端适配方案；能够熟练使用预处理语言如Sass。"
              },
              {
                  "title":"原生JavaScript",
                  "description":"熟练使用原生JavaScript，掌握闭包、this、作用域链、原型、异步等概念；能够使用JS / jQuery封装常用插件；熟练使用ES6部分新特性。"
              },
              {
                  "title":"框架",
                  "description":"能够熟练使用ZUI、Layui、MUI、Vue等框架，对于不熟悉的框架也可迅速上手。"
              },
              {
                  "title":"工程化",
                  "description":"熟悉版本控制工具如git、svn的使用；熟悉构建工具如npm、webpack的使用。"
              }
          ]
      }
    }

  },
  mutations:{
    getFromLocalStorage(state){
        let localState=localStorage.getItem('$state')
        if(localState){
            Object.assign(state,JSON.parse(localState))
        }
    },
    saveToLocalStorage(state){
        localStorage.setItem('$state',JSON.stringify(state))
    },
    addItem(state,{name}){
      switch(state['resume'][name].renderType){
          case "list":  //说明添加数组项
              state['resume'][name]['content'].push('编辑我...')
              break
          case "table":  //说明添加对象属性项
              state['resume'][name]['content'].push({
                  key:"编辑我...",
                  value:"编辑我..."
              })
              break
          case "multiList":  //说明添加数组项
              state['resume'][name]['content'].push({
                  "titleLeft":"编辑我...",
                  "titleMiddle":"编辑我...",
                  "titleRight":"编辑我...",
                  "description":"编辑我..."
              })
              break
          case "blockList":  //说明添加对象属性项
              state['resume'][name]['content'].push({
                  title:"编辑我...",
                  description:"编辑我..."
              })
              break
      }
      this.commit('saveToLocalStorage')
    },
    deleteItem(state,{name,index}){
      if(state['resume'][name]['content'] instanceof Array){  //说明删除数组项
          state['resume'][name]['content'].splice(index,1)
      }
      this.commit('saveToLocalStorage')
    },
    editTitlebar(state,{name,value}){
      Vue.set(state['resume'][name],'title',value)
      this.commit('saveToLocalStorage')
    },
    editTextField(state,{name,value}){
      (name==='name' || name==='work')? state['resume'][name]=value : state['resume'][name]['content']=value
      this.commit('saveToLocalStorage')
    },
    editListField(state,{name,index,value}){
      state['resume'][name]['content'].splice(index,1,value)
      this.commit('saveToLocalStorage')
    },
    editObjField(state,{name,index,key,value}){
      Vue.set(state['resume'][name]['content'][index],key,value)
      this.commit('saveToLocalStorage')
    }
  }
})

export default store
