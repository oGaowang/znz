<template>
    <div class="layout">
        <header>
            <MyHeader></MyHeader>
        </header>
        <section>
            <aside>
                 <MyAside></MyAside>
            </aside>
            <main>
                <router-view></router-view>
            </main>
        </section>
    </div>
</template>

<script>
    import MyHeader from '../components/MyHeader'
    import MyAside from '../components/MyAside'
    export default {
        components: {
            MyHeader,
            MyAside
        },
        created() {
          
        },
        computed: {
           
        }
    }
</script>

<style lang='scss'>
    .layout {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        header {
            width: 100%;
            height: 60px;
            background-color: #31c2a6;
            border-bottom: 2px solid #279b85;
        }
        section {
            flex: 1;
            display: flex;
            aside {
                
                height: 100%;
                color: #333;
               background: rgb(84, 92, 100);
                overflow-x: hidden;
            }
            main {
                flex: 1;
                height: 100%;
                background: #fff;
            }
        }
    }
</style>
