<template>
    <div id="container">
        <div class = "smallcontainer">
            <router-link to = "/poems">
            <img src="./assets/poem.jpg" alt="poems" id = "poem">
            <p class="comments">poems:诗记</p>
            </router-link>
        </div>
    </div>

</template>

<script setup>
import './assets/return/iconfont.css'
</script>

<style>
#container{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    position: absolute;
    top: 110px;
    left: 500px;
    margin: 10px;
    padding: 10px;
    border-radius: 20%;
    z-index: 210;
}
.smallcontainer{
    z-index: 299;
    margin: 5px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: grey;
    border: 2px solid black;
}
#poem {
    z-index: 300;
    border: 1px;
    border-radius: 5%;
    max-width: 250px;
    max-height: 250px;
    border: 2px solid rgba(255, 255, 255, 0.5);
}
.comments{
    margin: 0px;
    z-index: 300;
    color: rgba(4, 254, 254, 0.95) ;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5%;
    border: 2px solid rgba(255, 255, 255, 0.5);
    font-family: "隶书";
    font-size: 40px;
    text-align: center;
}
</style>
