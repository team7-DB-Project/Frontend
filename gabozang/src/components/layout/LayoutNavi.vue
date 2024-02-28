<template>
  <nav>
    <router-link to="/">가보장 관리시스템</router-link> |
    <router-link to="/example/InputForm">Vue 예제</router-link> |<!-- vue 예제 추가 -->
    <router-link to="/about">About</router-link>
  </nav>
</template>

<style>
nav {
  padding: 30px;
  background-color: #DFD6BF;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-active {
  color: #42b983;
}

</style>
