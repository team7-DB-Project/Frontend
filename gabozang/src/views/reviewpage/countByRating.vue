<template>
  <div class="review-summary">
    <h2>리뷰 점수 분포</h2>
    <div class="summary-container">
      <!-- 별점 수준에 따라 정확한 별 개수를 반복해서 표시 -->
      <div v-for="count in countsByRating" :key="count.rating" class="rating-summary">
        <div class="rating-stars">
          <!-- 정확한 별 개수에 따라 별 표시 -->
          <span v-for="star in count.rating" :key="star" class="rating">★</span>
        </div>
        <span class="rating-count">{{ count.count }} 개</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      countsByRating: [],
    };
  },
  async created() {
    try {
      const response = await axios.get('http://15.164.225.110:8080/review/countByRating');
      this.countsByRating = response.data;
    } catch (error) {
      console.error('리뷰 점수 분포 데이터를 가져오는 중 에러가 발생했습니다.', error);
    }
  },
}
</script>

<style scoped>
.review-summary {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.summary-container {
  display: flex;
  flex-direction: column;
}

.rating-summary {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.rating-stars .rating {
  background: #DFD6BF;
  color: #fff;
  padding: 3px 8px;
  border-radius: 5px;
  font-weight: bold;
  margin-right: 4px; /* 별 사이의 간격 조정 */
}

.rating-count {
  margin-left: auto;
}
</style>
