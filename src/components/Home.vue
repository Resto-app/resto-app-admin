<template>
  <Header :username="username" />
  <section>
    <div class="header-content">
      <h2>Restauranger</h2>
      <router-link to="/add" class="add-action action-link">+  Ny restaurang</router-link>
    </div>
      <div class="tbl-header">
        <table cellpadding="0" cellspacing="0" border="0">
          <thead>
            <tr>
              <th class="table-header">Stad</th>
              <th class="table-header">Adress</th>
              <th class="table-header">Email</th>
              <th class="table-header">Telefon</th>
              <th class="table-header"></th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="tbl-content">
        <table cellpadding="0" cellspacing="0" border="0">
          <tbody>
            <tr v-for="item in restaurant" :key="item.id">
              <td>{{ item.city }}</td>
              <td>{{ item.street }} {{ item.streetNumber }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.telephone }}</td>     
              <td>
                <router-link :to="'/update/'+item.id" class="edit-icon"><font-awesome-icon icon="fa-solid fa-pen" /></router-link>
                <button @click="deleteRestaurant(item.id)" class="delete-icon"><font-awesome-icon icon="fa-solid fa-trash-can" /></button>
              </td>
            </tr>
          </tbody>   
        </table>
      </div>
  </section>
</template>
<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  data() {
    return {
      name: '',
      username: '',
      restaurant: [],
    }
  },
  components: {
    Header
  },
  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete("http://localhost:3000/restaurant/"+id);
      if(result.status == 200){
        this.loadData();
      }
    },
    async loadData() {
      let result = await axios.get("http://localhost:3000/restaurant");
      this.restaurant = result.data
    }
  },
  async mounted()
  {
    let user = localStorage.getItem('user-info');
    if(!user) {
      this.$router.push({name: 'Login'})
    }
    this.username = JSON.parse(user).username;
    this.loadData()
  }
}
</script>
<style>
table{
  width: 100%;
  table-layout: fixed;
}
.tbl-header{
  background-color: #bce5ff8c;
 }
.tbl-content{
  height: 300px;
  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid rgba(255,255,255,0.3);
}
tr th {
  pointer-events: none;
}
th{
  padding: 10px;
  text-align: left;
  font-weight: 700;
  font-size: 1rem;
  color: #15305a;
  text-transform: uppercase;
}
td{
  padding: 10px;
  text-align: left;
  vertical-align:middle;
  font-weight: 300;
  font-size: 0.8rem;
  color: #222;
  border-bottom: solid 1px rgba(255,255,255,0.1);
}
tr:hover {
  background: #e2e5e8;
}
/* .tbl-content tbody tr:nth-child(odd) {
    color: #ffffff;
    background: #e2e5e8;
} */
.add-action {
  font-size: 0.8rem;
  font-weight: 500;
  height: 26px;
  width: 120px;
  padding: 5px;
  margin-top: 3em;
}
.edit-icon {
  font-size: 1.2rem;
  color: #000;
}
.edit-icon:hover{
  color: #222;
}
.delete-icon {
  margin-left: 5em;
  border: none;
  font-size: 1.2rem;
  color: rgb(216, 0, 0);
  background-color: transparent;
  cursor: pointer;
}
</style>