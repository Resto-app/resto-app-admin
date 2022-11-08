<template>
    <div class="nav">
        <p class="current-user"><font-awesome-icon icon="fa-solid fa-user" /> {{ username }}</p>
        <router-link to="/">Restauranger</router-link>
        <router-link to="/meny">Meny</router-link>
        <router-link to="/">Bokningar</router-link>
        <a @click="logout" href="/">Logga ut</a>
    </div>
</template>
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header',
    data() {
        return {
            username: ''
        }
    },
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({name: 'Login'})
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        this.username=JSON.parse(user).username;
        if(!user)
        {
            this.$router.push({name: 'Login'})
        }
    }
}
</script>
<style>
.nav {
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
.nav a{
    display: block;
    color: #fff;
    padding: 16px;
    text-align: left;
    font-size: 1rem;
    text-decoration: none;
}
.nav a:hover {
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
/* .nav {
    background-color: #15305a;
    overflow: hidden;
}
.nav a{
    float: left;
    color: #fff;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover {
    background: #0f2342;
}
.current-user {
    font-size: small;
    color: #f2f2f2;
    float: right;
    margin-right: 1rem;
    margin-top: 0.8rem;
} */
</style>