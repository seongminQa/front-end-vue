<template>
    <div class="card">
        <div class="card-header">ChildC</div>
        <div class="card-body">
            <p>propA : {{ prop.propA }}</p>
            <p>propB : {{ propB }}</p>
            <p>propC : {{ propC }}</p>
            <p>propD : {{ propD }}</p>
            <p>propE : {{ propE }}</p>
            <p>propF : {{ propF.message }}</p>
            <p>propG : {{ propG[0] }} / {{ propG[1] }}</p>
            <p>propH : {{ propH() }}</p>
            <p>propI : {{ propI }}</p>
        </div>
    </div>
</template>

<script setup>
// 1. 부모로부터 미리 받아야될 속성을 먼저 정의하기.
const prop = defineProps({
    propA: String,
    propB: Number,
    propC: [String, Number], // 문자도 좋고 숫자도 좋다.
    propD: {
        type: String,
        required: true // ☆ 이렇게 지정해놓으면 부모쪽에선 반드시 작성해야 한다!!
    },
    propE: {
        type: Number,
        default: 3
    },
    propF: {
        type: Object,
        default() {
            return { message: "Hello" }
        }
    },
    propG: {
        type: Array,
        default() {
            return ["black", "pink"]
        }
    },
    propH: {
        type: Function,
        default() {
            return "Child값"
        }
    },
    propI: {
        type: Number,
        validator(value) {
            return value > 0 && value < 11
        }
    }
});

</script>


<style scoped></style>
