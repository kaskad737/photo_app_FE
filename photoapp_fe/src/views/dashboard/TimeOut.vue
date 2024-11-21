<template>
    <h2 class="title">Check-out</h2>
    <form @submit.prevent="submitForm" class="field">
        <label for="restaurants">
            Select your restaurant
        </label>
        <select name="" v-model="restaurants" class="select">
            <option v-for="option in restaurants" value="option">{{ option }}</option>
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

        <label for="sign">
            Sign in by entering your name below
        </label>
        <input class='input' type="text" v-model="sign" @input="toUpperCase" required>

        <button class="button submit-btn" type="submit">
            Submit
        </button>
    </form>

</template>

<script>
export default {
    name: 'TimeOut',
    data() {
        return {
            restaurants: ["Restaurant1", "Restaurant2", "Restaurant3", "Restaurant4",],
            restaurant: '',
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
            this.timeOut = now.toLocaleTimeString();
        },
        toUpperCase() {
            this.sign = this.sign.toUpperCase();
        },
        beforeUnmount() {
            // Clear the interval when the component is destroyed
            clearInterval(this.timer);
        },

        // validateForm() { 
        //     //compares username.toUpperCase() with sign input value
        // }
        submitForm() {
            const formData = {
                restaurant: this.restaurants,
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
                sign: this.sign,
            };
            console.log(formData)
        }
        },
}

</script>