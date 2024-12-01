<template>
    <div class="container">
        <router-link to="/" class="button"><strong>← Back</strong></router-link>    
        <div class="column is-4 is-offset-4">
            <h2 class="title">Check-in</h2>
            <form @submit.prevent="submitForm" class="field">
                <label for="restaurants">Select your restaurant</label>
                <select id="restaurants" v-model="formData.selectedRestaurantId" class="select" required>
                    <option v-for="restaurant in restaurants" :key="restaurant.id" :value="restaurant.id">
                        {{ restaurant.name }}
                    </option>
                </select>

                <label for="frames">Number of frames</label>
                <input id="frames" class="input" type="number" v-model.number="formData.frames" required />

                <label for="sets">Number of sets</label>
                <input id="sets" class="input" type="number" v-model.number="formData.sets" required />

                <label for="printer">Printer life</label>
                <input id="printer" class="input" type="text" v-model="formData.printer" required />

                <label for="cash">Cash (US Dollars)</label>
                <input id="cash" class="input" type="number" v-model.number="formData.cash" required />

                <label for="timeIn">Time IN</label>
                <input id="timeIn" class="input" type="text" :value="timeIn" readonly />

                <button class="button submit-btn" type="submit">Check-in</button>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'TimeIn',
        data() {
            return {
                restaurants: [],
                formData: {
                    selectedRestaurantId: null,
                    frames: null,
                    sets: null,
                    printer: '',
                    cash: null,
                },
                timeIn: '',
                timer: null,
            };
        },
        mounted() {
            this.fetchRestaurants();
            this.timer = setInterval(this.updateTime, 1000);
        },
        beforeUnmount() {
            clearInterval(this.timer);
        },
        methods: {
            updateTime() {
                const now = new Date();
                this.timeIn = now.toLocaleTimeString();
            },
            async fetchRestaurants() {
                try {
                    const response = await axios.get('/workday/restaurants/');
                    this.restaurants = response.data.results;
                } catch (error) {
                    console.error('Error fetching restaurants:', error);
                    alert('Failed to fetch restaurants. Please try again later.');
                }
            },
            submitForm() {
                if (!this.formData.selectedRestaurantId) {
                    alert('Please select a restaurant.');
                    return;
                }

                const payload = {
                    photographer: localStorage.getItem('userId'),
                    restaurant: this.formData.selectedRestaurantId,
                    timestamp: this.timeIn,
                    frame_count: this.formData.frames,
                    media_set_count: this.formData.sets,
                    printer_life: this.formData.printer,
                    cash_in_envelope: this.formData.cash,
                };

                console.log('Form submitted:', payload);

                axios.post('/workday/shift/start/', payload)
                    .then(response => {
                        console.log('Shift started successfully:', response.data);

                        localStorage.setItem('userWorkRestaurant', payload.restaurant);
                        this.$store.commit('setUserWorkRestaurant', { restaurantId: payload.restaurant });

                        localStorage.setItem('userStartShift', true);
                        this.$store.commit('setUserStartShift');

                        this.$router.push('/');
                    })
                    .catch(error => {
                        console.error('Error starting shift:', error.response?.data || error.message);
                    });
            },
        },
    };
</script>

<style>
    .field {
        display: flex;
        flex-direction: column;
        max-width: 500px;
        margin: 0 auto;
        align-items: stretch;
    }
    .input, .select {
        margin-bottom: 10px;
        padding: 8px;
        font-size: 1rem;
    }
    .submit-btn {
        background-color: blueviolet;
        color: white;
        border: none;
        padding: 10px 15px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    .submit-btn:hover {
        background-color: #4258ff;
    }
</style>
