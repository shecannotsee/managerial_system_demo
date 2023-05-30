<template>
  <a-table :columns="columns" :data-source="pageData.dataList" bordered>
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
    </template>
    <template #title>
      <a-button type="primary" v-on:click="refreshData">查询</a-button>
      这里是开头</template>
    <template #footer>再往下没有了！</template>
  </a-table>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import type { user } from "@/ts/api/getUser.ts"
import { getUser } from "@/ts/api/getUser.ts"
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
  },
  {
    title: '标签',
    dataIndex: 'tags',
  },
];
let pageData = reactive<{dataList:Array<user>}>({
  dataList: []
})

const getUserList = async () => {
  let { user } = await getUser()
  pageData.dataList = user
}

const refreshData = () => {
  getUserList()
}
</script>