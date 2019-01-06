<template>
    <div class="my">
        <header>
            <div class="h-l">我的</div>
            <div class="h-c">{{companyName}}</div>
            <div class="h-r iconfont icon-more" @click.stop="swtchCom"></div>
            <transition name="fade">
                <div class="comList" v-show="comListShow">
                    <p v-for="(item,index) in organizationList" :key="index" @click.stop="chooseCom(index)">{{item.name}} </p>
                </div>
            </transition>
        </header>
        <main>
            <div class="mes">
                <div class="m-l">
                    <div class="avatar"></div>
                    <div class="message">
                        <div class="top">{{userInfo.name}} | {{userInfo.roleName}}</div>
                        <div class="tel">{{userInfo.mobile}}</div>
                    </div>
                </div>
                <div class="m-r">
                </div>
            </div>
            <div class="content">
                <section>
                    <div class="sec-item">
                        <div class="left">
                            <div class="icon"><img src="../assets/images/per01.png" alt=""></div>
                            <p>我的待办</p>
                        </div>
                        <div class="go"></div>
                    </div>
                    <div class="sec-item">
                        <div class="left">
                            <div class="icon"><img src="../assets/images/per02.png" alt=""></div>
                            <p>项目统计</p>
                        </div>
                        <div class="go"></div>
                    </div>
                    <div class="sec-item">
                        <div class="left">
                            <div class="icon"><img src="../assets/images/per03.png" alt=""></div>
                            <p>合同收款确认</p>
                        </div>
                        <div class="go"></div>
                    </div>
                </section>
                <section>
                    <div class="sec-item" @click="introduction">
                        <div class="left">
                            <div class="icon"><img src="../assets/images/swtch.png" alt=""></div>
                            <p>装介绍客户</p>
                        </div>
                        <div class="go"></div>
                    </div>
                </section>
                <section>
                    <div class="sec-item" @click="$router.push({name:'companySetting'})">
                        <div class="left">
                            <div class="icon"><img src="../assets/images/per04.png" alt=""></div>
                            <p>调整公司设置</p>
                        </div>
                        <div class="go"></div>
                    </div>
                    <div class="sec-item">
                        <div class="left">
                            <div class="icon"><img src="../assets/images/per05.png" alt=""></div>
                            <p>设置建材库</p>
                        </div>
                        <div class="go"></div>
                    </div>
                    <div class="sec-item">
                        <div class="left">
                            <div class="icon"><img src="../assets/images/per06.png" alt=""></div>
                            <p>设置部门和员工</p>
                        </div>
                        <div class="go"></div>
                    </div>
                    <div class="sec-item" @click="$router.push({name:'adSet'})">
                        <div class="left">
                            <div class="icon"><img src="../assets/images/per07.png" alt=""></div>
                            <p>设置启动时广告页</p>
                        </div>
                        <div class="go"></div>
                    </div>
                    <div class="sec-item">
                        <div class="left">
                            <div class="icon"><img src="../assets/images/per12.png" alt=""></div>
                            <p>系统设置</p>
                        </div>
                        <div class="go"></div>
                    </div>
                </section>
                <section>
                    <div class="sec-item">
                        <div class="left">
                            <div class="icon"><img src="../assets/images/per08.png" alt=""></div>
                            <p>申请增加成员数</p>
                        </div>
                        <div class="go"></div>
                    </div>
                    <div class="sec-item">
                        <div class="left">
                            <div class="icon"><img src="../assets/images/re.png" alt=""></div>
                            <p>注册一个独立新公司</p>
                        </div>
                        <div class="go"></div>
                    </div>
                </section>
            </div>
            <div class="btn">退出账号</div>
        </main>
    </div>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import {
        Toast
    } from 'mint-ui';
    export default {
        data() {
            return {
                comListShow: false,
                companyName: '',
                userInfo: {},
            }
        },
        computed: {
            ...mapState({
                version: 'version',
                organizationId: 'organizationId',
                userId: 'userId',
                organizationList: 'organizationList',
                companyListIndex: 'companyListIndex',
                isAdmin: 'isAdmin'
            }),
        },
        created() {
            this.gainOrganizationList();
            this.gainUserInfo();
            this.gainVipInfo();
        },
        methods: {
            ...mapMutations({
                getOrganizationList: 'getOrganizationList',
                getCompanyListIndex: 'getCompanyListIndex',
                turnOrganizationId: 'turnOrganizationId',
                tureExpireShow: 'tureExpireShow',
                getIsAdmin: 'getIsAdmin'
            }),
            swtchCom() {
                this.comListShow = !this.comListShow;
            },
            gainOrganizationList() { //获取公司列表
                this.axios({
                    methods: 'get',
                    url: 'http://app.zhuangneizhu.com/user/gainOrganizationList.do',
                    params: {
                        organizationId: this.organizationId,
                        userId: this.userId,
                        version: this.version,
                    }
                }).then(res => {
                    this.getOrganizationList(res.data.data)
                    this.companyName = this.organizationList[this.companyListIndex].name;
                })
            },
            gainUserInfo() { //获取用户的信息
                this.axios({
                    methods: 'get',
                    url: 'http://app.zhuangneizhu.com/user/gainUserInfo.do',
                    params: {
                        organizationId: this.organizationId,
                        userId: this.userId,
                        version: this.version,
                    }
                }).then(res => {
                    if (res.data.code == 11280) {
                        this.tureExpireShow(true);
                    } else if (res.data.code == 10000) {
                        this.tureExpireShow(false);
                        this.userInfo = res.data.data;
                        this.getIsAdmin(res.data.data.isAdmin);
                        console.log(this.isAdmin)
                    }
                })
            },
            gainVipInfo() { //获取VIP信息
                this.axios({
                    methods: 'get',
                    url: "http://app.zhuangneizhu.com/set/gainVipInfo.do",
                    params: {
                        organizationId: this.organizationId,
                        version: this.version,
                        userId: this.userId,
                    },
                }).then(res => {
                    console.log(res.data.data)
                    this.vipInfo = res.data.data.vipInfo;
                })
            },
            chooseCom(index) {
                this.comListShow = !this.comListShow;
                this.getCompanyListIndex(index);
            },
            introduction() {
                if (this.isAdmin) {
                    this.$router.push({
                        name: 'introduction'
                    })
                } else {
                    Toast({
                        message: '权限不足，仅对管理员开放',
                    });
                }
            }
        },
        watch: {
            companyListIndex(a) {
                console.log(a)
                this.turnOrganizationId(this.organizationList[a].organizationId)
                this.gainOrganizationList();
                this.gainUserInfo();
                this.gainVipInfo();
            }
        }
    }
