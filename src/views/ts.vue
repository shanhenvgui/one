<template>
  <div class="">111</div>
</template>

<script setup lang="ts">
// import { log } from "console";
import {} from "vue"

//接口名字为book
//接口：定义对象结构
interface book {
    id: string;
    isAvailable: boolean
}
//接口就好比一个名字，用来描述上面例子里的要求
function liabary(idObj:book) {
    console.log('书籍的id是：',idObj.id);
    
}
let myBook = {id:'孙子兵法' ,isAvailable:false};
liabary(myBook)
//================================================
//接口：定义函数结构
interface searchBook{
    (id:number,name:string):boolean
}

const searchMyBook : searchBook =(x,y):boolean=>{

    if(y === myBook.id){
        return true
    }
    else return false
}
console.log('查找书籍',searchMyBook(1,'孙子兵法'));
//==================================================
//接口：定义类结构

interface person{
    hobby:string,
    school:string,
    age:number
    say(content:string):void
}

class Collage implements person{
    constructor(
        public age:number,
        public school:string,
        public hobby:string
    ){

    }
    say(content: string): void {
        console.log('个人信息',content,this.age,this.hobby,this.school);
        
    }
}
const peter = new Collage(11,'北京大学','足球')
peter.say('helloworld!')
//==================================================
//接口继承

</script>

<style lang="less" scoped></style>
