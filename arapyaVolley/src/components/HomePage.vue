<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
  </head>
  <body>
  <NavBar activeStart = "yes" active-gallery="no" active-next="no" class="header-class"/>
  <main>
    <div class="containerM">
      <img src="./icons/firstPic.jpg" class="bigPhoto">
    </div>
    <div class="container">
      <img src="./icons/sofia-1.jpg" class="smallImg">
      <p class = "smallText">Статиите в Уикипедия често са цитирани както от медиите, така и в академичните среди: големите ѝ предимства са нейното свободно разпространение и списване, както и широкият ѝ обхват на теми. Редакторите са насърчавани да се придържат към политиката на „Неутрална гледна точка“
      </p>
    </div>
    <div class="container">

      <p class = "smallText">Статиите в Уикипедия често са цитирани както от медиите, така и в академичните среди: големите ѝ предимства са нейното свободно разпространение и списване, както и широкият ѝ обхват на теми. Редакторите са насърчавани да се придържат към политиката на „Неутрална гледна точка“
      </p>
      <img src="./icons/sofia-1.jpg" class="smallImg">
    </div>
    <div class="container">
      <img src="./icons/sofia-1.jpg" class="smallImg">
      <p class = "smallText">Статиите в Уикипедия често са цитирани както от медиите, така и в академичните среди: големите ѝ предимства са нейното свободно разпространение и списване, както и широкият ѝ обхват на теми. Редакторите са насърчавани да се придържат към политиката на „Неутрална гледна точка“
      </p>
    </div>
  </main>
  <Footer/>
  </body>
</template>

<script>

import {defineComponent} from "vue";
import field from "@/components/NavBar.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {Footer, NavBar, field},
  build: {
    rollupOptions: {
      external: ['/src/assets/FIRST.jpg']
    }
  },
}

</script>

<style scoped>

.scroll-shadow.shadow-effect {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
main{
  display: grid;
  column-count: 1;

}

.container {

  display:grid;
  grid-template-columns: 50% 50%;
  width: 100%;


}

main {
  padding-top: 4em;
}

.header-class {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.smallImg{
  max-width: 90%;
  padding: 1em;
  justify-self: center;
  border-radius: 10%;
}

.smallText{
  font-family: 'Montserrat', sans-serif;
  font-size:25px;
  padding:1em;
  justify-self: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color:white;
  text-align: center;

}
.containerM {
  width: 100%;
}

.bigPhoto {
  width: 100%;
  height: auto;
}


.site-header h1 {
  margin: 0;
}

@media (max-width: 500px) {

}

</style>