
<template>
    <div>
      <h1>User Profile</h1>
      <p><strong>ID:</strong> {{ user.id }}</p>
      <p><strong>Username:</strong> {{ user.userName }}</p>
      <p><strong>Gender:</strong> {{ user.gender }}</p>
      <p><strong>Date of Birth:</strong> {{ user.dateOfBirth }}</p>
      <p><strong>Address:</strong> {{ user.address }}</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const user = computed(() => store.state.users);
  </script>
  
  <style scoped>
  h1 {
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
  }
  </style>
  