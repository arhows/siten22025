<script setup>
import { computed } from 'vue';


const prop = defineProps({
    cor: {
        type: String,
        default: 'azul'
    }
})

defineEmits(['handle-show-nav'])

const src = computed(() => {
    return `/imagens/img/logotipo/logo_${prop.cor}.png`
})

</script>

<template>
    <div class="logo">
        <a @click="$emit('handle-show-nav')" href="#"><img :src alt="Logotipo N2 Sistemas Comerciais" /></a>

    </div>
</template>



<style scoped>
.logo {
    height: 5em;
    cursor: pointer;
    transition: all 250ms ease;
}

.logo:hover {
    scale: 0.98;
}

.logo img {
    display: block;
    height: 100%;
}
</style>