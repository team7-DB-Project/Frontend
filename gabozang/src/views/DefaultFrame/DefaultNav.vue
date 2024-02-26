<template>
    <nav id="sideNav">
        <h3>가보장<br />관리 시스템</h3>
        <ul class="nav-container">
            <li class="nav-item" :class="{'active': $route.name === 'Home' }"><router-link to="/">메인</router-link></li>
            <li class="nav-item" :class="{'active': $route.name === 'Store' }"><a href="#">점포</a></li>
            <li class="nav-item" :class="{'active': $route.name === 'Employee '}"><a href="#">직원</a></li>
            <li class="nav-item" :class="{'active': $route.name === 'Review '}"><a href="#">후기</a></li>
            <li class="nav-item" :class="{'active': $route.name === 'Account '}"><a href="#">정산</a></li>
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
    width: 20%;
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

.nav-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.nav-item{
    width: 100%;
    text-align: center;
    font-size: 1.5em;
}
.nav-item a{
    display: block;
    width: 100%;
    color: inherit;
    text-decoration: none;
    background-color: transparent;
    transition: background-color 1s ease, opacity 1s ease;
   padding-top: 1.1em;
   padding-bottom: 1.1em;
}
.nav-item a:hover{
        background-color: rgba(238, 238, 238, 0.5);
    }
</style>