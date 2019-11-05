<template>
    <div class="cartList">
        <div class="backTo" v-show="isShow">
            <span v-on:click="back" class="iconfont icon-jiantou3"></span>
        </div>

    <div class="goods">
            <div class="cartItem" v-for="(item,index) in cartList" :key="item._id">
    <div class="header">
      <a class="xuanxiang">
        <img class="left" :src="require('@/assets/img/' + (item.isChosen ? 'chosen' : 'unchosen') + '.png')" @click="chooseItem(item)" />
      </a>
      <a href="" class="thumb">
        <div class="image">
          <img  class="goodsImg" :src="$commonUrl+item.images" alt="">
        </div>
      </a>
      <div class="content">
        <div class="title">{{item.title}}</div>
        <div class="sku">规格：{{item.buySku}}</div>
        <div class="price">单价 :￥{{item.price}}/本</div>
        <div class="num">
          <span class="name">数量: </span>

          <span class="decrease" @click="onDecrease(item)"><img src="@/assets/img/reduce.png" alt="" class="reduce"></span>
          <span class="val">{{item.buyNum}}</span>
          <span class="increase" @click="onIncrease(item)"><img src="@/assets/img/add.png" alt="" class="addya"></span>
        </div>
        
      </div>
    </div>

    <div class="footer">
      <div>
        <button @click="delItem(item,index)">删除</button>
      </div>
    </div>
  </div>
    </div>

   <div class="bottom">
            <div class="left">
                <div class="all" @click="chooseAll">
                    <span class="text">全选</span>
                    <img class="img" :src="require('@/assets/img/' + (isAll ? 'chosen' : 'unchosen') + '.png')"/>
                </div>

                <mt-button class="del" type="primary" @click="delAll">删除</mt-button>
            </div>

            <div class="right">
                <!-- 使用过滤器函数，变量与函数之间，函数与函数之间，都要添加一条竖线 -->
                <span class="total">合计: {{chosenList | calcTotal | keepDouble}}</span>
                <mt-button class="buy" type="primary" @click="toPrice">结算</mt-button>
            </div>
    </div>
    </div>
</template>

<script>
export default {
        data(){
            return {
                token: '',
                cartList: [],
                isShow:true,
            }
        },
        computed: {
            isAll: {
                // 获取
                get(){
                    // 获取全选的状态，其实就是判断每个选项是否都被选中
                    return this.cartList.every(e => e.isChosen)
                },
                // 更改
                set(newVal){
                    // 改变全选的状态，其它就是让每个选项发生相同的改变
                    this.cartList.forEach(e => e.isChosen = newVal)
                }
            },
            // 被选中的商品列表
            chosenList(){
                const result = this.cartList.filter(e => e.isChosen)
                // console.log(result)
                return result
            }
        },
        filters: {
            
            // 合计
            calcTotal(list){
                return list.reduce((prevTotal,currItem) => {
                    return prevTotal + currItem.price*currItem.buyNum
                },0)
            },
            // 保留两位小数
            keepDouble(num){
                return num.toFixed(2)
            }
        },
        methods: {
            //结算
            toPrice(){
                
                // chooseItem(item){
             
                    this.$router.push(this.token ? '/address' : '/login')
                 
                // }

                // console.log(item.isChosen)
            },
          back(){
                this.$router.go(-1);//返回上一层
            },
            // 请求获取购物车列表
            reqCartList(){
                this.$axios.post('/wangye/api/cart/t/list',{
                    token: this.token
                })
                .then((res) => {
                    const {code,msg,list} = res

                    if(code == 1){
                        // 给每个数组元素添加一个isChosen属性，表示该元素是否被选中
                        this.cartList = list.map(e => ({
                            ...e,
                            isChosen: false
                        }))
                    }else if(code == -1){
                        console.log(msg)
                    }else if(code == -2){
                        this.$Toast(msg)

                        // 未登录，跳转到登录页
                        this.$router.push('/login')
                    }
                })
            },
            // 点击单选
            chooseItem(item){
                item.isChosen = !item.isChosen
            },
            // 点击全选
            chooseAll(){
                this.isAll = !this.isAll
            },
            // 减少
            onDecrease(item){
                if(item.buyNum == 1){
                    this.$Toast('商品数量至少为1')
                }else{
                    const buyNum = item.buyNum - 1
                    // return false
                    // 发出请求
                    this.$axios.post('/wangye/api/cart/t/update',{
                        token: this.token,
                        cartId: item._id,
                        buyNum: buyNum
                    })
                    .then((res) => {
                        const {code,msg} = res

                        if(code == 1){
                            this.$Toast(msg)

                            // 请求成功之后才会改变页面上的商品数量
                            item.buyNum = buyNum
                        }else{
                            this.$Toast(msg)
                        }
                    })                    
                }
            },
            // 增加
            onIncrease(item){
                const buyNum = item.buyNum + 1
                
                // 发出请求
                this.$axios.post('/wangye/api/cart/t/update',{
                    token: this.token,
                    cartId: item._id,
                    buyNum: buyNum
                })
                .then((res) => {
                    const {code,msg} = res

                    if(code == 1){
                        this.$Toast(msg)

                        // 请求成功之后才会改变页面上的商品数量
                        item.buyNum = buyNum
                    }else{
                        this.$Toast(msg)
                    }
                })
            },
            // 删除某个
            delItem(item,index){
                this.$axios.post('/wangye/api/cart/t/del',{
                    token: this.token,
                    cartIds: item._id
                })
                .then((res) => {
                    const {code,msg} = res

                    if(code == 1){
                        this.$Toast(msg)
                        
                        // 请求成功之后才会删除页面上的商品
                        this.cartList.splice(index,1)
                    }else{
                        this.$Toast(msg)
                    }
                })
            },
            // 删除选中
            delAll(){
                // 获取选中的商品列表，每个数组元素是一个json
                const chosenList = this.chosenList

                // 至少选中一个才能删除
                if(!chosenList.length){
                    this.$Toast('请选择商品')
                    return false
                }

                // 遍历这个数组，取出每个元素的_id，然后用逗号拼接起来
                let cartIds = ''
                for(let e of chosenList){
                    cartIds += ',' + e._id
                }
                cartIds = cartIds.slice(1)

                this.$axios.post('/wangye/api/cart/t/del',{
                    token: this.token,
                    cartIds: cartIds
                })
                .then((res) => {
                    const {code,msg} = res

                    if(code == 1){
                        this.$Toast(msg)
                        
                        // 请求成功之后才会删除页面上的商品
                        const cartList = this.cartList
                        for(let i=0;i<cartList.length;i++){
                            if(cartList[i].isChosen){
                                cartList.splice(i,1)
                                i-- // 每次删完，下标减1
                            }
                        }
                    }else{
                        this.$Toast(msg)
                    }
                })                
            }
        },
        mounted(){
            // 从localStorage中获取token
            const token = localStorage.getItem('token')
            this.token = token

            // 请求获取购物车列表
            this.reqCartList()
        }
}
</script>

<style lang="scss" scoped src="./CartList.scss"></style>