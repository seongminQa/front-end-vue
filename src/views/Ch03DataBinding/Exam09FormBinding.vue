<template>
    <div class="card">
        <div class="card-header">Exam09FormBinding</div>
        <div class="card-body">
            <!-- <form> 프론트엔드에서 form이 눌렸다고 해서 다른 서버로(요청반응) 가면 안된다. -->
            <!-- <form v-on:submit.prevent="handleSubmit"> -->
            <form @submit.prevent="handleSubmit">
                <div class="input-group mb-2">
                    <span class="input-group-text">상품</span>
                    <input type="text" class="form-control" v-model="product.name">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">회사</span>
                    <input type="text" class="form-control" v-model="product.company">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">가격</span>
                    <input type="number" class="form-control" v-model="product.price">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">설명</span>
                    <input type="text" class="form-control" v-model="product.info">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">국가</span>
                    <select class="form-control" v-model="product.madein">
                        <option value="한국">한국</option>
                        <option value="미국">미국</option>
                        <option value="독일">독일</option>
                    </select>
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">색상</span>
                    <div class="form-control">
                        <div class="form-check form-check-inline">
                            <!-- 체크박스는 하나의 그룹(name속성으로 이용하여)안에서 다중값을 선택할 수 있다.
                                product.colors의 값은 배열값을 가지게 된
                                 -->
                            <input id="checkboxBlack" class="form-check-input" type="checkbox" value="black"
                                v-model="product.colors">
                            <label class="form-check-label" for="chekboxBlack">블랙</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input id="checkboxRed" class="form-check-input" type="checkbox" value="red"
                                v-model="product.colors">
                            <label class="form-check-label" for="chekboxRed">레드</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input id="checkboxYellow" class="form-check-input" type="checkbox" value="yellow"
                                v-model="product.colors">
                            <label class="form-check-label" for="chekboxYellow">옐로우</label>
                        </div>
                    </div>
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">판매1</span>
                    <div class="form-control">
                        <div class="form-check form-check-inline">
                            <!-- 체크박스가 하나인 경우 product.sale1은 배열이 아니라
                                 하나의 값이다. 하나밖에 없기 때문에 ture / false의 값을 가진다. -->
                            <input class="form-check-input" type="checkbox" id="chekboxSale1" value="true"
                                v-model="product.sale1">
                            <label class="form-check-label" for="chekboxSale1">판매1</label>
                        </div>
                    </div>
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">판매2</span>
                    <div class="form-control">
                        <div class="form-check form-check-inline">
                            <!-- 위의 코드와 다른 점 true-value / false-value 
                                이 경우에 값을 yes로 주어야 체크가 됨-->
                            <input class="form-check-input" type="checkbox" id="chekboxSale2" v-model="product.sale2"
                                true-value="yes" false-value="no">
                            <label class="form-check-label" for="chekboxSale2">판매2</label>
                        </div>
                    </div>
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">성별</span>
                    <div class="form-control">
                        <div class="form-check form-check-inline">
                            <!-- 이번엔 radio 버튼 -->
                            <input class="form-check-input" type="radio" id="chekboxSex1" value="man"
                                v-model="product.sex">
                            <label class="form-check-label" for="chekboxSex1">남성</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="chekboxSex2" value="woman"
                                v-model="product.sex">
                            <label class="form-check-label" for="chekboxSex2">여성</label>
                        </div>
                    </div>
                </div>

                <div>
                    <input type="submit" value="등록" class="btn btn-danger btn-sm me-2" />
                    <!-- type="reset"은 처음 값으로 돌아가게 만듦 
                        Vue에서 리셋 버튼은 양식을 초기화하지 않음 -->
                    <!-- 체크 박스가 디폴트 값으로 바인딩 되지 않음 -->
                    <!-- <input type="reset" value="재작성" class="btn btn-info btn-sm" /> -->
                    <!-- 폼 태그 안의 버튼은 기본적으로 submit효과를 가지기 때문에
                        type="button"을 명시해주어야 한다. -->
                    <button type="button" class="btn btn-info btn-sm" @click="handleReset">재작성</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// 디폴트
let product = ref({
    name: "셔츠",
    company: "지오다노",
    price: "20000",
    info: "통풍이 잘되어 시원해요",
    madein: "미국",
    colors: ["black", "yellow"],
    //sale1: "black" // 체크가 되지 않는다.
    sale1: true,
    // sale2: true
    sale2: "yes",
    sex: "woman"
});

function handleSubmit() {
    console.log(product.value);
    console.log(JSON.stringify(product.value)); // 객체를 문자열로 바꿈
    console.log(JSON.parse(JSON.stringify(product.value))); // 문자열을 자바스크립트 객체로 바꿈

    // 여기에 유효성 검사 ...

    // 여기에 서버 통신 코드 추가 ...

}

function handleReset() {
    console.log("handleReset 실행")
    // product = ref({
    //     name: "셔츠",
    //     company: "지오다노",
    //     price: "20000",
    //     info: "통풍이 잘되어 시원해요",
    //     madein: "미국"
    // });

    // 상태를 바꾸면 console에 나오는 값은 변한 값이 나오지만 사용자 UI에서는 재작성 버튼을 눌렀을 때 바뀐 값이 나오지 않는다. 이전 주소를 참조하고 있기 때문이다.
    // product의 상태를 바꾸는 것이 아닌 value를 바꾸어보자. (객체 통째로 value를 바꿈)
    product.value = {
        name: "셔츠",
        company: "지오다노",
        price: "20000",
        info: "통풍이 잘되어 시원해요",
        madein: "미국"
    };

    // 객체 안의 하나의 인자 값을 바꿈
    product.value.name = "셔츠";
    product.value.company = "지오다노";
}
</script>

<style scoped></style>