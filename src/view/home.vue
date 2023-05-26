<template>
  <div class="button-container">
    <router-link to="/home">
      <a-button>首页</a-button>
    </router-link>
    <router-link to="/login">
      <a-button type="primary">登录</a-button>
    </router-link>
  </div>

  <div>首页</div>
      
</template>
  
<style>
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh; /* 可根据需要调整高度 */
}
</style>
  
<script lang="ts" src="../ts/home.ts"></script>
  