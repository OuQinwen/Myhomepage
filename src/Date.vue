<template>
    <div id="Date">
        <div id="big">{{ hour }} : {{ minutes }} : {{ seconds }}</div>
        <div id="middle">{{ year }} 年 {{ month }} 月 {{ date }} 日 </div>
        <div id="small">星期 {{ day }}</div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
// 使用ref创建响应式变量
const today = ref(new Date())
const hour = ref(today.value.getHours())
const minutes = ref(today.value.getMinutes())
const seconds = ref(today.value.getSeconds())
const year = ref(today.value.getFullYear())
const month = ref(today.value.getMonth() + 1) // 月份从0开始，需要+1
const date = ref(today.value.getDate())
const day = ref("")

// 更新星期的函数
const renew = () => {
    const dayNum = today.value.getDay()
    switch(dayNum){
        case 0: day.value = '日'; break; 
        case 1: day.value = '一'; break; 
        case 2: day.value = '二'; break; 
        case 3: day.value = '三'; break; 
        case 4: day.value = '四'; break; 
        case 5: day.value = '五'; break; 
        case 6: day.value = '六'; break; 
        default: console.log('DAYError');
    }
}

// 更新时间函数
const updateTime = () => {
    today.value = new Date()
    hour.value = today.value.getHours()
    minutes.value = today.value.getMinutes()
    seconds.value = today.value.getSeconds()
    year.value = today.value.getFullYear()
    month.value = today.value.getMonth() + 1
    date.value = today.value.getDate()
    renew()
}

onMounted(() => {
    // 初始化第一次显示
    updateTime()
    
    // 设置定时器每秒更新
    setInterval(updateTime, 1000)
})
</script>
<style>
#Date{
    box-shadow: 2px 2px 5px rgba(240, 240, 240, 1);
    background-color: rgba(240, 240, 240, 0.395);
    z-index: 302;
    position: absolute;
    width: auto;
    padding: 2px;
    right: 2px;
    top: 0px;
    height: 130px;
    display: flex;
    flex-direction: column;
}
#big{
    text-align: center;
    border-bottom: 2px solid black;
    font-size: 45px;
    width: auto;
    height: 50px;
    z-index: 303;
    font-family: "微软雅黑";
}
#middle{
    text-align: center;
    font-family: "微软雅黑";
    font-size: 35px;
    width: auto;
    height: 40px;
    z-index: 303;
}
#small{
    text-align: center;
    font-family: "隶书";
    font-size: 35px;
    width: auto;
    height: 40px;
    z-index: 303;
}
</style>