<script setup>
import { RouterView } from 'vue-router';
import TheNav from './components/TheNav.vue'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
    <!-- <TheNav /> -->
    <!-- Header-->
    <TheHeader />
    <!-- Section-->
    <section class="py-5">
        <router-view> </router-view>
    </section>

    <!-- Footer-->
    <TheFooter />
</template>

<style scoped></style>
