import {} from "@/ts/api/model/user.types"

import { axios } from axios; 
import { baseUrl } from "@/ts/route"
import { userToken , userPassword } from "@/ts/api/model"

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

  return "";
};

function getToken(userName : string) : string {


  return "";
};

