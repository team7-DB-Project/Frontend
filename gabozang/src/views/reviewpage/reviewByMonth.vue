<template>
  <div class="review-search">
    <h2>단위 개월 내 리뷰 검색</h2>
    <div class="search-box">
      <!-- 숫자로 개월 수 입력 받음 -->
      <input type="number" v-model.number="searchMonth" placeholder="개월 수를 입력해주세요. 예) 4"
        @keyup.enter="fetchReviewsByMonth">
      <button @click="fetchReviewsByMonth">검색</button>
    </div>
    <div v-for="review in reviews" :key="review.reviewId" class="review-card">
      <div class="review-header">
        <span class="review-id">리뷰 아이디 #{{ review.reviewId }}</span>
        <span class="rating">
          <i v-for="star in 5" :key="star" class="star"
            :class="{ 'fas fa-star': star <= review.rating, 'far fa-star': star > review.rating }"></i>
        </span>
      </div>
      <div class="review-body">
        <p class="content">{{ review.content }}</p>
        <div class="image-container" v-if="review.imageUrls.length">
          <h4>사진:</h4>
          <img v-for="imageUrl in review.imageUrls" :src="imageUrl" :alt="`Review Image`" :key="imageUrl"
            class="review-image" />
        </div>
      </div>
      <div class="review-footer">
        <p><strong>점포 ID:</strong> {{ review.storeId }}</p>
        <p><strong>작성 날짜:</strong> {{ formatDate(review.createdAt) }}</p>
        <p><strong>수정 날짜:</strong> {{ formatDate(review.updatedAt) }}</p>
      </div>
    </div>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchMonth: 0, // 숫자로 초기화
      reviews: [],
      errorMessage: '',
    };
  },
  methods: {
    async fetchReviewsByMonth() {
      this.reviews = [];
      this.errorMessage = '';
      // 입력 검증: 숫자이며 1 이상인지 확인
      if (this.searchMonth <= 0) {
        this.errorMessage = '올바른 개월 수를 입력해주세요. 예) 4';
        return;
      }
      try {
        // 입력값을 문자열로 변환하여 API 요청
        const url = `http://15.164.225.110:8080/review/reviewByMonth/${this.searchMonth.toString()}`;
        const response = await axios.get(url);
        this.reviews = Array.isArray(response.data) ? response.data : [response.data];
      } catch (error) {
        this.errorMessage = '리뷰를 찾을 수 없습니다. 올바른 개월 수를 입력했는지 확인해주세요. 예) 3';
        console.error(error);
      }
    },
    formatDate(date) {
      return new Date(date).toLocaleString('ko-KR');
    },
  },
}
</script>


<style scoped>
.review-search {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.search-box {
  display: flex;
  margin-bottom: 20px;
}

.search-box input {
  flex-grow: 1;
  margin-right: 8px;
  padding: 8px;
}

.search-box button {
  padding: 8px 16px;
  background-color: #a99f86;
  border: none;
  color: white;
  cursor: pointer;
}

.search-box button:hover {
  background-color: #DFD6BF;
}

.review-card {
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

.review-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.rating {
  background: #DFD6BF;
  color: #fff;
  padding: 3px 8px;
  border-radius: 5px;
  font-weight: bold;
}

.review-body .content {
  margin-bottom: 20px;
}

.image-container img {
  width: auto;
  max-height: 120px;
  margin-top: 10px;
}

.review-footer {
  border-top: 1px solid #eee;
  padding-top: 10px;
}

.error-message {
  color: #a94442;
  background-color: #f2dede;
  padding: 10px;
  margin-top: 20px;
  border-radius: 4px;
}
</style>
