<template>
  <div class="fenlei">
    <template  v-for="(item,index) in fenleiList">
        <FenleiItem :key="index" :item-info="item" />
    </template>

  </div>
</template>

<script>
import FenleiItem from '@/components/FenleiItem.vue'
export default {
    name:'fenlei',
    data(){
        return {
           fenleiList:[],

        }
    },
    components: {
        FenleiItem
    },
    methods:{
        reqFenleiList(){
            this.$axios.post('/wangye/api/fenlei/list')
            .then((res) => {
                    const {code,msg,info} = res
                    //取文学
                    //console.log(info[0].categories[0].subCategories[0].name)
                    //console.log(info[0].categories)
					if(code == 1){
                        this.fenleiList = info
                        
					}else{
						console.log(msg)
					}
				})
        }
    },
    mounted(){
        this.reqFenleiList()
    }
};
</script>

<style scoped lang="scss">
</style>