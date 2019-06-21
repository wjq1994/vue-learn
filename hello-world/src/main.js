import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routers/router.js'

Vue.config.productionTip = false

new Vue({
	el:'#app',
	router,
	components: { App },
	template: '<App/>'
})
