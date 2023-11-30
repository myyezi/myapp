
<template>
  <div>
    <div class="top-box-">
      <div v-for="(btn, index) in buttons" :key="index" :class="['button',]" @click="toggleActive(index)">
      <img :class="[`${btn.name}`,'button',]">
    </div>
    </div>
    <div ref="chart" style="width: 50%; height: 300px"></div>
    <div ref="chartgroup" style="width: 50%; height: 300px"></div>
    <div ref="chartgroup2" style="width: 50%; height: 300px"></div>
    <div ref="chartsectional" style="width: 50%; height: 300px"></div>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
import moment from "moment";
import {
  queryChartInfoList,
  queryTableRightInfo,
  obtainSampleRawData,
  checkStoreExternalFlag,
  checkIsLogin,
} from "@/pages/HOME/services.js";
import VXETable from "vxe-table";
export default {
  data() {
    return {
      buttons: [
        { imgSrc: require('@/pages/HOME/jlt.png'), active: false ,name:"abwork"},
        { imgSrc: require('@/pages/HOME/jlt.png'), active: false ,name:"fwork"},
        { imgSrc: require('@/pages/HOME/jlt.png'), active: false ,name:"groupwork"},
        { imgSrc: require('@/pages/HOME/jlt.png'), active: false ,name:"sectionwork"}
      ]
    };
  },
  mounted() {
    this.getEchartData();
    this.getEchartDatagroup();
    this.getEchartDatasectional();
    this.getEchartDatagroup2();
    let objData ={
      chId: "367529",
      chartName: "AMC-AUTOTEST-ND32-Y-C-JAS1-Y",
      endTime: "2023-11-22 04:46:13",
      fabSite: "A",
      isShowFpoints: "F",
      ldsId: "99017",
      parameterName: "AMC-AUTOTEST-ND32-Y-C-JAS1-Y",
      showABFactory: "F",
      startTime: "2023-11-14 04:46:13"
    };
    // this.chartFun(objData);
  },
  watch: {},
  created() {},
  methods: {
    toggleActive(index) {
      this.buttons.forEach((btn, i) => {
        btn.active = i === index
      })
    },
    //query按钮调用的接口
    async chartFun(data) {
      let res = await queryChartInfoList(data);
      if (res.data.success) {
        
         if (Object.keys(res.data.data).length == 0) {
           VXETable.modal.alert({ content: "暂无数据，请切换查询条件！", status: 'error' })
          //清空数据
          return;
        }
        let infoChart = res.data.data;
        console.log(infoChart,"charts返回的数据");
      } else { 
        VXETable.modal.alert({ content: res.data.message, status: 'error' })
      }
    },
    getEchartData() {
      const chart = this.$refs.chart;
      if (chart) {
        const myChart = this.$echarts.init(chart);
        const option = {
          title: {},
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: [
              "Email",
              "Union Ads",
              "Video Ads",
              "Direct",
              "Search Engine",
            ],
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          toolbox: {
            feature: {
              saveAsImage: {},
            },
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
              "一月",
              "二月",
              "三月",
              "四月",
              "五月",
              "六月",
              "七月",
              "八月",
              "九月",
              "十月",
              "十一月",
              "十二月",
            ],
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              name: "Email",
              type: "line",
              stack: "Total",
              data: [
                120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230,
              ],
            },
            {
              name: "Union Ads",
              type: "line",
              stack: "Total",
              data: [
                220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330,
              ],
            },
            {
              name: "Video Ads",
              type: "line",
              stack: "Total",
              data: [
                150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190, 330,
              ],
            },
            {
              name: "Direct",
              type: "line",
              stack: "Total",
              data: [
                320, 332, 301, 334, 390, 330, 320, 320, 332, 301, 334, 390, 330,
              ],
            },
            {
              name: "Search Engine",
              type: "line",
              stack: "Total",
              data: [
                820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290,
                1330,
              ],
            },
          ],
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      }
      this.$on("hook:destroyed", () => {
        window.removeEventListener("resize", function () {
          myChart.resize();
        });
      });
    },
    getEchartDatagroup() {
      const chart1 = this.$refs.chartgroup;
      if (chart1) {
        const myChart = this.$echarts.init(chart1);
        const option = {
          title: {},
          tooltip: {
            trigger: "axis",
          },
          legend: {},
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          toolbox: {
            feature: {
              saveAsImage: {},
            },
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
              "一月",
              "二月",
              "三月",
              "四月",
              "五月",
              "六月",
              "七月",
              "八月",
              "九月",
              "十月",
              "十一月",
              "十二月",
            ],
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              name: "Email",
              type: "line",
              stack: "Total",
              data: [
                120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230,
              ],
            },
            {
              name: "Union Ads",
              type: "line",
              stack: "Total",
              data: [
                220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330,
              ],
            },
            {
              name: "Video Ads",
              type: "line",
              stack: "Total",
              data: [
                150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190, 330,
              ],
            },
            {
              name: "Direct",
              type: "line",
              stack: "Total",
              data: [
                320, 332, 301, 334, 390, 330, 320, 320, 332, 301, 334, 390, 330,
              ],
            },
            {
              name: "Search Engine",
              type: "line",
              stack: "Total",
              data: [
                820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290,
                1330,
              ],
            },
          ],
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      }
      this.$on("hook:destroyed", () => {
        window.removeEventListener("resize", function () {
          myChart.resize();
        });
      });
    },
    getEchartDatagroup2() {
      const chart1 = this.$refs.chartgroup2;
      if (chart1) {
        const myChart = this.$echarts.init(chart1);
        const option = {
          title: {},
          tooltip: {
            trigger: "axis",
          },
          legend: {},
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          toolbox: {
            feature: {
              saveAsImage: {},
            },
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
              "一月",
              "二月",
              "三月",
              "四月",
              "五月",
              "六月",
              "七月",
              "八月",
              "九月",
              "十月",
              "十一月",
              "十二月",
            ],
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              name: "Email",
              type: "line",
              stack: "Total",
              data: [
                120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230,
              ],
            },
            {
              name: "Union Ads",
              type: "line",
              stack: "Total",
              data: [
                220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330,
              ],
            },
            {
              name: "Video Ads",
              type: "line",
              stack: "Total",
              data: [
                150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190, 330,
              ],
            },
            {
              name: "Direct",
              type: "line",
              stack: "Total",
              data: [
                320, 332, 301, 334, 390, 330, 320, 320, 332, 301, 334, 390, 330,
              ],
            },
            {
              name: "Search Engine",
              type: "line",
              stack: "Total",
              data: [
                820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290,
                1330,
              ],
            },
          ],
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      }
      this.$on("hook:destroyed", () => {
        window.removeEventListener("resize", function () {
          myChart.resize();
        });
      });
    },
    getEchartDatasectional() {
      const chart1 = this.$refs.chartsectional;
      if (chart1) {
        const myChart = this.$echarts.init(chart1);
        const option = {
          title: [],
          tooltip: {
            trigger: "item",
            axisPointer: {
              type: "shadow",
            },
          },
          grid: {
            left: "10%",
            right: "10%",
            bottom: "15%",
          },
          xAxis: {
            type: "category",
            // splitLine: { show: false },
            boundaryGap: true,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              name: "boxplot",
              type: "boxplot",
              data: [
                [
                  850, 960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830,
                  790, 810, 880, 880, 830,
                ],
                [
                  960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790,
                  810, 880, 880, 830, 800,
                ],
                [
                  880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910,
                  850, 870, 840, 840, 850,
                ],
                [
                  890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920,
                  890, 860, 880, 720, 840,
                ],
                [
                  890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870,
                  810, 740, 810, 940, 950,
                ],
              ],
            },
          ],
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      }
      this.$on("hook:destroyed", () => {
        window.removeEventListener("resize", function () {
          myChart.resize();
        });
      });
    },
  },
};
</script>
<style lang="less" scoped>
.button {
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
}
.button img {
  width: 25px;
  height: 25px;
  transition: all 0.3s ease;
}
.button img.active {
  // background-color: rgb(99, 99, 99);
  filter: brightness(0.8);
}
.abwork{
background-size: 1178.2px 31.2px;
  background-image: url("~@/pages/HOME/jlt.png");
  background-position: -912px -252px;
}
.fwork{
background-image: url("~@/pages/HOME/jlt.png");
  background-size: 1174.2px 31px;
  background-position: -940px -253px;
}
.groupwork{
background-size: 1175.2px 31.2px;
  background-image: url("~@/pages/HOME/jlt.png");
  background-position: -971px -250px;
}
.sectionwork{
  background-size: 1175.2px 31.2px;
  background-image: url("~@/pages/HOME/jlt.png");
  background-position: -1003px -250px;
}
</style>
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
