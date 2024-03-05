<template>
    <div class="review-list">
        <h2>전체 리뷰</h2>
        <div v-for="review in reviews" :key="review.reviewId" class="review-card">
            <div class="review-header">
                <span class="review-id">리뷰 ID #{{ review.reviewId }}</span>
                <span class="rating">
          <i v-for="star in 5" :key="star" class="star" :class="{'fas fa-star': star <= review.rating, 'far fa-star': star > review.rating}"></i>
        </span>
        
            </div>
            <div class="review-body">
                <p class="content">{{ review.content }}</p>
                <div class="image-container" v-if="review.imageUrls.length > 0">
                    <h4>사진:</h4>
                    <img v-for="imageUrl in review.imageUrls" :src="imageUrl" :alt="`Review Image ${imageUrl}`"
                        :key="imageUrl" class="review-image" />
                </div>
            </div>
            <div class="review-footer">
                <p>점포 ID: {{ review.storeId }}</p>
                <p>작성 날짜: {{ formatDate(review.createdAt) }}</p>
                <p>수정 날짜: {{ formatDate(review.updatedAt) }}</p>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    data() {
        return {
            reviews: [],
        };
    },
    created() {
        this.fetchReviews();
    },
    methods: {
        fetchReviews() {
            axios.get('http://15.164.225.110:8080/review')
                .then(response => {
                    this.reviews = response.data;
                })
                .catch(error => {
                    console.error('There was an error fetching the reviews:', error);
                });
            this.reviews = [
                {
                    "reviewId": 0,
                    "storeId": 0,
                    "content": "Great place, loved the ambiance!",
                    "rating": 5,
                    "imageUrls": [
                        "string"
                    ],
                    "createdAt": "2024-03-05T15:44:59.338Z",
                    "updatedAt": "2024-03-05T15:44:59.338Z"
                },
                // 추가 리뷰 객체
            ];
        },
        formatDate(date) {
            return new Date(date).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric',
                hour: '2-digit', minute: '2-digit', second: '2-digit',
            });
        }
    }
}
</script>

<style scoped>
.review-list {
    padding: 20px;
    max-width: 800px;
    margin: auto;
}

.review-card {
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    padding: 15px;
    transition: transform 0.3s ease;
    border-left: 5px solid #a49d8a;
    /* Adds a colored border to the left side */
}

.review-card:hover {
    transform: translateY(-3px);
}

.review-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.review-id {
    font-weight: bold;
    color: #333;
}

.rating {
    background: #CFBDAE;
    color: #fff;
    padding: 3px 8px;
    border-radius: 5px;
    font-weight: bold;
}

.review-body .content {
    font-size: 16px;
    line-height: 1.5;
    color: #555;
    margin-bottom: 15px;
}

.image-container {
    margin-top: 10px;
}

.review-image {
    max-width: 100px;
    height: auto;
    margin-right: 10px;
    border-radius: 4px;
}

.review-footer {
    font-size: 14px;
    color: #777;
    border-top: 1px solid #eee;
    padding-top: 10px;
}
</style>