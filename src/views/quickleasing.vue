
<template>
  <div class="filtered__cars-container">

    <div class="main-flow___Sjg41" data-qa="main-flow">
      <div class="products___1WcE3" style="padding-top: 0; padding-left: 1rem">
        <div class="list___1c2KX">


          <div class="product___3vmta" v-for="car in carData" :key="car.id">

            <div class="product-card___2naPO has-cta___1N-4L">
              <div class="label-wrap___2_2TG">

                <div class="label___xUzK4 label___IKlVk black___2xtI_">
                  fra {{ car.base_udbetaling }} kr i udbetaling
                </div>
              </div>
              <div class="image-wrapper___2BJkg main-image___2PNg2">
                <img class="image___3UcXF" :src="thumbnail[car.id]" :alt="`${car.brand} - ${car.model}`"
                  :title="`${car.brand} - ${car.model}`" />
              </div>
              <div class="content___2i8ss">
                <div class="title___3jeSd">
                  <div class="name___3OMhd">{{ car.brand }} - {{ car.model }}</div>
                  <div class="price___1hgWK">
                    Abonnement fra<span class="value___3qMAh">{{ car.base_maanedspris }}</span>kr./md.
                  </div>

                </div>
                <div class="technical-details___2buqo technical-details___2vodE">
                  <div class="details-group___19Kyu">
                    <div class="detail___22pEp detail___3AT8g capitalize___o-pqq small-size___1i0G0">
                      <svg class="icon___2OPTw" width="40px" height="40px" viewBox="0 0 40 40"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g transform="translate(4.000000, 4.000000)" stroke="#444444" stroke-width="2" fill="none">
                          <circle id="Oval" cx="16.5" cy="16.5" r="16.5"></circle>
                          <line x1="10" y1="8.5" x2="10" y2="24.5"></line>
                          <line x1="17" y1="8.5" x2="17" y2="24.5"></line>
                          <line x1="24" y1="8.5" x2="24" y2="16.5"></line>
                          <line x1="10.5" y1="17" x2="23.5" y2="17"></line>
                        </g>
                      </svg>
                      <div class="title___3rl0o">{{ car.gear_type }}</div>
                    </div>
                    <div class="detail___22pEp detail___3AT8g small-size___1i0G0">
                      <svg class="icon___2OPTw" width="40px" height="40px" viewBox="0 0 40 40"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g transform="translate(6.000000, 6.000000)" stroke="#444444" stroke-width="2" fill="none">
                          <path
                            d="M7.00032,8.4 C12.9003,2.5 28.0003,0 28.0003,0 C28.0003,0 26.0003,14.6 19.6003,21 C12.7003,27.9 4.70032,23.3 4.70032,23.3 C4.70032,23.3 0.00032,15.4 7.00032,8.4 Z">
                          </path>
                          <line x1="15" y1="13" x2="0" y2="28"></line>
                        </g>
                      </svg>
                      <div class="title___3rl0o">
                        <div class="emissions___3B8H6">
                          <span>CO<sub>2</sub></span>&nbsp;{{ car.co2 }} g/km
                          <div class="energy-class___BHiLA energy-class___3KEQh">
                            <span style="background-color: rgb(190, 214, 47)">A<sup>+</sup></span><span
                              class="arrow-right___1p9wE" style="border-left-color: rgb(190, 214, 47)"></span>
                            <div class="shadow___2ZdD4">
                              <span></span><span class="arrow-right___1p9wE"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="details-group___19Kyu">
                    <div class="detail___22pEp detail___3AT8g capitalize___o-pqq small-size___1i0G0">
                      <svg class="icon___2OPTw" width="40px" height="40px" viewBox="0 0 40 40"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g fill="none" transform="translate(6.000000, 3.000000)">
                          <path
                            d="M22,34 L0,34 L0,3.43077895 C0,1.53841053 1.53894737,0.000357894737 3.43042105,0.000357894737 L18.5686842,0.0695789474 C20.4601579,0.0695789474 22,1.60763158 22,3.5 L22,34 Z"
                            stroke="#444444" stroke-width="2"></path>
                          <polygon stroke="#444444" stroke-width="2" points="4 18 18 18 18 5 4 5"></polygon>
                          <path
                            d="M25,3 L29,9 L29,29 C29,30.1045695 28.1045695,31 27,31 C25.8954305,31 25,30.1045695 25,29 L25,22 C25,20.8954305 24.1045695,20 23,20 L22,20 L22,20"
                            stroke="#444444" stroke-width="2"></path>
                          <path
                            d="M29.5,11 L25.5938579,3.62583158 L25.7211053,8.722 C25.7211053,9.98 26.742,11 28,11 L29.5,11 Z"
                            fill="#444444"></path>
                        </g>
                      </svg>
                      <div class="title___3rl0o">{{ car.braendstof }}</div>
                    </div>
                    <div class="detail___22pEp detail___3AT8g small-size___1i0G0">
                      <svg class="icon___2OPTw" width="40px" height="40px" viewBox="0 0 40 40"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g transform="translate(1.000000, 6.000000)" fill="none">
                          <line x1="6" y1="28" x2="15" y2="0" stroke="#444444" stroke-width="2"></line>
                          <line x1="27" y1="0" x2="36" y2="28" stroke="#444444" stroke-width="2"></line>
                          <line x1="21" y1="3" x2="21" y2="6" stroke="#444444" stroke-width="2"></line>
                          <line x1="21" y1="11" x2="21" y2="15" stroke="#444444" stroke-width="2"></line>
                          <line x1="21" y1="20" x2="21" y2="25" stroke="#444444" stroke-width="2"></line>
                          <path
                            d="M4,10.1992 C5.8125,10.1992 7.75,8.9169 7.75,6.70209 C7.75,4.66209 4,0.87354 4,0.87354 C4,0.87354 0.25,4.66209 0.25,6.70209 C0.25,8.9169 2.1875,10.1992 4,10.1992 Z"
                            fill="#444444"></path>
                        </g>
                      </svg>
                      <div class="title___3rl0o">{{ car.kilometerprliter }} km/l</div>
                    </div>
                  </div>
                </div>
                <div class="highlighted-features___34JSO">
                  <span class="highlighted-feature___2Z8Zj">{{ getFeatures(car) }}</span>
                </div>
                <RouterLink :to="`/quickleasing/${car.id}`">
                  <button
                    class="button___2oWcS default___31nVJ cta-button___2wq8T outlined___F3j36 rounded-corners___2DuU9 small___3BQ-q">
                    Vælg bil
                  </button>
                </RouterLink>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>



    <!-- START NEW FILTER -->

    <div class="filter__container">
      <div class="filter__inner-wrapper">


        <div class="filter__price" id="filterPrice" style="width: 100%">
          <h3 class="filter__header" style="padding-bottom: 3.5rem">Pris pr.md.</h3>
          <Slider v-model="priceRange.value" :min="1000" :max="5000" :step="100" :tooltips="true" :range="true"
            :format="value => `${value} kr.`" @change="priceChange"></Slider>
        </div>

        <div class="filter__price" id="filterPrice" style="width: 100%">
          <h3 class="filter__header" style="padding-bottom: 3.5rem">Førstegangsydelse</h3>
          <Slider v-model="oneTimePriceRange.value" :min="0" :max="10000" :step="500" :tooltips="true" :range="true"
            :format="value => `${value} kr.`" @change="oneTimePriceChange"></Slider>
        </div>

        <!--
                                  <div id="filterPrice">
                                    <h3>pris pr.md.</h3>
                                    <select v-model="selectedPrice" @change="priceChange">
                                      <option value="*">Alle</option>
                                      <option value="1000-2000">1.000 - 2.000</option>
                                      <option value="2000-3000">2.000 - 3.000</option>
                                      <option value="3000-4000">3.000 - 4.000</option>
                                      <option value="4000-5000">4.000 - 5.000</option>
                                      <option value="5000+">3.000 - 4.000</option>
                                    </select>

                                  </div>
                              -->

        <div class="filter__brand" id="brandCheckbox">
          <h3 class="filter__header pad-header--xs">Mærke</h3>
          <ul class="filter__ul list--none" style="list-style: none">
            <li class="filter__li" v-for="brand in uniqueBrands" :key="brand">
              <label class="container">
                <input class="filter__checkbox checkbox" type="checkbox" :value="brand.name"
                  :checked="selectedBrands.includes(brand.name)" @click="handleCheckboxClick(brand.name)" />
                {{ brand.name }} ({{ brand.count }})
                <span class="checkmark"></span>
              </label>

            </li>
          </ul>
        </div>

        <div class="filter__model">
          <h3 class="filter__header pad-header--m">Model</h3>
          <select class="filter__select" v-model="selectedModel" @change="modelChange()">
            <option class="filter__option-all" value="*">Alle modeller</option>
            <option class="filter__option" v-for="option in modelOptions" :value="option">{{ option.label }}</option>
          </select>
        </div>

        <div class="filter__features">
          <h3 class="filter__header pad-header--m">Udstyr</h3>
          <ul class="filter__ul">
            <li class="filter__li" v-for="item in featureItems" :key="item.value" :data-value="item.value">
              <label class="container"
                v-if="carData.filter(car => car.Udstyr && car.Udstyr.includes(item.value)).length > 0">
                <input class="filter__checkbox" type="checkbox" @click="handleCheckboxClickFeatures(item.value)" />
                {{ item.name }} ({{ carData.filter(car => car.Udstyr && car.Udstyr.includes(item.value)).length }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>


        <div class="filter__tire">
          <h3 class="filter__header">Dæktype</h3>
          <ul class="filter__ul">
            <li class="filter__li" v-for="tire in tireTypes" :key="tire.value">
              <label class="container">
                <input class="filter__checkbox" type="checkbox" :value="tire.value"
                  :checked="selectedTireTypes.includes(tire.value)" @click="handleCheckboxClickTireType(tire.value)" />
                {{ tire.name }} ({{ tire.count }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>
        <div class="filter__tire">
          <h3 class="filter__header">Bil type</h3>
          <ul class="filter__ul">
            <li class="filter__li" v-for="carType in carTypes" :key="carType.value">
              <label class="container">
                <input class="filter__checkbox" type="checkbox" :value="tire.value"
                  :checked="selectedCarTypes.includes(carType.value)"
                  @click="handleCheckboxClickCarType(carType.value)" />
                {{ carType.name }} ({{ carType.count }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>
        <div class="filter__tire">
          <h3 class="filter__header">Gear Type</h3>
          <ul class="filter__ul">
            <li class="filter__li" v-for="gear in gearTypes" :key="gear.value">
              <label class="container">
                <input class="filter__checkbox" type="checkbox" :value="gear.value"
                  :checked="selectedGearTypes.includes(gear.value)" @click="handleCheckboxClickGearType(gear.value)" />
                {{ gear.name }} ({{ gear.count }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>
        <div class="filter__tire">
          <h3 class="filter__header">Brændstof</h3>
          <ul class="filter__ul">
            <li class="filter__li" v-for="tire in tireTypes" :key="tire.value">
              <label class="container">
                <input class="filter__checkbox" type="checkbox" :value="tire.value"
                  :checked="selectedTireTypes.includes(tire.value)" @click="handleCheckboxClickTireType(tire.value)" />
                {{ tire.name }} ({{ tire.count }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
</div>
</template>

<script >
import Slider from '@vueform/slider'

export default {
  components: {
    Slider,
  },
  data() {
    return {
      name: "QuickLeasing",
      priceRange: {
        value: [1000, 5000]
      },
      oneTimePriceRange: {
        value: [0, 10000]
      },
      queryBrand: this.$route.query.brand,
      queryModel: this.$route.query.model,
      queryPrice1: this.$route.query.price1,
      queryPrice2: this.$route.query.price2,
      carImages: {},
      thumbnail: {},
      carData: [],
      selectedBrands: [],
      originalData: [],
      baseURL: import.meta.env.VITE_APP_CARS_URL,
      currentURL: import.meta.env.VITE_APP_CARS_URL,
      pictureURL: import.meta.env.VITE_APP_PICTURE_URL,
      fileURL: import.meta.env.VITE_APP_FILE_ID_URL,
      readerAPI: import.meta.env.VITE_APP_READER_API,
      checkBoxState: {},
      selectedFeatures: [],
      selectedPrice: '*',
      udstyr: [],
      models: [],
      carTypes: [],
      gearTypes: [
        { value: "automatgear", name: "Automatgear", count: 0 },
        { value: "manuelgear", name: "Manuelgear", count: 0 },
      ],
      fuelTypes: [
        { value: "benzin", name: "Benzin", count: 0 },
        { value: "diesel", name: "Diesel", count: 0 },
        { value: "pluginhybrid", name: "Plug-in Hybrid", count: 0 },
      ],
      selectedModel: "",
      selectedTireTypes: [],
      selectedCarTypes: [],
      selectedGearTypes: [],
      selectedFuelTypes: [],
      featureItems: [
        { value: "airc", name: "Air Condition", count: 0 },
        { value: "fartpilot", name: "Fartpilot", count: 0 },
        { value: "bluetooth", name: "Bluetooth", count: 0 },
        { value: "sædevarme", name: "Sædevarme", count: 0 },
        { value: "varmeirat", name: "Rat-varme", count: 0 },
        { value: "parkeringssensorfor", name: "Parkeringssensor (foran)", count: 0 },
        { value: "parkeringssensorbag", name: "Parkeringssensor (bag)", count: 0 },
        { value: "navigation", name: "Navigation", count: 0 },
        { value: "autgeartiptronic", name: "Automatgear", count: 0 },
        { value: "Anhaengertraek", name: "Anhængertræk", count: 0 },
        { value: "4xelruder", name: "4 elruder", count: 0 },
        { value: "5personers", name: "5 personers", count: 0 },
        { value: "bakkamera", name: "Bakkamera", count: 0 },
        { value: "applecarplay", name: "Apple CarPlay", count: 0 },
        { value: "androidauto", name: "Android Auto", count: 0 },
      ],
      tireTypes: [
        { value: "sommerdaek", name: "Monteret med sommerdæk", count: 0 },
        { value: "vinterdaek", name: "Monteret med vinterdæk", count: 0 },
        { value: "helaarsdaek", name: "Monteret med helårsdæk", count: 0 },
      ],
    };
  },


  mounted() {
    this.fetchModels();
  },
  async created() {
    await this.fetchData();
    await this.fetchData2();
    await this.updateTireTypeCounts() == this.updateTireTypeCounts.bind(this);
    await this.updateGearTypeCounts() == this.updateGearTypeCounts.bind(this);
    this.fetchModels();
  },
  methods: {
    async fetchData() {
      const response = await fetch(this.currentURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`
        }
      });
      const data = await response.json();
      this.carData = data.data;
      this.originalData = data.data;
      this.carData.forEach((car) => {
        this.carImages[car.id] = this.imageURL(car);
      });
      this.carData.forEach((car) => {
        this.thumbnail[car.id] = this.thumbNailURL(car);
      });
    },
    getFeatures(car) {
      if (!car.Udstyr) {
        return "Ingen udstyr";
      }

      const featureNames = car.Udstyr.map((feature) => {
        const matchingFeature = this.featureItems.find((item) => item.value === feature);
        return matchingFeature ? matchingFeature.name : null;
      }).filter(Boolean);

      const featuresToShow = featureNames.slice(0, 3);

      if (featuresToShow.length > 0) {
        return "Kommer bl.a. med " + featuresToShow.join(", ");
      } else {
        return "Ingen udstyr";
      }
    },
    async thumbNailURL(car) {
      const response = await fetch(this.currentURL + car.id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`,
        },
      });
      const data = await response.json();
      console.log(data.data)
      if (data.data.thumbnail !== null) {
        this.thumbnail[car.id] = this.pictureURL + data.data.thumbnail
        return this.thumbnail[car.id] = this.pictureURL + data.data.thumbnail
      } else
        return this.thumbnail[car.id] = `${this.pictureURL}7bb1ea40-d2c8-45c9-ba61-ce460f2a0830?fit=cover&width=300&height=200&quality=80`;
    },
    async imageURL(car) {
      let imageURLTOADD = `?filter[cars_id][_eq]=${car.id}`;
      const response = await fetch(this.fileURL + imageURLTOADD, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`,
        },
      });
      const data = await response.json();
      if (data.data.length === 0) {
        // Hvis der ikke er et billede, så sæt et placeholder billede
        return this.carImages[car.id] = `${this.pictureURL}7bb1ea40-d2c8-45c9-ba61-ce460f2a0830?fit=cover&width=300&height=200&quality=80`;

      } else {
        this.carImages[car.id] = this.pictureURL + data.data[0].directus_files_id;
        return this.pictureURL + data.data[0].directus_files_id;
      }
    },
    async fetchData2() {

      if (this.queryBrand !== undefined || this.queryModel !== undefined || (this.queryPrice1 !== undefined && this.queryPrice2 !== undefined)) {
        const priceRange = {
          min: this.queryPrice1 !== "*" ? Number(this.queryPrice1) : Number.NEGATIVE_INFINITY,
          max: this.queryPrice2 !== "*" ? Number(this.queryPrice2) : Number.POSITIVE_INFINITY
        };
        if (this.queryBrand === "*" && this.queryModel === "*") {
          // filter by price range only
          this.carData = this.originalData.filter(car =>
            car.base_maanedspris >= priceRange.min && car.base_maanedspris <= priceRange.max
          );
        } else if (this.queryBrand === "*" && this.queryModel !== "*") {
          // filter by model and price range
          this.carData = this.originalData.filter(car =>
            car.model === this.queryModel &&
            car.base_maanedspris >= priceRange.min && car.base_maanedspris <= priceRange.max
          );
        } else if (this.queryBrand !== "*" && this.queryModel === "*") {
          // filter by brand and price range
          this.carData = this.originalData.filter(car =>
            car.brand === this.queryBrand &&
            car.base_maanedspris >= priceRange.min && car.base_maanedspris <= priceRange.max
          );
        } else if (this.queryBrand !== "*" && this.queryModel !== "*") {
          // filter by brand, model, and price range
          this.carData = this.originalData.filter(car =>
            car.brand === this.queryBrand &&
            car.model === this.queryModel &&
            car.base_maanedspris >= priceRange.min && car.base_maanedspris <= priceRange.max
          );
        } else {
          // no filters, use original data
          this.carData = this.originalData;
        }
      } else {
        this.carData = this.originalData;
      }
    }
    ,
    async handleCheckboxClick(value) {
      let filter = { brand: { _in: [value] } };

      if (this.selectedBrands.includes(value)) {
        this.selectedBrands = this.selectedBrands.filter(brand => brand !== value);
      } else {
        this.selectedBrands.push(value);
      }
      filter = { brand: { _in: this.selectedBrands } };

      this.currentURL = `${this.baseURL}?filter=${encodeURIComponent(JSON.stringify(filter))}`;

      if (this.selectedBrands.length === 0) {
        this.currentURL = this.baseURL;
      }
      const checkboxResponse = await fetch(this.currentURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`
        }
      });
      const data = await checkboxResponse.json();
      this.carData = data.data;
    }

    ,
    async handleCheckboxClickFeatures(value) {
      const response = await fetch(this.currentURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`
        }
      });
      const data = await response.json();
      const allData = data.data;

      this.checkBoxState[value] = !this.checkBoxState[value];

      if (this.checkBoxState[value]) {
        this.selectedFeatures.push(value);
      } else {
        this.selectedFeatures = this.selectedFeatures.filter(f => f !== value);
      }

      if (this.selectedFeatures.length === 0) {
        this.carData = allData;
        return;
      }
      const filteredCars = [];
      for (let i = 0; i < allData.length; i++) {
        if (allData[i].Udstyr !== null) {
          let match = true;
          for (let x = 0; x < this.selectedFeatures.length; x++) {
            if (!allData[i].Udstyr.includes(this.selectedFeatures[x])) {
              match = false;
              break;
            }
          }
          if (match) {
            filteredCars.push(allData[i]);
          }
        }
      }

      this.carData = Array.from(filteredCars);
    }
    ,
    async updateFeatureCounts(cars) {
      cars.forEach(car => {
        if (car.Udstyr !== null) {
          car.Udstyr.forEach(feature => {
            const foundFeature = this.featureItems.find(
              item => item.value === feature
            );
            if (foundFeature) {
              foundFeature.count++;
            }
          });
        }
      });
    },
    async priceChange() {
      const response = await fetch(this.currentURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`
        }
      });
      const data = await response.json();
      const allData = data.data;

      if (this.priceRange.value[0] === 1000 && this.priceRange.value[1] === 5000) {
        this.carData = allData;
        return;
      }

      const priceRange = allData.filter(car => car.base_maanedspris >= this.priceRange.value[0] && car.base_maanedspris <= this.priceRange.value[1]);

      this.carData = priceRange;
    },
    async oneTimePriceChange() {
      const response = await fetch(this.currentURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`
        }
      });
      const data = await response.json();
      const allData = data.data;

      if (this.oneTimePriceRange.value[0] === 0 && this.oneTimePriceRange.value[1] === 10000) {
        this.carData = allData;
        return;
      }
      const filteredData = allData.reduce((accumulator, car) => {
        const baseUdbetaling = car.base_udbetaling || 0;
        if (baseUdbetaling >= this.oneTimePriceRange.value[0] && baseUdbetaling <= this.oneTimePriceRange.value[1]) {
          accumulator.push(car);
        }
        return accumulator;
      }, []);

      // Use filteredData for further processing
      this.carData = filteredData;
    },
    async handleCheckboxClickGearType(value) {
      const response = await fetch(this.currentURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`
        }
      });
      const data = await response.json();
      const allData = data.data;
      if (this.selectedGearTypes.includes(value)) {
        this.selectedGearTypes = this.selectedGearTypes.filter(gear => gear !== value);
        if (this.selectedGearTypes.length === 0) {
          this.carData = allData;
          return;
        }
      } else {
        this.selectedGearTypes.push(value);
      }

      const filteredCars = [];
      for (let i = 0; i < allData.length; i++) {
        if (this.selectedGearTypes.includes(allData[i].gear_type)) {
          filteredCars.push(allData[i]);
        }
      }
      this.carData = Array.from(filteredCars);
    }
    ,
    async handleCheckboxClickTireType(value) {
      const response = await fetch(this.currentURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`
        }
      });
      const data = await response.json();
      const allData = data.data;
      if (this.selectedTireTypes.includes(value)) {
        this.selectedTireTypes = this.selectedTireTypes.filter(tire => tire !== value);
        if (this.selectedTireTypes.length === 0) {
          this.carData = allData;
          return;
        }
      } else {
        this.selectedTireTypes.push(value);
      }

      const filteredCars = [];
      for (let i = 0; i < allData.length; i++) {
        if (this.selectedTireTypes.includes(allData[i].daektype)) {
          filteredCars.push(allData[i]);
        }
      }
      this.carData = Array.from(filteredCars);
    }
    ,

    async updateTireTypeCounts() {
      const response = await fetch(this.currentURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`
        }
      });
      const data = await response.json();
      const cars = data.data;
      cars.forEach(car => {
        if (car.daektype !== null) {
          const foundTireType = this.tireTypes.find(
            type => type.value === car.daektype
          );
          if (foundTireType) {
            foundTireType.count++;
          }
        }
      });
    },
    async updateGearTypeCounts() {
      const response = await fetch(this.currentURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`
        }
      });
      const data = await response.json();
      const cars = data.data;
      cars.forEach(car => {
        if (car.gear_type !== null) {
          const foundGearType = this.gearTypes.find(
            gear => gear.value === car.gear_type
          );
          if (foundGearType) {
            foundGearType.count++;
          }
        }
      });
    },
    async fetchModels() {
      try {
        const response = await fetch(this.currentURL, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.readerAPI}`,
          },
        });
        const data = await response.json();
        const cars = data.data;


        this.models = cars.map((car) => ({
          label: car.model,
        }));
      } catch (error) {
        console.error(error);
      }
    },
    async modelChange() {
      const response = await fetch(this.currentURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`
        }
      });
      const data = await response.json();
      const allData = data.data;
      if (this.selectedModel === '*') {
        this.carData = data.data
        return;
      }
      const filteredCars = [];
      for (let i = 0; i < allData.length; i++) {
        if (this.selectedModel.value === allData[i].model) {
          filteredCars.push(allData[i]);
        }
      }
      this.carData = Array.from(filteredCars);
    }

  },
  computed: {
    uniqueBrands() {
      const brandCount = {};
      this.originalData.forEach(car => {
        if (!brandCount[car.brand]) {
          brandCount[car.brand] = 1;
        } else {
          brandCount[car.brand]++;
        }
      });

      return Object.entries(brandCount).map(([name, count]) => ({
        name,
        count

      }));
    },
    modelOptions() {
      const modelCounts = {};
      this.carData.forEach(car => {
        const model = car.model;
        modelCounts[model] = modelCounts[model] ? modelCounts[model] + 1 : 1;
      });
      return Object.keys(modelCounts).map(model => ({
        value: model,
        label: `${model} (${modelCounts[model]})`,
      }));
    }
  },


};
</script>

<style src="@vueform/slider/themes/default.css"></style>
<style>
.products___1WcE3 {}

.filtered__cars-container {
  display: flex;
  flex-direction: row-reverse;
  margin-top: var(--section-space-s);
  padding: var(--section-space-m) var(--space-xs);
}

.filter__container {
  position: sticky;
  top: 0;
  left: 0;
  height: 100%;
  overflow: visible;
  width: 350px;
  margin-left: var(--section-space-xl);
  background-color: #F1F1F1;
}

.main-flow___Sjg41 {
  flex: 1;

}

.filter__inner-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
  padding: var(--space-s) var(--space-m);
}

.filter__header {
  font-size: 18px;
  font-weight: bold;
}

.filter__header.pad-header--xs {
  padding-top: 10px;
  padding-bottom: 10px;
}

.filter__header.pad-header--m {
  padding-top: 20px;
  padding-bottom: 20px;
}

.filter__price {}

.filter__brand,
.filter__model,
.filter__features,
.filter__tire {
  display: flex;
  flex-direction: column;
}

.filter__ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.filter__li {
  margin-top: 5px;
}

.filter__checkbox {
  margin-right: 5px;
}

.filter__select {
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
}

.filter__option-all {
  font-weight: bold;
}

.filter__option {
  padding: 10px;
  font-size: 14px;
}

.filter__tire {
  margin-bottom: 20px;
}

.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: var(--text-m);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: var(--white);
}

/* On mouse-over, add a grey background color */
.container:hover input~.checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked~.checkmark {
  background-color: var(--action);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked~.checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>