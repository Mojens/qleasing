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
        <!-- Test -->
        <div>
            <h3>Udstyr</h3>
            <ul id="udstyrListe">
                <li v-for="item in items" :key="item" :data-value="item.value">
                    <input type="checkbox" />
                    {{ item.label }}
                </li>
            </ul>
        </div>
        <!-- Test -->
        <div>
            <h3>Udstyr</h3>
            <ul id="udstyrListe2">
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
            readerAPI: import.meta.env.VITE_APP_READER_API,
            allCarData: null,
            items: [
                { label: 'Air Condition', value: 'airc.' },
                { label: 'Fartpilot', value: 'fartpilot' },
                { label: 'Bluetooth', value: 'bluetooth' },
                { label: 'Sædevarme', value: 'sædevarme' },
                { label: 'Rat-varme', value: 'varme i rat' },
                { label: 'Parkeringssensor (foran)', value: 'parkeringssensor (for)' },
                { label: 'Parkeringssensor (bag)', value: 'parkeringssensor (bag)' },
                { label: 'Navigation', value: 'navigation' },
                { label: 'Automatgear', value: 'aut.gear/tiptronic' },
                { label: 'Anhængertræk', value: 'Anhængertræk' },
                { label: '4 elruder', value: '4x el-ruder' },
                { label: '5 personers', value: '5 personers' },
                { label: 'Bakkamera', value: 'bakkamera' },
                { label: 'Apple CarPlay', value: 'Apple CarPlay' },
                { label: 'Android Auto', value: 'Android Auto' }
            ]
        };
    },
    async created() {
        await this.fetchData();
    },
    mounted() {
        this.handleCheckboxClickFeatures()
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
        },
        async handleCheckboxClickFeatures() {
            const response = await fetch(import.meta.env.VITE_APP_CARS_URL, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.readerAPI}`
                }
            });
            const data = await response.json();
            const testAllCarData = data.data;
            const udstyrListe = document.querySelector("#udstyrListe");
            const udstyrListeLis = udstyrListe.querySelectorAll("li");
            for (let x = 0; x < testAllCarData.length; x++) {
                if (testAllCarData[x] !== null && testAllCarData[x].udstyr) {
                    let newArray = testAllCarData[x].udstyr;
                    for (const li of udstyrListeLis) {

                        const value = li.getAttribute("data-value");
                        let count = 0;
                        for (let i = 0; i < newArray.length; i++) {
                            if (newArray[i] === value) {
                                console.log("VALUES: " + value);
                                console.log("HTTPVALUES: " + newArray[i]);
                                count++;
                            }
                        }
                        li.innerHTML += ` (${count})`;
                    }
                }
            }

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
