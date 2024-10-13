<template>
    <div :class="{'dark-mode': isDarkMode, 'light-mode': !isDarkMode}">
      <label>
        Dark Mode
        <input type="checkbox" v-model="isDarkMode" @change="toggleDarkMode">
      </label>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  const isDarkMode = computed(() => store.getters.isDarkMode);
  console.log(isDarkMode);
  
  const toggleDarkMode = () => {
    store.dispatch('toggleDarkMode');
  };
  </script>
  
  <style scoped>
  .dark-mode {
    background-color: #121212;
    color: white;
    height: 100px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .light-mode {
    background-color: #ffffff;
    color: black;
    height: 100px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  