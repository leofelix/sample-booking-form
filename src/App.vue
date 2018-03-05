<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view/>
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import MainFooter from './components/MainFooter'

export default {
  name: 'App',
  components: {
    Navigation,
    MainFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 13px;
}
::placeholder{
  font-size: 13px;
}
</style>
