<template>
    <div class="login-content">
            <div class="login-form">
                <h1>Logga in</h1>
                <form>
                    <input type="email" v-model="email" placeholder="E-postadress" />
                    <input type="password" v-model="password" placeholder="Lösenord" />
                    <button class="save-action action-link" @click="login">Logga in</button>
                </form>
            </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            let result = await axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            )
            if(result.status==200 && result.data.length>0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({name: 'Restaurants'})
            }
            else {
                this.$router.push({name: 'Login'})
            }
        }        
    },
    mounted()
    {
        let user = localStorage.getItem('user-info');
        if(user) {
            this.$router.push({name: 'Restaurants'})
        }
    }
}
</script>
<style>
.login-content {
    padding: 30px 0;
    height: 100%;
    width: 100%;
}
.login-form {
    width: 400px;
    height: 320px;
    margin: 0 auto;
    margin-top: 6em;
    padding: 1em;
    border-radius: 2px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 60%);
}
.login-form h1 {
    margin-top: 0.5em;
    margin-bottom: 1em;
}
.login-form button {
    margin-top: 1em;
}
</style>