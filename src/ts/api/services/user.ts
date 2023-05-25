import {} from "@/ts/api/model/user.types"

import axios from 'axios';
import baseUrl from "@/ts/api/url"
import type { userToken , userPassword } from "@/ts/api/model/user.types"

export { getPassword , getToken };

function getPassword(userName : string) : string {
  console.log(baseUrl);
  axios.post(baseUrl+'/login', {
    userName: userName
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {

    console.log("xxx"+error);
  });

  var user : userPassword = {
    password : "123456"
  }

  return user.password;
};

function getToken(userName : string) : string {

  var user : userToken = {
    token : "123456"
  }

  return user.token;
};

