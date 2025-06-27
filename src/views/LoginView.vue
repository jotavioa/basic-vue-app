<script setup>
import { useAuthStore } from '@/stores/auth';
const store = useAuthStore();
</script>

<template>

    <main>
        <h1>Login Page</h1>
        <button @click="store.login">Login</button>
    </main>

</template>
