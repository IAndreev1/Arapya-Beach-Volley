<template>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
  </head>
  <body id = "MyBody">

  <NavBar active-gallery="yes" active-next="no"/>
  <div class="conteiner">
    <img src="./icons/sofia-1.jpg" class="bigPhoto">
    <h1 class="textA">Arapya Beach Volley</h1>
  </div>
  <img src="./icons/sofia-1.jpg" class="bigPhoto">
  </body>
</template>

<script>

import {defineComponent} from "vue";
import field from "@/components/NavBar.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {NavBar, field},
  build: {
    rollupOptions: {
      external: ['/src/assets/FIRST.jpg']
    }
  }
}
</script>

<style scoped>
.conteiner {
  position: relative;
  text-align: center;
  color: black;
  display: flex;
  justify-content: center;
}

.textA {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%); /* Center horizontally and vertically */
  font-family: 'Montserrat', sans-serif; /* Apply the Montserrat font */
  font-size: 6em; /* Adjust the font size as needed */
  opacity: 0.8;
  color: white;
}

#MyBody {

}

.navbar {
  overflow: hidden;
  background-color: #333;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
}


.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.site-header {
  background: cornflowerblue;
  color: ghostwhite;
  padding: 10px 5%;

}
.site-header h1 {
  margin: 0;
}
</style>