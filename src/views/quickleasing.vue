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
                    {{ brand.name }} ({{ brand.count }})
                    <input type="checkbox" :value="brand.name" :checked="selectedBrands.includes(brand.name)"
                        @click="handleCheckboxClick(brand.name)" />

                </li>
            </ul>
        </div>
        <div>
            <h3>Udstyr</h3>
            <ul>
                <li value="airc">Air Condition
                    <input type="checkbox" />
                </li>
                <li value="fartpilot">Fartpilot
                    <input type="checkbox" />
                </li>
                <li value="bluetooth">Bluetooth
                    <input type="checkbox" />
                </li>
                <li value="sædevarme">Sædevarme
                    <input type="checkbox" />
                </li>
                <li value="varme i rat">Rat-varme
                    <input type="checkbox" />
                </li>
                <li value="parkeringssensor (for)">Parkeringssensor (foran)
                    <input type="checkbox" />
                </li>
                <li value="parkeringssensor (bag)">Parkeringssensor (bag)
                    <input type="checkbox" />
                </li>
                <li value="navigation">Navigation
                    <input type="checkbox" />
                </li>
                <li value="aut.gear/tiptronic">Automatgear
                    <input type="checkbox" />
                </li>
                <li value="Anhængertræk">Anhængertræk
                    <input type="checkbox" />
                </li>
                <li value="4x el-ruder">4 elruder
                    <input type="checkbox" />
                </li>
                <li value="5 personers">5 personers
                    <input type="checkbox" />
                </li>
                <li value="bakkamera">Bakkamera
                    <input type="checkbox" />
                </li>
                <li value="Apple CarPlay">Apple CarPlay
                    <input type="checkbox" />
                </li>
                <li value="Android Auto">Android Auto
                    <input type="checkbox" />
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
            readerAPI: import.meta.env.VITE_APP_READER_API
        };
    },
    async created() {
        await this.fetchData();
    },
    methods: {
        async fetchData() {
            console.log("DEBUG 1: " + this.carData);
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
            console.log("DEBUG 2: " + this.carData);
            let filter = { brand: { _in: [value] } };

            if (this.selectedBrands.includes(value)) {
                this.selectedBrands = this.selectedBrands.filter(brand => brand !== value);
            } else {
                this.selectedBrands.push(value);
            }

            filter = { brand: { _in: this.selectedBrands } };

            this.currentURL = `${this.baseURL}?filter=${encodeURIComponent(JSON.stringify(filter))}`;
            console.log("DEBUG " + this.selectedBrands.length)
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



    },
    computed: {
        uniqueBrands() {
            console.log("DEBUG 3: " + this.carData);
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
