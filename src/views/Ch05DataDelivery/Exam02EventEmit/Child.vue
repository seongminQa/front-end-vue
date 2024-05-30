<template>
    <div class="card">
        <div class="card-header">Child</div>
        <div class="card-body">
            <div>
                <h6>[자식 -> 부모]</h6>
                <button class="btn btn-danger btn-sm me-3" @click="$emit('child-event-1', 'value1')">child-event-1 이벤트
                    발생($emit)</button>
                <button class="btn btn-danger btn-sm me-3" @click="emit('child-event-1', data1)">child-event-1 이벤트
                    발생(emit)</button>
                <!-- 이번엔 emit을 사용하지 않고 작성 -->
                <button class="btn btn-info btn-sm" @click="handleChildEvent2">child-event-2 이벤트
                    발생(emit)</button>
            </div>
            <hr>

            <div>
                <!-- 부모에서도 값의 기록을 남겨야 할 때 사용..?
                    어떤 때일까? -->
                <!-- 실제 프로젝트에선 이렇게만 사용할 수 있을까..?
                    부모 -> 자식 -> 자식 -> 자식 ... 골치 아프다...
                    정확한 명세서를 작성해야 될 듯하다. -->
                <!-- 자식 쪽에서 이벤트를 발생시켜 값을 부모쪽으로 보내고,
                    부모 쪽에서 값의 상태를 변화시켜 다시 자식 쪽으로 값을 전달 -->
                <h6>[자식 -> 부모 -> 자식]</h6>
                <button class="btn btn-warning btn-sm me-3" @click=handleIncrementEvent>증가(increment-event)</button>
                <!-- 이번엔 emit을 사용하지 않고 작성 -->
                <button class="btn btn-info btn-sm" @click="handleDecrementEvent">감소(decrement-event)</button>
                <p class="mt-2">Counter : {{ counter }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let data1 = ref("value1");
let data2 = ref(100);

// 'child-event-1'가 이벤트인 것을 알려준다.
const emit = defineEmits(["child-event-1", "child-event-2", 'increment-event', 'decrement-event']);

function handleChildEvent2() {
    emit("child-event-2", data1, data2); // 값을 2개를 주어봄.

}

// ----

function handleIncrementEvent() {
    emit("increment-event", 1);
}

function handleDecrementEvent() {
    emit("decrement-event", 1);
}

const prop = defineProps(["counter"]);

</script>

<style scoped></style>
