<template>
    <div class="card">
        <div class="card-header">UpdateHook</div>
        <div class="card-body">
            <p>count: {{ count }}</p>
            <button class="btn btn-info btn-sm mt-2" @click="count++">상태 변경</button>
            <button id="myButton" class="btn btn-danger btn-sm ms-3 mt-2" @click="count--">상태 변경</button>
        </div>
    </div>
</template>

<script setup>// setup이라는 스크립트는 컴포넌트가 생성 전에 일어난다.
import { onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';

// 상태 생성
const count = ref(0);

let myButton;

// 컴포넌트가 마운트 될 때 (브라우저 화면에 보이게 될 때를 의미 : Html Dom에 올라갈 때.)
onMounted(() => {
    console.log("UpdateHook 컴포넌트가 마운트 됨");
    // setup 스크립트는 컴포넌트 생성전에 일어나기 때문에!
    myButton = document.querySelector('#myButton')
    console.log(myButton);
});

onUnmounted(() => {
    console.log("UpdateHook 컴포넌트가 언마운트 됨");
});

onBeforeUpdate(() => {
    console.log("UpdateHook 컴포넌트가 업데이트 직전임");
});

onUpdated(() => {
    console.log("UpdateHook 컴포넌트가 업데이트 됨");
    //  count.value += 1; --> 업데이트 함수에 상태 변경 코드를 넣으면 안된다! // 무한반복. 에러남.
    // 자기 자신의 상태 변경에도 또 일어나기 때문에 무한반복이 일어난다는 것이다.
});
</script>

<style scoped></style>