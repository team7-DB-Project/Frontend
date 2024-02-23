import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://15.164.225.110:8080/swagger-ui/index.html',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getItems() {
    return apiClient.get('/items');
    console.log(apiClient);
  },
  // 필요에 따라 추가 API 함수 구현
};
