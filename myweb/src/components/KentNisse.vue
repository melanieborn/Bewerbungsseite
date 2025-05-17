<template>
    <v-container>
      <v-row>
        <v-col>
      <v-card class="mt-10">
        <v-card-title class="font-weight-black" style="font-size:1.5vw;"> Programmierung </v-card-title>
        <v-card-text style="font-size:1.2vw;">
          JavaScript, HTML, CSS, JSON, Python, PHP, MySql, Ajax, npm
        </v-card-text>
      </v-card>
      <v-card class="mt-5">
        <v-card-title class="font-weight-black" style="font-size:1.5vw;"> Frameworks </v-card-title>
        <v-card-text style="font-size:1.2vw;">
          Vue.js, vuetify, vue-router, Laravel, Bootstrap, Wireframes
        </v-card-text>
      </v-card>
      <v-card class="mt-5">
        <v-card-title class="font-weight-black" style="font-size:1.5vw;"> Sonstiges </v-card-title>
        <v-card-text style="font-size:1.2vw;">
          Scrum, Azur DevOps, Kanban, Jira, Trello, Git, Xampp, Adobe, Material Design, SPA, Datenbanken,
          automatisierte Integrationtest, Swagger        
        </v-card-text>
      </v-card>
      <v-card class="mt-5">
        <v-card-title class="font-weight-black" style="font-size:1.5vw;"> Nachweise als Pdf Download </v-card-title>
        <v-card-text style="font-size:1.2vw;">
          <a href="/files/zeugnis.pdf" class="mr-5" download >Zeugnis</a>  <a href="/files/scrum.pdf" class="mr-5" download>Scrum</a>
              <a href="/files/ITIL.pdf" download >ITIL</a>
        </v-card-text>
      </v-card>
      <v-card class="mt-10">
        <v-card-title class="font-weight-black" style="font-size:1.5vw;"> eigene Projekte </v-card-title>
        <v-card-text style="font-size:1.2vw;">
          BeWERBUNGsseite
          <p>
      Obdachlosen - Wiki
      <v-tooltip max-width="300px"
        activator="parent"
        location="bottom"
      >
     Nach umfangreicher Bedarfsanalyse und Planung des Aufbaus der Webseite, habe ich nun mit der Umsetzung
    begonnen. Im 1. Arbeitsschritt habe ich ein grobes Layout erstellt, das ich nun nach und nach mit 
    Inhalten und Funktionalitäten fülle. Im 2. Arbeitsschritt werde ich das BE (PHP) anbinden. AUF ANFRAGE SENDE
    ICH IHNEN GERNE DEN LINK ZU GITHUB ZU FÜR CODEBEISPIELE.
    </v-tooltip>
    <v-icon style="font-size:30px;">mdi-information-outline</v-icon> 
    </p>
        </v-card-text>
      </v-card>
    </v-col>
    </v-row>
    </v-container>
      </template>
      
      <script>
      export default {
        name: 'StartSeite',
     data() {
        return { timestamp: " ",

         }
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
        border-radius: 12px;
        border-style: solid;
        padding: 5px;
        font-weight: bold;
        font-size: 25px;
      }
      .prog-resp {
        border-style: solid;
        border-radius: 12px;
        padding: 5px;
        font-weight: bold;
        font-size: 9px;
      }
      .kent {
        text-align: left;
        font-size: 30px;
      }
      .rechts {
        font-size: 20px;
      }
      .bild {
        text-align: left;
        font-size: 10px;
      }
      .pdf {
       margin-right: 15px;
      color: black;
      font-size: 30px;
  }
  .pdfresp {
    margin-right: 15px;
      color: black;
      font-size: 10px;
  }
  .pdfcol {
    text-align: left;
  }
  .resp {
    font-size: 10px;
  }

      </style>
      