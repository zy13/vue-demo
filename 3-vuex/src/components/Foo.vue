<template>
  <div>
    <h2>Foo</h2>
    <div>名字：{{user.name}} 年龄：{{user.age}}</div>
    <div>{{tenYearsOld}}</div>
    <button @click="handleChange">change</button>
    <button @click="changeAge({age: 80})">changeAge</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      // string
      // name: this.$store.state.user.name
      // object
      // user: this.$store.state.user
    }
  },
  mounted() {
    console.log(this.$store.state);
    console.log(11, mapMutations);
    console.log(this);
  },
  computed: {
    // state属于全局计算属性，在Bar组件改变它时，Foo组件可以共享改变后的值
    ...mapState(['user','token']),
    ...mapGetters(['tenYearsOld'])
    // user() {
    //   return this.$store.state.user
    // },
    // token() {
    //   return this.$store.state.user.token
    // }
  },
  methods: {
    ...mapMutations([
      'changeAge'
    ]),
    handleChange() {
      this.$store.state.user.name = 'xiaohong'
    }
  },
}
</script>
<style lang="">
  
</style>