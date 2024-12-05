<template>
    <v-container>
        <v-row>
            <v-col cols="4">
              <h1 class="hidden-sm-and-down"> Melanie Bornkessel </h1>
            <h4 class="hidden-md-and-up" style="font-size:2.1vw;">Melanie Bornkessel</h4>
            <a class="hidden-sm-and-down" href="https://www.linkedin.com/in/melanie-bornkessel-b3a143194">LinkedIn Profil</a>
            <a class="hidden-md-and-up resp" href="https://www.linkedin.com/in/melanie-bornkessel-b3a143194">LinkedIn Profil</a>
          </v-col>
            <v-col cols="8" >
                <h1 class="hidden-sm-and-down pa-5"> Meine wichtigsten Kenntnisse: </h1>
                <h4 class="hidden-md-and-up pt-5" style="font-size:2vw;">Meine wichtigsten Kenntnisse:</h4>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
               <p  class="prog hidden-sm-and-down" > Programmierung: </p>
               <p  class="hidden-md-and-up prog-resp" > Programmierung: </p>
            </v-col>
            <v-col cols="8">
               <p class="kent hidden-sm-and-down" > JavaScript, HTML, CSS, JSON, Python, PHP, MySql, Ajax, npm </p>
               <p class="kent hidden-md-and-up resp" > JavaScript, HTML, CSS, JSON, Python, PHP, MySql, Ajax, npm </p>
              </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
              <p class="prog hidden-sm-and-down"> Frameworks: </p>
              <p class="hidden-md-and-up prog-resp"> Frameworks: </p>
            </v-col>
            <v-col cols="8">
              <p class="kent hidden-sm-and-down" > Vue.js, vuetify, Laravel, Bootstrap, Wireframes </p>
              <p class="kent hidden-md-and-up resp" > Vue.js, vuetify, Laravel, Bootstrap, Wireframes </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
              <p class="prog hidden-sm-and-down"> Sonstiges: </p>
              <p class="hidden-md-and-up prog-resp"> Sonstiges: </p>

            </v-col>
            <v-col cols="8">
              <p class="kent hidden-sm-and-down"> Scrum, Azur DevOps, Kanban, Jira, Trello, Git, Xampp, Adobe, Material Design, SPA, Datenbanken,
                 automatisierte Integrationtest, Swagger </p>
                 <p class="kent hidden-md-and-up resp"> Scrum, Azur DevOps, Kanban, Jira, Trello, Git, Xampp, Adobe, Material Design, SPA, Datenbanken,
                 automatisierte Integrationtest, Swagger </p>
            </v-col>
     </v-row>
     <v-row>
            <v-col cols="4">
              <p class="prog hidden-sm-and-down"> Nachweise als Pdf Download </p>
              <p class="hidden-md-and-up prog-resp"> Nachweise als Pdf Download </p>

            </v-col>
            <v-col cols="8" class="pdfcol">
              <a href="/files/zeugnis.pdf" download class="pdf hidden-sm-and-down">Zeugnis,</a>  <a href="/files/scrum.pdf" download class="pdf hidden-sm-and-down">Scrum,</a>
              <a href="/files/ITIL.pdf" download class="pdf hidden-sm-and-down">ITIL</a>
              <a href="/files/zeugnis.pdf" download class="pdfresp hidden-md-and-up">Zeugnis,</a>  <a href="/files/scrum.pdf" download class="pdfresp hidden-md-and-up">Scrum,</a>
              <a href="/files/ITIL.pdf" download class="pdfresp hidden-md-and-up">ITIL</a>

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
        border-color: #005f6a;
        border-radius: 12px;
        border-style: solid;
        padding: 5px;
        font-weight: bold;
        font-size: 25px;
      }
      .prog-resp {
        border-color: #005f6a;
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
      