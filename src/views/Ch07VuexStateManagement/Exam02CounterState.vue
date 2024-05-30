<template>
    <div class="card">
        <div class="card-header">Exam02CounterState</div>
        <div class="card-body">
            <h4><b>[counter 상태 읽기]</b></h4>
            <!-- $store.state 까지는 root상태. 
                counter는 store의 index.js module에서 정의한 하위 모듈의 이름 -->
            <p>count 단방향 바인딩 : {{ $store.state.counter.count }}</p>
            <p>count 단방향 바인딩 : {{ $store.getters["counter/getCount"] }}</p>
            <p>count 단방향 바인딩 : {{ getCounter() }}</p>
            <p>count 단방향 바인딩 : {{ computedCount }}</p>
            <p>count 양방향 바인딩 : <input type="number" v-model="$store.state.counter.count" /></p>

            <hr>

            <h4><b>[루트 하위 counter 상태 변경]</b></h4>
            <button class="btn btn-secondary btn-sm me-3" @click="changeByMutation">count 변경(Mutation을 이용한 동기 방식)</button>
            <button class="btn btn-info btn-sm" @click="changeByAction">count 변경(Action을 이용한 비동기 방식)</button>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
// computed를 사용하면, 상태가 변할 때만! 값을 가져오고, 안변하면 캐시에서 가져온다.
const computedCount = computed(() => {
    return store.state.counter.count;
});

function getCounter() {
    return store.state.counter.count;   // 이렇게도 가져올 수 있는데 굳이 getter가 필요할까?
    // return store.getters["counter/getCount"];
}

function changeByMutation() {
    return store.commit("counter/setCount", 1); // 1값은 payload로 전달된다!
}

function changeByAction() {
    store.dispatch("counter/addAction", 1);
}

</script>


<style scoped>
div {
    border: 1px solid red;
}
</style>
