<template>
  <div>
    <h2>First Page</h2>
    <h4><small>Your message: </small>{{ messageText | capitalize }}</h4>
    <input type="text" v-model="messageText" />
  </div>
</template>

<script>
export default {
  name: 'firstPage',
  data () {
    return {
      messageText: ''
    }
  }
}
</script>

<style scoped>
  input {
    text-overflow: ellipsis;
    padding: 4px 8px;
  }
</style>
