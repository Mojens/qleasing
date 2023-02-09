<template>
    <div class="ct-section-inner-wrap">
        <div v-if="carData">
            <h1>{{ carData.brand + " " + carData.model }}</h1>
            <br>
            <div id="listeAfUdstyr">
                <h2>Udstyr Overblik</h2>
                <ul>
                    <li v-for="item in items" :key="item">{{ item }}</li>
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
            props: {
                items: {
                    type: Array,
                }
            }
        };
    },
    async created() {
        await this.fetchData();
    },
    methods: {
        async fetchData() {
            const READER_API = import.meta.env.VITE_APP_READER_API
            const CARS_URL = import.meta.env.VITE_APP_CARS_URL
            const response = await fetch(CARS_URL, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${READER_API}`
                }
            });
            const data = await response.json();
            this.carData = data.data[0];
            this.items = this.carData.udstyr;
            if(this.items[0] === ""){
                this.items.shift();
            }
        }

    }

};
</script>
