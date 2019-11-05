<template>
  <div id="app">



    <router-view/>

    <!-- 底部 -->
    <div id="nav" v-show="isNav">
      <router-link to="/home">
          <span class="iconfont icon-shouye"></span>
          <div class="foo">首页</div>
      </router-link>
      <router-link to="/book">
          <span class="iconfont icon-icon--"></span>
          <div class="foo">卖书</div>
      </router-link>
      <router-link to="/cart">
          <span class="iconfont icon-gouwuche"></span>
          <div class="foo">购物车</div>
      </router-link>
      <router-link to="/user">
          <span class="iconfont icon-yonghu"></span>
          <div class="foo">我的</div>
      </router-link>
      
    </div>
    
  </div>
</template>

<script>
export default {
    name:'App',
    data(){
      return {
          isNav: false
          
      }
    },
    mounted(){
      const name= this.$route.name
      this.isNav =/home|book|cart|user/.test(name)
    },
    watch: {
      $route(to,from){
        this.isNav =/home|book|cart|user/.test(to.name)
      }
    }
}
</script>

<style lang="scss">
      // 引入字体图标
	  @import url(./assets/font/iconfont.css);
    *{
        margin: 0;
        padding: 0;
	    }
    input{
		    outline: none;
      }
      .mint-toast{
		z-index: 10000!important;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
    width: 100vw;
		height: 3.1rem;
		display: flex;
		position: fixed;
		left: 0;
		bottom: 0;
    border-top: 1px solid #999;
  a {
      background: #fff;
			flex: 1;
			display: flex;
      flex-direction: column;
			justify-content: center;
			align-items: center;
			font-weight: bold;
			color: rgb(102, 102, 102);
			font-size: 0.28rem;
			text-decoration: none;
      .iconfont{
        height: 1.4rem;
        font-size: 1.4rem;
        display: block;
      }
      .foo{
            margin-top: .3em;
      }
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
