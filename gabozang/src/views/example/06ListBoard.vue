<template>
    <div class="board-list">
      <h2>게시판 목록</h2>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <p>작성자: {{ post.author }}</p>
          <p>작성일: {{ post.date }}</p>
        </li>
      </ul>
    </div>
</template>
  
<script>
  import { ref } from 'vue';
  
  export default {
    name: 'BoardList',
    setup() {
      const posts = ref([
        { id: 1, title: '첫 번째 게시물', author: '작성자1', date: '2021-01-01' },
        { id: 2, title: '두 번째 게시물', author: '작성자2', date: '2021-02-01' },
        { id: 3, title: '세 번째 게시물', author: '작성자3', date: '2021-03-01' },
        // 여기에 더 많은 게시물을 추가할 수 있습니다.
      ]);
  
      return { posts };
    },
  };
  </script>
  
  <style scoped>
  .board-list ul {
    list-style: none;
    padding: 0;
  }
  
  .board-list li {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
  }
  </style>
  