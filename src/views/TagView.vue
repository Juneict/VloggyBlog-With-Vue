<template>
    <div v-if="error">
        {{ error }}
    </div>
    <div v-if="filteredPosts.length" class="layout">
        <div>
            <post-view :posts="filteredPosts"></post-view>
        </div>
        <div>
            <RelativeTag></RelativeTag>
        </div>
    </div>
    <div v-else>
       <Spinner></Spinner>
    </div>
</template>

<script>
import RelativeTag from '../components/RelativeTag'
import PostView from '../views/PostView.vue';
import Spinner from '../components/Spinner'
import getPosts from '@/composables/getPosts'
import { computed } from 'vue';
export default {
  components: {
    RelativeTag,
    PostView,
    Spinner },
    props:['tag'],
    setup(props){
       let{ posts, error, load } = getPosts();
       load();
       let filteredPosts = computed(()=>{
            return posts.value.filter((post)=>{
                return post.tags.includes(props.tag);
            })
       })
       return {posts, error, filteredPosts}
    }
}
</script>

<style>

</style>