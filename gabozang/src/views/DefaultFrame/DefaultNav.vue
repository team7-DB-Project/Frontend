<template>
    <nav id="sideNav">
        <h3>가보장<br />관리 시스템</h3>
        <ul class="nav-container">
            <li class="nav-item" :class="{ 'active': $route.name === 'MainIntro' }"><router-link to="/main">메인</router-link></li>
            <li class="nav-item" :class="{ 'active': $route.name === 'Store' }"><router-link to="/stores">점포</router-link></li>
            <li class="nav-item" :class="{ 'active': $route.name === 'Employees' }"><router-link to="/employees">직원</router-link></li>
            <li class="nav-item" :class="{ 'active': $route.name === 'Review' }"><router-link to="/review">후기</router-link></li>
            <li class="nav-item" :class="{ 'active': $route.name === 'Calculate' }"><router-link to="/calculate">정산</router-link></li>
        </ul>
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
    width: 15%;
    position: fixed;
    z-index: 1;
    top: 0;
    padding-top: 3em;
}

h3 {
    margin-left: 0.8em;
    margin-right: 0.8em;
    font-size: 2em;
    font-weight: 600;
    padding-bottom: 2em;
}

.nav-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.nav-item {
    width: 100%;
    text-align: center;
    font-size: 1.5em;
}

.nav-item a {
    display: block;
    width: 100%;
    color: inherit;
    text-decoration: none;
    background-color: transparent;
    transition: background-color 1s ease, opacity 1s ease;
    padding-top: 1.1em;
    padding-bottom: 1.1em;
}

.nav-item a:hover {
    background-color: rgba(238, 238, 238, 0.5);
}

.nav-item.active {
    background-color: rgba(238, 238, 238, 0.5);
}</style>