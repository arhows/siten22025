<script setup>
import { computed } from 'vue';


const prop = defineProps({
    card: {
        type: Object,
        required: true,
    }
})

const src = computed(() => {
    return `/imagens/icons/funcionalidades/48/${prop.card.icon}`
})

</script>



<template>
    <div class="card">
        <div class="icon">
            <img :src :alt="`Imagem da funcionalidade ${card.titulo}`" />
        </div>
        <div class="text">
            <h3>{{ card.titulo }}</h3>
            <p>
                {{ card.descritivo }}
            </p>
        </div>
    </div>
</template>



<style scoped>
.card {
    background: #fff;
    padding: 2rem;
    border-radius: var(--border-radius);
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: flex-start;
}

.card .icon img {
    display: block;
    width: 5rem;
}

.card h3 {
    color: #5a385c;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.8rem;
}

.card p {
    color: #404447;
    font-size: 1.4rem;
    line-height: 1.5;
}
</style>