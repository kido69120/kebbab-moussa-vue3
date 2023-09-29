<script setup>
import { RouterLink } from 'vue-router';

const navList=[    
    {
        path:'/',
        label:'Home'
    },
    {
        path:'/list',
        label:'list'
    },
    {
        path:'/detail',
        label:'detail'
    }]
</script>

<template>
    <section data-bs-version="5.1" class="menu menu01 cid-sRQjR1mphb" id="menu01-7">
        <nav class="navbar navbar-fixed-top navbar-expand-lg container-fluid">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav nav-dropdown navbar-nav-top-padding ms-auto" data-app-modern-menu="true"><li class="nav-item">
                            <a class="nav-link link text-black text-primary display-7" href="index.html" aria-expanded="false">
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link text-black text-primary display-7" href="index.html#features01-1">Monsters</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link text-black text-primary display-7" href="index.html#features05-2">Lien 1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link text-black text-primary display-7" href="index.html#people02-6">Lien 2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link text-black text-primary display-7" href="index.html#features12-3">Lien 3</a>
                        </li></ul>
                    
                    <div class="navbar-buttons align-center mbr-section-btn"><a class="btn btn-primary display-4" href="index.html#form02-8">CONTACT US</a></div>
                </div>
            </div>
        </nav>
    </section>
</template>
<style scoped>

</style>