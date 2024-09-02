<template>
  <div class="">
    我是人员列表添加
    <br>
   <form>
    <label for="name">姓名：</label>
    <input type="text" id="name" v-model="name">
    <br>
    <label for="age">年龄：</label>
    <input type="text" id="age" v-model="age">
    <br>
    <label for="tel">电话：</label>
    <input type="text" id="tel" v-model="tel">
    <br>
    <label for="password">密码: </label>
    <input type="password" id="password" v-model="password">
    <br>
    <button type="submit" @click.prevent="add">提交</button>
   </form>
    <br>
     <div>
        我是人员列表展示
        <br>
        <input type="text" v-model="queryname">
        <button @click="searchName">搜索姓名</button>
        <table>
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>电话</th>
                    <th>密码</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(per,index) in filterperson" :key="index">
                    <td v-for="(cell,index) in per" :key="index">
                        {{ cell }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div> 
    <RouterLink to="/">返回</RouterLink>
  </div>
</template>

<script setup>
import { ref } from "vue"
const person = ref([])

// 定义输入状态
const name = ref('')
const age = ref('')
const tel = ref('')
const password = ref('')
const queryname = ref('')
const filterperson = ref(person.value)

console.log('Person Data:', person.value);
console.log('Query Name:', queryname.value);
console.log('Filtered Person:', filterperson.value);

function add(){
     // 创建一个新的人员对象
  const newPerson = {
    name: name.value,
    age: age.value,
    tel: tel.value,
    password: password.value
  }
  // 将新人员对象添加到人员列表
  person.value.push(newPerson)
  // 清空输入状态
  name.value = ''
  age.value = ''
  tel.value = ''
  password.value = ''
}

function searchName(){
    // if(!queryname.value)return person.value
    filterperson.value = person.value.filter(per => 
    per.name.toLowerCase().includes(queryname.value.toLowerCase()))
}


</script>

<style lang="scss" scoped></style>
