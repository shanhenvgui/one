<template>
  <div class="box">
    <!-- 网格布局 -->
    <div class="grid1">111</div>
    <div class="grid">222</div>
    <div class="grid">333</div>
    <div class="grid">444</div>
    <div class="grid">555</div>
    <div class="grid">666</div>
    <div class="grid">777</div>
    <div class="grid">888</div>
    <div class="grid">999</div>
    <div class="grid">000</div>
  </div>
  
</template>

<script setup>
import {} from "vue"
</script>

<style lang="less" scoped>
.box{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    padding: 30px;
    // justify-items: center;
    .grid{
        height: 200px;
        // width: 200px;
        background-color: pink;
        border-radius: 8px;
        // justify-content: center;
        // align-items: center;
        text-align: center;
    }
    .grid1{
        grid-row: 1/3;
        grid-column: 1/3;
        background-color: aqua;
        border-radius: 8px;
    }
}
</style>
