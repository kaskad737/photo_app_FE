<template>
    <nav class="navbar is-dark">
        <div class="container">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item">
                    <strong>Photo CRM</strong>
                </router-link>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <router-link v-if="isAuthenticated" to="/my-account" class="button is-info is-inverted"><strong>My Account</strong></router-link>
                            <router-link v-if="isAuthenticated" to="/invite" class="button is-success is-inverted"><strong>Invite</strong></router-link>
                            <router-link v-if="isAuthenticated" to="/log-in" @click.prevent="logout" class="button  is-danger is-inverted"><strong>Log out</strong></router-link>
                            <router-link v-if="!isAuthenticated && $route.path !== '/log-in'" to="/log-in" class="button">Log in</router-link>
                        </div>
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
            this.$store.commit('clearUser')
            this.$router.push('/log-in'); 
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
    .navbar-menu{
        display: flex;
    }
    .container{
        max-width: 900px;
    }
    @media screen and (max-width: 1023px) {
        .navbar>.container {
            display: flex;
            justify-content: space-between;
        }
    }
</style>