import { defineComponent , reactive , ref } from 'vue';
import type { user } from "@/ts/api/getUser"
import { getUser } from "@/ts/api/getUser"
const columns = [
  {
    title: '主机厂名',
    dataIndex: 'oe',
  },
  {
    title: 'tier1厂商名',
    dataIndex: 'tier1',
  },
  {
    title: '协议栈软件版本',
    dataIndex: 'vpsVersion',
  },
  {
    title: '硬件标识1',
    dataIndex: 'hardwareId',
  },
  {
    title: '创建时间',
    dataIndex: 'generationTime',
  },
  {
    title: '异常信息',
    dataIndex: 'exception',
  }
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
    const projectName = ref<string>('');
    const count = ref<string>('');
    const startTime = ref<string>('');
    const endTime = ref<string>('');
    return {
      columns,
      pageData,
      projectName,  // 项目名
      count,        // 查询条数
      startTime,    // 开始时间
      endTime,      // 结束时间
      getUserList,
      refreshData
    };
  }
});
