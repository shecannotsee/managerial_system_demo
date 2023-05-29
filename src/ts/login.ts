import { defineComponent, reactive, getCurrentInstance } from 'vue';
import { getPassword , getToken} from "@/ts/api/user"
import type { Router } from "vue-router";

console.log("login.vue");
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
export default defineComponent({
  setup() {
    const formState = reactive<FormState>({
      username: '',
      password: '',
      remember: true,
    });

    const currentInstance = getCurrentInstance();
    const router = currentInstance?.appContext.config.globalProperties.$router as Router;

    const onFinish = async (values: any, route : any ) => {
      console.log('Success:', values);
      try {
        const password = await getPassword(formState.username);
        console.log("input userName: ", formState.username);
        console.log("input password: ", formState.password);

        if (formState.password === password || true) {
          console.log('Success:', values);
          router.push('/manage');
        } else {
          alert("账号或者密码错误");
          console.log("账号或者密码错误");
        }
      } catch (error) {
        console.log("Failed to get password:", error);
        // 处理获取密码失败的情况，例如弹出错误提示
        alert("获取密码失败");
      }
    };

    const onFinishFailed = (errorInfo: any) => {
      alert("请输入账号和密码");
      console.log('Failed:', errorInfo);
    };
    
    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
});