<template>
	<base-input v-on:focus.native="onFocus" v-on:focus="onFocus2"></base-input>
</template>

<script>
	import Vue from 'vue'
	export default {
		data() {
			return {
			}
		},
		created() {
			Vue.component('base-input', {
			  inheritAttrs: false,
			  props: ['label', 'value'],
			  computed: {
			    inputListeners: function () {
			      var vm = this
			      // `Object.assign` 将所有的对象合并为一个新对象
				  console.log(this.$listeners)
			      return Object.assign({},
			        // 我们从父级添加所有的监听器
			        this.$listeners,
			        // 然后我们添加自定义监听器，
			        // 或覆写一些监听器的行为
			        {
			          // 这里确保组件配合 `v-model` 的工作
			          input: function (event) {
			            vm.$emit('input', event.target.value)
			          }
			        }
			      )
			    }
			  },
			  template: `
			    <label>
			      {{ label }}
			      <input
			        v-bind="$attrs"
			        v-bind:value="value"
			        v-on="inputListeners"
			      >
			    </label>
			  `
			})
		},
		methods: {
			onFocus() {
				console.log(1111)
			},
			//包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。
			onFocus2() {
				console.log(22222)
			}
		}
	}
</script>

<style>
</style>
