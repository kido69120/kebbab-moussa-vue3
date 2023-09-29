<script  setup>
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

import Detail from './DetailView.vue';

const API_ENDPOINT= 'https://metallo.ew.r.appspot.com/monsters'
const route =useRoute().params.id
const localBooks =ref({})
const newAPI= API_ENDPOINT+route;

onBeforeMount(async()=>{
    const books= await axios.get(newAPI)
    const {data, status} = books
    console.log(books)
    if(status===200){
      localBooks.value=data
      
    }else{
      console.error('OUPS 😣')
    }
})



</script>
<template>
  <div class="container-fluid">
    <div class="wrapper">
      <div class="row title-section">
        <h2 class="mbr-section-title mbr-fonts-style display-2"><strong>Monsters</strong></h2>
      </div>
      <div class="row justify-content-center">
        <div class="card">
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">651088132f75197b24892744</th>
                <td>Chuchu</td>
                <td>Monsters</td>
                <td><button type="button" class="btn btn-primary btn-sm m-0">Voir 👀</button> </td>
              </tr>
              <tr>
                <th scope="row">2651088132f75197b24892744</th>
                <td>Chuchu</td>
                <td>Monsters</td>
                <td><button type="button" class="btn btn-primary btn-sm m-0">Voir 👀</button> </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>