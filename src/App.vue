<template >
    <img src="./assets/background.webp" alt="backgrund" id="background" >
  <Sidebar style="z-index: 999;">
  </Sidebar>
  <WelCome style="z-index: 300;" v-if="home" >
    
  </WelCome>
  <Main style="z-index: 300;" v-if="home">
    
  </Main>
  <DateToday v-show="home"/>
  <router-view >
  </router-view>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Sidebar from './Sidebar.vue';
import WelCome from './Welcome.vue';
import { watch } from 'vue';
import Main from './main.vue'
import {ref} from 'vue'
import DateToday from './Date.vue'
const route = useRoute();
var home = ref(true) ;
const change = () => {
  home.value = !home.value;
}
watch(
  () => route.path,
  (newPath, oldPath) => {
    console.log('路由从', oldPath, '变化到', newPath);
    if(oldPath !== newPath) 
    change();
  }
);



</script >
<style scoped>
#background{
    background-size: cover;
    position: fixed;
    top: -200px;
    background-position: center;
    width: 100%;
    /* height: 729.6px; */
    z-index: 100;
}
</style>
