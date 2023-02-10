<template>
    <div class="ct-section-inner-wrap">
        <div v-if="carData">
            <h1>{{ carData.brand + " " + carData.model }}</h1>
            <br>
            <div>
                <h3>Mærke</h3>
                <ul>
                    <li v-for="brand in uniqueBrands" :key="brand">{{ brand }}</li>
                </ul>
            </div>
            <div id="listeAfUdstyr">
                <h2>Udstyr Overblik</h2>
                <ul>
                    <li v-for="item in items" :key="item">{{ item }}
                        <input type="checkbox" :value="item" @click="handleCheckBoxClick(item.value)" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: "QuickLeasing",
            carData: null,
        };
    },
    async created() {
        await this.fetchData();
    },
    methods: {
        async fetchData() {
            const response = await fetch(import.meta.env.VITE_APP_CARS_URL, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_APP_READER_API}`
                }
            });
            const data = await response.json();
            this.carData = data.data;
            this.items = this.carData.udstyr;
        }

    },
    computed: {
        uniqueBrands() {
            return [...new Set(this.carData.map(car => car.brand))]
        }
    }

};
</script>
