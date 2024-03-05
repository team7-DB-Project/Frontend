<template>
    <div class="body">
        <div >
            <PaymentTable></PaymentTable>
        </div>
    </div>
</template>

<script>
import PaymentTable from './PaymentTable.vue';
export default {
    components: {
        PaymentTable
    }
}
</script>

<style scoped>
.body {
  margin: 0;
  padding: 0;
  background-color: #EFEAE6; /* 배경 색 설정 */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>