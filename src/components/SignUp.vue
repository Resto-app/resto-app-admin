<template>
    <p>sätt en bild</p>
    <h1>Sign up</h1>
    <div class="signup">
        <input type="text" v-model="name" placeholder="Enter name" />
        <input type="email" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button @click="signUp">Sign up</button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'SignUp',
    data() {
        return {
            name:'',
            email:'',
            password:''
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post("http://localhost:3000/users", {
                name: this.email,
                email: this.email,
                password: this.password   
            });

            console.log(result)
            if(result.status==201)
            {
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({name: 'Home'})
            }
        }
    },
    mounted()
    {
        let user = localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name: 'Home'})
        }
    }
}
</script>

<style>

</style>