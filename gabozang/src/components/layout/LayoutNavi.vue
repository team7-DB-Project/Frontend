<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/posts">1번 탭</router-link> | <!-- posts 추가 -->
    <router-link to="/users">2번 탭</router-link> | <!-- users 추가 --><!--
    <router-link :to="{path: '/example', params: {id: 'InputForm'}}">Vue 예제</router-link> |  -->
    <router-link to="/example/InputForm">3번 탭</router-link> |<!-- vue 예제 추가 -->
    <router-link to="/about">About</router-link>
  </nav>
</template>

<style>
nav {
  padding: 30px;
  background-color: #f1f1f1;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-active {
  color: #42b983;
}

</style>
