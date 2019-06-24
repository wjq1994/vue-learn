import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(Router)
const router = new Router({
  //mode属性，默认hash模式 http://localhost:8081/#/login
  //mode: 'history',
  routes: [{
    path: '/',
    redirect: '/login'
  },,{
    path: '/login',
    name: 'Login',
    component: Login
  }]
})

export default router