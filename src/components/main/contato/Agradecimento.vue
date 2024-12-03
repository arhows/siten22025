<script setup>

</script>

<template>
    <div class="agradecimento-contato">
        <img src="/imagens/icons/contato/512/happy_icon.png" alt="Imagem sorrindo de agradecimento">
        <div class="text">
            <h3>Agradecemos muito pelo seu contato!</h3>
            <h4>Em breve, um membro de nossa equipe entrará em contato para entender melhor como podemos ajudá-lo.</h4>
        </div>
    </div>
</template>



<style scoped>
.agradecimento-contato {
    position: relative;
    padding: 3.5rem 5rem;
    max-width: 650px;
    width: 100%;
    margin: 2rem auto 0;
    height: 63rem;
    text-align: center;
}

.agradecimento-contato img {
    display: block;
    width: 200px;
    height: 200px;
    margin: 2em auto 3em;
    background-color: #40f99b;
    border-radius: 50%;
    padding: 2em;
    box-shadow: .3px .3px 5px rgba(0, 0, 0, 0.5);
    animation: pulsar 1.5s ease-in-out infinite;
}

@keyframes pulsar {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }
}

.text h3 {
    text-transform: uppercase;
    color: #5a385c;
}

.text h4 {
    color: rgba(0, 0, 0, 0.733)
}
</style>