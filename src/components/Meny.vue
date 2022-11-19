<template>
    <Header :username="username" />
    <section>
        <div class="header-content">
            <h2>Veckans meny</h2>
        </div>
            <form>
                <div class="form-container">
                    <div class="week-meny-form">
                        <label class="label-size-medium">Måndag</label>
                        <input type="text" name="monday" placeholder="Måndag lunch" v-model="meny.day.monday.dish" />
                        <label class="label-size-small">Beskrivning</label>
                        <input type="text" name="monday" placeholder="Beskrivning" v-model="meny.day.monday.dishDescription" />
                        <label class="label-size-medium">Tisdag</label>
                        <input type="text" name="tuesday" placeholder="Tisdag lunch" v-model="meny.day.tuesday.dish" />
                        <label class="label-size-small">Beskrivning</label>
                        <input type="text" name="tuesday" placeholder="Beskrivning" v-model="meny.day.tuesday.dishDescription" />
                        <label class="label-size-medium">Onsdag</label>
                        <input type="text" name="wednesday" placeholder="Onsdag lunch" v-model="meny.day.wednesday.dish" />
                        <label class="label-size-small">Beskrivning</label>
                        <input type="text" name="wednesday" placeholder="Beskrivning" v-model="meny.day.wednesday.dishDescription" />
                        <label class="label-size-medium">Torsdag</label>
                        <input type="text" name="thursday" placeholder="Torsdag lunch" v-model="meny.day.thursday.dish" />
                        <label class="label-size-small">Beskrivning</label>
                        <input type="text" name="thursday" placeholder="Beskrivning" v-model="meny.day.thursday.dishDescription" />
                        <label class="label-size-medium">Fredag</label>
                        <input type="text" name="friday" placeholder="Fredag lunch" v-model="meny.day.friday.dish" />
                        <label class="label-size-small">Beskrivning</label>
                        <input type="text" name="friday" placeholder="Beskrivning" v-model="meny.day.friday.dishDescription" />
                    </div>
                    <div class="week-info-form">
                        <label class="label-size-medium">Inkluderar</label>
                        <textarea name="Text1" cols="40" rows="4" placeholder="Inkluderar.." v-model="meny.extra"></textarea>
                        <label class="label-size-medium">Pris</label>
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
            username: '',
            meny: {
                day: {
                monday: {
                    dish: '',
                    dishDescription: ''
                },
                tuesday: {
                    dish: '',
                    dishDescription: ''
                },
                wednesday: {
                    dish: '',
                    dishDescription: ''
                },
                thursday: {
                    dish: '',
                    dishDescription: ''
                },
                friday: {
                    dish: '',
                    dishDescription: ''
                },
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
                monday: {
                    dish: this.meny.day.monday.dish,
                    dishDescription: this.meny.day.monday.dishDescription
                },
                tuesday: {
                    dish: this.meny.day.tuesday.dish,
                    dishDescription: this.meny.day.tuesday.dishDescription
                },
                wednesday: {
                    dish: this.meny.day.wednesday.dish,
                    dishDescription: this.meny.day.wednesday.dishDescription
                },
                thursday: {
                    dish: this.meny.day.thursday.dish,
                    dishDescription: this.meny.day.thursday.dishDescription
                },
                friday: {
                    dish: this.meny.day.friday.dish,
                    dishDescription: this.meny.day.friday.dishDescription
                },
            }
            });
            console.log(result.status)
            if(result.status == 200){
            this.$router.push({name: 'Restaurants'})
            }
        },
        async loadData() {
            const result = await axios.get('http://localhost:3000/meny/1');
            this.meny = result.data
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if(!user) {
            this.$router.push({name: 'Login'})
        }
        this.username = JSON.parse(user).username;
        this.loadData();
    }
}
</script>
<style>
.form-container {
    width: 90%;
    margin-top: 4em;
}
.week-meny-form, .week-info-form {
    text-align: left;
}
.week-meny-form input {
    width: 500px;
    height: 40px;
    padding-left: 10px;
}
.week-info-form input {
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
.label-size-small {
    font-size: 0.8rem;
}
.label-size-medium {
    font-weight: 600;
}
</style>