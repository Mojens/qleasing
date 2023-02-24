<script setup>
import FooterItem from "@/components/FooterItem.vue";
import autoAnimate from "@formkit/auto-animate";
import { ref, onMounted } from "vue";
import NavigationBar from "@/components/NavigationBar.vue";
import BrandRequestForm from "@/components/BrandRequestForm.vue";

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
      <div id="filter_container" class="products___1WcE3" style="padding-top: 0; padding-left: 1rem">
        <div class="brands__container ">
          <div class="brands__header-container">
            <h1 class="brands-header" style="text-transform: capitalize">
              PRIVATLeasing af bil hos QUICKLEASING
            </h1>
          </div>
          <div class="brands__content-container">
            <div class="brands__content pad-header--l">
              <p >
                Flere og flere vælger at lease privat og udover at være en populær leasing form er det også på mange måder en fordelagtig løsning, hvis du ønsker sikkerhed i dit budget.
                <br> <br>
                Vælger du at lease gennem QUICKLEASING er alle service og vedligeholdelsesomkostninger nemlig indeholdt i din månedlige leasingydelse og dermed er du sikret mod uforudsete omkostninger.
                <br> <br>
                Med en leasingaftale gennem QUICKLEASING dukker der ikke uventede regninger op i den tid du leaser din bil, uanset hvor, eller hvornår, din bil har behov for service, så står vores serviceværksted QUICK POINT nemlig klar til at hjælpe dig, så du ikke skal bruge unødig tid og hurtigt er kørende igen. Det bedste er, at det ikke koster dig noget, det er nemlig indeholdt i din månedlige leasingydelse.
              </p>

              <div class="brands__request__form-container" v-if="carData.length === 0" style="margin-bottom: 2em">
                <div class="brands__request__form-inner-wrap" >

                  <BrandRequestForm  />
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="filter__horizontal-container">
          <div class="filter__horizontal-inner-wrapper">
            <div class="grid--auto-4">

              <div class="filter__horizontal-item">

                <div class="select">
                  <select id="standard-select" v-model="selectedPrice" class="filter__dropdown" @change="sortCars">
                    <option selected style="display: none;" value="*">Sorter Efter</option>

                    <option value="asc" @change="sortPriceDesc">Laveste Pris pr.md</option>


                    <option value="desc" @change="sortPriceAsc">Højeste Pris pr.md</option>

                    <option value="asc_ud" @change="sortUdbetalingDesc">Laveste Udbetaling</option>
                    <option value="desc_ud" @change="sortUdbetalingAsc">Højeste Udbetaling</option>

                    <option value="new" @change="sortNewestCarAdded">Nyeste</option>


                  </select>
                </div>

              </div>
              <div class="filter__horizontal-item center--left">
                <div class="filter__horizontal-item-inner">

                  <div class="filter__horizontal-item-select">
                    <ul class="list" style="display: inline-flex">
                      <li class="list-item">
                        <input id="image-size-large" class="input" data-name="image-size" name="image-size" type="radio"
                               value="large" @click="changeCardsPerRowToTwo">
                        <label class="large-images" for="image-size-large">Skift billedstørrelse stor</label>
                      </li>
                      <li class="list-item">
                        <input id="image-size-small" checked="" class="input" data-name="image-size" name="image-size"
                               type="radio" value="small" @click="changeCardsPerRowToThree">
                        <label class="small-images" for="image-size-small">Skift billedstørrelse lille</label>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
              <div></div>




              <div class="filter__horizontal-item " :class="{'center--left pad-header--s': isMobile, 'center--right': !isMobile }">
                <div class="filter__horizontal-item-inner">
                  <p v-if="carData.length > 1"><strong>{{ carData.length
                    }}
                    BILER</strong></p>
                  <p v-if="carData.length === 1"><strong>{{ carData.length }}
                    BIL</strong></p>
                  <p v-if="carData.length === 0"><strong>UD FRA DIN SØGNING EFTER EN BIL, FANDT VI DESVÆRRE INGEN
                    BILER</strong></p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="filter__horizontal-container">
          <div class="grid--auto-3">
            <div aria-relevant="removals" class="filter__horizontal-picked-filters">
              <!-- Chosen filters  -->
              <div class="filter__horizontal-item" v-if="selectedFilters.length > 0">
                <div aria-live="assertive" aria-relevant="removals" class="filter-tags" style="display: table;">
                  <h2 class="filter-tags-heading">Valgte filtre:</h2>
                  <ul class="filter-tags-list">
                    <li v-for="(filter, index) in selectedFilters" :key="index" class="filter-tags-item">
                      <span class="text">{{ filter.name }}</span>


                      <button class="filter-tags-remove" style="background: #ffffff">Remove</button>
                    </li>
                  </ul>
                  <div class="filter-tags-actions" >
                    <button aria-label="Clear all selected filter terms" class="filter-clear-btn js-filter-clear" @click="clearFilters">
                      Fjern filtre
                    </button>
                    <button aria-hidden="true" class="expand-more-tags js-expand-more-tags" style="display: none;"><span class="hidden-tags">+0</span></button>
                  </div>
                </div>
              </div>
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
                  <div v-if="car.billedeLabel !== null" class="label___xUzK4 label___IKlVk" :style="{
                    backgroundColor: car.label_farve,
                    color: car.label_text_farve,
                  }">
                    {{ car.billedeLabel }}
                  </div>
                </div>
                <div class="image-wrapper___2BJkg main-image___2PNg2">
                  <img class="image___3UcXF" :src="thumbnail[car.id]" :alt="`${car.brand} - ${car.model}`"
                    :title="`${car.brand} - ${car.model}`" />
                </div>
                <div class="content___2i8ss">
                  <div class="title___3jeSd">
                    <div class="name___3OMhd">
                      {{ car.brand }} - {{ car.model }}
                    </div>
                    <div class="price___1hgWK">
                      Abonnement fra<span class="value___3qMAh">{{
                        car.base_maanedspris
                      }}</span>kr./md.
                    </div>
                  </div>
                  <div class="technical-details___2buqo technical-details___2vodE">
                    <div class="details-group___19Kyu">
                      <div class="detail___22pEp detail___3AT8g capitalize___o-pqq small-size___1i0G0">
                        <svg class="icon___2OPTw" width="40px" height="40px" viewBox="0 0 40 40"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g transform="translate(4.000000, 4.000000)" stroke="#444444" stroke-width="2" fill="none">
                            <circle id="Oval" cx="16.5" cy="16.5" r="16.5"></circle>
                            <line x1="10" y1="8.5" x2="10" y2="24.5"></line>
                            <line x1="17" y1="8.5" x2="17" y2="24.5"></line>
                            <line x1="24" y1="8.5" x2="24" y2="16.5"></line>
                            <line x1="10.5" y1="17" x2="23.5" y2="17"></line>
                          </g>
                        </svg>
                        <div class="title___3rl0o">{{ car.gear_type }}</div>
                      </div>
                      <div class="detail___22pEp detail___3AT8g small-size___1i0G0">
                        <svg class="icon___2OPTw" width="40px" height="40px" viewBox="0 0 40 40"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g transform="translate(6.000000, 6.000000)" stroke="#444444" stroke-width="2" fill="none">
                            <path
                              d="M7.00032,8.4 C12.9003,2.5 28.0003,0 28.0003,0 C28.0003,0 26.0003,14.6 19.6003,21 C12.7003,27.9 4.70032,23.3 4.70032,23.3 C4.70032,23.3 0.00032,15.4 7.00032,8.4 Z">
                            </path>
                            <line x1="15" y1="13" x2="0" y2="28"></line>
                          </g>
                        </svg>
                        <div class="title___3rl0o">
                          <div class="emissions___3B8H6">
                            <span>CO<sub>2</sub></span>&nbsp;{{ car.co2 }} g/km
                            <div class="energy-class___BHiLA energy-class___3KEQh">
                              <span style="background-color: rgb(190, 214, 47)">A<sup>+</sup></span><span
                                class="arrow-right___1p9wE" style="border-left-color: rgb(190, 214, 47)"></span>
                              <div class="shadow___2ZdD4">
                                <span></span><span class="arrow-right___1p9wE"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="details-group___19Kyu">
                      <div class="detail___22pEp detail___3AT8g capitalize___o-pqq small-size___1i0G0">
                        <svg class="icon___2OPTw" width="40px" height="40px" viewBox="0 0 40 40"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g fill="none" transform="translate(6.000000, 3.000000)">
                            <path
                              d="M22,34 L0,34 L0,3.43077895 C0,1.53841053 1.53894737,0.000357894737 3.43042105,0.000357894737 L18.5686842,0.0695789474 C20.4601579,0.0695789474 22,1.60763158 22,3.5 L22,34 Z"
                              stroke="#444444" stroke-width="2"></path>
                            <polygon stroke="#444444" stroke-width="2" points="4 18 18 18 18 5 4 5"></polygon>
                            <path
                              d="M25,3 L29,9 L29,29 C29,30.1045695 28.1045695,31 27,31 C25.8954305,31 25,30.1045695 25,29 L25,22 C25,20.8954305 24.1045695,20 23,20 L22,20 L22,20"
                              stroke="#444444" stroke-width="2"></path>
                            <path
                              d="M29.5,11 L25.5938579,3.62583158 L25.7211053,8.722 C25.7211053,9.98 26.742,11 28,11 L29.5,11 Z"
                              fill="#444444"></path>
                          </g>
                        </svg>
                        <div class="title___3rl0o">{{ car.braendstof }}</div>
                      </div>
                      <div class="detail___22pEp detail___3AT8g small-size___1i0G0">
                        <svg class="icon___2OPTw" width="40px" height="40px" viewBox="0 0 40 40"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g transform="translate(1.000000, 6.000000)" fill="none">
                            <line x1="6" y1="28" x2="15" y2="0" stroke="#444444" stroke-width="2"></line>
                            <line x1="27" y1="0" x2="36" y2="28" stroke="#444444" stroke-width="2"></line>
                            <line x1="21" y1="3" x2="21" y2="6" stroke="#444444" stroke-width="2"></line>
                            <line x1="21" y1="11" x2="21" y2="15" stroke="#444444" stroke-width="2"></line>
                            <line x1="21" y1="20" x2="21" y2="25" stroke="#444444" stroke-width="2"></line>
                            <path
                              d="M4,10.1992 C5.8125,10.1992 7.75,8.9169 7.75,6.70209 C7.75,4.66209 4,0.87354 4,0.87354 C4,0.87354 0.25,4.66209 0.25,6.70209 C0.25,8.9169 2.1875,10.1992 4,10.1992 Z"
                              fill="#444444"></path>
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
                      class="button___2oWcS default___31nVJ cta-button___2wq8T outlined___F3j36 rounded-corners___2DuU9 small___3BQ-q">
                      Vælg bil
                    </button>
                  </RouterLink>
                  <div class="additional-price___2tuCL" style="font-size: x-small; margin-top:5px;">
                    {{ textUnderPicture(car) }}
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="brands__container ">
          <div class="brands__header-container">
            <h2 class="brands-header pad-header--s" style="text-transform: capitalize; margin-top: 2rem">
              PRIVATLeasing – hvad er det?
            </h2>
          </div>
          <div class="brands__content-container">
            <div class="brands__content pad-header--s">
              <p >
                Hvis du ikke kender noget til PRIVATLeasing, kan det godt virke lidt uoverskueligt hvad det egentlig indebærer. Men rent faktisk er det meget enkelt – Ved PRIVATLeasing lejer du blot en bil i en i forvejen aftalt periode
                <br> <br>
                Det betyder, at du har retten til at bruge bilen i en aftalt periode når du har betalt en førstegangsydelse og efterfølgende betaler de månedlige leasingydelser inklusiv forsikring.
                <br> <br>
                Din månedlige leasingydelse afhænger af værdien af bilen og de forventede omkostninger til service og vedligeholdelse i leasingperioden samt hvor mange kilometer du forventer at køre i bilen
              </p>
            </div>
          </div>
          <div class="brands__header-container">
            <h2 class="brands-header pad-header--s" style="text-transform: capitalize; margin-top: 2rem">
              Stort udvalg af leasingbiler
            </h2>
          </div>
          <div class="brands__content-container">
            <div class="brands__content pad-header--s">
              <p >
                Hos QUICKLEASING kan du vælge mellem flere forskellige biler i forskellige prisklasser og typisk kan du vælge mellem et bredt udvalg af bilmærker, såsom Peugeot, Opel, Citroën, Toyota, VW, BMW, Audi og Mercedes.
                <br> <br>
                Når du kigger på vores biler, kan du også vælge efter udstyr som det er vigtigt for dig at have med, det kan være anhængertræk, bakkamera eller Apple CarPlay, du kan endvidere vælge om bilen skal have manuelt gear eller automatgear.
                <br> <br>
                Vores udvalg af biler i forskellige prisklasser gør, at du typisk kan finde alt fra biler med en månedlige ydelse på mellem kr. 1.000 og kr. 2.000 til op til over kr. 4.000.
              </p>
            </div>
          </div>
          <div class="brands__header-container">
            <h2 class="brands-header pad-header--s" style="text-transform: capitalize; margin-top: 2rem">
              Dine fordele ved PRIVATLeasing
            </h2>
          </div>
          <div class="brands__content-container">
            <div class="brands__content pad-header--s">
              <p >
                Du opnår mange fordele ved at privat lease, de fleste er dog økonomiske og det er ikke uvæsentligt. Faktisk kan man sige, at forskellen mellem at eje og privat lease kan skæres ned til, at du kun betaler for de kilometer du har brug for at køre – uden at skulle bekymre sig over, om bilen er faldet i værdi eller trænger til at komme til service.
                <br> <br>
                Ved PRIVATLeasIng gennem QUICKLEASING undgår du økonomiske bekymringer, da pludselige og uforudsete udgifter er noget vi tager os af – alle service og reparationer er nemlig indeholdt i din leasingydelse – det giver dig økonomisk tryghed og dermed noget du kan budgettere efter.
                <br> <br>
                En ikke uvæsentlig fordel var PRIVATLeasing gennem QUICKLEASING er, at ønsker du at skifte bil ofte, så skal du ikke bekymre dig om værdien af bilen når du ønsker at skifte, da det er helt uden omkostninger efter leasingperiodens udløb, som typisk er 3 år – men du kan vælge at lease i kortere perioder.
                <br> <br>
                Skulle du alligevel ønske at skifte bil inden leasingperiodens udløb, har vi ved QUICKLEASING en opsigelsesperiode på kun 3 måneder, hvor du mod betaling af én måneds leasingydelse kan stille bilen. Ønsker du at lease en anden bil hos QUICKLEASING samtidig, slipper du dog for dette gebyr – så kan det ikke være mere enkelt og billigt!
              </p>

            </div>
          </div>
          <div class="brands__header-container">
            <h2 class="brands-header pad-header--s" style="text-transform: capitalize; margin-top: 2rem">
              Hvad skal du være opmærksom på, når du leaser din bil hos QUICKLEASING?
            </h2>
          </div>
          <div class="brands__content-container">
            <div class="brands__content pad-header--s">
              <p >
                Som beskrevet ovenfor, er stort set alle omkostninger indeholdt i din leasingydelse, såsom service og reparationer, men der dog lidt omkostninger forbundet med at have bil, som ikke er inkluderet. Vægtafgift, eller grøn ejerafgift, forsikring, vejhjælp og brændstof eller el, er omkostninger du selv skal afholde.
                <br> <br>
                Forsikring tegnes gennem QUICKLEASING og du har også mulighed for at tilkøbe vejhjælp.
              </p>
            </div>
          </div>
          <div class="brands__header-container">
            <h2 class="brands-header pad-header--s" style="text-transform: capitalize; margin-top: 2rem">
              PRIVATLeasing gennem QUICKLEASING
            </h2>
          </div>
          <div class="brands__content-container">
            <div class="brands__content pad-header--s">
              <p >
                QUICKLEASING opererer som et digitalt leasingselskab, det betyder, at alle processer omkring valg af bil og kreditgodkendelse foregår via vores hjemmeside. Du har mulighed for fysisk at se og prøve vores biler efter aftale. Har du ikke mulighed for selv at afhente fin leasingbil, kan vi mod betaling, levere din bil i hele landet.
                <br> <br>
                For at kunne lease en bil ved AUICK LEASING, er det en forudsætning at du kan blive kreditgodkendt. Dette foregår ved at du giver os adgang til din skattemappe og fremsender dine seneste 3 lønsedler, årsopgørelse samt kopi af sygesikringsbevis og kørekort.
                <br> <br>
                Når din aftale om PRIVATLeasing udløber, skal bilen returneres til QUICK LEASING, på vores fysiske adresse, i en stand der svarer til bilens alder og det antal kilometer du har kørt i leasingperioden. Tidligst to uger før du skal aflevere bilen, skal du bestille en gennemgang af bilen ved enten A-Plus eller ved os og få gennemgået bilen.
                <br> <br>
                Bilen gennemgås sammen med dig på den aftalte tid og efterfølgende udfærdiges der en rapport på bilen. Afleveringsrapporten koster kr. 495,- som betales ved gennemgang af bilen.
              </p>
            </div>
          </div>
          <div class="brands__header-container">
            <h2 class="brands-header pad-header--s" style="text-transform: capitalize; margin-top: 2rem">
              Prøvekørsel efter aftale
            </h2>
          </div>
          <div class="brands__content-container">
            <div class="brands__content pad-header--s">
              <p >
                Da QUICK LEASING driver sin forretning digitalt, for at holde omkostningerne så lave som muligt, kan man kun mod forudgående aftale prøvekøre en af vores biler. Det er en forudsætning for prøvekørsel, at det foreligger en positiv kreditgodkendelse på den kategori af bil, som der ønskes en prøvekørsel af.
                <br> <br>
                <RouterLink to="/proevekoersel" alt="Prøvekørsel" title="Prøvekørsel">Prøvekørsel</RouterLink>  forudsætter at der er truffet aftale om dette senest 24 timer før bilen skal prøvekøres.
                <br> <br>
                En aftale om prøvekørsel er ikke automatisk en reservation af bilen – biler kan alene reserveres ved at indgå en aftale om bilen og dette sker ved at udfylde vores bestillingsformular på hjemmesiden under den enkelte bil.
              </p>
            </div>
          </div>
          <div class="brands__header-container">
            <h2 class="brands-header pad-header--s" style="text-transform: capitalize; margin-top: 2rem">
              Spørgsmål til QUICK LEASING
            </h2>
          </div>
          <div class="brands__content-container">
            <div class="brands__content pad-header--s">
              <p >
                Hvis du ikke har fået svar på alle dine spørgsmål her på siden, er du velkommen til at udfylde vores <RouterLink to="/kontakt" title="Kontakt Os">kontaktformular</RouterLink>, så kommer vi hurtigst muligt retur til dig med svar på dine spørgsmål.
                <br> <br>
                Hvis du efterlyser en bil, som ikke er på hjemmesiden, er du også velkommen til at udfylde nedenstående formular <br> <RouterLink to="/bil-foresporgsel"><button class="button-primary">Bil Efterlysnings Formular</button> </RouterLink>
                <br> så vil vi gøre vores bedste for at finde en bil, der matcher dine ønsker.
                <br> <br>
                Vi kan også træffes på telefon på <a href="tel:89885080" title="Telefon">89 88 50 80</a> hvis du har brug for råd eller vejledning, inden du træffer din endelige afgørelse om PRIVATLeasing. Vi har kontortid mellem klokken 08:30 og 16:00.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- START NEW FILTER -->
    <div class="filter__toggle-button" v-if="isMobile" @click="toggleFilter()">
      <button class="button-primary--filter" :class="{ 'button-primary--filter-apply': showFilter }"
        style="display: flex; align-items: center;width: 100vw;justify-content: center">
        <img src="../assets/images/filter_filters_funnel_list_navigation_sort_sorting_icon_123212.svg"
          style="width: 30px; margin-right: 10px;" alt="">
        <span v-if="showFilter">Færdig</span>
        <span v-else>Filter</span>
      </button>
    </div>
    <div v-if="showFilter" class="filter__container-mobile" :class="{ show: isMobile && showFilter }">
      <div class="filter__inner-wrapper">
        <button class="filter__close-button" @click="toggleFilter()">
          <svg class="filter__close-icon" width="24px" height="24px" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g transform="translate(1.000000, 1.000000)" stroke="#444444" stroke-width="2" fill="none"
              fill-rule="evenodd">
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
                <input class="filter__checkbox checkbox" type="checkbox" :id="brand.name" :value="brand.name"
                  :checked="selectedBrands.includes(brand.name)" @click="handleCheckboxClick(brand.name)" />
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
          <select class="filter__select" v-model="selectedModel" @change="modelChange()">
            <option class="filter__option-all" value="*">Alle modeller</option>
            <option class="filter__option" v-for="option in modelOptions" :value="option">
              {{ option.label }}
            </option>
          </select>
        </div>

        <div class="filter__price" id="filterPrice">
          <h3 class="filter__header" style="padding-bottom: 3.5rem; padding-top: 1.5rem">
            Pris pr.md.
          </h3>
          <Slider v-model="priceRange.value" :min="priceRange.savedValue[0]" :max="priceRange.savedValue[1]" :step="500"
            :tooltips="true" :range="true" :format="(value) => `${value} kr.`" @change="priceChange"
            style="padding: 0 1rem"></Slider>
        </div>

        <div class="filter__price" id="filterPrice" style="width: 100%">
          <h3 class="filter__header" style="padding-bottom: 3.5rem; padding-top: 1.5rem">
            Førstegangsydelse
          </h3>
          <Slider v-model="oneTimePriceRange.value" :min="oneTimePriceRange.savedValue[0]"
            :max="oneTimePriceRange.savedValue[1]" :step="500" :tooltips="true" :range="true"
            :format="(value) => `${value} kr.`" @change="oneTimePriceChange" style="padding: 0 1rem"></Slider>
        </div>

        <div class="filter__tire">
          <h3 class="filter__header pad-header--xs" style="padding-top: 2rem">
            Gear Type
          </h3>
          <ul class="filter__ul-horizontal">
            <li class="filter__li" v-for="gear in gearTypes" :key="gear.value">
              <label class="container">
                <input class="filter__checkbox" type="checkbox" :value="gear.value"
                  :checked="selectedGearTypes.includes(gear.value)" @click="handleCheckboxClickGearType(gear.value)" />
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
                <input class="filter__checkbox" type="checkbox" :value="fuel.value"
                  :checked="selectedFuelTypes.includes(fuel.value)" @click="handleCheckboxClickFuelType(fuel.value)" />
                {{ fuel.name }} ({{ fuel.count }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>

        <div class="filter__features">
          <h3 class="filter__header pad-header--xs">Udstyr</h3>
          <ul class="filter__ul-horizontal">
            <li class="filter__li" v-for="item in featureItems" :key="item.value" :data-value="item.value">
              <label class="container" v-if="
                carData.filter(
                  (car) => car.Udstyr && car.Udstyr.includes(item.value)
                ).length > 0
              ">
                <input class="filter__checkbox" type="checkbox" @click="handleCheckboxClickFeatures(item.value)" />
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
                <input class="filter__checkbox" type="checkbox" :value="tire.value"
                  :checked="selectedTireTypes.includes(tire.value)" @click="handleCheckboxClickTireType(tire.value)" />
                {{ tire.name }} ({{ tire.count }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>
        <div class="filter__tire">
          <h3 class="filter__header pad-header--xs">Bil type</h3>
          <ul class="filter__ul-horizontal">
            <li class="filter__li" v-for="carType in carTypes" :key="carType.value">
              <label class="container">
                <input class="filter__checkbox" type="checkbox" :value="tire.value"
                  :checked="selectedCarTypes.includes(carType.value)"
                  @click="handleCheckboxClickCarType(carType.value)" />
                {{ carType.name }} ({{ carType.count }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else-if="!isMobile" class="filter__container" ref="example2">
      <div class="filter__inner-wrapper">
        <div class="filter__brand" id="brandCheckbox">
          <h3 class="filter__header pad-header--xs">Mærke</h3>
          <ul class="filter__ul-horizontal list--none" style="list-style: none">
            <li class="filter__li" v-for="brand in uniqueBrands" :key="brand">
              <label class="container">
                <input class="filter__checkbox checkbox" type="checkbox" :value="brand.name"
                  :checked="selectedBrands.includes(brand.name)" @click="handleCheckboxClick(brand.name)" />
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
          <select class="filter__select" v-model="selectedModel" @change="modelChange()">
            <option class="filter__option-all" value="*">Alle modeller</option>
            <option class="filter__option" v-for="option in modelOptions" :value="option">
              {{ option.label }}
            </option>
          </select>
        </div>

        <div class="filter__price" id="filterPrice" style="width: 100%">
          <h3 class="filter__header" style="padding-bottom: 3.5rem; padding-top: 1.5rem">
            Pris pr.md.
          </h3>
          <Slider v-model="priceRange.value" :min="priceRange.savedValue[0]" :max="priceRange.savedValue[1]" :step="500"
            :tooltips="true" :range="true" :format="(value) => `${value} kr.`" @change="priceChange"></Slider>
        </div>

        <div class="filter__price" id="filterPrice" style="width: 100%">
          <h3 class="filter__header" style="padding-bottom: 3.5rem; padding-top: 1.5rem">
            Førstegangsydelse
          </h3>
          <Slider v-model="oneTimePriceRange.value" :min="oneTimePriceRange.savedValue[0]"
            :max="oneTimePriceRange.savedValue[1]" :step="500" :tooltips="true" :range="true"
            :format="(value) => `${value} kr.`" @change="oneTimePriceChange"></Slider>
        </div>

        <div class="filter__tire">
          <h3 class="filter__header pad-header--xs" style="padding-top: 2rem">
            Gear Type
          </h3>
          <ul class="filter__ul-horizontal">
            <li class="filter__li" v-for="gear in gearTypes" :key="gear.value">
              <label class="container">
                <input class="filter__checkbox" type="checkbox" :value="gear.value"
                  :checked="selectedGearTypes.includes(gear.value)" @click="handleCheckboxClickGearType(gear.value)" />
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
                <input class="filter__checkbox" type="checkbox" :value="fuel.value"
                  :checked="selectedFuelTypes.includes(fuel.value)" @click="handleCheckboxClickFuelType(fuel.value)" />
                {{ fuel.name }} ({{ fuel.count }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>

        <div class="filter__features">
          <h3 class="filter__header pad-header--xs">Udstyr</h3>
          <ul class="filter__ul-horizontal">
            <li class="filter__li" v-for="item in featureItems" :key="item.value" :data-value="item.value">
              <label class="container" v-if="
                carData.filter(
                  (car) => car.Udstyr && car.Udstyr.includes(item.value)
                ).length > 0
              ">
                <input class="filter__checkbox" type="checkbox" @click="handleCheckboxClickFeatures(item.value)" />
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
                <input class="filter__checkbox" type="checkbox" :value="tire.value"
                  :checked="selectedTireTypes.includes(tire.value)" @click="handleCheckboxClickTireType(tire.value)" />
                {{ tire.name }} ({{ tire.count }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>
        <div class="filter__tire">
          <h3 class="filter__header pad-header--xs">Bil type</h3>
          <ul class="filter__ul-horizontal">
            <li class="filter__li" v-for="carType in carTypes" :key="carType.value">
              <label class="container">
                <input class="filter__checkbox" type="checkbox" :value="tire.value"
                  :checked="selectedCarTypes.includes(carType.value)"
                  @click="handleCheckboxClickCarType(carType.value)" />
                {{ carType.name }} ({{ carType.count }})
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>
      </div>
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
    (await this.updateTireTypeCounts()) == this.updateTireTypeCounts.bind(this);
    (await this.updateGearTypeCounts()) == this.updateGearTypeCounts.bind(this);
    (await this.updateFuelTypeCounts()) == this.updateFuelTypeCounts.bind(this);
    this.fetchModels();
  },
  methods: {

    clearFilters() {
      this.selectedBrands = [];
      this.selectedFeatures = [];
      this.selectedGearTypes = [];
      this.selectedFuelTypes = [];
      this.selectedTireTypes = [];
      this.selectedCarTypes = [];
      this.selectedModel = '';
      this.selectedPrice = '*';
      this.fetchData2();
    },
    changeCardsPerRowToThree() {
      /* Target this: #filter_container.products___1WcE3 .list___1c2KX  And Set property --products-per-row to 3*/
      document.querySelector("#filter_container.products___1WcE3 .list___1c2KX").style.setProperty("--products-per-row", "3");
      document.querySelectorAll(".product-card___2naPO").forEach((element) => {
        element.style.setProperty("height", "30.4rem");
      });
      document.querySelectorAll(".image-wrapper___2BJkg").forEach((element) => {
        element.style.setProperty("height", "11.5rem");
      });
      document.querySelectorAll(".content___2i8ss").forEach((element) => {
        element.style.setProperty("padding", "1.2rem");
      });
      document.querySelectorAll(".button___2oWcS.rounded-corners___2DuU9").forEach((element) => {
        element.style.setProperty("margin-top", "0");
        element.style.setProperty("margin-bottom", "0");

      });
      document.querySelectorAll(".label___xUzK4").forEach((element) => {
        element.style.setProperty("font-size", "0.70rem");
        element.style.setProperty("height", "1.205rem ");

      });
      document.querySelectorAll(".name___3OMhd").forEach((element) => {
        element.style.setProperty("font-size", "1rem");
      });
    },
    changeCardsPerRowToTwo() {
      document.querySelector("#filter_container.products___1WcE3 .list___1c2KX").style.setProperty("--products-per-row", "2");
      /* Target all classes with .product-card___2naPO and set the height property to 100% */
      document.querySelectorAll(".product-card___2naPO").forEach((element) => {
        element.style.setProperty("height", "100%");
      });
      /* Target all classes with .image-wrapper___2BJkg  and set height to 100%*/
      document.querySelectorAll(".image-wrapper___2BJkg").forEach((element) => {
        element.style.setProperty("height", "100%");
      });
      document.querySelectorAll(".content___2i8ss").forEach((element) => {
        element.style.setProperty("padding", "var(--space-m) var(--space-xl)");
      });
      /* .button___2oWcS.rounded-corners___2DuU9 */
      document.querySelectorAll(".button___2oWcS.rounded-corners___2DuU9").forEach((element) => {
        element.style.setProperty("margin-top", "var(--space-xs)");
        element.style.setProperty("margin-bottom", "var(--space-xs)");

      });
      /* label___xUzK4 */
      document.querySelectorAll(".label___xUzK4").forEach((element) => {
        element.style.setProperty("font-size", "0.95rem");
        element.style.setProperty("height", "1.705rem");

      });

      /* name___3OMhd */
      document.querySelectorAll(".name___3OMhd").forEach((element) => {
        element.style.setProperty("font-size", "1.4rem");
      });


    },


    sortPriceDesc() {
      this.carData.sort((a, b) => b.base_maanedspris - a.base_maanedspris);

    },
    sortPriceAsc() {
      this.carData.sort((a, b) => a.base_maanedspris - b.base_maanedspris);
    },
    sortUdbetalingDesc() {
      this.carData.sort((a, b) => b.base_udbetaling - a.base_udbetaling);
    },
    sortUdbetalingAsc() {
      this.carData.sort((a, b) => a.base_udbetaling - b.base_udbetaling);
    },
    sortNewestCarAdded() {
      this.carData.sort((a, b) => b.id - a.id);
    },
    sortCars() {
      if (this.selectedPrice === "desc") {
        this.sortPriceDesc();
      } else if (this.selectedPrice === "asc") {
        this.sortPriceAsc();
      }
      if (this.selectedPrice === "desc_ud") {
        this.sortUdbetalingDesc();
      } else if (this.selectedPrice === "asc_ud") {
        this.sortUdbetalingAsc();
      }
      if (this.selectedPrice === "new") {
        this.sortNewestCarAdded();
      }
    },

    textUnderPicture(car) {
      return `  Udbetaling kr. ${car.base_udbetaling} - månedlig
                  leasingydelse kr. ${car.base_maanedspris} \n-
                  udleveringsrapport kr. 495, total omkostning i 36 mdr. Total:
                  ${((car.base_maanedspris * 36) + (car.groen_ejer_afgift / 6) * 36) + 495 + car.base_udbetaling + (parseInt(car.dokument_gebyr_ved_oprettelse) ?? 0)} kr. `
    },
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
    selectedFilters() {
      const filters = [];

      // Add selected brand filters
      if (this.selectedBrands.length > 0) {
        const selectedBrandFilters = this.selectedBrands.map((brand) => {
          return { name: brand, type: 'brand' };
        });
        filters.push(...selectedBrandFilters);
      }

      // Add selected feature filters
      if (this.selectedFeatures.length > 0) {
        const selectedFeatureFilters = this.selectedFeatures.map((feature) => {
          return { name: feature, type: 'feature' };
        });
        filters.push(...selectedFeatureFilters);
      }

      // Add selected price filter
      if (this.selectedPrice !== '*') {
        filters.push({ name: `Price: ${this.selectedPrice}`, type: 'price' });
      }

      // Add selected gear type filters
      const selectedGearTypeFilters = this.gearTypes
        .filter((gearType) => this.selectedGearTypes.includes(gearType.value))
        .map((gearType) => {
          return { name: gearType.name, type: 'gearType' };
        });
      if (selectedGearTypeFilters.length > 0) {
        filters.push(...selectedGearTypeFilters);
      }

      // Add selected fuel type filters
      const selectedFuelTypeFilters = this.fuelTypes
        .filter((fuelType) => this.selectedFuelTypes.includes(fuelType.value))
        .map((fuelType) => {
          return { name: fuelType.name, type: 'fuelType' };
        });
      if (selectedFuelTypeFilters.length > 0) {
        filters.push(...selectedFuelTypeFilters);
      }

      // Add selected tire type filters
      const selectedTireTypeFilters = this.tireTypes
        .filter((tireType) => this.selectedTireTypes.includes(tireType.value))
        .map((tireType) => {
          return { name: tireType.name, type: 'tireType' };
        });
      if (selectedTireTypeFilters.length > 0) {
        filters.push(...selectedTireTypeFilters);
      }
      /* Return pretty string  */



      return filters;
    },

    isMobile() {
      return window.innerWidth <= 1365; // adjust this value to fit your design needs
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
<style >
.button-primary--filter {
  background-color: var(--secondary);
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;

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
  background-color: var(--action) !important;
  border: none;
  color: white !important;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;

  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}

.button-primary--filter-apply:hover {
  background-color: var(--secondary) !important;
  color: black !important;
  transform: scale(1.02);
}


@media only screen and (max-width: 880px) {
  .button-primary--filter {
    height: 9vh;
  }
  .filter__inner-wrapper{
    height: 91vh;
  }
}


.filter__toggle-button {
  display: none;
  /* hide by default */
}

.filter__toggle-button-label {
  display: inline-block;
  width: 30px;
  height: 30px;

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
.filtered__cars-container {
  display: flex;
  flex-direction: row-reverse;
  margin-top: var(--section-space-s);
  padding: var(--section-space-m) var(--space-xs);
}

/* show the toggle button on smaller screens */
@media only screen and (max-width: 1365px) {
  .product-card___2naPO {
    width: 100% !important;
    max-width: 100% !important;
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
    margin-top: 0 !important;
    padding: var(--space-s) var(--space-m);
  }

  .filter__inner-wrapper.show {
    display: block;
  }

  .filter__header {
    font-size: calc(var(--text-s)) !important;
    font-weight: bold;
    padding-top: 1rem !important;
    padding-bottom: 3rem !important;
  }

  .filter__header.pad-header--xs {
    padding-top: 7px !important;
    padding-bottom: 7px !important;
  }

  .container {
    display: flex;
    position: relative;
    padding-left: 20px !important;

    font-size: calc(var(--text-s) - 1px) !important;

  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 15px !important;
    width: 15px !important;
    background-color: #eee;
  }

  .container .checkmark:after {
    left: 4px !important;
    top: 1px !important;
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
    gap: 7px !important;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .filter__li {
    margin-top: 2px !important;
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

@media screen and (min-width: 42.75rem) {
 #filter_container.products___1WcE3 .list___1c2KX {
    --products-per-row: 2;
  }
}
@media screen and (min-width: 64rem) {
  #filter_container.products___1WcE3 .list___1c2KX {
    --products-per-row: 3;
  }
}
@media screen and (min-width: 85.375rem) {
  #filter_container.products___1WcE3 .list___1c2KX {
    --products-per-row: 2;
  }

}

@media screen and (min-width: 93rem) {
  #filter_container.products___1WcE3 .list___1c2KX {
    --products-per-row: 3;
  }
}
@media screen and (min-width: 125rem) {
  #filter_container.products___1WcE3 .list___1c2KX {
    --products-per-row: 4;
  }
}


@media  (max-width: 1365px) {
  .filter__container::-webkit-scrollbar {
    width: 1px;
  }

  .filter__container::-webkit-scrollbar-track {
    background-color: #f2f2f2;
  }

  .filter__inner-wrapper::-webkit-scrollbar-thumb {
    background-color: #f2f2f2;
  }
  .filter__inner-wrapper::-webkit-scrollbar {
    width: 1px;
  }

  .filter__inner-wrapper::-webkit-scrollbar-track {
    background-color: #f2f2f2;
  }

  .filter__container::-webkit-scrollbar-thumb {
    background-color: #f2f2f2;
  }
  .filtered__cars-container{
    flex-direction: row;
  }
  .filter__toggle-button {
    position: fixed;
    right: 0;
    bottom: 0;
    width: 100vw;

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
    background-color: #f2f2f2;
    padding: var(--section-space-m);
  }

  .filter__header {
    font-size: calc(var(--text-m) + 3px);
  }

  .filter__ul-horizontal {
    flex-wrap: nowrap;

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



.filter__container {
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  overflow: auto;
  width: calc(35vw - 2 * var(--section-space-xs));
  margin-left: var(--section-space-xs);
  background-color: #f2f2f2;

}

.filter__container::-webkit-scrollbar {
  width: 1px;
}

.filter__container::-webkit-scrollbar-track {
  background-color: #f2f2f2;
}

.filter__container::-webkit-scrollbar-thumb {
  background-color: #f2f2f2;
}


.filter__inner-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 2px;
  padding: var(--space-s) var(--space-l);
  overflow: auto;

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
.container:hover input~.checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked~.checkmark {
  background-color: var(--action);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked~.checkmark:after {
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
