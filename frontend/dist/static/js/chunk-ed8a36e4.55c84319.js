(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed8a36e4","chunk-2d0ccb97"],{"4ec3":function(e,t,a){"use strict";a.r(t),a.d(t,"order_baseUrl",function(){return r}),a.d(t,"product_baseUrl",function(){return n}),a.d(t,"package_baseUrl",function(){return c}),a.d(t,"detail_baseUrl",function(){return i}),a.d(t,"log_baseUrl",function(){return o});var r="/api/orders",n="/api/products",c="/api/packages",i="/api/details",o="/api/logs"},8916:function(e,t,a){"use strict";a.r(t),a.d(t,"getInfo",function(){return c});var r=a("7618"),n=a("1c1e");a("4ec3");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return"object"===Object(r["a"])(e["created_at"])&&(e["time"]=e["created_at"].getTime()/1e3),Object(n["a"])({url:"/api/logs/index",method:"get",params:{page:t,pageSize:a,user_name:e.user_name,type:e.type,created_at:"object"===Object(r["a"])(e.created_at)?e["time"]:""}})}}}]);