<template>
</template>

<script>
	import {
		map
	} from 'lodash'

	export default {
		name: 'LodashMap',
		data() {
			return {

			}
		},
		methods: {
			square(value, key, collection) {
				// window.console.log(value)
				// window.console.log(key)
				// window.console.log(collection)
				return value * value;
			}
		},
		created() {
			// window.console.log(map({
			// 	'a': 4,
			// 	'b': 8
			// }, this.square));
			// window.console.log(map({
			// 	'a': 4,
			// 	'b': 8
			// }, 'a'));
			window.console.log(map({
				'a': {
					'c': 66,
					'd': 77
				},
				'b': 88
			}, (value, key, collection) => collection));
		}
	}
</script>

<style>
</style>
