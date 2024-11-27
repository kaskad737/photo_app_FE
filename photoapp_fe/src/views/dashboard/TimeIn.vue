<template>
    <h2 class="title">Check-in</h2>
    <form @submit.prevent="submitForm" class="field">
        <label for="restaurants">
            Select your restaurant
        </label>
        <select name="" v-model="selectedRestaurant" class="input">
            <option v-for="option in restaurantList" :value="option">{{option}}</option>
        </select>

        <label for="name">
            Name
        </label>
        <input class='input' type="text" v-model="userName" required />

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
            Cash
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
</template>

<script>
import restaurants from '../../assets/restaurants.json'
const restaurantList = restaurants.map(rest => rest.name)

export default {
    name: 'TimeIn',
    data() {
        return {
            restaurantList,
            selectedRestaurant: '',
            userName: '',
            frames: '',
            sets: '',
            printer: '',
            cash: '',
            timeIn: '',
        };
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

        beforeUnmount() {
            // Clear the interval when the component is destroyed
            clearInterval(this.timer);
        },

        submitForm() {
            const formData = {
                restaurant: this.selectedRestaurant,
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