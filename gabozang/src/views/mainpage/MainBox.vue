
<template>
    <div class="container">
        <div class="box">
            <h2>일간 정산액</h2>
            <div class="info">
                <div class="amount">
                    <table>
                        <tr>
                            <label>금일 정산액</label>
                            <span>{{ todaySum }}</span>
                        </tr>
                        <tr>
                            <label>익일 정산액</label>
                            <span>{{ yesterdaySum }}</span>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="button-container">
                <button class="more-button">더보기</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            todaySum: 0,
            yesterdaySum: 0,
        };
    },
    mounted() {
        this.fetchTodaySum();
        this.fetchYesterdaySum();
    },
    methods: {
        async fetchTodaySum() {
            try {
                const response = await axios.get('http://15.164.225.110:8080/paymentHistory/sums');
                this.todaySum = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        async fetchYesterdaySum() {
            try {
                const response = await axios.get('http://15.164.225.110:8080/paymentHistory/yesterday/sum');
                this.yesterdaySum = response.data;
            } catch (error) {
                console.error(error);
            }
        }
    }

}
</script>
<style scoped>
.container {
    display: flex;
}

.button-container {
    text-align: right;
}

.more-button {
    background-color: #EFEAE6;
    color: black;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 10px;
    transition: background-color 0.3s;
}

.more-button:hover {
    background-color: #DDD;
}

.box {
    padding: 2%;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    background-color: #CCBEB0;
    width: 100%;
    max-width: 30%;
    margin: 20px;
    transition: all 0.3s ease;
}

.box h2 {
    text-align: center;
    color: #333;
    margin-bottom: 1.5rem;
}

.info .amount {
    align-items: center;
    margin-bottom: 3%;
    padding: 1%;
    background-color: #EFEAE6;
    border-radius: 10px;
}

.info .amount label {
    text-align: left;
    font-weight: bold;
    padding: 40px;
}

.info .amount span {
    text-align: right;
    color: #666;
}</style>
