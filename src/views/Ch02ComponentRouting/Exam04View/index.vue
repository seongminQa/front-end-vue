<template>
    <div class="card">
        <div class="card-header">Exam04View</div>
        <div class="card-body">
            <h4>태그로 화면 이동</h4>
            <p><RouterLink to="/Ch02ComponentRouting/Exam01View">Exam01View</RouterLink></p>
            <!-- 변수를 넣어줄 경우 유용한 방법 -->
            <p><RouterLink v-bind:to="'/Ch02ComponentRouting' + '/Exam01View'">Exam01View</RouterLink></p>
            <p><RouterLink :to="'/Ch02ComponentRouting' + '/Exam01View'">Exam01View</RouterLink></p>
            <p><RouterLink :to="{path: '/Ch02ComponentRouting/Exam01View'}">Exam01View</RouterLink></p>
            <p><RouterLink :to="{name: 'Exam01View'}">Exam01View</RouterLink></p> <!--name: 라우터에 등록된 이름-->

            <hr/>

            <h4>프로그램으로 화면 이동</h4>
            <p><button class="btn btn-info btn-sm" v-on:click="goUrl('Exam01View')">Exam01View</button></p>
            <p><button class="btn btn-info btn-sm" @click="goUrl('Exam03View')">Exam03View</button></p>
        </div>
    </div>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter(); // 라우터 객체 얻기

function goUrl(kind) {
    router.push("/Ch02ComponentRouting/" + kind)
    .then(() => {   // then : 그리고나서. 람다식으로 조절
        console.log("이동 완료"); // 이렇게 사용해야 한다.
    });
    //console.log("이동 완료"); // 위에서 이동을하게 되는데, 이동한 곳에 console이 먼저 출력될때가 있다.
}

</script>

<style scoped>
</style>