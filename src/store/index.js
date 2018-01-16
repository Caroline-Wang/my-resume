import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    resume:{
      name:'小花',
      work:'美丽的前台',
      personalInfo:{
        "sex":"女",
        "age":"24岁",
        "qq":"123456",
        "tel":"13737373737",
        "email":"123@qq.com"
      },
      selfIntroduction:'我是一个什么什么样的人。哈哈哈哈。',
      education:[
        "2012-2016年，xxx大学",
        "本科，xxx专业"
      ]
    }

  },
  mutations:{

  }
})

export default store
