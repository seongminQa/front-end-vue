<template>
    <div class="card">
        <div class="card-header">Exam02Join</div>
        <div class="card-body">


            <form @submit.prevent="handleSubmit">
                <div class="input-group mb-2">
                    <span class="input-group-text">아이디</span>
                    <input type="text" class="form-control" v-model="member.mid">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">이름</span>
                    <input type="text" class="form-control" v-model="member.mname">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">비밀번호</span>
                    <input type="password" class="form-control" v-model="member.mpassword">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">이메일</span>
                    <input type="text" class="form-control" v-model="member.memail">
                </div>
                <input type="submit" value="가입" class="btn btn-danger btn-sm me-2" />
                <button type="button" class="btn btn-info btn-sm" @click="handleReset">재작성</button>
            </form>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import memberAPI from '@/apis/memberAPI';
import { useRouter } from 'vue-router';

// 라우터 객체 얻기
const router = useRouter();

// 상태 정의
const member = ref({
    mid: "",
    mname: "",
    mpassword: "",
    memail: ""
});

// 가입 버튼 클릭시 실행
async function handleSubmit() {
    // 유효성 검사는 해야하는데, 유효성 검사는 현재 생략한다.

    // console.log(JSON.parse(JSON.stringify(member.value)));

    // Axios를 이용해서 서버(Back-End)로 회원 가입 요청
    const data = JSON.parse(JSON.stringify(member.value)); // JSON 형식으로 받기위해 변수 설정
    // memberAPI.js에서 join은 Promise를 리턴하기 때문에 (비동기 방식)
    // 완전히 회원가입이 완료되고 난 후에 다음 작업을 실행해야 함 (동기 방식으로 굴러가게끔)
    const response = await memberAPI.join(data);
    console.log(response.data); // 서버가 보내는 순수 데이터를 보고 싶으면 .data를 써주어야함

    // const data2 = member.value;

    // 홈 페이지("/")로 이동
    router.push("/");
    // 이전 페이지로 이동
    router.back();
}

// 재작성
function handleReset() {
    member.value.mid = "";
    member.value.mname = "";
    member.value.mpassword = "";
    member.value.memail = "";
}

</script>

<style scoped></style>