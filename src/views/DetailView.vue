<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

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
     <div class="container-fluid d-flex align-items-center justify-content-center">
            <div class="mx-auto">
                <div class="card border-primary mb-3" style="max-width: 32rem;">
                    <div class="card-header">651088132f75197b24892744</div>
                    <img src="https://botw-compendium.herokuapp.com/api/v3/compendium/entry/chuchu/image" alt="Generic placeholder image">
                    <div class="card-body text-primary">      
                        <h5 class="card-title">ChuChu</h5>
                        <p class="card-text">*description* These heavyweight monsters can be found all over Hyrule. They're much tougher than their standard counterparts and often have much stronger weapons equipped.</p>
                        
                        <ul class="list mt-2">
                            <li>[Drops 1]</li>
                            <li>[Drops 2]</li>
                            <li>[Drops 3]</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
</template>