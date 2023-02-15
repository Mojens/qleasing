<script setup>
const carBrands = [
  {
    label: "Audi",
    value: "audi",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/audi-logo.png",
  },
  {
    label: "BMW",
    value: "bmw",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/bmw-logo.png",
  },
  {
    label: "Citroen",
    value: "citroen",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/citroen-logo.png",
  },
  {
    label: "Dacia",
    value: "dacia",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/dacia-logo.png",
  },
  {
    label: "Fiat",
    value: "fiat",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/fiat-logo.png",
  },
  {
    label: "Ford",
    value: "ford",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/ford-logo.png",
  },
  {
    label: "Ferrari",
    value: "ferrari",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/ferrari-logo.png",
  },
  {
    label: "Honda",
    value: "honda",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/honda-logo.png",
  },
  {
    label: "Hyundai",
    value: "hyundai",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/hyundai-logo.png",
  },
  {
    label: "Jaguar",
    value: "jaguar",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/jaguar-logo.png",
  },
  {
    label: "Jeep",
    value: "jeep",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/jeep-logo.png",
  },
  {
    label: "Kia",
    value: "kia",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/kia-logo.png",
  },
  {
    label: "Land Rover",
    value: "land rover",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/land-rover-logo.png",
  },
  {
    label: "Mazda",
    value: "mazda",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/mazda-logo.png",
  },
  {
    label: "Mercedes",
    value: "mercedes",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/mercedes-logo.png",
  },
  {
    label: "Mini",
    value: "mini",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/mini-logo.png",
  },
  {
    label: "Mitsubishi",
    value: "mitsubishi",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/mitsubishi-logo.png",
  },
  {
    label: "Nissan",
    value: "nissan",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/nissan-logo.png",
  },
  {
    label: "Opel",
    value: "opel",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/opel-logo.png",
  },
  {
    label: "Peugeot",
    value: "peugeot",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/peugeot-logo.png",
  },
  {
    label: "Porsche",
    value: "porsche",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/porsche-logo.png",
  },
  {
    label: "Renault",
    value: "renault",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/renault-logo.png",
  },
  {
    label: "Saab",
    value: "saab",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/saab-logo.png",
  },
  {
    label: "Skoda",
    value: "skoda",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/skoda-logo.png",
  },
  {
    label: "Subaru",
    value: "subaru",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/subaru-logo.png",
  },
  {
    label: "Suzuki",
    value: "suzuki",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/suzuki-logo.png",
  },
  {
    label: "Toyota",
    value: "toyota",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/toyota-logo.png",
  },
  {
    label: "Volkswagen",
    value: "volkswagen",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/volkswagen-logo.png",
  },
  {
    label: "Volvo",
    value: "volvo",
    logo: "https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/volvo-logo.png",
  },
];
const priceRanges = [
  {
    label: "Alle",
    value: "*",
    asset: "src/assets/price-range-all.png",
  },
  {
    label: "1.000 - 2.000",
    value: "1000-2000",
    asset: "src/assets/price-range-all.png",
  },
  {
    label: "2.000 - 3.000",
    value: "2000-3000",
    asset: "src/assets/price-range-all.png",
  },
  {
    label: "3.000 - 4.000",
    value: "3000-4000",
    asset: "src/assets/price-range-all.png",
  },
  {
    label: "4.000 - 5.000",
    value: "4000-5000",
    asset: "src/assets/price-range-all.png",
  },
  {
    label: "5.000+",
    value: "5000+",
    asset: "src/assets/price-range-all.png",
  },
];
</script>

<template>
  <div class="uk-grid-margin uk-container">
    <div
      class="frontpage-search tm-grid-expand uk-child-width-1-1 uk-grid uk-grid-stack"

    >
      <div class="uk-grid-item-match uk-first-column">
        <div class="uk-tile-primary uk-tile uk-flex uk-flex-bottom">
          <div class="uk-panel uk-width-1-1">
            <div class="h--3 text--bold pad-header--s">
              Find din næste bil herunder:
            </div>
            <FormKit type="form" :actions="false" #default="{ value }" form-class="grid--auto-3">
              <FormKit
                type="dropdown"
                name="selectedPrice"
                label="Pris"
                :inner-class="{
        searchFilter__select: true,
      }"
                :listbox-class="{
        'searchFilter__wrapper-options': true,
      }"
                :wrapper-class="{
        searchFilter__wrapper: true,
      }"
                :dropdown-wrapper-class="{
        'searchFilter__dropdown-wrapper': true,
      }"
                placeholder="Choose a price range"
                :floating-label="false"
                v-model="selectedPrice"
                :options="priceRanges"
              >
                <!-- OPTION SLOT -->
                <template #option="{ option }">
                  <div class="formkit-option">
                    <img class="no_styling" :src="option.asset" alt="optionImage" />
                    <span class="select__options">{{ option.label }}</span>
                  </div>
                </template>
              </FormKit>

              <FormKit
                type="dropdown"
                name="selectedBrand"
                label="Mærke"
                :inner-class="{
        searchFilter__select: true,
      }"
                placeholder="Alle"
                :options="brandsForSelectedModel"
                v-model="selectedBrand"
              >
                <template #option="{ option }">
                  <div class="formkit-option">
                    <span>{{ option.label }}</span>
                  </div>
                </template>
              </FormKit>
              <FormKit
                type="dropdown"
                name="selectedModel"
                label="Model"
                :inner-class="{
        searchFilter__select: true,
      }"
                placeholder="Alle"
                :options="filteredModels"
                v-model="selectedModel"
              >
                <template #option="{ option }">
                  <div class="formkit-option">
                    <span>{{ option.label }}</span>
                  </div>
                </template>
              </FormKit>
            </FormKit>
            <div>
              <div class="uk-container">
                <button
                  class="button-primary"
                  type="submit"
                  @click="
                            queryCars(
                              selectedPrice,
                              selectedBrand,
                              selectedModel
                            )
                          "
                >
                  Vis biler
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchFilter",
  data() {
    return {
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
};
</script>

<style >



</style>