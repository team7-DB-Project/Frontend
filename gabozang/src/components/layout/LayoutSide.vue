<template>
  <div class="sidebar">
    <h3>가보장<br />관리 시스템</h3>
    <div v-for="url in urlList" :key="url.path">
      <a v-if="$route.path.toUpperCase() == url.path.toUpperCase()" v-bind:href="url.path" class="active">{{
      url.name }}</a>
      <a v-if="$route.path.toUpperCase() != url.path.toUpperCase()" v-bind:href="url.path">{{ url.name }}</a>
    </div>

  </div>
  <div class="main">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      urlList: [
        { path: '/main', name: '메인' },
        { path: '/store', name: '점포' },
        { path: '/employee', name: '직원' },
        { path: '/review', name: '후기' },
        { path: '/calculate', name: '정산' }
      ]
    }
  }
}
</script>

<style>
.sidebar {
  margin: 0;
  padding: 0;
  width: 10%;
  top: 8px;
  left: 8px;
  background-color: #DFD6BF;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.sidebar a {
  display: block;
  color: black;
  text-align: center;
  padding: 15%;
  font-weight: bold;
  text-decoration: none;
  font-size: large;
}

.sidebar a.active {
  background-color: #eeeeee;
  color: black;
}

.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

.main {
  margin-left: 190px;
  /* Same as the width of the sidenav */
  padding: 10px 10px;
}
</style>