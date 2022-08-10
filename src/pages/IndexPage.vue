<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  Test
    <q-list bordered>
    <q-item v-for="(post, index) in posts" :key="index">{{post.title}}
    </q-item>
    </q-list>
  </q-page>
  
</template>

<script>

import Post from 'models/Post'

export default {
  name: 'IndexPage',
  computed: {
    /**
     * Returns all users with reactivity.
     */
    // posts: () => Post.query().withAll().all()
    getPosts: () => Post.query(`{
        Post(id: 1) {
          id
          title
          body
        }
      }`).withAll().all().then(response => {
      console.log(response)
    })
  },
  async mounted() {
    await Post.fetch();
    // this.getPost();
  },
  methods: {
    async getPost() {
      await Post.query()
      .then(response => {
        console.log(response)
      })
      // // Post.$get()
      // // await Post.api().get('posts')
      // await Post.query().with('author').all()
      // .then(response => {
      //   console.log(response)
      //   this.posts=response.response.data
      //   // this.posts=response.data
      //   console.log("this.posts", this.posts)
      // }) 
    }
  }
  ,
  data() {
    return {
      posts: {}
    }
  }
}
</script>
