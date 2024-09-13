<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './Navbar.vue'
</script>

<template>


  <div class="layout">
    <Navbar />
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
header {
  text-align: center;
  padding: 1rem;
  background-color: var(--color-background);
}

.emoji-logo {
  font-size: 5rem;
}

/* Layout adjustments */
.layout {
  display: flex;
}

/* Main content area */
.content {
  margin-left: 200px; /* Same width as the navbar */
  padding: 1rem;
  width: calc(100% - 200px); /* Adjust width to exclude the navbar */
}

@media (min-width: 1024px) {
  .emoji-logo {
    font-size: 6rem;
  }
}
</style>
