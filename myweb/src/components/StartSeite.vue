<template>
<v-container>
    <v-row class="oben">
        <v-col cols="12">
            <p class="name"> BeWerbungsSeite </p>
            <p> Melanie Bornkessel Junior Frontend Entwicklerin </p>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="4" class="bild">
            <h1> Herzlich Willkommen </h1>
            <img class="bild1" src="@/assets/Bild1.jpg">
        </v-col>
        <v-col cols="8" class="rechts">
            <p> Ich begrüße Sie herzlich auf meiner BeWerbungsSeite </p>
            <p> Es freut mich, daß ich Ihre Neugier wecken konnte und wünsche Ihnen viel Spaß bei der 
                Erkundung meiner Seite.
            </p>
            <p> Sie finden hier viele Informationen über mich, meine Kenntnisse und meine Motivation. 
                Sollten Sie weitere Fragen haben kontaktieren Sie mich gerne telefonisch, per e-mail oder 
                über das Kontaktformular.
                Gerne kann ich Ihnen auch einen detaillierten Lebenslauf zukommen lassen.
            </p>
            <p> Ich freue mich auf Ihren Anruf oder eine persönliche Nachricht </p>
            <p> Viele Grüße </p>
            <p> Melanie Bornkessel </p>


        </v-col>
    </v-row>
</v-container>
  </template>
  
  <script>
  export default {
    name: 'StartSeite',
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
    color: #42b983;
  }
  .oben {
    background-color: #42b983;
  }
  .name {
    text-align: left;
    color: red;
    font-size: 30px;
    font-weight: bold;
  }
  .bild {
    background-color: beige;
  }
  .rechts {
    background-color: blue;
  }
  .bild1 {
    margin-top: 20px;
  }
  </style>
  