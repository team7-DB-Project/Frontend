<template>
    <div class="board-container">
        <h1>점포</h1>
        <div class="header-container">
        <topStore></topStore>
        <rank-store></rank-store>
        <button @click="addNewStore" class="add-store-btn">새 점포 추가</button>
    </div>
        <table v-if="stores.length" class="stores-table">
            <thead>
                <tr>
                    <th>점포 ID</th>
                    <th>이름</th>
                    <th>점포 위치</th>
                    <th>최대수용</th>
                    <th>별점</th>
                    <th>전화번호</th>
                    <th>생성 날짜</th>
                    <th>업데이트 날짜</th>
                    <th>상세 정보</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(store, index) in stores" :key="index">
                    <td>{{ store.id }}</td>
                    <td>{{ store.name }}</td>
                    <td>{{ store.location }}</td>
                    <td>{{ store.maximumCapacity }}</td>
                    <td>{{ store.rating }}</td>
                    <td>{{ store.phoneNumber }}</td>
                    <td>{{ store.createdAt }}</td>
                    <td>{{ store.updatedAt }}</td>
                    <td><a :href="'/store/' + store.id">정보 보기</a></td>
                </tr>
            </tbody>
        </table>
        <div v-else>
            게시글이 없습니다
        </div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" v-for="page in totalPages" :key="page">
                    <button class="page-link" @click="changePage(page)">{{ page }}</button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import axios from 'axios';
import topStore from './TopStore.vue';
import RankStore from './RankStore.vue';

export default {
    name: 'PostListComponent',
    components:{
        topStore,
        RankStore
    },
    data() {
        return {
            stores: [],
            currentPage: 1,
            pageSize: 10,
            paginatedPosts: [],
            totalPages: 0,
        };
    },
    async mounted() {
        await this.fetchPosts();
    },
    methods: {
        async fetchPosts() {
            try {
                const response = await axios.get('http://15.164.225.110:8080/store');
                this.stores = response.data;
                this.paginatePosts();
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        },
        paginatePosts() {
            this.totalPages = Math.ceil(this.posts.length / this.pageSize);
            this.paginatedPosts = Array.from({ length: this.totalPages }, (_, index) => {
                const start = index * this.pageSize;
                return this.posts.slice(start, start + this.pageSize);
            });
        },
        changePage(page) {
            this.currentPage = page;
        },
        addNewStore() {
            // 새 점포 추가 페이지로 이동
            this.$router.push({ name: 'addstore' }); // 'StoreAdd'는 새 점포 추가 페이지의 라우터 이름
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

.stores-table {
    width: 100%;
    border-collapse: collapse;
}

.stores-table th,
.stores-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.stores-table th {
    background-color: #f2f2f2;
}

.stores-table tr:nth-child(even) {
    background-color: #f9f9f9;
}

.pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.pagination button {
    margin: 0 5px;
    padding: 5px 10px;
    background-color: #f0f0f0;
    border: 1px solid #dcdcdc;
    cursor: pointer;
}

.pagination button:disabled {
    background-color: #eaeaea;
    cursor: not-allowed;
}

li {
    list-style-type: none;
}
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.add-store-btn {
    margin-top: 20px;
    padding: 10px 15px;
    background-color: #DFD6BF;
    /* 녹색 배경 */
    color: black;
    /* 흰색 텍스트 */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    /* 부드러운 색상 변경 효과 */
}
</style>
