<script setup>
import { reactive } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast();

const BASE_URL = 'https://api-contact-lead-site.onrender.com/api/site'

const initial = reactive({
    nome: "",
    email: "",
    telefone: "",
    historico: ""
})

const clearFormFields = () => {
    initial.nome = '';
    initial.email = '';
    initial.telefone = '';
    initial.historico = '';
}

const handleSubmit = async () => {
    const newContactForm = {
        nome: initial.nome,
        email: initial.email,
        telefone: initial.telefone,
        historico: initial.historico,
    };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newContactForm),
    };

    try {
        const response = await fetch(BASE_URL, options);

        if (!response.ok) {
            toast.error(response.statusText);
            return;
        }

        if (response.status !== 200) {
            toast.error(response.statusText);
            return;
        }

        const data = await response.json();

        toast.success("Contato enviado com sucesso!");

        clearFormFields();

    } catch (error) {
        console.error("Erro ao enviar o POST:", error.message);
        toast.error("Desculpe, não conseguimos eniar os seus dados!");
    }
};


</script>

<template>
    <section id="contato" class="fale-conosco">
        <div class="container">
            <form class="fale-com-especialista__contato" @submit.prevent="handleSubmit">
                <div class="input-group">
                    <h2>Fale com a nossa equipe</h2>
                </div>

                <div class="input-group">
                    <label for="nome">Nome</label>
                    <input type="text" name="nome" id="nome" v-model="initial.nome" required />
                </div>
                <div class="input-group">
                    <label for="email">E-mail</label>
                    <input type="email" name="email" id="email" v-model="initial.email" required />
                </div>
                <div class="input-group">
                    <label for="telefone">Telefone</label>
                    <input type="tel" name="telefone" id="telefone" v-model="initial.telefone" required />
                </div>
                <div class="input-group">
                    <label for="historico">Fale um pouco sobre o seu momento atual</label>
                    <textarea name="historico" id="historico" v-model="initial.historico"></textarea>
                </div>
                <div class="input-group">
                    <button type="submit">Ligamos para você</button>
                </div>
            </form>
        </div>

    </section>
</template>

<style scoped>
.fale-conosco {
    background-color: #40f99b;
}

.fale-com-especialista__contato {
    position: relative;
    background-color: #fff;
    padding: 3.5rem 5rem;
    max-width: 650px;
    width: 100%;
    margin: 2rem auto 0;
    height: 63rem;
}

.input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
}

.input-group h2 {
    text-align: center;
    text-transform: uppercase;
    color: #5a385c;
}

.input-group input,
.input-group label {
    font-family: inherit;
}

.input-group label {
    text-transform: uppercase;
    color: rgba(64, 68, 71, 0.9);
    font-size: 1.3rem;
    margin-bottom: 0.2rem;
    font-weight: bold;
}

.input-group input,
.input-group textarea {
    font-size: 1.8rem;
    padding: 0.5em;
    border-radius: var(--border-radius);
    border: 1px solid #ff6600;
    background-color: #ffffff;
}

.input-group textarea {
    height: 10rem;
}

.input-group input:focus,
.input-group textarea {
    outline-color: #40f99b;
}

.input-group button {
    background-color: #ff6600;
    color: #fff;
    font-weight: bold;
    padding: 1em 0;
    border: none;
    cursor: pointer;
    border-radius: var(--border-radius);
    transition: all 350ms ease;
}

.input-group button:hover {
    opacity: 0.89;
    transform: scale(0.98);
}

.input-group button:active {
    transform: scale(1.01);
}

@media (max-width: 500px) {
    .fale-com-especialista__contato {
        max-width: 90vw;
    }
}
</style>