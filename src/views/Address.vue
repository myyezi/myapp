<template>
    <div class="address">
        <div class="shang">
            <h6>填写收货人信息</h6>
            <p>使用中通 / EMS 等快递发货，了解具体发货规则？</p>
            <ul>
                <li>
                    <span class="Field-name">姓名 : </span>
                    <input type="text" class="kuang">
                </li>
                <li>
                    <span class="Field-name">电话 : </span>
                    <input type="text" class="kuang">
                </li>
                <li>
                    <span class="Field-name">地址 : </span>
                    <input type="text" class="kuang" placeholder="请选择所在地区">
                </li>
                <li>
                    <span class="Field-name"></span>
                    <textarea name="" class="kuang" placeholder="详细地址，街道、小区、单元、门牌号"></textarea>
                </li>
            </ul>
        </div>
        <div class="zhong">
            <div class="left">
                <p>匿名买书</p>
                <p class="yanse">开启后其他人不会知道你买了这些</p>
            </div>
            <div class="right">
                <img src="@/assets/img/chosen.png" alt="">
            </div>
        </div>
        <div class="xinxi">
            <div class="shu aa">
                <div class="bookname"><span>Vue.js 实战</span></div>
                <div class="bookprice"><span>￥46.60</span></div>
            </div> 
            <div class="root aa">
                <div class="heji">
                    <div class="bookname"><span>总价</span></div>
                    <div class="bookprice"><span>￥46.60</span></div>
                </div>
                <div class="yunfei">
                    <div class="bookname"><span>运费（不参与优惠）</span></div>
                    <div class="bookprice"><span>￥5.00</span></div>
                </div>
                
            </div>
            <div class="zongji">
                <div class="zong">下单支付：<span class="price">￥51.60</span></div>
            </div>
        </div>
        <div class="bb">
            <input type="checkbox">
            <p>我已阅读并同意<span class="xieyi">「多抓鱼用户协议」</span></p>
        </div>
        <div class="footer">
            <button>去支付</button>
            
        </div>
    </div>
</template>

<script>
// import { Picker } from 'mint-ui';
// Vue.component(Picker.name, Picker);
// import { DatetimePicker } from 'mint-ui';

// Vue.component(DatetimePicker.name, DatetimePicker);
export default {
        
}
</script>

<style scoped lang="scss">

.address{
    // background-color:rgb(242, 242, 242);
    padding-bottom: 17vw;
    li{
        list-style:none;
        padding: 0;
        margin: 0;
    }
    .shang{
        padding:  4vw 4vw 0 4vw;
        h6{
            font-size: 4.5vw;
            font-weight: normal;
            text-align: left;
            height: 10vw;
            display: block;
            width: 92vw;
            border-bottom: 0.5px solid rgb(242, 242, 242);
        }
        p{
            margin: 3.5vw 0;
            color: rgb(242, 129, 129);
            font-size: 2.8vw;
            text-align: center;
            padding: 0.4em 0.8em;
            background: rgba(242, 129, 129, 0.1);
            border-radius: 1.5vw;
        }
        ul{
            li{
                    display: flex;
                    align-items: center;
                    display: -webkit-flex;
                    margin-bottom: 3.5vw;
                .Field-name{
                    width: 13.8vw;
                    display: block;
                }
            }
        }
    }
    .zhong{
            height: 13vw;
            margin: 3.5vw 0px;
            padding: 0px 3.5vw;
            background: rgb(255, 255, 255);
            align-items: center;display: flex;   justify-content: space-between; 
        .left{
            float: left;
            p{
                text-align: left;
                line-height: 6vw;
            }
            .yanse{
                font-size: 2.6vw;
                    color: rgb(170, 170, 170);
            }
        }
        .right{
            float: right;
            
            img{
                width: 6vw;
                height: 6vw;    
            }
        }
    }
    .xinxi{
        padding: 3.5vw;
        .shu,.heji,.yunfei{
            padding: 2vw 0;
            display: flex;
            flex-direction: row;
            -webkit-box-align: center;
            justify-content: space-between;
            align-items: center;
        }
        .aa{
            margin-bottom: 1vw;
            border-bottom: 0.5px solid rgb(242, 242, 242);
        }
        .root{
            .heji{
            .bookname{
                float: left;
            }
            .bookprice{
                float: right;
            }
        }
        }
        .zongji{
            height: 8vw;
            .zong{
                height: 8vw;
                line-height: 8VW;
               float: right; 
               .price{
                    font-size: 1.33em;
                    font-weight: 400;
                    color: rgb(242, 129, 129);
               }
            }
        }
    }
    .bb{   
        padding:0 3.5vw; 
        font-size: 3vw;
            display: flex;
            flex-direction: row;
            -webkit-box-align: center;
            align-items: center;
        input{
            display: block;
            float: left;
            margin-right: 2vw;
        }
        .xieyi{
                font-weight: 300;
                color: rgb(24, 195, 170);
        }
    }
    .footer{
        padding: 3.5vw;
        background: rgb(247, 247, 247);
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        button{
            border-color: rgb(242, 129, 129);
            box-shadow: none;
            padding: 0 3vw;
            display: block;
            width: 92vw;
            height: 10vw;
            font-size: 4.2vw;
            font-weight: 500;
            border-radius: 5vw;
            outline: none;
            background: none;
            color: #fff;
            border: none;
            background-color: rgb(242, 129, 129);
        
        }
        
    }






        .kuang {
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 9px;
    color: inherit;
    font: inherit;
    font-size: 14px;
    line-height: 20px;
    background: rgb(247, 247, 247);
    border: 1px solid rgb(247, 247, 247);
    border-radius: 5px;
    -webkit-appearance: none;
    outline: none;
    overflow: visible;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    text-rendering: auto;
}
}
    
</style>