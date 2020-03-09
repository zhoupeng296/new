<template>
  <div>
    <h1>足迹</h1>
    <h3 v-for="(a,b) in aaa" :key="b">{{a}}</h3>
  </div>
</template>

<script>
  export default {
    created() {
      console.log(this.aaa)
    },
    computed: {
      aaa(){
        // return this.$store.state.history
        return this.$store.getters.newhistoty;
      }
    },
  }
</script>

<style lang="less" scoped>

</style>