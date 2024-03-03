import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://15.164.225.110:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getPaymentHistorySum() {
    return apiClient.get('/paymentHistory/yesterday/sum');
  },
};
