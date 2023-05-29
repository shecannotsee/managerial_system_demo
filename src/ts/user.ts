import { defineComponent } from 'vue';
import type { user } from "@/ts/api/getUser.ts"
import { getUser } from "@/ts/api/getUser.ts"

// 表格设置
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

// 通过接口获取真实数据
let data : user = await getUser();

methods : {
  async function updateData() {
    data  = await getUser();
  }
}

export default defineComponent({
    setup() {
        return {
            data,
            columns,
        };
    },
});