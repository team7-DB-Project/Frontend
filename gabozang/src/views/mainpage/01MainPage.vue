
<template>
    <div class="body">
        <main-box class="payment"/>
        <main-box class="totalemp"/>
    </div>

</template>
  
<script>
import MainBox from '@/views/mainpage/MainBox.vue';
    export default {
    components: { MainBox },
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