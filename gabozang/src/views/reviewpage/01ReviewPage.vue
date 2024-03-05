<template>

  <head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet">
  </head>
  <div class="body">
    <div class="main-container">
      <!-- 기능 버튼들 -->
      <div class="feature-buttons">
        <button v-for="url in urlList" :key="url.path" @click="navigate(url.path)" class="feature-button">
          <i class="fas fa-star"></i> {{ url.name }}
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
  background: linear-gradient(to right, #bd7f4c, #CFBDAE);
  border: none;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.feature-button:hover {
  transform: scale(1.05);
}

.feature-button i {
  margin-right: 5px;
}
</style>
