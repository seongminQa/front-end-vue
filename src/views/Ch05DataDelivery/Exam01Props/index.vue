<template>
    <div class="card">
        <div class="card-header">Exam01Props</div>
        <div class="card-body">
            <!-- 각 값을 '문자열'로 전달할 것인지, '숫자'로 전달할 것인지 콜론(:)으로 구별 
                현재 부모 컴포넌트. -->
            <ChildA prop1="value1"
                    prop2="value2"
                    productNo="1"
                    product-Kind="bag"
                    :productPrice="1000"
                    :objectProp="{name: '홍길동', age:25}"
                    :arrayProp="['블랙', '레드']"
                    :funProp="() => {return '리턴값'}"/>
            <hr>
            <ChildB v-bind:productNo="product.no"
                    :productKind="product.kind"
                    :product="product"
                    v-bind="product"/>
            <!-- 부모쪽에서 상태를 변경하면 자식쪽에서 값이 변경이 되는지 확인하기 -->
            <button class="btn btn-info btn-sm mt-3" @click="changeData">상태 변경</button>
            <hr>
            <ChildC propA="문자열"
                    :propB="5"
                    propC="뷰"
                    :propD="`프론트엔드`"
                    :propF="{message:'Thanks'}"
                    :propG="['white', 'brown']"
                    :propH="()=>'Parant값'"
                    :propI="12"/>
        </div>
    </div>
</template>

<script setup>
import ChildA from "./ChildA.vue"
import ChildB from "./ChildB.vue"
import ChildC from "./ChildC.vue"

import { ref } from 'vue';

const product = ref({
    no: 1,
    kind: "bag"
});

function changeData() {
    product.value.no += 1;
    product.value.kind += "g";
    console.log("changeData 실행");
}

</script>

<style scoped></style>
