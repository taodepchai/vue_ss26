<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Ten san pham</th>
            <th>gia</th>
            <th>so luong</th>
            <th>chuc nang</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in listProduct" :key="index">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.amount }}</td>
        
            <td>
              <button @click="editUser(user)">Edit</button>
              <button @click="deleteUser(user)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const listProduct = computed(() => store.state.listProduct);

  
 
  </script>
  
  <style scoped>
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  </style>
  