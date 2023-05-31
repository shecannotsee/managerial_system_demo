import { defineComponent , reactive , ref } from 'vue';
import type { user } from "@/ts/api/getUser"
import { getUser } from "@/ts/api/getUser"
const columns = [
  {
    title: '项目名',
    dataIndex: 'project',
  },
  {
    title: '本月申请成功数量',
    dataIndex: 'successCountInThisMonth',
  },
  {
    title: '本月申请失败数量',
    dataIndex: 'failedCountInThisMonth',
  },
  {
    title: '所有成功数量',
    dataIndex: 'allSuccessCount',
  },
  {
    title: '所有失败数量',
    dataIndex: 'allFailedCount',
  },
];
export  let pageData = reactive<{dataList:Array<user>}>({
  dataList: []
})

const getUserList = async () => {
  let ret : user[] = await getUser();
  pageData.dataList = ret;
}

const refreshData = () => {
  getUserList()
}

export default defineComponent({
  setup() {
    const year = ref<string>('');
    const month = ref<string>('');
    return {
      columns,
      pageData,
      year,
      month,
      getUserList,
      refreshData,
    };
  }
});
