<template>
    <div class="inside-total-box">
        <h3>매장 수상 기록 순위</h3>
        <div class="in-box">
            <table>
                <tr v-for="store in rankedStores" :key="store.ranking">
                    <td class="column01">{{ store.ranking }}등 매장</td>
                    <td class="column01">{{ store.name }}</td>
                </tr>
            </table>

        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            awards: [],
            stores: [],
            rankedStores: []
        };
    },
    async mounted() {
        await this.fetchAwards();
        await this.fetchStores();
        this.matchAwardsWithStores();
    },
    methods: {
        async fetchAwards() {
            try {
                const response = await axios.get('http://15.164.225.110:8080/awards');
                this.awards = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        async fetchStores() {
            try {
                const response = await axios.get('http://15.164.225.110:8080/store');
                this.stores = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        matchAwardsWithStores() {
            // 모든 수상 기록의 년도를 찾아 최신 년도를 계산
            const latestYear = Math.max(...this.awards.map(a => new Date(a.createdAt).getFullYear()));

            // 최신 년도에 해당하는 수상 기록만 필터링
            const latestYearAwards = this.awards.filter(award => new Date(award.createdAt).getFullYear() === latestYear);

            // 상위 3개 매장을 찾기 (최신 년도 기준)
            const top3Awards = latestYearAwards.filter(award => award.ranking <= 3);

            this.rankedStores = top3Awards.map(award => {
                const store = this.stores.find(store => store.id === award.storeId);
                return {
                    ranking: award.ranking,
                    name: store ? store.name : 'Unknown'
                };
            });
        }
    }
}
</script>