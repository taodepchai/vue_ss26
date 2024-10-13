<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Ten</th>
            <th>gioi tinh</th>
            <th>ngay sinh</th>
            <th>dia chi</th>
            <th>chuc nang</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in userlist" :key="index">
            <td>{{ user.id }}</td>
            <td>{{ user.userName }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.dateOfBirth }}</td>
            <td>{{ user.address }}</td>
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
  const userlist = computed(() => store.state.listUser);
  console.log(userlist);
  
  const editUser = (user) => {
    console.log('Edit user:', user);
  };
  
  const deleteUser = (user) => {
    console.log('Delete user:', user);
  };
  </script>
  
  <style scoped>
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  </style>
  