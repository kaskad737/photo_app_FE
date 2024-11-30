<template>
  <div class="container">
  
  <router-link to="/"
    class="button"><strong>← Back</strong>
  </router-link>

  <div class="column is-4 is-offset-4">
    <h1 class="title">Restaurants</h1>
      <ul class="menu-list">
        <li v-for="restaurant in restaurants" :key="restaurant.id" class="button is-link is-outlined is-dark is-fullwidth">
          <router-link :to="{ name: 'RestaurantDetails', params: { id: restaurant.id } }">
            {{ restaurant.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
  
<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        restaurants: [],
      };
    },
    created() {
      this.fetchRestaurants();
    },
    methods: {
      async fetchRestaurants() {
        try {
          const response = await axios.get("workday/restaurants/");
          this.restaurants = response.data.results;
        } catch (error) {
          console.error("Error fetching restaurants:", error);
        }
      },
    },
  };
</script>
