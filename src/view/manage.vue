<template>
  <div class="container">
    <!-- 导航栏 -->
    <!-- 侧边栏 -->
    <div class="sidebar">
      <div>
        <a-switch class="switch"
            :checked="theme === 'dark'"
            checked-children="Dark"
            un-checked-children="Light"
            @change="changeTheme"
        />
        <br />
        <br />
        <a-menu
            v-model:openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
            style="width: 200px"
            mode="inline"
            :theme="theme"
        >
          <a-menu-item key="1">
            <template #icon>
              <MailOutlined />
            </template>
            Navigation One
          </a-menu-item>
          <a-menu-item key="2">
            <template #icon>
              <CalendarOutlined />
            </template>
            Navigation Two
          </a-menu-item>
          <a-sub-menu key="sub1">
            <template #icon>
              <AppstoreOutlined />
            </template>
            <template #title>Navigation Three</template>
            <a-menu-item key="3">Option 3</a-menu-item>
            <a-menu-item key="4">Option 4</a-menu-item>
            <a-sub-menu key="sub1-2" title="Submenu">
              <a-menu-item key="5">Option 5</a-menu-item>
              <a-menu-item key="6">Option 6</a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #icon>
              <SettingOutlined />
            </template>
            <template #title>Navigation Four</template>
            <a-menu-item key="7">Option 7</a-menu-item>
            <a-menu-item key="8">Option 8</a-menu-item>
            <a-menu-item key="9">Option 9</a-menu-item>
            <a-menu-item key="10">Option 10</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </div>
    </div>

  </div>
</template>

<style>
.container {
  display: flex;
  height: 100vh; /* 设置父容器占据整个页面高度 */
}
/* 侧边栏调整 */
.sidebar {
  position: relative;
  width: 200px; /* 侧边栏宽度 */
  background-color: #F6F4F0; /* 侧边栏背景色 */
  overflow-y: auto; /* 添加滚动条 */
}
.switch {
  position: relative;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>

<script lang="ts" src="../ts/manage.ts"></script>


