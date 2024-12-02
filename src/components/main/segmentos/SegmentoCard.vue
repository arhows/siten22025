<script setup>
import { computed } from 'vue';



const prop = defineProps({
    segmento: {
        type: Object,
        required: true
    }
})

const src = computed(() => {
    return `/imagens/icons/segmentos/512/${prop.segmento.icon}`
})

</script>

<template>
    <div class="card">
        <div class="icon">
            <img :src :alt="`Imagem da funcionalidade ${segmento.title}`" />
        </div>
        <h3 class="title">{{ segmento.title }}</h3>
    </div>
</template>



<style scoped>
.card {
    padding: 1em;
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 0.05rem solid #5a385c;
    cursor: pointer;
    transition: all 250ms ease;
}

.card:hover {
    box-shadow: 0.2rem 0.5rem 0.5rem rgba(29, 53, 87, 0.2);
    transform: scale(1.01);
    border-color: #40f99b;
}

.card .icon img {
    display: block;
    width: 10rem;
}

.card .title {
    color: #404447;
}
</style>