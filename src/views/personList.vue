<template>
  <div class="">
    我是人员列表展示
    
    <RouterLink to="/add">添加人员</RouterLink>
  </div>
  <div id="main" style="width: 100% ;height: 500px;">

  </div>
  <!-- <div v-for="(per,index) in person" :key="index">
     {{ per.name }}
     {{ per.age }}
     {{ per.tel }}
     {{ per.password }}
  </div> -->
</template>

<script setup>
import { RouterLink,RouterView } from "vue-router";
// import{person} from '@/views/addperson.vue'
import {ref} from "vue"
import * as echarts from "echarts"
import { onMounted } from "vue";
const myechart =ref(null) 
onMounted(()=>{
  
 myechart.value = echarts.init(document.getElementById('main'))
const option = {
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      data: [23, 24, 18, 25, 27, 28, 25]
    },
    {
      type: 'bar',
      data: [26, 24, 18, 22, 23, 20, 27]
    }
  ]
};
myechart.value.setOption(option);
})

</script>

<style lang="less" scoped>
  #id{
    width: 100%;
    height: 500px;
  }
</style>
