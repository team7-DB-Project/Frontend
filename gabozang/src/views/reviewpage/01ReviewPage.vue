<template>

  <head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet">
  </head>
  <div class="body">
    <div class="main-container">
      <!-- 기능 버튼들 -->
      <div class="feature-buttons">
        <button v-for="url in urlList" :key="url.path" @click="navigate(url.path)" class="feature-button">
          {{ url.name }}
        </button>
      </div>
      <!-- 리뷰 정보 출력 구역 -->
      <div class="review-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urlList: [
        { path: '/review/getreview', name: 'getreview' },
        { path: '/review/getsinglervid', name: 'getsinglervid' },
        { path: '/review/getsinglervst', name: 'getsinglervst' },
        { path: '/review/reviewbymonth', name: 'reviewbymonth' },
        { path: '/review/reviewbydate', name: 'reviewbydate' },
        { path: '/review/rating', name: 'rating' },
        { path: '/review/countbyrating', name: 'countbyrating' },
      ]
    }
  },
  methods: {
    navigate(path) {
      this.$router.push(path);
    }
  }
}
</script>

<style scoped>
.body {
  margin: 0;
  padding: 0;
  background-color: #EFEAE6;
  /* 배경 색 설정 */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.feature-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
}

.feature-button {
  margin: 5px;
  padding: 10px 15px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
}

.feature-button:hover {
  background-color: #e0e0e0;
}

.review-content {
  width: 100%;
  /* Additional styles for review content */
}
</style>
