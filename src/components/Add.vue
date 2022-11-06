<template>
  <Header />
  <h1>Lägg till en ny restaurang</h1>
  <form>
    <div class="add-form-container">
      <div class="add-info-container">
        <p>Kontaktinformation</p>
        <input type="text" name="city" placeholder="Stad" v-model="restaurant.city" />
        <input type="text" name="street" placeholder="Gatuadress" v-model="restaurant.street" />
        <input type="text" name="streetNumber" placeholder="Gatunummer" v-model="restaurant.streetNumber" />
        <input type="text" name="email" placeholder="Email" v-model="restaurant.email" />
        <input type="text" name="telephone" placeholder="Telefon" v-model="restaurant.telephone" />
      </div>
      <div class="add-time-container">
      <div class="add-time-days">
        <p>Måndag: </p>
        <p>Tisdag: </p>
        <p>Onsdag: </p>
        <p>Torsdag: </p>
        <p>Fredag: </p>
        <p>Lördag: </p>
        <p>Söndag: </p>
      </div>
      <div class="add-time">
        <p>Öppningstid</p>
        <input type="text" name="openingHour.monday" placeholder="ex.16" v-model="restaurant.openingHour.monday" />
        <input type="text" name="openingHour.tuesday" v-model="restaurant.openingHour.tuesday" />
        <input type="text" name="openingHour.wednesday" v-model="restaurant.openingHour.wednesday" />
        <input type="text" name="openingHour.thursday" v-model="restaurant.openingHour.thursday" />
        <input type="text" name="openingHour.friday" v-model="restaurant.openingHour.friday" />
        <input type="text" name="openingHour.saturday" v-model="restaurant.openingHour.saturday" />
        <input type="text" name="openingHour.sunday" v-model="restaurant.openingHour.sunday" />
      </div>
      <div class="add-time">
        <p>Stängningstid</p>
        <input type="text" name="closingHour.monday" v-model="restaurant.closingHour.monday" />
        <input type="text" name="closingHour.tuesday" v-model="restaurant.closingHour.tuesday" />
        <input type="text" name="closingHour.wednesday" v-model="restaurant.closingHour.wednesday" />
        <input type="text" name="closingHour.thursday" v-model="restaurant.closingHour.thursday" />
        <input type="text" name="closingHour.friday" v-model="restaurant.closingHour.friday" />
        <input type="text" name="closingHour.saturday" v-model="restaurant.closingHour.saturday" />
        <input type="text" name="closingHour.sunday" v-model="restaurant.closingHour.sunday" />
      </div>
    </div>
  </div>
  <button type="button" class="action-link" @click="addRestaurant">Spara</button>
  </form>
</template>
<script>
import axios from 'axios';
import Header from './Header.vue';
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Add',
    components: {
      Header
    },
    data() {
      return {
        restaurant: {
          city: '',
          street: '',
          streetNumber: '',
          email: '',
          telephone: '',
          openingHour: {
            monday: '',
            tuesday: '',
            wednesday: '',
            thursday: '',
            friday: '',
            saturday: '',
            sunday: ''
          },
          closingHour: {
            monday: '',
            tuesday: '',
            wednesday: '',
            thursday: '',
            friday: '',
            saturday: '',
            sunday: ''
          }
        }
      }
    },
    methods: {
      async addRestaurant() {
        const result = await axios.post(`http://localhost:3000/restaurant`, {
          city: this.restaurant.city,
          street: this.restaurant.street,
          streetNumber: this.restaurant.streetNumber,
          email: this.restaurant.email,
          telephone: this.restaurant.telephone,
          openingHour: {
            monday: this.restaurant.openingHour.monday,
            tuesday: this.restaurant.openingHour.tuesday,
            wednesday: this.restaurant.openingHour.wednesday,
            thursday: this.restaurant.openingHour.thursday,
            friday: this.restaurant.openingHour.friday,
            saturday: this.restaurant.openingHour.saturday,
            sunday: this.restaurant.openingHour.sunday,
          },
          closingHour: {
            monday: this.restaurant.closingHour.monday,
            tuesday: this.restaurant.closingHour.tuesday,
            wednesday: this.restaurant.closingHour.wednesday,
            thursday: this.restaurant.closingHour.thursday,
            friday: this.restaurant.closingHour.friday,
            saturday: this.restaurant.closingHour.saturday,
            sunday: this.restaurant.closingHour.sunday,
          }
        })
        if(result.status == 201)
        {
          this.$router.push({name: 'Home'})
        }
      }
    },
    mounted()
      {
          let user = localStorage.getItem('user-info');
          if(!user)
          {
              this.$router.push({name: 'Login'})
          }
      }
  }
</script>
<style>
.add-form-container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.add-form-container p {
  font-size: 18px;
  font-weight: bold;
}
.add-info-container p {
  text-align: left;
}
form .action-link {
  margin-top: 2em;
  margin-bottom: 3em;
  font-size: 16px;
}
.add-time-container {
  width: 360px;
  display: flex;
  justify-content: space-between;
}
.add-time-days {
  margin-top: 2.8em;
}
.add-time-days p {
  margin-bottom: 1.4em;
}
.add-time input {
  width: 25px;
  height: 20px;
  padding: 5px;
  margin-bottom: 1em;
}
</style>