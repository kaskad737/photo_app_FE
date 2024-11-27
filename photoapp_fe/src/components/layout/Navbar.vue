<template>
    <nav class="navbar is-dark">
        <div class="container">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item">
                    <OhVueIcon name="bi-camera2" scale="1.5"/>
                    <strong>
                        Photo CRM
                    </strong>
                </router-link>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <router-link v-if="isAuthenticated" to="/my-account"
                                class="button  btn1 "><strong>My Account</strong></router-link>
                            <router-link v-if="isAuthenticated" to="/invite"
                                class="button  btn2"><strong>Invite</strong></router-link>
                            <router-link v-if="isAuthenticated" to="/" @click.prevent="logout"
                                class="button  btn3"><strong>Log out</strong></router-link>
                            <router-link v-if="!isAuthenticated" to="/log-in" class="button is-light">Log
                                in</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapState } from 'vuex';
import { BiCamera2 } from "oh-vue-icons/icons";
import { OhVueIcon, addIcons } from "oh-vue-icons";

addIcons(BiCamera2)

    export default {
    name: 'Navbar',
    components: {
        OhVueIcon,
    },
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
.btn1{

}
.btn2{

}
.btn3{
    
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
.navbar-item{
    gap: 5px;
}
</style>