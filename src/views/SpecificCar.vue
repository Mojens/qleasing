<script setup>
import { ref, onMounted } from "vue";
import AllStepsForm from "@/components/MultiStepFormLease/AllStepsForm.vue";
import autoAnimate from "@formkit/auto-animate";

const dropdown = ref(); // we need a DOM node
const show = ref(false);

onMounted(() => {
  autoAnimate(dropdown.value); // thats it!
});
</script>

<template>
  <div class="ct-section-inner-wrap specific__car-section">
    <!-- START DISPLAYING CAR -->

    <div id="portal">
      <div class="modal___25xvj is-open___1eAPm" style="height: 948px">
        <div class="close-button-wrapper___1dYxl">
          <button
            class="button___2oWcS dark___2wNZC button___3129j rounded-corners___2DuU9"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="white"
              class="icon___3oVL5"
            >
              <path
                d="M19.5 5L5.5 19"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="square"
              ></path>
              <path
                d="M19.5 19L5.5 5"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="square"
              ></path>
            </svg>
          </button>
        </div>
        <div class="content___FOiFD">
          <div class="product___MbOUd">
            <div class="product-overview___h1U1n overview___1ZyZV">
              <a class="logoWrapper___3_qg1" href="/"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="38"
                  height="40"
                  viewBox="0 0 38 40"
                >
                  <defs>
                    <path
                      id="a"
                      d="M19.487 13.64v8.283a1.85 1.85 0 01-1.851 1.851 1.85 1.85 0 01-1.851-1.851V13.64c0-.975.78-1.851 1.851-1.851 1.072.097 1.851.876 1.851 1.85z"
                    ></path>
                  </defs>
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    stroke="none"
                    stroke-width="1"
                  >
                    <g fill-rule="nonzero">
                      <g>
                        <use fill="#EC4969" xlink:href="#a"></use>
                        <use fill="#1892C3" xlink:href="#a"></use>
                      </g>
                      <path
                        fill="#000"
                        d="M31.861 21.923c0-3.898-1.559-7.405-4.092-9.939-2.63-2.533-6.139-4.19-10.036-4.19-3.897 0-7.405 1.56-9.938 4.093-2.534 2.533-4.092 6.04-4.092 9.938 0 3.898 1.558 7.405 4.092 9.939 2.533 2.533 6.04 4.092 9.938 4.092 3.897 0 7.405-1.559 9.938-4.092 2.631-2.339 4.19-5.944 4.19-9.841zM37.123 6.43c.682.682.682 1.851 0 2.533-.682.682-1.852.682-2.534 0l-.682-.682-2.533 2.436c2.533 3.02 3.995 6.918 3.995 11.205 0 9.743-7.892 17.733-17.733 17.733C7.892 39.656 0 31.764 0 21.923 0 12.763 7.015 5.26 15.882 4.287V1.851c0-.974.78-1.851 1.851-1.851.974 0 1.851.78 1.851 1.851v2.534c3.508.39 6.723 1.753 9.354 3.897l2.533-2.436-.682-.682c-.682-.682-.682-1.851 0-2.533.682-.682 1.852-.682 2.534 0l1.948 1.948 1.852 1.852z"
                      ></path>
                    </g>
                  </g></svg></a
              ><img
                class="image___1KbwI"
                src="https://res.cloudinary.com/digital-interdan/image/upload/c_fit,e_trim:0,q_80,w_1280/v1/cars/Fiat_500_Cult_876.png"
                alt="Fiat 500C Connect 70HK"
                title="Fiat 500C Connect 70HK"
              />
              <div class="gallery-container___1udhh"></div>
              <div class="info___-uU-L">
                <div class="info-block___IMqr3">
                  <div class="price___lyAnI">
                    <span class="prefix___8I2P1"
                      >Månedlig leasingsydelse inkl.moms </span
                    ><span class="value___1Ew-v">{{
                      displayCar.base_maanedspris
                    }}</span
                    >kr./md.
                  </div>
                  <div class="additional-price___2tuCL">
                    inkl. forsikring og grøn ejerafgift
                  </div>

                  <span class="prefix___8I2P1"
                    >Samlet udbetaling inkl.moms </span
                  ><span class="value___1Ew-v">{{
                    displayCar.base_udbetaling
                  }}</span
                  >kr.
                </div>
                <div class="additional-price___2tuCL">
                  Udbetaling kr. {{ displayCar.base_udbetaling }} - månedlig
                  leasingydelse kr. {{ displayCar.base_maanedspris }} -
                  udleveringsrapport kr. 495, total omkostning i 36 mdr. Total:
                  {{ displayCar.base_maanedspris * 36 + 495 }}
                </div>
              </div>
              <div class="disclaimers___2MvJV">
                <p class="disclaimer___3U-mX">
                  Har du brug for hjælp – ring til kundeservice på
                  tlf.:&nbsp;<span class="contact-data___2hfm3"
                    >89 88 50 80</span
                  >
                </p>
              </div>
            </div>
            <div class="steps___2tBXW steps___paC4-">
              <div class="interaction-block___1Zg73 info___JN_si">
                <div class="content___2Jovb">
                  <h3 class="title___O42Tx">
                    {{ displayCar.brand }} {{ displayCar.model }}
                  </h3>
                  <div
                    class="technical-details___2buqo technical-details___1rZ29"
                  >
                    <div class="details-group___19Kyu">
                      <div
                        class="detail___22pEp detail___3AT8g capitalize___o-pqq"
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
                        <div class="title___3rl0o">
                          {{ displayCar.gear_type }}
                        </div>
                      </div>
                      <div class="detail___22pEp detail___3AT8g">
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
                            >&nbsp;{{ displayCar.co2 }} g/km
                            <div
                              class="energy-class___BHiLA energy-class___3KEQh"
                            >
                              <span
                                :class="[
                                  'energimaerke',
                                  {
                                    green_energy:
                                      displayCar.energimaerke === 'A+',
                                    yellow_energy:
                                      displayCar.energimaerke === 'A',
                                    orange_energy:
                                      displayCar.energimaerke === 'B',
                                  },
                                ]"
                              >
                                {{ displayCar.energimaerke }}
                                <sup v-if="displayCar.energimaerke === 'A+'"
                                  >+</sup
                                > </span
                              ><span
                                class="arrow-right___1p9wE"
                                :class="[
                                  'energimaerke',
                                  {
                                    green_energy__arrow:
                                      displayCar.energimaerke === 'A+',
                                    yellow_energy__arrow:
                                      displayCar.energimaerke === 'A',
                                    orange_energy__arrow:
                                      displayCar.energimaerke === 'B',
                                  },
                                ]"
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
                        class="detail___22pEp detail___3AT8g capitalize___o-pqq"
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
                        <div class="title___3rl0o">
                          {{ displayCar.braendstof }}
                        </div>
                      </div>
                      <div class="detail___22pEp detail___3AT8g">
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
                          {{ displayCar.kilometerprliter }} km/l
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="section___2oSoR highlighted-features___29Aku">
                    <div class="title___3xuUr">Fremhævede funktioner</div>
                    <div class="value___xZmjI">
                      <div>
                        {{ getFeatures(displayCar) }}
                      </div>
                    </div>
                  </div>
                  <div ref="dropdown" class="dropdown">
                    <strong class="dropdown-label" @click="show = !show">
                      Se Fuld Udstyrsliste
                    </strong>
                    <p class="dropdown-content" v-if="show">
                      {{ getAllFeatures(displayCar) }}
                    </p>
                  </div>
                </div>
                <div class="buttons-wrapper___3WoLU">
                  <button
                    class="button___2oWcS default___31nVJ proceed-button___2ZgPy rounded-corners___2DuU9"
                    data-qa="proceed-button"
                  >
                    Fortsæt
                  </button>
                  <div class="back-link-wrapper___o4YqX">
                    <a class="back-link___1LJpm" href="#/">Tilbage</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal___25xvj is-open___1eAPm" style="height: 948px">
        <div class="close-button-wrapper___1dYxl">
          <button
            class="button___2oWcS dark___2wNZC button___3129j rounded-corners___2DuU9"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="white"
              class="icon___3oVL5"
            >
              <path
                d="M19.5 5L5.5 19"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="square"
              ></path>
              <path
                d="M19.5 19L5.5 5"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="square"
              ></path>
            </svg>
          </button>
        </div>
        <div class="content___FOiFD">
          <div class="product___MbOUd">
            <div class="product-overview___h1U1n overview___1ZyZV">
              <a class="logoWrapper___3_qg1" href="/"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="38"
                  height="40"
                  viewBox="0 0 38 40"
                >
                  <defs>
                    <path
                      id="a"
                      d="M19.487 13.64v8.283a1.85 1.85 0 01-1.851 1.851 1.85 1.85 0 01-1.851-1.851V13.64c0-.975.78-1.851 1.851-1.851 1.072.097 1.851.876 1.851 1.85z"
                    ></path>
                  </defs>
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    stroke="none"
                    stroke-width="1"
                  >
                    <g fill-rule="nonzero">
                      <g>
                        <use fill="#EC4969" xlink:href="#a"></use>
                        <use fill="#1892C3" xlink:href="#a"></use>
                      </g>
                      <path
                        fill="#000"
                        d="M31.861 21.923c0-3.898-1.559-7.405-4.092-9.939-2.63-2.533-6.139-4.19-10.036-4.19-3.897 0-7.405 1.56-9.938 4.093-2.534 2.533-4.092 6.04-4.092 9.938 0 3.898 1.558 7.405 4.092 9.939 2.533 2.533 6.04 4.092 9.938 4.092 3.897 0 7.405-1.559 9.938-4.092 2.631-2.339 4.19-5.944 4.19-9.841zM37.123 6.43c.682.682.682 1.851 0 2.533-.682.682-1.852.682-2.534 0l-.682-.682-2.533 2.436c2.533 3.02 3.995 6.918 3.995 11.205 0 9.743-7.892 17.733-17.733 17.733C7.892 39.656 0 31.764 0 21.923 0 12.763 7.015 5.26 15.882 4.287V1.851c0-.974.78-1.851 1.851-1.851.974 0 1.851.78 1.851 1.851v2.534c3.508.39 6.723 1.753 9.354 3.897l2.533-2.436-.682-.682c-.682-.682-.682-1.851 0-2.533.682-.682 1.852-.682 2.534 0l1.948 1.948 1.852 1.852z"
                      ></path>
                    </g>
                  </g></svg></a
              ><img
                class="image___1KbwI"
                src="https://res.cloudinary.com/digital-interdan/image/upload/c_fit,e_trim:0,q_80,w_1280/v1/cars/Fiat_500_Cult_876.png"
                alt="Fiat 500C Connect 70HK"
                title="Fiat 500C Connect 70HK"
              />

              <div class="gallery-container___1udhh"></div>
              <!-- CONTENT 1 IMAGE SIDE -->
              <div class="info___-uU-L" v-if="showContent1">
                <div class="info-block___IMqr3">
                  <div class="price___lyAnI">
                    <span class="prefix___8I2P1"
                    >Månedlig leasingsydelse inkl.moms </span
                    ><span class="value___1Ew-v">{{
                      displayCar.base_maanedspris
                    }}</span
                  >kr./md.
                    <br />


                    <span class="prefix___8I2P1"
                    >Samlet udbetaling inkl.moms </span
                    ><span class="value___1Ew-v">{{
                      displayCar.base_udbetaling
                    }}</span
                  >kr.
                  </div>
                  <div class="additional-price___2tuCL">
                    inkl. forsikring og grøn ejerafgift
                  </div>
                  <div class="additional-price___2tuCL">
                    Udbetaling kr. {{ displayCar.base_udbetaling }} - månedlig
                    leasingydelse kr. {{ displayCar.base_maanedspris }} -
                    udleveringsrapport kr. 495, total omkostning i 36 mdr.
                    Total:
                    {{ displayCar.base_maanedspris * 36 + 495 }}
                  </div>
                </div>
              </div>

              <!-- CONTENT 2 IMAGE SIDE -->
              <div class="info___-uU-L" v-else>
                <div class="info-block___IMqr3">
                  <div class="price___lyAnI">
                    <span class="prefix___8I2P1"
                      >Månedlig leasingsydelse inkl.moms </span
                    ><span class="value___1Ew-v">{{
                      displayCar.base_maanedspris
                    }}</span
                    >kr./md.
                    <br />


                    <span class="prefix___8I2P1"
                      >Samlet udbetaling inkl.moms </span
                    ><span class="value___1Ew-v">{{
                      displayCar.base_udbetaling
                    }}</span
                    >kr.
                  </div>
                  <div class="additional-price___2tuCL">
                    inkl. forsikring og grøn ejerafgift
                  </div>
                  <div class="additional-price___2tuCL">
                    Udbetaling kr. {{ displayCar.base_udbetaling }} - månedlig
                    leasingydelse kr. {{ displayCar.base_maanedspris }} -
                    udleveringsrapport kr. 495, total omkostning i 36 mdr.
                    Total:
                    {{ displayCar.base_maanedspris * 36 + 495 }}
                  </div>
                </div>
                <div class="info-group___1QcKa">
                  <div class="info-block___IMqr3 small___1ryj1 item___m6Uhu">
                    24 mdr.
                  </div>
                  <div class="info-block___IMqr3 small___1ryj1 item___m6Uhu">
                    2.500 km./md.
                  </div>
                </div>
              </div>
              <div class="disclaimers___2MvJV">
                <p class="disclaimer___3U-mX">
                  Har du brug for hjælp – ring til kundeservice på
                  tlf.:&nbsp;<span class="contact-data___2hfm3"
                    >89 88 50 80</span
                  >
                </p>
              </div>
            </div>
            <div class="steps___2tBXW steps___paC4-">
              <div class="interaction-block___1Zg73 info___JN_si">
                <div class="content___2Jovb" v-if="showContent1">
                  <h3 class="title___O42Tx">
                    {{ displayCar.brand }} {{ displayCar.model }}
                  </h3>
                  <div
                    class="technical-details___2buqo technical-details___1rZ29"
                  >
                    <div class="details-group___19Kyu">
                      <div
                        class="detail___22pEp detail___3AT8g capitalize___o-pqq"
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
                        <div class="title___3rl0o">
                          {{ displayCar.gear_type }}
                        </div>
                      </div>
                      <div class="detail___22pEp detail___3AT8g">
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
                            >&nbsp;{{ displayCar.co2 }} g/km
                            <div
                              class="energy-class___BHiLA energy-class___3KEQh"
                            >
                              <span
                                :class="[
                                  'energimaerke',
                                  {
                                    green_energy:
                                      displayCar.energimaerke === 'A+',
                                    yellow_energy:
                                      displayCar.energimaerke === 'A',
                                    orange_energy:
                                      displayCar.energimaerke === 'B',
                                  },
                                ]"
                              >
                                {{ displayCar.energimaerke }}
                                <sup v-if="displayCar.energimaerke === 'A+'"
                                  >+</sup
                                > </span
                              ><span
                                class="arrow-right___1p9wE"
                                :class="[
                                  'energimaerke',
                                  {
                                    green_energy__arrow:
                                      displayCar.energimaerke === 'A+',
                                    yellow_energy__arrow:
                                      displayCar.energimaerke === 'A',
                                    orange_energy__arrow:
                                      displayCar.energimaerke === 'B',
                                  },
                                ]"
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
                        class="detail___22pEp detail___3AT8g capitalize___o-pqq"
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
                        <div class="title___3rl0o">
                          {{ displayCar.braendstof }}
                        </div>
                      </div>
                      <div class="detail___22pEp detail___3AT8g">
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
                          {{ displayCar.kilometerprliter }} km/l
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="section___2oSoR highlighted-features___29Aku">
                    <div class="title___3xuUr">Fremhævede funktioner</div>
                    <div class="value___xZmjI">
                      <div>
                        {{ getFeatures(displayCar) }}
                      </div>
                    </div>
                  </div>
                  <div class="description___O0o47"></div>

                  <div ref="dropdown" class="dropdown">
                    <strong class="dropdown-label" @click="show = !show">
                      Se Fuld Udstyrsliste
                    </strong>
                    <p class="dropdown-content" v-if="show">
                      {{ getAllFeatures(displayCar) }}
                    </p>
                  </div>
                </div>
                <div class="content___2Jovb" v-else>
                  <!-- content 2 -->

                  <!-- START MULTI FORM  -->

                    <AllStepsForm />

                  <!-- END MULTI FORM  -->
                </div>
                <div class="buttons-wrapper___3WoLU">
                  <button
                    id="proceed-button"
                    @click="showContent1 = false"
                    class="button___2oWcS default___31nVJ proceed-button___2ZgPy rounded-corners___2DuU9"
                  >
                    Fortsæt
                  </button>

                  <div class="back-link-wrapper___o4YqX">
                    <a class="back-link___1LJpm" href="#/">Tilbage</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- END DISPLAYING CAR -->
  </div>
