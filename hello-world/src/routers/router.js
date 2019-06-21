// export default [{
//   path: '/',
//   redirect: { name: 'login' }
// }, {
//   path: '/login',
//   name: 'login',
//   component: resolve => require(['../views/Login.vue'], resolve),
//   meta: { title: '多多关照-登录', skipAuth: true }
// }, {
//   path: '*',
//   redirect: '/'
// }]
// 
import Vue from 'vue'
import VueRouter from 'vue-router'

import logins from '../views/Login.vue'

vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
	{
		path: '/login',
		name: 'login',
		component: logins
	}
  ]
})