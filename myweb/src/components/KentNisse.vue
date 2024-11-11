<template>
    <v-container>
        <v-row>
            <v-col cols="4">
              <h1 class="hidden-sm-and-down"> Melanie Bornkessel </h1>
            <h4 class="hidden-md-and-up">Melanie Bornkessel</h4>
            <a class="hidden-sm-and-down" href="https://www.linkedin.com/in/melanie-bornkessel-b3a143194">LinkedIn Profil</a>
            <a class="hidden-md-and-up resp" href="https://www.linkedin.com/in/melanie-bornkessel-b3a143194">LinkedIn Profil</a>
          </v-col>
            <v-col cols="8" >
                <h2 class="hidden-sm-and-down pt-12" style="font-size:2vw;"> Eine Übersicht meiner wichtigsten Kenntnisse </h2>
                <h4 class="hidden-md-and-up pt-5" style="font-size:2vw;">Eine Übersicht meiner wichtigsten Kenntnisse</h4>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
               <p  class="prog" style="font-size:1.8vw;"> Programmierung: </p>
            </v-col>
            <v-col cols="8">
               <p class="kent" style="font-size:2.1vw;"> JavaScript, HTML, CSS, JSON, Python, PHP, MySql, Ajax, npm </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
              <p class="prog" style="font-size:1.8vw;"> Frameworks: </p>
            </v-col>
            <v-col cols="8">
              <p class="kent" style="font-size:2.1vw;"> Vue.js, vuetify, Laravel, Bootstrap, Wireframes </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
              <p class="prog" style="font-size:1.8vw;"> Sonstiges: </p>
            </v-col>
            <v-col cols="8">
              <p class="kent" style="font-size:2.1vw;"> Scrum, Azur DevOps, Kanban, Jira, Trello, Git, Xampp, Adobe, Material Design, SPA, Datenbanken,
                 automatisierte Integrationtest, Swagger </p>
            </v-col>
     </v-row>
     <v-row>
            <v-col cols="4">
              <p class="prog" style="font-size:1.8vw;"> Nachweise als Pdf Download </p>
            </v-col>
            <v-col cols="8" class="pdfcol">
              <a href="/files/zeugnis.pdf" download class="pdf" style="font-size:2.1vw;">Zeugnis,</a>  <a href="/files/scrum.pdf" download class="pdf" style="font-size:2.1vw;">Scrum,</a>
              <a href="/files/ITIL.pdf" download class="pdf" style="font-size:2.1vw;">ITIL</a>
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
        background-color: #005f6a;
        border-radius: 12px;
        padding: 5px;
        font-weight: bold;
      }
      .prog-resp {
        background-color: #005f6a;
        border-radius: 12px;
        padding: 5px;
        font-weight: bold;
        font-size: 9px;
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
      .pdf {
       margin-right: 15px;
      color: black;
      font-size: 25px;
  }
  .pdfcol {
    text-align: left;
  }
  .resp {
    font-size: 10px;
  }

      </style>
      