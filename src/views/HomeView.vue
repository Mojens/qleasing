<template>
  <div>
    <div
      id="section-0-row-0"
      class="grid__row grid__theme section grid__theme--dark grid__theme--middle grid__theme--is-first grid__theme--top-padding ng-star-inserted"
    >
      <div class="container">
        <div id="spot-0000" class="ng-star-inserted" genericspot=""></div>
        <div
          class="container is-full animate-load ng-star-inserted"
          ncgloadin=""
        >
          <div class="container is-fullwidth">
            <div class="hero-spot">
              <!---->
              <picture class="hero-spot__media-container ng-star-inserted">
                <source
                  media="(min-width: 1024px)"
                  srcset="
                    https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=1550&amp;heightratio=0.4285703125&amp;mode=crop 1x,
                    https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=3100&amp;heightratio=0.4285703125&amp;mode=crop 2x
                  "
                />
                <source
                  media="(min-width: 768px) and (max-width: 1023px)"
                  srcset="
                    https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=1024&amp;heightratio=0.4285703125&amp;mode=crop 1x,
                    https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=2048&amp;heightratio=0.4285703125&amp;mode=crop 2x
                  "
                />
                <source
                  media="(min-width: 414px) and (max-width: 767px)"
                  srcset="
                    https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=767&amp;heightratio=1.2487309645&amp;mode=crop  1x,
                    https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=1534&amp;heightratio=1.2487309645&amp;mode=crop 2x
                  "
                />
                <source
                  media="(max-width: 413px)"
                  srcset="
                    https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=394&amp;heightratio=1.2487309645&amp;mode=crop 1x,
                    https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=788&amp;heightratio=1.2487309645&amp;mode=crop 2x
                  "
                />
                <img
                  alt="Hyundai prøvetur kvinde kører i bil "
                  class="ng-star-inserted"
                  src="https://admin.hyundai.dk/media/n50fxf4r/provekor.jpg?width=1550&amp;heightratio=0.4285703125&amp;mode=crop"
                />
              </picture>

              <div
                class="hero-spot__content animate-load ng-star-inserted"
                ncgloadin=""
              >
                <div class="spot-content">
                  <header
                    class="spot-content__header ng-star-inserted"
                  ><h1
                    class="spot-content__header--title ng-star-inserted"><span
                    style="font-weight: 700;">Leasing på den nemme måde</span></h1></header>
                </div>
                <div class="searchFilter__container">
                  <h2 class="pad-header--s">Find din næste bil herunder</h2>
                  <table class="table__container">
                    <thead>
                    <tr class="table__tr">
                      <th>Pris</th>
                      <th>Mærke</th>
                      <th>Model</th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr class="table__tr">
                      <td class="table__td">
                        <select v-model="selectedPrice" class="searchFilter__select">
                          <option value="*">Alle</option>
                          <option value="1000-2000">1.000 - 2.000</option>
                          <option value="2000-3000">2.000 - 3.000</option>
                          <option value="3000-4000">3.000 - 4.000</option>
                          <option value="4000-5000">4.000 - 5.000</option>
                          <option value="5000+">5000+</option>
                        </select>
                      </td>
                      <td class="table__td">
                        <select v-model="selectedBrand" class="searchFilter__select">
                          <option value="*">Alle</option>
                          <option
                            v-for="brand in brandsForSelectedModel"
                            :key="brand.id"
                            :value="brand.name"
                          >
                            {{ brand.name }} ({{ brand.count }})
                          </option>
                        </select>
                      </td>
                      <td class="table__td">
                        <select v-model="selectedModel" class="searchFilter__select">
                          <option value="*">Alle</option>
                          <option
                            v-for="model in filteredModels"
                            :key="model.id"
                            :value="model.name"
                          >
                            {{ model.name }} ({{ model.count }})
                          </option>
                        </select>
                      </td>
                      <td>
                        <button
                          class="btn--action"
                          type="submit"
                          id="queryCars"
                          @click="queryCars(selectedPrice, selectedBrand, selectedModel)"
                        >
                          Vis biler
                        </button>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
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
  name: "Forside",
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

      const brandCount = {};
      brandFilteredData.forEach((car) => {
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

      return Object.entries(modelCount).map(([name, count]) => ({
        name,
        count,
      }));
    },
  },
};
</script>

<style scoped>
.table__container{


}

.searchFilter__container{

}

.table__tr{

}

.table__td{

}

</style>
