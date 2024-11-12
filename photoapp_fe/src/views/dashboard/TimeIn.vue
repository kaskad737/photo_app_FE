<template>
    <router-link to="/my-account" class="button">
        Back
    </router-link>
    <form action="" class="field">
        <label for="restaurants">
            Select your restaurant
        </label>
        <select name="" id="restaurants" class="select">
            <option value="restaurant1">Restaurant 1</option>
            <option value="restaurant2">Restaurant 2</option>
            <option value="restaurant3">Restaurant 3</option>
        </select>

        <label for="time">
            Time IN
        </label>
        <input class='input' type="time" id="time" required>

        <label for="name">
            Name
        </label>
        <input class='input' type="text" id="name" required />

        <label for="frames">
            Number of frames
        </label>
        <input class='input' type="number" id="frames" required>

        <label for="sets">
            Number of sets
        </label>
        <input class='input' type="number" id="sets" required>

        <label for="printer">
            Printer life
        </label>
        <input class='input' type="text" id="printer" required>

        <label for="cash">
            Cash
        </label>
        <input class='input' type="number" required>

        <button class="button" type="submit">
            Submit
        </button>
    </form>
</template>

<script>

export default {
    name: 'TimeIn'
}

function submitForm(params) {
    formData = {
        
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