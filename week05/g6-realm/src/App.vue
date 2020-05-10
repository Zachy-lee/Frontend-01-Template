<template>
  <div id="app">
    <realm></realm>
  </div>
</template>

<script>
import realm from './components/realm'

export default {
  name: 'App',
  components: {
    realm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
