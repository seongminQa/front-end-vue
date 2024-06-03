<template>
    <div class="card">
        <div class="card-header">Exam01Promise</div>
        <div class="card-body">
            <div class="mb-3">
                <button class="btn btn-secondary btn-sm me-2" @click="handleBtn1">비동기 작업 1</button>
                <button class="btn btn-dark btn-sm" @click="handleBtn2">비동기 작업 2</button>
                <hr>
                <div class="mt-3" v-if="loading">
                    <div class="spinner-border text-success" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                <hr>
                <div>
                    <div class="mt-3" v-if="!loading">
                        {{ result }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
// 상태 정의
const loading = ref(false); // spinner(로딩 UI)를 사용하기 위해 상태를 정의 (v-if와 같이 활용)
const result = ref("결과가 나오는 부분입니다.");  // 결과에 대한 내용을 컴포넌트에 출력해보기

// 비동기 작업 함수 정의
function asyncWork() {
    //3초 후에 응답이 오는 Promise 생성
    const promise = new Promise((resolve, reject) => {  // resolve는 성공 처리시 실행, reject는 실패 처리시 실행
        // 지연시간 두기 // 3초 후에, 첫번째 매개값인 람다식이 실행 
        setTimeout(() => {
            // 성공적으로 처리했을 경우 (resolve) -> 3초 후 성공적으로 처리 . 응답결과 반환 
            resolve("성공 응답 내용");
            // 실패 처리할 경우(reject) -> 3초 후 실패
            // reject("실패 응답 내용");
            /* 
                resovle와 reject가 하나의 스코프안에 같이 실행되면 안된다.
            */
        }, 3000);
    });

    return promise;
}

function handleBtn1() {
    loading.value = true;
    console.log("handleBtn1() 시작");

    // 비동기 작업 처리 함수 호출
     // then은 응답이 성공시(resolve가 실행되었을 때) // catch()는 응답이 실패시(reject가 실행되었을 때) // finally()는 성공했든 실패했든 무조건 실행되는 구문
    asyncWork()
        .then((data) => { // promise가 resolve를 호출했을 때
            console.log("성공: ", data);
            result.value = data;
        })
        .catch((error) => { // promise가 reject를 호출했을 때
            console.log("실패: ", error);
            result.value = error;
        })
        .finally(() => { // 성공이든, 실패든 마지막 작업 처리 (항상 진행)
            console.log("마무리 작업 실행");
            loading.value = false;
        })
    console.log("handleBtn1() 끝");
}

// -----------------------------------------------------------------

function handleBtn2() {
    console.log("handleBtn2() 시작");
    useAsyncWokr();
    console.log("handleBtn2() 끝");
}

// 'await' 코드가 있는 경우에는 반드시 'async' 코드가 같이와야 한다!! **
async function useAsyncWokr() { // 함수의 앞에 async를 붙여주게 되면 비동기 방식으로 처리하게 된다.
    loading.value = true;
    try {
        const data = await asyncWork(); // 여기에선 Promise가 동기적으로 처리가 된다.
        console.log("성공: ", data);
        result.value = data;
    } catch (error) {
        console.log("실패: ", error);
        result.value = error;
    }
    console.log("마무리 작업 실행");
    loading.value = false;
}

</script>

<style scoped></style>