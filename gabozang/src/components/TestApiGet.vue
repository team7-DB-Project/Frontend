<template>
    <div>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import APIService from './services/APIService';
  
  export default {
    data() {
      return {
        items: [name],
      };
    },
    async created() {
      const response = await APIService.getItems();
      this.items = response.data;
      console.log(this.items);
    },
  };
  </script>
  