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

<style scoped>
.contact-page {
  max-width: 90vw;
  margin: 0 auto;
  padding: 12em;
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