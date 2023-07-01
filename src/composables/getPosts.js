import { ref } from 'vue';
let getPosts = ()=>{
    let posts = ref([]);
    let error = ref("");
    let load = async()=>{
        try{
          let response = await fetch('http://localhost:3000/posts');
          if(response.status===404){
            throw new Error('not found');
          }
          let datas = await response.json();
          posts.value = datas;
        }catch(e){
          error.value = e.message;
        }
    }
    return {posts, error, load};
}
export default getPosts;