# node_anydoor

> A static resource server project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9000
node src/index.js

# or
supervisor src/index.js

# 命令 启动服务
npm run anydoor

# or
npm run super-anydoor

# 自定义端口号
node src/index.js -p 2019

```

## cli 目标

## 安装

```
npm i -g anydoor
```

## 使用方法

```
anydoor               # 把当前文件夹作为静态资源服务器

anydoor -p 8080       # 设置端口号为 8080

anydoor -h localhost  # 设置 host 为 localhost

anydoor -d /user         # 设置根目录为 /user

```