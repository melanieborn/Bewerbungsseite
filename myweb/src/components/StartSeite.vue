<template>
<v-container>
<!--      <v-row class="oben">
        <v-col cols="12">
            <p class="name"> BeWERBUNGsseite </p>
            <p class="date">  {{ timestamp }} </p>
        </v-col>
    </v-row>  -->
    <v-row>
        <v-col cols="4">
            <h1> Melanie Bornkessel </h1>
            <p>  Fachinformatikerin für Anwendungsentwicklung </p>
            <img class="bild1" src="@/assets/Tastatur.jpg">
            <p> FE - Entwickler sind keine Designer </p>
        </v-col>
        <v-col cols="8" >
            <h1 class="rechts"> Ich begrüße Sie herzlich auf meiner BeWERBUNGsseite </h1>
            <p class="links"> Es freut mich, dass ich Ihre Neugier wecken konnte und wünsche Ihnen viel Spaß bei der 
                Erkundung meiner Seite.
            </p>
            <br />
            <p class="links"> Sie finden hier viele Informationen über mich, meine Kenntnisse und meine Motivation. 
                Sollten Sie weitere Fragen haben kontaktieren Sie mich gerne über die im Footer angegebenen Kontaktdaten.
            </p>
            <br />
            <p class="links"> Ich freue mich auf Ihren Anruf oder eine persönliche Nachricht </p>
            <br />
            <p class="links"> Viele Grüße </p>
            <p class="sign"> Melanie Bornkessel </p>


        </v-col>
    </v-row>
</v-container>
  </template>
  
  <script>
  import testJson from '@/data/json/test.json'

  export default {
    name: 'StartSeite',
    props: {
      msg: String
    },
    data() {
    return { timestamp: " ",
      test: testJson
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
  