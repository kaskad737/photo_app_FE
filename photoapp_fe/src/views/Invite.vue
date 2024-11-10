<template>
    <div class="container">
        <div class="column">
            <div class="column is-4 is-offset-4">
                <h1 class="title">Invite</h1>

                <form @submit.prevent="submitForm">
                    
                    <div class="field">
                        <label>Email</label>
                        <div class="control">
                            <input type="email" name="email" v-model="email" class="input">
                        </div>
                    </div>

                    <div class="field">
                        <label>First name</label>
                        <div class="control">
                            <input type="first_name" name="first_name" v-model="first_name" class="input">
                        </div>
                    </div>

                    <div class="field">
                        <label>Last name</label>
                        <div class="control">
                            <input type="last_name" name="last_name" v-model="last_name" class="input">
                        </div>
                    </div>
                    
                    <div class="field">
                        <div class="control">
                            <button class="button is-success sub-btn">Invite</button>
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
        name: 'Invite',
        data() {
            return {
                email: '',
                first_name: '',
                last_name: '',
            }
        },
        methods: {
            submitForm(e) {
                const formData = {
                    email: this.email,
                    first_name: this.first_name,
                    last_name: this.last_name,
                }

                axios
                    .post('auth/user_invite/', formData)
                    .then(response => {
                        console.log(response)
                        this.$router.push('/')
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
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