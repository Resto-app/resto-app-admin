<template>
  <Header />
  <h1>Redigera restaurang</h1>
    <form class="update">
    <input type="text" name="city" placeholder="Stad" v-model="restaurant.city" />
    <input type="text" name="street" placeholder="Gatuadress" v-model="restaurant.street" />
    <input type="text" name="streetNumber" placeholder="Gatunummer" v-model="restaurant.streetNumber" />
    <input type="text" name="email" placeholder="Email" v-model="restaurant.email" />
    <input type="text" name="telephone" placeholder="Telefon" v-model="restaurant.telephone" />
    <button type="button" @click="updateRestaurant">Spara ändringar</button>
  </form>
</template>
  <script>
  import Header from './Header.vue';
  import axios from 'axios';
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Update',
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
          telephone: ''
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
          telephone: this.restaurant.telephone
        });
        if(result.status == 200)
        {
          this.$router.push({name: 'Home'})
        }
      }
    },
    async mounted()
      {
          let user = localStorage.getItem('user-info');
          if(!user)
          {
              this.$router.push({name: 'Login'})
          }
          const result = await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id);
          this.restaurant = result.data
      }
  }
  </script>