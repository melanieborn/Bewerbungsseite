<template>
    <v-container>
      <v-row>
        <v-col></v-col>
      </v-row>
        <v-row>
            <v-col cols="4">
              <h2 class="hidden-sm-and-down"> Melanie Bornkessel </h2>
            <h4 class="hidden-md-and-up" style="font-size:2.1vw;">Melanie Bornkessel</h4>
            <p class="hidden-sm-and-down">  Fachinformatikerin für Anwendungsentwicklung </p>
            <p class="hidden-md-and-up resp">  Fachinformatikerin für Anwendungsentwicklung </p>
            <a class="hidden-sm-and-down" href="https://www.linkedin.com/in/melanie-bornkessel-b3a143194">LinkedIn Profil</a>
            <a class="hidden-md-and-up resp" href="https://www.linkedin.com/in/melanie-bornkessel-b3a143194">LinkedIn Profil</a>
            <br />
            <img class="bild1" src="@/assets/ichklein.jpg">
                <p class="hidden-sm-and-down"> In meiner Freizeit bin ich ehrenamtlich tätig. </p>
                <p class="hidden-md-and-up resp"> In meiner Freizeit bin ich ehrenamtlich tätig. </p>
            </v-col>
            <v-col cols="8">
                <p class="links pt-5" style="font-size:1.3vw;">Ich bin Melanie Bornkessel, eine engagierte Junior Anwendungsentwicklerin.
                  <br /> Während meiner Tätigkeit bei der Landeshauptstadt Saarbrücken war ich für die Programmierung der Abrechnungs- und Kassensysteme 
                beim Amt für Kommunale Filmarbeit und dem Max-Ophüls-Festival zuständig </p> 
                <p class="links" style="font-size:1.3vw;">
               Mit meinem
                Umzug nach Berlin hatte ich die Möglichkeit in den technischen Bereich zu 
                wechseln.</p>
              <p class="links" style="font-size:1.3vw;">
                Nach einer Umschulung folgte eine Anstellung bei der FP DBS bei der ich in verschiedenen Projekten als Frontend und
                Fullstack Entwicklerin, sowie der Entwicklung automatisierter Integrationtests tätig war.  <br />
              Durch die Realisierung eigener Projekte, zur Zeit entwickele ich eine Obdachlosenseite in Zusammenarbeit
              mit Obdachloseneinrichtungen, entwickele ich mich und meine Fähigkeiten stetig weiter.
              </p>
              <p class="links" style="font-size:1.3vw;"> Zur Zeit sehe ich mich in der Fullstack und Frontend-Entwicklung</p>
              <p class="links" style="font-size:1.3vw;">
                Vielen Dank für Ihre Aufmerksamkeit.
                Für weitere Fragen stehe ich Ihnen natürlich gerne zur Verfügung, kontaktieren Sie mich gerne über die im Footer angegebenen Kontaktdaten. Einen 
                ausführlichen Lebenslauf lasse ich Ihnen auf Anfrage gerne zukommen.
              </p>


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
        text-align: left !important;
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
        width: 70%;
        height: auto;
      }
      .links {
        text-align: left;
        margin-bottom: 5px;
      }
      .date {
        text-align: right;
      }
      .sign {
        font-family: Lucida Handwriting;
      }
      .resp {
    font-size: 10px;
  }
      </style>
      