<template>
  <div id="app">
    <HelloReiwa />
  </div>
</template>

<script>
import HelloReiwa from './components/HelloReiwa.vue'

export default {
  name: 'app',
  components: {
    HelloReiwa
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  color: #555;
}

p {
  margin: 0;
  padding: 0;
}
</style>