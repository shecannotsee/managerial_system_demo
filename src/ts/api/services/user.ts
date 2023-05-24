import {} from "@/ts/api/model/user.types"

import axios from 'axios';
import baseUrl from "@/ts/route"
import type { userToken , userPassword } from "@/ts/api/model/user.types"

export { getPassword , getToken };

function getPassword(userName : string) : string {
  axios.post(baseUrl+'/user', {
    userName: userName
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
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

