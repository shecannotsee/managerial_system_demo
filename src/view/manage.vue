<template>
  <router-link to="/manage">
    <div class="container">
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
            <a-menu-item key="home">
              <template #icon>
                <HomeOutlined />
              </template>
              主页
            </a-menu-item>
            <a-menu-item key="timeAndDate">
              <template #icon>
                <CalendarOutlined />
              </template>
              时间与日期
            </a-menu-item>
            <a-sub-menu key="query">
              <template #icon>
                <AppstoreOutlined />
              </template>
              <template #title>查询</template>
              <a-menu-item key="query_1">查找1</a-menu-item>
              <a-menu-item key="query_2">查找2</a-menu-item>
              <a-sub-menu key="query-3" title="查找3-">
                <a-menu-item key="query-3_1">查找3-1</a-menu-item>
                <a-menu-item key="query-3_2">查找3-2</a-menu-item>
              </a-sub-menu>
            </a-sub-menu>

            <a-menu-item key="setting">
              <template #icon>
                <SettingOutlined />
              </template>
              设置
            </a-menu-item>
          </a-menu>
        </div>
      </div>
      <!-- 导航栏 -->
      <div class="TopNavigationBar">
        <a-breadcrumb separator=">">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item href="">Application Center</a-breadcrumb-item>
          <a-breadcrumb-item href="">Application List</a-breadcrumb-item>
          <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb>
        <a-breadcrumb>
          <template #separator><span style="color: red">></span></template>
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item href="">Application Center</a-breadcrumb-item>
          <a-breadcrumb-item href="">Application List</a-breadcrumb-item>
          <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb>
      </div>

    </div>
  </router-link>
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
.TopNavigationBar {
  flex: 1; /* 占据剩余空间 */
  background-color: #FFFFFF; /* 导航栏背景色 */
}
.switch {
  position: relative;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>

<script lang="ts" src="../ts/manage.ts"></script>


