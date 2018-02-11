import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    resume:{
      name:'Caroline Wang',
      work:'前端开发工程师',
      personalInfo:{
        "renderType":"table",
        "title":"个人资料",
        "content":[
            {
                key:"性别",
                value:"女"
            },
            {
                key:"年龄",
                value:"24岁"
            },
            {
                key:"联系方式",
                value:"13737373737"
            },
        ],
      },
      introduction:{
          "renderType":"text",
          "title":"自我评价",
          "content":"我是一个什么什么样的人。我是一个什么什么样的人。我是一个什么什么样的人。我是一个什么什么样的人。"
      },
      education:{
          "renderType":"list",
          "title":"教育背景",
          "content":["xxx","yyy","zzz"],
      },
      projects:{
          "title":"项目经历",
          "renderType":"multiList",
          "content":[
              {
                  "titleLeft":"基于xx的平台",
                  "titleMiddle":"UI设计",
                  "titleRight":"2017.1.1-2018.1.1",
                  "description":"项目职责：前端开发"
              },
              {
                  "titleLeft":"基于yyy的webApp",
                  "titleMiddle":"前端开发",
                  // "titleRight":"2017.1.1-2018.1.1",
                  "description":"项目描述：项目描述项目描述项目描述项目描述项目描述项目描述项目描述"
              }
          ]
      },
      works:{
          "title":"工作经历",
          "renderType":"multiList",
          "content":[
              {
                  "titleLeft":"xxx公司",
                  "titleMiddle":"UI设计",
                  "titleRight":"2017.1.1-2018.1.1",
                  "description":"岗位职责：前端开发<div></div>岗位描述：岗位描述岗位描述岗位描述岗位描述岗位描述"
              },
              {
                  "titleLeft":"yyy公司",
                  "titleMiddle":"UI设计",
                  "titleRight":"2017.1.1-2018.1.1",
                  "description":"岗位职责：前端开发<div></div>岗位描述：岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述"
              }
          ]
      },
      skills:{
          "title":"个人技能",
          "renderType":"blockList",
          "content":[
              {
                  "title":"Web前端开发",
                  "description":"熟练使用HTML、JS、CSS、JQuery等。"
              },
              {
                  "title":"框架",
                  "description":"可以自己用vue做项目。"
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
