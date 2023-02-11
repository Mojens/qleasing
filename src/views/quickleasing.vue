<template>
    <div class="ct-section-inner-wrap">
        <div v-if="carData">
            <h1 v-for="car in carData" :key="car.id">{{ car.brand }} - {{ car.model }}</h1>
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
                    {{ item.name }}
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
            carData: [],
            selectedBrands: [],
            originalData: [],
            baseURL: import.meta.env.VITE_APP_CARS_URL,
            currentURL: import.meta.env.VITE_APP_CARS_URL,
            readerAPI: import.meta.env.VITE_APP_READER_API,
            checkBoxState: {},
            featureItems: [
                { value: "airc", name: "Air Condition" },
                { value: "fartpilot", name: "Fartpilot" },
                { value: "bluetooth", name: "Bluetooth" },
                { value: "sædevarme", name: "Sædevarme" },
                { value: "varmeirat", name: "Rat-varme" },
                { value: "parkeringssensorfor", name: "Parkeringssensor (foran)" },
                { value: "parkeringssensorbag", name: "Parkeringssensor (bag)" },
                { value: "navigation", name: "Navigation" },
                { value: "autgeartiptronic", name: "Automatgear" },
                { value: "Anhaengertraek", name: "Anhængertræk" },
                { value: "4xelruder", name: "4 elruder" },
                { value: "5personers", name: "5 personers" },
                { value: "bakkamera", name: "Bakkamera" },
                { value: "applecarplay", name: "Apple CarPlay" },
                { value: "androidauto", name: "Android Auto" },
            ]
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
        },
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
            if (!this.checkBoxState[value]) {
                if (this.selectedBrands.length === 0) {
                    this.carData = this.originalData;
                }
                this.carData = allData;
                return;
            }
            

            const filteredCars = [];
            for (let i = 0; i < allData.length; i++) {
                if (allData[i].Udstyr !== null) {
                    console.log("udstyr")
                    console.log(allData[i].Udstyr[0])
                    for (let x = 0; x < allData[i].Udstyr.length; x++) {
                        if (allData[i].Udstyr[x] === value) {
                            filteredCars.push(allData[i]);
                        }
                    }
                }
            }
            this.carData = filteredCars;
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
