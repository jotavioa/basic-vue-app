<script setup>

import { Button } from 'primevue';
import { useMenuStore } from "@/stores/ui/sidemenu.js"
import router from "@/router/index.js";

const props = defineProps(["texto", "icon", "route"])
const store = useMenuStore();

function redirect(){
    if (props.route) {
        router.push(props.route);
        store.toggle();
    }
}

</script>
<template>
    <Button text severity="contrast" class="w-full" @click="redirect">
        <div class="w-full text-left text-md">
            <i :class="props.icon"></i>
            <span class="p-3">{{ props.texto }}</span>
        </div>
    </Button>
</template>