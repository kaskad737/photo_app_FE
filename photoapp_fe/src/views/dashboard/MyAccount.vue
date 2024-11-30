<template>
    <div class="container">

        <router-link to="/"
            class="button"><strong>← Back</strong>
        </router-link>   

        <div class="column is-4 is-offset-4">
            <h1 class="title">User Details</h1>
            <div v-if="user">
                <p class="user-detail"><strong>Full Name:</strong> {{ user.first_name }} {{ user.last_name }}</p>
                <p class="user-detail"><strong>Role:</strong> {{ userRole }}</p>
                <p class="user-detail"><strong>Email:</strong> {{ user.email }}</p>
            </div>
            <div v-else>
                <p>Loading...</p>
            </div>
        </div>
    </div>
  </template>
<script>
  import axios from "axios";
  
  export default {
    name: "MyAccount",
    data() {
      return {
        user: null,
        userRole: '',
      };
    },
    methods: {
        async fetchUser() {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            console.error("User ID not found in localStorage");
            return;
            }

        try {
            const response = await axios.get(`auth/users/${userId}`);
            this.user = response.data;
            this.userRole = this.user.role.charAt(0).toUpperCase() + this.user.role.slice(1);
        } catch (error) {
            console.error("Error fetching user data:", error);
            }
        },
    },
    created() {
      this.fetchUser();
    },
  };
</script>
  
<style scoped>


.user-detail {
  margin-bottom: 10px;
}

.user-detail strong {
  color: #ffffff;
  font-weight: bold;
}

</style>