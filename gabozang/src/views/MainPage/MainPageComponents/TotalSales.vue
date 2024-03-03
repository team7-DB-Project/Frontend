<template>
    <div class="inside-total-box">
        <h3>매출액</h3>
        <div class="in-box">
            <table>
                <tr>
                    <td class="column-first">총 매출액</td>
                    <td>{{ formattedTotalSum }}</td>
                </tr>
                <tr>
                    <td class="column-first">금년 매출액</td>
                    <td>{{ formattedThisYearSum }}</td>
                </tr>
                <tr>
                    <td class="column-fisrt">작년 매출액</td>
                    <td>{{ formattedLastYearSum }}</td>
                </tr>
            </table>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            totalSum: 0,
            thisYearSum: 0,
            lastYearSum: 0
        };
    },
    computed: {
        formattedTotalSum() {
            return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(this.totalSum);
        },
        formattedThisYearSum() {
            return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(this.thisYearSum);
        },
        formattedLastYearSum(){
            return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(this.lastYearSum);
        }
    },
    mounted(){
        this.fetchTotalSum();
        this.fetchYesterdaySum();
        this.fetchLastYearSum();
    },
    methods:{
        async fetchTotalSum(){
            try{
                const response = await axios.get('http://15.164.225.110:8080/paymentHistory/sums');
                this.todaySum = response.data; // 가정: response.data는 숫자 타입
            } catch(error){
                console.error(error);
            }
        },
        async fetchThisYearSum(){
            try{
                const response = await axios.get('http://15.164.225.110:8080/paymentHistory/year/sums');
                this.yesterdaySum = response.data; // 가정: response.data는 숫자 타입
            } catch(error){
                console.error(error);
            }
        },
        async fetchLastYearSum(){
            try{
                const response = await axios.get('http://15.164.225.110:8080/paymentHistory/lastYear/sums');
                this.yesterdaySum = response.data; // 가정: response.data는 숫자 타입
            } catch(error){
                console.error(error);
            }
        }
    }

}
</script>

<style >
.inside-total-box h3{
    text-align: center;
    font-size: 2em;
}
.inside-total-box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 2em;
}
.in-box{
    background-color: #F0EAE6;
    width: 100%;
    text-align: right;
    border-radius: 1em;
    padding-top: 1em;
    padding-bottom: 2em;
}
.in-box table, th, td{
    font-size: 1.2em;
}
.in-box table{
    width: 100%;
    border-collapse: separate;
    border-spacing: 1em;
    text-align: left;
}
</style>