</script>

<style lang="scss">
    .my {
        width: 100%;
        height: 100%;
        background: rgb(245, 245, 245);
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        header {
            width: 100%;
            height: 0.9rem;
            background: #fff;
            padding: 0 0.4rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            .h-l {
                font-size: 0.36rem;
                font-weight: 700;
                color: #333;
                flex: 1;
            }
            .h-c {
                font-size: 0.34rem;
                color: #333;
                flex: 6;
                text-align: center;
            }
            .h-r {
                font-size: 0.52rem;
                font-weight: 700;
                color: #3478F7;
                flex: 1;
                text-align: right;
            }
            .comList {
                width: 4rem;
                background: #fff;
                position: absolute;
                right: 0.2rem;
                top: 0.9rem;
                box-shadow: 0 0 0.1rem #ccc;
                color: #333;
                padding: 0.18rem 0;
                cursor: pointer;
                z-index: 20;
                p {
                    width: 100%;
                    height: 0.68rem;
                    line-height: 0.68rem;
                    font-size: 0.3rem;
                    padding: 0 0.3rem;
                }
            }
            .fade-enter-active,
            .fade-leave-active {
                transition: opacity .5s;
            }
            .fade-enter,
            .fade-leave-to {
                opacity: 0;
            }
        }
        main {
            width: 100%;
            flex: 1;
            overflow: auto;
            position: relative;
            .mes {
                width: 100%;
                height: 2.4rem;
                background: #fff;
                display: flex;
                justify-content: space-between;
                align-items: center;
                box-sizing: border-box;
                padding: 0 0.4rem;
                .m-l {
                    display: flex;
                    align-items: center;
                    .avatar {
                        width: 1.24rem;
                        height: 1.24rem;
                        border-radius: 50%;
                        background: #ccc;
                    }
                    .message {
                        margin-left: 0.32rem;
                        font-size: 0.28rem;
                        .top {
                            color: #666;
                            margin-left: 0.02rem;
                        }
                        .tel {
                            color: #999;
                            margin-top: 0.1rem;
                        }
                    }
                }
                .m-r {
                    width: 0.4rem;
                    height: 0.4rem;
                    background: url('../assets/images/per12.png') no-repeat;
                    background-size: cover;
                }
            }
            .content {
                width: 100%;
                section {
                    margin-top: 0.2rem;
                    .sec-item {
                        background: #fff;
                        height: 1rem;
                        display: flex;
                        align-items: center;
                        padding: 0 0.4rem;
                        box-sizing: border-box;
                        justify-content: space-between;
                        border-bottom: 1px solid rgb(242, 242, 242);
                        .left {
                            display: flex;
                            align-items: center;
                            .icon {
                                width: 0.4rem;
                                height: 0.4rem; // background: #666;
                                margin-right: 0.16rem;
                                img {
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            p {
                                color: #333;
                                font-size: 0.28rem;
                            }
                        }
                        .go {
                            width: 0.16rem;
                            height: 0.24rem;
                            background: #666;
                            background: url('../assets/images/perR.png');
                            background-size: cover;
                        }
                    }
                }
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
