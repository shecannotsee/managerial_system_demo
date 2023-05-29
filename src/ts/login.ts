import { defineComponent, reactive, getCurrentInstance } from 'vue';
import { getPassword , getToken} from "@/ts/api/user"
import type {Router} from "vue-router";

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

    const onFinish = (values: any, route : any ) => {
      const password = getPassword(values.userName);
      if (formState.password == password) {
        console.log('Success:', values);
        router.push('/manage');
      } else {
        console.log("账号或者密码错误");
      }
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    
    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
});