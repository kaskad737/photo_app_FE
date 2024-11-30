<template>
    <div class="container">
        
        <router-link to="/"
            class="button"><strong>← Back</strong>
        </router-link>    
            
        <div class="column is-4 is-offset-4">
            <h2 class="title">Check-in</h2>
            <form @submit.prevent="submitForm" class="field">
                <label for="restaurants">
                    Select your restaurant
                </label>
                <select v-model="selectedRestaurantId" class="select">
                    <option v-for="restaurant in restaurants" :key="restaurant.id" :value="restaurant.id">
                        {{ restaurant.name }}
                    </option>
                </select>

                <label for="frames">
                    Number of frames
                </label>
                <input class='input' type="number" v-model="frames" required>

                <label for="sets">
                    Number of sets
                </label>
                <input class='input' type="number" v-model="sets" required>

                <label for="printer">
                    Printer life
                </label>
                <input class='input' type="text" v-model="printer" required>

                <label for="cash">
                    Cash (US Dollars)
                </label>
                <input class='input' type="number" v-model="cash" required>

                <label for="timeIn">
                    Time IN
                </label>
                <input class='input' type="text" v-bind:value="timeIn" readonly>

                <button class="button submit-btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'TimeIn',
    data() {
        return {
            restaurants: [],
            selectedRestaurantId: null,
            restaurant: '',
            userName: '',
            frames: '',
            sets: '',
            printer: '',
            cash: '',
            timeIn: '',
            sign: '',
        };
    },
    mounted() {
        this.fetchRestaurants();
    },
    created() {
        this.updateTime();
        // Set an interval to update the time every second
        this.timer = setInterval(this.updateTime, 1000);
    },
    methods: {
        updateTime() {
            // Update currentTime with the current date and time formatted as needed
            const now = new Date();
            this.timeIn = now.toLocaleTimeString();
        },

        async fetchRestaurants() {
          try {
            const response = await axios.get('workday/restaurants/');
            this.restaurants = response.data.results;
          } catch (error) {
            console.error('Error fetching restaurants:', error);
          }
        },

        beforeUnmount() {
            // Clear the interval when the component is destroyed
            clearInterval(this.timer);
        },
        toUpperCase() {
            this.sign = this.sign.toUpperCase();
        },
        // validateForm() {
        //     //compares username.toUpperCase() with sign input value
        // }

        submitForm() {
            const formData = {
                restaurant: this.restaurants,
                timeIn: this.timeIn,
                name: this.name,
                frames: this.frames,
                sets: this.sets,
                printer: this.printer,
                cash: this.cash,
            };
            console.log(formData)
        },
        
        },

    }

</script>

<style>
.field{
    display: flex;
    flex-direction: column;
    max-width: 500px;
    align-items: stretch;
    max-width: 500px;
}
.input {
    margin-bottom: 10px;
 }

 .select {
    display: block;
    margin-bottom: 10px;
 }
 .submit-btn{
    background-color: blueviolet;
    color: white;
 }
  .submit-btn:hover{
    background-color: #4258ff;
  }

</style>