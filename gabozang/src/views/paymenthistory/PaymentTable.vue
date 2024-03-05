<template>
    <div class="payment-informations">
        <h1>결제 정보</h1>
        <PaymentGrid :data="payments" :columns="columns" @sort-request="handleSortRequest"></PaymentGrid>
    </div>
</template>

<script>
import axios from 'axios'
import PaymentGrid from './PaymentGrid.vue'
export default {
    components: {
        PaymentGrid
    },
    data() {
        return {
            columns: [
                { label: '결제 순서', field: 'order' },
                { label: '결제 ID', field: 'paymentId' },
                { label: '결제액', field: 'amount' },
                { label: '결제 매장', field: 'storeName' },
                { label: '결제일', field: 'date' },
            ],
            payments: [],
            pageSize: 10,
            currentPage: 1,
            totalPages: 0,
        };
    },
    async created() {
        await this.fetchData();
    },
    methods: {
        handleSortRequest({ sortColumn, sortOrder }) {
            this.payments.sort((a, b) => {
                let valueA = a[sortColumn];
                let valueB = b[sortColumn];

                // 문자열일 경우, 대소문자 구분 없이 비교
                if (typeof valueA === 'string') {
                    valueA = valueA.toLowerCase();
                }
                if (typeof valueB === 'string') {
                    valueB = valueB.toLowerCase();
                }

                // 오름차순 정렬
                if (sortOrder === 'asc') {
                    if (valueA < valueB) return -1;
                    if (valueA > valueB) return 1;
                }
                // 내림차순 정렬
                else if (sortOrder === 'desc') {
                    if (valueA > valueB) return -1;
                    if (valueA < valueB) return 1;
                }
                return 0;
            });
        },
        async fetchData() {
            try {
                console.log("Start Point");
                const paymentHistoryResponse = await axios.get('http://15.164.225.110:8080/paymentHistory');
                const paymentHistories = paymentHistoryResponse.data;

                const storeResponse = await axios.get('http://15.164.225.110:8080/store');
                const stores = storeResponse.data;

                for (const payment of paymentHistories) {
                    const store = stores.find(s => s.id === payment.storeId);

                    this.payments.push({
                        order: payment.privateHistoryId,
                        paymentId: payment.sales,
                        amount: payment.paymentId,
                        storeName: store ? store.name : 'Unknown',
                        date: payment.createdAt,
                    })
                }
            } catch (error) {
                console.error("Data fetching error", error);
            }
        }
    }
}

</script>

<style>
.jeoungsan-select-bar {
    border-radius: 0.4em;
    background-color: #F0EAE6;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 1.2em;
    padding-right: 1.2em;
}

.searchBox {
    padding: 10px 0px;
}
</style>