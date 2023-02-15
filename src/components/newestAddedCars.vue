<template>
  <div>
    <h1>Se de biler, der lige er ankommet til Quickleasing</h1>
    <ul>
      <li v-for="car in displayedCars" :key="car.id">
        {{ car.brand }} - {{ car.model }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentURL: import.meta.env.VITE_APP_CARS_URL,
      readerAPI: import.meta.env.VITE_APP_READER_API,
      carData: [],
    };
  },
  async mounted() {
    const response = await fetch(this.currentURL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.readerAPI}`,
      },
    });
    const data = await response.json();
    this.carData = data.data;
    this.carData.sort((a, b) => new Date(b.oprettet_dato) - new Date(a.oprettet_dato));
  },
  computed: {
    displayedCars() {
      // Kun for at vise 8 biler
      return this.carData.slice(0, 8);
    },
  },
};
</script>
