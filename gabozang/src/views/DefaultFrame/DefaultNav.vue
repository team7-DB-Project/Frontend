<template>
    <nav id="sideNav">
        <h3>가보장<br />관리 시스템</h3>
        <div class="menubar">
            <a href="#" class="link-area">
                <div class="link-content">메인</div>
            </a>
            <a href="#" class="link-area">
                <div class="link-content">점포</div>
            </a>
            <a href="#" class="link-area">
                <div class="link-content">직원</div>
            </a>
            <a href="#" class="link-area">
                <div class="link-content">후기</div>
            </a>
            <a href="#" class="link-area">
                <div class="link-content">정산</div>
            </a>

        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
    background-color: #DFD6BF;
    height: 100%;
    width: 20%;
    position: fixed;
    z-index: 1;
    top: 0;
    padding-top: 3em;
}

h3 {
    margin-left: 0.8em;
    margin-right: 0.8em;
    /* border: 1px solid black; */
    font-size: 2em;
    font-weight: 600;
    padding-bottom: 2em;
}

.menubar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding-top: 1em;

    /* border: 1px solid black; */
    .link-area {
        color: #343532;
        font-size: 2em;
        font-weight: 600;
        border-radius: 0.1em;
        background-color: rgba(255, 255, 255, 0.5);
        /* 배경색에 투명도 적용 */
        transition: background-color 1s;
        /* 배경색에 대한 전환 효과 적용 */
        /* border: 1px solid black; */
        margin-top: 1.5em;
    }

    .link-area:hover {
        background-color: rgba(255, 255, 255, 0.5);
        /* 호버 시 배경색 유지 */
    }
}</style>