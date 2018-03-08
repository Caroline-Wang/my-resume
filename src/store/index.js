import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    resume:{
      resumeId:'',
      name:'我的名字',
      work:'求职岗位',
      personalInfo:{
        "renderType":"table",
        "title":"请填写项",
        "content":[
            {
                key:"性别", value:"男"
            },
            {
                key:"年龄", value:"24岁"
            },
            {
                key:"电话", value:"xxx"
            },
            {
                key:"Q Q", value:"xxx"
            },
            {
                key:"邮箱", value:"xxx"
            }
        ],
      },
      introduction:{
          "renderType":"text",
          "title":"自我评价",
          "content":`
                自我评价            
            `
      },
      education:{
          "renderType":"list",
          "title":"教育背景",
          "content":["毕业于xxx大学","专业：xxx"],
      },
      projects:{
          "title":"项目经历",
          "renderType":"multiList",
          "content":[
              {
                  "titleLeft":"项目名称",
                  "titleMiddle":"项目职责",
                  "titleRight":"起止时间",
                  "description":`
                        这里是项目描述
                    `
              },
              {
                  "titleLeft":"项目名称",
                  "titleMiddle":"项目职责",
                  "titleRight":"起止时间",
                  "description":`
                        这里是项目描述
                    `
              }
          ]
      },
      works:{
          "title":"工作经历",
          "renderType":"multiList",
          "content":[
              {
                  "titleLeft":"公司名称",
                  "titleMiddle":"岗位职责",
                  "titleRight":"起止时间",
                  "description":"这里是工作描述"
              }
          ]
      },
      skills:{
          "title":"专业技能",
          "renderType":"blockList",
          "content":[
              {
                  "title":"技能点",
                  "description":"技能描述"
              },
              {
                  "title":"技能点",
                  "description":"技能描述"
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
      // this.commit('saveToLocalStorage')
    },
    deleteItem(state,{name,index}){
      if(state['resume'][name]['content'] instanceof Array){  //说明删除数组项
          state['resume'][name]['content'].splice(index,1)
      }
      // this.commit('saveToLocalStorage')
    },
    editTitlebar(state,{name,value}){
      Vue.set(state['resume'][name],'title',value)
      // this.commit('saveToLocalStorage')
    },
    editTextField(state,{name,value}){
      (name==='resumeId' || name==='name' || name==='work')? state['resume'][name]=value : state['resume'][name]['content']=value
      // this.commit('saveToLocalStorage')
    },
    editListField(state,{name,index,value}){
      state['resume'][name]['content'].splice(index,1,value)
      // this.commit('saveToLocalStorage')
    },
    editObjField(state,{name,index,key,value}){
      Vue.set(state['resume'][name]['content'][index],key,value)
      // this.commit('saveToLocalStorage')
    }
  }
})

export default store
