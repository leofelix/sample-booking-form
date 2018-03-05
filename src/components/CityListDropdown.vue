<template>
  <div>
    <input type="text"
           class="form-control dropdown-toggle"
           v-model="cityName"
           v-bind:id="id"
           v-bind:placeholder="placeholder"
           tabindex="1"
           data-toggle="dropdown"
           aria-haspopup="true"
           autocomplete="off">
    <input type="hidden"  v-bind:name="name" v-model="cityCode">
    <div class="city-list dropdown-menu">
      <strong v-if="filterBy(jsonList, cityName).length == 0">No city found</strong>
      <ul>
        <li v-for="countryList in filterBy(jsonList, cityName)" :key="countryList.countryName">
          <span class="country">{{ countryList.countryName }}</span>
          <ul>
            <li v-for="cityList of filterBy(countryList.airports, cityName)" :key="cityList.code" @click="selectedCityItem(cityList, $event)">
              {{ cityList.cityName }} ({{ cityList.code }})
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'citylistDropdown',
  data () {
    return {
      jsonList: [],
      cityName: null,
      cityCode: null,
      filterValue: null,
      selectedCity: '',
      langCode: null
    }
  },
  props: ['url', 'placeholder', 'id', 'name'],

  created: function () {
    const self = this
    var apiPath = self.apiPath + self.url
    axios.get(apiPath).then(response => {
      self.jsonList = response.data
    })
  },
  methods: {
    selectedCityItem: function (cityList, event) { // a regular event object is passed by $event in template
      this.cityCode = cityList.code
      this.cityName = cityList.cityName + ' (' + cityList.code + ')'
      this.$emit('onSelectCity', this.cityCode)
    }
  },
  computed: {
    apiPath: function () { return window.apiPath }
  }
}
</script>

<style scoped>
  .city-list {
    padding: 10px;
    column-count: 4;
    font-size: 13px;
    text-align: left;
  }
  .city-list ul{
    list-style: none;
    text-align: left;
    padding-left: 0;
    text-transform: capitalize;
  }
  .city-list .country{
    color: midnightblue;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 3px;
    min-width: 140px;
    display: inline-block;
    cursor: default;
    border-bottom: 2px solid #c0e2ff;
    padding-left: 5px;
  }
  .city-list .country:first-child{
    margin-top: 0;
  }
  .city-list ul li{
    cursor: pointer;
    padding-left: 5px;
  }
  .city-list li ul li:hover{
    background-color: aliceblue;
  }
  .form-control{
    border-radius: 0;
    font-size: 13px;
  }
</style>
