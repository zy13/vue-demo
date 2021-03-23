<template>
  <div>
    <h2>Bar</h2>
    <div>姓名：{{user.name}} 年龄: {{user.age}}</div>
    <button @click="handleChange">change</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
console.log(mapState(['user', 'token']))
export default {
  data() {
    return {
      // user: this.$store.state.user
    }
  },
  methods: {
    handleChange() {
      this.$store.state.user.age = 30
    }
  },
  computed: {
    ...mapState(['user', 'token'])
  }
}
</script>