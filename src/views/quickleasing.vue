<template>
    <div class="ct-section-inner-wrap">
        <div v-if="carData">
            <h1 v-for="car in carData" :key="car.id">{{ car.brand }} - {{ car.model }}</h1>
        </div>
        <div>
            <h1>Query Parameters</h1>
            <p>The value of 'param1' is {{ $route.query.brand }}</p>
            <p>The value of 'param2' is {{ $route.query.model }}</p>
            <p>The value of 'param2' is {{ $route.query.price }}</p>
        </div>
        <br>
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
        <br>
        <div id="brandCheckbox">
            <h3>Mærke</h3>
            <ul>
                <li v-for="brand in uniqueBrands" :key="brand">
                    <input type="checkbox" :value="brand.name" :checked="selectedBrands.includes(brand.name)"
                        @click="handleCheckboxClick(brand.name)" />
                    {{ brand.name }} ({{ brand.count }})
                </li>
            </ul>
        </div>
        <br>
        <div>
            <h3>Udstyr</h3>
            <ul>
                <li v-for="item in featureItems" :key="item.value" :data-value="item.value">
                    <input type="checkbox" @click="handleCheckboxClickFeatures(item.value)" />
                    {{ item.name }} ({{ carData.filter(car => car.Udstyr && car.Udstyr.includes(item.value)).length }})
                </li>
            </ul>
        </div>
        <div>
            <h3>Dæktype</h3>
            <ul>
                <li v-for="tire in tireTypes" :key="tire.value" :data-value="tire.value">
                    <input type="checkbox" />
                    {{ tire.name }}
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            name: "QuickLeasing",
            queryBrand: this.$route.query.brand,
            queryModel: this.$route.query.model,
            queryPrice: this.$route.query.price,
            carData: [],
            selectedBrands: [],
            originalData: [],
            baseURL: import.meta.env.VITE_APP_CARS_URL,
            currentURL: import.meta.env.VITE_APP_CARS_URL,
            pictureURL: import.meta.env.VITE_APP_PICTURE_URL,
            readerAPI: import.meta.env.VITE_APP_READER_API,
            checkBoxState: {},
            selectedFeatures: [],
            selectedPrice: '*',
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
    async created() {
        await this.fetchData();
    },
    methods: {
        async fetchData() {
            if (this.queryBrand !== '' && this.queryBrand !== '' && this.queryPrice !== '') {
                console.log('brand', this.queryBrand);
            }
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
        },
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
            if (this.selectedPrice === '*') {
                this.carData = data.data
                return;
            }
            const priceRange1000_2000 = [];
            const priceRange2000_3000 = [];
            const priceRange3000_4000 = [];
            const priceRange4000_5000 = [];
            const priceRange5000_plus = [];
            for (let i = 0; i < allData.length; i++) {
                if (allData[i].base_maanedspris > 999 && allData[i].base_maanedspris <= 2000) {
                    priceRange1000_2000.push(allData[i]);
                } else if (allData[i].base_maanedspris > 1999 && allData[i].base_maanedspris <= 3000) {
                    priceRange2000_3000.push(allData[i]);
                } else if (allData[i].base_maanedspris > 2999 && allData[i].base_maanedspris <= 4000) {
                    priceRange3000_4000.push(allData[i]);
                } else if (allData[i].base_maanedspris > 3999 && allData[i].base_maanedspris <= 5000) {
                    priceRange4000_5000.push(allData[i]);
                } else {
                    priceRange5000_plus.push(allData[i]);
                }
            }
            if (this.selectedPrice === '1000-2000') {
                this.carData = priceRange1000_2000;
            } else if (this.selectedPrice === '2000-3000') {
                this.carData = priceRange2000_3000;
            } else if (this.selectedPrice === '3000-4000') {
                this.carData = priceRange3000_4000;
            } else if (this.selectedPrice === '4000-5000') {
                this.carData = priceRange4000_5000;
            } else {
                this.carData = priceRange5000_plus;
            }
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
        }
    }

};
</script>
