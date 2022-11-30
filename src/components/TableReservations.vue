<template>
    <NavigationSidebar :username="username" />
    <section>
        <div class="header-content">
            <h2>Bordsreservationer</h2>
        </div>
            <div class="select-wrapper">
                <div class="select-btn" @click="toggleBox">
                    <span>{{ this.selectedCity }}</span>
                    <font-awesome-icon icon="fa-solid fa-angle-down" v-bind:style="[onClicked ? {'transform': 'rotate(-180deg)'} : '']"/>
                </div>
                <div v-if="onClicked" class="select-content" >
                    <div class="search">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        <input v-model="searchValue" type="text" placeholder="Sök"/>
                    </div>
                    <ul v-if="restaurantList.length" class="options">
                        <li v-for="item in restaurantList" :key="item.id" @click="showBooking(item)" v-cloak>
                            <div class="options-wrapper">
                                <h4>{{ item.city }}</h4>
                                <p>{{ item.street }} {{ item.streetNumber }}</p>
                            </div>
                        </li>
                    </ul>
                    <ul v-else class="options">
                        <li>
                            <div class="options-wrapper">
                                <h4><em>Inga restauranger</em></h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div v-if="isSelected" class="reservation-content">
                <h3>This is reservation content for {{ this.selectedRestaurant.city }}</h3>
            </div>
    </section>
</template>
<script>
import axios from 'axios'
import NavigationSidebar from './NavigationSidebar.vue'

export default {
    name: 'TableReservations',
    components: {
        NavigationSidebar
    },
    data() {
        return {
            username: '',
            restaurants: [],
            onClicked: false,
            searchValue: '',
            isSelected: false,
            selectedRestaurant: {}, 
            selectedCity: 'Välj Restaurang',  
        }
    },
    methods: {
        toggleBox() {
            this.onClicked = !this.onClicked
            this.loadData();
        },
        showBooking(restaurant) {
            this.isSelected = true
            this.selectedRestaurant = restaurant
            this.selectedCity = restaurant.city
        },
        async loadData() {
            let result = await axios.get("http://localhost:3000/restaurant");
            this.restaurants = result.data;
        }
    },
    computed: {
        restaurantList() {
            if(this.searchValue.trim().length > 0) {
                return this.restaurants.filter((restaurant) => restaurant.city.toLowerCase().includes(this.searchValue.trim().toLowerCase()))
            }
            return this.restaurants
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if(!user) {
            this.$router.push({name: 'UserLogin'})
        }
        else {
            this.username = JSON.parse(user).username;
        }
    }
}
</script>
<style>
.select-wrapper {
    width: 220px;
    margin-left: 2em;
    margin-top: 1em;
    z-index: 1;
}
.select-btn, .options li {
    display: flex;
    cursor: pointer;
    align-items: center;
}
.select-btn {
    height: 40px;
    font-size: 1rem;
    font-weight: 500;
    padding: 0 20px;
    border-radius: 7px;
    justify-content: space-between;
    border: 1px solid #ccc;
}
.select-btn svg {
    font-size: 20px;
    transition: transform 0.3s linear; 
}
.select-content {
    padding: 10px;
    margin-top: 15px;
    border-radius: 7px;
    border: 1px solid #ccc;
}
.select-content .search {
    position: relative;
}
.search svg {
    left: 8px;
    color: #999;
    font-size: 1rem;
    line-height: 52px;
    margin-top: 7px;
    position: absolute;
}
.search input {
    height: 30px;
    width: 100%;
    outline: none;
    font-size: 14px;
    border-radius: 5px;
    padding: 0 5px 0 30px;
    border: 1px solid #b3b3b3;
}
.options::-webkit-scrollbar {
    width: 7px;
}
.options::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 25px;
}
.options::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 25px;
}
.select-content .options {
    margin-top: 15px;
    max-height: 160px;
    overflow-y: auto;
}
.options li {
    height: 45px;
    padding: 0 10px;
    font-size: 0.8rem;
    border-radius: 5px;
}
.options li:hover {
    background: #f2f2f2;
}
.options-wrapper {
    text-align: left;
}
.reservation-content {
    display: fixed;
    position: absolute;
    top: 120px;
    left: 500px;
}
</style>