<template>
    <router-link to="/my-account" class="button">
        Back
    </router-link>
    <form @submit.prevent="submitForm" class="field">
        <label for="restaurants">
            Select your restaurant
        </label>
        <select name="" v-model="restaurants" class="select">
            <option value="restaurant1">Restaurant 1</option>
            <option value="restaurant2">Restaurant 2</option>
            <option value="restaurant3">Restaurant 3</option>
        </select>

        <label for="time">
            Time IN
        </label>
        <input class='input' type="time" v-model="time" required>

        <label for="name">
            Name
        </label>
        <input class='input' type="text" v-model="name" required />

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
            restaurant: '',
            time: '',
            name: '',
            frames: '',
            sets: '',
            printer: '',
            cash:''
        };
    },
    methods: {
        submitForm() {
            const formData = {
                restaurant: this.restaurants,
                time: this.time,
                name: this.name,
                frames: this.frames,
                sets: this.sets,
                printer: this.printer,
                cash: this.cash,
            };
            console.log(formData)
        }
    }
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