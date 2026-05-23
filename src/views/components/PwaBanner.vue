<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Message, Button } from "primevue";

const deferredPrompt = ref(null)

const capturarEvento = (e) => {
    // Impede o Chrome de mostrar o comportamento padrão (se houver)
    e.preventDefault()
    // Guarda o evento para ser disparado quando o usuário clicar no botão
    deferredPrompt.value = e
}

onMounted(() => {
    window.addEventListener('beforeinstallprompt', capturarEvento)
})

onUnmounted(() => {
    window.removeEventListener('beforeinstallprompt', capturarEvento)
})

const instalarPWA = async () => {
    if (!deferredPrompt.value) return

    // Mostra o prompt nativo de instalação do Android
    deferredPrompt.value.prompt()

    const { outcome } = await deferredPrompt.value.userChoice
    console.log(`Usuário escolheu: ${outcome}`)

    deferredPrompt.value = null
}

</script>

<template>
    <div v-if="deferredPrompt">
        <Message class="flex justify-center" severity="secondary">
            <div class="flex items-center gap-2 mb-2">
                <i class="pi pi-info-circle text-2xl"></i>
                <span class="text-md">Este site pode ser instalado como um aplicativo.</span>
            </div>
            <div class="flex justify-center gap-2">
                <Button @click="instalarPWA" severity="info">Instalar</Button>
                <Button @click="deferredPrompt = null" severity="contrast">Agora não</Button>
            </div>
        </Message>
    </div>
</template>