<template>
    <div class="card">
        <div class="card-header">ChildB</div>
        <div class="card-body">
            <!-- 부모쪽에서 changeData를 만들어 값이 바뀌는지 확인
                결과 : 부모의 상태가 변경이 되면 다시 자식쪽으로 데이터가
                        전달이 된다. -->
            <p>productNo = {{ productNo }}</p>
            <p>productKind = {{ productKind }}</p>
            <p>product = {{ product.no }} / {{ product.kind }}</p>
            <p>no = {{ no }}</p>
            <p>kind = {{ kind }}</p>
        </div>
    </div>
</template>

<script setup>
const prop = defineProps(["productNo", "productKind", "product", "no", "kind"]);

console.group("ChildB")
console.log("productNo: " + prop.productNo + " " + typeof (prop.productNo));
console.log("productKind: " + prop.productKind);
console.log("product: " + prop.product + " " + JSON.stringify(prop.product));
console.log("no: " + prop.no + " " + typeof (prop.no));
console.log("kind: " + prop.kind);
console.groupEnd();

</script>


<style scoped></style>
