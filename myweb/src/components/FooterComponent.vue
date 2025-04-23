<template>
    <v-container>
      <v-card variant="text">
        <v-card-text class="card">
          <v-row >
            <v-col cols="4" xs="12">
              <p class="prog"><v-icon class="mimg">mdi-phone-classic</v-icon>030-55235339</p>
    </v-col>
    <v-col cols="4" xs="12">
              <p class="prog"><v-icon class="mimg">mdi-phone</v-icon>015754900553</p>
    </v-col>
    <v-col cols="4" xs="12">
      <v-icon class="prog">mdi-email</v-icon> <a class="prog" href="mailto:melanie.bornkessel@web.de">melanie.bornkessel@web.de</a>
    </v-col>
    </v-row>
          <v-row>
            <v-col cols="12">
      <a>
        Wenn es holprig wird, steigt man nicht aus, sondern schnallt sich an!
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
    color:  white;
  }
  .card {
    background-color: #0061a5;  }
  .prog {
    font-weight: bold;
    color: white;
  }
  .mimg {
    margin-right: 5px;
  }
  </style>
  