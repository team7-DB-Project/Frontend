<template>

  <head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet">
  </head>
  <div class="body">
    <div class="main-container">
      <!-- 기능 버튼들 -->
      <div class="feature-buttons">
        <button v-for="url in urlList" :key="url.path" @click="navigate(url.path)" class="feature-button">
          <i class="fas fa-star"></i> {{ url.koname }}
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
        { path: '/review/addreview', name: 'addreview', koname: '리뷰 추가' },
        { path: '/review/getreview', name: 'getreview', koname: '모든 리뷰 조회' },
        { path: '/review/getsinglervid', name: 'getsinglervid', koname: '리뷰 ID별 조회' },
        { path: '/review/getsinglervst', name: 'getsinglervst', koname: '점포 ID별 조회' },
        { path: '/review/reviewbymonth', name: 'reviewbymonth', koname: '개월 달위 조회' },
        { path: '/review/reviewbydate', name: 'reviewbydate', koname: '기간 내 조회' },
        { path: '/review/rating', name: 'rating', koname: '평점 별 조회' },
        { path: '/review/countbyrating', name: 'countbyrating', koname: '종합 별점 현황' },
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
  margin: 5%;
  padding: 5%;
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
