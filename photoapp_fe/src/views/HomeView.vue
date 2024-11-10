<template>
  <div class="button-container">
    <router-link to="/image-upload" class="button is-primary is-large">
      Upload Image
    </router-link>
    <router-link to="/frame-upload" class="button is-primary is-large">
      Upload Frame
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'HomeView'
  }
</script>

<style scoped>
  .button-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center; 
  }

  .button {
    width: 150px; 
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white; 
    font-size: 16px; 
    text-decoration: none; 
    border-radius: 8px; 
  }

  .button:hover {
    background-color: #3273dc; 
  }
</style>