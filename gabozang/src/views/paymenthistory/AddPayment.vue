<template>
    <div class="add-payment-container">
        <h1>결제 정보 추가</h1>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="sales">매출액</label>
                <input type="number" id="sales" v-model="paymentData.sales" required>
            </div>
            <div class="form-group">
                <label for="paymentId">결제 ID</label>
                <select id="paymentId" v-model="paymentData.paymentId" required>
                    <option v-for="id in 10" :key="id" :value="id">{{ id }}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="storeId">매장 선택</label>
                <select id="storeId" v-model="paymentData.storeId" required>
                    <option v-for="store in stores" :key="store.id" :value="store.id">{{ store.name }}</option>
                </select>
            </div>
            <button type="submit">결제 정보 추가</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            stores: [], // 매장 데이터를 저장할 배열
            paymentData: { // 결제 정보 데이터 바인딩을 위한 객체
                sales: null,
                paymentId: 1, // 초기 값 설정
                storeId: null,
            },
        };
    },
    mounted() {
        this.fetchStores();
    },
    methods: {
        fetchStores() {
            axios.get('http://15.164.225.110:8080/store')
                .then(response => {
                    this.stores = response.data;
                })
                .catch(error => {
                    console.error("매장 정보를 불러오는 데 실패했습니다.", error);
                });
        },
        submitForm() {
            axios.post('http://15.164.225.110:8080/paymentHistory', this.paymentData)
                .then(() => {
                    alert('결제 정보가 성공적으로 추가되었습니다.');

            this.$router.push({ name: 'payment' });
                    // 폼 제출 후 추가적인 작업 (예: 폼 초기화, 페이지 리다이렉트 등)
                })
                .catch(error => {
                    console.error("결제 정보 추가에 실패했습니다.", error);
                });
        }
    }
}
</script>

<style>
/* 스타일 추가 */
.storeId-detail-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.storeId-detail-container div {
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