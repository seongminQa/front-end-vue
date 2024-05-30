<template>
    <div class="card">
        <div class="card-header">Exam01EventHandling</div>
        <div class="card-body">
            <div class="mb-3">
                <h6>[이벤트 처리]</h6>
                <!-- 함수 그 자체 -->
                <button class="btn btn-danger btn-sm me-3" @click="handleBtn1">버튼 1</button>
                <!-- 괄호()가 있으므로 함수를 호출 -->
                <button class="btn btn-info btn-sm" @click="handleBtn2('vue is good', $event)">버튼 2</button>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">아이디</span>
                <!-- :value : 단방향. v-model을 쓰지않았기 때문에 양방향이 X -->
                <!-- 앞으로 모든 변수는 '상태'로 사용할 것이다. -->
                <input type="text" class="form-control" name="userID" :value="userID" @keyup="handleInput($event)" />
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">아이디</span>
                <!-- 양방향 바인딩을 사용해보자. (v-model 사용)-->
                <input type="text" class="form-control" name="userID" v-model="userID" />
            </div>

            <div>입력 내용 : {{ userID }}</div>
            <hr>

            <div>
                <h6>[이벤트 수식어 사용]</h6>
                <a href="javascript:handleLink()">링크로 자바스크립트 실행</a>
                <br>
                <a href="https://vuejs.org" @click="handleLink">링크로 자바스크립트 실행</a>
                <br>

                <!-- prevent를 이용하여 막는다. -->
                <!-- 만약 조건이 있다면 조건에 부합하지 않는 경우 
                    prevent를 붙이고, 조건을 만족한다면 넘어가게끔 만든다? -->
                <a href="https://vuejs.org" @click.prevent="handleLink">링크로 자바스크립트 실행</a>

                <!--  -->
                <!-- <form class="my-3" action="https://vuejs.org/guide/introduction.html" @submit.prevent="handleForm"> -->
                <!-- 위의 a태그의 이용용도와 마찬가지로 action을 취하는 것인지?? 확인해보자 -->
                <form class="my-3" action="" @submit.prevent="handleForm">
                    <div class="input-group mb-3">
                        <span class="input-group-text">이메일</span>
                        <input type="email" class="form-control" v-model="userEmail">
                    </div>
                    <!-- v-model을 사용하여 양방향 데이터 전송이 되었기 때문에
                        스크립트 부분에 ref로 상태 변수로 초기화 시키기만 하면 바로 아래 코드에
                        {{ 변수 }} 값으로 바로 나타낼 수 있다. -->
                    <div>입력내용: {{ userEmail }}</div>
                    <input type="submit" value="제출" class="btn btn-success btn-sm mt-2" />
                </form>


            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

function handleBtn1() {
    console.log("handleBtn1 실행");
}

function handleBtn2(arg, event) {
    console.log("handleBtn2 실행");
    console.log("arg:" + arg);
    console.log("event,target:", event.target); // 이벤트가 발생하는 타켓(엘리먼트)
}

let userID = ref(""); // 디폴트 값은 빈문자열 // 상태 데이터 생성

function handleInput(event) {
    console.log("event.target.name: " + event.target.name);
    console.log("event.target.value: " + event.target.value);
    userID.value = event.target.value;
}

function handleLink() {
    console.log("handleLink 실행");
}

let userEmail = ref("");

function handleForm() {
    console.log("userEmail.value: " + userEmail.value);
}

</script>

<style scoped></style>
