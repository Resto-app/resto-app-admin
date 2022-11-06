<template>
  <router-view />
</template>

<script>
//import SignUp from './components/SignUp.vue'

export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding: 0;
  margin: 0;
}
h1 {
  margin-top: 1em;
}
.login input, .add-info-container input, .add-time input, .update input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 20px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #1a50a0;
}
.login button, form button, .update button {
    width: 200px;
    height: 40px;
    border: 1px solid #1a50a0;
    background: #1a50a0;
    color: #fff;
    cursor: pointer;
}
.action-container {
  display: flex;
  justify-content: center;
}
.action-link {
  /* background: #1a50a0; */
  /* background: #198754; */
  background: #00bf84;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  border-radius: 6px;
  border: none;
}
.action-link:hover {
  background: #00a06e;
  text-decoration: none;
  color: #fff;
}
::-webkit-scrollbar {
    width: 6px;
} 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
} 
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
}
</style>
