<template>
    <div class="card">
        <div class="card-header">Exam06InnerHtmlBinding</div>
        <div class="card-body">
            <div v-html="innerHtml"></div>
            <!-- 테스트 용도 : <img src="/images/photos/photo1.jpg" height="150"/> -->
            <hr>
            <button @click="changeData" class="btn btn-info btn-sm">innerHTML 변경</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let innerHtml = ref("");

let toggle = ref(true);
function changeData() {
    if (toggle.value) {
        // @assets/ 경로를 못잡기 때문에 public/images/photos에서 가져오게끔 바꿈
        innerHtml.value = `
            <div>
                <h5>풍경 1</h5>
                <img src="/images/photos/photo1.jpg" height="150"/>
            </div>
        `;
    } else {
        innerHtml.value = `
            <div>
                <h5>풍경 2</h5>
                <img src="/images/photos/photo2.jpg" height="150"/>
            </div>
        `;
    }
    toggle.value = !toggle.value;
}

</script>

<style scoped></style>