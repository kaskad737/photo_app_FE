<template>
  <div class="container">
    <h1 class="title">Hello, {{ username }}</h1>
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
      <h2 class=" title">Images</h2>
      <div class="button-container">
        <router-link to="/list-images" class="button is-primary is-large">
          <OhVueIcon name="la-photo-video-solid" scale="1.5" />
          List all images
        </router-link>
      </div>
      <h2 class=" title">Generate Statistics:</h2>
      <div class="button-container">
        <router-link to="/statistics" class="button is-primary is-large">
          <OhVueIcon name="ri-numbers-fill" scale="1.5" />
          Statistics
        </router-link>
        <router-link to="/reports" class="button is-primary is-large">
          <OhVueIcon name="hi-document-report" scale="1.5" />
          Reports
        </router-link>
      </div>
      <h2 class=" title">Restaurants:</h2>
      <div class="button-container">
        <router-link to="/restaurants-list" class="button is-primary is-large">
          <OhVueIcon name="co-restaurant" scale="1.5" />
          List Restaurants
        </router-link>
        <router-link to="/restaurant-register" class="button is-primary is-large">
          <OhVueIcon name="co-restaurant" scale="1.5" />
          Register Restaurant
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { OhVueIcon, addIcons } from "oh-vue-icons";
  import { MdLoginRound } from "oh-vue-icons/icons";
  import { MdLogoutRound } from "oh-vue-icons/icons";
  import { BiImageFill } from "oh-vue-icons/icons";
  import { MdFilterframesOutlined } from "oh-vue-icons/icons";
  import { CoRestaurant } from "oh-vue-icons/icons";
  import { RiNumbersFill } from "oh-vue-icons/icons";
  import { HiDocumentReport } from "oh-vue-icons/icons";
  import { LaPhotoVideoSolid } from "oh-vue-icons/icons";

  addIcons(
    MdLoginRound, 
    MdLogoutRound, 
    BiImageFill, 
    MdFilterframesOutlined, 
    CoRestaurant, 
    RiNumbersFill, 
    HiDocumentReport, 
    LaPhotoVideoSolid,
  )

  export default {
  name: 'HomeView',
  data() {
      return {
          username: '',
          password: ''
      }
    },
  mounted() {
      this.getUsername();
    },
  methods: {
    getUsername() {
      this.username = localStorage.getItem('userFirstName') || localStorage.getItem('username');
    },
  },
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