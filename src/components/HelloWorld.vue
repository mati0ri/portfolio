<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Bienvenue sur mon portfolio, tu peux aussi apprendre a me a connaitre sur
      <a href="https://www.linkedin.com/in/matéo-iori-81ba79273/" target="_blank" rel="noopener">Linkedin</a>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 400;
  font-size: 2rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
