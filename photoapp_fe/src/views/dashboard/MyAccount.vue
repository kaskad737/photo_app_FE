<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">My account</h1>
            </div>
        </div>
        <div class="wrapper">
            <router-link to="/my-account/:time-in" class="button">
                Start shift
            </router-link>
            <router-link to="/my-account/:time-out" class="button">
                Finnish shift
            </router-link>
        </div>

    </div>
</template>

<script>
   import TimeIn from './TimeIn.vue'

    export default {
        name: 'MyAccount'
    }
</script>

<style scoped>
.wrapper {
    display: inline-flex;
    gap: 20px;
}

</style>