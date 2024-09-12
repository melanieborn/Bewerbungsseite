<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <LebensLauf msg="Lebnslauf und Skills"></LebensLauf>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LebensLauf from './components/Lebenslauf.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    LebensLauf
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
