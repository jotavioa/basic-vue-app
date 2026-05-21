<script setup>
import { RouterView } from 'vue-router';
import MenuSuperior from "@/views/components/MenuSuperior.vue"
import SideMenu from './views/components/SideMenu.vue';

</script>

<template>

  <div class="min-h-screen bg-gray-200">


    <MenuSuperior></MenuSuperior>
    <SideMenu></SideMenu>

    <div class="pt-2 px-2">
      <RouterView />
    </div>


  </div>

</template>

<style scoped></style>