<template>
	<div>
		<!-- 这是login页面 -->
		<aaa ref='aaa'>this</aaa>
		<button @click="submit">提交</button>
	</div>
</template>
<style>
</style>
<script>
	export default {
		methods: {
			submit() {
				//this.level++
				this.$refs.aaa.params.param1 ++
			}
		},
		data() {
			return {
				level: 1,
				obj: {
					obj1: 123
				}
			}
		},
		provide () {
		    return {
		      foo: this
		    }
		},
		components: {
			aaa: {
				data: function() {
					return {
						count: 0,
						params: {
							param1: 111
						}
					}
				},
				watch: {
					count(val) {
						console.log(val)
					}
				},
				//render函数什么时候被触发
				//绑定的数据进行变化时，就会触发render，但是不会深层监听
				render (h) {
					console.log(this)
					//this.test()
					//这里是vnode可以这么用，普通的不能这么用
					let div = <div>{this.params.param1}</div>
					let divchildern = <a href='http://www.baidu.com'>6666</a>
					div.children.push(divchildern)
					return div
				},
				methods: {
					// rendor函数用到的方法里有数据绑定也会触发
					test() {
						console.log(this.foo.level)
					}
				},
				inject: ['foo']
			}
		}
	}
</script>
