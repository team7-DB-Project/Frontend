<template>
    <div class="inside-total-box">
        <h3>일간 정산액</h3>
        <div class="in-box">
            <table>
                <tr>
                    <td class="column01">금일 정산액</td>
                    <td>{{ formattedTodaySum }}</td>
                </tr>
                <tr>
                    <td class="column01">익일 정산액</td>
                    <td>{{ formattedYesterdaySum }}</td>
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
            todaySum: 0,
            yesterdaySum: 0,
        };
    },
    computed: {
        formattedTodaySum() {
            return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(this.todaySum);
        },
        formattedYesterdaySum() {
            return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(this.yesterdaySum);
        }
    },
    mounted(){
        this.fetchTodaySum();
        this.fetchYesterdaySum();
    },
    methods:{
        async fetchTodaySum(){
            try{
                const response = await axios.get('http://15.164.225.110:8080/paymentHistory/sums');
                this.todaySum = response.data; // 가정: response.data는 숫자 타입
            } catch(error){
                console.error(error);
            }
        },
        async fetchYesterdaySum(){
            try{
                const response = await axios.get('http://15.164.225.110:8080/paymentHistory/yesterday/sum');
                this.yesterdaySum = response.data; // 가정: response.data는 숫자 타입
            } catch(error){
                console.error(error);
            }
        }
    }

}
</script>

<style scoped>
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
}
.in-box table column01{
    text-align: center;
}
</style>