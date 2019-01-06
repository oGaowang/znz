<template>
    <div class="setCompanyName">
        <header>
            <div class="back iconfont icon-back" @click="$router.back(-1)" style="color:#0066CC"></div>
            <div class="title">设置公司名称</div>
            <div></div>
        </header>
        <main>
            <div class="title">公司名称：</div>
            <div class="inp"><input type="text" v-model="organizationName"></div>
            <div class="btn" @click="setCompanyName">确定</div>
        </main>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    export default {
        data() {
            return {
                organizationName: '',
            }
        },
        computed: {
            ...mapState({
                organizationList: 'organizationList',
                companyListIndex: 'companyListIndex',
                version: "version",
                organizationId: 'organizationId',
                userId: 'userId',
            })
        },
        methods: {
            setCompanyName() {
                this.axios({ //设置公司名称
                    url: "http://app.zhuangneizhu.com/set/setCompanyName.do",
                    method: "get",
                    params: {
                        organizationName: '千纸鹤有限公司',
                        organizationId: '4297',
                        userId: '5960',
                        version: '3.4'
                    },
                }).then(res => {
                    console.log(res)
                })
            }
        },
        created(){
            this.organizationName=this.organizationList[this.companyListIndex].name;
        }
    }
</script>

<style lang='scss'>
    .setCompanyName {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 0.9rem;
            padding: 0 0.3rem;
            box-sizing: border-box;
            color: #333;
            background: #fff;
            font-size: 0.36rem;
            border-bottom: 1px solid rgb(245, 245, 245);
            div {
                width: 15%;
                height: 0.9rem;
                line-height: 0.9rem;
                color: #666;
                font-size: 0.4rem;
            }
            .title {
                width: 70%;
                text-align: center;
            }
        }
        main {
            box-sizing: border-box;
            width: 100%;
            padding: 0 0.4rem;
            .title {
                margin-top: 0.4rem;
            }
            .inp {
                margin-top: 0.3rem;
                input {
                    width: 100%;
                    height: 0.8rem;
                    padding-left: 0.2rem;
                    border: 1px solid #ccc;
                    border-radius: 0.1rem;
                }
            }
            .btn {
                background: rgb(0, 121, 254);
                height: 0.9rem;
                width: 100%;
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
