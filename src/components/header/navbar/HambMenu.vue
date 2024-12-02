<script setup>

</script>

<template>
    <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
    </button>
</template>



<style scoped>
.menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    height: 2rem;
    width: 2.5rem;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
}

.menu-toggle span {
    display: block;
    height: 0.4rem;
    width: 100%;
    background-color: #000;
    border-radius: 5px;
}
</style>