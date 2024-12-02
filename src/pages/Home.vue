<script setup>

import Hero from '../components/header/hero/Hero.vue';
import Funcionalidades from '../components/main/funcionalidades/Funcionalidades.vue';
import Navbar from '../components/header/navbar/Navbar.vue';
import SegmentoFrase from '../components/main/segmentos/SegmentoFrase.vue';
import Segmentos from '../components/main/segmentos/Segmentos.vue';
import SobreNos from '../components/main/sobre-nos/SobreNos.vue';
import FooterPage from '../components/footer/Footer.vue';
import Whats from '../components/whats/Whats.vue';
import Contato from '../components/main/contato/Contato.vue';

</script>

<template>

    <Navbar />
    <Hero />

    <main>
        <Funcionalidades />
        <SegmentoFrase />
        <Segmentos />
        <Contato />
        <SobreNos />
    </main>

    <FooterPage />

    <Whats />


</template>



<style scoped></style>