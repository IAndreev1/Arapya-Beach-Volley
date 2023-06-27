<template>
  <header class="header-class">

    <img src="../assets/logo.ico" class="logo">
    <h1>Arapya Beach Volley</h1>
    <nav>
      <ul>
        <li :class="{ 'active': activeStart === 'yes' }"><router-link to="/">Начало</router-link></li>
        <li :class="{ 'active': activeGallery === 'yes' }"><router-link to="/gallery">Галерия</router-link></li>
        <li :class="{ 'active': activeNext === 'yes' }"><router-link to="/contacts">Контакти</router-link></li>
      </ul>
    </nav>

  </header>

</template>


<script>
export default {

  props: {
    activeStart: String,
    activeGallery: String,
    activeNext: String
  }
}

</script>

<style scoped>
.header-class {
  background: #f8f8f8;
  padding: 0 3em;
  display: grid;
  grid-template-columns: 10% 50% 40%;
  justify-content: space-evenly;
  max-width: 100vw
}


.logo {
  justify-self: center;
  max-height: 5em;

}

nav {


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
  margin-left: 2em; /* Adjust the margin as needed */
  padding-top: 2em;
}

nav a {
  color: #444;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
}

.active a {
  color: black;
  font-weight: bold;
}

h1 {

  display: inline-block;
  margin: 0.5em 1em; /* Adjust the margin as needed */
  line-height: 1;
  vertical-align: middle;
}
a:hover{
  color: black;
}

@media (max-width: 920px) {
  .header-class {
    padding: 0 1em;
    background: #f8f8f8;
    display: grid;
    grid-template-columns: 5% 55% 40%;
    max-width: 100vw
  }

  nav li {
    display: inline-block;
    margin-left: 0.3em; /* Adjust the margin as needed */
    padding-top: 1.5em;
  }

  nav a {
    color: #444;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
  }
}


  @media (max-width: 580px) {
    .header-class {
      padding: 0 0.5em;
      background: #f8f8f8;
      display: grid;
      grid-template-columns: 10% 35% 55%;
      max-width: 100vw;
    }

    nav li {
      display: inline-block;
      margin-left: 0.3em; /* Adjust the margin as needed */
      padding-top: 1em;
    }
    nav a {
      font-size: 2.5vw;
      padding: 0.2em 0.6em;
    }

    h1 {
      padding-top: 0.8em;
      font-size: 1.1em;
      display: inline-block;
      margin: 0 1em; /* Adjust the margin as needed */
      vertical-align: middle;
    }

    .logo {
      padding: 0.1em 0;
      max-height: 4em;
    }

}


</style>
