<script setup>
import { Card, Button, FloatLabel, InputText, ProgressBar, Message, DataTable, Column } from "primevue";
import { useUsuarioStore } from '@/stores/sistema/usuarioStore.js'
import { provide, ref } from "vue";
import UsuarioModal from "./UsuarioModal.vue";

const store = useUsuarioStore()
store.carregar();

const modal = ref(false)
provide("modal", modal)

function novo() {
    store.limpar();
    modal.value = true
}

function editar(usuario) {
    store.buscarPorCodigo(usuario.codigo)
    modal.value = true
}

function remover(usuario) {
    alert("remover")
}


</script>

<template>

    <Card>
        <template #title>
            <div class="flex justify-between">
                <span>Usuario </span>
                <Button icon="pi pi-plus" label="Criar" severity="contrast" @click="novo"></Button>
            </div>
        </template>

        <template #content>

            <FloatLabel class="mb-4" variant="on">
                <InputText v-model="store.filtro" class="w-3/4" />
                <label>Buscar</label>
            </FloatLabel>

            <div class="mb-4" v-if="store.loadingbusca">
                <span class="font-normal">Carregando...</span>
                <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
            </div>

            <div v-else>

                <Message v-if="store.busca.length === 0" severity="info" size="large">
                    Nenhum Usuario encontrado
                </Message>
                <div v-else>
                    <Message severity="secondary" class="mb-4">
                        {{ store.busca.length }} Usuario(s) encontrado(s) de {{ store.lista.length }} no total.
                    </Message>

                    <DataTable :value="store.busca" tableStyle="min-width: 50rem">

                        <Column field="codigo" header="Código" sortable> </Column>
                        <Column field="nome" header="Nome" sortable> </Column>

                        <Column header="Ações" class="flex justify-end mr-4">
                            <template #body="slotProps">
                                <div class="flex justify-end">
                                    <Button icon="pi pi-pencil" aria-label="Editar" class="mr-2" size="small"
                                        @click="editar(slotProps.data)"></Button>

                                    <Button icon="pi pi-trash" severity="danger" aria-label="Remover" size="small"
                                        @click="remover(slotProps.data)"></Button>
                                </div>
                            </template>
                        </Column>

                    </DataTable>
                </div>
            </div>

        </template>

    </Card>


    <UsuarioModal></UsuarioModal>



</template>