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
                        <router-link v-if="isAuthenticated" to="/my-account" class="button is-succes my-account-btn"><strong>My Account</strong></router-link>
                        <router-link v-if="isAuthenticated "to="/invite" class="button is-succes"><strong>Invite</strong></router-link>
                        <router-link v-if="isAuthenticated" to="/" @click.prevent="logout" class="button is-danger"><strong>Log out</strong></router-link>
                        <router-link v-if="!isAuthenticated "to="/log-in" class="button is-light">Log in</router-link>    
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
    name: 'Navbar',
    computed: {
        ...mapState(['isAuthenticated']),
    },
    methods: {
        logout() {
            this.$store.commit('removeAccess')
            this.$router.push('/'); 
        }
    }
}
</script>

<style scoped>
.my-account-btn {
    background-color: #2f4870;
    color: white;
    font-weight: bold;
}
</style>