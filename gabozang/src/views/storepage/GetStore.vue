<template>
    <div class="storeId-detail-container">
        <h1>점포 상세 정보</h1>
        <div v-if="!isEditing">
            <p>점포 ID: {{ storeId.id }}</p>
            <p>이름: {{ storeId.name }}</p>
            <p>지역: {{ storeId.location }}</p>
            <p>최대수용: {{ storeId.maximumCapacity }}</p>
            <p>별점: {{ storeId.rating }}</p>
            <p>이미지: {{ storeId.imageUrl }}</p>
            <p>전화번호: {{ storeId.phoneNumber }}</p>
            <p>생성 날짜: {{ storeId.createdAt }}</p>
            <p>업데이트 날짜: {{ storeId.updatedAt }}</p>
            <!-- 기타 필요한 정보 필드 추가 -->
            <button @click="editEmployee">수정</button>
        </div>
        <div v-else>
            <form @submit.prevent="updateEmployee">
                <div>
                    <label for="name">이름:</label>
                    <input id="name" v-model="storeId.name">
                </div>
                <div>
                    <label for="location">지역:</label>
                    <input id="location" v-model="storeId.location">
                </div>
                <div>
                    <label for="maximumCapacity">최대 수용:</label>
                    <input id="maximumCapacity" v-model="storeId.maximumCapacity" type="number">
                </div>
                <div>
                    <label for="rating">별점:</label>
                    <input id="rating" v-model="storeId.rating" type="number">
                </div>
                <div>
                    <label for="imageUrl">사진:</label>
                    <input id="imageUrl" type="file" @change="handleFileUpload">
                </div>

                <div>
                    <label for="phoneNumber">전화번호:</label>
                    <input id="phoneNumber" v-model="storeId.phoneNumber">
                </div>
                <!-- 기타 필요한 정보 필드 추가 -->
                <button type="submit">저장</button>
                <button @click="cancelEdit">취소</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {

    props: ['id'],
    data() {
        return {
            storeId: {}, // 직원 정보를 저장할 객체
            isEditing: false, // 편집 모드인지 여부를 결정
        };
    },
    async mounted() {
        await this.fetchEmployeeDetail();
    },
    methods: {
        async fetchEmployeeDetail() {
            try {
                // 올바르게 변수를 포함한 템플릿 리터럴 사용
                const response = await axios.get(`http://15.164.225.110:8080/store/${this.id}`);
                this.storeId = response.data;
            } catch (error) {
                console.error('점포 정보를 불러오는 중 오류가 발생했습니다:', error);
            }
        },
        editEmployee() {
            this.isEditing = true;
        }, async updateEmployee() {
            try {
                const response = await axios.post(`http://15.164.225.110:8080/store/${this.id}`, this.storeId);

                // 예를 들어, 서버로부터 받은 업데이트된 직원 정보를 로컬 상태에 반영
                this.storeId = response.data;

                this.isEditing = false;
                alert('점포 정보가 성공적으로 업데이트되었습니다.');
            } catch (error) {
                console.error('점포 정보를 업데이트하는 동안 오류가 발생했습니다:', error);
            }
        }
        ,
        cancelEdit() {
            this.isEditing = false;
        },
    },
};
</script>

<style>
/* 스타일 추가 */
.storeId-detail-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.storeId-detail-container div {
    margin-bottom: 10px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    margin-bottom: 20px;
}

button {
    padding: 10px 15px;
    margin-right: 10px;
}
</style>