<template>
    <div class="add-review">
        <h2>리뷰 추가</h2>
        <form @submit.prevent="submitReview">
            <div class="form-group">
                <label for="content">리뷰 내용:</label>
                <textarea id="content" v-model="review.content" required></textarea>
            </div>
            <div class="form-group">
                <label for="rating">평점:</label>
                <input type="number" id="rating" v-model="review.rating" min="0" max="5" required>
            </div>
            <div class="form-group">
                <label for="storeId">점포 ID:</label>
                <input type="number" id="storeId" v-model="review.storeId" required>
            </div>
            <button type="submit">리뷰 추가</button>
        </form>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            review: {
                content: '',
                rating: 0,
                storeId: 0
            },
            errorMessage: ''
        };
    },
    methods: {
        async submitReview() {
            try {
                const response = await axios.post('http://15.164.225.110:8080/review', this.review);
                // 리뷰 추가 성공 시, 적절한 처리를 수행합니다.
                console.log('리뷰 추가 완료:', response.data);
                // 리뷰 추가 후 폼 초기화
                alert('리뷰 작성 완료!')
                this.review = {
                    content: '',
                    rating: 0,
                    storeId: 0
                };
                this.errorMessage = ''; // 에러 메시지 초기화
            } catch (error) {
                this.errorMessage = '리뷰 추가 중 오류가 발생했습니다. 다시 시도해주세요.';
                console.error('리뷰 추가 오류:', error);
            }
        }
    }
}
</script>

<style scoped>
.add-review {
    max-width: 600px;
    margin: auto;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    font-weight: bold;
}

textarea,
input[type="number"] {
    width: 100%;
    padding: 8px;
    font-size: 16px;
}

button {
    padding: 10px 20px;
    background-color: #a99f86;
    border: none;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #a99f86;
}

.error-message {
    color: #a94442;
    background-color: #f2dede;
    padding: 10px;
    margin-top: 20px;
    border-radius: 4px;
}
</style>