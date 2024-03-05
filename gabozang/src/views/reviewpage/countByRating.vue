<template>
  <div class="review-chart">
    <h2>전체 평점 현황</h2>
    <canvas id="reviewChart"></canvas>
  </div>
</template>

<script>
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.fetchChartData();
  },
  methods: {
    async fetchChartData() {
      try {
        const response = await axios.get('http://15.164.225.110:8080/review/countByRating');
        const countsByRating = response.data;
        const labels = [];
        const data = [];
        const backgroundColors = [];
        const borderColors = [];

        for (let rating = 0; rating <= 5; rating++) {
          labels.push(`${rating}점`);
          const count = countsByRating.find(item => item.rating === rating)?.count || 0;
          data.push(count);
          backgroundColors.push('#CFBDAE'); // 수정된 부분
          borderColors.push('#DFD6BF'); // 수정된 부분
        }

        this.renderChart(labels, data, backgroundColors, borderColors);
      } catch (error) {
        console.error('리뷰 점수 분포 데이터를 가져오는 중 에러가 발생했습니다.', error);
      }
    },
    renderChart(labels, data, backgroundColors, borderColors) {
      const ctx = document.getElementById('reviewChart').getContext('2d');
      if (this.chart) {
        this.chart.destroy();
      }
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: '리뷰 개수',
            data: data,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              display: false // 수정된 부분
            }
          }
        }
      });
    }
  }
}
</script>

<style scoped>
.review-chart {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
</style>
