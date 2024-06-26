import { createApp } from 'vue' // createApp은 export로 내보낸 것.
import App from './App.vue' // App은 export default로 지정되어 있기 때문에 {}로 나타내지 않음
import router from './router/index.js'

// Bootstrap 관련 JavaScript와 CSS 로딩
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store'

import axiosConfig from './apis/axiosConfig';

//브라우저 재실행시 인증 정보를 가져옴 -------------------------
//인증 정보를 store에 저장
store.dispatch("loadAuth"); //비동기
//-----------------------------------------------------------

// App컴포넌트를 <div id="app"></div>에 내용으로 추가
createApp(App)
    .use(store)
    .use(router)
    .mount('#app') // index.html에서 id가 app인 태그에 적용
