<template>
  <div>
    <h2>Foo</h2>
    <div>名字：{{username}} 年龄：{{age}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: this.$store.state.user.name,
      age: this.$store.state.user.age,
    }
  },
  mounted() {
    console.log(this.$store.state);
  },
}
</script>
<style lang="">
  
</style>