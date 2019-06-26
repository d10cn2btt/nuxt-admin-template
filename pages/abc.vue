<template>
  <div class="container">
    123123
    {{title}}
    <img src="~/assets/100.png" alt="">
    <img src="~assets/300.png" alt="">
    <button @click="handleShowNotice()">show notification</button>
    <nuxt-link to="/">home</nuxt-link>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'abc',
    async asyncData({ req, res, params, error }) {
      // Please check if you are on the server side before
      // using req and res

      return axios.get(`http://reduxblog.herokuapp.com/api/posts/311172`)
        .then((res) => {
          console.log(res.data)
          return { title: res.data.title }
        })
        .catch((e) => {
          console.log(e)
          error({ statusCode: 404, message: 'Post not found' })
        })

      if (process.server) {
        return { host: req.headers.host }
      }

      return { host: 'undefined' }
    },
    methods: {
      handleShowNotice: function() { // You can have any name you want instead of 'showLoginError'
        this.showLoginError()
      }
    },
    notifications: {
      showLoginError: { // You can have any name you want instead of 'showLoginError'
        title: 'Login Failed',
        message: 'Failed to authenticate',
        type: 'error' // You also can use 'VueNotifications.types.error' instead of 'error'
      }
    }
  }
</script>

<style scoped>

</style>
