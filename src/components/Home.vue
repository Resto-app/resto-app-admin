<template>
  <Header />
  <h1>Restauranger</h1>
  <div class="action-container">
    <router-link to="/add" class="add-action-link action-link">Lägg till restaurang</router-link>
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
      restaurant: [],
    }
  },
  components: {
    Header
  },
  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete("http://localhost:3000/restaurant/"+id);
      console.log(result)
      if(result.status == 200){
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem('user-info');
      this.name=JSON.parse(user).name;
      if(!user)
      {
          this.$router.push({name: 'Login'})
      }
      let result = await axios.get("http://localhost:3000/restaurant");
      this.restaurant = result.data;
    }
  },
  async mounted()
  {
      this.loadData();
  }
}
</script>
<style>
table{
  width: 100%;
  table-layout: fixed;
}
.tbl-header{
  /* background-color: #f2ca66; */
  /* background-color: #af1763; */
  background-color: #39a1f4;
 }
.tbl-content{
  height: 300px;
  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid rgba(255,255,255,0.3);
}
th{
  padding: 15px 15px;
  text-align: left;
  font-weight: 700;
  font-size: 1em;
  color: #fff;
  text-transform: uppercase;
}
td{
  padding: 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 300;
  font-size: 1em;
  color: #222;
  border-bottom: solid 1px rgba(255,255,255,0.1);
}
.tbl-content tbody tr:nth-child(odd) {
    color: #ffffff;
    background: #e2e5e8;
}
.add-action-link {
  font-size: 1rem;
  position: absolute;
  top: 5em;
  right: 2em;
  width: 200px;
  padding: 12px;
  margin-bottom: 2rem;
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
}
/* table {
  margin: 0 auto;
  margin-bottom: 4em;
  width:90%;
  table-layout: fixed;
}
th {
  background-color: #ffd467;
}
td {

}
th, td {
  padding:.25em .5em;
  text-align:left;
}
.resto-table thead th:nth-child(odd) {
    color: #ffffff;
    background: #324960;
}

.resto-table tr:nth-child(even) {
    background: #dfdfdf;
} */
</style>