<template>
  <NavBar activeStart="yes" active-gallery="no" active-next="no" class="header-class"/>
  <div className="gallery">
    <img v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt">
  </div>
  <Footer/>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {Footer, NavBar},
  data() {
    return {
      images: [
        {src: "src/components/icons/ekip.jpg", alt: "Image 1"},
        {src: "path/to/image2.jpg", alt: "Image 2"},
        {src: "path/to/image3.jpg", alt: "Image 3"}
        // Add more images here
      ]
    };
  }
};
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}

.gallery img {
  width: 100%;
  height: auto;
}
</style>
