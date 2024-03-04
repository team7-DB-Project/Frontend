<template>
    <div class="board-container">
        <h1>점포</h1>
        <div class="header-container">
            <top-store></top-store>
            <rank-store></rank-store>
            <button @click="addNewStore" class="add-store-btn">새 점포 추가</button>
        </div>
        <div>
            <!-- GridStore 컴포넌트 사용 -->
            <grid-store
                :data="stores"
                :columns="gridColumns"
                :filter-key="searchQuery"
                :current-page="currentPage"
                :page-size="pageSize"
            ></grid-store>
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
import TopStore from './TopStore.vue';
import RankStore from './RankStore.vue';
import GridStore from './GridStore.vue';

export default {
    name: 'PostListComponent',
    components: {
        TopStore,
        RankStore,
        GridStore,
    },
    data() {
        return {
            searchQuery: '',
            gridColumns: ['id', 'name', 'location', 'maximumCapacity', 'rating', 'phoneNumber', 'createdAt', 'updatedAt', '상세 정보'],
            stores: [],
            currentPage: 1,
            pageSize: 10,
            totalPages: 0,
        };
    },
    async mounted() {
        await this.fetchStores();
    },
    methods: {
        async fetchStores() {
            try {
                const response = await axios.get('http://15.164.225.110:8080/store');
                this.stores = response.data;
                this.totalPages = Math.ceil(this.stores.length / this.pageSize);
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        },
        changePage(page) {
            this.currentPage = page;
        },
        addNewStore() {
            this.$router.push({ name: 'addstore' });
        },
    },
};
</script>

<style scoped>
.board-container {
    max-width: 85%;
    margin: auto;
    padding: 2%;
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

.add-store-btn:hover {
    background-color: #E3E3E3;
    /* Darken primary color on hover */
}
</style>