</template>

<script>
import { useRouter } from "vue-router";
const router = useRouter();
export default {
  name: "SpecificCar",

  data() {
    return {
      currentURL: import.meta.env.VITE_APP_CARS_URL,
      pictureURL: import.meta.env.VITE_APP_PICTURE_URL,
      fileURL: import.meta.env.VITE_APP_FILE_ID_URL,
      readerAPI: import.meta.env.VITE_APP_READER_API,
      imageUrl: null,
      carData: {},
      carImages: {},
      featureItems: [
        { value: "airc", name: "Air Condition", count: 0 },
        { value: "fartpilot", name: "Fartpilot", count: 0 },
        { value: "bluetooth", name: "Bluetooth", count: 0 },
        { value: "sædevarme", name: "Sædevarme", count: 0 },
        { value: "varmeirat", name: "Rat-varme", count: 0 },
        {
          value: "parkeringssensorfor",
          name: "Parkeringssensor (foran)",
          count: 0,
        },
        {
          value: "parkeringssensorbag",
          name: "Parkeringssensor (bag)",
          count: 0,
        },
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
      displayAllFeatures: false,
      showContent1: true,
    };
  },
  created() {
    this.fetchCarData();
  },
  methods: {
    goToLeaseForm(id) {
      router.push({ name: "SpecificCarFormSteps", params: { id } });
    },

    async fetchCarData() {
      const id = this.$route.params.id;
      const apiUrl = `${this.currentURL}${id}`;
      const response = await fetch(apiUrl, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.readerAPI}`,
        },
      });
      const data = await response.json();
      this.carData = data.data;
      this.carData.forEach((car) => {
        this.carImages[car.id] = this.imageURL(car);
      });
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
        return (this.carImages[car.id] =
          "https://qgyn2z3q.directus.app/assets/7bb1ea40-d2c8-45c9-ba61-ce460f2a0830?fit=cover&width=300&height=200&quality=80");
      } else {
        this.carImages[car.id] =
          this.pictureURL + data.data[0].directus_files_id;
        return this.pictureURL + data.data[0].directus_files_id;
      }
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
    getAllFeatures(car) {
      if (!car.Udstyr) {
        return "Ingen udstyr";
      }

      const featureNames = car.Udstyr.map((feature) => {
        return feature;
      });

      if (featureNames.length > 0) {
        // return it as a list style

        return featureNames.join(", ");
      } else {
        return "Ingen udstyr";
      }
    },
  },
  computed: {
    displayCar() {
      if (Object.keys(this.carData).length > 0) {
        return this.carData;
      } else {
        return null;
      }
    },
  },
};
</script>

<style scoped>
.green_energy {
  background: #6ccb6c;
  color: white;
  font-weight: 900;
}
.yellow_energy {
  background: yellow;
  color: #505050;
  font-weight: 900;
}

.orange_energy {
  background: orange;
  color: white;
  font-weight: 900;
}

.green_energy__arrow {
  color: #6ccb6c;
}

.yellow_energy__arrow {
  color: yellow;
}

.orange_energy__arrow {
  color: orange;
}
.info-block___IMqr3 {
  padding: 0 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  border-radius: 4px;
}
@media screen and (min-width: 64rem) {
  .info-block___IMqr3 {
    padding: 1.4rem 0;
    font-size: 1rem;
    background-color: #fff;
  }
}
.info-block___IMqr3.small___1ryj1 {
  font-size: 0.85rem;
}
@media screen and (min-width: 64rem) {
  .info-block___IMqr3.small___1ryj1 {
    padding: 1rem 0;
    font-size: 0.9rem;
  }
}
.product-overview___h1U1n .info___-uU-L .info-group___1QcKa {
  display: none;
  margin-top: 1.4rem;
}
@media screen and (min-width: 64rem) {
  .product-overview___h1U1n .info___-uU-L .info-group___1QcKa {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}
.product-overview___h1U1n .info___-uU-L .info-group___1QcKa .item___m6Uhu {
  width: calc(50% - 1.4rem / 2);
}
.product-overview___h1U1n
  .info___-uU-L
  .info-group___1QcKa
  .item___m6Uhu:first-child {
  margin-right: 1.4rem;
}

.dropdown {
  border: 2px solid gray;
  border-radius: 0.5em;
  background-color: #fff;
  margin-bottom: 2em;
}
.dropdown strong {
  display: block;
  padding: 1em;
  cursor: pointer;
}
.dropdown-content {
  padding: 1em;
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
.button___2oWcS.dark___2wNZC {
  --button-color: #101011;
  --second-button-color: #fff;
}
.button___2oWcS.rounded-corners___2DuU9 {
  border-radius: 2rem;
}
.button___2oWcS svg {
  fill: #fff;
  stroke: #fff;
  -webkit-transition: stroke 0.3s ease-in-out, fill 0.3s ease-in-out;
  -o-transition: stroke 0.3s ease-in-out, fill 0.3s ease-in-out;
  transition: stroke 0.3s ease-in-out, fill 0.3s ease-in-out;
}
.modal___25xvj {
  position: fixed;
  top: 100vh;
  left: 0;
  z-index: 100;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  background-color: #fff;
  -webkit-transition: top 0.5s ease-in-out;
  -o-transition: top 0.5s ease-in-out;
  transition: top 0.5s ease-in-out;
}
.modal___25xvj.is-open___1eAPm,
.modal___25xvj.is-open___1eAPm .close-button-wrapper___1dYxl {
  top: 0;
}
.modal___25xvj .content___FOiFD {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: white;
}
.modal___25xvj .close-button-wrapper___1dYxl {
  position: fixed;
  top: 100vh;
  right: 0;
  z-index: 101;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  margin-top: auto;
  padding: 1rem;
  -webkit-transition: top 0.5s ease-in-out;
  -o-transition: top 0.5s ease-in-out;
  transition: top 0.5s ease-in-out;
}
@media screen and (min-width: 46.75rem) {
  .modal___25xvj .close-button-wrapper___1dYxl {
    padding-left: 2rem;
  }
}
.modal___25xvj .close-button-wrapper___1dYxl .button___3129j {
  padding: 0;
  width: 2.2rem;
  height: 2.2rem;
}
.modal___25xvj .close-button-wrapper___1dYxl .button___3129j .icon___3oVL5 {
  width: 50%;
}
.info-block___IMqr3 {
  padding: 0 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  border-radius: 4px;
}
@media screen and (min-width: 64rem) {
  .info-block___IMqr3 {
    padding: 1.4rem 0;
    font-size: 1rem;
    background-color: #fff;
  }
}
.product-overview___h1U1n {
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
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  padding: 1rem 1rem 1rem;
  background-color: #f2f2f2;
  overflow-y: auto;
}
@media screen and (min-width: 64rem) {
  .product-overview___h1U1n {
    padding: 4rem 2rem 1rem;
  }
}
@media screen and (min-width: 80rem) {
  .product-overview___h1U1n {
    padding-top: 6rem;
  }
}
@media screen and (min-width: 100rem) {
  .product-overview___h1U1n {
    padding-top: 12rem;
  }
}
.product-overview___h1U1n .logoWrapper___3_qg1 {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 2.2rem;
  height: 2.2rem;
}
.product-overview___h1U1n .logoWrapper___3_qg1 svg {
  width: 100%;
  height: 100%;
}
.product-overview___h1U1n .image___1KbwI {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  min-height: 5rem;
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
}
@media screen and (min-width: 64rem) {
  .product-overview___h1U1n .image___1KbwI {
    max-height: 16rem;
  }
}
@media screen and (min-width: 100rem) {
  .product-overview___h1U1n .image___1KbwI {
    max-height: 24rem;
  }
}
.product-overview___h1U1n .gallery-container___1udhh {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 1rem;
  gap: 3rem;
}
.product-overview___h1U1n .info___-uU-L {
  width: 100%;
  max-width: 34rem;
  margin: 1rem 0;
}
@media screen and (min-width: 64rem) {
  .product-overview___h1U1n .info___-uU-L {
    margin-top: 3rem;
  }
}
.product-overview___h1U1n .info___-uU-L .price___lyAnI .prefix___8I2P1 {
  font-weight: normal;
}
.product-overview___h1U1n .info___-uU-L .price___lyAnI .value___1Ew-v {
  font-weight: bold;
  font-size: 1.1rem;
  padding: 0 0.5rem;
}
@media screen and (min-width: 64rem) {
  .product-overview___h1U1n .info___-uU-L .price___lyAnI .value___1Ew-v {
    font-size: 1.4rem;
  }
}
.product-overview___h1U1n .info___-uU-L .additional-price___2tuCL {
  margin-top: 0.5rem;
  font-size: 0.5rem;
  font-weight: normal;
  color: #878788;
}
.product-overview___h1U1n .disclaimers___2MvJV {
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
  margin-top: auto;
}
.product-overview___h1U1n .disclaimers___2MvJV .disclaimer___3U-mX {
  font-size: 0.625rem;
  color: #58585e;
  text-align: center;
}
@media screen and (min-width: 25rem) {
  .product-overview___h1U1n .disclaimers___2MvJV .disclaimer___3U-mX {
    font-size: 0.75rem;
  }
}
.product-overview___h1U1n
  .disclaimers___2MvJV
  .disclaimer___3U-mX
  .contact-data___2hfm3 {
  color: #101011;
}
.back-link___1LJpm {
  color: #1892c3;
  font-size: 0.9rem;
  text-decoration: underline;
  cursor: pointer;
}
@media screen and (min-width: 64rem) {
  .back-link___1LJpm {
    font-size: 1rem;
  }
}
.back-link___1LJpm:visited {
  color: #1892c3;
}
.interaction-block___1Zg73 {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 0 0.25rem;
}
@media screen and (min-width: 46.75rem) {
  .interaction-block___1Zg73 {
    overflow-y: auto;
  }
}
@media screen and (min-width: 64rem) {
  .interaction-block___1Zg73 {
    height: 100%;
  }
}
.interaction-block___1Zg73 .content___2Jovb {
  width: 100%;
  max-width: 34rem;
  margin: 0 auto;
  padding: 1rem 0.5rem 3rem;
}
@media screen and (min-width: 64rem) {
  .interaction-block___1Zg73 .content___2Jovb {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 1rem 1rem 3rem;
  }
}
.interaction-block___1Zg73 .content___2Jovb .title___O42Tx {
  margin: 0;
  font-size: 1.4rem;
}
.interaction-block___1Zg73 .buttons-wrapper___3WoLU {
  width: 100%;
  margin-top: auto;
  padding: 0.75rem 0;
  background-color: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}
@media screen and (min-width: 46.75rem) {
  .interaction-block___1Zg73 .buttons-wrapper___3WoLU {
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
    left: 0;
    z-index: 100;
  }
}
@media screen and (min-width: 64rem) {
  .interaction-block___1Zg73 .buttons-wrapper___3WoLU {
    padding: 0.75rem 0 1.4rem;
  }
}
.interaction-block___1Zg73 .buttons-wrapper___3WoLU .proceed-button___2ZgPy {
  max-width: 20rem;
  height: auto;
  margin: auto;
}
.interaction-block___1Zg73 .buttons-wrapper___3WoLU .back-link-wrapper___o4YqX {
  margin: 0.95rem auto 0;
  font-size: 0.9rem;
  text-align: center;
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
.technical-details___2buqo
  .details-group___19Kyu
  .detail___3AT8g
  .emissions___3B8H6 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.technical-details___2buqo
  .details-group___19Kyu
  .detail___3AT8g
  .emissions___3B8H6
  .energy-class___3KEQh {
  margin-left: 0.6rem;
}
.section___2oSoR .title___3xuUr {
  font-size: 1.125rem;
  font-weight: bold;
}
.section___2oSoR .value___xZmjI {
  margin-top: 0.5rem;
  line-height: 1.4;
}
@media screen and (min-width: 64rem) {
  .info___JN_si {
    padding-top: 4rem;
  }
}
.info___JN_si .description___O0o47 {
  margin-top: 2.4rem;
  line-height: 1.4;
}
.info___JN_si .technical-details___1rZ29 {
  margin-top: 1.4rem;
}
@media screen and (min-width: 64rem) {
  .info___JN_si .technical-details___1rZ29 {
    margin-top: 2.4rem;
  }
}
.info___JN_si .highlighted-features___29Aku {
  margin-top: 2.4rem;
}
.steps___2tBXW {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
@media screen and (min-width: 46.75rem) {
  .steps___2tBXW {
    overflow: hidden;
  }
}
.product___MbOUd {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
}
@media screen and (min-width: 46.75rem) {
  .product___MbOUd {
    overflow: hidden;
  }
}
@media screen and (min-width: 64rem) {
  .product___MbOUd {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }
}
@media screen and (min-width: 64rem) {
  .product___MbOUd .overview___1ZyZV {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
}
@media screen and (min-width: 64rem) {
  .product___MbOUd .steps___paC4- {
    width: 50%;
    max-width: 52rem;
  }
}
/*! CSS Used from: Embedded */
@media all and (min-width: 320px) and (max-width: 667px) {
  ::-webkit-scrollbar {
    display: none;
  }
}
.title___2Hogu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  padding: 1rem 1.25rem 1.125rem 1.5rem;
  font-weight: bold;
}
.title___2Hogu .arrow-down___2zPZi {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #101011;
  -webkit-transition: -webkit-transform 0.1s ease-in-out;
  transition: -webkit-transform 0.1s ease-in-out;
  -o-transition: transform 0.1s ease-in-out;
  transition: transform 0.1s ease-in-out;
  transition: transform 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;
}
.title___2Hogu .arrow-down___2zPZi.opened___3s8Qf {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.collapse___17zDh {
  border: 1px solid #d9d9d9;
  border-radius: 3px;
}
.collapse___17zDh .container___2Tabm {
  padding: 0 1.25rem 1.125rem 1.5rem;
}
.list-item___2WyM9 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.list-item___2WyM9 .point___1_tSf {
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background-color: #58585e;
  margin-right: 0.75rem;
}
.info___JN_si .equipment___2Bnw6 {
  margin-top: 2.4rem;
}
.info___JN_si .equipment___2Bnw6 .equip___1Xzhv {
  margin-bottom: 0.2rem;
}
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
/*! CSS Used from: Embedded */
@media all and (min-width: 320px) and (max-width: 667px) {
  ::-webkit-scrollbar {
    display: none;
  }
}
</style>
