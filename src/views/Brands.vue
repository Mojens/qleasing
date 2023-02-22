<script setup>
import FooterItem from "@/components/FooterItem.vue";
import autoAnimate from "@formkit/auto-animate";
import { ref, onMounted } from "vue";
import NavigationBar from "@/components/NavigationBar.vue";

// function to use autoAnimate the library, when submit(function already exists called createForm) is clicked if there are errors
const example = ref();
const example2 = ref();
onMounted(() => {
  example.value.querySelectorAll(".list___1c2KX").forEach(autoAnimate);
  if (example2.value) {
    example2.value.querySelectorAll(".filter__li").forEach(autoAnimate);
  }
});
</script>

<template>
  <NavigationBar />

  <div class="filtered__cars-container" ref="example">


    <div class="main-flow___Sjg41" data-qa="main-flow">


      <div class="products___1WcE3" style="padding-top: 0; padding-left: 1rem">
        <div class="brands__container ">
          <div class="brands__header-container">
            <h1 class="brands-header" style="text-transform: capitalize">
              Billigt udvalg af {{ $route.params.brand }} til privatleasing
            </h1>
          </div>
          <div class="brands__content-container">
            <div class="brands__content pad-header--l">
              <p v-if="$route.params.brand === 'bmw'">
                Ønsker du også at opleve luksus i din hverdag? BMW er for mange forbundet med flot design, høj kvalitet og sporty køreegenskaber. Hos Quickleasing A/S kan du privatlease en brugt BMW og få det hele til en attraktiv pris. Vi kan tilbyde fordelagtige priser på alle vores BMW-modeller, fordi de alle er brugte. Samtidig går vi ikke på kompromis med kvaliteten på vores biler, så du kan få god kvalitet til en fornuftig pris, når du privatleaser en BMW hos os.
                <br> <br>
                Uanset om du har erfaring med privatleasing eller ej, bør du helt sikkert overveje privatleasing, hvis du er på udkig efter en brugt BMW. Privatleasing er nemlig slet ikke så kompliceret, som mange måske tror. En leasingaftale er faktisk ganske simpel at forstå, og vi er altid klar til at guide dig gennem hele leasing-processen. Du kan udforske vores forskellige BMW-modeller nedenfor.
              </p>
              <p v-else-if="$route.params.brand === 'citroen'">
                Som en af de store og anerkendte spillere på det globale bilmarked har Citroën mere end 100 års erfaring bag sig, siden André Citroën grundlagde bilfabrikken i Frankrig tilbage i 1919. Hos QuickLeasing A/S kan vi tilbyde de bedste priser og vilkår for privatleasing af Citroën. Som eksperter i privatleasing af brugte biler har vi et omfattende udvalg af forskellige Citroën-modeller til attraktive priser.
                <br> <br>
                Vi går dog ikke på kompromis med kvaliteten af vores biler, da vi nøje udvælger hver enkelt leasingbil. Vores Citroën-modeller, ligesom vores øvrige udvalg af leasingbiler, er enten fabriksnye modeller, der netop er returneret efter endt leasing, eller indkøbt fra udenlandske leasingselskaber. Kort sagt, selvom du kan opnå store besparelser ved at privatlease en brugt Citroën, så går vi ikke på kompromis med kvaliteten eller køreglæden.
              </p>
            </div>
          </div>
        </div>

        <div class="list___1c2KX">

          <div class="product___3vmta" v-for="car in carData" :key="car.id">
            <RouterLink :to="`/quickleasing/${car.id}`" style="color: inherit">

              <div class="product-card___2naPO has-cta___1N-4L">

                <div class="label-wrap___2_2TG">
                  <div class="label___xUzK4 label___IKlVk black___2xtI_">
                    fra {{ car.base_udbetaling }} kr i udbetaling
                  </div>

                  <!-- Label som kommer fra bil, hvis der er nogle -->
                  <div
                    v-if="car.billedeLabel !== null"
                    class="label___xUzK4 label___IKlVk"
                    :style="{
                      backgroundColor: car.label_farve,
                      color: car.label_text_farve,
                    }"
                  >
                    {{ car.billedeLabel }}
                  </div>
                </div>
                <div class="image-wrapper___2BJkg main-image___2PNg2">
                  <img
                    class="image___3UcXF"
                    :src="thumbnail[car.id]"
                    :alt="`${car.brand} - ${car.model}`"
                    :title="`${car.brand} - ${car.model}`"
                  />
                </div>
                <div class="content___2i8ss">
                  <div class="title___3jeSd">
                    <div class="name___3OMhd">
                      {{ car.brand }} - {{ car.model }}
                    </div>
                    <div class="price___1hgWK">
                      Abonnement fra<span class="value___3qMAh">{{
                        car.base_maanedspris
                      }}</span
                    >kr./md.
                    </div>
                  </div>
                  <div
                    class="technical-details___2buqo technical-details___2vodE"
                  >
                    <div class="details-group___19Kyu">
                      <div
                        class="detail___22pEp detail___3AT8g capitalize___o-pqq small-size___1i0G0"
                      >
                        <svg
                          class="icon___2OPTw"
                          width="40px"
                          height="40px"
                          viewBox="0 0 40 40"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            transform="translate(4.000000, 4.000000)"
                            stroke="#444444"
                            stroke-width="2"
                            fill="none"
                          >
                            <circle
                              id="Oval"
                              cx="16.5"
                              cy="16.5"
                              r="16.5"
                            ></circle>
                            <line x1="10" y1="8.5" x2="10" y2="24.5"></line>
                            <line x1="17" y1="8.5" x2="17" y2="24.5"></line>
                            <line x1="24" y1="8.5" x2="24" y2="16.5"></line>
                            <line x1="10.5" y1="17" x2="23.5" y2="17"></line>
                          </g>
                        </svg>
                        <div class="title___3rl0o">{{ car.gear_type }}</div>
                      </div>
                      <div
                        class="detail___22pEp detail___3AT8g small-size___1i0G0"
                      >
                        <svg
                          class="icon___2OPTw"
                          width="40px"
                          height="40px"
                          viewBox="0 0 40 40"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            transform="translate(6.000000, 6.000000)"
                            stroke="#444444"
                            stroke-width="2"
                            fill="none"
                          >
                            <path
                              d="M7.00032,8.4 C12.9003,2.5 28.0003,0 28.0003,0 C28.0003,0 26.0003,14.6 19.6003,21 C12.7003,27.9 4.70032,23.3 4.70032,23.3 C4.70032,23.3 0.00032,15.4 7.00032,8.4 Z"
                            ></path>
                            <line x1="15" y1="13" x2="0" y2="28"></line>
                          </g>
                        </svg>
                        <div class="title___3rl0o">
                          <div class="emissions___3B8H6">
                            <span>CO<sub>2</sub></span
                            >&nbsp;{{ car.co2 }} g/km
                            <div
                              class="energy-class___BHiLA energy-class___3KEQh"
                            >
                              <span style="background-color: rgb(190, 214, 47)"
                              >A<sup>+</sup></span
                              ><span
                              class="arrow-right___1p9wE"
                              style="border-left-color: rgb(190, 214, 47)"
                            ></span>
                              <div class="shadow___2ZdD4">
                                <span></span
                                ><span class="arrow-right___1p9wE"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="details-group___19Kyu">
                      <div
                        class="detail___22pEp detail___3AT8g capitalize___o-pqq small-size___1i0G0"
                      >
                        <svg
                          class="icon___2OPTw"
                          width="40px"
                          height="40px"
                          viewBox="0 0 40 40"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            fill="none"
                            transform="translate(6.000000, 3.000000)"
                          >
                            <path
                              d="M22,34 L0,34 L0,3.43077895 C0,1.53841053 1.53894737,0.000357894737 3.43042105,0.000357894737 L18.5686842,0.0695789474 C20.4601579,0.0695789474 22,1.60763158 22,3.5 L22,34 Z"
                              stroke="#444444"
                              stroke-width="2"
                            ></path>
                            <polygon
                              stroke="#444444"
                              stroke-width="2"
                              points="4 18 18 18 18 5 4 5"
                            ></polygon>
                            <path
                              d="M25,3 L29,9 L29,29 C29,30.1045695 28.1045695,31 27,31 C25.8954305,31 25,30.1045695 25,29 L25,22 C25,20.8954305 24.1045695,20 23,20 L22,20 L22,20"
                              stroke="#444444"
                              stroke-width="2"
                            ></path>
                            <path
                              d="M29.5,11 L25.5938579,3.62583158 L25.7211053,8.722 C25.7211053,9.98 26.742,11 28,11 L29.5,11 Z"
                              fill="#444444"
                            ></path>
                          </g>
                        </svg>
                        <div class="title___3rl0o">{{ car.braendstof }}</div>
                      </div>
                      <div
                        class="detail___22pEp detail___3AT8g small-size___1i0G0"
                      >
                        <svg
                          class="icon___2OPTw"
                          width="40px"
                          height="40px"
                          viewBox="0 0 40 40"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            transform="translate(1.000000, 6.000000)"
                            fill="none"
                          >
                            <line
                              x1="6"
                              y1="28"
                              x2="15"
                              y2="0"
                              stroke="#444444"
                              stroke-width="2"
                            ></line>
                            <line
                              x1="27"
                              y1="0"
                              x2="36"
                              y2="28"
                              stroke="#444444"
                              stroke-width="2"
                            ></line>
                            <line
                              x1="21"
                              y1="3"
                              x2="21"
                              y2="6"
                              stroke="#444444"
                              stroke-width="2"
                            ></line>
                            <line
                              x1="21"
                              y1="11"
                              x2="21"
                              y2="15"
                              stroke="#444444"
                              stroke-width="2"
                            ></line>
                            <line
                              x1="21"
                              y1="20"
                              x2="21"
                              y2="25"
                              stroke="#444444"
                              stroke-width="2"
                            ></line>
                            <path
                              d="M4,10.1992 C5.8125,10.1992 7.75,8.9169 7.75,6.70209 C7.75,4.66209 4,0.87354 4,0.87354 C4,0.87354 0.25,4.66209 0.25,6.70209 C0.25,8.9169 2.1875,10.1992 4,10.1992 Z"
                              fill="#444444"
                            ></path>
                          </g>
                        </svg>
                        <div class="title___3rl0o">
                          {{ car.kilometerprliter }} km/l
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="highlighted-features___34JSO">
                    <span class="highlighted-feature___2Z8Zj">{{
                        getFeatures(car)
                      }}</span>
                  </div>
                  <RouterLink :to="`/quickleasing/${car.id}`">
                    <button
                      class="button___2oWcS default___31nVJ cta-button___2wq8T outlined___F3j36 rounded-corners___2DuU9 small___3BQ-q"
                    >
                      Vælg bil
                    </button>
                  </RouterLink>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="brands__container pad-header--l">
          <div class="brands__header-container">
            <h2 v-if="$route.params.brand === 'bmw'" class="brands-header" style="text-transform: capitalize">
              Lease en brugt BMW og oplev luksus og køreglæde
            </h2>
            <h2 v-else-if="$route.params.brand === 'citroen'" class="brands-header" style="text-transform: capitalize">
              Nem, billig og enkel privatleasing af Citroën
            </h2>
          </div>
          <div class="brands__content-container">
            <div class="brands__content pad-header--l">
              <p v-if="$route.params.brand === 'bmw'">
                For mange bilentusiaster er BMW synonymt med luksus og kvalitet, men også et bilmærke, der ligger uden for de flestes bilbudget. Men ved at privatlease en brugt BMW kan du spare en betydelig mængde penge, da både førstegangsydelsen og den månedlige ydelse er væsentligt lavere end på nye biler.
                <br> <br>
                Hos Quickleasing A/S kan du privatlease en brugt BMW og få det hele til en attraktiv pris. Vi kan tilbyde fordelagtige priser på alle vores BMW-modeller, fordi de alle er brugte. Samtidig går vi ikke på kompromis med kvaliteten på vores biler, så du kan få god kvalitet til en fornuftig pris.
              </p>
              <p v-else-if="$route.params.brand === 'citroen'">
                Mange tror fejlagtigt, at leasing er kompliceret og svært at forstå. Men i virkeligheden er privatleasing af en Citroën ganske enkelt og gennemskueligt. I bund og grund handler privatleasing om at leje en bil i en afgrænset periode. Ved leasingperiodens start betales en førstegangsydelse, og derefter betaler du en fast månedlig ydelse for din privatleasede Citroën i resten af leasingperioden. Den månedlige ydelse fremgår af din leasingaftale og afhænger af den specifikke Citroën-model, du vælger at lease.
                <br> <br>
                Udover førstegangsydelsen og den månedlige ydelse er der ingen andre udgifter forbundet med privatleasing (udover selvfølgelig forsikring, brændstof, afgifter osv.). Med en leasingaftale hos Quickleasing A/S er service og reparation inkluderet, så du ikke behøver bekymre dig om store, uventede regninger i løbet af leasingperioden.
              </p>
            </div>
          </div>
          <div class="brands__header-container">
            <h2 class="brands-header" style="text-transform: capitalize">
              Privatleasing af brugt {{ $route.params.brand }}
            </h2>
          </div>
          <div class="brands__content-container">
            <div class="brands__content pad-header--l">
              <p >
                En af de store fordele ved at privatlease en BMW er det økonomiske overblik og tryghed, som du får med leasingaftalen. Alle omkostninger forbundet med leasingbilen er inkluderet i leasingaftalen, og derfor har du et fuldt overblik over alle udgifter fra starten.
                <br> <br>
                Service og reparation er også inkluderet i din leasingaftale hos Quickleasing A/S, så du undgår uforudsete regninger i løbet af din leasingperiode.
              </p>
            </div>
          </div>
          <div class="brands__header-container">
            <h2 class="brands-header" style="text-transform: capitalize">
              Privatleasing af {{ $route.params.brand }} hos Quickleasing A/S
            </h2>
          </div>
          <div class="brands__content-container">
            <div class="brands__content pad-header--l">
              <p >
                Hvis du allerede har fundet en {{$route.params.brand}} i vores sortiment, som du gerne vil privatlease, kan du blot klikke på en bestemt bil og derefter udfylde formularen for den bestemte {{$route.params.brand}}-model, og vi vil herefter kontakte dig.
                <br><br>
                Uanset om du har erfaring med privatleasing eller ej, bør du helt sikkert overveje privatleasing, hvis du er på udkig efter en brugt {{$route.params.brand}}. Privatleasing er <router-link :to="{ path: '/nem-leasing' }">nemlig slet ikke så kompliceret, som mange måske tror</router-link>. En leasingaftale er faktisk ganske simpel at forstå, og vi er altid klar til at guide dig gennem hele leasing-processen.
              </p>
            </div>
          </div>
          <div class="brands__header-container">
            <h2 class="brands-header" style="text-transform: capitalize">
              Vil du vide mere om privatleasing af en {{ $route.params.brand }} hos Quickleasing A/S?
            </h2>
          </div>
          <div class="brands__content-container">
            <div class="brands__content pad-header--l">
              <p >
                Vi står altid klar til at give dig rådgivning om privatleasing. Hvis du har generelle spørgsmål om vores privatleasingprocedure, er du velkommen til at ringe til os på <a href="tlf:89885080">tlf. 89 88 50 80</a> i hverdage mellem kl. 9.00 og 16.00.
                <br> <br>
                Hvis du har spørgsmål om en bestemt {{ $route.params.brand }}-model i vores udvalg, eller bare generelt, kan du i stedet udfylde vores <RouterLink to="/kontakt">kontaktformular</RouterLink>, og vi vil kontakte dig hurtigst muligt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- START NEW FILTER -->
    <div class="filter__toggle-button" v-if="isMobile" @click="toggleFilter()">
      <button  class="button-primary--filter" :class="{'button-primary--filter-apply': showFilter}" style="display: flex; align-items: center;width: 100vw;justify-content: center">
        <img src="../assets/images/filter_filters_funnel_list_navigation_sort_sorting_icon_123212.svg"  style="width: 30px; margin-right: 10px;" alt="">
        <span v-if="showFilter" >Færdig</span>
        <span v-else>Filter</span>
      </button>
    </div>
    <div v-if="showFilter" class="filter__container-mobile"  :class="{show: isMobile && showFilter}" >
      <div class="filter__inner-wrapper" >
        <button class="filter__close-button" @click="toggleFilter()">
          <svg
            class="filter__close-icon"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g
              transform="translate(1.000000, 1.000000)"
              stroke="#444444"
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
            >
              <line x1="22" y1="22" x2="0" y2="0"></line>
              <line x1="22" y1="0" x2="0" y2="22"></line>
            </g>
          </svg>
        </button>

        <div class="filter__brand" id="brandCheckbox" style="padding-top: 1rem">
          <h3 class="filter__header pad-header--xs">Mærke</h3>
          <ul class="filter__ul-horizontal list--none" style="list-style: none">
            <li class="filter__li" v-for="brand in uniqueBrands" :key="brand">
              <label class="container">
                <input
                  class="filter__checkbox checkbox"
                  type="checkbox"
                  :id="brand.name"
                  :value="brand.name"
                  :checked="selectedBrands.includes(brand.name)"
                  @click="handleCheckboxClick(brand.name)"
                />
                {{ brand.name }} ({{ brand.count }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>

        <div class="filter__model">
          <h3 class="filter__header pad-header--xs" style="padding-top: 1rem">
            Model
          </h3>
          <select
            class="filter__select"
            v-model="selectedModel"
            @change="modelChange()"
          >
            <option class="filter__option-all" value="*">Alle modeller</option>
            <option
              class="filter__option"
              v-for="option in modelOptions"
              :value="option"
            >
              {{ option.label }}
            </option>
          </select>
        </div>

        <div class="filter__price" id="filterPrice" >
          <h3
            class="filter__header"
            style="padding-bottom: 3.5rem; padding-top: 1.5rem"
          >
            Pris pr.md.
          </h3>
          <Slider
            v-model="priceRange.value"
            :min="priceRange.savedValue[0]"
            :max="priceRange.savedValue[1]"
            :step="500"
            :tooltips="true"
            :range="true"
            :format="(value) => `${value} kr.`"
            @change="priceChange"
            style="padding: 0 1rem"
          ></Slider>
        </div>

        <div class="filter__price" id="filterPrice" style="width: 100%">
          <h3
            class="filter__header"
            style="padding-bottom: 3.5rem; padding-top: 1.5rem"
          >
            Førstegangsydelse
          </h3>
          <Slider
            v-model="oneTimePriceRange.value"
            :min="oneTimePriceRange.savedValue[0]"
            :max="oneTimePriceRange.savedValue[1]"
            :step="500"
            :tooltips="true"
            :range="true"
            :format="(value) => `${value} kr.`"
            @change="oneTimePriceChange"
            style="padding: 0 1rem"
          ></Slider>
        </div>

        <div class="filter__tire">
          <h3 class="filter__header pad-header--xs" style="padding-top: 2rem">
            Gear Type
          </h3>
          <ul class="filter__ul-horizontal">
            <li class="filter__li" v-for="gear in gearTypes" :key="gear.value">
              <label class="container">
                <input
                  class="filter__checkbox"
                  type="checkbox"
                  :value="gear.value"
                  :checked="selectedGearTypes.includes(gear.value)"
                  @click="handleCheckboxClickGearType(gear.value)"
                />
                {{ gear.name }} ({{ gear.count }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>
        <div class="filter__tire">
          <h3 class="filter__header pad-header--xs">Brændstof</h3>
          <ul class="filter__ul-horizontal">
            <li class="filter__li" v-for="fuel in fuelTypes" :key="fuel.value">
              <label class="container">
                <input
                  class="filter__checkbox"
                  type="checkbox"
                  :value="fuel.value"
                  :checked="selectedFuelTypes.includes(fuel.value)"
                  @click="handleCheckboxClickFuelType(fuel.value)"
                />
                {{ fuel.name }} ({{ fuel.count }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>

        <div class="filter__features">
          <h3 class="filter__header pad-header--xs">Udstyr</h3>
          <ul class="filter__ul-horizontal">
            <li
              class="filter__li"
              v-for="item in featureItems"
              :key="item.value"
              :data-value="item.value"
            >
              <label
                class="container"
                v-if="
                  carData.filter(
                    (car) => car.Udstyr && car.Udstyr.includes(item.value)
                  ).length > 0
                "
              >
                <input
                  class="filter__checkbox"
                  type="checkbox"
                  @click="handleCheckboxClickFeatures(item.value)"
                />
                {{ item.name }} ({{
                  carData.filter(
                    (car) => car.Udstyr && car.Udstyr.includes(item.value)
                  ).length
                }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>

        <div class="filter__tire">
          <h3 class="filter__header pad-header--xs">Dæktype</h3>
          <ul class="filter__ul-horizontal">
            <li class="filter__li" v-for="tire in tireTypes" :key="tire.value">
              <label class="container">
                <input
                  class="filter__checkbox"
                  type="checkbox"
                  :value="tire.value"
                  :checked="selectedTireTypes.includes(tire.value)"
                  @click="handleCheckboxClickTireType(tire.value)"
                />
                {{ tire.name }} ({{ tire.count }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>
        <div class="filter__tire">
          <h3 class="filter__header pad-header--xs">Bil type</h3>
          <ul class="filter__ul-horizontal">
            <li
              class="filter__li"
              v-for="carType in carTypes"
              :key="carType.value"
            >
              <label class="container">
                <input
                  class="filter__checkbox"
                  type="checkbox"
                  :value="tire.value"
                  :checked="selectedCarTypes.includes(carType.value)"
                  @click="handleCheckboxClickCarType(carType.value)"
                />
                {{ carType.name }} ({{ carType.count }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>
      </div >
    </div>
    <div v-else-if="!isMobile" class="filter__container" ref="example2"  >
      <div class="filter__inner-wrapper" >
        <div class="filter__brand" id="brandCheckbox">
          <h3 class="filter__header pad-header--xs">Mærke</h3>
          <ul class="filter__ul-horizontal list--none" style="list-style: none">
            <li class="filter__li" v-for="brand in uniqueBrands" :key="brand">
              <label class="container">
                <input
                  class="filter__checkbox checkbox"
                  type="checkbox"
                  :value="brand.name"
                  :checked="selectedBrands.includes(brand.name)"
                  @click="handleCheckboxClick(brand.name)"
                />
                {{ brand.name }} ({{ brand.count }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>

        <div class="filter__model">
          <h3 class="filter__header pad-header--xs" style="padding-top: 1rem">
            Model
          </h3>
          <select
            class="filter__select"
            v-model="selectedModel"
            @change="modelChange()"
          >
            <option class="filter__option-all" value="*">Alle modeller</option>
            <option
              class="filter__option"
              v-for="option in modelOptions"
              :value="option"
            >
              {{ option.label }}
            </option>
          </select>
        </div>

        <div class="filter__price" id="filterPrice" style="width: 100%">
          <h3
            class="filter__header"
            style="padding-bottom: 3.5rem; padding-top: 1.5rem"
          >
            Pris pr.md.
          </h3>
          <Slider
            v-model="priceRange.value"
            :min="priceRange.savedValue[0]"
            :max="priceRange.savedValue[1]"
            :step="500"
            :tooltips="true"
            :range="true"
            :format="(value) => `${value} kr.`"
            @change="priceChange"
          ></Slider>
        </div>

        <div class="filter__price" id="filterPrice" style="width: 100%">
          <h3
            class="filter__header"
            style="padding-bottom: 3.5rem; padding-top: 1.5rem"
          >
            Førstegangsydelse
          </h3>
          <Slider
            v-model="oneTimePriceRange.value"
            :min="oneTimePriceRange.savedValue[0]"
            :max="oneTimePriceRange.savedValue[1]"
            :step="500"
            :tooltips="true"
            :range="true"
            :format="(value) => `${value} kr.`"
            @change="oneTimePriceChange"
          ></Slider>
        </div>

        <div class="filter__tire">
          <h3 class="filter__header pad-header--xs" style="padding-top: 2rem">
            Gear Type
          </h3>
          <ul class="filter__ul-horizontal">
            <li class="filter__li" v-for="gear in gearTypes" :key="gear.value">
              <label class="container">
                <input
                  class="filter__checkbox"
                  type="checkbox"
                  :value="gear.value"
                  :checked="selectedGearTypes.includes(gear.value)"
                  @click="handleCheckboxClickGearType(gear.value)"
                />
                {{ gear.name }} ({{ gear.count }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>
        <div class="filter__tire">
          <h3 class="filter__header pad-header--xs">Brændstof</h3>
          <ul class="filter__ul-horizontal">
            <li class="filter__li" v-for="fuel in fuelTypes" :key="fuel.value">
              <label class="container">
                <input
                  class="filter__checkbox"
                  type="checkbox"
                  :value="fuel.value"
                  :checked="selectedFuelTypes.includes(fuel.value)"
                  @click="handleCheckboxClickFuelType(fuel.value)"
                />
                {{ fuel.name }} ({{ fuel.count }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>

        <div class="filter__features">
          <h3 class="filter__header pad-header--xs">Udstyr</h3>
          <ul class="filter__ul-horizontal">
            <li
              class="filter__li"
              v-for="item in featureItems"
              :key="item.value"
              :data-value="item.value"
            >
              <label
                class="container"
                v-if="
                  carData.filter(
                    (car) => car.Udstyr && car.Udstyr.includes(item.value)
                  ).length > 0
                "
              >
                <input
                  class="filter__checkbox"
                  type="checkbox"
                  @click="handleCheckboxClickFeatures(item.value)"
                />
                {{ item.name }} ({{
                  carData.filter(
                    (car) => car.Udstyr && car.Udstyr.includes(item.value)
                  ).length
                }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>

        <div class="filter__tire">
          <h3 class="filter__header pad-header--xs">Dæktype</h3>
          <ul class="filter__ul-horizontal">
            <li class="filter__li" v-for="tire in tireTypes" :key="tire.value">
              <label class="container">
                <input
                  class="filter__checkbox"
                  type="checkbox"
                  :value="tire.value"
                  :checked="selectedTireTypes.includes(tire.value)"
                  @click="handleCheckboxClickTireType(tire.value)"
                />
                {{ tire.name }} ({{ tire.count }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>
        <div class="filter__tire">
          <h3 class="filter__header pad-header--xs">Bil type</h3>
          <ul class="filter__ul-horizontal">
            <li
              class="filter__li"
              v-for="carType in carTypes"
              :key="carType.value"
            >
              <label class="container">
                <input
                  class="filter__checkbox"
                  type="checkbox"
                  :value="tire.value"
                  :checked="selectedCarTypes.includes(carType.value)"
                  @click="handleCheckboxClickCarType(carType.value)"
                />
                {{ carType.name }} ({{ carType.count }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>
      </div >
    </div>
  </div>
  <FooterItem />
</template>

<script>
import Slider from "@vueform/slider";

export default {
  components: {
    Slider,
  },
  data() {
    return {

      name: "QuickLeasing",
      priceRange: {
        value: [],
        savedValue: [],
      },
      oneTimePriceRange: {
        value: [],
        savedValue: [],
      },
      queryBrand: this.$route.query.brand,
      queryModel: this.$route.query.model,
      queryPrice1: this.$route.query.price1,
      queryPrice2: this.$route.query.price2,
      carImages: {},
      thumbnail: {},
      carData: [],
      selectedBrands: [],
      originalData: [],
      baseURL: import.meta.env.VITE_APP_CARS_URL,
      currentURL: import.meta.env.VITE_APP_CARS_URL,
      pictureURL: import.meta.env.VITE_APP_PICTURE_URL,
      fileURL: import.meta.env.VITE_APP_FILE_ID_URL,
      readerAPI: import.meta.env.VITE_APP_READER_API,
      checkBoxState: {},
      selectedFeatures: [],
      selectedPrice: "*",
      udstyr: [],
      models: [],
      carTypes: [],
      gearTypes: [
        { value: "automatgear", name: "Automatgear", count: 0 },
        { value: "manuelgear", name: "Manuelgear", count: 0 },
      ],
      fuelTypes: [
        { value: "benzin", name: "Benzin", count: 0 },
        { value: "diesel", name: "Diesel", count: 0 },
        { value: "pluginhybrid", name: "Plug-in Hybrid", count: 0 },
      ],
      selectedModel: "",
      selectedTireTypes: [],
      selectedCarTypes: [],
      selectedGearTypes: [],
      selectedFuelTypes: [],
      featureItems: [
        { value: "fartpilot", name: "Fartpilot", count: 0 },
        { value: "bluetooth", name: "Bluetooth", count: 0 },
        { value: "sædevarme", name: "Sædevarme", count: 0 },
        { value: "varmeirat", name: "Ratvarme", count: 0 },
        {
          value: "parkeringssensorfor",
          name: "P-sensor(for)",
          count: 0,
        },
        {
          value: "parkeringssensorbag",
          name: "P-sensor(bag)",
          count: 0,
        },
        { value: "Anhaengertraek", name: "Anhængertræk", count: 0 },
        { value: "bakkamera", name: "Bakkamera", count: 0 },
        { value: "applecarplay", name: "Apple CarPlay", count: 0 },
      ],
      tireTypes: [
        { value: "sommerdaek", name: "Sommerdæk", count: 0 },
        { value: "vinterdaek", name: "Vinterdæk", count: 0 },
        { value: "helaarsdaek", name: "Helårsdæk", count: 0 },
      ],
      showFilter: false,
      isMobile: false,

    };
  },
  mounted() {

    this.fetchModels();
  },
  async created() {
    await this.fetchData();
    await this.fetchData2();
    const brand = this.$route.params.brand;
    this.carData = this.originalData.filter(car => car.brand.toLowerCase() === brand.toLowerCase());
    (await this.updateTireTypeCounts()) == this.updateTireTypeCounts.bind(this);
    (await this.updateGearTypeCounts()) == this.updateGearTypeCounts.bind(this);
    (await this.updateFuelTypeCounts()) == this.updateFuelTypeCounts.bind(this);
    this.fetchModels();

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
      this.originalData = data.data;
      this.carData.forEach((car) => {
        this.carImages[car.id] = this.imageURL(car);
      });
      this.carData.forEach((car) => {
        this.thumbnail[car.id] = this.thumbNailURL(car);
      });

      // måned pris

      // Laveste pris
      const lowestPriceRange = data.data.reduce((lowest, car) => {
        const baseMaaenedspris = car.base_maanedspris ?? 0;
        if (baseMaaenedspris < lowest) {
          return baseMaaenedspris;
        } else {
          return lowest;
        }
      }, data.data[0].base_maanedspris);

      const highestPriceRange = data.data.reduce((highest, car) => {
        const baseMaaenedspris = car.base_maanedspris ?? 0;
        if (baseMaaenedspris > highest) {
          return baseMaaenedspris;
        } else {
          return highest;
        }
      }, data.data[0].base_maanedspris);

      this.priceRange.value = [lowestPriceRange, highestPriceRange];
      this.priceRange.savedValue = [lowestPriceRange, highestPriceRange];
      console.log("called 1");
      console.log(data);

      // førstegangsydelse
      const lowestOneTimePriceRange = data.data.reduce((lowest, car) => {
        const baseUdbetaling = car.base_udbetaling ?? 0;
        if (baseUdbetaling < lowest) {
          return baseUdbetaling;
        } else {
          return lowest;
        }
      }, data.data[0].base_udbetaling);

      const highestOneTimePriceRange = data.data.reduce((highest, car) => {
        const baseUdbetaling = car.base_udbetaling ?? 0;
        if (baseUdbetaling > highest) {
          return baseUdbetaling;
        } else {
          return highest;
        }
      }, data.data[0].base_udbetaling);

      this.oneTimePriceRange.value = [
        lowestOneTimePriceRange,
        highestOneTimePriceRange,
      ];
      this.oneTimePriceRange.savedValue = [
        lowestOneTimePriceRange,
        highestOneTimePriceRange,
      ];
      console.log("called 2");
    },
    getFeatures(car) {
      if (!car.Udstyr) {
        return "Ingen udstyr";
      }

      const featureNames = car.Udstyr.map((feature) => {
        const matchingFeature = this.featureItems.find(
          (item) => item.value === feature
        );
        return matchingFeature ? matchingFeature.name : null;
      }).filter(Boolean);

      const featuresToShow = featureNames.slice(0, 3);

      if (featuresToShow.length > 0) {
        return "Kommer bl.a. med " + featuresToShow.join(", ");
      } else {
        return "Ingen udstyr";
      }
    },
    async thumbNailURL(car) {
      const response = await fetch(this.currentURL + car.id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`,
        },
      });
      const data = await response.json();

      if (data.data.thumbnail !== null) {
        this.thumbnail[car.id] =
          this.pictureURL +
          data.data.thumbnail +
          "?fit=cover&width=300&height=200&quality=80";
        return (this.thumbnail[car.id] =
          this.pictureURL +
          data.data.thumbnail +
          "?fit=cover&width=300&height=200&quality=80");
      } else
        return (this.thumbnail[
          car.id
          ] = `${this.pictureURL}7bb1ea40-d2c8-45c9-ba61-ce460f2a0830?fit=cover&width=300&height=200&quality=80`);
    },
    async imageURL(car) {
      let imageURLTOADD = `?filter[cars_id][_eq]=${car.id}`;
      const response = await fetch(this.fileURL + imageURLTOADD, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`,
        },
      });
      const data = await response.json();
      if (data.data.length === 0) {
        // Hvis der ikke er et billede, så sæt et placeholder billede
        return (this.carImages[
          car.id
          ] = `${this.pictureURL}7bb1ea40-d2c8-45c9-ba61-ce460f2a0830?fit=cover&width=300&height=200&quality=80`);
      } else {
        this.carImages[car.id] =
          this.pictureURL +
          data.data[0].directus_files_id +
          "?fit=cover&width=300&height=200&quality=80";
        return (
          this.pictureURL +
          data.data[0].directus_files_id +
          "?fit=cover&width=300&height=200&quality=80"
        );
      }
    },
    async fetchData2() {
      if (
        this.queryBrand !== undefined ||
        this.queryModel !== undefined ||
        (this.queryPrice1 !== undefined && this.queryPrice2 !== undefined)
      ) {
        const priceRange = {
          min:
            this.queryPrice1 !== "*"
              ? Number(this.queryPrice1)
              : Number.NEGATIVE_INFINITY,
          max:
            this.queryPrice2 !== "*"
              ? Number(this.queryPrice2)
              : Number.POSITIVE_INFINITY,
        };
        if (this.queryBrand === "*" && this.queryModel === "*") {
          // filter by price range only
          this.carData = this.originalData.filter(
            (car) =>
              car.base_maanedspris >= priceRange.min &&
              car.base_maanedspris <= priceRange.max
          );
        } else if (this.queryBrand === "*" && this.queryModel !== "*") {
          // filter by model and price range
          this.carData = this.originalData.filter(
            (car) =>
              car.model === this.queryModel &&
              car.base_maanedspris >= priceRange.min &&
              car.base_maanedspris <= priceRange.max
          );
        } else if (this.queryBrand !== "*" && this.queryModel === "*") {
          // filter by brand and price range
          this.carData = this.originalData.filter(
            (car) =>
              car.brand === this.queryBrand &&
              car.base_maanedspris >= priceRange.min &&
              car.base_maanedspris <= priceRange.max
          );
        } else if (this.queryBrand !== "*" && this.queryModel !== "*") {
          // filter by brand, model, and price range
          this.carData = this.originalData.filter(
            (car) =>
              car.brand === this.queryBrand &&
              car.model === this.queryModel &&
              car.base_maanedspris >= priceRange.min &&
              car.base_maanedspris <= priceRange.max
          );
        } else {
          // no filters, use original data
          this.carData = this.originalData;
        }
      } else {
        this.carData = this.originalData;
      }
    },
    async handleCheckboxClick(value) {
      let filter = { brand: { _in: [value] } };

      if (this.selectedBrands.includes(value)) {
        this.selectedBrands = this.selectedBrands.filter(
          (brand) => brand !== value
        );
      } else {
        this.selectedBrands.push(value);
      }
      filter = { brand: { _in: this.selectedBrands } };

      this.currentURL = `${this.baseURL}?filter=${encodeURIComponent(
        JSON.stringify(filter)
      )}`;

      if (this.selectedBrands.length === 0) {
        this.currentURL = this.baseURL;
      }
      const checkboxResponse = await fetch(this.currentURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`,
        },
      });
      const data = await checkboxResponse.json();
      this.carData = data.data;
    },

    async handleCheckboxClickFeatures(value) {
      const response = await fetch(this.currentURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`,
        },
      });
      const data = await response.json();
      const allData = data.data;

      this.checkBoxState[value] = !this.checkBoxState[value];

      if (this.checkBoxState[value]) {
        this.selectedFeatures.push(value);
      } else {
        this.selectedFeatures = this.selectedFeatures.filter(
          (f) => f !== value
        );
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
    },
    async updateFeatureCounts(cars) {
      cars.forEach((car) => {
        if (car.Udstyr !== null) {
          car.Udstyr.forEach((feature) => {
            const foundFeature = this.featureItems.find(
              (item) => item.value === feature
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
          Authorization: `Bearer ${this.readerAPI}`,
        },
      });
      const data = await response.json();
      const allData = data.data;

      if (
        this.priceRange.value[0] === this.priceRange.savedValue[0] &&
        this.priceRange.value[1] === this.priceRange.savedValue[1]
      ) {
        this.carData = allData;
        return;
      }

      const priceRange = allData.filter(
        (car) =>
          car.base_maanedspris >= this.priceRange.value[0] &&
          car.base_maanedspris <= this.priceRange.value[1]
      );

      this.carData = priceRange;
    },
    async oneTimePriceChange() {
      const response = await fetch(this.currentURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`,
        },
      });
      const data = await response.json();
      const allData = data.data;

      if (
        this.oneTimePriceRange.value[0] ===
        this.oneTimePriceRange.savedValue[0] &&
        this.oneTimePriceRange.value[1] === this.oneTimePriceRange.savedValue[1]
      ) {
        this.carData = allData;
        return;
      }
      const filteredData = allData.reduce((accumulator, car) => {
        const baseUdbetaling = car.base_udbetaling || 0;
        if (
          baseUdbetaling >= this.oneTimePriceRange.value[0] &&
          baseUdbetaling <= this.oneTimePriceRange.value[1]
        ) {
          accumulator.push(car);
        }
        return accumulator;
      }, []);

      // Use filteredData for further processing
      this.carData = filteredData;
    },
    async handleCheckboxClickFuelType(value) {
      const response = await fetch(this.currentURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`,
        },
      });
      const data = await response.json();
      const allData = data.data;
      if (this.selectedFuelTypes.includes(value)) {
        this.selectedFuelTypes = this.selectedFuelTypes.filter(
          (fuel) => fuel !== value
        );
        if (this.selectedFuelTypes.length === 0) {
          this.carData = allData;
          return;
        }
      } else {
        this.selectedFuelTypes.push(value);
      }

      const filteredCars = [];
      for (let i = 0; i < allData.length; i++) {
        if (this.selectedFuelTypes.includes(allData[i].braendstof)) {
          filteredCars.push(allData[i]);
        }
      }
      this.carData = Array.from(filteredCars);
    },
    async handleCheckboxClickGearType(value) {
      const response = await fetch(this.currentURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`,
        },
      });
      const data = await response.json();
      const allData = data.data;
      if (this.selectedGearTypes.includes(value)) {
        this.selectedGearTypes = this.selectedGearTypes.filter(
          (gear) => gear !== value
        );
        if (this.selectedGearTypes.length === 0) {
          this.carData = allData;
          return;
        }
      } else {
        this.selectedGearTypes.push(value);
      }

      const filteredCars = [];
      for (let i = 0; i < allData.length; i++) {
        if (this.selectedGearTypes.includes(allData[i].gear_type)) {
          filteredCars.push(allData[i]);
        }
      }
      this.carData = Array.from(filteredCars);
    },
    async handleCheckboxClickTireType(value) {
      const response = await fetch(this.currentURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`,
        },
      });
      const data = await response.json();
      const allData = data.data;
      if (this.selectedTireTypes.includes(value)) {
        this.selectedTireTypes = this.selectedTireTypes.filter(
          (tire) => tire !== value
        );
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
    },
    async updateTireTypeCounts() {
      const response = await fetch(this.currentURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`,
        },
      });
      const data = await response.json();
      const cars = data.data;
      cars.forEach((car) => {
        if (car.daektype !== null) {
          const foundTireType = this.tireTypes.find(
            (type) => type.value === car.daektype
          );
          if (foundTireType) {
            foundTireType.count++;
          }
        }
      });
    },
    async updateGearTypeCounts() {
      const response = await fetch(this.currentURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`,
        },
      });
      const data = await response.json();
      const cars = data.data;
      cars.forEach((car) => {
        if (car.gear_type !== null) {
          const foundGearType = this.gearTypes.find(
            (gear) => gear.value === car.gear_type
          );
          if (foundGearType) {
            foundGearType.count++;
          }
        }
      });
    },
    async updateFuelTypeCounts() {
      const response = await fetch(this.currentURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`,
        },
      });
      const data = await response.json();
      const cars = data.data;
      cars.forEach((car) => {
        if (car.braendstof !== null) {
          const foundFuelType = this.fuelTypes.find(
            (fuel) => fuel.value === car.braendstof
          );
          if (foundFuelType) {
            foundFuelType.count++;
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
            Authorization: `Bearer ${this.readerAPI}`,
          },
        });
        const data = await response.json();
        const cars = data.data;

        this.models = cars.map((car) => ({
          label: car.model,
        }));
      } catch (error) {
        console.error(error);
      }
    },
    async modelChange() {
      const response = await fetch(this.currentURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`,
        },
      });
      const data = await response.json();
      const allData = data.data;
      if (this.selectedModel === "*") {
        this.carData = data.data;
        return;
      }
      const filteredCars = [];
      for (let i = 0; i < allData.length; i++) {
        if (this.selectedModel.value === allData[i].model) {
          filteredCars.push(allData[i]);
        }
      }
      this.carData = Array.from(filteredCars);
    },
    toggleFilter() {
      this.showFilter = !this.showFilter;
      console.log(this.showFilter);
    },
  },

  computed: {


    isMobile() {
      return window.innerWidth <= 768; // adjust this value to fit your design needs
    },
    uniqueBrands() {
      const brandCount = {};
      this.originalData.forEach((car) => {
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
    modelOptions() {
      const modelCounts = {};
      this.carData.forEach((car) => {
        const model = car.model;
        modelCounts[model] = modelCounts[model] ? modelCounts[model] + 1 : 1;
      });
      return Object.keys(modelCounts).map((model) => ({
        value: model,
        label: `${model} (${modelCounts[model]})`,
      }));
    },

  },

};
</script>

<style src="@vueform/slider/themes/default.css"></style>
<style scoped>
.brands__container {

}

.brands__content {
  width: 100%;
}

.brands__content__left {
  text-align: left; /* align the left column to the left */
}

.brands__content__left__header__title {
  font-size: 24px;
  font-weight: bold;
}

.brands__content__left__header__description {
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.5;
}
.button-primary--filter {
  background-color: var(--secondary);
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  margin: var(--space-m) 0;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}
.button-primary--filter:hover {
  background-color: var(--action);
  color: white;
  transform: scale(1.02);
}

.button-primary--filter-apply {
  background-color: var(--action)!important;
  border: none;
  color: white!important;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  margin: var(--space-m) 0;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}
.button-primary--filter-apply:hover {
  background-color: var(--secondary)!important;
  color: black!important;
  transform: scale(1.02);
}


@media only screen and (max-width: 600px) {
  .button-primary--filter {


  }
}


.filter__toggle-button {
  display: none; /* hide by default */
}

.filter__toggle-button-label {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url('https://cdn.icon-icons.com/icons2/2108/PNG/512/menu_icon_130901.png');
  background-repeat: no-repeat;
  background-size: contain;
}
.filter__close-button {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  font-size: 20px;
  line-height: 1;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

/* show the toggle button on smaller screens */
@media only screen and (max-width: 768px) {
  .product-card___2naPO{
    width: 100%!important;
    max-width: 100%!important;
  }
  .filter__container-mobile {
    position: sticky;
    z-index: 10;
    height: 100vh;
    width: 100vw
  }

  .filter__toggle-button {
    display: block;
    z-index: 11;
  }
  .filter__inner-wrapper {
    display: none;
    flex-direction: column;
    margin-top: 0!important;
    padding: var(--space-s) var(--space-m);
  }

  .filter__inner-wrapper.show {
    display: block;
  }

  .filter__header {
    font-size: calc(var(--text-s))!important;
    font-weight: bold;
    padding-top: 1rem!important;
    padding-bottom: 3rem!important;
  }

  .filter__header.pad-header--xs {
    padding-top: 7px!important;
    padding-bottom: 7px!important;
  }
  .container {
    display: flex;
    position: relative;
    padding-left: 20px!important;

    font-size: calc(var(--text-s) - 1px)!important;

  }
  .checkmark{
    position: absolute;
    top: 0;
    left: 0;
    height: 15px!important;
    width: 15px!important;
    background-color: #eee;
  }
  .container .checkmark:after {
    left: 4px!important;
    top: 1px!important;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }


  .filter__brand,
  .filter__model,
  .filter__features,
  .filter__tire {
    display: flex;
    flex-direction: column;
  }

  .filter__ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .filter__ul-horizontal {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 7px!important;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .filter__li {
    margin-top: 2px!important;
    margin-bottom: 4px;
  }

  .filter__checkbox {
    margin-right: 5px;
  }

  .filter__select {
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
  }

  .filter__option-all {
    font-weight: bold;
  }

  .filter__option {
    padding: 10px;
    font-size: 14px;
  }

  .filter__tire {
    margin-bottom: 4px;
  }
}
@media (max-width: 1024px) {
  .filter__toggle-button {
    position: fixed;
    right: 0;
    top: 94vh;
    width: 100vw;
    height: 50px;
    border-radius: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .filter__inner-wrapper {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    background-color: #f1f1f1;
    padding: var(--section-space-m);
  }

  .filter__header {
    font-size: calc(var(--text-m) + 3px);
  }

  .filter__ul-horizontal {
    flex-wrap: nowrap;
    overflow-x: scroll;
  }

  .filter__checkbox {
    margin-right: 10px;
  }
}

.products___1WcE3 {
  display: -webkit-box;
  --side-padding: 1rem;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 2rem var(--side-padding);
}

.filtered__cars-container {
  display: flex;
  flex-direction: row-reverse;
  margin-top: var(--section-space-s);
  padding: var(--section-space-m) var(--space-xs);
}

.filter__container {
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  overflow: auto;
  width: 540px;
  margin-left: var(--section-space-xs);
  background-color: #f1f1f1;

}
.filter__container::-webkit-scrollbar {
  width: 1px;
}

.filter__container::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

.filter__container::-webkit-scrollbar-thumb {
  background-color: #f1f1f1;
}


.filter__inner-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 2px;
  padding: var(--space-s) var(--space-l);
  overflow: hidden;

}

.filter__header {
  font-size: calc(var(--text-s) + 3px);
  font-weight: bold;
}

.filter__header.pad-header--xs {
  padding-top: 10px;
  padding-bottom: 10px;
}

.filter__header.pad-header--m {
  padding-top: 20px;
  padding-bottom: 20px;
}

/*.filter__price {}*/

.filter__brand,
.filter__model,
.filter__features,
.filter__tire {
  display: flex;
  flex-direction: column;
}

.filter__ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.filter__ul-horizontal {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.filter__li {
  margin-top: 5px;
}

.filter__checkbox {
  margin-right: 5px;
}

.filter__select {
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
}

.filter__option-all {
  font-weight: bold;
}

.filter__option {
  padding: 10px;
  font-size: 14px;
}

.filter__tire {
  margin-bottom: 4px;
}
.main-flow___Sjg41 {
  flex: 1;
}
.container {
  display: flex;
  position: relative;
  padding-left: 26px;
  margin-bottom: 1px;
  cursor: pointer;
  font-size: calc(var(--text-m) - 2.2px);
  font-weight: 400;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;

  background-color: var(--white);
  border: 1.5px solid var(--action);
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: var(--action);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
