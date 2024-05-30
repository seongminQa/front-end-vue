<template>
    <div class="card">
        <div class="card-header">Exam02Watch</div>
        <div class="card-body">
            <!-- 교수님 코드 -->
            <div class="row mb-2">
                <label class="col-sm-2 col-form-label">UserId</label>
                <div class="col-sm-10">
                    <!-- v-model만으로 양방향 데이터 바인딩 -->
                    <input type="text" class="form-control" v-model="userId">
                </div>
            </div>

            <div class="mb-2">
                <button class="btn btn-danger btn-sm" @click="handleProductChange">product 상태의 객체 변경</button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

// 상태 생성
let userId = ref("");

// 상태 감시
// watch(감시할 상태의 변수, (매개값1, 매개값2) => 화살표 함수)
watch(userId, (newUserId, oldUserId) => {
    console.group("userId 변경 감시");
    console.log("newUserId: " + newUserId);
    console.log("oldUserId: " + oldUserId);
    console.groupEnd();
});

// 상태 생성 // 객체
let product = ref({
    name: "",
    company: "",
    price: 0
});

// 객체 자체가 변경될 때를 감시
/*watch(product, (newProduct, oldProduct) => {
    console.group("product 변경 감시");
    console.log("newProduct: " + JSON.stringify(newProduct)); // 순수 자바스크립트 객체가 얻어진다.
    console.log("oldProduct: " + JSON.stringify(oldProduct));
    console.groupEnd();
});*/

// 옵션 주기  -- { deep: true } --
// 객체 자체 뿐만아니라 객체 안의 속성값이 변경될 시에도 감시를 하게 된다.
/*watch(product, (newProduct, oldProduct) => {
    console.group("product 객체 자체 뿐만 아니라 속성까지도 변경 감시");
    console.log("newProduct: " + JSON.stringify(newProduct)); // 순수 자바스크립트 객체가 얻어진다.
    console.log("oldProduct: " + JSON.stringify(oldProduct));
    console.groupEnd();
}, { deep: true });*/

// 특정 속성만 변경 감시
// 내가 지정한 속성에만 관련하여 감시
// ()=> {return product.value.price} 리턴문만 있는경우
/*watch(() => product.value.price, (newPrice, oldPrice) => {
    console.group("price 속성값만 변경 감시");
    console.log("newPrice: " + newPrice); // 객체가 아니기 때문에 변수값만 넣어준다.
    console.log("oldPrice: " + oldPrice);
    console.groupEnd();
});*/

// 복수개의 상태를 감시할 경우 (헷갈리기 때문에 비추천. 그냥 따로따로 감시해주자 -- 그냥 watch 두개 쓰자..)
watch([userId, product], ([newUserId, newProduct], [oldUserId, oldProduct]) => {
    console.group("복수개의 상태를 감시할 경우 --> userId와 product객체 감시");
    console.log("newUserId: " + newUserId);
    console.log("oldUserId: " + oldUserId);
    console.log("newProduct: " + JSON.stringify(newProduct)); // 순수 자바스크립트 객체가 얻어진다.
    console.log("oldProduct: " + JSON.stringify(oldProduct));
    console.groupEnd();
}); // 여기에도 { deep: true }를 넣어 사용할 수 있다..

//////////////////////////////////////////////////// watch는 여러개를 넣어도 괜찮다.

// product 상태 변경 함수
function handleProductChange() {
    // 객체 자체가 변경
    product.value = {
        name: "제네시스G80 풀옵",
        company: "현대",
        price: 80000000
    }

    // 속성값만 변경
    product.value.price = 90000000; // 값만 변경될 경우 watch는 감시를 하지 않는다.
    // 객체 자체의 값(전체?)이 변경되어야 watch가 실행된다.(감시를 한다.)
}

</script>

<style scoped></style>
