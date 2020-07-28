# vue-cli3配置nginx

## 适用范围
mode=history

## 具体操作
1. vue.config.js配置
2. vue-router配置
3. nginx配置

> vue.config.js配置

```javascript
outputDir: "dist/open/",
publicPath: "/open/",
```

> vue-router配置
 
```javascript
const router = new Router({
    // mode属性，默认hash模式 http://localhost:8081/#/login
    mode: 'history',
    base: '/open/',
    routes: [...detailRouterArr],
});
```
> nginx配置

```
location /open {
        root /Users/wangjianqing/Desktop/csx/callout/dist;
        try_files $uri $uri/ @router;
        index index.html index.htm;
}

#对应上面的@router，主要原因是路由的路径资源并不是一个真实的路径，所以无法找到具体的文件
#因此需要rewrite到index.html中，然后交给路由在处理请求资源
location @router {
    rewrite ^.*$ /open/index.html last;
}
```
