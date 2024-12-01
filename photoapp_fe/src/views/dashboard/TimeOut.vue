<template>
    <div class="container">

        <router-link to="/" class="button"><strong>← Back</strong></router-link>    

        <div class="column is-4 is-offset-4">
            <h2 class="title">Check-out</h2>
            <form @submit.prevent="submitForm" class="field">
                <label for="frames">Number of frames sold</label>
                <input class="input" type="number" id="frames" v-model.number="formData.frames" required />

                <label for="sets">Number of photos 4x6</label>
                <input class="input" type="number" id="sets" v-model.number="formData.photos4x6" required />

                <label for="cardsPrinted">Number of printed postcards</label>
                <input class="input" type="number" id="cardsPrinted" v-model.number="formData.cardsPrinted" required />

                <label for="usedSets">Number of used photosets</label>
                <input class="input" type="number" id="usedSets" v-model.number="formData.usedSets" required />

                <label for="cash">Daily cash profit</label>
                <input class="input" type="number" id="cash" v-model.number="formData.cash" required />

                <label for="givenFrames">Number of given frames</label>
                <input class="input" type="number" id="givenFrames" v-model.number="formData.givenFrames" required />

                <label for="damagedFrames">Number of damaged frames</label>
                <input class="input" type="number" id="damagedFrames" v-model.number="formData.damagedFrames" required />

                <label for="time">Time OUT</label>
                <input class="input" type="text" :value="timeOut" readonly />

                <button class="button submit-btn" type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'TimeOut',
        data() {
            return {
                formData: {
                    frames: null,
                    photos4x6: null,
                    cardsPrinted: null,
                    usedSets: null,
                    cash: null,
                    givenFrames: null,
                    damagedFrames: null,
                },
                timeOut: '',
                timer: null,
            };
        },
        created() {
            this.updateTime();
            this.timer = setInterval(this.updateTime, 1000);
        },
        beforeUnmount() {
            clearInterval(this.timer);
        },
        methods: {
            updateTime() {
                const now = new Date();
                this.timeOut = now.toLocaleTimeString();
            },
            submitForm() {
                const { frames, photos4x6, cardsPrinted, usedSets, cash, givenFrames, damagedFrames } = this.formData;

                if (!frames || !photos4x6 || !cardsPrinted || !usedSets || !cash || !givenFrames || !damagedFrames) {
                    alert('Please fill out all required fields.');
                    return;
                }

                const payload = {
                    photographer: localStorage.getItem('userId'),
                    restaurant: localStorage.getItem('userWorkRestaurant'),
                    frames_sold: frames,
                    photos_printed_4x6:photos4x6 ,
                    postcards_printed: cardsPrinted,
                    media_sets_used: usedSets,
                    cash_revenue: cash,
                    frames_given: givenFrames,
                    frames_damaged: damagedFrames,
                    discount_approved: 10, // placeholder
                    timestamp: this.timeOut,
                };

                console.log('Form submitted:', payload);

                axios.post('/workday/shift/end/', payload)
                    .then((response) => {
                        console.log('Shift ended successfully:', response.data);

                        this.$store.commit('clearUserWorkRestaurant');
                        this.$store.commit('clearUserStartShift');

                        this.$router.push("/");
                    })
                    .catch((error) => {
                        console.error('Error ending shift:', error.response?.data || error.message);
                    });
            }
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
    .input {
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
