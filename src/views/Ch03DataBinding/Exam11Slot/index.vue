<template>
    <div class="card">
        <div class="card-header">Exam11Slot</div>
        <div class="card-body">
            <button class="btn btn-info btn-sm me-3" @click="showDialogA">기본 다이얼로그</button>
            <button class="btn btn-info btn-sm me-3" @click="showDialogB">알림 다이얼로그</button>
            <button class="btn btn-info btn-sm" @click="showDialogC">로그인 다이얼로그</button>
        </div>

        <DialogA id="dialogA" />
        <!-- @close란 이벤트는 원래 없다.
            Fallthrough를 이용하여 사용 가능하게끔 한 것이다. -->
        <DialogB id="dialogB" @close="hideDialogB" />
        <DialogC id="dialogC" @close="hideDialogC" />

    </div>
</template>

<script setup>
import { onMounted } from "vue"; // 라이프사이클과 관련. 나중에 배운다.
import DialogA from "./DialogA.vue";
import DialogB from "./DialogB.vue";
import DialogC from "./DialogC.vue";
import { Modal } from "bootstrap";

let modalDialogA = null; // ?
let modalDialogB = null;
let modalDialogC = null;

// 컴포넌트가 생성되고, DOM에 부착될 때 자동으로 실행되는 콜백함수
onMounted(() => {
    modalDialogA = new Modal(document.querySelector("#dialogA"));
    modalDialogB = new Modal(document.querySelector("#dialogB"));
    modalDialogC = new Modal(document.querySelector("#dialogC"));
});

function showDialogA() {
    modalDialogA.show();
}

function showDialogB() {
    modalDialogB.show();
}

function showDialogC() {
    modalDialogC.show();
}

function hideDialogB() {
    modalDialogB.hide();
}

function hideDialogC() {
    modalDialogC.hide();
}
</script>

<style scoped></style>
