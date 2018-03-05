<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#"><img src="../assets/images/logo.png" width="20px" /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <router-link class="nav-item" tag="li" active-class="active" to="/" exact><a class="nav-link">Home</a></router-link>
        <router-link class="nav-item" tag="li" active-class="active" to="1"><a class="nav-link">Page 1</a></router-link>
        <router-link class="nav-item" tag="li" active-class="active" to="2"><a class="nav-link">Page 2</a></router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
