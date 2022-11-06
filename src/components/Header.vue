<template>
    <div class="nav">
        <router-link to="/">Restauranger</router-link>
        <router-link to="/">Meny</router-link>
        <router-link to="/">Bokningar</router-link>
        <a @click="logout" href="#">Logga ut</a>
        <p class="current-user">{{ username }} <font-awesome-icon icon="fa-solid fa-user" /></p>
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
    /* background-color: #15305a; */
    background-color: #42335a;
    overflow: hidden;
}
.nav a{
    float: left;
    color: #f2f2f2;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover {
    background: #332745;
}
.current-user {
    font-size: small;
    color: #f2f2f2;
    float: right;
    margin-right: 1rem;
    margin-top: 0.8rem;
}
</style>