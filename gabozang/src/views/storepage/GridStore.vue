<template>
    <div>
        <input v-model="localFilterKey" placeholder="Search...">
        <table v-if="filteredData.length">
            <thead>
                <tr>
                    <th v-for="key in columns" :key="key" @click="sortBy(key)">
                        {{ capitalize(key) }}
                        <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'desc'"></span>
                    </th>


                </tr>
            </thead>
            <tbody>
                <tr v-for="store in filteredData" :key="store.id">
                    <td>{{ store.id }}</td>
                    <td>{{ store.name }}</td>
                    <td>{{ store.location }}</td>
                    <td>{{ store.maximumCapacity }}</td>
                    <td>{{ store.rating }}</td>
                    <td>{{ store.phoneNumber }}</td>
                    <td>{{ store.createdAt }}</td>
                    <td>{{ store.updatedAt }}</td>
                    <td><a :href="'/store/' + store.id">정보 보기</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: ['data', 'columns', 'filterKey', 'currentPage', 'pageSize'],
    data() {
        const sortOrders = this.columns.reduce((acc, key) => {
            acc[key] = 1;
            return acc;
        }, {});

        return {
            localFilterKey: this.filterKey, // props에서 받은 값을 직접 할당
            sortKey: '',
            sortOrders
        };
    },
    created() {
        this.localFilterKey = this.filterKey; // prop의 초기값을 로컬 데이터 속성에 할당
        this.columns.forEach(key => {
            this.sortOrders[key] = 1; // sortOrders 초기화
        });
    },
    watch: {
        filterKey(newVal) {
            this.localFilterKey = newVal;
        }
    },

    computed: {
        currentPageData() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.filteredData.slice(start, end);
        },
        filteredData() {
            var sortKey = this.sortKey;
            var data = this.data;
            var filterKey = this.localFilterKey && this.localFilterKey.toLowerCase(); // localFilterKey 사용
            var order = this.sortOrders[sortKey] || 1;
            if (filterKey) {
                data = data.filter(row => Object.keys(row).some(key => String(row[key]).toLowerCase().includes(filterKey)));
            }
            if (sortKey) {
                data = data.slice().sort(function (a, b) {
                    a = a[sortKey];
                    b = b[sortKey];
                    return (a === b ? 0 : a > b ? 1 : -1) * order;
                });
            }
            return data;
        }
    },
    filters: {
        capitalize: function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    },
    methods: {
        sortBy(key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
        },
        capitalize(str) {
            if (!str) return '';
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        // 기타 메소드...
    }
};
</script>

<style scoped>
table {
    border: 2px solid #DFD6BF;
    border-radius: 3px;
    background-color: #fff;
}

th {
    background-color: #DFD6BF;
    color: rgba(255, 255, 255, 0.66);
    cursor: pointer;
    user-select: none;
}

td {
    background-color: #f9f9f9;
}

th,
td {
    padding: 10px 20px;
}

th.active {
    color: #fff;
}

th.active .arrow {
    opacity: 1;
}

.arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
}

.arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
}

.arrow.desc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
}
</style>