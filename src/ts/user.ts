import { defineComponent } from 'vue';

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
    },
    {
        title: '年龄',
        className: 'column-money',
        dataIndex: 'money',
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

const data = [
    {
        key: '1',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney No. 1 Lake Park',
    },
];

export default defineComponent({
    setup() {
        return {
            data,
            columns,
        };
    },
});