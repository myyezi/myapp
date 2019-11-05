<template>
    <div class="s">
        <ul class="shu">
            <li v-for="(item,index) in goodsList" :key="index" :item-info="item" >
                <img class="left" :src="$commonUrl + item.images" alt="">
                <p>{{item.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
        data(){
            return{
                goodsList: [],
            }
        },
        methods:{
            reqbooklist(){
                this.$axios.post('/wangye/api/goods/list2')
            .then((res) => {
                    const {code,msg,info} = res
					if(code == 1){
                        this.goodsList = info
					}else{
						console.log(msg)
					}
				})
            }
        },
        mounted(){
        this.reqbooklist()
    }
}
</script>

<style scoped lang="scss">
    .s{
        width: 100vw;
        .shu{
        width: 93vw;
        padding: 3.5vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
            list-style: none;
            width: 28vw;
            height: 46vw;
            img{
                width: 28vw;
				height: 36vw;
				object-fit: cover;
            }
            p{
                white-space:nowrap; overflow:hidden;
                text-overflow:ellipsis;
            }
         }
    }
    }
</style>