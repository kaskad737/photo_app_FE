<template>
    <router-link to="/my-account" class="button">
        Back
    </router-link>
    <form action="">
        <label for="restaurants">
            Select your restaurant
        </label>
        <select name="" id="restaurants" class="select">
            <option value="restaurant1">Restaurant 1</option>
            <option value="restaurant2">Restaurant 2</option>
            <option value="restaurant3">Restaurant 3</option>
        </select>

        <label for="time">
            Time OUT
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

        <label for="">
            Printer life
        </label>
        <input class='input' type="text" required>

        <label for="">
        </label>
        <input class='input' type="text" required>

        <button class="button" type="submit">
            Submit
        </button>
    </form>

</template>

<script>
export default {
    name: 'TimeOut'
}

</script>