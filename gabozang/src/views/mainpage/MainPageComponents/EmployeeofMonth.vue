<template>
    <div class="inside-total-box">
        <h3>이달의 사원</h3>
        <div class="in-box">
            <table>
                <tr v-for="(employee, index) in employeeLists" :key="employee.employeeId">
                    <td class="column01">{{ index + 1 }}등</td>
                    <td class="column01">{{ employee.name }}</td>
                    <td class="column01">{{ employee.employmentType }}</td>
                    <td class="column01">{{ employee.yearsOfService }}년</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            employeeLists: [] // 사원 데이터를 저장할 배열
        };
    },
    mounted() {
        this.fetchTop3Employees();
    },
    methods: {
        async fetchTop3Employees() {
            try {
                const response = await axios.get('http://15.164.225.110:8080/employee/top3');
                this.employeeLists = response.data; // 받아온 데이터를 employeeLists에 저장
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>
