<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <!-- 侧边栏 -->
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="home">
          <router-link to="/manage/home">
            <HomeOutlined />
            <span>主页</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="timeAndDate">
          <router-link to="/manage/timeAndDate">
            <CalendarOutlined />
            <span>时间与日期</span>
          </router-link>
        </a-menu-item>
        <a-sub-menu key="query">
          <template #title>
            <span>
              <AppstoreOutlined />
              <span>查询</span>
            </span>
          </template>
          <a-menu-item key="query_1">
            <router-link to="/manage/user">
              查找用户
            </router-link>
          </a-menu-item>
          <a-menu-item key="query_2">
            <router-link to="/manage/project">
              查找项目
            </router-link>
          </a-menu-item>
          <a-menu-item key="query_by_month">
            <router-link to="/manage/projectByMonth">
              按月查询
            </router-link>
          </a-menu-item>
          <a-sub-menu key="query-3" title="查找3-">
            <a-menu-item key="query-3_1">查找3-1</a-menu-item>
            <a-menu-item key="query-3_2">查找3-2</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
        <a-menu-item key="setting">
          <router-link to="/manage/setting">
            <SettingOutlined />
            <span>设置</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <!-- 内容导航 -->
      <a-layout-header style="background: #fff; padding: 0" />
      <!-- 预留其他页面 -->
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        An Apple a Day Keeps the Doctor Away
      </a-layout-footer>
    </a-layout>
  </a-layout>
  <!-- 回到顶部 -->
  <a-back-top /><strong style="color: rgba(64, 64, 64, 0.6)"></strong>
</template>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>

<script lang="ts" src="../ts/manage.ts"></script>


