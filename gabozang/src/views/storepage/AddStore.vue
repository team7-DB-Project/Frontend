<template>
    <div class="storeId-detail-container">
        <h1>점포 추가</h1>
        <div v-if="!isEditing">
            <form @submit.prevent="addStore">
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
                    <label for="images">사진:</label>
                    <input id="images" type="file" @change="handleFileUpload">
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

export default {
    data() {
        return {
            storeId: {}, // 점포 정보를 저장할 객체
            selectedFile: null, // 파일 데이터를 저장할 변수
            isEditing: false,
        };
    },
    methods: {
        handleFileUpload(event) {
            this.selectedFile = event.target.files[0];
        },cancelEdit() {
        this.isEditing = false;
        this.$router.push({ name: 'store' });
    },
        async addStore() {
    var xhr = new XMLHttpRequest();
    var formData = new FormData();
    
    // 이미지 파일이 선택되었으면 FormData에 추가
    if (this.selectedFile) {
        formData.append('images', this.selectedFile);
    }

    // 점포 정보 추가
    formData.append('storeReqInfo', new Blob([JSON.stringify({
        name: this.storeId.name,
        location: this.storeId.location,
        maximumCapacity: this.storeId.maximumCapacity,
        rating: this.storeId.rating,
        phoneNumber: this.storeId.phoneNumber,
    })], { type: "application/json" }));

    xhr.open("POST", "http://15.164.225.110:8080/store", true);

    // 서버 응답을 처리
    xhr.onload = function () {
        if (xhr.status === 200) {
            alert('점포 정보와 이미지가 성공적으로 추가되었습니다.');
        } else {
            alert('점포 정보 추가에 실패했습니다.');
        }
    };

    // 에러 처리
    xhr.onerror = function () {
        alert('점포 정보 추가 중 오류가 발생했습니다.');
    };

    // 요청 전송
    xhr.send(formData);
}
    },
    
}

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