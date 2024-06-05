// REST API와 통신하는 모듈

import axios from "axios";
import qs from "qs";

// 게시물 목록 가져오기
function getBoardList(pageNo = 1) {
    // GET : http://localhost/board/list?pageNo=1
    return axios.get("/board/list", {params: {pageNo: pageNo}});  // Promise를 리턴

    // GET : http://localhost/board/list?pno=1 일 경우!!
    // return axios.get("/board/list", {params: {pno: pageNo}});
}

// 게시물 쓰기
function boardWrite(formData) {
    // multipart/form-data로 데이터 전송
    return axios.post("/board/create", formData);
}

// 게시물 읽기
function boardRead(bno) {
    // PathVariable로 데이터 전송
    return axios.get("/board/read/" + bno);
}

// 첨부 다운로드
function boardAttachDownload(bno) {
    // PathVariable로 데이터 전송
    return axios.get("/board/battach/" + bno, {responseType:"blob"}); // 다운로드 파일이 바이너리 데이터이다.
}
// 다른 컴포넌트에서 함수를 사용하면 반환되는 값은 response --> 설정했었는지 확인해보자.

// 게시물 삭제
function boardDelete(bno){
    // PathVariable로 데이터 전송
    return axios.delete("/board/delete/" + bno);
}

// 게시물 업데이트
function boardUpdate(formData) {
    // multipart/form-data로 데이터 전송
    return axios.put("/board/update", formData);
}

export default {
    getBoardList,
    boardWrite,
    boardRead,
    boardAttachDownload,
    boardDelete,
    boardUpdate
};
