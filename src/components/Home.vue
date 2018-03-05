<template>
  <div class="wrapper">
    <div class="content">
      <bookingForm></bookingForm>
    </div>
  </div>
</template>

<script>
import BookingForm from './BookingForm'

export default {
  components: {BookingForm},
  name: 'home',
  component: {
    'bookingForm': BookingForm
  }
}

</script>

<style scoped>

</style>
