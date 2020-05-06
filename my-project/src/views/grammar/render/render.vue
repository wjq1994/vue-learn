<template>
	<div>
		<!-- 这是login页面 -->
		<aaa ref='aaa'></aaa>
		<button @click="submit">提交</button>
	</div>
</template>
<style>
</style>
<script>
	export default {
		methods: {
			submit() {
				this.$refs.aaa.count ++
			}
		},
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
				render: function(createElement) {
					console.log(1111)
					// 创建 kebab-case 风格的 ID
					let childrenText = this.$slots.default || []
					var headingId = this.getChildrenTextContent(childrenText)
						.toLowerCase()
						.replace(/\W+/g, '-')
						.replace(/(^-|-$)/g, '')

					return createElement(
						'h' + this.level,
						[
							createElement('a', {
								attrs: {
									name: headingId,
									href: '#' + headingId
								}
							}, this.$slots.default)
						]
					)
				},
				props: {
					level: {
						type: Number,
						default: 1
					}
				},
				methods: {
					getChildrenTextContent(children) {
					  return children.map(function (node) {
					    return node.children
					      ? getChildrenTextContent(node.children)
					      : node.text
					  }).join('')
					}
				}
			}
		}
	}
</script>
