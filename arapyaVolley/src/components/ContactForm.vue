<template>
  <NavBar activeStart="no" active-gallery="no" active-next="yes" class="header-class"/>
  <div class="contact-page">
    <h1>Contact Information</h1>
    <div class="contact-details">
      <div class="info-item">
        <span class="label">Organization Name:</span>
        <span class="value">My Organization</span>
      </div>
      <div class="info-item">
        <span class="label">Address:</span>
        <span class="value">123 Main Street, City, Country</span>
      </div>
      <div class="info-item">
        <span class="label">Phone:</span>
        <span class="value">+1 234 567 890</span>
      </div>
      <div class="info-item">
        <span class="label">Email:</span>
        <span class="value">info@myorganization.com</span>
      </div>
    </div>
  </div>
  <Footer/>
</template>


<script>
export default {
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

.header-class {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
.contact-page {
  max-width: 90vw;
  margin: 0 auto;
  padding: 5em 5em 19em;
  background-color: #f5f5f5;
  border-radius: 8px;
}

h1 {
  margin-bottom: 1em;
  color: #333;
}

.contact-details {
  margin-top: 1em;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 1em;
}

.label {
  font-weight: bold;
  width: 120px;
  color: #666;
}

.value {
  flex-grow: 1;
  color: #333;
}
</style>
<script setup>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
</script>