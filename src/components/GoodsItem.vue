<template>
    <div class="goodsItem" @click="toDetail">
        <img class="left" :src="$commonUrl + itemInfo.images" alt="">

        <div class="right">
            <p class="name">{{itemInfo.title}}</p>
            <p class="num">{{itemInfo.rawAuthor}}</p>
            <p class="title">豆瓣评分:<span class="pingfen">{{itemInfo.doubanRating}}</span></p>
            <p class="price-num">
                <span class="price">价格：￥{{itemInfo.price}}</span>
                <span class="zhe">{{itemInfo.zhe}}折</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  props: ['itemInfo'],
  methods: {
    toDetail(){
				const id = this.itemInfo._id
				
				this.$router.push({name: 'goodsDetail',params: {goodsId: id}})
			}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.goodsItem{
        border-bottom: 1px solid rgb(211, 211, 211);
        box-sizing: border-box;
		padding: 1.6rem 1rem;
		height: 10rem;
		display: flex;

        .left{
            border: 1px solid rgb(233, 232, 232);
            width: 4.5rem;
            object-fit: cover;
            margin-right: 1rem;
        }
        .right{
            flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
            .name{
                text-align: left;
                height: 1.4rem;
                line-height: 1.4rem;
			}

			.title{
				font-size: 0.6rem;
                text-align: left;
                color: #d6ba8c;
                .pingfen{
                    font-size: 0.8rem;
                    color: red;
                }
			}
            .num{
                font-size: 0.6rem;
                text-align: left;
                color: #acaaaa;
            }
			.price-num{
                text-align: left;
				font-size: 0.2rem;
                height: 1.4rem;
                line-height: 1.4rem;
                .price{
                    font-weight: normal;
                    font-size: 1.06rem;
                    line-height: 1.4rem;
                }
                .zhe{
                    display: inline-block;
                    align-items: center;
                    margin-left: 0.3rem;
                    margin-right: 0.3rem;
                    height: 1.05rem;
                    line-height: 1.05rem;
                    border-radius: 0.3rem;
                    padding: 0 6px;
                    color: rgb(242, 129, 129);
                    border:  1px solid rgb(242, 129, 129)
                }
			}
        }




}
</style>
