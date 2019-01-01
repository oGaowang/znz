<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view class="Router"></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {　　　　
            return {　　　　　　
                transitionName: 'slide-right' 　　　
            }　　
        },
        watch: {　　　
            '$route'(to, from) {　　
                console.log('from:'+from.name, to.name)　　
                if (from.name === 'adSet') {
                    this.transitionName = 'slide-left'　　　
                }else{
                    this.transitionName = 'slide-right' 
                }
            }　
        }
    }
</script>

<style lang="scss">
    html,
    body,
    #app {
        width: 100%;
        height: 100%;
    }
     ::-webkit-scrollbar {
        display: none;
        height: 0;
        background: transparent;
    }
    input {
        border: 0;
        outline: none;
    }
    .Router {
        position: absolute;
        width: 100%;
        transition: all .4s ease;
        top: 0;
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
        transform: translate(-100% 0);
    }
</style>
