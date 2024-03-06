<template>
    <div class="review-search">
        <h2>특정 기간 내 리뷰 검색</h2>
        <div class="search-box">
            <input type="text" v-model="startDate" placeholder="시작 날짜 ex)23-01-01">
            <input type="text" v-model="endDate" placeholder="종료 날짜 ex)23-10-01">
            <button @click="fetchReviewsByDate">검색</button>
        </div>
        <div v-if="reviews.length > 0">
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
        </div>
        <div v-else class="error-message">{{ errorMessage || '해당 기간에 리뷰가 없습니다.' }}</div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            startDate: '',
            endDate: '',
            reviews: [],
            errorMessage: '',
        };
    },
    methods: {
        async fetchReviewsByDate() {
            if (!this.startDate.trim() || !this.endDate.trim()) {
                this.errorMessage = '시작 날짜와 종료 날짜를 모두 입력해주세요.';
                return;
            }

            // 입력된 날짜 형식 변환 (예시는 'YY-MM-DD' 입력을 가정함)
            const formattedStartDate = `${this.formatDateToISO(this.startDate)}`;
            const formattedEndDate = `${this.formatDateToISO(this.endDate)}`;

            this.reviews = [];
            this.errorMessage = '';

            try {
                const url = `http://15.164.225.110:8080/review/reviewByDate?startDate=${formattedStartDate}&endDate=${formattedEndDate}`;
                const response = await axios.get(url);
                this.reviews = Array.isArray(response.data) ? response.data : [response.data];
            } catch (error) {
                this.errorMessage = '리뷰를 찾을 수 없습니다. 날짜 범위를 확인해주세요.';
                console.error(error);
            }
        },
        formatDateToISO(dateStr) {
            // 'YY-MM-DD' 형식의 문자열을 'YYYY-MM-DD'로 변환
            const parts = dateStr.split('-');
            const year = parseInt(parts[0], 10) < 70 ? '20' + parts[0] : '19' + parts[0];
            return `${year}-${parts[1]}-${parts[2]}`;
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
    background: #CFBDAE;
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
