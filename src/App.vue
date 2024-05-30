<template>
  <div class="d-flex flex-column vh-100">
    <AppHeader />
    <div class="flex-grow-1 container-fluid">
      <div class="row h-100">
        <div class="col-md-6 col-lg-4 bg-dark px-2">
          <div class=" h-100 d-flex flex-column">
            <div class="flex-grow-1 mb-3" style="height:0px; overflow-y:auto; overflow-x:hidden;">
              <AppMenu />
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-8 bg-dark px-2 ">
          <div class=" h-100 d-flex flex-column">
            <div class="flex-grow-1 overflow-auto" style="height:0px">
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'; // 상대경로 쓰기싫으면 @ 사용 // @는 src를 나타낸다.
import AppMenu from '@/components/AppMenu.vue';
</script>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #b942b3;
}
</style>
