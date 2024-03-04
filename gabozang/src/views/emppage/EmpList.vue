<template>
    <div class="board-container">
        <h1>직원 목록 </h1>
        <div class="header-container">
            <top-employees></top-employees>
            총 직원 수: {{ totalEmployeeCount }}
            <button @click="addNewEmp" class="add-employee-btn">새 직원 추가</button>
        </div>
        <table v-if="paginatedPosts.length > 0" class="posts-table">
            <thead>
                <tr>
                    <th>직원 ID</th>
                    <th>이름</th>
                    <th>전화번호</th>
                    <th>근무 연수</th>
                    <th>고용 형태</th>
                    <th>급여</th>
                    <th>관리자 ID</th>
                    <th>생성 날짜</th>
                    <th>업데이트 날짜</th>
                    <th>상세 정보</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in paginatedPosts[currentPage - 1]" :key="post.employeeId">
                    <td>{{ post.employeeId }}</td>
                    <td>{{ post.name }}</td>
                    <td>{{ post.phoneNumber }}</td>
                    <td>{{ post.yearsOfService }}</td>
                    <td>{{ post.employmentType }}</td>
                    <td>{{ post.salary }}</td>
                    <td>{{ post.managerId }}</td>
                    <td>{{ post.createdAt }}</td>
                    <td>{{ post.updatedAt }}</td>
                    <td><router-link :to="`/employee/${post.employeeId}`">정보 보기</router-link></td>
                </tr>
            </tbody>
        </table>
        <div v-else>
            게시글이 없습니다.
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

export default {
    name: 'PostListComponent',
    components: {
        topEmployees,
    },
    data() {
        return {
            posts: [],
            currentPage: 1,
            pageSize: 10,
            paginatedPosts: [],
            totalPages: 0,
            topEmployees: [],
            totalEmployeeCount: 0, // 총 직원 수를 저장할 속성
        };
    },
    async mounted() {
        await this.fetchPosts();
        await this.fetchEmployeeCount(); // 총 직원 수 정보 가져오기
    },
    methods: {
        async fetchPosts() {
            try {
                const response = await axios.get('http://15.164.225.110:8080/employee');
                this.posts = response.data;
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
        addNewEmp() {
            // 새 점포 추가 페이지로 이동
            this.$router.push({ name: 'addemp' }); // 'StoreAdd'는 새 점포 추가 페이지의 라우터 이름
        },
        async fetchEmployeeCount() {
            try {
                const response = await axios.get('http://15.164.225.110:8080/employee/count');
                // API 응답 구조에 따라 적절한 데이터 접근 방식 적용
                this.totalEmployeeCount = response.data; // API 응답이 직접 총 직원 수를 반환한다고 가정
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
