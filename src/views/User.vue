<template>
    <div class="btns">
				<h2><img src="@/assets/img/logo.png" alt=""></h2> 
				<span>{{userInfo ? userInfo.username : '您暂未登录账号,请登录'}}</span>
				<template v-if="!userInfo">
						<router-link to="/register" class="from">注册</router-link> 
						<router-link to="/login" class="from">登录</router-link>
				</template>
				<span class="exit" v-else @click="onExit">退出登录</span>
		
    </div>
</template>

<script>
export default {
		data(){
			return {
				token: '',
				userInfo: null
			}
		},
		methods: {
				// 请求获取用户信息
			reqUserInfo(){
				this.$axios.post('/wangye/api/user/t/info',{
					token: this.token
				})
				.then((res) => {
					const {code,msg,info} = res

					if(code == 1){
						this.userInfo = info
					}else{
						console.log(msg)
					}
				})
			},
			// 退出登录
			onExit(){
				// 清空data中的token
				this.token = ''
				// 还要清空localStorage中的token
				localStorage.setItem('token','')

				// 清空data中的userInfo
				this.userInfo = null
			}	
		},
		mounted(){
			// 获取localStoage中的token
			this.token = localStorage.getItem('token')
				// 请求获取用户信息
			this.reqUserInfo()
		}
}
</script>

<style lang="scss" scoped>
	.btns{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		.from,.exit{
			display: block;
			width: 60vw;
			margin: 3vw 0;
			height: 9vw;
			line-height: 9vw;
			border-radius: 4vw;
			border: none;
			color: #fff;
			text-decoration: none;
			background-color: #18c3aa;
		}
		}
</style>