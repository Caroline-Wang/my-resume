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
          "name":"基于xx的web平台",
          "startTime":"2017-1-1",
          "endTime":"2018-1-1",
          "content":[
            "项目职责：前端开发",
            "项目描述：项目描述项目描述项目描述项目描述项目描述项目描述项目描述"
          ]
        },
        {
          "name":"基于xx的web平台",
          "startTime":"2017-1-1",
          "endTime":"2018-1-1",
          "content":"项目职责：前端开发"
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
