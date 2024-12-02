<script setup>
import { reactive } from 'vue';
import SegmentoCard from './SegmentoCard.vue';


const segmentos = reactive([
    { id: 1, title: "Vestuário e Calçados", icon: "moda.png" },
    { id: 2, title: "Material Construção", icon: "construcao.png" },
    { id: 3, title: "Mercados e Mercerias", icon: "mercearias.png" },
    { id: 4, title: "Casa de Carnes", icon: "acougues.png" },
    { id: 5, title: "Depósito de Bebidas", icon: "bebidas.png" },
    { id: 6, title: "Distribuidoras", icon: "distribuidoras.png" },
    { id: 7, title: "Papelarias e Aviamentos", icon: "papelarias.png" },
    { id: 8, title: "Indústria Química", icon: "quimica.png" },
    { id: 9, title: "Casa de Tintas", icon: "tintas.png" }
])

</script>

<template>
    <section id="segmentos" class="segmentos-que-atuamos">
        <h2 class="section-title">Segmentos que Atendemos</h2>

        <div class="container">
            <div class="segmentos-que-atuamos__conteudo">
                <SegmentoCard v-for="segmento in segmentos" :key="segmento.id" :segmento />
            </div>
        </div>
    </section>
</template>



<style scoped>
.segmentos-que-atuamos {
    background-color: #fff;
}

.segmentos-que-atuamos__conteudo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: 20px;
}

.segmentos-que-atuamos .section-title {
    color: #5a385c;
}

.segmentos-que-atuamos .section-title::after {
    background-color: #40f99b;
}

.segmentos-que-atuamos h4 {
    text-align: center;
    padding: 1em 0;
}

@media (max-width: 1025px) {
    .segmentos-que-atuamos__conteudo {
        padding-block: 1rem;
    }
}
</style>