

<template>

  <router-view></router-view>

</template>



<script >
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/NavBar.vue'
import Field from "@/components/NavBar.vue";
import field from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
  field : field

  }
}
</script>

<style scoped>



.bigPhoto {

}


@media (min-width: 1024px) {


}
</style>
