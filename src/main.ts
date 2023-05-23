import './assets/main.css'

import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import axios from 'axios';

import App from './App.vue'

const app = createApp(App);

app.use(Antd);

// app.use(axios);

app.mount('#app');


