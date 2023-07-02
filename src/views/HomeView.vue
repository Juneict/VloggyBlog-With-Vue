<template>
  <div class="home">
    <div v-if="error">
     <h3>{{ error }}</h3> 
    </div>
    <div v-if="posts.length>0" class="layout">
      <div>
        <h1>Posts</h1>
        <post-view :posts="posts"></post-view>
      </div>
      <div>
        <RelativeTag :posts="posts"></RelativeTag>
      </div>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import RelativeTag from '../components/RelativeTag'
import Spinner from '../components/Spinner'
import PostView from '../views/PostView.vue';
import getPosts from '../composables/getPosts';
export default {
  components: {
    RelativeTag,
    Spinner, PostView },
  setup(){
    let {posts, error, load} = getPosts();
    load();
    return {posts, error};
  }
}
</script>
<style>
 .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout{
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>
