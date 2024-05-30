<template>
    <div class="card">
        <div class="card-header">Exam03View</div>
        <div class="card-body">
            <!--공용 컴포넌트 3개를 추가 A, B, C
            1. IMPORT 하기
            -->
            <UIComponentA />
            <UIComponentB class="mt-3" />
            <UIComponentC class="mt-3" />
            <!-- 공용 컴포넌트가 아닌 D추가. 현재경로 -->
            <UIComponentD class="mt-3" />
            <uI-component-d class="mt-3" />

        </div>
    </div>
</template>

<script setup>
import UIComponentA from '@/components/Ch02ComponentRouting/UIComponentA.vue';
import UIComponentB from '@/components/Ch02ComponentRouting/UIComponentB.vue';
import UIComponentC from '@/components/Ch02ComponentRouting/UIComponentC.vue';
import UIComponentD from './UIComponentD.vue'; // 현재 경로에 있다. "./"
// '@'는 src까지의 경로를 의미
</script>

<style scoped></style>
