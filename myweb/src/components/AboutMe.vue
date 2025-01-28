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
                <img class="bild1" src="@/assets/draussen2.jpg">
                <p class="hidden-sm-and-down"> In meiner Freizeit bin ich ehrenamtlich tätig. </p>
                <p class="hidden-md-and-up resp"> In meiner Freizeit bin ich ehrenamtlich tätig. </p>
            </v-col>
            <v-col cols="8">
                <p class="links hidden-sm-and-down pt-5" style="font-size:1.2vw;">Ich bin Melanie Bornkessel, eine engagierte Junior Frontend Entwicklerin.
                  Erste Erfahrungen mit der Programmierung konnte ich während meiner Tätigkeit beim
                  Amt für kommunale Filmarbeit und dem Max-Ophüls-Festival der Landeshauptstadt Saarbrücken 
                sammeln. Hier war ich für die Programmierung aller Kassen-, Bar- und Kinocomputer mit DOS
                zuständig.  </p> 
                <p class="links hidden-md-and-up resp pt-5" >Ich bin Melanie Bornkessel, eine engagierte Junior Frontend Entwicklerin.
                  Erste Erfahrungen mit der Programmierung konnte ich während meiner Tätigkeit beim
                  Amt für kommunale Filmarbeit und dem Max-Ophüls-Festival der Landeshauptstadt Saarbrücken 
                sammeln. Hier war ich für die Programmierung aller Kassen-, Bar- und Kinocomputer mit DOS
                zuständig.  </p>
                <p class="links hidden-sm-and-down" style="font-size:1.2vw;">
                Privat interessiere ich mich für Technik und Programmierung. Mit meinem
                Umzug nach Berlin hatte ich die Möglichkeit in den technischen Bereich zu 
                wechseln.</p>
                <p class="links hidden-md-and-up resp">
                Privat interessiere ich mich für Technik und Programmierung. Mit meinem
                Umzug nach Berlin hatte ich die Möglichkeit in den technischen Bereich zu 
                wechseln.</p>
                <p class="links hidden-sm-and-down" style="font-size:1.2vw;">
                Nach einem Arbeitsunfall auf Montage als Servicetechnikerin der Telekom konnte ich endlich
                meine Passion zum Beruf machen und eine Umschulung zur Fachinformatikerin für Anwendungsentwicklung
                erfolgreich absolvieren.
                </p>  
                <p class="links hidden-md-and-up resp">
                Nach einem Arbeitsunfall auf Montage als Servicetechnikerin der Telekom konnte ich endlich
                meine Passion zum Beruf machen und eine Umschulung zur Fachinformatikerin für Anwendungsentwicklung
                erfolgreich absolvieren.
                </p>
              <p class="links hidden-sm-and-down" style="font-size:1.2vw;">
                Bis zu meiner Anstellung bei der FP DBS, bei der ich in verschiedenen Projekten als Frontend-/Backendentwicklerin gearbeitet habe, habe ich als Fullstack Entwicklerin mit PHP, HTML und CSS Erfahrungen gesammelt.
                Bei der FP DBS war ich zudem in einem Team zur Erstellung automatisierter Integrationtests in Python. Spezialisiert habe ich mich 
                auf die Frontendprogrammierung in JavaScript, gerne nach Designvorlagen, in der ich mich stetig weiterentwickele. 
              </p>
              <p class="links hidden-sm-and-down" style="font-size:1.2vw;">
                Meinen ausführlichen Lebenslauf lasse ich Ihnen auf Anfrage gerne zukommen.
              </p>
              <p class="links hidden-md-and-up resp">
                Bis zu meiner Anstellung bei der FP DBS, bei der ich in verschiedenen Projekten als Frontend-/Backendentwicklerin gearbeitet habe, habe ich als Fullstack Entwicklerin mit PHP, HTML und CSS Erfahrungen gesammelt.
                Bei der FP DBS war ich zudem in einem Team zur Erstellung automatisierter Integrationtests in Python. Spezialisiert habe ich mich 
                auf die Frontendprogrammierung in JavaScript, gerne nach Designvorlagen, in der ich mich stetig weiterentwickele. 
              </p>
              <p class="links hidden-md-and-up resp">
                Meinen ausführlichen Lebenslauf lasse ich Ihnen auf Anfrage gerne zukommen.
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
        width: 100%;
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
      