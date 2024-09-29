<template>
  <StartSeite></StartSeite>
  <FooterComponent></FooterComponent>
</template>

<script>
import StartSeite from './components/StartSeite.vue'
import FooterComponent from './components/FooterComponent.vue'



export default {
  name: 'App',
  components: {
    StartSeite,
    FooterComponent
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
