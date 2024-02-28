<template>
  <div id="app">
    <LayoutNavi />
    <LayoutSide />
    
   <!-- <LayoutFooter />--> 
  </div>
</template>

<script> 
import LayoutNavi   from '@/components/layout/LayoutNavi.vue'
//import LayoutFooter from '@/components/layout/LayoutFooter.vue'
import LayoutSide from '@/components/layout/LayoutSide.vue';

export default {
  name: 'App',
  components: {
    LayoutNavi,
    LayoutSide
   // LayoutFooter
  }
} 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.contents {
  padding: 10px;
  text-align: left; 
}
</style>
