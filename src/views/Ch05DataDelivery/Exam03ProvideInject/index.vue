<template>
    <div class="card">
        <div class="card-header">Exam03ProvideInject</div>
        <div class="card-body">
            <div>
                <p>data1 : {{ data1 }}</p>
                <p>data2 : {{ data2.name1 }}</p>
                <p>data2 : {{ data2.name2 }}</p>
                <button class="btn btn-secondary btn-sm mt-2" @click="changeData">데이터 변경</button>
                <hr>
                <ChildA />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import ChildA from './ChildA.vue';

// 상태 생성
const data1 = ref("parent-value1");
const data2 = ref({
    name1: "parent-value2",
    name2: "parent-value3"
});

// 하위 컴포넌트로 데이터를 제공 (provide 함수 import하기)
provide("message", { data1: data1, data2 }); // 속성의 이름과 값의 이름이 같을 경우는 하나만 써도 된다.

// 데이터 변경 함수
function changeData() {
    data1.value += "0";
    data2.value.name1 += "0";
    data2.value.name2 += "0";
}
</script>

<style scoped>

</style>
