<template>
  <div>
    <h2>Yesterday's Payment History Sum</h2>
    <ul v-if="paymentHistorySum && paymentHistorySum.length">
      <li v-for="(item, index) in paymentHistorySum" :key="index">
        {{ item.description }}: {{ item.sum }}
      </li>
    </ul>
    <p v-else>No data available</p>
  </div>

  <div class="middle-box">
        <h3>일간 정산액</h3>
        <div class="in-box">
            <table>
                <tr>
                    <td>금일 정산액</td>
                    <td>{{ todaySum }}</td>
                </tr>
                <tr>
                    <td>익일 정산액</td>
                    <td>{{ yesterdaySum }}</td>
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
    mounted(){
        this.fetchTodaySum();
        this.fetchYesterdaySum();
    },
    methods:{
        async fetchTodaySum(){
            try{
                const response = await axios.get('http://15.164.225.110:8080/paymentHistory/sums');
                this.todaySum = response.data;
            } catch(error){
                console.error(error);
            }
        },
        async fetchYesterdaySum(){
            try{
                const response = await axios.get('http://15.164.225.110:8080/paymentHistory/yesterday/sum');
                this.yesterdaySum = response.data;
            } catch(error){
                console.error(error);
            }
        }
    }

}
</script>
