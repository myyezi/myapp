<template>
    <div class="login">
        <MyForm @submit="onLogin" usernamePH="请输入用户名或者手机号码">
            <template v-slot:header>
                <div class="title">用户登录</div>
            </template>
        </MyForm>

        <!-- 使用replace,跳转到注册页 -->
        <router-link class="tiaozhuan" to="/register" replace>还没有账号?立即注册>></router-link>  
    </div>
</template>

<script>
    import MyForm from '@/components/MyForm.vue'
    import { Toast } from 'mint-ui';

    export default {
        components:{
            MyForm
        },
        methods:{
            //登录
            onLogin(data){
                //获取子组件传上来的用户名和密码
                const {username,password} =data

                //检验参数
                
                if(!(username && password)){
                    Toast('请确认信息填写完整')
                    return false
                }

                //发出请求
                this.$axios.post('/wangye/api/login/t',{
                    username,
                    tel:username,
                    password
                })
                .then((res) =>{
                    const {code,msg,token} =res

                    if(code ==1){
                        Toast({
                            message:msg,
                            duration:500
                        })

                        //将token存到localStorage
                        localStorage.setItem('token',token)

                        //等到提示结束,自动跳转到首页
                        setTimeout(()=>{
                            //this.$router.back('/home')
                        this.$router.push('/home')
                        
                        },500)
                    }else{
                        Toast(msg)
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tltle{
        color: #000;
    }
    a{
        text-decoration: none;
        float: right;
        line-height: 0.6rem;
        padding-right: 0.8rem;
    }
    .tiaozhuan{
        display: block;
        height: 6vw;
        line-height: 6vw;
        margin: 5vw 2.2rem;
        color: #18c3aa;
    }
</style>