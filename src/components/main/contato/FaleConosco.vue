<script setup>
import { ref } from 'vue';
import ContatoForm from './ContatoForm.vue';
import Agradecimento from './Agradecimento.vue';



const showAgradecimento = ref(false);

const handleShowAgradecimento = () => {
    showAgradecimento.value = true;

    setTimeout(() => {
        showAgradecimento.value = false;
    }, 3000)
}



</script>

<template>
    <section id="contato" class="fale-conosco">
        <div class="container">

            <Agradecimento v-if="showAgradecimento" />
            <ContatoForm v-else @handle-show-agradecimento="handleShowAgradecimento" />
        </div>
    </section>
</template>



<style scoped>
.fale-conosco {
    background-color: rgba(64, 249, 155, 0.1)
}
</style>