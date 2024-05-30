<template>
    <div class="card" :id="$attrs.id">
        <div class="card-header">UIComponentB</div>
        <div class="card-body">
            <!-- 템플릿에서만 $attrs. 를 붙인다. -->
            <div class="mb-2" :class="$attrs.class" :style="$attrs.style" @click="$attrs.onClick">
                Contents
            </div>

            <div :class="$attrs.class" :style="$attrs.style" @click="$emit('click')">
                Contents
            </div>

            <hr>

            <button class="btn btn-info btn-sm me-3" @click="handleBtn1">버튼 1 (속성값 이용)</button>
            <button class="btn btn-info btn-sm" @click="handleBtn2">버튼 2 (리스너 호출)</button>
        </div>
    </div>
</template>

<script setup>
import { defineOptions, useAttrs } from 'vue';

defineOptions({
    // fallthrough 속성을 비활성화
    inheritAttrs: false
});

const attrs = useAttrs(); // 앞에 use가 붙은 것은 hook이란 특별한 함수이다.

function handleBtn1() {
    // '속성'으로 전달된 값 얻기
    console.log(attrs.id);
    console.log(attrs.class);
    console.log(attrs.style);
}

function handleBtn2() {
    // '속성'으로 전달된 핸들러 함수(리스너)를 호출
    attrs.onClick();
}

</script>

<style scoped></style>
