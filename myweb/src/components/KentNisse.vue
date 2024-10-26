<template>
    <v-container>
        <v-row>
            <v-col cols="4">
                <h1> Melanie Bornkessel </h1>
                <p>Fachinformatikerin für Anwendungsentwicklung </p>
                <a href="https://www.linkedin.com/in/melanie-bornkessel-b3a143194">LinkedIn Profil</a>
            </v-col>
            <v-col cols="8" >
                <h3 class="rechts"> Eine kleine Übersicht meiner wichtigsten Kenntnisse </h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
               <p class="prog"> Programmierung: </p>
            </v-col>
            <v-col cols="8">
               <p class="kent"> JavaScript, HTML, CSS, JSON, Phyton, PHP, MySql, Ajax, npm </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
              <p class="prog"> Frameworks: </p>
            </v-col>
            <v-col cols="8">
              <p class="kent"> Vue.js, vuetify, Laravel, Bootstrap, Wireframes </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
              <p class="prog"> Sonstiges: </p>
            </v-col>
            <v-col cols="8">
              <p class="kent"> Scrum, Azur DevOps, Kanban, Jira, Trello, Git, responsive Design, Xampp, Adobe, Material Design, SPA, Datenbanken,
                 automatisierte Integrationtest, Swagger </p>
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
        background-color: lightblue;
        border-radius: 12px;
        padding: 5px;
        font-weight: bold;
      }
      .kent {
        text-align: left;
        font-size: 25px;
      }
      .rechts {
        font-size: 20px;
      }
      .bild {
        text-align: left;
        font-size: 10px;
      }
      </style>
      