<template>
    <nav class="navbar is-dark">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
                <strong>Photo CRM</strong>
            </router-link>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <router-link to="/my-account" class="button is-succes my-account-btn"><strong>My Account</strong></router-link>
                        <router-link to="/sign-up" class="button is-succes"><strong>Sign up</strong></router-link>
                        <router-link to="/log-in" class="button is-light">Log in</router-link>    
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style scoped>
.my-account-btn {
    background-color: #4CAF50; /* Например, другой зеленый цвет */
    color: white;
    font-weight: bold;
}
</style>