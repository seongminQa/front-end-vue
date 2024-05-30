<template>
    <div class="card">
        <div class="card-header">ChildA</div>
        <div class="card-body" :class="prop.prop1"> <!-- 속성의 값으로도 사용할 수 있다. -->
            <!-- 표현식 -->
            <p>prop1 = {{ prop.prop1 }} or {{ prop1 }}</p>
            <p>prop2 = {{ prop.prop2 }} or {{ prop2 }}</p>
            <p>productNo = {{ prop.productNo }} or {{ productNo }}</p>
            <p>product-Kind = {{ prop.productKind }} or {{ productKind }}</p>
            <p>productPrice = {{ prop.productPrice }} or {{ productPrice }}</p>
            <p>objectProp.name / objectProp.age = {{ prop.objectProp.name }} or {{ objectProp.age }}</p>
            <p>arrayProp = {{ prop.arrayProp[0] }} or {{ arrayProp[1] }}</p>
            <p>funProp = {{ prop.funProp() }} or {{ funProp() }}</p> <!-- 함수는 호출 형식으로 -->
        </div>
    </div>
</template>

<script setup>

const prop = defineProps([
    "prop1",
    "prop2",
    "productNo",
    "productKind", // product-Kind로 하면 안된다. 나중에 변수로 활용할 것이기 때문에.
    "productPrice",
    "objectProp",
    "arrayProp",
    "funProp"
]);

// 속성값 읽기
console.group("ChildA");
console.log("prop1: " + prop.prop1);
console.log("prop2: " + prop.prop2);
console.log("productNo: " + prop.productNo + " " + typeof (prop.productNo));
console.log("productKind: " + prop.productKind);
console.log("productPrice: " + prop.productPrice + " " + typeof (prop.productPrice));
console.log("objectProp: " + prop.objectProp + " " + typeof (prop.objectProp));
console.log("objectProp: " + prop.objectProp.name + " " + prop.objectProp.age);
console.log("arrayProp: " + prop.arrayProp + " " + typeof (prop.arrayProp));
console.log("arrayProp: " + prop.arrayProp[0] + " " + prop.arrayProp[1]);
console.log("funProp: " + prop.funProp + " " + typeof (prop.funProp));
console.log("funProp: " + prop.funProp());
console.groupEnd();
</script>

<style scoped></style>
