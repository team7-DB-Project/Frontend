<template>
    <DefaultHeader></DefaultHeader>
    <DefaultNav></DefaultNav>
    <MainComponents></MainComponents>
</template>

<script>
import DefaultHeader from '../DefaultFrame/DefaultHeader.vue';
import DefaultNav from '../DefaultFrame/DefaultNav.vue';
import MainComponents from './MainComponents.vue';
export default {
    components: {
    DefaultNav,
    DefaultHeader,
    MainComponents
}
}
</script>