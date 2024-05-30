<template>
    <div class="card">
        <div class="card-header">Exam02DomElementRef</div>
        <div class="card-body">
            <div>
                <h6>[DOM 요소 참조]</h6>
                <p>data : {{ data }}</p>
                <div class="d-flex">
                    <!-- v-model을 사용하여(양방향) 값을 변경하는 것이 아닌
                        input의 value값을 이용하여 data의 값을 변경해보자!! -->
                    <input id="input1" ref="input1Ref" type="text" style="line-height: 25px;" />
                    <button class="btn btn-info btn-sm ms-3" @click="setData">입력 양식값 변경</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 상태 생성
const data = ref("summer");
const input1Ref = ref(null);

// setData 함수는 Mounted된 이후에 실행이 되는 것일까, Mounted되기 전에 실행이 된 상태일까??
// setData는 마운트되고 난 후 UI를 구성하고, 사용자가 값을 입력할 때 일어나는 것이기 때문에
// 마운트 되고 난 후에 실행되는 것이라 해석할 수 있다.
function setData() {
    // 방법 1
    // const input1 = document.querySelector('#input1');
    // data.value = input1.value;

    // 방법 2
    // input1Ref은 상태를 나타낸다. input1Ref.value는 상태의 값을 나타내고
    // input1Ref.value.value는 상태의 값의 value속성 값을 나타낸다. (???)
    data.value = input1Ref.value.value;
}

onMounted(() => {

});

</script>

<style scoped></style>
