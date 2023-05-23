<template>
  <router-link to="/home">主页</router-link>
  <router-link to="/login">登录</router-link>
  <router-view></router-view>
</template>
  
<style>
*{
    padding: 0px;
    margin: 0px;
}
html,body,#app{
    width: 100%;
    height: 100%;
}
</style>

<script src="./ts/App.ts"></script>
  