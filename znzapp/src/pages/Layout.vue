<template>
    <div class="layout">
        <div class="main">
            <transition :name="transitionName">
                <router-view class="child-view"></router-view>
            </transition>
        </div>
        <tabbar @com="com"></tabbar>
    </div>
</template>

<script>
    import tabbar from '../components/tabbar'
    export default {
        components: {
            tabbar
        },
        data() {
            return {
                transitionName: 'slide-left',
                preValue: 0,
                nextValue: 0,
            }
        },
        methods:{
            com(data){
               if(data>0){
                   this.transitionName = 'slide-right';
               }else{
                   this.transitionName = 'slide-left';
               }
            }
        }
    }
</script>

<style lang="scss">
    .layout {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background: #fff;
        .main {
            flex: 1;
            position: relative;
            .child-view {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                transition: all .5s cubic-bezier(.55, 0, .1, 1);
            }
            .slide-left-enter,
            .slide-right-leave-active {
                opacity: 0;
                -webkit-transform: translate(100%, 0);
                transform: translate(100%, 0);
            }
            .slide-left-leave-active,
            .slide-right-enter {
                opacity: 0;
                -webkit-transform: translate(-100%, 0);
                transform: translate(-100%, 0);
            }
        }
    }
</style>
