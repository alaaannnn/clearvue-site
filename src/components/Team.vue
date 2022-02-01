<template>
  <div class="jumbotron jumbotron-fluid bg-dark">
    <div class="container">
      <h1 class="mt-5 pt-5 display-3 fs-1 fw-bold text-light">
        Meet our <span class="team">team!</span></h1>
    </div>
    <div class="container mt-5 devCards">
      <div class="p-5 row align-items-center">
        <div class="col herocard">
          <img src="../assets/alan_headshot.jpg" class="img-fluid rounded-circle mb-4">
          <h4 class="text-light">Alan Ye</h4>
          <a href="https://github.com/alaaannnn" class="p-2" ><img src="../assets/github_white.png" width="25" height="25"></a>
          <a href="https://www.linkedin.com/in/alan-ye-008/" class="p-2"><img src="../assets/linkedin.png" width="25" height="25"></a>
        </div>
        <div class="col herocard">
          <img src="" class="img-fluid rounded-circle mb-5">
          <h4 class="text-light">Allen Xie</h4>
          <a href="https://github.com/axie0320" class="p-2" ><img src="../assets/github_white.png" width="25" height="25"></a>
          <a href="https://www.linkedin.com/in/allen-xie-a23a6116b/" class="p-2"><img src="../assets/linkedin.png" width="25" height="25"></a>
        </div>
        <div class="col herocard">
          <img src="" class="img-fluid rounded-circle mb-5">
          <h4 class="text-light">Christian Santiago</h4>
          <a href="https://github.com/Go-go-santiago" class="p-2" ><img src="../assets/github_white.png" width="25" height="25"></a>
          <a href="" class="p-2"><img src="../assets/linkedin.png" width="25" height="25"></a>
        </div>
        <div class="col herocard">
          <img src="" class="img-fluid rounded-circle mb-5">
          <h4 class="text-light">Nick Reardon</h4>
          <a href="https://github.com/Nick-Reardon" class="p-2" ><img src="../assets/github_white.png" width="25" height="25"></a>
          <a href="https://www.linkedin.com/in/nickjreardon/" class="p-2"><img src="../assets/linkedin.png" width="25" height="25"></a>
        </div>
        <div class="col herocard">
          <img src="" class="img-fluid rounded-circle mb-5">
          <h4 class="text-light">Yochi Shor</h4>
          <a href="https://github.com/yochishor" class="p-2" ><img src="../assets/github_white.png" width="25" height="25"></a>
          <a href="https://www.linkedin.com/in/yochi-shor/" class="p-2"><img src="../assets/linkedin.png" width="25" height="25"></a>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Footer from './Footer.vue';

export default {
  name: 'Team',
  components: {
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.team {
  color: #fac34d;
  font-weight: bold;
}

h4 {
  font-weight: bold;
}

.gradient-custom {
  /* fallback for old browsers */
  background: #47ae81;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to bottom, rgba(71, 174, 129, 0.75), rgba(58, 60, 65, 0.75));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to bottom, rgba(71, 174, 129, 0.75), rgba(58, 60, 65, 0.35))
}
</style>
