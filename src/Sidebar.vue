<template>
    <div id="Sidebar" >
        <div id="head">
            <img src="./assets/头像.jpg" alt="头像" id="Avatar">
            <div id="notification" v-show="not">
                <p id="Not">{{ notification }}</p>
            </div>
        </div>
        

        <p id="TagsTitle">Tags</p>
        <div id="Tags">
            <span class="listedTags"> 冷静克制 </span>
            <span class="listedTags"> 安静洒脱 </span>
            <span class="listedTags"> 雅致随和 </span>
            <span class="listedTags"> 安然自适 </span>
            <span class="listedTags"> 淡薄致远 </span>
            <span class="listedTags"> 宁静安然 </span>
            <span class="listedTags"> 诗情画意 </span>
        </div>
        <div style="display: flex;flex-direction: row; width: 450px; height: 220px;" >
            <div id="PersonalData">
                <p class="Data">Id : xymm</p>
                <p class="Data">Age : 18</p>
                <p class="Data">Birthday : 6.10</p>
                <a class="Data" style="cursor: pointer;" href="https://www.whu.edu.cn/">School : Whu.RS</a>
            </div>
            <div id="icon">
                <p id = "output">
                    {{ output }}
                </p>
                <ol style="list-style: none; display: flex; flex-direction: column; ">
                    <li class="iconfont icon-qq  icon"  @click="OnCopyQQ" 
                    @mouseenter="mouseenter1" @mouseleave="mouseleave" style="border: 1px solid black; border-radius: 5%;"
                    :style="{color:ifco1 ? 'red' : 'grey'}" >QQ</li>
                    <li class="iconfont icon-weixin  icon"  @click="OnCopyWeChat"
                     @mouseenter="mouseenter2" @mouseleave="mouseleave" style="border: 1px solid black; border-radius: 5%;"
                     :style="{color:ifco2 ? 'red' : 'grey'}">WeChat</li>
                    <li class="iconfont icon-bilibili  icon"  @click="OnCopyBili"
                     @mouseenter="mouseenter3" @mouseleave="mouseleave" style="border: 1px solid black; border-radius: 5%;"
                     :style="{color:ifco3 ? 'red' : 'grey'}">Bili</li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import './assets/qq/iconfont.css'
import './assets/wechat/iconfont.css'
import './assets/bili/iconfont.css'
import { ref } from 'vue'

let not = ref(false) ;
var notification = ref("")
const copyQQ = ref("2514521643");
const copyWeChat = ref("qq2514521643");
const copyBili = ref("UID:3546977186875886");
let output = ref("");
let ifco1 = ref(false) ; 
let ifco2 = ref(false) ; 
let ifco3 = ref(false) ; 
const mouseleave = () =>{
    output.value = ""
    ifco1.value = false ;
    ifco2.value = false ;
    ifco3.value = false ;
}
const mouseenter1 = () =>{
    output.value = "复制QQ号"
    ifco1.value = true ;
}
const mouseenter2 = () =>{
    output.value = "复制微信号"
    ifco2.value = true ;
}
const mouseenter3 = () =>{
    output.value = "复制bili UID"
    ifco3.value = true ;
}
const showMessage = (message: string) => {
    notification.value = message;
    not.value = true;
    setTimeout(() => {
        not.value = false;
    }, 3000);
}
const OnCopyQQ = async()=>{

    try{
        await navigator.clipboard.writeText(copyQQ.value);
       showMessage("复制成功")
    }
    catch (error){
        showMessage("复制失败")
    }
}
const OnCopyWeChat = async()=>{
    try{
        await navigator.clipboard.writeText(copyWeChat.value);
        showMessage("复制成功")
    }
    catch (error){
        showMessage("复制失败")
    }
}
const OnCopyBili = async()=>{
    try{
        await navigator.clipboard.writeText(copyBili.value);
        showMessage("复制成功")
    }
    catch (error){
        showMessage("复制失败")
    }
}

</script>
<style>
#Sidebar{
    border-right: 1px solid white;
    height: 100%;
    width: 500px;
    position: fixed;
    top:0%;
    left:0%;
}
#head{
    position: relative;
    top: 0px;
    display: flex;
    flex-direction: row;
    margin: 10px;
    height: 200px;
    width: auto;
    justify-content: end;
}
#notification{
    position: relative;
    right: 10px;
    height: 180px;
    width: 150px;
    max-width: 150px;
}
#Avatar{
    border-radius: 50%;
    position: absolute;
    height :170px ;
    width :170px ;
    left: 100px;
    top: 10px;
    object-fit: cover;
    margin-top: 0px;
    margin-bottom: 10px;
    display: block;
}
#output{
    position: relative;
    left: 50px;
    font-family: "微软雅黑";
    color: red;
    height: 22px;
    border: 2px solid black;
    width: 100px;
    max-height: 50px;
    max-width: 200px;
    background-color: gray;
}
#Tags{
    height: 200px;
    width:450px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
#TagsTitle{
    position: relative;
    left: 150px;
    height: 30px;
    width: 80px;
    display: block;
    border-right: 50px;
    margin: 10px;
    font-size: 30px;
}
.listedTags{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height:50px;
    width:100px;
    border: 2px solid rgba(6, 25, 234, 0.5);
    border-radius: 10%;
    background-color: rgba(24, 144, 255, 0.3);
    margin: 10px;
    color: blue;
    font-size: 20px;
    font-family: "隶书";
}
#PersonalData{
    height: 200px;
    width:auto;
    border: 10px;
    display: flex;
    flex-direction: column;
    margin: 20px;
}
.Data{
    height: 30px;
    width: auto;
    max-width: 200px;
    margin: 10px;
    border: 10px;
    color: red;
    font-size: 24px;
    font-family: "Comic Sans MS";

}
#icon{
    height: 200px;
    width: auto;
    max-width: 200px;
    position: relative;
    right: 20px;

}


.icon{
    cursor: pointer;
    font-size: 25px;
    margin: 10px;
}

#Not{
    display: flex;
    font-size: 75px;
    color: green;
    font-family: "隶书";
}
</style>
