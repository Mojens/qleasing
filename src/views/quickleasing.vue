<template>
    <div class="ct-section-inner-wrap">
        <div v-if="carData">
            <h1 v-for="car in carData" :key="car.id">{{ car.brand }} - {{ car.model }}</h1>
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
            <h3>Model</h3>
            <v-select :options="models" v-model="selectedModel"></v-select>
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
        <br>
        <div>
            <h3>Dæktype</h3>
            <ul>
                <li v-for="tire in tireTypes" :key="tire.value">
                    <input type="checkbox" :value="tire.value" :checked="selectedTireTypes.includes(tire.value)"
                        @click="handleCheckboxClickTireType(tire.value)" />
                    {{ tire.name }} ({{ tire.count }})
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
            queryPrice1: this.$route.query.price1,
            queryPrice2: this.$route.query.price2,
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
            models: [],
            selectedModel: null,
            selectedTireTypes: [],
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
        }
        ,
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
        }, async handleCheckboxClickTireType(value) {
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
        async fetchModels() {
            try {
                const response = await fetch(this.currentURL, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${this.readerAPI}`
                    }
                });
                const data = await response.json();
                const cars = data.data;
                this.models = cars.map(car => car.model);
            } catch (error) {
                console.error(error);
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
