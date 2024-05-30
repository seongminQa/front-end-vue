<template>
    <div class="card">
        <div class="card-header">Exam05AttrBinding</div>
        <div class="card-body">
            <div class="mb-4">
                <h5>:속성 = "변수"</h5>
                <!-- <a href="https://www.vuejs.org" class="me-3">Vue 홈페이지</a> -->
                <a :href="vueHome" class="me-3">Vue 홈페이지</a>
                <!-- <RouterLink to="/">홈 페이지</RouterLink> -->
                <RouterLink :to="appHome">홈 페이지</RouterLink>
            </div>
            <hr>

            <div class="mb-4">
                <h5>:속성 = "연산식" | `매개변수화된 문자열`</h5>
                <!-- <img src="@/assets/photos/photo1.jpg" height="150" class="me-2"/> -->
                <img :src="require('@/assets/photos/' + imgName)" height="150" class="me-2" />
                <img :src="require(`@/assets/photos/${imgName}`)" height="150" class="me-2" />
            </div>
            <hr>

            <div class="mb-4">
                <h5>:class="변수 | 객체 | 배열"</h5>
                <div class="mb-3 fw-bold">아름다운 풍경</div> <!-- fw = font-weight -->
                <div class="mb-3" :class="className1">아름다운 풍경</div> <!-- mr-3과 className이 더해짐 -->
                <div class="mb-3" :class="[className1, className2]">아름다운 풍경</div> <!-- 배열식으로 사용 가능 -->
                <div class="mb-3" :class="{'fw-bold':true, 'text-info':true}">아름다운 풍경</div> <!-- 자바스크립트의 객체 표시 {키:값} // true, false 값은 우리가 변수를 넣어 제어 가능하다.-->
                <div class="mr-3" :class="{'fw-bold':isBold, 'text-danger':isRed}">아름다운 풍경</div>
            </div>
            <hr>

            <div class="mb-4">
                <h5>:style="변수 | 객체 | 배열"</h5>
                <div style="margin-bottom: 10px; font-weight: bold;">아름다운 풍경</div>
                <div :style="[style1, style2]">아름다운 풍경</div>
                <div style="margin-bottom: 10px" :style="{'font-weight': fontWeight, 'color':textColor}">아름다운 풍경</div>
            </div>
            <hr>

            <button class="btn btn-info btn-sm" @click="changeData">상태 변수값 변경</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

let vueHome = ref("https://vuejs.org");
let appHome = ref("/");

let imgName = ref("photo1.jpg");

let className1 = ref("fw-bold");
let className2 = ref("text-danger");
let isBold = ref(false);
let isRed = ref(true);

let style1 = ref("margin-bottom:10px");
let style2 = ref("font-weight: bold; color:red");

// let style3 = ref("font-weight: bold;");
// let style4 = ref("color: green;");

let fontWeight = ref('bold');
let textColor = ref('green');

let toggle = ref(true);
function changeData() {
    if(toggle.value) {
        imgName.value = "photo2.jpg";
        className1.value = "text-warning";
        fontWeight.value = "";
        textColor.value = "#0000ff";
    } else {
        imgName.value = "photo1.jpg";
        className1.value = "text-danger";
        fontWeight.value = "bold";
        textColor.value = "#00ff00";
    }
    toggle.value = !toggle.value;
}

</script>

<style scoped></style>