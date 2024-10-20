<template>
    <v-container class="hello">
        <v-card
        elevation="0">
            <v-row class="oben">
              <v-card-text>
        <v-col cols="12">
            <p class="name"> BeWERBUNGsseite </p>
            <p class="date">  {{ timestamp }} </p>
        </v-col>
        <nav>
          <v-col>
            <v-btn variant="text" @click="goToStart" class="button">Startseite</v-btn>
            <v-btn variant="text" @click="goToAbout" class="button">Über mich</v-btn>
            <v-btn variant="text" @click="goToKenntnisse" class="button">Kenntnisse</v-btn>
            <v-btn variant="text" @click="goToKontakt" class="button">Kontakt</v-btn>

  </v-col>
  </nav>
</v-card-text>
    </v-row>
  <main>
    <RouterView />
  </main>
  </v-card>
    </v-container>
  </template>
  
  <script>
/* import checkoutNextStepJson from '@/data/json/checkout/checkoutNextStep.json' */

/* data: vm => ({
    content: checkoutNextStepJson.data,
    loading: false,
    error: false,
    paid: false,
    panel: vm.disabled ? -1 : 0 // default active-panel (-1 = non selected, 0 = first selected)
  }), */
  export default {
    name: 'TabComponent',
    props: {
      msg: String
    },
    data: () => ({
        timestamp: " "
    }),
    created() {
              setInterval(this.getNow, 1000);
            },
    methods: {
    goToAbout() {
      this.$router.push('/about')
    },
    goToStart() {
      this.$router.push('/')
    },
    goToKenntnisse() {
      this.$router.push('/kenntnisse')
    },
    goToPdf() {
      this.$router.push('/showPdf')
    },
    goToKontakt() {
      this.$router.push('/kontakt')
    },
    getNow: function() {
                    const today = new Date();
                    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
/*                     const time = today.getHours() + ":" + today.getMinutes() + ":";
 */                    const dateTime = date;
                    this.timestamp = dateTime;
                }
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
  .oben {
    background-image: linear-gradient(140deg, #EADEDB 0%, #BC70A4 50%, #BFD641 75%);
  }
  .name {
    text-align: left;
    color: grey;
    font-size: 30px;
    font-weight: bold;
  }
  .date {
    text-align: right;
    color: grey;
  }
  .button {
    margin-right: 5px;
    color: black
  }
  .vbtn {
    background-color: brown;
  }
  </style>
  