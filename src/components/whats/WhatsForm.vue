<script setup>

defineEmits(["toogleForm"])

</script>

<template>

    <div id="whatsapp-chat" class="whatsapp-chat">
        <div class="whatsapp-header">
            <span class="whatsapp-title">Está com alguma dúvida?</span>
            <button id="close-btn" class="close-btn" @click="$emit('toogleForm')">✕</button>
        </div>
        <div class="whatsapp-message">
            <p>Nós podemos te ajudar!</p>
        </div>
        <a href="https://wa.me/5516999886837?text=Gostaria de falar com um especialista para conhecer mais sobre o ERP"
            target="_blank" class="whatsapp-button">
            <span>📞 Envie uma mensagem</span>
        </a>
        <div class="whatsapp-status">
            <span class="status-dot"></span> Online
        </div>
    </div>




</template>

<style scoped>
.whatsapp-chat {
    display: block;
    width: 300px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    opacity: 1;
    transform: translateY(20px);
    transition: all 0.3s ease-in-out;
}


.whatsapp-header {
    background: #075e54;
    color: #fff;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.whatsapp-title {
    font-size: 16px;
    font-weight: bold;
}

.close-btn {
    background: none;
    border: none;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
}

.whatsapp-message {
    background: #e5fff3;
    padding: 15px;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
}

.whatsapp-button {
    display: block;
    background: #25d366;
    color: #fff;
    text-align: center;
    text-decoration: none;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 0 0 8px 8px;
}

.whatsapp-button:hover {
    background: #1ebe5b;
}

.whatsapp-status {
    font-size: 12px;
    color: #555;
    padding: 10px;
    text-align: center;
    background: #f9f9f9;
    border-top: 1px solid #ccc;
}

.status-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #25d366;
    border-radius: 50%;
    margin-right: 5px;
}
</style>