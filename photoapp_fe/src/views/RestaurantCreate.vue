<template>
  <div class="container">

    <router-link to="/"
      class="button"><strong>← Back</strong>
    </router-link>

    <div class="column">
      <div class="column is-4 is-offset-4">
        <h1 class="title">Register a Restaurant</h1>
        <form @submit.prevent="registerRestaurant">
          <div class="field">
            <label for="name">Name</label>
            <div class="control">
              <input v-model="restaurant.name" id="name" class="input" type="text" required />
            </div>
          </div>
          <button class="button is-success sub-btn">Register</button>
        </form>
        <p v-if="successMessage" class="success">{{ successMessage }}</p>
      </div>
    </div>
  </div>
</template>
  
<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        restaurant: {
          name: ""
        },
        successMessage: "",
      };
    },
    methods: {
      async registerRestaurant() {
        try {
          await axios.post("workday/restaurants/register/", this.restaurant);
          this.successMessage = "Restaurant registered successfully!";
          this.restaurant.name = "";
        } catch (error) {
          console.error("Error registering restaurant:", error);
        }
      },
    },
  };
</script>
  
<style scoped>
  .success {
    color: green;
  }

  .sub-btn {
        background-color: #6b1818;
        color: white;
        font-weight: bold;
        transition: background-color 0.3s ease;
    }

  .sub-btn:hover {
      background-color: #185ea0;
  }

  .submit-btn{
    background-color: blueviolet;
    color: white;
 }
</style>
  