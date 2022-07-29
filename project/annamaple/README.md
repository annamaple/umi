## use ReactUI ManTine

https://mantine.dev

## npm配置各种镜像

https://juejin.cn/post/6844903889087496200

NPM 查看当前地址

```shell
npm config get registry
```

设置淘宝镜像【不建议，影响其他指令】

```shell
npm config set registry https://registry.npmmirror.com/
```

还原地址

```shell
npm config set registry https://registry.npmjs.org/
```

NPM镜像的管理工具 安装：`npm install -g nrm`

```shell
# 查看所有镜像
nrm ls
npm ---------- https://registry.npmjs.org/
* yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.nlark.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
# 使用淘宝镜像
nrm use taobao
```

## yarn配置各种镜像

查看当前地址

```shell
yarn config get registry
```

设置淘宝镜像

```shell
yarn config set registry https://registry.npmmirror.com/
```

还原地址

```shell
yarn config set registry https://registry.yarnpkg.com
```

YARN镜像的管理工具

安装：`yarn global add yrm`

```shell
# 查看所有镜像
yrm ls

  npm ---------- https://registry.npmjs.org/
* yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.nlark.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/

# 使用淘宝镜像
yrm use taobao
```

***一定注意源地址不能带引号***