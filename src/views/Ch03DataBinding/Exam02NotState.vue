<template>
    <div class="card">
        <div class="card-header">Exam02NotState</div>
        <div class="card-body">
            <p>번호: {{ no }}</p>
            <p>이름: {{ name + "-" + company }}</p>
            <p>설명: {{ detail.info }}</p>
            <p>상태: {{ detail.sale ? "판매" : "품절" }}</p>
            <p>가격(변수): {{ price }}</p>
            <!-- 메소드를 호출하여 리턴값을 보이기 -->
            <p>가격(함수): {{ getPrice() }}</p>
            <hr>
            <button class="btn btn-info btn-sm" 
                @click="changeData">일반 변수 값 변경</button>
        </div>
    </div>
</template>

<script setup>
    let no = 1;
    let name = "미니백";
    let company = "클레인";

    let detail = {
        info: "시그너츠 Ceycle Lock 마그네틱 클로저가 특징입니다.",
        sale: false
    };

    let price = 300000;
    function getPrice() {
        return price;
    }

    function changeData() {
        no = 2;
        name = "백팩";
        
    }
</script>

<style scoped>
</style>
