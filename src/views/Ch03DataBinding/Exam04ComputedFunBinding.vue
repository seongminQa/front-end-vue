<template>
    <div class="card">
        <div class="card-header">Exam04ComputedFunBinding</div>
        <div class="card-body">
            <p>이름: {{ name }}</p>
            <p>주민번호: {{ getSsn() }}</p>
            <!-- computed를 사용한 경우  -->
            <p>주민번호: {{ computedSsn }}</p>
            <hr>
            <button class="btn btn-info btn-sm me-3" @click="changeName">이름 수정</button>
            <button class="btn btn-info btn-sm" @click="changeSsn">주민번호 수정</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

// 반응형 속성 선언
const name = ref("홍길동");
const ssn1 = ref("880515");
const ssn2 = ref("1110345");

// 일반함수
// 컴포넌트가 리렌더링될 때마다 호출된다.
function getSsn() {
    console.log("getSsn() 실행");
    const ssn = ssn1.value + "-" + ssn2.value.charAt(0) + "**************";
    return ssn;
}

// function getSsn() {
//     console.log("getSsn() 실행");
//     const ssn = ssn1.value + "-" + ssn2.value.charAt(0) + "******";
//     return ssn;
// }

// 계산된 함수
// 컴포넌트가 리렌더링이 되더라도 ssn1과 ssn2의 값이 변경될 때만 호출된다.
// ssn1과 ssn2 값의 변경이 없을 경우엔 호출되지 않는다! ==> getSsn()함수보다 성능면에서 더욱 좋다.
const computedSsn = computed(() => {
    console.log("computedSsn() 실행");
    const ssn = ssn1.value + "-" + ssn2.value;
    return ssn;
});

// 상태 변경 함수
function changeName() {
    name.value += "동";

}

// 상태 변경 함수
function changeSsn() {
    ssn2.value = parseInt(Math.random() * 10 + 1) + "110345"; // ssn2의 맨 앞의 수만 바뀌게 된다. --> 7자리를 for를 돌려 모두 바꾸기 쉬울까?
    //ssn2.value = "1234567"; // 클릭하게 되면 getSsn()함수가 처음만 실행되고 그다음부터는 실행되지 않는다. // 리렌더링이 일어나지 않기 때문

}

// 리렌더링이 될 때마다 실행
// function getSsn() {

// }
</script>

<style scoped></style>