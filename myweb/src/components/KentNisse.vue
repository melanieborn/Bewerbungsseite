<template>
    <v-container>
        <v-row>
            <v-col cols="4">
              <p  class="bild"> Sie befinden sich hier: Kentnisse" </p>
                <h1> Melanie Bornkessel </h1>
                <p>Frontend Entwicklerin </p>
                <p>LinkedIn link</p>
            </v-col>
            <v-col cols="8" >
                <h3 class="rechts"> Hier stelle ich Ihnen meine wichtigsten Kenntnisse vor </h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                Programmierung
            </v-col>
            <v-col cols="8">
                JavaScript, HTML, CSS, JSON, Phyton, PHP, MySql, Ajax, npm
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                Frameworks:
            </v-col>
            <v-col cols="8">
                Vue.js, vuetify, Laravel, Bootstrap
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                Sonstiges:
            </v-col>
            <v-col cols="8">
                Scrum, Azur, Kanban, Jira, Trello, Git, responsive Design, Xampp, Adobe, Material Design, SPA, Datenbanken,
                 automatisierte Integrationtest
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
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        display: inline-block;
        margin: 0 10px;
      }
      a {
        color: #42b983;
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
      .bild {
        text-align: left;
        font-size: 10px;
      }
      .rechts {
        text-align: center;
        margin-bottom: 20px;
      }
      .bild1 {
        margin-top: 20px;
        margin-bottom: 20px;
      }
      .links {
        text-align: left;
      }
      .date {
        text-align: right;
      }
      .sign {
        font-family: Lucida Handwriting;
      }
      </style>
      