<template>
  <router-view></router-view>
  <h1><router-link to="/main">Go to main</router-link></h1>
  <router-link to="/example/InputForm">Vue 예제</router-link> |<!-- vue 예제 추가 -->
  <router-link to="/about">About</router-link>
</template>

<script>
import './assets/styles/global.css';

export default {
};
</script>


