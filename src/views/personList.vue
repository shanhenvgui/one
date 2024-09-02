<template>
  <div class="">
    我是人员列表展示
    
    <RouterLink to="/add">添加人员</RouterLink>
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

</script>

<style lang="scss" scoped></style>
