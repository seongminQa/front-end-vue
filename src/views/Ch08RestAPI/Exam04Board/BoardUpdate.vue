<template>
    <div class="card">
        <div class="card-header">BoardUpdate</div>
        <div class="card-body">
            <form @submit.prevent="handleSubmit">
                <div class="form-group row">
                    <label for="btitle" class="col-sm-2 col-form-label">제목</label>
                    <div class="col-sm-10">
                        <input id="btitle" type="text" class="form-control" v-model="board.btitle" />
                    </div>
                </div>
                <div class="form-group row mt-3">
                    <label for="bcontent" class="col-sm-2 col-form-label">내용</label>
                    <div class="col-sm-10">
                        <textarea id="bcontent" type="text" class="form-control" v-model="board.bcontent"></textarea>
                    </div>
                </div>
                <div class="form-group row mt-3">
                    <label for="battach" class="col-sm-2 col-form-label">첨부그림</label>
                    <div v-if="board.battachoname != null">
                        <img width="300"
                            :src="`${axios.defaults.baseURL}/board/battach/${board.bno}?accessToken=${$store.state.accessToken}`" />
                    </div>
                    <div class="col-sm-10 mt-2">
                        <input id="battach" type="file" class="form-control-file" ref="battach" />
                    </div>
                </div>
                <div class="form-group row mt-3">
                    <div class="col-sm-12 d-flex justify-content-center">
                        <input type="submit" class="btn btn-info btn-sm me-2" value="수정" />
                        <input type="button" class="btn btn-info btn-sm" value="취소" @click="handleCancel" />
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import boardAPI from '@/apis/boardAPI';

// board를 상태로 만들기 (양방향 바인딩을 위해)
const board = ref({});  // 객체에 대한 상태를 정의할 때, 1단계 속성을 거쳐 2단계 속성을 이용할 때 상태 정의를 다르게 해주어야 한다.
const battach = ref(null);

// Query String으로 전달된 bno 얻기
const route = useRoute();
const bno = route.query.bno;
const pageNo = route.query.pageNo;

// 해당 bno의 게시물 얻는 함수 정의
async function getBoard(argBno) {
    try {
        const response = await boardAPI.boardRead(argBno); // promise를 리턴
        board.value = response.data;  // 해당 게시물의 첨부파일은 따로 가져오는 것이 좋다.
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

// bno에 해당하는 게시물 가져오기
getBoard(bno);

// router 객체 얻기
const router = useRouter();

// 수정 버튼을 클릭했을 때 실행하는 함수
async function handleSubmit() {
    // multipart/form-data 객체 생성
    const formData = new FormData();
    // 문자 파트 넣기
    formData.append("bno", board.value.bno);
    formData.append("btitle", board.value.btitle);
    formData.append("bcontent", board.value.bcontent);
    // 파일 파트 넣기
    const elBattach = battach.value; // element 객체 얻기
    if (elBattach.files.length != 0) {  // 해당 input태그에 'multiple'이라는 속성을 넣을 수 있다. 따라서 files라고 적어줘야함
        formData.append("battach", elBattach.files[0]);
    }

    // 게시물 수정 요청하기 -- boardAPI import하고나서.
    try {
        const response = await boardAPI.boardUpdate(formData); // 게시물 등록하기
        router.push(`/Ch08RestAPI/Exam04Board/BoardList?pageNo=${pageNo}`);
    } catch (error) {
        console.log(error);
    }
}


// 취소 버튼을 클릭했을 때 실행하는 함수
function handleCancel() {
    router.back();
}
</script>

<style scoped></style>
