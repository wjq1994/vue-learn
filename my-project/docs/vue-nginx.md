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

## 分析

- 访问路由http://localhost/open/callout/zhao
 
- 匹配到nginx配置 /open进入
- try_files $uri $uri/ @router;
   - $uri 表示先找/Users/wangjianqing/Desktop/csx/callout/dist/open/callout/zhao文件有没有，有就返回，
   - $uri/ 再找/Users/wangjianqing/Desktop/csx/callout/dist/open/callout/zhao/路径有没有/Users/wangjianqing/Desktop/csx/callout/dist/open/callout/zhao/index.html或/Users/wangjianqing/Desktop/csx/callout/dist/open/callout/zhao/index.htm，有就返回，
   - 最后走@router
- rewrite ^.*$ /open/index.html last; 
  - 重写路由直接到/open/index.html目录返回，这个就是vue的首页

## 总结

vue路由配置的核心就是将nginx指到vue的首页
