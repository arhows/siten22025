<script setup>

</script>

<template>
    <section class="gestao-facilitada-por-segmentos">
        <div class="container">
            <div class="gestao-facilitada-por-segmentos__conteudo">

                <blockquote>
                    <img class="quoted left" src="/imagens/icons/segmentos/256/left_quote.png" alt="Quoted Left" />
                    Gestão facilitada para vários segmentos, <br />
                    de pequenas lojas a grandes mercados!
                    <img class="quoted right" src="/imagens/icons/segmentos/256/quote_right.png" alt="Quoted Right" />
                </blockquote>

            </div>
        </div>
    </section>
</template>



<style scoped>
.gestao-facilitada-por-segmentos {
    background-color: #5a385c;
    color: #ffffff;
}

.gestao-facilitada-por-segmentos__conteudo {
    width: minmax(400px, 650px);
    position: relative;
}

.gestao-facilitada-por-segmentos__conteudo blockquote {
    font-size: 5rem;
    font-weight: 200;
    line-height: 1.2;
    text-align: center;
    position: relative;
}

.quoted {
    position: absolute;
    width: 2em;
}

.quoted.left {
    top: -8rem;
    left: 0;
}

.quoted.right {
    bottom: -8rem;
    right: 0;
}

@media (max-width: 1300px) {
    .quoted {
        width: 1.5em;
    }

    .gestao-facilitada-por-segmentos__conteudo blockquote {
        font-size: 4rem;
    }
}

@media screen and (max-width: 500px) {
    .gestao-facilitada-por-segmentos__conteudo blockquote {
        font-size: 2.5rem;
    }

    .quoted.left {
        top: -5rem;
    }

    .quoted.right {
        bottom: -5rem;
    }
}
</style>