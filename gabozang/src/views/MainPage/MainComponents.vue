<template>
    <div class="box-frame">
        <div class="outer-box">
        <div class="middle-box main">
            <h1>메인 페이지</h1>
        </div>
        <div class="middle-box template">
            <TotalEmployee></TotalEmployee>
        </div>
        <div class="middle-box thisyear">
            <ThisYearsSalesRank></ThisYearsSalesRank>
        </div>
        <div class="middle-box employee">
            <EmployeeofMonth></EmployeeofMonth>
        </div>
        <div class="middle-box totalsales">
            <TotalSales></TotalSales>
        </div>
        <div class="middle-box dailysales">
            <DailySales></DailySales>
        </div>
    </div>
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
.box-frame{
    position: absolute;
    top: 20%;
    left: 15%;
}
.outer-box{
    position: relative;
    left: 10%;
    width: 80%;
    height:70%;
    border-radius: 0.4em;
    background-color:#F0EAE6;
    overflow: scroll;
    padding-left: 1.2em;
    padding-right: 1.2em;
}
.midde-box{
    
}
</style>