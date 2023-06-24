<template>
  <div class = "infoBlog">
    <div>hello</div>
    <img :src="src">
  </div>


</template>


<script>


export default {
  props: {
    src:URL
  },

}


</script>

<style scoped>
.container {
  display: flex;
  align-items: center; /* Align items vertically in the center */
}
img {
  margin-left: 10px; /* Add some margin between the text and the image */
}
.infoBlog{
  margin: 10em;

  background: #2c3e50;
  padding: 1em;
  display: flex;
  justify-content: center;
  flex: 1; /* Allow the "hello" text to expand and take available space */
  text-align: center; /* Center the text horizontally */
}
</style>
