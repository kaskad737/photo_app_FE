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
    <h2 class=" title">Create photo</h2>
    <div class="button-container">
      <router-link to="/image-upload" class="button is-primary is-large custom-btn">
      <OhVueIcon name="bi-image-fill" scale="1.5" />
        Upload Image
      </router-link>
    </div>
    <div class="button-container">
      <router-link to="/restaurants" class="button is-primary is-large custom-btn">
        <OhVueIcon name="md-restaurant" scale="1.5" />
        Restaurants
      </router-link>
    </div>
    <div class="button-container">
      <router-link to="/user-list" class="button is-primary is-large custom-btn">
        <OhVueIcon name="fa-user" scale="1.5" />
        User List
      </router-link>
    </div>
  </div>
</template>

<script>
import { OhVueIcon, addIcons } from "oh-vue-icons";

import { MdLoginRound } from "oh-vue-icons/icons";
import { MdLogoutRound } from "oh-vue-icons/icons";
import { BiImageFill } from "oh-vue-icons/icons";
import { MdRestaurant } from "oh-vue-icons/icons";
import { FaUser } from "oh-vue-icons/icons";

addIcons(MdLoginRound, MdLogoutRound, BiImageFill, MdRestaurant, FaUser)

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

  .custom-btn{
    width: 310px;
    height: 75px;
    flex-direction: row;
    gap: 10px;
  }

</style>