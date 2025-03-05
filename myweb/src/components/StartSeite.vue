<template>
<v-container>
  <v-row>
    <v-col></v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <p class="oben" >Herzlich willkommen auf meiner BeWERBUNGsseite</p>
    </v-col>
  </v-row>

    <v-row>
        <v-col cols="12" >
            <p style="font-size:2.0vw;" class="links"> Es freut mich, dass ich Ihre Neugier wecken konnte und wünsche Ihnen viel Spaß bei der 
                Erkundung meiner Seite. <br />
                Sie finden hier viele Informationen über:  <br />
                - meine IT- und Programmierkenntnisse  <br />
                - meinen beruflichen Werdegang  <br />
                - meine Motivation
                <br />
            </p>
            <br />
            <img class="bild"  src="@/assets/Tastatur1.png">
        </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
            <p class="sign" style="font-size:2.0vw;"> Melanie Bornkessel </p>
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
    font-size:2.2vw;
    font-weight: bold;
    }
  .name {
    text-align: left;
    color: red;
    font-size: 30px;
    font-weight: bold;
  }
  .bild {
    max-width: 100%;
    height: auto;; 
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
    text-align: left !important;
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
  .bg-foto {
  background: url('../assets/hintergrund.jpg') !important;
  height: 100vh;
  }
  </style>
  