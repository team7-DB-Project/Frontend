<template>
    <div class="outer-box">
        <div class="jeoungsan-show-table">
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
.outer-box{
    top:15%;
    left: 10%;
}
.jeoungsan-show-table{
    top: 5em;
}


.body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #EFEAE6;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>./PaymentGrid.vue