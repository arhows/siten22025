<script setup>

defineProps({
    menu: {
        type: Object,
        Required: true
    }
})

const emit = defineEmits(['handle-show-nav'])

</script>

<template>
    <li> <a @click="$emit('handle-show-nav')" class="nav-item" :href="`#${menu.link}`">{{ menu.titulo }}</a> </li>
</template>



<style scoped>
.nav-item {
    display: inline-block;
    cursor: pointer;
    transition: all 250ms ease;
    color: #6f4672;
    font-weight: bolder;
    width: 16.5rem;
    text-align: center;
}

.nav-item:hover {
    border-bottom: 0.2em solid #40f99b;
}

@media (max-width: 1160px) {
    .nav-item {
        font-weight: 600;
        width: fit-content;
        padding: .5em;
    }
}

@media (max-width: 1025px) {
    .nav-item {
        color: #ffffff;
        border: none;
        padding: 1.3em;
        border-radius: calc(--border-radius);
    }

    .nav-item:hover {
        background-color: #ffffff;
        color: black;
    }
}
</style>