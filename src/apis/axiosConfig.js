import axios from "axios";

// 기본 경로를 설정해야한다.
axios.defaults.baseURL = "http://localhost";

// AccessToken을 받고나서 다음 요청시 전달할 수 있도록 요청 헤더에 추가
// 로그인이 성공했을 때 호출된다. (호출할 때마다 추가됨)
function addAuthHeader(accessToken) {
    // common 객체에 동적 속성으로 Authorization을 추가
    // accessToken은 헤더행의 속성이름 'Authorization'에 추가된다.
    axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
    console.log(axios.defaults.headers.common);
}

// 공통 요청 헤더에서 Authorization 헤더 삭제
// 로그아웃시 호출된다.
function removeAuthHeader() {
    // common 객체의 Authorization 속성을 삭제 (속성을 삭제할 경우 delete를 사용한다.)
    delete axios.defaults.headers.common["Authorization"];
    console.log(axios.defaults.headers.common);
}

// AccessToken을 어디에 저장할지는 만드는 애플리케이션에 따라 다르다.

// // 로컬 스토리지에 AccessToken을 저장하는 코드
// function saveAccessToken(accessToken) {
//     // sessionStorage // 요곤 세션 스토리지 사용할 때 쓰면 된다
//     // "accessToken"는 저장하는 Key 이름이다.
//     localStorage.setItem("accessToken", accessToken);
// }

// // 로컬 스토리지에 있는 AccessToken을 읽고 공통 헤더에 추가하는 코드
// function readAccessToken() {
//     // 저장된 Key이름 "accessToken"을 넣어준다.
//     // "accessToken"의 값이 null이라면 뒤에 있는 값 ""이 변수 accessToken의 값으로 들어간다.
//     const accessToken = localStorage.getItem("accessToken") || "";
    
//     return accessToken; // 이렇게 사용해도 된다. 어차피 목적은 header에 AccessToken을 추가하는 것이기 때문이다.

//     /*
//     ppt의 내용
//     if(accessToken != "") {
//         addAuthHeader(accessToken);
//      }
//      */
// }

export default {
    addAuthHeader,
    removeAuthHeader
    /*saveAccessToken,
    readAccessToken*/
}
    