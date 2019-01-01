<template>
    <div class="myNav">
        <div class="myNav-item" v-for="(item,index) in navList" :key="index">
            <img :src="item.img" alt=""/>
            <span>{{item.text}}</span>
        </div>
    </div>
</template>

<script>
import im1 from "../assets/images/qw.png"
import im2 from "../assets/images/sjs.png"
import im3 from "../assets/images/jf14.png"
import im4 from "../assets/images/qt.png"


export default {
    data(){
        return{
            navList:[
                {img:im1,text:"世界设计"},
                {img:im2,text:"欧盟制造"},
                {img:im3,text:"免费送装"},
                {img:im4,text:"7日退换"},
            ]
        }
    }
}
</script>

<style lang="scss">
    .myNav{
        width:100%;
        height:1.44rem;
        background: #fff;
        border-bottom:0.08rem solid #f7f7f7;
        display:flex;
        justify-content: space-around;
        align-items:center;
        .myNav-item{
            display:flex;
            flex-direction: column;
            align-items:center;
            img{
                width:0.42rem;
                height:0.42rem;
                margin-bottom:0.2rem;
            }
            span{
                font-size:0.18rem;
                color:#050505;
            }
        }
        
    }
</style>
