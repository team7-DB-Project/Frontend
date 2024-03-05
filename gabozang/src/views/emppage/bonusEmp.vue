<template>
    <div class="top-employees-container">
        <h2>올 해 총 수령액</h2>
        <div class="top-employees-list" v-if="topEmployees.length > 0">
            <div v-for="(employee, index) in topEmployees" :key="employee.employeeId"
                :class="`employee employee-${index + 1}`">
                {{ index + 1 }}위 | {{ employee.name }} - 총 수령액: {{ formatSalaryToKRW(employee.salary) }}
            </div>

        </div>
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
        formatSalaryToKRW(salary) {
            return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(salary);
        },

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
    padding: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.top-employees-list {
    display: flex;
    /* 우수 직원들 사이에 공간을 동일하게 배분 */
}

.employee {
    margin: 5px;
    padding: 10px;
}

.employee-1 {
    font-size: 1.4rem;
    /* 1등은 가장 큰 글씨 */
}

.employee-2 {
    font-size: 1.1rem;
    /* 2등은 중간 글씨 */
}

.employee-3 {
    font-size: 1rem;
    /* 3등은 가장 작은 글씨 */
}
</style>
