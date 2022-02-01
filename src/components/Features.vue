<template>
  <div class="features">
    <h1 class="mt-5 mb-5">Features</h1>
    <div class="container">
      <h3 class="text-start feature-title"><u>Compatible with Vue 3</u></h3>
      <p class="mb-5 text-start">With the release of Vue version 3 comes with numerous changes
        that makes migrating a no-brainer. ClearVue is designed to be completely
        compatible with Vue 3 out of the box. While applications are slowly making the change
        up to 3.0, we are in the middle of works of making it backward compatible as well.
        <b>Stay tuned!</b>
      </p>
      <div class="p-3"></div>
      <h3 class="text-start feature-title"><u>Follow your components</u></h3>
      <p class="mb-5 text-start">No matter how simple or complex your application might be,
        ClearVue will follow it from the root of your application to each of its lowest
        level children no matter how nested it might be.
      </p>
      <div class="p-3"></div>
      <h3 class="text-start feature-title"><u>Check your state and your props</u></h3>
      <p class="mb-5 text-start">As applications begin to scale, one of the biggest issues
        you might run into is where and what your prop-drilled data was from previous.
        components. Trying to trace it all back can be a rollercoaster of a ride, but
        with ClearVue, the <u><i>view is clear</i></u>.
      </p>
      <div class="p-3"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Features',
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.feature-title {
  font-weight: bold;
}

</style>
