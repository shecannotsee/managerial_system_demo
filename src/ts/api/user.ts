import axios from 'axios';
import baseUrl from "@/ts/api/url"

export type { user };
export { getPassword , getToken };

interface user {
  name : string;
  password : string;
  token : string;
};

function getPassword(userName : string) : string {
  console.log(baseUrl);
  axios.post(baseUrl+'/login', {
    userName: userName
  })
  .then(function (response) {
    console.log("getPassword response :" + response);
  })
  .catch(function (error) {

    console.log("getPassword error :"+error);
  });

  const ret : user = {
    name : "",
    password : "123456",
    token : ""
  }

  return ret.password;
};

function getToken(userName : string) : string {

  const ret : user = {
    name : "",
    password : "123456",
    token : ""
  }

  return ret.token;
};

