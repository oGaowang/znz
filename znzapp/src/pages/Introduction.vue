<template>
    <div class="introduction">
        <header>
            <div class="back">返回</div>
            <div class="title">装介绍客户</div>
            <div></div>
        </header>
        <div class="status"></div>
        <ul class="list">
            <li v-for="(item,index) in listData" :key="index">
                <div class="left">
                    <div class="consumerName">{{item.consumerName}}</div>
                    <div class="l-c">
                        <div class="mobile">{{item.mobile}}</div>
                        <div>
                            <div class="sourceUserName">来源：{{item.sourceUserName}}</div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="followStatus already" v-if="item.followStatus==1">{{'已跟进'}}</div>
                    <div class="followStatus not" v-if="item.followStatus==0">{{'未跟进'}}</div>
                    <div class="createTime">{{item.createTime}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                listData: [],
            }
        },
        created() {
            this.axios({
                method: 'get',
                url: 'http://app.zhuangneizhu.com/third/gainOrganizationCustomerList.do',
                params: {
                    organizationId: 4297,
                    userId: 5960,
                    version: 3.4,
                    orderStatus: 2,
                    appType: "znz",
                }
            }).then(res => {
                this.listData = res.data.data;
                console.log(res.data.data)
            })
        },
    }
</script>

<style lang="scss">
    .introduction {
        width: 100%;
        background: #f5f8ff;
        display: flex;
        flex-direction: column;
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 0.9rem;
            padding: 0 0.3rem;
            box-sizing: border-box;
            color: #333;
            background: #fff;
            font-size: 0.36rem;
            border-bottom: 1px solid rgb(245, 245, 245);
            div {
                width: 15%;
            }
            .title {
                width: 70%;
                text-align: center;
            }
        }
        .status {
            width: 100%;
            height: 0.6rem;
            background: #fff;
        }
        .list {
            li {
                height: 1.6rem;
                background: #fff;
                margin-top: 0.18rem;
                display: flex;
                align-items: center;
                padding: 0 0.3rem;
                box-sizing: border-box;
                justify-content: space-between;
                .left {
                      display: flex;
                    .consumerName {
                        width: 1.2rem;
                        height: 1.2rem;
                        border-radius: 50%;
                        background: #3399ff;
                        line-height: 1.2rem;
                        text-align: center;
                        color: #fff;
                        font-size: 0.3rem;
                        font-weight: 600;
                        letter-spacing: 0.03rem;
                    }
                    .l-c {
                        margin-left: 0.2rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        .mobile {
                            font-size: 0.32rem;
                            color: #333;
                            font-weight: 600;
                        }
                        .sourceUserName {
                            font-size: 0.28rem;
                            color: #a6a7ab;
                            margin-top: 0.1rem;
                        }
                    }
                }
                .right{
                    display:flex;
                    flex-direction: column;
                   align-items:flex-end;
                   justify-content: center;
                   .followStatus{
                       font-size:0.3rem;
                      width:1.6rem;
                      height:0.52rem;
                      line-height: 0.52rem;
                      text-align:center;
                       font-weight: 600;
                       color:#fff;
                       border-radius: 0.6rem;
                   }
                   .followStatus.already{
                       background:#4BD863;
                   }
                    .followStatus.not{
                       background:#FF3B30;
                   }
                   .createTime{
                       font-size:0.26rem;
                       margin-top:0.1rem;
                   }
                }
            }
        }
    }
</style>
