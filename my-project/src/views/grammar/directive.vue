<template>
	<button v-fastClick="fc">点这里，撒冷的</button>
</template>

<script>
	import Vue from 'vue'
	export default {
		data() {
			//data调用methods里的方法
			var clickfc = this.click
			return {
				fc: {
					func: clickfc, 
					time: 2000
				}
			}
		},
		created() {
			// 注册一个全局自定义指令 `v-focus`
			Vue.directive('fastClick', {
				bind: function(el, binding) {
					//检验传入字段
					if (!binding.value) {
						console.error('请传入必要字段')
						return
					}
					if (!binding.value.func) {
						console.error('请传入执行函数')
						return
					}
					//定义常用变量
					let func = binding.value.func
					let time = binding.value.time || 300
					el.dataset.canDo = 'true'
					let arrs = []
					if (typeof binding.value === 'object' ) {
						for (let key in binding.value) {
							if (key === 'func' || key === 'time') continue
							arrs.push(binding.value[key])
						}
					} else {
						console.error('请传入正确参数')
					}
					el.onclick = (e) => {
						if (el.dataset.canDo === 'true') {
							el.dataset.canDo = 'false'
							func && func(e, ...arrs)
							let timeout = setTimeout(() => {
								el.dataset.canDo = 'true'
								clearTimeout(timeout)
							}, time)
						}
					}
				}
			})
		},
		methods: {
			click(e) {
				console.log(e)
			}
		}
	}
</script>

<style>
</style>
