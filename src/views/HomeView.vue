<template>
  <div class="ct-section-inner-wrap">
    <h1>QuickLeasing</h1>

    <div>
      <h2>Find din næste bil herunder</h2>
      <table>
        <tr>
          <th>Pris</th>
          <th>Mærke</th>
          <th>Model</th>
        </tr>
        <tr>
          <td>
            <select v-model="selectedPrice">
              <option value="*">Alle</option>
              <option value="1000-2000">1.000 - 2.000</option>
              <option value="2000-3000">2.000 - 3.000</option>
              <option value="3000-4000">3.000 - 4.000</option>
              <option value="4000-5000">4.000 - 5.000</option>
              <option value="5000+">5000+</option>
            </select>
          </td>
          <td>
            <select v-model="selectedBrand">
              <option value="*">Alle</option>
              <option v-for="brand in brandsForSelectedModel" :key="brand.id" :value="brand.name">{{ brand.name }} ({{
                brand.count
              }})</option>
            </select>

          </td>
          <td>
            <select v-model="selectedModel">
              <option value="*">Alle</option>
              <option v-for="model in filteredModels" :key="model.id" :value="model.name">{{ model.name }} ({{
                model.count
              }})</option>
            </select>
          </td>
          <td>
            <button type="submit" id="queryCars" @click="queryCars(selectedPrice, selectedBrand, selectedModel)">Vis
              biler</button>
          </td>
        </tr>
      </table>
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
          Authorization: `Bearer ${this.readerAPI}`
        }
      });
      const data = await response.json();
      this.carData = data.data;
    },
    queryCars(price, brand, model) {
      console.log('Price:', price);
      console.log('Brand:', brand);
      console.log('Model:', model);
    }
  },
  computed: {
    brandsForSelectedModel() {
      const priceFilteredData = this.carData.filter(car => {
        if (this.selectedPrice === "*") {
          return true;
        }
        const [minPrice, maxPrice] = this.selectedPrice.split("-");
        return car.base_maanedspris >= parseInt(minPrice) && car.base_maanedspris <= parseInt(maxPrice);
      });

      const brandFilteredData = priceFilteredData.filter(car => {
        return this.selectedModel === '*' || car.model === this.selectedModel;
      });

      const brandCount = {};
      brandFilteredData.forEach(car => {
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
    uniqueBrands() {
      const priceFilteredData = this.carData.filter(car => {
        if (this.selectedPrice === "*") {
          return true;
        }
        const [minPrice, maxPrice] = this.selectedPrice.split("-");
        return car.base_maanedspris >= parseInt(minPrice) && car.base_maanedspris <= parseInt(maxPrice);
      });

      const brandCount = {};
      priceFilteredData.forEach(car => {
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
    modelForBrand() {
      const brandFilteredData = this.carData.filter(car => {
        return this.selectedBrand === '*' || car.brand === this.selectedBrand;
      });

      const modelCount = {};
      brandFilteredData.forEach(car => {
        if (!modelCount[car.model]) {
          modelCount[car.model] = 1;
        } else {
          modelCount[car.model]++;
        }
      });

      return Object.entries(modelCount).map(([name, count]) => ({
        name,
        count
      }));
    },
    filteredModels() {
      const brandFilteredData = this.carData.filter(car => {
        return this.selectedBrand === '*' || car.brand === this.selectedBrand;
      });

      const priceFilteredData = brandFilteredData.filter(car => {
        if (this.selectedPrice === "*") {
          return true;
        }
        const [minPrice, maxPrice] = this.selectedPrice.split("-");
        return car.base_maanedspris >= parseInt(minPrice) && car.base_maanedspris <= parseInt(maxPrice);
      });

      const modelCount = {};
      priceFilteredData.forEach(car => {
        if (!modelCount[car.model]) {
          modelCount[car.model] = 1;
        } else {
          modelCount[car.model]++;
        }
      });

      return Object.entries(modelCount).map(([name, count]) => ({
        name,
        count
      }));
    }
  }
};
</script>
