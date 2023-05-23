<template>
  <div class="button-container">
    <router-link to="/home">
      <a-button>首页</a-button>
    </router-link>
    <router-link to="/login">
      <a-button type="primary">登录</a-button>
    </router-link>
  </div>

  <router-view></router-view>
</template>
  
<style>
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0vh; /* 可根据需要调整高度 */
}
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
  