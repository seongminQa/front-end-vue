<template>
    <div class="card">
        <div class="card-header">Exam05View</div>
        <div class="card-body">
            <!-- 라우터 URL 중첩을 생각하여 to내용을 작성 -->
            <!-- 라우터가 중첩되어 URL에 표시되기 때문에 UIComponentA만 작성하면 안된다. -->
            <!-- <RouterLink to="UIComponentA" class="me-3">UIComponentA</RouterLink> -->
            <RouterLink to="/Ch02ComponentRouting/Exam05View/UIComponentA" class="me-3">UIComponentA</RouterLink>
            <RouterLink to="/Ch02ComponentRouting/Exam05View/UIComponentB" class="me-3">UIComponentB</RouterLink>
            <button class="btn btn-outline-info btn-sm" @click="changeNestedComponent()">UIComponent</button>
            <hr>
            <!-- 중첩된 라우트의 컴포넌트가 보여질 위치 -->
            <RouterView/>

        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function changeNestedComponent() {
    router.push("/Ch02ComponentRouting/Exam05View/UIComponentC")
}
</script>

<style scoped>
</style>