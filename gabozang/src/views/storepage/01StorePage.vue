
<template>
    <div class="body">
        <emp-list></emp-list>
    </div>

</template>
  
<script>
import EmpList from '@/views/storepage/StoreList.vue';
    export default {
    components: { EmpList },
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