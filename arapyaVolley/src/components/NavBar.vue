<template>
  <header class="header-class">

      <img src="../assets/logo.ico" class="logo">
      <h1>Arapya Beach Volley</h1>
      <nav>
        <ul>
          <li :class="{ 'active': activeStart === 'yes' }"><a href="#" >Начало</a></li>

          <li :class="{ 'active': activeGallery === 'yes' }"><a href="#" >Галерия</a></li>
          <li :class="{ 'active': activeNext === 'yes' }"><a href="#" >Контакти</a></li>
        </ul>
      </nav>

  </header>

</template>


<script>
export default {

    props: {
      activeStart:String,
      activeGallery: String,
      activeNext: String
    }
}

</script>

<style scoped>
.header-class {
  background: #55d6aa;
  padding: 0 3em;
}



header::after {
  content: '';
  display: table;
  clear: both;
}

.logo {
  padding: 10px 0;
  max-height: 4em;
  float: left;
}

nav {
  float: right;

}

nav ul {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
}

nav li {
  display: inline-block;
  margin-left: 100px; /* Adjust the margin as needed */
  padding-top: 1em;
}

nav a {
  color: #444;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 20px;
}


.active {


}
.active a{
  color: black;
}

h1 {

  display: inline-block;
  margin: 10px 20px; /* Adjust the margin as needed */
  line-height: 1;
  vertical-align: middle;
}

@media (max-width: 1200px) {
  .header-class {
    background: #55d6aa;
    padding: 0 1em;
  }
}
</style>
