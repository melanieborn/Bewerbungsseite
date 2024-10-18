<template>
    <v-container>
        <v-row>
            <v-col cols="4">
              <p  class="bild"> Sie befinden sich hier: Kontakt" </p>
                <h1> Melanie Bornkessel </h1>
                <p>Frontend Entwicklerin </p>
                <a href="https://www.linkedin.com/in/melanie-bornkessel-b3a143194">LinkedIn Profil</a>
            </v-col>
            <v-col cols="8" >
                <h3 class="rechts"> Meine Kontakt Daten</h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
               <p class="prog"> Mobil </p>
            </v-col>
            <v-col cols="8">
                <v-icon>mdi-phone</v-icon>           
               <p> 01575 - 4900553 </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
              <p class="prog"> Festnetz </p>
            </v-col>
            <v-col cols="8">
              <p> 030 - .... </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
              <p class="prog"> e-mail </p>
            </v-col>
            <v-col cols="8">
                <a class="kent" href="mailto:melanie.bornkessel@web.de">melanie.bornkessel@web.de</a>
            </v-col>
        </v-row>
    </v-container>
      </template>
      
      <script>
      export default {
        name: 'StartSeite',
        props: {
          msg: String
        },
        data() {
        return { timestamp: " " }
      },
        created() {
                  setInterval(this.getNow, 1000);
                },
        methods: {
                getNow: function() {
                        const today = new Date();
                        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    /*                     const time = today.getHours() + ":" + today.getMinutes() + ":";
     */                    const dateTime = date;
                        this.timestamp = dateTime;
                    }
                }
      }
      </script>
      
      <!-- Add "scoped" attribute to limit CSS to this component only -->
      <style scoped>
      h3 {
        margin: 40px 0 0;
      }
      .name {
        text-align: left;
        color: red;
        font-size: 30px;
        font-weight: bold;
      }
      .prog {
        background-color: rgb(24, 192, 97);
        border-radius: 12px;
        padding: 5px;
        font-weight: bold;
      }
      .kent {
        text-align: left;
        font-size: 25px;
        align-items: left;
      }
      .rechts {
        font-size: 20px;
      }
      .bild {
        text-align: left;
        font-size: 10px;
      }
      </style>
      