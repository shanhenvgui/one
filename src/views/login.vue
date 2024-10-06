<template>
    <div class="from">
    <a-form
      :model="formState.userInfo"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
        <a-form-item
            label="Username"
            name="username"
            :rules="[{ required: true, message: 'Please input your username!' }]"
        >
            <a-input v-model:value="formState.userInfo.username" />
        </a-form-item>

        <a-form-item
            label="Password"
            name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]"
            >
            <a-input-password v-model:value="formState.userInfo.password" />
        </a-form-item>
    
        <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
            <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
        </a-form-item>
    
        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
    </a-form>
    </div>
</template>


<script lang="ts" setup>

import { reactive } from 'vue';
import {login} from '@/api/user'
import router from '@/router';


interface FormState {
    userInfo:{
        username: string;
        password: string;
    }
    
    remember: boolean;
}

const formState = reactive<FormState>({
    userInfo:{
        username: '',
        password: '',
    },
   
    remember: true,
});
const onFinish = async (values: any) => {
  
    // console.log('Success:', values);
    try {
        const res = await login(formState.userInfo)
        const {data} = res;
        if(res.status === 200){
            router.push('/list')
        }
        console.log(res);
        
        // localStorage.setItem('token',data.token)
    } catch (error) {
        console.log('请求失败');
        console.log(error);
        
        throw error;
    }
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
</script>

<style  scoped lang="less">
    .from{
        width: 100vw;
        height: 100vh;
        margin: auto;
        align-items: center;
        justify-content: center;
        display: flex;
        background-color: #cfd7f9;
    }
  
</style>
