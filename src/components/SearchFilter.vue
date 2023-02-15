<script setup>
const priceRanges = [
  {
    label: "Alle",
    value: "*",
    asset: "src/assets/price-range-all.png",
  },
  {
    label: "1.000 - 2.000",
    value: "1000-2000",
    asset: "src/assets/1dollarsign.png",
  },
  {
    label: "2.000 - 3.000",
    value: "2000-3000",
    asset: "src/assets/2dollarsign.png",
  },
  {
    label: "3.000 - 4.000",
    value: "3000-4000",
    asset: "src/assets/3dollarsign.png",
  },
  {
    label: "4.000 - 5.000",
    value: "4000-5000",
    asset: "src/assets/4dollarsign.png",
  },
  {
    label: "5.000+",
    value: "5000+",
    asset: "src/assets/5dollarsign.png",
  },
];
</script>

<template>
  <div class="uk-container">
    <div
      class="frontpage-search tm-grid-expand uk-child-width-1-1 uk-grid uk-grid-stack"
    >
      <div class="uk-grid-item-match uk-first-column">
        <div class="uk-tile-primary uk-tile uk-flex uk-flex-bottom">
          <div class="uk-panel uk-width-1-1">
            <div class="h--3 text--bold pad-header--s">
              Find din næste bil herunder:
            </div>
            <FormKit
              type="form"
              :actions="false"
              #default="{ value }"
              form-class="grid--auto-3"
            >
              <FormKit
                type="dropdown"
                name="selectedPrice"
                label="Pris"
                :inner-class="{
                  searchFilter__select: true,
                }"
                label-class="center--left options__label"
                placeholder="Choose a price range"
                :floating-label="false"
                v-model="selectedPrice"
                :options="priceRanges"
              >
                <!-- OPTION SLOT -->
                <template #option="{ option }">
                  <div class="formkit-option">
                    <img
                      class="no_styling"
                      :src="option.asset"
                      alt="optionImage"
                    />
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
                label-class="center--left options__label"
                placeholder="Alle"
                :options="brandsForSelectedModel"
                v-model="selectedBrand"
                prefix-icon="search"
              >
                <template #option="{ option }">
                  <div class="formkit-option">
                    <img
                      class="no_styling"
                      v-if="option.value !== '*'"
                      :src="option.logo"
                      alt="optionImage"
                    />
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
                label-class="center--left options__label"
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
                    queryCars(selectedPrice, selectedBrand, selectedModel)
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
          logo: "check",
        },
      ];

      brandOptions.push(
        ...Object.entries(brandCount).map(([name, count]) => ({
          label: `${name} (${count})`,
          value: name,
          logo: `https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/${name}-logo.png`.toLocaleLowerCase(),
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
          asset: name,
          count: displayCount ? count : null,
        }))
      );

      return modelOptions;
    },
  },
};
</script>

<style>
.no_styling {
  /* object fit */
  object-fit: scale-down;
  /* object position */
  object-position: center;
}

.options__label {
  color: var(--secondary);
  margin-bottom: 0.2rem;
  font-size: var(--h4);
  font-weight: 900;
  font-family: Rubik, sans-serif;
  text-transform: uppercase;
}
</style>
