<template>
  <div>
    <h1 class="pad-header--m center--all" style="padding-left: 0.7rem; padding-right: 0.7rem">Se de biler, der lige er ankommet til Quickleasing</h1>
    <div id="isDesktop" class="main-flow___Sjg41" data-qa="main-flow" >

      <button class="control-btn pre-btn" @click="previousCar" :disabled="currentIndex <= 2">
        <img class="arrow__btn" src='https://img.icons8.com/ios/50/000000/chevron-left.png'  alt="Pil til venstre, for at se flere biler"/>
      </button>
      <div class="products___1WcE3 center--all" @touchstart="onTouchStart" @touchend="onTouchEnd"  @mousedown="onMouseDown"
           @mouseup="onMouseUp" ref="products">
        <div class="list___1c2KX">

          <div id="product__card" class="product___3vmta " v-for="car in displayedCars" :key="car.id"
               >
            <div class="product-card___2naPO has-cta___1N-4L">
              <div class="label-wrap___2_2TG">

                <div class="label___xUzK4 label___IKlVk black___2xtI_">
                  fra {{ car.base_udbetaling }} kr i udbetaling
                </div>

                 <!-- Label som kommer fra bil, hvis der er nogle -->
                 <div v-if="car.billedeLabel !== null" class="label___xUzK4 label___IKlVk black___2xtI_">
                  {{ car.billedeLabel }}
                </div>
                
              </div>
              <div class="image-wrapper___2BJkg main-image___2PNg2">
                <img class="image___3UcXF" :src="thumbnail[car.id]" :alt="`${car.brand} - ${car.model}`"
                  :title="`${car.brand} - ${car.model}`" />
              </div>

              <div class="content___2i8ss">
                <div class="title___3jeSd">
                  <div class="name___3OMhd">{{ car.brand }} - {{ car.model }}</div>
                  <div class="price___1hgWK">
                    Abonnement fra<span class="value___3qMAh">{{ car.base_maanedspris }}</span>kr./md.
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
                      <div class="title___3rl0o">{{ car.kilometerprliter }} km/l</div>
                    </div>
                  </div>
                </div>
                <div class="highlighted-features___34JSO">
                  <span class="highlighted-feature___2Z8Zj">{{ getFeatures(car) }}</span>
                </div>
                <RouterLink :to="`/quickleasing/${car.id}`">
                  <button
                    class="button___2oWcS default___31nVJ cta-button___2wq8T outlined___F3j36 rounded-corners___2DuU9 small___3BQ-q">
                    Vælg bil
                  </button>
                </RouterLink>
                <div class="additional-price___2tuCL" style="font-size: 9px;margin-top: 5px;">
                  {{ textUnderPicture(car) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <button class="control-btn next-btn" @click="nextCar" :disabled="currentIndex >= carData.length - 3">
          <img class="arrow__btn" src='https://img.icons8.com/ios/50/000000/chevron-right.png'  alt="Pil til højre, for at se flere biler"/>
        </button>

    </div>
    <div id="isMobile" class="main-flow___Sjg41" data-qa="main-flow" >

      <button class="control-btn pre-btn" @click="previousCar" :disabled="currentIndex <= 2">
        <img class="arrow__btn" src='https://img.icons8.com/ios/50/000000/chevron-left.png'  alt="Pil til venstre, for at se flere biler"/>
      </button>
      <div class="products___1WcE3 center--all" @touchstart="onTouchStart" @touchend="onTouchEnd"  @mousedown="onMouseDown"
           @mouseup="onMouseUp" ref="products">
        <div class="list___1c2KX">

          <div id="product__card" class="product___3vmta " v-for="car in displayedCarsMobile" :key="car.id"
               >
            <div class="product-card___2naPO has-cta___1N-4L">
              <div class="label-wrap___2_2TG">

                <div class="label___xUzK4 label___IKlVk black___2xtI_">
                  fra {{ car.base_udbetaling }} kr i udbetaling
                </div>

                 <!-- Label som kommer fra bil, hvis der er nogle -->
                 <div v-if="car.billedeLabel !== null" class="label___xUzK4 label___IKlVk black___2xtI_">
                  {{ car.billedeLabel }}
                </div>

              </div>
              <div class="image-wrapper___2BJkg main-image___2PNg2">
                <img class="image___3UcXF" :src="thumbnail[car.id]" :alt="`${car.brand} - ${car.model}`"
                  :title="`${car.brand} - ${car.model}`" />
              </div>

              <div class="content___2i8ss">
                <div class="title___3jeSd">
                  <div class="name___3OMhd">{{ car.brand }} - {{ car.model }}</div>
                  <div class="price___1hgWK">
                    Abonnement fra<span class="value___3qMAh">{{ car.base_maanedspris }}</span>kr./md.
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
                      <div class="title___3rl0o">{{ car.kilometerprliter }} km/l</div>
                    </div>
                  </div>
                </div>
                <div class="highlighted-features___34JSO">
                  <span class="highlighted-feature___2Z8Zj">{{ getFeatures(car) }}</span>
                </div>
                <RouterLink :to="`/quickleasing/${car.id}`">
                  <button
                    class="button___2oWcS default___31nVJ cta-button___2wq8T outlined___F3j36 rounded-corners___2DuU9 small___3BQ-q">
                    Vælg bil
                  </button>
                </RouterLink>
                <div class="additional-price___2tuCL" style="font-size: 7.5px;margin-top: 5px;">
                  {{ textUnderPicture(car) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <button class="control-btn next-btn" @click="nextCar" :disabled="currentIndex >= carData.length - 3">
          <img class="arrow__btn" src='https://img.icons8.com/ios/50/000000/chevron-right.png'  alt="Pil til højre, for at se flere biler"/>
        </button>

    </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      touchStartX: null,
      currentURL: import.meta.env.VITE_APP_CARS_URL,
      pictureURL: import.meta.env.VITE_APP_PICTURE_URL,
      fileURL: import.meta.env.VITE_APP_FILE_ID_URL,
      readerAPI: import.meta.env.VITE_APP_READER_API,
      carData: [],
      carImages: {},
      thumbnail: {},
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
      udstyr: [],
      currentIndex: 0,
      displayedCars: [],
    };
  },

  async mounted() {
    const carCards = document.querySelectorAll('.product___3vmta');
    carCards.forEach((carCard) => {
      carCard.addEventListener('transitionend', () => {
        carCard.classList.remove('animate-slide');
        carCard.classList.add('done');
      });
    });
    const response = await fetch(this.currentURL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.readerAPI}`,
      },
    });
    const data = await response.json();
    this.carData = data.data;
    this.carData.sort(
      (a, b) => new Date(b.oprettet_dato) - new Date(a.oprettet_dato)
    );
    this.carData.forEach((car) => {
       this.carImages[car.id] = this.imageURL(car);
     });
    this.carData.forEach((car) => {
      this.thumbnail[car.id] = this.thumbNailURL(car);
    });
  },


  methods: {
    onTouchStart(event) {
      this.touchStartX = event.changedTouches[0].clientX;
    },

    onTouchEnd(event) {
      const touchEndX = event.changedTouches[0].clientX;
      const deltaX = touchEndX - this.touchStartX;

      if (deltaX > 0) {
        // swipe right, go to previous car
        this.previousCar();
      } else if (deltaX < 0) {
        // swipe left, go to next car
        this.nextCar();
      }
    },
    onMouseDown(event) {
      this.startX = event.clientX;
    },
    onMouseUp(event) {
      this.endX = event.clientX;
      const diff = this.startX - this.endX;
      if (diff > 0 && Math.abs(diff) > 50) {
        this.nextCar();
      } else if (diff < 0 && Math.abs(diff) > 50) {
        this.previousCar();
      }
    },
    textUnderPicture(car){
      return `  Udbetaling kr. ${car.base_udbetaling} - månedlig
                  leasingydelse kr. ${car.base_maanedspris} \n-
                  udleveringsrapport kr. 495, total omkostning i 36 mdr. Total:
                  ${((car.base_maanedspris * 36) + (car.groen_ejer_afgift / 6)*36)+ 495 + car.base_udbetaling + (parseInt(car.dokument_gebyr_ved_oprettelse)??0)} kr. `
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
        this.thumbnail[car.id] = this.pictureURL + data.data.thumbnail + '?fit=cover&width=300&height=200&quality=80';
        return this.thumbnail[car.id] = this.pictureURL + data.data.thumbnail + '?fit=cover&width=300&height=200&quality=80';
      } else
        return this.thumbnail[car.id] = `${this.pictureURL}7bb1ea40-d2c8-45c9-ba61-ce460f2a0830?fit=cover&width=300&height=200&quality=80`;
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
        return this.carImages[car.id] = `${this.pictureURL}7bb1ea40-d2c8-45c9-ba61-ce460f2a0830?fit=cover&width=300&height=200&quality=80`;

      } else {
        this.carImages[car.id] = this.pictureURL + data.data[0].directus_files_id + '?fit=cover&width=300&height=200&quality=80';
        return this.pictureURL + data.data[0].directus_files_id + '?fit=cover&width=300&height=200&quality=80';
      }
    },
    getFeatures(car) {
      if (!car.Udstyr) {
        return "Ingen udstyr";
      }

      const featureNames = car.Udstyr.map((feature) => {
        const matchingFeature = this.featureItems.find((item) => item.value === feature);
        return matchingFeature ? matchingFeature.name : null;
      }).filter(Boolean);

      const featuresToShow = featureNames.slice(0, 3);

      if (featuresToShow.length > 0) {
        return "Kommer bl.a. med " + featuresToShow.join(", ");
      } else {
        return "Ingen udstyr";
      }
    },
    previousCar() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.displayedCars = this.carData.slice(
          this.currentIndex,
          this.currentIndex + 3
        );
        // add the animate-slide class to each card
        const newCarCards = document.querySelectorAll('.product___3vmta');
        newCarCards[this.currentIndex].classList.add('animate-slide');
        newCarCards[this.currentIndex + 2].classList.remove('animate-slide');
      }
    },

    nextCar() {
      if (this.currentIndex < this.carData.length - 3) {
        this.currentIndex++;
        this.displayedCars = this.carData.slice(
          this.currentIndex,
          this.currentIndex + 3
        );
        // add the animate-slide class to each card
        const newCarCards = document.querySelectorAll('.product___3vmta');
        newCarCards[this.currentIndex + 2].classList.add('animate-slide');
        newCarCards[this.currentIndex - 1].classList.remove('animate-slide');
      }
    },

  },
  computed: {
    displayedCars() {
      // Kun for at vise 8 biler
      return this.carData.slice(this.currentIndex, this.currentIndex + 3);
    },
    displayedCarsMobile() {
      // Kun for at vise 8 biler

      return this.carData.slice(this.currentIndex, this.currentIndex + 1);
    },
  },
};
</script>

<style >
/* Media query for desktop to display id isDesktop*/
@media only screen and (min-width: 1028px){
  #isDesktop{
    display: flex;
  }
  #isMobile{
    display: none;
  }
}
/* Media query for mobile to display id isMobile*/
@media only screen and (max-width: 1028px){
  #isDesktop{
    display: none;
  }
  .products___1WcE3 .list___1c2KX {
    display: flex;
    align-items: center;
  }
  #isMobile{
    display: flex;
  }
}

#product__card.product___3vmta {
  animation: scale 0.5s ease-in-out;
  user-select: none;
}

@keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes scale {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
  0% {
    opacity: 0.3;
    transform: translateX(-100%);
    scale: 0.9;
  }
  50% {
    opacity: 0.6;
    transform: scale(1.2);
  }
  100% {

   scale: 1;
    transform: translateX(0);
  }
}

@keyframes slide {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}


.control-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 10px;

}

.control-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.next-btn {

  width: 7vw;
  background-color: white;
  color: black;

  margin-right: auto;
}
.pre-btn{

  width: 7vw;
  background-color: white;
  color: black;
  margin-left: auto;
}

/* Make pre-btn and next-btn mobile responsive */
@media screen and (max-width: 600px) {
  .pre-btn, .next-btn {
    width: 6vw;

  }
  .next-btn{
    margin-right: 1vw;
  }
  .pre-btn{
    margin-left: 1vw;
  }
  .arrow__btn{
    width: 100%;
  }
  .control-btn{
    padding: 0;
  }
}

.control-btn:hover {

}

.button___2oWcS {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem 1.3rem;
  background-color: var(--button-color);
  color: var(--second-button-color);
  font-weight: 600;
  border-radius: 0.3rem;
  border: 2px solid var(--button-color);
  cursor: pointer;
  -webkit-transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -o-transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  outline: none;
}

.button___2oWcS:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.button___2oWcS.default___31nVJ {
  --button-color: #1892c3;
  --second-button-color: #fff;
}

.button___2oWcS.outlined___F3j36 {
  color: var(--button-color);
  background-color: transparent;
}

.button___2oWcS.outlined___F3j36:not(:disabled):hover {
  color: var(--second-button-color);
  background-color: var(--button-color);
}

.button___2oWcS.rounded-corners___2DuU9 {
  border-radius: 2rem;
}

.button___2oWcS.small___3BQ-q {
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
}

@media screen and (min-width: 25rem) {
  .button___2oWcS.small___3BQ-q {
    padding: 0.5rem 1.5rem;
  }
}

.detail___22pEp {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.detail___22pEp.capitalize___o-pqq .title___3rl0o {
  text-transform: capitalize;
}

.detail___22pEp.small-size___1i0G0 .icon___2OPTw {
  width: 1.25rem;
  height: 1.25rem;
}

.detail___22pEp .icon___2OPTw {
  width: 1.6rem;
  height: 1.6rem;
}

.detail___22pEp .title___3rl0o {
  margin-left: 0.75rem;
}

.energy-class___BHiLA {
  --box-height: 1.1rem;
  --half-box-height: calc(var(--box-height) / 2);
  --energy-class-font-size: 0.7rem;
  --energy-class-width: 3.5rem;
  position: relative;
  font-size: var(--energy-class-font-size);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  color: #fff;
  height: var(--box-height);
  width: var(--energy-class-width);
}

.energy-class___BHiLA span:nth-of-type(1) {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.energy-class___BHiLA span {
  font-size: var(--energy-class-font-size);
  display: inline-block;
  padding-left: 0.5rem;
  width: 3rem;
  text-align: left !important;
  z-index: 2;
}

.energy-class___BHiLA sup {
  -ms-flex-item-align: baseline;
  align-self: baseline;
}

.energy-class___BHiLA .arrow-right___1p9wE {
  display: inline-block;
  width: 0;
  height: 0;
  border-top: var(--half-box-height) solid transparent;
  border-bottom: var(--half-box-height) solid transparent;
  border-left: var(--half-box-height) solid;
}

.energy-class___BHiLA .shadow___2ZdD4 {
  position: absolute;
  top: 1px;
  left: 1px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 1;
  width: inherit;
}

.energy-class___BHiLA .shadow___2ZdD4 span:nth-of-type(1) {
  background-color: #101011;
  opacity: 0.1;
}

.energy-class___BHiLA .shadow___2ZdD4 .arrow-right___1p9wE {
  border-left-color: rgba(16, 16, 17, 0.1);
}

.technical-details___2buqo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

@media screen and (min-width: 25rem) {
  .technical-details___2buqo {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }
}

.technical-details___2buqo .details-group___19Kyu:first-child {
  min-width: 60%;
}

.technical-details___2buqo .details-group___19Kyu:last-child {
  min-width: 35%;
}

.technical-details___2buqo .details-group___19Kyu .detail___3AT8g {
  margin: 0.75rem 0;
}

.technical-details___2buqo .details-group___19Kyu .detail___3AT8g .emissions___3B8H6 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.technical-details___2buqo .details-group___19Kyu .detail___3AT8g .emissions___3B8H6 .energy-class___3KEQh {
  margin-left: 0.6rem;
}

.label___xUzK4 {
  display: inline-block;
  font-family: "HM Sans Semi Bold", "HMSansHebrew-SemiBold", "ãƒ’ãƒ©ã‚®ãƒŽè§’ã‚´ Pro W3", "Hiragino Kaku Gothic Pro", Osaka, "ãƒ¡ã‚¤ãƒªã‚ª", Meiryo, "ï¼­ï¼³ ï¼°ã‚´ã‚·ãƒƒã‚¯", "MS PGothic", sans-serif;
  height: 1.205rem;
  padding: 0.125rem 0.5rem;
  font-size: 0.70rem;
  border-radius: 0 0 0.5rem 0;
  color: #fff;
  text-transform: uppercase;
}

.label___xUzK4.black___2xtI_ {
  background-color: #101011;
}

.label___xUzK4.red___2_WDA {
  background-color: #ff5975;
}

.product-card___2naPO {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  background-color: #f2f2f2;
  cursor: pointer;
  -webkit-transition: -webkit-transform 0.3s ease-in-out;
  transition: -webkit-transform 0.3s ease-in-out;
  -o-transition: transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
}

@media screen and (min-width: 25rem) {
  .product-card___2naPO {

  }
}

.product-card___2naPO:hover {
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
}

.product-card___2naPO.has-cta___1N-4L {

}

@media screen and (min-width: 25rem) {
  .product-card___2naPO.has-cta___1N-4L {

  }
}

.product-card___2naPO .image-wrapper___2BJkg {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 2rem 1rem 0;
  width: 100%;
  height: 11.5rem;
}

.product-card___2naPO .image-wrapper___2BJkg.main-image___2PNg2 {
  padding: 0;
}

.product-card___2naPO .image-wrapper___2BJkg.main-image___2PNg2 .image___3UcXF {
  -o-object-fit: cover;
  object-fit: cover;
}

.product-card___2naPO .image-wrapper___2BJkg .image___3UcXF {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
}

.product-card___2naPO .label-wrap___2_2TG {
  position: absolute;
  top: 0.5rem;
  left: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.product-card___2naPO .label-wrap___2_2TG .label___IKlVk {
  margin-bottom: 0.5rem;
}

.product-card___2naPO .content___2i8ss {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0px;
  flex: 1 1 0;
  padding: 1.2rem;
}

.product-card___2naPO .title___3jeSd {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.product-card___2naPO .title___3jeSd .name___3OMhd {
  font-weight: bold;
  font-size: 1rem;
}

.product-card___2naPO .title___3jeSd .price___1hgWK {
  margin-top: 0.6rem;
  font-size: 0.8rem;
}

.product-card___2naPO .title___3jeSd .price___1hgWK .value___3qMAh {
  font-size: 1rem;
  font-weight: bold;
  padding: 0 0.25rem;
}

.product-card___2naPO .title___3jeSd .additional-prices___22Z8w {
  margin-top: 0.25rem;
  font-size: 0.5rem;
  color: #878788;
}

.product-card___2naPO .technical-details___2vodE {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 0.5rem -0.1rem 0;
  font-size: 0.875rem;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
}

@media screen and (min-width: 25rem) {
  .product-card___2naPO .technical-details___2vodE {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }
}

.product-card___2naPO .highlighted-features___34JSO {
  margin-top: 0.6rem;
  font-size: 0.8rem;
  text-align: center;
}

.product-card___2naPO .cta-button___2wq8T {
  width: auto;
  height: auto;
  margin: var(--space-xs) auto;
}

.products___1WcE3 {
  --side-padding: 1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  max-width: 90rem;
  margin: auto;
  padding: 2rem var(--side-padding);
}

@media screen and (min-width: 64rem) {
  .products___1WcE3 {
    --side-padding: 4rem;
  }
}

.products___1WcE3 .list___1c2KX {
  --products-per-row: 1;
  --product-margin: 1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: calc(var(--product-margin) * -1);
}

@media screen and (min-width: 46.75rem) {
  .products___1WcE3 .list___1c2KX {
    --products-per-row: 1;
  }
}

@media screen and (min-width: 64rem) {
  .products___1WcE3 .list___1c2KX {
    --products-per-row: 3;
    --product-margin: 0.5rem;
  }
}

.products___1WcE3 .list___1c2KX .product___3vmta {
  margin: var(--product-margin);
  width: calc(100% / var(--products-per-row) - var(--product-margin) * 2);
}

.main-flow___Sjg41 {
  display: -webkit-box;
  display: -ms-flexbox;

  display: flex;
  display: contents;
  min-height: 34rem;
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

button {
  padding: 0;
  background-color: unset;
  font: inherit;
  font-size: inherit;
  font-weight: inherit;
  border: none;
}
</style>
