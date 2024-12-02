<script setup>
import { ref } from 'vue';


import ActionButton from '../../UI/buttons/ActionButton.vue';

const textButton = ref("Quero saber mais")
const textButtonSecondary = ref("Fale conosco")
const isSecondary = ref(true)

</script>

<template>
    <header id="hero" class="hero">
        <div class="container">
            <div class="hero-content">
                <!--  -->
                <div class="hero-text">
                    <div class="hero__header">
                        <h1 class="title-cta">Transforme seu negócio hoje mesmo!</h1>
                        <h4>
                            Entre em contato e descubra como podemos fazer a diferença.
                        </h4>
                    </div>
                    <ActionButton :text="textButton" :isSizeButton="true" />
                </div>
                <picture class="hero-image">
                    <img src="/imagens/img/hero.jpg" alt="" srcset="" />
                </picture>
            </div>
        </div>
    </header>
</template>

<style scoped>
.title-cta {
    font-size: 7rem;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 0.8em;
}

.hero {
    background: linear-gradient(to right, #1d3557, rgba(29, 53, 87, 0.9)),
        url("/imagens/img/hero-bg.png") center/cover no-repeat;
    color: white;
    padding: 20rem 0 10rem;
}

.hero-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
}

.hero-text {
    flex: 1;
}

.hero-image {
    flex: 1;
    position: relative;
    overflow: hidden;
    border-radius: 2rem;
}

.hero-image::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right,
            rgba(29, 53, 87, 0.4),
            rgba(29, 53, 87, 0.2));
    z-index: 1;
}

.hero-image img {
    display: block;
    width: 100%;
    height: auto;
    position: relative;
    z-index: 0;
    object-fit: cover;
}

@media screen and (max-width: 1025px) {
    .hero-content {
        flex-direction: column;
    }

    .hero-text {
        order: 2;
        padding-inline: 2rem;
    }

    .hero-image {
        width: 100%;
        height: 50px;
        order: 1;
        margin-bottom: 1.5em;
        border-radius: 0;
    }

    .title-cta {
        font-size: 6rem;
        line-height: 1.1;
        margin-top: 0;
        margin-bottom: 0.8em;
    }
}

@media screen and (max-width: 500px) {
    .title-cta {
        font-size: 5rem;
    }
}
</style>