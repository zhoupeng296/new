<template>
    <div id='my'>
        <h1>个人中心</h1>
        <div>
            <img :src='imgurl'>
        </div>
        <h3>点击换头像</h3>
        <div class='imglist'>
            <img v-for="(i,k) in changeimg" :key="k" :src='i' @click='change(k)'>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgurl: require('../assets/imgs/10.jpg'),
                changeimg:[require('../assets/imgs/1.jpg'),
                require('../assets/imgs/2.jpg'),
                require('../assets/imgs/3.jpg'),
                require('../assets/imgs/4.jpg'),
                require('../assets/imgs/5.gif'),
                require('../assets/imgs/6.jpg'),
                require('../assets/imgs/7.jpg'),
                require('../assets/imgs/8.jpg'),
                require('../assets/imgs/9.jpg')
                ]
            }
        },
        methods: {
            change(i){
                this.imgurl=this.changeimg[i]
                
            }
        },
    }
</script>

<style lang="less" scoped>
    #my{
        img{
            width: 80px;
            height: 80px;
        }
        .imglist{
            width: 80%;
            margin: auto;
        }
    }
</style>