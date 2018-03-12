import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Resume from '@/components/Resume'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        name: 'Login',
        component: Login
      },
      {
          path: '/main',
          name: 'main',
          component: Resume
      }
  ]
})
