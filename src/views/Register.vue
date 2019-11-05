<template>
    <div class="register">
        <MyForm @reset="onReset" @submit="onRegister" >
            <template v-slot:header>
                <div class="title">用户注册</div>
            </template>

            <div class="row">
                <label for="tel" class="label">手机号:</label>
                <input type="number" class="ipt" id="tel" v-model="tel"> 
            </div>

            <div class="row">
                <label for="tel" class="label">验证码:</label>
                <input type="number" class="ipt" id="code" v-model="code"> 
                <mt-button class="btn" type="primary" :disabled="btnText != '获取验证码'" @click="getCode">{{btnText}}</mt-button>
            </div>

        </MyForm>
    </div>
</template>

<script>
    import MyForm from '@/components/MyForm.vue'
    import { Toast } from 'mint-ui';

    export default {
        data(){
            return{
                tel:'',
                code:'',
                btnText:'获取验证码'
            }
        },
        components:{
            MyForm
        },
        methods: {
            //重置
            onReset(){
                this.tel =''
                this.code=""
            },
            getCode(){
                console.log('getCode')
                const tel =this.tel
                //校验手机号
                if(!/^1[34578]\d{9}$/.test(tel)){
                    Toast('请输入正确的手机号')
                    return false
                }

                //倒计时
                let num =60 
                let timer =setInterval(()=>{
                    num--
                    if(num != 0){
                        this.btnText =`(${num}s)`
                    }else{
                        this.btnText=`获取验证码`
                        clearInterval(timer)
                    }
                },1000)
                //请求获取验证码
                this.$axios.post('/wangye/api/register/getCode',{tel})
                .then((res) =>{
                    const {code,msg} =res
                    Toast(msg)
                })
            },
            onRegister(data){
                //获取子组件传上来的用户名和密码
                const {username,password} =data

                //获取当前组件中的手机号和验证码
                const {tel,code}= this

                //检验参数
                if(!username && password && tel && code){
                    Toast('请确认信息填写无误')
                    return false
                }
                //发送请求
                this.$axios.post('/wangye/api/register/useCode',{
                    username,
                    password,
                    tel,
                    code
                })
                .then((res)=>{
                    const {code ,msg} =res
                    if(code==1){
                        Toast(msg)

                        //使用replace,跳转到登录页
                        this.$router.replace('/login')
                    }else{
                        Toast(msg)
                    }
                })
            }
        }
}
</script>

<style lang="scss" scoped>
        .title{
            color: #000;
        }

        .row{
            .btn{
                margin-left: 0.2rem;
                width: 25vw;
                height: 8vw;
                color: #999;
                background-color: rgba(24, 195, 170, 0.3);
                border: none;
                font-size: 3.5vw;
                border-radius: 2vw;
            }
        }
</style>