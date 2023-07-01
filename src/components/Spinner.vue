<template>
  <div class="spinner"></div>
</template>

<script>
export default {

}
</script>

<style>
    .spinner{
        width: 50px;
        height: 50px;
        border: 3px solid transparent;
        border-radius: 50%;
        margin: 30px auto;
        border-top: 3px solid crimson;
        animation: spin 1s infinite;
    }
    @keyframes spin{
        to{transform: rotate(360deg);}
    }
</style>