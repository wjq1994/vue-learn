<template>
	<div>
		<div>{{now}}</div>
		<div id="example">
		  <p>Original count: "{{ originCnt }}"</p>
		  <p>Computed reversed count: "{{ reversedMessage }}"</p>
		  <button @click="add">+1</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				originCnt: 1,
				count: 1
			}
		},
		computed: {
			//Date.now()不是响应式的, now值不会变
			now: function() {
				return Date.now()
			},
			//计算属性是基于它们的响应式依赖进行缓存的  this.count就是响应式的
			reversedMessage(newValue, oldValue) {
				return this.count
			}
		},
		methods: {
			add() {
				this.count++
			}
		}
	}
</script>

<style>

</style>
