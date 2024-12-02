<script setup>
import { reactive } from 'vue';
import NavItem from './NavItem.vue';

const emit = defineEmits(['handle-show-nav'])

const handleShowNav = () => {
    emit('handle-show-nav')
}



const menuOpcoes = reactive([
    { id: 1, titulo: "Funcionalidades", "link": "funcionalidades" },
    { id: 2, titulo: "Segmentos", "link": "segmentos" },
    { id: 3, titulo: "Sobre", "link": "sobre" },
    { id: 4, titulo: "Fale Conosco", "link": "contato" }
])

</script>

<template>
    <ul class="nav-list">
        <NavItem v-for="menu in menuOpcoes" :key="menu.id" :menu @handle-show-nav="handleShowNav" />
    </ul>
</template>



<style scoped>
.nav-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.9rem;
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    font-weight: 500;
}

@media (max-width: 1025px) {
    .nav-list {
        flex-direction: column;
        justify-content: flex-start;
        gap: 3em;
        position: absolute;
        height: calc(100vh - 10rem);
        background: rgba(0, 0, 0, 0.8);
        top: 9.6rem;
        right: -10px;
        z-index: 500;
        padding: 2em;
    }
}
</style>