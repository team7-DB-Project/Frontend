<template>
    <div class="top-employees-container">
        <h2>이달의 우수사원</h2>
        <ul v-if="topEmployees.length > 0">
            <li v-for="(employee, index) in topEmployees" :key="index">
                {{ index + 1 }}. {{ employee.name }} - 직급: {{ employee.employmentType }}
            </li>
        </ul>
        <div v-else>
            우수사원 정보가 없습니다.
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            topEmployees: [], // 우수사원 정보를 저장할 배열
        };
    },
    methods: {
        async fetchTopEmployees() {
            try {
                const response = await axios.get('http://15.164.225.110:8080/employee/top3');
                // 서버 응답을 기반으로 topEmployees 배열을 업데이트
                // 아래 코드는 서버 응답의 구조에 따라 조정될 수 있습니다.
                this.topEmployees = response.data.topEmployees || response.data;
            } catch (error) {
                console.error('우수사원 정보를 불러오는 중 오류가 발생했습니다:', error);
            }
        },
    },
    async mounted() {
        await this.fetchTopEmployees(); // 우수사원 정보 가져오기
    },
};
</script>

<style>
.top-employees-container {
    margin-top: 20px;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.top-employees-container h2 {
    margin-top: 0;
}

.top-employees-container ul {
    padding: 0;
}

.top-employees-container li {
    list-style-type: none;
    margin-bottom: 5px;
}
</style>
