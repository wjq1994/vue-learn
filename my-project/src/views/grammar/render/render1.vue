<template>
	<!-- 这是login页面 -->
	<aaa ></aaa>
</template>
<style>
</style>
<script>
	export default {
		data() {
			return {
				level: 1
			}
		},
		components: {
			aaa: {
				data: function() {
					return {
						count: 0
					}
				},
				render: function(h) {
					//这里是vnode可以这么用，普通的不能这么用
					let div = <div>222</div>
					let divchildern = <a href='http://www.baidu.com'>6666</a>
					div.children.push(divchildern)
					return div
				}
			}
		}
	}
</script>
