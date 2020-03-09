<template>
  <div id='main'>
    <h1>首页</h1>
        <div class='goods'>
          <div class='box'  v-for='(i,j) in num' :key="j" @click='gethistory(i)'>商品{{i}}</div>
        </div>
    <div>
      <h3>超值特惠</h3>
      <div class='youhui'>
        <div>特惠1</div>
        <div>特惠2</div>
        <div>特惠3</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num:[1,2,3,4,5,6,7,8],
        arr:[]
      }
    },
    methods: {
      gethistory(i){
        // console.log('商品'+i+'被访问了')
        this.arr.push('商品'+i+'被访问了')
        console.log('商品'+i)
        this.$store.commit('changehistory',this.arr)
      }
    }
  }
</script>

<style lang="less" scoped>
  #main{
    width: 100%;
    .goods{
      overflow: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .box{
        line-height: 50px;
        // margin: 10px;
        width: 23%;
        height: 50px;
        background: teal;
        margin-bottom: 5px;
        color: white;
        text-align: center;
      }
    }
    .youhui{
      display: flex;
      justify-content: space-around;
      div{
        width: 30%;
        height: 50px;
        background:tomato;
        text-align: center;
        line-height: 50px;
        color: white;
      }
    }

  }
</style>
