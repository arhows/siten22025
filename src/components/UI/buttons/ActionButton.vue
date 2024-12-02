<script setup>

defineProps({
    text: {
        type: String,
        Required: true
    },
    isSizeButton: {
        type: Boolean,
        default: false
    }
})

</script>

<template>
    <a href="#contato" class="btn" :class="{ large: isSizeButton }">
        {{ text }}
    </a>

</template>



<style scoped>
.btn {
    display: inline-block;
    background-color: #40f99b;
    color: #5a385c;

    padding-inline: var(--padding-inline);
    padding-block: var(--padding-block);
    border-radius: var(--border-radius);
    cursor: pointer;
    border: 0.2rem solid #40f99b;
    font-weight: bold;
    transition: all 0.3s ease;
}

.btn.large {
    font-size: 2.5rem;
}

.btn:hover {
    transform: scale(1.05);
}
</style>