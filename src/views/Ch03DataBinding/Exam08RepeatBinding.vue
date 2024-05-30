<template>
    <div class="card">
        <div class="card-header">Exam08RepeatBinding</div>
        <div class="card-body">
            <div>
                <h6>[범위 반복]</h6>
                <span v-for="n in 3" :key="n" class="me-2">
                    <!-- 빽틱(`)이 들어가게 되면 코드이다. -->
                    <img :src="`/images/photos/photo${n}.jpg`" width="150" height="150" />
                </span>
            </div>
            <hr>

            <div class="mt-5">
                <h6>[배열항목 반복]</h6>
                <span v-for="(item, index) in photos" :key="index" class="me-2">
                    <!-- 빽틱(`)이 들어가게 되면 코드이다. -->
                    <img :src="`/images/photos/${item}`" width="150" height="150" />
                </span>
            </div>
            <hr>

            <div class="mt-5">
                <h6>[배열항목 반복]</h6>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Writer</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- 태그 안 내용에 값을 나타내려면 표현식 {{  }} 을 사용 -->
                        <tr v-for="item in boards" :key="item.bno">
                            <td>{{ item.bno }}</td>
                            <td>{{ item.btitle }}</td>
                            <td>{{ item.bwriter }}</td>
                            <td>{{ item.bdate }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr>

            <div class="mt-5">
                <!-- 이렇게 사용하는 경우는 드물다.. -->
                <h6>[객체 속성 반복]</h6>
                <div v-for="(value, name, index) in board" :key="index">
                    <p>{{ index }}. {{ name }}: {{ value }}</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

// 배열
const photos = ref(["photo1.jpg", "photo2.jpg", "photo3.jpg"]);

// 객체를 담은 배열
// 실제로 백엔드 쪽에서 이렇게 배열로 받고 컴포넌트에 활용해야 할 것.
const boards = ref([
    { bno: 1, btitle: "제목1", bwriter: "글쓴이1", bdate: "2021-08-07" },
    { bno: 2, btitle: "제목2", bwriter: "글쓴이2", bdate: "2021-08-08" },
    { bno: 3, btitle: "제목3", bwriter: "글쓴이3", bdate: "2021-08-09" }
]);

// 하나의 객체
const board = ref({
    bno: 4,
    btitle: "제목4",
    bcontent: "내용4",
    bwriter: "글쓴이4",
    bdate: "2021-08-10"
});

</script>

<style scoped></style>