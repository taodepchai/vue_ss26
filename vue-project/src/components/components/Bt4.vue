<template>
  <div>
    <h2>Count: {{count}}</h2>
    <button @click="increment">Increment </button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  const store = useStore();
  const count = computed(() => store.state.count);
  const increment = () => {
    store.commit('increment');
  };
  const decrement = () => {
    store.commit('decrement');
  };
</script>

<style>

</style>