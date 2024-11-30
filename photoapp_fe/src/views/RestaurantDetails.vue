<template>
  <div class="container">

  <router-link to="/restaurants-list"
    class="button"><strong>← Back</strong>
  </router-link>
  
  <div v-if="restaurant" class="column is-4 is-offset-4">
      <h1 class="title">{{ restaurant.name }}</h1>
  </div>
  <div v-else class="loading">Loading restaurant details...</div>
  </div>
</template>
  
<script>
  import axios from "axios";
  
  export default {
    name: "RestaurantDetails",
    data() {
      return {
        restaurant: null,
      };
    },
    methods: {
      async fetchRestaurant() {
        const restaurantId = this.$route.params.id;
        try {
          const response = await axios.get(`/workday/restaurants/${restaurantId}/`);
          this.restaurant = response.data;
        } catch (error) {
          console.error("Error fetching restaurant details:", error);
        }
      },
    },
    created() {
      this.fetchRestaurant();
    },
  };
</script>
  
<style scoped>
  .back-button {
    display: inline-block;
    margin-bottom: 20px;
    font-size: 1rem;
    color: #007bff;
    text-decoration: none;
  }
  
  .back-button:hover {
    text-decoration: underline;
  }
  
  .title {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  .details {
    font-size: 1.2rem;
    color: #333;
  }
  
  .loading {
    font-size: 1.2rem;
    color: #666;
  }
</style>
  