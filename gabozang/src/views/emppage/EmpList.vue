<template>
    <div class="board-container">
        <h1>직원 목록 </h1>
        <div class="header-container">
            <top-employees></top-employees>
            <h2>총 직원 수: {{ totalEmployeeCount }}</h2>
            <button @click="addNewEmp" class="add-employee-btn">새 직원 추가</button>
        </div>
        <div>
            <!-- GridEmp 컴포넌트 사용 -->
            <grid-emp
                :data="posts"
                :columns="gridColumns"
                :filter-key="searchQuery"
                :current-page="currentPage"
                :page-size="pageSize"
            ></grid-emp>
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
import topEmployees from './TopEmp.vue';
import GridEmp from './GridEmp.vue';

export default {
    name: 'PostListComponent',
    components: {
        topEmployees,
        GridEmp,
    },
    data() {
        return {
            posts: [],
            currentPage: 1,
            pageSize: 10,
            totalPages: 0,
            totalEmployeeCount: 0,
            searchQuery: '',
            gridColumns: [
            { field: 'employeeId', label: '직원 ID' },
            { field: 'name', label: '이름' },
            { field: 'phoneNumber', label: '전화번호' },
            { field: 'yearsOfService', label: '근무 연수' },
            { field: 'employmentType', label: '고용 형태' },
            { field: 'salary', label: '급여' },
            { field: 'managerId', label: '관리자 ID' },
            { field: 'createdAt', label: '생성 날짜' },
            { field: 'updatedAt', label: '업데이트 날짜' },
            { field: 'detail', label: '상세 정보', isLink: true }
        ]
    };
    },
    async mounted() {
        await this.fetchPosts();
        await this.fetchEmployeeCount();
    },
    methods: {
        async fetchPosts() {
            try {
                const response = await axios.get('http://15.164.225.110:8080/employee');
                this.posts = response.data;
                this.totalPages = Math.ceil(this.posts.length / this.pageSize);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        },
        changePage(page) {
            this.currentPage = page;
        },
        addNewEmp() {
            this.$router.push({ name: 'addemp' });
        },
        async fetchEmployeeCount() {
            try {
                const response = await axios.get('http://15.164.225.110:8080/employee/count');
                this.totalEmployeeCount = response.data;
            } catch (error) {
                console.error('총 직원 수 정보를 불러오는 중 오류가 발생했습니다:', error);
            }
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

.posts-table {
    width: 100%;
    border-collapse: collapse;
}

.posts-table th,
.posts-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.posts-table th {
    background-color: #f2f2f2;
}

.posts-table tr:nth-child(even) {
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

.add-employee-btn {
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

.add-employee-btn:hover {
    background-color: #E3E3E3;
    /* Darken primary color on hover */
}
</style>
