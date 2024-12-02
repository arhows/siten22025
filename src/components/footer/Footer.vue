<script setup>
import Logo from '../header/logo/Logo.vue';

</script>

<template>
    <footer>
        <div class="container">
            <div class="footer_conteudo">
                <div class="footer__titulo">

                    <Logo :cor="'branco'" />
                    <ul class="footer-social_list">
                        <li class="footer-social_list-item">
                            <a href="https://www.instagram.com/n2sistemas" target="_blank" rel="noopener noreferrer">

                                <img src="/imagens/img/social_icons/instagram.png" alt="Logo instagram" />
                            </a>
                        </li>
                        <li class="footer-social_list-item">
                            <a href="https://www.facebook.com/n2sistemas" target="_blank" rel="noopener noreferrer">
                                <img src="/imagens/img/social_icons/facebook.png" alt="Logo Facebook" />
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- onde estamos -->
                <div class="onde-estamos">
                    <div class="onde-estamos__conteudo">
                        <div class="container">
                            <div class="onde-estamos__dados">
                                <div class="onde-estamos__telefone">
                                    <strong>(16) 3722-4035</strong> /
                                    <strong>(16) 9.9988-6837</strong>
                                </div>
                                <div class="onde-estamos__endereco">
                                    Rua Pasteur, 1271 - Centro <br />
                                    Franca/SP - CEP: 14.400-650
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14944.68998098708!2d-47.4043416!3d-20.540122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a7c2fdf6d5ab%3A0xbf0fa02f9721c957!2sN2%20Sistemas%20Comerciais%20e%20Empresarias!5e0!3m2!1sen!2sbr!4v1705597284739!5m2!1sen!2sbr"
                        width="100%" height="100%" style="border: 0" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    </footer>
</template>



<style scoped>
footer {
    background-color: #1d3557;
    padding: 2em 0;
    overflow: hidden;
}

.footer_conteudo {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
}

.footer__titulo {
    flex: 1;
}

.onde-estamos {
    width: 40%;
    color: #ffff;
}

.onde-estamos__conteudo {
    display: flex;
}

.footer__titulo,
.footer-social_list {
    display: flex;
    align-items: center;
    gap: 3rem;
}

.footer-social_list-item {
    height: 60px;
    width: 60px;
    width: auto;
    cursor: pointer;
    transition: all 250ms ease;
}

.footer-social_list-item img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.footer-social_list-item img:hover {
    transform: scale(1.1);
}

@media (max-width: 1025px) {
    .footer__titulo {
        margin-inline: auto;
        margin-bottom: 3rem;
    }

    .footer_conteudo {
        display: flex;
        flex-direction: column;
    }

    .onde-estamos {
        width: 100%;
        padding-inline: 1rem;
    }

}

@media screen and (max-width: 500px) {
    .footer-social_list {
        margin: 0;
        padding: 0;
    }

    .footer__titulo {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
}
</style>