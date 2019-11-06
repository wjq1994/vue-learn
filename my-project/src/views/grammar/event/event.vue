<template>
	<base-checkbox v-model="lovingVue"></base-checkbox>
</template>

<script>
	import Vue from 'vue'
	export default {
		data() {
			return {
				lovingVue: false
			}
		},
		created() {
			Vue.component('base-checkbox', {
				model: {
					prop: 'checked',
					event: 'change'
				},
				props: {
					checked: Boolean
				},
				template: `
				<div>
				    <input
				      type="checkbox"
				      v-bind:checked="checked"
				      v-on:change="$emit('change', $event.target.checked)"
				    > <span>选择</span></div>
				`
			})
		},
		watch: {
			lovingVue(newvalue, oldvalue) {
				console.log(newvalue + '   ' + oldvalue)
			}
		}
	}
</script>

<style>
</style>
