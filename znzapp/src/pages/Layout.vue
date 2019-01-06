<template>
    <div class="layout">
        <div class="main">
            <transition :name="transitionName">
                <router-view class="child-view"></router-view>
            </transition>
        </div>
        <tabbar @com="com"></tabbar>
        <div class="expire" v-if="expireShow">
            <div class="im"><img src="../assets/images/alert.png" alt=""></div>
            <h2>您的服务已到期</h2>
            <div class="vipInfo"></div>
            <div class="contact">请联系装内助（400-181-0060）延长服务期，也可以通过下方提交申请</div>
            <div class="btn">提交申请</div>
        </div>
    </div>
</template>

<script>
    import tabbar from '../components/tabbar'
    import {
        mapState,
        mapMutations
    } from 'vuex'
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
        computed: {
            ...mapState({
                expireShow: 'expireShow'
            })
        },
        methods: {
            com(data) {
                if (data > 0) {
                    this.transitionName = 'slide-right';
                } else {
                    this.transitionName = 'slide-left';
                }
            }
        },
        created() {
            console.log(this.expireShow)
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
        position: relative;
        .main {
            flex: 1;
            overflow: hidden;
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
        .expire {
            position: fixed;
            width: 100%;
            height: 100%;
            margin-top: 0.9rem;
            background: #fff;
            z-index: 10;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            box-sizing: border-box;
            padding: 0 0.4rem;
            .im {
                width: 2.8rem;
                height: 2.1rem;
                margin-top: 2rem;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            h2 {
                font-weight: 600;
                font-size: 0.32rem;
                margin-top: 0.24rem;
            }
            .contact {
                margin-top: 0.24rem;
            }
            .btn {
                background: rgb(0, 121, 254);
                height: 0.9rem;
                width: 6.7rem;
                margin: 0 auto;
                font-size: 0.32rem;
                color: #fff;
                border-radius: 0.1rem;
                text-align: center;
                line-height: 0.9rem;
                margin-top: 0.6rem;
                margin-bottom: 0.6rem;
                letter-spacing: 0.02rem;
            }
        }
    }
</style>
