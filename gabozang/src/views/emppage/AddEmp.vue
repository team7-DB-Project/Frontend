<template>
    <div class="employee-detail-container">
        <h1>직원 추가</h1>
        <div v-if="!isEditing">
            <form @submit.prevent="updateEmployee">
                <div>
                    <label for="storeId">점포 ID:</label>
                    <input id="storeId" v-model="employee.storeId" type="number">
                </div>
                <div>
                    <label for="name">이름:</label>
                    <input id="name" v-model="employee.name">
                </div>
                <div>
                    <label for="phoneNumber">전화번호:</label>
                    <input id="phoneNumber" v-model="employee.phoneNumber">
                </div>
                <div>
                    <label for="yearsOfService">근무 연수:</label>
                    <input id="yearsOfService" v-model="employee.yearsOfService" type="number">
                </div>
                <div>
                    <label for="employmentType">고용 형태:</label>
                    <input id="employmentType" v-model="employee.employmentType">
                </div>
                <div>
                    <label for="salary">급여:</label>
                    <input id="salary" v-model="employee.salary" type="number">
                </div>
                <div>
                    <label for="managerId">관리자 ID:</label>
                    <input id="managerId" v-model="employee.managerId" type="number">
                </div>
                <!-- 기타 필요한 정보 필드 추가 -->
                <button type="submit">저장</button>
                <button @click="cancelEdit">취소</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {

    props: ['employeeId'],
    data() {
        return {
            employee: {}, // 직원 정보를 저장할 객체
            isEditing: false, // 편집 모드인지 여부를 결정
        };
    },
    async mounted() {
        await this.fetchEmployeeDetail();
    },
    methods: {
        editEmployee() {
            this.isEditing = true;
        }, async updateEmployee() {
            try {
                const response = await axios.post(`http://15.164.225.110:8080/employee`, this.employee);

                // 예를 들어, 서버로부터 받은 업데이트된 직원 정보를 로컬 상태에 반영
                this.employee = response.data;

                this.isEditing = false;
                alert('직원 정보가 성공적으로 업데이트되었습니다.');
                this.$router.push({ name: 'employee' });
            } catch (error) {
                console.error('직원 정보를 업데이트하는 동안 오류가 발생했습니다:', error);
            }
        }
        ,
        cancelEdit() {
            this.isEditing = false;
            this.$router.push({ name: 'employee' });
        },
    },
};
</script>

<style>
/* 스타일 추가 */
.employee-detail-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.employee-detail-container div {
    margin-bottom: 10px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    margin-bottom: 20px;
}

button {
    padding: 10px 15px;
    margin-right: 10px;
}
</style>