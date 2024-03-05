<template>
    <!--F0EAE6-->
    <div class="total-employee-outerbox">
        <div class="total-employee-innerbox fst">총 직원 수</div>
        <div class="total-employee-innerbox scd">{{ employeeCount }}명</div>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    data() {
    return {
        employeeCount: 0
    }
},
created() {
    this.fetchEmployeeCount();
},
methods: {
    fetchEmployeeCount() {
        axios.get('http://15.164.225.110:8080/employee/count')
            .then(response => {
                console.log(response.data);
                this.employeeCount = response.data;
            })
            .catch(error => {
                console.error("There was an error fetching the employee count:", error);
            });
    }
}
}
</script>

<style scoped>
* {
    font-size: 1.3em;
    font-weight: 600;
}

.total-employee-outerbox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.total-employee-innerbox {
    padding: 0.1em 1em 0.1em 1em;
    border-radius: 0.2em;
}

.fst {
    width: 30%;
}

.scd {
    background-color: #F0EAE6;
    width: 35%;
    text-align: right;
}

.trd {
    border-radius: 0.2em;
    width: 20%;
    height: auto;
}

.trd button {
    border: none;
    border-radius: 0.5em;
    font-size: 1em;
    width: 100%;
    transition: background-color 1s ease, opacity 1s ease;
}

.trd button:hover {
    background-color: rgba(234, 234, 234, 0.5);
}</style>