import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    resume:{
      name:'小花',
      work:'美丽的前台',
      personalInfo:{
        "性别":"女",
        "年龄":"24岁",
        "qq":"123456",
        "联系方式":"13737373737",
        "邮箱":"123@qq.com"
      },
      introduction:'我是一个什么什么样的人。哈哈哈哈。我是一个什么什么样的人。哈哈哈哈。我是一个什么什么样的人。哈哈哈哈。我是一个什么什么样的人。哈哈哈哈。',
      education:[
        "2012-2016年，xxx大学",
        "本科，xxx专业",
        "2012-2016年，xxx大学",
        "本科，xxx专业",
        "2012-2016年，xxx大学",
        "本科，xxx专业"
      ],
      projects:[
        {
          "name":"项目名称",
          "role":"我承担的角色",
          "startTime":"开始时间",
          "endTime":"结束时间",
          "description":"项目描述项目描述项目描述项目描述项目描述项目描述项目描述"
        },
        {
          "name":"项目名称",
          "role":"我承担的角色",
          "startTime":"开始时间",
          "endTime":"结束时间",
          "description":"项目描述项目描述项目描述项目描述项目描述项目描述项目描述"
        }
      ],
      works:[
        ""
      ]
    }

  },
  mutations:{

  }
})

export default store
