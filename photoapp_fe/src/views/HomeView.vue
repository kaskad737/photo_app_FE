<template>
  <h1 class="title">Hello, {username}</h1>
  <div class="section-container">
    <h2 class="title">Manage your shift:</h2>
    <div class="button-container">
      <router-link to="/time-in" class="button">
        <OhVueIcon name="md-login-round" scale="1.5" />
        Check-in
      </router-link>
      <router-link to="/time-out" class="button">
        <OhVueIcon name="md-logout-round" scale="1.5" />
        Check-out
      </router-link>
    </div>
    <h2 class=" title">Create photo in 2 steps:</h2>
    <div class="button-container">
      <router-link to="/frame-upload" class="button is-primary is-large">
        <OhVueIcon name="md-filterframes-outlined" scale="1.5" />
        1.Upload Frame
      </router-link>
      <router-link to="/image-upload" class="button is-primary is-large">
        <OhVueIcon name="bi-image-fill" scale="1.5" />
        2.Upload Image
      </router-link>
    </div>
  </div>
</template>

<script>
import { OhVueIcon, addIcons } from "oh-vue-icons";

import { MdLoginRound } from "oh-vue-icons/icons";
import { MdLogoutRound } from "oh-vue-icons/icons";
import { BiImageFill } from "oh-vue-icons/icons";
import { MdFilterframesOutlined } from "oh-vue-icons/icons";



addIcons(MdLoginRound, MdLogoutRound, BiImageFill, MdFilterframesOutlined)

  export default {
  name: 'HomeView',
  components: {
    OhVueIcon,
  },
  }
</script>

<style scoped>
  .section-container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .button-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
    justify-content: center; 
  }

  .button {
    width: 150px; 
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white; 
    font-size: 16px; 
    text-decoration: none; 
    border-radius: 8px; 
    background-color: blueviolet;
  }

  .button:hover {
    background-color: #3273dc; 
  }

  h2{
    font-size: 20px;
  }

</style>