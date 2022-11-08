<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-left: 160px;
  text-align: center;
  color: #2c3e50;
}
body {
  padding: 0;
  margin: 0;
}
h2 {
  text-align: left;
}
.login input, .contact-info input, .time-info input, .update input, .week-days input, .week-meny input, .week-info input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 20px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #1a50a0;
    border-radius: 2px;
}
.login button, form button, .update button {
    width: 120px;
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
  background: #2e5da9;
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  border: none;
  border-radius: 2px;
  font-size: 1rem;
}
.action-link:hover {
  background: #00a06e;
  text-decoration: none;
  color: #fff;
}
.form-container {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
}
.form-container p {
  font-size: 0.8rem;
  font-weight: bold;
}
.contact-info p {
  text-align: left;
}
.time-container {
  width: 320px;
  display: flex;
  justify-content: space-between;
}
.time-days {
  margin-top: 2.2em;
}
.time-days p {
  margin-bottom: 2.6em;
}
.time-info input {
  width: 20px;
  height: 25px;
  margin-bottom: 20px;
  padding-left: 5px;
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
