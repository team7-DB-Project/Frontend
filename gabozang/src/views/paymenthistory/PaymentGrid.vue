<template>
    <table>
        <thead>
            <tr>
                <th v-for="column in columns" :key="column.field" @click="sort(column.field)">
                    {{ column.label }}
                    <span class="arrow"
                        :class="{ 'asc': currentSortColumn === column.field && currentSortOrder === 'asc', 'desc': currentSortColumn === column.field && currentSortOrder === 'desc' }"></span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in data" :key="index">
                <td>{{ item.order }}</td>
                <td>{{ item.paymentId }}</td>
                <td>{{ formatAccount(item.amount) }}</td>
                <td>{{ item.storeName }}</td>
                <td>{{ formatDate(item.date) }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        data: Array,
        columns: Array
    },
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
            const year = date.getFullYear();
            const month = ('0' + (date.getMonth() + 1)).slice(-2);
            const day = ('0' + date.getDate()).slice(-2);
            const hours = ('0' + date.getHours()).slice(-2);
            const minutes = ('0' + date.getMinutes()).slice(-2);
            const seconds = ('0' + date.getSeconds()).slice(-2);

            return `${year}년 ${month}월 ${day}일  ${hours}:${minutes}:${seconds}`;
        },
        formatAccount(amount) {
            return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(amount);
        },
        sort(column) {
            const newSortOrder = this.currentSortOrder === 'asc' ? 'desc' : 'asc';
            this.$emit('sort-request', { sortColumn: column, sortOrder: newSortOrder });
            this.currentSortOrder = newSortOrder;
        },
    },
    data() {
        return {
            currentSortColumn: null,
            currentSortOrder: 'asc', // 'asc' 또는 'desc'
        };
    },

}

</script>

<style>
table {
    border: 2px solid #DFD6BF;
    border-radius: 3px;
    background-color: #fff;
    width: 100%;
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