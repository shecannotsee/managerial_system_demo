### 总体概览

#### 0.环境搭建

在ubuntu22.04下下载nodejs18.16.0LTS.tar.gz

解压后找到`node-v18.16.0-linux-x64/bin`，将其添加到用户系统中便于操作即可

```bash
echo 'export PATH=........./node-v18.16.0-linux-x64/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```



#### 1.搭建项目

```bash
npm init vue@latest
> managerial_system_demo
> ...
```

#### 2.安装包依赖

```bash
npm install
```

#### 3.调试模式启用

```
npm run dev
```

#### 4.打包项目用于部署

```
npm run build
```

#### 5.开发环境 : 

使用vscode + 插件Volar



### 开始开发

#### 0.项目依赖库

```bash
# 路由库
npm install vue-router
```



#### 1.添加额外的库

```bash
# 组件库
npm install ant-design-vue --save
# http库
npm install axios
```

