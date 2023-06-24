

<template>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
  </head>
  <div class="conteiner">
    <img src="src/assets/FIRST.jpg" class = "bigPhoto">
    <h1 class = "textA">Arapya Beach Volley</h1>
  </div>
  <field image= '1' src = "src/assets/FIRST.jpg"/>
</template>

<script>

import {defineComponent} from "vue";
import field from "@/components/Field.vue";
import imageSrc from '@/assets/FIRST.jpg';
export default {
  components: {field},
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
  color:white ;
}

.bigPhoto {

}
</style>