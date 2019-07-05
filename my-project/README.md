# my-project
[基于vue-cli3.0构建功能完善的前端架子](https://juejin.im/post/5bb73b816fb9a05ce17265c2#heading-3)

[配置一个vue-cli3.0项目](https://juejin.im/post/5cc18abdf265da039e1ff5fb)
1. 安装

```
npm install -g @vue/cli
```

2. 创建项目

```
vue create hello-world
```

3. 路由设计（vue-router）

安装vue-router插件
```
npm install vue-router
```
修改src目录下的App.vue 文件。删掉#app文件里的内容，改为<router-view>，这里就是以为显示其他组件的地方。删除script中的内容。修改后的App.vue代码如下：
``` 
<template>
  <div id="app">
	<router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```
新增router目录(src/router/index.js)
``` 
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(Router)
const router = new Router({
  //mode属性，默认hash模式 http://localhost:8081/#/login
  //mode: 'history',
  routes: [{
    path: '/',
    redirect: '/login'
  },,{
    path: '/login',
    name: 'Login',
    component: Login
  }]
})

export default router
```
修改main.js，引入路由
```
import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```