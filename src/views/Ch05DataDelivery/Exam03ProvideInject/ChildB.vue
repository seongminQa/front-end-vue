<template>
    <div class="card">
        <div class="card-header">ChildB</div>
        <div class="card-body">
            <div>
                <p>message: {{ message }}</p>
                <p>data1: {{ message.data1.value }}</p>
                <p>data2.name1: {{ message.data2.value.name1 }}</p>
                <p>data2.name2: {{ message.data2.value.name2 }}</p>
                <button class="btn btn-danger btn-sm mt-2" @click="changeData">데이터 변경</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';

const message = inject("message"); // 부모의 provide 함수가 전달 한 것을 자식에선 inject로 받을 수 있다.

console.group("message로 넘긴 값 확인");
console.log("message : " + message);
console.log("message.data1.value: " + message.data1.value); // 상태값이기 때문에 .value를 붙여준다.
console.log("message.data2.value.name1: " + message.data2.value.name1);
console.log("message.data2.value.name2: " + message.data2.value.name2);
console.groupEnd();

// 데이터 변경 함수
function changeData() {
    message.data1.value += "1";
    message.data2.value.name1 += "1";
    message.data2.value.name2 += "1";
}

</script>

<style scoped></style>
