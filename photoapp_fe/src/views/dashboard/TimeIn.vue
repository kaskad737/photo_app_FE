<template>
    <h2 class="title">Check-in</h2>
    <form @submit.prevent="submitForm" class="field">
        <label for="restaurants">
            Select your restaurant
        </label>
        <select name="" v-model="restaurants" class="select">
            <option v-for="option in restaurants" value="option">{{option}}</option>
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

        <label for="sign">
            Sign in by entering your name below
        </label>
        <input class='input' type="text" v-model="sign" v-on:blur="signValidation" required>

        <button class="button" type="submit">
            Submit
        </button>
    </form>
</template>

<script>

export default {
    name: 'TimeIn',
    data() {
        return {
            restaurants: ["Restaurant1", "Restaurant2", "Restaurant3", "Restaurant4", ],
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
        },
        beforeUnmount() {
            // Clear the interval when the component is destroyed
            clearInterval(this.timer);
    },
    //     signValidation(evt) {
    //      
    // },

        submitForm() {
            const formData = {
                restaurant: this.restaurants,
                timeIn: this.timeIn,
                name: this.name,
                frames: this.frames,
                sets: this.sets,
                printer: this.printer,
                cash: this.cash,
                sign: this.sign,
            };
            console.log(formData)
        },
    }

</script>

<style>
.input {
    margin-bottom: 10px;
 }

 .select {
    display: block;
    margin-bottom: 10px;
 }

</style>