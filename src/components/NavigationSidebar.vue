<template>
    <header>
        <nav class="navbar">
            <p class="current-user"><font-awesome-icon icon="fa-solid fa-user" /> {{ username }}</p>
            <router-link to="/restaurants">Restauranger</router-link>
            <router-link to="/meny">Meny</router-link>
            <router-link to="/reservations">Reservationer</router-link>
            <router-link to="/login" @click="logoutUser">Logga ut</router-link>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'NavigationSidebar',
    props: {
        username: String
    },
    methods: {
        logoutUser() {
            localStorage.clear();
        }
    }
}
</script>
<style>
.navbar {
    background-color: #15305a;
    height: 100%;
    width: 160px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 20px;
}
.navbar a{
    display: block;
    color: #fff;
    padding: 16px;
    text-align: left;
    font-size: 1rem;
    text-decoration: none;
}
.navbar a:hover {
    background: #0f2342;
}
.current-user {
    display: block;
    font-size: small;
    color: #f2f2f2;
    margin-left: 1.5em;
    margin-bottom: 2em;
    text-align: left;
}
</style>