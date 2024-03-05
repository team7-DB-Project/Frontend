<template>
    <div>
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
                <tr v-for="(item, index) in paginatedData" :key="index">
                    <td>{{ item.order }}</td>
                    <td>{{ item.paymentId }}</td>
                    <td>{{ formatAccount(item.amount) }}</td>
                    <td>{{ item.storeName }}</td>
                    <td>{{ formatDate(item.date) }}</td>
                </tr>
            </tbody>
        </table>
        <nav aria-label="Page navigation">
            <ul class="pagination">
                <li class="page-item">
                    <button @click="changePageSet(-1)" class="page-link">이전</button>
                </li>
                <li v-for="page in visiblePages" :key="page" class="page-item">
                    <button @click="changePage(page)" class="page-link">{{ page }}</button>
                </li>
                <li class="page-item">
                    <button @click="changePageSet(1)" class="page-link">다음</button>
                </li>
            </ul>
        </nav>


    </div>
</template>

<script>
export default {
    props: {
        data: Array,
        columns: Array
    }, computed: {
        totalPages() {
            return Math.ceil(this.data.length / this.pageSize);
        },
        paginatedData() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.data.slice(start, end);
        },
        visiblePages() {
            const startPage = (this.currentPageSet - 1) * 10 + 1;
            const endPage = Math.min(startPage + 9, this.totalPages);
            const pages = [];
            for (let page = startPage; page <= endPage; page++) {
                pages.push(page);
            }
            return pages;
        },
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
        }, sort(column) {
            const newSortOrder = this.currentSortOrder === 'asc' ? 'desc' : 'asc';
            this.$emit('sort-request', { sortColumn: column, sortOrder: newSortOrder });
            this.currentSortOrder = newSortOrder;
        },
        changePage(page) {
            this.currentPage = page;
        },
        changePageSet(direction) {
            const newPageSet = this.currentPageSet + direction;
            const totalPageSets = Math.ceil(this.totalPages / 10);

            if (newPageSet > 0 && newPageSet <= totalPageSets) {
                this.currentPageSet = newPageSet;

                // 페이지 세트 변경 시 첫 페이지로 이동
                this.currentPage = (newPageSet - 1) * 10 + 1;
            }
        },
    },
    data() {
        return {
            currentSortColumn: null,
            currentSortOrder: 'asc',
            currentPage: 1,
            pageSize: 10,
            currentPageSet: 1, // 현재 페이지 세트
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

li {
    list-style-type: none;
}
.pagination {
    display: flex;
    justify-content: center; /* 중앙정렬 */
    padding-left: 0; /* 기본 padding 제거 */
    list-style: none; /* 기본 list 스타일 제거 */
}

.page-item {
    margin: 0 5px; /* 페이지 버튼 간 간격 조정 */
}

.page-link {
    cursor: pointer; /* 마우스 오버 시 커서 변경 */
    background-color: #f0f0f0; /* 버튼 배경색 */
    border: 1px solid #dcdcdc; /* 버튼 테두리 */
    padding: 5px 10px; /* 버튼 내부 padding */
    text-decoration: none; /* 링크 밑줄 제거 */
    color: black; /* 버튼 글자색 */
}

</style>