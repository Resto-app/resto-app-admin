<template>
    <Header />
    <section>
        <div class="content-header">
            <h2>Bokningar</h2>
        </div>
            <div class="wrapper">
                <div class="select-btn" @click="toggleBox">
                    <span>Select Restaurant</span>
                    <font-awesome-icon icon="fa-solid fa-angle-down" v-bind:style="[onClicked ? {'transform': 'rotate(-180deg)'} : '']"/>
                </div>
                <div class="content" v-if="onClicked" >
                    <div class="search">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        <input type="text" placeholder="Sök"/>
                    </div>
                    <ul class="options">
                        <li>hello</li>
                        <li>hello2</li>
                        <li>hello</li>
                        <li>hello2</li>
                        <li>hello</li>
                        <li>hello2</li>
                        <li>hello</li>
                        <li>hello2</li>
                        <li>hello</li>
                        <li>hello2</li>
                        <li>hello</li>
                        <li>hello2</li>
                        <li>hello</li>
                        <li>hello2</li>
                        <li>hello</li>
                        <li>hello2</li>
                        <li>hello</li>
                        <li>hello2</li>
                    </ul>
                </div>
            </div>
    </section>
</template>
<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Booking',
    components: {
        Header
    },
    data() {
        return {
            restaurant: [],
            onClicked: false
        }
    },
    methods: {
        toggleBox() {
            this.onClicked = !this.onClicked
        }
    },
    async loadData() {
        let user = localStorage.getItem('user-info');
        this.name=JSON.parse(user).name
        if(!user) {
            this.$router.push({name: 'Login'})
        }
        let result = await axios.get("http://localhost:3000/restaurant")
        this.restaurant = result.data
    },
    async mounted() {
        this.loadData()
    }
}
</script>
<style>

.wrapper {
    width: 370px;
    margin: 130px auto 0;
}
.select-btn, .options li {
    display: flex;
    cursor: pointer;
    align-items: center;
}
.select-btn {
    height: 65px;
    font-size: 22px;
    padding: 0 20px;
    border-radius: 7px;
    justify-content: space-between;
    border: 1px solid #ccc;
}
.select-btn svg {
    font-size: 31px;
    transition: transform 0.3s linear; 
}
.content {
    padding: 20px;
    margin-top: 15px;
    border-radius: 7px;
    border: 1px solid #ccc;
}
.content .search {
    position: relative;
}
.search svg {
    left: 15px;
    color: #999;
    font-size: 20px;
    line-height: 53px;
    margin-top: 16px;
    position: absolute;
}
.search input {
    height: 53px;
    width: 100%;
    outline: none;
    font-size: 17px;
    border-radius: 5px;
    padding: 0 15px 0 43px;
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
.content .options {
    margin-top: 10px;
    max-height: 250px;
    overflow-y: auto;
}
.options li {
    height: 50px;
    padding: 0 13px;
    font-size: 21px;
    border-radius: 5px;
}
.options li:hover {
    background: #f2f2f2;
}
</style>