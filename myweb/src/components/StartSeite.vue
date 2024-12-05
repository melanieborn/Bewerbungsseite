<template>
<v-container>

    <v-row>
        <v-col cols="4">
          <h1 class="hidden-sm-and-down"> Melanie Bornkessel </h1>
            <h4 class="hidden-md-and-up" style="font-size:2.1vw;">Melanie Bornkessel</h4>
            <p class="hidden-sm-and-down">  Fachinformatikerin für Anwendungsentwicklung </p>
            <p class="hidden-md-and-up resp">  Fachinformatikerin für Anwendungsentwicklung </p>
            <a class="hidden-sm-and-down" href="https://www.linkedin.com/in/melanie-bornkessel-b3a143194">LinkedIn Profil</a>
            <a class="hidden-md-and-up resp" href="https://www.linkedin.com/in/melanie-bornkessel-b3a143194">LinkedIn Profil</a>
            <img class="bild1" src="@/assets/Tastatur.jpg">
            <p class="hidden-sm-and-down"> Wenn es holprig wird, schnallt man sich an und steigt nicht aus! </p>
            <p class="hidden-md-and-up resp"> Wenn es holprig wird, schnallt man sich an und steigt nicht aus! </p>
        </v-col>
        <v-col cols="8" >
          <h1 class="hidden-sm-and-down pa-5" >Herzlich willkommen auf meiner BeWERBUNGsseite</h1>
              <h4 class="hidden-md-and-up pa-2" style="font-size:2vw;">Herzlich willkommen auf meiner BeWERBUNGsseite</h4>
            <p class="links hidden-sm-and-down pt-5" style="font-size:1.3vw;"> Es freut mich, dass ich Ihre Neugier wecken konnte und wünsche Ihnen viel Spaß bei der 
                Erkundung meiner Seite.
            </p>
            <p class="links hidden-md-and-up resp"> Es freut mich, dass ich Ihre Neugier wecken konnte und wünsche Ihnen viel Spaß bei der 
                Erkundung meiner Seite.
            </p>
            <br />
            <p class="links hidden-sm-and-down" style="font-size:1.3vw;"> Sie finden hier viele Informationen über mich, meine Kenntnisse und meine Motivation. 
                Sollten Sie weitere Fragen haben kontaktieren Sie mich gerne über die im Footer angegebenen Kontaktdaten.
            </p>
            <p class="links hidden-md-and-up resp" > Sie finden hier viele Informationen über mich, meine Kenntnisse und meine Motivation. 
                Sollten Sie weitere Fragen haben kontaktieren Sie mich gerne über die im Footer angegebenen Kontaktdaten.
            </p>
            <br />
            <p class="links hidden-sm-and-down" style="font-size:1.3vw;"> Ich freue mich auf Ihren Anruf oder eine persönliche Nachricht </p>
            <p class="links hidden-md-and-up resp" > Ich freue mich auf Ihren Anruf oder eine persönliche Nachricht </p>

            <br />
            <p class="links hidden-sm-and-down" style="font-size:1.3vw;"> Viele Grüße </p>
            <p class="links hidden-md-and-up resp" > Viele Grüße </p>
            <p class="sign" style="font-size:1.3vw;"> Melanie Bornkessel </p>


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
  }
  .date {
    text-align: right;
  }
  .sign {
    font-family: Lucida Handwriting;
    font-size: 20px;
  }
      .resp {
    font-size: 8px;
  }
  </style>
  