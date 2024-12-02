<script setup>

</script>

<template>
    <section id="sobre" class="sobre-nos">
        <div class="container">
            <div class="sobre-nos__titulo">
                <img src="/imagens/icons/historia/historia.png" alt="Imagem Titulo Verificado" />
                <h3>Nossa História</h3>
            </div>

            <div class="sobre-nos__conteudo">
                <p class="text">
                    "A N2 Sistemas foi fundada em maio de 2016 pelos irmãos Luiz e Rogério Nascimento, unindo visão
                    empreendedora e paixão pela tecnologia. Desde o início, o objetivo foi oferecer soluções
                    tecnológicas de qualidade, confiança e agilidade.
                    <br>
                    <br>
                    <br>
                    Com mais de 250 clientes e 2.000 usuários, a N2 investe constantemente em inovação, ampliando
                    recursos e funcionalidades para atender às necessidades específicas de cada segmento. Comprometida
                    com ética, confiança e foco no cliente, a empresa busca ajudar parceiros a alcançar novos patamares
                    de sucesso.
                </p>
                <div class="company">
                    <img src="/imagens/img/nos.jpg" alt="Imagem sobre a empresa">
                </div>
            </div>
        </div>
    </section>
</template>



<style scoped>
.sobre-nos {
    background-color: rgba(90, 56, 92, 0.05);
}

.sobre-nos__conteudo {
    display: flex;
    gap: 1em;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
}

.text {
    max-width: 650px;
}

.company {
    overflow: hidden;
    border-radius: var(--border-radius);
}

.company img {
    display: block;
    width: 100%;
    height: auto;
}

.sobre-nos__conteudo p {
    margin-top: 0;
    color: #404447;
}

.sobre-nos__titulo {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1em 0;
}

.sobre-nos__titulo img {
    width: auto;
    height: 60px;
}

.sobre-nos h3 {
    color: #5a385c;
}

@media (max-width: 1000px) {
    .company {
        display: none;
    }

    .text {
        max-width: 98vw;
        columns: 2;
    }
}

@media (max-width: 800px) {
    .sobre-nos {
        padding: 0 1rem 2rem;
    }

    .text {
        columns: 1;
    }




}
</style>