

<template>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
  </head>
  <div class="conteiner">
    <img src="./components/icons/FIRST.jpg" class = "bigPhoto">
    <h1 class = "textA">Arapya Beach Volley</h1>
  </div>
  <field image= '1' src = "../src/components/icons/arapq.jpg"/>


</template>



<script >
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/Field.vue'
import Field from "@/components/Field.vue";
import field from "@/components/Field.vue";

export default {
  name: "App",
  components: {
  field : field

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
  color:white ;
}

.bigPhoto {

}


@media (min-width: 1024px) {


}
</style>
