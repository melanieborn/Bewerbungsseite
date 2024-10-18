<template>
  <TabComponent></TabComponent>
  <FooterComponent></FooterComponent>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue'
import TabComponent from './components/TabComponent.vue'



export default {
  name: 'App',
  components: {
    FooterComponent,
    TabComponent
  },

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
