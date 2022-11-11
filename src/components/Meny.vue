<template>
    <Header/>
    <section>
        <div class="content-header">
            <h2>Veckans meny</h2>
        </div>
            <form>
                <div class="form-container">
                    <div class="week-days">
                        <p>Måndag: </p>
                        <p>Tisdag: </p>
                        <p>Onsdag: </p>
                        <p>Torsdag: </p>
                        <p>Fredag: </p>
                        <p>Lördag: </p>
                        <p>Söndag: </p>
                    </div>
                    <div class="week-meny">
                        <input type="text" name="monday" placeholder="Måndag" v-model="meny.day.monday" />
                        <input type="text" name="tuesday" placeholder="Tisdag" v-model="meny.day.tuesday" />
                        <input type="text" name="wednesday" placeholder="Onsdag" v-model="meny.day.wednesday" />
                        <input type="text" name="thursday" placeholder="Torsdag" v-model="meny.day.thursday" />
                        <input type="text" name="friday" placeholder="Fredag" v-model="meny.day.friday" />
                        <input type="text" name="saturday" placeholder="Lördag" v-model="meny.day.saturday" />
                        <input type="text" name="sunday" placeholder="Söndag" v-model="meny.day.sunday" />
                    </div>
                    <div class="week-info">
                        <p>Inkluderar: </p>
                        <p>Pris: </p>
                    </div>
                    <div class="week-info">
                        <textarea name="Text1" cols="40" rows="3" placeholder="Inkluderar.." v-model="meny.extra"></textarea>
                        <input type="text" name="price" placeholder="Pris" v-model="meny.price" />
                    </div>
                </div>
                <button type="button" class="save-action action-link" @click="updateMeny">Spara</button>
            </form>
    </section>
</template>
<script>
import axios from 'axios';
import Header from './Header.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Meny',
    components: {
      Header
    },
    data() {
        return {
            meny: {
                day: {
                monday: '',
                tuesday: '',
                wednesday: '',
                thursday: '',
                friday: '',
                saturday: '',
                sunday: ''
            },
            price: '',
            extra: '',
            }
        }
    },
    methods: {
        async updateMeny() {
            const result = await axios.put(`http://localhost:3000/meny/1`, {
                price: this.meny.price,
                extra: this.meny.extra,
                day: {
                monday: this.meny.day.monday,
                tuesday: this.meny.day.tuesday,
                wednesday: this.meny.day.wednesday,
                thursday: this.meny.day.thursday,
                friday: this.meny.day.friday,
                saturday: this.meny.day.saturday,
                sunday: this.meny.day.sunday
            }
            });
            console.log(result.status)
            if(result.status == 200){
            this.$router.push({name: 'Home'})
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if(!user) {
            this.$router.push({name: 'Login'})
        }
        const result = await axios.get('http://localhost:3000/meny/1');
        this.meny = result.data
    }
}
</script>
<style>
.form-container {
    width: 90%;
}
.week-days input, .week-meny input {
    width: 400px;
    height: 30px;
    padding-left: 10px;
}
.week-days, .week-info {
    text-align: left;
}
.week-days p {
    margin-top: 0.5em;
    margin-bottom: 2.6em;
}
.week-info p {
    margin-top: 0.5em;
    margin-bottom: 4.2em;
}
.week-info input {
    width: 35px;
    height: 30px;
    margin-left: 0;
    padding-left: 5px;
}
textarea {
    font-family: 'Montserrat', sans-serif;
    padding-left: 5px;
    display: block;
    margin-bottom: 20px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #1a50a0;
    border-radius: 2px;
}
</style>