<template>
  <div class="booking-form">
    <div class="container">
      <div class="booking-form-main">
        <form>
          <div class="form-row">
            <div class="form-group col-md-3">
              <label>Depart City</label>
              <citylist-dropdown name="From" url="get-departure-airports/en-US" id="dprCity" placeholder="Select Depart City" @onSelectCity="onSelectCity"></citylist-dropdown>
            </div>
            <div class="form-group col-md-3">
              <label>Arrival City</label>
              <citylist-dropdown name="To" :url="selectedCityPath" id="arrCity" placeholder="Select Arrival City"></citylist-dropdown>
            </div>
            <div class="form-group col-md-3">
              <label for="dptDate">Depart Date</label>
              <input type="text" class="form-control" id="dptDate" placeholder="Depart Date">
            </div>
            <div class="form-group col-md-3">
              <label for="arrDate">Arrival Date</label>
              <input type="text" class="form-control" id="arrDate" placeholder="Arrival Date">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-3">
              <label for="passenger">Passengers</label>
              <input type="text" class="form-control" id="passenger" placeholder="Depart City">
            </div>
            <div class="form-group col-md-3">
              <label>&nbsp;</label>
              <button type="submit" class="btn btn-primary btn-block">Submit</button>
            </div>
            <p>Selected city : <span> {{ selectedCityPath }}</span></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CitylistDropdown from './CityListDropdown'
export default {
  components: {CitylistDropdown},
  name: 'bookingForm',
  data () {
    return {
      selectedCityPath: ''
    }
  },
  methods: {
    onSelectCity: function (cityCode) {
      this.selectedCityPath = 'get-departure-airports/' + cityCode + '/en-US'
    }
  }
}
</script>

<style scoped>
   .booking-form{
     text-align: left;
     background-color: aliceblue;
     padding-top: 10px;
   }
  .booking-form-main{
    text-align: left;
  }
  .booking-form .form-control{
    border-radius: 0;
    font-size: 13px;
  }
</style>
