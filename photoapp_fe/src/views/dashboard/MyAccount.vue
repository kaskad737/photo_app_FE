<template>
    <div class="container">

        <router-link to="/"
            class="button"><strong>← Back</strong>
        </router-link>

        <div class="column is-4 is-offset-4">
            <h1 class="title">My account</h1>
            <p> Username: {{ username }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MyAccount',
        data() {
            return {
                username: '',
            }
            },
        mounted() {
            this.getUsername();
            },
        methods: {
            getUsername() {
                this.username = localStorage.getItem('userFirstName') || localStorage.getItem('username');
                },
            },
        }
</script>

<style scoped>

</style>