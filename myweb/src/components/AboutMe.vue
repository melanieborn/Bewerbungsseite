<template>
    <v-container>
        <v-row>
            <v-col cols="4">
              <p  class="bild"> Sie befinden sich hier: Über mich </p>
                <h1> Melanie Bornkessel </h1>
                <p> Junior Frontend Entwicklerin </p>
                <img class="bild1" src="@/assets/Tastatur.jpg">
                <p> Wenn es holprig wird schnallt man sich an und steigt nicht aus </p>
            </v-col>
            <v-col cols="8">
              <h3>Über mich</h3>
                <a>Ich bin Melanie Bornkessel, eine engagierte Junior Frontend Entwicklerin.
                  Erste Erfahrungen mit der Programmierung konnte ich während meiner Tätigkeit beim
                  Amt für kommunale Filmarbeit und dem Max-Ophüls-Preis der Landeshauptstadt Saarbrücken 
                sammeln. Hier war ich für die Programmierung aller Kassen-, Bar- und Kinocomputer in DOS
                zuständig. 
                Auch privat habe ich mich immer für Technik und Programmierung interessiert. Mit meinem
                Umzug nach Berlin hatte ich die Möglichkeit in den technischen Bereich zu 
                wechseln.
                Nach einem Arbeitsunfall auf Montage als Servicetechnikerin der Telekom konnte ich endlich
                meine Passion zum Beruf machen und eine Umschulung zur Fachinformatikerin für Anwendungsentwicklung
                erfolgreich absolvieren.
                Während 2 Praktikas habe ich als Fullstack Entwicklerin mit PHP, HTML und CSS gearbeitet.
                Bei der FP DBS habe ich als Frontend- und Backendentwicklerin gearbeitet und war in einem
                Team zur Erstellung automatisierter Integrationtests mit python. Spezialisiert habe ich mich 
                auf die Frontendentwicklung in der ich mich weiterentwickeln möchte. 
                Sie möchten mehr über meinen Werdegang erfahren? Kontaktieren Sie mich gerne und ich lasse Ihnen 
                einen ausführlichen Lebenslauf zukommen.
                </a>
            </v-col>
        </v-row>
    </v-container>
      </template>
      
      <script>
      export default {
        name: 'AboutMe',
        props: {
          msg: String
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
      