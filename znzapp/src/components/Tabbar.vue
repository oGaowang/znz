<template>
    <ul class="tabbar">
        <router-link  tag="li" v-for="(item,key) in tabbarList" :key="key"  :to="item.path"  @click.native="handleSlide(key)">
            <i :class="item.icon" ></i>
            <span>{{item.text}}</span>
        </router-link>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            tabbarList:[
                {   icon:'iconfont icon-order',       text:'项目',    path:'/home'    },
                {   icon:'iconfont icon-message',    text:'消息',    path:'/find'    },
                {   icon:'iconfont icon-addition',     text:'添加项目',    path:'/works'   },
                {   icon:'iconfont icon-group', text:'成员',  path:'/member'    },
                {   icon:'iconfont icon-people',        text:'我的',    path:'/my'      }
            ],
            preValue:0,
            nextValue:0,
        }
    },
     methods:{
        handleSlide(key){
            this.preValue=this.nextValue;
            this.nextValue=key;
            var result=this.preValue-this.nextValue
            this.$emit('com',result)
        }
    }
}
</script>

<style lang="scss">
    .tabbar{
        height:1.12rem;
        width:100%;
        display: flex;
        justify-content: space-between;
        align-items:center;
        border-top:1px solid #ccc;
        li{
            display:flex;
            flex-direction: column;
            align-items:center;
            flex:1;
            i{
                font-size:0.42rem;
                display:block;
                color:#555050;
            }
            span{
                font-size:0.24rem;
                margin-top:0.16rem;
                color:#727272;
            }
        }
        li.active i,li.active span{
            color:#0066CC;
        }
    }
</style>
