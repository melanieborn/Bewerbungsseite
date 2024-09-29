<template>
    <v-container>
      <v-card variant="text">
        <v-card-text>
          <v-row class="card">
            <v-col cols="12">
      <a>
        Diese Seite wurde von mir mit JavaScript, vue.js und vuetify als GitHub Projekt erstellt
      </a>
    </v-col>
    </v-row>
    </v-card-text>
    </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color:  black;
  }
  .card {
    background-color: gray;
  }
  </style>
  