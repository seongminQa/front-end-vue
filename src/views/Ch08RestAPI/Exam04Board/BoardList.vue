<template>
    <div class="card">
        <div class="card-header">BoardList</div>
        <div class="card-body">
            <div v-if="$store.state.userId !== ''" class="mb-3">
                <RouterLink to="/Ch08RestAPI/Exam04Board/BoardWrite" class="btn btn-success btn-sm">글쓰기</RouterLink>
            </div>

            <table class="table table-striped table-bordered">
                <thead>
                    <th class="text-center" style="width:70px">번호</th>
                    <th class="text-center">제목</th>
                    <th class="text-center" style="width:90px">글쓴이</th>
                    <th class="text-center" style="width:120px">날짜</th>
                    <th class="text-center" style="width:70px">조회수</th>
                </thead>
                <tbody>
                    <tr v-for="board in page.boards" :key="board.bno">
                        <td class="text-center">{{ board.bno }}</td>
                        <td>
                            <RouterLink :to="`/Ch08RestAPI/Exam04Board/BoardRead?bno=${board.bno}&pageNo=${pageNo}`">{{
                                board.btitle }}
                            </RouterLink>
                        </td>
                        <!-- board.mid는 DB의 저장된 컬럼명 -->
                        <td class="text-center">{{ board.bwriter }}</td>
                        <td class="text-center">{{ new Date(board.bdate).toLocaleDateString() }}</td>
                        <td class="text-center">{{ board.bhitcount }}</td>
                    </tr>

                    <tr>
                        <td colspan="5" class="text-center">
                            <button class="btn btn-outline-primary btn-sm me-1" @click="changePageNo(1)">처음</button>
                            <button v-if="page.pager.groupNo > 1" class="btn btn-outline-info btn-sm me-1"
                                @click="changePageNo(page.pager.startPageNo - 1)">이전</button>
                            <button v-for="pageNo in page.pager.pageArray" :key="pageNo"
                                :class="(page.pager.pageNo === pageNo) ? 'btn-danger' : 'btn-outline-success'"
                                class="btn btn-sm me-1" @click="changePageNo(pageNo)">
                                {{ pageNo }}
                            </button>
                            <button v-if="page.pager.groupNo < page.pager.totalGroupNo"
                                class="btn btn-outline-info btn-sm me-1"
                                @click="changePageNo(page.pager.endPageNo + 1)">다음</button>
                            <button class="btn btn-outline-info btn-sm me-1"
                                @click="changePageNo(page.pager.totalPageNo)">맨끝</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

// 상태 정의
const page = ref({
    boards: [],
    pager: {}
});

// const pageNo = ref(1);


import boardAPI from '@/apis/boardAPI';

// GET 방식으로 전달된 파라미터 값 얻기
// http://localhost/Exam04Board/BoardList?pageNo=2
// ppt 61p useRoute를 이용 --> PathVariable로 전달받기

import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const pageNo = ref(route.query.pageNo || 1);  // pageNo값이 없다면 기본값 1로 줌 // route를 이용하여 쿼리스트링 형식으로 받음

// 게시물 목록을 가져오는 메소드 정의
async function getBoardList(pageNo) {
    try {
        const response = await boardAPI.getBoardList(pageNo);  // Pomise를 리턴하기 때문에 await를 붙여줌
        page.value.boards = response.data.boards;
        page.value.pager = response.data.pager;
    } catch (error) {
        console.log(error);
    }
}

// 게시물 목록 가져오기
getBoardList(pageNo.value);
// getBoardList(pageNo.value);


// 페이저의 버튼을 클릭했을 때 해당 페이지로 이동하는 메소드 정의
const router = useRouter();

function changePageNo(argPageNo) {
    router.push(`/Ch08RestAPI/Exam04Board/BoardList?pageNo=${argPageNo}`);
    // pageNo.value = argPageNo;
}

// 요청 경로의 변경을 감시 // 이 코드로인해 페이지 버튼을 눌렀을 때 이동이 가능함..
watch(route, (newRoute, oldRoute) => {
    if (newRoute.query.pageNo) {
        getBoardList(newRoute.query.pageNo);
        pageNo.value = newRoute.query.pageNo;
    } else {
        getBoardList(1);
        pageNo.value = 1;
    }
});

// 이렇게 사용하면 페이지 이동이 되긴하지만, url의 쿼리 스트링 값이 변하지 않고,
// refresh를 실행할 경우 1페이지로 가게된다.
// watch(pageNo, (newPageNo, oldPageNo) => {

//     getBoardList(newPageNo);

// }); // 영조씨 질문..

</script>

<style scoped></style>
