<template>
  
    <div id="Welcome" >
      <div id="box">
         <span 
      v-for="(char, index) in WelcomeChars" 
      :key="index" 
      class="char"
      :style="{ animationDelay: `${index * 0.2}s` }">
      {{ char }}
        </span>
        </div>
    </div>
</template>

 <script setup lang="ts">
import { onMounted ,ref } from 'vue';

 let  welcomeText= "喜相见!请多指教!";
let WelcomeChars = ref(welcomeText.split(""));
const initChars = () => {
  WelcomeChars.value = welcomeText.split("");
}

onMounted(() => {
  initChars()
})
</script>

<style>
#pages{
  position: absolute;
  left: 510px;
  margin: 30px;
  top: 200px;
  flex-direction: row;
  flex-wrap: wrap;
  width: auto;
  height: max-content;
}
#Welcome{
    position: absolute;
    top: 20px;
    left: 550px;
    height: 60px;
    width: auto;
    max-width: 450px;
    border: 10px;
    margin: 10px;
}
@keyframes dropIn {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  70% {
    opacity: 1;
    transform: translateY(5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.char {
  display: inline-block;
  font-size: 50px;
  width: auto;
  font-weight: bold;
  color: rgb(255,99,71);
  opacity: 0;
  transform: translateY(-30px);
  animation: dropIn 3s ease forwards;
  font-family: "隶书";
}

#box{
  height: 60px;
  width: auto;
  display: flex;
  overflow: visible;
  flex-wrap: wrap;
}
#poem{
  border: 1px;
  border-radius: 50%;
  position: relative;
}
</style>