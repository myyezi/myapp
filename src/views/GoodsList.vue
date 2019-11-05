<template>
    <div class="goodsList">
                  
        <template v-for="(item,index) in goodsList">
            <GoodsItem :key="index" :item-info="item" />
        </template>
        
    </div>
    
</template>

<script>
    import GoodsItem from '@/components/GoodsItem.vue'
export default {
        data(){
            return{
               goodsList: [],
               pageNum: 1,
            }
        },
        components: {
            GoodsItem
        },
        methods: {
            reqGoodsList(pageNum){
                const {keyword,chosenType,order,rank,start_val,end_val} = this

                return this.$axios.post('/wangye/api/goods/list',{
                    pageNum,
                    keyword,
                    goodsType: chosenType,
                    order,
                    rank,
                    start: start_val,
                    end: end_val
                })
            },
        }
    }
</script>

<style>

</style>