<template>
  <head>
    <title>Arapya Volley</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
  </head>
  <body>
  <NavBar activeStart="yes" active-gallery="no" active-next="no" class="header-class"/>
  <main>
    <div class="containerM">
      <img src="./icons/firstPic.jpg" class="bigPhoto">
    </div>

    <div class="container">
      <img src="./icons/dronSnimka.jpg" class="smallImgHor">
      <p class="smallText"> <b class = "zag"> Къде </b><br>Статиите в Уикипедия често са цитирани както от медиите, така и в академичните среди:
        големите ѝ предимства са нейното свободно разпространение и списване, както и широкият ѝ обхват на теми.
        Редакторите са насърчавани да се придържат към политиката на „Неутрална гледна точка“
      </p>
    </div>
    <div class="container">

      <p class="smallText"><b class = "zag"> Къде </b><br>Статиите в Уикипедия често са цитирани както от медиите, така и в академичните среди:
        големите ѝ предимства са нейно то свободно разпространение и списване, както и широкият ѝ обхват на теми.
        Редакторите са насърчавани да се придържат към политиката на „Неутрална гледна точка“
      </p>
      <img src="./icons/Pobediteli.jpg" class="smallImgVer">
    </div>
    <div class="container">
      <img src="./icons/ekip.jpg" class="smallImgHor">
      <p class="smallText"><b class = "zag"> Къде </b><br>Статиите в Уикипедия често са цитирани както от медиите, така и в академичните среди:
        големите ѝ предимства са нейното свободно разпространение и списване, както и широкият ѝ обхват на теми.
        Редакторите са насърчавани да се придържат към политиката на „Неутрална гледна точка“
      </p>
    </div>
    <div class="container">
      <p class="smallText"><b class = "zag"> Къде </b><br>Статиите в Уикипедия често са цитирани както от медиите, така и в академичните среди:
        големите ѝ предимства са нейното свободно разпространение и списване, както и широкият ѝ обхват на теми.
        Редакторите са насърчавани да се придържат към политиката на „Неутрална гледна точка“
      </p>
      <img src="./icons/shamp.jpg" class="smallImgVer">
    </div>
    <br>
    <CountDown/>
    <br>
  </main>

  <Footer/>
  </body>
</template>

<script>

import {defineComponent} from "vue";
import field from "@/components/NavBar.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import CountDown from "@/components/CountDown.vue";
export default {
  components: {Footer, NavBar, field,CountDown},
  build: {
    rollupOptions: {
      external: ['/src/assets/FIRST.jpg']
    }
  },
  created() {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  },
}

</script>

<style scoped>


main {
  display: grid;
  column-count: 1;

}

.container {

  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  max-width: 80vw;
  animation: fade-in 0.5s ease-in-out forwards;
  z-index:11;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
main {
  padding-top: 4em;
}
.zag{
  font-size:1.6em;
  text-align: left;
}

.header-class {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}

.smallImgHor {
  max-width: 90%;
  margin: 1em;
  padding: 1em;
  justify-self: center;
  border-radius: 10%;
}

.smallImgVer {
  max-width: 70%;
  margin: 1em;
  padding: 1em;
  justify-self: center;
  border-radius: 10%;
}

.smallText {
  font-family: 'Montserrat', sans-serif;
  font-size: 25px;
  padding: 1em;
  justify-self: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  font-weight: bold;
}
p{
  align-self: center;
}
.smallImgHor:hover{
  transform: scale(1.1); /* Increase the scale factor to make the image larger */
  transition: transform 0.3s ease-in-out;
}
.smallImgVer:hover{
  transform: scale(1.1); /* Increase the scale factor to make the image larger */
  transition: transform 0.5s  ease-in-out;
}

.containerM {
  width: 100%;
}

.bigPhoto {
  width: 100%;
  height: auto;
  padding-bottom: 1em;

}

.site-header h1 {
  margin: 0;
}

.navBara{
  z-index: 999;
}

@media (max-width: 560px) {

  .container {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;

  }

  .smallText {
    max-height: 100%;
    font-family: 'Montserrat', sans-serif;
    font-size: 1em;
    padding: 0.5em;
    justify-self: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    color: white;
    text-align: center;
    order:2;
  }

  .smallImgHor {
    max-width: 90%;
    margin: 1em;
    justify-self: center;
    border-radius: 10%;
    overflow: hidden;
    max-height: 100%;
  }

  .smallImgVer {
    max-width: 70%;
    margin: 1em;
    padding: 1em;
    justify-self: center;
    border-radius: 10%;
    max-height: 100%;

  }

}

</style>