<script setup>

defineEmits(["toogleForm"])

</script>


<template>
    <div id="whatsapp-float" class="whatsapp-float" @click="$emit('toogleForm')">
        <img src="/imagens/img/social_icons/whatsapp.png" alt="WhatsApp" />
    </div>
</template>



<style scoped>
@keyframes pulse {
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 rgba(37, 211, 102, 0.7);
    }

    50% {
        transform: scale(1.1);
        box-shadow: 0 0 15px rgba(37, 211, 102, 0.5);
    }

    100% {
        transform: scale(1);
        box-shadow: 0 0 0 rgba(37, 211, 102, 0);
    }
}

.whatsapp-float {
    width: 60px;
    height: 60px;
    background: #25d366;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    animation: pulse 1.4s infinite;
    /* Animação de pulsação infinita */
    transition: background 250ms ease;
}

.whatsapp-float img {
    width: 35px;
    height: 35px;
}

.whatsapp-float:hover {
    background: #1ebe5b;
}
</style>