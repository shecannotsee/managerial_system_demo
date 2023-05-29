import axios from 'axios';
import baseUrl from "@/ts/api/url"

export type { user };
export { getUser };

interface user {
    key:string,
    name:string,
    age:number,
    address:string,
    tag:[string]
}

async function getUser():Promise<user> {
  try {
    const response = await axios.post(baseUrl + '/manage/getUser', {
      condition: "all"
    });
    console.log("getUser response:", response);

    // 根据实际接口返回的数据结构，获取密码并返回
    const users = response.data;
    return users;
  }catch (error) {
    console.log("getUser error:", error);
    // 处理请求失败的情况，例如抛出异常或返回默认密码
    throw new Error("Failed to getUser");
  }
}

