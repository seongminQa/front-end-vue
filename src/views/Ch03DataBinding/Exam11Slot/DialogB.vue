<template>
    <DialogTemplate>
        <!-- DialogTemplate의 name들을 이용 -->
        <template v-slot:header>
            알림
        </template>

        <template v-slot:body>
            <P>DialogB의 내용입니다!</P>
        </template>

        <template v-slot:footer>
            <button class="btn btn-secondary btn-sm" @click="emit('close')">확인</button>
        </template>


    </DialogTemplate>
</template>

<script setup>
import DialogTemplate from "./DialogTemplate.vue";
// 다이얼로그 B 닫기 버튼 활성화 시키기
// 오늘 배운 '속성'을 이용
const emit = defineEmits(['close'])

</script>

<style scoped></style>
