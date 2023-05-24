import { defineComponent, reactive, getCurrentInstance } from 'vue';

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
      
      if (formState.username == "admin" && formState.password == "123456") {
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