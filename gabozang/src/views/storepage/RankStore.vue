<template>
    <div class="top-store-container">
        <h2>올해 점포 매출 순위</h2>
        <div class="top-store-list" v-if="topStore.length > 0">
            <div v-for="(store, index) in topStore" :key="store.employeeId" :class="`store store-${index + 1}`">
                {{ index + 1 }}위 | {{ store.name }} <br>- 매출액: {{ store.sumSales }}원
            </div>
        </div>
        <div v-else>
            우수 매출 점포 정보가 없습니다.
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    data() {
        return {
            topStore: [], // 우수 점포 정보를 저장할 배열
        };
    },
    methods: {
        async fetchTopEmployees() {
            try {
                const response = await axios.get('http://15.164.225.110:8080/store/sales/rank');
                // 서버 응답을 기반으로 topStore 배열을 업데이트
                // 아래 코드는 서버 응답의 구조에 따라 조정될 수 있습니다.
                this.topStore = response.data.topStore || response.data;
            } catch (error) {
                console.error('평점 좋은 점포를 불러오는 중 오류가 발생했습니다:', error);
            }
        },
    },
    async mounted() {
        await this.fetchTopEmployees(); // 우수사원 정보 가져오기
    },
};
</script>

<style>
.top-store-container {
    padding: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.top-store-list {
    display: flex; /* 우수 직원들 사이에 공간을 동일하게 배분 */
}

.store {
    margin: 5px;
    padding: 10px;
}

.store-1 {
    font-size: 1.4rem; /* 1등은 가장 큰 글씨 */
}

.store-2 {
    font-size: 1.1rem; /* 2등은 중간 글씨 */
}

.store-3 {
    font-size: 1rem; /* 3등은 가장 작은 글씨 */
}

</style>
