<template>
    <DialogTemplate>
        <!-- DialogTemplate의 name들을 이용 -->
        <template v-slot:header>
            로그인
        </template>

        <template v-slot:body>
            <div class="mb-3">
                <label for="inputEmail" class="form-label">이메일</label>
                <input type="text" class="form-control" id="inputEmail" v-model="inputData.email">
            </div>
            <div class="mb-3">
                <label for="inputPassword" class="form-label">비밀번호</label>
                <input type="password" class="form-control" id="inputPassword" v-model="inputData.password">
            </div>
        </template>

        <template v-slot:footer>
            <button class="btn btn-outline-warning btn-sm me-2" @click="handleLogin">로그인</button>
            <button class="btn btn-outline-warning btn-sm" data-bs-dismiss="modal">닫기</button>
        </template>


    </DialogTemplate>
</template>

<script setup>
import DialogTemplate from "./DialogTemplate.vue";
import { ref } from "vue";

const emit = defineEmits(['close'])

const inputData = ref({
    email: "",
    password: ""
});

function handleLogin() {
    // console.log(inputData.value);
    // console.log(JSON.stringify(inputData.value)); // 객체를 문자열로 바꿈
    console.log(JSON.parse(JSON.stringify(inputData.value))); // 문자열을 자바스크립트 객체로 바꿈
    emit('close');
}


</script>

<style scoped></style>
