// vue.config.js
module.exports = {
	// 选项...
	configureWebpack: {
		resolve: {
			alias: {
				'vue$': 'vue/dist/vue.esm.js'
			}
		}
	}
}
