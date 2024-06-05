import { createStore } from 'vuex';
import counter from './counter';
import axiosConfig from '@/apis/axiosConfig';

//Store 객체 생성
const store = createStore({
  //루트 상태(전역 상태) 정의
  state: {
     userId: "",
     accessToken: ""
  },
  //루트 상태(전역 상태) 값을 읽는 메소드(Getter) 정의
  getters: {
    getUserId(state, getters, rootState, rootGetters) {
      return state.userId;
    },

    getAccessToken(state, getters, rootState, rootGetters) {
      return state.accessToken;
    }
  },
  //루트 상태(전역 상태)를 변경하는 메소드(Setter) 정의 -> 동기 방식
  // payload : 변경할 상태 값을 갖고 있는 객체
  // state 기존 객체에 변경할 상태 값을 갖고 있는 객체 대입
  mutations: {
    setUserId(state, payload) {
      state.userId = payload;
    },

    setAccessToken(state, payload) {
      state.accessToken = payload;
    }
  },
  //루트 상태(전역 상태)를 변경하는 메소드 정의 -> 비동기 방식
  //비동기 작업을 실행하고 결과에 따라 상태 값을 변화시키는 메소드 정의 
  // 주로 Restful API로 비동기 요청하고, 응답을 받은 후에 상태 변이를 시키는 것을 목적으로 함
  actions: {
    // context 를 통해서 state 값을 얻을 수 있다. 
    // payload 에 id, password 객체가 실려서 들어오게됨 

    loginAction(context, payload) {
      new Promise((resolve, reject) => {
        // (비동기 작업 처리)
        // 서버와 통신 작업
        // ... 3초 소요 된다고 가정
        if(true) {
          // 로그인 성공 -> 성공시 then(data) data로 들어감
          resolve({result: "success", userId: payload.userId});
        } else {
          // 로그인 실패 -> 실패시 catch(error) error로 들어감
          reject({result: "fail", message: "password is wrong."});
        }
      
      })
      // 3초가 소요되고 나서 수행할 작업 정의 (작업이 성공적으로 처리가 됐을 경우)
      // data: 서버와 통신 작업을 한 결과 
      .then((data) => {
        //resolve일 경우 mutations을 이용해서 상태값 변경
        console.log("로그인 성공");
        // context를 이용해서 루트 상태 값을 얻을 수 있으니까, context에 변경한 상태 값을 commit 함
        context.commit("setUserId", data.userId); 
      })
      // 작업이 실패 처리될 경우 catch 실행
      .catch((error) => {
        //예외가 발생했거나, reject일 경우
        console.log("로그인 실패");
      });
    },

    // 로컬 스토리지에 저장되어 있는 access token을 불러오기
    // 브라우저가 재실행될때 인증 정보를 전역상태로 복구 
    loadAuth(context, payload) {
      // userId 전역 상태 설정
      context.commit("setUserId", localStorage.getItem("userId") || "");
      
      // accessToken 전역 상태 설정
      const accessToken = localStorage.getItem("accessToken") || "";
      context.commit("setAccessToken", accessToken);

      //Axios 요청 공통 헤더에 인증 정보 추가
      if(accessToken != ""){
        // access token 을 헤더에 추가하는 작업 
        axiosConfig.addAuthHeader(accessToken);
      }
    },

    // 로컬 스토리지에 access token을 저장하기 
    // 로그인을 성공했을때 인증 정보를 전역상태 및 로컬 파일에 저장
    saveAuth(context, payload) {
      /*
       payload = {
          userId: user,
          accessToken: "xxxxx.yyyy.zzz"
       } 
       */
      // 전역 상태값 변경 
       context.commit("setUserId", payload.userId);
       context.commit("setAccessToken", payload.accessToken);
       // 로컬 스토리지에 저장
       localStorage.setItem("userId", payload.userId);
       localStorage.setItem("accessToken", payload.accessToken);

       // 로그인을 성공하면, access token 이 유효하다는 거니까 
       // loadAuth() 내에 if 문 처럼 if문이 필요없음
       // 어차피 access token이 들어있으니까!
       // Axios 요청 공통 헤더에 인증 정보 추가 
      axiosConfig.addAuthHeader(payload.accessToken);
      
    },
    
    // 로그아웃할 때 인증 정보를 전역 상태에서 모두 삭제
    deleteAuth(context, payload) {
      // 전역 상태값을 "" 으로 변경 
      context.commit("setUserId", "");
      context.commit("setAccessToken", "");
      // 로컬 스토리지에 저장 (setItem(저장), getItem(읽기), removeItem(삭제) -> 로컬스토리지 메소드)
      localStorage.removeItem("userId");
      localStorage.removeItem("accessToken");

      // Axios 요청 공통 헤더에 인증 정보 삭제 
      axiosConfig.removeAuthHeader();
    }

  },
  // 루트 하위 상태 모듈 추가
  modules: {
    // 하위 모듈 네임스페이스 : import한 하위 모듈 이름
    //counter: counter, => 속성: 값 이름이 같아서 생략해서 작성 counter
    counter,
  }
});

// store 객체 내보내기
export default store;
