import { defineComponent, reactive, getCurrentInstance } from 'vue';
import { Router } from 'vue-router';


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

    const onFinish = (values: any) => {
      console.log('Success:', values);
      router.push('/manage');
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