import { defineComponent } from 'vue';
import type { user } from "@/ts/api/getUser.ts"
import { getUser } from "@/ts/api/getUser.ts"

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
    },
    {
        title: '年龄',
        className: 'column-money',
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

let data : user[] = await getUser();

export default defineComponent({
    setup() {
        return {
            data,
            columns,
        };
    },
});