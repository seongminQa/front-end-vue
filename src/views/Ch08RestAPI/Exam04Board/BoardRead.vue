<template>
    <div class="card">
        <div class="card-header">BoardRead</div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-6">
                    <p>bno: {{ board.bno }}</p>
                    <p>btitle: {{ board.btitle }}</p>
                    <p>bcontent: {{ board.bcontent }}</p>
                    <p>bwriter: {{ board.bwriter }}</p>
                    <p>bdate: {{ board.bdate }}</p>
                    <p>bhitcount: {{ board.bhitcount }}</p>
                </div>
                <div class="col-md-6">
                    <!-- 첨부 파일 다운로드 -->
                    <!-- 방법 1 (이미지가 하나일 때를 가정 )-->
                    <!-- <img v-if="battach != null" :src="battach" width="300"> -->

                    <!-- 방법 2 (이미지가 여러개일 경우를 가정) -->
                    <!-- <img v-if="battach != null" :src="`http://localhost/board/battach/${bno}`" width="300"> -->
                    <!-- axios.defaults.baseURL을 이용하여 경로가 바뀌었을 때 하나만 수정할 수 있도록 변수로 설정 -->
                    <!-- <img v-if="battach != null" :src="`${axios.defaults.baseURL}/board/battach/${board.bno}`"
                        width="300"> -->
                    <img v-if="battach != null"
                        :src="`${axios.defaults.baseURL}/board/battach/${board.bno}?accessToken=${$store.state.accessToken}`"
                        width="300">
                </div>
            </div>
            <div class="mt-3">
                <button class="btn btn-info btn-sm me-2" @click="goBoardList">목록</button>
                <span v-if="$store.state.userId === board.bwriter">
                    <button class="btn btn-warning btn-sm me-2" @click="goBoardUpdate">수정</button>
                    <button class="btn btn-danger btn-sm" @click="handleRemove">삭제</button>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import boardAPI from '@/apis/boardAPI';
import { useStore } from 'vuex';
import axios from 'axios';

// 상태 정의
const board = ref({});

// Query String으로 전달된 bno 얻기
const route = useRoute();
const bno = route.query.bno;
const pageNo = route.query.pageNo;

// 첨부 파일 다운로드 구현하기
const battach = ref(null);

// 해당 bno의 게시물 얻는 함수 정의
async function getBoard(argBno) {
    try {
        const response = await boardAPI.boardRead(argBno); // promise를 리턴
        board.value = response.data;  // 해당 게시물의 첨부파일은 따로 가져오는 것이 좋다.

        // 게시물 첨부 파일 유무와 관련하여
        if (board.value.battachoname != null) {
            getAttach(argBno);  // 밑의 함수. 두 함수는 비동기 함수이며 각각 비동기적으로 작업을 수행하게 된다
        }
    } catch (error) {
        console.log(error)
    }
}

// 첨부 파일 화면에 다운로드
async function getAttach(argBno) {
    try {
        const response = await boardAPI.boardAttachDownload(argBno); // promise를 리턴
        const blob = response.data;
        // battach.value = blob; // 이렇게 하면 img태그에서 blob을 바로 처리하지 못한다.
        battach.value = URL.createObjectURL(blob);
        // 이렇게 변환하여 사용해야 한다. (참고 : https://developer.mozilla.org/ko/docs/Web/API/URL/createObjectURL_static )
    } catch (error) {
        console.log(error)
    }
}

// async function getAttach(argBno) {
//     try {
//         const response = await boardAPI.boardAttachDownload(argBno);
//         const blob = response.data;
//         battach.value = URL.createObjectURL(blob);
//     } catch (error) {
//         console.log(error);
//     }
// }



// bno에 해당하는 게시물 가져오기
getBoard(bno);

// store 객체 얻기
const store = useStore();

const router = useRouter();

if (store.state.userId !== '') {
    // bno에 해당하는 게시물 가져오기
    getBoard(bno);
} else {
    router.push("/Ch08RestAPI/Exam03Login");
}

function goBoardList() {
    router.push(`/Ch08RestAPI/Exam04Board/BoardList?pageNo=${pageNo}`);
}

function goBoardUpdate() {
    // router.push(`/Ch08RestAPI/Exam04Board/BoardUpdate?bno=${board.value.bno}`);
    router.push(`/Ch08RestAPI/Exam04Board/BoardUpdate?bno=${bno}&pageNo=${pageNo}`);
}

async function handleRemove() {
    try {
        await boardAPI.boardDelete(bno); // promise를 리턴
        router.back();  // 이전에 있던 라우트링크로 돌아간다 (게시물 목록)
    } catch (error) {
        console.log(error)
        // 다이얼로그 띄워주고 안된다고 알려줌

    }
}

</script>

<style scoped></style>
