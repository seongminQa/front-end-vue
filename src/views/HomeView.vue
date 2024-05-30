<template>
  <div class="card">
    <div class="card-header">HomeView</div>
    <div class="card-body">
      <div class="home">
        <!-- <button class="btn btn-outline-info btn-sm">버튼</button> -->
        <img alt="Vue logo" src="../assets/logo.png">
         <HelloWorld msg="Welcome to Your Vue.js App"/> <!-- Helloworld는 컴포넌트 UI -->
      </div>
    </div>
  </div>

</template>

<script setup>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue' // @는 src라고 보면된다.

var name;

</script>

<style scoped>
.home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
