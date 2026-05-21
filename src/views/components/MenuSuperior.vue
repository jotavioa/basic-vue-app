<script setup>
import { Toolbar, Button } from "primevue";
import { useRouter } from "vue-router";
import { useMenuStore } from "@/stores/ui/sidemenu";


const store = useMenuStore();
const router = useRouter();

</script>
<template>

    <Toolbar>
        <template #start>
            <Button icon="pi pi-bars" class="mr-8" @click="store.toggle"> </Button>
            <Button label="Home" class="text-xl font-bold p-0" severity="secondary" @click="router.push('/')"></Button>
        </template>

        <template #end>
            <Button icon="pi pi-sign-out" class="mr-2" severity="secondary" text> </Button>
        </template>
    </Toolbar>

</template>