<template>
  <div class = "infoBlog">
    <div>hello</div>
    <img :src="getSrc"/>
  </div>


</template>


<script>


export default {
  props: {
    image:Number,
    src:String
  },

  computed:{
    getSrc(){
      if(this.image == 1){
        return "src/components/icons/arapq.jpg"
      }
    }
  }
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
