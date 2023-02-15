<script setup>
import SearchFilter from "@/components/SearchFilter.vue";
import newestAddedCars from "@/components/newestAddedCars.vue";
</script>

<template>
  <div>
    <div
      id="section-0-row-0"
      class="grid__row grid__theme section grid__theme--dark grid__theme--middle grid__theme--is-first grid__theme--top-padding ng-star-inserted"
    >
      <div class="container">
        <div id="spot-0000" class="ng-star-inserted"></div>
        <div class="container is-full animate-load ng-star-inserted">
          <div class="container is-fullwidth__searchFilter">
            <div class="hero-spot">
              <!---->
              <picture
                class="hero-spot__media-container--searchFilter ng-star-inserted"
              >
                <img
                  style="
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    object-position: center center;
                    opacity: 0.6;
                  "
                  alt="Afhængertræk af bilen er en god ide "
                  class="ng-star-inserted"
                  src="https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=1550&amp;heightratio=0.4285703125&amp;mode=crop"
                />
                <!----><!----></picture
              >

              <!----><!----><!---->
              <div class="hero-spot__content ng-star-inserted">
                <div class="spot-content">
                  <header class="spot-content__header ng-star-inserted">
                    <!---->
                    <h2 class="spot-content__header--title ng-star-inserted">
                      <span style="opacity: 0"
                        >Quickleasing - Find brugt leasingsbil</span
                      >
                    </h2>
                    <h1>Nemt, Enkelt og</h1>
                    <span class="dynamic__word">{{ changingWord }}</span>
                    <SearchFilter />
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <newestAddedCars/>
  </div>
  <footer-item />
