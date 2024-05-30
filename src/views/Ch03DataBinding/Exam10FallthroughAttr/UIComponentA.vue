<template>
    <!-- index.vue에서 UIComponentA 태그를 사용 후 속성까지 전달 -->
    <div class="card">
        <div class="card-header">UIComponentA</div>
        <div class="card-body">
            <div :class="prop.class" :style="prop.style" @click="emit('click')">content</div>

            <button class="mt-2 btn btn-info btn-sm" @click="handleClick">버튼</button>
        </div>
    </div>
</template>

<script setup>
const prop = defineProps(["class", "style"]);
const emit = defineEmits(["Click"]);

function handleClick() {
    // 컴포넌트의 속성값 읽기
    console.log(prop.class);
    console.log(prop.style);
    // 컴포넌의 click 이벤트 발생
    emit('click');
}

</script>

<style scoped></style>
