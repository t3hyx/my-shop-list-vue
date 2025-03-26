<script setup lang="ts">
import InputItem from '../components/Input/InputItem.vue'
import InputUnit from '../components/Input/InputUnit.vue'
import ItemList from '../components/List/ItemList.vue'
</script>

<template>
  <main class="bg-base-100">
    <h1>What would you like to buy ?</h1>
    <InputUnit />
    <InputItem />
    <ItemList />
  </main>
</template>
