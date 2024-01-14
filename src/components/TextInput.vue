<template>
  <div>
    <label for="inputText">文字を入力して下さい〜</label>
    <input type="text" id="inputText" v-model="inputData">
    <p>入力された文字：{{ inputData }}</p>
  </div>
</template>

<!-- Option API -->
<!-- <script>
export default {
  data() {
    return {
      inputData:'',
    };
  },
};
</script> -->

<!-- Composition API NEW -->
<script setup>
import { ref } from 'vue';

const inputData = ref('');
</script>

<style>
</style>