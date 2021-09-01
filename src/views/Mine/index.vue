<!--
 * @Author: your name
 * @Date: 2021-08-27 14:27:05
 * @LastEditTime: 2021-09-01 10:10:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-project\src\views\Home\index.vue
-->
<template>
  <div class="Mine">
    Mine
    <div class="count">{{store.state.count}}</div>
    <button @click="plus">增加</button>
    <button @click="goHome">去首页</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
// 正常使用，相当于store代替了this.$store
// store.state....
console.log(store.state.count);

const router = useRouter();

function goHome() {
  router.back();
}
function plus() {
  store.commit('increment');
}
</script>
