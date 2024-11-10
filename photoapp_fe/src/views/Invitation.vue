<template>
    <div class="container">
        <div class="column">
            <div class="column is-4 is-offset-4">
                <h1 class="title">Create your password</h1>

                <form @submit.prevent="submitForm">
                    
                    <div class="field">
                        <label>Password</label>
                        <div class="control">
                            <input 
                            type="password" 
                            id="password1"
                            name="password1" 
                            v-model="form.password1" 
                            class="input"
                            >
                        </div>
                    </div>

                    <div class="field">
                        <label>Repeat password</label>
                        <div class="control">
                            <input 
                            type="password" 
                            id="password2"
                            name="password2" 
                            v-model="form.password2" 
                            class="input"
                            >
                        </div>
                    </div>
    
                    <div class="field">
                        <div class="control">
                            <button class="button is-success sub-btn">Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                form: {
                    password1: '',
                    password2: '',
                    invitation: '',
                },
                responseMessage: '',
                success: false,
            };
        },
        mounted() {
            // Get the invitation token from the URL query parameter
            const invitationToken = this.$route.query.invitation;
            if (invitationToken) {
                this.form.invitation = invitationToken;
            } else {
                this.responseMessage = 'No invitation token found in the URL.';
                this.success = false;
            }
        },
        methods: {
            submitForm(e) {

            const formData = {
                    password1: this.form.password1,
                    password2: this.form.password2,
                    invitation: this.form.invitation,
                }

            
                axios
                    .put('/auth/user_password_create/', formData)
                    .then(response => {
                        console.log(response)
                        this.$router.push('/')
                    })
                    .catch(error => {
                        console.log(error)
                    })

                this.form.password1 = '';
                this.form.password2 = '';
            
            },
        },
    };
</script>
  
<style scoped>
    .sub-btn {
        background-color: #6b1818;
        color: white;
        font-weight: bold;
        transition: background-color 0.3s ease;
    }

    .sub-btn:hover {
        background-color: #185ea0;
    }
</style>
  