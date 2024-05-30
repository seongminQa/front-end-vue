<template>
    <div class="card">
        <div class="card-header">Exam07View</div>
        <div class="card-body">
            <h5>경로 변수(파라미터 : Parameter)로 전달</h5>
            <p>전달된 게시판 종류: {{ route.params.kind }}</p>
            <p>전달된 색상: {{ route.params.color}}</p>

            <h5 class="mt-5">쿼리 스트링으로 전달된 데이터</h5>
            <p>전달된 게시판 종류: {{ route.query.kind }}</p>
            <p>전달된 색상: {{ route.query.color}}</p>
        </div>
    </div>
</template>

<script setup>
// ???
// useRouter는 라우트하는 (데이터가 이동할 때) 해당 객체를 의미함 (데이터를 전달할 때 라우터를 사)
// useRoute는 이동할 때 전달되는 데이터를 찾을 때 사용 (데이터를 전달 받을 때 사용)

// 이동하는게 목적이 아닌, 이동하고 나서 데이터를 얻는 게 목적임
// 데이터를 얻는 목적이라면 useRoute
import { useRoute } from 'vue-router';
const route = useRoute();

console.log(route.params.kind);
console.log(route.params.blue);
console.log(route.query.kind);
console.log(route.query.blue);

</script>

<style scoped>
</style>