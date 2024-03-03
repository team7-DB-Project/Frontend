<template>
    <div class="box-frame">
        <div class="outer-box">
            <div class="table-structure fisrt-row">
                <div class="middle-box main">
                    <h1>메인 페이지</h1>
                </div>
                <div class="middle-box totalemployee">
                    <TotalEmployee></TotalEmployee>
                </div>
            </div>
            <div class="table-structure second-row">
                <div class="middle-box thisyear">
                    <ThisYearsSalesRank></ThisYearsSalesRank>
                </div>
                <div class="middle-box employee">
                    <EmployeeofMonth></EmployeeofMonth>
                </div>
            </div>
            <div class="table-structure third-row">
                <div class="middle-box totalsales">
                    <TotalSales></TotalSales>
                </div>
                <div class="middle-box dailysales">
                    <DailySales></DailySales>
                </div>
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
.box-frame {
    position: absolute;
    top: 15%;
    left: 15%;
    width: 84.5%;
    height: 78%;
}

.outer-box {
    position: relative;
    left: 6%;
    top: 6%;
    width: 88%;
    height: 90%;
    border-radius: 0.4em;
    background-color: #F0EAE6;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 1.2em;
    padding-right: 1.2em;
}

.table-structure {
    display: flex;
    flex-direction: row;
}

.middle-box {
    border: 1.2px solid #E6E6E6;
    background-color: #CFBDAE;
    border-radius: 2em;
    padding: 0.5em;
    margin-top: 1em;
    margin-bottom: 1em;
}

.fisrt-row {
    display: flex;
    justify-content: space-around;
}

.second-row {
    display: flex;
    justify-content: space-around;
}

.third-row {
    display: flex;
    justify-content: space-around;
}

.main {
    width: 20%;
    text-align: center;
}

.totalemployee {
    width: 60%;
}

.thisyear{
    width: 40%;
}

.employee{
    width: 40%;
}
.totalsales{
    width: 40%;
}
.dailysales{
    width: 40%;
}


</style>

