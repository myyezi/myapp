<template>
    <div class="goodsDetail" v-if="goodsDetail">
        <!--返回按钮-->
        <div class="backTo" v-show="isShow">
            <span v-on:click="back" class="iconfont icon-jiantou3"></span>
            <span class="title">{{goodsDetail.title}}</span>
        </div>

        <!-- 商品信息 -->
        <div class="mainGoods">
            <div class="Detail">
                <img class="bigImg" :src="$commonUrl + goodsDetail.images" alt="" />
            </div>
            <div class="info">
                <div class="biaoti"><h3>{{goodsDetail.title}}</h3></div>
                <div class="goodsTitle">
                    <span class="price">￥{{goodsDetail.price}}</span>
                    <span class="zhe">二手{{goodsDetail.zhe}}折</span>
                </div>

                <div class="publisher">出版社:{{goodsDetail.publisher}}</div>

                <div class="price-num">原价：￥{{goodsDetail.yuanjia}}</div>
                <div class="pingfen">
                    <div class="zuo">
                        豆瓣评分:<span class="doubanRating">{{goodsDetail.doubanRating}}</span>
                    </div>
                    <!-- <div class="you">
                        <mt-badge size="normal">{{goodsDetail.doubanRating}}</mt-badge>
                    </div> -->
                </div>
                <div class="jieaho">
                    <h5><mt-cell title="本书相关内容简介:"></mt-cell></h5>
                    <p>{{goodsDetail.content}}</p>
                </div>
            </div>
        </div>

        <!-- 底部菜单栏 -->
        <div class="bottom">
            <div class="item first" @click="toHome">
                <i class="iconfont icon-shouye" />
            </div>

            <div class="item second" @click="toCartList">
                <span class="iconfont icon-gouwuche"></span>
            </div>

            <div class="item third" @click="showAdd">
                <mt-button size="small">加入购物车</mt-button>
            </div>  
        </div>
        <!-- 弹出窗 -->
        <mt-popup  v-model="isAdd" popup-transition="popup-fade" position="bottom">
            <div class="addInfo">
                <img class="close" src="@/assets/img/close.png" @click="hideAdd" />

                <div class="skus">
                    <span class="name">规格：</span>

                    <span class="sku" 
                        v-for="(item,index) in goodsDetail.goodsSkus.split(',')" :key="index"
                        :class="{active: item == buySku}"
                        @click="chooseSku(item)"
                    >{{item}}</span>
                </div>

                <div class="num">
                    <span class="name">数量：</span>

        <span class="decrease" @click="onDecrease"><img src="@/assets/img/reduce.png" class="reduce"></span>
        <span class="val">{{buyNum}}</span>
        <span class="increase" @click="onIncrease"><img src="@/assets/img/add.png" class="addya"></span>
                </div>

                <mt-button class="submit" type="primary" @click="onAdd">确定</mt-button>
            </div>
        </mt-popup> 
    </div>
</template>

<script>
import { Cell } from 'mint-ui';
export default {
        data(){
            return {
                goodsId: '',
                goodsDetail: null,
                similarList: [],
                isAdd: false,

                buyNum: 1,
                buySku: '',
                isShow:true,
                token: '',
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
            // 显示和隐藏弹窗
            showAdd(){
                // 判断token是否存在 
                if(!this.token){
                    // 如果不存在，说明用户未登录，跳转到登录页
                    this.$router.push('/login')

                    return false
                }

                this.isAdd = !this.isAdd
            },
            // 隐藏弹窗
            hideAdd(){
                this.isAdd = false
            },
            // 选择规格
            chooseSku(newSku){
                const oldSku = this.buySku

                if(!oldSku){
                    this.buySku = newSku
                }else if(oldSku == newSku){
                    this.buySku = ''
                }else{
                    this.buySku = newSku
                }
            },
            // 点击减少
            onDecrease(){
                if(this.buyNum == 1){
                    this.$Toast({
                        message: '商品数量不能小于1件',
                        duration: 2000
                    })
                }else{
                    this.buyNum--
                }
            },
            // 点击增加
            onIncrease(){
                this.buyNum++
            },
            // 点击添加到购物车
            onAdd(){
                const {token,goodsId,buySku,buyNum} = this

                if(!buySku){
                    this.$Toast('请选择商品规格')

                    // 阻止代码向下运行
                    return false
                }

                // 发出请求
                this.$axios.post('/wangye/api/cart/t/add',{
                    token,
                    goodsId,
                    buySku,
                    buyNum
                })
                .then((res) => {
                    const {code,msg} = res

                    if(code == 1){
                        this.$Toast(msg)

                        // 关闭向上弹窗
                        this.isAdd = false
                    }else if(code == -1){
                        this.$Toast(msg)
                    }else if(code == -2){
                        this.$Toast(msg)

                        // 自动跳转到登录页
                        this.$router.push('/login')
                    }
                })
            },
            // 请求获取商品详情
            reqGoodsDetail(){
                return this.$axios.post('/wangye/api/goods/detail',{
                    goodsId: this.goodsId
                })
                .then((res) => {
                    const {code,msg,info} = res

                    if(code == 1){
                        this.goodsDetail = info
                    }else{
                        console.log(msg)
                    }
                })
            },
            // 跳转到购物车列表
            toCartList(){
                this.$router.push(this.token ? '/cart' : '/login')
            },
            // 跳转到商品详情页 0 
            toGoodsDetail(id){
                this.$router.push({
                    params: {goodsId: id},
                    query: {from: '商品详情'}
                })
            },
            // 回到首页
            toHome(){
                this.$router.push('/home')
            },
            // 组件初始化的操作
            initComponent(){
                // 从localStorage中获取token
                const token = localStorage.getItem('token')
                this.token = token

                // 获取传入的商品ID
                const {goodsId} = this.$route.params
                this.goodsId = goodsId

                // 请求获取商品详情
                this.reqGoodsDetail()
            }
            
        },
        mounted(){
            const token = localStorage.getItem('token')
            this.token = token

            this.initComponent()
        },
        activated(){
            console.log('activated')
            this.initComponent()
        },
        beforeRouteUpdate(to, from, next){
            next()
            this.initComponent()
        },
        watch:{
            $route(now,old){     //监控路由变换，控制返回按钮的显示
                if(now.path=="/home/home"){
                        this.isShow=false;
                } else{
                    this.isShow=true;
                }
                }
        }
}
</script>

<style lang="scss" scoped src="./GoodsDetail.scss"></style>