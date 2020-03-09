<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link to="/">首页</router-link>
      </div>
      <div>
        <router-link to="/history">足迹</router-link>
      </div>
      <div>
        <router-link to="/myhome">用户</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    
  }
</script>


<style lang="less">
  body,html,#app{
    height: 100%;
  }
  #app{
    #nav{
      width: 100%;
      height: 40px;
      position: fixed;
      bottom: 0px;
      display: flex;
      justify-content: space-around;
      div{
        width: 30%;
        text-align: center;
        align-items: center;
      }
    }
  }
</style>