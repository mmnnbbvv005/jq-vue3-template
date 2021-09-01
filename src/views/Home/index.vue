<!--
 * @Author: your name
 * @Date: 2021-08-27 14:27:05
 * @LastEditTime: 2021-09-01 10:07:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-project\src\views\Home\index.vue
-->
<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const num = ref(0);
const home = reactive({ title: '这里是Home' });
const goMine = () => {
  router.push('/Mine');
};
</script>

<template>
  <div class="home">
    {{home.title}}
    {{num}}
    <button class="btn" @click="goMine">去个人中心</button>
  </div>
</template>

<style lang="less" scoped>
.btn{
  background: rgb(134, 190, 236);
  width: 120px;
  height: 30px;
  border-radius: 8px;
}
</style>
