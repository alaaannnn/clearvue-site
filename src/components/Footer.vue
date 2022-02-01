<template>
  <div class="jumbotron jumbotron-fluid p-5 text-light">
    <hr>
    <h5 class="m-1">Looking to contribute?</h5>
    <p class="mb-3">ClearVue is an open source product, feel free to jump in and test!</p>
    <a href="https://github.com/oslabs-beta/clearVue">
    <button type="button" class="btn btn-light">GitHub
      <img src="../assets/github.png" width="18" height="18"></button></a>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Footer',
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
    vertical-align: bottom;
    padding: 10px 25px ;
    align-content: center;
  }

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
