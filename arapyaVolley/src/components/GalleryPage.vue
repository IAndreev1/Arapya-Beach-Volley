<template>
  <NavBar activeStart="no" active-gallery="yes" active-next="no" class="header-class" />
  <div class="gallery">
    <img src="./icons/ekip.jpg" @click="toggleImageSize">
    <img src="./icons/dronSnimka.jpg" @click="toggleImageSize">
    <img src="./icons/shamp.jpg" @click="toggleImageSize">
    <img src="./icons/nagradi.jpg" @click="toggleImageSize">
    <img src="./icons/Pobediteli.jpg" @click="toggleImageSize">
    <img src="./icons/logo123.jpg" @click="toggleImageSize">
    <img src="./icons/nagradi.jpg" @click="toggleImageSize">
    <!-- Add more image sources here -->
  </div>
  <div v-if="isImageEnlarged" class="enlarged-image-container" @click="toggleImageSize">
    <img :src="enlargedImageSrc" class="enlarged-image" />
  </div>
  <Footer />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Footer, NavBar },
  data() {
    return {
      isImageEnlarged: false,
      enlargedImageSrc: ""
    };
  },
  methods: {
    toggleImageSize(event) {
      this.isImageEnlarged = !this.isImageEnlarged;
      this.enlargedImageSrc = event.target.src;
    }
  }
};
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  align-items: center;
}

.gallery img {
  width: 100%;
  padding: 1em;
  max-height: 30em;
  object-fit: cover;
  border-radius: 10%;
  cursor: pointer;
}

.enlarged-image-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  cursor: pointer;
}

.enlarged-image {
  max-height: 80vh;
  max-width: 80vw;
}
</style>
