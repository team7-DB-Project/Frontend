<template>
    <div class="outer-box">
        <h1>메인 페이지</h1>
    <TotalEmployee></TotalEmployee>
    <ThisYearsSalesRank></ThisYearsSalesRank>
    <EmployeeofMonth></EmployeeofMonth>
    <TotalSales></TotalSales>
    <DailySales></DailySales>
    </div>
    
</template>

<script>
import DailySales from './MainPageComponents/DailySales.vue';
import EmployeeofMonth from './MainPageComponents/EmployeeofMonth.vue';
import ThisYearsSalesRank from './MainPageComponents/ThisYearsSalesRank.vue';
import TotalEmployee from './MainPageComponents/TotalEmployee.vue';
import TotalSales from './MainPageComponents/TotalSales.vue';

export default {
    components: {
        TotalEmployee,
        ThisYearsSalesRank,
        EmployeeofMonth,
        TotalSales,
        DailySales,
    }
}
</script>

<style scoped>
.outer-box{
    position: absolute;
    top: 20%;
    left: 25%;
    width: 70%;
    height:70%;
    border-radius: 0.4em;
    background-color:#F0EAE6;
    overflow: scroll;
}
</style>