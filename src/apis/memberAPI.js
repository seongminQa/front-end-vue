// REST API와 통신하는 모듈

import axios from "axios";
import qs from "qs";

// axois함수를 사용하면 Promise형태로 값을 반환한다.

function join(member) {
    /*
    member = {
        mid: "seongminQa",
        mname: "김성민2",
        mpassword: "12345",
        memail: "seongminQa@github.com"
    }
    */
    // POST 방식이며 : raw / json 방식으로 전달
    return axios.post("/member/join", member);  // Promise를 반환함
}

 function login(member) {
    /*
    member = {
        mid : "user",
        mpassword : "12345"
    }
    */
   // POST 방식이며 : QueryString 방식으로 전달 (포스트맨 : x-www-from ... )
   // (mid=user&mPassword=12345) 형식..
   return axios.post("/member/login", qs.stringify(member));  // Promise를 반환함
 }

 export default {
    join,
    login
 }
