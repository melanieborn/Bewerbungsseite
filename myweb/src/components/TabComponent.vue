<template>
    <v-container class="hello">
        <v-card>
            <v-row class="oben">
              <v-card-text>
        <v-col cols="12">
            <p class="name"> BeWERBUNGsseite </p>
            <p class="date">  {{ timestamp }} </p>
        </v-col>
        <nav>
    <RouterLink to="/">Startseite</RouterLink>
    <RouterLink to="/about">Über mich</RouterLink>

  </nav>
</v-card-text>
    </v-row>
  <main>
    <RouterView />
  </main>
  </v-card>
    </v-container>
  </template>
  
  <script>

  
  export default {
    name: 'TabComponent',
    props: {
      msg: String
    },
    data: () => ({
        timestamp: " "
    }),
    created() {
              setInterval(this.getNow, 1000);
            },
    methods: {
    goToAbout() {
      this.$router.push('/')
    },
    getNow: function() {
                    const today = new Date();
                    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
/*                     const time = today.getHours() + ":" + today.getMinutes() + ":";
 */                    const dateTime = date;
                    this.timestamp = dateTime;
                }
  },
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
  