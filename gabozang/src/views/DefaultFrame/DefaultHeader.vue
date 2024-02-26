<template>
    <header>
        <div id="headline">
            <div class="headline-menu">
                <ul>
                    <li class="lst">이름</li>
                    <li class="lst">직책</li>
                    <li><button class="btn btn-primary">로그아웃</button></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            boxPadding: '20px'
        }
    }
}
</script>

<style scoped>
header {
    border-bottom: 1px solid #e6e6e6;
}

.headline-menu {
    .btn {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 600;
        font-size: 1em;
        color: #343532;
        background-color: #DFD6BF;
        bottom: 50%;
        border: none;
        border-radius: 0.5em;
        min-height: 2.5em;
        min-width: 7em;
        display: inline-block;
    }

    .btn:hover {

        background-color: #dfb64f;
    }

    ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-top: 1.5em;
        padding-bottom: 1.5em;
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 600;
        border-bottom: 1px solid #E6E6E6;
        font-size: 1.4em;
        text-align: center;
        padding: 2em;

        .lst {
            opacity: 0.6;
        }
    }

    ul li {
        padding-left: 3em;
    }
}
</style>