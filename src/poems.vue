<template>
    <router-link to ="/">
    <div class="iconfont icon-fanhuijiantou icon" id="return"></div>
    </router-link>
    <div id="maxbox" > 

        <div style="display: flex;flex-direction: column;margin: 10px; border: 2px solid rgb(255, 255, 240);" >
            <p class="title">灵修(1)</p>
            <div class="poembox">
            <p class="sentences">霜华落绫竹,春草比西苏</p>
            <p class="sentences">飞光扑澄夏,妙玉悬琼秋</p>
            </div>
        </div>
        <div style="display: flex;flex-direction: column;margin: 10px;border: 2px solid rgb(255, 255, 240);">
            <p class="title">霜华颂(2)</p>
            <div class="poembox">
            <p class="sentences">肤柔过江南,明眸比星灿</p>
            <p class="sentences">相顾明风雅,微羞霜不寒</p>
            </div>
        </div>
        <div style="display: flex;flex-direction: column;margin: 10px;border: 2px solid rgb(255, 255, 240);">
            <p class="title">春草颂(3)</p>
            <div class="poembox">
            <p class="sentences">身娇心玲珑,润酥催情衷</p>
            <p class="sentences">抚柔香玉软,浅笑融残冬</p>
            </div>
        </div>
        <div style="display: flex;flex-direction: column;margin: 10px;border: 2px solid rgb(255, 255, 240);">
            <p class="title">扑(4)</p>
            <div class="poembox">
            <p class="sentences">一点冰心落星眸,微颦依依回雪柳</p>
            <p class="sentences">愿戏诸侯寄明月,只为香风流盼羞</p>
            </div>
        </div>
        <div style="display: flex;flex-direction: column;margin: 10px;border: 2px solid rgb(255, 255, 240);">
            <p class="title">悬(5)</p>
            <div class="poembox">
            <p class="sentences">星罗作阵司天穹,穷观六合悬神宫</p>
            <p class="sentences">卜知今宵中秋夜,凌尘盈润笑惊鸿</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style>
#return{
    font-size: 40px;
    position: fixed;
    left: 500px;
    top: 0px;
    z-index: 800;
}
#maxbox{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    z-index: 300;
    position: absolute;
    left: 475px;
    width: 1100px;
    height: 100%;
}

.sentences{
    margin: 10px;
    font-size: 30px;
    max-width: 300px;
    max-height: 100px;
    font-family: "隶书";
    color: chartreuse;
}
.title{
    color: aquamarine;
    font-size: 40px;
    font-family: "隶书";
    max-width: 200px;
    max-height: 50px;
    text-align: center;
}
</style>