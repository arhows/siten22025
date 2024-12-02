<script setup>
import { ref } from 'vue';
import WhatsForm from './WhatsForm.vue';
import WhatsIcon from './WhatsIcon.vue';

let show = ref(false)

const toogleForm = () => {
    show.value = !show.value;
}


</script>

<template>
    <div class="whatsapp-container">

        <WhatsForm v-if="show" @toogleForm="toogleForm" />
        <WhatsIcon v-else @toogleForm="toogleForm" />

    </div>
</template>



<style scoped>
.whatsapp-container {
    position: fixed;
    bottom: 4rem;
    right: 4rem;
    z-index: 995;
}
</style>