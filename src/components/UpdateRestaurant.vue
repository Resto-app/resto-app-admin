<template>
  <NavigationSidebar :username="username" />
  <section>
    <div class="header-content">
      <h2>Redigera restaurang</h2>
    </div>
    <form>
      <div class="form-container">
        <div class="contact-info">
          <p>Kontaktinformation</p>
          <input type="text" name="city" placeholder="Stad" v-model="restaurant.city" />
          <input type="text" name="street" placeholder="Gatuadress" v-model="restaurant.street" />
          <input type="text" name="streetNumber" placeholder="Gatunummer" v-model="restaurant.streetNumber" />
          <input type="text" name="email" placeholder="Email" v-model="restaurant.email" />
          <input type="text" name="telephone" placeholder="Telefon" v-model="restaurant.telephone" />
        </div>
        <div class="time-container">
        <div class="time-days">
          <p>Måndag: </p>
          <p>Tisdag: </p>
          <p>Onsdag: </p>
          <p>Torsdag: </p>
          <p>Fredag: </p>
          <p>Lördag: </p>
          <p>Söndag: </p>
        </div>
        <div class="time-info">
          <p>Öppningstid</p>
          <input type="text" name="openingHour.monday" placeholder="ex.16" v-model="restaurant.openingHour.monday" />
          <input type="text" name="openingHour.tuesday" v-model="restaurant.openingHour.tuesday" />
          <input type="text" name="openingHour.wednesday" v-model="restaurant.openingHour.wednesday" />
          <input type="text" name="openingHour.thursday" v-model="restaurant.openingHour.thursday" />
          <input type="text" name="openingHour.friday" v-model="restaurant.openingHour.friday" />
          <input type="text" name="openingHour.saturday" v-model="restaurant.openingHour.saturday" />
          <input type="text" name="openingHour.sunday" v-model="restaurant.openingHour.sunday" />
        </div>
        <div class="time-info">
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
    <button type="button" class="action-link save-action" @click="updateRestaurant">Spara</button>
    </form>
  </section>
</template>
<script>
import NavigationSidebar from './NavigationSidebar.vue';
import axios from 'axios';

export default {
    name: 'UpdateRestaurant',
    components: {
      NavigationSidebar
    },
    data() {
      return {
        username: '',
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
      async updateRestaurant() {
        const result = await axios.put(`http://localhost:3000/restaurant/`+this.$route.params.id, {
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
        });
        console.log(result.status)
        if(result.status == 200){
          this.$router.push({name: 'ListRestaurants'})
        }
      },
      async loadData() {
          const result = await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id);
          this.restaurant = result.data
      }
    },
    mounted() {
          let user = localStorage.getItem('user-info');
          if(!user) {
              this.$router.push({name: 'UserLogin'})
          }
          else {
            this.username = JSON.parse(user).username;
            this.loadData();
          }
      }
  }
  </script>