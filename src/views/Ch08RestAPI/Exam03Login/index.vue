<template>
    <div class="card">
        <div class="card-header">Exam03Login</div>
        <div class="card-body">
            <!-- '$'가 들어가면 '내장객체'를 의미함
                store를 이용해보자.
            -->
            <div v-if="$store.state.userId === ''">

                <form @submit.prevent="handleLogin">
                    <div class="input-group mb-2">
                        <span class="input-group-text">아이디</span>
                        <input type="text" class="form-control" v-model="member.mid">
                    </div>

                    <div class="input-group mb-2">
                        <span class="input-group-text">비밀번호</span>
                        <input type="password" class="form-control" v-model="member.mpassword">
                    </div>

                    <input type="submit" value="로그인" class="btn btn-danger btn-sm me-2" />
                    <button type="button" class="btn btn-info btn-sm" @click="handleReset">재작성</button>
                </form>
            </div>

            <div v-if="$store.state.userId !== ''">
                <div class="btn btn-success btn-sm mt-3" @click="handleLogout">로그아웃</div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import memberAPI from '@/apis/memberAPI';

import { useStore } from 'vuex';  // Store 사용

// member 초기화 작업 
// v-model값의 기본값을 주어야 한다. (값을 안주면 처음 컴포넌트 진입시 에러남)
const member = ref({
    mid: "",
    // mPassword: ""
    mpassword: ""
});

const store = useStore(); // 전역 상태의 값을 갖는 store

// 로그인 버튼 클릭시 실행
async function handleLogin() {
    try {
        const data = JSON.parse(JSON.stringify(member.value));
        // 
        console.log(data);
        const response = await memberAPI.login(data);
        if (response.data.result === "success") {
            const payload = {
                userId: response.data.mid,
                accessToken: response.data.accessToken
            };
            store.dispatch("saveAuth", payload);
        }
    } catch (error) {
        console.log(error);
    }
}


// 재작성 버튼 클릭시 실행
function handleReset() {
    member.value.mid = "";
    member.value.mpassword = "";

}

// 로그아웃 버튼 클릭시 실행
function handleLogout() {
    store.dispatch("deleteAuth");
}
</script>

<style scoped></style>
