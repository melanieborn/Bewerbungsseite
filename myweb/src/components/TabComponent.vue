<template>
    <v-container class="hello">
        <v-card>
            <v-row class="oben">
        <v-col cols="12">
            <p class="name"> BeWERBUNGsseite </p>
            <p class="date">  {{ timestamp }} </p>
        </v-col>
    </v-row>
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="one">Item One</v-tab>
      <v-tab value="two">Item Two</v-tab>
      <v-tab value="three">Item Three</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one"> One </v-tabs-window-item>

        <v-tabs-window-item value="two"> Two </v-tabs-window-item>

        <v-tabs-window-item value="three"> Three </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
    </v-container>
  </template>
  
  <script>

  
  export default {
    name: 'TabComponent',
    props: {
      msg: String
    },
    data() {
    return {tab: null}
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
  .oben {
    background-color: brown;
  }
  .name {
    text-align: left;
    color: red;
    font-size: 30px;
    font-weight: bold;
  }
  </style>
  