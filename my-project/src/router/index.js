/**
 * router定义规则
 * 1. vue名称是小写的，文件名也是小写
 * 2. router格式 {path: "/lodash/map", name: "lodashMap"}
 * */
import Vue from 'vue'
import Router from 'vue-router'
import {upperFirst} from 'lodash'
let routers = require.context('../views', true, /\.vue$/i).keys()
let detailRouterArr = []
console.log(routers)
routers.map((item) => {
	const paths = item.match(/[a-zA-Z0-9]+/g) //paths中存储了一个目录，二级目录，文件名，还会包括vue
	let name = ``
	paths.forEach((val, index) => {
		// 不包括vue
		if (index < paths.length - 1) {
			if (index === 0) {
				name += paths[index]
			} else {
				name += upperFirst(paths[index]) //upperFirst,lodash 首字母大写方法
			}
		}
	})
	detailRouterArr.push({ //定义路由对象
		path: item.slice(1, -4),
		name,
		component(resolve) {
			require([`../views${item.slice(1)}`], resolve)
		},
	})
})

console.log(detailRouterArr)

Vue.use(Router)
const router = new Router({
	//mode属性，默认hash模式 http://localhost:8081/#/login
	mode: 'history',
	routes: [
		...detailRouterArr
	]
})

export default router
