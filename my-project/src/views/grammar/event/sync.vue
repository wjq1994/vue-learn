<template>
	<div>
		<!-- 第一种 -->
		<!-- <base-checkbox @update:title='doc.title = $event' :title="doc.title"></base-checkbox> -->
		
		<!-- 第二种 -->
		<!-- 等价于上面那个 -->
		<!-- sync作用: 父级组件给prop增加绑定事件，子组件通过$emit(update:prop)触发-->
		<!-- <base-checkbox :title.sync="doc.title"></base-checkbox> -->
		
		<!-- 第三种 -->
		<!-- 会把 doc 对象中的每一个属性 (如 title) 都作为一个独立的 prop 传进去，然后各自prop添加用于更新的 v-on 监听器 -->
		<!-- <base-checkbox v-bind.title.sync='doc.title' v-bind.name.sync='doc.title'></base-checkbox> -->
		<base-checkbox v-bind.sync='doc'></base-checkbox>
	</div>
</template>

<script>
	import Vue from 'vue'
	export default {
		data() {
			return {
				doc: {
					title: "sync测试",
					name: '名字'
				}
			}
		},
		created() {
			Vue.component('base-checkbox', {
				props: {
					checked: Boolean
				},
				template: `
				<div>
				    <input
				      type="checkbox"
				      v-bind:checked="checked"
				      v-on:change="$emit('update:title', $event.target.checked ? '选中' : '没选中' ) && $emit('update:name', !$event.target.checked ? '选中' : '没选中')"
				    > <span>选择</span></div>
				`
			})
		},
		watch: {
		}
	}
</script>

<style>
</style>