</template>
<script>
export default {
  name: "Forside",
  data() {
    return {
      words: ["billigt", "pålidligt", "hurtigt", "Smart"], // list of words to rotate through
      changingWordIndex: 0,
      carData: [],
      brandData: [],
      modelData: [],
      baseURL: import.meta.env.VITE_APP_CARS_URL,
      currentURL: import.meta.env.VITE_APP_CARS_URL,
      pictureURL: import.meta.env.VITE_APP_PICTURE_URL,
      readerAPI: import.meta.env.VITE_APP_READER_API,
      selectedPrice: "*",
      selectedBrand: "*",
      selectedModel: "*",
    };
  },

  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await fetch(this.currentURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`,
        },
      });
      const data = await response.json();
      this.carData = data.data;
    },

    queryCars(price, brand, model) {
      if (price.includes("+")) {
        let price1 = price.split("+")[0];
        let price2 = "*";
        let url = `/quickleasing?price1=${price1}&price2=${price2}&brand=${brand}&model=${model}`;
        this.$router.push(url);
      } else if (price === "*") {
        let price1 = "*";
        let price2 = "*";
        let url = `/quickleasing?price1=${price1}&price2=${price2}&brand=${brand}&model=${model}`;
        this.$router.push(url);
      } else {
        let price1 = price.split("-")[0];
        let price2 = price.split("-")[1];
        let url = `/quickleasing?price1=${price1}&price2=${price2}&brand=${brand}&model=${model}`;
        this.$router.push(url);
      }
    },
  },
  computed: {
    changingWord() {
      return this.words[this.changingWordIndex];
    },
    brandsForSelectedModel() {
      const priceFilteredData = this.carData.filter((car) => {
        if (this.selectedPrice === "*") {
          return true;
        }
        const [minPrice, maxPrice] = this.selectedPrice.split("-");
        return (
          car.base_maanedspris >= parseInt(minPrice) &&
          car.base_maanedspris <= parseInt(maxPrice)
        );
      });

      const brandFilteredData = priceFilteredData.filter((car) => {
        return this.selectedModel === "*" || car.model === this.selectedModel;
      });
      const totalCars = brandFilteredData.length;

      const brandCount = {};
      brandFilteredData.forEach((car) => {
        if (!brandCount[car.brand]) {
          brandCount[car.brand] = 1;
        } else {
          brandCount[car.brand]++;
        }
      });

      const displayCount = this.selectedBrand !== "*";

      const brandOptions = [
        {
          label: `Alle${displayCount ? ` (${totalCars})` : ""}`,
          value: "*",
          count: displayCount ? totalCars : null,
        },
      ];

      brandOptions.push(
        ...Object.entries(brandCount).map(([name, count]) => ({
          label: `${name} (${count})`,
          value: name,
          count: displayCount ? count : null,
        }))
      );

      return brandOptions;
    },
    uniqueBrands() {
      const priceFilteredData = this.carData.filter((car) => {
        if (this.selectedPrice === "*") {
          return true;
        }
        const [minPrice, maxPrice] = this.selectedPrice.split("-");
        return (
          car.base_maanedspris >= parseInt(minPrice) &&
          car.base_maanedspris <= parseInt(maxPrice)
        );
      });

      const brandCount = {};
      priceFilteredData.forEach((car) => {
        if (!brandCount[car.brand]) {
          brandCount[car.brand] = 1;
        } else {
          brandCount[car.brand]++;
        }
      });

      return Object.entries(brandCount).map(([name, count]) => ({
        name,
        count,
      }));
    },
    modelForBrand() {
      const brandFilteredData = this.carData.filter((car) => {
        return this.selectedBrand === "*" || car.brand === this.selectedBrand;
      });

      const modelCount = {};
      brandFilteredData.forEach((car) => {
        if (!modelCount[car.model]) {
          modelCount[car.model] = 1;
        } else {
          modelCount[car.model]++;
        }
      });

      return Object.entries(modelCount).map(([name, count]) => ({
        name,
        count,
      }));
    },
    filteredModels() {
      const brandFilteredData = this.carData.filter((car) => {
        return this.selectedBrand === "*" || car.brand === this.selectedBrand;
      });

      const priceFilteredData = brandFilteredData.filter((car) => {
        if (this.selectedPrice === "*") {
          return true;
        }

        const [minPrice, maxPrice] = this.selectedPrice.split("-");
        return (
          car.base_maanedspris >= parseInt(minPrice) &&
          car.base_maanedspris <= parseInt(maxPrice)
        );
      });

      const modelCount = {};
      priceFilteredData.forEach((car) => {
        if (!modelCount[car.model]) {
          modelCount[car.model] = 1;
        } else {
          modelCount[car.model]++;
        }
      });

      const totalCars = priceFilteredData.length;
      const displayCount = this.selectedBrand !== "*";

      const modelOptions = [
        {
          label: `Alle${displayCount ? ` (${totalCars})` : ""}`,
          value: "*",
          count: displayCount ? totalCars : null,
        },
      ];

      modelOptions.push(
        ...Object.entries(modelCount).map(([name, count]) => ({
          label: `${name} (${count})`,
          value: name,
          count: displayCount ? count : null,
        }))
      );

      return modelOptions;
    },
  },
  mounted() {
    setInterval(() => {
      this.changingWordIndex = (this.changingWordIndex + 1) % this.words.length;
    }, 2000);
  },
};
</script>

<style>
.dynamic__word {
  color: var(--secondary);
  font-size: var(--h1);
  font-weight: 700;

  text-transform: capitalize;
}
@media screen and (min-width: 1024px) {
  .container.is-fullwidth__searchFilter {
    padding: 0 30.5rem;
  }
}
.hero-spot__media-container--searchFilter {
  position: relative;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 4;
  background-color: #000;
  overflow: hidden;
  height: 100%;
}

.searchFilter__container {
  width: 100%;
  padding: 20px;
}

.searchFilter__header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.searchFilter__select {
  background-color: #fff;
}

.formkit-option {
  display: flex;
  color: black;
}
.formkit-option img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

/* Borrownig */

@media all {
  ul {
    box-sizing: border-box;
  }
}
@media all {
  .searchandfilter ul {
    display: block;
    margin-top: 0;
    margin-bottom: 0;
  }
  .searchandfilter ul li {
    list-style: none;
    display: block;
    padding: 10px 0;
    margin: 0;
  }
  .searchandfilter label {
    display: inline-block;
    margin: 0;
    padding: 0;
  }
  .searchandfilter h4 {
    margin: 0;
    padding: 5px 0 10px;
    font-size: 16px;
  }
  .searchandfilter select.sf-input-select {
    min-width: 170px;
  }
}
@media all {
  .uk-padding-extra {
    padding: 80px 0px !important;
  }
}
@media all {
  .uk-background-cover {
    background-size: cover !important;
  }
  .frontpage-search .uk-tile-primary {
    background-color: rgb(4 0 0 / 0%);
  }
  form#search-filter-form-183 ul {
    padding-left: 0px;
  }
  form#search-filter-form-183 select,
  form#search-filter-form-183 label {
    display: block;
    width: 100%;
  }
  form#search-filter-form-183 select {
    height: 40px;
    border: none;
    padding: 0px 10px;
    font-family: "Ubuntu";
    font-size: 18px;
  }
  form#search-filter-form-183 input[type="submit"] {
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background-color: #298e21;
    color: #fff;
    font-size: 18px;
    font-family: "Ubuntu";
    box-sizing: border-box;
    height: 40px;
    transition: ease all 0.3s;
  }
  form#search-filter-form-183 input[type="submit"]:hover,
  form#search-filter-form-183 input[type="submit"]:focus {
    cursor: pointer;
    background-color: #222;
  }
}
@media all and (min-width: 960px) {
  form#search-filter-form-183 ul li {
    width: 25%;
    display: inline-block;
    padding: 0px 10px;
    box-sizing: border-box;
  }
}
@media all {
  .searchandfilter ul {
    padding-left: 0px;
  }
  .searchandfilter li input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    border: 1px solid #555;
    width: 15px;
    height: 15px;
    vertical-align: middle;
  }
  .searchandfilter li label {
    padding-left: 5px;
    vertical-align: middle;
  }
  .searchandfilter h4 {
    padding: 0px;
    font-weight: 600;
  }
  .searchandfilter select.sf-input-select {
    height: 30px;
    padding: 0px 10px;

    width: 200px;
    margin-top: 5px;
  }
  .searchandfilter li.sf-field-post-meta-pris_pr_md label {
    padding-left: 0px;
  }
  .searchandfilter li input:checked:after {
    content: "\f00d";

    display: flex;
    align-items: center;
    justify-content: center;
  }
}

:focus {
  outline: 0;
}
:focus:not([tabindex^="-"]) {
  outline: 2px dotted #2d2e33;
  outline-offset: 1px;
}
:focus-visible {
  outline: 2px dotted #2d2e33;
}
::selection {
  background: #39f;
  color: #fff;
  text-shadow: none;
}
.uk-heading-medium {
  font-size: 2.8875rem;
  line-height: 1.1;
  color: #2d2e33;
  font-family: Ubuntu;
}
@media (min-width: 960px) {
  .uk-heading-medium {
    font-size: 3.5rem;
  }
}
@media (min-width: 1200px) {
  .uk-heading-medium {
    font-size: 4rem;
  }
}
.uk-section {
  display: flow-root;
  box-sizing: border-box;
  padding-top: 40px;
  padding-bottom: 40px;
}
@media (min-width: 960px) {
  .uk-section {
    padding-top: 70px;
    padding-bottom: 70px;
  }
}
.uk-section > :last-child {
  margin-bottom: 0;
}
.uk-section-default {
  background: #fff;
}
.uk-container {
  display: flow-root;
  box-sizing: content-box;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}
@media (min-width: 640px) {
  .uk-container {
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media (min-width: 960px) {
  .uk-container {
    padding-left: 40px;
    padding-right: 40px;
  }
}
.uk-container > :last-child {
  margin-bottom: 0;
}
.uk-container .uk-container {
  padding-left: 0;
  padding-right: 0;
}
.uk-tile {
  display: flow-root;
  position: relative;
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 40px;
  padding-bottom: 40px;
}
@media (min-width: 640px) {
  .uk-tile {
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media (min-width: 960px) {
  .uk-tile {
    padding-left: 40px;
    padding-right: 40px;
  }
}
.uk-tile > :last-child {
  margin-bottom: 0;
}
.uk-tile-primary {
  background-color: rgba(255, 11, 11, 0.27);
}
:where(.uk-tile-primary:not(.uk-preserve-color)) > * {
  color: rgba(255, 255, 255, 0.7);
}
.uk-grid {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
}
.uk-grid > * {
  margin: 0;
}
.uk-grid > * > :last-child {
  margin-bottom: 0;
}
.uk-grid {
  margin-left: -20px;
}
.uk-grid > * {
  padding-left: 20px;
}
* + .uk-grid-margin {
  margin-top: 20px;
}
@media (min-width: 1200px) {
  .uk-grid {
    margin-left: -40px;
  }
  .uk-grid > * {
    padding-left: 40px;
  }
  * + .uk-grid-margin {
    margin-top: 40px;
  }
}
.uk-grid-item-match {
  display: flex;
  flex-wrap: wrap;
}
.uk-grid-item-match > :not([class*="uk-width"]) {
  box-sizing: border-box;
  width: 100%;
  flex: auto;
}
[class*="uk-child-width"] > * {
  box-sizing: border-box;
  width: 100%;
}
[class*="uk-width"] {
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
}
.uk-text-center {
  text-align: center !important;
}
.uk-background-cover {
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
.uk-background-cover {
  background-size: cover;
}
.uk-background-center-center {
  background-position: 50% 50%;
}
.uk-background-norepeat {
  background-repeat: no-repeat;
}
.uk-panel {
  display: flow-root;
  position: relative;
  box-sizing: border-box;
}
.uk-panel > :last-child {
  margin-bottom: 0;
}
.uk-flex {
  display: flex;
}
.uk-flex::after,
.uk-flex::before {
  display: none;
}
.uk-flex-middle {
  align-items: center;
}
.uk-flex-bottom {
  align-items: flex-end;
}
.uk-padding-remove-vertical {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.uk-position-cover {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.uk-position-relative {
  position: relative !important;
}
.uk-light,
.uk-tile-primary:not(.uk-preserve-color) {
  color: rgba(255, 255, 255, 0.7);
}
.uk-light .uk-heading-medium,
.uk-light h1,
.uk-tile-primary:not(.uk-preserve-color) .uk-h2,
.uk-tile-primary:not(.uk-preserve-color) h4 {
  color: #fff;
}
.uk-light:focus,
.uk-tile-primary:not(.uk-preserve-color):focus {
  outline-color: #fff;
}
.uk-light .uk-heading-medium {
  color: #fff;
}
@media print {
  *,
  ::after,
  ::before {
    background: 0 0 !important;
    color: #000 !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
}
.tm-grid-expand > * {
  flex-grow: 1;
}
</style>
