<template>
    <h2 class="title">Check-out</h2>
    <form @submit.prevent="submitForm" class="field">
        <label for="restaurants">
            Select your restaurant
        </label>
        <select name="" v-model="selectedRestaurant" class="input">
            <option v-for="option in restaurantList" :value="option">{{ option }}</option>
        </select>
        <label for="userName">
            Name
        </label>
        <input class='input' type="text" id="userName" v-model="userName" required />

        <label for="frames">
            Number of frames sold
        </label>
        <input class='input' type="number" id="frames" v-model="frames" required>

        <label for="sets">
            Number of photos 4x6
        </label>
        <input class='input' type="number" id="sets" v-model="sets" required>

        <label for="cardsPrinted">
            Number of printerd postcards
        </label>
        <input class='input' type="text" id="cardsPrinted" v-model="cardsPrinted" required>
        <label for="usedSets">
            Number of used photosets
        </label>
        <input class='input' type="text" id="usedSets" v-model="usedSets" required>

        <label for="cash">
            Daily cash profit
        </label>
        <input class='input' type="text" id="cash" v-model="cash" required>

        <label for="givenFrames">
            Number of given frames
        </label>
        <input class='input' type="text" id="givenFrames" v-model="givenFrames" required>

        <label for="damagedFrames">
            Number of damaged frames
        </label>
        <input class='input' type="text" id="damagedFrames" v-model="damagedFrames" required>

        <label for="discount">
            Discount approved by the manager
        </label>
        <input class='input' type="text" id="discount" v-model="discount" required>

        <label for="time">
            Time OUT
        </label>
        <input class='input' type="text" v-bind:value="timeOut" readonly>

        <button class="button submit-btn" type="submit">
            Submit
        </button>
    </form>

</template>

<script>
import restaurants from '../../assets/restaurants.json'
const restaurantList = restaurants.map(rest => rest.name)

export default {
    name: 'TimeOut',
    data() {
        return {
            restaurantList,
            selectedRestaurant: '',
            userName: '',
            frames: '',
            photos4x6: '',
            cardsPrinted: '',
            usedSets:'',
            cash: '',
            givenFrames: '',
            damagedFrames: '',
            discount: '',
            timeOut: '',
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
            this.timeOut = now.toLocaleTimeString();
        },
        beforeUnmount() {
            // Clear the interval when the component is destroyed
            clearInterval(this.timer);
        },
        submitForm() {
            const formData = {
                restaurant: this.selectedRestaurant,
                name: this.name,
                frames: this.frames,
                photos4x6: this.photos4x6,
                cardsPrinted: this.cardsPrinted,
                usedSets: this.usedSets,
                cash: this.cash,
                givenFrames: this.givenFrames,
                damagedFrames: this.damagedFrames,
                discount: this.discount,
                cash: this.cash,
                timeOut: this.timeOut,
            };
            console.log(formData)
        }
        },
}

</script>