<template>
    <div class="card">
        <div class="card-header">Exam06View</div>
        <div class="card-body">
            <h5>경로 변수(파라미터 : Parameter)로 전달</h5>
            <ul>
                <li>
                    <RouterLink to="/Ch02ComponentRouting/Exam07View/freeboard/blue">Exam07View/freeboard/blue</RouterLink>
                </li>
                <li>
                    <RouterLink :to="`/Ch02ComponentRouting/Exam07View/${kind1}/${color1}`">Exam07View/${kind1}/${color1}</RouterLink>
                </li>
                <li>
                    <RouterLink :to="`/Ch02ComponentRouting/Exam07View/${kind1}/${color1}`">Exam07View/{{kind1}}/{{color1}}</RouterLink>
                </li>
                <li>
                    <button class="btn btn-outline-info btn-sm" @click="goUrlWithParams()">
                        Exam07View/freeboard/blue
                    </button>
                </li>
            </ul>

            <h5>쿼리 스트링으로 전달된 데이터</h5>
            <ul>
                <li>
                    <RouterLink to="/Ch02ComponentRouting/Exam07View?kind=notice&color=red">Exam07View?kind=notice&color=red</RouterLink>
                </li>
                <li>
                    <RouterLink :to="`/Ch02ComponentRouting/Exam07View?kind=${kind2}&color=${color2}`">Exam07View/${kind2}/${color2}</RouterLink>
                </li>
                <li>
                    <RouterLink :to="`/Ch02ComponentRouting/Exam07View?kind=${kind2}&color=${color2}`">Exam07View?kind={{kind2}}&{{color2}}</RouterLink>
                </li>
                <li>
                    <button class="btn btn-outline-info btn-sm" @click="goUrlWithQueryString()">
                        Exam07View?kind=notice&color=red
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

// var const let 상관없음
let kind1 = "freeboard";
let color1 = "blue";
let kind2 = "notice";
let color2 = "red";

function goUrlWithParams() {
    // router.push("/Ch02ComponentRouting/Exam07View/freeboard/blue");
    // router.push("/Ch02ComponentRouting/Exam07View/" + kind1 + "/" + color1);
    router.push(`/Ch02ComponentRouting/Exam07View/${kind1}/${color1}`);
}

function goUrlWithQueryString() {
    // router.push("/Ch02ComponentRouting/Exam07View?kind=notice&color=red");
    // router.push("/Ch02ComponentRouting/Exam07View?kind=" + kind2 + "&" + "color=" + color2);
    router.push(`/Ch02ComponentRouting/Exam07View?kind=${kind2}&color=${color2}`);
}
</script>

<style scoped></style>