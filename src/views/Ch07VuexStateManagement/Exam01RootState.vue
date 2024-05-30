<template>
    <div class="card">
        <div class="card-header">Exam01RootState</div>
        <div class="card-body">
            <h4><b>[루트 상태 읽기]</b></h4>
            <p>userId 단방향 바인딩 : {{ $store.state.userId }}</p>
            <p>userId 단방향 바인딩 : {{ $store.getters.getUserId }}</p> <!-- {{ $store.getters.getUserId() }} 함수호출코드로 쓰면 에러남 -->
            <p>userId 단방향 바인딩 : {{ getUserId() }}</p>
            <!-- computed를 이용하여 바인딩 해보자. 이것이 더 효율적? -->
            <p>userId 단방향 바인딩 : {{ computedUserId }}</p>
            <p>userId 양방향 바인딩 : <input type="text" v-model="$store.state.userId"/></p>

            <hr>

            <h4><b>[루트 상태 변경]</b></h4>
            <button class="btn btn-secondary btn-sm me-3" @click="changeByMutation">userId 변경(Mutation을 이용한 동기 방식)</button>
            <button class="btn btn-info btn-sm" @click="changeByAction">userId 변경(Action을 이용한 비동기 방식)</button>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import {useStore} from 'vuex';
const store = useStore(); // 이렇게 Store객체를 얻을 수 있다!

function getUserId() {
    return store.state.userId;
}

const computedUserId = computed(() => {
    // return store.state.userId;
    return store.getters.getUserId;
});

/*
    Mutation 방식과 Actions 방식의 차이.. 어떤 것이 더 유리할까?
    Mutation 방식은 아래의 코드에서 처럼 쓸 것이 많다. 하지만 가독성 면에서 유리하다.

    우리가 프로젝트에서 비동기적인 방법으로 UI를 구성하고 싶다면
    Actions 방식으로(필요시) 할 수도 있지만, 필수는 아니다.
    Mutation 방식(세터)으로 값의 변화로만 사용할 수 있다.

    Actions 안에 세터(Mutation)를 이용하여 값을 변경하는 코드가 있다.
    어찌 저찌 됐든 값의 상태 변화를 나타내려면 Mutation(세터)은 필요하다.
*/


// 스프링 프로젝트에서 해당 jsp에서 AJAX를 작성하고 데이터를 전송했던 것처럼
// 내가 해당 컴포넌트에서 버튼을 눌렀을 때 데이터를 전송 받는 방식이 Mutation
function changeByMutation() {
    new Promise((resolve, reject) => {
        if(true){
          resolve ({result:"success", userId:"spring"});
        } else {
          resolve ({result:"fail", reason:"password is wrong"});
        }
      })
      .then((data) => { // data는? : 
        console.log("login 성공");
        // 컴포넌트에서 Mutations를 사용하려면 commit을 해야한다.
        store.commit("setUserId", data.userId); // mutations의 셋터함수와 userId
      })
      .catch((error) => { 
        console.log("login 실패");
      });
}


function changeByAction() {
    // 컴포넌트에서 Actions를 사용하려면 Dispatch를 해야한다. ppt 103p
    store.dispatch("loginAction", {userId: "fall"});  
    // {userId: "fall"} 은 payload
}

</script>


<style scoped>
div {
    border: 1px solid red;
}
</style>
