<template>
    <div>

  <p>사용자 id : {{ $route.params.id }}</p>

  <p>사용자 name : {{post[$route.params.id].name}}</p>
  <p>사용자 email : {{[$route.params.id].email}}</p>
        <p>{{ post.employeeId }}</p>
        <p>{{ post.storeId }}</p>
        <p>{{ post.name }}</p>
        <p>{{ post.phoneNumber }}</p>
        <p>{{ post.yearsOfService }}</p>
        <p>{{ post.employmentType }}</p>
        <p>{{ post.salary }}</p>
        <p>{{ post.managerId }}</p>
        <p>{{ post.createdAt }}</p>
        <p>{{ post.updatedAt }}</p>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'PostListComponent',
    data() {
        return {
            posts: [], // 게시글 데이터를 저장할 배열
        };
    },
    async mounted() {
        await this.fetchPosts();
    },
    methods: {
        async fetchPosts() {
            try {
                const response = await axios.get('http://15.164.225.110:8080/employee/${this.id}');
               this.post = response.data;
    } catch (error) {
      console.error('Error fetching post details:', error);
    }
        },
    },
};
</script>