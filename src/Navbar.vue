<template>
    <nav class="navbar">
      <RouterLink to="/" class="nav-item">Accueil</RouterLink>
      <RouterLink to="/cv" class="nav-item">CV</RouterLink>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { RouterLink } from 'vue-router'
  </script>
  
  <style scoped>
  .navbar {
    width: 200px;
    height: 100vh;
    background-color: var(--color-background);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
  }
  
  .nav-item {
    display: block;
    padding: 1rem 0;
    font-size: 1rem;
    color: var(--color-text);
    text-decoration: none;
  }
  
  .nav-item.router-link-exact-active {
    font-weight: bold;
  }
  
  .nav-item:hover {
    background-color: var(--color-hover);
  }
  </style>
  