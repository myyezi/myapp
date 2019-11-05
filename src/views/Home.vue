<template>
  <div class="home">
    <div class="top">
          <div class="search">
                <input class="ipt" type="text" @keyup.enter="onSearch" v-model="search_val" placeholder="朝花夕拾">
                <a class="btn" href="/" @click.prevent.stop="onSearch">搜索</a>
          </div>
    </div>
    <div class="HorizontalScroll">
      <ul class="HorizontalScroll-list">
          <div class="jsx-1076614701"><a href="#/fenlei">全部分类</a></div>
          <div class="jsx-3476543044 aa"><a href="/categories/subscribed/0">新上架</a></div>
      </ul>
      <!-- 渲染列表 -->
      
    </div>
    <div style="height: calc(100vh - 2.2rem);overflow: auto;">
        <!-- <GoodsItem v-for="(item,index) in goodsList" :key="index" :item-info="item" /> -->
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
            <!-- 使用template，对元素进行包装，本身可以添加一些vue指令 -->
            <template v-for="(item,index) in goodsList">
                <GoodsItem :key="index" :item-info="item" />
            </template>
        </mt-loadmore>

      </div>
  </div>
</template>

<script>

import GoodsItem from '@/components/GoodsItem.vue'
import { Search } from 'mint-ui';
export default {
  name: 'home',
  data(){
      return {
        goodsList:[],
        pageNum: 1,
        allLoaded: false,
        search_val: '',
        keyword: '',
      }
  },
  components: {
    GoodsItem
  },
  methods:{
     // 请求获取商品列表的第一页
			reqGoodsList(pageNum){
        const {keyword} = this
				return this.$axios.post('/wangye/api/goods/list',{
              pageNum,
              keyword
        })
      },
      // 下拉刷新
      loadTop(type='用户下拉'){
                // 如果是用户下拉导致的刷新，就清空搜索框和关键字，否则就不清空
                if(type == '用户下拉'){
                    this.search_val = ''
                    this.keyword = ''
                }

                this.reqGoodsList(1)
                .then((res) => {
                    const {code,msg,list} = res

                    if(code == 1){
                        // 将整个列表替换成第一页
                        this.goodsList = list
                        // 将页数改为1
                        this.pageNum = 1
                    }else{
                        console.log(msg)
                    }

                    // 关闭顶部的loading
                    this.$refs.loadmore.onTopLoaded();
                    // 打开上拉加载更多
                    this.allLoaded = false
                    // 让容器滚回顶部
                    // this.$refs.goodsList.scrollTo(0,0)
                })
            },
        // 上拉加载更多
      loadBottom(){
        
                this.reqGoodsList(this.pageNum + 1)
                .then((res) => {
                    const {code,msg,list} = res

                    if(code == 1){
                        if(list.length){
                            // 将下一页的数据拼接到旧列表数据的后面
                            this.goodsList = this.goodsList.concat(list)
                            // 页数+1
                            this.pageNum++
                        }else{
                            // 关闭上拉加载更多
                            this.allLoaded = true
                        }
                    }else{
                        console.log(msg)
                    }

                    // 关闭底部的loading
                    this.$refs.loadmore.onBottomLoaded();
                })
            },
       // 模糊搜索
            onSearch(ev){
                // 将搜索框的值转换成关键字保存到data中
                this.keyword = this.search_val

                // 刷新页面
                this.loadTop('模糊查询')
            },
  },
  mounted(){
    // 请求获取商品列表的第一页
    this.loadTop()
  }
}
</script>

<style lang="scss" scoped>
    a{
      text-decoration: none;
	    color: #666;
    }
    .home{
      padding-bottom: 3.1rem;
      .top{
        .search{
              width: 96%;
              padding:4% 2%;
            .ipt{
              display: inline-block;
              width: 69%;
              font: inherit;
              font-size: 14px;
              line-height: 24px;
              padding: 6px 16px;
              background: rgb(242, 242, 242);
              border: none;
              border-radius: 999px;
              outline: none;
            }  
            .btn{
              display: inline-block;
              width: 16%;
            }
        }
      }
    }
    .HorizontalScroll{
      height: 2.1rem;
      padding-left: 1rem;
      overflow: hidden;
      .HorizontalScroll-list{
        text-align: left;
        white-space: nowrap;
        overflow-x: auto;
        list-style: none;

        .jsx-1076614701,.jsx-3476543044{
          background-color: rgb(242, 242, 242);
          color: rgb(170, 170, 170);
          margin-right: 0.64rem;
          padding: 0 1rem;
          border-radius: 0.32rem;
          position: relative;
          display: inline-block;
          height: 2.12rem;
          vertical-align: middle;
          line-height: 2.12rem;
          font-weight: 400;
      }

      .aa{
        color: rgb(255, 255, 255);
        background-color: rgb(214, 186, 140)
      }
    }
    }
    


</style>
