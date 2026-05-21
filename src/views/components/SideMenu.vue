<script setup>
import { Drawer, Accordion, AccordionPanel, AccordionHeader, AccordionContent, Button } from 'primevue';
import { useMenuStore } from "@/stores/ui/sidemenu.js"
import SideMenuItem from './SideMenuItem.vue';

const store = useMenuStore();

</script>
<template>

    <Drawer v-model:visible="store.visible" :show-close-icon="false">

        <Accordion :value="['0']" multiple>

            <AccordionPanel value="0">
                <AccordionHeader>Cadastros</AccordionHeader>

                <AccordionContent>

                    <SideMenuItem texto="Cliente" icon="pi pi-briefcase" route="cliente" />

                </AccordionContent>

            </AccordionPanel>

            <AccordionPanel value="1">
                <AccordionHeader>Sistema</AccordionHeader>
                <AccordionContent>
                    <SideMenuItem texto="Usuário" icon="pi pi-user" route="usuario" />
                    <SideMenuItem texto="Perfil" icon="pi pi-unlock" route="perfil" />
                </AccordionContent>
            </AccordionPanel>

        </Accordion>



    </Drawer>
</template>