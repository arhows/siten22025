<script setup>
import { ref } from 'vue';

import Navlist from './Navlist.vue';
import Logo from '../logo/Logo.vue';
import ActionButton from '../../UI/buttons/ActionButton.vue';
import HambMenu from './HambMenu.vue';


const showNav = ref(false)

const handleShowNav = () => {
  showNav.value = !showNav.value;
}

const closeNavList = () => {
  if (showNav.value) {
    showNav.value = false;
  }
}



</script>

<template>
  <nav>
    <div class="container">
      <div class="nav_container">
        <Logo @handle-show-nav="closeNavList" />
        <Navlist class="nav-toogle" :class="{ 'active': showNav }" @handle-show-nav="handleShowNav" />
        <ActionButton :text="'Ligamos para você'" class="action-button" />
        <HambMenu class="toogle-menu" @click="handleShowNav" />

      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  height: 10rem;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
  position: fixed;
  z-index: 990;
  box-shadow: 0.5px 0 2px rgba(0, 0, 0, 0.5);
}

.nav_container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}



/* Responsividade */
@media (max-width: 1153px) {
  .action-button {
    font-size: 1.4rem;
  }
}

@media (max-width: 1025px) {
  .action-button {
    display: none;
  }

  nav {
    height: auto;
    padding: 1em 0;
  }

  .toogle-menu {
    display: flex;
  }

  .nav-toogle {
    display: none;
  }

  .nav-list.nav-toogle.active {
    display: flex;
  }


}
</style>
