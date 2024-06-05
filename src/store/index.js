import { createStore } from 'vuex'
import counter from './counter';
import axios from 'axios';
import axiosConfig from '@/apis/axiosConfig';

/*export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})*/

// Store 객체를 생성
const store = createStore({
  // 루트 상태를 정의
  state: {
    userId: "",
    accessToken: ""
  },
  //루트 상태 값을 읽는 메소드(Getter) 정의
  getters: {
    getUserId(state, getters, rootState, rootGetters){
      /*
      root의 개념
      */
      return state.userId;
    },

    getAccessToken(state, getters, rootState, rootGetters) {
      return state.accessToken;
    }
  },
  //루트 상태 값을 변화시키는 메소드(Setter) 정의(동기 방식)
  mutations: {
    setUserId(state, payload){ // payload는 변경할 값을 가지고 있는 객체 (전달될 데이터)
      state.userId = payload;
    },

    setAccessToken(state, payload) {
      state.accessToken = payload;
    }
  },
  //비동기 작업을 실행하고 결과에 따라 상태 값을 변화시키는 메소드 정의 
  actions: { // 서버 통신 작업을 많이 할 것이다.
    loginAction(context, payload) { // login작업이니, payload에는 아이디와 비밀번호의 값을 가져올 것이다.
      // 로그인을 한다치면 서버와 통신 작업을 할 것이다.
      // ... 3초를 소요한다면? 다른 작업을 생각하여 비동기로 처리해야 한다. promise 개념
      new Promise((resolve, reject) => {
        // 이 자리에 서버 통신 코드가 들어갈 것이다.
        // 이것을 이용하여 3초라는 시간이 소요되는 시간에 다른 작업을 할 수 있는 것이다.
        
        if(true){
          // 로그인 성공을 했을 경우에
          resolve ({result:"success", userId: payload.userId});
        } else {
          // 로그인 실패를 했을 경우
          resolve ({result:"fail", reason:"password is wrong"});
        }

        // 성공했을 때 resolve함수 내의 매개값들이 변수 data로 들어가게 되고,
        // 실패했을 경우 resolve함수 내의 매개값들이 error로 들어가게 된다.
      })
      .then((data) => { // data는? : 
        // 작업이 성공적으로 처리가 되었을 경우 실행
        // 상태 변경 작성 작업을 한다.
        console.log("login 성공");
        context.commit("setUserId", data.userId); // mutations의 셋터함수와 userId
      })
      .catch((error) => { 
        // 작업이 실패처리가 될 경우 실행
        console.log("login 실패");

      });
    },

    // 브라우저가 재실행될 때 인증 정보를 전역상태로 복구
    // 브라우저를 껐다가 다시 킬때 or 브라우저에서 새로고침을 클릭할 때
    loadAuth(context, payload) {
      context.commit("setUserId", localStorage.getItem("userId") || "");
      
      // apis - axiosConfig.js 에서 코드 수정후 추가한 내용
      // accessToken 전역 상태 설정(성민)
      //const accessToken = localStorage.getItem("accessToken");
      //context.commit("setAccessToken", localStorage.getItem("accessToken") || "");
      
      // accessToken 전역 상태 설정(현주)
      const accessToken = localStorage.getItem("accessToken") || "";
      context.commit("setAccessToken", accessToken);
      
      // Axios 요청 공통 해더에 인증 정보 추가
      if(accessToken != "") {
        axiosConfig.addAuthHeader(accessToken);
      }
    },

    // 로그인 성공했을 때 인증 정보를 전역 상태 및 로컬 스토리지에 파일로 저장
    saveAuth(context, payload) {
      /*
      payload = {
        userId: user,
        accessToken: "xxxx-yyyy-zzzz"
      }
      */
     
      // 전역 상태값을 변경
      context.commit("setUserId", payload.userId);
      context.commit("setAccessToken", payload.accessToken);
      // 로컬 파일에 저장
      localStorage.setItem("userId", payload.userId);
      localStorage.setItem("accesssToken", payload.accessToken);
      // Axios 요청 공통 해더에 인증 정보 추가
      axiosConfig.addAuthHeader(payload.accessToken);
    },

    // 로그아웃할 때 인증 정보를 모두 삭제한다.
    deleteAuth(context, payload) {
      // 전역 상태값 변경
      context.commit("setUserId", "");
      context.commit("setAccessToken", "");
      // 로컬 파일에서 삭제
      localStorage.removeItem("userId");
      localStorage.removeItem("accessToken");
      // Axios 요청 공통 해더에 인증 정보 삭제
      axiosConfig.removeAuthHeader();
    }
  },
  //루트 하위 상태 모듈 추가
  modules: {
    // counter 이름으로 counter 모듈을 추가
    counter: counter    // ppt 110p의 store.commit("counter/serCount", value); 부분에서 counter는 왼쪽 변수의 이름을 의미한다.
  }
});

// Store 객체를 내보내기
export default store;