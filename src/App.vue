<script setup>

import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth';
import Login from '@/views/LoginView.vue';

const store = useAuthStore();

</script>

<template>


    <Login v-if="!store.isAuthenticated"></Login>

    <header v-else>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <a href="#" @click="store.logout">Logout</a>
        </nav>
    </header>
    <RouterView v-if="store.isAuthenticated" />


</template>
