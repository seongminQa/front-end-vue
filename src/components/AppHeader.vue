<template>
    <nav class="navbar justify-content-between bg-dark text-white">
        <div class="ms-2">
            <img src="@/assets/logo.png" width="30" height="30">
            <span class="ms-2 text-white">Vue.js0</span>
        </div>

        <div class="me-2">
            <div v-if="$store.state.userId === ''">
                <RouterLink to="/Ch08RestAPI/Exam03Login" class="btn btn-success btn-sm">로그인</RouterLink>
            </div>
            <div v-if="$store.state.userId !== ''">
                <span>User ID : {{ $store.state.userId }}</span>
                <button class="btn btn-danger btn-sm ms-2 me-2" @click="handleLogout">로그아웃</button>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore(); // 전역 상태의 값을 갖는 store
const router = useRouter();

function handleLogout() {
    store.dispatch("deleteAuth");
    router.push("/Ch08RestAPI/Exam03Login");
}

</script>

<style scoped></style>