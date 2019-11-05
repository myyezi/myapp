<template>
  <div class="myForm">
      <h2><img src="@/assets/img/logo.png" alt=""></h2>
      <!-- 需要插入的头部 -->
      <slot name="header">
          <div class="title">我是一个表单</div>
      </slot>

      <!-- 用户名和密码 -->
      <div class="row">
          <label class="label" for="username" >用户名:</label>
          <input type="text" class="ipt" id="username" v-model="username" :placeholder="usernamePH">
      </div>
      <div class="row">
          <label class="label" for="username">密  码:</label>
          <input type="text" class="ipt" id="password" v-model="password">
      </div>

    <!-- 插入其他内容 -->
    <slot />

    <!-- 底部操作按钮 -->
    <div class="btns">
        <mt-button class="btn" type="primary" @click="onSubmit">提交</mt-button>
        <mt-button class="btn" @click="onReset">重置</mt-button>
    </div>

  </div>
</template>

<script>
    import {Toast} from 'mint-ui'

export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
    props:['usernamePH'],
    methods:{
        //点击重置
        onReset(){
            this.username =""
            this.password =""

            //使用$emit向父组件发送消息
            this.$emit('reset')
        },
        //点击提交
        onSubmit(){
            const {username,password} =this
            //第二个参数是消息的内容,也就是需要传给父组件的参数
            this.$emit('submit',{
                username,password
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .myForm{
        margin: 2.2rem auto 0;
       background-color: rgba(24, 195, 170, 0.1);
        border-radius: 0.1rem;
        padding: 5vw;
        box-sizing: border-box;
        width: 78vw;
    }

    .title{
        margin-bottom: 1rem;
        text-align: center;
        font-size: 6vw;
        font-weight: 600;
    }
    .row{
        margin-bottom: 0.6rem;
        display: flex;
        align-items: center;

        #code{
            width: 6vw;
            height: 8vw;
        }
        .label{
            width: 15vw;
            font-size: 4vw;
        }
        .ipt{
            border-radius: 4vw;
            border:1px solid #999;
            flex: 1;
            height: 8vw;
            padding: 0 4vw;
            
        }
    }

    .btns{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        .btn{
            width: 60vw;
            margin: 1.5vw 0;
            height: 9vw;
            border-radius: 4vw;
            border: none;
            color: #fff;
            background-color: rgb(24, 195, 170);
            outline: none;
        }
    }
</style>