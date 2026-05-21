<script setup>

import { useUsuarioStore } from '@/stores/sistema/usuarioStore';
import { Dialog, FloatLabel, InputText, Button, Message } from 'primevue';
import { inject, ref, watch } from 'vue';
import useValidator from '@/validators/sistema/usuario.js';

const modal = inject('modal');
const showErrorsMessage = ref(false);

const store = useUsuarioStore();
let validator = useValidator(store.usuario);

watch(modal, () => {
    if (!modal.value) {
        showErrorsMessage.value = false;
    }
    validator.value = useValidator(store.usuario);
})

function salvar() {
    if (!validator.value.$invalid) {
        store.salvar();
        modal.value = false;
        showErrorsMessage.value = false;
    } else {
        showErrorsMessage.value = true;
    }
}

</script>
<template>

    <Dialog v-model:visible="modal" modal header="Usuario" class="w-3/4">

        <div v-if="showErrorsMessage" class="pt-1 pb-5">
            <Message severity="error">Verifique os erros de validação</Message>
        </div>

        <div class="grid grid-cols-8 gap-4 py-2">

            <div class="col-span-1">
                <FloatLabel variant="on">
                    <InputText v-model="store.usuario.codigo" class="w-full" disabled />
                    <label for="codigo">Código</label>
                </FloatLabel>
            </div>

            <div class="col-span-6">
                <FloatLabel variant="on">
                    <InputText v-model="store.usuario.nome" class="w-full"
                        :invalid="validator.nome.$silentErrors.length > 0" />
                    <label for="tipo">Nome</label>
                </FloatLabel>
                <Message v-for="error in validator.nome.$silentErrors" severity="error" size="small" variant="simple">
                    {{ error.$message }}
                </Message>
            </div>

        </div>

        <div class=" flex justify-end gap-2 pt-2">
            <Button type="button" label="Cancelar" severity="secondary" @click="modal = false"></Button>
            <Button type="button" label="Salvar" @click="salvar"></Button>
        </div>

    </Dialog>

</template>