<template>
    <div class="board-container">
        <h1>게시판</h1>
        <div v-if="posts.length > 0">
            <div class="posts">
                <div class="post" v-for="(post, index) in posts" :key="index">
                        <a v-bind:href="'/employee/' + post.employeeId">{{ post.name }} 정보 보기</a>
                        <p>{{ post.employeeId }}</p>
                        <p>{{ post.storeId }}</p>
                        <p>{{ post.name }}</p>
                        <p>{{ post.phoneNumber }}</p>
                        <p>{{ post.yearsOfService }}</p>
                        <p>{{ post.employmentType }}</p>
                        <p>{{ post.salary }}</p>
                        <p>{{ post.managerId }}</p>
                        <p>{{ post.createdAt }}</p>
                        <p>{{ post.updatedAt }}</p>
                </div>
            </div>
        </div>

        <div v-else>
            게시글이 없습니다.
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'PostListComponent',
    data() {
        return {
            posts: [], // 게시글 데이터를 저장할 배열
        };
    },
    async mounted() {
        await this.fetchPosts();
    },
    methods: {
        async fetchPosts() {
            try {
                const response = await axios.get('http://15.164.225.110:8080/employee');
                this.posts = response.data.slice(0, 10); // 예시로 처음 10개의 게시글만 표시
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        },
    },
};
</script>
  
<style scoped>
.board-container {
    max-width: 85%;
    margin: auto;
    padding: 5%;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.posts .post {
    margin-bottom: 20px;
    padding: 15px;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.post h2 {
    margin-top: 0;
}

.post p {
    line-height: 1.6;
}
</style>